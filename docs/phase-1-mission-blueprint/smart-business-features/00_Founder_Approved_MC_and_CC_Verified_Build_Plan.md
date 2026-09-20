# SMART BUSINESS — FOUNDER-APPROVED, MISSION CONTROL + CLAUDE CODE VERIFIED BUILD PLAN

**Artifact:** `00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`  
**Product:** Smart Business  
**Founder:** Riyas PK  
**Parent Organization:** Lighthouse Information Publishing Service — LIPS  
**Technology Unit:** Team LIPS  
**Product Domain:** `smartbusiness.teamlips.com`  
**Status:** `FOUNDER-APPROVED BUILD DIRECTION — MISSION CONTROL ACCEPTED — CLAUDE CODE ENGINEERING + UX VERIFIED`  
**Date:** `2026-09-12`  
**Authority Type:** Durable pre-execution build-plan handoff  
**Important:** **NOT A FEATURE CONTRACT — NOT A 26TH FEATURE — NOT IMPLEMENTATION AUTHORIZATION**

**Operational baseline revision:** amendment proposed on 2026-09-19 under `SB-GOV-PRODUCT-EXEC-1.0`, independently verified and merged in PR #606 (publication commit `b3cd5f439e8795855d6ef0f527d7ccea18c48080`). It is operative only when Mission Control records the Activation Confirmation in the [activation record](../../../communication/missions/SB-GOV-PRODUCT-EXEC-1.0/mission-control/04_activation_decision_and_metadata_reconciliation.md); until then the operational baseline is this plan as it stood at commit `c3ef55fe0cf94f4491cb2ae257b084f90b49b40b`. The build direction, the nine-mission sequence, the product outcomes, the Founder runtime scenarios and the unresolved Founder decisions are unchanged. Only the operational baseline and the mission-level coverage rules below are revised.

---

# 1. Purpose

This file is the durable, consolidated execution handoff for the next Smart Business Product Missions.

It merges and reconciles the accepted substance of:

- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/build-proposal/01_Mission_Control_Founder_Accepted_Build_Proposal.md`;
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/build-proposal/02_Claude_Code_Independent_Build_Plan.md`;
- the Founder Product Decision Record for Product & Price Master;
- Mission Control reconciliation instructions and Claude Code reports through `instruction.4.md` / `report.4.md`;
- the 25 mature Smart Business feature/foundation contracts;
- the verified current implementation baseline;
- the Founder-approved UX anti-drift anchors;
- Claude Code’s independent engineering and UX verification corrections.

This file exists so the future `SB-P-1.12` through `SB-P-1.20` missions do not have to reconstruct the build direction from temporary communication artifacts.

It is the stable planning companion to the 25 mature contracts.

It does **not** itself authorize implementation, schema changes, deployment, migrations, infrastructure activation, Lovable work, Supabase changes, OpenAI/Meta changes, or the start of any `SB-P-*` Product Mission.

Each future Product Mission must still pass through the approved Source 18 lifecycle.

---

# 2. Authority and Anti-Drift Boundary

This artifact is subordinate to:

1. Founder authority;
2. Lighthouse Constitution;
3. current constitutional Product Truth authority, including Source 01 and Source 11 under SB-GOV-1.2;
4. approved governance and Source 18 lifecycle controls.

This artifact must be used together with the relevant mature feature contracts.

If this file conflicts with later explicit Founder direction or current canonical Product Truth, the conflict must be surfaced to Mission Control and the Founder. Builders must not silently resolve it by dropping approved behavior.

Permanent anti-drift rule:

> **Preserve the approved feature. Preserve the Founder correction. Evolve the mechanism. Reject only superseded behaviour.**

And for implementation:

> **Protect the feature. Gate the implementation. Preserve the human. Reuse the foundation. One business truth. One governed intelligence layer. Multiple safe channels.**

The mission-level Feature Coverage and Product Truth Traceability Matrix (FCTM, Source 18 Section 3.2) is the operational enforcement of this anti-drift rule. No relevant requirement of the mature feature contracts or of this plan may be silently omitted, silently deferred, moved between Build Now, Build Later, Add-on, Separate Product or Reject, simplified, or allowed to drift.

---

# 3. Core Product Philosophy to Preserve

Every future mission must preserve:

- Humans serving humans.
- AI Assistant, Not AI Judge.
- Technology is a tool; human improvement is the purpose.
- Build for clarity, dignity, usefulness, and peace of mind.
- Respect existing merchant habits.
- Enrich merchant workflows instead of insulting or unnecessarily replacing existing methods.
- Human decision ownership must remain visible and real.
- The merchant’s business data belongs to the merchant.
- AI may analyze, explain, warn, suggest, clarify, and prepare actions; it must not silently become the Owner.
- Customize the edges; standardize the foundation.
- Do not duplicate Business Memory, permissions, AI logic, reminders, UDI, or domain rules per channel.
- Do not let implementation history override current Product Truth.
- Security, privacy, integrity, auditability, simplicity, scalability, and merchant dignity are product requirements, not optional technical polish.

The build goal is **one coherent Smart Business**, not 25 disconnected modules.

---

# 4. Current Verified Implementation Baseline

The current canonical application is a valuable but incomplete operational foundation.

Current implemented domains are materially limited to:

