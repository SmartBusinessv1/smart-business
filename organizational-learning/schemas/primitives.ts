// SB-ORG-LEARNING-1.1 Stage 1 -- Shared Zod primitives.
//
// One definition per recurring shape, reused by every schema file below,
// so a future tightening (or a discovered gap) is a one-line change
// instead of a multi-file hunt.

import { z } from "zod";
import { isSafeRelativePath } from "../lib/path-safety.ts";

/** This repository, fixed. Provenance may not silently point elsewhere. */
export const CANONICAL_REPOSITORY = "SmartBusinessv1/smart-business";

export const RepositorySchema = z.literal(CANONICAL_REPOSITORY);

/** A full, lowercase, 40-character hex Git object id (commit or blob). */
export const GitShaSchema = z
  .string()
  .regex(/^[0-9a-f]{40}$/, "must be a full 40-character lowercase hex SHA");

/**
 * A repository-relative path that has already passed structural safety
 * validation (see lib/path-safety.ts). This does NOT assert allowlist
 * eligibility -- see organizational-learning/sources/allowlist.ts for
 * that separate, narrower question (B3).
 */
export const SafeRelativePathSchema = z
  .string()
  .refine(isSafeRelativePath, { message: "path failed structural safety validation" });

/** SB-<...> mission identifiers, matching every mission ID observed in this repository. */
export const MissionIdSchema = z
  .string()
  .regex(/^SB-[A-Z0-9.-]+$/, "must be an SB-* mission identifier");

export const IsoDateTimeSchema = z.string().datetime({ offset: true });

/** Where a claim's evidence stands relative to that claim. */
export const EvidenceRelationshipSchema = z.enum(["SUPPORTS", "CONTRADICTS", "LIMITS"]);

/**
 * Who/what produced a reviewable observation. Note this enumerates who
 * may appear as an evidence *reporter* generally (used by the provenance
 * contract); it is intentionally broader than who may *generate* a
 * candidate learning item (see candidate-learning-item.schema.ts, which
 * fixes that to "synthesis" only) or who may *approve* a promotion (see
 * promotion-review.schema.ts, which restricts to human authority).
 */
export const ActorClassSchema = z.enum([
  "founder",
  "mission-control",
  "builder",
  "specialist",
  "verifier",
  "ci",
  "operator",
  "historical",
  "synthesis",
]);
