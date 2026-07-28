# Smart Business Active Governance Sources

This directory contains the current active governance and operational source set for **Smart Business**, a Team LIPS product under Lighthouse Information Publishing Service (LIPS).

These files define why Smart Business exists, what it is, how it must be built, how work is governed, how releases are verified, and how approved platforms and AI systems may participate.

## Core principle

Smart Business follows:

> Humans serving humans.
>
> AI Assistant, Not AI Judge.
>
> Technology is a tool. Human improvement is the purpose.

The merchant remains the decision-maker. Smart Business assists with clarity, memory, organization, reminders, and business understanding.

## Authority and reading order

Use the source set in this order unless a mission specifies a narrower inheritance chain:

1. **Source 00 — Lighthouse Constitution**  
   Defines the enduring philosophy, human purpose, trust, value creation, leadership, and responsibility principles of Lighthouse.

2. **Source 01 — Smart Business Master System Manifesto**  
   Defines the product mission, target users, core experience, locked routes, AI philosophy, modular architecture, pricing philosophy, data ownership, and major product decisions.

3. **Sources 02–08 — Specialist product frameworks**  
   Define implementation boundaries for backend architecture, frontend experience, WhatsApp/API communication, AI behaviour, support, onboarding, brand, and growth.

4. **Source 09 — Master Roadmap Command**  
   Controls execution order, phases, mission routing, gates, and evidence requirements.

5. **Source 10 — Environment Activation Manual**  
   Defines when external execution environments may be activated and how founder actions, calibration, review, and implementation must proceed.

6. **Source 11 — Smart Business Product Truth Map**  
   Defines the approved product truth: features, purpose, availability, users, permissions, experience, behaviour, and boundaries.

7. **Source 12 — Product Execution and Release Framework**  
   Converts Product Truth into implementation, acceptance, pilot-readiness, release, and post-release controls. It consolidates the former Sources 12, 13, and 14.

8. **Source 15 — Mission Control Activation Template**  
   Standardizes mission authorization, inheritance checks, scope, deliverables, evidence, risk, handover, and completion reporting.

9. **Source 16A — Constitution Design Principles**  
   Defines how the Smart Business Constitution must be written, protected, evaluated, and deliberately evolved.

10. **Source 17 — AI Operations Manual**  
    Governs AI capabilities, tools, connectors, repository actions, communication, execution, continuity, handover, recovery, and human approval.

11. **P00 — Operational Profiles**  
    Defines platform-specific responsibilities and boundaries for Lovable, Supabase, WhatsApp, OpenAI, Voice AI, Cloudflare R2, and related execution systems.

## Source index

