# SB-P-1.16 — `16:FPDR-10` FCTM Citation Amendment Proposal (Draft)

**DRAFT — LOCAL — PROPOSAL ONLY — THE CANONICAL FCTM IS NOT CHANGED — FIRST OF TWO SEQUENTIAL REVIEWS (FCTM, THEN BLUEPRINT)**

**Mission:** SB-P-1.16 — Financial Integrity & Credit  
**Gate:** MC-215, Workstream A  
**Prepared by:** Claude Code (Definition Actor and Stage 7 coordinator)  
**Date:** 2026-10-18  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. Purpose and authority

This report prepares the exact amendment that cites `16:FPDR-10` on 26 FCTM rows. It also gives the minimal column-definition, status-line and correction-note changes, and the M-1 to M-4 traceability, ready for the first of MC-215's two sequential review PRs.

**Authority:**

- MC-206: the Founder approved `16:FPDR-10`;
- MC-213: canonical registration verified;
- MC-214: reconciliation preparation;
- MC-215: Mission Control rulings 1 to 3 and 8;
- Source 18 v1.2 §3.2 and §3.3.

## 2. Pinned baseline and inputs

**Baseline:** `main@47df4714296c13c5e9d72d3069487e9e8286bae5`; repository PRIVATE; verified before work.

