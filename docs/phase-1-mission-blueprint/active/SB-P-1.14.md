# SB-P-1.14 — Business Memory, Documents & Durable Media

## Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.14 |
| Mission Name | Business Memory, Documents & Durable Media |
| Mission Type | Product Mission — mature Ledger / Business Memory, Universal Document Intelligence, Receipt Cabinet and governed durable media foundation |
| Lifecycle Stage | Source 18 v1.2 Stage 7 — Engineering Review (Sections 20–21 drafted) |
| Status | `DRAFT FULL BLUEPRINT — SECTIONS 1–19 CANONICAL; SECTIONS 20–21 STAGE 7 DRAFT AWAITING MISSION CONTROL REVIEW AND FIVE INDEPENDENT SPECIALIST REPORTS. NOT APPROVED; NOT LOCKED.` |
| Product Authority | Founder (Riyas PK) |
| Product Discovery and Drafting | Claude Code, Stage 2–4 Definition Actor (SB-P-1.14-MC-01) |
| Lifecycle Authority | Source 18 v1.2 (`merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `0945bda60a93c99909c3b7a247d5427ebe256011`) |
| Stage 4 Authorization | SB-P-1.14-MC-05, `communication/missions/SB-P-1.14/mission-control/07-stage4-blueprint-preparation-authorization.md`, and `communication/live/instruction.md`, canonical at `main@6712fa5220731293daa0c53d9b3d7da6d52beeb8` (PR #816) |
| Governing Build Plan section | Build Plan §10.3 (`00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`, blob `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a`) |
| Primary contracts | Contract 3 (`d8c26c07`), Contract 5 (`80ac648e`), Contract 22 (`61e1bb91`), Contract 25 (`406ce089`); Global Product Completion View (`ee76d920`) |
| Canonical FCTM | `communication/missions/SB-P-1.14/claude-code/02-stage2-populated-fctm.md`, reconciled blob `01e9856aca0afdb1267230a1932fe34054449a4b` on PR #821 (becomes canonical on human merge): 766 rows — 45 `ASSIGNED TO LATER MISSION`, 104 `DELEGATED`, 563 `IN SCOPE`, 32 `NOT APPLICABLE`, 20 `OUT OF BUILD SCOPE`, 2 `UNRESOLVED FOUNDER DECISION`; 0 `ESCALATED` |
| Founder Product Decision Record | `communication/missions/SB-P-1.14/founder/02-stage3-founder-product-decision-record.md`, blob `9717b29d`, `FPDR-1` to `FPDR-3`, canonical (PR #815, `main@a719766d1d20c15437e150da66ba8778a06f773d`). Post-Stage-6 decision `FPDR-4` (B6-01): `communication/missions/SB-P-1.14/founder/03-post-stage6-founder-product-decision-record.md` (DRAFT until Mission Control review and human merge; SB-P-1.14-MC-08, MC-09). In this Blueprint an unqualified `FPDR-n` means the SB-P-1.14 decision; upstream decisions are always written `SB-P-1.13 FPDR-n` or `SB-P-1.12 FPDR-n` |
| Stage 3 gate | Triggered (T1, T2, T4, T6; T7 for `3-§9-12` only) and resolved by `FPDR-1` to `FPDR-3`; Stage 3 COMPLETE / CANONICAL (SB-P-1.14-MC-04, MC-05) |
| Upstream dependencies | SB-P-1.12 and SB-P-1.13: specification available (Blueprints and EISs `APPROVED — LOCKED`); implementation not complete (Implementation Authorization `WITHHELD`, both suspended); evidence not complete |
| Date | 2026-10-08 |
| Builder Review | COMPLETE / CANONICAL — PR #819; findings B6-01 to B6-19 accepted by Mission Control under SB-P-1.14-MC-08 |
| Engineering Review (Sections 20–21) | DRAFT — prepared under SB-P-1.14-MC-11 (PR #822); specialist-dependent findings held pending S7-SP-1 to S7-SP-5 |
| Mission Control Review | Stage 5 Sections 1–19 canonical; Stage 6 Builder Review canonical; B6-01 / `FPDR-4` reconciliation canonical (PR #821); Stage 7 review pending |
| Blueprint Lock | NOT LOCKED |

## Mission Snapshot

| Field | Summary |
|---|---|
| Product problem | The Ledger records only manual sales and purchases with a correction audit; there is no income/expense/credit/repayment model, no document interpretation beyond catalog CSV/XLSX import, no Receipt Cabinet, no durable media storage and no search (GPCV rows 3, 5, 22, 25; Delta D-01, D-04, D-06, D-09). |
| Primary users | Owner; Manager and Employee within delegated permission (Contract 3 §11, Contract 5 §12). Customers, suppliers and delivery staff have no general Ledger or document access (`3-§11-5`). |
| Build Now in this mission | Mature Ledger / Business Memory with the four states income, expense, credit and repayment by additive widening; UDI for approved image/PDF/Excel/CSV/document inputs; ambiguity handling and preview-confirm-update; Receipt Cabinet and original-proof provenance; governed media/object storage with ownership/permission metadata; correction/audit continuity; reuse of canonical parser/import/idempotency foundations; opening-stock/import convergence into UDI; human-concept search (Build Plan §10.3; 563 `IN SCOPE` rows). |
| Core boundary | This mission owns the four-state Ledger foundation, UDI, Receipt Cabinet and governed durable media. It consumes the SB-P-1.12 authority kernel and the SB-P-1.13 conversation/AI kernel, governed transaction command and attachment handoff; it builds no parallel version of either. Authoritative per-customer owed-balance truth, ageing and reconciliation are SB-P-1.16 (`FPDR-1`). |
| Assigned to later missions (Build Now, not Build Later) | 45 rows (Section 11.1): SB-P-1.15 10, SB-P-1.16 6, SB-P-1.16 / SB-P-1.17 / SB-P-1.18 1, SB-P-1.17 7, SB-P-1.17 / SB-P-1.18 3, SB-P-1.18 10, SB-P-1.19 1, SB-P-1.20 7. |
| Rejected | Direct OCR-to-production writes under uncertainty; duplicate parser or storage universes; provider URLs as identity or authority; destructive correction; historical 60-day / 180-day timers as policy; every Build Plan §16 rejection (Section 11.3). |
| Stage result sought | A Mission Control-reviewable, source-traceable Product Blueprint through Section 19, assembled by reference to the canonical 766-row FCTM and `FPDR-1` to `FPDR-3`. |

## 1. Mission Overview

### Purpose

Build Plan §10.3 product outcome: turn Smart Business into a trustworthy Business Memory that accepts the real documents merchants already use (`BP-§10.3-O`).

### Summary

The mission delivers the thirteen Build Plan §10.3 required work areas (`BP-§10.3-W1` to `-W13`) as one Business Memory (Build Plan §6.3) reached through the one Business Command path (Build Plan §6.2). Scope is the 563 `IN SCOPE` FCTM rows; the other 203 rows are accounted for in Section 11.

### Mission Philosophy

Contract 3 §3 and Contract 5 §2: respect how merchants already keep records, interpret their documents without silent corruption, keep the merchant as the decision-maker, and preserve history instead of rewriting it. Contract 25 Final Principle: structured truth and authority where Smart Business governs it; large media where dedicated object storage scales; one merchant experience.

## 2. Domain

### Business Memory, Documents and Durable Media

The mission advances Contracts 3, 5 and 25 in full and the Contract 22 obligations it touches (Build Plan §9 row 3). It inherits residual rows assigned to it by the canonical SB-P-1.12 FCTM (7 rows) and SB-P-1.13 FCTM (34 rows), expanded to obligation level (FCTM Parts C and E). It records `DELEGATED` boundary rows for 57 touched sections of 19 delegate contracts (FCTM Part G).

### Relationship to Other Domains

| Domain | Relationship | Where |
|---|---|---|
| Authority, identity, isolation (SB-P-1.12; Contract 21; Contract 22 §5, §6, §13–§15, §20, §23) | Consumed specification; no parallel model | Sections 11.2, 12 |
| Conversation, AI, Basic Voice, governed transaction command, attachment handoff (SB-P-1.13; Contracts 9, 10, 12, 24) | Consumed specification; this mission supplies the Business Memory, UDI and storage those rows wait for | Sections 8.2, 8.3, 11.2, 12 |
| Customer-credit balances, ageing, payment evidence and reconciliation (SB-P-1.16; Contracts 14, 15) | Built on this mission's credit and repayment Ledger facts (`FPDR-1`) | Sections 10.1, 11 |
| Ask CFO, Daily Intelligence, Reminder Engine, Scheduler (SB-P-1.15; Contracts 2, 4, 11; Contract 22 §18) | Later consumers; storage jobs depend on the shared Scheduler | Sections 8.5, 11, 12 |
| Supplier maturity, stock documents, POS (SB-P-1.17; Contracts 7, 13, 17) and structured Customer directory, orders, HR, Compliance (SB-P-1.18; Contracts 1, 6, 16) | Later domain adapters reuse UDI and storage | Section 11 |
| Lifecycle, export path, support completion, onboarding imports (SB-P-1.19; Contracts 18, 19, 20) | Later consumers | Section 11 |
| WhatsApp adapter (SB-P-1.20; Contract 23) | Later thin adapter; same UDI rules and storage identity | Section 11 |

## 3. Mission Objective

By mission end, subject to the dependencies in Section 12, an authorized merchant can record income, expense, credit and repayment without damage to existing sale/purchase history; can give Smart Business the receipts, invoices, photos, PDFs and spreadsheets they already use; can review and correct what was understood before anything is committed; and can later find both the business fact and the original proof under their current permission (Build Plan §10.3 outcome, Founder Runtime Scenarios A and B, exit principle).

## 4. Business Purpose

Contract 3 §2 and Contract 5 §2: merchants run their business on notebooks, paper bills, photos and spreadsheets, and need structured memory with less mental load and without silent corruption. Contract 25 §2 and §5: media volume is usage-driven and unpredictable, so binary storage must scale outside the transactional platform while Smart Business keeps authority. Build Plan §11: this mission underpins later financial integrity, Compliance documents, onboarding imports and Order/Delivery document inputs.

## 5. Product Truth Alignment

| Principle | Source | How this Blueprint carries it |
|---|---|---|
| AI Assistant, Not AI Judge | Contract 3 §3, §16; Contract 5 §13 | Sections 8.2, 8.3 |
| Merchant decision ownership; confirm consequential records | Contract 3 §3, §6; Contract 5 §3, §9 | Section 8.3; `FPDR-3` |
| Auditability instead of silent history rewriting | Contract 3 §8, §22; Contract 22 §14 | Sections 8.1, 8.3, 8.4; `FPDR-1` |
| One Business Memory, one command path | Build Plan §6.2, §6.3; Contract 22 §4 | Sections 8.1, 8.3 |
| Stored object ≠ interpreted fact ≠ confirmed record | Contract 25 §11 | Sections 8.2, 8.4 |
| Supabase/Smart Business authoritative; object storage holds bytes | Contract 25 §4, §5; Build Plan §6.3 | Section 8.5 |
| Merchant data belongs to the merchant; minimization | Contract 22 §23; Contract 25 §17 | Sections 8.5, 8.7; `FPDR-2` |

## 6. User Value

| User | Value | Source |
|---|---|---|
| Owner | Record all four business states, hand over messy documents, review before commit, and later find the fact and its proof | Build Plan §10.3 exit principle; Contract 3 §1 |
| Manager | Work with delegated Ledger records and operational documents only | Contract 3 §11; Contract 5 §12 |
| Employee | Add permitted transactions and upload permitted receipts without gaining Owner intelligence | Contract 3 §11; Contract 5 §12; Contract 21 §11 (delegated) |
| Every merchant | Existing sales and purchases stay as recorded; totals do not double count | `FPDR-1`; Build Plan §10.3 Scenario B |
| Later missions | One Business Memory, one UDI pipeline and one storage foundation to extend | Build Plan §11; Contract 22 §28 |

## 7. Core Deliverables

| Deliverable | Section | Workstream (Stage 1 register) |
|---|---|---|
| Four-state Ledger and Business Memory | 8.1 | WS-A |
| UDI intake, interpretation and domain adapters (incl. opening stock) | 8.2 | WS-B |
| Review, clarification, preview, confirmation and correction | 8.3 | WS-C |
| Receipt Cabinet, original-proof provenance and document memory | 8.4 | WS-D |
| Governed durable media / object storage and retention lifecycle | 8.5 | WS-E |
| Search, retrieval, reports and exports | 8.6 | WS-F |
| Isolation, permissions, idempotency, failure containment, untrusted input | 8.7 | WS-G |
| Platform quality, delivery accounting, dependency disclosures | 8.8 | all |
| Cross-cutting non-goals | 8.9 | all |

## 8. Detailed Functional Scope

Each subsection names the governing sources and lists every `IN SCOPE` FCTM row it realizes. Requirement text is not restated; the row pointer and its source section are the requirement. Every listed row is a design obligation for the later EIS and, where it is an acceptance or experience row, an acceptance obligation in Section 15. Rows carrying a dependency code are also governed by Section 12. Mission-design paragraphs are implementation-neutral and add no product behaviour; anything not traceable to a row is flagged in Section 18.

### 8.1 Four-State Ledger and Business Memory

Sources: Contract 3 §2–§6, §11, §12, §14, §15, §18, §19, §22; Contract 22 §4; Build Plan §6.3, §9 row 3, §10.3 work areas 1–3, engineering correction, Scenario B; `FPDR-1`.

Mission design: income, expense, credit and repayment are added by additive widening of the existing transaction foundation and its correction function, never by replacement or rewriting (`3-§22-2`, `BP-§10.3-W3`). Existing `sale` and `purchase` rows, including `sale + payment_method=credit`, keep their recorded meaning (`FPDR-1`; Delta D-01, D-20). Every reader of the Ledger shows each state truthfully; no new state may render as a purchase (Delta D-03). Merchant-visible totals count a credit sale once as the earned business event; a later repayment is settlement against the credit relationship and not new revenue (`FPDR-1`). Credit may be owed to or by a relevant party (`3-§4-3`; `FPDR-1`). A repayment may settle either a standalone credit entry or an existing or future `sale + payment_method=credit` row; linking it never rewrites, converts or duplicates that sale. A new credit sale stays one sale row and creates no separate credit row. A standalone credit entry records an owed relationship not already represented by a sale/income event and does not increase sales/income totals; a repayment never does (`FPDR-4`). All four-state writes, from forms, conversation, voice or documents, go through the one governed transaction command (`DTX`; Section 12). Authoritative per-customer owed balances are not built here (`3-§9-12`, Section 11.1).

**FCTM rows realized here (67 `IN SCOPE`):** `3-§2-2`, `3-§3`, `3-§4-1`, `3-§4-2`, `3-§4-3`, `3-§4-4`, `3-§4-5`, `3-§4-6`, `3-§5-1`, `3-§5-2`, `3-§5-3`, `3-§5-4`, `3-§5-5`, `3-§5-6`, `3-§5-10`, `3-§6-1`, `3-§6-2`, `3-§6-3`, `3-§6-4`, `3-§6-5`, `3-§6-6`, `3-§6-7`, `3-§6-8`, `3-§6-9`, `3-§6-10`, `3-§11-1`, `3-§11-2`, `3-§11-3`, `3-§11-4`, `3-§11-5`, `3-§11-7`, `3-§12-2`, `3-§12-3`, `3-§12-4`, `3-§12-5`, `3-§14-2`, `3-§15-1`, `3-§15-2`, `3-§15-3`, `3-§15-4`, `3-§15-5`, `3-§18-1`, `3-§18-2`, `3-§18-3`, `3-§18-5`, `3-§18-6`, `3-§19-1`, `3-§19-2`, `3-§19-3`, `3-§19-10`, `3-§19-11`, `3-§19-13a`, `3-§22-1`, `3-§22-2`, `22-§4-1`, `22-§4-2`, `22-§4-3`, `22-§4-4`, `BP-§6.3-1`, `BP-§9-1`, `BP-§10.3-O`, `BP-§10.3-W1`, `BP-§10.3-W2`, `BP-§10.3-W3`, `BP-§10.3-C1`, `BP-§10.3-SB1`, `BP-§10.3-SB2`.

**Of which acceptance/experience rows carried into Section 15 (13):** `3-§5-2`, `3-§5-3`, `3-§5-4`, `3-§5-5`, `3-§19-1`, `3-§19-2`, `3-§19-3`, `3-§19-10`, `3-§19-11`, `3-§19-13a`, `BP-§10.3-O`, `BP-§10.3-SB1`, `BP-§10.3-SB2`.

### 8.2 Universal Document Intelligence: Intake, Interpretation and Domain Adapters

Sources: Contract 5 §2–§5, §7, §8, §13, §14, §16, §18; Contract 22 §9; Contract 24 §5, §7, §14, §18 (inherited); Contract 9 §12 (inherited); Contract 7 §6, §15 (inherited, opening-stock slice); Contract 3 §5; Build Plan §8.4, §10.3 work areas 4, 6, 12, 13, §11.

Mission design: one shared pipeline interprets approved inputs and hands normalized proposals to destination domain adapters; each destination keeps its own permission, validation and write rules (`5-§7-8`). This mission builds the Ledger adapter and the opening-stock inventory adapter; other adapters belong to later missions (Section 11.1). The pipeline reuses the existing catalog content, size and macro checks, the parser lease and idempotency foundations, and adds no third parser stack (`5-§19-2`; Delta D-04). Interpretation output is evidence, not truth (`24-§14-1`). Document-borne text is untrusted data and never authority (`24-§22`, `21-§8`, delegated). Image, PDF and handwriting interpretation uses the SB-P-1.13 AI gateway only after its provider data-control gate (`DAI`). The existing AWS S3 staging and Lambda parser may serve only as an optional transient-processing seam, after engineering/provider review, and never as the durable store (MC-Q5).

**FCTM rows realized here (92 `IN SCOPE`):** `3-§5-7`, `3-§5-8`, `3-§5-9`, `5-§2-2`, `5-§3-1`, `5-§3-2`, `5-§3-3`, `5-§4-1`, `5-§4-2`, `5-§4-3`, `5-§4-4`, `5-§4-5`, `5-§4-6`, `5-§4-7`, `5-§4-8`, `5-§4-9`, `5-§4-14`, `5-§5-1`, `5-§5-2`, `5-§5-3`, `5-§5-4`, `5-§5-5`, `5-§5-6`, `5-§5-7`, `5-§5-8`, `5-§5-9`, `5-§7-1`, `5-§7-2`, `5-§7-3`, `5-§7-4`, `5-§7-8`, `5-§8-2`, `5-§8-3`, `5-§8-4`, `5-§13-1`, `5-§13-2`, `5-§13-3`, `5-§13-4`, `5-§13-5`, `5-§13-6`, `5-§13-7`, `5-§13-8`, `5-§13-9`, `5-§13-10`, `5-§13-11`, `5-§13-12`, `5-§14-1`, `5-§14-2`, `5-§14-3`, `5-§14-4`, `5-§14-5`, `5-§14-6`, `5-§14-7`, `5-§14-8`, `5-§16-4`, `5-§16-5`, `5-§16-7`, `5-§18-3`, `5-§18-4`, `5-§18-5`, `5-§18-8a`, `22-§9-1`, `22-§9-2`, `22-§9-3`, `22-§29-5`, `24-§5-6`, `24-§7-3`, `24-§7-4`, `24-§14-1`, `24-§14-2`, `24-§14-3`, `24-§14-4`, `24-§14-5`, `24-§14-6`, `24-§14-7`, `24-§14-8`, `24-§14-9`, `24-§18-1a`, `24-§27-5`, `24-§31-8`, `9-§12-1`, `10-§10-1`, `7-§6-2`, `7-§6-4`, `7-§6-5`, `7-§15-2a`, `BP-§8.4-1`, `BP-§10.3-W4`, `BP-§10.3-W6`, `BP-§10.3-W12`, `BP-§10.3-W13`, `BP-§11-1`.

**Of which acceptance/experience rows carried into Section 15 (11):** `5-§7-2`, `5-§7-3`, `5-§7-4`, `5-§18-3`, `5-§18-4`, `5-§18-5`, `5-§18-8a`, `22-§29-5`, `24-§18-1a`, `24-§31-8`, `7-§15-2a`.

### 8.3 Review, Clarification, Preview, Confirmation and Correction

Sources: Contract 5 §9, §10, §18; Contract 3 §7, §8, §16, §19; Contract 10 §10, §13, §17, §23 (inherited); Contract 24 §21 (inherited); Contract 12 §4 (inherited); Contract 22 §29; Build Plan §6.1, §6.2, §10.3 work areas 7 and 11, Scenario A; `FPDR-3`.

Mission design: confirmation applies to the proposed business update, not to the upload (`5-§9-9`). The merchant reviews and may correct the interpretation; the committed record is the exact reviewed interpretation (`BP-§10.3-SA1`), bound through the SB-P-1.12 confirmation binding (Section 12). Between preview and commit, a material target change re-prompts: a different counterparty, a different credit entry for a repayment (a standalone credit entry or a credit-method sale, `FPDR-4`), a different inventory item for an opening-stock line, or a newly detected duplicate with meaningful double-recording risk; internal changes that do not alter merchant-visible meaning or consequence do not (`FPDR-3`). Authority, permission and revocation revalidation at execution remain independently binding (`FPDR-3`; SB-P-1.12 EIS-CNF-02). Corrections keep the original record, values, actor, time and reason (`3-§8-*`). No AI or document path writes around the governed command or authority kernel (`BP-§6.1-1`, `BP-§6.2-1`).

**FCTM rows realized here (78 `IN SCOPE`):** `3-§7-1`, `3-§7-2`, `3-§7-3`, `3-§7-4`, `3-§7-5`, `3-§7-6`, `3-§7-7`, `3-§7-8`, `3-§7-9`, `3-§8-1`, `3-§8-2`, `3-§8-3`, `3-§8-4`, `3-§8-5`, `3-§8-6`, `3-§8-7`, `3-§8-8`, `3-§8-9`, `3-§8-10`, `3-§8-11`, `3-§8-12`, `3-§8-13`, `3-§8-14`, `3-§8-15`, `3-§8-16`, `3-§16-1`, `3-§16-2`, `3-§16-3`, `3-§16-4`, `3-§16-5`, `3-§16-6`, `3-§16-7`, `3-§16-8`, `3-§16-9`, `3-§16-10`, `3-§16-11`, `3-§16-12`, `3-§16-13`, `3-§16-14`, `3-§19-4`, `3-§19-5`, `3-§19-7`, `5-§9-1`, `5-§9-2`, `5-§9-3`, `5-§9-4`, `5-§9-5`, `5-§9-6`, `5-§9-7`, `5-§9-8`, `5-§9-9`, `5-§10-1`, `5-§10-2`, `5-§10-3`, `5-§10-4`, `5-§10-5`, `5-§10-6`, `5-§10-7`, `5-§10-8`, `5-§10-9`, `5-§10-10`, `5-§18-1`, `5-§18-2`, `22-§29-7`, `24-§21-7`, `10-§10-3`, `10-§10-4`, `10-§10-5`, `10-§13-3`, `10-§17-4`, `10-§23-3b`, `12-§4-5`, `BP-§6.1-1`, `BP-§6.2-1`, `BP-§10.3-W7`, `BP-§10.3-W11`, `BP-§10.3-SA1`, `BP-§10.3-SA2`.

**Of which acceptance/experience rows carried into Section 15 (9):** `3-§19-4`, `3-§19-5`, `3-§19-7`, `5-§18-1`, `5-§18-2`, `22-§29-7`, `10-§23-3b`, `BP-§10.3-SA1`, `BP-§10.3-SA2`.

### 8.4 Receipt Cabinet, Original-Proof Provenance and Document Memory

Sources: Contract 5 §6, §15, §18; Contract 22 §10, §29; Contract 25 §10, §11, §23; Contract 17 §12 (inherited); Contract 10 §5, §10 (inherited); Contract 3 §19; Build Plan §10.3 work areas 5 and 8, exit principle.

Mission design: originals linked to confirmed records are retained under the approved retention policy and retrievable from the linked record (`5-§6-1`, `5-§18-7`). Stored object, interpreted fact and confirmed record stay distinguishable (`25-§11-4`). The original is never altered by a correction; a replacement is a new linked version (`25-§10-12`, `25-§23-7`). Provenance records uploader/actor, channel, time, interpretation state, confirmation or rejection, destination link and audit events (`5-§15-*`, `25-§23-*`). Receipt Cabinet is a capability inside shared document memory, not a separate storage universe (`22-§10-7`).

**FCTM rows realized here (67 `IN SCOPE`):** `3-§19-9`, `5-§6-1`, `5-§6-2`, `5-§6-3`, `5-§6-4`, `5-§6-5`, `5-§6-6`, `5-§6-7`, `5-§6-8`, `5-§6-9`, `5-§6-11`, `5-§6-13`, `5-§15-1`, `5-§15-2`, `5-§15-3`, `5-§15-4`, `5-§15-5`, `5-§15-6`, `5-§15-7`, `5-§15-8`, `5-§15-9`, `5-§15-10`, `5-§15-11`, `5-§18-7`, `22-§10-1`, `22-§10-2`, `22-§10-3`, `22-§10-4`, `22-§10-5`, `22-§10-6`, `22-§10-7`, `22-§29-12`, `25-§10-1`, `25-§10-2`, `25-§10-3`, `25-§10-4`, `25-§10-5`, `25-§10-6`, `25-§10-7`, `25-§10-8`, `25-§10-9`, `25-§10-10`, `25-§10-11`, `25-§10-12`, `25-§11-1`, `25-§11-2`, `25-§11-3`, `25-§11-4`, `25-§23-1`, `25-§23-2`, `25-§23-3`, `25-§23-4`, `25-§23-5`, `25-§23-6`, `25-§23-7`, `25-§23-8`, `25-§23-9`, `25-§23-10`, `25-§23-11`, `25-§23-12`, `10-§5-10`, `10-§10-7`, `17-§12-1`, `17-§12-2`, `BP-§10.3-W5`, `BP-§10.3-W8`, `BP-§10.3-X`.

**Of which acceptance/experience rows carried into Section 15 (4):** `3-§19-9`, `5-§18-7`, `22-§29-12`, `BP-§10.3-X`.

### 8.5 Governed Durable Media / Object Storage and Retention Lifecycle

Sources: Contract 25 §4–§9, §12–§19, §21, §22, §24–§26; Contract 22 §17; Contract 5 §16; Build Plan §5.4, §6.3, §10.3 work areas 9 and 10; `FPDR-2`.

Mission design: Cloudflare R2 is the Founder-approved primary object store for eligible binary files; Supabase / Smart Business remains authoritative for ownership, actor, permissions, metadata, linkage, lifecycle, retention state, retrieval authorization and audit (`25-§4-*`, `25-§5-1`). Its activation, credentials, failure behaviour, rollback and verification are a separate environment gate (`BP-§5.4-1`; `DR2`); no provider is activated by this Blueprint. Internal object identity is provider-independent; provider keys and URLs are infrastructure details and never authority (`25-§14-1`, `25-§15-*`). Ingest is not complete until the authoritative metadata and linkage exist (`25-§8-11`). Lifecycle transitions are non-destructive by default; deletion is deliberate, permission-controlled and audited (`25-§17-3`). Retention follows `FPDR-2`: unconfirmed originals (rejected, abandoned or expired) remain only for a short, bounded operational grace period for retry/recovery, dispute handling or security investigation and are then discarded unless an approved legal/hold basis applies; that duration is a configuration detail, not a legal retention period. Raw voice audio is not durably retained by default; durable raw-audio retention needs a separately approved product purpose. No legal retention period is stated in this Blueprint (`DLEG`; Section 12.3). Orphan detection, reconciliation and lifecycle jobs are specified here as requirements and interfaces; scheduled execution depends on the shared SB-P-1.15 Scheduler, and on-demand/manual-safe execution is used only where approved behaviour needs no background timing. No feature-specific scheduler is built (MC-Q4; `22-§28-4`).

**FCTM rows realized here (114 `IN SCOPE`):** `5-§16-2`, `5-§16-3`, `22-§17-1`, `22-§17-7`, `25-§4-1`, `25-§4-2`, `25-§4-3`, `25-§4-4`, `25-§4-5`, `25-§4-6`, `25-§4-7`, `25-§4-8`, `25-§4-9`, `25-§4-10`, `25-§4-11`, `25-§4-12`, `25-§5-1`, `25-§5-2`, `25-§6-1`, `25-§6-2`, `25-§7-1`, `25-§7-2`, `25-§8-1`, `25-§8-2`, `25-§8-3`, `25-§8-4`, `25-§8-5`, `25-§8-6`, `25-§8-7`, `25-§8-8`, `25-§8-9`, `25-§8-10`, `25-§8-11`, `25-§9-1`, `25-§9-2`, `25-§9-3`, `25-§9-4`, `25-§9-5`, `25-§9-6`, `25-§9-7`, `25-§9-8`, `25-§12-1`, `25-§12-2`, `25-§12-3`, `25-§13-1a`, `25-§13-2`, `25-§13-3`, `25-§14-1`, `25-§14-2`, `25-§14-3`, `25-§14-4`, `25-§14-5`, `25-§14-6`, `25-§14-7`, `25-§15-1`, `25-§15-2`, `25-§15-3`, `25-§15-4`, `25-§16-1`, `25-§16-2`, `25-§16-3`, `25-§17-2`, `25-§17-3`, `25-§17-4`, `25-§17-5`, `25-§17-6`, `25-§17-7`, `25-§18-1`, `25-§18-2`, `25-§18-3`, `25-§19-1`, `25-§19-2`, `25-§19-3`, `25-§19-4`, `25-§19-5`, `25-§19-6`, `25-§19-7`, `25-§19-8`, `25-§21-1`, `25-§21-2`, `25-§21-3`, `25-§21-4`, `25-§21-5`, `25-§22-1`, `25-§22-2`, `25-§22-3`, `25-§22-4`, `25-§22-5`, `25-§22-6`, `25-§24-1`, `25-§24-2`, `25-§24-3`, `25-§25-1`, `25-§25-2`, `25-§25-3`, `25-§25-4`, `25-§26-1`, `25-§26-2`, `25-§26-3`, `25-§26-4a`, `25-§26-5`, `25-§26-6`, `25-§26-7`, `25-§26-8`, `25-§26-9`, `25-§26-10`, `25-§26-11`, `25-§26-12`, `25-§26-13`, `25-§26-14`, `BP-§5.4-1`, `BP-§6.3-2`, `BP-§10.3-W9`, `BP-§10.3-W10`.

**Of which acceptance/experience rows carried into Section 15 (14):** `25-§26-1`, `25-§26-2`, `25-§26-3`, `25-§26-4a`, `25-§26-5`, `25-§26-6`, `25-§26-7`, `25-§26-8`, `25-§26-9`, `25-§26-10`, `25-§26-11`, `25-§26-12`, `25-§26-13`, `25-§26-14`.

### 8.6 Search, Retrieval, Reports and Exports

Sources: Contract 3 §9, §10, §19; Build Plan §10.3 search sequencing.

Mission design: retrieval uses the human concepts available now: period, counterparty reference, purpose/description, amount, payment method, document and linked record, through one permission-scoped query layer shared by conversation and visual surfaces (`3-§9-14`, `BP-§10.3-S1`). Underlying credit and repayment entries are retrievable by counterparty or reference (`3-§9-7`; `FPDR-1`) without presenting an authoritative customer balance (`3-§9-12`, SB-P-1.16). Structured directory-indexed search is later (`3-§9-3`, `BP-§10.3-S2`). Credit/repayment retrieval and views cover both standalone credit entries and credit-method sales with their linked repayments (`3-§9-7`, `3-§10-5`; `FPDR-4`). Summaries and CSV/Excel/PDF exports come from the same truth and follow the `FPDR-1` and `FPDR-4` totals rules (`3-§10-9`).

**FCTM rows realized here (24 `IN SCOPE`):** `3-§9-1`, `3-§9-2`, `3-§9-4`, `3-§9-5`, `3-§9-6`, `3-§9-7`, `3-§9-8`, `3-§9-9`, `3-§9-10`, `3-§9-11`, `3-§9-13`, `3-§9-14`, `3-§10-1`, `3-§10-2`, `3-§10-3`, `3-§10-4`, `3-§10-5`, `3-§10-6`, `3-§10-7`, `3-§10-8`, `3-§10-9`, `3-§19-8`, `3-§19-12`, `BP-§10.3-S1`.

**Of which acceptance/experience rows carried into Section 15 (5):** `3-§9-10`, `3-§9-11`, `3-§9-13`, `3-§19-8`, `3-§19-12`.

### 8.7 Isolation, Permissions, Idempotency, Failure Containment and Untrusted Input

Sources: Contract 3 §17, §18, §19; Contract 5 §11, §12, §16, §17, §18; Contract 25 §20; Contract 22 §19, §23, §29; Contract 24 §23 (inherited).

Mission design: every Ledger record, document and stored object is business-scoped through the SB-P-1.12 kernel, including files and exports (SB-P-1.12 EIS-ISO-05); create does not imply read-all, edit-all or export (`21-§11`, delegated). Retrieval is decided by current permission at request time and revocation is honoured (`25-§19-7`, `25-§26-11`). Retries, re-uploads, parser replays and cross-channel arrivals create no duplicate business event; duplicate-content detection is business-scoped only (`5-§11-*`, `25-§14-*`). Malformed, unsupported or unsafe files fail clearly without affecting unrelated work, and a parser failure never leaves a partially trusted record (`5-§17-*`). Storage or AI provider outage is contained and surfaced; no durable-storage success is claimed while object and metadata disagree (`25-§20-*`, `22-§19-*`).

**FCTM rows realized here (71 `IN SCOPE`):** `3-§17-1`, `3-§17-2`, `3-§17-3`, `3-§17-4`, `3-§17-5`, `3-§17-6`, `3-§17-7`, `3-§17-8`, `3-§17-9`, `3-§17-10`, `3-§17-11`, `3-§19-6`, `3-§19-14`, `5-§11-1`, `5-§11-2`, `5-§11-3`, `5-§11-4`, `5-§11-5`, `5-§12-1`, `5-§12-2`, `5-§12-3`, `5-§12-4`, `5-§12-5`, `5-§12-6`, `5-§16-1`, `5-§16-6`, `5-§17-1`, `5-§17-2`, `5-§17-3`, `5-§17-4`, `5-§17-5`, `5-§17-6`, `5-§17-7`, `5-§17-8`, `5-§17-9`, `5-§17-10`, `5-§17-11`, `5-§18-6`, `5-§18-9`, `5-§18-10`, `5-§18-11`, `22-§19-1`, `22-§19-2`, `22-§19-3`, `22-§19-4`, `22-§19-5`, `22-§19-6`, `22-§19-7`, `22-§23-2`, `22-§23-3`, `22-§23-5`, `22-§23-7`, `22-§29-3`, `22-§29-8`, `22-§29-10`, `22-§29-13`, `25-§20-1`, `25-§20-2`, `25-§20-3`, `25-§20-4`, `25-§20-5`, `25-§20-6`, `25-§20-7`, `25-§20-8`, `25-§20-9`, `25-§20-10`, `25-§20-11`, `25-§20-12`, `25-§20-13`, `25-§20-14`, `24-§23-6`.

**Of which acceptance/experience rows carried into Section 15 (10):** `3-§19-6`, `3-§19-14`, `5-§18-6`, `5-§18-9`, `5-§18-10`, `5-§18-11`, `22-§29-3`, `22-§29-8`, `22-§29-10`, `22-§29-13`.

### 8.8 Platform Quality, Delivery Accounting and Dependency-Rule Disclosures

Sources: Contract 22 §21, §22, §27, §29; Build Plan §5.3, §11, §13.

Mission design: deterministic tests for financial and permission rules include a pre-widening regression baseline of existing sale/purchase behaviour (Delta D-13). The mission declares its delivery needs (canonical vs delivery repository, migrations, production verification) in the later early delivery plan; production, migration and delivery remain `NOT AUTHORIZED` (SB-P-1.14-MC-01 §3). It does not claim SB-P-1.9A or SB-P-1.11 foundations as newly created (`BP-§11-2`).

**FCTM rows realized here (20 `IN SCOPE`):** `22-§21`, `22-§22-1`, `22-§22-2`, `22-§22-3`, `22-§22-4`, `22-§22-5`, `22-§22-6`, `22-§27-1`, `22-§27-2`, `22-§27-3`, `22-§27-4`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§27-8`, `22-§29-14`, `BP-§5.3-1`, `BP-§11-2`, `BP-§11-3`, `BP-§13-1`.

**Of which acceptance/experience rows carried into Section 15 (1):** `22-§29-14`.

### 8.9 Cross-Cutting Non-Goals

Sources: Contract 3 §20; Contract 5 §19; Contract 22 §17, §28; Contract 25 §27.

**FCTM rows realized here (30 `IN SCOPE`):** `3-§20-1`, `3-§20-2`, `3-§20-3`, `3-§20-4`, `3-§20-5`, `3-§20-6`, `5-§19-1`, `5-§19-2`, `5-§19-3`, `5-§19-4`, `5-§19-5`, `22-§17-9`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§28-7`, `22-§28-8`, `22-§28-9`, `22-§28-10`, `25-§27-1`, `25-§27-2`, `25-§27-3`, `25-§27-4`, `25-§27-5`, `25-§27-6`, `25-§27-7`, `25-§27-8`.

## 9. UI / UX Expectations

By reference, not new design: the Ledger shows each of the four states truthfully and calmly, with no state rendered as another (`3-§6-*`; Delta D-03). Document review shows the recognized type, key fields, line items, destination, fields needing confirmation, possible duplicates and unreadable-content warnings (`5-§9-2` to `-8`). Clarification asks the smallest useful question (`3-§7-1`, `5-§3-3`). A material target change re-prompts with the change made visible (`FPDR-3`). Denials leak no protected content (`21-§20`, delegated). The visual workspace may filter documents richly while keeping the same storage and permission truth as conversation (`17-§12-2`). Structured pages remain available alongside conversation (SB-P-1.13). Concrete screens, copy and layouts belong to later stages.

## 10. Business Rules

### 10.1 Founder decisions (canonical wording preserved)

The following are reproduced from `founder/02-stage3-founder-product-decision-record.md` without change of meaning.

**FPDR-1 — Four-state Ledger / customer-credit boundary.** Founder approves:

- SB-P-1.14 owns the four Ledger states: **income, expense, credit and repayment**;
- existing `sale + payment_method=credit` rows remain sales and are not destructively rewritten or silently reinterpreted as the new `credit` state;
- SB-P-1.14 may record and retrieve credit/repayment Ledger facts, including amounts owed **to or by** a relevant party;
- authoritative customer-credit balance truth — including the exact answer to “What does Shameer still owe me?” — matures in SB-P-1.16 with customer-credit-specific records, balances, ageing and reconciliation;
- SB-P-1.14 may still retrieve the underlying credit and repayment entries by counterparty/reference without claiming that later authoritative customer-balance layer;
- merchant-visible totals must not double count: a credit sale counts once as the sale/earned business event; a later repayment is settlement/cash movement against the credit relationship and is not new revenue.

T7 effect: `3-§9-12` authoritative per-customer owed-balance truth is **ASSIGNED TO LATER MISSION — SB-P-1.16**; the rest of the four-state Ledger foundation remains in SB-P-1.14; no historical sale/purchase row is reassigned or rewritten.

**FPDR-2 — Minimum retention for unconfirmed originals and raw voice.** Founder approves:

- rejected, abandoned or expired uploads that never become confirmed business records are not kept indefinitely;
- they may remain only for a **short, bounded operational grace period** needed for active retry/recovery, dispute handling or security investigation, after which they are discarded unless another already-approved legal/hold obligation requires otherwise;
- the exact bounded operational duration is not a legal retention period and may be specified later in the EIS/configuration subject to privacy minimization;
- raw voice audio is **not durably retained by default**, even after governed object storage exists;
- transcript/structured meaning, resulting business records and required audit/provenance may persist under their own approved policies;
- durable raw-audio retention requires a separately justified, explicit approved product purpose; cheap storage is never sufficient justification.

This decision does not determine any long-term statutory or post-cancellation retention duration.

**FPDR-3 — Material changed-target re-prompt rule.** Founder approves:

- after preview and before commit, Smart Business must re-prompt when the resolved target changes in a way that could alter the merchant's intended business meaning or consequence;
- material target changes include, as applicable: a different customer, supplier or other counterparty; a different credit entry selected for a repayment; a different inventory item selected for an opening-stock line; a newly detected duplicate candidate that creates a meaningful risk of double recording;
- internal changes that do not alter the merchant-visible business meaning or consequence do **not** force another confirmation merely because implementation state changed;
- authority, permission and revocation checks remain independently binding under SB-P-1.12 and can still block execution even when the target itself did not materially change.

**FPDR-4 — Repayment targets and credit representation (post-Stage-6, B6-01).** Founder approves:

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

Rows carrying an SB-P-1.14 Founder decision (35): `3-§4-3` (FPDR-1/FPDR-4), `3-§4-4` (FPDR-1/FPDR-4), `3-§5-4` (FPDR-1/FPDR-4), `3-§5-5` (FPDR-1/FPDR-4), `3-§6-8` (FPDR-1/FPDR-4), `3-§7-4` (FPDR-1), `3-§8-8` (FPDR-1/FPDR-4), `3-§9-7` (FPDR-1/FPDR-4), `3-§9-12` (FPDR-1), `3-§10-5` (FPDR-1/FPDR-4), `3-§19-2` (FPDR-1/FPDR-4), `5-§6-1` (FPDR-2), `5-§16-3` (FPDR-2), `22-§10-5` (FPDR-2), `22-§13-4` (FPDR-3), `25-§12-1` (FPDR-2), `25-§12-3` (FPDR-2), `25-§17-6` (FPDR-2), `25-§26-12` (FPDR-2), `BP-§9-2` (FPDR-1), `BP-§10.3-W2` (FPDR-1/FPDR-4), `BP-§10.3-C2` (FPDR-1), `BP-§10.3-SA2` (FPDR-3/FPDR-4), `BP-§10.3-SB1` (FPDR-1/FPDR-4), `BP-§10.3-SB2` (FPDR-1/FPDR-4), `21-§18` (FPDR-3), `12-§15` (FPDR-2), `9-§9` (FPDR-1), `14-§4` (FPDR-1), `14-§5` (FPDR-1), `14-§6` (FPDR-1), `14-§7` (FPDR-1), `14-§21` (FPDR-1), `14-§22` (FPDR-1), `17-§6` (FPDR-1).

Upstream Founder decisions consumed, unchanged: SB-P-1.13 `FPDR-1` (governed create-transaction command for existing types), `FPDR-2` (Basic Voice credit/repayment waits for this mission), `FPDR-3` (raw voice transient before this mission; now governed by SB-P-1.14 `FPDR-2`), `FPDR-5` (existing credit-payment-method sales; no mature credit state in SB-P-1.13); SB-P-1.12 Founder Record 04 F-04(c) (multi-row import under revocation) and Founder Record 06 (legal validation deferral).

### 10.2 Standing rules by reference

| Rule | Source |
|---|---|
| Extend, do not destructively replace, transaction/correction/audit foundations | Contract 3 §22 |
| No second protected transaction-write path; all Ledger writes through the one governed command | Build Plan §6.2; SB-P-1.13 EIS13-CMD-02; SB-P-1.13 resume register §D |
| No temporary parallel authority or permission model | SB-P-1.12 EIS §19.5 (EIS-DEP-01) |
| Document/AI interpretation is evidence, never authority | Contract 5 §13; Contract 24 §14; Build Plan §6.1 |
| No feature-specific scheduler; scheduled storage jobs depend on SB-P-1.15 | Contract 22 §18, §28; MC-Q4 |
| AWS S3 staging is at most an optional transient seam | MC-Q5; Contract 25 §11, §27 |
| No legal retention period invented | Contract 25 §17; Contract 22 §33.7; SB-P-1.12 Founder Record 06 |
| Migration presence is not migration authority | `docs/migration/README.md`; Phase 1 guide §11 |

### 10.3 Must-not rows

96 `IN SCOPE` must-not rows, each checked as "must not appear" in this mission's deliverable: `3-§2-2`, `3-§4-5`, `3-§5-9`, `3-§6-10`, `3-§7-9`, `3-§8-16`, `3-§10-9`, `3-§11-4`, `3-§11-5`, `3-§12-4`, `3-§16-8`, `3-§16-9`, `3-§16-10`, `3-§16-11`, `3-§16-12`, `3-§16-13`, `3-§16-14`, `3-§18-5`, `3-§18-6`, `3-§20-1`, `3-§20-2`, `3-§20-3`, `3-§20-4`, `3-§20-5`, `3-§20-6`, `5-§2-2`, `5-§5-9`, `5-§6-13`, `5-§8-4`, `5-§12-5`, `5-§12-6`, `5-§13-8`, `5-§13-9`, `5-§13-10`, `5-§13-11`, `5-§13-12`, `5-§14-8`, `5-§16-6`, `5-§16-7`, `5-§17-11`, `5-§19-1`, `5-§19-2`, `5-§19-3`, `5-§19-4`, `5-§19-5`, `22-§4-4`, `22-§9-3`, `22-§10-7`, `22-§17-9`, `22-§22-6`, `22-§23-2`, `22-§23-3`, `22-§23-5`, `22-§23-7`, `22-§27-8`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§28-7`, `22-§28-8`, `22-§28-9`, `22-§28-10`, `25-§4-12`, `25-§8-11`, `25-§10-1`, `25-§11-2`, `25-§12-3`, `25-§13-2`, `25-§14-7`, `25-§15-3`, `25-§16-3`, `25-§17-4`, `25-§17-7`, `25-§18-3`, `25-§19-2`, `25-§19-3`, `25-§19-6`, `25-§20-14`, `25-§21-5`, `25-§24-3`, `25-§25-3`, `25-§25-4`, `25-§27-1`, `25-§27-2`, `25-§27-3`, `25-§27-4`, `25-§27-5`, `25-§27-6`, `25-§27-7`, `25-§27-8`, `24-§14-9`, `7-§6-5`, `BP-§6.1-1`.

## 11. Out of Scope

This section accounts for every FCTM row that is not `IN SCOPE`: 45 `ASSIGNED TO LATER MISSION`, 104 `DELEGATED`, 20 `OUT OF BUILD SCOPE`, 32 `NOT APPLICABLE` and 2 `UNRESOLVED FOUNDER DECISION` — 203 rows. Dispositions, receiving or owning missions, build commitments and commercial classifications are copied from the canonical FCTM without change. No `BUILD NOW` row becomes `BUILD LATER`. Nothing listed here is built in this mission as hidden scope.

### 11.1 Assigned to later missions — still committed, not in this mission (45 rows)

Each row keeps its approved build commitment and commercial classification. Assignment is mission scheduling, not `BUILD LATER` (Build Plan §9 vocabulary). Distribution: SB-P-1.15 10, SB-P-1.16 6, SB-P-1.16 / SB-P-1.17 / SB-P-1.18 1, SB-P-1.17 7, SB-P-1.17 / SB-P-1.18 3, SB-P-1.18 10, SB-P-1.19 1, SB-P-1.20 7. `3-§9-12` is SB-P-1.16 by `FPDR-1` and does not re-enter this mission through any other section.

#### `SB-P-1.15` (10 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Receiving mission | Citation |
|---|---|---|---|---|---|---|
| `3-§13-1` | C3@d8c26c07 §13 | §13 Ask CFO reads authorized Ledger information | BUILD NOW | CORE-LM | SB-P-1.15 | A-BP104 |
| `3-§13-2` | C3@d8c26c07 §13 | §13 Ask CFO remains read-only intelligence | BUILD NOW | CORE-LM | SB-P-1.15 | A-BP104 |
| `3-§13-3` | C3@d8c26c07 §13 | §13 Ask CFO continuation into action passes through execution/confirmation service | BUILD NOW | CORE-LM | SB-P-1.15 | A-BP104 |
| `3-§14-1` | C3@d8c26c07 §14 | §14 Daily Intelligence consumes authorized Ledger events at 7:00 / 10:30 / 22:00 | BUILD NOW | CORE-LM | SB-P-1.15 | A-BP104 |
| `3-§15-6` | C3@d8c26c07 §15 | §15 Ledger integrates with, rather than duplicates: Smart Reminder Engine | BUILD NOW | CORE-LM | SB-P-1.15 | A-BP104 |
| `22-§11` | C22@61e1bb91 §11 | §11 Reminder / Delegated Automation Foundation (whole section) | BUILD NOW | CORE-ARCH | SB-P-1.15 | I-12; A-BP104 |
| `22-§12` | C22@61e1bb91 §12 | §12 Notification Foundation (whole section) | BUILD NOW | CORE-ARCH | SB-P-1.15 | I-12 (22-§12-1 to -9); A-FPDR12-1 |
| `22-§18` | C22@61e1bb91 §18 | §18 Scheduler / Background Job Foundation (whole section; this mission's retention/cleanup and reconciliation jobs consume it, DC-15) | BUILD NOW | CORE-ARCH | SB-P-1.15 | I-12; A-BP104 |
| `22-§29-4` | C22@61e1bb91 §29 | §29 acceptance 4: multiple features reuse one Reminder Engine | BUILD NOW | CORE-ARCH | SB-P-1.15 | I-12; A-BP104 |
| `24-§18-1b` | C24@0c1dcbb2 §18 | §18 example: steps 5–6 (Ask CFO reasons over the event; Daily Intelligence includes impact) | BUILD NOW | CORE-INT | SB-P-1.15 | I-13 (secondary SB-P-1.15); A-BP104 |

#### `SB-P-1.16` (6 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Receiving mission | Citation |
|---|---|---|---|---|---|---|
| `3-§9-12` | C3@d8c26c07 §9 | §9 example: what does Shameer still owe me (authoritative customer owed-balance truth) | BUILD NOW | CORE-LM | SB-P-1.16 | A-BP105; FPDR-1 T7 reconciliation; SB-P-1.14 may retrieve underlying credit/repayment entries but does not claim authoritative customer balance truth; FPDR-1 |
| `3-§15-8` | C3@d8c26c07 §15 | §15 Ledger integrates with, rather than duplicates: Smart Credit Awareness | BUILD NOW | CORE-LM | SB-P-1.16 | A-BP103-C; A-BP105 |
| `3-§15-9` | C3@d8c26c07 §15 | §15 Ledger integrates with, rather than duplicates: Payment Verification / Bank Reconciliation | BUILD NOW | CORE-LM | SB-P-1.16 | A-BP105 |
| `22-§17-3` | C22@61e1bb91 §17 | §17 adapter pattern: payment/bank providers | BUILD NOW | CORE-ARCH | SB-P-1.16 | A-BP105 |
| `BP-§9-2` | BP@9dfdd924 §9 | §9 row 5: SB-P-1.16 advances 'Contract 3 completion' (assignment source for the credit-specific residual) | BUILD NOW | per contract | SB-P-1.16 | BP §9 row 5; A-BP103-C; FPDR-1 |
| `BP-§10.3-C2` | BP@9dfdd924 §10.3 | §10.3 engineering correction: SB-P-1.16 builds customer-credit-specific structures and financial integrity on top of the mature Ledger | BUILD NOW | per contract | SB-P-1.16 | A-BP103-C; A-BP105; FPDR-1 |

#### `SB-P-1.16 / SB-P-1.17 / SB-P-1.18` (1 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Receiving mission | Citation |
|---|---|---|---|---|---|---|
| `3-§11-6` | C3@d8c26c07 §11 | §11 Customer/Supplier/Delivery participate only in specific minimum-information workflows | BUILD NOW | CORE-LM | SB-P-1.16 / SB-P-1.17 / SB-P-1.18 | A-BP105; A-BP106; A-BP107 (the workflows); C21 §13 (SB-P-1.12) |

#### `SB-P-1.17` (7 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Receiving mission | Citation |
|---|---|---|---|---|---|---|
| `3-§15-10` | C3@d8c26c07 §15 | §15 Ledger integrates with, rather than duplicates: Stock / Supplier / Reorder Intelligence | BUILD NOW | CORE-LM | SB-P-1.17 | A-BP106; opening-stock convergence is rowed at 5-§18-5 and 7-§6-2 |
| `3-§15-11` | C3@d8c26c07 §15 | §15 Ledger integrates with, rather than duplicates: POS bridge where enabled | BUILD NOW | CORE-LM | SB-P-1.17 | A-BP106 |
| `5-§4-10` | C5@80ac648e §4 | §4 supported input: other stock documents (stock lists) | BUILD NOW | CORE-FDN | SB-P-1.17 | A-BP106; C7 §6; I-12 (7-§6 'SB-P-1.17/SB-P-1.14') |
| `22-§17-2` | C22@61e1bb91 §17 | §17 adapter pattern: POS | BUILD NOW | CORE-ARCH | SB-P-1.17 | A-BP106 |
| `7-§6-1` | C7@65ad91b2 §6 | §6 stock lists reuse UDI | BUILD NOW | MGR/ADDON | SB-P-1.17 | I-12 (7-§6 'SB-P-1.17/SB-P-1.14'; split here); A-BP106 |
| `7-§6-3` | C7@65ad91b2 §6 | §6 supplier invoices reuse UDI (inventory side; Ledger purchase side is 5-§7-4) | BUILD NOW | MGR/ADDON | SB-P-1.17 | I-12; A-BP106 |
| `7-§15-2b` | C7@65ad91b2 §15 | §15 scenario 2 (other stock documents): document/CSV import with preview and idempotency | BUILD NOW | MGR/ADDON | SB-P-1.17 | I-12; A-BP106 |

#### `SB-P-1.17 / SB-P-1.18` (3 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Receiving mission | Citation |
|---|---|---|---|---|---|---|
| `3-§9-3` | C3@d8c26c07 §9 | §9 retrieve by customer or supplier — structured directory-indexed identity | BUILD NOW | CORE-LM | SB-P-1.17 / SB-P-1.18 | A-BP103-S (SB-P-1.17 / SB-P-1.18) |
| `3-§15-7` | C3@d8c26c07 §15 | §15 Ledger integrates with, rather than duplicates: Customer/Supplier identity | BUILD NOW | CORE-LM | SB-P-1.17 / SB-P-1.18 | A-BP103-S (SB-P-1.17 / SB-P-1.18) |
| `BP-§10.3-S2` | BP@9dfdd924 §10.3 | §10.3 structured Customer/Supplier-directory-indexed search after identities are established | BUILD NOW | per contract | SB-P-1.17 / SB-P-1.18 | A-BP103-S |

#### `SB-P-1.18` (10 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Receiving mission | Citation |
|---|---|---|---|---|---|---|
| `3-§15-12` | C3@d8c26c07 §15 | §15 Ledger integrates with, rather than duplicates: Smart Order & Delivery | BUILD NOW | CORE-LM | SB-P-1.18 | A-BP107 |
| `3-§15-13` | C3@d8c26c07 §15 | §15 Ledger integrates with, rather than duplicates: Staff / HR where authorized | BUILD NOW | CORE-LM | SB-P-1.18 | A-BP107 |
| `5-§4-11` | C5@80ac648e §4 | §4 supported input: roster/attendance-related documents | BUILD NOW | CORE-FDN | SB-P-1.18 | A-BP107; C6 §6 |
| `5-§4-12` | C5@80ac648e §4 | §4 supported input: customer/order lists | BUILD NOW | CORE-FDN | SB-P-1.18 | A-BP107; C1 §6, §8 |
| `5-§4-13` | C5@80ac648e §4 | §4 supported input: compliance/licence documents | BUILD NOW | CORE-FDN | SB-P-1.18 | A-BP107; C16 §5 |
| `5-§6-10` | C5@80ac648e §6 | §6 retrieve documents by: linked order record | BUILD NOW | CORE-FDN | SB-P-1.18 | A-BP107 |
| `5-§6-12` | C5@80ac648e §6 | §6 retrieve documents by: linked compliance record | BUILD NOW | CORE-FDN | SB-P-1.18 | A-BP107 |
| `5-§7-5` | C5@80ac648e §7 | §7 example: employee roster photo/PDF → HR draft | BUILD NOW | CORE-FDN | SB-P-1.18 | A-BP107; C6 §6 |
| `5-§7-6` | C5@80ac648e §7 | §7 example: customer/order sheet → order draft | BUILD NOW | CORE-FDN | SB-P-1.18 | A-BP107; C1 §8 |
| `5-§7-7` | C5@80ac648e §7 | §7 example: licence document → Compliance Shield record/reminder preparation | BUILD NOW | CORE-FDN | SB-P-1.18 | A-BP107; C16 §5 |

#### `SB-P-1.19` (1 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Receiving mission | Citation |
|---|---|---|---|---|---|---|
| `22-§17-6` | C22@61e1bb91 §17 | §17 adapter pattern: billing providers | BUILD NOW | CORE-ARCH | SB-P-1.19 | A-BP108 |

#### `SB-P-1.20` (7 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Receiving mission | Citation |
|---|---|---|---|---|---|---|
| `3-§12-1` | C3@d8c26c07 §12 | §12 consistent Ledger behaviour across WhatsApp | BUILD NOW | CORE-LM | SB-P-1.20 | L-X20; A-BP109 |
| `3-§19-13b` | C3@d8c26c07 §19 | §19 acceptance 13 (WhatsApp slice): identical business semantics across channels | BUILD NOW | CORE-LM | SB-P-1.20 | L-X20; A-BP109 |
| `5-§8-1` | C5@80ac648e §8 | §8 document intake through WhatsApp | BUILD NOW | CORE-FDN | SB-P-1.20 | A-BP109; L-X20 |
| `5-§18-8b` | C5@80ac648e §18 | §18 acceptance 8 (WhatsApp slice): WhatsApp and Workspace use the same interpretation rules | BUILD NOW | CORE-FDN | SB-P-1.20 | L-X20; A-BP109 |
| `22-§17-4` | C22@61e1bb91 §17 | §17 adapter pattern: WhatsApp | BUILD NOW | CORE-ARCH | SB-P-1.20 | A-BP109 |
| `25-§13-1b` | C25@406ce089 §13 | §13 WhatsApp uses the same storage foundation for equivalent media | BUILD NOW | CORE-FDN | SB-P-1.20 | A-BP109; C23 §18 |
| `25-§26-4b` | C25@406ce089 §26 | §26 acceptance 4 (WhatsApp slice): channels resolve the same durable object identity | BUILD NOW | CORE-FDN | SB-P-1.20 | L-X20; A-BP109 |

### 11.2 Delegated — owned elsewhere, consumed here (104 rows)

Owned by another contract or by an earlier mission's canonical FCTM. This mission consumes the locked specification and does not treat the runtime behaviour as demonstrated. Distribution: SB-P-1.12 52, SB-P-1.13 21, SB-P-1.15 2, SB-P-1.16 10, SB-P-1.17 4, SB-P-1.18 6, SB-P-1.19 6, SB-P-1.20 3.

#### `SB-P-1.12` (52 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Owning mission | Citation |
|---|---|---|---|---|---|---|
| `3-§18-4` | C3@d8c26c07 §18 | §18 purpose-limited support access | BUILD NOW | CORE-LM | SB-P-1.12 | I-12 (22-§23-4, 21-§14 IN SCOPE SB-P-1.12); support surfaces SB-P-1.19 |
| `5-§12-7` | C5@80ac648e §12 | §12 account-specific support access purpose-limited, authorized and auditable | BUILD NOW | CORE-FDN | SB-P-1.12 | I-12 (21-§14 IN SCOPE SB-P-1.12; EIS-SUP-01); C19 §15 (SB-P-1.19) |
| `22-§5` | C22@61e1bb91 §5 | §5 Identity Foundation (whole section; consumed for actor and counterparty linkage; matching clarifies before consequential linking) | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§5-1 to -9 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-1` | C22@61e1bb91 §6 | §6 one permission/isolation model covers UI/workspace | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§6-1 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-2` | C22@61e1bb91 §6 | §6 one permission/isolation model covers WhatsApp | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§6-2 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-3` | C22@61e1bb91 §6 | §6 one permission/isolation model covers Conversation Workspace | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§6-3 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-4` | C22@61e1bb91 §6 | §6 one permission/isolation model covers server functions/APIs | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§6-4 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-5` | C22@61e1bb91 §6 | §6 one permission/isolation model covers database/RLS | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§6-5 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-6` | C22@61e1bb91 §6 | §6 one permission/isolation model covers background jobs | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§6-6 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-7` | C22@61e1bb91 §6 | §6 one permission/isolation model covers integrations | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§6-7 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-8` | C22@61e1bb91 §6 | §6 one permission/isolation model covers exports/files (incl. stored documents; EIS-ISO-05) | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§6-8 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-9` | C22@61e1bb91 §6 | §6 one permission/isolation model covers AI tools (incl. UDI interpretation) | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§6-9 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-10` | C22@61e1bb91 §6 | §6 feature-specific permissions extend but never bypass the model | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§6-10 IN SCOPE SB-P-1.12); EIS-DEP-01; L-DEL12 |
| `22-§13-1` | C22@61e1bb91 §13 | §13 clarify uncertain identity/intent before consequential write | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§13-1 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 |
| `22-§13-2` | C22@61e1bb91 §13 | §13 preview uncertain/material document import (realized for documents by 5-§9-* here) | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§13-2 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 |
| `22-§13-3` | C22@61e1bb91 §13 | §13 bind confirmation to exact actor/action/state/object | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§13-3 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 |
| `22-§13-4` | C22@61e1bb91 §13 | §13 revalidate permission/state at execution | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§13-4 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12; FPDR-3 |
| `22-§13-5` | C22@61e1bb91 §13 | §13 generic/stale Yes is not unlimited authority | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§13-5 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 |
| `22-§14` | C22@61e1bb91 §14 | §14 Audit / Human Context Foundation (whole section; document provenance realized by 5-§15-*, 25-§23-*) | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§14-1 to -9 IN SCOPE SB-P-1.12); EIS-AUD-04; L-DEL12 |
| `22-§15` | C22@61e1bb91 §15 | §15 Idempotency / Duplicate Protection (single rule; document imports and Ledger writes realized by 5-§11-*, 25-§14-*) | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§15 IN SCOPE SB-P-1.12); EIS-CNF-04; L-DEL12 |
| `22-§20` | C22@61e1bb91 §20 | §20 Data / Schema Stability Principle (whole section; four-state widening and document schema evolve by governed migration) | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§20-1 to -4 IN SCOPE SB-P-1.12); L-DEL12; docs/migration/README.md default-deny |
| `22-§23-1` | C22@61e1bb91 §23 | §23 merchant data belongs to merchant | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§23-1 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§23-4` | C22@61e1bb91 §23 | §23 support access is purpose-limited | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§23-4 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§23-6` | C22@61e1bb91 §23 | §23 individual merchant data not sold | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§23-6 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§29-6` | C22@61e1bb91 §29 | §29 acceptance 6: customer/supplier identity not duplicated by channel/feature | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§29-11` | C22@61e1bb91 §29 | §29 acceptance 11: subscription changes do not destroy core schema/history | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§33-1` | C22@61e1bb91 §33 | §33.1–§33.7 Personal Identity Lifecycle and Governed Deletion (touch: uploader/creator attribution on documents and Ledger records survives as non-authorizing, §33.5) | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§33-1 to -39 IN SCOPE SB-P-1.12); EIS §15, EIS-ESC-03; L-DEL12 |
| `22-§33-2` | C22@61e1bb91 §33 | §33.8 acceptance boundary item 1 | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 |
| `22-§33-3` | C22@61e1bb91 §33 | §33.8 acceptance boundary item 2 | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 |
| `22-§33-4` | C22@61e1bb91 §33 | §33.8 acceptance boundary item 3 | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 |
| `22-§33-5` | C22@61e1bb91 §33 | §33.8 acceptance boundary item 4 | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 |
| `22-§33-6` | C22@61e1bb91 §33 | §33.8 acceptance boundary item 5 | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 |
| `22-§33-7` | C22@61e1bb91 §33 | §33.8 acceptance boundary item 6 | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 |
| `22-§33-8` | C22@61e1bb91 §33 | §33.8 acceptance boundary item 7 | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 |
| `22-§33-9` | C22@61e1bb91 §33 | §33.8 acceptance boundary item 8 | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 |
| `22-§33-10` | C22@61e1bb91 §33 | §33.8 acceptance boundary item 9 | BUILD NOW | CORE-ARCH | SB-P-1.12 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 |
| `BP-§5.1-1` | BP@9dfdd924 §5.1 | §5.1 residual anon grant on businesses, transactions, transaction_correction_events (mandatory SB-P-1.12 gate; this mission writes to transactions) | BUILD NOW | per contract | SB-P-1.12 | BP §5.1 assigns to SB-P-1.12 (WS-B); D-12 |
| `BP-§5.2-1` | BP@9dfdd924 §5.2 | §5.2 CI baseline gate (SB-P-1.12 owns; this mission keeps the Fast Gate green at checkpoints) | BUILD NOW | per contract | SB-P-1.12 | BP §5.2; D-13 |
| `BP-§7-1` | BP@9dfdd924 §7 | §7 Product & Price Master: preserve import foundations and product relationships needed by UDI and Transactions; no independent Catalog expansion | BUILD NOW | per contract | SB-P-1.12 | BP §7 ('SB-P-1.12 owns future implementation design/authorization'); SB-P-1.12 EIS-PPM-05 |
| `21-§4` | C21@f4a05d5c §4 | §4 Core Authority Model (Employee may upload permitted receipts/documents; Manager not automatically Owner) | BUILD NOW | CORE-FDN | SB-P-1.12 | L-DEL21; touch: document and Ledger capabilities registered by this mission (EIS-KER-03, §8.2) |
| `21-§5` | C21@f4a05d5c §5 | §5 Permission Dimensions (action type read/create/update/approve/export/admin; object scope) | BUILD NOW | CORE-FDN | SB-P-1.12 | L-DEL21; EIS-KER-08; touch: document retrieval and export actions |
| `21-§6` | C21@f4a05d5c §6 | §6 Business Isolation (cross-business file/document access and exports denied; client business_id untrusted) | BUILD NOW | CORE-FDN | SB-P-1.12 | L-DEL21; EIS-ISO-01, EIS-ISO-05; touch: stored objects and exports |
| `21-§7` | C21@f4a05d5c §7 | §7 Server-side Authorization | BUILD NOW | CORE-FDN | SB-P-1.12 | L-DEL21; EIS-ISO-02; touch: transactions command-only boundary (D-02) |
| `21-§8` | C21@f4a05d5c §8 | §8 Conversation / AI Permission Boundary (UDI interpretation through AI tools) | BUILD NOW | CORE-FDN | SB-P-1.12 | L-DEL21; EIS-ISO-06; touch: document-borne content never grants authority |
| `21-§11` | C21@f4a05d5c §11 | §11 Permission-scoped Transaction / Operational Contribution (create ≠ read-all/edit-all/export/analytics; actor preserved) | BUILD NOW | CORE-FDN | SB-P-1.12 | L-DEL21; touch: staff receipt upload (5-§18-9, DC-07) |
| `21-§13` | C21@f4a05d5c §13 | §13 Supplier / Customer / Delivery Participation | BUILD NOW | CORE-FDN | SB-P-1.12 | L-DEL21; EIS-EXT-02; touch: no general Ledger or document access (3-§11-5) |
| `21-§14` | C21@f4a05d5c §14 | §14 Temporary / Purpose-limited Support Access | BUILD NOW | CORE-FDN | SB-P-1.12 | L-DEL21; EIS-SUP-01; touch: support access to documents (5-§12-7) |
| `21-§17` | C21@f4a05d5c §17 | §17 Permission Changes and Runtime Revalidation | BUILD NOW | CORE-FDN | SB-P-1.12 | L-DEL21; EIS-CNF-02, EIS-CNF-05; touch: revocation during document import and object retrieval (25-§26-11) |
| `21-§18` | C21@f4a05d5c §18 | §18 Confirmation Binding | BUILD NOW | CORE-FDN | SB-P-1.12 | L-DEL21; EIS-CNF-01; touch: Scenario A binding and stale-target re-prompt; FPDR-3 |
| `21-§19` | C21@f4a05d5c §19 | §19 Auditability | BUILD NOW | CORE-FDN | SB-P-1.12 | L-DEL21; EIS-AUD-01 to -04; touch: document and Ledger provenance |
| `21-§20` | C21@f4a05d5c §20 | §20 Error and Denial Behavior | BUILD NOW | CORE-FDN | SB-P-1.12 | L-DEL21; EIS-UX-01; touch: denied document retrieval leaks no content |
| `21-§24` | C21@f4a05d5c §24 | §24 Acceptance Scenarios touched: 1, 2, 3, 4, 8, 10 | BUILD NOW | CORE-FDN | SB-P-1.12 | L-DEL21; I-12 (21-§24-* IN SCOPE SB-P-1.12) |

#### `SB-P-1.13` (21 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Owning mission | Citation |
|---|---|---|---|---|---|---|
| `22-§7` | C22@61e1bb91 §7 | §7 Conversation / Intent-Action Foundation (whole section; document actions dispatch through the same confirmation/action model) | BUILD NOW | CORE-ARCH | SB-P-1.13 | I-13 (22-§7-1 to -10 IN SCOPE SB-P-1.13); L-DEL13 |
| `22-§8` | C22@61e1bb91 §8 | §8 Human Language Foundation (whole section; document text normalization reuses it) | BUILD NOW | CORE-ARCH | SB-P-1.13 | I-13 (22-§8-1 to -7 IN SCOPE SB-P-1.13); L-DEL13 |
| `22-§17-5` | C22@61e1bb91 §17 | §17 adapter pattern: OpenAI/model services | BUILD NOW | CORE-ARCH | SB-P-1.13 | I-13 (22-§17 IN SCOPE SB-P-1.13); L-DEL13 |
| `22-§24` | C22@61e1bb91 §24 | §24 AI Authority Foundation (whole section; UDI-specific must-nots realized by 5-§13-*) | BUILD NOW | CORE-ARCH | SB-P-1.13 | I-13 (22-§24-1 to -3 IN SCOPE SB-P-1.13); L-DEL13 |
| `22-§25` | C22@61e1bb91 §25 | §25 AI Orchestration / OpenAI Intelligence Foundation (names Contract 24; UDI consumes it) | BUILD NOW | CORE-ARCH | SB-P-1.13 | I-13 (22-§25 DELEGATED); inherited 24-* rows in Part E |
| `22-§29-1` | C22@61e1bb91 §29 | §29 acceptance 1: WhatsApp and Workspace use one Business Memory/action truth | BUILD NOW | CORE-ARCH | SB-P-1.13 | I-13 (22-§29-1 IN SCOPE SB-P-1.13, D14); this mission supplies the Business Memory |
| `22-§29-2` | C22@61e1bb91 §29 | §29 acceptance 2: WhatsApp and Workspace share one permission-aware AI orchestration path | BUILD NOW | CORE-ARCH | SB-P-1.13 | I-13 (22-§29-2 IN SCOPE SB-P-1.13) |
| `24-§10` | C24@0c1dcbb2 §10 | §10 Permission-Aware AI (document context retrieved only within authority) | BUILD NOW | CORE-INT | SB-P-1.13 | L-DEL13; EIS13-CTX-02 |
| `24-§20` | C24@0c1dcbb2 §20 | §20 Structured Outputs and Validation (extraction outputs schema-validated) | BUILD NOW | CORE-INT | SB-P-1.13 | L-DEL13; EIS13-TOOL-02 |
| `24-§22` | C24@0c1dcbb2 §22 | §22 AI Safety / Business Boundary (document-borne instructions are untrusted data) | BUILD NOW | CORE-INT | SB-P-1.13 | L-DEL13; EIS13-CTX-01 |
| `24-§24` | C24@0c1dcbb2 §24 | §24 Auditability and Provenance (interpretation model/provider metadata) | BUILD NOW | CORE-INT | SB-P-1.13 | L-DEL13; EIS13-AUD-01 |
| `24-§25` | C24@0c1dcbb2 §25 | §25 Privacy and Data Minimization (merchant documents sent to the provider) | BUILD NOW | CORE-INT | SB-P-1.13 | L-DEL13; EIS13-PRV-01; DC-16 |
| `24-§29` | C24@0c1dcbb2 §29 | §29 OpenAI Provider Abstraction and Anti-Lock Principle | BUILD NOW | CORE-INT | SB-P-1.13 | L-DEL13; EIS13-GW-02 |
| `10-§4` | C10@5c145ed7 §4 | §4 Supported Inputs (attachment intake; rows 10-§4-3 to -8 wait on this mission, D14 in SB-P-1.13) | BUILD NOW | CORE-CH | SB-P-1.13 | L-DEL13; EIS13-ATT-01 handoff targets this mission's UDI contract |
| `10-§16` | C10@5c145ed7 §16 | §16 Conversation History and Retention (rows 10-§16-4, -5 wait on this mission) | BUILD NOW | CORE-CH | SB-P-1.13 | L-DEL13; touch: attachments referenced from history resolve through governed storage |
| `10-§18` | C10@5c145ed7 §18 | §18 Error and Exception Behavior (failed upload, unsafe file) | BUILD NOW | CORE-CH | SB-P-1.13 | L-DEL13; EIS13-FAIL-02 |
| `12-§4` | C12@6d48feff §4 | §4 Basic Voice — Ledger transaction/credit/repayment input (12-§4-1 waits on this mission) | BUILD NOW | CORE-LM | SB-P-1.13 | L-DEL13; EIS13-VOI-07; SB-P-1.13 FPDR-2; FPDR-5 |
| `12-§15` | C12@6d48feff §15 | §15 Voice privacy (12-§15-4 raw-audio retention waits on this mission) | BUILD NOW | CORE-LM | SB-P-1.13 | L-DEL13; EIS13-VOI-02; SB-P-1.13 FPDR-3; FPDR-2 |
| `12-§16` | C12@6d48feff §16 | §16 Voice audit/provenance (12-§16-8 waits on this mission) | BUILD NOW | CORE-LM | SB-P-1.13 | L-DEL13 |
| `12-§21` | C12@6d48feff §21 | §21 Acceptance 1: credit voice input (12-§21-1 waits on this mission) | BUILD NOW | CORE-LM | SB-P-1.13 | L-DEL13; EIS13-CMD-03; SB-P-1.13 FPDR-2; FPDR-5 |
| `9-§9` | C9@649c55f3 §9 | §9 Clarification — paid-versus-owed (9-§9-4: an owed balance is mature credit truth) | BUILD NOW | CORE-FDN | SB-P-1.13 | L-DEL13; EIS13-CMD-03; SB-P-1.13 FPDR-5; FPDR-1 |

#### `SB-P-1.15` (2 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Owning mission | Citation |
|---|---|---|---|---|---|---|
| `2-§7` | C2@53635557 §7 | §7 Read-only Intelligence Boundary over Ledger | BUILD NOW | CORE-LM | SB-P-1.15 | A-BP104; touch: Ledger read model exposes no write path |
| `4-§6` | C4@ce940d25 §6 | §6 Source-of-Truth Rule (Daily Intelligence reads Ledger and UDI status) | BUILD NOW | CORE-LM | SB-P-1.15 | A-BP104; touch: 3-§14-2 |

#### `SB-P-1.16` (10 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Owning mission | Citation |
|---|---|---|---|---|---|---|
| `14-§4` | C14@16914a83 §4 | §4 Customer Credit Identity | BUILD NOW | CORE-LM | SB-P-1.16 | A-BP105; touch: credit/repayment recorded here at counterparty-reference level (A-BP103-S); FPDR-1 |
| `14-§5` | C14@16914a83 §5 | §5 Core Credit Facts (incl. outstanding balance) | BUILD NOW | CORE-LM | SB-P-1.16 | A-BP105; touch: 3-§9-7, 3-§9-12; FPDR-1 |
| `14-§6` | C14@16914a83 §6 | §6 Credit Recording through approved Ledger input paths | BUILD NOW | CORE-LM | SB-P-1.16 | A-BP105; touch: 3-§4-3; FPDR-1 |
| `14-§7` | C14@16914a83 §7 | §7 Repayment (distinct current Ledger state; identify correct credit relationship; update outstanding balance) | BUILD NOW | CORE-LM | SB-P-1.16 | A-BP105; touch: 3-§4-4, 3-§8-8; FPDR-1 |
| `14-§17` | C14@16914a83 §17 | §17 Corrections and Audit through the Ledger correction/audit model | BUILD NOW | CORE-LM | SB-P-1.16 | A-BP105; touch: 3-§8-* |
| `14-§21` | C14@16914a83 §21 | §21 non-goal: duplicate customer-credit database separate from Ledger/customer identity | BUILD NOW | CORE-LM | SB-P-1.16 | A-BP105; touch: this mission's credit state is the base SB-P-1.16 must extend; FPDR-1 |
| `14-§22` | C14@16914a83 §22 | §22 Acceptance 1 and 2 (credit entry creates correct customer balance; repayment reduces correct balance without duplicate revenue) | BUILD NOW | CORE-LM | SB-P-1.16 | A-BP105; touch: DC-02; FPDR-1 |
| `15-§5` | C15@632f3402 §5 | §5 Evidence Sources (merchant-uploaded evidence requires review; not automatically payment truth) | BUILD NOW | CORE-LM | SB-P-1.16 | A-BP105; touch: uploaded payment screenshots enter UDI/storage as evidence only |
| `15-§6` | C15@632f3402 §6 | §6 Evidence Ingestion (raw evidence for audit; retention rules) | BUILD NOW | CORE-LM | SB-P-1.16 | A-BP105; touch: 25-§4-*, 25-§17-* |
| `15-§22` | C15@632f3402 §22 | §22 Privacy and Security of financial evidence | BUILD NOW | CORE-LM | SB-P-1.16 | A-BP105; touch: 25-§19-* |

#### `SB-P-1.17` (4 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Owning mission | Citation |
|---|---|---|---|---|---|---|
| `7-§8` | C7@65ad91b2 §8 | §8 Ledger Relationship (stock and Ledger link without duplication) | BUILD NOW | MGR/ADDON | SB-P-1.17 | A-BP106; touch: 3-§9-9, 5-§7-4 |
| `17-§6` | C17@7943f74a §6 | §6 Financial / Business Summary (sales/income, expenses/purchases, outstanding credit; no fabricated metrics) | BUILD NOW | MGR+LDG | SB-P-1.17 | I-12 (17-§6 ASSIGNED SB-P-1.17); touch: existing dashboard totals after widening (D-03, DC-02); FPDR-1 |
| `13-§4` | C13@4426e8b1 §4 | §4 Standard POS Bridge (manual CSV/file import coexists as fallback) | BUILD NOW | MGR-CORE | SB-P-1.17 | A-BP106; touch: CSV import through UDI |
| `13-§6` | C13@4426e8b1 §6 | §6 POS Data and Business Memory (imported events preserve source identity) | BUILD NOW | MGR-CORE | SB-P-1.17 | A-BP106; touch: four-state Ledger provenance |

#### `SB-P-1.18` (6 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Owning mission | Citation |
|---|---|---|---|---|---|---|
| `1-§6` | C1@b392c8cb §6 | §6 Customer Identity — Excel/CSV customer import through UDI | BUILD NOW | ADDON-LM | SB-P-1.18 | A-BP107; touch: UDI domain adapter |
| `1-§8` | C1@b392c8cb §8 | §8 Order Intake Channels — document/photo intake through UDI | BUILD NOW | ADDON-LM | SB-P-1.18 | A-BP107; touch: 5-§7-6 |
| `1-§13` | C1@b392c8cb §13 | §13 Delivery Staff Experience — delivery proof stored through the shared foundation | BUILD NOW | ADDON-LM | SB-P-1.18 | A-BP107; touch: 25-§7-1 |
| `1-§16` | C1@b392c8cb §16 | §16 COD and Payment Relationship — idempotent, auditable Ledger write/link | BUILD NOW | ADDON-LM | SB-P-1.18 | A-BP107; touch: governed Ledger command (DTX) |
| `6-§6` | C6@ebacd183 §6 | §6 Roster and Document Intake through UDI | BUILD NOW | ADDON-LM | SB-P-1.18 | A-BP107; touch: 5-§7-5 |
| `16-§5` | C16@420269d8 §5 | §5 Document Intake through UDI | BUILD NOW | ADDON-LM | SB-P-1.18 | A-BP107; touch: 5-§7-7 |

#### `SB-P-1.19` (6 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Owning mission | Citation |
|---|---|---|---|---|---|---|
| `18-§9` | C18@6b96b10a §9 | §9 Downgrade / Add-on Removal (preserve historical records) | BUILD NOW | CORE-COM | SB-P-1.19 | A-BP108; touch: stored documents survive downgrade |
| `18-§11` | C18@6b96b10a §11 | §11 Export and Merchant Data Rights | BUILD NOW | CORE-COM | SB-P-1.19 | A-BP108; touch: 25-§17-2, 3-§10-* |
| `18-§12` | C18@6b96b10a §12 | §12 Retention and Final Deletion (duration unresolved) | BUILD NOW | CORE-COM | SB-P-1.19 | A-BP108; touch: 25-§17-* |
| `19-§13` | C19@94aa6f24 §13 | §13 Backup / Storage / Recovery visibility | BUILD NOW | INTERNAL | SB-P-1.19 | A-BP108; touch: 25-§22-*, 25-§26-14 |
| `19-§15` | C19@94aa6f24 §15 | §15 Merchant-content Access Boundary | BUILD NOW | INTERNAL | SB-P-1.19 | A-BP108; touch: 5-§12-6, 3-§18-5 |
| `20-§9` | C20@56ed4d11 §9 | §9 Existing Data Import through UDI | BUILD NOW | ACT | SB-P-1.19 | A-BP108; BP §11 (onboarding imports); touch: UDI adapters |

#### `SB-P-1.20` (3 rows)

| Row ID | Source | Pointer | Build commitment | Commercial | Owning mission | Citation |
|---|---|---|---|---|---|---|
| `22-§26` | C22@61e1bb91 §26 | §26 Dedicated Channel Adapter Contracts (names Contract 23) | BUILD NOW | CORE-ARCH | SB-P-1.20 | I-12, I-13 (22-§26 DELEGATED, SB-P-1.20) |
| `23-§12` | C23@2430e1c6 §12 | §12 Image / Receipt / Document Experience reuses UDI | BUILD NOW | CORE-CH | SB-P-1.20 | A-BP109; touch: 5-§8-1 |
| `23-§18` | C23@2430e1c6 §18 | §18 Media Storage and Retrieval (Meta URLs never permanent Business Memory) | BUILD NOW | CORE-CH | SB-P-1.20 | A-BP109; touch: 25-§13-1b |

### 11.3 Out of build scope — must not appear (20 rows)

Build Plan §16 rejections, preserved verbatim as `REJECT`; each is a "must not appear" check on this mission's deliverable.

| Row ID | Source | Pointer | Build commitment | Commercial | Owning mission | Citation |
|---|---|---|---|---|---|---|
| `BP-§16-1` | BP@9dfdd924 §16 | §16 rejection: Ask CFO as write-capable authority | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-2` | BP@9dfdd924 §16 | §16 rejection: AI accusation/judgment of employees or customers | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-3` | BP@9dfdd924 §16 | §16 rejection: continuous staff GPS surveillance by default | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-4` | BP@9dfdd924 §16 | §16 rejection: automated wage punishment | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-5` | BP@9dfdd924 §16 | §16 rejection: blind supplier procurement without valid Owner delegation | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-6` | BP@9dfdd924 §16 | §16 rejection: hard credit blocking by default | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-7` | BP@9dfdd924 §16 | §16 rejection: custom client-specific POS modification inside core | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-8` | BP@9dfdd924 §16 | §16 rejection: marketplace behaviour inside Smart Order & Delivery | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-9` | BP@9dfdd924 §16 | §16 rejection: customer silence invalidating sufficiently proven delivery | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-10` | BP@9dfdd924 §16 | §16 rejection: duplicate channel-specific Business Memory | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-11` | BP@9dfdd924 §16 | §16 rejection: duplicate channel-specific permission models | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-12` | BP@9dfdd924 §16 | §16 rejection: separate AI brains per feature/channel | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-13` | BP@9dfdd924 §16 | §16 rejection: model conversation history as permanent Business Memory | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-14` | BP@9dfdd924 §16 | §16 rejection: uncontrolled binary-media concentration in Supabase for convenience | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-15` | BP@9dfdd924 §16 | §16 rejection: provider URLs as permission authority/business identity | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-16` | BP@9dfdd924 §16 | §16 rejection: destructive subscription-driven schema creation/deletion | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-17` | BP@9dfdd924 §16 | §16 rejection: broad routine Super Admin access to merchant private data | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-18` | BP@9dfdd924 §16 | §16 rejection: revival of /survey or obsolete domains/routes | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-19` | BP@9dfdd924 §16 | §16 rejection: old Daily Intelligence timing conflicting with 7:00 / 10:30 / 22:00 | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |
| `BP-§16-20` | BP@9dfdd924 §16 | §16 rejection: independent Catalog product expansion | REJECT | REJECT | SB-P-1.14 | BP §16 (REJECT preserved verbatim; must-not-appear check) |

### 11.4 Not applicable — not an obligation of this mission (32 rows)

| Row ID | Source | Pointer | Reason |
|---|---|---|---|
| `3-§1` | C3@d8c26c07 §1 | §1 Feature Identity | L-NARR; the business-memory rule is carried by 3-§9-*, 3-§23 |
| `3-§2-1` | C3@d8c26c07 §2 | §2 Founder Problem Statement (merchant habits) | L-NARR |
| `3-§21` | C3@d8c26c07 §21 | §21 Historical Corrections Preserved | L-HIST |
| `3-§23` | C3@d8c26c07 §23 | §23 Completion Gate | L-GATE |
| `5-§1` | C5@80ac648e §1 | §1 Feature Identity (Receipt Intelligence and Receipt Cabinet inside one shared foundation; carried by 22-§10-7) | L-NARR |
| `5-§2-1` | C5@80ac648e §2 | §2 Founder Problem Statement | L-NARR |
| `5-§20` | C5@80ac648e §20 | §20 Dependencies (Permission Engine, storage, parser infrastructure, Human Language, destination services, channel intake) | L-DEP; carried by dependency codes D12, DR2, DAI, D13 and destination-mission codes |
| `5-§21` | C5@80ac648e §21 | §21 Completion Gate | L-GATE |
| `22-§1` | C22@61e1bb91 §1 | §1 Feature Identity | L-NARR |
| `22-§2` | C22@61e1bb91 §2 | §2 Founder Problem Statement | L-NARR |
| `22-§3` | C22@61e1bb91 §3 | §3 Lighthouse Principles | L-NARR; realized by 22-§28-* and 22-§29-* |
| `22-§16` | C22@61e1bb91 §16 | §16 Location Foundation | SB-P-1.14 captures no location; owners SB-P-1.12 and SB-P-1.18 per I-12 |
| `22-§17-8` | C22@61e1bb91 §17 | §17 adapter pattern: future external systems | no future external system is in this mission's scope |
| `22-§29-9` | C22@61e1bb91 §29 | §29 acceptance 9: attendance/delivery location uses a purpose-limited primitive | SB-P-1.14 captures no location; I-12 (ASSIGNED SB-P-1.18) |
| `22-§30` | C22@61e1bb91 §30 | §30 Historical Corrections / Superseded Behavior | L-HIST |
| `22-§31` | C22@61e1bb91 §31 | §31 Provenance and Hydration Coverage | L-PROV |
| `22-§32` | C22@61e1bb91 §32 | §32 Completion Gate | L-GATE |
| `25-§1` | C25@406ce089 §1 | §1 Feature Identity (separation of metadata, objects, authorization, lifecycle and provider; carried by 25-§4-*) | L-NARR |
| `25-§2` | C25@406ce089 §2 | §2 Founder Problem Statement (Founder-approved R2 direction; carried by 25-§4-1, 25-§5-1) | L-NARR |
| `25-§3` | C25@406ce089 §3 | §3 Lighthouse Principles (realized by 25-§6-2, 25-§17-*, 25-§19-*) | L-NARR |
| `25-§28` | C25@406ce089 §28 | §28 Historical Corrections / Evolution | L-HIST; candidate conflict CF-1 |
| `25-§29` | C25@406ce089 §29 | §29 Provenance | L-PROV |
| `25-§30` | C25@406ce089 §30 | §30 Completion Gate (eleven items realized by 25-§4 to 25-§26 rows) | L-GATE |
| `25-§FP` | C25@406ce089 Final Principle | Final Principle | L-NARR |
| `BP-§15-1` | BP@9dfdd924 §15 | §15 unresolved Founder decision: current free-trial policy | Does not concern SB-P-1.14 scope |
| `BP-§15-2` | BP@9dfdd924 §15 | §15 unresolved Founder decision: exact Voice Plus price | Does not concern SB-P-1.14 scope |
| `BP-§15-3` | BP@9dfdd924 §15 | §15 unresolved Founder decision: exact Staff/HR price | Does not concern SB-P-1.14 scope |
| `BP-§15-4` | BP@9dfdd924 §15 | §15 unresolved Founder decision: exact Smart Stock price | Does not concern SB-P-1.14 scope |
| `BP-§15-5` | BP@9dfdd924 §15 | §15 unresolved Founder decision: exact Smart Order & Delivery price | Does not concern SB-P-1.14 scope |
| `BP-§15-7` | BP@9dfdd924 §15 | §15 unresolved Founder decision: employee KYC/national-ID necessity | Does not concern SB-P-1.14 scope |
| `BP-§15-8` | BP@9dfdd924 §15 | §15 unresolved Founder decision: wholesaler/marketplace expansion | Does not concern SB-P-1.14 scope |
| `BP-§15-9` | BP@9dfdd924 §15 | §15 unresolved Founder decision: third-party underwriting/lending ecosystem | Does not concern SB-P-1.14 scope |

### 11.5 Unresolved Founder decisions — not on this mission's critical path (2 rows)

| Row ID | Source | Pointer | Owning mission | Critical-path statement | Founder decision |
|---|---|---|---|---|---|
| `25-§17-1` | C25@406ce089 §17 | §17 exact long-term retention/deletion duration after cancellation/non-payment | SB-P-1.19 | BP §15 item 6; GPCV §8 and §10 item 6: not on this mission's critical path (does not block non-destructive storage/control-plane work) | BP §15-6 (open) |
| `BP-§15-6` | BP@9dfdd924 §15 | §15 unresolved Founder decision: long-term retention/deletion duration after cancellation/non-payment | SB-P-1.19 | Not on SB-P-1.14 critical path: GPCV §8 ('does not block non-destructive R2 adapter/control-plane work'); rows 25-§17-1, 25-§26-12 | BP §15-6 (open) |

## 12. Dependencies

### 12.1 Upstream — SB-P-1.12 authority kernel (`D12`, 225 rows) and SB-P-1.13 conversation/AI kernel (`D13`, 92 rows)

| Upstream | Specification | Implementation | Evidence |
|---|---|---|---|
| SB-P-1.12 | AVAILABLE — Blueprint `77d52096`, EIS `c444f750` `APPROVED — LOCKED`; package locked | NOT COMPLETE — Implementation Authorization `WITHHELD`; MC-70 suspension | NOT COMPLETE — no Stage 17 or 19 |
| SB-P-1.13 | AVAILABLE — Blueprint `bbf65429`, EIS `9a1e723d` `APPROVED — LOCKED`; package v1.0 locked | NOT COMPLETE — Implementation Authorization `WITHHELD`; MC-38 suspension | NOT COMPLETE — no Stage 17 or 19 |

Consumption follows SB-P-1.12 EIS-DEP-01: a capability is used only after the providing workstreams are implemented and verified, every touched table family has completed WS-A3 cut-over and isolation tests, and Mission Control accepts the evidence. No temporary parallel authority or permission system is built. The consumed capabilities are listed in the Stage 2 Truth Pack Part 5 (U12-01 to U12-19; U13-01 to U13-12). No conversation, AI, confirmation binding, governed transaction command, isolation, media handoff or execution-time revalidation behaviour is claimed as working until independently evidenced.

### 12.2 Other dependencies of `IN SCOPE` rows

| Code | Dependency | State | Rows |
|---|---|---|---|
| `DTX` | The one governed create-transaction command (SB-P-1.13 EIS13-CMD-02) under SB-P-1.12 WS-A3; four-state widening extends it | Specified; not implemented (Delta D-02) | 42 |
| `DAI` | AI provider interpretation behind the SB-P-1.13 gateway | `UNVERIFIED — ACCESS REQUIRED`; activation not authorized | 97 |
| `DR2` | Cloudflare R2 / approved durable object storage activation gate (Build Plan §5.4) | `UNVERIFIED — ACCESS REQUIRED`; selection, purchase, configuration, activation not authorized | 124 |
| `DLEG` | Record-class retention and legal basis; no duration invented | Provisional Phase One basis (SB-P-1.12 Founder Record 06, MC-117); no document-class rule approved | 11 |
| `D15` | SB-P-1.15 Scheduler, Notification Foundation | Not started | 7 |
| `D17` | SB-P-1.17 stock/product relationship to the Ledger | Not started | 3 |
| `D19` | SB-P-1.19 lifecycle export path | Not started | 1 |
| `D20` | SB-P-1.20 WhatsApp channel slice | Not started | 2 |
| `DUF6` | Build Plan §15 item 6 retention duration | Open; not on the critical path | 2 |

Row counts are `IN SCOPE` rows carrying each code; a row may carry several.

### 12.3 Policy and retention dependency

`FPDR-2` settles the product rule for unconfirmed originals and raw voice. The long-term post-cancellation duration (Build Plan §15 item 6) stays unresolved and off the critical path (GPCV §8). Record-class retention durations follow the applicable validated policy; this Blueprint states none.

### 12.4 Execution gates

Migration execution, production mutation, delivery sync/publication, storage-provider activation and AI-provider activation are each `NOT AUTHORIZED` and need separate authority (SB-P-1.14-MC-01 §3; `docs/migration/README.md`).

### 12.5 Downstream

SB-P-1.13 rows waiting on this mission (33; Truth Pack Part 5.3) — attachment handoff into UDI, Business Memory shared with conversation, conversation-history media, Basic Voice credit/repayment and raw audio; SB-P-1.15 (Ask CFO and Daily Intelligence read this Ledger); SB-P-1.16 (customer-credit balances on these credit/repayment facts); SB-P-1.17 to SB-P-1.20 (domain adapters, lifecycle, WhatsApp).

## 13. Risks & Mitigations

| Risk | Source | Mitigation in this Blueprint |
|---|---|---|
| Widening damages or mislabels existing sale/purchase history | Delta D-01, D-03, D-20; Scenario B | Additive widening; no reinterpretation (`FPDR-1`); regression baseline (Section 8.8) |
| Totals double count credit and repayment | DC-02 | `FPDR-1` totals rule (Sections 8.1, 8.6) |
| A second transaction-write path appears | Delta D-02; SB-P-1.13 partial learning L-3 | One governed command (`DTX`; Section 10.2) |
| SB-P-1.12 / SB-P-1.13 stay suspended | Delta D-11 | Rows stay `IN SCOPE` and dependency-blocked; no parallel model (Section 12.1) |
| Cross-business document or object leakage | Contract 25 §19; Contract 21 §6 | Kernel-scoped storage and retrieval (Section 8.7) |
| Silent retarget between preview and commit | Scenario A | `FPDR-3` (Section 8.3) |
| Document-borne prompt injection | Contract 24 §22; SB-P-1.13 EIS13-CTX-01 | Untrusted-data handling (Section 8.2) |
| Object and metadata drift; provider outage | Contract 25 §20, §21 | Reconciliation and narrow failure (Sections 8.5, 8.7) |
| Over-retention of unconfirmed originals or raw voice | DC-11, DC-12 | `FPDR-2` (Section 8.5) |
| Transient staging becomes a second store | Delta D-05 | MC-Q5 (Section 8.2) |
| Storage jobs need timing before SB-P-1.15 | DC-15 | MC-Q4 (Section 8.5) |
| No CI evidence while Actions produce no runs | Delta D-13 | Local gates recorded; run-level evidence when available |

## 14. Success Criteria

1. Every one of the 563 `IN SCOPE` rows is realized, demonstrated and independently verified, or recorded as dependency-blocked with its approved dependency (Source 18 §3.2 item 11).
2. Founder Runtime Scenarios A and B and the six experience anchors in Section 15 pass Founder Runtime Verification within the limits `FPDR-1` to `FPDR-4` set.
3. No Section 8.9 or 10.3 must-not and no Section 11.3 rejection appears.
4. No Section 11 row is built here as hidden scope; in particular no authoritative per-customer owed balance (`3-§9-12`).
5. The Completion Report carries an Experience Verification Matrix seeded from Section 15 (Build Plan §13).

## 15. Acceptance Criteria

### 15.1 Founder Runtime Verification scenarios (Build Plan §10.3, by reference — not new scenarios)

| Scenario | FCTM rows | Acceptance qualifier |
|---|---|---|
| A — Merchant uploads a receipt/invoice/image/PDF, corrects an ambiguous interpreted field and confirms; the committed record uses the exact reviewed interpretation | `BP-§10.3-SA1` | Dependencies `D12`, `D13`, `DAI`, `DTX`, `DR2` |
| A — If the underlying resolvable target changes between preview and commit, the system re-prompts rather than silently retargeting | `BP-§10.3-SA2` | `FPDR-3`: material target changes only, including a different repayment target (standalone credit entry or credit-method sale, `FPDR-4`); authority/permission/revocation revalidation independently binding. Dependencies `D12`, `DTX` |
| B — Owner records income, expense, credit and repayment; all four persist and retrieve correctly | `BP-§10.3-SB1` | `FPDR-1`: retrieval of underlying credit/repayment entries; no authoritative customer balance; totals do not double count. `FPDR-4`: repayment may settle a standalone credit entry or a credit-method sale; standalone credit and repayment never add to sales/income |
| B — without damaging existing sale/purchase history | `BP-§10.3-SB2` | `FPDR-1`: existing `sale + payment_method=credit` rows remain sales. `FPDR-4`: repayment linkage never rewrites, converts or duplicates them |

### 15.2 Experience anchors (designated by Mission Control, SB-P-1.14-MC-02 §7 and the Stage 2 and Stage 4 live instructions)

| Anchor | Anchor FCTM rows |
|---|---|
| 1. Document interpret → review/correct → preview → confirm binding | `BP-§10.3-SA1`, `5-§18-1`, `5-§18-2`, `5-§9-9`, `10-§23-3b`, `24-§31-8`, `22-§29-7` |
| 2. Material changed-target re-prompt (`FPDR-3`) | `BP-§10.3-SA2`, `22-§13-4` (delegated), `21-§18` (delegated) |
| 3. Original-proof provenance and permission-scoped retrieval | `BP-§10.3-X`, `5-§18-7`, `3-§19-9`, `25-§26-2`, `25-§26-3`, `25-§26-11` |
| 4. Four-state Ledger recording | `BP-§10.3-SB1`, `3-§19-1`, `3-§19-2` |
| 5. Preservation of existing sale/purchase history | `BP-§10.3-SB2`, `3-§4-5`, `3-§20-1`, `3-§20-2` |
| 6. No independent AI/document write path around governed authority or transaction commands | `BP-§6.1-1`, `BP-§6.2-1`, `24-§14-9`, `5-§19-1`, `25-§27-8`, `22-§28-9` |

No other Founder scenario is introduced.

### 15.3 Contract acceptance and experience rows in scope

Every `IN SCOPE` acceptance scenario, worked example, Founder Runtime scenario and experience row is an acceptance criterion by its FCTM row. Acceptance scenarios owned by later missions or delegated are in Section 11.

| Source | Acceptance / experience rows in scope | Count |
|---|---|---|
| C3 | `3-§5-2`, `3-§5-3`, `3-§5-4`, `3-§5-5`, `3-§9-10`, `3-§9-11`, `3-§9-13`, `3-§19-1`, `3-§19-2`, `3-§19-3`, `3-§19-4`, `3-§19-5`, `3-§19-6`, `3-§19-7`, `3-§19-8`, `3-§19-9`, `3-§19-10`, `3-§19-11`, `3-§19-12`, `3-§19-13a`, `3-§19-14` | 21 |
| C5 | `5-§7-2`, `5-§7-3`, `5-§7-4`, `5-§18-1`, `5-§18-2`, `5-§18-3`, `5-§18-4`, `5-§18-5`, `5-§18-6`, `5-§18-7`, `5-§18-8a`, `5-§18-9`, `5-§18-10`, `5-§18-11` | 14 |
| C22 | `22-§29-3`, `22-§29-5`, `22-§29-7`, `22-§29-8`, `22-§29-10`, `22-§29-12`, `22-§29-13`, `22-§29-14` | 8 |
| C25 | `25-§26-1`, `25-§26-2`, `25-§26-3`, `25-§26-4a`, `25-§26-5`, `25-§26-6`, `25-§26-7`, `25-§26-8`, `25-§26-9`, `25-§26-10`, `25-§26-11`, `25-§26-12`, `25-§26-13`, `25-§26-14` | 14 |
| C24 | `24-§18-1a`, `24-§31-8` | 2 |
| C10 | `10-§23-3b` | 1 |
| C7 | `7-§15-2a` | 1 |
| BP | `BP-§10.3-O`, `BP-§10.3-SA1`, `BP-§10.3-SA2`, `BP-§10.3-SB1`, `BP-§10.3-SB2`, `BP-§10.3-X` | 6 |
| **Total** | | **67** |

### 15.4 Founder-decision acceptance limits

- `FPDR-1`: acceptance of credit and repayment covers recording, linkage, confirmation, correction and retrieval of the underlying entries; it must show existing credit-method sales unchanged and totals without double counting; it must not claim an authoritative per-customer balance.
- `FPDR-4`: acceptance evidence must show a repayment linked to a standalone credit entry and one linked to a credit-method sale, the sale unchanged and not duplicated, one row per new credit sale, and neither standalone credit nor repayment counted in sales/income totals.
- `FPDR-2`: acceptance evidence must show unconfirmed originals discarded after the configured bounded grace period (absent an approved hold) and no durable raw-audio store by default.
- `FPDR-3`: acceptance evidence must show a re-prompt for each listed material target change, no forced re-confirmation for irrelevant internal change, and an authority/revocation block even when the target is unchanged.

### 15.5 Experience Verification Matrix seed (Build Plan §13)

| UX anchor / human outcome | Actor | Runtime status | Evidence | Dependency / note |
|---|---|---|---|---|
| Scenario A document → reviewed → confirmed record | Owner | Not yet run | — | `D12`; `D13`; `DAI`; `DTX`; `DR2` |
| Scenario A material changed-target re-prompt | Owner | Not yet run | — | `FPDR-3`; `D12` |
| Original proof found from the linked record under current permission | Owner, Manager, Employee | Not yet run | — | `D12`; `DR2` |
| Scenario B four-state recording and retrieval | Owner | Not yet run | — | `FPDR-1`; `DTX`; `D12` |
| Existing sale/purchase history preserved | Owner | Not yet run | — | `FPDR-1` |
| No AI/document write around governed authority | Owner, Employee | Not yet run | — | `D12`; `D13`; `DTX` |

## 16. Future Evolution

- Authoritative customer-credit balances, ageing, payment evidence and reconciliation on these Ledger facts (SB-P-1.16; `3-§9-12`).
- Ask CFO and Daily Intelligence over this Business Memory; the shared Scheduler for storage jobs (SB-P-1.15).
- Supplier, stock-document, POS, Customer-directory, order, HR and Compliance adapters on the shared UDI and storage (SB-P-1.17, SB-P-1.18).
- Lifecycle export path, onboarding imports, support completion (SB-P-1.19).
- WhatsApp media through the same UDI rules and storage identity (SB-P-1.20).
- Stage 6 Builder Review and Stage 7 Engineering Review with mandatory specialist review (Security & Permissions, Supabase/storage, UDI/AI interpretation safety, transaction integrity and migration), when separately authorized.

## 17. Product Philosophy Summary

Build Plan §10.3 exit principle: "I can give Smart Business the messy documents I already use, review what it understood, and later find both the business fact and the original proof."

## 18. Blueprint Change Log

| Version | Date | Author | Change | Status |
|---|---|---|---|---|
| 0.1 | 2026-10-08 | Claude Code (Stage 2–4 Definition Actor) | Initial Stage 4 draft: Metadata, Mission Snapshot, Sections 1–19, assembled by reference to the canonical 766-row FCTM (blob `3154330d`) and `FPDR-1` to `FPDR-3`. No refinement or scope expansion beyond FCTM-mapped rows is proposed; mission-design paragraphs restate approved sources, Founder decisions and Mission Control dispositions MC-Q4, MC-Q5 only | DRAFT — awaiting Mission Control Stage 5 review |
| 0.2 | 2026-10-08 | Claude Code (B6-01 reconciliation, SB-P-1.14-MC-09) | Carried post-Stage-6 `FPDR-4`: Metadata decision reference; §8.1, §8.3, §8.6 sentences; §10.1 decision block and row labels; §14 item 2; §15.1 Scenario A/B qualifiers; §15.4 limit; §19 Founder-decision cells of the 13 annotated rows; §19 governance rows. Section 8 and Section 11 membership, dispositions, owners, commitments and classifications unchanged | DRAFT — awaiting Mission Control review |
| 0.3 | 2026-10-08 | Claude Code (Stage 7 Engineering Review, SB-P-1.14-MC-11) | Appended Section 20 (Engineering Review, early delivery plan, 563-row feasibility and risk register, Stage 6 dispositions) and Section 21 (Engineering Questions, Risks & Recommendations); updated four Metadata fields. Sections 1–17 and 19 unchanged | DRAFT — awaiting Mission Control and independent specialist review |

## 19. Governance History

| Event | Record | Canonical |
|---|---|---|
| Stage 1 initiation and Intake Pack | SB-P-1.14-MC-01; `mission-control/01`–`03` | PR #811, `8747a1bc` |
| Stage 2 authorization | SB-P-1.14-MC-02; `mission-control/04` | PR #812, `5a464e55` |
| Stage 2 Mission Truth Pack (corrected under Mission Control review) | `claude-code/01`–`06`; `founder/01` | PR #813, `44a89d38` |
| Stage 3 authorization | `mission-control/05` | PR #814, `8e62dbb8` |
| Stage 3 Founder decisions `FPDR-1` to `FPDR-3`; FCTM reconciliation | `founder/02`; SB-P-1.14-MC-04 (`mission-control/06`) | PR #815, `a719766d` |
| Stage 4 authorization | SB-P-1.14-MC-05 (`mission-control/07`) | PR #816, `6712fa52` |
| Stage 4 Blueprint Sections 1–19 | this file | PR #817, `2c44945a` |
| Stage 6 authorization; Builder Review; gate (SB-P-1.14-MC-07, MC-08) | `mission-control/09`, `claude-code/08`–`09`, `mission-control/10` | PR #818 `8bfc100f`; PR #819 `77a05c56` |
| B6-01 reconciliation authorization (SB-P-1.14-MC-09) | `mission-control/11` | PR #820, `28b2b941` |
| B6-01 reconciliation; `FPDR-4` | this file v0.2; `founder/03`; `claude-code/10` | DRAFT — pending Mission Control review |

### FCTM Row-ID to Blueprint Section and Source Traceability

Complete accounting of all 766 canonical FCTM rows (blob `3154330ded098486e6f48ae7a18dbddd93998e5b`), in FCTM order. Each line gives the disposition and owning mission exactly as in the FCTM, the source reference (source code, blob prefix and section; full pointers in the FCTM), the Blueprint location and the FCTM Founder-decision cell. `IN SCOPE` rows map to one Section 8 subsection, plus §15 for acceptance and experience rows, §12 for dependency-coded rows, §10 for must-not rows and §10.1 for rows carrying an SB-P-1.14 Founder decision (`FPDR-1` to `FPDR-4`). All other rows map to Section 11.

Counts: 766 rows — 45 `ASSIGNED TO LATER MISSION`, 104 `DELEGATED`, 563 `IN SCOPE`, 32 `NOT APPLICABLE`, 20 `OUT OF BUILD SCOPE`, 2 `UNRESOLVED FOUNDER DECISION`.

#### FCTM Part A — Contract 3 — Ledger & Business Memory (full mission-assigned contract) (164 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `3-§1` | NOT APPLICABLE | SB-P-1.14 | C3@d8c26c07 §1 | §11 | — |
| `3-§2-1` | NOT APPLICABLE | SB-P-1.14 | C3@d8c26c07 §2 | §11 | — |
| `3-§2-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §2 | §8.1; §10 | — |
| `3-§3` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §3 | §8.1 | — |
| `3-§4-1` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §4 | §8.1; §12 | — |
| `3-§4-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §4 | §8.1; §12 | — |
| `3-§4-3` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §4 | §8.1; §12; §10.1 | FPDR-1; FPDR-4 |
| `3-§4-4` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §4 | §8.1; §12; §10.1 | FPDR-1; FPDR-4 |
| `3-§4-5` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §4 | §8.1; §10 | — |
| `3-§4-6` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §4 | §8.1 | — |
| `3-§5-1` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §5 | §8.1; §12 | — |
| `3-§5-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §5 | §8.1; §15; §12 | — |
| `3-§5-3` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §5 | §8.1; §15; §12 | — |
| `3-§5-4` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §5 | §8.1; §15; §12; §10.1 | FPDR-1; FPDR-4 |
| `3-§5-5` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §5 | §8.1; §15; §12; §10.1 | FPDR-1; FPDR-4 |
| `3-§5-6` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §5 | §8.1; §12 | SB-P-1.13 FPDR-2 |
| `3-§5-7` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §5 | §8.2; §12 | — |
| `3-§5-8` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §5 | §8.2; §12 | — |
| `3-§5-9` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §5 | §8.2; §10 | — |
| `3-§5-10` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §5 | §8.1; §12 | — |
| `3-§6-1` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §6 | §8.1; §12 | — |
| `3-§6-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §6 | §8.1; §12 | — |
| `3-§6-3` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §6 | §8.1; §12 | — |
| `3-§6-4` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §6 | §8.1; §12 | — |
| `3-§6-5` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §6 | §8.1; §12 | — |
| `3-§6-6` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §6 | §8.1; §12 | — |
| `3-§6-7` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §6 | §8.1; §12 | — |
| `3-§6-8` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §6 | §8.1; §12; §10.1 | FPDR-1; FPDR-4 |
| `3-§6-9` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §6 | §8.1; §12 | — |
| `3-§6-10` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §6 | §8.1; §12; §10 | — |
| `3-§7-1` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §7 | §8.3; §12 | — |
| `3-§7-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §7 | §8.3; §12 | — |
| `3-§7-3` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §7 | §8.3; §12 | — |
| `3-§7-4` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §7 | §8.3; §12; §10.1 | FPDR-1 |
| `3-§7-5` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §7 | §8.3; §12 | — |
| `3-§7-6` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §7 | §8.3; §12 | — |
| `3-§7-7` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §7 | §8.3; §12 | — |
| `3-§7-8` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §7 | §8.3; §12 | — |
| `3-§7-9` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §7 | §8.3; §10 | — |
| `3-§8-1` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §12 | — |
| `3-§8-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §12 | — |
| `3-§8-3` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §12 | — |
| `3-§8-4` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §12 | — |
| `3-§8-5` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §12 | — |
| `3-§8-6` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §12 | — |
| `3-§8-7` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §12 | — |
| `3-§8-8` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §12; §10.1 | FPDR-1; FPDR-4 |
| `3-§8-9` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §12 | — |
| `3-§8-10` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §12 | — |
| `3-§8-11` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §12 | — |
| `3-§8-12` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §12 | — |
| `3-§8-13` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §12 | — |
| `3-§8-14` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §12 | — |
| `3-§8-15` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §12 | — |
| `3-§8-16` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §8 | §8.3; §10 | — |
| `3-§9-1` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §9 | §8.6; §12 | — |
| `3-§9-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §9 | §8.6; §12 | — |
| `3-§9-3` | ASSIGNED TO LATER MISSION | SB-P-1.17 / SB-P-1.18 | C3@d8c26c07 §9 | §11 | — |
| `3-§9-4` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §9 | §8.6; §12 | — |
| `3-§9-5` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §9 | §8.6; §12 | — |
| `3-§9-6` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §9 | §8.6; §12 | — |
| `3-§9-7` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §9 | §8.6; §12; §10.1 | FPDR-1; FPDR-4 |
| `3-§9-8` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §9 | §8.6; §12 | — |
| `3-§9-9` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §9 | §8.6; §12 | — |
| `3-§9-10` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §9 | §8.6; §15; §12 | — |
| `3-§9-11` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §9 | §8.6; §15; §12 | — |
| `3-§9-12` | ASSIGNED TO LATER MISSION | SB-P-1.16 | C3@d8c26c07 §9 | §11 | FPDR-1 |
| `3-§9-13` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §9 | §8.6; §15; §12 | — |
| `3-§9-14` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §9 | §8.6; §12 | — |
| `3-§10-1` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §10 | §8.6; §12 | — |
| `3-§10-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §10 | §8.6; §12 | — |
| `3-§10-3` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §10 | §8.6; §12 | — |
| `3-§10-4` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §10 | §8.6; §12 | — |
| `3-§10-5` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §10 | §8.6; §12; §10.1 | FPDR-1; FPDR-4 |
| `3-§10-6` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §10 | §8.6; §12 | — |
| `3-§10-7` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §10 | §8.6; §12 | — |
| `3-§10-8` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §10 | §8.6; §12 | — |
| `3-§10-9` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §10 | §8.6; §12; §10 | — |
| `3-§11-1` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §11 | §8.1; §12 | — |
| `3-§11-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §11 | §8.1; §12 | — |
| `3-§11-3` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §11 | §8.1; §12 | — |
| `3-§11-4` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §11 | §8.1; §12; §10 | — |
| `3-§11-5` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §11 | §8.1; §12; §10 | — |
| `3-§11-6` | ASSIGNED TO LATER MISSION | SB-P-1.16 / SB-P-1.17 / SB-P-1.18 | C3@d8c26c07 §11 | §11 | — |
| `3-§11-7` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §11 | §8.1; §12 | — |
| `3-§12-1` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C3@d8c26c07 §12 | §11 | — |
| `3-§12-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §12 | §8.1; §12 | — |
| `3-§12-3` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §12 | §8.1; §12 | — |
| `3-§12-4` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §12 | §8.1; §12; §10 | — |
| `3-§12-5` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §12 | §8.1 | — |
| `3-§13-1` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C3@d8c26c07 §13 | §11 | — |
| `3-§13-2` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C3@d8c26c07 §13 | §11 | — |
| `3-§13-3` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C3@d8c26c07 §13 | §11 | — |
| `3-§14-1` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C3@d8c26c07 §14 | §11 | — |
| `3-§14-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §14 | §8.1 | — |
| `3-§15-1` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §15 | §8.1 | — |
| `3-§15-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §15 | §8.1; §12 | — |
| `3-§15-3` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §15 | §8.1; §12 | — |
| `3-§15-4` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §15 | §8.1; §12 | — |
| `3-§15-5` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §15 | §8.1; §12 | — |
| `3-§15-6` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C3@d8c26c07 §15 | §11 | — |
| `3-§15-7` | ASSIGNED TO LATER MISSION | SB-P-1.17 / SB-P-1.18 | C3@d8c26c07 §15 | §11 | — |
| `3-§15-8` | ASSIGNED TO LATER MISSION | SB-P-1.16 | C3@d8c26c07 §15 | §11 | — |
| `3-§15-9` | ASSIGNED TO LATER MISSION | SB-P-1.16 | C3@d8c26c07 §15 | §11 | — |
| `3-§15-10` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C3@d8c26c07 §15 | §11 | — |
| `3-§15-11` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C3@d8c26c07 §15 | §11 | — |
| `3-§15-12` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C3@d8c26c07 §15 | §11 | — |
| `3-§15-13` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C3@d8c26c07 §15 | §11 | — |
| `3-§16-1` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §16 | §8.3; §12 | — |
| `3-§16-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §16 | §8.3; §12 | — |
| `3-§16-3` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §16 | §8.3; §12 | — |
| `3-§16-4` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §16 | §8.3; §12 | — |
| `3-§16-5` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §16 | §8.3; §12 | — |
| `3-§16-6` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §16 | §8.3; §12 | — |
| `3-§16-7` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §16 | §8.3; §12 | — |
| `3-§16-8` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §16 | §8.3; §12; §10 | — |
| `3-§16-9` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §16 | §8.3; §12; §10 | — |
| `3-§16-10` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §16 | §8.3; §12; §10 | — |
| `3-§16-11` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §16 | §8.3; §12; §10 | — |
| `3-§16-12` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §16 | §8.3; §12; §10 | — |
| `3-§16-13` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §16 | §8.3; §12; §10 | — |
| `3-§16-14` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §16 | §8.3; §12; §10 | — |
| `3-§17-1` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §17 | §8.7 | — |
| `3-§17-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §17 | §8.7; §12 | — |
| `3-§17-3` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §17 | §8.7; §12 | — |
| `3-§17-4` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §17 | §8.7 | — |
| `3-§17-5` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §17 | §8.7 | — |
| `3-§17-6` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §17 | §8.7; §12 | — |
| `3-§17-7` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §17 | §8.7; §12 | — |
| `3-§17-8` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §17 | §8.7; §12 | — |
| `3-§17-9` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §17 | §8.7; §12 | — |
| `3-§17-10` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §17 | §8.7; §12 | — |
| `3-§17-11` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §17 | §8.7 | — |
| `3-§18-1` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §18 | §8.1; §12 | — |
| `3-§18-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §18 | §8.1; §12 | — |
| `3-§18-3` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §18 | §8.1; §12 | — |
| `3-§18-4` | DELEGATED | SB-P-1.12 | C3@d8c26c07 §18 | §11 | — |
| `3-§18-5` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §18 | §8.1; §12; §10 | — |
| `3-§18-6` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §18 | §8.1; §10 | — |
| `3-§19-1` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §19 | §8.1; §15; §12 | — |
| `3-§19-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §19 | §8.1; §15; §12; §10.1 | FPDR-1; FPDR-4 |
| `3-§19-3` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §19 | §8.1; §15; §12 | SB-P-1.13 FPDR-2 |
| `3-§19-4` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §19 | §8.3; §15; §12 | — |
| `3-§19-5` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §19 | §8.3; §15; §12 | — |
| `3-§19-6` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §19 | §8.7; §15; §12 | — |
| `3-§19-7` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §19 | §8.3; §15; §12 | — |
| `3-§19-8` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §19 | §8.6; §15; §12 | — |
| `3-§19-9` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §19 | §8.4; §15; §12 | — |
| `3-§19-10` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §19 | §8.1; §15; §12 | — |
| `3-§19-11` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §19 | §8.1; §15; §12 | — |
| `3-§19-12` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §19 | §8.6; §15; §12 | — |
| `3-§19-13a` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §19 | §8.1; §15; §12 | — |
| `3-§19-13b` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C3@d8c26c07 §19 | §11 | — |
| `3-§19-14` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §19 | §8.7; §15; §12 | — |
| `3-§20-1` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §20 | §8.9; §10 | — |
| `3-§20-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §20 | §8.9; §10 | — |
| `3-§20-3` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §20 | §8.9; §10 | — |
| `3-§20-4` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §20 | §8.9; §10 | — |
| `3-§20-5` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §20 | §8.9; §10 | — |
| `3-§20-6` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §20 | §8.9; §10 | — |
| `3-§21` | NOT APPLICABLE | SB-P-1.14 | C3@d8c26c07 §21 | §11 | — |
| `3-§22-1` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §22 | §8.1; §12 | — |
| `3-§22-2` | IN SCOPE | SB-P-1.14 | C3@d8c26c07 §22 | §8.1; §12 | — |
| `3-§23` | NOT APPLICABLE | SB-P-1.14 | C3@d8c26c07 §23 | §11 | — |

