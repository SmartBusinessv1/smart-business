# SMART BUSINESS MISSION CONTROL — MC-151

# SB-P-1.12 — Stage 10 Finding-Scoped EIS Correction

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Recipient:** Claude Code — existing Stage 9 EIS owner  
**Date:** 2026-09-30  
**Status:** DRAFT — NOT EFFECTIVE UNTIL THIS PR IS HUMAN-MERGED TO CANONICAL `main` AND MISSION CONTROL VERIFIES THE MERGE  
**Communication pair:** `communication/live/instruction1.24.md` → `communication/live/report1.24.md`  
**Target candidate PR:** #687  
**Reviewed candidate head:** `9a9a4f390dbf04f6eb77e4f800bbb25ca2eab701`

## 1. Purpose

Apply only the Stage 10 correction required by Founder Decision Record 09 and MC-150.

Do not restart or rewrite the EIS.

Do not alter unrelated architecture.

## 2. Canonical Founder decision

Read in full:

`communication/missions/SB-P-1.12/founder/09-reference-cost-margin-permission-semantics.md`

Apply it exactly.

Core rule:

- Reference Cost and margin permissions govern Smart Business-provided fields, calculations, reports, aggregates and derived outputs.
- A Manager explicitly delegated Reference Cost may see selling price where otherwise authorized.
- Human arithmetic on separately authorized visible values is not itself Smart Business granting margin permission.
- Smart Business must not compute, label, display, report or expose margin unless margin is separately delegated.
- Margin computation/display semantics remain undefined until separately approved.

## 3. Required EIS corrections

Update only the T8-EIS-1 / derived-disclosure material and directly dependent status/traceability/report text.

At minimum:

### 3.1 Section 12.4

Remove the assumption that protected margin is necessarily `selling price - Reference Cost`.

Remove the invented margin-only rule requiring grouped/non-invertible aggregate output.

Replace the cost-only discussion with the canonical Founder rule:

- exact delegated Reference Cost may coexist with selling price if selling price is otherwise authorized;
- arithmetic a human may independently perform is not itself an unauthorized Smart Business margin output.

State explicitly that:

- Smart Business may not compute, label, display, report, aggregate or expose margin unless `catalog.margin.read` or the canonical equivalent is present;
- no margin formula is selected by this EIS;
- no per-product vs aggregate margin display semantics are selected by this EIS;
- if later Product Truth defines margin computation/display, the projection layer must enforce the resulting permission boundary.

### 3.2 EIS-PPM-04

Rewrite only as necessary to reflect Founder Decision Record 09.

It must no longer be HELD for T8-EIS-1.

It must not contain aggregate-only margin semantics.

### 3.3 T8 / question register

Mark T8-EIS-1 / EQ-S9-1 as:

`RESOLVED BY FOUNDER DECISION RECORD 09`

Do not erase historical provenance.

Do not mark ESC-1 closed.

### 3.4 Traceability

Preserve all 267 FCTM row mappings.

Do not add/remove/reclassify FCTM rows.

If EIS requirement counts change solely because duplicate or obsolete T8 wording is removed, report the exact before/after count.

No product-behavior orphan may be introduced.

### 3.5 Reports and ledgers

Update:

- Stage 9 creation report only where necessary to record the Founder correction;
- mission README / decision log / handover log only for current status;
- new `communication/live/report1.24.md` with exact-head handoff.

Do not rewrite historical reports to pretend the T8 never occurred.

## 4. Authorized writable paths

Edit only:

1. `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`
2. `communication/missions/SB-P-1.12/claude-code/36-stage9-eis-creation-report.md`
3. `communication/missions/SB-P-1.12/README.md`
4. `communication/missions/SB-P-1.12/decision-log.md`
5. `communication/missions/SB-P-1.12/handover-log.md`
6. `communication/live/report1.24.md`

Do not modify:

- locked Blueprint;
- FCTM;
- Founder Decision Record 09;
- prior Founder records;
- Security reports;
- Mission Control records;
- contracts;
- code/schema/SQL/migrations/provider/production.

## 5. Exact preservation requirements

Preserve:

- all ESC-1 design material unless a direct wording cross-reference to T8-EIS-1 needs correction;
- `22-§20-2` BLOCKED / IN SCOPE;
- G-6/T4 UNVERIFIED;
- legal/privacy/retention deferred status;
- all workstream boundaries except status references to T8-EIS-1;
- SB-P-1.13 dependency boundaries;
- all unrelated EIS requirements and traceability.

## 6. Validation

Before handoff verify:

- six-path write scope only;
- locked Blueprint unchanged;
- FCTM blob unchanged at `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259`;
- all 267 IN SCOPE rows still covered;
- no orphan product behavior;
- T8-EIS-1 resolved only by Founder Record 09;
- aggregate-only margin semantics removed;
- no margin formula invented;
- CI passes.

## 7. Git authority

After this instruction becomes canonical, Claude Code is authorized under:

`SB-P-1.12-WP-STAGE10-T8-EIS1-CORRECTION`

to update the existing PR #687 branch if and only if it is still the same candidate lineage and has not materially drifted.

Permitted:

- fetch/read;
- edit only six authorized paths;
- commit;
- push only the existing mission branch;
- run validation;
- return through `report1.24.md`.

No new PR unless the existing branch is unusable; if unusable, STOP.

No self-merge.

## 8. Stop conditions

STOP if:

- correcting T8-EIS-1 requires changing another locked Product Truth rule;
- any unrelated EIS architecture must materially change;
- any FCTM mapping becomes invalid;
- the branch has material unrelated drift;
- a new Product Truth question appears.

## 9. Post-correction route

After exact-head Mission Control review, the corrected EIS goes to the independent Security specialist for Stage 10 review.

No EIS acceptance or lock is authorized by this instruction.

**STOP FOR MISSION CONTROL STAGE 10 DISPOSITION.**
