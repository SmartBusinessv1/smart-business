# SB-P-1.12 — Stage 2 Mission Truth Pack (DRAFT — CORRECTED)

**Mission ID:** SB-P-1.12
**Lifecycle stage:** Source 18 v1.2, Stage 2 — Mission Truth and Delta Reconciliation (§6)
**Status:** `DRAFT — MISSION CONTROL RE-REVIEW REQUIRED`. Not canonical until this pull request is human-merged (Source 18 §3.3).
**Prepared by:** Claude Code, as Stage 2 Definition Actor under MC-02 (effective since PR #622's human merge, `merged_at 2026-09-22T09:16:35Z`)
**Prepared:** 2026-09-22; corrected three times same day, on Mission Control review of PR #624 heads `4e10dff` (MC-06), `a64ea76` (MC-06 re-review) and `4ef08a8` (MC-06 second re-review, MC-08)
**Authorization:** `communication/live/instruction.md`, Stage 2 authorization (MC-05), effective on human merge of PR #623, `merged_at 2026-09-22T09:29:07Z`, `main@dc5fe69f14843002b46af6ef4116935cc36b6c68`
**Owner of this record:** Mission Control reviews; the Definition Actor (Claude Code) prepares and does not approve its own findings (Source 18 §4.3).

---

## 0. Correction notes (three rounds)

**Round 1 (MC-06, PR #624 comment [`5774508876`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5774508876)):** the first draft's row-count arithmetic did not reconcile (claimed 208; actual counted rows were 202), the matrix under-enumerated obligations within operative/mixed sections, it improperly self-cleared the Stage 3 trigger screen to `NOT TRIGGERED`, and the split-mission-assignment citations needed to name the specific obligation-mapped source per row. All four corrected.

**Round 2 (MC-06 re-review, PR #624 comment [`5776468726`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5776468726)):** accepted the corrected 337-row arithmetic, seven-column structure, obligation expansion and Stage 3 withdrawal — but found two further blockers: **(A)** the independent obligation inventory derived its counts from the FCTM's own row IDs and "reconciled" against those same IDs, which is circular and cannot catch an omitted obligation; **(B)** 97 rows carried no disposition-supporting citation, including a cross-column contradiction at `22-§29-9`. Both corrected: the inventory is rebuilt as a genuinely source-first pointer list with a real, disclosed set-difference against the FCTM (three small discrepancies found and explained, not hidden); every one of the 97 rows now carries a real citation; `22-§29-9`'s disposition was corrected from `ASSIGNED TO LATER MISSION` to `IN SCOPE` to match its own assigned-mission cell, shifting the disposition totals by exactly one row (223/82, not 222/83).

**Round 3 (MC-06 second re-review / MC-08, PR #624 comment [`5776916528`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5776916528)):** found round 2's fixes were mechanically correct but source-inventory completeness was not yet verified — **F5:** Contract 21 §23's 7th non-goal was still missing as an FCTM row. **F6:** the Contract 20 inventory's "scenario 11 is distinct" explanation was invalid (a section-bundle undercount was the real cause), and separately its §22 entry inherited a false citation. **F7:** the "0 citation gaps" measure only checked for non-empty cells — 125 rows carried only a bare `` `NEW` ``/`` `PARTIAL` `` implementation-state tag, not real disposition support. The required independent source-first audit (re-reading all five contracts' full text, not just the three items named) found two further self-caught omissions of the same class as F5 (Contract 21 §10, Contract 7 §8) and fixed all 125 bare citations with real, checkable support. FCTM total moves from 337 to **345** rows (223/82/2/30 → **225/88/2/30**); the obligation inventory now reports source-obligation counts and FCTM representation-row counts as two distinct figures per contract, with the only genuine remaining difference (Contract 17, −4) fully traced and explained.

All three rounds' corrections live in `03-stage2-populated-fctm.md`, `04-stage2-obligation-inventory.md` and `06-stage2-delta-evidence.md`; this overview reflects the current, three-times-corrected state. The validated file-level security discovery (the residual `anon`-grant finding) and the complete Institutional Learning Intake Record are preserved unchanged throughout all three rounds.

## 1. What this Truth Pack is, and is not

Per Source 18 §6 Stage 2, this is the Mission Truth Pack in five parts, reconciling approved mature Product Truth against current evidence — **not** reopening any approved decision. It does not lock anything, does not begin Stage 3 or Stage 4 Blueprint drafting, and does not authorize implementation, production, migration or delivery action. It does not conclude the Stage 3 trigger screen — that determination belongs to Mission Control. Mission Control review and a human merge are both required before any part of it is canonical.

## 2. The five parts and where each lives

| Part (Source 18 §6 Stage 2) | File | Summary |
|---|---|---|
| 1 — Populated FCTM and independent obligation inventory | [`03-stage2-populated-fctm.md`](03-stage2-populated-fctm.md), [`04-stage2-obligation-inventory.md`](04-stage2-obligation-inventory.md) | **345 rows**, `grep`-counted and reproducible, across Contracts 21/22/20/17, the limited Contract 7 opening, and Build Plan §7/§10.1; zero empty citation gaps and zero bare-implementation-tag-only citations (was 97, then 125). Independent obligation inventory is genuinely source-first (not FCTM-derived), reports source-obligation counts (349) and FCTM representation-row counts (345) as two distinct figures, and shows a real, resolved set-difference — one genuine representation consolidation (Contract 17, −4), everything else exact (inventory §3–§4). |
| 2 — Derived constraints | [`06-stage2-delta-evidence.md`](06-stage2-delta-evidence.md) §Part 2 | 3 constraints recorded, none approved Product Truth, each flagged for Mission Control's T6 assessment (unresolved, see Part 4). |
| 3 — Delta | [`06-stage2-delta-evidence.md`](06-stage2-delta-evidence.md) §Part 3 | 6 findings classified `NO PRODUCT EFFECT` (3), `PRODUCT-AFFECTING` (1 — the residual `anon` grant), `ENGINEERING ONLY` (1), and a topology non-probe statement. Unchanged from the first draft — Mission Control's review did not fault this content. |
| 4 — Open decisions and conflicts | [`06-stage2-delta-evidence.md`](06-stage2-delta-evidence.md) §Part 4 | Full T1–T8 screen: T1/T2/T3/T5/T7 screened negative; **T4, T6 and T8 left open, `FLAGGED FOR MISSION CONTROL STAGE 3 GATE DETERMINATION`** — not self-cleared. Two ambiguous-assignment flags routed to Mission Control as a precise unresolved item. |
| 5 — Institutional Learning Intake Record | [`05-stage2-institutional-learning-intake.md`](05-stage2-institutional-learning-intake.md) | Mandatory status statement recorded; 12-question mission-start checklist answered by citation; all 17 OLE promotions individually disposed. Unaffected by the correction; Q11's answer is rechecked below (§3 item 2). |

## 3. Headline findings for Mission Control

1. **FCTM fully populated: 345 rows, `grep`-counted, reproducible commands recorded, zero citation gaps of either kind** (`03-stage2-populated-fctm.md` §G). Every operative/mixed section is expanded to its separately verifiable obligations (Contract 21 grew from 38 rows in the first draft to 107 on this basis); every acceptance scenario is its own row; every row carries a real disposition-supporting citation, not merely a non-empty cell; the independent, source-first obligation inventory reports source-obligation counts (349) distinct from FCTM row counts (345) and shows a genuine, fully-traced set-difference (`04-stage2-obligation-inventory.md` §3–§4).
2. **The Stage 3 gate is not concluded by this document.** T4 (the `anon`-grant Delta finding, classified `PRODUCT-AFFECTING`) and T6 (the three derived constraints) are left explicitly open for Mission Control's own determination, per Source 18's literal trigger text — not self-cleared by an invented exception.
3. **The residual `anon` grant is confirmed, broader than previously recorded, and its production status is `UNVERIFIED`** — direct file evidence shows the original grant covers six tables (not three) plus all functions plus a forward-compatible default-privilege clause; a later hardening migration file remediates three Inventory tables but explicitly excludes `businesses`/`transactions`/`transaction_correction_events`, and its own production execution is `UNVERIFIED` per the repository's own migration authority index. This finding, its live-production `UNVERIFIED` status and its existing approved WS-B remediation context are preserved exactly as found; whether it triggers T4 in Source 18's full sense is now Mission Control's call, not asserted here.
4. **The authority/permission model is confirmed entirely unimplemented**, not partially implemented: no role/membership schema exists at all; the only authorization check anywhere in the application is session authentication; `businesses.owner_id` is `UNIQUE`, meaning even the schema shape assumes one authorized user per business today.
5. **Two Contract 22 sections (Notification Foundation, Location Foundation) have no explicit Build Plan naming source for a later-mission assignment**, stay `IN SCOPE` by the framework's fail-closed default, and are recorded as a precise unresolved-assignment item for Mission Control — not silently absorbed as new SB-P-1.12 work.

## 4. FCTM row count and discovery effort per contract (Source 18 §3.2 item 12, calibration) — corrected

| Contract | Rows (`grep`-counted) | Relative effort |
|---|---|---|
| 21 | 107 | Deepest — wholly assigned; every section expanded to its individual role/dimension/isolation-surface/audit-field obligations, including two self-caught omissions (§10, §23) |
| 22 | 92 | Second-deepest — 32-section split-assignment analysis across three missions plus obligation-level expansion of the in-scope slice, including the two ambiguous-assignment sections |
| 20 | 47 | Moderate — obligation-level expansion of §16/§22; a section-bundle miscount and a false citation on §22 both corrected |
| 17 | 47 | Moderate-deep — obligation-level expansion of §13/§14 (roles, enforcement checks) plus the split-assignment pattern for the rest; §18/§21 source counts corrected |
| 7 (limited) | 34 | Lower — scope boundary already set by MC-03/MC-04; mainly individual scenario disposition plus §10's role expansion; one self-caught omission (§8) |
| Build Plan §7/§10.1 | 18 | Lower — already itemized at the obligation level in the first draft |

**This total (345) is not a target and was not adjusted to reconcile — it is what obligation-level enumeration of the actual approved contract text produces, after closing every confirmed gap**, per Mission Control's explicit instruction not to target a specific figure.

## 5. What remains for Stage 3/4 (not performed here)

- **Mission Control's own T4 and T6 Stage 3 trigger determination** — the central open item this correction surfaces rather than resolves.
- Confirmation (or correction) of the Contract 20/17/22 split-assignment reasoning (`06-stage2-delta-evidence.md` Part 4 §2) and resolution of the two ambiguous-assignment flags (Part 4 §3).
- Mission Control's own review and confirmation of the FCTM completeness test (Gate 10).
- If Mission Control's T4/T6 determination and any resulting Founder dialogue conclude the mission may proceed: Stage 4 Blueprint Sections 1–19, assembled by reference from the 225 `IN SCOPE` rows, remains a **separate, later authorization** — not performed or implied by this Truth Pack.
- Naming the actual Security & Permissions Architecture specialist for the MC-02 §4.2 Stage 7 separation condition remains outstanding and is not this Truth Pack's job to resolve.

## 6. Evidence at this Stage 2 intake

- Remote verified: `origin` resolves to `https://github.com/SmartBusinessv1/smart-business.git`.
- Base verified: `origin/main` at `dc5fe69f14843002b46af6ef4116935cc36b6c68`, matching the live instruction's stated canonical baseline exactly; PR #622 and PR #623 both confirmed `MERGED` via `gh pr view`, both merged by `SmartBusinessv1` (`is_bot: false`).
- All governing-source blob SHAs re-verified byte-identical to the Stage 1 intake baseline (no drift): Source 18, Contracts 21/22/20/17/7, Build Plan, GPCV, Institutional Memory guide. OLE promotions directory unchanged (18 files).
- Full text of Contracts 21, 22, 20, 17, 7, 23 and 24 read directly in this session (not summarized by a research subagent) to support the FCTM's disposition-level reasoning.
- **This correction's row and disposition totals were verified by running `grep -c` against the actual committed file content, not hand-computed** — the exact commands are reproduced in `03-stage2-populated-fctm.md` §G.
