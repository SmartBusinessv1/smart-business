// SB-ORG-LEARNING-1.1 Stage 4A -- reconciliation plan contract tests.
import { describe, it, expect } from "vitest";
import {
  ReconciliationPlanSchema,
  ReconciliationWorkItemSchema,
  RECONCILIATION_STATES,
} from "../schemas/reconciliation.schema.ts";

function validWorkItem(overrides: Record<string, unknown> = {}) {
  return {
    schemaVersion: 1,
    mission_id: "SB-TEST-FIXTURE-1.0",
    closure_revision: "rev-1",
    source_snapshot_ref: "a".repeat(40),
    source_fingerprint: "b".repeat(64),
    reconciliation_state: "ELIGIBLE_UNPROCESSED",
    reason: "no existing receipt for this mission/fingerprint",
    existing_receipt_processing_state: null,
    next_safe_action: "run harvest for this closure envelope",
    retry_eligible: false,
    needs_human_reconciliation: false,
    active_ownership: { locked: false, owner_run_id: null },
    ...overrides,
  };
}

describe("ReconciliationStateSchema / RECONCILIATION_STATES", () => {
  it("reuses receipt.schema.ts's exact SUPERSEDED_OR_REOPENED spelling, not a new parallel term", () => {
    expect(RECONCILIATION_STATES).toContain("SUPERSEDED_OR_REOPENED");
    expect(RECONCILIATION_STATES).not.toContain("REOPENED_OR_SUPERSEDED");
  });

  it("defines exactly the six required reconciliation states", () => {
    expect([...RECONCILIATION_STATES].sort()).toEqual(
      [
        "ALREADY_PROCESSED",
        "ELIGIBLE_UNPROCESSED",
        "NEW_CLOSURE_REVISION",
        "SUPERSEDED_OR_REOPENED",
        "INVALID_OR_UNSAFE",
        "FAILED_RETRYABLE",
      ].sort(),
    );
  });
});

describe("ReconciliationWorkItemSchema", () => {
  it("accepts a well-formed eligible-unprocessed work item", () => {
    expect(ReconciliationWorkItemSchema.safeParse(validWorkItem()).success).toBe(true);
  });

  it("accepts null source_snapshot_ref/source_fingerprint for an invalid/unsafe item", () => {
    const result = ReconciliationWorkItemSchema.safeParse(
      validWorkItem({
        reconciliation_state: "INVALID_OR_UNSAFE",
        source_snapshot_ref: null,
        source_fingerprint: null,
        retry_eligible: true,
      }),
    );
    expect(result.success).toBe(true);
  });

  it("rejects FAILED_RETRYABLE with retry_eligible: false -- failure must never be a dead end", () => {
    const result = ReconciliationWorkItemSchema.safeParse(
      validWorkItem({ reconciliation_state: "FAILED_RETRYABLE", retry_eligible: false }),
    );
    expect(result.success).toBe(false);
  });

  it("rejects SUPERSEDED_OR_REOPENED with needs_human_reconciliation: false", () => {
    const result = ReconciliationWorkItemSchema.safeParse(
      validWorkItem({
        reconciliation_state: "SUPERSEDED_OR_REOPENED",
        needs_human_reconciliation: false,
      }),
    );
    expect(result.success).toBe(false);
  });

  it("rejects ALREADY_PROCESSED claiming retry_eligible: true", () => {
    const result = ReconciliationWorkItemSchema.safeParse(
      validWorkItem({ reconciliation_state: "ALREADY_PROCESSED", retry_eligible: true }),
    );
    expect(result.success).toBe(false);
  });

  it("rejects an unrecognized reconciliation_state", () => {
    const result = ReconciliationWorkItemSchema.safeParse(
      validWorkItem({ reconciliation_state: "SOMETHING_ELSE" }),
    );
    expect(result.success).toBe(false);
  });

  it("rejects an unrecognized field", () => {
    const result = ReconciliationWorkItemSchema.safeParse({
      ...validWorkItem(),
      institutionalised: true,
    });
    expect(result.success).toBe(false);
  });

  it("rejects a malformed source_fingerprint that is not a sha256 hex digest", () => {
    const result = ReconciliationWorkItemSchema.safeParse(
      validWorkItem({ source_fingerprint: "not-a-hash" }),
    );
    expect(result.success).toBe(false);
  });
});

describe("ReconciliationPlanSchema", () => {
  it("accepts an empty plan with the required authority statement", () => {
    const result = ReconciliationPlanSchema.safeParse({
      schemaVersion: 1,
      authority_statement: "reconciliation plan, not execution authority",
      work_items: [],
      rejected_inputs: [],
    });
    expect(result.success).toBe(true);
  });

  it("rejects a plan with a different authority_statement string", () => {
    const result = ReconciliationPlanSchema.safeParse({
      schemaVersion: 1,
      authority_statement: "reconciliation authority",
      work_items: [],
      rejected_inputs: [],
    });
    expect(result.success).toBe(false);
  });

  it("rejects a rejected_inputs entry with a missing reason", () => {
    const result = ReconciliationPlanSchema.safeParse({
      schemaVersion: 1,
      authority_statement: "reconciliation plan, not execution authority",
      work_items: [],
      rejected_inputs: [{ source: "some/path.json" }],
    });
    expect(result.success).toBe(false);
  });
});
