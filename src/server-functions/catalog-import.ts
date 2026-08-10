// SB-P-1.11-GC-1 — Bulk Catalog import server orchestration (EIS Part K
// §45.1), corrected per communication/live/report1.85.md (SEC-IMP-1
// through SEC-IMP-8; see communication/live/report1.86.md for the full
// resolution matrix).
//
// Two Supabase clients are used, deliberately never interchanged:
//   - `supabase` (from requireSupabaseAuth's context): the caller's own
//     JWT, `authenticated`-role, RLS-enforced. Used for EVERY Catalog read
//     and write (duplicate search, category list/create, product create,
//     price/tax/cost follow-ups) -- exactly the boundary a browser call
//     would hit.
//   - `supabaseAdmin` (dynamic-imported inside each handler body per the
//     existing client.server.ts bundling-safety convention): service-role,
//     used ONLY for INSERT/UPDATE on catalog_import_batches and
//     catalog_import_rows (EIS §45.1.1). Never used for Catalog Product
//     Truth, never used to call a Catalog command, never given
//     client-influenced table/column selection.
import { createServerFn } from "@tanstack/react-start";
import type { SupabaseClient } from "@supabase/supabase-js";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Database, Json } from "@/integrations/supabase/types";
import { parseInIsolatedWorker } from "@/lib/catalog-import/parse-isolated";
import { validateRow } from "@/lib/catalog-import/validate";
import {
  classifyRows,
  resolveCategoryLabel,
  type CategoryLookupEntry,
} from "@/lib/catalog-import/classify";
import { deriveFollowUpIdempotencyKey } from "@/lib/catalog-import/idempotency";
import { ImportLimitError, IMPORT_LIMITS } from "@/lib/catalog-import/limits";
import type {
  CorrectionReason,
  FollowUpOperation,
  FollowUpStateMap,
  ParsedSnapshot,
} from "@/lib/catalog-import/types";

type AuthedClient = SupabaseClient<Database>;
type CommandResult = Database["public"]["CompositeTypes"]["catalog_command_result"];
type CommandOutcome = Database["public"]["CompositeTypes"]["catalog_command_outcome"];

// ---------------------------------------------------------------------------
// SEC-IMP-7 — sanitized logging / error boundary.
//
// Never logs a raw error object, imported cell/category text, Reference
// Cost values, tokens, claims, or privileged metadata. Only an allowlisted
// event name, allowlisted identifiers (batch/row/business ids, which are
// opaque UUIDs -- never merchant-entered text), and a short, closed-shape
// reason code (an ImportLimitError code, a Postgres error `code` such as
// "23505", or a governed command's own rejection_reason enum value --
// never `.message`/`.detail`/`.hint`, which can echo back constraint
// names or literal offending values). Every server-function error thrown
// to the client is a fixed, generic sentence -- never a rethrown raw
// Postgrest/Postgres error, which could otherwise carry constraint names,
// SQL detail text, or other internal detail across the wire.
// ---------------------------------------------------------------------------

function errorCode(err: unknown): string {
  if (err instanceof ImportLimitError) return err.code;
  if (err instanceof CategoryCreationFailure)
    return err.rejectionReason ?? "CATEGORY_CREATE_FAILED";
  const maybeCode = (err as { code?: unknown } | null)?.code;
  return typeof maybeCode === "string" ? maybeCode : "unknown";
}

function logSanitized(event: string, context: Record<string, unknown>, err?: unknown): void {
  const entry: Record<string, unknown> = { event, ...context };
  if (err !== undefined) entry.code = errorCode(err);
  console.error("[catalog-import]", entry);
}

const GENERIC_SERVER_ERROR = "We couldn't complete this action. Please try again.";

function sanitizedError(): Error {
  return new Error(GENERIC_SERVER_ERROR);
}

class CategoryCreationFailure extends Error {
  readonly rejectionReason: string | null;
  constructor(rejectionReason: string | null) {
    super("Category creation failed.");
    this.name = "CategoryCreationFailure";
    this.rejectionReason = rejectionReason;
  }
}

// ---------------------------------------------------------------------------
// Shared helpers (caller-JWT client only -- no privileged access here).
// ---------------------------------------------------------------------------

