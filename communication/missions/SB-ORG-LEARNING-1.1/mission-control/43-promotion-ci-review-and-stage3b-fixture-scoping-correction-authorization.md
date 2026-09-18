# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — Promotion Materialization CI Review and Narrow Stage 3B Fixture-Scoping Correction Authorization

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Date:** 2026-09-18

**Authority:** Smart Business Mission Control

**Branch:** `mission/SB-ORG-LEARNING-1.1-learning`

**PR:** `#593 — OPEN — NOT MERGED`

**Reviewed head:** `cf1f16fa9158ab7d937e645665c78e9dd1b203ce`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Promotion materialization review

Mission Control confirms the materialization package added exactly eight promotion records under:

`organizational-learning/promotions/SB-ORG-LEARNING-1.1/`

The promotion records are reported and structurally aligned with the approved decision in record 42:

- `VALIDATED`;
- `MISSION_SCOPED`;
- Mission Control approving authority;
- record 42 as decision reference;
- no Founder approval;
- no `INSTITUTIONALISED`;
- no `ORGANIZATION_WIDE`;
- empty supersession edges.

No candidate, closure envelope, receipt, source fingerprint, schema, script, application code or Product Truth/governance source was changed by the materialization itself.

---

## 2. Current CI result

Current-head workflows:

- Team LIPS Markdown Quality Gate #1859 — SUCCESS;
- Team LIPS Application Build Assurance #255 — FAILURE.

Within Application Build Assurance:

- Build — SUCCESS;
- Lint — SUCCESS;
- Typecheck — SUCCESS;
- Fast Tests — FAILURE.

Mission Control independently inspected the failing Fast Test job.

Exactly three assertions fail, all in:

`organizational-learning/tests/context-pack.test.ts`

Observed failures:

1. expected 4 loaded promotions, received 12;
2. expected 0 excluded under the authorized SB-OPS-CI-ARCHITECTURE-1.0 profile, received 8;
3. expected 4 excluded under a non-matching profile, received 12.

The additional eight records are precisely the newly authorized `SB-ORG-LEARNING-1.1` promotion records.

The runtime behavior is correct: the SB-OPS profile continues to produce 4 reusable items and correctly excludes the 8 out-of-profile promotions.

---

## 3. Root cause

The Stage 3B proof helper currently defines:

`PROMOTIONS_DIR = organizational-learning/promotions`

and `loadRealFixtures()` calls:

`loadPromotions(PROMOTIONS_DIR)`

That means the test suite loads every promotion in the repository.

However, the affected assertions are explicitly proving the original Stage 3B real fixture set for:

`SB-OPS-CI-ARCHITECTURE-1.0`

They therefore encode the invariant "this mission's real promotion fixture set contains four promotions," while their loader accidentally expanded to a repository-wide inventory.

The addition of a second legitimate mission promotion directory exposed this stale test-fixture boundary.

This is a test-fixture scoping defect, not an OLE runtime defect and not a promotion-record defect.

---

## 4. Correction decision

Mission Control authorizes a narrow correction to:

`organizational-learning/tests/context-pack.test.ts`

only, plus minimum reporting communication.

The Stage 3B real-fixture loader must be scoped to the mission whose proof it is testing:

`organizational-learning/promotions/SB-OPS-CI-ARCHITECTURE-1.0/`

Preferred correction:

- introduce/use a mission-specific real promotions directory for the Stage 3B fixture loader; and
- make `loadRealFixtures()` load those four promotions only.

Do **not** merely change hardcoded expected counts from 4 to 12.

Reason:

A repo-wide count of 12 is also unstable and would fail whenever any future mission legitimately adds another promotion set.

The invariant under test is mission-specific Stage 3B behavior, not the total number of promotions in the repository.

---

## 5. Required preservation

The correction must preserve:

- context-pack implementation behavior;
- profile matching/exclusion behavior;
- candidate revision checking;
- provenance validation;
- supersession behavior;
- all eight new SB-ORG-LEARNING-1.1 promotion records unchanged;
- all existing SB-OPS-CI-ARCHITECTURE-1.0 promotion records unchanged;
- all schemas unchanged;
- all source fingerprints/receipts unchanged;
- all candidate content unchanged.

No production/application code change is authorized.

No new promotion decision is authorized.

No Stage 4B work is authorized.

---

## 6. Required proof

After correction, demonstrate:

- the Stage 3B real-fixture loader loads exactly the four SB-OPS-CI-ARCHITECTURE-1.0 promotions;
- the authorized SB-OPS synthetic profile produces exactly four reusable items and zero excluded **within that mission fixture set**;
- the non-matching profile excludes exactly those four mission fixtures;
- the eight SB-ORG-LEARNING-1.1 promotions remain present and unchanged in the repository;
- the full Fast Test suite passes;
- typecheck, lint and build remain green;
- Markdown Quality Gate remains green;
- any applicable Full Assurance result is reported truthfully.

A deliberate break/restore proof is not required for this narrow fixture-boundary correction unless the builder finds the existing test coverage insufficient.

---

## 7. Merge boundary

PR #593 remains:

`OPEN — NOT READY TO MERGE`

After the correction and green CI, Mission Control will perform final promotion-materialization verification.

Only then may Mission Control issue the Founder/human merge gate.

---

## 8. Current disposition

`PROMOTION MATERIALIZATION — CONTENT ACCEPTABLE`

`CI — BLOCKED BY STALE STAGE 3B REAL-FIXTURE SCOPE`

`NARROW TEST CORRECTION — AUTHORIZED`

`PR #593 — OPEN — NOT READY TO MERGE`

`SB-P-1.12 — NOT ACTIVATED`

---

## 9. Stop

`STAGE 3B FIXTURE-SCOPING CORRECTION AUTHORIZED — MISSION CONTROL RE-REVIEW REQUIRED`
