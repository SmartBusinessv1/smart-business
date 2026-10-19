# SB-P-1.16 — Financial Integrity & Credit

## Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.16 |
| Mission Name | Financial Integrity & Credit |
| Mission Type | Product Mission — customer credit awareness, repayment, payment-evidence verification and bank/payment reconciliation, and credit-specific completion of Contract 03 |
| Lifecycle Stage | Source 18 v1.2 Stage 8 — Founder Approval and Blueprint Lock — complete Blueprint Sections 1–21 (lock candidate) |
| Status | `STAGE 8 LOCK CANDIDATE — SECTIONS 1–19 APPROVED AT STAGE 5 (MC-171; v0.3 TARGETED RE-APPROVAL MC-240) — SECTIONS 20–21 ACCEPTED AT STAGE 7 (MC-247) — LOCK STATUS IS DETERMINED SOLELY BY THE STAGE 8 FOUNDER APPROVAL RECORD` |
| Product Authority | Founder (Riyas PK) |
| Product Discovery and Drafting | Claude Code, Definition Actor (MC-97 appointment; MC-107 §13.1) |
| Lifecycle Authority | Source 18 v1.2 (`merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `0945bda60a93c99909c3b7a247d5427ebe256011`) |
| Structural template | `docs/phase-1-mission-blueprint/templates/SB-P-Product-Feature-Elaboration-Workflow-Template.md` (blob `710dd977ca16873457bd560533224b45ae34c4f0`); structure of the latest completed Blueprint `docs/phase-1-mission-blueprint/completed/SB-P-1.15.md` (blob `0ab2ad6f12cedc54836d766bac7a2e9c0e1e03e5`), itself following SB-P-1.10 |
| Stage 4 Authorization | MC-164 (Stage 4 bounded local documentary drafting), on canonical baseline `main@a0db230181807386d5684bfb5638a1ad1fee917a`. MC-164 is conversation-source; no repository record exists for it yet |
| Stage 3 | Founder Decision Gate TRIGGERED; Stage 3 COMPLETE (MC-163, conversation-source), on the Gate Record `communication/missions/SB-P-1.16/mission-control/08-stage3-founder-decision-gate-record.md` (blob `a83c1589292a33d489fdbfac8065835b6a28591f`, PR #965, `main@a0db2301`) |
| Governing Build Plan section | Build Plan §10.5 (`docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`, blob `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a`) |
| Primary contracts | Contract 14 Smart Credit Awareness (`16914a83`); Contract 15 Payment Verification & Bank Reconciliation (`632f3402`); Contract 03 Ledger & Business Memory, credit-specific completion (`d8c26c07`); Global Product Completion View (`ee76d920`) |
| Canonical FCTM | `communication/missions/SB-P-1.16/claude-code/02-stage2-populated-fctm.md`, blob `94dd52202ad040f64394f07f95389d02ffcc5dd0` at `main@955351a6` (PR #973: the `16:FPDR-10` citation amendment of 26 Founder-decision cells, MC-215; post-merge verified MC-236); Stage 5 baseline blob `5ff7742f6d3849ffab8767333a54eda07be268ab`: 555 rows — 349 `IN SCOPE`, 129 `DELEGATED`, 20 `ASSIGNED TO LATER MISSION`, 32 `NOT APPLICABLE`, 22 `OUT OF BUILD SCOPE`, 3 `UNRESOLVED FOUNDER DECISION`, 0 `ESCALATED`, 0 `ALREADY DEMONSTRATED` |
| Founder Product Decision Record | `communication/missions/SB-P-1.16/claude-code/09-stage3-founder-product-decision-record-draft.md`, blob `30b19a80352b100e79cadc216daae14b07e24f9a`: `16:FPDR-1` to `16:FPDR-9`, canonical (PR #963, `main@bb695255`; MC-154); and `communication/missions/SB-P-1.16/claude-code/22-stage7-founder-product-decision-record-16-fpdr-10.md`, blob `bd5a5f0c2049b056c84722a513a086ac48d9086f`: `16:FPDR-10`, canonical (PR #971, `main@2c5be64b`; registered PR #972, `main@47df4714`; MC-206, MC-213). Distinct from `12:FPDR-n`, `14:FPDR-n` and `15:FDB-n`, which are cited with their mission namespace |
| Upstream dependencies | SB-P-1.12, SB-P-1.13, SB-P-1.14 and SB-P-1.15: specifications locked; Implementation Authorization `WITHHELD`; no runtime evidence |
| Date | 2026-10-16 (Sections 1–19); 2026-10-18 (v0.3); 2026-10-19 (Stage 8 composition) |
| Builder Review | Complete — Stage 6 report `communication/missions/SB-P-1.16/claude-code/17-stage6-builder-review.md` (PR #967, `main@5a4d2243`; verified MC-178) |
| Engineering Review (Sections 20–21) | Complete — Sections 20–21 below are incorporated verbatim from Stage 7 v0.2 `communication/missions/SB-P-1.16/claude-code/18-stage7-blueprint-sections-20-21-draft.md` (blob `50f24db416f05120b69124731c86405bb0ac7244`, PR #975, `main@9e761048`); Stage 7 accepted MC-247. Not independent assurance (Section 21.9) |
| Mission Control Review | Stage 5 Gate 10 approved (MC-171; `communication/missions/SB-P-1.16/mission-control/09-stage5-product-review-gate-10-approval-record.md`; PR #966, `main@3c9a7743`); targeted v0.3 re-approval (MC-240; PR #974, `main@22bbf422`); Stage 7 accepted (MC-247) |
| Blueprint Lock | Determined solely by the Stage 8 Founder Approval Record `communication/missions/SB-P-1.16/mission-control/10-stage8-founder-approval-and-lock-record.md`; Founder approval PENDING at composition |

## Mission Snapshot

| Field | Summary |
|---|---|
| Product problem | Smart Business records credit-method sales but has no customer-credit balance, repayment, ageing, threshold, payment-evidence, verification-state, matching or reconciliation capability (Truth Pack Δ-01). Merchants cannot see who owes what, or tell claimed payment from verified payment (C14 §2; C15 §2). |
| Primary users | Owner (all credit and reconciliation decisions); Manager only within explicit, scoped Owner delegation (`16:FPDR-7`); Employee only as existing transaction permissions allow; Customer only as a purpose-limited participant receiving merchant-approved communication (`14-§14-*`, `15-§17-*`, `3-§11-6`). |
| Build Now in this mission | Credit-specific customer identification and linking on the shared SB-P-1.12 identity (`16:FPDR-1`); authoritative per-customer balances from Ledger facts; repayment; Owner-configured thresholds with warn-not-block; factual ageing and follow-up; merchant-controlled preparation of credit communication; gateway-first payment-evidence ingestion with merchant-upload review; deterministic, idempotent matching with ambiguity review; visible discrepancies; auditable correction and reconciliation decisions; Owner-controlled handling of excess repayment, including an optional separate customer advance kept until explicitly applied or refunded (`16:FPDR-10`); credit-specific Contract 03 completion. |
| Core boundary | Consumes SB-P-1.12 identity and authority, SB-P-1.13 conversation and AI, SB-P-1.14 Business Memory and SB-P-1.15 reminders and notifications as specifications; builds no parallel version. Every consequential financial write uses the one governed transactions-family path (`DTX`, PQ-2). No provider is selected or activated (`DPAY`). No out-of-app customer delivery before an approved channel (`DNTF`). |
| Assigned to later missions (Build Now, not Build Later) | 20 rows: SB-P-1.20 7, SB-P-1.17 / SB-P-1.18 3, SB-P-1.17 5, SB-P-1.18 3, SB-P-1.19 2 (Section 11.1). |
| Deferred from the initial channel set | Generic direct-bank API ingestion and standalone authenticated bank-email ingestion (`16:FPDR-9`): recorded on `IN SCOPE` rows `15-§5-1` (branch), `15-§5-2`, `15-§1-2`, with no mission assigned (Section 11.6). |
| Rejected | Hard credit blocking by default; underwriting or lending scores; public customer reputation; confrontational or autonomous collection; guessing ambiguous matches; duplicate revenue; unauthenticated evidence treated as authoritative; every Build Plan §16 and GPCV §9 rejection (Sections 10.3, 11.3). |
| Stage result sought | A Mission Control-reviewable, source-traceable Product Blueprint through Section 19, assembled by reference to the canonical 555-row FCTM and `16:FPDR-1` to `16:FPDR-9`. |

## 1. Mission Overview

### Purpose

Complete the relationship among credit, repayment, payment evidence and reconciliation without turning uncertainty into false truth (Build Plan §10.5 product outcome, `BP-§10.5-O`).

### Summary

SB-P-1.16 gives the merchant authoritative knowledge of who owes what (Contract 14, Smart Credit Awareness) and of what has actually been paid (Contract 15, Payment Verification & Bank Reconciliation), on top of the four-state Ledger and Business Memory that SB-P-1.14 specifies (Contract 03, credit-specific completion; Build Plan §10.3 engineering correction, `BP-§10.3-C2`). It reuses the shared foundations of SB-P-1.12 to SB-P-1.15 and adds none of its own beyond the credit and payment-evidence domain.

### Mission Philosophy

Build Plan §10.5 exit principle, by reference (`BP-§10.5-X`): Smart Business helps the merchant know who owes what and what has actually been paid, but never pretends uncertain money is settled or makes credit decisions for the merchant. Smart Credit is an awareness and memory capability, not an autonomous credit-control authority (`14-§1-2`). Payment evidence is evidence, not payment truth, until verified and linked (C15 §1, §3).

## 2. Domain

### Customer Credit, Repayment, Payment Evidence and Reconciliation

The mission's domain is the merchant's receivables relationship with identified customers (credit given, repayment received, ageing and follow-up awareness) and the verification of payments against authoritative evidence, with reconciliation that links evidence to existing business records without duplicating revenue or silently rewriting facts (C14 §1; C15 §1).

### Relationship to Other Domains

| Domain | Relationship | Source |
|---|---|---|
| Authority and identity (SB-P-1.12) | Owns the shared merchant-scoped customer identity; this mission builds credit-specific identification, resolution and linking on it (`16:FPDR-1`); every read and action obeys the one permission model | `22-§5-5`; C21; `D12` |
| Conversation and AI (SB-P-1.13) | Credit and payment interactions run through the shared kernel and Human Language Layer; confirmations bind exactly | C24 §21; C9 §12; `D13` |
| Business Memory (SB-P-1.14) | Four-state Ledger with credit and repayment facts; this mission computes balances from it and adds no second credit database | C03; `14:FPDR-1`, `14:FPDR-4`; `D14` |
| Reminders, notifications, Ask CFO, Daily Intelligence (SB-P-1.15) | Credit follow-up reuses the Reminder Engine; Ask CFO and Daily Intelligence read authoritative balances once demonstrated, replacing the qualified answer only for demonstrated data (DC-16) | `BP-§6.5-1`; `15:FDB-3`; `D15` |
| Supplier identity, directory and search (SB-P-1.17 / SB-P-1.18) | Richer directory-indexed search and the general Ledger integration with Customer/Supplier identity stay there (`BP-§10.3-S2`, `3-§15-7`; MC-145) | Build Plan §10.3; `D17`, `D18` |
| Orders, delivery and COD (SB-P-1.18) | COD and order-delivery evidence and order-side credit linkage depend on SB-P-1.18 | C15 §15; C14 §13; `D18` |
| WhatsApp (SB-P-1.20) | Approved outbound channel for customer communication; none before it (`DNTF`) | `16:FPDR-8`; Build Plan §9 |
| POS closing cash (C13 §10) and subscription billing (C18 §15) | Adjacent domains kept distinct in naming, data and permissions (DC-14) | MC-101 L.3 |

## 3. Mission Objective

Deliver, by reference to the FCTM, every `IN SCOPE` obligation of Contracts 14 and 15, the credit-specific Contract 03 rows assigned here, and Build Plan §10.5, within the boundaries of `16:FPDR-1` to `16:FPDR-9`, so that Founder Scenarios A and B and the approved experience anchors can be demonstrated once the upstream dependencies exist (Section 15).

## 4. Business Purpose

Neighborhood merchants extend informal credit on trust and memory; small balances accumulate, repayments are not linked correctly and prior credit is forgotten (C14 §2). Payment evidence (UPI, bank and card evidence, bank notifications, screenshots or receipts, cash and COD events) arrives separately from Ledger entries, so the product can either falsely trust an unverified claim or create duplicate revenue (C15 §2). This mission turns that into factual credit awareness and evidence-based verification, while every credit and financial decision stays with the Owner (Build Plan §10.5; C14 §3; C15 §3).

## 5. Product Truth Alignment

| Principle | Source | Realized by |
|---|---|---|
| AI Assistant, Not AI Judge; warn, do not block | Source 11 Smart Credit Awareness; C14 §3, §9, §21; Build Plan §16; GPCV §9 | `16:FPDR-4`; Sections 8.3, 10.3 |
| Human decision ownership; Owner-reserved credit authority | C14 §9, §14; C15 §19; Build Plan §10.5 Scenario A | `16:FPDR-7`, `16:FPDR-10`; Sections 8.3, 8.7 |
| Evidence is not payment truth; never guess | C15 §1, §3, §5 p2, §9, §24 | `16:FPDR-3`, `16:FPDR-6`, `16:FPDR-9`; Sections 8.4, 8.5 |
| No duplicate revenue or repayment; exactly-once financial meaning | C15 §8, §12; C14 §7; Build Plan §10.5 Scenario B | Section 8.5; DC-04, DC-05; `16:FPDR-10` (an advance is neither revenue nor repayment) |
| Dignity and privacy for customers | C14 §19; C15 §22 | `16:FPDR-8`; Section 8.8 |
| One foundation, reused | C14 §20; C15 §23; Build Plan §6 | Section 8.9 |
| Smart Business works without WhatsApp | Build Plan §8 | `BP-§8-1`; Section 8.7 |

## 6. User Value

- **Owner:** knows who owes how much and since when, with factual context against the Owner's own threshold; can proceed, override or decline a credit sale; sees which payments are verified, mismatched, unlinked or ambiguous, and decides ambiguous matches (C14 §5, §8, §9; C15 §4, §9; Build Plan §10.5 Scenarios A and B). Decides what happens to an excess payment, including keeping it as a separate customer advance that the Owner later applies or refunds explicitly (`16:FPDR-10`).
- **Manager:** only the credit and reconciliation capabilities the Owner explicitly delegates, within assigned scope (`16:FPDR-7`). No customer-advance authority (`16:FPDR-10`).
- **Employee:** records only what existing transaction permissions allow; gains no credit, reconciliation or intelligence authority from this mission (`16:FPDR-7` §5), and no authority over excess payments or customer advances (`16:FPDR-10`).
- **Customer:** respectful, merchant-approved communication only, with no disclosure to unrelated people (C14 §10, §14, §19; `16:FPDR-8`).

## 7. Core Deliverables

| Deliverable | Section | Draft workstream (MC-97 §4, nonfinal) |
|---|---|---|
| Customer credit identity and principles | 8.1 | WS-A |
| Credit facts, recording, repayment and authoritative balances | 8.2 | WS-A |
| Thresholds, warn-not-block, ageing and follow-up | 8.3 | WS-B |
| Payment verification states, evidence sources and ingestion | 8.4 | WS-C |
| Matching, ambiguity, mismatch, idempotency and reversals | 8.5 | WS-C, WS-D |
| Credit, payment, COD and intelligence relationships | 8.6 | WS-A to WS-D |
| Users, permissions, confirmation, language and channels | 8.7 | WS-E |
| Corrections, audit, errors, failure containment, privacy and dignity | 8.8 | WS-E |
| Shared foundations, non-goals and superseded behaviour | 8.9 | all |
| Acceptance, completion gates and mission outcome accounting | 8.10 | all |

The workstream register remains a draft until Stage 13.

## 8. Detailed Functional Scope

Each subsection names its governing sources and lists every `IN SCOPE` FCTM row it realizes. Requirement text is not restated: the row pointer and its source section are the requirement. Each `IN SCOPE` row appears in exactly one subsection. Rows of kind `SCN`, `FRV`, `EXP` or `GATE` are also acceptance, experience or completion obligations in Section 15. Rows carrying a dependency code are also governed by Section 12. The grouping is document navigation only; it changes no FCTM row.

### 8.1 Customer Credit Identity, Purpose and Principles

Sources: Contract 14 §§1–4, §13; `16:FPDR-1`; `16:FPDR-2` (attribution of historical sales).

Mission design: Credit links to the shared merchant-scoped customer identity that SB-P-1.12 owns; SB-P-1.16 builds the credit-specific identification, resolution and linking workflows (`16:FPDR-1`). Name spellings, phone variants, duplicates and channel identities are resolved by merchant confirmation, never by silent matching (`14-§4-*`). Order-side linkage is demonstrated with SB-P-1.18 (`14-§13-1`, `D18`). Directory-indexed search stays with SB-P-1.17 / SB-P-1.18 (Section 11.1).

**FCTM rows realized here (19 `IN SCOPE`):**

- Contract 14 (19): `14-§1-1`, `14-§1-2`, `14-§2-8`, `14-§3-1`, `14-§3-2`, `14-§3-3`, `14-§3-4`, `14-§3-5`, `14-§3-6`, `14-§3-7`, `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§13-1`, `14-§13-2`, `14-§13-3`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (1):** `14-§1-1`

### 8.2 Credit Facts, Recording, Repayment and Authoritative Balances

Sources: Contract 14 §§5–7; Contract 03 §9, §15 (credit slices); Build Plan §10.3 engineering correction, §10.5 work areas 1–2; `14:FPDR-1`, `14:FPDR-4`; `16:FPDR-2`; `16:FPDR-10`.

Mission design: Credit facts, recording and repayment live in the SB-P-1.14 four-state Ledger; the authoritative per-customer balance is computed from them, with no separate customer-credit database (`14-§5-*`, `14-§6-*`, `14-§7-*`; DC-07). A repayment reduces the correct credit relationship and may settle a credit-method sale (`14:FPDR-4`). Historical credit-method sales stay visibly unattributed until an explicit, audited Owner attribution, and are never reinterpreted (`16:FPDR-2`; `14:FPDR-1`). Authoritative owed-balance truth (`3-§9-12`) is this mission's. An excess repayment never commits automatically: the Owner is asked, and may keep the excess as a separate customer advance. The advance is a Ledger fact for the same customer, is not sales or income, is never silently netted against outstanding credit, and persists until the Owner explicitly applies it to a later credit or refunds it (`16:FPDR-10` D-1 to D-4). Received amounts are conserved: what was received equals what settled credit plus what is held (D-6). The advance's Ledger representation, application mechanism and refund semantics are engineering matters for Sections 20–21 and the EIS (Section 12.3).

**FCTM rows realized here (31 `IN SCOPE`):**

- Contract 14 (26): `14-§5-1`, `14-§5-2`, `14-§5-3`, `14-§5-4`, `14-§5-5`, `14-§5-6`, `14-§5-7`, `14-§5-8`, `14-§5-9`, `14-§5-10`, `14-§5-11`, `14-§5-12`, `14-§5-13`, `14-§6-1`, `14-§6-2`, `14-§6-3`, `14-§6-4`, `14-§6-5`, `14-§6-6`, `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-4`, `14-§7-5`, `14-§7-6`, `14-§7-7`
- Contract 3 (2): `3-§9-12`, `3-§15-8`
- Build Plan (3): `BP-§10.3-C2`, `BP-§10.5-W1`, `BP-§10.5-W2`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (1):** `3-§9-12`

### 8.3 Thresholds, Warn-Not-Block, Ageing and Owner Follow-up

Sources: Contract 14 §§8–10; Build Plan §6.5, §10.5 work areas 3–4; `16:FPDR-4`, `16:FPDR-5`, `16:FPDR-8`.

Mission design: Thresholds are Owner-configured, never a universal limit (`14-§8-*`). Exceeding one produces factual awareness; the Owner approves, declines, adjusts, grants grace, changes the threshold or reviews history, and the decision is recorded (`14-§9-*`; `16:FPDR-4`). "Overdue" requires an explicitly recorded due or expected date that has passed (`16:FPDR-5`). Owner follow-up reuses the SB-P-1.15 Reminder Engine (`BP-§6.5-1`, `D15`). Customer-facing collection communication is merchant-controlled preparation; delivery-dependent rows keep `DNTF` (`16:FPDR-8`).

**FCTM rows realized here (25 `IN SCOPE`):**

- Contract 14 (22): `14-§8-1`, `14-§8-2`, `14-§8-3`, `14-§8-4`, `14-§8-5`, `14-§8-6`, `14-§8-7`, `14-§9-1`, `14-§9-2`, `14-§9-3`, `14-§9-4`, `14-§9-5`, `14-§9-6`, `14-§9-7`, `14-§9-8`, `14-§9-9`, `14-§10-1`, `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`
- Build Plan (3): `BP-§6.5-1`, `BP-§10.5-W3`, `BP-§10.5-W4`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (1):** `14-§9-2`

### 8.4 Payment Verification States, Evidence Sources and Ingestion

Sources: Contract 15 §§1–6; Contract 22 §17 (payment/bank provider adapter); Contract 03 §15 (payment-verification slice); Build Plan §5.4, §10.5 work area 5; `16:FPDR-3`, `16:FPDR-6`, `16:FPDR-9`.

Mission design: Verification states are explicit and traceable; a verified part-payment and a payment-evidence mismatch are distinct (`15-§4-*`; `16:FPDR-3`). The initial channel set is gateway-first: authenticated gateway API/webhook evidence, gateway settlement and reconciliation evidence, and merchant-uploaded evidence that requires review and is never provider verification (`16:FPDR-6`). Generic direct-bank API ingestion and standalone authenticated bank-email ingestion are deferred from that set with no mission assigned; their rows stay `IN SCOPE` and are traced in Section 11.6 (`16:FPDR-9`). `15-§5-4` (verified settlement files, including bank-side files) is preserved in full. Ingestion is adapter-based and provider-agnostic; no provider is selected or activated (`22-§17-3`, `BP-§5.4-1`; DC-13; `DPAY`).

**FCTM rows realized here (42 `IN SCOPE`):**

- Contract 15 (38): `15-§1-1`, `15-§1-2`, `15-§2-8`, `15-§3-1`, `15-§3-2`, `15-§3-3`, `15-§3-4`, `15-§3-5`, `15-§3-6`, `15-§3-7`, `15-§4-1`, `15-§4-2`, `15-§4-3`, `15-§4-4`, `15-§4-5`, `15-§4-6`, `15-§4-7`, `15-§4-8`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `15-§6-1`, `15-§6-2`, `15-§6-3`, `15-§6-4`, `15-§6-5`, `15-§6-6`, `15-§6-7`, `15-§6-8`, `15-§6-9`, `15-§6-10`, `15-§6-11`, `15-§6-12`
- Contract 3 (1): `3-§15-9`
- Contract 22 (1): `22-§17-3`
- Build Plan (2): `BP-§5.4-1`, `BP-§10.5-W5`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (1):** `15-§1-1`

### 8.5 Matching, Ambiguity, Mismatch, Unlinked Evidence, Idempotency and Reversals

Sources: Contract 15 §§7–13; Contract 10 §17 (clarification); Build Plan §10.5 work areas 6–11; `16:FPDR-3`, `16:FPDR-6`.

Mission design: Matching is deterministic and explainable; a strong match verifies the existing record and creates no new transaction (`15-§7-*`, `15-§8-*`). Plausible multiple candidates are shown for authorized human review and never guessed (`15-§9-*`, `10-§17-5`; DC-06). Mismatches and unlinked evidence stay visible (`15-§10-*`, `15-§11-*`). Repeated events, uploads or confirmed links are idempotent (`15-§12-*`; DC-05). Refunds, reversals, disputes and chargebacks preserve history and never silently rewrite the Ledger (`15-§13-*`; `16:FPDR-6` §6).

**FCTM rows realized here (49 `IN SCOPE`):**

- Contract 15 (42): `15-§7-1`, `15-§7-2`, `15-§7-3`, `15-§7-4`, `15-§7-5`, `15-§7-6`, `15-§7-7`, `15-§7-8`, `15-§7-9`, `15-§7-10`, `15-§8-1`, `15-§8-2`, `15-§8-3`, `15-§8-4`, `15-§8-5`, `15-§8-6`, `15-§8-7`, `15-§9-1`, `15-§9-2`, `15-§9-3`, `15-§9-4`, `15-§9-5`, `15-§9-6`, `15-§10-1`, `15-§10-2`, `15-§10-3`, `15-§10-4`, `15-§10-5`, `15-§11-1`, `15-§11-2`, `15-§11-3`, `15-§11-4`, `15-§11-5`, `15-§12-1`, `15-§12-2`, `15-§12-3`, `15-§12-4`, `15-§12-5`, `15-§12-6`, `15-§13-1`, `15-§13-2`, `15-§13-3`
- Contract 10 (1): `10-§17-5`
- Build Plan (6): `BP-§10.5-W6`, `BP-§10.5-W7`, `BP-§10.5-W8`, `BP-§10.5-W9`, `BP-§10.5-W10`, `BP-§10.5-W11`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (0):** none

### 8.6 Credit, Payment, COD and Intelligence Relationships

Sources: Contract 14 §§11–12; Contract 15 §§14–16; Build Plan §11; `15:FDB-3`.

Mission design: Verified repayment evidence links to the correct customer credit relationship (`15-§14-*`). COD and order-delivery evidence is demonstrated with SB-P-1.18 (`15-§15-*`, `D18`). Ask CFO and Daily Intelligence read authoritative balances and verification states through their existing read paths; the SB-P-1.15 qualified answer is replaced only for data this mission demonstrates (`14-§11-*`, `14-§12-*`, `15-§16-*`; DC-16).

**FCTM rows realized here (29 `IN SCOPE`):**

- Contract 14 (11): `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§11-5`, `14-§12-1`, `14-§12-2`, `14-§12-3`, `14-§12-4`, `14-§12-5`, `14-§12-6`
- Contract 15 (17): `15-§14-1`, `15-§14-2`, `15-§14-3`, `15-§14-4`, `15-§15-1`, `15-§15-2`, `15-§15-3`, `15-§15-4`, `15-§15-5`, `15-§15-6`, `15-§15-7`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6`
- Build Plan (1): `BP-§11-1`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (4):** `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`

### 8.7 Users, Permissions, Confirmation, Language and Channels

Sources: Contract 14 §§14–16; Contract 15 §§17–19; Contract 24 §21; Contract 9 §12; Contract 03 §11; Build Plan §8; `16:FPDR-7`, `16:FPDR-8`, `16:FPDR-10`.

Mission design: Keeping, applying or refunding a customer advance is an explicit Owner decision; no Manager or Employee authority over advances follows from this Blueprint (`16:FPDR-10`). The Owner holds consequential credit and financial authority; a Manager acts only within explicit, scoped, revocable Owner delegation checked at execution, and Employees and Customers gain no additional authority (`14-§14-*`, `15-§17-*`; `16:FPDR-7`). Credit overrides and payment-match resolution require exact confirmation (`24-§21-4`, `24-§21-5`; `15-§19-*`). Interactions use the shared Human Language Layer and work natively without WhatsApp (`9-§12-11`, `14-§15-*`, `15-§18-*`, `BP-§8-1`). Customers participate only in purpose-limited workflows (`3-§11-6`).

**FCTM rows realized here (28 `IN SCOPE`):**

- Contract 14 (12): `14-§14-1`, `14-§14-2`, `14-§14-3`, `14-§14-4`, `14-§15-1a`, `14-§15-2`, `14-§16-1`, `14-§16-2`, `14-§16-3`, `14-§16-4`, `14-§16-5`, `14-§16-6`
- Contract 15 (11): `15-§17-1`, `15-§17-2`, `15-§17-3`, `15-§17-4`, `15-§18-1a`, `15-§18-2`, `15-§19-1`, `15-§19-2`, `15-§19-3`, `15-§19-4`, `15-§19-5`
- Contract 3 (1): `3-§11-6`
- Contract 24 (2): `24-§21-4`, `24-§21-5`
- Contract 9 (1): `9-§12-11`
- Build Plan (1): `BP-§8-1`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (0):** none

### 8.8 Corrections, Audit, Errors, Failure Containment, Privacy and Dignity

Sources: Contract 14 §§17–19; Contract 15 §§20–22; `16:FPDR-8` §4; `16:FPDR-10`.

Mission design: Corrections preserve original records and audit history (`14-§17-*`). A repayment greater than the expected balance (`14-§18-3`) stops the uncertain write and asks the Owner; a correction that would leave a credit overpaid raises an exception and never creates an advance, refund or offset automatically (`16:FPDR-10` D-1, D-5). Errors and exceptions fail narrowly: uncertainty blocks only the uncertain link or write, never unrelated work (`14-§18-*`, `15-§20-*`, `15-§21-*`). Customer information is not disclosed to unrelated people and collection language preserves dignity (`14-§19-*`, `15-§22-*`). Evidence handling is non-destructive in definition; no retention or deletion rule is set (U-08; Section 12.3).

**FCTM rows realized here (41 `IN SCOPE`):**

- Contract 14 (19): `14-§17-1`, `14-§17-2`, `14-§17-3`, `14-§17-4`, `14-§17-5`, `14-§18-1`, `14-§18-2`, `14-§18-3`, `14-§18-4`, `14-§18-5`, `14-§18-6`, `14-§18-7`, `14-§18-8`, `14-§18-9`, `14-§19-1`, `14-§19-2`, `14-§19-3`, `14-§19-4`, `14-§19-5`
- Contract 15 (22): `15-§20-1`, `15-§20-2`, `15-§20-3`, `15-§20-4`, `15-§20-5`, `15-§21-1`, `15-§21-2`, `15-§21-3`, `15-§21-4`, `15-§21-5`, `15-§21-6`, `15-§21-7`, `15-§21-8`, `15-§21-9`, `15-§21-10`, `15-§21-11`, `15-§22-1`, `15-§22-2`, `15-§22-3`, `15-§22-4`, `15-§22-5`, `15-§22-6`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (0):** none

### 8.9 Shared Foundations, Non-goals and Superseded Behaviour

Sources: Contract 14 §§20, 21, 23; Contract 15 §§23, 24, 26; Build Plan §§5.3, 6.1–6.3, 11, 14.

Mission design: This mission reuses the shared Ledger, identity, permission, language, reminder, notification, Ask CFO, Daily Intelligence and audit/idempotency foundations and duplicates none (`14-§20-*`, `15-§23-*`). Non-goals and superseded behaviours are must-not checks (`14-§21-*`, `14-§23-*`, `15-§24-*`, `15-§26-*`). No UI, AI, reminder, scheduler or channel invents authority; consequential writes use the one governed path; Postgres stays authoritative (`BP-§6.1-1` to `BP-§6.3-1`).

**FCTM rows realized here (43 `IN SCOPE`):**

- Contract 14 (20): `14-§20-1`, `14-§20-2`, `14-§20-3`, `14-§20-4`, `14-§20-5`, `14-§20-6`, `14-§20-7`, `14-§20-8`, `14-§20-9`, `14-§20-10`, `14-§21-1`, `14-§21-2`, `14-§21-3`, `14-§21-4`, `14-§21-5`, `14-§21-6`, `14-§23-1`, `14-§23-2`, `14-§23-3`, `14-§23-4`
- Contract 15 (17): `15-§23-1`, `15-§23-2`, `15-§23-3`, `15-§23-4`, `15-§23-5`, `15-§23-6`, `15-§23-7`, `15-§23-8`, `15-§24-1`, `15-§24-2`, `15-§24-3`, `15-§24-4`, `15-§24-5`, `15-§24-6`, `15-§26-4`, `15-§26-5`, `15-§26-6`
- Build Plan (6): `BP-§5.3-1`, `BP-§6.1-1`, `BP-§6.2-1`, `BP-§6.3-1`, `BP-§11-5`, `BP-§14-1`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (0):** none

### 8.10 Acceptance, Completion Gates and Mission Outcome Accounting

Sources: Contract 14 §§22, 25; Contract 15 §§25, 28; Contract 03 §23; Build Plan §9, §10.5 (outcome, experience, scenarios, exit principle), §13.

Mission design: The contract acceptance scenarios, the three completion gates, the Build Plan outcome, experience statements, Founder scenarios and exit principle, the assignment lock and the Experience Verification Matrix rule. Completion gates are reported honestly: `14-§25-1` depends on the seven `DNTF` rows (F-5) and `15-§28-1` stays fully binding for the gateway-first delivery while F-7 is open (`16:FPDR-9` §6). Accepted within the limits of Section 15.4.

**FCTM rows realized here (42 `IN SCOPE`):**

- Contract 14 (12): `14-§22-1`, `14-§22-2`, `14-§22-3`, `14-§22-4`, `14-§22-5`, `14-§22-6`, `14-§22-7`, `14-§22-8`, `14-§22-9`, `14-§22-10`, `14-§22-11`, `14-§25-1`
- Contract 15 (13): `15-§25-1`, `15-§25-2`, `15-§25-3`, `15-§25-4`, `15-§25-5`, `15-§25-6`, `15-§25-7`, `15-§25-8`, `15-§25-9`, `15-§25-10`, `15-§25-11`, `15-§25-12`, `15-§28-1`
- Contract 3 (1): `3-§23`
- Build Plan (16): `BP-§9-2`, `BP-§9-AL`, `BP-§10.5-O`, `BP-§10.5-E1`, `BP-§10.5-E2`, `BP-§10.5-E3`, `BP-§10.5-E4`, `BP-§10.5-A1`, `BP-§10.5-A2`, `BP-§10.5-A3`, `BP-§10.5-B1`, `BP-§10.5-B2`, `BP-§10.5-B3`, `BP-§10.5-X`, `BP-§13-1`, `BP-§13-9`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (38):** `14-§22-1`, `14-§22-2`, `14-§22-3`, `14-§22-4`, `14-§22-5`, `14-§22-6`, `14-§22-7`, `14-§22-8`, `14-§22-9`, `14-§22-10`, `14-§22-11`, `14-§25-1`, `15-§25-1`, `15-§25-2`, `15-§25-3`, `15-§25-4`, `15-§25-5`, `15-§25-6`, `15-§25-7`, `15-§25-8`, `15-§25-9`, `15-§25-10`, `15-§25-11`, `15-§25-12`, `15-§28-1`, `3-§23`, `BP-§10.5-O`, `BP-§10.5-E1`, `BP-§10.5-E2`, `BP-§10.5-E3`, `BP-§10.5-E4`, `BP-§10.5-A1`, `BP-§10.5-A2`, `BP-§10.5-A3`, `BP-§10.5-B1`, `BP-§10.5-B2`, `BP-§10.5-B3`, `BP-§10.5-X`

## 9. UI / UX Expectations

By reference, not new design. Exact screens, labels and interaction design are later product-design and engineering matters within these limits:

- **Factual credit context.** Credit warnings show recorded outstanding balance, supported repayment history, credit age and comparison with the Owner-configured threshold, and disclose missing or uncertain information. No risk score, moral label or good/bad classification (`16:FPDR-4`; `14-§3-7`, `14-§19-5`, `14-§21-2`).
- **Warn, do not block.** The Owner can proceed, override, adjust or decline; the product does not refuse the sale by default (`14-§9-*`; `BP-§10.5-A3`; `BP-§10.5-E1`).
- **Excess is the Owner's choice.** When a payment exceeds the selected outstanding amount, the product shows the applicable amount and the excess and asks the Owner. A kept advance is shown as a separate fact for that customer, never as a reduced, negative or netted balance and never as income. Nothing applies, refunds or offsets it automatically (`16:FPDR-10`).
- **Overdue wording.** "Overdue" appears only where a due or expected payment date was explicitly recorded and has passed; otherwise the credit's age is shown (`16:FPDR-5`; `14-§5-6`).
- **Verification states are distinguishable.** A verified part-payment and a payment-evidence mismatch never share one label; the exact label that carries the Build Plan's "partially matched" wording is a design matter (`16:FPDR-3`; `BP-§10.5-E2`; `15-§4-*`).
- **Ambiguity is shown, not guessed.** Candidate matches are presented for authorized human review with the exact evidence and candidates bound to the confirmation (`15-§9-*`; `BP-§10.5-B1`, `-B2`).
- **Truthful coverage.** The product states that gateway evidence covers payments processed through the merchant's connected gateway, that direct bank transfers and direct UPI outside it are not automatically verified, and that merchant uploads support review but are not provider verification. No universal bank or UPI reconciliation, bank-account connectivity or bank-email coverage is implied (`16:FPDR-6` §4; `16:FPDR-9` §7).
- **Credit communication is prepared, not sent.** Drafts are respectful and factual; the merchant reviews recipient, content and figures before approval; preparation or approval is never shown as sent or delivered (`16:FPDR-8` §§1–3).
- **Manager surfaces show only delegated scope.** No merchant-facing grant interface is assumed while R15-11 is open (`16:FPDR-7` §7; DC-09).

## 10. Business Rules

### 10.1 Founder decisions (by reference)

The ten decisions govern this Blueprint: `16:FPDR-1` to `16:FPDR-9` are canonical in the Founder Product Decision Record (blob `30b19a80`), entries 2.1 to 2.9, and `16:FPDR-10` in its own record (blob `bd5a5f0c`), entry 2.10. Their full wording is not reproduced. The quoted sentences below are verbatim; where a summary is given, the record prevails. "Rows citing it" lists the FCTM rows whose Founder-decision cell carries the decision.

**`16:FPDR-1` — Q1(a) Shared customer identity ownership** (Option A; decision record entry 2.1)

> SB-P-1.12 retains ownership of the shared identity foundation. SB-P-1.16 is responsible for the credit-specific customer identification, resolution and linking workflows required by Contract 14.
>
> Ambiguous customer identity must be resolved through merchant confirmation. Smart Business must not silently match names or create duplicate customer identities or financial transactions.

Applied in: Sections 2, 8.1, 8.2, 11.1 (`BP-§10.3-S2`), 11.2 (`22-§5-5`). Rows citing it (20): `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§5-1`, `14-§13-1`, `14-§18-1`, `14-§20-2`, `14-§22-1`, `14-§22-3`, `15-§7-5`, `15-§14-3`, `15-§23-2`, `15-§25-6`, `3-§9-12`, `22-§5-5`, `BP-§10.3-S2`, `BP-§10.5-W1`.

**`16:FPDR-2` — Q1(b) Historical credit-method sale attribution** (Option A; decision record entry 2.2)

> Until attribution is confirmed, these historical sales must remain visibly unattributed and must not be silently included in an identified customer's authoritative balance.
>
> The original Ledger transaction identity and audit history must be preserved. Attribution must not create any duplicate sale, income, repayment or financial entry.

Applied in: Sections 8.2, 15.4. Rows citing it (8): `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§22-1`, `3-§9-12`.

**`16:FPDR-3` — Q2 "Partially matched" meaning** (Option C; decision record entry 2.3)

> Smart Business must not use the same merchant-facing label to imply that both situations have the same verification status.
>
> A legitimate part-payment must not be treated as a mismatch solely because it is less than the full amount owed.

Applied in: Sections 8.4, 8.5, 9, 15.4. Rows citing it (10): `15-§4-1`, `15-§4-2`, `15-§4-3`, `15-§4-4`, `15-§4-5`, `15-§4-6`, `15-§4-7`, `15-§4-8`, `BP-§10.5-W10`, `BP-§10.5-E2`.

**`16:FPDR-4` — Q3(a) Factual credit awareness** (Option A; decision record entry 2.4)

> The system must not invent predictive customer risk scores, assign moral or trustworthiness labels, or classify customers as good or bad based on incomplete financial information.
>
> Smart Business may provide factual awareness when an Owner-configured threshold is exceeded, but must not impose an autonomous hard credit block by default or independently approve or reject a customer's request for credit.

Applied in: Sections 8.3, 9, 15.4. Rows citing it (13): `14-§3-7`, `14-§9-1`, `14-§9-2`, `14-§9-3`, `14-§9-4`, `14-§9-5`, `14-§9-6`, `14-§9-7`, `14-§9-8`, `14-§9-9`, `14-§19-5`, `BP-§10.5-W4`, `BP-§10.5-A2`.

**`16:FPDR-5` — Q3(b) Overdue status without a due date** (Option A; decision record entry 2.5)

> I approve that Smart Business may classify an outstanding customer credit balance as overdue only when an applicable due or expected payment date has been explicitly recorded and that date has passed while a corresponding unpaid balance remains.
>
> Recording a due or expected payment date is optional. Smart Business must not require every merchant or every credit transaction to have one.

Applied in: Sections 8.3, 9, 15.4. Rows citing it (3): `14-§5-6`, `BP-§10.5-W3`, `BP-§10.5-A1`.

**`16:FPDR-6` — Q4 Phase 1 payment-evidence capabilities (gateway-first)** (Option A; decision record entry 2.6)

> Gateway evidence must be authenticated and bound to the correct merchant and provider account. Provider payment status must remain distinguishable from the separate question of whether the event matches an existing Smart Business sale or repayment.
>
> Merchant-uploaded evidence must not independently establish provider-authenticated payment verification.
>
> No particular payment gateway, bank or commercial service is selected by this Founder decision.

Applied in: Sections 8.4, 8.5, 9, 12.4, 15.4. Rows citing it (15): `15-§1-2`, `15-§3-7`, `15-§4-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§13-1`, `15-§21-10`, `15-§25-12`, `BP-§5.4-1`, `BP-§10.5-W5`.

**`16:FPDR-7` — Q5 Manager delegation (Scoped Reconciliation Manager)** (Option B; decision record entry 2.7)

> A Manager shall not obtain customer-credit visibility, repayment authority, payment-evidence access or reconciliation privileges merely by holding the Manager role.
>
> Credit-threshold configuration, credit-policy overrides, decisions to grant or refuse additional customer credit, grace decisions and other consequential credit or financial-policy approvals remain with the Owner.
>
> It does not silently approve or close the outstanding SB-P-1.15 R15-11 permission decision.

Applied in: Sections 6, 8.7, 9, 12.3. Rows citing it (2): `14-§14-2`, `15-§17-2`.

**`16:FPDR-8` — Q6 Merchant-controlled customer credit communication** (Option A; decision record entry 2.8)

> SB-P-1.16 shall not autonomously deliver customer-facing credit messages or send messages through an unapproved channel.
>
> These obligations must not be marked complete merely because message preparation or approval has been defined.

Applied in: Sections 8.3, 8.7, 9, 15.4. Rows citing it (10): `14-§10-1`, `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `14-§14-4`, `14-§22-9`, `21-§4-5`, `21-§13-2`.

**`16:FPDR-9` — F-1 Source 18 T7 bounded payment-evidence channel deferral** (Option A; decision record entry 2.9)

> I approve an explicit, bounded deferral of standalone authenticated bank-email ingestion and generic direct-bank API ingestion from the selected initial Phase 1 payment-evidence channel set of SB-P-1.16.
>
> Contract 15 §28 remains fully binding for the selected gateway-first delivery.

Applied in: Sections 8.4, 11.6, 12.3, 16. Rows citing it (3): `15-§1-2`, `15-§5-1`, `15-§5-2`.

**`16:FPDR-10` — OQ-01 Excess repayment and customer advance** (combination of options A and B; decision record entry 2.10)

> a combination of options A and B
>
> MC-199 Founder clarification for OQ-01: Retain Owner-confirmed excess as a separate customer advance until explicitly applied or refunded. Record the Founder direction with T3 and upstream Ledger-contract screening; do not change canonical files yet.

Approved product behaviour (the Founder answered "yes" to MC-205's question approving D-1 to D-6; the technical model and implementation are not approved):

> D-1 Excess repayment stops automatic financial commitment and requests Owner clarification
> D-2 The Owner may explicitly retain the excess as a separate customer advance
> D-3 The advance persists until explicit Owner-authorized application or refund
> D-4 No automatic income recognition, offset, refund or AI decision
> D-5 No automatic advance resulting from historical corrections
> D-6 Permission, audit, idempotency and amount-conservation requirements are preserved

Applied in: Sections 5, 6, 8.2, 8.7, 8.8, 9, 12.3, 13, 14, 15.4, 15.5, 15.6, 16. Rows citing it (26): `14-§18-3`, `14-§7-2`, `14-§7-3`, `14-§7-4`, `14-§7-5`, `14-§7-6`, `14-§5-7`, `14-§5-8`, `3-§9-12`, `14-§21-6`, `15-§11-5`, `15-§14-1`, `15-§14-2`, `15-§14-3`, `14-§22-2`, `BP-§10.5-E4`, `BP-§10.5-X`, `14-§3-1`, `14-§3-5`, `14-§3-6`, `14-§14-1`, `14-§17-1`, `14-§17-3`, `15-§8-4`, `15-§11-4`, `BP-§6.2-1`. FIN-01's recommended representation (a customer-scoped `credit` with direction `owed_by_business`, an advance-application relation, refund as `repayment`) is provisional engineering and is not part of this decision.

Upstream decisions applied by reference, unchanged: `14:FPDR-1`, `14:FPDR-3`, `14:FPDR-4` (SB-P-1.14) and `15:FDB-3` (SB-P-1.15), as cited in the FCTM Founder-decision and evidence cells.

### 10.2 Standing rules by reference

The following `IN SCOPE` rule and principle rows (59 rows) are business rules of this mission. Each is realized in its Section 8 subsection.

- Contract 14 (20): `14-§1-2`, `14-§2-8`, `14-§3-1`, `14-§3-2`, `14-§3-3`, `14-§3-4`, `14-§3-5`, `14-§3-6`, `14-§7-1`, `14-§8-2`, `14-§20-1`, `14-§20-2`, `14-§20-3`, `14-§20-4`, `14-§20-5`, `14-§20-6`, `14-§20-7`, `14-§20-8`, `14-§20-9`, `14-§20-10`
- Contract 15 (22): `15-§1-2`, `15-§2-8`, `15-§3-1`, `15-§3-2`, `15-§3-3`, `15-§3-4`, `15-§3-5`, `15-§3-6`, `15-§3-7`, `15-§4-8`, `15-§8-7`, `15-§12-6`, `15-§13-3`, `15-§15-1`, `15-§23-1`, `15-§23-2`, `15-§23-3`, `15-§23-4`, `15-§23-5`, `15-§23-6`, `15-§23-7`, `15-§23-8`
- Contract 3 (2): `3-§15-8`, `3-§15-9`
- Contract 22 (1): `22-§17-3`
- Build Plan (14): `BP-§5.3-1`, `BP-§5.4-1`, `BP-§6.2-1`, `BP-§6.3-1`, `BP-§6.5-1`, `BP-§8-1`, `BP-§9-2`, `BP-§9-AL`, `BP-§10.3-C2`, `BP-§11-1`, `BP-§11-5`, `BP-§13-1`, `BP-§13-9`, `BP-§14-1`

### 10.3 Must-not rows

The following `IN SCOPE` must-not rows (59 rows) are checked as "must not appear" in this mission's deliverable. The Build Plan §16 and GPCV §9 rejections are in Section 11.3.

- Contract 14 (29): `14-§3-7`, `14-§7-5`, `14-§8-7`, `14-§9-1`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `14-§11-5`, `14-§12-6`, `14-§13-2`, `14-§16-6`, `14-§17-2`, `14-§17-3`, `14-§17-4`, `14-§17-5`, `14-§19-3`, `14-§19-4`, `14-§19-5`, `14-§21-1`, `14-§21-2`, `14-§21-3`, `14-§21-4`, `14-§21-5`, `14-§21-6`, `14-§23-1`, `14-§23-2`, `14-§23-3`, `14-§23-4`
- Contract 15 (29): `15-§5-8`, `15-§7-9`, `15-§8-4`, `15-§9-1`, `15-§10-3`, `15-§11-5`, `15-§12-2`, `15-§12-3`, `15-§12-4`, `15-§12-5`, `15-§13-2`, `15-§14-2`, `15-§14-3`, `15-§14-4`, `15-§15-7`, `15-§16-6`, `15-§17-4`, `15-§18-2`, `15-§20-5`, `15-§22-6`, `15-§24-1`, `15-§24-2`, `15-§24-3`, `15-§24-4`, `15-§24-5`, `15-§24-6`, `15-§26-4`, `15-§26-5`, `15-§26-6`
- Build Plan (1): `BP-§6.1-1`

## 11. Out of Scope

This section accounts for every FCTM row that is not `IN SCOPE`: 20 `ASSIGNED TO LATER MISSION`, 129 `DELEGATED`, 32 `NOT APPLICABLE`, 22 `OUT OF BUILD SCOPE`, 3 `UNRESOLVED FOUNDER DECISION` — 206 rows. Dispositions, owning missions, build commitments and citations are copied from the canonical FCTM without change. Each row is **still committed — not in this mission**, with its owning mission or preserved classification. No `BUILD NOW` row becomes `BUILD LATER`. Section 11.6 adds the `IN SCOPE` rows that carry the bounded `16:FPDR-9` deferral; it changes no disposition.

### 11.1 Assigned to later missions — still committed, not in this mission (20 rows)

Each row keeps its approved build commitment and commercial classification. Assignment is mission scheduling, not `BUILD LATER`. `BP-§10.3-S2` keeps its inherited assignment to SB-P-1.17 / SB-P-1.18 under `16:FPDR-1`; `3-§15-7` stays with SB-P-1.17 / SB-P-1.18 (MC-145). Distribution: SB-P-1.20 7, SB-P-1.17 / SB-P-1.18 3, SB-P-1.17 5, SB-P-1.18 3, SB-P-1.19 2.

#### `SB-P-1.20` (7 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 14-§15-1b | C14@16914a83 | §15 p1 (WhatsApp channel slice): Credit input/review should work through WhatsApp and Conversation Workspace in English, M… | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109 (BP §9 row 9) | — |
| 15-§18-1b | C15@632f3402 | §18 p1 (WhatsApp channel slice): Authorized review/clarification may occur through Workspace/WhatsApp where secure and sui… | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109 (BP §9 row 9) | — |
| 3-§19-13b | C3@d8c26c07 | §19 acceptance 13 (WhatsApp slice): identical business semantics across channels | ASSIGNED TO LATER MISSION | SB-P-1.20 | I-14 (3-§19-13b); assignment per FCTM-14 | — |
| 10-§14-4 | C10@5c145ed7 | §14 b4: during WhatsApp failure: payment reconciliation continues | ASSIGNED TO LATER MISSION | SB-P-1.20 | I-13 (10-§14-4); A-BP109 | — |
| 23-§16 | C23@2430e1c6 | §16 whole section: Outbound WhatsApp Communication (payment/credit awareness) | ASSIGNED TO LATER MISSION | SB-P-1.20 | A-BP109 (BP §9 row 9); MC101-L2 | — |
| 23-§20 | C23@2430e1c6 | §20 whole section: Retry and Idempotency (payment/credit updates) | ASSIGNED TO LATER MISSION | SB-P-1.20 | A-BP109; MC101-L2 | — |
| 23-§21 | C23@2430e1c6 | §21 whole section: WhatsApp Outage / Degradation (payment reconciliation continues) | ASSIGNED TO LATER MISSION | SB-P-1.20 | A-BP109; MC101-L2 | — |

#### `SB-P-1.17 / SB-P-1.18` (3 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 3-§9-3 | C3@d8c26c07 | §9 retrieve by customer or supplier — structured directory-indexed identity | ASSIGNED TO LATER MISSION | SB-P-1.17 / SB-P-1.18 | I-14 (3-§9-3); assignment per FCTM-14 | — |
| 3-§15-7 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Customer/Supplier identity | ASSIGNED TO LATER MISSION | SB-P-1.17 / SB-P-1.18 | I-14 (3-§15-7); assignment per FCTM-14 | — |
| BP-§10.3-S2 | BP@9dfdd924 | §10.3 structured Customer/Supplier-directory-indexed search after identities are established (later missions SB-P-1.17 / SB-P-1.18) | ASSIGNED TO LATER MISSION | SB-P-1.17 / SB-P-1.18 | I-14 (BP-§10.3-S2); assignment per FCTM-14 (A-BP103-S, Build Plan §10.3 search sequencing clarification); U-01 resolved by 16:FPDR-1: basic shared customer identity for credit is not deferred (22-§5-5 SB-P-1.12; C14 §4 SB-P-1.16) | 16:FPDR-1 |

#### `SB-P-1.17` (5 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 3-§15-10 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Stock / Supplier / Reorder Intelligence | ASSIGNED TO LATER MISSION | SB-P-1.17 | I-14 (3-§15-10); assignment per FCTM-14 | — |
| 3-§15-11 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: POS bridge where enabled | ASSIGNED TO LATER MISSION | SB-P-1.17 | I-14 (3-§15-11); assignment per FCTM-14 | — |
| 7-§3 | C7@65ad91b2 | §3 whole section: Supplier Management (supplier payment/credit relationship; adjacent workflow) | ASSIGNED TO LATER MISSION | SB-P-1.17 | I-12 (7-§3); A-BP106; MC101-L2 | — |
| 17-§4 | C17@7943f74a | §4 whole section: Workspace Layers (lists credit awareness) | ASSIGNED TO LATER MISSION | SB-P-1.17 | I-12 (17-§4); A-BP106; MC101-L3 downstream consumer of SB-P-1.16 data | — |
| 17-§6 | C17@7943f74a | §6 whole section: Financial / Business Summary (outstanding credit; payment/reconciliation state) | ASSIGNED TO LATER MISSION | SB-P-1.17 | I-12 (17-§6); A-BP106; MC101-L3 downstream consumer of SB-P-1.16 data | — |

#### `SB-P-1.18` (3 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 3-§15-12 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Smart Order & Delivery | ASSIGNED TO LATER MISSION | SB-P-1.18 | I-14 (3-§15-12); assignment per FCTM-14 | — |
| 3-§15-13 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Staff / HR where authorized | ASSIGNED TO LATER MISSION | SB-P-1.18 | I-14 (3-§15-13); assignment per FCTM-14 | — |
| 17-§10 | C17@7943f74a | §10 whole section: Order & Delivery Views (COD/payment issues) | ASSIGNED TO LATER MISSION | SB-P-1.18 | I-12 (17-§10); A-BP107; MC101-L3 downstream consumer | — |

#### `SB-P-1.19` (2 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 20-§11 | C20@56ed4d11 | §11 whole section: First Practical Win (verify/reconcile a payment where applicable) | ASSIGNED TO LATER MISSION | SB-P-1.19 | I-12 (20-§11); A-BP108; MC101-L3 downstream consumer | — |
| 20-§12 | C20@56ed4d11 | §12 whole section: First 24-hour Experience (first reminder/credit/payment action) | ASSIGNED TO LATER MISSION | SB-P-1.19 | I-12 (20-§12); A-BP108; MC101-L3 downstream consumer | — |

### 11.2 Delegated — owned elsewhere, consumed here (129 rows)

Owned by another contract or another mission's canonical FCTM; this mission consumes the locked specification or supplies data to it. Distribution: SB-P-1.14 59, SB-P-1.14 and others per FCTM-14 3, SB-P-1.15 28, SB-P-1.12 10, SB-P-1.13 11, SB-P-1.18 17, SB-P-1.19 1.

#### `SB-P-1.14` (59 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 3-§2 | C3@d8c26c07 | §2 Founder Problem Statement (whole section: b1, b2, b3, b4, b5, b6, b7, b8, p2, p3) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (FCTM-14 rows 3-§2-1…3-§2-2: SB-P-1.14 2) | — |
| 3-§3 | C3@d8c26c07 | §3 Lighthouse Principle (whole section: b1, b2, b3, b4, b5, b6, b7) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (FCTM-14 rows 3-§3…3-§3: SB-P-1.14 1) | — |
| 3-§4 | C3@d8c26c07 | §4 Core Business States (whole section: n1, n2, n3, n4, p2) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (FCTM-14 rows 3-§4-1…3-§4-6: SB-P-1.14 6) | 14:FPDR-1; 14:FPDR-4 |
| 3-§5 | C3@d8c26c07 | §5 Supported Input Paths (whole section: p1, b1, b2, b3, b4, p3, p5, p6, p7) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (FCTM-14 rows 3-§5-1…3-§5-10: SB-P-1.14 10) | — |
| 3-§6 | C3@d8c26c07 | §6 Immediate Confirmation (whole section: p1, b1, b2, b3, b4, b5, b6, b7, b8, p3) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (FCTM-14 rows 3-§6-1…3-§6-10: SB-P-1.14 10) | — |
| 3-§7 | C3@d8c26c07 | §7 Clarification Rules (whole section: p1, b1, b2, b3, b4, b5, b6, b7, p3) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (FCTM-14 rows 3-§7-1…3-§7-9: SB-P-1.14 9) | — |
| 3-§8 | C3@d8c26c07 | §8 Correction and Audit History (whole section: p1, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, p4) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (FCTM-14 rows 3-§8-1…3-§8-16: SB-P-1.14 16) | 14:FPDR-1; 14:FPDR-4 |
| 3-§9-1 | C3@d8c26c07 | §9 retrieve history by date or period | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§9-1) | — |
| 3-§9-2 | C3@d8c26c07 | §9 retrieve by customer or supplier — party/counterparty reference level | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§9-2) | — |
| 3-§9-4 | C3@d8c26c07 | §9 retrieve by category/purpose | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§9-4) | — |
| 3-§9-5 | C3@d8c26c07 | §9 retrieve by payment method | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§9-5) | — |
| 3-§9-6 | C3@d8c26c07 | §9 retrieve by amount range where useful | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§9-6) | — |
| 3-§9-7 | C3@d8c26c07 | §9 retrieve by credit/repayment state | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§9-7) | — |
| 3-§9-8 | C3@d8c26c07 | §9 retrieve by linked document | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§9-8) | — |
| 3-§9-9 | C3@d8c26c07 | §9 retrieve by product or stock relationship where available | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§9-9) | — |
| 3-§9-10 | C3@d8c26c07 | §9 example: spend on bakery supplies last month (purpose + period) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§9-10) | — |
| 3-§9-11 | C3@d8c26c07 | §9 example: payments to ABC Traders in August (counterparty + period) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§9-11) | — |
| 3-§9-13 | C3@d8c26c07 | §9 example: find the receipt for that mixer purchase (linked document) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§9-13) | — |
| 3-§9-14 | C3@d8c26c07 | §9 conversational and dashboard/report retrieval read the same underlying truth | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§9-14) | — |
| 3-§10 | C3@d8c26c07 | §10 Reports and Exports (whole section: b1, b2, b3, b4, b5, p2) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (FCTM-14 rows 3-§10-1…3-§10-9: SB-P-1.14 9) | — |
| 3-§11-1 | C3@d8c26c07 | §11 Owner: full authorized Ledger records, corrections and exports | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§11-1) | — |
| 3-§11-2 | C3@d8c26c07 | §11 Manager: delegated access only; not automatically Owner access | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§11-2) | — |
| 3-§11-3 | C3@d8c26c07 | §11 Employee/Staff: add or view only permitted operational records | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§11-3) | — |
| 3-§11-4 | C3@d8c26c07 | §11 Staff do not receive Owner profit intelligence, Ask CFO or unrestricted analytics by default | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§11-4) | — |
| 3-§11-5 | C3@d8c26c07 | §11 Customer/Supplier/Delivery Staff: no general Ledger access | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§11-5) | — |
| 3-§11-7 | C3@d8c26c07 | §11 every record remains business-scoped | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§11-7) | — |
| 3-§13 | C3@d8c26c07 | §13 Relationship to Ask CFO (whole section: p1, p2, p3) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (FCTM-14 rows 3-§13-1…3-§13-3: SB-P-1.15 3) | — |
| 3-§15-1 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Universal Document Intelligence | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§15-1) | — |
| 3-§15-2 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Human Language Layer | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§15-2) | — |
| 3-§15-3 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Basic Voice / Voice Plus | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§15-3) | — |
| 3-§15-4 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Permission Engine | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§15-4) | — |
| 3-§15-5 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Conversation Engine | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§15-5) | — |
| 3-§16 | C3@d8c26c07 | §16 AI Behaviour (whole section: b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (FCTM-14 rows 3-§16-1…3-§16-14: SB-P-1.14 14) | — |
| 3-§17 | C3@d8c26c07 | §17 Failure and Exception Principles (whole section: b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, p2) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (FCTM-14 rows 3-§17-1…3-§17-11: SB-P-1.14 11) | — |
| 3-§19-1 | C3@d8c26c07 | §19 acceptance 1: text income/expense recording | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§19-1) | — |
| 3-§19-2 | C3@d8c26c07 | §19 acceptance 2: credit and repayment recording | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§19-2) | — |
| 3-§19-3 | C3@d8c26c07 | §19 acceptance 3: voice-created Ledger event | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§19-3) | — |
| 3-§19-4 | C3@d8c26c07 | §19 acceptance 4: image/document-created draft with preview/confirmation | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§19-4) | — |
| 3-§19-5 | C3@d8c26c07 | §19 acceptance 5: ambiguous-input clarification | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§19-5) | — |
| 3-§19-6 | C3@d8c26c07 | §19 acceptance 6: duplicate/retry protection | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§19-6) | — |
| 3-§19-7 | C3@d8c26c07 | §19 acceptance 7: correction with durable audit history | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§19-7) | — |
| 3-§19-8 | C3@d8c26c07 | §19 acceptance 8: period/party search | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§19-8) | — |
| 3-§19-9 | C3@d8c26c07 | §19 acceptance 9: receipt/document retrieval linkage | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§19-9) | — |
| 3-§19-10 | C3@d8c26c07 | §19 acceptance 10: permission-scoped staff contribution | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§19-10) | — |
| 3-§19-11 | C3@d8c26c07 | §19 acceptance 11: Owner-only financial intelligence boundary (Ledger slice; Ask CFO is SB-P-1.15) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§19-11) | — |
| 3-§19-12 | C3@d8c26c07 | §19 acceptance 12: CSV/Excel/PDF export consistency | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§19-12) | — |
| 3-§19-13a | C3@d8c26c07 | §19 acceptance 13 (Workspace slice): identical business semantics across channels | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§19-13a) | — |
| 3-§19-14 | C3@d8c26c07 | §19 acceptance 14: cross-business isolation | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§19-14) | — |
| 3-§20 | C3@d8c26c07 | §20 Non-goals / Rejected Historical Behaviour (whole section: b1, b2, b3, b4, b5, b6) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (FCTM-14 rows 3-§20-1…3-§20-6: SB-P-1.14 6) | — |
| 3-§22 | C3@d8c26c07 | §22 Implementation Dependency Rule (whole section: p1, p2) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (FCTM-14 rows 3-§22-1…3-§22-2: SB-P-1.14 2) | — |
| 22-§4-1 | C22@61e1bb91 | §4 p1; b2; b8: one authoritative business-memory model across features/channels (customers/credit, payments/reconciliation listed) | DELEGATED | SB-P-1.14 | L-DEL14; I-13 (22-§4-1); I-14 | — |
| 5-§5-6 | C5@80ac648e | §5 b6: receipt field: payment information where present | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (5-§5-6) | — |
| 5-§6-1 | C5@80ac648e | §6 p1: originals retained per approved storage/retention policy | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (5-§6-1); U-08 | 14:FPDR-2 |
| 5-§6-2 | C5@80ac648e | §6 p1: originals linked to the relevant business records | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (5-§6-2) | — |
| 25-§6-1 | C25@406ce089 | §6 b12: dependent features include payment/reconciliation evidence | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (25-§6-1) | — |
| 25-§17-5 | C25@406ce089 | §17 b4: legal/compliance retention needs may differ by object/domain | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (25-§17-5); U-08 | — |
| 25-§19-1 | C25@406ce089 | §19 b5: storage protects financial and compliance evidence (protected classes) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (25-§19-1) | — |
| 25-§17-4 | C25@406ce089 | §17 b3: cancellation/non-payment must not trigger uncontrolled destructive deletion by a fixed timer | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (25-§17-4); U-08 | — |
| BP-§11-3 | BP@9dfdd924 | §11 SB-P-1.14 Business Memory/UDI underpins later financial integrity | DELEGATED | SB-P-1.14 | L-DEL14; BP §11 | — |

#### `SB-P-1.14 and others per FCTM-14` (3 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 3-§12 | C3@d8c26c07 | §12 WhatsApp and Conversation Workspace (whole section: b1, b2, b3, p2, p3) | DELEGATED | SB-P-1.14 and others per FCTM-14 | L-DEL14; I-14 (FCTM-14 rows 3-§12-1…3-§12-5: SB-P-1.20 1, SB-P-1.14 4) | — |
| 3-§14 | C3@d8c26c07 | §14 Relationship to Daily Intelligence (whole section: b1, b2, b3, p2) | DELEGATED | SB-P-1.14 and others per FCTM-14 | L-DEL14; I-14 (FCTM-14 rows 3-§14-1…3-§14-2: SB-P-1.15 1, SB-P-1.14 1) | — |
| 3-§18 | C3@d8c26c07 | §18 Privacy and Integrity (whole section: p1, b1, b2, b3, b4, b5, b6) | DELEGATED | SB-P-1.14 and others per FCTM-14 | L-DEL14; I-14 (FCTM-14 rows 3-§18-1…3-§18-6: SB-P-1.14 5, SB-P-1.12 1) | — |

#### `SB-P-1.15` (28 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 3-§15-6 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Smart Reminder Engine | DELEGATED | SB-P-1.15 | L-DEL15; I-14 (3-§15-6) | — |
| 22-§11-4 | C22@61e1bb91 | §11 b4: reminder foundation use: credit follow-up | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (22-§11-4, consumer SB-P-1.16) | — |
| 22-§12 | C22@61e1bb91 | §12 whole section: Notification Foundation (whole section) | DELEGATED | SB-P-1.15 | L-DEL15; I-12 (22-§12-1 to -9); I-13 (22-§12) | 12:FPDR-1 |
| 22-§18-5 | C22@61e1bb91 | §18 b5: scheduler job type: sync/reconciliation | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (22-§18-5, consumer SB-P-1.16) | — |
| 2-§5-3 | C2@53635557 | §5 b2: data question: who owes more than ₹5,000? | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§5-3); 15:FDB-3 | 15:FDB-3 |
| 2-§5-13 | C2@53635557 | §5 b10: advisory question: how can I reduce outstanding credit? | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§5-13); 15:FDB-3 | 15:FDB-3 |
| 2-§11-3 | C2@53635557 | §11 b2: cross-feature intelligence: customer credit | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§11-3) | 15:FDB-3 |
| 2-§11-12 | C2@53635557 | §11 b11: cross-feature intelligence: payment verification | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§11-12) | — |
| 2-§12-4 | C2@53635557 | §12 b2: Ledger depth: customer credit | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§12-4) | 15:FDB-3 |
| 2-§12-7 | C2@53635557 | §12 b5: Ledger depth: payment evidence | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§12-7) | — |
| 2-§25-7 | C2@53635557 | §25 b7: acceptance (data questions): credit query | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§25-7) | 15:FDB-3 |
| 4-§3-3 | C4@ce940d25 | §3 b2: morning briefing: outstanding customer/supplier credit requiring awareness | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§3-3) | — |
| 4-§4-6 | C4@ce940d25 | §4 b5: pulse check: payment/credit exceptions | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§4-6) | — |
| 4-§5-3 | C4@ce940d25 | §5 b2: night closing: cash/payment awareness | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§5-3) | — |
| 4-§5-4 | C4@ce940d25 | §5 b3: night closing: credit and repayment movement | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§5-4) | — |
| 4-§6-3 | C4@ce940d25 | §6 b2: source of truth: Smart Credit Awareness | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§6-3) | — |
| 4-§6-4 | C4@ce940d25 | §6 b3: source of truth: Payment Verification | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§6-4) | — |
| 4-§11-4 | C4@ce940d25 | §11 b4: action continuation: review a payment match | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§11-4) | — |
| 11-§8-4 | C11@e802745a | §8 b4: cross-feature reuse: Smart Credit Awareness | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§8-4) | — |
| 11-§10-3 | C11@e802745a | §10 b2: consequential action example: mark customer payment received | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§10-3) | — |
| 2-§3-5 | C2@53635557 | §3 b4: <Owner> ask about cash, expenses, credits and other authorized business data | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§3-5) | — |
| 2-§20-5 | C2@53635557 | §20 b7: natural business-term mixing (illustrative list incl. 'credit'; grouped p3 + b4–b11 upstream) | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§20-5) | — |
| 11-§4-7 | C11@e802745a | §4 b7: reminder model: related customer/supplier/employee/document/order/credit/compliance object | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§4-7) | — |
| 11-§9-1 | C11@e802745a | §9 b1: a reminder does not mean the payment happened | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§9-1) | — |
| 11-§9-5 | C11@e802745a | §9 b5: a reminder does not mean the customer paid | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§9-5) | — |
| 11-§9-7 | C11@e802745a | §9 p2: the actual business event is recorded through the governed feature service | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§9-7); SB-P-1.16 is the governed credit/payment service | — |
| 11-§22-6 | C11@e802745a | §22 n6: acceptance 6: reminder due does not create payment/event automatically | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§22-6) | — |
| BP-§11-4 | BP@9dfdd924 | §11 SB-P-1.15 Reminder/Automation underpins credit follow-up | DELEGATED | SB-P-1.15 | L-DEL15; BP §11 | — |

#### `SB-P-1.12` (10 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 22-§5-5 | C22@61e1bb91 | §5 b5: shared identity: customer | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (22-§5-5); SB-P-1.12 EIS-ID-03; U-01 (see BP-§10.3-S2) | 16:FPDR-1 |
| 22-§5-9 | C22@61e1bb91 | §5 b9: shared identity: external integration/provider references | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (22-§5-9) | — |
| 22-§14 | C22@61e1bb91 | §14 whole section: Audit / Human Context Foundation (whole section) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (22-§14-1 to -9); I-13 (22-§14) | — |
| 22-§15 | C22@61e1bb91 | §15 whole section: Idempotency / Duplicate Protection (single rule) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (22-§15) | — |
| 21-§4-5 | C21@f4a05d5c | §4 p9: Customer as a bounded external role (purpose-limited participant in customer-credit workflows) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§4-5); U-05 | 16:FPDR-8 |
| 21-§13-2 | C21@f4a05d5c | §13 b2: Customer sees their own order/delivery/credit communication | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§13-2); U-05 | 16:FPDR-8 |
| 21-§14 | C21@f4a05d5c | §14 whole section: Temporary / Purpose-limited Support Access (whole section) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§14-1 to -7); 15-§17 p4 | — |
| 17-§13 | C17@7943f74a | §13 whole section: Users and Permissions (visibility restriction) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§13-1 to -4); MC101-L2 | — |
| 17-§14 | C17@7943f74a | §14 whole section: Permission Enforcement (backend enforcement) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§14-1 to -7); MC101-L2 | — |
| BP-§11-2 | BP@9dfdd924 | §11 SB-P-1.12 Authority/Identity underpins all later role/permission behaviour | DELEGATED | SB-P-1.12 | L-DEL12; BP §11 | — |

#### `SB-P-1.13` (11 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 24-§9-1 | C24@0c1dcbb2 | §9 p1: AI receives only the minimum authorized context for the task | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (24-§9-1) | — |
| 24-§9-2 | C24@0c1dcbb2 | §9 b2; b10: possible context sources incl. customer/credit records and payment verification (consumed when owning domain exists) | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (24-§9-2); SB-P-1.16 supplies the credit and payment domains | — |
| 9-§6-2 | C9@649c55f3 | §6 p2: preserve meaning and tone for numbers, dates, quantities, credit | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (9-§6-2) | — |
| 9-§9-4 | C9@649c55f3 | §9 b3: clarify unclear whether money is paid or owed | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (9-§9-4) | — |
| 12-§4-1 | C12@6d48feff | §4 b1: Basic Voice supports Ledger transaction/credit/repayment input | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (12-§4-1) | — |
| 12-§7-5 | C12@6d48feff | §7 b5: clarify material uncertainty about payment state | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (12-§7-5) | — |
| 12-§7-6 | C12@6d48feff | §7 b6: clarify material uncertainty about credit vs repayment | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (12-§7-6) | — |
| 12-§21-1 | C12@6d48feff | §21 n1: acceptance 1: natural sale/expense/credit/repayment voice input | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (12-§21-1) | — |
| 12-§9-2 | C12@6d48feff | §9 b6: mixed Kerala business speech (illustrative vocabulary incl. 'credit') | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (12-§9-2) | — |
| 24-§6-2 | C24@0c1dcbb2 | §6 b9: intent classes (illustrative; includes payment/credit query) | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (24-§6-2) | — |
| 24-§25-5 | C24@0c1dcbb2 | §25 b4: careful handling of sensitive HR/customer/payment data | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (24-§25-5) | — |

#### `SB-P-1.18` (17 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 1-§16 | C1@b392c8cb | §16 whole section: COD and Payment Relationship (reuses shared financial-integrity foundation) | DELEGATED | SB-P-1.18 | L-DEL18; I-14 (1-§16); MC101-L2; BP §11 | — |
| 1-§5-4 | C1@b392c8cb | §5 b4: <Owner> set/confirm COD amounts | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§5-20 | C1@b392c8cb | §5 b18: <Delivery Staff> COD amount where applicable | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§9-9 | C1@b392c8cb | §9 b8: order draft: payment/COD information | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§9-17 | C1@b392c8cb | §9 b16: clarify when payment/COD amount is inconsistent | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§12-5 | C1@b392c8cb | §12 b5: COD amount reviewed where applicable | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§13-6 | C1@b392c8cb | §13 b5: Delivery Staff record COD collected amount | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§15-6 | C1@b392c8cb | §15 b5: delivery proof includes COD/payment evidence | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§17-7 | C1@b392c8cb | §17 b6: notification: payment/COD exception | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§21-11 | C1@b392c8cb | §21 b11: AI must not create payment facts without evidence | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§22-10 | C1@b392c8cb | §22 b10: business memory: COD/payment evidence/link | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§23-12 | C1@b392c8cb | §23 b12: reuse Payment Verification / Ledger services | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§24-12 | C1@b392c8cb | §24 b12: handle COD mismatch | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§24-14 | C1@b392c8cb | §24 b14: handle payment/linking failure | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§26-11 | C1@b392c8cb | §26 n11: acceptance 11: COD discrepancy remains visible and does not duplicate Ledger revenue | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§26-14 | C1@b392c8cb | §26 n14: acceptance 14: duplicate/retry does not create duplicate order/payment events | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§27-9 | C1@b392c8cb | §27 b9: dependency: Payment Verification / Ledger for financial closure | DELEGATED | SB-P-1.18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |

#### `SB-P-1.19` (1 row)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 19-§15 | C19@94aa6f24 | §15 whole section: Merchant-content Access Boundary (no routine browsing of credit/customer records) | DELEGATED | SB-P-1.19 | L-DEL19; I-14 (19-§15); 15-§17 p4 | — |

### 11.3 Out of build scope — must not appear (22 rows)

Build Plan §16 rejections and GPCV §9 rejections, preserved verbatim as `REJECT` / `REJECT FOR CURRENT CORE` and checked as "must not appear" in this mission's deliverable.

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| BP-§16-1 | BP@9dfdd924 | §16 rejection b1: Ask CFO as write-capable authority | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-2 | BP@9dfdd924 | §16 rejection b2: AI accusation/judgment of employees or customers | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-3 | BP@9dfdd924 | §16 rejection b3: continuous staff GPS surveillance by default | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-4 | BP@9dfdd924 | §16 rejection b4: automated wage punishment | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-5 | BP@9dfdd924 | §16 rejection b5: blind supplier procurement without valid Owner delegation | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-6 | BP@9dfdd924 | §16 rejection b6: hard credit blocking by default | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-7 | BP@9dfdd924 | §16 rejection b7: custom client-specific POS modification inside core | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-8 | BP@9dfdd924 | §16 rejection b8: marketplace behavior inside Smart Order & Delivery | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-9 | BP@9dfdd924 | §16 rejection b9: customer silence automatically invalidating otherwise sufficiently proven delivery | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-10 | BP@9dfdd924 | §16 rejection b10: duplicate channel-specific Business Memory | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-11 | BP@9dfdd924 | §16 rejection b11: duplicate channel-specific permission models | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-12 | BP@9dfdd924 | §16 rejection b12: separate AI brains per feature/channel | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-13 | BP@9dfdd924 | §16 rejection b13: model conversation history as permanent Business Memory | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-14 | BP@9dfdd924 | §16 rejection b14: uncontrolled binary-media concentration in Supabase for convenience | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-15 | BP@9dfdd924 | §16 rejection b15: provider URLs as permission authority/business identity | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-16 | BP@9dfdd924 | §16 rejection b16: destructive subscription-driven schema creation/deletion | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-17 | BP@9dfdd924 | §16 rejection b17: broad routine Super Admin access to merchant private data | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-18 | BP@9dfdd924 | §16 rejection b18: revival of '/survey' or obsolete domains/routes | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-19 | BP@9dfdd924 | §16 rejection b19: old Daily Intelligence timing that conflicts with the approved 7:00 AM / 10:30 AM / 10:00… | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-20 | BP@9dfdd924 | §16 rejection b20: independent Catalog product expansion | OUT OF BUILD SCOPE | SB-P-1.16 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| GPCV-§9-1 | GPCV@ee76d920 | §9 automatic hard customer-credit blocking by default — REJECT | OUT OF BUILD SCOPE | SB-P-1.16 | GPCV §9 (REJECT verbatim; must-not-appear; same behaviour as BP-§16-6, 14-§21-1) | — |
| GPCV-§9-10 | GPCV@ee76d920 | §9 embedded lending/underwriting inside current Smart Business core — REJECT FOR CURRENT CORE | OUT OF BUILD SCOPE | SB-P-1.16 | GPCV §9 (verbatim; must-not-appear); BP-§15-9 broader ecosystem unresolved | — |

### 11.4 Not applicable — not an obligation of this mission (32 rows)

Narrative, provenance, adjacent-domain or Build Plan §15 items outside this mission, each with the FCTM reason.

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 14-§2-1 | C14@16914a83 | §2 p1: Neighborhood merchants often extend informal credit based on trust and memory | NOT APPLICABLE | SB-P-1.16 | L-NARR (problem statement; obligations carried by §§3, 4, 7, 9, 10, 21) | — |
| 14-§2-2 | C14@16914a83 | §2 b1: multiple small balances accumulate | NOT APPLICABLE | SB-P-1.16 | L-NARR (problem statement; obligations carried by §§3, 4, 7, 9, 10, 21) | — |
| 14-§2-3 | C14@16914a83 | §2 b2: repayments are not linked correctly | NOT APPLICABLE | SB-P-1.16 | L-NARR (problem statement; obligations carried by §§3, 4, 7, 9, 10, 21) | — |
| 14-§2-4 | C14@16914a83 | §2 b3: Owner/staff forget prior credit | NOT APPLICABLE | SB-P-1.16 | L-NARR (problem statement; obligations carried by §§3, 4, 7, 9, 10, 21) | — |
| 14-§2-5 | C14@16914a83 | §2 b4: one customer crosses a comfort threshold | NOT APPLICABLE | SB-P-1.16 | L-NARR (problem statement; obligations carried by §§3, 4, 7, 9, 10, 21) | — |
| 14-§2-6 | C14@16914a83 | §2 b5: collection follow-up becomes awkward | NOT APPLICABLE | SB-P-1.16 | L-NARR (problem statement; obligations carried by §§3, 4, 7, 9, 10, 21) | — |
| 14-§2-7 | C14@16914a83 | §2 b6: the system treats a trusted relationship like a bank underwriting model | NOT APPLICABLE | SB-P-1.16 | L-NARR (problem statement; obligations carried by §§3, 4, 7, 9, 10, 21) | — |
| 14-§23-5 | C14@16914a83 | §23 p2: Preserved: customer credit memory, thresholds as awareness, repayment tracking and Owner… | NOT APPLICABLE | SB-P-1.16 | L-HIST (preserved behaviour carried by 14-§5, 14-§7, 14-§8, 14-§9 rows) | — |
| 14-§24 | C14@16914a83 | §24 Provenance and Hydration Coverage (whole section: p1, p2) | NOT APPLICABLE | SB-P-1.16 | L-PROV | — |
| 15-§2-1 | C15@632f3402 | §2 b1: Ledger entries marked paid | NOT APPLICABLE | SB-P-1.16 | L-NARR (problem statement; obligations carried by §§3, 8–12) | — |
| 15-§2-2 | C15@632f3402 | §2 b2: UPI/bank/card evidence arriving separately | NOT APPLICABLE | SB-P-1.16 | L-NARR (problem statement; obligations carried by §§3, 8–12) | — |
| 15-§2-3 | C15@632f3402 | §2 b3: bank emails/notifications | NOT APPLICABLE | SB-P-1.16 | L-NARR (problem statement; obligations carried by §§3, 8–12) | — |
| 15-§2-4 | C15@632f3402 | §2 b4: screenshots or receipts | NOT APPLICABLE | SB-P-1.16 | L-NARR (problem statement; obligations carried by §§3, 8–12) | — |
| 15-§2-5 | C15@632f3402 | §2 b5: cash/COD events | NOT APPLICABLE | SB-P-1.16 | L-NARR (problem statement; obligations carried by §§3, 8–12) | — |
| 15-§2-6 | C15@632f3402 | §2 b6: multiple transactions with similar amounts | NOT APPLICABLE | SB-P-1.16 | L-NARR (problem statement; obligations carried by §§3, 8–12) | — |
| 15-§2-7 | C15@632f3402 | §2 b7: missing Ledger records discovered from bank evidence | NOT APPLICABLE | SB-P-1.16 | L-NARR (problem statement; obligations carried by §§3, 8–12) | — |
| 15-§26-1 | C15@632f3402 | §26 b1: exact five-minute/24-hour matching windows | NOT APPLICABLE | SB-P-1.16 | L-HIST (provenance only; current rule is 15-§7 p2) | — |
| 15-§26-2 | C15@632f3402 | §26 b2: UTR-specific formulas | NOT APPLICABLE | SB-P-1.16 | L-HIST (provenance only; current rule is 15-§7 p2) | — |
| 15-§26-3 | C15@632f3402 | §26 b3: SendGrid as fixed provider | NOT APPLICABLE | SB-P-1.16 | L-HIST (provenance only; current rule is 15-§3 b7, 15-§24 b3) | — |
| 15-§27 | C15@632f3402 | §27 Provenance and Hydration Coverage (whole section: p1, p2) | NOT APPLICABLE | SB-P-1.16 | L-PROV | — |
| 3-§1 | C3@d8c26c07 | §1 Feature Identity (whole section: p1, p2, p3) | NOT APPLICABLE | SB-P-1.14 | I-14 (3-§1: NOT APPLICABLE in FCTM-14) | — |
| 3-§21 | C3@d8c26c07 | §21 Historical Corrections Preserved (whole section: p1, p2) | NOT APPLICABLE | SB-P-1.14 | I-14 (3-§21: NOT APPLICABLE in FCTM-14) | — |
| 13-§10 | C13@4426e8b1 | §10 whole section: Closing Cash (POS cash-count/payment-method variance) | NOT APPLICABLE | SB-P-1.17 | MC101-L3: adjacent domain, not owned by SB-P-1.16; distinct from C15 evidence matching; shared foundations via 22-§14, 22-§15, 22-§17 rows; owned SB-P-1.17 (BP §9 row 6) | — |
| 18-§15 | C18@6b96b10a | §15 whole section: Billing / Payment Provider Independence (subscription billing reconciliation) | NOT APPLICABLE | SB-P-1.19 | MC101-L3: separate adjacent domain (Smart Business's own billing); not merchant-payment ownership; shared idempotency/provider-resilience via 22-§15, 22-§17 | — |
| 18-§18 | C18@6b96b10a | §18 whole section: Error and Exception Behavior (subscription billing ambiguity) | NOT APPLICABLE | SB-P-1.19 | MC101-L3: separate adjacent domain; not merchant-payment ownership | — |
| BP-§15-1 | BP@9dfdd924 | §15 unresolved Founder decision item 1: current free-trial policy | NOT APPLICABLE | SB-P-1.16 | Does not concern SB-P-1.16 scope | — |
| BP-§15-2 | BP@9dfdd924 | §15 unresolved Founder decision item 2: exact Voice Plus price | NOT APPLICABLE | SB-P-1.16 | Does not concern SB-P-1.16 scope | — |
| BP-§15-3 | BP@9dfdd924 | §15 unresolved Founder decision item 3: exact Staff/HR price | NOT APPLICABLE | SB-P-1.16 | Does not concern SB-P-1.16 scope | — |
| BP-§15-4 | BP@9dfdd924 | §15 unresolved Founder decision item 4: exact Smart Stock price | NOT APPLICABLE | SB-P-1.16 | Does not concern SB-P-1.16 scope | — |
| BP-§15-5 | BP@9dfdd924 | §15 unresolved Founder decision item 5: exact Smart Order & Delivery price | NOT APPLICABLE | SB-P-1.16 | Does not concern SB-P-1.16 scope | — |
| BP-§15-7 | BP@9dfdd924 | §15 unresolved Founder decision item 7: employee KYC/national-ID necessity and legal/privacy basis | NOT APPLICABLE | SB-P-1.16 | Does not concern SB-P-1.16 scope | — |
| BP-§15-8 | BP@9dfdd924 | §15 unresolved Founder decision item 8: broader wholesaler/marketplace expansion | NOT APPLICABLE | SB-P-1.16 | Does not concern SB-P-1.16 scope | — |

### 11.5 Unresolved Founder decisions — not on the bounded Stage 4 drafting path (3 rows)

U-08 (`25-§17-1`, `BP-§15-6`) and U-10 (`BP-§15-9`) are non-blocking for bounded Stage 4 drafting only (MC-160). They block any Blueprint lock that depends on them. This Blueprint sets no retention, deletion or lending rule.

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 25-§17-1 | C25@406ce089 | §17 p1: exact long-term retention/deletion duration after cancellation/non-payment | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | I-14 (25-§17-1); BP §15 item 6; U-08 | — |
| BP-§15-6 | BP@9dfdd924 | §15 unresolved Founder decision item 6: exact long-term retention/deletion duration after cancellation/non-payment | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | BP §15 item 6; I-13/I-14 (owner SB-P-1.19); not on SB-P-1.16 product-definition critical path for non-destructive evidence retention (INF, Mission Control to confirm); U-08 | — |
| BP-§15-9 | BP@9dfdd924 | §15 unresolved Founder decision item 9: third-party underwriting/lending ecosystem | UNRESOLVED FOUNDER DECISION | SB-P-1.16 | BP §15 item 9; GPCV §9 REJECT FOR CURRENT CORE; C14 §21 b2; not on SB-P-1.16 critical path (U-10) | — |

### 11.6 `IN SCOPE` rows carrying the bounded `16:FPDR-9` deferral (3 rows)

These rows are **not** out of scope: they stay `IN SCOPE`, `BUILD NOW`, owned by SB-P-1.16, and are realized in Section 8.4. They are listed here so the deferred branches are visible as "still committed — not in this mission's initial channel set". No mission is assigned to the deferred branches, and they are not implemented, satisfied, rejected or removed (`16:FPDR-9` §§2–5). Their Contract Reconciliation status is determined only at Stage 22. Source 11 "Bank email sync" and "Feature: Bank Email Sync" are retained unchanged.

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 15-§1-2 | C15@632f3402 | §1 p2: This feature includes the historical Bank Email Sync direction as one possible secure evi… | IN SCOPE | SB-P-1.16 | NI-PAY; A-BP105; U-06; historical Bank Email Sync direction preserved; standalone Bank Email Sync not in the initial channel set (16:FPDR-9 §§4–5); S11 Bank email sync and Feature: Bank Email Sync retained | 16:FPDR-6; 16:FPDR-9 |
| 15-§5-1 | C15@632f3402 | §5 b1: bank/payment provider API/webhook | IN SCOPE | SB-P-1.16 | NI-PAY; A-BP105; I-14 (15-§5); U-06; mixed row under 16:FPDR-9: payment-gateway API/webhook branch IN SCOPE (16:FPDR-6); generic direct-bank API branch deferred from the initial channel set, no mission assigned; gateway evidence alone does not fulfil the row | 16:FPDR-6; 16:FPDR-9 |
| 15-§5-2 | C15@632f3402 | §5 b2: authenticated bank email ingestion | IN SCOPE | SB-P-1.16 | NI-PAY; A-BP105; I-14 (15-§5); U-06; standalone authenticated bank-email ingestion deferred from the initial channel set by 16:FPDR-9, no mission assigned; not implemented, satisfied, rejected, removed or reassigned; S11 Bank email sync | 16:FPDR-6; 16:FPDR-9 |

## 12. Dependencies

### 12.1 Upstream specification dependencies

SB-P-1.12, SB-P-1.13, SB-P-1.14 and SB-P-1.15 provide locked specifications only. Their Implementation Authorizations are `WITHHELD`. **No identity record, authority kernel, conversation kernel, four-state Ledger, reminder engine, notification foundation, scheduler or AI capability is runtime-available** (Truth Pack Δ-01, Δ-07). The shared customer identity is SB-P-1.12's (`22-§5-5`, `DELEGATED`; `16:FPDR-1`).

### 12.2 Dependency codes on `IN SCOPE` rows

Counts are taken from the canonical FCTM Dependency column. A row may carry several codes. The Dependency and State columns quote FCTM §0.6, except that the `DPAY` state is clarified below.

| Code | Dependency | `IN SCOPE` rows | State |
|---|---|---|---|
| `D14` | SB-P-1.14 Business Memory: four-state Ledger incl. credit and repayment facts, repayment target (14:FPDR-4), correction/audit model, UDI, governed storage | 154 | Specification locked; WITHHELD; not implemented (`transaction_type` is still `sale`/`purchase`, Δ-01) |
| `D12` | SB-P-1.12 authority kernel: identity incl. participant identities (EIS-ID-03), roles, capability, isolation, confirmation binding, execution-time revalidation, audit | 99 | Specification locked; Implementation Authorization WITHHELD; not implemented |
| `DTX` | The one governed transactions-family write path (SB-P-1.12 WS-A3, SB-P-1.13 EIS13-CMD-02, SB-P-1.14 WS-A; PQ-2). No credit, repayment, link or correction write may open a second path | 50 | Coordinated cut-over undecided; migration NOT AUTHORIZED |
| `D15` | SB-P-1.15 Reminder Engine, Scheduler, Notification Foundation, Ask CFO, Daily Intelligence | 46 | Specification locked; WITHHELD; not implemented |
| `D13` | SB-P-1.13 Conversation/AI kernel, Human Language Layer, Basic Voice, typed tools and confirmation | 41 | Specification locked; WITHHELD; not implemented |
| `DPAY` | **New code.** Authenticated payment-evidence source and adapter (bank/payment API or webhook, authenticated bank email, gateway record, settlement file) under 22-§17-3 | 41 | Channel set decided by `16:FPDR-6` (gateway-first; `16:FPDR-9` deferral). Provider selection, credentials, integration and activation unresolved and NOT AUTHORIZED (BP §5.4). FCTM §0.6 text: "No source selected (U-06); no credentials; external activation NOT AUTHORIZED (BP §5.4)" (see below) |
| `D18` | SB-P-1.18 orders/delivery/COD | 16 | Not started |
| `DAI` | AI provider behind the SB-P-1.13 gateway | 13 | UNVERIFIED — ACCESS REQUIRED; activation NOT AUTHORIZED |
| `DNTF` | Approved out-of-app delivery channel | 7 | None before SB-P-1.20; not inferred |
| `DSCH` | Scheduler / background-job runtime and business timezone | 6 | UNVERIFIED; activation NOT AUTHORIZED |
| `D20` | SB-P-1.20 WhatsApp | 2 | Not started |
| `DUF6` | Build Plan §15 item 6 (retention after cancellation/non-payment), U-5 | 1 | Open; critical-path screen in Truth Pack Part D (U-08) |
| `D19` | SB-P-1.19 onboarding/lifecycle/support | 1 | Not started |

**`DPAY` terminology (clarified).** FCTM §0.6 describes `DPAY` generically ("bank/payment API or webhook, authenticated bank email, gateway record, settlement file") and records its state as "No source selected (U-06)". That legend text predates the Stage 3 decisions and is unchanged in the canonical FCTM. In this Blueprint:

- **Channel decision: made.** `16:FPDR-6` decided the selected initial payment-evidence channel set (gateway-first). `16:FPDR-9` deferred generic direct-bank API and standalone authenticated bank-email ingestion from that set. U-06 is resolved.
- **Provider and activation: unresolved and NOT AUTHORIZED.** No payment gateway, bank or commercial service is selected (`16:FPDR-6` §7). Provider selection, merchant-eligibility and terms validation, credentials, integration, external activation, outage recovery and rollback remain open and need separate validation and authorization (`16:FPDR-6` §7; Build Plan §5.4; `22-§17-3`).
- **What the code means.** The 41 `IN SCOPE` rows carrying `DPAY` therefore depend on that unresolved provider, credential, integration and activation work, not on the channel decision.

### 12.3 Policy, legal and permission dependencies

| Item | Rows | State | Effect on this Blueprint |
|---|---|---|---|
| U-08 / DC-11: payment-evidence retention, deletion eligibility, backups, restoration, legal holds | `25-§17-1`, `BP-§15-6` (`UNRESOLVED FOUNDER DECISION`); `15-§6-7`, `15-§6-12`, `5-§6-1`, `25-§17-4`, `25-§17-5`; `DUF6` | OPEN (MC-112). Non-blocking for bounded Stage 4 drafting only (MC-160) | This Blueprint sets **no** retention duration, deletion rule, backup or restoration behaviour. Evidence handling is non-destructive in definition. Any lifecycle-dependent Blueprint lock needs the Founder/legal determination |
| U-10: third-party underwriting and lending ecosystem | `BP-§15-9` | OPEN; not needed for this mission | Lending and underwriting stay rejected for current core (`GPCV-§9-10`, `14-§21-2`) |
| R15-11: SB-P-1.15 merchant-facing grant granularity (F-4) | `14-§14-2`, `15-§17-2` (`16:FPDR-7`) | OPEN | The capability boundary is decided by `16:FPDR-7`; the merchant-facing grant experience is not. One SB-P-1.12 grant model must serve both missions |
| F-7: Contract 15 feature-completion assessment and residual allocation for the `16:FPDR-9` deferred branches | `15-§5-1` (direct-bank branch), `15-§5-2`, `15-§1-2`, `15-§28-1` | OPEN | This Blueprint neither declares Contract 15 feature completion impossible nor treats it as satisfied by gateway-first delivery |
| `16:FPDR-10` engineering representation: customer-advance Ledger representation, advance-application mechanism, refund semantics, concurrency and reversal handling (FIN-01 recommendations; Stage 7 C-24 to C-28) | `14-§18-3` and the 26 rows citing `16:FPDR-10` | PROVISIONAL — not approved. Stage 7, EIS and independent validation; SB-P-1.14-owner compatibility question open | This Blueprint states the approved product behaviour only (Sections 8.2, 15.6). No representation, schema, command or provider mechanism is fixed here |

### 12.4 Execution gates

Not row dependencies, and not authorized by this Blueprint:

- Implementation Authorization (separate Source 18 gate);
- migration execution (`docs/migration/README.md` default-deny; no credit or payment-evidence schema exists, Δ-01, Δ-02);
- grant and RLS hardening on financial tables (Δ-03);
- payment-evidence provider selection, credentials and activation (Build Plan §5.4; `16:FPDR-6` §7);
- AI provider configuration evidence (`DAI`);
- CI evidence: no workflow runs since 2026-09-30; absence is not a pass (Δ-05);
- named test and runtime-verification environment (Δ-06);
- mandatory specialist reviews (Section 13).

### 12.5 Downstream

SB-P-1.17 and SB-P-1.18 (supplier identity, directory-indexed search, the general Ledger–identity integration `3-§15-7`, orders, delivery and COD), SB-P-1.19 (onboarding and support consumers) and SB-P-1.20 (WhatsApp delivery of approved customer communication) consume this mission's credit and payment truth (Build Plan §11; `BP-§11-1`).

## 13. Risks & Mitigations

| Risk | Source | Mitigation |
|---|---|---|
| Uncertain money presented as settled | C15 §3; Build Plan §10.5 exit principle | Explicit verification states; merchant uploads never authoritative; gateway status kept separate from matching (`16:FPDR-3`, `16:FPDR-6` §1, `16:FPDR-9` §8) |
| Duplicate revenue, repayment or settlement from replays, uploads or reconciliation | C15 §8, §12; Scenario B clause 3 | Idempotent linking on the single governed path (DC-04, DC-05; `DTX`) |
| Wrong customer credited or debited | C14 §4, §18; C15 §14 | Merchant confirmation for ambiguous identity; no silent name matching (`16:FPDR-1`, `16:FPDR-2`) |
| Credit treated as a customer judgment | C14 §3, §19, §21 | Factual awareness only; no scores or labels (`16:FPDR-4`) |
| Customers reached autonomously or disclosed to others | C14 §10, §19 | Merchant-approved preparation only; no delivery before an approved channel (`16:FPDR-8`; `DNTF`) |
| Merchants assume all bank/UPI payments are verified | `16:FPDR-6` §4; `16:FPDR-9` §7 | Truthful coverage statement (Section 9); human confirmation never shown as provider verification |
| Manager access broader than delegated | C14 §14; C15 §17; R15-11 | Owner-reserved decisions; scoped, revocable capabilities checked at execution (`16:FPDR-7`) |
| Retention or deletion behaviour invented before a decision | U-08; DC-11 | No lifecycle rule in this Blueprint; dependent lock blocked (Section 12.3) |
| Contract 15 completeness overstated after the deferral | F-7 | Deferred branches traced on their rows (Section 11.6); no completion claim |
| A second financial write path appears | DTX / PQ-2; Build Plan §6.2 | All consequential writes through the governed path (`BP-§6.2-1`) |
| Customer advance treated as income, silently offset, automatically refunded or created by a correction | `16:FPDR-10` D-1 to D-5 | Owner-only keep, apply and refund; correction exception; conservation and one remaining-advance calculation; acceptance cases ADV-01 to ADV-10 (Section 15.6) |
| Correlated assumptions by the same Definition Actor across Stages 2–4 | MC-97 §3 | Mission Control independent checks at Stages 5 and 8; non-author specialist reviews |

Mandatory specialist reviews before Implementation Authorization (Source 18 §4.8, which makes review mandatory where a mission touches authority or permissions, RLS or grants, migrations, idempotency or concurrency, financial integrity, or a new external provider): financial integrity; security, RLS, grants and permissions (including Manager delegation and Customer participation); concurrency and idempotency (evidence events, matching, linking); migration and data transition (including historical credit-method sales, `16:FPDR-2`); new external provider (payment gateway, once Mission Control authorizes provider evaluation). Mission Control decides whether further specialist reviews are required, for example AI behaviour for drafting and match suggestions, or legal and privacy for U-08 (Source 18 §4.8).

## 14. Success Criteria

- Every `IN SCOPE` row in Section 8 is demonstrated with evidence, or reported with its exact blocking dependency (Source 18 §3.2 item 11).
- Founder Scenarios A and B pass Founder runtime verification within the decision limits of Section 15.4.
- No Section 10.3 must-not row or Section 11.3 rejection appears.
- Authoritative per-customer balances are demonstrated for the data this mission covers, and the SB-P-1.15 qualified Ask CFO answer is replaced only for that data (DC-16).
- No duplicate financial entry results from repeated evidence, uploads, links or reconciliation actions.
- No customer advance is created, applied or refunded without an explicit Owner action, and every received amount is conserved across settled credit, held advance and refunds (`16:FPDR-10`).
- The `16:FPDR-9` deferred branches remain visibly traced and are never reported as delivered.

## 15. Acceptance Criteria

### 15.1 Founder Runtime Verification scenarios (Build Plan §10.5, by reference — not new scenarios)

- `BP-§10.5-A1` — §10.5 Founder Scenario A clause 1: customer has overdue balance; Owner attempts another credit sale (BP@9dfdd924)
- `BP-§10.5-A2` — §10.5 Founder Scenario A clause 2: shows ageing/risk clearly (BP@9dfdd924)
- `BP-§10.5-A3` — §10.5 Founder Scenario A clause 3: allows the Owner to proceed, override, or decline (BP@9dfdd924)
- `BP-§10.5-B1` — §10.5 Founder Scenario B clause 1: one payment-evidence item plausibly matches multiple open transactions; candidates shown (BP@9dfdd924)
- `BP-§10.5-B2` — §10.5 Founder Scenario B clause 2: system requires review (BP@9dfdd924)
- `BP-§10.5-B3` — §10.5 Founder Scenario B clause 3: repeating the confirmed link creates no duplicate financial entries (BP@9dfdd924)

These are Founder-reserved checks (Source 18 §4.2; `BP-§13-9`). Their wording is the Build Plan's; the FCTM splits them into verifiable parts without changing them.

### 15.2 Experience anchors (Build Plan §10.5) and contract experience rows

The Build Plan §10.5 outcome, experience statements and exit principle, and the contract experience rows (8 `EXP` rows):

- `14-§1-1` — §1 p1: Smart Credit Awareness helps a merchant remember who owes money, how much is outstanding,… (C14@16914a83)
- `15-§1-1` — §1 p1: Payment Verification & Bank Reconciliation determines whether a recorded payment is suppo… (C15@632f3402)
- `BP-§10.5-O` — §10.5 product outcome: complete credit, repayment, payment evidence and reconciliation without turning uncertainty into false truth (BP@9dfdd924)
- `BP-§10.5-E1` — §10.5 Founder-approved experience p1: Smart Credit warns the Owner but does not automatically refuse a sale or customer relatio… (BP@9dfdd924)
- `BP-§10.5-E2` — §10.5 Founder-approved experience p2: Payment evidence may be verified, unmatched, partially matched, or ambiguous (BP@9dfdd924)
- `BP-§10.5-E3` — §10.5 Founder-approved experience p3: Ambiguous matches require review (BP@9dfdd924)
- `BP-§10.5-E4` — §10.5 Founder-approved experience p4: Reconciliation cannot duplicate income or repayment (BP@9dfdd924)
- `BP-§10.5-X` — §10.5 exit principle: know who owes what and what was actually paid; never pretend uncertain money is settled or make credit decisions for the Owner (BP@9dfdd924)

### 15.3 Contract acceptance, scenario and completion-gate rows in scope

Acceptance scenarios and worked examples (29 `SCN` rows):

- Contract 14 (16): `14-§9-2`, `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§22-1`, `14-§22-2`, `14-§22-3`, `14-§22-4`, `14-§22-5`, `14-§22-6`, `14-§22-7`, `14-§22-8`, `14-§22-9`, `14-§22-10`, `14-§22-11`
- Contract 15 (12): `15-§25-1`, `15-§25-2`, `15-§25-3`, `15-§25-4`, `15-§25-5`, `15-§25-6`, `15-§25-7`, `15-§25-8`, `15-§25-9`, `15-§25-10`, `15-§25-11`, `15-§25-12`
- Contract 3 (1): `3-§9-12`

Completion gates (3 `GATE` rows), reported honestly at Stage 22 (Section 8.10):

- `14-§25-1` — §25 p1: Complete only when customer identity, credit/repayment memory, thresholds, Owner decision… (C14@16914a83)
- `15-§28-1` — §28 p1: Complete only when authenticated evidence ingestion, deterministic/idempotent matching, a… (C15@632f3402)
- `3-§23` — §23 Completion Gate (p1) (C3@d8c26c07)

Acceptance items not in scope remain in Section 11 with their owning missions.

### 15.4 Founder-decision acceptance limits

- **`16:FPDR-5` — Scenario A.** Scenario A's precondition ("Customer has overdue balance") is met only by a credit with an explicitly recorded due or expected payment date that has passed. Without one, the warning shows credit age, not "overdue" (reconciliation report §9.2). Rows: `BP-§10.5-A1`, `BP-§10.5-A2`, `14-§5-6`.
- **`16:FPDR-4` and `16:FPDR-7` — Scenario A authority.** The warning is factual and the Owner proceeds, overrides or declines; no automatic refusal, score or label; consequential credit decisions stay with the Owner. Rows: `BP-§10.5-A2`, `BP-§10.5-A3`, `BP-§10.5-E1`, `14-§9-*`.
- **`16:FPDR-3`, `16:FPDR-6` and `16:FPDR-9` — Scenario B.** Scenario B is demonstrated with payment evidence from the selected initial channel set. Its acceptance keeps these distinctions:
  - **Two kinds of evidence, never merged.** Authenticated gateway API/webhook evidence is provider-authenticated evidence. Merchant-uploaded receipts, screenshots or similar documents are evidence requiring review: an authorized human may review them and confirm the business action, but they are never presented as provider-authenticated or provider-verified evidence, and human confirmation is never presented as independent provider verification (`16:FPDR-6` §3; `16:FPDR-9` §7).
  - **Verification is distinct from matching.** Whether evidence is authentic and in what verification state is a separate question from whether it matches an existing sale, repayment or credit record (`16:FPDR-6` §1; `16:FPDR-9` §8). Passing one never implies the other.
  - **Ambiguous matches.** They require authorized human review with exact binding of the evidence, candidates and reviewed state (`24-§21-5`; `15-§9-*`). No AI suggestion or unauthenticated evidence settles a match (`16:FPDR-9` §8).
  - **Replays.** Repeating the confirmed link creates no duplicate financial entry (`BP-§10.5-B3`).
  - **Deferred channels excluded.** Acceptance does not cover generic direct-bank API or standalone bank-email evidence (`16:FPDR-9`).

  Rows: `BP-§10.5-B1` to `-B3`, `15-§25-*`, `24-§21-5`, `10-§17-5`.
- **`16:FPDR-8` — customer communication.** Acceptance covers merchant-controlled preparation and approval. The seven `DNTF` rows are not complete until an approved delivery channel exists. Rows: `14-§10-2` to `14-§10-6`, `14-§14-4`, `14-§22-9`.
- **`16:FPDR-1` and `16:FPDR-2` — identity and historical credit.** Authoritative balances use the shared SB-P-1.12 identity; historical credit-method sales enter a customer's balance only after explicit, audited Owner attribution. Rows: `3-§9-12`, `14-§4-*`, `14-§22-1`.
- **`16:FPDR-10` — excess repayment and customer advance.** Acceptance covers the Owner-controlled behaviour only: an excess stops and asks the Owner; a kept advance is separate, applied and refunded only by the Owner; nothing is automatic; corrections raise an exception. The engineering representation is not accepted at this level. Cases ADV-01 to ADV-10 (Section 15.6). Rows: `14-§18-3`, `14-§7-2` to `14-§7-6`, `14-§3-5`, `14-§14-1`, `14-§17-1`, `14-§17-3`, `BP-§10.5-E4`, `BP-§10.5-X`.

### 15.5 Experience Verification Matrix seed (Build Plan §13)

| UX anchor / human outcome | Applicable actor/role | Runtime status | Evidence | Dependency / note |
|---|---|---|---|---|
| Scenario A — credit warning with Owner authority (`BP-§10.5-A1` to `-A3`) | Owner | Not yet run | — | `D12`, `D14`, `DTX`; `16:FPDR-4`, `16:FPDR-5` (recorded due date) |
| Scenario B — ambiguous payment match (`BP-§10.5-B1` to `-B3`) | Owner; Manager only if delegated | Not yet run | — | `D12`, `D13`, `D14`, `DPAY`, `DTX`; `16:FPDR-3`, `16:FPDR-6`, `16:FPDR-7` |
| Smart Credit warns, does not refuse (`BP-§10.5-E1`) | Owner | Not yet run | — | `D12` |
| Verification states distinguishable (`BP-§10.5-E2`) | Owner | Not yet run | — | `D14`, `DPAY`; `16:FPDR-3` |
| Ambiguous matches require review (`BP-§10.5-E3`) | Owner; Manager only if delegated | Not yet run | — | `D12`, `D13`; `16:FPDR-7` |
| Reconciliation never duplicates income or repayment (`BP-§10.5-E4`) | Owner | Not yet run | — | `D14`, `DTX` |
| Excess payment handled by Owner choice; advance shown separately (`16:FPDR-10`) | Owner | Not yet run | — | `D12`, `D14`, `DTX`; representation provisional |

### 15.6 `16:FPDR-10` acceptance cases

Decision-sourced acceptance cases for `16:FPDR-10`. Each is measurable, maps to existing FCTM anchor rows and to the decision-sourced obligations M-1 to M-4 recorded in the FCTM, and is independent of the engineering representation, which stays provisional (Section 12.3). Amounts are examples.

| Case | Decision elements | Measurable condition | FCTM anchor rows | Obligation |
|---|---|---|---|---|
| ADV-01 Excess stops | D-1 | With ₹800 outstanding and ₹1,000 received, no repayment or advance is committed until the Owner chooses; the Owner sees the applicable ₹800 and the ₹200 excess | `14-§18-3`, `15-§11-4`, `BP-§10.5-X` | M-4 |
| ADV-02 Retention | D-2, D-6 | When the Owner keeps the excess: repayments total ₹800 against that customer's credit; one advance of ₹200 for the same customer; sales and income unchanged; no negative balance | `14-§7-3`, `14-§7-4`, `14-§7-5`, `14-§3-5`, `14-§14-1`, `15-§14-2` | M-1, M-4 |
| ADV-03 Persistence and display | D-3, D-4 | The ₹200 advance remains after later credit sales and time passing; "what does the customer still owe" excludes it; it is shown as a separate fact | `3-§9-12`, `14-§5-7`, `14-§3-6` | M-1 |
| ADV-04 Application | D-3, D-6 | The Owner applies A, not more than the remaining advance or the target's outstanding: the remaining advance falls by A, the target's outstanding falls by A, and no new sale, income or payment receipt is recorded. An amount above either limit is refused | `14-§7-4`, `14-§3-5`, `14-§14-1`, `BP-§6.2-1` | M-2, M-4 |
| ADV-05 Refund | D-3, D-6 | The Owner refunds R, not more than the remaining advance: the remaining advance falls by R; no expense or negative income is recorded; a failed refund does not reduce the advance | `14-§7-5`, `15-§8-4`, `14-§14-1` | M-3, M-4 |
| ADV-06 Correction-created excess | D-5 | Correcting a ₹1,000 credit to ₹800 after ₹1,000 was repaid raises an exception; no advance, refund or offset is created until the Owner decides; prior truth is preserved | `14-§17-1`, `14-§17-3`, `14-§7-6` | M-4 |
| ADV-07 Reversal of the source payment | D-4, D-6 | A reversal of the payment that funded the repayment and the advance flags both for Owner review; nothing is deleted; no negative advance is created. Engineering treatment is open (AC-3) | `14-§17-1`, `14-§7-6` | M-4 |
| ADV-08 Retry and replay | D-6 | Repeating a keep, apply or refund request, or a provider event, with the same identity produces exactly one effect: no duplicate repayment, advance, application or refund | `14-§7-5`, `15-§8-4`, `BP-§10.5-E4` | M-4 |
| ADV-09 Non-automation | D-4 | No path applies, refunds or offsets an advance or recognizes income without an Owner command; Ask CFO may describe an advance but cannot act; Manager and Employee requests are denied by default | `14-§3-1`, `14-§3-5`, `14-§14-1`, `15-§11-5` | M-4 |
| ADV-10 Conservation | D-6 | For every source payment, received = applied to credit + held as advance + refunded at all times; the remaining advance comes from one calculation | `14-§7-3`, `BP-§10.5-E4` | M-1 |

## 16. Future Evolution

- **Deferred payment-evidence channels:** generic direct-bank API ingestion and standalone authenticated bank-email ingestion (Source 11 Bank Email Sync) are recognized, deferred from the initial channel set and not assigned to any mission. Any later scheduling needs a Founder decision or Mission Control determination (`16:FPDR-9`; F-7).
- **SB-P-1.17 / SB-P-1.18:** directory-indexed customer and supplier search; the general Ledger–identity integration (`3-§15-7`); order-side credit linkage and COD evidence.
- **SB-P-1.20:** approved delivery of merchant-approved customer credit communication through WhatsApp.
- **Retention and lifecycle:** set only after the U-08 determination.
- **Customer-advance expansions:** not authorized by `16:FPDR-10`; each needs its own decision. They include Manager delegation of keeping, applying or refunding an advance; applying one advance across several debts in one action; showing advances to customers; and any wallet, expiry, automatic refund or automatic application behaviour.

## 17. Product Philosophy Summary

Know who owes what and what has actually been paid; show uncertainty honestly; never guess a match, never duplicate money, never judge a customer, and never take a credit decision that belongs to the Owner (Build Plan §10.5 exit principle; C14 §3; C15 §3).

## 18. Blueprint Change Log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-10-16 | Claude Code (Definition Actor, MC-164) | Initial Stage 4 draft: Metadata, Mission Snapshot, Sections 1–19 assembled by reference to the canonical 555-row FCTM (blob `5ff7742f`) and `16:FPDR-1` to `16:FPDR-9` |
| 0.2 | 2026-10-16 | Claude Code (Definition Actor, MC-165) | Stage 5 intake clarifications: §15.4 Scenario B keeps merchant-reviewed uploads distinct from provider-authenticated evidence and keeps evidence verification distinct from matching; §12.2 `DPAY` state clarified (channel set decided by `16:FPDR-6`; provider selection, credentials, integration and activation unresolved and not authorized). No FCTM disposition, owning mission, Founder decision or approved product behaviour changed |
| 0.3 | 2026-10-18 | Claude Code (Definition Actor, MC-215) | Targeted `16:FPDR-10` reconciliation (Founder approval MC-206): Metadata decision index and FCTM note; Snapshot; Sections 5, 6, 8.2, 8.7, 8.8, 9, 10.1, 12.3, 13, 14, 15.4, 15.5; new Section 15.6 acceptance cases; Section 16; Section 19 Founder-decision column for 26 rows. No FCTM row, disposition, owner or other Founder decision changed; FIN-01's engineering representation not adopted. Subject to a targeted Stage 5 review and a scoped Gate 10 re-run |
| 0.4 (Stage 8 lock candidate) | 2026-10-19 | Claude Code (MC-248) | Stage 8 composition: Sections 20–21 incorporated verbatim from Stage 7 v0.2 (blob `50f24db4`, Section 20 to Section 21.11; draft preamble and draft-era footer excluded). Administrative status correction O-S5-1 (Metadata, this change log, Governance History). No Sections 1–19 product content, row, disposition or decision changed |

## 19. Governance History

| Event | Record | Canonical |
|---|---|---|
| Stage 1 entry (MC-96) | `communication/missions/SB-P-1.16/mission-control/01` | PR #955, `244c8e78` |
| Stage 1 Intake Pack and Definition Actor appointment (MC-97) | `mission-control/02`, `03` | PR #956, `92741150` |
| Stage 1 source inventory instruction | `claude-code/01-stage1-source-inventory-instruction.md` | PR #957, `0ba98e6a` |
| Stage 1 source inventory and publication gate (MC-102, MC-103) | `claude-code/01-stage1-source-inventory-return.md`; `mission-control/04` | PR #958, `48b36c8f` |
| Stage 2 instruction (MC-106, MC-107) | `mission-control/05` | PR #959, `e4e382c7` |
| Stage 2 Mission Truth Pack and gate (MC-112, MC-113) | `claude-code/02`–`06`; `mission-control/06` | PR #960, `59730d67` |
| Stage 3 preparation and gate (MC-115 to MC-122) | `claude-code/07`, `08`; `mission-control/07` | PR #961, `8a27cd5b` |
| Stage 3 Founder decisions `16:FPDR-1` to `16:FPDR-9`; reconciliation report (MC-154) | `claude-code/09`, `10` | PR #963, `bb695255` |
| Stage 3 FCTM reconciliation (MC-156, MC-157, MC-159) | `claude-code/02` | PR #964, `ec87d4a6` |
| Stage 3 Gate Record and continuity records (MC-160; Stage 3 complete, MC-163) | `mission-control/08`; `README.md`; `handover-log.md`; `decision-log.md` | PR #965, `a0db2301` |
| Stage 4 authorization (MC-164) | Conversation-source | — |
| Stage 4 Blueprint Sections 1–19 (MC-164) | this file | PR #966, `3c9a7743` (published at Stage 5) |
| Stage 5 Product Review Gate 10 approval (MC-169 to MC-171) | `mission-control/09`; this file | PR #966, `3c9a7743` |
| Stage 6 Builder Review (MC-174 to MC-178) | `claude-code/17` | PR #967, `5a4d2243` |
| Stage 7 Engineering Review draft and specialist evidence (MC-179 to MC-193) | `claude-code/18`, `19`, `20`; `specialists/01`–`06` | PR #968, `abd5e0d5`; PR #969, `6ba24ec9` |
| `16:FPDR-10` (OQ-01) Founder decision and registration (MC-201 to MC-211) | `claude-code/21`, `22`, `23`; `specialists/07`; `decision-log.md`; `README.md` | PR #970, `31d75b66`; PR #971, `2c5be64b`; PR #972, `47df4714` |
| FCTM `16:FPDR-10` citation amendment (MC-215 to MC-236) | `claude-code/02`, `26` | PR #973, `955351a6` |
| Blueprint v0.3 reconciliation and targeted Stage 5 re-approval (MC-236 to MC-240) | this file; `claude-code/27` | PR #974, `22bbf422` |
| Stage 7 v0.2 consolidated corrections; Stage 7 accepted (MC-241 to MC-247) | `claude-code/18` | PR #975, `9e761048` |
| Stage 8 composition and Founder approval (MC-248) | this file; `mission-control/10` (proposed) | PENDING |

### FCTM Row-ID to Blueprint Section and Source Traceability

Complete accounting of all 555 canonical FCTM rows (blob `5ff7742f6d3849ffab8767333a54eda07be268ab`), in FCTM order. Each line gives the disposition and owning mission exactly as in the FCTM, the source and exact pointer as in the FCTM, the Blueprint location and the FCTM Founder-decision cell. `IN SCOPE` rows map to one Section 8 subsection, plus Section 10.1 where a `16:FPDR` decision is cited, Section 10.2 for rule and principle rows, Section 10.3 for must-not rows, Section 15 for acceptance, experience and completion-gate rows, Section 12 for rows with a dependency and Section 11.6 for the `16:FPDR-9` deferral rows. Other rows map to one Section 11 subsection.

Counts: 555 rows — 349 `IN SCOPE`, 129 `DELEGATED`, 20 `ASSIGNED TO LATER MISSION`, 32 `NOT APPLICABLE`, 22 `OUT OF BUILD SCOPE`, 3 `UNRESOLVED FOUNDER DECISION`, 0 `ESCALATED`, 0 `ALREADY DEMONSTRATED`.

| FCTM row | Disposition | Owning mission | Source @ blob | Exact source pointer | Blueprint location | Founder decision |
|---|---|---|---|---|---|---|
| 14-§1-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §1 p1: Smart Credit Awareness helps a merchant remember who owes money, how much is outstanding,… | §8.1, §15 | — |
| 14-§1-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §1 p2: It is an awareness and memory capability, not an autonomous credit-control authority | §8.1, §10.2 | — |
| 14-§2-1 | NOT APPLICABLE | SB-P-1.16 | C14@16914a83 | §2 p1: Neighborhood merchants often extend informal credit based on trust and memory | §11.4 | — |
| 14-§2-2 | NOT APPLICABLE | SB-P-1.16 | C14@16914a83 | §2 b1: multiple small balances accumulate | §11.4 | — |
| 14-§2-3 | NOT APPLICABLE | SB-P-1.16 | C14@16914a83 | §2 b2: repayments are not linked correctly | §11.4 | — |
| 14-§2-4 | NOT APPLICABLE | SB-P-1.16 | C14@16914a83 | §2 b3: Owner/staff forget prior credit | §11.4 | — |
| 14-§2-5 | NOT APPLICABLE | SB-P-1.16 | C14@16914a83 | §2 b4: one customer crosses a comfort threshold | §11.4 | — |
| 14-§2-6 | NOT APPLICABLE | SB-P-1.16 | C14@16914a83 | §2 b5: collection follow-up becomes awkward | §11.4 | — |
| 14-§2-7 | NOT APPLICABLE | SB-P-1.16 | C14@16914a83 | §2 b6: the system treats a trusted relationship like a bank underwriting model | §11.4 | — |
| 14-§2-8 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §2 p3: Smart Business should create clarity without humiliating customers or taking the Owner's… | §8.1, §10.2 | — |
| 14-§3-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §3 b1: AI Assistant, Not AI Judge | §8.1, §10.2 | 16:FPDR-10 |
| 14-§3-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §3 b2: Credit relationship belongs to merchant and customer | §8.1, §10.2 | — |
| 14-§3-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §3 b3: Warn, do not automatically block by default | §8.1, §10.2 | — |
| 14-§3-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §3 b4: Preserve dignity in collection language | §8.1, §10.2 | — |
| 14-§3-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §3 b5: Human override/decision is explicit and auditable | §8.1, §10.2 | 16:FPDR-10 |
| 14-§3-6 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §3 b6: Repayment must reduce the correct credit relationship | §8.1, §10.2, §12 | 14:FPDR-4; 16:FPDR-10 |
| 14-§3-7 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §3 b7: Do not fabricate customer risk scores | §8.1, §10.1, §10.3 | 16:FPDR-4 |
| 14-§4-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §4 p1: Credit is linked to the correct merchant-scoped customer identity | §8.1, §10.1, §12 | 14:FPDR-1; 16:FPDR-1; 16:FPDR-2 |
| 14-§4-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §4 b1: name spelling variations | §8.1, §10.1, §12 | 14:FPDR-1; 16:FPDR-1; 16:FPDR-2 |
| 14-§4-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §4 b2: phone-number variants | §8.1, §10.1, §12 | 14:FPDR-1; 16:FPDR-1; 16:FPDR-2 |
| 14-§4-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §4 b3: duplicate customer creation | §8.1, §10.1, §12 | 14:FPDR-1; 16:FPDR-1; 16:FPDR-2 |
| 14-§4-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §4 b4: channel-specific identities | §8.1, §10.1, §12 | 14:FPDR-1; 16:FPDR-1; 16:FPDR-2 |
| 14-§4-6 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §4 p3: Where identity is ambiguous, ask rather than silently assigning credit to the wrong custo… | §8.1, §10.1, §12 | 14:FPDR-3; 16:FPDR-1; 16:FPDR-2 |
| 14-§5-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §5 b1: customer identity | §8.2, §10.1, §12 | 14:FPDR-1; 16:FPDR-1 |
| 14-§5-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §5 b2: credit transaction(s) | §8.2, §12 | 14:FPDR-1 |
| 14-§5-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §5 b3: amount | §8.2, §12 | 14:FPDR-1 |
| 14-§5-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §5 b4: date/time | §8.2, §12 | 14:FPDR-1 |
| 14-§5-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §5 b5: description/items where relevant | §8.2, §12 | 14:FPDR-1 |
| 14-§5-6 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §5 b6: due/expected follow-up information if used | §8.2, §10.1, §12 | 14:FPDR-1; 16:FPDR-5 |
| 14-§5-7 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §5 b7: outstanding balance | §8.2, §12 | 14:FPDR-1; 16:FPDR-10 |
| 14-§5-8 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §5 b8: repayment events | §8.2, §12 | 14:FPDR-1; 16:FPDR-10 |
| 14-§5-9 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §5 b9: owner-defined threshold/limit where configured | §8.2, §12 | 14:FPDR-1 |
| 14-§5-10 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §5 b10: owner decisions/overrides | §8.2, §12 | 14:FPDR-1 |
| 14-§5-11 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §5 b11: reminder/collection history | §8.2, §12 | 14:FPDR-1 |
| 14-§5-12 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §5 b12: linked payment evidence where available | §8.2, §12 | 14:FPDR-1 |
| 14-§5-13 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §5 b13: actor/audit history | §8.2, §12 | 14:FPDR-1 |
| 14-§6-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §6 b1: text | §8.2, §12 | 14:FPDR-1 |
| 14-§6-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §6 b2: voice | §8.2, §12 | 14:FPDR-1 |
| 14-§6-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §6 b3: manual workspace entry | §8.2, §12 | 14:FPDR-1 |
| 14-§6-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §6 b4: receipt/document workflow where appropriate | §8.2, §12 | 14:FPDR-1 |
| 14-§6-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §6 b5: order/delivery workflow where credit is permitted | §8.2, §12 | 14:FPDR-1 |
| 14-§6-6 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §6 p2: A credit entry must be confirmed accurately when consequential facts are ambiguous | §8.2, §12 | 14:FPDR-3 |
| 14-§7-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §7 p1: Repayment is a distinct current Ledger state | §8.2, §10.2, §12 | 14:FPDR-1 |
| 14-§7-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §7 b1: identify the correct customer/credit relationship | §8.2, §12 | 14:FPDR-4; 16:FPDR-10 |
| 14-§7-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §7 b2: preserve repayment amount/date/source | §8.2, §12 | 14:FPDR-4; 16:FPDR-10 |
| 14-§7-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §7 b3: update outstanding balance consistently | §8.2, §12 | 14:FPDR-4; 16:FPDR-10 |
| 14-§7-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §7 b4: avoid creating duplicate income/credit facts | §8.2, §10.3, §12 | 14:FPDR-4; 16:FPDR-10 |
| 14-§7-6 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §7 b5: preserve correction/audit linkage | §8.2, §12 | 14:FPDR-4; 16:FPDR-10 |
| 14-§7-7 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §7 p3: If multiple plausible balances/credits could receive the payment, require human confirmat… | §8.2, §12 | 14:FPDR-3 |
| 14-§8-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §8 p1: An Owner may configure a credit comfort threshold or limit | §8.3, §12 | — |
| 14-§8-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §8 p2: The threshold is an awareness input | §8.3, §10.2 | — |
| 14-§8-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §8 b1: show current outstanding balance/context | §8.3, §12 | — |
| 14-§8-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §8 b2: make the Owner aware at a useful time | §8.3, §12 | — |
| 14-§8-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §8 b3: optionally suggest follow-up | §8.3, §12 | — |
| 14-§8-6 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §8 b4: allow Owner decision | §8.3, §12 | — |
| 14-§8-7 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §8 p4: The product must not convert an old fixed value such as ₹5,000 into universal Product Tru… | §8.3, §10.3 | — |
| 14-§9-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §9 p1: Current Product Truth rejects hard autonomous credit blocking as the default behavior | §8.3, §10.1, §10.3 | 16:FPDR-4 |
| 14-§9-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §9 p3 (introduced by lead-in p2 'Example:'): worked example of a merchant-facing threshold warning — ILLUSTRATIVE, NON-FIXED | §8.3, §10.1, §12, §15 | 16:FPDR-4 |
| 14-§9-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §9 b1: approve the sale/credit | §8.3, §10.1, §12 | 16:FPDR-4 |
| 14-§9-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §9 b2: decline | §8.3, §10.1, §12 | 16:FPDR-4 |
| 14-§9-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §9 b3: adjust amount | §8.3, §10.1, §12 | 16:FPDR-4 |
| 14-§9-6 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §9 b4: grant grace | §8.3, §10.1, §12 | 16:FPDR-4 |
| 14-§9-7 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §9 b5: change the threshold | §8.3, §10.1, §12 | 16:FPDR-4 |
| 14-§9-8 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §9 b6: review customer history | §8.3, §10.1, §12 | 16:FPDR-4 |
| 14-§9-9 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §9 p5: The system records the material decision where relevant | §8.3, §10.1, §12 | 16:FPDR-4 |
| 14-§10-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §10 p1: Smart Business may help the Owner remember/follow up on outstanding credit through the sh… | §8.3, §10.1, §12 | 16:FPDR-8 |
| 14-§10-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §10 p2: Collection communication should be respectful and merchant-controlled | §8.3, §10.1, §12 | 16:FPDR-8 |
| 14-§10-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §10 b1: shame the customer | §8.3, §10.1, §10.3, §12 | 16:FPDR-8 |
| 14-§10-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §10 b2: threaten them | §8.3, §10.1, §10.3, §12 | 16:FPDR-8 |
| 14-§10-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §10 b3: send confrontational messages autonomously | §8.3, §10.1, §10.3, §12 | 16:FPDR-8 |
| 14-§10-6 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §10 b4: disclose their balance to unrelated people | §8.3, §10.1, §10.3, §12 | 16:FPDR-8 |
| 14-§11-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §11 b1: 'Who owes me the most?' | §8.6, §12, §15 | 15:FDB-3 |
| 14-§11-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §11 b2: 'How much credit is outstanding?' | §8.6, §12, §15 | 15:FDB-3 |
| 14-§11-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §11 b3: 'Which balances are old?' | §8.6, §12, §15 | 15:FDB-3 |
| 14-§11-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §11 b4: 'How much was repaid this week?' | §8.6, §12, §15 | 15:FDB-3 |
| 14-§11-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §11 p2: Ask CFO may identify patterns and suggest review, but cannot change limits, block custome… | §8.6, §10.3, §12 | — |
| 14-§12-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §12 b1: total outstanding credit | §8.6, §12 | — |
| 14-§12-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §12 b2: meaningful change since prior period | §8.6, §12 | — |
| 14-§12-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §12 b3: customers crossing Owner-configured thresholds | §8.6, §12 | — |
| 14-§12-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §12 b4: repayments received | §8.6, §12 | — |
| 14-§12-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §12 b5: follow-ups due | §8.6, §12 | — |
| 14-§12-6 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §12 p2: Staff must not receive Owner-wide customer-credit intelligence by default | §8.6, §10.3, §12 | — |
| 14-§13-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §13 b1: credit status must link to the same customer identity | §8.1, §10.1, §12 | 16:FPDR-1 |
| 14-§13-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §13 b2: one order event must not create duplicate credit facts | §8.1, §10.3, §12 | — |
| 14-§13-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §13 b3: delivery completion and payment/credit state remain distinct facts where necessary | §8.1, §12 | — |
| 14-§14-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §14 <Owner> p1: Can view/manage credit awareness, thresholds, decisions and history | §8.7, §12 | 16:FPDR-10 |
| 14-§14-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §14 <Manager> p2: Only Owner-delegated credit operations/visibility | §8.7, §10.1, §12 | 16:FPDR-7 |
| 14-§14-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §14 <Employee> p3: May record permitted credit transactions or repayments if explicitly allowed, but does no… | §8.7, §12 | — |
| 14-§14-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §14 <Customer> p4: May receive only merchant-approved communications relevant to their own relationship | §8.7, §10.1, §12 | 16:FPDR-8 |
| 14-§15-1a | IN SCOPE | SB-P-1.16 | C14@16914a83 | §15 p1 (native Conversation Workspace slice): Credit input/review should work through WhatsApp and Conversation Workspace in English, M… | §8.7, §12 | — |
| 14-§15-1b | ASSIGNED TO LATER MISSION | SB-P-1.20 | C14@16914a83 | §15 p1 (WhatsApp channel slice): Credit input/review should work through WhatsApp and Conversation Workspace in English, M… | §11.1 | — |
| 14-§15-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §15 p2: Natural local expressions for 'kadam', 'balance', 'paid', 'gave', etc. should be interpre… | §8.7, §12 | — |
| 14-§16-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §16 b1: customer identity is ambiguous | §8.7, §12 | 14:FPDR-3 |
| 14-§16-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §16 b2: amount is unclear | §8.7, §12 | 14:FPDR-3 |
| 14-§16-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §16 b3: credit vs cash/paid state is unclear | §8.7, §12 | 14:FPDR-3 |
| 14-§16-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §16 b4: repayment could match multiple customers/credits | §8.7, §12 | 14:FPDR-3 |
| 14-§16-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §16 b5: a threshold override is unclear | §8.7, §12 | 14:FPDR-3 |
| 14-§16-6 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §16 p2: Never guess a financial link to keep the flow moving | §8.7, §10.3, §12 | — |
| 14-§17-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §17 p1: Consequential credit/repayment corrections must preserve prior truth through the Ledger c… | §8.8, §12 | 16:FPDR-10 |
| 14-§17-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §17 b1: original amount | §8.8, §10.3, §12 | — |
| 14-§17-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §17 b2: repayment linkage | §8.8, §10.3, §12 | 16:FPDR-10 |
| 14-§17-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §17 b3: Owner override | §8.8, §10.3, §12 | — |
| 14-§17-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §17 b4: reminder/collection history | §8.8, §10.3, §12 | — |
| 14-§18-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §18 b1: duplicate customer identity | §8.8, §10.1, §12 | 16:FPDR-1 |
| 14-§18-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §18 b2: duplicate credit entry | §8.8, §12 | — |
| 14-§18-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §18 b3: repayment greater than expected balance | §8.8, §12 | 16:FPDR-10 |
| 14-§18-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §18 b4: missing/ambiguous customer | §8.8, §12 | — |
| 14-§18-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §18 b5: stale balance during confirmation | §8.8, §12 | — |
| 14-§18-6 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §18 b6: permission revoked before write | §8.8, §12 | — |
| 14-§18-7 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §18 b7: reminder delivery failure | §8.8, §12 | — |
| 14-§18-8 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §18 b8: payment evidence mismatch | §8.8, §12 | — |
| 14-§18-9 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §18 p2: A credit ambiguity should block only the uncertain write/link, not unrelated merchant ope… | §8.8, §12 | — |
| 14-§19-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §19 b1: Credit information is business-sensitive | §8.8, §12 | — |
| 14-§19-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §19 b2: Staff views are permission-scoped | §8.8, §12 | — |
| 14-§19-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §19 b3: Customer balances are not public | §8.8, §10.3, §12 | — |
| 14-§19-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §19 b4: No accusation or shame language | §8.8, §10.3 | — |
| 14-§19-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §19 b5: No model-generated moral judgement about whether a customer is 'good' or 'bad' | §8.8, §10.1, §10.3, §12 | 16:FPDR-4 |
| 14-§20-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §20 b1: Ledger / Business Memory | §8.9, §10.2, §12 | 14:FPDR-1 |
| 14-§20-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §20 b2: Customer Identity | §8.9, §10.1, §10.2, §12 | 16:FPDR-1 |
| 14-§20-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §20 b3: Permission Engine | §8.9, §10.2, §12 | — |
| 14-§20-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §20 b4: Human Language Layer | §8.9, §10.2, §12 | — |
| 14-§20-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §20 b5: Reminder Engine | §8.9, §10.2, §12 | — |
| 14-§20-6 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §20 b6: Notification foundation | §8.9, §10.2, §12 | 12:FPDR-1 |
| 14-§20-7 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §20 b7: Ask CFO | §8.9, §10.2, §12 | — |
| 14-§20-8 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §20 b8: Daily Intelligence | §8.9, §10.2, §12 | — |
| 14-§20-9 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §20 b9: Payment Verification where applicable | §8.9, §10.2 | — |
| 14-§20-10 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §20 b10: audit/idempotency | §8.9, §10.2, §12 | — |
| 14-§21-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §21 b1: automatic hard credit blocker by default | §8.9, §10.3 | — |
| 14-§21-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §21 b2: underwriting/lending score | §8.9, §10.3 | — |
| 14-§21-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §21 b3: public customer reputation system | §8.9, §10.3 | — |
| 14-§21-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §21 b4: confrontational automated collection | §8.9, §10.3 | — |
| 14-§21-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §21 b5: fixed universal ₹5,000 limit | §8.9, §10.3 | — |
| 14-§21-6 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §21 b6: duplicate customer-credit database separate from Ledger/customer identity | §8.9, §10.3, §12 | 14:FPDR-1; 16:FPDR-10 |
| 14-§22-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §22 n1: Credit entry creates correct customer balance | §8.10, §10.1, §12, §15 | 14:FPDR-1; 16:FPDR-1; 16:FPDR-2 |
| 14-§22-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §22 n2: Repayment reduces correct balance without duplicate revenue | §8.10, §12, §15 | 14:FPDR-4; 16:FPDR-10 |
| 14-§22-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §22 n3: Ambiguous customer triggers clarification | §8.10, §10.1, §12, §15 | 16:FPDR-1 |
| 14-§22-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §22 n4: Owner-configured threshold produces warning/context, not automatic block | §8.10, §12, §15 | — |
| 14-§22-5 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §22 n5: Owner can approve/decline/adjust/grant grace | §8.10, §12, §15 | — |
| 14-§22-6 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §22 n6: Material override is auditable | §8.10, §12, §15 | — |
| 14-§22-7 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §22 n7: Employee can record credit only when permitted and cannot see Owner-wide analytics by def… | §8.10, §12, §15 | — |
| 14-§22-8 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §22 n8: Ask CFO retrieves accurate credit facts without write authority | §8.10, §12, §15 | 15:FDB-3 |
| 14-§22-9 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §22 n9: Respectful collection reminder requires approved workflow | §8.10, §10.1, §12, §15 | 16:FPDR-8 |
| 14-§22-10 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §22 n10: Cross-business credit leakage is blocked | §8.10, §12, §15 | — |
| 14-§22-11 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §22 n11: Correction preserves audit history | §8.10, §12, §15 | — |
| 14-§23-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §23 b1: default hard block when limit exceeded | §8.9, §10.3 | — |
| 14-§23-2 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §23 b2: fixed universal historical credit limit | §8.9, §10.3 | — |
| 14-§23-3 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §23 b3: silent warning that does not reach Owner usefully | §8.9, §10.3 | — |
| 14-§23-4 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §23 b4: automated confrontational collection language | §8.9, §10.3 | — |
| 14-§23-5 | NOT APPLICABLE | SB-P-1.16 | C14@16914a83 | §23 p2: Preserved: customer credit memory, thresholds as awareness, repayment tracking and Owner… | §11.4 | — |
| 14-§24 | NOT APPLICABLE | SB-P-1.16 | C14@16914a83 | §24 Provenance and Hydration Coverage (whole section: p1, p2) | §11.4 | — |
| 14-§25-1 | IN SCOPE | SB-P-1.16 | C14@16914a83 | §25 p1: Complete only when customer identity, credit/repayment memory, thresholds, Owner decision… | §8.10, §12, §15 | — |
| 15-§1-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §1 p1: Payment Verification & Bank Reconciliation determines whether a recorded payment is suppo… | §8.4, §15 | — |
| 15-§1-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §1 p2: This feature includes the historical Bank Email Sync direction as one possible secure evi… | §8.4, §10.1, §10.2, §11.6, §12 | 16:FPDR-6; 16:FPDR-9 |
| 15-§2-1 | NOT APPLICABLE | SB-P-1.16 | C15@632f3402 | §2 b1: Ledger entries marked paid | §11.4 | — |
| 15-§2-2 | NOT APPLICABLE | SB-P-1.16 | C15@632f3402 | §2 b2: UPI/bank/card evidence arriving separately | §11.4 | — |
| 15-§2-3 | NOT APPLICABLE | SB-P-1.16 | C15@632f3402 | §2 b3: bank emails/notifications | §11.4 | — |
| 15-§2-4 | NOT APPLICABLE | SB-P-1.16 | C15@632f3402 | §2 b4: screenshots or receipts | §11.4 | — |
| 15-§2-5 | NOT APPLICABLE | SB-P-1.16 | C15@632f3402 | §2 b5: cash/COD events | §11.4 | — |
| 15-§2-6 | NOT APPLICABLE | SB-P-1.16 | C15@632f3402 | §2 b6: multiple transactions with similar amounts | §11.4 | — |
| 15-§2-7 | NOT APPLICABLE | SB-P-1.16 | C15@632f3402 | §2 b7: missing Ledger records discovered from bank evidence | §11.4 | — |
| 15-§2-8 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §2 p2: Without reconciliation, Smart Business can either falsely trust an unverified claim or cr… | §8.4, §10.2 | — |
| 15-§3-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §3 b1: Never fabricate payment certainty | §8.4, §10.2 | — |
| 15-§3-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §3 b2: Preserve both business record and external evidence | §8.4, §10.2 | — |
| 15-§3-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §3 b3: Strong match verifies; it does not duplicate the transaction | §8.4, §10.2 | — |
| 15-§3-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §3 b4: Ambiguous match requires human confirmation | §8.4, §10.2 | — |
| 15-§3-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §3 b5: Narrow uncertainty blocks only the uncertain link/write | §8.4, §10.2 | — |
| 15-§3-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §3 b6: Auditability over silent overwrite | §8.4, §10.2 | — |
| 15-§3-7 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §3 b7: Provider choice is implementation detail; authenticity and integrity are product requirem… | §8.4, §10.1, §10.2, §12 | 16:FPDR-6 |
| 15-§4-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §4 b1: pending/unverified | §8.4, §10.1, §12 | 16:FPDR-3 |
| 15-§4-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §4 b2: evidence received | §8.4, §10.1, §12 | 16:FPDR-3 |
| 15-§4-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §4 b3: matched/verified | §8.4, §10.1, §12 | 16:FPDR-3 |
| 15-§4-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §4 b4: ambiguous/review required | §8.4, §10.1, §12 | 16:FPDR-3 |
| 15-§4-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §4 b5: mismatched | §8.4, §10.1, §12 | 16:FPDR-3 |
| 15-§4-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §4 b6: unlinked evidence | §8.4, §10.1, §12 | 16:FPDR-3 |
| 15-§4-7 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §4 b7: reversed/invalidated where authoritative evidence supports it | §8.4, §10.1, §12 | 16:FPDR-3; 16:FPDR-6 |
| 15-§4-8 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §4 p2: Exact enum names are implementation choices. The durable behavior is that verification st… | §8.4, §10.1, §10.2, §12 | 16:FPDR-3 |
| 15-§5-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §5 b1: bank/payment provider API/webhook | §8.4, §10.1, §11.6, §12 | 16:FPDR-6; 16:FPDR-9 |
| 15-§5-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §5 b2: authenticated bank email ingestion | §8.4, §10.1, §11.6, §12 | 16:FPDR-6; 16:FPDR-9 |
| 15-§5-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §5 b3: payment gateway record | §8.4, §10.1, §12 | 16:FPDR-6 |
| 15-§5-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §5 b4: verified settlement file | §8.4, §10.1, §12 | 16:FPDR-6 |
| 15-§5-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §5 b5: merchant-uploaded evidence requiring appropriate review | §8.4, §10.1, §12 | 16:FPDR-6 |
| 15-§5-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §5 b6: COD/order-delivery evidence where the workflow supports it | §8.4, §10.1, §12 | 16:FPDR-6 |
| 15-§5-7 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §5 b7: other approved financial integrations | §8.4, §10.1, §12 | 16:FPDR-6 |
| 15-§5-8 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §5 p2: An unauthenticated message or arbitrary text claim must not automatically become authorit… | §8.4, §10.3 | — |
| 15-§6-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §6 b1: business scope | §8.4, §12 | — |
| 15-§6-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §6 b2: source/provider | §8.4, §12 | — |
| 15-§6-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §6 b3: external reference/UTR where available | §8.4, §12 | — |
| 15-§6-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §6 b4: amount | §8.4, §12 | — |
| 15-§6-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §6 b5: direction | §8.4, §12 | — |
| 15-§6-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §6 b6: timestamp | §8.4, §12 | — |
| 15-§6-7 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §6 b7: payer/payee/account hints where permitted | §8.4, §12 | — |
| 15-§6-8 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §6 b8: raw evidence/reference sufficient for audit | §8.4, §12 | — |
| 15-§6-9 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §6 b9: ingestion time | §8.4, §12 | — |
| 15-§6-10 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §6 b10: authenticity/validation state | §8.4, §12 | — |
| 15-§6-11 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §6 b11: dedupe/idempotency key | §8.4, §12 | — |
| 15-§6-12 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §6 p2: Sensitive financial evidence must follow current privacy/security/retention rules | §8.4, §12 | 14:FPDR-2 |
| 15-§7-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §7 b1: amount | §8.5, §12 | — |
| 15-§7-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §7 b2: reference/UTR | §8.5, §12 | — |
| 15-§7-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §7 b3: timestamp/time window | §8.5, §12 | — |
| 15-§7-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §7 b4: direction | §8.5, §12 | — |
| 15-§7-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §7 b5: customer/supplier/account identity | §8.5, §10.1, §12 | 16:FPDR-1 |
| 15-§7-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §7 b6: payment method | §8.5, §12 | — |
| 15-§7-7 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §7 b7: linked order/credit context | §8.5, §12 | — |
| 15-§7-8 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §7 b8: provider-specific identifiers | §8.5, §12 | — |
| 15-§7-9 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §7 p2: Historical fixed formulas/windows (for example five minutes or 24 hours) are implementati… | §8.5, §10.3 | — |
| 15-§7-10 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §7 p3: Matching logic should be deterministic/idempotent where possible and explainable enough f… | §8.5, §12 | — |
| 15-§8-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §8 b1: link the evidence to that record | §8.5, §12 | 14:FPDR-1 |
| 15-§8-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §8 b2: mark/derive verification state appropriately | §8.5, §12 | 14:FPDR-1 |
| 15-§8-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §8 b3: preserve the original transaction identity | §8.5, §12 | 14:FPDR-1 |
| 15-§8-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §8 b4: do not create a duplicate sale/income/payment | §8.5, §10.3, §12 | 14:FPDR-1; 16:FPDR-10 |
| 15-§8-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §8 b5: preserve source/reference/audit history | §8.5, §12 | 14:FPDR-1 |
| 15-§8-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §8 b6: notify/surface success where useful | §8.5, §12 | — |
| 15-§8-7 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §8 p2: Verification is a property/link of the existing business truth, not a second financial tr… | §8.5, §10.2, §12 | 14:FPDR-1 |
| 15-§9-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §9 b1: do not choose silently | §8.5, §10.3, §12 | — |
| 15-§9-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §9 b2: present the relevant candidates/context to an authorized human | §8.5, §12 | 14:FPDR-3 |
| 15-§9-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §9 b3: ask for the smallest useful confirmation | §8.5, §12 | 14:FPDR-3 |
| 15-§9-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §9 b4: bind the confirmation to the exact evidence/candidate state | §8.5, §12 | 14:FPDR-3 |
| 15-§9-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §9 b5: revalidate state/permission before linking | §8.5, §12 | 14:FPDR-3 |
| 15-§9-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §9 p2: If no safe choice is made, evidence remains in review/unlinked state | §8.5, §12 | — |
| 15-§10-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §10 b1: preserve both pieces of evidence | §8.5, §12 | — |
| 15-§10-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §10 b2: show the variance | §8.5, §12 | — |
| 15-§10-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §10 b3: do not overwrite one with the other | §8.5, §10.3, §12 | — |
| 15-§10-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §10 b4: allow authorized correction/review through normal Ledger/payment workflows | §8.5, §12 | — |
| 15-§10-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §10 b5: keep audit history | §8.5, §12 | — |
| 15-§11-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §11 p1: Authoritative evidence may arrive without a corresponding Ledger transaction | §8.5, §12 | — |
| 15-§11-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §11 b1: preserve it as unlinked evidence | §8.5, §12 | — |
| 15-§11-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §11 b2: surface it to the Owner/authorized user | §8.5, §12 | — |
| 15-§11-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §11 b3: allow classification/linking or creation through a governed flow | §8.5, §12 | 16:FPDR-10 |
| 15-§11-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §11 b4: do not auto-create income/expense if business meaning is ambiguous | §8.5, §10.3, §12 | 16:FPDR-10 |
| 15-§12-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §12 p1: The same bank/provider event may arrive more than once | §8.5, §12 | — |
| 15-§12-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §12 b1: duplicate evidence records where avoidable | §8.5, §10.3, §12 | — |
| 15-§12-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §12 b2: duplicate verification actions | §8.5, §10.3, §12 | — |
| 15-§12-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §12 b3: duplicate revenue/payment entries | §8.5, §10.3, §12 | — |
| 15-§12-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §12 b4: repeated notifications/actions caused by retries | §8.5, §10.3, §12 | — |
| 15-§12-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §12 p3: External reference/provider identity should support idempotent processing | §8.5, §10.2, §12 | — |
| 15-§13-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §13 p1: If authoritative evidence later changes (for example reversal/failure/chargeback where ap… | §8.5, §10.1, §12 | 16:FPDR-6 |
| 15-§13-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §13 p2: Do not silently erase the prior verified state | §8.5, §10.3, §12 | — |
| 15-§13-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §13 p3: Ledger correction rules continue to apply to consequential business-record changes | §8.5, §10.2, §12 | — |
| 15-§14-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §14 p1: Repayments/customer credit may use Payment Verification to support whether money was actu… | §8.6, §12 | 14:FPDR-4; 16:FPDR-10 |
| 15-§14-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §14 b1: duplicating income | §8.6, §10.3, §12 | 14:FPDR-4; 16:FPDR-10 |
| 15-§14-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §14 b2: reducing the wrong customer's balance | §8.6, §10.1, §10.3, §12 | 14:FPDR-4; 16:FPDR-1; 16:FPDR-10 |
| 15-§14-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §14 b3: guessing when multiple matches exist | §8.6, §10.3, §12 | — |
| 15-§15-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §15 p1: COD collection and delivery completion are related but distinct facts | §8.6, §10.2, §12 | — |
| 15-§15-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §15 b1: expected amount | §8.6, §12 | — |
| 15-§15-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §15 b2: collected amount | §8.6, §12 | — |
| 15-§15-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §15 b3: delivery proof | §8.6, §12 | — |
| 15-§15-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §15 b4: Ledger/payment record | §8.6, §12 | — |
| 15-§15-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §15 b5: verification state | §8.6, §12 | — |
| 15-§15-7 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §15 p3: must link consistently without duplicate financial truth | §8.6, §10.3, §12 | — |
| 15-§16-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §16 b1: unverified payments | §8.6, §12 | — |
| 15-§16-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §16 b2: mismatches | §8.6, §12 | — |
| 15-§16-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §16 b3: unlinked evidence | §8.6, §12 | — |
| 15-§16-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §16 b4: verified receipts | §8.6, §12 | — |
| 15-§16-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §16 b5: ageing review queue | §8.6, §12 | — |
| 15-§16-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §16 p2: They must not convert uncertainty into certainty | §8.6, §10.3, §12 | — |
| 15-§17-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §17 <Owner> p1: Default authority to review/resolve financial reconciliation | §8.7, §12 | — |
| 15-§17-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §17 <Manager> p2: Only delegated financial/reconciliation scope | §8.7, §10.1, §12 | 16:FPDR-7 |
| 15-§17-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §17 <Employee> p3: May record permitted operational payment information but should not automatically receive… | §8.7, §12 | — |
| 15-§17-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §17 <Platform/support> p4: No routine access to merchant banking/financial evidence. Support access follows separate… | §8.7, §10.3, §12 | — |
| 15-§18-1a | IN SCOPE | SB-P-1.16 | C15@632f3402 | §18 p1 (Workspace slice): Authorized review/clarification may occur through Workspace/WhatsApp where secure and sui… | §8.7, §12 | — |
| 15-§18-1b | ASSIGNED TO LATER MISSION | SB-P-1.20 | C15@632f3402 | §18 p1 (WhatsApp channel slice): Authorized review/clarification may occur through Workspace/WhatsApp where secure and sui… | §11.1 | — |
| 15-§18-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §18 p2: Sensitive evidence should not be exposed in an inappropriate channel merely for convenien… | §8.7, §10.3, §12 | — |
| 15-§19-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §19 b1: multiple plausible matches exist | §8.7, §12 | 14:FPDR-3 |
| 15-§19-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §19 b2: a mismatch correction changes business truth | §8.7, §12 | 14:FPDR-3 |
| 15-§19-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §19 b3: unlinked evidence is being classified into a consequential record | §8.7, §12 | 14:FPDR-3 |
| 15-§19-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §19 b4: current authority/record state requires review | §8.7, §12 | 14:FPDR-3 |
| 15-§19-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §19 p2: Confirmation must bind exact evidence/record/action and current actor | §8.7, §12 | 14:FPDR-3 |
| 15-§20-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §20 b1: stop only the uncertain link/write | §8.8, §12 | — |
| 15-§20-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §20 b2: preserve evidence safely | §8.8, §12 | — |
| 15-§20-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §20 b3: show recovery/review path | §8.8, §12 | — |
| 15-§20-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §20 b4: allow unrelated Ledger, inventory, orders and other safe operations to continue | §8.8, §12 | — |
| 15-§20-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §20 p2: A bank integration outage must not globally freeze Smart Business | §8.8, §10.3, §12 | — |
| 15-§21-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §21 b1: provider outage | §8.8, §12 | — |
| 15-§21-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §21 b2: malformed/unsupported evidence | §8.8, §12 | — |
| 15-§21-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §21 b3: authenticity failure | §8.8, §12 | — |
| 15-§21-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §21 b4: duplicate event | §8.8, §12 | — |
| 15-§21-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §21 b5: multiple candidates | §8.8, §12 | — |
| 15-§21-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §21 b6: no candidate | §8.8, §12 | — |
| 15-§21-7 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §21 b7: amount/reference mismatch | §8.8, §12 | — |
| 15-§21-8 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §21 b8: stale candidate state | §8.8, §12 | — |
| 15-§21-9 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §21 b9: permission revoked during review | §8.8, §12 | — |
| 15-§21-10 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §21 b10: reversal/chargeback where relevant | §8.8, §10.1, §12 | 16:FPDR-6 |
| 15-§21-11 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §21 b11: channel notification failure | §8.8, §12 | — |
| 15-§22-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §22 b1: Authenticate/validate evidence source where authoritative status is claimed | §8.8, §12 | — |
| 15-§22-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §22 b2: Encrypt/protect sensitive financial information according to architecture policy | §8.8, §12 | — |
| 15-§22-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §22 b3: Business isolation is mandatory | §8.8, §12 | — |
| 15-§22-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §22 b4: Limit staff/platform exposure | §8.8, §12 | — |
| 15-§22-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §22 b5: Preserve audit without unnecessary disclosure | §8.8, §12 | — |
| 15-§22-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §22 b6: Never accept an unauthenticated arbitrary message as authoritative bank evidence | §8.8, §10.3, §12 | — |
| 15-§23-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §23 b1: Ledger / Business Memory | §8.9, §10.2, §12 | 14:FPDR-1 |
| 15-§23-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §23 b2: Customer/Supplier identity | §8.9, §10.1, §10.2, §12 | 16:FPDR-1 |
| 15-§23-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §23 b3: Permission Engine | §8.9, §10.2, §12 | — |
| 15-§23-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §23 b4: audit/idempotency | §8.9, §10.2, §12 | — |
| 15-§23-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §23 b5: Notification foundation | §8.9, §10.2, §12 | 12:FPDR-1 |
| 15-§23-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §23 b6: Smart Credit | §8.9, §10.2 | — |
| 15-§23-7 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §23 b7: Order & Delivery financial linkage | §8.9, §10.2, §12 | — |
| 15-§23-8 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §23 b8: Ask CFO/Daily Intelligence read paths | §8.9, §10.2, §12 | — |
| 15-§24-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §24 b1: guessing among plausible matches | §8.9, §10.3 | — |
| 15-§24-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §24 b2: duplicate revenue creation from bank evidence | §8.9, §10.3 | — |
| 15-§24-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §24 b3: permanent dependence on SendGrid or any one provider | §8.9, §10.3 | — |
| 15-§24-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §24 b4: immutable historic five-minute/24-hour matching formula | §8.9, §10.3 | — |
| 15-§24-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §24 b5: global system lock on reconciliation failure | §8.9, §10.3 | — |
| 15-§24-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §24 b6: accepting unauthenticated evidence as authoritative | §8.9, §10.3 | — |
| 15-§25-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §25 n1: Strong unique match verifies existing transaction without duplication | §8.10, §12, §15 | 14:FPDR-1 |
| 15-§25-2 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §25 n2: Duplicate provider event is idempotent | §8.10, §12, §15 | — |
| 15-§25-3 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §25 n3: Multiple candidates require human selection | §8.10, §12, §15 | — |
| 15-§25-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §25 n4: No candidate becomes unlinked evidence, not fabricated transaction | §8.10, §12, §15 | — |
| 15-§25-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §25 n5: Mismatch preserves both facts and variance | §8.10, §12, §15 | — |
| 15-§25-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §25 n6: Repayment links to correct customer credit | §8.10, §10.1, §12, §15 | 14:FPDR-4; 16:FPDR-1 |
| 15-§25-7 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §25 n7: COD evidence does not duplicate Ledger revenue | §8.10, §12, §15 | — |
| 15-§25-8 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §25 n8: Permission revocation before confirmation blocks only pending link | §8.10, §12, §15 | — |
| 15-§25-9 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §25 n9: Provider outage leaves unrelated product operational | §8.10, §12, §15 | — |
| 15-§25-10 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §25 n10: Ask CFO cannot report ambiguous evidence as verified | §8.10, §12, §15 | — |
| 15-§25-11 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §25 n11: Cross-business financial evidence access is denied | §8.10, §12, §15 | — |
| 15-§25-12 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §25 n12: Reversal preserves history rather than erasing prior state | §8.10, §10.1, §12, §15 | 16:FPDR-6 |
| 15-§26-1 | NOT APPLICABLE | SB-P-1.16 | C15@632f3402 | §26 b1: exact five-minute/24-hour matching windows | §11.4 | — |
| 15-§26-2 | NOT APPLICABLE | SB-P-1.16 | C15@632f3402 | §26 b2: UTR-specific formulas | §11.4 | — |
| 15-§26-3 | NOT APPLICABLE | SB-P-1.16 | C15@632f3402 | §26 b3: SendGrid as fixed provider | §11.4 | — |
| 15-§26-4 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §26 b4: guessing ambiguous matches | §8.9, §10.3 | — |
| 15-§26-5 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §26 b5: unauthenticated evidence treated as authoritative | §8.9, §10.3 | — |
| 15-§26-6 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §26 b6: reconciliation failure globally blocking unrelated work | §8.9, §10.3 | — |
| 15-§27 | NOT APPLICABLE | SB-P-1.16 | C15@632f3402 | §27 Provenance and Hydration Coverage (whole section: p1, p2) | §11.4 | — |
| 15-§28-1 | IN SCOPE | SB-P-1.16 | C15@632f3402 | §28 p1: Complete only when authenticated evidence ingestion, deterministic/idempotent matching, a… | §8.10, §12, §15 | — |
| 3-§1 | NOT APPLICABLE | SB-P-1.14 | C3@d8c26c07 | §1 Feature Identity (whole section: p1, p2, p3) | §11.4 | — |
| 3-§2 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §2 Founder Problem Statement (whole section: b1, b2, b3, b4, b5, b6, b7, b8, p2, p3) | §11.2 | — |
| 3-§3 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §3 Lighthouse Principle (whole section: b1, b2, b3, b4, b5, b6, b7) | §11.2 | — |
| 3-§4 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §4 Core Business States (whole section: n1, n2, n3, n4, p2) | §11.2 | 14:FPDR-1; 14:FPDR-4 |
| 3-§5 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §5 Supported Input Paths (whole section: p1, b1, b2, b3, b4, p3, p5, p6, p7) | §11.2 | — |
| 3-§6 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §6 Immediate Confirmation (whole section: p1, b1, b2, b3, b4, b5, b6, b7, b8, p3) | §11.2 | — |
| 3-§7 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §7 Clarification Rules (whole section: p1, b1, b2, b3, b4, b5, b6, b7, p3) | §11.2 | — |
| 3-§8 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §8 Correction and Audit History (whole section: p1, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, p4) | §11.2 | 14:FPDR-1; 14:FPDR-4 |
| 3-§9-1 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §9 retrieve history by date or period | §11.2 | — |
| 3-§9-2 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §9 retrieve by customer or supplier — party/counterparty reference level | §11.2 | — |
| 3-§9-3 | ASSIGNED TO LATER MISSION | SB-P-1.17 / SB-P-1.18 | C3@d8c26c07 | §9 retrieve by customer or supplier — structured directory-indexed identity | §11.1 | — |
| 3-§9-4 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §9 retrieve by category/purpose | §11.2 | — |
| 3-§9-5 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §9 retrieve by payment method | §11.2 | — |
| 3-§9-6 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §9 retrieve by amount range where useful | §11.2 | — |
| 3-§9-7 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §9 retrieve by credit/repayment state | §11.2 | — |
| 3-§9-8 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §9 retrieve by linked document | §11.2 | — |
| 3-§9-9 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §9 retrieve by product or stock relationship where available | §11.2 | — |
| 3-§9-10 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §9 example: spend on bakery supplies last month (purpose + period) | §11.2 | — |
| 3-§9-11 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §9 example: payments to ABC Traders in August (counterparty + period) | §11.2 | — |
| 3-§9-12 | IN SCOPE | SB-P-1.16 | C3@d8c26c07 | §9 example: what does Shameer still owe me (authoritative customer owed-balance truth) | §8.2, §10.1, §12, §15 | 14:FPDR-1; 16:FPDR-1; 16:FPDR-2; 16:FPDR-10 |
| 3-§9-13 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §9 example: find the receipt for that mixer purchase (linked document) | §11.2 | — |
| 3-§9-14 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §9 conversational and dashboard/report retrieval read the same underlying truth | §11.2 | — |
| 3-§10 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §10 Reports and Exports (whole section: b1, b2, b3, b4, b5, p2) | §11.2 | — |
| 3-§11-1 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §11 Owner: full authorized Ledger records, corrections and exports | §11.2 | — |
| 3-§11-2 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §11 Manager: delegated access only; not automatically Owner access | §11.2 | — |
| 3-§11-3 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §11 Employee/Staff: add or view only permitted operational records | §11.2 | — |
| 3-§11-4 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §11 Staff do not receive Owner profit intelligence, Ask CFO or unrestricted analytics by default | §11.2 | — |
| 3-§11-5 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §11 Customer/Supplier/Delivery Staff: no general Ledger access | §11.2 | — |
| 3-§11-6 | IN SCOPE | SB-P-1.16 / SB-P-1.17 / SB-P-1.18 | C3@d8c26c07 | §11 Customer/Supplier/Delivery participate only in specific minimum-information workflows | §8.7, §12 | — |
| 3-§11-7 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §11 every record remains business-scoped | §11.2 | — |
| 3-§12 | DELEGATED | SB-P-1.14 and others per FCTM-14 | C3@d8c26c07 | §12 WhatsApp and Conversation Workspace (whole section: b1, b2, b3, p2, p3) | §11.2 | — |
| 3-§13 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §13 Relationship to Ask CFO (whole section: p1, p2, p3) | §11.2 | — |
| 3-§14 | DELEGATED | SB-P-1.14 and others per FCTM-14 | C3@d8c26c07 | §14 Relationship to Daily Intelligence (whole section: b1, b2, b3, p2) | §11.2 | — |
| 3-§15-1 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Universal Document Intelligence | §11.2 | — |
| 3-§15-2 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Human Language Layer | §11.2 | — |
| 3-§15-3 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Basic Voice / Voice Plus | §11.2 | — |
| 3-§15-4 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Permission Engine | §11.2 | — |
| 3-§15-5 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Conversation Engine | §11.2 | — |
| 3-§15-6 | DELEGATED | SB-P-1.15 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Smart Reminder Engine | §11.2 | — |
| 3-§15-7 | ASSIGNED TO LATER MISSION | SB-P-1.17 / SB-P-1.18 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Customer/Supplier identity | §11.1 | — |
| 3-§15-8 | IN SCOPE | SB-P-1.16 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Smart Credit Awareness | §8.2, §10.2, §12 | — |
| 3-§15-9 | IN SCOPE | SB-P-1.16 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Payment Verification / Bank Reconciliation | §8.4, §10.2, §12 | — |
| 3-§15-10 | ASSIGNED TO LATER MISSION | SB-P-1.17 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Stock / Supplier / Reorder Intelligence | §11.1 | — |
| 3-§15-11 | ASSIGNED TO LATER MISSION | SB-P-1.17 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: POS bridge where enabled | §11.1 | — |
| 3-§15-12 | ASSIGNED TO LATER MISSION | SB-P-1.18 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Smart Order & Delivery | §11.1 | — |
| 3-§15-13 | ASSIGNED TO LATER MISSION | SB-P-1.18 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Staff / HR where authorized | §11.1 | — |
| 3-§16 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §16 AI Behaviour (whole section: b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14) | §11.2 | — |
| 3-§17 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §17 Failure and Exception Principles (whole section: b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, p2) | §11.2 | — |
| 3-§18 | DELEGATED | SB-P-1.14 and others per FCTM-14 | C3@d8c26c07 | §18 Privacy and Integrity (whole section: p1, b1, b2, b3, b4, b5, b6) | §11.2 | — |
| 3-§19-1 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §19 acceptance 1: text income/expense recording | §11.2 | — |
| 3-§19-2 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §19 acceptance 2: credit and repayment recording | §11.2 | — |
| 3-§19-3 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §19 acceptance 3: voice-created Ledger event | §11.2 | — |
| 3-§19-4 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §19 acceptance 4: image/document-created draft with preview/confirmation | §11.2 | — |
| 3-§19-5 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §19 acceptance 5: ambiguous-input clarification | §11.2 | — |
| 3-§19-6 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §19 acceptance 6: duplicate/retry protection | §11.2 | — |
| 3-§19-7 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §19 acceptance 7: correction with durable audit history | §11.2 | — |
| 3-§19-8 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §19 acceptance 8: period/party search | §11.2 | — |
| 3-§19-9 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §19 acceptance 9: receipt/document retrieval linkage | §11.2 | — |
| 3-§19-10 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §19 acceptance 10: permission-scoped staff contribution | §11.2 | — |
| 3-§19-11 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §19 acceptance 11: Owner-only financial intelligence boundary (Ledger slice; Ask CFO is SB-P-1.15) | §11.2 | — |
| 3-§19-12 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §19 acceptance 12: CSV/Excel/PDF export consistency | §11.2 | — |
| 3-§19-13a | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §19 acceptance 13 (Workspace slice): identical business semantics across channels | §11.2 | — |
| 3-§19-13b | ASSIGNED TO LATER MISSION | SB-P-1.20 | C3@d8c26c07 | §19 acceptance 13 (WhatsApp slice): identical business semantics across channels | §11.1 | — |
| 3-§19-14 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §19 acceptance 14: cross-business isolation | §11.2 | — |
| 3-§20 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §20 Non-goals / Rejected Historical Behaviour (whole section: b1, b2, b3, b4, b5, b6) | §11.2 | — |
| 3-§21 | NOT APPLICABLE | SB-P-1.14 | C3@d8c26c07 | §21 Historical Corrections Preserved (whole section: p1, p2) | §11.4 | — |
| 3-§22 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §22 Implementation Dependency Rule (whole section: p1, p2) | §11.2 | — |
| 3-§23 | IN SCOPE | SB-P-1.16 | C3@d8c26c07 | §23 Completion Gate (p1) | §8.10, §12, §15 | — |
| 24-§21-4 | IN SCOPE | SB-P-1.16 | C24@0c1dcbb2 | §21 b3: confirmation required for credit overrides | §8.7, §12 | — |
| 24-§21-5 | IN SCOPE | SB-P-1.16 | C24@0c1dcbb2 | §21 b4: confirmation required for payment match resolution | §8.7, §12 | — |
| 9-§12-11 | IN SCOPE | SB-P-1.16 | C9@649c55f3 | §12 b11: Human Language Layer reused by Smart Credit Awareness (layer provided by SB-P-1.13; reuse verified by consumer) | §8.7, §12 | — |
| 10-§17-5 | IN SCOPE | SB-P-1.16 | C10@5c145ed7 | §17 b4: clarify: multiple payment matches | §8.5, §12 | — |
| 22-§17-3 | IN SCOPE | SB-P-1.16 | C22@61e1bb91 | §17 b2: adapter pattern: payment/bank providers | §8.4, §10.2, §12 | — |
| 22-§4-1 | DELEGATED | SB-P-1.14 | C22@61e1bb91 | §4 p1; b2; b8: one authoritative business-memory model across features/channels (customers/credit, payments/reconciliation listed) | §11.2 | — |
| 22-§5-5 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §5 b5: shared identity: customer | §11.2 | 16:FPDR-1 |
| 22-§5-9 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §5 b9: shared identity: external integration/provider references | §11.2 | — |
| 22-§11-4 | DELEGATED | SB-P-1.15 | C22@61e1bb91 | §11 b4: reminder foundation use: credit follow-up | §11.2 | — |
| 22-§12 | DELEGATED | SB-P-1.15 | C22@61e1bb91 | §12 whole section: Notification Foundation (whole section) | §11.2 | 12:FPDR-1 |
| 22-§14 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §14 whole section: Audit / Human Context Foundation (whole section) | §11.2 | — |
| 22-§15 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §15 whole section: Idempotency / Duplicate Protection (single rule) | §11.2 | — |
| 22-§18-5 | DELEGATED | SB-P-1.15 | C22@61e1bb91 | §18 b5: scheduler job type: sync/reconciliation | §11.2 | — |
| 21-§4-5 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §4 p9: Customer as a bounded external role (purpose-limited participant in customer-credit workflows) | §11.2 | 16:FPDR-8 |
| 21-§13-2 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §13 b2: Customer sees their own order/delivery/credit communication | §11.2 | 16:FPDR-8 |
| 21-§14 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §14 whole section: Temporary / Purpose-limited Support Access (whole section) | §11.2 | — |
| 24-§9-1 | DELEGATED | SB-P-1.13 | C24@0c1dcbb2 | §9 p1: AI receives only the minimum authorized context for the task | §11.2 | — |
| 24-§9-2 | DELEGATED | SB-P-1.13 | C24@0c1dcbb2 | §9 b2; b10: possible context sources incl. customer/credit records and payment verification (consumed when owning domain exists) | §11.2 | — |
| 9-§6-2 | DELEGATED | SB-P-1.13 | C9@649c55f3 | §6 p2: preserve meaning and tone for numbers, dates, quantities, credit | §11.2 | — |
| 9-§9-4 | DELEGATED | SB-P-1.13 | C9@649c55f3 | §9 b3: clarify unclear whether money is paid or owed | §11.2 | — |
| 10-§14-4 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C10@5c145ed7 | §14 b4: during WhatsApp failure: payment reconciliation continues | §11.1 | — |
| 12-§4-1 | DELEGATED | SB-P-1.13 | C12@6d48feff | §4 b1: Basic Voice supports Ledger transaction/credit/repayment input | §11.2 | — |
| 12-§7-5 | DELEGATED | SB-P-1.13 | C12@6d48feff | §7 b5: clarify material uncertainty about payment state | §11.2 | — |
| 12-§7-6 | DELEGATED | SB-P-1.13 | C12@6d48feff | §7 b6: clarify material uncertainty about credit vs repayment | §11.2 | — |
| 12-§21-1 | DELEGATED | SB-P-1.13 | C12@6d48feff | §21 n1: acceptance 1: natural sale/expense/credit/repayment voice input | §11.2 | — |
| 2-§5-3 | DELEGATED | SB-P-1.15 | C2@53635557 | §5 b2: data question: who owes more than ₹5,000? | §11.2 | 15:FDB-3 |
| 2-§5-13 | DELEGATED | SB-P-1.15 | C2@53635557 | §5 b10: advisory question: how can I reduce outstanding credit? | §11.2 | 15:FDB-3 |
| 2-§11-3 | DELEGATED | SB-P-1.15 | C2@53635557 | §11 b2: cross-feature intelligence: customer credit | §11.2 | 15:FDB-3 |
| 2-§11-12 | DELEGATED | SB-P-1.15 | C2@53635557 | §11 b11: cross-feature intelligence: payment verification | §11.2 | — |
| 2-§12-4 | DELEGATED | SB-P-1.15 | C2@53635557 | §12 b2: Ledger depth: customer credit | §11.2 | 15:FDB-3 |
| 2-§12-7 | DELEGATED | SB-P-1.15 | C2@53635557 | §12 b5: Ledger depth: payment evidence | §11.2 | — |
| 2-§25-7 | DELEGATED | SB-P-1.15 | C2@53635557 | §25 b7: acceptance (data questions): credit query | §11.2 | 15:FDB-3 |
| 4-§3-3 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §3 b2: morning briefing: outstanding customer/supplier credit requiring awareness | §11.2 | — |
| 4-§4-6 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §4 b5: pulse check: payment/credit exceptions | §11.2 | — |
| 4-§5-3 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §5 b2: night closing: cash/payment awareness | §11.2 | — |
| 4-§5-4 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §5 b3: night closing: credit and repayment movement | §11.2 | — |
| 4-§6-3 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §6 b2: source of truth: Smart Credit Awareness | §11.2 | — |
| 4-§6-4 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §6 b3: source of truth: Payment Verification | §11.2 | — |
| 4-§11-4 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §11 b4: action continuation: review a payment match | §11.2 | — |
| 11-§8-4 | DELEGATED | SB-P-1.15 | C11@e802745a | §8 b4: cross-feature reuse: Smart Credit Awareness | §11.2 | — |
| 11-§10-3 | DELEGATED | SB-P-1.15 | C11@e802745a | §10 b2: consequential action example: mark customer payment received | §11.2 | — |
| 5-§5-6 | DELEGATED | SB-P-1.14 | C5@80ac648e | §5 b6: receipt field: payment information where present | §11.2 | — |
| 5-§6-1 | DELEGATED | SB-P-1.14 | C5@80ac648e | §6 p1: originals retained per approved storage/retention policy | §11.2 | 14:FPDR-2 |
| 5-§6-2 | DELEGATED | SB-P-1.14 | C5@80ac648e | §6 p1: originals linked to the relevant business records | §11.2 | — |
| 25-§6-1 | DELEGATED | SB-P-1.14 | C25@406ce089 | §6 b12: dependent features include payment/reconciliation evidence | §11.2 | — |
| 25-§17-1 | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | C25@406ce089 | §17 p1: exact long-term retention/deletion duration after cancellation/non-payment | §11.5 | — |
| 25-§17-5 | DELEGATED | SB-P-1.14 | C25@406ce089 | §17 b4: legal/compliance retention needs may differ by object/domain | §11.2 | — |
| 25-§19-1 | DELEGATED | SB-P-1.14 | C25@406ce089 | §19 b5: storage protects financial and compliance evidence (protected classes) | §11.2 | — |
| 1-§16 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §16 whole section: COD and Payment Relationship (reuses shared financial-integrity foundation) | §11.2 | — |
| 7-§3 | ASSIGNED TO LATER MISSION | SB-P-1.17 | C7@65ad91b2 | §3 whole section: Supplier Management (supplier payment/credit relationship; adjacent workflow) | §11.1 | — |
| 13-§10 | NOT APPLICABLE | SB-P-1.17 | C13@4426e8b1 | §10 whole section: Closing Cash (POS cash-count/payment-method variance) | §11.4 | — |
| 17-§4 | ASSIGNED TO LATER MISSION | SB-P-1.17 | C17@7943f74a | §4 whole section: Workspace Layers (lists credit awareness) | §11.1 | — |
| 17-§6 | ASSIGNED TO LATER MISSION | SB-P-1.17 | C17@7943f74a | §6 whole section: Financial / Business Summary (outstanding credit; payment/reconciliation state) | §11.1 | — |
| 17-§13 | DELEGATED | SB-P-1.12 | C17@7943f74a | §13 whole section: Users and Permissions (visibility restriction) | §11.2 | — |
| 17-§14 | DELEGATED | SB-P-1.12 | C17@7943f74a | §14 whole section: Permission Enforcement (backend enforcement) | §11.2 | — |
| 18-§15 | NOT APPLICABLE | SB-P-1.19 | C18@6b96b10a | §15 whole section: Billing / Payment Provider Independence (subscription billing reconciliation) | §11.4 | — |
| 18-§18 | NOT APPLICABLE | SB-P-1.19 | C18@6b96b10a | §18 whole section: Error and Exception Behavior (subscription billing ambiguity) | §11.4 | — |
| 19-§15 | DELEGATED | SB-P-1.19 | C19@94aa6f24 | §15 whole section: Merchant-content Access Boundary (no routine browsing of credit/customer records) | §11.2 | — |
| 20-§11 | ASSIGNED TO LATER MISSION | SB-P-1.19 | C20@56ed4d11 | §11 whole section: First Practical Win (verify/reconcile a payment where applicable) | §11.1 | — |
| 20-§12 | ASSIGNED TO LATER MISSION | SB-P-1.19 | C20@56ed4d11 | §12 whole section: First 24-hour Experience (first reminder/credit/payment action) | §11.1 | — |
| 23-§16 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C23@2430e1c6 | §16 whole section: Outbound WhatsApp Communication (payment/credit awareness) | §11.1 | — |
| 23-§20 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C23@2430e1c6 | §20 whole section: Retry and Idempotency (payment/credit updates) | §11.1 | — |
| 23-§21 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C23@2430e1c6 | §21 whole section: WhatsApp Outage / Degradation (payment reconciliation continues) | §11.1 | — |
| 1-§5-4 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §5 b4: <Owner> set/confirm COD amounts | §11.2 | — |
| 1-§5-20 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §5 b18: <Delivery Staff> COD amount where applicable | §11.2 | — |
| 1-§9-9 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §9 b8: order draft: payment/COD information | §11.2 | — |
| 1-§9-17 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §9 b16: clarify when payment/COD amount is inconsistent | §11.2 | — |
| 1-§12-5 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §12 b5: COD amount reviewed where applicable | §11.2 | — |
| 1-§13-6 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §13 b5: Delivery Staff record COD collected amount | §11.2 | — |
| 1-§15-6 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §15 b5: delivery proof includes COD/payment evidence | §11.2 | — |
| 1-§17-7 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §17 b6: notification: payment/COD exception | §11.2 | — |
| 1-§21-11 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §21 b11: AI must not create payment facts without evidence | §11.2 | — |
| 1-§22-10 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §22 b10: business memory: COD/payment evidence/link | §11.2 | — |
| 1-§23-12 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §23 b12: reuse Payment Verification / Ledger services | §11.2 | — |
| 1-§24-12 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §24 b12: handle COD mismatch | §11.2 | — |
| 1-§24-14 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §24 b14: handle payment/linking failure | §11.2 | — |
| 1-§26-11 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §26 n11: acceptance 11: COD discrepancy remains visible and does not duplicate Ledger revenue | §11.2 | — |
| 1-§26-14 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §26 n14: acceptance 14: duplicate/retry does not create duplicate order/payment events | §11.2 | — |
| 1-§27-9 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §27 b9: dependency: Payment Verification / Ledger for financial closure | §11.2 | — |
| 2-§3-5 | DELEGATED | SB-P-1.15 | C2@53635557 | §3 b4: <Owner> ask about cash, expenses, credits and other authorized business data | §11.2 | — |
| 2-§20-5 | DELEGATED | SB-P-1.15 | C2@53635557 | §20 b7: natural business-term mixing (illustrative list incl. 'credit'; grouped p3 + b4–b11 upstream) | §11.2 | — |
| 11-§4-7 | DELEGATED | SB-P-1.15 | C11@e802745a | §4 b7: reminder model: related customer/supplier/employee/document/order/credit/compliance object | §11.2 | — |
| 11-§9-1 | DELEGATED | SB-P-1.15 | C11@e802745a | §9 b1: a reminder does not mean the payment happened | §11.2 | — |
| 11-§9-5 | DELEGATED | SB-P-1.15 | C11@e802745a | §9 b5: a reminder does not mean the customer paid | §11.2 | — |
| 11-§9-7 | DELEGATED | SB-P-1.15 | C11@e802745a | §9 p2: the actual business event is recorded through the governed feature service | §11.2 | — |
| 11-§22-6 | DELEGATED | SB-P-1.15 | C11@e802745a | §22 n6: acceptance 6: reminder due does not create payment/event automatically | §11.2 | — |
| 12-§9-2 | DELEGATED | SB-P-1.13 | C12@6d48feff | §9 b6: mixed Kerala business speech (illustrative vocabulary incl. 'credit') | §11.2 | — |
| 24-§6-2 | DELEGATED | SB-P-1.13 | C24@0c1dcbb2 | §6 b9: intent classes (illustrative; includes payment/credit query) | §11.2 | — |
| 24-§25-5 | DELEGATED | SB-P-1.13 | C24@0c1dcbb2 | §25 b4: careful handling of sensitive HR/customer/payment data | §11.2 | — |
| 17-§10 | ASSIGNED TO LATER MISSION | SB-P-1.18 | C17@7943f74a | §10 whole section: Order & Delivery Views (COD/payment issues) | §11.1 | — |
| 25-§17-4 | DELEGATED | SB-P-1.14 | C25@406ce089 | §17 b3: cancellation/non-payment must not trigger uncontrolled destructive deletion by a fixed timer | §11.2 | — |
| BP-§5.3-1 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §5.3 canonical repository vs delivery divergence: mission accounts for delivery path; merge is not production proof | §8.9, §10.2 | — |
| BP-§5.4-1 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §5.4 genuinely new external infrastructure (payment/bank evidence provider) needs activation, credentials, failure, rollback and verification identified in Blueprint/EIS | §8.4, §10.1, §10.2, §12 | 16:FPDR-6 |
| BP-§6.1-1 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §6.1 no UI, AI model, reminder, scheduler, document pipeline or channel may invent authority | §8.9, §10.3, §12 | — |
| BP-§6.2-1 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §6.2 consequential credit/repayment/link writes use the one Business Command path ending in a deterministic domain command, authoritative write and audit | §8.9, §10.2, §12 | 16:FPDR-10 |
| BP-§6.3-1 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §6.3 Supabase/Postgres remains authoritative for structured business truth | §8.9, §10.2, §12 | — |
| BP-§6.5-1 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §6.5 credit follow-up reuses the one Reminder / Automation kernel | §8.3, §10.2, §12 | — |
| BP-§8-1 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §8 Smart Business must work without WhatsApp: credit and payment flows usable natively | §8.7, §10.2, §12 | — |
| BP-§9-2 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §9 row 5: SB-P-1.16 advances 'Contract 3 completion', 14, 15 (assignment source) | §8.10, §10.2 | 14:FPDR-1 |
| BP-§9-AL | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §9 assignment lock: BUILD NOW assignment changes need a recorded Founder decision; technical incompleteness never authorizes a change | §8.10, §10.2 | — |
| BP-§10.3-C2 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.3 engineering correction: SB-P-1.16 builds customer-credit-specific structures and financial integrity on the mature Ledger | §8.2, §10.2, §12 | 14:FPDR-1 |
| BP-§10.3-S2 | ASSIGNED TO LATER MISSION | SB-P-1.17 / SB-P-1.18 | BP@9dfdd924 | §10.3 structured Customer/Supplier-directory-indexed search after identities are established (later missions SB-P-1.17 / SB-P-1.18) | §11.1 | 16:FPDR-1 |
| BP-§10.5-O | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 product outcome: complete credit, repayment, payment evidence and reconciliation without turning uncertainty into false truth | §8.10, §12, §15 | — |
| BP-§10.5-W1 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 required work area b1: customer-credit-specific records and balances | §8.2, §10.1, §12 | 16:FPDR-1 |
| BP-§10.5-W2 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 required work area b2: repayment history | §8.2, §12 | — |
| BP-§10.5-W3 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 required work area b3: ageing/follow-up awareness | §8.3, §10.1, §12 | 16:FPDR-5 |
| BP-§10.5-W4 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 required work area b4: Smart Credit warn-not-block behavior | §8.3, §10.1, §12 | 16:FPDR-4 |
| BP-§10.5-W5 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 required work area b5: payment evidence | §8.4, §10.1, §12 | 16:FPDR-6 |
| BP-§10.5-W6 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 required work area b6: bank/payment reconciliation | §8.5, §12 | — |
| BP-§10.5-W7 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 required work area b7: deterministic candidate matching | §8.5, §12 | — |
| BP-§10.5-W8 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 required work area b8: ambiguity review | §8.5, §12 | — |
| BP-§10.5-W9 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 required work area b9: idempotent linking | §8.5, §12 | — |
| BP-§10.5-W10 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 required work area b10: visible unresolved discrepancies | §8.5, §10.1, §12 | 16:FPDR-3 |
| BP-§10.5-W11 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 required work area b11: auditable correction/reconciliation decisions | §8.5, §12 | — |
| BP-§10.5-E1 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 Founder-approved experience p1: Smart Credit warns the Owner but does not automatically refuse a sale or customer relatio… | §8.10, §12, §15 | — |
| BP-§10.5-E2 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 Founder-approved experience p2: Payment evidence may be verified, unmatched, partially matched, or ambiguous | §8.10, §10.1, §12, §15 | 16:FPDR-3 |
| BP-§10.5-E3 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 Founder-approved experience p3: Ambiguous matches require review | §8.10, §12, §15 | — |
| BP-§10.5-E4 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 Founder-approved experience p4: Reconciliation cannot duplicate income or repayment | §8.10, §12, §15 | 16:FPDR-10 |
| BP-§10.5-A1 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 Founder Scenario A clause 1: customer has overdue balance; Owner attempts another credit sale | §8.10, §10.1, §12, §15 | 16:FPDR-5 |
| BP-§10.5-A2 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 Founder Scenario A clause 2: shows ageing/risk clearly | §8.10, §10.1, §12, §15 | 16:FPDR-4 |
| BP-§10.5-A3 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 Founder Scenario A clause 3: allows the Owner to proceed, override, or decline | §8.10, §12, §15 | — |
| BP-§10.5-B1 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 Founder Scenario B clause 1: one payment-evidence item plausibly matches multiple open transactions; candidates shown | §8.10, §12, §15 | — |
| BP-§10.5-B2 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 Founder Scenario B clause 2: system requires review | §8.10, §12, §15 | — |
| BP-§10.5-B3 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 Founder Scenario B clause 3: repeating the confirmed link creates no duplicate financial entries | §8.10, §12, §15 | — |
| BP-§10.5-X | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §10.5 exit principle: know who owes what and what was actually paid; never pretend uncertain money is settled or make credit decisions for the Owner | §8.10, §12, §15 | 16:FPDR-10 |
| BP-§11-1 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §11 SB-P-1.16 Financial Integrity underpins COD/payment closure and trustworthy credit/payment behaviour (adapter-ready for SB-P-1.18) | §8.6, §10.2, §12 | — |
| BP-§11-2 | DELEGATED | SB-P-1.12 | BP@9dfdd924 | §11 SB-P-1.12 Authority/Identity underpins all later role/permission behaviour | §11.2 | — |
| BP-§11-3 | DELEGATED | SB-P-1.14 | BP@9dfdd924 | §11 SB-P-1.14 Business Memory/UDI underpins later financial integrity | §11.2 | — |
| BP-§11-4 | DELEGATED | SB-P-1.15 | BP@9dfdd924 | §11 SB-P-1.15 Reminder/Automation underpins credit follow-up | §11.2 | — |
| BP-§11-5 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §11 a later mission may complete a contract partly advanced earlier but must not claim earlier work as newly created | §8.9, §10.2 | — |
| BP-§13-1 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §13 Completion Report includes an Experience Verification Matrix seeded from §10.5 at Stage 4 | §8.10, §10.2 | — |
| BP-§13-9 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §13 item 9: §10.5 Founder Runtime Verification scenarios A and B are Founder-reserved and locked at Stage 8 | §8.10, §10.2 | — |
| BP-§14-1 | IN SCOPE | SB-P-1.16 | BP@9dfdd924 | §14 dual-intake rule: consume validated OLE learning and the Phase 1 guide until backfill verified complete | §8.9, §10.2 | — |
| BP-§15-1 | NOT APPLICABLE | SB-P-1.16 | BP@9dfdd924 | §15 unresolved Founder decision item 1: current free-trial policy | §11.4 | — |
| BP-§15-2 | NOT APPLICABLE | SB-P-1.16 | BP@9dfdd924 | §15 unresolved Founder decision item 2: exact Voice Plus price | §11.4 | — |
| BP-§15-3 | NOT APPLICABLE | SB-P-1.16 | BP@9dfdd924 | §15 unresolved Founder decision item 3: exact Staff/HR price | §11.4 | — |
| BP-§15-4 | NOT APPLICABLE | SB-P-1.16 | BP@9dfdd924 | §15 unresolved Founder decision item 4: exact Smart Stock price | §11.4 | — |
| BP-§15-5 | NOT APPLICABLE | SB-P-1.16 | BP@9dfdd924 | §15 unresolved Founder decision item 5: exact Smart Order & Delivery price | §11.4 | — |
| BP-§15-6 | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | BP@9dfdd924 | §15 unresolved Founder decision item 6: exact long-term retention/deletion duration after cancellation/non-payment | §11.5 | — |
| BP-§15-7 | NOT APPLICABLE | SB-P-1.16 | BP@9dfdd924 | §15 unresolved Founder decision item 7: employee KYC/national-ID necessity and legal/privacy basis | §11.4 | — |
| BP-§15-8 | NOT APPLICABLE | SB-P-1.16 | BP@9dfdd924 | §15 unresolved Founder decision item 8: broader wholesaler/marketplace expansion | §11.4 | — |
| BP-§15-9 | UNRESOLVED FOUNDER DECISION | SB-P-1.16 | BP@9dfdd924 | §15 unresolved Founder decision item 9: third-party underwriting/lending ecosystem | §11.5 | — |
| BP-§16-1 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b1: Ask CFO as write-capable authority | §11.3 | — |
| BP-§16-2 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b2: AI accusation/judgment of employees or customers | §11.3 | — |
| BP-§16-3 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b3: continuous staff GPS surveillance by default | §11.3 | — |
| BP-§16-4 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b4: automated wage punishment | §11.3 | — |
| BP-§16-5 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b5: blind supplier procurement without valid Owner delegation | §11.3 | — |
| BP-§16-6 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b6: hard credit blocking by default | §11.3 | — |
| BP-§16-7 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b7: custom client-specific POS modification inside core | §11.3 | — |
| BP-§16-8 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b8: marketplace behavior inside Smart Order & Delivery | §11.3 | — |
| BP-§16-9 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b9: customer silence automatically invalidating otherwise sufficiently proven delivery | §11.3 | — |
| BP-§16-10 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b10: duplicate channel-specific Business Memory | §11.3 | — |
| BP-§16-11 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b11: duplicate channel-specific permission models | §11.3 | — |
| BP-§16-12 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b12: separate AI brains per feature/channel | §11.3 | — |
| BP-§16-13 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b13: model conversation history as permanent Business Memory | §11.3 | — |
| BP-§16-14 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b14: uncontrolled binary-media concentration in Supabase for convenience | §11.3 | — |
| BP-§16-15 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b15: provider URLs as permission authority/business identity | §11.3 | — |
| BP-§16-16 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b16: destructive subscription-driven schema creation/deletion | §11.3 | — |
| BP-§16-17 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b17: broad routine Super Admin access to merchant private data | §11.3 | — |
| BP-§16-18 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b18: revival of '/survey' or obsolete domains/routes | §11.3 | — |
| BP-§16-19 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b19: old Daily Intelligence timing that conflicts with the approved 7:00 AM / 10:30 AM / 10:00… | §11.3 | — |
| BP-§16-20 | OUT OF BUILD SCOPE | SB-P-1.16 | BP@9dfdd924 | §16 rejection b20: independent Catalog product expansion | §11.3 | — |
| GPCV-§9-1 | OUT OF BUILD SCOPE | SB-P-1.16 | GPCV@ee76d920 | §9 automatic hard customer-credit blocking by default — REJECT | §11.3 | — |
| GPCV-§9-10 | OUT OF BUILD SCOPE | SB-P-1.16 | GPCV@ee76d920 | §9 embedded lending/underwriting inside current Smart Business core — REJECT FOR CURRENT CORE | §11.3 | — |

## 20. Engineering Review

### 20.1 Scope, baseline and independence

- **Inputs.** Approved Sections 1–19 (Blueprint v0.3, blob `5956ed11`); the Stage 6 Builder Review (blob `c9a93566`, PR #967); the canonical FCTM (blob `94dd5220`, 555 rows, including the 26 `16:FPDR-10` Founder-decision citations of PR #973); `16:FPDR-1` to `16:FPDR-9` (blob `30b19a80`) and `16:FPDR-10` (record `22-…`, blob `bd5a5f0c`); the Truth Pack (`4a7bfe4f`), the Stage 3 reconciliation report (`b40b988c`) and the Institutional Learning Intake (`2cf06c17`); the six specialist reviews SR-01 to SR-06 and the FIN-01 review (`specialists/01` to `07`); and the Mission Control rulings MQ-01 and MQ-03 (MC-224, MC-225), OQ-03 (MC-225), the finding disposition and 14-Q1 hold (MC-226) and MQ-07 (MC-230).
- **Repository state.** Application code, schema, tests, workflows and configuration are unchanged from the Stage 6 base `3c9a7743` to `main@22bbf422`: every change in that range is documentation under `communication/` and `docs/phase-1-mission-blueprint/`.
- **Independence.** Same-actor authorship across Stages 2, 3 (preparation), 4, 6 and 7 is a correlated-assumption risk. The six specialist reviews were run as same-provider Claude subagents commissioned by the author; they are mandatory domain inputs, not independent assurance and not Stage 19 (Section 21.9). Stage 19 independent verification by another actor remains mandatory (Source 18 §4.9).
- **Access.** No production system, Supabase test project, provider dashboard, CLI, deployment or merchant record was accessed. No SQL, migration, rehearsal, profiling or integration was executed.

### 20.2 Evidence categories

| Category | Content | Use in this section |
|---|---|---|
| **Verified repository fact** | Stage 6 evidence E-01 to E-14 at `3c9a7743`, unchanged at `5a4d2243`. Also: `.github/workflows/build-assurance.yml` (`2aadab0b`, lint and typecheck on push and PR to `main`); `full-assurance.yml` (`464b3e9c`, Supabase-dependent `vitest` suite, path-filtered); `markdown-quality-gate.yml` (`5c92d6ac`); 28 application test files under `tests/` (catalog import, inventory, parser lease), none for transactions; `vitest.full.config.ts` requires `SUPABASE_TEST_URL`, `SUPABASE_TEST_ANON_KEY` and `SUPABASE_TEST_SERVICE_ROLE_KEY` | Current architecture (20.3); CI tiers (20.7.6) |
| **Locked upstream specification (not implemented)** | SB-P-1.12 EIS (`c444f750`): `EIS-ID-03`, `EIS-ID-05`, `EIS-KER-02`, `-06` to `-09`, `EIS-AUT-01`, `EIS-ISO-01` to `-04`, `EIS-CNF-01` to `-06`. SB-P-1.13 EIS (`9a1e723d`): `EIS13-CMD-02`. SB-P-1.14 EIS (`899a0fe1`): `EIS14-LDG-01` to `-06`, `EIS14-TOT-01`, `EIS14-CMD-01` to `-03`, `EIS14-IDM-01`, `-02`, `EIS14-SRC-01`, `-03`, `EIS14-MIG-01` to `-06`. SB-P-1.15 EIS (`75dcf385`): `EIS15-TZ-*`, reminder, scheduler and notification foundations | Every design in 20.4 and 20.5 consumes these and adds no parallel foundation |
| **Actor inference (to be confirmed at EIS or by specialists)** | That `EIS-AUT-01` can admit provider events (G-W1); that settlement files carry payment-level lines; that providers report minor units; the logical designs in 20.4 | Marked "proposed" wherever used |
| **Unavailable evidence** | Live grants, RLS and policies; test-project state (paused, Truth Pack Δ-06); historical credit-method sale counts and shape; provider capabilities and terms; AI provider; CI runs (`actions/runs` total 0). All `UNVERIFIED — ACCESS REQUIRED` | Never treated as PASS |

### 20.3 Current architecture (verified) and target component map (proposed)

**Current architecture (verified).**

- **Application.** TanStack Start, built for a Cloudflare target. `src/server.ts` exposes only a `fetch` handler; there is no scheduler and no webhook route.
- **Data and auth.** Supabase Postgres and Auth. One business per Owner, with Owner-only RLS (`owner_id = auth.uid()`). There are no memberships, roles or participant identities.
- **Ledger.** A `sale`/`purchase` table with a free-text `party_name` and `payment_method` including `credit`. Writes are a direct client insert, the Owner `UPDATE` policy, and the legacy `correct_transaction` (`SECURITY INVOKER`) with directly insertable correction events.
- **Grants (repository text; live state unverified).** Per role, on the Ledger family: `anon` and `authenticated` hold broad default grants; `authenticated` clients insert `transactions` directly and the Owner holds an `UPDATE` policy; the Owner inserts `transaction_correction_events` directly; the legacy `correct_transaction` runs `SECURITY INVOKER`. Live effective access is evidence held for the P-2 and P-3 inventory before Stage 13 (SR02-02).
- **Service role.** A service-role client used by the catalog-import server path. The source-complete handler inventory required by `EIS-ISO-04` is an EIS obligation (P-4).
- **Providers.** No payment, messaging or AI SDK.
- **Precedents.** The inventory movement command (idempotency keys with payload fingerprint) and its test suite (concurrency, idempotency, RLS cross-business, shared write path, audit integrity) are the nearest working pattern. So are the catalog link preview tokens, which are the precursor of `confirmation_bindings`.

**Target component map (proposed).** Each component consumes the locked upstream foundations; none re-implements them.

| Code | Component | Consumes | Owner of the component |
|---|---|---|---|
| C-ID | Credit-to-participant identity reference | SB-P-1.12 participant identity (`EIS-ID-03`) | SB-P-1.16 (`16:FPDR-1`) |
| C-LDG | Credit facts on the four-state Ledger | SB-P-1.14 `EIS14-LDG-01` to `-04`; `DTX` | SB-P-1.14 model; SB-P-1.16 credit-specific use |
| C-DUE | Due/expected date and ageing | `EIS15-TZ-*` business timezone | SB-P-1.16 |
| C-BAL | Canonical balance and ageing definition | C-LDG, C-ID, C-REP | SB-P-1.16 |
| C-CAP | Credit capture inputs | Native transaction form; SB-P-1.13 for conversation and voice | SB-P-1.16 |
| C-REP | Repayment allocation and linkage | `EIS14-LDG-03` | SB-P-1.16 |
| C-THR | Threshold and warn-not-block decision record | C-BAL; SB-P-1.12 kernel | SB-P-1.16 |
| C-FUP | Owner follow-up and communication preparation | SB-P-1.15 reminders; SB-P-1.13 drafting | SB-P-1.16 (preparation only) |
| C-READ | Intelligence and reconciliation reads | C-BAL; SB-P-1.15 Ask CFO and Daily Intelligence | Readers: SB-P-1.15; data: SB-P-1.16 |
| C-ORD | Order and COD linkage adapter | C-LDG, E-LINK | Adapter: SB-P-1.16; demonstration: SB-P-1.18 |
| C-AUTH | Capability and role boundary | SB-P-1.12 registry and kernel | Capabilities registered by SB-P-1.16 |
| C-CNF | Clarification and exact confirmation | `EIS-CNF-01` to `-03` | SB-P-1.12 primitive; SB-P-1.16 use |
| C-AUD | Correction and audit | `EIS14-CMD-02`, `-03` | SB-P-1.14 command; SB-P-1.16 use |
| C-PRIV | Privacy, isolation and dignity | `EIS-ISO-01` to `-04` | Shared |
| E-STATE | Verification state model | — | SB-P-1.16 |
| E-SRC | Evidence source adapters and provider-account binding | `EIS-ID-05`, `EIS-AUT-01`, `EIS-KER-06`, `EIS-CNF-06`; `22-§17-3` | SB-P-1.16 (adapter contract); provider: not selected |
| E-REC | Evidence record | SB-P-1.14 governed storage for raw evidence | SB-P-1.16 |
| E-MATCH | Deterministic candidate matcher | C-BAL, E-REC | SB-P-1.16 |
| E-LINK | Evidence-to-record linking | `DTX`; `EIS-CNF-01` | SB-P-1.16 |
| E-REV | Review queue (ambiguity, mismatch, unlinked) | C-CNF; C-AUTH | SB-P-1.16 |
| E-IDM | Evidence and link idempotency | `EIS-CNF-04`; `EIS14-IDM-01` | Shared pattern; SB-P-1.16 keys |
| E-RVS | Reversal, refund and chargeback handling | E-STATE, C-AUD | SB-P-1.16 |

### 20.4 Financial-integrity controls (proposed logical design)

Each control states the proposal, the upstream basis, and whether an upstream amendment or Founder decision is needed.

#### 20.4.1 Customer identity reference (EQ-01; SB16-B6-02)

- **Proposal.** A credit-bearing Ledger row carries a business-scoped composite reference to the SB-P-1.12 participant identity, `(business_id, participant_id)`. Credit-bearing rows are a `sale` with `payment_method = credit`, a `credit` with direction `owed_to_business`, and a `repayment`.
- **How the reference is written.** Only the governed create, correct and attribute commands set it, inside the same transaction as the Ledger write (`DTX`).
- **Ambiguity.** Ambiguous names return a clarification. There is no automatic match (`16:FPDR-1`).
- **Lifecycle.** A null reference means "unattributed". Changing a reference is an audited correction.
- **Derivation.** A `repayment` carries no independently settable participant reference: its participant is derived from its settlement target. The EIS states this as an invariant enforced by the governed commands (carry-forward CF-1, Section 21.8).
- **Basis.** `EIS-ID-03` (one shared participant record per business); `EIS14-SRC-01` (SB-P-1.14 creates no identity table).
- **Amendment or decision needed.** No Founder decision. This is an additive change to the `transactions` family, so it must be sequenced **after** SB-P-1.14 M14-1 (`EIS14-MIG-01`) and coordinated with the PQ-2 / `DTX` cut-over. If Mission Control prefers a separate link table written by the same command, the EIS records the choice. Either form satisfies `14-§21-6` (no separate credit database).

#### 20.4.2 Credit and repayment linkage (SB16-B6-01, -05)

- Credit facts use the SB-P-1.14 four-state model (`EIS14-LDG-01`, `-02`). A credit-method sale remains one `sale` row (`EIS14-LDG-04`).
- A repayment references exactly one settlement target (`EIS14-LDG-03`).
- **Proposed for EQ-04.** A lump sum is recorded by one governed allocation command that takes an allocation list `(target, amount)` and creates one repayment row per target, atomically. Each allocation must not exceed that target's current outstanding amount, and the allocations must sum to the payment amount; an allocation larger than the outstanding amount is an excess case (20.4.6). There is one idempotency key per command, and one confirmation binding covers the whole allocation. One evidence item may back an allocation group through one link per allocation, with linked amounts governed by the invariants of 20.4.9. Fast Gate fixtures cover one-to-many and many-to-one.
- **Amendment or decision needed.** None for allocation. Excess is treated in 20.4.6.

#### 20.4.3 Due dates and ageing (EQ-02; SB16-B6-03)

- **Proposal.** An optional `due_on` date attribute on credit-bearing targets (credit-method `sale` and `owed_to_business` `credit`). It is set at capture or later by a governed, audited "set or change due date" command. **No default value, no system period and no mandatory entry** (`16:FPDR-5`).
- **Overdue.** Overdue holds only when `due_on` < business-local today **and** the target's outstanding amount is greater than zero. "Business-local today" comes from the Owner-confirmed IANA timezone (`EIS15-TZ-*`). While no timezone is confirmed, overdue is not computed and credit age is shown instead.
- **Ageing.** Credit age is measured from `transaction_date` per open target. Threshold comparison stays separate from due-date status.
- **Amendment or decision needed.** None. The column is SB-P-1.16's, added after M14-1 and on the `DTX` path. Ageing waits for `D15` timezone (`DSCH` for scheduled presentation).

#### 20.4.4 Authoritative balances (EQ-03; SB16-B6-04)

- **Proposal: one hardened, kernel-checked, SQL-level definition**, on the `EIS14-TOT-01` pattern, computed **only from authorized Ledger financial facts**. Evidence-verification status is a separate property shown beside the balance and never changes it (MQ-01 reading A, MC-224/225: the verified-amount rule of `16:FPDR-3` governs evidence-backed repayments only; an ordinary authorized repayment reduces the balance without verification; evidence alone never changes a balance).
  - **Target outstanding** = target amount − Σ(linked repayment amounts).
  - **Customer balance** = Σ target outstanding over attributed targets.
  - **What counts as a target:** current values (after governed corrections) of `sale` rows whose **current** `payment_method` is `credit`, and of `credit` rows with direction `owed_to_business`. If a correction changes a sale away from `credit`, the `EIS14-LDG-03` revalidation applies to its linked repayments and the case goes to review.
  - **What never counts:** unattributed historical credit is reported as a separate "unattributed credit" total. A flagged reversal (20.4.10) changes no balance until the Owner corrects the Ledger.
- **Readers.** Ask CFO, Daily Intelligence, threshold warnings, the review queue and exports all read this one definition (DC-07; `14-§21-6`).
- **Correction guard (C-01).** For every settlement target, the sum of its active repayments never exceeds its current amount, and every active repayment references a target that is currently valid under `EIS14-LDG-03`. Every governed command that can change an operand (record repayment, allocation, correction of a repayment amount or target, correction of a target amount, payment method, type or direction) checks this in the same transaction and, if it would fail, stops and returns a clarification before commit. A correction that would leave excess over a target raises the `16:FPDR-10` D-5 exception: no advance is created automatically, and the Owner chooses explicitly (20.4.6). Whether the guard needs an `EIS14-CMD-02` extension is recorded with upstream question 14-Q6.
- **Measures (C-08, C-25).** Outstanding, collected and held advance are three distinct measures defined once and consumed by every reader; a held advance is neither outstanding nor collected. Representing an advance as an `owed_by_business` credit (`EIS14-LDG-02`; SB-P-1.14 `FPDR-1` "owed to or by") is **PROVISIONAL** (FIN-01), pending 14-Q2 and the EIS.
- **Out of this balance.** Supplier-side `owed_by_business` credit belongs to SB-P-1.17 (`7-§3`). The direction itself is not supplier-only; a customer advance held under 20.4.6 is reported as its own measure, never netted silently into the customer balance.

#### 20.4.5 Historical sales attribution (SB16-B6-06; OQ-05)

- **Proposal.** An Owner-only "attribute historical credit sale" command. It shows the exact sale, the chosen participant and the resulting balance in a preview with a confirmation binding. It writes only the identity reference and an audit event. It creates no new sale, income or repayment, and it preserves the original row identity (`16:FPDR-2`).
- **No automatic assignment.** There is no suggestion-as-assignment by name or phone.
- **Multi-row attribution.** If offered, each row is still listed and bound exactly.
- **Data profile.** A read-only profile of historical credit-method sales, including possible repayments recorded as `sale`, needs separate authorization (OQ-05). No migration or job reinterprets history (`EIS14-LDG-04`).
- **Disclosure (C-07).** Unattributed totals and the attribution preview use EIS-defined arithmetic with explicit disclosure of missing facts. No historical `sale` row is converted into a repayment (MQ-02 open; the interim treatment is disclosure only).

#### 20.4.6 Overpayment and customer advance (SB16-B6-05; `16:FPDR-10`)

- **Decided behaviour (`16:FPDR-10` D-1 to D-6).** An excess repayment stops automatic financial commitment and requests Owner clarification. The Owner may explicitly retain the excess as a separate customer advance, which persists until an explicit Owner-authorized application or refund. There is no automatic income recognition, offset, refund or AI decision, and no automatic advance resulting from historical corrections. Permission, audit, idempotency and amount-conservation requirements are preserved.
- **Excess is not a verification mismatch.** An excess is an authorized repayment or allocation larger than the selected targets' outstanding amount: it is a clarification case under D-1, decided only by the Owner. A verification mismatch is evidence whose amount, direction, currency or reference conflicts with the record it was matched to: it is a verification state under 20.4.7, resolved in review. Neither creates an advance, a repayment or a balance change automatically. Evidence larger than a target's outstanding amount is routed to review; it becomes part of an advance only through an explicit Owner retention (D-2).
- **Obligations M-1 to M-4.** Persistence of a retained advance and a single remaining-advance calculation; explicit Owner-authorized application; explicit Owner-authorized refund; acceptance cases ADV-01 to ADV-10 (Blueprint §15.6).
- **Engineering proposal — PROVISIONAL (FIN-01; not approved).** An advance held as a customer-scoped `owed_by_business` credit row (14-Q2); application through a separate audited relation that leaves the one-target repayment rule intact (14-Q3); refund recorded as a repayment that targets the advance and is excluded from sales, income and collected measures (14-Q4); no new `transaction_type` (14-Q5). Application and refund take the target locks and invariants of 20.4.9 and the keys of 20.4.10. A reversed refund is held as a governed exception (AC-3); its treatment stays open. The EIS finalizes the representation only after the upstream findings.
- **Capabilities.** Retaining, applying and refunding an advance are Owner-reserved (20.5).

#### 20.4.7 Evidence authenticity, verification, upload review and matching as separate concepts (EQ-08; SB16-B6-12)

Four independent fields per evidence item:

| Concept | Values (illustrative; exact identifiers at EIS) | Set by |
|---|---|---|
| Source authentication | `provider_authenticated` (signature and account binding verified); `merchant_submitted` (upload); `unauthenticated` (rejected for authoritative use) | Ingestion path only |
| Provider status | Provider-reported status (for example captured, settled, refunded, disputed) | Provider event only; never shown as funds in the bank (`16:FPDR-6` §2) |
| Verification state | Contract 15 §4 states (pending/unverified, evidence received, matched/verified, ambiguous/review required, mismatched, unlinked, reversed/invalidated) | Matching and review rules |
| Review provenance | `human_reviewed` (actor, binding, time) for merchant-submitted evidence | Review command |

- **Upload rule.** A merchant-submitted item can reach "linked after human review". It never reaches a provider-authenticated or provider-verified label (`16:FPDR-6` §3; `16:FPDR-9` §7).
- **Part-payment versus mismatch.** A verified part-payment and a mismatch never share a label (`16:FPDR-3`).
- **Matching is separate.** The match outcome is a separate link record (20.4.9), so authenticity, verification and matching are three independent questions.
- **Part-payment versus mismatch predicate (C-05; finalized in the EIS).** A verified part-payment is evidence whose verified amount is less than the linked target's outstanding amount, with matching direction, currency and identity signals. A mismatch is any conflict of amount beyond the outstanding amount, direction, currency or reference. Excess over the outstanding amount is never treated as a part-payment and never as an advance without the Owner (20.4.6). The EIS fixes the exact predicate using the linked-amount sums of 20.4.9.

#### 20.4.8 Evidence record, adapters and provider-account binding (EQ-05, EQ-06, EQ-09; SB16-B6-09, -10, -13)

- **Normalized evidence record (proposed):**
  - business;
  - adapter or provider kind;
  - provider-account binding reference;
  - external event ID and external payment reference (UTR where available);
  - amount in minor units and currency;
  - direction;
  - occurred-at and received-at;
  - source authentication;
  - provider status;
  - verification state;
  - raw-evidence pointer into SB-P-1.14 governed storage;
  - idempotency key;
  - payer, payee and account hints: a minimized, permission-scoped field (masked or truncated values, or a participant reference rather than a copy). Its permitted content awaits qualified counsel on "where permitted" (SR06-08 question 3; U-08). The matcher uses hints only as candidate signals, never as identity resolution (`16:FPDR-1`) (SR06-02; SR05-11).
- **Amount conversion.** A Ledger amount (`NUMERIC(12, 2)`, INR) is compared only after exact minor-unit conversion when the currency is INR. Other currencies are recorded as unsupported or mismatched and never rounded.
- **Provider-account binding.** A business-scoped integration identity, `(business_id, binding_id)` (`EIS-ID-05`), created by the Owner. The business for an inbound event is resolved **only** from the verified binding, never from payload fields.
- **Adapter contract (provider-agnostic, `22-§17-3`; DC-13):** `verify` (signature and freshness), `normalize`, `fetch_settlement` and `map_status`, with a concrete `15-§24-3` lock-in check: a second, fake adapter passes the same contract tests (C-23). Provider-specific code stays in the integration layer (`16:FPDR-6` §7). **No provider is selected.**
- **Intake and principal (C-11; G-W1).** Accept-then-process: (1) a server-only receipt step verifies signature, freshness and binding, resolves the business only from the verified binding and stores the raw event; (2) processing runs as an `EIS-AUT-01` automation principal derived from an Owner-enabled integration rule bound to the provider-account binding, on channel `integration` (`EIS-KER-06`), with `EIS-CNF-04` idempotency and `EIS-CNF-06` narrow failure. Processing only records and classifies evidence; it never changes the Ledger or a balance by itself (MQ-01). Upstream findings are requested and not presumed: 12-Q1 (`EIS-AUT-01` is silent on what may start a run) and 12-Q2 (`EIS-ISO-04` assumes a caller client; conditional watch T2-W2). Provider activation remains NOT AUTHORIZED (`DPAY`).
- **Routing and secrets (C-12).** Inbound events are routed by binding identity. A binding activates only after the Owner proves control of the provider account, and a binding is unique per provider and external account. Per-binding secrets are held only server-side, never in client code, the repository or migrations; the storage home is a Mission Control infrastructure choice and stays open.
- **Deferred channels.** Generic direct-bank API and standalone bank-email adapters are **not designed or built** (`16:FPDR-9`). Their rows stay `IN SCOPE` and traced (F-7).
- **Preservation (C-17; MQ-03, MC-224/225).** Validly submitted payment evidence that is under review or awaiting matching is never silently discarded by the temporary-upload staging grace. Proposed mechanism: explicit submission into the payment-evidence workflow is the `EIS14-RET-01` confirmation that promotes the object to durable storage, whatever the link outcome; abandoned drafts that were never submitted stay under the grace. The SB-P-1.14 compatibility question (14-Q1) is held for EIS resolution (MC-226); a contrary upstream reading is screened before any dependent design changes (conditional watch T2-W1). No retention period or deletion authority is set. The EIS carries a test that unlinked and under-review evidence survives the grace.
- **Retention inputs.** The EIS consumes the upstream retention, hold and deletion specifications (`EIS14-RET-01`); it authors none (SR06-03; U-08).

#### 20.4.9 Matching, idempotent linking and concurrent confirmation (EQ-07, EQ-10; SB16-B6-11, -14)

- **Matching.** Deterministic candidate generation over open targets uses amount, reference, time window, direction, identity hint and method. Every candidate list carries an explanation. A strong unique match links; otherwise the item goes to review (`15-§7-*`, `15-§9-*`). Windows are tuned, not fixed historical formulas (`15-§7-9`).
- **A link is a property of the existing record.** Linking creates a link record against the existing sale or repayment target. It never creates a second financial transaction (`15-§8-7`).
- **Invariants and serialization points (C-15).**
  - (a) The sum of active linked amounts per evidence item never exceeds the evidence amount — evidence-item row lock.
  - (b) The sum of active repayments per target never exceeds the target's current amount, and every active repayment references a currently valid `EIS14-LDG-03` target — target row lock.
  - (c) A confirmation binding is single-use, consumed atomically with the link (`EIS-CNF-01`) — binding row lock.
- **Every writer that can change a guarded quantity** — record repayment, allocation, create-and-link, governed corrections of a repayment amount or target, a target amount, payment method, type or direction, historical attribution, and advance application or refund — takes the target lock and re-evaluates (b) before writing. A violating command stops and returns a clarification; it never leaves a negative outstanding.
- **One total lock order**, used by every writer and every locking preview and finalized in the EIS. Candidate: `EIS-CNF-02` authority rows (`FOR SHARE`); a key-scoped transaction lock on (business, operation, idempotency key); evidence items by ascending UUID; Ledger targets by ascending UUID; the binding row. The EIS states the isolation assumption, and every guarded aggregate is read after its lock is held.
- **Binding fingerprints** include each target's row version, so a correction between preview and commit forces re-confirmation (DC-06).
- **Revalidation at commit** of permission, object scope and state (`EIS-KER-09`; `EIS-CNF-02`, whose serialized facts include object scope; upstream confirmation 12-Q3).
- **Link types (C-02; MQ-01).** (1) Evidence verifies an existing `repayment` or credit target. (2) Authorized create-and-link: one governed command, explicitly invoked by an authorized actor, creates exactly one `repayment` through `EIS14-CMD-01` and its link in one transaction, idempotent on the evidence identity, after showing existing unverified repayments on that target as candidates to link instead. (3) Evidence verifies a sale paid at the time of sale. Each link carries a linked amount. The matcher may link automatically only for types (1) and (3) on a strong unique match, which changes verification status and never a financial fact; type (2) always needs explicit authorized invocation. Evidence alone never creates or changes a financial fact or a balance.
- **Concurrent resolution (SR03-05; finalized in the EIS).** The loser of two concurrent resolutions receives a defined "already resolved" outcome, and supersession of a link is a governed, audited transition.
- **Settlement (EQ-07).** Settlement evidence is a separate kind with lines. Lines match payment evidence, not sales directly. Fees, taxes and adjustments are shown as explained variance on the settlement. **No automatic fee-expense entry** (OQ-02; T3-W2). Settlement status is never shown as funds in the bank. Settlement-source authentication and line detail are provider-dependent, and the settlement mechanism is **PROVISIONAL**; fee treatment awaits OQ-02 (SR05-07).

#### 20.4.10 Idempotency, reversals and chargebacks (EQ-11; SB16-B6-14, -15)

- **Idempotency in three layers (C-16; a stated specialization of `EIS-CNF-04` for external-event intake, following the corrected precedents).**
  1. Receipt: (business, provider-account binding, external event ID) with a stored payload fingerprint. A same-ID, different-payload delivery is a recorded conflict and is never applied. Receipt keys are registered only after signature and binding verification, so a forged request cannot occupy a key.
  2. Payment identity: one provider-authenticated evidence item per (business, binding, external payment ID); later events append state history to that item.
  3. Cross-source correlation on (business, normalized external payment reference or UTR where available) and on the business-scoped content fingerprint (`EIS14-IDM-02`). An active link held by any correlated item stops the commit and routes the items to review. Nothing merges automatically.

  Commands use (business, actor, operation, key, payload fingerprint); commands derived from an event use keys derived from its receipt key. A replay returns the original outcome (DC-05). One key-scope scheme across provider, binding and actor is finalized in the EIS (CF-5).
- **Reversals, ordering and partial states.** A refund, reversal, dispute or chargeback is new evidence linked to the original. It moves the original to `reversed/invalidated` with history kept, flags the affected link and target for Owner review, and **does not change the Ledger or the balance** until the Owner runs a governed correction (`15-§13-*`; `16:FPDR-6` §6). This fail-closed rule extends to late and out-of-order events — an older event never overrides a later state, and a conflict goes to review (CF-3) — and to partial refunds and dispute lifecycles, whose state model is finalized in the EIS without any new merchant-facing label (CF-4; MQ-04 open). Missed-event reconciliation depends on `DSCH` (SR05-04).
- **Void (C-03).** A reversed repayment is expressed by a governed void that keeps history, pending upstream question 14-Q6(a) (conditional watch T8-W2). Until then the reversal stays flagged for Owner review with no Ledger change.

#### 20.4.11 Corrections, audit and communication preparation (SB16-B6-07, -19)

- **Corrections.** All consequential changes use the SB-P-1.14 governed correction command (`EIS14-CMD-02`), which writes prior and new values in an append-only event. This covers amounts, identity references, due dates, allocations and links.
- **Precondition (C-09).** Before any SB-P-1.16 write, `PUBLIC` and `anon` hold no privilege of any type on protected tables, views, sequences and functions, and `authenticated` holds only the separately approved `SELECT` (through kernel RLS) and `EXECUTE` grants; every other privilege type is revoked. This applies to the existing `transactions`, `transaction_correction_events` and `businesses` objects as well as to new ones, and closes direct mutation (`EIS14-CMD-03`): no direct client `INSERT`, `UPDATE` or `DELETE` on `transactions`, and no client-insertable correction events. Birth-safe creation and effective-access proof follow `EIS15-SEC-01` and `EIS15-SEC-02`. After closure no client can set `creator_id`, `created_at`, `id`, `notification_status` or `notification_sent_at`; the legacy notification fields are retired or written only by an approved, channel-bound path (`16:FPDR-8` §3). Note for the SB-P-1.14 owner: the `EIS14-CMD-03` privilege inspection includes the non-DML privilege types and `anon` (an evidence clarification, not a new requirement).
- **Communication.** Drafts are stored with their state (`draft`, `approved`) and the approving actor. No `sent` or `delivered` state exists before an approved channel (`16:FPDR-8`; `DNTF`).
- **Records (C-19; finalized in the EIS).** Legacy correction history is labelled pre-closure and is not treated as reliable audit evidence. The `due_on` lifecycle under correction and at migration is specified. A correction and de-identification path for customer personal data in append-only records, and a record class for communication drafts, are EIS obligations pending U-08 and counsel.

### 20.5 Permission and security design boundaries (proposed)

| Boundary | Proposal | Basis |
|---|---|---|
| Owner-reserved decisions | Owner-only; not delegable by role default or by explicit grant; registered as non-delegable in the capability registry so that `EIS-KER-04` cannot create a grant: `credit.configure_threshold`, `credit.decide_override` (approve, decline, adjust, grace), `credit.attribute_historical`, `recon.manage_provider_binding`, `credit.approve_communication` (Owner-only as the current state under `16:FPDR-8` §2, not a permanent narrowing), and the customer-advance actions retain, apply and refund (`16:FPDR-10` D-2 to D-4; identifiers at EIS). Every designed action is classified as Owner-reserved, one of the six `16:FPDR-7` capabilities, or Owner-only pending a decision; no new delegable capability is created | `16:FPDR-7` §3; `16:FPDR-4`; `16:FPDR-8` §2; `16:FPDR-10` |
| Scoped Manager delegation | Separately grantable and object-scoped capabilities: `credit.view_assigned_balances`, `credit.propose_repayment`, `credit.record_repayment`, `recon.review_assigned_evidence`, `recon.view_assigned_cases` and `recon.resolve_assigned_match` (separate). None is implied by the Manager role. **MQ-07 (MC-230):** a Manager separately authorized with `credit.record_repayment` may record repayments, including through the allocation command, within a valid scoped delegation; `credit.propose_repayment` is proposal authority only and never confers recording authority. Linking reviewed merchant evidence falls under `recon.resolve_assigned_match`. Owner-only financial decisions and every customer-advance action stay Owner-reserved and are never delegated. No merchant-facing grant UI is assumed while R15-11 is open | `16:FPDR-7` §§1–2, 6; `EIS-KER-08`; MC-230 |
| Employee | May record a permitted credit sale through the existing create capability (`EIS14-LDG-06`). Transaction entry is not permission to inspect balances: command responses to an Employee exclude balance, outstanding, threshold and advance values. No Employee financial intelligence by default; no evidence or reconciliation visibility; no customer-advance financial action is delegated; `16:FPDR-4` does not expand Manager or Employee access. The threshold warning is routed to the Owner (OQ-03 resolved, MC-225) | Contract 14 §14 p3; `16:FPDR-4`; `16:FPDR-7` §5; MC-225 |
| Customer | No Ledger capability. A participant only in merchant-approved communication. No delivery before an approved channel | `EIS14-LDG-06`; `16:FPDR-8`; `3-§11-6` |
| RLS and database privileges | Kernel-based deny-by-default RLS on every new table (`EIS-ISO-01`). Commands are the only write boundary (`EIS-ISO-02`). `PUBLIC` and `anon` hold no privilege of any type on protected tables, views, sequences and functions; `authenticated` holds only the separately approved `SELECT` (through kernel RLS) and `EXECUTE` grants; every other privilege type is revoked, on the existing `transactions`, `transaction_correction_events` and `businesses` objects as well as on new ones. Birth-safe creation and effective-access proof follow `EIS15-SEC-01` and `EIS15-SEC-02`, including the default privileges of creator roles (`EIS-ISO-03`); live state is evidence held (P-2, P-3) | SB16-B6-08; Truth Pack Δ-03; SR02-01; SR04-02 |
| Server-derived authority | Every principal from `EIS-KER-02`; no actor, business or role from request bodies or provider payloads | `EIS-KER-02` |
| Provider webhook validation | Signature verification with the binding's secret, a timestamp or freshness window, and a replay key. The business comes from the verified binding only. A failed-verification request is never an evidence item: it is recorded, if at all, in a bounded security log keyed by the claimed binding, with minimal fields and volume limits; it never appears in the evidence list or review queue, is never a matching input and is never counted in any coverage or verification measure. Endpoint secrets are held server-side only, never in client code, the repository or migrations | SB16-B6-09, -10; `16:FPDR-6` §1; `15-§22-6`; SR02-06 |
| Service-role use | Only inside `EIS-ISO-04` privileged operations bound to a decision record; never for ordinary reads; never as the source of a principal. A source-complete handler inventory, negative tests and privilege narrowing per the precedents are EIS obligations and an Implementation Authorization precondition (P-4) | SB16-B6-24; SR02-09 |
| Tenant isolation | All keys composite with `business_id`, which presupposes a `(business_id, id)` key on the Ledger table (SB-P-1.14 table; confirmed at EIS); cross-business access denied on every surface, including background and integration jobs; a dedicated cross-business test family on the inventory precedent | `EIS-ISO-01`; `15-§22-3`; SR02-03 |
| Execution-time revalidation | Grants, assignments, object scope, state and binding fingerprints re-checked at commit. Object-scope grants are serialized authority facts (`EIS-CNF-02`; upstream confirmation 12-Q3). Revocation before commit blocks only the pending action (`15-§25-8`) | `EIS-KER-09`; `EIS-CNF-02`; `16:FPDR-7` §4 |
| Platform and support | No support write path to SB-P-1.16 data. Any support read follows the SB-P-1.12 support-grant model; the EIS security matrix carries the row (CF-2) | `EIS-CNF-02`; `15-§17-4`; SR02-10 |
| Raw evidence | Access to raw evidence objects, which can hold third-party data, is a capability separate from access to the evidence record; the EIS names it | `15-§22-2`; SR06-05 |

### 20.6 Stage 6 finding dispositions

Disposition vocabulary:

- **DESIGNED:** a proposed treatment is in 20.4 or 20.5, to be confirmed at EIS.
- **PRECONDITION:** must be satisfied before any Implementation Authorization.
- **GATED:** waits on an external, provider or later-mission authorization.
- **ROUTED:** needs a Mission Control or Founder disposition.
- **CARRIED:** an assurance gap recorded without treatment.

| Finding | Severity (Stage 6) | Disposition | Proposed engineering treatment | Dependency | Verification approach |
|---|---|---|---|---|---|
| SB16-B6-01 No objects exist | HIGH | PRECONDITION | Sequence after `D12`, `D14`, `DTX`; components per 20.3; no parallel path | `D12`, `D14`, `DTX` | Write-path inventory; Stage 19 |
| SB16-B6-02 Identity link unspecified | HIGH | DESIGNED | 20.4.1 composite participant reference set only by governed commands | `D12`, `D14`, `DTX` | FA: ambiguous-name, no auto-match, cross-business |
| SB16-B6-03 No due-date home | HIGH | DESIGNED | 20.4.3 optional `due_on`, no default, business-local evaluation | `D14`, `D15`/`DSCH` | FG: predicate incl. timezone edges; FRV-A |
| SB16-B6-04 Balance definition | HIGH | DESIGNED | 20.4.4 single hardened definition consumed by all readers | `D14` | FG: balance algebra; FA: reader parity |
| SB16-B6-05 Lump-sum and excess | MEDIUM | DESIGNED | 20.4.2 allocation command with linked amounts; 20.4.6 excess stops and asks the Owner, who may retain a separate advance (`16:FPDR-10`); representation PROVISIONAL | `D14`, `DTX`; 14-Q2 to 14-Q5 | FA: atomic allocation, limits, excess clarification, ADV-01 to ADV-10; CONC |
| SB16-B6-06 Historical sales and repayments | HIGH | DESIGNED / ROUTED | 20.4.5 Owner attribution; read-only profile needs authorization (OQ-05) | `D12`, `D14`; data access | MIG rehearsal; specialist review |
| SB16-B6-07 Audit bypass | HIGH | PRECONDITION | `EIS14-CMD-03` closure before any SB-P-1.16 write (20.4.11) | `DTX` | SEC: effective-access and no-direct-DML check |
| SB16-B6-08 Default grants | HIGH | PRECONDITION | Every privilege type revoked, including on the existing Ledger objects; birth-safe creation and effective-access proof (20.5, 20.4.11) | `D12` (`EIS-ISO-03`); `EIS15-SEC-01`, `-02` | SEC inventory query per migration, all privilege types |
| SB16-B6-09 Provider principal | HIGH | DESIGNED / ROUTED | Accept-then-process intake and `EIS-AUT-01` principal (20.4.8); upstream findings requested (12-Q1, 12-Q2; watch T2-W2) | `D12`; `DPAY` | SEC review; contract test |
| SB16-B6-10 Gateway binding and credentials | HIGH | DESIGNED / GATED | `EIS-ID-05` binding, adapter contract; provider not selected | `DPAY` (NOT AUTHORIZED) | Provider activation evidence (Build Plan §5.4) |
| SB16-B6-11 Settlement fees | MEDIUM | DESIGNED / ROUTED | Settlement lines, explained variance, no auto-expense; mechanism PROVISIONAL; fee booking is OQ-02 | `DPAY` | FG: settlement fixtures |
| SB16-B6-12 Provenance versus state | MEDIUM | DESIGNED | 20.4.7 four separate fields | — | FG: state table; FA: labels; FRV-B |
| SB16-B6-13 Amounts and currency | MEDIUM | DESIGNED | 20.4.8 minor units, currency check, no rounding | `DPAY` | FG: normalization fixtures |
| SB16-B6-14 Concurrent confirmation and replay | HIGH | DESIGNED | 20.4.9 serialization points, total lock order, linked amounts, atomic create-and-link, single-use binding; 20.4.10 three-layer keys | `D12`, `DTX` | CONC with proven overlap on the inventory precedent |
| SB16-B6-15 Reversals | MEDIUM | DESIGNED | 20.4.10 flag and Owner review; no silent rewrite | `DPAY`, `D14` | FA: reversal fixtures |
| SB16-B6-16 Scheduler and timezone | MEDIUM | GATED | Native on-demand ageing; scheduled items wait for `D15`/`DSCH` | `D15`, `DSCH` | RT after SB-P-1.15 |
| SB16-B6-17 Manager scope and R15-11 | MEDIUM | DESIGNED / ROUTED | 20.5 capabilities; R15-11 stays open | `D12`; R15-11 | FA: capability matrix, revocation |
| SB16-B6-18 Employee exposure | MEDIUM | DESIGNED | 20.5 no Employee financial visibility; transaction entry confers no balance access (OQ-03 resolved, MC-225) | `D12` | FA: negative visibility and response-shaping tests |
| SB16-B6-19 Customer preparation-only | LOW | DESIGNED | 20.4.11 no `sent` state | `DNTF` | FA: state labels |
| SB16-B6-20 No native surface | MEDIUM | DESIGNED | Credit warning in the sale-entry flow; customer balance view; review queue in navigation (exact UX at design) | `D12`, `D14` | RT native path |
| SB16-B6-21 Sales versus collected | LOW | DESIGNED | Distinct measures via `EIS14-TOT-01` and C-BAL | `D14`, `D15` | FA: reader parity |
| SB16-B6-22 Ask CFO and DI | MEDIUM | GATED | Replace `15:FDB-3` only for demonstrated data | `D15`, `DAI` | RT after SB-P-1.15 |
| SB16-B6-23 COD | LOW | GATED | Adapter-ready link model | `D18` | Contract test; RT with SB-P-1.18 |
| SB16-B6-24 Service role | MEDIUM | PRECONDITION | `EIS-ISO-04` only | `D12` | SEC code review and test |
| SB16-B6-25 Retention | LOW | GATED | Non-destructive storage; preservation invariant for submitted evidence (MQ-03); no retention period set | U-08 / DC-11; 14-Q1 | Legal/privacy review; EIS survival test |
| SB16-B6-26 No CI or runtime | HIGH | CARRIED | CI tiers and environments in 20.7; no PASS from absence | Test environment; CI capacity | Stage 17–19 evidence |

### 20.7 Early delivery plan (planning only — nothing executed)

#### 20.7.1 Environments

| Environment | State | Use |
|---|---|---|
| Local development | Available; no Supabase access needed for Fast Gate | Fast Gate tests |
| Supabase test project | Paused per prior missions (Truth Pack Δ-06); `UNVERIFIED — ACCESS REQUIRED` | Full Assurance, migration rehearsal, Stage 19 verification |
| Production (Team LIPS Supabase; live app) | LIVE (`docs/migration/README.md`) | **No access.** Migration execution, production mutation and delivery are NOT AUTHORIZED |
| Provider sandbox | None; no provider selected | Provider contract tests after authorization only |
| Production-shaped rehearsal environment | Not identified; `UNVERIFIED — ACCESS REQUIRED` | Migration rehearsal at representative volume with the ACL baseline (SR04-11); evidence held |

#### 20.7.2 Expected migration classes (default-deny; none authorized)

Every class is `DRAFT OR PROPOSAL — NON-EXECUTABLE` under `docs/migration/README.md` until a new mission authorizes the exact package, environment, actor, backups, validation, rollback and window.

| Class | Content | Sequencing | Rehearsal and rollback |
|---|---|---|---|
| M16-0 | Prerequisites: SB-P-1.12 kernel (memberships, participants, bindings, idempotency); SB-P-1.14 M14-1 to M14-3; `DTX` cut-over with `EIS14-CMD-03` closure; SB-P-1.15 timezone | Upstream missions; not this mission's migrations | Per upstream EIS |
| M16-1 | Credit columns on the transactions family: participant reference, `due_on`; governed command widening (create, correct, attribute, set due date, record allocated repayment, create-and-link). Any advance or void representation is PROVISIONAL (FIN-01; 14-Q2 to 14-Q6) | After M14-1 and the `DTX` cut-over | Not purely additive: live-table operations need lock and FK characterization, and the existing cascade risk to unattributed history is recorded (SR04-03). Pre-data rollback; post-data forward-fix; rehearsal asserts ACL, RLS, the effective-access baseline (`EIS14-MIG-05` pattern), backup and PITR readiness, version order, the historical-totals invariant (`EIS14-TOT-01`) and `EIS14-MIG-06` for the second command widening (SR04-04, SR04-09) |
| M16-2 | Threshold, credit decision record and communication draft tables | After M16-1 | Additive; born hardened |
| M16-3 | Evidence, provider-account binding, link, settlement and review tables; idempotency registrations | After M16-1; adapter activation separately | Additive; born hardened; no provider secrets in migrations |
| M16-4 | Balance and ageing definition (view or function), born hardened; reader cut-over for Ask CFO and Daily Intelligence | After M16-1 and SB-P-1.15 readers | Replace-in-place. The acceptance and rollback oracle is an independent historical-totals invariant with recorded expected values, not parity with the previous reader output (SR04-08) |
| M16-5 | None for historical data. No backfill, reinterpretation or bulk attribution (`EIS14-LDG-04`; `16:FPDR-2`) | — | Profiling is read-only and separately authorized (OQ-05) |

#### 20.7.3 Cross-mission dependencies

- **Upstream:** `D12`, `D13`, `D14`, `DTX` / PQ-2 and `D15` (Blueprint §12.2). The coordinated `DTX` cut-over is the critical path, and no SB-P-1.16 write precedes it.
- **Downstream:**
  - `D18` (SB-P-1.18): COD and order demonstration through the C-ORD adapter;
  - `D19` (SB-P-1.19): the support-access boundary (`15-§17-4`);
  - `D20` (SB-P-1.20): the WhatsApp slice of the completion gates (`14-§25-1`, `3-§23`);
  - `DNTF`: customer delivery.

#### 20.7.4 Payment-provider activation dependencies

Provider selection; merchant eligibility; provider terms; costs; credential handling; webhook secret management; outage recovery; rollback; operational support (Build Plan §5.4; `16:FPDR-6` §7). Each needs separate validation and Mission Control or Founder authorization. Until then the 41 `DPAY` rows stay `IN SCOPE` and are reported as provider-held, never as passed.

**Activation mapping (SR05-09).** Before activation, each Build Plan §5.4 item has its own evidence: provider selection and terms; credentials and the per-binding secret-storage home (Mission Control infrastructure choice); webhook routing and proof of account control; a kill switch that stops intake while preserving received evidence; disconnect; rollback; outage recovery; operational support. Before any provider exists, the adapter contract is exercised against a fake adapter.

#### 20.7.5 Verification and security testing (proposed)

| Tier | Content |
|---|---|
| Fast Gate (FG) | Pure logic with no Supabase access: balance algebra, overdue predicate with timezone edges, allocation validation, evidence normalization (minor units, currency), state transition table, settlement variance, deterministic matcher fixtures; linked-amount sums; excess-versus-mismatch predicate; correction guard; three-layer idempotency keys |
| Full Assurance (FA) | Supabase test project: governed-command-only writes; RLS cross-business; capability matrix including Manager scope and revocation before commit; Employee negative visibility; ambiguous-identity clarification; idempotent replay of commands, uploads and provider events; reversal flagging; reader parity |
| Concurrency (CONC) | On the inventory `concurrency.test.ts` precedent, with overlap proven (both transactions demonstrably hold their snapshots concurrently, not merely issued close together): two resolvers on one evidence item; double allocation to one target; a correction racing a repayment or link; advance application or refund racing a repayment; replay during confirmation; revocation between preview and commit; Scenario B concurrency (SR03-10) |
| Security (SEC) | Effective-access inventory after every migration (anon, PUBLIC, authenticated, default privileges); no direct DML on protected tables; webhook signature, freshness and replay rejection; service-role confinement review; every privilege type per role, including non-DML types, sequences and function overloads; a failed-verification request creates no evidence row, review item or link; service-role handler inventory and negative tests (P-4) |
| Migration rehearsal (MIG) | Rehearsal on the test project per class; asserts constraints, ACL and RLS baselines; rollback and forward-fix exercised; backup and PITR readiness; historical-totals invariant; restore and rollback never resurrect deleted evidence or superseded verification state (SR06-09) |
| Runtime (RT) | Stage 19 independent verification by a non-builder actor |
| Founder runtime (FRV) | Scenarios A and B (20.7.8) |

#### 20.7.6 Continuous-integration tiers

- **Build Assurance:** lint and typecheck on every push and PR to `main`.
- **Full Assurance:** Supabase-dependent tests, path-filtered on `src/**`, `tests/**`, `supabase/**` and related paths. It needs the three `SUPABASE_TEST_*` secrets and a running test project.
- **Markdown Quality Gate.**

Today no workflow run exists (`actions/runs` total 0) and no status check is required on `main`. **CI is UNVERIFIED.** Implementation evidence needs restored Actions capacity, a running test project and recorded run-level evidence; none of this is assumed.

#### 20.7.7 Scope flags carried from Stage 1

`production mutation`: NOT AUTHORIZED. `migration execution`: NOT AUTHORIZED. `delivery sync and publication`: NOT AUTHORIZED (Source 18 Stage 1; README).

#### 20.7.8 Founder Scenario verification coverage (proposed)

| Scenario | Permission checks | Financial truth | Uncertainty handling | Concurrency and idempotency |
|---|---|---|---|---|
| A (`BP-§10.5-A1` to `-A3`) | Owner proceeds, overrides or declines. A Manager without delegation is denied. An Employee recording the sale receives no balance in the view or in the command response (OQ-03 resolved, MC-225). Revocation before commit blocks only the pending action | Balance from C-BAL equals the sum of attributed open targets; overdue only for a recorded, passed `due_on` in business-local time; the Owner decision is recorded; no balance change from the warning itself | Unattributed historical credit disclosed separately; missing due date shows age, not "overdue"; no score or label | Warning re-evaluated at commit under the EIS-defined serialization (SR03-12) (stale balance); a repeated submission with the same key creates one sale |
| B (`BP-§10.5-B1` to `-B3`) | Only the Owner or a Manager holding `recon.resolve_assigned_match` for that evidence can resolve; others are denied; the binding is tied to the actor | The link is a property of the chosen target; no new sale, income or repayment from the link; the balance comes from authorized Ledger facts, an evidence-backed repayment reduces it only by its verified amount, and verification status is shown beside the balance (MQ-01) | Candidates shown with explanation; no AI resolution; merchant-submitted evidence labelled as reviewed, never provider-verified; deferred channels excluded | Two concurrent resolvers produce exactly one link; replaying the confirmed link or the provider event returns the original outcome; candidate change before commit forces re-confirmation |

Scenario B's evidence form for the Founder runtime check is OQ-04.

### 20.8 Per-row feasibility and risk register (349 `IN SCOPE` rows)

**Status meanings (documentary feasibility only; not implementation, runtime or specialist evidence):**

| Status | Meaning |
|---|---|
| `DESIGN ACCEPTED — EVIDENCE HOLD` | No runtime dependency code; the design is acceptable and is checked by review and later verification evidence |
| `DEPENDENCY-HELD` | Feasible design held by an unbuilt upstream foundation (`D12`, `D13`, `D14`, `DTX`, `D15`, `DSCH`, `DAI`) |
| `PROVIDER-HELD` | Feasible design held by `DPAY`: provider selection, credentials and activation are NOT AUTHORIZED |
| `LATER-MISSION-HELD` | Feasible design whose demonstration needs `D18`, `D19` or `D20` |
| `CHANNEL-HELD` | Feasible preparation; delivery needs an approved channel (`DNTF`; F-5); incomplete until then |
| `FOLLOW-UP` | Feasible design needing a Founder disposition (OQ-02, OQ-04) before the EIS fixes it |

"Held" means "waiting on an identified, already recorded dependency". It is **not** a Source 18 T8 infeasibility finding. No row is found infeasible or unsafe, and no row is marked `ESCALATED` or `PASS`.

**Column meanings:**

- **Risk** is the author's rating: H, M or L.
- **Verification approach** uses the tiers in 20.7.5.
- **Stage 6 / Founder decision** gives the applicable Stage 6 finding, then the row's Founder-decision citation exactly as it appears in the canonical FCTM.
- Component sections refer to 20.4.

**Register totals:**

| Measure | Count |
|---|---|
| `IN SCOPE` rows with a Stage 7 finding | 349 |
| `FOLLOW-UP` | 4 |
| `CHANNEL-HELD` | 7 |
| `PROVIDER-HELD` | 39 |
| `LATER-MISSION-HELD` | 19 |
| `DEPENDENCY-HELD` | 230 |
| `DESIGN ACCEPTED — EVIDENCE HOLD` | 50 |
| `PASS` | 0 |
| Infeasible, unsafe or blocked (Source 18 T8) | 0 |
| Author risk H / M / L | 174 / 139 / 36 |

| Subsection | Rows | `FOLLOW-UP` | `CHANNEL-HELD` | `PROVIDER-HELD` | `LATER-MISSION-HELD` | `DEPENDENCY-HELD` | `DESIGN ACCEPTED — EVIDENCE HOLD` | Risk H / M / L |
|---|---|---|---|---|---|---|---|---|
| §8.1 | 19 | 0 | 0 | 0 | 3 | 7 | 9 | 7 / 2 / 10 |
| §8.2 | 31 | 0 | 0 | 1 | 1 | 29 | 0 | 24 / 7 / 0 |
| §8.3 | 25 | 0 | 5 | 0 | 0 | 17 | 3 | 1 / 24 / 0 |
| §8.4 | 42 | 1 | 0 | 20 | 1 | 11 | 9 | 21 / 21 / 0 |
| §8.5 | 49 | 0 | 0 | 6 | 1 | 41 | 1 | 37 / 12 / 0 |
| §8.6 | 29 | 0 | 0 | 0 | 8 | 21 | 0 | 4 / 25 / 0 |
| §8.7 | 28 | 0 | 1 | 0 | 1 | 26 | 0 | 22 / 6 / 0 |
| §8.8 | 41 | 0 | 0 | 7 | 0 | 33 | 1 | 20 / 21 / 0 |
| §8.9 | 43 | 0 | 0 | 0 | 1 | 19 | 23 | 0 / 21 / 22 |
| §8.10 | 42 | 3 | 1 | 5 | 3 | 26 | 4 | 38 / 0 / 4 |

| Row | Component | Status | Risk and blocker | Dependency | Verification approach | Stage 6 / Founder decision |
|---|---|---|---|---|---|---|
| `14-§1-1` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§1-2` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§2-8` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§3-1` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / `16:FPDR-10` |
| `14-§3-2` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§3-3` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§3-4` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§3-5` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / `16:FPDR-10` |
| `14-§3-6` | C-PRN: Credit purpose and principles | DEPENDENCY-HELD | L: Principle drift in later design | `D14`, `DTX` | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / `14:FPDR-4`; `16:FPDR-10` |
| `14-§3-7` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / `16:FPDR-4` |
| `14-§4-1` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D12`, `D14` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2` |
| `14-§4-2` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D12`, `D14` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2` |
| `14-§4-3` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D12`, `D14` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2` |
| `14-§4-4` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D12`, `D14` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2` |
| `14-§4-5` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D12`, `D14` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2` |
| `14-§4-6` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D13` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `14:FPDR-3`; `16:FPDR-1`; `16:FPDR-2` |
| `14-§5-1` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1`; `16:FPDR-1` |
| `14-§5-2` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-3` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-4` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-5` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-6` | C-DUE: Due/expected date and ageing (§20.4.3) | DEPENDENCY-HELD | H: Invented deadline; device-local date; overdue without recorded date; no field exists in repository or SB-P-1.14 EIS | `D14` | FG: overdue predicate incl. timezone boundaries; FA: no-default check; FRV-A | SB16-B6-03, SB16-B6-16 / `14:FPDR-1`; `16:FPDR-5` |
| `14-§5-7` | C-BAL: Canonical balance and ageing definition (§20.4.4) | DEPENDENCY-HELD | H: Divergent balances across readers; unattributed sales leaking into balances; verification status mistaken for a balance input | `D14` | FG: balance algebra incl. corrections, reversals and the correction guard; FA: single-definition reader parity; RT | SB16-B6-04, SB16-B6-06 / `14:FPDR-1`; `16:FPDR-10` |
| `14-§5-8` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1`; `16:FPDR-10` |
| `14-§5-9` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-10` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-11` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14`, `D15` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-12` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | PROVIDER-HELD | H: Second write path; history rewrite of credit-method sales; provider not selected or authorized | `D14`, `DPAY` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-13` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D12`, `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§6-1` | C-CAP: Credit capture inputs (native form; conversational per D13) | DEPENDENCY-HELD | M: Capture friction pushes free-text names | `D13`, `D14`, `DTX` | FA: native capture through governed command; RT for D13 paths | SB16-B6-20 / `14:FPDR-1` |
| `14-§6-2` | C-CAP: Credit capture inputs (native form; conversational per D13) | DEPENDENCY-HELD | M: Capture friction pushes free-text names | `D13`, `D14`, `DTX` | FA: native capture through governed command; RT for D13 paths | SB16-B6-20 / `14:FPDR-1` |
| `14-§6-3` | C-CAP: Credit capture inputs (native form; conversational per D13) | DEPENDENCY-HELD | M: Capture friction pushes free-text names | `D12`, `D14`, `DTX` | FA: native capture through governed command; RT for D13 paths | SB16-B6-20 / `14:FPDR-1` |
| `14-§6-4` | C-CAP: Credit capture inputs (native form; conversational per D13) | DEPENDENCY-HELD | M: Capture friction pushes free-text names | `D14`, `DTX` | FA: native capture through governed command; RT for D13 paths | SB16-B6-20 / `14:FPDR-1` |
| `14-§6-5` | C-CAP: Credit capture inputs (native form; conversational per D13) | LATER-MISSION-HELD | M: Capture friction pushes free-text names | `D14`, `DTX`, `D18` | FA: native capture through governed command; RT for D13 paths | SB16-B6-20 / `14:FPDR-1` |
| `14-§6-6` | C-CAP: Credit capture inputs (native form; conversational per D13) | DEPENDENCY-HELD | M: Capture friction pushes free-text names | `D13`, `D14` | FA: native capture through governed command; RT for D13 paths | SB16-B6-20 / `14:FPDR-3` |
| `14-§7-1` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-1` |
| `14-§7-2` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-4`; `16:FPDR-10` |
| `14-§7-3` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-4`; `16:FPDR-10` |
| `14-§7-4` | C-BAL: Canonical balance and ageing definition (§20.4.4) | DEPENDENCY-HELD | H: Divergent balances across readers; unattributed sales leaking into balances; verification status mistaken for a balance input | `D14`, `DTX` | FG: balance algebra incl. corrections, reversals and the correction guard; FA: single-definition reader parity; RT | SB16-B6-04, SB16-B6-06 / `14:FPDR-4`; `16:FPDR-10` |
| `14-§7-5` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-4`; `16:FPDR-10` |
| `14-§7-6` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-4`; `16:FPDR-10` |
| `14-§7-7` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D13`, `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-3` |
| `14-§8-1` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-2` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DESIGN ACCEPTED — EVIDENCE HOLD | M: Silent warning; stale balance at confirmation; hidden hard block | none (design review) | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-3` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-4` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D15` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-5` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D15` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-6` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-7` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DESIGN ACCEPTED — EVIDENCE HOLD | M: Silent warning; stale balance at confirmation; hidden hard block | none (design review) | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§9-1` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DESIGN ACCEPTED — EVIDENCE HOLD | M: Silent warning; stale balance at confirmation; hidden hard block | none (design review) | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-2` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block; illustrative worked example only (MC-112) | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-3` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `DTX` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-4` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `DTX` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-5` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `DTX` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-6` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `DTX` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-7` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `DTX` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-8` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `D14` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-9` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§10-1` | C-FUP: Owner follow-up and communication preparation (§20.4.11) | DEPENDENCY-HELD | M: Prepared shown as sent; autonomous delivery | `D15`, `DSCH` | FA: no delivery path exists; state labels; RT | SB16-B6-16, SB16-B6-19 / `16:FPDR-8` |
| `14-§10-2` | C-FUP: Owner follow-up and communication preparation (§20.4.11) | CHANNEL-HELD | M: Prepared shown as sent; autonomous delivery | `D15`, `DNTF` | FA: no delivery path exists; state labels; RT | SB16-B6-16, SB16-B6-19 / `16:FPDR-8` |
| `14-§10-3` | C-FUP: Owner follow-up and communication preparation (§20.4.11) | CHANNEL-HELD | M: Prepared shown as sent; autonomous delivery | `D15`, `DNTF` | FA: no delivery path exists; state labels; RT | SB16-B6-16, SB16-B6-19 / `16:FPDR-8` |
| `14-§10-4` | C-FUP: Owner follow-up and communication preparation (§20.4.11) | CHANNEL-HELD | M: Prepared shown as sent; autonomous delivery | `D15`, `DNTF` | FA: no delivery path exists; state labels; RT | SB16-B6-16, SB16-B6-19 / `16:FPDR-8` |
| `14-§10-5` | C-FUP: Owner follow-up and communication preparation (§20.4.11) | CHANNEL-HELD | M: Prepared shown as sent; autonomous delivery | `D15`, `DNTF` | FA: no delivery path exists; state labels; RT | SB16-B6-16, SB16-B6-19 / `16:FPDR-8` |
| `14-§10-6` | C-FUP: Owner follow-up and communication preparation (§20.4.11) | CHANNEL-HELD | M: Prepared shown as sent; autonomous delivery | `D15`, `DNTF` | FA: no delivery path exists; state labels; RT | SB16-B6-16, SB16-B6-19 / `16:FPDR-8` |
| `14-§11-1` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / `15:FDB-3` |
| `14-§11-2` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / `15:FDB-3` |
| `14-§11-3` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / `15:FDB-3` |
| `14-§11-4` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / `15:FDB-3` |
| `14-§11-5` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `14-§12-1` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DSCH` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `14-§12-2` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DSCH` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `14-§12-3` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DSCH` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `14-§12-4` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DSCH` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `14-§12-5` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DSCH` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `14-§12-6` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D12` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `14-§13-1` | C-ID: Credit-to-participant identity reference (§20.4.1) | LATER-MISSION-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D18` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `16:FPDR-1` |
| `14-§13-2` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18`, `DTX` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `14-§13-3` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `14-§14-1` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation | `D12` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / `16:FPDR-10` |
| `14-§14-2` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation; R15-11 open; no grant UI assumed | `D12` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / `16:FPDR-7` |
| `14-§14-3` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation; OQ-03 resolved (MC-225): transaction entry confers no balance access | `D12` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / — |
| `14-§14-4` | C-AUTH: Capability and role boundary (§20.5) | CHANNEL-HELD | H: Role-implied access; Manager scope wider than delegation | `D12`, `D15`, `DNTF` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / `16:FPDR-8` |
| `14-§15-1a` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `14-§15-2` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `14-§16-1` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `14-§16-2` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `14-§16-3` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `14-§16-4` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `14-§16-5` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `14-§16-6` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / — |
| `14-§17-1` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / `16:FPDR-10` |
| `14-§17-2` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / — |
| `14-§17-3` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events; a correction can break the repayment-to-target invariant (SR01-01; §20.4.4 correction guard) | `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / `16:FPDR-10` |
| `14-§17-4` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / — |
| `14-§17-5` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / — |
| `14-§18-1` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D12` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `16:FPDR-1` |
| `14-§18-2` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | H: Global freeze; uncertain write committed; duplicate credit under retry or replay (SR01-09) | `D12`, `D14` | FA: idempotent replay and duplicate detection; narrow-failure check | SB16-B6-14, SB16-B6-15 / — |
| `14-§18-3` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target; 16:FPDR-10 decided: excess stops and asks the Owner; no automatic advance; representation PROVISIONAL (FIN-01; 14-Q2 to 14-Q5) | `D12`, `D14` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `16:FPDR-10` |
| `14-§18-4` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D12`, `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `14-§18-5` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D12`, `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `14-§18-6` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D12`, `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `14-§18-7` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D15` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `14-§18-8` | C-EXC: Exception handling and narrow failure | PROVIDER-HELD | M: Global freeze; uncertain write committed; provider not selected or authorized | `DPAY` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `14-§18-9` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D12`, `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `14-§19-1` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `D12` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `14-§19-2` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `D12` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `14-§19-3` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `D12` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `14-§19-4` | C-PRIV: Privacy, isolation and dignity | DESIGN ACCEPTED — EVIDENCE HOLD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | none (design review) | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `14-§19-5` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `DAI` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / `16:FPDR-4` |
| `14-§20-1` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D14` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / `14:FPDR-1` |
| `14-§20-2` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / `16:FPDR-1` |
| `14-§20-3` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `14-§20-4` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D13` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `14-§20-5` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D15` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `14-§20-6` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D15` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / `12:FPDR-1` |
| `14-§20-7` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D15` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `14-§20-8` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D15` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `14-§20-9` | C-FND: Shared-foundation reuse and single write path | DESIGN ACCEPTED — EVIDENCE HOLD | M: Parallel ledger, identity, permission or reminder model; consumes this mission's own E-* components | none (design review) | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `14-§20-10` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `14-§21-1` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§21-2` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§21-3` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§21-4` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§21-5` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§21-6` | C-NEG: Must-not guard | DEPENDENCY-HELD | L: Rejected behaviour reintroduced | `D14` | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / `14:FPDR-1`; `16:FPDR-10` |
| `14-§22-1` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence; historical data shape UNVERIFIED (OQ-05) | `D12`, `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2` |
| `14-§22-2` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `14:FPDR-4`; `16:FPDR-10` |
| `14-§22-3` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D13` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-1` |
| `14-§22-4` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `14-§22-5` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `14-§22-6` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `14-§22-7` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence; OQ-03 resolved (MC-225): transaction entry confers no balance access | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `14-§22-8` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D15`, `DAI` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `15:FDB-3` |
| `14-§22-9` | C-ACC: Acceptance scenario, completion gate or outcome | CHANNEL-HELD | H: Completion overstated; acceptance without runtime evidence | `D15`, `DNTF` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-8` |
| `14-§22-10` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `14-§22-11` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `14-§23-1` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§23-2` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§23-3` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§23-4` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§25-1` | C-ACC: Acceptance scenario, completion gate or outcome | LATER-MISSION-HELD | H: Completion overstated; acceptance without runtime evidence; depends on the seven DNTF rows (F-5) | `D12`, `D13`, `D14`, `D15`, `D20` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§1-1` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§1-2` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; Founder-deferred branch (16:FPDR-9), no mission assigned, F-7 open; not released by DPAY activation; provider not selected or authorized | `DPAY` | Traceability check only; no adapter designed (16:FPDR-9) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6`; `16:FPDR-9` |
| `15-§2-8` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-1` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-2` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-3` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-4` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-5` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-6` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-7` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; provider-event principal and intake (G-W1: 12-Q1, 12-Q2); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§4-1` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-2` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-3` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-4` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-5` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-6` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-7` | E-RVS: Reversal, refund and chargeback handling (§20.4.10) | PROVIDER-HELD | H: Silent Ledger rewrite; prior verified state erased; out-of-order or partial states applied; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `D14`, `DPAY` | FA: reversal, late-event and partial-state fixtures route to Owner review with no Ledger change; history preserved | SB16-B6-15 / `16:FPDR-3`; `16:FPDR-6` |
| `15-§4-8` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§5-1` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; mixed row: gateway branch PROVIDER-HELD; direct-bank branch is a Founder-deferred branch (16:FPDR-9), no mission assigned, F-7 open; not released by DPAY activation; provider-event principal and intake (G-W1: 12-Q1, 12-Q2); provider not selected or authorized | `DPAY` | Gateway branch: SEC signature and binding checks, contract tests per adapter after provider authorization (Build Plan §5.4); direct-bank branch: traceability check only | SB16-B6-09, SB16-B6-10 / `16:FPDR-6`; `16:FPDR-9` |
| `15-§5-2` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; Founder-deferred branch (16:FPDR-9), no mission assigned, F-7 open; not released by DPAY activation; provider not selected or authorized | `DPAY` | Traceability check only; no adapter designed (16:FPDR-9) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6`; `16:FPDR-9` |
| `15-§5-3` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; provider-event principal and intake (G-W1: 12-Q1, 12-Q2); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§5-4` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | FOLLOW-UP | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; settlement evidence classification: source authentication and line detail provider-dependent; open: OQ-02 (settlement fees); settlement mechanism PROVISIONAL; G-W1 (12-Q1, 12-Q2); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§5-5` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | DEPENDENCY-HELD | H: Upload evidence shown as provider-verified; duplicate uploads | `D14` | FA: review-provenance label, never provider-verified, content-fingerprint duplicate detection; FRV-B | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§5-6` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | LATER-MISSION-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; provider-event principal and intake (G-W1: 12-Q1, 12-Q2) | `D18` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§5-7` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; provider-event principal and intake (G-W1: 12-Q1, 12-Q2); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§5-8` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | DESIGN ACCEPTED — EVIDENCE HOLD | H: Upload evidence shown as provider-verified; duplicate uploads | none (design review) | FA: review-provenance label, never provider-verified, content-fingerprint duplicate detection; FRV-B | SB16-B6-09, SB16-B6-10 / — |
| `15-§6-1` | E-REC: Evidence record (§20.4.8) | DEPENDENCY-HELD | M: Missing audit fields; minor-unit or currency errors; provider-event principal and intake (G-W1: 12-Q1, 12-Q2) | `D12` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-2` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-3` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-4` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-5` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-6` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-7` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; privacy: payer, payee and account hints minimized and permission-scoped; permitted form awaits counsel (U-08); provider not selected or authorized | `D12`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-8` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; retention undefined (U-08 / DC-11); preservation invariant for submitted evidence (MQ-03; 14-Q1 held for EIS); provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-9` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-10` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-11` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D12`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-12` | E-REC: Evidence record (§20.4.8) | DEPENDENCY-HELD | M: Missing audit fields; minor-unit or currency errors; retention undefined (U-08 / DC-11); preservation invariant for submitted evidence (MQ-03; 14-Q1 held for EIS) | `D14`, `DUF6` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / `14:FPDR-2` |
| `15-§7-1` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DEPENDENCY-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D14` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-2` | E-MATCH: Deterministic candidate matcher (§20.4.9) | PROVIDER-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread; provider not selected or authorized | `DPAY` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-3` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DEPENDENCY-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D14` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-4` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DEPENDENCY-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D14` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-5` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DEPENDENCY-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D12` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / `16:FPDR-1` |
| `15-§7-6` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DEPENDENCY-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D14` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-7` | E-MATCH: Deterministic candidate matcher (§20.4.9) | LATER-MISSION-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D14`, `D18` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-8` | E-MATCH: Deterministic candidate matcher (§20.4.9) | PROVIDER-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread; provider not selected or authorized | `DPAY` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-9` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DESIGN ACCEPTED — EVIDENCE HOLD | M: Non-explainable or non-deterministic matching; settlement fees misread | none (design review) | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-10` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DEPENDENCY-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D14` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§8-1` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-1` |
| `15-§8-2` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-1` |
| `15-§8-3` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-1` |
| `15-§8-4` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-1`; `16:FPDR-10` |
| `15-§8-5` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-1` |
| `15-§8-6` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D15` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / — |
| `15-§8-7` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-1` |
| `15-§9-1` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§9-2` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / `14:FPDR-3` |
| `15-§9-3` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / `14:FPDR-3` |
| `15-§9-4` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / `14:FPDR-3` |
| `15-§9-5` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / `14:FPDR-3` |
| `15-§9-6` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§10-1` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§10-2` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§10-3` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§10-4` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D14`, `DTX` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§10-5` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§11-1` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§11-2` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§11-3` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D15` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§11-4` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D14`, `DTX` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / `16:FPDR-10` |
| `15-§11-5` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / `16:FPDR-10` |
| `15-§12-1` | E-IDM: Evidence and link idempotency (§20.4.10) | PROVIDER-HELD | H: Duplicate records or actions under retries; cross-source duplicates; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `DPAY` | FA: three-layer keys, replay returns original outcome, same-ID different-payload conflict; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§12-2` | E-IDM: Evidence and link idempotency (§20.4.10) | DEPENDENCY-HELD | H: Duplicate records or actions under retries; cross-source duplicates | `D14`, `DTX` | FA: three-layer keys, replay returns original outcome, same-ID different-payload conflict; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§12-3` | E-IDM: Evidence and link idempotency (§20.4.10) | DEPENDENCY-HELD | H: Duplicate records or actions under retries; cross-source duplicates | `D14`, `DTX` | FA: three-layer keys, replay returns original outcome, same-ID different-payload conflict; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§12-4` | E-IDM: Evidence and link idempotency (§20.4.10) | DEPENDENCY-HELD | H: Duplicate records or actions under retries; cross-source duplicates | `D14`, `DTX` | FA: three-layer keys, replay returns original outcome, same-ID different-payload conflict; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§12-5` | E-IDM: Evidence and link idempotency (§20.4.10) | DEPENDENCY-HELD | H: Duplicate records or actions under retries; cross-source duplicates | `D15` | FA: three-layer keys, replay returns original outcome, same-ID different-payload conflict; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§12-6` | E-IDM: Evidence and link idempotency (§20.4.10) | PROVIDER-HELD | H: Duplicate records or actions under retries; cross-source duplicates; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `D12`, `DPAY` | FA: three-layer keys, replay returns original outcome, same-ID different-payload conflict; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§13-1` | E-RVS: Reversal, refund and chargeback handling (§20.4.10) | PROVIDER-HELD | H: Silent Ledger rewrite; prior verified state erased; out-of-order or partial states applied; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `D14`, `DPAY` | FA: reversal, late-event and partial-state fixtures route to Owner review with no Ledger change; history preserved | SB16-B6-15 / `16:FPDR-6` |
| `15-§13-2` | E-RVS: Reversal, refund and chargeback handling (§20.4.10) | DEPENDENCY-HELD | H: Silent Ledger rewrite; prior verified state erased; out-of-order or partial states applied | `D14` | FA: reversal, late-event and partial-state fixtures route to Owner review with no Ledger change; history preserved | SB16-B6-15 / — |
| `15-§13-3` | E-RVS: Reversal, refund and chargeback handling (§20.4.10) | DEPENDENCY-HELD | H: Silent Ledger rewrite; prior verified state erased; out-of-order or partial states applied | `D14`, `DTX` | FA: reversal, late-event and partial-state fixtures route to Owner review with no Ledger change; history preserved | SB16-B6-15 / — |
| `15-§14-1` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-4`; `16:FPDR-10` |
| `15-§14-2` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-4`; `16:FPDR-10` |
| `15-§14-3` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-4`; `16:FPDR-1`; `16:FPDR-10` |
| `15-§14-4` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D13` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / — |
| `15-§15-1` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `15-§15-2` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18`, `D14` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `15-§15-3` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18`, `D14` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `15-§15-4` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18`, `D14` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `15-§15-5` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18`, `D14` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `15-§15-6` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18`, `D14` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `15-§15-7` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18`, `DTX` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `15-§16-1` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `15-§16-2` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `15-§16-3` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `15-§16-4` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `15-§16-5` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `15-§16-6` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `15-§17-1` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation | `D12` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / — |
| `15-§17-2` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation; R15-11 open; no grant UI assumed | `D12` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / `16:FPDR-7` |
| `15-§17-3` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation | `D12` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / — |
| `15-§17-4` | C-AUTH: Capability and role boundary (§20.5) | LATER-MISSION-HELD | H: Role-implied access; Manager scope wider than delegation; support access per SB-P-1.19 | `D12`, `D19` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / — |
| `15-§18-1a` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `15-§18-2` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `15-§19-1` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `15-§19-2` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `15-§19-3` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `15-§19-4` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `15-§19-5` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `15-§20-1` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§20-2` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§20-3` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§20-4` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§20-5` | C-EXC: Exception handling and narrow failure | PROVIDER-HELD | M: Global freeze; uncertain write committed; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `DPAY` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-1` | C-EXC: Exception handling and narrow failure | PROVIDER-HELD | M: Global freeze; uncertain write committed; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `DPAY` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-2` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-3` | C-EXC: Exception handling and narrow failure | PROVIDER-HELD | M: Global freeze; uncertain write committed; provider not selected or authorized | `DPAY` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-4` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-5` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-6` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-7` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-8` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-9` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D12` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-10` | E-RVS: Reversal, refund and chargeback handling (§20.4.10) | PROVIDER-HELD | H: Silent Ledger rewrite; prior verified state erased; out-of-order or partial states applied; provider not selected or authorized | `D14`, `DPAY` | FA: reversal, late-event and partial-state fixtures route to Owner review with no Ledger change; history preserved | SB16-B6-15 / `16:FPDR-6` |
| `15-§21-11` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D15` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§22-1` | C-PRIV: Privacy, isolation and dignity | PROVIDER-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people; provider not selected or authorized | `DPAY` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `15-§22-2` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `D14` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `15-§22-3` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `D12` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `15-§22-4` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `D12` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `15-§22-5` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `D12` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `15-§22-6` | C-PRIV: Privacy, isolation and dignity | PROVIDER-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people; provider not selected or authorized | `DPAY` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `15-§23-1` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D14` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / `14:FPDR-1` |
| `15-§23-2` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / `16:FPDR-1` |
| `15-§23-3` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `15-§23-4` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `15-§23-5` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D15` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / `12:FPDR-1` |
| `15-§23-6` | C-FND: Shared-foundation reuse and single write path | DESIGN ACCEPTED — EVIDENCE HOLD | M: Parallel ledger, identity, permission or reminder model | none (design review) | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `15-§23-7` | C-FND: Shared-foundation reuse and single write path | LATER-MISSION-HELD | M: Parallel ledger, identity, permission or reminder model | `D18` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `15-§23-8` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D15` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `15-§24-1` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§24-2` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§24-3` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§24-4` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§24-5` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§24-6` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§25-1` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `14:FPDR-1` |
| `15-§25-2` | C-ACC: Acceptance scenario, completion gate or outcome | PROVIDER-HELD | H: Completion overstated; acceptance without runtime evidence; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `D14`, `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-3` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D13` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-4` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-5` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-6` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `14:FPDR-4`; `16:FPDR-1` |
| `15-§25-7` | C-ACC: Acceptance scenario, completion gate or outcome | LATER-MISSION-HELD | H: Completion overstated; acceptance without runtime evidence | `D18`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-8` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-9` | C-ACC: Acceptance scenario, completion gate or outcome | PROVIDER-HELD | H: Completion overstated; acceptance without runtime evidence; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-10` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D15`, `DAI` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-11` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-12` | C-ACC: Acceptance scenario, completion gate or outcome | PROVIDER-HELD | H: Completion overstated; acceptance without runtime evidence; provider not selected or authorized | `D14`, `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-6` |
| `15-§26-4` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§26-5` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§26-6` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§28-1` | C-ACC: Acceptance scenario, completion gate or outcome | PROVIDER-HELD | H: Completion overstated; acceptance without runtime evidence; binding while F-7 is open; deferred branches not delivered; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `D12`, `D13`, `D14`, `D15`, `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `3-§9-12` | C-BAL: Canonical balance and ageing definition (§20.4.4) | DEPENDENCY-HELD | H: Divergent balances across readers; unattributed sales leaking into balances; verification status mistaken for a balance input; historical sales unattributed until Owner act (16:FPDR-2); data shape UNVERIFIED (OQ-05) | `D14` | FG: balance algebra incl. corrections, reversals and the correction guard; FA: single-definition reader parity; RT | SB16-B6-04, SB16-B6-06 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2`; `16:FPDR-10` |
| `3-§11-6` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation | `D12`, `D14` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / — |
| `3-§15-8` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12`, `D14` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `3-§15-9` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12`, `D14` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `3-§23` | C-ACC: Acceptance scenario, completion gate or outcome | LATER-MISSION-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D13`, `D14`, `D15`, `D20` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `24-§21-4` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / — |
| `24-§21-5` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / — |
| `9-§12-11` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `10-§17-5` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `22-§17-3` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; provider-event principal and intake (G-W1: 12-Q1, 12-Q2); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / — |
| `BP-§5.3-1` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / — |
| `BP-§5.4-1` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; provider-event principal and intake (G-W1: 12-Q1, 12-Q2); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `BP-§6.1-1` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `BP-§6.2-1` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12`, `D13`, `DTX` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / `16:FPDR-10` |
| `BP-§6.3-1` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D14` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `BP-§6.5-1` | C-FUP: Owner follow-up and communication preparation (§20.4.11) | DEPENDENCY-HELD | M: Prepared shown as sent; autonomous delivery | `D15` | FA: no delivery path exists; state labels; RT | SB16-B6-16, SB16-B6-19 / — |
| `BP-§8-1` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `BP-§9-2` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / `14:FPDR-1` |
| `BP-§9-AL` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / — |
| `BP-§10.3-C2` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `BP-§10.5-O` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-W1` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D14` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `16:FPDR-1` |
| `BP-§10.5-W2` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / — |
| `BP-§10.5-W3` | C-DUE: Due/expected date and ageing (§20.4.3) | DEPENDENCY-HELD | H: Invented deadline; device-local date; overdue without recorded date | `D14`, `D15` | FG: overdue predicate incl. timezone boundaries; FA: no-default check; FRV-A | SB16-B6-03, SB16-B6-16 / `16:FPDR-5` |
| `BP-§10.5-W4` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `BP-§10.5-W5` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; provider-event principal and intake (G-W1: 12-Q1, 12-Q2); provider not selected or authorized | `D14`, `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `BP-§10.5-W6` | E-MATCH: Deterministic candidate matcher (§20.4.9) | PROVIDER-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread; provider not selected or authorized | `D14`, `DPAY`, `DTX` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `BP-§10.5-W7` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DEPENDENCY-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D14` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `BP-§10.5-W8` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `BP-§10.5-W9` | E-IDM: Evidence and link idempotency (§20.4.10) | DEPENDENCY-HELD | H: Duplicate records or actions under retries; cross-source duplicates | `D14`, `DTX` | FA: three-layer keys, replay returns original outcome, same-ID different-payload conflict; CONC: concurrent replay | SB16-B6-14 / — |
| `BP-§10.5-W10` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14`, `D15` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / `16:FPDR-3` |
| `BP-§10.5-W11` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D12`, `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / — |
| `BP-§10.5-E1` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-E2` | C-ACC: Acceptance scenario, completion gate or outcome | PROVIDER-HELD | H: Completion overstated; acceptance without runtime evidence; provider not selected or authorized | `D14`, `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-3` |
| `BP-§10.5-E3` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D13` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-E4` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-10` |
| `BP-§10.5-A1` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence; test data needs a recorded, passed due date (O-S4-1) | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-5` |
| `BP-§10.5-A2` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-4` |
| `BP-§10.5-A3` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-B1` | C-ACC: Acceptance scenario, completion gate or outcome | FOLLOW-UP | H: Completion overstated; acceptance without runtime evidence; open: OQ-04 (Scenario B evidence form); provider not selected or authorized | `D14`, `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-B2` | C-ACC: Acceptance scenario, completion gate or outcome | FOLLOW-UP | H: Completion overstated; acceptance without runtime evidence; open: OQ-04 (Scenario B evidence form) | `D12`, `D13` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-B3` | C-ACC: Acceptance scenario, completion gate or outcome | FOLLOW-UP | H: Completion overstated; acceptance without runtime evidence; open: OQ-04 (Scenario B evidence form) | `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-X` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-10` |
| `BP-§11-1` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `BP-§11-5` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / — |
| `BP-§13-1` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / — |
| `BP-§13-9` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / — |
| `BP-§14-1` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / — |

**Reconciliation.**

- 349 rows, one per `IN SCOPE` FCTM row, in FCTM order, each exactly once.
- No disposition, owner, build commitment, commercial classification or Section 8 home changed.
- The 206 non-`IN SCOPE` rows keep their Section 11 dispositions and are not assessed here.
- The 41 `DPAY` rows: 39 `PROVIDER-HELD` and 2 `FOLLOW-UP` (`15-§5-4`, `BP-§10.5-B1`).
- The 26 rows citing `16:FPDR-10` carry it in the Founder-decision column exactly as the canonical FCTM (blob `94dd5220`).
- Version 0.2 changes: OQ-01 is decided (`16:FPDR-10`) and OQ-03 is resolved (MC-225), so `14-§18-3`, `14-§14-3` and `14-§22-7` leave `FOLLOW-UP`; register text corrections per SR01-09, SR03-11, SR05-04, SR05-07, SR05-10, SR05-11 and SR06-02. No disposition, owner or status code of the FCTM changed.
- The 7 `DNTF` rows: all `CHANNEL-HELD`.

## 21. Engineering Questions, Risks & Recommendations

### 21.1 Engineering questions (EQ-01 to EQ-12)

| ID | Treatment | Section | Upstream amendment needed? | Founder decision needed? |
|---|---|---|---|---|
| EQ-01 Identity reference | Proposed: composite participant reference, governed-only | 20.4.1 | No, if sequenced after M14-1 with PQ-2 coordination | No (`16:FPDR-1`) |
| EQ-02 Due date | Proposed: optional `due_on`, no default, business-local evaluation | 20.4.3 | No | No (`16:FPDR-5`) |
| EQ-03 Balance definition | Proposed: single hardened definition from authorized Ledger facts; verification shown beside it (MQ-01); correction guard | 20.4.4 | **Pending 14-Q6** (correction guard and void) | No (MQ-01 ruled) |
| EQ-04 Lump-sum allocation | Proposed: allocation command with linked amounts | 20.4.2, 20.4.9 | No | No |
| EQ-05 Provider principal | Proposed: accept-then-process; `EIS-AUT-01` principal | 20.4.8 | **Possibly** (12-Q1; 12-Q2, watch T2-W2) | No |
| EQ-06 Adapter and binding | Proposed: `EIS-ID-05` binding and adapter contract | 20.4.8 | No | No; provider selection needs separate authorization |
| EQ-07 Settlement and fees | Proposed: settlement lines and explained variance; mechanism PROVISIONAL | 20.4.9 | No | **Fee booking is OQ-02** |
| EQ-08 Separate concepts | Proposed: four fields | 20.4.7 | No | No (`16:FPDR-3`, `16:FPDR-6`) |
| EQ-09 Amounts and currency | Proposed: minor units, currency check | 20.4.8 | No | No |
| EQ-10 Concurrency | Proposed: serialization points, total lock order, linked amounts, atomic create-and-link, single-use binding | 20.4.9 | No (`EIS-CNF-01`, `-02`; 12-Q3 confirmation) | No |
| EQ-11 Reversals | Proposed: fail-closed flag and Owner review; ordering and partial states; governed void | 20.4.10 | **Pending 14-Q6(a)** (watch T8-W2) | No (`16:FPDR-6` §6) |
| EQ-12 Privileges | Proposed: every privilege type revoked; birth-safe creation and effective-access proof | 20.5, 20.4.11 | No (`EIS-ISO-03`; `EIS15-SEC-01`, `-02`) | No |

All twelve are proposals for EIS confirmation. None is resolved until Mission Control approves the Engineering Review and the EIS fixes the design.

### 21.2 Open questions, rulings and upstream requests

| ID | State | Treatment in this draft | Owner |
|---|---|---|---|
| OQ-01 | DECIDED — `16:FPDR-10` (D-1 to D-6) | 20.4.6; engineering representation PROVISIONAL | Founder (decided) |
| OQ-02 | OPEN | Fees shown as explained settlement variance; no automatic entry; settlement mechanism PROVISIONAL | Founder (T3-W2) |
| OQ-03 | RESOLVED (MC-225) | No Employee financial intelligence; transaction entry confers no balance access; no advance action delegated (20.5) | Mission Control |
| OQ-04 | OPEN | Both evidence forms designed; Scenario B wording neutral (20.7.8); closes before the Stage 8 lock | Founder (`BP-§13-9`) |
| OQ-05 | OPEN | No profile is run; an aggregate-only plan under the SR-04 §6A and SR06-06 conditions awaits authorization | Mission Control, with Founder consent |
| MQ-01 | RULED (MC-224/225): reading A | 20.4.4, 20.4.9, 20.7.8 | Mission Control |
| MQ-02 | OPEN (possible T3) | Disclosure only; no conversion (20.4.5) | Mission Control; Founder if T3 |
| MQ-03 | RULED (MC-224/225): preservation invariant; 14-Q1 held for EIS resolution (MC-226) | 20.4.8 | Mission Control |
| MQ-04 | OPEN (T3 watch) | No new merchant-facing label (20.4.10) | Mission Control |
| MQ-05 | ADDRESSED by the actor-separation assessment (21.9) | — | Mission Control |
| MQ-06 | OPEN | No production identifiers in published artifacts | Mission Control |
| MQ-07 | RULED (MC-230) | 20.5 scoped Manager delegation | Mission Control |
| G-W1: 12-Q1 to 12-Q3 | Requested from the SB-P-1.12 owner | 20.4.8, 20.4.9, 20.5; watch T2-W2 on 12-Q2 | SB-P-1.12 owner, through Mission Control |
| 14-Q1 to 14-Q6 | Requested from the SB-P-1.14 owner; 14-Q1 held for EIS resolution | 20.4.4, 20.4.6, 20.4.8, 20.4.10, 20.4.11; watches T2-W1 (14-Q1) and T8-W2 (14-Q6(a)) | SB-P-1.14 owner, through Mission Control |

An unanswered upstream question is a recorded hold, never approval. A returned conflict is screened before any dependent design changes.

### 21.3 Engineering risks

| Risk | Rating | Mitigation |
|---|---|---|
| Any SB-P-1.16 write before the `DTX` cut-over and `EIS14-CMD-03` closure | High | PRECONDITION (20.6); sequencing (20.7.2) |
| New objects born exposed by default grants | High | Revoke-in-same-migration; effective-access inventory (20.5) |
| Divergent balance definitions across readers | High | Single definition with a reader-parity test (20.4.4) |
| Unknown historical data, including repayments recorded as sales | High | Read-only profile (OQ-05); Owner attribution; no reinterpretation |
| Provider events with no admissible principal or intake path | High | Accept-then-process; `EIS-AUT-01` principal; 12-Q1, 12-Q2 (watch T2-W2); provider activation not authorized |
| Concurrent resolution or replay creating duplicate truth | High | 20.4.9 controls; CONC tier |
| Same-actor correlated assumptions across Stages 2–7 | High | Specialist reviews recorded with their same-provider limitation (21.9); a non-author reviewer at later gates (MC-97); Stage 19 independent verifier |
| Merchants reading gateway coverage as universal | Medium | Truthful coverage statement (Blueprint §9) |
| Settlement fees misread as mismatches | Medium | Explained variance (20.4.9) |
| No CI or test environment | High | 20.7.6; no PASS inferred |
| A correction breaking the repayment-to-target invariant | High | Correction guard and D-5 exception (20.4.4); 14-Q6 |
| A reversed repayment not expressible without a governed void | High | Fail-closed reversal handling (20.4.10); 14-Q6(a); watch T8-W2 |
| Submitted evidence expiring under the staging grace | High | Preservation invariant (20.4.8); 14-Q1 held for EIS; watch T2-W1 |
| An advance representation adopted without upstream confirmation | Medium | Marked PROVISIONAL (20.4.6); 14-Q2 to 14-Q5; fixed only in the EIS |

### 21.4 Unresolved dependencies and holds

| Item | State | Effect |
|---|---|---|
| U-08 / DC-11 | OPEN | No retention or deletion rule. Lifecycle-dependent designs are inventoried (CF-6, 21.8): evidence preservation, payer hints, raw evidence, communication drafts, de-identification, restore and rollback. The Stage 8 lifecycle lock waits for it |
| U-10 | OPEN | Nothing designed depends on it |
| R15-11 (F-4) | OPEN | No merchant-facing grant UI; capability boundary per `16:FPDR-7` |
| `DNTF` (7 rows) | No approved channel | `CHANNEL-HELD`; incomplete (F-5) |
| `DPAY` (41 rows) | Channel decided; provider NOT AUTHORIZED | `PROVIDER-HELD` or `FOLLOW-UP` |
| F-7 | OPEN | `15-§28-1` binding; deferred branches traced, not delivered |
| `16:FPDR-9` deferred branches | Founder-deferred; no mission assigned; F-7 open | `15-§5-1` (direct-bank branch), `15-§5-2` and `15-§1-2` stay `IN SCOPE`; no adapter designed; not released by `DPAY` activation |
| `D12`, `D13`, `D14`, `DTX`, `D15`, `DSCH`, `DAI` | Locked specifications; not implemented | `DEPENDENCY-HELD` |
| `D18`, `D19`, `D20` | Not started | `LATER-MISSION-HELD` |
| G-W1 (12-Q1 to 12-Q3) | Requested from the SB-P-1.12 owner; silence is not approval | Provider-event principal and intake; watch T2-W2 |
| CI | UNVERIFIED | No PASS |
| 14-Q1 | HELD FOR EIS RESOLUTION (MC-226) | The preservation invariant stands; the mechanism is finalized in the EIS |
| 14-Q2 to 14-Q6 | Requested; no reply; silence is not approval | Dependent wording PROVISIONAL (20.4.6) or held (20.4.10 void) |
| P-1 to P-4 | Evidence preconditions | Ledger and ACL reconciliation (P-1, joins U-2); live privileges (P-2, P-3); service-role handler inventory (P-4); all before Implementation Authorization |
| Secret-storage home (C-12) | OPEN — Mission Control infrastructure choice | Provider activation not authorized |

### 21.5 Trigger screen

**No new T1, T2, T3, T7 or T8 trigger fired in this revision.**

| Trigger | Screen result |
|---|---|
| T3 (new product behaviour or scenario) | `16:FPDR-10` (OQ-01) is a decided T3. No new product behaviour is proposed. Watches: MQ-02 (historical conversion), MQ-04 (dispute or partial-reversal label), U-08 (lifecycle). OQ-02 and OQ-04 remain Founder questions |
| T7 (omission, deferral, pull-forward, simplification, reclassification) | None. All 349 rows stay `IN SCOPE` with unchanged dispositions. The `16:FPDR-9` branches remain deferred under the Founder's disposed T7 decision; Stage 7 neither designs nor drops them; F-7 stays open. `DPAY`, `DNTF` and `D18` rows are held, not deferred, narrowed or reassigned |
| T8 (Product Truth conflict or infeasibility) | None. MQ-01 reading A closes the conditional T8-C1. No row is infeasible or unsafe; "held" statuses are recorded dependencies |
| T1, T2 (unanswered question; conflict among approved sources) | None established. MQ-07 is ruled (MC-230). Upstream questions are requests, not conflicts |

**Conditional watches (not fired; not established source conflicts).** Each fires only on a concrete returned upstream finding:

| Watch | Fires only if | Rows affected |
|---|---|---|
| T2-W1 | The SB-P-1.14 owner reads `EIS14-RET-01` against the MQ-03 preservation invariant (14-Q1) | `15-§11-2`, `15-§10-1`, `15-§6-8` |
| T2-W2 | The SB-P-1.12 owner confirms that no compliant no-JWT intake path exists (12-Q2) | Contract 15 §22 provider intake, already held under `DPAY` |
| T8-W2 | The SB-P-1.14 owner rules out every governed void path (14-Q6(a)) | `15-§13-*` reversal rows |

**Classification note for Mission Control.** If Mission Control reads `PROVIDER-HELD` or `CHANNEL-HELD` (an unauthorized provider or channel) as "blocked" under Source 18 Stage 7, those 48 rows would need T8 escalation. This draft treats them as recorded dependencies already decided by `16:FPDR-6`, `16:FPDR-8` and `16:FPDR-9`. The precedent is the SB-P-1.15 register (R-5), where held means "unbuilt foundation" and is not T8.

### 21.6 Mandatory specialist reviews (Source 18 §4.8) — performed as same-provider reviews

The six mandatory domain reviews were performed as read-only fact-finding (MC-183) by same-provider Claude subagents commissioned and briefed by the Stage 7 author, and an FIN-01 financial-integrity review followed for OQ-01. Their findings are inputs, never product authority. All 63 findings are disposed of in 21.10. They are not independent assurance and not Stage 19 verification (21.9).

| Review | Report (`specialists/`) | Findings | HIGH / MEDIUM / LOW |
|---|---|---|---|
| Financial integrity (SR-01) | `01-sr01-financial-integrity-review.md` | 9 | 3 / 5 / 1 |
| Security, RLS, grants and authority (SR-02) | `02-sr02-security-rls-grants-authority-review.md` | 10 | 3 / 6 / 1 |
| Concurrency and idempotency (SR-03) | `03-sr03-concurrency-idempotency-review.md` | 12 | 5 / 5 / 2 |
| Migration and historical data (SR-04) | `04-sr04-migration-historical-data-review.md` | 11 | 3 / 7 / 1 |
| Payment-provider architecture (SR-05) | `05-sr05-payment-provider-architecture-review.md` | 11 | 5 / 5 / 1 |
| Legal, privacy and evidence lifecycle (SR-06) | `06-sr06-legal-privacy-evidence-lifecycle-review.md` | 10 | 1 / 6 / 3 |
| **Total** | | **63** | **20 / 34 / 9** |
| FIN-01 (OQ-01) | `07-fin01-oq01-financial-integrity-review.md` | Recommendations; all PROVISIONAL | — |

### 21.7 Recommendations

1. **Review.** Mission Control reviews this version (Sections 20–21 only) with its validation record, the 349-row register and the 63-finding disposition (21.10).
2. **Upstream.** Mission Control sends and tracks 14-Q1 to 14-Q6 and 12-Q1 to 12-Q3. A returned conflict is screened before any dependent design changes.
3. **Preconditions.** P-1 to P-4 and SB16-B6-01, -07, -08 and -24 stay Implementation Authorization preconditions.
4. **Carry-forward.** CF-1 to CF-6 are tracked to their gates (21.8).
5. **Assurance.** Restore and evidence CI and the test project before any Stage 17 claim. Stage 19 is performed by an appointed independent verifier; a non-author reviewer is appointed for later gates (MC-97).
6. **Holds.** Keep U-08 / DC-11, U-10, R15-11, `DNTF`, `DPAY`, F-7, OQ-02, OQ-04, OQ-05, MQ-02, MQ-04 and MQ-06 visibly open.

### 21.8 Carry-forward register

A carried-forward finding is not an approved design. Each is a named obligation with an owner, a gate, the proof required and a fail-closed rule.

| ID | Finding | Requirement | Owner | Target gate | Required later proof | Fail-closed rule |
|---|---|---|---|---|---|---|
| CF-1 | SR01-06 (MEDIUM) | A repayment's participant is derived from its target and cannot be set independently | Claude Code (EIS author) | EIS lock (Stage 11) | EIS clause; negative test (Stage 15); checked at Stage 19 | A mismatched participant is rejected by the command; the EIS cannot lock without the clause |
| CF-2 | SR02-10 (LOW) | An EIS security-matrix row for platform and support access to SB-P-1.16 data | Claude Code (EIS author); Mission Control | EIS lock (Stage 11) | Matrix row; negative tests | Without the row no support access path exists |
| CF-3 | SR03-04 (HIGH) | An ordering rule for late and out-of-order provider events and for a reversal racing a confirmation | Claude Code (EIS author) | EIS lock; provider authorization (Build Plan §5.4) | CONC tests with a fake adapter; runtime evidence at Stage 17 | Out-of-order events go to review and are never applied; no adapter is activated until the rule is tested |
| CF-4 | SR05-05 (HIGH) | A state model for partial refunds and dispute lifecycles | Claude Code (EIS author); Mission Control (MQ-04) | EIS lock; provider authorization | State-machine tests | Unknown or partial states go to Owner review with no Ledger change; no new label before MQ-04 |
| CF-5 | SR05-06 (MEDIUM) | One key-scope scheme across provider, binding and actor, written with SR03-07 | Claude Code (EIS author) | EIS creation (Stage 9) | Key-collision and retry tests | A key collision is rejected, never merged; the EIS cannot lock without the scheme |
| CF-6 | SR06-08 (MEDIUM) | The U-08 inventory of lifecycle-dependent designs and its T3 listing | Claude Code (inventory); Founder or legal counsel (U-08) | Before the Stage 8 lifecycle lock | The inventory in the Stage 8 package | The lifecycle lock is refused without it; no retention or deletion behaviour is built |

The two HIGH carry-forwards (CF-3, CF-4) are safe to carry only because 20.4.10 already fails closed: no reversal, late event or partial state changes the Ledger or a balance before an Owner-run governed correction.

### 21.9 Actor separation (Source 18 §4.3)

- **Roles.** Claude Code is the Definition Actor (Stages 2–4, including the FCTM and Sections 1–19), the Builder Review actor (Stage 6) and the Engineering Review actor (Stage 7). Because the Definition Actor also holds Engineering Review, Source 18 §4.3 requires a Mission Control separation assessment and, on this material-risk mission, a parallel specialist who did not author Sections 1–19 to review the feasibility and risk findings.
- **Record.** Mission Control recorded the independence limitation at Stage 1 (MC-97) and committed to a non-author independent engineering and security reviewer for later gates. Mission Control has accepted this separation assessment for Stage 7 (MC-241).
- **Specialist reviews and their limitation.** SR-01 to SR-06 were performed by same-provider Claude subagents, commissioned and briefed by the author, with partial coverage of the 349 register rows through each domain's affected-row lists. They did not author Sections 1–19, but they share the author's provider and inputs, so correlated-assumption risk remains. They are inputs, not independent assurance.
- **Not Stage 19.** Stage 19 verifies implemented behaviour against a locked Blueprint, a locked EIS and runtime evidence that do not yet exist, by a verifier Mission Control appoints under §4.9. "A new session, model or role label alone does not establish independence" (§4.9). No Stage 19 verification is claimed.

### 21.10 Specialist finding dispositions (63)

Disposition: **Substantive** (Stage 7 design correction), **Editorial** (register or wording), **Carry-forward** (21.8) or **Later gate** (lifecycle class and earliest gate unchanged). Severity and class are as recorded in the specialist reports and the MC-222 classification.

| Finding | Severity | Class | Disposition | Correction | v0.2 location |
|---|---|---|---|---|---|
| SR01-01 | HIGH | S7 | Substantive | C-01 | 20.4.4 |
| SR01-02 | HIGH | S7 / FDR (MQ-01) | Substantive | C-01, C-02, C-22 | 20.4.4; 20.4.9; 20.7.8 |
| SR01-03 | HIGH | UP / EIS | Later gate (S9) | C-03 | 20.4.10 |
| SR01-04 | MEDIUM | S7 | Substantive | C-04 | 20.4.2 |
| SR01-05 | MEDIUM | EIS | Later gate (S9) | C-05 | 20.4.7 |
| SR01-06 | MEDIUM | S7 | Carry-forward CF-1 | C-06 | 20.4.1 |
| SR01-07 | MEDIUM | EIS / FDR (MQ-02, conversion only) | Later gate (S9) | C-07 | 20.4.5 |
| SR01-08 | MEDIUM | EIS | Later gate (S9) | C-08 | 20.4.4 |
| SR01-09 | LOW | S7 | Editorial | C-20 | 20.8 |
| SR02-01 | HIGH | S7 / IMP (P-2/P-3) | Substantive | C-09 | 20.4.11, 20.5 |
| SR02-02 | MEDIUM | S7 | Editorial | C-10 | 20.3, 20.5 |
| SR02-03 | MEDIUM | EIS / UP (SB-P-1.14 table) | Later gate (S9) | C-10 | 20.3, 20.5 |
| SR02-04 | HIGH | UP / PROV | Later gate (S9) | C-11 | 20.4.8 |
| SR02-05 | HIGH | PROV / EIS; FDR (MC infra) | Later gate (S9 / provider authorization) | C-12 | 20.4.8 |
| SR02-06 | MEDIUM | S7 | Substantive | C-13 | 20.5 |
| SR02-07 | MEDIUM | S7 | Substantive | C-14 | 20.5 |
| SR02-08 | MEDIUM | S7 / FDR (OQ-03) | Substantive | C-14 | 20.5 |
| SR02-09 | MEDIUM | IMP / EIS | Later gate (S13) | C-10 | 20.3, 20.5 |
| SR02-10 | LOW | S7 | Carry-forward CF-2 | C-10 | 20.3, 20.5 |
| SR03-01 | HIGH | S7 / EIS | Substantive | C-15 | 20.4.9 |
| SR03-02 | HIGH | S7 | Substantive | C-15 | 20.4.9 |
| SR03-03 | HIGH | S7 | Substantive | C-16 | 20.4.10, 20.4.9 |
| SR03-04 | HIGH | S7 / PROV | Carry-forward CF-3 | C-16 | 20.4.10, 20.4.9 |
| SR03-05 | MEDIUM | EIS | Later gate (S9) | C-15 | 20.4.9 |
| SR03-06 | HIGH | S7 | Substantive | C-02 | 20.4.9 |
| SR03-07 | MEDIUM | S7 | Later gate (S9) | C-16 | 20.4.10, 20.4.9 |
| SR03-08 | MEDIUM | PROV / EIS | Later gate (S9 / provider authorization) | C-16 | 20.4.10, 20.4.9 |
| SR03-09 | MEDIUM | UP / EIS | Later gate (S9) | Held | Upstream 12-Q3 (21.2) |
| SR03-10 | MEDIUM | IMP / S7 (plan wording) | Later gate (S12 (plan); S17/S19 (evidence)) | C-18 | 20.7 |
| SR03-11 | LOW | S7 | Editorial | C-20 | 20.8 |
| SR03-12 | LOW | EIS | Later gate (S9) | C-22 | 20.7.8 |
| SR04-01 | HIGH | IMP / FDR (MC access authorization) | Later gate (S13) | Held | Precondition P-1 (21.4) |
| SR04-02 | HIGH | S7 / IMP | Substantive | C-09 | 20.4.11, 20.5 |
| SR04-03 | MEDIUM | S7 / EIS | Later gate (S9) | C-18 | 20.7 |
| SR04-04 | MEDIUM | UP / EIS | Later gate (S9) | C-18 | 20.7 |
| SR04-05 | HIGH | FDR / IMP (OQ-05 data) | Later gate (S9) | C-07 | 20.4.5 |
| SR04-06 | MEDIUM | EIS / IMP | Later gate (S9) | C-19 | 20.4.11 |
| SR04-07 | MEDIUM | EIS | Later gate (S9) | C-19 | 20.4.11 |
| SR04-08 | MEDIUM | IMP / S7 (plan wording) | Later gate (S12) | C-18 | 20.7 |
| SR04-09 | MEDIUM | IMP | Later gate (S13) | C-18 | 20.7 |
| SR04-10 | MEDIUM | FDR / IMP | Later gate (S9) | Held | OQ-05 (21.2) |
| SR04-11 | LOW | IMP | Later gate (S13) | C-18 | 20.7 |
| SR05-01 | HIGH | PROV / EIS | Later gate (S9 / provider authorization) | C-12 | 20.4.8 |
| SR05-02 | HIGH | PROV / FDR (MC infra) | Later gate (S9 / provider authorization) | C-12 | 20.4.8 |
| SR05-03 | HIGH | UP / PROV | Later gate (S9) | C-11 | 20.4.8 |
| SR05-04 | HIGH | PROV / S7 (register note) | Later gate (S9 / provider authorization) | C-16 | 20.4.10, 20.4.9 |
| SR05-05 | HIGH | S7 / FDR (MQ-04 label) | Carry-forward CF-4 | C-16 | 20.4.10, 20.4.9 |
| SR05-06 | MEDIUM | S7 | Carry-forward CF-5 | C-16 | 20.4.10, 20.4.9 |
| SR05-07 | MEDIUM | PROV / FDR (OQ-02); S7 (register) | Later gate (S9 / provider authorization) | C-20 | 20.8 |
| SR05-08 | MEDIUM | PROV / EIS | Later gate (S9) | C-23 | 20.4.8 |
| SR05-09 | MEDIUM | PROV / IMP | Later gate (Provider authorization; S12) | C-18 | 20.7 |
| SR05-10 | MEDIUM | S7 | Substantive | C-20, C-21 | 20.8; 21.4, 21.5 |
| SR05-11 | LOW | S7 | Editorial (payer hints substantive under SR06-02) | C-17, C-20 | 20.4.8; 20.8 |
| SR06-01 | HIGH | S7 / FDR (MQ-03); U-08 | Substantive | C-17 | 20.4.8 |
| SR06-02 | MEDIUM | S7 | Substantive | C-17 | 20.4.8 |
| SR06-03 | MEDIUM | EIS / UP; U-08 | Later gate (S9) | C-17 | 20.4.8 |
| SR06-04 | MEDIUM | EIS / FDR (erasure T3 watch); counsel | Later gate (S9) | C-19 | 20.4.11 |
| SR06-05 | MEDIUM | EIS | Later gate (S9) | C-14 | 20.5 |
| SR06-06 | MEDIUM | FDR / IMP | Later gate (S9) | Held | OQ-05 privacy conditions (21.2) |
| SR06-07 | LOW | EIS | Later gate (S9) | C-19 | 20.4.11 |
| SR06-08 | MEDIUM | S7 / FDR (U-08) | Carry-forward CF-6 | C-20, C-21 | 20.8; 21.4, 21.5 |
| SR06-09 | LOW | IMP / EIS | Later gate (S12) | C-18 | 20.7 |
| SR06-10 | LOW | FDR | Later gate (Before any publication) | Held | MQ-06 (21.2) |

Totals: 15 substantive, 4 editorial, 6 carry-forward, 38 later gate; 63 findings, 58 mapped to corrections and 5 held.

### 21.11 Version 0.2 change record (C-01 to C-28)

| Correction | Unit | Findings or source | Location | Status |
|---|---|---|---|---|
| C-01 | R-5 | SR01-01, SR01-02 | 20.4.4 | Applied |
| C-02 | R-3 | SR01-02, SR03-06 | 20.4.9 | Applied |
| C-03 | R-8 | SR01-03 | 20.4.10 | Applied; final form after 14-Q6(a) |
| C-04 | R-3 | SR01-04 | 20.4.2 | Applied |
| C-05 | R-1 | SR01-05 | 20.4.7 | Applied; predicate finalized in the EIS |
| C-06 | R-1 | SR01-06 | 20.4.1 | Applied as EIS obligation (CF-1) |
| C-07 | R-5 | SR01-07, SR04-05 | 20.4.5 | Applied (disclosure only; MQ-02 open) |
| C-08 | R-5 | SR01-08 | 20.4.4 | Applied |
| C-09 | R-1 | SR02-01, SR04-02 | 20.4.11, 20.5 | Applied |
| C-10 | R-1 | SR02-02, SR02-03, SR02-09, SR02-10 | 20.3, 20.5 | Applied |
| C-11 | R-7 | SR02-04, SR05-03 | 20.4.8 | Applied; principal and intake upstream (12-Q1, 12-Q2) |
| C-12 | R-7 | SR02-05, SR05-01, SR05-02 | 20.4.8 | Applied; storage home open (Mission Control) |
| C-13 | R-1 | SR02-06 | 20.5 | Applied |
| C-14 | R-2 | SR02-07, SR02-08, SR06-05 | 20.5 | Applied with C-26 and MQ-07 |
| C-15 | R-3 | SR03-01, SR03-02, SR03-05 | 20.4.9 | Applied |
| C-16 | R-4 | SR03-03, SR03-04, SR03-07, SR03-08, SR05-04, SR05-05, SR05-06 | 20.4.10, 20.4.9 | Applied; no new label (MQ-04) |
| C-17 | R-7 | SR06-01, SR06-02, SR06-03, SR05-11 | 20.4.8 | Applied; 14-Q1 held for EIS |
| C-18 | R-8 | SR03-10, SR04-03, SR04-04, SR04-08, SR04-09, SR04-11, SR05-09, SR06-09 | 20.7 | Applied |
| C-19 | R-1 | SR04-06, SR04-07, SR06-04, SR06-07 | 20.4.11 | Applied |
| C-20 | R-9 | SR01-09, SR03-11, SR05-07, SR05-10, SR05-11, SR06-08 | 20.8 | Applied by regeneration |
| C-21 | R-9 | SR05-10, SR06-08 | 21.4, 21.5 | Applied |
| C-22 | R-5 | SR01-02, SR03-12 | 20.7.8 | Applied; OQ-04 open |
| C-23 | R-1 | SR05-08 | 20.4.8 | Applied |
| C-24 | R-6 | FIN-01 §18; `16:FPDR-10` | 20.4.6 | Applied; representation PROVISIONAL |
| C-25 | R-5 | FIN-01 §7, §16; MC-207 AC-4 | 20.4.4 | Applied; PROVISIONAL pending 14-Q2 |
| C-26 | R-2 | FIN-01 §14; `16:FPDR-7` | 20.5 | Applied within C-14 |
| C-27 | R-6 | FIN-01 §8, §11, §12 | 20.4.6 | Applied; PROVISIONAL pending 14-Q3 to 14-Q5 |
| C-28 | R-9 | `16:FPDR-10` | 20.8 | Applied by regeneration (26 cells) |

Application order (one round): R-1 boundaries; R-2 authority; R-3 concurrency; R-4 idempotency and reversal; R-5 balance and evidence; R-6 advance mechanics; R-7 intake and preservation; R-8 migration and delivery; R-9 traceability, with the register regenerated last.
