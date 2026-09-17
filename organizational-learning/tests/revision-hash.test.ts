// SB-ORG-LEARNING-1.1 Stage 1 -- canonical revision-hash tests.
import { describe, it, expect } from "vitest";
import { computeRevisionHash } from "../lib/revision-hash.ts";

describe("computeRevisionHash", () => {
  it("is a 64-character hex sha256 digest", () => {
    expect(computeRevisionHash({ a: 1 })).toMatch(/^[0-9a-f]{64}$/);
  });

  it("is independent of object key order", () => {
    const a = computeRevisionHash({ a: 1, b: 2, c: [1, 2, 3] });
    const b = computeRevisionHash({ c: [1, 2, 3], a: 1, b: 2 });
    expect(a).toBe(b);
  });

  it("is independent of nested object key order", () => {
    const a = computeRevisionHash({ outer: { x: 1, y: 2 } });
    const b = computeRevisionHash({ outer: { y: 2, x: 1 } });
    expect(a).toBe(b);
  });

  it("is sensitive to array order (arrays are not sorted)", () => {
    const a = computeRevisionHash({ items: [1, 2, 3] });
    const b = computeRevisionHash({ items: [3, 2, 1] });
    expect(a).not.toBe(b);
  });

  it("changes when any value changes", () => {
    const a = computeRevisionHash({ text: "the same claim" });
    const b = computeRevisionHash({ text: "the same claim." });
    expect(a).not.toBe(b);
  });
});
