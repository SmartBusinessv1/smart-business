# SB-P-1.17 — Stage 2 Independent Obligation Inventory

**Mission:** SB-P-1.17 — Manager Operations\
**Status:** `DRAFT STAGE 2 OUTPUT — NOT CANONICAL UNTIL MISSION CONTROL STAGE 2 REVIEW AND FOUNDER HUMAN MERGE`\
**Baseline:** `main@44895d2c0b2f4ff46f3f750bb7eec4cc8b80423d`, 2026-10-20\
**Prepared by:** Claude Code, Definition Actor, under `05-stage2-discovery-authorization.md`

This inventory is taken from the source text and kept separate from the FCTM (Source 18 §3.2 item 6). It lists pointers to numbered sections, separately verifiable units and acceptance items. It restates no requirement and cites no FCTM row ID. Mission Control tests it against the source text at Stages 5 and 8; the Stage 19 verifier takes its own inventory.

**Independence limitation.** The same actor prepared this inventory and the FCTM, using the same deterministic parser for C7, C13 and C17. The set comparison therefore proves internal consistency and catches omissions in the disposition layer; it is not an independent second reading. The only cross-authored check is the comparison with upstream FCTM identifiers (completion report Section 4), which were written by earlier Definition Actor sessions for other missions.

## 1. Method

- **Parser.** Each source is read with `git show main@44895d2c:<path>`. `## N.` headings are sections; `### ` headings are subsection labels. `b<k>` is the k-th bullet, `n<k>` the k-th numbered item and `p<k>` the k-th prose paragraph within the section (blockquotes count as prose). This is the method SB-P-1.15 and SB-P-1.16 used.
- **Lead-ins.** A prose paragraph whose last character is `:` is a lead-in (list introduction or example label). It carries no separately verifiable obligation.
- **Acceptance items.** C7 §15 lists its 12 scenarios as bullets; C13 §21 (11) and C17 §22 (10) number theirs. All 33 are counted individually.
- **Delegated contracts.** Every unit of every other contract is screened with the pattern `stock|inventor|supplier|reorder|\bPOS\b|counter|closing|cash count|wastage|spoil|expiry|freshness|procure|purchas|opening|Manager|dashboard|workspace|shrink|void|discount` (unit text or section title). A hit is a candidate touch; Section 4 records the count per contract and how touched units are carried.

## 2. Sources inventoried

| Source | Blob | Numbered sections | Separately verifiable units (non-lead-in) | Lead-ins | Acceptance items |
|---|---|---|---|---|---|
| C7 | `65ad91b2` | §1–§18 (18) | 108 | 12 | §15: 12 (b1–b12) |
| C13 | `4426e8b1` | §1–§24 (24) | 159 | 18 | §21: 11 (n1–n11) |
| C17 | `7943f74a` | §1–§25 (25) | 154 | 16 | §22: 10 (n1–n10) |

### Contract 7 — Stock, Supplier & Reorder Intelligence

| Section | Obligation pointers (source order) | Lead-ins | Acceptance items |
|---|---|---|---|
| §1 Feature Identity | p1, p2 | — | — |
| §2 Core Stock Capabilities | b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, p2 | p1 | — |
| §3 Supplier Management | p1, b1, b2, b3, b4, b5, b6, b7, p3 | p2 | — |
| §4 Reorder Intelligence | p1, b1, b2, b3, b4, b5, p3 | p2 | — |
| §5 Reorder Authority | p2, p3, p4, p5 | p1 | — |
| §6 Imports and Documents | p1, p3, p4 | p2 | — |
| §7 POS Relationship | p1, p2, p3, p4 | — | — |
| §8 Ledger Relationship | p1, b1, b2, b3, b4 | p2 | — |
| §9 Manager vs Ledger Packaging | p1<Manager>, p2<Ledger>, p3<Ledger> | — | — |
| §10 Roles and Permissions | p1<Owner>, p2<Manager>, p3<Employee / Staff>, p4<Supplier> | — | — |
| §11 AI Behaviour | b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11 | p1, p2 | — |
| §12 Shared Foundations | b1, b2, b3, b4, b5, b6, b7, b8, b9 | p1 | — |
| §13 Failure and Exception Handling | b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, p2 | p1 | — |
| §14 Privacy and Dignity | p1, p2 | — | — |
| §15 Acceptance Scenarios | b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12 | p1 | 12 |
| §16 Non-goals / Rejected Historical Behaviour | b1, b2, b3, b4, b5, b6 | p1 | — |
| §17 Dependencies | p1 | — | — |
| §18 Completion Gate | p1 | — | — |

