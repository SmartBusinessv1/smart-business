// SB-ORG-LEARNING-1.1 Stage 1 -- Deterministic content-revision hashing.
//
// B7 requires promotion to "bind to the exact item revision" such that
// "any material content change invalidates approval of the prior
// revision." This module provides the one canonicalization+hash function
// used to compute that revision identity, so candidate and promotion
// code never each grow their own (potentially divergent) notion of
// "the same content."
//
// Canonicalization here means: recursively sort object keys before
// JSON-serializing, so two structurally-identical objects with fields in
// a different order hash identically. Arrays keep their given order --
// order is meaningful there (e.g. an ordered list of claims).

import { createHash } from "node:crypto";

function canonicalize(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(canonicalize);
  }
  if (value !== null && typeof value === "object") {
    const sortedKeys = Object.keys(value as Record<string, unknown>).sort();
    const result: Record<string, unknown> = {};
    for (const key of sortedKeys) {
      result[key] = canonicalize((value as Record<string, unknown>)[key]);
    }
    return result;
  }
  return value;
}

/** Stable SHA-256 hex digest of `value`'s canonical JSON form. */
export function computeRevisionHash(value: unknown): string {
  const canonicalJson = JSON.stringify(canonicalize(value));
  return createHash("sha256").update(canonicalJson, "utf8").digest("hex");
}