- authentication/session;
- business identity;
- Transactions;
- Inventory;
- Catalog/Product/Pricing engineering;
- dashboard/workspace foundations.

Existing engineering strengths include:

- Supabase/Postgres business isolation foundations;
- transaction correction/audit foundations;
- append-only inventory movement patterns;
- governed RPC/write paths;
- idempotency-key patterns;
- Catalog command executor-role patterns;
- preview/commit binding in canonical Catalog import;
- parser lease/guard patterns;
- repository-first engineering and protected-main workflow.

Current major gaps include:

- mature Owner/Manager/Employee/external-role permissions;
- native Conversation Workspace;
- Human Language Layer;
- Basic Voice;
- shared AI Orchestration/OpenAI intelligence foundation;
- complete Business Memory;
- mature UDI and Receipt Cabinet;
- governed durable media/document storage;
- reminder/delegated automation;
- Daily Intelligence;
- Ask CFO;
- Smart Credit maturity;
- payment verification/reconciliation;
- suppliers/reorder maturity;
- POS/counter/closing-cash intelligence;
- Staff/HR;
- Compliance Shield;
- Smart Order & Delivery;
- subscription/account lifecycle;
- support automation completion;
- mature Super Admin/platform stewardship;
- complete onboarding/first-value experience;
- WhatsApp integration.

No mature feature contract is currently proven complete end-to-end.

The 25-contract Global Product Completion Register remains authoritative for feature-by-feature implementation state.

---

# 5. Standing Engineering Risks and Mandatory Early Gates

Claude Code independently confirmed several risks that must remain visible in future execution.

## 5.1 `SB-P-1.12` security gate — residual `anon` privilege exposure

A residual overly-broad `anon` grant from `20260727000000_reconcile_default_grants.sql` remains a live concern for at least:

- `businesses`;
- `transactions`;
- `transaction_correction_events`.

Inventory was later remediated, but the broader root cause was not fully closed.

This is a **mandatory early gate inside `SB-P-1.12`**.

It is not authorized by this planning artifact.

## 5.2 `SB-P-1.12` engineering-quality gate — continuous-integration baseline

The repository already runs an automatic engineering gate. As recorded in `docs/engineering/assurance/Build_Assurance_Baseline.md` and verified on 2026-09-19, the Fast Gate (lint, typecheck, build and fast tests) runs on every pull request targeting `main` and every push to `main`, and Full Assurance runs when a change touches an approved path. On 2026-09-19 the only status check that protected `main` required was the Markdown Quality Gate, so a green Fast Gate is a governance requirement at each checkpoint and is not a branch-protection block. Hardening that protection has been deferred by the Founder, and this plan does not describe it as remediated.

`SB-P-1.12` shall keep the Fast Gate green at every checkpoint, run Full Assurance where a path triggers it, extend the tests for its own authority and isolation obligations, and surface for a Founder decision, and not decide, whether the Fast Gate becomes a required check.

This is a mission acceptance condition, not historical-mission implementation authority.

## 5.3 Canonical repository vs delivery repository divergence

The canonical implementation repository and production delivery path have previously diverged.

Future Product Missions must explicitly account for:

- canonical repository implementation;
- delivery repository synchronization where still required;
- Lovable publication/deployment path where still current;
- Supabase migration/runtime alignment;
- production verification after synchronization.

A canonical GitHub merge alone must never be treated as proof that production contains the accepted application.

The delivery chain, as recorded in `docs/implementation/SB-P-1.10-SB-P-1.11-post-completion-continuity.md` and `mission-control/mission_memory.md`, runs from the canonical repository to the production delivery repository, to Lovable publication, and to production Supabase and the production domain, with a separate isolated test Supabase project. External facts are volatile and shall be freshly verified before any external action. Delivery synchronization, publication and production migrations are release actions that need separate authorization, and a mission declares its need for them at Stage 1 and in the early delivery plan of Sections 20–21.

## 5.4 New infrastructure activation gates

Where a mission introduces genuinely new external infrastructure, the Blueprint/EIS must explicitly identify environment activation, credentials, failure behavior, rollback, and verification.

Known examples include:

- Basic Voice provider integration in `SB-P-1.13`;
- Cloudflare R2 / approved durable object storage activation in `SB-P-1.14`;
- Meta WhatsApp Cloud API in `SB-P-1.20`.

## 5.5 Pilot gate

Smart Order & Delivery and other Founder-approved pilot-entry requirements must be ready before the first 10 pilot merchants where the governing roadmap requires them.

The mission sequence must not accidentally onboard pilot merchants before prerequisite Build Now capabilities are accepted.

---

# 6. Locked Shared Architecture

The 25 contracts must converge on a small number of reusable foundations.

## 6.1 One Authority and Identity Kernel

Ultimately governs:

- Owner;
- Manager;
- Employee;
- Customer;
- Supplier;
- Delivery Staff;
- business membership;
- permission scope;
- delegated authority;
- commercial entitlement where applicable;
- execution-time revalidation;
- tenant isolation.

No UI, AI model, reminder, scheduler, document pipeline, or channel may invent authority.

## 6.2 One Business Command / Action Path

Consequential operations should converge on:

**input → interpretation → permission → clarification/preview when required → confirmation or valid bounded delegation → deterministic domain command → authoritative write → audit/event → response**

This path must be reusable from:

