# SMART BUSINESS MISSION CONTROL

# Founder-Accepted Build Proposal

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`  
**Artifact Type:** Pre-Closeout Build Proposal — NOT IMPLEMENTATION AUTHORIZATION  
**Authority:** Mission Control proposal accepted by Founder, with Founder amendment separating native conversation from WhatsApp integration  
**Status:** `FOUNDER-ACCEPTED BUILD DIRECTION — CLAUDE ENGINEERING RECONCILED — UX ANTI-DRIFT LAYER PENDING FOUNDER APPROVAL`  
**Date:** `2026-09-12`

---

## 1. Purpose

Before closing the historical reconstruction mission, archiving its communication workspace, or beginning new governed `SB-P-*` Product Missions, Mission Control must establish a repository-grounded proposal for how the complete recovered Smart Business product should be built from the implementation that already exists.

This artifact is the bridge between:

**historical understanding → current Product Truth → current implementation reality → future governed Product Missions**

It is not an implementation instruction.

It does not authorize any schema change, application change, deployment, migration, platform action, or new `SB-P-*` mission.

Its architecture and mission sequence have been independently challenged by Claude Code and reconciled through `communication/live/instruction.1.md` / `report.1.md` and `instruction.2.md` / `report.2.md`.

The remaining pre-closeout purpose of this artifact is to preserve a Founder-verifiable user-experience layer so future implementation cannot satisfy technical scope while drifting away from the recovered human experience.

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

The Founder product-intent decision is now durably recorded at:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/founder-decisions/01_Founder_Product_Decision_Record_Product_and_Price_Master.md`

That decision does not itself authorize implementation or silently amend Source 11.

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

These nine Product Mission identities were accepted by the Founder and independently engineering-reconciled with Claude Code. Internal workstreams/stages may be used inside a mission, but they do not silently create extra `SB-P-*` mission identities.

No mission below is implementation-authorized by this document.

| Proposed Mission | Primary Outcome | Mature Contracts Materially Advanced |
|---|---|---|
| **SB-P-1.12 — Authority, Identity & Product Surface Foundation** | Mature role authority, tenant isolation, execution security, shared identity primitives, Catalog/Product & Price Master reconciliation | 21, 22, 20, 17 + Catalog reconciliation |
| **SB-P-1.13 — Native Conversation & AI Intelligence Foundation** | Native Smart Business Conversation Workspace, Human Language, Basic Voice, shared AI/tool/confirmation/action kernel | 9, 10, 12 Basic, 24, 22 + Support Automation foundation |
| **SB-P-1.14 — Business Memory, Documents & Durable Media** | Mature Ledger/Business Memory foundation, UDI, Receipt Cabinet, governed document/media storage | 3, 5, 25, 22 |
| **SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO** | Shared reminder/delegated automation, proactive intelligence rhythm, read-only Ask CFO | 2, 4, 11 |
| **SB-P-1.16 — Financial Integrity & Credit** | Credit/repayment maturity, payment evidence, bank/payment reconciliation | 3 completion, 14, 15 |
| **SB-P-1.17 — Manager Operations** | Stock/supplier/reorder completion, standard POS intelligence, closing cash, mature Manager workspace | 7, 13, 17 |
| **SB-P-1.18 — Controlled Business Add-ons** | Smart Order & Delivery, Staff/HR, Compliance as separately gated workstreams over shared foundations | 1, 6, 16 |
| **SB-P-1.19 — Activation, Lifecycle & Platform Stewardship** | Onboarding/first value, subscriptions/account lifecycle, Support Automation completion, Super Admin, Voice Plus | 8 completion, 18, 19, 20, 12A |
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
- attachment handoff into shared document path;
- FAQ-before-AI Support Automation foundation so common support questions are handled cheaply and consistently in the same message pipeline.

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

## 8.8 Proposed SB-P-1.19 — Activation, Lifecycle & Platform Stewardship

Purpose:

Complete the platform-level experience and operating system.