/** Re-derives the caller's own business and Owner status from the
 * authoritative businesses.owner_id relation -- never trusted from client
 * input. A non-owner (Manager/Employee) actor has no matching row and is
 * denied by construction (EIS §14): no permission infrastructure exists
 * yet for either role to hold this authority. */
async function loadOwnedBusinessId(supabase: AuthedClient, userId: string): Promise<string | null> {
  const { data, error } = await supabase
    .from("businesses")
    .select("id")
    .eq("owner_id", userId)
    .maybeSingle();
  if (error) {
    logSanitized("load_business_failed", { userId }, error);
    throw sanitizedError();
  }
  return data?.id ?? null;
}

/** D-016: Owner always holds Reference Cost authority. Manager import is
 * denied entirely in Build Now (EIS §14), so this is a genuine,
 * independent per-actor evaluation tied to the Owner check just performed
 * -- not a hardcoded constant. It will correctly begin returning false for
 * a future Manager actor once real permission infrastructure exists. */
function deriveReferenceCostAuthority(isVerifiedOwner: boolean): boolean {
  return isVerifiedOwner;
}

async function loadCategories(supabase: AuthedClient): Promise<CategoryLookupEntry[]> {
  const { data, error } = await supabase.from("catalog_categories").select("id, name, status");
  if (error) {
    logSanitized("load_categories_failed", {}, error);
    throw sanitizedError();
  }
  return (data ?? []).map((c) => ({ id: c.id, name: c.name, status: c.status }));
}

async function searchIdentity(supabase: AuthedClient, query: string) {
  const { data, error } = await supabase.rpc("catalog_products_search", {
    p_query: query,
    p_include_archived: true,
    p_limit: 1,
  });
  if (error) {
    logSanitized("search_identity_failed", {}, error);
    throw sanitizedError();
  }
  return (data ?? []).map((r) => ({ id: r.id, name: r.name, match_rank: r.match_rank }));
}

const CONTROL_CHAR_PATTERN = new RegExp(
  `[${String.fromCharCode(0)}-${String.fromCharCode(31)}]`,
  "g",
);

function sanitizeFilename(name: string): string {
  const stripped = name.replace(/[/\\]/g, "_").replace(CONTROL_CHAR_PATTERN, "").trim();
  return (stripped || "upload").slice(0, 255);
}

function mapRejectionToReason(reason: string | null | undefined): CorrectionReason | null {
  if (reason === "UNIQUENESS_CONFLICT") return "DUPLICATE_NAME";
  return null;
}

/**
 * SEC-IMP-5 — resolves one governed follow-up command's true outcome.
 * Inspects the command result's own `outcome` field (never only the
 * PostgREST transport `error`), and for a genuine transport/ambiguous
 * failure, asks the existing `get_catalog_command_outcome` command --
 * exactly the mechanism already used to reconcile unknown-outcome writes
 * elsewhere in this codebase (src/integrations/supabase/catalog.ts's
 * `runCommandWithRecovery`) -- rather than guessing.
 */
async function resolveFollowUpOutcome(
  supabase: AuthedClient,
  operation:
    | "record_catalog_selling_price_change"
    | "record_catalog_tax_change"
    | "record_catalog_reference_cost_change",
  idempotencyKey: string,
  call: () => Promise<{ data: unknown; error: { message?: string } | null }>,
): Promise<"complete" | "failed" | "rejected"> {
  let transportError: unknown = null;
  try {
    const { data, error } = await call();
    if (!error) {
      const result = data as CommandResult;
      return result.outcome === "completed" ? "complete" : "rejected";
    }
    transportError = error;
  } catch (err) {
    transportError = err;
  }

  logSanitized("follow_up_transport_error", { operation, idempotencyKey }, transportError);

  try {
    const { data: outcomeData, error: outcomeErr } = await supabase.rpc(
      "get_catalog_command_outcome",
      { p_operation: operation, p_idempotency_key: idempotencyKey },
    );
    if (outcomeErr) return "failed";
    const outcome = outcomeData as CommandOutcome;
    if (!outcome.found) return "failed";
    return outcome.outcome === "completed" ? "complete" : "rejected";
  } catch {
    return "failed";
  }
}

// ---------------------------------------------------------------------------
// catalogImportPreview — Stage 1/2/3: parse, validate, classify, persist
// bookkeeping. No Catalog Product Truth mutation.
// ---------------------------------------------------------------------------

