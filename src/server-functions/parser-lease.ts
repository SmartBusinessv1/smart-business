// SB-P-1.11-GC-38R — Smart Business server-side integration for the AWS
// Lambda parser boundary (Lambda Parser EIS §4, §5, §6; instruction1.144.md
// §5.5). Implements exactly the server orchestration required by the
// locked EIS: Owner/business re-derivation, EC-2 guard acquisition, Parser
// Upload Lease issuance/confirmation/claim/dispatch/finalization, transient
// S3 upload authorization, and the AWS_IAM Lambda Function URL invocation
// via the IAM Roles Anywhere workload identity.
//
// This module is additive and standalone: it does not modify
// catalog-import.ts or the existing `/catalog/import` merchant-facing flow
// (that would be a Lovable UI redesign, not authorized by this mission).
// Its output shape mirrors CatalogImportPreviewResult intentionally, so a
// later, separately authorized frontend integration can route parsed rows
// into the existing validate/classify/persist pipeline unchanged.
//
// Two Supabase clients, never interchanged (matching catalog-import.ts's
// established convention):
//   - `supabase` (caller JWT, RLS-enforced): used only to re-derive the
//     authoritative Owner/business identity -- never for lease/guard state.
//   - `supabaseAdmin` (service-role): used only to call the nine narrow
//     SECURITY DEFINER helper functions -- never a direct table write
//     (service_role's own direct privilege on parser_upload_leases is
//     SELECT-only; see the schema migration).
import { createServerFn } from "@tanstack/react-start";
import type { SupabaseClient } from "@supabase/supabase-js";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Database } from "@/integrations/supabase/types";
import { createRolesAnywhereSession } from "@/lib/parser-ingress/roles-anywhere";
import { createPresignedS3Post, invokeParserLambda } from "@/lib/parser-ingress/aws-client";
import { IMPORT_LIMITS } from "@/lib/catalog-import/limits";
import type { ParseOutcome } from "@/lib/catalog-import/types";

type AuthedClient = SupabaseClient<Database>;

// ---------------------------------------------------------------------------
// Sanitized logging / error boundary -- identical discipline to
// catalog-import.ts (SEC-IMP-7): only an allowlisted event name,
// allowlisted opaque identifiers, and a closed reason code, never a raw
// error object or provider body.
// ---------------------------------------------------------------------------

function logSanitized(event: string, context: Record<string, unknown>): void {
  console.error("[parser-lease]", { event, ...context });
}

const GENERIC_SERVER_ERROR = "We couldn't complete this action. Please try again.";

function sanitizedError(): Error {
  return new Error(GENERIC_SERVER_ERROR);
}

async function loadOwnedBusinessId(supabase: AuthedClient, userId: string): Promise<string | null> {
  const { data, error } = await supabase
    .from("businesses")
    .select("id")
    .eq("owner_id", userId)
    .maybeSingle();
  if (error) {
    logSanitized("load_business_failed", { userId });
    throw sanitizedError();
  }
  return data?.id ?? null;
}

// ---------------------------------------------------------------------------
// AWS resource configuration -- read from server-only environment
// variables (Cloudflare Worker secret bindings once deployed), never
// hardcoded, never client-visible. The workload certificate/chain/private
// key are secret material provisioned outside this repository.
// ---------------------------------------------------------------------------

interface ParserAwsConfig {
  region: string;
  bucket: string;
  functionUrl: string;
  trustAnchorArn: string;
  profileArn: string;
  roleArn: string;
  certificatePem: string;
  certificateChainPem: string;
  privateKeyPem: string;
}

function loadParserAwsConfig(): ParserAwsConfig {
  const required = {
    region: process.env.PARSER_AWS_REGION ?? "ap-south-1",
    bucket: process.env.PARSER_INGRESS_BUCKET,
    functionUrl: process.env.PARSER_LAMBDA_FUNCTION_URL,
    trustAnchorArn: process.env.PARSER_ROLES_ANYWHERE_TRUST_ANCHOR_ARN,
    profileArn: process.env.PARSER_ROLES_ANYWHERE_PROFILE_ARN,
    roleArn: process.env.PARSER_ROLES_ANYWHERE_ROLE_ARN,
    certificatePem: process.env.PARSER_WORKLOAD_CERTIFICATE_PEM,
    certificateChainPem: process.env.PARSER_WORKLOAD_CERTIFICATE_CHAIN_PEM ?? "",
    privateKeyPem: process.env.PARSER_WORKLOAD_PRIVATE_KEY_PEM,
  };
  const missing = Object.entries(required)
    .filter(([k, v]) => k !== "certificateChainPem" && (v === undefined || v === ""))
    .map(([k]) => k);
  if (missing.length > 0) {
    throw new Error(`PARSER_AWS_CONFIG_MISSING:${missing.join(",")}`);
  }
  return required as ParserAwsConfig;
}

