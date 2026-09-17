// SB-ORG-LEARNING-1.1 Stage 1 -- receipt persistence and idempotency tests.
//
// Includes two rounds of the F-01 correction regression suite:
//
// Round 1 (communication/missions/SB-ORG-LEARNING-1.1/mission-control/
// 06-stage1-f01-correction-authorization.md): Codex independent
// verification found that a rejected envelope's raw mission_id (e.g.
// "../escaped") escaped the configured receipts directory because it
// was joined directly into the receipt file path.
//
// Round 2 (communication/missions/SB-ORG-LEARNING-1.1/mission-control/
// 08-stage1-f01-f02-f03-correction-authorization.md): Codex independent
// re-verification found that round 1's fix is purely lexical and does
// not detect a *pre-existing* filesystem symlink/junction/reparse point
// at the derived mission storage directory redirecting reads/writes to
// a physically different location.
//
// Every case below uses only isolated OS temp directories, created and
// removed per test -- no real closed mission is processed.
import { describe, it, expect, afterEach } from "vitest";
import {
  mkdtempSync,
  mkdirSync,
  rmSync,
  readFileSync,
  readdirSync,
  existsSync,
  symlinkSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, dirname } from "node:path";
import {
  computeReceiptId,
  computeMissionStorageKey,
  resolveContainedPath,
  receiptFilePath,
  readReceiptIfExists,
  isAlreadyProcessed,
  writeReceipt,
  newRunId,
} from "../lib/receipt-store.ts";
import type { Receipt } from "../schemas/receipt.schema.ts";

/** Windows uses directory junctions; POSIX platforms use a directory
 * symlink -- both are reparse-point-style indirection Node's fs module
 * follows transparently unless explicitly guarded against, which is
 * exactly the property this suite exercises. Creates both the link's
 * parent directory and the (real) target directory first -- a Windows
 * junction is validated against an existing target at creation time,
 * unlike a POSIX symlink, which may dangle. */
function plantDirectoryIndirection(linkPath: string, target: string): void {
  mkdirSync(dirname(linkPath), { recursive: true });
  mkdirSync(target, { recursive: true });
  symlinkSync(target, linkPath, process.platform === "win32" ? "junction" : "dir");
}

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
  it("derives receipt id only from mission_id and source_fingerprint (diagnostic identity, unaffected by F-01)", () => {
    expect(computeReceiptId("SB-X-1.0", "a".repeat(64))).toBe(`SB-X-1.0:${"a".repeat(64)}`);
    // The diagnostic identity preserves malformed input verbatim -- this
    // is the accepted Stage 1 rule F-01 does not reverse.
    expect(computeReceiptId("../escaped", "a".repeat(64))).toBe(`../escaped:${"a".repeat(64)}`);
  });

  it("places the receipt under <baseDir>/<sha256(mission_id)>/<fingerprint>.json, not the raw mission_id", () => {
    const path = receiptFilePath("/tmp/receipts", "SB-X-1.0", "a".repeat(64));
    const expectedKey = computeMissionStorageKey("SB-X-1.0");
    expect(path).toBe(resolve("/tmp/receipts", expectedKey, `${"a".repeat(64)}.json`));
    expect(path).not.toContain("SB-X-1.0");
  });
});

describe("computeMissionStorageKey", () => {
  it("is a 64-character lowercase hex sha256 digest", () => {
    expect(computeMissionStorageKey("SB-X-1.0")).toMatch(/^[0-9a-f]{64}$/);
  });

  it("is deterministic for the same input", () => {
    expect(computeMissionStorageKey("../escaped")).toBe(computeMissionStorageKey("../escaped"));
  });

  it("produces a safe digest for every malicious input shape, uniformly", () => {
    const maliciousInputs = [
      "../escaped",
      "../../../etc/evil",
      "/etc/evil",
      "C:\\evil",
      "\\\\server\\share\\evil",
      "a/b/c",
      "a\\b\\c",
    ];
    for (const input of maliciousInputs) {
      const key = computeMissionStorageKey(input);
      expect(key).toMatch(/^[0-9a-f]{64}$/);
    }
  });

  it("distinguishes different mission identifiers", () => {
    expect(computeMissionStorageKey("SB-X-1.0")).not.toBe(computeMissionStorageKey("SB-Y-1.0"));
  });
});