Expected areas:

- mature onboarding;
- first-value experience;
- subscription/payment/account lifecycle;
- Support Automation completion / FAQ / AI fallback / human escalation;
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

# 8A. Founder Runtime User Experience Anchors — Anti-Drift Layer

## 8A.0 Purpose and authority boundary

This section translates the recovered Founder-origin evidence, temporary feature extractions, Final Feature Reconciliation Register, twenty-five mature feature/foundation contracts, current Product Truth, Founder corrections and reconciled build sequence into **human-experience anchors** for the nine future Product Missions.

These anchors are not screen designs, implementation prescriptions or permission to begin a Product Mission.

They define the **minimum coherent experience that should be visible to the Founder and relevant users by the end of each mission**, subject to the mission's own locked Blueprint/EIS and current dependencies.

Engineering may improve layout, navigation, component design, wording and technical mechanism. It may not silently remove or invert these human outcomes.

Where a mature feature intentionally spans more than one future mission, this section distinguishes **partial advancement** from **final completion**. An earlier mission must not falsely claim the later capability complete.

## 8A.1 SB-P-1.12 — Authority, Identity & Product Surface Foundation

**Experience goal:** Smart Business begins to feel safely personalized to the person using it, while reducing unnecessary product-surface complexity.

By the end of this mission, Founder runtime verification should be able to demonstrate:

- The Owner enters Smart Business as the highest business authority and sees only the Owner's own business data.
- The Owner can grant a Manager or Employee bounded capabilities in understandable business terms rather than making them Owner-equivalent.
- A Manager sees only delegated operational/intelligence areas; Owner-only profit, Ask CFO and protected financial intelligence remain unavailable unless explicitly delegated under approved Product Truth.
- A permitted Employee can do useful work such as adding an allowed transaction or using approved self-service while still being unable to browse Owner-wide financial intelligence.
- Supplier, Customer and Delivery Staff identities, where represented by shared identity primitives, remain purpose-limited rather than becoming general Smart Business users.
- An unauthorized request receives a calm, useful denial without leaking the protected answer or accusing the user.
- Revoking a permission invalidates a stale pending consequential action before execution.
- A user from one business cannot see, search, export, converse about or modify another business's protected data.
- Product and price information is available where operationally needed without forcing the merchant to understand a competing `Catalog` product concept.
- Existing Catalog/Product/Pricing data is preserved; no merchant loses valid products, prices, tax/history or deep-link continuity merely because the surface is being reclassified.
- The merchant experiences a clearer relationship among Products/Prices, Inventory and Transactions: product/commercial identity is reusable foundation data, stock is stock state, and transactions are business events.
- Existing structured management remains available where useful until equivalent contextual access is proven.

**Founder feeling to protect:** “Smart Business knows who is allowed to do what, protects my business, and does not make my staff or me learn unnecessary software categories.”

## 8A.2 SB-P-1.13 — Native Conversation & AI Intelligence Foundation

**Experience goal:** Smart Business becomes a real conversational business assistant inside its own application, independent of WhatsApp.

By the end of this mission, Founder runtime verification should be able to demonstrate:

- An authorized user opens a calm native Conversation Workspace inside Smart Business and can use it as a first-class operating surface, not merely a decorative chat screen.
- The user can type naturally in English, Malayalam or Manglish, including mixed-language Kerala business expressions, without translating their work into formal software terminology.
- Basic Voice lets the user speak routine business input/questions/commands and receive concise, useful responses where voice is appropriate.
- Smart Business remembers enough conversation context to support follow-up while authoritative Business Truth still controls over transient chat memory.
- The assistant asks the smallest useful clarification when a consequential amount, party, item, date, unit or action is ambiguous instead of guessing.
- For an approved existing action such as adding a transaction or performing an already-supported operational command, the assistant can interpret intent, check permission, show/describe the exact proposed action when confirmation is required, execute through the deterministic domain service, and return a confirmation reflecting actual stored state.
- A natural-language prompt cannot bypass permissions. An Employee asking for Owner profit receives a bounded denial; a permitted Employee asking for their allowed information succeeds.
- English/Malayalam/Manglish behavior is shared across conversation and action interpretation rather than implemented as separate mini-products.
- Common support/how-to questions can be answered through the FAQ-before-AI foundation without unnecessarily invoking expensive AI, while unresolved support remains eligible for later escalation capability.
- If an AI/model provider fails, the failure is presented as a recoverable assistant limitation and does not corrupt or silently duplicate business records.
- Meta/WhatsApp can be completely disconnected and the native Conversation Workspace still works for the capabilities implemented so far.
- Structured pages remain available for review/management; conversation enriches the product rather than forcing every task into chat.

