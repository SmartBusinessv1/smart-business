#!/usr/bin/env node
// SB-ORG-LEARNING-1.1 Stage 4A -- Bounded deterministic reconciliation wrapper.
//
// Final reconciled build plan, Section 11 (B7): reconciliation must
// distinguish source-snapshot identity from processing-run identity,
// prove idempotency ("unchanged input -> deterministic no-op; changed
// authoritative closure revision -> new processing revision"), enforce
// "one active processing run per mission + closure revision" via "simple
// single-process locking" at this proof stage, and persist enough
// non-sensitive state to support recovery ("a failed run must never be
// interpreted as no material learning"). Section 15: background
// automation begins only after these controls are proven and "must not
// depend on parsing arbitrary prose alone."
//
// This wrapper performs NO semantic extraction and NO publication -- it
// only classifies, for each explicitly supplied closure envelope, what
// the safe next deterministic action is, by composing the already
// accepted Stage 1-3 contracts and lib functions:
//   - ClosureEnvelopeSchema / envelopeEvidenceRefs (envelope shape);
//   - isApprovedClosureEnvelopeLocation (S4A-F-01 correction: an explicit,
//     independent approved-location boundary for the envelope FILE itself,
//     checked before the file is ever opened -- distinct from evidence
//     allowlisting, which governs referenced evidence paths, not where the
//     envelope lives);
//   - isAllowlistedSourcePath, resolveBlobAtPath, verifyCommitExists
//     (the identical evidence-resolution path harvest.mjs uses, reused
//     read-only here -- no screening, no receipt write, no extraction);
//   - sortManifest / computeSourceFingerprint (identical fingerprint
//     algorithm, so a reconciled fingerprint always matches what
//     harvest.mjs would actually produce for the same envelope);
//   - computeMissionStorageKey / resolveContainedPath /
//     assertPhysicallyContained / isAlreadyProcessed / newRunId (the
//     existing receipt-store identity/containment primitives, reused to
//     read -- never rewrite -- durable processing state; S5-F-01
//     correction reuses the exact, unmodified physical-containment guard
//     rather than a weaker parallel algorithm);
//   - computeRevisionHash (Stage 2/3's canonical-JSON revision-identity
//     hash, reused unmodified by the S5-F-04 correction to decide
//     whether two valid envelopes claiming the same mission_id +
//     closure_revision are equivalent or materially conflicting).
//
// Discovery is structural only: every input is an explicit --envelope
// path or a --envelopes-dir directory this wrapper is explicitly told to
// look at, and only files ending in .json inside it are ever considered
// -- an arbitrary prose file in the same directory is never opened,
// never parsed, and therefore can never create work (final build plan,
// B3: source eligibility is not source authority; Stage 4A authorization
// Section 7, item 1: "explicit structured-source discovery only").
//
// Usage:
//   node organizational-learning/scripts/reconcile.mjs \
//     [--envelope <path.json> ...] [--envelopes-dir <path>] \
//     [--repo-root <path>] [--receipts-dir <path>] [--locks-dir <path>] \
//     [--out-dir <path>] [--run-id <id>] [--attempt-lock]

import {
  readFileSync,
  readdirSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  unlinkSync,
  realpathSync,
  lstatSync,
  statSync,
} from "node:fs";
import { join, dirname, relative, isAbsolute, resolve } from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { createHash } from "node:crypto";

import { ClosureEnvelopeSchema, envelopeEvidenceRefs } from "../schemas/closure-envelope.schema.ts";
import { ReceiptSchema } from "../schemas/receipt.schema.ts";
import { ReconciliationPlanSchema } from "../schemas/reconciliation.schema.ts";
import { isAllowlistedSourcePath } from "../sources/allowlist.ts";
import { isApprovedClosureEnvelopeLocation } from "../sources/envelope-location.ts";
import { resolveBlobAtPath, verifyCommitExists } from "../lib/git-object-reader.ts";
import { computeSourceFingerprint, sortManifest } from "../lib/fingerprint.ts";
import { computeRevisionHash } from "../lib/revision-hash.ts";
import {
  computeMissionStorageKey,
  resolveContainedPath,
  assertPhysicallyContained,
  isAlreadyProcessed,
  newRunId,
} from "../lib/receipt-store.ts";
import { runHeuristicScan, runScreeningSafely } from "../lib/screening.ts";

const RECONCILIATION_SCHEMA_VERSION = 1;

function sortByStableKey(items, keyFn) {
  return [...items].sort((a, b) => {
    const ka = keyFn(a);
    const kb = keyFn(b);
    return ka < kb ? -1 : ka > kb ? 1 : 0;
  });
}

/**
 * Recursively collects `.json` file paths under `dir`, never following a
 * nested directory entry whose physical (symlink/junction-resolved)
 * location escapes wherever the walk itself started (S5-F-03 correction:
 * "directory discovery must not recursively traverse a junction/symlink/
 * reparse point whose real target escapes the approved root"). This is a
 * general recursion-containment invariant, independent of
 * `communication/missions/` specifically -- every discovered path is
 * still independently re-checked against the actual approved envelope
 * root by `isApprovedClosureEnvelopeLocation` in `planReconciliation`
 * regardless of how it was discovered; this is defense-in-depth at the
 * discovery layer itself, not a substitute for that check.
 */
function collectJsonFiles(dir) {
  let anchorRealPath;
  try {
    anchorRealPath = realpathSync(dir);
  } catch {
    return [];
  }
  return collectJsonFilesWithinAnchor(dir, anchorRealPath);
}