#### FCTM Part B — Contract 5 — Universal Document & Receipt Intelligence (full mission-assigned contract) (153 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `5-§1` | NOT APPLICABLE | SB-P-1.14 | C5@80ac648e §1 | §11 | — |
| `5-§2-1` | NOT APPLICABLE | SB-P-1.14 | C5@80ac648e §2 | §11 | — |
| `5-§2-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §2 | §8.2; §10 | — |
| `5-§3-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §3 | §8.2; §12 | — |
| `5-§3-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §3 | §8.2; §12 | — |
| `5-§3-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §3 | §8.2; §12 | — |
| `5-§4-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §4 | §8.2; §12 | — |
| `5-§4-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §4 | §8.2; §12 | — |
| `5-§4-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §4 | §8.2; §12 | — |
| `5-§4-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §4 | §8.2 | — |
| `5-§4-5` | IN SCOPE | SB-P-1.14 | C5@80ac648e §4 | §8.2 | — |
| `5-§4-6` | IN SCOPE | SB-P-1.14 | C5@80ac648e §4 | §8.2; §12 | — |
| `5-§4-7` | IN SCOPE | SB-P-1.14 | C5@80ac648e §4 | §8.2; §12 | — |
| `5-§4-8` | IN SCOPE | SB-P-1.14 | C5@80ac648e §4 | §8.2; §12 | — |
| `5-§4-9` | IN SCOPE | SB-P-1.14 | C5@80ac648e §4 | §8.2 | — |
| `5-§4-10` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C5@80ac648e §4 | §11 | — |
| `5-§4-11` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C5@80ac648e §4 | §11 | — |
| `5-§4-12` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C5@80ac648e §4 | §11 | — |
| `5-§4-13` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C5@80ac648e §4 | §11 | — |
| `5-§4-14` | IN SCOPE | SB-P-1.14 | C5@80ac648e §4 | §8.2 | — |
| `5-§5-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §5 | §8.2; §12 | — |
| `5-§5-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §5 | §8.2; §12 | — |
| `5-§5-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §5 | §8.2; §12 | — |
| `5-§5-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §5 | §8.2; §12 | — |
| `5-§5-5` | IN SCOPE | SB-P-1.14 | C5@80ac648e §5 | §8.2; §12 | — |
| `5-§5-6` | IN SCOPE | SB-P-1.14 | C5@80ac648e §5 | §8.2; §12 | — |
| `5-§5-7` | IN SCOPE | SB-P-1.14 | C5@80ac648e §5 | §8.2; §12 | — |
| `5-§5-8` | IN SCOPE | SB-P-1.14 | C5@80ac648e §5 | §8.2; §12 | — |
| `5-§5-9` | IN SCOPE | SB-P-1.14 | C5@80ac648e §5 | §8.2; §12; §10 | — |
| `5-§6-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §6 | §8.4; §12; §10.1 | FPDR-2 |
| `5-§6-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §6 | §8.4; §12 | — |
| `5-§6-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §6 | §8.4; §12 | — |
| `5-§6-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §6 | §8.4; §12 | — |
| `5-§6-5` | IN SCOPE | SB-P-1.14 | C5@80ac648e §6 | §8.4; §12 | — |
| `5-§6-6` | IN SCOPE | SB-P-1.14 | C5@80ac648e §6 | §8.4; §12 | — |
| `5-§6-7` | IN SCOPE | SB-P-1.14 | C5@80ac648e §6 | §8.4; §12 | — |
| `5-§6-8` | IN SCOPE | SB-P-1.14 | C5@80ac648e §6 | §8.4; §12 | — |
| `5-§6-9` | IN SCOPE | SB-P-1.14 | C5@80ac648e §6 | §8.4; §12 | — |
| `5-§6-10` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C5@80ac648e §6 | §11 | — |
| `5-§6-11` | IN SCOPE | SB-P-1.14 | C5@80ac648e §6 | §8.4; §12 | — |
| `5-§6-12` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C5@80ac648e §6 | §11 | — |
| `5-§6-13` | IN SCOPE | SB-P-1.14 | C5@80ac648e §6 | §8.4; §10 | — |
| `5-§7-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §7 | §8.2 | — |
| `5-§7-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §7 | §8.2; §15; §12 | — |
| `5-§7-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §7 | §8.2; §15; §12 | — |
| `5-§7-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §7 | §8.2; §15; §12 | — |
| `5-§7-5` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C5@80ac648e §7 | §11 | — |
| `5-§7-6` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C5@80ac648e §7 | §11 | — |
| `5-§7-7` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C5@80ac648e §7 | §11 | — |
| `5-§7-8` | IN SCOPE | SB-P-1.14 | C5@80ac648e §7 | §8.2; §12 | — |
| `5-§8-1` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C5@80ac648e §8 | §11 | — |
| `5-§8-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §8 | §8.2; §12 | — |
| `5-§8-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §8 | §8.2; §12 | — |
| `5-§8-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §8 | §8.2; §12; §10 | — |
| `5-§9-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §9 | §8.3; §12 | — |
| `5-§9-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §9 | §8.3; §12 | — |
| `5-§9-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §9 | §8.3; §12 | — |
| `5-§9-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §9 | §8.3; §12 | — |
| `5-§9-5` | IN SCOPE | SB-P-1.14 | C5@80ac648e §9 | §8.3; §12 | — |
| `5-§9-6` | IN SCOPE | SB-P-1.14 | C5@80ac648e §9 | §8.3; §12 | — |
| `5-§9-7` | IN SCOPE | SB-P-1.14 | C5@80ac648e §9 | §8.3; §12 | — |
| `5-§9-8` | IN SCOPE | SB-P-1.14 | C5@80ac648e §9 | §8.3; §12 | — |
| `5-§9-9` | IN SCOPE | SB-P-1.14 | C5@80ac648e §9 | §8.3; §12 | — |
| `5-§10-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §10 | §8.3; §12 | — |
| `5-§10-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §10 | §8.3 | — |
| `5-§10-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §10 | §8.3; §12 | — |
| `5-§10-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §10 | §8.3; §12 | — |
| `5-§10-5` | IN SCOPE | SB-P-1.14 | C5@80ac648e §10 | §8.3 | — |
| `5-§10-6` | IN SCOPE | SB-P-1.14 | C5@80ac648e §10 | §8.3 | — |
| `5-§10-7` | IN SCOPE | SB-P-1.14 | C5@80ac648e §10 | §8.3 | — |
| `5-§10-8` | IN SCOPE | SB-P-1.14 | C5@80ac648e §10 | §8.3; §12 | — |
| `5-§10-9` | IN SCOPE | SB-P-1.14 | C5@80ac648e §10 | §8.3; §12 | — |
| `5-§10-10` | IN SCOPE | SB-P-1.14 | C5@80ac648e §10 | §8.3 | — |
| `5-§11-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §11 | §8.7; §12 | — |
| `5-§11-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §11 | §8.7; §12 | — |
| `5-§11-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §11 | §8.7; §12 | — |
| `5-§11-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §11 | §8.7; §12 | — |
| `5-§11-5` | IN SCOPE | SB-P-1.14 | C5@80ac648e §11 | §8.7 | — |
| `5-§12-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §12 | §8.7; §12 | — |
| `5-§12-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §12 | §8.7; §12 | — |
| `5-§12-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §12 | §8.7; §12 | — |
| `5-§12-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §12 | §8.7; §12 | — |
| `5-§12-5` | IN SCOPE | SB-P-1.14 | C5@80ac648e §12 | §8.7; §12; §10 | — |
| `5-§12-6` | IN SCOPE | SB-P-1.14 | C5@80ac648e §12 | §8.7; §12; §10 | — |
| `5-§12-7` | DELEGATED | SB-P-1.12 | C5@80ac648e §12 | §11 | — |
| `5-§13-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §13 | §8.2; §12 | — |
| `5-§13-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §13 | §8.2; §12 | — |
| `5-§13-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §13 | §8.2; §12 | — |
| `5-§13-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §13 | §8.2; §12 | — |
| `5-§13-5` | IN SCOPE | SB-P-1.14 | C5@80ac648e §13 | §8.2; §12 | — |
| `5-§13-6` | IN SCOPE | SB-P-1.14 | C5@80ac648e §13 | §8.2; §12 | — |
| `5-§13-7` | IN SCOPE | SB-P-1.14 | C5@80ac648e §13 | §8.2; §12 | — |
| `5-§13-8` | IN SCOPE | SB-P-1.14 | C5@80ac648e §13 | §8.2; §12; §10 | — |
| `5-§13-9` | IN SCOPE | SB-P-1.14 | C5@80ac648e §13 | §8.2; §12; §10 | — |
| `5-§13-10` | IN SCOPE | SB-P-1.14 | C5@80ac648e §13 | §8.2; §12; §10 | — |
| `5-§13-11` | IN SCOPE | SB-P-1.14 | C5@80ac648e §13 | §8.2; §12; §10 | — |
| `5-§13-12` | IN SCOPE | SB-P-1.14 | C5@80ac648e §13 | §8.2; §12; §10 | — |
| `5-§14-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §14 | §8.2; §12 | — |
| `5-§14-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §14 | §8.2; §12 | — |
| `5-§14-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §14 | §8.2; §12 | — |
| `5-§14-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §14 | §8.2; §12 | — |
| `5-§14-5` | IN SCOPE | SB-P-1.14 | C5@80ac648e §14 | §8.2; §12 | — |
| `5-§14-6` | IN SCOPE | SB-P-1.14 | C5@80ac648e §14 | §8.2; §12 | — |
| `5-§14-7` | IN SCOPE | SB-P-1.14 | C5@80ac648e §14 | §8.2; §12 | — |
| `5-§14-8` | IN SCOPE | SB-P-1.14 | C5@80ac648e §14 | §8.2; §10 | — |
| `5-§15-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §15 | §8.4; §12 | — |
| `5-§15-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §15 | §8.4; §12 | — |
| `5-§15-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §15 | §8.4; §12 | — |
| `5-§15-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §15 | §8.4; §12 | — |
| `5-§15-5` | IN SCOPE | SB-P-1.14 | C5@80ac648e §15 | §8.4; §12 | — |
| `5-§15-6` | IN SCOPE | SB-P-1.14 | C5@80ac648e §15 | §8.4; §12 | — |
| `5-§15-7` | IN SCOPE | SB-P-1.14 | C5@80ac648e §15 | §8.4; §12 | — |
| `5-§15-8` | IN SCOPE | SB-P-1.14 | C5@80ac648e §15 | §8.4; §12 | — |
| `5-§15-9` | IN SCOPE | SB-P-1.14 | C5@80ac648e §15 | §8.4; §12 | — |
| `5-§15-10` | IN SCOPE | SB-P-1.14 | C5@80ac648e §15 | §8.4; §12 | — |
| `5-§15-11` | IN SCOPE | SB-P-1.14 | C5@80ac648e §15 | §8.4 | — |
| `5-§16-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §16 | §8.7; §12 | — |
| `5-§16-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §16 | §8.5; §12 | — |
| `5-§16-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §16 | §8.5; §12; §10.1 | FPDR-2 |
| `5-§16-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §16 | §8.2 | — |
| `5-§16-5` | IN SCOPE | SB-P-1.14 | C5@80ac648e §16 | §8.2 | — |
| `5-§16-6` | IN SCOPE | SB-P-1.14 | C5@80ac648e §16 | §8.7; §12; §10 | — |
| `5-§16-7` | IN SCOPE | SB-P-1.14 | C5@80ac648e §16 | §8.2; §12; §10 | — |
| `5-§17-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §17 | §8.7 | — |
| `5-§17-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §17 | §8.7 | — |
| `5-§17-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §17 | §8.7 | — |
| `5-§17-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §17 | §8.7; §12 | — |
| `5-§17-5` | IN SCOPE | SB-P-1.14 | C5@80ac648e §17 | §8.7; §12 | — |
| `5-§17-6` | IN SCOPE | SB-P-1.14 | C5@80ac648e §17 | §8.7; §12 | — |
| `5-§17-7` | IN SCOPE | SB-P-1.14 | C5@80ac648e §17 | §8.7; §12 | — |
| `5-§17-8` | IN SCOPE | SB-P-1.14 | C5@80ac648e §17 | §8.7; §12 | — |
| `5-§17-9` | IN SCOPE | SB-P-1.14 | C5@80ac648e §17 | §8.7; §12 | — |
| `5-§17-10` | IN SCOPE | SB-P-1.14 | C5@80ac648e §17 | §8.7; §12 | — |
| `5-§17-11` | IN SCOPE | SB-P-1.14 | C5@80ac648e §17 | §8.7; §10 | — |
| `5-§18-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §18 | §8.3; §15; §12 | — |
| `5-§18-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §18 | §8.3; §15; §12 | — |
| `5-§18-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §18 | §8.2; §15; §12 | — |
| `5-§18-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §18 | §8.2; §15; §12 | — |
| `5-§18-5` | IN SCOPE | SB-P-1.14 | C5@80ac648e §18 | §8.2; §15; §12 | — |
| `5-§18-6` | IN SCOPE | SB-P-1.14 | C5@80ac648e §18 | §8.7; §15; §12 | — |
| `5-§18-7` | IN SCOPE | SB-P-1.14 | C5@80ac648e §18 | §8.4; §15; §12 | — |
| `5-§18-8a` | IN SCOPE | SB-P-1.14 | C5@80ac648e §18 | §8.2; §15; §12 | — |
| `5-§18-8b` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C5@80ac648e §18 | §11 | — |
| `5-§18-9` | IN SCOPE | SB-P-1.14 | C5@80ac648e §18 | §8.7; §15; §12 | — |
| `5-§18-10` | IN SCOPE | SB-P-1.14 | C5@80ac648e §18 | §8.7; §15; §12 | — |
| `5-§18-11` | IN SCOPE | SB-P-1.14 | C5@80ac648e §18 | §8.7; §15 | — |
| `5-§19-1` | IN SCOPE | SB-P-1.14 | C5@80ac648e §19 | §8.9; §10 | — |
| `5-§19-2` | IN SCOPE | SB-P-1.14 | C5@80ac648e §19 | §8.9; §10 | — |
| `5-§19-3` | IN SCOPE | SB-P-1.14 | C5@80ac648e §19 | §8.9; §10 | — |
| `5-§19-4` | IN SCOPE | SB-P-1.14 | C5@80ac648e §19 | §8.9; §10 | — |
| `5-§19-5` | IN SCOPE | SB-P-1.14 | C5@80ac648e §19 | §8.9; §10 | — |
| `5-§20` | NOT APPLICABLE | SB-P-1.14 | C5@80ac648e §20 | §11 | — |
| `5-§21` | NOT APPLICABLE | SB-P-1.14 | C5@80ac648e §21 | §11 | — |

#### FCTM Part C — Contract 22 — Shared Product Foundations (every section represented; SB-P-1.14 obligations expanded) (120 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `22-§1` | NOT APPLICABLE | SB-P-1.14 | C22@61e1bb91 §1 | §11 | — |
| `22-§2` | NOT APPLICABLE | SB-P-1.14 | C22@61e1bb91 §2 | §11 | — |
| `22-§3` | NOT APPLICABLE | SB-P-1.14 | C22@61e1bb91 §3 | §11 | — |
| `22-§4-1` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §4 | §8.1; §12 | — |
| `22-§4-2` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §4 | §8.1; §12 | — |
| `22-§4-3` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §4 | §8.1 | — |
| `22-§4-4` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §4 | §8.1; §10 | — |
| `22-§5` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §5 | §11 | — |
| `22-§6-1` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §6 | §11 | — |
| `22-§6-2` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §6 | §11 | — |
| `22-§6-3` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §6 | §11 | — |
| `22-§6-4` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §6 | §11 | — |
| `22-§6-5` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §6 | §11 | — |
| `22-§6-6` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §6 | §11 | — |
| `22-§6-7` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §6 | §11 | — |
| `22-§6-8` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §6 | §11 | — |
| `22-§6-9` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §6 | §11 | — |
| `22-§6-10` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §6 | §11 | — |
| `22-§7` | DELEGATED | SB-P-1.13 | C22@61e1bb91 §7 | §11 | — |
| `22-§8` | DELEGATED | SB-P-1.13 | C22@61e1bb91 §8 | §11 | — |
| `22-§9-1` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §9 | §8.2; §12 | — |
| `22-§9-2` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §9 | §8.2; §12 | — |
| `22-§9-3` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §9 | §8.2; §10 | — |
| `22-§10-1` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §10 | §8.4; §12 | — |
| `22-§10-2` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §10 | §8.4; §12 | — |
| `22-§10-3` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §10 | §8.4; §12 | — |
| `22-§10-4` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §10 | §8.4; §12 | — |
| `22-§10-5` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §10 | §8.4; §12; §10.1 | FPDR-2 |
| `22-§10-6` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §10 | §8.4; §12 | — |
| `22-§10-7` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §10 | §8.4; §10 | — |
| `22-§11` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C22@61e1bb91 §11 | §11 | — |
| `22-§12` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C22@61e1bb91 §12 | §11 | — |
| `22-§13-1` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §13 | §11 | — |
| `22-§13-2` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §13 | §11 | — |
| `22-§13-3` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §13 | §11 | — |
| `22-§13-4` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §13 | §11 | FPDR-3 |
| `22-§13-5` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §13 | §11 | — |
| `22-§14` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §14 | §11 | — |
| `22-§15` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §15 | §11 | — |
| `22-§16` | NOT APPLICABLE | SB-P-1.14 | C22@61e1bb91 §16 | §11 | — |
| `22-§17-1` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §17 | §8.5 | — |
| `22-§17-2` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C22@61e1bb91 §17 | §11 | — |
| `22-§17-3` | ASSIGNED TO LATER MISSION | SB-P-1.16 | C22@61e1bb91 §17 | §11 | — |
| `22-§17-4` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C22@61e1bb91 §17 | §11 | — |
| `22-§17-5` | DELEGATED | SB-P-1.13 | C22@61e1bb91 §17 | §11 | — |
| `22-§17-6` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C22@61e1bb91 §17 | §11 | — |
| `22-§17-7` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §17 | §8.5; §12 | — |
| `22-§17-8` | NOT APPLICABLE | SB-P-1.14 | C22@61e1bb91 §17 | §11 | — |
| `22-§17-9` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §17 | §8.9; §10 | — |
| `22-§18` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C22@61e1bb91 §18 | §11 | — |
| `22-§19-1` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §19 | §8.7 | — |
| `22-§19-2` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §19 | §8.7; §12 | — |
| `22-§19-3` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §19 | §8.7 | — |
| `22-§19-4` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §19 | §8.7 | — |
| `22-§19-5` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §19 | §8.7 | — |
| `22-§19-6` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §19 | §8.7; §12 | — |
| `22-§19-7` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §19 | §8.7; §12 | — |
| `22-§20` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §20 | §11 | — |
| `22-§21` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §21 | §8.8; §12 | — |
| `22-§22-1` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §22 | §8.8 | — |
| `22-§22-2` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §22 | §8.8 | — |
| `22-§22-3` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §22 | §8.8 | — |
| `22-§22-4` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §22 | §8.8 | — |
| `22-§22-5` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §22 | §8.8 | — |
| `22-§22-6` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §22 | §8.8; §10 | — |
| `22-§23-1` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §23 | §11 | — |
| `22-§23-2` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §23 | §8.7; §12; §10 | — |
| `22-§23-3` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §23 | §8.7; §12; §10 | — |
| `22-§23-4` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §23 | §11 | — |
| `22-§23-5` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §23 | §8.7; §12; §10 | — |
| `22-§23-6` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §23 | §11 | — |
| `22-§23-7` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §23 | §8.7; §10 | — |
| `22-§24` | DELEGATED | SB-P-1.13 | C22@61e1bb91 §24 | §11 | — |
| `22-§25` | DELEGATED | SB-P-1.13 | C22@61e1bb91 §25 | §11 | — |
| `22-§26` | DELEGATED | SB-P-1.20 | C22@61e1bb91 §26 | §11 | — |
| `22-§27-1` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §27 | §8.8 | — |
| `22-§27-2` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §27 | §8.8 | — |
| `22-§27-3` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §27 | §8.8 | — |
| `22-§27-4` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §27 | §8.8 | — |
| `22-§27-5` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §27 | §8.8 | — |
| `22-§27-6` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §27 | §8.8 | — |
| `22-§27-7` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §27 | §8.8 | — |
| `22-§27-8` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §27 | §8.8; §10 | — |
| `22-§28-1` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §28 | §8.9; §10 | — |
| `22-§28-2` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §28 | §8.9; §10 | — |
| `22-§28-3` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §28 | §8.9; §10 | — |
| `22-§28-4` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §28 | §8.9; §10 | — |
| `22-§28-5` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §28 | §8.9; §10 | — |
| `22-§28-6` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §28 | §8.9; §10 | — |
| `22-§28-7` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §28 | §8.9; §10 | — |
| `22-§28-8` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §28 | §8.9; §10 | — |
| `22-§28-9` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §28 | §8.9; §10 | — |
| `22-§28-10` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §28 | §8.9; §10 | — |
| `22-§29-1` | DELEGATED | SB-P-1.13 | C22@61e1bb91 §29 | §11 | — |
| `22-§29-2` | DELEGATED | SB-P-1.13 | C22@61e1bb91 §29 | §11 | — |
| `22-§29-3` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §29 | §8.7; §15; §12 | — |
| `22-§29-4` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C22@61e1bb91 §29 | §11 | — |
| `22-§29-5` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §29 | §8.2; §15; §12 | — |
| `22-§29-6` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §29 | §11 | — |
| `22-§29-7` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §29 | §8.3; §15; §12 | — |
| `22-§29-8` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §29 | §8.7; §15; §12 | — |
| `22-§29-9` | NOT APPLICABLE | SB-P-1.14 | C22@61e1bb91 §29 | §11 | — |
| `22-§29-10` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §29 | §8.7; §15; §12 | — |
| `22-§29-11` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §29 | §11 | — |
| `22-§29-12` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §29 | §8.4; §15; §12 | — |
| `22-§29-13` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §29 | §8.7; §15; §12 | — |
| `22-§29-14` | IN SCOPE | SB-P-1.14 | C22@61e1bb91 §29 | §8.8; §15 | — |
| `22-§30` | NOT APPLICABLE | SB-P-1.14 | C22@61e1bb91 §30 | §11 | — |
| `22-§31` | NOT APPLICABLE | SB-P-1.14 | C22@61e1bb91 §31 | §11 | — |
| `22-§32` | NOT APPLICABLE | SB-P-1.14 | C22@61e1bb91 §32 | §11 | — |
| `22-§33-1` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §33 | §11 | — |
| `22-§33-2` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §33 | §11 | — |
| `22-§33-3` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §33 | §11 | — |
| `22-§33-4` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §33 | §11 | — |
| `22-§33-5` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §33 | §11 | — |
| `22-§33-6` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §33 | §11 | — |
| `22-§33-7` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §33 | §11 | — |
| `22-§33-8` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §33 | §11 | — |
| `22-§33-9` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §33 | §11 | — |
| `22-§33-10` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §33 | §11 | — |

#### FCTM Part D — Contract 25 — Document, Media Storage & Retention Foundation (full mission-assigned contract) (166 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `25-§1` | NOT APPLICABLE | SB-P-1.14 | C25@406ce089 §1 | §11 | — |
| `25-§2` | NOT APPLICABLE | SB-P-1.14 | C25@406ce089 §2 | §11 | — |
| `25-§3` | NOT APPLICABLE | SB-P-1.14 | C25@406ce089 §3 | §11 | — |
| `25-§4-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §4 | §8.5; §12 | — |
| `25-§4-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §4 | §8.5; §12 | — |
| `25-§4-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §4 | §8.5; §12 | — |
| `25-§4-4` | IN SCOPE | SB-P-1.14 | C25@406ce089 §4 | §8.5; §12 | — |
| `25-§4-5` | IN SCOPE | SB-P-1.14 | C25@406ce089 §4 | §8.5; §12 | — |
| `25-§4-6` | IN SCOPE | SB-P-1.14 | C25@406ce089 §4 | §8.5; §12 | — |
| `25-§4-7` | IN SCOPE | SB-P-1.14 | C25@406ce089 §4 | §8.5; §12 | — |
| `25-§4-8` | IN SCOPE | SB-P-1.14 | C25@406ce089 §4 | §8.5; §12 | — |
| `25-§4-9` | IN SCOPE | SB-P-1.14 | C25@406ce089 §4 | §8.5; §12 | — |
| `25-§4-10` | IN SCOPE | SB-P-1.14 | C25@406ce089 §4 | §8.5; §12 | — |
| `25-§4-11` | IN SCOPE | SB-P-1.14 | C25@406ce089 §4 | §8.5; §12 | — |
| `25-§4-12` | IN SCOPE | SB-P-1.14 | C25@406ce089 §4 | §8.5; §12; §10 | — |
| `25-§5-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §5 | §8.5; §12 | — |
| `25-§5-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §5 | §8.5 | — |
| `25-§6-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §6 | §8.5; §12 | — |
| `25-§6-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §6 | §8.5 | — |
| `25-§7-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §7 | §8.5; §12 | — |
| `25-§7-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §7 | §8.5 | — |
| `25-§8-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §8 | §8.5; §12 | — |
| `25-§8-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §8 | §8.5; §12 | — |
| `25-§8-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §8 | §8.5; §12 | — |
| `25-§8-4` | IN SCOPE | SB-P-1.14 | C25@406ce089 §8 | §8.5 | — |
| `25-§8-5` | IN SCOPE | SB-P-1.14 | C25@406ce089 §8 | §8.5; §12 | — |
| `25-§8-6` | IN SCOPE | SB-P-1.14 | C25@406ce089 §8 | §8.5; §12 | — |
| `25-§8-7` | IN SCOPE | SB-P-1.14 | C25@406ce089 §8 | §8.5; §12 | — |
| `25-§8-8` | IN SCOPE | SB-P-1.14 | C25@406ce089 §8 | §8.5; §12 | — |
| `25-§8-9` | IN SCOPE | SB-P-1.14 | C25@406ce089 §8 | §8.5; §12 | — |
| `25-§8-10` | IN SCOPE | SB-P-1.14 | C25@406ce089 §8 | §8.5; §12 | — |
| `25-§8-11` | IN SCOPE | SB-P-1.14 | C25@406ce089 §8 | §8.5; §12; §10 | — |
| `25-§9-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §9 | §8.5; §12 | — |
| `25-§9-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §9 | §8.5; §12 | — |
| `25-§9-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §9 | §8.5; §12 | — |
| `25-§9-4` | IN SCOPE | SB-P-1.14 | C25@406ce089 §9 | §8.5; §12 | — |
| `25-§9-5` | IN SCOPE | SB-P-1.14 | C25@406ce089 §9 | §8.5; §12 | — |
| `25-§9-6` | IN SCOPE | SB-P-1.14 | C25@406ce089 §9 | §8.5; §12 | — |
| `25-§9-7` | IN SCOPE | SB-P-1.14 | C25@406ce089 §9 | §8.5; §12 | — |
| `25-§9-8` | IN SCOPE | SB-P-1.14 | C25@406ce089 §9 | §8.5; §12 | — |
| `25-§10-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §10 | §8.4; §10 | — |
| `25-§10-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §10 | §8.4 | — |
| `25-§10-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §10 | §8.4; §12 | — |
| `25-§10-4` | IN SCOPE | SB-P-1.14 | C25@406ce089 §10 | §8.4; §12 | — |
| `25-§10-5` | IN SCOPE | SB-P-1.14 | C25@406ce089 §10 | §8.4; §12 | — |
| `25-§10-6` | IN SCOPE | SB-P-1.14 | C25@406ce089 §10 | §8.4; §12 | — |
| `25-§10-7` | IN SCOPE | SB-P-1.14 | C25@406ce089 §10 | §8.4; §12 | — |
| `25-§10-8` | IN SCOPE | SB-P-1.14 | C25@406ce089 §10 | §8.4; §12 | — |
| `25-§10-9` | IN SCOPE | SB-P-1.14 | C25@406ce089 §10 | §8.4; §12 | — |
| `25-§10-10` | IN SCOPE | SB-P-1.14 | C25@406ce089 §10 | §8.4; §12 | — |
| `25-§10-11` | IN SCOPE | SB-P-1.14 | C25@406ce089 §10 | §8.4; §12 | — |
| `25-§10-12` | IN SCOPE | SB-P-1.14 | C25@406ce089 §10 | §8.4; §12 | — |
| `25-§11-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §11 | §8.4; §12 | — |
| `25-§11-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §11 | §8.4; §10 | — |
| `25-§11-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §11 | §8.4; §12 | — |
| `25-§11-4` | IN SCOPE | SB-P-1.14 | C25@406ce089 §11 | §8.4 | — |
| `25-§12-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §12 | §8.5; §12; §10.1 | SB-P-1.13 FPDR-3; FPDR-2 |
| `25-§12-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §12 | §8.5; §12 | — |
| `25-§12-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §12 | §8.5; §12; §10; §10.1 | SB-P-1.13 FPDR-3; FPDR-2 |
| `25-§13-1a` | IN SCOPE | SB-P-1.14 | C25@406ce089 §13 | §8.5; §12 | — |
| `25-§13-1b` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C25@406ce089 §13 | §11 | — |
| `25-§13-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §13 | §8.5; §10 | — |
| `25-§13-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §13 | §8.5; §12 | — |
| `25-§14-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §14 | §8.5; §12 | — |
| `25-§14-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §14 | §8.5; §12 | — |
| `25-§14-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §14 | §8.5; §12 | — |
| `25-§14-4` | IN SCOPE | SB-P-1.14 | C25@406ce089 §14 | §8.5 | — |
| `25-§14-5` | IN SCOPE | SB-P-1.14 | C25@406ce089 §14 | §8.5; §12 | — |
| `25-§14-6` | IN SCOPE | SB-P-1.14 | C25@406ce089 §14 | §8.5; §12 | — |
| `25-§14-7` | IN SCOPE | SB-P-1.14 | C25@406ce089 §14 | §8.5; §10 | — |
| `25-§15-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §15 | §8.5; §12 | — |
| `25-§15-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §15 | §8.5 | — |
| `25-§15-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §15 | §8.5; §10 | — |
| `25-§15-4` | IN SCOPE | SB-P-1.14 | C25@406ce089 §15 | §8.5; §12 | — |
| `25-§16-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §16 | §8.5; §12 | — |
| `25-§16-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §16 | §8.5; §12 | — |
| `25-§16-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §16 | §8.5; §10 | — |
| `25-§17-1` | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | C25@406ce089 §17 | §11 | BP §15-6 (open) |
| `25-§17-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §17 | §8.5; §12 | — |
| `25-§17-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §17 | §8.5; §12 | — |
| `25-§17-4` | IN SCOPE | SB-P-1.14 | C25@406ce089 §17 | §8.5; §10 | — |
| `25-§17-5` | IN SCOPE | SB-P-1.14 | C25@406ce089 §17 | §8.5; §12 | — |
| `25-§17-6` | IN SCOPE | SB-P-1.14 | C25@406ce089 §17 | §8.5; §12; §10.1 | FPDR-2 |
| `25-§17-7` | IN SCOPE | SB-P-1.14 | C25@406ce089 §17 | §8.5; §10 | — |
| `25-§18-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §18 | §8.5; §12 | — |
| `25-§18-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §18 | §8.5; §12 | — |
| `25-§18-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §18 | §8.5; §12; §10 | — |
| `25-§19-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §19 | §8.5; §12 | — |
| `25-§19-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §19 | §8.5; §12; §10 | — |
| `25-§19-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §19 | §8.5; §12; §10 | — |
| `25-§19-4` | IN SCOPE | SB-P-1.14 | C25@406ce089 §19 | §8.5; §12 | — |
| `25-§19-5` | IN SCOPE | SB-P-1.14 | C25@406ce089 §19 | §8.5; §12 | — |
| `25-§19-6` | IN SCOPE | SB-P-1.14 | C25@406ce089 §19 | §8.5; §10 | — |
| `25-§19-7` | IN SCOPE | SB-P-1.14 | C25@406ce089 §19 | §8.5; §12 | — |
| `25-§19-8` | IN SCOPE | SB-P-1.14 | C25@406ce089 §19 | §8.5 | — |
| `25-§20-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §20 | §8.7; §12 | — |
| `25-§20-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §20 | §8.7; §12 | — |
| `25-§20-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §20 | §8.7; §12 | — |
| `25-§20-4` | IN SCOPE | SB-P-1.14 | C25@406ce089 §20 | §8.7; §12 | — |
| `25-§20-5` | IN SCOPE | SB-P-1.14 | C25@406ce089 §20 | §8.7; §12 | — |
| `25-§20-6` | IN SCOPE | SB-P-1.14 | C25@406ce089 §20 | §8.7; §12 | — |
| `25-§20-7` | IN SCOPE | SB-P-1.14 | C25@406ce089 §20 | §8.7; §12 | — |
| `25-§20-8` | IN SCOPE | SB-P-1.14 | C25@406ce089 §20 | §8.7; §12 | — |
| `25-§20-9` | IN SCOPE | SB-P-1.14 | C25@406ce089 §20 | §8.7; §12 | — |
| `25-§20-10` | IN SCOPE | SB-P-1.14 | C25@406ce089 §20 | §8.7; §12 | — |
| `25-§20-11` | IN SCOPE | SB-P-1.14 | C25@406ce089 §20 | §8.7; §12 | — |
| `25-§20-12` | IN SCOPE | SB-P-1.14 | C25@406ce089 §20 | §8.7; §12 | — |
| `25-§20-13` | IN SCOPE | SB-P-1.14 | C25@406ce089 §20 | §8.7; §12 | — |
| `25-§20-14` | IN SCOPE | SB-P-1.14 | C25@406ce089 §20 | §8.7; §12; §10 | — |
| `25-§21-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §21 | §8.5; §12 | — |
| `25-§21-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §21 | §8.5; §12 | — |
| `25-§21-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §21 | §8.5; §12 | — |
| `25-§21-4` | IN SCOPE | SB-P-1.14 | C25@406ce089 §21 | §8.5; §12 | — |
| `25-§21-5` | IN SCOPE | SB-P-1.14 | C25@406ce089 §21 | §8.5; §12; §10 | — |
| `25-§22-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §22 | §8.5; §12 | — |
| `25-§22-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §22 | §8.5; §12 | — |
| `25-§22-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §22 | §8.5; §12 | — |
| `25-§22-4` | IN SCOPE | SB-P-1.14 | C25@406ce089 §22 | §8.5; §12 | — |
| `25-§22-5` | IN SCOPE | SB-P-1.14 | C25@406ce089 §22 | §8.5; §12 | — |
| `25-§22-6` | IN SCOPE | SB-P-1.14 | C25@406ce089 §22 | §8.5; §12 | — |
| `25-§23-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §23 | §8.4; §12 | — |
| `25-§23-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §23 | §8.4; §12 | — |
| `25-§23-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §23 | §8.4; §12 | — |
| `25-§23-4` | IN SCOPE | SB-P-1.14 | C25@406ce089 §23 | §8.4; §12 | — |
| `25-§23-5` | IN SCOPE | SB-P-1.14 | C25@406ce089 §23 | §8.4; §12 | — |
| `25-§23-6` | IN SCOPE | SB-P-1.14 | C25@406ce089 §23 | §8.4; §12 | — |
| `25-§23-7` | IN SCOPE | SB-P-1.14 | C25@406ce089 §23 | §8.4; §12 | — |
| `25-§23-8` | IN SCOPE | SB-P-1.14 | C25@406ce089 §23 | §8.4; §12 | — |
| `25-§23-9` | IN SCOPE | SB-P-1.14 | C25@406ce089 §23 | §8.4; §12 | — |
| `25-§23-10` | IN SCOPE | SB-P-1.14 | C25@406ce089 §23 | §8.4; §12 | — |
| `25-§23-11` | IN SCOPE | SB-P-1.14 | C25@406ce089 §23 | §8.4; §12 | — |
| `25-§23-12` | IN SCOPE | SB-P-1.14 | C25@406ce089 §23 | §8.4; §12 | — |
| `25-§24-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §24 | §8.5; §12 | — |
| `25-§24-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §24 | §8.5; §12 | — |
| `25-§24-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §24 | §8.5; §12; §10 | — |
| `25-§25-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §25 | §8.5; §12 | — |
| `25-§25-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §25 | §8.5; §12 | — |
| `25-§25-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §25 | §8.5; §12; §10 | — |
| `25-§25-4` | IN SCOPE | SB-P-1.14 | C25@406ce089 §25 | §8.5; §12; §10 | — |
| `25-§26-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §26 | §8.5; §15; §12 | — |
| `25-§26-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §26 | §8.5; §15; §12 | — |
| `25-§26-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §26 | §8.5; §15; §12 | — |
| `25-§26-4a` | IN SCOPE | SB-P-1.14 | C25@406ce089 §26 | §8.5; §15; §12 | — |
| `25-§26-4b` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C25@406ce089 §26 | §11 | — |
| `25-§26-5` | IN SCOPE | SB-P-1.14 | C25@406ce089 §26 | §8.5; §15; §12 | — |
| `25-§26-6` | IN SCOPE | SB-P-1.14 | C25@406ce089 §26 | §8.5; §15; §12 | — |
| `25-§26-7` | IN SCOPE | SB-P-1.14 | C25@406ce089 §26 | §8.5; §15; §12 | — |
| `25-§26-8` | IN SCOPE | SB-P-1.14 | C25@406ce089 §26 | §8.5; §15; §12 | — |
| `25-§26-9` | IN SCOPE | SB-P-1.14 | C25@406ce089 §26 | §8.5; §15; §12 | — |
| `25-§26-10` | IN SCOPE | SB-P-1.14 | C25@406ce089 §26 | §8.5; §15; §12 | — |
| `25-§26-11` | IN SCOPE | SB-P-1.14 | C25@406ce089 §26 | §8.5; §15; §12 | — |
| `25-§26-12` | IN SCOPE | SB-P-1.14 | C25@406ce089 §26 | §8.5; §15; §12; §10.1 | FPDR-2 |
| `25-§26-13` | IN SCOPE | SB-P-1.14 | C25@406ce089 §26 | §8.5; §15; §12 | — |
| `25-§26-14` | IN SCOPE | SB-P-1.14 | C25@406ce089 §26 | §8.5; §15; §12 | — |
| `25-§27-1` | IN SCOPE | SB-P-1.14 | C25@406ce089 §27 | §8.9; §10 | — |
| `25-§27-2` | IN SCOPE | SB-P-1.14 | C25@406ce089 §27 | §8.9; §10 | — |
| `25-§27-3` | IN SCOPE | SB-P-1.14 | C25@406ce089 §27 | §8.9; §10 | — |
| `25-§27-4` | IN SCOPE | SB-P-1.14 | C25@406ce089 §27 | §8.9; §10 | — |
| `25-§27-5` | IN SCOPE | SB-P-1.14 | C25@406ce089 §27 | §8.9; §10 | — |
| `25-§27-6` | IN SCOPE | SB-P-1.14 | C25@406ce089 §27 | §8.9; §10 | — |
| `25-§27-7` | IN SCOPE | SB-P-1.14 | C25@406ce089 §27 | §8.9; §10 | — |
| `25-§27-8` | IN SCOPE | SB-P-1.14 | C25@406ce089 §27 | §8.9; §10 | — |
| `25-§28` | NOT APPLICABLE | SB-P-1.14 | C25@406ce089 §28 | §11 | — |
| `25-§29` | NOT APPLICABLE | SB-P-1.14 | C25@406ce089 §29 | §11 | — |
| `25-§30` | NOT APPLICABLE | SB-P-1.14 | C25@406ce089 §30 | §11 | — |
| `25-§FP` | NOT APPLICABLE | SB-P-1.14 | C25@406ce089 Final Principle | §11 | — |

#### FCTM Part E — Inherited residual rows — rows the canonical SB-P-1.12 and SB-P-1.13 FCTMs assign to SB-P-1.14 (Contracts 24, 10, 9, 12, 17, 7) (38 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `24-§5-6` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §5 | §8.2; §12 | — |
| `24-§7-3` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §7 | §8.2; §12 | — |
| `24-§7-4` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §7 | §8.2; §12 | — |
| `24-§14-1` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §14 | §8.2; §12 | — |
| `24-§14-2` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §14 | §8.2; §12 | — |
| `24-§14-3` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §14 | §8.2; §12 | — |
| `24-§14-4` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §14 | §8.2; §12 | — |
| `24-§14-5` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §14 | §8.2; §12 | — |
| `24-§14-6` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §14 | §8.2; §12 | — |
| `24-§14-7` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §14 | §8.2; §12 | — |
| `24-§14-8` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §14 | §8.2; §12 | — |
| `24-§14-9` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §14 | §8.2; §12; §10 | — |
| `24-§18-1a` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §18 | §8.2; §15; §12 | — |
| `24-§18-1b` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C24@0c1dcbb2 §18 | §11 | — |
| `24-§21-7` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §21 | §8.3; §12 | — |
| `24-§23-6` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §23 | §8.7; §12 | — |
| `24-§27-5` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §27 | §8.2; §12 | — |
| `24-§31-8` | IN SCOPE | SB-P-1.14 | C24@0c1dcbb2 §31 | §8.2; §15; §12 | — |
| `9-§12-1` | IN SCOPE | SB-P-1.14 | C9@649c55f3 §12 | §8.2; §12 | — |
| `10-§5-10` | IN SCOPE | SB-P-1.14 | C10@5c145ed7 §5 | §8.4; §12 | — |
| `10-§10-1` | IN SCOPE | SB-P-1.14 | C10@5c145ed7 §10 | §8.2; §12 | — |
| `10-§10-3` | IN SCOPE | SB-P-1.14 | C10@5c145ed7 §10 | §8.3; §12 | — |
| `10-§10-4` | IN SCOPE | SB-P-1.14 | C10@5c145ed7 §10 | §8.3; §12 | — |
| `10-§10-5` | IN SCOPE | SB-P-1.14 | C10@5c145ed7 §10 | §8.3; §12 | — |
| `10-§10-7` | IN SCOPE | SB-P-1.14 | C10@5c145ed7 §10 | §8.4; §12 | — |
| `10-§13-3` | IN SCOPE | SB-P-1.14 | C10@5c145ed7 §13 | §8.3; §12 | — |
| `10-§17-4` | IN SCOPE | SB-P-1.14 | C10@5c145ed7 §17 | §8.3; §12 | — |
| `10-§23-3b` | IN SCOPE | SB-P-1.14 | C10@5c145ed7 §23 | §8.3; §15; §12 | — |
| `12-§4-5` | IN SCOPE | SB-P-1.14 | C12@6d48feff §4 | §8.3; §12 | — |
| `17-§12-1` | IN SCOPE | SB-P-1.14 | C17@7943f74a §12 | §8.4; §12 | — |
| `17-§12-2` | IN SCOPE | SB-P-1.14 | C17@7943f74a §12 | §8.4; §12 | — |
| `7-§6-1` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C7@65ad91b2 §6 | §11 | — |
| `7-§6-2` | IN SCOPE | SB-P-1.14 | C7@65ad91b2 §6 | §8.2; §12 | — |
| `7-§6-3` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C7@65ad91b2 §6 | §11 | — |
| `7-§6-4` | IN SCOPE | SB-P-1.14 | C7@65ad91b2 §6 | §8.2; §12 | — |
| `7-§6-5` | IN SCOPE | SB-P-1.14 | C7@65ad91b2 §6 | §8.2; §10 | — |
| `7-§15-2a` | IN SCOPE | SB-P-1.14 | C7@65ad91b2 §15 | §8.2; §15; §12 | — |
| `7-§15-2b` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C7@65ad91b2 §15 | §11 | — |

#### FCTM Part F — Build Plan — §5.1–§5.4, §6.1–§6.3, §7, §8.4, §9, §10.3, §11, §13, §15, §16 (68 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `BP-§5.1-1` | DELEGATED | SB-P-1.12 | BP@9dfdd924 §5.1 | §11 | — |
| `BP-§5.2-1` | DELEGATED | SB-P-1.12 | BP@9dfdd924 §5.2 | §11 | — |
| `BP-§5.3-1` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §5.3 | §8.8 | — |
| `BP-§5.4-1` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §5.4 | §8.5; §12 | — |
| `BP-§6.1-1` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §6.1 | §8.3; §12; §10 | — |
| `BP-§6.2-1` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §6.2 | §8.3; §12 | — |
| `BP-§6.3-1` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §6.3 | §8.1 | — |
| `BP-§6.3-2` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §6.3 | §8.5; §12 | — |
| `BP-§7-1` | DELEGATED | SB-P-1.12 | BP@9dfdd924 §7 | §11 | — |
| `BP-§8.4-1` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §8.4 | §8.2 | — |
| `BP-§9-1` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §9 | §8.1 | — |
| `BP-§9-2` | ASSIGNED TO LATER MISSION | SB-P-1.16 | BP@9dfdd924 §9 | §11 | FPDR-1 |
| `BP-§10.3-O` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.1; §15; §12 | — |
| `BP-§10.3-W1` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.1; §12 | — |
| `BP-§10.3-W2` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.1; §12; §10.1 | FPDR-1; FPDR-4 |
| `BP-§10.3-W3` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.1; §12 | — |
| `BP-§10.3-W4` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.2; §12 | — |
| `BP-§10.3-W5` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.4; §12 | — |
| `BP-§10.3-W6` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.2; §12 | — |
| `BP-§10.3-W7` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.3; §12 | — |
| `BP-§10.3-W8` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.4; §12 | — |
| `BP-§10.3-W9` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.5; §12 | — |
| `BP-§10.3-W10` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.5; §12 | — |
| `BP-§10.3-W11` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.3; §12 | — |
| `BP-§10.3-W12` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.2 | — |
| `BP-§10.3-W13` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.2; §12 | — |
| `BP-§10.3-C1` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.1; §12 | — |
| `BP-§10.3-C2` | ASSIGNED TO LATER MISSION | SB-P-1.16 | BP@9dfdd924 §10.3 | §11 | FPDR-1 |
| `BP-§10.3-S1` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.6; §12 | — |
| `BP-§10.3-S2` | ASSIGNED TO LATER MISSION | SB-P-1.17 / SB-P-1.18 | BP@9dfdd924 §10.3 | §11 | — |
| `BP-§10.3-SA1` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.3; §15; §12 | — |
| `BP-§10.3-SA2` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.3; §15; §12; §10.1 | FPDR-3; FPDR-4 |
| `BP-§10.3-SB1` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.1; §15; §12; §10.1 | FPDR-1; FPDR-4 |
| `BP-§10.3-SB2` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.1; §15; §12; §10.1 | FPDR-1; FPDR-4 |
| `BP-§10.3-X` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §10.3 | §8.4; §15; §12 | — |
| `BP-§11-1` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §11 | §8.2 | — |
| `BP-§11-2` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §11 | §8.8 | — |
| `BP-§11-3` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §11 | §8.8 | — |
| `BP-§13-1` | IN SCOPE | SB-P-1.14 | BP@9dfdd924 §13 | §8.8 | — |
| `BP-§15-1` | NOT APPLICABLE | SB-P-1.14 | BP@9dfdd924 §15 | §11 | — |
| `BP-§15-2` | NOT APPLICABLE | SB-P-1.14 | BP@9dfdd924 §15 | §11 | — |
| `BP-§15-3` | NOT APPLICABLE | SB-P-1.14 | BP@9dfdd924 §15 | §11 | — |
| `BP-§15-4` | NOT APPLICABLE | SB-P-1.14 | BP@9dfdd924 §15 | §11 | — |
| `BP-§15-5` | NOT APPLICABLE | SB-P-1.14 | BP@9dfdd924 §15 | §11 | — |
| `BP-§15-6` | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | BP@9dfdd924 §15 | §11 | BP §15-6 (open) |
| `BP-§15-7` | NOT APPLICABLE | SB-P-1.14 | BP@9dfdd924 §15 | §11 | — |
| `BP-§15-8` | NOT APPLICABLE | SB-P-1.14 | BP@9dfdd924 §15 | §11 | — |
| `BP-§15-9` | NOT APPLICABLE | SB-P-1.14 | BP@9dfdd924 §15 | §11 | — |
| `BP-§16-1` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-2` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-3` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-4` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-5` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-6` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-7` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-8` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-9` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-10` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-11` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-12` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-13` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-14` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-15` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-16` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-17` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-18` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-19` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-20` | OUT OF BUILD SCOPE | SB-P-1.14 | BP@9dfdd924 §16 | §11 | — |

