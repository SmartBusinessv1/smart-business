# SB-P-1.18 — Founder Product Decision Record `18:FPDR-7`: MC-544 Payroll Support and Export (`17-§9-5`)

**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Stage:** Source 18 v1.3, after the Stage 7 documentary exit (MC-688) and before any Stage 8 Founder Blueprint approval
**Status:** `FOR REVIEW — EFFECTIVE ONLY ON FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION`
**Decides:** the MC-544 question for FCTM row `17-§9-5` only (MC-701 §3). No other row, record or source is decided or edited.
**Prepared by:** Claude Code, SB-P-1.18 Definition Actor. Drafted read-only under MC-702-P. That instruction did not authorize repository publication
**Publication authority:** only a separate, bounded Mission Control Git-write grant under Protocol §16
**Decision identifier:** `18:FPDR-7` is proposed; Mission Control assigns the final identifier
**Baseline:** `main@366f2dc6bb0fcaa4586f2e55f752a5f7ee072565`
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

This record is additive. It amends no Source, contract or earlier Founder record. In particular, it does not amend Contract 17, Source 18, Founder Decision Record 06, `18:FPDR-5` or `18:FPDR-4-A`. It decides how the one Contract 17 §9 unit "payroll support/export" is committed in SB-P-1.18 Phase One.

## 0. How to read this record

| Kind | Where | Authority |
|---|---|---|
| **Founder statement (verbatim)** | Section 1 only | The Founder |
| **Accepted option text and Mission Control record** | Section 2 | Mission Control (MC-701, MC-702), subordinate to Section 1 |
| **Definition Actor accounting** | Sections 3 to 7 | None. Section 1 prevails |

## 1. Verbatim Founder statement

