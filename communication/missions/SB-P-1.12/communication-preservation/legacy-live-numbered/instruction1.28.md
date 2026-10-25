# SMART BUSINESS MISSION CONTROL — MC-161

# SB-P-1.12 — Stage 10 Narrow SEC-EIS10-04 Refinement

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Recipient:** Claude Code — existing EIS owner  
**Date:** 2026-10-01  
**Status:** DRAFT — NOT EFFECTIVE UNTIL THIS PR IS HUMAN-MERGED TO CANONICAL `main` AND MISSION CONTROL VERIFIES THE MERGE  
**Work package:** `SB-P-1.12-WP-STAGE10-SEC-EIS10-04-REFINEMENT`  
**Communication pair:** `communication/live/instruction1.28.md` → `communication/live/report1.28.md`

## 1. Hydrate from canonical repository sources

Read in full:

1. `communication/missions/SB-P-1.12/mission-control/34-stage10-sec-eis10-04-refinement-authorization.md`
2. `communication/missions/SB-P-1.12/specialists/05-stage10-eis-security-delta-rereview.md`
3. `communication/live/report1.27.md`
4. PR #687 exact starting candidate
5. locked Blueprint
6. canonical FCTM
7. Founder Decision Record 09 as needed for boundary verification.

Hydrate from repository sources, not pasted chat summaries.

## 2. Mission

Refine `SEC-EIS10-04` only.

Expected starting PR #687 head:

`022aefbd49f483b8bca1ad469fd8980718670f67`

Expected EIS v0.3 blob:

`28f713581ffea5312f36e3508380c38539b05e90`

Apply only:

- business lifecycle state under the business authority-state epoch/lock;
- lifecycle transitions contend and increment epoch in the same transaction;
- all person rows relied on by a decision are locked;
- deterministic ordering for multiple same-type person rows;
- transfer locks/revalidates both Owner persons plus business authority-state under that ordering;
- `EIS-KER-01` reconciled with the §8.1 authority-epochs kernel result contract.

Do not reopen the ten findings Security already closed.

## 3. Writable paths

Write only:

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`
- `communication/missions/SB-P-1.12/claude-code/36-stage9-eis-creation-report.md`
- `communication/missions/SB-P-1.12/README.md`
- `communication/missions/SB-P-1.12/decision-log.md`
- `communication/missions/SB-P-1.12/handover-log.md`
- `communication/live/report1.28.md`

## 4. Preserve

Preserve:

- locked Blueprint;
- canonical FCTM and 267/267 coverage;
- zero behavior-adding orphans;
- Founder Decision Record 09;
- ESC-1 OPEN T8;
- `22-§20-2` BLOCKED / IN SCOPE;
- G-6/T4 UNVERIFIED;
- legal/privacy/retention deferral;
- all ten Security findings already closed at design level.

No implementation/runtime/production claim.

## 5. Stop conditions

STOP and return to Mission Control if:

- Product Truth would change;
- merchant-visible deletion meaning would change;
- FCTM or Blueprint would change;
- a new requirement becomes necessary;
- unrelated architecture would change;
- PR #687 has material branch drift;
- implementation/schema/SQL/migration/provider/production action is needed.

## 6. Handoff

Return through:

`communication/live/report1.28.md`

Include:

- exact new PR #687 head;
- exact new EIS blob;
- sections/requirements changed;
- before/after traceability counts;
- preservation of the ten closed findings;
- hold status;
- exact GitHub Actions state.

End:

**SEC-EIS10-04 REFINEMENT SUBMITTED — STOP FOR MISSION CONTROL REVIEW**

Do not self-merge PR #687.
