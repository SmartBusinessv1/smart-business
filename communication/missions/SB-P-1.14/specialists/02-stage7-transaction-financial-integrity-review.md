# S7-SP-2 — Transaction & Financial Integrity Specialist Review

**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media  
**Stage:** 7 — Independent Specialist Review  
**Specialist appointment:** S7-SP-2 — Transaction & Financial Integrity  
**Canonical review baseline:** `main@cdb94b21284ba18d3bee523009eb4dbe3e8d7b11`  
**Mode:** READ-ONLY  
**Disposition:** **PASS WITH HELD ENGINEERING CONDITIONS — NO PRODUCT-TRUTH TRIGGER IDENTIFIED**

## 1. Actor / Independence Statement

**Actor/session:** Smart Business Finance & Payments specialist room, current ChatGPT session.

This room/session **did not author or materially contribute to SB-P-1.14 Blueprint Sections 1–19 or the Stage 6 Builder Review**. Independence is therefore established under the Stage 7 specialist-separation requirement.

Prior Smart Business contributions in this session were Finance & Payments institutional-retrospective work and SB-P-1.12 R-2 commercial-obligation evidence. Those contributions did not author SB-P-1.14 Product Truth, FPDR-1 through FPDR-4, Blueprint Sections 1–19, or the Stage 6 Builder Review.

**Correlated-assumption risk:** this room has previously reasoned about financial-event integrity, reconciliation, payment state and audit continuity. That creates a risk of importing preferred finance architecture into SB-P-1.14. I controlled that risk by treating FPDR-1 through FPDR-4 as fixed, reviewing only whether the proposed direction faithfully preserves those decisions, and not inventing accounting, customer-balance or reconciliation behavior.

Source 18 requires Product Missions to separate definition, engineering, implementation and verification, prevent self-approval, preserve financial/audit integrity, and stop when authority or evidence is unclear. 18_SB-P_Mission_Lifecycle_and_D…

---

# 2. Read-Only Evidence Used

Primary evidence actually reviewed at `main@cdb94b21284ba18d3bee523009eb4dbe3e8d7b11`:

- `communication/missions/SB-P-1.14/mission-control/15-stage7-transaction-integrity-specialist-instruction.md`  
  Blob `bc801ea0eb72c4eb6aad860fc296bf3763f3e165`
- `communication/missions/SB-P-1.14/mission-control/13-stage7-engineering-and-specialist-authorization.md`  
  Blob `c20b5bc2d0ba7226de8da59d2560086d2cef79b1`
- `docs/phase-1-mission-blueprint/active/SB-P-1.14.md`  
  Blob `55adeb0f1ec14ac5d61de3ad3e10f55cee1e0054`
- `communication/missions/SB-P-1.14/claude-code/08-stage6-builder-review.md`  
  Blob `11dbd47b77e68eced7a4b4a3e190cfbd4f818239`
- `communication/missions/SB-P-1.14/founder/02-stage3-founder-product-decision-record.md`  
  Blob `9717b29dbe08b6d115f512a90450c528d5212773`
- `communication/missions/SB-P-1.14/founder/03-post-stage6-founder-product-decision-record.md`  
  Blob `3f36c06da8a7327766ada44248ce2953cd8e3a2c`
- `communication/missions/SB-P-1.14/claude-code/02-stage2-populated-fctm.md`
- `docs/phase-1-mission-blueprint/smart-business-features/03_Ledger_and_Business_Memory.md`

Active governance also requires traceability for material financial changes, correction history rather than destructive overwrites, referential integrity, and consistent source totals. 12_Product_Execution_and_Releas…

**Administrative observation:** the specialist instruction file itself still states an older embedded baseline `main@feb0f522...`; Mission Control's appointment explicitly supplies `main@cdb94b...`. I treated the Mission Control-provided current baseline as controlling. This is not a Product Truth conflict and does not by itself trigger T2.

---

# 3. Fixed Product Truth Applied

I treated the following as non-negotiable:

