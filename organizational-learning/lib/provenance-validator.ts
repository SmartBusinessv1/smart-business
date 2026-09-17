// SB-ORG-LEARNING-1.1 Stage 1 correction -- Runtime dangling-provenance validation.
//
// Mission Control substantive review (communication/missions/
// SB-ORG-LEARNING-1.1/mission-control/04-stage1-substantive-review.md,
// Section 2): schema validation alone proves an EvidenceReference is
// well-*shaped*, not that it is real. B2 requires fabricated or
// unresolved evidence references to fail validation -- this module is
// the runtime check that actually resolves a reference's claimed
// `commit_sha + path + blob_sha` against the pinned committed object and
// proves it either matches or does not, using only the existing
// committed-Git-object reader (no new git-shelling logic, no new
// dependency).
//
// Deliberately narrow: this composes `resolveBlobAtPath` (already
// verified against real git 2.55 mode/type behavior in
// lib/git-object-reader.ts) into the five-way distinction the correction
// requires. It does not implement corroboration/cycle/graph logic --
// that remains a later-stage concern operating over a populated registry
// (see the Stage 1 report's "Unresolved risks" section).

import { resolveBlobAtPath } from "./git-object-reader.ts";
import type { DanglingCheckResult, EvidenceReference } from "../schemas/provenance.schema.ts";

/**
 * Resolves `reference`'s claimed evidence against the pinned committed
 * object it names, and reports exactly which of the five states applies:
 * valid exact reference, commit not found, path not found at that
 * commit, a non-regular object (directory/symlink/submodule) at that
 * path, or a resolvable path whose actual blob SHA does not match the
 * one the reference claims.
 *
 * `repoRoot` is always caller-supplied (never implicitly "this
 * repository"), matching every other function in lib/git-object-reader.ts
 * -- this is what makes the function usable against isolated ephemeral
 * test repositories without touching the real working tree.
 */
export function validateProvenanceReference(
  repoRoot: string,
  reference: Pick<EvidenceReference, "commit_sha" | "path" | "blob_sha">,
): DanglingCheckResult {
  const resolved = resolveBlobAtPath(repoRoot, reference.commit_sha, reference.path);

  switch (resolved.status) {
    case "COMMIT_NOT_FOUND":
      return { status: "DANGLING", reason: "COMMIT_NOT_FOUND" };
    case "NOT_FOUND":
      return { status: "DANGLING", reason: "PATH_NOT_FOUND_AT_COMMIT" };
    case "NOT_A_REGULAR_FILE":
      return { status: "DANGLING", reason: "NOT_A_REGULAR_FILE", actualMode: resolved.mode };
    case "OK":
      if (resolved.entry.blobSha !== reference.blob_sha) {
        return {
          status: "DANGLING",
          reason: "BLOB_SHA_MISMATCH",
          actualBlobSha: resolved.entry.blobSha,
        };
      }
      return { status: "VALID" };
  }
}
