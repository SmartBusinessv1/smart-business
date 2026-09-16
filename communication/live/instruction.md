# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — STAGE 1 NARROW CORRECTION

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Builder:** Claude Code

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**PR:** `#588`

**Mission Control disposition:** `CORRECTION REQUIRED BEFORE CODEX INDEPENDENT VERIFICATION`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## Read first

1. `communication/missions/SB-ORG-LEARNING-1.1/mission-control/04-stage1-substantive-review.md`
2. `communication/missions/SB-ORG-LEARNING-1.1/claude-code/01-stage1-implementation-and-verification.md`
3. existing Stage 1 implementation and tests on this branch.

Do not broaden scope beyond the two corrections below.

---

## Correction 1 — implement dangling provenance validation

The Stage 1 authorization required tests for invalid/dangling provenance.

Current implementation validates provenance shape and defines `DanglingCheckResult`, but it does not yet implement the runtime committed-object check that proves the claimed `commit_sha + path + blob_sha` actually resolves.

Implement a narrow repository-native provenance-resolution validator using the existing committed-Git-object reader.

It must distinguish at minimum:

- exact valid reference;
- commit not found;
- path not found at commit;
- non-regular object;
- blob SHA mismatch.

Add environment-independent tests using isolated ephemeral Git repositories only.

Do not process any real closed-mission proof target.
Do not add dependencies.
Do not modify `package-lock.json`.

---

## Correction 2 — fix evidence/reporting semantics

Do not keep editing a tracked report merely to make a recorded "final branch head" equal the new head created by that edit.

Revise the durable Claude Code report and the builder section of `communication/live/report.md` so they distinguish:

- implementation commit(s) that were actually tested;
- PR #588 / GitHub Actions as the current exact-head CI source of truth;
- workflow/run evidence where known;
- no claim that the report contains its own immutable final branch SHA.

Remove or replace stale "final branch head" wording that becomes false when the report itself is committed.

After the technical correction is pushed, wait for applicable CI on the new head. Report the CI result without making another metadata-only commit solely to embed that head SHA.

---

## Accepted Stage 1 interpretations

Mission Control confirms for Stage 1:

- `merge/active/**` remains authority context and is not harvestable candidate-learning evidence by default;
- all-or-nothing evidence resolution is accepted;
- receipt `mission_id` may preserve malformed input for failure reporting;
- Stage-1 failures may map to `VALIDATION_FAILED`;
- the current heuristic scanner is accepted only as a Stage 1 fail-closed proof, with stronger-scanner disposition retained for the Stage 2 entry gate.

---

## Still prohibited

Do not:

- perform AI/semantic extraction;
- process `SB-OPS-CI-ARCHITECTURE-1.0`;
- implement background automation;
- add provider/network writes;
- implement promotion execution;
- activate Stage 2;
- activate `SB-P-1.12`;
- self-approve;
- merge.

---

## Required return

Apply only these corrections, run applicable local checks, push to the existing authorized branch, wait for applicable CI, update the durable report and live builder section truthfully, then stop and state:

`STAGE 1 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

Do not authorize Codex yourself.