**FPDR-1**
- Four Ledger states: income, expense, credit, repayment.
- Existing `sale + payment_method=credit` remains a sale.
- Credit may represent money owed **to or by** a relevant party.
- A credit sale is counted once.
- Repayment is settlement, not new revenue.
- Authoritative customer balance/ageing/reconciliation remains SB-P-1.16.

**FPDR-4**
- Repayment can target a standalone credit entry or an existing/future credit-method sale.
- Repayment linkage never rewrites/converts/duplicates that sale.
- A new credit-method sale remains exactly one sale row.
- No additional credit row is created merely to support repayment.
- Standalone credit does not increase sales/income unless a separate earned event exists.
- Repayment never increases sales/income.
- Existing sale/purchase history remains unchanged.

These decisions resolve Stage 6 B6-01. No part of this specialist review reopens it.

---

# 4. Findings

| ID | Finding | Severity | Disposition |
|---|---|---:|---|
| **S7-FI-01** | Four-state widening is directionally faithful and preserves existing sale/purchase history | INFO / PASS | ACCEPTABLE |
| **S7-FI-02** | Governed transaction-command cut-over is mandatory for financial integrity | **HIGH** | HOLD AFFECTED ENGINEERING |
| **S7-FI-03** | Idempotency must separate request identity from duplicate-content evidence | **HIGH** | HOLD AFFECTED ENGINEERING |
| **S7-FI-04** | Totals require one canonical aggregation rule across readers/exports | MEDIUM | EIS/ENGINEERING REQUIRED |
| **S7-FI-05** | Repayment linkage must be concurrency-safe without creating SB-P-1.16 balance authority | MEDIUM | EIS/ENGINEERING REQUIRED |
| **S7-FI-06** | Correction must preserve event identity, audit chain and FPDR-4 semantics atomically | **HIGH** | HOLD AFFECTED ENGINEERING |
| **S7-FI-07** | Opening-stock/import writes must stay on their destination command and must not fabricate Ledger finance events | MEDIUM | EIS/ENGINEERING REQUIRED |
| **S7-FI-08** | SB-P-1.16 compatibility is preserved only if SB-P-1.14 exposes facts/linkage, not authoritative balances | **HIGH boundary** | HOLD IF PULLED FORWARD |

---

## S7-FI-01 — Four-state widening preserves current history

**Severity:** INFO / PASS

Blueprint §8.1 correctly uses **additive widening**, not replacement. Existing `sale` and `purchase` rows remain valid historical facts. Existing credit-method sales remain sales. New income/expense/credit/repayment support therefore extends rather than reinterprets previous history.

That is consistent with Contract 3's requirement that implementation extend rather than destructively replace accepted transaction/correction/audit foundations.

**Affected FCTM rows:** principally:

`3-§2-2`, `3-§4-1` through `3-§4-6`, `3-§22-1`, `3-§22-2`, `BP-§6.3-1`, `BP-§10.3-W1`, `BP-§10.3-W2`, `BP-§10.3-W3`, `BP-§10.3-SB1`, `BP-§10.3-SB2`.

**Finding:** No Product Truth conflict.

---

## S7-FI-02 — One governed command path is a hard financial-integrity prerequisite

**Severity:** HIGH

Stage 6 B6-04 remains materially correct.

Current repository evidence shows direct transaction writes and an audit-bypass possibility. The proposed SB-P-1.14 direction is financially safe **only if** four-state widening is implemented through the same governed transaction-command cut-over required by SB-P-1.12/SB-P-1.13.

A parallel four-state insert function, document-specific Ledger write, import-only transaction writer, or frontend direct-DML exception would create competing financial truth and undermine correction/audit continuity.

Required engineering property:

**all consequential Ledger creation and correction paths converge on the governed command boundary.**

That includes:

- manual forms;
- conversation;
- voice;
- document-confirmation;
- CSV/XLSX row commits;
- retry/replay;
- corrections.

Correction should atomically preserve the prior state and write the correction/audit evidence; a correction-event record cannot itself be an independently forgeable replacement for governed correction.

**Affected rows:** all `DTX` dependency rows, especially `3-§8-1` through `3-§8-16`, `3-§18-3`, `BP-§6.1-1`, `BP-§6.2-1`, plus four-state write rows under §8.1.

