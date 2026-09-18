# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-ORG-LEARNING-1.1 — POST-MERGE OLE LEARNING HANDOFF REPORT

**Mission ID:** `SB-ORG-LEARNING-1.1`

**Current actor:** Claude Code — supervised OLE learning operator

**Status:** `STAGE 3B FIXTURE-SCOPING CORRECTION APPLIED — MISSION CONTROL RE-REVIEW REQUIRED`

**Canonical main merge commit:** `85e917b4256edb01c77a2be0f909512b32be4cef`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

## Report requirement

After executing the manual OLE learning handoff authorized in `communication/live/instruction.md`, report:

- learning branch/head;
- closure envelope;
- source fingerprint;
- mission-learning report;
- candidate lessons / risks;
- provenance and screening;
- unresolved limitations;
- context refresh recommendations;
- changed files;
- verification/tests;
- PR state.

Do not claim formal mission closeout.

Do not authorize Stage 4B.

Do not activate `SB-P-1.12`.

## Candidate-01 precision correction (this update)

Per `communication/missions/SB-ORG-LEARNING-1.1/mission-control/41-ole-learning-review-and-candidate01-correction-authorization.md`: candidate 01 previously mis-stated Stage 5 as seven correction rounds. Corrected to state accurately that Stage 5 resolved seven findings (`S5-F-01` through `S5-F-07`) through four correction rounds (F01–F04 together, then F05, then F06, then F07). Only `organizational-learning/candidates/SB-ORG-LEARNING-1.1/candidate-01-narrow-finding-scoped-correction-cycle.json` and `communication/missions/SB-ORG-LEARNING-1.1/claude-code/12-mission-learning-report.md` were changed. Closure envelope, receipt, source fingerprint, candidates 02–08, schemas, scripts, tests, and application code are unchanged. Re-validated: candidate 01 schema PASS, provenance 3/3 references VALID, screening CLEAN, Markdown Quality Gate PASS.

## Stage 3B fixture-scoping correction (this update)

Per `communication/missions/SB-ORG-LEARNING-1.1/mission-control/43-promotion-ci-review-and-stage3b-fixture-scoping-correction-authorization.md`: after the 8 SB-ORG-LEARNING-1.1 promotion records were materialized, `organizational-learning/tests/context-pack.test.ts`'s Stage 3B real-fixture proof (`loadRealFixtures()`) loaded every promotion under the repo-wide `organizational-learning/promotions/` tree instead of the mission-specific `SB-OPS-CI-ARCHITECTURE-1.0` fixture set its assertions were written against, so the real total grew from 4 to 12 and 3 assertions failed on real CI. Corrected `loadRealFixtures()` to load promotions from a new, narrowly-scoped `SB_OPS_PROMOTIONS_DIR` constant (`organizational-learning/promotions/SB-OPS-CI-ARCHITECTURE-1.0/`) instead of the shared parent directory. Hardcoded expected counts were left at 4 (the correct, mission-scoped invariant), not changed to 12, per record 43's explicit instruction that a repo-wide count would be equally unstable against future missions. Only `organizational-learning/tests/context-pack.test.ts` was changed (13 lines added, 1 removed: one new scoped directory constant plus its explanatory comment, and one call-site update). Independently proved via the real, unmodified `context-pack.mjs` implementation: scoped loader returns exactly 4 SB-OPS promotions; authorized SB-OPS profile → 4 reusable / 0 excluded; non-matching profile → 0 reusable / 4 excluded; repo-wide loader (sanity check only, not used by the suite) still returns all 12, of which 8 are the untouched SB-ORG-LEARNING-1.1 records. No candidate, promotion record, closure envelope, receipt, source fingerprint, schema, or application code changed.

Required stop:

`STAGE 3B FIXTURE-SCOPING CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`
