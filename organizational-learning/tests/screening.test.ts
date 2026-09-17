// SB-ORG-LEARNING-1.1 Stage 1 -- screening/quarantine fail-closed tests.
import { describe, it, expect } from "vitest";
import { runHeuristicScan, runScreeningSafely, DEFAULT_SECRET_PATTERNS } from "../lib/screening.ts";

describe("runHeuristicScan", () => {
  it("returns CLEAN for ordinary content", () => {
    const result = runHeuristicScan([
      { path: "a.md", content: "just some ordinary markdown text" },
    ]);
    expect(result.status).toBe("CLEAN");
    expect(result.findings).toEqual([]);
    expect(result.scanned_path_count).toBe(1);
  });

  it("quarantines a JWT-shaped string without echoing it", () => {
    const jwt =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U";
    const result = runHeuristicScan([{ path: "communication/live/report1.57.md", content: jwt }]);
    expect(result.status).toBe("QUARANTINED");
    expect(result.findings).toEqual([{ path: "communication/live/report1.57.md", rule_id: "jwt" }]);
    expect(JSON.stringify(result)).not.toContain(jwt);
  });

  it("quarantines a PEM private-key header", () => {
    const result = runHeuristicScan([
      {
        path: "a.md",
        content: "-----BEGIN RSA PRIVATE KEY-----\nMIIB...\n-----END RSA PRIVATE KEY-----",
      },
    ]);
    expect(result.status).toBe("QUARANTINED");
    expect(result.findings[0].rule_id).toBe("pem-private-key");
  });

  it("quarantines an AWS access key id", () => {
    const result = runHeuristicScan([{ path: "a.md", content: "key=AKIAABCDEFGHIJKLMNOP" }]);
    expect(result.status).toBe("QUARANTINED");
    expect(result.findings[0].rule_id).toBe("aws-access-key-id");
  });

  it("aggregates findings across multiple files", () => {
    const result = runHeuristicScan([
      { path: "clean.md", content: "nothing here" },
      { path: "dirty.md", content: "key=AKIAABCDEFGHIJKLMNOP" },
    ]);
    expect(result.status).toBe("QUARANTINED");
    expect(result.scanned_path_count).toBe(2);
    expect(result.findings).toHaveLength(1);
    expect(result.findings[0].path).toBe("dirty.md");
  });

  it("uses exactly the three documented default patterns", () => {
    expect(DEFAULT_SECRET_PATTERNS.map((p) => p.ruleId).sort()).toEqual([
      "aws-access-key-id",
      "jwt",
      "pem-private-key",
    ]);
  });
});

describe("runScreeningSafely", () => {
  it("passes through a CLEAN result unchanged", () => {
    const result = runScreeningSafely(
      () => ({ status: "CLEAN", findings: [], scanned_path_count: 0 }),
      [],
    );
    expect(result.status).toBe("CLEAN");
  });

  it("converts a thrown exception into SCANNER_FAILED, never CLEAN", () => {
    const result = runScreeningSafely(() => {
      throw new Error("scanner crashed");
    }, []);
    expect(result.status).toBe("SCANNER_FAILED");
  });

  it("converts a non-function scanner into SCANNER_UNKNOWN", () => {
    // @ts-expect-error -- deliberately wrong type for the test
    const result = runScreeningSafely(undefined, []);
    expect(result.status).toBe("SCANNER_UNKNOWN");
  });

  it("converts a malformed result shape into SCANNER_UNKNOWN, not a crash", () => {
    // @ts-expect-error -- deliberately malformed for the test
    const result = runScreeningSafely(() => ({ status: "TOTALLY_FINE" }), []);
    expect(result.status).toBe("SCANNER_UNKNOWN");
  });

  it("converts a result with a non-array findings field into SCANNER_UNKNOWN", () => {
    const result = runScreeningSafely(
      // @ts-expect-error -- deliberately malformed for the test
      () => ({ status: "CLEAN", findings: "none", scanned_path_count: 0 }),
      [],
    );
    expect(result.status).toBe("SCANNER_UNKNOWN");
  });

  it("uses the real heuristic scanner correctly when composed", () => {
    const result = runScreeningSafely(runHeuristicScan, [{ path: "a.md", content: "clean text" }]);
    expect(result.status).toBe("CLEAN");
  });
});
