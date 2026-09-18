# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — Stage 5 S5-F-07 Narrow Correction Authorization

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Date:** 2026-09-18

**Authority:** Smart Business Mission Control

**Branch:** `mission/SB-ORG-LEARNING-1.1-stage2`

**PR:** `#589 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Verified publication

Codex report 11 was durably published at:

`36c2bdb200257fb30aa6afd98f149d0683c8e321`

The publication changed only:

- `communication/missions/SB-ORG-LEARNING-1.1/codex/11-stage5-s5-f06-final-independent-reverification.md`
- the minimum verifier update to `communication/live/report.md`

The report preserves reviewed head:

`32591ee7a65852cbffe5712260c40ef2356234c9`

and disposition:

`FAIL`

Publication CI currently shows:

- Application Build Assurance #227 — SUCCESS
- Markdown Quality Gate #1831 — SUCCESS
- Full Assurance #100 — IN PROGRESS at Mission Control review time

Because this is a documentation-only verifier publication, the running Full Assurance check does not alter the already-established implementation finding or block narrow corrective authorization.

---

## 2. Accepted residual finding

Mission Control accepts as actionable:

`S5-F-07 — null-ancestor branch treats unresolvable filesystem roots as genuine absence`

The independently reproduced case is narrow:

- the upward ancestry walk reaches a filesystem root without finding any existing ancestor;
- it returns `ancestorPath: null`;
- `classifyMissionDirectoryPresence` currently converts that to `ABSENT`;
- receipt discovery therefore returns an empty issue-free store;
- reconciliation can return `ELIGIBLE_UNPROCESSED`.

Codex reproduced this read-only on Windows using an absent drive path. No drive, junction, symlink or directory was created.

That outcome is unsafe because no valid traversable directory ancestry was established.

The correct invariant is:

> Genuine absence may be trusted only beneath a validated existing directory ancestry. Failure to establish any existing ancestor is ambiguity, not absence.

---

## 3. Positive verifier results preserved

The verifier reports:

- S5-F-06 ordinary-file and invalid-existing-ancestor cases corrected;
- Windows `ENOENT` ancestry handling corrected;
- Linux `ENOTDIR` ancestry handling corrected;
- S5-F-05 remains resolved;
- S5-F-01 through S5-F-04 remain resolved;
- genuine Stage 2A remains `ALREADY_PROCESSED`;
- exact fingerprint remains:
  `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`;
- reconciliation lifecycle / ordering / ownership checks passed;
- Stage 2 / Stage 3 / provenance / context / authority checks passed.

Local verifier execution nuance remains preserved:

- initial Fast Test run: 359 passed / two execution failures;
- targeted retry of the two failed files: 26/26 passed;
- typecheck, formatting and build passed;
- repository-wide lint retained verified CRLF-only errors.

---

## 4. Authorized correction

Claude Code is authorized to correct S5-F-07 only.

Required behavior:

- `ancestorPath: null` must never be mapped to `ABSENT`;
- it must produce a safe fixed-condition issue;
- reconciliation must fail closed through `INVALID_OR_UNSAFE` or equivalent existing blocked behavior;
- zero eligible new-work intent;
- valid existing directory ancestry with absent descendants must remain normal genuine absence / first-processing behavior.

Preferred implementation:

- retain the existing ancestry walk;
- change only the null-ancestor interpretation and corresponding issue mapping/tests;
- preserve the S5-F-06 `ENOENT` / `ENOTDIR` walk semantics;
- preserve S5-F-05 final-entry semantics;
- preserve `assertPhysicallyContained` unchanged.

No new reconciliation state is expected to be necessary.

---

## 5. Mandatory proof

Using isolated or read-only fixtures only, prove:

1. no-existing-ancestor / null-ancestor path:
   - does not return `ABSENT`;
   - fails closed;
   - zero eligible work items.

2. absent Windows drive or equivalent safe read-only null-ancestor reproduction where available:
   - fail closed;
   - no filesystem creation.

3. valid existing directory ancestry with absent descendants:
   - still normal `ELIGIBLE_UNPROCESSED` first-processing behavior.

4. S5-F-06:
   - ordinary file as receipt root remains blocked;
   - invalid non-directory ancestor remains blocked;
   - Linux `ENOTDIR` and Windows `ENOENT` walk behavior remains correct.

5. S5-F-05:
   - dangling final mission entry remains blocked.

6. S5-F-01 through S5-F-04:
   - existing regression suites remain green.

7. genuine Stage 2A:
   - remains `ALREADY_PROCESSED`;
   - fingerprint unchanged.

8. recovery / retry / new revision / reopen / supersession / deterministic replay / bounded lock behavior unchanged.

9. diagnostics remain fixed-condition and safe; no raw contents or secret-shaped canary leakage.

Do not bypass any environment or safety restriction.

---

## 6. Allowed change boundary

Expected changes are limited to:

- `organizational-learning/scripts/reconcile.mjs`
- focused reconciliation tests
- minimum durable builder reporting

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

- focused S5-F-07 tests;
- all reconciliation tests;
- affected receipt/path tests;
- S5-F-01 through S5-F-06 regressions;
- full Fast Tests;
- typecheck;
- ESLint;
- Prettier;
- build;
- Markdown Quality Gate;
- actual GitHub CI;
- Full Assurance if triggered.

Do not claim GitHub CI success before completion.

If local Windows repository-wide lint again shows only verified CRLF checkout noise, report that accurately without normalizing unrelated files.

---

## 8. Durable builder report

Create:

`communication/missions/SB-ORG-LEARNING-1.1/claude-code/10-stage5-f07-correction.md`

Update only the minimum builder section of:

`communication/live/report.md`

Preserve all prior verifier and builder reports unchanged.

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

`STAGE 5 F-07 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`
