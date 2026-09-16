// SB-ORG-LEARNING-1.1 Stage 1 -- claim-level provenance contract tests.
import { describe, it, expect } from "vitest";
import {
  EvidenceReferenceSchema,
  isSameUnderlyingSource,
  type EvidenceReference,
} from "../schemas/provenance.schema.ts";

function validEvidence(overrides: Record<string, unknown> = {}) {
  return {
    repository: "SmartBusinessv1/smart-business",
    commit_sha: "a".repeat(40),
    path: "communication/missions/SB-ORG-LEARNING-1.0/README.md",
    blob_sha: "b".repeat(40),
    locator: "Section 1",
    actor_class: "verifier",
    scope: { mission_ids: [], systems: [], environments: [] },
    relationship: "SUPPORTS",
    ...overrides,
  };
}

describe("EvidenceReferenceSchema", () => {
  it("accepts a well-formed reference", () => {
    expect(EvidenceReferenceSchema.safeParse(validEvidence()).success).toBe(true);
  });

  it("rejects a repository other than the canonical Smart Business repository", () => {
    const result = EvidenceReferenceSchema.safeParse(
      validEvidence({ repository: "someone-else/repo" }),
    );
    expect(result.success).toBe(false);
  });

  it("rejects a malformed commit_sha", () => {
    expect(
      EvidenceReferenceSchema.safeParse(validEvidence({ commit_sha: "not-a-sha" })).success,
    ).toBe(false);
    expect(
      EvidenceReferenceSchema.safeParse(validEvidence({ commit_sha: "a".repeat(39) })).success,
    ).toBe(false);
  });

  it("rejects a malformed blob_sha", () => {
    expect(EvidenceReferenceSchema.safeParse(validEvidence({ blob_sha: "zz" })).success).toBe(
      false,
    );
  });

  it("rejects an unsafe path", () => {
    expect(
      EvidenceReferenceSchema.safeParse(validEvidence({ path: "../../etc/passwd" })).success,
    ).toBe(false);
  });

  it("rejects an invalid relationship", () => {
    expect(
      EvidenceReferenceSchema.safeParse(validEvidence({ relationship: "AGREES" })).success,
    ).toBe(false);
  });

  it("rejects an invalid actor_class", () => {
    expect(
      EvidenceReferenceSchema.safeParse(validEvidence({ actor_class: "random" })).success,
    ).toBe(false);
  });

  it("rejects an unrecognized field", () => {
    const withExtra = { ...validEvidence(), trusted: true };
    expect(EvidenceReferenceSchema.safeParse(withExtra).success).toBe(false);
  });
});

describe("isSameUnderlyingSource", () => {
  it("is true only when commit, path, and blob all match", () => {
    const a = EvidenceReferenceSchema.parse(validEvidence());
    const b = EvidenceReferenceSchema.parse(validEvidence({ locator: "a different heading" }));
    expect(isSameUnderlyingSource(a, b)).toBe(true);
  });

  it("is false when the blob differs", () => {
    const a = EvidenceReferenceSchema.parse(validEvidence());
    const b = EvidenceReferenceSchema.parse(validEvidence({ blob_sha: "c".repeat(40) }));
    expect(isSameUnderlyingSource(a, b)).toBe(false);
  });
});
