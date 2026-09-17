// SB-ORG-LEARNING-1.1 Stage 1 -- Safe path validation.
//
// Design principle (final reconciled build plan, B3/B5): reject-if-not-
// already-canonical, never normalize-then-validate. A path is either
// already in the one accepted form (POSIX-relative, no redundant
// segments, NFC-normalized, no encoding tricks) or it is rejected. This
// sidesteps the classic normalization-bypass vulnerability class where a
// "fix up the path" step is itself exploitable.
//
// This module only judges syntactic/structural safety. Whether a safe
// path is actually an approved evidence source is a separate, narrower
// question answered by organizational-learning/sources/allowlist.ts
// (B3: "source eligibility is not source authority").

const MAX_PATH_LENGTH = 1024;

/**
 * True only if `input` is a safe, unambiguous, POSIX-style repository-
 * relative path: no traversal, no absolute/drive/UNC forms, no
 * backslashes, no null bytes, no empty/dot segments, no percent-encoded
 * segments, and already in NFC Unicode normal form.
 */
export function isSafeRelativePath(input: unknown): input is string {
  if (typeof input !== "string") return false;
  if (input.length === 0 || input.length > MAX_PATH_LENGTH) return false;

  // eslint-disable-next-line no-control-regex
  if (/[\u0000-\u001f]/.test(input)) return false; // control chars, incl. null byte

  // Reject any backslash outright. A POSIX repository path never
  // legitimately contains one; allowing it invites Windows-separator /
  // UNC ("\\server\share") confusion.
  if (input.includes("\\")) return false;

  // Absolute POSIX path or POSIX-style UNC ("//server/share").
  if (input.startsWith("/")) return false;

  // Windows drive-letter path ("C:", "c:/...").
  if (/^[A-Za-z]:/.test(input)) return false;

  // Percent-encoded segments (defense against %2e%2e-style traversal
  // tricks slipping past a naive ".." string check).
  if (/%[0-9A-Fa-f]{2}/.test(input)) return false;

  // Reject anything that is not already in NFC form -- an alternate
  // Unicode normalization of the same visible path is an alias, and
  // aliases are exactly what "ambiguous path alias" guards against.
  if (input.normalize("NFC") !== input) return false;

  const segments = input.split("/");
  for (const segment of segments) {
    if (segment.length === 0) return false; // "//" or leading/trailing "/"
    if (segment === "." || segment === "..") return false; // traversal / no-ops
  }

  return true;
}

/**
 * Structural reasons a path can fail `isSafeRelativePath`, surfaced for
 * tests and diagnostics. Recomputes the same checks explicitly rather
 * than instrumenting the boolean predicate, so the predicate itself stays
 * a simple, auditable gate.
 */
export type PathSafetyViolation =
  | "NOT_A_STRING"
  | "EMPTY_OR_TOO_LONG"
  | "CONTROL_CHARACTER"
  | "BACKSLASH"
  | "ABSOLUTE_OR_UNC"
  | "DRIVE_LETTER"
  | "PERCENT_ENCODED"
  | "NON_NFC_NORMALIZED"
  | "EMPTY_OR_DOT_SEGMENT";

export function explainPathSafetyViolation(input: unknown): PathSafetyViolation | null {
  if (typeof input !== "string") return "NOT_A_STRING";
  if (input.length === 0 || input.length > MAX_PATH_LENGTH) return "EMPTY_OR_TOO_LONG";
  // eslint-disable-next-line no-control-regex
  if (/[\u0000-\u001f]/.test(input)) return "CONTROL_CHARACTER";
  if (input.includes("\\")) return "BACKSLASH";
  if (input.startsWith("/")) return "ABSOLUTE_OR_UNC";
  if (/^[A-Za-z]:/.test(input)) return "DRIVE_LETTER";
  if (/%[0-9A-Fa-f]{2}/.test(input)) return "PERCENT_ENCODED";
  if (input.normalize("NFC") !== input) return "NON_NFC_NORMALIZED";
  for (const segment of input.split("/")) {
    if (segment.length === 0 || segment === "." || segment === "..") {
      return "EMPTY_OR_DOT_SEGMENT";
    }
  }
  return null;
}
