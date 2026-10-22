# **MC-410A — Consolidated Specialist Findings Reconciliation**

Independent Engineering Review Room 2 Mission: SB-P-1.17 — Manager Operations Baseline: `main@739c5fb3ebbdc312da4ef2ce70d7de2f11006003` Mode: READ-ONLY — SOURCE-CONTRACT RECONCILIATION

TWO BOUNDED DOCUMENTARY CORRECTIONS

## **Executive disposition**

The five specialist reports have been reconciled against the locked SB-P-1.12 and SB-P-1.14 EIS contracts, source Contracts 7 and 13, and the canonical SB-P-1.17 Blueprint.

Two Stage 7 wording issues merit correction before Blueprint Lock: the unsupported POS integration-principal assertion and the mandatory-purchase-expense wording. A third matter—trusted but inventory-unmapped POS revenue—requires an authoritative interpretation of existing source obligations before its EIS treatment can be approved.

The remaining financial completeness and transaction-composition questions can be carried into the EIS under their existing explicit safeguards, without treating those capabilities as implemented.

| Finding | Reconciliation result | Classification |
| ----- | ----- | ----- |
| R-01 — SA-01-F02, POS intake authority | CONFIRMED CONTRADICTION | Stage 7 documentary correction required |
| R-02 — SA03-FI-06, unmapped POS revenue | SOURCE DOES NOT FULLY RESOLVE POSTING RULE | Existing approved source-contract clarification needed |
| R-03 — SA03-FI-07, purchase classification | CONFIRMED OVERSTATEMENT | Stage 7 documentary correction required |
| R-04 — SA03-FI-04 and FI-08 | EIS-RESOLVABLE, with explicit acceptance constraint | EIS engineering dependency |
| R-05 — EQ17-13 / INV-A2 shared dependencies | AGREEMENT ON HARD INVARIANT | EIS engineering dependency; conditional escalation |

The individual specialist findings remain intact as submitted in `SB-P-1.17_Consolidated_Specialist_Assurance_Reports.md`. This reconciliation does not approve their proposed EIS provisions.

SB-P-1.17\_Consolidated\_Specialist\_Assurance\_Reports.md

## **R-01 — SA-01-F02: POS intake authority**

Severity: HIGH · Stage 7 correction required

Authoritative sources: SB-P-1.12 locked EIS `EIS-KER-02`, `EIS-KER-06`, `EIS-ID-05`, `EIS-ISO-04`; SB-P-1.17 §§20.4.6, 20.5.

The upstream specifications distinguish four principal categories from an integration channel and an external provider reference. In particular, `EIS-KER-02` authorizes only the existing verified-principal classes, while `EIS-KER-06` enumerates `integration` as a channel; `EIS-ID-05` establishes business-scoped references rather than an authorization principal.

The SB-P-1.17 wording in §20.4.6 states that the API/webhook adapter runs under an “integration principal on `EIS-KER-02`,” repeated in §20.5. That is not supported by the approved principal model. The Security specialist correctly identified this distinction.

SB-P-1.17\_Consolidated\_Specialist\_Assurance\_Reports.md

Finding: The locked architecture does not currently support an independently defined fifth integration-principal class. At the same time, it does provide governed channels, provider references and privileged-operation mechanisms; these are not interchangeable with proof that a POS event possesses merchant authorization.

The minimum safe correction is to remove the assertion that `EIS-KER-02` already defines an integration principal. Replace it with an explicit dependency on verified source authentication plus an approved, kernel-authorized principal binding, with the binding model left unresolved until reconciled with the SB-P-1.12 owner.

This does not select an existing principal for the POS or propose a fifth one.

Disposition: Stage 7 documentary correction required in §§20.4.6 and 20.5. The security owner must determine whether an existing mechanism can lawfully and technically bind POS intake; any change to the locked principal model requires its own governed upstream amendment. No new Founder decision is established by the present evidence.

## **R-02 — SA03-FI-06: Unmapped POS revenue**

Severity: HIGH · Source-contract clarification needed

Authoritative sources: Contract 13 §§4–7; SB-P-1.14 `EIS14-CMD-01`, `EIS14-LDG-01` and `EIS14-TOT-01`; SB-P-1.17 INV-A8.

Contract 13 §6 requires POS events to retain their source identity and prevents duplicate revenue. Section 7 permits stock movement where mapping, quantity, trust and configured stock behavior support it. These are stock-movement eligibility conditions.

INV-A8 currently says that both unmapped and untrusted events create neither movement nor revenue until resolution.

The Finance specialist challenges that coupling: a financially trustworthy sale might lack a mapped inventory product. The POS specialist, meanwhile, emphasizes holding untrusted or unresolved events to protect economic truth. Both concerns are valid, but they address different forms of uncertainty.

SB-P-1.17\_Consolidated\_Specialist\_Assurance\_Reports.md