function collectJsonFilesWithinAnchor(dir, anchorRealPath) {
  const results = [];
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  const sorted = [...entries].sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
  for (const entry of sorted) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      let entryRealPath;
      try {
        entryRealPath = realpathSync(fullPath);
      } catch {
        continue;
      }
      const relativeToAnchor = relative(anchorRealPath, entryRealPath);
      const escapesAnchor = relativeToAnchor.startsWith("..") || isAbsolute(relativeToAnchor);
      if (escapesAnchor) continue;
      results.push(...collectJsonFilesWithinAnchor(fullPath, anchorRealPath));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      results.push(fullPath);
    }
  }
  return results;
}

/**
 * Reads and schema-validates exactly one candidate receipt file, never
 * throwing. This is the single chokepoint `listReceiptsForMission` uses
 * for every file it considers, so "unreadable", "not valid JSON", and
 * "schema-invalid" are all produced here (S4A-F-02 correction) -- and are
 * directly testable in isolation, since reliably forcing a genuinely
 * permission-denied file read is not portable across Windows/CI, but any
 * path `readFileSync` cannot read (a permission-denied file, a directory
 * passed by mistake, an I/O error) reaches the same UNREADABLE branch.
 */
export function readAndValidateReceiptFile(filePath) {
  let raw;
  try {
    raw = readFileSync(filePath, "utf8");
  } catch {
    return { ok: false, condition: "UNREADABLE" };
  }
  let parsedJson;
  try {
    parsedJson = JSON.parse(raw);
  } catch {
    return { ok: false, condition: "INVALID_JSON" };
  }
  const parsed = ReceiptSchema.safeParse(parsedJson);
  if (!parsed.success) {
    return { ok: false, condition: "SCHEMA_INVALID" };
  }
  return { ok: true, receipt: parsed.data };
}

/**
 * Reads every receipt already on file for `missionId`, returning both the
 * schema-valid receipts AND any read/parse/validation issues found along
 * the way.
 *
 * S5-F-01/S5-F-02 correction (communication/missions/SB-ORG-LEARNING-1.1/
 * mission-control/25-stage5-f01-f04-correction-authorization.md):
 * independent verification found two defects in the prior version of
 * this function. First (S5-F-01), it enumerated/read through
 * `readdirSync`/`readFileSync` directly, which transparently follow a
 * symlink/junction -- unlike Stage 1's own receipt reader
 * (`readReceiptIfExists`), which calls `assertPhysicallyContained`
 * first. A pre-planted junction at the derived mission storage directory
 * could silently redirect reconciliation to attacker-controlled outside-
 * root receipt state even though every path *string* still looked
 * contained. Second (S5-F-02), every enumeration failure (a missing
 * directory, `ENOTDIR` from an ordinary file at that path, a permission/
 * I/O error) collapsed to the same `{receipts: [], issues: []}` result,
 * making an unsafe/ambiguous durable store indistinguishable from
 * genuine absence and able to produce new work-producing classification.
 *
 * S5-F-05 correction (communication/missions/SB-ORG-LEARNING-1.1/
 * mission-control/28-stage5-f05-correction-authorization.md): independent
 * corrective re-verification found the S5-F-02 fix's own absence check,
 * `!existsSync(missionDir)`, is itself unsafe. `existsSync` follows
 * symlinks/junctions and reports `false` when the *target* cannot be
 * resolved -- it does not prove the directory *entry* is absent. A
 * dangling junction/symlink planted at the mission storage path (target
 * removed or never created) makes `existsSync` return `false` while the
 * entry itself still exists, so the old code took the "genuine absence"
 * branch and reconciliation incorrectly reached `ELIGIBLE_UNPROCESSED`
 * instead of failing closed -- exactly reversing the S5-F-02 guarantee
 * for this one case. `lstatSync` (unlike `existsSync`/`statSync`) never
 * follows the final path component: it throws `ENOENT` only when no
 * entry exists there at all, and succeeds for a symlink/junction entry
 * regardless of whether its target resolves. That is the correct, non-
 * following existence check absence detection must use.
 *
 * The fix distinguishes, in order:
 *   1. genuine absence (`lstatSync` throws `ENOENT`) -- the only case
 *      that may truthfully mean no receipts, with zero issues;
 *   2. an `lstatSync`-visible entry that `existsSync` cannot resolve --
 *      a dangling/unresolved symlink or junction -- an issue, zero
 *      receipts, never treated as absence;
 *   3. any other `lstatSync` failure (permission/I/O, an unreadable
 *      parent path component) -- an issue, zero receipts, never treated
 *      as absence;
 *   4. physical-indirection failure (reusing the exact, unmodified
 *      Stage 1 `assertPhysicallyContained` primitive on the mission
 *      directory itself) -- an issue, zero receipts;
 *   5. any other enumeration failure (`ENOTDIR`, permission/I/O) -- an
 *      issue, zero receipts;
 *   6. per entry: physical-indirection failure on that specific file (a
 *      nested symlink even inside an otherwise-legitimate directory) --
 *      an issue for that entry, not merely for the directory as a whole;
 *   7. per entry: a receipt-shaped (`.json`) entry that is not a regular
 *      file (e.g. a directory literally named `blocked.json`) -- an
 *      issue, not silently skipped the way a non-`.json` entry is;
 *   8. per entry: unreadable / malformed / schema-invalid (S4A-F-02,
 *      unchanged) -- an issue.
 *
 * `classifyEnvelope` still treats *any* non-empty `issues` array as
 * blocking (see below) -- this function's job is only to classify each
 * problem accurately and safely, never to decide reconciliation policy.
 */

