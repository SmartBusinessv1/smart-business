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
//
// Second F-01 correction (communication/missions/SB-ORG-LEARNING-1.1/
// mission-control/08-stage1-f01-f02-f03-correction-authorization.md):
// Codex independent re-verification found that layers 1-2 above are
// purely lexical -- `path.resolve`/`path.relative` never touch the
// filesystem, so they cannot see that a path component that already
// exists on disk is a symlink, Windows directory junction, or other
// reparse point whose real target lies outside the configured receipts
// directory. A pre-planted junction at the derived mission-storage
// directory could silently redirect both lookup and write to an
// attacker-chosen sibling location, even though every path *string*
// involved still looked contained.
//
//   3. `assertPhysicallyContained` walks up from the target path to the
//      deepest component that currently exists, resolves *that*
//      component with `fs.realpathSync` (which does follow symlinks/
//      junctions, unlike `resolve`/`relative`), and throws if the real,
//      physical location falls outside the base directory's own real
//      location. When nothing below the base directory exists yet (the
//      normal first-write case), the deepest existing ancestor is the
//      base directory itself, which is trivially contained -- so this
//      never blocks an ordinary fresh write, only a pre-existing
//      indirection. Verified empirically against a real Windows
//      directory junction while writing this fix: `fs.existsSync`
//      follows a junction (reporting the target's existence),
//      `fs.lstatSync(...).isSymbolicLink()` is true for it, and
//      `fs.realpathSync` correctly resolves it to its real target --
//      exactly the primitives this layer relies on.

import { createHash, randomUUID } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  renameSync,
  writeFileSync,
} from "node:fs";
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

/**
 * Walks up from `targetPath` to the deepest path component that
 * currently exists on disk. May return `targetPath` itself, an
 * intermediate directory (including one that turns out to be a
 * symlink/junction), or an ancestor above `baseDir` if nothing under
 * `baseDir` -- or `baseDir` itself -- exists yet.
 */
function deepestExistingAncestor(targetPath: string): string {
  let current = resolve(targetPath);
  while (!existsSync(current)) {
    const parent = dirname(current);
    if (parent === current) {
      // Reached the filesystem root without finding anything that
      // exists -- practically unreachable (the OS temp/working
      // directory tree always exists), but fail closed rather than loop.
      throw new Error(`could not locate an existing ancestor of ${targetPath}`);
    }
    current = parent;
  }
  return current;
}

/**
 * Throws if any existing filesystem component between `baseDir` and
 * `targetPath` is a symlink, junction, or other reparse point whose real
 * (`fs.realpathSync`-resolved) location falls outside `baseDir`'s own
 * real location. See the file header ("Second F-01 correction") for why
 * this check exists in addition to the purely lexical
 * `resolveContainedPath`, and why it never blocks an ordinary write to a
 * base directory nothing has been written into yet.
 *
 * Exported (S5-F-01/S5-F-03 correction, communication/missions/
 * SB-ORG-LEARNING-1.1/mission-control/25-stage5-f01-f04-correction-
 * authorization.md): reconciliation receipt discovery
 * (scripts/reconcile.mjs) and approved envelope-location checking
 * (sources/envelope-location.ts) each need this exact physical-
 * containment behavior and must not fork a weaker parallel
 * implementation. Behavior is unchanged; only visibility changed.
 */
export function assertPhysicallyContained(baseDir: string, targetPath: string): void {
  const resolvedBase = resolve(baseDir);
  if (!existsSync(resolvedBase)) {
    // Nothing has been created under this trust root yet -- there is no
    // existing indirection to detect, and the caller's own mkdir/write
    // will create a fresh, ordinary (safe) physical tree.
    return;
  }
  const physicalBase = realpathSync(resolvedBase);
  const existingAncestor = deepestExistingAncestor(targetPath);
  const physicalAncestor = realpathSync(existingAncestor);
  const relativePath = relative(physicalBase, physicalAncestor);
  const escapesBase = relativePath.startsWith("..") || isAbsolute(relativePath);
  if (escapesBase) {
    throw new Error(
      `refusing to follow filesystem indirection outside the configured receipts directory: base=${physicalBase} resolved=${physicalAncestor}`,
    );
  }
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
  assertPhysicallyContained(baseDir, filePath);
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
  assertPhysicallyContained(baseDir, filePath);
  mkdirSync(dirname(filePath), { recursive: true });
  const tempPath = `${filePath}.${randomUUID()}.tmp`;
  writeFileSync(tempPath, `${JSON.stringify(validated, null, 2)}\n`, "utf8");
  renameSync(tempPath, filePath);
}