| Case | Source-supported boundary |
| ----- | ----- |
| Untrusted source identity, transaction or financial content | Do not invent or commit financial/stock truth |
| Trusted source, complete financial facts, unresolved inventory product identity | Stock movement remains held; Ledger posting decision is not fully fixed by the cited sources |
| Trusted source with valid product mapping and eligible event | Governed financial/stock effects, with INV-A2 applying when both are required |
| Possible manual/POS overlap | Preserve evidence; no silent duplicate revenue or automatic merger |

Finding: The approved sources demonstrate that stock eligibility and financial trust are conceptually distinct, but they do not provide an unambiguous permission to post trusted-but-unmapped sales immediately, nor an unambiguous requirement to hold that revenue until stock mapping completes.

Therefore neither specialist's preferred posting rule can be adopted by this review.

Disposition: Request a bounded authoritative interpretation from the Contract 13 and SB-P-1.14 Ledger owners of what constitutes financially trusted, inventory-unmapped POS evidence and which governed outcome is permissible. The answer must preserve one Ledger authority, idempotency and no double counting.

Until that interpretation is approved, leave the affected posting behavior HELD. Do not implement either option as an inferred default.

## **R-03 — SA03-FI-07: Purchase classification**

Severity: HIGH · Stage 7 correction required

Authoritative sources: Contract 7 §8; SB-P-1.14 `EIS14-LDG-01`, `EIS14-CMD-01`; SB-P-1.17 §§8.1, 20.9.1 INV-A9.

Contract 7 §8 says a confirmed purchase may create or associate an inventory movement and a Ledger expense. It separately requires supplier payment state to remain distinct from goods receipt.

The locked SB-P-1.14 EIS differentiates `purchase` and `expense` as separate Ledger classifications, rather than treating them as synonyms.

INV-A9 changes the qualified source behavior into a mandatory statement that a confirmed purchase writes a movement and a Ledger expense in one command.

This is stronger than Contract 7 §8 and may obscure the SB-P-1.14 classification distinction. The Finance specialist's concern is therefore substantiated.

SB-P-1.17\_Consolidated\_Specialist\_Assurance\_Reports.md

Minimum documentary correction:

> Where a confirmed business event legitimately requires both a stock-receipt movement and a Ledger financial event, the approved effects must commit atomically through their governed domain commands. The Ledger classification is determined by SB-P-1.14. Goods receipt does not establish supplier payment, and no duplicate purchase, expense or settlement fact may be created.

This preserves INV-A2 and the Contract 7 §8 obligation without deciding how particular supplier-payment variants should be classified.

Disposition: Correct the mandatory wording of INV-A9. Do not alter the underlying source contract or invent a new accounting state.

## **R-04 — Financial integrity completeness**

### **SA03-FI-04 — Dual-domain reversal**

Authoritative sources: Contract 13 §§6–7 and §17; Contract 7 §8; SB-P-1.17 INV-A2 and INV-A5.

INV-A5 preserves append-only corrections and the distinction between a pure stock correction and a financial event. INV-A2 requires all related effects of a command to commit together or not at all.

The specialist correctly observes that a void or reversal of a previously posted POS sale may need governed effects in both Ledger and inventory. Those effects cannot be satisfied by marking only the source event reversed.

SB-P-1.17\_Consolidated\_Specialist\_Assurance\_Reports.md

Finding: This is consistent with existing invariants. The missing detail is the exact governed reversal-command composition and its handling of cases where both domain effects are applicable.

Classification: EIS engineering dependency, not a new Stage 7 contradiction. EIS must specify the applicable compensating effects, their linkage and atomicity. If the locked upstream command cannot express a required financial reversal, return that precise incompatibility to its owner rather than improvising a second write path.

### **SA03-FI-08 — Closing completeness**

Authoritative sources: Contract 13 §10 and §§16–17; SB-P-1.17 §20.9.2, particularly decision-table rows 3–7.

The Blueprint already requires all configured input sources to be complete before reporting `COMPLETE`. It does not require the system to treat mere receipt of one record as proof that the period is complete.

The Finance specialist's additional observation is technically important: completeness must have affirmative evidence, such as an applicable source completeness marker, synchronized-period evidence or authorized manual attestation.

SB-P-1.17\_Consolidated\_Specialist\_Assurance\_Reports.md

Finding: There is no need to change the already-approved COMPLETE/PARTIAL/REVIEW-REQUIRED/UNKNOWN state model. The remaining work is to define how completeness is evidenced for each kind of source, without fabricating missing records or treating an unverified interval as complete.

Classification: EIS engineering dependency. The EIS must define positive completeness evidence and truthful partial-variance presentation. It must preserve U-03, timezone/shift dependencies and the existing severity precedence.

A narrow cross-reference or clarification could be added during an otherwise authorized documentary correction, but it is not independently a pre-Lock blocker.

## **R-05 — Shared financial and POS dependencies**

