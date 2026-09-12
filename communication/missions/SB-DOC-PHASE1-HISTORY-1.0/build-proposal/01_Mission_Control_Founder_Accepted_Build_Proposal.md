# SMART BUSINESS MISSION CONTROL

# Founder-Accepted Build Proposal

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`  
**Artifact Type:** Pre-Closeout Build Proposal — NOT IMPLEMENTATION AUTHORIZATION  
**Authority:** Mission Control proposal accepted by Founder, with Founder amendment separating native conversation from WhatsApp integration  
**Status:** `FOUNDER ACCEPTED — PENDING CLAUDE CODE INDEPENDENT ENGINEERING REVIEW`  
**Date:** `2026-09-12`

---

## 1. Purpose

Before closing the historical reconstruction mission, archiving its communication workspace, or beginning new governed `SB-P-*` Product Missions, Mission Control must establish a repository-grounded proposal for how the complete recovered Smart Business product should be built from the implementation that already exists.

This artifact is the bridge between:

**historical understanding → current Product Truth → current implementation reality → future governed Product Missions**

It is not an implementation instruction.

It does not authorize any schema change, application change, deployment, migration, platform action, or new `SB-P-*` mission.

Its next purpose is to be independently challenged by Claude Code using the complete canonical repository and current engineering evidence.

---

## 2. Governing Product Direction

The proposal must preserve the Lighthouse and Smart Business principles already recovered and reconciled:

- Humans serving humans.
- AI Assistant, Not AI Judge.
- Technology is a tool; human improvement is the purpose.
- Build for clarity, dignity, usefulness, and peace of mind.
- Respect existing merchant habits.
- Do not force merchants to think like software operators.
- Protect human decision ownership.
- Protect trust, privacy, simplicity, sustainability, and maintainability.
- Customize the edges; standardize the foundation.
- Do not create duplicate channel-specific business logic.
- Do not let implementation history override current Product Truth.

The target is not to add twenty-five disconnected modules to the current app.

The target is to transform the current technical foundation into **one coherent Smart Business** that fully implements the twenty-five mature feature/foundation contracts.

---

## 3. Current Implementation Reading

The current Smart Business implementation contains meaningful foundations, including:

- authentication and protected application access;
- business identity;
- transaction capture and correction/audit foundations;
- inventory and inventory-movement foundations;
- catalog/product/pricing/tax/import foundations;
- dashboard/workspace foundations;
- owner-scoped isolation/RLS foundations;
- parser/import/idempotency/lease/guard foundations;
- repository-first engineering and protected-main controls.

However, no mature feature contract is presently proven complete end-to-end.

Major missing or incomplete product foundations include:

- mature Owner/Manager/Staff/external-role permissions;
- native Conversation Workspace;
- Human Language Layer;
- Basic Voice;
- AI Orchestration/OpenAI intelligence foundation;
- Business Memory completion;
- Universal Document Intelligence and Receipt Cabinet;
- durable governed media/document storage;
- reminder/delegated automation;
- Daily Intelligence;
- Ask CFO;
- payment verification/reconciliation;
- Smart Credit;
- supplier/reorder maturity;
- POS/counter/closing-cash intelligence;
- Staff/HR;
- Compliance;
- Smart Order & Delivery;
- subscription/account lifecycle;
- support automation;
- mature Super Admin/platform stewardship;
- complete onboarding/first-value experience;
- WhatsApp channel integration.

The current system should therefore be treated as a **valuable but incomplete operational foundation**, not as the final product shape.

---

# 4. Catalog / Pricing Reconciliation

## 4.1 Founder concern

The Founder correctly identified a product-experience drift risk: Smart Business currently exposes Catalog/Pricing as a prominent standalone surface even though the recovered Founder-origin product model was fundamentally conversation-first and centred on transactions, inventory, business memory, clarity, reminders, intelligence, stock, suppliers, customers, operations, and human decision support.

A merchant should not need to ask:

> Is this a Catalog task, an Inventory task, or a Transaction task?

That creates internal-software mental load rather than merchant clarity.

## 4.2 Mission Control verdict

**The Founder is substantially correct about the product-surface concern.**

However, the underlying Catalog/Product/Pricing engineering must not be deleted.

The correct distinction is:

### Preserve

The system still needs reusable product identity and commercial metadata for:

- inventory linkage;
- selling prices;
- SKU/barcode identity;
- sales and purchase workflows;
- POS bridges;
- customer orders;
- supplier/reorder workflows;
- UDI/document interpretation;
- price history and auditability;
- future operational reporting.

### Correct

The drift is that this supporting domain became a disproportionately prominent **merchant-facing product module**.

### New classification

Treat the existing Catalog capability as:

> **Product & Price Master — CORE SHARED FOUNDATION**

It is not a twenty-sixth Smart Business feature.

## 4.3 Required resolution approach

1. **Freeze independent Catalog expansion.**
   - Do not keep growing Catalog as a separate product family.

2. **Preserve the reusable engineering.**
   - Keep product identity, pricing, tax, history, audit, import, and product–inventory relationships where architecturally sound.

3. **Reclassify it as a shared foundation.**
   - Stock, Orders, POS, Transactions, Supplier, UDI, Conversation, and reporting may use it.

4. **Contextualize merchant access.**
   - Products and Prices should be available where the merchant needs them rather than demanding a permanent top-level mental category.

5. **Demote the top-level Catalog surface only after equivalent access exists.**
   - No destructive UX removal before replacement workflows are proven.

6. **Preserve compatibility during transition.**
   - Existing routes/deep links and structured-management pages may remain temporarily or as an advanced structured-management surface.

7. **Do not merge master-data truth into transactions.**
   - Transactions are events, not product master records.

8. **Do not make inventory the sole commercial product master.**
   - Inventory owns stock quantity/state; Product & Price Master owns reusable product/commercial identity.

This is a **PRESERVE + EVOLVE + DEMOTE SURFACE** decision, not deletion.

---

# 5. Target Shared Architecture

The twenty-five contracts should be implemented through a small number of reusable foundations.

## 5.1 One Authority and Identity Kernel

Must ultimately govern:

- Owner;
- Manager;
- Employee;
- Delivery Staff;
- Customer;
- Supplier;
- business membership;
- permission scope;
- delegated authority;
- feature/commercial entitlement where applicable;
- runtime revalidation;
- tenant isolation.

No channel, AI model, reminder, scheduler, document, or UI may invent authority.

## 5.2 One Business Command / Action Path

Consequential operations should converge on:

**input → interpretation → permission → clarification/preview when required → confirmation or stored delegation → deterministic domain command → authoritative write → audit/event → response**

The same command path should be callable from:

- native Conversation Workspace;
- structured application surfaces;
- UDI/document interpretation;
- reminders/automation;
- later WhatsApp integration;
- future standard POS adapters.

## 5.3 One Business Memory

Structured authoritative business truth remains in Supabase/Postgres.

Binary originals and governed media/documents should use the approved storage foundation, with authoritative ownership, permissions, provenance, lifecycle, and domain linkage controlled by Smart Business.

## 5.4 One Native Conversation and AI Intelligence Kernel

The native Smart Business Conversation Workspace must be a first-class Smart Business capability, not a mirror of WhatsApp.

It should share:

- Business Memory;
- permissions;
- language context;
- conversation context;
- AI orchestration;
- confirmation state;
- deterministic domain commands;
- voice/document attachment handling;
- auditability.

## 5.5 One Automation / Reminder Kernel

Reminders, Daily Intelligence, Compliance, credit follow-up, supplier continuation, Staff/HR reminders, orders/delivery, and other time-based continuations should reuse one governed scheduling/delegation foundation.

## 5.6 Thin Channel Adapters

External channels must adapt into Smart Business.

They must not become independent business systems.

---

# 6. Founder Amendment — Native Smart Business Independence From WhatsApp

The original Mission Control proposal placed native Conversation Workspace and WhatsApp integration in the same proposed Product Mission.

The Founder rejected that coupling and directed an intentional architectural separation.

Mission Control accepts this amendment.

## 6.1 Locked architectural intent

> **Smart Business must be operationally capable even when WhatsApp is temporarily unavailable.**

Therefore:

- native Conversation Workspace and AI intelligence are built first;
- WhatsApp is integrated later as a separate first-class channel adapter;
- WhatsApp does not own Business Memory;
- WhatsApp does not own permissions;
- WhatsApp does not own AI/business intelligence;
- WhatsApp does not own domain commands;
- WhatsApp does not own reminder logic;
- WhatsApp does not own UDI;
- WhatsApp does not create a second business-logic stack.

## 6.2 Product/architecture distinction

**Experience / go-to-market strategy:** WhatsApp-first.  
**System architecture:** channel-independent.  
**Native Conversation Workspace:** first-class Smart Business access channel.  
**WhatsApp:** first-class external channel adapter.

## 6.3 Acceptance principle before WhatsApp integration

Before the WhatsApp Product Mission begins, Mission Control should be able to disconnect Meta/WhatsApp completely and still prove that Smart Business can function through its own application for approved capabilities.

The merchant should still be able to use the native app to perform approved workflows through text, Basic Voice, documents/media, business memory, reminders, intelligence, and operational surfaces as those contracts are completed.

## 6.4 Acceptance principle after WhatsApp integration

After WhatsApp integration:

> The same Smart Business intelligence, permissions, commands, memory, and confirmations become available through another doorway.

The preferred flow is:

**Meta webhook → channel/identity validation → normalized Smart Business message → existing Conversation/AI kernel → existing permission/action path → normalized result → WhatsApp delivery**

Not:

**WhatsApp → separate bot → separate rules → separate business logic → database**

---

# 7. Minimum Responsible Future Product Mission Sequence

Mission Control proposes **nine future Product Missions**.

These mission numbers are part of the Founder-accepted sequencing proposal and remain subject to final confirmation after Claude Code engineering review and Mission Control reconciliation.

No mission below is implementation-authorized by this document.

| Proposed Mission | Primary Outcome | Mature Contracts Materially Advanced |
|---|---|---|
| **SB-P-1.12 — Authority, Identity & Product Surface Foundation** | Mature role authority, tenant isolation, execution security, shared identity primitives, Catalog/Product & Price Master reconciliation | 21, 22, 20, 17 + Catalog reconciliation |
| **SB-P-1.13 — Native Conversation & AI Intelligence Foundation** | Native Smart Business Conversation Workspace, Human Language, Basic Voice, shared AI/tool/confirmation/action kernel | 9, 10, 12 Basic, 24, 22 |
| **SB-P-1.14 — Business Memory, Documents & Durable Media** | Mature Ledger/Business Memory foundation, UDI, Receipt Cabinet, governed document/media storage | 3, 5, 25, 22 |
| **SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO** | Shared reminder/delegated automation, proactive intelligence rhythm, read-only Ask CFO | 2, 4, 11 |
| **SB-P-1.16 — Financial Integrity & Credit** | Credit/repayment maturity, payment evidence, bank/payment reconciliation | 3 completion, 14, 15 |
| **SB-P-1.17 — Manager Operations** | Stock/supplier/reorder completion, standard POS intelligence, closing cash, mature Manager workspace | 7, 13, 17 |
| **SB-P-1.18 — Controlled Business Add-ons** | Smart Order & Delivery, Staff/HR, Compliance as separately gated workstreams over shared foundations | 1, 6, 16 |
| **SB-P-1.19 — Activation, Lifecycle & Platform Stewardship** | Onboarding/first value, subscriptions/account lifecycle, support automation, Super Admin, Voice Plus | 8, 18, 19, 20, 12A |
| **SB-P-1.20 — WhatsApp Channel Integration** | Meta WhatsApp Cloud API integrated as a thin adapter into the already-complete Smart Business intelligence/action system | 23 + channel verification of 9, 10, 12, 22, 24 and applicable feature workflows |

Mission Control will not reduce the mission count merely for cosmetic simplicity if doing so creates unsafe mega-missions.

Likewise, it will not split every contract into its own mission if shared foundations can responsibly serve multiple features.

---

# 8. Mission Intent and Exit Direction

## 8.1 Proposed SB-P-1.12 — Authority, Identity & Product Surface Foundation

Purpose:

Make all later feature work safe.

Expected areas:

- mature role model;
- permission matrix;
- business membership/identity primitives;
- owner delegation boundaries;
- execution-time authorization;
- tenant isolation tests;
- RLS/grant/function-security review;
- security/performance correction where evidence requires it;
- feature/entitlement primitives where needed;
- Product & Price Master reclassification;
- safe Catalog surface demotion plan.

Must prove both allowed and denied behaviour.

## 8.2 Proposed SB-P-1.13 — Native Conversation & AI Intelligence Foundation

Purpose:

Create Smart Business's own first-class conversational operating surface independently of WhatsApp.

Expected areas:

- native conversation UI/runtime;
- English/Malayalam/Manglish understanding;
- conversation state/context;
- Basic Voice;
- shared AI orchestration;
- typed tool/action proposals;
- permission-context propagation;
- preview/clarification/confirmation flow;
- deterministic domain-command execution;
- audit trail;
- attachment handoff into shared document path.

Critical acceptance statement:

> Smart Business can understand and safely execute approved merchant workflows through its own app without Meta/WhatsApp availability.

## 8.3 Proposed SB-P-1.14 — Business Memory, Documents & Durable Media

Purpose:

Generalize existing parser/import work into one product-wide UDI and durable Business Memory foundation.

Expected areas:

- mature Ledger/Business Memory model;
- receipt/document provenance;
- images/PDF/CSV/Excel/other approved inputs;
- ambiguity handling;
- preview-confirm-update;
- Receipt Cabinet;
- governed media/object storage;
- durable metadata/ownership/permission linkage;
- correction/audit continuity;
- migration/reuse of existing parser/import foundations.

Opening-stock import should converge into UDI rather than become a separate intelligence stack.

## 8.4 Proposed SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO

Purpose:

Build one controlled intelligence/automation layer over Business Memory.

Expected areas:

- Smart Reminder;
- delegated automation model;
- scheduled continuation;
- Daily Intelligence at current approved rhythm;
- Ask CFO read-only intelligence;
- permission-scoped retrieval;
- user-approved continuation from intelligence to action where applicable.

Ask CFO remains advisory/read-only and does not become an authority.

## 8.5 Proposed SB-P-1.16 — Financial Integrity & Credit

Purpose:

Complete the financial relationship model beyond simple transaction capture.

Expected areas:

- credit;
- repayment;
- ageing/follow-up awareness;
- payment evidence;
- bank/payment reconciliation;
- deterministic candidate matching;
- ambiguity review;
- owner-controlled credit decisions.

Smart Credit warns and informs; it does not silently block Owner authority.

## 8.6 Proposed SB-P-1.17 — Manager Operations

Purpose:

Complete the operational management layer while reusing existing inventory/catalog engineering.

Expected areas:

- suppliers;
- supplier-product relationships;
- reorder intelligence;
- expiry/freshness/wastage where supported;
- low/slow stock;
- owner-confirmed or explicitly delegated reorder;
- standard POS adapters;
- counter review;
- closing cash;
- mature Manager workspace;
- contextual Product & Price Master access.

Custom client-specific POS modification remains rejected from the core.

## 8.7 Proposed SB-P-1.18 — Controlled Business Add-ons

Purpose:

Implement three separately gated commercial capabilities after dangerous shared foundations are mature.

Workstreams:

1. Smart Order & Delivery;
2. Staff/HR;
3. Compliance Shield.

These remain separately testable/feature-flagged even if governed inside one mission.

If Claude demonstrates that this mission cannot be safely implemented and verified as one mission, Mission Control may recommend splitting it rather than forcing artificial compression.

## 8.8 Proposed SB-P-1.19 — Activation, Lifecycle & Platform Stewardship

Purpose:

Complete the platform-level experience and operating system.

Expected areas:

- mature onboarding;
- first-value experience;
- subscription/payment/account lifecycle;
- support automation / FAQ;
- human escalation;
- Super Admin/platform stewardship;
- operational health;
- Voice Plus;
- account lifecycle controls.

Super Admin must remain privacy-respecting and least-privilege, not a merchant-data bypass.

## 8.9 Proposed SB-P-1.20 — WhatsApp Channel Integration

Purpose:

Add WhatsApp only after Smart Business already owns its intelligence and business operation stack.

Expected areas:

- Meta webhook/channel verification;
- business/user identity mapping;
- inbound normalization;
- retries/idempotency;
- media/message normalization;
- outbound response delivery;
- template/consent considerations where applicable;
- channel health/failure handling;
- reuse of native Conversation/AI/permission/action/UDI/reminder systems.

Hard boundary:

> No business rule may exist only inside the WhatsApp adapter when the same rule belongs to Smart Business itself.

---

# 9. Speed Strategy

Speed should come from reuse and vertical slices, not from skipping evidence gates.

For each mission:

1. Build the minimum real end-to-end path first.
2. Prove runtime behaviour.
3. Expand through shared foundations.
4. Keep structured pages available where useful for review/correction/management.
5. Avoid parallel business logic.
6. Reuse existing valid engineering rather than rewrite for symmetry.
7. Use feature flags and reversible migrations where appropriate.
8. Keep authority-changing migrations sequential and verifiable.

Mission planning may overlap where governance permits, but conflicting authority/schema changes must not race.

---

# 10. Permanent Measurability Requirements

Every future Product Mission must define measurable starting state, target state, runtime evidence, and remaining contract clauses.

At minimum, the future mission system should measure:

- tenant isolation;
- role authorization;
- positive/negative permission tests;
- runtime permission revalidation;
- audit attribution;
- idempotency;
- rollback/migration safety;
- p50/p95/p99 latency where meaningful;
- database query health;
- AI latency/token/cost by capability;
- AI interpretation quality/evaluation;
- document processing accuracy and ambiguity handling;
- scheduled-job success/lateness;
- channel delivery/retry health;
- storage growth/retrieval;
- domain error rates;
- user-facing workflow completion;
- regression coverage.

A consequential AI action passes only when it either:

- understands correctly; or
- safely asks for clarification.

It must not confidently corrupt Business Truth.

---

# 11. Global Product Completion Register Rule

Every future `SB-P-*` mission must state which confirmed Smart Business contracts it advances.

Mission Control must update the Global Product Completion Register at mission acceptance.

The system must preserve the distinction between:

- Product Definition completeness;
- mission completion;
- feature implementation completeness;
- runtime verification;
- release/pilot readiness.

A mission may complete while one or more mature features remain partially implemented.

No mission may claim a mature contract complete without end-to-end evidence.

---

# 12. Reuse / Technical-Debt Rule

Existing implementation should be classified as one of:

- preserve;
- preserve + evolve;
- reusable engineering evidence;
- narrow rebase required;
- superseded;
- reject.

Do not rebuild sound foundations merely because mature Product Truth was documented later.

Do not preserve stale architecture merely because code already exists.

Known example:

The Lovable opening-stock import is useful engineering evidence, but it must not be promoted as-is because:

- preview and commit identity binding requires correction;
- its intelligence belongs under shared UDI rather than a separate import stack;
- surrounding builder snapshots may be stale;
- mature permission scope differs from historical owner-only assumptions.

Future engineering must prefer **narrow rebase + architectural correction + verification** over wholesale reverse-sync.

---

# 13. What Must Not Happen

Do not:

- rebuild Smart Business from scratch without evidence that reuse is unsafe;
- create twenty-five independent technical stacks;
- create a second AI brain for WhatsApp;
- create channel-specific permission systems;
- create duplicate reminder systems;
- create duplicate Business Memory;
- create duplicate UDI/import intelligence;
- let Catalog remain a competing product identity by inertia;
- delete Product & Price Master engineering simply to simplify navigation;
- allow AI to bypass permission/confirmation/delegation;
- add customer-specific core POS modifications;
- let Super Admin become a privacy bypass;
- treat CI or a merged PR as Product Mission acceptance;
- start `SB-P-1.12` until this proposal has been independently challenged and reconciled.

---

# 14. Required Claude Code Independent Review

Claude Code must receive full canonical repository access and independently assess this proposal from the codebase upward.

Claude must not merely agree with Mission Control.

It must challenge assumptions where engineering evidence disagrees.

Claude must determine:

1. exact current architecture and implementation state;
2. exact reusable code, migrations, tables, RPCs, services, routes, tests, and infrastructure;
3. hidden technical debt or coupling not visible from product-level review;
4. whether Product & Price Master can be safely demoted without destructive migration;
5. whether the nine-mission sequence is technically coherent;
6. whether any mission should be split or combined and why;
7. whether the Founder-requested native/WhatsApp separation is technically clean and sustainable;
8. exact dependency graph;
9. schema/API/service deltas by proposed mission;
10. security and RLS/grant/function implications;
11. AI/tool execution boundary;
12. UDI/media/storage architecture;
13. automation/scheduler architecture;
14. migration strategy preserving existing production truth;
15. rollback strategy;
16. test/evaluation/load strategy;
17. observability requirements;
18. critical path and realistic sequencing constraints;
19. any unresolved Founder decisions;
20. any proposal element Claude recommends changing before Mission Control finalizes future mission sequencing.

Claude must treat current Product Truth and the twenty-five mature contracts as the product target, while treating repository reality as the engineering starting point.

Current code is not allowed to redefine Product Truth merely because it already exists.

---

# 15. Required Claude Output

Claude Code must create its independent response in the same durable folder as this proposal:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/build-proposal/02_Claude_Code_Independent_Build_Plan.md`

