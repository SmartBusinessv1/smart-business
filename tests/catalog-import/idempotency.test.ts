// EIS §45.5.5 (row idempotency) extended to the follow-up commercial-field
// commands (Build Mode decision documented in communication/live/report1.84.md).
import { describe, it, expect } from "vitest";
import { deriveFollowUpIdempotencyKey } from "@/lib/catalog-import/idempotency";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

describe("deriveFollowUpIdempotencyKey", () => {
  it("produces a valid RFC 4122 UUIDv5", () => {
    const key = deriveFollowUpIdempotencyKey("11111111-1111-1111-1111-111111111111", "tax");
    expect(key).toMatch(UUID_RE);
  });

  it("is deterministic: the same inputs always derive the same key (retry-safe)", () => {
    const a = deriveFollowUpIdempotencyKey("11111111-1111-1111-1111-111111111111", "selling_price");
    const b = deriveFollowUpIdempotencyKey("11111111-1111-1111-1111-111111111111", "selling_price");
    expect(a).toBe(b);
  });

  it("derives a distinct key per operation for the same row", () => {
    const price = deriveFollowUpIdempotencyKey("11111111-1111-1111-1111-111111111111", "selling_price");
    const tax = deriveFollowUpIdempotencyKey("11111111-1111-1111-1111-111111111111", "tax");
    const cost = deriveFollowUpIdempotencyKey("11111111-1111-1111-1111-111111111111", "reference_cost");
    expect(new Set([price, tax, cost]).size).toBe(3);
  });

  it("derives a distinct key for a different row's same operation", () => {
    const a = deriveFollowUpIdempotencyKey("11111111-1111-1111-1111-111111111111", "tax");
    const b = deriveFollowUpIdempotencyKey("22222222-2222-2222-2222-222222222222", "tax");
    expect(a).not.toBe(b);
  });
});
