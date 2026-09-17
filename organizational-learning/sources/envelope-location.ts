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
//
// S5-F-03 correction (communication/missions/SB-ORG-LEARNING-1.1/
// mission-control/25-stage5-f01-f04-correction-authorization.md):
// independent verification found the check above is purely lexical --
// `path.relative` never touches the filesystem, so a Windows junction or
// symlink placed AT an approved-looking path (e.g.
// communication/missions/linked) can physically resolve to content
// outside the repository while still lexically starting with the
// approved prefix. Approval now additionally requires physical
// containment, reusing the exact accepted Stage 1 primitive
// (`assertPhysicallyContained`, lib/receipt-store.ts) rather than a new
// parallel algorithm -- this is checked before any envelope content is
// read, and is independent of both ClosureEnvelopeSchema and evidence
// allowlisting (neither grants location authority).

import { join, relative } from "node:path";
import { isSafeRelativePath } from "../lib/path-safety.ts";
import { assertPhysicallyContained } from "../lib/receipt-store.ts";

export const APPROVED_CLOSURE_ENVELOPE_ROOTS = ["communication/missions/"] as const;
const APPROVED_ROOT_SEGMENTS = ["communication", "missions"] as const;

/** Converts an OS-native relative path to the POSIX form isSafeRelativePath expects. */
function toPosixRelative(repoRoot: string, absolutePath: string): string {
  return relative(repoRoot, absolutePath).split("\\").join("/");
}

/**
 * True only if `absoluteEnvelopePath`, expressed relative to `repoRoot`,
 * is a syntactically safe (non-traversal) path that falls under one of
 * the approved closure-envelope roots. Purely lexical -- see
 * `isApprovedClosureEnvelopeLocation` for the combined lexical+physical
 * check that must be used for actual approval decisions.
 */
function isLexicallyApprovedLocation(repoRoot: string, absoluteEnvelopePath: string): boolean {
  const relativePath = toPosixRelative(repoRoot, absoluteEnvelopePath);
  if (!isSafeRelativePath(relativePath)) return false;
  return APPROVED_CLOSURE_ENVELOPE_ROOTS.some((root) => relativePath.startsWith(root));
}

/**
 * True only if `absoluteEnvelopePath` is both (1) lexically under an
 * approved closure-envelope root and (2) physically resolves (following
 * any symlink/junction/reparse point) to a location still inside that
 * same approved root. Does not check whether the file exists, is
 * readable, or is schema-valid -- those are separate, independent
 * questions the caller must still ask. A nonexistent path under the
 * approved root with no intervening indirection still passes here (it is
 * rejected downstream on read, with no work item) -- this check exists
 * to catch indirection, not to guarantee existence.
 */
export function isApprovedClosureEnvelopeLocation(
  repoRoot: string,
  absoluteEnvelopePath: string,
): boolean {
  if (!isLexicallyApprovedLocation(repoRoot, absoluteEnvelopePath)) return false;
  const approvedRoot = join(repoRoot, ...APPROVED_ROOT_SEGMENTS);
  try {
    assertPhysicallyContained(approvedRoot, absoluteEnvelopePath);
  } catch {
    return false;
  }
  return true;
}
