// SB-P-1.11-GC-38R — AWS Lambda parser entry point (Lambda Parser EIS §5.2
// step 12-16, §9, §11.4-11.6, §12.1, §13, §14; corrected per
// docs/implementation/SB-P-1.11/verification-checklist.md CHK-LPE-005/012).
//
// This is a separate deployable unit (esbuild-bundled, see build.mjs), never
// part of the Vite/TanStack client bundle. It is invoked only via the
// AWS_IAM-protected Lambda Function URL by the Smart Business server's
// workload identity (IAM Roles Anywhere) -- never directly by a browser.
//
// The handler receives only opaque control metadata (object key, expected
// byte length, expected checksum) authenticated by the SigV4/AWS_IAM
// Function URL invocation itself -- never raw file bytes, never a browser
// credential, never a Supabase value. It never writes Catalog/Inventory
// Product Truth and holds no Supabase/database credential.
import {
  DeleteObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
  S3Client,
  type HeadObjectCommandOutput,
} from "@aws-sdk/client-s3";
import { parseCsv, parseXlsx } from "../../src/lib/catalog-import/parse.ts";
import { IMPORT_LIMITS, ImportLimitError } from "../../src/lib/catalog-import/limits.ts";
import type { ParseOutcome } from "../../src/lib/catalog-import/types.ts";

// ---------------------------------------------------------------------------
// awslambda.streamifyResponse -- a Lambda-runtime-provided global, not an npm
// package (Lambda Parser EIS §14.1). Minimal ambient declaration for the
// exact shape this handler uses; no broader typing is assumed.
// ---------------------------------------------------------------------------
type LambdaHttpResponseStream = NodeJS.WritableStream;
interface LambdaHttpResponseMetadata {
  statusCode: number;
  headers?: Record<string, string>;
}
declare const awslambda: {
  streamifyResponse: (
    handler: (
      event: ParserLambdaEvent,
      responseStream: LambdaHttpResponseStream,
      context: unknown,
    ) => Promise<void>,
  ) => unknown;
  HttpResponseStream: {
    from: (
      responseStream: LambdaHttpResponseStream,
      metadata: LambdaHttpResponseMetadata,
    ) => LambdaHttpResponseStream;
  };
};

// ---------------------------------------------------------------------------
// Request / response envelope (Lambda Parser EIS §14.2, verbatim).
// ---------------------------------------------------------------------------

interface ParserLambdaEvent {
  body?: string | null;
  isBase64Encoded?: boolean;
}

interface ParserControlRequest {
  objectKey: string;
  leaseId: string;
  expectedByteLength: number;
  expectedSha256B64: string;
  fileKind: "csv" | "xlsx";
}

// CHK-LPE-005 -- HeadObject integrity failures return one of these four
// specific bounded codes, not a rolled-up generic one: this response
// envelope is server-to-server only (the Lambda's sole caller is the Smart
// Business server, never the browser), so the merchant-facing sanitization
// mapping (report1.108.md §5.10/§15) is applied one layer up, in
// src/server-functions/parser-lease.ts -- never inside this handler.
type ParserFailureCode =
  | ImportLimitError["code"]
  | "HEAD_OBJECT_NOT_FOUND"
  | "HEAD_CHECKSUM_METADATA_MISSING"
  | "HEAD_SIZE_MISMATCH"
  | "HEAD_CHECKSUM_MISMATCH"
  | "PARSER_RUNTIME_ERROR"
  | "RESPONSE_TOO_LARGE"
  | "MALFORMED_REQUEST";

interface ParserSuccessEnvelope {
  ok: true;
  outcome: ParseOutcome & { additionalWorksheetsIgnored: boolean };
}

interface ParserFailureEnvelope {
  ok: false;
  code: ParserFailureCode;
  message: string;
}

type ParserResponseEnvelope = ParserSuccessEnvelope | ParserFailureEnvelope;

// CHK-LPE-012 -- exact serialized-response ceiling, deterministic,
// pre-stream. Never exceeded; RESPONSE_TOO_LARGE is returned in its place
// with zero success bytes emitted.
const MAX_SERIALIZED_RESPONSE_BYTES = 4_194_304;

// Lambda Parser EIS §15 -- opaque, fixed, sanitized messages only. Never a
// raw provider error body, ARN, account ID, stack trace, or internal path.
const SANITIZED_MESSAGES: Record<ParserFailureCode, string> = {
  FILE_TOO_LARGE: "This file is too large.",
  DECOMPRESSED_TOO_LARGE: "This spreadsheet workbook is too large to process.",
  TOO_MANY_ROWS: `This file has more than ${IMPORT_LIMITS.maxRows} data rows.`,
  TOO_MANY_COLUMNS: `This file has more than ${IMPORT_LIMITS.maxColumns} columns.`,
  CELL_TOO_LONG: `A value in this file is longer than ${IMPORT_LIMITS.maxCellLength} characters.`,
  PARSE_TIMEOUT: "This file took too long to process.",
  UNSUPPORTED_FILE_TYPE: "This file type isn't supported.",
  MALFORMED_FILE: "This file couldn't be read.",
  ENCRYPTED_OR_MACRO_FILE: "Encrypted or macro-enabled files aren't supported.",
  HEAD_OBJECT_NOT_FOUND: "Upload not found.",
  HEAD_CHECKSUM_METADATA_MISSING: "Upload integrity metadata missing.",
  HEAD_SIZE_MISMATCH: "Upload size mismatch.",
  HEAD_CHECKSUM_MISMATCH: "Upload checksum mismatch.",
  PARSER_RUNTIME_ERROR: "We couldn't process this file. Please try again.",
  RESPONSE_TOO_LARGE: "This file has too much data to process. Please split it into smaller files.",
  MALFORMED_REQUEST: "We couldn't process this request. Please try again.",
};

