# SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO

## Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.15 |
| Mission Name | Reminder, Daily Intelligence & Ask CFO |
| Mission Type | Product Mission — shared Reminder Engine, bounded delegated automation, scheduler foundation, Shared Notification Foundation, Daily Intelligence rhythm and read-only Ask CFO |
| Lifecycle Stage | Source 18 v1.2 Stage 4 — Product Blueprint Sections 1–19 — **DRAFT** |
| Status | `DRAFT — MISSION CONTROL STAGE 5 PRODUCT REVIEW REQUIRED — NOT APPROVED — NOT LOCKED` |
| Product Authority | Founder (Riyas PK) |
| Product Discovery and Drafting | Claude Code, appointed Stage 2–4 Definition Actor (SB-P-1.15-MC-03) |
| Lifecycle Authority | Source 18 v1.2 (`merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `0945bda60a93c99909c3b7a247d5427ebe256011`) |
| Structural template | `docs/phase-1-mission-blueprint/templates/SB-P-Product-Feature-Elaboration-Workflow-Template.md` (blob `710dd977`); structure of the latest completed Blueprint `docs/phase-1-mission-blueprint/completed/SB-P-1.14.md` (blob `256828d2`), itself following SB-P-1.10 |
| Stage 4 Authorization | SB-P-1.15-MC-08, `communication/missions/SB-P-1.15/mission-control/09-stage4-discovery-blueprint-publication-authority.md` (blob `bddd4d28e2a116c1bbcba2f42a2e94c2030bfce9`), canonical at `main@36ded7f83f4a77bc40273081b0a48789c41173e1` (PR #863) |
| Governing Build Plan section | Build Plan §10.4 (`00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`, blob `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a`) |
| Primary contracts | Contract 2 (`53635557`), Contract 4 (`ce940d25`), Contract 11 (`e802745a`); Contract 22 Shared Notification Foundation and Reminder/Scheduler slices (`61e1bb91`); Global Product Completion View (`ee76d920`) |
| Canonical FCTM | `communication/missions/SB-P-1.15/claude-code/03-stage2-populated-fctm.md`, blob `65eeaf8d31b81595b971c22895615a096555f84f`: 803 rows — 694 `IN SCOPE`, 25 `ASSIGNED TO LATER MISSION`, 40 `DELEGATED`, 23 `NOT APPLICABLE`, 20 `OUT OF BUILD SCOPE`, 1 `UNRESOLVED FOUNDER DECISION`, 0 `ESCALATED`, 0 `ALREADY DEMONSTRATED` |
| Founder Product Decision Record | `communication/missions/SB-P-1.15/founder/02-stage3-founder-product-decision-record.md`, blob `0e0928fec1215ff91fa82386663d6a8f17f43bd2`, **SB-P-1.15-FPDR-01** (FDB-1, FDB-2, FDB-3), canonical (PR #861). Distinct from SB-P-1.12 `FPDR-1` and SB-P-1.14 `FPDR-1`, which are cited with their mission namespace |
| Stage 3 gate | TRIGGERED (T4 Δ-04; T6 DC-01, DC-02) and resolved by SB-P-1.15-FPDR-01 (SB-P-1.15-MC-06, MC-07) |
| Upstream dependencies | SB-P-1.12, SB-P-1.13 and SB-P-1.14: specification available (Blueprints, EISs and Stage 13 packages `APPROVED — LOCKED`); implementation not complete (Implementation Authorization `WITHHELD`, each suspended); runtime evidence not established |
| Date | 2026-10-09 |
| Builder Review | Not started (Stage 6, Claude Code) |
| Engineering Review (Sections 20–21) | Not started (Stage 7, Claude Code) |
| Mission Control Review | Stage 5 review pending |
| Blueprint Lock | Not locked |

## Mission Snapshot

| Field | Summary |
|---|---|
| Product problem | Smart Business has no reminder model, no scheduler, no notification foundation, no Daily Intelligence and no Ask CFO beyond a "coming soon" card (GPCV rows 2, 4, 11; Delta Δ-01, Δ-03, Δ-05). The transaction correction dialog already promises an Owner notification that the repository does not deliver (Δ-04). |
| Primary users | Owner (default Ask CFO and Daily Intelligence user); Manager only within explicit Owner delegation; Employee only for permitted self/operational reminders. Customers, suppliers and delivery staff have no Ask CFO or Owner-intelligence access (`2-§3-*`, `4-§7-*`, `11-§13-*`). |
| Build Now in this mission | One shared Reminder Engine with recurrence, snooze/reschedule and history; bounded standing automation stored as Owner delegation; one scheduler/background-job foundation; the Shared Notification Foundation as a distinct workstream (SB-P-1.12 FPDR-1); Daily Intelligence at 7:00 AM / 10:30 AM / 10:00 PM in business timezone; read-only, permission-scoped Ask CFO. |
| Core boundary | This mission consumes the SB-P-1.12 authority kernel, the SB-P-1.13 conversation/AI kernel and the SB-P-1.14 Business Memory as specifications; it builds no parallel version of any of them. Any consequential continuation uses the single governed transactions-family write path (`DTX`, PQ-2). Before SB-P-1.20, reminders and intelligence are native-only with disclosed limits (FDB-2). Ask CFO gives qualified entry-level credit/repayment answers; authoritative balances are SB-P-1.16 (FDB-3). |
| Assigned to later missions (Build Now, not Build Later) | 25 rows: SB-P-1.16 1, SB-P-1.17 2, SB-P-1.19 8, SB-P-1.19/SB-P-1.15 (inherited verbatim) 1, SB-P-1.20 13 (Section 11.1). |
| Rejected | Ask CFO as write-capable authority; triggers or AI as permission; duplicate reminder engines or schedulers; fabricated insight or balances; historical 6:00 / 9:15 timings; every Build Plan §16 rejection (Section 11.3). |
| Stage result sought | A Mission Control-reviewable, source-traceable Product Blueprint through Section 19, assembled by reference to the canonical 803-row FCTM and SB-P-1.15-FPDR-01, with the FDB-1 post-FCTM overlay made explicit. |

## 1. Mission Overview

### Purpose

Reduce Owner mental load while preserving human authority (Build Plan §10.4 outcome, `BP-§10.4-O`).

### Summary

SB-P-1.15 delivers the time-based and intelligence layer of Smart Business: remembering commitments (Contract 11), bringing the right things to the Owner's attention on a fixed rhythm (Contract 4), and helping the Owner think about the business through read-only conversation (Contract 2). It also builds the shared Reminder, Scheduler and Notification foundations that later missions reuse (Contract 22 §11, §12, §18; Build Plan §6.5, §11).

### Mission Philosophy

Build Plan §10.4 exit principle, by reference (`BP-§10.4-X`): Smart Business remembers, brings attention and helps the Owner think, but never behaves as if it owns the business. Reminders help humans remember; a trigger never creates permission (Contract 11 header and §3). Ask CFO explains, analyses and suggests; the Owner decides (Contract 2 header and §8). Daily Intelligence informs; humans decide (Contract 4 header).

## 2. Domain

### Reminders, Scheduled Intelligence and Owner Business Intelligence

The mission's domain is commitments over time (reminders and standing rules), scheduled clarity (Daily Intelligence) and conversational, read-only reasoning over the merchant's own Business Memory (Ask CFO), together with the shared scheduler and notification foundations they require.

### Relationship to Other Domains

| Domain | Relationship | Source |
|---|---|---|
| Authority and identity (SB-P-1.12) | Every reminder, rule, notification and answer obeys the one permission model; Ask CFO is a distinct Owner-default capability | Contract 21 §8, §9, §12; `D12` |
| Conversation and AI (SB-P-1.13) | Reminder drafts, Ask CFO reasoning and Daily Intelligence explanation run through the shared kernel and Human Language Layer | Contract 24 §12, §13, §16; Contract 9 §12; `D13` |
| Business Memory (SB-P-1.14) | Ask CFO and Daily Intelligence read the four-state Ledger and document status; they create no second truth | Contract 3 §13, §14; `D14` |
| Credit, stock, orders, HR, compliance (SB-P-1.16 to SB-P-1.18) | Consume the shared Reminder, Scheduler and Notification foundations; Ask CFO and Daily Intelligence read their data when it exists | Contract 11 §8; Contract 22 §11; Build Plan §11 |
| WhatsApp (SB-P-1.20) | Reuses the Notification Foundation and the same intelligence; no separate brain | SB-P-1.12 FPDR-1; Contract 2 §13; Contract 22 §26 |

## 3. Mission Objective

Deliver, by reference to the FCTM, every `IN SCOPE` obligation of Contracts 2, 4 and 11, the Contract 22 Reminder, Scheduler and Notification foundations, and Build Plan §10.4, so that Founder Scenarios A and B and the approved experience anchors can be demonstrated once the upstream dependencies exist (Section 15).

## 4. Business Purpose

Merchants carry supplier follow-ups, credit collection, renewals and business questions in memory (Contract 11 §2, Contract 2 §1). This mission converts that load into governed reminders, a calm daily rhythm and an honest business thinking partner, without letting software take decisions that belong to the Owner (Build Plan §10.4; Contract 2 §2; Contract 11 §3).

## 5. Product Truth Alignment

| Principle | Source | Realized by |
|---|---|---|
| AI Assistant, Not AI Judge | Contract 2 §2, §8; Contract 11 §3; Contract 22 §24 | `2-§2-*`, `2-§8-*`, `11-§3-*`; Section 10 |
| Human decision ownership | Contract 2 §8; Contract 4 §11; Contract 11 §3, §10 | Sections 8.2, 8.6, 10 |
| Trigger ≠ authority; reminder ≠ proof of event | Contract 11 §3, §9; Contract 21 §12 | `11-§9-*`, `22-§18-7`; Section 8.2 |
| Truth with dignity; never invent | Contract 2 §6, §9, §24; Contract 4 §9, §10, §15 | Sections 8.5, 8.6 |
| One foundation, reused; no duplicate engines | Build Plan §6.5; Contract 22 §11, §28 | Sections 8.1, 8.3, 8.4, 8.7 |
| Smart Business works without WhatsApp | Build Plan §8 | `BP-§8`; FDB-2 |

## 6. User Value

- **Owner:** remembers fewer things; receives three concise daily views of authorized business facts; asks questions in English, Malayalam or Manglish and gets honest, sourced answers with uncertainty stated (Contract 2 §4, §20, §21; Contract 4 §2–§5).
- **Manager:** reminders and intelligence only within delegated authority (Contract 4 §7; Contract 11 §13; DC-06).
- **Employee:** permitted self/operational reminders; never Owner intelligence by default (Contract 2 §3; Contract 4 §7; Contract 11 §13).

## 7. Core Deliverables

| Deliverable | Section | Draft workstream (Intake Pack §7) |
|---|---|---|
| Shared Reminder Engine | 8.1 | SB-P-1.15/WS-A |
| Delegated automation and consequential continuation | 8.2 | SB-P-1.15/WS-B |
| Scheduler and background-job foundation | 8.3 | SB-P-1.15/WS-C |
| Shared Notification Foundation (SB-P-1.12 FPDR-1) | 8.4 | SB-P-1.15/WS-D |
| Daily Intelligence rhythm | 8.5 | SB-P-1.15/WS-E |
| Ask CFO read-only intelligence | 8.6 | SB-P-1.15/WS-F |
| Cross-cutting assurance | 8.7 | SB-P-1.15/WS-G |
| Mission outcome, channel independence and delivery accounting | 8.8 | all |

The workstream register remains a draft until Stage 13.

## 8. Detailed Functional Scope

Each subsection names its governing sources and lists every `IN SCOPE` FCTM row it realizes. Requirement text is not restated; the row pointer and its source section are the requirement. Each `IN SCOPE` row appears in exactly one subsection. Rows of kind `SCN`, `FRV` or `EXP` are also acceptance or experience obligations in Section 15. Rows carrying a dependency code are also governed by Section 12. The grouping is document navigation only; it changes no FCTM row (SB-P-1.15-MC-08 §1).

### 8.1 Shared Reminder Engine

Sources: Contract 11 §1–§9, §13–§15, §18–§23; Contract 22 §11; Contract 24 §13, §31 item 10; Contract 9 §12, §17 (reminder slices); Contract 10 §5, §11, §13 (reminder slices); Contract 12 §4, §13, §21 (Basic Voice reminder slices); Contract 3 §15; Build Plan §6.5, §10.4 work areas 1–3, §11.

Mission design: One shared reminder model and engine serves every feature (`11-§1-*`, `11-§8-*`, `22-§11-*`). Reminders are created by text or voice through the shared Human Language Layer and AI draft seam, with the smallest useful clarification (`11-§5-*`, `24-§13-1`, `9-§17-5`). Acknowledgement, snooze and reschedule preserve history; recurrence is kept separate from occurrences (`11-§6-*`, `11-§7-*`). A reminder becoming due never proves an event (`11-§9-*`). Native surfaces only before SB-P-1.20 (FDB-2).

**FCTM rows realized here (135 `IN SCOPE`):**

- Contract 11 (109): `11-§1-1`, `11-§1-2`, `11-§2-9`, `11-§3-1`, `11-§3-2`, `11-§3-3`, `11-§3-4`, `11-§3-5`, `11-§3-6`, `11-§3-7`, `11-§3-8`, `11-§4-1`, `11-§4-2`, `11-§4-3`, `11-§4-4`, `11-§4-5`, `11-§4-6`, `11-§4-7`, `11-§4-8`, `11-§4-9`, `11-§4-10`, `11-§4-11`, `11-§4-12`, `11-§4-13`, `11-§5-1`, `11-§5-2`, `11-§5-3`, `11-§5-4`, `11-§5-5`, `11-§6-1`, `11-§6-2`, `11-§6-3`, `11-§6-4`, `11-§6-5`, `11-§6-6`, `11-§6-7`, `11-§7-1`, `11-§7-2`, `11-§7-3`, `11-§8-1`, `11-§8-2`, `11-§8-3`, `11-§8-4`, `11-§8-5`, `11-§8-6`, `11-§8-7`, `11-§8-8`, `11-§8-9`, `11-§9-1`, `11-§9-2`, `11-§9-3`, `11-§9-4`, `11-§9-5`, `11-§9-6`, `11-§9-7`, `11-§13-1`, `11-§13-2`, `11-§13-3`, `11-§13-4`, `11-§14-1`, `11-§14-3`, `11-§15-1`, `11-§15-2`, `11-§18-1`, `11-§18-2`, `11-§18-3`, `11-§18-4`, `11-§18-5`, `11-§18-6`, `11-§18-7`, `11-§18-8`, `11-§18-9`, `11-§18-10`, `11-§18-11`, `11-§18-12`, `11-§19-1`, `11-§19-2`, `11-§19-3`, `11-§19-4`, `11-§20-1`, `11-§20-2`, `11-§20-3`, `11-§20-4`, `11-§20-5`, `11-§20-6`, `11-§20-7`, `11-§20-8`, `11-§21-1`, `11-§21-2`, `11-§21-3`, `11-§21-4`, `11-§21-5`, `11-§21-6`, `11-§22-1`, `11-§22-2`, `11-§22-3`, `11-§22-4`, `11-§22-6`, `11-§22-7`, `11-§22-8`, `11-§22-9`, `11-§22-10`, `11-§22-11`, `11-§22-12`, `11-§23-1`, `11-§23-2`, `11-§23-3`, `11-§23-4`, `11-§23-5`
- Contract 22 (9): `22-§11-1`, `22-§11-2`, `22-§11-3`, `22-§11-4`, `22-§11-5`, `22-§11-6`, `22-§11-7`, `22-§11-8`, `22-§11-9`
- Contract 24 (2): `24-§13-1`, `24-§31-10`
- Contract 9 (2): `9-§12-6`, `9-§17-5`
- Contract 10 (3): `10-§5-7`, `10-§11-4`, `10-§13-4`
- Contract 12 (4): `12-§4-3`, `12-§13-1`, `12-§13-2`, `12-§21-4`
- Contract 3 (1): `3-§15-6`
- Build Plan (5): `BP-§10.4-W1`, `BP-§10.4-W2`, `BP-§10.4-W3`, `BP-§6.5`, `BP-§11-4`

**Of which acceptance/experience rows carried into Section 15 (18):** `11-§5-2`, `11-§5-3`, `11-§5-4`, `11-§22-1`, `11-§22-2`, `11-§22-3`, `11-§22-4`, `11-§22-6`, `11-§22-7`, `11-§22-8`, `11-§22-9`, `11-§22-10`, `11-§22-11`, `11-§22-12`, `24-§31-10`, `9-§17-5`, `10-§13-4`, `12-§21-4`

### 8.2 Delegated Automation and Consequential Continuation

Sources: Contract 11 §10–§12, §16; Contract 24 §18 (Voice→Reminder→Domain Action); Contract 3 §13 (continuation); Build Plan §6.2, §10.4 work areas 4 and 9.

Mission design: A reminder may offer a bounded action; execution identifies the exact target, verifies state and permission, confirms unless a valid stored Owner delegation covers it, and runs through the authoritative feature service (`11-§10-*`). Standing rules are explicit Owner delegations that never exceed stored scope and are revalidated at execution (`11-§11-*`, `11-§16-*`; Contract 21 §12 via `D12`). Any transaction write uses the single governed path (`DTX`, PQ-2). A reminder request is not authorization to pay (DC-04).

**FCTM rows realized here (40 `IN SCOPE`):**

- Contract 11 (35): `11-§10-1`, `11-§10-2`, `11-§10-3`, `11-§10-4`, `11-§10-5`, `11-§10-6`, `11-§10-7`, `11-§10-8`, `11-§10-9`, `11-§10-10`, `11-§10-11`, `11-§11-1`, `11-§11-2`, `11-§11-3`, `11-§11-4`, `11-§11-5`, `11-§11-6`, `11-§11-7`, `11-§11-8`, `11-§11-9`, `11-§11-10`, `11-§11-11`, `11-§11-12`, `11-§11-13`, `11-§11-14`, `11-§11-15`, `11-§12-1`, `11-§12-2`, `11-§12-3`, `11-§16-1`, `11-§16-2`, `11-§16-3`, `11-§16-4`, `11-§16-5`, `11-§16-6`
- Contract 24 (1): `24-§18-2`
- Contract 3 (1): `3-§13-3`
- Build Plan (3): `BP-§10.4-W4`, `BP-§10.4-W9`, `BP-§6.2`

**Of which acceptance/experience rows carried into Section 15 (7):** `11-§10-2`, `11-§10-3`, `11-§10-4`, `11-§10-5`, `11-§12-1`, `11-§12-2`, `24-§18-2`

### 8.3 Scheduler and Background-Job Foundation

Sources: Contract 22 §18; Contract 24 §5 (background/scheduled intelligence).

Mission design: One scheduler foundation runs Daily Intelligence, reminders, safe retries and other already-authorized jobs. Jobs are idempotent, observable, narrowly retryable and authority-aware at execution; a background job never creates new human or business authority (`22-§18-*`). Business timezone controls execution (DC-03). No scheduler runtime exists in the repository (Δ-01); activation is not authorized.

**FCTM rows realized here (12 `IN SCOPE`):**

- Contract 22 (11): `22-§18-1`, `22-§18-2`, `22-§18-3`, `22-§18-4`, `22-§18-5`, `22-§18-6`, `22-§18-7`, `22-§18-8`, `22-§18-9`, `22-§18-10`, `22-§18-11`
- Contract 24 (1): `24-§5-4`

**Of which acceptance/experience rows carried into Section 15 (0):** none

### 8.4 Shared Notification Foundation (SB-P-1.12 FPDR-1)

Sources: Contract 22 §12 (`22-§12-1` to `22-§12-9`, identifiers preserved under SB-P-1.12 FPDR-1); Contract 11 §17.

Mission design: A distinct, reusable notification foundation within this mission: recipient identity and role, language, channel preference and availability, template and provider requirements, delivery and retry state, duplicate suppression, privacy, and a link to the originating business event; delivery is separate from business-event completion (`22-§12-*`, `11-§17-*`). Before SB-P-1.20 the available channel is native only (FDB-2). SB-P-1.20 reuses this foundation. `22-§12-8` is related capability for the FDB-1 overlay only (Section 10.1).

**FCTM rows realized here (17 `IN SCOPE`):**

- Contract 11 (8): `11-§17-1`, `11-§17-2`, `11-§17-3`, `11-§17-4`, `11-§17-5`, `11-§17-6`, `11-§17-7`, `11-§17-8`
- Contract 22 (9): `22-§12-1`, `22-§12-2`, `22-§12-3`, `22-§12-4`, `22-§12-5`, `22-§12-6`, `22-§12-7`, `22-§12-8`, `22-§12-9`

**Of which acceptance/experience rows carried into Section 15 (0):** none

### 8.5 Daily Intelligence Rhythm

Sources: Contract 4 (all sections); Contract 24 §16; Contract 3 §14; Contract 9 §12; Contract 17 §11; Build Plan §10.4 work area 5 and experience statement 2.

Mission design: Three scheduled experiences at 7:00 AM, 10:30 AM and 10:00 PM in business timezone, computed from existing shared foundations and never from separate truth (`4-§2-*` to `4-§6-*`). Facts, estimates, patterns and signals are distinguished; missing data is omitted or stated, never invented (`4-§10-*`, `4-§12-*`). Role-scoped: Owner full, Manager delegated only, Employee none by default (`4-§7-*`). Native delivery before SB-P-1.20 with disclosure (FDB-2).

**FCTM rows realized here (126 `IN SCOPE`):**

- Contract 4 (114): `4-§1-1`, `4-§1-2`, `4-§1-3`, `4-§2-1`, `4-§2-2`, `4-§2-3`, `4-§2-4`, `4-§2-5`, `4-§3-1`, `4-§3-2`, `4-§3-3`, `4-§3-4`, `4-§3-5`, `4-§3-6`, `4-§3-7`, `4-§3-8`, `4-§3-9`, `4-§3-10`, `4-§4-1`, `4-§4-2`, `4-§4-3`, `4-§4-4`, `4-§4-5`, `4-§4-6`, `4-§4-7`, `4-§4-8`, `4-§5-1`, `4-§5-2`, `4-§5-3`, `4-§5-4`, `4-§5-5`, `4-§5-6`, `4-§5-7`, `4-§5-8`, `4-§5-9`, `4-§5-10`, `4-§6-1`, `4-§6-2`, `4-§6-3`, `4-§6-4`, `4-§6-5`, `4-§6-6`, `4-§6-7`, `4-§6-8`, `4-§6-9`, `4-§6-10`, `4-§6-11`, `4-§6-12`, `4-§7-1`, `4-§7-2`, `4-§7-3`, `4-§7-4`, `4-§8-2`, `4-§8-3`, `4-§8-4`, `4-§9-1`, `4-§9-2`, `4-§9-3`, `4-§9-4`, `4-§9-5`, `4-§9-6`, `4-§9-7`, `4-§9-8`, `4-§10-1`, `4-§10-2`, `4-§10-3`, `4-§10-4`, `4-§10-5`, `4-§10-6`, `4-§10-7`, `4-§10-8`, `4-§11-1`, `4-§11-2`, `4-§11-3`, `4-§11-4`, `4-§11-5`, `4-§11-6`, `4-§11-7`, `4-§12-1`, `4-§12-2`, `4-§12-3`, `4-§12-4`, `4-§12-5`, `4-§13-1`, `4-§13-2`, `4-§13-3`, `4-§13-5`, `4-§13-6`, `4-§13-7`, `4-§13-8`, `4-§13-9`, `4-§14-1`, `4-§14-2`, `4-§15-1`, `4-§15-2`, `4-§15-3`, `4-§15-4`, `4-§15-5`, `4-§16-1`, `4-§16-2`, `4-§16-3`, `4-§16-4`, `4-§16-5`, `4-§16-7`, `4-§16-8`, `4-§16-9`, `4-§16-10`, `4-§16-11`, `4-§17-1`, `4-§17-2`, `4-§17-3`, `4-§17-4`, `4-§17-5`, `4-§17-6`
- Contract 24 (7): `24-§16-1`, `24-§16-2`, `24-§16-3`, `24-§16-4`, `24-§16-5`, `24-§16-6`, `24-§16-7`
- Contract 9 (1): `9-§12-3`
- Contract 3 (1): `3-§14-1`
- Contract 17 (1): `17-§11-3`
- Build Plan (2): `BP-§10.4-W5`, `BP-§10.4-E2`

**Of which acceptance/experience rows carried into Section 15 (15):** `4-§1-2`, `4-§10-6`, `4-§10-7`, `4-§10-8`, `4-§16-1`, `4-§16-2`, `4-§16-3`, `4-§16-4`, `4-§16-5`, `4-§16-7`, `4-§16-8`, `4-§16-9`, `4-§16-10`, `4-§16-11`, `BP-§10.4-E2`

### 8.6 Ask CFO — Read-Only Business Intelligence

Sources: Contract 2 (all sections); Contract 24 §12, §18, §27, §31 item 9; Contract 9 §12, §17 (Ask CFO slices); Contract 10 §5, §9, §23; Contract 12 §4, §11, §12, §21 (Basic Voice slices); Contract 3 §13; Contract 17 §11, §22; Build Plan §10.4 work areas 6–8, experience statements 1 and 3.

Mission design: A conversational, read-only thinking partner over authorized Business Memory (`2-§4-*`, `2-§7-*`, `24-§12-*`). Data questions use grounded calculation; advisory answers separate fact from interpretation and state uncertainty (`2-§5-*`, `2-§6-*`, `2-§24-*`). Owner-default; Manager only by explicit delegation, with granularity a security design question (DC-06); no other role (`2-§3-*`). Continuation moves to the reminder or governed feature service, never a write from Ask CFO (`2-§18-*`, `3-§13-3`). Credit and repayment answers are qualified and entry-level; authoritative balances are SB-P-1.16 (FDB-3). Rows are grouped below by Contract 2 section for navigation (SB-P-1.15-MC-08 §1).

**FCTM rows realized here (302 `IN SCOPE`):**

- Contract 2 §2 (9): `2-§2-1`, `2-§2-2`, `2-§2-3`, `2-§2-4`, `2-§2-5`, `2-§2-6`, `2-§2-7`, `2-§2-8`, `2-§2-9`
- Contract 2 §3 (18): `2-§3-1`, `2-§3-2`, `2-§3-3`, `2-§3-4`, `2-§3-5`, `2-§3-6`, `2-§3-7`, `2-§3-8`, `2-§3-9`, `2-§3-10`, `2-§3-11`, `2-§3-12`, `2-§3-13`, `2-§3-14`, `2-§3-15`, `2-§3-16`, `2-§3-17`, `2-§3-18`
- Contract 2 §4 (10): `2-§4-1`, `2-§4-2`, `2-§4-3`, `2-§4-4`, `2-§4-5`, `2-§4-6`, `2-§4-7`, `2-§4-8`, `2-§4-9`, `2-§4-10`
- Contract 2 §5 (18): `2-§5-1`, `2-§5-2`, `2-§5-3`, `2-§5-4`, `2-§5-5`, `2-§5-6`, `2-§5-7`, `2-§5-8`, `2-§5-9`, `2-§5-10`, `2-§5-11`, `2-§5-12`, `2-§5-13`, `2-§5-14`, `2-§5-15`, `2-§5-16`, `2-§5-17`, `2-§5-18`
- Contract 2 §6 (4): `2-§6-1`, `2-§6-2`, `2-§6-3`, `2-§6-4`
- Contract 2 §7 (12): `2-§7-1`, `2-§7-2`, `2-§7-3`, `2-§7-4`, `2-§7-5`, `2-§7-6`, `2-§7-7`, `2-§7-8`, `2-§7-9`, `2-§7-10`, `2-§7-11`, `2-§7-12`
- Contract 2 §8 (16): `2-§8-1`, `2-§8-2`, `2-§8-3`, `2-§8-4`, `2-§8-5`, `2-§8-6`, `2-§8-7`, `2-§8-8`, `2-§8-9`, `2-§8-10`, `2-§8-11`, `2-§8-12`, `2-§8-13`, `2-§8-14`, `2-§8-15`, `2-§8-16`
- Contract 2 §9 (8): `2-§9-1`, `2-§9-2`, `2-§9-3`, `2-§9-4`, `2-§9-5`, `2-§9-6`, `2-§9-7`, `2-§9-8`
- Contract 2 §10 (7): `2-§10-1`, `2-§10-2`, `2-§10-3`, `2-§10-4`, `2-§10-5`, `2-§10-6`, `2-§10-7`
- Contract 2 §11 (15): `2-§11-1`, `2-§11-2`, `2-§11-3`, `2-§11-4`, `2-§11-5`, `2-§11-6`, `2-§11-7`, `2-§11-8`, `2-§11-9`, `2-§11-10`, `2-§11-11`, `2-§11-12`, `2-§11-13`, `2-§11-14`, `2-§11-15`
- Contract 2 §12 (15): `2-§12-1`, `2-§12-2`, `2-§12-3`, `2-§12-4`, `2-§12-5`, `2-§12-6`, `2-§12-7`, `2-§12-8`, `2-§12-9`, `2-§12-10`, `2-§12-11`, `2-§12-12`, `2-§12-13`, `2-§12-14`, `2-§12-15`
- Contract 2 §13 (2): `2-§13-1`, `2-§13-6`
- Contract 2 §14 (9): `2-§14-1`, `2-§14-2`, `2-§14-3`, `2-§14-4`, `2-§14-5`, `2-§14-6`, `2-§14-7`, `2-§14-8`, `2-§14-9`
- Contract 2 §15 (7): `2-§15-1`, `2-§15-2`, `2-§15-3`, `2-§15-4`, `2-§15-5`, `2-§15-6`, `2-§15-7`
- Contract 2 §17 (8): `2-§17-1`, `2-§17-2`, `2-§17-3`, `2-§17-4`, `2-§17-5`, `2-§17-6`, `2-§17-7`, `2-§17-8`
- Contract 2 §18 (4): `2-§18-1`, `2-§18-2`, `2-§18-3`, `2-§18-4`
- Contract 2 §19 (9): `2-§19-1`, `2-§19-2`, `2-§19-3`, `2-§19-4`, `2-§19-5`, `2-§19-6`, `2-§19-7`, `2-§19-8`, `2-§19-9`
- Contract 2 §20 (6): `2-§20-1`, `2-§20-2`, `2-§20-3`, `2-§20-4`, `2-§20-5`, `2-§20-6`
- Contract 2 §21 (7): `2-§21-1`, `2-§21-2`, `2-§21-3`, `2-§21-4`, `2-§21-5`, `2-§21-6`, `2-§21-7`
- Contract 2 §22 (12): `2-§22-1`, `2-§22-2`, `2-§22-3`, `2-§22-4`, `2-§22-5`, `2-§22-6`, `2-§22-7`, `2-§22-8`, `2-§22-9`, `2-§22-10`, `2-§22-11`, `2-§22-12`
- Contract 2 §23 (8): `2-§23-1`, `2-§23-2`, `2-§23-3`, `2-§23-4`, `2-§23-5`, `2-§23-6`, `2-§23-7`, `2-§23-8`
- Contract 2 §24 (10): `2-§24-1`, `2-§24-2`, `2-§24-3`, `2-§24-4`, `2-§24-5`, `2-§24-6`, `2-§24-7`, `2-§24-8`, `2-§24-9`, `2-§24-10`
- Contract 2 §25 (26): `2-§25-1`, `2-§25-2`, `2-§25-3`, `2-§25-4`, `2-§25-5`, `2-§25-6`, `2-§25-7`, `2-§25-8`, `2-§25-9`, `2-§25-10`, `2-§25-11`, `2-§25-12`, `2-§25-13`, `2-§25-14`, `2-§25-15`, `2-§25-16`, `2-§25-17`, `2-§25-18`, `2-§25-22a`, `2-§25-24`, `2-§25-25`, `2-§25-26`, `2-§25-27`, `2-§25-28`, `2-§25-29`, `2-§25-30`
- Contract 2 §26 (11): `2-§26-1`, `2-§26-2`, `2-§26-3`, `2-§26-4`, `2-§26-5`, `2-§26-6`, `2-§26-7`, `2-§26-8`, `2-§26-9`, `2-§26-10`, `2-§26-11`
- Contract 2 §27 (6): `2-§27-1`, `2-§27-2`, `2-§27-3`, `2-§27-4`, `2-§27-5`, `2-§27-6`
- Contract 2 §29 (12): `2-§29-1`, `2-§29-2`, `2-§29-3`, `2-§29-4`, `2-§29-5`, `2-§29-6`, `2-§29-7`, `2-§29-8`, `2-§29-9`, `2-§29-10`, `2-§29-11`, `2-§29-12`
- Contract 24 (12): `24-§12-1`, `24-§12-2`, `24-§12-3`, `24-§12-4`, `24-§12-5`, `24-§12-6`, `24-§12-7`, `24-§12-8`, `24-§12-9`, `24-§18-1b`, `24-§27-3`, `24-§31-9`
- Contract 9 (2): `9-§12-2`, `9-§17-6`
- Contract 10 (4): `10-§5-5`, `10-§9-1`, `10-§9-2`, `10-§23-4`
- Contract 12 (5): `12-§4-2`, `12-§11-6`, `12-§12-1`, `12-§12-3`, `12-§21-3`
- Contract 3 (2): `3-§13-1`, `3-§13-2`
- Contract 17 (3): `17-§11-1`, `17-§11-2`, `17-§22-7`
- Build Plan (5): `BP-§10.4-W6`, `BP-§10.4-W7`, `BP-§10.4-W8`, `BP-§10.4-E1`, `BP-§10.4-E3`

**Of which acceptance/experience rows carried into Section 15 (56):** `2-§2-9`, `2-§4-1`, `2-§4-2`, `2-§4-3`, `2-§5-2`, `2-§5-3`, `2-§5-4`, `2-§5-5`, `2-§5-6`, `2-§5-9`, `2-§5-10`, `2-§5-11`, `2-§5-12`, `2-§5-13`, `2-§6-3`, `2-§9-3`, `2-§10-3`, `2-§10-4`, `2-§10-5`, `2-§10-6`, `2-§17-1`, `2-§22-1`, `2-§25-1`, `2-§25-2`, `2-§25-3`, `2-§25-4`, `2-§25-5`, `2-§25-6`, `2-§25-7`, `2-§25-8`, `2-§25-9`, `2-§25-10`, `2-§25-11`, `2-§25-12`, `2-§25-13`, `2-§25-14`, `2-§25-15`, `2-§25-16`, `2-§25-17`, `2-§25-18`, `2-§25-22a`, `2-§25-24`, `2-§25-25`, `2-§25-26`, `2-§25-27`, `2-§25-28`, `2-§25-29`, `2-§25-30`, `24-§18-1b`, `24-§31-9`, `9-§17-6`, `10-§23-4`, `12-§21-3`, `17-§22-7`, `BP-§10.4-E1`, `BP-§10.4-E3`

### 8.7 Cross-Cutting Assurance: Isolation, Privacy, Failure Containment, Performance and Platform Quality

Sources: Contract 22 §17, §19, §21–§23, §27–§29.

Mission design: No cross-business leakage; narrow failure with no false success; performance never weakens authorization, correctness, confirmation, privacy or audit; deterministic tests, runtime and independent verification before acceptance, and green CI is not acceptance; this mission states its reused foundations and must-not duplications (`22-§19-*`, `22-§21-*`, `22-§22-*`, `22-§23-*`, `22-§27-*`, `22-§28-*`, `22-§29-*`).

**FCTM rows realized here (52 `IN SCOPE`):**

- Contract 22 (52): `22-§17-1`, `22-§17-9`, `22-§19-8`, `22-§19-1`, `22-§19-2`, `22-§19-3`, `22-§19-4`, `22-§19-5`, `22-§19-6`, `22-§19-7`, `22-§21-1`, `22-§21-2`, `22-§21-3`, `22-§21-4`, `22-§21-5`, `22-§21-6`, `22-§21-7`, `22-§22-1`, `22-§22-2`, `22-§22-3`, `22-§22-4`, `22-§22-5`, `22-§22-6`, `22-§23-2`, `22-§23-3`, `22-§23-5`, `22-§27-1`, `22-§27-2`, `22-§27-3`, `22-§27-4`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§27-8`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§28-7`, `22-§28-8`, `22-§28-9`, `22-§28-10`, `22-§29-3`, `22-§29-4`, `22-§29-7`, `22-§29-8`, `22-§29-10`, `22-§29-12`, `22-§29-13`, `22-§29-14`

**Of which acceptance/experience rows carried into Section 15 (8):** `22-§29-3`, `22-§29-4`, `22-§29-7`, `22-§29-8`, `22-§29-10`, `22-§29-12`, `22-§29-13`, `22-§29-14`

### 8.8 Mission Outcome, Channel Independence and Delivery Accounting

Sources: Build Plan §8, §9 row 4, §10.4 (outcome, exit principle, Founder scenarios), §13.

Mission design: The mission outcome and exit principle, Smart Business working without WhatsApp, the assignment lock, the Experience Verification Matrix rule and the Founder Runtime Verification scenarios (`BP-§10.4-*`, `BP-§8`, `BP-§9-4`, `BP-§13`). Scenarios are accepted within the FDB limits of Section 15.4.

**FCTM rows realized here (10 `IN SCOPE`):**

- Build Plan (10): `BP-§9-4`, `BP-§10.4-O`, `BP-§10.4-A1`, `BP-§10.4-A2`, `BP-§10.4-B1`, `BP-§10.4-B2`, `BP-§10.4-B3`, `BP-§10.4-X`, `BP-§8`, `BP-§13`

**Of which acceptance/experience rows carried into Section 15 (7):** `BP-§10.4-O`, `BP-§10.4-A1`, `BP-§10.4-A2`, `BP-§10.4-B1`, `BP-§10.4-B2`, `BP-§10.4-B3`, `BP-§10.4-X`


## 9. UI / UX Expectations

By reference, not new design:

- Reminders are presented for human choice with acknowledgement, snooze and reschedule, and preserved history; exact buttons are a UX decision (`11-§6-*`; `10-§5-7`).
- Ambiguous timing, target or intent prompts the smallest useful clarification (`11-§5-*`, `11-§15-2`; Contract 9 §9 via `D13`).
- Daily Intelligence is concise, calm, factual, prioritized and easy to scan; where nothing material changed it says so simply (`4-§9-*`, `4-§4-*`).
- Ask CFO answers first, then evidence, interpretation, uncertainty and a suggested next check, without burying the answer (`2-§21-*`).
- **Native-only disclosure (FDB-2).** Before SB-P-1.20, reminder and Daily Intelligence surfaces must make plain where material that out-of-app messages do not yet arrive. No surface may imply device push, email, SMS, Resend or WhatsApp delivery. Onboarding disclosure is a downstream SB-P-1.19 consumer requirement (Contract 20), not built here (SB-P-1.15-MC-08 §3).
- **Qualified credit answers (FDB-3).** When Ask CFO explains credit or repayment entries, the answer states its coverage and that authoritative per-customer outstanding balances are not yet available (Section 10.1).
- **Correction notification promise (FDB-1).** The existing correction dialog text is not changed by this Blueprint. Truthful interim wording is an integration item whose ownership is held (Section 10.1, Section 13).

## 10. Business Rules

### 10.1 Founder decisions (canonical wording preserved)

The following is reproduced from `communication/missions/SB-P-1.15/founder/02-stage3-founder-product-decision-record.md` (SB-P-1.15-FPDR-01, blob `0e0928fe`) without change of meaning. Headings are rendered as bold lines; paragraph and list text is verbatim.

**2. FDB-1 — Correction Owner notification commitment**

**Founder decision:** **KEEP** the Owner-notification commitment for transaction corrections, with ownership/delivery responsibilities to be reconciled.

**Interpretation:** The user-visible correction-notification promise must not be silently withdrawn or declared satisfied merely because the corrector is the Owner. The historical SB-P-1.9 engineering requirement for Owner WhatsApp notification remains evidence of the original promised workflow, but is not proof of a live, approved delivery channel before SB-P-1.20.

**Required reconciliation before any Blueprint/implementation claim:** Mission Control must distinguish the domain event/Owner eligibility/notification-request seam (existing correction event and the SB-P-1.15 Shared Notification Foundation) from the WhatsApp channel adapter/delivery integration (SB-P-1.20). The historical SB-P-1.9 promise is retained as a **known user-facing obligation/risk** pending a governed ownership/cut-over plan; no retrospective repair or provider activation is automatically assigned to SB-P-1.15. Ensure product text never misrepresents actual delivery readiness: if the workflow is not live, truthful interim status/disclosure is required through a separately authorized implementation/copy change, not an unauthorized edit here.

**Verification boundary:** delivery initiation, recipients/role isolation, audit, retries/deduplication, failure handling, and actual channel delivery must be independently demonstrated before the promise can be treated as operational.

**Stage 3 trigger:** T4 product-affecting Delta Δ-04; product intent is now confirmed, implementation/mission repair ownership remains an engineering/governance follow-up, not a new Founder question by default.

**3. FDB-2 — Interim reminder and Daily Intelligence channels**

**Founder decision:** **ACCEPT NATIVE-ONLY INTERIM EXPERIENCE** for SB-P-1.15 through the interval before SB-P-1.20 WhatsApp adapter, with clear disclosure of its limits.

**Interpretation:** In-app Conversation Workspace and approved native/dashboard surfaces are the interim means to see reminders, due-time items and intelligence. No claim is made that an Owner outside Smart Business is proactively reached before WhatsApp delivery becomes implemented and verified. The approved product commitment to WhatsApp remains assigned to SB-P-1.20; this decision does not cancel it.

**Required experience:** make the in-app-only limitation plain in onboarding/feature descriptions where material; do not imply device push, email, SMS, Resend, or WhatsApp messages are sent before those channels are separately approved and implemented. Native reminder scheduling and intelligence remain in SB-P-1.15's defined documentary scope; upstream native Workspace/dashboard runtime is still an implementation dependency.

**Stage 3 trigger:** T6 material derived constraint DC-01, confirmed by the Founder as the intended interim experience.

**4. FDB-3 — Ask CFO receivables answer until SB-P-1.16**

**Founder decision:** **ALLOW A QUALIFIED, ENTRY-LEVEL ANSWER** to “Who owes me money?” from authorized credit/repayment Ledger facts before customer-credit maturity in SB-P-1.16.

**Interpretation:** SB-P-1.15 Ask CFO may retrieve and explain individually recorded credit/repayment entries and counterparty references where permissioned, explain data coverage and uncertainty, and plainly state that **authoritative per-customer outstanding balances are not yet available**. It must not fabricate, infer or confidently state a customer-credit balance or treat the entry listing as reconciled outstanding debt. The Owner-default, permission-scoped, read-only rule continues, including Manager delegated subsets; no write-capable Ask CFO authority arises.

**Locked upstream boundary remains unchanged:** SB-P-1.14 Founder FPDR-1 assigns authoritative owed-balance truth and the exact per-customer “What does Shameer still owe me?” answer to SB-P-1.16. This decision clarifies Build Plan Scenario B, not a T7 reassignment, waiver, or downgrading of the eventual mature customer-credit obligation. Scenario B acceptance in SB-P-1.15 must test truthful qualified answer + missing-data disclosure + authorization + **no write**. The later SB-P-1.16 acceptance must test authoritative balances separately.

**Stage 3 trigger:** T6 DC-02 clarified; no unresolved T2 contradiction remains when contextual, non-authoritative current response is distinguished from later exact balance truth.

#### FDB-1 post-FCTM Founder-decision overlay (SB-P-1.15-MC-08 §2)

The transaction-correction Owner-notification commitment is a **binding mission-scoped Founder decision** (SB-P-1.15-FPDR-01 §2). It is recorded here as a **post-FCTM Founder-decision overlay — an approved open integration obligation** — because no canonical FCTM row carries it. The canonical 803-row FCTM is not amended, and no new `IN SCOPE` row or owning mission is created.

| Overlay | Basis | Related FCTM capability | Status |
|---|---|---|---|
| `O-FDB-1` Owner notification of transaction corrections | SB-P-1.15-FPDR-01 §2; Delta Δ-04 (`06-stage2-delta-evidence.md`); SB-P-1.9 engineering contract (blob `0c08b414`) as historical evidence | `22-§12-8` (link to originating business event) as related Shared Notification Foundation capability **only**. `22-§12-8` is **not** a complete contract-row home for correction-specific notification delivery. | Commitment preserved; delivery **not operational** and not asserted; integration ownership held |

**FDB-1 traceability and ownership hold:**

| Part | Content | Ownership |
|---|---|---|
| (a) | Correction event and recipient eligibility | Existing correction event (`transaction_correction_events`, Δ-03); eligibility follows the SB-P-1.12 authority model (`D12`) |
| (b) | Reusable notification request and state foundation | SB-P-1.15 Shared Notification Foundation (`22-§12-1` to `22-§12-9`, Section 8.4) |
| (c) | Outbound WhatsApp adapter and delivery | SB-P-1.20 (Build Plan §9 row 9; SB-P-1.12 FPDR-1) |
| (d) | Correction-specific integration and truthful interim UI wording | **UNRESOLVED — reserved for separate Mission Control mission allocation** |

Any proposal to amend the FCTM or allocate additional scope returns to Mission Control for an explicit stage, row and path grant and Source 18 T3/T7 screening.

### 10.2 Standing rules by reference

The following `IN SCOPE` rule and principle rows (121 rows) are business rules of this mission. Each is realized in its Section 8 subsection.

- Contract 2 (45): `2-§2-1`, `2-§2-2`, `2-§2-3`, `2-§2-4`, `2-§2-5`, `2-§2-6`, `2-§2-7`, `2-§2-8`, `2-§3-10`, `2-§5-7`, `2-§7-1`, `2-§7-4`, `2-§7-12`, `2-§9-1`, `2-§10-1`, `2-§10-2`, `2-§11-15`, `2-§13-6`, `2-§14-8`, `2-§14-9`, `2-§15-1`, `2-§15-6`, `2-§15-7`, `2-§17-8`, `2-§19-1`, `2-§20-6`, `2-§23-1`, `2-§24-10`, `2-§26-1`, `2-§26-2`, `2-§26-3`, `2-§26-4`, `2-§26-5`, `2-§26-6`, `2-§26-7`, `2-§26-8`, `2-§26-9`, `2-§26-10`, `2-§27-1`, `2-§27-2`, `2-§27-3`, `2-§27-4`, `2-§27-5`, `2-§27-6`, `2-§29-12`
- Contract 4 (18): `4-§1-1`, `4-§2-5`, `4-§6-1`, `4-§6-2`, `4-§6-3`, `4-§6-4`, `4-§6-5`, `4-§6-6`, `4-§6-7`, `4-§6-8`, `4-§6-9`, `4-§6-10`, `4-§6-11`, `4-§6-12`, `4-§8-4`, `4-§12-5`, `4-§14-2`, `4-§15-5`
- Contract 11 (35): `11-§1-1`, `11-§2-9`, `11-§3-1`, `11-§3-2`, `11-§3-3`, `11-§3-4`, `11-§3-5`, `11-§3-6`, `11-§3-7`, `11-§3-8`, `11-§4-13`, `11-§6-7`, `11-§8-1`, `11-§8-2`, `11-§8-3`, `11-§8-4`, `11-§8-5`, `11-§8-6`, `11-§8-7`, `11-§8-8`, `11-§9-7`, `11-§11-2`, `11-§14-1`, `11-§14-3`, `11-§17-1`, `11-§19-2`, `11-§20-1`, `11-§20-2`, `11-§20-3`, `11-§20-4`, `11-§20-5`, `11-§20-6`, `11-§20-7`, `11-§20-8`, `11-§23-1`
- Contract 22 (8): `22-§11-8`, `22-§11-9`, `22-§12-9`, `22-§17-1`, `22-§19-8`, `22-§19-7`, `22-§21-1`, `22-§21-7`
- Contract 24 (4): `24-§5-4`, `24-§12-1`, `24-§12-9`, `24-§16-1`
- Contract 9 (3): `9-§12-2`, `9-§12-3`, `9-§12-6`
- Contract 3 (1): `3-§15-6`
- Contract 17 (1): `17-§11-1`
- Build Plan (6): `BP-§9-4`, `BP-§6.2`, `BP-§6.5`, `BP-§8`, `BP-§11-4`, `BP-§13`


### 10.3 Must-not rows

The following `IN SCOPE` must-not rows (111 rows) are checked as "must not appear" in this mission's deliverable. The Build Plan §16 rejections are in Section 11.3.

- Contract 2 (38): `2-§3-9`, `2-§3-11`, `2-§3-12`, `2-§3-13`, `2-§3-14`, `2-§3-15`, `2-§3-16`, `2-§3-17`, `2-§3-18`, `2-§5-18`, `2-§6-1`, `2-§7-3`, `2-§7-5`, `2-§7-6`, `2-§7-7`, `2-§7-8`, `2-§7-9`, `2-§7-10`, `2-§7-11`, `2-§8-11`, `2-§8-12`, `2-§8-13`, `2-§8-14`, `2-§8-15`, `2-§8-16`, `2-§9-2`, `2-§11-14`, `2-§12-15`, `2-§18-3`, `2-§19-9`, `2-§21-7`, `2-§22-8`, `2-§22-9`, `2-§22-10`, `2-§22-11`, `2-§22-12`, `2-§23-8`, `2-§26-11`
- Contract 4 (20): `4-§1-3`, `4-§2-4`, `4-§3-10`, `4-§4-8`, `4-§7-2`, `4-§7-3`, `4-§7-4`, `4-§9-7`, `4-§11-7`, `4-§12-1`, `4-§15-1`, `4-§15-2`, `4-§15-3`, `4-§15-4`, `4-§17-1`, `4-§17-2`, `4-§17-3`, `4-§17-4`, `4-§17-5`, `4-§17-6`
- Contract 11 (29): `11-§1-2`, `11-§7-2`, `11-§8-9`, `11-§9-1`, `11-§9-2`, `11-§9-3`, `11-§9-4`, `11-§9-5`, `11-§9-6`, `11-§11-15`, `11-§12-3`, `11-§13-3`, `11-§13-4`, `11-§15-2`, `11-§16-6`, `11-§17-8`, `11-§18-12`, `11-§19-1`, `11-§19-3`, `11-§21-1`, `11-§21-2`, `11-§21-3`, `11-§21-4`, `11-§21-5`, `11-§21-6`, `11-§23-2`, `11-§23-3`, `11-§23-4`, `11-§23-5`
- Contract 22 (19): `22-§17-9`, `22-§18-7`, `22-§21-2`, `22-§21-3`, `22-§21-4`, `22-§21-5`, `22-§21-6`, `22-§22-6`, `22-§27-8`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§28-7`, `22-§28-8`, `22-§28-9`, `22-§28-10`
- Contract 24 (2): `24-§12-8`, `24-§16-7`
- Contract 12 (1): `12-§12-3`
- Contract 3 (1): `3-§13-2`
- Contract 17 (1): `17-§11-2`


## 11. Out of Scope

This section accounts for every FCTM row that is not `IN SCOPE`: 25 `ASSIGNED TO LATER MISSION`, 40 `DELEGATED`, 23 `NOT APPLICABLE`, 20 `OUT OF BUILD SCOPE`, 1 `UNRESOLVED FOUNDER DECISION` — 109 rows. Dispositions, owning missions, build commitments and citations are copied from the canonical FCTM without change. Each row is **still committed — not in this mission**, with its owning mission or preserved classification. No `BUILD NOW` row becomes `BUILD LATER`.

### 11.1 Assigned to later missions — still committed, not in this mission (25 rows)

Each row keeps its approved build commitment and commercial classification. Assignment is mission scheduling, not `BUILD LATER` (Build Plan §9 vocabulary). Distribution: SB-P-1.16 1, SB-P-1.17 2, SB-P-1.19 8, SB-P-1.19/SB-P-1.15 (inherited verbatim) 1, SB-P-1.20 13. `20-§23-10` keeps its inherited split assignment verbatim with **HELD — ALLOCATION UNRESOLVED (U-3)**; it is neither moved nor suppressed (SB-P-1.15-MC-08 §1).

#### `SB-P-1.16` (1 row)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 22-§17-3 | C22@61e1bb91 | §17 b2: payment/bank providers | ASSIGNED TO LATER MISSION | SB-P-1.16 | I-14 (22-§17-3) | — |

#### `SB-P-1.17` (2 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 22-§17-2 | C22@61e1bb91 | §17 b1: POS | ASSIGNED TO LATER MISSION | SB-P-1.17 | I-14 (22-§17-2) | — |
| 24-§18-3 | C24@0c1dcbb2 | §18 example Stock→Reorder→Supplier→Reminder: follow-up uses the shared Reminder Engine (reuse seam) | ASSIGNED TO LATER MISSION | SB-P-1.17 | I-13 (24-§18-3 ASSIGNED TO LATER MISSION → SB-P-1.17); A-BP106 | — |

#### `SB-P-1.19` (8 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 2-§16 | C2@53635557 | §16 Smart Voice Assistant Plus + Ask CFO (whole section) | ASSIGNED TO LATER MISSION | SB-P-1.19 | L-VP19; A-BP108 (Build Plan §9 row 8, 12A Voice Plus); I-13 (12-§12-2) | — |
| 2-§25-19 | C2@53635557 | §25 Voice — b19: Voice Plus multi-turn conversation | ASSIGNED TO LATER MISSION | SB-P-1.19 | L-VP19; A-BP108 | — |
| 2-§25-20 | C2@53635557 | §25 Voice — b20: short voice blocks | ASSIGNED TO LATER MISSION | SB-P-1.19 | L-VP19; A-BP108 | — |
| 2-§25-21 | C2@53635557 | §25 Voice — b21: formatted summary | ASSIGNED TO LATER MISSION | SB-P-1.19 | L-VP19; A-BP108 | — |
| 2-§25-22b | C2@53635557 | §25 Voice — b22: reminder continuation (Voice Plus slice) | ASSIGNED TO LATER MISSION | SB-P-1.19 | L-VP19; A-BP108 | — |
| 22-§17-6 | C22@61e1bb91 | §17 b5: billing providers | ASSIGNED TO LATER MISSION | SB-P-1.19 | I-14 (22-§17-6) | — |
| 12-§12-2 | C12@6d48feff | §12 Voice Plus deepens Ask CFO conversation | ASSIGNED TO LATER MISSION | SB-P-1.19 | L-VP19; I-13 (12-§12-2 ASSIGNED TO LATER MISSION → SB-P-1.19); A-BP108 | — |
| 20-§12-6 | C20@56ed4d11 | §12 first-24-hour journey: scheduled Daily Intelligence when required data/features are available (journey owned by SB-P-1.19) | ASSIGNED TO LATER MISSION | SB-P-1.19 | A-BP108 (Build Plan §9 row 8: Contract 20 onboarding/first value); consumes 4-§2-* | — |

#### `SB-P-1.19/SB-P-1.15 (inherited verbatim)` (1 row)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 20-§23-10 | C20@56ed4d11 | §23 acceptance 10: current Daily Intelligence times used, not historical 06:00/09:15 | ASSIGNED TO LATER MISSION — HELD: ALLOCATION UNRESOLVED (U-3) | SB-P-1.19/SB-P-1.15 (inherited verbatim) | I-12 (20-§23-10 SB-P-1.19/SB-P-1.15, inherited verbatim); not moved, not suppressed (MC-05 §2) | U-3 |

#### `SB-P-1.20` (13 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 2-§13-2 | C2@53635557 | §13 p2: WhatsApp is an approved conversation channel | ASSIGNED TO LATER MISSION | SB-P-1.20 | NI-ACFO; L-X20; A-BP109 | — |
| 2-§13-3 | C2@53635557 | §13 b1: text | ASSIGNED TO LATER MISSION | SB-P-1.20 | NI-ACFO; L-X20; A-BP109 | — |
| 2-§13-4 | C2@53635557 | §13 b2: voice | ASSIGNED TO LATER MISSION | SB-P-1.20 | NI-ACFO; L-X20; A-BP109 | — |
| 2-§13-5 | C2@53635557 | §13 b3: approved image/document context where relevant | ASSIGNED TO LATER MISSION | SB-P-1.20 | NI-ACFO; L-X20; A-BP109 | — |
| 2-§13-7 | C2@53635557 | §13 p5: WhatsApp must remain an adapter to the shared Ask CFO intelligence, not a separate CFO implemen… | ASSIGNED TO LATER MISSION | SB-P-1.20 | NI-ACFO; L-X20; A-BP109 | — |
| 2-§25-23 | C2@53635557 | §25 Channel continuity — b23: WhatsApp and Conversation Workspace use the same Business Memory and permission behavior | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109 | — |
| 4-§8-1 | C4@ce940d25 | §8 b1: WhatsApp | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109 | FDB-2 |
| 4-§8-5 | C4@ce940d25 | §8 p3: WhatsApp failure must not stop Daily Intelligence computation or make the information unavailab… | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109 | — |
| 4-§13-4 | C4@ce940d25 | §13 b4: WhatsApp outage | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109 | — |
| 4-§16-6 | C4@ce940d25 | §16 b6: WhatsApp delivery failure with web-app continuity | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109 | — |
| 11-§14-2 | C11@e802745a | §14 p2: A reminder shown in both WhatsApp and the Conversation Workspace remains one reminder, not two… | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109 | — |
| 11-§22-5 | C11@e802745a | §22 n5: Same reminder visible across channels without duplication | ASSIGNED TO LATER MISSION | SB-P-1.20 | L-X20; A-BP109 | — |
| 22-§17-4 | C22@61e1bb91 | §17 b3: WhatsApp | ASSIGNED TO LATER MISSION | SB-P-1.20 | I-14 (22-§17-4) | — |

### 11.2 Delegated — owned elsewhere, consumed here (40 rows)

SB-P-1.15 consumes the locked specification of each row and never treats it as demonstrated. Distribution: SB-P-1.12 20, SB-P-1.13 11, SB-P-1.14 8, SB-P-1.20 1.

#### `SB-P-1.12` (20 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 22-§5 | C22@61e1bb91 | §5 Identity Foundation (whole section) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 | — |
| 22-§6 | C22@61e1bb91 | §6 Permission / Business Isolation Foundation (whole section) | DELEGATED | SB-P-1.12 | L-DEL12; I-12; touch: background jobs and AI tools obey the one permission model (realized by 22-§18-10, 2-§3-*) | — |
| 22-§13 | C22@61e1bb91 | §13 Confirmation / Clarification Foundation (whole section) | DELEGATED | SB-P-1.12 | L-DEL12; I-12 (22-§13-1 to -5 IN SCOPE SB-P-1.12); realized for reminders by 11-§10-*, 11-§16-* | — |
| 22-§14 | C22@61e1bb91 | §14 Audit / Human Context Foundation (whole section) | DELEGATED | SB-P-1.12 | L-DEL12; I-12; realized for automation history by 11-§11-*, 11-§19-4 | — |
| 22-§15 | C22@61e1bb91 | §15 Idempotency / Duplicate Protection (whole section) | DELEGATED | SB-P-1.12 | L-DEL12; I-12; reminders, automation triggers and notifications realized by 11-§7-3, 11-§16-3, 22-§12-6, 22-§18-8 | — |
| 22-§20 | C22@61e1bb91 | §20 Data / Schema Stability Principle (whole section) | DELEGATED | SB-P-1.12 | L-DEL12; I-12; any reminder/notification/automation schema evolves only by governed migration (MIG hold) | — |
| 22-§23-1 | C22@61e1bb91 | §23 b1: Merchant data belongs to merchant | DELEGATED | SB-P-1.12 | L-DEL12; I-14 (22-§23-1) | — |
| 22-§23-4 | C22@61e1bb91 | §23 b4: Support access is purpose-limited | DELEGATED | SB-P-1.12 | L-DEL12; I-14 (22-§23-4) | — |
| 22-§23-6 | C22@61e1bb91 | §23 b6: Individual merchant data must not be sold for unrelated monetization | DELEGATED | SB-P-1.12 | L-DEL12; I-14 (22-§23-6) | — |
| 22-§23-7 | C22@61e1bb91 | §23 b7: Aggregate product/operational insight must be privacy-respecting/governed | DELEGATED | SB-P-1.12 | L-DEL12; aggregate platform insight is not built here | — |
| 22-§29-6 | C22@61e1bb91 | §29 n6: Customer/supplier identity is not duplicated solely by channel/feature | DELEGATED | SB-P-1.12 | I-14 (22-§29-6) | — |
| 22-§29-11 | C22@61e1bb91 | §29 n11: Subscription changes do not dynamically destroy core schema/history | DELEGATED | SB-P-1.12 | I-14 (22-§29-11) | — |
| 22-§33 | C22@61e1bb91 | §33 Personal Identity Lifecycle and Governed Deletion (whole section) | DELEGATED | SB-P-1.12 | L-DEL12; I-12; I-14; touch: former-Owner notification ineligibility (SB-P-1.12 Blueprint FA-6) realized by 22-§12-1 | — |
| 21-§8 | C21@f4a05d5c | §8 one permission model across channels; natural-language prompt cannot widen access (incl. Manager asking Ask CFO without delegation) | DELEGATED | SB-P-1.12 | L-DEL21; I-12; realized by 2-§3-*, 2-§25-5 | — |
| 21-§9 | C21@f4a05d5c | §9 Ask CFO / Owner intelligence boundary (rule owned by SB-P-1.12; feature obeys it) | DELEGATED | SB-P-1.12 | L-DEL21; I-12 (21-§9 IN SCOPE SB-P-1.12); EIS-KER-07; realized by 2-§3-*; DC-06 | — |
| 21-§12 | C21@f4a05d5c | §12 Delegated Automation Authority (stored delegation; execution-time checks; trigger creates no permission) | DELEGATED | SB-P-1.12 | L-DEL21; I-12; realized by 11-§11-*, 11-§16-*, 22-§18-7 | — |
| 21-§24-3 | C21@f4a05d5c | §24 acceptance 3: Manager sees only delegated capabilities | DELEGATED | SB-P-1.12 | L-DEL21; I-12; realized by 2-§25-5, 4-§16-7; DC-06 | — |
| 21-§24-6 | C21@f4a05d5c | §24 acceptance 6: Employee cannot gain Ask CFO via natural-language prompt | DELEGATED | SB-P-1.12 | L-DEL21; I-12; realized by 2-§25-2 | — |
| 21-§24-8 | C21@f4a05d5c | §24 acceptance 8: permission revoked after preview blocks execution at runtime | DELEGATED | SB-P-1.12 | L-DEL21; I-12; realized by 11-§22-9 | — |
| 21-§24-11 | C21@f4a05d5c | §24 acceptance 11: standing automation cannot exceed Owner-delegated scope | DELEGATED | SB-P-1.12 | L-DEL21; I-12; realized by 11-§22-8 | — |

#### `SB-P-1.13` (11 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 22-§7 | C22@61e1bb91 | §7 Conversation / Intent-Action Foundation (whole section) | DELEGATED | SB-P-1.13 | L-DEL13; I-13 | — |
| 22-§8 | C22@61e1bb91 | §8 Human Language Foundation (whole section) | DELEGATED | SB-P-1.13 | L-DEL13; I-13; touch: consumed by 2-§20-*, 4-§14-*, 11-§15-*, 22-§12-2 | — |
| 22-§17-5 | C22@61e1bb91 | §17 b4: OpenAI/model services | DELEGATED | SB-P-1.13 | I-14 (22-§17-5) | — |
| 22-§24 | C22@61e1bb91 | §24 AI Authority Foundation (whole section) | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (22-§24-1 to -3 IN SCOPE SB-P-1.13); touch: realized for Ask CFO and automation by 2-§8-*, 11-§3-* | — |
| 22-§25 | C22@61e1bb91 | §25 AI Orchestration / OpenAI Intelligence Foundation (whole section) | DELEGATED | SB-P-1.13 | L-DEL13; I-13; Ask CFO reasoning and Daily Intelligence explanation consume it (DAI) | — |
| 22-§29-1 | C22@61e1bb91 | §29 n1: WhatsApp and Conversation Workspace use one Business Memory/action truth | DELEGATED | SB-P-1.13 | I-13; I-14 (22-§29-1) | — |
| 22-§29-2 | C22@61e1bb91 | §29 n2: WhatsApp and Conversation Workspace share one permission-aware AI orchestration path rather tha… | DELEGATED | SB-P-1.13 | I-13; I-14 (22-§29-2) | — |
| 24-§13-2 | C24@0c1dcbb2 | §13 AI brain does not become a hidden scheduler | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (IN SCOPE SB-P-1.13); re-checked by 11-§21-1 | — |
| 9-§9-5 | C9@649c55f3 | §9 clarify unclear reminder time/date (language capability) | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (IN SCOPE SB-P-1.13); consumed by 11-§5-6, 11-§15-2 | — |
| 10-§9-3 | C10@5c145ed7 | §9 Ask CFO gains no record-write authority because displayed in the app (kernel read/write tool separation) | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (IN SCOPE SB-P-1.13); re-checked by 2-§25-24 | — |
| 12-§13-3 | C12@6d48feff | §13 voice must not create a separate reminder engine | DELEGATED | SB-P-1.13 | L-DEL13; I-13 (IN SCOPE SB-P-1.13); re-checked by 11-§21-1 | — |

#### `SB-P-1.14` (8 rows)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 22-§4 | C22@61e1bb91 | §4 Business Memory Foundation (whole section) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (22-§4-1 to -4 IN SCOPE SB-P-1.14); touch: reminder and Daily Intelligence history are Business Memory facts realized by 11-§4-* | — |
| 22-§9 | C22@61e1bb91 | §9 Universal Document Intelligence Foundation (whole section) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 | — |
| 22-§10 | C22@61e1bb91 | §10 Document / Receipt Memory Foundation (whole section) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 | — |
| 22-§17-7 | C22@61e1bb91 | §17 b6: storage/document services | DELEGATED | SB-P-1.14 | I-14 (22-§17-7) | — |
| 22-§29-5 | C22@61e1bb91 | §29 n5: Multiple document types reuse one UDI pipeline with domain adapters | DELEGATED | SB-P-1.14 | I-14 (22-§29-5) | — |
| 3-§14-2 | C3@d8c26c07 | §14 Ledger is the business-memory source; Daily Intelligence is a scheduled clarity layer over it | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (IN SCOPE SB-P-1.14); consumed by 4-§6-* | — |
| 3-§17-7 | C3@d8c26c07 | §17 handle: failed downstream notification (Ledger slice; delivery is 22-§12-*) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (IN SCOPE SB-P-1.14); delivery state realized by 22-§12-5, 22-§12-9 | — |
| 3-§19-11 | C3@d8c26c07 | §19 acceptance 11: Owner-only financial intelligence boundary (Ledger slice) | DELEGATED | SB-P-1.14 | L-DEL14; I-14 (IN SCOPE SB-P-1.14); Ask CFO slice realized by 2-§25-* | — |

#### `SB-P-1.20` (1 row)

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 22-§26 | C22@61e1bb91 | §26 Dedicated Channel Adapter Contracts (whole section) | DELEGATED | SB-P-1.20 | Names Contract 23 (SB-P-1.20); notification reuse by the WhatsApp adapter required by FPDR-1 | — |

### 11.3 Out of build scope — must not appear (20 rows)

Build Plan §16 rejections, preserved as `REJECT` and checked as "must not appear" in this mission's deliverable.

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| BP-§16-1 | BP@9dfdd924 | §16 rejection 1: Ask CFO as write-capable authority | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-2 | BP@9dfdd924 | §16 rejection 2: AI accusation/judgment of employees or customers | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-3 | BP@9dfdd924 | §16 rejection 3: continuous staff GPS surveillance by default | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-4 | BP@9dfdd924 | §16 rejection 4: automated wage punishment | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-5 | BP@9dfdd924 | §16 rejection 5: blind supplier procurement without valid Owner delegation | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-6 | BP@9dfdd924 | §16 rejection 6: hard credit blocking by default | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-7 | BP@9dfdd924 | §16 rejection 7: custom client-specific POS modification inside core | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-8 | BP@9dfdd924 | §16 rejection 8: marketplace behavior inside Smart Order & Delivery | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-9 | BP@9dfdd924 | §16 rejection 9: customer silence automatically invalidating proven delivery | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-10 | BP@9dfdd924 | §16 rejection 10: duplicate channel-specific Business Memory | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-11 | BP@9dfdd924 | §16 rejection 11: duplicate channel-specific permission models | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-12 | BP@9dfdd924 | §16 rejection 12: separate AI brains per feature/channel | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-13 | BP@9dfdd924 | §16 rejection 13: model conversation history as permanent Business Memory | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-14 | BP@9dfdd924 | §16 rejection 14: uncontrolled binary-media concentration in Supabase | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-15 | BP@9dfdd924 | §16 rejection 15: provider URLs as permission authority/business identity | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-16 | BP@9dfdd924 | §16 rejection 16: destructive subscription-driven schema creation/deletion | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-17 | BP@9dfdd924 | §16 rejection 17: broad routine Super Admin access to merchant private data | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-18 | BP@9dfdd924 | §16 rejection 18: revival of /survey or obsolete domains/routes | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-19 | BP@9dfdd924 | §16 rejection 19: old Daily Intelligence timing conflicting with 7:00 / 10:30 / 22:00 | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-20 | BP@9dfdd924 | §16 rejection 20: independent Catalog product expansion | OUT OF BUILD SCOPE | SB-P-1.15 | L-NEG; Build Plan §16 "must not appear" | — |

### 11.4 Not applicable — not an obligation of this mission (23 rows)

Narrative, provenance, completion-gate, dependency-list or untouched content, each with the FCTM reason.

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| 2-§1 | C2@53635557 | §1 Founder Problem Statement (whole section) | NOT APPLICABLE | SB-P-1.15 | L-NARR; question examples realized by 2-§5-*, BP-§10.4-B1 | — |
| 2-§28 | C2@53635557 | §28 Provenance (whole section) | NOT APPLICABLE | SB-P-1.15 | L-PROV | — |
| 4-§18 | C4@ce940d25 | §18 Dependencies (whole section) | NOT APPLICABLE | SB-P-1.15 | L-DEP; dependencies carried in the Dependency column (D12, D13, D14, DSCH, DNTF) | — |
| 4-§19 | C4@ce940d25 | §19 Completion Gate (whole section) | NOT APPLICABLE | SB-P-1.15 | L-GATE; gate evaluated at acceptance against 4-§2 to 4-§16 rows | — |
| 11-§2-1 | C11@e802745a | §2 b1: supplier follow-up | NOT APPLICABLE | SB-P-1.15 | L-NARR | — |
| 11-§2-2 | C11@e802745a | §2 b2: customer credit collection | NOT APPLICABLE | SB-P-1.15 | L-NARR | — |
| 11-§2-3 | C11@e802745a | §2 b3: licences and renewals | NOT APPLICABLE | SB-P-1.15 | L-NARR | — |
| 11-§2-4 | C11@e802745a | §2 b4: stock review | NOT APPLICABLE | SB-P-1.15 | L-NARR | — |
| 11-§2-5 | C11@e802745a | §2 b5: employee matters | NOT APPLICABLE | SB-P-1.15 | L-NARR | — |
| 11-§2-6 | C11@e802745a | §2 b6: delivery follow-up | NOT APPLICABLE | SB-P-1.15 | L-NARR | — |
| 11-§2-7 | C11@e802745a | §2 b7: business/personal commitments | NOT APPLICABLE | SB-P-1.15 | L-NARR | — |
| 11-§2-8 | C11@e802745a | §2 b8: Ask CFO discussions to revisit later | NOT APPLICABLE | SB-P-1.15 | L-NARR | — |
| 11-§24 | C11@e802745a | §24 Provenance and Hydration Coverage (whole section) | NOT APPLICABLE | SB-P-1.15 | L-PROV | — |
| 11-§25 | C11@e802745a | §25 Completion Gate (whole section) | NOT APPLICABLE | SB-P-1.15 | L-GATE; gate evaluated at acceptance against 11-§4 to 11-§22 rows | — |
| 22-§1 | C22@61e1bb91 | §1 Feature Identity (whole section) | NOT APPLICABLE | SB-P-1.15 | L-NARR | — |
| 22-§2 | C22@61e1bb91 | §2 Founder Problem Statement (whole section) | NOT APPLICABLE | SB-P-1.15 | L-NARR | — |
| 22-§3 | C22@61e1bb91 | §3 Lighthouse Principles (whole section) | NOT APPLICABLE | SB-P-1.15 | L-NARR | — |
| 22-§16 | C22@61e1bb91 | §16 Location Foundation (whole section) | NOT APPLICABLE | SB-P-1.15 | Location Foundation not touched (SB-P-1.12 FPDR-2: SB-P-1.18) | — |
| 22-§17-8 | C22@61e1bb91 | §17 b7: future external systems | NOT APPLICABLE | SB-P-1.15 | No new external system adapter is approved for this mission (U-1) | — |
| 22-§29-9 | C22@61e1bb91 | §29 n9: Attendance/delivery location uses purpose-limited shared primitive | NOT APPLICABLE | SB-P-1.15 | Location primitive not touched | — |
| 22-§30 | C22@61e1bb91 | §30 Historical Corrections / Superseded Behavior (whole section) | NOT APPLICABLE | SB-P-1.15 | L-HIST; superseded duplicate reminders are checked by 22-§28-4, 11-§21-1 | — |
| 22-§31 | C22@61e1bb91 | §31 Provenance and Hydration Coverage (whole section) | NOT APPLICABLE | SB-P-1.15 | L-PROV | — |
| 22-§32 | C22@61e1bb91 | §32 Completion Gate (whole section) | NOT APPLICABLE | SB-P-1.15 | L-GATE | — |

### 11.5 Unresolved Founder decisions — not on this mission's critical path (1 row)

Build Plan §15 item 6 (U-5). This mission sets no retention or deletion rule.

| FCTM row | Source @ blob | Exact source pointer | Disposition | Owning mission | Citation | Founder decision |
|---|---|---|---|---|---|---|
| BP-§15-6 | BP@9dfdd924 | §15 item 6: long-term retention/deletion duration after cancellation/non-payment | UNRESOLVED FOUNDER DECISION | Founder | Not on this mission's critical path (GPCV §8, §10; U-5) | U-5 |


## 12. Dependencies

### 12.1 Upstream specification dependencies

SB-P-1.12, SB-P-1.13 and SB-P-1.14 provide locked specifications only. Their Implementation Authorizations are `WITHHELD`. **No upstream kernel, Business Memory read model, scheduler, notification delivery, Ask CFO or AI capability is runtime-available.**

### 12.2 Dependency codes on `IN SCOPE` rows

Counts are taken from the canonical FCTM Dependency column. A row may carry several codes.

| Code | Dependency | `IN SCOPE` rows | State |
|---|---|---|---|
| `D12` | SB-P-1.12 authority kernel | 548 | Specification locked; implementation WITHHELD |
| `D13` | SB-P-1.13 conversation/AI kernel, Human Language Layer, Basic Voice | 534 | Specification locked; implementation WITHHELD |
| `D14` | SB-P-1.14 Business Memory (four-state Ledger, documents, UDI status) | 298 | Specification locked; implementation WITHHELD |
| `DSCH` | Scheduler runtime and business timezone source | 268 | UNVERIFIED — ACCESS REQUIRED; activation NOT AUTHORIZED |
| `DAI` | AI provider behind the SB-P-1.13 gateway | 200 | UNVERIFIED — ACCESS REQUIRED; activation NOT AUTHORIZED |
| `DTX` | Single governed transactions-family write path (PQ-2) | 33 | Undecided cut-over; migration NOT AUTHORIZED |
| `D17` | SB-P-1.17 stock, supplier, reorder, POS | 26 | Not started |
| `D18` | SB-P-1.18 orders/delivery, Staff/HR, Compliance | 20 | Not started |
| `DNTF` | Out-of-app delivery channel (none approved before SB-P-1.20; FDB-2) | 17 | Not approved; not inferred |
| `D16` | SB-P-1.16 customer-credit maturity and payment evidence | 15 | Not started |
| `D19` | SB-P-1.19 onboarding, lifecycle, Voice Plus | 2 | Not started |


### 12.3 Policy and retention dependency

Build Plan §15 item 6 (retention after cancellation or non-payment) is unresolved Founder Product Truth (`BP-§15-6`, U-5). This mission sets no retention or deletion rule. It is not on this mission's critical path; an obligation that comes to require it is escalated.

### 12.4 Execution gates

Not row dependencies, and not authorized by this Blueprint:

- Implementation Authorization (separate Source 18 gate);
- migration execution (`docs/migration/README.md` default-deny; new reminder, standing-rule, notification and timezone schema is planned only);
- scheduler runtime and provider activation (`UNVERIFIED — ACCESS REQUIRED`);
- AI provider configuration evidence;
- CI evidence (no check runs exist; absence is not a pass);
- named test and runtime-verification environment;
- mandatory specialist reviews (Section 13).

### 12.5 Downstream

SB-P-1.16 (credit follow-up, authoritative balances), SB-P-1.17 (supplier/reorder follow-up, stock data), SB-P-1.18 (compliance, HR, order/delivery reminders), SB-P-1.19 (onboarding disclosure, Voice Plus, support follow-up) and SB-P-1.20 (WhatsApp delivery) consume this mission's foundations (Build Plan §11; Contract 11 §8; Contract 22 §11).

## 13. Risks & Mitigations

| Risk | Source | Mitigation |
|---|---|---|
| A shipped UI promise (correction notification) is not delivered | Δ-04; FDB-1 | `O-FDB-1` overlay and ownership hold (Section 10.1); no delivery claim until independently demonstrated (Section 15.4) |
| Owners outside the app miss due reminders and briefings before SB-P-1.20 | DC-01; FDB-2 | Native-only experience with merchant-visible disclosure (Section 9) |
| Ask CFO overstates receivables before SB-P-1.16 | DC-02; FDB-3; SB-P-1.14 FPDR-1 | Qualified entry-level answers with coverage disclosure; no fabricated balance (Section 15.4) |
| Manager delegation modelled too coarsely or too broadly | DC-06 | Treated as a security/authority design question; not assumed binary; mandatory security review |
| A trigger, schedule or AI output acts as authority | Contract 11 §3; Contract 21 §12; Contract 24 §16 | Execution-time revalidation; standing rules within stored scope (Section 8.2) |
| A second transaction write path appears through continuation | DTX/PQ-2 | Continuations use the single governed path only (`DTX` rows) |
| Duplicate reminders, jobs or notifications | Contract 4 §13; Contract 11 §7, §22; Contract 22 §15 | Idempotency rows in Sections 8.1, 8.3, 8.4 |
| Correlated assumptions by the same Definition Actor across missions | SB-P-1.15-MC-03 | Mission Control independent checks at Stages 5 and 8; parallel non-author specialist if the same actor authors Stages 6, 7 and 9 |

Mandatory specialist reviews before Implementation Authorization (Source 18 §4.8): security, RLS and permissions (including DC-06 and former-Owner notification ineligibility); concurrency and idempotency (scheduler, recurrence, triggers, notifications); financial integrity (DTX continuation, FDB-3 explanations); AI behaviour and orchestration; migration and data transition; scheduler runtime and provider readiness. An outbound-channel provider review is required only if a channel is later approved.

## 14. Success Criteria

- Every `IN SCOPE` row in Section 8 is demonstrated with evidence, or reported with its exact blocking dependency (Source 18 §3.2 item 11).
- Founder Scenarios A and B pass Founder runtime verification within the FDB limits of Section 15.4.
- No Section 10.3 must-not row or Section 11.3 rejection appears.
- The Reminder, Scheduler and Notification foundations are reused by at least Ask CFO continuation and Daily Intelligence action continuation (`22-§29-4`).
- The FDB-1 promise is either demonstrated operational or carries truthful interim status under the ownership Mission Control assigns.

## 15. Acceptance Criteria

### 15.1 Founder Runtime Verification scenarios (Build Plan §10.4, by reference — not new scenarios)

- `BP-§10.4-A1` — §10.4 Founder Scenario A part 1: "Remind me Friday to pay this supplier" creates the correct reminder (BP@9dfdd924)
- `BP-§10.4-A2` — §10.4 Founder Scenario A part 2: at due time the consequential payment still needs confirmation unless explicit bounded Owner delegation exists (BP@9dfdd924)
- `BP-§10.4-B1` — §10.4 Founder Scenario B part 1: Owner asks "Who owes me money?" and gets contextual authorized information (BP@9dfdd924)
- `BP-§10.4-B2` — §10.4 Founder Scenario B part 2: Manager without that delegated intelligence gets only the permitted subset (BP@9dfdd924)
- `BP-§10.4-B3` — §10.4 Founder Scenario B part 3: evidence shows no write occurred from Ask CFO (BP@9dfdd924)


These are Founder-reserved checks (Source 18 §4.2). Their wording is the Build Plan's; the FCTM splits them into verifiable parts without changing them.

### 15.2 Experience anchors (Build Plan §10.4) and contract experience rows

The five Build Plan §10.4 anchors (`BP-§10.4-O`, `-E1`, `-E2`, `-E3`, `-X`) and the `IN SCOPE` experience rows of the contracts:

- `2-§2-9` — §2 p2–p5: stated goal (merchant understanding, not AI display) (C2@53635557)
- `2-§4-1` — §4 p1: Ask CFO should feel conversational (C2@53635557)
- `2-§4-2` — §4 p2: The merchant asks a normal question instead of building a report or choosing an accounting filt… (C2@53635557)
- `2-§22-1` — §22 p1: Ask CFO is a high-value interaction and should feel responsive (C2@53635557)
- `4-§1-2` — §1 p2: It turns authorized Business Memory into concise, timely business awareness so the Owner does n… (C4@ce940d25)
- `BP-§10.4-O` — §10.4 product outcome: reduce Owner mental load while preserving human authority (BP@9dfdd924)
- `BP-§10.4-E1` — §10.4 experience: Ask CFO explains and clarifies; it does not execute writes (BP@9dfdd924)
- `BP-§10.4-E2` — §10.4 experience: Daily Intelligence prioritizes useful exceptions over information overload (BP@9dfdd924)
- `BP-§10.4-E3` — §10.4 experience: Manager/Employee access stays permission-scoped when asked conversationally (BP@9dfdd924)
- `BP-§10.4-X` — §10.4 exit principle (remembers, attends, helps think; never owns the business) (BP@9dfdd924)


### 15.3 Contract acceptance and scenario rows in scope

- Contract 2 (44): `2-§4-3`, `2-§5-2`, `2-§5-3`, `2-§5-4`, `2-§5-5`, `2-§5-6`, `2-§5-9`, `2-§5-10`, `2-§5-11`, `2-§5-12`, `2-§5-13`, `2-§6-3`, `2-§9-3`, `2-§10-3`, `2-§10-4`, `2-§10-5`, `2-§10-6`, `2-§17-1`, `2-§25-1`, `2-§25-2`, `2-§25-3`, `2-§25-4`, `2-§25-5`, `2-§25-6`, `2-§25-7`, `2-§25-8`, `2-§25-9`, `2-§25-10`, `2-§25-11`, `2-§25-12`, `2-§25-13`, `2-§25-14`, `2-§25-15`, `2-§25-16`, `2-§25-17`, `2-§25-18`, `2-§25-22a`, `2-§25-24`, `2-§25-25`, `2-§25-26`, `2-§25-27`, `2-§25-28`, `2-§25-29`, `2-§25-30`
- Contract 4 (13): `4-§10-6`, `4-§10-7`, `4-§10-8`, `4-§16-1`, `4-§16-2`, `4-§16-3`, `4-§16-4`, `4-§16-5`, `4-§16-7`, `4-§16-8`, `4-§16-9`, `4-§16-10`, `4-§16-11`
- Contract 11 (20): `11-§5-2`, `11-§5-3`, `11-§5-4`, `11-§10-2`, `11-§10-3`, `11-§10-4`, `11-§10-5`, `11-§12-1`, `11-§12-2`, `11-§22-1`, `11-§22-2`, `11-§22-3`, `11-§22-4`, `11-§22-6`, `11-§22-7`, `11-§22-8`, `11-§22-9`, `11-§22-10`, `11-§22-11`, `11-§22-12`
- Contract 22 (8): `22-§29-3`, `22-§29-4`, `22-§29-7`, `22-§29-8`, `22-§29-10`, `22-§29-12`, `22-§29-13`, `22-§29-14`
- Contract 24 (4): `24-§18-1b`, `24-§18-2`, `24-§31-9`, `24-§31-10`
- Contract 9 (2): `9-§17-5`, `9-§17-6`
- Contract 10 (2): `10-§13-4`, `10-§23-4`
- Contract 12 (2): `12-§21-3`, `12-§21-4`
- Contract 17 (1): `17-§22-7`


Acceptance items not in scope remain in Section 11 with their owning missions.

### 15.4 Founder-decision acceptance limits (SB-P-1.15-FPDR-01)

- **FDB-3 — Scenario B.** In SB-P-1.15, Scenario B (`BP-§10.4-B1` to `-B3`) is accepted on a truthful qualified answer, plus missing-data disclosure, plus authorization including the Manager subset, plus **no write**. Authoritative per-customer balances are tested separately in SB-P-1.16 (SB-P-1.14 FPDR-1). Rows: `2-§5-3`, `2-§5-13`, `2-§11-3`, `2-§12-4`, `2-§25-7`, `BP-§10.4-B1`.
- **FDB-2 — native-only interim.** Reminder and Daily Intelligence acceptance is on native surfaces with the disclosure of Section 9. No out-of-app delivery is claimed. WhatsApp delivery acceptance remains with SB-P-1.20. Rows: `4-§8-1`, `4-§8-2`, `4-§8-3`, `4-§13-3`, `11-§14-3`, `11-§17-4`, `11-§18-5`, `11-§18-11`, `22-§12-3`, `22-§12-4`, `10-§5-7`, `17-§11-3`, `BP-§10.4-A1`, `BP-§10.4-A2`, `BP-§8`.
- **FDB-1 — correction notification (`O-FDB-1`).** The promise is not treated as operational until delivery initiation, recipients and role isolation, audit, retries and deduplication, failure handling and actual channel delivery are independently demonstrated (SB-P-1.15-FPDR-01 §2). Related row: `22-§12-8` (capability only).

### 15.5 Experience Verification Matrix seed (Build Plan §13)

| UX anchor / human outcome | Applicable actor/role | Runtime status | Evidence | Dependency / note |
|---|---|---|---|---|
| Scenario A — reminder continuation (`BP-§10.4-A1`, `-A2`) | Owner | Not yet run | — | `D12`, `D13`, `DSCH`, `DTX`; FDB-2 |
| Scenario B — Ask CFO read-only boundary (`BP-§10.4-B1` to `-B3`) | Owner; Manager | Not yet run | — | `D12`, `D13`, `D14`, `DAI`; FDB-3; DC-06 |
| Ask CFO explains and does not write (`BP-§10.4-E1`) | Owner | Not yet run | — | `D12`, `D13` |
| Daily Intelligence prioritizes exceptions (`BP-§10.4-E2`) | Owner; Manager | Not yet run | — | `D12`–`D14`, `DSCH` |
| Permission-scoped conversational access (`BP-§10.4-E3`) | Manager; Employee | Not yet run | — | `D12`, `D13`; DC-06 |

## 16. Future Evolution

- **SB-P-1.16:** authoritative customer-credit balances, ageing and reconciliation; credit follow-up uses the shared Reminder Engine.
- **SB-P-1.17 / SB-P-1.18:** supplier, reorder, stock, compliance, HR and order/delivery reminders reuse the same engine, scheduler and notifications.
- **SB-P-1.19:** Voice Plus Ask CFO depth; onboarding disclosure of native-only delivery; support follow-up.
- **SB-P-1.20:** WhatsApp delivery through the same Notification Foundation and intelligence; FDB-2's interim limit ends once that delivery is implemented and verified.

## 17. Product Philosophy Summary

Remember what the Owner may forget; bring the right things forward calmly; explain the business honestly; never take a decision that belongs to the Owner (Build Plan §10.4 exit principle; Contract 2 Final Product Principle).

## 18. Blueprint Change Log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-10-09 | Claude Code (Definition Actor, SB-P-1.15-MC-08) | Initial Stage 4 draft: Metadata, Mission Snapshot, Sections 1–19 assembled by reference to the canonical 803-row FCTM and SB-P-1.15-FPDR-01, with the FDB-1 post-FCTM overlay |

## 19. Governance History

| Event | Record | Canonical |
|---|---|---|
| Stage 1 activation (MC-01) | `mission-control/01` | PR #855, `cc7ea06d` |
| Stage 1 discovery disposition (MC-02) | `mission-control/02-stage1-discovery-disposition-publication-authority.md` | PR #856, `3e0e144d` |
| Stage 1 Intake Pack; acceptance and Definition Actor appointment (MC-03) | `mission-control/02`–`04`, README, logs, `claude-code/01` | PR #857, `f858dd8d` |
| Stage 2 authorization (MC-04) | `mission-control/05` | PR #858, `3b3789b8` |
| Stage 2 publication disposition (MC-05) | `mission-control/06` | PR #859, `eacc4610` |
| Stage 2 Mission Truth Pack; content review and Stage 3 gate (MC-06) | `claude-code/02`–`07`, `founder/01`, `mission-control/07` | PR #860, `9180c7ba` |
| Stage 3 Founder decisions SB-P-1.15-FPDR-01 | `founder/02` | PR #861, `8fe64b43` |
| Stage 3 closure; Stage 4 discovery authorization (MC-07) | `mission-control/08` | PR #862, `24df2f9e` |
| Stage 4 publication authority (MC-08) | `mission-control/09` | PR #863, `36ded7f8` |
| Stage 4 Blueprint Sections 1–19 | this file | DRAFT — pending Mission Control Stage 5 review |

### FCTM Row-ID to Blueprint Section and Source Traceability

Complete accounting of all 803 canonical FCTM rows (blob `65eeaf8d31b81595b971c22895615a096555f84f`), in FCTM order. Each line gives the disposition and owning mission exactly as in the FCTM, the source and exact pointer as in the FCTM, the Blueprint location and the FCTM Founder-decision cell. `IN SCOPE` rows map to one Section 8 subsection, plus Section 10.2 for rule and principle rows, Section 10.3 for must-not rows, Section 15 for acceptance and experience rows and Section 12 for rows with a dependency. Other rows map to one Section 11 subsection.

Counts: 803 rows — 694 `IN SCOPE`, 25 `ASSIGNED TO LATER MISSION`, 40 `DELEGATED`, 23 `NOT APPLICABLE`, 20 `OUT OF BUILD SCOPE`, 1 `UNRESOLVED FOUNDER DECISION`, 0 `ESCALATED`, 0 `ALREADY DEMONSTRATED`.

| FCTM row | Disposition | Owning mission | Source @ blob | Exact source pointer | Blueprint location | Founder decision |
|---|---|---|---|---|---|---|
| 2-§1 | NOT APPLICABLE | SB-P-1.15 | C2@53635557 | §1 Founder Problem Statement (whole section) | §11.4 | — |
| 2-§2-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §2 b1: AI Assistant, Not AI Judge | §8.6, §10.2 | — |
| 2-§2-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §2 b2: Truth should create clarity, not fear | §8.6, §10.2 | — |
| 2-§2-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §2 b3: Human decision ownership remains final | §8.6, §10.2 | — |
| 2-§2-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §2 b4: Explain in language the merchant can understand | §8.6, §10.2 | — |
| 2-§2-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §2 b5: Do not fabricate certainty | §8.6, §10.2 | — |
| 2-§2-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §2 b6: Do not shame the Owner | §8.6, §10.2 | — |
| 2-§2-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §2 b7: Do not accuse employees, suppliers, or customers | §8.6, §10.2 | — |
| 2-§2-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §2 b8: When showing a problem, help the Owner understand a useful next step | §8.6, §10.2 | — |
| 2-§2-9 | IN SCOPE | SB-P-1.15 | C2@53635557 | §2 p2–p5: stated goal (merchant understanding, not AI display) | §8.6, §15 | — |
| 2-§3-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Owner — p1: Default Ask CFO user | §8.6, §12 | — |
| 2-§3-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Owner — b1: ask natural business questions | §8.6, §12 | — |
| 2-§3-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Owner — b2: receive business analytics | §8.6, §12 | — |
| 2-§3-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Owner — b3: compare time periods | §8.6, §12 | — |
| 2-§3-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Owner — b4: ask about cash, expenses, credits, stock, supplier history, operations, and other authorized bu… | §8.6, §12 | — |
| 2-§3-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Owner — b5: continue a business discussion | §8.6, §12 | — |
| 2-§3-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Owner — b6: receive suggestions | §8.6, §12 | — |
| 2-§3-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Owner — b7: request or accept reminders linked to an Ask CFO conversation | §8.6, §12 | — |
| 2-§3-9 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Manager — p3: Ask CFO access is not automatic merely because a person has a Manager role | §8.6, §10.3, §12 | — |
| 2-§3-10 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Manager — p4: Any delegated intelligence access must follow explicit Owner permission and current Product Tru… | §8.6, §10.2, §12 | — |
| 2-§3-11 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Employee — b8: no Ask CFO access | §8.6, §10.3, §12 | — |
| 2-§3-12 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Employee — b9: no profit intelligence | §8.6, §10.3, §12 | — |
| 2-§3-13 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Employee — b10: no Owner analytics | §8.6, §10.3, §12 | — |
| 2-§3-14 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Employee — b11: no unrestricted business-level financial reasoning | §8.6, §10.3, §12 | — |
| 2-§3-15 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Employee — p6: Employee operational access must not become a path to Ask CFO data | §8.6, §10.3, §12 | — |
| 2-§3-16 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Supplier — p7: No Ask CFO access | §8.6, §10.3, §12 | — |
| 2-§3-17 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Customer — p8: No Ask CFO access | §8.6, §10.3, §12 | — |
| 2-§3-18 | IN SCOPE | SB-P-1.15 | C2@53635557 | §3 Delivery Staff — p9: No Ask CFO access | §8.6, §10.3, §12 | — |
| 2-§4-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §4 p1: Ask CFO should feel conversational | §8.6, §15, §12 | — |
| 2-§4-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §4 p2: The merchant asks a normal question instead of building a report or choosing an accounting filt… | §8.6, §15, §12 | — |
| 2-§4-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §4 p4: How is my business this week? | §8.6, §15, §12 | — |
| 2-§4-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §4 n1: identify what data is relevant | §8.6, §12 | — |
| 2-§4-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §4 n2: use only authorized merchant data | §8.6, §12 | — |
| 2-§4-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §4 n3: calculate or retrieve facts correctly | §8.6, §12 | — |
| 2-§4-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §4 n4: distinguish facts from interpretation | §8.6, §12 | — |
| 2-§4-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §4 n5: explain the answer simply | §8.6, §12 | — |
| 2-§4-9 | IN SCOPE | SB-P-1.15 | C2@53635557 | §4 n6: identify useful observations | §8.6, §12 | — |
| 2-§4-10 | IN SCOPE | SB-P-1.15 | C2@53635557 | §4 n7: suggest next checks or actions without taking control | §8.6, §12 | — |
| 2-§5-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.1 Data Questions — p2: Questions that can be answered directly from reliable business data | §8.6, §12 | — |
| 2-§5-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.1 Data Questions — b1: What were my expenses this week? | §8.6, §15, §12 | — |
| 2-§5-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.1 Data Questions — b2: Who owes more than ₹5,000? | §8.6, §15, §12 | FDB-3 |
| 2-§5-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.1 Data Questions — b3: Which expense category increased the most? | §8.6, §15, §12 | — |
| 2-§5-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.1 Data Questions — b4: Which products expire this week? | §8.6, §15, §12 | — |
| 2-§5-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.1 Data Questions — b5: How much did bakery sales change compared with last week? | §8.6, §15, §12 | — |
| 2-§5-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.1 Data Questions — p4: Where possible, these should use deterministic/database-grounded calculations rather than unnec… | §8.6, §10.2, §12 | — |
| 2-§5-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.2 Advisory Questions — p5: Questions requiring interpretation | §8.6, §12 | — |
| 2-§5-9 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.2 Advisory Questions — b6: Why might profit be lower this month? | §8.6, §15, §12 | — |
| 2-§5-10 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.2 Advisory Questions — b7: What should I check first? | §8.6, §15, §12 | — |
| 2-§5-11 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.2 Advisory Questions — b8: Is there a business risk in this pattern? | §8.6, §15, §12 | — |
| 2-§5-12 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.2 Advisory Questions — b9: Can I safely consider a large stock purchase? | §8.6, §15, §12 | — |
| 2-§5-13 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.2 Advisory Questions — b10: How can I reduce outstanding credit? | §8.6, §15, §12 | FDB-3 |
| 2-§5-14 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.2 Advisory Questions — b11: authorized merchant data | §8.6, §12 | — |
| 2-§5-15 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.2 Advisory Questions — b12: approved business rules | §8.6, §12 | — |
| 2-§5-16 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.2 Advisory Questions — b13: AI reasoning | §8.6, §12 | — |
| 2-§5-17 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.2 Advisory Questions — b14: clearly stated assumptions and uncertainty | §8.6, §12 | — |
| 2-§5-18 | IN SCOPE | SB-P-1.15 | C2@53635557 | §5 5.2 Advisory Questions — p8: AI advice is not a business command | §8.6, §10.3, §12 | — |
| 2-§6-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §6 p1: Ask CFO must never invent business facts to make an answer sound complete | §8.6, §10.3, §12 | — |
| 2-§6-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §6 p2: If required data is unavailable, it should say so clearly | §8.6, §12 | — |
| 2-§6-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §6 p4: I can compare your recorded sales and expenses, but I do not have enough walk-in/customer-count… | §8.6, §15, §12 | — |
| 2-§6-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §6 p5: The system may then explain what information would improve the answer | §8.6, §12 | — |
| 2-§7-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §7 p1: Ask CFO is a read-only intelligence capability by default | §8.6, §10.2, §12 | — |
| 2-§7-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §7 p2: It may retrieve and analyse authorized data | §8.6, §12 | — |
| 2-§7-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §7 p3: It must not gain destructive database authority through natural-language prompts | §8.6, §10.3, §12 | — |
| 2-§7-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §7 p4: Current canonical implementation rules prohibit destructive/write SQL classes for Ask CFO | §8.6, §10.2, §12 | — |
| 2-§7-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §7 b1: delete business records | §8.6, §10.3, §12 | — |
| 2-§7-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §7 b2: alter schemas | §8.6, §10.3, §12 | — |
| 2-§7-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §7 b3: rewrite transactions | §8.6, §10.3, §12 | — |
| 2-§7-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §7 b4: change payroll | §8.6, §10.3, §12 | — |
| 2-§7-9 | IN SCOPE | SB-P-1.15 | C2@53635557 | §7 b5: manipulate attendance | §8.6, §10.3, §12 | — |
| 2-§7-10 | IN SCOPE | SB-P-1.15 | C2@53635557 | §7 b6: modify stock merely because a question was asked | §8.6, §10.3, §12 | — |
| 2-§7-11 | IN SCOPE | SB-P-1.15 | C2@53635557 | §7 b7: create financial commitments without an approved action workflow | §8.6, §10.3, §12 | — |
| 2-§7-12 | IN SCOPE | SB-P-1.15 | C2@53635557 | §7 p6: If the Owner wants an operational action, that action should move through the relevant authoriz… | §8.6, §10.2, §12 | — |
| 2-§8-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b1: explain | §8.6, §12 | — |
| 2-§8-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b2: calculate | §8.6, §12 | — |
| 2-§8-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b3: compare | §8.6, §12 | — |
| 2-§8-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b4: summarize | §8.6, §12 | — |
| 2-§8-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b5: identify patterns | §8.6, §12 | — |
| 2-§8-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b6: identify risks | §8.6, §12 | — |
| 2-§8-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b7: suggest options | §8.6, §12 | — |
| 2-§8-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b8: recommend what to review | §8.6, §12 | — |
| 2-§8-9 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b9: surface opportunities | §8.6, §12 | — |
| 2-§8-10 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b10: offer reminder continuation | §8.6, §12 | — |
| 2-§8-11 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b11: make final business decisions | §8.6, §10.3, §12 | — |
| 2-§8-12 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b12: tell the Owner that an employee is guilty of theft/fraud | §8.6, §10.3, §12 | — |
| 2-§8-13 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b13: automatically punish staff | §8.6, §10.3, §12 | — |
| 2-§8-14 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b14: block an Owner's business decision merely because AI predicts risk | §8.6, §10.3, §12 | — |
| 2-§8-15 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b15: claim certainty where evidence is incomplete | §8.6, §10.3, §12 | — |
| 2-§8-16 | IN SCOPE | SB-P-1.15 | C2@53635557 | §8 b16: impersonate a chartered accountant, legal advisor, or statutory authority when not authorized | §8.6, §10.3, §12 | — |
| 2-§9-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §9 p1: A major Founder philosophy from planning-origin discussions is that Ask CFO should tell the tru… | §8.6, §10.2, §12 | — |
| 2-§9-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §9 p4: Your business is performing badly. You are losing control | §8.6, §10.3, §12 | — |
| 2-§9-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §9 p6: Expenses increased faster than sales this week. The biggest change is in supplier purchases. It… | §8.6, §15, §12 | — |
| 2-§9-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §9 b1: state the fact | §8.6, §12 | — |
| 2-§9-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §9 b2: explain why it matters | §8.6, §12 | — |
| 2-§9-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §9 b3: avoid fear | §8.6, §12 | — |
| 2-§9-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §9 b4: avoid blame | §8.6, §12 | — |
| 2-§9-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §9 b5: provide a useful next step | §8.6, §12 | — |
| 2-§10-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §10 p1: Ask CFO should respect the Smart Business Human Context principle | §8.6, §10.2, §12 | — |
| 2-§10-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §10 p2: Raw data may be incomplete without Owner context | §8.6, §10.2, §12 | — |
| 2-§10-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §10 b1: an employee is late because the Owner sent them to market | §8.6, §15, §12 | — |
| 2-§10-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §10 b2: low stock is intentional | §8.6, §15, §12 | — |
| 2-§10-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §10 b3: a large expense is a planned festival purchase | §8.6, §15, §12 | — |
| 2-§10-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §10 b4: an unusual discount was authorized for a customer relationship | §8.6, §15, §12 | — |
| 2-§10-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §10 p4: Ask CFO may identify the observable pattern, but should allow Owner context to change interpret… | §8.6, §12 | — |
| 2-§11-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §11 p1: Ask CFO should be capable of reasoning over approved data from relevant Smart Business features… | §8.6, §12 | — |
| 2-§11-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §11 b1: Ledger transactions | §8.6, §12 | — |
| 2-§11-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §11 b2: customer credit | §8.6, §12 | FDB-3 |
| 2-§11-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §11 b3: receipt/document memory | §8.6, §12 | — |
| 2-§11-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §11 b4: stock | §8.6, §12 | — |
| 2-§11-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §11 b5: suppliers | §8.6, §12 | — |
| 2-§11-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §11 b6: POS-connected activity | §8.6, §12 | — |
| 2-§11-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §11 b7: reminders | §8.6, §12 | — |
| 2-§11-9 | IN SCOPE | SB-P-1.15 | C2@53635557 | §11 b8: orders/deliveries | §8.6, §12 | — |
| 2-§11-10 | IN SCOPE | SB-P-1.15 | C2@53635557 | §11 b9: attendance/HR information where Owner is authorized | §8.6, §12 | — |
| 2-§11-11 | IN SCOPE | SB-P-1.15 | C2@53635557 | §11 b10: Daily Intelligence history | §8.6, §12 | — |
| 2-§11-12 | IN SCOPE | SB-P-1.15 | C2@53635557 | §11 b11: payment verification | §8.6, §12 | — |
| 2-§11-13 | IN SCOPE | SB-P-1.15 | C2@53635557 | §11 b12: other current approved business-memory sources | §8.6, §12 | — |
| 2-§11-14 | IN SCOPE | SB-P-1.15 | C2@53635557 | §11 p3: Ask CFO must not create separate duplicate data truth | §8.6, §10.3, §12 | — |
| 2-§11-15 | IN SCOPE | SB-P-1.15 | C2@53635557 | §11 p4: It reads from the shared Business Memory and approved systems | §8.6, §10.2, §12 | — |
| 2-§12-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §12 p1: Ask CFO exists in both subscriptions | §8.6, §12 | — |
| 2-§12-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §12 p2: The answer depth naturally depends on what approved data/capabilities exist for the merchant | §8.6, §12 | — |
| 2-§12-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §12 Ledger — b1: income/expenses | §8.6, §12 | — |
| 2-§12-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §12 Ledger — b2: customer credit | §8.6, §12 | FDB-3 |
| 2-§12-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §12 Ledger — b3: documents | §8.6, §12 | — |
| 2-§12-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §12 Ledger — b4: reminders | §8.6, §12 | — |
| 2-§12-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §12 Ledger — b5: payment evidence | §8.6, §12 | — |
| 2-§12-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §12 Ledger — b6: other enabled Ledger add-ons | §8.6, §12 | — |
| 2-§12-9 | IN SCOPE | SB-P-1.15 | C2@53635557 | §12 Manager — b7: stock intelligence | §8.6, §12 | — |
| 2-§12-10 | IN SCOPE | SB-P-1.15 | C2@53635557 | §12 Manager — b8: supplier/reorder data | §8.6, §12 | — |
| 2-§12-11 | IN SCOPE | SB-P-1.15 | C2@53635557 | §12 Manager — b9: POS activity | §8.6, §12 | — |
| 2-§12-12 | IN SCOPE | SB-P-1.15 | C2@53635557 | §12 Manager — b10: operational dashboard data | §8.6, §12 | — |
| 2-§12-13 | IN SCOPE | SB-P-1.15 | C2@53635557 | §12 Manager — b11: deeper business analytics | §8.6, §12 | — |
| 2-§12-14 | IN SCOPE | SB-P-1.15 | C2@53635557 | §12 Manager — b12: counter activity observations | §8.6, §12 | — |
| 2-§12-15 | IN SCOPE | SB-P-1.15 | C2@53635557 | §12 Manager — p5: The system should not fabricate Manager-only insight for a Ledger merchant who does not have th… | §8.6, §10.3, §12 | — |
| 2-§13-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §13 p1: Ask CFO is not limited to a dashboard widget | §8.6, §12 | — |
| 2-§13-2 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C2@53635557 | §13 p2: WhatsApp is an approved conversation channel | §11.1, §12 | — |
| 2-§13-3 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C2@53635557 | §13 b1: text | §11.1, §12 | — |
| 2-§13-4 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C2@53635557 | §13 b2: voice | §11.1, §12 | — |
| 2-§13-5 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C2@53635557 | §13 b3: approved image/document context where relevant | §11.1, §12 | — |
| 2-§13-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §13 p4: The same permission and business-memory rules must apply regardless of channel | §8.6, §10.2, §12 | — |
| 2-§13-7 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C2@53635557 | §13 p5: WhatsApp must remain an adapter to the shared Ask CFO intelligence, not a separate CFO implemen… | §11.1, §12 | — |
| 2-§14-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §14 p1: The dashboard/app Conversation Workspace should expose the same Ask CFO intelligence | §8.6, §12 | — |
| 2-§14-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §14 b1: identity | §8.6, §12 | — |
| 2-§14-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §14 b2: permissions | §8.6, §12 | — |
| 2-§14-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §14 b3: conversation context | §8.6, §12 | — |
| 2-§14-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §14 b4: Business Memory | §8.6, §12 | — |
| 2-§14-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §14 b5: AI rules | §8.6, §12 | — |
| 2-§14-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §14 b6: reminder continuation | §8.6, §12 | — |
| 2-§14-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §14 p3: This supports business continuity if WhatsApp is temporarily unavailable | §8.6, §10.2, §12 | — |
| 2-§14-9 | IN SCOPE | SB-P-1.15 | C2@53635557 | §14 p4: Ask CFO should therefore be architected as channel-independent intelligence | §8.6, §10.2, §12 | — |
| 2-§15-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §15 p1: Basic voice assistance is included in both Ledger and Manager according to current Product Truth | §8.6, §10.2, §12 | — |
| 2-§15-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §15 b1: a short voice answer | §8.6, §12 | — |
| 2-§15-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §15 b2: a more detailed text analysis | §8.6, §12 | — |
| 2-§15-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §15 b3: basic voice response approximately 15 seconds maximum where practical | §8.6, §12 | — |
| 2-§15-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §15 b4: detailed explanation in text | §8.6, §12 | — |
| 2-§15-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §15 p5: The exact timing is a UX target rather than a hard safety guarantee | §8.6, §10.2, §12 | — |
| 2-§15-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §15 p6: The product principle is that basic voice access should not be a luxury | §8.6, §10.2, §12 | — |
| 2-§16 | ASSIGNED TO LATER MISSION | SB-P-1.19 | C2@53635557 | §16 Smart Voice Assistant Plus + Ask CFO (whole section) | §11.1, §12 | — |
| 2-§17-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §17 p2–p10: worked multi-turn example (fruit/juice counter) | §8.6, §15, §12 | — |
| 2-§17-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §17 p11: Ask CFO should understand the deferral rather than continuing to talk | §8.6, §12 | — |
| 2-§17-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §17 b1: topic | §8.6, §12 | — |
| 2-§17-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §17 b2: observations | §8.6, §12 | — |
| 2-§17-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §17 b3: suggestion | §8.6, §12 | — |
| 2-§17-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §17 b4: potential benefit | §8.6, §12 | — |
| 2-§17-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §17 b5: optional reminder to resume later | §8.6, §12 | — |
| 2-§17-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §17 p13: This demonstrates that Ask CFO is connected to Smart Reminder without becoming a duplicate remi… | §8.6, §10.2, §12 | — |
| 2-§18-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §18 p1–p2: Ask CFO offers to remind the Owner to continue later | §8.6, §12 | — |
| 2-§18-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §18 p3: If the Owner says yes, use the shared Smart Reminder Engine | §8.6, §12 | — |
| 2-§18-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §18 p4: Do not create a separate CFO-only reminder system | §8.6, §10.3, §12 | — |
| 2-§18-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §18 p5: The reminder should preserve enough conversation context to resume usefully | §8.6, §12 | — |
| 2-§19-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §19 p1: Ask CFO and Daily Intelligence are related but not identical | §8.6, §10.2, §12 | — |
| 2-§19-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §19 Daily Intelligence — p2: Proactively gives clarity at approved scheduled times | §8.6, §12 | — |
| 2-§19-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §19 Ask CFO — p3: Responds to Owner questions and conversations | §8.6, §12 | — |
| 2-§19-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §19 Ask CFO — b1: Business Memory | §8.6, §12 | — |
| 2-§19-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §19 Ask CFO — b2: permission rules | §8.6, §12 | — |
| 2-§19-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §19 Ask CFO — b3: calculation logic where appropriate | §8.6, §12 | — |
| 2-§19-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §19 Ask CFO — b4: language behavior | §8.6, §12 | — |
| 2-§19-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §19 Ask CFO — b5: human-authority principles | §8.6, §12 | — |
| 2-§19-9 | IN SCOPE | SB-P-1.15 | C2@53635557 | §19 Ask CFO — p5: They should not become duplicate intelligence stacks | §8.6, §10.3, §12 | — |
| 2-§20-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §20 b1: English | §8.6, §12 | — |
| 2-§20-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §20 b2: Malayalam | §8.6, §12 | — |
| 2-§20-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §20 b3: Manglish | §8.6, §12 | — |
| 2-§20-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §20 p2: Malayalam/Manglish responses should preserve local business meaning | §8.6, §12 | — |
| 2-§20-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §20 p3 + b4–b11: natural Kerala business-term mixing (illustrative term list) | §8.6, §12 | — |
| 2-§20-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §20 p4: Understanding matters more than literal translation | §8.6, §10.2, §12 | — |
| 2-§21-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §21 p1: Ask CFO should adapt response structure to the question | §8.6, §12 | — |
| 2-§21-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §21 Direct answer — p3: Answer the question first | §8.6, §12 | — |
| 2-§21-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §21 Evidence / observations — p4: Show the important data points | §8.6, §12 | — |
| 2-§21-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §21 Interpretation — p5: Explain what the pattern may mean | §8.6, §12 | — |
| 2-§21-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §21 Uncertainty — p6: State what cannot be concluded | §8.6, §12 | — |
| 2-§21-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §21 Suggested next check — p7: Give one or a few practical next steps | §8.6, §12 | — |
| 2-§21-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §21 Suggested next check — p8: Do not bury the answer in a long report | §8.6, §10.3, §12 | — |
| 2-§22-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §22 p1: Ask CFO is a high-value interaction and should feel responsive | §8.6, §15, §12 | — |
| 2-§22-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §22 b1: avoid unnecessary AI calls for simple deterministic calculations | §8.6, §12 | — |
| 2-§22-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §22 b2: use optimized authorized queries | §8.6, §12 | — |
| 2-§22-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §22 b3: keep permission checks efficient | §8.6, §12 | — |
| 2-§22-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §22 b4: avoid duplicated processing | §8.6, §12 | — |
| 2-§22-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §22 b5: use appropriate models based on complexity | §8.6, §12 | — |
| 2-§22-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §22 b6: return clear progress if deeper analysis takes longer | §8.6, §12 | — |
| 2-§22-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §22 b7: RLS/authorization | §8.6, §10.3, §12 | — |
| 2-§22-9 | IN SCOPE | SB-P-1.15 | C2@53635557 | §22 b8: merchant isolation | §8.6, §10.3, §12 | — |
| 2-§22-10 | IN SCOPE | SB-P-1.15 | C2@53635557 | §22 b9: data correctness | §8.6, §10.3, §12 | — |
| 2-§22-11 | IN SCOPE | SB-P-1.15 | C2@53635557 | §22 b10: uncertainty handling | §8.6, §10.3, §12 | — |
| 2-§22-12 | IN SCOPE | SB-P-1.15 | C2@53635557 | §22 b11: privacy | §8.6, §10.3, §12 | — |
| 2-§23-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §23 p1: Ask CFO should create strong customer value while remaining economically sustainable | §8.6, §10.2, §12 | — |
| 2-§23-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §23 b1: FAQ support should not consume Ask CFO reasoning unnecessarily | §8.6, §12 | — |
| 2-§23-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §23 b2: simple calculations should not require expensive model reasoning | §8.6, §12 | — |
| 2-§23-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §23 b3: model choice should match task complexity | §8.6, §12 | — |
| 2-§23-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §23 b4: long context should be controlled | §8.6, §12 | — |
| 2-§23-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §23 b5: repeated identical calculations may use safe caching where architecturally appropriate | §8.6, §12 | — |
| 2-§23-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §23 b6: abuse/unrelated AI use may be restricted under Fair Usage | §8.6, §12 | — |
| 2-§23-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §23 p3: Normal genuine business questions should not feel artificially constrained | §8.6, §10.3, §12 | — |
| 2-§24-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §24 b1: missing business data | §8.6, §12 | — |
| 2-§24-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §24 b2: stale data | §8.6, §12 | — |
| 2-§24-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §24 b3: conflicting records | §8.6, §12 | — |
| 2-§24-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §24 b4: unavailable integrations | §8.6, §12 | — |
| 2-§24-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §24 b5: insufficient permission | §8.6, §12 | — |
| 2-§24-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §24 b6: ambiguous time period | §8.6, §12 | — |
| 2-§24-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §24 b7: unclear customer/supplier/product names | §8.6, §12 | — |
| 2-§24-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §24 b8: unsupported prediction requests | §8.6, §12 | — |
| 2-§24-9 | IN SCOPE | SB-P-1.15 | C2@53635557 | §24 b9: provider/model failure | §8.6, §12 | — |
| 2-§24-10 | IN SCOPE | SB-P-1.15 | C2@53635557 | §24 p3: Ask, qualify, or admit uncertainty. Never invent | §8.6, §10.2, §12 | — |
| 2-§25-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Access — b1: Owner can use Ask CFO | §8.6, §15, §12 | — |
| 2-§25-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Access — b2: Employee blocked by default | §8.6, §15, §12 | — |
| 2-§25-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Access — b3: Supplier blocked | §8.6, §15, §12 | — |
| 2-§25-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Access — b4: Customer blocked | §8.6, §15, §12 | — |
| 2-§25-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Access — b5: Manager behavior follows explicit permission | §8.6, §15, §12 | — |
| 2-§25-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Data questions — b6: expense comparison | §8.6, §15, §12 | — |
| 2-§25-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Data questions — b7: credit query | §8.6, §15, §12 | FDB-3 |
| 2-§25-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Data questions — b8: stock query when stock capability enabled | §8.6, §15, §12 | — |
| 2-§25-9 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Data questions — b9: no stock fabrication when capability/data absent | §8.6, §15, §12 | — |
| 2-§25-10 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Data questions — b10: time-period comparison | §8.6, §15, §12 | — |
| 2-§25-11 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Advisory questions — b11: facts separated from suggestion | §8.6, §15, §12 | — |
| 2-§25-12 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Advisory questions — b12: uncertainty disclosed | §8.6, §15, §12 | — |
| 2-§25-13 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Advisory questions — b13: no fabricated business fact | §8.6, §15, §12 | — |
| 2-§25-14 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Advisory questions — b14: no autonomous consequential action | §8.6, §15, §12 | — |
| 2-§25-15 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Tone — b15: negative trend explained respectfully | §8.6, §15, §12 | — |
| 2-§25-16 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Tone — b16: no accusation | §8.6, §15, §12 | — |
| 2-§25-17 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Tone — b17: practical next action offered | §8.6, §15, §12 | — |
| 2-§25-18 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Voice — b18: Basic Voice short summary + detailed text | §8.6, §15, §12 | — |
| 2-§25-19 | ASSIGNED TO LATER MISSION | SB-P-1.19 | C2@53635557 | §25 Voice — b19: Voice Plus multi-turn conversation | §11.1, §12 | — |
| 2-§25-20 | ASSIGNED TO LATER MISSION | SB-P-1.19 | C2@53635557 | §25 Voice — b20: short voice blocks | §11.1, §12 | — |
| 2-§25-21 | ASSIGNED TO LATER MISSION | SB-P-1.19 | C2@53635557 | §25 Voice — b21: formatted summary | §11.1, §12 | — |
| 2-§25-22a | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Voice — b22: reminder continuation (Basic Voice slice) | §8.6, §15, §12 | — |
| 2-§25-22b | ASSIGNED TO LATER MISSION | SB-P-1.19 | C2@53635557 | §25 Voice — b22: reminder continuation (Voice Plus slice) | §11.1, §12 | — |
| 2-§25-23 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C2@53635557 | §25 Channel continuity — b23: WhatsApp and Conversation Workspace use the same Business Memory and permission behavior | §11.1, §12 | — |
| 2-§25-24 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Security — b24: read-only intelligence boundary | §8.6, §15, §12 | — |
| 2-§25-25 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Security — b25: RLS/merchant isolation | §8.6, §15, §12 | — |
| 2-§25-26 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Security — b26: no destructive database tool path | §8.6, §15, §12 | — |
| 2-§25-27 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Security — b27: no cross-business leakage | §8.6, §15, §12 | — |
| 2-§25-28 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Performance — b28: simple questions use efficient path | §8.6, §15, §12 | — |
| 2-§25-29 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Performance — b29: deeper analysis provides usable latency/feedback | §8.6, §15, §12 | — |
| 2-§25-30 | IN SCOPE | SB-P-1.15 | C2@53635557 | §25 Performance — b30: security not bypassed for speed | §8.6, §15, §12 | — |
| 2-§26-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §26 b1: Business Memory | §8.6, §10.2 | — |
| 2-§26-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §26 b2: Permission Engine | §8.6, §10.2 | — |
| 2-§26-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §26 b3: Identity | §8.6, §10.2 | — |
| 2-§26-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §26 b4: Conversation Engine | §8.6, §10.2 | — |
| 2-§26-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §26 b5: Human Language Layer | §8.6, §10.2 | — |
| 2-§26-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §26 b6: analytics/calculation services | §8.6, §10.2 | — |
| 2-§26-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §26 b7: Smart Reminder Engine | §8.6, §10.2 | — |
| 2-§26-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §26 b8: Document Intelligence where a document is part of the question | §8.6, §10.2, §12 | — |
| 2-§26-9 | IN SCOPE | SB-P-1.15 | C2@53635557 | §26 b9: Daily Intelligence data services where appropriate | §8.6, §10.2, §12 | — |
| 2-§26-10 | IN SCOPE | SB-P-1.15 | C2@53635557 | §26 b10: audit/logging foundations | §8.6, §10.2 | — |
| 2-§26-11 | IN SCOPE | SB-P-1.15 | C2@53635557 | §26 p2: It must not become an isolated AI chatbot with its own duplicate memory and permissions | §8.6, §10.3 | — |
| 2-§27-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §27 p2: Current Product Truth includes Ask CFO in both Ledger and Manager | §8.6, §10.2 | — |
| 2-§27-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §27 b1: Ask CFO is not Build Later | §8.6, §10.2 | — |
| 2-§27-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §27 b2: Ask CFO is not Manager-only | §8.6, §10.2 | — |
| 2-§27-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §27 b3: Employee access remains disabled by default | §8.6, §10.2 | — |
| 2-§27-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §27 b4: richer analysis may naturally depend on Manager data or enabled add-ons | §8.6, §10.2 | — |
| 2-§27-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §27 b5: Smart Voice Assistant Plus is a premium interaction layer, not a requirement for basic Ask CFO… | §8.6, §10.2 | — |
| 2-§28 | NOT APPLICABLE | SB-P-1.15 | C2@53635557 | §28 Provenance (whole section) | §11.4 | — |
| 2-§29-1 | IN SCOPE | SB-P-1.15 | C2@53635557 | §29 b1: analytics/query abstraction architecture | §8.6 | — |
| 2-§29-2 | IN SCOPE | SB-P-1.15 | C2@53635557 | §29 b2: deterministic query library vs model-driven orchestration | §8.6 | — |
| 2-§29-3 | IN SCOPE | SB-P-1.15 | C2@53635557 | §29 b3: safe function/tool schemas | §8.6 | — |
| 2-§29-4 | IN SCOPE | SB-P-1.15 | C2@53635557 | §29 b4: conversation context windowing | §8.6 | — |
| 2-§29-5 | IN SCOPE | SB-P-1.15 | C2@53635557 | §29 b5: caching strategy | §8.6 | — |
| 2-§29-6 | IN SCOPE | SB-P-1.15 | C2@53635557 | §29 b6: source-of-truth timestamping/staleness indicators | §8.6 | — |
| 2-§29-7 | IN SCOPE | SB-P-1.15 | C2@53635557 | §29 b7: auditability of recommendations | §8.6 | — |
| 2-§29-8 | IN SCOPE | SB-P-1.15 | C2@53635557 | §29 b8: model routing by complexity | §8.6 | — |
| 2-§29-9 | IN SCOPE | SB-P-1.15 | C2@53635557 | §29 b9: performance budgets | §8.6 | — |
| 2-§29-10 | IN SCOPE | SB-P-1.15 | C2@53635557 | §29 b10: voice generation provider and fallback | §8.6 | — |
| 2-§29-11 | IN SCOPE | SB-P-1.15 | C2@53635557 | §29 b11: exact Manager delegated-intelligence permission model | §8.6, §12 | — |
| 2-§29-12 | IN SCOPE | SB-P-1.15 | C2@53635557 | §29 p2: These are implementation questions, not reasons to narrow Ask CFO | §8.6, §10.2 | — |
| 4-§1-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §1 p1: Daily Intelligence is the proactive scheduled clarity layer of Smart Business | §8.5, §10.2, §12 | — |
| 4-§1-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §1 p2: It turns authorized Business Memory into concise, timely business awareness so the Owner does n… | §8.5, §15, §12 | — |
| 4-§1-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §1 p3: It is not a generic notification feed and not an autonomous management authority | §8.5, §10.3, §12 | — |
| 4-§2-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §2 b1: 7:00 AM — Morning Business Briefing | §8.5, §12 | — |
| 4-§2-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §2 b2: 10:30 AM — Business Pulse Check | §8.5, §12 | — |
| 4-§2-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §2 b3: 10:00 PM — Night Closing Intelligence | §8.5, §12 | — |
| 4-§2-4 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §2 p2: Historical 6:00 AM / 9:15 AM variants are provenance only and must not be rebuilt as current tr… | §8.5, §10.3, §12 | — |
| 4-§2-5 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §2 p3: Business timezone controls delivery | §8.5, §10.2, §12 | — |
| 4-§3-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §3 p1: The morning briefing should prepare the Owner for the day using available authorized facts | §8.5, §12 | — |
| 4-§3-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §3 b1: previous-day sales/purchases and important carry-forward context | §8.5, §12 | — |
| 4-§3-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §3 b2: outstanding customer/supplier credit requiring awareness | §8.5, §12 | — |
| 4-§3-4 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §3 b3: reminders due today | §8.5, §12 | — |
| 4-§3-5 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §3 b4: low-stock/reorder concerns | §8.5, §12 | — |
| 4-§3-6 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §3 b5: compliance/renewal deadlines | §8.5, §12 | — |
| 4-§3-7 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §3 b6: staffing/attendance items where Staff/HR is enabled | §8.5, §12 | — |
| 4-§3-8 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §3 b7: order/delivery commitments | §8.5, §12 | — |
| 4-§3-9 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §3 b8: unresolved exceptions requiring human attention | §8.5, §12 | — |
| 4-§3-10 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §3 p3: It must not fabricate a section merely because the template contains it | §8.5, §10.3, §12 | — |
| 4-§4-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §4 p1: The 10:30 AM pulse is a short operational check, not a second full morning report | §8.5, §12 | — |
| 4-§4-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §4 b1: sales/purchase activity since opening | §8.5, §12 | — |
| 4-§4-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §4 b2: unusual but factual operational signals | §8.5, §12 | — |
| 4-§4-4 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §4 b3: stock or order issues | §8.5, §12 | — |
| 4-§4-5 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §4 b4: reminders becoming urgent | §8.5, §12 | — |
| 4-§4-6 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §4 b5: payment/credit exceptions | §8.5, §12 | — |
| 4-§4-7 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §4 b6: Manager POS/counter signals where authorized | §8.5, §12 | — |
| 4-§4-8 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §4 p3: No change is itself valid information; the system should avoid noise when nothing useful changed | §8.5, §10.3, §12 | — |
| 4-§5-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §5 p1: The 10:00 PM closing view should help the Owner understand the day and what carries forward | §8.5, §12 | — |
| 4-§5-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §5 b1: sales/purchase summary | §8.5, §12 | — |
| 4-§5-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §5 b2: cash/payment awareness | §8.5, §12 | — |
| 4-§5-4 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §5 b3: credit and repayment movement | §8.5, §12 | — |
| 4-§5-5 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §5 b4: stock/reorder issues | §8.5, §12 | — |
| 4-§5-6 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §5 b5: unresolved orders/deliveries | §8.5, §12 | — |
| 4-§5-7 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §5 b6: reminders not completed | §8.5, §12 | — |
| 4-§5-8 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §5 b7: operational exceptions | §8.5, §12 | — |
| 4-§5-9 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §5 b8: tomorrow-facing items | §8.5, §12 | — |
| 4-§5-10 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §5 p3: For Manager, closing-cash/POS operational depth may be richer when those capabilities are enabl… | §8.5, §12 | — |
| 4-§6-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §6 p1: Daily Intelligence must consume existing shared foundations rather than maintain separate busin… | §8.5, §10.2, §12 | — |
| 4-§6-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §6 b1: Ledger / Business Memory | §8.5, §10.2, §12 | — |
| 4-§6-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §6 b2: Smart Credit Awareness | §8.5, §10.2, §12 | — |
| 4-§6-4 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §6 b3: Payment Verification | §8.5, §10.2, §12 | — |
| 4-§6-5 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §6 b4: Stock/Supplier/Reorder | §8.5, §10.2, §12 | — |
| 4-§6-6 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §6 b5: POS/Counter Intelligence | §8.5, §10.2, §12 | — |
| 4-§6-7 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §6 b6: Smart Reminder Engine | §8.5, §10.2, §12 | — |
| 4-§6-8 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §6 b7: Staff/HR | §8.5, §10.2, §12 | — |
| 4-§6-9 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §6 b8: Smart Order & Delivery | §8.5, §10.2, §12 | — |
| 4-§6-10 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §6 b9: Compliance Shield | §8.5, §10.2, §12 | — |
| 4-§6-11 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §6 b10: Universal Document Intelligence status | §8.5, §10.2, §12 | — |
| 4-§6-12 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §6 b11: approved support/platform exceptions where user-relevant | §8.5, §10.2, §12 | — |
| 4-§7-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §7 Owner — p1: Receives full authorized Owner-level Daily Intelligence | §8.5, §12 | — |
| 4-§7-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §7 Manager — p2: Receives only information delegated for operational management. Manager does not automatically… | §8.5, §10.3, §12 | — |
| 4-§7-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §7 Employee / Staff — p3: Must not receive Owner Daily Intelligence by default. Staff may receive only explicitly permitt… | §8.5, §10.3, §12 | — |
| 4-§7-4 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §7 Employee / Staff — p4: Daily Intelligence must never become a shortcut around the Permission Engine | §8.5, §10.3, §12 | — |
| 4-§8-1 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C4@ce940d25 | §8 b1: WhatsApp | §11.1, §12 | FDB-2 |
| 4-§8-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §8 b2: Smart Business Conversation Workspace | §8.5, §12 | FDB-2 |
| 4-§8-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §8 b3: dashboard/workspace surfaces where useful | §8.5, §12 | FDB-2 |
| 4-§8-4 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §8 p2: All channels must display the same underlying business facts and permission boundary | §8.5, §10.2, §12 | — |
| 4-§8-5 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C4@ce940d25 | §8 p3: WhatsApp failure must not stop Daily Intelligence computation or make the information unavailab… | §11.1, §12 | — |
| 4-§9-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §9 b1: concise | §8.5, §12 | — |
| 4-§9-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §9 b2: calm | §8.5, §12 | — |
| 4-§9-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §9 b3: factual | §8.5, §12 | — |
| 4-§9-4 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §9 b4: prioritized | §8.5, §12 | — |
| 4-§9-5 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §9 b5: easy to scan | §8.5, §12 | — |
| 4-§9-6 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §9 b6: respectful of merchant attention | §8.5, §12 | — |
| 4-§9-7 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §9 p2: It should not use fear-heavy language, gamified anxiety, accusation or artificial urgency | §8.5, §10.3, §12 | — |
| 4-§9-8 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §9 p3: Where no material action is required, say so simply | §8.5, §12 | — |
| 4-§10-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §10 b1: confirmed facts | §8.5, §12 | — |
| 4-§10-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §10 b2: estimates | §8.5, §12 | — |
| 4-§10-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §10 b3: patterns | §8.5, §12 | — |
| 4-§10-4 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §10 b4: operational signals | §8.5, §12 | — |
| 4-§10-5 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §10 b5: missing or stale information | §8.5, §12 | — |
| 4-§10-6 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §10 b6: ₹12,500 sales recorded today is a fact if supported by Ledger data | §8.5, §15, §12 | — |
| 4-§10-7 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §10 b7: Sales are lower than your recent Tuesday average is a pattern/analysis | §8.5, §15, §12 | — |
| 4-§10-8 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §10 b8: Possible stock risk is not proof of a stockout | §8.5, §15, §12 | — |
| 4-§11-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §11 b1: open the relevant record | §8.5, §12 | — |
| 4-§11-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §11 b2: ask Ask CFO for explanation | §8.5, §12 | — |
| 4-§11-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §11 b3: create/snooze a reminder | §8.5, §12 | — |
| 4-§11-4 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §11 b4: review a payment match | §8.5, §12 | — |
| 4-§11-5 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §11 b5: review reorder suggestion | §8.5, §12 | — |
| 4-§11-6 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §11 b6: open an order/delivery exception | §8.5, §12 | — |
| 4-§11-7 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §11 p2: Daily Intelligence itself does not execute consequential business actions without the normal pe… | §8.5, §10.3, §12 | — |
| 4-§12-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §12 p1: If a source feature is not enabled or data is insufficient, Daily Intelligence must not invent… | §8.5, §10.3, §12 | — |
| 4-§12-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §12 b1: omit the section | §8.5, §12 | — |
| 4-§12-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §12 b2: state that no reliable data is available | §8.5, §12 | — |
| 4-§12-4 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §12 b3: suggest the smallest useful next step | §8.5, §12 | — |
| 4-§12-5 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §12 p3: One unavailable source must not block unrelated sections | §8.5, §10.2, §12 | — |
| 4-§13-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §13 b1: delayed scheduler execution | §8.5, §12 | — |
| 4-§13-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §13 b2: duplicate job invocation | §8.5, §12 | — |
| 4-§13-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §13 b3: message delivery failure | §8.5, §12 | FDB-2 |
| 4-§13-4 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C4@ce940d25 | §13 b4: WhatsApp outage | §11.1, §12 | — |
| 4-§13-5 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §13 b5: timezone changes | §8.5, §12 | — |
| 4-§13-6 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §13 b6: stale source data | §8.5, §12 | — |
| 4-§13-7 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §13 b7: partial upstream service failure | §8.5, §12 | — |
| 4-§13-8 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §13 b8: user notification preference changes | §8.5, §12 | — |
| 4-§13-9 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §13 p2: Daily jobs must be idempotent enough to avoid duplicate merchant noise | §8.5, §12 | — |
| 4-§14-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §14 p1: Daily Intelligence should support English, Malayalam and Manglish according to user preference… | §8.5, §12 | — |
| 4-§14-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §14 p2: Language should sound natural for Kerala merchants rather than like literal translation of fina… | §8.5, §10.2, §12 | — |
| 4-§15-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §15 b1: expose Owner financial intelligence to unauthorized staff | §8.5, §10.3, §12 | — |
| 4-§15-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §15 b2: accuse employees/customers from anomaly signals | §8.5, §10.3, §12 | — |
| 4-§15-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §15 b3: expose sensitive HR/customer data beyond role need | §8.5, §10.3, §12 | — |
| 4-§15-4 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §15 b4: infer wrongdoing from missing or inconsistent data | §8.5, §10.3, §12 | — |
| 4-§15-5 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §15 p2: Operational risk should be framed as a review opportunity, not a verdict | §8.5, §10.2, §12 | — |
| 4-§16-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §16 b1: 7:00 AM briefing in business timezone | §8.5, §15, §12 | — |
| 4-§16-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §16 b2: 10:30 AM pulse without unnecessary duplicate content | §8.5, §15, §12 | — |
| 4-§16-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §16 b3: 10:00 PM closing summary | §8.5, §15, §12 | — |
| 4-§16-4 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §16 b4: correct handling of no-data/partial-data states | §8.5, §15, §12 | — |
| 4-§16-5 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §16 b5: no duplicate notifications on retry | §8.5, §15, §12 | — |
| 4-§16-6 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C4@ce940d25 | §16 b6: WhatsApp delivery failure with web-app continuity | §11.1, §12 | — |
| 4-§16-7 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §16 b7: Owner vs Manager permission differences | §8.5, §15, §12 | — |
| 4-§16-8 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §16 b8: Ask CFO/reminder continuation without bypassing authority | §8.5, §15, §12 | — |
| 4-§16-9 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §16 b9: English/Malayalam/Manglish rendering | §8.5, §15, §12 | — |
| 4-§16-10 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §16 b10: factual totals matching source systems | §8.5, §15, §12 | — |
| 4-§16-11 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §16 b11: neutral, non-accusatory handling of operational signals | §8.5, §15, §12 | — |
| 4-§17-1 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §17 b1: old 06:00 / 09:15 schedules as current truth | §8.5, §10.3 | — |
| 4-§17-2 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §17 b2: continuous real-time surveillance disguised as intelligence | §8.5, §10.3 | — |
| 4-§17-3 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §17 b3: staff access to Owner intelligence by default | §8.5, §10.3 | — |
| 4-§17-4 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §17 b4: automatic business decisions based on a briefing | §8.5, §10.3 | — |
| 4-§17-5 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §17 b5: fake certainty when source data is incomplete | §8.5, §10.3 | — |
| 4-§17-6 | IN SCOPE | SB-P-1.15 | C4@ce940d25 | §17 b6: notification volume for its own sake | §8.5, §10.3 | — |
| 4-§18 | NOT APPLICABLE | SB-P-1.15 | C4@ce940d25 | §18 Dependencies (whole section) | §11.4 | — |
| 4-§19 | NOT APPLICABLE | SB-P-1.15 | C4@ce940d25 | §19 Completion Gate (whole section) | §11.4 | — |
| 11-§1-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §1 p1: Smart Reminder is the shared Smart Business foundation for remembering commitments, follow-ups,… | §8.1, §10.2, §12 | — |
| 11-§1-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §1 p2: Other features must reuse this system rather than create separate reminder schedulers | §8.1, §10.3, §12 | — |
| 11-§2-1 | NOT APPLICABLE | SB-P-1.15 | C11@e802745a | §2 b1: supplier follow-up | §11.4 | — |
| 11-§2-2 | NOT APPLICABLE | SB-P-1.15 | C11@e802745a | §2 b2: customer credit collection | §11.4 | — |
| 11-§2-3 | NOT APPLICABLE | SB-P-1.15 | C11@e802745a | §2 b3: licences and renewals | §11.4 | — |
| 11-§2-4 | NOT APPLICABLE | SB-P-1.15 | C11@e802745a | §2 b4: stock review | §11.4 | — |
| 11-§2-5 | NOT APPLICABLE | SB-P-1.15 | C11@e802745a | §2 b5: employee matters | §11.4 | — |
| 11-§2-6 | NOT APPLICABLE | SB-P-1.15 | C11@e802745a | §2 b6: delivery follow-up | §11.4 | — |
| 11-§2-7 | NOT APPLICABLE | SB-P-1.15 | C11@e802745a | §2 b7: business/personal commitments | §11.4 | — |
| 11-§2-8 | NOT APPLICABLE | SB-P-1.15 | C11@e802745a | §2 b8: Ask CFO discussions to revisit later | §11.4 | — |
| 11-§2-9 | IN SCOPE | SB-P-1.15 | C11@e802745a | §2 p2: Smart Business should reduce that mental load without turning reminders into hidden machine aut… | §8.1, §10.2 | — |
| 11-§3-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §3 b1: AI Assistant, Not AI Judge | §8.1, §10.2, §12 | — |
| 11-§3-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §3 b2: Human decision ownership | §8.1, §10.2, §12 | — |
| 11-§3-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §3 b3: Reminder ≠ proof that an event happened | §8.1, §10.2, §12 | — |
| 11-§3-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §3 b4: Trigger ≠ authority | §8.1, §10.2, §12 | — |
| 11-§3-5 | IN SCOPE | SB-P-1.15 | C11@e802745a | §3 b5: Default consequential behavior is confirmation-first | §8.1, §10.2, §12 | — |
| 11-§3-6 | IN SCOPE | SB-P-1.15 | C11@e802745a | §3 b6: Standing automation is explicit delegated authority, not autonomous AI sovereignty | §8.1, §10.2, §12 | — |
| 11-§3-7 | IN SCOPE | SB-P-1.15 | C11@e802745a | §3 b7: Avoid duplicate/noisy reminders | §8.1, §10.2, §12 | — |
| 11-§3-8 | IN SCOPE | SB-P-1.15 | C11@e802745a | §3 b8: Preserve history and auditability | §8.1, §10.2, §12 | — |
| 11-§4-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §4 b1: business/user scope | §8.1, §12 | — |
| 11-§4-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §4 b2: creator | §8.1, §12 | — |
| 11-§4-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §4 b3: title/intent | §8.1, §12 | — |
| 11-§4-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §4 b4: due date/time | §8.1, §12 | — |
| 11-§4-5 | IN SCOPE | SB-P-1.15 | C11@e802745a | §4 b5: timezone | §8.1, §12 | — |
| 11-§4-6 | IN SCOPE | SB-P-1.15 | C11@e802745a | §4 b6: recurrence | §8.1, §12 | — |
| 11-§4-7 | IN SCOPE | SB-P-1.15 | C11@e802745a | §4 b7: related customer/supplier/employee/document/order/credit/compliance object | §8.1, §12 | — |
| 11-§4-8 | IN SCOPE | SB-P-1.15 | C11@e802745a | §4 b8: source conversation/context reference | §8.1, §12 | — |
| 11-§4-9 | IN SCOPE | SB-P-1.15 | C11@e802745a | §4 b9: status | §8.1, §12 | — |
| 11-§4-10 | IN SCOPE | SB-P-1.15 | C11@e802745a | §4 b10: snooze/reschedule history | §8.1, §12 | — |
| 11-§4-11 | IN SCOPE | SB-P-1.15 | C11@e802745a | §4 b11: completion actor/time | §8.1, §12 | — |
| 11-§4-12 | IN SCOPE | SB-P-1.15 | C11@e802745a | §4 b12: notification delivery state | §8.1, §12 | — |
| 11-§4-13 | IN SCOPE | SB-P-1.15 | C11@e802745a | §4 p2: The model should be shared across features | §8.1, §10.2, §12 | — |
| 11-§5-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §5 p1: Approved users may create reminders through text or voice in WhatsApp or the Conversation Works… | §8.1, §12 | — |
| 11-§5-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §5 b1: Remind me tomorrow to call ABC Traders | §8.1, §15, §12 | — |
| 11-§5-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §5 b2: Next Monday remind me to check the FSSAI renewal | §8.1, §15, §12 | — |
| 11-§5-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §5 b3: Remind me at 6 PM to continue this Ask CFO discussion | §8.1, §15, §12 | — |
| 11-§5-5 | IN SCOPE | SB-P-1.15 | C11@e802745a | §5 p3: If timing, target or intent is ambiguous, ask the smallest useful clarification | §8.1, §12 | — |
| 11-§6-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §6 b1: Done / Already Done | §8.1, §12 | — |
| 11-§6-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §6 b2: Snooze | §8.1, §12 | — |
| 11-§6-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §6 b3: Tomorrow | §8.1, §12 | — |
| 11-§6-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §6 b4: Next week | §8.1, §12 | — |
| 11-§6-5 | IN SCOPE | SB-P-1.15 | C11@e802745a | §6 b5: Custom reschedule | §8.1, §12 | — |
| 11-§6-6 | IN SCOPE | SB-P-1.15 | C11@e802745a | §6 b6: Open related record/action where permitted | §8.1, §12 | — |
| 11-§6-7 | IN SCOPE | SB-P-1.15 | C11@e802745a | §6 p2: Exact buttons are a UX decision; the durable behavior is human acknowledgement/rescheduling wit… | §8.1, §10.2, §12 | — |
| 11-§7-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §7 p1: Recurring reminders must preserve the recurrence rule separately from each occurrence | §8.1, §12 | — |
| 11-§7-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §7 p2: Completing one occurrence must not silently destroy future recurrence | §8.1, §10.3, §12 | — |
| 11-§7-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §7 p3: The system must avoid duplicate occurrences caused by retries or channel duplication | §8.1, §12 | — |
| 11-§8-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §8 b1: Ask CFO continuation | §8.1, §10.2, §12 | — |
| 11-§8-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §8 b2: Compliance Shield | §8.1, §10.2, §12 | — |
| 11-§8-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §8 b3: supplier/reorder follow-up | §8.1, §10.2, §12 | — |
| 11-§8-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §8 b4: Smart Credit Awareness | §8.1, §10.2, §12 | — |
| 11-§8-5 | IN SCOPE | SB-P-1.15 | C11@e802745a | §8 b5: stock/expiry review | §8.1, §10.2, §12 | — |
| 11-§8-6 | IN SCOPE | SB-P-1.15 | C11@e802745a | §8 b6: Staff/HR actions | §8.1, §10.2, §12 | — |
| 11-§8-7 | IN SCOPE | SB-P-1.15 | C11@e802745a | §8 b7: Order & Delivery follow-up/exceptions | §8.1, §10.2, §12 | — |
| 11-§8-8 | IN SCOPE | SB-P-1.15 | C11@e802745a | §8 b8: approved onboarding/support follow-up | §8.1, §10.2, §12 | — |
| 11-§8-9 | IN SCOPE | SB-P-1.15 | C11@e802745a | §8 p2: Feature-specific reminder tables/schedulers are rejected unless architecture demonstrates a gen… | §8.1, §10.3, §12 | — |
| 11-§9-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §9 b1: payment happened | §8.1, §10.3, §12 | — |
| 11-§9-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §9 b2: supplier order was placed | §8.1, §10.3, §12 | — |
| 11-§9-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §9 b3: employee action occurred | §8.1, §10.3, §12 | — |
| 11-§9-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §9 b4: licence was renewed | §8.1, §10.3, §12 | — |
| 11-§9-5 | IN SCOPE | SB-P-1.15 | C11@e802745a | §9 b5: customer paid | §8.1, §10.3, §12 | — |
| 11-§9-6 | IN SCOPE | SB-P-1.15 | C11@e802745a | §9 b6: delivery completed | §8.1, §10.3, §12 | — |
| 11-§9-7 | IN SCOPE | SB-P-1.15 | C11@e802745a | §9 p2: The actual business event must be recorded through the appropriate governed feature service | §8.1, §10.2, §12 | — |
| 11-§10-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §10 p1: A reminder may offer a bounded action such as | §8.2, §12 | — |
| 11-§10-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §10 b1: Paid & Log Expense | §8.2, §15, §12 | — |
| 11-§10-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §10 b2: Mark customer payment received | §8.2, §15, §12 | — |
| 11-§10-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §10 b3: Approve reorder | §8.2, §15, §12 | — |
| 11-§10-5 | IN SCOPE | SB-P-1.15 | C11@e802745a | §10 b4: Open renewal document | §8.2, §15, §12 | — |
| 11-§10-6 | IN SCOPE | SB-P-1.15 | C11@e802745a | §10 n1: identify the exact target/action | §8.2, §12 | — |
| 11-§10-7 | IN SCOPE | SB-P-1.15 | C11@e802745a | §10 n2: verify current state | §8.2, §12 | — |
| 11-§10-8 | IN SCOPE | SB-P-1.15 | C11@e802745a | §10 n3: verify actor permission | §8.2, §12 | — |
| 11-§10-9 | IN SCOPE | SB-P-1.15 | C11@e802745a | §10 n4: show/confirm consequential facts unless a valid standing rule already authorizes the action | §8.2, §12 | — |
| 11-§10-10 | IN SCOPE | SB-P-1.15 | C11@e802745a | §10 n5: execute through the authoritative feature service | §8.2, §12 | — |
| 11-§10-11 | IN SCOPE | SB-P-1.15 | C11@e802745a | §10 n6: preserve linked reminder/business audit history | §8.2, §12 | — |
| 11-§11-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §11 p1: An Owner may deliberately create a bounded standing rule | §8.2, §12 | — |
| 11-§11-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §11 p2: A mature standing rule should preserve | §8.2, §10.2, §12 | — |
| 11-§11-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §11 b1: business scope | §8.2, §12 | — |
| 11-§11-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §11 b2: exact action type | §8.2, §12 | — |
| 11-§11-5 | IN SCOPE | SB-P-1.15 | C11@e802745a | §11 b3: trigger conditions | §8.2, §12 | — |
| 11-§11-6 | IN SCOPE | SB-P-1.15 | C11@e802745a | §11 b4: target/item/person | §8.2, §12 | — |
| 11-§11-7 | IN SCOPE | SB-P-1.15 | C11@e802745a | §11 b5: quantity/value/limit where relevant | §8.2, §12 | — |
| 11-§11-8 | IN SCOPE | SB-P-1.15 | C11@e802745a | §11 b6: permitted channel/destination where relevant | §8.2, §12 | — |
| 11-§11-9 | IN SCOPE | SB-P-1.15 | C11@e802745a | §11 b7: creator/authority provenance | §8.2, §12 | — |
| 11-§11-10 | IN SCOPE | SB-P-1.15 | C11@e802745a | §11 b8: effective date/time | §8.2, §12 | — |
| 11-§11-11 | IN SCOPE | SB-P-1.15 | C11@e802745a | §11 b9: enabled/paused/revoked state | §8.2, §12 | — |
| 11-§11-12 | IN SCOPE | SB-P-1.15 | C11@e802745a | §11 b10: modification history | §8.2, §12 | — |
| 11-§11-13 | IN SCOPE | SB-P-1.15 | C11@e802745a | §11 b11: trigger/execution history | §8.2, §12 | — |
| 11-§11-14 | IN SCOPE | SB-P-1.15 | C11@e802745a | §11 b12: failure/retry history | §8.2, §12 | — |
| 11-§11-15 | IN SCOPE | SB-P-1.15 | C11@e802745a | §11 p3: The rule must never expand itself beyond stored authority | §8.2, §10.3, §12 | — |
| 11-§12-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §12 p2: Low stock detected → Smart Business suggests reorder → Owner reviews/approves/edits/defers/canc… | §8.2, §15, §12 | — |
| 11-§12-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §12 p3: Only when the Owner has created a valid bounded standing rule may the approved reorder action e… | §8.2, §15, §12 | — |
| 11-§12-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §12 p4: A historical background trigger is not authority by itself | §8.2, §10.3, §12 | — |
| 11-§13-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §13 Owner — p1: May create/manage reminders and approved standing rules within product limits | §8.1, §12 | — |
| 11-§13-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §13 Manager — p2: May create reminders and automation only within Owner-delegated authority | §8.1, §12 | — |
| 11-§13-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §13 Employee — p3: May use permitted self/operational reminders. Employees cannot create Owner-level financial/pro… | §8.1, §10.3, §12 | — |
| 11-§13-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §13 Other roles — p4: Only bounded workflow interactions explicitly provided by their feature | §8.1, §10.3, §12 | — |
| 11-§14-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §14 p1: Reminder truth is channel-independent | §8.1, §10.2, §12 | — |
| 11-§14-2 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C11@e802745a | §14 p2: A reminder shown in both WhatsApp and the Conversation Workspace remains one reminder, not two… | §11.1, §12 | — |
| 11-§14-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §14 p3: Notification delivery failure is separate from reminder/business state | §8.1, §10.2, §12 | FDB-2 |
| 11-§15-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §15 p1: Reminder creation/interaction supports English, Malayalam and Manglish through the shared Human… | §8.1, §12 | — |
| 11-§15-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §15 p2: Ambiguous time phrases must be clarified when necessary rather than silently guessed | §8.1, §10.3, §12 | — |
| 11-§16-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §16 b1: bind confirmation to the exact reviewed action/state/actor | §8.2, §12 | — |
| 11-§16-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §16 b2: revalidate authorization immediately before execution | §8.2, §12 | — |
| 11-§16-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §16 b3: use idempotency/duplicate protection | §8.2, §12 | — |
| 11-§16-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §16 b4: record actor and authority provenance | §8.2, §12 | — |
| 11-§16-5 | IN SCOPE | SB-P-1.15 | C11@e802745a | §16 b5: fail narrowly if underlying state changed | §8.2, §12 | — |
| 11-§16-6 | IN SCOPE | SB-P-1.15 | C11@e802745a | §16 p2: A stale confirmation must not execute a changed action | §8.2, §10.3, §12 | — |
| 11-§17-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §17 p1: Use the shared Notification foundation | §8.4, §10.2, §12 | — |
| 11-§17-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §17 b1: user role | §8.4, §12 | — |
| 11-§17-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §17 b2: preferred language | §8.4, §12 | — |
| 11-§17-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §17 b3: channel availability | §8.4, §12 | FDB-2 |
| 11-§17-5 | IN SCOPE | SB-P-1.15 | C11@e802745a | §17 b4: quiet/reasonable delivery behavior where appropriate | §8.4, §12 | — |
| 11-§17-6 | IN SCOPE | SB-P-1.15 | C11@e802745a | §17 b5: duplicate suppression | §8.4, §12 | — |
| 11-§17-7 | IN SCOPE | SB-P-1.15 | C11@e802745a | §17 b6: privacy | §8.4, §12 | — |
| 11-§17-8 | IN SCOPE | SB-P-1.15 | C11@e802745a | §17 p3: Notification success does not equal business-action success | §8.4, §10.3, §12 | — |
| 11-§18-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §18 b1: ambiguous date/time | §8.1, §12 | — |
| 11-§18-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §18 b2: missing target/context | §8.1, §12 | — |
| 11-§18-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §18 b3: stale related business state | §8.1, §12 | — |
| 11-§18-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §18 b4: duplicate trigger | §8.1, §12 | — |
| 11-§18-5 | IN SCOPE | SB-P-1.15 | C11@e802745a | §18 b5: notification provider failure | §8.1, §12 | FDB-2 |
| 11-§18-6 | IN SCOPE | SB-P-1.15 | C11@e802745a | §18 b6: revoked permission | §8.1, §12 | — |
| 11-§18-7 | IN SCOPE | SB-P-1.15 | C11@e802745a | §18 b7: paused/revoked standing rule | §8.1, §12 | — |
| 11-§18-8 | IN SCOPE | SB-P-1.15 | C11@e802745a | §18 b8: failed action execution | §8.1, §12 | — |
| 11-§18-9 | IN SCOPE | SB-P-1.15 | C11@e802745a | §18 b9: recurrence conflict | §8.1, §12 | — |
| 11-§18-10 | IN SCOPE | SB-P-1.15 | C11@e802745a | §18 b10: timezone change | §8.1, §12 | — |
| 11-§18-11 | IN SCOPE | SB-P-1.15 | C11@e802745a | §18 b11: channel outage | §8.1, §12 | FDB-2 |
| 11-§18-12 | IN SCOPE | SB-P-1.15 | C11@e802745a | §18 p2: A broken reminder path must not freeze unrelated features | §8.1, §10.3, §12 | — |
| 11-§19-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §19 b1: Private/personal reminders must not leak to staff | §8.1, §10.3, §12 | — |
| 11-§19-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §19 b2: Feature-linked reminders inherit permission sensitivity of the linked object | §8.1, §10.2, §12 | — |
| 11-§19-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §19 b3: Reminder text should avoid exposing sensitive Owner information to unauthorized roles | §8.1, §10.3, §12 | — |
| 11-§19-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §19 b4: Automation history must be auditable to the authority that created it | §8.1, §12 | — |
| 11-§20-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §20 b1: Business Memory/linking | §8.1, §10.2, §12 | — |
| 11-§20-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §20 b2: identities | §8.1, §10.2, §12 | — |
| 11-§20-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §20 b3: Permission Engine | §8.1, §10.2, §12 | — |
| 11-§20-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §20 b4: Human Language Layer | §8.1, §10.2, §12 | — |
| 11-§20-5 | IN SCOPE | SB-P-1.15 | C11@e802745a | §20 b5: Conversation channels | §8.1, §10.2, §12 | — |
| 11-§20-6 | IN SCOPE | SB-P-1.15 | C11@e802745a | §20 b6: Notification foundation | §8.1, §10.2, §12 | — |
| 11-§20-7 | IN SCOPE | SB-P-1.15 | C11@e802745a | §20 b7: audit/idempotency | §8.1, §10.2, §12 | — |
| 11-§20-8 | IN SCOPE | SB-P-1.15 | C11@e802745a | §20 b8: feature action services | §8.1, §10.2, §12 | — |
| 11-§21-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §21 b1: duplicate reminder engines per feature | §8.1, §10.3 | — |
| 11-§21-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §21 b2: AI-created permission | §8.1, §10.3 | — |
| 11-§21-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §21 b3: silent financial/procurement commitments | §8.1, §10.3 | — |
| 11-§21-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §21 b4: due date treated as proof of event | §8.1, §10.3 | — |
| 11-§21-5 | IN SCOPE | SB-P-1.15 | C11@e802745a | §21 b5: blind supplier orders | §8.1, §10.3 | — |
| 11-§21-6 | IN SCOPE | SB-P-1.15 | C11@e802745a | §21 b6: global product lock because one reminder failed | §8.1, §10.3 | — |
| 11-§22-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §22 n1: Natural-language one-time reminder | §8.1, §15, §12 | — |
| 11-§22-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §22 n2: Ambiguous timing → clarification | §8.1, §15, §12 | — |
| 11-§22-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §22 n3: Recurring reminder preserves future occurrences/history | §8.1, §15, §12 | — |
| 11-§22-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §22 n4: Snooze/reschedule does not create duplicate reminder truth | §8.1, §15, §12 | — |
| 11-§22-5 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C11@e802745a | §22 n5: Same reminder visible across channels without duplication | §11.1, §12 | — |
| 11-§22-6 | IN SCOPE | SB-P-1.15 | C11@e802745a | §22 n6: Reminder due does not create payment/event automatically | §8.1, §15, §12 | — |
| 11-§22-7 | IN SCOPE | SB-P-1.15 | C11@e802745a | §22 n7: Consequential action requires valid confirmation or standing authority | §8.1, §15, §12 | — |
| 11-§22-8 | IN SCOPE | SB-P-1.15 | C11@e802745a | §22 n8: Standing rule cannot exceed stored limit/scope | §8.1, §15, §12 | — |
| 11-§22-9 | IN SCOPE | SB-P-1.15 | C11@e802745a | §22 n9: Revoked permission blocks execution at runtime | §8.1, §15, §12 | — |
| 11-§22-10 | IN SCOPE | SB-P-1.15 | C11@e802745a | §22 n10: Notification failure does not falsely mark completion | §8.1, §15, §12 | — |
| 11-§22-11 | IN SCOPE | SB-P-1.15 | C11@e802745a | §22 n11: Duplicate trigger is idempotent | §8.1, §15, §12 | — |
| 11-§22-12 | IN SCOPE | SB-P-1.15 | C11@e802745a | §22 n12: Narrow failure leaves unrelated operations available | §8.1, §15, §12 | — |
| 11-§23-1 | IN SCOPE | SB-P-1.15 | C11@e802745a | §23 p1: Preserve proactive assistance | §8.1, §10.2, §12 | — |
| 11-§23-2 | IN SCOPE | SB-P-1.15 | C11@e802745a | §23 b1: blind autonomous-daemon framing | §8.1, §10.3 | — |
| 11-§23-3 | IN SCOPE | SB-P-1.15 | C11@e802745a | §23 b2: trigger interpreted as authority | §8.1, §10.3 | — |
| 11-§23-4 | IN SCOPE | SB-P-1.15 | C11@e802745a | §23 b3: feature-specific duplicate schedulers | §8.1, §10.3 | — |
| 11-§23-5 | IN SCOPE | SB-P-1.15 | C11@e802745a | §23 b4: historical fixed enums/button sets/cron times as immutable Product Truth | §8.1, §10.3 | — |
| 11-§24 | NOT APPLICABLE | SB-P-1.15 | C11@e802745a | §24 Provenance and Hydration Coverage (whole section) | §11.4 | — |
| 11-§25 | NOT APPLICABLE | SB-P-1.15 | C11@e802745a | §25 Completion Gate (whole section) | §11.4 | — |
| 22-§1 | NOT APPLICABLE | SB-P-1.15 | C22@61e1bb91 | §1 Feature Identity (whole section) | §11.4 | — |
| 22-§2 | NOT APPLICABLE | SB-P-1.15 | C22@61e1bb91 | §2 Founder Problem Statement (whole section) | §11.4 | — |
| 22-§3 | NOT APPLICABLE | SB-P-1.15 | C22@61e1bb91 | §3 Lighthouse Principles (whole section) | §11.4 | — |
| 22-§4 | DELEGATED | SB-P-1.14 | C22@61e1bb91 | §4 Business Memory Foundation (whole section) | §11.2, §12 | — |
| 22-§5 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §5 Identity Foundation (whole section) | §11.2, §12 | — |
| 22-§6 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §6 Permission / Business Isolation Foundation (whole section) | §11.2, §12 | — |
| 22-§7 | DELEGATED | SB-P-1.13 | C22@61e1bb91 | §7 Conversation / Intent-Action Foundation (whole section) | §11.2, §12 | — |
| 22-§8 | DELEGATED | SB-P-1.13 | C22@61e1bb91 | §8 Human Language Foundation (whole section) | §11.2, §12 | — |
| 22-§9 | DELEGATED | SB-P-1.14 | C22@61e1bb91 | §9 Universal Document Intelligence Foundation (whole section) | §11.2, §12 | — |
| 22-§10 | DELEGATED | SB-P-1.14 | C22@61e1bb91 | §10 Document / Receipt Memory Foundation (whole section) | §11.2, §12 | — |
| 22-§11-1 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §11 b1: business/personal reminders | §8.1, §12 | — |
| 22-§11-2 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §11 b2: compliance | §8.1, §12 | — |
| 22-§11-3 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §11 b3: supplier/reorder follow-up | §8.1, §12 | — |
| 22-§11-4 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §11 b4: credit follow-up | §8.1, §12 | — |
| 22-§11-5 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §11 b5: HR | §8.1, §12 | — |
| 22-§11-6 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §11 b6: delivery | §8.1, §12 | — |
| 22-§11-7 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §11 b7: Ask CFO continuation | §8.1, §12 | — |
| 22-§11-8 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §11 p2: Standing automation rules are stored delegated authority, not AI-created permission | §8.1, §10.2, §12 | — |
| 22-§11-9 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §11 p3: Feature-specific schedulers should be justified by true domain needs rather than convenience | §8.1, §10.2, §12 | — |
| 22-§12-1 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §12 b1: recipient identity/role | §8.4, §12 | FPDR-1 |
| 22-§12-2 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §12 b2: language | §8.4, §12 | FPDR-1 |
| 22-§12-3 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §12 b3: channel preference/availability | §8.4, §12 | FPDR-1; FDB-2 |
| 22-§12-4 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §12 b4: template/provider requirements | §8.4, §12 | FPDR-1; FDB-2 |
| 22-§12-5 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §12 b5: delivery/retry state | §8.4, §12 | FPDR-1 |
| 22-§12-6 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §12 b6: duplicate suppression | §8.4, §12 | FPDR-1 |
| 22-§12-7 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §12 b7: privacy | §8.4, §12 | FPDR-1 |
| 22-§12-8 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §12 b8: link to originating business event | §8.4, §12 | FPDR-1; FDB-1 |
| 22-§12-9 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §12 p3: Notification delivery is separate from business-event completion | §8.4, §10.2, §12 | FPDR-1 |
| 22-§13 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §13 Confirmation / Clarification Foundation (whole section) | §11.2, §12 | — |
| 22-§14 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §14 Audit / Human Context Foundation (whole section) | §11.2, §12 | — |
| 22-§15 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §15 Idempotency / Duplicate Protection (whole section) | §11.2, §12 | — |
| 22-§16 | NOT APPLICABLE | SB-P-1.15 | C22@61e1bb91 | §16 Location Foundation (whole section) | §11.4 | — |
| 22-§17-1 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §17 p1: Smart Business should standardize core business behavior and customize/integrate at the edge | §8.7, §10.2 | — |
| 22-§17-2 | ASSIGNED TO LATER MISSION | SB-P-1.17 | C22@61e1bb91 | §17 b1: POS | §11.1, §12 | — |
| 22-§17-3 | ASSIGNED TO LATER MISSION | SB-P-1.16 | C22@61e1bb91 | §17 b2: payment/bank providers | §11.1, §12 | — |
| 22-§17-4 | ASSIGNED TO LATER MISSION | SB-P-1.20 | C22@61e1bb91 | §17 b3: WhatsApp | §11.1, §12 | — |
| 22-§17-5 | DELEGATED | SB-P-1.13 | C22@61e1bb91 | §17 b4: OpenAI/model services | §11.2, §12 | — |
| 22-§17-6 | ASSIGNED TO LATER MISSION | SB-P-1.19 | C22@61e1bb91 | §17 b5: billing providers | §11.1, §12 | — |
| 22-§17-7 | DELEGATED | SB-P-1.14 | C22@61e1bb91 | §17 b6: storage/document services | §11.2, §12 | — |
| 22-§17-8 | NOT APPLICABLE | SB-P-1.15 | C22@61e1bb91 | §17 b7: future external systems | §11.4 | — |
| 22-§17-9 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §17 p3: Custom client-specific modifications inside core are rejected unless explicitly reclassified th… | §8.7, §10.3 | — |
| 22-§18-1 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §18 b1: Daily Intelligence | §8.3, §12 | — |
| 22-§18-2 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §18 b2: reminders | §8.3, §12 | — |
| 22-§18-3 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §18 b3: safe retries | §8.3, §12 | — |
| 22-§18-4 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §18 b4: retention/cleanup | §8.3, §12 | — |
| 22-§18-5 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §18 b5: sync/reconciliation | §8.3, §12 | — |
| 22-§18-6 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §18 b6: other deterministic already-authorized jobs | §8.3, §12 | — |
| 22-§18-7 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §18 p2: A background job may execute maintenance/authorized actions but cannot create new human/busines… | §8.3, §10.3, §12 | — |
| 22-§18-8 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §18 b7: idempotent where needed | §8.3, §12 | — |
| 22-§18-9 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §18 b8: observable | §8.3, §12 | — |
| 22-§18-10 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §18 b9: narrowly retryable | §8.3, §12 | — |
| 22-§18-11 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §18 b10: permission/authority-aware at execution where consequential | §8.3, §12 | — |
| 22-§19-8 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §19 p2: Block only what is unsafe or unavailable. Keep unrelated safe work available | §8.7, §10.2 | — |
| 22-§19-1 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §19 b1: clear failure reason | §8.7 | — |
| 22-§19-2 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §19 b2: safe retry/recovery | §8.7 | — |
| 22-§19-3 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §19 b3: no false success | §8.7 | — |
| 22-§19-4 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §19 b4: preserved user input/evidence where appropriate | §8.7 | — |
| 22-§19-5 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §19 b5: operational observability | §8.7 | — |
| 22-§19-6 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §19 b6: narrow containment | §8.7 | — |
| 22-§19-7 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §19 p4: One failing provider/module should not automatically freeze Smart Business globally | §8.7, §10.2 | — |
| 22-§20 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §20 Data / Schema Stability Principle (whole section) | §11.2, §12 | — |
| 22-§21-1 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §21 p1: Current product direction targets a responsive experience (sub-3-second for critical interactio… | §8.7, §10.2 | — |
| 22-§21-2 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §21 b1: authorization | §8.7, §10.3 | — |
| 22-§21-3 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §21 b2: financial correctness | §8.7, §10.3 | — |
| 22-§21-4 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §21 b3: confirmation | §8.7, §10.3 | — |
| 22-§21-5 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §21 b4: privacy | §8.7, §10.3 | — |
| 22-§21-6 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §21 b5: auditability | §8.7, §10.3 | — |
| 22-§21-7 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §21 p2: Shared caching/query/model-selection patterns should be used where safe rather than repeated fe… | §8.7, §10.2 | — |
| 22-§22-1 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §22 b1: stable identifiers/test hooks for critical UI flows where appropriate | §8.7 | — |
| 22-§22-2 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §22 b2: deterministic tests for financial/permission rules | §8.7 | — |
| 22-§22-3 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §22 b3: integration failure tests | §8.7 | — |
| 22-§22-4 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §22 b4: runtime verification | §8.7 | — |
| 22-§22-5 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §22 b5: independent verification before Mission Control acceptance | §8.7 | — |
| 22-§22-6 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §22 p2: Green CI alone is not feature acceptance | §8.7, §10.3 | — |
| 22-§23-1 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §23 b1: Merchant data belongs to merchant | §11.2, §12 | — |
| 22-§23-2 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §23 b2: No cross-business leakage | §8.7, §12 | — |
| 22-§23-3 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §23 b3: No routine platform access to merchant private intelligence | §8.7, §12 | — |
| 22-§23-4 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §23 b4: Support access is purpose-limited | §11.2, §12 | — |
| 22-§23-5 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §23 b5: Staff data is role/purpose limited | §8.7, §12 | — |
| 22-§23-6 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §23 b6: Individual merchant data must not be sold for unrelated monetization | §11.2, §12 | — |
| 22-§23-7 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §23 b7: Aggregate product/operational insight must be privacy-respecting/governed | §11.2, §12 | — |
| 22-§24 | DELEGATED | SB-P-1.13 | C22@61e1bb91 | §24 AI Authority Foundation (whole section) | §11.2, §12 | — |
| 22-§25 | DELEGATED | SB-P-1.13 | C22@61e1bb91 | §25 AI Orchestration / OpenAI Intelligence Foundation (whole section) | §11.2, §12 | — |
| 22-§26 | DELEGATED | SB-P-1.20 | C22@61e1bb91 | §26 Dedicated Channel Adapter Contracts (whole section) | §11.2, §12 | — |
| 22-§27-1 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §27 n1: which mature feature(s) it advances | §8.7 | — |
| 22-§27-2 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §27 n2: which shared foundations it reuses | §8.7 | — |
| 22-§27-3 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §27 n3: whether it consumes AI orchestration and/or a channel adapter | §8.7 | — |
| 22-§27-4 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §27 n4: what already exists and must not be duplicated | §8.7 | — |
| 22-§27-5 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §27 n5: what remains committed but outside current mission | §8.7 | — |
| 22-§27-6 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §27 n6: exact blockers/dependencies | §8.7 | — |
| 22-§27-7 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §27 n7: required evidence for acceptance | §8.7 | — |
| 22-§27-8 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §27 p2: A narrow mission cannot demote unimplemented feature scope to Build Later by convenience | §8.7, §10.3 | — |
| 22-§28-1 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §28 b1: duplicate Business Memory by channel | §8.7, §10.3 | — |
| 22-§28-2 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §28 b2: duplicate Permission Engine per feature | §8.7, §10.3 | — |
| 22-§28-3 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §28 b3: duplicate AI brain/orchestrator per channel or feature | §8.7, §10.3 | — |
| 22-§28-4 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §28 b4: duplicate reminder scheduler per feature | §8.7, §10.3 | — |
| 22-§28-5 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §28 b5: duplicate OCR/document pipeline | §8.7, §10.3 | — |
| 22-§28-6 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §28 b6: duplicate customer/supplier identity silos | §8.7, §10.3 | — |
| 22-§28-7 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §28 b7: continuous employee GPS foundation | §8.7, §10.3 | — |
| 22-§28-8 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §28 b8: subscription-driven create/drop of core domain tables | §8.7, §10.3 | — |
| 22-§28-9 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §28 b9: AI/tool capability treated as authority | §8.7, §10.3 | — |
| 22-§28-10 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §28 b10: custom client-specific core forks | §8.7, §10.3 | — |
| 22-§29-1 | DELEGATED | SB-P-1.13 | C22@61e1bb91 | §29 n1: WhatsApp and Conversation Workspace use one Business Memory/action truth | §11.2, §12 | — |
| 22-§29-2 | DELEGATED | SB-P-1.13 | C22@61e1bb91 | §29 n2: WhatsApp and Conversation Workspace share one permission-aware AI orchestration path rather tha… | §11.2, §12 | — |
| 22-§29-3 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §29 n3: Cross-business access is blocked consistently across channels/services/AI tools | §8.7, §15, §12 | — |
| 22-§29-4 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §29 n4: Multiple features reuse one Reminder Engine | §8.7, §15, §12 | — |
| 22-§29-5 | DELEGATED | SB-P-1.14 | C22@61e1bb91 | §29 n5: Multiple document types reuse one UDI pipeline with domain adapters | §11.2, §12 | — |
| 22-§29-6 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §29 n6: Customer/supplier identity is not duplicated solely by channel/feature | §11.2, §12 | — |
| 22-§29-7 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §29 n7: Consequential confirmation is exact and revalidated at execution | §8.7, §15, §12 | — |
| 22-§29-8 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §29 n8: Duplicate external/retry events are idempotent | §8.7, §15, §12 | — |
| 22-§29-9 | NOT APPLICABLE | SB-P-1.15 | C22@61e1bb91 | §29 n9: Attendance/delivery location uses purpose-limited shared primitive | §11.4 | — |
| 22-§29-10 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §29 n10: Feature/provider failure is narrowly contained | §8.7, §15, §12 | — |
| 22-§29-11 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §29 n11: Subscription changes do not dynamically destroy core schema/history | §11.2, §12 | — |
| 22-§29-12 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §29 n12: Audit retains raw evidence plus authorized human context where required | §8.7, §15, §12 | — |
| 22-§29-13 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §29 n13: OpenAI/model outage does not corrupt authoritative business state | §8.7, §15, §12 | — |
| 22-§29-14 | IN SCOPE | SB-P-1.15 | C22@61e1bb91 | §29 n14: Future implementation documents identify reused foundations before introducing new subsystems | §8.7, §15 | — |
| 22-§30 | NOT APPLICABLE | SB-P-1.15 | C22@61e1bb91 | §30 Historical Corrections / Superseded Behavior (whole section) | §11.4 | — |
| 22-§31 | NOT APPLICABLE | SB-P-1.15 | C22@61e1bb91 | §31 Provenance and Hydration Coverage (whole section) | §11.4 | — |
| 22-§32 | NOT APPLICABLE | SB-P-1.15 | C22@61e1bb91 | §32 Completion Gate (whole section) | §11.4 | — |
| 22-§33 | DELEGATED | SB-P-1.12 | C22@61e1bb91 | §33 Personal Identity Lifecycle and Governed Deletion (whole section) | §11.2, §12 | — |
| 21-§8 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §8 one permission model across channels; natural-language prompt cannot widen access (incl. Manager asking Ask CFO without delegation) | §11.2, §12 | — |
| 21-§9 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §9 Ask CFO / Owner intelligence boundary (rule owned by SB-P-1.12; feature obeys it) | §11.2, §12 | — |
| 21-§12 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §12 Delegated Automation Authority (stored delegation; execution-time checks; trigger creates no permission) | §11.2, §12 | — |
| 21-§24-3 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §24 acceptance 3: Manager sees only delegated capabilities | §11.2, §12 | — |
| 21-§24-6 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §24 acceptance 6: Employee cannot gain Ask CFO via natural-language prompt | §11.2, §12 | — |
| 21-§24-8 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §24 acceptance 8: permission revoked after preview blocks execution at runtime | §11.2, §12 | — |
| 21-§24-11 | DELEGATED | SB-P-1.12 | C21@f4a05d5c | §24 acceptance 11: standing automation cannot exceed Owner-delegated scope | §11.2, §12 | — |
| 24-§5-4 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §5 central flow applies to approved background/scheduled intelligence | §8.3, §10.2, §12 | — |
| 24-§12-1 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §12 Ask CFO is one specialized reasoning experience on the shared AI foundation | §8.6, §10.2, §12 | — |
| 24-§12-2 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §12 orchestration may: interpret the business question | §8.6, §12 | — |
| 24-§12-3 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §12 orchestration may: determine authorized data needs | §8.6, §12 | — |
| 24-§12-4 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §12 orchestration may: retrieve/calculate through approved read paths | §8.6, §12 | — |
| 24-§12-5 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §12 orchestration may: reason over verified facts | §8.6, §12 | — |
| 24-§12-6 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §12 orchestration may: distinguish fact, pattern, estimate, risk, opportunity and recommendation | §8.6, §12 | — |
| 24-§12-7 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §12 orchestration may: generate a clear explanation | §8.6, §12 | — |
| 24-§12-8 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §12 Ask CFO remains read-only intelligence | §8.6, §10.3, §12 | — |
| 24-§12-9 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §12 operational continuation moves to the relevant governed domain action/service | §8.6, §10.2, §12 | — |
| 24-§13-1 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §13 AI produces structured reminder drafts; shared Reminder Engine owns state, recurrence, scheduling, history, delegation | §8.1, §12 | — |
| 24-§13-2 | DELEGATED | SB-P-1.13 | C24@0c1dcbb2 | §13 AI brain does not become a hidden scheduler | §11.2, §12 | — |
| 24-§16-1 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §16 Daily Intelligence uses deterministic aggregation plus AI explanation/prioritization | §8.5, §10.2, §12 | — |
| 24-§16-2 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §16 AI may help: summarize significant changes | §8.5, §12 | — |
| 24-§16-3 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §16 AI may help: prioritize what merits Owner attention | §8.5, §12 | — |
| 24-§16-4 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §16 AI may help: phrase facts clearly | §8.5, §12 | — |
| 24-§16-5 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §16 AI may help: explain patterns | §8.5, §12 | — |
| 24-§16-6 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §16 AI may help: suggest next checks | §8.5, §12 | — |
| 24-§16-7 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §16 scheduled AI creates no new authority to execute business decisions | §8.5, §10.3, §12 | — |
| 24-§18-1b | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §18 example Receipt→Ledger→Ask CFO→Daily Intelligence, steps 5–6 | §8.6, §15, §12 | — |
| 24-§18-2 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §18 example Voice→Reminder→Domain Action | §8.2, §15, §12 | — |
| 24-§18-3 | ASSIGNED TO LATER MISSION | SB-P-1.17 | C24@0c1dcbb2 | §18 example Stock→Reorder→Supplier→Reminder: follow-up uses the shared Reminder Engine (reuse seam) | §11.1, §12 | — |
| 24-§27-3 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §27 consistent assistant across dashboard intelligence surfaces | §8.6, §12 | — |
| 24-§31-9 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §31 acceptance 9: Ask CFO remains read-only | §8.6, §15, §12 | — |
| 24-§31-10 | IN SCOPE | SB-P-1.15 | C24@0c1dcbb2 | §31 acceptance 10: reminder creation routes to the shared Reminder Engine | §8.1, §15, §12 | — |
| 9-§9-5 | DELEGATED | SB-P-1.13 | C9@649c55f3 | §9 clarify unclear reminder time/date (language capability) | §11.2, §12 | — |
| 9-§12-2 | IN SCOPE | SB-P-1.15 | C9@649c55f3 | §12 Human Language Layer reused by Ask CFO (reuse verified by consumer) | §8.6, §10.2, §12 | — |
| 9-§12-3 | IN SCOPE | SB-P-1.15 | C9@649c55f3 | §12 Human Language Layer reused by Daily Intelligence (reuse verified by consumer) | §8.5, §10.2, §12 | — |
| 9-§12-6 | IN SCOPE | SB-P-1.15 | C9@649c55f3 | §12 Human Language Layer reused by Reminder/Delegated Automation (reuse verified by consumer) | §8.1, §10.2, §12 | — |
| 9-§17-5 | IN SCOPE | SB-P-1.15 | C9@649c55f3 | §17 acceptance 5: reminder date/time clarification | §8.1, §15, §12 | — |
| 9-§17-6 | IN SCOPE | SB-P-1.15 | C9@649c55f3 | §17 acceptance 6: Ask CFO response in user's preferred language | §8.6, §15, §12 | — |
| 10-§5-5 | IN SCOPE | SB-P-1.15 | C10@5c145ed7 | §5 Workspace output: Ask CFO responses | §8.6, §12 | — |
| 10-§5-7 | IN SCOPE | SB-P-1.15 | C10@5c145ed7 | §5 Workspace output: reminders presented for human choice | §8.1, §12 | FDB-2 |
| 10-§9-1 | IN SCOPE | SB-P-1.15 | C10@5c145ed7 | §9 Ask CFO available through the Workspace under the same read-only boundary | §8.6, §12 | — |
| 10-§9-2 | IN SCOPE | SB-P-1.15 | C10@5c145ed7 | §9 Ask CFO may retrieve/explain/compare/identify patterns/suggest/offer continuation (single capability list) | §8.6, §12 | — |
| 10-§9-3 | DELEGATED | SB-P-1.13 | C10@5c145ed7 | §9 Ask CFO gains no record-write authority because displayed in the app (kernel read/write tool separation) | §11.2, §12 | — |
| 10-§11-4 | IN SCOPE | SB-P-1.15 | C10@5c145ed7 | §11 Workspace voice supports reminders | §8.1, §12 | — |
| 10-§13-4 | IN SCOPE | SB-P-1.15 | C10@5c145ed7 | §13 Workspace example action: create a reminder | §8.1, §15, §12 | — |
| 10-§23-4 | IN SCOPE | SB-P-1.15 | C10@5c145ed7 | §23 acceptance 4: Owner uses Ask CFO without granting record-write authority | §8.6, §15, §12 | — |
| 12-§4-2 | IN SCOPE | SB-P-1.15 | C12@6d48feff | §4 Basic Voice supports Ask CFO questions | §8.6, §12 | — |
| 12-§4-3 | IN SCOPE | SB-P-1.15 | C12@6d48feff | §4 Basic Voice supports reminder creation | §8.1, §12 | — |
| 12-§11-6 | IN SCOPE | SB-P-1.15 | C12@6d48feff | §11 Workspace voice preserves the same Ask CFO behavior | §8.6, §12 | — |
| 12-§12-1 | IN SCOPE | SB-P-1.15 | C12@6d48feff | §12 Basic Voice Ask CFO question: concise voice answer plus text detail | §8.6, §12 | — |
| 12-§12-2 | ASSIGNED TO LATER MISSION | SB-P-1.19 | C12@6d48feff | §12 Voice Plus deepens Ask CFO conversation | §11.1, §12 | — |
| 12-§12-3 | IN SCOPE | SB-P-1.15 | C12@6d48feff | §12 Ask CFO read-only regardless of voice tier | §8.6, §10.3, §12 | — |
| 12-§13-1 | IN SCOPE | SB-P-1.15 | C12@6d48feff | §13 user may create reminders by voice | §8.1, §12 | — |
| 12-§13-2 | IN SCOPE | SB-P-1.15 | C12@6d48feff | §13 offer a shared Reminder to resume an Ask CFO/Voice Plus discussion | §8.1, §12 | — |
| 12-§13-3 | DELEGATED | SB-P-1.13 | C12@6d48feff | §13 voice must not create a separate reminder engine | §11.2, §12 | — |
| 12-§21-3 | IN SCOPE | SB-P-1.15 | C12@6d48feff | §21 acceptance 3: Basic Ask CFO voice question: short audio plus accurate text detail | §8.6, §15, §12 | — |
| 12-§21-4 | IN SCOPE | SB-P-1.15 | C12@6d48feff | §21 acceptance 4: voice reminder creation | §8.1, §15, §12 | — |
| 3-§13-1 | IN SCOPE | SB-P-1.15 | C3@d8c26c07 | §13 Ask CFO reads authorized Ledger information | §8.6, §12 | — |
| 3-§13-2 | IN SCOPE | SB-P-1.15 | C3@d8c26c07 | §13 Ask CFO remains read-only intelligence | §8.6, §10.3, §12 | — |
| 3-§13-3 | IN SCOPE | SB-P-1.15 | C3@d8c26c07 | §13 Ask CFO continuation into a reminder/action passes through the execution/confirmation service | §8.2, §12 | — |
| 3-§14-1 | IN SCOPE | SB-P-1.15 | C3@d8c26c07 | §14 Daily Intelligence consumes authorized Ledger events at 7:00 / 10:30 / 22:00 | §8.5, §12 | — |
| 3-§14-2 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §14 Ledger is the business-memory source; Daily Intelligence is a scheduled clarity layer over it | §11.2, §12 | — |
| 3-§15-6 | IN SCOPE | SB-P-1.15 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Smart Reminder Engine | §8.1, §10.2, §12 | — |
| 3-§17-7 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §17 handle: failed downstream notification (Ledger slice; delivery is 22-§12-*) | §11.2, §12 | — |
| 3-§19-11 | DELEGATED | SB-P-1.14 | C3@d8c26c07 | §19 acceptance 11: Owner-only financial intelligence boundary (Ledger slice) | §11.2, §12 | — |
| 17-§11-1 | IN SCOPE | SB-P-1.15 | C17@7943f74a | §11 workspace exposes Ask CFO and Daily Intelligence without separate intelligence stacks | §8.6, §10.2, §12 | — |
| 17-§11-2 | IN SCOPE | SB-P-1.15 | C17@7943f74a | §11 Ask CFO uses shared read-only business reasoning | §8.6, §10.3, §12 | — |
| 17-§11-3 | IN SCOPE | SB-P-1.15 | C17@7943f74a | §11 Daily Intelligence shows the same current schedule/content truth through approved channels | §8.5, §12 | FDB-2 |
| 17-§22-7 | IN SCOPE | SB-P-1.15 | C17@7943f74a | §22 acceptance 7: Ask CFO remains read-only | §8.6, §15, §12 | — |
| 20-§12-6 | ASSIGNED TO LATER MISSION | SB-P-1.19 | C20@56ed4d11 | §12 first-24-hour journey: scheduled Daily Intelligence when required data/features are available (journey owned by SB-P-1.19) | §11.1, §12 | — |
| 20-§23-10 | ASSIGNED TO LATER MISSION — HELD: ALLOCATION UNRESOLVED (U-3) | SB-P-1.19/SB-P-1.15 (inherited verbatim) | C20@56ed4d11 | §23 acceptance 10: current Daily Intelligence times used, not historical 06:00/09:15 | §11.1, §12 | U-3 |
| BP-§9-4 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §9 row 4: SB-P-1.15 Reminder, Daily Intelligence & Ask CFO advances Contracts 2, 4, 11 (assignment lock) | §8.8, §10.2 | — |
| BP-§10.4-O | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 product outcome: reduce Owner mental load while preserving human authority | §8.8, §15 | — |
| BP-§10.4-W1 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 work area 1: shared Reminder Engine | §8.1, §12 | — |
| BP-§10.4-W2 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 work area 2: done/snooze/reschedule | §8.1, §12 | — |
| BP-§10.4-W3 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 work area 3: recurring reminders with occurrence/history discipline | §8.1, §12 | — |
| BP-§10.4-W4 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 work area 4: bounded delegated continuation | §8.2, §12 | — |
| BP-§10.4-W5 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 work area 5: Daily Intelligence at 7:00 AM / 10:30 AM / 10:00 PM | §8.5, §12 | — |
| BP-§10.4-W6 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 work area 6: Ask CFO read-only intelligence | §8.6, §12 | — |
| BP-§10.4-W7 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 work area 7: permission-scoped retrieval | §8.6, §12 | — |
| BP-§10.4-W8 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 work area 8: fact vs estimate/pattern/risk/recommendation distinction | §8.6, §12 | — |
| BP-§10.4-W9 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 work area 9: insight to action only through explicit continuation or valid bounded delegation | §8.2, §12 | — |
| BP-§10.4-E1 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 experience: Ask CFO explains and clarifies; it does not execute writes | §8.6, §15, §12 | — |
| BP-§10.4-E2 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 experience: Daily Intelligence prioritizes useful exceptions over information overload | §8.5, §15, §12 | — |
| BP-§10.4-E3 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 experience: Manager/Employee access stays permission-scoped when asked conversationally | §8.6, §15, §12 | — |
| BP-§10.4-A1 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 Founder Scenario A part 1: "Remind me Friday to pay this supplier" creates the correct reminder | §8.8, §15, §12 | FDB-2 |
| BP-§10.4-A2 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 Founder Scenario A part 2: at due time the consequential payment still needs confirmation unless explicit bounded Owner delegation exists | §8.8, §15, §12 | FDB-2 |
| BP-§10.4-B1 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 Founder Scenario B part 1: Owner asks "Who owes me money?" and gets contextual authorized information | §8.8, §15, §12 | FDB-3 |
| BP-§10.4-B2 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 Founder Scenario B part 2: Manager without that delegated intelligence gets only the permitted subset | §8.8, §15, §12 | — |
| BP-§10.4-B3 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 Founder Scenario B part 3: evidence shows no write occurred from Ask CFO | §8.8, §15, §12 | — |
| BP-§10.4-X | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §10.4 exit principle (remembers, attends, helps think; never owns the business) | §8.8, §15 | — |
| BP-§6.2 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §6.2 one Business Command / Action Path, reused from reminders/automation | §8.2, §10.2, §12 | — |
| BP-§6.5 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §6.5 one Reminder / Automation Kernel reused by all time-based behaviour | §8.1, §10.2, §12 | — |
| BP-§8 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §8 Smart Business works without WhatsApp: native proof possible with Meta disconnected before SB-P-1.20 | §8.8, §10.2, §12 | FDB-2 |
| BP-§11-4 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §11 dependency: 1.15 Reminder/Automation underpins Compliance, supplier/reorder, credit follow-up and other time-based workflows | §8.1, §10.2, §12 | — |
| BP-§13 | IN SCOPE | SB-P-1.15 | BP@9dfdd924 | §13 Completion Report Experience Verification Matrix (seeded at Stage 4) | §8.8, §10.2 | — |
| BP-§15-6 | UNRESOLVED FOUNDER DECISION | Founder | BP@9dfdd924 | §15 item 6: long-term retention/deletion duration after cancellation/non-payment | §11.5, §12 | U-5 |
| BP-§16-1 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 1: Ask CFO as write-capable authority | §11.3 | — |
| BP-§16-2 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 2: AI accusation/judgment of employees or customers | §11.3 | — |
| BP-§16-3 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 3: continuous staff GPS surveillance by default | §11.3 | — |
| BP-§16-4 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 4: automated wage punishment | §11.3 | — |
| BP-§16-5 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 5: blind supplier procurement without valid Owner delegation | §11.3 | — |
| BP-§16-6 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 6: hard credit blocking by default | §11.3 | — |
| BP-§16-7 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 7: custom client-specific POS modification inside core | §11.3 | — |
| BP-§16-8 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 8: marketplace behavior inside Smart Order & Delivery | §11.3 | — |
| BP-§16-9 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 9: customer silence automatically invalidating proven delivery | §11.3 | — |
| BP-§16-10 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 10: duplicate channel-specific Business Memory | §11.3 | — |
| BP-§16-11 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 11: duplicate channel-specific permission models | §11.3 | — |
| BP-§16-12 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 12: separate AI brains per feature/channel | §11.3 | — |
| BP-§16-13 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 13: model conversation history as permanent Business Memory | §11.3 | — |
| BP-§16-14 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 14: uncontrolled binary-media concentration in Supabase | §11.3 | — |
| BP-§16-15 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 15: provider URLs as permission authority/business identity | §11.3 | — |
| BP-§16-16 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 16: destructive subscription-driven schema creation/deletion | §11.3 | — |
| BP-§16-17 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 17: broad routine Super Admin access to merchant private data | §11.3 | — |
| BP-§16-18 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 18: revival of /survey or obsolete domains/routes | §11.3 | — |
| BP-§16-19 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 19: old Daily Intelligence timing conflicting with 7:00 / 10:30 / 22:00 | §11.3 | — |
| BP-§16-20 | OUT OF BUILD SCOPE | SB-P-1.15 | BP@9dfdd924 | §16 rejection 20: independent Catalog product expansion | §11.3 | — |

#### Post-FCTM Founder-decision overlay (not an FCTM row; not counted above)

| Overlay | Basis | Related FCTM row | Blueprint location |
|---|---|---|---|
| `O-FDB-1` | SB-P-1.15-FPDR-01 §2; Δ-04 | `22-§12-8` (related capability only) | Sections 9, 10.1, 13, 15.4 |