export type CatalogImportPreviewResult =
  | { outcome: "rejected"; reason: string; message: string }
  | {
      outcome: "previewed";
      batchId: string;
      totalRows: number;
      ready: number;
      needsCorrection: number;
      possibleMatch: number;
      skipped: number;
      unrecognizedColumnNames: string[];
      additionalWorksheetsIgnored: boolean;
    };

export const catalogImportPreview = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data: FormData) => data)
  .handler(async ({ data, context }): Promise<CatalogImportPreviewResult> => {
    const { supabase, userId } = context;
    const businessId = await loadOwnedBusinessId(supabase, userId);
    if (!businessId) {
      return {
        outcome: "rejected",
        reason: "PERMISSION_DENIED",
        message: "Set up your business before importing products.",
      };
    }
    const hasReferenceCostAuthority = deriveReferenceCostAuthority(true);

    const file = data.get("file");
    if (!(file instanceof File)) {
      return {
        outcome: "rejected",
        reason: "UNSUPPORTED_FILE_TYPE",
        message: "No file was uploaded.",
      };
    }
    if (file.size > IMPORT_LIMITS.maxCompressedBytes) {
      return { outcome: "rejected", reason: "FILE_TOO_LARGE", message: "This file is too large." };
    }
    const lowerName = file.name.toLowerCase();
    const fileKind: "csv" | "xlsx" | null = lowerName.endsWith(".csv")
      ? "csv"
      : lowerName.endsWith(".xlsx")
        ? "xlsx"
        : null;
    if (!fileKind) {
      return {
        outcome: "rejected",
        reason: "UNSUPPORTED_FILE_TYPE",
        message: "Only .csv and .xlsx files are supported.",
      };
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // SEC-IMP-2/SEC-IMP-3: parsing (including the real, produced-byte
    // XLSX decompression bound) runs on a dedicated worker thread with an
    // enforced wall-clock budget -- see parse-isolated.ts/parse-worker.ts.
    let parseOutcome: Awaited<ReturnType<typeof parseInIsolatedWorker>>;
    try {
      parseOutcome = await parseInIsolatedWorker(buffer, fileKind, IMPORT_LIMITS.maxParseMs);
    } catch (err) {
      if (err instanceof ImportLimitError) {
        return { outcome: "rejected", reason: err.code, message: err.message };
      }
      logSanitized("parse_failed", { fileKind }, err);
      throw sanitizedError();
    }

    const validated = parseOutcome.rows.map((r) => validateRow(r, hasReferenceCostAuthority));
    const categories = await loadCategories(supabase);
    const classified = await classifyRows(validated, categories, (q) =>
      searchIdentity(supabase, q),
    );

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: batch, error: batchErr } = await supabaseAdmin
      .from("catalog_import_batches")
      .insert({
        business_id: businessId,
        initiated_by: userId,
        original_filename: sanitizeFilename(file.name),
        file_kind: fileKind,
        row_count: classified.length,
      })
      .select("id")
      .single();
    if (batchErr || !batch) {
      logSanitized("create_batch_failed", { businessId }, batchErr ?? undefined);
      throw sanitizedError();
    }

    if (classified.length > 0) {
      const { error: rowsErr } = await supabaseAdmin.from("catalog_import_rows").insert(
        classified.map((r) => ({
          batch_id: batch.id,
          business_id: businessId,
          row_number: r.rowNumber,
          status: r.status,
          parsed_snapshot: r.snapshot as unknown as Json,
          has_reference_cost_authority: hasReferenceCostAuthority,
          correction_reason: r.correctionReason,
          matched_product_id: r.matchedProductId,
        })),
      );
      if (rowsErr) {
        logSanitized("insert_rows_failed", { businessId, batchId: batch.id }, rowsErr);
        throw sanitizedError();
      }
    }

    const counts = { READY: 0, NEEDS_CORRECTION: 0, POSSIBLE_MATCH: 0, SKIPPED: 0 };
    for (const r of classified) counts[r.status as keyof typeof counts]++;

    return {
      outcome: "previewed",
      batchId: batch.id as string,
      totalRows: classified.length,
      ready: counts.READY,
      needsCorrection: counts.NEEDS_CORRECTION,
      possibleMatch: counts.POSSIBLE_MATCH,
      skipped: counts.SKIPPED,
      unrecognizedColumnNames: parseOutcome.unrecognizedColumnNames,
      additionalWorksheetsIgnored: parseOutcome.additionalWorksheetsIgnored ?? false,
    };
  });

