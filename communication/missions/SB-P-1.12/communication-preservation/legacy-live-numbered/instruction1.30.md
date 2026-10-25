# SMART BUSINESS MISSION CONTROL — MC-165

# SB-P-1.12 — Stage 12 Initial Implementation Package Creation

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Stage:** 12 — Initial Implementation Package  
**Recipient:** Claude Code  
**Status:** PREPARED — EXECUTE ONLY AFTER PR #687 HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION  
**Work package:** `SB-P-1.12-WP-STAGE12-INITIAL-IMPLEMENTATION-PACKAGE`

## 1. Preconditions

Before doing any work, verify from canonical `main`:

1. the Product Blueprint is `APPROVED — LOCKED`, blob `77d52096c020668311b039721a4de9248ddd460e`;
2. the SB-P-1.12 EIS is `APPROVED — LOCKED`;
3. Mission Control Stage 10 acceptance record exists;
4. Mission Control Stage 11 lock record exists;
5. PR #687 has been human-merged;
6. the EIS blob on canonical `main` equals the locked blob stated in MC-165.

If any precondition fails, STOP.

## 2. Mission

Execute Source 18 Stage 12 only.

Create the initial implementation package as one coherent three-document set:

- `engineering-contract.md`
- `lovable-build-prompt.md`
- `verification-checklist.md`

Each document must be:

`DRAFT — MISSION CONTROL REVIEW REQUIRED`

## 3. Traceability requirements

Use the locked FCTM as the accounting source.

- Every one of the 267 `IN SCOPE` rows must map to at least one Engineering Contract obligation.
- Every one of the 267 `IN SCOPE` rows must map to at least one Verification Checklist item with planned evidence class.
- Permission, isolation and denial rows need named negative-path checklist items.
- Experience rows need named runtime scenarios.
- The Build Prompt must identify the FCTM rows assigned to each workstream and forbid behavior outside them.
- No downstream package item may add Product Truth. Behavior-adding orphans raise T3 and require STOP / Mission Control disposition.

## 4. Preserve

Preserve exactly:

- locked Product Blueprint;
- locked EIS;
- canonical FCTM classifications and assignments;
- Founder Decision Record 09;
- ESC-1 OPEN T8;
- `22-§20-2` BLOCKED / IN SCOPE;
- G-6/T4 UNVERIFIED;
- professional legal/privacy/retention deferral;
- all Security design findings and implementation/evidence dependencies.

## 5. Prohibited

Do not:

- implement code;
- create or run schema/SQL/migrations;
- mutate provider or production state;
- modify locked Blueprint or locked EIS;
- change FCTM disposition/classification/mission assignment;
- authorize implementation;
- silently defer an `IN SCOPE` row;
- treat a blocked/conditional row as out of scope.

## 6. Output and handoff

Return the three draft package documents plus a traceability report showing:

- Engineering Contract coverage count;
- Verification Checklist coverage count;
- workstream-to-row mapping;
- missing rows: 0 required;
- behavior-adding orphans: 0 required;
- any blocked/conditional implementation dependency preserved as `IN SCOPE`;
- exact GitHub Actions state, reported as observed.

Write the live handover to:

`communication/live/report1.30.md`

End:

**STAGE 12 INITIAL IMPLEMENTATION PACKAGE SUBMITTED — STOP FOR MISSION CONTROL REVIEW**

No self-merge. No implementation.
