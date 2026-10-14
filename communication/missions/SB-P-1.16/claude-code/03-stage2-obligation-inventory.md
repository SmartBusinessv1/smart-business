# SB-P-1.16 — Stage 2 Independent Obligation Inventory

**Mission:** SB-P-1.16 — Financial Integrity & Credit  
**Status:** `DRAFT STAGE 2 OUTPUT — NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`  
**Baseline:** `main@e4e382c73824f02e83ad4ee2497e5e046fd74086`, 2026-10-14  
**Prepared by:** Claude Code, Definition Actor (MC-107 §13.1), under MC-106 as activated by MC-109

This inventory is taken from the source text and kept separate from the FCTM (Source 18 §3.2 item 6). It lists pointers to numbered sections, separately verifiable units and acceptance items. It restates no requirement and cites no FCTM row ID. Mission Control tests it against the source text at Stages 5 and 8; the Stage 19 verifier takes its own inventory.

**Independence limitation.** The same actor prepared this inventory and the FCTM, using the same deterministic parser for C14 and C15. The set comparison therefore proves internal consistency and catches omissions in the disposition layer; it is not an independent second reading. For Contract 03 the parser output is compared with SB-P-1.14's separately authored rows (Section 2, Contract 03 table), which is a genuine cross-check of that contract's granularity.

## 1. Method

- **Parser.** Each source is read from its blob at the baseline. `## N.` headings are sections; `### ` headings are subsection labels. `b<k>` is the k-th bullet, `n<k>` the k-th numbered item and `p<k>` the k-th prose paragraph within the section (blockquotes count as prose).
- **Lead-ins.** A prose paragraph whose last character is `:` is a lead-in (list introduction or example label). It carries no separately verifiable obligation.
- **Delegated contracts.** Every unit of every delegated contract is screened with the pattern `credit|repay|payment|reconcil|owe|COD|settle|bank`. A hit is a candidate touch; Section 4 records each hit and whether it concerns this mission's subject.

## 2. Sources inventoried

| Source | Blob | Numbered sections | Separately verifiable units (non-lead-in) | Lead-ins | Numbered acceptance items |
|---|---|---|---|---|---|
| C14 | `16914a83` | §1–§25 (25) | 151 | 18 | §22: 11 (n1–n11) |
| C15 | `632f3402` | §1–§28 (28) | 172 | 20 | §25: 12 (n1–n12) |
| C3 | `d8c26c07` | §1–§23 (23) | 174 | 21 | §19: 14 bullet items (unnumbered) |
| Build Plan | `9dfdd924` | §5.3, §5.4, §6.1–6.5, §8, §9 row 5, §10.3, §10.5, §11, §13, §14, §15, §16 | see Section 5 | — | §10.5 Founder Runtime Scenarios A and B |
| GPCV | `ee76d920` | §9 (rows 3, 14, 15 in §5 read for classification) | 2 rejection items | — | — |

### Contract 14 — Smart Credit Awareness