#### FCTM Part G — Delegate contracts — sections whose behaviour SB-P-1.14 touches at its boundary (Contracts 21, 24, 10, 12, 9, 14, 15, 7, 17, 18, 19, 23, 2, 4, 1, 6, 16, 20, 13) (57 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `21-§4` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §4 | §11 | — |
| `21-§5` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §5 | §11 | — |
| `21-§6` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §6 | §11 | — |
| `21-§7` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §7 | §11 | — |
| `21-§8` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §8 | §11 | — |
| `21-§11` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §11 | §11 | — |
| `21-§13` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §13 | §11 | — |
| `21-§14` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §14 | §11 | — |
| `21-§17` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §17 | §11 | — |
| `21-§18` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §18 | §11 | FPDR-3 |
| `21-§19` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §19 | §11 | — |
| `21-§20` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §20 | §11 | — |
| `21-§24` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §24 | §11 | — |
| `24-§10` | DELEGATED | SB-P-1.13 | C24@0c1dcbb2 §10 | §11 | — |
| `24-§20` | DELEGATED | SB-P-1.13 | C24@0c1dcbb2 §20 | §11 | — |
| `24-§22` | DELEGATED | SB-P-1.13 | C24@0c1dcbb2 §22 | §11 | — |
| `24-§24` | DELEGATED | SB-P-1.13 | C24@0c1dcbb2 §24 | §11 | — |
| `24-§25` | DELEGATED | SB-P-1.13 | C24@0c1dcbb2 §25 | §11 | — |
| `24-§29` | DELEGATED | SB-P-1.13 | C24@0c1dcbb2 §29 | §11 | — |
| `10-§4` | DELEGATED | SB-P-1.13 | C10@5c145ed7 §4 | §11 | — |
| `10-§16` | DELEGATED | SB-P-1.13 | C10@5c145ed7 §16 | §11 | — |
| `10-§18` | DELEGATED | SB-P-1.13 | C10@5c145ed7 §18 | §11 | — |
| `12-§4` | DELEGATED | SB-P-1.13 | C12@6d48feff §4 | §11 | SB-P-1.13 FPDR-2; FPDR-5 |
| `12-§15` | DELEGATED | SB-P-1.13 | C12@6d48feff §15 | §11 | SB-P-1.13 FPDR-3; FPDR-2 |
| `12-§16` | DELEGATED | SB-P-1.13 | C12@6d48feff §16 | §11 | — |
| `12-§21` | DELEGATED | SB-P-1.13 | C12@6d48feff §21 | §11 | SB-P-1.13 FPDR-2; FPDR-5 |
| `9-§9` | DELEGATED | SB-P-1.13 | C9@649c55f3 §9 | §11 | SB-P-1.13 FPDR-5; FPDR-1 |
| `14-§4` | DELEGATED | SB-P-1.16 | C14@16914a83 §4 | §11 | FPDR-1 |
| `14-§5` | DELEGATED | SB-P-1.16 | C14@16914a83 §5 | §11 | FPDR-1 |
| `14-§6` | DELEGATED | SB-P-1.16 | C14@16914a83 §6 | §11 | FPDR-1 |
| `14-§7` | DELEGATED | SB-P-1.16 | C14@16914a83 §7 | §11 | FPDR-1 |
| `14-§17` | DELEGATED | SB-P-1.16 | C14@16914a83 §17 | §11 | — |
| `14-§21` | DELEGATED | SB-P-1.16 | C14@16914a83 §21 | §11 | FPDR-1 |
| `14-§22` | DELEGATED | SB-P-1.16 | C14@16914a83 §22 | §11 | FPDR-1 |
| `15-§5` | DELEGATED | SB-P-1.16 | C15@632f3402 §5 | §11 | — |
| `15-§6` | DELEGATED | SB-P-1.16 | C15@632f3402 §6 | §11 | — |
| `15-§22` | DELEGATED | SB-P-1.16 | C15@632f3402 §22 | §11 | — |
| `7-§8` | DELEGATED | SB-P-1.17 | C7@65ad91b2 §8 | §11 | — |
| `17-§6` | DELEGATED | SB-P-1.17 | C17@7943f74a §6 | §11 | FPDR-1 |
| `18-§9` | DELEGATED | SB-P-1.19 | C18@6b96b10a §9 | §11 | — |
| `18-§11` | DELEGATED | SB-P-1.19 | C18@6b96b10a §11 | §11 | — |
| `18-§12` | DELEGATED | SB-P-1.19 | C18@6b96b10a §12 | §11 | — |
| `19-§13` | DELEGATED | SB-P-1.19 | C19@94aa6f24 §13 | §11 | — |
| `19-§15` | DELEGATED | SB-P-1.19 | C19@94aa6f24 §15 | §11 | — |
| `23-§12` | DELEGATED | SB-P-1.20 | C23@2430e1c6 §12 | §11 | — |
| `23-§18` | DELEGATED | SB-P-1.20 | C23@2430e1c6 §18 | §11 | — |
| `2-§7` | DELEGATED | SB-P-1.15 | C2@53635557 §7 | §11 | — |
| `4-§6` | DELEGATED | SB-P-1.15 | C4@ce940d25 §6 | §11 | — |
| `1-§6` | DELEGATED | SB-P-1.18 | C1@b392c8cb §6 | §11 | — |
| `1-§8` | DELEGATED | SB-P-1.18 | C1@b392c8cb §8 | §11 | — |
| `1-§13` | DELEGATED | SB-P-1.18 | C1@b392c8cb §13 | §11 | — |
| `1-§16` | DELEGATED | SB-P-1.18 | C1@b392c8cb §16 | §11 | — |
| `6-§6` | DELEGATED | SB-P-1.18 | C6@ebacd183 §6 | §11 | — |
| `16-§5` | DELEGATED | SB-P-1.18 | C16@420269d8 §5 | §11 | — |
| `20-§9` | DELEGATED | SB-P-1.19 | C20@56ed4d11 §9 | §11 | — |
| `13-§4` | DELEGATED | SB-P-1.17 | C13@4426e8b1 §4 | §11 | — |
| `13-§6` | DELEGATED | SB-P-1.17 | C13@4426e8b1 §6 | §11 | — |

