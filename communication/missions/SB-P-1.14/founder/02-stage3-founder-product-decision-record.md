# SB-P-1.14 — Stage 3 Founder Product Decision Record

**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media  
**Founder:** Riyas PK  
**Stage:** Source 18 v1.2 Stage 3 — Founder Decision Gate  
**Dialogue date:** 2026-10-08 IST  
**Canonical Stage 3 authorization:** PR #814, `main@8e62dbb8222dd940586e91cd95c4966427d1b01a`  
**Status:** DRAFT RECORD OF EXPLICIT FOUNDER DECISIONS — CANONICALLY EFFECTIVE ONLY AFTER FOUNDER HUMAN MERGE OF THIS RECONCILIATION PR

## 1. Founder confirmation

Mission Control presented the three canonical Stage 3 recommendations after PR #814 made the Founder Decision Gate effective.

The Founder replied:

> FDB-1,FDB-2,FDB-3 Approved

Mission Control records that response as approval of the three recommendations exactly as presented, without expanding them beyond that dialogue.

## 2. FPDR-1 — Four-state Ledger / customer-credit boundary

**Decision ID:** FPDR-1  
**Triggers:** T1, T2, T4, T6 / DC-02; one explicit T7 reconciliation described below.

Founder approves:

- SB-P-1.14 owns the four Ledger states: **income, expense, credit and repayment**;
- existing `sale + payment_method=credit` rows remain sales and are not destructively rewritten or silently reinterpreted as the new `credit` state;
- SB-P-1.14 may record and retrieve credit/repayment Ledger facts, including amounts owed **to or by** a relevant party;
- authoritative customer-credit balance truth — including the exact answer to “What does Shameer still owe me?” — matures in SB-P-1.16 with customer-credit-specific records, balances, ageing and reconciliation;
- SB-P-1.14 may still retrieve the underlying credit and repayment entries by counterparty/reference without claiming that later authoritative customer-balance layer;
- merchant-visible totals must not double count: a credit sale counts once as the sale/earned business event; a later repayment is settlement/cash movement against the credit relationship and is not new revenue.

### T7 effect

The canonical Stage 2 FCTM held `3-§9-12` `IN SCOPE` in SB-P-1.14 pending FDB-1.

Founder now explicitly resolves that requirement boundary:

- `3-§9-12` authoritative per-customer owed-balance truth is **ASSIGNED TO LATER MISSION — SB-P-1.16**;
- the rest of the four-state Ledger foundation remains in SB-P-1.14;
- no historical sale/purchase row is reassigned or rewritten.

This is a narrow T7 reclassification/mission-assignment clarification, not a pull-forward of SB-P-1.16.

## 3. FPDR-2 — Minimum retention for unconfirmed originals and raw voice

**Decision ID:** FPDR-2  
**Triggers:** T1, T6 / DC-11, DC-12.

Founder approves:

- rejected, abandoned or expired uploads that never become confirmed business records are not kept indefinitely;
- they may remain only for a **short, bounded operational grace period** needed for active retry/recovery, dispute handling or security investigation, after which they are discarded unless another already-approved legal/hold obligation requires otherwise;
- the exact bounded operational duration is not a legal retention period and may be specified later in the EIS/configuration subject to privacy minimization;
- raw voice audio is **not durably retained by default**, even after governed object storage exists;
- transcript/structured meaning, resulting business records and required audit/provenance may persist under their own approved policies;
- durable raw-audio retention requires a separately justified, explicit approved product purpose; cheap storage is never sufficient justification.

This decision does not determine any long-term statutory or post-cancellation retention duration.

## 4. FPDR-3 — Material changed-target re-prompt rule

**Decision ID:** FPDR-3  
**Trigger:** T6 / DC-05.

Founder approves:

- after preview and before commit, Smart Business must re-prompt when the resolved target changes in a way that could alter the merchant's intended business meaning or consequence;
- material target changes include, as applicable:
  - a different customer, supplier or other counterparty;
  - a different credit entry selected for a repayment;
  - a different inventory item selected for an opening-stock line;
  - a newly detected duplicate candidate that creates a meaningful risk of double recording;
- internal changes that do not alter the merchant-visible business meaning or consequence do **not** force another confirmation merely because implementation state changed;
- authority, permission and revocation checks remain independently binding under SB-P-1.12 and can still block execution even when the target itself did not materially change.

This rule protects truthful preview-to-commit binding without creating unnecessary repeat confirmations for irrelevant internal changes.

## 5. Trigger disposition

- **T1:** resolved by FPDR-1 and FPDR-2.
- **T2:** CF-2 resolved by FPDR-1 in favor of the Build Plan boundary: four-state Ledger foundation in SB-P-1.14; customer-credit-specific balance truth in SB-P-1.16.
- **T4:** D-19 and D-20 retain their historical `PRODUCT-AFFECTING` Stage 2 classification; the product decisions they required are resolved by FPDR-1.
- **T6:** DC-02 resolved by FPDR-1; DC-11 and DC-12 by FPDR-2; DC-05 by FPDR-3.
- **T7:** triggered only for the explicit `3-§9-12` later-mission reconciliation above. No other row is reassigned.
- **T8:** not triggered by this Founder dialogue.

## 6. Decisions explicitly not changed

These approvals do not change:

- SB-P-1.12 or SB-P-1.13 implementation suspension;
- four-state Ledger widening ownership in SB-P-1.14;
- customer-credit-specific records/balances/ageing/reconciliation ownership in SB-P-1.16;
- the permission/authority model from SB-P-1.12;
- Cloudflare R2/provider activation status;
- the prohibition on a feature-specific scheduler;
- the treatment of AWS S3 as at most an optional transient-processing seam;
- unresolved long-term retention/deletion duration after cancellation/non-payment;
- commercial classification, pricing, source contracts or Build Plan text.

## 7. FCTM reconciliation rule

The Stage 2 FCTM remains **766 rows**.

Reconciliation is surgical:

- 24 former `FDB-1` references become `FPDR-1`;
- 8 former `FDB-2` references become `FPDR-2`;
- `BP-§10.3-SA2`, `22-§13-4` and `21-§18` receive `FPDR-3`;
- only `3-§9-12` changes owning mission/disposition, from SB-P-1.14 `IN SCOPE` to SB-P-1.16 `ASSIGNED TO LATER MISSION`.

No row is added or removed. No commercial classification changes.

## 8. Gate outcome

All canonical FDB-1, FDB-2 and FDB-3 questions now have explicit Founder decisions.

Stage 3 is not canonical-complete until this decision record, Mission Control reconciliation review and surgical FCTM update are human-merged.

No Stage 4 authority follows before that merge and post-merge verification.
