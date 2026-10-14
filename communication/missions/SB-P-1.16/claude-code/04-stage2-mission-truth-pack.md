# SB-P-1.16 — Stage 2 Mission Truth Pack

**Mission:** SB-P-1.16 — Financial Integrity & Credit  
**Lifecycle stage:** Source 18 v1.2, Stage 2 — Mission Truth and Delta Reconciliation  
**Status:** `DRAFT STAGE 2 OUTPUT — NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`  
**Prepared by:** Claude Code, Definition Actor (MC-107 §13.1), under MC-106 (blob `49996ffefb2049036ca8b522069be5389f07ace8`) as activated by MC-109  
**Baseline:** `main@e4e382c73824f02e83ad4ee2497e5e046fd74086`, 2026-10-14  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

`Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force.`

## 0. The five parts

| Part | Content | Location |
|---|---|---|
| A | Populated FCTM (555 rows) | `02-stage2-populated-fctm.md` |
| — | Independent obligation inventory (pointers only) | `03-stage2-obligation-inventory.md` |
| B | Derived constraints | This file, Part B |
| C | Delta register | This file, Part C |
| D | Unresolved questions and conflict register, T1–T8 screen, Founder Decision Gate brief | This file, Part D |
| E | Institutional Learning Intake Record | `05-stage2-institutional-learning-intake.md` |
| — | Stage 2 completion report and set comparison | `06-stage2-completion-report.md` |

The Stage 1 FCTM opening record `mission-control/03-stage1-fctm-opened.md` (blob `466780f0`) and the Stage 1 return (blob `2304876c`) are not modified.

## Part A — FCTM summary

| Part of the FCTM | Rows | `IN SCOPE` | `DELEGATED` | `ASSIGNED TO LATER MISSION` | `NOT APPLICABLE` | `OUT OF BUILD SCOPE` | `UNRESOLVED FOUNDER DECISION` | `ESCALATED` |
|---|---|---|---|---|---|---|---|---|
| A. Contract 14 | 151 | 141 | 0 | 1 | 9 | 0 | 0 | 0 |
| B. Contract 15 | 172 | 160 | 0 | 1 | 11 | 0 | 0 | 0 |
| C. Contract 03 | 68 | 5 | 54 | 7 | 2 | 0 | 0 | 0 |
| D. Delegates | 91 | 5 | 72 | 10 | 3 | 0 | 1 | 0 |
| E. Build Plan / GPCV | 73 | 38 | 3 | 0 | 7 | 22 | 2 | 1 |
| **Total** | **555** | **349** | **129** | **19** | **32** | **22** | **3** | **1** |

No row is `ALREADY DEMONSTRATED`. No row's build commitment, commercial classification or mission assignment differs from its approved source. The one `ESCALATED` row (`BP-§10.3-S2`) keeps its inherited assignment verbatim pending the Founder.

## Part B — Derived constraints

A derived constraint is an engineering or interpretation constraint needed to preserve approved behaviour. **None is Product Truth.** Constraints marked **DERIVED — REQUIRES CONFIRMATION** could materially affect product behaviour and are Stage 3 candidates (T6). The others restate consequences of approved sources for the Blueprint and EIS and need no product decision.

