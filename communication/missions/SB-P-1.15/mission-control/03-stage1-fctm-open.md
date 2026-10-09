# SB-P-1.15 — FCTM Opening Record

**Mission:** SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO  
**Stage:** 1  
**Status:** DRAFT — OPENED, NOT POPULATED — EFFECTIVE ONLY AFTER MISSION CONTROL STAGE 1 ACCEPTANCE AND HUMAN MERGE  
**Intake baseline:** `main@3e0e144d717ae38744cb7d163dafb2547e2934f5`  
**Authority:** Source 18 v1.2 §3.2; SB-P-1.15-MC-02

This record opens the Feature Coverage and Product Truth Traceability Matrix. It contains **no row dispositions**. Population, the independent obligation inventory and every disposition belong to Stage 2.

## 1. Primary contracts opened

| Contract | File | Intake blob | Numbered sections | Opening |
|---|---|---|---|---|
| 2 — Ask CFO | `02_Ask_CFO.md` | `53635557fb2907e0e9011613511c9f34b8548edf` | §1–§29 | Full mission-assigned contract (Build Plan §9) |
| 4 — Daily Intelligence Rhythm | `04_Daily_Intelligence_Rhythm.md` | `ce940d258b036c5e93da5de5eaeaa8ce99c3b9fd` | §1–§19 | Full mission-assigned contract (Build Plan §9) |
| 11 — Smart Reminder & Delegated Automation | `11_Smart_Reminder_and_Delegated_Automation.md` | `e802745a93c3bacaebba5099aacfadbe52212bc8` | §1–§25 | Full mission-assigned contract (Build Plan §9) |
| 22 — Shared Product Foundations | `22_Shared_Product_Foundations.md` | `61e1bb91970be410e9daf1d3b80875c35f29db04` | §1–§33 | Slices touched: §11 Reminder/Delegated Automation, §12 Notification (`FPDR-1`), §13 Confirmation/Clarification, §14 Audit, §15 Idempotency, §18 Scheduler/Background Job, §19 Narrow failure, §29 acceptance 4. Stage 2 opens any further C22 obligation this mission actually touches. |

All files are under `docs/phase-1-mission-blueprint/smart-business-features/`.

## 2. Delegated contracts opened where touched

| Contract | File | Intake blob | Slices identified at Stage 1 |
|---|---|---|---|
| 21 — Permissions | `21_Permissions_Business_Isolation_and_Role_Authority.md` | `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d` | §9 Ask CFO / Owner intelligence; §12 Delegated automation authority |
| 24 — AI Orchestration | `24_AI_Orchestration_and_OpenAI_Intelligence_Foundation.md` | `0c1dcbb21a3d90e5ba2710200578ca4eb8f7b109` | §5, §12, §13, §16, §18, §27, §31 slices |
| 9 — Human Language Layer | `09_Human_Language_Layer.md` | `649c55f396e3cd53f31e95bbafbd6af5fc7550a7` | §12 reuse by Ask CFO, Daily Intelligence and Reminder; §17 acceptance 5 and 6 |
| 10 — Conversation Workspace | `10_Conversation_Workspace_and_Channel_Independence.md` | `5c145ed72677800893954602d403cc73e957731a` | §5, §9, §11, §13, §23 slices |
| 12 — Voice and Voice Plus | `12_Voice_and_Voice_Plus.md` | `6d48feff8f9fddffbbc98ee23a71a541299e48ba` | §4, §11, §12, §13, §21 Basic Voice slices (Voice Plus remains SB-P-1.19) |
| 3 — Ledger and Business Memory | `03_Ledger_and_Business_Memory.md` | `d8c26c073b669b561def887e36d16b19ff759205` | §13, §14, §15 slices |
| 17 — Dashboard & Manager Workspace | `17_Operational_Dashboard_and_Manager_Workspace.md` | `7943f74a88c2922acc697115f336b68baf7a503a` | §11 Ask CFO and Daily Intelligence; §22 acceptance 7 |
| 20 — Onboarding | `20_Onboarding_and_First_Experience.md` | `56ed4d11d2719abb83e6f9e862a51ffc5ebdf005` | §23 acceptance 10 (assignment ambiguous — U-3) |

