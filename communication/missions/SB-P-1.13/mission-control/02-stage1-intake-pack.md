# SB-P-1.13 — Stage 1 Mission Initiation and Intake Pack

**Mission ID:** SB-P-1.13  
**Mission Name:** Native Conversation & AI Intelligence Foundation  
**Lifecycle:** Source 18 v1.2 — Stage 1  
**Status:** DRAFT — MISSION CONTROL REVIEW / HUMAN MERGE REQUIRED  
**Intake baseline:** `main@37cb67c18d2a39664505715cc2d96494f0da14d1`  
**Stage 1 owner:** Mission Control  
**Definition Actor after canonical merge:** Claude Code

## 1. Product outcome

Build Plan §10.2:

> Create Smart Business's own conversational operating surface independently of WhatsApp.

Founder experience anchors:

- authorized merchant can use natural English, Malayalam or Manglish;
- consequential ambiguity receives the smallest useful clarification;
- natural language cannot bypass permissions;
- structured pages remain available;
- conversation enriches rather than replaces normal interfaces;
- Smart Business remains usable when WhatsApp/Meta is disconnected.

## 2. Primary source pack

| Source | Path | Intake blob |
|---|---|---|
| Build Plan | `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` |
| Global Product Completion View | `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md` | `ee76d920146008056781fced41be938675c4be0b` |
| Contract 8 | `docs/phase-1-mission-blueprint/smart-business-features/08_Support_Automation.md` | `97397780114249d027601d0a44dea032214c2073` |
| Contract 9 | `docs/phase-1-mission-blueprint/smart-business-features/09_Human_Language_Layer.md` | `649c55f396e3cd53f31e95bbafbd6af5fc7550a7` |
| Contract 10 | `docs/phase-1-mission-blueprint/smart-business-features/10_Conversation_Workspace_and_Channel_Independence.md` | `5c145ed72677800893954602d403cc73e957731a` |
| Contract 12 | `docs/phase-1-mission-blueprint/smart-business-features/12_Voice_and_Voice_Plus.md` | `6d48feff8f9fddffbbc98ee23a71a541299e48ba` |
| Contract 22 | `docs/phase-1-mission-blueprint/smart-business-features/22_Shared_Product_Foundations.md` | `61e1bb91970be410e9daf1d3b80875c35f29db04` |
| Contract 24 | `docs/phase-1-mission-blueprint/smart-business-features/24_AI_Orchestration_and_OpenAI_Intelligence_Foundation.md` | `0c1dcbb21a3d90e5ba2710200578ca4eb8f7b109` |
| Source 18 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | `0945bda60a93c99909c3b7a247d5427ebe256011` |

Build Plan governing section: **§10.2**.

## 3. Scope boundaries

### Contract 8 — limited opening

SB-P-1.13 owns only the **FAQ-before-AI / low-compute support foundation in the shared message pipeline**.

Broader support automation, human escalation, operating surfaces and support-completion behavior remain assigned to SB-P-1.19.

### Contract 12 — Basic Voice only

SB-P-1.13 advances **Basic Voice**.

Voice Plus remains assigned to SB-P-1.19 and must not be silently pulled forward.

Basic Voice has an explicit environment/provider activation gate because the Build Plan records that no mature voice-provider path is presently established.

### Contract 21 — delegated-authority compatibility opening

The conversational/action kernel must propagate and obey the authority model locked by SB-P-1.12.

Contract 21 is therefore opened only for the delegated permission-context / denial / execution-authority touch points identified during Stage 2.

This does not reopen SB-P-1.12 Product Truth.

### Later-mission seams

The following remain dependency/compatibility seams rather than automatic mission expansion:

- UDI / durable attachment handling — SB-P-1.14;
- mature Business Memory/document persistence — SB-P-1.14;
- Ask CFO — SB-P-1.15;
- WhatsApp adapter — SB-P-1.20;
- Voice Plus — SB-P-1.19.

Stage 2 must inspect the full contracts and open any delegated contract required by Source 18 rather than treating this Stage 1 list as irrevocably exhaustive.

## 4. Draft workstream register

