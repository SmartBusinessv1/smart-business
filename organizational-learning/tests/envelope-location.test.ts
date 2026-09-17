// SB-ORG-LEARNING-1.1 Stage 4A F-01 correction -- approved closure-envelope
// location boundary tests. Pure path-string checks: no git operation, no
// file read, so these never depend on the ambient checkout's clone depth.
import { describe, it, expect } from "vitest";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  isApprovedClosureEnvelopeLocation,
  APPROVED_CLOSURE_ENVELOPE_ROOTS,
} from "../sources/envelope-location.ts";

const REPO_ROOT = fileURLToPath(new URL("../..", import.meta.url));
const REAL_ENVELOPE_PATH = join(
  REPO_ROOT,
  "communication/missions/SB-ORG-LEARNING-1.1/claude-code/02-stage2a-closure-envelope-sb-ops-ci-architecture-1.0.json",
);

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