| ID | Constraint | Source basis | Status | Affected rows |
|---|---|---|---|---|
| DC-01 | Scenario A "risk" is presented only as factual, record-derived context: outstanding balance, age of the oldest unpaid credit, comparison with an Owner-configured threshold, repayment history. No score, rank, risk label or good/bad classification is computed or shown. | BP §10.5 Scenario A; C14 §3 b7, §19 b5, §21 b2; GPCV §9 | **DERIVED — REQUIRES CONFIRMATION** (U-03) | `BP-§10.5-A2`, `BP-§10.5-W4`, `14-§3-7`, `14-§9-*`, `14-§19-5` |
| DC-02 | "Overdue" is shown only where a due or expected follow-up date was recorded (C14 §5 b6 "if used"). Without one, the product shows the age since the credit date and does not call the balance overdue. A due date is never treated as proof of payment. | BP §10.5 Scenario A; C14 §5 b6; C03 §16 (row `3-§16`; SB-P-1.14 row 3-§16-9) | **DERIVED — REQUIRES CONFIRMATION** (U-04) | `BP-§10.5-A1`, `BP-§10.5-W3`, `14-§5-6` |
| DC-03 | The Build Plan's verification vocabulary (verified, unmatched, partially matched, ambiguous) maps onto C15 §4's explicit, traceable states. "Partially matched" has two plausible meanings: an amount/reference variance (C15 §10 mismatch) or a part-payment against a larger balance (C14 §7). Until decided, both remain representable and neither is merged into "verified". | BP §10.5 E2; C15 §§4, 10; C14 §7 | **DERIVED — REQUIRES CONFIRMATION** (U-02) | `BP-§10.5-E2`, `BP-§10.5-W10`, `15-§4-*` |
| DC-04 | Every credit, repayment, evidence-link, correction and reconciliation write uses the one governed transactions-family path. Verification is a property or link of the existing record, never a second transaction. | C15 §8 p2; 14:FPDR-1, 14:FPDR-4; BP §6.2; PQ-2 | Derived from approved sources | Rows with `DTX` (50 `IN SCOPE`) |
| DC-05 | Evidence idempotency is keyed on business scope, source/provider and external reference (UTR) where available. Replaying a confirmed link, or a duplicate provider event, is a no-op that returns the original outcome. | C15 §§6 b11, 12; 22-§15; BP §10.5 Scenario B clause 3 | Derived | `15-§12-*`, `15-§25-2`, `BP-§10.5-B3` |
| DC-06 | An ambiguous-match confirmation binds the evidence item, the chosen candidate, that candidate's state version and the current actor. Commit revalidates all four and re-prompts on a material change. | C15 §9 b4–b5, §19 p2; 14:FPDR-3; 24-§21-5 | Derived | `15-§9-*`, `15-§19-*`, `24-§21-5` |
| DC-07 | Authoritative per-customer balance is computed from SB-P-1.14 Ledger credit and repayment facts. No separate customer-credit database is introduced. | C14 §21 b6; 14:FPDR-1; `3-§9-12` | Derived | `14-§5-7`, `14-§21-6`, `3-§9-12` |
| DC-08 | Threshold warnings and balance context are re-evaluated at confirmation time, so a stale balance cannot drive the warning. | C14 §18 b5; 14:FPDR-3 | Derived | `14-§8-*`, `14-§18-5` |
| DC-09 | A Manager has no credit or reconciliation access until an explicit Owner delegation exists. The granularity of that delegation follows the SB-P-1.12 kernel. No merchant-facing grant UX is assumed before a decision. | C14 §14 p2; C15 §17 p2; SB-P-1.15 DC-06 and R15-11 | **DERIVED — REQUIRES CONFIRMATION** (U-07) | `14-§14-2`, `15-§17-2` |
| DC-10 | No customer-facing credit or collection message is sent without merchant approval. Before SB-P-1.20 no outbound channel to customers is approved (SB-P-1.15 FDB-2 native-only), so customer communication rows cannot be demonstrated outside the native product in this mission. Owner-facing follow-up works natively. | C14 §§10, 14 p4; C21 §13; SB-P-1.15 FDB-2; `DNTF` | **DERIVED — REQUIRES CONFIRMATION** (U-05) | `14-§10-*`, `14-§14-4`, `14-§22-9` |
| DC-11 | Payment evidence is retained non-destructively. No deletion duration is set until U-5 is decided. The SB-P-1.14 FPDR-2 bounded grace applies only to unconfirmed uploads, not to evidence linked to a business record. | C15 §6 p2; C25 §17; 14:FPDR-2; BP §15 item 6 | **DERIVED — REQUIRES CONFIRMATION** (U-08) | `15-§6-12`, `25-§17-*`, `5-§6-1` |
| DC-12 | Merchant-uploaded screenshots or receipts enter as evidence requiring review. They never set a verified state by themselves. | C15 §5 b5, p2; §22 b6 | Derived | `15-§5-5`, `15-§5-8`, `15-§22-6` |
| DC-13 | The evidence-ingestion design is adapter-based and provider-agnostic. No provider, credential or channel activation is assumed by the specification. | C15 §3 b7, §24 b3; 22-§17-3; BP §5.4 | Derived | Rows with `DPAY` |
| DC-14 | Merchant payment reconciliation (C15) is kept distinct in naming, data and permissions from POS closing-cash variance (C13 §10) and Smart Business subscription-billing reconciliation (C18 §15). Shared foundations (audit, idempotency, adapters) are reused, not the domain logic. | MC-101 L.3; C13 §10; C18 §15 | Derived | `13-§10`, `18-§15`, `18-§18` |
| DC-15 | Existing `sale` rows with `payment_method = credit` carry only a counterparty reference, not a customer identity. Whether and how they enter authoritative per-customer balances is undecided. They are never silently reinterpreted, and any attribution to a customer identity is an explicit, confirmed, audited act. | 14:FPDR-1, 14:FPDR-4; C14 §4; `3-§9-12` | **DERIVED — REQUIRES CONFIRMATION** (part of U-01) | `3-§9-12`, `14-§4-*`, `14-§22-1` |
| DC-16 | The SB-P-1.15 qualified Ask CFO answer (15:FDB-3) is replaced by authoritative balances only for data SB-P-1.16 actually demonstrates. Missing or unattributed credit stays disclosed as missing. | 15:FDB-3; C14 §11; C15 §16 p2 | Derived | `14-§11-*`, `15-§16-*` |

