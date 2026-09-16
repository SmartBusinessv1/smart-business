// SB-ORG-LEARNING-1.1 Stage 1 -- source allowlist tests.
import { describe, it, expect } from "vitest";
import {
  isAllowlistedSourcePath,
  isLiveCommunicationPath,
  isEligibleSourcePath,
} from "../sources/allowlist.ts";

describe("isAllowlistedSourcePath", () => {
  it("allows a durable mission-record path", () => {
    expect(isAllowlistedSourcePath("communication/missions/SB-ORG-LEARNING-1.0/README.md")).toBe(
      true,
    );
  });

  it("allows an archived communication path", () => {
    expect(
      isAllowlistedSourcePath("communication/archive/SB-OPS-CI-ARCHITECTURE-1.0/report.md"),
    ).toBe(true);
  });

  it("rejects communication/live/** even though it shares the communication/ root", () => {
    expect(isAllowlistedSourcePath("communication/live/instruction.md")).toBe(false);
    expect(isAllowlistedSourcePath("communication/live/report.md")).toBe(false);
  });

  it("rejects governance context paths -- evidence-only allowlist, not a context loader", () => {
    expect(isAllowlistedSourcePath("merge/active/17_AI_Operations_Manual.md")).toBe(false);
  });

  it("rejects an unrelated repository path", () => {
    expect(isAllowlistedSourcePath("src/routes/index.tsx")).toBe(false);
    expect(isAllowlistedSourcePath(".env")).toBe(false);
    expect(isAllowlistedSourcePath("supabase/migrations/0001.sql")).toBe(false);
  });

  it("is case-sensitive, so an ambiguous-case alias fails closed", () => {
    expect(isAllowlistedSourcePath("Communication/Missions/x/README.md")).toBe(false);
    expect(isAllowlistedSourcePath("COMMUNICATION/MISSIONS/x/README.md")).toBe(false);
  });

  it("does not allow a prefix look-alike that is not actually under the allowlisted directory", () => {
    // "communication/missions-decoy/" starts with "communication/" but not
    // with the exact "communication/missions/" prefix.
    expect(isAllowlistedSourcePath("communication/missions-decoy/x")).toBe(false);
  });
});

describe("isLiveCommunicationPath", () => {
  it("identifies communication/live/** specifically", () => {
    expect(isLiveCommunicationPath("communication/live/instruction.md")).toBe(true);
    expect(isLiveCommunicationPath("communication/missions/x/README.md")).toBe(false);
  });
});

describe("isEligibleSourcePath", () => {
  it("requires both structural safety and allowlist membership", () => {
    expect(isEligibleSourcePath("communication/missions/x/README.md")).toBe(true);
    // Allowlisted prefix, but unsafe (traversal) -- must fail closed.
    expect(isEligibleSourcePath("communication/missions/../live/instruction.md")).toBe(false);
    // Safe, but not allowlisted.
    expect(isEligibleSourcePath("src/index.ts")).toBe(false);
  });
});
