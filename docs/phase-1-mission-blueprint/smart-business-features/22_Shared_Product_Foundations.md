# Smart Business Feature Definition — Shared Product Foundations

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **BUILD NOW — CROSS-PRODUCT ARCHITECTURE CONTRACT**  
**Commercial availability:** Shared across Ledger, Manager and approved add-ons  
**Authority boundary:** New features must reuse and extend shared foundations where appropriate. A narrow feature mission must not silently create duplicate truth, permissions, reminders, documents, identities, AI brains or channel-specific business logic.

---

## 1. Feature Identity

Shared Product Foundations define the reusable product architecture that lets Smart Business remain one coherent assistant as features grow.

These foundations exist to prevent each feature or channel from independently recreating:

- Business Memory;
- permissions;
- identities;
- conversation context;
- AI orchestration/intelligence;
- reminders;
- notifications;
- document interpretation;
- location;
- clarification/confirmation;
- audit/history;
- idempotency;
- integration patterns.

The contract protects simplicity, consistency, security and long-term maintainability.

---

## 2. Founder Problem Statement

Smart Business evolved through many feature ideas. Without an explicit shared-foundation rule, future builders could create:

- separate Ledgers for WhatsApp and web;
- separate AI brains per feature/channel;
- duplicate customer/supplier identities;
- separate reminder tables per module;
- feature-specific OCR pipelines;
- inconsistent permissions;
- duplicated notification logic;
- conflicting interpretations of the same business event.

That would make the product harder to trust and maintain.

---

## 3. Lighthouse Principles

- One product, not a collection of mini-apps.
- Reuse before duplication.
- Technology serves human clarity.
- Human authority remains consistent across features.
- Preserve provenance and auditability.
- Narrow feature scope must not erase global product completeness.
- Standardize the foundation; customize/integrate at the edges.

---

## 4. Business Memory Foundation

Smart Business should maintain one authoritative business-memory model across approved features/channels.

Business Memory may include linked domain facts such as:

- Ledger events;
- customers/credit;
- suppliers;
- inventory/catalog;
- documents;
- orders/deliveries;
- attendance/HR;
- payments/reconciliation;
- compliance records;
- reminders;
- operational context.

A feature may own its domain model while still contributing to one connected Business Memory.

Do not create a second truth merely because a new UI/channel is introduced.

---

## 5. Identity Foundation

Shared identities should be reused where appropriate for:

- business;
- Owner;
- Manager;
- Employee;
- customer;
- supplier;
- delivery staff;
- product/catalog item;
- external integration/provider references.

Avoid duplicate identity silos caused by channel, add-on or feature boundaries.

Identity matching must clarify ambiguity before consequential linking.

---

## 6. Permission / Business Isolation Foundation

One authoritative permission/business-isolation model applies across:

- UI/workspace;
- WhatsApp;
- Conversation Workspace;
- server functions/APIs;
- database/RLS;
- background jobs;
- integrations;
- exports/files;
- AI tools.

Feature-specific permissions may extend the model but cannot bypass it.

---

## 7. Conversation / Intent-Action Foundation

Approved conversational channels should share:

- intent understanding;
- role/permission context;
- business identity;
- clarification rules;
- confirmation model;
- action dispatch;
- Business Memory;
- audit/idempotency.

WhatsApp and the native Conversation Workspace must not implement separate feature logic.

This foundation is implemented in concert with the dedicated AI orchestration contract rather than by embedding independent LLM logic into each channel.

---

## 8. Human Language Foundation

English, Malayalam and Manglish support is shared across relevant features/channels.

Features should not each create independent slang dictionaries or language rules.

The foundation should support:

- natural Kerala business vocabulary;
- mixed-language text/voice;
- name/unit variation;
- clarification of consequential ambiguity;
- user language preference where appropriate.

---

## 9. Universal Document Intelligence Foundation

One shared document-intelligence pipeline should support feature-specific document types through domain adapters/rules.

Core pattern:

**capture/upload → interpret → preview → clarify where needed → confirm → validated domain update**.

Feature modules should not build separate OCR/file parsers merely because their target record differs.

---

## 10. Document / Receipt Memory Foundation

Original/relevant business documents should use a shared secure storage/retrieval model where suitable, with:

- business/actor/source linkage;
- document identity/version;
- permission-scoped retrieval;
- retention/privacy;
- links to resulting business records.

Receipt Cabinet is a named capability inside this shared document-memory direction, not a duplicate storage universe.

---

## 11. Reminder / Delegated Automation Foundation

One shared Reminder Engine supports:

- business/personal reminders;
- compliance;
- supplier/reorder follow-up;
- credit follow-up;
- HR;
- delivery;
- Ask CFO continuation.

Standing automation rules are stored delegated authority, not AI-created permission.

Feature-specific schedulers should be justified by true domain needs rather than convenience.

---

## 12. Notification Foundation