| Source | File | Purpose |
|---|---|---|
| 00 | [`00_Lighthouse_Constitution.md`](./00_Lighthouse_Constitution.md) | Lighthouse philosophy, purpose, trust, human service, value, leadership, and long-term principles. |
| 01 | [`01_Smart_Business_Master_System_Manifesto.md`](./01_Smart_Business_Master_System_Manifesto.md) | Smart Business identity, mission, target users, product rules, routes, AI philosophy, modularity, pricing, trust, and product truth. |
| 02 | [`02_Supabase_Architecture_Framework.md`](./02_Supabase_Architecture_Framework.md) | Database architecture, authentication, RLS, tenant isolation, tables, storage metadata, automation, privacy, reliability, and backend governance. |
| 03 | [`03_Lovable_Build_Framework.md`](./03_Lovable_Build_Framework.md) | Frontend and user-experience execution rules, approved routes, dashboard structure, component identifiers, communication hierarchy, and Lovable boundaries. |
| 04 | [`04_API_WhatsApp_OpenAI_Framework.md`](./04_API_WhatsApp_OpenAI_Framework.md) | WhatsApp webhook, identity routing, multimodal processing, permissions, reminders, Ask CFO, automations, support escalation, and cost protection. |
| 05 | [`05_AI_Behaviour_and_Model_Training_Framework.md`](./05_AI_Behaviour_and_Model_Training_Framework.md) | AI reasoning, language understanding, intent classification, safety, voice behaviour, role permissions, refusal, uncertainty, and human authority. |
| 06 | [`06_Support_and_Customer_Experience_Framework.md`](./06_Support_and_Customer_Experience_Framework.md) | Support philosophy, FAQ-first assistance, merchant trust, privacy explanations, employee boundaries, escalation, and customer communication tone. |
| 07 | [`07_Conversion_Onboarding_Framework.md`](./07_Conversion_Onboarding_Framework.md) | `/start` onboarding, conversion, quiz flow, language selection, lead capture, recommendations, trust messaging, activation, and first-day experience. |
| 08 | [`08_Smart_Business_Brand_and_Growth_Framework.md`](./08_Smart_Business_Brand_and_Growth_Framework.md) | Brand identity, positioning, visual direction, language accessibility, public messaging, pricing communication, privacy positioning, and controlled growth. |
| 09 | [`09_Master_Roadmap_Command.md`](./09_Master_Roadmap_Command.md) | Execution order, phases, specialist-room routing, environment gates, pilot entry, evidence, controlled evolution, and scaling discipline. |
| 10 | [`10_Smart_Business_Environment_Activation_Manual.md`](./10_Smart_Business_Environment_Activation_Manual.md) | External environment activation, Claude/Lovable role separation, activation packs, calibration, review, and approval workflow. |
| 11 | [`11_Smart_Business_Product_Truth_Map.md`](./11_Smart_Business_Product_Truth_Map.md) | Official product authority for features, subscriptions, roles, permissions, conversation-first experience, business memory, and feature boundaries. |
| 12 | [`12_Product_Execution_and_Release_Framework.md`](./12_Product_Execution_and_Release_Framework.md) | Unified implementation, acceptance, pilot-readiness, release, security, testing, evidence, and post-release framework. |
| 15 | [`15_Governance_Mission_Control_Activation_Template.md`](./15_Governance_Mission_Control_Activation_Template.md) | Standard mission structure, source synchronization, room authority, deliverables, evidence, risks, handover, and completion controls. |
| 16A | [`16A_Smart_Business_Constitution_Design_Principles.md`](./16A_Smart_Business_Constitution_Design_Principles.md) | Constitutional writing principles, enduring-truth tests, continuity, controlled evolution, and future-builder responsibility. |
| 17 | [`17_AI_Operations_Manual.md`](./17_AI_Operations_Manual.md) | AI governance, capability classes, permissions, approvals, repository operations, environment safety, auditability, continuity, and recovery. |
| P00 | [`P00_Operational_Profiles.md`](./P00_Operational_Profiles.md) | Platform-specific operational responsibilities, boundaries, completion checks, and shared execution principles. |

## Locked Smart Business decisions

The active source set establishes these enduring implementation boundaries:

- Product domain: `smartbusiness.teamlips.com`
- Corporate domain: `teamlips.com`
- Public routes: `/`, `/how-it-works`, `/start`, `/contact`, and `/dashboard` as Login
- Footer routes: `/contact`, `/privacy-policy`, `/terms-of-service`
- Hidden/internal routes: `/super-admin`, `/api/whatsapp-webhook`
- `/survey` is deprecated; use `/start`
- Core target: Kerala brick-and-mortar merchants
- Primary interaction: WhatsApp-first text, voice, photo, and conversation
- Ask CFO provides clarity, not authority
- Employee access is permission-scoped and does not expose owner financial intelligence by default
- Standard POS bridges are allowed
- Custom POS modifications inside the core platform are rejected; use integration or extension layers

## Working rules

Before any build or governance mission:

1. Read the relevant active sources.
2. Confirm current Product Truth.
3. Confirm the current roadmap phase and environment gate.
4. Define scope and explicit boundaries.
5. Reuse approved systems before creating new ones.
6. Preserve merchant privacy, permission isolation, auditability, and human decision ownership.
7. Verify with evidence before declaring completion.
8. Escalate ambiguity through Mission Control instead of guessing.

## Source consolidation note

The active set includes approved merged frameworks:

- **Source 12** consolidates the former Feature Implementation Blueprint, Feature Acceptance Matrix, and Pilot Readiness Audit.
- **Source 17** consolidates AI capability governance, AI development operations, and project continuity/handover guidance.
- **P00** consolidates approved platform operational profiles.

Historical references may remain where they clearly record merge provenance. Current operational work must use the active merged sources.

## Governance boundaries

These documents must not be silently rewritten, reinterpreted, or bypassed by implementation tools.

- Founder authority remains final.
- Mission Control coordinates execution.
- Specialist rooms and platforms act only within authorized missions.
- Tool access does not equal authority.
- Product Truth cannot be redefined by frontend, backend, AI, APIs, vendors, or implementation convenience.
- Governance changes require controlled review and Founder approval.

## Final principle

Smart Business is not built to prove technological sophistication.

It is built so a busy merchant can feel:

> My business is clearer, my stress is lower, and I am still in control.