/**
 * True only for the one error `lstatSync` raises when no filesystem
 * entry exists at all at a path -- `ENOENT`. Isolated as its own pure
 * function (S5-F-05) so the "is this genuine absence" decision is
 * directly unit-testable with a synthetic error object, since reliably
 * forcing a real, *non*-`ENOENT` `lstatSync` failure (permission denial,
 * an unreadable parent path component) is not portably constructible on
 * Windows/CI -- confirmed empirically while writing this fix: even a
 * parent path component that is itself an ordinary file, or itself a
 * dangling link, both still surface as `ENOENT` on this platform, not a
 * distinct code.
 */
export function isGenuineAbsenceError(error) {
  return Boolean(error && error.code === "ENOENT");
}

/**
 * Walks upward from `targetPath` (via `dirname`) using non-following
 * `lstatSync` metadata to find the deepest ancestor that has an actual
 * filesystem entry -- which may be a directory, an ordinary file, or a
 * dangling symlink/junction. Never follows the final component of any
 * path it inspects (S5-F-05's lesson, generalized): an `ENOENT` at one
 * level only means "try the parent," never "prove absence" by itself.
 *
 * Returns `{ ancestorPath }` once an existing entry is found,
 * `{ ambiguous: true }` if an `lstatSync` call partway up fails for a
 * reason other than absence (permission denial, I/O error), or
 * `{ ancestorPath: null }` if nothing exists anywhere in the chain up to
 * the filesystem root (practically unreachable -- the OS temp/working
 * directory tree always exists).
 */
function findDeepestExistingAncestorByLstat(targetPath) {
  let current = resolve(targetPath);
  while (true) {
    try {
      lstatSync(current);
      return { ancestorPath: current };
    } catch (error) {
      if (!isGenuineAbsenceError(error)) {
        return { ambiguous: true };
      }
      const parent = dirname(current);
      if (parent === current) {
        return { ancestorPath: null };
      }
      current = parent;
    }
  }
}

/**
 * Classifies the mission storage directory's filesystem-entry presence
 * using non-following `lstatSync` metadata, never `existsSync` alone
 * (S5-F-05 correction, communication/missions/SB-ORG-LEARNING-1.1/
 * mission-control/28-stage5-f05-correction-authorization.md):
 * independent corrective re-verification found the prior `!existsSync`
 * absence check is itself unsafe. `existsSync` follows symlinks/
 * junctions and reports `false` when the *target* cannot be resolved --
 * it does not prove the directory *entry* is absent. A dangling
 * junction/symlink planted at the mission storage path (target removed
 * or never created) made `existsSync` return `false` while the entry
 * itself still existed, so the prior code took the "genuine absence"
 * branch and reconciliation incorrectly reached `ELIGIBLE_UNPROCESSED`
 * instead of failing closed. `lstatSync` never follows the final path
 * component: it throws `ENOENT` only when no entry exists there at all,
 * and succeeds for a symlink/junction entry regardless of whether its
 * target resolves -- the correct, non-following existence check.
 *
 * S5-F-06 correction (communication/missions/SB-ORG-LEARNING-1.1/
 * mission-control/31-stage5-f06-correction-authorization.md): independent
 * re-verification found that a bare `lstatSync(missionDir)` `ENOENT` is
 * *still* not sufficient proof of genuine absence -- it only proves
 * `missionDir` itself cannot be resolved, not that the *configured
 * ancestry above it* is a valid, traversable directory hierarchy. On
 * Windows, an ordinary file occupying the configured `receiptsDir` path
 * makes `lstatSync(receiptsDir/<key>)` throw `ENOENT` exactly like
 * genuine absence would, even though the receipts root is actively
 * invalid, not empty. This is not a single-filename/single-error-string
 * special case: any invalid, non-directory, dangling, or metadata-
 * ambiguous ancestor anywhere between `missionDir` and the filesystem
 * root creates the identical ambiguity.
 *
 * The fix walks up from `missionDir` (`findDeepestExistingAncestorByLstat`,
 * above) to find the deepest ancestor that actually has an entry, then
 * validates that specific ancestor:
 *   - if the entry found *is* `missionDir` itself, nothing changes from
 *     the S5-F-05 behavior (dangling vs. present, decided exactly as
 *     before);
 *   - if the deepest existing entry is some ancestor *above* `missionDir`
 *     (i.e. `missionDir` and everything below that ancestor is genuinely
 *     unwritten), absence is trustworthy only if that ancestor resolves
 *     (following any symlink chain) to an actual directory -- `statSync`
 *     is used deliberately here (unlike the non-following `lstatSync`
 *     used for `missionDir` itself) because a *valid* symlinked ancestor
 *     pointing at a real directory is legitimate ancestry, while a file,
 *     a dangling link, or an unresolvable ancestor is not;
 *   - if no entry exists anywhere in the chain, or an `lstatSync` call
 *     partway up is itself ambiguous, absence is never assumed.
 *
 * Exported for direct testing (dangling-entry and invalid-ancestor
 * construction are real and platform-supported here; see
 * reconcile.test.ts).
 */