**Hold:** Any Stage 7 Engineering finding claiming financial-write feasibility or audit-safe four-state implementation must remain **HELD** until it explicitly preserves this command-only cut-over and its upstream dependency ordering.

---

## S7-FI-03 — Content fingerprint is not itself transaction idempotency

**Severity:** HIGH

Stage 6 B6-11 correctly requires retry/re-upload/replay protection, but one refinement needs a strict integrity boundary.

A document SHA-256/content fingerprint is useful for detecting **duplicate-content candidates**. It should not, by itself, become the semantic idempotency key for a financial business event.

Reason: identical bytes or identical interpreted values do not necessarily mean the merchant intended the same business event. Conversely, a network retry of one confirmed write must never create a second event.

The safe separation is:

- **request/command idempotency identity** → proves repeated execution attempts belong to the same intended write;
- **document/content fingerprint** → helps detect re-upload/replay/duplicate candidates;
- **FPDR-3 confirmation logic** → if a newly detected duplicate creates meaningful double-recording risk, re-prompt rather than silently commit or silently discard.

This is already supported by the approved requirement set; it does **not** add Product Truth.

Bulk import likewise requires row-level idempotency/commit accounting. A retry after unknown outcome must first resolve the prior outcome instead of blindly reinserting.

**Affected FCTM rows:**

`3-§17-1` through relevant §17 duplicate/retry rows, `5-§11-*`, `5-§18-6`, `25-§14-2` through `25-§14-5`, `22-§29-8`, plus import/write rows using `DTX`.

**Hold:** Any Engineering finding that equates `file hash == financial event identity`, or proposes hash-only automatic suppression, must remain **HELD**.

---

## S7-FI-04 — One totals definition must govern every financial reader

**Severity:** MEDIUM

FPDR-1 and FPDR-4 settle the dangerous cases:

- credit-method sale: count once as sale/earned event;
- standalone credit: no sales/income increase unless a separate earned event exists;
- repayment: never revenue.

The Stage 7 EIS therefore needs one explicit financial aggregation mapping reused by:

- dashboard/read models;
- period summaries;
- search-derived totals;
- reports;
- CSV/Excel/PDF exports;
- later Ask CFO/Daily Intelligence consumers.

No reader may separately infer that a repayment is income because cash was received.

Likewise, adding generic `income` and `expense` must not accidentally cause an existing sale/purchase to be counted twice when a broader income/expense view is produced.

Contract 3 requires exports to remain consistent with source totals and prohibits an alternate financial truth.

**Affected rows:**

`3-§10-2`, `3-§10-3`, `3-§10-5`, `3-§10-9`, `3-§19-2`, `BP-§10.3-SB1`, `BP-§10.3-SB2`, with downstream delegated dashboard/report rows.

**Disposition:** no Founder question required. Engineering/EIS must make the aggregation rule deterministic and testable.

---

## S7-FI-05 — Repayment concurrency must protect event integrity without inventing balance authority

**Severity:** MEDIUM

FPDR-4 permits multiple repayment facts to link to valid repayment targets. SB-P-1.14 must therefore ensure:

- each repayment is its own durable Ledger fact;
- retries of the **same intended repayment** cannot duplicate it;
- the target is revalidated at execution;
- linkage is business-scoped and refers only to an allowed target type;
- changing the target through correction preserves audit history;
- a race/unknown outcome cannot create two instances of one intended repayment.

However, this mission must **not** silently introduce authoritative “remaining balance,” ageing, overpayment policy or reconciliation logic merely to solve concurrency. Those are explicitly assigned to SB-P-1.16.

So the concurrency invariant here is about **event identity, target integrity and duplicate prevention**, not authoritative customer-balance calculation.

**Affected rows:** `3-§4-4`, `3-§5-5`, `3-§6-8`, `3-§8-8`, `3-§17-*`, `3-§19-2`, `BP-§10.3-SA2`, `BP-§10.3-SB1`, `BP-§10.3-SB2`.

---

## S7-FI-06 — Corrections must not mutate away FPDR-1/FPDR-4 truth

**Severity:** HIGH

Contract 3 requires correction to preserve:

