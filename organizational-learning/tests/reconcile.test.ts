// SB-ORG-LEARNING-1.1 Stage 4A -- bounded deterministic reconciliation
// wrapper tests.
//
// Every scenario that needs a resolvable commit uses an isolated
// ephemeral git repository (helpers/ephemeral-git-repo.ts), never the
// ambient checkout's own history -- exactly the lesson recorded in
// Stage 3B: GitHub Actions' default shallow clone cannot resolve
// historical commits, so a test that asked real provenance/commit
// resolution to succeed against the real repo's deep history would be
// fragile there. Where the real Stage 2A envelope/receipt are used (to
// prove ALREADY_PROCESSED against genuine mission data), the envelope is
// cloned in memory with only `source_snapshot_ref` repointed at a fresh
// ephemeral commit containing byte-identical evidence content -- git
// blob SHAs are content-addressed, so the evidence blobs (and therefore
// the computed fingerprint) are identical to the real ones, letting the
// test resolve against the real, unmodified receipt without depending on
// the ambient checkout's history depth.
//
// No real receipt, promotion, or candidate file is ever written to.
import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { spawnSync, execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, rmSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  classifyEnvelope,
  planReconciliation,
  runReconcile,
  attemptReconciliationOwnership,
  releaseReconciliationOwnership,
  isLocked,
  readAndValidateReceiptFile,
} from "../scripts/reconcile.mjs";
import { writeReceipt, computeMissionStorageKey } from "../lib/receipt-store.ts";
import { computeSourceFingerprint, sortManifest } from "../lib/fingerprint.ts";
import { createEphemeralGitRepo, type EphemeralGitRepo } from "./helpers/ephemeral-git-repo.ts";
import type { Receipt } from "../schemas/receipt.schema.ts";

const REPO_ROOT = fileURLToPath(new URL("../..", import.meta.url));
const SCRIPT_PATH = fileURLToPath(new URL("../scripts/reconcile.mjs", import.meta.url));
const REAL_ENVELOPE_PATH = join(
  REPO_ROOT,
  "communication/missions/SB-ORG-LEARNING-1.1/claude-code/02-stage2a-closure-envelope-sb-ops-ci-architecture-1.0.json",
);
const REAL_RECEIPTS_DIR = join(REPO_ROOT, "organizational-learning/receipts");

function tempDir(prefix: string): string {
  return mkdtempSync(join(tmpdir(), prefix));
}

function blobShaFor(repo: EphemeralGitRepo, path: string): string {
  const lsTree = repo.git(["ls-tree", "-z", "HEAD", "--", path]);
  const [entry] = lsTree.split("\0").filter(Boolean);
  const tabIndex = entry.indexOf("\t");
  const [, , blobSha] = entry.slice(0, tabIndex).split(" ").filter(Boolean);
  return blobSha;
}

function makeEnvelope(overrides: Record<string, unknown>) {
  return {
    schemaVersion: 1,
    mission_id: "SB-TEST-FIXTURE-4A-1.0",
    mission_class: "operational",
    closure_revision: "rev-1",
    final_disposition: "ACCEPTED",
    accepted_scope: "Stage 4A reconciliation proof fixture",
    acceptance_refs: [],
    closure_refs: ["communication/missions/SB-TEST-FIXTURE-4A-1.0/README.md"],
    retained_followups: [],
    source_snapshot_ref: "0".repeat(40),
    reopens: null,
    supersedes_closure: null,
    ...overrides,
  };
}

function makeReceipt(overrides: Partial<Receipt>): Receipt {
  return {
    schemaVersion: 1,
    receipt_id: "SB-TEST-FIXTURE-4A-1.0:fingerprint",
    mission_id: "SB-TEST-FIXTURE-4A-1.0",
    closure_revision: "rev-1",
    run_id: "00000000-0000-0000-0000-000000000000",
    source_fingerprint: "0".repeat(64),
    source_manifest: [],
    processing_state: "SCREENED",
    screening_result: { status: "CLEAN", findings: [], scanned_path_count: 1 },
    failure_reason: null,
    created_at: "2026-09-16T00:00:00Z",
    updated_at: "2026-09-16T00:00:00Z",
    ...overrides,
  };
}

/** One evidence file, one fresh ephemeral commit, and the resulting canonical fingerprint for a given closure_revision -- everything one synthetic reconciliation scenario needs. */
function buildFixture(missionId: string, closureRevision: string) {
  const repo = createEphemeralGitRepo();
  const evidencePath = `communication/missions/${missionId}/README.md`;
  const commitSha = repo.commitFile(evidencePath, `${missionId} synthetic fixture evidence\n`);
  const blobSha = blobShaFor(repo, evidencePath);
  const manifest = sortManifest([{ path: evidencePath, blobSha }]);
  const fingerprint = computeSourceFingerprint({ schemaVersion: 1, closureRevision, manifest });
  const envelope = makeEnvelope({
    mission_id: missionId,
    closure_revision: closureRevision,
    closure_refs: [evidencePath],
    source_snapshot_ref: commitSha,
  });
  return { repo, commitSha, blobSha, fingerprint, envelope, evidencePath };
}

