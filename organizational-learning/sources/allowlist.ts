// SB-ORG-LEARNING-1.1 Stage 1 -- Source allowlist.
//
// B3 correction: "An allowlisted path means eligible to inspect, not
// automatically authoritative." This module answers exactly one
// question -- is this path in a class the harvester may read bytes from
// at all -- and nothing more. Authoritative selection within an eligible
// class still requires a closure-envelope reference (see scripts/
// harvest.mjs); this module never sees or grants authority.
//
// Deliberately narrow for Stage 1: only the two evidence classes the
// final reconciled build plan's evidence order names as harvestable
// evidence (durable mission records and their archived, reconciled
// history). `merge/active/**` (current governance) is named in that same
// evidence order as authority *context*, not evidence to extract
// candidate lessons from, so it is intentionally excluded from this
// evidence allowlist -- treating governance text as harvested "evidence"
// would itself blur the evidence/authority line this engine exists to
// protect. Expanding the allowlist is a Mission Control decision for a
// later stage, not something this module should widen speculatively.
//
// `communication/live/**` is the one class the build plan and Stage 1
// instruction both name explicitly as excluded, so it gets its own named
// predicate in addition to simply being absent from the allowlist --
// this keeps the exclusion visible and independently testable rather
// than an implicit consequence of an allowlist someone could edit later
// without noticing what they removed.

import { isSafeRelativePath } from "../lib/path-safety.ts";

export const ALLOWLISTED_SOURCE_PREFIXES = [
  "communication/missions/",
  "communication/archive/",
] as const;

export const HARD_EXCLUDED_SOURCE_PREFIXES = ["communication/live/"] as const;

/** True only for paths under communication/live/ (by prefix, case-sensitive, exact). */
export function isLiveCommunicationPath(safeRelativePath: string): boolean {
  return HARD_EXCLUDED_SOURCE_PREFIXES.some((prefix) => safeRelativePath.startsWith(prefix));
}

/**
 * True only if `safeRelativePath` falls under one of the approved
 * evidence-class prefixes and is not under a hard-excluded prefix.
 *
 * Case-sensitive, exact-prefix matching by design: this is what makes an
 * ambiguous-case alias (e.g. "Communication/Missions/x") fail closed with
 * no bespoke case-normalization logic to get wrong.
 *
 * Callers must pass a path that has already passed `isSafeRelativePath`;
 * this function does not re-validate syntactic safety.
 */
export function isAllowlistedSourcePath(safeRelativePath: string): boolean {
  if (isLiveCommunicationPath(safeRelativePath)) return false;
  return ALLOWLISTED_SOURCE_PREFIXES.some((prefix) => safeRelativePath.startsWith(prefix));
}

/** Combined gate: syntactically safe AND allowlist-eligible. */
export function isEligibleSourcePath(input: unknown): input is string {
  if (!isSafeRelativePath(input)) return false;
  return isAllowlistedSourcePath(input);
}
