# SB-P-1.18 — Controlled Business Add-ons

**STAGE 4 DRAFT — FOR MISSION CONTROL REVIEW — NOT APPROVED — NOT LOCKED.** Sections 1–19 only. Builder Review, Engineering Review (Sections 20–21), EIS and implementation are not started and not authorized. Implementation Authorization: WITHHELD.

## Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.18 |
| Mission Name | Controlled Business Add-ons |
| Mission Type | Product Mission: three separately verifiable add-on workstreams under one mission identity (Build Plan §10.7 p1, `BP-§10.7-W`): Smart Order & Delivery (Contract 1), Staff / HR (Contract 6) and Compliance Shield (Contract 16), plus the Shared Location Foundation workstream inherited from Contract 22 §16 (`12:FPDR-2`) |
| Lifecycle Stage | Source 18 v1.3 Stage 4 — Product Blueprint Sections 1–19 — **DRAFT** for Stage 5 Mission Control Product Review |
| Status | `DRAFT — REVIEW REQUIRED` (Source 18 §13). Not approved, not locked. EIS and implementation not authorized |
| Product Authority | Founder |
| Product Discovery and Drafting | Claude Code, Definition Actor (`communication/missions/SB-P-1.18/mission-control/04-stage1-intake-disposition-and-definition-actor-appointment.md`, PR #1078) |
| Lifecycle Authority | Source 18 v1.3 (`merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `f3b01b608c4b64df186d4278ba6468ed0419630f`) |
| Structural template | `docs/phase-1-mission-blueprint/templates/SB-P-Product-Feature-Elaboration-Workflow-Template.md` (blob `710dd977`); structure of the latest completed Blueprint `docs/phase-1-mission-blueprint/completed/SB-P-1.17.md` (blob `f65ddd2a`) |
| Stage 4 Authorization | MC-654 ([PR #1100 comment 6528495929](https://github.com/SmartBusinessv1/smart-business/pull/1100#issuecomment-6528495929)): the Source 18 Stage 3 handover, on baseline `main@96d6aa879211fd3582ba90aac37ab8b4a5e0c642` |
| Stage 3 | Founder Decision Gate TRIGGERED; **COMPLETE and CLOSED** (MC-654). Closure record `communication/missions/SB-P-1.18/mission-control/08-stage3-founder-gate-closure.md` (blob `90ea6ad6`; PR #1100) |
| Governing Build Plan section | Build Plan §10.7 (`docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`, blob `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a`) |
| Primary contracts | Contract 1 Smart Order & Delivery Assistant (`b392c8cb`); Contract 6 Staff / HR Assistant (`ebacd183`); Contract 16 Compliance Shield (`420269d8`); inherited Contract 22 §16 Location Foundation (`61e1bb91`); Global Product Completion View (`ee76d920`); Source 11 line 443 for `S11-L443-*` (`16897d6c`) |
| Canonical FCTM | `communication/missions/SB-P-1.18/claude-code/03-stage2-populated-fctm.md`, blob `b00603ec3489ca5e1c64a210a7c9f7fe773145b6` (PR #1100): 769 rows — 592 `IN SCOPE`, 17 `ASSIGNED TO LATER MISSION`, 77 `DELEGATED`, 27 `NOT APPLICABLE`, 48 `OUT OF BUILD SCOPE`, 8 `UNRESOLVED FOUNDER DECISION`, 0 `ESCALATED`, 0 `ALREADY DEMONSTRATED` |
| Founder Product Decision Records | `claude-code/11-…-18-fpdr-2.md` (`226391e2`, PR #1082); `claude-code/12-…-18-fpdr-5.md` (`2714f896`, PR #1085); `claude-code/13-…-18-fpdr-3.md` (`5c8fa449`, PR #1087); `claude-code/14-…-18-fpdr-4.md` (`32a2026f`, PR #1094); `claude-code/15-…-18-fpdr-1.md` (`76061093`, PR #1099). Upstream decisions are cited with their mission namespace (`12:FPDR-1`, `12:FPDR-2`, `12:FPDR-3`, `16:FPDR-1`) |
| Decision log | `communication/missions/SB-P-1.18/decision-log.md`, blob `6fa4b514`: F-01 to F-05 APPROVED — canonical |
| Mission Truth Pack | `claude-code/03-` to `09-` (Stage 2, PR #1080): derived constraints and Delta `04-…`; uncertainty register and T1–T8 screen `05-…`; learning intake `06-…`; inventory `07-…`; topology `08-…`; index `09-…` |
| Upstream dependencies | SB-P-1.12 to SB-P-1.17: specifications locked; Implementation Authorization `WITHHELD`; no runtime evidence (`04-…` Δ-02, Δ-03) |
| Date | 2026-10-30 |
| Builder Review | Not started (Stage 6) |
| Engineering Review (Sections 20–21) | Not started (Stage 7) |
| Mission Control Review | Pending (Stage 5) |
| Blueprint Lock | Not locked (Stage 8) |

## Mission Snapshot

| Field | Summary |
|---|---|
| Product problem | Merchants run orders and delivery, staff and compliance dates through phone calls, WhatsApp, paper, verbal instructions and memory (C1 §2; C6 §2; C16 §2). The repository holds no order, delivery, customer, staff, attendance, payroll, compliance, role or location object (`04-…` Δ-02). |
| Primary users | Owner (full authority within plan and add-on availability). Manager only through Owner delegation, without inheriting Owner financial intelligence or Ask CFO (C1 §5; C6 §4; C16 §10). Employee only through explicitly permitted actions and their own permitted records. Delivery Staff only for the assigned task. Customer only within the merchant's private customer relationship. Support/Platform only through purpose-limited governance. |
| Build Now in this mission | **A. Smart Order & Delivery** on the native path: customer network, merchant-captured orders through any approved native input, drafts and clarification, availability-aware substitution with recorded approval, the full lifecycle, bounded delivery-staff actions, configured positive proof, COD as separate facts, exceptions. **B. Staff / HR:** profiles and scoped permissions, auditable attendance events (QR plus point-in-time geofence as the named minimum, conditional on DC-14), roster intake through UDI, leave and human context, assistive payroll support, overtime records (`18:FPDR-5`), employee self-view. **C. Compliance Shield:** compliance records through UDI, date clarification, shared reminders and renewal cycles, retrieval, legal-boundary messaging. **D. Shared Location Foundation:** one purpose-limited point-in-time primitive with the attendance, delivery-proof and destination disclosures (`12:FPDR-2`, `12:FPDR-3`, `18:FPDR-1`). Plus the Order and Staff/HR workspace views inside the SB-P-1.17 Manager workspace shell (DC-11). |
| Core boundary | Consumes the SB-P-1.12 to SB-P-1.17 kernels as specifications and builds no parallel version. No public marketplace (C1 §4). No location-based live tracking in Phase 1 (`18:FPDR-2`). No continuous employee surveillance. No out-of-app customer channel before SB-P-1.20 (`DNTF`; `18:FPDR-3`). No POS source is used or needed (Section 12.5). No legal authority claim (C16 §15). |
| Assigned to later missions (Build Now, not Build Later) | 17 rows, all to SB-P-1.20 (Section 11.1). |
| Rejected | Marketplace behaviour; AI accusation, verdicts or punishment; continuous staff GPS surveillance; automated wage punishment; customer silence as automatic failure; legal certification; duplicate channel-specific memory, permissions or AI; every Build Plan §16 and GPCV §9 rejection (Sections 10.3, 11.3). |
| Stage result sought | A Mission Control-reviewable, source-traceable Product Blueprint through Section 19, assembled by reference to the 769-row canonical FCTM and `18:FPDR-1` to `18:FPDR-5`, for Stage 5 review. |

## 1. Mission Overview

### Purpose

Solve real merchant jobs in ordering and delivery, staff administration and compliance memory using the same Smart Business the merchant already understands, without turning into surveillance, a marketplace, or three new software systems (Build Plan §10.7 exit principle, `BP-§10.7-X`).

### Summary

SB-P-1.18 completes three add-on contracts on the shared foundations, each separately verifiable (`BP-§10.7-W`):

- **Smart Order & Delivery (Contract 1)**: a private merchant-customer ordering and delivery network (GPCV row 1, `GPCV-R1`).
- **Staff / HR Assistant (Contract 6)**: staff records, attendance, roster, leave and payroll support with dignity safeguards (GPCV row 6, `GPCV-R6`).
- **Compliance Shield (Contract 16)**: licence and renewal memory with timely reminders and no legal-authority claim (GPCV row 16, `GPCV-R16`).

It also owns the **Shared Location Foundation** instance for attendance and delivery (Contract 22 §16; `12:FPDR-2`), and supplies the **Order & Delivery and Staff/HR views** inside the SB-P-1.17 Manager workspace (`17-§4-15`, `17-§9-*`, `17-§10-*`; DC-11).

The customer-facing WhatsApp legs belong to SB-P-1.20. This mission builds the native engine they will adapt (`18:FPDR-3`; DC-01).

### Mission Philosophy

Humans serve humans. The merchant owns the customer relationship and every consequential decision (C1 §3). Staff are treated with dignity, never surveilled or judged by software (C6 §1, §12). Compliance Shield remembers and reminds; it never impersonates legal authority (C16 header, §3). AI interprets, drafts, flags and explains; it never finalizes by guessing, expands permission, or creates facts without evidence (C1 §21; C6 §9; C16 §15).

## 2. Domain

### Orders and Delivery, Staff Administration, Compliance Memory and Purpose-Limited Location

The mission's domain is three operational jobs of a local merchant:

- receiving, confirming, preparing, assigning, delivering and closing customer orders inside a private customer network (C1 §1);
- keeping staff records, attendance, shifts, leave and payroll-support context without surveillance (C6 §1);
- organizing licences, certificates and renewal dates and acting in time (C16 §1);
- and the purpose-limited, point-in-time location that attendance and delivery need (C22 §16).

### Relationship to Other Domains

| Domain | Relationship | Source |
|---|---|---|
| Authority, identity and roles (SB-P-1.12) | Owns memberships, Owner/Manager/Employee/Delivery Staff/Customer identities and roles, capability grants, entitlements (21-§16), support access (21-§14), self-service mechanics (21-§10), isolation, audit and idempotency. This mission declares its capabilities on that kernel and creates no user, role or customer model (DC-03) | C21; C22 §5, §15; `D12` |
| Conversation, AI, language and voice (SB-P-1.13) | Order, staff and compliance conversations run through the shared kernel, Human Language Layer, typed tools and confirmation; voice through Basic Voice | C9 §12; C10 §13; C12; C24 §18, §21; `D13`, `DV`, `DAI` |
| Business Memory, UDI and governed storage (SB-P-1.14) | Order lists, rosters and licence documents enter through UDI; documents use the Receipt/Document Cabinet and governed storage; Business Memory links orders, staff and compliance facts | C3 §9, §11, §15; C5 §4, §6, §7; C25; `D14` |
| Reminders, notifications, Ask CFO and Daily Intelligence (SB-P-1.15) | Compliance, staff and order follow-ups use the Reminder Engine; events reach users through the native Notification Foundation (`12:FPDR-1`); Ask CFO and Daily Intelligence read this mission's facts through governed readers (Part F) | C11; C2; C4; `D15` |
| Financial integrity and shared customer identity (SB-P-1.16) | Owns COD and payment-evidence linkage (15-§15), credit (14-§13) and basic shared customer identity (`16:FPDR-1`). Delivery never writes Ledger income itself (DC-06) | C14 §13; C15 §15; `D16`, `DPAY`, `DTX` |
| Stock, availability and the Manager workspace (SB-P-1.17) | Owns stock and availability truth (7-§2) and the Manager workspace shell; this mission reads availability and supplies the Order and Staff/HR views inside the shell (DC-11). POS stays with SB-P-1.17 (`17:FPDR-2`) | C7 §2; C17 §4, §9, §10; `D17` |
| Activation, lifecycle and stewardship (SB-P-1.19) | Add-on entitlement lifecycle and prices; support and stewardship | C18 §5, §9; `D19`, `DENT` |
| WhatsApp channel (SB-P-1.20) | Thin transport and channel adapter over this mission's native order, consent and notification truth (`18:FPDR-3`; BP §8.4, §11 b9) | C23; `D20`, `DNTF` |

## 3. Mission Objective

Deliver, by reference to the FCTM, every `IN SCOPE` obligation of Contracts 1, 6 and 16, the inherited Contract 22 §16 Location Foundation units, the Contract 17 Order and Staff/HR view units, the other inherited units owned here, the Source 11 L443 overtime-recording facets, and Build Plan §10.7, within the limits of `18:FPDR-1` to `18:FPDR-5`. Founder Runtime Verification scenarios A, B and C can then be demonstrated once the upstream dependencies exist (Section 15).

## 4. Business Purpose

Local merchants coordinate delivery through fragmented memory: orders arrive through many channels, availability is checked informally, addresses are asked again, assignment is verbal, customers call for status, and COD and proof are hard to reconcile (C1 §2). Staff are managed through notebooks, WhatsApp, rosters and memory (C6 §2). Licences and renewal dates live in files, photos, calendars or memory, and a missed date causes stress and disruption (C16 §2).

This mission reduces that coordination burden without taking ownership of the customer relationship, without surveillance or judgement of staff, and without legal claims. Every consequential decision stays with an authorized human.

## 5. Product Truth Alignment

| Principle | Source | Realized by |
|---|---|---|
| Private merchant-customer network; not a marketplace | C1 §1 p3, §4, §25; BP §10.7 A b11; BP §16 b8; GPCV §9 b9 | Sections 8.1, 10.3, 11.3 |
| Explicit confirmation before consequential commitments; never guess | C1 §3, §9 p3, §10 p4, §21 | Sections 8.3, 8.4 |
| Completion rests on configured positive proof; customer silence is not failure | C1 §15; BP §10.7 A b9 | `18:FPDR-4`; Section 8.6 |
| COD and payment are separate, auditable facts on shared financial truth | C1 §16; BP §10.7 A b7, b10 | Section 8.6; DC-06 |
| Location is purpose-limited and point-in-time; no continuous surveillance; no Phase 1 live tracking | C1 §14; C6 §5; C22 §16; BP §16 b3 | `18:FPDR-2`, `18:FPDR-1`; Section 8.15 |
| Staff dignity: no hidden scoring, punishment or misconduct verdict | C6 §8, §9, §12; BP §10.7 B b7–b8 | `18:FPDR-5`; Sections 8.10, 8.11 |
| Owner financial intelligence protected from staff and Managers by default | C1 §5; C6 §4; BP §10.7 B b3 | Sections 8.2, 8.8 |
| Remind and organize; never certify legal compliance | C16 §3, §15; BP §10.7 C b4 | Section 8.14 |
| One shared engine per concern: UDI, Reminder Engine, Notification Foundation, Permission Engine, Business Memory | C1 §23; C6 §11; C16 §18; BP §6 | Sections 8.7, 8.11, 8.13 |
| Smart Business works without WhatsApp; WhatsApp adapts the native engine | BP §8.2–§8.4, §11 b9; C1 §18 p2 | `18:FPDR-3`; DC-01; Section 12.5 |

## 6. User Value

- **Owner:**
  - creates and imports customers, captures orders from calls, visits, voice, lists and sheets, reviews availability and records customer decisions on changes;
  - assigns delivery staff, sets COD, sees active and historical deliveries, reviews exceptions and evidence (C1 §5 Owner);
  - creates staff profiles and scoped permissions, reviews attendance, corrections and leave, prepares payroll-support drafts and confirms every consequential payroll outcome (C6 §4, §8);
  - keeps compliance records with confirmed dates, receives timely reminders and retrieves documents (C16 §10).
- **Manager:** only Owner-delegated operational authority in each area. A Manager does not inherit Owner financial intelligence or Ask CFO (C1 §5 Manager; C6 §4; C16 §10).
- **Employee:** only explicitly permitted actions, such as an order draft, availability review, packing, permitted state updates, own attendance view, assigned shifts, attendance or leave context, and a correction request. No customer export, Owner profit, Ask CFO, full analytics, other staff records or broad compliance documents (C1 §5 Employee; C6 §4; C16 §10; BP §10.7 B b2–b3).
- **Delivery Staff:** only what the assigned delivery needs: merchant identity, customer name and contact where required, order summary, address or location, timing, COD amount and the permitted delivery actions. Nothing Owner-wide and no unrelated customers or orders (C1 §5 Delivery Staff, §13).
- **Customer:** joins the merchant's private network, orders, has changes confirmed, provides an address when needed, receives confirmations and status, reports issues and unsubscribes (C1 §5 Customer). Before SB-P-1.20, the customer's own channel legs are not demonstrated; the merchant records the customer's decisions natively (`18:FPDR-3`; DC-02).
- **Support / Platform:** no routine browsing of customer, employee or compliance data; purpose-limited access only (C1 §25 b8; C6 §12 b8; C16 §10).

## 7. Core Deliverables

| Deliverable | Section | Draft workstream (FCTM WS) |
|---|---|---|
| Private customer network, identity and messaging consent | 8.1 | A |
| Order & Delivery users and permission boundaries | 8.2 | A |
| Order intake, drafts, clarification, conversation and language | 8.3 | A |
| Availability, substitution and customer confirmation | 8.4 | A |
| Order lifecycle, delivery assignment and delivery staff experience | 8.5 | A |
| Delivery proof, completion, COD and payment | 8.6 | A |
| Order notifications, AI authority, memory, shared foundations, exceptions and privacy | 8.7 | A |
| Staff profiles, roles and permissions | 8.8 | B |
| Attendance, roster, leave and human context | 8.9 | B (+D) |
| Payroll support and overtime records | 8.10 | B |
| Staff AI, channels, shared foundations, privacy and exceptions | 8.11 | B |
| Compliance records, document intake and dates | 8.12 | C |
| Compliance reminders, renewal, retrieval, channels and language | 8.13 | C |
| Compliance permissions, legal boundary, privacy and exceptions | 8.14 | C |
| Shared Location Foundation and location disclosures | 8.15 | D |
| Order and Staff/HR workspace views | 8.16 | A, B (V) |
| Acceptance, completion gates, sequencing and mission outcome accounting | 8.17 | all (V) |

The workstream letters are the FCTM's draft documentary workstreams (FCTM §0.1). They are not an implementation allocation.

## 8. Detailed Functional Scope

Each subsection names its governing sources and lists every `IN SCOPE` FCTM row it realizes. Requirement text is not restated: the row pointer and its source section are the requirement. **Each `IN SCOPE` row appears in exactly one subsection.** Rows of kind `SCN`, `FRV`, `EXP` or `GATE` are also acceptance, experience or completion obligations in Section 15, and rows with a dependency code are also governed by Section 12. The grouping is navigation only and changes no FCTM row.

### 8.1 Private Customer Network, Identity and Messaging Consent

Sources: Contract 1 §§1–3, §6, §7; Contract 3 §9, §15; Build Plan §10.3 (search sequencing), §10.7 A b11; GPCV §8 b5; `16:FPDR-1`.

Mission design:

- **The network is private.** Customers belong to the merchant's approved customer relationships. No public discovery, cross-merchant listing, bidding or commission (C1 §4, kept in Section 11.3). Marketplace and wholesaler expansion stay separate future Founder decisions and block nothing here (`GPCV-§8-5`; `1-§30-2`, Section 11.5).
- **One customer identity.** Customer identity is merchant-scoped and reuses the SB-P-1.16 shared customer identity (`16:FPDR-1`; DC-03). Channels never create parallel identities, and plausible duplicates are detected rather than silently created (`1-§6-1`, `1-§6-7`).
- **Creation and import paths:** manual workspace entry, conversational quick-add, Excel/CSV import through UDI and approved migration or import workflows (`1-§6-2` to `-5`). An orderable customer needs a usable identity or contact path; the address may stay missing until delivery needs it (`1-§6-6`).
- **Customer-side directory search** is this mission's slice of the joint search and identity rows; the supplier side stays with SB-P-1.17 (`BP-§10.3-S2`, `3-§9-3`, `3-§15-7`; register U-08).
- **Messaging consent is native state.** The welcome content, the once-only rule, purpose restriction and the STOP state are recorded and enforced on the shared customer identity before any out-of-app channel exists (`1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`; `18:FPDR-3` Package P). Sending the welcome and receiving STOP over WhatsApp are SB-P-1.20 legs (A-WEL, A-STOP), and provider template rules are SB-P-1.20's (`1-§7-3`, Section 11.1). DC-13 stays a Mission Control T6 matter (Section 12.3).

**FCTM rows realized here (37 `IN SCOPE`):**

- Contract 1 (32): `1-§1-1`, `1-§1-2`, `1-§1-3`, `1-§2-1`, `1-§2-2`, `1-§2-3`, `1-§2-4`, `1-§2-5`, `1-§2-6`, `1-§2-7`, `1-§2-8`, `1-§3-1`, `1-§3-2`, `1-§3-3`, `1-§3-4`, `1-§3-5`, `1-§3-6`, `1-§3-7`, `1-§3-8`, `1-§3-9`, `1-§3-10`, `1-§6-1`, `1-§6-2`, `1-§6-3`, `1-§6-4`, `1-§6-5`, `1-§6-6`, `1-§6-7`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`
- Contract 3 (2): `3-§9-3`, `3-§15-7`
- Build Plan (2): `BP-§10.3-S2`, `BP-§10.7-A11`
- GPCV (1): `GPCV-§8-5`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (3):** `1-§1-1`, `1-§1-2`, `1-§1-3`

### 8.2 Order & Delivery Users and Permission Boundaries

Sources: Contract 1 §5; Contract 3 §11; Contract 21 (by reference, `DELEGATED`).

Mission design:

- **Each role is a capability set on the SB-P-1.12 kernel**, checked server-side on every action and every channel (`D12`; DC-03). Owner actions are subject to plan and add-on availability (`DENT`; DC-07).
- **Owner:** customers, orders, assignment, COD, delivery history, customer status and delivery permissions, exceptions and evidence (`1-§5-1` to `-7`).
- **Manager:** delegated by the Owner only; no automatic Owner financial intelligence or Ask CFO (`1-§5-8`).
- **Employee:** only the approved operational actions; never unrestricted customer export, Owner profit, Ask CFO or full analytics because of fulfilment work (`1-§5-9` to `-14`).
- **Delivery Staff:** the seven task-required items and nothing Owner-wide (`1-§5-15` to `-22`).
- **Customer:** the customer capabilities, each native in SB-P-1.18 with its named channel leg in SB-P-1.20 (`1-§5-23` to `-30`; `18:FPDR-3` Package P). `1-§5-26` address provision follows the location rules in Section 8.15 (`18:FPDR-1`).
- **No general Ledger access** for customers and delivery staff; they participate only in purpose-limited order and delivery workflows (`3-§11-6`).

**FCTM rows realized here (31 `IN SCOPE`):**

- Contract 1 (30): `1-§5-1`, `1-§5-2`, `1-§5-3`, `1-§5-4`, `1-§5-5`, `1-§5-6`, `1-§5-7`, `1-§5-8`, `1-§5-9`, `1-§5-10`, `1-§5-11`, `1-§5-12`, `1-§5-13`, `1-§5-14`, `1-§5-15`, `1-§5-16`, `1-§5-17`, `1-§5-18`, `1-§5-19`, `1-§5-20`, `1-§5-21`, `1-§5-22`, `1-§5-23`, `1-§5-24`, `1-§5-25`, `1-§5-26`, `1-§5-27`, `1-§5-28`, `1-§5-29`, `1-§5-30`
- Contract 3 (1): `3-§11-6`

### 8.3 Order Intake, Drafts, Clarification, Conversation and Language

Sources: Contract 1 §§8, 9, 18 p2, 19, 20; Contract 5 §4, §7; Contract 9 §12; Contract 10 §13; Contract 12 §4, §7; Build Plan §10.7 A b1–b2; `18:FPDR-3` Package W.

Mission design:

- **One workflow regardless of channel** (`1-§8-1`, `1-§19-5`, `1-§18-7`). WhatsApp is an adapter to the same order truth; it is not a second workflow engine.
- **Merchant-initiated intake is native and complete here:** phone call, in-person request, text or voice instruction, handwritten or paper list, and imported order sheet (`1-§8-6` to `-10`), in the Conversation Workspace by text, voice, image and Excel/CSV/PDF (`1-§19-1` to `-4`; `10-§13-5`; `12-§4-4`, `12-§7-7`).
- **Customer-initiated intake obligations** (text, voice, image, document) are assigned whole to SB-P-1.20 as channel intake only. The interpretation engines stay with their owners and are not recreated (`1-§8-2` to `-5`, Section 11.1; `18:FPDR-3` Package W).
- **Documents and photos use UDI:** input → interpretation → preview → clarify where needed → confirmation → order draft. Uncertain extraction never silently creates a confirmed order (`1-§8-11`, `1-§8-12`; `5-§4-12`, `5-§7-6`).
- **Every incoming intent first becomes a draft** preserving identity, items, quantities and units, notes and substitution preferences, delivery or pickup intent, requested time, address status, payment and COD information, source channel, creator and state (`1-§9-1` to `-12`).
- **Clarify the smallest useful question** when product identity, quantity or unit, customer match, required location, COD amount or document interpretation is uncertain. Never guess a consequential order fact (`1-§9-13` to `-19`; `BP-§10.7-A2`).
- **English, Malayalam and Manglish** through the shared Human Language Layer, with local units and product expressions understood and ambiguous consequential details clarified (`1-§20-1`, `1-§20-2`; `9-§12-9`). The customer-language channel leg is SB-P-1.20's (R-10/16).

**Workflow W-A1 (order, native path).** Capture (this section) → draft with preserved facts → clarification until no material ambiguity remains → availability review and any change proposal with recorded approval (8.4) → Confirmed → Preparing/Packing → Ready/Assigned (8.5) → Out for Delivery → configured proof and COD facts (8.6) → Delivered/Closed, with explicit exception and cancel states at each step (`1-§11-1`, `1-§11-2`; exceptions `1-§24-*`, Section 8.7). An ambiguous customer order stays a draft until the ambiguity is resolved (`BP-§10.7-AS1`).

**FCTM rows realized here (43 `IN SCOPE`):**

- Contract 1 (35): `1-§8-1`, `1-§8-6`, `1-§8-7`, `1-§8-8`, `1-§8-9`, `1-§8-10`, `1-§8-11`, `1-§8-12`, `1-§9-1`, `1-§9-2`, `1-§9-3`, `1-§9-4`, `1-§9-5`, `1-§9-6`, `1-§9-7`, `1-§9-8`, `1-§9-9`, `1-§9-10`, `1-§9-11`, `1-§9-12`, `1-§9-13`, `1-§9-14`, `1-§9-15`, `1-§9-16`, `1-§9-17`, `1-§9-18`, `1-§9-19`, `1-§18-7`, `1-§19-1`, `1-§19-2`, `1-§19-3`, `1-§19-4`, `1-§19-5`, `1-§20-1`, `1-§20-2`
- Contract 9 (1): `9-§12-9`
- Contract 10 (1): `10-§13-5`
- Contract 12 (2): `12-§4-4`, `12-§7-7`
- Contract 5 (2): `5-§4-12`, `5-§7-6`
- Build Plan (2): `BP-§10.7-A1`, `BP-§10.7-A2`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (1):** `5-§7-6`

### 8.4 Availability, Substitution and Customer Confirmation

Sources: Contract 1 §10; Build Plan §10.7 A b3–b4; `18:FPDR-4`; Contract 7 §2 (`DELEGATED`, SB-P-1.17).

Mission design:

- **A requested order is not automatically final** (`1-§10-1`). The Owner or authorized staff review availability from current business data where available (`1-§10-2`; `BP-§10.7-A3`; `D17`).
- **Change proposals.** Under `18:FPDR-4`, quantity change (`1-§10-3`) and removal (`1-§10-6`) are the named minimum. Replacement or substitute (`1-§10-4`) and partial fulfilment (`1-§10-5`) are mandatory independently of F-4. Later fulfilment where supported (`1-§10-7`) is permitted and adoptable.
- **Material changes need approval before Confirmed** by the customer or an authorized merchant user (`1-§10-8`; `BP-§10.7-A4`). Before SB-P-1.20 the merchant records the customer's decision, bound to the exact order state (DC-02; `18:FPDR-3` Package P for `1-§5-25`).
- **No unsupported inventory promise** (`1-§10-9`). Availability is shown as known, unknown or unavailable from the SB-P-1.17 stock truth; this mission keeps no second stock record.

**FCTM rows realized here (11 `IN SCOPE`):**

- Contract 1 (9): `1-§10-1`, `1-§10-2`, `1-§10-3`, `1-§10-4`, `1-§10-5`, `1-§10-6`, `1-§10-7`, `1-§10-8`, `1-§10-9`
- Build Plan (2): `BP-§10.7-A3`, `BP-§10.7-A4`

### 8.5 Order Lifecycle, Delivery Assignment and Delivery Staff Experience

Sources: Contract 1 §§11–13; Build Plan §10.7 A b5–b6.

Mission design:

- **Lifecycle:** Draft → Confirmed → Preparing/Packing → Ready/Assigned → Out for Delivery → Delivered/Closed, with explicit exception and cancel states. Every transition is auditable and permission-scoped. State names are not fixed Product Truth (`1-§11-1` to `-4`; `BP-§10.7-A5`).
- **Assignment checks before assignment:** assignable state, the customer belongs to the merchant, the delivery person exists and is permitted, a required address exists or has a resolution path, COD is reviewed, and the action is not a duplicate or retry. Natural-language assignment passes the same checks (`1-§12-1` to `-7`).
- **Delivery staff experience is low-friction** and needs no heavy separate driver app: acknowledge, open address or map, mark started, record proof, record COD collected, mark delivered, report unable-to-deliver (`1-§13-1` to `-9`; `BP-§10.7-A6`). "Open address/map" may be a hand-off to the device's own maps application or a provider; the choice is an EIS item (`DMAP`; U-13).

**FCTM rows realized here (22 `IN SCOPE`):**

- Contract 1 (20): `1-§11-1`, `1-§11-2`, `1-§11-3`, `1-§11-4`, `1-§12-1`, `1-§12-2`, `1-§12-3`, `1-§12-4`, `1-§12-5`, `1-§12-6`, `1-§12-7`, `1-§13-1`, `1-§13-2`, `1-§13-3`, `1-§13-4`, `1-§13-5`, `1-§13-6`, `1-§13-7`, `1-§13-8`, `1-§13-9`
- Build Plan (2): `BP-§10.7-A5`, `BP-§10.7-A6`

### 8.6 Delivery Proof, Completion, COD and Payment

Sources: Contract 1 §§15–16; Contract 3 §15 b12; Contract 5 §6; Build Plan §10.7 A b7, b9, b10; `18:FPDR-4`; Contract 15 §15 (`DELEGATED`, SB-P-1.16).

Mission design:

- **Completion relies on configured positive proof**, never unsupported inference, selected by risk and merchant configuration without unnecessary friction (`1-§15-1`, `1-§15-8`).
- **Proof mechanisms (`18:FPDR-4`).** Named minimum: delivery staff completion action (`1-§15-2`) and merchant confirmation (`1-§15-7`). Permitted and adoptable: recipient acknowledgement (`1-§15-3`), point-in-time location evidence (`1-§15-5`, which follows `18:FPDR-1` B2 if adopted), COD or payment evidence (`1-§15-6`), and OTP, signature or photo (`1-§15-4`). OTP needs an out-of-app customer channel and is not available before one exists (`DNTF`). Photo and signature proof need a privacy check before the EIS (`18:FPDR-4` §6).
- **Customer silence is not failure.** Silence alone is not an automatic failure or exception, and an absent reply never rolls back an otherwise well-proven delivery (`1-§15-9`, `1-§15-10`; `BP-§10.7-A9`).
- **COD:** the expected amount is explicit; delivered and COD-collected are separate facts; discrepancies stay visible (`1-§16-1` to `-3`).
- **Financial truth is SB-P-1.16's.** Payment verification and reconciliation reuse the shared financial-integrity foundation; completion never silently duplicates Ledger income; the Ledger write or link is idempotent and auditable through the single `DTX` write path (`1-§16-4` to `-6`; `3-§15-12`; `5-§6-10`; `BP-§10.7-A7`, `BP-§10.7-A10`; DC-06).

**FCTM rows realized here (21 `IN SCOPE`):**

- Contract 1 (16): `1-§15-1`, `1-§15-2`, `1-§15-3`, `1-§15-4`, `1-§15-5`, `1-§15-6`, `1-§15-7`, `1-§15-8`, `1-§15-9`, `1-§15-10`, `1-§16-1`, `1-§16-2`, `1-§16-3`, `1-§16-4`, `1-§16-5`, `1-§16-6`
- Contract 3 (1): `3-§15-12`
- Contract 5 (1): `5-§6-10`
- Build Plan (3): `BP-§10.7-A7`, `BP-§10.7-A9`, `BP-§10.7-A10`

### 8.7 Order Notifications, AI Authority, Memory, Shared Foundations, Exceptions and Privacy

Sources: Contract 1 §17, §§21–25, §28 p1; `12:FPDR-1`; `18:FPDR-3`.

Mission design:

- **Notifications use the native Notification Foundation** owned by SB-P-1.15 (`12:FPDR-1`): order received or draft needing action, confirmation or change request, assignment, delivery started or status, completed, COD exception and unable-to-deliver. No order-only notification infrastructure (`1-§17-1` to `-9`). The customer-delivery legs of `1-§17-3`, `-5`, `-6` are SB-P-1.20's (E-4, E-5). Customer status is order and delivery status, never a live-location view (`18:FPDR-2`). The C1 §17 "may include" screening and AEG-1 stay Mission Control holds.
- **AI may** interpret intent, prepare drafts, identify missing information, suggest substitutions, summarize state, surface exceptions and recommend follow-up. **AI must not** finalize uncertain orders by guessing, expand staff permission, mark delivery completed without configured proof, create payment facts without evidence, expose unrelated customer or Owner information, or create marketplace relationships (`1-§21-1` to `-13`).
- **Business Memory relationships** among business, customer identity and communication preferences, orders and lines, product identity, state history, assignment actor, delivery events and proof, COD link, address or location with its purpose and retention boundary, exceptions, source channel and confirmation and audit events, with no duplicate customer or product identity (`1-§22-1` to `-15`). `1-§22-11` follows Section 8.15.
- **Shared foundations reused, never rebuilt:** Permission Engine, shared identities, Business Memory, Human Language Layer, Conversation Workspace, UDI, inventory, Notification Foundation, Reminder Engine, the point-in-time location primitive, audit and idempotency, Payment Verification and Ledger (`1-§23-*`).
- **Exceptions handled at minimum:** unknown or duplicate customer, ambiguous item, out of stock, missing location, unavailable delivery staff, revoked permission mid-workflow, duplicate retry, customer change or cancellation, delay, unable-to-deliver, proof failure, COD mismatch, channel delivery failure and payment-linking failure. A narrow failure never freezes unrelated operations (`1-§24-1` to `-15`). No fixed universal delay threshold applies (`1-§28-5`, historical).
- **Privacy and trust:** the merchant owns the relationship; data is business-scoped; delivery staff see only task data; location is purpose-limited; no continuous staff surveillance; no staff access to Owner financial intelligence; no marketplace reuse; support access is separately governed (`1-§25-1` to `-8`).

**FCTM rows realized here (73 `IN SCOPE`):**

- Contract 1 (73): `1-§17-1`, `1-§17-2`, `1-§17-3`, `1-§17-4`, `1-§17-5`, `1-§17-6`, `1-§17-7`, `1-§17-8`, `1-§17-9`, `1-§21-1`, `1-§21-2`, `1-§21-3`, `1-§21-4`, `1-§21-5`, `1-§21-6`, `1-§21-7`, `1-§21-8`, `1-§21-9`, `1-§21-10`, `1-§21-11`, `1-§21-12`, `1-§21-13`, `1-§22-1`, `1-§22-2`, `1-§22-3`, `1-§22-4`, `1-§22-5`, `1-§22-6`, `1-§22-7`, `1-§22-8`, `1-§22-9`, `1-§22-10`, `1-§22-11`, `1-§22-12`, `1-§22-13`, `1-§22-14`, `1-§22-15`, `1-§23-1`, `1-§23-2`, `1-§23-3`, `1-§23-4`, `1-§23-5a`, `1-§23-6`, `1-§23-7`, `1-§23-8`, `1-§23-9`, `1-§23-10`, `1-§23-11`, `1-§23-12`, `1-§24-1`, `1-§24-2`, `1-§24-3`, `1-§24-4`, `1-§24-5`, `1-§24-6`, `1-§24-7`, `1-§24-8`, `1-§24-9`, `1-§24-10`, `1-§24-11`, `1-§24-12`, `1-§24-13`, `1-§24-14`, `1-§24-15`, `1-§25-1`, `1-§25-2`, `1-§25-3`, `1-§25-4`, `1-§25-5`, `1-§25-6`, `1-§25-7`, `1-§25-8`, `1-§28-1`

### 8.8 Staff Profiles, Roles and Permissions

Sources: Contract 6 §§1–4; Contract 3 §15 b13; Build Plan §10.7 B b1, b3; GPCV §8 b3.

Mission design:

- **Core capabilities, where enabled and lawful:** profiles, roles and permission scope, shift and roster records, attendance events, leave and absence, payroll-support context, employee self-view, correction and context records, and staff reminders (`6-§3-1` to `-9`).
- **Minimum necessary staff data.** Sensitive KYC or national-ID storage is not assumed. It stays an unresolved Founder, legal and privacy decision off the critical path, and assumed collection stays rejected (`6-§3-10`, `BP-§15-7`, Section 11.5; `6-§15-6`, Section 11.3; `GPCV-§8-3`).
- **Owner** controls staff access and sees authorized HR, attendance and payroll-support data (`6-§4-1`; `BP-§10.7-B1`). **Manager** may receive delegated operational staff authority without inheriting Owner financial intelligence (`6-§4-2`). **Employee** performs only explicitly permitted actions and sees only their own permitted records; no Owner profit, unrestricted analytics or Ask CFO (`6-§4-3` to `-7`; `BP-§10.7-B3`).
- **Staff records in Business Memory** follow the shared identity model with authorized access (`3-§15-13`).

**FCTM rows realized here (22 `IN SCOPE`):**

- Contract 6 (18): `6-§1-1`, `6-§2-1`, `6-§3-1`, `6-§3-2`, `6-§3-3`, `6-§3-4`, `6-§3-5`, `6-§3-6`, `6-§3-7`, `6-§3-8`, `6-§3-9`, `6-§4-1`, `6-§4-2`, `6-§4-3`, `6-§4-4`, `6-§4-5`, `6-§4-6`, `6-§4-7`
- Contract 3 (1): `3-§15-13`
- Build Plan (2): `BP-§10.7-B1`, `BP-§10.7-B3`
- GPCV (1): `GPCV-§8-3`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (1):** `6-§1-1`

### 8.9 Attendance, Roster, Leave and Human Context

Sources: Contract 6 §§5–7; Contract 5 §4, §7; Contract 10 §13; Contract 24 §18, §21; Build Plan §10.7 B b2, b5; `18:FPDR-4`; `18:FPDR-1` A2.

Mission design:

- **Attendance is auditable events, not silent mutable truth** (`6-§5-1`).
- **Mechanisms (`18:FPDR-4`).** The named minimum is QR plus point-in-time geofence, conditional on DC-14, which stays open and cannot be bypassed. Any other allowable verified method is permitted and adoptable (`6-§5-2`). Each business decides whether to enable location (C6 §3 p1 "where enabled and lawful").
- **Location rule:** point-in-time and purpose-limited; no continuous tracking because attendance location is enabled. Geofence radius and QR token mechanics are EIS parameters, not Product Truth (`6-§5-3` to `-5`; DC-04). Attendance location follows `18:FPDR-1` A2 (Section 8.15).
- **Roster intake through UDI:** document → interpretation → preview → clarification → confirmation → validated HR update; no HR-only OCR or import truth (`6-§6-1` to `-3`; `5-§4-11`, `5-§7-5`; `24-§18-4`).
- **Human context preserves the raw event.** Absence, later-approved leave, a correction with reason and a shift change after discussion each keep the original event with authorized context and audit (`6-§7-1` to `-6`; `24-§21-6`).

**Workflow W-B1 (own attendance correction).** The employee views their own permitted attendance (`6-§4-4`; `BP-§10.7-B2`) → submits a correction request with context (`6-§4-6`; `10-§13-7`) → the original event is kept (`6-§7-6`) → the Owner or a delegated Manager reviews it (`6-§13-6`) → the outcome and its actor are audited (`BP-§10.7-B5`). At no step can the employee browse another employee or see Owner financial intelligence (`BP-§10.7-BS1`).

**FCTM rows realized here (21 `IN SCOPE`):**

- Contract 6 (14): `6-§5-1`, `6-§5-2`, `6-§5-3`, `6-§5-4`, `6-§5-5`, `6-§6-1`, `6-§6-2`, `6-§6-3`, `6-§7-1`, `6-§7-2`, `6-§7-3`, `6-§7-4`, `6-§7-5`, `6-§7-6`
- Contract 24 (2): `24-§18-4`, `24-§21-6`
- Contract 10 (1): `10-§13-7`
- Contract 5 (2): `5-§4-11`, `5-§7-5`
- Build Plan (2): `BP-§10.7-B2`, `BP-§10.7-B5`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (2):** `24-§18-4`, `5-§7-5`

### 8.10 Payroll Support and Overtime Records

Sources: Contract 6 §8; Source 11 L443 (`18:FPDR-5`; Source 18 v1.3 §3.2 item 1 exception); Build Plan §10.7 B b7–b8.

Mission design:

- **Payroll is assistance, not autonomous punishment** (`6-§8-1`). Smart Business may help calculate or prepare payroll-support information from approved records and rules (`6-§8-2`). It never fines, docks wages as punishment, treats anomalies as misconduct verdicts or fabricates legal or payroll authority (`6-§8-3` to `-6`; `BP-§10.7-B7`, `BP-§10.7-B8`). Consequential payroll changes are human-controlled and audited, with confirmation bound to the exact action and state (`6-§8-7`; DC-10).
- **Overtime records (`18:FPDR-5`)** are a distinct recording obligation, carried by five verification facets of the one Source 11 L443 obligation: record creation from a manual report, a system-proposed entry or a manager entry, including disputed entries (`S11-L443-1`); authorized human review (`-2`); auditable correction and dispute (`-3`); role-scoped visibility including the employee's own record (`-4`); and audit attribution and provenance (`-5`).
- **Not decided here:** the overtime definition, eligibility, thresholds, multipliers, wage calculation, export content and record-class retention. Qualified Indian employment and payroll validation (`DLEG`) is required before the EIS specifies any calculation or legal rule (`18:FPDR-5` §5; `L-F5`). No payroll-export obligation arises from the decision.

**FCTM rows realized here (14 `IN SCOPE`):**

- Contract 6 (7): `6-§8-1`, `6-§8-2`, `6-§8-3`, `6-§8-4`, `6-§8-5`, `6-§8-6`, `6-§8-7`
- Build Plan (2): `BP-§10.7-B7`, `BP-§10.7-B8`
- Source 11 L443 facets (5): `S11-L443-1`, `S11-L443-2`, `S11-L443-3`, `S11-L443-4`, `S11-L443-5`

### 8.11 Staff AI, Channels, Shared Foundations, Privacy and Exceptions

Sources: Contract 6 §§9–13; Contract 9 §12 b7; Build Plan §10.7 B b6.

Mission design:

- **AI may** interpret staff and shift instructions, summarize attendance patterns, prepare roster, leave and payroll-support drafts, flag missing or conflicting records, ask for clarification and explain records neutrally. **AI must not** accuse an employee from anomaly signals, surveil employees, create permission by inference, reveal Owner intelligence to staff, or silently modify historical records (`6-§9-1` to `-11`). Anomalies are neutral review items (DC-12).
- **Channels:** Owner, Manager and Staff interactions in the Conversation Workspace and visual workspace, always under the same Permission Engine. No channel bypasses role boundaries. The WhatsApp leg is SB-P-1.20's (`6-§10-1a`, `6-§10-2`; `6-§10-1b`, Section 11.1).
- **Actor identity is preserved** for staff actions across Transactions, Stock, Orders and Documents (`BP-§10.7-B6`).
- **Shared foundations:** Permission Engine, identity, Human Language Layer, Conversation Engine, UDI, Reminder Engine, Notification Foundation, the purpose-limited Location Foundation, and audit and history (`6-§11-*`).
- **Privacy and dignity:** minimum necessary data, isolation, role-scoped visibility, purpose-limited location, auditable corrections, no tracking, no automated humiliation, accusation or punishment, and no routine Team LIPS access to employee data (`6-§12-*`).
- **Exceptions handled at minimum:** duplicate check-in or out, missing shift, location unavailable, ambiguous employee, roster conflict, correction request, leave approved after an absence, unauthorized action, retry, and payroll-support inconsistency. A disputed event enters review, never silent erasure (`6-§13-1` to `-11`).

**FCTM rows realized here (43 `IN SCOPE`):**

- Contract 6 (41): `6-§9-1`, `6-§9-2`, `6-§9-3`, `6-§9-4`, `6-§9-5`, `6-§9-6`, `6-§9-7`, `6-§9-8`, `6-§9-9`, `6-§9-10`, `6-§9-11`, `6-§10-1a`, `6-§10-2`, `6-§11-1`, `6-§11-2`, `6-§11-3`, `6-§11-4`, `6-§11-5`, `6-§11-6`, `6-§11-7`, `6-§11-8`, `6-§11-9`, `6-§12-1`, `6-§12-2`, `6-§12-3`, `6-§12-4`, `6-§12-5`, `6-§12-6`, `6-§12-7`, `6-§12-8`, `6-§13-1`, `6-§13-2`, `6-§13-3`, `6-§13-4`, `6-§13-5`, `6-§13-6`, `6-§13-7`, `6-§13-8`, `6-§13-9`, `6-§13-10`, `6-§13-11`
- Contract 9 (1): `9-§12-7`
- Build Plan (1): `BP-§10.7-B6`

### 8.12 Compliance Records, Document Intake and Dates

Sources: Contract 16 §§1–6; Contract 5 §4, §6, §7; Build Plan §10.7 C b1.

Mission design:

- **A compliance record** may keep business scope, type, identifier, issuing authority, issue and expiry or due dates, the supporting document, the responsible user, reminder configuration, status and history, interpretation confidence, human-confirmed corrections and notes. Fields vary by document type; no brittle one-size schema (`16-§4-1` to `-14`).
- **Intake through UDI** by photo, PDF, supported file, manual entry, or the Conversation Workspace: upload → interpret → preview → clarify → confirm → validated record. OCR alone is not trusted truth when key dates or identity are uncertain (`16-§5-*`; `5-§4-13`, `5-§6-12`, `5-§7-7`; `BP-§10.7-C1`). The WhatsApp intake leg is SB-P-1.20's (`16-§5-5b`).
- **Dates are distinguished:** issue, effective, expiry, renewal or due, inspection or other. When several are plausible or the document is unclear, the merchant confirms; a date is never chosen silently (`16-§6-1` to `-7`).

**FCTM rows realized here (47 `IN SCOPE`):**

- Contract 16 (43): `16-§1-1`, `16-§1-2`, `16-§2-1`, `16-§2-2`, `16-§2-3`, `16-§2-4`, `16-§2-5`, `16-§2-6`, `16-§3-1`, `16-§3-2`, `16-§3-3`, `16-§3-4`, `16-§3-5`, `16-§3-6`, `16-§3-7`, `16-§4-1`, `16-§4-2`, `16-§4-3`, `16-§4-4`, `16-§4-5`, `16-§4-6`, `16-§4-7`, `16-§4-8`, `16-§4-9`, `16-§4-10`, `16-§4-11`, `16-§4-12`, `16-§4-13`, `16-§4-14`, `16-§5-1`, `16-§5-2`, `16-§5-3`, `16-§5-4`, `16-§5-5a`, `16-§5-6`, `16-§5-7`, `16-§6-1`, `16-§6-2`, `16-§6-3`, `16-§6-4`, `16-§6-5`, `16-§6-6`, `16-§6-7`
- Contract 5 (3): `5-§4-13`, `5-§6-12`, `5-§7-7`
- Build Plan (1): `BP-§10.7-C1`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (3):** `16-§1-1`, `16-§1-2`, `5-§7-7`

### 8.13 Compliance Reminders, Renewal, Retrieval, Channels and Language

Sources: Contract 16 §§7–9, §§11–14; Contract 9 §12 b12; Build Plan §10.7 C b2–b3; Contract 11 (`DELEGATED`, SB-P-1.15).

Mission design:

- **Reminders use the shared Reminder Engine only** (`16-§7-1`; DC-08): advance notice, nearer-deadline escalation, done or renewed acknowledgement, snooze or reschedule, and renewal-cycle continuation. The historical 60/30/7/1 cadence is provenance, not Product Truth (`16-§7-2` to `-8`).
- **Renewal flow (W-C1):** confirmed record → reminder scheduled → timely reminder → document retrieved → renewal done outside Smart Business → updated evidence uploaded → interpreted and previewed → merchant confirms → history kept without erasing the prior document → next cycle. A passed reminder date never marks a renewal complete (`16-§8-1` to `-11`; `BP-§10.7-C2`).
- **Documents live in the shared Receipt/Document Cabinet** and are retrievable conversationally or in the workspace, subject to permissions (`16-§9-1`, `16-§9-2`; `BP-§10.7-C3`).
- **Channels:** upload, ask what is due, retrieve, confirm or correct dates and record renewed evidence through the same compliance truth; no duplicate reminders or records (`16-§11-*`). The WhatsApp leg is SB-P-1.20's (`16-§11-6b`).
- **Language:** English, Malayalam and Manglish for reminders and explanations; official document names may stay in their common English form (`16-§12-1`, `16-§12-2`).
- **Ask CFO and Daily Intelligence** may report stored renewal facts and surface a material near-term reminder, without fear-heavy messaging or legal conclusions (`16-§13-1` to `-4`).
- **Notifications** state the record, the due date, the next step and any uncertainty, without unsupported penalty claims or alarm (`16-§14-1` to `-6`).

**FCTM rows realized here (43 `IN SCOPE`):**

- Contract 16 (40): `16-§7-1`, `16-§7-2`, `16-§7-3`, `16-§7-4`, `16-§7-5`, `16-§7-6`, `16-§7-7`, `16-§7-8`, `16-§8-1`, `16-§8-2`, `16-§8-3`, `16-§8-4`, `16-§8-5`, `16-§8-6`, `16-§8-7`, `16-§8-8`, `16-§8-9`, `16-§8-10`, `16-§8-11`, `16-§9-1`, `16-§9-2`, `16-§11-1`, `16-§11-2`, `16-§11-3`, `16-§11-4`, `16-§11-5`, `16-§11-6a`, `16-§11-7`, `16-§12-1`, `16-§12-2`, `16-§13-1`, `16-§13-2`, `16-§13-3`, `16-§13-4`, `16-§14-1`, `16-§14-2`, `16-§14-3`, `16-§14-4`, `16-§14-5`, `16-§14-6`
- Contract 9 (1): `9-§12-12`
- Build Plan (2): `BP-§10.7-C2`, `BP-§10.7-C3`

### 8.14 Compliance Permissions, Legal Boundary, Privacy and Exceptions

Sources: Contract 16 §10, §§15–18, §21 p1; Build Plan §10.7 C b4–b5.

Mission design:

- **Permissions:** the Owner has full compliance authority; a Manager only Owner-delegated visibility and actions; an Employee no broad document access by default, only what a specific task needs; Support no routine browsing (`16-§10-1` to `-4`; `BP-§10.7-C5`).
- **Legal boundary:** AI may interpret, identify candidate dates, organize, remind, explain stored facts and suggest verification or renewal. It never certifies compliance, claims the merchant is compliant because a document is stored, fabricates law or penalties, files or renews with authorities without a separately approved integration, or changes confirmed dates from later OCR (`16-§15-1` to `-11`; `BP-§10.7-C4`).
- **Exceptions handled:** unreadable document, multiple dates, expired document found late, duplicate upload, superseding renewal, reminder delivery failure, unsupported type, permission denied, known deadline without document, and law outside current knowledge. Uncertainty is visible and contained (`16-§16-1` to `-11`).
- **Privacy:** isolation, permission-scoped retrieval, no unnecessary staff exposure, purpose-limited support, the current retention and deletion policy (the governed C25 lifecycle; DC-09), and no secret manipulation or upsell (`16-§17-1` to `-7`).
- **Shared foundations only:** UDI, Cabinet, Reminder Engine, Notification Foundation, Permission Engine, Business Memory, Human Language Layer, channels and audit. No compliance-only OCR, storage or scheduler (`16-§18-1` to `-10`).

**FCTM rows realized here (46 `IN SCOPE`):**

- Contract 16 (44): `16-§10-1`, `16-§10-2`, `16-§10-3`, `16-§10-4`, `16-§15-1`, `16-§15-2`, `16-§15-3`, `16-§15-4`, `16-§15-5`, `16-§15-6`, `16-§15-7`, `16-§15-8`, `16-§15-9`, `16-§15-10`, `16-§15-11`, `16-§16-1`, `16-§16-2`, `16-§16-3`, `16-§16-4`, `16-§16-5`, `16-§16-6`, `16-§16-7`, `16-§16-8`, `16-§16-9`, `16-§16-10`, `16-§16-11`, `16-§17-1`, `16-§17-2`, `16-§17-3`, `16-§17-4`, `16-§17-5`, `16-§17-6`, `16-§17-7`, `16-§18-1`, `16-§18-2`, `16-§18-3`, `16-§18-4`, `16-§18-5`, `16-§18-6`, `16-§18-7`, `16-§18-8`, `16-§18-9`, `16-§18-10`, `16-§21-1`
- Build Plan (2): `BP-§10.7-C4`, `BP-§10.7-C5`

### 8.15 Shared Location Foundation and Location Disclosures

Sources: Contract 22 §16, §29 b9; Contract 1 §14; Build Plan §10.7 A b8, B b4; `12:FPDR-2`, `12:FPDR-3`; `18:FPDR-2`; `18:FPDR-1`.

Mission design:

- **One shared, purpose-limited primitive**, not independent tracking systems (`22-§16-1`; `12:FPDR-2`). Approved Phase 1 uses: point-in-time attendance verification, customer delivery destination and point-in-time delivery proof or context (`22-§16-8` to `-10`; `1-§14-1` to `-4`). Any other purpose, including future location-based live tracking, needs separate explicit approval with its own disclosures (`22-§16-11`; `1-§14-5`; `18:FPDR-2`).
- **Never:** default continuous employee or route surveillance, or tracking because an assignment or attendance setting exists (`22-§16-2`; `1-§14-6`, `1-§14-7`; `BP-§10.7-A8`, `BP-§10.7-B4`).
- **Where captured:** collect only what is necessary, make the purpose understandable, end access when the purpose ends, prevent unrelated role access, and follow the current retention policy, which for location is `18:FPDR-1` (`1-§14-8` to `-12`).
- **The five disclosures each feature must define (`22-§16-3` to `-7`; `12:FPDR-3`)** are supplied by `18:FPDR-1` §4 (the record prevails). Each rule is a **provisional research-backed Phase One assumption — not professionally validated**:

| Disclosure | Attendance (A2) | Delivery proof (B2) | Customer destination (C1, C2, C3) |
|---|---|---|---|
| Why (purpose) | Point-in-time attendance verification | Point-in-time delivery proof or context, where `1-§15-5` is adopted | Customer delivery destination |
| Who may see it | The validation itself; people see the result, not coordinates | The validation itself; the merchant sees the status or proof result | The authorized delivery role for the active order |
| When captured | Only at the attendance event | Only at the delivery-proof event | When the destination is given for an order |
| How long retained | Raw coordinate discarded after the validation event; the attendance fact survives | No coordinate retained after the proof event; the delivery event and its COD, payment and audit facts survive | Temporary navigation or one-time pin erased when the delivery purpose ends; statutory or postal address where legally required; a saved reusable address while actively used; exact GPS not kept because an address is saved |
| When access ends | When the task or validation need ends | When the task or validation need ends | When the delivery purpose ends |

- **Exceptions:** only individually justified, documented, access-restricted dispute, legal or security holds with release or end conditions; no blanket, category or indefinite "for audit" retention (`18:FPDR-1` §5).
- **No numeric raw-GPS retention period** is approved or may be inferred from GST, CERT-In, limitation, future DPDP Rule 8 or lifecycle windows (`18:FPDR-1` §6; C22 §33.4). `DLEG` stays; professional validation is deferred under Founder Decision Record 06 §4 (`18:FPDR-1` §7).
- **The research STOP triggers stay binding** on later design (`18:FPDR-1` §6): any of them requires a STOP and Founder re-escalation.

**FCTM rows realized here (27 `IN SCOPE`):**

- Contract 1 (13): `1-§14-1`, `1-§14-2`, `1-§14-3`, `1-§14-4`, `1-§14-5`, `1-§14-6`, `1-§14-7`, `1-§14-8`, `1-§14-9`, `1-§14-10`, `1-§14-11`, `1-§14-12`, `1-§14-13`
- Contract 22 (12): `22-§16-1`, `22-§16-2`, `22-§16-3`, `22-§16-4`, `22-§16-5`, `22-§16-6`, `22-§16-7`, `22-§16-8`, `22-§16-9`, `22-§16-10`, `22-§16-11`, `22-§29-9`
- Build Plan (2): `BP-§10.7-A8`, `BP-§10.7-B4`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (1):** `22-§29-9`

### 8.16 Order and Staff/HR Workspace Views

Sources: Contract 17 §4 b7, §9, §10 (inherited; SB-P-1.17 assigned them here); Contract 21 §10 (`DELEGATED`).

Mission design:

- **Inside the SB-P-1.17 Manager workspace shell**, not a second workspace (DC-11; `D17`). Views appear only when the add-on is enabled and the user's role permits (`17-§4-15`; `DENT`).
- **Staff/HR views:** roster, attendance, leave requests, correction and context review, payroll support, and role and permission administration where appropriate (`17-§9-1` to `-6`). The payroll view carries no export obligation beyond the C17 unit (`L-F5`). Employee self-service shows only explicitly permitted information and actions, using the SB-P-1.12 self-service mechanics (`17-§9-7`; 21-§10). Contract 17 §9 introduces its workspace views with “may include”; the “payroll support/export” unit (17-§9-5) remains IN SCOPE in the FCTM, but its OBL classification is subject to the open MC-544 source-semantics screening. Do not treat payroll export, any export format, overtime-derived export fields, calculation or automatic pay action as a new universally mandatory obligation from 18:FPDR-5 or this Blueprint; obtain the authoritative screening disposition before locking a firm export commitment.
- **Order & Delivery views:** orders by state, pending confirmation, preparation and assignment, delivery exceptions, COD and payment issues, and delivery history and proof (`17-§10-1` to `-6`). The dashboard creates no marketplace and keeps delivery and privacy boundaries (`17-§10-7`).

**FCTM rows realized here (15 `IN SCOPE`):**

- Contract 17 (15): `17-§4-15`, `17-§9-1`, `17-§9-2`, `17-§9-3`, `17-§9-4`, `17-§9-5`, `17-§9-6`, `17-§9-7`, `17-§10-1`, `17-§10-2`, `17-§10-3`, `17-§10-4`, `17-§10-5`, `17-§10-6`, `17-§10-7`

### 8.17 Acceptance, Completion Gates, Sequencing and Mission Outcome Accounting

Sources: Contract 1 §26, §31; Contract 6 §14, §17; Contract 16 §20, §23; Build Plan §5.5, §10.7, §11, §13, §15, §16 p2; GPCV §5, §8 b4.

The contract acceptance scenarios, Founder Runtime Verification scenarios and completion gates are listed in Section 15. Completion gates are reported honestly at Stage 22. A contract is complete only when every one of its `BUILD NOW` rows is demonstrated across the missions that own them, including the SB-P-1.20 legs (GPCV §4.4; `BP-§11-p4`).

- **Pilot sequencing:** Smart Order & Delivery and the other pilot-entry add-ons must be ready before the first ten pilot merchants, and the sequence must not onboard pilot merchants before the required add-ons are accepted (`BP-§5.5-p1`, `BP-§5.5-p2`). The assigned SB-P-1.20 legs carry the same deadline (`18:FPDR-3` §6). Release sequencing is Mission Control's (U-09).
- **Prices block nothing:** the Order & Delivery and Staff/HR prices stay unresolved and off the critical path; they must not be guessed (`GPCV-§8-4`; `BP-§15-p2`, `BP-§15-p3`; Section 11.5).
- **Cross-mission accounting:** the GPCV register rows 1, 6 and 16 are updated only by Mission Control at acceptance, counting only demonstrated rows (`GPCV-R1`, `GPCV-R6`, `GPCV-R16`; `BP-§11-p3`).

**FCTM rows realized here (76 `IN SCOPE`):**

- Contract 1 (16): `1-§26-1`, `1-§26-2`, `1-§26-3`, `1-§26-4`, `1-§26-5`, `1-§26-6`, `1-§26-7`, `1-§26-8`, `1-§26-9`, `1-§26-10`, `1-§26-11`, `1-§26-12a`, `1-§26-13`, `1-§26-14`, `1-§31-1`, `1-§31-2`
- Contract 6 (11): `6-§14-1`, `6-§14-2`, `6-§14-3`, `6-§14-4`, `6-§14-5`, `6-§14-6`, `6-§14-7`, `6-§14-8`, `6-§14-9`, `6-§14-10`, `6-§17-1`
- Contract 16 (11): `16-§20-1`, `16-§20-2`, `16-§20-3`, `16-§20-4`, `16-§20-5`, `16-§20-6`, `16-§20-7a`, `16-§20-8`, `16-§20-9`, `16-§20-10`, `16-§23-1`
- Build Plan (34): `BP-§5.5-p1`, `BP-§5.5-p2`, `BP-§10.7-W`, `BP-§10.7-AS1`, `BP-§10.7-BS1`, `BP-§10.7-CS1`, `BP-§10.7-X`, `BP-§11-p1`, `BP-§11-b1`, `BP-§11-b2`, `BP-§11-b3`, `BP-§11-b4`, `BP-§11-b5`, `BP-§11-b6`, `BP-§11-b7`, `BP-§11-b9`, `BP-§11-p3`, `BP-§11-p4`, `BP-§11-p5`, `BP-§13-p1`, `BP-§13-T`, `BP-§13-b1`, `BP-§13-b2`, `BP-§13-b3`, `BP-§13-b4`, `BP-§13-b5`, `BP-§13-b6`, `BP-§13-b7`, `BP-§13-b8`, `BP-§13-b9`, `BP-§13-b10`, `BP-§15-p2`, `BP-§15-p3`, `BP-§16-p2`
- GPCV (4): `GPCV-R1`, `GPCV-R6`, `GPCV-R16`, `GPCV-§8-4`

**Of which acceptance, experience or completion-gate rows carried into Section 15 (42):** `1-§26-1`, `1-§26-2`, `1-§26-3`, `1-§26-4`, `1-§26-5`, `1-§26-6`, `1-§26-7`, `1-§26-8`, `1-§26-9`, `1-§26-10`, `1-§26-11`, `1-§26-12a`, `1-§26-13`, `1-§26-14`, `1-§31-1`, `1-§31-2`, `6-§14-1`, `6-§14-2`, `6-§14-3`, `6-§14-4`, `6-§14-5`, `6-§14-6`, `6-§14-7`, `6-§14-8`, `6-§14-9`, `6-§14-10`, `6-§17-1`, `16-§20-1`, `16-§20-2`, `16-§20-3`, `16-§20-4`, `16-§20-5`, `16-§20-6`, `16-§20-7a`, `16-§20-8`, `16-§20-9`, `16-§20-10`, `16-§23-1`, `BP-§10.7-AS1`, `BP-§10.7-BS1`, `BP-§10.7-CS1`, `BP-§10.7-X`

## 9. UI / UX Expectations

By reference, not new design. Exact screens, labels and interaction design are later product-design and engineering matters within these limits:

- **Drafts look like drafts.** An order, roster, payroll-support or compliance record built from interpretation is visibly a draft or preview until a human confirms it. Uncertain fields are shown as uncertain, never filled in (`1-§9-19`; `6-§9-3`; `16-§5-7`, `16-§6-7`).
- **The smallest useful question.** Clarification asks one consequential question at a time in the merchant's language (C1 §9 p3; C9).
- **Availability honesty.** Known, unknown and unavailable are distinct; no promise the data cannot support (`1-§10-9`).
- **Recorded decisions.** A change approval, proof or COD entry shows who recorded it and when. Before SB-P-1.20, a customer decision is shown as recorded by the merchant, and customer-channel steps show "customer channel: not demonstrated" (`18:FPDR-3` §6).
- **Delivery staff see a task, not a business.** Only the assigned delivery's information and actions; no Owner-wide data (`1-§5-15` to `-22`; `1-§13-*`).
- **Location shows results, not maps of people.** Attendance and proof show the validation result; there is no live-location view for any role (`18:FPDR-2`; `18:FPDR-1` §4). The purpose of any capture is understandable at the moment of capture (`1-§14-9`).
- **Neutral staff language.** Attendance anomalies and payroll inconsistencies are review items, never accusations (DC-12; `6-§9-7`).
- **Calm compliance messaging.** What is due, when, what to do next and what is uncertain; no penalty threats or legal assurances (`16-§14-*`; `16-§15-7`, `16-§15-8`).
- **Role-appropriate workspace.** Order and Staff/HR views show only granted scope, inside the existing Manager workspace (DC-11). No fear-based upsell (C17 §3, §21).

## 10. Business Rules

### 10.1 Founder decisions (by reference)

The five SB-P-1.18 decisions govern this Blueprint. Each record carries the Founder's verbatim statement. The text quoted below is either the Founder's verbatim wording or, where marked, the accepted option text the record quotes. Where a summary is given, the record prevails. "Rows citing it" lists the FCTM rows whose Founder-decision cell carries the decision (verified on FCTM blob `b00603ec`).

**`18:FPDR-2` — F-2 live tracking** (record `11-…`, PR #1082). Founder (MC-520): "Founder F-2 decision: I select Option A." Option A as worded in the accepted brief (not the Founder's words):

> I approve reducing the Source 09/11 live-tracking step for SB-P-1.18: delivery visibility is live order/delivery status plus point-in-time location at destination and proof. Location-based live tracking is not committed in Phase 1 and needs a separately approved future purpose under Contract 22 §16.

T2 conflict and T7 reduction; default continuous surveillance stays rejected. Applied in: Sections 8.7, 8.15, 9. Rows citing `18:FPDR-2` (2): `1-§14-5`, `22-§16-11`.

**`18:FPDR-5` — F-5 overtime records** (record `12-…`, PR #1085). Founder (MC-546): "Founder F-5 decision: I select Option B." Option B as worded in the accepted packet (not the Founder's words):

> Source 11 'overtime records' is a distinct SB-P-1.18 Staff/HR recording obligation. An overtime record may originate from a manual report, a system-proposed entry or a manager entry, including disputed entries. It may cite approved shift and attendance records as evidence, but they do not define overtime. It is reviewed and corrected by authorized humans with audit, is visible only to authorized roles and the employee's own record, and is never punitive. The definition of overtime, eligibility, thresholds and any calculation are not decided here. They remain payroll assistance under Contract 06 §8, subject to qualified Indian employment/payroll validation before the EIS.

Applied in: Sections 8.10, 12.3, 15.4. Rows citing `18:FPDR-5` (8): `6-§3-6`, `6-§8-2`, `S11-L443-1`, `S11-L443-2`, `S11-L443-3`, `S11-L443-4`, `S11-L443-5`, `17-§9-5`.

**`18:FPDR-3` — F-3 customer-facing interactions before SB-P-1.20** (record `13-…`, PR #1087). Founder row-specific selections (MC-559-E, reproduced in MC-561): Package P for 16 rows (native in SB-P-1.18 plus a named SB-P-1.20 channel leg), Package W for 5 rows (whole-row customer-channel intake to SB-P-1.20), and `1-§15-4` held. The Founder's closing line:

> All unspecified rows unchanged; 1-§15-4 held for F-4. No automatic transfer. Preserve original ADD-ON + BUILD NOW before first 10 pilot merchants commitment without deferred deadline.

and the Founder's shared-engine clarification:

> Assignment of WhatsApp channel responsibility to SB-P-1.20 must never transfer ownership of order truth, shared document and voice interpretation, business permissions, consent state, financial recording or the end-to-end business lifecycle away from their applicable shared Smart Business engines.

T7 mission assignment for 21 rows; no timeline change. Applied in: Sections 6, 8.1–8.4, 8.7, 9, 11.1, 12.5, 15. Rows citing `18:FPDR-3` (21): `1-§5-24`, `1-§5-25`, `1-§5-26`, `1-§5-27`, `1-§5-28`, `1-§5-29`, `1-§7-1`, `1-§7-2`, `1-§7-3`, `1-§7-4`, `1-§7-5`, `1-§8-2`, `1-§8-3`, `1-§8-4`, `1-§8-5`, `1-§17-3`, `1-§17-5`, `1-§17-6`, `1-§20-1`, `1-§24-13`, `1-§26-1`.

**`18:FPDR-4` — F-4 permissive mechanisms** (record `14-…`, PR #1094). Founder (MC-612, Decision 1):

> I approve the permissive-mechanism approach with the proposed minimum:
>
> - `1-§10-3` — quantity changes
> - `1-§10-6` — item removal
> - `1-§15-2` — staff delivery completion
> - `1-§15-7` — merchant confirmation
> - `6-§5-2` — QR plus point-in-time geofence, conditional on DC-14
>
> All other F-4 mechanisms remain permitted and adoptable rather than universally mandatory.
>
> Mandatory substitution and partial fulfilment under `1-§10-4` and `1-§10-5` remain unchanged. COD/payment recording, permission controls and auditability remain mandatory wherever independently required.
>
> No continuous employee tracking or automatic punitive decision-making is authorized.

T3. FCTM codes `L-F4M` (minimum) and `L-F4A` (adoptable). Applied in: Sections 8.4, 8.6, 8.9, 15.4. Rows citing `18:FPDR-4` (10): `1-§10-3`, `1-§10-6`, `1-§10-7`, `1-§15-2`, `1-§15-3`, `1-§15-4`, `1-§15-5`, `1-§15-6`, `1-§15-7`, `6-§5-2`.

**`18:FPDR-1` — F-1 location retention and access expiry** (record `15-…`, PR #1099; F1-R pathway, `mission-control/07-…`). Founder (MC-645), the whole statement:

> FOUNDER F-1 DECISION — MC-644
> Attendance: A2
> Delivery proof: B2
> Customer destinations: C123
> Specific justified dispute/legal/security hold exceptions: yes
> I approve these as provisional research-backed Phase One product-design assumptions only, subject to the MC-643 evidence qualifications, DLEG professional-validation hold, and separate canonical decision recording. No fixed numeric raw-GPS retention period, legal clearance or implementation authorization is approved. Proceed with the decision-record preparation through the official GitHub Communication Protocol.

T1/T3. FCTM code `L-F1`. Applied in: Sections 8.2, 8.6, 8.9, 8.15, 9, 15.4. Rows citing `18:FPDR-1` (5): `1-§5-26`, `1-§14-12`, `1-§15-5`, `1-§22-11`, `22-§16-6`.

**Upstream decisions applied by reference:** `12:FPDR-1` (Notification Foundation, SB-P-1.15, native only); `12:FPDR-2` (Shared Location Foundation workstream inside SB-P-1.18); `12:FPDR-3` (each location-consuming feature defines purpose, audience, capture timing, retention and access end; no new retention period or capture mode); `16:FPDR-1` (basic shared customer identity, SB-P-1.16). Rows citing `12:FPDR-1` (13): `1-§17-1`, `1-§17-2`, `1-§17-4`, `1-§17-7`, `1-§17-8`, `1-§17-9`, `16-§14-1`, `16-§14-2`, `16-§14-3`, `16-§14-4`, `16-§14-5`, `16-§14-6`, `22-§12-1`. Rows citing `12:FPDR-2` (20): `1-§14-1`, `1-§14-2`, `1-§14-3`, `1-§14-4`, `1-§14-6`, `1-§14-7`, `1-§14-8`, `1-§14-9`, `1-§14-10`, `1-§14-11`, `1-§14-13`, `6-§5-3`, `22-§16-1`, `22-§16-2`, `22-§16-8`, `22-§16-9`, `22-§16-10`, `22-§16-11`, `22-§29-9`, `BP-§10.7-W`. Rows citing `12:FPDR-3` (6): `6-§5-3`, `22-§16-3`, `22-§16-4`, `22-§16-5`, `22-§16-6`, `22-§16-7`. Rows citing `16:FPDR-1` (9): `1-§6-1`, `1-§6-2`, `1-§6-3`, `1-§6-4`, `1-§6-5`, `1-§6-6`, `1-§6-7`, `3-§15-7`, `BP-§10.3-S2`.

### 10.2 Standing rules by reference

The following `IN SCOPE` rule and principle rows (137 rows) are business rules of this mission. Each is realized in its Section 8 subsection.

- Contract 1 (44): `1-§3-1`, `1-§3-2`, `1-§3-3`, `1-§3-5`, `1-§3-6`, `1-§3-7`, `1-§3-9`, `1-§3-10`, `1-§6-1`, `1-§8-1`, `1-§8-11`, `1-§10-1`, `1-§11-4`, `1-§13-1`, `1-§13-9`, `1-§14-1`, `1-§14-12`, `1-§14-13`, `1-§16-4`, `1-§17-1`, `1-§18-7`, `1-§19-5`, `1-§23-1`, `1-§23-2`, `1-§23-3`, `1-§23-4`, `1-§23-5a`, `1-§23-6`, `1-§23-7`, `1-§23-8`, `1-§23-9`, `1-§23-10`, `1-§23-11`, `1-§23-12`, `1-§24-15`, `1-§25-1`, `1-§25-2`, `1-§25-3`, `1-§25-4`, `1-§25-5`, `1-§25-6`, `1-§25-7`, `1-§25-8`, `1-§28-1`
- Contract 6 (21): `6-§5-3`, `6-§5-5`, `6-§6-2`, `6-§7-1`, `6-§8-1`, `6-§10-1a`, `6-§11-1`, `6-§11-2`, `6-§11-3`, `6-§11-4`, `6-§11-5`, `6-§11-6`, `6-§11-7`, `6-§11-8`, `6-§11-9`, `6-§12-1`, `6-§12-2`, `6-§12-3`, `6-§12-4`, `6-§12-5`, `6-§12-8`
- Contract 16 (31): `16-§3-1`, `16-§3-2`, `16-§3-3`, `16-§3-4`, `16-§3-5`, `16-§3-7`, `16-§4-14`, `16-§5-6`, `16-§7-1`, `16-§7-3`, `16-§9-1`, `16-§11-6a`, `16-§12-2`, `16-§14-1`, `16-§16-11`, `16-§17-1`, `16-§17-2`, `16-§17-3`, `16-§17-4`, `16-§17-5`, `16-§17-6`, `16-§18-1`, `16-§18-2`, `16-§18-3`, `16-§18-4`, `16-§18-5`, `16-§18-6`, `16-§18-7`, `16-§18-8`, `16-§18-9`, `16-§21-1`
- Contract 22 (2): `22-§16-1`, `22-§16-11`
- Contract 9 (3): `9-§12-7`, `9-§12-9`, `9-§12-12`
- Contract 3 (3): `3-§15-7`, `3-§15-12`, `3-§15-13`
- Build Plan (30): `BP-§5.5-p1`, `BP-§5.5-p2`, `BP-§10.7-W`, `BP-§11-p1`, `BP-§11-b1`, `BP-§11-b2`, `BP-§11-b3`, `BP-§11-b4`, `BP-§11-b5`, `BP-§11-b6`, `BP-§11-b7`, `BP-§11-b9`, `BP-§11-p3`, `BP-§11-p4`, `BP-§11-p5`, `BP-§13-p1`, `BP-§13-T`, `BP-§13-b1`, `BP-§13-b2`, `BP-§13-b3`, `BP-§13-b4`, `BP-§13-b5`, `BP-§13-b6`, `BP-§13-b7`, `BP-§13-b8`, `BP-§13-b9`, `BP-§13-b10`, `BP-§15-p2`, `BP-§15-p3`, `BP-§16-p2`
- GPCV (3): `GPCV-§8-3`, `GPCV-§8-4`, `GPCV-§8-5`

### 10.3 Must-not rows

The following `IN SCOPE` must-not rows (64 rows) are checked as "must not appear" in this mission's deliverable. The Build Plan §16, GPCV §9 and contract rejections are in Section 11.3.

- Contract 1 (24): `1-§3-4`, `1-§3-8`, `1-§5-14`, `1-§5-22`, `1-§5-30`, `1-§7-4`, `1-§7-5`, `1-§8-12`, `1-§9-19`, `1-§10-9`, `1-§14-5`, `1-§14-6`, `1-§14-7`, `1-§15-9`, `1-§15-10`, `1-§16-5`, `1-§17-9`, `1-§21-8`, `1-§21-9`, `1-§21-10`, `1-§21-11`, `1-§21-12`, `1-§21-13`, `1-§22-15`
- Contract 6 (15): `6-§4-7`, `6-§5-4`, `6-§6-3`, `6-§8-3`, `6-§8-4`, `6-§8-5`, `6-§8-6`, `6-§9-7`, `6-§9-8`, `6-§9-9`, `6-§9-10`, `6-§9-11`, `6-§10-2`, `6-§12-6`, `6-§12-7`
- Contract 16 (16): `16-§3-6`, `16-§5-7`, `16-§6-7`, `16-§8-11`, `16-§10-3`, `16-§10-4`, `16-§11-7`, `16-§13-4`, `16-§14-6`, `16-§15-7`, `16-§15-8`, `16-§15-9`, `16-§15-10`, `16-§15-11`, `16-§17-7`, `16-§18-10`
- Contract 22 (1): `22-§16-2`
- Contract 17 (2): `17-§9-7`, `17-§10-7`
- Build Plan (6): `BP-§10.7-A8`, `BP-§10.7-A9`, `BP-§10.7-A11`, `BP-§10.7-B4`, `BP-§10.7-B7`, `BP-§10.7-B8`

## 11. Out of Scope

This section accounts for every FCTM row that is not `IN SCOPE`: 17 `ASSIGNED TO LATER MISSION`, 77 `DELEGATED`, 48 `OUT OF BUILD SCOPE`, 27 `NOT APPLICABLE` and 8 `UNRESOLVED FOUNDER DECISION`.

- **Copied without change.** Pointers, build commitments, owning missions, citations and Founder-decision cells are copied from the canonical FCTM exactly.
- **Still committed.** Each row is **still committed — not in this mission**, with its owning mission or preserved classification. No `BUILD NOW` row becomes `BUILD LATER`, and exclusion here cancels no other mission's responsibility.
- **Interfaces are not pull-forward.** Where this mission exposes an interface to another mission's obligation, the Section 8 row realizes the interface only (Section 12.5).

### 11.1 Assigned to later missions — still committed, not in this mission (17 rows)

All 17 rows are assigned to SB-P-1.20. Each keeps its approved build commitment, including "before first 10 pilot merchants" where the FCTM carries it. Five are whole-row customer-channel intake assignments by `18:FPDR-3` Package W (`L-F3W`); the rest are WhatsApp-channel slices (`L-X20`). Assignment is mission scheduling, not `BUILD LATER`.

| FCTM row | Exact source pointer | Build commitment | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|
| 1-§7-3 | §7 b2: approved templates/provider rules | ADD-ON + BUILD NOW — before first 10 pilot merchants | SB-P-1.20 | NI-ORD; L-F3W via R-17 (C23 §17) | 18:FPDR-3 |
| 1-§8-2 | §8 <Customer initiated> b1: text | ADD-ON + BUILD NOW — before first 10 pilot merchants | SB-P-1.20 | NI-ORD; L-F3W via E-1 (1-§18-1), text; merchant-initiated text stays 1-§8-8 | 18:FPDR-3 |
| 1-§8-3 | §8 <Customer initiated> b2: voice | ADD-ON + BUILD NOW — before first 10 pilot merchants | SB-P-1.20 | NI-ORD; L-F3W via E-1 (1-§18-1), voice; merchant-initiated stays 1-§8-8 | 18:FPDR-3 |
| 1-§8-4 | §8 <Customer initiated> b3: image/photo of a handwritten list | ADD-ON + BUILD NOW — before first 10 pilot merchants | SB-P-1.20 | NI-ORD; NI-UDI; L-F3W via E-1 (1-§18-1), image; merchant-initiated stays 1-§8-9 | 18:FPDR-3 |
| 1-§8-5 | §8 <Customer initiated> b4: supported document input | ADD-ON + BUILD NOW — before first 10 pilot merchants | SB-P-1.20 | NI-ORD; NI-UDI; L-F3W via E-1 (1-§18-1), document; merchant-initiated stays 1-§8-10 | 18:FPDR-3 |
| 1-§18-1 | §18 b1: customer order intake | ADD-ON + BUILD NOW — before first 10 pilot merchants | SB-P-1.20 | L-X20; A-BP109; BP-§8-4 | — |
| 1-§18-2 | §18 b2: merchant/staff order creation | ADD-ON + BUILD NOW — before first 10 pilot merchants | SB-P-1.20 | L-X20; A-BP109; BP-§8-4 | — |
| 1-§18-3 | §18 b3: clarification | ADD-ON + BUILD NOW — before first 10 pilot merchants | SB-P-1.20 | L-X20; A-BP109; BP-§8-4 | — |
| 1-§18-4 | §18 b4: confirmations | ADD-ON + BUILD NOW — before first 10 pilot merchants | SB-P-1.20 | L-X20; A-BP109; BP-§8-4 | — |
| 1-§18-5 | §18 b5: status communication | ADD-ON + BUILD NOW — before first 10 pilot merchants | SB-P-1.20 | L-X20; A-BP109; BP-§8-4 | — |
| 1-§18-6 | §18 b6: approved delivery interactions | ADD-ON + BUILD NOW — before first 10 pilot merchants | SB-P-1.20 | L-X20; A-BP109; BP-§8-4 | — |
| 1-§23-5b | §23 b5: Conversation Workspace / WhatsApp adapters | ADD-ON + BUILD NOW — before first 10 pilot merchants | SB-P-1.20 | L-X20; A-BP109 (WhatsApp adapter) | — |
| 1-§26-12b | §26 b12: WhatsApp and Conversation Workspace operate on the same order truth | ADD-ON + BUILD NOW — before first 10 pilot merchants | SB-P-1.20 | L-X20; A-BP109; BP-§10.9-A (WhatsApp leg) | — |
| 6-§10-1b | §10 p1: Owner/Manager/Staff interactions may occur through approved channels in… | ADD-ON + BUILD NOW | SB-P-1.20 | L-X20; A-BP109; 23-§4-3 (WhatsApp leg) | — |
| 16-§5-5b | §5 b5: Conversation Workspace / WhatsApp where appropriate | ADD-ON + BUILD NOW | SB-P-1.20 | L-X20; A-BP109 (WhatsApp) | — |
| 16-§11-6b | §11 p2: through the same shared compliance/document truth | ADD-ON + BUILD NOW | SB-P-1.20 | L-X20; A-BP109 (WhatsApp leg of §11) | — |
| 16-§20-7b | §20 b7: WhatsApp and Workspace retrieve the same confirmed record | ADD-ON + BUILD NOW | SB-P-1.20 | L-X20; A-BP109; BP-§10.9-A (WhatsApp leg) | — |

### 11.2 Delegated — owned elsewhere, consumed or supplied here (77 rows)

Owned by another contract or another mission's canonical FCTM. Part E rows are delegated touch points this mission consumes; Part F rows are reverse dependencies that consume this mission's facts. Distribution: SB-P-1.12 23, SB-P-1.13 3, SB-P-1.14 5, SB-P-1.15 24, SB-P-1.16 15, SB-P-1.17 2, SB-P-1.19 3, SB-P-1.20 2.

#### `SB-P-1.12` (23 rows)

| FCTM row | Exact source pointer | Owning mission | Citation | Founder decision |
|---|---|---|---|---|
| 21-§10-1 | §10 b1 own attendance (permission mechanics) | SB-P-1.12 | I-12; feature rows 6-§3-7, 17-§9-7 | — |
| 21-§10-2 | §10 b2 own correction requests | SB-P-1.12 | I-12; feature rows 6-§13-6, 10-§13-7 | — |
| 21-§10-3 | §10 b3 own leave/request status | SB-P-1.12 | I-12; feature rows 6-§7-* | — |
| 21-§10-4 | §10 b4 assigned tasks/orders/deliveries | SB-P-1.12 | I-12; feature rows 1-§13-* | — |
| 21-§10-5 | §10 b5 other job-specific information | SB-P-1.12 | I-12 | — |
| 21-§10-6 | §10 p3 no exposure of unrelated staff/Owner intelligence | SB-P-1.12 | I-12; feature rows 6-§4-6, 17-§9-7 | — |
| 21-§13-2 | §13 b2 Customer sees own order/delivery communication | SB-P-1.12 | I-12; feature rows 1-§5-*; U-01 | — |
| 21-§13-3 | §13 b3 Delivery Staff sees assigned delivery details | SB-P-1.12 | I-12; feature rows 1-§5-*, 1-§25-3 | — |
| 21-§14-1 | §14 purpose-limited support access | SB-P-1.12 | I-12; feature rows 1-§25-8, 6-§12-8, 16-§10-4 | — |
| 21-§16-1 | §16 entitlement AND role jointly required (add-on gate) | SB-P-1.12 | I-12; U-07 | — |
| 21-§16-2 | §16 no dynamic schema create/drop for entitlement | SB-P-1.12 | I-12; BP-§16-16 | — |
| 21-§17 | §17 permission change and runtime revalidation | SB-P-1.12 | I-12; feature row 1-§24-6 | — |
| 21-§18-1 | §18 confirmation binding — exact actor | SB-P-1.12 | I-12; feature rows 1-§10-7, 6-§8-8 | — |
| 22-§5-4 | §5 identity — Employee | SB-P-1.12 | I-12 | — |
| 22-§5-5 | §5 identity — customer | SB-P-1.12 | I-12; 16:FPDR-1 | — |
| 22-§5-7 | §5 identity — delivery staff | SB-P-1.12 | I-12 | — |
| 22-§13-1 | §13 confirmation/clarification before consequential write | SB-P-1.12 | I-12 | — |
| 22-§14-1 | §14 audit — raw/original event plus human context | SB-P-1.12 | I-12; feature rows 6-§5-1, 6-§7-* | — |
| 22-§15 | §15 idempotency / duplicate protection | SB-P-1.12 | I-12; feature rows 1-§24-7, 6-§13-9, 16-§16-4 | — |
| 22-§33-1 | §33 personal identity deletion separate from employee/statutory records | SB-P-1.12 | I-12; C22 §33.4 (U-03 evidence) | — |
| 21-§4-3 | §4 Employee role: stock/order tasks, own attendance, correction/leave, assigned delivery | SB-P-1.12 | I-12; feature rows 6-§4-*, 1-§5-* | — |
| 21-§4-5 | §4 Customer: purpose-limited order/delivery participant | SB-P-1.12 | I-12; feature rows 1-§5-23…30 | — |
| 21-§4-6 | §4 Delivery Staff: purpose-limited assigned-delivery user | SB-P-1.12 | I-12; feature rows 1-§5-15…22 | — |

#### `SB-P-1.13` (3 rows)

| FCTM row | Exact source pointer | Owning mission | Citation | Founder decision |
|---|---|---|---|---|
| 24-§6-2 | §6 intent classes incl. order/delivery, attendance/HR, compliance | SB-P-1.13 | I-13 (IN SCOPE SB-P-1.13; D18 declared); producer rows 1-§21-*, 6-§9-*, 16-§15-* | — |
| 24-§9-2 | §9 AI context sources incl. order, staff and compliance records | SB-P-1.13 | I-13 (IN SCOPE SB-P-1.13; D18 declared); producer rows 1-§22-*, 6-§3-*, 16-§4-* | — |
| 24-§10-10 | §10 customer conversation must not expose internal merchant data | SB-P-1.13 | I-13 (IN SCOPE SB-P-1.13; D18 declared); producer rows 1-§5-30, 1-§25-* | — |

#### `SB-P-1.14` (5 rows)

| FCTM row | Exact source pointer | Owning mission | Citation | Founder decision |
|---|---|---|---|---|
| 25-§4-1 | §4 durable object storage for documents/proof media | SB-P-1.14 | I-14; feature rows 16-§9-*, 1-§15-3 | — |
| 25-§4-8 | §4 retention state on stored objects | SB-P-1.14 | I-14; feature row 16-§17-5 | — |
| 22-§4-3 | §4 a feature owns its domain model inside one Business Memory (orders, HR, compliance) | SB-P-1.14 | I-14; feature rows 1-§22-*, 16-§4-* | — |
| 25-§6-1 | §6 dependent features reuse storage (HR uploads, delivery proof, compliance documents) | SB-P-1.14 | I-14 (illustrative list; this mission's object classes reuse it) | — |
| 25-§7-1 | §7 eligible object classes incl. delivery proof and compliance evidence; producing feature owns its class | SB-P-1.14 | I-14; feature rows 1-§15-4, 16-§9-* | — |

#### `SB-P-1.15` (24 rows)

| FCTM row | Exact source pointer | Owning mission | Citation | Founder decision |
|---|---|---|---|---|
| 22-§12-1 | §12 Notification Foundation (rows 22-§12-1…9) | SB-P-1.15 | I-12 (12:FPDR-1); I-15 | 12:FPDR-1 |
| 2-§11-9 | §11 b8 Ask CFO: orders/deliveries | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§11-*, 1-§22-* | — |
| 2-§11-10 | §11 b9 Ask CFO: attendance/HR where Owner authorized | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 6-§5-*, 6-§7-* | — |
| 2-§12-8 | §12 b6 Ask CFO: other enabled Ledger add-ons | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§22-*, 6-§3-*, 16-§4-* | — |
| 4-§3-6 | §3 b5 Daily Intelligence: compliance/renewal deadlines | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 16-§4-*, 16-§7-* | — |
| 4-§3-7 | §3 b6 staffing/attendance items | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 6-§5-* | — |
| 4-§3-8 | §3 b7 order/delivery commitments | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§11-* | — |
| 4-§4-4 | §4 b3 stock or order issues | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§24-* | — |
| 4-§5-6 | §5 b5 unresolved orders/deliveries | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§11-*, 1-§24-* | — |
| 4-§6-8 | §6 b7 Staff/HR | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 6-§* | — |
| 4-§6-9 | §6 b8 Smart Order & Delivery | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§* | — |
| 4-§6-10 | §6 b9 Compliance Shield | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 16-§* | — |
| 4-§11-6 | §11 b6 open an order/delivery exception | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§24-* | — |
| 11-§5-3 | §5 b2 FSSAI renewal reminder example | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 16-§7-* | — |
| 11-§8-2 | §8 b2 Reminder reuse: Compliance Shield | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 16-§7-1, 16-§18-3 | — |
| 11-§8-6 | §8 b6 Reminder reuse: Staff/HR actions | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 6-§3-9, 6-§11-6 | — |
| 11-§8-7 | §8 b7 Reminder reuse: Order & Delivery follow-up | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§23-9 | — |
| 11-§10-5 | §10 b4 Open renewal document | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 16-§8-4 | — |
| 22-§11-2 | §11 b2 Reminder foundation: compliance | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 16-§7-* | — |
| 22-§11-5 | §11 b5 Reminder foundation: HR | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 6-§3-9 | — |
| 22-§11-6 | §11 b6 Reminder foundation: delivery | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§23-9 | — |
| 11-§9-3 | §9 b3 event trigger: employee action occurred | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; consumer found by screen; FCTM-15 row carries no D18 (Δ-11)); producer rows 6-§5-*, 6-§7-* | — |
| 11-§9-4 | §9 b4 event trigger: licence was renewed | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; consumer found by screen; FCTM-15 row carries no D18 (Δ-11)); producer rows 16-§8-* | — |
| 11-§9-6 | §9 b6 event trigger: delivery completed | SB-P-1.15 | I-15 (IN SCOPE SB-P-1.15; consumer found by screen; FCTM-15 row carries no D18 (Δ-11)); producer rows 1-§15-* | — |

#### `SB-P-1.16` (15 rows)

| FCTM row | Exact source pointer | Owning mission | Citation | Founder decision |
|---|---|---|---|---|
| 14-§6-5 | §6 b5 credit entry from order/delivery workflow | SB-P-1.16 | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-* | — |
| 14-§13-1 | §13 b1 order credit status links to same customer identity | SB-P-1.16 | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§6-1, 3-§15-7 | — |
| 14-§13-2 | §13 b2 one order event, no duplicate credit facts | SB-P-1.16 | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-6, 1-§26-14 | — |
| 14-§13-3 | §13 b3 delivery completion distinct from payment/credit state | SB-P-1.16 | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-3 | — |
| 15-§5-6 | §5 b6 COD/order-delivery evidence | SB-P-1.16 | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§15-6, 1-§13-6 | — |
| 15-§7-7 | §7 b7 linked order/credit context | SB-P-1.16 | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§22-10 | — |
| 15-§15-1 | §15 p1 COD collection and delivery completion distinct | SB-P-1.16 | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-3 | — |
| 15-§15-2 | §15 b1 COD expected amount | SB-P-1.16 | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-2, 1-§5-4 | — |
| 15-§15-3 | §15 b2 COD collected amount | SB-P-1.16 | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§13-6 | — |
| 15-§15-4 | §15 b3 delivery proof | SB-P-1.16 | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§15-* | — |
| 15-§15-5 | §15 b4 Ledger/payment record | SB-P-1.16 | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-7 | — |
| 15-§15-6 | §15 b5 verification state | SB-P-1.16 | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-5 | — |
| 15-§15-7 | §15 p3 link without duplicate financial truth | SB-P-1.16 | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-6 | — |
| 15-§23-7 | §23 b7 Order & Delivery financial linkage | SB-P-1.16 | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§23-12 | — |
| 15-§25-7 | §25 COD evidence does not duplicate Ledger revenue | SB-P-1.16 | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§26-11 | — |

#### `SB-P-1.17` (2 rows)

| FCTM row | Exact source pointer | Owning mission | Citation | Founder decision |
|---|---|---|---|---|
| 7-§2-1 | §2 b1 item/product identity (availability reader) | SB-P-1.17 | I-17; feature rows 1-§10-* | — |
| 7-§2-2 | §2 b2 quantity/unit tracking (availability reader) | SB-P-1.17 | I-17; feature rows 1-§10-* | — |

#### `SB-P-1.19` (3 rows)

| FCTM row | Exact source pointer | Owning mission | Citation | Founder decision |
|---|---|---|---|---|
| 18-§5 | §5 Entitlement Model — add-on capability access | SB-P-1.19 | A-BP108 (BP §9 row 8); U-07 | — |
| 18-§9 | §9 add-on removal preserves history | SB-P-1.19 | A-BP108 | — |
| 8-§4-2 | §4 support knowledge base topics incl. staff/HR and order/delivery where enabled | SB-P-1.19 | I-13 (8-§4-2 ASSIGNED SB-P-1.19) | — |

#### `SB-P-1.20` (2 rows)

| FCTM row | Exact source pointer | Owning mission | Citation | Founder decision |
|---|---|---|---|---|
| 23-§4-3 | §4 Employee WhatsApp flows incl. attendance | SB-P-1.20 | A-BP109 | — |
| 23-§4-5 | §4 Customer/Delivery Staff WhatsApp order, delivery, proof, status | SB-P-1.20 | A-BP109; U-01 | — |

### 11.3 Out of build scope — must not appear (48 rows)

Contract non-goals and rejections, Build Plan §16 and GPCV §9 rejections, preserved verbatim and checked as "must not appear" in this mission's deliverable.

| FCTM row | Exact source pointer | Build commitment | Citation |
|---|---|---|---|
| 1-§4-1 | §4 b1: public merchant discovery | ADD-ON + BUILD NOW — before first 10 pilot merchants | L-NEG; BP-§16-8; GPCV-§9-9 |
| 1-§4-2 | §4 b2: cross-merchant product listing | ADD-ON + BUILD NOW — before first 10 pilot merchants | L-NEG; BP-§16-8; GPCV-§9-9 |
| 1-§4-3 | §4 b3: marketplace bidding | ADD-ON + BUILD NOW — before first 10 pilot merchants | L-NEG; BP-§16-8; GPCV-§9-9 |
| 1-§4-4 | §4 b4: marketplace commission logic | ADD-ON + BUILD NOW — before first 10 pilot merchants | L-NEG; BP-§16-8; GPCV-§9-9 |
| 1-§4-5 | §4 b5: an open ordering network for unrelated public users | ADD-ON + BUILD NOW — before first 10 pilot merchants | L-NEG; BP-§16-8; GPCV-§9-9 |
| 1-§4-6 | §4 b6: a Swiggy/Zomato-style marketplace | ADD-ON + BUILD NOW — before first 10 pilot merchants | L-NEG; BP-§16-8; GPCV-§9-9 |
| 1-§28-2 | §28 b1: public marketplace interpretation | ADD-ON + BUILD NOW — before first 10 pilot merchants | L-HIST; BP-§16-8; GPCV-§9-9 |
| 1-§28-3 | §28 b2: customer silence automatically becoming a failure/rollback | ADD-ON + BUILD NOW — before first 10 pilot merchants | L-HIST; BP-§16-9 |
| 1-§28-4 | §28 b3: default continuous route GPS tracking of delivery staff | ADD-ON + BUILD NOW — before first 10 pilot merchants | L-HIST; BP-§16-3; GPCV-§9-3 |
| 6-§15-1 | §15 b1: continuous employee GPS surveillance | ADD-ON + BUILD NOW | L-NEG; BP-§16-3; GPCV-§9-3 |
| 6-§15-2 | §15 b2: automated wage punishment/fines | ADD-ON + BUILD NOW | L-NEG; BP-§16-4; GPCV-§9-4 |
| 6-§15-3 | §15 b3: AI misconduct verdicts | ADD-ON + BUILD NOW | L-NEG; BP-§16-2; GPCV-§9-2 |
| 6-§15-4 | §15 b4: broad employee access to Owner financial intelligence | ADD-ON + BUILD NOW | L-NEG |
| 6-§15-5 | §15 b5: destructive rewriting of attendance/payroll history | ADD-ON + BUILD NOW | L-NEG |
| 6-§15-6 | §15 b6: assumed national-ID/KYC collection without a resolved legal/privacy bas… | ADD-ON + BUILD NOW | L-NEG; BP-§15-7 (U-06) |
| 16-§19-1 | §19 b1: legal advice/certification | ADD-ON + BUILD NOW | L-NEG — contract non-goal, checked must-not-appear |
| 16-§19-2 | §19 b2: immutable 60/30/7/1 cadence | ADD-ON + BUILD NOW | L-NEG — contract non-goal, checked must-not-appear |
| 16-§19-3 | §19 b3: hardcoded penalty/legal claims without current verification | ADD-ON + BUILD NOW | L-NEG — contract non-goal, checked must-not-appear |
| 16-§19-4 | §19 b4: OCR-to-trusted-date with no review when uncertain | ADD-ON + BUILD NOW | L-NEG — contract non-goal, checked must-not-appear |
| 16-§19-5 | §19 b5: duplicate reminder/document architecture | ADD-ON + BUILD NOW | L-NEG — contract non-goal, checked must-not-appear |
| 16-§21-5 | §21 b4: treating OCR as unquestioned authority | ADD-ON + BUILD NOW | L-HIST — superseded (C16 §21); must not appear |
| 16-§21-6 | §21 b5: claiming Smart Business itself makes the merchant legally compliant | ADD-ON + BUILD NOW | L-HIST — superseded (C16 §21); must not appear |
| BP-§16-1 | §16 b1: Ask CFO as write-capable authority | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-2 | §16 b2: AI accusation/judgment of employees or customers | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-3 | §16 b3: continuous staff GPS surveillance by default | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-4 | §16 b4: automated wage punishment | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-5 | §16 b5: blind supplier procurement without valid Owner delegation | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-6 | §16 b6: hard credit blocking by default | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-7 | §16 b7: custom client-specific POS modification inside core | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-8 | §16 b8: marketplace behavior inside Smart Order & Delivery | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-9 | §16 b9: customer silence automatically invalidating otherwise sufficiently prov… | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-10 | §16 b10: duplicate channel-specific Business Memory | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-11 | §16 b11: duplicate channel-specific permission models | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-12 | §16 b12: separate AI brains per feature/channel | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-13 | §16 b13: model conversation history as permanent Business Memory | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-14 | §16 b14: uncontrolled binary-media concentration in Supabase for convenience | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-15 | §16 b15: provider URLs as permission authority/business identity | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-16 | §16 b16: destructive subscription-driven schema creation/deletion | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-17 | §16 b17: broad routine Super Admin access to merchant private data | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-18 | §16 b18: revival of /survey or obsolete domains/routes | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-19 | §16 b19: old Daily Intelligence timing that conflicts with the approved 7:00 AM… | REJECT | BP-§16 rejection, checked must-not-appear |
| BP-§16-20 | §16 b20: independent Catalog product expansion | REJECT | BP-§16 rejection, checked must-not-appear |
| GPCV-§9-2 | §9 b2: AI accusation/punishment — REJECT | REJECT | AI accusation/punishment — REJECT |
| GPCV-§9-3 | §9 b3: continuous employee GPS surveillance — REJECT | REJECT | continuous employee GPS surveillance — REJECT |
| GPCV-§9-4 | §9 b4: automatic wage docking/fines — REJECT | REJECT | automatic wage docking/fines — REJECT |
| GPCV-§9-7 | §9 b7: dynamic CREATE/DROP core schema by subscription state — REJECT | REJECT | dynamic CREATE/DROP by subscription — REJECT |
| GPCV-§9-8 | §9 b8: routine broad Super Admin access to merchant private business data — RE… | REJECT | routine broad Super Admin access — REJECT |
| GPCV-§9-9 | §9 b9: public marketplace behavior for current Smart Order & Delivery — REJECT | REJECT | public marketplace in Smart Order & Delivery — REJECT |

### 11.4 Not applicable — not an obligation of this mission (27 rows)

Dependency declarations, provenance, historical items and Build Plan items outside this mission, each with the FCTM reason.

| FCTM row | Exact source pointer | Owning mission | Citation |
|---|---|---|---|
| 1-§4-7 | §4 p2: Any broader marketplace or wholesaler network requires a separate futur… | none — separately governed future Founder decision (BP §15 b8) | L-NEG; does not concern this mission: a broader marketplace or wholesaler network is not part of Contract 01 (C1 §30 b2) and awaits a separate Founder decision and classification (BP §15 b8, GPCV §9 b11). Not an SB-P-1.18 acceptance dependency (GPCV §8 b5). The decision itself stays recorded as BP-§15-8, 1-§30-2 and GPCV-§9-11. This mission's must-not boundary is carried by 1-§4-1 … 1-§4-6, BP-§16-8 and GPCV-§9-9 |
| 1-§27-1 | §27 b1: Permissions / Business Isolation | SB-P-1.18 | L-DEP — dependency declaration; realised by the Dependency column of the owning rows |
| 1-§27-2 | §27 b2: shared customer/product identity | SB-P-1.18 | L-DEP — dependency declaration; realised by the Dependency column of the owning rows |
| 1-§27-3 | §27 b3: Human Language Layer | SB-P-1.18 | L-DEP — dependency declaration; realised by the Dependency column of the owning rows |
| 1-§27-4 | §27 b4: Universal Document Intelligence | SB-P-1.18 | L-DEP — dependency declaration; realised by the Dependency column of the owning rows |
| 1-§27-5 | §27 b5: Conversation Workspace / WhatsApp integration | SB-P-1.18 | L-DEP — dependency declaration; realised by the Dependency column of the owning rows |
| 1-§27-6 | §27 b6: Notification foundation | SB-P-1.18 | L-DEP — dependency declaration; realised by the Dependency column of the owning rows |
| 1-§27-7 | §27 b7: audit/idempotency | SB-P-1.18 | L-DEP — dependency declaration; realised by the Dependency column of the owning rows |
| 1-§27-8 | §27 b8: Inventory/Catalog for availability-aware flows | SB-P-1.18 | L-DEP — dependency declaration; realised by the Dependency column of the owning rows |
| 1-§27-9 | §27 b9: Payment Verification / Ledger for financial closure | SB-P-1.18 | L-DEP — dependency declaration; realised by the Dependency column of the owning rows |
| 1-§27-10 | §27 b10: bounded location primitive | SB-P-1.18 | L-DEP — dependency declaration; realised by the Dependency column of the owning rows |
| 1-§28-5 | §28 b4: fixed universal delay thresholds such as 45 minutes | SB-P-1.18 | L-HIST — historical-only, not current Product Truth (C1 §28); fixed thresholds stay out of design |
| 1-§28-6 | §28 b5: mandatory heavy native driver app | SB-P-1.18 | L-HIST — superseded by C1 §13 p1 (1-§13-1) |
| 1-§28-7 | §28 b6: old implementation-specific transport/status constants where not reaffi… | SB-P-1.18 | L-HIST — superseded by C1 §11 p5 (1-§11-4) |
| 1-§29 | §29 whole section: Provenance and Hydration Coverage | SB-P-1.18 | L-PROV — provenance only |
| 6-§16 | §16 whole section: Dependencies | SB-P-1.18 | L-DEP — dependency declaration carried by the Dependency column |
| 16-§21-2 | §21 b1: exact 60/30/7/1 cadence | SB-P-1.18 | L-HIST — historical-only (C16 §21); see 16-§7-3 |
| 16-§21-3 | §21 b2: fixed penalty claims | SB-P-1.18 | L-HIST — historical-only (C16 §21); see 16-§14-3 |
| 16-§21-4 | §21 b3: provider-specific document/storage assumptions | SB-P-1.18 | L-HIST — historical-only (C16 §21); storage choice is C25 (SB-P-1.14) |
| 16-§22 | §22 whole section: Provenance and Hydration Coverage | SB-P-1.18 | L-PROV — provenance only |
| BP-§11-b8 | §11 b8: 1.19 completes support/lifecycle/stewardship and Voice Plus | SB-P-1.18 | concerns SB-P-1.19 only |
| BP-§13-p5 | §13 p5: This rule is accepted as technically and governance-sound | SB-P-1.18 | statement of acceptance, no obligation |
| BP-§15-1 | §15 b1: current free-trial policy | SB-P-1.18 | SB-P-1.19 (trial) |
| BP-§15-2 | §15 b2: exact Voice Plus price | SB-P-1.18 | SB-P-1.19 (Voice Plus) |
| BP-§15-4 | §15 b4: exact Smart Stock price | SB-P-1.18 | SB-P-1.17 (Smart Stock) |
| BP-§15-6 | §15 b6: exact long-term retention/deletion duration after cancellation/non-paym… | SB-P-1.18 | SB-P-1.19 lifecycle; distinct from U-03 location retention |
| BP-§15-9 | §15 b9: third-party underwriting/lending ecosystem | SB-P-1.18 | no lending in this mission |

### 11.5 Unresolved Founder decisions — not on the SB-P-1.18 critical path (8 rows)

Carried with the FCTM's critical-path screen (`mission-control/08-…` §3). This Blueprint sets no add-on price, KYC or national-ID rule, or marketplace rule. Work continues (Source 18 §3.2 item 3).

| FCTM row | Exact source pointer | Build commitment | Citation |
|---|---|---|---|
| 1-§30-1 | §30 b1: Exact current Smart Order & Delivery add-on price remains unresolved | ADD-ON + BUILD NOW — before first 10 pilot merchants | BP-§15-5; GPCV-§8-4 — not critical path |
| 1-§30-2 | §30 b2: Broader marketplace/wholesaler expansion remains a separate future Foun… | not part of this contract — separate future Founder decision (C1 §30 b2) | BP-§15-8; GPCV-§9-11; GPCV-§8-5 — not critical path; C1 §30 b2: "remains a separate future Founder decision and is not part of this contract" (MC-510, MC508-F02); boundary row 1-§4-7 |
| 6-§3-10 | §3 p2: Sensitive KYC/national-ID storage remains an unresolved Founder/legal/p… | ADD-ON + BUILD NOW | BP-§15-7; GPCV-§8-3 — not critical path (U-06) |
| BP-§15-3 | §15 b3: exact Staff/HR price | BUILD NOW | U-07 — not critical path (GPCV-§8) |
| BP-§15-5 | §15 b5: exact Smart Order & Delivery price | BUILD NOW | U-07 — not critical path (GPCV-§8-4) |
| BP-§15-7 | §15 b7: employee KYC/national-ID necessity and legal/privacy basis | BUILD NOW | U-06 — not critical path (GPCV-§8-3) |
| BP-§15-8 | §15 b8: broader wholesaler/marketplace expansion | BUILD NOW | not critical path (GPCV-§8-5) |
| GPCV-§9-11 | §9 b11: future wholesaler/marketplace expansion — not current core; requires se… | per contract | wholesaler/marketplace expansion — separate Founder decision; not critical path |

## 12. Dependencies

### 12.1 Upstream specification dependencies

SB-P-1.12 to SB-P-1.17 provide locked specifications only. Their Implementation Authorizations are `WITHHELD`. **None of the following is runtime-available** (`04-…` Δ-02, Δ-03):
- membership, Manager, Employee, Delivery Staff or Customer role, capability grant or entitlement;
- conversation kernel, Human Language Layer or voice;
- Business Memory, UDI pipeline or governed storage;
- Reminder Engine or Notification Foundation;
- financial-integrity linkage, payment evidence or shared customer identity;
- stock and availability truth or the Manager workspace shell.

### 12.2 Dependency codes on `IN SCOPE` rows

Counts are taken from the canonical FCTM Dependency column (blob `b00603ec`); a row may carry several codes. 116 `IN SCOPE` rows carry no dependency.

| Code | Dependency (FCTM §0.6) | `IN SCOPE` rows | State at the FCTM baseline |
|---|---|---|---|
| `D12` | SB-P-1.12 authority kernel: memberships, Owner/Manager/Employee/Customer/Delivery Staff identities and roles, capability grants, entitlements (21-§16), support access (21-§14), revalidation, isolation, audit, idempotency (22-§15) | 280 | Specification locked; WITHHELD; not implemented (RLS is `owner_id`-scoped) |
| `D14` | SB-P-1.14 Business Memory, Ledger, UDI, Receipt Cabinet, governed storage | 119 | Specification locked; WITHHELD; not implemented |
| `D13` | SB-P-1.13 Conversation/AI kernel, Human Language Layer, typed tools, confirmation | 116 | Specification locked; WITHHELD; not implemented |
| `D15` | SB-P-1.15 Reminder Engine, Notification Foundation (`12:FPDR-1`, native only), Daily Intelligence, Ask CFO | 52 | Specification locked; WITHHELD; not implemented |
| `DAI` | AI provider and Basic Voice provider behind SB-P-1.13 | 43 | UNVERIFIED; activation NOT AUTHORIZED |
| `DLOC` | **Stage 1 code.** Device point-in-time location capture and QR attendance mechanism, behind this mission's Shared Location Foundation (WS-D) | 42 | Nothing exists; no provider chosen |
| `D17` | SB-P-1.17 stock/availability (7-§2) and Manager workspace shell | 25 | Specification locked; WITHHELD; not implemented |
| `D16` | SB-P-1.16 financial integrity: COD and payment-evidence linkage (15-§15), credit (14-§13), FIN-01 PROVISIONAL | 17 | Specification locked; WITHHELD; not implemented |
| `DNTF` | Approved out-of-app channel to customers or delivery staff | 17 | **None before SB-P-1.20** (U-01) |
| `D20` | SB-P-1.19 subscription, support and stewardship; SB-P-1.20 WhatsApp adapter | 16 | Not started |
| `DENT` | Add-on entitlement state (21-§16 in SB-P-1.12; C18 lifecycle in SB-P-1.19) | 13 | Specification only; prices unresolved, not critical path (U-07) |
| `DSCH` | Scheduler and business timezone | 10 | UNVERIFIED; activation NOT AUTHORIZED |
| `DLEG` | **Stage 1 code.** Qualified legal/privacy validation (India employment, payroll, location and customer data) | 6 | Not obtained (SB-P-1.17 U-11 precedent) |
| `DV` | AI provider and Basic Voice provider behind SB-P-1.13 | 5 | UNVERIFIED; activation NOT AUTHORIZED |
| `DTX` | One governed transactions-family write path (PQ-2) | 5 | Cut-over undecided; migration NOT AUTHORIZED |
| `D19` | SB-P-1.19 subscription, support and stewardship; SB-P-1.20 WhatsApp adapter | 5 | Not started |
| `DPAY` | Authenticated payment-evidence source (SB-P-1.16) | 2 | No source selected; NOT AUTHORIZED |
| `DMAP` | **Stage 1 code.** Map/address provider for "open address/map" (C1 §13 b2) | 1 | None; a new external provider triggers BP §5.4 and mandatory specialist review |

Dependency states are as recorded in the FCTM; they were not re-verified for this draft. `HU-03` is released and no row carries it (`18:FPDR-1`).

### 12.3 Derived constraints, holds and open items

Derived constraints are **not** Product Truth unless a Founder decision adopts them (`04-…` Part B).

| Item | Status | Effect on this Blueprint |
|---|---|---|
| DC-14 QR plus point-in-time geofence | **Open.** Mission Control T6 judgement; to the Founder only if Mission Control rejects it. Legal input is required before the Blueprint lock (`18:FPDR-4` §4) | Section 8.9. The `6-§5-2` minimum applies only as DC-14 is determined |
| DC-13 consent and STOP state | Mission Control T6, pending (`18:FPDR-3` §7) | Section 8.1: native state recorded and enforced; A-STOP bridges to it |
| DC-02 merchant-recorded customer approval | Applied through `18:FPDR-3` Package P (`1-§5-25`) | Sections 8.4, 9 |
| DC-07 add-on enablement needs `DENT` | Dependency hold | No add-on acceptance before `DENT`; no schema simulation |
| DC-01, DC-03, DC-04, DC-05, DC-06, DC-08, DC-09, DC-10, DC-11, DC-12 | Unchanged as recorded in `04-…` | As cited in Section 8 |
| `DLEG` professional validation | **Location:** deferred, not waived, under Founder Decision Record 06 §4 (`18:FPDR-1` §7). **Payroll and overtime:** before the EIS specifies any calculation or legal rule (`18:FPDR-5` §5). **Photo and signature proof:** privacy check before the EIS (`18:FPDR-4` §6). **General (U-14):** the register records qualified validation before the Blueprint lock; how this reads with Founder Decision Record 06 is for Mission Control to state at Stage 5 | Sections 8.6, 8.9, 8.10, 8.15 |
| AEG-1 customer-receipt acceptance evidence | Mission Control acceptance hold (MC-558-R2) | Section 15.4 |
| C1 §17 "may include" screening | Mission Control | Section 8.7 |
| U-09 pilot sequencing | Mission Control release sequencing | Section 8.17 |
| U-13 map or address provider | EIS item; a new external provider triggers BP §5.4 review | Section 8.5 (`DMAP`) |
| U-06 KYC; U-07 prices | Off the critical path | Section 11.5 |
| U-11 reverse dependencies | 41 Part F rows; three C11 §9 consumers for the SB-P-1.15 resume register | Section 11.2 |
| Delivery topology and repository governance (Δ-06, Δ-07) | Engineering and governance only | No runtime claim |

### 12.4 Execution gates

The following are not row dependencies, and this Blueprint does not authorize them:
- Implementation Authorization (separate Source 18 gate; §9 gates 3 to 5).
- Migration execution (`docs/migration/README.md` default-deny). Order, customer, delivery, staff, attendance, payroll-support, overtime, compliance and location objects all need additive schema work.
- Any new external provider: map, SMS or OTP, or geofence services (Build Plan §5.4). None is selected.
- AI and voice provider evidence (`DAI`, `DV`); scheduler and business timezone (`DSCH`).
- **Security precondition owned by SB-P-1.12:** the Build Plan §5.1 residual `anon`-grant gate on `businesses`, `transactions` and `transaction_correction_events` (Δ-13). This mission adds the same isolation obligations for its new objects.
- **Delivery chain (Build Plan §5.3):** canonical implementation, delivery-repository synchronization where still required, publication where still current, Supabase migration and runtime alignment, and production verification. A canonical merge is never proof of production. None is authorized here (Source 18 §9.1).

### 12.5 Integration boundaries

These are product-level boundaries, not API design.

| Boundary | What this mission provides | What it consumes | Never |
|---|---|---|---|
| **WhatsApp / SB-P-1.20** | Native order truth, customer identity, consent and STOP state, notification events, and the merchant-side legs of the 16 Package P rows | The 17 assigned channel rows (Section 11.1) and the Package P channel legs, each with its own channel acceptance before the first ten pilot merchants | A second workflow engine, permission model, memory or AI in the adapter (`1-§18-7`; BP §11 b9; BP §16 b10–b12). No non-WhatsApp customer channel is introduced (`18:FPDR-3` §6) |
| **POS (SB-P-1.17)** | Nothing. No FCTM row of this mission needs a POS source (FCTM §0.6, `DPOS` screened) | Availability from the shared stock truth, whatever its source (`D17`) | No POS-specific order path; no use of POS or counter data to judge staff (C13 §8; BP §16 b2) |
| **Stock (SB-P-1.17)** | Order demand and fulfilment facts through the approved business-event path | Availability for `1-§10-2` and `BP-§10.7-A3` | A second stock record or engine (C7 §9) |
| **Financial integrity (SB-P-1.16)** | Delivery and COD facts as separate events | Payment verification, COD linkage (15-§15), credit (14-§13), shared customer identity (`16:FPDR-1`) | Ledger income written by the order domain; duplicate income on completion (DC-06; `1-§16-5`) |
| **Reminders and notifications (SB-P-1.15)** | Compliance, staff and order events | Reminder Engine; native Notification Foundation (`12:FPDR-1`) | A feature scheduler or notification store (DC-08) |
| **Documents (SB-P-1.14)** | Order lists, rosters and licence documents as UDI inputs | UDI; Receipt/Document Cabinet; governed storage (C25) | A feature OCR, import or storage system (`6-§6-3`; `16-§18-10`) |
| **Authority (SB-P-1.12)** | Capability declarations for each role and action | Roles, grants, entitlements, self-service, support access, audit, idempotency | A user, role or customer model of its own (DC-03) |

**Downstream consumers** (FCTM Part F): SB-P-1.15 Ask CFO, Daily Intelligence and reminder triggers read this mission's order, staff and compliance facts; SB-P-1.16 consumes COD and payment-evidence events; SB-P-1.13 consumes the order and attendance tools; SB-P-1.20 adapts the native engine.

## 13. Risks & Mitigations

| Risk | Source | Mitigation |
|---|---|---|
| Delivery or attendance becomes surveillance | C1 §14; C6 §5, §12; BP §16 b3 | Point-in-time capture at defined events only; no live view; results not coordinates; no numeric raw-GPS retention; STOP triggers (`18:FPDR-1`, `18:FPDR-2`; DC-05) |
| Uncertain orders confirmed by guessing | C1 §9, §21 | Draft-first; smallest-question clarification; confirmation bound to the reviewed draft (`BP-§10.7-AS1`) |
| Inventory promised without data | C1 §10 p5 | Known, unknown and unavailable shown from shared stock truth (`1-§10-9`) |
| Delivery marked complete without proof, or failed by silence | C1 §15 | Configured positive proof; named minimum; customer-silence rule (`18:FPDR-4`) |
| Duplicate Ledger income or payment facts | C1 §16; C15 §15 | Separate facts; idempotent single write path through SB-P-1.16 (DC-06; `1-§26-14`) |
| Staff punished or judged by software | C6 §8–§9; BP §16 b2, b4 | Assistive payroll only; human confirmation; neutral review items; overtime never punitive (`18:FPDR-5`; DC-10, DC-12) |
| Staff or delivery roles see Owner intelligence or other people's data | C1 §5; C6 §4; C16 §10 | Server-side capability checks on every channel; task-scoped delivery view; own-record self-view (`D12`) |
| Compliance treated as legal assurance | C16 §15, §19 | Legal-boundary wording; no certification; no penalty claims; dates human-confirmed |
| Customer-channel behaviour presented as done before SB-P-1.20 | `18:FPDR-3` §6 | "customer channel: not demonstrated" until each leg passes; AEG-1 |
| A WhatsApp adapter duplicates engines or authority | BP §8.4, §11 b9, §16 b10–b12 | Native engine first; thin adapter (`18:FPDR-3` §5; DC-01) |
| Provisional legal assumptions relied on in production | FDR 06 §3–§4 | Provisional labels kept; `DLEG` held; no production legal reliance |
| Correlated assumptions by the same Definition Actor across Stages 2–4 | Stage 1 disposition | Mission Control checks at Stages 5 and 8; non-author reviews |

**Mandatory specialist reviews before Implementation Authorization** (Source 18 §4.8):
- security, isolation and permissions, including delivery-staff and employee scoping and support access;
- location and privacy (attendance, delivery proof, destinations), including DC-14 and the `18:FPDR-1` disclosures;
- employment and payroll (`18:FPDR-5` holds);
- financial integrity (COD, payment evidence, Ledger linkage);
- AI assistant-not-authority behaviour;
- migration and data transition for the new objects.

## 14. Success Criteria

- Every `IN SCOPE` row in Section 8 is demonstrated with evidence, or reported with its exact blocking dependency (Source 18 §3.2 item 11).
- Founder Runtime Verification scenarios A, B and C pass within the decision limits of Section 15.4.
- No Section 10.3 must-not row or Section 11.3 rejection appears.
- No order is confirmed with an unresolved material ambiguity; no material change is confirmed without a recorded approval.
- No delivery is completed without configured proof, and none fails or rolls back on customer silence alone.
- No continuous or live location of any person exists; every stored location fact matches its `18:FPDR-1` class rule.
- No staff member, delivery person or Manager sees data outside their granted scope; no employee sees another employee's records or Owner financial intelligence.
- No payroll or overtime outcome is applied without human confirmation; no automatic sanction exists.
- No compliance renewal is marked complete by a passed date; no legal-authority claim appears.
- No duplicate customer, order, payment or reminder results from a channel, document or retry.
- Global Product Completion View rows 1, 6 and 16 are updated only by Mission Control at acceptance, from the Contract Reconciliation and counting only demonstrated rows (GPCV §12; Build Plan §11). This mission never edits the register.

## 15. Acceptance Criteria

### 15.1 Founder Runtime Verification scenarios (Build Plan §10.7, by reference — not new scenarios)

- `BP-§10.7-AS1` — §10.7 <A Smart Order Delivery> p2: Runtime scenario: ambiguous customer order must remain draft until mate… (BP@9dfdd924)
- `BP-§10.7-BS1` — §10.7 <B Staff HR> p2: Runtime scenario: Employee requests own attendance correction and can n… (BP@9dfdd924)
- `BP-§10.7-CS1` — §10.7 <C Compliance Shield> p2: Runtime scenario: approaching licence expiry produces a useful reminder… (BP@9dfdd924)

These are Founder-reserved checks (Source 18 §4.2). Their wording is the Build Plan's. **None is demonstrated or passed.**

**Scenario A — ambiguous customer order stays a draft: mapping.**

| Element | Blueprint sections | Supporting rows | Decisions and limits | Verification expectation |
|---|---|---|---|---|
| Order captured and held as a draft | 8.3 | `1-§9-1`, `1-§9-12`, `BP-§10.7-A1` | Native merchant capture; the customer-initiated channel is SB-P-1.20's (`18:FPDR-3` Package W) | `FRV-A`; `RT` |
| Material ambiguity produces clarification, not confirmation | 8.3, 8.4 | `1-§9-13` to `-19`, `1-§21-8`, `BP-§10.7-A2` | No consequential fact guessed | `FRV-A`; `NEG` that a confirm attempt with open ambiguity is refused |
| Confirmed only after resolution and any change approval | 8.4, 8.5 | `1-§10-8`, `1-§11-1`, `1-§26-2` | Merchant-recorded customer decision before SB-P-1.20 (DC-02) | `FRV-A`; `INSP` of the audit trail |

**Scenario B — employee attendance correction within own scope: mapping.**

| Element | Blueprint sections | Supporting rows | Decisions and limits | Verification expectation |
|---|---|---|---|---|
| Employee requests a correction of their own attendance | 8.9 | `6-§4-4`, `6-§4-6`, `10-§13-7`, `6-§13-6` | Original event preserved (`6-§7-6`) | `FRV-B`; `RT` |
| Cannot browse another employee | 8.8, 8.16 | `BP-§10.7-B3`, `6-§14-7`, `17-§9-7` | Own-record scope only | `FRV-B`; `NEG` |
| Cannot access Owner financial intelligence | 8.8 | `6-§4-7`, `6-§9-10`, `6-§14-2` | No Ask CFO or profit view | `FRV-B`; `NEG` |
| The correction is auditable | 8.9 | `6-§14-6`, `BP-§10.7-B5` | Human reviewer; no automatic outcome | `FRV-B`; `INSP` |

**Scenario C — approaching licence expiry produces a useful reminder: mapping.**

| Element | Blueprint sections | Supporting rows | Decisions and limits | Verification expectation |
|---|---|---|---|---|
| Confirmed licence record with an expiry date | 8.12 | `16-§20-1`, `16-§6-3`, `16-§6-6` | Date human-confirmed | `FRV-C`; `RT` |
| Reminder from the shared Reminder Engine, linked to the document | 8.13 | `16-§7-1`, `16-§8-2` to `-4`, `16-§20-3`, `BP-§10.7-C2`, `BP-§10.7-C3` | Native notification (`12:FPDR-1`) | `FRV-C`; `RT` |
| No legal-authority claim | 8.13, 8.14 | `16-§14-6`, `16-§15-7` to `-9`, `BP-§10.7-C4` | Stored facts only | `FRV-C`; `EXP` review of wording |

### 15.2 Experience anchors and contract experience rows

The Build Plan §10.7 exit principle and the contract experience rows (7 `EXP` rows):

- `1-§1-1` — §1 p1: Smart Order & Delivery Assistant gives a local merchant a professional… (C1@b392c8cb)
- `1-§1-2` — §1 p2: It must work with the way Kerala merchants already operate: phone calls… (C1@b392c8cb)
- `1-§1-3` — §1 p3: The feature is a private merchant-customer operating network (C1@b392c8cb)
- `6-§1-1` — §1 p1: Staff / HR Assistant helps small merchants manage employee records, att… (C6@ebacd183)
- `16-§1-1` — §1 p1: Compliance Shield helps a merchant organize licences, certificates, ren… (C16@420269d8)
- `16-§1-2` — §1 p2: It should reduce missed deadlines without making unsupported legal clai… (C16@420269d8)
- `BP-§10.7-X` — §10.7 <Exit principle> p1: The add-ons solve real jobs using the same Smart Business I already und… (BP@9dfdd924)

### 15.3 Contract acceptance, scenario and completion-gate rows in scope

Acceptance scenarios (39 `SCN` rows):

- Contract 1 (14): `1-§26-1`, `1-§26-2`, `1-§26-3`, `1-§26-4`, `1-§26-5`, `1-§26-6`, `1-§26-7`, `1-§26-8`, `1-§26-9`, `1-§26-10`, `1-§26-11`, `1-§26-12a`, `1-§26-13`, `1-§26-14`
- Contract 6 (10): `6-§14-1`, `6-§14-2`, `6-§14-3`, `6-§14-4`, `6-§14-5`, `6-§14-6`, `6-§14-7`, `6-§14-8`, `6-§14-9`, `6-§14-10`
- Contract 16 (10): `16-§20-1`, `16-§20-2`, `16-§20-3`, `16-§20-4`, `16-§20-5`, `16-§20-6`, `16-§20-7a`, `16-§20-8`, `16-§20-9`, `16-§20-10`
- Contract 22 (1): `22-§29-9`
- Contract 24 (1): `24-§18-4`
- Contract 5 (3): `5-§7-5`, `5-§7-6`, `5-§7-7`

Completion gates (4 `GATE` rows), reported honestly at Stage 22 (Section 8.17):

- `1-§31-1` — §31 p1: The feature is not complete because an order screen exists (C1@b392c8cb)
- `1-§31-2` — §31 p2: Completion requires the full approved lifecycle across UI/channel, back… (C1@b392c8cb)
- `6-§17-1` — §17 p1: Staff / HR is complete only when the permission model, attendance/roste… (C6@ebacd183)
- `16-§23-1` — §23 p1: Complete only when document intake, confirmed compliance facts, retriev… (C16@420269d8)

Acceptance items owned elsewhere (the SB-P-1.20 legs `1-§26-12b`, `16-§20-7b`, and the Package P channel legs) stay in Section 11 or with SB-P-1.20. Native evidence never demonstrates them (`18:FPDR-3` §6).

### 15.4 Founder-decision acceptance limits

| Decision | Acceptance limit (testable) | Direct rows |
|---|---|---|
| `18:FPDR-2` | No role can view a live or periodically refreshed location; no movement-trace record exists; delivery visibility is order and delivery status plus point-in-time destination and proof | `1-§14-5`, `22-§16-11` |
| `18:FPDR-5` | An overtime record can be created from each of the three origins, including a disputed entry; each passes authorized review; a correction keeps the original and its provenance; an employee sees only their own record; every step is attributed; no calculation, threshold or sanction is applied | `S11-L443-1` to `-5` |
| `18:FPDR-3` | Each Package P row passes its native test, and its channel leg is reported "customer channel: not demonstrated" until SB-P-1.20 accepts it; native STOP state blocks sending once recorded; no Package W intake engine is duplicated; L2-only evidence is reported as "provider accepted; customer delivery not independently confirmed" (AEG-1) | the 21 rows in Section 10.1 |
| `18:FPDR-4` | Each named-minimum mechanism is demonstrated; each adopted mechanism is verified, and an unadopted one is neither required nor prohibited; `1-§10-4` and `1-§10-5` are always verified; the `6-§5-2` QR plus geofence element is verified only as DC-14 is determined | the ten F-4 rows |
| `18:FPDR-1` | Attendance and proof keep the result and no ordinary raw coordinate after the event; a destination pin is erased when the delivery purpose ends; a saved address keeps no exact GPS because it is saved; a hold exists only with an individual reason, owner, restricted access and end condition; no numeric raw-GPS period is configured | `22-§16-6`, `1-§14-12`, `1-§22-11`, `1-§5-26`, `1-§15-5` |

### 15.5 Experience Verification Matrix seed (Build Plan §13)

| UX anchor / human outcome | Applicable actor/role | Runtime status | Evidence | Dependency / note |
|---|---|---|---|---|
| Scenario A — ambiguous order stays a draft (`BP-§10.7-AS1`) | Owner; permitted Employee | Not yet run | — | `D12`, `D13`, `D14` |
| Scenario B — own attendance correction, no browsing, no Owner intelligence (`BP-§10.7-BS1`) | Employee; Owner | Not yet run | — | `D12`, `D13`, `DLOC`; DC-14 for the geofence element |
| Scenario C — licence expiry reminder without legal claims (`BP-§10.7-CS1`) | Owner; delegated Manager | Not yet run | — | `D14`, `D15` |
| Real jobs on the same Smart Business; no surveillance, marketplace or three new systems (`BP-§10.7-X`) | Owner; Manager; Employee; Delivery Staff | Not yet run | — | — |
| Private merchant-customer network (`1-§1-3`) | Owner; Customer | Not yet run | — | Customer channel legs at SB-P-1.20 |
| Staff help without surveillance (`6-§1-1`) | Owner; Employee | Not yet run | — | `DLOC` |
| Fewer missed deadlines without unsupported legal claims (`16-§1-2`) | Owner | Not yet run | — | `D15` |

**Evidence rules (Build Plan §13).** A merged PR, green CI, a working backend or a visually similar screen is not sufficient proof (`BP-§13-b1` to `-b4`). Founder Runtime Verification tests the UX anchors (`BP-§13-b5`). Independent verification tests protected and denied behaviour (`BP-§13-b6`; the Section 10.3 rows). `DEFERRED` needs an approved later owner and erases no earlier accountability (`BP-§13-b7`, `BP-§13-b8`). The matrix is the experience subset of the Contract Reconciliation (`BP-§13-b10`).

## 16. Future Evolution

- **SB-P-1.20:** customer-initiated WhatsApp ordering, confirmations, status, proof interactions, the A-WEL and A-STOP legs, and the WhatsApp legs of staff and compliance; OTP proof once a customer channel exists (`1-§15-4`).
- **SB-P-1.19:** add-on prices and entitlement lifecycle (`BP-§15-3`, `BP-§15-5`, `1-§30-1`).
- **Professional validation after SB-P-1.20:** location, payroll and overtime positions reviewed under Founder Decision Record 06 §4, with any required change routed before final legal-policy publication and production reliance.
- **Decisions not made here, each needing its own decision:** a numeric retention period for any location class; location-based live tracking (C22 §16 b4); employee KYC or national-ID collection (U-06); marketplace or wholesaler expansion (`1-§30-2`); overtime definitions and calculations.

## 17. Product Philosophy Summary

Take the order the way the customer gives it. Ask when it matters, and never guess. Let the merchant decide every change and own every customer. Give delivery staff a task, not a business, and never follow them. Help with staff paperwork without judging anyone. Remember every licence and remind in time, without pretending to be the law. One Smart Business, three real jobs (Build Plan §10.7 exit principle; C1 §3; C6 §12; C16 §3).

## 18. Blueprint Change Log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-10-30 | Claude Code (Definition Actor, MC-654) | Initial Stage 4 draft: Metadata, Mission Snapshot, Sections 1–19 assembled by reference to the canonical FCTM (blob `b00603ec`), `18:FPDR-1` to `18:FPDR-5` and the Stage 2 Truth Pack |

## 19. Governance History

| Event | Record | Canonical |
|---|---|---|
| Stage 1 documentary entry and communication activation | `mission-control/01` | PR #1068, `06855599` |
| Stage 1 intake publication authority; report correction grant | `mission-control/02`, `03` | PR #1075, `9f472d53`; PR #1077, `fedf2fff` |
| Stage 1 intake, source scope, actor assessment and FCTM opening | `claude-code/01`, `02` | PR #1076, `49f28419` |
| Stage 1 disposition and Definition Actor appointment | `mission-control/04` | PR #1078, `8d69714c` |
| Stage 2 authorization | `mission-control/05` | PR #1079, `ccfdd28a` |
| Stage 2 Mission Truth Pack | `claude-code/03`–`09` | PR #1080, `650249b8` |
| Stage 3 gate and F-2 publication authorization | `mission-control/06` | PR #1081, `e1e39482` |
| `18:FPDR-2`; log reconciliation | `claude-code/11`; `decision-log.md` | PR #1082, `959f5099`; PR #1083, `3f519a81` |
| Administrative reconciliation (MC-538) | `README.md`; logs | PR #1084, `1c021142` |
| `18:FPDR-5`; log reconciliation | `claude-code/12`; `decision-log.md` | PR #1085, `c86afd9b`; PR #1086, `c1110efa` |
| `18:FPDR-3`; log reconciliation | `claude-code/13`; `decision-log.md` | PR #1087, `da3a4365`; PR #1088, `8da56991` |
| FCTM reconciliation for F-2, F-3, F-5; `S11-L443-*` facets | `claude-code/03`, `07` | PR #1093, `d19e3327` |
| `18:FPDR-4`; F1-R gate amendment | `claude-code/14`; `mission-control/07` | PR #1094, `fdd11c34`; PR #1095, `eafa3048` |
| F-04 log and F-4 FCTM reconciliation | `decision-log.md`; `claude-code/03` | PR #1096, `65178eb4`; PR #1097, `27f3c1d0` |
| F-1 location research archive | `specialists/f1-location-research/` | PR #1098, `8a1d2479` |
| `18:FPDR-1` | `claude-code/15`; `decision-log.md` | PR #1099, `d5a264fd` |
| Stage 3 closeout: FCTM F-1 reconciliation, F-05 approved, gate closure | `claude-code/03`; `decision-log.md`; `mission-control/08` | PR #1100, `96d6aa87` |
| Stage 3 complete and Stage 4 handover (MC-654) | Conversation-source, PR #1100 comment 6528495929 | — |
| Stage 4 Blueprint Sections 1–19 draft | this file | PENDING (not published; returned for Mission Control review) |

### FCTM Row-ID to Blueprint Section Traceability

This is a complete accounting of all FCTM rows (blob `b00603ec`), in FCTM order. It carries row IDs, dispositions, owning missions, Blueprint locations, verification seeds and Founder-decision cells exactly as in the FCTM. It restates no requirement text: the row's source pointer is in the FCTM (Source 18 §3.2 item 7).

Each `IN SCOPE` row maps to one Section 8 subsection, and also to §10.1 where a `18:FPDR` decision is cited, §10.2 for rule and principle rows, §10.3 for must-not rows, §12 where a dependency code is carried, and §15 for `SCN`, `FRV`, `EXP` and `GATE` rows. Every other row maps to its Section 11 subsection.

| FCTM row | Disposition | Owning mission | Blueprint location | Verification seed | Founder decision |
|---|---|---|---|---|---|
| 1-§1-1 | IN SCOPE | SB-P-1.18 | §8.1, §15 | EXP | — |
| 1-§1-2 | IN SCOPE | SB-P-1.18 | §8.1, §15 | EXP | — |
| 1-§1-3 | IN SCOPE | SB-P-1.18 | §8.1, §15 | EXP | — |
| 1-§2-1 | IN SCOPE | SB-P-1.18 | §8.1 | EXP | — |
| 1-§2-2 | IN SCOPE | SB-P-1.18 | §8.1 | EXP | — |
| 1-§2-3 | IN SCOPE | SB-P-1.18 | §8.1 | EXP | — |
| 1-§2-4 | IN SCOPE | SB-P-1.18 | §8.1 | EXP | — |
| 1-§2-5 | IN SCOPE | SB-P-1.18 | §8.1 | EXP | — |
| 1-§2-6 | IN SCOPE | SB-P-1.18 | §8.1 | EXP | — |
| 1-§2-7 | IN SCOPE | SB-P-1.18 | §8.1 | EXP | — |
| 1-§2-8 | IN SCOPE | SB-P-1.18 | §8.1 | EXP | — |
| 1-§3-1 | IN SCOPE | SB-P-1.18 | §8.1, §10.2 | INSP | — |
| 1-§3-2 | IN SCOPE | SB-P-1.18 | §8.1, §10.2 | INSP | — |
| 1-§3-3 | IN SCOPE | SB-P-1.18 | §8.1, §10.2 | INSP | — |
| 1-§3-4 | IN SCOPE | SB-P-1.18 | §8.1, §10.3 | NEG | — |
| 1-§3-5 | IN SCOPE | SB-P-1.18 | §8.1, §10.2 | INSP | — |
| 1-§3-6 | IN SCOPE | SB-P-1.18 | §8.1, §10.2 | INSP | — |
| 1-§3-7 | IN SCOPE | SB-P-1.18 | §8.1, §10.2 | INSP | — |
| 1-§3-8 | IN SCOPE | SB-P-1.18 | §8.1, §10.3 | NEG | — |
| 1-§3-9 | IN SCOPE | SB-P-1.18 | §8.1, §10.2 | INSP | — |
| 1-§3-10 | IN SCOPE | SB-P-1.18 | §8.1, §10.2 | INSP | — |
| 1-§4-1 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 1-§4-2 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 1-§4-3 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 1-§4-4 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 1-§4-5 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 1-§4-6 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 1-§4-7 | NOT APPLICABLE | none — separately governed future Founder decision (BP §15 b8) | §11.4 | — | — |
| 1-§5-1 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-2 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-3 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-4 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-5 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-6 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-7 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-8 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-9 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-10 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-11 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-12 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-13 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-14 | IN SCOPE | SB-P-1.18 | §8.2, §10.3, §12 | NEG | — |
| 1-§5-15 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-16 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-17 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-18 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-19 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-20 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-21 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-22 | IN SCOPE | SB-P-1.18 | §8.2, §10.3, §12 | NEG | — |
| 1-§5-23 | IN SCOPE | SB-P-1.18 | §8.2, §12 | RT | — |
| 1-§5-24 | IN SCOPE | SB-P-1.18 | §8.2, §10.1, §12 | RT | 18:FPDR-3 |
| 1-§5-25 | IN SCOPE | SB-P-1.18 | §8.2, §10.1, §12 | RT | 18:FPDR-3 |
| 1-§5-26 | IN SCOPE | SB-P-1.18 | §8.2, §10.1, §12 | RT | 18:FPDR-3; 18:FPDR-1 |
| 1-§5-27 | IN SCOPE | SB-P-1.18 | §8.2, §10.1, §12 | RT | 18:FPDR-3 |
| 1-§5-28 | IN SCOPE | SB-P-1.18 | §8.2, §10.1, §12 | RT | 18:FPDR-3 |
| 1-§5-29 | IN SCOPE | SB-P-1.18 | §8.2, §10.1, §12 | RT | 18:FPDR-3 |
| 1-§5-30 | IN SCOPE | SB-P-1.18 | §8.2, §10.3, §12 | NEG | — |
| 1-§6-1 | IN SCOPE | SB-P-1.18 | §8.1, §10.2, §12 | INSP | 16:FPDR-1 |
| 1-§6-2 | IN SCOPE | SB-P-1.18 | §8.1, §12 | RT | 16:FPDR-1 |
| 1-§6-3 | IN SCOPE | SB-P-1.18 | §8.1, §12 | RT | 16:FPDR-1 |
| 1-§6-4 | IN SCOPE | SB-P-1.18 | §8.1, §12 | RT | 16:FPDR-1 |
| 1-§6-5 | IN SCOPE | SB-P-1.18 | §8.1, §12 | RT | 16:FPDR-1 |
| 1-§6-6 | IN SCOPE | SB-P-1.18 | §8.1, §12 | RT | 16:FPDR-1 |
| 1-§6-7 | IN SCOPE | SB-P-1.18 | §8.1, §12 | IDEM | 16:FPDR-1 |
| 1-§7-1 | IN SCOPE | SB-P-1.18 | §8.1, §10.1, §12 | RT | 18:FPDR-3 |
| 1-§7-2 | IN SCOPE | SB-P-1.18 | §8.1, §10.1, §12 | RT | 18:FPDR-3 |
| 1-§7-3 | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | 18:FPDR-3 |
| 1-§7-4 | IN SCOPE | SB-P-1.18 | §8.1, §10.1, §10.3, §12 | NEG | 18:FPDR-3 |
| 1-§7-5 | IN SCOPE | SB-P-1.18 | §8.1, §10.1, §10.3, §12 | NEG | 18:FPDR-3 |
| 1-§8-1 | IN SCOPE | SB-P-1.18 | §8.3, §10.2, §12 | INSP | — |
| 1-§8-2 | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | 18:FPDR-3 |
| 1-§8-3 | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | 18:FPDR-3 |
| 1-§8-4 | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | 18:FPDR-3 |
| 1-§8-5 | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | 18:FPDR-3 |
| 1-§8-6 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§8-7 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§8-8 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§8-9 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§8-10 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§8-11 | IN SCOPE | SB-P-1.18 | §8.3, §10.2, §12 | INSP | — |
| 1-§8-12 | IN SCOPE | SB-P-1.18 | §8.3, §10.3, §12 | NEG | — |
| 1-§9-1 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-2 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-3 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-4 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-5 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-6 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-7 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-8 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-9 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-10 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-11 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-12 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-13 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-14 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-15 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-16 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-17 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-18 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§9-19 | IN SCOPE | SB-P-1.18 | §8.3, §10.3, §12 | NEG | — |
| 1-§10-1 | IN SCOPE | SB-P-1.18 | §8.4, §10.2, §12 | RT | — |
| 1-§10-2 | IN SCOPE | SB-P-1.18 | §8.4, §12 | RT | — |
| 1-§10-3 | IN SCOPE | SB-P-1.18 | §8.4, §10.1, §12 | RT | 18:FPDR-4 |
| 1-§10-4 | IN SCOPE | SB-P-1.18 | §8.4, §12 | RT | — |
| 1-§10-5 | IN SCOPE | SB-P-1.18 | §8.4, §12 | RT | — |
| 1-§10-6 | IN SCOPE | SB-P-1.18 | §8.4, §10.1, §12 | RT | 18:FPDR-4 |
| 1-§10-7 | IN SCOPE | SB-P-1.18 | §8.4, §10.1, §12 | RT (if adopted) | 18:FPDR-4 |
| 1-§10-8 | IN SCOPE | SB-P-1.18 | §8.4, §12 | RT | — |
| 1-§10-9 | IN SCOPE | SB-P-1.18 | §8.4, §10.3, §12 | NEG | — |
| 1-§11-1 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§11-2 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§11-3 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§11-4 | IN SCOPE | SB-P-1.18 | §8.5, §10.2 | INSP | — |
| 1-§12-1 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§12-2 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§12-3 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§12-4 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§12-5 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§12-6 | IN SCOPE | SB-P-1.18 | §8.5, §12 | IDEM | — |
| 1-§12-7 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§13-1 | IN SCOPE | SB-P-1.18 | §8.5, §10.2 | EXP | — |
| 1-§13-2 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§13-3 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§13-4 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§13-5 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§13-6 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§13-7 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§13-8 | IN SCOPE | SB-P-1.18 | §8.5, §12 | RT | — |
| 1-§13-9 | IN SCOPE | SB-P-1.18 | §8.5, §10.2 | INSP | — |
| 1-§14-1 | IN SCOPE | SB-P-1.18 | §8.15, §10.2, §12 | INSP | 12:FPDR-2 |
| 1-§14-2 | IN SCOPE | SB-P-1.18 | §8.15, §12 | RT | 12:FPDR-2 |
| 1-§14-3 | IN SCOPE | SB-P-1.18 | §8.15, §12 | RT | 12:FPDR-2 |
| 1-§14-4 | IN SCOPE | SB-P-1.18 | §8.15, §12 | RT | 12:FPDR-2 |
| 1-§14-5 | IN SCOPE | SB-P-1.18 | §8.15, §10.1, §10.3, §12 | NEG; INSP | 18:FPDR-2 |
| 1-§14-6 | IN SCOPE | SB-P-1.18 | §8.15, §10.3, §12 | NEG | 12:FPDR-2 |
| 1-§14-7 | IN SCOPE | SB-P-1.18 | §8.15, §10.3, §12 | NEG | 12:FPDR-2 |
| 1-§14-8 | IN SCOPE | SB-P-1.18 | §8.15, §12 | RT | 12:FPDR-2 |
| 1-§14-9 | IN SCOPE | SB-P-1.18 | §8.15, §12 | RT | 12:FPDR-2 |
| 1-§14-10 | IN SCOPE | SB-P-1.18 | §8.15, §12 | RT | 12:FPDR-2 |
| 1-§14-11 | IN SCOPE | SB-P-1.18 | §8.15, §12 | RT | 12:FPDR-2 |
| 1-§14-12 | IN SCOPE | SB-P-1.18 | §8.15, §10.1, §10.2, §12 | INSP | 18:FPDR-1 |
| 1-§14-13 | IN SCOPE | SB-P-1.18 | §8.15, §10.2 | NEG | 12:FPDR-2 |
| 1-§15-1 | IN SCOPE | SB-P-1.18 | §8.6, §12 | RT | — |
| 1-§15-2 | IN SCOPE | SB-P-1.18 | §8.6, §10.1, §12 | RT | 18:FPDR-4 |
| 1-§15-3 | IN SCOPE | SB-P-1.18 | §8.6, §10.1, §12 | RT (if adopted) | 18:FPDR-4 |
| 1-§15-4 | IN SCOPE | SB-P-1.18 | §8.6, §10.1, §12 | RT (if adopted) | 18:FPDR-4 |
| 1-§15-5 | IN SCOPE | SB-P-1.18 | §8.6, §10.1, §12 | RT (if adopted) | 18:FPDR-4; 18:FPDR-1 |
| 1-§15-6 | IN SCOPE | SB-P-1.18 | §8.6, §10.1, §12 | RT (if adopted) | 18:FPDR-4 |
| 1-§15-7 | IN SCOPE | SB-P-1.18 | §8.6, §10.1, §12 | RT | 18:FPDR-4 |
| 1-§15-8 | IN SCOPE | SB-P-1.18 | §8.6, §12 | RT | — |
| 1-§15-9 | IN SCOPE | SB-P-1.18 | §8.6, §10.3, §12 | NEG | — |
| 1-§15-10 | IN SCOPE | SB-P-1.18 | §8.6, §10.3, §12 | NEG | — |
| 1-§16-1 | IN SCOPE | SB-P-1.18 | §8.6, §12 | RT | — |
| 1-§16-2 | IN SCOPE | SB-P-1.18 | §8.6, §12 | RT | — |
| 1-§16-3 | IN SCOPE | SB-P-1.18 | §8.6, §12 | RT | — |
| 1-§16-4 | IN SCOPE | SB-P-1.18 | §8.6, §10.2, §12 | INSP | — |
| 1-§16-5 | IN SCOPE | SB-P-1.18 | §8.6, §10.3, §12 | NEG | — |
| 1-§16-6 | IN SCOPE | SB-P-1.18 | §8.6, §12 | IDEM | — |
| 1-§17-1 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | INSP | 12:FPDR-1 |
| 1-§17-2 | IN SCOPE | SB-P-1.18 | §8.7, §12 | RT | 12:FPDR-1 |
| 1-§17-3 | IN SCOPE | SB-P-1.18 | §8.7, §10.1, §12 | RT | 18:FPDR-3 |
| 1-§17-4 | IN SCOPE | SB-P-1.18 | §8.7, §12 | RT | 12:FPDR-1 |
| 1-§17-5 | IN SCOPE | SB-P-1.18 | §8.7, §10.1, §12 | RT | 18:FPDR-3 |
| 1-§17-6 | IN SCOPE | SB-P-1.18 | §8.7, §10.1, §12 | RT | 18:FPDR-3 |
| 1-§17-7 | IN SCOPE | SB-P-1.18 | §8.7, §12 | RT | 12:FPDR-1 |
| 1-§17-8 | IN SCOPE | SB-P-1.18 | §8.7, §12 | RT | 12:FPDR-1 |
| 1-§17-9 | IN SCOPE | SB-P-1.18 | §8.7, §10.3, §12 | NEG | 12:FPDR-1 |
| 1-§18-1 | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | — |
| 1-§18-2 | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | — |
| 1-§18-3 | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | — |
| 1-§18-4 | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | — |
| 1-§18-5 | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | — |
| 1-§18-6 | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | — |
| 1-§18-7 | IN SCOPE | SB-P-1.18 | §8.3, §10.2 | INSP | — |
| 1-§19-1 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§19-2 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§19-3 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§19-4 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 1-§19-5 | IN SCOPE | SB-P-1.18 | §8.3, §10.2, §12 | RT | — |
| 1-§20-1 | IN SCOPE | SB-P-1.18 | §8.3, §10.1, §12 | EXP | 18:FPDR-3 |
| 1-§20-2 | IN SCOPE | SB-P-1.18 | §8.3, §12 | EXP | — |
| 1-§21-1 | IN SCOPE | SB-P-1.18 | §8.7, §12 | RT | — |
| 1-§21-2 | IN SCOPE | SB-P-1.18 | §8.7, §12 | RT | — |
| 1-§21-3 | IN SCOPE | SB-P-1.18 | §8.7, §12 | RT | — |
| 1-§21-4 | IN SCOPE | SB-P-1.18 | §8.7, §12 | RT | — |
| 1-§21-5 | IN SCOPE | SB-P-1.18 | §8.7, §12 | RT | — |
| 1-§21-6 | IN SCOPE | SB-P-1.18 | §8.7, §12 | RT | — |
| 1-§21-7 | IN SCOPE | SB-P-1.18 | §8.7, §12 | RT | — |
| 1-§21-8 | IN SCOPE | SB-P-1.18 | §8.7, §10.3, §12 | NEG | — |
| 1-§21-9 | IN SCOPE | SB-P-1.18 | §8.7, §10.3, §12 | NEG | — |
| 1-§21-10 | IN SCOPE | SB-P-1.18 | §8.7, §10.3, §12 | NEG | — |
| 1-§21-11 | IN SCOPE | SB-P-1.18 | §8.7, §10.3, §12 | NEG | — |
| 1-§21-12 | IN SCOPE | SB-P-1.18 | §8.7, §10.3, §12 | NEG | — |
| 1-§21-13 | IN SCOPE | SB-P-1.18 | §8.7, §10.3, §12 | NEG | — |
| 1-§22-1 | IN SCOPE | SB-P-1.18 | §8.7, §12 | INSP | — |
| 1-§22-2 | IN SCOPE | SB-P-1.18 | §8.7, §12 | INSP | — |
| 1-§22-3 | IN SCOPE | SB-P-1.18 | §8.7, §12 | INSP | — |
| 1-§22-4 | IN SCOPE | SB-P-1.18 | §8.7, §12 | INSP | — |
| 1-§22-5 | IN SCOPE | SB-P-1.18 | §8.7, §12 | INSP | — |
| 1-§22-6 | IN SCOPE | SB-P-1.18 | §8.7, §12 | INSP | — |
| 1-§22-7 | IN SCOPE | SB-P-1.18 | §8.7, §12 | INSP | — |
| 1-§22-8 | IN SCOPE | SB-P-1.18 | §8.7, §12 | INSP | — |
| 1-§22-9 | IN SCOPE | SB-P-1.18 | §8.7, §12 | INSP | — |
| 1-§22-10 | IN SCOPE | SB-P-1.18 | §8.7, §12 | INSP | — |
| 1-§22-11 | IN SCOPE | SB-P-1.18 | §8.7, §10.1, §12 | INSP | 18:FPDR-1 |
| 1-§22-12 | IN SCOPE | SB-P-1.18 | §8.7, §12 | INSP | — |
| 1-§22-13 | IN SCOPE | SB-P-1.18 | §8.7, §12 | INSP | — |
| 1-§22-14 | IN SCOPE | SB-P-1.18 | §8.7, §12 | INSP | — |
| 1-§22-15 | IN SCOPE | SB-P-1.18 | §8.7, §10.3, §12 | NEG | — |
| 1-§23-1 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | INSP | — |
| 1-§23-2 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | INSP | — |
| 1-§23-3 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | INSP | — |
| 1-§23-4 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | INSP | — |
| 1-§23-5a | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | INSP | — |
| 1-§23-5b | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | — |
| 1-§23-6 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | INSP | — |
| 1-§23-7 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | INSP | — |
| 1-§23-8 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | INSP | — |
| 1-§23-9 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | INSP | — |
| 1-§23-10 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | INSP | — |
| 1-§23-11 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | INSP | — |
| 1-§23-12 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | INSP | — |
| 1-§24-1 | IN SCOPE | SB-P-1.18 | §8.7, §12 | NEG | — |
| 1-§24-2 | IN SCOPE | SB-P-1.18 | §8.7, §12 | NEG | — |
| 1-§24-3 | IN SCOPE | SB-P-1.18 | §8.7, §12 | NEG | — |
| 1-§24-4 | IN SCOPE | SB-P-1.18 | §8.7, §12 | NEG | — |
| 1-§24-5 | IN SCOPE | SB-P-1.18 | §8.7, §12 | NEG | — |
| 1-§24-6 | IN SCOPE | SB-P-1.18 | §8.7, §12 | NEG | — |
| 1-§24-7 | IN SCOPE | SB-P-1.18 | §8.7, §12 | IDEM | — |
| 1-§24-8 | IN SCOPE | SB-P-1.18 | §8.7, §12 | NEG | — |
| 1-§24-9 | IN SCOPE | SB-P-1.18 | §8.7, §12 | NEG | — |
| 1-§24-10 | IN SCOPE | SB-P-1.18 | §8.7, §12 | NEG | — |
| 1-§24-11 | IN SCOPE | SB-P-1.18 | §8.7, §12 | NEG | — |
| 1-§24-12 | IN SCOPE | SB-P-1.18 | §8.7, §12 | NEG | — |
| 1-§24-13 | IN SCOPE | SB-P-1.18 | §8.7, §10.1, §12 | NEG | 18:FPDR-3 |
| 1-§24-14 | IN SCOPE | SB-P-1.18 | §8.7, §12 | NEG | — |
| 1-§24-15 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | NEG | — |
| 1-§25-1 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | NEG | — |
| 1-§25-2 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | NEG | — |
| 1-§25-3 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | NEG | — |
| 1-§25-4 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | NEG | — |
| 1-§25-5 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | NEG | — |
| 1-§25-6 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | NEG | — |
| 1-§25-7 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | NEG | — |
| 1-§25-8 | IN SCOPE | SB-P-1.18 | §8.7, §10.2, §12 | NEG | — |
| 1-§26-1 | IN SCOPE | SB-P-1.18 | §8.17, §10.1, §12, §15 | RT; separate full order test | 18:FPDR-3 |
| 1-§26-2 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 1-§26-3 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 1-§26-4 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 1-§26-5 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 1-§26-6 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 1-§26-7 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | NEG | — |
| 1-§26-8 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | NEG | — |
| 1-§26-9 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | NEG | — |
| 1-§26-10 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT; NEG | — |
| 1-§26-11 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT; IDEM | — |
| 1-§26-12a | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 1-§26-12b | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | — |
| 1-§26-13 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | NEG | — |
| 1-§26-14 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | IDEM | — |
| 1-§27-1 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 1-§27-2 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 1-§27-3 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 1-§27-4 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 1-§27-5 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 1-§27-6 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 1-§27-7 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 1-§27-8 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 1-§27-9 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 1-§27-10 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 1-§28-1 | IN SCOPE | SB-P-1.18 | §8.7, §10.2 | INSP | — |
| 1-§28-2 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 1-§28-3 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 1-§28-4 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 1-§28-5 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 1-§28-6 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 1-§28-7 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 1-§29 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 1-§30-1 | UNRESOLVED FOUNDER DECISION | SB-P-1.18 | §11.5 | — | — |
| 1-§30-2 | UNRESOLVED FOUNDER DECISION | SB-P-1.18 | §11.5 | — | — |
| 1-§31-1 | IN SCOPE | SB-P-1.18 | §8.17, §15 | GATE | — |
| 1-§31-2 | IN SCOPE | SB-P-1.18 | §8.17, §15 | GATE | — |
| 6-§1-1 | IN SCOPE | SB-P-1.18 | §8.8, §15 | EXP | — |
| 6-§2-1 | IN SCOPE | SB-P-1.18 | §8.8 | EXP | — |
| 6-§3-1 | IN SCOPE | SB-P-1.18 | §8.8, §12 | RT | — |
| 6-§3-2 | IN SCOPE | SB-P-1.18 | §8.8, §12 | RT | — |
| 6-§3-3 | IN SCOPE | SB-P-1.18 | §8.8, §12 | RT | — |
| 6-§3-4 | IN SCOPE | SB-P-1.18 | §8.8, §12 | RT | — |
| 6-§3-5 | IN SCOPE | SB-P-1.18 | §8.8, §12 | RT | — |
| 6-§3-6 | IN SCOPE | SB-P-1.18 | §8.8, §10.1, §12 | RT | 18:FPDR-5 |
| 6-§3-7 | IN SCOPE | SB-P-1.18 | §8.8, §12 | RT | — |
| 6-§3-8 | IN SCOPE | SB-P-1.18 | §8.8, §12 | RT | — |
| 6-§3-9 | IN SCOPE | SB-P-1.18 | §8.8, §12 | RT | — |
| 6-§3-10 | UNRESOLVED FOUNDER DECISION | SB-P-1.18 | §11.5 | — | — |
| 6-§4-1 | IN SCOPE | SB-P-1.18 | §8.8, §12 | RT | — |
| 6-§4-2 | IN SCOPE | SB-P-1.18 | §8.8, §12 | RT | — |
| 6-§4-3 | IN SCOPE | SB-P-1.18 | §8.8, §12 | RT | — |
| 6-§4-4 | IN SCOPE | SB-P-1.18 | §8.8, §12 | RT | — |
| 6-§4-5 | IN SCOPE | SB-P-1.18 | §8.8, §12 | RT | — |
| 6-§4-6 | IN SCOPE | SB-P-1.18 | §8.8, §12 | RT | — |
| 6-§4-7 | IN SCOPE | SB-P-1.18 | §8.8, §10.3, §12 | NEG | — |
| 6-§5-1 | IN SCOPE | SB-P-1.18 | §8.9, §12 | RT | — |
| 6-§5-2 | IN SCOPE | SB-P-1.18 | §8.9, §10.1, §12 | RT (QR + point-in-time geofence per DC-14; other methods if adopted) | 18:FPDR-4 |
| 6-§5-3 | IN SCOPE | SB-P-1.18 | §8.9, §10.2, §12 | NEG | 12:FPDR-2; 12:FPDR-3 |
| 6-§5-4 | IN SCOPE | SB-P-1.18 | §8.9, §10.3, §12 | NEG | — |
| 6-§5-5 | IN SCOPE | SB-P-1.18 | §8.9, §10.2, §12 | INSP | — |
| 6-§6-1 | IN SCOPE | SB-P-1.18 | §8.9, §12 | RT | — |
| 6-§6-2 | IN SCOPE | SB-P-1.18 | §8.9, §10.2, §12 | INSP | — |
| 6-§6-3 | IN SCOPE | SB-P-1.18 | §8.9, §10.3, §12 | NEG | — |
| 6-§7-1 | IN SCOPE | SB-P-1.18 | §8.9, §10.2, §12 | INSP | — |
| 6-§7-2 | IN SCOPE | SB-P-1.18 | §8.9, §12 | RT | — |
| 6-§7-3 | IN SCOPE | SB-P-1.18 | §8.9, §12 | RT | — |
| 6-§7-4 | IN SCOPE | SB-P-1.18 | §8.9, §12 | RT | — |
| 6-§7-5 | IN SCOPE | SB-P-1.18 | §8.9, §12 | RT | — |
| 6-§7-6 | IN SCOPE | SB-P-1.18 | §8.9, §12 | INSP | — |
| 6-§8-1 | IN SCOPE | SB-P-1.18 | §8.10, §10.2, §12 | NEG | — |
| 6-§8-2 | IN SCOPE | SB-P-1.18 | §8.10, §10.1, §12 | RT | 18:FPDR-5 |
| 6-§8-3 | IN SCOPE | SB-P-1.18 | §8.10, §10.3, §12 | NEG | — |
| 6-§8-4 | IN SCOPE | SB-P-1.18 | §8.10, §10.3, §12 | NEG | — |
| 6-§8-5 | IN SCOPE | SB-P-1.18 | §8.10, §10.3, §12 | NEG | — |
| 6-§8-6 | IN SCOPE | SB-P-1.18 | §8.10, §10.3, §12 | NEG | — |
| 6-§8-7 | IN SCOPE | SB-P-1.18 | §8.10, §12 | RT; INSP | — |
| 6-§9-1 | IN SCOPE | SB-P-1.18 | §8.11, §12 | RT | — |
| 6-§9-2 | IN SCOPE | SB-P-1.18 | §8.11, §12 | RT | — |
| 6-§9-3 | IN SCOPE | SB-P-1.18 | §8.11, §12 | RT | — |
| 6-§9-4 | IN SCOPE | SB-P-1.18 | §8.11, §12 | RT | — |
| 6-§9-5 | IN SCOPE | SB-P-1.18 | §8.11, §12 | RT | — |
| 6-§9-6 | IN SCOPE | SB-P-1.18 | §8.11, §12 | RT | — |
| 6-§9-7 | IN SCOPE | SB-P-1.18 | §8.11, §10.3, §12 | NEG | — |
| 6-§9-8 | IN SCOPE | SB-P-1.18 | §8.11, §10.3, §12 | NEG | — |
| 6-§9-9 | IN SCOPE | SB-P-1.18 | §8.11, §10.3, §12 | NEG | — |
| 6-§9-10 | IN SCOPE | SB-P-1.18 | §8.11, §10.3, §12 | NEG | — |
| 6-§9-11 | IN SCOPE | SB-P-1.18 | §8.11, §10.3, §12 | NEG | — |
| 6-§10-1a | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | RT | — |
| 6-§10-1b | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | — |
| 6-§10-2 | IN SCOPE | SB-P-1.18 | §8.11, §10.3, §12 | NEG | — |
| 6-§11-1 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | INSP | — |
| 6-§11-2 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | INSP | — |
| 6-§11-3 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | INSP | — |
| 6-§11-4 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | INSP | — |
| 6-§11-5 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | INSP | — |
| 6-§11-6 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | INSP | — |
| 6-§11-7 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | INSP | — |
| 6-§11-8 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | INSP | — |
| 6-§11-9 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | INSP | — |
| 6-§12-1 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | NEG | — |
| 6-§12-2 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | NEG | — |
| 6-§12-3 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | NEG | — |
| 6-§12-4 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | NEG | — |
| 6-§12-5 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | NEG | — |
| 6-§12-6 | IN SCOPE | SB-P-1.18 | §8.11, §10.3, §12 | NEG | — |
| 6-§12-7 | IN SCOPE | SB-P-1.18 | §8.11, §10.3, §12 | NEG | — |
| 6-§12-8 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | NEG | — |
| 6-§13-1 | IN SCOPE | SB-P-1.18 | §8.11, §12 | IDEM | — |
| 6-§13-2 | IN SCOPE | SB-P-1.18 | §8.11, §12 | RT | — |
| 6-§13-3 | IN SCOPE | SB-P-1.18 | §8.11, §12 | RT | — |
| 6-§13-4 | IN SCOPE | SB-P-1.18 | §8.11, §12 | RT | — |
| 6-§13-5 | IN SCOPE | SB-P-1.18 | §8.11, §12 | RT | — |
| 6-§13-6 | IN SCOPE | SB-P-1.18 | §8.11, §12 | RT | — |
| 6-§13-7 | IN SCOPE | SB-P-1.18 | §8.11, §12 | RT | — |
| 6-§13-8 | IN SCOPE | SB-P-1.18 | §8.11, §12 | RT | — |
| 6-§13-9 | IN SCOPE | SB-P-1.18 | §8.11, §12 | IDEM | — |
| 6-§13-10 | IN SCOPE | SB-P-1.18 | §8.11, §12 | RT | — |
| 6-§13-11 | IN SCOPE | SB-P-1.18 | §8.11, §12 | RT | — |
| 6-§14-1 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 6-§14-2 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 6-§14-3 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT; NEG | — |
| 6-§14-4 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 6-§14-5 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 6-§14-6 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 6-§14-7 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | NEG | — |
| 6-§14-8 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT; INSP | — |
| 6-§14-9 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | EXP | — |
| 6-§14-10 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | NEG | — |
| 6-§15-1 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 6-§15-2 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 6-§15-3 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 6-§15-4 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 6-§15-5 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 6-§15-6 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 6-§16 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 6-§17-1 | IN SCOPE | SB-P-1.18 | §8.17, §15 | GATE | — |
| S11-L443-1 | IN SCOPE | SB-P-1.18 | §8.10, §10.1, §12 | RT: a record is created from each of the four origins; IDEM | 18:FPDR-5 |
| S11-L443-2 | IN SCOPE | SB-P-1.18 | §8.10, §10.1, §12 | RT: authorized review; NEG: unauthorized or autonomous review | 18:FPDR-5 |
| S11-L443-3 | IN SCOPE | SB-P-1.18 | §8.10, §10.1, §12 | RT: correction and dispute preserve the original; NEG: destructive rewrite; IDEM | 18:FPDR-5 |
| S11-L443-4 | IN SCOPE | SB-P-1.18 | §8.10, §10.1, §12 | RT: role-scoped and own-record views; NEG: another employee's record | 18:FPDR-5 |
| S11-L443-5 | IN SCOPE | SB-P-1.18 | §8.10, §10.1, §12 | RT: each step attributed to actor, role, origin and time; INSP: audit trail | 18:FPDR-5 |
| 16-§1-1 | IN SCOPE | SB-P-1.18 | §8.12, §15 | EXP | — |
| 16-§1-2 | IN SCOPE | SB-P-1.18 | §8.12, §15 | EXP | — |
| 16-§2-1 | IN SCOPE | SB-P-1.18 | §8.12 | EXP | — |
| 16-§2-2 | IN SCOPE | SB-P-1.18 | §8.12 | EXP | — |
| 16-§2-3 | IN SCOPE | SB-P-1.18 | §8.12 | EXP | — |
| 16-§2-4 | IN SCOPE | SB-P-1.18 | §8.12 | EXP | — |
| 16-§2-5 | IN SCOPE | SB-P-1.18 | §8.12 | EXP | — |
| 16-§2-6 | IN SCOPE | SB-P-1.18 | §8.12 | EXP | — |
| 16-§3-1 | IN SCOPE | SB-P-1.18 | §8.12, §10.2 | INSP | — |
| 16-§3-2 | IN SCOPE | SB-P-1.18 | §8.12, §10.2 | INSP | — |
| 16-§3-3 | IN SCOPE | SB-P-1.18 | §8.12, §10.2 | INSP | — |
| 16-§3-4 | IN SCOPE | SB-P-1.18 | §8.12, §10.2 | INSP | — |
| 16-§3-5 | IN SCOPE | SB-P-1.18 | §8.12, §10.2 | INSP | — |
| 16-§3-6 | IN SCOPE | SB-P-1.18 | §8.12, §10.3 | NEG | — |
| 16-§3-7 | IN SCOPE | SB-P-1.18 | §8.12, §10.2 | INSP | — |
| 16-§4-1 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§4-2 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§4-3 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§4-4 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§4-5 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§4-6 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§4-7 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§4-8 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§4-9 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§4-10 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§4-11 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§4-12 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§4-13 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§4-14 | IN SCOPE | SB-P-1.18 | §8.12, §10.2 | INSP | — |
| 16-§5-1 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§5-2 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§5-3 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§5-4 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§5-5a | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§5-5b | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | — |
| 16-§5-6 | IN SCOPE | SB-P-1.18 | §8.12, §10.2, §12 | INSP | — |
| 16-§5-7 | IN SCOPE | SB-P-1.18 | §8.12, §10.3, §12 | NEG | — |
| 16-§6-1 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§6-2 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§6-3 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§6-4 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§6-5 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§6-6 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 16-§6-7 | IN SCOPE | SB-P-1.18 | §8.12, §10.3, §12 | NEG | — |
| 16-§7-1 | IN SCOPE | SB-P-1.18 | §8.13, §10.2, §12 | INSP | — |
| 16-§7-2 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§7-3 | IN SCOPE | SB-P-1.18 | §8.13, §10.2 | INSP | — |
| 16-§7-4 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§7-5 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§7-6 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§7-7 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§7-8 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§8-1 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§8-2 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§8-3 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§8-4 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§8-5 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§8-6 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§8-7 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§8-8 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§8-9 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§8-10 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§8-11 | IN SCOPE | SB-P-1.18 | §8.13, §10.3, §12 | NEG | — |
| 16-§9-1 | IN SCOPE | SB-P-1.18 | §8.13, §10.2, §12 | INSP | — |
| 16-§9-2 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§10-1 | IN SCOPE | SB-P-1.18 | §8.14, §12 | NEG | — |
| 16-§10-2 | IN SCOPE | SB-P-1.18 | §8.14, §12 | NEG | — |
| 16-§10-3 | IN SCOPE | SB-P-1.18 | §8.14, §10.3, §12 | NEG | — |
| 16-§10-4 | IN SCOPE | SB-P-1.18 | §8.14, §10.3, §12 | NEG | — |
| 16-§11-1 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§11-2 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§11-3 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§11-4 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§11-5 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§11-6a | IN SCOPE | SB-P-1.18 | §8.13, §10.2, §12 | RT | — |
| 16-§11-6b | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | — |
| 16-§11-7 | IN SCOPE | SB-P-1.18 | §8.13, §10.3, §12 | NEG; IDEM | — |
| 16-§12-1 | IN SCOPE | SB-P-1.18 | §8.13, §12 | EXP | — |
| 16-§12-2 | IN SCOPE | SB-P-1.18 | §8.13, §10.2, §12 | EXP | — |
| 16-§13-1 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§13-2 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§13-3 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | — |
| 16-§13-4 | IN SCOPE | SB-P-1.18 | §8.13, §10.3, §12 | NEG | — |
| 16-§14-1 | IN SCOPE | SB-P-1.18 | §8.13, §10.2, §12 | INSP | 12:FPDR-1 |
| 16-§14-2 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | 12:FPDR-1 |
| 16-§14-3 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | 12:FPDR-1 |
| 16-§14-4 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | 12:FPDR-1 |
| 16-§14-5 | IN SCOPE | SB-P-1.18 | §8.13, §12 | RT | 12:FPDR-1 |
| 16-§14-6 | IN SCOPE | SB-P-1.18 | §8.13, §10.3, §12 | NEG | 12:FPDR-1 |
| 16-§15-1 | IN SCOPE | SB-P-1.18 | §8.14, §12 | RT | — |
| 16-§15-2 | IN SCOPE | SB-P-1.18 | §8.14, §12 | RT | — |
| 16-§15-3 | IN SCOPE | SB-P-1.18 | §8.14, §12 | RT | — |
| 16-§15-4 | IN SCOPE | SB-P-1.18 | §8.14, §12 | RT | — |
| 16-§15-5 | IN SCOPE | SB-P-1.18 | §8.14, §12 | RT | — |
| 16-§15-6 | IN SCOPE | SB-P-1.18 | §8.14, §12 | RT | — |
| 16-§15-7 | IN SCOPE | SB-P-1.18 | §8.14, §10.3, §12 | NEG | — |
| 16-§15-8 | IN SCOPE | SB-P-1.18 | §8.14, §10.3, §12 | NEG | — |
| 16-§15-9 | IN SCOPE | SB-P-1.18 | §8.14, §10.3, §12 | NEG | — |
| 16-§15-10 | IN SCOPE | SB-P-1.18 | §8.14, §10.3, §12 | NEG | — |
| 16-§15-11 | IN SCOPE | SB-P-1.18 | §8.14, §10.3, §12 | NEG | — |
| 16-§16-1 | IN SCOPE | SB-P-1.18 | §8.14, §12 | RT | — |
| 16-§16-2 | IN SCOPE | SB-P-1.18 | §8.14, §12 | RT | — |
| 16-§16-3 | IN SCOPE | SB-P-1.18 | §8.14, §12 | RT | — |
| 16-§16-4 | IN SCOPE | SB-P-1.18 | §8.14, §12 | IDEM | — |
| 16-§16-5 | IN SCOPE | SB-P-1.18 | §8.14, §12 | RT | — |
| 16-§16-6 | IN SCOPE | SB-P-1.18 | §8.14, §12 | RT | — |
| 16-§16-7 | IN SCOPE | SB-P-1.18 | §8.14, §12 | RT | — |
| 16-§16-8 | IN SCOPE | SB-P-1.18 | §8.14, §12 | NEG | — |
| 16-§16-9 | IN SCOPE | SB-P-1.18 | §8.14, §12 | RT | — |
| 16-§16-10 | IN SCOPE | SB-P-1.18 | §8.14, §12 | RT | — |
| 16-§16-11 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | RT | — |
| 16-§17-1 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | NEG | — |
| 16-§17-2 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | NEG | — |
| 16-§17-3 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | NEG | — |
| 16-§17-4 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | NEG | — |
| 16-§17-5 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | NEG | — |
| 16-§17-6 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | INSP | — |
| 16-§17-7 | IN SCOPE | SB-P-1.18 | §8.14, §10.3, §12 | NEG | — |
| 16-§18-1 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | INSP | — |
| 16-§18-2 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | INSP | — |
| 16-§18-3 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | INSP | — |
| 16-§18-4 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | INSP | — |
| 16-§18-5 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | INSP | — |
| 16-§18-6 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | INSP | — |
| 16-§18-7 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | INSP | — |
| 16-§18-8 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | INSP | — |
| 16-§18-9 | IN SCOPE | SB-P-1.18 | §8.14, §10.2, §12 | INSP | — |
| 16-§18-10 | IN SCOPE | SB-P-1.18 | §8.14, §10.3 | NEG | — |
| 16-§19-1 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 16-§19-2 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 16-§19-3 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 16-§19-4 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 16-§19-5 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 16-§20-1 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 16-§20-2 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 16-§20-3 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 16-§20-4 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 16-§20-5 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | NEG | — |
| 16-§20-6 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | NEG | — |
| 16-§20-7a | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT | — |
| 16-§20-7b | ASSIGNED TO LATER MISSION | SB-P-1.20 | §11.1 | — | — |
| 16-§20-8 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | IDEM | — |
| 16-§20-9 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | RT; NEG | — |
| 16-§20-10 | IN SCOPE | SB-P-1.18 | §8.17, §12, §15 | NEG | — |
| 16-§21-1 | IN SCOPE | SB-P-1.18 | §8.14, §10.2 | INSP | — |
| 16-§21-2 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 16-§21-3 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 16-§21-4 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 16-§21-5 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 16-§21-6 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| 16-§22 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| 16-§23-1 | IN SCOPE | SB-P-1.18 | §8.17, §15 | GATE | — |
| 22-§16-1 | IN SCOPE | SB-P-1.18 | §8.15, §10.2, §12 | INSP; NEG | 12:FPDR-2 |
| 22-§16-2 | IN SCOPE | SB-P-1.12 / SB-P-1.18 | §8.15, §10.3, §12 | NEG | 12:FPDR-2 |
| 22-§16-3 | IN SCOPE | SB-P-1.18 (attendance/delivery instance) | §8.15, §12 | INSP | 12:FPDR-3 |
| 22-§16-4 | IN SCOPE | SB-P-1.18 (attendance/delivery instance) | §8.15, §12 | NEG | 12:FPDR-3 |
| 22-§16-5 | IN SCOPE | SB-P-1.18 (attendance/delivery instance) | §8.15, §12 | RT | 12:FPDR-3 |
| 22-§16-6 | IN SCOPE | SB-P-1.18 (attendance/delivery instance) | §8.15, §10.1, §12 | INSP | 12:FPDR-3; 18:FPDR-1 |
| 22-§16-7 | IN SCOPE | SB-P-1.18 (attendance/delivery instance) | §8.15, §12 | NEG | 12:FPDR-3 |
| 22-§16-8 | IN SCOPE | SB-P-1.18 | §8.15, §12 | RT | 12:FPDR-2 |
| 22-§16-9 | IN SCOPE | SB-P-1.18 | §8.15, §12 | RT | 12:FPDR-2 |
| 22-§16-10 | IN SCOPE | SB-P-1.18 | §8.15, §12 | RT | 12:FPDR-2 |
| 22-§16-11 | IN SCOPE | SB-P-1.18 | §8.15, §10.1, §10.2, §12 | INSP | 12:FPDR-2; 18:FPDR-2 |
| 22-§29-9 | IN SCOPE | SB-P-1.18 | §8.15, §12, §15 | RT; NEG | 12:FPDR-2 |
| 17-§4-15 | IN SCOPE | SB-P-1.18 | §8.16, §12 | RT | — |
| 17-§9-1 | IN SCOPE | SB-P-1.18 | §8.16, §12 | RT | — |
| 17-§9-2 | IN SCOPE | SB-P-1.18 | §8.16, §12 | RT | — |
| 17-§9-3 | IN SCOPE | SB-P-1.18 | §8.16, §12 | RT | — |
| 17-§9-4 | IN SCOPE | SB-P-1.18 | §8.16, §12 | RT | — |
| 17-§9-5 | IN SCOPE | SB-P-1.18 | §8.16, §10.1, §12 | RT | 18:FPDR-5 |
| 17-§9-6 | IN SCOPE | SB-P-1.18 | §8.16, §12 | RT; NEG | — |
| 17-§9-7 | IN SCOPE | SB-P-1.18 | §8.16, §10.3, §12 | NEG | — |
| 17-§10-1 | IN SCOPE | SB-P-1.18 | §8.16, §12 | RT | — |
| 17-§10-2 | IN SCOPE | SB-P-1.18 | §8.16, §12 | RT | — |
| 17-§10-3 | IN SCOPE | SB-P-1.18 | §8.16, §12 | RT | — |
| 17-§10-4 | IN SCOPE | SB-P-1.18 | §8.16, §12 | RT | — |
| 17-§10-5 | IN SCOPE | SB-P-1.18 | §8.16, §12 | RT | — |
| 17-§10-6 | IN SCOPE | SB-P-1.18 | §8.16, §12 | RT | — |
| 17-§10-7 | IN SCOPE | SB-P-1.18 | §8.16, §10.3, §12 | NEG | — |
| 24-§18-4 | IN SCOPE | SB-P-1.18 | §8.9, §12, §15 | RT | — |
| 24-§21-6 | IN SCOPE | SB-P-1.18 | §8.9, §12 | RT | — |
| 9-§12-7 | IN SCOPE | SB-P-1.18 | §8.11, §10.2, §12 | EXP | — |
| 9-§12-9 | IN SCOPE | SB-P-1.18 | §8.3, §10.2, §12 | EXP | — |
| 9-§12-12 | IN SCOPE | SB-P-1.18 | §8.13, §10.2, §12 | EXP | — |
| 10-§13-5 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 10-§13-7 | IN SCOPE | SB-P-1.18 | §8.9, §12 | RT; FRV-B | — |
| 12-§4-4 | IN SCOPE | SB-P-1.17 / SB-P-1.18 (orders) | §8.3, §12 | RT | — |
| 12-§7-7 | IN SCOPE | SB-P-1.17 / SB-P-1.18 (orders) | §8.3, §12 | RT | — |
| 3-§9-3 | IN SCOPE | SB-P-1.17 / SB-P-1.18 | §8.1, §12 | RT | — |
| 3-§11-6 | IN SCOPE | SB-P-1.16 / SB-P-1.17 / SB-P-1.18 | §8.2, §12 | NEG | — |
| 3-§15-7 | IN SCOPE | SB-P-1.17 / SB-P-1.18 | §8.1, §10.2, §12 | INSP | 16:FPDR-1 |
| 3-§15-12 | IN SCOPE | SB-P-1.18 | §8.6, §10.2, §12 | INSP; IDEM | — |
| 3-§15-13 | IN SCOPE | SB-P-1.18 | §8.8, §10.2, §12 | INSP | — |
| 5-§4-11 | IN SCOPE | SB-P-1.18 | §8.9, §12 | RT | — |
| 5-§4-12 | IN SCOPE | SB-P-1.18 | §8.3, §12 | RT | — |
| 5-§4-13 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 5-§6-10 | IN SCOPE | SB-P-1.18 | §8.6, §12 | RT | — |
| 5-§6-12 | IN SCOPE | SB-P-1.18 | §8.12, §12 | RT | — |
| 5-§7-5 | IN SCOPE | SB-P-1.18 | §8.9, §12, §15 | RT | — |
| 5-§7-6 | IN SCOPE | SB-P-1.18 | §8.3, §12, §15 | RT | — |
| 5-§7-7 | IN SCOPE | SB-P-1.18 | §8.12, §12, §15 | RT | — |
| BP-§10.3-S2 | IN SCOPE | SB-P-1.17 / SB-P-1.18 | §8.1, §12 | RT | 16:FPDR-1 |
| 21-§10-1 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 21-§10-2 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 21-§10-3 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 21-§10-4 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 21-§10-5 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 21-§10-6 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 21-§13-2 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 21-§13-3 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 21-§14-1 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 21-§16-1 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 21-§16-2 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 21-§17 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 21-§18-1 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 22-§5-4 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 22-§5-5 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 22-§5-7 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 22-§12-1 | DELEGATED | SB-P-1.15 | §11.2 | — | 12:FPDR-1 |
| 22-§13-1 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 22-§14-1 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 22-§15 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 22-§33-1 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 7-§2-1 | DELEGATED | SB-P-1.17 | §11.2 | — | — |
| 7-§2-2 | DELEGATED | SB-P-1.17 | §11.2 | — | — |
| 25-§4-1 | DELEGATED | SB-P-1.14 | §11.2 | — | — |
| 25-§4-8 | DELEGATED | SB-P-1.14 | §11.2 | — | — |
| 18-§5 | DELEGATED | SB-P-1.19 | §11.2 | — | — |
| 18-§9 | DELEGATED | SB-P-1.19 | §11.2 | — | — |
| 21-§4-3 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 21-§4-5 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 21-§4-6 | DELEGATED | SB-P-1.12 | §11.2 | — | — |
| 22-§4-3 | DELEGATED | SB-P-1.14 | §11.2 | — | — |
| 25-§6-1 | DELEGATED | SB-P-1.14 | §11.2 | — | — |
| 25-§7-1 | DELEGATED | SB-P-1.14 | §11.2 | — | — |
| 8-§4-2 | DELEGATED | SB-P-1.19 | §11.2 | — | — |
| 23-§4-3 | DELEGATED | SB-P-1.20 | §11.2 | — | — |
| 23-§4-5 | DELEGATED | SB-P-1.20 | §11.2 | — | — |
| 2-§11-9 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 2-§11-10 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 2-§12-8 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 4-§3-6 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 4-§3-7 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 4-§3-8 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 4-§4-4 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 4-§5-6 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 4-§6-8 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 4-§6-9 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 4-§6-10 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 4-§11-6 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 11-§5-3 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 11-§8-2 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 11-§8-6 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 11-§8-7 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 11-§10-5 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 22-§11-2 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 22-§11-5 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 22-§11-6 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 14-§6-5 | DELEGATED | SB-P-1.16 | §11.2 | — | — |
| 14-§13-1 | DELEGATED | SB-P-1.16 | §11.2 | — | — |
| 14-§13-2 | DELEGATED | SB-P-1.16 | §11.2 | — | — |
| 14-§13-3 | DELEGATED | SB-P-1.16 | §11.2 | — | — |
| 15-§5-6 | DELEGATED | SB-P-1.16 | §11.2 | — | — |
| 15-§7-7 | DELEGATED | SB-P-1.16 | §11.2 | — | — |
| 15-§15-1 | DELEGATED | SB-P-1.16 | §11.2 | — | — |
| 15-§15-2 | DELEGATED | SB-P-1.16 | §11.2 | — | — |
| 15-§15-3 | DELEGATED | SB-P-1.16 | §11.2 | — | — |
| 15-§15-4 | DELEGATED | SB-P-1.16 | §11.2 | — | — |
| 15-§15-5 | DELEGATED | SB-P-1.16 | §11.2 | — | — |
| 15-§15-6 | DELEGATED | SB-P-1.16 | §11.2 | — | — |
| 15-§15-7 | DELEGATED | SB-P-1.16 | §11.2 | — | — |
| 15-§23-7 | DELEGATED | SB-P-1.16 | §11.2 | — | — |
| 15-§25-7 | DELEGATED | SB-P-1.16 | §11.2 | — | — |
| 24-§6-2 | DELEGATED | SB-P-1.13 | §11.2 | — | — |
| 24-§9-2 | DELEGATED | SB-P-1.13 | §11.2 | — | — |
| 24-§10-10 | DELEGATED | SB-P-1.13 | §11.2 | — | — |
| 11-§9-3 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 11-§9-4 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| 11-§9-6 | DELEGATED | SB-P-1.15 | §11.2 | — | — |
| BP-§5.5-p1 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | GATE | — |
| BP-§5.5-p2 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | GATE | — |
| BP-§10.7-W | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | 12:FPDR-2 |
| BP-§10.7-A1 | IN SCOPE | SB-P-1.18 | §8.3 | RT | — |
| BP-§10.7-A2 | IN SCOPE | SB-P-1.18 | §8.3 | RT | — |
| BP-§10.7-A3 | IN SCOPE | SB-P-1.18 | §8.4 | RT | — |
| BP-§10.7-A4 | IN SCOPE | SB-P-1.18 | §8.4 | RT | — |
| BP-§10.7-A5 | IN SCOPE | SB-P-1.18 | §8.5 | RT | — |
| BP-§10.7-A6 | IN SCOPE | SB-P-1.18 | §8.5 | RT | — |
| BP-§10.7-A7 | IN SCOPE | SB-P-1.18 | §8.6 | RT | — |
| BP-§10.7-A8 | IN SCOPE | SB-P-1.18 | §8.15, §10.3 | NEG | — |
| BP-§10.7-A9 | IN SCOPE | SB-P-1.18 | §8.6, §10.3 | NEG | — |
| BP-§10.7-A10 | IN SCOPE | SB-P-1.18 | §8.6 | RT | — |
| BP-§10.7-A11 | IN SCOPE | SB-P-1.18 | §8.1, §10.3 | NEG | — |
| BP-§10.7-AS1 | IN SCOPE | SB-P-1.18 | §8.17, §15 | FRV-A | — |
| BP-§10.7-B1 | IN SCOPE | SB-P-1.18 | §8.8 | RT | — |
| BP-§10.7-B2 | IN SCOPE | SB-P-1.18 | §8.9 | RT | — |
| BP-§10.7-B3 | IN SCOPE | SB-P-1.18 | §8.8 | RT | — |
| BP-§10.7-B4 | IN SCOPE | SB-P-1.18 | §8.15, §10.3 | NEG | — |
| BP-§10.7-B5 | IN SCOPE | SB-P-1.18 | §8.9 | RT | — |
| BP-§10.7-B6 | IN SCOPE | SB-P-1.18 | §8.11 | RT | — |
| BP-§10.7-B7 | IN SCOPE | SB-P-1.18 | §8.10, §10.3 | NEG | — |
| BP-§10.7-B8 | IN SCOPE | SB-P-1.18 | §8.10, §10.3 | NEG | — |
| BP-§10.7-BS1 | IN SCOPE | SB-P-1.18 | §8.17, §15 | FRV-B | — |
| BP-§10.7-C1 | IN SCOPE | SB-P-1.18 | §8.12 | RT | — |
| BP-§10.7-C2 | IN SCOPE | SB-P-1.18 | §8.13 | RT | — |
| BP-§10.7-C3 | IN SCOPE | SB-P-1.18 | §8.13 | RT | — |
| BP-§10.7-C4 | IN SCOPE | SB-P-1.18 | §8.14 | RT | — |
| BP-§10.7-C5 | IN SCOPE | SB-P-1.18 | §8.14 | RT | — |
| BP-§10.7-CS1 | IN SCOPE | SB-P-1.18 | §8.17, §15 | FRV-C | — |
| BP-§10.7-X | IN SCOPE | SB-P-1.18 | §8.17, §15 | EXP | — |
| BP-§11-p1 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§11-b1 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§11-b2 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§11-b3 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§11-b4 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§11-b5 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§11-b6 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§11-b7 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§11-b8 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| BP-§11-b9 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§11-p3 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§11-p4 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§11-p5 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§13-p1 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§13-T | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§13-b1 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§13-b2 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§13-b3 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§13-b4 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§13-b5 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§13-b6 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§13-b7 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§13-b8 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§13-b9 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§13-b10 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§13-p5 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| BP-§15-1 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| BP-§15-2 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| BP-§15-3 | UNRESOLVED FOUNDER DECISION | SB-P-1.18 | §11.5 | — | — |
| BP-§15-4 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| BP-§15-5 | UNRESOLVED FOUNDER DECISION | SB-P-1.18 | §11.5 | — | — |
| BP-§15-6 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| BP-§15-7 | UNRESOLVED FOUNDER DECISION | SB-P-1.18 | §11.5 | — | — |
| BP-§15-8 | UNRESOLVED FOUNDER DECISION | SB-P-1.18 | §11.5 | — | — |
| BP-§15-9 | NOT APPLICABLE | SB-P-1.18 | §11.4 | — | — |
| BP-§15-p2 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§15-p3 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| BP-§16-1 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-2 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-3 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-4 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-5 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-6 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-7 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-8 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-9 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-10 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-11 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-12 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-13 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-14 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-15 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-16 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-17 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-18 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-19 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-20 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| BP-§16-p2 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| GPCV-R1 | IN SCOPE | SB-P-1.18 | §8.17 | GATE | — |
| GPCV-R6 | IN SCOPE | SB-P-1.18 | §8.17 | GATE | — |
| GPCV-R16 | IN SCOPE | SB-P-1.18 | §8.17 | GATE | — |
| GPCV-§8-3 | IN SCOPE | SB-P-1.18 | §8.8, §10.2 | INSP | — |
| GPCV-§8-4 | IN SCOPE | SB-P-1.18 | §8.17, §10.2 | INSP | — |
| GPCV-§8-5 | IN SCOPE | SB-P-1.18 | §8.1, §10.2 | INSP | — |
| GPCV-§9-2 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| GPCV-§9-3 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| GPCV-§9-4 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| GPCV-§9-7 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| GPCV-§9-8 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| GPCV-§9-9 | OUT OF BUILD SCOPE | SB-P-1.18 | §11.3 | — | — |
| GPCV-§9-11 | UNRESOLVED FOUNDER DECISION | SB-P-1.18 | §11.5 | — | — |
