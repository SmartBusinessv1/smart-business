// SB-ORG-LEARNING-1.1 Stage 1 -- promotion/review contract tests.
import { describe, it, expect } from "vitest";
import { PromotionReviewSchema } from "../schemas/promotion-review.schema.ts";

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

function validPromotion(overrides: Record<string, unknown> = {}) {
  return {
    schemaVersion: 1,
    promotion_id: "PROMO-1",
    candidate_id: "candidate-1",
    candidate_revision_hash: "a".repeat(64),
    resulting_maturity: "CORROBORATED",
    promotion_scope: "MISSION_SCOPED",
    approving_authority: {
      actor_class: "mission-control",
      name_or_role: "Smart Business Mission Control",
    },
    decision_ref: "communication/missions/SB-ORG-LEARNING-1.0/decision-log.md",
    approved_scope: "Applies to Stage 1 review.",
    evidence: [evidence],
    supersedes: [],
    superseded_by: [],
    promoted_at: new Date().toISOString(),
    ...overrides,
  };
}

describe("PromotionReviewSchema", () => {
  it("accepts a well-formed mission-scoped promotion by Mission Control", () => {
    expect(PromotionReviewSchema.safeParse(validPromotion()).success).toBe(true);
  });

  it("rejects an approving_authority.actor_class outside {mission-control, founder}", () => {
    for (const actorClass of ["ci", "synthesis", "builder", "verifier"]) {
      const result = PromotionReviewSchema.safeParse(
        validPromotion({ approving_authority: { actor_class: actorClass, name_or_role: "x" } }),
      );
      expect(result.success).toBe(false);
    }
  });

  it("rejects organization-wide INSTITUTIONALISED approved only by Mission Control", () => {
    const result = PromotionReviewSchema.safeParse(
      validPromotion({
        resulting_maturity: "INSTITUTIONALISED",
        promotion_scope: "ORGANIZATION_WIDE",
        approving_authority: { actor_class: "mission-control", name_or_role: "Mission Control" },
      }),
    );
    expect(result.success).toBe(false);
  });

  it("accepts organization-wide INSTITUTIONALISED approved by Founder", () => {
    const result = PromotionReviewSchema.safeParse(
      validPromotion({
        resulting_maturity: "INSTITUTIONALISED",
        promotion_scope: "ORGANIZATION_WIDE",
        approving_authority: { actor_class: "founder", name_or_role: "Riyas PK" },
      }),
    );
    expect(result.success).toBe(true);
  });

  it("accepts mission-scoped INSTITUTIONALISED approved by Mission Control -- the Founder gate is org-wide-specific", () => {
    const result = PromotionReviewSchema.safeParse(
      validPromotion({
        resulting_maturity: "INSTITUTIONALISED",
        promotion_scope: "MISSION_SCOPED",
        approving_authority: { actor_class: "mission-control", name_or_role: "Mission Control" },
      }),
    );
    expect(result.success).toBe(true);
  });

  it("rejects a promotion record that supersedes itself", () => {
    const result = PromotionReviewSchema.safeParse(validPromotion({ supersedes: ["PROMO-1"] }));
    expect(result.success).toBe(false);
  });

  it("rejects a promotion record that is superseded by itself", () => {
    const result = PromotionReviewSchema.safeParse(validPromotion({ superseded_by: ["PROMO-1"] }));
    expect(result.success).toBe(false);
  });

  it("rejects an unsafe decision_ref path", () => {
    expect(
      PromotionReviewSchema.safeParse(validPromotion({ decision_ref: "../../etc/passwd" })).success,
    ).toBe(false);
  });

  it("rejects zero evidence references", () => {
    expect(PromotionReviewSchema.safeParse(validPromotion({ evidence: [] })).success).toBe(false);
  });

  it("rejects an unrecognized field", () => {
    expect(PromotionReviewSchema.safeParse({ ...validPromotion(), reviewed_by: "x" }).success).toBe(
      false,
    );
  });
});
