# SB-P-1.17 — Stage 3 Decision Integration and Reconciliation

**Mission:** SB-P-1.17 — Manager Operations\
**Stage:** Source 18 v1.2 Stage 3 — Founder Decision Gate (open)\
**Status:** `FOR MISSION CONTROL REVIEW — STAGE 3 REMAINS OPEN`\
**Prepared by:** Claude Code, Definition Actor, under MC-310 (Founder-approved; relayed). The scope accepted by MC-309 is MC-308's reconciliation findings.\
**Baseline:** `main@9c9bce829dc3f3232f453f1a70f37c9fafd4c7d9`\
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

This document integrates the six effective Founder decisions into the mission's accounting. It adds no product decision. **It does not replace or rewrite the accepted Stage 2 Truth Pack** (`03-stage2-mission-truth-pack.md`, blob `8d541153`). Where a derived constraint is superseded, the correction is recorded here.

## 0. Sources

| Source | Path | Blob |
|---|---|---|
| Six-entry Founder Product Decision Record (`17:FPDR-1`–`-6`) | `communication/missions/SB-P-1.17/claude-code/10-stage3-six-entry-founder-product-decision-record-for-review.md` | `90b7ca1d` |
| Stage 2 FCTM (before this integration) | `…/claude-code/01-stage2-populated-fctm.md` | `198d40c8` |
| Stage 2 Truth Pack | `…/claude-code/03-stage2-mission-truth-pack.md` | `8d541153` |
| Decision annex | `…/claude-code/07-stage3-decision-options-and-evidence-annex.md` | `3157dcfd` |
| U-15 addendum; publication authorization | `…/mission-control/07-…`, `…/mission-control/08-…` | `c7cd9e3b`, `1c9c326f` |
| Contracts 7, 13, 17; Build Plan | `docs/phase-1-mission-blueprint/smart-business-features/` | `65ad91b2`, `4426e8b1`, `7943f74a`, `9dfdd924` |

MC-307, MC-308, MC-309 and MC-310 are Mission Control conversation records relayed by the Founder; none is in the repository. MC-306 and MC-308 were Mission Control instructions for read-only analysis; the Definition Actor returned its findings through the Founder. This document records the MC-308 return's findings as the scope that MC-310 states MC-309 accepted.

## A. Reconciled inventory

All counts were computed from FCTM blob `198d40c8`. Every candidate row identifier exists, and its disposition and owner were read from the FCTM.

| Origin | References | Unique rows | IN SCOPE | DELEGATED | ASSIGNED TO LATER MISSION |
|---|---|---|---|---|---|
| Record 10, explicit traceability lists | 26 | 25 | 18 | 5 | 2 |
| Record 10, "also reaches" rows (`7-§5-2`, `17-§4-14`, `7-§11-2.5`) | 3 | 3 | 3 | 0 | 0 |
| Additional consequential rows proposed in the MC-306 return | 20 | 20 | 19 | 1 | 0 |
| POS interface-field rows `13-§4-2`–`-7` (added in the MC-308 return) | 6 | 6 | 6 | 0 | 0 |
| **All candidates** | **55** | **53** | **45** | **6** | **2** |

- **Repeated across decisions:** `7-§5-1` (FPDR-1, FPDR-3) and `13-§4-7` (FPDR-1, FPDR-2).
- **MC-306 return arithmetic corrected:**
  - Record 10's set is 28 unique rows, not 27. Its subtotals 21/5/2 were right.
  - The additional set is 20 rows with 19 IN SCOPE, not 18.
- **Candidate rows are not citation rows.** Only the 21 DIRECT rows carry a decision citation (Section B).

| Classification (unique rows, strongest class) | Rows |
|---|---|
| DIRECT | 21 |
| CONSEQUENTIAL | 20 |
| CROSS-MISSION | 8 |
| NO CITATION REQUIRED | 4 |
| **Total** | **53** |

There are 22 DIRECT references: `7-§5-1` is DIRECT under both `17:FPDR-1` and `17:FPDR-3`.

## B. Decision citation classification

**Treatment by class:**

