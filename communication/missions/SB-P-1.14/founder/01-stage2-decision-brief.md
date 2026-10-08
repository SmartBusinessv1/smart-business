# SB-P-1.14 — Stage 2 Founder Decision Brief (questions only)

**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media
**Status:** `DRAFT STAGE 2 OUTPUT — STAGE 2 AUTHORIZED; OUTPUT NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`
**Prepared by:** Claude Code, Stage 2 Definition Actor
**Baseline:** `main@5a464e55f3365cbb4689d70f9c42dbe320ebb558`, 2026-10-07

This brief records questions, not decisions. Mission Control decides whether the Stage 3 gate is triggered and who conducts any Founder dialogue. Nothing here is Product Truth until a Founder Product Decision Record is merged.

## Why these questions exist

Stage 2 found two places where the approved sources do not say what SB-P-1.14 must deliver. Everything else in the mission is answered by the contracts and the Build Plan (`claude-code/01-stage2-mission-truth-pack.md` Part 6).

## FDB-1 — Where four-state Ledger ends and customer credit begins

**What is settled.** SB-P-1.14 adds the four Ledger states: income, expense, credit and repayment (Build Plan §10.3). SB-P-1.16 builds customer-credit records, balances, ageing and reconciliation on top (Build Plan §10.5). Contract 14 says repayment must reduce the correct credit balance without duplicate revenue.

**What is not settled.**

1. **Owed amounts by person.** Contract 3 gives the example "What does Shameer still owe me?". Should SB-P-1.14 answer that from the credit and repayment entries it records, or does that answer wait for SB-P-1.16 customer balances? SB-P-1.13's FPDR-5 record describes "customer-credit balance" as SB-P-1.14's, while the Build Plan places customer-credit balances in SB-P-1.16.
2. **Earlier credit sales.** Today a sale can be saved with payment method "credit", and SB-P-1.13 will allow more of these. When a separate "credit" state exists, should those earlier sales stay as sales, or should they also show as money owed? Changing their meaning could touch existing history, which Scenario B says must not be damaged.
3. **Money the business owes.** Contract 3 defines credit as an amount owed "to or by" a party. Should SB-P-1.14 record the business's own payables to suppliers as credit, or only money customers owe the business?
4. **Daily totals.** When a sale is on credit and is later repaid, how should "Today's sales" and period totals show it, so the same money is not counted twice?

**Affected rows:** 24 FCTM rows marked `FDB-1`, including `3-§4-3`, `3-§4-4`, `3-§9-12`, `BP-§10.3-SB1`, `BP-§10.3-SB2`. Delta D-19, D-20; derived constraint DC-02.

**Not asked:** whether four-state widening happens in SB-P-1.14. That is already decided.

## FDB-2 — How long to keep documents that never become records, and raw voice

**What is settled.** Originals linked to confirmed records are kept under the approved retention policy (Contract 5 §6). Cheap storage is not a reason to keep things longer (Contract 25 §17). The long-term retention period after cancellation is a separate open decision (Build Plan §15 item 6) and is not asked here.

**What is not settled.**

1. **Rejected or abandoned uploads.** When a merchant uploads a receipt but rejects the interpretation, abandons it, or the preview expires, should Smart Business keep the original as proof, or discard it?
2. **Raw voice audio.** Until SB-P-1.14 exists, raw voice is not kept (SB-P-1.13 FPDR-3). Once governed storage exists, should any raw voice audio be kept, and if so for what purpose? Contract 25 §12 allows this only "where retention is justified".

**Affected rows:** 8 FCTM rows marked `FDB-2`, including `5-§6-1`, `5-§16-3`, `25-§12-1`, `25-§12-3`, `25-§17-6`. Derived constraints DC-11, DC-12.

**Not asked:** any legal retention period. No legal rule is inferred; legal validation follows SB-P-1.12 Founder Record 06.

## What the Founder is not asked

- the SB-P-1.12 or SB-P-1.13 implementation suspension (already governed by the documentation-acceleration lane);
- storage provider choice (Cloudflare R2 is the approved direction; activation is a later gate);
- Mission Control questions MC-Q1 to MC-Q6 (Truth Pack Part 6.4).