- structured application surfaces;
- native Conversation Workspace;
- UDI/document interpretation;
- reminders/automation;
- later WhatsApp integration;
- future standard POS adapters.

## 6.3 One Business Memory

Supabase/Postgres remains authoritative for structured business truth.

Binary originals and durable media/documents use the approved object-storage foundation, while Smart Business remains authoritative for ownership, permissions, provenance, lifecycle, domain linkage, and retrieval authorization.

## 6.4 One Conversation and AI Intelligence Kernel

The native Smart Business Conversation Workspace is a first-class capability and must share:

- Business Memory;
- permissions;
- language context;
- conversation context;
- AI orchestration;
- typed tool/action proposals;
- confirmation state;
- deterministic domain commands;
- voice/document handoff;
- auditability.

## 6.5 One Reminder / Automation Kernel

Reminders, Daily Intelligence, Compliance reminders, credit follow-up, supplier continuation, Staff/HR reminders, orders/delivery continuations, and other time-based behavior must reuse one governed scheduling/delegation foundation.

## 6.6 Thin Channel Adapters

External channels adapt into Smart Business.

They do not become separate business engines.

---

# 7. Founder Decision — Product & Price Master

The current top-level Catalog surface represents product-surface drift relative to recovered Product Truth.

The valid underlying engineering is preserved.

The target classification is:

> **Product & Price Master — CORE SHARED FOUNDATION**

This is **not** a 26th feature.

Preserve:

- reusable product identity;
- pricing;
- tax;
- SKU/barcode identity;
- price history;
- audit/history;
- import foundations;
- product-inventory relationships;
- relationships needed by POS, Orders, Supplier/Reorder, UDI, Transactions, and reporting.

Do not:

- continue independent Catalog product expansion;
- delete valid product/pricing data;
- destructively collapse master data into Transactions;
- make Inventory the sole owner of commercial product identity;
- remove useful structured management before equivalent contextual access is proven.

Target treatment:

**PRESERVE + EVOLVE + DEMOTE SURFACE**

Future-facing UX and mission language must use Product & Price Master / contextual product-price-inventory terminology.

Historical/current-code references to `Catalog`, `/catalog`, `catalog-import.ts`, migrations, executor roles, and existing flows remain legitimate engineering evidence until implementation changes them.

The Founder Product Decision Record settles product intent. `SB-P-1.12` owns future implementation design/authorization. A Source 11 textual amendment, if ever required, remains a separate governance action.

---

# 8. Founder Amendment — Smart Business Must Work Without WhatsApp

This architectural separation is locked.

## 8.1 Experience strategy

Smart Business remains **WhatsApp-first** for merchant access/go-to-market.

## 8.2 System architecture

Smart Business is **channel-independent**.

## 8.3 Native Conversation Workspace

A first-class Smart Business access channel built before WhatsApp integration.

## 8.4 WhatsApp

A first-class external channel adapter added later.

WhatsApp must not own:

- Business Memory;
- permissions;
- AI/business intelligence;
- domain commands;
- reminder logic;
- UDI;
- business-specific duplicated rules.

Before `SB-P-1.20`, Mission Control must be able to disconnect Meta completely and still prove approved Smart Business workflows through the native application.

After `SB-P-1.20`, the expected path is:

**Meta webhook → identity/channel validation → normalized Smart Business message → existing Conversation/AI kernel → existing permission/action path → normalized result → WhatsApp delivery**

Reject:

**WhatsApp → separate AI bot → separate rules → separate business logic → database**

---

# 9. Locked Nine-Mission Build Sequence

Exactly nine Product Mission identities form the accepted planning baseline:

| Mission | Name | Primary Outcome | Contracts Materially Advanced |
|---|---|---|---|
| `SB-P-1.12` | Authority, Identity & Product Surface Foundation | Role authority, tenant isolation, execution security, shared identity primitives, Product & Price Master reconciliation | 21, 22, 20, 17 + Product & Price Master reconciliation |
| `SB-P-1.13` | Native Conversation & AI Intelligence Foundation | Native Conversation Workspace, Human Language, Basic Voice, shared AI/tool/confirmation/action kernel | 9, 10, 12 Basic, 24, 22 + Support Automation foundation |
| `SB-P-1.14` | Business Memory, Documents & Durable Media | Mature Ledger/Business Memory foundation, UDI, Receipt Cabinet, governed document/media storage | 3, 5, 25, 22 |
| `SB-P-1.15` | Reminder, Daily Intelligence & Ask CFO | Reminder/delegated automation, proactive intelligence rhythm, read-only Ask CFO | 2, 4, 11 |
| `SB-P-1.16` | Financial Integrity & Credit | Customer-credit maturity, payment evidence, bank/payment reconciliation | 3 completion, 14, 15 |
| `SB-P-1.17` | Manager Operations | Stock/supplier/reorder completion, POS intelligence, closing cash, Manager workspace | 7, 13, 17 |
| `SB-P-1.18` | Controlled Business Add-ons | Smart Order & Delivery, Staff/HR, Compliance as separately gated workstreams | 1, 6, 16 |
| `SB-P-1.19` | Activation, Lifecycle & Platform Stewardship | Onboarding/first value, lifecycle/subscription, Support completion, Super Admin, Voice Plus | 8 completion, 18, 19, 20, 12A |
| `SB-P-1.20` | WhatsApp Channel Integration | Meta WhatsApp Cloud API as thin adapter into complete Smart Business kernels | 23 + channel verification of 9, 10, 12, 22, 24 and applicable workflows |