**Boundary for this mission:** full UDI/document intelligence arrives in `SB-P-1.14`; this mission should provide a clean attachment/handoff path without falsely claiming the mature document workflow complete.

**Founder feeling to protect:** “I can simply tell Smart Business what I mean, in the language I naturally use, and it helps me safely without needing WhatsApp or forcing me to think like software.”

## 8A.3 SB-P-1.14 — Business Memory, Documents & Durable Media

**Experience goal:** Smart Business becomes a trustworthy memory of the business, including real-world paper/files, not just manually entered screens.

By the end of this mission, Founder runtime verification should be able to demonstrate:

- The merchant can record and retrieve the mature Ledger/Business Memory states required by current Product Truth, including income, expense, credit and repayment, subject to the mission's locked scope and existing transaction evolution.
- The merchant can send/upload a receipt photo, invoice, bill, handwritten image, PDF, Excel or CSV through an approved surface and Smart Business interprets it rather than demanding manual re-entry.
- Uncertain document facts are shown in a clear preview; the merchant can correct ambiguity and confirm before consequential Business Truth is updated.
- A confirmed import/document update uses the exact reviewed interpretation and does not silently resolve to a different live target after confirmation.
- Opening-stock and similar imports converge on the same UDI pattern instead of creating a separate parser/intelligence product.
- Original business documents remain retrievable in a Receipt Cabinet/document memory with provenance linking the original to interpreted/confirmed business records.
- The merchant can search Business Memory by useful human concepts such as period, party, purpose, customer, supplier or document rather than remembering database categories.
- The merchant can retrieve an authorized original document later from conversation or the appropriate structured surface.
- Corrections preserve history instead of making earlier truth disappear without trace.
- Where exports are in scope, the merchant can receive useful Excel/CSV/PDF output consistent with authoritative source totals and permissions.
- A failed/unsupported file does not freeze unrelated Smart Business operation, and the user receives a clear recovery path.
- Document/media storage feels like part of Smart Business rather than a separate storage product; permissions follow the same business/role rules as the underlying records.

**Founder feeling to protect:** “I can give Smart Business the messy documents I already use, review what it understood, and later find both the business fact and the original proof.”

## 8A.4 SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO

**Experience goal:** Smart Business begins reducing the Owner's mental load proactively while keeping intelligence advisory and actions human-controlled.

By the end of this mission, Founder runtime verification should be able to demonstrate:

- The merchant can say naturally, for example, “Remind me Friday to pay this supplier,” and Smart Business creates the correct reminder after clarifying ambiguous timing only when necessary.
- Reminders support useful `done`, `snooze` and `reschedule` behavior and recurring reminders preserve occurrence/history rather than becoming duplicate noise.
- A reminder that can continue into a consequential business action does not treat the due time as proof that the action happened; it asks for confirmation unless a valid bounded Owner delegation already exists.
- Daily Intelligence gives proactive business clarity at the current approved rhythm: **7:00 AM, 10:30 AM and 10:00 PM**.
- Daily Intelligence prioritizes useful exceptions/clarity over information overload and respects each user's permissions.
- The Owner can ask Ask CFO natural questions such as “Why were sales lower this week?”, “Who owes me money?”, or “What should I pay attention to today?” and receive a useful, contextual answer based on authorized Business Memory.
- Ask CFO distinguishes known facts from estimates/patterns/risks/opportunities/recommendations and says when data is missing, stale or conflicting.
- Ask CFO remains read-only: it can suggest a reminder or next step, but the user explicitly chooses whether to continue into an action.
- The tone is calm and factual rather than fear-heavy, accusatory or pretending to be the business owner.
- A Manager without delegated Owner intelligence receives only the permitted subset; Employee access does not expand merely because the question is phrased conversationally.