export function classifyMissionDirectoryPresence(missionDir) {
  const resolvedMissionDir = resolve(missionDir);
  const ancestor = findDeepestExistingAncestorByLstat(resolvedMissionDir);

  if (ancestor.ambiguous) {
    return { status: "METADATA_UNAVAILABLE" };
  }
  if (ancestor.ancestorPath === null) {
    // Nothing exists anywhere in the chain up to the filesystem root --
    // practically unreachable, but the only honest reading is absence.
    return { status: "ABSENT" };
  }

  if (ancestor.ancestorPath !== resolvedMissionDir) {
    // missionDir itself does not exist, and neither does everything
    // between it and this ancestor -- absence is trustworthy only if
    // this existing ancestor is actually a valid, resolvable directory.
    let ancestorStat;
    try {
      ancestorStat = statSync(ancestor.ancestorPath);
    } catch {
      // The existing ancestor's entry cannot be resolved through
      // symlink/junction following -- a dangling or otherwise
      // unresolved ancestor. Invalid ancestry, never absence.
      return { status: "INVALID_ANCESTRY" };
    }
    if (!ancestorStat.isDirectory()) {
      // An existing ancestor (which may be the configured receiptsDir
      // itself, or something above it) is an ordinary file or other
      // non-directory object -- exactly the S5-F-06 reproduction.
      // Invalid ancestry, never absence.
      return { status: "INVALID_ANCESTRY" };
    }
    return { status: "ABSENT" };
  }

  // The deepest existing entry IS missionDir itself -- proceed exactly
  // as the S5-F-05 correction did: distinguish dangling/unresolved from
  // genuinely present.
  if (!existsSync(resolvedMissionDir)) {
    // An entry exists at this exact path (the lstat above succeeded),
    // but the entry does not resolve through symlink/junction following
    // -- a dangling or otherwise unresolved indirection. Present, but
    // unsafe: must never be treated as absence.
    return { status: "DANGLING_OR_UNRESOLVED" };
  }
  return { status: "PRESENT" };
}

/**
 * The fix distinguishes, in order:
 *   1. genuine absence (`classifyMissionDirectoryPresence` -> `ABSENT`)
 *      -- the only case that may truthfully mean no receipts, with zero
 *      issues;
 *   2. invalid receipt-root ancestry (-> `INVALID_ANCESTRY`, S5-F-06) --
 *      an existing ancestor above the mission directory (which may be
 *      the configured `receiptsDir` itself) is not a valid, resolvable
 *      directory -- an issue, zero receipts, never treated as absence;
 *   3. a dangling/unresolved symlink or junction at the mission
 *      directory itself (-> `DANGLING_OR_UNRESOLVED`, S5-F-05) -- an
 *      issue, zero receipts, never treated as absence;
 *   4. any other lstat metadata failure (-> `METADATA_UNAVAILABLE`) --
 *      an issue, zero receipts, never treated as absence;
 *   5. physical-indirection failure (reusing the exact, unmodified
 *      Stage 1 `assertPhysicallyContained` primitive on the mission
 *      directory itself) -- an issue, zero receipts;
 *   6. any other enumeration failure (`ENOTDIR`, permission/I/O) -- an
 *      issue, zero receipts;
 *   7. per entry: physical-indirection failure on that specific file (a
 *      nested symlink even inside an otherwise-legitimate directory) --
 *      an issue for that entry, not merely for the directory as a whole;
 *   8. per entry: a receipt-shaped (`.json`) entry that is not a regular
 *      file (e.g. a directory literally named `blocked.json`) -- an
 *      issue, not silently skipped the way a non-`.json` entry is;
 *   9. per entry: unreadable / malformed / schema-invalid (S4A-F-02,
 *      unchanged) -- an issue.
 */
function listReceiptsForMission(receiptsDir, missionId) {
  const key = computeMissionStorageKey(missionId);
  const missionDir = resolveContainedPath(receiptsDir, key);

  const presence = classifyMissionDirectoryPresence(missionDir);
  if (presence.status === "ABSENT") {
    return { receipts: [], issues: [] };
  }
  if (presence.status === "INVALID_ANCESTRY") {
    return { receipts: [], issues: [{ path: key, condition: "INVALID_RECEIPT_ROOT_ANCESTRY" }] };
  }
  if (presence.status === "DANGLING_OR_UNRESOLVED") {
    return { receipts: [], issues: [{ path: key, condition: "DANGLING_OR_UNRESOLVED_ENTRY" }] };
  }
  if (presence.status === "METADATA_UNAVAILABLE") {
    return { receipts: [], issues: [{ path: key, condition: "ENTRY_METADATA_UNAVAILABLE" }] };
  }

  try {
    assertPhysicallyContained(receiptsDir, missionDir);
  } catch {
    return { receipts: [], issues: [{ path: key, condition: "PHYSICAL_CONTAINMENT_VIOLATION" }] };
  }

  let entries;
  try {
    entries = readdirSync(missionDir, { withFileTypes: true });
  } catch {
    // Present but cannot be enumerated as a directory (ENOTDIR from an
    // ordinary file at this path, permission denial, I/O error) -- never
    // silently treated as absence.
    return { receipts: [], issues: [{ path: key, condition: "ENUMERATION_FAILED" }] };
  }

  const receipts = [];
  const issues = [];
  const sorted = [...entries].sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
  for (const entry of sorted) {
    if (!entry.name.endsWith(".json")) continue;
    const entryPath = join(missionDir, entry.name);

    try {
      assertPhysicallyContained(receiptsDir, entryPath);
    } catch {
      issues.push({ path: `${key}/${entry.name}`, condition: "PHYSICAL_CONTAINMENT_VIOLATION" });
      continue;
    }

    if (!entry.isFile()) {
      issues.push({ path: `${key}/${entry.name}`, condition: "UNEXPECTED_NON_FILE_ENTRY" });
      continue;
    }

    const result = readAndValidateReceiptFile(entryPath);
    if (result.ok) {
      receipts.push(result.receipt);
    } else {
      // Safe diagnostic only: the receipt-store storage key (a sha256
      // hash, never the raw mission_id) plus the filename already on
      // disk, and a fixed condition label -- never raw file content or a
      // parser error message (F-03's no-raw-content principle applied
      // here).
      issues.push({ path: `${key}/${entry.name}`, condition: result.condition });
    }
  }
  return { receipts, issues };
}

