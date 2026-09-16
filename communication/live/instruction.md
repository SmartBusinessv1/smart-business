# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — STAGE 1 CODEX INDEPENDENT RE-VERIFICATION

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Verifier:** Codex

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**PR:** `#588 — OPEN — NOT MERGED`

**Mission Control disposition:** `F-01 CORRECTION RE-REVIEW PASS — CODEX INDEPENDENT RE-VERIFICATION AUTHORIZED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## Read first

1. `communication/missions/SB-ORG-LEARNING-1.1/codex/01-stage1-independent-verification.md`
2. `communication/missions/SB-ORG-LEARNING-1.1/mission-control/06-stage1-f01-correction-authorization.md`
3. `communication/missions/SB-ORG-LEARNING-1.1/mission-control/07-stage1-f01-rereview-and-codex-reverification-authorization.md`
4. `communication/missions/SB-ORG-LEARNING-1.1/claude-code/01-stage1-implementation-and-verification.md`
5. current Stage 1 implementation/tests on this branch.

Do not rely on builder or Mission Control conclusions as independent proof.

---

## Required independent re-verification

Independently verify the corrected Stage 1 implementation.

At minimum:

1. Reproduce the original F-01 attack using an invalid envelope with `mission_id: "../escaped"` against isolated temporary directories and confirm no lookup/write escapes the configured receipts directory.
2. Inspect and test the separation between raw diagnostic `mission_id` and filesystem storage identity.
3. Verify both lookup and write use the same safe contained path derivation.
4. Verify truthful malformed identifier preservation in the receipt payload remains intact.
5. Verify deterministic/idempotent repeated handling of the same malformed identifier.
6. Independently run the relevant OLE Fast Tests and inspect current exact-head GitHub Actions evidence.
7. Revisit the assurance areas that the prior verification explicitly left incomplete after stopping on F-01, including persisted manifest ordering, secret-echo boundaries, receipt-state truthfulness, autonomous-write/background-work boundaries, and the evidence reach needed for Stage 1 acceptance.
8. Verify the previously accepted Stage 1 boundaries remain intact: no AI/provider call, semantic extraction, promotion execution, background automation, real closed-mission proof-target processing, provider mutation, dependency addition, governance/Product Truth change, Stage 2 activation, or `SB-P-1.12` activation.

Do not process the real `SB-OPS-CI-ARCHITECTURE-1.0` proof target.
Do not modify implementation code.
Do not merge.

---

## Required durable output

Create/update a durable verifier report under:

`communication/missions/SB-ORG-LEARNING-1.1/codex/`

Record:

- reviewed branch and exact reviewed SHA;
- PR state;
- independent tests/reproductions performed;
- exact CI evidence inspected;
- F-01 disposition;
- completion of previously incomplete assurance areas;
- any new blocking or non-blocking findings;
- final disposition: `PASS`, `FAIL`, or `FOLLOW-UP REQUIRED`.

Update only the minimum verifier section of `communication/live/report.md` needed for handoff.

---

## Stop condition

After independent re-verification and durable reporting, stop and state:

`STAGE 1 INDEPENDENT RE-VERIFICATION REPORTED — MISSION CONTROL DECISION REQUIRED`

Do not self-accept Stage 1.
Do not merge.
Do not begin Stage 2.
Do not activate `SB-P-1.12`.