**Founder feeling to protect:** “Smart Business remembers what I may forget, brings the right things to my attention, and helps me think—but it never behaves as if it owns my business.”

## 8A.5 SB-P-1.16 — Financial Integrity & Credit

**Experience goal:** Smart Business helps the merchant understand money owed, money received and payment evidence without turning uncertainty into false financial truth.

By the end of this mission, Founder runtime verification should be able to demonstrate:

- The merchant can record credit and repayment naturally and see the correct customer/party balance and history.
- Smart Credit surfaces overdue/risky patterns, ageing and useful follow-up awareness without automatically refusing a sale or changing a customer relationship on the Owner's behalf.
- The Owner remains free to continue, override or handle credit according to human judgment while Smart Business preserves the factual warning/context.
- The merchant can attach or capture relevant payment evidence and see whether it is verified, unmatched, partially matched or ambiguous.
- Bank/payment reconciliation proposes deterministic candidate matches where evidence supports them instead of inventing a payment fact.
- When multiple matches are plausible, the merchant receives a concise review/confirmation experience rather than silent auto-linking.
- Confirmed reconciliation links to existing financial truth idempotently and does not create duplicate income/repayment entries.
- A payment mismatch/discrepancy remains visible until resolved rather than being hidden to make the dashboard look clean.
- The merchant can understand the relationship among credit, repayment, transaction history and payment evidence from one Business Memory rather than maintaining parallel truths.
- Corrections and reconciliation decisions remain auditable.

**Founder feeling to protect:** “Smart Business helps me know who owes what and what has actually been paid, but it never pretends uncertain money is settled or makes credit decisions for me.”

## 8A.6 SB-P-1.17 — Manager Operations

**Experience goal:** Smart Business becomes a practical operating companion for stock, suppliers, counter/POS and day-closing work without becoming a heavy ERP.

By the end of this mission, Founder runtime verification should be able to demonstrate:

- The merchant/authorized Manager can see useful stock conditions such as low stock, slow-moving stock, expiry/freshness or wastage signals where the required data exists.
- Stock quantities/movements remain trustworthy and tied to the shared Product & Price Master rather than creating duplicate item identities.
- The merchant can maintain supplier relationships and see which products/items are normally sourced from which supplier.
- Smart Business can suggest a reorder based on current evidence; the Owner confirms by default, or a previously configured bounded delegation permits the authorized continuation.
- Supplier/reorder continuation reuses the shared Reminder/Automation foundation rather than creating an isolated reorder scheduler.
- A standard POS bridge can bring relevant transaction/stock/counter data into Smart Business without requiring the merchant to abandon a POS that already works for them.
- POS/counter mismatches are presented neutrally as something to review, not as an accusation of theft or wrongdoing.
- Closing Cash helps the Owner/authorized Manager compare expected versus actual closing state and understand discrepancies without silently rewriting either side.
- The Manager workspace brings operational attention into a coherent visual surface while respecting the exact Manager permissions delegated by the Owner.
- Product/price editing or review appears contextually where stock, POS, supplier or reorder work needs it; the merchant is not forced back into an unrelated top-level `Catalog` mental model.
- Opening-stock/bulk stock intake, when applicable, reuses UDI preview-confirm-update rather than creating a third import experience.

**Founder feeling to protect:** “I can understand what is happening in my shop and what needs attention without replacing all my current tools or being accused by my software.”

## 8A.7 SB-P-1.18 — Controlled Business Add-ons

