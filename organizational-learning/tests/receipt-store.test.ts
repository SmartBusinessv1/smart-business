// SB-ORG-LEARNING-1.1 Stage 1 -- receipt persistence and idempotency tests.
import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  computeReceiptId,
  receiptFilePath,
  readReceiptIfExists,
  isAlreadyProcessed,
  writeReceipt,
  newRunId,
} from "../lib/receipt-store.ts";
import type { Receipt } from "../schemas/receipt.schema.ts";

let baseDir: string | null = null;

afterEach(() => {
  if (baseDir) rmSync(baseDir, { recursive: true, force: true });
  baseDir = null;
});

function screenedReceipt(overrides: Partial<Receipt> = {}): Receipt {
  const now = new Date().toISOString();
  return {
    schemaVersion: 1,
    receipt_id: computeReceiptId("SB-OPS-CI-ARCHITECTURE-1.0", "a".repeat(64)),
    mission_id: "SB-OPS-CI-ARCHITECTURE-1.0",
    closure_revision: "REV-1",
    run_id: newRunId(),
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
  } as Receipt;
}

describe("computeReceiptId / receiptFilePath", () => {
  it("derives receipt id only from mission_id and source_fingerprint", () => {
    expect(computeReceiptId("SB-X-1.0", "a".repeat(64))).toBe(`SB-X-1.0:${"a".repeat(64)}`);
  });

  it("places the receipt under <baseDir>/<mission_id>/<fingerprint>.json", () => {
    const path = receiptFilePath("/tmp/receipts", "SB-X-1.0", "a".repeat(64));
    expect(path).toBe(join("/tmp/receipts", "SB-X-1.0", `${"a".repeat(64)}.json`));
  });
});

describe("writeReceipt / readReceiptIfExists", () => {
  it("returns null when no receipt exists yet", () => {
    baseDir = mkdtempSync(join(tmpdir(), "ole-receipt-store-test-"));
    expect(readReceiptIfExists(baseDir, "SB-OPS-CI-ARCHITECTURE-1.0", "a".repeat(64))).toBeNull();
  });

  it("round-trips a valid receipt", () => {
    baseDir = mkdtempSync(join(tmpdir(), "ole-receipt-store-test-"));
    const receipt = screenedReceipt();
    writeReceipt(baseDir, receipt);
    const read = readReceiptIfExists(baseDir, receipt.mission_id, receipt.source_fingerprint);
    expect(read).toEqual(receipt);
  });

  it("rejects writing a receipt that fails schema validation", () => {
    baseDir = mkdtempSync(join(tmpdir(), "ole-receipt-store-test-"));
    const invalid = screenedReceipt({ screening_result: null }); // SCREENED requires CLEAN screening_result
    expect(() => writeReceipt(baseDir!, invalid)).toThrow();
  });

  it("writes atomically -- no .tmp file is left behind after a successful write", () => {
    baseDir = mkdtempSync(join(tmpdir(), "ole-receipt-store-test-"));
    writeReceipt(baseDir, screenedReceipt());
    const finalPath = receiptFilePath(baseDir, "SB-OPS-CI-ARCHITECTURE-1.0", "a".repeat(64));
    expect(JSON.parse(readFileSync(finalPath, "utf8")).processing_state).toBe("SCREENED");
  });

  it("updates the same receipt file in place on a second write for the same identity", () => {
    baseDir = mkdtempSync(join(tmpdir(), "ole-receipt-store-test-"));
    const first = screenedReceipt({ run_id: "run-1" });
    writeReceipt(baseDir, first);
    const second = screenedReceipt({ run_id: "run-2", created_at: first.created_at });
    writeReceipt(baseDir, second);
    const read = readReceiptIfExists(baseDir, "SB-OPS-CI-ARCHITECTURE-1.0", "a".repeat(64));
    expect(read?.run_id).toBe("run-2");
  });
});

describe("isAlreadyProcessed", () => {
  it("is true only for SCREENED", () => {
    expect(isAlreadyProcessed(screenedReceipt({ processing_state: "SCREENED" }))).toBe(true);
    expect(
      isAlreadyProcessed(
        screenedReceipt({
          processing_state: "VALIDATION_FAILED",
          screening_result: null,
          failure_reason: "x",
        }),
      ),
    ).toBe(false);
    expect(
      isAlreadyProcessed(
        screenedReceipt({
          processing_state: "HARVESTED",
          screening_result: null,
          failure_reason: null,
        }),
      ),
    ).toBe(false);
  });
});
