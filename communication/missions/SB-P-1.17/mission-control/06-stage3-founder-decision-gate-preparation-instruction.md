# SB-P-1.17 — Stage 3 Founder Decision Gate Preparation Instruction

**Status: PROPOSED — effective only after Founder human merge and Mission Control post-merge verification**  
**Mission:** SB-P-1.17 — Manager Operations  
**Lifecycle:** Source 18 v1.2 Stage 3, Founder Decision Gate — **TRIGGERED; PREPARATION ONLY**  
**Definition Actor:** Claude Code; Mission Control retains review and Founder retains exclusive product-decision authority  
**Intake baseline:** `main@a96c4ba998c2ebe0ebcb94f68cc172fb54a8dd62` — merged PR #989  
**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED**

## Specialist handoff: hydrate first, then execute

**1. Mandatory short repository hydration.** Connect to `SmartBusinessv1/smart-business`; verify current protected `main` and the current source blobs. Read Source 18 Stage 3 and triggers T1–T8, Phase 1 operating pattern, the accepted SB-P-1.17 Stage 1 Intake Pack, Stage 2 discovery authorization, and the five canonical Stage 2 files under `communication/missions/SB-P-1.17/claude-code/01–05`. Read Build Plan §10.6, Contracts 7/13/17 and only the delegated requirements/Founder records required to resolve the five items. In particular use the completed report §12 and Truth Pack Parts B–D. **Repository truth outranks chat; report any divergent blob or new decision before proceeding.**

**2. Task — PREPARE a bounded Founder Brief, decision options and an unapproved Founder Decision Record draft.** This instruction authorizes **documentary preparation and read-only source analysis**, not holding a Founder dialogue, settling decisions, approving a gate or progressing to Stage 4. Keep questions merchant-centred, concise and answerable; label recommendations as proposals, and preserve Founder authority.

Prepare one single-page-style executive Founder Brief and a supporting decision-evidence annex for exactly the genuine Stage 2 candidates:

| Item | Product choice to put to Founder | Do not pre-decide |
|---|---|---|
| **U-01** | Which Manager Operations capabilities may an Owner explicitly delegate, and which remain Owner-reserved: reorder review/confirmation, standing-rule creation, supplier management, counter/operator detail, cash count and variance | No default Manager grant or Owner intelligence leak; refer to SB-P-1.15 R15-11 and SB-P-1.16 FPDR-7 only as precedents |
| **U-02** | Which **standard POS bridge** interface/product class, minimum data/evidence capabilities and fallback boundary constitute an honest Phase 1 commitment compatible with Founder Scenario B | Do not name a vendor or promise availability without evidence. Research POS feasibility read-only if needed; label unverified products/interfaces UNKNOWN; no vendor contracts or live integration |
| **U-05** | Whether a confirmed purchase request can be recorded and handed to the merchant to send manually (copy/share/print) before SB-P-1.20, or supplier dispatch is wholly deferred | No system-sent external supplier message or channel scope pull-forward |
| **U-06** | Whether supplier purchase prices in Manager reorder/history contexts fall under the Owner-only Reference Cost/margin boundary `12:FR-09`; identify explicitly delegated exceptions, if any | Keep DC-05 a provisional safe hold; never infer price access from Manager role |
| **U-13** | Whether and how historical free-text supplier-name purchases can be linked to business-scoped supplier identity (e.g. merchant-confirmed non-destructive attribution, prospectively only, or other Founder option) | No automatic identity merging, transaction rewrites, false history or guessed attribution |

For each candidate: exact cited FCTM rows and indirect holds as distinguished in completion report §12; approved source text vs derived question; two or three meaningfully different product options; operational consequence and merchant experience; default-preserving recommendation explicitly marked **NOT APPROVED**; blocking and unaffected behavior; proposed verifiable acceptance condition. Distinguish Founder choices from implementation mechanics.

**3. T6/T7 and retained watches.** Separately summarize DC-04/05/06/08/09/12/14/15 for Mission Control screening. If a materially merchant-visible derived constraint is not answered by the five questions, flag it for a separate narrow Founder determination **without inventing approval**. Verify U-09 added row slices `7-§6-4b` and `7-§6-5b` plus U-12 joint supplier-side allocation without altering original mission assignments. Preserve W-1/FIN-01 `owed_by_business` as provisional, and U-11 employee/operator privacy and legal research as a hold. The five existing `UNRESOLVED FOUNDER DECISION` FCTM rows from Build Plan §15 are **not** the same five Stage 3 candidates and should not be reopened unless a real critical-path dependency emerges.

**4. Deliverables and review.** Create only documentary drafts under `communication/missions/SB-P-1.17/claude-code/**`: (a) Stage 3 Founder Brief, (b) question/option and evidence annex with exact source citations, (c) **UNAPPROVED** Founder Decision Record template with all five fields pending, and (d) completion/handover note including Stage 3 trigger screen, blockers and proposed Founder conversation format. Do not write outcomes as decided. Prepare a mission review branch and PR only with complete Git authorization under `AGENTS.md` and the Communication and Handover Protocol; otherwise stop before Git operations and return exact missing values. A later narrow Git-publication instruction may be supplied. Founder-only merge.

**5. Non-authorizations and stop.** No Stage 3 approval/decision, no Stage 4 Blueprint, no FCTM reclassification, no locked contract rewrite, no POS provider activation, no user-data changes, no app code/migrations/CI env changes, no production/delivery sync, no SB-P-1.16 reopening. Treat all upstream kernels and provider access as unverified implementation. **STOP FOR MISSION CONTROL REVIEW OF FOUNDER BRIEF; THEN FOUNDER PRODUCT DECISIONS, IF AUTHORIZED.**
