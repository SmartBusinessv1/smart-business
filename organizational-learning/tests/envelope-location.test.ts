// SB-ORG-LEARNING-1.1 Stage 4A F-01 / Stage 5 S5-F-03 correction --
// approved closure-envelope location boundary tests.
//
// The lexical-only checks below never read file content and never depend
// on the ambient checkout's clone depth (no git operation). The S5-F-03
// physical-containment tests do perform real filesystem stat/realpath
// calls (never content reads) against isolated temp fixtures containing
// an actual planted junction/symlink -- never against the real repo.
import { describe, it, expect } from "vitest";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync, symlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import {
  isApprovedClosureEnvelopeLocation,
  APPROVED_CLOSURE_ENVELOPE_ROOTS,
} from "../sources/envelope-location.ts";

const REPO_ROOT = fileURLToPath(new URL("../..", import.meta.url));
const REAL_ENVELOPE_PATH = join(
  REPO_ROOT,
  "communication/missions/SB-ORG-LEARNING-1.1/claude-code/02-stage2a-closure-envelope-sb-ops-ci-architecture-1.0.json",
);

function tempDir(prefix: string): string {
  return mkdtempSync(join(tmpdir(), prefix));
}

/** Same proven helper pattern as receipt-store.test.ts / reconcile.test.ts. */
function plantDirectoryIndirection(linkPath: string, target: string): void {
  mkdirSync(dirname(linkPath), { recursive: true });
  mkdirSync(target, { recursive: true });
  symlinkSync(target, linkPath, process.platform === "win32" ? "junction" : "dir");
}

describe("APPROVED_CLOSURE_ENVELOPE_ROOTS", () => {
  it("is exactly the minimal explicit root, not derived from the evidence allowlist", () => {
    expect(APPROVED_CLOSURE_ENVELOPE_ROOTS).toEqual(["communication/missions/"]);
  });
});

describe("isApprovedClosureEnvelopeLocation", () => {
  it("mandatory proof 1: the real approved Stage 2A closure envelope's location is approved", () => {
    expect(isApprovedClosureEnvelopeLocation(REPO_ROOT, REAL_ENVELOPE_PATH)).toBe(true);
  });

  it("mandatory proof 2: a byte-for-byte equivalent path outside the approved root is rejected", () => {
    const unapprovedPath = join(REPO_ROOT, "organizational-learning", "02-stage2a-copy.json");
    expect(isApprovedClosureEnvelopeLocation(REPO_ROOT, unapprovedPath)).toBe(false);
  });

  it("rejects a path entirely outside repoRoot", () => {
    const outsidePath = join(REPO_ROOT, "..", "communication", "missions", "x", "envelope.json");
    expect(isApprovedClosureEnvelopeLocation(REPO_ROOT, outsidePath)).toBe(false);
  });

  it("rejects a prefix look-alike that is not actually under the approved root", () => {
    const decoyPath = join(REPO_ROOT, "communication", "missions-decoy", "envelope.json");
    expect(isApprovedClosureEnvelopeLocation(REPO_ROOT, decoyPath)).toBe(false);
  });

  it("is case-sensitive, so an ambiguous-case alias fails closed", () => {
    const aliasPath = join(REPO_ROOT, "Communication", "Missions", "x", "envelope.json");
    expect(isApprovedClosureEnvelopeLocation(REPO_ROOT, aliasPath)).toBe(false);
  });

  it("does not infer approval from a .json extension alone", () => {
    const rootLevelJson = join(REPO_ROOT, "envelope.json");
    expect(isApprovedClosureEnvelopeLocation(REPO_ROOT, rootLevelJson)).toBe(false);
  });

  it("never reads file content -- an approved path that does not exist on disk is still evaluated purely structurally", () => {
    const nonExistent = join(
      REPO_ROOT,
      "communication",
      "missions",
      "SB-DOES-NOT-EXIST",
      "envelope.json",
    );
    expect(isApprovedClosureEnvelopeLocation(REPO_ROOT, nonExistent)).toBe(true);
  });
});

describe("isApprovedClosureEnvelopeLocation -- S5-F-03 physical containment", () => {
  it("rejects a lexically approved path whose physical location, via a junction, escapes the approved root", () => {
    const repoRoot = tempDir("ole-envelope-location-f03-repo-");
    const outsideDir = tempDir("ole-envelope-location-f03-outside-");
    const linkPath = join(repoRoot, "communication", "missions", "linked");
    try {
      plantDirectoryIndirection(linkPath, outsideDir);
      writeFileSync(join(outsideDir, "envelope.json"), "{}", "utf8");
      const envelopePath = join(linkPath, "envelope.json");

      // The lexical predicate alone would say true (this is exactly the
      // independently reproduced S5-F-03 bypass); the combined check must
      // say false.
      expect(isApprovedClosureEnvelopeLocation(repoRoot, envelopePath)).toBe(false);
    } finally {
      rmSync(repoRoot, { recursive: true, force: true });
      rmSync(outsideDir, { recursive: true, force: true });
    }
  });

  it("accepts a genuine, non-indirected approved-location path in an isolated fixture (no over-rejection)", () => {
    const repoRoot = tempDir("ole-envelope-location-f03-genuine-");
    const envelopeDir = join(repoRoot, "communication", "missions", "genuine");
    try {
      mkdirSync(envelopeDir, { recursive: true });
      const envelopePath = join(envelopeDir, "envelope.json");
      writeFileSync(envelopePath, "{}", "utf8");
      expect(isApprovedClosureEnvelopeLocation(repoRoot, envelopePath)).toBe(true);
    } finally {
      rmSync(repoRoot, { recursive: true, force: true });
    }
  });
});
