// SB-ORG-LEARNING-1.1 Stage 1 -- Claim-level provenance contract.
//
// B2 correction: "Every reusable claim must carry enough information to
// answer: what exact evidence supports this exact claim?" Provenance is
// therefore modeled per-claim (see candidate-learning-item.schema.ts),
// not as one item-level blob -- a single candidate may make several
// claims of differing evidentiary strength.
//
// This schema validates SHAPE only: that a reference identifies an exact
// repository/commit/path/blob/locator and a real relationship. It
// deliberately does NOT verify that the referenced blob actually exists
// at that path in that commit -- that requires I/O against the pinned
// commit and is implemented in lib/provenance-validator.ts, layered on
// top of this schema and lib/git-object-reader.ts (a Zod refinement
// validates the value given to it; it cannot reach into git). A
// reference that is well-shaped but points at nothing real is
// "dangling" -- see `validateProvenanceReference` there.
//
// Note what is deliberately absent: nothing here records *who committed*
// the referenced file. B2: "git authorship does not prove decision
// authority" -- so this contract never asks for or trusts git-author
// identity as an authority signal. `actor_class` records who is making
// *this observation*, not who authored the underlying file.

import { z } from "zod";
import {
  ActorClassSchema,
  EvidenceRelationshipSchema,
  GitShaSchema,
  IsoDateTimeSchema,
  RepositorySchema,
  SafeRelativePathSchema,
} from "./primitives.ts";

export const EvidenceScopeSchema = z
  .object({
    mission_ids: z.array(z.string()).default([]),
    systems: z.array(z.string()).default([]),
    environments: z.array(z.string()).default([]),
  })
  .strict();

export const EvidenceReferenceSchema = z
  .object({
    repository: RepositorySchema,
    commit_sha: GitShaSchema,
    path: SafeRelativePathSchema,
    blob_sha: GitShaSchema,
    locator: z.string().min(1).max(500),
    actor_class: ActorClassSchema,
    observation_date: IsoDateTimeSchema.optional(),
    evidence_date: IsoDateTimeSchema.optional(),
    scope: EvidenceScopeSchema,
    relationship: EvidenceRelationshipSchema,
  })
  .strict();

export type EvidenceReference = z.infer<typeof EvidenceReferenceSchema>;
export type EvidenceScope = z.infer<typeof EvidenceScopeSchema>;

/**
 * Two evidence references are the "same underlying source" when they
 * point at the same exact (commit_sha, path, blob_sha) triple. B2: "
 * summaries citing the same underlying source do not count as
 * independent corroboration." This predicate only identifies sameness;
 * deciding what to do about non-independent corroboration is retrieval
 * logic for a later stage (deliberately deferred -- see Stage 1 report).
 */
export function isSameUnderlyingSource(a: EvidenceReference, b: EvidenceReference): boolean {
  return a.commit_sha === b.commit_sha && a.path === b.path && a.blob_sha === b.blob_sha;
}

export type DanglingCheckResult =
  | { status: "VALID" }
  | { status: "DANGLING"; reason: "PATH_NOT_FOUND_AT_COMMIT" }
  | { status: "DANGLING"; reason: "BLOB_SHA_MISMATCH"; actualBlobSha: string }
  | { status: "DANGLING"; reason: "COMMIT_NOT_FOUND" }
  | { status: "DANGLING"; reason: "NOT_A_REGULAR_FILE"; actualMode: string };