// ---------------------------------------------------------------------------
// catalogImportCommit — Stage 4: atomic claim FIRST (SEC-IMP-4), then
// governed per-row Catalog mutation with durable follow-up state
// (SEC-IMP-5) through the caller-JWT client only.
// ---------------------------------------------------------------------------

export type CatalogImportCommitResult =
  | { outcome: "not_found" }
  | { outcome: "in_progress" }
  | { outcome: "already_committed" }
  | {
      outcome: "committed" | "failed";
      created: number;
      failed: number;
      skipped: number;
      possibleMatch: number;
      needsCorrection: number;
      warnings: { rowNumber: number; message: string }[];
    };

async function resolveOrCreateCategory(
  supabase: AuthedClient,
  label: string | undefined,
  categories: CategoryLookupEntry[],
  cache: Map<string, string>,
): Promise<{ categoryId: string | null; archivedConflict: boolean }> {
  if (!label) return { categoryId: null, archivedConflict: false };
  const resolution = resolveCategoryLabel(label, categories);
  if (resolution.kind === "active")
    return { categoryId: resolution.categoryId, archivedConflict: false };
  if (resolution.kind === "archived_conflict") return { categoryId: null, archivedConflict: true };

  const norm = label.trim().toLowerCase();
  const cached = cache.get(norm);
  if (cached) return { categoryId: cached, archivedConflict: false };

  const { data, error } = await supabase.rpc("create_catalog_category", {
    p_idempotency_key: crypto.randomUUID(),
    p_name: label.trim(),
  });
  if (error) {
    logSanitized("create_category_failed", {});
    throw sanitizedError();
  }
  const result = data as CommandResult;
  if (result.outcome !== "completed" || !result.category_id) {
    // Never embed the merchant-entered label in a thrown message (SEC-IMP-7)
    // -- the rejection_reason is a fixed backend enum, safe to carry.
    throw new CategoryCreationFailure(result.rejection_reason ?? null);
  }
  cache.set(norm, result.category_id);
  categories.push({ id: result.category_id, name: label.trim(), status: "active" });
  return { categoryId: result.category_id, archivedConflict: false };
}

async function summarizeBatch(
  supabaseAdmin: AuthedClient,
  businessId: string,
  batchId: string,
): Promise<{
  created: number;
  failed: number;
  skipped: number;
  possibleMatch: number;
  needsCorrection: number;
}> {
  const { data, error } = await supabaseAdmin
    .from("catalog_import_rows")
    .select("status")
    .eq("business_id", businessId)
    .eq("batch_id", batchId);
  if (error) {
    logSanitized("summarize_batch_failed", { businessId, batchId }, error);
    throw sanitizedError();
  }
  const counts = { created: 0, failed: 0, skipped: 0, possibleMatch: 0, needsCorrection: 0 };
  for (const r of data ?? []) {
    if (r.status === "CREATED") counts.created++;
    else if (r.status === "FAILED") counts.failed++;
    else if (r.status === "SKIPPED") counts.skipped++;
    else if (r.status === "POSSIBLE_MATCH") counts.possibleMatch++;
    else if (r.status === "NEEDS_CORRECTION") counts.needsCorrection++;
  }
  return counts;
}

interface RequiredFollowUp {
  op: FollowUpOperation;
  rpcName:
    | "record_catalog_selling_price_change"
    | "record_catalog_tax_change"
    | "record_catalog_reference_cost_change";
  call: () => Promise<{ data: unknown; error: { message?: string } | null }>;
}