## 20. Engineering Review

### 20.1 Scope, baseline and independence

- **Authorization:** SB-P-1.14-MC-11 (`communication/missions/SB-P-1.14/mission-control/13-stage7-engineering-and-specialist-authorization.md`) and `communication/live/instruction.md`, canonical at `main@cdb94b21284ba18d3bee523009eb4dbe3e8d7b11` (PR #822).
- **Baseline:** Blueprint v0.2 Sections 1–19 (PR #821); FCTM blob `01e9856aca0afdb1267230a1932fe34054449a4b` (766 rows; 563 `IN SCOPE`); `FPDR-1` to `FPDR-4`; Stage 6 Builder Review B6-01 to B6-19 (PR #819, SB-P-1.14-MC-08).
- **Owner:** Claude Code. Claude Code also authored Sections 1–19 and the Stage 6 Builder Review; this Engineering Review is therefore not independent assurance.
- **Independent specialist reviews (mandatory; none received at this draft):**

| Review | Required report | State |
|---|---|---|
| S7-SP-1 Security, Permissions, RLS & Grants | `communication/missions/SB-P-1.14/specialists/01-stage7-security-rls-grants-review.md` | PENDING — not received |
| S7-SP-2 Transaction & Financial Integrity | `communication/missions/SB-P-1.14/specialists/02-stage7-transaction-financial-integrity-review.md` | PENDING — not received |
| S7-SP-3 UDI / AI Interpretation Safety | `communication/missions/SB-P-1.14/specialists/03-stage7-udi-ai-safety-review.md` | PENDING — not received |
| S7-SP-4 Storage / Provider Readiness | `communication/missions/SB-P-1.14/specialists/04-stage7-storage-provider-readiness-review.md` | PENDING — not received |
| S7-SP-5 Migration / Data-Transition Safety | `communication/missions/SB-P-1.14/specialists/05-stage7-migration-data-transition-review.md` | PENDING — not received |

- **Use of the reviews:** every finding in this Section that depends on a specialist domain carries that specialist's marker (`SP-1` to `SP-5`) and is **held pending** until Mission Control receives and dispositions the corresponding independent report (SB-P-1.14-MC-11 §3). No such finding may be accepted or relied upon before then. Claude Code did not author, and does not anticipate the conclusions of, any specialist report.
- **Not done:** no FCTM, Founder decision or Sections 1–19 change beyond the authorized Metadata fields and one Section 18 row; no EIS, code, SQL, migration, provider or production action.

### 20.2 Environment assumptions (read-only evidence)

| Item | Assumption | Evidence state |
|---|---|---|
| Runtime | TanStack Start built by Nitro with a Cloudflare default target; in-process `worker_threads` parse isolation is documented as incompatible with that target (B6-05) | Repository (`vite.config.ts`, `src/lib/catalog-import/parse-isolated.ts`); live hosting `UNVERIFIED — ACCESS REQUIRED` |
| Data layer | Supabase/Postgres; `transactions` written by direct client insert; Owner-only RLS; `GRANT ALL` to `anon`/`authenticated` and matching default privileges for future tables (B6-04, B6-10) | Repository migrations (files only); live grants and policies `UNVERIFIED — ACCESS REQUIRED` |
| Parser offload | Lease-bound presigned S3 upload and AWS Lambda parser for CSV/XLSX, object deleted after parse; unwired (B6-05, MC-Q5) | Repository; AWS account `UNVERIFIED — ACCESS REQUIRED` |
| Durable object storage | None in the repository; Cloudflare R2 is the approved direction behind the `DR2` gate | Account, region, lifecycle-rule capability, pricing `UNVERIFIED — ACCESS REQUIRED`; activation NOT AUTHORIZED |
| AI provider | Consumed only through the SB-P-1.13 gateway and its data-control gate (EIS13-PRV-01) | Provider document data controls `UNVERIFIED — ACCESS REQUIRED` |
| Test environment | Isolated Supabase test project used by existing integration suites | Current state `UNVERIFIED — ACCESS REQUIRED` |
| Production data | Not accessed; presence and volume of `sale + payment_method=credit` rows unknown (affects only rehearsal sizing; `FPDR-1`/`FPDR-4` forbid rewriting them) | `UNVERIFIED — ACCESS REQUIRED` |
| CI | Fast Gate, Full Assurance and Markdown workflows exist; the last `main` runs are dated 2026-09-30; required status checks currently empty | Repository; `gh` read-only |

### 20.3 Engineering assessment by Blueprint subsection

| Code | Subsection | Assessment | Stage 6 inputs | Specialists |
|---|---|---|---|---|
| F1 | §8.1 Four-state Ledger | Feasible by additive widening inside the one governed command: widen `transaction_type`, add an explicit credit direction (amount stays positive), add a repayment-to-target link whose target is either a standalone `credit` entry or a `sale` with `payment_method=credit` (`FPDR-4`), never altering the sale; one totals definition excluding repayment and standalone credit from sales/income (`FPDR-1`, `FPDR-4`); every reader updated; pre-widening regression baseline. No backfill | B6-02, B6-03, B6-04 | SP-2, SP-5, SP-1 |
| F2 | §8.2 UDI intake and interpretation | Feasible by generalizing the existing lease, content checks and limits into one intake pipeline; deterministic CSV/XLSX parsing; image/PDF/handwriting through the SB-P-1.13 AI gateway with schema-validated output; interpretation isolation that runs in the deployed runtime (offload where needed); domain adapters for Ledger and opening stock only | B6-05, B6-12, B6-14 | SP-3, SP-4 |
| F3 | §8.3 Review, preview, confirmation, correction | Feasible on SB-P-1.12 `confirmation_bindings` with a material-field fingerprint per destination (`FPDR-3`), authority revalidation kept separate; correction becomes a command that writes the correction event atomically; direct `UPDATE` and correction-event `INSERT` removed in the cut-over | B6-04, B6-06 | SP-1, SP-2, SP-3 |
| F4 | §8.4 Receipt Cabinet and provenance | Feasible: documents link to the stable record identity; append-only version chain for originals; provenance events in governed storage | B6-07 | SP-4, SP-5 |
| F5 | §8.5 Governed durable media | Feasible behind `DR2`: provider-independent object identity; server-held credentials; ingest state machine extending the lease pattern; retrieval by short-lived signed access or proxy with a stated revocation window; `FPDR-2` discard via transient staging with object-store lifecycle expiry and metadata reconciliation, with no feature-specific scheduler (MC-Q4); raw voice not durable by default | B6-08, B6-09 | SP-4, SP-1, SP-5 |
| F6 | §8.6 Search, reports, exports | Feasible: normalized counterparty search key (no identity table); one query layer; formula neutralization on CSV/Excel export; no authoritative balance presented (`3-§9-12` stays SB-P-1.16) | B6-12, B6-13 | SP-1, SP-3 |
| F7 | §8.7 Isolation, idempotency, failure | Feasible only on the SB-P-1.12 kernel: every new table created with RLS and narrowed grants in the same migration; business-scoped content fingerprint plus shared idempotency key; first-class unknown outcome; end-to-end failure states | B6-10, B6-11, B6-17 | SP-1, SP-2, SP-4 |
| F8 | §8.8 Platform quality and delivery | Feasible: new test suites; migration plan for a separately authorized migration mission; delivery accounting in Section 20.4 | B6-18 | SP-5 |
| F9 | §8.9 Non-goals | Feasible as negative design checks and tests | — | as marked per row |

### 20.4 Early delivery plan

**Environments.** Local development; the isolated Supabase test project for integration and rehearsal; a non-production object-storage bucket only after `DR2` activation is separately authorized; the SB-P-1.13 AI gateway in non-production only after its provider gate. No production environment is used by this mission's build or verification without separate release authority.

**Activation order (cross-mission dependencies).**

1. Prerequisites outside this mission: SB-P-1.12 WS-A1, WS-A2, WS-D, WS-E implemented and verified; WS-A3 cut-over for the transactions family and WS-B effective-access reconciliation; SB-P-1.13 `create_transaction_governed` (EIS13-CMD-02), AI gateway and provider gate, attachment handoff (EIS13-ATT-01) implemented and verified; Mission Control acceptance of the dependency evidence (SB-P-1.12 EIS-DEP-01).
2. WS-A four-state widening of the governed command and correction command (same cut-over family).
3. WS-G idempotency, unknown-outcome and failure-state scaffolding.
4. WS-E storage control plane and object metadata, after `DR2` activation.
5. WS-B UDI intake pipeline and the Ledger and opening-stock adapters.
6. WS-C review, preview and confirmation binding.
7. WS-D Receipt Cabinet and provenance.
8. WS-F search, summaries and exports.

**Expected migrations (design level; not executed; separately authorized migration mission required).**

| ID | Content | Rehearsal need |
|---|---|---|
| M14-1 | Widen `transaction_type`; credit direction; repayment-target link (`FPDR-4`); widen the governed create and correction commands; no backfill | Fresh replay on the test project; replay against a production-shaped snapshot (`UNVERIFIED — ACCESS REQUIRED`); regression baseline green before and after |
| M14-2 | Document/object metadata, versions and provenance events; RLS enabled and `anon` revoked in the same migration | Negative `anon`/cross-business tests; default-privilege check |
| M14-3 | UDI intake, interpretation, preview and import-ledger state (extends the parser lease) | Lease state-machine tests; per-row import under revocation |
| M14-4 | Search keys and indexes | Performance check on test data |

Each migration has a reverse plan; ordering follows the SB-P-1.12 migration series; generated types are regenerated from the schema, never hand-edited.

**CI tiers.** Fast Gate (lint, typecheck, build, unit) at every checkpoint; Full Assurance (integration against the test project) on `src/**`, `supabase/**`, `tests/**`, `lambda/**`. New suites expected: Ledger regression baseline; four-state and `FPDR-1`/`FPDR-4` totals; RLS/grant negatives for new tables; idempotency and unknown outcome; `FPDR-3` fingerprint (material and non-material changes); document-borne injection and spreadsheet-formula fixtures; storage two-phase ingest and revocation window. GitHub Actions has produced no `main` runs since 2026-09-30, so interim evidence is local and recorded as such.

**Stage 1 scope flags (unchanged).** Production mutation, migration execution, delivery sync/publication, provider-account mutation, Supabase schema/Auth/key mutation, Lovable build execution, Cloudflare R2 / durable-object-storage activation and external document/AI provider activation: each `NOT AUTHORIZED`.

**Provider and storage activation dependencies.** `DR2`: account and environment-separated buckets, server-held credentials, CORS for presigned upload, lifecycle rules for the transient staging prefix (`FPDR-2`), monitoring, rollback and verification. `DAI`: SB-P-1.13 EIS13-PRV-01 data-control evidence before merchant documents reach the provider. AWS S3 staging: optional transient seam only, after engineering/provider review (MC-Q5).

### 20.5 Stage 6 findings carried

B6-01 is resolved by `FPDR-4` and is not reopened. Each remaining finding is carried as an engineering constraint for the EIS; specialist-routed constraints are held pending the named report.

| Finding | Carried as | Subsection | Specialist (pending) |
|---|---|---|---|
| B6-02 widening surface, credit direction | EC14-01 | F1 | SP-2, SP-5 |
| B6-03 totals treatment | EC14-02 | F1, F6 | SP-2 |
| B6-04 governed command cut-over, audit-safe writes | EC14-03 | F1, F3 | SP-1, SP-2 |
| B6-05 UDI/parser/runtime constraints | EC14-04 | F2 | SP-3 |
| B6-06 material-field fingerprint | EC14-05 | F3 | SP-3, SP-2 |
| B6-07 original-proof versioning | EC14-06 | F4 | SP-4 |
| B6-08 storage control plane, signed access, ingest | EC14-07 | F5 | SP-4, SP-1 |
| B6-09 `FPDR-2` discard timing | EC14-08 | F5 | SP-4 |
| B6-10 default privileges, RLS/grants | EC14-09 | F7 | SP-1, SP-5 |
| B6-11 idempotency, unknown outcome | EC14-10 | F7 | SP-2 |
| B6-12 prompt and formula injection | EC14-11 | F2, F6 | SP-3 |
| B6-13 counterparty search boundary | EC14-12 | F6 | — (design check) |
| B6-14 opening-stock convergence | EC14-13 | F2 | SP-2 |
| B6-15 provider/runtime facts unverified | Section 20.2 evidence holds | all | SP-4 |
| B6-16 upstream implementation chain | Section 20.4 activation order | all | — |
| B6-17 failure-state design | EC14-14 | F7 | SP-4, SP-2 |
| B6-18 migration/topology | EC14-15; Section 20.4 migrations | F8 | SP-5 |
| B6-19 merchant-language continuity | EC14-16 | F1, F6 | — (UX design check) |

### 20.6 Per-row feasibility and risk register (563 `IN SCOPE` rows)

Legends:

| Code | Meaning |
|---|---|
| F1–F9 | Feasibility assessment of the row's Blueprint subsection (Section 20.3) |
| I-AUTH | Consumes the SB-P-1.12 kernel (EIS-DEP-01); no interim authority path |
| I-CONV | Consumes the SB-P-1.13 Conversation/AI kernel or attachment handoff |
| I-CMD | Writes only through the one governed transaction command (`DTX`) |
| I-AI | Through the SB-P-1.13 AI gateway; provider evidence held |
| I-STO | Behind the `DR2` storage activation gate |
| I-LEG | Record-class retention basis; no duration invented |
| I-L15, I-L17, I-L19, I-L20 | Later-mission dependency |
| I-FPDR14, I-FPDR2, I-FPDR3 | Governed by `FPDR-1`/`FPDR-4`, `FPDR-2` or `FPDR-3` |
| I-NONE | No external implication beyond this mission's build |
| V-TEST, V-NEG, V-DES, V-ACC, V-FRV, V-EVM | Unit/integration test; negative test or absence proof; design review; acceptance-scenario evidence; Founder Runtime Verification; Experience Verification Matrix entry |
| SP-1 to SP-5 | Specialist domain whose independent report must be dispositioned before the finding is relied on (Section 20.1) |

Classification rules (mechanical; reproducible from the FCTM dependency cell and the specialist marker):

- `BLOCKED` — the row carries `D12`, `D13` or `DTX`: it cannot be built or demonstrated until the upstream implementation and evidence exist. The row stays `IN SCOPE`. This is a dependency block, not an infeasibility; no T8 arises from it.
- `FOLLOW-UP` — not blocked, but carries a provider, storage, legal or later-mission hold (`DAI`, `DR2`, `DLEG`, `DUF6`, `D15`, `D17`, `D19`, `D20`) or a pending specialist marker.
- `PASS` — none of the above; feasible within this mission's own build.

Remaining hold codes: `H-D12`, `H-D13`, `H-DTX` (upstream), `H-PROV` (`DAI`), `H-STO` (`DR2`), `H-LEG` (`DLEG`, `DUF6`), `H-LATER` (`D15`, `D17`, `D19`, `D20`), `H-SP-1` to `H-SP-5` (specialist report pending).

Risk: High where the row writes through `DTX`, is a Contract 3 §4 state, a Founder Runtime scenario, a cross-business or revocation boundary, or a document-interpretation must-not; Low where the row is a must-not, rule or principle with no dependency; otherwise Medium.

| Row | Blueprint § | Source | Feasibility | Implications | Dependency status | Risk | Verification | Specialist dependency (pending) | Classification | Remaining hold |
|---|---|---|---|---|---|---|---|---|---|---|
| `3-§2-2` | §8.1 | C3@d8c26c07 §2 | F1 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `3-§3` | §8.1 | C3@d8c26c07 §3 | F1 | I-NONE | none beyond this mission | Low | V-DES | — | PASS | — |
| `3-§4-1` | §8.1 | C3@d8c26c07 §4 | F1 | I-AUTH, I-CMD | D12; DTX | High | V-TEST | SP-1, SP-2, SP-5 | BLOCKED | H-D12, H-DTX, H-SP-1, H-SP-2, H-SP-5 |
| `3-§4-2` | §8.1 | C3@d8c26c07 §4 | F1 | I-AUTH, I-CMD | D12; DTX | High | V-TEST | SP-1, SP-2, SP-5 | BLOCKED | H-D12, H-DTX, H-SP-1, H-SP-2, H-SP-5 |
| `3-§4-3` | §8.1 | C3@d8c26c07 §4 | F1 | I-AUTH, I-CMD, I-FPDR14 | D12; DTX | High | V-TEST | SP-1, SP-2, SP-5 | BLOCKED | H-D12, H-DTX, H-SP-1, H-SP-2, H-SP-5 |
| `3-§4-4` | §8.1 | C3@d8c26c07 §4 | F1 | I-AUTH, I-CMD, I-FPDR14 | D12; DTX | High | V-TEST | SP-1, SP-2, SP-5 | BLOCKED | H-D12, H-DTX, H-SP-1, H-SP-2, H-SP-5 |
| `3-§4-5` | §8.1 | C3@d8c26c07 §4 | F1 | I-NONE | none beyond this mission | High | V-NEG | SP-2 | FOLLOW-UP | H-SP-2 |
| `3-§4-6` | §8.1 | C3@d8c26c07 §4 | F1 | I-NONE | none beyond this mission | High | V-DES | SP-2, SP-5 | FOLLOW-UP | H-SP-2, H-SP-5 |
| `3-§5-1` | §8.1 | C3@d8c26c07 §5 | F1 | I-CONV | D13 | Medium | V-DES | — | BLOCKED | H-D13 |
| `3-§5-2` | §8.1 | C3@d8c26c07 §5 | F1 | I-CONV, I-CMD | D13; DTX | High | V-ACC | SP-2, SP-5 | BLOCKED | H-D13, H-DTX, H-SP-2, H-SP-5 |
| `3-§5-3` | §8.1 | C3@d8c26c07 §5 | F1 | I-CONV, I-CMD | D13; DTX | High | V-ACC | SP-2, SP-5 | BLOCKED | H-D13, H-DTX, H-SP-2, H-SP-5 |
| `3-§5-4` | §8.1 | C3@d8c26c07 §5 | F1 | I-CONV, I-CMD, I-FPDR14 | D13; DTX | High | V-ACC | SP-2, SP-5 | BLOCKED | H-D13, H-DTX, H-SP-2, H-SP-5 |
| `3-§5-5` | §8.1 | C3@d8c26c07 §5 | F1 | I-CONV, I-CMD, I-FPDR14 | D13; DTX | High | V-ACC | SP-2, SP-5 | BLOCKED | H-D13, H-DTX, H-SP-2, H-SP-5 |
| `3-§5-6` | §8.1 | C3@d8c26c07 §5 | F1 | I-CONV, I-CMD | D13; DTX | High | V-TEST | SP-2, SP-5 | BLOCKED | H-D13, H-DTX, H-SP-2, H-SP-5 |
| `3-§5-7` | §8.2 | C3@d8c26c07 §5 | F2 | I-AUTH, I-CONV, I-AI, I-STO | D12; D13; DAI; DR2 | Medium | V-TEST | SP-1, SP-3, SP-4 | BLOCKED | H-D12, H-D13, H-PROV, H-STO, H-SP-1, H-SP-3, H-SP-4 |
| `3-§5-8` | §8.2 | C3@d8c26c07 §5 | F2 | I-AUTH, I-AI | D12; DAI | Medium | V-TEST | SP-1, SP-3 | BLOCKED | H-D12, H-PROV, H-SP-1, H-SP-3 |
| `3-§5-9` | §8.2 | C3@d8c26c07 §5 | F2 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `3-§5-10` | §8.1 | C3@d8c26c07 §5 | F1 | I-AUTH | D12 | Medium | V-DES | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§6-1` | §8.1 | C3@d8c26c07 §6 | F1 | I-CMD | DTX | High | V-TEST | SP-2, SP-5 | BLOCKED | H-DTX, H-SP-2, H-SP-5 |
| `3-§6-2` | §8.1 | C3@d8c26c07 §6 | F1 | I-CMD | DTX | High | V-TEST | SP-2, SP-5 | BLOCKED | H-DTX, H-SP-2, H-SP-5 |
| `3-§6-3` | §8.1 | C3@d8c26c07 §6 | F1 | I-CMD | DTX | High | V-TEST | SP-2, SP-5 | BLOCKED | H-DTX, H-SP-2, H-SP-5 |
| `3-§6-4` | §8.1 | C3@d8c26c07 §6 | F1 | I-CMD | DTX | High | V-TEST | SP-2, SP-5 | BLOCKED | H-DTX, H-SP-2, H-SP-5 |
| `3-§6-5` | §8.1 | C3@d8c26c07 §6 | F1 | I-CMD | DTX | High | V-TEST | SP-2, SP-5 | BLOCKED | H-DTX, H-SP-2, H-SP-5 |
| `3-§6-6` | §8.1 | C3@d8c26c07 §6 | F1 | I-CMD | DTX | High | V-TEST | SP-2, SP-5 | BLOCKED | H-DTX, H-SP-2, H-SP-5 |
| `3-§6-7` | §8.1 | C3@d8c26c07 §6 | F1 | I-CMD | DTX | High | V-TEST | SP-2, SP-5 | BLOCKED | H-DTX, H-SP-2, H-SP-5 |
| `3-§6-8` | §8.1 | C3@d8c26c07 §6 | F1 | I-CMD, I-FPDR14 | DTX | High | V-TEST | SP-2, SP-5 | BLOCKED | H-DTX, H-SP-2, H-SP-5 |
| `3-§6-9` | §8.1 | C3@d8c26c07 §6 | F1 | I-CMD | DTX | High | V-TEST | SP-2, SP-5 | BLOCKED | H-DTX, H-SP-2, H-SP-5 |
| `3-§6-10` | §8.1 | C3@d8c26c07 §6 | F1 | I-CONV | D13 | Medium | V-NEG | SP-2 | BLOCKED | H-D13, H-SP-2 |
| `3-§7-1` | §8.3 | C3@d8c26c07 §7 | F3 | I-CONV | D13 | Medium | V-TEST | — | BLOCKED | H-D13 |
| `3-§7-2` | §8.3 | C3@d8c26c07 §7 | F3 | I-CONV | D13 | Medium | V-TEST | — | BLOCKED | H-D13 |
| `3-§7-3` | §8.3 | C3@d8c26c07 §7 | F3 | I-CONV | D13 | Medium | V-TEST | — | BLOCKED | H-D13 |
| `3-§7-4` | §8.3 | C3@d8c26c07 §7 | F3 | I-CONV, I-FPDR14 | D13 | Medium | V-TEST | — | BLOCKED | H-D13 |
| `3-§7-5` | §8.3 | C3@d8c26c07 §7 | F3 | I-CONV | D13 | Medium | V-TEST | — | BLOCKED | H-D13 |
| `3-§7-6` | §8.3 | C3@d8c26c07 §7 | F3 | I-CONV | D13 | Medium | V-TEST | — | BLOCKED | H-D13 |
| `3-§7-7` | §8.3 | C3@d8c26c07 §7 | F3 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `3-§7-8` | §8.3 | C3@d8c26c07 §7 | F3 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `3-§7-9` | §8.3 | C3@d8c26c07 §7 | F3 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `3-§8-1` | §8.3 | C3@d8c26c07 §8 | F3 | I-CONV, I-CMD | D13; DTX | High | V-TEST | SP-2, SP-5 | BLOCKED | H-D13, H-DTX, H-SP-2, H-SP-5 |
| `3-§8-2` | §8.3 | C3@d8c26c07 §8 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§8-3` | §8.3 | C3@d8c26c07 §8 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§8-4` | §8.3 | C3@d8c26c07 §8 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§8-5` | §8.3 | C3@d8c26c07 §8 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§8-6` | §8.3 | C3@d8c26c07 §8 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§8-7` | §8.3 | C3@d8c26c07 §8 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§8-8` | §8.3 | C3@d8c26c07 §8 | F3 | I-AUTH, I-CMD, I-FPDR14 | D12; DTX | High | V-TEST | SP-1, SP-2, SP-5 | BLOCKED | H-D12, H-DTX, H-SP-1, H-SP-2, H-SP-5 |
| `3-§8-9` | §8.3 | C3@d8c26c07 §8 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§8-10` | §8.3 | C3@d8c26c07 §8 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§8-11` | §8.3 | C3@d8c26c07 §8 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§8-12` | §8.3 | C3@d8c26c07 §8 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§8-13` | §8.3 | C3@d8c26c07 §8 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§8-14` | §8.3 | C3@d8c26c07 §8 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§8-15` | §8.3 | C3@d8c26c07 §8 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§8-16` | §8.3 | C3@d8c26c07 §8 | F3 | I-NONE | none beyond this mission | High | V-NEG | SP-2 | FOLLOW-UP | H-SP-2 |
| `3-§9-1` | §8.6 | C3@d8c26c07 §9 | F6 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§9-2` | §8.6 | C3@d8c26c07 §9 | F6 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§9-4` | §8.6 | C3@d8c26c07 §9 | F6 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§9-5` | §8.6 | C3@d8c26c07 §9 | F6 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§9-6` | §8.6 | C3@d8c26c07 §9 | F6 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§9-7` | §8.6 | C3@d8c26c07 §9 | F6 | I-AUTH, I-FPDR14 | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§9-8` | §8.6 | C3@d8c26c07 §9 | F6 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `3-§9-9` | §8.6 | C3@d8c26c07 §9 | F6 | I-L17 | D17 | Medium | V-TEST | — | FOLLOW-UP | H-LATER |
| `3-§9-10` | §8.6 | C3@d8c26c07 §9 | F6 | I-AUTH, I-CONV | D12; D13 | Medium | V-ACC | SP-1 | BLOCKED | H-D12, H-D13, H-SP-1 |
| `3-§9-11` | §8.6 | C3@d8c26c07 §9 | F6 | I-AUTH, I-CONV | D12; D13 | Medium | V-ACC | SP-1 | BLOCKED | H-D12, H-D13, H-SP-1 |
| `3-§9-13` | §8.6 | C3@d8c26c07 §9 | F6 | I-AUTH, I-CONV, I-STO | D12; D13; DR2 | Medium | V-ACC | SP-1, SP-4 | BLOCKED | H-D12, H-D13, H-STO, H-SP-1, H-SP-4 |
| `3-§9-14` | §8.6 | C3@d8c26c07 §9 | F6 | I-CONV | D13 | Medium | V-DES | — | BLOCKED | H-D13 |
| `3-§10-1` | §8.6 | C3@d8c26c07 §10 | F6 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§10-2` | §8.6 | C3@d8c26c07 §10 | F6 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§10-3` | §8.6 | C3@d8c26c07 §10 | F6 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§10-4` | §8.6 | C3@d8c26c07 §10 | F6 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§10-5` | §8.6 | C3@d8c26c07 §10 | F6 | I-AUTH, I-FPDR14 | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§10-6` | §8.6 | C3@d8c26c07 §10 | F6 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2, SP-3 | BLOCKED | H-D12, H-SP-1, H-SP-2, H-SP-3 |
| `3-§10-7` | §8.6 | C3@d8c26c07 §10 | F6 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2, SP-3 | BLOCKED | H-D12, H-SP-1, H-SP-2, H-SP-3 |
| `3-§10-8` | §8.6 | C3@d8c26c07 §10 | F6 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§10-9` | §8.6 | C3@d8c26c07 §10 | F6 | I-AUTH | D12 | Medium | V-NEG | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§11-1` | §8.1 | C3@d8c26c07 §11 | F1 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§11-2` | §8.1 | C3@d8c26c07 §11 | F1 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§11-3` | §8.1 | C3@d8c26c07 §11 | F1 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§11-4` | §8.1 | C3@d8c26c07 §11 | F1 | I-AUTH | D12 | Medium | V-NEG | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§11-5` | §8.1 | C3@d8c26c07 §11 | F1 | I-AUTH | D12 | Medium | V-NEG | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§11-7` | §8.1 | C3@d8c26c07 §11 | F1 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§12-2` | §8.1 | C3@d8c26c07 §12 | F1 | I-CONV | D13 | Medium | V-TEST | — | BLOCKED | H-D13 |
| `3-§12-3` | §8.1 | C3@d8c26c07 §12 | F1 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§12-4` | §8.1 | C3@d8c26c07 §12 | F1 | I-CONV | D13 | Medium | V-NEG | — | BLOCKED | H-D13 |
| `3-§12-5` | §8.1 | C3@d8c26c07 §12 | F1 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `3-§14-2` | §8.1 | C3@d8c26c07 §14 | F1 | I-NONE | none beyond this mission | Low | V-DES | — | PASS | — |
| `3-§15-1` | §8.1 | C3@d8c26c07 §15 | F1 | I-NONE | none beyond this mission | Low | V-DES | — | PASS | — |
| `3-§15-2` | §8.1 | C3@d8c26c07 §15 | F1 | I-CONV | D13 | Medium | V-DES | — | BLOCKED | H-D13 |
| `3-§15-3` | §8.1 | C3@d8c26c07 §15 | F1 | I-CONV | D13 | Medium | V-DES | — | BLOCKED | H-D13 |
| `3-§15-4` | §8.1 | C3@d8c26c07 §15 | F1 | I-AUTH | D12 | Medium | V-DES | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§15-5` | §8.1 | C3@d8c26c07 §15 | F1 | I-CONV | D13 | Medium | V-DES | — | BLOCKED | H-D13 |
| `3-§16-1` | §8.3 | C3@d8c26c07 §16 | F3 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `3-§16-2` | §8.3 | C3@d8c26c07 §16 | F3 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `3-§16-3` | §8.3 | C3@d8c26c07 §16 | F3 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `3-§16-4` | §8.3 | C3@d8c26c07 §16 | F3 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `3-§16-5` | §8.3 | C3@d8c26c07 §16 | F3 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `3-§16-6` | §8.3 | C3@d8c26c07 §16 | F3 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `3-§16-7` | §8.3 | C3@d8c26c07 §16 | F3 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `3-§16-8` | §8.3 | C3@d8c26c07 §16 | F3 | I-CONV | D13 | Medium | V-NEG | SP-3 | BLOCKED | H-D13, H-SP-3 |
| `3-§16-9` | §8.3 | C3@d8c26c07 §16 | F3 | I-CONV | D13 | Medium | V-NEG | SP-3 | BLOCKED | H-D13, H-SP-3 |
| `3-§16-10` | §8.3 | C3@d8c26c07 §16 | F3 | I-CONV | D13 | Medium | V-NEG | SP-3 | BLOCKED | H-D13, H-SP-3 |
| `3-§16-11` | §8.3 | C3@d8c26c07 §16 | F3 | I-CONV | D13 | Medium | V-NEG | SP-3 | BLOCKED | H-D13, H-SP-3 |
| `3-§16-12` | §8.3 | C3@d8c26c07 §16 | F3 | I-CONV | D13 | Medium | V-NEG | SP-3 | BLOCKED | H-D13, H-SP-3 |
| `3-§16-13` | §8.3 | C3@d8c26c07 §16 | F3 | I-CONV | D13 | Medium | V-NEG | SP-3 | BLOCKED | H-D13, H-SP-3 |
| `3-§16-14` | §8.3 | C3@d8c26c07 §16 | F3 | I-CONV | D13 | Medium | V-NEG | SP-3 | BLOCKED | H-D13, H-SP-3 |
| `3-§17-1` | §8.7 | C3@d8c26c07 §17 | F7 | I-NONE | none beyond this mission | Medium | V-TEST | SP-2 | FOLLOW-UP | H-SP-2 |
| `3-§17-2` | §8.7 | C3@d8c26c07 §17 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§17-3` | §8.7 | C3@d8c26c07 §17 | F7 | I-AI | DAI | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP | H-PROV, H-SP-2, H-SP-3 |
| `3-§17-4` | §8.7 | C3@d8c26c07 §17 | F7 | I-NONE | none beyond this mission | Medium | V-TEST | SP-2 | FOLLOW-UP | H-SP-2 |
| `3-§17-5` | §8.7 | C3@d8c26c07 §17 | F7 | I-NONE | none beyond this mission | Medium | V-TEST | SP-2 | FOLLOW-UP | H-SP-2 |
| `3-§17-6` | §8.7 | C3@d8c26c07 §17 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§17-7` | §8.7 | C3@d8c26c07 §17 | F7 | I-L15 | D15 | Medium | V-TEST | SP-2 | FOLLOW-UP | H-LATER, H-SP-2 |
| `3-§17-8` | §8.7 | C3@d8c26c07 §17 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§17-9` | §8.7 | C3@d8c26c07 §17 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§17-10` | §8.7 | C3@d8c26c07 §17 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§17-11` | §8.7 | C3@d8c26c07 §17 | F7 | I-NONE | none beyond this mission | Medium | V-TEST | SP-2 | FOLLOW-UP | H-SP-2 |
| `3-§18-1` | §8.1 | C3@d8c26c07 §18 | F1 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§18-2` | §8.1 | C3@d8c26c07 §18 | F1 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§18-3` | §8.1 | C3@d8c26c07 §18 | F1 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§18-5` | §8.1 | C3@d8c26c07 §18 | F1 | I-AUTH | D12 | Medium | V-NEG | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§18-6` | §8.1 | C3@d8c26c07 §18 | F1 | I-NONE | none beyond this mission | Low | V-NEG | SP-1 | FOLLOW-UP | H-SP-1 |
| `3-§19-1` | §8.1 | C3@d8c26c07 §19 | F1 | I-CONV, I-CMD | D13; DTX | High | V-ACC | SP-2, SP-5 | BLOCKED | H-D13, H-DTX, H-SP-2, H-SP-5 |
| `3-§19-2` | §8.1 | C3@d8c26c07 §19 | F1 | I-AUTH, I-CMD, I-FPDR14 | D12; DTX | High | V-ACC | SP-1, SP-2, SP-5 | BLOCKED | H-D12, H-DTX, H-SP-1, H-SP-2, H-SP-5 |
| `3-§19-3` | §8.1 | C3@d8c26c07 §19 | F1 | I-CONV, I-CMD | D13; DTX | High | V-ACC | SP-2, SP-5 | BLOCKED | H-D13, H-DTX, H-SP-2, H-SP-5 |
| `3-§19-4` | §8.3 | C3@d8c26c07 §19 | F3 | I-AUTH, I-AI, I-STO | D12; DAI; DR2 | Medium | V-ACC | SP-1, SP-3, SP-4 | BLOCKED | H-D12, H-PROV, H-STO, H-SP-1, H-SP-3, H-SP-4 |
| `3-§19-5` | §8.3 | C3@d8c26c07 §19 | F3 | I-CONV | D13 | Medium | V-ACC | — | BLOCKED | H-D13 |
| `3-§19-6` | §8.7 | C3@d8c26c07 §19 | F7 | I-AUTH | D12 | Medium | V-ACC | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§19-7` | §8.3 | C3@d8c26c07 §19 | F3 | I-AUTH | D12 | Medium | V-ACC | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§19-8` | §8.6 | C3@d8c26c07 §19 | F6 | I-AUTH | D12 | Medium | V-ACC | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§19-9` | §8.4 | C3@d8c26c07 §19 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-ACC | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `3-§19-10` | §8.1 | C3@d8c26c07 §19 | F1 | I-AUTH | D12 | Medium | V-ACC | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§19-11` | §8.1 | C3@d8c26c07 §19 | F1 | I-AUTH | D12 | Medium | V-ACC | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§19-12` | §8.6 | C3@d8c26c07 §19 | F6 | I-AUTH | D12 | Medium | V-ACC | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `3-§19-13a` | §8.1 | C3@d8c26c07 §19 | F1 | I-CONV | D13 | Medium | V-ACC | — | BLOCKED | H-D13 |
| `3-§19-14` | §8.7 | C3@d8c26c07 §19 | F7 | I-AUTH | D12 | High | V-ACC | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `3-§20-1` | §8.9 | C3@d8c26c07 §20 | F9 | I-NONE | none beyond this mission | High | V-NEG | — | PASS | — |
| `3-§20-2` | §8.9 | C3@d8c26c07 §20 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `3-§20-3` | §8.9 | C3@d8c26c07 §20 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `3-§20-4` | §8.9 | C3@d8c26c07 §20 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `3-§20-5` | §8.9 | C3@d8c26c07 §20 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `3-§20-6` | §8.9 | C3@d8c26c07 §20 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `3-§22-1` | §8.1 | C3@d8c26c07 §22 | F1 | I-CMD | DTX | High | V-DES | SP-2, SP-5 | BLOCKED | H-DTX, H-SP-2, H-SP-5 |
| `3-§22-2` | §8.1 | C3@d8c26c07 §22 | F1 | I-CMD | DTX | High | V-DES | SP-2, SP-5 | BLOCKED | H-DTX, H-SP-2, H-SP-5 |
| `5-§2-2` | §8.2 | C5@80ac648e §2 | F2 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `5-§3-1` | §8.2 | C5@80ac648e §3 | F2 | I-AUTH, I-AI | D12; DAI | Medium | V-DES | SP-1, SP-3 | BLOCKED | H-D12, H-PROV, H-SP-1, H-SP-3 |
| `5-§3-2` | §8.2 | C5@80ac648e §3 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§3-3` | §8.2 | C5@80ac648e §3 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§4-1` | §8.2 | C5@80ac648e §4 | F2 | I-AI, I-STO | DAI; DR2 | Medium | V-TEST | SP-3, SP-4 | FOLLOW-UP | H-PROV, H-STO, H-SP-3, H-SP-4 |
| `5-§4-2` | §8.2 | C5@80ac648e §4 | F2 | I-AI, I-STO | DAI; DR2 | Medium | V-TEST | SP-3, SP-4 | FOLLOW-UP | H-PROV, H-STO, H-SP-3, H-SP-4 |
| `5-§4-3` | §8.2 | C5@80ac648e §4 | F2 | I-AI, I-STO | DAI; DR2 | Medium | V-TEST | SP-3, SP-4 | FOLLOW-UP | H-PROV, H-STO, H-SP-3, H-SP-4 |
| `5-§4-4` | §8.2 | C5@80ac648e §4 | F2 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `5-§4-5` | §8.2 | C5@80ac648e §4 | F2 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `5-§4-6` | §8.2 | C5@80ac648e §4 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§4-7` | §8.2 | C5@80ac648e §4 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§4-8` | §8.2 | C5@80ac648e §4 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§4-9` | §8.2 | C5@80ac648e §4 | F2 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `5-§4-14` | §8.2 | C5@80ac648e §4 | F2 | I-NONE | none beyond this mission | Low | V-DES | — | PASS | — |
| `5-§5-1` | §8.2 | C5@80ac648e §5 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§5-2` | §8.2 | C5@80ac648e §5 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§5-3` | §8.2 | C5@80ac648e §5 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§5-4` | §8.2 | C5@80ac648e §5 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§5-5` | §8.2 | C5@80ac648e §5 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§5-6` | §8.2 | C5@80ac648e §5 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§5-7` | §8.2 | C5@80ac648e §5 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§5-8` | §8.2 | C5@80ac648e §5 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§5-9` | §8.2 | C5@80ac648e §5 | F2 | I-AI | DAI | Medium | V-NEG | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§6-1` | §8.4 | C5@80ac648e §6 | F4 | I-STO, I-LEG, I-FPDR2 | DR2; DLEG; DUF6 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-LEG, H-SP-4 |
| `5-§6-2` | §8.4 | C5@80ac648e §6 | F4 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `5-§6-3` | §8.4 | C5@80ac648e §6 | F4 | I-AUTH, I-CONV, I-STO | D12; D13; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-D13, H-STO, H-SP-1, H-SP-4 |
| `5-§6-4` | §8.4 | C5@80ac648e §6 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `5-§6-5` | §8.4 | C5@80ac648e §6 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `5-§6-6` | §8.4 | C5@80ac648e §6 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `5-§6-7` | §8.4 | C5@80ac648e §6 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `5-§6-8` | §8.4 | C5@80ac648e §6 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `5-§6-9` | §8.4 | C5@80ac648e §6 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `5-§6-11` | §8.4 | C5@80ac648e §6 | F4 | I-AUTH, I-STO, I-L17 | D12; DR2; D17 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-LATER, H-SP-1, H-SP-4 |
| `5-§6-13` | §8.4 | C5@80ac648e §6 | F4 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `5-§7-1` | §8.2 | C5@80ac648e §7 | F2 | I-NONE | none beyond this mission | Low | V-DES | — | PASS | — |
| `5-§7-2` | §8.2 | C5@80ac648e §7 | F2 | I-AUTH, I-AI, I-CMD, I-STO | D12; DAI; DTX; DR2 | High | V-ACC | SP-1, SP-2, SP-3, SP-4, SP-5 | BLOCKED | H-D12, H-PROV, H-DTX, H-STO, H-SP-1, H-SP-2, H-SP-3, H-SP-4, H-SP-5 |
| `5-§7-3` | §8.2 | C5@80ac648e §7 | F2 | I-AUTH | D12 | Medium | V-ACC | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `5-§7-4` | §8.2 | C5@80ac648e §7 | F2 | I-AUTH, I-AI, I-L17 | D12; DAI; D17 | Medium | V-ACC | SP-1, SP-3 | BLOCKED | H-D12, H-PROV, H-LATER, H-SP-1, H-SP-3 |
| `5-§7-8` | §8.2 | C5@80ac648e §7 | F2 | I-AUTH | D12 | Medium | V-DES | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `5-§8-2` | §8.2 | C5@80ac648e §8 | F2 | I-CONV | D13 | Medium | V-TEST | — | BLOCKED | H-D13 |
| `5-§8-3` | §8.2 | C5@80ac648e §8 | F2 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `5-§8-4` | §8.2 | C5@80ac648e §8 | F2 | I-CONV | D13 | Medium | V-NEG | — | BLOCKED | H-D13 |
| `5-§9-1` | §8.3 | C5@80ac648e §9 | F3 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§9-2` | §8.3 | C5@80ac648e §9 | F3 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§9-3` | §8.3 | C5@80ac648e §9 | F3 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§9-4` | §8.3 | C5@80ac648e §9 | F3 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§9-5` | §8.3 | C5@80ac648e §9 | F3 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§9-6` | §8.3 | C5@80ac648e §9 | F3 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§9-7` | §8.3 | C5@80ac648e §9 | F3 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§9-8` | §8.3 | C5@80ac648e §9 | F3 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§9-9` | §8.3 | C5@80ac648e §9 | F3 | I-AUTH | D12 | Medium | V-DES | SP-1, SP-3 | BLOCKED | H-D12, H-SP-1, H-SP-3 |
| `5-§10-1` | §8.3 | C5@80ac648e §10 | F3 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§10-2` | §8.3 | C5@80ac648e §10 | F3 | I-NONE | none beyond this mission | Medium | V-TEST | SP-3 | FOLLOW-UP | H-SP-3 |
| `5-§10-3` | §8.3 | C5@80ac648e §10 | F3 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§10-4` | §8.3 | C5@80ac648e §10 | F3 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§10-5` | §8.3 | C5@80ac648e §10 | F3 | I-NONE | none beyond this mission | Medium | V-TEST | SP-3 | FOLLOW-UP | H-SP-3 |
| `5-§10-6` | §8.3 | C5@80ac648e §10 | F3 | I-NONE | none beyond this mission | Medium | V-TEST | SP-3 | FOLLOW-UP | H-SP-3 |
| `5-§10-7` | §8.3 | C5@80ac648e §10 | F3 | I-NONE | none beyond this mission | Medium | V-TEST | SP-3 | FOLLOW-UP | H-SP-3 |
| `5-§10-8` | §8.3 | C5@80ac648e §10 | F3 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§10-9` | §8.3 | C5@80ac648e §10 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-3 | BLOCKED | H-D12, H-SP-1, H-SP-3 |
| `5-§10-10` | §8.3 | C5@80ac648e §10 | F3 | I-NONE | none beyond this mission | Medium | V-TEST | SP-3 | FOLLOW-UP | H-SP-3 |
| `5-§11-1` | §8.7 | C5@80ac648e §11 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `5-§11-2` | §8.7 | C5@80ac648e §11 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `5-§11-3` | §8.7 | C5@80ac648e §11 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `5-§11-4` | §8.7 | C5@80ac648e §11 | F7 | I-AUTH, I-CONV, I-L20 | D12; D13; D20 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-D13, H-LATER, H-SP-1, H-SP-2 |
| `5-§11-5` | §8.7 | C5@80ac648e §11 | F7 | I-NONE | none beyond this mission | Low | V-DES | SP-2 | FOLLOW-UP | H-SP-2 |
| `5-§12-1` | §8.7 | C5@80ac648e §12 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `5-§12-2` | §8.7 | C5@80ac648e §12 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `5-§12-3` | §8.7 | C5@80ac648e §12 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `5-§12-4` | §8.7 | C5@80ac648e §12 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `5-§12-5` | §8.7 | C5@80ac648e §12 | F7 | I-AUTH | D12 | Medium | V-NEG | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `5-§12-6` | §8.7 | C5@80ac648e §12 | F7 | I-AUTH | D12 | Medium | V-NEG | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `5-§13-1` | §8.2 | C5@80ac648e §13 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `5-§13-2` | §8.2 | C5@80ac648e §13 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `5-§13-3` | §8.2 | C5@80ac648e §13 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `5-§13-4` | §8.2 | C5@80ac648e §13 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `5-§13-5` | §8.2 | C5@80ac648e §13 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `5-§13-6` | §8.2 | C5@80ac648e §13 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `5-§13-7` | §8.2 | C5@80ac648e §13 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `5-§13-8` | §8.2 | C5@80ac648e §13 | F2 | I-CONV | D13 | High | V-NEG | SP-3 | BLOCKED | H-D13, H-SP-3 |
| `5-§13-9` | §8.2 | C5@80ac648e §13 | F2 | I-CONV | D13 | High | V-NEG | SP-3 | BLOCKED | H-D13, H-SP-3 |
| `5-§13-10` | §8.2 | C5@80ac648e §13 | F2 | I-CONV | D13 | High | V-NEG | SP-3 | BLOCKED | H-D13, H-SP-3 |
| `5-§13-11` | §8.2 | C5@80ac648e §13 | F2 | I-CONV | D13 | High | V-NEG | SP-3 | BLOCKED | H-D13, H-SP-3 |
| `5-§13-12` | §8.2 | C5@80ac648e §13 | F2 | I-CONV | D13 | High | V-NEG | SP-3 | BLOCKED | H-D13, H-SP-3 |
| `5-§14-1` | §8.2 | C5@80ac648e §14 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§14-2` | §8.2 | C5@80ac648e §14 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§14-3` | §8.2 | C5@80ac648e §14 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§14-4` | §8.2 | C5@80ac648e §14 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§14-5` | §8.2 | C5@80ac648e §14 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§14-6` | §8.2 | C5@80ac648e §14 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§14-7` | §8.2 | C5@80ac648e §14 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§14-8` | §8.2 | C5@80ac648e §14 | F2 | I-NONE | none beyond this mission | Low | V-NEG | SP-3 | FOLLOW-UP | H-SP-3 |
| `5-§15-1` | §8.4 | C5@80ac648e §15 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4, H-SP-5 |
| `5-§15-2` | §8.4 | C5@80ac648e §15 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-5 |
| `5-§15-3` | §8.4 | C5@80ac648e §15 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-5 |
| `5-§15-4` | §8.4 | C5@80ac648e §15 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-5 |
| `5-§15-5` | §8.4 | C5@80ac648e §15 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-5 |
| `5-§15-6` | §8.4 | C5@80ac648e §15 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-5 |
| `5-§15-7` | §8.4 | C5@80ac648e §15 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4, H-SP-5 |
| `5-§15-8` | §8.4 | C5@80ac648e §15 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-5 |
| `5-§15-9` | §8.4 | C5@80ac648e §15 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-5 |
| `5-§15-10` | §8.4 | C5@80ac648e §15 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-5 |
| `5-§15-11` | §8.4 | C5@80ac648e §15 | F4 | I-NONE | none beyond this mission | Low | V-DES | SP-5 | FOLLOW-UP | H-SP-5 |
| `5-§16-1` | §8.7 | C5@80ac648e §16 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `5-§16-2` | §8.5 | C5@80ac648e §16 | F5 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `5-§16-3` | §8.5 | C5@80ac648e §16 | F5 | I-LEG, I-FPDR2 | DLEG | Medium | V-TEST | SP-1, SP-4 | FOLLOW-UP | H-LEG, H-SP-1, H-SP-4 |
| `5-§16-4` | §8.2 | C5@80ac648e §16 | F2 | I-NONE | none beyond this mission | Medium | V-TEST | SP-1, SP-3 | FOLLOW-UP | H-SP-1, H-SP-3 |
| `5-§16-5` | §8.2 | C5@80ac648e §16 | F2 | I-NONE | none beyond this mission | Medium | V-TEST | SP-1, SP-3 | FOLLOW-UP | H-SP-1, H-SP-3 |
| `5-§16-6` | §8.7 | C5@80ac648e §16 | F7 | I-AUTH | D12 | High | V-NEG | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `5-§16-7` | §8.2 | C5@80ac648e §16 | F2 | I-AI | DAI | Medium | V-NEG | SP-1, SP-3 | FOLLOW-UP | H-PROV, H-SP-1, H-SP-3 |
| `5-§17-1` | §8.7 | C5@80ac648e §17 | F7 | I-NONE | none beyond this mission | Medium | V-TEST | SP-3 | FOLLOW-UP | H-SP-3 |
| `5-§17-2` | §8.7 | C5@80ac648e §17 | F7 | I-NONE | none beyond this mission | Medium | V-TEST | SP-3 | FOLLOW-UP | H-SP-3 |
| `5-§17-3` | §8.7 | C5@80ac648e §17 | F7 | I-NONE | none beyond this mission | Medium | V-TEST | SP-3 | FOLLOW-UP | H-SP-3 |
| `5-§17-4` | §8.7 | C5@80ac648e §17 | F7 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§17-5` | §8.7 | C5@80ac648e §17 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-3 | BLOCKED | H-D12, H-SP-1, H-SP-3 |
| `5-§17-6` | §8.7 | C5@80ac648e §17 | F7 | I-CMD | DTX | High | V-TEST | SP-2, SP-3, SP-5 | BLOCKED | H-DTX, H-SP-2, H-SP-3, H-SP-5 |
| `5-§17-7` | §8.7 | C5@80ac648e §17 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-3 | BLOCKED | H-D12, H-SP-1, H-SP-3 |
| `5-§17-8` | §8.7 | C5@80ac648e §17 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-3 | BLOCKED | H-D12, H-SP-1, H-SP-3 |
| `5-§17-9` | §8.7 | C5@80ac648e §17 | F7 | I-STO | DR2 | Medium | V-TEST | SP-3, SP-4 | FOLLOW-UP | H-STO, H-SP-3, H-SP-4 |
| `5-§17-10` | §8.7 | C5@80ac648e §17 | F7 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-3 | BLOCKED | H-D12, H-SP-1, H-SP-3 |
| `5-§17-11` | §8.7 | C5@80ac648e §17 | F7 | I-NONE | none beyond this mission | Low | V-NEG | SP-3 | FOLLOW-UP | H-SP-3 |
| `5-§18-1` | §8.3 | C5@80ac648e §18 | F3 | I-AUTH, I-AI, I-CMD, I-STO | D12; DAI; DTX; DR2 | High | V-ACC | SP-1, SP-2, SP-3, SP-4, SP-5 | BLOCKED | H-D12, H-PROV, H-DTX, H-STO, H-SP-1, H-SP-2, H-SP-3, H-SP-4, H-SP-5 |
| `5-§18-2` | §8.3 | C5@80ac648e §18 | F3 | I-AI | DAI | Medium | V-ACC | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `5-§18-3` | §8.2 | C5@80ac648e §18 | F2 | I-AI, I-STO | DAI; DR2 | Medium | V-ACC | SP-3, SP-4 | FOLLOW-UP | H-PROV, H-STO, H-SP-3, H-SP-4 |
| `5-§18-4` | §8.2 | C5@80ac648e §18 | F2 | I-AUTH | D12 | Medium | V-ACC | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `5-§18-5` | §8.2 | C5@80ac648e §18 | F2 | I-AUTH | D12 | Medium | V-ACC | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `5-§18-6` | §8.7 | C5@80ac648e §18 | F7 | I-AUTH | D12 | Medium | V-ACC | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `5-§18-7` | §8.4 | C5@80ac648e §18 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-ACC | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `5-§18-8a` | §8.2 | C5@80ac648e §18 | F2 | I-CONV | D13 | Medium | V-ACC | — | BLOCKED | H-D13 |
| `5-§18-9` | §8.7 | C5@80ac648e §18 | F7 | I-AUTH | D12 | Medium | V-ACC | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `5-§18-10` | §8.7 | C5@80ac648e §18 | F7 | I-AUTH | D12 | High | V-ACC | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `5-§18-11` | §8.7 | C5@80ac648e §18 | F7 | I-NONE | none beyond this mission | Medium | V-ACC | — | PASS | — |
| `5-§19-1` | §8.9 | C5@80ac648e §19 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `5-§19-2` | §8.9 | C5@80ac648e §19 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `5-§19-3` | §8.9 | C5@80ac648e §19 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `5-§19-4` | §8.9 | C5@80ac648e §19 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `5-§19-5` | §8.9 | C5@80ac648e §19 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `22-§4-1` | §8.1 | C22@61e1bb91 §4 | F1 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `22-§4-2` | §8.1 | C22@61e1bb91 §4 | F1 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `22-§4-3` | §8.1 | C22@61e1bb91 §4 | F1 | I-NONE | none beyond this mission | Low | V-DES | — | PASS | — |
| `22-§4-4` | §8.1 | C22@61e1bb91 §4 | F1 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `22-§9-1` | §8.2 | C22@61e1bb91 §9 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `22-§9-2` | §8.2 | C22@61e1bb91 §9 | F2 | I-AUTH, I-AI | D12; DAI | Medium | V-DES | SP-1, SP-3 | BLOCKED | H-D12, H-PROV, H-SP-1, H-SP-3 |
| `22-§9-3` | §8.2 | C22@61e1bb91 §9 | F2 | I-NONE | none beyond this mission | Low | V-NEG | SP-3 | FOLLOW-UP | H-SP-3 |
| `22-§10-1` | §8.4 | C22@61e1bb91 §10 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `22-§10-2` | §8.4 | C22@61e1bb91 §10 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `22-§10-3` | §8.4 | C22@61e1bb91 §10 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `22-§10-4` | §8.4 | C22@61e1bb91 §10 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `22-§10-5` | §8.4 | C22@61e1bb91 §10 | F4 | I-AUTH, I-STO, I-LEG, I-FPDR2 | D12; DR2; DLEG | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-LEG, H-SP-1, H-SP-4 |
| `22-§10-6` | §8.4 | C22@61e1bb91 §10 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `22-§10-7` | §8.4 | C22@61e1bb91 §10 | F4 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `22-§17-1` | §8.5 | C22@61e1bb91 §17 | F5 | I-NONE | none beyond this mission | Low | V-DES | — | PASS | — |
| `22-§17-7` | §8.5 | C22@61e1bb91 §17 | F5 | I-STO | DR2 | Medium | V-DES | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `22-§17-9` | §8.9 | C22@61e1bb91 §17 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `22-§19-1` | §8.7 | C22@61e1bb91 §19 | F7 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§19-2` | §8.7 | C22@61e1bb91 §19 | F7 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `22-§19-3` | §8.7 | C22@61e1bb91 §19 | F7 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§19-4` | §8.7 | C22@61e1bb91 §19 | F7 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§19-5` | §8.7 | C22@61e1bb91 §19 | F7 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§19-6` | §8.7 | C22@61e1bb91 §19 | F7 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `22-§19-7` | §8.7 | C22@61e1bb91 §19 | F7 | I-STO, I-AI | DR2; DAI | Medium | V-TEST | SP-3, SP-4 | FOLLOW-UP | H-STO, H-PROV, H-SP-3, H-SP-4 |
| `22-§21` | §8.8 | C22@61e1bb91 §21 | F8 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `22-§22-1` | §8.8 | C22@61e1bb91 §22 | F8 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§22-2` | §8.8 | C22@61e1bb91 §22 | F8 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§22-3` | §8.8 | C22@61e1bb91 §22 | F8 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§22-4` | §8.8 | C22@61e1bb91 §22 | F8 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§22-5` | §8.8 | C22@61e1bb91 §22 | F8 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§22-6` | §8.8 | C22@61e1bb91 §22 | F8 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `22-§23-2` | §8.7 | C22@61e1bb91 §23 | F7 | I-AUTH | D12 | High | V-NEG | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `22-§23-3` | §8.7 | C22@61e1bb91 §23 | F7 | I-AUTH | D12 | Medium | V-NEG | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `22-§23-5` | §8.7 | C22@61e1bb91 §23 | F7 | I-AUTH | D12 | Medium | V-NEG | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `22-§23-7` | §8.7 | C22@61e1bb91 §23 | F7 | I-NONE | none beyond this mission | Low | V-NEG | SP-1 | FOLLOW-UP | H-SP-1 |
| `22-§27-1` | §8.8 | C22@61e1bb91 §27 | F8 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§27-2` | §8.8 | C22@61e1bb91 §27 | F8 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§27-3` | §8.8 | C22@61e1bb91 §27 | F8 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§27-4` | §8.8 | C22@61e1bb91 §27 | F8 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§27-5` | §8.8 | C22@61e1bb91 §27 | F8 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§27-6` | §8.8 | C22@61e1bb91 §27 | F8 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§27-7` | §8.8 | C22@61e1bb91 §27 | F8 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `22-§27-8` | §8.8 | C22@61e1bb91 §27 | F8 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `22-§28-1` | §8.9 | C22@61e1bb91 §28 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `22-§28-2` | §8.9 | C22@61e1bb91 §28 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `22-§28-3` | §8.9 | C22@61e1bb91 §28 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `22-§28-4` | §8.9 | C22@61e1bb91 §28 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `22-§28-5` | §8.9 | C22@61e1bb91 §28 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `22-§28-6` | §8.9 | C22@61e1bb91 §28 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `22-§28-7` | §8.9 | C22@61e1bb91 §28 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `22-§28-8` | §8.9 | C22@61e1bb91 §28 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `22-§28-9` | §8.9 | C22@61e1bb91 §28 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `22-§28-10` | §8.9 | C22@61e1bb91 §28 | F9 | I-NONE | none beyond this mission | Low | V-NEG | — | PASS | — |
| `22-§29-3` | §8.7 | C22@61e1bb91 §29 | F7 | I-AUTH | D12 | High | V-ACC | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `22-§29-5` | §8.2 | C22@61e1bb91 §29 | F2 | I-AI | DAI | Medium | V-ACC | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `22-§29-7` | §8.3 | C22@61e1bb91 §29 | F3 | I-AUTH, I-CMD | D12; DTX | High | V-ACC | SP-1, SP-2, SP-5 | BLOCKED | H-D12, H-DTX, H-SP-1, H-SP-2, H-SP-5 |
| `22-§29-8` | §8.7 | C22@61e1bb91 §29 | F7 | I-AUTH | D12 | Medium | V-ACC | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `22-§29-10` | §8.7 | C22@61e1bb91 §29 | F7 | I-STO, I-AI | DR2; DAI | Medium | V-ACC | SP-3, SP-4 | FOLLOW-UP | H-STO, H-PROV, H-SP-3, H-SP-4 |
| `22-§29-12` | §8.4 | C22@61e1bb91 §29 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-ACC | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `22-§29-13` | §8.7 | C22@61e1bb91 §29 | F7 | I-AI | DAI | Medium | V-ACC | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `22-§29-14` | §8.8 | C22@61e1bb91 §29 | F8 | I-NONE | none beyond this mission | Medium | V-ACC | — | PASS | — |
| `25-§4-1` | §8.5 | C25@406ce089 §4 | F5 | I-STO | DR2 | Medium | V-DES | SP-4, SP-5 | FOLLOW-UP | H-STO, H-SP-4, H-SP-5 |
| `25-§4-2` | §8.5 | C25@406ce089 §4 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§4-3` | §8.5 | C25@406ce089 §4 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§4-4` | §8.5 | C25@406ce089 §4 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§4-5` | §8.5 | C25@406ce089 §4 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§4-6` | §8.5 | C25@406ce089 §4 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§4-7` | §8.5 | C25@406ce089 §4 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§4-8` | §8.5 | C25@406ce089 §4 | F5 | I-AUTH, I-LEG | D12; DLEG | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-LEG, H-SP-1, H-SP-4, H-SP-5 |
| `25-§4-9` | §8.5 | C25@406ce089 §4 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§4-10` | §8.5 | C25@406ce089 §4 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§4-11` | §8.5 | C25@406ce089 §4 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§4-12` | §8.5 | C25@406ce089 §4 | F5 | I-AUTH | D12 | High | V-NEG | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§5-1` | §8.5 | C25@406ce089 §5 | F5 | I-STO | DR2 | Medium | V-DES | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§5-2` | §8.5 | C25@406ce089 §5 | F5 | I-NONE | none beyond this mission | Low | V-DES | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§6-1` | §8.5 | C25@406ce089 §6 | F5 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§6-2` | §8.5 | C25@406ce089 §6 | F5 | I-NONE | none beyond this mission | Low | V-DES | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§7-1` | §8.5 | C25@406ce089 §7 | F5 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§7-2` | §8.5 | C25@406ce089 §7 | F5 | I-NONE | none beyond this mission | Low | V-DES | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§8-1` | §8.5 | C25@406ce089 §8 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§8-2` | §8.5 | C25@406ce089 §8 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§8-3` | §8.5 | C25@406ce089 §8 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§8-4` | §8.5 | C25@406ce089 §8 | F5 | I-NONE | none beyond this mission | Medium | V-TEST | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§8-5` | §8.5 | C25@406ce089 §8 | F5 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§8-6` | §8.5 | C25@406ce089 §8 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§8-7` | §8.5 | C25@406ce089 §8 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§8-8` | §8.5 | C25@406ce089 §8 | F5 | I-AI | DAI | Medium | V-TEST | SP-3, SP-4 | FOLLOW-UP | H-PROV, H-SP-3, H-SP-4 |
| `25-§8-9` | §8.5 | C25@406ce089 §8 | F5 | I-AUTH, I-CMD | D12; DTX | High | V-TEST | SP-1, SP-2, SP-4, SP-5 | BLOCKED | H-D12, H-DTX, H-SP-1, H-SP-2, H-SP-4, H-SP-5 |
| `25-§8-10` | §8.5 | C25@406ce089 §8 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§8-11` | §8.5 | C25@406ce089 §8 | F5 | I-STO | DR2 | Medium | V-NEG | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§9-1` | §8.5 | C25@406ce089 §9 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§9-2` | §8.5 | C25@406ce089 §9 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§9-3` | §8.5 | C25@406ce089 §9 | F5 | I-STO | DR2 | Medium | V-TEST | SP-1, SP-4 | FOLLOW-UP | H-STO, H-SP-1, H-SP-4 |
| `25-§9-4` | §8.5 | C25@406ce089 §9 | F5 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `25-§9-5` | §8.5 | C25@406ce089 §9 | F5 | I-STO | DR2 | Medium | V-TEST | SP-1, SP-4 | FOLLOW-UP | H-STO, H-SP-1, H-SP-4 |
| `25-§9-6` | §8.5 | C25@406ce089 §9 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§9-7` | §8.5 | C25@406ce089 §9 | F5 | I-AUTH, I-STO | D12; DR2 | Medium | V-DES | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `25-§9-8` | §8.5 | C25@406ce089 §9 | F5 | I-STO | DR2 | Medium | V-DES | SP-1, SP-4 | FOLLOW-UP | H-STO, H-SP-1, H-SP-4 |
| `25-§10-1` | §8.4 | C25@406ce089 §10 | F4 | I-NONE | none beyond this mission | Low | V-NEG | SP-4, SP-5 | FOLLOW-UP | H-SP-4, H-SP-5 |
| `25-§10-2` | §8.4 | C25@406ce089 §10 | F4 | I-NONE | none beyond this mission | Low | V-DES | SP-4, SP-5 | FOLLOW-UP | H-SP-4, H-SP-5 |
| `25-§10-3` | §8.4 | C25@406ce089 §10 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§10-4` | §8.4 | C25@406ce089 §10 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§10-5` | §8.4 | C25@406ce089 §10 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§10-6` | §8.4 | C25@406ce089 §10 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§10-7` | §8.4 | C25@406ce089 §10 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§10-8` | §8.4 | C25@406ce089 §10 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§10-9` | §8.4 | C25@406ce089 §10 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§10-10` | §8.4 | C25@406ce089 §10 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§10-11` | §8.4 | C25@406ce089 §10 | F4 | I-AUTH, I-LEG | D12; DLEG | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-LEG, H-SP-1, H-SP-4, H-SP-5 |
| `25-§10-12` | §8.4 | C25@406ce089 §10 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§11-1` | §8.4 | C25@406ce089 §11 | F4 | I-AI, I-STO | DAI; DR2 | Medium | V-TEST | SP-3, SP-4 | FOLLOW-UP | H-PROV, H-STO, H-SP-3, H-SP-4 |
| `25-§11-2` | §8.4 | C25@406ce089 §11 | F4 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§11-3` | §8.4 | C25@406ce089 §11 | F4 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§11-4` | §8.4 | C25@406ce089 §11 | F4 | I-NONE | none beyond this mission | Low | V-DES | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§12-1` | §8.5 | C25@406ce089 §12 | F5 | I-CONV, I-STO, I-LEG, I-FPDR2 | D13; DR2; DLEG | Medium | V-TEST | SP-4 | BLOCKED | H-D13, H-STO, H-LEG, H-SP-4 |
| `25-§12-2` | §8.5 | C25@406ce089 §12 | F5 | I-CONV | D13 | Medium | V-TEST | SP-4 | BLOCKED | H-D13, H-SP-4 |
| `25-§12-3` | §8.5 | C25@406ce089 §12 | F5 | I-LEG, I-FPDR2 | DLEG | Medium | V-NEG | SP-4 | FOLLOW-UP | H-LEG, H-SP-4 |
| `25-§13-1a` | §8.5 | C25@406ce089 §13 | F5 | I-CONV, I-STO | D13; DR2 | Medium | V-TEST | SP-4 | BLOCKED | H-D13, H-STO, H-SP-4 |
| `25-§13-2` | §8.5 | C25@406ce089 §13 | F5 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§13-3` | §8.5 | C25@406ce089 §13 | F5 | I-AUTH | D12 | Medium | V-DES | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§14-1` | §8.5 | C25@406ce089 §14 | F5 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§14-2` | §8.5 | C25@406ce089 §14 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§14-3` | §8.5 | C25@406ce089 §14 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§14-4` | §8.5 | C25@406ce089 §14 | F5 | I-NONE | none beyond this mission | Medium | V-TEST | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§14-5` | §8.5 | C25@406ce089 §14 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§14-6` | §8.5 | C25@406ce089 §14 | F5 | I-STO, I-L15 | DR2; D15 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-LATER, H-SP-4 |
| `25-§14-7` | §8.5 | C25@406ce089 §14 | F5 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§15-1` | §8.5 | C25@406ce089 §15 | F5 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§15-2` | §8.5 | C25@406ce089 §15 | F5 | I-NONE | none beyond this mission | Low | V-DES | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§15-3` | §8.5 | C25@406ce089 §15 | F5 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§15-4` | §8.5 | C25@406ce089 §15 | F5 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§16-1` | §8.5 | C25@406ce089 §16 | F5 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§16-2` | §8.5 | C25@406ce089 §16 | F5 | I-LEG | DLEG | Medium | V-DES | SP-4 | FOLLOW-UP | H-LEG, H-SP-4 |
| `25-§16-3` | §8.5 | C25@406ce089 §16 | F5 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§17-2` | §8.5 | C25@406ce089 §17 | F5 | I-STO, I-L19 | DR2; D19 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-LATER, H-SP-4 |
| `25-§17-3` | §8.5 | C25@406ce089 §17 | F5 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§17-4` | §8.5 | C25@406ce089 §17 | F5 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§17-5` | §8.5 | C25@406ce089 §17 | F5 | I-LEG | DLEG | Medium | V-DES | SP-4 | FOLLOW-UP | H-LEG, H-SP-4 |
| `25-§17-6` | §8.5 | C25@406ce089 §17 | F5 | I-LEG, I-FPDR2 | DLEG | Medium | V-TEST | SP-4 | FOLLOW-UP | H-LEG, H-SP-4 |
| `25-§17-7` | §8.5 | C25@406ce089 §17 | F5 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§18-1` | §8.5 | C25@406ce089 §18 | F5 | I-STO | DR2 | Medium | V-DES | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§18-2` | §8.5 | C25@406ce089 §18 | F5 | I-STO | DR2 | Medium | V-DES | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§18-3` | §8.5 | C25@406ce089 §18 | F5 | I-STO | DR2 | Medium | V-NEG | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§19-1` | §8.5 | C25@406ce089 §19 | F5 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `25-§19-2` | §8.5 | C25@406ce089 §19 | F5 | I-AUTH, I-STO | D12; DR2 | High | V-NEG | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `25-§19-3` | §8.5 | C25@406ce089 §19 | F5 | I-AUTH, I-STO | D12; DR2 | High | V-NEG | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `25-§19-4` | §8.5 | C25@406ce089 §19 | F5 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `25-§19-5` | §8.5 | C25@406ce089 §19 | F5 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `25-§19-6` | §8.5 | C25@406ce089 §19 | F5 | I-NONE | none beyond this mission | Low | V-NEG | SP-1, SP-4 | FOLLOW-UP | H-SP-1, H-SP-4 |
| `25-§19-7` | §8.5 | C25@406ce089 §19 | F5 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `25-§19-8` | §8.5 | C25@406ce089 §19 | F5 | I-NONE | none beyond this mission | Medium | V-TEST | SP-1, SP-4 | FOLLOW-UP | H-SP-1, H-SP-4 |
| `25-§20-1` | §8.7 | C25@406ce089 §20 | F7 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§20-2` | §8.7 | C25@406ce089 §20 | F7 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§20-3` | §8.7 | C25@406ce089 §20 | F7 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§20-4` | §8.7 | C25@406ce089 §20 | F7 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§20-5` | §8.7 | C25@406ce089 §20 | F7 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§20-6` | §8.7 | C25@406ce089 §20 | F7 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§20-7` | §8.7 | C25@406ce089 §20 | F7 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§20-8` | §8.7 | C25@406ce089 §20 | F7 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§20-9` | §8.7 | C25@406ce089 §20 | F7 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§20-10` | §8.7 | C25@406ce089 §20 | F7 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§20-11` | §8.7 | C25@406ce089 §20 | F7 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§20-12` | §8.7 | C25@406ce089 §20 | F7 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§20-13` | §8.7 | C25@406ce089 §20 | F7 | I-STO, I-AUTH | DR2; D12 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-STO, H-D12, H-SP-1, H-SP-4 |
| `25-§20-14` | §8.7 | C25@406ce089 §20 | F7 | I-STO | DR2 | Medium | V-NEG | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§21-1` | §8.5 | C25@406ce089 §21 | F5 | I-STO, I-L15 | DR2; D15 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-LATER, H-SP-4 |
| `25-§21-2` | §8.5 | C25@406ce089 §21 | F5 | I-STO, I-L15 | DR2; D15 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-LATER, H-SP-4 |
| `25-§21-3` | §8.5 | C25@406ce089 §21 | F5 | I-STO, I-L15 | DR2; D15 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-LATER, H-SP-4 |
| `25-§21-4` | §8.5 | C25@406ce089 §21 | F5 | I-STO, I-L15 | DR2; D15 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-LATER, H-SP-4 |
| `25-§21-5` | §8.5 | C25@406ce089 §21 | F5 | I-STO | DR2 | Medium | V-NEG | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§22-1` | §8.5 | C25@406ce089 §22 | F5 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§22-2` | §8.5 | C25@406ce089 §22 | F5 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§22-3` | §8.5 | C25@406ce089 §22 | F5 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§22-4` | §8.5 | C25@406ce089 §22 | F5 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§22-5` | §8.5 | C25@406ce089 §22 | F5 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§22-6` | §8.5 | C25@406ce089 §22 | F5 | I-STO | DR2 | Medium | V-DES | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§23-1` | §8.4 | C25@406ce089 §23 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§23-2` | §8.4 | C25@406ce089 §23 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§23-3` | §8.4 | C25@406ce089 §23 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§23-4` | §8.4 | C25@406ce089 §23 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§23-5` | §8.4 | C25@406ce089 §23 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§23-6` | §8.4 | C25@406ce089 §23 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§23-7` | §8.4 | C25@406ce089 §23 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§23-8` | §8.4 | C25@406ce089 §23 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§23-9` | §8.4 | C25@406ce089 §23 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§23-10` | §8.4 | C25@406ce089 §23 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§23-11` | §8.4 | C25@406ce089 §23 | F4 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§23-12` | §8.4 | C25@406ce089 §23 | F4 | I-AUTH | D12 | Medium | V-DES | SP-1, SP-4, SP-5 | BLOCKED | H-D12, H-SP-1, H-SP-4, H-SP-5 |
| `25-§24-1` | §8.5 | C25@406ce089 §24 | F5 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§24-2` | §8.5 | C25@406ce089 §24 | F5 | I-STO | DR2 | Medium | V-DES | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§24-3` | §8.5 | C25@406ce089 §24 | F5 | I-AUTH | D12 | Medium | V-NEG | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§25-1` | §8.5 | C25@406ce089 §25 | F5 | I-STO | DR2 | Medium | V-DES | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§25-2` | §8.5 | C25@406ce089 §25 | F5 | I-AUTH | D12 | Medium | V-DES | SP-1, SP-4 | BLOCKED | H-D12, H-SP-1, H-SP-4 |
| `25-§25-3` | §8.5 | C25@406ce089 §25 | F5 | I-AI | DAI | Medium | V-NEG | SP-3, SP-4 | FOLLOW-UP | H-PROV, H-SP-3, H-SP-4 |
| `25-§25-4` | §8.5 | C25@406ce089 §25 | F5 | I-CONV | D13 | Medium | V-NEG | SP-4 | BLOCKED | H-D13, H-SP-4 |
| `25-§26-1` | §8.5 | C25@406ce089 §26 | F5 | I-AUTH, I-STO, I-CONV | D12; DR2; D13 | Medium | V-ACC | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-D13, H-SP-1, H-SP-4 |
| `25-§26-2` | §8.5 | C25@406ce089 §26 | F5 | I-AUTH, I-STO | D12; DR2 | High | V-ACC | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `25-§26-3` | §8.5 | C25@406ce089 §26 | F5 | I-AUTH, I-STO | D12; DR2 | Medium | V-ACC | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `25-§26-4a` | §8.5 | C25@406ce089 §26 | F5 | I-CONV, I-STO | D13; DR2 | Medium | V-ACC | SP-4 | BLOCKED | H-D13, H-STO, H-SP-4 |
| `25-§26-5` | §8.5 | C25@406ce089 §26 | F5 | I-AI, I-STO | DAI; DR2 | Medium | V-ACC | SP-3, SP-4 | FOLLOW-UP | H-PROV, H-STO, H-SP-3, H-SP-4 |
| `25-§26-6` | §8.5 | C25@406ce089 §26 | F5 | I-STO | DR2 | Medium | V-ACC | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§26-7` | §8.5 | C25@406ce089 §26 | F5 | I-STO, I-L15 | DR2; D15 | Medium | V-ACC | SP-4 | FOLLOW-UP | H-STO, H-LATER, H-SP-4 |
| `25-§26-8` | §8.5 | C25@406ce089 §26 | F5 | I-AUTH, I-STO | D12; DR2 | Medium | V-ACC | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `25-§26-9` | §8.5 | C25@406ce089 §26 | F5 | I-STO | DR2 | Medium | V-ACC | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§26-10` | §8.5 | C25@406ce089 §26 | F5 | I-STO | DR2 | Medium | V-ACC | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§26-11` | §8.5 | C25@406ce089 §26 | F5 | I-AUTH, I-STO | D12; DR2 | High | V-ACC | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `25-§26-12` | §8.5 | C25@406ce089 §26 | F5 | I-LEG, I-FPDR2 | DLEG; DUF6 | Medium | V-ACC | SP-4 | FOLLOW-UP | H-LEG, H-SP-4 |
| `25-§26-13` | §8.5 | C25@406ce089 §26 | F5 | I-STO | DR2 | Medium | V-ACC | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§26-14` | §8.5 | C25@406ce089 §26 | F5 | I-STO | DR2 | Medium | V-ACC | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `25-§27-1` | §8.9 | C25@406ce089 §27 | F9 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§27-2` | §8.9 | C25@406ce089 §27 | F9 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§27-3` | §8.9 | C25@406ce089 §27 | F9 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§27-4` | §8.9 | C25@406ce089 §27 | F9 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§27-5` | §8.9 | C25@406ce089 §27 | F9 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§27-6` | §8.9 | C25@406ce089 §27 | F9 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§27-7` | §8.9 | C25@406ce089 §27 | F9 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `25-§27-8` | §8.9 | C25@406ce089 §27 | F9 | I-NONE | none beyond this mission | Low | V-NEG | SP-4 | FOLLOW-UP | H-SP-4 |
| `24-§5-6` | §8.2 | C24@0c1dcbb2 §5 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `24-§7-3` | §8.2 | C24@0c1dcbb2 §7 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `24-§7-4` | §8.2 | C24@0c1dcbb2 §7 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `24-§14-1` | §8.2 | C24@0c1dcbb2 §14 | F2 | I-AI | DAI | Medium | V-DES | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `24-§14-2` | §8.2 | C24@0c1dcbb2 §14 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `24-§14-3` | §8.2 | C24@0c1dcbb2 §14 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `24-§14-4` | §8.2 | C24@0c1dcbb2 §14 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `24-§14-5` | §8.2 | C24@0c1dcbb2 §14 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `24-§14-6` | §8.2 | C24@0c1dcbb2 §14 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `24-§14-7` | §8.2 | C24@0c1dcbb2 §14 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `24-§14-8` | §8.2 | C24@0c1dcbb2 §14 | F2 | I-AUTH, I-AI | D12; DAI | Medium | V-DES | SP-1, SP-3 | BLOCKED | H-D12, H-PROV, H-SP-1, H-SP-3 |
| `24-§14-9` | §8.2 | C24@0c1dcbb2 §14 | F2 | I-CONV | D13 | Medium | V-NEG | SP-3 | BLOCKED | H-D13, H-SP-3 |
| `24-§18-1a` | §8.2 | C24@0c1dcbb2 §18 | F2 | I-CONV, I-AI, I-CMD, I-L20 | D13; DAI; DTX; D20 | High | V-ACC | SP-2, SP-3, SP-5 | BLOCKED | H-D13, H-PROV, H-DTX, H-LATER, H-SP-2, H-SP-3, H-SP-5 |
| `24-§21-7` | §8.3 | C24@0c1dcbb2 §21 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-3 | BLOCKED | H-D12, H-SP-1, H-SP-3 |
| `24-§23-6` | §8.7 | C24@0c1dcbb2 §23 | F7 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `24-§27-5` | §8.2 | C24@0c1dcbb2 §27 | F2 | I-CONV | D13 | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-SP-3 |
| `24-§31-8` | §8.2 | C24@0c1dcbb2 §31 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-ACC | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `9-§12-1` | §8.2 | C9@649c55f3 §12 | F2 | I-CONV | D13 | Medium | V-TEST | — | BLOCKED | H-D13 |
| `10-§5-10` | §8.4 | C10@5c145ed7 §5 | F4 | I-AUTH, I-CONV, I-STO | D12; D13; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-D13, H-STO, H-SP-1, H-SP-4 |
| `10-§10-1` | §8.2 | C10@5c145ed7 §10 | F2 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `10-§10-3` | §8.3 | C10@5c145ed7 §10 | F3 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `10-§10-4` | §8.3 | C10@5c145ed7 §10 | F3 | I-CONV | D13 | Medium | V-TEST | — | BLOCKED | H-D13 |
| `10-§10-5` | §8.3 | C10@5c145ed7 §10 | F3 | I-AUTH, I-CONV | D12; D13 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-D13, H-SP-1 |
| `10-§10-7` | §8.4 | C10@5c145ed7 §10 | F4 | I-AUTH, I-CONV, I-STO | D12; D13; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-D13, H-STO, H-SP-1, H-SP-4 |
| `10-§13-3` | §8.3 | C10@5c145ed7 §13 | F3 | I-AUTH, I-CONV, I-CMD | D12; D13; DTX | High | V-TEST | SP-1, SP-2, SP-5 | BLOCKED | H-D12, H-D13, H-DTX, H-SP-1, H-SP-2, H-SP-5 |
| `10-§17-4` | §8.3 | C10@5c145ed7 §17 | F3 | I-CONV, I-AI | D13; DAI | Medium | V-TEST | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `10-§23-3b` | §8.3 | C10@5c145ed7 §23 | F3 | I-CONV, I-AI | D13; DAI | Medium | V-ACC | SP-3 | BLOCKED | H-D13, H-PROV, H-SP-3 |
| `12-§4-5` | §8.3 | C12@6d48feff §4 | F3 | I-CONV | D13 | Medium | V-TEST | — | BLOCKED | H-D13 |
| `17-§12-1` | §8.4 | C17@7943f74a §12 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `17-§12-2` | §8.4 | C17@7943f74a §12 | F4 | I-AUTH | D12 | Medium | V-DES | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `7-§6-2` | §8.2 | C7@65ad91b2 §6 | F2 | I-AUTH | D12 | Medium | V-TEST | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `7-§6-4` | §8.2 | C7@65ad91b2 §6 | F2 | I-AUTH | D12 | Medium | V-DES | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `7-§6-5` | §8.2 | C7@65ad91b2 §6 | F2 | I-NONE | none beyond this mission | Low | V-NEG | SP-2 | FOLLOW-UP | H-SP-2 |
| `7-§15-2a` | §8.2 | C7@65ad91b2 §15 | F2 | I-AUTH | D12 | Medium | V-ACC | SP-1, SP-2 | BLOCKED | H-D12, H-SP-1, H-SP-2 |
| `BP-§5.3-1` | §8.8 | BP@9dfdd924 §5.3 | F8 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `BP-§5.4-1` | §8.5 | BP@9dfdd924 §5.4 | F5 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `BP-§6.1-1` | §8.3 | BP@9dfdd924 §6.1 | F3 | I-AUTH | D12 | Medium | V-NEG | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `BP-§6.2-1` | §8.3 | BP@9dfdd924 §6.2 | F3 | I-AUTH, I-CONV, I-CMD | D12; D13; DTX | High | V-DES | SP-1, SP-2, SP-5 | BLOCKED | H-D12, H-D13, H-DTX, H-SP-1, H-SP-2, H-SP-5 |
| `BP-§6.3-1` | §8.1 | BP@9dfdd924 §6.3 | F1 | I-NONE | none beyond this mission | Low | V-DES | — | PASS | — |
| `BP-§6.3-2` | §8.5 | BP@9dfdd924 §6.3 | F5 | I-STO | DR2 | Medium | V-DES | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `BP-§8.4-1` | §8.2 | BP@9dfdd924 §8.4 | F2 | I-NONE | none beyond this mission | Low | V-DES | — | PASS | — |
| `BP-§9-1` | §8.1 | BP@9dfdd924 §9 | F1 | I-NONE | none beyond this mission | Low | V-DES | — | PASS | — |
| `BP-§10.3-O` | §8.1 | BP@9dfdd924 §10.3 | F1 | I-AUTH, I-AI, I-STO | D12; DAI; DR2 | Medium | V-EVM | SP-1, SP-3, SP-4 | BLOCKED | H-D12, H-PROV, H-STO, H-SP-1, H-SP-3, H-SP-4 |
| `BP-§10.3-W1` | §8.1 | BP@9dfdd924 §10.3 | F1 | I-AUTH, I-CMD | D12; DTX | High | V-TEST | SP-1, SP-2, SP-5 | BLOCKED | H-D12, H-DTX, H-SP-1, H-SP-2, H-SP-5 |
| `BP-§10.3-W2` | §8.1 | BP@9dfdd924 §10.3 | F1 | I-AUTH, I-CMD, I-FPDR14 | D12; DTX | High | V-TEST | SP-1, SP-2, SP-5 | BLOCKED | H-D12, H-DTX, H-SP-1, H-SP-2, H-SP-5 |
| `BP-§10.3-W3` | §8.1 | BP@9dfdd924 §10.3 | F1 | I-CMD | DTX | High | V-TEST | SP-2, SP-5 | BLOCKED | H-DTX, H-SP-2, H-SP-5 |
| `BP-§10.3-W4` | §8.2 | BP@9dfdd924 §10.3 | F2 | I-AUTH, I-AI, I-STO | D12; DAI; DR2 | Medium | V-TEST | SP-1, SP-3, SP-4 | BLOCKED | H-D12, H-PROV, H-STO, H-SP-1, H-SP-3, H-SP-4 |
| `BP-§10.3-W5` | §8.4 | BP@9dfdd924 §10.3 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `BP-§10.3-W6` | §8.2 | BP@9dfdd924 §10.3 | F2 | I-AI | DAI | Medium | V-TEST | SP-3 | FOLLOW-UP | H-PROV, H-SP-3 |
| `BP-§10.3-W7` | §8.3 | BP@9dfdd924 §10.3 | F3 | I-AUTH, I-CMD | D12; DTX | High | V-TEST | SP-1, SP-2, SP-5 | BLOCKED | H-D12, H-DTX, H-SP-1, H-SP-2, H-SP-5 |
| `BP-§10.3-W8` | §8.4 | BP@9dfdd924 §10.3 | F4 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `BP-§10.3-W9` | §8.5 | BP@9dfdd924 §10.3 | F5 | I-STO | DR2 | Medium | V-TEST | SP-4 | FOLLOW-UP | H-STO, H-SP-4 |
| `BP-§10.3-W10` | §8.5 | BP@9dfdd924 §10.3 | F5 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `BP-§10.3-W11` | §8.3 | BP@9dfdd924 §10.3 | F3 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `BP-§10.3-W12` | §8.2 | BP@9dfdd924 §10.3 | F2 | I-NONE | none beyond this mission | Medium | V-TEST | — | PASS | — |
| `BP-§10.3-W13` | §8.2 | BP@9dfdd924 §10.3 | F2 | I-AUTH | D12 | Medium | V-TEST | SP-1 | BLOCKED | H-D12, H-SP-1 |
| `BP-§10.3-C1` | §8.1 | BP@9dfdd924 §10.3 | F1 | I-CMD | DTX | High | V-DES | SP-2, SP-5 | BLOCKED | H-DTX, H-SP-2, H-SP-5 |
| `BP-§10.3-S1` | §8.6 | BP@9dfdd924 §10.3 | F6 | I-AUTH, I-STO | D12; DR2 | Medium | V-TEST | SP-1, SP-4 | BLOCKED | H-D12, H-STO, H-SP-1, H-SP-4 |
| `BP-§10.3-SA1` | §8.3 | BP@9dfdd924 §10.3 | F3 | I-AUTH, I-CONV, I-AI, I-CMD, I-STO | D12; D13; DAI; DTX; DR2 | High | V-FRV; V-EVM | SP-1, SP-2, SP-3, SP-4, SP-5 | BLOCKED | H-D12, H-D13, H-PROV, H-DTX, H-STO, H-SP-1, H-SP-2, H-SP-3, H-SP-4, H-SP-5 |
| `BP-§10.3-SA2` | §8.3 | BP@9dfdd924 §10.3 | F3 | I-AUTH, I-CMD, I-FPDR14, I-FPDR3 | D12; DTX | High | V-FRV; V-EVM | SP-1, SP-2, SP-5 | BLOCKED | H-D12, H-DTX, H-SP-1, H-SP-2, H-SP-5 |
| `BP-§10.3-SB1` | §8.1 | BP@9dfdd924 §10.3 | F1 | I-AUTH, I-CMD, I-FPDR14 | D12; DTX | High | V-FRV; V-EVM | SP-1, SP-2, SP-5 | BLOCKED | H-D12, H-DTX, H-SP-1, H-SP-2, H-SP-5 |
| `BP-§10.3-SB2` | §8.1 | BP@9dfdd924 §10.3 | F1 | I-CMD, I-FPDR14 | DTX | High | V-FRV; V-EVM | SP-2, SP-5 | BLOCKED | H-DTX, H-SP-2, H-SP-5 |
| `BP-§10.3-X` | §8.4 | BP@9dfdd924 §10.3 | F4 | I-AUTH, I-AI, I-STO | D12; DAI; DR2 | Medium | V-EVM | SP-1, SP-3, SP-4 | BLOCKED | H-D12, H-PROV, H-STO, H-SP-1, H-SP-3, H-SP-4 |
| `BP-§11-1` | §8.2 | BP@9dfdd924 §11 | F2 | I-NONE | none beyond this mission | Low | V-DES | — | PASS | — |
| `BP-§11-2` | §8.8 | BP@9dfdd924 §11 | F8 | I-NONE | none beyond this mission | Low | V-DES | — | PASS | — |
| `BP-§11-3` | §8.8 | BP@9dfdd924 §11 | F8 | I-NONE | none beyond this mission | Low | V-DES | — | PASS | — |
| `BP-§13-1` | §8.8 | BP@9dfdd924 §13 | F8 | I-NONE | none beyond this mission | Low | V-DES | — | PASS | — |

### 20.7 Register totals

| Measure | Count |
|---|---|
| Rows with a Stage 7 finding | 563 |
| `BLOCKED` | 319 |
| `FOLLOW-UP` | 176 |
| `PASS` | 68 |
| `NOT APPLICABLE` | 0 |
| Risk High / Medium / Low | 61 / 427 / 75 |
| Specialist markers SP-1 / SP-2 / SP-3 / SP-4 / SP-5 | 236 / 95 / 135 / 211 / 90 |
| Rows with no specialist marker | 90 |

| Subsection | Rows | `BLOCKED` | `FOLLOW-UP` | `PASS` |
|---|---|---|---|---|
| §8.1 | 67 | 55 | 3 | 9 |
| §8.2 | 92 | 46 | 36 | 10 |
| §8.3 | 78 | 58 | 19 | 1 |
| §8.4 | 67 | 56 | 10 | 1 |
| §8.5 | 114 | 48 | 65 | 1 |
| §8.6 | 24 | 23 | 1 | 0 |
| §8.7 | 71 | 33 | 33 | 5 |
| §8.8 | 20 | 0 | 1 | 19 |
| §8.9 | 30 | 0 | 8 | 22 |

Every `BLOCKED` row is exactly a row carrying `D12`, `D13` or `DTX`. All 42 `DTX` rows are `BLOCKED`. No row changed disposition, owning mission, build commitment or commercial classification.

`PASS` rows (68): `3-§2-2`, `3-§3`, `3-§5-9`, `3-§7-9`, `3-§12-5`, `3-§14-2`, `3-§15-1`, `3-§20-1`, `3-§20-2`, `3-§20-3`, `3-§20-4`, `3-§20-5`, `3-§20-6`, `5-§2-2`, `5-§4-4`, `5-§4-5`, `5-§4-9`, `5-§4-14`, `5-§6-13`, `5-§7-1`, `5-§18-11`, `5-§19-1`, `5-§19-2`, `5-§19-3`, `5-§19-4`, `5-§19-5`, `22-§4-3`, `22-§4-4`, `22-§17-1`, `22-§17-9`, `22-§19-1`, `22-§19-3`, `22-§19-4`, `22-§19-5`, `22-§22-1`, `22-§22-2`, `22-§22-3`, `22-§22-4`, `22-§22-5`, `22-§22-6`, `22-§27-1`, `22-§27-2`, `22-§27-3`, `22-§27-4`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§27-8`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§28-7`, `22-§28-8`, `22-§28-9`, `22-§28-10`, `22-§29-14`, `BP-§5.3-1`, `BP-§6.3-1`, `BP-§8.4-1`, `BP-§9-1`, `BP-§10.3-W12`, `BP-§11-1`, `BP-§11-2`, `BP-§11-3`, `BP-§13-1`.

## 21. Engineering Questions, Risks & Recommendations

### 21.1 Engineering questions for the EIS and specialists

| ID | Question | Routed to |
|---|---|---|
| EQ14-01 | Shape of the repayment-target link that can point to either a standalone credit entry or a credit-method sale without altering the sale (`FPDR-4`), and its integrity constraints (same business, same counterparty reference, direction) | SP-2, SP-5 |
| EQ14-02 | Whether partial and multiple repayments against one target are recorded as separate settlement rows, given that over-repayment validation against a balance is SB-P-1.16 (`3-§9-12`) | SP-2 |
| EQ14-03 | Material-field fingerprint content per destination and its interaction with `confirmation_bindings` expiry | SP-3, SP-2 |
| EQ14-04 | Interpretation isolation that runs in the deployed runtime; whether the Lambda offload pattern is reused for heavy parsing | SP-3, SP-4 |
| EQ14-05 | Retrieval mechanism (short-lived signed access versus proxy) and the acceptable revocation window for `25-§26-11` | SP-1, SP-4 |
| EQ14-06 | Mechanism for `FPDR-2` discard before the SB-P-1.15 Scheduler (object-store lifecycle on a transient prefix plus reconciliation) and the provider capability it needs | SP-4 |
| EQ14-07 | Policy shape for new tables under the SB-P-1.12 kernel, and the same-migration revoke pattern against current default privileges | SP-1, SP-5 |
| EQ14-08 | Document fingerprint for duplicate detection (lease SHA-256) and its business scoping | SP-2, SP-4 |
| EQ14-09 | Migration ordering of M14-1 relative to the SB-P-1.12 transactions-family cut-over migration | SP-5 |

### 21.2 Engineering risks

| Risk | Likelihood / impact | Mitigation | Specialist |
|---|---|---|---|
| Upstream SB-P-1.12/SB-P-1.13 stay suspended; 319 rows cannot be built | High / High | Dependency-ordered activation; documentary work continues; no interim authority path | — |
| Widening mislabels or distorts existing history or totals | Medium / High | Regression baseline; one totals definition; no backfill | SP-2, SP-5 |
| A second transaction-write path appears during coordination | Medium / High | Widen only the governed command in the same cut-over | SP-1, SP-2 |
| New tables ship readable by `anon` | Medium / High | Same-migration RLS and revokes; negative tests | SP-1, SP-5 |
| Repayment-target link permits cross-business or cross-counterparty linkage | Medium / High | Composite business-scoped references; integrity checks | SP-1, SP-2 |
| Signed retrieval outlives revocation | Medium / Medium | Short expiry or proxy; stated window | SP-1, SP-4 |
| `FPDR-2` discard not enforceable before the Scheduler | Low / Medium | Object-store lifecycle on transient prefix; return to Mission Control if not possible (would be T8) | SP-4 |
| Interpretation cannot run isolated in the deployed runtime | Medium / Medium | Offload with enforced budget | SP-3, SP-4 |
| Document-borne instruction or formula injection | Medium / High | Untrusted-data handling; export neutralization; fixtures | SP-3 |
| Provider facts remain unknown | High / Medium | Separately authorized read-only evidence collection | SP-4 |
| CI produces no runs | High / Low | Local gates recorded; run evidence when available | — |

### 21.3 Recommendations

1. Mission Control receives and dispositions the five independent specialist reports before any Section 20 finding marked `SP-n` is relied on.
2. Mission Control authorizes separate read-only evidence collection for the `UNVERIFIED — ACCESS REQUIRED` facts in Section 20.2.
3. The EIS carries EC14-01 to EC14-16 and the answers to EQ14-01 to EQ14-09 after specialist disposition.
4. Implementation activation follows the Section 20.4 order and no earlier.
5. A separately authorized migration mission plans and rehearses M14-1 to M14-4.

### 21.4 Remaining holds by condition

| Hold | Rows |
|---|---|
| `H-D12` SB-P-1.12 implementation/evidence | 225 |
| `H-D13` SB-P-1.13 implementation/evidence | 92 |
| `H-DTX` governed transaction command | 42 |
| `H-PROV` AI provider evidence | 97 |
| `H-STO` storage activation | 124 |
| `H-LEG` retention basis | 11 |
| `H-LATER` later-mission dependency | 13 |
| `H-SP-1` Security/RLS report pending | 236 |
| `H-SP-2` Transaction integrity report pending | 95 |
| `H-SP-3` UDI/AI report pending | 135 |
| `H-SP-4` Storage/provider report pending | 211 |
| `H-SP-5` Migration report pending | 90 |

A row may carry several holds.

### 21.5 Trigger screen

| Trigger | Result |
|---|---|
| T2 — source conflict | Not triggered |
| T3 — new product decision | Not triggered. EQ14-02 (partial/multiple repayments) is treated as engineering within `FPDR-4`; if a specialist finds it needs a product rule, it would become T3 |
| T6 — material derived constraint | Not triggered |
| T7 — omission, deferral, pull-forward, reclassification | Not triggered; no row moved |
| T8 — infeasibility or Product Truth / security conflict | Not triggered. `BLOCKED` rows are dependency-blocked, not infeasible. EC14-08 (`FPDR-2` timing) would become T8 only if no compliant mechanism exists |

B6-01 stays resolved by `FPDR-4`; no new evidence reopens it.

### 21.6 Findings held pending specialists

| Specialist report | Held Section 20 items |
|---|---|
| S7-SP-1 Security/RLS | F1, F3, F5, F6, F7; EC14-03, EC14-07, EC14-09; EQ14-05, EQ14-07; 236 rows |
| S7-SP-2 Transaction integrity | F1, F3, F7; EC14-01, EC14-02, EC14-03, EC14-05, EC14-10, EC14-13, EC14-14; EQ14-01, EQ14-02, EQ14-03, EQ14-08; 95 rows |
| S7-SP-3 UDI/AI safety | F2, F3, F6; EC14-04, EC14-05, EC14-11; EQ14-03, EQ14-04; 135 rows |
| S7-SP-4 Storage/provider | F2, F4, F5, F7; EC14-06, EC14-07, EC14-08, EC14-14; EQ14-04, EQ14-05, EQ14-06, EQ14-08; 211 rows |
| S7-SP-5 Migration | F1, F4, F5, F8; EC14-01, EC14-09, EC14-15; EQ14-01, EQ14-07, EQ14-09; Section 20.4 migrations; 90 rows |

### 21.7 Stage 7 readiness

Sections 20–21 are drafted. Stage 7 cannot be completed until the five independent specialist reports are received and dispositioned by Mission Control and any resulting corrections are applied. No Stage 8, Blueprint lock, EIS, implementation or production authority follows.