## Part C — Delta register

Changes since each source was approved, at baseline `e4e382c7`. Evidence class: **REPO** (repository text), **GOV** (governance record), **API** (read-only GitHub query in this session). Missing runtime evidence is never treated as successful implementation.

| ID | Delta | Evidence | Classification |
|---|---|---|---|
| Δ-01 | **Repository implementation.** `transactions.transaction_type` is still `('sale', 'purchase')`; `payment_method` includes `'credit'`. No credit-balance, ageing, threshold, repayment, payment-evidence, verification-state, matching or reconciliation object exists in `supabase/migrations`, `src` or `supabase/functions` (unrelated `reconcile` matches only). SB-P-1.14's four-state widening is not present. | REPO: `supabase/migrations/20260719102137_*.sql` lines 5, 10; word search recorded in Stage 1 §B | `ENGINEERING ONLY` — nothing in scope is implemented; no Product Truth changes |
| Δ-02 | **Migrations.** 24 migration files; last change `f6ec93d1` (2026-09-02). No SB-P-1.12 to SB-P-1.15 migration exists. Migration execution is default-deny (`docs/migration/README.md`, blob `810038e4`). | REPO | `ENGINEERING ONLY` |
| Δ-03 | **Grants and permissions.** `20260727000000_reconcile_default_grants.sql` grants to `anon`; no migration revokes on `transactions`, `businesses` or `transaction_correction_events` (BP §5.1 gate open in repository text). Only owner-scoped RLS exists for implemented domains; Manager, Employee and Customer roles are specified (SB-P-1.12) but not implemented. Live grants unverified. | REPO; BP §§5.1, 19 | `ENGINEERING ONLY` — security hold on every financial table this mission will touch |
| Δ-04 | **Source 18 and governance.** Source 18 v1.2 (`0945bda6`), Phase 1 operating pattern (`39b1bc36`), Source 11 (`16897d6c`), Constitution (`9594b802`), Build Plan (`9dfdd924`), GPCV (`ee76d920`) and all 25 contracts are unchanged since Stage 1 and since the SB-P-1.15 intake (`eacc4610`). | REPO: `git diff --name-status eacc4610 e4e382c7` | `NO PRODUCT EFFECT` |
| Δ-05 | **CI / Actions.** No workflow run, check suite or status exists for any commit since 2026-09-30T11:28:13Z, including `e4e382c7`. Required status checks on `main`: none (`branch-protection-verification.md`, blob `e8997d9c`; MC-160 makes the Markdown gate advisory). EOS standards still expect "GitHub Actions PASS". | API; GOV | `ENGINEERING ONLY` — assurance hold; CI is UNVERIFIED |
| Δ-06 | **Provider and environment.** GitHub account restriction (ticket `#4816157`), paused Supabase test project, Lovable builder and Resend states are recorded in SB-P-1.12 to SB-P-1.15 records and MC-97 §8. Not re-verified in this stage (no access authorized). No payment or bank provider is selected or provisioned. | GOV | `ENGINEERING ONLY` — blocks implementation and runtime proof, not documentary definition |
| Δ-07 | **Prior mission state.** SB-P-1.12 to SB-P-1.15 Implementation Authorizations are WITHHELD; SB-P-1.15's communication cycle is suspended (MC-95); its partial OLE is nonterminal. Since the SB-P-1.15 intake, the SB-P-1.15 Blueprint, EIS and implementation package were locked (blobs `0ab2ad6f`, `75dcf385`). | GOV | `ENGINEERING ONLY` — every upstream dependency stays a specification |
| Δ-08 | **Institutional learning.** 17 promotions; zero added or superseded since the SB-P-1.15 intake. Guide unchanged (`3da3d6d3`). | REPO | `NO PRODUCT EFFECT` |
| Δ-09 | **SB-P-1.12 EIS-ID-03 (approved after the Build Plan).** SB-P-1.12's locked EIS specifies Customer as a business-scoped participant identity, "one shared record per business", owned by SB-P-1.12 (`22-§5-5`). Build Plan §10.3 (and FCTM-14 `BP-§10.3-S2`, `3-§15-7`) places Customer identity establishment in SB-P-1.17 / SB-P-1.18. C14 §4 needs customer credit identity in SB-P-1.16. | REPO: SB-P-1.12 EIS, Blueprint §8.20; BP §10.3; FCTM-14 | **`PRODUCT-AFFECTING`** — T4 and T2; escalated as U-01 |
| Δ-10 | **Stage 1 MC-101 reclassification.** C13 and C18 are adjacent domains; C17 and C20 are downstream consumers (Stage 1 §L.3). Reflected in FCTM Part D. | GOV | `NO PRODUCT EFFECT` — relationship classification; no assignment changed |
| Δ-11 | **Stale mission naming.** SB-P-1.11 engineering contract and build prompt call SB-P-1.16 "POS Integration Foundation"; superseded by Build Plan §9 (2026-09-12). | REPO | `NO PRODUCT EFFECT` |
| Δ-12 | **Live communication pair.** `communication/live/instruction.md` and `report.md` now carry SB-P-1.16 entry text (MC-96). | GOV | `NO PRODUCT EFFECT` |
| Δ-13 | **Build Plan §19 operational baseline (2026-09-19).** Its statement that the Markdown Quality Gate was the only required check is superseded by the 2026-10-04 branch-protection record (none required). | GOV | `NO PRODUCT EFFECT` |
| Δ-14 | **Audit and idempotency assumptions.** Repository precedents exist (`transaction_correction_events`, catalog idempotency keys, unknown-outcome reconciliation in catalog import). They are reuse evidence for `22-§14` and `22-§15`, not implementations of credit or payment audit. | REPO; FCTM-12 `PARTIAL` rows | `ENGINEERING ONLY` |
| Δ-15 | **New dependency code `DPAY`.** No approved payment-evidence source, adapter, credential or provider exists. BP §5.4 requires activation, credentials, failure, rollback and verification to be identified before any external activation. | REPO; BP §5.4 | `ENGINEERING ONLY` for the adapter; the minimum product set of sources is U-06 |