| Section | Treatment | Obligation pointers (source order) | Lead-ins | Acceptance items |
|---|---|---|---|---|
| §1 Feature Identity | expanded to unit level | p1, p2 | — | — |
| §2 Founder Problem Statement | expanded to unit level | p1, b1, b2, b3, b4, b5, b6, p3 | p2 | — |
| §3 Lighthouse Principles | expanded to unit level | b1, b2, b3, b4, b5, b6, b7 | — | — |
| §4 Customer Credit Identity | expanded to unit level | p1, b1, b2, b3, b4, p3 | p2 | — |
| §5 Core Credit Facts | expanded to unit level | b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13 | p1 | — |
| §6 Credit Recording | expanded to unit level | b1, b2, b3, b4, b5, p2 | p1 | — |
| §7 Repayment | expanded to unit level | p1, b1, b2, b3, b4, b5, p3 | p2 | — |
| §8 Merchant-defined Thresholds / Limits | expanded to unit level | p1, p2, b1, b2, b3, b4, p4 | p3 | — |
| §9 Warn — Do Not Block by Default | expanded to unit level | p1, p3, b1, b2, b3, b4, b5, b6, p5 | p2, p4 | — |
| §10 Collection Follow-up | expanded to unit level | p1, p2, b1, b2, b3, b4 | p3 | — |
| §11 Ask CFO Relationship | expanded to unit level | b1, b2, b3, b4, p2 | p1 | — |
| §12 Daily Intelligence Relationship | expanded to unit level | b1, b2, b3, b4, b5, p2 | p1 | — |
| §13 Orders / Delivery Relationship | expanded to unit level | b1, b2, b3 | p1 | — |
| §14 Users and Permissions | expanded to unit level | p1<Owner>, p2<Manager>, p3<Employee>, p4<Customer> | — | — |
| §15 Human Language and Channels | expanded; unit split between missions: p1 | p1, p2 | — | — |
| §16 Confirmation and Clarification | expanded to unit level | b1, b2, b3, b4, b5, p2 | p1 | — |
| §17 Corrections and Audit | expanded to unit level | p1, b1, b2, b3, b4 | p2 | — |
| §18 Error and Exception Behavior | expanded to unit level | b1, b2, b3, b4, b5, b6, b7, b8, p2 | p1 | — |
| §19 Privacy and Dignity | expanded to unit level | b1, b2, b3, b4, b5 | — | — |
| §20 Shared Foundations to Reuse | expanded to unit level | b1, b2, b3, b4, b5, b6, b7, b8, b9, b10 | p1 | — |
| §21 Explicit Non-goals | expanded to unit level | b1, b2, b3, b4, b5, b6 | — | — |
| §22 Acceptance Scenarios | expanded to unit level | n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11 | p1 | 11 |
| §23 Historical Corrections / Superseded Behavior | expanded to unit level | b1, b2, b3, b4, p2 | p1 | — |
| §24 Provenance and Hydration Coverage | whole section (one non-IN SCOPE disposition) | p1, p2 | — | — |
| §25 Completion Gate | expanded to unit level | p1 | — | — |

### Contract 15 — Payment Verification & Bank Reconciliation

