# SB-P-1.14 — Post-Stage-6 Founder Product Decision Record

**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media
**Founder:** Riyas PK
**Decision ID:** `FPDR-4` (SB-P-1.14 namespace; continues after `FPDR-1` to `FPDR-3` in `founder/02-stage3-founder-product-decision-record.md`)
**Origin:** Stage 6 Builder Review finding B6-01 (T3); Founder approval recorded by Mission Control in SB-P-1.14-MC-08 (`mission-control/10-stage6-builder-review-gate-and-founder-handover.md` §2–§3)
**Recording authority:** SB-P-1.14-MC-09 (`mission-control/11-b6-01-reconciliation-authorization.md` §3), canonical at `main@28b2b94122ef404fe6692bfb29787aa8e55e2cdc` (PR #820)
**Status:** `DRAFT RECORD OF AN EXPLICIT FOUNDER DECISION — CANONICALLY EFFECTIVE ONLY AFTER MISSION CONTROL REVIEW AND HUMAN MERGE`
**Date:** 2026-10-08

## 1. Question presented

B6-01 found that no approved source fully settles (SB-P-1.14-MC-08 §2):

1. whether a repayment may settle an existing or future `sale + payment_method=credit` row;
2. whether a future credit sale remains one sale row or also creates a separate credit row;
3. whether a standalone credit entry contributes to sales/income totals.

## 2. Founder decision

Founder Riyas PK approved Mission Control's recommendation:

> B6-01: Approved

## 3. FPDR-4 — Repayment targets and credit representation

The decision means exactly the following, as stated in SB-P-1.14-MC-09 §3:

- a repayment may settle either:
  - a standalone `credit` entry; or
  - an existing or future `sale + payment_method=credit` row;
- linking a repayment to a credit-method sale must not rewrite, convert or duplicate that sale;
- a new credit sale remains one `sale` row with `payment_method=credit`; it does not additionally create a separate `credit` row merely to support repayment;
- a standalone `credit` entry represents an owed relationship that is not already represented by a sale/income event;
- a standalone `credit` entry does not increase sales/income totals unless a separate sale/income event exists;
- a repayment is settlement and never increases sales/income totals;
- authoritative per-customer balance truth, ageing and reconciliation remain SB-P-1.16;
- existing sale/purchase history remains unchanged.

This decision extends `FPDR-1` without changing `FPDR-1`, `FPDR-2` or `FPDR-3`.

## 4. Relationship to earlier decisions

- `FPDR-1` (this mission): unchanged. `FPDR-4` adds the repayment-target, credit-representation and standalone-credit totals rules inside the `FPDR-1` boundary; credit-method sales still remain sales, and authoritative customer balances remain SB-P-1.16 (`3-§9-12`).
- `FPDR-3` (this mission): unchanged. Under `FPDR-4`, "a different credit entry selected for a repayment" includes a different credit-method sale selected as the repayment target.
- `FPDR-2` (this mission): unchanged and unrelated.
- SB-P-1.13 `FPDR-5`: unchanged. Credit-method sales recorded through SB-P-1.13 are among the sales a repayment may later settle.

## 5. FCTM rows annotated

`FPDR-4` is added to the Founder-decision cell of exactly these 13 rows. Disposition, owning mission, build commitment, commercial classification, dependency and evidence do not change.

| Row | Why `FPDR-4` governs it |
|---|---|
| `3-§4-3` | credit state: what a standalone credit entry is and that it does not add to sales/income |
| `3-§4-4` | repayment state: allowed settlement targets; never sales/income |
| `3-§5-4` | "Shameer owes" example: recorded as a standalone credit entry when no sale/income event exists |
| `3-§5-5` | "received against his credit" example: may settle a standalone credit entry or a credit-method sale |
| `3-§6-8` | confirmation shows the credit/repayment linkage, whose target types `FPDR-4` defines |
| `3-§8-8` | correcting a credit/repayment association re-links among the allowed targets without converting a sale |
| `3-§9-7` | retrieval by credit/repayment state covers standalone credit entries and credit-method sales with linked repayments |
| `3-§10-5` | credit/repayment views cover the same two target types |
| `3-§19-2` | acceptance of credit and repayment recording includes both repayment targets |
| `BP-§10.3-W2` | four-state work area: representation of credit and repayment |
| `BP-§10.3-SB1` | Scenario B four states persist and retrieve, with `FPDR-4` targets and totals |
| `BP-§10.3-SB2` | Scenario B history unchanged: repayment linkage never rewrites, converts or duplicates a sale |
| `BP-§10.3-SA2` | Scenario A changed-target re-prompt: a different repayment target is a material change (`FPDR-3`) |

## 6. Decisions explicitly not changed

- `FPDR-1` to `FPDR-3`;
- `3-§9-12` and all customer-credit balance, ageing and reconciliation ownership in SB-P-1.16;
- any mission assignment, build commitment, commercial classification, disposition or pricing;
- SB-P-1.12 and SB-P-1.13 decisions and suspension state.

## 7. Trigger disposition

T3 was triggered by B6-01 and is resolved by this decision. T2, T6, T7 and T8 are not triggered: no ownership, timing, scope or classification changes, and no existing sale/purchase history is rewritten.
