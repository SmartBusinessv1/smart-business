// SB-ORG-LEARNING-1.1 Stage 1 -- Deterministic source fingerprint.
//
// B7: "Use a deterministic source fingerprint based on sorted
// path@blobSHA pairs plus closure revision and schema version.
// Unchanged input -> deterministic no-op / already-processed result.
// Changed authoritative closure revision -> new processing revision."
//
// This is the one piece of idempotency identity: given the same
// (schemaVersion, closure_revision, manifest) triple, this function
// always returns the same fingerprint, regardless of manifest entry
// order -- callers do not need to pre-sort.

import { createHash } from "node:crypto";

export interface ManifestEntry {
  path: string;
  blobSha: string;
}

/**
 * Sorts `manifest` by path (byte-order) and returns the sorted array.
 * Exposed separately from `computeSourceFingerprint` because the sorted
 * manifest is itself persisted in the receipt (B7: the receipt binds the
 * exact source snapshot identity, not just its hash).
 */
export function sortManifest(manifest: readonly ManifestEntry[]): ManifestEntry[] {
  return [...manifest].sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0));
}

export function computeSourceFingerprint(params: {
  schemaVersion: number;
  closureRevision: string;
  manifest: readonly ManifestEntry[];
}): string {
  const sorted = sortManifest(params.manifest);
  const lines = sorted.map((entry) => `${entry.path}@${entry.blobSha}`);
  const payload = [String(params.schemaVersion), params.closureRevision, ...lines].join("\n");
  return createHash("sha256").update(payload, "utf8").digest("hex");
}
