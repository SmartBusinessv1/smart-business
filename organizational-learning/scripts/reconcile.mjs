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
//   - isAllowlistedSourcePath, resolveBlobAtPath, verifyCommitExists
//     (the identical evidence-resolution path harvest.mjs uses, reused
//     read-only here -- no screening, no receipt write, no extraction);
//   - sortManifest / computeSourceFingerprint (identical fingerprint
//     algorithm, so a reconciled fingerprint always matches what
//     harvest.mjs would actually produce for the same envelope);
//   - computeMissionStorageKey / resolveContainedPath / isAlreadyProcessed
//     / newRunId (the existing receipt-store identity/containment
//     primitives, reused to read -- never rewrite -- durable processing
//     state).
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
} from "node:fs";
import { join, dirname } from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { createHash } from "node:crypto";

import { ClosureEnvelopeSchema, envelopeEvidenceRefs } from "../schemas/closure-envelope.schema.ts";
import { ReceiptSchema } from "../schemas/receipt.schema.ts";
import { ReconciliationPlanSchema } from "../schemas/reconciliation.schema.ts";
import { isAllowlistedSourcePath } from "../sources/allowlist.ts";
import { resolveBlobAtPath, verifyCommitExists } from "../lib/git-object-reader.ts";
import { computeSourceFingerprint, sortManifest } from "../lib/fingerprint.ts";
import {
  computeMissionStorageKey,
  resolveContainedPath,
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

function collectJsonFiles(dir) {
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
      results.push(...collectJsonFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      results.push(fullPath);
    }
  }
  return results;
}

/**
 * Reads every schema-valid receipt already on file for `missionId`,
 * skipping (never throwing on) a missing mission directory or a corrupt
 * individual receipt file -- reconciliation must stay deterministic and
 * available even if one unrelated receipt file is damaged.
 */
function listReceiptsForMission(receiptsDir, missionId) {
  const key = computeMissionStorageKey(missionId);
  const missionDir = resolveContainedPath(receiptsDir, key);
  let entries;
  try {
    entries = readdirSync(missionDir, { withFileTypes: true });
  } catch {
    return [];
  }
  const receipts = [];
  const sorted = [...entries].sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
  for (const entry of sorted) {
    if (!entry.isFile() || !entry.name.endsWith(".json")) continue;
    let raw;
    try {
      raw = JSON.parse(readFileSync(join(missionDir, entry.name), "utf8"));
    } catch {
      continue;
    }
    const parsed = ReceiptSchema.safeParse(raw);
    if (parsed.success) receipts.push(parsed.data);
  }
  return receipts;
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

  const existingForMission = listReceiptsForMission(receiptsDir, envelope.mission_id);
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

/**
 * Pure aside from its filesystem/git reads: given the same envelope
 * files, receipts, and locks on disk, always produces the same ordered
 * plan. Discovery is structural only -- `envelopePaths` already excludes
 * anything that is not an explicit --envelope path or a .json file found
 * directly under an explicit --envelopes-dir.
 */
export function planReconciliation({ repoRoot, receiptsDir, locksDir, envelopePaths }) {
  const workItems = [];
  const rejectedInputs = [];

  for (const filePath of envelopePaths) {
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
    workItems.push(classifyEnvelope(parsedEnvelope.data, { repoRoot, receiptsDir, locksDir }));
  }

  const orderedWorkItems = sortByStableKey(
    workItems,
    (item) => `${item.mission_id}::${item.closure_revision}`,
  );
  const orderedRejected = sortByStableKey(rejectedInputs, (item) => item.source);

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