/** Reuses the identical allowlist + committed-object-read + canonical-sort + fingerprint sequence harvest.mjs uses, purely read-only (no screening, no receipt write). */
function resolveManifestAndFingerprint(envelope, repoRoot) {
  const refs = envelopeEvidenceRefs(envelope);
  const manifest = [];
  const rejectedRefs = [];
  for (const ref of refs) {
    if (!isAllowlistedSourcePath(ref)) {
      rejectedRefs.push(`${ref} (not allowlisted)`);
      continue;
    }
    const resolved = resolveBlobAtPath(repoRoot, envelope.source_snapshot_ref, ref);
    if (resolved.status !== "OK") {
      rejectedRefs.push(`${ref} (${resolved.status})`);
      continue;
    }
    manifest.push({ path: ref, blobSha: resolved.entry.blobSha });
  }
  const canonicalManifest = sortManifest(manifest);
  const fingerprint = computeSourceFingerprint({
    schemaVersion: envelope.schemaVersion,
    closureRevision: envelope.closure_revision,
    manifest: canonicalManifest,
  });
  return { canonicalManifest, fingerprint, rejectedRefs };
}

// -- Concurrency: a safe, local, deterministic proof primitive only (Stage
// 4A authorization Section 7, item 6: "enforce one active deterministic
// reconciliation attempt per mission + closure revision within the proof
// process"). The lock key is a single sha256 hash of
// "<mission_id>::<closure_revision>", used as one flat filename directly
// under `locksDir` -- there is no per-mission nested directory the way
// receipts have, so the symlink/junction indirection attack surface that
// motivated receipt-store's physical-containment layer does not apply the
// same way here; `resolveContainedPath` (reused, unmodified) still
// provides lexical defense-in-depth. This is not a lease/expiry-aware
// production lock service -- a stale lock from a crashed real run is a
// known, explicitly out-of-scope limitation for this proof stage.
function lockFilePath(locksDir, missionId, closureRevision) {
  const key = createHash("sha256").update(`${missionId}::${closureRevision}`, "utf8").digest("hex");
  return resolveContainedPath(locksDir, `${key}.lock`);
}

/** Non-mutating peek at current lock state, for display on a work item. Never acquires or releases anything. */
export function isLocked(locksDir, missionId, closureRevision) {
  const path = lockFilePath(locksDir, missionId, closureRevision);
  if (!existsSync(path)) return { locked: false, owner_run_id: null };
  try {
    const data = JSON.parse(readFileSync(path, "utf8"));
    return { locked: true, owner_run_id: typeof data.run_id === "string" ? data.run_id : null };
  } catch {
    return { locked: true, owner_run_id: null };
  }
}

/**
 * Atomically claims ownership of (missionId, closureRevision), or fails
 * if another attempt already holds it. `wx` is an exclusive-create flag:
 * the underlying `open(2)`/`CreateFile` call fails with EEXIST if the
 * file already exists, which is what makes this check-and-create atomic
 * at the OS level rather than a separate exists-check-then-write race.
 */
export function attemptReconciliationOwnership(locksDir, missionId, closureRevision, runId) {
  const path = lockFilePath(locksDir, missionId, closureRevision);
  mkdirSync(dirname(path), { recursive: true });
  try {
    writeFileSync(
      path,
      JSON.stringify({ run_id: runId, mission_id: missionId, closure_revision: closureRevision }),
      { flag: "wx", encoding: "utf8" },
    );
    return { acquired: true, owner_run_id: runId };
  } catch (error) {
    if (error && error.code === "EEXIST") {
      const current = isLocked(locksDir, missionId, closureRevision);
      return { acquired: false, owner_run_id: current.owner_run_id, reason: "already-active" };
    }
    throw error;
  }
}

/** Releases ownership only if the caller actually holds it -- never removes another run's lock. */
export function releaseReconciliationOwnership(locksDir, missionId, closureRevision, runId) {
  const path = lockFilePath(locksDir, missionId, closureRevision);
  const current = isLocked(locksDir, missionId, closureRevision);
  if (!current.locked || current.owner_run_id !== runId) return { released: false };
  try {
    unlinkSync(path);
  } catch {
    // already gone -- releasing an already-released lock is not an error.
  }
  return { released: true };
}

function baseWorkItem(envelope, locksDir, fields) {
  const ownership = isLocked(locksDir, envelope.mission_id, envelope.closure_revision);
  return {
    schemaVersion: RECONCILIATION_SCHEMA_VERSION,
    mission_id: envelope.mission_id,
    closure_revision: envelope.closure_revision,
    active_ownership: ownership,
    ...fields,
  };
}