| Section | Treatment | Obligation pointers (source order) | Lead-ins | Acceptance items |
|---|---|---|---|---|
| §1 Feature Identity | expanded to unit level | p1, p2 | — | — |
| §2 Founder Problem Statement | expanded to unit level | b1, b2, b3, b4, b5, b6, b7, p2 | p1 | — |
| §3 Lighthouse Principles | expanded to unit level | b1, b2, b3, b4, b5, b6, b7 | — | — |
| §4 Payment Verification States | expanded to unit level | b1, b2, b3, b4, b5, b6, b7, p2 | p1 | — |
| §5 Evidence Sources | expanded to unit level | b1, b2, b3, b4, b5, b6, b7, p2 | p1 | — |
| §6 Evidence Ingestion | expanded to unit level | b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, p2 | p1 | — |
| §7 Matching Principles | expanded to unit level | b1, b2, b3, b4, b5, b6, b7, b8, p2, p3 | p1 | — |
| §8 Strong Match | expanded to unit level | b1, b2, b3, b4, b5, b6, p2 | p1 | — |
| §9 Ambiguous Match | expanded to unit level | b1, b2, b3, b4, b5, p2 | p1 | — |
| §10 Mismatch | expanded to unit level | b1, b2, b3, b4, b5 | p1 | — |
| §11 Unlinked Evidence | expanded to unit level | p1, b1, b2, b3, b4 | p2 | — |
| §12 Duplicate Evidence and Idempotency | expanded to unit level | p1, b1, b2, b3, b4, p3 | p2 | — |
| §13 Reversals / Corrections | expanded to unit level | p1, p2, p3 | — | — |
| §14 Smart Credit Relationship | expanded to unit level | p1, b1, b2, b3 | p2 | — |
| §15 Order & Delivery / COD Relationship | expanded to unit level | p1, b1, b2, b3, b4, b5, p3 | p2 | — |
| §16 Ask CFO and Daily Intelligence | expanded to unit level | b1, b2, b3, b4, b5, p2 | p1 | — |
| §17 Users and Permissions | expanded to unit level | p1<Owner>, p2<Manager>, p3<Employee>, p4<Platform/support> | — | — |
| §18 Channels and Language | expanded; unit split between missions: p1 | p1, p2 | — | — |
| §19 Confirmation and Authority | expanded to unit level | b1, b2, b3, b4, p2 | p1 | — |
| §20 Failure Containment | expanded to unit level | b1, b2, b3, b4, p2 | p1 | — |
| §21 Error and Exception Behavior | expanded to unit level | b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11 | p1 | — |
| §22 Privacy and Security | expanded to unit level | b1, b2, b3, b4, b5, b6 | — | — |
| §23 Shared Foundations to Reuse | expanded to unit level | b1, b2, b3, b4, b5, b6, b7, b8 | p1 | — |
| §24 Explicit Non-goals | expanded to unit level | b1, b2, b3, b4, b5, b6 | — | — |
| §25 Acceptance Scenarios | expanded to unit level | n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12 | p1 | 12 |
| §26 Historical Corrections / Superseded Behavior | expanded to unit level | b1, b2, b3, b4, b5, b6 | p1, p2 | — |
| §27 Provenance and Hydration Coverage | whole section (one non-IN SCOPE disposition) | p1, p2 | — | — |
| §28 Completion Gate | expanded to unit level | p1 | — | — |

### Contract 03 — Ledger & Business Memory (with SB-P-1.14 cross-check)

| Section | Units (non-lead-in) | Lead-ins | SB-P-1.14 FCTM rows for the section | Note |
|---|---|---|---|---|
| §1 Feature Identity | 3: p1, p2, p3 | — | 1 | SB-P-1.14 one section row |
| §2 Founder Problem Statement | 10: b1, b2, b3, b4, b5, b6, b7, b8, p2, p3 | p1 | 2 | SB-P-1.14 grouped units into fewer rows |
| §3 Lighthouse Principle | 7: b1, b2, b3, b4, b5, b6, b7 | p1 | 1 | SB-P-1.14 one section row |
| §4 Core Business States | 5: n1, n2, n3, n4, p2 | p1 | 6 | SB-P-1.14 split units into finer rows |
| §5 Supported Input Paths | 9: p1, b1, b2, b3, b4, p3, p5, p6, p7 | p2, p4 | 10 | SB-P-1.14 split units into finer rows |
| §6 Immediate Confirmation | 10: p1, b1, b2, b3, b4, b5, b6, b7, b8, p3 | p2 | 10 | equal |
| §7 Clarification Rules | 9: p1, b1, b2, b3, b4, b5, b6, b7, p3 | p2 | 9 | equal |
| §8 Correction and Audit History | 15: p1, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, p4 | p2, p3 | 16 | SB-P-1.14 split units into finer rows |
| §9 Searchable Business Memory | 13: b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, p3 | p1, p2 | 14 | SB-P-1.14 split units into finer rows |
| §10 Reports and Exports | 6: b1, b2, b3, b4, b5, p2 | p1 | 9 | SB-P-1.14 split units into finer rows |
| §11 Roles and Permissions | 5: p1, p2, p3, p4, p5 | — | 7 | SB-P-1.14 split units into finer rows |
| §12 WhatsApp and Conversation Workspace | 5: b1, b2, b3, p2, p3 | p1 | 5 | equal |
| §13 Relationship to Ask CFO | 3: p1, p2, p3 | — | 3 | equal |
| §14 Relationship to Daily Intelligence | 4: b1, b2, b3, p2 | p1 | 2 | SB-P-1.14 grouped units into fewer rows |
| §15 Relationship to Other Features | 13: b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13 | p1 | 13 | equal |
| §16 AI Behaviour | 14: b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14 | p1, p2 | 14 | equal |
| §17 Failure and Exception Principles | 11: b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, p2 | p1 | 11 | equal |
| §18 Privacy and Integrity | 7: p1, b1, b2, b3, b4, b5, b6 | p2 | 6 | SB-P-1.14 grouped units into fewer rows |
| §19 Acceptance Scenarios | 14: b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14 | p1 | 15 | SB-P-1.14 split units into finer rows |
| §20 Non-goals / Rejected Historical Behaviour | 6: b1, b2, b3, b4, b5, b6 | p1 | 6 | equal |
| §21 Historical Corrections Preserved | 2: p1, p2 | — | 1 | SB-P-1.14 one section row |
| §22 Implementation Dependency Rule | 2: p1, p2 | — | 2 | equal |
| §23 Completion Gate | 1: p1 | — | 1 | equal |

