# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — Stage 5 S5-F-06 Narrow Correction Authorization

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Date:** 2026-09-18

**Authority:** Smart Business Mission Control

**Branch:** `mission/SB-ORG-LEARNING-1.1-stage2`

**PR:** `#589 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Verified publication

Codex final Stage 5 verifier report 10 was durably published at:

`b96866e2ef6ac813fe19e1e93bbe6156f924274f`

The publication changed only:

- `communication/missions/SB-ORG-LEARNING-1.1/codex/10-stage5-final-independent-reverification.md`
- the minimum verifier update to `communication/live/report.md`

The report preserves reviewed head:

`018be1b3830f62f7d3d4c30470a8cc9384a1161f`

and disposition:

`FAIL`

Publication CI is green:

- Application Build Assurance #217 — SUCCESS
- Markdown Quality Gate #1821 — SUCCESS
- Full Assurance #90 — SUCCESS

---

## 2. Accepted residual finding

Mission Control accepts as actionable:

`S5-F-06 — invalid receipt-directory ancestry is misclassified as genuine absence`

The independently reproduced case is narrow:

- `receiptsDir` is occupied by an ordinary file;
- the derived mission path is `receiptsDir/<mission-storage-key>`;
- on Windows, `lstatSync(derivedMissionPath)` returns `ENOENT`;
- current presence logic treats any such `ENOENT` as `ABSENT`;
- reconciliation therefore returns `ELIGIBLE_UNPROCESSED`.

That is unsafe because leaf `ENOENT` does not prove that the configured path ancestry is a valid directory hierarchy.

The exact S5-F-05 dangling-final-entry case is resolved. S5-F-01, S5-F-03 and S5-F-04 remain resolved. The original S5-F-02 cases remain corrected, but its broader genuine-absence boundary remains incomplete until S5-F-06 is corrected.

---

## 3. Authorized correction

Claude Code is authorized to correct S5-F-06 only.

Required semantic rule:

> A missing derived mission receipt-directory path may be treated as genuine absence only when the configured receipt-store ancestry is itself valid for directory traversal.

Bare `ENOENT` at the derived leaf is not sufficient.

The correction shall distinguish at minimum:

1. configured receipt root / ancestry valid and derived mission entry genuinely absent;
2. configured receipt root exists as an ordinary non-directory object;
3. configured receipt root or relevant ancestor is dangling, unresolved, non-directory or metadata-ambiguous;
4. valid present mission directory;
5. existing S5-F-05 dangling final mission entry.

Cases 2 and 3 must fail closed with a safe fixed-condition issue and zero new-work intent.

Case 1 must preserve normal first-processing behavior.

---

## 4. Implementation discipline

Use the smallest deterministic filesystem validation necessary.

Preferred approach:

- validate the configured `receiptsDir` path and the relevant existing ancestry before accepting a child-path `ENOENT` as genuine absence;
- where `receiptsDir` itself exists, require it to be a safe traversable directory before treating a missing mission child as absence;
- where `receiptsDir` itself is absent, distinguish absence beneath valid directory ancestry from inability to resolve because an existing ancestor is non-directory / dangling / otherwise ambiguous;
- reuse existing safe metadata / containment conventions where appropriate;
- preserve `assertPhysicallyContained` unchanged unless a separately demonstrated defect requires otherwise.

Do not merely add a special-case check for one filename or one Windows error string.

Do not redesign receipt storage.

No new reconciliation state is required unless the current state model genuinely cannot represent the fail-closed result; prefer the existing `INVALID_OR_UNSAFE` path.

---

## 5. Mandatory focused proof

Using isolated fixtures only, prove:

1. **ordinary file as `receiptsDir`**:
   - derived mission lookup does not become `ABSENT`;
   - reconciliation becomes `INVALID_OR_UNSAFE` or equivalent fail-closed state;
   - zero eligible work intent.

2. **genuinely absent receipt root under valid ancestry**:
   - remains valid no-receipt / first-processing behavior.

3. **existing valid receipt root, absent mission child**:
   - remains valid no-receipt / first-processing behavior.

4. **invalid non-directory ancestor above `receiptsDir`**, where safely reproducible:
   - fails closed;
   - does not become absence.

5. **dangling or unresolved receipt-root ancestry**, where safely reproducible:
   - fails closed;
   - does not become absence.

6. **S5-F-05 dangling final mission entry**:
   - remains fail closed.

7. **S5-F-01 outside-root live receipt indirection**:
   - remains blocked.

8. **original S5-F-02 cases**:
   - ENOTDIR at mission storage path;
   - receipt-shaped non-file;
   - malformed JSON;
   - schema-invalid JSON;
   all remain fail closed.

9. **S5-F-03 and S5-F-04**:
   - existing regression suites remain green.

10. **genuine Stage 2A**:
    - remains `ALREADY_PROCESSED`;
    - exact fingerprint remains:
      `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`.

11. recovery / retry / new-revision / reopen / supersession / lock semantics remain unchanged.

12. safe diagnostics:
    - no raw fixture contents;
    - no parser snippets;
    - no secret-shaped canary echo.

Do not bypass any environment or safety restriction to construct fixtures.

---

## 6. Allowed change boundary

Expected implementation change is limited to:

- `organizational-learning/scripts/reconcile.mjs`
- focused existing reconciliation tests
- minimum durable builder reporting

A tiny reusable filesystem helper is allowed only if required to make the ancestry decision explicit and testable.

No dependency addition.
No `package-lock.json` change.
No workflow change.

Do not modify:

- candidates;
- promotions;
- genuine receipts;
- closure envelopes;
- provenance contracts;
- context-pack semantics;
- governance;
- Product Truth;
- production/provider/customer state.

---

## 7. Verification

Run:

- focused S5-F-06 tests;
- all reconciliation tests;
- affected receipt/path tests;
- S5-F-03/F-04 regression tests;
- context-pack regression if a shared helper changes;
- full Fast Tests;
- typecheck;
- ESLint;
- Prettier;
- build;
- Markdown Quality Gate;
- real GitHub CI;
- Full Assurance when triggered.

Do not claim CI success before completion.

If local Windows repository-wide lint again shows only verified CRLF checkout noise, report it accurately without normalizing unrelated files.

---

## 8. Durable builder report

Create:

`communication/missions/SB-ORG-LEARNING-1.1/claude-code/09-stage5-f06-correction.md`

Preserve all prior Stage 5 reports.

Update only the minimum builder portion of:

`communication/live/report.md`

---

## 9. Boundaries

No Stage 6.
No merge.
No provider/model integration.
No scheduler/background worker.
No trusted publisher.
No autonomous repository writes.
No automatic promotion.
No `INSTITUTIONALISED`.
No `ORGANIZATION_WIDE`.
No Founder approval claim.
No governance/Product Truth mutation.
No production/customer mutation.

`PR #589 — NOT READY TO MERGE`

`SB-P-1.12 — NOT ACTIVATED`

---

## 10. Required stop

`STAGE 5 F-06 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`