Internal workstreams/stages/gates are allowed.

They do **not** silently create additional Product Mission IDs.

Source 18 requires stage separation and independent verification; it does not impose one-contract-per-Mission-ID.

**Assignment lock.** The mission assignment of a `BUILD NOW` requirement in this table, in Sections 11 and 12, and in the contracts' own dependencies is locked. Changing it needs a recorded Founder decision. Internal workstreams remain free and do not change assignment.

**Vocabulary.** The nine-mission table is mission *scheduling*: which mission builds a `BUILD NOW` requirement. `BUILD LATER` is a product *commitment*, the build-commitment value of the Global Product Completion View. A `BUILD NOW` requirement assigned to a later mission stays `BUILD NOW` and never becomes `BUILD LATER`. Technical incompleteness never authorizes changing either.

---

# 10. Mission-by-Mission Build and User Experience Plan

Each subsection below summarizes a mission's product outcome, required work areas and Founder-approved experience. **The summaries are not exhaustive.** The complete requirement set of a mission is its FCTM, built from the full text of the mature contracts it advances (Source 18 Section 3.2), and material that a summary does not name is not thereby out of scope.

## 10.1 `SB-P-1.12 — Authority, Identity & Product Surface Foundation`

### Product outcome

Make all later work safe by establishing durable authority, identity, isolation, and the correct product-surface model.

### Required work areas

- Owner/Manager/Employee role model;
- business membership and shared identity primitives;
- explicit permission matrix;
- delegated authority boundaries;
- execution-time authorization and revalidation;
- business isolation / cross-tenant denial;
- RLS/grants/function-security review;
- residual `anon` privilege remediation;
- continuous-integration baseline maintained and extended for this mission's authority and isolation obligations (Section 5.2);
- entitlement primitives where needed;
- Product & Price Master reclassification;
- safe contextualization/demotion plan for `/catalog`;
- preserve existing valid product/pricing/inventory data and deep-link continuity until replacement access is proven.

### Founder-approved experience

The Owner is visibly the highest authority.

Managers and Employees receive bounded, understandable capabilities without becoming Owner-equivalent.

Protected financial intelligence remains protected.

Unauthorized requests receive calm, useful denials without leaking the answer.

A user from one business cannot see, search, export, or modify another business’s protected data.

When Conversation Workspace arrives in `SB-P-1.13`, the same isolation must extend to conversational access.

Product and price information appears contextually without forcing a competing Catalog mental model.

### Founder Runtime Verification scenarios

**A. Bounded delegation**

Owner grants a Manager a bounded contextual product-price-inventory view capability using the shared Product & Price Master. Manager sees only delegated operational areas. Owner financial surfaces remain denied. Evidence must include UI result plus data-layer/RLS denial evidence.

**B. Revocation invalidates stale action**

Manager begins a consequential preview such as a Product & Price Master bulk-import preview. Owner revokes the relevant permission before commit. Commit must fail because authority is rechecked at execution time; no protected write may occur.

### Exit principle

> Smart Business knows who is allowed to do what, protects the business, and does not require the merchant or staff to understand unnecessary software categories.

---

## 10.2 `SB-P-1.13 — Native Conversation & AI Intelligence Foundation`

### Product outcome

Create Smart Business’s own conversational operating surface independently of WhatsApp.

### Required work areas

- native Conversation Workspace;
- English/Malayalam/Manglish language understanding;
- conversation context;
- Basic Voice;
- AI orchestration and provider abstraction;
- typed tool/action proposals;
- permission-context propagation;
- clarification/preview/confirmation;
- deterministic domain command execution;
- audit trail;
- attachment handoff into UDI path;
- FAQ-before-AI Support Automation foundation;
- graceful AI/provider failure behavior.

### Important infrastructure condition

Basic Voice requires an explicit environment/provider activation gate because no mature voice provider path is currently established in the app.

### Founder-approved experience

An authorized merchant can open the native Conversation Workspace and use natural English, Malayalam, or Manglish.

Smart Business asks the smallest useful clarification when a consequential amount, item, party, date, unit, or action is ambiguous.

Natural-language actions cannot bypass permissions.

Structured pages remain available; conversation enriches rather than replaces every interface.

Smart Business still works if WhatsApp/Meta is disconnected.

### Founder Runtime Verification scenarios

**A. Natural-language governed action**

Authorized user describes a transaction in natural language. Assistant clarifies only if required, shows the proposed consequential action, executes through the existing governed command/RPC, and confirms actual stored state. Employee requests for Owner-only profit must be denied.

**B. WhatsApp-independence test**

Meta/WhatsApp is deliberately unavailable. Owner completes an approved native workflow successfully. Evidence must prove no Meta/WhatsApp call was required.

### Exit principle

> I can simply tell Smart Business what I mean, in the language I naturally use, and it helps me safely without needing WhatsApp or forcing me to think like software.

---

## 10.3 `SB-P-1.14 — Business Memory, Documents & Durable Media`

### Product outcome

Turn Smart Business into a trustworthy Business Memory that accepts the real documents merchants already use.

### Required work areas