### Contract 13 — POS Connection, Counter Intelligence & Closing Cash

| Section | Obligation pointers (source order) | Lead-ins | Acceptance items |
|---|---|---|---|
| §1 Feature Identity | p1, p2 | — | — |
| §2 Founder Problem Statement | b1, b2, b3, b4, b5, p2 | p1 | — |
| §3 Lighthouse Principles | b1, b2, b3, b4, b5, b6, b7 | — | — |
| §4 Standard POS Bridge | p1, b1, b2, b3, b4, b5, b6, b7, b8, p3 | p2 | — |
| §5 Integration Boundary | p1, b1, b2, b3, b4, p3 | p2 | — |
| §6 POS Data and Business Memory | b1, b2, b3, b4, b5, p2 | p1 | — |
| §7 Inventory Relationship | b1, b2, b3, b4, p2 | p1 | — |
| §8 Counter Intelligence | b1, b2, b3, b4, b5, b6, b7, p2, p4, p6 | p1, p3, p5 | — |
| §9 Human Context | p1, b1, b2, b3, b4, b5, p3 | p2 | — |
| §10 Closing Cash | b1, b2, b3, b4, b5, b6, b7, p2 | p1 | — |
| §11 Daily Intelligence Relationship | p1, b1, b2, b3, b4, b5, p3 | p2 | — |
| §12 Ask CFO Relationship | p1, b1, b2, b3, p3 | p2 | — |
| §13 Users and Permissions | p1<Owner>, p2<Manager>, p3<Employee/counter staff>, p4<Platform/support> | — | — |
| §14 Human Language and Channels | p1, p2 | — | — |
| §15 Confirmation and Consequential Actions | b1, b2, b3, b4, b5, b6, b7, p2 | p1 | — |
| §16 Error and Exception Behavior | b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, p2 | p1 | — |
| §17 Data and Audit Requirements | b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12 | p1 | — |
| §18 Privacy and Dignity | b1, b2, b3, b4, b5 | — | — |
| §19 Shared Foundations to Reuse | b1, b2, b3, b4, b5, b6, b7, b8, b9, b10 | p1 | — |
| §20 Explicit Non-goals | b1, b2, b3, b4, b5, b6, b7 | — | — |
| §21 Acceptance Scenarios | n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11 | p1 | 11 |
| §22 Historical Corrections / Superseded Behavior | b1, b2, b3, b4, b5, p2 | p1 | — |
| §23 Provenance and Hydration Coverage | p1, p2 | — | — |
| §24 Completion Gate | p1 | — | — |

### Contract 17 — Operational Dashboard & Manager Workspace

