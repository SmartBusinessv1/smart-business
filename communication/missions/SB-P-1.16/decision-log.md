# SB-P-1.16 — Decision Log

**Mission:** SB-P-1.16 — Financial Integrity & Credit  
**Standard:** Source 18 v1.2 §10  
**Created:** under MC-160 (finding B-1). This log is an index. It points to canonical records and does not reproduce full decision wording; where a record and this log differ, the record prevails.

Paths are relative to `communication/missions/SB-P-1.16/`. A decision marked **conversation-source** was given in Mission Control dialogue. Its repository evidence is the canonical record named against it, and no other repository path is claimed.

## Part A — Mission Control decisions

| ID | Decision | Status | Record |
|---|---|---|---|
| D-01 | MC-96: Stage 1 documentary entry; live communication pair assigned to SB-P-1.16 | CANONICAL — PR #955, `main@244c8e78` | `mission-control/01-stage1-documentary-entry-and-communication-activation.md` |
| D-02 | MC-97: Stage 1 Intake Pack; Claude Code appointed Definition Actor (bounded, with independence limitation); FCTM scaffold opened | CANONICAL — PR #956, `main@92741150` | `mission-control/02-…`, `mission-control/03-…` |
| D-03 | MC-102 / MC-103: Stage 1 source inventory accepted for publication; documentation-only assurance under the SB-P-1.12 MC-160 §5 item 6 route; CI UNVERIFIED recorded as missing | CANONICAL — PR #958, `main@48b36c8f` | `mission-control/04-stage1-source-inventory-review-and-publication-gate.md` |
| D-04 | MC-106 / MC-107 / MC-109: Stage 2 instruction; Definition Actor appointment (§13.1); Stage 2 activation | CANONICAL — PR #959, `main@e4e382c7` (MC-109 activation is conversation-source) | `mission-control/05-stage2-truth-pack-and-fctm-instruction.md` |
| D-05 | MC-112: U-08 conditionally noncritical for Stage 2 documentary reconciliation and non-destructive evidence-workflow definition; still OPEN. `14-§9-2` classified as illustrative | CANONICAL as accepted in MC-113 — PR #960 | `mission-control/06-…` §2; Truth Pack Part D.5 |
| D-06 | MC-113: Stage 2 Truth Pack accepted for publication | CANONICAL — PR #960, `main@59730d67` | `mission-control/06-stage2-truth-pack-review-and-publication-gate.md` |
| D-07 | MC-115 to MC-121: Stage 3 Founder Decision Brief preparation and corrections. MC-117: Source 11 screen for U-05. MC-118-A/B specialist evidence provisionally accepted (MC-119, MC-120) | Conversation-source; reflected in the canonical brief | `claude-code/07-…`, `claude-code/08-…`; `mission-control/07-…` §3 |
| D-08 | MC-122: Stage 3 preparation accepted for publication; Founder Decision Gate TRIGGERED | CANONICAL — PR #961, `main@8a27cd5b` | `mission-control/07-stage3-preparation-review-and-publication-gate.md` |
| D-09 | MC-145: F-2. Credit-specific linking belongs to SB-P-1.16 under C14 §4; `3-§15-7` stays with SB-P-1.17 / SB-P-1.18; no additional T7 | Conversation-source; recorded in the canonical report | `claude-code/10-…` §2 |
| D-10 | F-3: the delegation reading across Q3(a), Q5 and Q6, confirmed by Mission Control under MC-145 (recorded under MC-152) | Conversation-source; recorded in the canonical report | `claude-code/10-…` §§1, 6 |
| D-11 | MC-154: PR #963 merge verified; the nine Founder decisions are canonical | Conversation-source verification of a canonical merge | PR #963, `main@bb695255` |
| D-12 | MC-156 / MC-157: adoption of the 72-row FCTM mapping, then legend and status-line corrections | CANONICAL — PR #964, `main@ec87d4a6` | `claude-code/02-stage2-populated-fctm.md` §F |
| D-13 | MC-159: PR #964 merge verified; FCTM canonical with 0 `ESCALATED` and 0 `ESC-U01` | Conversation-source verification of a canonical merge | PR #964, `main@ec87d4a6` |
| D-14 | MC-160: Stage 3 Gate Record conditionally adopted for publication. U-08 and U-10 are non-blocking for bounded Stage 4 drafting only, not for dependent Blueprint locks. B-1 confirmed | **PENDING** — effective only after Founder human merge and Mission Control post-merge verification | `mission-control/08-stage3-founder-decision-gate-record.md` (not yet canonical) |

