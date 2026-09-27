# SB-P-1.12 — MC-83 Controlled Founder Record 05 Reconciliation Handover

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Claude Code — MC-02 Definition Actor, documentary reconciliation preparer
**To:** Smart Business Mission Control
**Paired instruction:** `communication/live/instruction1.8.md` (MC-83, effective through PR #658 and MC-84)
**Work package:** `SB-P-1.12-WP-ESC1-CONTROLLED-RECONCILIATION-DRAFT`
**Status:** `MC-83 CONTROLLED RECONCILIATION DRAFT SUBMITTED — AWAITING MISSION CONTROL EXACT-HEAD REVIEW AND INDEPENDENT SECURITY & PERMISSIONS ARCHITECTURE DELTA REVIEW — NOT ACCEPTED — ESC-1 T8 OPEN — 22-§20-2 BLOCKED AND IN SCOPE — NO STAGE 8/BLUEPRINT LOCK/EIS/IMPLEMENTATION/MIGRATION/PRODUCTION AUTHORITY.`

## 1. Intake evidence

| Check | Result |
|---|---|
| Remote and tree | `origin` = `https://github.com/SmartBusinessv1/smart-business.git`; working tree clean |
| Canonical `main` | `6dccc0e4c0cd1dd8461517d02ed6df1fd2070891`, the PR #658 merge (human-merged `2026-09-27T10:46:13Z`, approved head `4796d0cf64295bb004d7cd1e22aed875d4fdc62b`), verified by MC-84 |
| Inputs | Founder Record 05 (blob `f52b5ebd`); assessment `claude-code/31` (blob `0ebc8fbe`, PR #657, MC-82); Source 18 §3.2 and Stage 3 triggers; the Blueprint; the FCTM; Contracts 18, 20, 21 and 22; Build Plan §15; the Security reports |
| Branch | `mission/SB-P-1.12-esc1-controlled-reconciliation-draft`, absent locally and on `origin`; created from `6dccc0e4` |
| `communication/live/report1.8.md` | Absent before this work |

## 2. Exact diff

Three paths, as authorized:

1. `docs/phase-1-mission-blueprint/active/SB-P-1.12.md` (modified)
2. `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md` (modified)
3. `communication/live/report1.8.md` (new)

No other path changed: Founder Records, ledgers, `claude-code/28`–`31`, contracts, Source 18, Security reports, code, SQL, billing and production are untouched.

## 3. FCTM approach and verification

**No row is added.** Source 18 §3.2 item 1 requires every FCTM row to have the form `<contract number>-§<section>-<ordinal>`, cited to a contract or Build Plan section. It also says the FCTM "adds no product decision" and that a Founder decision is cited in a row by Decision ID. Founder Record 05 is a Founder decision, not a contract. Its SB-P-1.12 foundation obligations (ESC1-8) are therefore traced by citing Founder Record 05 Decision IDs on the existing rows that carry them. This follows the Founder Record 04 precedent, which also added no rows.

**Rows whose Citation / evidence cell was extended:** 14 under MC-83 (`21-§4-1`, `20-§16-1`, `21-§5-2`, `22-§5-2`, `BP-§10.1-2`, `21-§6-1`, `21-§6-2`, `21-§17`, `21-§18-1`, `21-§19-1`, `22-§20-2`, `22-§29-12`, `22-§14-5`, `BP-§7-1`), and 7 more under MC-87 (`21-§15-2`, `21-§18-2`, `21-§5-4`, `21-§19-2`, `22-§5-1`, `22-§5-3`, `22-§5-4`). 21 in total; see Section 8.

**Deterministic checks against `main`:**

| Check | Result |
|---|---|
| Row count | 373 before and after |
| Row IDs and order | Identical |
| Columns 1–6 (Row ID, Source pointer, Build commitment, Commercial classification, Assigned mission, Disposition) | Unchanged on every row; only column 7 (Citation / evidence) extended on 21 rows (14 under MC-83, 7 under MC-87) |
| Dispositions | `IN SCOPE` 228, `ASSIGNED TO LATER MISSION` 113, `DELEGATED` 2, `NOT APPLICABLE` 30, `ESCALATED` 0, unchanged |
| SB-P-1.19 requirements copied in | None |
| New text | Correction note 8 (header) and a §G "Re-verified 2026-09-27" line |

**Flagged for Mission Control:** Owner transfer and former-Owner denial have no contract section of their own. They are traced on the nearest existing rows. Whether they need dedicated rows, which would need a contract anchor, is left to Mission Control.

## 4. Blueprint changes (line-level map)

Line numbers in this section refer to the MC-83 head `7321977`. The MC-87 insertion at line 489 shifts every later line by 27; see Section 8.1.

New-file line numbers.

| Location | Line | Change |
|---|---|---|
| Metadata "Founder Product Decision Record" | 18 | Founder Record 05 reference appended |
| §8.1 | 184 | G-4 answered by ESC1-1; `owner_id UNIQUE` stays a repository fact and design concern |
| §8.13 | 240–241 | New paragraph: Owner transfer foundations (ESC1-5), with the experience assigned to SB-P-1.19 |
| §8.15 | 248 | Transfer and permitted deletion recorded (ESC1-5, ESC1-7) |
| §8.26 | 294–295 | New paragraph: MC-83 D-2 working reading; `22-§20-2` stays `IN SCOPE` and `BLOCKED` |
| §12 | 433 | New dependency bullet: SB-P-1.19 experience; SB-P-1.13, 1.15, 1.18 and 1.20 as dependency notes |
| §13 DC-1 | 448 | Mitigation notes the ESC1-1 answer |
| §16 | 543 | Membership model bounded by ESC1-1 and ESC1-6 |
| §18 | 561 | New change-log row, version 0.5 |
| §19 | 573–574 | Founder Record 05 references paragraph; the row-map tables are byte-identical |
| §19 Governance History | 759 | New row |
| §20.3 E1 | 805–806 | G-4 held conclusion replaced with "answered; design gated"; new note on FR05 foundation obligations, with feasibility not assessed and referred to security review |
| §20.3 E5 | 834 | FR05 recording note |
| §20.5 gate cells | 956, 963, 1063, 1142, 1192 | "G-4 HOLD" changed to "G-4 answered (FR05 ESC1-1); ownership-cardinality design gated" |
| §20.5 `22-§20-2` | 1100 | Gate cell notes FR05 ESC1-7; the block persists |
| §21.1 EQ-1 | 1230 | Marked answered |
| §21.1 ESC-1 | 1232 | Notes that FR05 sets the policy; no remediation selected; risk remains |
| §21.4 | 1274, 1278 | Gates line and T1 row: G-4 answered; EQ-2 (G-3) open |

**Register verification:** 228 rows; row IDs, feasibility column and independent-review column all unchanged (176 `FEASIBLE`, 51 `CONDITIONAL`, 1 `BLOCKED`; 190 `PENDING`, 38 `N/R`). Six rows had their gate cell text changed: `21-§4-1`, `21-§5-2`, `22-§5-2`, `20-§16-1`, `BP-§10.1-2` and `22-§20-2`.

## 5. Source citation inventory

Founder Record 05 decisions ESC1-1, ESC1-5, ESC1-6, ESC1-7 and ESC1-8, and §7; MC-83 D-1 and D-2; Source 18 §3.2 item 1; FCTM Correction note 8. No contract text is restated.

## 6. Points for the independent Security & Permissions Architecture delta review

1. The §8.13 Owner-transfer foundation paragraph (ESC1-5): dual verified approval, recheck at completion, and denial on every surface.
2. The §8.26 durability and governed-deletion reading, and its relationship to ESC-1.
3. The §20.3 E1 and E5 notes: FR05 foundation obligations, with feasibility deliberately not assessed.
4. The changes to six register gate cells, and the §21.1 EQ-1 and ESC-1 entries.
5. The FCTM traceability on `21-§6-1`, `21-§6-2`, `21-§17`, `21-§18-1` and `21-§19-1` (former-Owner denial, revalidation, binding and audit).
6. Added under MC-87: the Blueprint §15 acceptance mapping FA-1 to FA-14 and referrals R-1 to R-3, the corrected E1 note, and the 7 new FCTM citations (Section 8).

None of these is accepted by this draft or by CI.

## 7. Holds

- ESC-1 is an open T8, including the Owner API delete path and `auth.users ON DELETE CASCADE`. `22-§20-2` stays `IN SCOPE` and `BLOCKED`, and the related durability conclusions stay held.
- G-4 is answered by the Founder as a product question, but ownership-cardinality design stays gated and the schema is unchanged. G-3, G-5 to G-8, S-2 to S-7 and G-6/T4 are unchanged.
- Deletion design needs legal and retention-policy input, independent security review and later design authority.

## 8. MC-87 correction (independent Security delta review: CORRECTION REQUIRED)

Authority: MC-87 ([PR #659 comment 5855347494](https://github.com/SmartBusinessv1/smart-business/pull/659#issuecomment-5855347494)), on the same PR and branch, within the same three paths. It addresses findings SEC-MC85-01 to 04, 06 and 08. The findings Security accepted are preserved unchanged: the G-4 answer, EQ-1, the six gate cells, the §8.26 reading, E5 and the ESC-1 hold. `communication/live/report1.9.md` was not created.

### 8.1 Blueprint changes

| Location (new lines) | Change |
|---|---|
| §15, lines 489–515 | New subsection: Founder Record 05 foundation acceptance mapping, FA-1 to FA-14, and referrals R-1 to R-3 |
| §18 change-log row 0.5, line 588 | MC-87 addition noted |
| §19 FR05 references paragraph, line 600 | Now lists the 21 cited rows and points to §15 |
| §20.3 E1, line 833 | Overstatement corrected: the mapping is not proof of coverage and is not complete; R-1 and R-2 referred; FA-11, FA-12 and FA-14 held; feasibility not assessed |

Unchanged since the MC-83 head: the Stage 7 register (228 rows, all cells), §8.26, E5, the six gate cells, §21.1 and §21.4, and the §19 row-map tables.

### 8.2 Acceptance mapping summary

| ID | Obligation | Primary FCTM anchors |
|---|---|---|
| FA-1 | Current-Owner approval | `21-§4-1`, `20-§16-1`, `21-§18-1` |
| FA-2 | Incoming-Owner approval | `21-§18-1`, `21-§15-2` |
| FA-3 | Separate verified identity per party | `21-§15-2`, `22-§5-2` |
| FA-4 | Both approvals bound to one business and one transfer | `21-§18-2` |
| FA-5 | Revalidation at completion | `21-§17` |
| FA-6 | Former-Owner denial on every named surface | `21-§6-1`, `21-§6-2`, plus 13 surface rows |
| FA-7 | Stale sessions, delegated and privileged paths | `21-§17`, `21-§5-4` |
| FA-8 | No residual membership, capability or exemption | `21-§5-2`, `21-§5-4`, `21-§19-1` |
| FA-9 | Historical attribution without access | `21-§19-2`, `21-§6-1` |
| FA-10 | Transfer recorded | `21-§19-1`, `21-§19-2` |
| FA-11 | Transferred business survives former-Owner identity deletion (held) | `22-§5-1`, `22-§5-2`, `21-§5-2`, `21-§6-2`, `22-§20-2` |
| FA-12 | Identity kept while another authorized membership remains (held) | `21-§5-2`, `22-§5-3`, `22-§5-4` |
| FA-13 | Independent multi-business isolation | `21-§5-2`, `21-§6-1`, `21-§6-2`, `BP-§10.1-2` |
| FA-14 | History intact until a permitted, governed deletion (held) | `22-§20-2`, `21-§19-1`, `22-§14-5`, `22-§29-12`, `BP-§7-1` |

Each line has its own negative path, planned evidence class and boundary in Blueprint §15.

### 8.3 FCTM changes (row by row)

- **14 existing FR05 cells:** the suffix "(MC-83 traceability)" became "(MC-83 traceability; acceptance mapping: Blueprint §15 FA-n)".
- **7 new FR05 citations:** `21-§15-2` (FA-2, FA-3), `21-§18-2` (FA-4), `21-§5-4` (FA-7, FA-8), `21-§19-2` (FA-9, FA-10), `22-§5-1` (FA-11), `22-§5-3` (FA-12), `22-§5-4` (FA-12).
- **Correction note 8 and the §G re-verified line:** updated to 21 rows, with the Source 18 §3.2 item 7 pointer and referrals R-1 to R-3.
- **No row added.** No Founder-record row ID was created.

### 8.4 Source 18 completeness checks (scripted)

| Check | Result |
|---|---|
| FCTM rows, IDs, order | 373; identical to `main` |
| Columns 1–6 | Unchanged on every row; column 7 changed on exactly 21 rows |
| Dispositions | 228 / 113 / 2 / 30 / 0, unchanged |
| Every mapping row exists, is `IN SCOPE` and assigned to SB-P-1.12 | Yes (50 rows) |
| Every FR05-cited row appears in the mapping | Yes |
| Every FA has at least one FR05-cited anchor | Yes |
| Stage 7 register | Unchanged since `7321977` |
| §19 row-map tables | Unchanged since `main` |

### 8.5 Referred to Mission Control

- **R-1:** subscription and operating-state survival of a transferred business. This is Contract 18 §6 and `SB-P-1.19`; no SB-P-1.12 row anchors it.
- **R-2:** the conditions for deleting a personal identity. No contract section states them.
- **R-3:** Owner transfer has no contract section of its own.

These are not claimed as covered.

## 9. PR, head and CI

The draft PR number, exact head and exact-head CI results are recorded in the PR handover comment, because a file cannot contain the hash of its own commit. The local Markdown Quality Gate and pre-commit gate were run on all three files before commit.

## 10. Stop

Stopping for Mission Control's exact-head review and the independent Security & Permissions Architecture delta review. No self-approval, no marking ready and no merge.