/**
 * Deterministically classifies exactly one already schema-valid closure
 * envelope. Every branch is a plain structural comparison over already
 * accepted fields -- no ranking, no scoring, no model judgment.
 */
export function classifyEnvelope(envelope, { repoRoot, receiptsDir, locksDir }) {
  if (!verifyCommitExists(repoRoot, envelope.source_snapshot_ref)) {
    return baseWorkItem(envelope, locksDir, {
      source_snapshot_ref: null,
      source_fingerprint: null,
      reconciliation_state: "INVALID_OR_UNSAFE",
      reason: "source_snapshot_ref commit not found",
      existing_receipt_processing_state: null,
      next_safe_action: "fix or re-pin source_snapshot_ref to a resolvable commit before retrying",
      retry_eligible: true,
      needs_human_reconciliation: false,
    });
  }

  const { fingerprint, rejectedRefs } = resolveManifestAndFingerprint(envelope, repoRoot);

  if (rejectedRefs.length > 0) {
    return baseWorkItem(envelope, locksDir, {
      source_snapshot_ref: envelope.source_snapshot_ref,
      source_fingerprint: null,
      reconciliation_state: "INVALID_OR_UNSAFE",
      reason: `${rejectedRefs.length} evidence reference(s) ineligible: ${rejectedRefs.join(", ")}`,
      existing_receipt_processing_state: null,
      next_safe_action: "correct or remove the ineligible evidence reference(s) before retrying",
      retry_eligible: true,
      needs_human_reconciliation: false,
    });
  }

  const { receipts: existingForMission, issues: receiptIssues } = listReceiptsForMission(
    receiptsDir,
    envelope.mission_id,
  );

  // S4A-F-02 correction: an unreadable, malformed, or schema-invalid
  // receipt for this mission must never be silently treated as if no
  // receipt existed. It must block every work-producing classification
  // below (ELIGIBLE_UNPROCESSED, NEW_CLOSURE_REVISION, and also the
  // reopen/supersede and already-processed/failed branches, all of which
  // reason from `existingForMission`) until the ambiguity is resolved.
  if (receiptIssues.length > 0) {
    const describedIssues = receiptIssues
      .map((issue) => `${issue.path} (${issue.condition})`)
      .join(", ");
    return baseWorkItem(envelope, locksDir, {
      source_snapshot_ref: envelope.source_snapshot_ref,
      source_fingerprint: fingerprint,
      reconciliation_state: "INVALID_OR_UNSAFE",
      reason: `durable receipt state for this mission is ambiguous -- ${receiptIssues.length} receipt file(s) are unreadable, malformed, or schema-invalid: ${describedIssues}`,
      existing_receipt_processing_state: null,
      next_safe_action:
        "repair or remove the flagged receipt file(s) in this mission's receipt directory, then retry reconciliation",
      retry_eligible: true,
      needs_human_reconciliation: true,
    });
  }

  const matchingReceipt =
    existingForMission.find((r) => r.source_fingerprint === fingerprint) ?? null;

  if (envelope.reopens || envelope.supersedes_closure) {
    const priorRevision = envelope.reopens ?? envelope.supersedes_closure;
    const flaggedPriorReceipts = existingForMission
      .filter((r) => r.closure_revision === priorRevision)
      .map((r) => r.receipt_id);
    const flaggedText =
      flaggedPriorReceipts.length > 0
        ? `; flagged prior receipt(s) for reconciliation: ${flaggedPriorReceipts.join(", ")}`
        : " (no prior receipt found on file for that revision)";
    return baseWorkItem(envelope, locksDir, {
      source_snapshot_ref: envelope.source_snapshot_ref,
      source_fingerprint: fingerprint,
      reconciliation_state: "SUPERSEDED_OR_REOPENED",
      reason: `this closure ${envelope.reopens ? "reopens" : "supersedes"} prior closure_revision "${priorRevision}"${flaggedText}`,
      existing_receipt_processing_state: matchingReceipt?.processing_state ?? null,
      next_safe_action:
        "human reconciliation required before any prior reusable learning for this mission is treated as current",
      retry_eligible: false,
      needs_human_reconciliation: true,
    });
  }

  if (matchingReceipt && isAlreadyProcessed(matchingReceipt)) {
    return baseWorkItem(envelope, locksDir, {
      source_snapshot_ref: envelope.source_snapshot_ref,
      source_fingerprint: fingerprint,
      reconciliation_state: "ALREADY_PROCESSED",
      reason: `receipt ${matchingReceipt.receipt_id} already reached SCREENED for this exact fingerprint`,
      existing_receipt_processing_state: matchingReceipt.processing_state,
      next_safe_action:
        "no-op: rerunning this exact closure revision would be a deterministic no-op",
      retry_eligible: false,
      needs_human_reconciliation: false,
    });
  }

  if (matchingReceipt && matchingReceipt.processing_state === "VALIDATION_FAILED") {
    return baseWorkItem(envelope, locksDir, {
      source_snapshot_ref: envelope.source_snapshot_ref,
      source_fingerprint: fingerprint,
      reconciliation_state: "FAILED_RETRYABLE",
      reason: `receipt ${matchingReceipt.receipt_id} previously reached VALIDATION_FAILED: ${matchingReceipt.failure_reason ?? "(no failure_reason recorded)"}`,
      existing_receipt_processing_state: matchingReceipt.processing_state,
      next_safe_action:
        "retry harvest for this exact closure revision -- a prior failure is retry-pending, never no-material-learning",
      retry_eligible: true,
      needs_human_reconciliation: false,
    });
  }

  const priorDifferentRevision =
    existingForMission.find((r) => r.closure_revision !== envelope.closure_revision) ?? null;
  if (priorDifferentRevision) {
    return baseWorkItem(envelope, locksDir, {
      source_snapshot_ref: envelope.source_snapshot_ref,
      source_fingerprint: fingerprint,
      reconciliation_state: "NEW_CLOSURE_REVISION",
      reason: `mission already has a receipt for a different closure_revision "${priorDifferentRevision.closure_revision}"; this is a distinct new processing revision`,
      existing_receipt_processing_state: priorDifferentRevision.processing_state,
      next_safe_action:
        "harvest as a new processing revision; the prior revision's receipt is preserved, not overwritten",
      retry_eligible: false,
      needs_human_reconciliation: false,
    });
  }

  return baseWorkItem(envelope, locksDir, {
    source_snapshot_ref: envelope.source_snapshot_ref,
    source_fingerprint: fingerprint,
    reconciliation_state: "ELIGIBLE_UNPROCESSED",
    reason: matchingReceipt
      ? `resuming from existing receipt state ${matchingReceipt.processing_state}`
      : "no existing receipt for this mission/fingerprint",
    existing_receipt_processing_state: matchingReceipt?.processing_state ?? null,
    next_safe_action: matchingReceipt
      ? `resume harvest from ${matchingReceipt.processing_state}`
      : "run harvest for this closure envelope",
    retry_eligible: false,
    needs_human_reconciliation: false,
  });
}

