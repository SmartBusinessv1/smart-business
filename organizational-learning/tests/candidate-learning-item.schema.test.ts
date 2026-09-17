// SB-ORG-LEARNING-1.1 Stage 1 -- candidate learning schema tests.
//
// The load-bearing assertion of this file: a candidate object can never
// carry a trusted review/approval/institutionalization field (B1). Each
// name in PROHIBITED_CANDIDATE_FIELDS is tried individually so a future
// change that accidentally removes `.strict()` (see the comment at the
// top of candidate-learning-item.schema.ts) fails loudly here, for every
// named field, not just in principle.
import { describe, it, expect } from "vitest";
import {
  CandidateLearningItemSchema,
  PROHIBITED_CANDIDATE_FIELDS,
} from "../schemas/candidate-learning-item.schema.ts";

const evidence = {
  repository: "SmartBusinessv1/smart-business",
  commit_sha: "a".repeat(40),
  path: "communication/missions/SB-ORG-LEARNING-1.0/README.md",
  blob_sha: "b".repeat(40),
  locator: "Section 1",
  actor_class: "verifier",
  scope: { mission_ids: [], systems: [], environments: [] },
  relationship: "SUPPORTS",
};

function validCandidate(overrides: Record<string, unknown> = {}) {
  return {
    schemaVersion: 1,
    id: "candidate-1",
    canonical_title: "Example lesson",
    summary: "An example candidate lesson for testing.",
    category: ["engineering"],
    scope: { mission_ids: [], systems: [], environments: [] },
    claims: [{ claim_id: "CLAIM-1", text: "Something happened.", evidence: [evidence] }],
    evidence_strength: "DIRECT",
    confidence: "MEDIUM",
    maturity: "CANDIDATE",
    authority_effect: "NONE",
    generated_by: {
      actor_class: "synthesis",
      session_ref: "session-1",
      generated_at: new Date().toISOString(),
    },
    source_reference: {
      mission_id: "SB-OPS-CI-ARCHITECTURE-1.0",
      closure_revision: "REV-1",
      source_fingerprint: "a".repeat(64),
    },
    conditions: [],
    anti_patterns: [],
    ...overrides,
  };
}

describe("CandidateLearningItemSchema", () => {
  it("accepts a well-formed candidate", () => {
    const result = CandidateLearningItemSchema.safeParse(validCandidate());
    expect(result.success).toBe(true);
  });

  it.each(PROHIBITED_CANDIDATE_FIELDS)(
    "rejects a candidate carrying prohibited field '%s'",
    (field) => {
      const poisoned = { ...validCandidate(), [field]: "anything" };
      const result = CandidateLearningItemSchema.safeParse(poisoned);
      expect(result.success).toBe(false);
      if (!result.success) {
        const unrecognizedKeysIssue = result.error.issues.find(
          (issue) => issue.code === "unrecognized_keys",
        );
        expect(unrecognizedKeysIssue).toBeDefined();
      }
    },
  );

  it("rejects any unrecognized field, not only the named prohibited list", () => {
    const result = CandidateLearningItemSchema.safeParse({
      ...validCandidate(),
      some_future_authority_field_nobody_named_yet: true,
    });
    expect(result.success).toBe(false);
  });

  it("rejects a maturity other than CANDIDATE", () => {
    expect(
      CandidateLearningItemSchema.safeParse(validCandidate({ maturity: "VALIDATED" })).success,
    ).toBe(false);
    expect(
      CandidateLearningItemSchema.safeParse(validCandidate({ maturity: "INSTITUTIONALISED" }))
        .success,
    ).toBe(false);
  });

  it("rejects an authority_effect other than NONE", () => {
    expect(
      CandidateLearningItemSchema.safeParse(validCandidate({ authority_effect: "ADVISORY" }))
        .success,
    ).toBe(false);
  });

  it("rejects generated_by.actor_class other than 'synthesis' -- forecloses fabricated Founder/Mission-Control origin claims", () => {
    for (const actorClass of ["founder", "mission-control", "builder", "verifier", "ci"]) {
      const result = CandidateLearningItemSchema.safeParse(
        validCandidate({
          generated_by: {
            actor_class: actorClass,
            session_ref: "s",
            generated_at: new Date().toISOString(),
          },
        }),
      );
      expect(result.success).toBe(false);
    }
  });

  it("rejects an empty claims array", () => {
    expect(CandidateLearningItemSchema.safeParse(validCandidate({ claims: [] })).success).toBe(
      false,
    );
  });

  it("rejects a claim with zero evidence references", () => {
    const noEvidenceClaim = { claim_id: "CLAIM-1", text: "unsupported", evidence: [] };
    expect(
      CandidateLearningItemSchema.safeParse(validCandidate({ claims: [noEvidenceClaim] })).success,
    ).toBe(false);
  });

  it("rejects an empty category array", () => {
    expect(CandidateLearningItemSchema.safeParse(validCandidate({ category: [] })).success).toBe(
      false,
    );
  });

  it("rejects a source_reference with a malformed source_fingerprint", () => {
    const result = CandidateLearningItemSchema.safeParse(
      validCandidate({
        source_reference: {
          mission_id: "SB-X-1.0",
          closure_revision: "REV-1",
          source_fingerprint: "xyz",
        },
      }),
    );
    expect(result.success).toBe(false);
  });
});