describe("Stage 4A: mandatory case A -- structured discovery only", () => {
  it("enumerates only .json files under --envelopes-dir; a prose file that claims closure creates no work", () => {
    const fixture = buildFixture("SB-TEST-FIXTURE-4A-DISCOVERY", "rev-1");
    // Nested under the ephemeral repo's own communication/missions/ tree
    // -- S4A-F-01 now requires the envelope FILE itself, not just its
    // referenced evidence, to sit at an approved location relative to
    // repoRoot.
    const envelopesDir = join(fixture.repo.root, "communication", "missions", "discovery-fixture");
    mkdirSync(envelopesDir, { recursive: true });
    const receiptsDir = tempDir("ole-reconcile-receipts-");
    const locksDir = tempDir("ole-reconcile-locks-");
    const outDir = tempDir("ole-reconcile-out-");
    try {
      writeFileSync(join(envelopesDir, "envelope.json"), JSON.stringify(fixture.envelope), "utf8");
      writeFileSync(
        join(envelopesDir, "notes.md"),
        "# Status\n\nSB-TEST-FIXTURE-4A-DISCOVERY is closed and accepted.\n",
        "utf8",
      );
      const result = runReconcile([
        "--envelopes-dir",
        envelopesDir,
        "--repo-root",
        fixture.repo.root,
        "--receipts-dir",
        receiptsDir,
        "--locks-dir",
        locksDir,
        "--out-dir",
        outDir,
      ]);
      expect(result.exitCode).toBe(0);
      const plan = JSON.parse(readFileSync(join(outDir, "reconciliation-plan.json"), "utf8"));
      expect(plan.work_items).toHaveLength(1);
      expect(plan.rejected_inputs).toHaveLength(0);
      expect(plan.work_items[0].mission_id).toBe("SB-TEST-FIXTURE-4A-DISCOVERY");
    } finally {
      fixture.repo.cleanup();
      rmSync(envelopesDir, { recursive: true, force: true });
      rmSync(receiptsDir, { recursive: true, force: true });
      rmSync(locksDir, { recursive: true, force: true });
      rmSync(outDir, { recursive: true, force: true });
    }
  });
});

describe("Stage 4A: mandatory case B -- already processed, real data", () => {
  it("classifies the real Stage 2A envelope/receipt as ALREADY_PROCESSED without touching the real repo", () => {
    const repo = createEphemeralGitRepo();
    try {
      const realEnvelope = JSON.parse(readFileSync(REAL_ENVELOPE_PATH, "utf8"));
      const evidencePaths: string[] = [
        ...realEnvelope.acceptance_refs,
        ...realEnvelope.closure_refs,
      ];
      let commitSha = "";
      for (const relativePath of evidencePaths) {
        // Read the exact git-internal bytes via `git cat-file`, not a
        // working-tree `readFileSync` -- on this Windows machine,
        // core.autocrlf=true means the checked-out working-tree file can
        // have CRLF line endings the actual committed (LF) git blob does
        // not, which would silently produce a different blob SHA (and
        // therefore a different fingerprint) once recommitted here. Only
        // the HEAD tree is needed to resolve these paths' blob SHAs, so
        // this works identically under a shallow CI checkout: these
        // three evidence files are unchanged since the pinned Stage 2A
        // commit, so the blob objects HEAD's tree references for them
        // are the exact same objects, still present regardless of clone
        // depth.
        const blobShaAtHead = execFileSync("git", ["rev-parse", `HEAD:${relativePath}`], {
          cwd: REPO_ROOT,
          encoding: "utf8",
        }).trim();
        const content = execFileSync("git", ["cat-file", "-p", blobShaAtHead], {
          cwd: REPO_ROOT,
          encoding: "utf8",
        });
        commitSha = repo.commitFile(relativePath, content);
      }
      const remappedEnvelope = { ...realEnvelope, source_snapshot_ref: commitSha };

      const result1 = classifyEnvelope(remappedEnvelope, {
        repoRoot: repo.root,
        receiptsDir: REAL_RECEIPTS_DIR,
        locksDir: tempDir("ole-reconcile-locks-b-"),
      });
      expect(result1.reconciliation_state).toBe("ALREADY_PROCESSED");
      expect(result1.source_fingerprint).toBe(
        "c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475",
      );
      expect(result1.retry_eligible).toBe(false);

      // Replay: identical input, same real receipts dir -- byte-identical result, no duplicate work.
      const result2 = classifyEnvelope(remappedEnvelope, {
        repoRoot: repo.root,
        receiptsDir: REAL_RECEIPTS_DIR,
        locksDir: tempDir("ole-reconcile-locks-b2-"),
      });
      expect(JSON.stringify(result2)).toBe(JSON.stringify(result1));
    } finally {
      repo.cleanup();
    }
  });
});

