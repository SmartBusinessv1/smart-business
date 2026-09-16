// SB-ORG-LEARNING-1.1 Stage 1 -- Processing receipt schema.
//
// B7 requires distinguishing five identities without conflating them:
// (1) source snapshot identity, (2) processing-run identity, (3)
// candidate artifact identity, (4) review/promotion identity, (5)
// publication identity. A receipt binds (1) and (2); Stage 1 only ever
// produces receipts, so only (1) and (2) are populated by anything in
// this stage -- (3)-(5) are separate contracts (candidate/promotion
// schemas) populated by later stages, never inline here.
//
// B7's recovery-state list is reproduced exactly as PROCESSING_STATES.
// Stage 1's harvester (scripts/harvest.mjs) can only ever reach
// "HARVESTED", "SCREENED", or "VALIDATION_FAILED" -- the remaining
// states exist in the contract now so later stages extend the same
// receipt lifecycle instead of inventing a parallel one, but nothing in
// Stage 1 writes them.
//
// Two cross-field rules are the load-bearing part of this file:
//   - reaching "SCREENED" requires a CLEAN screening result over a
//     non-empty manifest (B5: "a scanner failure is not a clean scan and
//     not a `no material learning` result" -- encoded so it is
//     impossible, not just discouraged, for a receipt to claim success
//     while screening did not actually come back clean);
//   - "VALIDATION_FAILED" requires a non-empty failure_reason (B7:
//     "reports failure states truthfully").

import { z } from "zod";

export const RECEIPT_SCHEMA_VERSION = 1;

export const PROCESSING_STATES = [
  "NOT_STARTED",
  "HARVESTED",
  "SCREENED",
  "EXTRACTION_ATTEMPTED",
  "VALIDATION_FAILED",
  "CANDIDATE_READY",
  "PUBLICATION_PENDING",
  "PUBLISHED",
  "SUPERSEDED_OR_REOPENED",
] as const;

export const ProcessingStateSchema = z.enum(PROCESSING_STATES);

export const SCREENING_STATUSES = [
  "CLEAN",
  "QUARANTINED",
  "SCANNER_FAILED",
  "SCANNER_UNKNOWN",
] as const;

export const ScreeningStatusSchema = z.enum(SCREENING_STATUSES);

/**
 * `findings` never carries matched text -- only the path and rule
 * identifier that triggered quarantine (B5: "quarantine ambiguous
 * content without echoing raw values"). This is enforced by never giving
 * the field a place to put raw text, not by a runtime redaction step
 * that could be forgotten.
 */
const ScreeningFindingSchema = z
  .object({
    path: z.string().min(1).max(1024),
    rule_id: z.string().min(1).max(100),
  })
  .strict();

export const ScreeningResultSchema = z
  .object({
    status: ScreeningStatusSchema,
    findings: z.array(ScreeningFindingSchema).max(1000).default([]),
    scanned_path_count: z.number().int().min(0),
  })
  .strict()
  .superRefine((result, ctx) => {
    if (result.status === "QUARANTINED" && result.findings.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["findings"],
        message: "QUARANTINED status requires at least one finding",
      });
    }
    if (result.status !== "QUARANTINED" && result.findings.length > 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["status"],
        message: "findings are only meaningful when status is QUARANTINED",
      });
    }
  });

export type ScreeningResult = z.infer<typeof ScreeningResultSchema>;

const ManifestEntrySchema = z
  .object({
    path: z.string().min(1).max(1024),
    blob_sha: z.string().regex(/^[0-9a-f]{40}$/),
  })
  .strict();

export const ReceiptSchema = z
  .object({
    schemaVersion: z.literal(RECEIPT_SCHEMA_VERSION),
    receipt_id: z.string().min(1).max(200),
    // Deliberately a plain string, not the strict `MissionIdSchema` used
    // by the closure envelope: a receipt must still be writable to
    // truthfully record a failure even when the envelope's own
    // mission_id was itself malformed or unparseable (see
    // scripts/harvest.mjs's fallback-mission-id path). The envelope
    // schema is where mission_id validity is actually enforced.
    mission_id: z.string().min(1).max(200),
    closure_revision: z.string().min(1).max(200),
    run_id: z.string().min(1).max(200),
    source_fingerprint: z.string().regex(/^[0-9a-f]{64}$/, "must be a sha256 hex digest"),
    source_manifest: z.array(ManifestEntrySchema).max(10000),
    processing_state: ProcessingStateSchema,
    screening_result: ScreeningResultSchema.nullable().default(null),
    failure_reason: z.string().min(1).max(2000).nullable().default(null),
    created_at: z.string().datetime({ offset: true }),
    updated_at: z.string().datetime({ offset: true }),
  })
  .strict()
  .superRefine((receipt, ctx) => {
    if (receipt.processing_state === "SCREENED") {
      if (receipt.screening_result?.status !== "CLEAN") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["processing_state"],
          message:
            "SCREENED requires screening_result.status === CLEAN (B5: a scanner failure is not a clean scan)",
        });
      }
      if (receipt.source_manifest.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["source_manifest"],
          message: "SCREENED requires at least one harvested evidence entry",
        });
      }
    }
    if (receipt.processing_state === "VALIDATION_FAILED" && !receipt.failure_reason) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["failure_reason"],
        message:
          "VALIDATION_FAILED requires a non-empty failure_reason (truthful failure reporting)",
      });
    }
  });

export type Receipt = z.infer<typeof ReceiptSchema>;