A shared Notification foundation should coordinate approved outbound communication across channels.

It should support:

- recipient identity/role;
- language;
- channel preference/availability;
- template/provider requirements;
- delivery/retry state;
- duplicate suppression;
- privacy;
- link to originating business event.

Notification delivery is separate from business-event completion.

---

## 13. Confirmation / Clarification Foundation

Shared confirmation principles apply across features:

- clarify uncertain identity/intent before consequential write;
- preview uncertain/material document import;
- bind confirmation to exact actor/action/state/object;
- revalidate permission/state at execution;
- do not treat generic/stale `Yes` as unlimited authority.

Feature UX may differ, but integrity rules remain consistent.

---

## 14. Audit / Human Context Foundation

Consequential features should preserve relevant audit/provenance such as:

- raw/original event;
- actor;
- source/channel;
- interpretation;
- correction;
- authorized human context;
- confirmation/approval;
- resulting action;
- timestamps.

Human context should be able to change interpretation without silently erasing original evidence.

---

## 15. Idempotency / Duplicate Protection

Shared patterns are required for actions vulnerable to retry/duplication, including:

- payment/provider events;
- POS ingestion;
- document imports;
- reminders;
- automation triggers;
- order creation/assignment;
- Ledger writes;
- notifications;
- AI/tool execution retries;
- WhatsApp webhook retries.

A retry must not create duplicate financial/business truth.

---

## 16. Location Foundation

Where features need location, use a shared purpose-limited primitive rather than independent tracking systems.

Approved uses may include:

- point-in-time attendance verification;
- customer delivery destination;
- point-in-time delivery proof/context;
- other explicitly approved operational purposes.

Default continuous employee surveillance is rejected.

Each feature must define:

- why location is needed;
- who may see it;
- when it is captured;
- how long it is retained;
- when access ends.

---

## 17. Integration / Extension Foundation

Smart Business should standardize core business behavior and customize/integrate at the edge.

Use approved extension/adapter patterns for:

- POS;
- payment/bank providers;
- WhatsApp;
- OpenAI/model services;
- billing providers;
- storage/document services;
- future external systems.

Custom client-specific modifications inside core are rejected unless explicitly reclassified through governance.

---

## 18. Scheduler / Background Job Foundation

Scheduled work may include:

- Daily Intelligence;
- reminders;
- safe retries;
- retention/cleanup;
- sync/reconciliation;
- other deterministic already-authorized jobs.

A background job may execute maintenance/authorized actions but cannot create new human/business authority.

Jobs should be:

- idempotent where needed;
- observable;
- narrowly retryable;
- permission/authority-aware at execution where consequential.

---

## 19. Error and Narrow-failure Foundation

Product-wide rule:

> Block only what is unsafe or unavailable. Keep unrelated safe work available.

Shared error behavior should support:

- clear failure reason;
- safe retry/recovery;
- no false success;
- preserved user input/evidence where appropriate;
- operational observability;
- narrow containment.

One failing provider/module should not automatically freeze Smart Business globally.

---

## 20. Data / Schema Stability Principle

Founder-origin history included a useful Day-1 stable-schema lesson.

Current reconciliation preserves the architectural principle:

- avoid destructive/dynamic schema creation/deletion based on subscription state;
- keep historical records durable;
- use entitlements/permissions to control capability;
- evolve schema through governed migrations.

Exact table inventory may evolve.

---

## 21. Performance Foundation

Current product direction targets a responsive experience (sub-3-second for critical interactions where technically reasonable), without weakening:

- authorization;
- financial correctness;
- confirmation;
- privacy;
- auditability.

Shared caching/query/model-selection patterns should be used where safe rather than repeated feature-level reinvention.

---

## 22. Platform Quality / Testability

Shared product quality expectations include:

- stable identifiers/test hooks for critical UI flows where appropriate;
- deterministic tests for financial/permission rules;
- integration failure tests;
- runtime verification;
- independent verification before Mission Control acceptance.

Green CI alone is not feature acceptance.

---

## 23. Privacy / Data Ownership Foundation

- Merchant data belongs to merchant.
- No cross-business leakage.
- No routine platform access to merchant private intelligence.
- Support access is purpose-limited.
- Staff data is role/purpose limited.
- Individual merchant data must not be sold for unrelated monetization.
- Aggregate product/operational insight must be privacy-respecting/governed.

---

## 24. AI Authority Foundation

Across all features, AI may:

- remember through authorized Smart Business memory;
- organize;
- calculate;
- interpret;
- explain;
- identify patterns;
- suggest;
- prepare drafts/actions.

AI does not independently create permission or final business authority.

The Owner remains the final human decision-maker for consequential merchant decisions unless a valid stored delegation explicitly covers execution.

---

## 25. AI Orchestration / OpenAI Intelligence Foundation

Smart Business requires one shared intelligence/orchestration layer connecting channels and feature domains.