async function obtainWorkloadCredentials(config: ParserAwsConfig) {
  return createRolesAnywhereSession({
    region: config.region,
    trustAnchorArn: config.trustAnchorArn,
    profileArn: config.profileArn,
    roleArn: config.roleArn,
    durationSeconds: 900,
    certificatePem: config.certificatePem,
    certificateChainPem: config.certificateChainPem,
    privateKeyPem: config.privateKeyPem,
  });
}

// ---------------------------------------------------------------------------
// Merchant-facing sanitization -- the single mapping point from every
// internal Lambda/lease failure code to the closed, fixed categories a
// merchant may see (Lambda Parser EIS §9/§15). Applied here, one layer
// above the Lambda's own response envelope, exactly as the EIS requires.
// ---------------------------------------------------------------------------

const MERCHANT_MESSAGE_BY_CATEGORY = {
  UPLOAD_TOO_LARGE: "This file is too large.",
  UPLOAD_EXPIRED: "This upload session expired. Please start a new import.",
  UPLOAD_INTEGRITY_FAILURE: "We couldn't verify this upload. Please try uploading again.",
  UNSUPPORTED_OR_MALFORMED_FILE: "This file couldn't be read. Please check the file and try again.",
  DECOMPRESSION_LIMIT_EXCEEDED: "This spreadsheet workbook is too large to process.",
  DATA_SHAPE_LIMIT_EXCEEDED: "This file has too much data to process.",
  PARSER_TIMEOUT_OR_RUNTIME_FAILURE: "We couldn't process this file. Please try again.",
  PARSER_SERVICE_UNAVAILABLE:
    "The import service is temporarily unavailable. Please try again shortly.",
  IMPORT_BUSY: "An import is already in progress for this business. Please wait and try again.",
  GENERIC_RETRYABLE_FAILURE: "We couldn't complete this action. Please try again.",
} as const;

type MerchantCategory = keyof typeof MERCHANT_MESSAGE_BY_CATEGORY;

function categorizeFailure(code: string): MerchantCategory {
  switch (code) {
    case "FILE_TOO_LARGE":
      return "UPLOAD_TOO_LARGE";
    case "HEAD_OBJECT_NOT_FOUND":
      return "UPLOAD_EXPIRED";
    case "HEAD_CHECKSUM_METADATA_MISSING":
    case "HEAD_SIZE_MISMATCH":
    case "HEAD_CHECKSUM_MISMATCH":
      return "UPLOAD_INTEGRITY_FAILURE";
    case "UNSUPPORTED_FILE_TYPE":
    case "MALFORMED_FILE":
    case "ENCRYPTED_OR_MACRO_FILE":
      return "UNSUPPORTED_OR_MALFORMED_FILE";
    case "DECOMPRESSED_TOO_LARGE":
      return "DECOMPRESSION_LIMIT_EXCEEDED";
    case "TOO_MANY_ROWS":
    case "TOO_MANY_COLUMNS":
    case "CELL_TOO_LONG":
    case "RESPONSE_TOO_LARGE":
      return "DATA_SHAPE_LIMIT_EXCEEDED";
    case "PARSE_TIMEOUT":
    case "PARSER_RUNTIME_ERROR":
    case "DISPATCH_OUTCOME_UNKNOWN":
      return "PARSER_TIMEOUT_OR_RUNTIME_FAILURE";
    case "TRANSPORT_ERROR":
      return "PARSER_SERVICE_UNAVAILABLE";
    default:
      return "GENERIC_RETRYABLE_FAILURE";
  }
}

function rejected(reason: string, category: MerchantCategory) {
  return { outcome: "rejected" as const, reason, message: MERCHANT_MESSAGE_BY_CATEGORY[category] };
}

// ---------------------------------------------------------------------------
// parserLeasePreview -- EIS §4 steps 1-8: authorize, derive business,
// acquire the EC-2 guard, issue the lease, mint the presigned S3 POST.
// ---------------------------------------------------------------------------

export type ParserLeasePreviewResult =
  | { outcome: "rejected"; reason: string; message: string }
  | {
      outcome: "issued";
      leaseId: string;
      expiresAt: string;
      uploadUrl: string;
      uploadFields: Record<string, string>;
    };