- mature Ledger/Business Memory;
- four-state transaction maturity required by Contract 3, including income, expense, credit, repayment;
- additive transaction-type widening where required;
- UDI for approved images/PDF/Excel/CSV/document inputs;
- receipt/document provenance;
- ambiguity handling;
- preview-confirm-update;
- Receipt Cabinet;
- governed media/object storage;
- ownership/permission metadata;
- correction/audit continuity;
- reuse of canonical parser/import/idempotency foundations;
- opening-stock/import convergence into UDI rather than a separate parser product.

### Important engineering correction

The four-state Ledger transaction-type widening belongs in `SB-P-1.14`, not `SB-P-1.16`.

`SB-P-1.16` builds customer-credit-specific structures and financial integrity on top of this mature Ledger foundation.

### Search sequencing clarification

By mission end, Business Memory can be searched using available human concepts such as period, party/counterparty reference, purpose, or document.

Structured Customer/Supplier-directory-indexed search matures only after Supplier and Customer identities are established in later missions (`SB-P-1.17` / `SB-P-1.18`).

### Founder Runtime Verification scenarios

**A. Document interpret → preview → confirm binding**

Merchant uploads a receipt/invoice/image/PDF, corrects an ambiguous interpreted field, and confirms. The committed record must use the exact reviewed interpretation. If the underlying resolvable target changes between preview and commit, the system must re-prompt rather than silently retarget.

**B. Four-state Ledger recording**

Owner records income, expense, credit, and repayment. All four states must persist and retrieve correctly without damaging existing sale/purchase history.

### Exit principle

> I can give Smart Business the messy documents I already use, review what it understood, and later find both the business fact and the original proof.

---

## 10.4 `SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO`

### Product outcome

Reduce Owner mental load while preserving human authority.

### Required work areas

- shared Reminder Engine;
- done/snooze/reschedule;
- recurring reminders with occurrence/history discipline;
- bounded delegated continuation;
- Daily Intelligence at **7:00 AM / 10:30 AM / 10:00 PM**;
- Ask CFO read-only intelligence;
- permission-scoped retrieval;
- fact vs estimate/pattern/risk/recommendation distinction;
- transition from insight to action only through explicit user continuation or valid bounded delegation.

### Founder-approved experience

Ask CFO explains and clarifies; it does not execute writes.

Daily Intelligence prioritizes useful exceptions over information overload.

Manager/Employee access remains permission-scoped even when information is requested conversationally.

### Founder Runtime Verification scenarios

**A. Reminder continuation**

Owner says, “Remind me Friday to pay this supplier.” Correct reminder is created. At due time, a consequential payment action still requires confirmation unless an explicit bounded Owner delegation exists.

**B. Ask CFO read-only boundary**

Owner asks “Who owes me money?” and receives contextual authorized information. Manager without that delegated intelligence receives only the permitted subset. Evidence must show no write occurred from Ask CFO.

### Exit principle

> Smart Business remembers what I may forget, brings the right things to my attention, and helps me think—but it never behaves as if it owns my business.

---

## 10.5 `SB-P-1.16 — Financial Integrity & Credit`

### Product outcome

Complete the relationship among credit, repayment, payment evidence, and reconciliation without turning uncertainty into false truth.

### Required work areas

- customer-credit-specific records and balances;
- repayment history;
- ageing/follow-up awareness;
- Smart Credit warn-not-block behavior;
- payment evidence;
- bank/payment reconciliation;
- deterministic candidate matching;
- ambiguity review;
- idempotent linking;
- visible unresolved discrepancies;
- auditable correction/reconciliation decisions.

### Founder-approved experience

Smart Credit warns the Owner but does not automatically refuse a sale or customer relationship.

Payment evidence may be verified, unmatched, partially matched, or ambiguous.

Ambiguous matches require review.

Reconciliation cannot duplicate income or repayment.

### Founder Runtime Verification scenarios

**A. Credit warning with Owner authority**

Customer has overdue balance. Owner attempts another credit sale. Smart Business shows ageing/risk clearly but allows the Owner to proceed, override, or decline.

**B. Ambiguous payment match**

One payment-evidence item plausibly matches multiple open transactions. System shows candidate matches and requires review. Repeating the confirmed link must not create duplicate financial entries.

### Exit principle

> Smart Business helps me know who owes what and what has actually been paid, but it never pretends uncertain money is settled or makes credit decisions for me.

---

## 10.6 `SB-P-1.17 — Manager Operations`

### Product outcome

Make Smart Business genuinely useful for day-to-day operational management without becoming a heavy ERP.

### Required work areas

- supplier identities and supplier-product relationships;
- low-stock / slow-stock intelligence;
- expiry/freshness/wastage where data supports it;
- reorder intelligence;
- Owner-confirmed reorder by default;
- bounded delegated reorder where explicitly configured;
- standard POS bridge adapters;
- neutral counter review;
- closing-cash comparison;
- mature Manager workspace;
- contextual Product & Price Master access;
- opening-stock/bulk-stock intake through UDI rather than a third import stack.

### Founder-approved experience

Existing POS that works should be bridged, not insulted or forcibly replaced.

POS/counter anomalies are neutral review items, not theft/fraud accusations.

Product/price management appears where operational work needs it rather than reviving Catalog as a competing top-level product.

### Founder Runtime Verification scenarios

**A. Confirmation-gated reorder**

