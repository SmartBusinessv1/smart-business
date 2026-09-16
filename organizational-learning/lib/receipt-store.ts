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

import { randomUUID } from "node:crypto";
import { mkdirSync, readFileSync, renameSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { ReceiptSchema, type Receipt } from "../schemas/receipt.schema.ts";

export function computeReceiptId(missionId: string, sourceFingerprint: string): string {
  return `${missionId}:${sourceFingerprint}`;
}

export function receiptFilePath(
  baseDir: string,
  missionId: string,
  sourceFingerprint: string,
): string {
  return join(baseDir, missionId, `${sourceFingerprint}.json`);
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