export const parserLeasePreview = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data: { sha256B64: string; byteLength: number; fileKind: "csv" | "xlsx" }) => data)
  .handler(async ({ data, context }): Promise<ParserLeasePreviewResult> => {
    const { supabase, userId } = context;
    const businessId = await loadOwnedBusinessId(supabase, userId);
    if (!businessId) {
      return rejected("PERMISSION_DENIED", "GENERIC_RETRYABLE_FAILURE");
    }
    if (data.byteLength <= 0 || data.byteLength > IMPORT_LIMITS.maxCompressedBytes) {
      return rejected("FILE_TOO_LARGE", "UPLOAD_TOO_LARGE");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: guardRows, error: guardErr } = await supabaseAdmin.rpc(
      "acquire_parser_preview_guard",
      {
        p_business_id: businessId,
      },
    );
    if (guardErr) {
      logSanitized("acquire_guard_failed", { businessId });
      throw sanitizedError();
    }
    const guard = (guardRows ?? [])[0] as { business_id: string; guard_token: string } | undefined;
    if (!guard) {
      return rejected("IMPORT_BUSY", "IMPORT_BUSY");
    }

    const objectKey = `parser-ingress/${crypto.randomUUID()}`;

    const { data: leaseRows, error: leaseErr } = await supabaseAdmin.rpc(
      "issue_parser_upload_lease",
      {
        p_business_id: businessId,
        p_guard_token: guard.guard_token,
        p_object_key: objectKey,
        p_expected_byte_length: data.byteLength,
        p_expected_sha256_b64: data.sha256B64,
        p_file_kind: data.fileKind,
        p_created_by: userId,
      },
    );
    if (leaseErr) {
      logSanitized("issue_lease_failed", { businessId });
      throw sanitizedError();
    }
    const lease = (leaseRows ?? [])[0] as { lease_id: string; expires_at: string } | undefined;
    if (!lease) {
      logSanitized("issue_lease_no_row", { businessId });
      return rejected("IMPORT_BUSY", "IMPORT_BUSY");
    }

    let presigned: Awaited<ReturnType<typeof createPresignedS3Post>>;
    try {
      const config = loadParserAwsConfig();
      const credentials = await obtainWorkloadCredentials(config);
      presigned = await createPresignedS3Post({
        region: config.region,
        bucket: config.bucket,
        objectKey,
        expectedByteLength: data.byteLength,
        expectedSha256B64: data.sha256B64,
        credentials,
      });
    } catch (err) {
      logSanitized("presign_failed", { businessId, leaseId: lease.lease_id });
      void err;
      throw sanitizedError();
    }

    return {
      outcome: "issued",
      leaseId: lease.lease_id,
      expiresAt: lease.expires_at,
      uploadUrl: presigned.url,
      uploadFields: presigned.fields,
    };
  });

// ---------------------------------------------------------------------------
// parserLeaseConfirmAndDispatch -- EIS §4 steps 9-16: confirm upload, claim
// (one-winner dispatch authorization), invoke Lambda via the workload
// identity, validate the bounded response, finalize the lease, release the
// guard. Never trusts anything from the browser beyond the leaseId itself
// -- object key, business, and expected byte length/checksum are always
// re-resolved from the lease's own row.
// ---------------------------------------------------------------------------

export type ParserLeaseDispatchResult =
  | { outcome: "rejected"; reason: string; message: string }
  | (ParseOutcome & { outcome: "parsed"; additionalWorksheetsIgnored: boolean });

interface LeaseRow {
  id: string;
  business_id: string;
  guard_token: string;
  object_key: string;
  expected_byte_length: number;
  expected_sha256_b64: string;
  file_kind: string;
}