Item falls below threshold. Smart Business shows evidence-backed reorder suggestion. Owner confirms unless bounded delegation already authorizes it. Result must link to the same Product & Price Master item identity.

**B. Neutral POS review**

Standard POS bridge surfaces an unusual discount/counter anomaly. UI language remains neutral and asks for review; it must not accuse staff of wrongdoing.

### Exit principle

> I can understand what is happening in my shop and what needs attention without replacing all my current tools or being accused by my software.

---

## 10.7 `SB-P-1.18 — Controlled Business Add-ons`

This mission contains three separately verifiable workstreams under one Product Mission identity.

### A. Smart Order & Delivery

Required outcomes:

- capture order from natural text/voice, phone-call note, image/list, or supported document;
- material ambiguity produces clarification, not invented confirmation;
- stock/availability informs order;
- substitution/partial fulfilment requires confirmation;
- clear lifecycle from draft → confirm → prepare → assign → deliver → close;
- delivery staff receives only purpose-limited information/actions;
- proof/COD handling is auditable;
- no default continuous employee GPS surveillance;
- customer silence alone does not invalidate otherwise sufficiently proven delivery;
- COD/payment closure reuses shared Ledger/payment truth;
- private merchant-customer network remains private; this is not a marketplace.

Runtime scenario: ambiguous customer order must remain draft until material ambiguity is resolved.

### B. Staff / HR

Required outcomes:

- Owner manages staff and assigns bounded permissions;
- permitted Employee can view own attendance/self-service only;
- employee cannot see unrelated staff or Owner financial intelligence;
- attendance/geofence, if used, is purpose-limited rather than continuous surveillance;
- corrections/leave/request workflow is auditable;
- staff actions in Transactions, Stock, Orders, Documents preserve actor identity;
- no hidden employee scoring/punishment system;
- no automated wage punishment or misconduct verdict.

Runtime scenario: Employee requests own attendance correction and can neither browse another employee nor access Owner financial intelligence.

### C. Compliance Shield

Required outcomes:

- compliance documents use shared UDI/document path;
- expiry/renewal/status awareness uses shared Reminder Engine;
- supporting document/provenance remains retrievable;
- Smart Business does not claim to be legal authority or guarantee legal compliance;
- compliance data remains business-scoped and permission-controlled.

Runtime scenario: approaching licence expiry produces a useful reminder linked to the document, without legal-authority claims.

### Exit principle

> The add-ons solve real jobs using the same Smart Business I already understand; they do not turn into surveillance, a marketplace, or three new software systems.

---

## 10.8 `SB-P-1.19 — Activation, Lifecycle & Platform Stewardship`

### Product outcome

Make Smart Business responsibly acquire, activate, support, retain, and operate merchants.

### Required work areas

- `/start` onboarding;
- early language choice/use;
- progressive discovery;
- understandable product recommendation;
- Business Identity continuity;
- UDI-assisted import where appropriate;
- first practical win;
- safe resume after interrupted onboarding;
- subscription/payment/account lifecycle;
- trial/no-trial configurability until Founder decision;
- FAQ-first → AI fallback → human escalation support chain;
- purpose-limited support access;
- Super Admin/platform health and support stewardship;
- Voice Plus;
- recoverable lifecycle/support/platform failures.

### Founder-approved experience

Merchant should reach a real useful result, not merely “account created.”

Support escalation must preserve prior context so merchants are not forced to repeat themselves.

Team LIPS operational visibility must not become a privacy bypass.

### Founder Runtime Verification scenarios

**A. First practical win**

New merchant starts at `/start`, creates business identity, records/imports one real fact or document, and receives a genuine useful outcome. Interrupted onboarding resumes safely without repeating completed steps.

**B. Support escalation with context**

FAQ-before-AI does not resolve an issue. Human support ticket receives relevant prior conversation context, while support access remains purpose-limited and auditable.

### Exit principle

> A merchant can understand, start and get value without manipulation, and Team LIPS can support the product responsibly without treating merchant data as ours.

---

## 10.9 `SB-P-1.20 — WhatsApp Channel Integration`

### Product outcome

Expose the already-built Smart Business through the familiar WhatsApp doorway without creating a second product brain.

### Required work areas

- Meta webhook/channel verification;
- identity/business mapping;
- inbound normalization;
- retry/idempotency discipline;
- media/message normalization;
- outbound response delivery;
- template/consent handling where applicable;
- channel health/failure behavior;
- reuse of existing Conversation/AI/permission/action/UDI/reminder systems.

### Founder-approved experience

Text, voice, images/documents and English/Malayalam/Manglish over WhatsApp use the same Business Memory, permissions, AI, confirmations, and domain actions as native Smart Business.

Merchant can move between native app and WhatsApp without duplicate records or conflicting truth.

Customers, suppliers, and delivery staff receive only purpose-limited WhatsApp workflows.

Meta outage affects the doorway, not Smart Business itself.

### Founder Runtime Verification scenarios

**A. Same record across channels**

Owner performs equivalent request over WhatsApp. It reaches the same underlying domain service as native conversation and produces one authoritative record, not a WhatsApp-specific duplicate.

Consequential confirmation must bind to the exact actor/business/action/state and be revalidated before execution.

**B. Meta outage degradation**