| Class | Treatment |
|---|---|
| DIRECT | The effective decision ID is appended to the row's Founder-decision cell (applied in this PR) |
| CONSEQUENTIAL | Mapped as acceptance or consumer coverage at Stage 4; no default FCTM edit |
| CROSS-MISSION | Referenced here only; the owning mission's row is unchanged |
| NO CITATION REQUIRED | Existing approved citations preserved |

### B.1 `17:FPDR-1` — scoped Manager permissions

| Row | Disposition / owner | Class | Rationale |
|---|---|---|---|
| `7-§5-1` | IN SCOPE / SB-P-1.17 | DIRECT | Defines when an "authorized Manager" may confirm, modify or reject (capability 2) |
| `13-§13-2` | IN SCOPE / SB-P-1.17 | DIRECT | Defines the Manager's Owner-delegated scope; capability 5 (operator-attributed counter detail) is Owner-reserved |
| `13-§10-6` | IN SCOPE / SB-P-1.17 | DIRECT | A Manager can be the "authorized user" who enters the cash count (capability 6, by grant) |
| `BP-§10.6-W5` | IN SCOPE / SB-P-1.17 | CONSEQUENTIAL | Owner-confirmed by default is unchanged; adds a grant path |
| `BP-§10.6-A3` | IN SCOPE / SB-P-1.17 | CONSEQUENTIAL | Founder Scenario A tests the Owner path and stays Founder-reserved |
| `13-§4-7` | IN SCOPE / SB-P-1.17 | CONSEQUENTIAL here (DIRECT under FPDR-2) | Operator identifiers are ingested "where permitted"; visibility follows capability 5 |
| `17-§18-5` | IN SCOPE / SB-P-1.17 | CONSEQUENTIAL | Non-surveillance rule, supported by Owner-reserved operator detail |
| `7-§5-2` | IN SCOPE / SB-P-1.17 | NO CITATION REQUIRED | **Owner-only standing-rule creation is C7 §5 p3 itself;** it is not capability 5 |
| `13-§13-3` | IN SCOPE / SB-P-1.17 | NO CITATION REQUIRED | Concerns Employees and counter staff, already governed by C13 §13 p3 |
| `7-§10-2`, `17-§22-2`, `21-§4-2`, `21-§24-3` | DELEGATED / SB-P-1.12 | CROSS-MISSION | Permission kernel stays SB-P-1.12's |
| `11-§13-3` | DELEGATED / SB-P-1.15 | CROSS-MISSION | Employee automation limit, owned by SB-P-1.15 |

### B.2 `17:FPDR-2` — vendor-neutral standard POS bridge

| Row | Disposition / owner | Class | Rationale |
|---|---|---|---|
| `13-§4-1` | IN SCOPE / SB-P-1.17 | DIRECT | Defines the Phase 1 bridge: two interface classes, one bridge contract |
| `13-§4-2`, `-3`, `-4`, `-6` | IN SCOPE / SB-P-1.17 | DIRECT | Minimum fields: sales ingestion, transaction identity, item mapping, payment method |
| `13-§4-5`, `-7` | IN SCOPE / SB-P-1.17 | DIRECT | Optional fields: discount and void, operator identity |
| `13-§4-10` | IN SCOPE / SB-P-1.17 | DIRECT | A structured export file is a committed interface class, not a CSV-only bridge |
| `13-§5-6` | IN SCOPE / SB-P-1.17 | DIRECT | An integration limitation is shown as the signal being unavailable from that POS |
| `BP-§10.6-W7` | IN SCOPE / SB-P-1.17 | DIRECT | Fixes the Phase 1 scope of "standard POS bridge adapters" |
| `BP-§10.6-B1` | IN SCOPE / SB-P-1.17 | DIRECT | Scenario B is verified on the first evidenced source, so acceptance is **feasibility-dependent** (`DPOS` UNKNOWN) |
| `BP-§5.4-1` | IN SCOPE / SB-P-1.17 | CONSEQUENTIAL | Activation rule unchanged; vendor selection is deferred to it |
| `BP-§10.6-W8`, `13-§21-5` | IN SCOPE / SB-P-1.17 | CONSEQUENTIAL | Neutral review; signals only from supplied data; `13-§21-5` is feasibility-dependent |
| `13-§21-1`, `-2`, `-4`, `-10`, `-11` | IN SCOPE / SB-P-1.17 | CONSEQUENTIAL | Acceptance scenarios that test the bridge contract |
| `22-§17-2` | IN SCOPE / SB-P-1.17 | CONSEQUENTIAL | Adapter pattern consumed |
| `13-§20-7` | IN SCOPE / SB-P-1.17 | NO CITATION REQUIRED | The approved non-goal (no CSV-only downgrade) governs |
| `BP-§10.6-B2` | IN SCOPE / SB-P-1.17 | NO CITATION REQUIRED | The neutral-language requirement is unchanged |