function buildRequiredFollowUps(
  supabase: AuthedClient,
  snapshot: ParsedSnapshot,
  productId: string,
  rowIdempotencyKey: string,
  hasReferenceCostAuthority: boolean,
): RequiredFollowUp[] {
  const ops: RequiredFollowUp[] = [];
  if (snapshot.selling_price !== undefined) {
    const key = deriveFollowUpIdempotencyKey(rowIdempotencyKey, "selling_price");
    ops.push({
      op: "selling_price",
      rpcName: "record_catalog_selling_price_change",
      call: async () =>
        supabase.rpc("record_catalog_selling_price_change", {
          p_idempotency_key: key,
          p_product_id: productId,
          p_new_price: snapshot.selling_price as number,
        }),
    });
  }
  if (snapshot.tax_treatment) {
    const key = deriveFollowUpIdempotencyKey(rowIdempotencyKey, "tax");
    const taxArgs: Database["public"]["Functions"]["record_catalog_tax_change"]["Args"] = {
      p_idempotency_key: key,
      p_product_id: productId,
      p_treatment: snapshot.tax_treatment,
    };
    if (
      snapshot.tax_treatment === "product_specific_rate" &&
      snapshot.tax_rate_percent !== undefined
    ) {
      taxArgs.p_rate_percent = snapshot.tax_rate_percent;
    }
    ops.push({
      op: "tax",
      rpcName: "record_catalog_tax_change",
      call: async () => supabase.rpc("record_catalog_tax_change", taxArgs),
    });
  }
  if (snapshot.reference_cost !== undefined && hasReferenceCostAuthority) {
    const key = deriveFollowUpIdempotencyKey(rowIdempotencyKey, "reference_cost");
    ops.push({
      op: "reference_cost",
      rpcName: "record_catalog_reference_cost_change",
      call: async () =>
        supabase.rpc("record_catalog_reference_cost_change", {
          p_idempotency_key: key,
          p_product_id: productId,
          p_new_cost: snapshot.reference_cost as number,
        }),
    });
  }
  return ops;
}