Meta becomes unavailable. WhatsApp reports channel degradation appropriately. Native Smart Business and background operations continue. After reconnection, no lost/duplicated consequential action appears.

### Exit principle

> WhatsApp is another doorway into the same Smart Business—not a separate bot, database, permission model, or business system.

---

# 11. Cross-Mission Dependency Rules

The nine missions are cumulative.

Important dependencies include:

- `1.12` Authority/Identity underpins all later role/permission behavior.
- `1.13` Conversation/AI underpins Ask CFO, multilingual conversational workflows, Voice, later WhatsApp, and FAQ-first support foundation.
- `1.14` Business Memory/UDI underpins later financial integrity, Compliance documents, onboarding imports, and Order/Delivery document inputs.
- `1.15` Reminder/Automation underpins Compliance reminders, supplier/reorder continuation, credit follow-up, and other time-based workflows.
- `1.16` Financial Integrity underpins COD/payment closure and trustworthy credit/payment behavior.
- `1.17` Stock/Supplier/Reorder underpins Order availability/substitution and supplier-linked workflows.
- `1.18` completes pilot-required controlled add-ons.
- `1.19` completes support/lifecycle/stewardship and Voice Plus.
- `1.20` may only adapt existing intelligence and actions into WhatsApp; it must not create missing core business behavior inside the adapter.

Cross-mission feature advancement must remain visible in the Global Product Completion Register.

A later mission may complete a contract partly advanced earlier, but it must not claim earlier work as newly created.

The approved sources for assigning a `BUILD NOW` requirement to a later mission (the `ASSIGNED TO LATER MISSION` disposition of the FCTM) are Sections 9, 10, 11 and 12 of this plan and the contract's own stated dependencies. Without one of them the disposition is unavailable and the change goes to the Founder.

---

# 12. Support Automation Split — One Contract, Two Missions

Contract 8 is intentionally cross-mission:

- `SB-P-1.13`: establishes the FAQ-before-AI / low-compute support foundation in the shared message pipeline.
- `SB-P-1.19`: completes broader support automation, human escalation, support operating surfaces, purpose-limited access, and context-preserving handoff.

This must remain **one support system**.

Do not create one support implementation for Conversation and another for lifecycle/support operations.

This split is an approved assignment source for the FCTM.

---

# 13. Completion Report Experience Verification Matrix — Permanent Rule

Every future Product Mission from `SB-P-1.12` through `SB-P-1.20` must include an **Experience Verification Matrix** in its Completion Report.

At minimum:

| UX anchor / human outcome | Applicable actor/role | Runtime status | Evidence | Dependency / note |
|---|---|---|---|---|
| Mission-specific Founder-approved outcome | Owner / Manager / Employee / Customer / Supplier / Delivery Staff / Team LIPS as applicable | `PASS`, `FAIL`, `NOT APPLICABLE`, or justified `DEFERRED BY APPROVED DEPENDENCY` | Runtime evidence | Exact dependency or exception |

Rules:

1. A merged PR is not sufficient proof.
2. Green CI is not sufficient proof.
3. A working backend is not sufficient proof if the intended user experience is absent.
4. A visually similar screen is not sufficient proof if the real permission/data/action path is missing.
5. Founder Runtime Verification must test the mission’s applicable UX anchors.
6. Independent verification must test protected/denied behavior where the mission contains authority/security boundaries.
7. `DEFERRED` is allowed only when the dependency is explicitly approved and owned by a later mission.
8. A later mission cannot use that deferral to erase accountability for the earlier portion.

Additional rules:

9. The matrix is seeded at Stage 4 from the Founder-approved experience and scenarios of Section 10. The Founder-reserved scenarios are the Section 10 Founder Runtime Verification scenarios plus any anchor Mission Control designates, and they are locked at Stage 8.
10. The matrix is the experience subset of the mission's Contract Reconciliation, which covers every FCTM row of every contract the mission advances. Both cite the FCTM row IDs.

This rule is accepted as technically and governance-sound.

---

# 14. Source 18 Execution Discipline for Every Future Mission

This build plan does not bypass the Product Mission lifecycle.

Each mission must proceed through the lifecycle of the current active Source 18, and this plan does not restate its stages. In particular:

- a mission consumes approved truth and does not rediscover it;
- every mission keeps Product Truth complete through its FCTM, with no silent omission, deferral, simplification or reclassification;
- Stage 19 independent verification is mandatory for every mission.

The dual-intake rule, preserved verbatim:

> Every Product Mission intake must consume both current validated OLE learning and the canonical Phase 1 institutional-memory guide until Mission Control verifies that the historical OLE backfill is complete.

No actor may approve its own work.

PR merge is not Mission Control acceptance.

Green CI is not Mission Control acceptance.

Tool access is not authority.

---

# 15. Current Unresolved Founder Decisions

These remain intentionally unresolved and must be addressed only when relevant to a future mission:

1. current free-trial policy;
2. exact Voice Plus price;
3. exact Staff/HR price;
4. exact Smart Stock price;
5. exact Smart Order & Delivery price;
6. exact long-term retention/deletion duration after cancellation/non-payment;
7. employee KYC/national-ID necessity and legal/privacy basis;
8. broader wholesaler/marketplace expansion;
9. third-party underwriting/lending ecosystem.

These do **not** block unrelated Build Now work. An unresolved decision affects only the FCTM rows on its critical path (Global Product Completion View Sections 8 and 10).

