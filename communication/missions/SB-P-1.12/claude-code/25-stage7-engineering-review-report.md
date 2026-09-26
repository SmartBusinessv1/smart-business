# SB-P-1.12 — Stage 7 Engineering Review Report

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Prepared by:** Claude Code, Source 18 §4.4 Engineering Review owner
**Prepared:** 2026-09-26
**Authority:** MC-35 activation record (`mission-control/21-stage7-engineering-review-activation-record.md`), work package `SB-P-1.12-WP-S7`, effective through the human merge of PR #640 and Mission Control's MC-37 post-merge verification ([comment 5844925720](https://github.com/SmartBusinessv1/smart-business/pull/640#issuecomment-5844925720)); MC-38 execution instruction
**Branch:** `mission/SB-P-1.12-stage7-engineering-review`, created from `main@733f33935b37f6e3b5b4f7e8916f0161d6646527`
**Status:** `DRAFT — AWAITING MISSION CONTROL REVIEW`

This report accompanies Blueprint Sections 20 and 21. It approves nothing and is not independent security review.

## 1. Canonical baseline verified

| Item | Evidence |
|---|---|
| `origin/main` at branch creation | `733f33935b37f6e3b5b4f7e8916f0161d6646527`, the PR #640 merge commit, directly after `df5d5257` |
| PR #640 | Human-merged `2026-09-26T09:15:55Z` at approved head `6a8ac4e568ee2f65d37cb8148387fcaab87adae9` |
| G-1 | Satisfied by the MC-35 record (MC-37 verification) |
| G-2 | Appointment satisfied (MC-33, PR #639, MC-34). The independent review is outstanding |
| Locked branch and file numbers | `mission/SB-P-1.12-stage7-engineering-review` absent locally and on `origin`; `claude-code/25` and `claude-code/26` unused |
| Prior live report | Preserved byte-identically at `claude-code/26-stage7-activation-live-report-snapshot.md` (same Git blob as `main`) |

## 2. Deliverables and where they are

| Deliverable (activation record §5) | Location |
|---|---|
| A. Section 20, Engineering Review | Blueprint §20.1–§20.3 |
| B. Section 21, Engineering Questions, Risks & Recommendations | Blueprint §21.1–§21.6 |
| C. Per-row assessment | Blueprint §20.5, one entry per `IN SCOPE` row |
| D. Early delivery plan | Blueprint §20.4 |
| E. Stage 7 report | This file |

## 3. Review coverage

- **Rows.** 228 of 228 `IN SCOPE` FCTM rows addressed. The register's row IDs were extracted and compared to the FCTM Disposition column: same set, same order. By source: Contract 21, 101; Contract 22, 75; Contract 17, 20; Build Plan, 18; Contract 7, 9; Contract 20, 5.
- **Results (engineering proposals, not accepted findings; corrected under MC-40 and MC-41).** `FEASIBLE` 176; `CONDITIONAL` 51; `BLOCKED` 1 (`22-§20-2`, open T8); no row-level `HELD` result. `FEASIBLE` is a proposed buildability assessment, not verified implementation, runtime behaviour, completed security review or acceptance (SEC-S7-09). History: at head `88b92566`, 184 / 43 / 1 `HELD` / 0 `BLOCKED`; at `fc11e722`, 184 / 43 / 0 / 1.
- **Independent review.** 190 rows `PENDING`, 38 `N/R` (previously 181 and 47; nine rows reclassified under MC-41, see §14).
- **FCTM.** No disposition, build commitment, commercial classification or mission assignment changed. No row moved to a later mission.
- **Evidence class.** Repository files at `main@733f3393` only. No database, provider or production access, and no SQL executed.

## 4. Blocked, held and conditional findings

- **Blocked (T8):** `22-§20-2`, blocked by the open T8 that Mission Control recorded for ESC-1 (MC-40). Its FCTM disposition stays `IN SCOPE`. Its durability work is held pending the independent Security & Permissions Architecture review and Mission Control disposition.
- **Held conclusions inside rows:** the durability conclusions only of `21-§19-1`–`21-§19-8`, `22-§29-12`, `22-§14-5` and `BP-§7-1` (ESC-1); ownership-cardinality conclusions (EQ-1, G-4); derived-value inference conclusions (EQ-2, G-3). These rows stay `CONDITIONAL` or `FEASIBLE` on their other conclusions and are not blocked automatically.
- **Conditional:** 51 rows, each naming its dependency in the register: G-6 production state, G-4, G-3, G-5, G-7, ESC-1 durability, the source-complete authority-surface inventory (SEC-S7-02), the execution-boundary recheck (SEC-S7-05) or denial-audit durability (SEC-S7-07).

## 5. ESC-1 — open T8 (Mission Control classification, MC-40; specialist challenge accepted, MC-41)

**Classification.** Mission Control classified ESC-1 as an open T8 security and integrity finding in its MC-40 intake disposition on PR #641. It is held pending the independent Security & Permissions Architecture review and Mission Control disposition.

**Repository evidence (DDL): two separate paths.** (1) Owner API path: an Owner `DELETE` policy and `authenticated` `DELETE` grant on `businesses`, reachable through the API though not offered by the UI. (2) Auth-user path: `businesses.owner_id` references `auth.users(id) ON DELETE CASCADE`, so deleting the Owner's Auth user deletes the business outside the application. Cascading foreign keys follow in both: by Claude Code's own inventory, not independently verified, 18 to `businesses`. Existing append-only catalog and inventory history may block a delete, but that is not a universal durability proof; `transactions` and `transaction_correction_events` have no delete guard. No deletion lifecycle and no remediation is selected.

**Evidence class.** These are statements about migration DDL only. Nothing was executed. Runtime behaviour, and whether live production grants, policies, foreign keys and triggers match the files, are not established (G-6, T4 `UNVERIFIED`).

**Effect.** It bears on `22-§20-2` (durable history), which is `BLOCKED`, and on the durability conclusions of `21-§19-1`–`21-§19-8`, `22-§29-12`, `22-§14-5` and `BP-§7-1`, which are held while their other conclusions continue (SEC-S7-08). Unrelated rows are not blocked. Any product question within it goes to the Founder through Mission Control.

## 6. Independent security review status and handoff

- **Status:** not complete. The appointed Security & Permissions Architecture room (MC-33) reviewed head `88b9256612e7d8bf1db88ec02c29eac8b5d545f9`; its report reached Mission Control through Founder chat and is not a repository file. Mission Control dispositioned it as CORRECTION REQUIRED (MC-41, [comment 5845390537](https://github.com/SmartBusinessv1/smart-business/pull/641#issuecomment-5845390537)). The specialist has not reviewed `fc11e722` or this reconciliation. No finding in this draft is accepted or relied on, and the grouped review of the originally `PENDING` rows is not approval of each `FEASIBLE` conclusion.
- **First reviewable material (exact references on this branch):**
  1. `docs/phase-1-mission-blueprint/active/SB-P-1.12.md` §20.2 and §20.3 E1, E2, E10.
  2. Same file §20.4.2 and §21.2 ER-1 to ER-5.
  3. Same file §21.1 ESC-1; this report §5.
  4. Same file §20.3 E3, E4, E13.
  5. Same file §20.5, the 190 rows marked `PENDING`.
- **Re-review scope (MC-41):** the correction delta from `88b92566`, every finding changed under SEC-S7-01 to SEC-S7-09 (§14), and the nine newly `PENDING` rows.
- **Handoff needs.** The reviewer needs the branch head of this DRAFT PR. Recording its findings under `communication/missions/SB-P-1.12/specialists/` needs a separate exact-scope authorization, which Claude Code does not hold. Reliance disclosure: this review uses the SB-P-1.11 catalog executor-role and preview-token patterns as precedents.

## 7. Unanswered questions

- **Founder-reserved or Founder-routable:** EQ-1 (multiple-business ownership, G-4); EQ-2 (F-03 derived-value inference, G-3); ESC-1, if Mission Control routes it as a product question.
- **Mission Control:** EQ-3 (T4 read-only verification, S-3); EQ-4 (required-check governance, S-7); EQ-5 (topology facts, S-4); ESC-1 classification.

## 8. Required follow-on evidence work (separately authorized; none performed)

1. Read-only production verification of grants, RLS, function and default privileges and migration ledger (G-6).
2. Topology verification: test and production project identities, storage policies, rehearsal environment (G-7).
3. Production access-token lifetime (EQ-6).
4. Branch-protection and required-check re-verification before any governance decision (G-5).

## 9. T1–T8 screen

T1: EQ-1 and EQ-2 already open; any product question within ESC-1 goes to the Founder through Mission Control. T2: none. T3: none. T4: historically triggered, unchanged, production `UNVERIFIED`. T5: none. T6: none new. T7: none; all 228 rows stay `IN SCOPE`. T8: **open — ESC-1**, classified by Mission Control (MC-40) as a security and integrity finding on repository-DDL evidence; `22-§20-2` `BLOCKED` and still `IN SCOPE`; no other T8.

## 10. Blueprint change evidence

Diff of `docs/phase-1-mission-blueprint/active/SB-P-1.12.md` against `main@733f3393` has exactly three regions: Metadata rows (lines 10, 12, 21, 22, 26); one new Section 18 row (v0.4); and the appended Sections 20 and 21 after the end of Section 19. Sections 1–17 and 19 are byte-identical.

| Metadata row | Before | After |
|---|---|---|
| Lifecycle Stage | Stage 4 — Product Blueprint Sections 1–19 — **DRAFT** | Stage 7 — Engineering Review — **DRAFT** (Sections 1–19 approved at Stage 5, MC-21, PR #630; Stage 6 Builder Review findings accepted, MC-24, PR #632) |
| Status | `DRAFT — AWAITING MISSION CONTROL STAGE 5 PRODUCT REVIEW` | `SECTIONS 1–19 APPROVED (v0.3, PR #635); SECTIONS 20–21 DRAFT — AWAITING MISSION CONTROL STAGE 7 REVIEW AND INDEPENDENT SECURITY REVIEW; NOT LOCKED` |
| Builder Review | Not started — separately authorized after Mission Control Stage 5 approval | Complete — findings F-01–F-11 accepted as findings, not implementation decisions (MC-24, PR #632) |
| Engineering Review | Not started — Sections 20–21 remain absent from this document | DRAFT — Sections 20–21 prepared by Claude Code under MC-35 (`mission-control/21-stage7-engineering-review-activation-record.md`); independent Security & Permissions Architecture review (MC-33) outstanding; no finding accepted |
| Next Lifecycle Gate | Mission Control Stage 5 Product Review of Sections 1–19; Stage 6 Builder Review and Stage 7 Engineering Review (with the still-unappointed independent Security & Permissions Architecture specialist) follow only after Stage 5 approval | Mission Control Stage 7 review of the complete Blueprint and disposition of the independent security review; Founder resolution of open product questions; then Stage 8 Founder approval and Blueprint lock, separately authorized |

## 11. Changed paths

The seven paths authorized by the activation record §10.2, and no others:

1. `docs/phase-1-mission-blueprint/active/SB-P-1.12.md` (three regions above)
2. `communication/missions/SB-P-1.12/claude-code/25-stage7-engineering-review-report.md` (this report, new)
3. `communication/missions/SB-P-1.12/claude-code/26-stage7-activation-live-report-snapshot.md` (new, byte-identical)
4. `communication/live/report.md`
5. `communication/missions/SB-P-1.12/README.md`
6. `communication/missions/SB-P-1.12/decision-log.md` (append only)
7. `communication/missions/SB-P-1.12/handover-log.md` (append only)

## 12. Next approval decision requested

Mission Control is asked to:

1. review Sections 20 and 21 and this report at the exact PR head, and accept, return for finding-scoped correction, or reject;
2. disposition ESC-1 (open T8, MC-40) after the independent review;
3. route EQ-1 and EQ-2, and decide EQ-3 to EQ-5;
4. arrange the same reviewer's re-review of the MC-41 corrections, and a provenance-preserving path for publishing its report under `specialists/`.

No finding is to be accepted or relied on before the independent review is completed and dispositioned. Stage 8 remains a separate later gate.

## 13. MC-40 correction record

Mission Control-directed, finding-scoped correction on the same DRAFT PR (MC-40, PR #641, reviewed head `88b9256612e7d8bf1db88ec02c29eac8b5d545f9`). Changed: Blueprint §20.5 feasibility definitions, the `22-§20-2` entry (`HELD` to `BLOCKED`), the durability gate cells of `21-§19-1`–`21-§19-8` and `22-§29-12` (still `CONDITIONAL`), §20.5.1 totals, §21.1 ESC-1, and the §21.4 T1, T6 and T8 rows; this report §§3–5, 9 and 12; the live report; the README Stage 7 row; and new decision-log and handover-log entries. The FCTM, Sections 1–19, the Metadata rows and the Section 18 row are unchanged by this correction.

## 14. MC-41 reconciliation of the independent security review

Mission Control-directed, finding-scoped correction on the same DRAFT PR under the MC-35 §10.5 correction cycle (MC-41). Each finding was compared against the current head `fc11e72243baa021411262f3e64b88c25a905298`, which already contained the MC-40 correction. The findings below are Mission Control's dispositions of the specialist's review. This section maps them to edits and does not restate or represent the specialist's report.

| Finding | Already satisfied at `fc11e722` | Additional edits made |
|---|---|---|
| SEC-S7-01 ESC-1 | Partly: T8 open, `22-§20-2` `BLOCKED`, DDL separated from runtime | §20.2 Authority concept and Cascades rows; §21.1 ESC-1; report §5: Owner API path and Auth-user path distinguished; the 18-foreign-key count labelled as Claude Code's unverified inventory; protected child rows described as possibly blocking, not a universal durability proof; no lifecycle or remediation selected |
| SEC-S7-02 Authority surface | No | §20.2 RLS row; §20.3 E1 (active business is requested context, never authority; Owner-of-A/Manager-of-B negative tests; source-complete authority-surface inventory as precondition) and E2 (`RETURNING`, direct grants, RPC responses, audit, side channels); E12; §20.4.6 step 3; rows `21-§5-2`, `21-§11-2`, `21-§22`, `21-§24-4` |
| SEC-S7-03 WS-B | No | §20.3 E10, §20.4.2 M5, ER-3, recommendation 9, row `BP-§10.1-8`: effective-access reconciliation across `PUBLIC`, `anon`, `authenticated`, `service_role`, executor roles and default privileges of each creator role including `postgres` and `supabase_admin`; separately approved anonymous workflows preserved; no blanket function revocation |
| SEC-S7-04 Financial disclosure | Partly: G-3 hold and Founder delegations preserved | §20.3 E3 (projection and response checks on direct, batch, search, list, import preview, export, dashboards, aggregates, caches and privileged RPCs; column grants insufficient; direct versus derived disclosure), ER-5, recommendation 6 |
| SEC-S7-05 Revalidation | No | §20.3 E1, E4 and E14; recommendation 4; rows `21-§12-5`, `21-§17`, `21-§24-8`, `22-§13-4`, `22-§13-5`, `BP-§10.1-5`: the claim that legacy per-row RPCs already prove revocation removed; authoritative recheck through the commit distinguished from permission-version comparison; claim, bookkeeping, partial writes, retries, replay and truthful counts named; F-04(c) outcome preserved and no mechanism chosen |
| SEC-S7-06 Service role and support | No | §20.3 E9 and E13, ER-2, row `22-§6-4`: continuous trusted binding of actor, business, action and object; support access enforcing purpose, consent, operator, scope, expiry, revocation and audit, with no standing platform bypass |
| SEC-S7-07 Denial-audit durability | No | §20.3 E5, new ER-12, row `21-§19-6`: rollback of a denial record in an aborted transaction; independent durability design and evidence with data minimization; no mechanism selected |
| SEC-S7-08 Neighbouring integrity rows | Partly: `21-§19-*` and `22-§29-12` already carried the ESC-1 durability dependency | Rows `22-§14-5` and `BP-§7-1` changed to `CONDITIONAL` on the ESC-1 durability conclusion only; FCTM dispositions unchanged |
| SEC-S7-09 Evidence language | Partly: evidence class stated in §20.1 | §20.1 new bullets; §20.5 `FEASIBLE` definition; §20.5.1 totals label; report §3 |

**Independent-review register changes.** `N/R` to `PENDING`, for the stated security aspect: `22-§17`, `22-§21`, `22-§22`, `22-§23-1`, `22-§29-10` and `BP-§10.1-9` (which does not decide G-5). Reconsidered: `21-§21-2`, `22-§13-1` and `22-§14-6` changed to `PENDING` because their conclusions touch authority-audit access, confirmation authority and permission to add or read human context; `21-§20-3` and `21-§23-7` stay `N/R`, with justifications in their register entries pointing to `21-§20-1` and `21-§20-5`.

**Feasibility changes.** `FEASIBLE` to `CONDITIONAL`: `21-§11-2`, `21-§22`, `21-§24-4` (SEC-S7-02); `21-§17`, `21-§24-8`, `BP-§10.1-5` (SEC-S7-05); `22-§14-5`, `BP-§7-1` (SEC-S7-08). Result: 176 `FEASIBLE`, 51 `CONDITIONAL`, 1 `BLOCKED`, 0 `HELD`; 190 `PENDING`, 38 `N/R`; 228 of 228 row IDs re-checked against the FCTM.

**Unchanged:** the FCTM, Sections 1–19, the Metadata rows, the Section 18 row, the live-report snapshot, the live instruction and `specialists/**`. No EIS mechanism or Founder Product Truth is introduced.

`SB-P-1.12 STAGE 7 ENGINEERING REVIEW DRAFT SUBMITTED — AWAITING MISSION CONTROL REVIEW; INDEPENDENT SECURITY REVIEW NOT COMPLETE — RE-REVIEW OF MC-41 CORRECTIONS PENDING; AFFECTED FINDINGS NOT ACCEPTED OR RELIED ON UNTIL REVIEW DISPOSITION; STAGE 8/BLUEPRINT LOCK/EIS/IMPLEMENTATION/MIGRATION/PRODUCTION NOT AUTHORIZED.`