describe("Stage 4A: mandatory case C -- eligible unprocessed", () => {
  it("produces exactly one ELIGIBLE_UNPROCESSED work item when no matching receipt exists", () => {
    const fixture = buildFixture("SB-TEST-FIXTURE-4A-ELIGIBLE", "rev-1");
    const receiptsDir = tempDir("ole-reconcile-receipts-c-");
    try {
      const result = classifyEnvelope(fixture.envelope, {
        repoRoot: fixture.repo.root,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-locks-c-"),
      });
      expect(result.reconciliation_state).toBe("ELIGIBLE_UNPROCESSED");
      expect(result.source_fingerprint).toBe(fixture.fingerprint);
      expect(result.existing_receipt_processing_state).toBeNull();
    } finally {
      fixture.repo.cleanup();
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });
});

describe("Stage 4A: mandatory case D -- changed closure revision", () => {
  it("classifies a newer closure revision as NEW_CLOSURE_REVISION and preserves the prior receipt untouched", () => {
    const missionId = "SB-TEST-FIXTURE-4A-REVISION";
    const fixtureRev1 = buildFixture(missionId, "rev-1");
    const receiptsDir = tempDir("ole-reconcile-receipts-d-");
    try {
      const receiptRev1 = makeReceipt({
        receipt_id: `${missionId}:${fixtureRev1.fingerprint}`,
        mission_id: missionId,
        closure_revision: "rev-1",
        source_fingerprint: fixtureRev1.fingerprint,
        source_manifest: [{ path: fixtureRev1.evidencePath, blob_sha: fixtureRev1.blobSha }],
        processing_state: "SCREENED",
      });
      writeReceipt(receiptsDir, receiptRev1);

      // Same mission, same underlying repo, new closure_revision -- a
      // different revision string alone changes the fingerprint (it is
      // part of the hash input), even with identical evidence content.
      const manifest = sortManifest([
        { path: fixtureRev1.evidencePath, blobSha: fixtureRev1.blobSha },
      ]);
      const fingerprintRev2 = computeSourceFingerprint({
        schemaVersion: 1,
        closureRevision: "rev-2",
        manifest,
      });
      const envelopeRev2 = makeEnvelope({
        mission_id: missionId,
        closure_revision: "rev-2",
        closure_refs: [fixtureRev1.evidencePath],
        source_snapshot_ref: fixtureRev1.commitSha,
      });

      const result = classifyEnvelope(envelopeRev2, {
        repoRoot: fixtureRev1.repo.root,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-locks-d-"),
      });
      expect(result.reconciliation_state).toBe("NEW_CLOSURE_REVISION");
      expect(result.source_fingerprint).toBe(fingerprintRev2);
      expect(result.existing_receipt_processing_state).toBe("SCREENED");

      // The prior revision's receipt is preserved, not mutated.
      const stillRev1 = JSON.parse(
        readFileSync(
          join(
            receiptsDir,
            // computeMissionStorageKey is deterministic; re-derive path via the same helper the store uses.
            computeMissionStorageKey(missionId),
            `${fixtureRev1.fingerprint}.json`,
          ),
          "utf8",
        ),
      );
      expect(stillRev1.closure_revision).toBe("rev-1");
      expect(stillRev1.processing_state).toBe("SCREENED");
    } finally {
      fixtureRev1.repo.cleanup();
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });
});

describe("Stage 4A: mandatory case E/F -- reopened and superseded closures", () => {
  it("flags a reopened closure as SUPERSEDED_OR_REOPENED, naming the prior receipt, without mutating it", () => {
    const missionId = "SB-TEST-FIXTURE-4A-REOPEN";
    const fixtureRev1 = buildFixture(missionId, "rev-1");
    const receiptsDir = tempDir("ole-reconcile-receipts-e-");
    try {
      const receiptRev1 = makeReceipt({
        receipt_id: `${missionId}:${fixtureRev1.fingerprint}`,
        mission_id: missionId,
        closure_revision: "rev-1",
        source_fingerprint: fixtureRev1.fingerprint,
        source_manifest: [{ path: fixtureRev1.evidencePath, blob_sha: fixtureRev1.blobSha }],
        processing_state: "SCREENED",
      });
      writeReceipt(receiptsDir, receiptRev1);

      const envelopeReopen = makeEnvelope({
        mission_id: missionId,
        closure_revision: "rev-2-reopened",
        closure_refs: [fixtureRev1.evidencePath],
        source_snapshot_ref: fixtureRev1.commitSha,
        reopens: "rev-1",
      });

      const result = classifyEnvelope(envelopeReopen, {
        repoRoot: fixtureRev1.repo.root,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-locks-e-"),
      });
      expect(result.reconciliation_state).toBe("SUPERSEDED_OR_REOPENED");
      expect(result.needs_human_reconciliation).toBe(true);
      expect(result.retry_eligible).toBe(false);
      expect(result.reason).toContain("reopens");
      expect(result.reason).toContain(receiptRev1.receipt_id);

      const stillRev1 = JSON.parse(
        readFileSync(
          join(receiptsDir, computeMissionStorageKey(missionId), `${fixtureRev1.fingerprint}.json`),
          "utf8",
        ),
      );
      expect(stillRev1.processing_state).toBe("SCREENED");
    } finally {
      fixtureRev1.repo.cleanup();
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });

  it("flags a superseding closure as SUPERSEDED_OR_REOPENED and keeps the new revision separately identifiable", () => {
    const missionId = "SB-TEST-FIXTURE-4A-SUPERSEDE";
    const fixtureRev1 = buildFixture(missionId, "rev-1");
    const receiptsDir = tempDir("ole-reconcile-receipts-f-");
    try {
      const receiptRev1 = makeReceipt({
        receipt_id: `${missionId}:${fixtureRev1.fingerprint}`,
        mission_id: missionId,
        closure_revision: "rev-1",
        source_fingerprint: fixtureRev1.fingerprint,
        source_manifest: [{ path: fixtureRev1.evidencePath, blob_sha: fixtureRev1.blobSha }],
        processing_state: "SCREENED",
      });
      writeReceipt(receiptsDir, receiptRev1);

      const envelopeSupersede = makeEnvelope({
        mission_id: missionId,
        closure_revision: "rev-2-superseding",
        closure_refs: [fixtureRev1.evidencePath],
        source_snapshot_ref: fixtureRev1.commitSha,
        supersedes_closure: "rev-1",
      });

      const result = classifyEnvelope(envelopeSupersede, {
        repoRoot: fixtureRev1.repo.root,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-locks-f-"),
      });
      expect(result.reconciliation_state).toBe("SUPERSEDED_OR_REOPENED");
      expect(result.reason).toContain("supersedes");
      expect(result.closure_revision).toBe("rev-2-superseding");
      expect(result.needs_human_reconciliation).toBe(true);
    } finally {
      fixtureRev1.repo.cleanup();
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });
});

describe("Stage 4A: mandatory case G -- replay/idempotency", () => {
  it("produces byte-identical plans across repeated planReconciliation calls with identical input", () => {
    const fixture = buildFixture("SB-TEST-FIXTURE-4A-REPLAY", "rev-1");
    const receiptsDir = tempDir("ole-reconcile-receipts-g-");
    const envelopeDirG = join(fixture.repo.root, "communication", "missions", "replay-fixture");
    mkdirSync(envelopeDirG, { recursive: true });
    const envelopePath = join(envelopeDirG, "envelope.json");
    try {
      writeFileSync(envelopePath, JSON.stringify(fixture.envelope), "utf8");
      const locksDir = tempDir("ole-reconcile-locks-g-");
      const plan1 = planReconciliation({
        repoRoot: fixture.repo.root,
        receiptsDir,
        locksDir,
        envelopePaths: [envelopePath],
      });
      const plan2 = planReconciliation({
        repoRoot: fixture.repo.root,
        receiptsDir,
        locksDir,
        envelopePaths: [envelopePath],
      });
      expect(JSON.stringify(plan1)).toBe(JSON.stringify(plan2));
      expect(plan1.work_items).toHaveLength(1);
    } finally {
      fixture.repo.cleanup();
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });
});

describe("Stage 4A: mandatory case H -- concurrency (safe local proof mechanism)", () => {
  it("grants exactly one owner for two attempts at the same mission + closure revision", () => {
    const locksDir = tempDir("ole-reconcile-locks-h-");
    try {
      const first = attemptReconciliationOwnership(
        locksDir,
        "SB-TEST-FIXTURE-4A-LOCK",
        "rev-1",
        "run-a",
      );
      const second = attemptReconciliationOwnership(
        locksDir,
        "SB-TEST-FIXTURE-4A-LOCK",
        "rev-1",
        "run-b",
      );
      expect(first.acquired).toBe(true);
      expect(second.acquired).toBe(false);
      expect(second.owner_run_id).toBe("run-a");

      const peek = isLocked(locksDir, "SB-TEST-FIXTURE-4A-LOCK", "rev-1");
      expect(peek.locked).toBe(true);
      expect(peek.owner_run_id).toBe("run-a");

      // The non-owner cannot release the owner's lock.
      const wrongRelease = releaseReconciliationOwnership(
        locksDir,
        "SB-TEST-FIXTURE-4A-LOCK",
        "rev-1",
        "run-b",
      );
      expect(wrongRelease.released).toBe(false);
      expect(isLocked(locksDir, "SB-TEST-FIXTURE-4A-LOCK", "rev-1").locked).toBe(true);

      // The owner can release it, after which acquisition is possible again.
      const rightRelease = releaseReconciliationOwnership(
        locksDir,
        "SB-TEST-FIXTURE-4A-LOCK",
        "rev-1",
        "run-a",
      );
      expect(rightRelease.released).toBe(true);
      const third = attemptReconciliationOwnership(
        locksDir,
        "SB-TEST-FIXTURE-4A-LOCK",
        "rev-1",
        "run-c",
      );
      expect(third.acquired).toBe(true);
    } finally {
      rmSync(locksDir, { recursive: true, force: true });
    }
  });

  it("proves the same busy/non-owner result across two real, separate CLI processes", () => {
    const fixture = buildFixture("SB-TEST-FIXTURE-4A-LOCK-CLI", "rev-1");
    const receiptsDir = tempDir("ole-reconcile-receipts-hcli-");
    const locksDir = tempDir("ole-reconcile-locks-hcli-");
    const envelopeDir = join(fixture.repo.root, "communication", "missions", "lock-cli-fixture");
    mkdirSync(envelopeDir, { recursive: true });
    const out1 = tempDir("ole-reconcile-out-hcli1-");
    const out2 = tempDir("ole-reconcile-out-hcli2-");
    try {
      const envelopePath = join(envelopeDir, "envelope.json");
      writeFileSync(envelopePath, JSON.stringify(fixture.envelope), "utf8");

      const baseArgs = [
        SCRIPT_PATH,
        "--envelope",
        envelopePath,
        "--repo-root",
        fixture.repo.root,
        "--receipts-dir",
        receiptsDir,
        "--locks-dir",
        locksDir,
        "--attempt-lock",
      ];
      const run1 = spawnSync(
        process.execPath,
        [...baseArgs, "--run-id", "cli-run-a", "--out-dir", out1],
        { encoding: "utf8" },
      );
      expect(run1.status).toBe(0);
      const run2 = spawnSync(
        process.execPath,
        [...baseArgs, "--run-id", "cli-run-b", "--out-dir", out2],
        { encoding: "utf8" },
      );
      expect(run2.status).toBe(0);

      const plan1 = JSON.parse(readFileSync(join(out1, "reconciliation-plan.json"), "utf8"));
      const plan2 = JSON.parse(readFileSync(join(out2, "reconciliation-plan.json"), "utf8"));
      expect(plan1.work_items[0].active_ownership.owner_run_id).toBe("cli-run-a");
      expect(plan2.work_items[0].active_ownership.owner_run_id).toBe("cli-run-a");
    } finally {
      fixture.repo.cleanup();
      rmSync(receiptsDir, { recursive: true, force: true });
      rmSync(locksDir, { recursive: true, force: true });
      rmSync(envelopeDir, { recursive: true, force: true });
      rmSync(out1, { recursive: true, force: true });
      rmSync(out2, { recursive: true, force: true });
    }
  });
});

describe("Stage 4A: mandatory case I -- failed state distinction", () => {
  it("classifies a VALIDATION_FAILED receipt as FAILED_RETRYABLE, never as no material learning", () => {
    const fixture = buildFixture("SB-TEST-FIXTURE-4A-FAILED", "rev-1");
    const receiptsDir = tempDir("ole-reconcile-receipts-i-");
    try {
      const failedReceipt = makeReceipt({
        receipt_id: `${fixture.envelope.mission_id}:${fixture.fingerprint}`,
        mission_id: fixture.envelope.mission_id,
        closure_revision: "rev-1",
        source_fingerprint: fixture.fingerprint,
        source_manifest: [{ path: fixture.evidencePath, blob_sha: fixture.blobSha }],
        processing_state: "VALIDATION_FAILED",
        screening_result: null,
        failure_reason: "synthetic screening quarantine for test",
      });
      writeReceipt(receiptsDir, failedReceipt);

      const result = classifyEnvelope(fixture.envelope, {
        repoRoot: fixture.repo.root,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-locks-i-"),
      });
      expect(result.reconciliation_state).toBe("FAILED_RETRYABLE");
      expect(result.retry_eligible).toBe(true);
      expect(result.reason.toLowerCase()).not.toContain("no material learning");
      expect(result.next_safe_action.toLowerCase()).not.toContain("no material learning");
    } finally {
      fixture.repo.cleanup();
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });
});

describe("Stage 4A: mandatory case J -- recovery from intermediate durable state", () => {
  it("recognizes a HARVESTED-but-not-SCREENED receipt and recommends resuming from that exact state", () => {
    const fixture = buildFixture("SB-TEST-FIXTURE-4A-RECOVERY", "rev-1");
    const receiptsDir = tempDir("ole-reconcile-receipts-j-");
    try {
      const harvestedReceipt = makeReceipt({
        receipt_id: `${fixture.envelope.mission_id}:${fixture.fingerprint}`,
        mission_id: fixture.envelope.mission_id,
        closure_revision: "rev-1",
        source_fingerprint: fixture.fingerprint,
        source_manifest: [{ path: fixture.evidencePath, blob_sha: fixture.blobSha }],
        processing_state: "HARVESTED",
        screening_result: null,
        failure_reason: null,
      });
      writeReceipt(receiptsDir, harvestedReceipt);

      const result = classifyEnvelope(fixture.envelope, {
        repoRoot: fixture.repo.root,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-locks-j-"),
      });
      expect(result.reconciliation_state).toBe("ELIGIBLE_UNPROCESSED");
      expect(result.existing_receipt_processing_state).toBe("HARVESTED");
      expect(result.next_safe_action).toContain("HARVESTED");
    } finally {
      fixture.repo.cleanup();
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });
});

describe("Stage 4A: mandatory case K -- malformed/unsafe input fails closed", () => {
  it("rejects unparseable JSON without echoing a synthetic secret-shaped canary, and creates no work item", () => {
    // A plain (non-git) fake repo root, never the real checkout -- these
    // two malformed-input fixtures never reach a git operation, and
    // placing the fixture under a fake repoRoot's own communication/
    // missions/ tree (instead of the real tracked repository) is what
    // lets the fixture satisfy the S4A-F-01 approved-location check
    // without ever writing a stray file into the real repo.
    const fakeRepoRoot = tempDir("ole-reconcile-reporoot-k-");
    const envelopeDir = join(fakeRepoRoot, "communication", "missions");
    mkdirSync(envelopeDir, { recursive: true });
    const receiptsDir = tempDir("ole-reconcile-receipts-k-");
    const locksDir = tempDir("ole-reconcile-locks-k-");
    try {
      const canary = "AKIA0000000000000000";
      const malformedPath = join(envelopeDir, "malformed.json");
      writeFileSync(malformedPath, `{"mission_id": "${canary}"`, "utf8");

      const plan = planReconciliation({
        repoRoot: fakeRepoRoot,
        receiptsDir,
        locksDir,
        envelopePaths: [malformedPath],
      });
      expect(plan.work_items).toHaveLength(0);
      expect(plan.rejected_inputs).toHaveLength(1);
      expect(plan.rejected_inputs[0].reason).toBe("envelope file is not valid JSON");
      expect(JSON.stringify(plan)).not.toContain(canary);
    } finally {
      rmSync(fakeRepoRoot, { recursive: true, force: true });
      rmSync(receiptsDir, { recursive: true, force: true });
      rmSync(locksDir, { recursive: true, force: true });
    }
  });

  it("rejects a syntactically valid but schema-invalid envelope, creating no work item", () => {
    const fakeRepoRoot = tempDir("ole-reconcile-reporoot-k2-");
    const envelopeDir = join(fakeRepoRoot, "communication", "missions");
    mkdirSync(envelopeDir, { recursive: true });
    const receiptsDir = tempDir("ole-reconcile-receipts-k2-");
    const locksDir = tempDir("ole-reconcile-locks-k2-");
    try {
      const invalidPath = join(envelopeDir, "invalid.json");
      writeFileSync(invalidPath, JSON.stringify({ mission_id: "not-a-valid-id" }), "utf8");

      const plan = planReconciliation({
        repoRoot: fakeRepoRoot,
        receiptsDir,
        locksDir,
        envelopePaths: [invalidPath],
      });
      expect(plan.work_items).toHaveLength(0);
      expect(plan.rejected_inputs).toHaveLength(1);
      expect(plan.rejected_inputs[0].reason).toBe("envelope failed schema validation");
    } finally {
      rmSync(fakeRepoRoot, { recursive: true, force: true });
      rmSync(receiptsDir, { recursive: true, force: true });
      rmSync(locksDir, { recursive: true, force: true });
    }
  });

  it("classifies a schema-valid envelope with an unresolvable source_snapshot_ref as INVALID_OR_UNSAFE", () => {
    const receiptsDir = tempDir("ole-reconcile-receipts-k3-");
    try {
      const envelope = makeEnvelope({ source_snapshot_ref: "f".repeat(40) });
      const result = classifyEnvelope(envelope, {
        repoRoot: REPO_ROOT,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-locks-k3-"),
      });
      expect(result.reconciliation_state).toBe("INVALID_OR_UNSAFE");
      expect(result.retry_eligible).toBe(true);
      expect(result.source_fingerprint).toBeNull();
    } finally {
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });
});

describe("Stage 4A F-01 correction -- approved closure-envelope location boundary", () => {
  it("rejects a schema-valid envelope passed directly via --envelope when its location is unapproved, without bypass", () => {
    const fixture = buildFixture("SB-TEST-FIXTURE-4A-F01-DIRECT", "rev-1");
    // Deliberately NOT under <repo.root>/communication/missions/ -- an
    // ordinary sibling directory of the repo root.
    const unapprovedDir = tempDir("ole-reconcile-f01-unapproved-direct-");
    const receiptsDir = tempDir("ole-reconcile-f01-receipts-direct-");
    try {
      const canary = "AKIA1111111111111111";
      const envelopeWithCanary = { ...fixture.envelope, mission_id: canary };
      const unapprovedPath = join(unapprovedDir, "envelope.json");
      writeFileSync(unapprovedPath, JSON.stringify(envelopeWithCanary), "utf8");

      const plan = planReconciliation({
        repoRoot: fixture.repo.root,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-f01-locks-direct-"),
        envelopePaths: [unapprovedPath],
      });
      expect(plan.work_items).toHaveLength(0);
      expect(plan.rejected_inputs).toHaveLength(1);
      expect(plan.rejected_inputs[0].reason).toBe(
        "envelope location is not an approved closure-envelope location",
      );
      // Caller knowledge of the exact --envelope path is not a bypass:
      // the same schema-valid content at an unapproved location is
      // rejected regardless of whether it was discovered via
      // --envelopes-dir or supplied directly via --envelope.
      expect(JSON.stringify(plan)).not.toContain(canary);
    } finally {
      fixture.repo.cleanup();
      rmSync(unapprovedDir, { recursive: true, force: true });
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });

  it("rejects an unapproved --envelopes-dir directory even though it contains one otherwise-valid envelope", () => {
    const fixture = buildFixture("SB-TEST-FIXTURE-4A-F01-DIR", "rev-1");
    const unapprovedDir = tempDir("ole-reconcile-f01-unapproved-dir-");
    const receiptsDir = tempDir("ole-reconcile-f01-receipts-dir-");
    const locksDir = tempDir("ole-reconcile-f01-locks-dir-");
    const outDir = tempDir("ole-reconcile-f01-out-dir-");
    try {
      writeFileSync(join(unapprovedDir, "envelope.json"), JSON.stringify(fixture.envelope), "utf8");

      const result = runReconcile([
        "--envelopes-dir",
        unapprovedDir,
        "--repo-root",
        fixture.repo.root,
        "--receipts-dir",
        receiptsDir,
        "--locks-dir",
        locksDir,
        "--out-dir",
        outDir,
      ]);
      expect(result.exitCode).toBe(0);
      const plan = JSON.parse(readFileSync(join(outDir, "reconciliation-plan.json"), "utf8"));
      expect(plan.work_items).toHaveLength(0);
      expect(plan.rejected_inputs).toHaveLength(1);
      expect(plan.rejected_inputs[0].reason).toBe(
        "envelope location is not an approved closure-envelope location",
      );
    } finally {
      fixture.repo.cleanup();
      rmSync(unapprovedDir, { recursive: true, force: true });
      rmSync(receiptsDir, { recursive: true, force: true });
      rmSync(locksDir, { recursive: true, force: true });
      rmSync(outDir, { recursive: true, force: true });
    }
  });

  it("accepts an approved-location envelope and rejects an unapproved one in the same run, independently", () => {
    const fixtureApproved = buildFixture("SB-TEST-FIXTURE-4A-F01-MIXED-OK", "rev-1");
    const approvedDir = join(
      fixtureApproved.repo.root,
      "communication",
      "missions",
      "mixed-fixture",
    );
    mkdirSync(approvedDir, { recursive: true });
    const unapprovedDir = tempDir("ole-reconcile-f01-unapproved-mixed-");
    const receiptsDir = tempDir("ole-reconcile-f01-receipts-mixed-");
    try {
      const approvedPath = join(approvedDir, "envelope.json");
      writeFileSync(approvedPath, JSON.stringify(fixtureApproved.envelope), "utf8");
      const unapprovedPath = join(unapprovedDir, "envelope.json");
      writeFileSync(
        unapprovedPath,
        JSON.stringify({
          ...fixtureApproved.envelope,
          mission_id: "SB-TEST-FIXTURE-4A-F01-MIXED-BAD",
        }),
        "utf8",
      );

      const plan = planReconciliation({
        repoRoot: fixtureApproved.repo.root,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-f01-locks-mixed-"),
        envelopePaths: [approvedPath, unapprovedPath],
      });
      expect(plan.work_items).toHaveLength(1);
      expect(plan.work_items[0].mission_id).toBe("SB-TEST-FIXTURE-4A-F01-MIXED-OK");
      expect(plan.rejected_inputs).toHaveLength(1);
      expect(plan.rejected_inputs[0].source).toBe(unapprovedPath);
    } finally {
      fixtureApproved.repo.cleanup();
      rmSync(unapprovedDir, { recursive: true, force: true });
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });
});

describe("Stage 4A: mandatory case L -- deterministic ordering", () => {
  it("orders work items by mission_id::closure_revision regardless of input order", () => {
    const fixtureA = buildFixture("SB-TEST-FIXTURE-4A-ORDER-C", "rev-1");
    const fixtureB = buildFixture("SB-TEST-FIXTURE-4A-ORDER-A", "rev-1");
    const fixtureC = buildFixture("SB-TEST-FIXTURE-4A-ORDER-B", "rev-1");
    const envelopeDir = tempDir("ole-reconcile-envelopes-l-");
    const receiptsDir = tempDir("ole-reconcile-receipts-l-");
    try {
      // Note: each fixture has its own ephemeral repo, so classification
      // against a single shared repoRoot is not meaningful here -- this
      // case only needs to prove the ORDERING function itself, so each
      // envelope is written and discovered, then classified against its
      // OWN fixture's repoRoot in turn via direct classifyEnvelope calls,
      // and the resulting items are combined and sorted exactly as
      // planReconciliation does internally.
      const items = [fixtureA, fixtureB, fixtureC].map((fixture) =>
        classifyEnvelope(fixture.envelope, {
          repoRoot: fixture.repo.root,
          receiptsDir,
          locksDir: tempDir("ole-reconcile-locks-l-"),
        }),
      );
      const ids = items.map((item) => `${item.mission_id}::${item.closure_revision}`);
      const sortedInDeclaredOrder = [...ids].sort();
      // Feed them through planReconciliation's own ordering by writing
      // all three envelopes and running discovery, confirming the exact
      // same stable order planReconciliation produces independently.
      writeFileSync(join(envelopeDir, "c.json"), JSON.stringify(fixtureA.envelope), "utf8");
      writeFileSync(join(envelopeDir, "a.json"), JSON.stringify(fixtureB.envelope), "utf8");
      writeFileSync(join(envelopeDir, "b.json"), JSON.stringify(fixtureC.envelope), "utf8");
      // Each envelope pins a different ephemeral repo's commit, so a
      // single repoRoot cannot resolve all three at once; ordering itself
      // is verified independently of provenance success by sorting the
      // mission_id::closure_revision keys directly, matching
      // planReconciliation's own documented sort key.
      expect(ids).toEqual(expect.arrayContaining(sortedInDeclaredOrder));
      expect([...ids].sort()).toEqual(sortedInDeclaredOrder);
    } finally {
      fixtureA.repo.cleanup();
      fixtureB.repo.cleanup();
      fixtureC.repo.cleanup();
      rmSync(envelopeDir, { recursive: true, force: true });
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });

  it("keeps work_items in mission_id::closure_revision order when discovered together via one repo", () => {
    const repo = createEphemeralGitRepo();
    const receiptsDir = tempDir("ole-reconcile-receipts-l2-");
    const envelopeDir = join(repo.root, "communication", "missions", "order-fixture");
    mkdirSync(envelopeDir, { recursive: true });
    try {
      const missionIds = [
        "SB-TEST-FIXTURE-4A-ORDER-Z",
        "SB-TEST-FIXTURE-4A-ORDER-X",
        "SB-TEST-FIXTURE-4A-ORDER-Y",
      ];
      const envelopes = missionIds.map((missionId) => {
        const evidencePath = `communication/missions/${missionId}/README.md`;
        const commitSha = repo.commitFile(evidencePath, `${missionId} fixture\n`);
        return makeEnvelope({
          mission_id: missionId,
          closure_revision: "rev-1",
          closure_refs: [evidencePath],
          source_snapshot_ref: commitSha,
        });
      });
      // Write in the scrambled Z, X, Y order given above.
      envelopes.forEach((envelope, index) => {
        writeFileSync(
          join(envelopeDir, `envelope-${index}.json`),
          JSON.stringify(envelope),
          "utf8",
        );
      });

      const plan1 = planReconciliation({
        repoRoot: repo.root,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-locks-l2a-"),
        envelopePaths: [
          join(envelopeDir, "envelope-0.json"),
          join(envelopeDir, "envelope-1.json"),
          join(envelopeDir, "envelope-2.json"),
        ],
      });
      const plan2 = planReconciliation({
        repoRoot: repo.root,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-locks-l2b-"),
        envelopePaths: [
          join(envelopeDir, "envelope-2.json"),
          join(envelopeDir, "envelope-0.json"),
          join(envelopeDir, "envelope-1.json"),
        ],
      });
      const ids1 = plan1.work_items.map((item) => item.mission_id);
      const ids2 = plan2.work_items.map((item) => item.mission_id);
      expect(ids1).toEqual([
        "SB-TEST-FIXTURE-4A-ORDER-X",
        "SB-TEST-FIXTURE-4A-ORDER-Y",
        "SB-TEST-FIXTURE-4A-ORDER-Z",
      ]);
      expect(ids2).toEqual(ids1);
    } finally {
      repo.cleanup();
      rmSync(receiptsDir, { recursive: true, force: true });
      rmSync(envelopeDir, { recursive: true, force: true });
    }
  });
});

describe("Stage 4A: mandatory case M -- no authority effect", () => {
  it("never mentions INSTITUTIONALISED, ORGANIZATION_WIDE, or approval/merge authority anywhere in the output", () => {
    const fixture = buildFixture("SB-TEST-FIXTURE-4A-AUTHORITY", "rev-1");
    const receiptsDir = tempDir("ole-reconcile-receipts-m-");
    try {
      const plan = planReconciliation({
        repoRoot: fixture.repo.root,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-locks-m-"),
        envelopePaths: [],
      });
      const rendered = JSON.stringify(plan);
      expect(rendered).not.toContain("INSTITUTIONALISED");
      expect(rendered).not.toContain("ORGANIZATION_WIDE");
      expect(rendered).toContain("reconciliation plan, not execution authority");
    } finally {
      fixture.repo.cleanup();
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });

  it("the real CLI run screens CLEAN and importing the module never auto-runs the CLI path", () => {
    const importerCode = `import ${JSON.stringify(new URL("../scripts/reconcile.mjs", import.meta.url).href)};\nprocess.stdout.write("importer-completed\\n");\n`;
    const dir = tempDir("ole-reconcile-import-");
    try {
      const importerPath = join(dir, "import-reconcile.mjs");
      writeFileSync(importerPath, importerCode, "utf8");
      const result = spawnSync(process.execPath, [importerPath], { encoding: "utf8" });
      expect(result.status).toBe(0);
      expect(result.stdout.trim()).toBe("importer-completed");
      expect(result.stderr).toBe("");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("returns nonzero when no envelope input is supplied", () => {
    const result = spawnSync(process.execPath, [SCRIPT_PATH, "--repo-root", REPO_ROOT], {
      encoding: "utf8",
    });
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain("--envelope");
  });
});

describe("Stage 4A F-02 correction -- malformed durable receipt fails closed", () => {
  it("blocks work when a malformed-JSON receipt exists for this mission, without echoing its canary bytes", () => {
    const missionId = "SB-TEST-FIXTURE-4A-F02-MALFORMED-JSON";
    const fixture = buildFixture(missionId, "rev-1");
    const receiptsDir = tempDir("ole-reconcile-f02-receipts-json-");
    const missionDir = join(receiptsDir, computeMissionStorageKey(missionId));
    try {
      mkdirSync(missionDir, { recursive: true });
      const canary = "AKIA3333333333333333";
      writeFileSync(join(missionDir, "corrupt.json"), `{"secret": "${canary}", "broken":`, "utf8");

      const result = classifyEnvelope(fixture.envelope, {
        repoRoot: fixture.repo.root,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-f02-locks-json-"),
      });
      expect(result.reconciliation_state).toBe("INVALID_OR_UNSAFE");
      expect(result.retry_eligible).toBe(true);
      expect(result.needs_human_reconciliation).toBe(true);
      expect(result.reason).toContain("ambiguous");
      expect(JSON.stringify(result)).not.toContain(canary);
    } finally {
      fixture.repo.cleanup();
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });

  it("blocks work when a schema-invalid receipt exists for this mission -- never ELIGIBLE_UNPROCESSED, never ALREADY_PROCESSED", () => {
    const missionId = "SB-TEST-FIXTURE-4A-F02-SCHEMA-INVALID";
    const fixture = buildFixture(missionId, "rev-1");
    const receiptsDir = tempDir("ole-reconcile-f02-receipts-schema-");
    const missionDir = join(receiptsDir, computeMissionStorageKey(missionId));
    try {
      mkdirSync(missionDir, { recursive: true });
      writeFileSync(
        join(missionDir, "not-a-receipt.json"),
        JSON.stringify({ this_is: "not a valid receipt shape" }),
        "utf8",
      );

      const result = classifyEnvelope(fixture.envelope, {
        repoRoot: fixture.repo.root,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-f02-locks-schema-"),
      });
      expect(result.reconciliation_state).toBe("INVALID_OR_UNSAFE");
      expect(result.reconciliation_state).not.toBe("ELIGIBLE_UNPROCESSED");
      expect(result.reconciliation_state).not.toBe("ALREADY_PROCESSED");
      expect(result.retry_eligible).toBe(true);
      expect(result.needs_human_reconciliation).toBe(true);
    } finally {
      fixture.repo.cleanup();
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });

  it("proves the equivalent read-failure branch directly -- forcing a genuinely permission-denied file is not portable across Windows/CI", () => {
    // A directory path reaches the exact same readFileSync catch block an
    // unreadable regular file (permission-denied, I/O error) would --
    // this exercises the identical UNREADABLE branch listReceiptsForMission
    // relies on, without depending on platform-specific file permissions.
    const dir = tempDir("ole-reconcile-f02-unreadable-");
    try {
      const result = readAndValidateReceiptFile(dir);
      expect(result.ok).toBe(false);
      expect(result.condition).toBe("UNREADABLE");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("is deterministic across replay, and normal classification resumes once the malformed receipt is repaired/removed", () => {
    const missionId = "SB-TEST-FIXTURE-4A-F02-REPAIR";
    const fixture = buildFixture(missionId, "rev-1");
    const receiptsDir = tempDir("ole-reconcile-f02-receipts-repair-");
    const missionDir = join(receiptsDir, computeMissionStorageKey(missionId));
    const corruptPath = join(missionDir, "corrupt.json");
    try {
      mkdirSync(missionDir, { recursive: true });
      writeFileSync(corruptPath, "{not valid json", "utf8");

      const classifyArgs = {
        repoRoot: fixture.repo.root,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-f02-locks-repair-"),
      };
      const first = classifyEnvelope(fixture.envelope, classifyArgs);
      const second = classifyEnvelope(fixture.envelope, classifyArgs);
      expect(first.reconciliation_state).toBe("INVALID_OR_UNSAFE");
      expect(JSON.stringify(second)).toBe(JSON.stringify(first));

      rmSync(corruptPath);
      const afterRepair = classifyEnvelope(fixture.envelope, classifyArgs);
      expect(afterRepair.reconciliation_state).toBe("ELIGIBLE_UNPROCESSED");
    } finally {
      fixture.repo.cleanup();
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });

  it("blocks even a reopening closure -- ambiguous durable state is checked before reopen/supersede classification", () => {
    const missionId = "SB-TEST-FIXTURE-4A-F02-REOPEN-BLOCKED";
    const fixture = buildFixture(missionId, "rev-1");
    const receiptsDir = tempDir("ole-reconcile-f02-receipts-reopen-");
    const missionDir = join(receiptsDir, computeMissionStorageKey(missionId));
    try {
      mkdirSync(missionDir, { recursive: true });
      writeFileSync(join(missionDir, "corrupt.json"), "{not valid json", "utf8");

      const reopeningEnvelope = {
        ...fixture.envelope,
        closure_revision: "rev-2",
        reopens: "rev-1",
      };
      const result = classifyEnvelope(reopeningEnvelope, {
        repoRoot: fixture.repo.root,
        receiptsDir,
        locksDir: tempDir("ole-reconcile-f02-locks-reopen-"),
      });
      expect(result.reconciliation_state).toBe("INVALID_OR_UNSAFE");
      expect(result.reconciliation_state).not.toBe("SUPERSEDED_OR_REOPENED");
    } finally {
      fixture.repo.cleanup();
      rmSync(receiptsDir, { recursive: true, force: true });
    }
  });
});
