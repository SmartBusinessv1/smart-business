// SB-P-1.11-GC-1 — Deterministic secondary idempotency keys.
//
// EIS §45.5.5 locks one idempotency key per row, reused verbatim for the
// row's create_catalog_product call. It does not address rows that also
// carry a selling price, tax setting, or reference cost -- each of those
// is its own separately-authorized command (record_catalog_selling_price_
// change, record_catalog_tax_change, record_catalog_reference_cost_change)
// per the existing, unmodified Catalog command surface (EIS §45.7), and
// each requires its own idempotency key distinct from the row's product-
// creation key.
//
// This derives a stable, deterministic key per (row_idempotency_key,
// operation) pair using RFC 4122 UUIDv5 -- the same input always produces
// the same key, so a retried commit reuses it exactly like the row's
// primary key, without adding a new dependency (the "uuid" package is not
// among the locked EIS §45.2 dependencies) or a new persisted column.
import { createHash } from "node:crypto";

// Fixed, arbitrary namespace UUID for this application's derived
// idempotency keys. Never changes -- changing it would break idempotency
// for any in-flight retried commit.
const NAMESPACE = "6d2f0a3e-6b9b-4c0e-9b8a-8f2f2e6b7c1a";

function uuidToBytes(uuid: string): Buffer {
  return Buffer.from(uuid.replace(/-/g, ""), "hex");
}

function bytesToUuid(bytes: Buffer): string {
  const hex = bytes.toString("hex");
  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20, 32),
  ].join("-");
}

export type ImportFollowUpOperation = "selling_price" | "tax" | "reference_cost";

/** Deterministic UUIDv5(namespace, rowIdempotencyKey + ":" + operation). */
export function deriveFollowUpIdempotencyKey(
  rowIdempotencyKey: string,
  operation: ImportFollowUpOperation,
): string {
  const hash = createHash("sha1");
  hash.update(uuidToBytes(NAMESPACE));
  hash.update(`${rowIdempotencyKey}:${operation}`, "utf-8");
  const digest = hash.digest();
  const bytes = Buffer.from(digest.subarray(0, 16));
  bytes[6] = (bytes[6] & 0x0f) | 0x50; // version 5
  bytes[8] = (bytes[8] & 0x3f) | 0x80; // variant RFC 4122
  return bytesToUuid(bytes);
}
