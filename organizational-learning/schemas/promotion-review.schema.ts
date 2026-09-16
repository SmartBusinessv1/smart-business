// SB-ORG-LEARNING-1.1 Stage 1 -- Promotion/review schema.
//
// B1 correction: promotion is "a separate human-controlled write path."
// This contract is structurally separate from CandidateLearningItemSchema
// (different file, no shared base "just add fields" schema) so the two
// can never be accidentally merged into one convenient object.
//
// `.strict()` is used throughout for the same reason given in
// candidate-learning-item.schema.ts: unrecognized keys must fail
// validation, not be silently dropped.
//
// v1 authority rule encoded below (B1 / final build plan Section 5):
// Mission Control may promote to CORROBORATED or VALIDATED; only Founder
// approval may promote to INSTITUTIONALISED when the promotion is
// organization-wide. A mission-scoped INSTITUTIONALISED promotion may
// still be approved by Mission Control -- the Founder-only gate applies
// specifically to organization-wide institutionalization, matching "For
// v1, organization-wide INSTITUTIONALISED status requires Founder
// approval" (not "all INSTITUTIONALISED promotions").

import { z } from "zod";
import { EvidenceReferenceSchema } from "./provenance.schema.ts";
import { SafeRelativePathSchema } from "./primitives.ts";

export const PROMOTION_SCHEMA_VERSION = 1;

export const PromotedMaturitySchema = z.enum(["CORROBORATED", "VALIDATED", "INSTITUTIONALISED"]);

export const PromotionScopeSchema = z.enum(["MISSION_SCOPED", "ORGANIZATION_WIDE"]);

/** Only a human-capable authority may approve a promotion (B1: "a normal
 * PR merge, actor-name string, model confidence score, or repository
 * access does not create promotion authority" -- restricting this enum
 * to the two human decision-making roles is the schema-level expression
 * of that rule; "ci", "synthesis", "builder" etc. cannot appear here.
 */
export const PromotingAuthoritySchema = z.enum(["mission-control", "founder"]);

const ApprovingAuthoritySchema = z
  .object({
    actor_class: PromotingAuthoritySchema,
    name_or_role: z.string().min(1).max(200),
  })
  .strict();

export const PromotionReviewSchema = z
  .object({
    schemaVersion: z.literal(PROMOTION_SCHEMA_VERSION),
    promotion_id: z.string().min(1).max(200),
    candidate_id: z.string().min(1).max(200),
    // Binds this promotion to the exact candidate content revision it
    // reviewed (B1: "Every promotion must bind to the exact item
    // revision ... Any material content change invalidates approval of
    // the prior revision"). Computed via lib/revision-hash.ts over the
    // candidate object being promoted.
    candidate_revision_hash: z.string().regex(/^[0-9a-f]{64}$/, "must be a sha256 hex digest"),
    resulting_maturity: PromotedMaturitySchema,
    promotion_scope: PromotionScopeSchema,
    approving_authority: ApprovingAuthoritySchema,
    decision_ref: SafeRelativePathSchema,
    approved_scope: z.string().min(1).max(2000),
    evidence: z.array(EvidenceReferenceSchema).min(1),
    // Supersession edges legitimately live here, not on the candidate
    // contract (B1 explicitly names "accepted supersession edge" as a
    // field a candidate must not be able to populate). Full graph
    // cycle/dangling-reference detection across a populated registry (B4)
    // is deferred to the stage that actually has a registry to check
    // against; this schema only rejects the one structural case it can
    // decide in isolation: a promotion record naming itself.
    supersedes: z.array(z.string().min(1).max(200)).max(50).default([]),
    superseded_by: z.array(z.string().min(1).max(200)).max(50).default([]),
    promoted_at: z.string().datetime({ offset: true }),
  })
  .strict()
  .superRefine((promotion, ctx) => {
    if (promotion.supersedes.includes(promotion.promotion_id)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["supersedes"],
        message: "a promotion record cannot supersede itself",
      });
    }
    if (promotion.superseded_by.includes(promotion.promotion_id)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["superseded_by"],
        message: "a promotion record cannot be superseded by itself",
      });
    }
    if (
      promotion.resulting_maturity === "INSTITUTIONALISED" &&
      promotion.promotion_scope === "ORGANIZATION_WIDE" &&
      promotion.approving_authority.actor_class !== "founder"
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["approving_authority", "actor_class"],
        message:
          "organization-wide INSTITUTIONALISED status requires Founder approval in v1 (final reconciled build plan, Section 5 / B1)",
      });
    }
  });

export type PromotionReview = z.infer<typeof PromotionReviewSchema>;
