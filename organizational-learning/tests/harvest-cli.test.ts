// SB-ORG-LEARNING-1.1 Stage 1 -- harvester CLI integration tests.
//
// End-to-end against isolated, throwaway git repositories and temp
// directories only -- never the real Smart Business repository, and
// never the real SB-OPS-CI-ARCHITECTURE-1.0 proof target (Stage 1 is
// explicitly not authorized to process it).
import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync, writeFileSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { runHarvest } from "../scripts/harvest.mjs";
import { readReceiptIfExists } from "../lib/receipt-store.ts";
import { createEphemeralGitRepo, type EphemeralGitRepo } from "./helpers/ephemeral-git-repo.ts";

let repo: EphemeralGitRepo | null = null;
let workDir: string | null = null;

afterEach(() => {
  repo?.cleanup();
  if (workDir) rmSync(workDir, { recursive: true, force: true });
  repo = null;
  workDir = null;
});

function writeEnvelope(envelope: Record<string, unknown>): string {
  workDir = workDir ?? mkdtempSync(join(tmpdir(), "ole-harvest-cli-test-"));
  const envelopePath = join(workDir, "envelope.json");
  writeFileSync(envelopePath, JSON.stringify(envelope), "utf8");
  return envelopePath;
}

function receiptsDirFor(): string {
  workDir = workDir ?? mkdtempSync(join(tmpdir(), "ole-harvest-cli-test-"));
  return join(workDir, "receipts");
}

function baseEnvelope(commit: string, overrides: Record<string, unknown> = {}) {
  return {
    schemaVersion: 1,
    mission_id: "SB-TEST-FIXTURE-1.0",
    mission_class: "operational",
    closure_revision: "REV-1",
    final_disposition: "ACCEPTED",
    accepted_scope: "test fixture",
    acceptance_refs: [],
    closure_refs: ["communication/missions/SB-TEST-FIXTURE-1.0/README.md"],
    retained_followups: [],
    source_snapshot_ref: commit,
    reopens: null,
    supersedes_closure: null,
    ...overrides,
  };
}

