// SB-ORG-LEARNING-1.1 Stage 1 -- Closure-envelope contract.
//
// B6 correction: the engine "cannot infer authoritative mission closure
// from a merge, label, README phrase, or PROCESSED marker alone." Stage
// 1's harvester therefore never infers eligibility -- it only accepts an
// explicitly supplied, schema-valid closure envelope (Stage 1 authorized
// scope: "accepts an explicitly supplied approved closure envelope").
// Authoring/approving an envelope is a human/Mission-Control act outside
// this schema; this file only validates that a supplied envelope is
// well-formed, not that its contents are true.
//
// "The closure envelope establishes eligibility to learn, not authority
// to change organizational practice" (B6) -- nothing in this schema
// grants promotion, approval, or governance authority; it only names
// which committed evidence a harvester run may look at.

import { z } from "zod";
import { MissionIdSchema, SafeRelativePathSchema } from "./primitives.ts";

export const CLOSURE_ENVELOPE_SCHEMA_VERSION = 1;

/**
 * B3's evidence-order items 1-2 (accepted closure/acceptance record and
 * the evidence it explicitly references) are what the harvester actually
 * reads. `retained_followups` is deliberately typed as free text, not
 * paths -- it records open follow-up descriptions carried forward from
 * closure, not files to harvest.
 */
export const ClosureEnvelopeSchema = z
  .object({
    schemaVersion: z.literal(CLOSURE_ENVELOPE_SCHEMA_VERSION),
    mission_id: MissionIdSchema,
    mission_class: z.string().min(1).max(200),
    closure_revision: z.string().min(1).max(200),
    final_disposition: z.string().min(1).max(500),
    accepted_scope: z.string().min(1).max(2000),
    acceptance_refs: z.array(SafeRelativePathSchema).max(200).default([]),
    closure_refs: z.array(SafeRelativePathSchema).max(200).default([]),
    retained_followups: z.array(z.string().min(1).max(500)).max(200).default([]),
    // Resolved after merge (B6: "the containing canonical commit is
    // resolved after merge and recorded in the processing receipt rather
    // than requiring a file to predict its own final commit SHA"), but
    // Stage 1's harvester requires it supplied up front since Stage 1
    // never resolves closure state itself -- it only consumes an
    // already-resolved, explicitly supplied envelope.
    source_snapshot_ref: z
      .string()
      .regex(/^[0-9a-f]{40}$/, "source_snapshot_ref must be a full 40-character commit SHA"),
    reopens: z.string().min(1).max(200).nullable().default(null),
    supersedes_closure: z.string().min(1).max(200).nullable().default(null),
  })
  .strict()
  .refine((envelope) => envelope.acceptance_refs.length > 0 || envelope.closure_refs.length > 0, {
    message:
      "a closure envelope must cite at least one acceptance_refs or closure_refs entry -- a closure with no evidence reference is not eligible to learn from",
    path: ["closure_refs"],
  });

export type ClosureEnvelope = z.infer<typeof ClosureEnvelopeSchema>;

/** All evidence-class references named by an envelope, in one flat list. */
export function envelopeEvidenceRefs(envelope: ClosureEnvelope): string[] {
  return [...envelope.acceptance_refs, ...envelope.closure_refs];
}