function processingIdentityKey(item) {
  return `${item.mission_id}::${item.closure_revision}`;
}

/**
 * S5-F-04 correction (communication/missions/SB-ORG-LEARNING-1.1/
 * mission-control/25-stage5-f01-f04-correction-authorization.md):
 * independent verification found that two distinct valid envelope files
 * claiming the same mission_id + closure_revision each produced their
 * own ELIGIBLE_UNPROCESSED work item -- path-string `Set` deduplication
 * in the CLI removes only identical path strings, not duplicate
 * processing identity, and the planner itself must not emit duplicate
 * harvest intent.
 *
 * Grouping and equivalence are decided over the already schema-valid
 * PARSED ENVELOPES themselves, before classification -- not over the
 * classification output -- by reusing `computeRevisionHash` (the exact
 * accepted key-sorted-canonical-JSON sha256 hash Stage 2/3 already use
 * for candidate/promotion revision binding, lib/revision-hash.ts). This
 * is deliberate: the classification/fingerprint algorithm only consumes
 * a subset of an envelope's fields (schemaVersion, closure_revision,
 * evidence manifest), so comparing classification output alone would
 * miss a material difference in a field classification does not itself
 * consume (e.g. `accepted_scope`, `final_disposition`) -- exactly the
 * "other validated closure semantics" Mission Control's finding names.
 * Comparing the full validated envelope content is the only way to
 * truthfully honor "material conflict... including... accepted scope...
 * or other validated closure semantics."
 *
 * For a group of one or more schema-valid envelopes sharing a
 * mission_id + closure_revision:
 *   - all identical canonical content hash -> classify and emit exactly
 *     one work item (input order cannot matter -- every member is
 *     content-indistinguishable from every other);
 *   - not all identical -> classify none of them and record one safe,
 *     deterministic conflict entry naming only the identity, never raw
 *     envelope content.
 */
function resolveEnvelopeIdentityGroups(parsedEnvelopes, classify) {
  const groups = new Map();
  for (const envelope of parsedEnvelopes) {
    const key = processingIdentityKey(envelope);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(envelope);
  }
  const workItems = [];
  const conflicts = [];
  for (const [key, envelopes] of groups) {
    const distinctHashes = new Set(envelopes.map((envelope) => computeRevisionHash(envelope)));
    if (distinctHashes.size === 1) {
      workItems.push(classify(envelopes[0]));
    } else {
      conflicts.push({
        source: key,
        reason: `${envelopes.length} valid envelope(s) claim mission_id + closure_revision "${key}" with materially conflicting validated closure semantics; failing closed rather than silently choosing one`,
      });
    }
  }
  return { workItems, conflicts };
}

/**
 * Pure aside from its filesystem/git reads: given the same envelope
 * files, receipts, and locks on disk, always produces the same ordered
 * plan. Discovery is structural only -- `envelopePaths` already excludes
 * anything that is not an explicit --envelope path or a .json file found
 * directly under an explicit --envelopes-dir.
 */