| Section | Obligation pointers (source order) | Lead-ins | Acceptance items |
|---|---|---|---|
| §1 Feature Identity | p1, p2 | — | — |
| §2 Founder Problem Statement | b1, b2, b3, b4, b5, b6, b7, b8, p2 | p1 | — |
| §3 Lighthouse Principles | b1, b2, b3, b4, b5, b6, b7 | — | — |
| §4 Workspace Layers | b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, p4 | p1, p2, p3 | — |
| §5 Conversation Workspace Placement | p1, p2, b1, b2, b3, b4, b5, b6 | p3 | — |
| §6 Financial / Business Summary | b1, b2, b3, b4, b5, b6, p2, p3 | p1 | — |
| §7 Inventory / Supplier / Reorder Views | b1, b2, b3, b4, b5, b6, b7, p2 | p1 | — |
| §8 POS / Counter / Closing Cash Views | b1, b2, b3, b4, b5, p2 | p1 | — |
| §9 Staff / HR Views | b1, b2, b3, b4, b5, b6, p2 | p1 | — |
| §10 Order & Delivery Views | b1, b2, b3, b4, b5, b6, p2 | p1 | — |
| §11 Ask CFO and Daily Intelligence | p1, p2, p3 | — | — |
| §12 Documents and Receipt Cabinet | p1, p2 | — | — |
| §13 Users and Permissions | p1<Owner>, p2<Manager>, p3<Employee>, p4<Customer/Supplier/Delivery Staff> | — | — |
| §14 Permission Enforcement | p1, b1, b2, b3, b4, b5, p3 | p2 | — |
| §15 Personalization and Navigation | p1, b1, b2, b3, b4, b5, b6, p3 | p2 | — |
| §16 Stable UI/Testability | p1, p2 | — | — |
| §17 Error and Exception Behavior | b1, b2, b3, b4, b5, b6, b7, b8, p2 | p1 | — |
| §18 Privacy and Trust | b1, b2, b3, b4, b5 | — | — |
| §19 Performance Expectations | p1, p2 | — | — |
| §20 Shared Foundations to Reuse | b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12 | p1 | — |
| §21 Explicit Non-goals | b1, b2, b3, b4, b5 | — | — |
| §22 Acceptance Scenarios | n1, n2, n3, n4, n5, n6, n7, n8, n9, n10 | p1 | 10 |
| §23 Historical Corrections / Superseded Behavior | p1, b1, b2, b3 | p2 | — |
| §24 Provenance and Hydration Coverage | p1, p2 | — | — |
| §25 Completion Gate | p1 | — | — |

## 3. Build Plan and GPCV units in scope of the screen

| Source | Units inventoried |
|---|---|
| Build Plan §3 | core philosophy (respect existing merchant habits) — 1 unit applied |
| Build Plan §5.3, §5.4 | delivery divergence; new external infrastructure (POS) — 2 |
| Build Plan §6.1, §6.2, §6.3, §6.5, §6.6 | authority, command path (names future standard POS adapters), Business Memory, reminder kernel (names supplier continuation), thin adapters — 5 |
| Build Plan §7 | Product & Price Master: preserve list, import foundations, relationships, do-not list, target treatment — 5 (SB-P-1.12 identifiers) |
| Build Plan §8 | works without WhatsApp — 1 |
| Build Plan §9 | row 6 assignment; assignment lock — 2 |
| Build Plan §10.3 | search-sequencing clarification (directory-indexed search, SB-P-1.17 / SB-P-1.18) — 1 |
| Build Plan §10.6 | product outcome (1); required work areas b1–b12 (12); Founder-approved experience p1–p3 (3); Founder Scenario A clauses 1–4 (4); Founder Scenario B clauses 1–2 (2); exit principle (1) — 23 |
| Build Plan §11 | seven dependency rules — 7 |
| Build Plan §13, §14 | Experience Verification Matrix seeding; Founder-reserved scenarios; dual intake — 3 |
| Build Plan §15 | unresolved Founder decisions 1–9 — 9 |
| Build Plan §16 | rejections b1–b20 — 20 |
| GPCV §5 | rows 7, 13, 17 — 3 |
| GPCV §9 | reject/separate-product items 1–11 — 11 |
| GPCV §11 | opening-stock disposition — 2 |

## 4. Delegated-contract keyword screen

