#!/usr/bin/env node
// SB-ORG-LEARNING-1.1 Stage 1 -- Deterministic evidence harvester.
//
// Phase B foundation only: accepts an explicitly supplied closure
// envelope, verifies the pinned commit, resolves closure-linked evidence
// through the source allowlist and committed-Git-object reader, screens
// it, and writes a deterministic receipt. It performs no semantic
// extraction, no promotion, and no write outside its own receipts
// directory -- there is no code path here that opens a PR, commits, or
// calls an external service.
//
// All-or-nothing evidence resolution by design: if any referenced path
// is not allowlisted or does not resolve to a regular file at the pinned
// commit, the whole run fails closed (VALIDATION_FAILED) rather than
// silently proceeding on a partial evidence set -- an authoritative
// closure record that names evidence the harvester cannot actually read
// is a discrepancy worth surfacing, not something to quietly work around.
//
// Usage:
//   node organizational-learning/scripts/harvest.mjs --envelope <path.json> \
//     [--repo-root <path>] [--receipts-dir <path>]

import { readFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { execFileSync } from "node:child_process";

import { ClosureEnvelopeSchema, envelopeEvidenceRefs } from "../schemas/closure-envelope.schema.ts";
import { RECEIPT_SCHEMA_VERSION } from "../schemas/receipt.schema.ts";
import { isAllowlistedSourcePath } from "../sources/allowlist.ts";
import {
  resolveBlobAtPath,
  readBlobContent,
  verifyCommitExists,
} from "../lib/git-object-reader.ts";
import { computeSourceFingerprint } from "../lib/fingerprint.ts";
import { runHeuristicScan, runScreeningSafely } from "../lib/screening.ts";
import {
  computeReceiptId,
  receiptFilePath,
  readReceiptIfExists,
  isAlreadyProcessed,
  writeReceipt,
  newRunId,
} from "../lib/receipt-store.ts";

function parseArgs(argv) {
  const args = { envelope: null, repoRoot: null, receiptsDir: null };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--envelope") args.envelope = argv[(i += 1)];
    else if (arg === "--repo-root") args.repoRoot = argv[(i += 1)];
    else if (arg === "--receipts-dir") args.receiptsDir = argv[(i += 1)];
  }
  return args;
}

function discoverRepoRoot() {
  return execFileSync("git", ["rev-parse", "--show-toplevel"], { encoding: "utf8" }).trim();
}

function nowIso() {
  return new Date().toISOString();
}

function describeScreeningFailure(result) {
  if (result.status === "QUARANTINED") {
    return `screening quarantined ${result.findings.length} path(s): ${result.findings
      .map((finding) => `${finding.path} [${finding.rule_id}]`)
      .join(", ")}`;
  }
  if (result.status === "SCANNER_FAILED") return "scanner execution failed -- treated as unsafe";
  return "scanner returned an unrecognized/unknown result -- treated as unsafe";
}

function writeFailureReceipt({
  receiptsDir,
  missionId,
  closureRevision,
  sourceFingerprint,
  manifest,
  failureReason,
}) {
  const timestamp = nowIso();
  const existing = readReceiptIfExists(receiptsDir, missionId, sourceFingerprint);
  writeReceipt(receiptsDir, {
    schemaVersion: RECEIPT_SCHEMA_VERSION,
    receipt_id: computeReceiptId(missionId, sourceFingerprint),
    mission_id: missionId,
    closure_revision: closureRevision,
    run_id: newRunId(),
    source_fingerprint: sourceFingerprint,
    source_manifest: manifest.map((entry) => ({ path: entry.path, blob_sha: entry.blobSha })),
    processing_state: "VALIDATION_FAILED",
    screening_result: null,
    failure_reason: failureReason,
    created_at: existing?.created_at ?? timestamp,
    updated_at: timestamp,
  });
  return existing;
}

