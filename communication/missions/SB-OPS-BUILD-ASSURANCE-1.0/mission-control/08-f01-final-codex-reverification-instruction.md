# SB-OPS-BUILD-ASSURANCE-1.0 — Final F-01 Codex Re-Verification Instruction

**Status:** ACTIVE — FINAL F-01 RE-VERIFICATION

Mission Control authorizes Codex to perform one final independent re-verification of Finding F-01 only, after Claude Code's single-line correction at head `15696e27d3abe33c090c03ae8613474bf3e95e3c`.

F-02 and F-03 are not reopened.

Review Claude Code's corrected `01-stage1-report.md` against the prior Codex F-01 findings and Mission Control's `07-f01-final-correction-authorization.md`.

Verify that the report now states only what the evidence supports: the historical local test run wrote real external Auth/database state; the exact historical test target identity and complete resulting remote state remain `INSUFFICIENT EVIDENCE`; the report asserts neither production mutation nor absence of production mutation.

Create `communication/missions/SB-OPS-BUILD-ASSURANCE-1.0/codex/04-stage2-final-f01-reverification.md` and return either `PASS — F-01 RESOLVED` or `CORRECTION STILL REQUIRED`.

Do not modify the workflow, baseline, Claude report, prior Codex reviews, application code, tests, dependencies, external systems, branch protection, Product Truth or governance. Do not rerun external integration tests. Do not merge PR #575. Do not start `SB-P-1.12`.