function failure(code: ParserFailureCode): ParserFailureEnvelope {
  return { ok: false, code, message: SANITIZED_MESSAGES[code] };
}

// Lambda Parser EIS §16.2 -- forbidden in logs: raw bytes, cell values,
// filenames beyond a minimal form, keys/certs/credentials, full checksums,
// raw provider error bodies, stack traces. Only an allowlisted event name +
// allowlisted opaque identifiers + a closed reason code.
function logSanitized(event: string, context: Record<string, string | number | boolean>): void {
  console.log(JSON.stringify({ event, ...context }));
}

function checksumPrefix(value: string): string {
  return value.slice(0, 8);
}

// ---------------------------------------------------------------------------
// S3 client -- region/credentials resolved from the Lambda execution
// environment (its own least-privilege execution role, §8.2 of the EIS).
// No credential is read from application config; nothing here ever touches
// Supabase or any Product Truth store.
// ---------------------------------------------------------------------------
const s3 = new S3Client({ region: process.env.AWS_REGION ?? "ap-south-1" });
const BUCKET = process.env.PARSER_INGRESS_BUCKET;
if (!BUCKET) {
  throw new Error("PARSER_INGRESS_BUCKET is not configured.");
}

function parseControlRequest(event: ParserLambdaEvent): ParserControlRequest | null {
  if (!event.body) return null;
  let raw: string;
  try {
    raw = event.isBase64Encoded ? Buffer.from(event.body, "base64").toString("utf-8") : event.body;
  } catch {
    return null;
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }
  if (typeof parsed !== "object" || parsed === null) return null;
  const p = parsed as Record<string, unknown>;
  if (
    typeof p.objectKey !== "string" ||
    p.objectKey.length === 0 ||
    typeof p.leaseId !== "string" ||
    p.leaseId.length === 0 ||
    typeof p.expectedByteLength !== "number" ||
    !Number.isInteger(p.expectedByteLength) ||
    p.expectedByteLength <= 0 ||
    p.expectedByteLength > IMPORT_LIMITS.maxCompressedBytes ||
    typeof p.expectedSha256B64 !== "string" ||
    p.expectedSha256B64.length === 0 ||
    (p.fileKind !== "csv" && p.fileKind !== "xlsx")
  ) {
    return null;
  }
  return {
    objectKey: p.objectKey,
    leaseId: p.leaseId,
    expectedByteLength: p.expectedByteLength,
    expectedSha256B64: p.expectedSha256B64,
    fileKind: p.fileKind,
  };
}

/**
 * CHK-LPE-005 -- HeadObject with ChecksumMode=ENABLED; missing checksum
 * metadata, a checksum mismatch, or a size mismatch each fail closed with a
 * bounded internal code, before any object-body read.
 */
type HeadIntegrityFailureCode =
  | "HEAD_OBJECT_NOT_FOUND"
  | "HEAD_CHECKSUM_METADATA_MISSING"
  | "HEAD_SIZE_MISMATCH"
  | "HEAD_CHECKSUM_MISMATCH";

async function verifyHeadIntegrity(
  control: ParserControlRequest,
): Promise<{ ok: true } | { ok: false; code: HeadIntegrityFailureCode }> {
  let head: HeadObjectCommandOutput;
  try {
    head = await s3.send(
      new HeadObjectCommand({
        Bucket: BUCKET,
        Key: control.objectKey,
        ChecksumMode: "ENABLED",
      }),
    );
  } catch (err) {
    const name = (err as { name?: string })?.name;
    if (name === "NotFound" || name === "NoSuchKey") {
      return { ok: false, code: "HEAD_OBJECT_NOT_FOUND" };
    }
    throw err;
  }

  if (head.ContentLength !== control.expectedByteLength) {
    return { ok: false, code: "HEAD_SIZE_MISMATCH" };
  }
  if (!head.ChecksumSHA256) {
    return { ok: false, code: "HEAD_CHECKSUM_METADATA_MISSING" };
  }
  if (head.ChecksumSHA256 !== control.expectedSha256B64) {
    return { ok: false, code: "HEAD_CHECKSUM_MISMATCH" };
  }
  return { ok: true };
}

