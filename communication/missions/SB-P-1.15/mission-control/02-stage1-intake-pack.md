# SB-P-1.15 — Stage 1 Mission Initiation and Intake Pack

**Mission ID:** SB-P-1.15  
**Mission name:** Reminder, Daily Intelligence & Ask CFO  
**Lifecycle:** Source 18 v1.2 — Stage 1  
**Status:** DRAFT — MISSION CONTROL STAGE 1 REVIEW / HUMAN MERGE REQUIRED — NOT ACCEPTED  
**Intake baseline:** `main@3e0e144d717ae38744cb7d163dafb2547e2934f5` (discovery baseline `main@cc7ea06d3994774b2fb854eb6d0205a3c04d6500`)  
**Stage 1 owner:** Mission Control  
**Prepared by:** Claude Code, under SB-P-1.15-MC-02 (`mission-control/02-stage1-discovery-disposition-publication-authority.md`, canonical PR #856)  
**Implementation:** NOT AUTHORIZED

## 1. Authority and effect

This pack is prepared under:

- SB-P-1.15-MC-01, `mission-control/01-stage1-intake-activation.md`, canonical PR #855;
- SB-P-1.15-MC-02, `mission-control/02-stage1-discovery-disposition-publication-authority.md`, canonical PR #856;
- Source 18 v1.2 Stage 1 and Sections 3.1, 3.2, 3.3, 4.3, 4.9 and 8;
- the Founder-approved Phase 1 Operating Pattern (canonical PR #845);
- SB-P-1.14-MC-29 parallel recovery correction (canonical PR #854).

This pack is preparation only. It does not accept Stage 1, appoint the Definition Actor, authorize Stage 2, make any FCTM row disposition or authorize any implementation. It becomes effective only after Mission Control review, authorized-human merge and Mission Control post-merge verification.

## 2. Product outcome

Build Plan §10.4:

> Reduce Owner mental load while preserving human authority.

Exit principle (Build Plan §10.4):

> Smart Business remembers what I may forget, brings the right things to my attention, and helps me think—but it never behaves as if it owns my business.

Founder-approved experience anchors (Build Plan §10.4):

- Ask CFO explains and clarifies; it does not execute writes;
- Daily Intelligence prioritizes useful exceptions over information overload;
- Manager/Employee access remains permission-scoped even when information is requested conversationally.

## 3. Source manifest

Every blob below was verified with `git rev-parse <commit>:<path>` at the intake baseline `3e0e144d`. Every blob is identical at the discovery baseline `cc7ea06d`. The only change between the two baselines is the addition of the MC-02 record.

### 3.1 Primary product sources

| Source | Path | Intake blob |
|---|---|---|
| Build Plan | `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` |
| Global Product Completion View | `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md` | `ee76d920146008056781fced41be938675c4be0b` |
| Feature Definition Library Coverage Matrix | `docs/phase-1-mission-blueprint/smart-business-features/00_Feature_Definition_Library_Coverage_Matrix.md` | `6c426ba672fcacf9c6351a217039ddd2ebf9f244` |
| Contract 2 — Ask CFO | `docs/phase-1-mission-blueprint/smart-business-features/02_Ask_CFO.md` | `53635557fb2907e0e9011613511c9f34b8548edf` |
| Contract 4 — Daily Intelligence Rhythm | `docs/phase-1-mission-blueprint/smart-business-features/04_Daily_Intelligence_Rhythm.md` | `ce940d258b036c5e93da5de5eaeaa8ce99c3b9fd` |
| Contract 11 — Smart Reminder & Delegated Automation | `docs/phase-1-mission-blueprint/smart-business-features/11_Smart_Reminder_and_Delegated_Automation.md` | `e802745a93c3bacaebba5099aacfadbe52212bc8` |
| Contract 22 — Shared Product Foundations | `docs/phase-1-mission-blueprint/smart-business-features/22_Shared_Product_Foundations.md` | `61e1bb91970be410e9daf1d3b80875c35f29db04` |

### 3.2 Delegated contracts (opened where touched)

| Contract | Path | Intake blob |
|---|---|---|
| 21 — Permissions, Business Isolation & Role Authority | `docs/phase-1-mission-blueprint/smart-business-features/21_Permissions_Business_Isolation_and_Role_Authority.md` | `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d` |
| 24 — AI Orchestration & OpenAI Intelligence Foundation | `docs/phase-1-mission-blueprint/smart-business-features/24_AI_Orchestration_and_OpenAI_Intelligence_Foundation.md` | `0c1dcbb21a3d90e5ba2710200578ca4eb8f7b109` |
| 9 — Human Language Layer | `docs/phase-1-mission-blueprint/smart-business-features/09_Human_Language_Layer.md` | `649c55f396e3cd53f31e95bbafbd6af5fc7550a7` |
| 10 — Conversation Workspace & Channel Independence | `docs/phase-1-mission-blueprint/smart-business-features/10_Conversation_Workspace_and_Channel_Independence.md` | `5c145ed72677800893954602d403cc73e957731a` |
| 12 — Voice and Voice Plus | `docs/phase-1-mission-blueprint/smart-business-features/12_Voice_and_Voice_Plus.md` | `6d48feff8f9fddffbbc98ee23a71a541299e48ba` |
| 3 — Ledger and Business Memory | `docs/phase-1-mission-blueprint/smart-business-features/03_Ledger_and_Business_Memory.md` | `d8c26c073b669b561def887e36d16b19ff759205` |
| 17 — Operational Dashboard & Manager Workspace | `docs/phase-1-mission-blueprint/smart-business-features/17_Operational_Dashboard_and_Manager_Workspace.md` | `7943f74a88c2922acc697115f336b68baf7a503a` |
| 20 — Onboarding and First Experience | `docs/phase-1-mission-blueprint/smart-business-features/20_Onboarding_and_First_Experience.md` | `56ed4d11d2719abb83e6f9e862a51ffc5ebdf005` |

### 3.3 Downstream seams (not built by this mission unless a governing source requires more)

| Contract | Path | Intake blob | Owning mission (Build Plan §9) |
|---|---|---|---|
| 23 — WhatsApp Intelligence & Channel Adapter | `docs/phase-1-mission-blueprint/smart-business-features/23_WhatsApp_Intelligence_and_Channel_Adapter.md` | `2430e1c6191908bb23a5971405b8214d8d98d7ff` | SB-P-1.20 |
| 1 — Smart Order & Delivery Assistant | `docs/phase-1-mission-blueprint/smart-business-features/01_Smart_Order_and_Delivery_Assistant.md` | `b392c8cb851683ea7bba1d6351c565a4c0c555ed` | SB-P-1.18 |
| 6 — Staff and HR Assistant | `docs/phase-1-mission-blueprint/smart-business-features/06_Staff_and_HR_Assistant.md` | `ebacd1838ec709241c07d3ab911377b6284b90d2` | SB-P-1.18 |
| 7 — Stock, Supplier and Reorder Intelligence | `docs/phase-1-mission-blueprint/smart-business-features/07_Stock_Supplier_and_Reorder_Intelligence.md` | `65ad91b202def9cb4f42b97383bcc58475f59015` | SB-P-1.17 |
| 8 — Support Automation | `docs/phase-1-mission-blueprint/smart-business-features/08_Support_Automation.md` | `97397780114249d027601d0a44dea032214c2073` | SB-P-1.13 / SB-P-1.19 |
| 14 — Smart Credit Awareness | `docs/phase-1-mission-blueprint/smart-business-features/14_Smart_Credit_Awareness.md` | `16914a834c3dd3abcc5a41029d78cb96edb1a72f` | SB-P-1.16 |
| 16 — Compliance Shield | `docs/phase-1-mission-blueprint/smart-business-features/16_Compliance_Shield.md` | `420269d8407485fc659072242fff03cd27f023e4` | SB-P-1.18 |

### 3.4 Governance and authority sources

| Source | Path | Intake blob |
|---|---|---|
| Source 18 v1.2 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | `0945bda60a93c99909c3b7a247d5427ebe256011` |
| Source 11 — Product Truth Map | `merge/active/11_Smart_Business_Product_Truth_Map.md` | `16897d6c875bb3e45e26cd32a99bc0510c4bdea1` |
| Source 01 — Master System Manifesto | `merge/active/01_Smart_Business_Master_System_Manifesto.md` | `785bc627ae3e46d0aadf9ed54b728a0214ee1aac` |
| Source 00 — Lighthouse Constitution | `merge/active/00_Lighthouse_Constitution.md` | `9594b8024cc17d79f05d915ceda2d79de847e4d2` |
| SB-GOV-1.2 | `merge/active/SB-GOV-1.2_Constitutional_Authority_Interpretation_Phase_1.md` | `f53d63c146a5898026c7238485894b2c591ca97d` |
| Source 05 — AI Behaviour and Model Training | `merge/active/05_AI_Behaviour_and_Model_Training_Framework.md` | `366f889923298b0b85741e7e6012a820dd2a5af7` |
| Source 12 — Product Execution and Release | `merge/active/12_Product_Execution_and_Release_Framework.md` | `21946142e638ffd4813a8a75ab7d5bb29826ac96` |
| Phase 1 Operating Pattern | `mission-control/SB-P-Phase 1 operating pattern.md` | `39b1bc366d7a2e31c80dc22c63aab007a3f5afd6` |
| Phase 1 Institutional Memory guide | `docs/phase-1-mission-blueprint/00_Phase_1_Institutional_Memory_Lessons_Capabilities_and_Operational_Guardrails.md` | `3da3d6d3f9b7fbd89de028ca0191d99484049ba9` |
| Canonical Project Source Set | `docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md` | `4615c35cc03dfb810c59cc65a3c4b87174a8d34e` |
| AGENTS.md | `AGENTS.md` | `551fddb46f24b8578e35f4080d4e4e4c6bfe904f` |
| AI Communication and Handover Protocol | `communication/AI_Communication_and_Handover_Protocol.md` | `aacb1775a5eae2e210f3ed13d1280bfa52c70c2b` |
| Independent Verification Efficiency Protocol | `communication/Independent_Verification_Efficiency_Protocol.md` | `e940c0f4bad1815a8b4733859a87f8e30ed2434e` |
| Migration default-deny | `docs/migration/README.md` | `810038e45703be92bcee3b31eaa3d4f9181db5da` |
| Build Assurance Baseline | `docs/engineering/assurance/Build_Assurance_Baseline.md` | `01772c82ee59074b5c2c557416c1a4cb291307f6` |
| SB-P-1.15-MC-01 | `communication/missions/SB-P-1.15/mission-control/01-stage1-intake-activation.md` | `9394a7f028c69ae8f927f6bd70f3e93f2bb177b4` |
| SB-P-1.15-MC-02 | `communication/missions/SB-P-1.15/mission-control/02-stage1-discovery-disposition-publication-authority.md` | `e03422f94a41d78bc8c3711ecfe1061c766a245f` |
| SB-P-1.14-MC-29 | `communication/missions/SB-P-1.14/mission-control/50-provider-recovery-parallel-lane-correction.md` | `0daf6e6cdf216843d350014b5e593d4dc867f68d` |
| SB-P-1.12 Founder Product Decision Record (`FPDR-1`) | `communication/missions/SB-P-1.12/founder/03-stage3-founder-product-decision-record.md` | `6f1a35e9ab93af6a2b7217edaafd12c5e4f77c1a` |

### 3.5 Upstream locked specifications and suspension records

These are consumed as **specifications only**. None is evidence of implemented or verified runtime behaviour.

| Mission | Artifact | Path | Intake blob |
|---|---|---|---|
| SB-P-1.12 | Locked Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.12.md` | `77d52096c020668311b039721a4de9248ddd460e` |
| SB-P-1.12 | Locked EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` | `c444f7509477d0e8b997af538440d93bf2ca4d72` |
| SB-P-1.12 | Engineering Contract | `docs/implementation/SB-P-1.12/engineering-contract.md` | `3c9b01d9df49d9bfff39f22ee2a866c6d40f316e` |
| SB-P-1.12 | Build Prompt | `docs/implementation/SB-P-1.12/lovable-build-prompt.md` | `3993b77776b9576ac4000599e55a62479182b963` |
| SB-P-1.12 | Verification Checklist | `docs/implementation/SB-P-1.12/verification-checklist.md` | `453b598a5b79171ddf26903d2055fef1d3d19e5b` |
| SB-P-1.12 | Implementation Authorization (WITHHELD) | `communication/missions/SB-P-1.12/mission-control/implementation-authorization.md` | `52cac2cbcd19b76482fde740bbfc7d761ba44442` |
| SB-P-1.12 | Residual work and resume register | `communication/missions/SB-P-1.12/mission-control/71_residual_work_and_exact_resume_register.md` | `a3ec7d362454aa80731785ff7dc1a284079d24bd` |
| SB-P-1.12 | Partial OLE handoff | `communication/missions/SB-P-1.12/organizational-learning/01_partial_mission_learning_handoff.md` | `6447f815a8614c81d635b3c5f7f19749ffa17b5e` |
| SB-P-1.12 | Stage 2 FCTM | `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md` | `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` |
| SB-P-1.13 | Locked Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.13.md` | `bbf65429e3c1f18b9dacdda62e1c175d9eb395a1` |
| SB-P-1.13 | Locked EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.13-EIS.md` | `9a1e723d4874011b6870a680f2a2080154537c30` |
| SB-P-1.13 | Engineering Contract | `docs/implementation/SB-P-1.13/engineering-contract.md` | `9fe7570a96f7b4b9a9ff8b64cc48bd5e0ad2fc73` |
| SB-P-1.13 | Build Prompt | `docs/implementation/SB-P-1.13/lovable-build-prompt.md` | `a987bd970e3428beb4b7ca87d22fd1dfa03ce4e1` |
| SB-P-1.13 | Verification Checklist | `docs/implementation/SB-P-1.13/verification-checklist.md` | `49ecd017af4f30ea72a12b415bf24aac5dcbe8c7` |
| SB-P-1.13 | Implementation Authorization (WITHHELD) | `communication/missions/SB-P-1.13/mission-control/implementation-authorization.md` | `f52b0a26378a020a19ba59ed6274844d8148c413` |
| SB-P-1.13 | Residual work and resume register | `communication/missions/SB-P-1.13/mission-control/39-residual-work-and-exact-resume-register.md` | `e5320b8206035b9a1ad182cf8334efb8d3b8df2c` |
| SB-P-1.13 | Partial OLE handoff | `communication/missions/SB-P-1.13/organizational-learning/01_partial_mission_learning_handoff.md` | `2d4a5e24faa0597d076734efc3a8c20372322b7a` |
| SB-P-1.13 | Stage 2 FCTM | `communication/missions/SB-P-1.13/claude-code/02-stage2-populated-fctm.md` | `97ddc752dcbbdb6586110a782ef1e24405b6dd22` |
| SB-P-1.14 | Locked Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.14.md` | `256828d2c26fba7dab6f52975efb8b574b1563f1` |
| SB-P-1.14 | Locked EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md` | `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3` |
| SB-P-1.14 | Engineering Contract | `docs/implementation/SB-P-1.14/engineering-contract.md` | `19be927759eb4925eebc63a0ed897db5cf91d0f0` |
| SB-P-1.14 | Build Prompt | `docs/implementation/SB-P-1.14/lovable-build-prompt.md` | `1ba6d24a4c283ca84a5fefe6c2e1a907e374221b` |
| SB-P-1.14 | Verification Checklist | `docs/implementation/SB-P-1.14/verification-checklist.md` | `29d292d353fa2ab50a72870c0a649bb4627ba846` |
| SB-P-1.14 | Implementation Authorization (WITHHELD) | `communication/missions/SB-P-1.14/mission-control/implementation-authorization.md` | `b89d6cbed4ce7020d05e78b5c838984f2b2ab57d` |
| SB-P-1.14 | Residual work and resume register | `communication/missions/SB-P-1.14/mission-control/45-residual-work-exact-resume-register.md` | `c5e4cc70e0f6b0348daa3c37018ba6c91e965be2` |
| SB-P-1.14 | Partial OLE handoff | `communication/missions/SB-P-1.14/mission-control/47-partial-mission-learning-ole-handoff.md` | `ae8008f797855a42fce735ee95dc16b62cde5767` |
| SB-P-1.14 | Stage 2 FCTM | `communication/missions/SB-P-1.14/claude-code/02-stage2-populated-fctm.md` | `01e9856aca0afdb1267230a1932fe34054449a4b` |
| SB-P-1.14 | Stage 2 Institutional Learning Intake | `communication/missions/SB-P-1.14/claude-code/04-stage2-institutional-learning-intake.md` | `169c7a276140eec3b287c7f9dfe4d0b4fc228576` |

## 4. Mission scope and boundaries

### 4.1 Contracts advanced

Build Plan §9 assigns SB-P-1.15 Contracts **2, 4 and 11**.

Founder Decision **`FPDR-1`** (SB-P-1.12) creates a distinct Shared Notification Foundation workstream **within SB-P-1.15** for Contract 22 §12 rows `22-§12-1` to `22-§12-9`, reusable across missions, features and channels. SB-P-1.20 must reuse it. This is not a new Product Mission.

The upstream FCTMs of SB-P-1.12, SB-P-1.13 and SB-P-1.14 also record Contract 22 §11 (Reminder / Delegated Automation Foundation), §18 (Scheduler / Background Job Foundation) and §29 acceptance 4 (one Reminder Engine reused by multiple features) as `ASSIGNED TO LATER MISSION` → SB-P-1.15. Stage 2 reconciles these inherited rows against the contract text.

### 4.2 Governing Build Plan sections

- **§10.4** — primary.
- §6.2 (one Business Command / Action Path), §6.5 (one Reminder / Automation Kernel), §8 (Smart Business must work without WhatsApp), §9 (mission table and assignment lock), §11 (cross-mission dependencies), §13 (Experience Verification Matrix), §14 (Source 18 discipline), §15 (unresolved Founder decisions) and §16 (explicit rejections, including Ask CFO as write-capable authority and old Daily Intelligence timings).

### 4.3 Explicit exclusions

The following are not SB-P-1.15 work. Each stays committed under its own owner:

- WhatsApp channel adapter and Meta delivery — SB-P-1.20;
- customer-credit maturity and credit follow-up content — SB-P-1.16;
- supplier/reorder continuation content — SB-P-1.17;
- Compliance, Staff/HR and Order/Delivery reminder content — SB-P-1.18;
- Voice Plus, support completion and onboarding/lifecycle follow-up content — SB-P-1.19;
- Conversation Workspace, Human Language Layer, Basic Voice and the AI kernel themselves — SB-P-1.13 (consumed here, not rebuilt);
- authority kernel and role model — SB-P-1.12 (consumed here, not rebuilt);
- Business Memory, UDI and durable media — SB-P-1.14 (consumed here, not rebuilt).

SB-P-1.15 must provide one reusable Reminder, Scheduler and Notification seam for those consumers. It must not build their domain behaviour.

### 4.4 Global Product Completion View initiation fields

Reported here for Mission Control. **The Completion View is not edited by this pack.** Mission Control applies or approves register edits (Completion View §12).

| Field | Content |
|---|---|
| Contracts advanced | 2, 4, 11; Contract 22 §11/§12/§18 slices under `FPDR-1` and inherited assignments |
| Register state before mission | C2 `NOT IMPLEMENTED`; C4 `NOT IMPLEMENTED`; C11 `NOT IMPLEMENTED`; C22 `IMPLEMENTED BUT INCOMPLETE`. All four `NOT YET ACCEPTED AS MATURE FEATURE`. |
| Intended delta | Documentary Phase 1 lane: Blueprint, EIS and implementation package for the Reminder, Scheduler, Notification, Daily Intelligence and Ask CFO capabilities. No implementation-state change is expected while Implementation Authorization is withheld. |
| FCTM path and baseline | To be created at Stage 2 under `communication/missions/SB-P-1.15/claude-code/`; opening record `mission-control/03-stage1-fctm-open.md`; baseline `3e0e144d` |
| Inherited residual rows | SB-P-1.12 FCTM (15 rows by inspection), SB-P-1.13 FCTM (38 by its distribution line), SB-P-1.14 FCTM (12 by its distribution line). The sets overlap and are de-duplicated at Stage 2. |
| Dependencies | Section 8 of this pack |
| Blockers | None found at Stage 1 that prevent truthful documentary intake |
| Allowed | Stage 1 documentary intake under MC-02 |
| Not authorized | Section 11 of this pack |

## 5. Founder runtime verification anchors

Build Plan §10.4. These are Founder-reserved scenarios (Source 18 §4.2) and are carried into the FCTM and the later Experience Verification Matrix.

### Scenario A — Reminder continuation

Owner says, "Remind me Friday to pay this supplier." The correct reminder is created. At due time, a consequential payment action still requires confirmation unless an explicit bounded Owner delegation exists.

### Scenario B — Ask CFO read-only boundary

Owner asks "Who owes me money?" and receives contextual authorized information. A Manager without that delegated intelligence receives only the permitted subset. Evidence must show no write occurred from Ask CFO.

## 6. Definition Actor appointment record

Source 18 §4.3. **Proposed** for Mission Control's Stage 1 decision. The appointment is effective only on Mission Control's Stage 1 acceptance and the human merge of this crossing.

| Field | Record |
|---|---|
| Proposed actor | **Claude Code**, Definition Actor for Stages 2, 3 (preparation) and 4 |
| Fit for contract areas | Has prepared the FCTMs of SB-P-1.12, 1.13 and 1.14, including the rows those missions assigned to SB-P-1.15, and knows the delegated kernel boundaries (authority, confirmation, AI orchestration, Ledger read model). Can perform documentary definition without provider or runtime access. |
| Prior contributions to this subject | Authored the upstream FCTM rows that assign C22 §11/§12/§18, C2, C4 and C11 slices to SB-P-1.15. Was Definition Actor, Builder Review and Engineering Review author, EIS author and Stage 12 package author for SB-P-1.12, 1.13 and 1.14. Prepared the SB-P-1.15 Stage 1 discovery report and this pack. |
| Separation assessment | SB-P-1.15 is **material-risk**: delegated automation authority, permission-scoped intelligence, background jobs and idempotency, outbound notifications, AI read paths, and a cross-mission transaction write path (Scenario A). Correlated-assumption risk exists because the same actor wrote the upstream interpretation of the SB-P-1.15 hold (`D15`). |
| Mitigations | (1) Stage 2 rebuilds the FCTM and obligation inventory from contract text, not from upstream rows. (2) Mission Control tests the inventory against source text at Stages 5 and 8. (3) If Claude Code also holds Stages 6, 7 and 9, a parallel specialist who did not author Sections 1–19 reviews the feasibility and risk findings (Source 18 §4.3). (4) Mandatory specialist review under Source 18 §4.8 for authority/permissions/RLS, idempotency/concurrency (scheduler), AI behaviour and any new outbound provider. (5) Claude Code never verifies implementation or corrections it authored. |
| Named alternates | (1) **Codex**, subject to a separate Mission Control assessment. Appointing Codex would reduce its eligibility as the preferred Stage 19 verifier, because a verifier that authored the FCTM must record a separation assessment. Availability and independence: **UNVERIFIED — ACCESS REQUIRED**. (2) Another qualified actor that Mission Control separately assesses. A separate Claude Code session does **not** establish independence (Source 18 §4.9). |
| Self-proposal disclosure | This record was drafted by the proposed actor. The final assessment is Mission Control's. |
| Mission Control final assessment | **PENDING — to be recorded in the Stage 1 acceptance decision.** |

## 7. Draft workstream register

Source 18 §8. **Draft only — unapproved until reviewed; fixed at Stage 13.** Workstreams never create Product Mission IDs or change mission assignment.

| Workstream | Draft scope | Primary sources |
|---|---|---|
| SB-P-1.15/WS-A — Reminder Engine | One reminder model; natural-language creation through the SB-P-1.13 reminder-draft seam; done/snooze/reschedule; recurrence with occurrence/history discipline; reminder distinct from business event | C11 §§4–9; C22 §11; C24 §13 |
| SB-P-1.15/WS-B — Delegated Automation and Consequential Continuation | Stored bounded Owner delegation; limits and scope; execution-time revalidation; exact confirmation binding; reuse of SB-P-1.12/1.13 kernels; no second protected write path | C11 §§10–12, §16; C21 §12; C22 §13 |
| SB-P-1.15/WS-C — Scheduler / Background Job Foundation | Idempotent, observable, narrowly retryable jobs; business-timezone execution; delayed and duplicate invocation safety | C22 §18; C4 §13; C11 §18 |
| SB-P-1.15/WS-D — Shared Notification Foundation (**distinct, `FPDR-1`**) | Recipient identity/role; language; channel preference/availability; template/provider requirements; delivery/retry state; duplicate suppression; privacy; link to originating event; delivery separate from completion; SB-P-1.20 reuse seam | C22 §12 (`22-§12-1` to `-9`); C11 §17 |
| SB-P-1.15/WS-E — Daily Intelligence Rhythm | Morning Briefing 07:00, Pulse Check 10:30, Night Closing 22:00 in business timezone; source-of-truth rule; fact/estimate/signal boundaries; role permissions; partial-feature availability; failure handling | C4 |
| SB-P-1.15/WS-F — Ask CFO | Read-only authorized query layer; data and advisory question classes; missing-data rule; response structure; Manager delegated subset; Workspace, Basic Voice and dashboard surfaces; continuation only through explicit action or reminder | C2; C24 §12; C10 §9; C12 slices; C17 §11 |
| SB-P-1.15/WS-G — Cross-cutting assurance | Permission-scoped retrieval; audit; idempotency; privacy and dignity; narrow failure; one truth across channels; evidence and observability | C22 §§14, 15, 19; C21; C4 §15; C11 §19 |

## 8. Dependency and hold register

| Hold | Content | Source |
|---|---|---|
| D12 | SB-P-1.12 authority kernel, role delegation, Ask CFO / Owner intelligence boundary rule (`21-§9`), delegated automation authority (C21 §12), business isolation, residual `anon` grant gate (Build Plan §5.1). Implementation Authorization WITHHELD. | SB-P-1.12 IA `52cac2cb…`; resume register `a3ec7d36…` |
| D13 | SB-P-1.13 Conversation/AI kernel, exact-binding confirmation, Human Language Layer, Basic Voice, Workspace, reminder-draft seam (`24-§13-1`), AI provider configuration evidence. Implementation Authorization WITHHELD. | SB-P-1.13 IA `f52b0a26…`; resume register `e5320b82…` |
| D14 | SB-P-1.14 four-state Ledger read model, UDI status, `3-§17-7` failed downstream notification handling. Implementation Authorization WITHHELD; R-05 holds (D12 225, D13 92, DTX 42) where SB-P-1.15 consumes affected rows. | SB-P-1.14 IA `b89d6cbe…`; resume register `c5e4cc70…` |
| DTX / PQ-2 | Scenario A ends in a payment (transaction) write. It must route through the single coordinated transactions-family cut-over across SB-P-1.12 WS-A3, SB-P-1.13 EIS13-CMD-02 and SB-P-1.14 WS-A. **No new protected write path.** | SB-P-1.14 R-02 / IA-2 |
| PROV-AI | Accepted AI provider identity, data controls and versioned configuration | SB-P-1.13 L-6; SB-P-1.14 R-03 |
| PROV-SCHED | Scheduler runtime (for example database scheduler or function runtime) availability and behaviour: **UNVERIFIED — ACCESS REQUIRED** | Section 9 |
| PROV-NOTIFY | No approved out-of-app outbound channel provider is evidenced before SB-P-1.20 (see U-1) | Section 10 |
| SEC | Mandatory security/permissions/RLS, idempotency/concurrency and AI specialist review; residual `anon` gate | Source 18 §4.8; Build Plan §5.1 |
| MIG | New schema is expected; migrations are planned only. `docs/migration/README.md` default-deny applies. | Source 18 §9.1 |
| CI | GitHub Actions availability and run evidence unverified (support case #4816157). Absence of CI is not a pass. | SB-P-1.14 R-09 |
| ENV | No test project or runtime-verification environment is named; the Supabase Free test project is paused (SU-494995) | SB-P-1.14 R-08 |
| RET | Retention of reminder, notification and Daily Intelligence history versus unresolved Founder decision #6 (see U-5) | Build Plan §15 |

## 9. Topology facts

### 9.1 Verified by repository inspection at the intake baseline

- No reminder, scheduler or Daily Intelligence implementation exists in `src/**` or `supabase/**`. No migration (24 files) introduces a cron or scheduler, and there is no `supabase/functions/` directory.
- The Ask CFO dashboard entry is a placeholder `ComingSoonCard` (`src/routes/_authenticated/dashboard.tsx`).
- `transaction_correction_events.notification_status` defaults to `'pending'` and has no consumer. This seam has been recorded since SB-P-1.9.
- The transaction correction dialog (`src/routes/_authenticated/transactions.tsx`) states that corrections are reported "through the approved notification workflow"; no such workflow exists.
- No timezone field exists in the canonical schema, while C4 §2 states "Business timezone controls delivery".
- `communication/live/instruction.md` and `communication/live/report.md` still describe the MC-29 merge gate. Mission Control reconciles them separately; this pack does not edit them.

### 9.2 To be freshly verified before any external action — UNVERIFIED — ACCESS REQUIRED

- live Supabase production and test project state, including the paused Free test project (SU-494995);
- database scheduler, network extension or function-runtime availability;
- Supabase dashboard and administrative access;
- Lovable Owner access;
- GitHub Actions availability, run state and required `main` checks (#4816157);
- Resend administrative access (T-B48157) — operational only; not evidence of a product channel;
- AI provider configuration and data-control acceptance;
- Codex availability and eligibility;
- live grant state for the Build Plan §5.1 residual `anon` gate.

Stage 1 records these as freshness requirements only.

## 10. Uncertainty register

Carried as **unresolved, not decided** (MC-02 §2).

| ID | Uncertainty | Handling |
|---|---|---|
| U-1 | No currently approved external outbound channel is evidenced for reminders before SB-P-1.20. Email/Resend and SMS must not be inferred as product channels (C10 records carrier SMS as "not a required current channel"). | Stage 2 assesses whether Scenario A can be specified truthfully using documented app/Workspace/dashboard surfaces plus a delivery hold. A genuine T1/T3 issue is escalated before downstream stages. |
| U-2 | `FPDR-1` record carries an in-file "DRAFT" status label but was human-merged (PR #628) and is treated as canonical by later SB-P-1.12 Mission Control records (07, 09, 10). | Rely on the actual canonical crossing; note the discrepancy. Do not amend the Founder record. |
| U-3 | Row `20-§23-10` is assigned "SB-P-1.19/SB-P-1.15" in the SB-P-1.12 FCTM with no stated split rule. | Do not move or reclassify. Hold, and seek Mission Control reconciliation if allocation is required. |
| U-4 | In-app reminder availability depends on the unimplemented SB-P-1.13 Workspace. | Specification dependency carried under D13; not runtime evidence. |
| U-5 | Unresolved Founder decision #6 (retention after cancellation/non-payment) may affect reminder and notification history. | Stage 2 screens whether it is on this mission's critical path (Build Plan §15; Completion View §10). |

Stage 2 Delta candidates (MC-02 §2): missing scheduler and timezone implementation; absent notification consumer; transaction correction UI copy asserting a nonexistent notification workflow; no CI passes.

No Stage 3 trigger (T1–T8) has been found at Stage 1.

## 11. Scope flags

- production mutation: **NOT AUTHORIZED**
- migration execution: **NOT AUTHORIZED**
- delivery sync and publication: **NOT AUTHORIZED**
- implementation: **NOT AUTHORIZED**
- provider-account mutation: **NOT AUTHORIZED**
- Supabase schema/Auth/key mutation: **NOT AUTHORIZED**
- Lovable build execution: **NOT AUTHORIZED**
- scheduler runtime activation: **NOT AUTHORIZED**
- notification runtime or outbound provider activation: **NOT AUTHORIZED**
- AI provider activation: **NOT AUTHORIZED**

A DRAFT documentation pull request is not product delivery or publication.

## 12. Institutional Learning Intake Record — opened

Source 18 §3.1. Opened for Stage 2; the Definition Actor completes it in the Stage 2 Truth Pack.

Required status statement:

`Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force`

| Element | Stage 1 opening |
|---|---|
| Baseline | `main@3e0e144d717ae38744cb7d163dafb2547e2934f5`, 2026-10-09 |
| Phase 1 guide | `docs/phase-1-mission-blueprint/00_Phase_1_Institutional_Memory_Lessons_Capabilities_and_Operational_Guardrails.md`, blob `3da3d6d3f9b7fbd89de028ca0191d99484049ba9`, unchanged since the SB-P-1.14 intake |
| OLE promotions | 17 records under `organizational-learning/promotions/**`, unchanged since the SB-P-1.14 intake baseline `8a44bc98`. Under Source 18 §3.1 the delta to record is **zero added or superseded**; the SB-P-1.14 record (`169c7a27…`) is the prior reference. Stage 2 confirms. |
| Scope caveat | Promotions are `MISSION_SCOPED` unless their record says otherwise; unpromoted candidates are not authority. |
| Nonterminal upstream learning | Candidate context only, no authority effect (see below) |

Nonterminal upstream OLE lessons to consume:

- **SB-P-1.12** (`6447f815…`): runtime health and administrative recoverability are different states (L-1); continuity tracks are dependency-parallel (L-6); stable facts are recorded, not rediscovered (L-7); documentation can continue safely through an implementation incident (L-9).
- **SB-P-1.13** (`2d4a5e24…`): package readiness and Implementation Authorization are separate truths (L-1); upstream dependencies are specified, not claimed (L-2); one coordinated transaction cut-over (L-3); AI authority stays server-derived (L-4); confirmation is exact-action binding (L-5); provider evidence is versioned and revocable (L-6).
- **SB-P-1.14** (`ae8008f7…`): Stage 13 lock never implies permission to build (1); gate mapping is not builder ownership (2); PQ-2 needs one coordinated write path (4); CI or provider absence cannot substitute for live verification (5); stale live instructions are historical records (6). Its successor note: "Do not assume Ask CFO, intelligence, reminders or notifications run merely because prior mission documents are locked."

## 13. Verification-plan preview seed

Source 18 §4.9. Seed only; the verification-plan preview is recorded before any Implementation Authorization.

Risk areas for independent challenge:

- Ask CFO cannot write, including through prompt injection or conversational continuation;
- Manager and Employee denial paths for Ask CFO and Daily Intelligence;
- cross-business isolation inside scheduled jobs and notifications;
- a trigger, schedule or AI output treated as permission;
- a standing automation rule exceeding its stored scope;
- revoked permission honoured at execution time;
- stale or generic confirmation reused as authority;
- duplicate trigger, notification and Daily Intelligence noise;
- notification failure not marking completion;
- recurrence history integrity across snooze/reschedule;
- business-timezone and timezone-change handling;
- fabricated insight, unsupported forecast or fact/estimate confusion;
- historical 6:00 AM / 9:15 AM timings must not appear;
- narrow failure leaving unrelated operations available.

Founder-reserved scenarios: **A** and **B** (Section 5).

Preferred Stage 19 candidate: **Codex**, if capable, available and independent at activation. Where Claude Code is a builder, the verifier is another actor.

## 14. Communication, handover and canonical crossing plan

Initial communication records are created in this crossing:

- `communication/missions/SB-P-1.15/README.md` — mission index and Stage Ledger;
- `communication/missions/SB-P-1.15/decision-log.md`;
- `communication/missions/SB-P-1.15/handover-log.md`.

`communication/live/**` is not edited; Mission Control reconciles it separately (MC-02 §4).

Stage 1 crossing (one pull request, Source 18 §3.3):

1. this Intake Pack;
2. `mission-control/03-stage1-fctm-open.md`;
3. `claude-code/01-stage1-intake-discovery-report.md`;
4. the README, decision log and handover log;
5. Mission Control's Stage 1 decision record naming the exact reviewed commit, added by Mission Control.

Sequence: DRAFT pull request → Mission Control Stage 1 review → authorized-human merge → Mission Control post-merge verification → separate Stage 2 authorization.

## 15. Stage 2 boundary

Nothing in this pack authorizes Stage 2. After Stage 1 acceptance, a separate Mission Control instruction may authorize the Definition Actor to prepare the Stage 2 Mission Truth Pack: populated FCTM, obligation inventory, derived constraints, Delta, unresolved items and the completed Institutional Learning Intake Record.

**STAGE 1 INTAKE PACK PREPARED — STOP FOR MISSION CONTROL STAGE 1 REVIEW**