### B.3 `17:FPDR-3` — merchant-controlled supplier requests

| Row | Disposition / owner | Class | Rationale |
|---|---|---|---|
| `7-§5-1` | IN SCOPE / SB-P-1.17 | DIRECT | The native "approved supplier/order action" is a recorded purchase request with a merchant-sent message |
| `7-§3-6` | IN SCOPE / SB-P-1.17 | DIRECT | Communication history holds merchant-reported events only |
| `7-§13-8` | IN SCOPE / SB-P-1.17 | DIRECT | Communication failure is merchant-reported |
| `17-§7-7` | IN SCOPE / SB-P-1.17 | CONSEQUENTIAL | The follow-up view consumes request state |
| `24-§18-3` | IN SCOPE / SB-P-1.17 | CONSEQUENTIAL | Example n16 "supplier communication is sent" is verified as merchant-sent |
| `23-§4-4`, `23-§16-5` | ASSIGNED TO LATER MISSION / SB-P-1.20 | CROSS-MISSION | System dispatch and the WhatsApp channel stay with SB-P-1.20 |

### B.4 `17:FPDR-4` — cost-protected supplier prices

| Row | Disposition / owner | Class | Rationale |
|---|---|---|---|
| `7-§3-5`, `7-§4-5` | IN SCOPE / SB-P-1.17 | DIRECT | Supplier purchase prices are classified as cost information; `12:FR-09` is retained beside the new ID |
| `17-§4-14`, `7-§11-2.5` | IN SCOPE / SB-P-1.17 | CONSEQUENTIAL | Analytics and AI surfaces apply the classification |

### B.5 `17:FPDR-5` — Owner-confirmed historical linking

| Row | Disposition / owner | Class | Rationale |
|---|---|---|---|
| `7-§3-4` | IN SCOPE / SB-P-1.17 | DIRECT | Historical purchases enter history only by explicit, non-destructive Owner confirmation |
| `7-§15-6` | IN SCOPE / SB-P-1.17 | CONSEQUENTIAL | The acceptance scenario tests it |

### B.6 `17:FPDR-6` — Owner-confirmed threshold suggestions

| Row | Disposition / owner | Class | Rationale |
|---|---|---|---|
| `7-§2-6` | IN SCOPE / SB-P-1.17 | DIRECT | Low-stock awareness may start from an Owner-confirmed suggested threshold |
| `7-§16-6` | IN SCOPE / SB-P-1.17 | DIRECT | An evidence-backed item suggestion is not a historical fixed threshold; still no universal default |
| `BP-§10.6-A1` | IN SCOPE / SB-P-1.17 | CONSEQUENTIAL | "Falls below threshold" means a confirmed threshold; the scenario is unchanged |
| `7-§15-4`, `7-§15-7` | IN SCOPE / SB-P-1.17 | CONSEQUENTIAL | No threshold-driven alert or action before confirmation; manual reorder unaffected |
| `4-§3-5` | DELEGATED / SB-P-1.15 | CROSS-MISSION | Daily Intelligence must not report unconfirmed thresholds as low stock |

## C. Derived constraints

The accepted Stage 2 Truth Pack Part B is unchanged. The entries below govern where they differ.

