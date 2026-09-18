# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — STAGE 3B REAL-FIXTURE SCOPING CORRECTION

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Current actor:** Claude Code — narrow test-fixture correction only

**Branch:** `mission/SB-ORG-LEARNING-1.1-learning`

**PR:** `#593 — OPEN — NOT MERGED`

**Mission Control disposition:** `PROMOTION MATERIALIZATION CONTENT ACCEPTABLE — CI BLOCKED BY STALE STAGE 3B FIXTURE SCOPE`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

## Read first

`communication/missions/SB-ORG-LEARNING-1.1/mission-control/43-promotion-ci-review-and-stage3b-fixture-scoping-correction-authorization.md`

## Authorized correction only

Modify:

`organizational-learning/tests/context-pack.test.ts`

plus the minimum `communication/live/report.md` update needed to report the correction.

The affected Stage 3B real-fixture proof is for:

`SB-OPS-CI-ARCHITECTURE-1.0`

Scope its real promotions fixture loader to:

`organizational-learning/promotions/SB-OPS-CI-ARCHITECTURE-1.0/`

Do not change expected repository-wide counts from 4 to 12.

The invariant under test is the original mission-specific four-promotion fixture set, not the total number of promotions in the repository.

## Preserve

Do not modify:

- context-pack implementation;
- candidates;
- promotion records;
- closure envelope;
- receipt;
- source fingerprint;
- schemas;
- application code;
- issue #590;
- governance/Product Truth.

## Required validation

Prove:

- Stage 3B fixture loader sees exactly 4 SB-OPS promotions;
- authorized SB-OPS profile => 4 reusable, 0 excluded within that mission fixture set;
- non-matching profile => 0 reusable, 4 excluded;
- all 8 SB-ORG-LEARNING-1.1 promotions remain present and unchanged;
- full Fast Tests PASS;
- typecheck PASS;
- lint PASS;
- build PASS;
- Markdown Quality Gate PASS;
- report any applicable Full Assurance honestly.

No self-merge.

End exactly:

`STAGE 3B FIXTURE-SCOPING CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`