**Product-affecting Delta:** Δ-09 only. It triggers T4 and is carried as the escalated row `BP-§10.3-S2` (U-01).

## Part D — Unresolved questions and conflict register

### D.1 Register

"Critical path" means the product-definition critical path to a Stage 8 Blueprint lock. No item is decided here.

| ID | Item | Source evidence | Candidate trigger | Blocks product-definition critical path? | Decision or specialist fact needed | Dependent artifacts | Disposition authority | Status |
|---|---|---|---|---|---|---|---|---|
| U-01 | Shared customer identity ownership | BP §10.3 vs SB-P-1.12 EIS-ID-03 / FCTM-12 `22-§5-5` vs C14 §4; FCTM-14 `3-§15-7`; Δ-09; DC-15 (historical credit-method sales) | **T2**, T4; T7 only if a reassignment is proposed | **Yes.** 19 rows carry `ESC-U01`: 18 `IN SCOPE` plus the `DELEGATED` row `22-§5-5` (C14 §4, balances, `3-§9-12`, acceptance 1 and 3) | Founder: which mission establishes the customer identity record SB-P-1.16 links credit to, and whether historical credit-method sales are attributed | Blueprint §§8, 10, 12; EIS identity design; WS-A | Founder through Mission Control | **OPEN — `ESCALATED` row `BP-§10.3-S2`** |
| U-02 | "Partially matched" payment terminology | BP §10.5 E2 vs C15 §4 states; DC-03 | T2 / T6 | Yes for C15 §4 state model and Scenario B experience | Founder: meaning of "partially matched" | Blueprint §§8, 12; EIS state machine | Founder | OPEN |
| U-03 | Factual risk/ageing vs prohibited risk scoring | BP §10.5 Scenario A clause 2 vs C14 §3 b7, §19 b5, §21 b2; DC-01 | T6 | Yes for Scenario A experience | Founder confirmation of DC-01 | Blueprint §§10, 13; EVM seed | Founder | OPEN |
| U-04 | Overdue status when no due date exists | BP §10.5 Scenario A clause 1 vs C14 §5 b6; DC-02 | T1 / T6 | Yes for Scenario A | Founder: whether due dates are captured and how "overdue" is defined without one | Blueprint §§8, 10; credit data model | Founder | OPEN |
| U-05 | Customer credit-communication authority and channel | S11 Customer list (no credit item) vs C14 §14 p4, C21 §13 b2; SB-P-1.15 FDB-2 native-only; DC-10 | T2 screen; T6 for DC-10 | Partly: customer-facing collection rows only | Mission Control: confirm no S11 conflict; Founder: confirm DC-10 | Blueprint §§10, 12; notification design | Mission Control, then Founder for DC-10 | OPEN |
| U-06 | Minimum Phase 1 payment-evidence channels | C15 §5 "such as" list; C15 §28 completion gate requires authenticated ingestion; BP §5.4; DC-13 | T1 / T3 | **Yes** for C15 completion gate and 41 `DPAY` rows | Founder: which evidence sources Phase 1 must support; specialist: provider feasibility (read-only, when authorized) | Blueprint §§8, 20–21; EIS adapter; activation plan | Founder; payment/integration specialist | OPEN |
| U-07 | Manager delegation granularity | C14 §14 p2, C15 §17 p2; SB-P-1.15 DC-06 (proposed only), R15-11; DC-09 | T3 / T6 | Yes for Manager rows; no for Owner flows | Founder T3/T6 decision already pending from SB-P-1.15 | Blueprint §§9, 12; permission design | Founder; Security | OPEN |
| U-08 | Legal/privacy/retention critical path for payment evidence | C15 §6 p2; C25 §17; BP §15 item 6 (U-5); 14:FPDR-2; DC-11 | T3 for any evidence-lifecycle element a Blueprint lock depends on | **MC-112: conditionally noncritical** for Stage 2 documentary reconciliation and non-destructive payment-evidence workflow definition (Section D.5). Any Blueprint lock depending on retention, deletion eligibility, cancellation/non-payment treatment, backup/restoration or other evidence-lifecycle behaviour requires the applicable Founder/legal governance decision | Founder/legal governance decision on the evidence-lifecycle elements in Section D.5, before any Blueprint lock that depends on them | Blueprint §§8, 12, 20–21 evidence lifecycle; EIS retention and deletion; Stage 7 security and legal review | Founder; legal governance; Mission Control | **OPEN** |
| U-09 | Reversal / chargeback scope | C15 §4 b7, §13, §21 b10, §25 n12 ("where applicable", "where relevant") | T1 (depends on U-06) | No, once U-06 is decided | Which evidence sources carry reversals | EIS state machine | Founder via U-06 | OPEN — carried with existing scope context |
| U-10 | Third-party underwriting/lending ecosystem | BP §15 item 9; GPCV §9 `REJECT FOR CURRENT CORE`; C14 §21 b2 | None for this mission | No — rejected for current core and not needed | None for SB-P-1.16 | — | Founder (broader ecosystem only) | OPEN — not on critical path |