The response must be a repository-grounded engineering build plan and critique, not an implementation report.

It must clearly classify each Mission Control proposal item as:

- `CONFIRM`;
- `CONFIRM WITH CHANGE`;
- `REJECT / REPLACE`;
- `FOUNDER DECISION REQUIRED`;
- `INSUFFICIENT EVIDENCE`.

Claude must cite concrete repository paths, migrations, modules, schemas, tests, and technical evidence wherever possible.

Claude must not implement anything under this instruction.

---

# 16. Post-Claude Workflow

After Claude writes `02_Claude_Code_Independent_Build_Plan.md`:

1. Mission Control reviews it independently.
2. If changes are required, Mission Control issues a new numbered instruction in `communication/live/`.
3. Claude updates or appends the durable build-plan artifact as explicitly instructed.
4. The sequence may continue through `instruction.2.md`, `instruction.3.md`, etc. if necessary.
5. Mission Control issues the matching final numbered live report only when the engineering plan is acceptable.
6. Mission Control then creates/updates the durable reconciliation/decision record.
7. Only after Founder acceptance of the reconciled plan should the historical mission proceed to final closeout and archival hygiene.
8. Only after that closeout should real future `SB-P-*` Product Missions begin under current governance.

---

# 17. Current Mission Control Position

**KEEP `SB-DOC-PHASE1-HISTORY-1.0` OPEN.**

**DO NOT ARCHIVE ITS COMMUNICATION YET.**

**DO NOT START `SB-P-1.12` YET.**

**DO NOT IMPLEMENT THIS PROPOSAL YET.**

Next authorized action:

> Claude Code independently reviews the Founder-accepted nine-mission build proposal against the complete repository and writes `02_Claude_Code_Independent_Build_Plan.md` for Mission Control review.

---

# Final Principle

Keep the engineering we have earned.

Remove the complexity merchants should never have been required to understand.

Build shared foundations once.

Compose all twenty-five mature contracts through those foundations.

Make Smart Business capable in its own right.

Make WhatsApp a powerful doorway into Smart Business — never the place where Smart Business itself lives.