| Contract | Blob | Candidate hits (non-lead-in units) | Units judged to touch this mission | Rows carrying them | How carried |
|---|---|---|---|---|---|
| C1 Smart Order & Delivery | `b392c8cb` | 17 | 6 | 6 | stock/availability consumers (SB-P-1.18) |
| C2 Ask CFO | `53635557` | 61 | 17 | 17 | SB-P-1.15 readers of stock, supplier, POS and counter data |
| C3 Ledger & Business Memory | `d8c26c07` | 23 | 9 | 11 | SB-P-1.14 identifiers; adds joint rows `3-§9-3`, `3-§11-6` inherited by assignment |
| C4 Daily Intelligence | `ce940d25` | 29 | 11 | 11 | SB-P-1.15 readers |
| C5 UDI | `80ac648e` | 11 | 7 | 8 | SB-P-1.14 identifiers; `5-§4-10`, `5-§6-11` carry the stock slices |
| C6 Staff/HR | — | 1 | 0 | 0 | channel sentence only; Build Plan §10.7 B actor identity in Stock belongs to SB-P-1.18 |
| C8 Support Automation | — | 4 | 0 | 0 | FAQ topics and import-error containment; no Manager Operations behaviour |
| C9 Human Language | `649c55f3` | 6 | 3 | 3 | SB-P-1.13 identifiers |
| C10 Conversation Workspace | `5c145ed7` | 28 | 3 | 3 | SB-P-1.13 identifiers; other hits are the word "workspace" |
| C11 Reminder & Delegated Automation | `e802745a` | 18 | 11 | 11 | SB-P-1.15 identifiers incl. the §12 reorder example |
| C12 Voice | `6d48feff` | 21 | 6 | 4 | SB-P-1.13 identifiers; §9 vocabulary bullets b2–b4 are one SB-P-1.13 row (`12-§9-2`) |
| C14 Smart Credit | — | 3 | 0 | 0 | "manual workspace entry", duplicate-fact avoidance, channels |
| C15 Payment Verification | `632f3402` | 5 | 3 | 3 | SB-P-1.16 identifiers |
| C16 Compliance Shield | — | 15 | 0 | 0 | compliance-document expiry, not stock expiry |
| C18 Subscription | `6b96b10a` | 6 | 2 | 2 | unresolved Smart Stock Assistant price |
| C19 Super Admin | — | 2 | 0 | 0 | health-view privacy, grant expiry |
| C20 Onboarding | `56ed4d11` | 13 | 3 | 2 | SB-P-1.12 section-level rows `20-§5`, `20-§9` |
| C21 Permissions | `f4a05d5c` | 25 | 7 | 13 | SB-P-1.12 identifiers; adds `21-§12-1`–`-5` (delegated automation), `21-§4-2` and `21-§11-2`, whose units the screen pattern did not match, and `21-§24-3`, whose unit (§24 n3) is a keyword hit carried by Part D but not counted among the 7 judged units (clarified at MC-380A) |
| C22 Shared Foundations | `61e1bb91` | 21 | 9 | 8 | SB-P-1.12 identifiers; `22-§4` b3 and b4 are one section row; §2 b3 is narrative |
| C23 WhatsApp | `2430e1c6` | 25 | 8 | 8 | SB-P-1.20 slices (parser identifiers; no upstream unit identifiers exist) |
| C24 AI Orchestration | `0c1dcbb2` | 25 | 12 | 5 | SB-P-1.13 identifiers: §6 b5–b6 in `24-§6-2`, §9 b3/b4/b9 in `24-§9-2`, §18 n13–n17 in `24-§18-3`. Of these, n15 is not a keyword hit; it is counted as part of the sequence. The row also carries n18, which is not counted among the 12 (clarified at MC-380A) |
| C25 Storage | `406ce089` | 12 | 1 | 1 | SB-P-1.14 identifier `25-§6-1` |
| **Total** | | **371** | **118** | **116** | |

Hits judged not to touch fall into four classes: the word "workspace" meaning the Conversation Workspace; the word "Manager" in another feature's role statement (owned by that feature's mission and by `D12`); generic "avoid duplicate …" wording; and compliance or credit "expiry". Each judgement is reviewable from the hit list, which is regenerated by running the same pattern over the blobs.

**Clarification (MC-380A).** The "Units judged" column is not a strict subset of the "Candidate hits" column. 117 of the 118 judged units are keyword hits; C24 §18 n15 is judged as part of the n13–n17 sequence without a keyword hit. C21 §24 n3 is a keyword hit, carried by Part D as `21-§24-3`, but is not among the 118. The counts in the table are unchanged; the unit-level evidence is in `claude-code/g10-07-evidence/MC-375A-evidence-package.md` (D-04, D-05).

**STOP FOR MISSION CONTROL STAGE 2 REVIEW.**
