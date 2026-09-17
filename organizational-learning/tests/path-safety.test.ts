// SB-ORG-LEARNING-1.1 Stage 1 -- path-safety tests.
import { describe, it, expect } from "vitest";
import { isSafeRelativePath, explainPathSafetyViolation } from "../lib/path-safety.ts";

describe("isSafeRelativePath", () => {
  it("accepts a normal repository-relative path", () => {
    expect(isSafeRelativePath("communication/missions/SB-ORG-LEARNING-1.0/README.md")).toBe(true);
  });

  it("rejects a non-string input", () => {
    expect(isSafeRelativePath(undefined)).toBe(false);
    expect(isSafeRelativePath(null)).toBe(false);
    expect(isSafeRelativePath(42)).toBe(false);
  });

  it("rejects an empty string", () => {
    expect(isSafeRelativePath("")).toBe(false);
  });

  it("rejects path traversal", () => {
    expect(isSafeRelativePath("communication/../../../etc/passwd")).toBe(false);
    expect(isSafeRelativePath("../secret.env")).toBe(false);
    expect(isSafeRelativePath("communication/missions/..")).toBe(false);
  });

  it("rejects a lone dot segment", () => {
    expect(isSafeRelativePath("communication/./missions")).toBe(false);
  });

  it("rejects an absolute POSIX path", () => {
    expect(isSafeRelativePath("/etc/passwd")).toBe(false);
  });

  it("rejects a POSIX-style UNC path", () => {
    expect(isSafeRelativePath("//server/share/file")).toBe(false);
  });

  it("rejects a Windows drive-letter path", () => {
    expect(isSafeRelativePath("C:/Windows/System32")).toBe(false);
    expect(isSafeRelativePath("c:\\Windows\\System32")).toBe(false);
  });

  it("rejects any backslash, including a Windows-style UNC path", () => {
    expect(isSafeRelativePath("\\\\server\\share\\file")).toBe(false);
    expect(isSafeRelativePath("communication\\missions\\x")).toBe(false);
  });

  it("rejects a null byte and other control characters", () => {
    expect(isSafeRelativePath("communication/missions/x\u0000.md")).toBe(false);
    expect(isSafeRelativePath("communication/missions/x\ty")).toBe(false);
  });

  it("rejects percent-encoded segments", () => {
    expect(isSafeRelativePath("communication/%2e%2e/secret")).toBe(false);
  });

  it("rejects a doubled slash (empty segment)", () => {
    expect(isSafeRelativePath("communication//missions")).toBe(false);
  });

  it("rejects a trailing slash (empty final segment)", () => {
    expect(isSafeRelativePath("communication/missions/")).toBe(false);
  });

  it("rejects a non-NFC-normalized path", () => {
    // "e" + combining acute accent (NFD) vs. the precomposed "é" (NFC).
    const nfd = "communication/missions/cafe\u0301/README.md";
    expect(nfd.normalize("NFC")).not.toBe(nfd);
    expect(isSafeRelativePath(nfd)).toBe(false);
  });

  it("rejects an overly long path", () => {
    expect(isSafeRelativePath(`communication/missions/${"a".repeat(2000)}`)).toBe(false);
  });
});

describe("explainPathSafetyViolation", () => {
  it("returns null for a safe path", () => {
    expect(explainPathSafetyViolation("communication/missions/x/README.md")).toBeNull();
  });

  it("names the specific violation", () => {
    expect(explainPathSafetyViolation("/etc/passwd")).toBe("ABSOLUTE_OR_UNC");
    expect(explainPathSafetyViolation("C:/x")).toBe("DRIVE_LETTER");
    expect(explainPathSafetyViolation("a\\b")).toBe("BACKSLASH");
    expect(explainPathSafetyViolation("a/../b")).toBe("EMPTY_OR_DOT_SEGMENT");
    expect(explainPathSafetyViolation("a/%2e%2e/b")).toBe("PERCENT_ENCODED");
    expect(explainPathSafetyViolation(123)).toBe("NOT_A_STRING");
  });
});