Do not guess them in implementation.

---

# 16. Explicit Rejections / Non-Goals

Future missions must not silently revive:

- Ask CFO as write-capable authority;
- AI accusation/judgment of employees or customers;
- continuous staff GPS surveillance by default;
- automated wage punishment;
- blind supplier procurement without valid Owner delegation;
- hard credit blocking by default;
- custom client-specific POS modification inside core;
- marketplace behavior inside Smart Order & Delivery;
- customer silence automatically invalidating otherwise sufficiently proven delivery;
- duplicate channel-specific Business Memory;
- duplicate channel-specific permission models;
- separate AI brains per feature/channel;
- model conversation history as permanent Business Memory;
- uncontrolled binary-media concentration in Supabase for convenience;
- provider URLs as permission authority/business identity;
- destructive subscription-driven schema creation/deletion;
- broad routine Super Admin access to merchant private data;
- revival of `/survey` or obsolete domains/routes;
- old Daily Intelligence timing that conflicts with the approved 7:00 AM / 10:30 AM / 10:00 PM rhythm;
- independent Catalog product expansion.

Each explicit rejection is an FCTM `OUT OF BUILD SCOPE` row that the mission checks as "must not appear".

---

# 17. What This File Replaces and What It Does Not Replace

For future mission planning, this file becomes the durable consolidated build-plan reference.

The historical communication artifacts remain provenance:

- Mission Control proposal;
- Claude Code independent engineering plan;
- `instruction.1`–`instruction.4`;
- `report.1`–`report.4`;
- Founder Product Decision Record;
- final reconciliation/synthesis evidence.

This file does **not** replace:

- the 25 mature feature contracts;
- Product Truth sources;
- Source 18;
- future mission-specific Product Blueprints;
- future EIS documents;
- runtime evidence;
- Global Product Completion Register.

A future Product Mission should use:

**current Product Truth + this consolidated build plan + relevant mature feature contracts + verified current repository/runtime state + only the unresolved Founder decisions relevant to that mission.**

That formula is made verifiable by the mission's inputs: current validated OLE learning and the canonical Phase 1 institutional-memory guide (dual intake); the Global Product Completion Register; the mission's Feature Coverage and Product Truth Traceability Matrix, built from the full text of the relevant contracts; and freshly verified delivery topology.

---

# 18. Final Planning Disposition

The accepted build direction is:

1. Preserve and safely evolve the existing implementation.
2. Build the Authority/Identity/Product Surface foundation first.
3. Build native Conversation and shared AI intelligence before WhatsApp.
4. Mature Business Memory and UDI before higher-order financial/operational automation.
5. Build one Reminder/Automation kernel and one Business Command path.
6. Complete Financial Integrity before relying on payment/COD/credit automation.
7. Complete Manager Operations before Order/Delivery depends on stock/supplier intelligence.
8. Build Order/Delivery, Staff/HR, and Compliance as separately verifiable workstreams under one mission.
9. Complete onboarding/lifecycle/support/platform stewardship before production-scale acquisition.
10. Integrate WhatsApp last as a thin, first-class external adapter into the already-working Smart Business.
11. Verify every mission against Founder-approved human outcomes, not only code existence.
12. Keep the Global Product Completion Register synchronized as contracts advance across missions.

The historical reconstruction mission may use this artifact as the durable build-plan handoff during closeout.

No future `SB-P-*` mission is authorized merely because this file exists.

---

# 19. Operational Baseline (dated 2026-09-19)

This section records verified operational facts as of 2026-09-19. It authorizes nothing, and later fresh verification supersedes it.

- **Continuous integration.** See Section 5.2. The Fast Gate runs on every pull request and push to `main`; Full Assurance runs on approved paths; the only status check required on `main` was the Markdown Quality Gate. Protection hardening is deferred and not represented as remediated.
- **Delivery topology.** See Section 5.3. It is volatile and shall be freshly verified before any external action.
- **Verification protocol.** The Independent Verification Efficiency Protocol (`SB-IV-1.0`) is active at Version 1.0. A Version 1.1 amendment under `SB-GOV-PRODUCT-EXEC-1.0` was independently verified and merged in PR #606 and is operative only from the Mission Control Activation Confirmation.
- **Institutional learning.** Seventeen OLE promotion records exist under `organizational-learning/promotions/`, each `VALIDATED` and `MISSION_SCOPED`. The historical OLE backfill is `NOT VERIFIED COMPLETE`. Dual intake applies.
- **Migration authority.** `docs/migration/README.md` default-deny applies: execution requires a new, current, explicit Founder- or Mission Control-authorized migration mission.
- **Global Product Completion Register.** No one of the 25 mature contracts is currently proven complete end-to-end against its hydrated contract (Register Section 6).
- **Early gates.** Section 5.1 (residual `anon` privilege on `businesses`, `transactions` and `transaction_correction_events`) remains open in the repository: no migration in `supabase/migrations/` revokes `anon` on those tables. Live grant state was not verified by the reconciliation mission. Section 5.2 is restated above.

---

## Final Principle

> **Build Smart Business as one permission-aware, conversation-capable, evidence-backed business system whose intelligence assists humans, whose channels share one truth, and whose implementation is proven by the experience the Founder and merchant can actually verify.**