Slices are those identified from the upstream FCTMs and contract cross-references at discovery. They are a starting set, not a ceiling.

## 3. Downstream seams (recorded, not opened for build)

Contracts 23, 1, 6, 7, 8, 14 and 16 consume the Reminder, Scheduler and Notification foundations. Their domain behaviour stays with the owning missions named in Build Plan §9. Stage 2 records only the reuse seam where a governing source requires it.

## 4. Governing Build Plan

`00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`, blob `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a`.

- Primary governing section: **§10.4 — SB-P-1.15 Reminder, Daily Intelligence & Ask CFO**, including Founder Runtime Verification Scenarios A and B.
- Also mapped: §6.2, §6.5, §8, §9, §11, §13, §14, §15 and §16. Each §16 rejection is an `OUT OF BUILD SCOPE` "must not appear" row (Build Plan §16).

## 5. Inherited rows to reconcile

The upstream FCTMs record rows assigned or delegated to SB-P-1.15:

| Upstream FCTM | Blob | Rows naming SB-P-1.15 |
|---|---|---|
| SB-P-1.12 | `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` | 15 by inspection: `22-§11`, `22-§12-1` to `-9`, `22-§18`, `22-§29-4`, `17-§11`, `17-§22-7`, `20-§23-10` |
| SB-P-1.13 | `97ddc752dcbbdb6586110a782ef1e24405b6dd22` | 38 by its owning-mission distribution line, including `DELEGATED` rows `2-§7`, `2-§14`, `2-§15`, `11-§5`, `11-§15` |
| SB-P-1.14 | `01e9856aca0afdb1267230a1932fe34054449a4b` | 12 by its owning-mission distribution line, including `DELEGATED` rows `2-§7`, `4-§6` |

The sets overlap. Stage 2 de-duplicates them against each governing contract's actual text and inherits the final statuses earlier missions recorded (Source 18 §3.2 item 9). It does not copy them.

## 6. Upstream holds to preserve

- D12 — SB-P-1.12 authority/runtime dependencies;
- D13 — SB-P-1.13 Conversation/AI/Voice/provider dependencies;
- D14 — SB-P-1.14 Ledger/UDI/notification-failure dependencies;
- DTX / PQ-2 — single coordinated transactions-family cut-over;
- provider, scheduler, notification, security, migration, CI and environment holds (Intake Pack §8).

No upstream documentary specification may be reclassified as demonstrated runtime evidence. No row may be marked `ALREADY DEMONSTRATED` without an earlier accepted mission's verified evidence.

## 7. Stage 2 obligations

Stage 2 must:

- take an independent obligation inventory of every numbered section, separately verifiable obligation and acceptance scenario in the opened scope;
- give each acceptance item its own row, including the bulleted acceptance items of C2 §25 and C4 §16 and the numbered scenarios of C11 §22;
- map Build Plan §10.4 work areas and both Founder runtime scenarios;
- record the `FPDR-1` basis for C22 §12 rows, with the U-2 label discrepancy noted;
- leave `20-§23-10` unmoved and unreclassified pending Mission Control reconciliation (U-3);
- assess U-1, U-4 and U-5 and escalate any genuine Stage 3 trigger;
- record the Stage 2 Delta candidates listed in Intake Pack §10;
- identify every further delegated contract actually touched;
- complete the Institutional Learning Intake Record under dual intake;
- produce zero silent omissions, deferrals, simplifications or reclassifications.

No row disposition is made by this Stage 1 opening.

**FCTM OPENED — STAGE 2 POPULATION NOT YET AUTHORIZED**