The statement is reproduced from MC-702 (PR #1107 comment 6555863896), §1, which records it verbatim. The whole statement is reproduced, with nothing removed.

```text
FOUNDER DECISION — MC-701 / MC-544: I approve Option A. Payroll-support viewing remains the Phase One baseline; payroll export is permitted and adoptable, not mandatory. Authorize preparation of a narrow Founder-governed record and reconciliation proposal for FCTM row 17-§9-5 only. Preserve all other approved commitments, DLEG and permissions. No Git write, Blueprint lock, EIS or implementation is authorized by this selection alone.
```

## 2. Accepted option text and Mission Control record (verbatim extracts)

Option A as worded in MC-701 §3 (PR #1107 comment 6555836784). These are not the Founder's words:

> **A — Keep an optional capability in scope, not a mandatory export.** Confirm that payroll-support display is the Phase One documented baseline and export is **permitted and adoptable only if separately selected/authorized**; authorize a targeted Founder-governed FCTM/Blueprint commitment reconciliation to remove any false compulsory-export implication (without deleting the source row, changing other 768 mappings or creating a payroll calculation).

> **MC-701 §2:** "Source 17 supports **permitted/adoptable payroll-support or export views** when authorized and appropriately configured; it does **not independently require** a universal export format, overtime-derived calculations, automatic payroll execution, or a hard build-commitment for export."

> **MC-702 §1:** "This selection does not by itself amend FCTM metadata or make a proposal branch-effective."

The full MC-701 and MC-702 texts prevail over these extracts.

## 3. Source-authority and effect matrix (Definition Actor accounting; Section 1 prevails)

| Source | Blob | What it says | Effect of this record |
|---|---|---|---|
| Contract 17 §9 | `7943f74a` | "When Staff/HR add-on is enabled, permitted workspace views may include:" followed by six bullets, the fifth "payroll support/export" | **None.** Not amended. The record decides how that one unit is committed here |
| Global Product Completion View row 17 | `ee76d920` | `BUILD NOW`; Manager core with role-appropriate Ledger surfaces (`MGR+LDG`) | **None.** Commitment and commercial classification unchanged |
| Source 18 v1.3 | `f3b01b60` | §3.2 item 5: a commitment, commercial classification or assignment change needs a cited Founder decision. Stage 8 freezes them | **None.** This record is the cited Founder decision for the row's coding |
| `18:FPDR-5` | `2714f896` | Overtime recording only; "No payroll-export obligation arises" | **None.** It stays cited on the row; not amended |
| `18:FPDR-4` | `32a2026f` | Named-minimum and adoptable pattern for ten other rows | **None.** Pattern analogy only; `17-§9-5` is not an F-4 row and is not given an F-4 code |
| FCTM `03-…` row `17-§9-5` | `3402735e` | `OBL / BUILD NOW / MGR+LDG / SB-P-1.18 / IN SCOPE`; "C17 §9 'may include' source-semantics screening open (MC-544)" | Reconciled separately: the open-screening clause is replaced by a citation of this record. No other field of the row and no other row changes |

## 4. What this record does and does not do

**It does, for SB-P-1.18 Phase One and row `17-§9-5` only:**
1. Make **payroll-support viewing** the Phase One baseline. It is demonstrated within the approved Staff/HR add-on, role and entitlement restrictions (`17-§4-15`, `17-§9-7`, `D12`, `DENT`).
2. Make **payroll export** permitted and adoptable, not mandatory. It is verified only if adopted; an unadopted export is neither required nor prohibited.
3. Keep the row `IN SCOPE`, with its source pointer, kind, build commitment, commercial classification and owning mission unchanged.

**It does not:**
- create an export obligation, format, file, provider, delivery date or accounting workflow;
- create a payroll calculation, an overtime-derived export field or an automated wage decision;
- adopt export. Any later adoption needs its own authorized scope and keeps every hold below;
- change any other FCTM row, the 768 other mappings or the 591 other engineering rows;
- authorize a Git write, the Stage 8 lock, the EIS, implementation or deployment.

**Holds that stay:** `DLEG` for payroll and overtime legal rules (before the EIS specifies any calculation or legal rule, `18:FPDR-5` §5); staff and employee permission scoping (`D12`); `DENT`; `D17`; no automated wage decision; no legal payroll calculation or export format until its proper authority.

## 5. Classification (Definition Actor analysis)

| Trigger | Treatment |
|---|---|
| T1 | Not fired. MC-701 §2 settled the source meaning |
| T2 | Not fired. No approved sources conflict; the tension was between the FCTM coding and the source's permissive lead-in |
| T3 | **Fired and decided.** Naming payroll-support viewing as the baseline and export as adoptable is a product decision, as with `18:FPDR-4` |
| T6 | Not applicable |
| T7 | **Screened; not fired.** The source pointer, kind, build commitment, commercial classification, owning mission and disposition are unchanged, and no source obligation is omitted, deferred or narrowed, because the source unit is permissive. If Mission Control judges that removing a compulsory-export reading is a reclassification, Section 1 is the Founder decision for it: the Founder states expressly that export is "not mandatory" |
| T8 | Not fired |

## 6. Affected records (accounting only; no record is changed by this record)

- **FCTM:** row `17-§9-5` (citation, Founder-decision and verification-seed cells); a new legend code `L-F7`; the §0.8 decision list; the header status note. Reconciled separately.
- **Blueprint (active):** §§8.16, 10.1, 15.4, 19 (one map row), 20.4.9, 20.6 B6-14, 20.7.9, 20.8 (one register row and the status and risk definitions), 21.3 and 21.4, plus Metadata, §18 and §19 history. Reconciled separately.
- **Historical records:** `18:FPDR-5`, MC-544, MC-657 and the Stage 2 and Stage 3 registers are kept unchanged as history. This record is their cross-reference.

## 7. Publication boundary

**This section grants no Git-write authority.** This record cannot authorize its own publication. Publication needs a separate, explicit Mission Control Git-write authorization under Communication Protocol §16, issued before any write. The Founder alone human-merges. This record becomes effective on that merge and on Mission Control's verification on `main`.

**STOP — MISSION CONTROL REVIEW, FOUNDER HUMAN MERGE AND POST-MERGE VERIFICATION REQUIRED.** Implementation Authorization: WITHHELD.