The dedicated mature contract is:

`24_AI_Orchestration_and_OpenAI_Intelligence_Foundation.md`

OpenAI is the current approved intelligence provider supporting language understanding, intent classification, structured extraction, multimodal/document interpretation, Ask CFO reasoning, summarisation, recommendation and controlled function/tool calling.

The orchestration foundation must connect:

- WhatsApp and the Conversation Workspace;
- text, voice, image and document inputs;
- Human Language;
- Universal Document Intelligence;
- Ledger / Business Memory;
- Ask CFO;
- Reminder Engine;
- stock/supplier/reorder;
- orders/delivery;
- HR;
- support;
- other approved feature domains.

Core separation of responsibility:

- **OpenAI / AI layer:** understand, reason, extract, summarize, suggest and prepare structured tool calls.
- **Permission Engine:** decides what the actor is allowed to access/do.
- **Business Memory / domain services:** own authoritative merchant data and deterministic business rules.
- **Confirmation / delegated authority:** controls consequential execution.
- **Human:** retains final decision ownership except where an explicit valid standing delegation already exists.

No feature or channel should create a parallel AI brain merely because its interface or domain differs.

---

## 26. Dedicated Channel Adapter Contracts

The native Conversation Workspace and WhatsApp are separate channel experiences over the same foundations.

Dedicated WhatsApp behavior is defined in:

`23_WhatsApp_Intelligence_and_Channel_Adapter.md`

WhatsApp owns transport/provider concerns such as webhooks, templates, media transfer and delivery state. It does not own Business Memory, permissions or feature logic.

---

## 27. Dependency Rule for Product Missions

Every future Product Mission/EIS must state:

1. which mature feature(s) it advances;
2. which shared foundations it reuses;
3. whether it consumes AI orchestration and/or a channel adapter;
4. what already exists and must not be duplicated;
5. what remains committed but outside current mission;
6. exact blockers/dependencies;
7. required evidence for acceptance.

A narrow mission cannot demote unimplemented feature scope to `Build Later` by convenience.

---

## 28. Explicit Non-goals

- duplicate Business Memory by channel;
- duplicate Permission Engine per feature;
- duplicate AI brain/orchestrator per channel or feature;
- duplicate reminder scheduler per feature;
- duplicate OCR/document pipeline;
- duplicate customer/supplier identity silos;
- continuous employee GPS foundation;
- subscription-driven create/drop of core domain tables;
- AI/tool capability treated as authority;
- custom client-specific core forks.

---

## 29. Acceptance Scenarios

Architecture/Product Mission verification should prove at least:

1. WhatsApp and Conversation Workspace use one Business Memory/action truth.
2. WhatsApp and Conversation Workspace share one permission-aware AI orchestration path rather than separate feature brains.
3. Cross-business access is blocked consistently across channels/services/AI tools.
4. Multiple features reuse one Reminder Engine.
5. Multiple document types reuse one UDI pipeline with domain adapters.
6. Customer/supplier identity is not duplicated solely by channel/feature.
7. Consequential confirmation is exact and revalidated at execution.
8. Duplicate external/retry events are idempotent.
9. Attendance/delivery location uses purpose-limited shared primitive.
10. Feature/provider failure is narrowly contained.
11. Subscription changes do not dynamically destroy core schema/history.
12. Audit retains raw evidence plus authorized human context where required.
13. OpenAI/model outage does not corrupt authoritative business state.
14. Future implementation documents identify reused foundations before introducing new subsystems.

---

## 30. Historical Corrections / Superseded Behavior

Superseded:

- channel-specific Ledgers/permissions;
- separate WhatsApp-only vs web-only AI/business engines;
- dynamic schema create/drop by subscription state;
- duplicate per-feature reminders/OCR without architectural reason;
- continuous employee surveillance as shared location pattern;
- custom client-specific core modifications.

Historical provider/model/table/timing constants remain engineering provenance unless current architecture separately adopts them.

---

## 31. Provenance and Hydration Coverage

Reconciled primarily from Founder-origin Section 7 Q87–100, supported by Sections 1–6 cross-feature evidence; Smart Business Planning 1–20; Source 04 API/WhatsApp/OpenAI Framework; Source 05 AI Behaviour Framework; P00 OpenAI/WhatsApp Operational Profiles; project-room security/architecture lessons; Final Feature Reconciliation Register §§28–31; Source 01/02/11/12/17 as relevant.

**Hydration result:** all current recovered anti-duplication, shared-foundation, AI orchestration, channel-adapter, failure-containment, confirmation, privacy and AI-authority behaviors have an explicit home in this contract or a named specialized feature contract.

---

## 32. Completion Gate

Shared Foundations are not a one-time implementation milestone. They are complete enough for a release only when the relevant foundation is proven and every feature mission demonstrably reuses/extends it without creating conflicting parallel truth, permissions or AI orchestration.