### D.2 Conflicts found

| Conflict | Sources | Treatment |
|---|---|---|
| Customer identity establishment (U-01, Δ-09) | Build Plan §10.3 (SB-P-1.17 / SB-P-1.18) vs SB-P-1.12 EIS-ID-03 / `22-§5-5` (SB-P-1.12) vs C14 §4 (SB-P-1.16) | `ESCALATED` row `BP-§10.3-S2`; dependent work stopped on the 19 rows marked `ESC-U01` (18 `IN SCOPE`, 1 `DELEGATED`); inherited assignment kept verbatim |
| "Partially matched" (U-02) | BP §10.5 E2 vs C15 §4 | Not marked `ESCALATED`: C15 §4 lists states "such as" and leaves enum names open, so the sources are not contradictory, but the term is undefined. Stage 3 candidate |
| Customer authority list (U-05) | S11 Customer list vs C14 §14, C21 §13 | No contradiction found: S11 does not prohibit it and the contracts are reconciled from S11. Mission Control to confirm |

No conflict was found between the Phase 1 guide, an OLE promotion and a governing source (Part E).

### D.3 Source 18 T1–T8 screen

| Trigger | Finding | Items |
|---|---|---|
| T1 unresolved product question no approved source answers | **Fires** | U-04, U-06, U-09 |
| T2 conflict among approved sources | **Fires** | U-01 (escalated); U-02 and U-05 screened |
| T3 new decision or approved-unresolved decision the mission needs | **Fires** | U-06, U-07; U-08 for any evidence-lifecycle element a Blueprint lock depends on (MC-112, Section D.5) |
| T4 `PRODUCT-AFFECTING` Delta | **Fires** | Δ-09 |
| T5 Founder request | Not observed | — |
| T6 derived constraint materially affecting behaviour | **Fires** | DC-01, DC-02, DC-03, DC-09, DC-10, DC-11, DC-15 |
| T7 omission, deferral, pull-forward, simplification or reclassification | **Not triggered** — no row moved, narrowed or reclassified. U-01 becomes T7 only if a reassignment is proposed | — |
| T8 Product Truth conflict or infeasibility at a later stage | Not triggered (no Blueprint, EIS or implementation exists yet) | — |