export const catalogImportCommit = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data: { batchId: string; skipRowNumbers?: number[] }) => data)
  .handler(async ({ data, context }): Promise<CatalogImportCommitResult> => {
    const { supabase, userId } = context;
    const businessId = await loadOwnedBusinessId(supabase, userId);
    if (!businessId) return { outcome: "not_found" };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // SEC-IMP-4: the atomic claim happens FIRST and is the only gate for
    // any subsequent privileged row-state mutation. No skip choice or any
    // other support-row write may occur before this succeeds.
    const { data: claimed, error: claimErr } = await supabaseAdmin
      .from("catalog_import_batches")
      .update({ status: "committing" })
      .eq("id", data.batchId)
      .eq("business_id", businessId)
      .in("status", ["previewed", "failed"])
      .select("id")
      .maybeSingle();
    if (claimErr) {
      logSanitized("claim_batch_failed", { businessId, batchId: data.batchId }, claimErr);
      throw sanitizedError();
    }

    if (!claimed) {
      const { data: existing } = await supabaseAdmin
        .from("catalog_import_batches")
        .select("status")
        .eq("id", data.batchId)
        .eq("business_id", businessId)
        .maybeSingle();
      if (!existing) return { outcome: "not_found" };
      if (existing.status === "committed") return { outcome: "already_committed" };
      return { outcome: "in_progress" };
    }

    // Only the winning claimant reaches here. Skip choices are persisted
    // now, under the batch's exclusive 'committing' lock -- never before
    // the claim, and never reachable again once the batch later becomes
    // 'committed' (the commit endpoint's own claim predicate excludes it).
    if (data.skipRowNumbers && data.skipRowNumbers.length > 0) {
      const { error: skipErr } = await supabaseAdmin
        .from("catalog_import_rows")
        .update({ status: "SKIPPED" })
        .eq("business_id", businessId)
        .eq("batch_id", data.batchId)
        .in("row_number", data.skipRowNumbers)
        .in("status", ["POSSIBLE_MATCH", "NEEDS_CORRECTION"]);
      if (skipErr) logSanitized("skip_rows_failed", { businessId, batchId: data.batchId }, skipErr);
    }

    const categories = await loadCategories(supabase);
    const categoryCache = new Map<string, string>();

    const { data: candidateRows, error: rowsErr } = await supabaseAdmin
      .from("catalog_import_rows")
      .select("*")
      .eq("business_id", businessId)
      .eq("batch_id", data.batchId)
      .in("status", ["READY", "FAILED"])
      .order("row_number", { ascending: true });
    if (rowsErr) {
      logSanitized("load_candidate_rows_failed", { businessId, batchId: data.batchId }, rowsErr);
      throw sanitizedError();
    }

    const warnings: { rowNumber: number; message: string }[] = [];

    for (const row of candidateRows ?? []) {
      const snapshot = row.parsed_snapshot as unknown as ParsedSnapshot;
      const followUpState: FollowUpStateMap = { ...(row.follow_up_state as FollowUpStateMap) };
      try {
        const { categoryId, archivedConflict } = await resolveOrCreateCategory(
          supabase,
          snapshot.category_label,
          categories,
          categoryCache,
        );
        if (archivedConflict) {
          await supabaseAdmin
            .from("catalog_import_rows")
            .update({ status: "NEEDS_CORRECTION", correction_reason: "INVALID_CATEGORY" })
            .eq("id", row.id);
          continue;
        }

        const createArgs: Database["public"]["Functions"]["create_catalog_product"]["Args"] = {
          p_idempotency_key: row.row_idempotency_key,
          p_name: snapshot.name,
        };
        if (snapshot.description) createArgs.p_description = snapshot.description;
        if (categoryId) createArgs.p_category_id = categoryId;
        if (snapshot.sku) createArgs.p_sku = snapshot.sku;
        if (snapshot.barcode) createArgs.p_barcode = snapshot.barcode;
        if (snapshot.selling_unit) createArgs.p_selling_unit = snapshot.selling_unit;

        // Safe to call unconditionally on retry: create_catalog_product's
        // own idempotency store (catalog_write_idempotency_keys) replays
        // the original result for this row's unchanged, persisted
        // row_idempotency_key rather than creating a duplicate.
        const { data: createData, error: createErr } = await supabase.rpc(
          "create_catalog_product",
          createArgs,
        );
        if (createErr) {
          logSanitized(
            "create_product_failed",
            { batchId: data.batchId, rowNumber: row.row_number },
            createErr,
          );
          await supabaseAdmin
            .from("catalog_import_rows")
            .update({ status: "FAILED" })
            .eq("id", row.id);
          continue;
        }
        const result = createData as CommandResult;

        if (result.outcome !== "completed" || !result.product_id) {
          await supabaseAdmin
            .from("catalog_import_rows")
            .update({
              status: "FAILED",
              correction_reason: mapRejectionToReason(result.rejection_reason),
            })
            .eq("id", row.id);
          continue;
        }

        const productId = result.product_id;

        // SEC-IMP-5: every required follow-up's *governed outcome* is
        // inspected and durably recorded -- never reduced to an in-memory
        // warning only. An operation already "complete" from a prior
        // attempt is never re-invoked.
        const requiredFollowUps = buildRequiredFollowUps(
          supabase,
          snapshot,
          productId,
          row.row_idempotency_key,
          row.has_reference_cost_authority,
        );
        for (const { op, rpcName, call } of requiredFollowUps) {
          if (followUpState[op] === "complete") continue;
          followUpState[op] = await resolveFollowUpOutcome(
            supabase,
            rpcName,
            deriveFollowUpIdempotencyKey(row.row_idempotency_key, op),
            call,
          );
        }

        const allComplete = requiredFollowUps.every(({ op }) => followUpState[op] === "complete");

        // resolved_product_id/resolved_by/resolved_at are set as soon as
        // the product genuinely exists, whether or not every follow-up is
        // complete yet (EIS §45.5.2's original CREATED-only rule is
        // deliberately relaxed for FAILED by this migration's corrected
        // CHECK constraint -- see communication/live/report1.86.md).
        await supabaseAdmin
          .from("catalog_import_rows")
          .update({
            status: allComplete ? "CREATED" : "FAILED",
            resolved_product_id: productId,
            resolved_by: userId,
            resolved_at: new Date().toISOString(),
            follow_up_state: followUpState as unknown as Json,
          })
          .eq("id", row.id);

        if (!allComplete) {
          warnings.push({
            rowNumber: row.row_number,
            message:
              "This product was created, but one or more details (price, tax, or cost) couldn't be saved yet. It will be retried on the next commit attempt for this batch.",
          });
        }
      } catch (err) {
        logSanitized(
          "row_processing_failed",
          { batchId: data.batchId, rowNumber: row.row_number },
          err,
        );
        await supabaseAdmin
          .from("catalog_import_rows")
          .update({ status: "FAILED" })
          .eq("id", row.id);
      }
    }

    // A batch reaches 'committed' only when zero rows remain FAILED --
    // which now correctly includes rows whose product was created but
    // whose required follow-up commands remain unresolved (SEC-IMP-5).
    const { count: stillFailed } = await supabaseAdmin
      .from("catalog_import_rows")
      .select("id", { count: "exact", head: true })
      .eq("business_id", businessId)
      .eq("batch_id", data.batchId)
      .eq("status", "FAILED");

    const finalStatus: "committed" | "failed" = (stillFailed ?? 0) > 0 ? "failed" : "committed";
    await supabaseAdmin
      .from("catalog_import_batches")
      .update({
        status: finalStatus,
        committed_at: finalStatus === "committed" ? new Date().toISOString() : null,
      })
      .eq("id", data.batchId);

    const summary = await summarizeBatch(supabaseAdmin, businessId, data.batchId);
    return { outcome: finalStatus, ...summary, warnings };
  });

