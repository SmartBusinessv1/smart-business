# SB-P-1.17 — MC-487A Bounded EIS17-SUP-06 Cross-Reference Correction Authorization

**Status:** PROPOSED — EFFECTIVE ONLY AFTER FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION.  
**Mission:** SB-P-1.17 Manager Operations — Stage 10, GA-01 Gate 2 (reference correction only).  
**Baseline:** `main@3e90310291bf571e908723952d100ebe60f45548` (PR #1045 merged).  
**Target:** `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md`, immutable pre-edit Git blob `8280967f2805cfed17778da3fc76c90b2f2f5ead`.  
**Scope:** One named requirement row, `EIS17-SUP-06`, **replacement text below only**. This authorization record itself makes NO EIS edit.

## 1. Canonical decision and evidence pins

| Authority / source | Verified Git blob | Boundary |
|---|---|---|
| MC-480A GA-01 adjudication | `6d3b1731b6c889f5ae271dff935e0a51ec1bcdd9` | Supplier contract belongs to SB-P-1.17; customer balance attribution incorrect; documentary T8 remains open |
| MC-482A conditional two-gate plan | `7b9d23622dc772dc6899a0512d5352f870ba070a` | Gate 1 source clarification before separately instructed correction |
| MC-484A Gate 1 acceptance | `cde3c8972fd1cbfe3f2f8905be133c8a81181ebf` | Documentary clarification accepted; supplier payable reader, repayment compatibility, reversals and permission proof held |
| SB-P-1.14 EIS | `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3` | `EIS14-LDG-02/03`: explicit direction, governed repayment target; no supplier-balance algorithm |
| SB-P-1.16 EIS | `46fffd7b140940854c9b2b847517dde2f17584df` | `EIS16-LDG-02`: supplier `owed_by_business` owned by SB-P-1.17; `EIS16-BAL-01`: customer balance only |
| SB-P-1.17 EIS | `8280967f2805cfed17778da3fc76c90b2f2f5ead` | Defective `EIS17-SUP-06` cross-reference; no write yet |
| Locked Blueprint | `bc4615f84959a79e6b242f622aae928901fbe959` | Locked; provisional SB-P-1.16 reference tension remains and must be transparently tracked, not silently edited |
| Locked FCTM | `cb79088d3fa59f8b3226fd9d11ff9c9573666670` | Locked and unchanged |

Gate 1's user-submitted read-only clarification established generic credit/repayment primitives but **not** the supplier-specific balance computation, void/reversal path, overpayment, allocation or effective Manager grants. The submitted Contract 3/7 SHA references are not treated as freshly independently verified by this document. No implementation, law, POS or runtime evidence is inferred.

## 2. Verbatim row-only old/new replacement

**Old line — must match exactly before editing:**

```markdown
| `EIS17-SUP-06` | AF/PR | **Supplier payment and credit only where authorized.** Supplier-side `owed_by_business` credit and payment state use the SB-P-1.14 direction model (`EIS14-LDG-02`) and the SB-P-1.16 balance contract, FIN-01 PROVISIONAL. Goods receipt never records payment (`7-§8-5`). | B6-20; W-1 | 2 |
```

**Replacement line — the ONLY authorized normative EIS text:**

```markdown
| `EIS17-SUP-06` | AF/PR | **Supplier payment and credit only where authorized.** Supplier-side `owed_by_business` credit and payment state use the SB-P-1.14 direction model (`EIS14-LDG-02`). Supplier-payable balance and settlement/correction rules belong to SB-P-1.17 and remain FIN-01 PROVISIONAL pending supplier-specific contract validation; the SB-P-1.16 `EIS16-BAL-01` customer-balance contract does not define supplier payable. Goods receipt never records payment (`7-§8-5`). | B6-20; W-1 | 2 |
```

No other row, table cell, heading, source contract or file may be edited under this authorization. If old line / SHA mismatch, STOP for Mission Control, no best-guess merge. The change removes a false dependency on the customer balance while retaining provisional financial design and receipt/payment distinction. It does **not** endorse an unvalidated supplier payable equation, settlement allocation, credit-note flow or reversal mechanism.

## 3. Exact execution contract — ONLY after this authorization merges and MC activates it

**Actor:** separately instructed SB-P-1.17 EIS editor, not the author of this authorization.  
**Branch:** `mission/SB-P-1.17-ga01-sup06-single-row-correction` from latest independently verified `main`.  
**Permitted changed file (exactly one):** `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md`.  
**Permitted diff:** exactly one replacement line specified in §2; no whitespace or unrelated changes.  
**Return:** open DRAFT PR to `main` documenting original target blob, new blob and exact line-only diff, plus Source 18 T1–T8 screen and retained holds **in PR description**, not a second changed file. No self-merge.  
**Stop:** return the draft PR number/URL/head to Mission Control for verification, targeted SA-03 financial and SA-05 Supabase/cross-EIS review, and Founder merge decision.

The instruction to the EIS editor must be issued separately by Mission Control **after** verifying this record's human merge. Publication of this proposal does not immediately activate execution.

## 4. Required review and bounded acceptance

Mission Control must verify the PR contains **only one exact row replacement** and no change in requirement identifier, priority/trace fields, source tags, permission scope or runtime behavior. SA-03 must verify supplier/customer boundary, `FIN-01 PROVISIONAL`, no invented supplier computation or silent settlement; SA-05 must verify compatible downstream contractual interpretation and retained T8/technical holds. SA-01 should be consulted only if the actual diff introduces authorization semantics (not expected for this text-only edit).

**Documentary T8 status:** correction alone removes the defective `EIS17-SUP-06` reference once merged, but the locked Blueprint's provisional attribution wording remains. Therefore **do not declare full cross-artifact T8 CLOSED** without Source 18-approved treatment of the locked Blueprint tension and independent finding-targeted evidence. Technical T8 WATCH for payable calculation/settlement/reversal remains unaffected.

## 5. Boundaries and non-authorizations

- Preserve SB-P-1.14 governed Ledger command and single writer; SB-P-1.16 customer `owed_to_business` balance; SB-P-1.17 supplier `owed_by_business` ownership.
- No goods-receipt-as-payment, no automatic supplier liability/settlement, no customer advances netted with supplier payables, no second Ledger, no unrestricted staff Owner finance or Manager capability inference.
- Retain all GA-02–GA-09, MC410-R01/R02/R04A/R04B, EQ17-13, `EIS17-SEC-02`, U-11, DPOS, HOLD-15–21, professional validation and real-source evidence gaps.
- No FCTM, locked Blueprint, other EIS, Product Truth, code, SQL, migration, API, POS provider, production action, EIS Lock, Stage 11 transition or implementation approval.
- A completed Markdown/CI check is not a substitute for domain-owner approval, independent re-review or Founder merger.

**MC-487A requested Founder decision:** approve a **future one-line correction process** via merge of this documentary authorization. The actual EIS correction needs postmerge MC activation, separate draft PR and Founder human merge.

**STOP FOR FOUNDER MERGE AND MISSION CONTROL POST-MERGE VERIFICATION.**