## Part B — Canonical Founder decisions

The Founder approved all nine on 2026-10-15. They are canonical since PR #963 (`main@bb695255`). The full wording is in `claude-code/09-stage3-founder-product-decision-record-draft.md` (blob `30b19a80352b100e79cadc216daae14b07e24f9a`), entries 2.1 to 2.9.

| ID | Subject | Option | FPDR entry | Founder source | Mission Control acknowledgement |
|---|---|---|---|---|---|
| `16:FPDR-1` | Q1(a) Shared customer identity ownership | A | 2.1 | MC-125 (Founder-authored text) | MC-125 |
| `16:FPDR-2` | Q1(b) Historical credit-method sale attribution | A | 2.2 | MC-126 | MC-127 |
| `16:FPDR-3` | Q2 "Partially matched" meaning | C | 2.3 | MC-128 | MC-129 |
| `16:FPDR-4` | Q3(a) Factual credit awareness | A | 2.4 | MC-130 | MC-131 |
| `16:FPDR-5` | Q3(b) Overdue status without a due date | A | 2.5 | MC-132 | MC-133 |
| `16:FPDR-6` | Q4 Phase 1 payment-evidence capabilities (gateway-first) | A | 2.6 | MC-134 | MC-135 |
| `16:FPDR-7` | Q5 Manager delegation (Scoped Reconciliation Manager) | B | 2.7 | MC-136 | MC-137 |
| `16:FPDR-8` | Q6 Merchant-controlled customer credit communication | A | 2.8 | MC-138 | MC-139 |
| `16:FPDR-9` | F-1 Source 18 T7 bounded payment-evidence channel deferral | A | 2.9 | MC-146 | MC-147 |

FCTM citations (blob `5ff7742f`): `16:FPDR-1` 20, `16:FPDR-2` 8, `16:FPDR-3` 10, `16:FPDR-4` 13, `16:FPDR-5` 3, `16:FPDR-6` 15, `16:FPDR-7` 2, `16:FPDR-8` 10, `16:FPDR-9` 3.

## Part C — Unresolved decisions

| ID | Item | Decider | State | Record |
|---|---|---|---|---|
| U-08 / DC-11 | Payment-evidence retention, deletion, backups, restoration, legal holds (`25-§17-1`, `BP-§15-6`) | Founder / legal governance | OPEN. Non-blocking for bounded Stage 4 drafting only (MC-160) | Truth Pack D.1, D.5; FCTM |
| U-10 | Third-party lending and underwriting ecosystem (`BP-§15-9`) | Founder (broader ecosystem) | OPEN. Non-blocking for bounded Stage 4 drafting only (MC-160) | Truth Pack D.1 |
| F-4 | SB-P-1.15 R15-11: merchant-facing grant granularity; one SB-P-1.12 grant model must serve both missions | Founder, cross-mission | OPEN | `claude-code/10-…` §5 |
| F-5 | Seven `DNTF` rows: Contract 14 completion depends on an approved delivery channel | Visibility. Any reassignment would be a T7 for the Founder | OPEN | `claude-code/10-…` §7 |
| F-7 | Contract 15 feature-completion assessment after the `16:FPDR-9` deferral | Founder decision or Mission Control determination | OPEN | Gate Record §§5.2, 7 |
| `DPAY` | Payment-evidence provider selection, credentials and activation (BP §5.4) | Separate validation and authorization | Not selected | `16:FPDR-6` §7; FCTM §0.6 |

## Part D — Future allocation questions

These are recorded so they are not lost. None is decided here.

| Question | Origin | Note |
|---|---|---|
| Which mission owns the deferred generic direct-bank API branch of `15-§5-1` and the deferred `15-§5-2` (standalone bank-email ingestion)? | `16:FPDR-9` §9 (no mission assigned); F-7 | Needed before Stage 24 residual carry-forward |
| When and where Source 11 Bank Email Sync is delivered | `16:FPDR-9` §4 (retained, not implemented) | No mission or date established |
| Delivery channel for the seven `DNTF` rows | `16:FPDR-8` §§6–7; Build Plan (SB-P-1.20) | No reassignment made |
| `3-§15-7` (Ledger integration with Customer/Supplier identity) | MC-145 | Stays with SB-P-1.17 / SB-P-1.18; not reallocated |
| Administrative status-line correction of the canonical FPDR and report (O-1) | Gate Record §10 | Only if Mission Control directs it |

**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