export function planReconciliation({ repoRoot, receiptsDir, locksDir, envelopePaths }) {
  const parsedEnvelopes = [];
  const rejectedInputs = [];

  for (const filePath of envelopePaths) {
    // S4A-F-01 correction: location approval is checked first, before the
    // file is ever opened. Schema validity and evidence allowlisting are
    // downstream questions this gate does not depend on and cannot be
    // bypassed by -- a schema-valid envelope outside the approved
    // closure-envelope location set is rejected here, unconditionally,
    // without its contents ever being read.
    if (!isApprovedClosureEnvelopeLocation(repoRoot, filePath)) {
      rejectedInputs.push({
        source: filePath,
        reason: "envelope location is not an approved closure-envelope location",
      });
      continue;
    }
    let raw;
    try {
      raw = readFileSync(filePath, "utf8");
    } catch {
      rejectedInputs.push({ source: filePath, reason: "could not read envelope file" });
      continue;
    }
    let parsedJson;
    try {
      parsedJson = JSON.parse(raw);
    } catch {
      // F-03 principle reused: never interpolate the raw parser error
      // text, which can echo a verbatim snippet of the offending bytes.
      rejectedInputs.push({ source: filePath, reason: "envelope file is not valid JSON" });
      continue;
    }
    const parsedEnvelope = ClosureEnvelopeSchema.safeParse(parsedJson);
    if (!parsedEnvelope.success) {
      rejectedInputs.push({ source: filePath, reason: "envelope failed schema validation" });
      continue;
    }
    parsedEnvelopes.push(parsedEnvelope.data);
  }

  // S5-F-04 correction: group and dedupe/conflict-check BEFORE
  // classification -- classification only ever runs for the single
  // representative of an equivalent group, never once per duplicate file.
  const { workItems, conflicts } = resolveEnvelopeIdentityGroups(parsedEnvelopes, (envelope) =>
    classifyEnvelope(envelope, { repoRoot, receiptsDir, locksDir }),
  );

  const orderedWorkItems = sortByStableKey(workItems, processingIdentityKey);
  const orderedRejected = sortByStableKey([...rejectedInputs, ...conflicts], (item) => item.source);

  return {
    schemaVersion: RECONCILIATION_SCHEMA_VERSION,
    authority_statement: "reconciliation plan, not execution authority",
    work_items: orderedWorkItems,
    rejected_inputs: orderedRejected,
  };
}

function parseArgs(argv) {
  const args = {
    repoRoot: null,
    receiptsDir: null,
    locksDir: null,
    outDir: null,
    envelopes: [],
    envelopesDir: null,
    runId: null,
    attemptLock: false,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--repo-root") args.repoRoot = argv[(i += 1)];
    else if (arg === "--receipts-dir") args.receiptsDir = argv[(i += 1)];
    else if (arg === "--locks-dir") args.locksDir = argv[(i += 1)];
    else if (arg === "--out-dir") args.outDir = argv[(i += 1)];
    else if (arg === "--envelope") args.envelopes.push(argv[(i += 1)]);
    else if (arg === "--envelopes-dir") args.envelopesDir = argv[(i += 1)];
    else if (arg === "--run-id") args.runId = argv[(i += 1)];
    else if (arg === "--attempt-lock") args.attemptLock = true;
  }
  return args;
}

function discoverRepoRoot() {
  return execFileSync("git", ["rev-parse", "--show-toplevel"], { encoding: "utf8" }).trim();
}

const LOCKABLE_STATES = new Set([
  "ELIGIBLE_UNPROCESSED",
  "NEW_CLOSURE_REVISION",
  "FAILED_RETRYABLE",
]);

export function runReconcile(argv) {
  const args = parseArgs(argv);
  if (args.envelopes.length === 0 && !args.envelopesDir) {
    return {
      exitCode: 1,
      message: "reconcile: at least one --envelope <path> or --envelopes-dir <path> is required",
    };
  }

  const repoRoot = args.repoRoot ?? discoverRepoRoot();
  const receiptsDir = args.receiptsDir ?? join(repoRoot, "organizational-learning", "receipts");
  const locksDir =
    args.locksDir ?? join(repoRoot, "organizational-learning", "reconciliation", "locks");
  const runId = args.runId ?? newRunId();

  const envelopePaths = [
    ...new Set([...args.envelopes, ...collectJsonFiles(args.envelopesDir ?? "")]),
  ].sort();

  const plan = planReconciliation({ repoRoot, receiptsDir, locksDir, envelopePaths });

  if (args.attemptLock) {
    for (const item of plan.work_items) {
      if (!LOCKABLE_STATES.has(item.reconciliation_state)) continue;
      const ownership = attemptReconciliationOwnership(
        locksDir,
        item.mission_id,
        item.closure_revision,
        runId,
      );
      // `active_ownership` already fully expresses the result: locked
      // true + owner_run_id === this run's id means this attempt just
      // acquired it; locked true + a different owner_run_id means this
      // attempt received the deterministic busy/non-owner result.
      item.active_ownership = { locked: true, owner_run_id: ownership.owner_run_id };
    }
  }

  const validatedPlan = ReconciliationPlanSchema.parse(plan);
  const rendered = `${JSON.stringify(validatedPlan, null, 2)}\n`;
  const screening = runScreeningSafely(runHeuristicScan, [
    { path: "reconciliation-plan.json", content: rendered },
  ]);
  if (screening.status !== "CLEAN") {
    return {
      exitCode: 1,
      message: `reconcile: generated plan failed screening (${screening.status}); refusing to write`,
    };
  }

  if (args.outDir) {
    mkdirSync(args.outDir, { recursive: true });
    writeFileSync(join(args.outDir, "reconciliation-plan.json"), rendered, "utf8");
  } else {
    process.stdout.write(rendered);
  }

  return {
    exitCode: 0,
    message: `reconcile: built -- work_items=${plan.work_items.length} rejected=${plan.rejected_inputs.length} run_id=${runId}`,
  };
}

function isMainModule() {
  const entryPoint = process.argv[1];
  if (typeof entryPoint !== "string" || entryPoint.length === 0) {
    return false;
  }
  return import.meta.url === pathToFileURL(entryPoint).href;
}

if (isMainModule()) {
  const { exitCode, message } = runReconcile(process.argv.slice(2));
  if (exitCode === 0) {
    console.log(message);
  } else {
    console.error(message);
  }
  process.exitCode = exitCode;
}