describe("runHarvest", () => {
  it("succeeds end-to-end for a clean, eligible, allowlisted evidence reference", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile(
      "communication/missions/SB-TEST-FIXTURE-1.0/README.md",
      "This mission closed cleanly. No secrets here.\n",
    );
    const envelopePath = writeEnvelope(baseEnvelope(commit));
    const receiptsDir = receiptsDirFor();

    const result = runHarvest([
      "--envelope",
      envelopePath,
      "--repo-root",
      repo.root,
      "--receipts-dir",
      receiptsDir,
    ]);

    expect(result.exitCode).toBe(0);
    expect(result.message).toContain("SCREENED");

    const receipt = readReceiptIfExists(
      receiptsDir,
      "SB-TEST-FIXTURE-1.0",
      extractFingerprint(result.message),
    );
    expect(receipt?.processing_state).toBe("SCREENED");
    expect(receipt?.screening_result?.status).toBe("CLEAN");
    expect(receipt?.source_manifest).toHaveLength(1);
  });

  it("is idempotent -- a second run against the same envelope is a no-op", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile(
      "communication/missions/SB-TEST-FIXTURE-1.0/README.md",
      "clean content\n",
    );
    const envelopePath = writeEnvelope(baseEnvelope(commit));
    const receiptsDir = receiptsDirFor();
    const args = [
      "--envelope",
      envelopePath,
      "--repo-root",
      repo.root,
      "--receipts-dir",
      receiptsDir,
    ];

    const first = runHarvest(args);
    expect(first.exitCode).toBe(0);
    const second = runHarvest(args);
    expect(second.exitCode).toBe(0);
    expect(second.message).toContain("already processed");
  });

  it("fails closed when a referenced evidence path is under communication/live/**", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile("communication/live/instruction.md", "current instruction\n");
    const envelopePath = writeEnvelope(
      baseEnvelope(commit, { closure_refs: ["communication/live/instruction.md"] }),
    );
    const receiptsDir = receiptsDirFor();

    const result = runHarvest([
      "--envelope",
      envelopePath,
      "--repo-root",
      repo.root,
      "--receipts-dir",
      receiptsDir,
    ]);

    expect(result.exitCode).toBe(1);
    expect(result.message).toContain("ineligible");
  });

  it("fails closed when a referenced evidence path does not exist at the pinned commit", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile("communication/missions/SB-TEST-FIXTURE-1.0/README.md", "x\n");
    const envelopePath = writeEnvelope(
      baseEnvelope(commit, {
        closure_refs: ["communication/missions/SB-TEST-FIXTURE-1.0/does-not-exist.md"],
      }),
    );
    const receiptsDir = receiptsDirFor();

    const result = runHarvest([
      "--envelope",
      envelopePath,
      "--repo-root",
      repo.root,
      "--receipts-dir",
      receiptsDir,
    ]);

    expect(result.exitCode).toBe(1);
    expect(result.message).toContain("ineligible");
  });

  it("fails closed when a referenced evidence path is a symlink", () => {
    repo = createEphemeralGitRepo();
    repo.commitFile("communication/missions/SB-TEST-FIXTURE-1.0/README.md", "x\n");
    const commit = repo.addSymlinkEntry(
      "communication/missions/SB-TEST-FIXTURE-1.0/link.md",
      "README.md",
    );
    const envelopePath = writeEnvelope(
      baseEnvelope(commit, {
        closure_refs: ["communication/missions/SB-TEST-FIXTURE-1.0/link.md"],
      }),
    );
    const receiptsDir = receiptsDirFor();

    const result = runHarvest([
      "--envelope",
      envelopePath,
      "--repo-root",
      repo.root,
      "--receipts-dir",
      receiptsDir,
    ]);

    expect(result.exitCode).toBe(1);
    expect(result.message).toContain("ineligible");
  });

  it("fails closed and never echoes raw content when screening quarantines evidence", () => {
    repo = createEphemeralGitRepo();
    const secret = "key=AKIAABCDEFGHIJKLMNOP";
    const commit = repo.commitFile(
      "communication/missions/SB-TEST-FIXTURE-1.0/README.md",
      `Some notes.\n${secret}\n`,
    );
    const envelopePath = writeEnvelope(baseEnvelope(commit));
    const receiptsDir = receiptsDirFor();

    const result = runHarvest([
      "--envelope",
      envelopePath,
      "--repo-root",
      repo.root,
      "--receipts-dir",
      receiptsDir,
    ]);

    expect(result.exitCode).toBe(1);
    expect(result.message).not.toContain(secret);

    // The screening-failure message intentionally does not carry a
    // fingerprint=... substring (there is nothing safe to summarize
    // beyond "did not come back clean"), so locate the written receipt
    // by directory listing instead of by parsing the message.
    const fingerprint = extractFingerprintFromReceiptsDir(receiptsDir, "SB-TEST-FIXTURE-1.0");
    const receipt = readReceiptIfExists(receiptsDir, "SB-TEST-FIXTURE-1.0", fingerprint);
    expect(receipt?.processing_state).toBe("VALIDATION_FAILED");
    expect(receipt?.screening_result?.status).toBe("QUARANTINED");
    expect(JSON.stringify(receipt)).not.toContain(secret);
  });

  it("fails closed when the closure envelope itself is schema-invalid", () => {
    workDir = mkdtempSync(join(tmpdir(), "ole-harvest-cli-test-"));
    const envelopePath = join(workDir, "envelope.json");
    writeFileSync(envelopePath, JSON.stringify({ mission_id: "SB-TEST-FIXTURE-1.0" }), "utf8");
    repo = createEphemeralGitRepo();
    repo.commitFile("a.md", "x\n");
    const receiptsDir = receiptsDirFor();

    const result = runHarvest([
      "--envelope",
      envelopePath,
      "--repo-root",
      repo.root,
      "--receipts-dir",
      receiptsDir,
    ]);

    expect(result.exitCode).toBe(1);
    expect(result.message).toContain("schema validation");

    const receipt = readReceiptIfExists(
      receiptsDir,
      "SB-TEST-FIXTURE-1.0",
      extractFingerprintFromReceiptsDir(receiptsDir, "SB-TEST-FIXTURE-1.0"),
    );
    expect(receipt?.processing_state).toBe("VALIDATION_FAILED");
  });

  it("fails closed when source_snapshot_ref does not resolve to a real commit", () => {
    repo = createEphemeralGitRepo();
    repo.commitFile("communication/missions/SB-TEST-FIXTURE-1.0/README.md", "x\n");
    const envelopePath = writeEnvelope(baseEnvelope("deadbeefdeadbeefdeadbeefdeadbeefdeadbeef"));
    const receiptsDir = receiptsDirFor();

    const result = runHarvest([
      "--envelope",
      envelopePath,
      "--repo-root",
      repo.root,
      "--receipts-dir",
      receiptsDir,
    ]);

    expect(result.exitCode).toBe(1);
    expect(result.message).toContain("not found");
  });

  it("requires --envelope", () => {
    const result = runHarvest([]);
    expect(result.exitCode).toBe(1);
    expect(result.message).toContain("--envelope");
  });
});

function extractFingerprint(message: string, allowMissing = false): string {
  const match = message.match(/fingerprint=([0-9a-f]{64})/);
  if (!match) {
    if (allowMissing) return "";
    throw new Error(`could not find fingerprint in message: ${message}`);
  }
  return match[1];
}

function extractFingerprintFromReceiptsDir(receiptsDir: string, missionId: string): string {
  // Best-effort helper for the schema-invalid case, where the message
  // does not carry a fingerprint: read the one receipt file that must
  // have been written under this mission id.
  const files = readdirSync(join(receiptsDir, missionId));
  if (files.length !== 1)
    throw new Error(`expected exactly one receipt file, found ${files.length}`);
  return files[0].replace(/\.json$/, "");
}