export function runHarvest(argv) {
  const args = parseArgs(argv);
  if (!args.envelope) {
    return { exitCode: 1, message: "harvest: --envelope <path> is required" };
  }

  const repoRoot = args.repoRoot ?? discoverRepoRoot();
  const receiptsDir = args.receiptsDir ?? join(repoRoot, "organizational-learning", "receipts");

  let rawEnvelope;
  try {
    rawEnvelope = JSON.parse(readFileSync(resolve(args.envelope), "utf8"));
  } catch (error) {
    return {
      exitCode: 1,
      message: `harvest: could not read/parse envelope file: ${error.message}`,
    };
  }

  const parsedEnvelope = ClosureEnvelopeSchema.safeParse(rawEnvelope);
  const fallbackMissionId =
    rawEnvelope && typeof rawEnvelope.mission_id === "string"
      ? rawEnvelope.mission_id
      : "UNKNOWN-MISSION";
  const fallbackClosureRevision =
    rawEnvelope && typeof rawEnvelope.closure_revision === "string"
      ? rawEnvelope.closure_revision
      : "UNKNOWN-REVISION";

  if (!parsedEnvelope.success) {
    const fingerprint = computeSourceFingerprint({
      schemaVersion: 1,
      closureRevision: fallbackClosureRevision,
      manifest: [],
    });
    const issues = parsedEnvelope.error.issues
      .map((issue) => `${issue.path.join(".") || "(root)"}: ${issue.message}`)
      .join("; ");
    writeFailureReceipt({
      receiptsDir,
      missionId: fallbackMissionId,
      closureRevision: fallbackClosureRevision,
      sourceFingerprint: fingerprint,
      manifest: [],
      failureReason: `closure envelope failed schema validation: ${issues}`,
    });
    return {
      exitCode: 1,
      message: "harvest: closure envelope failed schema validation (see receipt for detail)",
    };
  }

  const envelope = parsedEnvelope.data;

  if (!verifyCommitExists(repoRoot, envelope.source_snapshot_ref)) {
    const fingerprint = computeSourceFingerprint({
      schemaVersion: envelope.schemaVersion,
      closureRevision: envelope.closure_revision,
      manifest: [],
    });
    writeFailureReceipt({
      receiptsDir,
      missionId: envelope.mission_id,
      closureRevision: envelope.closure_revision,
      sourceFingerprint: fingerprint,
      manifest: [],
      failureReason: `source_snapshot_ref ${envelope.source_snapshot_ref} is not a resolvable commit in this repository`,
    });
    return { exitCode: 1, message: "harvest: source_snapshot_ref commit not found" };
  }

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

  const fingerprint = computeSourceFingerprint({
    schemaVersion: envelope.schemaVersion,
    closureRevision: envelope.closure_revision,
    manifest,
  });

  if (rejectedRefs.length > 0) {
    writeFailureReceipt({
      receiptsDir,
      missionId: envelope.mission_id,
      closureRevision: envelope.closure_revision,
      sourceFingerprint: fingerprint,
      manifest,
      failureReason: `${rejectedRefs.length} evidence reference(s) were ineligible: ${rejectedRefs.join(", ")}`,
    });
    return {
      exitCode: 1,
      message: "harvest: one or more evidence references were ineligible (see receipt for detail)",
    };
  }

  const existing = readReceiptIfExists(receiptsDir, envelope.mission_id, fingerprint);
  if (existing && isAlreadyProcessed(existing)) {
    return {
      exitCode: 0,
      message: `harvest: already processed -- mission=${envelope.mission_id} fingerprint=${fingerprint} receipt=${receiptFilePath(receiptsDir, envelope.mission_id, fingerprint)}`,
    };
  }

  const runId = newRunId();
  const startTimestamp = nowIso();

  // Persist progress before screening, so a crash mid-screen leaves a
  // recoverable HARVESTED receipt rather than nothing at all (B7 recovery).
  writeReceipt(receiptsDir, {
    schemaVersion: RECEIPT_SCHEMA_VERSION,
    receipt_id: computeReceiptId(envelope.mission_id, fingerprint),
    mission_id: envelope.mission_id,
    closure_revision: envelope.closure_revision,
    run_id: runId,
    source_fingerprint: fingerprint,
    source_manifest: manifest.map((entry) => ({ path: entry.path, blob_sha: entry.blobSha })),
    processing_state: "HARVESTED",
    screening_result: null,
    failure_reason: null,
    created_at: existing?.created_at ?? startTimestamp,
    updated_at: startTimestamp,
  });

  const files = manifest.map((entry) => ({
    path: entry.path,
    content: readBlobContent(repoRoot, entry.blobSha),
  }));
  const screeningResult = runScreeningSafely(runHeuristicScan, files);
  const isClean = screeningResult.status === "CLEAN";

  writeReceipt(receiptsDir, {
    schemaVersion: RECEIPT_SCHEMA_VERSION,
    receipt_id: computeReceiptId(envelope.mission_id, fingerprint),
    mission_id: envelope.mission_id,
    closure_revision: envelope.closure_revision,
    run_id: runId,
    source_fingerprint: fingerprint,
    source_manifest: manifest.map((entry) => ({ path: entry.path, blob_sha: entry.blobSha })),
    processing_state: isClean ? "SCREENED" : "VALIDATION_FAILED",
    screening_result: screeningResult,
    failure_reason: isClean ? null : describeScreeningFailure(screeningResult),
    created_at: existing?.created_at ?? startTimestamp,
    updated_at: nowIso(),
  });

  if (!isClean) {
    return {
      exitCode: 1,
      message: `harvest: screening did not come back clean (${screeningResult.status}); see receipt`,
    };
  }

  return {
    exitCode: 0,
    message: `harvest: SCREENED -- mission=${envelope.mission_id} fingerprint=${fingerprint} evidence=${manifest.length} receipt=${receiptFilePath(receiptsDir, envelope.mission_id, fingerprint)}`,
  };
}

function isMainModule() {
  return import.meta.url === `file://${process.argv[1]}`;
}

if (isMainModule()) {
  const { exitCode, message } = runHarvest(process.argv.slice(2));
  if (exitCode === 0) {
    console.log(message);
  } else {
    console.error(message);
  }
  process.exitCode = exitCode;
}
