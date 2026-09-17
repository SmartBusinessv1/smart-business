// SB-ORG-LEARNING-1.1 Stage 1 -- Screening/quarantine contract.
//
// B5 correction: "A scanner failure is not a clean scan and not a `no
// material learning` result." The contract this module exists to prove
// is the fail-closed one: whatever happens inside a scan function, the
// caller never receives anything that could be mistaken for CLEAN unless
// the scan genuinely completed and genuinely found nothing.
//
// The pattern set below (`DEFAULT_SECRET_PATTERNS`) is a minimal,
// dependency-free heuristic -- JWTs, PEM private-key headers, and AWS
// access-key IDs -- proportionate to proving the fail-closed pipeline
// contract in Stage 1. It is explicitly NOT a replacement for a real
// secret-scanning product (e.g. gitleaks, already used ad hoc elsewhere
// in this repository per the SB-ORG-LEARNING-1.0 reviews); wiring a
// stronger scanner in is a named Stage 1 follow-up, not a Stage 1 claim.
//
// Findings never carry the matched text, only the path and the rule
// that matched (B5: "quarantine ambiguous content without echoing raw
// values") -- `ScreeningFindingSchema` (receipt.schema.ts) has no field
// to put raw text in, so this isn't just a convention here, it's
// structurally impossible to violate through this contract.

import type { ScreeningResult } from "../schemas/receipt.schema.ts";

export interface SecretPattern {
  ruleId: string;
  pattern: RegExp;
}

export const DEFAULT_SECRET_PATTERNS: SecretPattern[] = [
  { ruleId: "jwt", pattern: /eyJ[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}/ },
  {
    ruleId: "pem-private-key",
    pattern: /-----BEGIN (RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/,
  },
  { ruleId: "aws-access-key-id", pattern: /\bAKIA[0-9A-Z]{16}\b/ },
];

export interface ScannedFile {
  path: string;
  content: string;
}

/**
 * Pure, synchronous heuristic scan over already-read file contents.
 * Never throws for ordinary input; callers that need fail-closed
 * behavior around scanner *failure* should go through
 * `runScreeningSafely`, not call this directly.
 */
export function runHeuristicScan(
  files: readonly ScannedFile[],
  patterns: readonly SecretPattern[] = DEFAULT_SECRET_PATTERNS,
): ScreeningResult {
  const findings: { path: string; rule_id: string }[] = [];
  for (const file of files) {
    for (const { ruleId, pattern } of patterns) {
      if (pattern.test(file.content)) {
        findings.push({ path: file.path, rule_id: ruleId });
      }
    }
  }
  return {
    status: findings.length > 0 ? "QUARANTINED" : "CLEAN",
    findings,
    scanned_path_count: files.length,
  };
}

/**
 * Wraps a scan function so that any exception, non-function scanner, or
 * malformed/unrecognized result becomes SCANNER_FAILED / SCANNER_UNKNOWN
 * rather than propagating an error or (worse) being mistaken for CLEAN.
 * This is the one place Stage 1 asserts "unknown state is not a clean
 * result" as executable behavior rather than only as a design principle.
 */
export function runScreeningSafely(
  scan: (files: readonly ScannedFile[]) => ScreeningResult,
  files: readonly ScannedFile[],
): ScreeningResult {
  let result: ScreeningResult;
  try {
    if (typeof scan !== "function") {
      return { status: "SCANNER_UNKNOWN", findings: [], scanned_path_count: 0 };
    }
    result = scan(files);
  } catch {
    return { status: "SCANNER_FAILED", findings: [], scanned_path_count: 0 };
  }

  if (
    result === null ||
    typeof result !== "object" ||
    !["CLEAN", "QUARANTINED", "SCANNER_FAILED", "SCANNER_UNKNOWN"].includes(result.status) ||
    !Array.isArray(result.findings) ||
    typeof result.scanned_path_count !== "number"
  ) {
    return { status: "SCANNER_UNKNOWN", findings: [], scanned_path_count: 0 };
  }

  return result;
}