describe("resolveContainedPath", () => {
  it("resolves a normal nested path inside baseDir", () => {
    const result = resolveContainedPath("/tmp/receipts", "abc", "def.json");
    expect(result).toBe(resolve("/tmp/receipts", "abc", "def.json"));
  });

  it("throws for a raw traversal segment, proving the containment layer works independently of hashing", () => {
    expect(() => resolveContainedPath("/tmp/receipts", "..", "escaped")).toThrow(
      /outside the configured base directory/,
    );
  });

  it("throws for a raw absolute segment", () => {
    expect(() => resolveContainedPath("/tmp/receipts", "/etc/evil")).toThrow();
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

describe("F-01 correction -- receipt storage cannot escape the configured directory", () => {
  function failedReceipt(missionId: string, overrides: Partial<Receipt> = {}): Receipt {
    const now = new Date().toISOString();
    return {
      schemaVersion: 1,
      receipt_id: computeReceiptId(missionId, "a".repeat(64)),
      mission_id: missionId,
      closure_revision: "REV-CODEX-1",
      run_id: newRunId(),
      source_fingerprint: "a".repeat(64),
      source_manifest: [],
      processing_state: "VALIDATION_FAILED",
      screening_result: null,
      failure_reason: "closure envelope failed schema validation",
      created_at: now,
      updated_at: now,
      ...overrides,
    } as Receipt;
  }

  /** Every top-level entry that exists directly under `dir`. */
  function topLevelEntries(dir: string): string[] {
    return existsSync(dir) ? readdirSync(dir) : [];
  }

  const maliciousIdentifiers = [
    "../escaped", // Codex's exact F-01 reproduction case
    "../../../etc/evil", // nested traversal
    "/etc/evil", // absolute POSIX-like
    "C:\\evil", // Windows drive-like
    "\\\\server\\share\\evil", // UNC-like
    "a/b/c", // POSIX separator
    "a\\b\\c", // Windows separator
  ];

  it.each(maliciousIdentifiers)(
    "writes and reads mission_id %j safely inside the configured receipts directory, never a sibling of it",
    (missionId) => {
      const tempRoot = mkdtempSync(join(tmpdir(), "ole-f01-test-"));
      const receiptsDir = join(tempRoot, "receipts");
      try {
        const beforeSiblings = topLevelEntries(tempRoot);

        const receipt = failedReceipt(missionId);
        writeReceipt(receiptsDir, receipt);

        // No new sibling of the configured receipts directory appeared --
        // this is the exact escape shape Codex reproduced
        // ("<tempRoot>/escaped" next to "<tempRoot>/receipts").
        const afterSiblings = topLevelEntries(tempRoot);
        expect(afterSiblings.sort()).toEqual([...new Set([...beforeSiblings, "receipts"])].sort());

        // The write did succeed, safely, inside the configured directory.
        const filePath = receiptFilePath(receiptsDir, missionId, "a".repeat(64));
        expect(filePath.startsWith(resolve(receiptsDir))).toBe(true);
        expect(existsSync(filePath)).toBe(true);

        // Truthful diagnostics: the payload still carries the exact
        // original malformed identifier (the accepted rule F-01 does not
        // reverse).
        const persisted = JSON.parse(readFileSync(filePath, "utf8"));
        expect(persisted.mission_id).toBe(missionId);

        // Lookup uses the same safe derivation as write.
        const read = readReceiptIfExists(receiptsDir, missionId, "a".repeat(64));
        expect(read?.mission_id).toBe(missionId);
      } finally {
        rmSync(tempRoot, { recursive: true, force: true });
      }
    },
  );

  it("remains deterministic/idempotent for repeated identical malformed input", () => {
    const tempRoot = mkdtempSync(join(tmpdir(), "ole-f01-test-"));
    const receiptsDir = join(tempRoot, "receipts");
    try {
      const missionId = "../escaped";
      const firstPath = receiptFilePath(receiptsDir, missionId, "a".repeat(64));
      const secondPath = receiptFilePath(receiptsDir, missionId, "a".repeat(64));
      expect(firstPath).toBe(secondPath);

      writeReceipt(receiptsDir, failedReceipt(missionId, { run_id: "run-1" }));
      writeReceipt(receiptsDir, failedReceipt(missionId, { run_id: "run-2" }));

      // The second write updated the same file in place -- no duplicate
      // receipt was created for the same malformed identifier + fingerprint.
      const key = computeMissionStorageKey(missionId);
      expect(topLevelEntries(join(receiptsDir, key))).toEqual([`${"a".repeat(64)}.json`]);
      const read = readReceiptIfExists(receiptsDir, missionId, "a".repeat(64));
      expect(read?.run_id).toBe("run-2");
    } finally {
      rmSync(tempRoot, { recursive: true, force: true });
    }
  });

  it("a normal, valid mission identifier is also placed only inside the configured directory (unchanged behavior)", () => {
    const tempRoot = mkdtempSync(join(tmpdir(), "ole-f01-test-"));
    const receiptsDir = join(tempRoot, "receipts");
    try {
      writeReceipt(receiptsDir, screenedReceipt());
      expect(topLevelEntries(tempRoot)).toEqual(["receipts"]);
      const read = readReceiptIfExists(receiptsDir, "SB-OPS-CI-ARCHITECTURE-1.0", "a".repeat(64));
      expect(read?.mission_id).toBe("SB-OPS-CI-ARCHITECTURE-1.0");
    } finally {
      rmSync(tempRoot, { recursive: true, force: true });
    }
  });

  describe("round 2 -- physical containment against pre-existing filesystem indirection", () => {
    it("fails closed on write when the derived mission storage directory is a pre-existing junction/symlink escaping the configured directory", () => {
      const tempRoot = mkdtempSync(join(tmpdir(), "ole-f01-physical-test-"));
      const receiptsDir = join(tempRoot, "linked-receipts");
      const redirectedTarget = join(tempRoot, "redirected");
      try {
        const missionId = "../escaped";
        const key = computeMissionStorageKey(missionId);
        // Plant the indirection BEFORE any write -- exactly Codex's
        // reproduction: an ordinary sibling directory exists, and the
        // *derived* mission storage directory is itself a link to it.
        plantDirectoryIndirection(join(receiptsDir, key), redirectedTarget);

        expect(() => writeReceipt(receiptsDir, failedReceipt(missionId))).toThrow(
          /filesystem indirection/,
        );

        // Nothing was actually written into the redirected sibling --
        // the escaping write never happened, it was refused before the
        // filesystem operation.
        expect(topLevelEntries(redirectedTarget)).toEqual([]);
      } finally {
        rmSync(tempRoot, { recursive: true, force: true });
      }
    });

    it("fails closed on lookup through the same pre-existing indirection", () => {
      const tempRoot = mkdtempSync(join(tmpdir(), "ole-f01-physical-test-"));
      const receiptsDir = join(tempRoot, "linked-receipts");
      const redirectedTarget = join(tempRoot, "redirected");
      try {
        const missionId = "../escaped";
        const key = computeMissionStorageKey(missionId);
        plantDirectoryIndirection(join(receiptsDir, key), redirectedTarget);

        // Even if a receipt were physically present at the redirected
        // location (e.g. planted directly, bypassing writeReceipt
        // entirely), lookup through the link must still fail closed
        // rather than transparently read through it.
        expect(() => readReceiptIfExists(receiptsDir, missionId, "a".repeat(64))).toThrow(
          /filesystem indirection/,
        );
      } finally {
        rmSync(tempRoot, { recursive: true, force: true });
      }
    });

    it("does not block an ordinary write to a fresh receipts tree with no pre-existing indirection", () => {
      const tempRoot = mkdtempSync(join(tmpdir(), "ole-f01-physical-test-"));
      const receiptsDir = join(tempRoot, "receipts");
      try {
        // No junction/symlink anywhere -- the trust root and everything
        // under it (if anything) are ordinary directories/files. This is
        // the overwhelmingly common case and must remain unaffected.
        writeReceipt(receiptsDir, screenedReceipt());
        const read = readReceiptIfExists(receiptsDir, "SB-OPS-CI-ARCHITECTURE-1.0", "a".repeat(64));
        expect(read?.processing_state).toBe("SCREENED");
      } finally {
        rmSync(tempRoot, { recursive: true, force: true });
      }
    });

    it("does not block a write when the receipts directory itself does not exist yet", () => {
      const tempRoot = mkdtempSync(join(tmpdir(), "ole-f01-physical-test-"));
      // Deliberately do not create receiptsDir at all beforehand -- the
      // very first write for any mission must still work.
      const receiptsDir = join(tempRoot, "brand-new-receipts");
      try {
        writeReceipt(receiptsDir, screenedReceipt());
        const read = readReceiptIfExists(receiptsDir, "SB-OPS-CI-ARCHITECTURE-1.0", "a".repeat(64));
        expect(read?.processing_state).toBe("SCREENED");
      } finally {
        rmSync(tempRoot, { recursive: true, force: true });
      }
    });

    it("still preserves the original ../escaped case as contained once the physical layer is active", () => {
      const tempRoot = mkdtempSync(join(tmpdir(), "ole-f01-physical-test-"));
      const receiptsDir = join(tempRoot, "receipts");
      try {
        const missionId = "../escaped";
        writeReceipt(receiptsDir, failedReceipt(missionId));
        expect(topLevelEntries(tempRoot)).toEqual(["receipts"]);
        const read = readReceiptIfExists(receiptsDir, missionId, "a".repeat(64));
        expect(read?.mission_id).toBe(missionId);
      } finally {
        rmSync(tempRoot, { recursive: true, force: true });
      }
    });
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
