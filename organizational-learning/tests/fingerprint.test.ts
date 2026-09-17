// SB-ORG-LEARNING-1.1 Stage 1 -- deterministic source fingerprint tests.
import { describe, it, expect } from "vitest";
import { computeSourceFingerprint, sortManifest } from "../lib/fingerprint.ts";

const A = { path: "communication/missions/a/README.md", blobSha: "a".repeat(40) };
const B = { path: "communication/missions/b/README.md", blobSha: "b".repeat(40) };

describe("computeSourceFingerprint", () => {
  it("is a 64-character hex sha256 digest", () => {
    const fingerprint = computeSourceFingerprint({
      schemaVersion: 1,
      closureRevision: "REV-1",
      manifest: [A],
    });
    expect(fingerprint).toMatch(/^[0-9a-f]{64}$/);
  });

  it("is deterministic for the same input", () => {
    const params = { schemaVersion: 1, closureRevision: "REV-1", manifest: [A, B] };
    expect(computeSourceFingerprint(params)).toBe(computeSourceFingerprint(params));
  });

  it("is independent of manifest entry order", () => {
    const forward = computeSourceFingerprint({
      schemaVersion: 1,
      closureRevision: "REV-1",
      manifest: [A, B],
    });
    const reversed = computeSourceFingerprint({
      schemaVersion: 1,
      closureRevision: "REV-1",
      manifest: [B, A],
    });
    expect(forward).toBe(reversed);
  });

  it("changes when the closure revision changes", () => {
    const rev1 = computeSourceFingerprint({
      schemaVersion: 1,
      closureRevision: "REV-1",
      manifest: [A],
    });
    const rev2 = computeSourceFingerprint({
      schemaVersion: 1,
      closureRevision: "REV-2",
      manifest: [A],
    });
    expect(rev1).not.toBe(rev2);
  });

  it("changes when the schema version changes", () => {
    const v1 = computeSourceFingerprint({
      schemaVersion: 1,
      closureRevision: "REV-1",
      manifest: [A],
    });
    const v2 = computeSourceFingerprint({
      schemaVersion: 2,
      closureRevision: "REV-1",
      manifest: [A],
    });
    expect(v1).not.toBe(v2);
  });

  it("changes when a blob sha changes (content changed under the same path)", () => {
    const original = computeSourceFingerprint({
      schemaVersion: 1,
      closureRevision: "REV-1",
      manifest: [A],
    });
    const changed = computeSourceFingerprint({
      schemaVersion: 1,
      closureRevision: "REV-1",
      manifest: [{ path: A.path, blobSha: "c".repeat(40) }],
    });
    expect(original).not.toBe(changed);
  });

  it("changes when the manifest is empty vs. non-empty", () => {
    const empty = computeSourceFingerprint({
      schemaVersion: 1,
      closureRevision: "REV-1",
      manifest: [],
    });
    const nonEmpty = computeSourceFingerprint({
      schemaVersion: 1,
      closureRevision: "REV-1",
      manifest: [A],
    });
    expect(empty).not.toBe(nonEmpty);
  });
});

describe("sortManifest", () => {
  it("sorts by path without mutating the input", () => {
    const input = [B, A];
    const sorted = sortManifest(input);
    expect(sorted).toEqual([A, B]);
    expect(input).toEqual([B, A]);
  });
});