| Workstream | Scope |
|---|---|
| WS-A — Native Conversation Workspace | native conversation surface, thread/session UX, structured-page coexistence, Meta independence |
| WS-B — Language & Context | English/Malayalam/Manglish, ambiguity/clarification, conversation context |
| WS-C — AI Orchestration & Governed Tool Kernel | provider abstraction, typed proposals, permission context, confirmation, deterministic command execution, audit |
| WS-D — Basic Voice | speech input/output path, permission inheritance, provider/environment activation gate, graceful degradation |
| WS-E — FAQ-first Support Foundation | FAQ-before-AI routing and low-compute support behavior only |
| WS-F — Attachment Handoff Boundary | safe attachment intake/handoff toward SB-P-1.14 UDI without pulling durable UDI implementation forward |
| WS-G — Failure, Observability & Provider Independence | AI/provider failure behavior, timeout/degradation, no-WhatsApp path, audit/operational evidence |

Draft only; fixed at Stage 13.

## 5. Founder runtime verification anchors

### A. Natural-language governed action

Authorized user describes a transaction naturally. Smart Business clarifies only when needed, previews the consequential action, executes only through the existing governed command/RPC, and confirms actual stored state. Employee requests for Owner-only profit are denied.

### B. WhatsApp-independence test

Meta/WhatsApp is unavailable. Owner completes an approved native workflow successfully with evidence proving no Meta/WhatsApp call was required.

These anchors must be traced through the FCTM and later Experience Verification Matrix.

## 6. Upstream SB-P-1.12 dependency state

SB-P-1.12 provides locked documentary authority for:

- identity;
- business authority;
- permissions/isolation;
- governed execution concepts;
- confirmation/revocation boundaries.

But implementation/runtime evidence remains incomplete and Implementation Authorization is withheld.

SB-P-1.13 Stage 2 must therefore distinguish:

- specification dependency satisfied by locked SB-P-1.12 artifacts;
- implementation dependency still blocked;
- evidence dependency still unverified.

No later mission may convert an upstream documentary specification into a false runtime fact.

## 7. Institutional Learning Intake

Opened for Stage 2.

The Definition Actor must consume:

- `docs/phase-1-mission-blueprint/00_Phase_1_Institutional_Memory_Lessons_Capabilities_and_Operational_Guardrails.md`;
- current canonical `organizational-learning/promotions/**`;
- only the promotions applicable to conversation, AI, permissions, channels, provider failure, voice and human verification.

Stage 2 records dispositions by promotion ID and does not re-derive already accepted history without a freshness reason.

## 8. Verification-plan preview seed

Risk areas requiring independent challenge later include:

- permission-context propagation through AI/tool proposals;
- denial of unauthorized data/action access;
- confirmation/revocation and stale-action behavior;
- cross-business context isolation;
- prompt/tool injection boundaries;
- AI-provider failure and timeout behavior;
- deterministic command execution versus model-generated authority;
- voice modality preserving the same permission and confirmation rules;
- native workflow independence from WhatsApp.

Preferred Stage 19 candidate: Codex if eligible and independent at activation time.

## 9. Topology facts requiring fresh verification before external action

Before any later provider/runtime action:

- current native conversation implementation state;
- current OpenAI/provider integration topology;
- current voice-provider topology;
- current attachment/media path;
- current tool/RPC/action execution surfaces;
- current test/runtime environment availability;
- current Supabase/GitHub/Lovable administrative access state where operationally relevant.

Fresh verification is required only when the later action depends on mutable provider state.

## 10. Canonical crossing plan

Stage 1 crossing consists of:

- Mission Control initiation/actor-allocation record;
- this Intake Pack;
- FCTM Opening Record;
- mission README;
- decision log;
- handover log.

After human merge, Mission Control verifies the exact crossing and separately authorizes Stage 2.

## 11. Explicitly not authorized

No:

- Stage 2 population yet;
- Founder decision gate;
- Blueprint drafting;
- EIS drafting;
- implementation package;
- code;
- SQL/schema/migration;
- provider activation/configuration;
- voice-provider purchase/activation;
- production mutation;
- delivery publication.

**STAGE 1 INTAKE PACK PREPARED — STOP FOR FOUNDER HUMAN MERGE**
