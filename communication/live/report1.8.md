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

**Rows whose Citation / evidence cell was extended (14):** `21-§4-1`, `20-§16-1`, `21-§5-2`, `22-§5-2`, `BP-§10.1-2`, `21-§6-1`, `21-§6-2`, `21-§17`, `21-§18-1`, `21-§19-1`, `22-§20-2`, `22-§29-12`, `22-§14-5`, `BP-§7-1`.

**Deterministic checks against `main`:**

| Check | Result |
|---|---|
| Row count | 373 before and after |
| Row IDs and order | Identical |
| Columns 1–6 (Row ID, Source pointer, Build commitment, Commercial classification, Assigned mission, Disposition) | Unchanged on every row; only column 7 (Citation / evidence) extended on 14 rows |
| Dispositions | `IN SCOPE` 228, `ASSIGNED TO LATER MISSION` 113, `DELEGATED` 2, `NOT APPLICABLE` 30, `ESCALATED` 0, unchanged |
| SB-P-1.19 requirements copied in | None |
| New text | Correction note 8 (header) and a §G "Re-verified 2026-09-27" line |

**Flagged for Mission Control:** Owner transfer and former-Owner denial have no contract section of their own. They are traced on the nearest existing rows. Whether they need dedicated rows, which would need a contract anchor, is left to Mission Control.

## 4. Blueprint changes (line-level map)

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

None of these is accepted by this draft or by CI.

## 7. Holds

- ESC-1 is an open T8, including the Owner API delete path and `auth.users ON DELETE CASCADE`. `22-§20-2` stays `IN SCOPE` and `BLOCKED`, and the related durability conclusions stay held.
- G-4 is answered by the Founder as a product question, but ownership-cardinality design stays gated and the schema is unchanged. G-3, G-5 to G-8, S-2 to S-7 and G-6/T4 are unchanged.
- Deletion design needs legal and retention-policy input, independent security review and later design authority.

## 8. PR, head and CI

The draft PR number, exact head and exact-head CI results are recorded in the PR handover comment, because a file cannot contain the hash of its own commit. The local Markdown Quality Gate and pre-commit gate were run on all three files before commit.

## 9. Stop

Stopping for Mission Control's exact-head review and the independent Security & Permissions Architecture delta review. No self-approval, no marking ready and no merge.
