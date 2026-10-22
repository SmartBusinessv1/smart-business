# SB-P-1.17 — Manager Operations

**SECTIONS 1–19 APPROVED AT STAGE 5 (MC-393; GATE 10 PASS) — FOR STAGE 6 BUILDER REVIEW — NOT LOCKED.**

## Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.17 |
| Mission Name | Manager Operations |
| Mission Type | Product Mission: stock, supplier and reorder intelligence; standard POS bridge, counter intelligence and closing cash; operational dashboard and Manager workspace (Contracts 7, 13, 17) |
| Lifecycle Stage | Source 18 v1.2 Stage 5 complete: Gate 10 PASS; Sections 1–19 approved by Mission Control for Stage 6 Builder Review (MC-393). Next: Stage 6 Builder Review |
| Status | `SECTIONS 1–19 APPROVED AT STAGE 5 — NOT LOCKED`. Approval record `communication/missions/SB-P-1.17/mission-control/MC-393-stage5-gate10-approval-and-stage6-handover.md`, effective on Founder merge. Stage 7, Stage 8 Blueprint Lock, EIS and implementation not authorized |
| Product Authority | Founder |
| Product Discovery and Drafting | Claude Code, Definition Actor (Stage 1 Intake Pack §4, `communication/missions/SB-P-1.17/mission-control/02-stage1-intake-pack-and-definition-actor-appointment.md`, blob `79c684e8`) |
| Lifecycle Authority | Source 18 v1.2 (`merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `0945bda60a93c99909c3b7a247d5427ebe256011`) |
| Structural template | `docs/phase-1-mission-blueprint/templates/SB-P-Product-Feature-Elaboration-Workflow-Template.md` (blob `710dd977`); structure of the latest completed Blueprint `docs/phase-1-mission-blueprint/completed/SB-P-1.16.md` |
| Stage 4 Authorization | MC-318 (Stage 4 documentary drafting) with MC-319 (canonical path correction), on baseline `main@df55e2779203348ff3df9f11745f850abec35923`. Both are relayed conversation records; no repository record exists yet |
| Stage 3 | Founder Decision Gate TRIGGERED; closed and verified (MC-316, relayed). Records: `mission-control/09-stage3-founder-decision-gate-record.md` (blob `4820485e`), `mission-control/10-stage3-completion-and-handover-record.md` (blob `f250e9eb`; PR #996) |
| Governing Build Plan section | Build Plan §10.6 (`docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`, blob `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a`) |
| Primary contracts | Contract 7 Stock, Supplier & Reorder Intelligence (`65ad91b2`); Contract 13 POS Connection, Counter Intelligence & Closing Cash (`4426e8b1`); Contract 17 Operational Dashboard & Manager Workspace (`7943f74a`); Global Product Completion View (`ee76d920`) |
| Canonical FCTM | `communication/missions/SB-P-1.17/claude-code/01-stage2-populated-fctm.md`, blob `cb79088d` (PR #995, with the `17:FPDR-7` row citations added at MC-368A and the G10-07 traceability corrections at MC-380A): 630 rows — 404 `IN SCOPE`, 151 `DELEGATED`, 15 `ASSIGNED TO LATER MISSION`, 24 `NOT APPLICABLE`, 31 `OUT OF BUILD SCOPE`, 5 `UNRESOLVED FOUNDER DECISION`, 0 `ESCALATED`, 0 `ALREADY DEMONSTRATED` |
| Founder Product Decision Record | `communication/missions/SB-P-1.17/claude-code/10-stage3-six-entry-founder-product-decision-record-for-review.md`, blob `90b7ca1d` (PR #994): `17:FPDR-1` to `17:FPDR-6`. `17:FPDR-7`: `communication/missions/SB-P-1.17/claude-code/15-stage5-founder-product-decision-record-17-fpdr-7.md`, blob `e9f2cacb` (PR #1002). Upstream decisions are cited with their mission namespace (`12:FR-04`, `12:FR-06`, `12:FR-09`, `14:FPDR-1`, `16:FPDR-1`) |
| Stage 3 reconciliation | `communication/missions/SB-P-1.17/claude-code/11-stage3-decision-integration-and-reconciliation.md`, blob `d333ce6e` |
| Mission Truth Pack | `communication/missions/SB-P-1.17/claude-code/03-stage2-mission-truth-pack.md`, blob `8d541153` (Parts A–D), read with the derived-constraint corrections of the reconciliation Section C |
| Upstream dependencies | SB-P-1.12 to SB-P-1.16: specifications locked; Implementation Authorization `WITHHELD`; no runtime evidence |
| Date | 2026-10-20 |
| Builder Review | Not started. Stage 6 Builder Review (Claude Code) is the next authorized activity; it may begin only after Founder merge of the MC-393 record |
| Engineering Review (Sections 20–21) | Not started; Claude Code owns Sections 20–21 at Stage 7 (Source 18 §4.4) |
| Mission Control Review | Stage 5 complete: Gate 10 PASS; G10-07 closed on acceptance of MC-392A; Sections 1–19 approved for Stage 6 Builder Review (MC-393) |
| Blueprint Lock | Not locked; determined solely by a later Stage 8 Founder approval record |

## Mission Snapshot

| Field | Summary |
|---|---|
| Product problem | Smart Business has an Owner-only inventory foundation, a Product & Price Master foundation and a dashboard shell. It has no supplier identity, threshold, reorder suggestion or rule, expiry or wastage record, POS bridge, counter signal, closing-cash comparison, Manager role or Manager-depth workspace (Truth Pack Δ-01). Merchants track stock risk, supplier relationships, counter anomalies and closing cash in their heads (C7 §1; C13 §2; C17 §2). |
| Primary users | Owner (all stock, supplier, reorder, counter and closing authority). Manager only through explicit, scoped, revocable Owner grants (`17:FPDR-1`). Employee only through permitted operational tasks, without Owner intelligence. Supplier only as a purpose-limited participant who receives merchant-sent requests (`17:FPDR-3`; `21-§4-4`). |
| Build Now in this mission | Stock intelligence on the existing foundation: low and slow stock, expiry and wastage where data exists, and evidence-backed, Owner-confirmed threshold suggestions (`17:FPDR-6`). Supplier identity, memory and history, with Owner-confirmed historical attribution (`17:FPDR-5`) and cost-protected prices (`17:FPDR-4`). Evidence-backed reorder suggestions confirmed by the Owner by default, or by a scoped Manager grant, plus Owner-created bounded standing rules. Merchant-controlled purchase requests (`17:FPDR-3`). Bulk and stock-document intake through UDI. A vendor-neutral standard POS bridge with two interface classes (`17:FPDR-2`). Neutral counter review with human context. Factual closing cash. A permission-scoped Manager workspace with contextual Product & Price Master access. |
| Core boundary | Consumes the SB-P-1.12 authority, identity and delegated-automation kernel, the SB-P-1.13 conversation and AI kernel, SB-P-1.14 Business Memory and UDI, SB-P-1.15 reminders, Ask CFO and Daily Intelligence, and SB-P-1.16 financial truth, all as specifications; builds no parallel version. No POS vendor is named or activated (`DPOS`). No system-sent supplier message before an approved channel (`DNTF`; SB-P-1.20). |
| Assigned to later missions (Build Now, not Build Later) | 15 rows: SB-P-1.18 3, SB-P-1.19 2, SB-P-1.20 10 (Section 11.1). |
| Rejected | Blind supplier procurement; custom POS core modification; AI accusation, verdicts or punishment; register lockout; fixed universal thresholds; duplicate stock engines; dashboard-only business logic; and every Build Plan §16 and GPCV §9 rejection (Sections 10.3, 11.3). |
| Stage result sought | A Mission Control-reviewable, source-traceable Product Blueprint through Section 19, assembled by reference to the 630-row canonical FCTM and `17:FPDR-1` to `17:FPDR-7`. Sections 1–19 approved at Stage 5 (MC-393; Gate 10 PASS); not locked. Next: Stage 6 Builder Review. Stage 7, Stage 8 Blueprint Lock, EIS and implementation not authorized. |

## 1. Mission Overview

### Purpose

Make Smart Business genuinely useful for day-to-day operational management without becoming a heavy ERP (Build Plan §10.6 product outcome, `BP-§10.6-O`).

### Summary

SB-P-1.17 completes three contracts on shared foundations:

- **Stock, Supplier & Reorder Intelligence (Contract 7)** extends the canonical inventory foundation (GPCV row 7, `IMPLEMENTED BUT INCOMPLETE`).
- **POS Connection, Counter Intelligence & Closing Cash (Contract 13)** adds a standard bridge beside the merchant's existing POS (GPCV row 13, `NOT IMPLEMENTED`).
- **The Manager-depth workspace (Contract 17)** presents shared truth to each role within its permissions (GPCV row 17, `IMPLEMENTED BUT INCOMPLETE`).

The Contract 17 permission surface (§§13–14) is SB-P-1.12's (`I-12`). SB-P-1.17 builds the operational depth that sits inside it.

### Mission Philosophy

Build Plan §10.6 exit principle, by reference (`BP-§10.6-X`): the merchant understands what is happening in the shop and what needs attention, without replacing current tools or being accused by the software. AI observes, explains and suggests; reorder execution requires Owner confirmation or a stored, bounded Owner rule (C7 header and §5). POS data informs; the product never accuses, punishes or disrupts checkout (C13 header and §3).

## 2. Domain

### Stock, Suppliers, Reorder, POS Counter Activity, Closing Cash and the Manager Workspace

The mission's domain is the merchant's operational state:

- what stock exists and how it moves;
- which supplier relationships are involved;
- what may need reorder;
- what the existing POS reports at the counter;
- how the day closes in cash;
- the role-scoped workspace through which Owner and Manager see and act on it (C7 §1; C13 §1; C17 §1).

### Relationship to Other Domains

| Domain | Relationship | Source |
|---|---|---|
| Authority, identity and delegated automation (SB-P-1.12) | Owns roles, capability grants, the Supplier participant identity (EIS-ID-03), the delegated-automation authority check and the Contract 17 §§13–14 permission surface. This mission declares its capabilities on that kernel (`17:FPDR-1`) | C21; `22-§5-6`; `21-§12-*`; `D12` |
| Product & Price Master (SB-P-1.12 reconciliation) | Owns commercial product identity, pricing, tax and Reference Cost. This mission links stock, suppliers, reorder and POS mapping to the same item identity, and shows product and price contextually | Build Plan §7; `BP-§7-*` (`DELEGATED`); `12:FR-04`, `12:FR-09` |
| Conversation and AI (SB-P-1.13) | Stock, supplier, reorder and counter conversations run through the shared kernel and Human Language Layer; AI must-nots are kernel-enforced | C24; C9 §12; `7-§11-2`; `D13` |
| Business Memory and UDI (SB-P-1.14) | Four-state Ledger and credit direction; the opening-stock UDI slice; governed storage. This mission links stock and Ledger events without duplicating them | C3 §15; C5; `7-§6-2`, `7-§6-4`; `D14`; `DTX` |
| Reminders, Ask CFO, Daily Intelligence (SB-P-1.15) | Reorder and supplier follow-up reuse the Reminder Engine; Ask CFO and Daily Intelligence read this mission's data through governed readers | `BP-§6.5-1`; C2; C4; `D15` |
| Financial integrity (SB-P-1.16) | Owns one balance truth; supplier-side `owed_by_business` belongs here and respects the shared direction model; FIN-01 PROVISIONAL | `EIS16-LDG-02`; `D16`; W-1 |
| Orders and delivery (SB-P-1.18) | Consumes this mission's stock and availability; Staff/HR and Order views in the workspace stay there | Build Plan §11; `17-§9`, `17-§10`; `D18` |
| Onboarding and lifecycle (SB-P-1.19) | Onboarding imports reuse this mission's UDI stock path; subscription entitlements and Smart Stock price stay there | `20-§5`, `20-§9`; `BP-§15-4`; `DENT` |
| WhatsApp (SB-P-1.20) | System dispatch of supplier requests and WhatsApp stock and reorder interactions stay there | C23; `23-§4-4`, `23-§16-5`; `D20` |

## 3. Mission Objective

Deliver, by reference to the FCTM, every `IN SCOPE` obligation of Contracts 7, 13 and 17, the delegated rows assigned here, and Build Plan §10.6, within the boundaries of `17:FPDR-1` to `17:FPDR-6`. Founder Scenarios A and B and the approved experience anchors can then be demonstrated once the upstream dependencies and, for Scenario B, an evidenced POS source exist (Section 15).

## 4. Business Purpose

Merchants lose money to avoidable stockouts, expiry, dead capital and forgotten supplier context, and track all of it in memory (C7 §1). Many already use a POS that works. They need clarity about counter activity and closing cash without replacement pressure, and without software that judges staff (C13 §1–§2). Owners and Managers need a calm visual view of operational state that does not leak Owner intelligence or become a second source of truth (C17 §1–§2).

This mission turns that into evidence-backed, explained suggestions. Every consequential decision stays with a human: the Owner by default, a Manager only within an explicit grant.

## 5. Product Truth Alignment

| Principle | Source | Realized by |
|---|---|---|
| AI observes, explains and suggests; it is not the authority | C7 header, §11; C13 header, §3; Source 11 Reorder Intelligence | `17:FPDR-1`, `17:FPDR-6`; Sections 8.2, 8.4 |
| Reorder triggers are not permission | C7 §5; C11 §12; guide §7 | Section 8.4; `7-§5-3`; DC-03 |
| Respect the existing POS; standard bridge only | C13 §1, §3, §5; Build Plan §10.6; GPCV §9 | `17:FPDR-2`; Section 8.6 |
| Review signals, never accusations | C13 §8, §15, §18; C7 §14; Build Plan §10.6, §16 | Section 8.7; DC-14 |
| Owner financial intelligence protected by default | C13 §13; C17 §13, §18; C21 §9 | `17:FPDR-1`, `17:FPDR-4`; Sections 8.9, 8.10 |
| One stock foundation; no duplicate engines or dashboard-only logic | C7 §9, §16; C17 §7, §21 | Sections 8.1, 8.9; DC-01, DC-13 |
| Facts, unknowns, suggestions and decisions are distinguished | C13 §10, §12; C17 §6 | Sections 8.8, 9 |
| Smart Business works without WhatsApp | Build Plan §8 | `BP-§8-1`; Section 8.10 |

## 6. User Value

- **Owner:**
  - sees stock position, low and slow stock, expiry and wastage where data exists, and confirms explained threshold suggestions;
  - reviews evidence-backed reorder suggestions and confirms, modifies or rejects them;
  - creates bounded standing rules;
  - prepares supplier requests to send personally;
  - sees neutral counter review signals and factual closing cash, with full authority over all of it (C7 §10 p1; C13 §13 p1).
- **Manager:** only the capabilities the Owner grants explicitly, each within an assigned scope (`17:FPDR-1`):
  - view stock, supplier and reorder state;
  - confirm, modify or reject reorder suggestions;
  - manage supplier records;
  - view counter review signals;
  - enter a cash count;
  - view the variance.

  Never by role, and not grantable under `17:FPDR-1`: operator-attributed counter detail, standing-rule creation and closing-cash policy, all Owner-reserved. Reference Cost and margin are not granted by role either. Each is Owner-only by default and becomes visible to a Manager only through its own explicit Owner grant; granting one never grants the other (`12:FR-04` F-03). Supplier purchase prices are Reference Cost information and need the Reference Cost grant (`17:FPDR-4`). Margin intelligence is governed separately by `12:FR-09`: without the margin grant, Smart Business computes, labels or exposes no margin or margin-derived output.
- **Employee:** permitted operational stock tasks only, with actor identity preserved; no anomaly analysis about other staff and no Owner intelligence (C13 §13 p3; `21-§11-1`).
- **Supplier:** receives only the merchant-sent request the workflow needs; no merchant intelligence (C7 §3 p3, §10 p4; `17:FPDR-3`).

## 7. Core Deliverables

| Deliverable | Section | Draft workstream (Intake Pack §5, nonfinal) |
|---|---|---|
| Stock foundation, movements, Ledger linkage and packaging | 8.1 | WS17-A |
| Low and slow stock, expiry, wastage and threshold suggestions | 8.2 | WS17-A |
| Supplier identity, memory, history and protected prices | 8.3 | WS17-A |
| Reorder intelligence, confirmation, standing rules and purchase requests | 8.4 | WS17-B |
| Stock documents and bulk intake through UDI | 8.5 | WS17-F |
| Standard POS bridge, source identity, mapping and deduplication | 8.6 | WS17-C |
| Neutral counter review and human context | 8.7 | WS17-D |
| Closing cash and closing intelligence | 8.8 | WS17-D |
| Manager workspace, views, personalization and resilience | 8.9 | WS17-E |
| Users, permissions, conversation, Ask CFO and channels | 8.10 | WS17-E |
| Failure handling, audit, shared foundations and non-goals | 8.11 | WS17-F |
| Acceptance, completion gates and mission outcome accounting | 8.12 | all |

The workstream register remains a draft until Stage 13.

## 8. Detailed Functional Scope

Each subsection names its governing sources and lists every `IN SCOPE` FCTM row it realizes. Requirement text is not restated: the row pointer and its source section are the requirement. **Each `IN SCOPE` row appears in exactly one subsection.** Rows of kind `SCN`, `FRV`, `EXP` or `GATE` are also acceptance, experience or completion obligations in Section 15, and rows with a dependency code are also governed by Section 12. The grouping is navigation only and changes no FCTM row.

### 8.1 Stock Foundation, Movements, Ledger Linkage and Packaging

Sources: Contract 7 §§1, 2, 8, 9; Contract 3 §15; Build Plan §7, §10.6 b11 and E3; GPCV row 7.

Mission design:

- **Extend the existing foundation** additively: item identity, quantity, units, append-only movements, opening stock, audited corrections and Product & Price Master links. No second stock engine (DC-01; `7-§9-3`).
- **Unit-conversion, batch and costing mechanics** are left to the EIS (`7-§2-12`).
- **Stock and Ledger events link without duplication.** A confirmed purchase may create a movement and a Ledger expense; a sale affects stock only through the approved business-event path; a stock correction never fabricates a financial transaction; supplier payment state is distinct from goods-receipt state (`7-§8-*`; `DTX`; DC-04).
- **Packaging:**
  - Stock Intelligence is Manager core.
  - Smart Stock Assistant is the Ledger add-on path on the same foundation and permissions (`7-§9-1`, `7-§9-2`).
  - The add-on's capability list follows the Source 11 reading DC-15 (derived; U-10). Its price is `BP-§15-4`, which is not on the critical path.
- **Contextual Product & Price Master access:** product and price management appear where operational work needs them; Catalog is not revived as a competing top-level product (`BP-§10.6-E3`, `BP-§10.6-W11`).

**FCTM rows realized here (23 `IN SCOPE`):**

- Contract 3 (1): `3-§15-10`
- Contract 7 (18): `7-§1-1`, `7-§1-2`, `7-§2-1`, `7-§2-2`, `7-§2-3`, `7-§2-4`, `7-§2-5`, `7-§2-10`, `7-§2-11`, `7-§2-12`, `7-§8-1`, `7-§8-2`, `7-§8-3`, `7-§8-4`, `7-§8-5`, `7-§9-1`, `7-§9-2`, `7-§9-3`
- Build Plan (3): `BP-§10.6-E3`, `BP-§10.6-W11`, `BP-§11-7`
- GPCV (1): `GPCV-R7`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (2):** `7-§1-1`, `BP-§10.6-E3`

### 8.2 Low and Slow Stock, Expiry, Wastage and Threshold Suggestions

Sources: Contract 7 §2 b6–b9, §16 b6; Build Plan §10.6 b2–b3; `17:FPDR-6`; DC-06 and DC-07 as reconciled.

Mission design:

- **Signals come only from recorded facts.** Expiry and freshness exist only where batch or expiry data was captured; wastage is a recorded movement; nothing is inferred (DC-07).
- **Thresholds** (`17:FPDR-6`, as clarified at MC-300):
  - Where the merchant's own evidence is sufficient, Smart Business may show an explained, item-level suggested starting threshold.
  - Each suggestion is identified as **unconfirmed**.
  - Only explicit Owner confirmation, or an Owner change to the value, activates threshold-driven low-stock alerts or threshold-driven reorder actions.
  - With insufficient evidence, no value is invented and the configuration gap is shown.
  - No universal numeric default exists.
  - Independently authorized manual reorder workflows are unaffected.

**Evidence sufficiency — open at the EIS boundary** (Stage 4 definition prose for Mission Control review; not a Founder decision; MC-320).

*Fixed by `17:FPDR-6`, and not open:*
- a suggestion is explained and evidence-backed;
- it is identified as unconfirmed;
- where evidence is insufficient, no value is invented and the configuration gap is shown;
- only explicit Owner confirmation, or an Owner change, activates threshold-driven alerts or threshold-driven reorder actions;
- no universal numeric default exists;
- manual reorder workflows stay available where authorized.

*Not fixed here:* what counts as sufficient evidence. **The EIS must determine and justify operational evidence sufficiency**, considering sparse merchant data, irregular and seasonal sales patterns and new items. No numerical threshold, window or count is set by this Blueprint.

*Candidate technical safeguards for the EIS to evaluate* (not locked eligibility policy):

1. the merchant's own recorded outward movements for the item support the suggestion;
2. those movements are not under an open source conflict (DC-08) or a pending correction;
3. the item's unit and current quantity are known;
4. the suggestion states its basis (the data period and the movements it relies on).

The EIS may adopt, change or replace these safeguards, with justification. If the resulting sufficiency policy would materially affect when suggestions are available to merchants, it requires Mission Control T6 screening (Source 18 Stage 3) and Founder confirmation where triggered, before it is relied on.

**FCTM rows realized here (7 `IN SCOPE`):**

- Contract 7 (5): `7-§2-6`, `7-§2-7`, `7-§2-8`, `7-§2-9`, `7-§16-6`
- Build Plan (2): `BP-§10.6-W2`, `BP-§10.6-W3`

### 8.3 Supplier Identity, Memory, History and Protected Prices

Sources: Contract 7 §3; Contract 3 §9, §11, §15; Build Plan §10.3 search sequencing, §10.6 b1; `17:FPDR-4`, `17:FPDR-5`; `16:FPDR-1`; `14:FPDR-1`.

Mission design:

- **Supplier identity.** A supplier is the business-scoped SB-P-1.12 participant identity, one per business, reused by purchasing, reorder, UDI and Ledger (DC-02; `22-§5-6`, `DELEGATED`). Supplier–product relations link to the Product & Price Master item. Ambiguous matches need merchant confirmation, with no silent merge (`9-§10-2`).
- **Supplier memory:** contact, supplied items, purchase history, communication history (merchant-reported, `17:FPDR-3`), preferred and alternate context, and the payment/credit relationship where authorized.
- **Supplier-side credit** uses direction `owed_by_business` against the supplier counterparty. It is never netted with customer advances (DC-04; W-1, FIN-01 PROVISIONAL; `D16`).
- **Protected prices** (`17:FPDR-4`). Supplier purchase prices are cost information. A Manager sees them only with the explicit Reference Cost permission. Smart Business computes or exposes no margin without the separate margin permission (`12:FR-09`). This is the corrected DC-05 rationale: protection rests on the Founder's cost classification, not on margin arithmetic.
- **Historical attribution** (`17:FPDR-5`). Historical purchases carrying a free-text "Supplier name" may be linked to a supplier identity only by explicit, audited Owner confirmation. Smart Business may show possible matches labelled unconfirmed, but never links on its own. Original transactions are unchanged, no duplicate is created, and unlinked purchases stay visibly unlinked. Whether linking can be delegated is undecided (N-1).
- **Directory search** is read as supplier side here; the customer side stays joint with SB-P-1.18 (U-12; `16:FPDR-1`).
- **Suppliers never receive merchant intelligence** (`7-§3-9`).
- **Supplier memory list (C7 §3 p2, "may include").** Name/contact, supplied items, purchase history and communication history are independently mandatory. The payment/credit relationship is conditionally mandatory where authorized. Prices and preferred/alternate context are permissive examples: optional, and if prices are shown, `17:FPDR-4` applies. Supporting data alone does not make an example mandatory (`17:FPDR-7`). No row, seed or scenario is reduced (Gate 10 annex `communication/missions/SB-P-1.17/claude-code/14-stage5-gate10-documentary-corrections.md` §C-2.1).

**FCTM rows realized here (16 `IN SCOPE`):**

- Contract 3 (3): `3-§9-3`, `3-§11-6`, `3-§15-7`
- Contract 7 (9): `7-§3-1`, `7-§3-2`, `7-§3-3`, `7-§3-4`, `7-§3-5`, `7-§3-6`, `7-§3-7`, `7-§3-8`, `7-§3-9`
- Build Plan (4): `BP-§10.3-S2`, `BP-§10.6-W1`, `BP-§10.6-W10`, `BP-§10.6-W12`

### 8.4 Reorder Intelligence, Confirmation, Standing Rules and Purchase Requests

Sources: Contract 7 §§4, 5, 11; Contract 10 §13; Contract 12 §7; Contract 24 §§18, 21; Build Plan §6.5, §10.6 b4–b6; `17:FPDR-1`, `17:FPDR-3`, `17:FPDR-4`.

Mission design:

- **A suggestion explains its context:** current stock, observed movement, the confirmed threshold or target, recent purchase and supplier context (prices only under `17:FPDR-4`), and expiry or overstock risk. It never invents demand or supplier availability (`7-§4-*`).
- **Default flow:** observe → suggest → review by the Owner, or by a Manager holding the scoped reorder grant (`17:FPDR-1`, capability 2) → confirm, modify or reject → approved supplier/order action (`7-§5-1`). The approved action is a recorded purchase request linked to the Product & Price Master item and the supplier (`17:FPDR-3`).
- **Standing rules:**
  - Automatic execution happens only under a bounded standing rule that **the Owner** created (`7-§5-2`; C7 §5 p3), with item, supplier, quantity or value ceiling, frequency and validity.
  - Every run is re-evaluated by the SB-P-1.12 delegated-automation check (`21-§12-1` to `-5`).
  - A rule that is expired, revoked or out of scope fails closed and falls back to a suggestion (DC-03).
  - A trigger firing is never permission (`7-§5-3`).
- **Purchase requests** (`17:FPDR-3`):
  - Smart Business prepares a factual message that the merchant copies, shares or prints and sends personally.
  - Nothing is shown as sent or accepted unless the merchant records it; supplier replies are merchant-recorded (DC-11).
  - No system-sent supplier message exists before an approved channel (`DNTF`; SB-P-1.20).
  - The C24 §18 example step "supplier communication is sent" is realized as merchant-sent.
- **AI may** summarize, flag, suggest quantities and suppliers, explain anomalies neutrally and draft. **AI must not** invent quantities, infer theft, overwrite history, order without confirmation or delegated authority, or expose financial intelligence (`7-§11-*`).
- **Follow-up** uses the shared Reminder Engine (`BP-§6.5-1`; `24-§18-3`).

**FCTM rows realized here (31 `IN SCOPE`):**

- Contract 7 (22): `7-§4-1`, `7-§4-2`, `7-§4-3`, `7-§4-4`, `7-§4-5`, `7-§4-6`, `7-§4-7`, `7-§5-1`, `7-§5-2`, `7-§5-3`, `7-§5-4`, `7-§11-1.1`, `7-§11-1.2`, `7-§11-1.3`, `7-§11-1.4`, `7-§11-1.5`, `7-§11-1.6`, `7-§11-2.1`, `7-§11-2.2`, `7-§11-2.3`, `7-§11-2.4`, `7-§11-2.5`
- Contract 10 (1): `10-§13-6`
- Contract 12 (1): `12-§7-7`
- Contract 24 (2): `24-§18-3`, `24-§21-3`
- Build Plan (5): `BP-§10.6-W4`, `BP-§10.6-W5`, `BP-§10.6-W6`, `BP-§11-6`, `BP-§6.5-1`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (1):** `24-§18-3`

### 8.5 Stock Documents and Bulk Intake Through UDI

Sources: Contract 7 §6; Contract 5 §4; Build Plan §10.6 b12; GPCV §11.

Mission design:

- **Stock lists, other stock documents and the inventory side of supplier invoices** use the shared UDI pattern: file or photo → interpretation → preview → clarification → confirmation → validated inventory update (`7-§6-1`, `7-§6-3`, `7-§6-4b`, `5-§4-10`).
- **No isolated import truth** bypasses inventory audit and idempotency (`7-§6-5b`).
- **Opening stock** is the SB-P-1.14 UDI slice (`7-§6-2`, `7-§6-4`, `7-§6-5`, `7-§15-2a`, `DELEGATED`). This mission consumes it and adds no third import stack.
- **The Lovable opening-stock code** is engineering evidence only and is not promoted unchanged (`GPCV-§11-2`).

**FCTM rows realized here (6 `IN SCOPE`):**

- Contract 5 (1): `5-§4-10`
- Contract 7 (4): `7-§6-1`, `7-§6-3`, `7-§6-4b`, `7-§6-5b`
- GPCV (1): `GPCV-§11-2`

### 8.6 Standard POS Bridge, Source Identity, Mapping and Deduplication

Sources: Contract 13 §§1, 4–7; Contract 7 §7; Contract 22 §17; Contract 3 §15; Build Plan §5.4, §6.6, §10.6 b7 and E1; GPCV row 13; `17:FPDR-2`.

Mission design (`17:FPDR-2`):

- **One Smart Business bridge contract, fed by two interface classes:**
  1. an authenticated API or webhook adapter, where a POS offers one;
  2. a structured export file through UDI. This is a committed interface class, not a CSV-only bridge (`13-§20-7`).
- **Fields:**
  - Minimum: sales ingestion, transaction/reference identity, item mapping, quantity and price, payment method, time.
  - Optional, and conditional on the source: discount, void and reversal, operator identity.
- **Integration limitations are shown honestly.** A signal the source cannot supply is shown as unavailable from that POS (`13-§5-6`).
- **Source identity and deduplication:**
  - Every event keeps its source identity.
  - Retries and duplicates create no duplicate revenue or stock.
  - A manual entry that looks like the same sale is a merchant review candidate, not an automatic merge (DC-12, derived; consistent with C13 §7 p2).
- **Mapping and fallback:**
  - Product mapping to the Product & Price Master drives stock movement only where configured.
  - Unmapped or conflicting events are surfaced, not guessed.
  - Inventory works without POS.
  - A POS outage leaves manual operation available.
- **Edge-only adaptation:** no client-specific change inside core (`13-§5-1`; `GPCV-§9-6`).
- **Vendor capability is UNKNOWN.** No POS vendor, product or interface capability is named, selected or described as available (`DPOS`). Provider selection, credentials, secret home (`DSEC`), routing, failure and rollback need separate evidence and authorization (`BP-§5.4-1`).

**FCTM rows realized here (40 `IN SCOPE`):**

- Contract 3 (1): `3-§15-11`
- Contract 7 (4): `7-§7-1`, `7-§7-2`, `7-§7-3`, `7-§7-4`
- Contract 13 (29): `13-§1-1`, `13-§1-2`, `13-§4-1`, `13-§4-2`, `13-§4-3`, `13-§4-4`, `13-§4-5`, `13-§4-6`, `13-§4-7`, `13-§4-8`, `13-§4-9`, `13-§4-10`, `13-§5-1`, `13-§5-2`, `13-§5-3`, `13-§5-4`, `13-§5-5`, `13-§5-6`, `13-§6-1`, `13-§6-2`, `13-§6-3`, `13-§6-4`, `13-§6-5`, `13-§6-6`, `13-§7-1`, `13-§7-2`, `13-§7-3`, `13-§7-4`, `13-§7-5`
- Contract 22 (1): `22-§17-2`
- Build Plan (4): `BP-§10.6-E1`, `BP-§10.6-W7`, `BP-§5.4-1`, `BP-§6.6-1`
- GPCV (1): `GPCV-R13`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (3):** `13-§1-1`, `13-§1-2`, `BP-§10.6-E1`

### 8.7 Neutral Counter Review and Human Context

Sources: Contract 13 §§2, 3, 8, 9, 15, 18; Contract 7 §14; Build Plan §3, §10.6 b8 and E2; `17:FPDR-1` (capability 5); DC-14 as reconciled.

Mission design:

- **Review signals are factual patterns,** shown only for data the source supplies (`17:FPDR-2`): voids, high discount activity, reversals, price overrides, unusual timing, closing-cash variance.
- **They are neutral review items, never accusations** (`13-§8-*`; `BP-§10.6-E2`). Illustrative wording is from C13 §8 and is not fixed copy.
- **Authorized human context** (festival discount, damaged product, Owner instruction) is added without deleting the original event (`13-§9-*`).
- **The product never autonomously** locks a register, suspends anyone, reverses a transaction, changes prices, blocks checkout, deducts wages or accuses a person (`13-§15-*`).
- **Signal list (C13 §8 p1, "may identify … such as").** Closing-cash variance is independently mandatory (`13-§10-7`). Voids and discounts are conditionally mandatory on a connected source evidenced to supply them (Founder Scenario B; `13-§21-5`; `17:FPDR-2`). Reversals, price overrides, timing and other signals are permissive examples, not required merely because data exists (`17:FPDR-7`). Neutral, non-accusatory review governs every signal shown (annex §C-2.2).
- **Visibility:**
  - Signals are shown at counter and period level.
  - Operator-attributed detail is **Owner-only** (`17:FPDR-1` capability 5; DC-14 corrected) and appears only where the POS exposes it and use is permitted.
  - Staff do not see anomaly analysis about other staff (`13-§13-3`).
  - The U-11 staff-privacy and legal-research hold remains.

**FCTM rows realized here (43 `IN SCOPE`):**

- Contract 7 (2): `7-§14-1`, `7-§14-2`
- Contract 13 (38): `13-§2-6`, `13-§3-1`, `13-§3-2`, `13-§3-3`, `13-§3-4`, `13-§3-5`, `13-§3-6`, `13-§3-7`, `13-§8-1`, `13-§8-2`, `13-§8-3`, `13-§8-4`, `13-§8-5`, `13-§8-6`, `13-§8-7`, `13-§8-8`, `13-§8-9`, `13-§8-10`, `13-§9-1`, `13-§9-2`, `13-§9-3`, `13-§9-4`, `13-§9-5`, `13-§9-6`, `13-§9-7`, `13-§15-1`, `13-§15-2`, `13-§15-3`, `13-§15-4`, `13-§15-5`, `13-§15-6`, `13-§15-7`, `13-§15-8`, `13-§18-1`, `13-§18-2`, `13-§18-3`, `13-§18-4`, `13-§18-5`
- Build Plan (3): `BP-§10.6-E2`, `BP-§10.6-W8`, `BP-§3-1`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (7):** `13-§8-9`, `13-§9-2`, `13-§9-3`, `13-§9-4`, `13-§9-5`, `13-§9-6`, `BP-§10.6-E2`

### 8.8 Closing Cash and Closing Intelligence

Sources: Contract 13 §§10–11; Build Plan §10.6 b9; `17:FPDR-1` (capabilities 6, 7); DC-09 (derived); U-03.

Mission design:

- **Closing compares inputs present.** Expected cash is built from the inputs present: POS cash sales, other payment methods, opening and closing cash information, recorded cash expenses and movements, refunds, voids and adjustments. It is compared with the actual count entered by an authorized user: the Owner, or a Manager holding capability 6.
- **Variance is computed only from present inputs.** A missing input makes the result partial, with the unknown named; it is never zero-filled (DC-09, provisional posture).
- **A variance is a fact to review, never proof of misconduct** (`13-§10-8`).
- **Night Closing Intelligence (SB-P-1.15)** may consume closing data for the Owner and authorized Managers. Employees never receive Owner-level closing intelligence (`13-§11-7`).
- **Cadence is open (U-03):** day versus shift, and opening-float capture, are Stage 4/EIS definitions.

**The closing view keeps four kinds of information visibly distinct:**

| Kind | Example | Rule |
|---|---|---|
| Observation | Counted cash entered; POS-reported cash sales | Recorded with actor and time; corrections linked, never overwritten |
| Unknown | No opening-float record; POS sync incomplete | Named as unknown; variance shown as partial |
| Derived suggestion | "Cash is ₹X lower than recorded cash activity" | Labelled as calculated from the listed inputs |
| Human decision | Owner adds context or marks reviewed | Attributed; never changes the original facts |

**FCTM rows realized here (16 `IN SCOPE`):**

- Contract 13 (15): `13-§10-1`, `13-§10-2`, `13-§10-3`, `13-§10-4`, `13-§10-5`, `13-§10-6`, `13-§10-7`, `13-§10-8`, `13-§11-1`, `13-§11-2`, `13-§11-3`, `13-§11-4`, `13-§11-5`, `13-§11-6`, `13-§11-7`
- Build Plan (1): `BP-§10.6-W9`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (5):** `13-§11-2`, `13-§11-3`, `13-§11-4`, `13-§11-5`, `13-§11-6`

### 8.9 Manager Workspace, Views, Personalization and Resilience

Sources: Contract 17 §§1–4, 6–8, 15–19, 21, 23; Build Plan §10.6 b10, outcome and exit principle; GPCV row 17; `17:FPDR-1`, `17:FPDR-4`.

Mission design:

- **The workspace is a calm visual surface over shared truth.**
  - Ledger-oriented surfaces and Manager-oriented surfaces, each fed by its owning feature service (DC-13).
  - The financial and business summary shows only reliable data and never fabricates metrics (`17-§6-8`).
  - Stock, supplier, reorder, POS and closing-cash views use this mission's services.
  - Staff/HR and Order views are SB-P-1.18's (`17-§4-15`, `17-§9`, `17-§10`).
- **Role cards are a usability layer.** Server-side enforcement is SB-P-1.12's surface (`17-§13-*`, `17-§14-*`, `DELEGATED`). The workspace shows a Manager only granted capabilities (`17:FPDR-1`), and never supplier prices without Reference Cost permission (`17:FPDR-4`; `17-§4-14`).
- **Resilience:**
  - A failing card is isolated.
  - Stale consequential state is labelled.
  - Performance never bypasses authorization (`17-§17-*`, `17-§19-*`).
- **Experience rules:**
  - No ERP-form-first experience.
  - No fixed four-tab layout as Product Truth.
  - No dashboard-only logic.
  - No hidden employee surveillance (`17-§18-5`).
  - No manipulative engagement (`17-§15-8`).
  - The Conversation Workspace stays first-class (`17-§21-5`; `17-§5-*`, SB-P-1.13).
- **Stable identifiers** exist for critical governed flows (`17-§16-2`, `17-§16-3`, `17-§22-10b`).
- **Permissive surface lists** (C17 §4 "may present / may include / may add", §6 "may present … such as", §15 "may adapt to"). Required operational capabilities stay mandatory:
  - stock, supplier/reorder and closing-cash surfaces;
  - POS/counter once a source is connected;
  - workspace exposure of Ask CFO, Daily Intelligence and documents (owned upstream);
  - the accurate Owner summary (`17-§22-1`);
  - truthfulness and authorization (§6 p2–p3);
  - role enforcement and useful-work priority (§15 p1, p3).

  Other visual surfaces, summary metrics and navigation adaptations are permissive examples: optional, and supporting data alone does not make them mandatory (`17:FPDR-7`). No row, seed or scenario is reduced (annex §C-2.3 to §C-2.5).

**FCTM rows realized here (80 `IN SCOPE`):**

- Contract 17 (77): `17-§1-1`, `17-§1-2`, `17-§2-9`, `17-§3-1`, `17-§3-2`, `17-§3-3`, `17-§3-4`, `17-§3-5`, `17-§3-6`, `17-§3-7`, `17-§4-1`, `17-§4-2`, `17-§4-3`, `17-§4-4`, `17-§4-5`, `17-§4-6`, `17-§4-7`, `17-§4-8`, `17-§4-9`, `17-§4-10`, `17-§4-11`, `17-§4-12`, `17-§4-13`, `17-§4-14`, `17-§4-16`, `17-§6-1`, `17-§6-2`, `17-§6-3`, `17-§6-4`, `17-§6-5`, `17-§6-6`, `17-§6-7`, `17-§6-8`, `17-§7-1`, `17-§7-2`, `17-§7-3`, `17-§7-4`, `17-§7-5`, `17-§7-6`, `17-§7-7`, `17-§7-8`, `17-§8-1`, `17-§8-2`, `17-§8-3`, `17-§8-4`, `17-§8-5`, `17-§8-6`, `17-§15-1`, `17-§15-2`, `17-§15-3`, `17-§15-4`, `17-§15-5`, `17-§15-6`, `17-§15-7`, `17-§15-8`, `17-§16-2`, `17-§16-3`, `17-§17-1`, `17-§17-2`, `17-§17-3`, `17-§17-4`, `17-§17-5`, `17-§17-6`, `17-§17-7`, `17-§17-8`, `17-§17-9`, `17-§18-3`, `17-§18-5`, `17-§19-1`, `17-§19-2`, `17-§21-1`, `17-§21-2`, `17-§21-3`, `17-§21-5`, `17-§23-2`, `17-§23-3`, `17-§23-4`
- Build Plan (2): `BP-§10.6-O`, `BP-§10.6-X`
- GPCV (1): `GPCV-R17`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (3):** `17-§1-1`, `BP-§10.6-O`, `BP-§10.6-X`

### 8.10 Users, Permissions, Conversation, Ask CFO and Channels

Sources: Contract 13 §§12–14; Contract 9 §12; Contract 12 §4; Build Plan §6.1, §8; `17:FPDR-1`; R15-11.

Mission design. Manager capabilities under `17:FPDR-1` are explicit, scoped, revocable Owner grants. Each is checked server-side, revalidated at execution and audited. Revoking a grant before commit stops a prepared action.

| # | Capability | Delegable to a Manager | Rows |
|---|---|---|---|
| 1 | View stock, supplier and reorder state | Yes, scoped | `17-§7-*` |
| 2 | Confirm, modify or reject reorder suggestions | Yes, scoped; optional Owner-set value ceiling | `7-§5-1` |
| 3 | Manage supplier records | Yes, scoped | `7-§3-*` |
| 4 | View counter review signals (counter and period level) | Yes, scoped | `13-§13-2`, `17-§8-*` |
| 5 | View operator-attributed counter detail | **No — Owner-reserved** | `13-§13-2`, `13-§4-7` |
| 6 | Enter a cash count | Yes, scoped | `13-§10-6` |
| 7 | View the variance | Yes, scoped | `13-§10-7` |
| — | Create a standing reorder rule | **No — Owner-only (C7 §5 p3)** | `7-§5-2` |
| — | Reference Cost, margin, Owner financial intelligence | **Not by role**; only by the separate SB-P-1.12 permissions (`12:FR-04`, `12:FR-09`) | `7-§3-5`, `7-§4-5` |
| — | Closing-cash policy | **No — Owner-reserved** | `13-§10-*` |

Other rules:

- **No merchant-facing grant interface is assumed** while SB-P-1.15 R15-11 is open; the capability catalogue is an EIS matter consuming SB-P-1.12 (N-6).
- **Conversation:**
  - Owners ask about stock, POS, counter and closing in English, Malayalam or Manglish through the native Conversation Workspace, on the same data and permissions as the dashboard (`13-§14-1a`, `13-§14-2`).
  - The WhatsApp slice is SB-P-1.20's (`13-§14-1b`).
  - Basic Voice supports stock and supplier instructions where the role permits (`12-§4-4`).
- **Ask CFO explains POS and closing data read-only,** distinguishing fact from hypothesis (`13-§12-*`; SB-P-1.15).

**FCTM rows realized here (15 `IN SCOPE`):**

- Contract 9 (1): `9-§12-8`
- Contract 12 (1): `12-§4-4`
- Contract 13 (11): `13-§12-1`, `13-§12-2`, `13-§12-3`, `13-§12-4`, `13-§12-5`, `13-§13-1`, `13-§13-2`, `13-§13-3`, `13-§13-4`, `13-§14-1a`, `13-§14-2`
- Build Plan (2): `BP-§6.1-1`, `BP-§8-1`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (3):** `13-§12-2`, `13-§12-3`, `13-§12-4`

### 8.11 Failure Handling, Audit, Shared Foundations and Non-goals

Sources: Contract 7 §§12, 13, 16; Contract 13 §§16, 17, 19, 20, 22; Contract 17 §20; Build Plan §5.3, §6.2, §6.3, §9, §13, §14.

Mission design:

- **Failures are contained** at the uncertain update: duplicate movements, unknown or ambiguous items, unit mismatch, negative stock policy, correction conflicts, supplier unavailability or communication failure (merchant-reported, `17:FPDR-3`), POS/manual conflict, document conflict, retries, expired rules, POS connection loss, missing mapping, out-of-order events, partial sync, stale credentials, a missing closing count and an unresolved variance (`7-§13-*`; `13-§16-*`).
- **Data and audit** preserve source identity, raw and normalized facts, dedupe state, reversal links, operator identity where permitted, review signals, human context and closing inputs (`13-§17-*`).
- **Consequential writes** use the one Business Command path (`BP-§6.2-1`).
- **Shared foundations are reused, not rebuilt** (`7-§12-*`, `13-§19-*`, `17-§20-*`).
- **Non-goals and superseded behaviour** are checked as must-not-appear (Section 10.3).

**FCTM rows realized here (93 `IN SCOPE`):**

- Contract 7 (27): `7-§12-1`, `7-§12-2`, `7-§12-3`, `7-§12-4`, `7-§12-5`, `7-§12-6`, `7-§12-7`, `7-§12-8`, `7-§12-9`, `7-§13-1`, `7-§13-2`, `7-§13-3`, `7-§13-4`, `7-§13-5`, `7-§13-6`, `7-§13-7`, `7-§13-8`, `7-§13-9`, `7-§13-10`, `7-§13-11`, `7-§13-12`, `7-§13-13`, `7-§16-1`, `7-§16-2`, `7-§16-3`, `7-§16-4`, `7-§16-5`
- Contract 13 (46): `13-§16-1`, `13-§16-2`, `13-§16-3`, `13-§16-4`, `13-§16-5`, `13-§16-6`, `13-§16-7`, `13-§16-8`, `13-§16-9`, `13-§16-10`, `13-§16-11`, `13-§16-12`, `13-§17-1`, `13-§17-2`, `13-§17-3`, `13-§17-4`, `13-§17-5`, `13-§17-6`, `13-§17-7`, `13-§17-8`, `13-§17-9`, `13-§17-10`, `13-§17-11`, `13-§17-12`, `13-§19-1`, `13-§19-2`, `13-§19-3`, `13-§19-4`, `13-§19-5`, `13-§19-6`, `13-§19-7`, `13-§19-8`, `13-§19-9`, `13-§19-10`, `13-§20-1`, `13-§20-2`, `13-§20-3`, `13-§20-4`, `13-§20-5`, `13-§20-6`, `13-§20-7`, `13-§22-1`, `13-§22-2`, `13-§22-3`, `13-§22-4`, `13-§22-5`
- Contract 17 (12): `17-§20-1`, `17-§20-2`, `17-§20-3`, `17-§20-4`, `17-§20-5`, `17-§20-6`, `17-§20-7`, `17-§20-8`, `17-§20-9`, `17-§20-10`, `17-§20-11`, `17-§20-12`
- Build Plan (8): `BP-§13-1`, `BP-§13-9`, `BP-§14-1`, `BP-§5.3-1`, `BP-§6.2-1`, `BP-§6.3-1`, `BP-§9-6`, `BP-§9-AL`

### 8.12 Acceptance, Completion Gates and Mission Outcome Accounting

Sources: Contract 7 §15, §18; Contract 13 §21, §24; Contract 17 §22, §25; Build Plan §10.6 Founder Scenarios A and B; Build Plan §13.

The contract acceptance scenarios, Founder Runtime Verification clauses and completion gates are listed in Section 15. Completion gates are reported honestly at Stage 22. A contract is complete only when every one of its `BUILD NOW` rows is demonstrated across the missions that own them (GPCV §4.4).

**FCTM rows realized here (34 `IN SCOPE`):**

- Contract 7 (11): `7-§15-1`, `7-§15-2b`, `7-§15-3`, `7-§15-4`, `7-§15-5`, `7-§15-6`, `7-§15-7`, `7-§15-8`, `7-§15-9`, `7-§15-11`, `7-§18-1`
- Contract 13 (12): `13-§21-1`, `13-§21-2`, `13-§21-3`, `13-§21-4`, `13-§21-5`, `13-§21-6`, `13-§21-7`, `13-§21-8`, `13-§21-9`, `13-§21-10`, `13-§21-11`, `13-§24-1`
- Contract 17 (5): `17-§22-1`, `17-§22-5`, `17-§22-6`, `17-§22-10b`, `17-§25-1`
- Build Plan (6): `BP-§10.6-A1`, `BP-§10.6-A2`, `BP-§10.6-A3`, `BP-§10.6-A4`, `BP-§10.6-B1`, `BP-§10.6-B2`

## 9. UI / UX Expectations

By reference, not new design. Exact screens, labels and interaction design are later product-design and engineering matters within these limits:

- **Explained, labelled suggestions.** Every reorder suggestion and threshold suggestion shows its basis and is marked as a suggestion. A suggested threshold is visibly **unconfirmed** until the Owner confirms or changes it (`17:FPDR-6`; C7 §4).
- **The configuration gap is shown.** Without sufficient evidence, the item shows that no threshold is set, not an invented value (`17:FPDR-6`; DC-06).
- **Confirmation is explicit.** Reorder confirmation, modification and rejection are explicit human actions, bound to the reviewed suggestion. A standing rule displays its bounds (C7 §5; `24-§21-3`).
- **Purchase requests are prepared, not sent.** Copy, share and print actions; no "sent" or "accepted" state without merchant entry (`17:FPDR-3`).
- **Protected prices.** Manager views without Reference Cost permission show quantities and dates only; no Smart Business-computed margin appears anywhere without margin permission (`17:FPDR-4`; `12:FR-09`).
- **Unconfirmed attribution.** Possible historical supplier matches are labelled unconfirmed and do nothing until the Owner confirms (`17:FPDR-5`).
- **Honest POS coverage.** The product states which signals the connected source can and cannot supply; no implied coverage of an unevidenced POS (`17:FPDR-2`).
- **Neutral counter language.** Review signals ask for review and never name wrongdoing. Operator detail appears only for the Owner (`13-§8-*`; `BP-§10.6-E2`; `17:FPDR-1`).
- **Closing clarity.** Observations, unknowns, calculated figures and human decisions are visibly distinct; a partial variance says which inputs are missing (Section 8.8).
- **Calm, role-appropriate workspace.** Manager views show only granted scope. No fear-based upsell. Conversation stays first-class (C17 §3, §15, §21).

## 10. Business Rules

### 10.1 Founder decisions (by reference)

The six decisions in the Founder Product Decision Record (blob `90b7ca1d`) govern this Blueprint. Each carries the Founder's verbatim statement selecting Option A, and the collective confirmation is in the record's Section 0.2. `17:FPDR-7` is recorded separately (blob `e9f2cacb`, PR #1002) and carries the Founder's verbatim direction. For the six, the text quoted below is the **canonical selected option text** the record quotes from the annex or the U-15 addendum, not new Founder wording; where a summary is given, the record prevails. "Rows citing it" lists the FCTM rows whose Founder-decision cell carries the decision (43 rows, 45 references in total, verified on FCTM blob `cb79088d`; before MC-368A, 21 rows and 22 references). Consequential, cross-mission and no-citation rows are mapped in the Stage 3 reconciliation Section B without FCTM citations.

**`17:FPDR-1` — U-01 Manager delegation** (record entry 1)

> The Owner may grant capabilities 1, 2, 3, 4, 6 and 7 separately, each limited to assigned items, suppliers or counters. A reorder grant may carry an Owner-set value ceiling. Capability 5, standing-rule creation, Reference Cost and margin (`12:FR-04`, `12:FR-09`), and closing-cash policy stay Owner-reserved

Capability 5 is operator-attributed counter detail. Standing-rule creation is a separate Owner-only boundary from C7 §5 p3 (MC-300 clarification in the record). Applied in: Sections 6, 8.4, 8.7, 8.8, 8.10, 9. Rows citing it (3): `7-§5-1`, `13-§10-6`, `13-§13-2`.

**`17:FPDR-2` — U-02 Standard POS bridge** (record entry 2)

> Phase 1 commits to one Smart Business bridge contract fed by (i) an authenticated API or webhook adapter, where a POS offers one, or (ii) a structured export file through UDI. Both carry stable source identity and dedupe. Minimum fields: external transaction ID, time, POS item reference, quantity, price, payment method. Discount, void and operator are optional. Counter signals appear only for data the source supplies; otherwise the product says the signal is unavailable from this POS. Founder Scenario B is verified against the first source with evidence that it supplies discount or void data

Applied in: Sections 8.6, 8.7, 9, 15. Rows citing it (11): `13-§4-1`, `13-§4-2`, `13-§4-3`, `13-§4-4`, `13-§4-5`, `13-§4-6`, `13-§4-7`, `13-§4-10`, `13-§5-6`, `BP-§10.6-B1`, `BP-§10.6-W7`.

**`17:FPDR-3` — U-05 Merchant-controlled supplier requests** (record entry 3)

> A confirmed reorder creates a recorded purchase request. Smart Business prepares a factual message for the supplier, which the merchant copies, shares or prints and sends personally. Nothing is shown as "sent" or "accepted" unless the merchant records it. Supplier replies are recorded by the merchant. SB-P-1.20 later adds system dispatch

Applied in: Sections 8.3, 8.4, 8.11, 9. Rows citing it (3): `7-§3-6`, `7-§5-1`, `7-§13-8`.

**`17:FPDR-4` — U-06 Cost-protected supplier prices** (record entry 4)

> Supplier purchase prices in reorder and supplier contexts count as cost information. A Manager sees them only with the explicit Reference Cost permission; without it, suggestions show quantities and dates only

Applied in: Sections 8.3, 8.4, 8.9, 8.10, 9. Rows citing it (2): `7-§3-5`, `7-§4-5`.

**`17:FPDR-5` — U-13 Owner-confirmed historical attribution** (record entry 5)

> The Owner may link historical purchases to a supplier identity by explicit, audited confirmation. Smart Business may show possible matches clearly labelled unconfirmed, but never links on its own. The original transaction and its audit history are unchanged; no duplicate purchase is created. Unlinked purchases stay visibly unlinked

Applied in: Sections 8.3, 9. Rows citing it (1): `7-§3-4`.

**`17:FPDR-6` — U-15 Owner-confirmed threshold suggestions** (record entry 6)

> An explained item-level threshold suggestion may appear. Nothing is activated until the Owner explicitly confirms or changes it.

As clarified in the record's acceptance condition (MC-300), no threshold-driven alert and no threshold-driven reorder action becomes active before Owner confirmation; manual reorder workflows are unaffected; no universal numeric default. Applied in: Sections 8.2, 8.4, 9, 15. Rows citing it (2): `7-§2-6`, `7-§16-6`.

**`17:FPDR-7` — Permissive implementation examples** (record `15-stage5-founder-product-decision-record-17-fpdr-7.md`, Section 1)

> I confirm that examples introduced permissively in approved source contracts remain optional implementation approaches unless another approved source, Founder decision or acceptance requirement independently makes them mandatory.
>
> This decision must not weaken required stock, supplier, POS, counter intelligence, closing-cash, authorization, financial privacy, or Founder Runtime Verification capabilities.
>
> Avoid unnecessary feature expansion. Do not treat the mere availability of supporting data as an obligation to implement every optional presentation or adaptation.

These are paragraphs 1, 2 and 4 of the Founder's verbatim direction. Paragraphs 3 and 5 (Source 18 reconciliation with independent verification before Gate 10 acceptance; no approval of PR #1001, Gate 10, Stage 6 or implementation) are in the record, which prevails. On the cited rows the FCTM evidence cell carries `PERM-EX (17:FPDR-7)` and the verification seed is qualified (`RT if adopted`, `EXP if adopted`, or `FRV-B only if used as the Scenario B signal`; FCTM §0.10). The 12 independently mandatory and 5 conditionally mandatory rows of the same lists, and Founder Scenarios A and B, are unchanged (Gate 10 annex §C-2.6). Applied in: Sections 8.3, 8.7, 8.9. Rows citing it (23): `7-§3-5`, `7-§3-8`, `13-§8-3`, `13-§8-4`, `13-§8-5`, `13-§8-7`, `17-§4-1`, `17-§4-2`, `17-§4-3`, `17-§4-5`, `17-§4-13`, `17-§4-14`, `17-§6-1`, `17-§6-2`, `17-§6-3`, `17-§6-4`, `17-§6-5`, `17-§6-6`, `17-§15-2`, `17-§15-3`, `17-§15-5`, `17-§15-6`, `17-§15-7`.

### 10.2 Standing rules by reference

The following `IN SCOPE` rule and principle rows (100 rows) are business rules of this mission. Each is realized in its Section 8 subsection.

- Contract 3 (3): `3-§15-7`, `3-§15-10`, `3-§15-11`
- Contract 7 (21): `7-§1-2`, `7-§2-12`, `7-§3-1`, `7-§5-1`, `7-§5-2`, `7-§5-4`, `7-§6-4b`, `7-§7-4`, `7-§8-1`, `7-§8-5`, `7-§12-1`, `7-§12-2`, `7-§12-3`, `7-§12-4`, `7-§12-5`, `7-§12-6`, `7-§12-7`, `7-§12-8`, `7-§12-9`, `7-§13-13`, `7-§14-1`
- Contract 13 (30): `13-§2-6`, `13-§3-1`, `13-§3-2`, `13-§3-3`, `13-§3-4`, `13-§3-5`, `13-§3-6`, `13-§4-10`, `13-§5-2`, `13-§5-3`, `13-§5-4`, `13-§5-5`, `13-§5-6`, `13-§7-5`, `13-§8-8`, `13-§9-1`, `13-§14-2`, `13-§15-8`, `13-§16-12`, `13-§18-5`, `13-§19-1`, `13-§19-2`, `13-§19-3`, `13-§19-4`, `13-§19-5`, `13-§19-6`, `13-§19-7`, `13-§19-8`, `13-§19-9`, `13-§19-10`
- Contract 17 (27): `17-§1-2`, `17-§2-9`, `17-§3-1`, `17-§3-2`, `17-§3-3`, `17-§3-4`, `17-§3-5`, `17-§3-6`, `17-§3-7`, `17-§4-16`, `17-§6-7`, `17-§15-1`, `17-§16-2`, `17-§16-3`, `17-§17-9`, `17-§20-1`, `17-§20-2`, `17-§20-3`, `17-§20-4`, `17-§20-5`, `17-§20-6`, `17-§20-7`, `17-§20-8`, `17-§20-9`, `17-§20-10`, `17-§20-11`, `17-§20-12`
- Contract 22 (1): `22-§17-2`
- Build Plan (15): `BP-§11-6`, `BP-§11-7`, `BP-§13-1`, `BP-§13-9`, `BP-§14-1`, `BP-§3-1`, `BP-§5.3-1`, `BP-§5.4-1`, `BP-§6.2-1`, `BP-§6.3-1`, `BP-§6.5-1`, `BP-§6.6-1`, `BP-§8-1`, `BP-§9-6`, `BP-§9-AL`
- GPCV (3): `GPCV-R13`, `GPCV-R17`, `GPCV-R7`

### 10.3 Must-not rows

The following `IN SCOPE` must-not rows (66 rows) are checked as "must not appear" in this mission's deliverable. The Build Plan §16 and GPCV §9 rejections are in Section 11.3.

- Contract 7 (19): `7-§3-9`, `7-§4-7`, `7-§5-3`, `7-§6-5b`, `7-§7-3`, `7-§8-4`, `7-§9-3`, `7-§11-2.1`, `7-§11-2.2`, `7-§11-2.3`, `7-§11-2.4`, `7-§11-2.5`, `7-§14-2`, `7-§16-1`, `7-§16-2`, `7-§16-3`, `7-§16-4`, `7-§16-5`, `7-§16-6`
- Contract 13 (31): `13-§3-7`, `13-§5-1`, `13-§6-6`, `13-§8-10`, `13-§10-8`, `13-§11-7`, `13-§12-5`, `13-§13-4`, `13-§15-1`, `13-§15-2`, `13-§15-3`, `13-§15-4`, `13-§15-5`, `13-§15-6`, `13-§15-7`, `13-§18-1`, `13-§18-2`, `13-§18-3`, `13-§18-4`, `13-§20-1`, `13-§20-2`, `13-§20-3`, `13-§20-4`, `13-§20-5`, `13-§20-6`, `13-§20-7`, `13-§22-1`, `13-§22-2`, `13-§22-3`, `13-§22-4`, `13-§22-5`
- Contract 17 (14): `17-§6-8`, `17-§7-8`, `17-§8-6`, `17-§15-8`, `17-§18-3`, `17-§18-5`, `17-§19-2`, `17-§21-1`, `17-§21-2`, `17-§21-3`, `17-§21-5`, `17-§23-2`, `17-§23-3`, `17-§23-4`
- Build Plan (1): `BP-§6.1-1`
- GPCV (1): `GPCV-§11-2`

## 11. Out of Scope

This section accounts for every FCTM row that is not `IN SCOPE`: 15 `ASSIGNED TO LATER MISSION`, 151 `DELEGATED`, 31 `OUT OF BUILD SCOPE`, 24 `NOT APPLICABLE` and 5 `UNRESOLVED FOUNDER DECISION`.

- **Copied without change.** Dispositions, owning missions, build commitments and citations are copied from the canonical FCTM exactly.
- **Still committed.** Each row is **still committed — not in this mission**, with its owning mission or preserved classification. No `BUILD NOW` row becomes `BUILD LATER`, and exclusion here cancels no other mission's responsibility.
- **Interfaces are not pull-forward.** Where this mission must expose an interface to another mission's obligation, the Section 8 row realizes the interface only. Examples are stock data for SB-P-1.18 orders, readers for SB-P-1.15 Ask CFO and Daily Intelligence, and the purchase request that SB-P-1.20 will dispatch.

### 11.1 Assigned to later missions — still committed, not in this mission (15 rows)

Each row keeps its approved build commitment and commercial classification. Assignment is mission scheduling, not `BUILD LATER`. Distribution: SB-P-1.18 3, SB-P-1.19 2, SB-P-1.20 10.

#### `SB-P-1.18` (3 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 17-§4-15 | C17@7943f74a | §4 b15: staff/HR/order-delivery views when add-ons are enabled. | ASSIGNED TO LATER MISSION | SB-P-1.18 | A-BP107; I-12 (17-§9, 17-§10 ASSIGNED SB-P-1.18) | — |
| 17-§9 | C17@7943f74a | §9 whole section: Staff / HR Views (b1–b6, p2) | ASSIGNED TO LATER MISSION | SB-P-1.18 | A-BP107; I-12 (17-§9 ASSIGNED SB-P-1.18) | — |
| 17-§10 | C17@7943f74a | §10 whole section: Order & Delivery Views (b1–b6, p2) | ASSIGNED TO LATER MISSION | SB-P-1.18 | A-BP107; I-12 (17-§10); I-16 (17-§10 COD consumer) | — |

#### `SB-P-1.19` (2 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 20-§5 | C20@56ed4d11 | §5 whole section: first-stage discovery incl. POS habits (b6) and stock needs (b8) | ASSIGNED TO LATER MISSION | SB-P-1.19 | A-BP108; I-12 (20-§5 ASSIGNED SB-P-1.19); SB-P-1.17 supplies the stock/POS capabilities discovered | — |
| 20-§9 | C20@56ed4d11 | §9 whole section: existing-data import incl. POS/catalog exports (b2) | ASSIGNED TO LATER MISSION | SB-P-1.19 | A-BP108; I-12 (20-§9); I-14 (20-§9 DELEGATED SB-P-1.19); must reuse UDI (7-§6-*), never a third import stack | — |

#### `SB-P-1.20` (10 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 10-§14-3 | C10@5c145ed7 | §14 during WhatsApp failure: POS/API ingestion continues where available | ASSIGNED TO LATER MISSION | SB-P-1.20 | I-13 (10-§14-3 ASSIGNED SB-P-1.20); A-BP109; native precondition 13-§16-12 | — |
| 13-§14-1b | C13@4426e8b1 | §14 p1: same — WhatsApp slice | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109 (BP §9 row 9) | — |
| 23-§4-4 | C23@2430e1c6 | §4 p4 <Supplier>: bounded supplier communication (purchase-request/reorder responses) via WhatsApp | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109; native supplier workflow 7-§5-1; U-05 | — |
| 23-§10-5 | C23@2430e1c6 | §10 b4: WhatsApp text — updating stock where permitted | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109 | — |
| 23-§10-6 | C23@2430e1c6 | §10 b5: WhatsApp text — initiating reorder/order workflows | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109 | — |
| 23-§12-4 | C23@2430e1c6 | §12 b2: WhatsApp image/document — stock documents | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109; I-14 (23-§12 DELEGATED SB-P-1.20) | — |
| 23-§16-5 | C23@2430e1c6 | §16 b5: outbound WhatsApp — supplier requests | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109; I-16 (23-§16); U-05 | — |
| 23-§19-3 | C23@2430e1c6 | §19 b1: WhatsApp delivery does not prove a supplier accepted an order | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109; DC-11 | — |
| 23-§20-7 | C23@2430e1c6 | §20 b6: retry/idempotency — supplier requests | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109; I-16 (23-§20) | — |
| 23-§21-4 | C23@2430e1c6 | §21 b4: Meta outage — POS/API/payment reconciliation continue independently | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109; I-16 (23-§21); native precondition 13-§16-12 | — |


### 11.2 Delegated — owned elsewhere, consumed here (151 rows)

Owned by another contract or another mission's canonical FCTM. This mission consumes the locked specification or supplies data to it. Distribution: SB-P-1.12 52, SB-P-1.13 21, SB-P-1.14 23, SB-P-1.15 45, SB-P-1.16 4, SB-P-1.18 6.

#### `SB-P-1.12` (52 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 7-§7 | C7@65ad91b2 | §7 limited slice: no competing/duplicate stock-linked pricing path (SB-P-1.12 touched scope) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (7-§7 IN SCOPE SB-P-1.12, PARTIAL) | — |
| 7-§9 | C7@65ad91b2 | §9 limited slice: no duplicate stock engine (SB-P-1.12 touched scope) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (7-§9 IN SCOPE SB-P-1.12) | — |
| 7-§10-1 | C7@65ad91b2 | §10 p1 <Owner>: full authorized stock/supplier/reorder authority | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (7-§10-1 IN SCOPE SB-P-1.12); U-09 | — |
| 7-§10-2 | C7@65ad91b2 | §10 p2 <Manager>: delegated operational authority only; reorder action only where explicitly permitted | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (7-§10-2); U-01; U-09 | — |
| 7-§10-3 | C7@65ad91b2 | §10 p3 <Employee / Staff>: scoped stock operations if permitted; no Owner financial intelligence | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (7-§10-3); U-09 | — |
| 7-§10-4 | C7@65ad91b2 | §10 p4 <Supplier>: only communication required for the approved supplier/order workflow | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (7-§10-4); EIS-ID-03; U-09 | — |
| 7-§12 | C7@65ad91b2 | §12 seam: Catalog/Product identity and Permission Engine reuse (SB-P-1.12 touched scope) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (7-§12 IN SCOPE SB-P-1.12) | — |
| 7-§15-10 | C7@65ad91b2 | §15 b10: staff permission boundaries | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (7-§15-10 IN SCOPE SB-P-1.12); U-09 | — |
| 7-§15-12 | C7@65ad91b2 | §15 b12: cross-business isolation | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (7-§15-12 IN SCOPE SB-P-1.12); U-09 | — |
| 17-§13-1 | C17@7943f74a | §13 p1 <Owner>: receives Owner-authorized intelligence | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§13-1 IN SCOPE SB-P-1.12); I-16 (17-§13); U-09 | — |
| 17-§13-2 | C17@7943f74a | §13 p2 <Manager>: only Owner-delegated scope; role alone grants no Owner intelligence | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§13-2 IN SCOPE SB-P-1.12); I-16 (17-§13); U-09 | — |
| 17-§13-3 | C17@7943f74a | §13 p3 <Employee>: job-specific tools and permitted self-service; no default Owner profit/Ask CFO/analytics | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§13-3 IN SCOPE SB-P-1.12); I-16 (17-§13); U-09 | — |
| 17-§13-4 | C17@7943f74a | §13 p4 <Customer/Supplier/Delivery Staff>: no general dashboard access | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§13-4 IN SCOPE SB-P-1.12); I-16 (17-§13); U-09 | — |
| 17-§14-1 | C17@7943f74a | §14 p1: role-based cards/navigation are usability, not the security boundary | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§14-1 IN SCOPE SB-P-1.12); I-16 (17-§14); U-09 | — |
| 17-§14-2 | C17@7943f74a | §14 b1: enforce authenticated user | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§14-2 IN SCOPE SB-P-1.12); I-16 (17-§14); U-09 | — |
| 17-§14-3 | C17@7943f74a | §14 b2: enforce business isolation | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§14-3 IN SCOPE SB-P-1.12); I-16 (17-§14); U-09 | — |
| 17-§14-4 | C17@7943f74a | §14 b3: enforce current role/permission | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§14-4 IN SCOPE SB-P-1.12); I-16 (17-§14); U-09 | — |
| 17-§14-5 | C17@7943f74a | §14 b4: enforce feature entitlement where relevant | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§14-5 IN SCOPE SB-P-1.12); I-16 (17-§14); U-09 | — |
| 17-§14-6 | C17@7943f74a | §14 b5: enforce object/action scope | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§14-6 IN SCOPE SB-P-1.12); I-16 (17-§14); U-09 | — |
| 17-§14-7 | C17@7943f74a | §14 p3: changing a UI component never widens backend access | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§14-7 IN SCOPE SB-P-1.12); I-16 (17-§14); U-09 | — |
| 17-§16-1 | C17@7943f74a | §16 p1: stable IDs/test hooks — for the §13/§14 permission surface (SB-P-1.12 slice) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§16-1) | — |
| 17-§18-1 | C17@7943f74a | §18 b1: no cross-business data | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§18-1); U-09 | — |
| 17-§18-2 | C17@7943f74a | §18 b2: no staff access to Owner intelligence by default | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§18-2); U-09 | — |
| 17-§18-4 | C17@7943f74a | §18 b4: sensitive information only to roles with legitimate need | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§18-4); U-09 | — |
| 17-§21-4 | C17@7943f74a | §21 b4: employee visibility into Owner-wide financial intelligence by convenience | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§21-4 IN SCOPE SB-P-1.12); U-09 | — |
| 17-§22-2 | C17@7943f74a | §22 n2: Manager sees delegated operations, not non-delegated Owner intelligence | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§22-2); U-01; U-09 | — |
| 17-§22-3 | C17@7943f74a | §22 n3: Employee limited to permitted operational/self-service surfaces | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§22-3); U-09 | — |
| 17-§22-9 | C17@7943f74a | §22 n9: cross-business access is denied server-side | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§22-9 PARTIAL precedent); U-09 | — |
| 17-§22-10a | C17@7943f74a | §22 n10: stable identifiers for critical governed flows — §13/§14 surface | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (17-§22-10a) | — |
| 21-§4-2 | C21@f4a05d5c | §4 Core Authority Model — Manager (delegated, not assumed) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§4-2 IN SCOPE SB-P-1.12); U-01 | — |
| 21-§4-3 | C21@f4a05d5c | §4 — Employee (incl. operate stock/order tasks when granted) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§4-3 IN SCOPE SB-P-1.12); U-09 | — |
| 21-§4-4 | C21@f4a05d5c | §4 — Supplier: purpose-limited participant in supplier/reorder workflows; no merchant BI | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§4-4 IN SCOPE SB-P-1.12); EIS-ID-03 | — |
| 21-§11-1 | C21@f4a05d5c | §11 scoped creation (incl. stock events) preserves actor identity | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§11-1 IN SCOPE SB-P-1.12); U-09 | — |
| 21-§11-2 | C21@f4a05d5c | §11 create-permission ≠ read-all/edit-all/export/analytics | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§11-2 IN SCOPE SB-P-1.12); U-09 | — |
| 21-§12-1 | C21@f4a05d5c | §12 delegated automation — rule still enabled | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§12-1 IN SCOPE SB-P-1.12); standing reorder rules 7-§5-2 | — |
| 21-§12-2 | C21@f4a05d5c | §12 — actor/business scope check | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§12-2 IN SCOPE SB-P-1.12); 7-§5-2 | — |
| 21-§12-3 | C21@f4a05d5c | §12 — exact target/action/limits check | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§12-3 IN SCOPE SB-P-1.12); 7-§5-4 | — |
| 21-§12-4 | C21@f4a05d5c | §12 — current entitlement/state check | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§12-4 IN SCOPE SB-P-1.12); 7-§5-2 | — |
| 21-§12-5 | C21@f4a05d5c | §12 — no revocation/permission change since grant | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§12-5 IN SCOPE SB-P-1.12); 7-§13-12 | — |
| 21-§13-1 | C21@f4a05d5c | §13 participation — Supplier sees only order/request details relevant to that supplier | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§13-1 IN SCOPE SB-P-1.12); 7-§3-9 | — |
| 21-§24-3 | C21@f4a05d5c | §24 acceptance 3: Manager sees only delegated capabilities | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§24-3 IN SCOPE SB-P-1.12); U-01; U-09 | — |
| 21-§24-7 | C21@f4a05d5c | §24 acceptance 7: external participant sees only own bounded workflow data | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (21-§24-7 IN SCOPE SB-P-1.12); U-09 | — |
| 22-§5-6 | C22@61e1bb91 | §5 shared identity foundation — supplier | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (22-§5-6 IN SCOPE SB-P-1.12); EIS-ID-03; consumed by 7-§3-1 | — |
| 22-§15 | C22@61e1bb91 | §15 idempotency/duplicate protection incl. POS ingestion (b2) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (22-§15 single rule, PARTIAL); applied here by 13-§6, 13-§21-2 | — |
| 22-§28-6 | C22@61e1bb91 | §28 non-goal — duplicate customer/supplier identity silos | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (22-§28-6); also IN SCOPE as must-not in SB-P-1.13 to SB-P-1.15; applied here by DC-02 | — |
| 22-§29-6 | C22@61e1bb91 | §29 acceptance 6: customer/supplier identity not duplicated solely by channel/feature | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (22-§29-6) | — |
| BP-§11-1 | BP@9dfdd924 | §11 SB-P-1.12 Authority/Identity underpins all later role/permission behaviour | DELEGATED | SB-P-1.12 | L-DEL12; BP §11 | — |
| BP-§7-1 | BP@9dfdd924 | §7 Product & Price Master preserve list (SB-P-1.12 identifier) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (BP-§7-1); consumed by BP-§10.6-W11, 7-§2-1, 13-§4-4 | — |
| BP-§7-2 | BP@9dfdd924 | §7 preserve import foundations (SB-P-1.12 identifier) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (BP-§7-2) | — |
| BP-§7-3 | BP@9dfdd924 | §7 preserve relationships needed by POS, Orders, Supplier/Reorder, UDI, Transactions, reporting | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (BP-§7-3); SB-P-1.17 consumes for POS mapping (13-§4-4) and Supplier/Reorder (7-§3-3) | — |
| BP-§7-4 | BP@9dfdd924 | §7 do not: independent Catalog expansion; delete valid data; collapse into Transactions; Inventory as sole commercial-identity owner | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (BP-§7-4); must-not also checked by BP-§10.6-E3 | — |
| BP-§7-5 | BP@9dfdd924 | §7 target treatment PRESERVE + EVOLVE + DEMOTE SURFACE; Product & Price Master terminology | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (BP-§7-5) | — |

#### `SB-P-1.13` (21 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 7-§11-2 | C7@65ad91b2 | §11 b7–b11: AI must-not kernel slice (SB-P-1.13 AI kernel) | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (7-§11-2 IN SCOPE SB-P-1.13); realized by 24-§10, 24-§21, 24-§22 | — |
| 9-§9-6 | C9@649c55f3 | §9 clarify uncertain stock item | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (9-§9-6) | — |
| 9-§10-2 | C9@649c55f3 | §10 likely spelling match must not silently merge different customers/suppliers/employees | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (9-§10-2); applied to supplier identity by DC-02 | — |
| 10-§17-2 | C10@5c145ed7 | §17 clarify: ambiguous customer/supplier | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (10-§17-2) | — |
| 12-§7-3 | C12@6d48feff | §7 clarify material uncertainty about customer/supplier/product identity | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (12-§7-3) | — |
| 12-§9-2 | C12@6d48feff | §9 mixed Kerala business speech (illustrative vocabulary incl. stock, supplier, counter) | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (12-§9-2) | — |
| 17-§5-1 | C17@7943f74a | §5 p1: Conversation Workspace is an explicit first-class app component | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (17-§5-1 IN SCOPE SB-P-1.13) | — |
| 17-§5-2 | C17@7943f74a | §5 p2: must not disappear into a generic dashboard label or outage fallback | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (17-§5-2 IN SCOPE SB-P-1.13) | — |
| 17-§5-3 | C17@7943f74a | §5 b1: shared user/business identity | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (17-§5-3 IN SCOPE SB-P-1.13) | — |
| 17-§5-4 | C17@7943f74a | §5 b2: shared Business Memory | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (17-§5-4 IN SCOPE SB-P-1.13) | — |
| 17-§5-5 | C17@7943f74a | §5 b3: shared Permission Engine | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (17-§5-5 IN SCOPE SB-P-1.13) | — |
| 17-§5-6 | C17@7943f74a | §5 b4: shared Human Language Layer | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (17-§5-6 IN SCOPE SB-P-1.13) | — |
| 17-§5-7 | C17@7943f74a | §5 b5: shared feature action services | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (17-§5-7 IN SCOPE SB-P-1.13) | — |
| 17-§5-8 | C17@7943f74a | §5 b6: shared document/reminder/intelligence foundations | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (17-§5-8 IN SCOPE SB-P-1.13) | — |
| 17-§22-4 | C17@7943f74a | §22 n4: dashboard and conversation show consistent underlying state | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (17-§22-4 IN SCOPE SB-P-1.13) | — |
| 17-§22-8 | C17@7943f74a | §22 n8: Conversation Workspace is first-class in app navigation/experience | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (17-§22-8 IN SCOPE SB-P-1.13) | — |
| 22-§25 | C22@61e1bb91 | §25 AI orchestration reuse incl. stock/supplier/reorder (b8) | DELEGATED | SB-P-1.13 | L-DEL13; I-12 (22-§25 DELEGATED → C24, SB-P-1.13) | — |
| 24-§6-2 | C24@0c1dcbb2 | §6 distinguish intent classes (illustrative list incl. inventory/stock update, supplier/reorder action) | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (24-§6-2; 'routing to later-mission domains depends on those domains') | — |
| 24-§9-2 | C24@0c1dcbb2 | §9 possible context sources (illustrative; incl. suppliers, inventory/catalog, POS/counter) | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (24-§9-2; each source consumed when its owning domain exists) | — |
| 24-§10-10 | C24@0c1dcbb2 | §10 example: supplier/customer conversation must not expose internal merchant data | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (24-§10-10); feature slice 7-§11-2.5 | — |
| BP-§11-2 | BP@9dfdd924 | §11 SB-P-1.13 Conversation/AI underpins multilingual conversational workflows and Voice | DELEGATED | SB-P-1.13 | L-DEL13; BP §11 | — |

#### `SB-P-1.14` (23 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 3-§3-7 | C3@d8c26c07 | §3 b7: respectful coexistence with existing notebooks, POS and spreadsheets | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§3); realized here by 13-§1-2, 13-§3-2 | — |
| 3-§7-3 | C3@d8c26c07 | §7 clarification case: multiple plausible customers/suppliers | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§7-3 IN SCOPE SB-P-1.14) | — |
| 3-§9-2 | C3@d8c26c07 | §9 retrieve by customer or supplier — party/counterparty reference level | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§9-2) | — |
| 3-§9-9 | C3@d8c26c07 | §9 retrieve by product or stock relationship where available | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§9-9; 'relationship matures under 7-§8 (SB-P-1.17)') | — |
| 3-§10-4 | C3@d8c26c07 | §10 customer/supplier views (counterparty-reference level; directory form follows 3-§9-3) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§10-4) | — |
| 3-§22-1 | C3@d8c26c07 | §22 reuse existing transaction, correction, inventory/catalog and audit foundations where aligned | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (3-§22-1); applied here by F-INV/F-PPM reuse (DC-01) | — |
| 5-§4-7 | C5@80ac648e | §4 supported input: purchase/sales invoices | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (5-§4-7) | — |
| 5-§4-9 | C5@80ac648e | §4 supported input: opening-stock documents | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (5-§4-9) | — |
| 5-§5-1 | C5@80ac648e | §5 receipt/bill/invoice field: merchant/supplier/customer identity where present | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (5-§5-1); supplier resolution consumes 7-§3-1 | — |
| 5-§6-11 | C5@80ac648e | §6 retrieve documents by linked inventory record (opening-stock slice SB-P-1.14; other stock links here) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (5-§6-11; 'other stock links SB-P-1.17'); U-09 | — |
| 5-§7-3 | C5@80ac648e | §7 example: opening-stock spreadsheet → preview → inventory update | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (5-§7-3); GPCV §11 | — |
| 5-§7-4 | C5@80ac648e | §7 example: supplier invoice → purchase/stock/ledger preparation (stock side SB-P-1.17) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (5-§7-4 'stock side SB-P-1.17'); realized here by 7-§6-3, 7-§8-2 | — |
| 5-§18-5 | C5@80ac648e | §18 acceptance 5: opening-stock import into shared inventory foundation | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (5-§18-5) | — |
| 7-§6-2 | C7@65ad91b2 | §6 p1 (part): opening-stock sheets reuse Universal Document Intelligence | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (7-§6-2 IN SCOPE SB-P-1.14); GPCV §11 | — |
| 7-§6-4 | C7@65ad91b2 | §6 p3: file/photo → interpretation → preview → clarification → confirmation → validated update (opening-stock slice) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (7-§6-4 IN SCOPE SB-P-1.14, opening-stock slice) | — |
| 7-§6-5 | C7@65ad91b2 | §6 p4: no isolated import truth bypassing inventory audit/idempotency controls (SB-P-1.14 row) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (7-§6-5 IN SCOPE SB-P-1.14) | — |
| 7-§15-2a | C7@65ad91b2 | §15 b2: document/CSV import with preview and idempotency (opening-stock slice) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (7-§15-2a IN SCOPE SB-P-1.14) | — |
| 17-§12-1 | C17@7943f74a | §12 p1: browse/search permitted documents through the shared UDI/Receipt foundation | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (17-§12-1 IN SCOPE SB-P-1.14) | — |
| 17-§12-2 | C17@7943f74a | §12 p2: richer visual filtering preserves the same storage/permission truth | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (17-§12-2 IN SCOPE SB-P-1.14) | — |
| 22-§4 | C22@61e1bb91 | §4 Business Memory Foundation incl. suppliers (b3) and inventory/catalog (b4) | DELEGATED | SB-P-1.14 | L-DEL14; I-12 (22-§4 ASSIGNED SB-P-1.14); I-14 (22-§4-2, linked domain facts; the no-second-truth prohibition 22-§4-4 stays IN SCOPE SB-P-1.14) | — |
| 25-§6-1 | C25@406ce089 | §6 the storage foundation serves listed dependent features incl. Stock/Supplier/Reorder documents (b8) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (25-§6-1; 'others reuse in their missions') | — |
| BP-§11-3 | BP@9dfdd924 | §11 SB-P-1.14 Business Memory/UDI underpins onboarding imports and document inputs | DELEGATED | SB-P-1.14 | L-DEL14; BP §11 | — |
| GPCV-§11-1 | GPCV@ee76d920 | §11 opening-stock disposition: product capability PRESERVE — STILL CURRENT / BUILD NOW | DELEGATED | SB-P-1.14 | L-DEL14; GPCV §11; I-14 (7-§6-2); consumed by BP-§10.6-W12 | — |

#### `SB-P-1.15` (45 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 2-§3-5 | C2@53635557 | §3 b4 <Owner>: ask about cash, expenses, credits, stock, supplier history, operations | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§3-5 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§5-12 | C2@53635557 | §5.2 b9: advisory example — can I safely consider a large stock purchase? | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§5-12 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§7-10 | C2@53635557 | §7 b6: Ask CFO must not modify stock merely because a question was asked | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§7-10 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§10-4 | C2@53635557 | §10 b2: business context — low stock is intentional | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§10-4 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§10-6 | C2@53635557 | §10 b4: business context — an unusual discount was authorized for a customer relationship | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§10-6 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§11-5 | C2@53635557 | §11 b4: cross-feature intelligence over stock | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§11-5 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§11-6 | C2@53635557 | §11 b5: cross-feature intelligence over suppliers | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§11-6 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§11-7 | C2@53635557 | §11 b6: cross-feature intelligence over POS-connected activity | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§11-7 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§12-9 | C2@53635557 | §12 b7 <Manager>: depth from stock intelligence | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§12-9 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§12-10 | C2@53635557 | §12 b8 <Manager>: depth from supplier/reorder data | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§12-10 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§12-11 | C2@53635557 | §12 b9 <Manager>: depth from POS activity | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§12-11 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§12-12 | C2@53635557 | §12 b10 <Manager>: depth from operational dashboard data | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§12-12 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§12-13 | C2@53635557 | §12 b11 <Manager>: deeper business analytics | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§12-13 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§12-14 | C2@53635557 | §12 b12 <Manager>: counter activity observations | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§12-14 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§12-15 | C2@53635557 | §12 p5: no fabricated Manager-only insight for a Ledger merchant without the data/capability | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§12-15 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§25-8 | C2@53635557 | §25 b8: stock query when stock capability enabled | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§25-8 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 2-§25-9 | C2@53635557 | §25 b9: no stock fabrication when capability/data absent | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (2-§25-9 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — |
| 4-§3-3 | C4@ce940d25 | §3 b2: morning briefing — outstanding customer/supplier credit requiring awareness | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§3-3 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — |
| 4-§3-5 | C4@ce940d25 | §3 b4: morning briefing — low-stock/reorder concerns | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§3-5 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — |
| 4-§4-4 | C4@ce940d25 | §4 b3: pulse check — stock or order issues | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§4-4 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — |
| 4-§4-7 | C4@ce940d25 | §4 b6: pulse check — Manager POS/counter signals where authorized | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§4-7 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — |
| 4-§5-3 | C4@ce940d25 | §5 b2: night closing — cash/payment awareness | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§5-3 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — |
| 4-§5-5 | C4@ce940d25 | §5 b4: night closing — stock/reorder issues | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§5-5 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — |
| 4-§5-10 | C4@ce940d25 | §5 p3: for Manager, closing-cash/POS operational depth may be richer when enabled | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§5-10 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — |
| 4-§6-5 | C4@ce940d25 | §6 b4: source-of-truth rule — Stock/Supplier/Reorder | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§6-5 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — |
| 4-§6-6 | C4@ce940d25 | §6 b5: source-of-truth rule — POS/Counter Intelligence | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§6-6 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — |
| 4-§10-8 | C4@ce940d25 | §10 b8: 'Possible stock risk' is not proof of a stockout | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§10-8 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — |
| 4-§11-5 | C4@ce940d25 | §11 b5: action continuation — review reorder suggestion | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (4-§11-5 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — |
| 11-§4-7 | C11@e802745a | §4 b7: reminder relates to customer/supplier/employee/document/order/credit/compliance object | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§4-7 IN SCOPE SB-P-1.15); consumer here: 7-§3 | — |
| 11-§8-3 | C11@e802745a | §8 b3: cross-feature reuse — supplier/reorder follow-up | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§8-3 IN SCOPE SB-P-1.15); consumer here: 7-§12-4 | — |
| 11-§8-5 | C11@e802745a | §8 b5: cross-feature reuse — stock/expiry review | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§8-5 IN SCOPE SB-P-1.15); consumer here: 7-§12-4 | — |
| 11-§9-2 | C11@e802745a | §9 b2: reminder vs business event — 'supplier order was placed' is a business event | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§9-2 IN SCOPE SB-P-1.15); consumer here: 7-§5-1 | — |
| 11-§10-4 | C11@e802745a | §10 b3: reminder → consequential action 'Approve reorder' | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§10-4 IN SCOPE SB-P-1.15); consumer here: 7-§5-1; BP-§10.6-A3 | — |
| 11-§12-1 | C11@e802745a | §12 p2: reorder example — low stock → suggest → Owner reviews/approves/edits/defers/cancels | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§12-1 IN SCOPE SB-P-1.15); consumer here: 7-§5-1; BP-§10.6-A1–A4 | — |
| 11-§12-2 | C11@e802745a | §12 p3: automatic reorder only within a valid bounded standing rule's exact scope | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§12-2 IN SCOPE SB-P-1.15); consumer here: 7-§5-2; 7-§15-8 | — |
| 11-§12-3 | C11@e802745a | §12 p4: a historical background trigger is not authority by itself | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§12-3 IN SCOPE SB-P-1.15); consumer here: 7-§5-3 | — |
| 11-§13-3 | C11@e802745a | §13 p3 <Employee>: cannot create Owner-level financial/procurement automation by default | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§13-3 IN SCOPE SB-P-1.15); consumer here: 7-§10-3; U-01 | — |
| 11-§21-3 | C11@e802745a | §21 b3: non-goal — silent financial/procurement commitments | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§21-3 IN SCOPE SB-P-1.15); consumer here: 7-§16-1 | — |
| 11-§21-5 | C11@e802745a | §21 b5: non-goal — blind supplier orders | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (11-§21-5 IN SCOPE SB-P-1.15); consumer here: 7-§16-1 | — |
| 17-§11-1 | C17@7943f74a | §11 p1: workspace exposes Ask CFO and Daily Intelligence without separate stacks | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (17-§11-1 IN SCOPE SB-P-1.15) | — |
| 17-§11-2 | C17@7943f74a | §11 p2: Ask CFO uses shared read-only business reasoning | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (17-§11-2 IN SCOPE SB-P-1.15) | — |
| 17-§11-3 | C17@7943f74a | §11 p3: Daily Intelligence shows the same schedule/content truth | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (17-§11-3 IN SCOPE SB-P-1.15) | — |
| 17-§22-7 | C17@7943f74a | §22 n7: Ask CFO remains read-only | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (17-§22-7 IN SCOPE SB-P-1.15) | — |
| 22-§11-3 | C22@61e1bb91 | §11 b3: reminder/delegated automation reuse — supplier/reorder follow-up | DELEGATED | SB-P-1.15 | L-DEL15; I-15 (22-§11-3 IN SCOPE SB-P-1.15; consumer SB-P-1.17) | — |
| BP-§11-4 | BP@9dfdd924 | §11 SB-P-1.15 Reminder/Automation underpins supplier/reorder continuation | DELEGATED | SB-P-1.15 | L-DEL15; BP §11 | — |

#### `SB-P-1.16` (4 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 15-§7-5 | C15@632f3402 | §7 b5: matching uses customer/supplier/account identity | DELEGATED | SB-P-1.16 | L-DEL16; I-16 (15-§7-5 IN SCOPE SB-P-1.16); supplier identity supplied by 7-§3-1 | — |
| 15-§20-4 | C15@632f3402 | §20 b4: reconciliation failure allows unrelated Ledger, inventory, orders and safe operations to continue | DELEGATED | SB-P-1.16 | L-DEL16; I-16 (15-§20-4) | — |
| 15-§23-2 | C15@632f3402 | §23 b2: reuse Customer/Supplier identity | DELEGATED | SB-P-1.16 | L-DEL16; I-16 (15-§23-2) | 16:FPDR-1 |
| BP-§11-5 | BP@9dfdd924 | §11 SB-P-1.16 Financial Integrity underpins trustworthy credit/payment behaviour (supplier-side credit direction) | DELEGATED | SB-P-1.16 | L-DEL16; BP §11; DC-04 | — |

#### `SB-P-1.18` (6 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 1-§10-2 | C1@b392c8cb | §10 p2: Owner/authorized staff review stock/availability using current business data | DELEGATED | SB-P-1.18 | L-DEL18; A-BP107; BP-§11-6 (SB-P-1.17 stock underpins Order availability) | — |
| 1-§10-9 | C1@b392c8cb | §10 p5: must not promise inventory the product cannot support with reliable data | DELEGATED | SB-P-1.18 | L-DEL18; A-BP107; BP-§11-6 | — |
| 1-§23-7 | C1@b392c8cb | §23 b7: reuse inventory/catalog where available | DELEGATED | SB-P-1.18 | L-DEL18; A-BP107; BP-§11-6 | — |
| 1-§24-3 | C1@b392c8cb | §24 b3: out-of-stock/substitution handling | DELEGATED | SB-P-1.18 | L-DEL18; A-BP107; BP-§11-6 | — |
| 1-§26-5 | C1@b392c8cb | §26 n5: out-of-stock item → respectful substitution flow | DELEGATED | SB-P-1.18 | L-DEL18; A-BP107; BP-§11-6 | — |
| 1-§27-8 | C1@b392c8cb | §27 b8: dependency on Inventory/Catalog for availability-aware flows | DELEGATED | SB-P-1.18 | L-DEL18; A-BP107; BP-§11-6 | — |


### 11.3 Out of build scope — must not appear (31 rows)

Build Plan §16 and GPCV §9 rejections, preserved verbatim and checked as "must not appear" in this mission's deliverable.

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| BP-§16-1 | BP@9dfdd924 | §16 rejection b1: Ask CFO as write-capable authority | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-10 | BP@9dfdd924 | §16 rejection b10: duplicate channel-specific Business Memory | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-11 | BP@9dfdd924 | §16 rejection b11: duplicate channel-specific permission models | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-12 | BP@9dfdd924 | §16 rejection b12: separate AI brains per feature/channel | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-13 | BP@9dfdd924 | §16 rejection b13: model conversation history as permanent Business Memory | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-14 | BP@9dfdd924 | §16 rejection b14: uncontrolled binary-media concentration in Supabase for convenience | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-15 | BP@9dfdd924 | §16 rejection b15: provider URLs as permission authority/business identity | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-16 | BP@9dfdd924 | §16 rejection b16: destructive subscription-driven schema creation/deletion | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-17 | BP@9dfdd924 | §16 rejection b17: broad routine Super Admin access to merchant private data | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-18 | BP@9dfdd924 | §16 rejection b18: revival of /survey or obsolete domains/routes | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-19 | BP@9dfdd924 | §16 rejection b19: old Daily Intelligence timing that conflicts with the approved rhythm | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-2 | BP@9dfdd924 | §16 rejection b2: AI accusation/judgment of employees or customers | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-20 | BP@9dfdd924 | §16 rejection b20: independent Catalog product expansion | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-3 | BP@9dfdd924 | §16 rejection b3: continuous staff GPS surveillance by default | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-4 | BP@9dfdd924 | §16 rejection b4: automated wage punishment | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-5 | BP@9dfdd924 | §16 rejection b5: blind supplier procurement without valid Owner delegation | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-6 | BP@9dfdd924 | §16 rejection b6: hard credit blocking by default | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-7 | BP@9dfdd924 | §16 rejection b7: custom client-specific POS modification inside core | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-8 | BP@9dfdd924 | §16 rejection b8: marketplace behavior inside Smart Order & Delivery | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-9 | BP@9dfdd924 | §16 rejection b9: customer silence automatically invalidating otherwise sufficiently proven delivery | OUT OF BUILD SCOPE | SB-P-1.17 | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| GPCV-§9-1 | GPCV@ee76d920 | §9 automatic hard customer-credit blocking by default — REJECT | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV §9 (verbatim; must-not-appear) | — |
| GPCV-§9-10 | GPCV@ee76d920 | §9 embedded lending/underwriting inside current Smart Business core — REJECT FOR CURRENT CORE | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV §9 (verbatim; must-not-appear) | — |
| GPCV-§9-11 | GPCV@ee76d920 | §9 future wholesaler/marketplace expansion — not current core; separate Founder decision | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV §9 (verbatim; must-not-appear); BP-§15-8 | — |
| GPCV-§9-2 | GPCV@ee76d920 | §9 AI accusation/punishment — REJECT | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV §9 (verbatim; must-not-appear) | — |
| GPCV-§9-3 | GPCV@ee76d920 | §9 continuous employee GPS surveillance — REJECT | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV §9 (verbatim; must-not-appear) | — |
| GPCV-§9-4 | GPCV@ee76d920 | §9 automatic wage docking/fines — REJECT | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV §9 (verbatim; must-not-appear) | — |
| GPCV-§9-5 | GPCV@ee76d920 | §9 blind supplier procurement without Owner-delegated authority — REJECT | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV §9 (verbatim; must-not-appear) | — |
| GPCV-§9-6 | GPCV@ee76d920 | §9 custom client-specific POS modifications inside core — REJECT | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV §9 (verbatim; must-not-appear) | — |
| GPCV-§9-7 | GPCV@ee76d920 | §9 dynamic CREATE/DROP core schema by subscription state — REJECT | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV §9 (verbatim; must-not-appear) | — |
| GPCV-§9-8 | GPCV@ee76d920 | §9 routine broad Super Admin access to merchant private business data — REJECT | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV §9 (verbatim; must-not-appear) | — |
| GPCV-§9-9 | GPCV@ee76d920 | §9 public marketplace behavior for current Smart Order & Delivery — REJECT | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV §9 (verbatim; must-not-appear) | — |


### 11.4 Not applicable — not an obligation of this mission (24 rows)

Narrative, provenance, historical or Build Plan §15 items outside this mission, each with the FCTM reason.

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 7-§17 | C7@65ad91b2 | §17 whole section: Dependencies (p1) | NOT APPLICABLE | SB-P-1.17 | L-DEP (dependencies carried in the Dependency / hold column); I-12 (7-§17 NOT APPLICABLE, same disposition) | — |
| 13-§2-1 | C13@4426e8b1 | §2 b1: connected Business Memory; | NOT APPLICABLE | SB-P-1.17 | L-NARR (problem statement; obligations carried by §§4, 8, 10, 12) | — |
| 13-§2-2 | C13@4426e8b1 | §2 b2: meaningful stock/counter insight; | NOT APPLICABLE | SB-P-1.17 | L-NARR (problem statement; obligations carried by §§4, 8, 10, 12) | — |
| 13-§2-3 | C13@4426e8b1 | §2 b3: visibility into unusual void/discount patterns; | NOT APPLICABLE | SB-P-1.17 | L-NARR (problem statement; obligations carried by §§4, 8, 10, 12) | — |
| 13-§2-4 | C13@4426e8b1 | §2 b4: clear closing cash reconciliation; | NOT APPLICABLE | SB-P-1.17 | L-NARR (problem statement; obligations carried by §§4, 8, 10, 12) | — |
| 13-§2-5 | C13@4426e8b1 | §2 b5: a conversational explanation of what deserves review. | NOT APPLICABLE | SB-P-1.17 | L-NARR (problem statement; obligations carried by §§4, 8, 10, 12) | — |
| 13-§22-6 | C13@4426e8b1 | §22 p2: Preserved: standard POS bridge, respectful counter intelligence and closing-cash clarity. | NOT APPLICABLE | SB-P-1.17 | L-HIST (preserved behaviour carried by 13-§4, 13-§8, 13-§10 rows) | — |
| 13-§23 | C13@4426e8b1 | §23 whole section: Provenance and Hydration Coverage (p1, p2) | NOT APPLICABLE | SB-P-1.17 | L-PROV | — |
| 17-§2-1 | C17@7943f74a | §2 b1: reviewing today's sales/purchases; | NOT APPLICABLE | SB-P-1.17 | L-NARR (problem statement; obligations carried by §§6–10, 15) | — |
| 17-§2-2 | C17@7943f74a | §2 b2: comparing trends; | NOT APPLICABLE | SB-P-1.17 | L-NARR (problem statement; obligations carried by §§6–10, 15) | — |
| 17-§2-3 | C17@7943f74a | §2 b3: seeing stock/reorder status; | NOT APPLICABLE | SB-P-1.17 | L-NARR (problem statement; obligations carried by §§6–10, 15) | — |
| 17-§2-4 | C17@7943f74a | §2 b4: checking staff/attendance; | NOT APPLICABLE | SB-P-1.17 | L-NARR (problem statement; obligations carried by §§6–10, 15) | — |
| 17-§2-5 | C17@7943f74a | §2 b5: reviewing credit/payment issues; | NOT APPLICABLE | SB-P-1.17 | L-NARR (problem statement; obligations carried by §§6–10, 15) | — |
| 17-§2-6 | C17@7943f74a | §2 b6: monitoring orders/delivery; | NOT APPLICABLE | SB-P-1.17 | L-NARR (problem statement; obligations carried by §§6–10, 15) | — |
| 17-§2-7 | C17@7943f74a | §2 b7: seeing POS/counter/closing-cash signals; | NOT APPLICABLE | SB-P-1.17 | L-NARR (problem statement; obligations carried by §§6–10, 15) | — |
| 17-§2-8 | C17@7943f74a | §2 b8: navigating documents, integrations and settings. | NOT APPLICABLE | SB-P-1.17 | L-NARR (problem statement; obligations carried by §§6–10, 15) | — |
| 17-§23-1 | C17@7943f74a | §23 p1: historical UI tab layouts remain design provenance, not fixed Product Truth | NOT APPLICABLE | SB-P-1.17 | L-HIST (carried by 17-§21-1) | — |
| 17-§24 | C17@7943f74a | §24 whole section: Provenance and Hydration Coverage (p1, p2) | NOT APPLICABLE | SB-P-1.17 | L-PROV | — |
| BP-§15-1 | BP@9dfdd924 | §15 unresolved Founder decision item 1: current free-trial policy | NOT APPLICABLE | SB-P-1.17 | Does not concern SB-P-1.17 scope | — |
| BP-§15-2 | BP@9dfdd924 | §15 unresolved Founder decision item 2: exact Voice Plus price | NOT APPLICABLE | SB-P-1.17 | Does not concern SB-P-1.17 scope | — |
| BP-§15-3 | BP@9dfdd924 | §15 unresolved Founder decision item 3: exact Staff/HR price | NOT APPLICABLE | SB-P-1.17 | Does not concern SB-P-1.17 scope | — |
| BP-§15-5 | BP@9dfdd924 | §15 unresolved Founder decision item 5: exact Smart Order & Delivery price | NOT APPLICABLE | SB-P-1.17 | Does not concern SB-P-1.17 scope | — |
| BP-§15-7 | BP@9dfdd924 | §15 unresolved Founder decision item 7: employee KYC/national-ID necessity and legal/privacy basis | NOT APPLICABLE | SB-P-1.17 | Does not concern SB-P-1.17 scope | — |
| BP-§15-9 | BP@9dfdd924 | §15 unresolved Founder decision item 9: third-party underwriting/lending ecosystem | NOT APPLICABLE | SB-P-1.17 | Does not concern SB-P-1.17 scope | — |


### 11.5 Unresolved Founder decisions — not on the SB-P-1.17 critical path (5 rows)

Build Plan §15 items, carried with the FCTM's critical-path screen. This Blueprint sets no Smart Stock price, retention duration or marketplace rule. Any dependent Blueprint lock would need the decision first.

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 18-§4-4 | C18@6b96b10a | §4 p2: exact prices for Voice Plus, Staff/HR, Smart Stock Assistant, Smart Order & Delivery unresolved — must not be guessed | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | BP-§15-4; GPCV §10 item 4; owner SB-P-1.19 (BP §9 row 8); not on SB-P-1.17 critical path (U-10) | — |
| 18-§25-2 | C18@6b96b10a | §25 n2: unresolved question — exact Smart Stock Assistant (and other add-on) prices | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | BP-§15-4; same item as 18-§4-4; not on SB-P-1.17 critical path (U-10) | — |
| BP-§15-4 | BP@9dfdd924 | §15 unresolved Founder decision item 4: exact Smart Stock price | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | BP §15 item 4; GPCV §10 item 4; affects only 7-§9-2 packaging price, not capability definition; not on critical path (U-10) | — |
| BP-§15-6 | BP@9dfdd924 | §15 unresolved Founder decision item 6: exact long-term retention/deletion duration after cancellation/non-payment | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | BP §15 item 6; I-16 (U-08); bears on retention of POS operator-level data (U-11); not on SB-P-1.17 definition critical path | — |
| BP-§15-8 | BP@9dfdd924 | §15 unresolved Founder decision item 8: broader wholesaler/marketplace expansion | UNRESOLVED FOUNDER DECISION | SB-P-1.17 | BP §15 item 8; supplier memory stays merchant-private (7-§3-9); no supplier network or marketplace in scope; not on critical path | — |


## 12. Dependencies

### 12.1 Upstream specification dependencies

SB-P-1.12, SB-P-1.13, SB-P-1.14, SB-P-1.15 and SB-P-1.16 provide locked specifications only. Their Implementation Authorizations are `WITHHELD`. **None of the following is runtime-available** (Truth Pack Δ-01, Δ-02; operating pattern §6):
- Manager role, capability grant or participant identity;
- delegated-automation check;
- conversation kernel;
- four-state Ledger or UDI pipeline;
- Reminder Engine;
- Ask CFO;
- financial balance.

### 12.2 Dependency codes on `IN SCOPE` rows

Counts are taken from the canonical FCTM Dependency column (blob `cb79088d`); a row may carry several codes. 76 `IN SCOPE` rows carry no dependency.

| Code | Dependency | `IN SCOPE` rows | State |
|---|---|---|---|
| `D12` | SB-P-1.12 authority kernel: memberships, roles, capability grants, Supplier participant identity (EIS-ID-03), delegated automation (EIS-AUT-01, 21-§12), entitlements, isolation, audit | 214 | Specification locked; WITHHELD; not implemented (RLS is Owner-only) |
| `D14` | SB-P-1.14 Business Memory: four-state Ledger, credit direction, opening-stock UDI slice, governed storage | 118 | Specification locked; WITHHELD; not implemented |
| `DPOS` | Standard POS bridge provider/adapter: target POS, field capability evidence, credentials, routing, failure, rollback | 101 | Interface classes decided by `17:FPDR-2`; **vendor capability UNKNOWN**; activation NOT AUTHORIZED (BP §5.4) |
| `D13` | SB-P-1.13 Conversation/AI kernel, Human Language Layer, typed tools and confirmation | 49 | Specification locked; WITHHELD; not implemented |
| `D15` | SB-P-1.15 Reminder Engine, delegated-rule triggering, native Notification Foundation, Ask CFO, Daily Intelligence | 37 | Specification locked; WITHHELD; not implemented |
| `DTX` | One governed transactions-family write path (PQ-2) | 13 | Cut-over undecided; migration NOT AUTHORIZED |
| `DSCH` | Scheduler and business timezone | 12 | UNVERIFIED; activation NOT AUTHORIZED |
| `DAI` | AI provider behind the SB-P-1.13 gateway | 8 | UNVERIFIED; activation NOT AUTHORIZED |
| `DNTF` | Approved out-of-app delivery channel | 7 | None before SB-P-1.20; supplier requests are merchant-sent (`17:FPDR-3`) |
| `D16` | SB-P-1.16 financial specification incl. FIN-01 PROVISIONAL | 5 | Specification locked; WITHHELD; W-1 watch |
| `DENT` | Commercial entitlement state for the Ledger add-on path | 4 | Specification only; price `BP-§15-4` unresolved, not critical path |
| `DV` | Basic Voice provider | 2 | UNVERIFIED |
| `DSEC` | Server-side secret home for POS credentials | 1 | Not established |
| `DPAY` | Payment-evidence source (SB-P-1.16) | 1 | No provider selected; NOT AUTHORIZED |

### 12.3 Derived constraints, carry-forward items, policy and legal holds

Derived constraints are **not** Product Truth unless a Founder decision adopts them (Truth Pack Part B; Stage 3 reconciliation Section C).

| Item | Status | Effect on this Blueprint |
|---|---|---|
| DC-05 supplier prices | Superseded by `17:FPDR-4` (cost classification; arithmetic rationale withdrawn) | Sections 8.3, 8.4, 9 |
| DC-06 thresholds | Amended by `17:FPDR-6` | Section 8.2; evidence sufficiency stays open at the EIS boundary, with candidate safeguards only; T6 screening if the policy materially affects suggestion availability |
| DC-14 operator detail | Corrected by `17:FPDR-1`: Owner-only, not delegable | Sections 8.7, 8.10 |
| DC-03 standing rules | Engineering constraint; Owner-only creation is source text (C7 §5 p3) | Section 8.4 |
| DC-11 delivery is not acceptance | Unchanged; consistent with `17:FPDR-3` | Section 8.4 |
| DC-12 POS/manual duplicate review | **DERIVED — NOT APPROVED PRODUCT TRUTH** on the review-candidate mechanism; consistent with C13 §7 p2 | Section 8.6; merchant experience defined at EIS |
| DC-01, DC-02, DC-04, DC-07, DC-08, DC-09, DC-10, DC-13, DC-15 | Unchanged as recorded in the Truth Pack (DC-04 PROVISIONAL with FIN-01; DC-08, DC-09, DC-15 derived) | As cited in Section 8 |
| U-03 closing-cash cadence | Carry to Stage 4/EIS; DC-09 provisional posture | Section 8.8 |
| U-04 stock source precedence | Carry to EIS; T6 only if a rule silently prefers one source | Sections 8.2, 8.6 |
| U-09 slices and consumer verification | `7-§6-4b`, `7-§6-5b` approved; consumer verification of SB-P-1.12 rows mapped at Stage 13 | Sections 8.5, 15 |
| U-10 packaging | DC-15 reading confirmed, still derived | Section 8.1 |
| U-12 joint supplier rows | Supplier side here; customer side joint, allocated no later than SB-P-1.18 intake | Section 8.3 |
| U-14 housekeeping | Tracked by Mission Control | — |
| N-1 to N-6 | Open questions from Stage 3: historical-linking delegation; who may confirm thresholds; "sufficient evidence" parameters; first evidenced Scenario B source; merchant-sent message semantics; capability catalogue. Not Product Truth | Sections 8.2–8.4, 8.6, 8.10, 15 |
| U-11 staff and operator privacy | Legal research hold (`12:FR-06`); external legal validation deferred until after SB-P-1.20 | Sections 8.7, 8.8 |
| W-1 / FIN-01 `owed_by_business` | PROVISIONAL | Sections 8.1, 8.3 |
| R15-11 merchant-facing grant granularity | OPEN (SB-P-1.15) | The capability boundary is decided by `17:FPDR-1`; the grant interface is not |
| Build Plan §15 rows | Not on the critical path | Section 11.5 |
| Delivery topology | UNKNOWN (Truth Pack Δ-06) | No runtime claim |

### 12.4 Execution gates

The following are not row dependencies, and this Blueprint does not authorize them:
- Implementation Authorization (separate Source 18 gate).
- Migration execution (`docs/migration/README.md` default-deny). New stock movement types, thresholds, supplier, rule, POS and closing objects need additive schema work (Δ-07).
- POS provider selection, credentials and activation (Build Plan §5.4; `17:FPDR-2`).
- AI and voice provider evidence (`DAI`, `DV`).
- CI as a configured-checks signal only.
- A named test and runtime-verification environment.
- Mandatory specialist reviews (Section 13).
- **Security precondition owned by SB-P-1.12:** the Build Plan §5.1 residual `anon`-grant gate on `businesses`, `transactions` and `transaction_correction_events`. Its remediation stays with SB-P-1.12; SB-P-1.17 surfaces that read those tables rely on it being closed and verified first. No transfer of remediation.
- **Delivery chain (Build Plan §5.3):** each release needs five verification stages:
  1. canonical repository implementation;
  2. delivery-repository synchronization where still required;
  3. Lovable publication or deployment where still current;
  4. Supabase migration and runtime alignment;
  5. production verification after synchronization.

  A canonical merge is never proof that production contains the accepted application. Delivery synchronization, publication and production migration are release actions needing their own separate authorization (Source 18 §9.1); none is authorized by this Blueprint.
- **Durable media (Build Plan §6.3):** stock documents use the SB-P-1.14 storage foundation (`25-§6-1`, `DELEGATED`); no separate storage engine.

### 12.5 Downstream

These missions consume this mission's stock, supplier, reorder, POS and closing truth (Build Plan §11; `BP-§11-6`):
- **SB-P-1.18:** order availability and substitution; Staff/HR and Order workspace views.
- **SB-P-1.19:** onboarding imports through the UDI stock path; entitlements.
- **SB-P-1.20:** WhatsApp dispatch of purchase requests and channel interactions.
- **SB-P-1.15:** readers for Ask CFO and Daily Intelligence.

## 13. Risks & Mitigations

| Risk | Source | Mitigation |
|---|---|---|
| Software accuses or punishes staff | C13 §8, §15, §18; Build Plan §16 | Neutral review signals; no autonomous consequential action; operator detail Owner-only (`17:FPDR-1`; DC-14); U-11 hold |
| Reorder executes without authority | C7 §5; GPCV §9 | Owner confirmation by default; scoped Manager grant; Owner-created bounded rules re-evaluated each run; triggers never permission (DC-03) |
| Invented thresholds, forecasts or availability | C7 §4, §16 | Evidence-gated suggestions; unconfirmed until Owner confirmation; configuration gap shown (`17:FPDR-6`) |
| Cost leaks to Managers | `12:FR-09`; C7 §11 | Supplier prices are cost-class; Reference Cost permission required (`17:FPDR-4`) |
| POS capability overstated | C13 §4–§5; `DPOS` UNKNOWN | Vendor-neutral contract; optional fields; "unavailable from this POS" shown; Scenario B only on an evidenced source (`17:FPDR-2`) |
| Duplicate revenue or stock from POS replays or manual entry | C13 §6, §21 n2 | Source identity and dedupe; manual-versus-POS review candidate (DC-12) |
| Supplier request presented as sent or accepted | C23 §19 b1 | Merchant-sent only; no delivery or acceptance state without merchant entry (`17:FPDR-3`; DC-11) |
| History rewritten by attribution | C7 §11 b9; `16:FPDR-2` pattern | Owner-confirmed, non-destructive linking only (`17:FPDR-5`) |
| Closing variance treated as misconduct or zero-filled | C13 §10 | Variance from present inputs only; unknowns named; review fact only (DC-09) |
| Workspace becomes a second truth or leaks Owner intelligence | C17 §1, §14, §21 | Feature services only; SB-P-1.12 server-side enforcement; failing card isolated (DC-13) |
| Supplier payables confused with customer advances | `EIS16-LDG-02`; FIN-01 | Counterparty-kind discrimination; never netted (DC-04; W-1) |
| Correlated assumptions by the same Definition Actor across Stages 2–4 | Intake Pack §4 | Mission Control checks at Stages 5 and 8; non-author specialist reviews |

**Mandatory specialist reviews before Implementation Authorization** (Source 18 §4.8):
- security, RLS, grants and permissions, including Manager capabilities, operator detail and supplier participation;
- POS integration and idempotency (event identity, replay, mapping, outage);
- financial integrity (stock–Ledger linkage, supplier credit, closing cash);
- AI assistant-not-authority behaviour;
- migration and data transition (movement types; historical supplier attribution);
- privacy and legal research on staff and operator data (U-11).

## 14. Success Criteria

- Every `IN SCOPE` row in Section 8 is demonstrated with evidence, or reported with its exact blocking dependency (Source 18 §3.2 item 11).
- Founder Scenarios A and B pass Founder runtime verification within the decision limits of Section 15.4. Scenario B requires an evidenced POS source.
- No Section 10.3 must-not row or Section 11.3 rejection appears.
- No threshold-driven alert or action activates before Owner confirmation; no reorder executes outside Owner confirmation, a scoped grant or an Owner-created bounded rule.
- No Manager sees operator-attributed detail, supplier prices without Reference Cost permission, or any capability not granted.
- No duplicate revenue or stock results from POS replays, documents or manual entries.
- No counter signal or variance is presented as an accusation.
- Global Product Completion View rows 7, 13 and 17 are updated only by Mission Control at acceptance, from the Contract Reconciliation and counting only demonstrated rows (GPCV §12; Build Plan §11). This mission never edits the register.

## 15. Acceptance Criteria

### 15.1 Founder Runtime Verification scenarios (Build Plan §10.6, by reference — not new scenarios)

- `BP-§10.6-A1` — §10.6 Founder Scenario A clause 1: item falls below threshold (BP@9dfdd924)
- `BP-§10.6-A2` — §10.6 Founder Scenario A clause 2: evidence-backed reorder suggestion shown (BP@9dfdd924)
- `BP-§10.6-A3` — §10.6 Founder Scenario A clause 3: Owner confirms unless bounded delegation already authorizes it (BP@9dfdd924)
- `BP-§10.6-A4` — §10.6 Founder Scenario A clause 4: result links to the same Product & Price Master item identity (BP@9dfdd924)
- `BP-§10.6-B1` — §10.6 Founder Scenario B clause 1: standard POS bridge surfaces an unusual discount/counter anomaly (BP@9dfdd924)
- `BP-§10.6-B2` — §10.6 Founder Scenario B clause 2: UI language remains neutral and asks for review; no accusation of staff (BP@9dfdd924)

These are Founder-reserved checks (Source 18 §4.2; `BP-§13-9`). Their wording is the Build Plan's; the FCTM splits them into verifiable parts without changing them. **Neither scenario is demonstrated or passed.**

**Scenario A — Confirmation-gated reorder: mapping.**

| Clause | Blueprint sections | Supporting rows | Decisions and limits | Verification expectation |
|---|---|---|---|---|
| A1 item falls below threshold | 8.2 | `7-§2-6`, `7-§15-4`, `7-§16-6` | `17:FPDR-6`: the threshold must be Owner-confirmed; no universal default | `FRV-A`; negative test that an unconfirmed suggestion raises no alert |
| A2 evidence-backed suggestion | 8.4 | `7-§4-*`, `7-§11-1.3`, `7-§15-7`, `24-§18-3` | Explained context; Manager price only under `17:FPDR-4` | `FRV-A`; experience review of explanation |
| A3 Owner confirms unless bounded delegation already authorizes | 8.4, 8.10 | `7-§5-1`, `7-§5-2`, `7-§15-8`, `10-§13-6`, `24-§21-3` | Owner path is the scenario; standing rules Owner-created; `17:FPDR-1` Manager grant is not the scenario path | `FRV-A`; `NEG` for trigger-without-authority |
| A4 same Product & Price Master identity | 8.1, 8.4 | `BP-§10.6-E3`, `7-§2-1`, `7-§8-*` | Purchase request links to the same item (`17:FPDR-3`) | `FRV-A`; `INSP` of identity linkage |

**Scenario B — Neutral POS review: mapping.**

| Clause | Blueprint sections | Supporting rows | Decisions and limits | Verification expectation |
|---|---|---|---|---|
| B1 standard POS bridge surfaces an unusual discount/counter anomaly | 8.6, 8.7 | `13-§4-*`, `13-§5-6`, `13-§8-*`, `13-§21-1`, `-2`, `-4`, `-5` | `17:FPDR-2`: verified only against the first source **evidenced** to supply discount or void data; vendor capability UNKNOWN; no mock or assumed provider presented as compatibility | `FRV-B` on an evidenced source; `IDEM` for replay |
| B2 neutral language; no accusation | 8.7, 9 | `13-§8-8`, `13-§8-9`, `13-§8-10`, `13-§15-*`, `13-§18-*`, `17-§8-6` | Operator detail Owner-only (`17:FPDR-1`) | `FRV-B`; `EXP` review of language |

### 15.2 Experience anchors (Build Plan §10.6) and contract experience rows

The Build Plan §10.6 outcome, experience statements and exit principle, and the contract experience rows (10 `EXP` rows):

- `7-§1-1` — §1 p1: This feature family helps merchants understand what stock exists, what is moving, what is a… (C7@65ad91b2)
- `13-§1-1` — §1 p1: This feature lets Smart Business work beside an existing standard POS, ingest permitted sal… (C13@4426e8b1)
- `13-§1-2` — §1 p2: Smart Business must respect merchants who already use a POS. The product enriches the exist… (C13@4426e8b1)
- `13-§8-9` — §8 p4: Please review this counter activity. These voids/discounts are higher than the recent patte… (C13@4426e8b1)
- `17-§1-1` — §1 p1: The Operational Dashboard & Manager Workspace gives authorized users a calm visual view of… (C17@7943f74a)
- `BP-§10.6-E1` — §10.6 Founder-approved experience p1: existing POS that works is bridged, not insulted or forcibly replaced (BP@9dfdd924)
- `BP-§10.6-E2` — §10.6 Founder-approved experience p2: POS/counter anomalies are neutral review items, not theft/fraud accusations (BP@9dfdd924)
- `BP-§10.6-E3` — §10.6 Founder-approved experience p3: product/price management appears where operational work needs it; no Catalog revival as competing top-level product (BP@9dfdd924)
- `BP-§10.6-O` — §10.6 product outcome: useful day-to-day operational management without becoming a heavy ERP (BP@9dfdd924)
- `BP-§10.6-X` — §10.6 exit principle: understand the shop without replacing current tools or being accused by the software (BP@9dfdd924)

### 15.3 Contract acceptance, scenario and completion-gate rows in scope

Acceptance scenarios and worked examples (39 `SCN` rows):

- Contract 7 (10): `7-§15-1`, `7-§15-2b`, `7-§15-3`, `7-§15-4`, `7-§15-5`, `7-§15-6`, `7-§15-7`, `7-§15-8`, `7-§15-9`, `7-§15-11`
- Contract 13 (24): `13-§9-2`, `13-§9-3`, `13-§9-4`, `13-§9-5`, `13-§9-6`, `13-§11-2`, `13-§11-3`, `13-§11-4`, `13-§11-5`, `13-§11-6`, `13-§12-2`, `13-§12-3`, `13-§12-4`, `13-§21-1`, `13-§21-2`, `13-§21-3`, `13-§21-4`, `13-§21-5`, `13-§21-6`, `13-§21-7`, `13-§21-8`, `13-§21-9`, `13-§21-10`, `13-§21-11`
- Contract 17 (4): `17-§22-1`, `17-§22-5`, `17-§22-6`, `17-§22-10b`
- Contract 24 (1): `24-§18-3`

Completion gates (3 `GATE` rows), reported honestly at Stage 22 (Section 8.12):

- `7-§18-1` — §18 p1: Stock/Supplier/Reorder is complete only when inventory, supplier memory, advisory reorder,… (C7@65ad91b2)
- `13-§24-1` — §24 p1: Complete only when the standard bridge, dedupe/audit, stock relationship, counter review si… (C13@4426e8b1)
- `17-§25-1` — §25 p1: Complete only when role-aware workspace/navigation, shared-state consistency, Manager opera… (C17@7943f74a)

Acceptance items owned elsewhere (for example `7-§15-2a`, `7-§15-10`, `7-§15-12`, `17-§22-2`, `-3`, `-4`, `-7`, `-8`, `-9`, `-10a`) stay in Section 11 with their owning missions. Their consumer verification on SB-P-1.17 surfaces is mapped at Stage 13 (U-09).

### 15.4 Founder-decision acceptance limits

These follow the acceptance conditions in the Founder Product Decision Record entries 1–6. Consequential rows are taken from the Stage 3 reconciliation Section B.

| Decision | Acceptance limit | Direct rows | Consequential coverage |
|---|---|---|---|
| `17:FPDR-1` | A Manager without a grant is denied each capability server-side; a granted Manager is limited to scope; revocation before commit blocks a prepared confirmation; all grant, revoke, confirmation and denial events are audited; no Manager creates a standing rule or sees operator detail | `7-§5-1`, `13-§13-2`, `13-§10-6` | `BP-§10.6-W5`, `BP-§10.6-A3`, `13-§4-7`, `17-§18-5` |
| `17:FPDR-2` | A replayed event creates no duplicate revenue or stock; an unmapped item is surfaced; a source lacking discount data produces no discount signal and shows the limitation; Scenario B passes on an evidenced source; an outage leaves manual operation available | `13-§4-1` to `-7`, `13-§4-10`, `13-§5-6`, `BP-§10.6-W7`, `BP-§10.6-B1` | `BP-§5.4-1`, `BP-§10.6-W8`, `13-§21-1`, `-2`, `-4`, `-5`, `-10`, `-11`, `22-§17-2` |
| `17:FPDR-3` | A confirmed reorder yields one purchase request linked to the item and supplier; the message contains no merchant-internal intelligence; no delivery or acceptance state without merchant entry; the system sends nothing | `7-§5-1`, `7-§3-6`, `7-§13-8` | `17-§7-7`, `24-§18-3` |
| `17:FPDR-4` | A Manager without the governing permission receives no supplier price in any response, card, export or AI answer; with it, no Smart Business-computed margin | `7-§3-5`, `7-§4-5` | `17-§4-14`, `7-§11-2.5` |
| `17:FPDR-5` | No historical purchase is linked without explicit confirmation by an authorized actor; linking changes no amount, date or transaction identity and creates no new purchase; an unconfirmed suggestion has no effect | `7-§3-4` | `7-§15-6` |
| `17:FPDR-6` | Without sufficient evidence, no threshold is suggested and the gap is shown; no threshold-driven alert or reorder action before Owner confirmation; manual reorder unaffected; no universal default | `7-§2-6`, `7-§16-6` | `BP-§10.6-A1`, `7-§15-4`, `7-§15-7` |

### 15.5 Experience Verification Matrix seed (Build Plan §13)

| UX anchor / human outcome | Applicable actor/role | Runtime status | Evidence | Dependency / note |
|---|---|---|---|---|
| Scenario A — confirmation-gated reorder (`BP-§10.6-A1` to `-A4`) | Owner | Not yet run | — | `D12`, `D13`, `D14`, `D15`; `17:FPDR-6` threshold boundary |
| Scenario B — neutral POS review (`BP-§10.6-B1`, `-B2`) | Owner; Manager only for granted signals | Not yet run | — | `DPOS` UNKNOWN; evidenced source required (`17:FPDR-2`) |
| Existing POS bridged, not replaced (`BP-§10.6-E1`) | Owner | Not yet run | — | `DPOS` |
| Counter anomalies are neutral review items (`BP-§10.6-E2`) | Owner; Manager if granted | Not yet run | — | `DPOS`; `17:FPDR-1` |
| Product and price management in context (`BP-§10.6-E3`) | Owner; Manager if granted | Not yet run | — | `D12` |
| Useful operations without heavy ERP (`BP-§10.6-O`, `BP-§10.6-X`) | Owner; Manager | Not yet run | — | — |

**Evidence rules governing this matrix and the Contract Reconciliation (Build Plan §13):**

| Build Plan §13 rule | Applied here through |
|---|---|
| 1–4: a merged PR, green CI, a working backend or a visually similar screen is not sufficient proof | Every row stays undemonstrated until runtime evidence exists (Section 14); CI is a configured-checks signal only (Section 12.4) |
| 5: Founder Runtime Verification tests the mission's UX anchors | Section 15.1 (`BP-§10.6-A1`–`A4`, `B1`, `B2`), Founder-reserved (`BP-§13-9`) |
| 6: independent verification tests protected and denied behaviour | `NEG` verification seeds on the must-not rows (Section 10.3); `17:FPDR-1` and `17:FPDR-4` denial conditions (Section 15.4); mandatory specialist reviews (Section 13); Source 18 Stage 19 |
| 7–8: `DEFERRED` only with an approved later owner; no erasing earlier accountability | Section 11 (owners preserved; exclusion cancels no responsibility); `BP-§11-7` |
| 10: the matrix is the experience subset of the Contract Reconciliation, and both cite FCTM row IDs | The matrix above cites row IDs; the Contract Reconciliation is compiled at Stage 22 over every FCTM row (Source 18 §3.2 item 11) |

## 16. Future Evolution

- **SB-P-1.18:** order availability and substitution on this mission's stock truth; Staff/HR and Order workspace views; the customer side of directory-indexed search (U-12).
- **SB-P-1.19:** onboarding imports through the UDI stock path; Smart Stock Assistant price and entitlements (`BP-§15-4`).
- **SB-P-1.20:** system dispatch of merchant-approved purchase requests and WhatsApp stock, reorder and counter conversations.
- **Further evidenced POS sources:** each is added only after capability evidence and separate activation authorization (`17:FPDR-2`; Build Plan §5.4).
- **Decision expansions not authorized here:** each needs its own decision.
  - delegating historical attribution or threshold confirmation (N-1, N-2);
  - any delegable operator-level detail;
  - any automatic supplier messaging before SB-P-1.20.

## 17. Product Philosophy Summary

Know what is in the shop and what needs attention. Suggest with evidence, and let the Owner decide. Bridge the POS the merchant already trusts. Review counter activity without accusing anyone. Close the day with facts and honest unknowns. Never let software take a decision that belongs to the Owner (Build Plan §10.6 exit principle; C7 §5; C13 §3).

## 18. Blueprint Change Log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-10-20 | Claude Code (Definition Actor, MC-318 / MC-319) | Initial Stage 4 draft: Metadata, Mission Snapshot, Sections 1–19 assembled by reference to the canonical FCTM (blob `a335b040`), `17:FPDR-1` to `17:FPDR-6` and the Stage 3 reconciliation |
| 0.2 | 2026-10-20 | Claude Code (Definition Actor, MC-323 / MC-324) | Stage 5 finding: §6 Manager permission wording clarified (Reference Cost and margin separately grantable under `12:FR-04` F-03; `12:FR-09` cited for margin intelligence; `17:FPDR-4` retained). No row, decision, scenario or other definition changed |
| 0.3 | 2026-10-21 | Claude Code (Definition Actor, MC-353) | Gate 10 documentary corrections C-1 to C-5 for the 25 MC-349 findings: §8.3, §8.7, §8.9 permissive-list notes (annex §C-2); §12.4 Build Plan §5.1 gate, §5.3 delivery chain and §6.3 storage pointer; §14 GPCV update rule; §15.5 Build Plan §13 evidence rules. C-1 and C-3 mappings in the annex. No row, disposition, owner, commitment, classification, decision, scenario, seed or hold changed |
| 0.4 | 2026-10-21 | Claude Code (Definition Actor, MC-368A) | `17:FPDR-7` synchronization with the FCTM: Metadata decision and FCTM references; §10.1 `17:FPDR-7` entry and citation totals (43 rows, 45 references); the 23 §19 lines regenerated from the FCTM (Founder-decision cell, verification seed, §10.1 location) and the §19 FCTM blob. No row ID, disposition, owner, commitment, classification, source pointer, mandatory capability or Founder scenario changed |
| 0.5 | 2026-10-21 | Claude Code (Definition Actor, MC-380A) | G10-07 traceability corrections synchronized with the FCTM: §11.2 and §19 now use the SB-P-1.15 identifiers `2-§5-12` (was `2-§5-13`) and `11-§10-4` (was `11-§10-3`) for the same source units; the §11.2 `22-§4` citation now names SB-P-1.14 `22-§4-2`; the §19 `24-§18-3` locator now covers n13–n18; current FCTM blob references updated. No source unit, disposition, owner, commitment, classification, decision, seed, mandatory capability or Founder scenario changed |
| 0.6 | 2026-10-22 | Claude Code (Definition Actor, MC-393A) | Stage 5 Gate 10 approval recorded: status banner, lifecycle metadata, Builder Review and Mission Control Review fields, Mission Snapshot status and §19 governance history updated for MC-393 (Gate 10 PASS; Sections 1–19 approved for Stage 6 Builder Review). The approved content is blob `8265f7ce`. No requirement, acceptance criterion, classification, FCTM ID, Founder decision, verification seed or Sections 1–19 scope changed |

## 19. Governance History

| Event | Record | Canonical |
|---|---|---|
| Stage 1 entry | `communication/missions/SB-P-1.17/mission-control/01` | PR #985, `7cd78f08` |
| Stage 1 specialist inventory | `specialists/01` | PR #986, `0f0ca34b` |
| Stage 1 Intake Pack, FCTM and learning intake opened; Definition Actor appointed | `mission-control/02`–`04` | PR #987, `210ed8c7` |
| Stage 2 discovery authorization | `mission-control/05` | PR #988, `44895d2c` |
| Stage 2 Mission Truth Pack, FCTM, inventory, learning intake, completion report | `claude-code/01`–`05` | PR #989, `a96c4ba9` |
| Stage 3 preparation instruction | `mission-control/06` | PR #990, `2591668b` |
| Stage 3 Founder Brief, annex, unapproved template, preparation note | `claude-code/06`–`09` | PR #991, `7df6feb3` |
| U-15 addendum and Founder dialogue authorization | `mission-control/07` | PR #992, `c45c0079` |
| Six-entry publication authorization | `mission-control/08` | PR #993, `22456637` |
| Six-entry Founder Product Decision Record (`17:FPDR-1` to `-6`) | `claude-code/10` | PR #994, `9c9bce82` |
| Stage 3 effectiveness record, reconciliation, FCTM direct citations | `mission-control/09`; `claude-code/11`; `claude-code/01` | PR #995, `2281d9c0` |
| Stage 3 completion and handover record | `mission-control/10` | PR #996, `df55e277` |
| Stage 3 closure verification (MC-316) | Conversation-source | — |
| Stage 4 drafting authorization (MC-317, MC-318) and path correction (MC-319) | Conversation-source | — |
| Stage 4 Blueprint Sections 1–19 draft and preparation report | this file; `claude-code/13` | PR #997, `f4088bcd` |
| Stage 5 §6 permission-wording correction (MC-323, MC-324) | this file | PR #998, `709f29d2` |
| Independent Gate 10 review dispatch (MC-329) | `communication/live/instruction1.51.md`, `report1.51.md` | PR #999, `4802e34c` |
| MC-349 independent findings evidence packet | `mission-control/11` | PR #1000, `2806c1fa` |
| Gate 10 documentary corrections C-1 to C-5 | `claude-code/14`; this file | PR #1001, `ef52cff7` |
| Founder decision `17:FPDR-7` | `claude-code/15` | PR #1002, `a3f4b8f1` |
| 23-row FCTM reconciliation with `17:FPDR-7`; metadata correction (MC-368A, MC-370) | `claude-code/01`; this file | PR #1004, `ed62d81b` |
| G10-07 source evidence package (MC-375A, MC-376B) | `claude-code/g10-07-evidence/` | PR #1005, `3c7bf8ea` |
| G10-07 traceability corrections (MC-380A) | `claude-code/01`, `claude-code/02`; this file | PR #1007, `fc144110` |
| R0 completeness evidence (MC-385A, MC-387A) | `claude-code/g10-07-evidence/mc385a/` | PR #1008, `d8ad626c` |
| Institutional learning approval (MC-385B; PASS under MC-386) and independent G10-07 PASS (MC-392A) | Conversation-source | — |
| Stage 5 Gate 10 PASS and Stage 6 handover (MC-393) | `mission-control/MC-393-stage5-gate10-approval-and-stage6-handover.md` | PENDING (review PR) |

### FCTM Row-ID to Blueprint Section and Source Traceability

This is a complete accounting of all FCTM rows (blob `cb79088d`), in FCTM order. Each line gives:

- the disposition and owning mission, exactly as in the FCTM;
- the source and exact pointer, exactly as in the FCTM;
- the Blueprint location;
- the verification treatment (the FCTM verification-target seed, for `IN SCOPE` rows);
- the FCTM Founder-decision cell.

Each `IN SCOPE` row maps to one Section 8 subsection. Where they apply, it also maps to:

| Section | When |
|---|---|
| 10.1 | A `17:FPDR` decision is cited |
| 10.2 | Rule and principle rows |
| 10.3 | Must-not rows |
| 12 | Rows with a dependency |
| 15 | Acceptance, experience and completion-gate rows |

Every other row maps to its Section 11 subsection.

Counts: 630 rows — 404 `IN SCOPE`, 151 `DELEGATED`, 15 `ASSIGNED TO LATER MISSION`, 24 `NOT APPLICABLE`, 31 `OUT OF BUILD SCOPE`, 5 `UNRESOLVED FOUNDER DECISION`, 0 `ESCALATED`, 0 `ALREADY DEMONSTRATED`.

| FCTM row | Disposition | Owning mission | Source @ blob | Exact source pointer | Blueprint location | Verification treatment | Founder decision |
|---|---|---|---|---|---|---|---|
| 7-§1-1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §1 p1: This feature family helps merchants understand what stock exists, what is moving, what is a… | §8.1, §15 | EXP | — |
| 7-§1-2 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §1 p2: It should reduce stock loss, dead capital and mental tracking without forcing a rigid ERP o… | §8.1, §10.2 | EXP | — |
| 7-§2-1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §2 b1: item/product identity; | §8.1, §12 | RT | — |
| 7-§2-2 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §2 b2: quantity and unit tracking; | §8.1, §12 | RT | — |
| 7-§2-3 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §2 b3: stock movement history; | §8.1, §12 | RT | — |
| 7-§2-4 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §2 b4: opening stock/imports; | §8.1, §12 | RT | — |
| 7-§2-5 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §2 b5: corrections with auditability; | §8.1, §12 | RT | — |
| 7-§2-6 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §2 b6: low-stock awareness; | §8.2, §10.1, §12 | RT; FRV-A | 17:FPDR-6 |
| 7-§2-7 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §2 b7: expiry/freshness awareness where relevant data exists; | §8.2, §12 | RT | — |
| 7-§2-8 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §2 b8: slow-moving/dead-capital awareness; | §8.2, §12 | RT | — |
| 7-§2-9 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §2 b9: wastage/spoilage recording where relevant; | §8.2, §12 | RT | — |
| 7-§2-10 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §2 b10: links to catalog/pricing and business events; | §8.1, §12 | RT | — |
| 7-§2-11 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §2 b11: owner/manager search and summaries. | §8.1, §12 | RT | — |
| 7-§2-12 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §2 p2: Exact unit-conversion, batch and costing mechanics belong to Blueprint/EIS design where not… | §8.1, §10.2 | INSP | — |
| 7-§3-1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §3 p1: Supplier identity should be business-scoped and reusable across purchasing/reorder workflow… | §8.3, §10.2, §12 | RT | — |
| 7-§3-2 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §3 b1: supplier name/contact; | §8.3, §12 | RT | — |
| 7-§3-3 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §3 b2: supplied products/items; | §8.3, §12 | RT | — |
| 7-§3-4 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §3 b3: purchase history; | §8.3, §10.1, §12 | RT | 17:FPDR-5 |
| 7-§3-5 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §3 b4: recent/typical prices where supported; | §8.3, §10.1, §12 | RT if adopted | 12:FR-09; 17:FPDR-4; 17:FPDR-7 |
| 7-§3-6 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §3 b5: order/communication history; | §8.3, §10.1, §12 | RT | 17:FPDR-3 |
| 7-§3-7 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §3 b6: payment/credit relationship where authorized; | §8.3, §12 | RT | 14:FPDR-1 |
| 7-§3-8 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §3 b7: preferred/alternate supplier context. | §8.3, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 7-§3-9 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §3 p3: Suppliers do not receive merchant business intelligence. | §8.3, §10.3, §12 | NEG | — |
| 7-§4-1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §4 p1: Smart Business may suggest that stock needs replenishment based on authorized data. | §8.4, §12 | RT; FRV-A | — |
| 7-§4-2 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §4 b1: current stock; | §8.4, §12 | RT; FRV-A | — |
| 7-§4-3 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §4 b2: observed movement; | §8.4, §12 | RT; FRV-A | — |
| 7-§4-4 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §4 b3: configured threshold/target; | §8.4, §12 | RT; FRV-A | — |
| 7-§4-5 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §4 b4: recent purchase/supplier context; | §8.4, §10.1, §12 | RT; FRV-A | 12:FR-09; 17:FPDR-4 |
| 7-§4-6 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §4 b5: expiry or overstock risk where relevant. | §8.4, §12 | RT; FRV-A | — |
| 7-§4-7 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §4 p3: The system must not fabricate demand forecasts or supplier availability. | §8.4, §10.3, §12 | NEG | — |
| 7-§5-1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §5 p2: observe → suggest → Owner/authorized Manager reviews → confirm/modify/reject → approved sup… | §8.4, §10.1, §10.2, §12 | RT; NEG; FRV-A | 17:FPDR-1; 17:FPDR-3 |
| 7-§5-2 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §5 p3: Automatic execution is allowed only where the Owner has explicitly created a bounded standi… | §8.4, §10.2, §12 | RT; NEG; FRV-A | — |
| 7-§5-3 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §5 p4: A trigger firing is not itself permission. | §8.4, §10.3, §12 | NEG | — |
| 7-§5-4 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §5 p5: Examples of bounded rule dimensions may include item, supplier, quantity/value ceiling, fre… | §8.4, §10.2, §12 | INSP; NEG | — |
| 7-§6-1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §6 p1 (part): stock lists reuse Universal Document Intelligence | §8.5, §12 | RT | — |
| 7-§6-2 | DELEGATED | SB-P-1.14 | C7@65ad91b2 | §6 p1 (part): opening-stock sheets reuse Universal Document Intelligence | §11.2 | — | — |
| 7-§6-3 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §6 p1 (part): supplier invoices reuse UDI (inventory side; Ledger purchase side is 5-§7-4) | §8.5, §12 | RT | — |
| 7-§6-4 | DELEGATED | SB-P-1.14 | C7@65ad91b2 | §6 p3: file/photo → interpretation → preview → clarification → confirmation → validated update (opening-stock slice) | §11.2 | — | — |
| 7-§6-4b | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §6 p3: same consequential-import pattern for other stock documents and supplier invoices (slice added here) | §8.5, §10.2, §12 | RT; IDEM | — |
| 7-§6-5 | DELEGATED | SB-P-1.14 | C7@65ad91b2 | §6 p4: no isolated import truth bypassing inventory audit/idempotency controls (SB-P-1.14 row) | §11.2 | — | — |
| 7-§6-5b | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §6 p4: same must-not for SB-P-1.17 stock-document and bulk-stock paths (slice added here) | §8.5, §10.3, §12 | NEG; IDEM | — |
| 7-§7 | DELEGATED | SB-P-1.12 | C7@65ad91b2 | §7 limited slice: no competing/duplicate stock-linked pricing path (SB-P-1.12 touched scope) | §11.2 | — | — |
| 7-§7-1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §7 p1: Inventory must work without POS. | §8.6 | RT | — |
| 7-§7-2 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §7 p2: Where a standard POS bridge is enabled, POS data may support sales and stock intelligence. | §8.6, §12 | RT | — |
| 7-§7-3 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §7 p3: Custom client-specific POS modification inside Smart Business core is rejected; use standar… | §8.6, §10.3 | NEG; INSP | — |
| 7-§7-4 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §7 p4: Conflicts between POS, manual, document and conversational stock updates must be resolved t… | §8.6, §10.2, §12 | INSP; RT | — |
| 7-§8-1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §8 p1: stock and Ledger link business events where appropriate without duplicating them | §8.1, §10.2, §12 | INSP; IDEM | — |
| 7-§8-2 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §8 b1: confirmed purchase may create/associate inventory movement and Ledger expense | §8.1, §12 | RT; IDEM | — |
| 7-§8-3 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §8 b2: confirmed sale/order may affect stock through the approved business-event path | §8.1, §12 | RT; IDEM | — |
| 7-§8-4 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §8 b3: stock correction should not fabricate a financial transaction | §8.1, §10.3, §12 | NEG | — |
| 7-§8-5 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §8 b4: supplier payment state is distinct from goods receipt state | §8.1, §10.2, §12 | RT; INSP | 14:FPDR-1 |
| 7-§9 | DELEGATED | SB-P-1.12 | C7@65ad91b2 | §9 limited slice: no duplicate stock engine (SB-P-1.12 touched scope) | §11.2 | — | — |
| 7-§9-1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §9 p1 <Manager>: Stock Intelligence is included as Manager operational capability. | §8.1, §12 | RT | — |
| 7-§9-2 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §9 p2 <Ledger>: Smart Stock Assistant is the add-on path for deeper stock intelligence. | §8.1, §12 | RT | — |
| 7-§9-3 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §9 p3 <Ledger>: Packaging must not create duplicate inventory engines. Both use the same shared stock found… | §8.1, §10.3, §12 | NEG; INSP | — |
| 7-§10-1 | DELEGATED | SB-P-1.12 | C7@65ad91b2 | §10 p1 <Owner>: full authorized stock/supplier/reorder authority | §11.2 | — | — |
| 7-§10-2 | DELEGATED | SB-P-1.12 | C7@65ad91b2 | §10 p2 <Manager>: delegated operational authority only; reorder action only where explicitly permitted | §11.2 | — | — |
| 7-§10-3 | DELEGATED | SB-P-1.12 | C7@65ad91b2 | §10 p3 <Employee / Staff>: scoped stock operations if permitted; no Owner financial intelligence | §11.2 | — | — |
| 7-§10-4 | DELEGATED | SB-P-1.12 | C7@65ad91b2 | §10 p4 <Supplier>: only communication required for the approved supplier/order workflow | §11.2 | — | — |
| 7-§11-1.1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §11 b1: AI may summarize stock position (child of inherited group row 7-§11-1) | §8.4, §12 | RT | — |
| 7-§11-1.2 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §11 b2: AI may identify low/slow/expiry-risk items from authorized facts (child of inherited group row 7-§11-1) | §8.4, §12 | RT | — |
| 7-§11-1.3 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §11 b3: AI may suggest reorder quantities/ranges where evidence supports it (child of inherited group row 7-§11-1) | §8.4, §12 | RT; FRV-A | — |
| 7-§11-1.4 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §11 b4: AI may suggest supplier candidates from merchant history (child of inherited group row 7-§11-1) | §8.4, §12 | RT | — |
| 7-§11-1.5 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §11 b5: AI may explain anomalies neutrally (child of inherited group row 7-§11-1) | §8.4, §12 | RT | — |
| 7-§11-1.6 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §11 b6: AI may prepare drafts and ask clarification (child of inherited group row 7-§11-1) | §8.4, §12 | RT | — |
| 7-§11-2 | DELEGATED | SB-P-1.13 | C7@65ad91b2 | §11 b7–b11: AI must-not kernel slice (SB-P-1.13 AI kernel) | §11.2 | — | — |
| 7-§11-2.1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §11 b7: AI must not invent stock quantities (stock-feature slice; kernel slice is 7-§11-2) | §8.4, §10.3, §12 | NEG | — |
| 7-§11-2.2 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §11 b8: AI must not infer theft/fraud from discrepancies (stock-feature slice; kernel slice is 7-§11-2) | §8.4, §10.3, §12 | NEG | — |
| 7-§11-2.3 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §11 b9: AI must not silently overwrite stock history (stock-feature slice; kernel slice is 7-§11-2) | §8.4, §10.3, §12 | NEG | — |
| 7-§11-2.4 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §11 b10: AI must not place supplier orders without confirmation/delegated authority (stock-feature slice; kernel slice is 7-§11-2) | §8.4, §10.3, §12 | NEG | — |
| 7-§11-2.5 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §11 b11: AI must not expose merchant financial intelligence to staff/suppliers (stock-feature slice; kernel slice is 7-§11-2) | §8.4, §10.3, §12 | NEG | 12:FR-09 |
| 7-§12 | DELEGATED | SB-P-1.12 | C7@65ad91b2 | §12 seam: Catalog/Product identity and Permission Engine reuse (SB-P-1.12 touched scope) | §11.2 | — | — |
| 7-§12-1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §12 b1: Catalog/Product identity; | §8.11, §10.2, §12 | INSP | — |
| 7-§12-2 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §12 b2: Business Memory; | §8.11, §10.2, §12 | INSP | — |
| 7-§12-3 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §12 b3: Permission Engine; | §8.11, §10.2, §12 | INSP | — |
| 7-§12-4 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §12 b4: Reminder Engine; | §8.11, §10.2, §12 | INSP | — |
| 7-§12-5 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §12 b5: Customer/Supplier identity; | §8.11, §10.2, §12 | INSP | — |
| 7-§12-6 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §12 b6: Universal Document Intelligence; | §8.11, §10.2, §12 | INSP | — |
| 7-§12-7 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §12 b7: Conversation/Notification Engine; | §8.11, §10.2, §12 | INSP | — |
| 7-§12-8 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §12 b8: audit/idempotency foundation; | §8.11, §10.2, §12 | INSP | — |
| 7-§12-9 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §12 b9: POS integration layer where enabled. | §8.11, §10.2, §12 | INSP | — |
| 7-§13-1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §13 b1: duplicate movement/import; | §8.11, §12 | IDEM | — |
| 7-§13-2 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §13 b2: unknown item; | §8.11, §12 | RT; NEG | — |
| 7-§13-3 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §13 b3: ambiguous item name; | §8.11, §12 | RT; NEG | — |
| 7-§13-4 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §13 b4: unit mismatch; | §8.11, §12 | RT; NEG | — |
| 7-§13-5 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §13 b5: negative/insufficient stock according to approved policy; | §8.11, §12 | RT; NEG | — |
| 7-§13-6 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §13 b6: correction conflicts; | §8.11, §12 | RT; NEG | — |
| 7-§13-7 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §13 b7: supplier unavailable; | §8.11, §12 | RT; NEG | — |
| 7-§13-8 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §13 b8: supplier/order communication failure; | §8.11, §10.1, §12 | RT; NEG | 17:FPDR-3 |
| 7-§13-9 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §13 b9: POS/manual conflict; | §8.11, §12 | RT; NEG | — |
| 7-§13-10 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §13 b10: document parsing conflict; | §8.11, §12 | RT; NEG | — |
| 7-§13-11 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §13 b11: retry/idempotency; | §8.11, §12 | IDEM | — |
| 7-§13-12 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §13 b12: expired/invalid delegated automation rule. | §8.11, §12 | RT; NEG | — |
| 7-§13-13 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §13 p2: A stock ambiguity should block only the uncertain update, not unrelated business operations. | §8.11, §10.2, §12 | RT; NEG | — |
| 7-§14-1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §14 p1: Stock intelligence must report facts and signals without accusation. | §8.7, §10.2 | NEG; EXP | — |
| 7-§14-2 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §14 p2: Counter/POS discrepancy, wastage or shrinkage may be surfaced for review but must not becom… | §8.7, §10.3 | NEG; EXP | — |
| 7-§15-1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §15 b1: opening stock and normal movement history | §8.12, §12, §15 | RT | — |
| 7-§15-2a | DELEGATED | SB-P-1.14 | C7@65ad91b2 | §15 b2: document/CSV import with preview and idempotency (opening-stock slice) | §11.2 | — | — |
| 7-§15-2b | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §15 b2: document/CSV import with preview and idempotency (other stock documents) | §8.12, §12, §15 | RT; IDEM | — |
| 7-§15-3 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §15 b3: correction with audit trail | §8.12, §12, §15 | RT | — |
| 7-§15-4 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §15 b4: low-stock awareness | §8.12, §12, §15 | RT | — |
| 7-§15-5 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §15 b5: expiry/slow-moving signal where source data supports it | §8.12, §12, §15 | RT | — |
| 7-§15-6 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §15 b6: supplier identity/history | §8.12, §12, §15 | RT | — |
| 7-§15-7 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §15 b7: reorder suggestion requiring confirmation | §8.12, §12, §15 | RT; FRV-A | — |
| 7-§15-8 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §15 b8: bounded standing rule executing only within stored authority | §8.12, §12, §15 | RT; NEG | — |
| 7-§15-9 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §15 b9: POS bridge contribution without custom core modification | §8.12, §12, §15 | INSP; RT | — |
| 7-§15-10 | DELEGATED | SB-P-1.12 | C7@65ad91b2 | §15 b10: staff permission boundaries | §11.2 | — | — |
| 7-§15-11 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §15 b11: neutral handling of stock discrepancy | §8.12, §12, §15 | NEG; EXP | — |
| 7-§15-12 | DELEGATED | SB-P-1.12 | C7@65ad91b2 | §15 b12: cross-business isolation | §11.2 | — | — |
| 7-§16-1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §16 b1: blind automatic supplier procurement; | §8.11, §10.3 | NEG | — |
| 7-§16-2 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §16 b2: duplicate stock engines for Ledger vs Manager; | §8.11, §10.3 | NEG | — |
| 7-§16-3 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §16 b3: custom client POS changes inside core; | §8.11, §10.3 | NEG | — |
| 7-§16-4 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §16 b4: AI accusation of theft/fraud from stock anomalies; | §8.11, §10.3 | NEG | — |
| 7-§16-5 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §16 b5: silent precedence guessing among conflicting sources; | §8.11, §10.3 | NEG | — |
| 7-§16-6 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §16 b6: historical fixed numeric thresholds treated as Product Truth without current validation. | §8.2, §10.1, §10.3 | NEG | 17:FPDR-6 |
| 7-§17 | NOT APPLICABLE | SB-P-1.17 | C7@65ad91b2 | §17 whole section: Dependencies (p1) | §11.4 | — | — |
| 7-§18-1 | IN SCOPE | SB-P-1.17 | C7@65ad91b2 | §18 p1: Stock/Supplier/Reorder is complete only when inventory, supplier memory, advisory reorder,… | §8.12, §12, §15 | GATE | — |
| 13-§1-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §1 p1: This feature lets Smart Business work beside an existing standard POS, ingest permitted sal… | §8.6, §15 | EXP | — |
| 13-§1-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §1 p2: Smart Business must respect merchants who already use a POS. The product enriches the exist… | §8.6, §15 | EXP | — |
| 13-§2-1 | NOT APPLICABLE | SB-P-1.17 | C13@4426e8b1 | §2 b1: connected Business Memory; | §11.4 | — | — |
| 13-§2-2 | NOT APPLICABLE | SB-P-1.17 | C13@4426e8b1 | §2 b2: meaningful stock/counter insight; | §11.4 | — | — |
| 13-§2-3 | NOT APPLICABLE | SB-P-1.17 | C13@4426e8b1 | §2 b3: visibility into unusual void/discount patterns; | §11.4 | — | — |
| 13-§2-4 | NOT APPLICABLE | SB-P-1.17 | C13@4426e8b1 | §2 b4: clear closing cash reconciliation; | §11.4 | — | — |
| 13-§2-5 | NOT APPLICABLE | SB-P-1.17 | C13@4426e8b1 | §2 b5: a conversational explanation of what deserves review. | §11.4 | — | — |
| 13-§2-6 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §2 p2: The product should add clarity without turning AI into a fraud judge. | §8.7, §10.2 | EXP | — |
| 13-§3-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §3 b1: Respect existing merchant tools. | §8.7, §10.2 | EXP; INSP | — |
| 13-§3-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §3 b2: Standard bridge, not forced replacement. | §8.7, §10.2 | EXP; INSP | — |
| 13-§3-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §3 b3: AI Assistant, Not AI Judge. | §8.7, §10.2 | EXP; INSP | — |
| 13-§3-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §3 b4: Observe/report facts; Owner interprets meaning. | §8.7, §10.2 | EXP; INSP | — |
| 13-§3-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §3 b5: No checkout punishment from model suspicion. | §8.7, §10.2 | EXP; INSP | — |
| 13-§3-6 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §3 b6: Preserve auditability and source provenance. | §8.7, §10.2 | EXP; INSP | — |
| 13-§3-7 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §3 b7: Custom client-specific core POS modification is rejected; adapt at integration/extension ed… | §8.7, §10.3 | NEG; INSP | — |
| 13-§4-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §4 p1: The approved product direction includes a standard POS integration/bridge. | §8.6, §10.1, §12 | RT | 17:FPDR-2 |
| 13-§4-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §4 b1: sales ingestion; | §8.6, §10.1, §12 | RT | 17:FPDR-2 |
| 13-§4-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §4 b2: transaction/reference identity; | §8.6, §10.1, §12 | RT; IDEM | 17:FPDR-2 |
| 13-§4-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §4 b3: product/item mapping; | §8.6, §10.1, §12 | RT | 17:FPDR-2 |
| 13-§4-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §4 b4: quantity/price/discount/void information where the POS exposes it; | §8.6, §10.1, §12 | RT | 17:FPDR-2 |
| 13-§4-6 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §4 b5: payment-method information where available; | §8.6, §10.1, §12 | RT | 17:FPDR-2 |
| 13-§4-7 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §4 b6: timestamp/counter/operator identifiers where permitted; | §8.6, §10.1, §12 | RT | 17:FPDR-2 |
| 13-§4-8 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §4 b7: stock impact where configured; | §8.6, §12 | RT | — |
| 13-§4-9 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §4 b8: closing/reconciliation support. | §8.6, §12 | RT | — |
| 13-§4-10 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §4 p3: A manual CSV/file import may coexist as import/fallback, but it must not be used to silentl… | §8.6, §10.1, §10.2, §12 | INSP | 17:FPDR-2 |
| 13-§5-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §5 p1: Smart Business must not implement bespoke client-specific changes inside the core platform… | §8.6, §10.3, §12 | NEG; INSP | — |
| 13-§5-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §5 b1: standard connectors/adapters; | §8.6, §10.2, §12 | INSP | — |
| 13-§5-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §5 b2: documented APIs/files/webhooks where available; | §8.6, §10.2, §12 | INSP | — |
| 13-§5-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §5 b3: extension/integration layers; | §8.6, §10.2, §12 | INSP | — |
| 13-§5-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §5 b4: mapping/configuration at the edge. | §8.6, §10.2, §12 | INSP | — |
| 13-§5-6 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §5 p3: If a POS cannot support the standard bridge safely, classify the integration limitation rat… | §8.6, §10.1, §10.2, §12 | INSP | 17:FPDR-2 |
| 13-§6-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §6 b1: native/manual Smart Business record; | §8.6, §12 | RT; IDEM | — |
| 13-§6-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §6 b2: POS-origin sale/event; | §8.6, §12 | RT; IDEM | — |
| 13-§6-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §6 b3: correction/reversal; | §8.6, §12 | RT; IDEM | — |
| 13-§6-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §6 b4: duplicate/retry; | §8.6, §12 | RT; IDEM | — |
| 13-§6-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §6 b5: reconciliation link. | §8.6, §12 | RT; IDEM | — |
| 13-§6-6 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §6 p2: POS ingestion must not create duplicate revenue when the same event is later encountered th… | §8.6, §10.3, §12 | IDEM; NEG | — |
| 13-§7-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §7 b1: product mapping exists; | §8.6, §12 | RT | — |
| 13-§7-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §7 b2: units/quantities are reliable; | §8.6, §12 | RT | — |
| 13-§7-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §7 b3: the event is trusted; | §8.6, §12 | RT | — |
| 13-§7-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §7 b4: the stock path is configured. | §8.6, §12 | RT | — |
| 13-§7-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §7 p2: Conflicts between POS, manual stock, imports or documents must not be silently guessed. The… | §8.6, §10.2, §12 | RT; NEG | — |
| 13-§8-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §8 b1: voids; | §8.7, §12 | RT; FRV-B | — |
| 13-§8-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §8 b2: unusually high discount activity; | §8.7, §12 | RT; FRV-B | — |
| 13-§8-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §8 b3: repeated reversals; | §8.7, §10.1, §12 | RT if adopted; FRV-B only if used as the Scenario B signal | 17:FPDR-7 |
| 13-§8-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §8 b4: unexpected price overrides; | §8.7, §10.1, §12 | RT if adopted; FRV-B only if used as the Scenario B signal | 17:FPDR-7 |
| 13-§8-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §8 b5: unusual transaction timing/frequency; | §8.7, §10.1, §12 | RT if adopted; FRV-B only if used as the Scenario B signal | 17:FPDR-7 |
| 13-§8-6 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §8 b6: closing-cash variance; | §8.7, §12 | RT; FRV-B | — |
| 13-§8-7 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §8 b7: other evidence-backed counter signals. | §8.7, §10.1, §12 | RT if adopted; FRV-B only if used as the Scenario B signal | 17:FPDR-7 |
| 13-§8-8 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §8 p2: The product should present these as review signals, not accusations. | §8.7, §10.2, §12 | EXP; FRV-B | — |
| 13-§8-9 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §8 p4: Please review this counter activity. These voids/discounts are higher than the recent patte… | §8.7, §15 | EXP; FRV-B | — |
| 13-§8-10 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §8 p6: This employee is stealing. | §8.7, §10.3 | NEG; FRV-B | — |
| 13-§9-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §9 p1: Observable anomalies can have legitimate explanations. | §8.7, §10.2 | EXP | — |
| 13-§9-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §9 b1: Owner-approved festival discount; | §8.7, §12, §15 | RT | — |
| 13-§9-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §9 b2: damaged-product adjustment; | §8.7, §12, §15 | RT | — |
| 13-§9-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §9 b3: customer relationship discount; | §8.7, §12, §15 | RT | — |
| 13-§9-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §9 b4: POS correction; | §8.7, §12, §15 | RT | — |
| 13-§9-6 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §9 b5: staff action on Owner instruction. | §8.7, §12, §15 | RT | — |
| 13-§9-7 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §9 p3: The product should allow authorized human context to be attached without deleting the origi… | §8.7, §12 | RT; NEG | — |
| 13-§10-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §10 b1: POS-reported cash sales; | §8.8, §12 | RT | — |
| 13-§10-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §10 b2: other payment methods; | §8.8, §12 | RT | — |
| 13-§10-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §10 b3: cash opening/closing information; | §8.8, §12 | RT | — |
| 13-§10-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §10 b4: recorded expenses or cash movements; | §8.8, §12 | RT | — |
| 13-§10-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §10 b5: refunds/voids/discount adjustments; | §8.8, §12 | RT | — |
| 13-§10-6 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §10 b6: actual cash count entered by authorized user; | §8.8, §10.1, §12 | RT | 17:FPDR-1 |
| 13-§10-7 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §10 b7: resulting variance. | §8.8, §12 | RT | — |
| 13-§10-8 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §10 p2: A variance is a fact to review, not automatic proof of misconduct. | §8.8, §10.3 | NEG; EXP | — |
| 13-§11-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §11 p1: Night Closing Intelligence may consume approved POS/counter/closing-cash data for the Owner… | §8.8, §12 | RT | — |
| 13-§11-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §11 b1: sales summary; | §8.8, §12, §15 | RT | — |
| 13-§11-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §11 b2: cash variance; | §8.8, §12, §15 | RT | — |
| 13-§11-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §11 b3: unusual void/discount pattern; | §8.8, §12, §15 | RT | — |
| 13-§11-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §11 b4: stock-impact signal; | §8.8, §12, §15 | RT | — |
| 13-§11-6 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §11 b5: items requiring review tomorrow. | §8.8, §12, §15 | RT | — |
| 13-§11-7 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §11 p3: Employees must not receive Owner-level closing intelligence merely because they used the PO… | §8.8, §10.3, §12 | NEG | — |
| 13-§12-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §12 p1: Ask CFO may reason over authorized POS and closing data. | §8.10, §12 | RT | — |
| 13-§12-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §12 b1: 'Why was cash lower than POS sales yesterday?' | §8.10, §12, §15 | RT | — |
| 13-§12-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §12 b2: 'Which discounts changed most this week?' | §8.10, §12, §15 | RT | — |
| 13-§12-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §12 b3: 'Did a stock item move unusually?' | §8.10, §12, §15 | RT | — |
| 13-§12-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §12 p3: Ask CFO remains read-only and must distinguish fact from hypothesis. | §8.10, §10.3, §12 | NEG | — |
| 13-§13-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §13 p1 <Owner>: Full authorized visibility and review. | §8.10, §12 | RT; NEG | — |
| 13-§13-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §13 p2 <Manager>: Operational visibility only within Owner-delegated scope. No automatic access to Owner-only… | §8.10, §10.1, §12 | RT; NEG | 17:FPDR-1 |
| 13-§13-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §13 p3 <Employee/counter staff>: May operate permitted workflows and see only role-appropriate information. A staff user sho… | §8.10, §12 | NEG | — |
| 13-§13-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §13 p4 <Platform/support>: No routine merchant financial browsing. Any support access follows purpose-limited governan… | §8.10, §10.3, §12 | NEG | — |
| 13-§14-1a | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §14 p1: Owners ask about POS/counter/closing in English, Malayalam or Manglish — Conversation Workspace slice | §8.10, §12 | RT | — |
| 13-§14-1b | ASSIGNED TO LATER MISSION | SB-P-1.20 | C13@4426e8b1 | §14 p1: same — WhatsApp slice | §11.1 | — | — |
| 13-§14-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §14 p2: conversational surface reuses the same POS data and permission rules as the dashboard | §8.10, §10.2, §12 | INSP; NEG | — |
| 13-§15-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §15 b1: lock a register; | §8.7, §10.3 | NEG | — |
| 13-§15-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §15 b2: suspend an employee; | §8.7, §10.3 | NEG | — |
| 13-§15-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §15 b3: reverse a transaction; | §8.7, §10.3, §12 | NEG | — |
| 13-§15-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §15 b4: change prices; | §8.7, §10.3 | NEG | — |
| 13-§15-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §15 b5: block checkout; | §8.7, §10.3 | NEG | — |
| 13-§15-6 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §15 b6: deduct wages; | §8.7, §10.3 | NEG | — |
| 13-§15-7 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §15 b7: accuse a person. | §8.7, §10.3 | NEG | — |
| 13-§15-8 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §15 p2: Any consequential correction/action follows the appropriate human-confirmed feature workflo… | §8.7, §10.2, §12 | RT | — |
| 13-§16-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §16 b1: POS connection unavailable; | §8.11, §12 | RT; NEG | — |
| 13-§16-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §16 b2: duplicate event; | §8.11, §12 | IDEM | — |
| 13-§16-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §16 b3: missing product mapping; | §8.11, §12 | RT; NEG | — |
| 13-§16-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §16 b4: incompatible unit/price; | §8.11, §12 | RT; NEG | — |
| 13-§16-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §16 b5: out-of-order event; | §8.11, §12 | IDEM | — |
| 13-§16-6 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §16 b6: correction/reversal; | §8.11, §12 | RT; NEG | — |
| 13-§16-7 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §16 b7: partial sync; | §8.11, §12 | RT; NEG | — |
| 13-§16-8 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §16 b8: stale integration credentials; | §8.11, §12 | RT; NEG | — |
| 13-§16-9 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §16 b9: closing count missing; | §8.11, §12 | RT; NEG | — |
| 13-§16-10 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §16 b10: variance unresolved; | §8.11, §12 | RT; NEG | — |
| 13-§16-11 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §16 b11: integration source conflict. | §8.11, §12 | RT; NEG | — |
| 13-§16-12 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §16 p2: A POS outage must not stop manual Smart Business operation where safe. | §8.11, §10.2 | RT; NEG | — |
| 13-§17-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §17 b1: POS/integration identity; | §8.11, §12 | INSP; RT | — |
| 13-§17-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §17 b2: external event/reference ID; | §8.11, §12 | INSP; RT | — |
| 13-§17-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §17 b3: business/product/customer mapping where relevant; | §8.11, §12 | INSP; RT | — |
| 13-§17-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §17 b4: raw/normalized event facts; | §8.11, §12 | INSP; RT | — |
| 13-§17-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §17 b5: ingestion timestamp/source; | §8.11, §12 | INSP; RT | — |
| 13-§17-6 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §17 b6: dedupe/idempotency state; | §8.11, §12 | IDEM | — |
| 13-§17-7 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §17 b7: correction/reversal linkage; | §8.11, §12 | INSP; RT | — |
| 13-§17-8 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §17 b8: counter/operator identity where permitted; | §8.11, §12 | INSP; RT | — |
| 13-§17-9 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §17 b9: review signal and explanation; | §8.11, §12 | INSP; RT | — |
| 13-§17-10 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §17 b10: authorized human context; | §8.11, §12 | INSP; RT | — |
| 13-§17-11 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §17 b11: closing-cash inputs/results; | §8.11, §12 | INSP; RT | — |
| 13-§17-12 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §17 b12: audit history. | §8.11, §12 | INSP; RT | — |
| 13-§18-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §18 b1: No accusation from pattern alone. | §8.7, §10.3, §12 | NEG; EXP | — |
| 13-§18-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §18 b2: No punitive surveillance framing. | §8.7, §10.3, §12 | NEG; EXP | — |
| 13-§18-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §18 b3: Staff data is purpose-limited. | §8.7, §10.3, §12 | NEG; EXP | — |
| 13-§18-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §18 b4: Merchant-specific data remains business-scoped. | §8.7, §10.3, §12 | NEG; EXP | — |
| 13-§18-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §18 b5: Counter intelligence should support fair review, not hidden judgement. | §8.7, §10.2, §12 | NEG; EXP | — |
| 13-§19-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §19 b1: Business Memory; | §8.11, §10.2, §12 | INSP | — |
| 13-§19-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §19 b2: Catalog/Product identity; | §8.11, §10.2, §12 | INSP | — |
| 13-§19-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §19 b3: Inventory movements; | §8.11, §10.2, §12 | INSP | — |
| 13-§19-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §19 b4: Permission Engine; | §8.11, §10.2, §12 | INSP | — |
| 13-§19-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §19 b5: Human Language Layer; | §8.11, §10.2, §12 | INSP | — |
| 13-§19-6 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §19 b6: Ask CFO; | §8.11, §10.2, §12 | INSP | — |
| 13-§19-7 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §19 b7: Daily Intelligence; | §8.11, §10.2, §12 | INSP | — |
| 13-§19-8 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §19 b8: audit/idempotency; | §8.11, §10.2, §12 | INSP | — |
| 13-§19-9 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §19 b9: integration/extension layer; | §8.11, §10.2, §12 | INSP | — |
| 13-§19-10 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §19 b10: Notification foundation where needed. | §8.11, §10.2, §12 | INSP | — |
| 13-§20-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §20 b1: custom client-specific POS modifications in core; | §8.11, §10.3 | NEG | — |
| 13-§20-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §20 b2: replacing all POS systems; | §8.11, §10.3 | NEG | — |
| 13-§20-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §20 b3: AI fraud verdicts; | §8.11, §10.3 | NEG | — |
| 13-§20-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §20 b4: hardware/register lockout by AI judgement; | §8.11, §10.3 | NEG | — |
| 13-§20-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §20 b5: fixed historic printer-spool mechanism as Product Truth; | §8.11, §10.3 | NEG | — |
| 13-§20-6 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §20 b6: fixed universal discount threshold such as 15%; | §8.11, §10.3 | NEG | — |
| 13-§20-7 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §20 b7: CSV-only downgrade of the committed standard bridge. | §8.11, §10.3 | NEG | — |
| 13-§21-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §21 n1: Standard POS event ingests with stable external identity. | §8.12, §12, §15 | RT | — |
| 13-§21-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §21 n2: Retry/duplicate does not duplicate revenue/stock. | §8.12, §12, §15 | IDEM | — |
| 13-§21-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §21 n3: Product mapping drives valid stock movement where configured. | §8.12, §12, §15 | RT | — |
| 13-§21-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §21 n4: Unmapped/conflicting event is surfaced without guessing. | §8.12, §12, §15 | RT; NEG | — |
| 13-§21-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §21 n5: Void/discount pattern produces neutral review signal, not accusation. | §8.12, §12, §15 | RT; FRV-B | — |
| 13-§21-6 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §21 n6: Authorized human context can be added without erasing raw event. | §8.12, §12, §15 | RT | — |
| 13-§21-7 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §21 n7: Closing cash computes factual variance from approved inputs. | §8.12, §12, §15 | RT | — |
| 13-§21-8 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §21 n8: Ask CFO explains POS/closing data without write authority. | §8.12, §12, §15 | NEG | — |
| 13-§21-9 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §21 n9: Employee cannot access Owner-only risk/profit intelligence. | §8.12, §12, §15 | NEG | — |
| 13-§21-10 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §21 n10: POS outage leaves safe manual workflows available. | §8.12, §12, §15 | RT | — |
| 13-§21-11 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §21 n11: Custom integration requirement remains at extension edge. | §8.12, §12, §15 | INSP | — |
| 13-§22-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §22 b1: AI labelling counter activity theft/fraud; | §8.11, §10.3 | NEG | — |
| 13-§22-2 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §22 b2: register/keyboard lockout as AI punishment; | §8.11, §10.3 | NEG | — |
| 13-§22-3 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §22 b3: custom POS core modification; | §8.11, §10.3 | NEG | — |
| 13-§22-4 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §22 b4: historical fixed trigger thresholds; | §8.11, §10.3 | NEG | — |
| 13-§22-5 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §22 b5: printer-spool interception as mandatory implementation. | §8.11, §10.3 | NEG | — |
| 13-§22-6 | NOT APPLICABLE | SB-P-1.17 | C13@4426e8b1 | §22 p2: Preserved: standard POS bridge, respectful counter intelligence and closing-cash clarity. | §11.4 | — | — |
| 13-§23 | NOT APPLICABLE | SB-P-1.17 | C13@4426e8b1 | §23 whole section: Provenance and Hydration Coverage (p1, p2) | §11.4 | — | — |
| 13-§24-1 | IN SCOPE | SB-P-1.17 | C13@4426e8b1 | §24 p1: Complete only when the standard bridge, dedupe/audit, stock relationship, counter review si… | §8.12, §12, §15 | GATE | — |
| 17-§1-1 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §1 p1: The Operational Dashboard & Manager Workspace gives authorized users a calm visual view of… | §8.9, §15 | EXP | — |
| 17-§1-2 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §1 p2: The dashboard complements WhatsApp and the Conversation Workspace. It does not replace them… | §8.9, §10.2 | INSP | — |
| 17-§2-1 | NOT APPLICABLE | SB-P-1.17 | C17@7943f74a | §2 b1: reviewing today's sales/purchases; | §11.4 | — | — |
| 17-§2-2 | NOT APPLICABLE | SB-P-1.17 | C17@7943f74a | §2 b2: comparing trends; | §11.4 | — | — |
| 17-§2-3 | NOT APPLICABLE | SB-P-1.17 | C17@7943f74a | §2 b3: seeing stock/reorder status; | §11.4 | — | — |
| 17-§2-4 | NOT APPLICABLE | SB-P-1.17 | C17@7943f74a | §2 b4: checking staff/attendance; | §11.4 | — | — |
| 17-§2-5 | NOT APPLICABLE | SB-P-1.17 | C17@7943f74a | §2 b5: reviewing credit/payment issues; | §11.4 | — | — |
| 17-§2-6 | NOT APPLICABLE | SB-P-1.17 | C17@7943f74a | §2 b6: monitoring orders/delivery; | §11.4 | — | — |
| 17-§2-7 | NOT APPLICABLE | SB-P-1.17 | C17@7943f74a | §2 b7: seeing POS/counter/closing-cash signals; | §11.4 | — | — |
| 17-§2-8 | NOT APPLICABLE | SB-P-1.17 | C17@7943f74a | §2 b8: navigating documents, integrations and settings. | §11.4 | — | — |
| 17-§2-9 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §2 p2: The Owner/Manager needs visual clarity without being forced into a complex ERP interface. | §8.9, §10.2 | EXP | — |
| 17-§3-1 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §3 b1: Calm, simple, useful workspace. | §8.9, §10.2 | EXP; INSP | — |
| 17-§3-2 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §3 b2: Conversation-first; visual surfaces complement rather than replace conversation. | §8.9, §10.2 | EXP; INSP | — |
| 17-§3-3 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §3 b3: Role-appropriate visibility. | §8.9, §10.2 | EXP; INSP | — |
| 17-§3-4 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §3 b4: Owner intelligence protected by default. | §8.9, §10.2, §12 | EXP; INSP | — |
| 17-§3-5 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §3 b5: Same Business Memory/permissions across every surface. | §8.9, §10.2, §12 | EXP; INSP | — |
| 17-§3-6 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §3 b6: Stable/testable UI where practical. | §8.9, §10.2 | EXP; INSP | — |
| 17-§3-7 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §3 b7: No form clutter merely because backend fields exist. | §8.9, §10.2 | EXP; INSP | — |
| 17-§4-1 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §4 b1: business identity; | §8.9, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 17-§4-2 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §4 b2: transaction/business-memory views; | §8.9, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 17-§4-3 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §4 b3: credit awareness; | §8.9, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 17-§4-4 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §4 b4: document/receipt memory; | §8.9, §12 | RT | — |
| 17-§4-5 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §4 b5: reminders; | §8.9, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 17-§4-6 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §4 b6: Ask CFO access; | §8.9, §12 | RT | — |
| 17-§4-7 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §4 b7: Daily Intelligence; | §8.9, §12 | RT | — |
| 17-§4-8 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §4 b8: enabled add-ons. | §8.9, §12 | RT | — |
| 17-§4-9 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §4 b9: inventory/stock intelligence; | §8.9, §12 | RT | — |
| 17-§4-10 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §4 b10: suppliers/reorder; | §8.9, §12 | RT | — |
| 17-§4-11 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §4 b11: POS/counter intelligence; | §8.9, §12 | RT | — |
| 17-§4-12 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §4 b12: closing cash; | §8.9, §12 | RT | — |
| 17-§4-13 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §4 b13: operational trends; | §8.9, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 17-§4-14 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §4 b14: deeper role-appropriate analytics; | §8.9, §10.1, §12 | RT if adopted | 12:FR-09; 17:FPDR-7 |
| 17-§4-15 | ASSIGNED TO LATER MISSION | SB-P-1.18 | C17@7943f74a | §4 b15: staff/HR/order-delivery views when add-ons are enabled. | §11.1 | — | — |
| 17-§4-16 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §4 p4: The exact navigation may evolve; capability truth remains governed by feature contracts. | §8.9, §10.2, §12 | INSP | — |
| 17-§5-1 | DELEGATED | SB-P-1.13 | C17@7943f74a | §5 p1: Conversation Workspace is an explicit first-class app component | §11.2 | — | — |
| 17-§5-2 | DELEGATED | SB-P-1.13 | C17@7943f74a | §5 p2: must not disappear into a generic dashboard label or outage fallback | §11.2 | — | — |
| 17-§5-3 | DELEGATED | SB-P-1.13 | C17@7943f74a | §5 b1: shared user/business identity | §11.2 | — | — |
| 17-§5-4 | DELEGATED | SB-P-1.13 | C17@7943f74a | §5 b2: shared Business Memory | §11.2 | — | — |
| 17-§5-5 | DELEGATED | SB-P-1.13 | C17@7943f74a | §5 b3: shared Permission Engine | §11.2 | — | — |
| 17-§5-6 | DELEGATED | SB-P-1.13 | C17@7943f74a | §5 b4: shared Human Language Layer | §11.2 | — | — |
| 17-§5-7 | DELEGATED | SB-P-1.13 | C17@7943f74a | §5 b5: shared feature action services | §11.2 | — | — |
| 17-§5-8 | DELEGATED | SB-P-1.13 | C17@7943f74a | §5 b6: shared document/reminder/intelligence foundations | §11.2 | — | — |
| 17-§6-1 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §6 b1: today/period sales/income; | §8.9, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 17-§6-2 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §6 b2: expenses/purchases; | §8.9, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 17-§6-3 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §6 b3: outstanding credit; | §8.9, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 17-§6-4 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §6 b4: recent activity; | §8.9, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 17-§6-5 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §6 b5: payment/reconciliation state; | §8.9, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 17-§6-6 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §6 b6: relevant comparisons/trends. | §8.9, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 17-§6-7 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §6 p2: Exact metric availability depends on product plan, enabled add-ons and reliable data. | §8.9, §10.2, §12 | INSP; NEG | — |
| 17-§6-8 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §6 p3: Do not display fabricated derived metrics when underlying data is insufficient. | §8.9, §10.3, §12 | NEG | — |
| 17-§7-1 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §7 b1: inventory quantity/state; | §8.9, §12 | RT | — |
| 17-§7-2 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §7 b2: low stock; | §8.9, §12 | RT | — |
| 17-§7-3 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §7 b3: expiry/freshness where data exists; | §8.9, §12 | RT | — |
| 17-§7-4 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §7 b4: slow-moving/wastage information; | §8.9, §12 | RT | — |
| 17-§7-5 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §7 b5: supplier history/context; | §8.9, §12 | RT | — |
| 17-§7-6 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §7 b6: reorder recommendations/pending approvals; | §8.9, §12 | RT; FRV-A | — |
| 17-§7-7 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §7 b7: purchase/order follow-up. | §8.9, §12 | RT | — |
| 17-§7-8 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §7 p2: Do not create dashboard-only stock logic separate from the operational services. | §8.9, §10.3, §12 | NEG; INSP | — |
| 17-§8-1 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §8 b1: POS integration health; | §8.9, §12 | RT | — |
| 17-§8-2 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §8 b2: relevant sales/counter data; | §8.9, §12 | RT | — |
| 17-§8-3 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §8 b3: void/discount review signals; | §8.9, §12 | RT; FRV-B | — |
| 17-§8-4 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §8 b4: closing-cash inputs/results; | §8.9, §12 | RT | — |
| 17-§8-5 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §8 b5: factual variances. | §8.9, §12 | RT | — |
| 17-§8-6 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §8 p2: Signal language must remain neutral and non-accusatory. | §8.9, §10.3, §12 | NEG; EXP; FRV-B | — |
| 17-§9 | ASSIGNED TO LATER MISSION | SB-P-1.18 | C17@7943f74a | §9 whole section: Staff / HR Views (b1–b6, p2) | §11.1 | — | — |
| 17-§10 | ASSIGNED TO LATER MISSION | SB-P-1.18 | C17@7943f74a | §10 whole section: Order & Delivery Views (b1–b6, p2) | §11.1 | — | — |
| 17-§11-1 | DELEGATED | SB-P-1.15 | C17@7943f74a | §11 p1: workspace exposes Ask CFO and Daily Intelligence without separate stacks | §11.2 | — | — |
| 17-§11-2 | DELEGATED | SB-P-1.15 | C17@7943f74a | §11 p2: Ask CFO uses shared read-only business reasoning | §11.2 | — | — |
| 17-§11-3 | DELEGATED | SB-P-1.15 | C17@7943f74a | §11 p3: Daily Intelligence shows the same schedule/content truth | §11.2 | — | — |
| 17-§12-1 | DELEGATED | SB-P-1.14 | C17@7943f74a | §12 p1: browse/search permitted documents through the shared UDI/Receipt foundation | §11.2 | — | — |
| 17-§12-2 | DELEGATED | SB-P-1.14 | C17@7943f74a | §12 p2: richer visual filtering preserves the same storage/permission truth | §11.2 | — | — |
| 17-§13-1 | DELEGATED | SB-P-1.12 | C17@7943f74a | §13 p1 <Owner>: receives Owner-authorized intelligence | §11.2 | — | — |
| 17-§13-2 | DELEGATED | SB-P-1.12 | C17@7943f74a | §13 p2 <Manager>: only Owner-delegated scope; role alone grants no Owner intelligence | §11.2 | — | — |
| 17-§13-3 | DELEGATED | SB-P-1.12 | C17@7943f74a | §13 p3 <Employee>: job-specific tools and permitted self-service; no default Owner profit/Ask CFO/analytics | §11.2 | — | — |
| 17-§13-4 | DELEGATED | SB-P-1.12 | C17@7943f74a | §13 p4 <Customer/Supplier/Delivery Staff>: no general dashboard access | §11.2 | — | — |
| 17-§14-1 | DELEGATED | SB-P-1.12 | C17@7943f74a | §14 p1: role-based cards/navigation are usability, not the security boundary | §11.2 | — | — |
| 17-§14-2 | DELEGATED | SB-P-1.12 | C17@7943f74a | §14 b1: enforce authenticated user | §11.2 | — | — |
| 17-§14-3 | DELEGATED | SB-P-1.12 | C17@7943f74a | §14 b2: enforce business isolation | §11.2 | — | — |
| 17-§14-4 | DELEGATED | SB-P-1.12 | C17@7943f74a | §14 b3: enforce current role/permission | §11.2 | — | — |
| 17-§14-5 | DELEGATED | SB-P-1.12 | C17@7943f74a | §14 b4: enforce feature entitlement where relevant | §11.2 | — | — |
| 17-§14-6 | DELEGATED | SB-P-1.12 | C17@7943f74a | §14 b5: enforce object/action scope | §11.2 | — | — |
| 17-§14-7 | DELEGATED | SB-P-1.12 | C17@7943f74a | §14 p3: changing a UI component never widens backend access | §11.2 | — | — |
| 17-§15-1 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §15 p1: The dashboard should prioritize useful work rather than display every possible module equal… | §8.9, §10.2, §12 | EXP | — |
| 17-§15-2 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §15 b1: Ledger vs Manager; | §8.9, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 17-§15-3 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §15 b2: enabled add-ons; | §8.9, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 17-§15-4 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §15 b3: role; | §8.9, §12 | RT | — |
| 17-§15-5 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §15 b4: unresolved tasks/exceptions; | §8.9, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 17-§15-6 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §15 b5: merchant business type; | §8.9, §10.1, §12 | RT if adopted | 17:FPDR-7 |
| 17-§15-7 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §15 b6: recently used features. | §8.9, §10.1, §12 | EXP if adopted | 17:FPDR-7 |
| 17-§15-8 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §15 p3: Avoid manipulative engagement design or fear-based upsell. | §8.9, §10.3 | NEG; EXP | — |
| 17-§16-1 | DELEGATED | SB-P-1.12 | C17@7943f74a | §16 p1: stable IDs/test hooks — for the §13/§14 permission surface (SB-P-1.12 slice) | §11.2 | — | — |
| 17-§16-2 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §16 p1: stable IDs/test hooks — for the remaining Manager-depth workspace surface | §8.9, §10.2 | INSP | — |
| 17-§16-3 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §16 p2: testability is a product-quality rule, not a visual freeze (not rowed upstream; ordinal follows 16-2) | §8.9, §10.2 | INSP | — |
| 17-§17-1 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §17 b1: partial data-provider failure; | §8.9, §12 | RT; NEG | — |
| 17-§17-2 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §17 b2: stale query/state; | §8.9, §12 | RT; NEG | — |
| 17-§17-3 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §17 b3: permission change; | §8.9, §12 | RT; NEG | — |
| 17-§17-4 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §17 b4: feature/add-on unavailable; | §8.9, §12 | RT; NEG | — |
| 17-§17-5 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §17 b5: integration outage; | §8.9, §12 | RT; NEG | — |
| 17-§17-6 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §17 b6: empty/first-use state; | §8.9, §12 | RT; NEG | — |
| 17-§17-7 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §17 b7: conflicting data sources; | §8.9, §12 | RT; NEG | — |
| 17-§17-8 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §17 b8: failed export/download. | §8.9, §12 | RT; NEG | — |
| 17-§17-9 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §17 p2: A broken card/module must not globally blank the workspace when unrelated safe data can sti… | §8.9, §10.2, §12 | RT; NEG | — |
| 17-§18-1 | DELEGATED | SB-P-1.12 | C17@7943f74a | §18 b1: no cross-business data | §11.2 | — | — |
| 17-§18-2 | DELEGATED | SB-P-1.12 | C17@7943f74a | §18 b2: no staff access to Owner intelligence by default | §11.2 | — | — |
| 17-§18-3 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §18 b3: no routine platform/admin merchant-data browsing through dashboard shortcuts | §8.9, §10.3, §12 | NEG | — |
| 17-§18-4 | DELEGATED | SB-P-1.12 | C17@7943f74a | §18 b4: sensitive information only to roles with legitimate need | §11.2 | — | — |
| 17-§18-5 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §18 b5: dashboard activity/analytics must not become hidden employee surveillance | §8.9, §10.3, §12 | NEG; EXP | — |
| 17-§19-1 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §19 p1: Common workspace navigation/summary loads should target responsive experience consistent wi… | §8.9, §12 | RT | — |
| 17-§19-2 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §19 p2: Use caching/query optimization where safe, but never bypass authorization or show stale con… | §8.9, §10.3, §12 | NEG | — |
| 17-§20-1 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §20 b1: Business Memory; | §8.11, §10.2, §12 | INSP | — |
| 17-§20-2 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §20 b2: Permission Engine; | §8.11, §10.2, §12 | INSP | — |
| 17-§20-3 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §20 b3: Human Language Layer; | §8.11, §10.2, §12 | INSP | — |
| 17-§20-4 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §20 b4: Conversation Workspace; | §8.11, §10.2, §12 | INSP | — |
| 17-§20-5 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §20 b5: Ask CFO; | §8.11, §10.2, §12 | INSP | — |
| 17-§20-6 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §20 b6: Daily Intelligence; | §8.11, §10.2, §12 | INSP | — |
| 17-§20-7 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §20 b7: Document Intelligence; | §8.11, §10.2, §12 | INSP | — |
| 17-§20-8 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §20 b8: Reminder Engine; | §8.11, §10.2, §12 | INSP | — |
| 17-§20-9 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §20 b9: Inventory/Catalog; | §8.11, §10.2, §12 | INSP | — |
| 17-§20-10 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §20 b10: POS integration; | §8.11, §10.2, §12 | INSP | — |
| 17-§20-11 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §20 b11: shared identities; | §8.11, §10.2, §12 | INSP | — |
| 17-§20-12 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §20 b12: notification/audit foundations. | §8.11, §10.2, §12 | INSP | — |
| 17-§21-1 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §21 b1: fixed historic four-tab layout as immutable Product Truth | §8.9, §10.3 | INSP | — |
| 17-§21-2 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §21 b2: ERP-form-first experience | §8.9, §10.3 | EXP | — |
| 17-§21-3 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §21 b3: dashboard-only duplicate business logic | §8.9, §10.3 | INSP; NEG | — |
| 17-§21-4 | DELEGATED | SB-P-1.12 | C17@7943f74a | §21 b4: employee visibility into Owner-wide financial intelligence by convenience | §11.2 | — | — |
| 17-§21-5 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §21 b5: hiding Conversation Workspace as optional fallback only | §8.9, §10.3, §12 | INSP | — |
| 17-§22-1 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §22 n1: Owner sees accurate role-authorized summary from shared Business Memory | §8.12, §12, §15 | RT | — |
| 17-§22-2 | DELEGATED | SB-P-1.12 | C17@7943f74a | §22 n2: Manager sees delegated operations, not non-delegated Owner intelligence | §11.2 | — | — |
| 17-§22-3 | DELEGATED | SB-P-1.12 | C17@7943f74a | §22 n3: Employee limited to permitted operational/self-service surfaces | §11.2 | — | — |
| 17-§22-4 | DELEGATED | SB-P-1.13 | C17@7943f74a | §22 n4: dashboard and conversation show consistent underlying state | §11.2 | — | — |
| 17-§22-5 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §22 n5: stock/supplier/POS/order modules consume shared feature services | §8.12, §12, §15 | INSP; RT | — |
| 17-§22-6 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §22 n6: one integration/module failure leaves unrelated workspace functions usable | §8.12, §12, §15 | RT | — |
| 17-§22-7 | DELEGATED | SB-P-1.15 | C17@7943f74a | §22 n7: Ask CFO remains read-only | §11.2 | — | — |
| 17-§22-8 | DELEGATED | SB-P-1.13 | C17@7943f74a | §22 n8: Conversation Workspace is first-class in app navigation/experience | §11.2 | — | — |
| 17-§22-9 | DELEGATED | SB-P-1.12 | C17@7943f74a | §22 n9: cross-business access is denied server-side | §11.2 | — | — |
| 17-§22-10a | DELEGATED | SB-P-1.12 | C17@7943f74a | §22 n10: stable identifiers for critical governed flows — §13/§14 surface | §11.2 | — | — |
| 17-§22-10b | IN SCOPE | SB-P-1.17 | C17@7943f74a | §22 n10: stable identifiers for critical governed flows — Manager-depth surface | §8.12, §15 | INSP; RT | — |
| 17-§23-1 | NOT APPLICABLE | SB-P-1.17 | C17@7943f74a | §23 p1: historical UI tab layouts remain design provenance, not fixed Product Truth | §11.4 | — | — |
| 17-§23-2 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §23 b1: superseded — dashboard as a separate truth system | §8.9, §10.3 | INSP | — |
| 17-§23-3 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §23 b2: superseded — hiding Owner intelligence only in UI while backend remains open | §8.9, §10.3, §12 | NEG | — |
| 17-§23-4 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §23 b3: superseded — treating the native Conversation Workspace as non-core | §8.9, §10.3, §12 | INSP | — |
| 17-§24 | NOT APPLICABLE | SB-P-1.17 | C17@7943f74a | §24 whole section: Provenance and Hydration Coverage (p1, p2) | §11.4 | — | — |
| 17-§25-1 | IN SCOPE | SB-P-1.17 | C17@7943f74a | §25 p1: Complete only when role-aware workspace/navigation, shared-state consistency, Manager opera… | §8.12, §12, §15 | GATE | — |
| 1-§10-2 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §10 p2: Owner/authorized staff review stock/availability using current business data | §11.2 | — | — |
| 1-§10-9 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §10 p5: must not promise inventory the product cannot support with reliable data | §11.2 | — | — |
| 1-§23-7 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §23 b7: reuse inventory/catalog where available | §11.2 | — | — |
| 1-§24-3 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §24 b3: out-of-stock/substitution handling | §11.2 | — | — |
| 1-§26-5 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §26 n5: out-of-stock item → respectful substitution flow | §11.2 | — | — |
| 1-§27-8 | DELEGATED | SB-P-1.18 | C1@b392c8cb | §27 b8: dependency on Inventory/Catalog for availability-aware flows | §11.2 | — | — |
| 2-§3-5 | DELEGATED | SB-P-1.15 | C2@53635557 | §3 b4 <Owner>: ask about cash, expenses, credits, stock, supplier history, operations | §11.2 | — | — |
| 2-§5-12 | DELEGATED | SB-P-1.15 | C2@53635557 | §5.2 b9: advisory example — can I safely consider a large stock purchase? | §11.2 | — | — |
| 2-§7-10 | DELEGATED | SB-P-1.15 | C2@53635557 | §7 b6: Ask CFO must not modify stock merely because a question was asked | §11.2 | — | — |
| 2-§10-4 | DELEGATED | SB-P-1.15 | C2@53635557 | §10 b2: business context — low stock is intentional | §11.2 | — | — |
| 2-§10-6 | DELEGATED | SB-P-1.15 | C2@53635557 | §10 b4: business context — an unusual discount was authorized for a customer relationship | §11.2 | — | — |
| 2-§11-5 | DELEGATED | SB-P-1.15 | C2@53635557 | §11 b4: cross-feature intelligence over stock | §11.2 | — | — |
| 2-§11-6 | DELEGATED | SB-P-1.15 | C2@53635557 | §11 b5: cross-feature intelligence over suppliers | §11.2 | — | — |
| 2-§11-7 | DELEGATED | SB-P-1.15 | C2@53635557 | §11 b6: cross-feature intelligence over POS-connected activity | §11.2 | — | — |
| 2-§12-9 | DELEGATED | SB-P-1.15 | C2@53635557 | §12 b7 <Manager>: depth from stock intelligence | §11.2 | — | — |
| 2-§12-10 | DELEGATED | SB-P-1.15 | C2@53635557 | §12 b8 <Manager>: depth from supplier/reorder data | §11.2 | — | — |
| 2-§12-11 | DELEGATED | SB-P-1.15 | C2@53635557 | §12 b9 <Manager>: depth from POS activity | §11.2 | — | — |
| 2-§12-12 | DELEGATED | SB-P-1.15 | C2@53635557 | §12 b10 <Manager>: depth from operational dashboard data | §11.2 | — | — |
| 2-§12-13 | DELEGATED | SB-P-1.15 | C2@53635557 | §12 b11 <Manager>: deeper business analytics | §11.2 | — | — |
| 2-§12-14 | DELEGATED | SB-P-1.15 | C2@53635557 | §12 b12 <Manager>: counter activity observations | §11.2 | — | — |
| 2-§12-15 | DELEGATED | SB-P-1.15 | C2@53635557 | §12 p5: no fabricated Manager-only insight for a Ledger merchant without the data/capability | §11.2 | — | — |
| 2-§25-8 | DELEGATED | SB-P-1.15 | C2@53635557 | §25 b8: stock query when stock capability enabled | §11.2 | — | — |
| 2-§25-9 | DELEGATED | SB-P-1.15 | C2@53635557 | §25 b9: no stock fabrication when capability/data absent | §11.2 | — | — |
| 3-§3-7 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §3 b7: respectful coexistence with existing notebooks, POS and spreadsheets | §11.2 | — | — |
| 3-§7-3 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §7 clarification case: multiple plausible customers/suppliers | §11.2 | — | — |
| 3-§9-2 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §9 retrieve by customer or supplier — party/counterparty reference level | §11.2 | — | — |
| 3-§9-3 | IN SCOPE | SB-P-1.17 / SB-P-1.18 | C3@d8c26c07 | §9 retrieve by customer or supplier — structured directory-indexed identity (supplier side) | §8.3, §12 | RT | 16:FPDR-1 |
| 3-§9-9 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §9 retrieve by product or stock relationship where available | §11.2 | — | — |
| 3-§10-4 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §10 customer/supplier views (counterparty-reference level; directory form follows 3-§9-3) | §11.2 | — | — |
| 3-§11-6 | IN SCOPE | SB-P-1.16 / SB-P-1.17 / SB-P-1.18 | C3@d8c26c07 | §11 Customer/Supplier/Delivery participate only in minimum-information workflows (supplier slice) | §8.3, §12 | NEG | — |
| 3-§15-7 | IN SCOPE | SB-P-1.17 / SB-P-1.18 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Customer/Supplier identity (supplier side) | §8.3, §10.2, §12 | INSP | 16:FPDR-1 |
| 3-§15-10 | IN SCOPE | SB-P-1.17 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Stock / Supplier / Reorder Intelligence | §8.1, §10.2, §12 | INSP; IDEM | — |
| 3-§15-11 | IN SCOPE | SB-P-1.17 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: POS bridge where enabled | §8.6, §10.2, §12 | INSP; IDEM | — |
| 3-§22-1 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §22 reuse existing transaction, correction, inventory/catalog and audit foundations where aligned | §11.2 | — | — |
| 4-§3-3 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §3 b2: morning briefing — outstanding customer/supplier credit requiring awareness | §11.2 | — | — |
| 4-§3-5 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §3 b4: morning briefing — low-stock/reorder concerns | §11.2 | — | — |
| 4-§4-4 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §4 b3: pulse check — stock or order issues | §11.2 | — | — |
| 4-§4-7 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §4 b6: pulse check — Manager POS/counter signals where authorized | §11.2 | — | — |
| 4-§5-3 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §5 b2: night closing — cash/payment awareness | §11.2 | — | — |
| 4-§5-5 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §5 b4: night closing — stock/reorder issues | §11.2 | — | — |
| 4-§5-10 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §5 p3: for Manager, closing-cash/POS operational depth may be richer when enabled | §11.2 | — | — |
| 4-§6-5 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §6 b4: source-of-truth rule — Stock/Supplier/Reorder | §11.2 | — | — |
| 4-§6-6 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §6 b5: source-of-truth rule — POS/Counter Intelligence | §11.2 | — | — |
| 4-§10-8 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §10 b8: 'Possible stock risk' is not proof of a stockout | §11.2 | — | — |
| 4-§11-5 | DELEGATED | SB-P-1.15 | C4@ce940d25 | §11 b5: action continuation — review reorder suggestion | §11.2 | — | — |
| 5-§4-7 | DELEGATED | SB-P-1.14 | C5@80ac648e | §4 supported input: purchase/sales invoices | §11.2 | — | — |
| 5-§4-9 | DELEGATED | SB-P-1.14 | C5@80ac648e | §4 supported input: opening-stock documents | §11.2 | — | — |
| 5-§4-10 | IN SCOPE | SB-P-1.17 | C5@80ac648e | §4 supported input: other stock documents (stock lists) | §8.5, §12 | RT | — |
| 5-§5-1 | DELEGATED | SB-P-1.14 | C5@80ac648e | §5 receipt/bill/invoice field: merchant/supplier/customer identity where present | §11.2 | — | — |
| 5-§6-11 | DELEGATED | SB-P-1.14 | C5@80ac648e | §6 retrieve documents by linked inventory record (opening-stock slice SB-P-1.14; other stock links here) | §11.2 | — | — |
| 5-§7-3 | DELEGATED | SB-P-1.14 | C5@80ac648e | §7 example: opening-stock spreadsheet → preview → inventory update | §11.2 | — | — |
| 5-§7-4 | DELEGATED | SB-P-1.14 | C5@80ac648e | §7 example: supplier invoice → purchase/stock/ledger preparation (stock side SB-P-1.17) | §11.2 | — | — |
| 5-§18-5 | DELEGATED | SB-P-1.14 | C5@80ac648e | §18 acceptance 5: opening-stock import into shared inventory foundation | §11.2 | — | — |
| 9-§9-6 | DELEGATED | SB-P-1.13 | C9@649c55f3 | §9 clarify uncertain stock item | §11.2 | — | — |
| 9-§10-2 | DELEGATED | SB-P-1.13 | C9@649c55f3 | §10 likely spelling match must not silently merge different customers/suppliers/employees | §11.2 | — | — |
| 9-§12-8 | IN SCOPE | SB-P-1.17 | C9@649c55f3 | §12 Human Language Layer reused by Stock/Supplier/Reorder (reuse verified by consumer) | §8.10, §12 | RT | — |
| 10-§13-6 | IN SCOPE | SB-P-1.17 | C10@5c145ed7 | §13 example action: approve a reorder (execution belongs to the feature service) | §8.4, §12 | RT; FRV-A | — |
| 10-§14-3 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C10@5c145ed7 | §14 during WhatsApp failure: POS/API ingestion continues where available | §11.1 | — | — |
| 10-§17-2 | DELEGATED | SB-P-1.13 | C10@5c145ed7 | §17 clarify: ambiguous customer/supplier | §11.2 | — | — |
| 11-§4-7 | DELEGATED | SB-P-1.15 | C11@e802745a | §4 b7: reminder relates to customer/supplier/employee/document/order/credit/compliance object | §11.2 | — | — |
| 11-§8-3 | DELEGATED | SB-P-1.15 | C11@e802745a | §8 b3: cross-feature reuse — supplier/reorder follow-up | §11.2 | — | — |
| 11-§8-5 | DELEGATED | SB-P-1.15 | C11@e802745a | §8 b5: cross-feature reuse — stock/expiry review | §11.2 | — | — |
| 11-§9-2 | DELEGATED | SB-P-1.15 | C11@e802745a | §9 b2: reminder vs business event — 'supplier order was placed' is a business event | §11.2 | — | — |
| 11-§10-4 | DELEGATED | SB-P-1.15 | C11@e802745a | §10 b3: reminder → consequential action 'Approve reorder' | §11.2 | — | — |
| 11-§12-1 | DELEGATED | SB-P-1.15 | C11@e802745a | §12 p2: reorder example — low stock → suggest → Owner reviews/approves/edits/defers/cancels | §11.2 | — | — |
| 11-§12-2 | DELEGATED | SB-P-1.15 | C11@e802745a | §12 p3: automatic reorder only within a valid bounded standing rule's exact scope | §11.2 | — | — |
| 11-§12-3 | DELEGATED | SB-P-1.15 | C11@e802745a | §12 p4: a historical background trigger is not authority by itself | §11.2 | — | — |
| 11-§13-3 | DELEGATED | SB-P-1.15 | C11@e802745a | §13 p3 <Employee>: cannot create Owner-level financial/procurement automation by default | §11.2 | — | — |
| 11-§21-3 | DELEGATED | SB-P-1.15 | C11@e802745a | §21 b3: non-goal — silent financial/procurement commitments | §11.2 | — | — |
| 11-§21-5 | DELEGATED | SB-P-1.15 | C11@e802745a | §21 b5: non-goal — blind supplier orders | §11.2 | — | — |
| 12-§4-4 | IN SCOPE | SB-P-1.17 | C12@6d48feff | §4 Basic Voice supports stock/supplier/order instructions where product/role permits | §8.10, §12 | RT | — |
| 12-§7-3 | DELEGATED | SB-P-1.13 | C12@6d48feff | §7 clarify material uncertainty about customer/supplier/product identity | §11.2 | — | — |
| 12-§7-7 | IN SCOPE | SB-P-1.17 | C12@6d48feff | §7 clarify material uncertainty about order/reorder instruction | §8.4, §12 | RT | — |
| 12-§9-2 | DELEGATED | SB-P-1.13 | C12@6d48feff | §9 mixed Kerala business speech (illustrative vocabulary incl. stock, supplier, counter) | §11.2 | — | — |
| 15-§7-5 | DELEGATED | SB-P-1.16 | C15@632f3402 | §7 b5: matching uses customer/supplier/account identity | §11.2 | — | — |
| 15-§20-4 | DELEGATED | SB-P-1.16 | C15@632f3402 | §20 b4: reconciliation failure allows unrelated Ledger, inventory, orders and safe operations to continue | §11.2 | — | — |
| 15-§23-2 | DELEGATED | SB-P-1.16 | C15@632f3402 | §23 b2: reuse Customer/Supplier identity | §11.2 | — | 16:FPDR-1 |
| 18-§4-4 | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | C18@6b96b10a | §4 p2: exact prices for Voice Plus, Staff/HR, Smart Stock Assistant, Smart Order & Delivery unresolved — must not be guessed | §11.5 | — | — |
| 18-§25-2 | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | C18@6b96b10a | §25 n2: unresolved question — exact Smart Stock Assistant (and other add-on) prices | §11.5 | — | — |
| 20-§5 | ASSIGNED TO LATER MISSION | SB-P-1.19 | C20@56ed4d11 | §5 whole section: first-stage discovery incl. POS habits (b6) and stock needs (b8) | §11.1 | — | — |
| 20-§9 | ASSIGNED TO LATER MISSION | SB-P-1.19 | C20@56ed4d11 | §9 whole section: existing-data import incl. POS/catalog exports (b2) | §11.1 | — | — |
| 21-§4-2 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §4 Core Authority Model — Manager (delegated, not assumed) | §11.2 | — | — |
| 21-§4-3 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §4 — Employee (incl. operate stock/order tasks when granted) | §11.2 | — | — |
| 21-§4-4 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §4 — Supplier: purpose-limited participant in supplier/reorder workflows; no merchant BI | §11.2 | — | — |
| 21-§11-1 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §11 scoped creation (incl. stock events) preserves actor identity | §11.2 | — | — |
| 21-§11-2 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §11 create-permission ≠ read-all/edit-all/export/analytics | §11.2 | — | — |
| 21-§12-1 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §12 delegated automation — rule still enabled | §11.2 | — | — |
| 21-§12-2 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §12 — actor/business scope check | §11.2 | — | — |
| 21-§12-3 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §12 — exact target/action/limits check | §11.2 | — | — |
| 21-§12-4 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §12 — current entitlement/state check | §11.2 | — | — |
| 21-§12-5 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §12 — no revocation/permission change since grant | §11.2 | — | — |
| 21-§13-1 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §13 participation — Supplier sees only order/request details relevant to that supplier | §11.2 | — | — |
| 21-§24-3 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §24 acceptance 3: Manager sees only delegated capabilities | §11.2 | — | — |
| 21-§24-7 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §24 acceptance 7: external participant sees only own bounded workflow data | §11.2 | — | — |
| 22-§4 | DELEGATED | SB-P-1.14 | C22@61e1bb91 | §4 Business Memory Foundation incl. suppliers (b3) and inventory/catalog (b4) | §11.2 | — | — |
| 22-§5-6 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §5 shared identity foundation — supplier | §11.2 | — | — |
| 22-§11-3 | DELEGATED | SB-P-1.15 | C22@61e1bb91 | §11 b3: reminder/delegated automation reuse — supplier/reorder follow-up | §11.2 | — | — |
| 22-§15 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §15 idempotency/duplicate protection incl. POS ingestion (b2) | §11.2 | — | — |
| 22-§17-2 | IN SCOPE | SB-P-1.17 | C22@61e1bb91 | §17 b1: integration/extension adapter pattern — POS | §8.6, §10.2, §12 | INSP | — |
| 22-§25 | DELEGATED | SB-P-1.13 | C22@61e1bb91 | §25 AI orchestration reuse incl. stock/supplier/reorder (b8) | §11.2 | — | — |
| 22-§28-6 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §28 non-goal — duplicate customer/supplier identity silos | §11.2 | — | — |
| 22-§29-6 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §29 acceptance 6: customer/supplier identity not duplicated solely by channel/feature | §11.2 | — | — |
| 23-§4-4 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C23@2430e1c6 | §4 p4 <Supplier>: bounded supplier communication (purchase-request/reorder responses) via WhatsApp | §11.1 | — | — |
| 23-§10-5 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C23@2430e1c6 | §10 b4: WhatsApp text — updating stock where permitted | §11.1 | — | — |
| 23-§10-6 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C23@2430e1c6 | §10 b5: WhatsApp text — initiating reorder/order workflows | §11.1 | — | — |
| 23-§12-4 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C23@2430e1c6 | §12 b2: WhatsApp image/document — stock documents | §11.1 | — | — |
| 23-§16-5 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C23@2430e1c6 | §16 b5: outbound WhatsApp — supplier requests | §11.1 | — | — |
| 23-§19-3 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C23@2430e1c6 | §19 b1: WhatsApp delivery does not prove a supplier accepted an order | §11.1 | — | — |
| 23-§20-7 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C23@2430e1c6 | §20 b6: retry/idempotency — supplier requests | §11.1 | — | — |
| 23-§21-4 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C23@2430e1c6 | §21 b4: Meta outage — POS/API/payment reconciliation continue independently | §11.1 | — | — |
| 24-§6-2 | DELEGATED | SB-P-1.13 | C24@0c1dcbb2 | §6 distinguish intent classes (illustrative list incl. inventory/stock update, supplier/reorder action) | §11.2 | — | — |
| 24-§9-2 | DELEGATED | SB-P-1.13 | C24@0c1dcbb2 | §9 possible context sources (illustrative; incl. suppliers, inventory/catalog, POS/counter) | §11.2 | — | — |
| 24-§10-10 | DELEGATED | SB-P-1.13 | C24@0c1dcbb2 | §10 example: supplier/customer conversation must not expose internal merchant data | §11.2 | — | — |
| 24-§18-3 | IN SCOPE | SB-P-1.17 | C24@0c1dcbb2 | §18 example Stock → Reorder → Supplier → Reminder (n13–n18; n18: follow-up uses the shared Reminder Engine) | §8.4, §12, §15 | RT; FRV-A | — |
| 24-§21-3 | IN SCOPE | SB-P-1.17 | C24@0c1dcbb2 | §21 confirmation required for supplier orders | §8.4, §12 | RT; NEG | — |
| 25-§6-1 | DELEGATED | SB-P-1.14 | C25@406ce089 | §6 the storage foundation serves listed dependent features incl. Stock/Supplier/Reorder documents (b8) | §11.2 | — | — |
| BP-§3-1 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §3 core philosophy: respect existing merchant habits; enrich rather than replace; human decision ownership visible | §8.7, §10.2 | EXP | — |
| BP-§5.3-1 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §5.3 canonical vs delivery divergence: mission accounts for delivery path; merge is not production proof | §8.11, §10.2 | INSP | — |
| BP-§5.4-1 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §5.4 genuinely new external infrastructure (POS provider/adapter) needs activation, credentials, failure, rollback and verification identified | §8.6, §10.2, §12 | INSP | — |
| BP-§6.1-1 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §6.1 no UI, AI model, reminder, scheduler, document pipeline or channel may invent authority | §8.10, §10.3, §12 | NEG | — |
| BP-§6.2-1 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §6.2 consequential stock/reorder/POS/closing writes use the one Business Command path (incl. future standard POS adapters) | §8.11, §10.2, §12 | INSP; RT | — |
| BP-§6.3-1 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §6.3 Supabase/Postgres remains authoritative for structured business truth | §8.11, §10.2, §12 | INSP | — |
| BP-§6.5-1 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §6.5 supplier continuation and reorder timing reuse the one Reminder / Automation kernel | §8.4, §10.2, §12 | INSP | — |
| BP-§6.6-1 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §6.6 thin channel adapters: POS and channels adapt into Smart Business, never separate engines | §8.6, §10.2, §12 | INSP | — |
| BP-§7-1 | DELEGATED | SB-P-1.12 | BP@9dfdd924 | §7 Product & Price Master preserve list (SB-P-1.12 identifier) | §11.2 | — | — |
| BP-§7-2 | DELEGATED | SB-P-1.12 | BP@9dfdd924 | §7 preserve import foundations (SB-P-1.12 identifier) | §11.2 | — | — |
| BP-§7-3 | DELEGATED | SB-P-1.12 | BP@9dfdd924 | §7 preserve relationships needed by POS, Orders, Supplier/Reorder, UDI, Transactions, reporting | §11.2 | — | — |
| BP-§7-4 | DELEGATED | SB-P-1.12 | BP@9dfdd924 | §7 do not: independent Catalog expansion; delete valid data; collapse into Transactions; Inventory as sole commercial-identity owner | §11.2 | — | — |
| BP-§7-5 | DELEGATED | SB-P-1.12 | BP@9dfdd924 | §7 target treatment PRESERVE + EVOLVE + DEMOTE SURFACE; Product & Price Master terminology | §11.2 | — | — |
| BP-§8-1 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §8 Smart Business must work without WhatsApp: Manager Operations usable natively | §8.10, §10.2, §12 | RT | — |
| BP-§9-6 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §9 row 6: SB-P-1.17 advances Contracts 7, 13, 17 (assignment source) | §8.11, §10.2 | INSP | — |
| BP-§9-AL | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §9 assignment lock: BUILD NOW assignment changes need a recorded Founder decision | §8.11, §10.2 | INSP | — |
| BP-§10.3-S2 | IN SCOPE | SB-P-1.17 / SB-P-1.18 | BP@9dfdd924 | §10.3 structured Customer/Supplier-directory-indexed search after identities are established (supplier side) | §8.3, §12 | RT | 16:FPDR-1 |
| BP-§10.6-O | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 product outcome: useful day-to-day operational management without becoming a heavy ERP | §8.9, §15 | EXP | — |
| BP-§10.6-W1 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 required work area b1: supplier identities and supplier-product relationships | §8.3, §12 | RT | 16:FPDR-1 |
| BP-§10.6-W2 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 required work area b2: low-stock / slow-stock intelligence | §8.2, §12 | RT | — |
| BP-§10.6-W3 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 required work area b3: expiry/freshness/wastage where data supports it | §8.2, §12 | RT | — |
| BP-§10.6-W4 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 required work area b4: reorder intelligence | §8.4, §12 | RT | — |
| BP-§10.6-W5 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 required work area b5: Owner-confirmed reorder by default | §8.4, §12 | RT | — |
| BP-§10.6-W6 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 required work area b6: bounded delegated reorder where explicitly configured | §8.4, §12 | RT | — |
| BP-§10.6-W7 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 required work area b7: standard POS bridge adapters | §8.6, §10.1, §12 | RT | 17:FPDR-2 |
| BP-§10.6-W8 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 required work area b8: neutral counter review | §8.7, §12 | RT | — |
| BP-§10.6-W9 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 required work area b9: closing-cash comparison | §8.8, §12 | RT | — |
| BP-§10.6-W10 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 required work area b10: mature Manager workspace | §8.3, §12 | RT | — |
| BP-§10.6-W11 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 required work area b11: contextual Product & Price Master access | §8.1, §12 | RT | — |
| BP-§10.6-W12 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 required work area b12: opening-stock/bulk-stock intake through UDI rather than a third import stack | §8.3, §12 | RT | — |
| BP-§10.6-E1 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 Founder-approved experience p1: existing POS that works is bridged, not insulted or forcibly replaced | §8.6, §12, §15 | EXP; FRV-B | — |
| BP-§10.6-E2 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 Founder-approved experience p2: POS/counter anomalies are neutral review items, not theft/fraud accusations | §8.7, §12, §15 | EXP; FRV-B | — |
| BP-§10.6-E3 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 Founder-approved experience p3: product/price management appears where operational work needs it; no Catalog revival as competing top-level product | §8.1, §12, §15 | EXP | — |
| BP-§10.6-A1 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 Founder Scenario A clause 1: item falls below threshold | §8.12, §12, §15 | FRV-A | — |
| BP-§10.6-A2 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 Founder Scenario A clause 2: evidence-backed reorder suggestion shown | §8.12, §12, §15 | FRV-A | — |
| BP-§10.6-A3 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 Founder Scenario A clause 3: Owner confirms unless bounded delegation already authorizes it | §8.12, §12, §15 | FRV-A | — |
| BP-§10.6-A4 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 Founder Scenario A clause 4: result links to the same Product & Price Master item identity | §8.12, §12, §15 | FRV-A | — |
| BP-§10.6-B1 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 Founder Scenario B clause 1: standard POS bridge surfaces an unusual discount/counter anomaly | §8.12, §10.1, §12, §15 | FRV-B | 17:FPDR-2 |
| BP-§10.6-B2 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 Founder Scenario B clause 2: UI language remains neutral and asks for review; no accusation of staff | §8.12, §12, §15 | FRV-B | — |
| BP-§10.6-X | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §10.6 exit principle: understand the shop without replacing current tools or being accused by the software | §8.9, §15 | EXP | — |
| BP-§11-1 | DELEGATED | SB-P-1.12 | BP@9dfdd924 | §11 SB-P-1.12 Authority/Identity underpins all later role/permission behaviour | §11.2 | — | — |
| BP-§11-2 | DELEGATED | SB-P-1.13 | BP@9dfdd924 | §11 SB-P-1.13 Conversation/AI underpins multilingual conversational workflows and Voice | §11.2 | — | — |
| BP-§11-3 | DELEGATED | SB-P-1.14 | BP@9dfdd924 | §11 SB-P-1.14 Business Memory/UDI underpins onboarding imports and document inputs | §11.2 | — | — |
| BP-§11-4 | DELEGATED | SB-P-1.15 | BP@9dfdd924 | §11 SB-P-1.15 Reminder/Automation underpins supplier/reorder continuation | §11.2 | — | — |
| BP-§11-5 | DELEGATED | SB-P-1.16 | BP@9dfdd924 | §11 SB-P-1.16 Financial Integrity underpins trustworthy credit/payment behaviour (supplier-side credit direction) | §11.2 | — | — |
| BP-§11-6 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §11 SB-P-1.17 Stock/Supplier/Reorder underpins Order availability/substitution and supplier-linked workflows | §8.4, §10.2 | INSP | — |
| BP-§11-7 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §11 a later mission may complete a contract partly advanced earlier but must not claim earlier work as newly created | §8.1, §10.2 | INSP | — |
| BP-§13-1 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §13 Completion Report includes an Experience Verification Matrix seeded from §10.6 at Stage 4 | §8.11, §10.2 | GATE | — |
| BP-§13-9 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §13 item 9: §10.6 Founder Runtime Verification scenarios A and B are Founder-reserved and locked at Stage 8 | §8.11, §10.2 | GATE | — |
| BP-§14-1 | IN SCOPE | SB-P-1.17 | BP@9dfdd924 | §14 dual-intake rule: consume validated OLE learning and the Phase 1 guide until backfill verified complete | §8.11, §10.2 | INSP | — |
| BP-§15-1 | NOT APPLICABLE | SB-P-1.17 | BP@9dfdd924 | §15 unresolved Founder decision item 1: current free-trial policy | §11.4 | — | — |
| BP-§15-2 | NOT APPLICABLE | SB-P-1.17 | BP@9dfdd924 | §15 unresolved Founder decision item 2: exact Voice Plus price | §11.4 | — | — |
| BP-§15-3 | NOT APPLICABLE | SB-P-1.17 | BP@9dfdd924 | §15 unresolved Founder decision item 3: exact Staff/HR price | §11.4 | — | — |
| BP-§15-4 | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | BP@9dfdd924 | §15 unresolved Founder decision item 4: exact Smart Stock price | §11.5 | — | — |
| BP-§15-5 | NOT APPLICABLE | SB-P-1.17 | BP@9dfdd924 | §15 unresolved Founder decision item 5: exact Smart Order & Delivery price | §11.4 | — | — |
| BP-§15-6 | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | BP@9dfdd924 | §15 unresolved Founder decision item 6: exact long-term retention/deletion duration after cancellation/non-payment | §11.5 | — | — |
| BP-§15-7 | NOT APPLICABLE | SB-P-1.17 | BP@9dfdd924 | §15 unresolved Founder decision item 7: employee KYC/national-ID necessity and legal/privacy basis | §11.4 | — | — |
| BP-§15-8 | UNRESOLVED FOUNDER DECISION | SB-P-1.17 | BP@9dfdd924 | §15 unresolved Founder decision item 8: broader wholesaler/marketplace expansion | §11.5 | — | — |
| BP-§15-9 | NOT APPLICABLE | SB-P-1.17 | BP@9dfdd924 | §15 unresolved Founder decision item 9: third-party underwriting/lending ecosystem | §11.4 | — | — |
| BP-§16-1 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b1: Ask CFO as write-capable authority | §11.3 | — | — |
| BP-§16-2 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b2: AI accusation/judgment of employees or customers | §11.3 | — | — |
| BP-§16-3 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b3: continuous staff GPS surveillance by default | §11.3 | — | — |
| BP-§16-4 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b4: automated wage punishment | §11.3 | — | — |
| BP-§16-5 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b5: blind supplier procurement without valid Owner delegation | §11.3 | — | — |
| BP-§16-6 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b6: hard credit blocking by default | §11.3 | — | — |
| BP-§16-7 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b7: custom client-specific POS modification inside core | §11.3 | — | — |
| BP-§16-8 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b8: marketplace behavior inside Smart Order & Delivery | §11.3 | — | — |
| BP-§16-9 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b9: customer silence automatically invalidating otherwise sufficiently proven delivery | §11.3 | — | — |
| BP-§16-10 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b10: duplicate channel-specific Business Memory | §11.3 | — | — |
| BP-§16-11 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b11: duplicate channel-specific permission models | §11.3 | — | — |
| BP-§16-12 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b12: separate AI brains per feature/channel | §11.3 | — | — |
| BP-§16-13 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b13: model conversation history as permanent Business Memory | §11.3 | — | — |
| BP-§16-14 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b14: uncontrolled binary-media concentration in Supabase for convenience | §11.3 | — | — |
| BP-§16-15 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b15: provider URLs as permission authority/business identity | §11.3 | — | — |
| BP-§16-16 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b16: destructive subscription-driven schema creation/deletion | §11.3 | — | — |
| BP-§16-17 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b17: broad routine Super Admin access to merchant private data | §11.3 | — | — |
| BP-§16-18 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b18: revival of /survey or obsolete domains/routes | §11.3 | — | — |
| BP-§16-19 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b19: old Daily Intelligence timing that conflicts with the approved rhythm | §11.3 | — | — |
| BP-§16-20 | OUT OF BUILD SCOPE | SB-P-1.17 | BP@9dfdd924 | §16 rejection b20: independent Catalog product expansion | §11.3 | — | — |
| GPCV-§9-1 | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV@ee76d920 | §9 automatic hard customer-credit blocking by default — REJECT | §11.3 | — | — |
| GPCV-§9-2 | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV@ee76d920 | §9 AI accusation/punishment — REJECT | §11.3 | — | — |
| GPCV-§9-3 | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV@ee76d920 | §9 continuous employee GPS surveillance — REJECT | §11.3 | — | — |
| GPCV-§9-4 | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV@ee76d920 | §9 automatic wage docking/fines — REJECT | §11.3 | — | — |
| GPCV-§9-5 | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV@ee76d920 | §9 blind supplier procurement without Owner-delegated authority — REJECT | §11.3 | — | — |
| GPCV-§9-6 | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV@ee76d920 | §9 custom client-specific POS modifications inside core — REJECT | §11.3 | — | — |
| GPCV-§9-7 | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV@ee76d920 | §9 dynamic CREATE/DROP core schema by subscription state — REJECT | §11.3 | — | — |
| GPCV-§9-8 | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV@ee76d920 | §9 routine broad Super Admin access to merchant private business data — REJECT | §11.3 | — | — |
| GPCV-§9-9 | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV@ee76d920 | §9 public marketplace behavior for current Smart Order & Delivery — REJECT | §11.3 | — | — |
| GPCV-§9-10 | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV@ee76d920 | §9 embedded lending/underwriting inside current Smart Business core — REJECT FOR CURRENT CORE | §11.3 | — | — |
| GPCV-§9-11 | OUT OF BUILD SCOPE | SB-P-1.17 | GPCV@ee76d920 | §9 future wholesaler/marketplace expansion — not current core; separate Founder decision | §11.3 | — | — |
| GPCV-§11-1 | DELEGATED | SB-P-1.14 | GPCV@ee76d920 | §11 opening-stock disposition: product capability PRESERVE — STILL CURRENT / BUILD NOW | §11.2 | — | — |
| GPCV-§11-2 | IN SCOPE | SB-P-1.17 | GPCV@ee76d920 | §11 Lovable opening-stock code is reusable engineering evidence; direct promotion rejected | §8.5, §10.3, §12 | INSP | — |
| GPCV-R7 | IN SCOPE | SB-P-1.17 | GPCV@ee76d920 | §5 row 7 assignment: Stock/Supplier/Reorder — Manager core; Smart Stock add-on path for Ledger; BUILD NOW; IMPLEMENTED BUT INCOMPLETE | §8.1, §10.2 | GATE | — |
| GPCV-R13 | IN SCOPE | SB-P-1.17 | GPCV@ee76d920 | §5 row 13 assignment: POS/Counter/Closing Cash — Manager core / standard integration layer; BUILD NOW; NOT IMPLEMENTED | §8.6, §10.2 | GATE | — |
| GPCV-R17 | IN SCOPE | SB-P-1.17 | GPCV@ee76d920 | §5 row 17 assignment: Operational Dashboard & Manager Workspace — Manager core; role-appropriate Ledger surfaces; BUILD NOW; IMPLEMENTED BUT INCOMPLETE | §8.9, §10.2 | GATE | — |
