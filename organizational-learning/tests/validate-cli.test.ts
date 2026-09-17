// SB-ORG-LEARNING-1.1 Stage 1 -- validate.mjs CLI tests.
import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { runValidate } from "../scripts/validate.mjs";

let workDir: string | null = null;

afterEach(() => {
  if (workDir) rmSync(workDir, { recursive: true, force: true });
  workDir = null;
});

function writeJson(value: unknown): string {
  workDir = workDir ?? mkdtempSync(join(tmpdir(), "ole-validate-cli-test-"));
  const filePath = join(workDir, "input.json");
  writeFileSync(filePath, JSON.stringify(value), "utf8");
  return filePath;
}

describe("runValidate", () => {
  it("requires a known schema name", () => {
    const result = runValidate(["not-a-real-schema", writeJson({})]);
    expect(result.exitCode).toBe(1);
    expect(result.message).toContain("must be one of");
  });

  it("requires a file path", () => {
    const result = runValidate(["receipt"]);
    expect(result.exitCode).toBe(1);
    expect(result.message).toContain("<path.json>");
  });

  it("reports PASS for a valid closure-envelope", () => {
    const filePath = writeJson({
      schemaVersion: 1,
      mission_id: "SB-TEST-FIXTURE-1.0",
      mission_class: "operational",
      closure_revision: "REV-1",
      final_disposition: "ACCEPTED",
      accepted_scope: "test",
      acceptance_refs: [],
      closure_refs: ["communication/missions/SB-TEST-FIXTURE-1.0/README.md"],
      retained_followups: [],
      source_snapshot_ref: "a".repeat(40),
      reopens: null,
      supersedes_closure: null,
    });
    const result = runValidate(["closure-envelope", filePath]);
    expect(result.exitCode).toBe(0);
    expect(result.message).toContain("PASS");
  });

  it("reports FAIL with issue detail for an invalid closure-envelope", () => {
    const filePath = writeJson({ mission_id: "not-valid" });
    const result = runValidate(["closure-envelope", filePath]);
    expect(result.exitCode).toBe(1);
    expect(result.message).toContain("FAIL");
  });

  it("reports a clear error for malformed JSON, distinct from a read failure", () => {
    workDir = mkdtempSync(join(tmpdir(), "ole-validate-cli-test-"));
    const filePath = join(workDir, "bad.json");
    writeFileSync(filePath, "{ not valid json", "utf8");
    const result = runValidate(["receipt", filePath]);
    expect(result.exitCode).toBe(1);
    expect(result.message).toContain("not valid JSON");
  });

  it("reports a clear error for a file that cannot be read at all", () => {
    workDir = mkdtempSync(join(tmpdir(), "ole-validate-cli-test-"));
    const filePath = join(workDir, "does-not-exist.json");
    const result = runValidate(["receipt", filePath]);
    expect(result.exitCode).toBe(1);
    expect(result.message).toContain("could not read file");
  });

  it("F-03: never echoes a secret-like canary from malformed JSON into the returned diagnostic", () => {
    workDir = mkdtempSync(join(tmpdir(), "ole-validate-cli-test-"));
    const filePath = join(workDir, "malformed-with-canary.json");
    const canary = "AKIA0000000000000000";
    // Deliberately malformed (unterminated), containing only a synthetic,
    // obviously-fake AWS-access-key-shaped canary -- never a real secret.
    writeFileSync(filePath, `{"leaked": "${canary}"`, "utf8");

    const result = runValidate(["receipt", filePath]);

    expect(result.exitCode).toBe(1);
    expect(result.message).not.toContain(canary);
  });
});