**Experience goal:** Three valuable add-ons become real, separately controllable workflows built on the same Smart Business foundations rather than three isolated products.

### Smart Order & Delivery experience

Founder runtime verification should be able to demonstrate that:

- An Owner/permitted staff member can capture a customer order from natural text/voice, a phone-call note, an image/list or supported document into a reviewable draft.
- Item/quantity/customer/location ambiguity triggers the smallest useful clarification rather than an invented confirmed order.
- Current stock/availability can inform the order; unavailable items can lead to respectful substitution/quantity/partial-fulfilment options that are confirmed before becoming final.
- The merchant can move an order through a clear lifecycle from draft to confirmation, preparation, assignment, delivery and closure with auditable exceptions/cancellation.
- Delivery staff receives only the information needed for the assigned delivery and only the actions needed to complete it.
- Delivery proof/COD handling is clear and purpose-limited; default continuous employee GPS surveillance is not required.
- Customer silence alone does not invalidate an otherwise sufficiently proven delivery.
- COD/payment closure reuses shared payment/ledger truth and does not duplicate revenue.
- The experience remains the merchant's private customer network, not a marketplace.

### Staff / HR experience

Founder runtime verification should be able to demonstrate that:

- The Owner can add/manage staff and assign job-appropriate permissions without making staff Owner-equivalent.
- A permitted employee can record/view their own attendance and use approved self-service such as correction/leave/request status without seeing unrelated staff or Owner financial intelligence.
- Attendance/geofence behavior, where enabled, is understandable and purpose-limited rather than continuous staff surveillance.
- The Owner/authorized Manager can review attendance exceptions, approve/reject corrections and obtain useful payroll/attendance outputs where included in the locked scope.
- Staff contributions to transactions, stock, orders or documents retain actor identity and respect the same permission engine.
- The tone remains dignified and operational; the product does not become a hidden employee scoring/punishment system.

### Compliance Shield experience

Founder runtime verification should be able to demonstrate that:

- The merchant can store/upload relevant compliance documents through the shared document/UDI path instead of manually maintaining another isolated filing system.
- Smart Business can surface important expiry/renewal/status awareness and create useful reminders using the shared Reminder Engine.
- The merchant can understand what requires attention and retrieve the supporting document/provenance.
- Compliance assistance clearly distinguishes reminders/document awareness from legal authority; Smart Business does not claim to replace professional/legal judgment.
- Compliance data remains business-scoped and permission-controlled.

**Founder feeling to protect:** “The add-ons solve real jobs using the same Smart Business I already understand; they do not turn into surveillance, a marketplace, or three new software systems.”

## 8A.8 SB-P-1.19 — Activation, Lifecycle & Platform Stewardship

**Experience goal:** Smart Business becomes ready to acquire, activate, support and retain merchants responsibly while Team LIPS can operate the platform without becoming a privacy bypass.

By the end of this mission, Founder runtime verification should be able to demonstrate:

- A new merchant enters through `smartbusiness.teamlips.com/start`, chooses/uses English, Malayalam or Manglish, and moves through progressive discovery without facing an enterprise-style form wall.
- Smart Business can give an understandable product recommendation based on the merchant's actual context and explain why, what is included and what remains optional/unavailable.
- Business identity is created once and persists; onboarding does not create separate identities depending on channel.
- The merchant can import existing data where appropriate through UDI and reach a **first practical win** quickly—such as a real transaction, receipt/document interpretation, useful insight, reminder or other available workflow—rather than merely completing registration.
- Interrupted onboarding can resume without restarting completed safe steps.
- The trial/no-trial experience remains configurable until the Founder resolves that commercial decision; no hidden historical assumption is hard-coded.
- Subscription/payment/account lifecycle communicates current state clearly, gives appropriate recovery/grace/export opportunity and does not surprise the merchant with silent destructive deletion.
- Common support questions are answered FAQ-first in English/Malayalam/Manglish; appropriate AI fallback helps with unresolved general questions; account-specific/unresolved cases can become a human support ticket/escalation without losing prior context.
- Support access to merchant data is purpose-limited, auditable and no broader than necessary.
- Voice Plus, where entitled, gives a deeper multi-turn voice experience while Basic Voice remains available according to its core rules.
- Super Admin/platform stewardship gives Team LIPS operational awareness of health, errors, backups/quarantine/support/system conditions without granting casual unrestricted browsing of merchant Business Memory.
- Platform/support failures are recoverable and do not unnecessarily block unrelated merchant operation.