| DC | Status | Reconciled wording |
|---|---|---|
| **DC-05** | **Superseded by `17:FPDR-4`** (Founder Product Truth) | Supplier purchase prices shown in reorder, supplier, analytics or AI contexts are cost information by Founder classification. A Manager receives them only with the explicit Reference Cost permission. Smart Business computes, labels or exposes no margin without the separate margin permission (`12:FR-09`). The Stage 2 rationale is withdrawn: a person's own arithmetic on separately authorized values is not Smart Business granting margin, and the protection does not rest on it |
| **DC-06** | **Amended by `17:FPDR-6`** | Where the merchant's own evidence is sufficient, Smart Business may suggest an explained, item-level starting threshold. No threshold-driven alert and no threshold-driven reorder action becomes active until the Owner explicitly confirms or changes it. With insufficient evidence no threshold is invented and the configuration gap is shown. No universal numeric default exists. Independently authorized manual reorder workflows are unaffected. "Sufficient evidence" is a Stage 4/EIS operational definition |
| **DC-14** | **Corrected by `17:FPDR-1`** | The Stage 2 clause allowing operator-attributed counter detail "to a Manager under an explicit grant" is withdrawn. Under Option A, operator-attributed counter detail (capability 5) is Owner-reserved and not delegable. Counter review signals at counter and period level (capability 4) may be granted to a Manager within scope. Operator detail appears only where the POS exposes operator identity and its use is permitted. The U-11 staff-privacy and legal-research hold (`12:FR-06`) remains |
| DC-03 | Unchanged; engineering constraint | Owner-only standing-rule creation is approved source (C7 §5 p3), restated but not created by `17:FPDR-1`. `D12`/`D15` holds remain |
| DC-11 | Unchanged; consistent with `17:FPDR-3` | Delivery of a supplier communication is not acceptance; state changes only on a merchant entry |
| DC-12 | **Remains DERIVED — NOT APPROVED PRODUCT TRUTH** on the review-candidate mechanism | `17:FPDR-2` adopts source identity and dedupe. Handling a manual-versus-POS duplicate as a merchant review candidate follows C13 §7 p2 (no silent guessing; reconcile) but is not a Founder decision. The merchant experience is defined at Stage 4 (Section D) |

DC-04, DC-08, DC-09 and DC-15 are unchanged by the decisions.

## D. Outstanding items and holds

**Disposition provenance.**
- Each disposition below is the proposal from the MC-308 return, which MC-310 states MC-309 accepted.
- MC-309's own wording is not in the repository.
- No unresolved item is converted into approved Product Truth.

| Item | Settled by approved truth | Still unresolved | Blocks Stage 3? | Disposition |
|---|---|---|---|---|
| **U-03** closing-cash cadence (C13 §10) | Input list, authorized-user count, variance is not misconduct, explicit unknowns. `17:FPDR-1` capabilities 6 and 7 settle who may count or view the variance | Day versus shift; opening-float capture | No | Carry to Stage 4/EIS; DC-09 is the provisional design posture |
| **U-04** stock source precedence (C7 §7 p4; C13 §7 p2) | No silent guessing; preserve evidence; the EIS defines precedence | The specific precedence rules | No | Carry to EIS. T6 only if a rule would silently prefer one source by default (DC-08) |
| **U-09** slices and consumer verification | `7-§6-4b`/`-5b` intact; originals `7-§6-4`/`-5` stay SB-P-1.14. `17:FPDR-1`'s acceptance condition requires server-side denial on SB-P-1.17 Manager surfaces | Consumer verification of `7-§15-10`, `7-§15-12`, `17-§22-3`, `17-§22-9` on SB-P-1.17 surfaces | No | Slices approved. Consumer verification is mapped in the Stage 4 row map; no new FCTM rows unless Mission Control directs |
| **U-10** packaging (C7 §9; Source 11; GPCV row 7) | Same foundation; Manager core versus Ledger add-on; price `BP-§15-4` not critical | Confirmation of the DC-15 reading | No | DC-15 confirmed as a reading, still derived. Founder T1 only if the reading is rejected |
| **U-12** joint supplier rows (`3-§9-3`, `3-§15-7`, `BP-§10.3-S2`) | `16:FPDR-1`: SB-P-1.17 and SB-P-1.18 keep directory and search. Supplier identity is C7 §3 | Allocation of the customer-directory slice | No | Supplier-side reading recorded; customer side stays joint, allocated no later than SB-P-1.18 intake |
| **U-14** housekeeping | — | Stale live pair; stale headers; Mission Control records absent from the repository | Partly: the effectiveness record is addressed by `mission-control/09-…` in this PR | Remaining items stay with Mission Control |
| **DC-12** POS/manual duplicate (C13 §6, §7 p2, §21 n2; 3-§15-11) | No duplicate revenue; no silent guessing; `17:FPDR-2` dedupe | Exact merchant experience | No | Consistent with approved text; no new Founder decision; detailed at Stage 4 |

