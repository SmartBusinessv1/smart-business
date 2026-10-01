# SMART BUSINESS MISSION CONTROL — MC-161

# SB-P-1.12 — Stage 10 Narrow SEC-EIS10-04 Refinement Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Stage:** 10 — EIS Review  
**Date:** 2026-10-01  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND MISSION CONTROL POST-MERGE VERIFICATION  
**Recipient:** Claude Code — existing EIS owner  
**Work package:** `SB-P-1.12-WP-STAGE10-SEC-EIS10-04-REFINEMENT`  
**Live instruction:** `communication/live/instruction1.28.md`

## 1. Purpose

Authorize one narrow finding-scoped refinement of EIS v0.3 for `SEC-EIS10-04` only.

The independent Security delta re-review closed at design level:

- `SEC-EIS10-01`
- `SEC-EIS10-02`
- `SEC-EIS10-03`
- `SEC-EIS10-05`
- `SEC-EIS10-06`
- `SEC-EIS10-07`
- `SEC-EIS10-08`
- `SEC-EIS10-09`
- `SEC-EIS10-10`
- `SEC-EIS10-11`

Do not reopen or alter those findings except where the precise `SEC-EIS10-04` correction requires wording consistency.

This authorization does not accept or lock the EIS and does not authorize implementation.

## 2. Exact candidate lineage

Continue existing PR #687 lineage only if the candidate remains the same lineage with no unrelated drift.

Expected starting PR #687 head:

`022aefbd49f483b8bca1ad469fd8980718670f67`

Expected starting EIS v0.3 blob:

`28f713581ffea5312f36e3508380c38539b05e90`

Canonical Security delta re-review:

- `communication/missions/SB-P-1.12/specialists/05-stage10-eis-security-delta-rereview.md`
- blob `363da0024c86f11055a4954b13aa63af3f0ec999`

Canonical live Security report:

- `communication/live/report1.27.md`
- blob `720ee2d2d839e7b0400717ad56f1ec912b3a127d`

Canonical main after PR #695:

`4e3b438d4d585fa13399bb78b2cefe428f54857f`

## 3. Authorized correction — SEC-EIS10-04 only

Apply exactly these design corrections:

### 3.1 Business lifecycle serialization

Explicitly place business lifecycle authorization state, including `active` / `deleted` or equivalent lifecycle state used by the kernel, under the business authority-state epoch/serialization row.

State that every lifecycle transition capable of changing authorization must:

- lock the business authority-state serialization row with `FOR UPDATE`;
- increment its authority epoch in the same transaction;
- contend with protected operations that hold `FOR SHARE` under the same serialization model.

This includes governed business deletion/tombstoning.

The design must make it impossible for a protected operation to commit using an allow decision based on an `active` business after the lifecycle state has concurrently become authorization-denying.

### 3.2 Multi-person serialization

Clarify that a decision must lock **every person row whose current state is relied upon**, not only the initiating principal.

Where more than one row of the same serialization type is needed, define a deterministic same-type order before moving to the next serialization-row type.

For person rows, use a deterministic identifier order (for example canonical person UUID ascending) or another equally unambiguous deterministic rule.

### 3.3 Transfer completion

State explicitly that ownership-transfer completion:

- locks/revalidates both the current Owner person row and incoming Owner person row;
- locks the business authority-state row;
- follows the deterministic same-type person-row ordering;
- evaluates both identities/approvals under the same serialized transaction before completing the transfer.

Do not change Product Truth or transfer semantics.

### 3.4 Kernel result contract wording

Reconcile `EIS-KER-01` with the §8.1 kernel result contract.

Remove stale wording that describes the return in terms of `membership_version` when the current contract is based on:

- principal;
- authority epochs;
- grant identifiers;
- decision identifier;
- allow/deny and reason code as already defined.

`membership_version` may remain only where it is explicitly documented as a change detector and not as the authoritative kernel serialization contract.

## 4. Non-goals / prohibited changes

Do not:

- reopen any other SEC-EIS10 finding;
- change Founder Decision Record 09;
- change Product Truth;
- change locked Blueprint;
- change FCTM;
- add new product behavior;
- change merchant-visible deletion meaning;
- alter participant-authentication experience;
- alter lifecycle ownership between SB-P-1.12 and SB-P-1.19;
- implement code/schema/SQL/migrations;
- touch provider or production state;
- unblock `22-§20-2`;
- close ESC-1;
- claim G-6/T4 evidence.

If the correction requires any of those, STOP and return to Mission Control.

## 5. Writable paths

Write only:

1. `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`
2. `communication/missions/SB-P-1.12/claude-code/36-stage9-eis-creation-report.md`
3. `communication/missions/SB-P-1.12/README.md`
4. `communication/missions/SB-P-1.12/decision-log.md`
5. `communication/missions/SB-P-1.12/handover-log.md`
6. `communication/live/report1.28.md`

No other path is authorized.

## 6. Traceability and preservation

Preserve:

- canonical FCTM blob `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259`;
- all 267/267 `IN SCOPE` rows covered;
- zero behavior-adding orphan requirements;
- Founder Decision Record 09 semantics;
- EIS §§12 and 15–17 unless this narrow correction demonstrably requires a reference-only consistency change outside their substantive content;
- R-2 CLOSED / SATISFIED;
- ESC-1 OPEN T8;
- `22-§20-2` BLOCKED / IN SCOPE;
- G-6/T4 UNVERIFIED;
- legal/privacy/retention validation deferred.

Report before/after:

- requirement count;
- requirement-to-row link count;
- 267/267 coverage;
- behavior-orphan count.

Do not add a new requirement unless the correction cannot be expressed by refining existing requirements. If a new requirement is genuinely necessary, STOP and explain why before changing traceability.

## 7. Validation

Verify:

- exact starting PR #687 head and EIS blob;
- no unrelated branch drift;
- six-path write scope only;
- Blueprint and FCTM unchanged;
- closed Security findings remain substantively unchanged;
- local Markdown validation / pre-commit / `git diff --check` as available;
- missing GitHub Actions must be reported as missing, never as pass.

## 8. Required handoff

Return:

- new exact PR #687 head;
- new EIS blob;
- exact sections/requirements changed;
- confirmation that only `SEC-EIS10-04` was refined;
- before/after traceability counts;
- confirmation that the ten closed findings remain closed and unchanged in substance;
- confirmation that no Product Truth/FCTM/Blueprint change occurred;
- current holds;
- GitHub Actions status exactly as observed.

End:

**SEC-EIS10-04 REFINEMENT SUBMITTED — STOP FOR MISSION CONTROL REVIEW**

No self-merge. Do not mark EIS accepted or locked.
