// SB-ORG-LEARNING-1.1 Stage 4A F-01 correction -- approved closure-envelope
// location boundary.
//
// Mission Control finding: `ClosureEnvelopeSchema` validity and evidence
// allowlisting (sources/allowlist.ts) each answer a narrow question --
// "is this JSON shaped like a closure envelope" and "is this referenced
// evidence path eligible to inspect" -- and neither one answers "is this
// envelope FILE itself located somewhere Mission Control actually
// designated as an authoritative place closure envelopes are produced."
// A schema-valid envelope dropped at an arbitrary repository path (or
// supplied via an arbitrary --envelopes-dir) must not be able to create
// reconciliation work merely because it parses and its evidence happens
// to be allowlisted.
//
// This module is deliberately independent of sources/allowlist.ts -- it
// imports nothing from it and is never derived from it -- so that
// widening the evidence allowlist can never silently widen envelope
// location approval, or vice versa. It never reads file content: this is
// a location decision only, made before a candidate file is ever opened.
//
// Deliberately narrow: closure envelopes are mission deliverables, and
// the one repository-native place a mission deliverable is durably
// recorded today is communication/missions/**. The check is evaluated
// relative to whatever `repoRoot` the caller supplies -- the real
// checkout in production (via `git rev-parse --show-toplevel`), an
// isolated ephemeral repository in tests -- so the identical boundary
// logic runs in both, never against a hardcoded absolute machine path.

import { relative } from "node:path";
import { isSafeRelativePath } from "../lib/path-safety.ts";

export const APPROVED_CLOSURE_ENVELOPE_ROOTS = ["communication/missions/"] as const;

/** Converts an OS-native relative path to the POSIX form isSafeRelativePath expects. */
function toPosixRelative(repoRoot: string, absolutePath: string): string {
  return relative(repoRoot, absolutePath).split("\\").join("/");
}

/**
 * True only if `absoluteEnvelopePath`, expressed relative to `repoRoot`,
 * is a syntactically safe (non-traversal) path that falls under one of
 * the approved closure-envelope roots. Does not check whether the file
 * exists, is readable, or is schema-valid -- those are separate,
 * independent questions the caller must still ask.
 */
export function isApprovedClosureEnvelopeLocation(
  repoRoot: string,
  absoluteEnvelopePath: string,
): boolean {
  const relativePath = toPosixRelative(repoRoot, absoluteEnvelopePath);
  if (!isSafeRelativePath(relativePath)) return false;
  return APPROVED_CLOSURE_ENVELOPE_ROOTS.some((root) => relativePath.startsWith(root));
}