**New questions from the decisions.** None blocks Stage 3:
- whether historical linking can be delegated (`17:FPDR-5`);
- who besides the Owner may confirm or set thresholds (`17:FPDR-6`);
- the "sufficient evidence" definition;
- selection of the first evidenced Scenario B source (`17:FPDR-2`, BP §5.4);
- semantics of merchant-sent supplier messages;
- the capability catalogue (EIS, consuming SB-P-1.12).

**Holds preserved:**

| Hold | State |
|---|---|
| U-11 | Staff privacy and legal research (`12:FR-06`) |
| W-1 / FIN-01 `owed_by_business` | PROVISIONAL |
| `DPOS` | POS feasibility **UNKNOWN** |
| `DSEC`, `DENT`, `DNTF` | Unchanged |
| `D12`, `D13`, `D14`, `DTX`/PQ-2, `D15`, `DSCH`, `DAI`, `DV`, `DR2` | Specifications only, not implemented |
| Five BP §15 `UNRESOLVED FOUNDER DECISION` rows | Not on the critical path |
| Δ-06 delivery topology | UNKNOWN |
| SB-P-1.16 | Suspension intact |

## E. Traceability and verification

**The 21 DIRECT rows, as amended in `01-stage2-populated-fctm.md` (Founder-decision column only):**

| Row | Before | After |
|---|---|---|
| `7-§2-6` | — | `17:FPDR-6` |
| `7-§3-4` | — | `17:FPDR-5` |
| `7-§3-5` | `12:FR-09` | `12:FR-09; 17:FPDR-4` |
| `7-§3-6` | — | `17:FPDR-3` |
| `7-§4-5` | `12:FR-09` | `12:FR-09; 17:FPDR-4` |
| `7-§5-1` | — | `17:FPDR-1; 17:FPDR-3` |
| `7-§13-8` | — | `17:FPDR-3` |
| `7-§16-6` | — | `17:FPDR-6` |
| `13-§4-1` to `13-§4-7`, `13-§4-10` | — | `17:FPDR-2` (8 rows) |
| `13-§5-6` | — | `17:FPDR-2` |
| `13-§10-6` | — | `17:FPDR-1` |
| `13-§13-2` | — | `17:FPDR-1` |
| `BP-§10.6-W7` | — | `17:FPDR-2` |
| `BP-§10.6-B1` | — | `17:FPDR-2` |

**Change isolation:**
- 21 lines changed, and in each only the Founder-decision column (column 11) differs.
- 22 decision IDs were added; existing citations were kept.
- No disposition, owner, kind, pointer, dependency or evidence cell changed.
- No CONSEQUENTIAL, CROSS-MISSION or NO CITATION REQUIRED row was touched.

**Known side effect, not corrected under this authority.** The FCTM's own Part F "Founder decision cited" count table and its header status line still describe the Stage 2 state. MC-310 restricts this change to the 21 citation cells, so a later narrow instruction may refresh those summaries.

**Acceptance coverage carried forward.** The CONSEQUENTIAL rows in Section B, and each record 10 entry's acceptance condition, become Stage 4 Verification Checklist mappings. None is demonstrated.

**STOP FOR MISSION CONTROL SUBSTANTIVE REVIEW.** STAGE 3 REMAINS OPEN. Stage 4 not authorized.
