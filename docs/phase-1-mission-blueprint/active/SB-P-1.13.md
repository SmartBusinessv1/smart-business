# SB-P-1.13 — Native Conversation & AI Intelligence Foundation

## Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.13 |
| Mission Name | Native Conversation & AI Intelligence Foundation |
| Mission Type | Product Mission — shared conversational, language, voice and AI-orchestration foundation |
| Lifecycle Stage | Source 18 v1.2 Stage 7 — Engineering Review (Sections 20–21 draft) |
| Status | `SECTIONS 1–19 v0.2 CANONICAL (PR #785); STAGE 7 ENGINEERING REVIEW SECTIONS 20–21 DRAFT — PENDING INDEPENDENT SPECIALIST REVIEWS, MISSION CONTROL REVIEW AND HUMAN MERGE. STAGE 8 / BLUEPRINT LOCK / EIS / IMPLEMENTATION NOT AUTHORIZED.` |
| Product Authority | Founder (Riyas PK) |
| Product Discovery and Drafting | Claude Code, Stage 2–4 Definition Actor (SB-P-1.13-MC-01) |
| Lifecycle Authority | Source 18 v1.2 (`merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `0945bda60a93c99909c3b7a247d5427ebe256011`) |
| Stage 4 Authorization | SB-P-1.13-MC-05, `communication/missions/SB-P-1.13/mission-control/07-stage4-blueprint-preparation-authorization.md`, canonical at `main@f81219cc89019af005fc2985acf0e1ba01445031` (PR #780) |
| Governing Build Plan section | Build Plan §10.2 (`00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`, blob `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a`) |
| Canonical FCTM | `communication/missions/SB-P-1.13/claude-code/02-stage2-populated-fctm.md`, blob `97ddc752dcbbdb6586110a782ef1e24405b6dd22`: 974 rows — 651 `IN SCOPE`, 126 `ASSIGNED TO LATER MISSION`, 121 `DELEGATED`, 52 `NOT APPLICABLE`, 21 `OUT OF BUILD SCOPE`, 3 `UNRESOLVED FOUNDER DECISION`, 0 `ESCALATED` |
| Founder Product Decision Record | `communication/missions/SB-P-1.13/founder/02-stage3-founder-product-decision-record.md` — `FPDR-1` to `FPDR-4`, canonical (PR #779, `main@ecae33128e28358bf8fa3c308a5b33fc3fe284b2`). Post-Stage-6 decision `FPDR-5`: `communication/missions/SB-P-1.13/founder/03-post-stage6-founder-product-decision-record.md` (draft until human merge; SB-P-1.13-MC-09). In this Blueprint, an unqualified `FPDR-n` means the SB-P-1.13 decision; SB-P-1.12's decisions of the same number are always written `SB-P-1.12 FPDR-n`. |
| Stage 3 gate | Triggered (T1, T2, T4, T6) and resolved by `FPDR-1` to `FPDR-4`; Stage 3 COMPLETE / CANONICAL (SB-P-1.13-MC-04, MC-05) |
| Upstream dependency | SB-P-1.12 Authority, Identity & Product Surface Foundation: specification available (Blueprint and EIS `APPROVED — LOCKED`); implementation not complete (Implementation Authorization `WITHHELD`); evidence not complete |
| Date | 2026-10-06 |
| Builder Review | COMPLETE / CANONICAL — Stage 6 findings B6-01 through B6-16 accepted under SB-P-1.13-MC-08, PR #783 |
| Engineering Review | DRAFT — Sections 20–21 prepared by Claude Code under SB-P-1.13-MC-11; findings naming a specialist are held pending S7-SP-1, S7-SP-2 and S7-SP-3 |
| Mission Control Review | COMPLETE THROUGH STAGE 6 AND B6-01/B6-02 RECONCILIATION (PR #785); Stage 7 review pending |
| Blueprint Lock | Not locked |

## Mission Snapshot

| Field | Summary |
|---|---|
| Product problem | Smart Business is conversation-first but today has no native conversation surface, no language layer, no AI orchestration, no voice and no FAQ-first support path, so it depends entirely on a future WhatsApp channel (Build Plan §8; Delta D-01, D-03, D-04, D-07). |
| Primary users | Owner, and Manager and Employee within delegated permission (Contract 10 §8, Contract 12 §14). Customers, suppliers and delivery staff do not receive the Owner's Workspace (`10-§8-4`). |
| Build Now in this mission | Native Conversation Workspace; English/Malayalam/Manglish language layer; conversation context; Basic Voice; AI orchestration and provider abstraction; typed tool/action proposals; permission-context propagation; clarification/preview/confirmation; additive governed create-transaction command (`FPDR-1`); deterministic domain-command execution; audit; attachment handoff toward UDI; FAQ-before-AI support foundation; graceful AI/provider failure (Build Plan §10.2; 651 `IN SCOPE` rows). |
| Core boundary | This mission owns the channel-independent conversation, language, voice and AI kernel. It consumes SB-P-1.12's authority kernel and does not build a parallel one. It does not build the mature Ledger, UDI or durable media (SB-P-1.14), Ask CFO or reminders (SB-P-1.15), Voice Plus or mature support (SB-P-1.19), or the WhatsApp adapter (SB-P-1.20). |
| Assigned to later missions (Build Now, not Build Later) | 126 rows (Section 11.1): SB-P-1.14 24, SB-P-1.15 33, SB-P-1.16 4, SB-P-1.17 7, SB-P-1.18 7, SB-P-1.19 35, SB-P-1.20 16. |
| Rejected | Separate WhatsApp bot or AI brain per channel; model conversation as permanent Business Memory; AI/tool capability as authority; permission decisions in prompts; destructive free-form SQL by AI; and every Build Plan §16 rejection (Section 11.3). |
| Stage result sought | A Mission Control-reviewable, source-traceable Product Blueprint through Section 19, assembled by reference to the canonical 974-row FCTM and `FPDR-1` to `FPDR-4`. |

## 1. Mission Overview

### Purpose

Build Plan §10.2 product outcome: create Smart Business's own conversational operating surface independently of WhatsApp.

### Summary

The mission delivers the Build Plan §10.2 required work areas (`BP-§10.2-W1` to `-W13`) as one shared kernel (Build Plan §6.4) that structured pages, the native Workspace and, later, WhatsApp all reach through the same command path (Build Plan §6.2). Scope is the 651 `IN SCOPE` FCTM rows; every other row is accounted for in Section 11.

### Mission Philosophy

Contract 24 §3 and Contract 9 §2: understand the person, assist without judging, and keep authority, Business Memory and deterministic execution outside the model (Contract 24 §34).

## 2. Domain

### Conversation, Language, Voice and AI Intelligence Foundation

The mission advances Contracts 9, 10 and 24 in full; Contract 12 for Basic Voice; Contract 8 for the FAQ-before-AI foundation; and the Contract 22 obligations it touches (Build Plan §9 row 2). It inherits residual rows from Contracts 17, 20 and 7 assigned to it by the locked SB-P-1.12 FCTM (15 inherited source rows expand to 45 SB-P-1.13 rows: 21 in FCTM Part H and 24 in Part F).

### Relationship to Other Domains

| Domain | Relationship | Rows |
|---|---|---|
| Authority, identity, isolation (SB-P-1.12, Contract 21, Contract 22 §5/§6/§13–§15/§20/§23) | Consumed specification; no parallel model | Section 11.2; Section 12 |
| Mature Ledger, UDI, durable media (SB-P-1.14; Contracts 3, 5, 25) | Delegated and later-mission; this mission hands off attachments and uses existing transaction types only | Sections 8.9, 11 |
| Ask CFO, reminders, Daily Intelligence, notifications (SB-P-1.15; Contracts 2, 11) | Later mission reuses this kernel | Section 11.1 |
| Voice Plus, mature support, onboarding, entitlements (SB-P-1.19; Contracts 12 §5, 8, 18, 19, 20) | Later mission | Section 11.1 |
| WhatsApp adapter (SB-P-1.20; Contract 23) | Later thin adapter into this kernel | Sections 8.3, 11 |

## 3. Mission Objective

By mission end, subject to the dependencies in Section 12, an authorized merchant can use the native Conversation Workspace in English, Malayalam or Manglish, by text or Basic Voice, to ask, clarify, preview and confirm consequential actions that execute only through governed deterministic commands under the SB-P-1.12 permission model, with truthful stored-state confirmation and audit, and with the product still working when WhatsApp/Meta is unavailable (Build Plan §10.2 product outcome, experience and Founder Runtime Scenarios A and B).

## 4. Business Purpose

Contract 10 §2 and Build Plan §8: a third-party messaging outage must not stop the merchant's business system, and conversation-first must not mean channel-dependent. Build Plan §11: this mission underpins Ask CFO, multilingual workflows, Voice, WhatsApp and FAQ-first support.

## 5. Product Truth Alignment

| Principle | Source | How this Blueprint carries it |
|---|---|---|
| AI Assistant, Not AI Judge | Contract 24 §3, §22 | Section 8.3, 8.4; `24-§22-*` |
| Human decision ownership | Contract 24 §21; Contract 22 §24 | Section 8.5; `FPDR-1` |
| WhatsApp-first, not WhatsApp-only | Build Plan §8.1–§8.4 | Sections 8.1, 8.10; Scenario B |
| One product, one kernel | Build Plan §6.4, §6.6; Contract 22 §7, §25 | Section 8.3 |
| Natural language cannot widen access | Contract 21 §8; Contract 24 §10 | Section 8.4 |
| Truthful confirmation | Contract 3 §6 (delegated); Contract 10 §23 Scenario 1 | Section 8.5 |
| Privacy and data minimization | Contract 24 §25; Contract 22 §23 | Sections 8.4, 8.7 |

## 6. User Value

| User | Value | Source |
|---|---|---|
| Owner | Speak or type naturally in their own language and have Smart Business act safely and confirm what was actually stored | Build Plan §10.2 exit principle; Contract 10 §1 |
| Manager | Use only the capabilities the Owner delegated, through the same conversation | Contract 10 §8; Contract 12 §14 |
| Employee | Permitted operational actions and self-service, with calm denials for Owner-only intelligence | Contract 10 §8; Contract 21 §20 (delegated) |
| Every merchant during a WhatsApp/Meta outage | Continued use of Smart Business natively | Build Plan §8.4, §10.2 Scenario B |
| Merchants needing help | FAQ-first answers in their language, without hallucinated policy | Contract 8 §3, §6 |
| Later missions | One kernel to reuse instead of separate brains | Build Plan §11; Contract 22 §28 |

## 7. Core Deliverables

| Deliverable | Section | Workstream (Stage 1 register) |
|---|---|---|
| Native Conversation Workspace | 8.1 | WS-A |
| English/Malayalam/Manglish language and clarification layer | 8.2 | WS-B |
| AI orchestration, provider abstraction and model routing | 8.3 | WS-C |
| Permission-context propagation, isolation and denial (consuming SB-P-1.12) | 8.4 | WS-C |
| Typed tool proposals, confirmation and the governed create-transaction command | 8.5 | WS-C |
| Audit and provenance | 8.6 | WS-C |
| Basic Voice | 8.7 | WS-D |
| FAQ-before-AI support foundation | 8.8 | WS-E |
| Attachment handoff boundary | 8.9 | WS-F |
| Failure, provider outage and WhatsApp independence | 8.10 | WS-G |
| Platform quality and dependency-rule disclosures | 8.11 | all |
| Cross-cutting non-goals | 8.12 | all |

## 8. Detailed Functional Scope

Each subsection names the governing sources and lists every `IN SCOPE` FCTM row it realizes. Requirement text is not restated; the row pointer and the source section are the requirement. Every listed row is a design obligation for the later EIS and, where it is an acceptance row, an acceptance obligation in Section 15. Rows carrying a dependency code are also governed by Section 12.

### 8.1 Native Conversation Workspace (Contract 10 §4–§8, §15, §16, §20; Contract 17 §5; Contract 20 §15; Build Plan §8.3, §10.2)

Sources: Contract 10 §4 (text input), §5 (outputs), §6 (one product, multiple channels), §7 (pending-confirmation continuity), §8 (users), §15 (sessions), §16 (history and retention), §20 (performance and UX); Contract 17 §5 and §22 Scenarios 4 and 8 (first-class placement); Contract 20 §15; Build Plan §8.3 and §10.2 experience (`-E1`, `-E4`).

Mission design (implementation-neutral): the Workspace is a first-class navigation destination beside the structured pages, not a fallback (`17-§5-2`). It uses the single shared identity, Business Memory, permission, language, confirmation and audit foundations and keeps no channel-specific copy (`10-§6-*`). Second-channel proof of the sharing rows is SB-P-1.20 channel verification (Build Plan §9 row 9). Conversation history is distinguished from Business Memory, documents, audit and temporary confirmation state and is not an uncontrolled transcript store (`10-§16-*`); the active-account retention default is an open policy dependency (Section 12, DC-12).

**FCTM rows realized here (52 `IN SCOPE`):** `10-§4-1`, `10-§5-1`, `10-§5-3`, `10-§5-4`, `10-§5-6`, `10-§5-8`, `10-§5-9`, `10-§5-11`, `10-§6-1`, `10-§6-2`, `10-§6-3`, `10-§6-4`, `10-§6-5`, `10-§6-6`, `10-§6-7`, `10-§6-8`, `10-§6-9`, `10-§6-10`, `10-§6-11`, `10-§6-12`, `10-§6-13`, `10-§7-6`, `10-§16-1`, `10-§16-2`, `10-§16-3`, `10-§16-4`, `10-§16-5`, `10-§16-6`, `10-§16-7`, `10-§16-8`, `10-§20-1`, `10-§20-2`, `10-§20-3`, `10-§20-4`, `10-§20-5`, `10-§20-6`, `22-§4-2`, `17-§5-1`, `17-§5-2`, `17-§5-3`, `17-§5-4`, `17-§5-5`, `17-§5-6`, `17-§5-8`, `17-§22-4`, `17-§22-8`, `20-§15-3`, `BP-§8.3-1`, `BP-§10.2-W1`, `BP-§10.2-W3`, `BP-§10.2-E1`, `BP-§10.2-E4`.

**Of which acceptance rows carried into Section 15 (4):** `17-§22-4`, `17-§22-8`, `BP-§10.2-E1`, `BP-§10.2-E4`.

### 8.2 Human Language and Clarification (Contract 9; Contract 22 §8; Contract 20 §14; Contract 24 §8; Contract 10 §12, §17)

Sources: Contract 9 §3–§19 in full; Contract 22 §8 (shared foundation, no per-feature dictionaries); Contract 20 §14 (language preference respected, no restart on switch); Contract 24 §8 and §6 (low-confidence consequential intent clarifies); Contract 10 §12 and §17 (smallest useful question).

Mission design: one language layer serves text and voice (`9-§8-1`) and every consumer listed in Contract 9 §12; consumers owned by later missions reuse it (Section 11.1). Identity resolution stays a separate controlled step (`9-§10-*`). Fixed confidence constants and accuracy promises are excluded (`9-§15-1`, `9-§15-5`).

**FCTM rows realized here (103 `IN SCOPE`):** `24-§6-3`, `24-§8-1`, `24-§8-2`, `24-§8-3`, `24-§31-5`, `9-§3-1`, `9-§3-2`, `9-§3-3`, `9-§3-4`, `9-§3-5`, `9-§3-6`, `9-§3-7`, `9-§3-8`, `9-§3-9`, `9-§4-1`, `9-§4-2`, `9-§4-3`, `9-§4-4`, `9-§4-5`, `9-§5-1`, `9-§5-2`, `9-§6-1`, `9-§6-2`, `9-§7-1`, `9-§7-2`, `9-§7-3`, `9-§8-1`, `9-§8-2`, `9-§8-4`, `9-§9-1`, `9-§9-2`, `9-§9-3`, `9-§9-4`, `9-§9-5`, `9-§9-6`, `9-§9-7`, `9-§9-8`, `9-§10-1`, `9-§10-2`, `9-§10-3`, `9-§11-1`, `9-§11-2`, `9-§11-3`, `9-§11-4`, `9-§11-5`, `9-§11-6`, `9-§11-7`, `9-§12-4`, `9-§12-13`, `9-§13-1`, `9-§13-2`, `9-§13-3`, `9-§13-4`, `9-§13-5`, `9-§13-6`, `9-§13-7`, `9-§13-8`, `9-§13-11`, `9-§14-1`, `9-§14-2`, `9-§14-3`, `9-§14-4`, `9-§14-5`, `9-§14-6`, `9-§14-7`, `9-§14-8`, `9-§15-1`, `9-§15-2`, `9-§15-3`, `9-§15-4`, `9-§15-5`, `9-§16-1`, `9-§16-2`, `9-§16-3`, `9-§16-4`, `9-§17-1`, `9-§17-2`, `9-§17-3`, `9-§17-4`, `9-§17-8`, `9-§17-9`, `9-§17-10`, `10-§12-1`, `10-§12-2`, `10-§12-3`, `10-§17-1`, `10-§17-2`, `10-§17-3`, `10-§17-6`, `10-§17-7`, `22-§8-1`, `22-§8-2`, `22-§8-3`, `22-§8-4`, `22-§8-5`, `22-§8-6`, `22-§8-7`, `20-§14-1`, `20-§14-2`, `20-§14-3`, `20-§14-4`, `BP-§10.2-W2`, `BP-§10.2-E2`.

**Of which acceptance rows carried into Section 15 (9):** `24-§31-5`, `9-§17-1`, `9-§17-2`, `9-§17-3`, `9-§17-4`, `9-§17-8`, `9-§17-9`, `9-§17-10`, `BP-§10.2-E2`.

### 8.3 AI Orchestration, Provider Abstraction and Model Routing (Contract 24 §4–§9, §19, §26–§29; Contract 22 §7, §17, §24; Build Plan §6.4, §6.6, §8.4, §11)

Sources: Contract 24 §4 (provider role), §5 (shared flow), §6 (intent-first), §7 (modality convergence), §9 (minimum context; Business Memory not model history), §19 (model routing), §26 (cost), §27 (consistent assistant), §28 (backend obligations the EIS must define), §29 (provider abstraction); Contract 22 §7 and §24; Build Plan §6.4, §6.6, §8.4.

Mission design: one server-side gateway and orchestration path for every channel and modality (`24-§5-1`, `22-§7-10`). The kernel accepts a normalized Smart Business message so SB-P-1.20 can adapt WhatsApp into it without a second brain (`BP-§8.4-1`, `-3`). Model choice is routing configuration, not Product Truth (`24-§19-3`, `24-§29-1`). OpenAI provider account, key custody and data controls are `UNVERIFIED — ACCESS REQUIRED`; verifying and configuring data controls before any merchant data reaches the provider is an activation gate for the EIS (Section 12, `DAI`; Stage 2 DC-11).

**FCTM rows realized here (86 `IN SCOPE`):** `24-§4-1`, `24-§5-1`, `24-§5-3`, `24-§5-7`, `24-§5-8`, `24-§6-1`, `24-§6-2`, `24-§7-1`, `24-§7-5`, `24-§9-1`, `24-§9-2`, `24-§9-3`, `24-§9-4`, `24-§19-1`, `24-§19-2`, `24-§19-3`, `24-§19-4`, `24-§26-1`, `24-§26-2`, `24-§26-3`, `24-§26-4`, `24-§26-5`, `24-§26-6`, `24-§26-7`, `24-§26-8`, `24-§26-9`, `24-§26-10`, `24-§27-2`, `24-§27-6`, `24-§27-7`, `24-§27-8`, `24-§27-9`, `24-§27-10`, `24-§27-11`, `24-§28-1`, `24-§28-2`, `24-§28-3`, `24-§28-4`, `24-§28-5`, `24-§28-6`, `24-§28-7`, `24-§28-8`, `24-§28-9`, `24-§28-10`, `24-§28-11`, `24-§28-12`, `24-§29-1`, `24-§29-2`, `24-§29-3`, `24-§29-4`, `24-§29-5`, `24-§29-6`, `24-§31-1`, `24-§31-6`, `24-§31-14`, `24-§31-15`, `24-§31-16`, `22-§7-1`, `22-§7-2`, `22-§7-3`, `22-§7-4`, `22-§7-5`, `22-§7-6`, `22-§7-7`, `22-§7-8`, `22-§7-9`, `22-§7-10`, `22-§17`, `22-§24-1`, `22-§29-1`, `22-§29-2`, `BP-§6.4-1`, `BP-§6.4-2`, `BP-§6.4-3`, `BP-§6.4-4`, `BP-§6.4-5`, `BP-§6.4-6`, `BP-§6.4-7`, `BP-§6.4-8`, `BP-§6.4-9`, `BP-§6.4-10`, `BP-§6.6-1`, `BP-§8.4-1`, `BP-§8.4-3`, `BP-§10.2-W5`, `BP-§11-1`.

**Of which acceptance rows carried into Section 15 (7):** `24-§31-1`, `24-§31-6`, `24-§31-14`, `24-§31-15`, `24-§31-16`, `22-§29-1`, `22-§29-2`.

### 8.4 Permission-Context Propagation, Isolation and Denial (Contract 24 §10, §22, §25; Contract 10 §8, §15, §19; Contract 22 §23–§24; Contract 21 delegated)

Sources: Contract 24 §10 (permission outside the model; six enforcement dimensions; four named examples), §22 (business boundary), §25 (minimization); Contract 10 §8, §15, §19; Contract 22 §23 (conversation and AI surface of the privacy rules) and §24 (AI creates no authority); Contract 9 §13 and §19; Contract 7 §11 kernel slice; Build Plan §10.2 experience `-E3` and Scenario A Employee denial (`BP-§10.2-SA2`). The authority model itself is Contract 21 and SB-P-1.12, `DELEGATED` (Section 11.2).

Mission design: the verified principal, business, role, capability, entitlement, channel value `conversation` or `ai_tool` and object scope come from the SB-P-1.12 kernel (SB-P-1.12 EIS-KER-01, -02, -06) for every turn and every tool proposal; the model never supplies or chooses them. Protected data is withheld from model context unless authorized, so an Employee prompt cannot surface Owner profit (`24-§10-8`). Prompt and tool injection are resisted at the architecture boundary, because no model output can widen access (`24-§10-1`, `24-§11-10`, `22-§24-2`). Denials follow the SB-P-1.12 denial contract: no leak, useful next step, no accusation (Contract 21 §20, delegated). None of these behaviours is claimed as working: implementation is blocked on SB-P-1.12 (Section 12).

**FCTM rows realized here (64 `IN SCOPE`):** `24-§10-1`, `24-§10-2`, `24-§10-3`, `24-§10-4`, `24-§10-5`, `24-§10-6`, `24-§10-7`, `24-§10-8`, `24-§10-9`, `24-§10-10`, `24-§10-11`, `24-§22-1`, `24-§22-2`, `24-§22-3`, `24-§22-4`, `24-§22-5`, `24-§22-6`, `24-§22-7`, `24-§22-8`, `24-§25-1`, `24-§25-2`, `24-§25-3`, `24-§25-4`, `24-§25-5`, `24-§25-6`, `24-§25-7`, `24-§25-8`, `24-§25-9`, `24-§31-3`, `24-§31-4`, `9-§13-9`, `9-§13-10`, `9-§19`, `10-§8-1`, `10-§8-2`, `10-§8-3`, `10-§8-4`, `10-§15-1`, `10-§15-2`, `10-§15-3`, `10-§15-4`, `10-§15-5`, `10-§15-6`, `10-§15-7`, `10-§19-1`, `10-§19-2`, `10-§19-3`, `10-§19-4`, `10-§19-5`, `10-§19-6`, `10-§19-7`, `10-§23-5`, `10-§23-10`, `22-§23-2`, `22-§23-3`, `22-§23-5`, `22-§23-7`, `22-§24-2`, `22-§24-3`, `22-§29-3`, `7-§11-2`, `BP-§10.2-W7`, `BP-§10.2-E3`, `BP-§10.2-SA2`.

**Of which acceptance rows carried into Section 15 (7):** `24-§31-3`, `24-§31-4`, `10-§23-5`, `10-§23-10`, `22-§29-3`, `BP-§10.2-E3`, `BP-§10.2-SA2`.

### 8.5 Typed Tool Proposals, Confirmation and the Governed Create-Transaction Command (Contract 24 §11, §20, §21; Contract 10 §7, §13, §17; Build Plan §6.2; `FPDR-1`)

Sources: Contract 24 §11 (tool schemas, validation, least privilege, read/write separation, confirmation, idempotency, provenance, structured results; choosing a function is not authorization), §20 (structured-output validation), §21 (human authority, binding to the reviewed action and state, execution-time revalidation); Contract 10 §7, §13, §17; Build Plan §6.2 command path; `FPDR-1`.

Mission design: the model may only propose typed actions. A consequential action follows the Build Plan §6.2 path and the `FPDR-1` sequence: interpretation → smallest necessary clarification → preview → confirmation binding → execution-time permission revalidation → deterministic command → authoritative stored-state confirmation → audit/idempotency. Confirmation binding, revalidation and idempotency consume SB-P-1.12 EIS-CNF-01, -02 and -04; no temporary parallel binding is built. Under `FPDR-1`, this mission owns an additive governed create-transaction command for the transaction types available when SB-P-1.13 is implemented, extending the existing transaction and correction foundations (Contract 3 §22, delegated) and not pulling the mature four-state Ledger forward. Under `FPDR-5`, an existing `sale` with `payment_method = credit` is one of those available transaction types; it creates no customer-credit balance, owed state or repayment allocation. Ask CFO-class intents receive no write tools (`10-§9-3`).

**FCTM rows realized here (54 `IN SCOPE`):** `24-§11-1`, `24-§11-2`, `24-§11-3`, `24-§11-4`, `24-§11-5`, `24-§11-6`, `24-§11-7`, `24-§11-8`, `24-§11-9`, `24-§11-10`, `24-§13-2`, `24-§20-1`, `24-§20-2`, `24-§20-3`, `24-§20-4`, `24-§20-5`, `24-§20-6`, `24-§20-7`, `24-§20-8`, `24-§20-9`, `24-§20-10`, `24-§21-1`, `24-§21-2`, `24-§21-8`, `24-§21-9`, `24-§21-10`, `24-§31-7`, `24-§31-13`, `10-§7-2`, `10-§7-3`, `10-§7-4`, `10-§7-5`, `10-§9-3`, `10-§13-1`, `10-§13-2`, `10-§13-8`, `10-§13-9`, `10-§13-10`, `10-§13-11`, `10-§13-12`, `10-§17-8`, `10-§17-9`, `10-§23-1`, `10-§23-8`, `10-§23-9`, `22-§29-7`, `22-§29-8`, `17-§5-7`, `BP-§6.2-1`, `BP-§6.2-2`, `BP-§10.2-W6`, `BP-§10.2-W8`, `BP-§10.2-W9`, `BP-§10.2-SA1`.

**Of which acceptance rows carried into Section 15 (8):** `24-§31-7`, `24-§31-13`, `10-§23-1`, `10-§23-8`, `10-§23-9`, `22-§29-7`, `22-§29-8`, `BP-§10.2-SA1`.

### 8.6 Audit and Provenance (Contract 24 §24; Contract 22 §29 Scenario 12; Build Plan §10.2 work area 10)

Sources: Contract 24 §24 (nine provenance questions; prompt and model metadata retention by policy); Contract 22 §14 foundation (`DELEGATED` to SB-P-1.12, Section 11.2).

Mission design: every consequential conversational or voice action records its initiator, business and role context, channel and modality, evidence used, interpretation, clarification and confirmation, executing command, resulting record and retry or correction state, using the SB-P-1.12 authority-event and audit foundations.

**FCTM rows realized here (12 `IN SCOPE`):** `24-§24-1`, `24-§24-2`, `24-§24-3`, `24-§24-4`, `24-§24-5`, `24-§24-6`, `24-§24-7`, `24-§24-8`, `24-§24-9`, `24-§24-10`, `22-§29-12`, `BP-§10.2-W10`.

**Of which acceptance rows carried into Section 15 (1):** `22-§29-12`.

### 8.7 Basic Voice (Contract 12 Basic rows; Contract 24 §15; Contract 10 §11; Build Plan §5.4, §10.2; `FPDR-1` to `FPDR-4`)

Sources: Contract 12 §3, §4, §6–§9, §11, §14–§18, §20, §21 (Basic Voice rows); Contract 24 §7 and §15; Contract 10 §4, §5, §11; Build Plan §5.4 and §10.2 infrastructure condition.

Mission design: voice is a modality over the same language, intent, permission and confirmation path as text (`12-§4-9`, `12-§6-6`), not a separate assistant. Voice Plus is SB-P-1.19 (Section 11.1).

- **Activation gate.** No voice provider exists (Delta D-04). The Blueprint/EIS must identify environment activation, credentials, failure behaviour, rollback and verification before any provider is used (`BP-§5.4-1`, `BP-§10.2-I1`). Provider availability and Malayalam/Manglish quality are `UNVERIFIED — ACCESS REQUIRED`; a provider that cannot meet the approved language commitment becomes a Founder/product issue (Stage 2 DC-13). Voice-provider purchase or activation is not authorized.
- **`FPDR-2`.** Basic Voice infrastructure and the governed voice-action path are built and verified here for transaction capabilities available at that stage. The credit/repayment portions of `12-§4-1`, `12-§7-6` and `12-§21-1` stay `IN SCOPE` and dependency-blocked on the SB-P-1.14 four-state Ledger; they are not reassigned and no completion is claimed before the dependency is met.
- **`FPDR-5`.** A credit-payment-method sale may be recorded by voice when it can be represented truthfully by the existing transaction model. A statement that implies an owed balance or a repayment is clarified or stays dependency-blocked on SB-P-1.14; no mature credit state is fabricated (`12-§4-1`, `12-§7-5`, `12-§7-6`, `12-§21-1`, `9-§9-4`).
- **`FPDR-3`.** Before SB-P-1.14 governed durable media exists, raw audio is processed transiently and is not durable Smart Business media; transcript, structured result and required audit evidence may persist under policy; no unmanaged audio store is created (`12-§15-4`, `12-§16-8`).
- **`FPDR-4`.** Sensitive Owner-only content the user is authorized to see is not spoken when context shows spoken output is inappropriate or unsafe; that portion falls back to authenticated text or visual output. Listening-context uncertainty never grants or denies permission (`12-§15-2`, `12-§15-3`).

**FCTM rows realized here (110 `IN SCOPE`):** `24-§5-5`, `24-§7-2`, `24-§15-1`, `24-§15-2`, `24-§15-3`, `24-§15-4`, `24-§15-5`, `24-§15-6`, `24-§15-7`, `24-§15-8`, `24-§27-4`, `24-§31-2`, `10-§4-2`, `10-§5-2`, `10-§11-1`, `10-§11-2`, `10-§11-3`, `10-§11-5`, `10-§11-6`, `10-§11-7`, `10-§11-8`, `10-§23-2`, `12-§3-1`, `12-§4-1`, `12-§4-6`, `12-§4-7`, `12-§4-8`, `12-§4-9`, `12-§6-1`, `12-§6-2`, `12-§6-3`, `12-§6-4`, `12-§6-5`, `12-§6-6`, `12-§7-1`, `12-§7-2`, `12-§7-3`, `12-§7-4`, `12-§7-5`, `12-§7-6`, `12-§7-8`, `12-§7-9`, `12-§7-10`, `12-§8-1`, `12-§8-2`, `12-§8-3`, `12-§8-5`, `12-§9-1`, `12-§9-2`, `12-§9-3`, `12-§11-1`, `12-§11-2`, `12-§11-3`, `12-§11-4`, `12-§11-5`, `12-§11-7`, `12-§11-8`, `12-§11-9`, `12-§13-3`, `12-§14-1`, `12-§14-2`, `12-§14-3`, `12-§14-4`, `12-§15-1`, `12-§15-2`, `12-§15-3`, `12-§15-4`, `12-§15-5`, `12-§16-1`, `12-§16-2`, `12-§16-3`, `12-§16-4`, `12-§16-5`, `12-§16-6`, `12-§16-7`, `12-§16-8`, `12-§17-1`, `12-§17-2`, `12-§17-3`, `12-§17-4`, `12-§17-5`, `12-§17-6`, `12-§17-7`, `12-§17-8`, `12-§17-9`, `12-§17-10`, `12-§17-11`, `12-§17-12`, `12-§17-13`, `12-§17-14`, `12-§17-15`, `12-§18-1`, `12-§18-2`, `12-§18-3`, `12-§20-1`, `12-§20-2`, `12-§20-3`, `12-§20-4`, `12-§20-5`, `12-§20-6`, `12-§21-1`, `12-§21-2`, `12-§21-7`, `12-§21-8`, `12-§21-9`, `12-§21-10`, `12-§21-12`, `BP-§5.4-1`, `BP-§10.2-W4`, `BP-§10.2-I1`.

**Of which acceptance rows carried into Section 15 (9):** `24-§31-2`, `10-§23-2`, `12-§21-1`, `12-§21-2`, `12-§21-7`, `12-§21-8`, `12-§21-9`, `12-§21-10`, `12-§21-12`.

### 8.8 FAQ-Before-AI Support Foundation (Contract 8 limited opening; Contract 24 §17; Build Plan §12)

Sources: Contract 8 §3 ladder steps 1–5, §4 trusted FAQ store, §5, §6, §7, §11, §12 Workspace channel and shared store, §13, §15, §16, §17; Contract 24 §17; Build Plan §12.

Mission design: support is FAQ-first. When the FAQ alone is insufficient, AI-supported explanation may use trusted, versioned, approved support knowledge with recorded provenance, and never invents policy or an answer that knowledge does not support (Stage 2 DC-10 as corrected). It remains one support system that SB-P-1.19 completes with tickets, human escalation, purpose-limited access and the 100+ corpus (Build Plan §12; Section 11.1).

**FCTM rows realized here (59 `IN SCOPE`):** `24-§17-1`, `24-§17-2`, `24-§17-4`, `24-§17-5`, `9-§12-10`, `9-§17-7`, `8-§3-1`, `8-§3-2`, `8-§3-3`, `8-§3-4`, `8-§3-5`, `8-§3-8`, `8-§4-1`, `8-§5-1`, `8-§5-2`, `8-§5-3`, `8-§6-1`, `8-§6-2`, `8-§6-3`, `8-§6-4`, `8-§6-5`, `8-§7-1`, `8-§7-2`, `8-§7-3`, `8-§7-6`, `8-§7-7`, `8-§7-8`, `8-§7-9`, `8-§7-10`, `8-§7-11`, `8-§7-12`, `8-§11-1`, `8-§11-2`, `8-§11-4`, `8-§11-5`, `8-§12-1`, `8-§12-5`, `8-§13-1`, `8-§15-1`, `8-§15-2`, `8-§15-3`, `8-§15-4`, `8-§15-6`, `8-§15-7`, `8-§15-10`, `8-§15-11`, `8-§16-1`, `8-§16-2`, `8-§16-3`, `8-§16-4`, `8-§16-5`, `8-§16-9`, `8-§17-2`, `8-§17-3`, `8-§17-4`, `8-§17-6`, `BP-§10.2-W12`, `BP-§12-1`, `BP-§12-3`.

**Of which acceptance rows carried into Section 15 (7):** `9-§17-7`, `8-§16-1`, `8-§16-2`, `8-§16-3`, `8-§16-4`, `8-§16-5`, `8-§16-9`.

### 8.9 Attachment Handoff Boundary (Contract 10 §4, §10; Contract 10 §23 Scenario 3 Workspace slice; Build Plan §10.2 work area 11)

Sources: Contract 10 §4 (image, Excel, CSV, PDF and document inputs as intake only; a file is not trusted truth) and §10 (upload, intake status, unsafe files fail clearly); Build Plan §10.2 "attachment handoff into UDI path".

Mission design: the Workspace accepts and acknowledges files and hands them toward the UDI path. Interpretation, preview, correction and confirmation are SB-P-1.14 (`10-§23-3b` and Section 11.1). Before SB-P-1.14, no consequential update results from a file (Stage 2 DC-08, bounded by the approved mission split). The SB-P-1.11 catalog-import content checks and parser lease are reuse candidates, not commitments (Delta D-06).

**FCTM rows realized here (11 `IN SCOPE`):** `10-§4-3`, `10-§4-4`, `10-§4-5`, `10-§4-6`, `10-§4-7`, `10-§4-8`, `10-§10-2`, `10-§10-6`, `10-§10-8`, `10-§23-3a`, `BP-§10.2-W11`.

**Of which acceptance rows carried into Section 15 (1):** `10-§23-3a`.

### 8.10 Failure, Provider Outage and WhatsApp Independence (Contract 24 §23; Contract 22 §19; Contract 10 §14, §18; Build Plan §8.4, §10.2 Scenario B)

Sources: Contract 24 §23 (eleven failure conditions; seven failure rules); Contract 22 §19; Contract 10 §14 (Workspace usable during WhatsApp failure) and §18 (twelve error conditions); Build Plan §8.4 (Meta disconnect before SB-P-1.20).

Mission design: AI, voice or tool failure fails only the affected operation, never fails open, never reports false success, keeps the merchant's input and leaves structured pages available. A queued consequential action is not executed after recovery without fresh confirmation (Stage 2 DC-06, constrained by `24-§23-13` and `24-§23-18`). Scenario B is verified with Meta/WhatsApp unavailable and evidence that no Meta call was required.

**FCTM rows realized here (46 `IN SCOPE`):** `24-§23-1`, `24-§23-2`, `24-§23-3`, `24-§23-4`, `24-§23-5`, `24-§23-7`, `24-§23-8`, `24-§23-9`, `24-§23-10`, `24-§23-11`, `24-§23-12`, `24-§23-13`, `24-§23-14`, `24-§23-15`, `24-§23-16`, `24-§23-17`, `24-§23-18`, `24-§31-11`, `24-§31-12`, `10-§14-1`, `10-§18-1`, `10-§18-2`, `10-§18-3`, `10-§18-4`, `10-§18-5`, `10-§18-6`, `10-§18-7`, `10-§18-8`, `10-§18-9`, `10-§18-10`, `10-§18-12`, `10-§18-13`, `10-§23-7`, `22-§19-1`, `22-§19-2`, `22-§19-3`, `22-§19-4`, `22-§19-5`, `22-§19-6`, `22-§19-7`, `22-§29-10`, `22-§29-13`, `BP-§8.4-2`, `BP-§10.2-W13`, `BP-§10.2-E5`, `BP-§10.2-SB`.

**Of which acceptance rows carried into Section 15 (7):** `24-§31-11`, `24-§31-12`, `10-§23-7`, `22-§29-10`, `22-§29-13`, `BP-§10.2-E5`, `BP-§10.2-SB`.

### 8.11 Platform Quality and Dependency-Rule Disclosures (Contract 22 §21, §22, §27; Build Plan §13)

Sources: Contract 22 §21 (performance without weakening safeguards), §22 (test hooks, deterministic permission tests, integration failure tests, runtime and independent verification), §27 (mission disclosures; this Blueprint and the Stage 2 Truth Pack are partial compliance evidence); Build Plan §13 (Experience Verification Matrix).

**FCTM rows realized here (16 `IN SCOPE`):** `22-§21`, `22-§22-1`, `22-§22-2`, `22-§22-3`, `22-§22-4`, `22-§22-5`, `22-§22-6`, `22-§27-1`, `22-§27-2`, `22-§27-3`, `22-§27-4`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§29-14`, `BP-§13-1`.

**Of which acceptance rows carried into Section 15 (1):** `22-§29-14`.

### 8.12 Cross-Cutting Non-Goals (Contract 24 §4 and §30; Contract 10 §22; Contract 9 §18; Contract 22 §28)

Each row is a "must not appear" check on every SB-P-1.13 deliverable.

**FCTM rows realized here (38 `IN SCOPE`):** `24-§4-2`, `24-§4-3`, `24-§4-4`, `24-§4-5`, `24-§4-6`, `24-§4-7`, `24-§4-8`, `24-§30-1`, `24-§30-2`, `24-§30-3`, `24-§30-4`, `24-§30-5`, `24-§30-6`, `24-§30-7`, `24-§30-8`, `9-§18-1`, `9-§18-2`, `9-§18-3`, `9-§18-4`, `9-§18-5`, `9-§18-6`, `9-§18-7`, `10-§22-1`, `10-§22-2`, `10-§22-3`, `10-§22-4`, `10-§22-5`, `10-§22-6`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§28-7`, `22-§28-8`, `22-§28-9`, `22-§28-10`.

## 9. UI / UX Expectations

By reference: Contract 10 §20 (calm, familiar, sub-3-second target where reasonable, progress for long operations, no duplicate submission), Contract 10 §3, Contract 12 §3 and §8 (concise voice; dense data in text), Contract 9 §14 (tone), Contract 21 §20 (denial experience, delegated) and Build Plan §10.2 Founder-approved experience (`BP-§10.2-E1` to `-E5`). Structured pages remain available; conversation enriches rather than replaces them (`BP-§10.2-E4`). Exact navigation placement and component design are downstream design decisions (Contract 10 §26), subject to `17-§5-1` and `17-§5-2`.

## 10. Business Rules

### 10.1 Founder decisions (canonical wording preserved)

The following are the Founder-approved terms recorded in `founder/02-stage3-founder-product-decision-record.md`, quoted without change.

**FPDR-1 — Governed create-transaction command / Scenario A.**

- SB-P-1.13 owns an **additive governed create-transaction command** for transaction types that already exist when SB-P-1.13 is implemented;
- it extends rather than destructively replaces the existing transaction/correction foundations;
- the governed path must support the approved sequence: interpretation → smallest necessary clarification → preview → confirmation binding → execution-time permission revalidation → deterministic command → authoritative stored-state confirmation → audit/idempotency;
- Founder Runtime Scenario A is intended to be verified in SB-P-1.13 for transaction capabilities actually available at that stage;
- this decision does **not** pull the mature four-state Ledger into SB-P-1.13.

**FPDR-2 — Basic Voice credit/repayment sequencing.**

- SB-P-1.13 builds and verifies the Basic Voice infrastructure and governed voice-action path using transaction capabilities actually available at that stage;
- credit/repayment-specific persistence and final acceptance depend on SB-P-1.14 delivering the four-state Ledger;
- rows `12-§4-1`, `12-§7-6`, and `12-§21-1` remain `IN SCOPE` in SB-P-1.13 and remain dependency-blocked on SB-P-1.14 for their credit/repayment portion;
- those rows are not reassigned to SB-P-1.14;
- no false “complete” claim is permitted before the dependency is satisfied.

**FPDR-3 — Raw voice audio before governed durable media.**

- until SB-P-1.14 provides governed durable media/object storage, raw Basic Voice audio is processed transiently and is not retained as durable Smart Business media;
- the resulting transcript, structured interaction/result and required audit/provenance evidence may persist under the applicable privacy/account policy;
- this decision does not create an alternate unmanaged audio-storage path;
- SB-P-1.14 remains owner of governed durable media storage.

This decision does not decide the still-open long-term post-cancellation retention duration.

**FPDR-4 — Sensitive spoken-output fallback.**

- authorization remains determined by the permission system, not by AI judgment;
- when an authenticated user is authorized to see sensitive Owner-only information but Smart Business has sufficient context to determine that speaking the sensitive content aloud is inappropriate or unsafe for the listening context, the sensitive content must not be spoken;
- the sensitive portion falls back to the authenticated visual/text experience;
- lack of listening-context certainty must never be used to grant or deny underlying data permission;
- unauthorized roles remain denied entirely under the existing permission rules.

**FPDR-5 — Existing credit-payment-method sales in SB-P-1.13** (post-Stage-6, `founder/03-post-stage6-founder-product-decision-record.md`; draft until human merge).

Founder approval, quoted: "Approved — allow existing credit-payment-method sales in SB-P-1.13; mature credit/repayment remains SB-P-1.14."

- a normal existing `sale` with `payment_method = credit` is an available transaction capability under `FPDR-1`;
- SB-P-1.13 may record such a sale through text or Basic Voice when the merchant intent can be represented truthfully by the existing transaction model;
- this does not create or update a mature customer-credit balance, owed-state ledger, repayment allocation or four-state Ledger state;
- repayment remains blocked on SB-P-1.14;
- if the merchant statement implies balance truth or repayment semantics unavailable in the existing model, Smart Business clarifies or the request remains dependency-blocked, rather than fabricating mature credit state.

`FPDR-1` to `FPDR-4` above are unchanged.

FCTM rows carrying these decisions: `FPDR-1` on 17 rows, `FPDR-2` on 3, `FPDR-3` on 2, `FPDR-4` on 2, `FPDR-5` on 5 (Section 19, Founder decision column).

### 10.2 Standing rules by reference

| Rule | Source |
|---|---|
| The model never decides permission; choosing a tool is not authorization | Contract 24 §10, §11; Contract 21 §8 (delegated) |
| No consequential write from materially ambiguous input | Contract 9 §9, §17 Scenario 10; Contract 24 §6 |
| Confirmation binds to the exact reviewed action and state and is revalidated at execution | Contract 24 §21; Contract 21 §17–§18 (delegated) |
| Retries never duplicate consequential writes | Contract 24 §11, §23; Contract 22 §15 (delegated) |
| Model conversation is not Business Memory | Contract 24 §9, §30; Build Plan §16 |
| One kernel; channels are thin adapters | Build Plan §6.4, §6.6, §8.4 |
| No temporary parallel permission system | SB-P-1.12 EIS §19.5; SB-P-1.12 MC-70 §7 |
| Every non-goal row in Section 8.12 and every `NEG` row is a must-not check | Source 18 §3.2 item 3 |

## 11. Out of Scope

This section accounts for every FCTM row that is not `IN SCOPE`: 126 `ASSIGNED TO LATER MISSION`, 121 `DELEGATED`, 21 `OUT OF BUILD SCOPE`, 52 `NOT APPLICABLE` and 3 `UNRESOLVED FOUNDER DECISION` — 323 rows. Dispositions, receiving missions and commitments are copied from the canonical FCTM without change. No `BUILD NOW` row becomes `BUILD LATER`.

### 11.1 Assigned to later missions — still committed, not in this mission (126 rows)

Every row keeps its approved build commitment (`BUILD NOW`, or `ADD-ON + BUILD NOW` for Voice Plus) and commercial classification. Assignment is mission scheduling, not `BUILD LATER` (Build Plan §9 vocabulary). Each citation is the approved assignment source recorded in the FCTM.

#### `SB-P-1.14` (24 rows)

| Row ID | Source | Build commitment | Commercial | Assignment citation |
|---|---|---|---|---|
| `24-§5-6` | C24@0c1dcbb2 §5 | BUILD NOW | CORE-INT | A-BP103 (UDI) |
| `24-§7-3` | C24@0c1dcbb2 §7 | BUILD NOW | CORE-INT | A-BP103 (UDI) |
| `24-§7-4` | C24@0c1dcbb2 §7 | BUILD NOW | CORE-INT | A-BP103 (UDI; reuse of canonical parser/import) |
| `24-§14` | C24@0c1dcbb2 §14 | BUILD NOW | CORE-INT | A-BP103 (UDI) |
| `24-§18-1` | C24@0c1dcbb2 §18 | BUILD NOW | CORE-INT | A-BP103; A-BP104 (secondary SB-P-1.15) |
| `24-§21-7` | C24@0c1dcbb2 §21 | BUILD NOW | CORE-INT | A-BP103 (UDI preview-confirm-update) |
| `24-§23-6` | C24@0c1dcbb2 §23 | BUILD NOW | CORE-INT | A-BP103 (UDI) |
| `24-§27-5` | C24@0c1dcbb2 §27 | BUILD NOW | CORE-INT | A-BP103 (UDI) |
| `24-§31-8` | C24@0c1dcbb2 §31 | BUILD NOW | CORE-INT | A-BP103 (UDI) |
| `9-§12-1` | C9@649c55f3 §12 | BUILD NOW | CORE-FDN | A-BP103; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) |
| `10-§5-10` | C10@5c145ed7 §5 | BUILD NOW | CORE-CH | A-BP103 (Receipt Cabinet; governed document storage) |
| `10-§10-1` | C10@5c145ed7 §10 | BUILD NOW | CORE-CH | A-BP103 (UDI) |
| `10-§10-3` | C10@5c145ed7 §10 | BUILD NOW | CORE-CH | A-BP103 (UDI preview) |
| `10-§10-4` | C10@5c145ed7 §10 | BUILD NOW | CORE-CH | A-BP103 (UDI ambiguity handling) |
| `10-§10-5` | C10@5c145ed7 §10 | BUILD NOW | CORE-CH | A-BP103 (preview-confirm-update) |
| `10-§10-7` | C10@5c145ed7 §10 | BUILD NOW | CORE-CH | A-BP103 (Receipt Cabinet; governed document storage) |
| `10-§13-3` | C10@5c145ed7 §13 | BUILD NOW | CORE-CH | A-BP103 (UDI) |
| `10-§17-4` | C10@5c145ed7 §17 | BUILD NOW | CORE-CH | A-BP103 (ambiguity handling) |
| `10-§23-3b` | C10@5c145ed7 §23 | BUILD NOW | CORE-CH | A-BP103 Scenario A |
| `12-§4-5` | C12@6d48feff §4 | BUILD NOW | CORE-LM | A-BP103 (UDI) |
| `22-§4-1` | C22@61e1bb91 §4 | BUILD NOW | CORE-ARCH | I-12 (22-§4 ASSIGNED SB-P-1.14); A-BP103 |
| `22-§9` | C22@61e1bb91 §9 | BUILD NOW | CORE-ARCH | I-12; A-BP103 |
| `22-§10` | C22@61e1bb91 §10 | BUILD NOW | CORE-ARCH | I-12; A-BP103 |
| `22-§29-5` | C22@61e1bb91 §29 | BUILD NOW | CORE-ARCH | I-12; A-BP103 |

#### `SB-P-1.15` (33 rows)

| Row ID | Source | Build commitment | Commercial | Assignment citation |
|---|---|---|---|---|
| `24-§5-4` | C24@0c1dcbb2 §5 | BUILD NOW | CORE-INT | A-BP104 (Daily Intelligence, Reminder Engine) |
| `24-§12` | C24@0c1dcbb2 §12 | BUILD NOW | CORE-INT | A-BP104 (Ask CFO read-only intelligence); BP §11 (1.13 underpins Ask CFO) |
| `24-§13-1` | C24@0c1dcbb2 §13 | BUILD NOW | CORE-INT | A-BP104 (shared Reminder Engine) |
| `24-§16` | C24@0c1dcbb2 §16 | BUILD NOW | CORE-INT | A-BP104 (Daily Intelligence) |
| `24-§18-2` | C24@0c1dcbb2 §18 | BUILD NOW | CORE-INT | A-BP104 Scenario A (reminder continuation) |
| `24-§27-3` | C24@0c1dcbb2 §27 | BUILD NOW | CORE-INT | A-BP104 (Daily Intelligence, Ask CFO surfaces) |
| `24-§31-9` | C24@0c1dcbb2 §31 | BUILD NOW | CORE-INT | A-BP104 Scenario B (Ask CFO read-only boundary) |
| `24-§31-10` | C24@0c1dcbb2 §31 | BUILD NOW | CORE-INT | A-BP104 (shared Reminder Engine) |
| `9-§12-2` | C9@649c55f3 §12 | BUILD NOW | CORE-FDN | A-BP104; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) |
| `9-§12-3` | C9@649c55f3 §12 | BUILD NOW | CORE-FDN | A-BP104; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) |
| `9-§12-6` | C9@649c55f3 §12 | BUILD NOW | CORE-FDN | A-BP104; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) |
| `9-§17-5` | C9@649c55f3 §17 | BUILD NOW | CORE-FDN | A-BP104 Scenario A; C11 §15 |
| `9-§17-6` | C9@649c55f3 §17 | BUILD NOW | CORE-FDN | A-BP104 (Ask CFO) |
| `10-§5-5` | C10@5c145ed7 §5 | BUILD NOW | CORE-CH | A-BP104 (Ask CFO) |
| `10-§5-7` | C10@5c145ed7 §5 | BUILD NOW | CORE-CH | A-BP104 (Reminder Engine) |
| `10-§9-1` | C10@5c145ed7 §9 | BUILD NOW | CORE-CH | A-BP104 (Ask CFO); BP §11 |
| `10-§9-2` | C10@5c145ed7 §9 | BUILD NOW | CORE-CH | A-BP104 (Ask CFO) |
| `10-§11-4` | C10@5c145ed7 §11 | BUILD NOW | CORE-CH | A-BP104 (shared Reminder Engine) |
| `10-§13-4` | C10@5c145ed7 §13 | BUILD NOW | CORE-CH | A-BP104 |
| `10-§23-4` | C10@5c145ed7 §23 | BUILD NOW | CORE-CH | A-BP104 Scenario B |
| `12-§4-2` | C12@6d48feff §4 | BUILD NOW | CORE-LM | A-BP104 (Ask CFO) |
| `12-§4-3` | C12@6d48feff §4 | BUILD NOW | CORE-LM | A-BP104 (Reminder Engine) |
| `12-§11-6` | C12@6d48feff §11 | BUILD NOW | CORE-LM | A-BP104 (Ask CFO) |
| `12-§12-1` | C12@6d48feff §12 | BUILD NOW | CORE-LM | A-BP104 (Ask CFO) |
| `12-§12-3` | C12@6d48feff §12 | BUILD NOW | CORE-LM | A-BP104 Scenario B |
| `12-§13-1` | C12@6d48feff §13 | BUILD NOW | CORE-LM | A-BP104 (Reminder Engine) |
| `12-§13-2` | C12@6d48feff §13 | BUILD NOW | CORE-LM | A-BP104 (reminder continuation); Voice Plus slice SB-P-1.19 |
| `12-§21-3` | C12@6d48feff §21 | BUILD NOW | CORE-LM | A-BP104 (Ask CFO) |
| `12-§21-4` | C12@6d48feff §21 | BUILD NOW | CORE-LM | A-BP104 (Reminder Engine) |
| `22-§11` | C22@61e1bb91 §11 | BUILD NOW | CORE-ARCH | I-12; A-BP104 |
| `22-§12` | C22@61e1bb91 §12 | BUILD NOW | CORE-ARCH | I-12 (22-§12-1 to -9); A-FPDR1 |
| `22-§18` | C22@61e1bb91 §18 | BUILD NOW | CORE-ARCH | I-12; A-BP104 |
| `22-§29-4` | C22@61e1bb91 §29 | BUILD NOW | CORE-ARCH | I-12; A-BP104 |

#### `SB-P-1.16` (4 rows)

| Row ID | Source | Build commitment | Commercial | Assignment citation |
|---|---|---|---|---|
| `24-§21-4` | C24@0c1dcbb2 §21 | BUILD NOW | CORE-INT | A-BP105 (customer-credit maturity) |
| `24-§21-5` | C24@0c1dcbb2 §21 | BUILD NOW | CORE-INT | A-BP105 (bank/payment reconciliation) |
| `9-§12-11` | C9@649c55f3 §12 | BUILD NOW | CORE-FDN | A-BP105; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) |
| `10-§17-5` | C10@5c145ed7 §17 | BUILD NOW | CORE-CH | A-BP105 (bank/payment reconciliation) |

#### `SB-P-1.17` (7 rows)

| Row ID | Source | Build commitment | Commercial | Assignment citation |
|---|---|---|---|---|
| `24-§18-3` | C24@0c1dcbb2 §18 | BUILD NOW | CORE-INT | A-BP106 (stock/supplier/reorder) |
| `24-§21-3` | C24@0c1dcbb2 §21 | BUILD NOW | CORE-INT | A-BP106 |
| `9-§12-8` | C9@649c55f3 §12 | BUILD NOW | CORE-FDN | A-BP106; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) |
| `10-§13-6` | C10@5c145ed7 §13 | BUILD NOW | CORE-CH | A-BP106 |
| `12-§4-4` | C12@6d48feff §4 | BUILD NOW | CORE-LM | A-BP106 (stock/supplier); secondary SB-P-1.18 A-BP107 (orders) |
| `12-§7-7` | C12@6d48feff §7 | BUILD NOW | CORE-LM | A-BP106 (reorder); secondary SB-P-1.18 A-BP107 (orders) |
| `7-§11-1` | C7@65ad91b2 §11 | BUILD NOW | MGR/ADDON | I-12 (SB-P-1.17 primary); A-BP106 |

#### `SB-P-1.18` (7 rows)

| Row ID | Source | Build commitment | Commercial | Assignment citation |
|---|---|---|---|---|
| `24-§18-4` | C24@0c1dcbb2 §18 | BUILD NOW | CORE-INT | A-BP107 (Staff/HR) |
| `24-§21-6` | C24@0c1dcbb2 §21 | BUILD NOW | CORE-INT | A-BP107 (Staff/HR) |
| `9-§12-7` | C9@649c55f3 §12 | BUILD NOW | CORE-FDN | A-BP107; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) |
| `9-§12-9` | C9@649c55f3 §12 | BUILD NOW | CORE-FDN | A-BP107; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) |
| `9-§12-12` | C9@649c55f3 §12 | BUILD NOW | CORE-FDN | A-BP107 (Compliance Shield); SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) |
| `10-§13-5` | C10@5c145ed7 §13 | BUILD NOW | CORE-CH | A-BP107 (Smart Order & Delivery) |
| `10-§13-7` | C10@5c145ed7 §13 | BUILD NOW | CORE-CH | A-BP107 (Staff/HR) |

#### `SB-P-1.19` (35 rows)

| Row ID | Source | Build commitment | Commercial | Assignment citation |
|---|---|---|---|---|
| `24-§17-3` | C24@0c1dcbb2 §17 | BUILD NOW | CORE-INT | A-BP12; A-BP108 (FAQ-first to AI fallback to human escalation) |
| `9-§8-3` | C9@649c55f3 §8 | ADD-ON + BUILD NOW | ADDON-LM | A-BP108 (Voice Plus); GPCV row 12A |
| `9-§16-5` | C9@649c55f3 §16 | BUILD NOW | CORE-FDN | A-BP12; A-BP108 (human escalation) |
| `12-§5` | C12@6d48feff §5 | ADD-ON + BUILD NOW | ADDON-LM | A-BP108 (Voice Plus); BP §9 row 8 (12A); GPCV row 12A |
| `12-§8-4` | C12@6d48feff §8 | ADD-ON + BUILD NOW | ADDON-LM | A-BP108 (Voice Plus) |
| `12-§12-2` | C12@6d48feff §12 | ADD-ON + BUILD NOW | ADDON-LM | A-BP108 (Voice Plus) |
| `12-§21-5` | C12@6d48feff §21 | ADD-ON + BUILD NOW | ADDON-LM | A-BP108 (Voice Plus) |
| `12-§21-6` | C12@6d48feff §21 | ADD-ON + BUILD NOW | ADDON-LM | A-BP108 (Voice Plus) |
| `8-§3-6` | C8@97397780 §3 | BUILD NOW | CORE-SUP | A-BP12 (human escalation; purpose-limited access) |
| `8-§3-7` | C8@97397780 §3 | BUILD NOW | CORE-SUP | A-BP12 (human escalation; purpose-limited access) |
| `8-§4-2` | C8@97397780 §4 | BUILD NOW | CORE-SUP | A-BP12 (SB-P-1.19 completes broader support automation); Contract 8 §4 calls the count an implementation/content milestone |
| `8-§7-4` | C8@97397780 §7 | BUILD NOW | CORE-SUP | A-BP12 (context-preserving handoff); A-BP108 Scenario B |
| `8-§7-5` | C8@97397780 §7 | BUILD NOW | CORE-SUP | A-BP12 (context-preserving handoff); A-BP108 Scenario B |
| `8-§8` | C8@97397780 §8 | BUILD NOW | CORE-SUP | A-BP12 (human escalation) |
| `8-§9` | C8@97397780 §9 | BUILD NOW | CORE-SUP | A-BP12 |
| `8-§10` | C8@97397780 §10 | BUILD NOW | CORE-SUP | A-BP12 (purpose-limited access); C21 §14 (SB-P-1.12) |
| `8-§11-3` | C8@97397780 §11 | BUILD NOW | CORE-SUP | A-BP12; A-BP108 (lifecycle) |
| `8-§12-3` | C8@97397780 §12 | BUILD NOW | CORE-SUP | A-BP12 (support operating surfaces) |
| `8-§12-4` | C8@97397780 §12 | BUILD NOW | CORE-SUP | A-BP12 |
| `8-§12-6` | C8@97397780 §12 | BUILD NOW | CORE-SUP | A-BP12 (ticket and purpose-limited access) |
| `8-§13-2` | C8@97397780 §13 | BUILD NOW | CORE-SUP | A-BP12; A-BP108 (support stewardship) |
| `8-§14` | C8@97397780 §14 | BUILD NOW | CORE-SUP | A-BP12; C8 §19 completion gate human-resolution loop |
| `8-§15-5` | C8@97397780 §15 | BUILD NOW | CORE-SUP | A-BP12 |
| `8-§15-8` | C8@97397780 §15 | BUILD NOW | CORE-SUP | A-BP12 |
| `8-§15-9` | C8@97397780 §15 | BUILD NOW | CORE-SUP | A-BP12 |
| `8-§16-6` | C8@97397780 §16 | BUILD NOW | CORE-SUP | A-BP12; A-BP108 Scenario B |
| `8-§16-7` | C8@97397780 §16 | BUILD NOW | CORE-SUP | A-BP12; A-BP108 Scenario B |
| `8-§16-8` | C8@97397780 §16 | BUILD NOW | CORE-SUP | A-BP12; A-BP108 Scenario B |
| `8-§16-10` | C8@97397780 §16 | BUILD NOW | CORE-SUP | A-BP12; A-BP108 Scenario B |
| `8-§17-1` | C8@97397780 §17 | BUILD NOW | CORE-SUP | A-BP12 (support operating surfaces, purpose-limited access) |
| `8-§17-5` | C8@97397780 §17 | BUILD NOW | CORE-SUP | A-BP12 (human escalation) |
| `20-§13` | C20@56ed4d11 §13 | BUILD NOW | ACT | I-12 (SB-P-1.19/SB-P-1.13 joint label); A-BP108 (/start onboarding) |
| `20-§15-2` | C20@56ed4d11 §15 | BUILD NOW | ACT | I-12; A-BP108 (Business Identity continuity) |
| `20-§23-5` | C20@56ed4d11 §23 | BUILD NOW | ACT | I-12 (SB-P-1.19/SB-P-1.13 joint label); A-BP108 Scenario A |
| `BP-§12-2` | BP@9dfdd924 §12 | BUILD NOW | CORE-SUP | A-BP12 |

#### `SB-P-1.20` (16 rows)

| Row ID | Source | Build commitment | Commercial | Assignment citation |
|---|---|---|---|---|
| `24-§5-2` | C24@0c1dcbb2 §5 | BUILD NOW | CORE-INT | A-BP109 |
| `24-§27-1` | C24@0c1dcbb2 §27 | BUILD NOW | CORE-INT | A-BP109 |
| `9-§12-5` | C9@649c55f3 §12 | BUILD NOW | CORE-FDN | A-BP109; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) |
| `10-§7-1` | C10@5c145ed7 §7 | BUILD NOW | CORE-CH | A-BP109 (move between native app and WhatsApp without duplicate records) |
| `10-§14-2` | C10@5c145ed7 §14 | BUILD NOW | CORE-CH | A-BP109 Scenario B (Meta outage degradation) |
| `10-§14-3` | C10@5c145ed7 §14 | BUILD NOW | CORE-CH | A-BP109 Scenario B (Meta outage degradation) |
| `10-§14-4` | C10@5c145ed7 §14 | BUILD NOW | CORE-CH | A-BP109 Scenario B (Meta outage degradation) |
| `10-§14-5` | C10@5c145ed7 §14 | BUILD NOW | CORE-CH | A-BP109 Scenario B (Meta outage degradation) |
| `10-§14-6` | C10@5c145ed7 §14 | BUILD NOW | CORE-CH | A-BP109 Scenario B (Meta outage degradation) |
| `10-§14-7` | C10@5c145ed7 §14 | BUILD NOW | CORE-CH | A-BP109 Scenario B (Meta outage degradation) |
| `10-§18-11` | C10@5c145ed7 §18 | BUILD NOW | CORE-CH | A-BP109 Scenario A (cross-channel confirmation binding and revalidation) |
| `10-§23-6` | C10@5c145ed7 §23 | BUILD NOW | CORE-CH | A-BP109 Scenario A |
| `12-§10` | C12@6d48feff §10 | BUILD NOW | CORE-LM | A-BP109; BP §9 row 9 (channel verification of 12) |
| `12-§21-11` | C12@6d48feff §21 | BUILD NOW | CORE-LM | A-BP109; BP §9 row 9 (channel verification of 12) |
| `8-§12-2` | C8@97397780 §12 | BUILD NOW | CORE-SUP | A-BP109 |
| `20-§15-1` | C20@56ed4d11 §15 | BUILD NOW | ACT | I-12 (SB-P-1.13 Workspace / SB-P-1.20 adapter); A-BP109 |

### 11.2 Delegated — owned elsewhere, consumed here (121 rows)

`DELEGATED` rows are owned by another contract or by SB-P-1.12. SB-P-1.13 consumes their specification and does not treat their runtime behaviour as demonstrated (Section 12).

#### Owner `SB-P-1.12` (99 rows)

| Row ID | Source | Build commitment | Dependency | Delegation citation |
|---|---|---|---|---|
| `22-§5` | C22@61e1bb91 §5 | BUILD NOW | D12 | I-12 (22-§5-1 to 22-§5-9 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-1` | C22@61e1bb91 §6 | BUILD NOW | D12 | I-12 (22-§6-1 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-2` | C22@61e1bb91 §6 | BUILD NOW | D12 | I-12 (22-§6-2 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-3` | C22@61e1bb91 §6 | BUILD NOW | D12 | I-12 (22-§6-3 IN SCOPE SB-P-1.12); L-DEL12; SB-P-1.13 builds this surface and consumes EIS-KER-06 channel value |
| `22-§6-4` | C22@61e1bb91 §6 | BUILD NOW | D12 | I-12 (22-§6-4 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-5` | C22@61e1bb91 §6 | BUILD NOW | D12 | I-12 (22-§6-5 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-6` | C22@61e1bb91 §6 | BUILD NOW | D12 | I-12 (22-§6-6 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-7` | C22@61e1bb91 §6 | BUILD NOW | D12 | I-12 (22-§6-7 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-8` | C22@61e1bb91 §6 | BUILD NOW | D12 | I-12 (22-§6-8 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§6-9` | C22@61e1bb91 §6 | BUILD NOW | D12 | I-12 (22-§6-9 IN SCOPE SB-P-1.12); L-DEL12; SB-P-1.13 builds this surface and consumes EIS-KER-06 channel value |
| `22-§6-10` | C22@61e1bb91 §6 | BUILD NOW | D12 | I-12 (22-§6-10 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§13-1` | C22@61e1bb91 §13 | BUILD NOW | D12 | I-12 (22-§13-1 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 |
| `22-§13-2` | C22@61e1bb91 §13 | BUILD NOW | D12 | I-12 (22-§13-2 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 |
| `22-§13-3` | C22@61e1bb91 §13 | BUILD NOW | D12 | I-12 (22-§13-3 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 |
| `22-§13-4` | C22@61e1bb91 §13 | BUILD NOW | D12 | I-12 (22-§13-4 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 |
| `22-§13-5` | C22@61e1bb91 §13 | BUILD NOW | D12 | I-12 (22-§13-5 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 |
| `22-§14` | C22@61e1bb91 §14 | BUILD NOW | D12 | I-12 (22-§14-1 to -9 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§15` | C22@61e1bb91 §15 | BUILD NOW | D12 | I-12 (22-§15 IN SCOPE SB-P-1.12); EIS-CNF-04; L-DEL12 |
| `22-§20` | C22@61e1bb91 §20 | BUILD NOW | D12 | I-12 (22-§20-1 to -4 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§23-1` | C22@61e1bb91 §23 | BUILD NOW | D12 | I-12 (22-§23-1 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§23-4` | C22@61e1bb91 §23 | BUILD NOW | D12 | I-12 (22-§23-4 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§23-6` | C22@61e1bb91 §23 | BUILD NOW | D12 | I-12 (22-§23-6 IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§29-6` | C22@61e1bb91 §29 | BUILD NOW | D12 | I-12 (IN SCOPE SB-P-1.12); L-DEL12 |
| `22-§29-11` | C22@61e1bb91 §29 | BUILD NOW | D12 | I-12 (IN SCOPE SB-P-1.12); L-DEL12 |
| `21-§4-1` | C21@f4a05d5c §4 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.1; EIS-KER-03 |
| `21-§4-2` | C21@f4a05d5c §4 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.1; EIS-KER-03 |
| `21-§4-3` | C21@f4a05d5c §4 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.1; EIS-KER-03 |
| `21-§4-4` | C21@f4a05d5c §4 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.1; EIS-KER-03 |
| `21-§4-5` | C21@f4a05d5c §4 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.1; EIS-KER-03 |
| `21-§4-6` | C21@f4a05d5c §4 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.1; EIS-KER-03 |
| `21-§5-1` | C21@f4a05d5c §5 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 |
| `21-§5-2` | C21@f4a05d5c §5 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 |
| `21-§5-3` | C21@f4a05d5c §5 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 |
| `21-§5-4` | C21@f4a05d5c §5 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 |
| `21-§5-5` | C21@f4a05d5c §5 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 |
| `21-§5-6` | C21@f4a05d5c §5 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 |
| `21-§5-7` | C21@f4a05d5c §5 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 |
| `21-§5-8` | C21@f4a05d5c §5 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01; EIS-KER-06 |
| `21-§5-9` | C21@f4a05d5c §5 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 |
| `21-§5-10` | C21@f4a05d5c §5 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 |
| `21-§6-1` | C21@f4a05d5c §6 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.3 |
| `21-§6-2` | C21@f4a05d5c §6 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.3 |
| `21-§6-3` | C21@f4a05d5c §6 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.3 |
| `21-§6-4` | C21@f4a05d5c §6 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.3 |
| `21-§6-5` | C21@f4a05d5c §6 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.3 |
| `21-§6-6` | C21@f4a05d5c §6 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.3 |
| `21-§6-7` | C21@f4a05d5c §6 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.3 |
| `21-§7` | C21@f4a05d5c §7 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.4 |
| `21-§8-1` | C21@f4a05d5c §8 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-06; SB-P-1.12 FCTM row 21-§8 (single row there) |
| `21-§8-2` | C21@f4a05d5c §8 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-06; SB-P-1.12 FCTM row 21-§8 (single row there) |
| `21-§8-3` | C21@f4a05d5c §8 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-06; SB-P-1.12 FCTM row 21-§8 (single row there) |
| `21-§8-4` | C21@f4a05d5c §8 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-06; SB-P-1.12 FCTM row 21-§8 (single row there) |
| `21-§8-5` | C21@f4a05d5c §8 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-06; SB-P-1.12 FCTM row 21-§8 (single row there) |
| `21-§8-6` | C21@f4a05d5c §8 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-06; SB-P-1.12 FCTM row 21-§8 (single row there) |
| `21-§8-7` | C21@f4a05d5c §8 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-06; SB-P-1.12 FCTM row 21-§8 (single row there) |
| `21-§9-1` | C21@f4a05d5c §9 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-07 |
| `21-§9-2` | C21@f4a05d5c §9 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-07 |
| `21-§9-3` | C21@f4a05d5c §9 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-07 |
| `21-§9-4` | C21@f4a05d5c §9 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-07 |
| `21-§10` | C21@f4a05d5c §10 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.6 |
| `21-§11-1` | C21@f4a05d5c §11 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.7 |
| `21-§11-2` | C21@f4a05d5c §11 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.7; EIS-KER-08 |
| `21-§12` | C21@f4a05d5c §12 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.8 |
| `21-§13` | C21@f4a05d5c §13 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.9 |
| `21-§15-1` | C21@f4a05d5c §15 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.11; EIS-KER-02 |
| `21-§15-2` | C21@f4a05d5c §15 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.11; EIS-KER-02 |
| `21-§15-3` | C21@f4a05d5c §15 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.11; EIS-KER-02 |
| `21-§15-4` | C21@f4a05d5c §15 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.11; EIS-KER-02 |
| `21-§15-5` | C21@f4a05d5c §15 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.11; EIS-KER-02 |
| `21-§16-1` | C21@f4a05d5c §16 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.12; EIS-KER-05 |
| `21-§16-2` | C21@f4a05d5c §16 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.12 |
| `21-§17` | C21@f4a05d5c §17 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.13; EIS-KER-09; EIS-CNF-02 |
| `21-§18-1` | C21@f4a05d5c §18 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.14; EIS-CNF-01 |
| `21-§18-2` | C21@f4a05d5c §18 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.14; EIS-CNF-01 |
| `21-§18-3` | C21@f4a05d5c §18 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.14; EIS-CNF-01 |
| `21-§18-4` | C21@f4a05d5c §18 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.14; EIS-CNF-01 |
| `21-§18-5` | C21@f4a05d5c §18 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.14; EIS-CNF-01 |
| `21-§18-6` | C21@f4a05d5c §18 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.14; EIS-CNF-01 |
| `21-§19` | C21@f4a05d5c §19 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.15 |
| `21-§20-1` | C21@f4a05d5c §20 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.16 |
| `21-§20-2` | C21@f4a05d5c §20 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.16 |
| `21-§20-3` | C21@f4a05d5c §20 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.16 |
| `21-§20-4` | C21@f4a05d5c §20 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.16 |
| `21-§20-5` | C21@f4a05d5c §20 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.16 |
| `21-§21` | C21@f4a05d5c §21 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.17 |
| `21-§22` | C21@f4a05d5c §22 | BUILD NOW | D12 | L-DEL21; EIS-DEP-01; EIS §8.2 |
| `21-§23` | C21@f4a05d5c §23 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.18 |
| `21-§24-1` | C21@f4a05d5c §24 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows |
| `21-§24-2` | C21@f4a05d5c §24 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows |
| `21-§24-3` | C21@f4a05d5c §24 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows |
| `21-§24-4` | C21@f4a05d5c §24 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows |
| `21-§24-5` | C21@f4a05d5c §24 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows |
| `21-§24-6` | C21@f4a05d5c §24 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows |
| `21-§24-7` | C21@f4a05d5c §24 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows |
| `21-§24-8` | C21@f4a05d5c §24 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows |
| `21-§24-9` | C21@f4a05d5c §24 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows |
| `21-§24-10` | C21@f4a05d5c §24 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows |
| `21-§24-11` | C21@f4a05d5c §24 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows |
| `21-§24-12` | C21@f4a05d5c §24 | BUILD NOW | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows |

#### Owner `SB-P-1.13` (1 rows)

| Row ID | Source | Build commitment | Dependency | Delegation citation |
|---|---|---|---|---|
| `22-§25` | C22@61e1bb91 §25 | BUILD NOW | DAI | I-12 (22-§25 DELEGATED); delegate rows 24-§* |

#### Owner `SB-P-1.14` (10 rows)

| Row ID | Source | Build commitment | Dependency | Delegation citation |
|---|---|---|---|---|
| `3-§5` | C3@d8c26c07 §5 | BUILD NOW | D14 | A-BP103 (mature Ledger); touch: conversational text/voice transaction input (BP-§10.2-SA1; Delta D-02) |
| `3-§6` | C3@d8c26c07 §6 | BUILD NOW | D14 | A-BP103 (mature Ledger); touch: truthful stored-state confirmation (10-§23-1, BP-§10.2-SA1) |
| `3-§7` | C3@d8c26c07 §7 | BUILD NOW | D14 | A-BP103 (ambiguity handling); touch: conversational clarification (9-§9, 10-§17) |
| `3-§12` | C3@d8c26c07 §12 | BUILD NOW | D14 | A-BP103; touch: one transaction semantics across channels (10-§6-3) |
| `3-§16` | C3@d8c26c07 §16 | BUILD NOW | D14 | A-BP103; touch: kernel must-nots (24-§10, §22) |
| `3-§22` | C3@d8c26c07 §22 | BUILD NOW | D14 | A-BP103; touch: any governed transaction command added for Scenario A (Delta D-02) |
| `5-§3` | C5@80ac648e §3 | BUILD NOW | D14 | A-BP103 (UDI); touch: attachment handoff boundary (10-§4-3 to -8, 10-§23-3a) |
| `5-§8` | C5@80ac648e §8 | BUILD NOW | D14 | A-BP103 (UDI); touch: Workspace upload hands off into UDI (10-§10-2) |
| `25-§12` | C25@406ce089 §12 | BUILD NOW | D14 | A-BP103 (governed media/object storage); touch: Basic Voice raw-audio retention (12-§15-4, DC-04) |
| `25-§13` | C25@406ce089 §13 | BUILD NOW | D14 | A-BP103; touch: attachment/voice media from Workspace (10-§4-3 to -7) |

#### Owner `SB-P-1.15` (5 rows)

| Row ID | Source | Build commitment | Dependency | Delegation citation |
|---|---|---|---|---|
| `2-§7` | C2@53635557 §7 | BUILD NOW | D15 | A-BP104; touch: kernel tool registry must expose no write tools to Ask CFO-class intents (24-§11-5, 10-§9-3) |
| `2-§14` | C2@53635557 §14 | BUILD NOW | D15 | A-BP104; touch: Workspace hosts Ask CFO when built (10-§9-1) |
| `2-§15` | C2@53635557 §15 | BUILD NOW | D15 | A-BP104; touch: Basic Voice path reused by Ask CFO (12-§12-1) |
| `11-§5` | C11@e802745a §5 | BUILD NOW | D15 | A-BP104 (Reminder Engine); touch: reminder intent recognized and routed (24-§13-1) |
| `11-§15` | C11@e802745a §15 | BUILD NOW | D15 | A-BP104; touch: language layer reuse (9-§9-5, 9-§17-5) |

#### Owner `SB-P-1.19` (3 rows)

| Row ID | Source | Build commitment | Dependency | Delegation citation |
|---|---|---|---|---|
| `18-§5` | C18@6b96b10a §5 | BUILD NOW | D19 | A-BP108 (subscription lifecycle); EIS-KER-05 primitive is SB-P-1.12; touch: Basic Voice 'according to plan' and Voice Plus entitlement (10-§11-1) |
| `19-§7` | C19@94aa6f24 §7 | BUILD NOW | D19 | A-BP12; A-BP108; touch: FAQ foundation must hand off to the one support system (BP-§12-3) |
| `19-§11` | C19@94aa6f24 §11 | BUILD NOW | D19 | A-BP108 (Super Admin); touch: AI usage/cost telemetry produced here (24-§26-9, 22-§23-3) |

#### Owner `SB-P-1.20` (3 rows)

| Row ID | Source | Build commitment | Dependency | Delegation citation |
|---|---|---|---|---|
| `22-§26` | C22@61e1bb91 §26 | BUILD NOW | D20 | I-12 (22-§26 DELEGATED, SB-P-1.20); delegate register §J |
| `23-§9` | C23@2430e1c6 §9 | BUILD NOW | D20 | A-BP109; touch: kernel accepts normalized messages (BP-§8.4-3) |
| `23-§22` | C23@2430e1c6 §22 | BUILD NOW | D20 | A-BP109; touch: shared context/confirmation design (10-§6, 10-§7) |

### 11.3 Out of build scope — must not appear (21 rows)

| Row ID | Source | Commitment (verbatim) | Check |
|---|---|---|---|
| `BP-§8.4-4` | BP@9dfdd924 §8.4 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-1` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-2` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-3` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-4` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-5` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-6` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-7` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-8` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-9` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-10` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-11` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-12` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-13` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-14` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-15` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-16` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-17` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-18` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-19` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |
| `BP-§16-20` | BP@9dfdd924 §16 | REJECT | must not appear in any SB-P-1.13 deliverable |

### 11.4 Not applicable — not an obligation of this mission (52 rows)

| Row ID | Source | Reason |
|---|---|---|
| `24-§1` | C24@0c1dcbb2 §1 | L-NARR; realized by 24-§4-*, 24-§29-* |
| `24-§2` | C24@0c1dcbb2 §2 | L-NARR; realized by 24-§5-1, 24-§6-*, 24-§9-*, 24-§21-* |
| `24-§3` | C24@0c1dcbb2 §3 | L-NARR; realized by operative rows 24-§10, §21, §22, §25 |
| `24-§32` | C24@0c1dcbb2 §32 | L-DEP; delegate register in §J |
| `24-§33` | C24@0c1dcbb2 §33 | L-PROV |
| `24-§34` | C24@0c1dcbb2 §34 | L-GATE |
| `9-§1` | C9@649c55f3 §1 | L-NARR; realized by 9-§5 to 9-§7 and 9-§12 rows |
| `9-§2` | C9@649c55f3 §2 | L-NARR |
| `9-§20` | C9@649c55f3 §20 | L-GATE |
| `10-§1` | C10@5c145ed7 §1 | L-NARR; realized by 10-§4, §5, §14 rows |
| `10-§2` | C10@5c145ed7 §2 | L-NARR |
| `10-§3` | C10@5c145ed7 §3 | L-NARR; realized by 10-§6, §8, §13, §15, §17, §19 rows |
| `10-§21` | C10@5c145ed7 §21 | L-REUSE; carried by 10-§6 rows |
| `10-§24` | C10@5c145ed7 §24 | L-HIST |
| `10-§25` | C10@5c145ed7 §25 | L-PROV |
| `10-§26` | C10@5c145ed7 §26 | Contract 10 §26 text |
| `10-§27` | C10@5c145ed7 §27 | L-GATE |
| `12-§1` | C12@6d48feff §1 | L-NARR; realized by 12-§4 rows and 12-§20-1 |
| `12-§2` | C12@6d48feff §2 | L-NARR |
| `12-§3` | C12@6d48feff §3 | L-NARR; realized by 12-§6, §8, §14, §15 rows |
| `12-§19` | C12@6d48feff §19 | L-REUSE |
| `12-§22` | C12@6d48feff §22 | L-HIST |
| `12-§23` | C12@6d48feff §23 | L-PROV |
| `12-§25` | C12@6d48feff §25 | L-GATE |
| `8-§1` | C8@97397780 §1 | L-NARR; realized by 8-§3 to 8-§7 rows |
| `8-§2` | C8@97397780 §2 | L-NARR |
| `8-§18` | C8@97397780 §18 | L-REUSE |
| `8-§19` | C8@97397780 §19 | L-GATE; A-BP12 |
| `22-§1` | C22@61e1bb91 §1 | L-NARR |
| `22-§2` | C22@61e1bb91 §2 | L-NARR |
| `22-§3` | C22@61e1bb91 §3 | L-NARR |
| `22-§16` | C22@61e1bb91 §16 | SB-P-1.13 captures and uses no location; owners SB-P-1.12 (22-§16-2) and SB-P-1.18 (FPDR-2/FPDR-3) per I-12 |
| `22-§29-9` | C22@61e1bb91 §29 | SB-P-1.13 captures no location; I-12 (ASSIGNED SB-P-1.18) |
| `22-§30` | C22@61e1bb91 §30 | L-HIST |
| `22-§31` | C22@61e1bb91 §31 | L-PROV |
| `22-§32` | C22@61e1bb91 §32 | L-GATE |
| `22-§33` | C22@61e1bb91 §33 | Owned by SB-P-1.12 (22-§33-1 to -39, I-12) and SB-P-1.19 evidence boundary; conversation/AI does not touch identity deletion |
| `21-§1` | C21@f4a05d5c §1 | L-NARR |
| `21-§2` | C21@f4a05d5c §2 | L-NARR |
| `21-§3` | C21@f4a05d5c §3 | L-NARR |
| `21-§14` | C21@f4a05d5c §14 | Not touched by the FAQ-before-AI foundation; owned by SB-P-1.12 (Blueprint §8.10) and consumed by SB-P-1.19 (A-BP12) |
| `21-§25` | C21@f4a05d5c §25 | L-HIST |
| `21-§26` | C21@f4a05d5c §26 | L-PROV |
| `21-§27` | C21@f4a05d5c §27 | L-GATE |
| `BP-§10.2-X` | BP@9dfdd924 §10.2 | L-NARR |
| `BP-§15-1` | BP@9dfdd924 §15 | Does not concern SB-P-1.13 scope |
| `BP-§15-3` | BP@9dfdd924 §15 | Does not concern SB-P-1.13 scope |
| `BP-§15-4` | BP@9dfdd924 §15 | Does not concern SB-P-1.13 scope |
| `BP-§15-5` | BP@9dfdd924 §15 | Does not concern SB-P-1.13 scope |
| `BP-§15-7` | BP@9dfdd924 §15 | Does not concern SB-P-1.13 scope |
| `BP-§15-8` | BP@9dfdd924 §15 | Does not concern SB-P-1.13 scope |
| `BP-§15-9` | BP@9dfdd924 §15 | Does not concern SB-P-1.13 scope |

### 11.5 Unresolved Founder decisions — not on this mission's critical path (3 rows)

| Row ID | Source | Owning mission | Decision reference | Critical-path note |
|---|---|---|---|---|
| `12-§24` | C12@6d48feff §24 | SB-P-1.19 | BP §15-2 (open) | BP §15 item 2; GPCV §10 item 2; not on SB-P-1.13 critical path (GPCV §8: Voice Plus price does not block Basic Voice) |
| `BP-§15-2` | BP@9dfdd924 §15 | SB-P-1.19 | BP §15-2 (open) | Not on SB-P-1.13 critical path: Voice Plus is SB-P-1.19; GPCV §8 says it does not block Basic Voice |
| `BP-§15-6` | BP@9dfdd924 §15 | SB-P-1.19 | BP §15-6 (open) | Not on SB-P-1.13 critical path: 10-§16-2 and 12-§15-4 follow policy; no duration needed to build conversation retention controls (GPCV §8 narrow-blocker rule) |

## 12. Dependencies

### 12.1 Upstream — SB-P-1.12 authority kernel (`D12`)

| State | Value | Evidence |
|---|---|---|
| Specification | AVAILABLE | SB-P-1.12 Blueprint (`77d52096`) and EIS (`c444f750`) `APPROVED — LOCKED`; Stage 13 package locked |
| Implementation | NOT COMPLETE | Implementation Authorization `WITHHELD`; MC-70 suspension; no membership, role, kernel or binding schema in the repository (Delta D-05) |
| Evidence | NOT COMPLETE | No Stage 17 or Stage 19; EV-01 OPEN |

Consumption follows SB-P-1.12 EIS §19.5 (EIS-DEP-01): SB-P-1.13 may use a capability only after the providing workstreams are implemented and verified, touched table families have completed cut-over and isolation tests, and Mission Control accepts the dependency evidence. SB-P-1.13 must not create authority tables, resolve business from single ownership, treat AI or tool capability as authority, or build a temporary parallel permission system. The seventeen consumed capabilities (R-01 to R-17) are listed in the Stage 2 Truth Pack Part 5. 252 `IN SCOPE` rows carry `D12` (198 at Stage 4, plus 54 added by the B6-01 reconciliation under SB-P-1.13-MC-09); none is claimed as working until independently evidenced. Sequencing follows the Founder-directed documentation-acceleration lane (SB-P-1.12 MC-70 §1, §7).

**Business-scoped paths (B6-01).** Every business-scoped Conversation/AI path consumes SB-P-1.12 explicit active-business context and the applicable authority and enforcement evidence. This includes Owner-only flows and Founder Runtime Scenario B, not only Manager and Employee flows. SB-P-1.13 has no other permitted way to decide which business a request acts on: the current owner-only, single-ownership lookup may not be used (SB-P-1.12 EIS §19.5), and no temporary parallel path may be built. WhatsApp independence and SB-P-1.12-authority independence are different properties: these paths need no Meta/WhatsApp call, but they do need SB-P-1.12. The 54 rows added under B6-01, each with its business-scoped reason and consumed capability, are listed in `communication/missions/SB-P-1.13/claude-code/09-b6-reconciliation-report.md`.

### 12.2 Other dependencies of `IN SCOPE` rows

| Code | Dependency | State | Rows |
|---|---|---|---|
| `DAI` | Server-side AI provider gateway (OpenAI) and data-control verification | No integration in the repository; provider account, keys and data controls `UNVERIFIED — ACCESS REQUIRED` | 275 |
| `DV` | Basic Voice provider/environment activation gate (Build Plan §5.4, §10.2) | No provider; `UNVERIFIED — ACCESS REQUIRED`; activation not authorized | 122 |
| `DTX` | Governed create-transaction command | Owned by SB-P-1.13 under `FPDR-1`; not yet built | 17 |
| `D14` | SB-P-1.14 four-state Ledger, UDI, governed media | Not started; credit/repayment portions blocked (`FPDR-2`) | 33 |
| `D15` | SB-P-1.15 Ask CFO, Reminder Engine, Notification Foundation | Not started | 8 |
| `D16`, `D17`, `D18` | SB-P-1.16/1.17/1.18 domains reached by later intents | Not started | 2 / 3 / 3 |
| `D19` | SB-P-1.19 support completion and onboarding surface | Not started | 3 |
| `D20` | SB-P-1.20 second-channel proof | Not started | 17 |
| `DUF6` | Build Plan §15 item 6 retention duration | Open; not on the critical path | 2 |

Row counts are `IN SCOPE` rows carrying each code; a row may carry several codes.

### 12.3 Open policy dependency

The default retention period for active-account conversation history is not set by any approved source (Stage 2 DC-12). It is an open policy/legal-retention dependency, not on this mission's Stage 3 critical path, and does not block building the retention controls required by `10-§16-*`.

### 12.4 Downstream

SB-P-1.14 (attachment handoff into UDI; four-state Ledger completes `FPDR-2` rows), SB-P-1.15 (Ask CFO, reminders, notifications reuse the kernel and language layer), SB-P-1.19 (Voice Plus, mature support, onboarding reuse it), SB-P-1.20 (WhatsApp adapter and second-channel proof).

## 13. Risks & Mitigations

| Risk | Source | Mitigation in this Blueprint |
|---|---|---|
| SB-P-1.12 stays suspended, so permission-dependent and business-scoped rows, including Owner-only paths and Scenario B, cannot be built or proven | Delta D-05; B6-01 | Rows stay `IN SCOPE` and dependency-blocked; no parallel model; documentary work continues (Section 12.1) |
| Prompt or tool injection widens access | Contract 24 §10; Contract 21 §8 | Permission resolved outside the model; tool proposals carry no authority (Section 8.4) |
| Duplicate writes from retries or replayed voice | Contract 24 §11, §23; Contract 12 §17 | Shared idempotency pattern consumed from SB-P-1.12; governed command (Section 8.5) |
| AI provider outage or bad output corrupts state | Contract 24 §23; Contract 22 §29 Scenario 13 | Narrow failure, validation, no false success, no unconfirmed replay (Section 8.10) |
| AI provider data handling unverified | Delta D-03; Stage 2 DC-11 | Data-control verification gate before merchant data reaches the provider (Section 8.3) |
| No voice provider meets the Malayalam/Manglish commitment | Delta D-04; Stage 2 DC-13 | Activation gate; escalate to the Founder if the commitment cannot be met (Section 8.7) |
| Sensitive data spoken aloud | Contract 12 §15 | `FPDR-4` fallback (Section 8.7) |
| Raw audio retained without governed storage | Contract 25 §12 (delegated) | `FPDR-3` transient handling (Section 8.7) |
| GitHub Actions restriction limits CI evidence | Delta D-08 | Local gates recorded; run-level evidence when available |

## 14. Success Criteria

1. Every one of the 651 `IN SCOPE` rows is realized, demonstrated and independently verified, or recorded as dependency-blocked with its approved dependency (Source 18 §3.2 item 11).
2. Founder Runtime Scenarios A and B and the four experience anchors in Section 15 pass Founder Runtime Verification, within the limits `FPDR-1` and `FPDR-2` set.
3. No Section 8.12 non-goal and no Section 11.3 rejection appears.
4. No row in Section 11 is built here as hidden scope.
5. The Completion Report carries an Experience Verification Matrix seeded from Section 15 (Build Plan §13).

## 15. Acceptance Criteria

### 15.1 Founder Runtime Verification scenarios (Build Plan §10.2, by reference — not new scenarios)

| Scenario | FCTM rows | Acceptance qualifier |
|---|---|---|
| A — Natural-language governed action: authorized user describes a transaction; clarify only if required; show the proposed consequential action; execute through the governed command; confirm actual stored state | `BP-§10.2-SA1` | `FPDR-1`: executes through the SB-P-1.13 additive governed create-transaction command, verified for transaction capabilities available at that stage; under `FPDR-5` these include an existing sale with payment method credit, while mature credit and repayment remain SB-P-1.14. Dependency: `D12`, `DAI` |
| A — Employee requests for Owner-only profit are denied | `BP-§10.2-SA2` | Dependency-blocked on SB-P-1.12 implementation (`D12`); never claimed from specification alone |
| B — WhatsApp-independence: Meta/WhatsApp deliberately unavailable; Owner completes an approved native workflow; evidence proves no Meta/WhatsApp call was required | `BP-§10.2-SB` | WhatsApp-independent, not SB-P-1.12-authority-independent: no Meta/WhatsApp dependency, but the Owner's native workflow consumes SB-P-1.12 explicit active-business context and authority evidence (`D12`; SB-P-1.12 EIS §19.5; B6-01) |

### 15.2 Experience anchors (designated by Mission Control, SB-P-1.13-MC-02 §7 and MC-05 §5; Build Plan §13 rule 9)

| Anchor | Anchor FCTM rows |
|---|---|
| 1. Governed natural-language consequential action with clarification, preview, permission enforcement, deterministic execution and truthful confirmation | `BP-§10.2-SA1`, `10-§23-1`, `24-§31-5`, `24-§31-7`, `24-§21-9`, `24-§21-10` |
| 2. Employee denial of Owner-only financial intelligence | `BP-§10.2-SA2`, `10-§23-5`, `24-§31-4`, `24-§10-8`, `12-§21-8` |
| 3. Native workflow succeeds while WhatsApp/Meta is unavailable | `BP-§10.2-SB`, `BP-§8.4-2`, `10-§14-1`, `10-§23-7` |
| 4. Basic Voice uses the same authority and confirmation truth as text | `10-§23-2`, `24-§31-2`, `12-§6-6`, `9-§8-2`, `12-§21-8` |

No other Founder scenario is introduced.

### 15.3 Contract acceptance rows in scope

Every numbered acceptance scenario that is `IN SCOPE` for this mission is an acceptance criterion by its FCTM row. Scenarios owned by later missions are in Section 11.1.

| Source | Acceptance rows in scope | Count |
|---|---|---|
| C24 | `24-§31-1`, `24-§31-2`, `24-§31-3`, `24-§31-4`, `24-§31-5`, `24-§31-6`, `24-§31-7`, `24-§31-11`, `24-§31-12`, `24-§31-13`, `24-§31-14`, `24-§31-15`, `24-§31-16` | 13 |
| C9 | `9-§17-1`, `9-§17-2`, `9-§17-3`, `9-§17-4`, `9-§17-7`, `9-§17-8`, `9-§17-9`, `9-§17-10` | 8 |
| C10 | `10-§23-1`, `10-§23-2`, `10-§23-3a`, `10-§23-5`, `10-§23-7`, `10-§23-8`, `10-§23-9`, `10-§23-10` | 8 |
| C12 | `12-§21-1`, `12-§21-2`, `12-§21-7`, `12-§21-8`, `12-§21-9`, `12-§21-10`, `12-§21-12` | 7 |
| C8 | `8-§16-1`, `8-§16-2`, `8-§16-3`, `8-§16-4`, `8-§16-5`, `8-§16-9` | 6 |
| C22 | `22-§29-1`, `22-§29-2`, `22-§29-3`, `22-§29-7`, `22-§29-8`, `22-§29-10`, `22-§29-12`, `22-§29-13`, `22-§29-14` | 9 |
| C17 | `17-§22-4`, `17-§22-8` | 2 |
| **Total** | | **53** |

### 15.4 Founder-decision acceptance limits

- `FPDR-1`: Scenario A and the transaction rows are accepted for transaction types available at implementation; the four-state Ledger is not part of this acceptance.
- `FPDR-2`: `12-§4-1`, `12-§7-6`, `12-§21-1` may be reported only as `PARTIALLY DEMONSTRATED` or dependency-blocked for their credit/repayment portion until SB-P-1.14 delivers; no "complete" claim before then.
- `FPDR-3`: acceptance evidence must show no durable raw-audio store.
- `FPDR-4`: acceptance evidence must show sensitive authorized content falls back to text and that permission outcomes do not change with listening context.
- `FPDR-5`: acceptance may include an existing sale with payment method credit; it must show that no customer-credit balance, owed state or repayment allocation is created, and that owed-balance or repayment statements are clarified or remain dependency-blocked.

### 15.5 Experience Verification Matrix seed (Build Plan §13)

| UX anchor / human outcome | Actor | Runtime status | Evidence | Dependency / note |
|---|---|---|---|---|
| Scenario A governed transaction | Owner | Not yet run | — | `FPDR-1`; `D12`; `DAI` |
| Scenario A Employee profit denial | Employee | Not yet run | — | `D12` |
| Scenario B Meta unavailable | Owner | Not yet run | — | `D12` (B6-01): WhatsApp-independent, not SB-P-1.12-independent |
| Basic Voice same authority and confirmation as text | Owner, Manager, Employee | Not yet run | — | `DV`; `D12`; `FPDR-2`, `FPDR-4` |

## 16. Future Evolution

- WhatsApp as a thin adapter into this kernel and second-channel proof of the shared rows (SB-P-1.20).
- Ask CFO, reminders, Daily Intelligence and notifications reusing the kernel and language layer (SB-P-1.15).
- Credit/repayment voice and document interpretation once the four-state Ledger, UDI and governed media exist (SB-P-1.14; completes the `FPDR-2` portions).
- Voice Plus, mature support and onboarding (SB-P-1.19).
- Stage 7 independent specialist review: Security & Permissions Architecture; AI Behaviour / Orchestration Safety; Voice/Provider readiness (SB-P-1.13-MC-01 §2), to be appointed.

## 17. Product Philosophy Summary

Build Plan §10.2 exit principle: "I can simply tell Smart Business what I mean, in the language I naturally use, and it helps me safely without needing WhatsApp or forcing me to think like software."

## 18. Blueprint Change Log

| Version | Date | Author | Change | Status |
|---|---|---|---|---|
| 0.1 | 2026-10-06 | Claude Code (Stage 2–4 Definition Actor) | Initial Stage 4 draft: Metadata, Mission Snapshot, Sections 1–19, assembled by reference to the canonical 974-row FCTM (blob `f3a912290e10a8b4bb49998206e48c2b8980aea1`) and `FPDR-1` to `FPDR-4` | DRAFT — awaiting Mission Control Stage 5 review |
| 0.2 | 2026-10-06 | Claude Code (B6-01/B6-02 reconciliation, SB-P-1.13-MC-09) | B6-01: §12.1 business-scoped dependency statement; §13 risk; §15.1 and §15.5 Scenario B qualified as WhatsApp-independent but not SB-P-1.12-authority-independent; 54 Section 19 rows gain `D12`. B6-02: `FPDR-5` added to Metadata, §8.5, §8.7, §10.1, §15.1, §15.4 and 5 Section 19 rows. FCTM blob updated; no disposition, owner, commitment or classification changed | DRAFT — awaiting Mission Control review |
| 0.3 | 2026-10-06 | Claude Code (Stage 7 Engineering Review, SB-P-1.13-MC-11) | Appended Section 20 (Engineering Review, early delivery plan, 651-row feasibility and risk register) and Section 21 (Engineering Questions, Risks & Recommendations); updated four Metadata status fields. Sections 1–17 and 19 unchanged | DRAFT — awaiting specialist reviews and Mission Control review |

## 19. Governance History

| Event | Record | Canonical |
|---|---|---|
| Stage 1 initiation and Intake Pack | SB-P-1.13-MC-01; `mission-control/01`–`03` | PR #774, `e2df36bf` |
| Stage 2 authorization | SB-P-1.13-MC-02; `mission-control/04` | PR #776, `488b1634` |
| Stage 2 Mission Truth Pack (corrected under Mission Control C-1 to C-8) | `claude-code/01`–`06` | PR #777, `a8099775` |
| Stage 3 authorization | `mission-control/05` | PR #778, `53edac51` |
| Stage 3 Founder decisions `FPDR-1` to `FPDR-4`; FCTM reconciliation | `founder/02`; SB-P-1.13-MC-04 (`mission-control/06`) | PR #779, `ecae3312` |
| Stage 4 authorization | SB-P-1.13-MC-05 (`mission-control/07`) | PR #780, `f81219cc` |
| Stage 4 Blueprint Sections 1–19; Stage 5 Product Review (SB-P-1.13-MC-06) | this file; `mission-control/08` | PR #781, `0944e0f6` |
| Stage 6 authorization (SB-P-1.13-MC-07) | `mission-control/09` | PR #782, `b146cad8` |
| Stage 6 Builder Review; gate (SB-P-1.13-MC-08) | `claude-code/08`; `mission-control/10` | PR #783, `8d9fb3af` |
| B6-01/B6-02 reconciliation authorization (SB-P-1.13-MC-09) | `mission-control/11` | PR #784, `35314a92` |
| B6-01/B6-02 reconciliation; `FPDR-5` | this file v0.2; `founder/03`; `claude-code/09` | not canonical |

### FCTM Row-ID to Blueprint Section and Source Traceability

Complete accounting of all 974 canonical FCTM rows (blob `97ddc752dcbbdb6586110a782ef1e24405b6dd22`), in FCTM order. Each line gives the disposition and owning mission exactly as in the FCTM, the source reference (source code, blob prefix and section; full pointers and blobs in FCTM §0.4 and each row), the Blueprint location and the FCTM Founder-decision cell. `IN SCOPE` rows map to a Section 8 subsection, plus §15 for acceptance rows, §12 for dependency-coded rows, §10 for must-not rows and §10.1 for Founder-decision rows. All other rows map to Section 11.

Counts: 974 rows — 126 `ASSIGNED TO LATER MISSION`, 121 `DELEGATED`, 651 `IN SCOPE`, 52 `NOT APPLICABLE`, 21 `OUT OF BUILD SCOPE`, 3 `UNRESOLVED FOUNDER DECISION`.

#### FCTM Part A — Contract 24 (212 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `24-§1` | NOT APPLICABLE | SB-P-1.13 | C24@0c1dcbb2 §1 | §11 | — |
| `24-§2` | NOT APPLICABLE | SB-P-1.13 | C24@0c1dcbb2 §2 | §11 | — |
| `24-§3` | NOT APPLICABLE | SB-P-1.13 | C24@0c1dcbb2 §3 | §11 | — |
| `24-§4-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §4 | §8.3; §12 | — |
| `24-§4-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §4 | §8.12; §12; §10 | — |
| `24-§4-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §4 | §8.12; §12; §10 | — |
| `24-§4-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §4 | §8.12; §12; §10 | — |
| `24-§4-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §4 | §8.12; §12; §10 | — |
| `24-§4-6` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §4 | §8.12; §12; §10 | — |
| `24-§4-7` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §4 | §8.12; §12; §10 | — |
| `24-§4-8` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §4 | §8.12; §12; §10 | — |
| `24-§5-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §5 | §8.3; §12 | — |
| `24-§5-2` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C24@0c1dcbb2 §5 | §11 | — |
| `24-§5-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §5 | §8.3; §12 | — |
| `24-§5-4` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C24@0c1dcbb2 §5 | §11 | — |
| `24-§5-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §5 | §8.7; §12 | — |
| `24-§5-6` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C24@0c1dcbb2 §5 | §11 | — |
| `24-§5-7` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §5 | §8.3 | — |
| `24-§5-8` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §5 | §8.3; §10 | — |
| `24-§6-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §6 | §8.3; §12 | — |
| `24-§6-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §6 | §8.3; §12 | — |
| `24-§6-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §6 | §8.2; §12 | — |
| `24-§7-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §7 | §8.3; §12 | — |
| `24-§7-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §7 | §8.7; §12 | — |
| `24-§7-3` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C24@0c1dcbb2 §7 | §11 | — |
| `24-§7-4` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C24@0c1dcbb2 §7 | §11 | — |
| `24-§7-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §7 | §8.3; §12 | — |
| `24-§8-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §8 | §8.2; §12 | — |
| `24-§8-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §8 | §8.2; §12 | — |
| `24-§8-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §8 | §8.2; §12; §10 | — |
| `24-§9-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §9 | §8.3; §12 | — |
| `24-§9-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §9 | §8.3; §12 | — |
| `24-§9-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §9 | §8.3; §12 | — |
| `24-§9-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §9 | §8.3; §10 | — |
| `24-§10-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §10 | §8.4; §12 | — |
| `24-§10-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §10 | §8.4; §12 | — |
| `24-§10-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §10 | §8.4; §12 | — |
| `24-§10-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §10 | §8.4; §12 | — |
| `24-§10-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §10 | §8.4; §12 | — |
| `24-§10-6` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §10 | §8.4; §12 | — |
| `24-§10-7` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §10 | §8.4; §12 | — |
| `24-§10-8` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §10 | §8.4; §12; §10 | — |
| `24-§10-9` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §10 | §8.4; §12; §10 | — |
| `24-§10-10` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §10 | §8.4; §12; §10 | — |
| `24-§10-11` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §10 | §8.4; §12; §10 | — |
| `24-§11-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §11 | §8.5; §12 | — |
| `24-§11-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §11 | §8.5; §12 | — |
| `24-§11-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §11 | §8.5; §12 | — |
| `24-§11-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §11 | §8.5; §12 | — |
| `24-§11-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §11 | §8.5; §12 | — |
| `24-§11-6` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §11 | §8.5; §12 | — |
| `24-§11-7` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §11 | §8.5; §12 | — |
| `24-§11-8` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §11 | §8.5; §12 | — |
| `24-§11-9` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §11 | §8.5; §12 | — |
| `24-§11-10` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §11 | §8.5; §12; §10 | — |
| `24-§12` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C24@0c1dcbb2 §12 | §11 | — |
| `24-§13-1` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C24@0c1dcbb2 §13 | §11 | — |
| `24-§13-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §13 | §8.5; §10 | — |
| `24-§14` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C24@0c1dcbb2 §14 | §11 | — |
| `24-§15-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §15 | §8.7; §12 | — |
| `24-§15-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §15 | §8.7; §12 | — |
| `24-§15-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §15 | §8.7; §12 | — |
| `24-§15-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §15 | §8.7; §12 | — |
| `24-§15-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §15 | §8.7; §12 | — |
| `24-§15-6` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §15 | §8.7; §12 | — |
| `24-§15-7` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §15 | §8.7; §12 | — |
| `24-§15-8` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §15 | §8.7; §12; §10 | — |
| `24-§16` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C24@0c1dcbb2 §16 | §11 | — |
| `24-§17-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §17 | §8.8; §12 | — |
| `24-§17-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §17 | §8.8; §12 | — |
| `24-§17-3` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C24@0c1dcbb2 §17 | §11 | — |
| `24-§17-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §17 | §8.8; §12 | — |
| `24-§17-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §17 | §8.8; §12; §10 | — |
| `24-§18-1` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C24@0c1dcbb2 §18 | §11 | — |
| `24-§18-2` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C24@0c1dcbb2 §18 | §11 | — |
| `24-§18-3` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C24@0c1dcbb2 §18 | §11 | — |
| `24-§18-4` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C24@0c1dcbb2 §18 | §11 | — |
| `24-§19-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §19 | §8.3; §12 | — |
| `24-§19-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §19 | §8.3; §12 | — |
| `24-§19-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §19 | §8.3; §12; §10 | — |
| `24-§19-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §19 | §8.3; §12 | — |
| `24-§20-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §20 | §8.5; §12 | — |
| `24-§20-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §20 | §8.5; §12 | — |
| `24-§20-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §20 | §8.5; §12 | — |
| `24-§20-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §20 | §8.5; §12 | — |
| `24-§20-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §20 | §8.5; §12 | — |
| `24-§20-6` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §20 | §8.5; §12 | — |
| `24-§20-7` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §20 | §8.5; §12 | — |
| `24-§20-8` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §20 | §8.5; §12 | — |
| `24-§20-9` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §20 | §8.5; §12 | — |
| `24-§20-10` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §20 | §8.5; §12 | — |
| `24-§21-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §21 | §8.5; §12 | — |
| `24-§21-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §21 | §8.5; §12; §10.1 | FPDR-1 |
| `24-§21-3` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C24@0c1dcbb2 §21 | §11 | — |
| `24-§21-4` | ASSIGNED TO LATER MISSION | SB-P-1.16 | C24@0c1dcbb2 §21 | §11 | — |
| `24-§21-5` | ASSIGNED TO LATER MISSION | SB-P-1.16 | C24@0c1dcbb2 §21 | §11 | — |
| `24-§21-6` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C24@0c1dcbb2 §21 | §11 | — |
| `24-§21-7` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C24@0c1dcbb2 §21 | §11 | — |
| `24-§21-8` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §21 | §8.5; §12 | — |
| `24-§21-9` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §21 | §8.5; §12 | — |
| `24-§21-10` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §21 | §8.5; §12 | — |
| `24-§22-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §22 | §8.4; §12; §10 | — |
| `24-§22-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §22 | §8.4; §12 | — |
| `24-§22-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §22 | §8.4; §12 | — |
| `24-§22-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §22 | §8.4; §12 | — |
| `24-§22-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §22 | §8.4; §12 | — |
| `24-§22-6` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §22 | §8.4; §12 | — |
| `24-§22-7` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §22 | §8.4; §12 | — |
| `24-§22-8` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §22 | §8.4; §12 | — |
| `24-§23-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-6` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C24@0c1dcbb2 §23 | §11 | — |
| `24-§23-7` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-8` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-9` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-10` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-11` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-12` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-13` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-14` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-15` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-16` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-17` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§23-18` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §23 | §8.10; §12 | — |
| `24-§24-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §24 | §8.6; §12 | — |
| `24-§24-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §24 | §8.6; §12 | — |
| `24-§24-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §24 | §8.6; §12 | — |
| `24-§24-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §24 | §8.6; §12 | — |
| `24-§24-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §24 | §8.6; §12 | — |
| `24-§24-6` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §24 | §8.6; §12 | — |
| `24-§24-7` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §24 | §8.6; §12 | — |
| `24-§24-8` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §24 | §8.6; §12 | — |
| `24-§24-9` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §24 | §8.6; §12 | — |
| `24-§24-10` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §24 | §8.6; §12 | — |
| `24-§25-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §25 | §8.4; §12 | — |
| `24-§25-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §25 | §8.4; §12 | — |
| `24-§25-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §25 | §8.4; §12 | — |
| `24-§25-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §25 | §8.4; §12 | — |
| `24-§25-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §25 | §8.4; §12 | — |
| `24-§25-6` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §25 | §8.4; §12 | — |
| `24-§25-7` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §25 | §8.4; §12 | — |
| `24-§25-8` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §25 | §8.4; §12 | — |
| `24-§25-9` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §25 | §8.4 | — |
| `24-§26-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §26 | §8.3; §12 | — |
| `24-§26-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §26 | §8.3; §12 | — |
| `24-§26-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §26 | §8.3; §12 | — |
| `24-§26-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §26 | §8.3; §12 | — |
| `24-§26-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §26 | §8.3; §12 | — |
| `24-§26-6` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §26 | §8.3; §12 | — |
| `24-§26-7` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §26 | §8.3; §12 | — |
| `24-§26-8` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §26 | §8.3; §12 | — |
| `24-§26-9` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §26 | §8.3; §12 | — |
| `24-§26-10` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §26 | §8.3; §10 | — |
| `24-§27-1` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C24@0c1dcbb2 §27 | §11 | — |
| `24-§27-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §27 | §8.3; §12 | — |
| `24-§27-3` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C24@0c1dcbb2 §27 | §11 | — |
| `24-§27-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §27 | §8.7; §12 | — |
| `24-§27-5` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C24@0c1dcbb2 §27 | §11 | — |
| `24-§27-6` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §27 | §8.3; §12 | — |
| `24-§27-7` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §27 | §8.3; §12 | — |
| `24-§27-8` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §27 | §8.3; §12 | — |
| `24-§27-9` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §27 | §8.3; §12 | — |
| `24-§27-10` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §27 | §8.3; §12 | — |
| `24-§27-11` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §27 | §8.3; §12 | — |
| `24-§28-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §28 | §8.3; §12 | — |
| `24-§28-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §28 | §8.3; §12 | — |
| `24-§28-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §28 | §8.3; §12 | — |
| `24-§28-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §28 | §8.3; §12 | — |
| `24-§28-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §28 | §8.3; §12 | — |
| `24-§28-6` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §28 | §8.3; §12 | — |
| `24-§28-7` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §28 | §8.3; §12 | — |
| `24-§28-8` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §28 | §8.3; §12 | — |
| `24-§28-9` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §28 | §8.3; §12 | — |
| `24-§28-10` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §28 | §8.3; §12 | — |
| `24-§28-11` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §28 | §8.3; §12 | — |
| `24-§28-12` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §28 | §8.3; §12 | — |
| `24-§29-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §29 | §8.3; §12 | — |
| `24-§29-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §29 | §8.3; §12 | — |
| `24-§29-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §29 | §8.3; §12 | — |
| `24-§29-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §29 | §8.3; §12 | — |
| `24-§29-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §29 | §8.3; §12 | — |
| `24-§29-6` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §29 | §8.3; §12 | — |
| `24-§30-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §30 | §8.12; §10 | — |
| `24-§30-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §30 | §8.12; §10 | — |
| `24-§30-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §30 | §8.12; §10 | — |
| `24-§30-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §30 | §8.12; §10 | — |
| `24-§30-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §30 | §8.12; §10 | — |
| `24-§30-6` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §30 | §8.12; §10 | — |
| `24-§30-7` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §30 | §8.12; §10 | — |
| `24-§30-8` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §30 | §8.12; §10 | — |
| `24-§31-1` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §31 | §8.3; §15; §12 | — |
| `24-§31-2` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §31 | §8.7; §15; §12 | — |
| `24-§31-3` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §31 | §8.4; §15; §12 | — |
| `24-§31-4` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §31 | §8.4; §15; §12 | — |
| `24-§31-5` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §31 | §8.2; §15; §12 | — |
| `24-§31-6` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §31 | §8.3; §15; §12 | — |
| `24-§31-7` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §31 | §8.5; §15; §12 | — |
| `24-§31-8` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C24@0c1dcbb2 §31 | §11 | — |
| `24-§31-9` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C24@0c1dcbb2 §31 | §11 | — |
| `24-§31-10` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C24@0c1dcbb2 §31 | §11 | — |
| `24-§31-11` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §31 | §8.10; §15; §12 | — |
| `24-§31-12` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §31 | §8.10; §15; §12 | — |
| `24-§31-13` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §31 | §8.5; §15; §12; §10.1 | FPDR-1 |
| `24-§31-14` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §31 | §8.3; §15; §12 | — |
| `24-§31-15` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §31 | §8.3; §15; §12 | — |
| `24-§31-16` | IN SCOPE | SB-P-1.13 | C24@0c1dcbb2 §31 | §8.3; §15; §12 | — |
| `24-§32` | NOT APPLICABLE | SB-P-1.13 | C24@0c1dcbb2 §32 | §11 | — |
| `24-§33` | NOT APPLICABLE | SB-P-1.13 | C24@0c1dcbb2 §33 | §11 | — |
| `24-§34` | NOT APPLICABLE | SB-P-1.13 | C24@0c1dcbb2 §34 | §11 | — |

#### FCTM Part B — Contract 9 (106 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `9-§1` | NOT APPLICABLE | SB-P-1.13 | C9@649c55f3 §1 | §11 | — |
| `9-§2` | NOT APPLICABLE | SB-P-1.13 | C9@649c55f3 §2 | §11 | — |
| `9-§3-1` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §3 | §8.2; §12 | — |
| `9-§3-2` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §3 | §8.2; §12 | — |
| `9-§3-3` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §3 | §8.2; §12 | — |
| `9-§3-4` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §3 | §8.2; §12 | — |
| `9-§3-5` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §3 | §8.2; §12 | — |
| `9-§3-6` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §3 | §8.2; §12 | — |
| `9-§3-7` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §3 | §8.2; §12 | — |
| `9-§3-8` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §3 | §8.2; §12 | — |
| `9-§3-9` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §3 | §8.2; §12 | — |
| `9-§4-1` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §4 | §8.2; §12 | — |
| `9-§4-2` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §4 | §8.2 | — |
| `9-§4-3` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §4 | §8.2 | — |
| `9-§4-4` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §4 | §8.2 | — |
| `9-§4-5` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §4 | §8.2 | — |
| `9-§5-1` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §5 | §8.2; §12 | — |
| `9-§5-2` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §5 | §8.2; §12 | — |
| `9-§6-1` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §6 | §8.2; §12 | — |
| `9-§6-2` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §6 | §8.2; §12 | — |
| `9-§7-1` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §7 | §8.2; §12 | — |
| `9-§7-2` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §7 | §8.2; §12 | — |
| `9-§7-3` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §7 | §8.2; §12; §10 | — |
| `9-§8-1` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §8 | §8.2; §12 | — |
| `9-§8-2` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §8 | §8.2; §12 | — |
| `9-§8-3` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C9@649c55f3 §8 | §11 | — |
| `9-§8-4` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §8 | §8.2; §12 | — |
| `9-§9-1` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §9 | §8.2; §12 | — |
| `9-§9-2` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §9 | §8.2; §12 | — |
| `9-§9-3` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §9 | §8.2; §12 | — |
| `9-§9-4` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §9 | §8.2; §12; §10.1 | FPDR-5 |
| `9-§9-5` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §9 | §8.2; §12 | — |
| `9-§9-6` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §9 | §8.2; §12 | — |
| `9-§9-7` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §9 | §8.2; §12 | — |
| `9-§9-8` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §9 | §8.2; §12 | — |
| `9-§10-1` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §10 | §8.2; §12 | — |
| `9-§10-2` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §10 | §8.2; §12; §10 | — |
| `9-§10-3` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §10 | §8.2; §12 | — |
| `9-§11-1` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §11 | §8.2; §12 | — |
| `9-§11-2` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §11 | §8.2; §12 | — |
| `9-§11-3` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §11 | §8.2; §12 | — |
| `9-§11-4` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §11 | §8.2; §12 | — |
| `9-§11-5` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §11 | §8.2; §12 | — |
| `9-§11-6` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §11 | §8.2; §12 | — |
| `9-§11-7` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §11 | §8.2; §12 | — |
| `9-§12-1` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C9@649c55f3 §12 | §11 | — |
| `9-§12-2` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C9@649c55f3 §12 | §11 | — |
| `9-§12-3` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C9@649c55f3 §12 | §11 | — |
| `9-§12-4` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §12 | §8.2; §12 | — |
| `9-§12-5` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C9@649c55f3 §12 | §11 | — |
| `9-§12-6` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C9@649c55f3 §12 | §11 | — |
| `9-§12-7` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C9@649c55f3 §12 | §11 | — |
| `9-§12-8` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C9@649c55f3 §12 | §11 | — |
| `9-§12-9` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C9@649c55f3 §12 | §11 | — |
| `9-§12-10` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §12 | §8.8; §12 | — |
| `9-§12-11` | ASSIGNED TO LATER MISSION | SB-P-1.16 | C9@649c55f3 §12 | §11 | — |
| `9-§12-12` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C9@649c55f3 §12 | §11 | — |
| `9-§12-13` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §12 | §8.2; §10 | — |
| `9-§13-1` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §13 | §8.2; §12 | — |
| `9-§13-2` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §13 | §8.2; §12 | — |
| `9-§13-3` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §13 | §8.2; §12 | — |
| `9-§13-4` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §13 | §8.2; §12 | — |
| `9-§13-5` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §13 | §8.2; §12 | — |
| `9-§13-6` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §13 | §8.2; §12 | — |
| `9-§13-7` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §13 | §8.2; §12; §10 | — |
| `9-§13-8` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §13 | §8.2; §12; §10 | — |
| `9-§13-9` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §13 | §8.4; §12; §10 | — |
| `9-§13-10` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §13 | §8.4; §12; §10 | — |
| `9-§13-11` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §13 | §8.2; §12; §10 | — |
| `9-§14-1` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §14 | §8.2; §12 | — |
| `9-§14-2` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §14 | §8.2; §12 | — |
| `9-§14-3` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §14 | §8.2; §12 | — |
| `9-§14-4` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §14 | §8.2; §12 | — |
| `9-§14-5` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §14 | §8.2; §12 | — |
| `9-§14-6` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §14 | §8.2; §12 | — |
| `9-§14-7` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §14 | §8.2; §12 | — |
| `9-§14-8` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §14 | §8.2; §12 | — |
| `9-§15-1` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §15 | §8.2; §10 | — |
| `9-§15-2` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §15 | §8.2; §12 | — |
| `9-§15-3` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §15 | §8.2; §12 | — |
| `9-§15-4` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §15 | §8.2; §12 | — |
| `9-§15-5` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §15 | §8.2; §10 | — |
| `9-§16-1` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §16 | §8.2; §12 | — |
| `9-§16-2` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §16 | §8.2; §12 | — |
| `9-§16-3` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §16 | §8.2; §12 | — |
| `9-§16-4` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §16 | §8.2; §12 | — |
| `9-§16-5` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C9@649c55f3 §16 | §11 | — |
| `9-§17-1` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §17 | §8.2; §15; §12; §10.1 | FPDR-1 |
| `9-§17-2` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §17 | §8.2; §15; §12 | — |
| `9-§17-3` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §17 | §8.2; §15; §12 | — |
| `9-§17-4` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §17 | §8.2; §15; §12 | — |
| `9-§17-5` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C9@649c55f3 §17 | §11 | — |
| `9-§17-6` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C9@649c55f3 §17 | §11 | — |
| `9-§17-7` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §17 | §8.8; §15; §12 | — |
| `9-§17-8` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §17 | §8.2; §15; §12 | — |
| `9-§17-9` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §17 | §8.2; §15; §12 | — |
| `9-§17-10` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §17 | §8.2; §15; §12 | — |
| `9-§18-1` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §18 | §8.12; §10 | — |
| `9-§18-2` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §18 | §8.12; §10 | — |
| `9-§18-3` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §18 | §8.12; §10 | — |
| `9-§18-4` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §18 | §8.12; §10 | — |
| `9-§18-5` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §18 | §8.12; §10 | — |
| `9-§18-6` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §18 | §8.12; §10 | — |
| `9-§18-7` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §18 | §8.12; §10 | — |
| `9-§19` | IN SCOPE | SB-P-1.13 | C9@649c55f3 §19 | §8.4; §12; §10 | — |
| `9-§20` | NOT APPLICABLE | SB-P-1.13 | C9@649c55f3 §20 | §11 | — |

#### FCTM Part C — Contract 10 (158 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `10-§1` | NOT APPLICABLE | SB-P-1.13 | C10@5c145ed7 §1 | §11 | — |
| `10-§2` | NOT APPLICABLE | SB-P-1.13 | C10@5c145ed7 §2 | §11 | — |
| `10-§3` | NOT APPLICABLE | SB-P-1.13 | C10@5c145ed7 §3 | §11 | — |
| `10-§4-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §4 | §8.1; §12 | — |
| `10-§4-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §4 | §8.7; §12 | — |
| `10-§4-3` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §4 | §8.9; §12 | — |
| `10-§4-4` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §4 | §8.9; §12 | — |
| `10-§4-5` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §4 | §8.9; §12 | — |
| `10-§4-6` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §4 | §8.9; §12 | — |
| `10-§4-7` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §4 | §8.9; §12 | — |
| `10-§4-8` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §4 | §8.9; §12; §10 | — |
| `10-§5-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §5 | §8.1 | — |
| `10-§5-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §5 | §8.7; §12 | — |
| `10-§5-3` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §5 | §8.1 | — |
| `10-§5-4` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §5 | §8.1 | — |
| `10-§5-5` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C10@5c145ed7 §5 | §11 | — |
| `10-§5-6` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §5 | §8.1 | — |
| `10-§5-7` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C10@5c145ed7 §5 | §11 | — |
| `10-§5-8` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §5 | §8.1; §12 | — |
| `10-§5-9` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §5 | §8.1; §12 | — |
| `10-§5-10` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C10@5c145ed7 §5 | §11 | — |
| `10-§5-11` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §5 | §8.1; §12 | — |
| `10-§6-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §6 | §8.1; §12 | — |
| `10-§6-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §6 | §8.1; §12 | — |
| `10-§6-3` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §6 | §8.1; §12 | — |
| `10-§6-4` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §6 | §8.1; §12 | — |
| `10-§6-5` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §6 | §8.1; §12 | — |
| `10-§6-6` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §6 | §8.1; §12 | — |
| `10-§6-7` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §6 | §8.1; §12 | — |
| `10-§6-8` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §6 | §8.1; §12 | — |
| `10-§6-9` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §6 | §8.1; §12 | — |
| `10-§6-10` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §6 | §8.1; §12 | — |
| `10-§6-11` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §6 | §8.1; §12 | — |
| `10-§6-12` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §6 | §8.1; §12 | — |
| `10-§6-13` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §6 | §8.1; §10 | — |
| `10-§7-1` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C10@5c145ed7 §7 | §11 | — |
| `10-§7-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §7 | §8.5; §12 | — |
| `10-§7-3` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §7 | §8.5; §12 | — |
| `10-§7-4` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §7 | §8.5; §12 | — |
| `10-§7-5` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §7 | §8.5; §12 | — |
| `10-§7-6` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §7 | §8.1; §12 | — |
| `10-§8-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §8 | §8.4; §12 | — |
| `10-§8-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §8 | §8.4; §12 | — |
| `10-§8-3` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §8 | §8.4; §12 | — |
| `10-§8-4` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §8 | §8.4; §12; §10 | — |
| `10-§9-1` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C10@5c145ed7 §9 | §11 | — |
| `10-§9-2` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C10@5c145ed7 §9 | §11 | — |
| `10-§9-3` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §9 | §8.5; §12; §10 | — |
| `10-§10-1` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C10@5c145ed7 §10 | §11 | — |
| `10-§10-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §10 | §8.9; §12 | — |
| `10-§10-3` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C10@5c145ed7 §10 | §11 | — |
| `10-§10-4` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C10@5c145ed7 §10 | §11 | — |
| `10-§10-5` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C10@5c145ed7 §10 | §11 | — |
| `10-§10-6` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §10 | §8.9; §12 | — |
| `10-§10-7` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C10@5c145ed7 §10 | §11 | — |
| `10-§10-8` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §10 | §8.9 | — |
| `10-§11-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §11 | §8.7; §12 | — |
| `10-§11-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §11 | §8.7; §12; §10.1 | FPDR-1 |
| `10-§11-3` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §11 | §8.7; §12 | — |
| `10-§11-4` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C10@5c145ed7 §11 | §11 | — |
| `10-§11-5` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §11 | §8.7; §12 | — |
| `10-§11-6` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §11 | §8.7; §12 | — |
| `10-§11-7` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §11 | §8.7; §12 | — |
| `10-§11-8` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §11 | §8.7; §12; §10 | — |
| `10-§12-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §12 | §8.2; §12 | — |
| `10-§12-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §12 | §8.2; §12 | — |
| `10-§12-3` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §12 | §8.2; §12 | — |
| `10-§13-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §13 | §8.5; §12; §10.1 | FPDR-1 |
| `10-§13-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §13 | §8.5; §12; §10.1 | FPDR-1 |
| `10-§13-3` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C10@5c145ed7 §13 | §11 | — |
| `10-§13-4` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C10@5c145ed7 §13 | §11 | — |
| `10-§13-5` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C10@5c145ed7 §13 | §11 | — |
| `10-§13-6` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C10@5c145ed7 §13 | §11 | — |
| `10-§13-7` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C10@5c145ed7 §13 | §11 | — |
| `10-§13-8` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §13 | §8.5; §12 | — |
| `10-§13-9` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §13 | §8.5; §12 | — |
| `10-§13-10` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §13 | §8.5; §12 | — |
| `10-§13-11` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §13 | §8.5; §12 | — |
| `10-§13-12` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §13 | §8.5; §12; §10 | — |
| `10-§14-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §14 | §8.10; §12 | — |
| `10-§14-2` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C10@5c145ed7 §14 | §11 | — |
| `10-§14-3` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C10@5c145ed7 §14 | §11 | — |
| `10-§14-4` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C10@5c145ed7 §14 | §11 | — |
| `10-§14-5` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C10@5c145ed7 §14 | §11 | — |
| `10-§14-6` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C10@5c145ed7 §14 | §11 | — |
| `10-§14-7` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C10@5c145ed7 §14 | §11 | — |
| `10-§15-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §15 | §8.4; §12 | — |
| `10-§15-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §15 | §8.4; §12 | — |
| `10-§15-3` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §15 | §8.4; §12 | — |
| `10-§15-4` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §15 | §8.4; §12 | — |
| `10-§15-5` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §15 | §8.4; §12 | — |
| `10-§15-6` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §15 | §8.4; §12 | — |
| `10-§15-7` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §15 | §8.4; §12; §10 | — |
| `10-§16-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §16 | §8.1; §10 | — |
| `10-§16-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §16 | §8.1; §12 | — |
| `10-§16-3` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §16 | §8.1; §12 | — |
| `10-§16-4` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §16 | §8.1; §12 | — |
| `10-§16-5` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §16 | §8.1; §12 | — |
| `10-§16-6` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §16 | §8.1; §12 | — |
| `10-§16-7` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §16 | §8.1; §12 | — |
| `10-§16-8` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §16 | §8.1; §10 | — |
| `10-§17-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §17 | §8.2; §12 | — |
| `10-§17-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §17 | §8.2; §12 | — |
| `10-§17-3` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §17 | §8.2; §12 | — |
| `10-§17-4` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C10@5c145ed7 §17 | §11 | — |
| `10-§17-5` | ASSIGNED TO LATER MISSION | SB-P-1.16 | C10@5c145ed7 §17 | §11 | — |
| `10-§17-6` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §17 | §8.2; §12 | — |
| `10-§17-7` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §17 | §8.2; §12 | — |
| `10-§17-8` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §17 | §8.5; §12 | — |
| `10-§17-9` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §17 | §8.5; §12 | — |
| `10-§18-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §18 | §8.10; §12 | — |
| `10-§18-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §18 | §8.10 | — |
| `10-§18-3` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §18 | §8.10 | — |
| `10-§18-4` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §18 | §8.10 | — |
| `10-§18-5` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §18 | §8.10; §12 | — |
| `10-§18-6` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §18 | §8.10; §12 | — |
| `10-§18-7` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §18 | §8.10; §12 | — |
| `10-§18-8` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §18 | §8.10; §12 | — |
| `10-§18-9` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §18 | §8.10; §12 | — |
| `10-§18-10` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §18 | §8.10 | — |
| `10-§18-11` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C10@5c145ed7 §18 | §11 | — |
| `10-§18-12` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §18 | §8.10 | — |
| `10-§18-13` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §18 | §8.10 | — |
| `10-§19-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §19 | §8.4; §12; §10 | — |
| `10-§19-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §19 | §8.4; §12; §10 | — |
| `10-§19-3` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §19 | §8.4; §12; §10 | — |
| `10-§19-4` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §19 | §8.4; §12; §10 | — |
| `10-§19-5` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §19 | §8.4; §12; §10 | — |
| `10-§19-6` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §19 | §8.4; §12; §10 | — |
| `10-§19-7` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §19 | §8.4; §12; §10 | — |
| `10-§20-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §20 | §8.1; §12 | — |
| `10-§20-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §20 | §8.1 | — |
| `10-§20-3` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §20 | §8.1 | — |
| `10-§20-4` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §20 | §8.1 | — |
| `10-§20-5` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §20 | §8.1; §12; §10 | — |
| `10-§20-6` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §20 | §8.1 | — |
| `10-§21` | NOT APPLICABLE | SB-P-1.13 | C10@5c145ed7 §21 | §11 | — |
| `10-§22-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §22 | §8.12; §10 | — |
| `10-§22-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §22 | §8.12; §10 | — |
| `10-§22-3` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §22 | §8.12; §10 | — |
| `10-§22-4` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §22 | §8.12; §10 | — |
| `10-§22-5` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §22 | §8.12; §10 | — |
| `10-§22-6` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §22 | §8.12; §10 | — |
| `10-§23-1` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §23 | §8.5; §15; §12; §10.1 | FPDR-1 |
| `10-§23-2` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §23 | §8.7; §15; §12 | — |
| `10-§23-3a` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §23 | §8.9; §15; §12 | — |
| `10-§23-3b` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C10@5c145ed7 §23 | §11 | — |
| `10-§23-4` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C10@5c145ed7 §23 | §11 | — |
| `10-§23-5` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §23 | §8.4; §15; §12 | — |
| `10-§23-6` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C10@5c145ed7 §23 | §11 | — |
| `10-§23-7` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §23 | §8.10; §15; §12 | — |
| `10-§23-8` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §23 | §8.5; §15; §12 | — |
| `10-§23-9` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §23 | §8.5; §15; §12; §10.1 | FPDR-1 |
| `10-§23-10` | IN SCOPE | SB-P-1.13 | C10@5c145ed7 §23 | §8.4; §15; §12 | — |
| `10-§24` | NOT APPLICABLE | SB-P-1.13 | C10@5c145ed7 §24 | §11 | — |
| `10-§25` | NOT APPLICABLE | SB-P-1.13 | C10@5c145ed7 §25 | §11 | — |
| `10-§26` | NOT APPLICABLE | SB-P-1.13 | C10@5c145ed7 §26 | §11 | — |
| `10-§27` | NOT APPLICABLE | SB-P-1.13 | C10@5c145ed7 §27 | §11 | — |

#### FCTM Part D — Contract 12 (112 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `12-§1` | NOT APPLICABLE | SB-P-1.13 | C12@6d48feff §1 | §11 | — |
| `12-§2` | NOT APPLICABLE | SB-P-1.13 | C12@6d48feff §2 | §11 | — |
| `12-§3` | NOT APPLICABLE | SB-P-1.13 | C12@6d48feff §3 | §11 | — |
| `12-§3-1` | IN SCOPE | SB-P-1.13 | C12@6d48feff §3 | §8.7; §12 | — |
| `12-§4-1` | IN SCOPE | SB-P-1.13 | C12@6d48feff §4 | §8.7; §12; §10.1 | FPDR-1; FPDR-2; FPDR-5 |
| `12-§4-2` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C12@6d48feff §4 | §11 | — |
| `12-§4-3` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C12@6d48feff §4 | §11 | — |
| `12-§4-4` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C12@6d48feff §4 | §11 | — |
| `12-§4-5` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C12@6d48feff §4 | §11 | — |
| `12-§4-6` | IN SCOPE | SB-P-1.13 | C12@6d48feff §4 | §8.7; §12 | — |
| `12-§4-7` | IN SCOPE | SB-P-1.13 | C12@6d48feff §4 | §8.7; §12 | — |
| `12-§4-8` | IN SCOPE | SB-P-1.13 | C12@6d48feff §4 | §8.7; §12 | — |
| `12-§4-9` | IN SCOPE | SB-P-1.13 | C12@6d48feff §4 | §8.7; §12 | — |
| `12-§5` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C12@6d48feff §5 | §11 | — |
| `12-§6-1` | IN SCOPE | SB-P-1.13 | C12@6d48feff §6 | §8.7; §12 | — |
| `12-§6-2` | IN SCOPE | SB-P-1.13 | C12@6d48feff §6 | §8.7; §12 | — |
| `12-§6-3` | IN SCOPE | SB-P-1.13 | C12@6d48feff §6 | §8.7; §12 | — |
| `12-§6-4` | IN SCOPE | SB-P-1.13 | C12@6d48feff §6 | §8.7; §12 | — |
| `12-§6-5` | IN SCOPE | SB-P-1.13 | C12@6d48feff §6 | §8.7; §12 | — |
| `12-§6-6` | IN SCOPE | SB-P-1.13 | C12@6d48feff §6 | §8.7; §12 | — |
| `12-§7-1` | IN SCOPE | SB-P-1.13 | C12@6d48feff §7 | §8.7; §12 | — |
| `12-§7-2` | IN SCOPE | SB-P-1.13 | C12@6d48feff §7 | §8.7; §12 | — |
| `12-§7-3` | IN SCOPE | SB-P-1.13 | C12@6d48feff §7 | §8.7; §12 | — |
| `12-§7-4` | IN SCOPE | SB-P-1.13 | C12@6d48feff §7 | §8.7; §12 | — |
| `12-§7-5` | IN SCOPE | SB-P-1.13 | C12@6d48feff §7 | §8.7; §12; §10.1 | FPDR-5 |
| `12-§7-6` | IN SCOPE | SB-P-1.13 | C12@6d48feff §7 | §8.7; §12; §10.1 | FPDR-2; FPDR-5 |
| `12-§7-7` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C12@6d48feff §7 | §11 | — |
| `12-§7-8` | IN SCOPE | SB-P-1.13 | C12@6d48feff §7 | §8.7; §12 | — |
| `12-§7-9` | IN SCOPE | SB-P-1.13 | C12@6d48feff §7 | §8.7; §12 | — |
| `12-§7-10` | IN SCOPE | SB-P-1.13 | C12@6d48feff §7 | §8.7; §12; §10 | — |
| `12-§8-1` | IN SCOPE | SB-P-1.13 | C12@6d48feff §8 | §8.7; §12 | — |
| `12-§8-2` | IN SCOPE | SB-P-1.13 | C12@6d48feff §8 | §8.7; §12 | — |
| `12-§8-3` | IN SCOPE | SB-P-1.13 | C12@6d48feff §8 | §8.7; §12 | — |
| `12-§8-4` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C12@6d48feff §8 | §11 | — |
| `12-§8-5` | IN SCOPE | SB-P-1.13 | C12@6d48feff §8 | §8.7; §12 | — |
| `12-§9-1` | IN SCOPE | SB-P-1.13 | C12@6d48feff §9 | §8.7; §12 | — |
| `12-§9-2` | IN SCOPE | SB-P-1.13 | C12@6d48feff §9 | §8.7; §12 | — |
| `12-§9-3` | IN SCOPE | SB-P-1.13 | C12@6d48feff §9 | §8.7; §12 | — |
| `12-§10` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C12@6d48feff §10 | §11 | — |
| `12-§11-1` | IN SCOPE | SB-P-1.13 | C12@6d48feff §11 | §8.7; §12 | — |
| `12-§11-2` | IN SCOPE | SB-P-1.13 | C12@6d48feff §11 | §8.7; §12 | — |
| `12-§11-3` | IN SCOPE | SB-P-1.13 | C12@6d48feff §11 | §8.7; §12 | — |
| `12-§11-4` | IN SCOPE | SB-P-1.13 | C12@6d48feff §11 | §8.7; §12 | — |
| `12-§11-5` | IN SCOPE | SB-P-1.13 | C12@6d48feff §11 | §8.7; §12 | — |
| `12-§11-6` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C12@6d48feff §11 | §11 | — |
| `12-§11-7` | IN SCOPE | SB-P-1.13 | C12@6d48feff §11 | §8.7; §12 | — |
| `12-§11-8` | IN SCOPE | SB-P-1.13 | C12@6d48feff §11 | §8.7; §12 | — |
| `12-§11-9` | IN SCOPE | SB-P-1.13 | C12@6d48feff §11 | §8.7; §12 | — |
| `12-§12-1` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C12@6d48feff §12 | §11 | — |
| `12-§12-2` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C12@6d48feff §12 | §11 | — |
| `12-§12-3` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C12@6d48feff §12 | §11 | — |
| `12-§13-1` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C12@6d48feff §13 | §11 | — |
| `12-§13-2` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C12@6d48feff §13 | §11 | — |
| `12-§13-3` | IN SCOPE | SB-P-1.13 | C12@6d48feff §13 | §8.7; §12; §10 | — |
| `12-§14-1` | IN SCOPE | SB-P-1.13 | C12@6d48feff §14 | §8.7; §12 | — |
| `12-§14-2` | IN SCOPE | SB-P-1.13 | C12@6d48feff §14 | §8.7; §12 | — |
| `12-§14-3` | IN SCOPE | SB-P-1.13 | C12@6d48feff §14 | §8.7; §12 | — |
| `12-§14-4` | IN SCOPE | SB-P-1.13 | C12@6d48feff §14 | §8.7; §12; §10 | — |
| `12-§15-1` | IN SCOPE | SB-P-1.13 | C12@6d48feff §15 | §8.7; §12 | — |
| `12-§15-2` | IN SCOPE | SB-P-1.13 | C12@6d48feff §15 | §8.7; §12; §10.1 | FPDR-4 |
| `12-§15-3` | IN SCOPE | SB-P-1.13 | C12@6d48feff §15 | §8.7; §12; §10.1 | FPDR-4 |
| `12-§15-4` | IN SCOPE | SB-P-1.13 | C12@6d48feff §15 | §8.7; §12; §10.1 | FPDR-3 |
| `12-§15-5` | IN SCOPE | SB-P-1.13 | C12@6d48feff §15 | §8.7; §12; §10 | — |
| `12-§16-1` | IN SCOPE | SB-P-1.13 | C12@6d48feff §16 | §8.7; §12 | — |
| `12-§16-2` | IN SCOPE | SB-P-1.13 | C12@6d48feff §16 | §8.7; §12 | — |
| `12-§16-3` | IN SCOPE | SB-P-1.13 | C12@6d48feff §16 | §8.7; §12 | — |
| `12-§16-4` | IN SCOPE | SB-P-1.13 | C12@6d48feff §16 | §8.7; §12 | — |
| `12-§16-5` | IN SCOPE | SB-P-1.13 | C12@6d48feff §16 | §8.7; §12 | — |
| `12-§16-6` | IN SCOPE | SB-P-1.13 | C12@6d48feff §16 | §8.7; §12 | — |
| `12-§16-7` | IN SCOPE | SB-P-1.13 | C12@6d48feff §16 | §8.7; §12 | — |
| `12-§16-8` | IN SCOPE | SB-P-1.13 | C12@6d48feff §16 | §8.7; §12; §10; §10.1 | FPDR-3 |
| `12-§17-1` | IN SCOPE | SB-P-1.13 | C12@6d48feff §17 | §8.7; §12 | — |
| `12-§17-2` | IN SCOPE | SB-P-1.13 | C12@6d48feff §17 | §8.7; §12 | — |
| `12-§17-3` | IN SCOPE | SB-P-1.13 | C12@6d48feff §17 | §8.7; §12 | — |
| `12-§17-4` | IN SCOPE | SB-P-1.13 | C12@6d48feff §17 | §8.7; §12 | — |
| `12-§17-5` | IN SCOPE | SB-P-1.13 | C12@6d48feff §17 | §8.7; §12 | — |
| `12-§17-6` | IN SCOPE | SB-P-1.13 | C12@6d48feff §17 | §8.7; §12 | — |
| `12-§17-7` | IN SCOPE | SB-P-1.13 | C12@6d48feff §17 | §8.7; §12 | — |
| `12-§17-8` | IN SCOPE | SB-P-1.13 | C12@6d48feff §17 | §8.7; §12 | — |
| `12-§17-9` | IN SCOPE | SB-P-1.13 | C12@6d48feff §17 | §8.7; §12 | — |
| `12-§17-10` | IN SCOPE | SB-P-1.13 | C12@6d48feff §17 | §8.7; §12 | — |
| `12-§17-11` | IN SCOPE | SB-P-1.13 | C12@6d48feff §17 | §8.7; §12 | — |
| `12-§17-12` | IN SCOPE | SB-P-1.13 | C12@6d48feff §17 | §8.7; §12 | — |
| `12-§17-13` | IN SCOPE | SB-P-1.13 | C12@6d48feff §17 | §8.7; §12 | — |
| `12-§17-14` | IN SCOPE | SB-P-1.13 | C12@6d48feff §17 | §8.7; §12 | — |
| `12-§17-15` | IN SCOPE | SB-P-1.13 | C12@6d48feff §17 | §8.7; §12 | — |
| `12-§18-1` | IN SCOPE | SB-P-1.13 | C12@6d48feff §18 | §8.7; §12 | — |
| `12-§18-2` | IN SCOPE | SB-P-1.13 | C12@6d48feff §18 | §8.7; §12 | — |
| `12-§18-3` | IN SCOPE | SB-P-1.13 | C12@6d48feff §18 | §8.7; §12; §10 | — |
| `12-§19` | NOT APPLICABLE | SB-P-1.13 | C12@6d48feff §19 | §11 | — |
| `12-§20-1` | IN SCOPE | SB-P-1.13 | C12@6d48feff §20 | §8.7; §12; §10 | — |
| `12-§20-2` | IN SCOPE | SB-P-1.13 | C12@6d48feff §20 | §8.7; §12; §10 | — |
| `12-§20-3` | IN SCOPE | SB-P-1.13 | C12@6d48feff §20 | §8.7; §12; §10 | — |
| `12-§20-4` | IN SCOPE | SB-P-1.13 | C12@6d48feff §20 | §8.7; §12; §10 | — |
| `12-§20-5` | IN SCOPE | SB-P-1.13 | C12@6d48feff §20 | §8.7; §12; §10 | — |
| `12-§20-6` | IN SCOPE | SB-P-1.13 | C12@6d48feff §20 | §8.7; §12; §10 | — |
| `12-§21-1` | IN SCOPE | SB-P-1.13 | C12@6d48feff §21 | §8.7; §15; §12; §10.1 | FPDR-1; FPDR-2; FPDR-5 |
| `12-§21-2` | IN SCOPE | SB-P-1.13 | C12@6d48feff §21 | §8.7; §15; §12 | — |
| `12-§21-3` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C12@6d48feff §21 | §11 | — |
| `12-§21-4` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C12@6d48feff §21 | §11 | — |
| `12-§21-5` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C12@6d48feff §21 | §11 | — |
| `12-§21-6` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C12@6d48feff §21 | §11 | — |
| `12-§21-7` | IN SCOPE | SB-P-1.13 | C12@6d48feff §21 | §8.7; §15; §12 | — |
| `12-§21-8` | IN SCOPE | SB-P-1.13 | C12@6d48feff §21 | §8.7; §15; §12 | — |
| `12-§21-9` | IN SCOPE | SB-P-1.13 | C12@6d48feff §21 | §8.7; §15; §12; §10.1 | FPDR-1 |
| `12-§21-10` | IN SCOPE | SB-P-1.13 | C12@6d48feff §21 | §8.7; §15; §12 | — |
| `12-§21-11` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C12@6d48feff §21 | §11 | — |
| `12-§21-12` | IN SCOPE | SB-P-1.13 | C12@6d48feff §21 | §8.7; §15; §12 | — |
| `12-§22` | NOT APPLICABLE | SB-P-1.13 | C12@6d48feff §22 | §11 | — |
| `12-§23` | NOT APPLICABLE | SB-P-1.13 | C12@6d48feff §23 | §11 | — |
| `12-§24` | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | C12@6d48feff §24 | §11.5; §12 | BP §15-2 (open) |
| `12-§25` | NOT APPLICABLE | SB-P-1.13 | C12@6d48feff §25 | §11 | — |

#### FCTM Part E — Contract 8 (78 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `8-§1` | NOT APPLICABLE | SB-P-1.13 | C8@97397780 §1 | §11 | — |
| `8-§2` | NOT APPLICABLE | SB-P-1.13 | C8@97397780 §2 | §11 | — |
| `8-§3-1` | IN SCOPE | SB-P-1.13 | C8@97397780 §3 | §8.8 | — |
| `8-§3-2` | IN SCOPE | SB-P-1.13 | C8@97397780 §3 | §8.8 | — |
| `8-§3-3` | IN SCOPE | SB-P-1.13 | C8@97397780 §3 | §8.8 | — |
| `8-§3-4` | IN SCOPE | SB-P-1.13 | C8@97397780 §3 | §8.8 | — |
| `8-§3-5` | IN SCOPE | SB-P-1.13 | C8@97397780 §3 | §8.8; §12 | — |
| `8-§3-6` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §3 | §11 | — |
| `8-§3-7` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §3 | §11 | — |
| `8-§3-8` | IN SCOPE | SB-P-1.13 | C8@97397780 §3 | §8.8 | — |
| `8-§4-1` | IN SCOPE | SB-P-1.13 | C8@97397780 §4 | §8.8 | — |
| `8-§4-2` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §4 | §11 | — |
| `8-§5-1` | IN SCOPE | SB-P-1.13 | C8@97397780 §5 | §8.8; §12 | — |
| `8-§5-2` | IN SCOPE | SB-P-1.13 | C8@97397780 §5 | §8.8; §12 | — |
| `8-§5-3` | IN SCOPE | SB-P-1.13 | C8@97397780 §5 | §8.8; §12 | — |
| `8-§6-1` | IN SCOPE | SB-P-1.13 | C8@97397780 §6 | §8.8 | — |
| `8-§6-2` | IN SCOPE | SB-P-1.13 | C8@97397780 §6 | §8.8 | — |
| `8-§6-3` | IN SCOPE | SB-P-1.13 | C8@97397780 §6 | §8.8 | — |
| `8-§6-4` | IN SCOPE | SB-P-1.13 | C8@97397780 §6 | §8.8 | — |
| `8-§6-5` | IN SCOPE | SB-P-1.13 | C8@97397780 §6 | §8.8 | — |
| `8-§7-1` | IN SCOPE | SB-P-1.13 | C8@97397780 §7 | §8.8; §12 | — |
| `8-§7-2` | IN SCOPE | SB-P-1.13 | C8@97397780 §7 | §8.8; §12 | — |
| `8-§7-3` | IN SCOPE | SB-P-1.13 | C8@97397780 §7 | §8.8; §12 | — |
| `8-§7-4` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §7 | §11 | — |
| `8-§7-5` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §7 | §11 | — |
| `8-§7-6` | IN SCOPE | SB-P-1.13 | C8@97397780 §7 | §8.8; §12 | — |
| `8-§7-7` | IN SCOPE | SB-P-1.13 | C8@97397780 §7 | §8.8; §10 | — |
| `8-§7-8` | IN SCOPE | SB-P-1.13 | C8@97397780 §7 | §8.8; §10 | — |
| `8-§7-9` | IN SCOPE | SB-P-1.13 | C8@97397780 §7 | §8.8; §12; §10 | — |
| `8-§7-10` | IN SCOPE | SB-P-1.13 | C8@97397780 §7 | §8.8; §12; §10 | — |
| `8-§7-11` | IN SCOPE | SB-P-1.13 | C8@97397780 §7 | §8.8; §10 | — |
| `8-§7-12` | IN SCOPE | SB-P-1.13 | C8@97397780 §7 | §8.8; §10 | — |
| `8-§8` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §8 | §11 | — |
| `8-§9` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §9 | §11 | — |
| `8-§10` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §10 | §11 | — |
| `8-§11-1` | IN SCOPE | SB-P-1.13 | C8@97397780 §11 | §8.8 | — |
| `8-§11-2` | IN SCOPE | SB-P-1.13 | C8@97397780 §11 | §8.8 | — |
| `8-§11-3` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §11 | §11 | — |
| `8-§11-4` | IN SCOPE | SB-P-1.13 | C8@97397780 §11 | §8.8 | — |
| `8-§11-5` | IN SCOPE | SB-P-1.13 | C8@97397780 §11 | §8.8 | — |
| `8-§12-1` | IN SCOPE | SB-P-1.13 | C8@97397780 §12 | §8.8 | — |
| `8-§12-2` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C8@97397780 §12 | §11 | — |
| `8-§12-3` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §12 | §11 | — |
| `8-§12-4` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §12 | §11 | — |
| `8-§12-5` | IN SCOPE | SB-P-1.13 | C8@97397780 §12 | §8.8 | — |
| `8-§12-6` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §12 | §11 | — |
| `8-§13-1` | IN SCOPE | SB-P-1.13 | C8@97397780 §13 | §8.8; §10 | — |
| `8-§13-2` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §13 | §11 | — |
| `8-§14` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §14 | §11 | — |
| `8-§15-1` | IN SCOPE | SB-P-1.13 | C8@97397780 §15 | §8.8 | — |
| `8-§15-2` | IN SCOPE | SB-P-1.13 | C8@97397780 §15 | §8.8 | — |
| `8-§15-3` | IN SCOPE | SB-P-1.13 | C8@97397780 §15 | §8.8 | — |
| `8-§15-4` | IN SCOPE | SB-P-1.13 | C8@97397780 §15 | §8.8; §12 | — |
| `8-§15-5` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §15 | §11 | — |
| `8-§15-6` | IN SCOPE | SB-P-1.13 | C8@97397780 §15 | §8.8 | — |
| `8-§15-7` | IN SCOPE | SB-P-1.13 | C8@97397780 §15 | §8.8 | — |
| `8-§15-8` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §15 | §11 | — |
| `8-§15-9` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §15 | §11 | — |
| `8-§15-10` | IN SCOPE | SB-P-1.13 | C8@97397780 §15 | §8.8 | — |
| `8-§15-11` | IN SCOPE | SB-P-1.13 | C8@97397780 §15 | §8.8; §12 | — |
| `8-§16-1` | IN SCOPE | SB-P-1.13 | C8@97397780 §16 | §8.8; §15 | — |
| `8-§16-2` | IN SCOPE | SB-P-1.13 | C8@97397780 §16 | §8.8; §15; §12 | — |
| `8-§16-3` | IN SCOPE | SB-P-1.13 | C8@97397780 §16 | §8.8; §15; §12 | — |
| `8-§16-4` | IN SCOPE | SB-P-1.13 | C8@97397780 §16 | §8.8; §15 | — |
| `8-§16-5` | IN SCOPE | SB-P-1.13 | C8@97397780 §16 | §8.8; §15; §12 | — |
| `8-§16-6` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §16 | §11 | — |
| `8-§16-7` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §16 | §11 | — |
| `8-§16-8` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §16 | §11 | — |
| `8-§16-9` | IN SCOPE | SB-P-1.13 | C8@97397780 §16 | §8.8; §15 | — |
| `8-§16-10` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §16 | §11 | — |
| `8-§17-1` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §17 | §11 | — |
| `8-§17-2` | IN SCOPE | SB-P-1.13 | C8@97397780 §17 | §8.8; §10 | — |
| `8-§17-3` | IN SCOPE | SB-P-1.13 | C8@97397780 §17 | §8.8; §10 | — |
| `8-§17-4` | IN SCOPE | SB-P-1.13 | C8@97397780 §17 | §8.8; §10 | — |
| `8-§17-5` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C8@97397780 §17 | §11 | — |
| `8-§17-6` | IN SCOPE | SB-P-1.13 | C8@97397780 §17 | §8.8; §10 | — |
| `8-§18` | NOT APPLICABLE | SB-P-1.13 | C8@97397780 §18 | §11 | — |
| `8-§19` | NOT APPLICABLE | SB-P-1.13 | C8@97397780 §19 | §11 | — |

#### FCTM Part F — Contract 22 (109 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `22-§1` | NOT APPLICABLE | SB-P-1.13 | C22@61e1bb91 §1 | §11 | — |
| `22-§2` | NOT APPLICABLE | SB-P-1.13 | C22@61e1bb91 §2 | §11 | — |
| `22-§3` | NOT APPLICABLE | SB-P-1.13 | C22@61e1bb91 §3 | §11 | — |
| `22-§4-1` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C22@61e1bb91 §4 | §11 | — |
| `22-§4-2` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §4 | §8.1; §10 | — |
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
| `22-§7-1` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §7 | §8.3; §12 | — |
| `22-§7-2` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §7 | §8.3; §12 | — |
| `22-§7-3` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §7 | §8.3; §12 | — |
| `22-§7-4` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §7 | §8.3; §12 | — |
| `22-§7-5` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §7 | §8.3; §12 | — |
| `22-§7-6` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §7 | §8.3; §12 | — |
| `22-§7-7` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §7 | §8.3; §12 | — |
| `22-§7-8` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §7 | §8.3; §12 | — |
| `22-§7-9` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §7 | §8.3; §10 | — |
| `22-§7-10` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §7 | §8.3; §12 | — |
| `22-§8-1` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §8 | §8.2; §12 | — |
| `22-§8-2` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §8 | §8.2; §10 | — |
| `22-§8-3` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §8 | §8.2; §12 | — |
| `22-§8-4` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §8 | §8.2; §12 | — |
| `22-§8-5` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §8 | §8.2; §12 | — |
| `22-§8-6` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §8 | §8.2; §12 | — |
| `22-§8-7` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §8 | §8.2; §12 | — |
| `22-§9` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C22@61e1bb91 §9 | §11 | — |
| `22-§10` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C22@61e1bb91 §10 | §11 | — |
| `22-§11` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C22@61e1bb91 §11 | §11 | — |
| `22-§12` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C22@61e1bb91 §12 | §11 | SB-P-1.12 FPDR-1 |
| `22-§13-1` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §13 | §11 | — |
| `22-§13-2` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §13 | §11 | — |
| `22-§13-3` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §13 | §11 | — |
| `22-§13-4` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §13 | §11 | — |
| `22-§13-5` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §13 | §11 | — |
| `22-§14` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §14 | §11 | — |
| `22-§15` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §15 | §11 | — |
| `22-§16` | NOT APPLICABLE | SB-P-1.13 | C22@61e1bb91 §16 | §11 | — |
| `22-§17` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §17 | §8.3; §12 | — |
| `22-§18` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C22@61e1bb91 §18 | §11 | — |
| `22-§19-1` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §19 | §8.10; §12 | — |
| `22-§19-2` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §19 | §8.10; §12 | — |
| `22-§19-3` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §19 | §8.10; §12 | — |
| `22-§19-4` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §19 | §8.10; §12 | — |
| `22-§19-5` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §19 | §8.10; §12 | — |
| `22-§19-6` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §19 | §8.10; §12 | — |
| `22-§19-7` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §19 | §8.10; §12 | — |
| `22-§20` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §20 | §11 | — |
| `22-§21` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §21 | §8.11; §12 | — |
| `22-§22-1` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §22 | §8.11 | — |
| `22-§22-2` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §22 | §8.11; §12 | — |
| `22-§22-3` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §22 | §8.11 | — |
| `22-§22-4` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §22 | §8.11 | — |
| `22-§22-5` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §22 | §8.11 | — |
| `22-§22-6` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §22 | §8.11; §10 | — |
| `22-§23-1` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §23 | §11 | — |
| `22-§23-2` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §23 | §8.4; §12; §10 | — |
| `22-§23-3` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §23 | §8.4; §12; §10 | — |
| `22-§23-4` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §23 | §11 | — |
| `22-§23-5` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §23 | §8.4; §12; §10 | — |
| `22-§23-6` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §23 | §11 | — |
| `22-§23-7` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §23 | §8.4; §12; §10 | — |
| `22-§24-1` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §24 | §8.3; §12 | — |
| `22-§24-2` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §24 | §8.4; §12; §10 | — |
| `22-§24-3` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §24 | §8.4; §12 | — |
| `22-§25` | DELEGATED | SB-P-1.13 | C22@61e1bb91 §25 | §11 | — |
| `22-§26` | DELEGATED | SB-P-1.20 | C22@61e1bb91 §26 | §11 | — |
| `22-§27-1` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §27 | §8.11 | — |
| `22-§27-2` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §27 | §8.11 | — |
| `22-§27-3` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §27 | §8.11 | — |
| `22-§27-4` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §27 | §8.11 | — |
| `22-§27-5` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §27 | §8.11 | — |
| `22-§27-6` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §27 | §8.11 | — |
| `22-§27-7` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §27 | §8.11 | — |
| `22-§28-1` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §28 | §8.12; §10 | — |
| `22-§28-2` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §28 | §8.12; §10 | — |
| `22-§28-3` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §28 | §8.12; §10 | — |
| `22-§28-4` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §28 | §8.12; §10 | — |
| `22-§28-5` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §28 | §8.12; §10 | — |
| `22-§28-6` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §28 | §8.12; §10 | — |
| `22-§28-7` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §28 | §8.12; §10 | — |
| `22-§28-8` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §28 | §8.12; §10 | — |
| `22-§28-9` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §28 | §8.12; §10 | — |
| `22-§28-10` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §28 | §8.12; §10 | — |
| `22-§29-1` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §29 | §8.3; §15; §12 | — |
| `22-§29-2` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §29 | §8.3; §15; §12 | — |
| `22-§29-3` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §29 | §8.4; §15; §12 | — |
| `22-§29-4` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C22@61e1bb91 §29 | §11 | — |
| `22-§29-5` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C22@61e1bb91 §29 | §11 | — |
| `22-§29-6` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §29 | §11 | — |
| `22-§29-7` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §29 | §8.5; §15; §12 | — |
| `22-§29-8` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §29 | §8.5; §15; §12; §10.1 | FPDR-1 |
| `22-§29-9` | NOT APPLICABLE | SB-P-1.18 | C22@61e1bb91 §29 | §11 | — |
| `22-§29-10` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §29 | §8.10; §15; §12 | — |
| `22-§29-11` | DELEGATED | SB-P-1.12 | C22@61e1bb91 §29 | §11 | — |
| `22-§29-12` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §29 | §8.6; §15; §12 | — |
| `22-§29-13` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §29 | §8.10; §15; §12 | — |
| `22-§29-14` | IN SCOPE | SB-P-1.13 | C22@61e1bb91 §29 | §8.11; §15 | — |
| `22-§30` | NOT APPLICABLE | SB-P-1.13 | C22@61e1bb91 §30 | §11 | — |
| `22-§31` | NOT APPLICABLE | SB-P-1.13 | C22@61e1bb91 §31 | §11 | — |
| `22-§32` | NOT APPLICABLE | SB-P-1.13 | C22@61e1bb91 §32 | §11 | — |
| `22-§33` | NOT APPLICABLE | SB-P-1.13 | C22@61e1bb91 §33 | §11 | — |

#### FCTM Part G — Contract 21 (82 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `21-§1` | NOT APPLICABLE | SB-P-1.13 | C21@f4a05d5c §1 | §11 | — |
| `21-§2` | NOT APPLICABLE | SB-P-1.13 | C21@f4a05d5c §2 | §11 | — |
| `21-§3` | NOT APPLICABLE | SB-P-1.13 | C21@f4a05d5c §3 | §11 | — |
| `21-§4-1` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §4 | §11 | — |
| `21-§4-2` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §4 | §11 | — |
| `21-§4-3` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §4 | §11 | — |
| `21-§4-4` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §4 | §11 | — |
| `21-§4-5` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §4 | §11 | — |
| `21-§4-6` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §4 | §11 | — |
| `21-§5-1` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §5 | §11 | — |
| `21-§5-2` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §5 | §11 | — |
| `21-§5-3` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §5 | §11 | — |
| `21-§5-4` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §5 | §11 | — |
| `21-§5-5` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §5 | §11 | — |
| `21-§5-6` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §5 | §11 | — |
| `21-§5-7` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §5 | §11 | — |
| `21-§5-8` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §5 | §11 | — |
| `21-§5-9` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §5 | §11 | — |
| `21-§5-10` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §5 | §11 | — |
| `21-§6-1` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §6 | §11 | — |
| `21-§6-2` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §6 | §11 | — |
| `21-§6-3` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §6 | §11 | — |
| `21-§6-4` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §6 | §11 | — |
| `21-§6-5` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §6 | §11 | — |
| `21-§6-6` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §6 | §11 | — |
| `21-§6-7` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §6 | §11 | — |
| `21-§7` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §7 | §11 | — |
| `21-§8-1` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §8 | §11 | — |
| `21-§8-2` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §8 | §11 | — |
| `21-§8-3` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §8 | §11 | — |
| `21-§8-4` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §8 | §11 | — |
| `21-§8-5` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §8 | §11 | — |
| `21-§8-6` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §8 | §11 | — |
| `21-§8-7` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §8 | §11 | — |
| `21-§9-1` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §9 | §11 | — |
| `21-§9-2` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §9 | §11 | — |
| `21-§9-3` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §9 | §11 | — |
| `21-§9-4` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §9 | §11 | — |
| `21-§10` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §10 | §11 | — |
| `21-§11-1` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §11 | §11 | — |
| `21-§11-2` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §11 | §11 | — |
| `21-§12` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §12 | §11 | — |
| `21-§13` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §13 | §11 | — |
| `21-§14` | NOT APPLICABLE | SB-P-1.13 | C21@f4a05d5c §14 | §11 | — |
| `21-§15-1` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §15 | §11 | — |
| `21-§15-2` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §15 | §11 | — |
| `21-§15-3` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §15 | §11 | — |
| `21-§15-4` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §15 | §11 | — |
| `21-§15-5` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §15 | §11 | — |
| `21-§16-1` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §16 | §11 | — |
| `21-§16-2` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §16 | §11 | — |
| `21-§17` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §17 | §11 | — |
| `21-§18-1` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §18 | §11 | — |
| `21-§18-2` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §18 | §11 | — |
| `21-§18-3` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §18 | §11 | — |
| `21-§18-4` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §18 | §11 | — |
| `21-§18-5` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §18 | §11 | — |
| `21-§18-6` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §18 | §11 | — |
| `21-§19` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §19 | §11 | — |
| `21-§20-1` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §20 | §11 | — |
| `21-§20-2` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §20 | §11 | — |
| `21-§20-3` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §20 | §11 | — |
| `21-§20-4` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §20 | §11 | — |
| `21-§20-5` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §20 | §11 | — |
| `21-§21` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §21 | §11 | — |
| `21-§22` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §22 | §11 | — |
| `21-§23` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §23 | §11 | — |
| `21-§24-1` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §24 | §11 | — |
| `21-§24-2` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §24 | §11 | — |
| `21-§24-3` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §24 | §11 | — |
| `21-§24-4` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §24 | §11 | — |
| `21-§24-5` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §24 | §11 | — |
| `21-§24-6` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §24 | §11 | — |
| `21-§24-7` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §24 | §11 | — |
| `21-§24-8` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §24 | §11 | — |
| `21-§24-9` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §24 | §11 | — |
| `21-§24-10` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §24 | §11 | — |
| `21-§24-11` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §24 | §11 | — |
| `21-§24-12` | DELEGATED | SB-P-1.12 | C21@f4a05d5c §24 | §11 | — |
| `21-§25` | NOT APPLICABLE | SB-P-1.13 | C21@f4a05d5c §25 | §11 | — |
| `21-§26` | NOT APPLICABLE | SB-P-1.13 | C21@f4a05d5c §26 | §11 | — |
| `21-§27` | NOT APPLICABLE | SB-P-1.13 | C21@f4a05d5c §27 | §11 | — |

#### FCTM Part H — Inherited rows (Contracts 17, 20, 7) (21 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `17-§5-1` | IN SCOPE | SB-P-1.13 | C17@7943f74a §5 | §8.1 | — |
| `17-§5-2` | IN SCOPE | SB-P-1.13 | C17@7943f74a §5 | §8.1; §10 | — |
| `17-§5-3` | IN SCOPE | SB-P-1.13 | C17@7943f74a §5 | §8.1; §12 | — |
| `17-§5-4` | IN SCOPE | SB-P-1.13 | C17@7943f74a §5 | §8.1; §12 | — |
| `17-§5-5` | IN SCOPE | SB-P-1.13 | C17@7943f74a §5 | §8.1; §12 | — |
| `17-§5-6` | IN SCOPE | SB-P-1.13 | C17@7943f74a §5 | §8.1; §12 | — |
| `17-§5-7` | IN SCOPE | SB-P-1.13 | C17@7943f74a §5 | §8.5; §12; §10.1 | FPDR-1 |
| `17-§5-8` | IN SCOPE | SB-P-1.13 | C17@7943f74a §5 | §8.1; §12 | — |
| `17-§22-4` | IN SCOPE | SB-P-1.13 | C17@7943f74a §22 | §8.1; §15; §12 | — |
| `17-§22-8` | IN SCOPE | SB-P-1.13 | C17@7943f74a §22 | §8.1; §15 | — |
| `20-§13` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C20@56ed4d11 §13 | §11 | — |
| `20-§14-1` | IN SCOPE | SB-P-1.13 | C20@56ed4d11 §14 | §8.2; §12 | — |
| `20-§14-2` | IN SCOPE | SB-P-1.13 | C20@56ed4d11 §14 | §8.2; §12 | — |
| `20-§14-3` | IN SCOPE | SB-P-1.13 | C20@56ed4d11 §14 | §8.2; §12 | — |
| `20-§14-4` | IN SCOPE | SB-P-1.13 | C20@56ed4d11 §14 | §8.2; §12 | — |
| `20-§15-1` | ASSIGNED TO LATER MISSION | SB-P-1.20 | C20@56ed4d11 §15 | §11 | — |
| `20-§15-2` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C20@56ed4d11 §15 | §11 | — |
| `20-§15-3` | IN SCOPE | SB-P-1.13 | C20@56ed4d11 §15 | §8.1 | — |
| `20-§23-5` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C20@56ed4d11 §23 | §11 | — |
| `7-§11-1` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C7@65ad91b2 §11 | §11 | — |
| `7-§11-2` | IN SCOPE | SB-P-1.13 | C7@65ad91b2 §11 | §8.4; §12; §10 | — |

#### FCTM Part I — Build Plan (76 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `BP-§5.4-1` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §5.4 | §8.7; §12 | — |
| `BP-§6.2-1` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §6.2 | §8.5; §12; §10.1 | FPDR-1 |
| `BP-§6.2-2` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §6.2 | §8.5; §12 | — |
| `BP-§6.4-1` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §6.4 | §8.3; §12 | — |
| `BP-§6.4-2` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §6.4 | §8.3; §12 | — |
| `BP-§6.4-3` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §6.4 | §8.3; §12 | — |
| `BP-§6.4-4` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §6.4 | §8.3; §12 | — |
| `BP-§6.4-5` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §6.4 | §8.3; §12 | — |
| `BP-§6.4-6` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §6.4 | §8.3; §12 | — |
| `BP-§6.4-7` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §6.4 | §8.3; §12 | — |
| `BP-§6.4-8` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §6.4 | §8.3; §12; §10.1 | FPDR-1 |
| `BP-§6.4-9` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §6.4 | §8.3; §12 | — |
| `BP-§6.4-10` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §6.4 | §8.3; §12 | — |
| `BP-§6.6-1` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §6.6 | §8.3 | — |
| `BP-§8.3-1` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §8.3 | §8.1 | — |
| `BP-§8.4-1` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §8.4 | §8.3 | — |
| `BP-§8.4-2` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §8.4 | §8.10; §12 | — |
| `BP-§8.4-3` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §8.4 | §8.3 | — |
| `BP-§8.4-4` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §8.4 | §11 | — |
| `BP-§10.2-W1` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.1; §12 | — |
| `BP-§10.2-W2` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.2 | — |
| `BP-§10.2-W3` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.1; §12 | — |
| `BP-§10.2-W4` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.7; §12 | — |
| `BP-§10.2-W5` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.3; §12 | — |
| `BP-§10.2-W6` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.5; §12 | — |
| `BP-§10.2-W7` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.4; §12 | — |
| `BP-§10.2-W8` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.5; §12 | — |
| `BP-§10.2-W9` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.5; §12; §10.1 | FPDR-1 |
| `BP-§10.2-W10` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.6; §12 | — |
| `BP-§10.2-W11` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.9; §12 | — |
| `BP-§10.2-W12` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.8 | — |
| `BP-§10.2-W13` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.10; §12 | — |
| `BP-§10.2-I1` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.7; §12 | — |
| `BP-§10.2-E1` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.1; §15; §12 | — |
| `BP-§10.2-E2` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.2; §15; §12 | — |
| `BP-§10.2-E3` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.4; §15; §12 | — |
| `BP-§10.2-E4` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.1; §15 | — |
| `BP-§10.2-E5` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.10; §15; §12 | — |
| `BP-§10.2-SA1` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.5; §15; §12; §10.1 | FPDR-1 |
| `BP-§10.2-SA2` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.4; §15; §12 | — |
| `BP-§10.2-SB` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §10.2 | §8.10; §15; §12 | — |
| `BP-§10.2-X` | NOT APPLICABLE | SB-P-1.13 | BP@9dfdd924 §10.2 | §11 | — |
| `BP-§11-1` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §11 | §8.3 | — |
| `BP-§12-1` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §12 | §8.8 | — |
| `BP-§12-2` | ASSIGNED TO LATER MISSION | SB-P-1.19 | BP@9dfdd924 §12 | §11 | — |
| `BP-§12-3` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §12 | §8.8; §10 | — |
| `BP-§13-1` | IN SCOPE | SB-P-1.13 | BP@9dfdd924 §13 | §8.11 | — |
| `BP-§15-1` | NOT APPLICABLE | SB-P-1.13 | BP@9dfdd924 §15 | §11 | — |
| `BP-§15-2` | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | BP@9dfdd924 §15 | §11.5; §12 | BP §15-2 (open) |
| `BP-§15-3` | NOT APPLICABLE | SB-P-1.13 | BP@9dfdd924 §15 | §11 | — |
| `BP-§15-4` | NOT APPLICABLE | SB-P-1.13 | BP@9dfdd924 §15 | §11 | — |
| `BP-§15-5` | NOT APPLICABLE | SB-P-1.13 | BP@9dfdd924 §15 | §11 | — |
| `BP-§15-6` | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | BP@9dfdd924 §15 | §11.5; §12 | BP §15-6 (open) |
| `BP-§15-7` | NOT APPLICABLE | SB-P-1.13 | BP@9dfdd924 §15 | §11 | — |
| `BP-§15-8` | NOT APPLICABLE | SB-P-1.13 | BP@9dfdd924 §15 | §11 | — |
| `BP-§15-9` | NOT APPLICABLE | SB-P-1.13 | BP@9dfdd924 §15 | §11 | — |
| `BP-§16-1` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-2` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-3` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-4` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-5` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-6` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-7` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-8` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-9` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-10` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-11` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-12` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-13` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-14` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-15` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-16` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-17` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-18` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-19` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |
| `BP-§16-20` | OUT OF BUILD SCOPE | SB-P-1.13 | BP@9dfdd924 §16 | §11 | — |

#### FCTM Part J — Delegate contracts (2, 3, 5, 11, 18, 19, 23, 25) (20 rows)

| FCTM row | Disposition | Owning mission | Source reference | Blueprint location | Founder decision |
|---|---|---|---|---|---|
| `2-§7` | DELEGATED | SB-P-1.15 | C2@53635557 §7 | §11 | — |
| `2-§14` | DELEGATED | SB-P-1.15 | C2@53635557 §14 | §11 | — |
| `2-§15` | DELEGATED | SB-P-1.15 | C2@53635557 §15 | §11 | — |
| `3-§5` | DELEGATED | SB-P-1.14 | C3@d8c26c07 §5 | §11 | — |
| `3-§6` | DELEGATED | SB-P-1.14 | C3@d8c26c07 §6 | §11 | — |
| `3-§7` | DELEGATED | SB-P-1.14 | C3@d8c26c07 §7 | §11 | — |
| `3-§12` | DELEGATED | SB-P-1.14 | C3@d8c26c07 §12 | §11 | — |
| `3-§16` | DELEGATED | SB-P-1.14 | C3@d8c26c07 §16 | §11 | — |
| `3-§22` | DELEGATED | SB-P-1.14 | C3@d8c26c07 §22 | §11 | — |
| `5-§3` | DELEGATED | SB-P-1.14 | C5@80ac648e §3 | §11 | — |
| `5-§8` | DELEGATED | SB-P-1.14 | C5@80ac648e §8 | §11 | — |
| `11-§5` | DELEGATED | SB-P-1.15 | C11@e802745a §5 | §11 | — |
| `11-§15` | DELEGATED | SB-P-1.15 | C11@e802745a §15 | §11 | — |
| `18-§5` | DELEGATED | SB-P-1.19 | C18@6b96b10a §5 | §11 | — |
| `19-§7` | DELEGATED | SB-P-1.19 | C19@94aa6f24 §7 | §11 | — |
| `19-§11` | DELEGATED | SB-P-1.19 | C19@94aa6f24 §11 | §11 | — |
| `23-§9` | DELEGATED | SB-P-1.20 | C23@2430e1c6 §9 | §11 | — |
| `23-§22` | DELEGATED | SB-P-1.20 | C23@2430e1c6 §22 | §11 | — |
| `25-§12` | DELEGATED | SB-P-1.14 | C25@406ce089 §12 | §11 | — |
| `25-§13` | DELEGATED | SB-P-1.14 | C25@406ce089 §13 | §11 | — |

## 20. Engineering Review

### 20.1 Scope, baseline and separation

- **Authorization:** SB-P-1.13-MC-11 (`mission-control/13-stage7-engineering-and-specialist-authorization.md`), canonical at `main@81c7d520a4d226cd9b7bf2165cd2dfcd494d613b` (PR #786).
- **Baseline:** Blueprint v0.2 Sections 1–19 (PR #785); FCTM blob `97ddc752dcbbdb6586110a782ef1e24405b6dd22` (974 rows; 651 `IN SCOPE`; 252 carry `D12`); `FPDR-1` to `FPDR-5`.
- **Owner:** Claude Code. Claude Code also authored Sections 1–19 and the Stage 6 Builder Review, so this section is not independent assurance.
- **Independent specialist reviews:** S7-SP-1 Security & Permissions Architecture, S7-SP-2 AI Behaviour / Model Orchestration Safety and S7-SP-3 Voice / Provider Readiness are appointed by SB-P-1.13-MC-11 §4 to other actors. They are not authored here and are not represented as complete. Every finding in Section 20.6 that names a specialist is **held** until Mission Control dispositions that specialist's report (MC-11 §3).
- **Not done:** no FCTM, Founder decision or Sections 1–19 content change beyond the four permitted Metadata fields and one Section 18 row; no EIS, code, SQL, migration, provider or production action.

### 20.2 Environment assumptions (read-only evidence; Stage 6 Section 2)

| Item | Assumption | Evidence state |
|---|---|---|
| Runtime | TanStack Start built by Nitro with a Cloudflare default target via `@lovable.dev/vite-tanstack-config`; server functions run per request with Worker limits on duration, CPU and body size | Repository |
| Server authentication | `requireSupabaseAuth` verifies the Bearer JWT and creates an RLS-bound client; the service-role client is never used for AI context (Stage 6 Section 5) | Repository |
| Secrets | Provider keys are server-only `process.env` values provisioned through Lovable Cloud; never `VITE_*` | Repository pattern; Lovable admin access impaired (SB-P-1.12 MC-70) |
| Business resolution | Only through SB-P-1.12 explicit active-business context; the current owner-only `maybeSingle()` lookup may not be used (SB-P-1.12 EIS §19.5; Blueprint §12.1) | Locked specification; not implemented |
| Test environment | Isolated Supabase test project used by integration tests | SB-P-1.12 EV-02 partially evidenced; current state `UNVERIFIED — ACCESS REQUIRED` |
| Production | Not accessed; no production assumption is made | — |
| AI provider | OpenAI behind a server gateway; account, key custody, data controls and retention | `UNVERIFIED — ACCESS REQUIRED` |
| Voice provider | Not selected; Malayalam/Manglish speech capability, retention and cost | `UNVERIFIED — ACCESS REQUIRED`; activation not authorized |
| CI | GitHub Actions impaired since 2026-09-30 (SB-P-1.12 EV-01 OPEN); local gates available | Repository; `gh` |

### 20.3 Engineering assessment by Blueprint subsection

| Code | Subsection | Feasibility assessment | Principal engineering risk |
|---|---|---|---|
| F1 | §8.1 Native Conversation Workspace | Feasible. New authenticated route; entries in both desktop and mobile navigation; one shared business-context provider consuming SB-P-1.12 active-business context instead of a seventh copy of the owner lookup (B6-11) | Navigation drift between the two menus; business context resolved the old way |
| F2 | §8.2 Human Language and Clarification | Feasible through the AI gateway, provided the chosen model meets the commitment. Requires a Malayalam-capable web font, per-message `lang` attributes and a governed English/Malayalam/Manglish evaluation corpus (B6-04) | Model quality for Malayalam and Manglish is unproven (DC-13 analogue for text) |
| F3 | §8.3 AI Orchestration and Provider Abstraction | Feasible as a server-function gateway behind `requireSupabaseAuth`, with streaming and explicit timeouts sized to Worker limits; model choice as routing configuration (B6-03) | Long model calls exceed Worker limits; provider data controls unverified |
| F4 | §8.4 Permission Context, Isolation and Denial | Feasible only by consuming the SB-P-1.12 kernel (`authz.authorize`, capability registry, `conversation`/`ai_tool` channel values, active-business context). No interim path is permitted (EIS §19.5) | Implementation blocked until SB-P-1.12 resumes; any shortcut would breach EIS §19.5 |
| F5 | §8.5 Typed Tools, Confirmation, Governed Command | Feasible. Typed registry validated with the existing `zod` dependency (B6-12); the `FPDR-1` command follows the `create_inventory_movement` pattern (`SECURITY INVOKER`, idempotency key, payload fingerprint) and consumes SB-P-1.12 `confirmation_bindings` and the shared idempotency pattern (B6-05) | The direct client insert on `transactions` remains a second write path; the idempotency precedent's production state is `UNKNOWN` |
| F6 | §8.6 Audit and Provenance | Feasible on SB-P-1.12 authority events and audit, with new conversation provenance fields (channel, modality, interpretation, clarification) | Audit volume and prompt-retention policy (Contract 24 §24) |
| F7 | §8.7 Basic Voice | Feasible behind the voice activation gate. Transient audio only (`FPDR-3`); sensitive-output fallback using only trustworthy existing context plus capability sensitivity (`FPDR-4`; MC-08 §4); credit-payment-method sales allowed (`FPDR-5`) | No provider selected; Malayalam speech quality; provider-side audio retention (B6-06) |
| F8 | §8.8 FAQ-Before-AI Support | Feasible. FAQ store with versioned, provenance-recorded entries; content stewardship assigned to Team LIPS Support / CX with Founder approval for Product Truth content (MC-08 §5; B6-09) | Seed corpus not yet written; hallucination outside approved knowledge |
| F9 | §8.9 Attachment Handoff | Feasible with transient handling only; no Supabase storage bucket (Build Plan §16 rejection) before SB-P-1.14 (B6-13) | Pressure to keep files "for later" |
| F10 | §8.10 Failure, Outage, WhatsApp Independence | Feasible. Client-held idempotency key per consequential proposal and an outcome-lookup path modelled on `get_catalog_command_outcome` (B6-08); positive evidence of no Meta call for Scenario B (B6-14) | Unknown outcome after a timeout following commit |
| F11 | §8.11 Platform Quality | Feasible with local gates while Actions are impaired; AI and voice tests use recorded provider fixtures (B6-16) | Missing CI evidence; no telemetry sink yet |
| F12 | §8.12 Non-Goals | Feasible as design-review and negative-test checks | Silent drift toward a generic chatbot or second brain |

### 20.4 Early delivery plan

This plan orders work; it authorizes none of it. Every step needs a later Implementation Authorization.

#### 20.4.1 Phases and gates

| Phase | Content | Entry gate |
|---|---|---|
| P0 — Gates | SB-P-1.12 kernel workstreams consumed by SB-P-1.13 implemented, verified and accepted (EIS §19.5); AI provider data-control verification; voice-provider selection and activation decision; re-verification of the idempotency precedent's production state; CI evidence path agreed while Actions are impaired | Mission Control and Founder authorization |
| P1 — Foundations without business data | AI gateway, model routing, structured-output validation, language evaluation corpus, FAQ store and seed content, failure handling for provider calls | P0 provider gate; Implementation Authorization |
| P2 — Business-scoped Workspace | Workspace route and navigation, shared business-context provider, conversation store, permission-context propagation, denial | P0 SB-P-1.12 gate |
| P3 — Governed actions | Typed tool registry, preview, confirmation binding, revalidation, the `FPDR-1` create-transaction command, audit and provenance, outcome lookup | P2 |
| P4 — Basic Voice | Capture, transcription, voice output with `FPDR-3`, `FPDR-4` and `FPDR-5`; credit/repayment portions held for SB-P-1.14 (`FPDR-2`) | P0 voice gate; P3 |
| P5 — Boundary and verification | Transient attachment handoff, outage hardening, Scenario A and B runs, Experience Verification Matrix | P3, P4 |

Rows realized in P1 carry no `D12`; rows in P2 to P5 are mostly `D12` and stay `BLOCKED` until P0.

#### 20.4.2 Expected migrations and rehearsal

Expected additive schema families, stated as expectations for the EIS, not designs:

- conversation threads and messages, business-scoped through the SB-P-1.12 kernel;
- tool proposals referencing SB-P-1.12 `confirmation_bindings`;
- the `FPDR-1` governed create-transaction RPC and its idempotency records (additive to `transactions`; existing correction foundations unchanged);
- FAQ entries with version and provenance;
- transcript and structured-result records under `FPDR-3` (no raw audio);
- aggregate AI usage and cost telemetry.

Rehearsal: each migration is executed only under a separately authorized migration mission (`docs/migration/README.md`), rehearsed first on the isolated test project, with rollback and verification evidence. No migration file is self-authorizing. None is created here.

#### 20.4.3 Cross-mission dependencies

| Dependency | Effect on SB-P-1.13 rows |
|---|---|
| SB-P-1.12 kernel (`D12`) | 252 rows `BLOCKED` until implemented, verified and accepted |
| SB-P-1.14 (`D14`) | UDI handoff target, durable media, four-state Ledger; credit/repayment portions of `FPDR-2` rows |
| SB-P-1.15 (`D15`) | Workspace use of Ask CFO, reminders and notifications |
| SB-P-1.16 to SB-P-1.18 | Later intent routing destinations only |
| SB-P-1.19 (`D19`) | Human support escalation, onboarding surface, Voice Plus |
| SB-P-1.20 (`D20`) | Second-channel proof of shared-foundation rows |

#### 20.4.4 CI tiers

| Tier | Content for SB-P-1.13 |
|---|---|
| Fast Gate (`build-assurance.yml`) | Lint, typecheck, build, fast unit tests: tool-schema validation, structured-output validation, injection fixtures against a mocked provider, language corpus fixtures, FPDR-4 presentation rules |
| Full Assurance (`full-assurance.yml`) | Integration on the isolated test project: business isolation of conversation data, governed command idempotency and concurrency, revalidation after revocation (once SB-P-1.12 is present), denial behaviour |
| Markdown Quality Gate | All governance and specification documents |
| Provider evaluation (outside CI) | Live AI and voice quality runs on the evaluation corpus; separately authorized; never in CI with live keys |

While Actions are impaired, local gates are recorded with exact command output, and run-level CI evidence is supplied when available (OLE `SB-OPS-CI-ARCHITECTURE-1.0` promotion-02).

#### 20.4.5 Scope flags

| Flag | Value |
|---|---|
| Production mutation | NOT AUTHORIZED |
| Migration execution | NOT AUTHORIZED |
| Delivery sync and publication | NOT AUTHORIZED |
| AI provider activation or purchase | NOT AUTHORIZED |
| Voice-provider activation or purchase | NOT AUTHORIZED |
| Lovable build or publish | NOT AUTHORIZED |

### 20.5 Stage 6 findings carried (MC-08, MC-10)

| Finding | Carried as | Where |
|---|---|---|
| B6-01 | Reconciled (PR #785); not reopened | §12.1; `D12` rows |
| B6-02 | Resolved by `FPDR-5`; not reopened | §10.1; F7 |
| B6-03 | Engineering input: gateway runtime, streaming, timeouts, secret provisioning | F3; EQ-1 |
| B6-04 | Engineering input: Malayalam font, `lang` attributes, evaluation corpus | F2; EQ-2 |
| B6-05 | Engineering input: `FPDR-1` command pattern; second write path; precedent production state | F5; EQ-4, EQ-6 |
| B6-06 | Through S7-SP-3 (and S7-SP-2): provider-side audio retention | F7; held |
| B6-07 | EIS-design boundary: existing trustworthy context and capability sensitivity only; no new sensing or privacy control (MC-08 §4) | F7; EQ-9 |
| B6-08 | Engineering input: idempotency key and outcome lookup | F10 |
| B6-09 | FAQ stewardship as assigned in MC-08 §5 | F8 |
| B6-10 | Through S7-SP-2 and S7-SP-3: provider data controls and voice readiness | F3, F7; held |
| B6-11 | Engineering input: navigation and shared business-context provider | F1 |
| B6-12 | Engineering input: typed registry with existing schema tooling | F5 |
| B6-13 | Engineering input: transient attachment handling | F9 |
| B6-14 | Verification Checklist requirement: positive no-Meta-call evidence for Scenario B | F10; V-FRV |
| B6-15 | Engineering input: latency budgets and streaming | F3, F7 |
| B6-16 | Engineering input: telemetry sink; local-gate evidence | F11 |

### 20.6 Per-row feasibility and risk register (651 `IN SCOPE` rows)

Legends:

| Code | Meaning |
|---|---|
| F1–F12 | Feasibility assessment of the row's Blueprint subsection (Section 20.3) |
| I-AUTH | Consumes SB-P-1.12 kernel, active-business context, binding or idempotency (EIS §19.5); no interim path |
| I-AI | Server-only provider gateway; data-control verification before merchant data reaches the provider |
| I-VOICE | Voice activation gate; transient raw audio (`FPDR-3`) |
| I-CMD | `FPDR-1` governed create-transaction command |
| I-FPDR5 | `FPDR-5` credit-payment-method boundary; owed balance and repayment not fabricated |
| I-L14, I-L15, I-L19, I-L20, I-LATER | Later-mission dependency (SB-P-1.14, 1.15, 1.19, 1.20, or 1.16–1.18) |
| I-POLICY | Open retention policy (Build Plan §15 item 6), off the critical path |
| I-NONE | No external implication beyond this mission's build |
| V-TEST | Unit or integration test evidence |
| V-NEG | Negative test or design inspection proving absence |
| V-DES | Design review against the rule |
| V-ACC | Acceptance-scenario evidence at Stage 17/19 |
| V-FRV | Founder Runtime Verification with runtime evidence |
| V-EVM | Experience Verification Matrix entry |
| SP-1, SP-2, SP-3 | S7-SP-1 Security & Permissions; S7-SP-2 AI Behaviour; S7-SP-3 Voice/Provider. A named specialist means the finding is held |
| `BLOCKED` | Feasible, but cannot be built or demonstrated until SB-P-1.12 implementation is complete, verified and accepted (`D12`). The row stays `IN SCOPE` |
| `FOLLOW-UP` | Feasible; depends on a gate, verification or later-mission dependency other than `D12` |
| `PASS` | Feasible with no external dependency |

No row is `NOT APPLICABLE`: every row here is `IN SCOPE` in the FCTM.

| Row | Blueprint | Source | Feasibility | Implications | Dependency status | Risk | Verification | Specialist dependency | Finding |
|---|---|---|---|---|---|---|---|---|---|
| `24-§4-1` | §8.3 | C24 §4 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§4-2` | §8.12 | C24 §4 | F12 | I-AI | DAI unverified | Medium | V-NEG | SP-2 | FOLLOW-UP |
| `24-§4-3` | §8.12 | C24 §4 | F12 | I-AI | DAI unverified | Medium | V-NEG | SP-2 | FOLLOW-UP |
| `24-§4-4` | §8.12 | C24 §4 | F12 | I-AI | DAI unverified | Medium | V-NEG | SP-2 | FOLLOW-UP |
| `24-§4-5` | §8.12 | C24 §4 | F12 | I-AI | DAI unverified | Medium | V-NEG | SP-2 | FOLLOW-UP |
| `24-§4-6` | §8.12 | C24 §4 | F12 | I-AI | DAI unverified | Medium | V-NEG | SP-2 | FOLLOW-UP |
| `24-§4-7` | §8.12 | C24 §4 | F12 | I-AI | DAI unverified | Medium | V-NEG | SP-2 | FOLLOW-UP |
| `24-§4-8` | §8.12 | C24 §4 | F12 | I-AI | DAI unverified | Medium | V-NEG | SP-2 | FOLLOW-UP |
| `24-§5-1` | §8.3 | C24 §5 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§5-3` | §8.3 | C24 §5 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§5-5` | §8.7 | C24 §5 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `24-§5-7` | §8.3 | C24 §5 | F3 | I-NONE | none external | Low | V-DES | SP-2 | PASS |
| `24-§5-8` | §8.3 | C24 §5 | F3 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `24-§6-1` | §8.3 | C24 §6 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§6-2` | §8.3 | C24 §6 | F3 | I-AI, I-L14, I-L15, I-LATER | DAI unverified; D14 not started; D15 not started; D16 not started; D17 not started; D18 not started | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§6-3` | §8.2 | C24 §6 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§7-1` | §8.3 | C24 §7 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§7-2` | §8.7 | C24 §7 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `24-§7-5` | §8.3 | C24 §7 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-DES | SP-1, SP-2 | BLOCKED |
| `24-§8-1` | §8.2 | C24 §8 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§8-2` | §8.2 | C24 §8 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§8-3` | §8.2 | C24 §8 | F2 | I-AI | DAI unverified | Medium | V-NEG | SP-2 | FOLLOW-UP |
| `24-§9-1` | §8.3 | C24 §9 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§9-2` | §8.3 | C24 §9 | F3 | I-AUTH, I-L14, I-L15, I-LATER | D12 impl/evidence not complete; D14 not started; D15 not started; D16 not started; D17 not started; D18 not started | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§9-3` | §8.3 | C24 §9 | F3 | I-L14 | D14 not started | Low | V-TEST | SP-2 | FOLLOW-UP |
| `24-§9-4` | §8.3 | C24 §9 | F3 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `24-§10-1` | §8.4 | C24 §10 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§10-2` | §8.4 | C24 §10 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§10-3` | §8.4 | C24 §10 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§10-4` | §8.4 | C24 §10 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§10-5` | §8.4 | C24 §10 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§10-6` | §8.4 | C24 §10 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§10-7` | §8.4 | C24 §10 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§10-8` | §8.4 | C24 §10 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `24-§10-9` | §8.4 | C24 §10 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `24-§10-10` | §8.4 | C24 §10 | F4 | I-AUTH, I-L20, I-LATER | D12 impl/evidence not complete; D18 not started; D20 not started | High | V-NEG | SP-1 | BLOCKED |
| `24-§10-11` | §8.4 | C24 §10 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `24-§11-1` | §8.5 | C24 §11 | F5 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§11-2` | §8.5 | C24 §11 | F5 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§11-3` | §8.5 | C24 §11 | F5 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§11-4` | §8.5 | C24 §11 | F5 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§11-5` | §8.5 | C24 §11 | F5 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§11-6` | §8.5 | C24 §11 | F5 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§11-7` | §8.5 | C24 §11 | F5 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§11-8` | §8.5 | C24 §11 | F5 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§11-9` | §8.5 | C24 §11 | F5 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§11-10` | §8.5 | C24 §11 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `24-§13-2` | §8.5 | C24 §13 | F5 | I-NONE | none external | Low | V-NEG | SP-1 | PASS |
| `24-§15-1` | §8.7 | C24 §15 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `24-§15-2` | §8.7 | C24 §15 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `24-§15-3` | §8.7 | C24 §15 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `24-§15-4` | §8.7 | C24 §15 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `24-§15-5` | §8.7 | C24 §15 | F7 | I-AI, I-AUTH, I-VOICE | D12 impl/evidence not complete; DV gate not activated; DAI unverified | Medium | V-TEST | SP-1, SP-2, SP-3 | BLOCKED |
| `24-§15-6` | §8.7 | C24 §15 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `24-§15-7` | §8.7 | C24 §15 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `24-§15-8` | §8.7 | C24 §15 | F7 | I-VOICE | DV gate not activated | Medium | V-NEG | SP-3 | FOLLOW-UP |
| `24-§17-1` | §8.8 | C24 §17 | F8 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§17-2` | §8.8 | C24 §17 | F8 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§17-4` | §8.8 | C24 §17 | F8 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§17-5` | §8.8 | C24 §17 | F8 | I-AUTH, I-L19 | D12 impl/evidence not complete; D19 not started | Medium | V-NEG | SP-1, SP-2 | BLOCKED |
| `24-§19-1` | §8.3 | C24 §19 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§19-2` | §8.3 | C24 §19 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§19-3` | §8.3 | C24 §19 | F3 | I-AI | DAI unverified | Medium | V-NEG | SP-2 | FOLLOW-UP |
| `24-§19-4` | §8.3 | C24 §19 | F3 | I-AI | DAI unverified | Medium | V-DES | SP-2 | FOLLOW-UP |
| `24-§20-1` | §8.5 | C24 §20 | F5 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§20-2` | §8.5 | C24 §20 | F5 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§20-3` | §8.5 | C24 §20 | F5 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§20-4` | §8.5 | C24 §20 | F5 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§20-5` | §8.5 | C24 §20 | F5 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§20-6` | §8.5 | C24 §20 | F5 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§20-7` | §8.5 | C24 §20 | F5 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§20-8` | §8.5 | C24 §20 | F5 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§20-9` | §8.5 | C24 §20 | F5 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§20-10` | §8.5 | C24 §20 | F5 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§21-1` | §8.5 | C24 §21 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§21-2` | §8.5 | C24 §21 | F5 | I-AUTH, I-CMD | D12 impl/evidence not complete; DTX FPDR-1, not built | High | V-TEST | SP-1 | BLOCKED |
| `24-§21-8` | §8.5 | C24 §21 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§21-9` | §8.5 | C24 §21 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§21-10` | §8.5 | C24 §21 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§22-1` | §8.4 | C24 §22 | F4 | I-AI | DAI unverified | Medium | V-NEG | SP-1, SP-2 | FOLLOW-UP |
| `24-§22-2` | §8.4 | C24 §22 | F4 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§22-3` | §8.4 | C24 §22 | F4 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§22-4` | §8.4 | C24 §22 | F4 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§22-5` | §8.4 | C24 §22 | F4 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§22-6` | §8.4 | C24 §22 | F4 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§22-7` | §8.4 | C24 §22 | F4 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§22-8` | §8.4 | C24 §22 | F4 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§23-1` | §8.10 | C24 §23 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§23-2` | §8.10 | C24 §23 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§23-3` | §8.10 | C24 §23 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§23-4` | §8.10 | C24 §23 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§23-5` | §8.10 | C24 §23 | F10 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `24-§23-7` | §8.10 | C24 §23 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§23-8` | §8.10 | C24 §23 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§23-9` | §8.10 | C24 §23 | F10 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§23-10` | §8.10 | C24 §23 | F10 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§23-11` | §8.10 | C24 §23 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§23-12` | §8.10 | C24 §23 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§23-13` | §8.10 | C24 §23 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§23-14` | §8.10 | C24 §23 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§23-15` | §8.10 | C24 §23 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§23-16` | §8.10 | C24 §23 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§23-17` | §8.10 | C24 §23 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§23-18` | §8.10 | C24 §23 | F10 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§24-1` | §8.6 | C24 §24 | F6 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§24-2` | §8.6 | C24 §24 | F6 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§24-3` | §8.6 | C24 §24 | F6 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§24-4` | §8.6 | C24 §24 | F6 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§24-5` | §8.6 | C24 §24 | F6 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§24-6` | §8.6 | C24 §24 | F6 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§24-7` | §8.6 | C24 §24 | F6 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§24-8` | §8.6 | C24 §24 | F6 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§24-9` | §8.6 | C24 §24 | F6 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `24-§24-10` | §8.6 | C24 §24 | F6 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§25-1` | §8.4 | C24 §25 | F4 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§25-2` | §8.4 | C24 §25 | F4 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§25-3` | §8.4 | C24 §25 | F4 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§25-4` | §8.4 | C24 §25 | F4 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§25-5` | §8.4 | C24 §25 | F4 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§25-6` | §8.4 | C24 §25 | F4 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§25-7` | §8.4 | C24 §25 | F4 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§25-8` | §8.4 | C24 §25 | F4 | I-AI | DAI unverified | Medium | V-TEST | SP-1, SP-2 | FOLLOW-UP |
| `24-§25-9` | §8.4 | C24 §25 | F4 | I-NONE | none external | Low | V-DES | SP-1 | PASS |
| `24-§26-1` | §8.3 | C24 §26 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§26-2` | §8.3 | C24 §26 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§26-3` | §8.3 | C24 §26 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§26-4` | §8.3 | C24 §26 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§26-5` | §8.3 | C24 §26 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§26-6` | §8.3 | C24 §26 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§26-7` | §8.3 | C24 §26 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§26-8` | §8.3 | C24 §26 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§26-9` | §8.3 | C24 §26 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§26-10` | §8.3 | C24 §26 | F3 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `24-§27-2` | §8.3 | C24 §27 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§27-4` | §8.7 | C24 §27 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `24-§27-6` | §8.3 | C24 §27 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§27-7` | §8.3 | C24 §27 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§27-8` | §8.3 | C24 §27 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§27-9` | §8.3 | C24 §27 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§27-10` | §8.3 | C24 §27 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§27-11` | §8.3 | C24 §27 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§28-1` | §8.3 | C24 §28 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§28-2` | §8.3 | C24 §28 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§28-3` | §8.3 | C24 §28 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§28-4` | §8.3 | C24 §28 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§28-5` | §8.3 | C24 §28 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§28-6` | §8.3 | C24 §28 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§28-7` | §8.3 | C24 §28 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§28-8` | §8.3 | C24 §28 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§28-9` | §8.3 | C24 §28 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§28-10` | §8.3 | C24 §28 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§28-11` | §8.3 | C24 §28 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§28-12` | §8.3 | C24 §28 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§29-1` | §8.3 | C24 §29 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§29-2` | §8.3 | C24 §29 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§29-3` | §8.3 | C24 §29 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `24-§29-4` | §8.3 | C24 §29 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§29-5` | §8.3 | C24 §29 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `24-§29-6` | §8.3 | C24 §29 | F3 | I-AI | DAI unverified | Medium | V-DES | SP-2 | FOLLOW-UP |
| `24-§30-1` | §8.12 | C24 §30 | F12 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `24-§30-2` | §8.12 | C24 §30 | F12 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `24-§30-3` | §8.12 | C24 §30 | F12 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `24-§30-4` | §8.12 | C24 §30 | F12 | I-NONE | none external | Low | V-NEG | SP-1, SP-2 | PASS |
| `24-§30-5` | §8.12 | C24 §30 | F12 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `24-§30-6` | §8.12 | C24 §30 | F12 | I-NONE | none external | Low | V-NEG | SP-1, SP-2 | PASS |
| `24-§30-7` | §8.12 | C24 §30 | F12 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `24-§30-8` | §8.12 | C24 §30 | F12 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `24-§31-1` | §8.3 | C24 §31 | F3 | I-AI, I-AUTH, I-L20 | D12 impl/evidence not complete; DAI unverified; D20 not started | Medium | V-ACC | SP-1, SP-2 | BLOCKED |
| `24-§31-2` | §8.7 | C24 §31 | F7 | I-AI, I-AUTH, I-VOICE | D12 impl/evidence not complete; DV gate not activated; DAI unverified | Medium | V-ACC | SP-1, SP-2, SP-3 | BLOCKED |
| `24-§31-3` | §8.4 | C24 §31 | F4 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-ACC | SP-1, SP-2 | BLOCKED |
| `24-§31-4` | §8.4 | C24 §31 | F4 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-ACC | SP-1, SP-2 | BLOCKED |
| `24-§31-5` | §8.2 | C24 §31 | F2 | I-AI | DAI unverified | Medium | V-ACC | SP-2 | FOLLOW-UP |
| `24-§31-6` | §8.3 | C24 §31 | F3 | I-AI | DAI unverified | Medium | V-ACC | SP-2 | FOLLOW-UP |
| `24-§31-7` | §8.5 | C24 §31 | F5 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-ACC | SP-1, SP-2 | BLOCKED |
| `24-§31-11` | §8.10 | C24 §31 | F10 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-ACC | SP-1, SP-2 | BLOCKED |
| `24-§31-12` | §8.10 | C24 §31 | F10 | I-AI | DAI unverified | Medium | V-ACC | SP-2 | FOLLOW-UP |
| `24-§31-13` | §8.5 | C24 §31 | F5 | I-AUTH, I-CMD | D12 impl/evidence not complete; DTX FPDR-1, not built | High | V-ACC | SP-1 | BLOCKED |
| `24-§31-14` | §8.3 | C24 §31 | F3 | I-AI | DAI unverified | Medium | V-ACC | SP-2 | FOLLOW-UP |
| `24-§31-15` | §8.3 | C24 §31 | F3 | I-AUTH, I-L14 | D12 impl/evidence not complete; D14 not started | Medium | V-ACC | SP-1, SP-2 | BLOCKED |
| `24-§31-16` | §8.3 | C24 §31 | F3 | I-AI | DAI unverified | Medium | V-ACC | SP-2 | FOLLOW-UP |
| `9-§3-1` | §8.2 | C9 §3 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§3-2` | §8.2 | C9 §3 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§3-3` | §8.2 | C9 §3 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§3-4` | §8.2 | C9 §3 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§3-5` | §8.2 | C9 §3 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§3-6` | §8.2 | C9 §3 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§3-7` | §8.2 | C9 §3 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§3-8` | §8.2 | C9 §3 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§3-9` | §8.2 | C9 §3 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§4-1` | §8.2 | C9 §4 | F2 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `9-§4-2` | §8.2 | C9 §4 | F2 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `9-§4-3` | §8.2 | C9 §4 | F2 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `9-§4-4` | §8.2 | C9 §4 | F2 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `9-§4-5` | §8.2 | C9 §4 | F2 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `9-§5-1` | §8.2 | C9 §5 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§5-2` | §8.2 | C9 §5 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§6-1` | §8.2 | C9 §6 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§6-2` | §8.2 | C9 §6 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§7-1` | §8.2 | C9 §7 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§7-2` | §8.2 | C9 §7 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§7-3` | §8.2 | C9 §7 | F2 | I-AI | DAI unverified | Medium | V-NEG | SP-2 | FOLLOW-UP |
| `9-§8-1` | §8.2 | C9 §8 | F2 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `9-§8-2` | §8.2 | C9 §8 | F2 | I-AI, I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2, SP-3 | BLOCKED |
| `9-§8-4` | §8.2 | C9 §8 | F2 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `9-§9-1` | §8.2 | C9 §9 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§9-2` | §8.2 | C9 §9 | F2 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `9-§9-3` | §8.2 | C9 §9 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§9-4` | §8.2 | C9 §9 | F2 | I-AI, I-FPDR5 | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§9-5` | §8.2 | C9 §9 | F2 | I-AI, I-L15 | DAI unverified; D15 not started | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§9-6` | §8.2 | C9 §9 | F2 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `9-§9-7` | §8.2 | C9 §9 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§9-8` | §8.2 | C9 §9 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§10-1` | §8.2 | C9 §10 | F2 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `9-§10-2` | §8.2 | C9 §10 | F2 | I-AUTH | D12 impl/evidence not complete | Medium | V-NEG | SP-1, SP-2 | BLOCKED |
| `9-§10-3` | §8.2 | C9 §10 | F2 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `9-§11-1` | §8.2 | C9 §11 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§11-2` | §8.2 | C9 §11 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§11-3` | §8.2 | C9 §11 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§11-4` | §8.2 | C9 §11 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§11-5` | §8.2 | C9 §11 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§11-6` | §8.2 | C9 §11 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§11-7` | §8.2 | C9 §11 | F2 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `9-§12-4` | §8.2 | C9 §12 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§12-10` | §8.8 | C9 §12 | F8 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§12-13` | §8.2 | C9 §12 | F2 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `9-§13-1` | §8.2 | C9 §13 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§13-2` | §8.2 | C9 §13 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§13-3` | §8.2 | C9 §13 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§13-4` | §8.2 | C9 §13 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§13-5` | §8.2 | C9 §13 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§13-6` | §8.2 | C9 §13 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§13-7` | §8.2 | C9 §13 | F2 | I-AI | DAI unverified | Medium | V-NEG | SP-2 | FOLLOW-UP |
| `9-§13-8` | §8.2 | C9 §13 | F2 | I-AI | DAI unverified | Medium | V-NEG | SP-2 | FOLLOW-UP |
| `9-§13-9` | §8.4 | C9 §13 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `9-§13-10` | §8.4 | C9 §13 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `9-§13-11` | §8.2 | C9 §13 | F2 | I-AI | DAI unverified | Medium | V-NEG | SP-2 | FOLLOW-UP |
| `9-§14-1` | §8.2 | C9 §14 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§14-2` | §8.2 | C9 §14 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§14-3` | §8.2 | C9 §14 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§14-4` | §8.2 | C9 §14 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§14-5` | §8.2 | C9 §14 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§14-6` | §8.2 | C9 §14 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§14-7` | §8.2 | C9 §14 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§14-8` | §8.2 | C9 §14 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§15-1` | §8.2 | C9 §15 | F2 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `9-§15-2` | §8.2 | C9 §15 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§15-3` | §8.2 | C9 §15 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§15-4` | §8.2 | C9 §15 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§15-5` | §8.2 | C9 §15 | F2 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `9-§16-1` | §8.2 | C9 §16 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§16-2` | §8.2 | C9 §16 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `9-§16-3` | §8.2 | C9 §16 | F2 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `9-§16-4` | §8.2 | C9 §16 | F2 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `9-§17-1` | §8.2 | C9 §17 | F2 | I-AI, I-AUTH, I-CMD | D12 impl/evidence not complete; DAI unverified; DTX FPDR-1, not built | High | V-ACC | SP-1, SP-2 | BLOCKED |
| `9-§17-2` | §8.2 | C9 §17 | F2 | I-AI | DAI unverified | Medium | V-ACC | SP-2 | FOLLOW-UP |
| `9-§17-3` | §8.2 | C9 §17 | F2 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-ACC | SP-1, SP-2 | BLOCKED |
| `9-§17-4` | §8.2 | C9 §17 | F2 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-ACC | SP-2, SP-3 | FOLLOW-UP |
| `9-§17-7` | §8.8 | C9 §17 | F8 | I-AI | DAI unverified | Medium | V-ACC | SP-2 | FOLLOW-UP |
| `9-§17-8` | §8.2 | C9 §17 | F2 | I-AI | DAI unverified | Medium | V-ACC | SP-2 | FOLLOW-UP |
| `9-§17-9` | §8.2 | C9 §17 | F2 | I-AUTH, I-L20 | D12 impl/evidence not complete; D20 not started | Medium | V-ACC | SP-1, SP-2 | BLOCKED |
| `9-§17-10` | §8.2 | C9 §17 | F2 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-ACC | SP-1, SP-2 | BLOCKED |
| `9-§18-1` | §8.12 | C9 §18 | F12 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `9-§18-2` | §8.12 | C9 §18 | F12 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `9-§18-3` | §8.12 | C9 §18 | F12 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `9-§18-4` | §8.12 | C9 §18 | F12 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `9-§18-5` | §8.12 | C9 §18 | F12 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `9-§18-6` | §8.12 | C9 §18 | F12 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `9-§18-7` | §8.12 | C9 §18 | F12 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `9-§19` | §8.4 | C9 §19 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `10-§4-1` | §8.1 | C10 §4 | F1 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `10-§4-2` | §8.7 | C10 §4 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `10-§4-3` | §8.9 | C10 §4 | F9 | I-L14 | D14 not started | Low | V-TEST | — | FOLLOW-UP |
| `10-§4-4` | §8.9 | C10 §4 | F9 | I-L14 | D14 not started | Low | V-TEST | — | FOLLOW-UP |
| `10-§4-5` | §8.9 | C10 §4 | F9 | I-L14 | D14 not started | Low | V-TEST | — | FOLLOW-UP |
| `10-§4-6` | §8.9 | C10 §4 | F9 | I-L14 | D14 not started | Low | V-TEST | — | FOLLOW-UP |
| `10-§4-7` | §8.9 | C10 §4 | F9 | I-L14 | D14 not started | Low | V-TEST | — | FOLLOW-UP |
| `10-§4-8` | §8.9 | C10 §4 | F9 | I-L14 | D14 not started | Low | V-NEG | — | FOLLOW-UP |
| `10-§5-1` | §8.1 | C10 §5 | F1 | I-NONE | none external | Low | V-TEST | — | PASS |
| `10-§5-2` | §8.7 | C10 §5 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `10-§5-3` | §8.1 | C10 §5 | F1 | I-NONE | none external | Low | V-TEST | — | PASS |
| `10-§5-4` | §8.1 | C10 §5 | F1 | I-NONE | none external | Low | V-TEST | — | PASS |
| `10-§5-6` | §8.1 | C10 §5 | F1 | I-NONE | none external | Low | V-TEST | — | PASS |
| `10-§5-8` | §8.1 | C10 §5 | F1 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§5-9` | §8.1 | C10 §5 | F1 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§5-11` | §8.1 | C10 §5 | F1 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `10-§6-1` | §8.1 | C10 §6 | F1 | I-AUTH, I-L20 | D12 impl/evidence not complete; D20 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§6-2` | §8.1 | C10 §6 | F1 | I-AUTH, I-L20 | D12 impl/evidence not complete; D20 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§6-3` | §8.1 | C10 §6 | F1 | I-AUTH, I-L14, I-L20 | D12 impl/evidence not complete; D14 not started; D20 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§6-4` | §8.1 | C10 §6 | F1 | I-AUTH, I-L20 | D12 impl/evidence not complete; D20 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§6-5` | §8.1 | C10 §6 | F1 | I-AUTH, I-L20 | D12 impl/evidence not complete; D20 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§6-6` | §8.1 | C10 §6 | F1 | I-L20 | D20 not started | Low | V-TEST | — | FOLLOW-UP |
| `10-§6-7` | §8.1 | C10 §6 | F1 | I-AUTH, I-L14, I-L20 | D12 impl/evidence not complete; D14 not started; D20 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§6-8` | §8.1 | C10 §6 | F1 | I-AUTH, I-L15, I-L20 | D12 impl/evidence not complete; D15 not started; D20 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§6-9` | §8.1 | C10 §6 | F1 | I-AUTH, I-L15, I-L20 | D12 impl/evidence not complete; D15 not started; D20 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§6-10` | §8.1 | C10 §6 | F1 | I-AUTH, I-L15, I-L20 | D12 impl/evidence not complete; D15 not started; D20 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§6-11` | §8.1 | C10 §6 | F1 | I-AUTH, I-L20 | D12 impl/evidence not complete; D20 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§6-12` | §8.1 | C10 §6 | F1 | I-AUTH, I-L20 | D12 impl/evidence not complete; D20 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§6-13` | §8.1 | C10 §6 | F1 | I-NONE | none external | Low | V-NEG | — | PASS |
| `10-§7-2` | §8.5 | C10 §7 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§7-3` | §8.5 | C10 §7 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§7-4` | §8.5 | C10 §7 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§7-5` | §8.5 | C10 §7 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§7-6` | §8.1 | C10 §7 | F1 | I-AUTH, I-L14 | D12 impl/evidence not complete; D14 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§8-1` | §8.4 | C10 §8 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§8-2` | §8.4 | C10 §8 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§8-3` | §8.4 | C10 §8 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§8-4` | §8.4 | C10 §8 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `10-§9-3` | §8.5 | C10 §9 | F5 | I-AUTH, I-L15 | D12 impl/evidence not complete; D15 not started | High | V-NEG | SP-1 | BLOCKED |
| `10-§10-2` | §8.9 | C10 §10 | F9 | I-AUTH, I-L14 | D12 impl/evidence not complete; D14 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§10-6` | §8.9 | C10 §10 | F9 | I-AUTH, I-L14 | D12 impl/evidence not complete; D14 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§10-8` | §8.9 | C10 §10 | F9 | I-NONE | none external | Low | V-TEST | — | PASS |
| `10-§11-1` | §8.7 | C10 §11 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `10-§11-2` | §8.7 | C10 §11 | F7 | I-AUTH, I-CMD, I-VOICE | D12 impl/evidence not complete; DV gate not activated; DTX FPDR-1, not built | High | V-TEST | SP-1, SP-3 | BLOCKED |
| `10-§11-3` | §8.7 | C10 §11 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `10-§11-5` | §8.7 | C10 §11 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `10-§11-6` | §8.7 | C10 §11 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `10-§11-7` | §8.7 | C10 §11 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `10-§11-8` | §8.7 | C10 §11 | F7 | I-VOICE | DV gate not activated | Medium | V-NEG | SP-3 | FOLLOW-UP |
| `10-§12-1` | §8.2 | C10 §12 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `10-§12-2` | §8.2 | C10 §12 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `10-§12-3` | §8.2 | C10 §12 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `10-§13-1` | §8.5 | C10 §13 | F5 | I-AUTH, I-CMD | D12 impl/evidence not complete; DTX FPDR-1, not built | High | V-TEST | SP-1 | BLOCKED |
| `10-§13-2` | §8.5 | C10 §13 | F5 | I-AUTH, I-CMD | D12 impl/evidence not complete; DTX FPDR-1, not built | High | V-TEST | SP-1 | BLOCKED |
| `10-§13-8` | §8.5 | C10 §13 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§13-9` | §8.5 | C10 §13 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§13-10` | §8.5 | C10 §13 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§13-11` | §8.5 | C10 §13 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§13-12` | §8.5 | C10 §13 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `10-§14-1` | §8.10 | C10 §14 | F10 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `10-§15-1` | §8.4 | C10 §15 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-DES | SP-1 | BLOCKED |
| `10-§15-2` | §8.4 | C10 §15 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§15-3` | §8.4 | C10 §15 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§15-4` | §8.4 | C10 §15 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§15-5` | §8.4 | C10 §15 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§15-6` | §8.4 | C10 §15 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§15-7` | §8.4 | C10 §15 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `10-§16-1` | §8.1 | C10 §16 | F1 | I-NONE | none external | Low | V-NEG | — | PASS |
| `10-§16-2` | §8.1 | C10 §16 | F1 | I-POLICY | DUF6 open, off critical path | Low | V-TEST | — | FOLLOW-UP |
| `10-§16-3` | §8.1 | C10 §16 | F1 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§16-4` | §8.1 | C10 §16 | F1 | I-L14 | D14 not started | Low | V-TEST | — | FOLLOW-UP |
| `10-§16-5` | §8.1 | C10 §16 | F1 | I-L14 | D14 not started | Low | V-TEST | — | FOLLOW-UP |
| `10-§16-6` | §8.1 | C10 §16 | F1 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§16-7` | §8.1 | C10 §16 | F1 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1 | BLOCKED |
| `10-§16-8` | §8.1 | C10 §16 | F1 | I-NONE | none external | Low | V-NEG | — | PASS |
| `10-§17-1` | §8.2 | C10 §17 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `10-§17-2` | §8.2 | C10 §17 | F2 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `10-§17-3` | §8.2 | C10 §17 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `10-§17-6` | §8.2 | C10 §17 | F2 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `10-§17-7` | §8.2 | C10 §17 | F2 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `10-§17-8` | §8.5 | C10 §17 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§17-9` | §8.5 | C10 §17 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `10-§18-1` | §8.10 | C10 §18 | F10 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `10-§18-2` | §8.10 | C10 §18 | F10 | I-NONE | none external | Medium | V-TEST | SP-2 | PASS |
| `10-§18-3` | §8.10 | C10 §18 | F10 | I-NONE | none external | Medium | V-TEST | SP-2 | PASS |
| `10-§18-4` | §8.10 | C10 §18 | F10 | I-NONE | none external | Medium | V-TEST | SP-2 | PASS |
| `10-§18-5` | §8.10 | C10 §18 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `10-§18-6` | §8.10 | C10 §18 | F10 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `10-§18-7` | §8.10 | C10 §18 | F10 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1, SP-2 | BLOCKED |
| `10-§18-8` | §8.10 | C10 §18 | F10 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `10-§18-9` | §8.10 | C10 §18 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `10-§18-10` | §8.10 | C10 §18 | F10 | I-NONE | none external | Medium | V-TEST | SP-2 | PASS |
| `10-§18-12` | §8.10 | C10 §18 | F10 | I-NONE | none external | Medium | V-TEST | SP-2 | PASS |
| `10-§18-13` | §8.10 | C10 §18 | F10 | I-NONE | none external | Medium | V-DES | SP-2 | PASS |
| `10-§19-1` | §8.4 | C10 §19 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `10-§19-2` | §8.4 | C10 §19 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `10-§19-3` | §8.4 | C10 §19 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `10-§19-4` | §8.4 | C10 §19 | F4 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | High | V-NEG | SP-1, SP-3 | BLOCKED |
| `10-§19-5` | §8.4 | C10 §19 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `10-§19-6` | §8.4 | C10 §19 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `10-§19-7` | §8.4 | C10 §19 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `10-§20-1` | §8.1 | C10 §20 | F1 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `10-§20-2` | §8.1 | C10 §20 | F1 | I-NONE | none external | Low | V-TEST | — | PASS |
| `10-§20-3` | §8.1 | C10 §20 | F1 | I-NONE | none external | High | V-TEST | SP-1 | PASS |
| `10-§20-4` | §8.1 | C10 §20 | F1 | I-NONE | none external | Low | V-TEST | — | PASS |
| `10-§20-5` | §8.1 | C10 §20 | F1 | I-AUTH | D12 impl/evidence not complete | Medium | V-NEG | SP-1 | BLOCKED |
| `10-§20-6` | §8.1 | C10 §20 | F1 | I-NONE | none external | Low | V-TEST | — | PASS |
| `10-§22-1` | §8.12 | C10 §22 | F12 | I-NONE | none external | Low | V-NEG | — | PASS |
| `10-§22-2` | §8.12 | C10 §22 | F12 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `10-§22-3` | §8.12 | C10 §22 | F12 | I-NONE | none external | Low | V-NEG | — | PASS |
| `10-§22-4` | §8.12 | C10 §22 | F12 | I-NONE | none external | Low | V-NEG | SP-1 | PASS |
| `10-§22-5` | §8.12 | C10 §22 | F12 | I-NONE | none external | Low | V-NEG | — | PASS |
| `10-§22-6` | §8.12 | C10 §22 | F12 | I-NONE | none external | Low | V-NEG | — | PASS |
| `10-§23-1` | §8.5 | C10 §23 | F5 | I-AI, I-AUTH, I-CMD | D12 impl/evidence not complete; DTX FPDR-1, not built; DAI unverified | High | V-ACC | SP-1, SP-2 | BLOCKED |
| `10-§23-2` | §8.7 | C10 §23 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-ACC | SP-1, SP-3 | BLOCKED |
| `10-§23-3a` | §8.9 | C10 §23 | F9 | I-AUTH, I-L14 | D12 impl/evidence not complete; D14 not started | Medium | V-ACC | SP-1 | BLOCKED |
| `10-§23-5` | §8.4 | C10 §23 | F4 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-ACC | SP-1, SP-2 | BLOCKED |
| `10-§23-7` | §8.10 | C10 §23 | F10 | I-AUTH | D12 impl/evidence not complete | Medium | V-ACC | SP-1, SP-2 | BLOCKED |
| `10-§23-8` | §8.5 | C10 §23 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-ACC | SP-1 | BLOCKED |
| `10-§23-9` | §8.5 | C10 §23 | F5 | I-AUTH, I-CMD | D12 impl/evidence not complete; DTX FPDR-1, not built | High | V-ACC | SP-1 | BLOCKED |
| `10-§23-10` | §8.4 | C10 §23 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-ACC | SP-1 | BLOCKED |
| `12-§3-1` | §8.7 | C12 §3 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§4-1` | §8.7 | C12 §4 | F7 | I-AUTH, I-CMD, I-L14, I-VOICE, I-FPDR5 | D12 impl/evidence not complete; DV gate not activated; DTX FPDR-1, not built; D14 not started | High | V-TEST | SP-1, SP-2, SP-3 | BLOCKED (FPDR-2: credit/repayment portion also blocked on D14) |
| `12-§4-6` | §8.7 | C12 §4 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§4-7` | §8.7 | C12 §4 | F7 | I-AUTH, I-VOICE | D12 impl/evidence not complete; DV gate not activated | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§4-8` | §8.7 | C12 §4 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§4-9` | §8.7 | C12 §4 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `12-§6-1` | §8.7 | C12 §6 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§6-2` | §8.7 | C12 §6 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `12-§6-3` | §8.7 | C12 §6 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `12-§6-4` | §8.7 | C12 §6 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `12-§6-5` | §8.7 | C12 §6 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `12-§6-6` | §8.7 | C12 §6 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§7-1` | §8.7 | C12 §7 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§7-2` | §8.7 | C12 §7 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§7-3` | §8.7 | C12 §7 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§7-4` | §8.7 | C12 §7 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§7-5` | §8.7 | C12 §7 | F7 | I-VOICE, I-FPDR5 | DV gate not activated | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `12-§7-6` | §8.7 | C12 §7 | F7 | I-L14, I-VOICE, I-FPDR5 | DV gate not activated; D14 not started | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP (FPDR-2: credit/repayment portion also blocked on D14) |
| `12-§7-8` | §8.7 | C12 §7 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§7-9` | §8.7 | C12 §7 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§7-10` | §8.7 | C12 §7 | F7 | I-VOICE | DV gate not activated | Medium | V-NEG | SP-3 | FOLLOW-UP |
| `12-§8-1` | §8.7 | C12 §8 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§8-2` | §8.7 | C12 §8 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§8-3` | §8.7 | C12 §8 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§8-5` | §8.7 | C12 §8 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§9-1` | §8.7 | C12 §9 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `12-§9-2` | §8.7 | C12 §9 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `12-§9-3` | §8.7 | C12 §9 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `12-§11-1` | §8.7 | C12 §11 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§11-2` | §8.7 | C12 §11 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§11-3` | §8.7 | C12 §11 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§11-4` | §8.7 | C12 §11 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§11-5` | §8.7 | C12 §11 | F7 | I-AUTH, I-L14, I-VOICE | D12 impl/evidence not complete; DV gate not activated; D14 not started | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§11-7` | §8.7 | C12 §11 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§11-8` | §8.7 | C12 §11 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§11-9` | §8.7 | C12 §11 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§13-3` | §8.7 | C12 §13 | F7 | I-VOICE | DV gate not activated | Medium | V-NEG | SP-3 | FOLLOW-UP |
| `12-§14-1` | §8.7 | C12 §14 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§14-2` | §8.7 | C12 §14 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§14-3` | §8.7 | C12 §14 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§14-4` | §8.7 | C12 §14 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-NEG | SP-1, SP-3 | BLOCKED |
| `12-§15-1` | §8.7 | C12 §15 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§15-2` | §8.7 | C12 §15 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§15-3` | §8.7 | C12 §15 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§15-4` | §8.7 | C12 §15 | F7 | I-AUTH, I-L14, I-POLICY, I-VOICE | D12 impl/evidence not complete; DV gate not activated; D14 not started; DUF6 open, off critical path | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§15-5` | §8.7 | C12 §15 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-NEG | SP-1, SP-3 | BLOCKED |
| `12-§16-1` | §8.7 | C12 §16 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§16-2` | §8.7 | C12 §16 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§16-3` | §8.7 | C12 §16 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§16-4` | §8.7 | C12 §16 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§16-5` | §8.7 | C12 §16 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§16-6` | §8.7 | C12 §16 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§16-7` | §8.7 | C12 §16 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§16-8` | §8.7 | C12 §16 | F7 | I-L14, I-VOICE | DV gate not activated; D14 not started | Medium | V-NEG | SP-3 | FOLLOW-UP |
| `12-§17-1` | §8.7 | C12 §17 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§17-2` | §8.7 | C12 §17 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§17-3` | §8.7 | C12 §17 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§17-4` | §8.7 | C12 §17 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§17-5` | §8.7 | C12 §17 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§17-6` | §8.7 | C12 §17 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§17-7` | §8.7 | C12 §17 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§17-8` | §8.7 | C12 §17 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | High | V-TEST | SP-1, SP-3 | BLOCKED |
| `12-§17-9` | §8.7 | C12 §17 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§17-10` | §8.7 | C12 §17 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§17-11` | §8.7 | C12 §17 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§17-12` | §8.7 | C12 §17 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§17-13` | §8.7 | C12 §17 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§17-14` | §8.7 | C12 §17 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§17-15` | §8.7 | C12 §17 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§18-1` | §8.7 | C12 §18 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `12-§18-2` | §8.7 | C12 §18 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `12-§18-3` | §8.7 | C12 §18 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-NEG | SP-1, SP-3 | BLOCKED |
| `12-§20-1` | §8.7 | C12 §20 | F7 | I-VOICE | DV gate not activated | Medium | V-NEG | SP-3 | FOLLOW-UP |
| `12-§20-2` | §8.7 | C12 §20 | F7 | I-VOICE | DV gate not activated | Medium | V-NEG | SP-3 | FOLLOW-UP |
| `12-§20-3` | §8.7 | C12 §20 | F7 | I-VOICE | DV gate not activated | Medium | V-NEG | SP-3 | FOLLOW-UP |
| `12-§20-4` | §8.7 | C12 §20 | F7 | I-VOICE | DV gate not activated | Medium | V-NEG | SP-3 | FOLLOW-UP |
| `12-§20-5` | §8.7 | C12 §20 | F7 | I-VOICE | DV gate not activated | Medium | V-NEG | SP-3 | FOLLOW-UP |
| `12-§20-6` | §8.7 | C12 §20 | F7 | I-VOICE | DV gate not activated | Medium | V-NEG | SP-3 | FOLLOW-UP |
| `12-§21-1` | §8.7 | C12 §21 | F7 | I-AUTH, I-CMD, I-L14, I-VOICE, I-FPDR5 | D12 impl/evidence not complete; DV gate not activated; DTX FPDR-1, not built; D14 not started | High | V-ACC | SP-1, SP-2, SP-3 | BLOCKED (FPDR-2: credit/repayment portion also blocked on D14) |
| `12-§21-2` | §8.7 | C12 §21 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-ACC | SP-2, SP-3 | FOLLOW-UP |
| `12-§21-7` | §8.7 | C12 §21 | F7 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-ACC | SP-2, SP-3 | FOLLOW-UP |
| `12-§21-8` | §8.7 | C12 §21 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-ACC | SP-1, SP-3 | BLOCKED |
| `12-§21-9` | §8.7 | C12 §21 | F7 | I-AUTH, I-CMD, I-VOICE | DV gate not activated; D12 impl/evidence not complete; DTX FPDR-1, not built | High | V-ACC | SP-1, SP-3 | BLOCKED |
| `12-§21-10` | §8.7 | C12 §21 | F7 | I-VOICE | DV gate not activated | Medium | V-ACC | SP-3 | FOLLOW-UP |
| `12-§21-12` | §8.7 | C12 §21 | F7 | I-AUTH, I-VOICE | DV gate not activated; D12 impl/evidence not complete | Medium | V-ACC | SP-1, SP-3 | BLOCKED |
| `8-§3-1` | §8.8 | C8 §3 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§3-2` | §8.8 | C8 §3 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§3-3` | §8.8 | C8 §3 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§3-4` | §8.8 | C8 §3 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§3-5` | §8.8 | C8 §3 | F8 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `8-§3-8` | §8.8 | C8 §3 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§4-1` | §8.8 | C8 §4 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§5-1` | §8.8 | C8 §5 | F8 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `8-§5-2` | §8.8 | C8 §5 | F8 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `8-§5-3` | §8.8 | C8 §5 | F8 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `8-§6-1` | §8.8 | C8 §6 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§6-2` | §8.8 | C8 §6 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§6-3` | §8.8 | C8 §6 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§6-4` | §8.8 | C8 §6 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§6-5` | §8.8 | C8 §6 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§7-1` | §8.8 | C8 §7 | F8 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `8-§7-2` | §8.8 | C8 §7 | F8 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `8-§7-3` | §8.8 | C8 §7 | F8 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `8-§7-6` | §8.8 | C8 §7 | F8 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `8-§7-7` | §8.8 | C8 §7 | F8 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `8-§7-8` | §8.8 | C8 §7 | F8 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `8-§7-9` | §8.8 | C8 §7 | F8 | I-AUTH | D12 impl/evidence not complete | Medium | V-NEG | SP-1, SP-2 | BLOCKED |
| `8-§7-10` | §8.8 | C8 §7 | F8 | I-AUTH | D12 impl/evidence not complete | Medium | V-NEG | SP-1, SP-2 | BLOCKED |
| `8-§7-11` | §8.8 | C8 §7 | F8 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `8-§7-12` | §8.8 | C8 §7 | F8 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `8-§11-1` | §8.8 | C8 §11 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§11-2` | §8.8 | C8 §11 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§11-4` | §8.8 | C8 §11 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§11-5` | §8.8 | C8 §11 | F8 | I-NONE | none external | Low | V-DES | SP-2 | PASS |
| `8-§12-1` | §8.8 | C8 §12 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§12-5` | §8.8 | C8 §12 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§13-1` | §8.8 | C8 §13 | F8 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `8-§15-1` | §8.8 | C8 §15 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§15-2` | §8.8 | C8 §15 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§15-3` | §8.8 | C8 §15 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§15-4` | §8.8 | C8 §15 | F8 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `8-§15-6` | §8.8 | C8 §15 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§15-7` | §8.8 | C8 §15 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§15-10` | §8.8 | C8 §15 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `8-§15-11` | §8.8 | C8 §15 | F8 | I-L19 | D19 not started | Low | V-TEST | SP-2 | FOLLOW-UP |
| `8-§16-1` | §8.8 | C8 §16 | F8 | I-NONE | none external | Low | V-ACC | SP-2 | PASS |
| `8-§16-2` | §8.8 | C8 §16 | F8 | I-AI | DAI unverified | Medium | V-ACC | SP-2 | FOLLOW-UP |
| `8-§16-3` | §8.8 | C8 §16 | F8 | I-AI | DAI unverified | Medium | V-ACC | SP-2 | FOLLOW-UP |
| `8-§16-4` | §8.8 | C8 §16 | F8 | I-NONE | none external | Low | V-ACC | SP-2 | PASS |
| `8-§16-5` | §8.8 | C8 §16 | F8 | I-AI | DAI unverified | Medium | V-ACC | SP-2 | FOLLOW-UP |
| `8-§16-9` | §8.8 | C8 §16 | F8 | I-NONE | none external | Low | V-ACC | SP-2 | PASS |
| `8-§17-2` | §8.8 | C8 §17 | F8 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `8-§17-3` | §8.8 | C8 §17 | F8 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `8-§17-4` | §8.8 | C8 §17 | F8 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `8-§17-6` | §8.8 | C8 §17 | F8 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `22-§4-2` | §8.1 | C22 §4 | F1 | I-NONE | none external | Low | V-NEG | — | PASS |
| `22-§7-1` | §8.3 | C22 §7 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `22-§7-2` | §8.3 | C22 §7 | F3 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `22-§7-3` | §8.3 | C22 §7 | F3 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `22-§7-4` | §8.3 | C22 §7 | F3 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `22-§7-5` | §8.3 | C22 §7 | F3 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `22-§7-6` | §8.3 | C22 §7 | F3 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `22-§7-7` | §8.3 | C22 §7 | F3 | I-AUTH, I-L14 | D12 impl/evidence not complete; D14 not started | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `22-§7-8` | §8.3 | C22 §7 | F3 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `22-§7-9` | §8.3 | C22 §7 | F3 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `22-§7-10` | §8.3 | C22 §7 | F3 | I-AI | DAI unverified | Medium | V-DES | SP-2 | FOLLOW-UP |
| `22-§8-1` | §8.2 | C22 §8 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `22-§8-2` | §8.2 | C22 §8 | F2 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `22-§8-3` | §8.2 | C22 §8 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `22-§8-4` | §8.2 | C22 §8 | F2 | I-AI, I-VOICE | DV gate not activated; DAI unverified | Medium | V-TEST | SP-2, SP-3 | FOLLOW-UP |
| `22-§8-5` | §8.2 | C22 §8 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `22-§8-6` | §8.2 | C22 §8 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `22-§8-7` | §8.2 | C22 §8 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `22-§17` | §8.3 | C22 §17 | F3 | I-AI, I-VOICE | DAI unverified; DV gate not activated | Medium | V-DES | SP-2, SP-3 | FOLLOW-UP |
| `22-§19-1` | §8.10 | C22 §19 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `22-§19-2` | §8.10 | C22 §19 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `22-§19-3` | §8.10 | C22 §19 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `22-§19-4` | §8.10 | C22 §19 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `22-§19-5` | §8.10 | C22 §19 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `22-§19-6` | §8.10 | C22 §19 | F10 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `22-§19-7` | §8.10 | C22 §19 | F10 | I-AI | DAI unverified | Medium | V-DES | SP-2 | FOLLOW-UP |
| `22-§21` | §8.11 | C22 §21 | F11 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `22-§22-1` | §8.11 | C22 §22 | F11 | I-NONE | none external | Low | V-TEST | — | PASS |
| `22-§22-2` | §8.11 | C22 §22 | F11 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1 | BLOCKED |
| `22-§22-3` | §8.11 | C22 §22 | F11 | I-NONE | none external | Low | V-TEST | — | PASS |
| `22-§22-4` | §8.11 | C22 §22 | F11 | I-NONE | none external | Low | V-TEST | — | PASS |
| `22-§22-5` | §8.11 | C22 §22 | F11 | I-NONE | none external | Low | V-TEST | — | PASS |
| `22-§22-6` | §8.11 | C22 §22 | F11 | I-NONE | none external | Low | V-NEG | — | PASS |
| `22-§23-2` | §8.4 | C22 §23 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `22-§23-3` | §8.4 | C22 §23 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `22-§23-5` | §8.4 | C22 §23 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `22-§23-7` | §8.4 | C22 §23 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `22-§24-1` | §8.3 | C22 §24 | F3 | I-AI, I-AUTH, I-L14 | D12 impl/evidence not complete; D14 not started; DAI unverified | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `22-§24-2` | §8.4 | C22 §24 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-NEG | SP-1 | BLOCKED |
| `22-§24-3` | §8.4 | C22 §24 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-TEST | SP-1 | BLOCKED |
| `22-§27-1` | §8.11 | C22 §27 | F11 | I-NONE | none external | Low | V-TEST | — | PASS |
| `22-§27-2` | §8.11 | C22 §27 | F11 | I-NONE | none external | Low | V-TEST | — | PASS |
| `22-§27-3` | §8.11 | C22 §27 | F11 | I-NONE | none external | Low | V-TEST | — | PASS |
| `22-§27-4` | §8.11 | C22 §27 | F11 | I-NONE | none external | Low | V-TEST | — | PASS |
| `22-§27-5` | §8.11 | C22 §27 | F11 | I-NONE | none external | Low | V-TEST | — | PASS |
| `22-§27-6` | §8.11 | C22 §27 | F11 | I-NONE | none external | Low | V-TEST | — | PASS |
| `22-§27-7` | §8.11 | C22 §27 | F11 | I-NONE | none external | Low | V-TEST | — | PASS |
| `22-§28-1` | §8.12 | C22 §28 | F12 | I-NONE | none external | Low | V-NEG | — | PASS |
| `22-§28-2` | §8.12 | C22 §28 | F12 | I-NONE | none external | Low | V-NEG | SP-1 | PASS |
| `22-§28-3` | §8.12 | C22 §28 | F12 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `22-§28-4` | §8.12 | C22 §28 | F12 | I-NONE | none external | Low | V-NEG | — | PASS |
| `22-§28-5` | §8.12 | C22 §28 | F12 | I-NONE | none external | Low | V-NEG | — | PASS |
| `22-§28-6` | §8.12 | C22 §28 | F12 | I-NONE | none external | Low | V-NEG | — | PASS |
| `22-§28-7` | §8.12 | C22 §28 | F12 | I-NONE | none external | Low | V-NEG | — | PASS |
| `22-§28-8` | §8.12 | C22 §28 | F12 | I-NONE | none external | Low | V-NEG | — | PASS |
| `22-§28-9` | §8.12 | C22 §28 | F12 | I-NONE | none external | Low | V-NEG | SP-1, SP-2 | PASS |
| `22-§28-10` | §8.12 | C22 §28 | F12 | I-NONE | none external | Low | V-NEG | — | PASS |
| `22-§29-1` | §8.3 | C22 §29 | F3 | I-AUTH, I-L14, I-L20 | D12 impl/evidence not complete; D14 not started; D20 not started | Medium | V-ACC | SP-1, SP-2 | BLOCKED |
| `22-§29-2` | §8.3 | C22 §29 | F3 | I-AI, I-AUTH, I-L20 | D12 impl/evidence not complete; DAI unverified; D20 not started | Medium | V-ACC | SP-1, SP-2 | BLOCKED |
| `22-§29-3` | §8.4 | C22 §29 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-ACC | SP-1 | BLOCKED |
| `22-§29-7` | §8.5 | C22 §29 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-ACC | SP-1 | BLOCKED |
| `22-§29-8` | §8.5 | C22 §29 | F5 | I-AUTH, I-CMD | D12 impl/evidence not complete; DTX FPDR-1, not built | High | V-ACC | SP-1 | BLOCKED |
| `22-§29-10` | §8.10 | C22 §29 | F10 | I-AI, I-VOICE | DAI unverified; DV gate not activated | Medium | V-ACC | SP-2, SP-3 | FOLLOW-UP |
| `22-§29-12` | §8.6 | C22 §29 | F6 | I-AUTH | D12 impl/evidence not complete | High | V-ACC | SP-1 | BLOCKED |
| `22-§29-13` | §8.10 | C22 §29 | F10 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-ACC | SP-1, SP-2 | BLOCKED |
| `22-§29-14` | §8.11 | C22 §29 | F11 | I-NONE | none external | Low | V-ACC | — | PASS |
| `17-§5-1` | §8.1 | C17 §5 | F1 | I-NONE | none external | Low | V-TEST | — | PASS |
| `17-§5-2` | §8.1 | C17 §5 | F1 | I-NONE | none external | Low | V-NEG | — | PASS |
| `17-§5-3` | §8.1 | C17 §5 | F1 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1 | BLOCKED |
| `17-§5-4` | §8.1 | C17 §5 | F1 | I-AUTH, I-L14 | D12 impl/evidence not complete; D14 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `17-§5-5` | §8.1 | C17 §5 | F1 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1 | BLOCKED |
| `17-§5-6` | §8.1 | C17 §5 | F1 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `17-§5-7` | §8.5 | C17 §5 | F5 | I-AUTH, I-CMD | D12 impl/evidence not complete; DTX FPDR-1, not built | High | V-TEST | SP-1 | BLOCKED |
| `17-§5-8` | §8.1 | C17 §5 | F1 | I-AUTH, I-L14, I-L15 | D12 impl/evidence not complete; D14 not started; D15 not started | Medium | V-TEST | SP-1 | BLOCKED |
| `17-§22-4` | §8.1 | C17 §22 | F1 | I-AUTH, I-L14 | D12 impl/evidence not complete; D14 not started | Medium | V-ACC | SP-1 | BLOCKED |
| `17-§22-8` | §8.1 | C17 §22 | F1 | I-NONE | none external | Low | V-ACC | — | PASS |
| `20-§14-1` | §8.2 | C20 §14 | F2 | I-AI, I-L19 | DAI unverified; D19 not started | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `20-§14-2` | §8.2 | C20 §14 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `20-§14-3` | §8.2 | C20 §14 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `20-§14-4` | §8.2 | C20 §14 | F2 | I-AI | DAI unverified | Medium | V-TEST | SP-2 | FOLLOW-UP |
| `20-§15-3` | §8.1 | C20 §15 | F1 | I-NONE | none external | Low | V-TEST | — | PASS |
| `7-§11-2` | §8.4 | C7 §11 | F4 | I-AUTH, I-LATER | D12 impl/evidence not complete; D17 not started | High | V-NEG | SP-1 | BLOCKED |
| `BP-§5.4-1` | §8.7 | BP §5.4 | F7 | I-VOICE | DV gate not activated | Medium | V-TEST | SP-3 | FOLLOW-UP |
| `BP-§6.2-1` | §8.5 | BP §6.2 | F5 | I-AUTH, I-CMD | D12 impl/evidence not complete; DTX FPDR-1, not built | High | V-DES | SP-1 | BLOCKED |
| `BP-§6.2-2` | §8.5 | BP §6.2 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-DES | SP-1 | BLOCKED |
| `BP-§6.4-1` | §8.3 | BP §6.4 | F3 | I-AUTH, I-L14 | D12 impl/evidence not complete; D14 not started | Medium | V-DES | SP-1, SP-2 | BLOCKED |
| `BP-§6.4-2` | §8.3 | BP §6.4 | F3 | I-AUTH | D12 impl/evidence not complete | Medium | V-DES | SP-1, SP-2 | BLOCKED |
| `BP-§6.4-3` | §8.3 | BP §6.4 | F3 | I-AI | DAI unverified | Medium | V-DES | SP-2 | FOLLOW-UP |
| `BP-§6.4-4` | §8.3 | BP §6.4 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-DES | SP-1, SP-2 | BLOCKED |
| `BP-§6.4-5` | §8.3 | BP §6.4 | F3 | I-AI | DAI unverified | Medium | V-DES | SP-2 | FOLLOW-UP |
| `BP-§6.4-6` | §8.3 | BP §6.4 | F3 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-DES | SP-1, SP-2 | BLOCKED |
| `BP-§6.4-7` | §8.3 | BP §6.4 | F3 | I-AUTH | D12 impl/evidence not complete | Medium | V-DES | SP-1, SP-2 | BLOCKED |
| `BP-§6.4-8` | §8.3 | BP §6.4 | F3 | I-AUTH, I-CMD | D12 impl/evidence not complete; DTX FPDR-1, not built | High | V-DES | SP-1, SP-2 | BLOCKED |
| `BP-§6.4-9` | §8.3 | BP §6.4 | F3 | I-AUTH, I-L14, I-VOICE | D12 impl/evidence not complete; DV gate not activated; D14 not started | Medium | V-DES | SP-1, SP-2, SP-3 | BLOCKED |
| `BP-§6.4-10` | §8.3 | BP §6.4 | F3 | I-AUTH | D12 impl/evidence not complete | Medium | V-DES | SP-1, SP-2 | BLOCKED |
| `BP-§6.6-1` | §8.3 | BP §6.6 | F3 | I-NONE | none external | Low | V-DES | SP-2 | PASS |
| `BP-§8.3-1` | §8.1 | BP §8.3 | F1 | I-NONE | none external | Low | V-DES | — | PASS |
| `BP-§8.4-1` | §8.3 | BP §8.4 | F3 | I-NONE | none external | Low | V-DES | SP-2 | PASS |
| `BP-§8.4-2` | §8.10 | BP §8.4 | F10 | I-AUTH | D12 impl/evidence not complete | Medium | V-TEST | SP-1, SP-2 | BLOCKED |
| `BP-§8.4-3` | §8.3 | BP §8.4 | F3 | I-NONE | none external | Low | V-DES | SP-2 | PASS |
| `BP-§10.2-W1` | §8.1 | BP §10.2 | F1 | I-AUTH | D12 impl/evidence not complete | Medium | V-EVM | SP-1 | BLOCKED |
| `BP-§10.2-W2` | §8.2 | BP §10.2 | F2 | I-NONE | none external | Low | V-EVM | SP-2 | PASS |
| `BP-§10.2-W3` | §8.1 | BP §10.2 | F1 | I-AUTH | D12 impl/evidence not complete | Medium | V-EVM | SP-1 | BLOCKED |
| `BP-§10.2-W4` | §8.7 | BP §10.2 | F7 | I-AUTH, I-VOICE | D12 impl/evidence not complete; DV gate not activated | Medium | V-EVM | SP-1, SP-3 | BLOCKED |
| `BP-§10.2-W5` | §8.3 | BP §10.2 | F3 | I-AI | DAI unverified | Medium | V-EVM | SP-2 | FOLLOW-UP |
| `BP-§10.2-W6` | §8.5 | BP §10.2 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-EVM | SP-1 | BLOCKED |
| `BP-§10.2-W7` | §8.4 | BP §10.2 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-EVM | SP-1 | BLOCKED |
| `BP-§10.2-W8` | §8.5 | BP §10.2 | F5 | I-AUTH | D12 impl/evidence not complete | High | V-EVM | SP-1 | BLOCKED |
| `BP-§10.2-W9` | §8.5 | BP §10.2 | F5 | I-AUTH, I-CMD | D12 impl/evidence not complete; DTX FPDR-1, not built | High | V-EVM | SP-1 | BLOCKED |
| `BP-§10.2-W10` | §8.6 | BP §10.2 | F6 | I-AUTH | D12 impl/evidence not complete | High | V-EVM | SP-1 | BLOCKED |
| `BP-§10.2-W11` | §8.9 | BP §10.2 | F9 | I-AUTH, I-L14 | D12 impl/evidence not complete; D14 not started | Medium | V-EVM | SP-1 | BLOCKED |
| `BP-§10.2-W12` | §8.8 | BP §10.2 | F8 | I-NONE | none external | Low | V-EVM | SP-2 | PASS |
| `BP-§10.2-W13` | §8.10 | BP §10.2 | F10 | I-AI | DAI unverified | Medium | V-EVM | SP-2 | FOLLOW-UP |
| `BP-§10.2-I1` | §8.7 | BP §10.2 | F7 | I-VOICE | DV gate not activated | Medium | V-DES | SP-3 | FOLLOW-UP |
| `BP-§10.2-E1` | §8.1 | BP §10.2 | F1 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | Medium | V-EVM | SP-1, SP-2 | BLOCKED |
| `BP-§10.2-E2` | §8.2 | BP §10.2 | F2 | I-AI | DAI unverified | Medium | V-EVM | SP-2 | FOLLOW-UP |
| `BP-§10.2-E3` | §8.4 | BP §10.2 | F4 | I-AUTH | D12 impl/evidence not complete | High | V-EVM | SP-1 | BLOCKED |
| `BP-§10.2-E4` | §8.1 | BP §10.2 | F1 | I-NONE | none external | Low | V-EVM | — | PASS |
| `BP-§10.2-E5` | §8.10 | BP §10.2 | F10 | I-AUTH | D12 impl/evidence not complete | Medium | V-EVM | SP-1, SP-2 | BLOCKED |
| `BP-§10.2-SA1` | §8.5 | BP §10.2 | F5 | I-AI, I-AUTH, I-CMD | D12 impl/evidence not complete; DTX FPDR-1, not built; DAI unverified | High | V-FRV | SP-1, SP-2 | BLOCKED |
| `BP-§10.2-SA2` | §8.4 | BP §10.2 | F4 | I-AI, I-AUTH | D12 impl/evidence not complete; DAI unverified | High | V-FRV | SP-1, SP-2 | BLOCKED |
| `BP-§10.2-SB` | §8.10 | BP §10.2 | F10 | I-AUTH | D12 impl/evidence not complete | High | V-FRV | SP-1, SP-2 | BLOCKED |
| `BP-§11-1` | §8.3 | BP §11 | F3 | I-NONE | none external | Low | V-DES | SP-2 | PASS |
| `BP-§12-1` | §8.8 | BP §12 | F8 | I-NONE | none external | Low | V-TEST | SP-2 | PASS |
| `BP-§12-3` | §8.8 | BP §12 | F8 | I-NONE | none external | Low | V-NEG | SP-2 | PASS |
| `BP-§13-1` | §8.11 | BP §13 | F11 | I-NONE | none external | Low | V-DES | — | PASS |

### 20.7 Register totals

| Measure | Count |
|---|---|
| Rows with a Stage 7 finding | 651 |
| `BLOCKED` | 252 |
| `FOLLOW-UP` | 271 |
| `PASS` | 128 |
| `NOT APPLICABLE` | 0 |
| Risk High / Medium / Low | 121 / 397 / 133 |
| Held pending a specialist | 598 |
| Not held | 53 |
| Naming S7-SP-1 / S7-SP-2 / S7-SP-3 | 278 / 393 / 122 |

Every `BLOCKED` row is exactly a row carrying `D12`. No row changed disposition, owner, commitment or classification.

## 21. Engineering Questions, Risks & Recommendations

### 21.1 Engineering questions for the EIS

| ID | Question | Source |
|---|---|---|
| EQ-1 | Where exactly does the AI gateway run, and how are streaming, timeouts and request size kept within Worker limits? | B6-03; F3 |
| EQ-2 | Which evaluation corpus and pass thresholds prove English/Malayalam/Manglish behaviour without a fixed accuracy promise (`9-§15-5`)? | B6-04; F2 |
| EQ-3 | Which voice provider, if any, meets the Malayalam/Manglish commitment, and what is its audio retention? | B6-06, B6-10; held for S7-SP-3 |
| EQ-4 | Does the structured `/transactions` page later move onto the `FPDR-1` command? Removing the direct insert grant needs explicit authority because `FPDR-1` is additive | B6-05 |
| EQ-5 | What conversation-history retention default applies to active accounts? | DC-12; open policy dependency |
| EQ-6 | Is the `20260724170000` idempotency fix present in production? Re-verify before relying on the pattern | B6-05; `docs/migration/README.md` |
| EQ-7 | When will the SB-P-1.12 workstreams that SB-P-1.13 consumes be implemented, verified and accepted? | §12.1 |
| EQ-8 | How is CI evidence produced while Actions are impaired? | B6-16 |
| EQ-9 | Which existing, trustworthy context and capability-sensitivity signals drive `FPDR-4`, with no new sensing? | B6-07; MC-08 §4 |
| EQ-10 | What FAQ seed scope satisfies `8-§16-1` to `8-§16-5` without the SB-P-1.19 100+ corpus? | B6-09 |

### 21.2 Engineering risks

| ID | Risk | Level | Mitigation | Held for |
|---|---|---|---|---|
| R7-1 | SB-P-1.12 does not resume; 252 rows stay blocked | High | Documentary work continues; P1 rows proceed only if separately authorized | — |
| R7-2 | A shortcut business lookup or parallel permission path is introduced | High | EIS §19.5 rule in Blueprint §12.1; design review and negative tests | SP-1 |
| R7-3 | Prompt or tool injection widens access | High | Permission outside the model; typed proposals carry no authority | SP-1, SP-2 |
| R7-4 | Duplicate or unknown-outcome writes after retries or timeouts | High | Idempotency key and outcome lookup; no unconfirmed replay | SP-1, SP-2 |
| R7-5 | Provider data handling incompatible with privacy commitments | Medium | Data-control verification gate | SP-2, SP-3 |
| R7-6 | No voice provider meets the language commitment | Medium | Activation gate; Founder escalation if unmet (DC-13) | SP-3 |
| R7-7 | Raw audio retained by Smart Business or provider | Medium | `FPDR-3`; provider retention verification | SP-3 |
| R7-8 | AI answers support questions beyond approved knowledge | Medium | FAQ-first; grounding in trusted, versioned knowledge | SP-2 |
| R7-9 | Credit statements fabricate owed balances | Medium | `FPDR-5` clarification rule | SP-2 |
| R7-10 | Missing CI evidence | Low | Local gates; run-level evidence when available | — |

### 21.3 Recommendations

1. Treat P0 as a hard gate in the Implementation Authorization: no business-scoped build before SB-P-1.12 consumption conditions are met.
2. Build P1 foundations only if Mission Control separately authorizes work that consumes no SB-P-1.12 surface.
3. Run the AI provider data-control and voice-provider evaluations as a separately authorized, read-only readiness step before any activation.
4. Re-verify the idempotency precedent's production state under the existing migration governance before the EIS relies on it.
5. Carry B6-14 into the Verification Checklist and B6-07 into the EIS as boundaries, not new features.

### 21.4 Findings held pending specialists

Every row naming a specialist in Section 20.6 is held until Mission Control dispositions that specialist's report. Stage 6 findings B6-06 and B6-10 are also held (Section 20.5).

| Specialist | Held rows | Row IDs |
|---|---|---|
| S7-SP-1 Security & Permissions | 278 | `24-§5-1`, `24-§5-3`, `24-§7-5`, `24-§9-1`, `24-§9-2`, `24-§10-1`, `24-§10-2`, `24-§10-3`, `24-§10-4`, `24-§10-5`, `24-§10-6`, `24-§10-7`, `24-§10-8`, `24-§10-9`, `24-§10-10`, `24-§10-11`, `24-§11-1`, `24-§11-2`, `24-§11-3`, `24-§11-4`, `24-§11-5`, `24-§11-6`, `24-§11-7`, `24-§11-8`, `24-§11-9`, `24-§11-10`, `24-§13-2`, `24-§15-5`, `24-§17-5`, `24-§20-1`, `24-§20-2`, `24-§20-3`, `24-§20-4`, `24-§20-5`, `24-§20-6`, `24-§20-7`, `24-§20-8`, `24-§20-9`, `24-§20-10`, `24-§21-1`, `24-§21-2`, `24-§21-8`, `24-§21-9`, `24-§21-10`, `24-§22-1`, `24-§22-2`, `24-§22-3`, `24-§22-4`, `24-§22-5`, `24-§22-6`, `24-§22-7`, `24-§22-8`, `24-§23-9`, `24-§23-10`, `24-§23-18`, `24-§24-1`, `24-§24-2`, `24-§24-3`, `24-§24-4`, `24-§24-5`, `24-§24-6`, `24-§24-7`, `24-§24-8`, `24-§24-9`, `24-§24-10`, `24-§25-1`, `24-§25-2`, `24-§25-3`, `24-§25-4`, `24-§25-5`, `24-§25-6`, `24-§25-7`, `24-§25-8`, `24-§25-9`, `24-§26-6`, `24-§27-7`, `24-§27-8`, `24-§27-10`, `24-§28-5`, `24-§28-6`, `24-§28-7`, `24-§28-8`, `24-§28-12`, `24-§29-4`, `24-§29-5`, `24-§30-4`, `24-§30-6`, `24-§31-1`, `24-§31-2`, `24-§31-3`, `24-§31-4`, `24-§31-7`, `24-§31-11`, `24-§31-13`, `24-§31-15`, `9-§4-1`, `9-§8-2`, `9-§9-2`, `9-§9-6`, `9-§10-1`, `9-§10-2`, `9-§10-3`, `9-§11-7`, `9-§13-9`, `9-§13-10`, `9-§16-4`, `9-§17-1`, `9-§17-3`, `9-§17-9`, `9-§17-10`, `9-§19`, `10-§5-8`, `10-§5-9`, `10-§6-1`, `10-§6-2`, `10-§6-3`, `10-§6-4`, `10-§6-5`, `10-§6-7`, `10-§6-8`, `10-§6-9`, `10-§6-10`, `10-§6-11`, `10-§6-12`, `10-§7-2`, `10-§7-3`, `10-§7-4`, `10-§7-5`, `10-§7-6`, `10-§8-1`, `10-§8-2`, `10-§8-3`, `10-§8-4`, `10-§9-3`, `10-§10-2`, `10-§10-6`, `10-§11-1`, `10-§11-2`, `10-§11-5`, `10-§13-1`, `10-§13-2`, `10-§13-8`, `10-§13-9`, `10-§13-10`, `10-§13-11`, `10-§13-12`, `10-§14-1`, `10-§15-1`, `10-§15-2`, `10-§15-3`, `10-§15-4`, `10-§15-5`, `10-§15-6`, `10-§15-7`, `10-§16-3`, `10-§16-6`, `10-§16-7`, `10-§17-2`, `10-§17-6`, `10-§17-7`, `10-§17-8`, `10-§17-9`, `10-§18-1`, `10-§18-6`, `10-§18-7`, `10-§18-8`, `10-§19-1`, `10-§19-2`, `10-§19-3`, `10-§19-4`, `10-§19-5`, `10-§19-6`, `10-§19-7`, `10-§20-3`, `10-§20-5`, `10-§22-4`, `10-§23-1`, `10-§23-2`, `10-§23-3a`, `10-§23-5`, `10-§23-7`, `10-§23-8`, `10-§23-9`, `10-§23-10`, `12-§4-1`, `12-§4-7`, `12-§4-8`, `12-§6-1`, `12-§6-6`, `12-§7-3`, `12-§7-8`, `12-§11-2`, `12-§11-3`, `12-§11-4`, `12-§11-5`, `12-§11-7`, `12-§11-8`, `12-§14-1`, `12-§14-2`, `12-§14-3`, `12-§14-4`, `12-§15-1`, `12-§15-2`, `12-§15-3`, `12-§15-4`, `12-§15-5`, `12-§16-1`, `12-§16-2`, `12-§16-3`, `12-§16-4`, `12-§16-5`, `12-§16-6`, `12-§16-7`, `12-§17-7`, `12-§17-8`, `12-§18-3`, `12-§21-1`, `12-§21-8`, `12-§21-9`, `12-§21-12`, `8-§7-9`, `8-§7-10`, `22-§7-2`, `22-§7-3`, `22-§7-5`, `22-§7-6`, `22-§7-7`, `22-§7-8`, `22-§22-2`, `22-§23-2`, `22-§23-3`, `22-§23-5`, `22-§23-7`, `22-§24-1`, `22-§24-2`, `22-§24-3`, `22-§28-2`, `22-§28-9`, `22-§29-1`, `22-§29-2`, `22-§29-3`, `22-§29-7`, `22-§29-8`, `22-§29-12`, `22-§29-13`, `17-§5-3`, `17-§5-4`, `17-§5-5`, `17-§5-7`, `17-§5-8`, `17-§22-4`, `7-§11-2`, `BP-§6.2-1`, `BP-§6.2-2`, `BP-§6.4-1`, `BP-§6.4-2`, `BP-§6.4-4`, `BP-§6.4-6`, `BP-§6.4-7`, `BP-§6.4-8`, `BP-§6.4-9`, `BP-§6.4-10`, `BP-§8.4-2`, `BP-§10.2-W1`, `BP-§10.2-W3`, `BP-§10.2-W4`, `BP-§10.2-W6`, `BP-§10.2-W7`, `BP-§10.2-W8`, `BP-§10.2-W9`, `BP-§10.2-W10`, `BP-§10.2-W11`, `BP-§10.2-E1`, `BP-§10.2-E3`, `BP-§10.2-E5`, `BP-§10.2-SA1`, `BP-§10.2-SA2`, `BP-§10.2-SB` |
| S7-SP-2 AI Behaviour / Orchestration | 393 | `24-§4-1`, `24-§4-2`, `24-§4-3`, `24-§4-4`, `24-§4-5`, `24-§4-6`, `24-§4-7`, `24-§4-8`, `24-§5-1`, `24-§5-3`, `24-§5-5`, `24-§5-7`, `24-§5-8`, `24-§6-1`, `24-§6-2`, `24-§6-3`, `24-§7-1`, `24-§7-2`, `24-§7-5`, `24-§8-1`, `24-§8-2`, `24-§8-3`, `24-§9-1`, `24-§9-2`, `24-§9-3`, `24-§9-4`, `24-§11-1`, `24-§11-2`, `24-§11-3`, `24-§11-4`, `24-§11-5`, `24-§11-6`, `24-§11-7`, `24-§11-8`, `24-§11-9`, `24-§15-1`, `24-§15-2`, `24-§15-3`, `24-§15-4`, `24-§15-5`, `24-§15-6`, `24-§15-7`, `24-§17-1`, `24-§17-2`, `24-§17-4`, `24-§17-5`, `24-§19-1`, `24-§19-2`, `24-§19-3`, `24-§19-4`, `24-§20-1`, `24-§20-2`, `24-§20-3`, `24-§20-4`, `24-§20-5`, `24-§20-6`, `24-§20-7`, `24-§20-8`, `24-§20-9`, `24-§20-10`, `24-§22-1`, `24-§22-2`, `24-§22-3`, `24-§22-4`, `24-§22-5`, `24-§22-6`, `24-§22-7`, `24-§22-8`, `24-§23-1`, `24-§23-2`, `24-§23-3`, `24-§23-4`, `24-§23-5`, `24-§23-7`, `24-§23-8`, `24-§23-9`, `24-§23-10`, `24-§23-11`, `24-§23-12`, `24-§23-13`, `24-§23-14`, `24-§23-15`, `24-§23-16`, `24-§23-17`, `24-§23-18`, `24-§24-10`, `24-§25-1`, `24-§25-2`, `24-§25-3`, `24-§25-4`, `24-§25-5`, `24-§25-6`, `24-§25-7`, `24-§25-8`, `24-§26-1`, `24-§26-2`, `24-§26-3`, `24-§26-4`, `24-§26-5`, `24-§26-6`, `24-§26-7`, `24-§26-8`, `24-§26-9`, `24-§26-10`, `24-§27-2`, `24-§27-4`, `24-§27-6`, `24-§27-7`, `24-§27-8`, `24-§27-9`, `24-§27-10`, `24-§27-11`, `24-§28-1`, `24-§28-2`, `24-§28-3`, `24-§28-4`, `24-§28-5`, `24-§28-6`, `24-§28-7`, `24-§28-8`, `24-§28-9`, `24-§28-10`, `24-§28-11`, `24-§28-12`, `24-§29-1`, `24-§29-2`, `24-§29-3`, `24-§29-4`, `24-§29-5`, `24-§29-6`, `24-§30-1`, `24-§30-2`, `24-§30-3`, `24-§30-4`, `24-§30-5`, `24-§30-6`, `24-§30-7`, `24-§30-8`, `24-§31-1`, `24-§31-2`, `24-§31-3`, `24-§31-4`, `24-§31-5`, `24-§31-6`, `24-§31-7`, `24-§31-11`, `24-§31-12`, `24-§31-14`, `24-§31-15`, `24-§31-16`, `9-§3-1`, `9-§3-2`, `9-§3-3`, `9-§3-4`, `9-§3-5`, `9-§3-6`, `9-§3-7`, `9-§3-8`, `9-§3-9`, `9-§4-1`, `9-§4-2`, `9-§4-3`, `9-§4-4`, `9-§4-5`, `9-§5-1`, `9-§5-2`, `9-§6-1`, `9-§6-2`, `9-§7-1`, `9-§7-2`, `9-§7-3`, `9-§8-1`, `9-§8-2`, `9-§8-4`, `9-§9-1`, `9-§9-2`, `9-§9-3`, `9-§9-4`, `9-§9-5`, `9-§9-6`, `9-§9-7`, `9-§9-8`, `9-§10-1`, `9-§10-2`, `9-§10-3`, `9-§11-1`, `9-§11-2`, `9-§11-3`, `9-§11-4`, `9-§11-5`, `9-§11-6`, `9-§11-7`, `9-§12-4`, `9-§12-10`, `9-§12-13`, `9-§13-1`, `9-§13-2`, `9-§13-3`, `9-§13-4`, `9-§13-5`, `9-§13-6`, `9-§13-7`, `9-§13-8`, `9-§13-11`, `9-§14-1`, `9-§14-2`, `9-§14-3`, `9-§14-4`, `9-§14-5`, `9-§14-6`, `9-§14-7`, `9-§14-8`, `9-§15-1`, `9-§15-2`, `9-§15-3`, `9-§15-4`, `9-§15-5`, `9-§16-1`, `9-§16-2`, `9-§16-3`, `9-§16-4`, `9-§17-1`, `9-§17-2`, `9-§17-3`, `9-§17-4`, `9-§17-7`, `9-§17-8`, `9-§17-9`, `9-§17-10`, `9-§18-1`, `9-§18-2`, `9-§18-3`, `9-§18-4`, `9-§18-5`, `9-§18-6`, `9-§18-7`, `10-§4-1`, `10-§12-1`, `10-§12-2`, `10-§12-3`, `10-§14-1`, `10-§17-1`, `10-§17-2`, `10-§17-3`, `10-§17-6`, `10-§17-7`, `10-§18-1`, `10-§18-2`, `10-§18-3`, `10-§18-4`, `10-§18-5`, `10-§18-6`, `10-§18-7`, `10-§18-8`, `10-§18-9`, `10-§18-10`, `10-§18-12`, `10-§18-13`, `10-§20-1`, `10-§22-2`, `10-§23-1`, `10-§23-5`, `10-§23-7`, `12-§4-1`, `12-§4-9`, `12-§6-2`, `12-§6-3`, `12-§6-4`, `12-§6-5`, `12-§7-5`, `12-§7-6`, `12-§9-1`, `12-§9-2`, `12-§9-3`, `12-§18-2`, `12-§21-1`, `12-§21-2`, `12-§21-7`, `8-§3-1`, `8-§3-2`, `8-§3-3`, `8-§3-4`, `8-§3-5`, `8-§3-8`, `8-§4-1`, `8-§5-1`, `8-§5-2`, `8-§5-3`, `8-§6-1`, `8-§6-2`, `8-§6-3`, `8-§6-4`, `8-§6-5`, `8-§7-1`, `8-§7-2`, `8-§7-3`, `8-§7-6`, `8-§7-7`, `8-§7-8`, `8-§7-9`, `8-§7-10`, `8-§7-11`, `8-§7-12`, `8-§11-1`, `8-§11-2`, `8-§11-4`, `8-§11-5`, `8-§12-1`, `8-§12-5`, `8-§13-1`, `8-§15-1`, `8-§15-2`, `8-§15-3`, `8-§15-4`, `8-§15-6`, `8-§15-7`, `8-§15-10`, `8-§15-11`, `8-§16-1`, `8-§16-2`, `8-§16-3`, `8-§16-4`, `8-§16-5`, `8-§16-9`, `8-§17-2`, `8-§17-3`, `8-§17-4`, `8-§17-6`, `22-§7-1`, `22-§7-2`, `22-§7-3`, `22-§7-4`, `22-§7-5`, `22-§7-6`, `22-§7-7`, `22-§7-8`, `22-§7-9`, `22-§7-10`, `22-§8-1`, `22-§8-2`, `22-§8-3`, `22-§8-4`, `22-§8-5`, `22-§8-6`, `22-§8-7`, `22-§17`, `22-§19-1`, `22-§19-2`, `22-§19-3`, `22-§19-4`, `22-§19-5`, `22-§19-6`, `22-§19-7`, `22-§21`, `22-§24-1`, `22-§28-3`, `22-§28-9`, `22-§29-1`, `22-§29-2`, `22-§29-10`, `22-§29-13`, `17-§5-6`, `20-§14-1`, `20-§14-2`, `20-§14-3`, `20-§14-4`, `BP-§6.4-1`, `BP-§6.4-2`, `BP-§6.4-3`, `BP-§6.4-4`, `BP-§6.4-5`, `BP-§6.4-6`, `BP-§6.4-7`, `BP-§6.4-8`, `BP-§6.4-9`, `BP-§6.4-10`, `BP-§6.6-1`, `BP-§8.4-1`, `BP-§8.4-2`, `BP-§8.4-3`, `BP-§10.2-W2`, `BP-§10.2-W5`, `BP-§10.2-W12`, `BP-§10.2-W13`, `BP-§10.2-E1`, `BP-§10.2-E2`, `BP-§10.2-E5`, `BP-§10.2-SA1`, `BP-§10.2-SA2`, `BP-§10.2-SB`, `BP-§11-1`, `BP-§12-1`, `BP-§12-3` |
| S7-SP-3 Voice / Provider | 122 | `24-§5-5`, `24-§7-2`, `24-§15-1`, `24-§15-2`, `24-§15-3`, `24-§15-4`, `24-§15-5`, `24-§15-6`, `24-§15-7`, `24-§15-8`, `24-§23-5`, `24-§27-4`, `24-§31-2`, `9-§8-1`, `9-§8-2`, `9-§8-4`, `9-§16-3`, `9-§17-4`, `10-§4-2`, `10-§5-2`, `10-§5-11`, `10-§11-1`, `10-§11-2`, `10-§11-3`, `10-§11-5`, `10-§11-6`, `10-§11-7`, `10-§11-8`, `10-§19-4`, `10-§23-2`, `12-§3-1`, `12-§4-1`, `12-§4-6`, `12-§4-7`, `12-§4-8`, `12-§4-9`, `12-§6-1`, `12-§6-2`, `12-§6-3`, `12-§6-4`, `12-§6-5`, `12-§6-6`, `12-§7-1`, `12-§7-2`, `12-§7-3`, `12-§7-4`, `12-§7-5`, `12-§7-6`, `12-§7-8`, `12-§7-9`, `12-§7-10`, `12-§8-1`, `12-§8-2`, `12-§8-3`, `12-§8-5`, `12-§9-1`, `12-§9-2`, `12-§9-3`, `12-§11-1`, `12-§11-2`, `12-§11-3`, `12-§11-4`, `12-§11-5`, `12-§11-7`, `12-§11-8`, `12-§11-9`, `12-§13-3`, `12-§14-1`, `12-§14-2`, `12-§14-3`, `12-§14-4`, `12-§15-1`, `12-§15-2`, `12-§15-3`, `12-§15-4`, `12-§15-5`, `12-§16-1`, `12-§16-2`, `12-§16-3`, `12-§16-4`, `12-§16-5`, `12-§16-6`, `12-§16-7`, `12-§16-8`, `12-§17-1`, `12-§17-2`, `12-§17-3`, `12-§17-4`, `12-§17-5`, `12-§17-6`, `12-§17-7`, `12-§17-8`, `12-§17-9`, `12-§17-10`, `12-§17-11`, `12-§17-12`, `12-§17-13`, `12-§17-14`, `12-§17-15`, `12-§18-1`, `12-§18-2`, `12-§18-3`, `12-§20-1`, `12-§20-2`, `12-§20-3`, `12-§20-4`, `12-§20-5`, `12-§20-6`, `12-§21-1`, `12-§21-2`, `12-§21-7`, `12-§21-8`, `12-§21-9`, `12-§21-10`, `12-§21-12`, `22-§8-4`, `22-§17`, `22-§29-10`, `BP-§5.4-1`, `BP-§6.4-9`, `BP-§10.2-W4`, `BP-§10.2-I1` |

### 21.5 Trigger screen

| Trigger | Result |
|---|---|
| T2 — conflict among approved sources | None found |
| T3 — new product decision | None new. EQ-4 (removing the direct transaction insert) and EQ-5 (retention default) would need decisions if pursued; neither is proposed |
| T6 — material derived constraint | None new |
| T7 — omission, deferral, pull-forward, simplification, reclassification | None. No row moved, narrowed or reclassified |
| T8 — conflict or infeasibility | None new. The 252 `BLOCKED` rows are blocked by the approved SB-P-1.12 dependency already recorded in Blueprint §12.1, not by infeasibility |

### 21.6 Stage 8 readiness

Not ready. Stage 8 preparation requires all three independent specialist reports, Mission Control disposition of every held finding in Section 21.4, and Mission Control acceptance of this Engineering Review.
