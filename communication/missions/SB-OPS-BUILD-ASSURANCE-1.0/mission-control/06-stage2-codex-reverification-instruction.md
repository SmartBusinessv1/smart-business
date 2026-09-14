# SB-OPS-BUILD-ASSURANCE-1.0 — Codex Narrow Re-verification Instruction

**Mission:** `SB-OPS-BUILD-ASSURANCE-1.0 — Build Assurance & Automation Foundation`
**Reviewer:** Codex
**Status:** ACTIVE — NARROW RE-VERIFICATION AUTHORIZED
**Scope:** Findings F-01, F-02 and F-03 only
**PR:** `#575`
**Correction head to review:** `76c6217fb0f9ceb2c99920499fd5134cdeea49bb`

## Objective

Independently verify whether Claude Code's authorized documentation/evidence correction fully resolves Codex Stage 2 findings F-01, F-02 and F-03 without introducing new scope or unsupported claims.

## Authoritative inputs

- `communication/missions/SB-OPS-BUILD-ASSURANCE-1.0/codex/02-stage2-independent-review.md`
- `communication/missions/SB-OPS-BUILD-ASSURANCE-1.0/mission-control/05-correction-authorization.md`
- corrected `docs/engineering/assurance/Build_Assurance_Baseline.md`
- corrected `communication/missions/SB-OPS-BUILD-ASSURANCE-1.0/claude-code/01-stage1-report.md`
- correction handover `H-006`
- current PR #575 and current-head CI evidence

## Required re-verification

### F-01
Verify that the blanket non-provider-mutation claim was withdrawn for the local credential-backed test run; that real test-environment writes are acknowledged; and that the exact Supabase target and complete resulting remote state remain explicitly `INSUFFICIENT EVIDENCE` rather than inferred.

### F-02
Verify that the evidence contract accurately distinguishes pure-logic tests from real-backend integration tests, acknowledges scoped Auth/RLS exercise, avoids claiming comprehensive security coverage, and states that current GitHub Actions executes zero successful tests because global setup fails first.

### F-03
Verify that the corrected records no longer imply secret provisioning alone enables CI tests and instead require both an approved test-environment target/authority decision and a separately authorized workflow wiring change.

## Boundaries

This is review only. Do not:

- modify the workflow, baseline, Claude report, application code, tests or dependencies;
- rerun credential-backed integration tests;
- inspect or clean up the remote Supabase test project;
- provision secrets or change workflow/environment configuration;
- repair lint debt or vulnerabilities;
- change branch protection;
- merge PR #575;
- start `SB-P-1.12`.

## Output

Create one narrow re-verification record under:

`communication/missions/SB-OPS-BUILD-ASSURANCE-1.0/codex/03-stage2-correction-reverification.md`

Return one of:

- `PASS — F-01/F-02/F-03 RESOLVED`
- `CORRECTION STILL REQUIRED`

If any issue remains, identify only the exact unresolved defect and supporting evidence. Do not expand into new assurance scope unless a newly discovered blocker directly invalidates acceptance of this correction.

Update only the permitted communication/status records needed to hand the result back to Mission Control, push to the existing mission branch, and stop. Do not self-approve or merge.