// file_kind is deliberately not part of this validator: the browser
// declares it once at parserLeasePreview issuance time (bound immutably
// into the lease row alongside object_key/expected_byte_length/
// expected_sha256_b64), and is re-read from that authoritative row below
// -- never re-asserted by the browser at confirm/dispatch time
// (report1.108.md §5.3's never-trust-the-browser-after-issuance rule,
// applied identically to every declared-at-issuance field).
export const parserLeaseConfirmAndDispatch = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data: { leaseId: string }) => data)
  .handler(async ({ data, context }): Promise<ParserLeaseDispatchResult> => {
    const { supabase, userId } = context;
    const businessId = await loadOwnedBusinessId(supabase, userId);
    if (!businessId) {
      return rejected("PERMISSION_DENIED", "GENERIC_RETRYABLE_FAILURE");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: confirmed, error: confirmErr } = await supabaseAdmin.rpc(
      "confirm_parser_upload_lease",
      {
        p_lease_id: data.leaseId,
        p_business_id: businessId,
      },
    );
    if (confirmErr) {
      logSanitized("confirm_lease_failed", { businessId, leaseId: data.leaseId });
      throw sanitizedError();
    }
    if (!confirmed) {
      return rejected("UPLOAD_EXPIRED", "UPLOAD_EXPIRED");
    }

    const { data: lease, error: leaseErr } = await supabaseAdmin
      .from("parser_upload_leases")
      .select(
        "id, business_id, guard_token, object_key, expected_byte_length, expected_sha256_b64, file_kind",
      )
      .eq("id", data.leaseId)
      .eq("business_id", businessId)
      .maybeSingle<LeaseRow>();
    if (leaseErr || !lease) {
      logSanitized("load_lease_failed", { businessId, leaseId: data.leaseId });
      throw sanitizedError();
    }

    const { data: claimed, error: claimErr } = await supabaseAdmin.rpc(
      "claim_parser_upload_lease",
      {
        p_lease_id: data.leaseId,
        p_business_id: businessId,
      },
    );
    if (claimErr) {
      logSanitized("claim_lease_failed", { businessId, leaseId: data.leaseId });
      throw sanitizedError();
    }
    if (!claimed) {
      return rejected("UPLOAD_EXPIRED", "UPLOAD_EXPIRED");
    }

    const releaseGuard = async (): Promise<void> => {
      await supabaseAdmin.rpc("release_parser_preview_guard", {
        p_business_id: businessId,
        p_guard_token: lease.guard_token,
        p_lease_id: data.leaseId,
      });
    };
    const finalizeComplete = async (): Promise<void> => {
      await supabaseAdmin.rpc("complete_parser_upload_lease", {
        p_lease_id: data.leaseId,
        p_business_id: businessId,
      });
      await releaseGuard();
    };
    const finalizeFail = async (failureReason: string): Promise<void> => {
      await supabaseAdmin.rpc("fail_parser_upload_lease", {
        p_lease_id: data.leaseId,
        p_business_id: businessId,
        p_failure_reason: failureReason,
      });
      await releaseGuard();
    };

    let config: ParserAwsConfig;
    try {
      config = loadParserAwsConfig();
    } catch (err) {
      logSanitized("config_missing", { businessId, leaseId: data.leaseId });
      void err;
      await finalizeFail("PARSER_RUNTIME_ERROR");
      return rejected("PARSER_SERVICE_UNAVAILABLE", "PARSER_SERVICE_UNAVAILABLE");
    }

    await supabaseAdmin.rpc("mark_parser_upload_lease_dispatched", {
      p_lease_id: data.leaseId,
      p_business_id: businessId,
    });

    let response: Response;
    try {
      const credentials = await obtainWorkloadCredentials(config);
      response = await invokeParserLambda({
        region: config.region,
        functionUrl: config.functionUrl,
        credentials,
        body: {
          objectKey: lease.object_key,
          leaseId: lease.id,
          expectedByteLength: lease.expected_byte_length,
          expectedSha256B64: lease.expected_sha256_b64,
          fileKind: lease.file_kind,
        },
      });
    } catch (err) {
      logSanitized("dispatch_transport_error", { businessId, leaseId: data.leaseId });
      void err;
      await finalizeFail("DISPATCH_OUTCOME_UNKNOWN");
      return rejected("TRANSPORT_ERROR", "PARSER_SERVICE_UNAVAILABLE");
    }

    if (!response.ok) {
      logSanitized("dispatch_http_error", {
        businessId,
        leaseId: data.leaseId,
        status: response.status,
      });
      await finalizeFail("PARSER_RUNTIME_ERROR");
      return rejected("PARSER_RUNTIME_ERROR", "PARSER_TIMEOUT_OR_RUNTIME_FAILURE");
    }

    let envelope: {
      ok: boolean;
      code?: string;
      outcome?: ParseOutcome & { additionalWorksheetsIgnored: boolean };
    };
    try {
      envelope = await response.json();
    } catch (err) {
      logSanitized("dispatch_malformed_response", { businessId, leaseId: data.leaseId });
      void err;
      await finalizeFail("DISPATCH_OUTCOME_UNKNOWN");
      return rejected("MALFORMED_RESPONSE", "PARSER_TIMEOUT_OR_RUNTIME_FAILURE");
    }

    if (!envelope.ok || !envelope.outcome) {
      const code = envelope.code ?? "PARSER_RUNTIME_ERROR";
      await finalizeFail(code);
      return rejected(code, categorizeFailure(code));
    }

    await finalizeComplete();

    return {
      outcome: "parsed",
      rows: envelope.outcome.rows,
      unrecognizedColumnNames: envelope.outcome.unrecognizedColumnNames,
      additionalWorksheetsIgnored: envelope.outcome.additionalWorksheetsIgnored,
    };
  });