Authoritative sources: SB-P-1.17 §20.9.1, INV-A1–A9, EQ17-13; SB-P-1.14 `EIS14-CMD-01`, `EIS14-CMD-03`; SB-P-1.12 authorization and idempotency contracts.

The SA-01, SA-03, SA-04 and SA-05 reports agree on the fundamental integrity rule:

Where one business command requires both financial and stock effects, independently successful API calls are not a substitute for one atomic commit.

Their proposed refinements emphasize different parts of the same invariant:

| Concern | Reconciled responsibility |
| ----- | ----- |
| Source-event identity and retries | Stable source-scoped identity, command idempotency and unknown-outcome lookup |
| Financial classification and write authority | SB-P-1.14 governed Ledger command exclusively |
| Inventory movements and event linking | Existing inventory command plus SB-P-1.17 domain validation |
| Cross-domain transaction | Atomic all-or-nothing composition under INV-A2 |
| Reversals | Append-only linked events; governed compensating effects where appropriate |
| Manual/POS overlap | Human review; no automatic merge, suppression or inferred identity |
| Privileged POS intake | Existing authorization model must be reconciled before use |
| Execution readiness | D12/D14/DTX/DPOS/DSEC and relevant upstream dependencies remain held |

The Finance specialist describes atomic composition as a hard EIS prerequisite, and the Migration specialist identifies M17-9 as activation-blocked until EQ17-13 is resolved. Those positions agree rather than conflict.

SB-P-1.17\_Consolidated\_Specialist\_Assurance\_Reports.md  
SB-P-1.17\_Consolidated\_Specialist\_Assurance\_Reports.md

Classification: EIS engineering dependency. The EIS must establish a viable physical composition while preserving existing owners. If that proves impossible under locked interfaces, return a concrete incompatibility to Mission Control for upstream-contract and T8 screening. No present evidence proves impossibility.

## **Consolidated exception register**

| ID | Exact unresolved matter | Required owner | Next disposition |
| ----- | ----- | ----- | ----- |
| MC410-R01 | Unsupported “integration principal on EIS-KER-02” assertion | SB-P-1.17 Engineering Actor; SB-P-1.12 Security/Authority owner | Stage 7 wording correction; approved binding-path reconciliation |
| MC410-R02 | Financially trusted but inventory-unmapped POS event posting semantics | Contract 13 / SB-P-1.14 Ledger authority via Mission Control | Source-contract interpretation before EIS rule selection |
| MC410-R03 | INV-A9 overstates mandatory expense creation and obscures purchase classification | SB-P-1.17 Engineering Actor; SB-P-1.14 Ledger owner | Stage 7 wording correction |
| MC410-R04A | Atomic governed reversals for dual-domain events | SB-P-1.14 and SB-P-1.17 engineering owners | EIS |
| MC410-R04B | Affirmative evidence of complete closing-period inputs | SB-P-1.17; DPOS/DSCH/Ledger source owners | EIS |
| MC410-R05 | EQ17-13 physical transaction composition | SB-P-1.14, SB-P-1.17 and Supabase architecture | EIS hard hold; escalate only on demonstrated incompatibility |

The original specialist reports also retain their unresolved concerns about qualified review, source availability, security testing, POS event provenance, migrations and operator privacy. The table above consolidates only the requested cross-report conflicts, not every specialist finding.

## **T1–T8 and protected assurance boundaries**

| Boundary | Disposition |
| ----- | ----- |
| Founder-approved Product Truth | No amendment recommended |
| T1/T2/T3 | No new Founder-level conflict established; R-02 needs authoritative source interpretation first |
| T6 | Existing threshold evidence-sufficiency watch unchanged |
| T8 | No demonstrated infeasibility; EQ17-13 and POS source availability remain conditional escalation points |
| U-11 professional Indian legal/privacy validation | OPEN |
| Independent SA-04 reviewer qualification | OPEN |
| D12 / D14 / DTX / DPOS / DSEC / DSCH | Open as applicable |
| Existing FCTM and locked upstream EIS | Unchanged |
| Stage 8 approval, EIS creation, migrations and implementation | NOT AUTHORIZED |

## **Smallest safe next action**

Mission Control should authorize one narrowly scoped Stage 7 documentary correction package covering only MC410-R01 and MC410-R03, with appropriate upstream-owner consultation. In parallel, obtain a bounded Contract 13/SB-P-1.14 interpretation of MC410-R02 without selecting a new revenue-posting rule prematurely.

Carry MC410-R04A, R04B and R05 into EIS dependency accounting, subject to the approved authority and future Stage 8 decision. Do not turn the five specialist reports' recommendations into automatically approved new EIS controls.

Final recommendation: BOUNDED REFINEMENT REQUIRED. This is not a general Stage 7 reopening, not a rejection of the POS bridge, and not a new Founder decision.

No repository edits, branches, PRs, FCTM changes, provider actions, migrations or implementation were performed.

STOP FOR MISSION CONTROL DISPOSITION.