- original record identity;
- old and new values;
- actor;
- time;
- reason/context;
- consequential downstream links.

A repayment-association correction must therefore **relink with audit history**, not rewrite the target sale into credit, manufacture a second credit row, or erase the prior association without evidence.

Similarly:

- correcting a credit direction cannot silently convert an unrelated sale/purchase;
- changing amount/type/payment method must leave reconstructable prior truth;
- correction and correction-event persistence should be one governed atomic operation from the merchant's perspective.

Any implementation that leaves the financial row changed while audit-event persistence fails would violate the integrity requirement.

**Affected rows:** `3-§8-1` through `3-§8-16`, especially `3-§8-8` and command/audit-dependent rows; `BP-§6.1-1`, `BP-§6.2-1`.

**Hold:** Engineering acceptance of the correction path must remain **HELD** until atomic governed correction and audit continuity are specified.

---

## S7-FI-07 — Opening-stock/import must not create unintended financial events

**Severity:** MEDIUM

Blueprint §8.2 correctly treats opening stock as an **inventory destination adapter**, not a second financial-import truth system.

Stage 6 B6-14 correctly requires opening-stock lines to use the existing stock movement path and to clarify rather than overwrite an item that already has opening stock.

Transaction/financial-integrity consequence:

**an opening-stock import must not automatically fabricate a Ledger purchase, expense, payable, credit or repayment unless a separately approved source explicitly requires that financial event.**

The current reviewed sources support opening-stock inventory truth; they do not authorize inference of a corresponding historic payment or liability merely from stock quantity.

For financial transaction imports, each row must independently pass:

- interpretation/validation;
- authority at commit time;
- confirmation requirements;
- command idempotency;
- success/failure accounting.

No partially processed file may be represented as fully committed.

**Affected rows:**

`7-§6-2`, `7-§6-4`, `7-§6-5`, `7-§15-2a`, `5-§4-9`, `5-§7-3`, `5-§18-5`, `BP-§10.3-W13`, plus Ledger-import rows in Contract 3/5.

---

## S7-FI-08 — SB-P-1.16 boundary is correctly preserved and must remain hard

**Severity:** HIGH boundary

The current Blueprint is compatible with SB-P-1.16 because it supplies:

- credit facts;
- repayment facts;
- direction;
- repayment target linkage;
- preserved credit-method sales;
- counterparty/reference retrieval.

It deliberately does **not** claim:

- authoritative customer balance;
- ageing;
- reconciliation;
- customer-credit master truth.

That division is correct.

`3-§9-12` and the credit-specific residuals remain assigned to SB-P-1.16.

Stage 7 engineering must therefore avoid introducing a new durable “current customer balance” or parallel customer-credit truth as an implementation shortcut for SB-P-1.14.

A derived display from raw events must not be presented as the authoritative SB-P-1.16 balance if the required customer-credit-specific model/reconciliation has not yet matured.

**Affected rows:**

`3-§9-12` — assigned SB-P-1.16;  
`3-§15-8`, `3-§15-9`, `BP-§9-2`, `BP-§10.3-C2`;  
delegated Contract 14/15 rows.

**Hold:** any Stage 7 Engineering proposal that pulls authoritative balance, ageing or reconciliation into SB-P-1.14 must remain **HELD** and screened as T7/T8 rather than implemented for convenience.

---

# 5. Specific Review Questions — Disposition

**Four-state Ledger:** PASS, subject to governed-command implementation.

**Existing sale/purchase history:** PASS. No backfill/rewrite is authorized or needed.

**Credit direction:** PASS at Product Truth level; engineering must persist direction explicitly enough that “owed to” and “owed by” cannot be confused.

**Repayment linkage:** PASS under FPDR-4, subject to target validity, idempotency and correction audit.

**No duplicate credit row:** PASS and mandatory. A new `sale + payment_method=credit` stays one sale row.

**Totals/no-double-counting:** PASS at Product Truth level; deterministic common aggregation implementation still required.

**Corrections:** Product direction PASS; implementation remains integrity-held until governed atomic correction/audit is designed.

**Idempotency/retry/unknown outcome:** directionally PASS; content hash must not substitute for command idempotency.

