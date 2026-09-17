// SB-ORG-LEARNING-1.1 Stage 4A -- Deterministic reconciliation plan contract.
//
// Reconciliation is a distinct dimension from a receipt's own
// PROCESSING_STATES (receipt.schema.ts): a receipt records how far ONE
// harvest attempt got; a reconciliation work item records what the
// wrapper recommends doing NEXT, given the current authoritative closure
// envelope and whatever receipt(s) already exist for that mission. The
// two are related (`existing_receipt_processing_state` carries the
// receipt's own state across), never merged into one enum.
//
// "SUPERSEDED_OR_REOPENED" reuses receipt.schema.ts's own exact name
// (not a new "REOPENED_OR_SUPERSEDED" spelling) -- the final reconciled
// build plan's B7 correction already names this exact lifecycle state,
// and the Stage 4A authorization is explicit: "use names consistent
// with existing contracts... do not create unnecessary parallel
// terminology."
//
// This schema only decides shape; `scripts/reconcile.mjs` decides which
// state applies. `.strict()` throughout for the same reason every other
// Stage 1-3 contract uses it: an unrecognized field must fail validation,
// not be silently accepted.

import { z } from "zod";
import { GitShaSchema } from "./primitives.ts";
import { ProcessingStateSchema } from "./receipt.schema.ts";

export const RECONCILIATION_SCHEMA_VERSION = 1;

export const RECONCILIATION_STATES = [
  "ALREADY_PROCESSED",
  "ELIGIBLE_UNPROCESSED",
  "NEW_CLOSURE_REVISION",
  "SUPERSEDED_OR_REOPENED",
  "INVALID_OR_UNSAFE",
  "FAILED_RETRYABLE",
] as const;

export const ReconciliationStateSchema = z.enum(RECONCILIATION_STATES);

/**
 * A deterministic, local-only concurrency proof primitive (Stage 4A is
 * authorized only a "safe local deterministic proof mechanism", not
 * distributed infrastructure). `locked` is always computed by peeking at
 * the current lock-file state at plan-build time -- it is informational
 * on a work item, never itself an ownership claim (see
 * `attemptReconciliationOwnership` in scripts/reconcile.mjs for the
 * actual atomic acquire/release primitive this field observes).
 */
const ActiveOwnershipSchema = z
  .object({
    locked: z.boolean(),
    owner_run_id: z.string().min(1).max(200).nullable(),
  })
  .strict();

/**
 * `mission_id` is deliberately a plain string here, not the strict
 * `MissionIdSchema` the closure envelope itself enforces -- mirroring
 * receipt.schema.ts's own documented reasoning: reconciliation must still
 * be able to truthfully report `INVALID_OR_UNSAFE` even when the
 * envelope's own mission_id was itself malformed. Envelope-level validity
 * is enforced earlier, in `ClosureEnvelopeSchema`.
 */
export const ReconciliationWorkItemSchema = z
  .object({
    schemaVersion: z.literal(RECONCILIATION_SCHEMA_VERSION),
    mission_id: z.string().min(1).max(200),
    closure_revision: z.string().min(1).max(200),
    source_snapshot_ref: GitShaSchema.nullable(),
    source_fingerprint: z
      .string()
      .regex(/^[0-9a-f]{64}$/, "must be a sha256 hex digest")
      .nullable(),
    reconciliation_state: ReconciliationStateSchema,
    reason: z.string().min(1).max(2000),
    existing_receipt_processing_state: ProcessingStateSchema.nullable(),
    next_safe_action: z.string().min(1).max(500),
    retry_eligible: z.boolean(),
    needs_human_reconciliation: z.boolean(),
    active_ownership: ActiveOwnershipSchema,
  })
  .strict()
  .superRefine((item, ctx) => {
    if (item.reconciliation_state === "FAILED_RETRYABLE" && !item.retry_eligible) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["retry_eligible"],
        message:
          "FAILED_RETRYABLE must always report retry_eligible: true -- failure is never a dead end",
      });
    }
    if (
      item.reconciliation_state === "SUPERSEDED_OR_REOPENED" &&
      !item.needs_human_reconciliation
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["needs_human_reconciliation"],
        message: "SUPERSEDED_OR_REOPENED must always flag needs_human_reconciliation: true",
      });
    }
    if (item.reconciliation_state === "ALREADY_PROCESSED" && item.retry_eligible) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["retry_eligible"],
        message:
          "ALREADY_PROCESSED must not claim retry_eligible -- there is nothing pending to retry",
      });
    }
  });

/** A rejected discovery input never becomes a work item -- `source` is always a safe path, never raw file content (F-03's no-raw-content principle applied to reconciliation input). */
export const RejectedReconciliationInputSchema = z
  .object({
    source: z.string().min(1).max(1024),
    reason: z.string().min(1).max(500),
  })
  .strict();

export const ReconciliationPlanSchema = z
  .object({
    schemaVersion: z.literal(RECONCILIATION_SCHEMA_VERSION),
    authority_statement: z.literal("reconciliation plan, not execution authority"),
    work_items: z.array(ReconciliationWorkItemSchema),
    rejected_inputs: z.array(RejectedReconciliationInputSchema),
  })
  .strict();

export type ReconciliationState = z.infer<typeof ReconciliationStateSchema>;
export type ReconciliationWorkItem = z.infer<typeof ReconciliationWorkItemSchema>;
export type ReconciliationPlan = z.infer<typeof ReconciliationPlanSchema>;
