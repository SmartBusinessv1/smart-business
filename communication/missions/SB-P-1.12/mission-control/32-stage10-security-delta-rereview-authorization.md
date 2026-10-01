# SMART BUSINESS MISSION CONTROL — MC-159

# SB-P-1.12 — Stage 10 Independent Security Delta Re-Review Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Stage:** 10 — EIS Review  
**Date:** 2026-10-01  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND MISSION CONTROL POST-MERGE VERIFICATION  
**Recipient:** Security & Permissions Architecture — existing MC-33-appointed specialist room  
**Work package:** `SB-P-1.12-WP-STAGE10-EIS-SECURITY-DELTA-REREVIEW`  
**Live instruction:** `communication/live/instruction1.27.md`

## 1. Purpose

Perform an independent finding-scoped delta re-review of EIS version 0.3 after Claude Code's MC-157 refinement.

This is not a whole-EIS restart.

This authorization does not accept or lock the EIS and does not authorize merge of PR #687.

## 2. Exact candidate

Review exactly:

- PR: `#687`
- exact head: `022aefbd49f483b8bca1ad469fd8980718670f67`
- EIS path: `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`
- EIS v0.3 blob: `28f713581ffea5312f36e3508380c38539b05e90`
- refinement handover: `communication/live/report1.26.md`
- handover blob: `4a3f7bca9fb16d5b3772a2b03c8005d3809e91d5`

Canonical prior Security review:

- `communication/missions/SB-P-1.12/specialists/04-stage10-independent-eis-security-review.md`
- blob `ddaa405f6d3145249fbcc6e29d88c9aaa229285b`

Canonical MC-157 refinement authorization:

- `communication/missions/SB-P-1.12/mission-control/31-stage10-security-eis-refinement-authorization.md`

Canonical live instruction:

- `communication/live/instruction1.26.md`

## 3. Mission Control pre-review verification already completed

Mission Control independently verified:

- refinement delta from authorized starting head `a1beda8c006ab69b28f5354b686c941384cd1e86` to current head is exactly one commit;
- that delta touches exactly the six MC-157 authorized paths;
- EIS requirements: 80 → 81;
- only added requirement: `EIS-ISO-10`;
- row-to-requirement table: 267 rows before and after;
- requirement-to-row links: 460 → 463;
- only changed row mappings are `21-§7`, `BP-§10.1-7`, and `BP-§10.1-8`, each adding `EIS-ISO-10`;
- EIS §§12, 15, 16 and 17 are byte-identical to version 0.2;
- GitHub Actions created no run/status on the candidate head; this is missing automation evidence, not CI success.

## 4. Required delta review

Re-review only the design corrections for:

- `SEC-EIS10-01`
- `SEC-EIS10-02`
- `SEC-EIS10-03`
- `SEC-EIS10-04`
- `SEC-EIS10-05`
- `SEC-EIS10-06`
- `SEC-EIS10-07`
- `SEC-EIS10-08`
- `SEC-EIS10-09`
- `SEC-EIS10-10`
- `SEC-EIS10-11`

For each finding, determine:

1. whether the exact design defect identified in the prior Security review is corrected;
2. whether the correction introduces any new security or authority defect;
3. whether the correction remains within locked Product Truth;
4. whether the correction preserves one-kernel authority and cross-business isolation;
5. whether required testing/evidence boundaries are sufficient and correctly deferred where implementation does not yet exist.

## 5. Specific review attention

Pay particular attention to:

### 5.1 Verified-principal model

Confirm no caller-supplied actor/service-role possession can become authority and no parallel resolver is introduced.

### 5.2 Serialization

Confirm the three-row epoch/lock model is internally coherent and sufficient to serialize every mutable authority fact relied upon by an allow decision, including global registry changes, person state, business state, participant/support/automation paths and transfer.

If the proposed abstraction leaves an uncovered authority mutation or deadlock/order ambiguity material enough to invalidate the design, state it precisely.

### 5.3 Confirmation

Confirm atomic consume, concurrent contender behavior, replay and idempotency are transactionally coherent.

### 5.4 Privileged access

Confirm privileged reads and writes are equally bound to verified principal, business, action and object scope.

### 5.5 Denial durability

Confirm direct authenticated RPC denial behavior is coherently covered and that server-boundary-only command families cannot bypass durable denial evidence.

### 5.6 SECURITY DEFINER

Confirm `EIS-ISO-10` is sufficient as the cross-cutting hardening invariant and its three FCTM mappings are legitimate without altering Product Truth.

### 5.7 Governed business deletion / tombstone

Confirm the non-authorizing tombstone design resolves the RESTRICT-vs-parent-delete contradiction without changing approved merchant-visible deletion meaning.

If merchant-visible Product Truth would in fact change, flag a Founder gate rather than silently accepting the design.

### 5.8 `22-§20-2`

Confirm the future unblocking evidence list now includes governed deletion, migration/backfill reconciliation, post-migration constraint inventory, mixed retained/deletable classes, legal/dispute hold and transferred-business history tests.

The row must remain BLOCKED / IN SCOPE.

### 5.9 SB-P-1.13 consumption

Confirm the dependency boundary now waits for EIS lock, required WS-A1/A2/D/E evidence, relevant WS-A3 table-family cut-over/isolation and Mission Control acceptance.

## 6. Carried findings

Reconfirm that:

- `SEC-EIS10-12` remains an implementation-verification requirement only;
- `SEC-EIS10-13` remains an effective-access evidence gate;
- `SEC-EIS10-14` remains a provider/legal/evidence gate;
- Founder Decision Record 09 is not reopened absent materially new conflict.

## 7. Holds

Preserve:

- R-2 CLOSED / SATISFIED;
- ESC-1 OPEN T8;
- `22-§20-2` BLOCKED / IN SCOPE;
- G-6/T4 UNVERIFIED;
- professional legal/privacy/retention validation deferred;
- EIS DRAFT / NOT LOCKED;
- implementation package NOT AUTHORIZED;
- implementation NOT AUTHORIZED;
- schema / SQL / migrations NOT AUTHORIZED;
- provider mutation / production action NOT AUTHORIZED.

## 8. Writable paths

Write only:

1. `communication/missions/SB-P-1.12/specialists/05-stage10-eis-security-delta-rereview.md`
2. `communication/live/report1.27.md`

Do not modify the EIS, Blueprint, FCTM, Founder records, prior specialist reports, code, schema, SQL, migrations, provider or production state.

## 9. Required output

Return a finding-by-finding table for `SEC-EIS10-01` through `SEC-EIS10-11` with:

- finding;
- exact corrected EIS section/requirement;
- status: CLOSED AT DESIGN LEVEL / REFINEMENT STILL REQUIRED / FOUNDER GATE REQUIRED;
- remaining implementation/evidence dependency;
- any new risk.

Also state:

- whether EIS v0.3 is security-sufficient for Mission Control Stage 10 acceptance;
- whether any new Product Truth question exists;
- whether any FCTM or locked Blueprint issue exists;
- whether the delta remained finding-scoped.

End with exactly one disposition:

**SECURITY DELTA ACCEPTABLE FOR MISSION CONTROL STAGE 10 DISPOSITION**

or

**SECURITY REFINEMENT STILL REQUIRED**

or

**FOUNDER PRODUCT TRUTH GATE REQUIRED**

**STOP for Mission Control disposition.**
