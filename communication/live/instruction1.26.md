# SMART BUSINESS MISSION CONTROL — MC-157

# SB-P-1.12 — Stage 10 Security EIS Refinement

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Recipient:** Claude Code — existing EIS owner  
**Date:** 2026-09-30  
**Status:** DRAFT — NOT EFFECTIVE UNTIL THIS PR IS HUMAN-MERGED TO CANONICAL `main` AND MISSION CONTROL VERIFIES THE MERGE  
**Communication pair:** `communication/live/instruction1.26.md` → `communication/live/report1.26.md`  
**Work package:** `SB-P-1.12-WP-STAGE10-SECURITY-EIS-REFINEMENT`  
**Target candidate PR:** #687  
**Expected starting head:** `a1beda8c006ab69b28f5354b686c941384cd1e86`  
**Expected starting EIS blob:** `0ebd7c2b4298a81b467021dfb8a52cf42b8c293d`

## 1. Hydrate from canonical repository sources

Read in full from canonical `main`:

1. `communication/missions/SB-P-1.12/mission-control/31-stage10-security-eis-refinement-authorization.md`
2. `communication/missions/SB-P-1.12/specialists/04-stage10-independent-eis-security-review.md`
3. `communication/live/report1.25.md`
4. the locked Blueprint;
5. the canonical FCTM;
6. Founder Decision Records 04, 05, 06, 07 and 09;
7. the current PR #687 EIS candidate.

Do not work from pasted chat summaries where the canonical repository provides the source.

## 2. Mission

Apply only the eleven Stage 10 Security design corrections:

`SEC-EIS10-01` through `SEC-EIS10-11`.

Do not restart the EIS.

Do not alter Product Truth.

Do not implement code, schema, SQL, migrations, provider or production changes.

## 3. Required correction set

Apply the exact correction language in the canonical MC-157 authorization and the canonical Security report.

At minimum, the corrected EIS must establish:

- one verified-principal model across human, support, participant and automation paths;
- first-run routing that prevents accidental business creation without blocking approved multi-business ownership;
- the invariant that generic membership removal cannot remove the active Owner;
- complete commit-time serialization across every mutable authority dependency;
- atomic single-use confirmation consumption with committed replay behavior;
- actor/business/action/object binding for privileged service-role reads as well as writes;
- durable denial auditing for direct authenticated RPC paths;
- hardened `SECURITY DEFINER` search-path, ownership and EXECUTE boundaries;
- a stable non-authorizing business identity design compatible with retained records and governed deletion;
- complete `22-§20-2` future-unblocking evidence requirements including governed deletion, migration/backfill and legal-hold tests;
- an SB-P-1.13 consumption boundary that waits for the relevant enforcement and audit workstreams and table-family cut-overs.

## 4. Preservation requirements

Preserve:

- Founder Decision Record 09 correction;
- no invented margin formula;
- no aggregate-only margin semantics;
- R-2 CLOSED / SATISFIED;
- ESC-1 OPEN T8;
- `22-§20-2` BLOCKED / IN SCOPE;
- G-6/T4 UNVERIFIED;
- legal/privacy/retention validation deferred;
- provider/backups/PITR evidence boundaries;
- locked Blueprint unchanged;
- FCTM unchanged.

Do not turn `SEC-EIS10-12`, `SEC-EIS10-13`, or `SEC-EIS10-14` into new design scope except where the canonical Security report directly ties legal-hold test coverage to `SEC-EIS10-10`.

## 5. Authorized writable paths

Edit only:

1. `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`
2. `communication/missions/SB-P-1.12/claude-code/36-stage9-eis-creation-report.md`
3. `communication/missions/SB-P-1.12/README.md`
4. `communication/missions/SB-P-1.12/decision-log.md`
5. `communication/missions/SB-P-1.12/handover-log.md`
6. `communication/live/report1.26.md`

No other path is authorized.

## 6. Traceability

Maintain:

- all 267 IN SCOPE FCTM rows represented;
- canonical FCTM blob `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259`;
- zero product-behavior orphans;
- explicit engineering-only reasons where applicable.

If EIS requirement count or FCTM-link count changes, report the exact before/after values and explain each change.

For each `SEC-EIS10-01` through `SEC-EIS10-11`, provide:

- corrected section(s);
- corrected requirement ID(s);
- affected test/workstream text;
- status: corrected / unresolved;
- evidence.

## 7. Git authority

After this instruction becomes canonical, update the existing PR #687 branch only if it remains the same candidate lineage and has not materially drifted.

Permitted:

- fetch/read canonical sources;
- edit the six authorized paths;
- commit;
- push only the existing PR #687 mission branch;
- run validation;
- return through `report1.26.md`.

Do not open a replacement PR unless Mission Control separately authorizes it.

No self-merge.

## 8. Stop conditions

STOP if:

- PR #687 has materially unrelated drift;
- a locked Product Truth change is required;
- merchant-visible deletion meaning would change;
- a new participant authentication product experience is required;
- lifecycle ownership must be redefined;
- any FCTM row needs reclassification;
- implementation or environment mutation is required.

## 9. Required handoff

Return:

- new exact PR #687 head;
- new exact EIS blob;
- six-path changed-file confirmation;
- locked Blueprint blob confirmation;
- FCTM blob confirmation;
- 267/267 coverage confirmation;
- requirement count and link count before/after;
- product-behavior orphan count;
- finding-by-finding closure table for `SEC-EIS10-01` through `SEC-EIS10-11`;
- carried status for `SEC-EIS10-12` through `SEC-EIS10-14`;
- CI/validation result without fabricating unavailable GitHub Actions evidence.

**STOP FOR MISSION CONTROL STAGE 10 DISPOSITION.**