### D.4 Candidate Founder Decision Gate brief

**Founder Decision Gate: TRIGGERED.** A `NOT TRIGGERED` record is prohibited: the FCTM holds an `ESCALATED` row, and T1, T2, T3, T4 and T6 fire.

Questions for the Founder, through Mission Control (preparation only; Stage 3 is not authorized by MC-106):

1. **U-01 / DC-15.** Which mission establishes the customer identity record that customer credit links to: SB-P-1.12's participant identity, SB-P-1.16 for credit, or SB-P-1.17 / SB-P-1.18 as Build Plan §10.3 says? Are historical credit-method sales attributed to customers, and how?
2. **U-02 / DC-03.** What does "partially matched" mean: amount/reference variance, part-payment, or both?
3. **U-03 / DC-01.** Confirm that "risk" in Scenario A means factual balance, age and threshold context only.
4. **U-04 / DC-02.** Are due dates captured for credit? Without one, is the balance shown by age rather than as overdue?
5. **U-06.** Which payment-evidence sources must Phase 1 support for C15 to be complete?
6. **U-07 / DC-09.** Manager delegation granularity for credit and reconciliation (pending from SB-P-1.15).
7. **U-05 / DC-10.** Confirm no customer-facing credit message before an approved channel, and merchant approval for every message.
8. **U-08 / DC-11.** Mission Control has recorded U-08 as conditionally noncritical (MC-112, Section D.5). The Founder/legal governance decision is still needed for any evidence-lifecycle element a Blueprint lock depends on: retention duration, deletion eligibility, cancellation/non-payment treatment, backup/restoration.