| Input | Blob |
|---|---|
| Canonical FCTM `claude-code/02-stage2-populated-fctm.md` | `5ff7742f6d3849ffab8767333a54eda07be268ab` |
| `16:FPDR-10` record `claude-code/22-…` | `bd5a5f0c2049b056c84722a513a086ac48d9086f` |
| Preparation report `claude-code/24-…` | local, blob `9ec57194` (MC-214 return) |
| Contract 14 | `16914a834c3dd3abcc5a41029d78cb96edb1a72f` |
| Contract 15 | `632f34026ee1cfe580f031e888777d50619eea2f` |
| Contract 03 | `d8c26c073b669b561def887e36d16b19ff759205` |
| Build Plan | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` |

## 3. Rulings applied

- **The 26-row set is used.** `15-§14-4` is excluded (ruling 2). No new source evidence establishes a direct decision effect: its source line, C15 §14 b3 "guessing when multiple matches exist", concerns candidate ambiguity, which `16:FPDR-10` does not change.
- **Route R-A** (ruling 3):
  - the source-grounded rows are kept;
  - M-1 to M-4 receive explicit traceability;
  - the correction note substitutes for **no** contract obligation or numbered acceptance-scenario row (Section 6).
- **FIN-01 details stay provisional** (ruling 8).

## 4. Row validation against source text

Each row's pointer was checked against its source blob. Each current cell was re-read from the canonical FCTM.

| # | Row | Source line (blob) | Source text located | Current cell | Proposed cell |
|---|---|---|---|---|---|
| 1 | `14-§18-3` | C14:263 | "repayment greater than expected balance" | — | `16:FPDR-10` |
| 2 | `14-§7-2` | C14:102 | "identify the correct customer/credit relationship" | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| 3 | `14-§7-3` | C14:103 | "preserve repayment amount/date/source" | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| 4 | `14-§7-4` | C14:104 | "update outstanding balance consistently" | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| 5 | `14-§7-5` | C14:105 | "avoid creating duplicate income/credit facts" | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| 6 | `14-§7-6` | C14:106 | "preserve correction/audit linkage" | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| 7 | `14-§5-7` | C14:72 | "outstanding balance" | `14:FPDR-1` | `14:FPDR-1; 16:FPDR-10` |
| 8 | `14-§5-8` | C14:73 | "repayment events" | `14:FPDR-1` | `14:FPDR-1; 16:FPDR-10` |
| 9 | `3-§9-12` | C3:180 | "What does Shameer still owe me?" | `14:FPDR-1; 16:FPDR-1; 16:FPDR-2` | `14:FPDR-1; 16:FPDR-1; 16:FPDR-2; 16:FPDR-10` |
| 10 | `14-§21-6` | C14:308 | "duplicate customer-credit database separate from Ledger/customer identity" | `14:FPDR-1` | `14:FPDR-1; 16:FPDR-10` |
| 11 | `15-§11-5` | C15:167 | "do not auto-create income/expense if business meaning is ambiguous" | — | `16:FPDR-10` |
| 12 | `15-§14-1` | C15:198 | "Repayments/customer credit may use Payment Verification …" | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| 13 | `15-§14-2` | C15:202 | "duplicating income" | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| 14 | `15-§14-3` | C15:203 | "reducing the wrong customer's balance" | `14:FPDR-4; 16:FPDR-1` | `14:FPDR-4; 16:FPDR-1; 16:FPDR-10` |
| 15 | `14-§22-2` | C14:317 | "Repayment reduces correct balance without duplicate revenue" | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| 16 | `BP-§10.5-E4` | BP:624 | "Reconciliation cannot duplicate income or repayment" | — | `16:FPDR-10` |
| 17 | `BP-§10.5-X` | BP:638 | "… never pretends uncertain money is settled or makes credit decisions for me" | — | `16:FPDR-10` |
| 18 | `14-§3-1` | C14:37 | "AI Assistant, Not AI Judge" | — | `16:FPDR-10` |
| 19 | `14-§3-5` | C14:41 | "Human override/decision is explicit and auditable" | — | `16:FPDR-10` |
| 20 | `14-§3-6` | C14:42 | "Repayment must reduce the correct credit relationship" | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| 21 | `14-§14-1` | C14:206 | Owner: "Can view/manage credit awareness, thresholds, decisions and history" | — | `16:FPDR-10` |
| 22 | `14-§17-1` | C14:246 | "Consequential credit/repayment corrections must preserve prior truth …" | — | `16:FPDR-10` |
| 23 | `14-§17-3` | C14:251 | "repayment linkage" (must not be lost in correction) | — | `16:FPDR-10` |
| 24 | `15-§8-4` | C15:124 | "do not create a duplicate sale/income/payment" | `14:FPDR-1` | `14:FPDR-1; 16:FPDR-10` |
| 25 | `15-§11-4` | C15:166 | "allow classification/linking or creation through a governed flow" | — | `16:FPDR-10` |
| 26 | `BP-§6.2-1` | BP:230 | "§6.2 One Business Command / Action Path" | — | `16:FPDR-10` |

**Result:** 26 of 26 rows exist, are `IN SCOPE` and are located in their source. 26 of 26 current cells equal the canonical FCTM. No existing citation is removed: the proposal only appends, and "—" becomes `16:FPDR-10`. Why the decision determines each row's satisfaction is given in Report 24 §4 and §5.

## 5. Exact non-cell changes

**5.1 Header status line, one substring replaced.** The line is edited only to record this amendment. Its stale "proposed in PR #964 … NOT CANONICAL" wording is corrected in the same edit, because PR #964 is merged and was verified in MC-159.

```text
OLD: proposed in PR #964 (MC-156/MC-157) — `NOT CANONICAL UNTIL FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION`
NEW: canonical since PR #964 (`main@ec87d4a6`; verified MC-159); Stage 7 citation amendment for the Founder-approved `16:FPDR-10` (26 Founder-decision cells; MC-215) — `NOT CANONICAL UNTIL FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION`
```

**5.2 §0.1, Founder decision column definition, one substring replaced:**

```text
OLD: and `16:FPDR-n` (`16:FPDR-1` to `16:FPDR-9`) SB-P-1.16's canonical Founder Product Decision Record (`09-stage3-founder-product-decision-record-draft.md`, canonical at `main@bb695255`). |
NEW: and `16:FPDR-n` SB-P-1.16's: `16:FPDR-1` to `16:FPDR-9` in the canonical Founder Product Decision Record (`09-stage3-founder-product-decision-record-draft.md`, canonical at `main@bb695255`), and `16:FPDR-10` in `22-stage7-founder-product-decision-record-16-fpdr-10.md` (blob `bd5a5f0c`, canonical at `main@2c5be64b`; registered at `main@47df4714`). |
```

**5.3 §F, two paragraphs appended after the Stage 3 reconciliation paragraph.** The full text is in the proposed file (Section 9).

1. **Citation record.** The 26 rows. "No existing citation is removed. No row is added or removed; dispositions, owners, build commitments, commercial classifications, kinds and dependency codes are unchanged; totals remain 555 (349 `IN SCOPE`; 41 `DPAY`; 7 `DNTF`)."
2. **Traceability note for M-1 to M-4.** Decision-sourced obligations with no contract or Build Plan section are listed and traced to the anchor rows and to Blueprint §15.6 (proposed v0.3). The note states that the §3.2 item 6 completeness test is unaffected, and that FIN-01's representation is provisional and not recorded as approved.

Nothing else in the file changes.

## 6. M-1 to M-4 traceability and completeness assessment

**6.1 Objective Source 18 §3.2 item 6 test (run at the baseline):**

| Check | Result |
|---|---|
| (a) Every numbered section of Contract 14 (25) and Contract 15 (28) is represented by at least one row | **PASS:** 0 sections without a row |
| (b) Obligation-level rows for in-scope sections | **PASS:** unchanged since Gate 10 (MC-171). The FCTM and all contract blobs are byte-identical to the Gate 10 inputs |
| (c) Every numbered acceptance scenario has its own row | **PASS:** C14 §22, 11 items and 11 rows; C15 §25, 12 items and 12 rows |
| (d) Every row has exactly one disposition with a citation; no `ESCALATED` row | **PASS:** 555 rows; 0 `ESCALATED` |

**Conclusion.** No source-grounded obligation or numbered acceptance scenario is missing. **No new FCTM row is required, and none is added.** The correction note substitutes for nothing the completeness test requires. M-1 to M-4 come from `16:FPDR-10`, not from a contract section, so Source 18 §3.2 item 1 gives them no row identity.

**6.2 Explicit traceability for each obligation:**

| ID | Founder-approved obligation | Decision elements | FCTM anchor rows (citing `16:FPDR-10`) | Blueprint v0.3 acceptance cases (Report 27) | Provisional engineering (not approved) |
|---|---|---|---|---|---|
| M-1 | A kept advance persists, and one canonical remaining-advance calculation holds | D-2, D-3, D-6 | `14-§7-3`, `14-§7-4`, `14-§5-7`, `3-§9-12`, `BP-§10.5-E4` | ADV-02, ADV-03, ADV-10 | Credit subtype; `owed_by_business` representation; the calculation's implementation |
| M-2 | Explicit Owner-authorized application of an advance to a later credit | D-3, D-4, D-6 | `14-§7-4`, `14-§3-5`, `14-§14-1`, `BP-§6.2-1` | ADV-04 | Advance-application relation; two-sided settlement transfer; concurrency |
| M-3 | Explicit Owner-authorized refund of an advance | D-3, D-4, D-6 | `14-§7-5`, `15-§8-4`, `14-§14-1` | ADV-05 | Refund as `repayment`; failed-refund handling |
| M-4 | Independently verifiable acceptance cases: retention, application, refund, correction-created excess, reversal, retry, non-automation | D-1 to D-6 | `14-§18-3`, `15-§11-4`, `14-§17-1`, `14-§17-3`, `14-§3-1`, `15-§11-5`, `BP-§10.5-X` | ADV-01 to ADV-10 | Reversal treatment (AC-3 open); idempotency key design |

**6.3 Founder-approved versus not approved:**

| Status | Content |
|---|---|
| **Founder-approved product behaviour** | D-1 to D-6 and M-1 to M-4 as behaviour |
| **Not approved** | FIN-01's credit subtype, `owed_by_business` representation, advance-application relation and refund-as-repayment semantics. Also Stage 7 C-24 to C-28 and any schema, command, provider or concurrency design |

The amendment records none of the "not approved" items as approved.

## 7. Validation of the proposed file (scripted, against the canonical FCTM)

| Check | Result |
|---|---|
| Row IDs and order | 555 and 555; identical order |
| Rows changed | 26, all in the Founder-decision column only; the other 10 columns are byte-identical |
| Existing citations lost | 0 |
| Rows citing `16:FPDR-10` | 26 |
| `IN SCOPE` / `DPAY` / `DNTF` | 349 / 41 / 7 |
| Dispositions | 349 `IN SCOPE`, 129 `DELEGATED`, 20 `ASSIGNED TO LATER MISSION`, 32 `NOT APPLICABLE`, 22 `OUT OF BUILD SCOPE`, 3 `UNRESOLVED FOUNDER DECISION`; unchanged |
| Non-table diff | Exactly the status line, the column definition and the two §F paragraphs (8 diff lines) |
| Diff size | 32 insertions, 28 deletions |
| Hard line break on the status line | Preserved |
| Markdown Quality Gate | PASSED (0 issues) |
| Blueprint consistency | The proposed Blueprint v0.3 passes all 11 coverage checks against this proposed FCTM (Report 27 §7) |

## 8. Required new source-grounded rows

**None.** No contract or Build Plan obligation and no numbered acceptance scenario is missing (Section 6.1).

## 9. Local artifacts for independent checking

| Artifact | Location | Blob | SHA-256 |
|---|---|---|---|
| Proposed FCTM (full file) | session scratchpad `bp16\v03\02-stage2-populated-fctm.PROPOSED.md` | `94dd52202ad040f64394f07f95389d02ffcc5dd0` | `29a51ce609bb48e49dc8c4f38633772b2d545cfac201dbaf5380c207157b393d` (140,114 bytes; 858 lines) |
| Unified diff against `5ff7742f` | session scratchpad `bp16\v03\fctm-fpdr10.patch` | — | 16,630 bytes |
| Deterministic generator | session scratchpad `bp16\fctm_fpdr10.py` | — | Asserts that each edit applies exactly once |

The proposed file is outside the repository. The FCTM PR, when authorized, would write these exact bytes to the canonical path. The generator can be re-run against `5ff7742f` to reproduce the blob.

## 10. Unresolved questions

| ID | Question | Owner |
|---|---|---|
| A-1 | Accept the status-line correction of the stale PR #964 wording within this amendment? | Mission Control |
| A-2 | Confirm route R-A: no new FCTM row, the correction note, and the Blueprint §15.6 mapping? | Mission Control |

No T3, T7 or T8 arises (Report 27 §8).

## 11. Independent validation limitations

The same actor prepared the decision drafts, the plan, the selection and this proposal. The checks are the author's scripts against canonical blobs, so they are documentary evidence and not independent review. FIN-01's reviewer provenance is incomplete.

## 12. STOP conditions

Stop and report if any of these occurs:

- the canonical FCTM blob is not `5ff7742f` at PR time;
- any change outside the Founder-decision column, the status line, the column definition or the two §F paragraphs;
- any lost citation;
- any count change;
- any proposal to add a row without a source section.

**STOP FOR MISSION CONTROL REVIEW.**

**Stage 7 Final Approval: WITHHELD. Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
