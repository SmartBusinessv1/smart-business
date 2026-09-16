// SB-ORG-LEARNING-1.1 Stage 1 -- processing receipt contract tests.
//
// The load-bearing assertion of this file: a receipt cannot claim
// SCREENED (Stage 1's terminal success state) unless screening actually
// came back CLEAN over a non-empty manifest (B5). This is checked as a
// schema-level impossibility, not just as application logic that could
// be bypassed by a future caller.
import { describe, it, expect } from "vitest";
import { ReceiptSchema, ScreeningResultSchema } from "../schemas/receipt.schema.ts";

function validReceipt(overrides: Record<string, unknown> = {}) {
  const now = new Date().toISOString();
  return {
    schemaVersion: 1,
    receipt_id: "SB-OPS-CI-ARCHITECTURE-1.0:" + "a".repeat(64),
    mission_id: "SB-OPS-CI-ARCHITECTURE-1.0",
    closure_revision: "REV-1",
    run_id: "run-1",
    source_fingerprint: "a".repeat(64),
    source_manifest: [
      {
        path: "communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/README.md",
        blob_sha: "b".repeat(40),
      },
    ],
    processing_state: "SCREENED",
    screening_result: { status: "CLEAN", findings: [], scanned_path_count: 1 },
    failure_reason: null,
    created_at: now,
    updated_at: now,
    ...overrides,
  };
}

describe("ReceiptSchema", () => {
  it("accepts a well-formed SCREENED receipt", () => {
    expect(ReceiptSchema.safeParse(validReceipt()).success).toBe(true);
  });

  it("rejects SCREENED with a null screening_result", () => {
    expect(ReceiptSchema.safeParse(validReceipt({ screening_result: null })).success).toBe(false);
  });

  it("rejects SCREENED when screening_result.status is not CLEAN", () => {
    const result = ReceiptSchema.safeParse(
      validReceipt({
        screening_result: {
          status: "QUARANTINED",
          findings: [{ path: "x", rule_id: "jwt" }],
          scanned_path_count: 1,
        },
      }),
    );
    expect(result.success).toBe(false);
  });

  it("rejects SCREENED with an empty source_manifest", () => {
    expect(ReceiptSchema.safeParse(validReceipt({ source_manifest: [] })).success).toBe(false);
  });

  it("rejects VALIDATION_FAILED with no failure_reason -- failures must be reported truthfully", () => {
    const result = ReceiptSchema.safeParse(
      validReceipt({
        processing_state: "VALIDATION_FAILED",
        screening_result: null,
        failure_reason: null,
      }),
    );
    expect(result.success).toBe(false);
  });

  it("accepts VALIDATION_FAILED with a failure_reason", () => {
    const result = ReceiptSchema.safeParse(
      validReceipt({
        processing_state: "VALIDATION_FAILED",
        screening_result: null,
        failure_reason: "a scanner failure occurred",
      }),
    );
    expect(result.success).toBe(true);
  });

  it("accepts HARVESTED with no screening_result yet (recovery intermediate state)", () => {
    const result = ReceiptSchema.safeParse(
      validReceipt({ processing_state: "HARVESTED", screening_result: null, failure_reason: null }),
    );
    expect(result.success).toBe(true);
  });

  it("rejects an unrecognized field", () => {
    expect(ReceiptSchema.safeParse({ ...validReceipt(), reviewed_by: "x" }).success).toBe(false);
  });

  it("rejects a malformed source_fingerprint", () => {
    expect(ReceiptSchema.safeParse(validReceipt({ source_fingerprint: "not-hex" })).success).toBe(
      false,
    );
  });
});

describe("ScreeningResultSchema", () => {
  it("rejects QUARANTINED with zero findings", () => {
    expect(
      ScreeningResultSchema.safeParse({
        status: "QUARANTINED",
        findings: [],
        scanned_path_count: 1,
      }).success,
    ).toBe(false);
  });

  it("rejects CLEAN with non-empty findings", () => {
    expect(
      ScreeningResultSchema.safeParse({
        status: "CLEAN",
        findings: [{ path: "x", rule_id: "jwt" }],
        scanned_path_count: 1,
      }).success,
    ).toBe(false);
  });

  it("accepts QUARANTINED with at least one finding, and never carries raw matched text", () => {
    const parsed = ScreeningResultSchema.parse({
      status: "QUARANTINED",
      findings: [{ path: "communication/missions/x/README.md", rule_id: "aws-access-key-id" }],
      scanned_path_count: 1,
    });
    expect(Object.keys(parsed.findings[0]).sort()).toEqual(["path", "rule_id"]);
  });
});