// ---------------------------------------------------------------------------
// catalogImportGetBatch — read-only status retrieval for polling/refresh
// recovery. Uses the caller-JWT client only: authenticated already holds
// SELECT under RLS (EIS §45.5.4), so no privileged access is needed here.
// ---------------------------------------------------------------------------

export type CatalogImportBatchStatus = {
  batch: {
    id: string;
    status: string;
    rowCount: number;
    createdAt: string;
    committedAt: string | null;
    originalFilename: string;
    fileKind: string;
  } | null;
  rows: {
    rowNumber: number;
    status: string;
    correctionReason: string | null;
    snapshot: ParsedSnapshot;
    matchedProductId: string | null;
    matchedProductName: string | null;
    resolvedProductId: string | null;
  }[];
};

export const catalogImportGetBatch = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data: { batchId: string }) => data)
  .handler(async ({ data, context }): Promise<CatalogImportBatchStatus> => {
    const { supabase } = context;

    const { data: batch, error: batchErr } = await supabase
      .from("catalog_import_batches")
      .select("*")
      .eq("id", data.batchId)
      .maybeSingle();
    if (batchErr) {
      logSanitized("get_batch_failed", { batchId: data.batchId }, batchErr);
      throw sanitizedError();
    }
    if (!batch) return { batch: null, rows: [] };

    const { data: rows, error: rowsErr } = await supabase
      .from("catalog_import_rows")
      .select("*")
      .eq("batch_id", data.batchId)
      .order("row_number", { ascending: true });
    if (rowsErr) {
      logSanitized("get_batch_rows_failed", { batchId: data.batchId }, rowsErr);
      throw sanitizedError();
    }

    // Enrich POSSIBLE_MATCH rows with the matched product's name (EIS
    // §45.4: "the matched product's id/name is surfaced to the merchant"),
    // same-business only -- catalog_products_list_batch is already scoped
    // by the existing RLS/executor boundary, no new access introduced.
    const matchedIds = [
      ...new Set((rows ?? []).map((r) => r.matched_product_id).filter((id): id is string => !!id)),
    ];
    const nameById = new Map<string, string>();
    if (matchedIds.length > 0) {
      const { data: matchedProducts, error: matchErr } = await supabase.rpc(
        "catalog_products_list_batch",
        { p_product_ids: matchedIds },
      );
      if (matchErr) {
        logSanitized("list_matched_products_failed", { batchId: data.batchId }, matchErr);
        throw sanitizedError();
      }
      for (const p of matchedProducts ?? []) {
        if (p.id && p.name) nameById.set(p.id, p.name);
      }
    }

    return {
      batch: {
        id: batch.id,
        status: batch.status,
        rowCount: batch.row_count,
        createdAt: batch.created_at,
        committedAt: batch.committed_at,
        originalFilename: batch.original_filename,
        fileKind: batch.file_kind,
      },
      rows: (rows ?? []).map((r) => ({
        rowNumber: r.row_number,
        status: r.status,
        correctionReason: r.correction_reason,
        snapshot: r.parsed_snapshot as unknown as ParsedSnapshot,
        matchedProductId: r.matched_product_id,
        matchedProductName: r.matched_product_id
          ? (nameById.get(r.matched_product_id) ?? null)
          : null,
        resolvedProductId: r.resolved_product_id,
      })),
    };
  });
