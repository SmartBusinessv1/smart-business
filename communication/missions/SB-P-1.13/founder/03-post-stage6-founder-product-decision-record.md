# SB-P-1.13 — Post-Stage-6 Founder Product Decision Record

**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation
**Founder:** Riyas PK
**Decision ID:** `FPDR-5` (SB-P-1.13 namespace; continues after `FPDR-1` to `FPDR-4` in `founder/02-stage3-founder-product-decision-record.md`)
**Origin:** Stage 6 Builder Review finding B6-02 (T3); Founder dialogue recorded by Mission Control in SB-P-1.13-MC-08 (`mission-control/10-stage6-builder-review-gate-and-reconciliation-handover.md` §3)
**Recording authority:** SB-P-1.13-MC-09 (`mission-control/11-b6-reconciliation-authorization.md` §4), canonical at `main@35314a92a357646c56cda6107e2aebeb970a28f6`
**Status:** `DRAFT RECORD OF AN EXPLICIT FOUNDER DECISION — CANONICALLY EFFECTIVE ONLY AFTER MISSION CONTROL REVIEW AND HUMAN MERGE`
**Date:** 2026-10-06

## 1. Question presented

Mission Control asked (SB-P-1.13-MC-08 §3):

> Before SB-P-1.14, may SB-P-1.13 record a normal existing sale with payment method `credit` without creating/updating mature owed-balance/repayment state, or must every credit statement wait for SB-P-1.14?

## 2. Founder decision

Founder Riyas PK approved:

> Approved — allow existing credit-payment-method sales in SB-P-1.13; mature credit/repayment remains SB-P-1.14.

## 3. FPDR-5 — Existing credit-payment-method sales in SB-P-1.13

The decision means exactly the following, as stated in SB-P-1.13-MC-08 §3 and SB-P-1.13-MC-09 §4:

- a normal existing `sale` with `payment_method = credit` is an available transaction capability under `FPDR-1`;
- SB-P-1.13 may record such a sale through text or Basic Voice when the merchant intent can be represented truthfully by the existing transaction model;
- this does not create or update a mature customer-credit balance, owed-state ledger, repayment allocation or four-state Ledger state;
- repayment remains blocked on SB-P-1.14;
- if the merchant statement implies balance truth or repayment semantics unavailable in the existing model, Smart Business clarifies or the request remains dependency-blocked, rather than fabricating mature credit state.

No mature Ledger work is pulled into SB-P-1.13.

## 4. Relationship to earlier decisions

`FPDR-5` interprets the boundary between `FPDR-1` (available transaction types) and `FPDR-2` (credit/repayment-specific persistence and final acceptance wait for SB-P-1.14). It does not change the wording of `FPDR-1` to `FPDR-4`. The credit/repayment portions of `12-§4-1`, `12-§7-6` and `12-§21-1` stay `IN SCOPE` in SB-P-1.13 and dependency-blocked on SB-P-1.14 for mature credit and repayment.

## 5. FCTM rows annotated

`FPDR-5` is added to the Founder-decision cell of exactly these 5 rows. Disposition, owning mission, build commitment and commercial classification do not change.

| Row | Why it is affected |
|---|---|
| `12-§4-1` | voice input naming a sale whose payment method is credit |
| `12-§7-5` | payment-state clarification decides between an existing credit-payment-method sale and unavailable mature credit truth |
| `12-§7-6` | credit-versus-repayment clarification; repayment remains SB-P-1.14 |
| `12-§21-1` | acceptance of credit voice input is limited to an existing sale with `payment_method = credit` |
| `9-§9-4` | paid-versus-owed clarification; an owed balance is mature credit truth (SB-P-1.14) |

## 6. Decisions explicitly not changed

- `FPDR-1` to `FPDR-4`;
- mature four-state Ledger, customer-credit balance and repayment ownership in SB-P-1.14 (and credit maturity in SB-P-1.16);
- any mission assignment, build commitment, commercial classification or pricing.

## 7. Trigger disposition

T3 was triggered by B6-02 and is resolved by this decision. T7 is not triggered: no ownership or timing changes and no mature Ledger work moves.