**Concurrency:** feasible if command identity/link validity are protected. Do not pull SB-P-1.16 balance enforcement forward.

**Opening stock/import:** PASS when writes remain destination-specific and row-governed.

**SB-P-1.16 compatibility:** PASS provided authoritative balance/ageing/reconciliation remains outside SB-P-1.14.

---

# 6. T2 / T3 / T6 / T7 / T8 Screen

### T2 — Conflict among approved sources

**NOT TRIGGERED.**

No financial Product Truth conflict was found among FPDR-1 through FPDR-4, Contract 3, the Blueprint and the Build Plan.

The stale embedded baseline in the specialist instruction is administrative metadata, not conflicting financial Product Truth.

### T3 — New product decision required

**NOT TRIGGERED.**

B6-01's earlier T3 candidate was resolved by FPDR-4.

No additional accounting/product decision is required by this review.

### T6 — Derived constraint materially affecting product behaviour

**NOT TRIGGERED.**

The engineering constraints identified here derive directly from already-approved idempotency, correction, duplicate-protection, totals and mission-boundary obligations. They do not introduce new merchant behavior.

### T7 — Omission / deferral / pull-forward / simplification / reclassification

**NOT CURRENTLY TRIGGERED.**

However, **T7 candidate if engineering pulls authoritative customer balance/ageing/reconciliation from SB-P-1.16 into SB-P-1.14**, or moves any SB-P-1.14 financial-integrity row out of scope due to difficulty.

Source 18 explicitly prohibits silent omission, simplification or mission reassignment. 18_SB-P_Mission_Lifecycle_and_D…

### T8 — Product Truth conflict or infeasibility

**NOT TRIGGERED on current proposed direction.**

T8 would become applicable if engineering concludes, for example, that preserving existing credit-method sales, command-only writes, no-double-counting, correction history, or SB-P-1.16 separation is infeasible and proposes narrowing Product Truth rather than solving the engineering problem.

---

# 7. Stage 7 Engineering Findings That Must Remain Held

At canonical baseline `cdb94b...`, no completed Stage 7 Engineering Review artifact exists yet, so there is no concrete Stage 7 Engineering finding ID for this specialist to disposition.

When Engineering Review is produced, **any finding claiming acceptance/feasibility of the following must remain HELD until Mission Control dispositions this specialist report**:

1. transaction-command architecture and financial write path;
2. transaction correction/audit path;
3. idempotency, retry and unknown-outcome model;
4. financial duplicate detection;
5. repayment-target concurrency/link integrity;
6. totals/aggregation model;
7. opening-stock/import financial side effects;
8. SB-P-1.16 credit-balance compatibility.

In particular, Engineering must **not** be accepted if it proposes:

- direct DML as a second Ledger write path;
- hash-only financial-event deduplication;
- duplicate credit rows for credit-method sales;
- repayment as revenue;
- destructive rewrite of legacy sales/purchases;
- correction without durable prior truth;
- opening-stock import automatically manufacturing financial obligations;
- authoritative customer-balance logic inside SB-P-1.14.

---

# 8. Specialist Conclusion

**S7-SP-2 RESULT: PASS WITH HELD ENGINEERING CONDITIONS.**

The proposed SB-P-1.14 engineering direction is capable of preserving transaction and financial integrity and is consistent with FPDR-1 through FPDR-4.

No new Product Truth decision is required.

No T2, T3, T6, T7 or T8 trigger is currently raised.

The highest-risk engineering areas remain the **single governed write path, atomic correction/audit continuity, request-level idempotency versus duplicate-content detection, unknown-outcome handling, consistent totals, and preservation of the SB-P-1.16 balance/reconciliation boundary**.

These are implementation/engineering obligations, not reasons to weaken or redefine Product Truth.

**STOP — S7-SP-2 TRANSACTION & FINANCIAL INTEGRITY REVIEW COMPLETE. READ-ONLY. NO BLUEPRINT/FCTM/FOUNDER-DECISION/IMPLEMENTATION CHANGE AUTHORIZED. RETURNED TO MISSION CONTROL FOR DISPOSITION.**