Dependent work is stopped only on the rows these questions govern. Non-dependent documentary work (other C14/C15 rows, delegates, Build Plan rows) is complete in this pack.

### D.5 MC-112 determination for U-08

**MC-112 U-08 disposition: Conditionally noncritical for Stage 2 documentary reconciliation and non-destructive payment-evidence workflow definition. U-08 remains OPEN.**

This does not approve indefinite retention, a retention duration or destructive deletion. Any Blueprint lock depending on unresolved retention, deletion eligibility, cancellation/non-payment treatment, backup/restoration or other evidence-lifecycle behaviour requires the applicable Founder/legal governance decision.

No policy is set here and no approved requirement moves out of scope. Every row below keeps its disposition. The table identifies where the open decision bites.

| Row or item | What depends on the open U-08 decision |
|---|---|
| `15-§6-12` | Evidence follows current privacy/security/retention rules: the retention rule itself |
| `15-§6-8` | Raw evidence/reference kept for audit: how long, and what survives deletion |
| `15-§5-5` | Merchant-uploaded evidence via UDI storage: lifecycle of uploads, including 14:FPDR-2 bounded grace for unconfirmed uploads |
| `15-§10-1`, `15-§11-2`, `15-§20-2` | Preserving both facts, unlinked evidence and evidence during outages: preservation is in scope; its end-of-life is not decided |
| `15-§13-1`, `15-§13-2` | Reversal history preserved, prior verified state not erased: duration of that history |
| `15-§22-2`, `15-§22-5` | Protection of sensitive financial evidence; audit without unnecessary disclosure: minimization over time |
| `14-§17-1` | Credit/repayment corrections preserve prior truth: audit-trail lifetime |
| `5-§6-1`, `25-§17-1`, `25-§17-4`, `25-§17-5` | Original retention per approved policy; the unresolved duration; no destructive deletion on cancellation/non-payment; domain-specific legal retention |
| `BP-§15-6` | The approved-unresolved Founder decision itself (U-5) |
| DC-11 | Derived constraint (non-destructive retention until decided), still DERIVED — REQUIRES CONFIRMATION |

Evidence-lifecycle design elements a Blueprint lock may not settle without that decision: retention duration per evidence class; deletion eligibility and who may delete; treatment of evidence on cancellation or non-payment; backup, restoration and restored-copy deletion; export of evidence; grace period for unconfirmed uploads beyond 14:FPDR-2.

**Stage 3 trigger screening preserved.** T3 applies to these elements (Section D.3). The Founder decision dialogue has not been started.

The FCTM's existing wording (row `BP-§15-6` and Section F, "Mission Control confirmation requested") predates MC-112. This section records the Mission Control determination; the FCTM row and its disposition are unchanged.

## Part D-2 — Dependency, implementation and provider-hold register

