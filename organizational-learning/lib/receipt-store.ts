// SB-ORG-LEARNING-1.1 Stage 1 -- Receipt persistence and idempotency.
//
// B7: "The same authoritative source revision must not create duplicate
// candidate artifacts... Unchanged input -> deterministic no-op /
// already-processed result." Applied here one layer down, at the
// receipt itself: `receipt_id` is derived only from (mission_id,
// source_fingerprint), so re-running the harvester against an unchanged
// closure envelope always resolves to the same receipt file and updates
// it in place, rather than accumulating duplicate receipts. `run_id` is
// a fresh identifier per invocation -- B7's distinct "processing-run
// identity", which must vary across retries even when the source
// fingerprint (identity 1) does not.
//
// Writes are atomic (write to a sibling temp file, then rename) so a
// crash mid-write can never leave a half-written, unparsable receipt on
// disk -- a small, cheap instance of the "atomic publication" principle
// (B7) applied to the one artifact Stage 1 actually publishes.
//
// The base directory is always caller-supplied, never hardcoded to the
// real `organizational-learning/receipts/` tree -- this is what lets
// tests point the store at a throwaway temp directory instead of writing
// real files into the tracked repository.
//
// F-01 correction (communication/missions/SB-ORG-LEARNING-1.1/
// mission-control/06-stage1-f01-correction-authorization.md): Codex
// independent verification found that a rejected envelope's raw,
// unvalidated `mission_id` (e.g. "../escaped") was joined directly into
// the receipt file path, letting a malformed identifier that never
// passed the closure-envelope schema's MissionIdSchema check escape the
// configured receipts directory even though the envelope itself was
// correctly rejected. The accepted Stage 1 rule that a failure receipt
// may preserve the original malformed identifier for truthful
// diagnostics (computeReceiptId, and the `mission_id` field callers set
// on the receipt payload itself) is unchanged and remains exactly as
// before -- only the *filesystem placement* derivation changes.
//
// The fix has two independent layers, per the correction's explicit
// requirement not to rely on sanitization alone:
//   1. `computeMissionStorageKey` hashes the identifier into a sha256
//      hex digest before it ever reaches a path -- a hex digest cannot
//      contain "/", "\\", "..", a drive letter, or a UNC prefix no
//      matter what the input looks like, so this makes escape
//      structurally impossible by construction rather than by pattern-
//      matching known-bad forms.
//   2. `resolveContainedPath` independently re-verifies that the
//      resolved destination is actually inside the configured base
//      directory and throws if not. In normal operation this can never
//      fire, because layer 1 already guarantees safety -- it exists as
//      a defense-in-depth invariant so a future edit that weakens or
//      bypasses the hashing step fails loudly instead of silently
//      reopening F-01.

import { createHash, randomUUID } from "node:crypto";
import { mkdirSync, readFileSync, renameSync, writeFileSync, existsSync } from "node:fs";
import { dirname, isAbsolute, relative, resolve } from "node:path";
import { ReceiptSchema, type Receipt } from "../schemas/receipt.schema.ts";

/**
 * Diagnostic receipt identity, shown in a receipt's payload. Uses the
 * raw `missionId` verbatim, including malformed input -- this is the
 * value truthful failure reporting requires, and it must never be used
 * as a filesystem path component (see `computeMissionStorageKey` for
 * the value that is safe for that).
 */
export function computeReceiptId(missionId: string, sourceFingerprint: string): string {
  return `${missionId}:${sourceFingerprint}`;
}

/**
 * Deterministic, filesystem-safe storage key derived from a mission
 * identifier. Distinct from `computeReceiptId`'s diagnostic identity:
 * this value only ever appears as a directory name, is always a 64-
 * character lowercase hex digest regardless of input, and therefore can
 * never contain traversal, path separators, or drive/UNC semantics.
 */
export function computeMissionStorageKey(missionId: string): string {
  return createHash("sha256").update(missionId, "utf8").digest("hex");
}

/**
 * Resolves `segments` under `baseDir` and throws if the resolved path
 * would fall outside it. See the file header for why this check exists
 * even though `computeMissionStorageKey` already makes escape
 * structurally impossible for its caller.
 */
export function resolveContainedPath(baseDir: string, ...segments: string[]): string {
  const resolvedBase = resolve(baseDir);
  const candidate = resolve(resolvedBase, ...segments);
  const relativePath = relative(resolvedBase, candidate);
  const escapesBase =
    relativePath === "" || relativePath.startsWith("..") || isAbsolute(relativePath);
  if (escapesBase) {
    throw new Error(
      `refusing to resolve a path outside the configured base directory: base=${resolvedBase} candidate=${candidate}`,
    );
  }
  return candidate;
}

export function receiptFilePath(
  baseDir: string,
  missionId: string,
  sourceFingerprint: string,
): string {
  return resolveContainedPath(
    baseDir,
    computeMissionStorageKey(missionId),
    `${sourceFingerprint}.json`,
  );
}

export function newRunId(): string {
  return randomUUID();
}

/** Reads and schema-validates an existing receipt, or returns null if none exists. */
export function readReceiptIfExists(
  baseDir: string,
  missionId: string,
  sourceFingerprint: string,
): Receipt | null {
  const filePath = receiptFilePath(baseDir, missionId, sourceFingerprint);
  if (!existsSync(filePath)) return null;
  const raw = JSON.parse(readFileSync(filePath, "utf8"));
  return ReceiptSchema.parse(raw);
}

/** A receipt is "already processed" only once it reached the SCREENED
 * terminal-success state for Stage 1. A VALIDATION_FAILED receipt is not
 * "already processed" -- it must remain retryable. */
export function isAlreadyProcessed(receipt: Receipt): boolean {
  return receipt.processing_state === "SCREENED";
}

/** Schema-validates `receipt`, then writes it atomically. */
export function writeReceipt(baseDir: string, receipt: Receipt): void {
  const validated = ReceiptSchema.parse(receipt);
  const filePath = receiptFilePath(baseDir, validated.mission_id, validated.source_fingerprint);
  mkdirSync(dirname(filePath), { recursive: true });
  const tempPath = `${filePath}.${randomUUID()}.tmp`;
  writeFileSync(tempPath, `${JSON.stringify(validated, null, 2)}\n`, "utf8");
  renameSync(tempPath, filePath);
}