Every C03 section has at least one SB-P-1.14 row. Differences are granularity choices made by SB-P-1.14 (for example §9 separates counterparty-reference and directory-indexed retrieval; §19 splits item 13 into `a`/`b`); no source unit lacks an SB-P-1.14 row in the expanded sections §§9, 11, 15 and 19.

## 3. Delegated contracts — contract-wide keyword screen

Each hit is a pointer. `Concerns this mission` means the unit names credit, repayment, merchant payment evidence or reconciliation of merchant payments. Hits classified `no` concern Smart Business's own subscription billing (C18 and its C19/C20 consumers, MC-101 L.3), storage-metadata reconciliation (C25), POS closing cash (C13, adjacent), supplier payments (C07, adjacent), narrative or provenance.

| Contract | Blob | Hits (section locator) | Concerns this mission |
|---|---|---|---|
| C1 | `b392c8cb` | 21 | yes: §5 b4, §5 b18, §9 b8, §9 b16, §12 b5, §13 b5, §15 b5, §16 b2, §16 b4, §17 b6, §21 b11, §22 b10, §23 b12, §24 b12, §24 b14, §26 n11, §26 n14, §27 b9; no: §2 b6, §29 b5, §31 p2 |
| C2 | `53635557` | 11 | yes: §3 b4, §5 b2, §5 b10, §11 b2, §11 b11, §12 b2, §12 b5, §20 b7, §25 b7; no: §1 b3, §1 b11 |
| C4 | `ce940d25` | 7 | yes: §3 b2, §4 b5, §5 b2, §5 b3, §6 b2, §6 b3, §11 b4; no: none |
| C5 | `80ac648e` | 1 | yes: §5 b6; no: none |
| C7 | `65ad91b2` | 3 | yes: §3 b6; no: §7 p4, §8 b4 |
| C9 | `649c55f3` | 3 | yes: §6 p2, §9 b3, §12 b11; no: none |
| C10 | `5c145ed7` | 3 | yes: §14 b4, §17 b4; no: §25 b4 |
| C11 | `e802745a` | 7 | yes: §4 b7, §8 b4, §9 b1, §10 b2, §22 n6; no: §2 b2, §24 p1 |
| C12 | `6d48feff` | 6 | yes: §4 b1, §7 b5, §7 b6, §9 b6, §21 n1; no: §23 p1 |
| C13 | `4426e8b1` | 8 | adjacent domain (MC-101 L.3); yes: none; no: §1 p1, §2 b4, §4 b5, §4 b8, §6 b5, §7 p2, §10 b2, §23 p1 |
| C16 | `420269d8` | 1 | yes: none; no: §22 p1 |
| C17 | `7943f74a` | 6 | yes: §4 b3, §6 b3, §6 b5, §10 b5; no: §2 b5, §24 p1 |
| C18 | `6b96b10a` | 28 | yes: none; no: §1 p1, §2 b1, §2 b2, §2 p2, §3 b5, §6 b3, §7 b5, §7 p2, §8 p1, §12 p2, §14 p2, §15 p1, §15 b1, §15 b3, §16 p1, §17 b1, §18 b1, §18 b3, §18 b10, §18 p2, §19 b1, §20 b7, §21 b4, §22 n1, §22 n3, §24 p1, §24 p2, §25 n3 |
| C19 | `94aa6f24` | 5 | yes: §15 p3; no: §5 b9, §9 b2, §9 b3, §24 p1 |
| C20 | `56ed4d11` | 6 | yes: §11 b8, §12 n5; no: §10 p1, §18 b4, §23 n7, §25 p1 |
| C21 | `f4a05d5c` | 3 | yes: §4 p9, §13 b2; no: §26 p1 |
| C22 | `61e1bb91` | 7 | yes: §4 b2, §4 b8, §11 b4, §15 b1, §17 b2, §18 b5; no: §31 p1 |
| C23 | `2430e1c6` | 4 | yes: §16 b8, §20 b7, §21 b4; no: §32 b4 |
| C24 | `0c1dcbb2` | 8 | yes: §6 b9, §9 b2, §9 b10, §21 b3, §21 b4, §25 b4; no: §2 b9, §2 b10 |
| C25 | `406ce089` | 7 | yes: §6 b12, §17 p1, §17 b3; no: §23 b11, §26 n7, §29 b8, §30 b7 |

