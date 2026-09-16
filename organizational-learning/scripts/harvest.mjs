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
import { pathToFileURL } from "node:url";

import { ClosureEnvelopeSchema, envelopeEvidenceRefs } from "../schemas/closure-envelope.schema.ts";
import { RECEIPT_SCHEMA_VERSION } from "../schemas/receipt.schema.ts";
import { isAllowlistedSourcePath } from "../sources/allowlist.ts";
import {
  resolveBlobAtPath,
  readBlobContent,
  verifyCommitExists,
} from "../lib/git-object-reader.ts";
import { computeSourceFingerprint, sortManifest } from "../lib/fingerprint.ts";
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

  // F-03 correction: read and parse are two separate failure modes with
  // two separate safe, fixed diagnostics. A read failure (e.g. ENOENT)
  // may safely echo the path the caller supplied -- that is the
  // caller's own input, not file content. A JSON parse failure must
  // never interpolate the raw parser error message: V8's JSON.parse
  // error text can include a verbatim snippet of the offending input
  // bytes, which would defeat the screening boundary before it even
  // runs. See lib/screening.ts for the equivalent no-raw-content
  // principle applied to scanned evidence.
  let envelopeText;
  try {
    envelopeText = readFileSync(resolve(args.envelope), "utf8");
  } catch {
    return {
      exitCode: 1,
      message: `harvest: could not read envelope file: ${args.envelope}`,
    };
  }

  let rawEnvelope;
  try {
    rawEnvelope = JSON.parse(envelopeText);
  } catch {
    return {
      exitCode: 1,
      message: "harvest: envelope file is not valid JSON",
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

  // F-02 correction: one canonical sorted manifest, reused for both the
  // fingerprint input and every persisted receipt (HARVESTED, SCREENED,
  // and VALIDATION_FAILED with a partial/resolved manifest) -- not a
  // second, separately-sorted copy only computed inside
  // computeSourceFingerprint. Equivalent evidence supplied in a
  // different acceptance/closure reference order must persist
  // identically, not merely hash identically.
  const canonicalManifest = sortManifest(manifest);

  const fingerprint = computeSourceFingerprint({
    schemaVersion: envelope.schemaVersion,
    closureRevision: envelope.closure_revision,
    manifest: canonicalManifest,
  });

  if (rejectedRefs.length > 0) {
    writeFailureReceipt({
      receiptsDir,
      missionId: envelope.mission_id,
      closureRevision: envelope.closure_revision,
      sourceFingerprint: fingerprint,
      manifest: canonicalManifest,
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
    source_manifest: canonicalManifest.map((entry) => ({
      path: entry.path,
      blob_sha: entry.blobSha,
    })),
    processing_state: "HARVESTED",
    screening_result: null,
    failure_reason: null,
    created_at: existing?.created_at ?? startTimestamp,
    updated_at: startTimestamp,
  });

  const files = canonicalManifest.map((entry) => ({
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
    source_manifest: canonicalManifest.map((entry) => ({
      path: entry.path,
      blob_sha: entry.blobSha,
    })),
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
    message: `harvest: SCREENED -- mission=${envelope.mission_id} fingerprint=${fingerprint} evidence=${canonicalManifest.length} receipt=${receiptFilePath(receiptsDir, envelope.mission_id, fingerprint)}`,
  };
}

// F-04 correction (communication/missions/SB-ORG-LEARNING-1.1/
// mission-control/10-stage1-f04-correction-authorization.md): the
// previous comparison built a file URL by string-prefixing
// `process.argv[1]` with "file://". On Windows, `process.argv[1]` is a
// native path (backslashes, no leading slash, e.g.
// "C:\path\harvest.mjs"), which does not equal `import.meta.url`'s
// canonical file URL form (e.g. "file:///C:/path/harvest.mjs") under
// that naive prefixing -- so the comparison was always false on
// Windows, and the guarded CLI block below silently never ran, leaving
// Node's default exit status 0 even for invalid input. `pathToFileURL`
// is Node's standard, platform-correct way to turn an argv path into
// the same canonical file URL form `import.meta.url` already uses;
// verified empirically on this exact Windows environment (both that
// the old comparison is false and the new one is true for direct
// execution, and that it correctly stays false when the module is only
// imported) before being written into the fix.
function isMainModule() {
  return import.meta.url === pathToFileURL(process.argv[1]).href;
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