async function deleteIngressObject(objectKey: string): Promise<void> {
  try {
    await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: objectKey }));
  } catch (err) {
    // Lambda Parser EIS §16.3 -- object-cleanup failures are a bounded
    // internal metric, never merchant-visible; the 1-day Lifecycle backstop
    // (S3 bucket configuration) remains the safety net for this case.
    logSanitized("object_cleanup_failed", { objectKeyPrefix: objectKey.slice(0, 16) });
    void err;
  }
}

async function readIngressObject(objectKey: string, expectedByteLength: number): Promise<Buffer> {
  const result = await s3.send(new GetObjectCommand({ Bucket: BUCKET, Key: objectKey }));
  const body = result.Body;
  if (!body) throw new Error("EMPTY_OBJECT_BODY");
  const chunks: Buffer[] = [];
  let total = 0;
  // Lambda Parser EIS §4 step 13 -- reads at most 5,242,880 bytes into
  // memory; this loop enforces that ceiling incrementally rather than
  // trusting the HeadObject-reported length alone.
  for await (const chunk of body as AsyncIterable<Uint8Array>) {
    total += chunk.length;
    if (total > IMPORT_LIMITS.maxCompressedBytes) {
      throw new ImportLimitError("FILE_TOO_LARGE", "This file is too large.");
    }
    chunks.push(Buffer.from(chunk));
  }
  const buffer = Buffer.concat(chunks);
  if (buffer.length !== expectedByteLength) {
    throw new Error("BODY_LENGTH_MISMATCH");
  }
  return buffer;
}

/**
 * Lambda Parser EIS §12.1 -- exact ordering: HeadObject verify -> body read
 * -> DeleteObject -> only then structural verification / parse.
 */
async function handleParse(control: ParserControlRequest): Promise<ParserResponseEnvelope> {
  const headResult = await verifyHeadIntegrity(control);
  if (!headResult.ok) {
    if (headResult.code !== "HEAD_OBJECT_NOT_FOUND") {
      await deleteIngressObject(control.objectKey);
    }
    logSanitized("head_integrity_failed", {
      leaseId: control.leaseId,
      code: headResult.code,
      checksumPrefix: checksumPrefix(control.expectedSha256B64),
    });
    return failure(headResult.code);
  }

  let buffer: Buffer;
  try {
    buffer = await readIngressObject(control.objectKey, control.expectedByteLength);
  } catch (err) {
    await deleteIngressObject(control.objectKey);
    if (err instanceof ImportLimitError) {
      logSanitized("read_limit_exceeded", { leaseId: control.leaseId, code: err.code });
      return failure(err.code);
    }
    logSanitized("read_failed", { leaseId: control.leaseId });
    return failure("PARSER_RUNTIME_ERROR");
  }

  // Immediate delete, before decompression checking or parsing begins
  // (Lambda Parser EIS §4 step 13, §10.2).
  await deleteIngressObject(control.objectKey);

  try {
    const outcome =
      control.fileKind === "csv"
        ? { ...(await parseCsv(buffer)), additionalWorksheetsIgnored: false }
        : await parseXlsx(buffer);
    return { ok: true, outcome };
  } catch (err) {
    if (err instanceof ImportLimitError) {
      logSanitized("parse_rejected", { leaseId: control.leaseId, code: err.code });
      return failure(err.code);
    }
    logSanitized("parse_runtime_error", { leaseId: control.leaseId });
    return failure("PARSER_RUNTIME_ERROR");
  }
}

/**
 * CHK-LPE-012 -- deterministic pre-stream size ceiling. The full envelope is
 * always serialized in memory first; if it would exceed the ceiling, a
 * RESPONSE_TOO_LARGE failure envelope is sent in its place instead, before
 * any streaming write begins. No partial/oversized body is ever streamed.
 */
function serializeWithinCeiling(envelope: ParserResponseEnvelope): string {
  const serialized = JSON.stringify(envelope);
  if (Buffer.byteLength(serialized, "utf-8") <= MAX_SERIALIZED_RESPONSE_BYTES) {
    return serialized;
  }
  return JSON.stringify(failure("RESPONSE_TOO_LARGE"));
}

async function writeResponse(
  responseStream: LambdaHttpResponseStream,
  envelope: ParserResponseEnvelope,
): Promise<void> {
  const body = serializeWithinCeiling(envelope);
  const httpStream = awslambda.HttpResponseStream.from(responseStream, {
    statusCode: 200,
    headers: { "content-type": "application/json" },
  });
  await new Promise<void>((resolve, reject) => {
    httpStream.write(body, (err?: Error | null) => {
      if (err) reject(err);
      else resolve();
    });
  });
  httpStream.end();
}

export const handler = awslambda.streamifyResponse(async (event, responseStream) => {
  const control = parseControlRequest(event);
  if (!control) {
    await writeResponse(responseStream, failure("MALFORMED_REQUEST"));
    return;
  }

  try {
    const envelope = await handleParse(control);
    await writeResponse(responseStream, envelope);
  } catch {
    // Lambda Parser EIS §15 -- no provider internals leak, ever, even on an
    // unexpected runtime error outside the ordinary failure paths above.
    logSanitized("unhandled_runtime_error", { leaseId: control.leaseId });
    await writeResponse(responseStream, failure("PARSER_RUNTIME_ERROR"));
  }
});