C16 Compliance Shield: the screen finds only its provenance paragraph. No direct credit or payment delegation exists (consistent with MC-101 S5). This screen is not a full C16 inventory and waives no legal or privacy requirement.

## 4. Build Plan pointers

| Section | Pointers |
|---|---|
| §5.3, §5.4 | delivery divergence rule; new-infrastructure activation rule (payment/bank evidence provider) |
| §6.1, §6.2, §6.3, §6.5 | no invented authority; one Business Command path; Postgres authoritative; one Reminder kernel (credit follow-up) |
| §8 | Smart Business works without WhatsApp |
| §9 | row 5 (SB-P-1.16: 3 completion, 14, 15); assignment-lock paragraph |
| §10.3 | engineering correction paragraph 2 (SB-P-1.16 builds customer-credit structures on the Ledger); search clarification (identities established in SB-P-1.17 / SB-P-1.18) |
| §10.5 | product outcome p1; required work areas b1–b11; Founder-approved experience p1–p4; Scenario A (one paragraph, three clauses); Scenario B (one paragraph, three clauses); exit principle |
| §11 | dependency bullets for 1.12, 1.14, 1.15, 1.16; later-mission completion rule |
| §13 | Experience Verification Matrix rule; item 9 (Founder-reserved scenarios locked at Stage 8) |
| §14 | dual-intake rule |
| §15 | items 1–9 |
| §16 | bullets b1–b20 |

GPCV §9: hard customer-credit blocking by default (`REJECT`); embedded lending/underwriting inside current core (`REJECT FOR CURRENT CORE`).

## 5. Inherited identifiers (from upstream canonical FCTMs)

SB-P-1.13 (`FCTM-13`): `24-§21-4`, `24-§21-5`, `9-§12-11`, `10-§17-5`. SB-P-1.14 (`FCTM-14`): `3-§9-12`, `3-§15-8`, `3-§15-9`, `22-§17-3`, `BP-§9-2`, `BP-§10.3-C2`, `3-§11-6`, `14-§4`, `14-§5`, `14-§6`, `14-§7`, `14-§17`, `14-§21`, `14-§22`, `15-§5`, `15-§6`, `15-§22`. SB-P-1.15 (`FCTM-15`): `22-§17-3` (same identifier as SB-P-1.14's). Unique: 21.

**STOP FOR MISSION CONTROL STAGE 2 REVIEW.**
