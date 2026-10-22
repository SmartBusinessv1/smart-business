# SB-P-1.17 — Stage 8 Evidence Inventory

**Mission:** SB-P-1.17 — Manager Operations\
**Stage:** Source 18 v1.2 Stage 8 preparation (MC-419A)\
**Prepared by:** Claude Code, Documentation Actor\
**Baseline:** `main@ad85e151e4857d9879929675da4f25f84b621d7b` (PR #1014 merge)\
**Status:** PREPARATION FOR MISSION CONTROL REVIEW — NO STAGE 8 APPROVAL, NOT LOCKED\
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. Reading this inventory

The **Published** column uses three values:

- **REPOSITORY:** the evidence exists on `main` at the baseline.
- **THIS PR:** the evidence is published by the MC-419A pull request and is not canonical until merged.
- **CONVERSATION-SOURCE:** a Mission Control conversation record relayed by the Founder; no repository record exists. Where the Documentation Actor does not hold the exact text, the row says **EVIDENCE NOT AVAILABLE**.

Blob SHAs are the Git blob at the baseline. The Blueprint blob changes when this PR merges, because it reconciles status lines (§18 v0.12).

## 2. Inventory

| # | Evidence | Repository path | Version / SHA | Authority | Status | Published |
|---|---|---|---|---|---|---|
| 1 | Product Blueprint, Sections 1–21 | `docs/phase-1-mission-blueprint/active/SB-P-1.17.md` | Blob `40501a294c2303c7ba3a25bf1fe63110056446bb` at baseline | Sections 1–19: MC-393 (Stage 5). Sections 20–21: MC-396A to MC-415A drafting; MC-418 acceptance | Sections 1–19 approved; Sections 20–21 accepted at Stage 7 (MC-418); **not locked** | REPOSITORY; status lines updated in THIS PR |
| 2a | Populated FCTM (630 rows) | `communication/missions/SB-P-1.17/claude-code/01-stage2-populated-fctm.md` | Blob `cb79088d3fa59f8b3226fd9d11ff9c9573666670` | Stage 2; MC-368A and MC-380A corrections | Canonical; unchanged by this PR | REPOSITORY |
| 2b | Obligation Inventory | `communication/missions/SB-P-1.17/claude-code/02-stage2-obligation-inventory.md` | Blob `4e6af9d027b9b4baf9a195674d45d5acac3a6e67` | Stage 2 | Canonical | REPOSITORY |
| 2c | Mission Truth Pack (Parts A–D) | `communication/missions/SB-P-1.17/claude-code/03-stage2-mission-truth-pack.md` | Blob `8d541153bd1af6741586937be9e42398b798dbb8` | Stage 2; read with the Stage 3 reconciliation Section C | Canonical | REPOSITORY |
| 3a | Founder Product Decision Record, `17:FPDR-1` to `-6` | `communication/missions/SB-P-1.17/claude-code/10-stage3-six-entry-founder-product-decision-record-for-review.md` | Blob `90b7ca1d43fd1d89fa5b8fd4cce30320fb7c00d4` (PR #994) | Founder; Stage 3 gate record `mission-control/09-stage3-founder-decision-gate-record.md` (blob `4820485e`) | Approved Founder decisions; unchanged | REPOSITORY |
| 3b | Founder Product Decision Record, `17:FPDR-7` | `communication/missions/SB-P-1.17/claude-code/15-stage5-founder-product-decision-record-17-fpdr-7.md` | Blob `e9f2cacb87e9625cf349172704f6f3e74589d687` (PR #1002) | Founder | Approved; unchanged | REPOSITORY |
| 3c | Stage 3 decision integration and reconciliation | `communication/missions/SB-P-1.17/claude-code/11-stage3-decision-integration-and-reconciliation.md` | Blob `d333ce6edced6cc064dce4184c5b5669ad4553d5` | Stage 3 | Canonical | REPOSITORY |
| 4 | Stage 5 Gate 10 approval (MC-393) | `communication/missions/SB-P-1.17/mission-control/MC-393-stage5-gate10-approval-and-stage6-handover.md` | Blob `e89511e33a535f1cf14cc4224a83bcac53579966`; PR #1009, merge `da53e1c9` | Mission Control | Gate 10 PASS; Sections 1–19 approved | REPOSITORY |
| 5 | Stage 6 Builder Review approval (MC-396) | `communication/missions/SB-P-1.17/claude-code/16-stage6-builder-review-approved-record.md` | Blob `8da06330d0b05c92b165d14a96566931310b278f`; PR #1010, merge `fc11821d` | Mission Control (MC-396, relayed and recorded under MC-396A) | Approved; B6-01 to B6-21 accepted for Stage 7 | REPOSITORY |
| 6a | Stage 7 Engineering Review completion report | `communication/missions/SB-P-1.17/claude-code/17-stage7-engineering-review-completion-report.md` | Blob `6b6e4f0e9008b470e0d7ddd0c427b3810f0d3d45`; PRs #1010, #1011 | Claude Code (Engineering Review Actor) | Historical draft report. Its own header still reads "DRAFT — FOR MISSION CONTROL STAGE 7 REVIEW"; superseded in effect by MC-418. Not edited by this PR | REPOSITORY |
| 6b | MC-418 Stage 7 acceptance | — | — | Mission Control | Accepted; cited by MC-419A as "MC-418 Stage 7 acceptance". **EVIDENCE NOT AVAILABLE:** exact MC-418 text not held by the Documentation Actor | CONVERSATION-SOURCE |
| 7a | Independent Stage 7 review findings ENG17-01 to ENG17-03 (MC-398A) and disposition (MC-399) | — | — | Independent reviewer; Mission Control | Findings accepted for refinement. **EVIDENCE NOT AVAILABLE:** exact MC-398A and MC-399 text | CONVERSATION-SOURCE |
| 7b | ENG17 corrections (Blueprint §20.9) | Blueprint §20.9; report 17 §4.1 | PR #1011, merge `4a3e9420` | MC-399A | Merged | REPOSITORY |
| 8 | SA-01 to SA-05 specialist assurance reports (consolidated original) | `communication/missions/SB-P-1.17/specialists/stage7-assurance/SB-P-1.17_Consolidated_Specialist_Assurance_Reports.md.txt` | SHA-256 `e7087ac5…b65b2e4f` (full hash in `MANIFEST.sha256`); reviewed `main@739c5fb3` | MC-408A (SA-04 also cites MC-409) | Original submitted evidence, byte-identical. Every report: REFINEMENT REQUIRED or equivalent; qualification OPEN (provenance record §3) | THIS PR |
| 8a | Provenance record for items 8–10 | `communication/missions/SB-P-1.17/specialists/02-stage7-specialist-assurance-provenance-record.md` | New | MC-419A | Preparation record | THIS PR |
| 9 | MC-410A independent specialist reconciliation | `communication/missions/SB-P-1.17/specialists/stage7-assurance/MC-410A-consolidated-specialist-findings-reconciliation.md` | SHA-256 `f9cf0dce…5e1e4a4`; reviewed `main@739c5fb3` | MC-410A | "BOUNDED REFINEMENT REQUIRED"; byte-identical | THIS PR |
| 10a | MC-411B Finance source interpretation | `communication/missions/SB-P-1.17/specialists/stage7-assurance/MC-411B-authoritative-pos-revenue-interpretation.md` | SHA-256 `139f2f8f…853d3504`; reviewed `main@e27f9e15` | MC-411B | Interpretation; byte-identical | THIS PR |
| 10b | MC-415 disposition of MC-411B | — | — | Mission Control | Accepted (cited by MC-415A). **EVIDENCE NOT AVAILABLE:** exact MC-415 text | CONVERSATION-SOURCE |
| 11a | PR #1012: capability 5 correction (MC-403A, MC-404A) | Blueprint §20.4.10, §18 v0.9 | Head `9fbaeb84`; merge `739c5fb3ebbdc312da4ef2ce70d7de2f11006003` | MC-403, MC-404A | Merged | REPOSITORY |
| 11b | PR #1013: POS intake authority and INV-A9 (MC-411A, MC-412A) | Blueprint §20.3, §20.4.6, §20.5, §20.6 B6-05, §20.9.1, §21.3, §18 v0.10 | Head `e384a3e0`; merge `e27f9e15aecbaafea549d9dbc277c134269a6217` | MC-411, MC-412A | Merged | REPOSITORY |
| 11c | PR #1014: INV-A8 reconciliation (MC-415A) | Blueprint §20.9.1, §21.3, §18 v0.11 | Head `c05a9613`; merge `ad85e151e4857d9879929675da4f25f84b621d7b` | MC-415 | Merged | REPOSITORY |
| 12a | Dependency register | Blueprint §12.2, §21.3 | Blob `40501a29` | Stages 5 and 7 | `D12` to `DUF6` open; added holds MC410-R01 and MC410-R02 open | REPOSITORY |
| 12b | Uncertainty register | Truth Pack D.1 (U-01 to U-14); Blueprint §12.3 | Blobs `8d541153`, `40501a29` | Stage 2, Stage 5 | U-03, U-04, U-11, N-1 to N-6, R15-11, W-1 open | REPOSITORY |
| 12c | Specialist qualification register | Provenance record §3–§4 | THIS PR | MC-419A | All five reports: qualification or independence OPEN | THIS PR |
| 12d | T1–T8 trigger screen | Blueprint §21.4 | Blob `40501a29` | Stage 7 | No trigger fired; **T6 WATCH** (B6-09); **T8 WATCH, not established** (B6-05, ENG17-03) | REPOSITORY |
| 13 | Founder Brief and Stage 8 readiness record | `communication/missions/SB-P-1.17/founder/01-stage8-founder-brief.md`; `communication/missions/SB-P-1.17/claude-code/19-stage8-readiness-record.md` | New | MC-419A | Prepared for Mission Control review | THIS PR |

## 3. Conversation-source records cited elsewhere in the lineage

These Mission Control records were relayed in conversation; none has a repository record. Several are listed as conversation-source in Blueprint §19: MC-395A, MC-396, MC-396A, MC-398A, MC-399, MC-399A, MC-402A, MC-403, MC-403A, MC-404A, MC-408A, MC-409, MC-411, MC-411A, MC-412A, MC-415, MC-415A, MC-418, MC-419 and MC-419A.

The Documentation Actor holds the instruction text of MC-399A, MC-403A, MC-404A, MC-411A, MC-412A, MC-415A and MC-419A as received in conversation. It does not hold the text of the others. This PR does not publish any of them because MC-419A does not authorize it.

## 4. Exceptions summary

| Exception | Effect |
|---|---|
| MC-418, MC-415, MC-411, MC-403, MC-399, MC-398A and MC-402A texts are **EVIDENCE NOT AVAILABLE** | Their existence and effect rest on later MC instructions. Mission Control may publish them separately |
| MC-408A assignment text and the MC-409 role definition are **EVIDENCE NOT AVAILABLE** | Specialist authority is taken from the reports' own headers |
| Specialist evidence is canonical only after this PR merges | Items 8–10a stay THIS PR until then |
| MC410-R04A and MC410-R04B are not separately named in the Blueprint | They are carried only in MC-410A and the provenance record (§4) |

**STOP FOR MISSION CONTROL REVIEW BEFORE FOUNDER STAGE 8 APPROVAL.**
