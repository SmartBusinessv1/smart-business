# SB-P-1.17 — MC-478A Gate A Decisions, T8 Reconciliation and Bounded EIS Correction Authorization Preparation

**Status:** PROPOSED / DECISION-READY — NOT FOUNDER PRODUCT DECISIONS, NOT CORRECTION AUTHORIZATION  
**Mission:** SB-P-1.17 Manager Operations — Source 18 v1.2, Stage 10  
**Baseline:** `main@0fbf1bce0e6ccdd3b9d2b04e177ad61e2e8a33e6` (PR #1041 human-merged)  
**Source index:** `communication/missions/SB-P-1.17/mission-control/27-mc476a-stage10-consolidated-findings-eis-correction-plan.md`, blob `620ec820946857853686a4cba75824f061a9f785`  
**EIS draft:** `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md`, immutable blob `8280967f2805cfed17778da3fc76c90b2f2f5ead`  
**Blueprint:** `bc4615f84959a79e6b242f622aae928901fbe959`; **FCTM:** `cb79088d3fa59f8b3226fd9d11ff9c9573666670`  
**Authority:** MC-478 / MC-476A consolidation, Founder-approved Product Truth and Source 18 Stage 10.  
**No EIS editing, Product Truth amendment, Source 18 waiver, Stage 11 lock, implementation, SQL or migration authorization.**

## 1. Purpose and distinction

Translate the 16 accepted *consolidation clusters* (39 underlying specialist finding areas) into a small number of owned Gate A decisions. A specialist's suggested fix is not automatically accepted merely because the finding report is canonical. Gate A must distinguish: (a) an approved existing rule needing precise representation, (b) a genuinely undecided Founder product/authority choice, (c) a technical compatibility question for the governing source owner, and (d) evidence that can only be obtained during separately authorized source/runtime validation. No implementation should begin on a provisional rule.

## 2. Gate A decision docket (status OPEN until explicit disposition)

| Docket | Cluster/hold and principal EIS locus | Decision needed — no silent default | Owner / required consulted roles | Acceptance evidence / route |
|---|---|---|---|---|
| GA-01 | C07; `EIS17-SUP-06`; upstream `EIS16-LDG-02`, `EIS16-BAL-01`, `EIS14-LDG-02` | **Formal T8 documentary-conflict reconciliation:** remove unsupported claim that SB-P-1.16 customer balance specifies supplier `owed_by_business`. Confirm supplier-payable ownership and exact authorized balance/correction contract without silently adding upstream semantics | Mission Control cross-EIS adjudicator; SB-P-1.17 financial owner; SB-P-1.14 Ledger owner; SB-P-1.16 owner; Founder only if real Product Truth choice emerges | Written cross-contract interpretation listing exact clauses/SHAs, narrow resolution and T8 status. **Established documentary T8 pending disposition; no technical impossibility proved** |
| GA-02 | C01; MC410-R01 / HOLD-15; `POS-02`, `AUTH-05` | Identify source-verified POS intake-to-merchant-authorized commit route under four principals, including webhook actor, scoped grant, tenant binding, revocation at commit and executor identity; never invent a fifth principal or treat provider authentication/`service_role` as owner consent | Founder for any new product-authority decision; SB-P-1.12 identity/kernel + SA-01 security + SA-04 POS + MC | Alternative route analysis, exact Product Truth compatibility, abuse cases and decision record. T8 feasibility WATCH |
| GA-03 | C02; MC410-R02 / HOLD-16; `EIS17-TXN-09` | Decide whether/when a source-trusted but inventory-unmapped POS sale may affect governed revenue; financial trust is not positive authorization to post immediately; define exception/pending and subsequent reconciliation | Founder for posting policy; SB-P-1.14 Ledger + SA-03 financial + SA-04 POS + MC | Explicit allowed/disallowed posting states, effects, source ownership and approved Founder disposition. MC-411B permissive assumption NOT adopted |
| GA-04 | C03; EQ17-13 / HOLD-17; `TXN-03/04/10`, `MIG-01` | Verify one database-transaction Ledger/stock composition using existing locked interfaces and one Ledger authority, including ordering, retries, unknown outcome, rollbacks and privilege constraints. Two sequential RPC calls are insufficient | SB-P-1.14 Ledger + SB-P-1.12 Supabase/kernel + SA-05 + SA-03 + MC | Repository-grounded executable design/proof obligation; no provider/SQL execution under this package. T8 WATCH until contradiction established |
| GA-05 | C04; MC410-R04A / HOLD-18; `TXN-06` | Specify paired reversal/correction of Ledger and stock with idempotency, audit, negative stock and failed/partial outcome handling | SB-P-1.14 Ledger and SB-P-1.17 POS/stock owners; SA-03/05/04; MC | Exact command contract and targeted fault/duplicate tests; no unilateral POS reversal policy; T8 WATCH |
| GA-06 | C06; MC410-R04B / HOLD-19; `CC-03/06` | Define completeness/closing period, required source sets, source-specific cutoff, missing sources, late arrivals and authority to attest; no fabricated zero or unjustified COMPLETE | Founder if completeness choices affect merchant-facing promises; SB-P-1.15 timezone + SB-P-1.14 Ledger + closing/POS owner; MC | Period-bound completeness state machine and named negative scenarios; missing evidence stays HOLD |
| GA-07 | C08; `EIS17-SEC-02` | Reconcile command-only protected writes with `SECURITY INVOKER` default and revoked caller DML; define least-privilege narrow executor/definer contract, authority-at-commit and denial tests | SB-P-1.12 kernel/security + SA-05 + SA-01 + EIS editor; MC | Specified privilege plan and matrix; no broad direct DML restoration or privileged bypass |
| GA-08 | C09/C16; `AUTH-*`, EQ17-01/EQ17-02, Manager scope/Reference Cost | Specify enforceable scoped item/supplier/counter grants and protected projections for Manager capabilities without exposure of Owner financial intelligence, margin or Reference Cost; staff own attendance only with permission | SB-P-1.12 permissions + SA-01 + SB-P-1.17 EIS owner, finance/privacy inputs; Founder only on new capabilities | Positive and negative permission matrix, per-row projection and stale-grant tests; no default Owner-equivalent grants |
| GA-09 | C13/C14/C12; U-11, DPOS, `PRIV-*`, `CTR-*` | Retain neutral non-attributed Scenario B. Identify conditions requiring Founder T6/user-facing choice, India counsel validation, source/vendor provenance and qualified independent POS assurance before operator-identifiable or production path | Founder for affected merchant-visible policy; India qualified counsel + merchant + POS/source owner + MC | Named counsel questions, actual source dossier and test gates; **not prerequisites invented for purely neutral documentary EIS correction** |

## 3. T1–T8 formal screening — disposition not presumed

**Established documentary contradiction / T8 referral:** GA-01 alone has specific evidence of incompatible EIS references: SB-P-1.17 SUP-06 cites SB-P-1.16 balance for supplier `owed_by_business`; SB-P-1.16 BAL-01 is customer `owed_to_business`, while LDG-02 assigns supplier-side to SB-P-1.17. Record the formal conflict and route a scoped reconciliation under Source 18. Do not claim established architectural impossibility. **T8 is not closed by publishing this preparation.**

**T8 WATCH:** GA-02/04/05 and real-provider compatibility are unresolved feasibility, not evidence of impossibility. **T6 conditional:** GA-03/06/09 or any privacy/display change only if approved user-visible Product Truth changes. **T1/T3 conditional:** any novel Founder authority/policy choice; owner must pose narrow alternatives, with product effects and rejected defaults. Other triggers remain source-scope screened, not presumed.

## 4. Bounded correction candidates for later *separate* authorization

| Candidate batch | Clusters | Proposed type | Preconditions |
|---|---|---|---|
| B1 — normative technical representation | C05, C08, C10, C11, C15 | `TXN-08` duplicate dual-domain restoration; `SEC-02` narrow privilege execution; normative verification and migration/rollback matrices; idempotency and unknown outcomes | GA-04/05/07 resolved where their invariants are required; FCTM and source unchanged |
| B2 — access and privacy safeguards | C09, C13, C14, C16 | manager-grant/projection boundaries; neutral Scenario B indirect-identification controls; processing/retention ownership and negative tests | GA-08; privacy professional validation flagged, T6 screened when applicable |
| B3 — decision-dependent financial/POS contracts | C01/02/03/04/06/07 | POS intake, posting timing, atomicity, reversal, closing and supplier payable language | GA-01–06 corresponding formal decisions; **no editor-created default** |
| B4 — evidence gates, not implementation | C12 and unresolved proof portions of others | Name dossier/real-source/independent-professional/FRV-B exit requirements and runtime checks | No fictional provider evidence; production remains separately gated |

Scope contract for a future **EIS editing authorization**: pinned original EIS blob; individually listed EIS17 rows; exact proposed textual delta, finding IDs, Source 18/Blueprint/FCTM trace and SHA; explicit owner approval for changes that interpret locked interfaces; T1–T8 screen; new/refined negative tests; no edits to upstream locked EIS, FCTM, Blueprint, Product Truth, schema, migrations, deployment or provider configuration. Open a branch and draft PR only after Mission Control issues that authorization. Require finding-targeted independent re-review and Founder human EIS Lock decision in correct Stage 10/11 order.

## 5. Decision-record and correction-authorization next steps

1. **Mission Control:** after Founder merges this *preparation-only* PR, issue a Gate A adjudication record, beginning with GA-01. Record precise interpretation/ownership, professional validation limits, unresolved alternatives and who may decide each.
2. **Founder:** answer only genuine Product Truth questions GA-02/03 and any material GA-06/09 choices, after receiving concise options and implications; do not re-ask settled human dignity/permissions policy.
3. **Domain owners:** check interoperability with locked SB-P-1.12, SB-P-1.14, SB-P-1.16 without changing those artifacts. Provide bounded design alternatives where still uncertain; never claim actual runtime validation.
4. **Mission Control:** when decision evidence is canonical, issue a distinct scoped EIS correction authorization identifying permitted rows, EIS actor, branch/path, return report and re-review.
5. **Founder and independent reviewers:** merge, target-review and eventually lock according to Source 18. Do not advance Stage 11 or implementation because this document is merged.

## 6. Critical path, exclusions and stop

Optimize completion of Smart Business: use the five accepted specialist reports and 16 clusters, handle only real Gate A blockers, consolidate compatible corrections into a small number of reviewable EIS changes, and avoid new foundation/reporting systems. The acceleration paper is non-governing and cannot waive Source 18. No new mission, sixth generic specialist review, new POS provider connection, professional certification, SQL, migration, API, implementation or production work here.

**MC-478A requested Founder disposition:** accept Gate A docket and route formal decisions, **not** authorize the proposed technical fixes or EIS edits.

**STOP FOR MISSION CONTROL GATE A ADJUDICATION AND SEPARATE CORRECTION AUTHORIZATION.**
