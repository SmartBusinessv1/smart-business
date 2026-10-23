# SB-P-1.17 — MC-482A GA-01 Supplier-Payable Contract Clarification and Bounded EIS Correction Authorization

**Status:** PROPOSED CONDITIONAL AUTHORIZATION — effective only after Founder human merge, Mission Control verification, and the domain-owner contract clarification checkpoint below.  
**Mission:** SB-P-1.17 Manager Operations, Source 18 v1.2 Stage 10.  
**Main baseline:** `080a95546f726ee6b947168136eaa9f1ed507532` (PR #1043 merged).  
**GA-01 adjudication:** `communication/missions/SB-P-1.17/mission-control/29-mc480a-ga01-supplier-balance-t8-adjudication.md`, blob `6d3b1731b6c889f5ae271dff935e0a51ec1bcdd9`.  
**Target immutable EIS draft:** `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md`, blob `8280967f2805cfed17778da3fc76c90b2f2f5ead`.  
**Blueprint/FCTM:** unchanged, locked blobs `bc4615f84959a79e6b242f622aae928901fbe959` / `cb79088d3fa59f8b3226fd9d11ff9c9573666670`.  
**Explicit limit:** this document is an authorization *proposal and execution boundary*, NOT an immediate license for anyone to edit the EIS. No SQL, runtime implementation or lock.

## 1. Source-grounded confirmed contract boundary

| Contract | Pin | Verified meaning |
|---|---|---|
| SB-P-1.14 `EIS14-LDG-02` | `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3` | Governed credit rows have a required direction `owed_to_business` or `owed_by_business`; amount positive; direction not deduced from sign |
| SB-P-1.16 `EIS16-LDG-02` | `46fffd7b140940854c9b2b847517dde2f17584df` | Supplier-side `owed_by_business` belongs to SB-P-1.17, customer credit `owed_to_business` to SB-P-1.16 |
| SB-P-1.16 `EIS16-BAL-01` | same pin | Hardened *customer* balance over its attributed targets and repayments, NOT a supplier payable algorithm |
| SB-P-1.17 `EIS17-SUP-06` | `8280967f2805cfed17778da3fc76c90b2f2f5ead` | Erroneously cites “the SB-P-1.16 balance contract” for supplier payable; retains FIN-01 PROVISIONAL and receipt ≠ payment |

**GA-01 judgment:** SB-P-1.17 is the supplier-payable domain owner; SB-P-1.14 owns Ledger direction/authority; SB-P-1.16 is *not* a supplier-balance provider. Documentary T8 contradiction established but not yet corrected or closed; technical impossibility not established.

## 2. Required clarification checkpoint before any EIS write

**Accountable:** SB-P-1.17 financial/EIS owner. **Required consult:** SB-P-1.14 Ledger domain owner, SB-P-1.16 customer balance domain owner. **Adjudicator:** Mission Control. **Founder only** for genuinely new Product Truth choice.

Produce a concise, cited **GA-01 Supplier-Payable Contract Clarification Record** addressing:

1. **Authorized supplier events:** Which existing approved operations create, increase, reduce, settle, reverse or correct supplier `owed_by_business` positions? Distinguish supplier credit/payment from mere goods receipt; exclude operations not authorized by current Product Truth.
2. **Definition and provenance:** Exact supplier payable balance/settlement rule *if already grounded in locked contracts*; identify source clauses. If no rule is fully specified, label **UNRESOLVED**, offer narrowly scoped candidate alternatives, and do **not** claim the customer `EIS16-BAL-01` formula applies by analogy.
3. **Ledger authority and safe execution:** Identify legitimate writer, explicit direction, authorization at commit, idempotency, adjustments, reversal and unknown-outcome semantics that can be described without new Ledger principal, schema or source-contract change.
4. **Negative cases:** Unpaid receipt cannot count as payment; no cross-supplier/tenant balance; no duplicate settlement; no customer `owed_to_business` leakage into supplier balance; no silent paid status; no employee access to owner finance by default; failed/reversed events preserve audit trace.
5. **Dependencies and trigger review:** Declare any unsatisfied upstream Ledger, financial, migration/security, permission or merchant-visible choice; screen Source 18 T1–T8, recording the documentary T8 and feasibility separately.
6. **Evidence:** SHA/section reference to source and a final status: **CLARIFIED FROM EXISTING APPROVAL**, **FOUNDER DECISION REQUIRED**, or **UPSTREAM CONTRACT/TECHNICAL VERIFICATION REQUIRED**.

**Fail closed:** Until this record is returned, checked and expressly accepted by Mission Control, no editor may insert newly inferred supplier payable formulas, posting rules, commands or “complete” state. If unresolved semantics prevent a correct EIS, retain HOLD/FIN-01 and defer final EIS lock.

## 3. Narrow correction scope and conditionally permitted wording

**Permitted target in a separately activated correction task:** ONLY the requirement text cell for `EIS17-SUP-06` in `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md`; a corresponding traceability row may change *only* if its current direct reference becomes inaccurate and MC explicitly approves the exact edit. No other files/rows without new written authorization.

**Current cell (source text, exact relevant sentence):**
> Supplier-side `owed_by_business` credit and payment state use the SB-P-1.14 direction model (`EIS14-LDG-02`) and the SB-P-1.16 balance contract, FIN-01 PROVISIONAL.

**Safe minimal correction candidate (NOT YET APPROVED for application):**
> Supplier-side `owed_by_business` credit and payment state use the SB-P-1.14 Ledger direction model (`EIS14-LDG-02`). Supplier-payable balance and governed payment/correction behavior belong to SB-P-1.17, subject to a documented, approved supplier-specific contract consistent with SB-P-1.14; SB-P-1.16 `EIS16-BAL-01` is customer-side only and does not specify supplier payable. FIN-01 PROVISIONAL.

Preserve `EIS17-SUP-06` heading **“Supplier payment and credit only where authorized”**, goods receipt never records payment (`7-§8-5`), upstream Ledger single-writer rule, merchant and staff authorization, existing holds and explicit FIN-01 provisional status until independently resolved. An explicit open contract is not EIS Lock ready; this wording alone is not a completed design.

**No permission** to alter SB-P-1.14/1.16 EIS, any locked Blueprint/FCTM, source requirements, other SB-P-1.17 requirements, schema, migration, RPC, POS integration, financial posting policy or release stage. No automatic acceptance of a customer-rule mirror or new supplier payment method.

## 4. Conditional execution workflow (two distinct gates)

**Gate 1 — clarification evidence:** After human merge and MC verification of this package, Mission Control activates a *read-only* financial/contract clarification task using the immutable sources. Return a documentary record (not an EIS diff). MC must inspect exact citations and approve the result or escalate a truly unresolved Product Truth choice to Founder.

**Gate 2 — separate row-edit instruction:** Only if Gate 1 is accepted and Mission Control explicitly issues a bounded execution instruction with source baseline SHA, exact approved replacement text, contributor, 1-file or explicitly approved two-file path list, branch and PR workflow, may an EIS editor amend `EIS17-SUP-06`. Open DRAFT PR, preserve immutable baseline evidence, require Founder human merge and targeted independent SA-03/SA-05 review (SA-01 if auth boundary is materially altered). No self-merge. **This MC-482A PR is not that execution instruction.**

If Gate 1 cannot ground exact supplier semantics, Mission Control must publish the unresolved question and hold it; a purely cosmetic correction may be separately authorized but must not be mistaken for resolving payable design.

## 5. Targeted acceptance tests and T8 closure conditions

A future corrected EIS must:
- point to the SB-P-1.14 explicit `owed_by_business` credit direction without attributing a supplier balance to SB-P-1.16;
- specify or explicitly hold the supplier payable and payment/correction rules rather than inventing a formula;
- preserve no automatic receipt-as-payment, financial confidentiality, tenant isolation, atomic and reversible Ledger truth and audit attribution;
- trace each new norm to approved source obligations; set positive/negative verification cases and external validation gaps;
- receive independent finding-scoped review; receive explicit MC disposition of GA-01/T8 documentary contradiction based on the actual corrected EIS SHA.

**Not enough:** merely merging this prep PR, swapping a phrase, or passing Markdown CI. Proof of engineering feasibility and all other GA-02–GA-09 holds remains separate.

## 6. Fast path and exclusions

Re-use MC-480A and the five accepted specialist reports; ask a **single** scoped domain clarification rather than reopening the whole financial architecture. The documentary ownership contradiction is narrow and should not trigger needless redesign. Do not conflate faster delivery with skipping human Founder authority, security review, qualified professional evidence or Source 18 stages.

**Request to Founder:** approve this *conditional, non-executing* two-gate plan by merge.  
**Stop:** After merge, return to Mission Control for read-only clarification activation; no EIS editor may proceed directly.

**STOP FOR FOUNDER MERGE / MISSION CONTROL ACTIVATION OF GATE 1.**
