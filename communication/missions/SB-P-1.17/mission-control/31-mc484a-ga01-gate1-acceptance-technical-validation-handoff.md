# SB-P-1.17 — MC-484A GA-01 Gate 1 Acceptance and Supplier-Specific Technical Validation Handoff

**Status:** PROPOSED — effective only after Founder human merge and Mission Control post-merge verification.  
**Mission:** SB-P-1.17 Manager Operations, Stage 10 / GA-01.  
**Baseline:** `main@cb29b8b860312f527b76874c1f75002c1a16274b` (PR #1044 merged).  
**Authority:** MC-484 Gate 1 read-only clarification; MC-482A conditional two-gate plan.  
**Decision:** Accept source-bounded *documentary clarification*, not the supplier payment/aggregate execution contract. Do not activate EIS Gate 2 or close documentary T8.

## 1. Submitted Gate 1 clarification — evidence identity and provenance

The financial review room supplied the user-attached **“SB-P-1.17 — GA-01 Supplier-Payable Contract Clarification Record”**, dated to canonical baseline `main@cb29b8b860312f527b76874c1f75002c1a16274b` and immutable SB-P-1.17 EIS blob `8280967f2805cfed17778da3fc76c90b2f2f5ead`. The submitted record was delivered as an attached read-only clarification to Mission Control, **not yet itself a canonical repository report**. Its 20 sections distinguish existing contract, upstream technical validation and conditional Founder decision. Its wording and supporting quotes are carried forward here as a summary only; the submission is not retrospectively represented as independently vetted technical evidence.

**Evidence-anchored assertions accepted:** Supplier obligations are business- and supplier-scoped Ledger `credit` rows with explicit `owed_by_business` direction and positive amount where authorized; repayment is an existing generic settlement state; partial/multiple repayments and governed correction/idempotency are established generic primitives; supplier receipt does not equal payment; supplier-specific remaining-payable formula, payment state, reversals and permission realization are not fully determined. Customer `EIS16-BAL-01` cannot be transplanted as a supplier formula. A suggested target-first balance or supplier-event projection is **an unapproved engineering candidate**, not a norm.

## 2. Verified immutable source SHAs and precise interpretations

| Source | Git blob | Scope established; explicit exclusion |
|---|---|---|
| Contract 7 — Stock, Supplier & Reorder Intelligence | `65ad91b202def9cb4f42b97383bcc58475f59015` *(source SHA reported in Gate 1 submission; verify against repo before implementation)* | §3 authorized supplier payment/credit relationship; §8 receipt state distinct from supplier payment; no supplier balance formula |
| Contract 3 — Ledger and Business Memory | `d8c26c073b669b561def887e36d16b19ff759205` *(reported in submission; verify before implementation)* | §4 credit amount owed to/by party and repayment settlement; §8 original/corrected fact audit; §11 permission boundaries |
| SB-P-1.14 Ledger EIS | `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3` *(verified main)* | `EIS14-LDG-02` explicit direction; `EIS14-LDG-03` repayment targets/partial rows but expressly **no** remaining balance, overpayment, allocation or reconciliation rule; `EIS14-CMD-01/02/03`, `EIS14-IDM-01/03` guarded writer/commands/idempotency |
| SB-P-1.16 Financial EIS | `46fffd7b140940854c9b2b847517dde2f17584df` *(verified main)* | `EIS16-LDG-02` supplier `owed_by_business` is SB-P-1.17 responsibility; `EIS16-BAL-01` is **customer** `owed_to_business` balance |
| SB-P-1.17 EIS (immutable DRAFT) | `8280967f2805cfed17778da3fc76c90b2f2f5ead` *(verified main)* | `EIS17-SUP-06` incorrectly references SB-P-1.16 balance; FIN-01 PROVISIONAL and goods receipt ≠ payment preserved |
| SB-P-1.17 locked Blueprint | `bc4615f84959a79e6b242f622aae928901fbe959` | Supplier `owed_by_business` and Ledger/stock constraints; contains same provisional balance-contract attribution tension |
| SB-P-1.17 locked FCTM | `cb79088d3fa59f8b3226fd9d11ff9c9573666670` | Traceability baseline; not amended |
| MC-480A adjudication | `6d3b1731b6c889f5ae271dff935e0a51ec1bcdd9` *(verified main)* | Documentary T8 source reference conflict established, correction not yet applied |
| MC-482A conditional clarification and correction gates | `7b9d23622dc772dc6899a0512d5352f870ba070a` *(verified main)* | Gate 1 prior to a distinct, explicit EIS row-edit authorization |

This is a review of documented sources and the Gate 1 submission; **no SQL, actual command behavior, settlement reader or runtime isolation is validated**.

## 3. Gate 1 disposition and classifications

| Conclusion | Classification | Disposition |
|---|---|---|
| Explicit supplier-scoped Ledger `credit/owed_by_business` | Existing approved contract | Accept representation boundary |
| Governed Ledger mutation/correction, audit, idempotency and unknown-outcome lookup | Existing approved primitive | Preserve single writer; actual integration not evidenced |
| Single-target generic repayment and partial/multiple rows | Existing approved primitive | Supplier use must pass technical validation |
| Supplier receipt and invoice evidence never silently settle/pay | Approved negative boundary | Preserve |
| No cross-supplier/business or customer advance netting; no Owner finance access for staff by default | Approved isolation and permission boundary | Preserve |
| Supplier remaining payable algorithm, reversals/voids, overpayment and allocation | Unresolved technical and/or product specifics | **HOLD**; do not borrow customer formula |
| Automatic payable creation, supplier prepayment, automatic allocation, credit notes/returns or negative supplier wallet | Conditional new merchant-visible behavior | Founder decision **only if proposed for present scope**, not automatically required to correct the bad reference |
| GA-01 documentary cross-EIS T8 | Established source attribution contradiction | **OPEN** until EIS correction plus independent review; technical impossibility not established |

**Gate 1 accepted for documentary scope**, subject to any later source-identity correction. **Gate 2 not activated**.

## 4. Narrow technical validation handoff — no implementation

**Accountable domain:** SB-P-1.17 supplier-payable financial owner. **Consult:** SB-P-1.14 Ledger technical owner; SB-P-1.16 customer-balance owner for boundary confirmation; SB-P-1.12 security for protected executor/grants when implicated; SA-03 and SA-05 for later targeted review. Mission Control adjudicates; Founder handles new Product Truth decisions.

Provide exactly:
1. Supplier `owed_by_business` credit target and repayment eligibility/party binding: source clause and commit-time guard; correct supplier and same business, no custom second Ledger.
2. Normative **supplier-owned payable reader or proof of missing contract**: proposed active/void/corrected targets, repayments, disputed/late entries, correction effects, date/period bounds, nonnegative rule and overpayment behavior. Separate already approved clauses from newly proposed design; no assumed `EIS16-BAL-01` reuse.
3. Reversal/void and failed settlement contract: no silent deletion, re-post, duplicate settle or non-atomic adjustment. If the locked Ledger interface cannot safely support necessary behavior, flag Source 18 T8 WATCH and route exact contradiction.
4. Permissions and idempotency: owner and specifically delegated Manager capabilities, financial projection confidentiality, commit-time revocation, source identity, same-intent dedupe and unknown-outcome resolution.
5. Eight named negative examples at minimum: receipt is not payment; wrong supplier/tenant; customer advance leakage; duplicate retry; overpayment/negative payable; reversed settlement not silently counted; staff finance exposure; unauthorized Manager payment. Include cross-domain atomic Ledger/stock effects if supplier operation includes stock.
6. An owner-signed documentary **compatibility matrix** mapping each case to `EIS14-*`, approved Blueprint/FCTM and affected `EIS17-SUP-06` text; explicitly identify need for Founder choice or upstream contract change.

**Read-only investigation and design options only.** No technical validation at runtime without later permission, and no claim a proposed reader is an approved deployed implementation.

## 5. Separate correction of the erroneous cross-reference

**Mission Control determination:** The misattribution in `EIS17-SUP-06` is a narrow documentary mistake and may be addressed independently of fully closing supplier-payable semantics, **but only by a future separate exact-text EIS execution authorization** and with FIN-01/technical holds visibly retained. It must not imply Gate 1 proves the formula, settlement or reversal.

Safe candidate replacement limited to its defective sentence:

> Supplier-side `owed_by_business` credit and payment state use the SB-P-1.14 direction model (`EIS14-LDG-02`). Supplier-payable balance and settlement/correction rules remain SB-P-1.17-owned and PROVISIONAL pending supplier-specific contract validation; SB-P-1.16 `EIS16-BAL-01` defines customer balance only.

Keep “Supplier payment and credit only where authorized”, goods receipt never records payment (`7-§8-5`), FIN-01 PROVISIONAL, current hold markers and other unaffected row fields. This text is a **non-executable candidate**, not an approved EIS amendment. Before EIS lock, the technical design must actually satisfy all required supplier semantics; phrasing alone does not close the review.

**Execution safety:** Do not edit SB-P-1.17 EIS now. A later Gate 2 instruction must pin its SHA, precise allowed row/file, verbatim approved replacement, branch, draft PR, source impact screen, independent re-review, Founder human merge, MC post-merge inspection and explicit T8 status; cannot silently modify the locked Blueprint despite its provisional cross-reference.

## 6. Source 18 triggers and retained holds

- **T8 documentary:** established and **OPEN** until corrected EIS/source consistency is assessed. It is an attribution contradiction, not demonstrated technical infeasibility.
- **T8 technical WATCH:** supplier payment compatibility/void, balance reader and related atomicity where actual interface evidence is missing.
- **T1/T3/T6 conditional:** if proposals introduce merchant-visible posting, auto-allocation, supplier advance, returns or staff financial access changes. Nothing here approves these choices.
- **T2 Blueprint tension:** existing provisional wording must be reconciled through Source 18 governance, never silently edited in a read-only or row-only package.
- **GA-02–GA-09** remain open: POS principal/MC410-R01, revenue timing/MC410-R02, atomicity/EQ17-13, reversal/R04A, closing/R04B, write-privilege SEC-02, Manager scopes, U-11/legal and real-source assurance. All existing related HOLD-15–21 and external qualified validation persist.

## 7. Sequencing and exact stop

1. Founder merges this documentary Gate 1 acceptance/handoff PR after CI; MC verifies `main`.
2. MC issues an exact read-only technical compatibility task, *or* a distinct strictly cosmetic reference-correction authorization with explicit preserved technical hold; do not confuse these tasks.
3. Any domain-owner compatibility review must return with source SHAs and uncertain points. A required new Product Truth behavior goes to Founder before normative adoption.
4. Only a separately gated EIS row edit and targeted SA-03/SA-05 re-review can substantiate documentary T8 closure. No EIS Lock, Stage 11, SQL, migrations, POS/provider changes or implementation granted here.

**Requested Founder disposition:** merge an accepted documentary clarification boundary and readiness for scoped follow-up, **not** permission to implement supplier financial behavior.

**STOP FOR FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION.**