| Code | Hold | `IN SCOPE` rows carrying it | State |
|---|---|---|---|
| `D14` | SB-P-1.14 Business Memory (four-state Ledger, repayment target, correction model, UDI, storage) | 154 | Specification locked; WITHHELD; not implemented (Δ-01) |
| `D12` | SB-P-1.12 authority kernel | 99 | Specification locked; WITHHELD; not implemented (Δ-03) |
| `DTX` | One governed transactions-family write path (PQ-2) | 50 | Cut-over undecided; migration NOT AUTHORIZED |
| `D15` | SB-P-1.15 Reminder, Scheduler, Notification, Ask CFO, Daily Intelligence | 46 | Specification locked; WITHHELD; not implemented |
| `D13` | SB-P-1.13 Conversation/AI kernel, Human Language, Basic Voice | 41 | Specification locked; WITHHELD; not implemented |
| `DPAY` | Payment-evidence source and adapter | 41 | None selected (U-06); activation NOT AUTHORIZED |
| `ESC-U01` | Escalated customer identity question | 18 | Awaiting Founder |
| `D18` | SB-P-1.18 orders/delivery/COD | 16 | Not started |
| `DAI` | AI provider | 13 | UNVERIFIED; NOT AUTHORIZED |
| `DNTF` | Out-of-app delivery channel | 7 | None before SB-P-1.20 |
| `DSCH` | Scheduler runtime | 6 | UNVERIFIED; NOT AUTHORIZED |
| `D20`, `DUF6`, `D19` | WhatsApp; U-5 retention; lifecycle | 2, 1, 1 | Not started / open |

50 `IN SCOPE` rows carry no dependency (principles, must-not checks and rules). Further holds: CI UNVERIFIED (Δ-05); provider recovery and test-project access (Δ-06); BP §5.1 `anon` grants (Δ-03); no builder, branch, environment or verifier appointed; production mutation, migration execution, delivery sync and provider activation NOT AUTHORIZED.

## Financial-integrity non-negotiables — preservation check

| MC-106 §9 non-negotiable | Where preserved |
|---|---|
| AI Assistant, Not AI Judge | `14-§3-1`, `14-§19-5`, `BP-§16-2`, `24-§21-4`, `24-§21-5` |
| Owner decision ownership for customer credit | `14-§9-*`, `14-§14-1`, `BP-§10.5-A3`, `BP-§10.5-E1` |
| No universal hard credit block or invented risk scoring | `14-§9-1`, `14-§21-1`, `14-§21-2`, `14-§21-5`, `14-§8-7`, `BP-§16-6`, `GPCV-§9-1`, `GPCV-§9-10`, DC-01 |
| No payment evidence treated as verified automatically | `15-§3-1`, `15-§5-8`, `15-§22-6`, `15-§24-6`, DC-12 |
| No duplicate sale, income, repayment or state on retries | `14-§7-5`, `15-§8-4`, `15-§12-*`, `15-§25-2`, `BP-§10.5-B3`, `BP-§10.5-E4`, DC-05 |
| One coordinated write boundary | `BP-§6.2-1`, `DTX` rows, DC-04 |
| Exact-action confirmation and revalidation | `15-§9-4`, `15-§9-5`, `15-§19-5`, `14-§16-*`, DC-06 |
| Customer and merchant identity isolation | `14-§22-10`, `15-§22-3`, `15-§25-11`, `14-§4-*` |
| Permission-scoped Manager and Employee access | `14-§14-*`, `15-§17-*`, `14-§12-6`, DC-09 |
| No unauthorized customer-facing credit communications | `14-§10-*`, `14-§14-4`, `14-§19-3`, DC-10 |
| No silent correction of financial history | `14-§17-*`, `15-§10-3`, `15-§13-2` |
| No claim that locked specifications are implemented | Δ-01, Δ-07; no `ALREADY DEMONSTRATED` row |
| No unsupported legal retention assumptions | `BP-§15-6`, `25-§17-1`, DC-11 |
| No unapproved bank/payment integrations, secrets or provider mutations | `DPAY` hold, `BP-§5.4-1`, DC-13 |

**STOP FOR MISSION CONTROL STAGE 2 REVIEW.**

**Founder decisions: NOT SELF-AUTHORIZED. Stage 3: NOT AUTHORIZED. Stage 4: NOT AUTHORIZED.**

**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