**Founder feeling to protect:** “A merchant can understand, start and get value without manipulation, and Team LIPS can support the product responsibly without treating merchant data as ours.”

## 8A.9 SB-P-1.20 — WhatsApp Channel Integration

**Experience goal:** The same mature Smart Business becomes available through the merchant's familiar WhatsApp habit without making WhatsApp the product's brain.

By the end of this mission, Founder runtime verification should be able to demonstrate:

- A correctly linked authorized user can interact with Smart Business over WhatsApp using natural text, Basic Voice and supported photos/documents under the same feature availability and permission rules as the native product.
- English, Malayalam and Manglish understanding behaves consistently with the native Conversation Workspace.
- A transaction, reminder, document preview, Ask CFO question or other approved workflow initiated through WhatsApp reaches the same underlying Business Memory/domain services rather than a WhatsApp-only duplicate record.
- Consequential confirmations bind to the same exact actor/business/action/state and are revalidated before execution.
- A workflow can move between native Conversation Workspace and WhatsApp without duplicating business records or losing authoritative state.
- Owner, Manager and Employee permissions remain identical across channels; WhatsApp phrasing cannot widen access.
- Customer, Supplier or Delivery Staff WhatsApp participation remains purpose-limited to the relevant feature rather than exposing the Owner's general assistant/intelligence.
- Reminders, Daily Intelligence, order/delivery updates and other outbound communication use approved consent/template/channel rules where applicable.
- Duplicate webhook delivery/retry does not duplicate transactions, payments, orders or other consequential actions.
- When WhatsApp/Meta is unavailable, Smart Business reports channel degradation appropriately while the native app and healthy background/business operations continue.
- The merchant can choose the channel that suits the moment without learning a different Smart Business in each place.

**Founder feeling to protect:** “WhatsApp feels like the easiest doorway into the same Smart Business—not a separate bot, and never a single point of failure.”

## 8A.10 Permanent Founder Runtime Verification and Completion-Report Rule

If the Founder approves these anchors, every future mission from `SB-P-1.12` through `SB-P-1.20` must carry them forward as an anti-drift acceptance layer.

For each mission:

1. The Product Blueprint must identify the applicable Section `8A` experience anchors and translate them into mission-specific acceptance scenarios without weakening the human outcome.
2. The EIS/implementation package may choose implementation details but must preserve the accepted experience unless a new Founder decision explicitly changes it.
3. Founder Runtime Verification must test the applicable experience anchors in the real product/runtime, including both successful and denied/error paths where relevant.
4. The Completion Report must include an **Experience Verification Matrix** containing, at minimum:
   - experience anchor/scenario;
   - expected human outcome;
   - Founder runtime verification result (`PASS`, `FAIL`, `NOT APPLICABLE`, or `DEFERRED BY APPROVED DEPENDENCY`);
   - evidence reference;
   - remaining limitation/dependency where applicable.
5. `NOT APPLICABLE` or `DEFERRED` must be justified against the locked mission scope; they cannot be used to hide feature loss.
6. A mission cannot claim an experience complete merely because the UI exists, a PR merged, CI passed, or backend capability exists.
7. Where a contract spans missions—for example Support Automation foundation in `SB-P-1.13` and completion in `SB-P-1.19`—the Global Product Completion Register must show partial advancement until the final experience is independently proven.
8. If implementation evidence conflicts with the accepted user experience, the discrepancy must return to Mission Control/Founder rather than silently redefining the experience around the code.

This rule is intended to make the historical reconstruction operationally useful: **the recovered human experience becomes a verification obligation, not only an archive.**

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
- reduce an accepted Founder user experience merely because a narrower implementation is easier;
- start `SB-P-1.12` until this historical mission is formally closed and Mission Control separately authorizes the Product Mission.

---

# 14. Claude Code Independent Review — Completed Engineering Reconciliation

Claude Code independently reviewed the Founder-accepted build proposal against the canonical repository and current engineering evidence in:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/build-proposal/02_Claude_Code_Independent_Build_Plan.md`

The review was returned through `communication/live/report.1.md`, reconciled through `instruction.2.md`, and returned in final reconciled form through `report.2.md`.

Mission Control accepted the resulting engineering reconciliation after PR #544.

Key accepted outcomes include:

- exactly nine future Product Mission identities remain `SB-P-1.12` through `SB-P-1.20`;
- internal decomposition is workstreams/stages/gates, not silent extra mission IDs;
- native Conversation/AI remains independent of WhatsApp;
- Product & Price Master preserves valid Catalog engineering while correcting the product surface;
- Support Automation begins its FAQ-before-AI foundation in `SB-P-1.13` and completes in `SB-P-1.19`;
- the known `anon`-privilege residual and missing automated PR build/lint/test gate are mandatory early `SB-P-1.12` conditions, but remain unimplemented under this historical mission.

The new Section `8A` user-experience anchors are a **Mission Control anti-drift proposal pending Founder approval**. They have not yet been independently analyzed by Claude Code.

---

# 15. Next Claude Review Requirement — UX Anti-Drift Layer

If the Founder approves Section `8A`, Mission Control will instruct Claude Code to independently analyze those user-experience anchors against:

- the twenty-five mature feature/foundation contracts;
- current Product Truth/governance;
- the reconciled engineering build plan;
- repository/runtime feasibility and mission dependency boundaries.

Claude must then record the engineering-reconciled UX layer inside:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/build-proposal/02_Claude_Code_Independent_Build_Plan.md`

Claude may propose corrections where an anchor conflicts with approved Product Truth, dependency reality, security or mission sequencing, but must not compress away Founder-approved human outcomes merely for implementation convenience.

No implementation is authorized by this future review.

---

# 16. Pre-Closeout Workflow

The remaining sequence is:

1. Founder reviews/approves or corrects Section `8A` Mission Control user-experience anchors.
2. Mission Control issues a numbered live instruction for Claude Code UX analysis.
3. Claude updates the durable independent build plan and returns the matching live report.
4. Mission Control independently reconciles Claude's UX analysis.
5. If required, corrections continue through numbered live instruction/report turns.
6. Once the UX anti-drift layer is accepted, Mission Control proceeds to historical mission closeout and archival hygiene.
7. Only after formal historical closeout may Mission Control separately activate `SB-P-1.12` under Source 18.

---

# 17. Current Mission Control Position

**KEEP `SB-DOC-PHASE1-HISTORY-1.0` OPEN.**

**DO NOT ARCHIVE ITS COMMUNICATION YET.**

**DO NOT START `SB-P-1.12` YET.**

**DO NOT IMPLEMENT THIS PROPOSAL YET.**

Current authorized state:

> Mission Control has added a recovered-history-derived Founder Runtime User Experience anti-drift layer for `SB-P-1.12` through `SB-P-1.20`. Founder review is required before Claude Code is instructed to independently analyze and reconcile that UX layer.

---

# Final Principle

Keep the engineering we have earned.

Remove the complexity merchants should never have been required to understand.

Build shared foundations once.

Compose all twenty-five mature contracts through those foundations.

Make Smart Business capable in its own right.

Make WhatsApp a powerful doorway into Smart Business — never the place where Smart Business itself lives.

And preserve the recovered human experience strongly enough that future code cannot quietly redefine what Smart Business was meant to feel like for the people using it.
