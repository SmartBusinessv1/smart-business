# SB-P-1.12 — Authority, Identity & Product Surface Foundation

## Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.12 |
| Mission Name | Authority, Identity & Product Surface Foundation |
| Mission Type | Foundational Product Mission (Core Authority/Permission Kernel; not a single end-user feature) |
| Lifecycle Stage | Stage 7 — Engineering Review — **DRAFT** (Sections 1–19 approved at Stage 5, MC-21, PR #630; Stage 6 Builder Review findings accepted, MC-24, PR #632) |
| Product Blueprint Scope | Metadata, Mission Snapshot, Sections 1–19 (this document only). Sections 20–21, Builder Review, Engineering Review, EIS and implementation are separately authorized later stages. |
| Status | `SECTIONS 1–19 APPROVED (v0.3, PR #635); SECTIONS 20–21 DRAFT — AWAITING MISSION CONTROL STAGE 7 REVIEW AND INDEPENDENT SECURITY REVIEW; NOT LOCKED` |
| Product Authority | Founder (Riyas PK) |
| Product Discovery and Drafting | Claude Code, MC-02 appointed Stage 2–4 Definition Actor |
| Constitutional Authority | Source 01 and Source 11 jointly, subordinate to the Lighthouse Constitution (Source 00) |
| Lifecycle Authority | Source 18 v1.2 |
| Upstream Product Dependency | None — this is itself the authority/permission/isolation foundation later missions depend on. Builds on existing session authentication (Supabase Auth) and the existing `owner_id`-scoped RLS pattern established by SB-P-1.10/SB-P-1.11, without treating either as an accepted authority-model dependency. |
| Founder Product Decision Record | [`founder/03-stage3-founder-product-decision-record.md`](../../../communication/missions/SB-P-1.12/founder/03-stage3-founder-product-decision-record.md) — `FPDR-1`–`FPDR-4`, canonical, PR #628, `main@d7110a98a8b843304c81e3803b637a6fc41906e9` |
| Canonical FCTM | [`claude-code/03-stage2-populated-fctm.md`](../../../communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md) — 373 rows: 228 `IN SCOPE`, 113 `ASSIGNED TO LATER MISSION`, 2 `DELEGATED`, 30 `NOT APPLICABLE`, 0 `ESCALATED` |
| Date | 2026-09-23 |
| Builder Review | Complete — findings F-01–F-11 accepted as findings, not implementation decisions (MC-24, PR #632) |
| Engineering Review | DRAFT — Sections 20–21 prepared by Claude Code under MC-35 (`mission-control/21-stage7-engineering-review-activation-record.md`); independent Security & Permissions Architecture review (MC-33) outstanding; no finding accepted |
| Founder Approval | Not yet sought — Stage 5–8 review precedes any Founder Sections 1–19 approval |
| Mission Control Review | Pending — Stage 5 Product Review, including the Source 18 §3.2 item 6 FCTM completeness test (Gate 10) and Institutional Learning Intake confirmation |
| Blueprint Lock | Not applied |
| Next Lifecycle Gate | Mission Control Stage 7 review of the complete Blueprint and disposition of the independent security review; Founder resolution of open product questions; then Stage 8 Founder approval and Blueprint lock, separately authorized |

## Mission Snapshot

| Field | Summary |
|---|---|
| Product problem | Nothing later can be safely built — Manager delegation, Employee self-service, external participants, AI/conversation intake, or any cross-mission foundation — until Smart Business has one durable, testable answer to "who is allowed to do what, to which business, under which entitlement, revalidated at the moment of action." Today the approved shared answer does not exist. Repository evidence shows partial, owner-only building blocks — Supabase session authentication, and Owner-scoped (`owner_id = auth.uid()`) row-level-security patterns on previously delivered Catalog and Inventory paths — but no role, membership, delegation or permission model of the kind Contract 21 approves: no schema beyond a single `owner_id` per business, no Manager/Employee authority, and no execution-time revalidation. Those owner-only patterns are partial evidence, not Contract 21 authority. Separately, a residual overly-broad `anon` privilege grant is a repository-file finding whose live production state is `UNVERIFIED`; nothing here verifies live grants, RLS or function privileges. |
| Primary users | Every role Contract 21 names — Owner, Manager, Employee, Supplier, Customer, Delivery Staff — as consumers of the authority/permission/isolation model this mission builds, plus every later Product Mission that must consume it rather than invent its own. |
| Build Now | Core Authority Model (Owner/Manager/Employee/Supplier/Customer/Delivery Staff); explicit multi-dimensional permission matrix; business isolation at every layer; server-side/execution-time authorization and revalidation; delegated-automation authority checks; confirmation binding; permission/authority auditability; calm denial behavior; entitlement primitives; Employee self-service boundaries; temporary/purpose-limited support access; Privacy/Dignity guarantees (no continuous surveillance, no hidden scoring); the Identity, Permission/Isolation, Confirmation, Audit, Schema-Stability and Non-Goal slice of Contract 22 this mission owns; the Users-and-Permissions/Permission-Enforcement slice of Contract 17; the Permission/Role-Setup slice of Contract 20; the touched Product & Price Master / permission-integration surface of Contract 7; residual `anon` privilege remediation (WS-B); Product & Price Master reclassification, contextual demotion of the standalone `/catalog` surface, and preserved deep-link continuity. |
| Core boundary | This mission owns *authority, permission, isolation and the shared architectural constraints every other foundation must respect* — it does not itself build Notification delivery, Location tracking, Conversation/AI orchestration, Document Intelligence, Reminders, Manager Operations depth, Onboarding, or WhatsApp. Those consume this mission's Permission Engine; they are not built here. |
| Assigned to later missions (Build Now, not Build Later) | Shared Notification Foundation → `SB-P-1.15` (`FPDR-1`); shared Location Foundation primitive and named attendance/delivery disclosures → `SB-P-1.18` (`FPDR-2`/`FPDR-3`); Conversation/Intent-Action, Human Language, AI Authority Foundations → `SB-P-1.13`; Universal Document Intelligence, Document/Receipt Memory, Business Memory Foundations → `SB-P-1.14`; Reminder/Delegated-Automation, Scheduler/Background-Job Foundations, Ask CFO → `SB-P-1.15`; Manager-depth dashboard/workspace surfaces, stock/supplier/reorder feature → `SB-P-1.17`; Staff/HR and Order & Delivery add-ons → `SB-P-1.18`; onboarding/activation flow → `SB-P-1.19`; WhatsApp channel adapter → `SB-P-1.20`. All remain `BUILD NOW` at their own owning mission — never reclassified `BUILD LATER` by this Blueprint. |
| Rejected | UI-only permission enforcement; Manager-as-automatic-Owner-equivalent; Employee accounts that are permanently useless write-only shells; support access without consent/audit/revocation; AI/tool capability treated as authority; subscription-state changes that can destroy schema; continuous employee surveillance; hidden staff scoring or accusation; routine broad admin visibility into merchant data; cross-business analytics leakage; a second, competing Catalog mental model that hides the reclassified Product & Price Master; any new location-capture mode, retention period, consent policy, commercial classification or pricing invented by this Blueprint. |
| Stage result sought | A Mission Control-reviewable, source-traceable Product Blueprint through Section 19 assembled by reference to canonical Product Truth, the reconciled FCTM and Founder Decisions `FPDR-1`–`FPDR-4`; no Builder Review, Engineering Review, lock, EIS or implementation artifact. |

## 1. Mission Overview

### Purpose

Establish the one durable Authority and Identity Kernel (Build Plan §6.1) that every later Smart Business mission must consume rather than reinvent: who a person is in relation to a business, what they are permitted to do, whether that permission still holds at the moment of a consequential action, and what a denial looks like when it does not. Alongside it, reclassify the existing Catalog surface as the shared Product & Price Master core foundation Build Plan §7 requires, preserving its existing data and deep-link continuity while demoting its standalone product-surface presentation.

### Summary

This mission builds the Core Authority Model (Owner, Manager, Employee, Supplier, Customer, Delivery Staff), an explicit multi-dimensional permission matrix, business isolation enforced at the database/API layer (not merely the UI), execution-time permission revalidation, delegated-automation authority checks, confirmation binding for consequential actions, permission/authority auditability, calm non-accusatory denial behavior, entitlement primitives, bounded Employee self-service, temporary purpose-limited support access, and the Privacy/Dignity guarantees Contract 21 §21 requires (no continuous surveillance, no hidden scoring, no routine broad admin visibility). It also owns the identity, permission/isolation, confirmation, audit, schema-stability and non-goal slice of Contract 22 that is this mission's own scope (not the later shared foundations Contract 22 assigns elsewhere), the permission-enforcement slice of Contract 17's Manager Workspace, the permission/role-setup slice of Contract 20's onboarding, the touched permission-integration surface of Contract 7, remediation of the residual `anon` privilege exposure (Build Plan §5.1), and the Product & Price Master reclassification Build Plan §7 requires.

This mission does not implement Notification delivery, Location tracking/consumption, Conversation/AI orchestration, Document Intelligence, Reminders/Daily Intelligence, Manager Operations depth, onboarding/activation flow, or WhatsApp integration. It builds the Permission Engine, isolation guarantees, and shared architectural constraints those missions must consume without duplicating.

### Mission Philosophy

Authority should be invisible when it is working correctly: the Owner sees everything, staff see exactly what they have been given, and a denial reads as a calm, useful statement rather than an accusation. Nothing about this foundation should require a merchant or employee to understand a software concept called "roles" or "RLS" — it should simply feel like the system already knows who they are and what they are trusted to do. Server-side and database-layer enforcement is not optional or supplementary to a UI check; it is the actual security boundary, always, including for AI/conversational intake, which can propose but never widen access.

## 2. Domain

### Business Operations Domain — Authority, Identity & Product Surface

This mission belongs to the Business Operations Domain as the foundational authority/identity/isolation layer every other domain's mission consumes. It also owns the Product & Price Master's reclassified foundation status (Build Plan §7), even though the Catalog feature surface itself was built by SB-P-1.11.

### Relationship to Other Domains

#### Notification Domain (`SB-P-1.15`)

Per `FPDR-1`, the shared Notification Foundation (Contract 22 §12, 9 obligations: recipient identity/role, language, channel preference/availability, template/provider requirements, delivery/retry state, duplicate suppression, privacy, link to originating business event, delivery tracked separately from business-event completion) is a distinct workstream within the existing `SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO` mission, not this mission's build. `SB-P-1.20` (WhatsApp) must reuse it rather than duplicate notification logic. This mission supplies the Permission Engine and audit primitives the Notification Foundation must respect; it does not itself send a notification.

#### Location Domain (`SB-P-1.18`)

Per `FPDR-2`/`FPDR-3`, the shared purpose-limited Location Foundation primitive is a distinct workstream within the existing `SB-P-1.18 — Controlled Business Add-ons` mission. This mission retains ownership of the authority/permission/isolation rules the primitive consumes, and of the standing design constraint (Contract 22 §16-2, Contract 21 §21-1) that the Permission Engine must never enable continuous employee location surveillance. Each location-consuming feature's own owning mission — `SB-P-1.18` for the named attendance/delivery instances, any later mission for any future instance — independently defines and demonstrates that feature's five disclosures; `SB-P-1.18` does not carry future missions' verification merely because it owns the primitive.

#### Conversation and AI Domain (`SB-P-1.13`)

Conversation/Intent-Action Foundation, Human Language Foundation, and AI Authority Foundation (Contract 22 §§7, 8, 24; Contract 24, delegated) belong to `SB-P-1.13`. This mission supplies the Conversation/AI Permission Boundary rule (Contract 21 §8: one permission model across channels, natural language cannot widen access) that `SB-P-1.13`'s kernel must obey, and the Ask CFO / Owner Intelligence boundary rule (Contract 21 §9) that `SB-P-1.15`'s Ask CFO feature must obey.

#### Document and Business Memory Domain (`SB-P-1.14`)

Business Memory, Universal Document Intelligence, and Document/Receipt Memory Foundations (Contract 22 §§4, 9, 10) belong to `SB-P-1.14`.

#### Manager Operations Domain (`SB-P-1.17`)

The Manager Workspace's operational depth (financial/business summary, inventory/supplier/reorder views, POS/counter views, personalization) and the stock/supplier/reorder feature itself (Contract 7, outside this mission's limited MC-03/MC-04 opening) belong to `SB-P-1.17`. This mission supplies the Users-and-Permissions and Permission-Enforcement surface (Contract 17 §§13–14) that `SB-P-1.17`'s dashboard must sit inside.

#### Controlled Add-ons Domain (`SB-P-1.18`)

Staff/HR views and Order & Delivery views (Contract 17 §§9–10), beyond the Location Foundation already discussed, belong to `SB-P-1.18`.

#### Activation Domain (`SB-P-1.19`)

Onboarding/activation flow (Contract 20, except the Permission/Role Setup slice this mission owns) belongs to `SB-P-1.19`, which reuses this mission's role model to ensure "staff setup never default-grants Owner intelligence" (Contract 20 §16-3/§23-11).

#### Channel Domain (`SB-P-1.20`)

The WhatsApp Cloud API channel adapter is a thin adapter (Build Plan §6.6) that must reuse this mission's Permission Engine and `SB-P-1.15`'s Notification Foundation, not invent either.

#### Product & Price Master (existing `SB-P-1.11` implementation, this mission's reclassification)

Catalog identity, pricing, tax, SKU/barcode, price history and audit already exist from SB-P-1.11. This mission does not rebuild that feature; it reclassifies its architectural status to `CORE SHARED FOUNDATION` (Build Plan §7), plans its safe contextual demotion from a standalone `/catalog` route, and preserves every existing record and deep link.

## 3. Mission Objective

Establish, for every business in Smart Business, one authority and identity kernel that:

- gives every person a clear role (Owner, Manager, Employee) or bounded external participation (Supplier, Customer, Delivery Staff) within each business it belongs to — a person may hold memberships in more than one business, with a separately scoped role and permission set in each (for example Owner of one business and Manager of another), no cross-business access implied by any of them, and an unambiguous active-business context for every action (Stage 6 Founder Decision F-02, [Founder Record 04](../../../communication/missions/SB-P-1.12/founder/04-stage6-builder-founder-decision-record.md));
- expresses permission across every dimension Contract 21 §5 requires — authenticated user, business membership, role, explicit delegated capability, object/record ownership, action type, feature entitlement, channel/context, temporary/purpose-limited grant, and current account/subscription state — not merely a single "logged in" check;
- enforces that permission at the server/database layer as the actual security boundary, with the UI as a secondary convenience only;
- keeps Reference Cost and margin Owner-only by default, each separately and explicitly delegable to an authorized Manager, with delegation of one never delegating the other, enforced at the backend/data layer as well as the UI (Stage 6 Founder Decision F-03);
- revalidates authority at the moment of execution, not merely at the moment of preview, so a permission revoked between preview and commit blocks the commit (Founder Scenario B), and a permission revoked part-way through a multi-row import preserves the rows already committed, stops the unauthorized remainder, and tells the merchant what was completed and what remains (Stage 6 Founder Decision F-04(c), supplemental to and separate from Founder Scenario B);
- binds every consequential confirmation to the exact actor, business, action, target and reviewed state/value it confirmed;
- records who did what, from where, with what interpretation, correction and resulting action, on every security-sensitive event;
- denies calmly, without leaking the protected answer, without accusing the person, and without disrupting the rest of their normal work;
- protects Employees from surveillance and staff-scoring while still letting them do bounded, useful self-service work;
- remediates the residual `anon` privilege exposure (Build Plan §5.1) as a mandatory early security gate;
- reclassifies the Product & Price Master as the core shared foundation Build Plan §7 requires, without deleting existing data or breaking deep links; and
- gives every later Product Mission — Notification, Location, Conversation/AI, Document Intelligence, Reminders, Manager Operations, Onboarding, WhatsApp — one Permission Engine and isolation guarantee to consume, rather than each inventing its own.

## 4. Business Purpose

Smart Business cannot safely delegate work — to a Manager, to an Employee, to an AI assistant acting on a merchant's behalf, or to a future external participant like a Supplier or Delivery Staff member — without first answering, reliably and at the database layer, who that person is and what they are actually allowed to do right now. Today, `businesses.owner_id` is the only authority concept in the schema; the application's route-level gate checks session authentication only; and the RLS policies inspected in the repository are written for the single-owner case (`owner_id = auth.uid()`). Those Owner-scoped patterns are real but partial: they are not the approved shared role, membership, delegation and permission model of Contract 21, which does not yet exist, as confirmed by repository-file inspection (`06-stage2-delta-evidence.md` Part 3 §1). This is repository-file evidence only; it does not verify live production grants or RLS.

Every later Product Mission this Build Plan sequences — Conversation/AI, Document Intelligence, Reminders and Notification, Manager Operations, Controlled Add-ons including Location tracking, Onboarding, WhatsApp — depends on this foundation existing first, correctly, and once, rather than each mission building its own ad hoc permission check. A merchant who delegates a bounded task to a Manager needs to trust that the Manager cannot silently become Owner-equivalent; an Employee who is trusted to log a sale needs to trust that doing so does not expose the business's financial intelligence to them; and the business itself needs to trust that another business's staff, AI tools, or a routine support ticket can never see its data. This mission's business purpose is to make that trust structurally true, not merely promised in the UI.

## 5. Product Truth Alignment

### Humans Serving Humans

The Permission Engine exists so that delegation — to a Manager, an Employee, a Supplier, or an AI assistant — can happen safely and without the Owner needing to personally supervise every action. It does not replace merchant judgment about whom to trust; it enforces the scope of that trust once given, and lets the Owner take it back at any moment with an execution-time guarantee (Founder Scenario B).

### AI Assistant, Not AI Judge

Contract 21 §8's Conversation/AI Permission Boundary is unconditional: natural-language intake, whichever mission eventually builds it, can never widen access beyond what the same person would have through the structured application. An AI tool's capability to call an action is never itself authority to perform it (Contract 21 §23-5, Contract 22 §28-9).

### Respect Existing Merchant Workflows

The Core Authority Model reuses the roles Contract 21 already names — Owner, Manager, Employee, Supplier, Customer, Delivery Staff — rather than inventing new categories. Product & Price Master reclassification preserves every existing Catalog record, price history entry, and deep link; nothing merchants have already entered is deleted or hidden.

### WhatsApp-First, Not WhatsApp-Only

This mission's Permission Boundary explicitly names WhatsApp as one of several surfaces (Contract 22 §6-2) that must sit inside the same Permission Engine as the dashboard and any future Conversation Workspace — a design constraint on this mission's own deliverable, since `SB-P-1.20`'s adapter itself is a separate, later build.

### Human Decision Ownership

The Owner remains the visible highest authority (Build Plan §10.1 Founder-approved experience). Managers and Employees receive bounded, understandable, explicitly delegated capabilities; nothing about this Blueprint promotes any role to Owner-equivalent by default (Contract 21 §23-2, §23-3).

### Business Continuity First

Permission changes, entitlement changes, and subscription-state changes must never destroy schema or silently create/drop domain tables (Contract 21 §16-2, Contract 22 §20-1, §28-8). Every security-sensitive permission-related action is auditable, and denial preserves the merchant's ability to keep working everywhere else (Contract 21 §20-3).

## 6. User Value

| User | Value |
|---|---|
| Business Owner | Remains visibly the highest authority; can delegate bounded capability to a Manager without losing control, and revoke it with a real, execution-time guarantee rather than a UI-only promise; protected financial intelligence never leaks to staff by convenience. |
| Manager | Receives explicit, understandable, action-specific delegated capability inside the shared Product & Price Master and future Manager Workspace, without becoming Owner-equivalent and without needing to understand the underlying permission model. |
| Employee | Can do bounded, useful self-service and sale-support work (own attendance, own correction requests, assigned tasks) without exposure to Owner-level financial intelligence, continuous surveillance, or hidden scoring. |
| External participants (Supplier, Customer, Delivery Staff) | Participate in the business's workflows with a defined, bounded scope of visibility and action — never general dashboard access. |
| Later Product Missions (`SB-P-1.13`–`SB-P-1.20`) | Consume one Permission Engine, one isolation guarantee, one confirmation-binding pattern, and one audit model, instead of each building and maintaining its own — and inherit the specific boundaries this mission fixes for Notification ownership (`SB-P-1.15`), Location ownership (`SB-P-1.18`), and the Manager/Onboarding permission surfaces they sit inside. |
| Every business on the platform | Business isolation enforced at the server/database layer, not merely the UI, so another business's staff, AI tools, exports, or a routine support ticket structurally cannot reach its data. |

## 7. Core Deliverables

| Deliverable | Product outcome | Boundary |
|---|---|---|
| Core Authority Model | Owner/Manager/Employee/Supplier/Customer/Delivery Staff each has a real, schema-backed authority concept — not just `owner_id` | Does not itself decide *what* any later feature's UI looks like |
| Business membership schema | A person can be a member of a business with a role, distinct from `owner_id`'s current 1:1 assumption | New table(s); does not migrate or delete existing owner data |
| Explicit permission matrix | Every access decision checks authenticated user, membership, role, delegated capability, ownership/scope, action type, entitlement, channel, temporary grant, and account state | Does not invent new feature-specific permissions beyond what Contract 21/22/17/20/7's touched scope names |
| Business isolation enforcement | Cross-business reads/writes/exports/integration mappings denied at RLS/API layer for every table this mission's obligations touch | Does not retroactively re-secure every existing table outside this mission's own scope |
| Execution-time revalidation | A consequential action re-checks authority at commit, not just preview, so mid-flow revocation blocks the write (Founder Scenario B) | Applies to this mission's own confirmation-binding surface; later missions must adopt the same pattern for their own writes |
| Delegated-automation authority checks | Standing automation (reminders, reorder rules, any future "do X automatically") can never exceed its stored, revalidated scope | Does not build the automation features themselves (`SB-P-1.15`, `SB-P-1.17`) |
| Confirmation binding and audit | Every consequential confirmation is bound to exact actor/business/action/target/state; every security-sensitive event is auditable | Does not define domain-specific audit fields for features this mission does not build |
| Calm denial behavior | Denials are useful and non-accusatory, leak nothing, and preserve the rest of the user's session | Applies to this mission's own enforcement surface; later features must reuse it |
| Entitlement primitives | Role AND entitlement both required jointly where relevant; no dynamic schema mutation tied to subscription state | Does not define specific commercial entitlement tiers — that is a later, separate product decision |
| Residual `anon` privilege remediation (WS-B) | Closes the file-evidenced broad `anon` grant on `businesses`, `transactions`, `transaction_correction_events` and all functions | Does not itself certify live production state — production verification is separate and `UNVERIFIED` |
| Product & Price Master reclassification | Existing Catalog becomes the documented `CORE SHARED FOUNDATION`; `/catalog` is contextually demoted, not deleted | Preserves all existing data/deep links; does not add new Catalog features |
| CI baseline maintenance | Fast Gate stays green at every checkpoint; this mission's own authority/isolation tests extend it | Does not itself decide whether the Fast Gate becomes a required branch-protection check — surfaces the question to Mission Control |
| Cross-mission boundary fixes | Notification Foundation ownership fixed to `SB-P-1.15`; Location Foundation primitive/disclosure ownership fixed to `SB-P-1.18` (attendance/delivery named instance) | Does not build either Foundation; supplies only the authority/permission dependency and the boundary record itself |

## 8. Detailed Functional Scope

Assembled by reference to the canonical FCTM (`claude-code/03-stage2-populated-fctm.md`); every obligation below is cited by its FCTM row ID, not re-authored. See Section 19 for the complete row-to-section traceability table.

### 8.1 Core Authority Model (`21-§4-1`–`21-§4-6`; `BP-§10.1-1`)

A real authority record for Owner, Manager, Employee, Supplier, Customer and Delivery Staff — today only `businesses.owner_id UNIQUE` exists, structurally allowing exactly one authorized account per business (Delta DC-1). This mission's own membership-model design work resolves DC-1; no specific schema is approved Product Truth here. `owner_id UNIQUE` is a repository fact about today's single-owner shape, not a product rule limiting a person to one business: per Stage 6 Founder Decision F-02 a person may hold memberships in more than one business, each with its own role and permissions.

### 8.2 Permission Dimensions (`21-§5-1`–`21-§5-10`; `BP-§10.1-2`, `BP-§10.1-3`)

Every access decision must check: authenticated user, business membership, role, explicit delegated capability, object/record ownership and scope, action type (read/create/update/approve/export/admin), feature entitlement, channel/context, temporary/purpose-limited grant, and current account/subscription/security state — ten distinct dimensions, not a single "logged in" gate.

**Active-business context (Stage 6 Founder Decision F-02).** A person may hold memberships in more than one business, with a separately scoped role and permission set in each; being Owner of one business and Manager of another is permitted. Every action carries an unambiguous active-business context, and no permission held in one business implies access to any other. How a person's active business is selected, carried and verified is future engineering design and is not fixed here; this Blueprint adds no new experience anchor or merchant-facing feature.

**Field-specific delegation of Reference Cost and margin (Stage 6 Founder Decision F-03).** Reference Cost and margin are Owner-only by default. The Owner may separately and explicitly delegate each to an authorized Manager: delegating one never delegates the other, and a generic product read or a bounded Manager product view implies neither. The backend/data layer and the UI both enforce this, and no Employee visibility is inferred. The unconditional return of Reference Cost by the current product-read path is a repository finding recorded in the Stage 6 Builder Review (F-03), not accepted authorization, and no field-level permission is claimed to be implemented.

### 8.3 Business Isolation (`21-§6-1`–`21-§6-7`; `BP-§10.1-6`)

Cross-business reads, writes, conversation context, file/document access, exports, and integration mappings are all denied server-side; a client-provided `business_id` is never trusted alone — scope is always derived server-side from the authenticated session. A person's membership or role in one business never grants access to another business's protected data (Stage 6 Founder Decision F-02).

### 8.4 Server-Side Authorization (`21-§7`)

RLS/the database layer is the actual enforcement boundary; any UI-layer check is secondary convenience only, never the security guarantee itself.

### 8.5 Conversation/AI and Ask CFO Permission Boundaries (`21-§8`, `21-§9`)

One permission model applies across every channel; natural-language or AI-mediated intake can never widen access beyond the structured application (`SB-P-1.13`'s kernel must obey this). Ask CFO / Owner-intelligence access follows the same boundary (`SB-P-1.15`'s Ask CFO feature must obey this) — this mission owns the rule, not the feature.

### 8.6 Employee Self-Service (`21-§10-1`–`21-§10-6`)

An Employee may see their own attendance, own correction requests, own leave/request status, assigned tasks/orders/deliveries, and other job-specific information — and self-service must never expose unrelated staff or Owner intelligence.

### 8.7 Actor Identity in Scoped Creation (`21-§11-1`, `21-§11-2`)

Scoped creation preserves the actual creating actor's identity; create-permission never implies read-all, edit-all, export or analytics access.

### 8.8 Delegated Automation Authority Checks (`21-§12-1`–`21-§12-5`; `BP-§10.1-4`)

Standing automation (future reminders, reorder rules, any "do X automatically" capability) must check that the enabling rule is still active, the actor/business scope, the exact target/action/limits, current entitlement/state, and that no revocation or permission change has occurred since the grant — every time it runs.

### 8.9 External Participant Scoping (`21-§13-1`–`21-§13-3`)

Supplier, Customer and Delivery Staff participation is bounded and defined per role, not general dashboard access.

### 8.10 Temporary Support Access (`21-§14-1`–`21-§14-7`)

Any support access requires a legitimate purpose, an explicit consent/authorization process, minimum necessary module/data scope, time/purpose bounds, a privileged and identified actor, full audit, and revocation once resolved.

### 8.11 Authentication vs Authorization (`21-§15-1`–`21-§15-5`)

Session authentication alone never implies business membership, the Owner role, cross-business access, feature entitlement, or admin privileges — each must be independently established.

### 8.12 Entitlements (`21-§16-1`, `21-§16-2`; `BP-§10.1-10`)

Role and entitlement are jointly required where relevant; entitlement state is never expressed through dynamic schema create/drop.

### 8.13 Execution-Time Permission Revalidation (`21-§17`; `BP-§10.1-5`) — Founder Scenario B

Permission is rechecked at the moment of execution, not only at preview. Founder Scenario B: a Manager begins a consequential preview (e.g. a Product & Price Master bulk-import preview); the Owner revokes the relevant permission before commit; the commit must fail because authority is rechecked at execution time, and no protected write may occur.

**Revocation part-way through a multi-row import (Stage 6 Founder Decision F-04(c)) — supplemental to Founder Scenario B, which is unchanged above and in Section 15.** If permission is revoked while a multi-row import is running, rows already successfully committed are preserved and the unauthorized remainder is stopped. The merchant is told how many rows were completed and how many remain, and is guided to complete the remainder without duplicating rows already committed. There is no silent duplication, no automatic continuation under the revoked actor's authority and no mandatory rollback; any later completion re-checks the current actor's and business's authority. Progress accounting, replay protection and the resume or re-submission mechanism are not selected here and are left to a later authorized stage.

### 8.14 Confirmation Binding (`21-§18-1`–`21-§18-6`)

Every consequential confirmation binds the exact actor, business, action, target/object, reviewed state/value, and expiry/version where appropriate.

### 8.15 Permission/Authority Auditability (`21-§19-1`–`21-§19-8`)

Grant/revoke events, the grantor/actor, role/capability, scope, timestamp, resulting action or denial (where security-sensitive), temporary elevated access, and automation authority provenance are all recorded.

### 8.16 Denial Behavior (`21-§20-1`–`21-§20-5`)

A denial never leaks protected data while explaining itself, states what the user can do next where useful, preserves normal operation elsewhere in the session, avoids accusation or shame, and escalates only when actual security/abuse criteria are met — not on routine denial.

### 8.17 Privacy and Employee Dignity (`21-§21-1`–`21-§21-5`; `22-§16-2`)

No continuous employee surveillance (this is the same rule `22-§16-2` restates for location specifically, and the basis for the Location Foundation's own surveillance-rejection constraint); no hidden staff scoring or accusation; no routine broad admin visibility into merchant data; no cross-business analytics leakage; permission design supports useful work, not punishment.

### 8.18 Shared Foundation Reuse and Non-Goals (`21-§22`, `21-§23-1`–`21-§23-7`)

This mission's Authority Model is the one kernel every later mission must reuse (architectural mandate). Non-goals, individually preserved as "must not appear" checks: UI-only enforcement is rejected; Manager is never automatically Owner-equivalent; Employee is never a permanent useless write-only account; a support ticket never implies unrestricted access; AI/tool capability is never authority; subscription state never permits schema destruction; routine denial is never treated as a security accusation.

### 8.19 Authority Acceptance Scenarios (`21-§24-1`–`21-§24-12`)

Twelve scenarios covering: Owner access to own data; server-side cross-business denial; Manager sees only delegated capabilities (Founder Scenario A); Employee adds an approved transaction without gaining Owner analytics; Employee sees own attendance if permitted; Employee cannot gain Ask CFO access via a natural-language prompt; external participants see only their own bounded data; permission revoked mid-preview blocks execution (Founder Scenario B); entitlement plus role both enforced jointly; temporary support access is scoped/audited/revoked; standing automation cannot exceed delegated scope; normal denial remains respectful with no data leak.

### 8.20 Identity Foundation — Business and Person Entities (`22-§5-1`–`22-§5-9`; `BP-§10.1-2`)

Shared identity primitives for business, Owner, Manager, Employee, Customer, Supplier, Delivery Staff, product/catalog item, and external integration/provider references — the identity layer every later foundation (Notification, Location, Conversation) must reuse rather than duplicate.

### 8.21 Permission/Isolation Foundation — Surface Coverage (`22-§6-1`–`22-§6-10`)

The same permission/isolation model must cover UI/workspace, WhatsApp (design constraint — `SB-P-1.20` builds the adapter), Conversation Workspace (design constraint — `SB-P-1.13` builds it), server functions/APIs, database/RLS, background jobs, integrations, exports/files, and AI tools; feature-specific permissions may extend but never bypass this model.

### 8.22 Confirmation/Clarification Foundation (`22-§13-1`–`22-§13-5`)

Clarify before any consequential write; preview material or uncertain document import before committing; bind confirmation to the exact actor/action/state/object; revalidate permission/state at execution (mirrors §8.13); a generic or stale "Yes" is never unlimited authority (directly overlaps Founder Scenario B).

### 8.23 Audit/Human Context Foundation (`22-§14-1`–`22-§14-9`)

Every audited event retains the raw/original event, actor, source/channel, interpretation, any correction, authorized human context, confirmation/approval, resulting action, and timestamps.

### 8.24 Idempotency / Duplicate Protection (`22-§15`)

Duplicate/retried external or internal events must not be double-applied — a single integrated rule this mission's own deliverable must satisfy. Completion of a multi-row import interrupted by revocation must likewise be duplicate-safe (Stage 6 Founder Decision F-04(c); see Section 8.13); the mechanism is not selected here.

### 8.25 Integration/Extension and Error-Handling Design Constraints (`22-§17`, `22-§19`)

Extension points remain a future concern, not this mission's own build, but this mission's deliverable must not block them; failures must be narrowly contained rather than cascading.

### 8.26 Schema Stability (`22-§20-1`–`22-§20-4`; `BP-§7-4`)

No destructive/dynamic schema create/delete tied to subscription state; historical records stay durable; capability is controlled through entitlements/permissions, not schema changes; schema evolves only through governed migrations. Directly protects the Product & Price Master reconciliation Build Plan §7 requires.

### 8.27 Performance and Platform Quality Constraints (`22-§21`, `22-§22`)

Design constraints on this mission's own deliverable; no later-mission naming source exists for either.

### 8.28 Privacy and Data Ownership (`22-§23-1`–`22-§23-7`)

The merchant owns their data; no cross-business leakage; no routine platform access to merchant private intelligence; support access stays purpose-limited; staff data stays role/purpose-limited; individual merchant data is never sold; aggregate insight stays privacy-respecting and governed.

### 8.29 Dependency-Rule Self-Compliance (`22-§27-1`–`22-§27-7`)

This mission's own Blueprint and eventual EIS must state which mature features it advances, which shared foundations it reuses, whether it consumes AI orchestration or a channel adapter, what already exists and must not be duplicated, what remains committed outside this mission, exact blockers/dependencies, and required acceptance evidence — this document and the FCTM are the present partial-compliance evidence.

### 8.30 Cross-Cutting Non-Goals (`22-§28-1`–`22-§28-10`)

No duplicate Business Memory by channel; no duplicate Permission Engine per feature; no duplicate AI orchestrator per channel/feature; no duplicate reminder scheduler per feature; no duplicate OCR/document pipeline; no duplicate customer/supplier identity silos; no continuous employee GPS foundation (mirrors §8.17); no subscription-driven create/drop of core domain tables (mirrors §8.26); AI/tool capability is never authority (mirrors §8.18); no custom client-specific core forks.

### 8.31 Cross-Cutting Acceptance Scenarios (`22-§29-3`, `22-§29-6`, `22-§29-7`, `22-§29-8`, `22-§29-10`, `22-§29-11`, `22-§29-12`, `22-§29-14`)

Cross-business access blocked consistently at the services layer this mission owns (full channel-inclusive proof completes cumulatively as `SB-P-1.13`/others build their slices); customer/supplier identity not duplicated by feature; consequential confirmation exact and revalidated; duplicate external/retry events idempotent; feature/provider failure narrowly contained; subscription changes never destroy core schema; audit retains raw evidence plus human context; future documentation identifies reused foundations first (this Truth Pack/Blueprint is itself partial compliance evidence).

### 8.32 Onboarding Permission/Role Setup Surface (`20-§16-1`–`20-§16-4`; `20-§23-11`)

The Owner is the initial highest authority; staff/manager setup uses explicit invitations and permission assignment, not default Owner-equivalent grants; role setup stays simple enough not to block the Owner's first practical win. `SB-P-1.19`'s onboarding flow consumes this surface; it does not rebuild it.

### 8.33 Manager Workspace Permission Surface (`17-§13-1`–`17-§13-4`; `17-§14-1`–`17-§14-7`; `17-§16-1`; `17-§18-1`; `17-§18-2`; `17-§18-4`; `17-§21-4`; `17-§22-2`; `17-§22-3`; `17-§22-9`; `17-§22-10a`)

Owner/Manager/Employee each have defined dashboard access; Customer/Supplier/Delivery Staff have none by default. Role-based UI is a usability layer, never the security boundary — every protected read/write independently enforces authenticated user, business isolation, current role/permission, feature entitlement, and object/action scope, and a UI component change never widens backend access. No cross-business dashboard data; no default staff access to Owner intelligence; no employee visibility into Owner-wide financial intelligence by convenience (directly overlaps `21-§21`). `SB-P-1.17`'s Manager Operations depth sits inside this surface; it does not redefine it. Reference Cost and margin are not part of a Manager's bounded product view by default; each requires its own explicit Owner delegation (Stage 6 Founder Decision F-03; see Section 8.2).

### 8.34 Stock/Supplier Touch Points — Boundary Preservation (`7-§7`; `7-§9`; `7-§10-1`–`7-§10-4`; `7-§12`; `7-§15-10`; `7-§15-12`)

Within the MC-03/MC-04 limited Contract 7 opening: no competing/duplicate stock-linked pricing path (POS relationship, touched); no duplicate stock engine (Manager-vs-Ledger packaging, touched); Owner/Manager/Employee/Supplier roles for the stock domain overlap and reuse this mission's own `21-§4-*` role model; Contract 7's own named shared foundations (Catalog/Product identity, Permission Engine) are this mission's contracts; staff permission boundaries and cross-business isolation on `inventory_items`/`inventory_movements` are acceptance-tested here. The stock/supplier/reorder feature itself remains `SB-P-1.17`'s build.

### 8.35 Product & Price Master Reclassification (`BP-§10.1-11`, `BP-§10.1-12`, `BP-§10.1-13`; `BP-§7-1`–`BP-§7-5`)

Reclassify the existing Catalog implementation as `CORE SHARED FOUNDATION` (Build Plan §7), not a 26th feature. Preserve reusable product identity, pricing, tax, SKU/barcode identity, price history, audit/history, import foundations, and the product-inventory relationship; preserve relationships needed by future POS, Orders, Supplier/Reorder, UDI, Transactions and reporting features. Do not continue independent Catalog product expansion, delete valid data, destructively collapse master data into Transactions, or make Inventory the sole owner of commercial identity. Plan the safe contextual demotion of the standalone `/catalog` top-level route without removing structured management before equivalent contextual access is proven, and preserve existing deep-link continuity.

### 8.36 Continuous Integration and Security-Gate Obligations (`BP-§10.1-7`, `BP-§10.1-8`, `BP-§10.1-9`)

RLS/grants/function-security review; residual `anon` privilege remediation (see Section 13, T4); keep the Fast Gate green at every checkpoint, run Full Assurance where a path triggers it, extend the tests for this mission's own authority/isolation obligations, and surface — not decide — whether the Fast Gate becomes a required branch-protection check.

## 9. UI / UX Expectations

Assembled by reference to Build Plan §10.1's Founder-approved experience, unchanged and not expanded:

- The Owner is visibly the highest authority.
- Managers and Employees receive bounded, understandable capabilities without becoming Owner-equivalent.
- Protected financial intelligence remains protected.
- Unauthorized requests receive calm, useful denials without leaking the answer.
- A user from one business cannot see, search, export, or modify another business's protected data.
- When Conversation Workspace arrives in `SB-P-1.13`, the same isolation must extend to conversational access.
- Product and price information appears contextually without forcing a competing Catalog mental model — the reclassified Product & Price Master, not a second standalone surface.

No additional experience anchor is invented here; any new scenario proposal is a Founder decision (T3/T7), not a Blueprint drafting choice.

## 10. Business Rules

Negative and design-constraint obligations, assembled by reference (full list in Section 19; representative rules below):

- Permission enforcement is never UI-only; the database/API layer is the actual boundary (`21-§7`, `17-§14-1`).
- Create-permission never implies read-all/edit-all/export/analytics (`21-§11-2`).
- A generic or stale confirmation is never unlimited authority; execution-time revalidation is mandatory (`21-§17`, `22-§13-5`, Founder Scenario B).
- No continuous employee surveillance, in general (`21-§21-1`) or via location specifically (`22-§16-2`).
- No hidden staff scoring or accusation; routine denial is never treated as a security accusation (`21-§21-2`, `21-§23-7`).
- No routine broad admin visibility into merchant data, and no cross-business analytics leakage (`21-§21-3`, `21-§21-4`).
- Entitlement and subscription-state changes never destroy or dynamically mutate schema (`21-§16-2`, `22-§20-1`, `22-§28-8`).
- AI/tool capability is never authority, in any channel (`21-§23-5`, `22-§28-9`).
- No default staff access to Owner-wide financial intelligence, via the dashboard or otherwise (`17-§18-2`, `17-§21-4`).
- Reference Cost and margin are Owner-only by default and separately, explicitly delegable to an authorized Manager; delegating one never delegates the other, a generic product read or bounded Manager product view implies neither, no Employee visibility is inferred, and both the backend/data layer and the UI enforce this (Stage 6 Founder Decision F-03; `21-§5-4`, `17-§18-2`, `17-§21-4`).
- A person's role in one business grants nothing in another, and every action has one unambiguous active-business context (Stage 6 Founder Decision F-02; `21-§5-2`, `21-§6-1`, `21-§6-2`).
- Revocation during a multi-row import never silently duplicates rows, never continues automatically under the revoked authority and never mandates rollback of committed rows; any later completion requires current actor and business authority (Stage 6 Founder Decision F-04(c); `21-§17`, `22-§13-4`, `22-§15`).
- No duplicate Permission Engine, Business Memory, AI orchestrator, reminder scheduler, document pipeline, or identity silo per feature or channel (`22-§28-1`–`22-§28-6`).
- No new location-capture mode, retention period, consent/monitoring policy, or exclusive future-feature ownership is created by the Location Foundation boundary decisions (`FPDR-3`).
- No independent Catalog product expansion, destructive collapse into Transactions, or Inventory-as-sole-commercial-owner (`BP-§7-4`).

## 11. Out of Scope

Every row below remains `BUILD NOW` at its own owning mission — never reclassified `BUILD LATER` — and is committed, not deferred. Grouped by receiving mission with individually enumerated FCTM row IDs (Source 18 §3.2 item 2); zero silent omissions.

### Assigned to `SB-P-1.13` — Native Conversation & AI Intelligence Foundation

Contract 22: `22-§7` (Conversation/Intent-Action Foundation), `22-§8` (Human Language Foundation), `22-§24` (AI Authority Foundation), `22-§29-1` (shared with `SB-P-1.20`), `22-§29-2`, `22-§29-13`.
Contract 17: `17-§5` (Conversation Workspace Placement), `17-§22-4`, `17-§22-8`.
Contract 20: `20-§14` (Human Language, primary build), `20-§15` (Workspace build slice, shared `SB-P-1.20` for the WhatsApp adapter slice), `20-§13` (shared with `SB-P-1.19`), `20-§23-5` (shared with `SB-P-1.19`).
Contract 7: `7-§11` (AI Behaviour, kernel slice; primary build is `SB-P-1.17`'s).

### Assigned to `SB-P-1.14` — Business Memory, Documents & Durable Media

Contract 22: `22-§4` (Business Memory Foundation), `22-§9` (Universal Document Intelligence Foundation), `22-§10` (Document/Receipt Memory Foundation), `22-§29-5`.
Contract 17: `17-§12` (Documents and Receipt Cabinet).
Contract 7: `7-§6` (shared with `SB-P-1.17`), `7-§15-2` (shared with `SB-P-1.17`).

### Assigned to `SB-P-1.15` — Reminder, Daily Intelligence & Ask CFO (includes Notification Foundation, `FPDR-1`)

Contract 22: `22-§11` (Reminder/Delegated Automation Foundation), `22-§12-1`–`22-§12-9` (Notification Foundation, all 9 obligations, `FPDR-1`), `22-§18` (Scheduler/Background Job Foundation), `22-§29-4`.
Contract 17: `17-§11` (Ask CFO and Daily Intelligence), `17-§22-7`.
Contract 20: `20-§23-10` (shared with `SB-P-1.19`).

### Assigned to `SB-P-1.17` — Manager Operations

Contract 17: `17-§4`, `17-§6`, `17-§7`, `17-§8`, `17-§15`, `17-§16-2`, `17-§17`, `17-§18-3`, `17-§18-5`, `17-§19`, `17-§21-1`, `17-§21-2`, `17-§21-3`, `17-§21-5`, `17-§22-1`, `17-§22-5`, `17-§22-6`, `17-§22-10b`.
Contract 7: `7-§2`, `7-§3`, `7-§4`, `7-§5`, `7-§6` (shared `SB-P-1.14`), `7-§8-1`–`7-§8-5`, `7-§11` (primary; kernel slice shared `SB-P-1.13`), `7-§13`, `7-§14`, `7-§15-1`, `7-§15-2` (shared `SB-P-1.14`), `7-§15-3`, `7-§15-4`, `7-§15-5`, `7-§15-6`, `7-§15-7`, `7-§15-8`, `7-§15-9`, `7-§15-11`, `7-§16`.

### Assigned to `SB-P-1.18` — Controlled Business Add-ons (includes Location Foundation, `FPDR-2`/`FPDR-3`)

Contract 22: `22-§16-1` (shared Location primitive, `FPDR-2`), `22-§16-3`–`22-§16-7` (per-feature disclosures, named instance attendance/delivery only, `FPDR-3` — **not** an exclusive grant over every future location-consuming feature; see Section 13), `22-§29-9`.
Contract 17: `17-§9` (Staff/HR Views), `17-§10` (Order & Delivery Views).

### Assigned to `SB-P-1.19` — Activation, Lifecycle & Platform Stewardship

Contract 20: `20-§3`, `20-§5`, `20-§6`, `20-§7`, `20-§8`, `20-§9`, `20-§10`, `20-§11`, `20-§12`, `20-§13` (shared `SB-P-1.13`), `20-§17`, `20-§18`, `20-§19`, `20-§20`, `20-§22-1`–`20-§22-7`, `20-§23-1`, `20-§23-2`, `20-§23-3`, `20-§23-4`, `20-§23-5` (shared `SB-P-1.13`), `20-§23-6`, `20-§23-7`, `20-§23-8`, `20-§23-9`, `20-§23-10` (shared `SB-P-1.15`), `20-§23-12`.

### Assigned to `SB-P-1.20` — WhatsApp Channel Integration

Contract 22: `22-§29-1` (shared `SB-P-1.13`).
Contract 20: `20-§15` (WhatsApp adapter slice; Workspace slice shared `SB-P-1.13`).

### Delegated (names a specific delegate contract, not a later-mission FCTM row)

`22-§25` (AI Orchestration/OpenAI Intelligence Foundation — names Contract 24 explicitly, consumed by `SB-P-1.13`); `22-§26` (Dedicated Channel Adapter Contracts — names Contract 23 explicitly, consumed by `SB-P-1.20`).

### Not Applicable (narrative, historical, provenance, cross-reference or synthesis sections — not obligations)

`21-§1`, `21-§2`, `21-§3` (narrative); `21-§25`, `21-§26`, `21-§27` (historical/provenance/gate); `22-§1`, `22-§2`, `22-§3` (narrative); `22-§30`, `22-§31`, `22-§32` (historical/provenance/gate); `20-§1`, `20-§2`, `20-§4` (narrative); `20-§21` (shared-foundations cross-reference); `20-§24`, `20-§25` (historical/provenance); `20-§26` (unresolved Founder trial-policy question, non-critical-path for this mission, carried in the canonical Delta document, not disposed as a row here); `20-§27` (gate); `17-§1`, `17-§2`, `17-§3` (narrative); `17-§20` (shared-foundations cross-reference); `17-§23`, `17-§24` (historical/provenance); `17-§25` (gate); `7-§1` (narrative); `7-§17` (dependencies cross-reference); `7-§18` (gate).

## 12. Dependencies

### Upstream Dependencies

- Lighthouse Constitution (Source 00).
- Source 01 — Smart Business Master System Manifesto and Source 11 — Smart Business Product Truth Map, the joint Phase 1 Constitution.
- Source 18 v1.2 — SB-P Mission Lifecycle and Delivery Framework.
- Existing Supabase session authentication and the existing `owner_id`-scoped RLS pattern (SB-P-1.10/SB-P-1.11) — reused as the current baseline to extend, not an accepted authority-model dependency; the authority/permission gap they leave is exactly what this mission closes.
- Existing Catalog schema and data (SB-P-1.11) — the Product & Price Master reclassification's starting point, preserved not rebuilt.

### Downstream Dependencies (missions consuming this mission's Permission Engine and boundary decisions)

- All downstream missions consume this mission's active-business context (Stage 6 Founder Decision F-02) and field-level Reference Cost and margin delegation (Stage 6 Founder Decision F-03) as part of the one Permission Engine (`21-§22`) rather than building their own. Where a downstream mission implements a permission-governed multi-row import, it must reuse this mission's mandatory execution-time authorization/revalidation boundary and preserve the Founder F-04(c) outcome if permission is revoked during that import; owning missions retain their feature-specific end-to-end proof (DC-3). No receiving-mission assignment or FCTM disposition changes.
- `SB-P-1.13` — Native Conversation & AI Intelligence Foundation: consumes the Conversation/AI Permission Boundary (`21-§8`) and Ask CFO boundary (`21-§9`); owns and provides the Human Language Foundation (`22-§8`, `20-§14`) as the foundation owner/provider. It is not the owner of notification-specific integration: under `FPDR-1`/`22-§12-2`, `SB-P-1.15` (the Shared Notification Foundation owner, below) is the notification-specific consumer/integrator responsible for its own future design and verification of appropriate reuse of `SB-P-1.13`'s Human Language Foundation. That integration is neither implemented nor verified by this Blueprint.
- `SB-P-1.14` — Business Memory, Documents & Durable Media.
- `SB-P-1.15` — Reminder, Daily Intelligence & Ask CFO: owns the Shared Notification Foundation workstream (`FPDR-1`) and, as the notification-specific consumer of `SB-P-1.13`'s Human Language Foundation, is responsible for its own future design and verification of appropriate reuse (`22-§12-2`); not shown here as done.
- `SB-P-1.17` — Manager Operations: consumes the Users-and-Permissions/Permission-Enforcement surface (`17-§13`/`17-§14`) and the stock/supplier/reorder feature's touched-scope boundary.
- `SB-P-1.18` — Controlled Business Add-ons: owns the Shared Location Foundation primitive and named attendance/delivery disclosures (`FPDR-2`/`FPDR-3`), Staff/HR, and Order & Delivery.
- `SB-P-1.19` — Activation, Lifecycle & Platform Stewardship: consumes the Permission/Role Setup surface (`20-§16`).
- `SB-P-1.20` — WhatsApp Channel Integration: must reuse the Notification Foundation (`SB-P-1.15`) and this mission's Permission Engine, not duplicate either.
- Any future location-consuming feature's owning mission (not yet named): inherits the standing, recurring obligation to independently define and demonstrate its own five location disclosures under Contract 22 §16, per `FPDR-3` — this is not resolved by `SB-P-1.18`'s attendance/delivery instance.

## 13. Risks & Mitigations

| Risk | Business impact | Product mitigation |
|---|---|---|
| Residual `anon` privilege grant (T4, `PRODUCT-AFFECTING`) — original migration grants `ALL` on `businesses`, `inventory_items`, `inventory_movement_idempotency_keys`, `inventory_movements`, `transaction_correction_events`, `transactions` plus all functions plus a forward-compatible default-privilege clause; a later file-level hardening migration remediates the three Inventory tables only, explicitly excluding `businesses`/`transactions`/`transaction_correction_events` | If ever live and exploitable (e.g. via a future permissive RLS policy or a `SECURITY DEFINER` function bypassing RLS), unauthenticated access to core business/financial data | WS-B remediation is `BUILD NOW` (`BP-§10.1-8`). File evidence shows RLS enabled on all six originally-granted tables with no `anon`/`PUBLIC`-scoped policy — an apparently default-denied path, **conditional on actual live grants, effective RLS/policies and function privileges**, not proven safe. Actual production grant/RLS/function/default-privilege and hardening-migration-execution state remains `UNVERIFIED`; no live-safety assertion is made here. This mission's own RLS/policy authoring (DC-2) must not introduce a permissive `anon`/`PUBLIC` policy or bypass. Founder confirmed (`FPDR-4`) no additional product requirement beyond this already-approved objective; the finding, WS-B, and the still-outstanding independent Stage 7 security review are all preserved unchanged. |
| DC-1 — `businesses.owner_id UNIQUE` structurally allows only one Owner-equivalent account per business | Manager/Employee membership cannot be added without a real schema change | This mission's own engineering-implementation design (post-Blueprint) introduces a membership model (e.g. a `business_members` table); no specific design is asserted as approved Product Truth by this Blueprint. |
| DC-2 — this mission's own RLS policy authoring could reactivate the currently-apparent-inert `anon` exposure if it introduces a permissive or unscoped policy | Would convert a dormant privilege surface into a live one | Explicit design constraint carried into WS-A/WS-B engineering work; any `anon`/`PUBLIC`-scoped policy or RLS-bypassing `SECURITY DEFINER` function is treated as a regression, not an acceptable tradeoff. |
| DC-3 — this mission alone cannot fully verify end-to-end acceptance for FCTM rows whose surrounding feature belongs to a later mission (e.g. `20-§16-3`'s onboarding context, `17-§13-4`'s dashboard context) | Verification evidence for those specific rows will be scoped to the permission-mechanics slice only | Verification Checklist and Experience Verification Matrix (later stages) must explicitly scope these rows to the mechanics this mission actually builds, not claim full-feature verification it cannot perform. |
| Cross-mission Notification/Location Foundation dependency — `SB-P-1.15`/`SB-P-1.18` must actually build reusable foundations, or later missions risk duplicating them | Architectural drift, duplicated notification/location logic, `22-§28` non-goal violations | `FPDR-1`/`FPDR-2`/`FPDR-3` fix ownership now, before either foundation is built, specifically to prevent duplicate construction; `SB-P-1.20` is explicitly required to reuse rather than duplicate. |
| Location disclosure ownership misread as `SB-P-1.18`'s exclusive province over all future features | A later mission could wrongly assume it does not need to define its own five disclosures | `FPDR-3` and this Blueprint (Section 11) explicitly state the named-instance-only scope; every future location-consuming feature's own mission independently owns its own disclosures. |
| Stage 7 independent Security & Permissions Architecture reviewer remains unappointed | Engineering Review readiness for this material-risk, security-sensitive mission is incomplete until named | Named as an open MC-02 §4.2 separation condition in every stage record to date; must be appointed and independence-checked before Stage 7 proceeds; Claude Code cannot self-appoint. |
| Dual Institutional Learning intake still in force (`Historical OLE backfill: NOT VERIFIED COMPLETE`) | A historical lesson could be missed if only the newer intake is consulted | Both the Phase 1 institutional-memory guide and validated OLE promotions are consulted (Section 19); the dual-intake status is carried forward unchanged, not silently resolved. |
| CI required-check gap — only the Markdown Quality Gate is a required branch-protection check on `main`; Application Build Assurance is not | A regression in build/test/lint could merge without blocking | This mission keeps the Fast Gate green at every checkpoint and extends tests for its own obligations, and surfaces (does not unilaterally decide) whether Fast Gate should become required. |

## 14. Success Criteria

- Every FCTM `IN SCOPE` row (228 total) is represented by a described mission scope and acceptance obligation (Section 8, Section 19).
- Owner/Manager/Employee/Supplier/Customer/Delivery Staff each have a real, testable authority concept distinct from `owner_id` alone.
- Cross-business access is denied server-side for every table this mission's obligations touch — not merely hidden in the UI.
- A permission revoked between preview and commit blocks the commit (Founder Scenario B is demonstrably true, not merely described).
- A Manager sees only delegated capability; Owner-only financial surfaces stay denied at UI and backend/RLS (Founder Scenario A is demonstrably true).
- The residual `anon` grant is remediated per WS-B's approved objective, with the file-level evidence and production-`UNVERIFIED` status preserved honestly rather than asserted resolved.
- The Product & Price Master is reclassified with zero data loss and zero broken deep links.
- Every `ASSIGNED TO LATER MISSION` and `DELEGATED` row remains `BUILD NOW` at its receiving mission, traceable by row ID (Section 11, Section 19) — none silently narrowed to `BUILD LATER`.
- The Notification Foundation (`SB-P-1.15`) and Location Foundation (`SB-P-1.18`) boundary decisions (`FPDR-1`–`FPDR-3`) are available for those missions to build against, without this mission having built either.
- No new merchant-facing feature, location-capture mode, retention period, consent policy, commercial classification, or pricing is introduced beyond what Contracts 21/22/20/17/7 and Founder Decisions `FPDR-1`–`FPDR-4` already approve.

## 15. Acceptance Criteria

### Scope of proof owed by this mission (DC-3)

All 228 `IN SCOPE` rows remain this mission's obligations; none is weakened, moved or excused by the qualifications below. This mission must demonstrate, with real evidence, the permission mechanics, isolation and negative (denial) paths it builds for every protected path that already exists in this mission's scope — including the Product & Price Master and inventory context of Founder Scenarios A and B. Where an acceptance line below concerns a feature whose operational build belongs to a later mission (Employee attendance, leave and assigned-task features; Supplier, Customer and Delivery Staff participation surfaces; standing automation, scheduler and channel runtime), this mission proves the permission boundary and denial behaviour that gates that feature, using scoped runtime where it exists and clearly labelled simulation or test fixtures where the dependent feature does not yet exist; it does not claim, and is not accepted as, delivery of the later mission's complete end-to-end feature. Each later mission's owning Verification Checklist carries the feature-specific end-to-end proof (`SB-P-1.18` for attendance/delivery; `SB-P-1.15` for scheduler/reminder automation; `SB-P-1.17` for Manager Operations depth; `SB-P-1.13`/`SB-P-1.20` for conversation and channel runtime; `SB-P-1.19` for onboarding). Missing authority or isolation proof for a protected path that is already in this mission is never excused by this qualification.

### Founder Runtime Verification Scenarios (Build Plan §10.1, preserved verbatim — not new scenarios)

- [ ] **Scenario A — Bounded delegation.** Owner grants a Manager a bounded contextual product-price-inventory view capability using the shared Product & Price Master. Manager sees only delegated operational areas. Owner financial surfaces remain denied. Evidence must include UI result plus data-layer/RLS denial evidence.
- [ ] **Scenario B — Revocation invalidates stale action.** Manager begins a consequential preview such as a Product & Price Master bulk-import preview. Owner revokes the relevant permission before commit. Commit must fail because authority is rechecked at execution time; no protected write may occur.

### Stage 6 Founder Decisions — supplemental acceptance (not new Founder Runtime Scenarios)

These lines record the Founder-confirmed outcomes of Stage 6 F-02, F-03 and F-04(c) ([Founder Record 04](../../../communication/missions/SB-P-1.12/founder/04-stage6-builder-founder-decision-record.md)). They are supplemental acceptance obligations within this mission's existing `IN SCOPE` rows, separate from Founder Runtime Verification Scenarios A and B (unchanged above), and follow the DC-3 scope of proof: this mission proves the permission mechanics for protected paths in its scope and does not claim end-to-end proof for later missions' features. No implementation is claimed to exist today.

- [ ] **F-02 — Multiple memberships, isolated.** A person who holds memberships in two businesses has a separately scoped role and permission set in each (for example Owner of one and Manager of the other). Every action resolves to one unambiguous active business, and a role or permission held in one business never authorizes anything in the other; the cross-business denial path is proven.
- [ ] **F-03 — Reference Cost and margin individually delegable.** A Manager granted a bounded product view does not see Reference Cost or margin by default. The Owner can delegate each separately, and delegating one leaves the other denied. A generic product read grants neither, and no Employee visibility is inferred. Evidence includes UI results plus backend/data-layer denial evidence for each default-denied and each partially delegated case.
- [ ] **F-04(c) — Revocation during a multi-row import.** When permission is revoked during a multi-row import, the rows already committed are preserved and the unauthorized remainder is not written. The merchant is told how many rows were completed and how many remain, and is guided to complete the remainder without duplicating committed rows. No row is silently duplicated, nothing continues automatically under the revoked authority, and no rollback is required. Any later completion re-checks the current actor's and business's authority. This is separate from, and does not alter, Scenario B's pre-commit denial.

### Authority Model and Permission Matrix

- [ ] Owner, Manager, Employee, Supplier, Customer and Delivery Staff each have a distinct, schema-backed authority concept.
- [ ] Every access decision checks all ten Contract 21 §5 permission dimensions, not session authentication alone.
- [ ] Cross-business reads, writes, conversation context, file/document access, exports and integration mappings are denied server-side for every table this mission's obligations touch.
- [ ] A client-supplied `business_id` is never trusted without independent server-side derivation.
- [ ] Role-based UI is demonstrably a usability layer, not the enforcement boundary — every corresponding backend/database check independently enforces the same decision.

### Delegation, Revalidation and Confirmation

- [ ] The delegated-automation authority check this mission owns (`21-§12-1`–`21-§12-5`) is demonstrated: for any standing rule that can be exercised in scope, the check re-verifies the enabling rule, scope, target/action/limits, current entitlement, and absence of revocation each time it is invoked. Where the scheduler/reminder runtime does not yet exist (`SB-P-1.15`), this is proven against a test harness that invokes the check, and the runtime's own on-every-run proof is owed by `SB-P-1.15`/`SB-P-1.17`.
- [ ] Every consequential confirmation binds the exact actor, business, action, target/object and reviewed state/value.
- [ ] Permission and state are revalidated at execution time, not only preview time.
- [ ] A generic or stale "Yes" never grants unlimited authority.

### Employee Self-Service and External Participants

- [ ] The Employee self-service permission boundary (`21-§10-1`–`21-§10-6`) is demonstrated: an Employee's own-record access (own attendance, correction requests, leave/request status, assigned tasks and other job-specific information) is permitted where the underlying record exists, unrelated staff and Owner intelligence stay denied, and the negative paths are proven. The attendance, leave and task features themselves are later missions' builds (attendance/delivery: `SB-P-1.18`); their end-to-end feature proof is owed by those missions, and this mission does not claim it. Where those records do not yet exist, the boundary is proven against labelled test fixtures.
- [ ] The Supplier, Customer and Delivery Staff permission boundary (`21-§13-1`–`21-§13-3`) is demonstrated: each external role's bounded scope is enforced and never resolves to general dashboard access. External-participant surfaces or portals are not built by this mission; their end-to-end proof belongs to the missions that build them, and this mission does not claim it.

### Privacy, Dignity and Denial Behavior

- [ ] No continuous employee surveillance exists anywhere in the Permission Engine, generally or via location specifically.
- [ ] No hidden staff scoring, accusation, or routine broad admin visibility into merchant data exists.
- [ ] No cross-business analytics leakage exists.
- [ ] Denials leak no protected data, avoid accusation, state next steps where useful, and preserve normal operation elsewhere.
- [ ] Escalation occurs only when actual security/abuse criteria are met, never on routine denial.

### Auditability

- [ ] Grant/revoke events, grantor/actor, role/capability, scope, timestamp and resulting action/denial (where security-sensitive) are all recorded.
- [ ] Temporary elevated/support access is scoped, consented, audited and revoked when resolved.

### Security Gate (T4) and Schema Stability

- [ ] WS-B's approved remediation objective for the residual `anon` grant is pursued exactly as approved, with no assumption of live-safety and no unauthorized production/migration action taken as part of this mission's own Blueprint preparation.
- [ ] No entitlement or subscription-state change causes dynamic schema create/drop; schema changes only through governed migrations.

### Product & Price Master Reclassification

- [ ] All existing Catalog product identity, pricing, tax, SKU/barcode, price history, audit history and import foundations are preserved unchanged.
- [ ] The product-inventory relationship and existing deep links continue to resolve correctly.
- [ ] `/catalog`'s contextual demotion plan does not remove structured management before equivalent contextual access is proven.

### Cross-Mission Boundary Fixes

- [ ] The Notification Foundation (`22-§12-1`–`22-§12-9`) is recorded as `SB-P-1.15`'s own workstream, reusable cross-channel, with `SB-P-1.20` required to reuse rather than duplicate it — and this mission has not built any part of it.
- [ ] The Location Foundation primitive (`22-§16-1`) is recorded as `SB-P-1.18`'s own workstream; the per-feature disclosure obligation (`22-§16-3`–`22-§16-7`) is recorded as binding whichever mission owns each consuming feature, with `SB-P-1.18` named only for attendance/delivery — and this mission has not built any part of either.
- [ ] `22-§16-2`'s surveillance-rejection design constraint and `22-§29-9`'s attendance/delivery assignment remain exactly as canonically disposed, unmodified by this Blueprint.

## 16. Future Evolution

- **Notification delivery** (`SB-P-1.15`, then reused by `SB-P-1.20`): the Foundation this Blueprint fixes ownership of, not built here.
- **Location tracking and consumption** (`SB-P-1.18`, then any later location-consuming feature): the primitive and the recurring per-feature disclosure obligation this Blueprint fixes ownership of, not built here.
- **Business membership model**: DC-1's structural implication (moving beyond `owner_id UNIQUE`) is this mission's own future engineering-implementation design, not fixed by this Blueprint.
- **Conversation Workspace and native AI intake** (`SB-P-1.13`): must extend this mission's isolation and permission-boundary guarantees to conversational access, per Section 9's Founder-approved experience anchor.
- **Manager Operations depth, Onboarding flow, WhatsApp adapter**: each consumes this mission's Permission Engine and role model without needing to rebuild it.
- **Stage 7 independent Security & Permissions Architecture review**: still to be appointed; will examine this mission's actual engineering-implementation feasibility/risk findings, not this Blueprint's product scope.
- **Fast Gate as a required branch-protection check**: surfaced, not decided, by this mission; a future Mission Control/Founder decision.

## 17. Product Philosophy Summary

Authority is not a feature a merchant sees — it is the quiet, structural guarantee that lets them delegate work, trust their staff, and never worry that a routine support ticket, a busy Employee, an AI assistant, or another business's staff could reach what is theirs. This mission exists to make that guarantee real at the database layer, not merely promised in the interface, while keeping the experience itself simple enough that no one needs to understand the word "permission model" to benefit from it.

## 18. Blueprint Change Log

| Version | Date | Author | Change | Status |
|---|---|---|---|---|
| 0.1 | 2026-09-23 | Claude Code (MC-02) | Initial Stage 4 draft: Metadata, Mission Snapshot, Sections 1–19, assembled by reference to the canonical 373-row FCTM, Founder Decisions `FPDR-1`–`FPDR-4`, mature Contracts 21/22/20/17/7, and Build Plan §§5–7, 10.1. | DRAFT — awaiting Mission Control Stage 5 Product Review |
| 0.2 | 2026-09-24 | Claude Code (MC-02) | Narrow corrections MC-20A–E on PR #630: Section 19 assigned-mission labels corrected against the FCTM `Assigned mission` column (`20-§14` = `SB-P-1.13` primary build) and Section 19 tables extended with explicit assigned-mission and source-reference fields; Section 12 distinguishes Human Language Foundation owner (`SB-P-1.13`) from notification-specific integrator (`SB-P-1.15`); Mission Snapshot and §4 authorization-evidence wording made precise; Section 15 qualified for mission-owned permission mechanics versus later missions' end-to-end features; Institutional Learning Intake reconciliation refreshed. No FCTM row, disposition, Founder Decision or Founder scenario changed. | DRAFT — awaiting Mission Control re-review
| 0.3 | 2026-09-25 | Claude Code (documentary preparation, MC-25) | Narrow reconciliation of Founder-confirmed Stage 6 decisions F-02, F-03 and F-04(c) (Founder Record 04): removed the unsupported "within exactly one business" statement from Section 3; added Section 3 objective clauses and Section 8.1–8.3, 8.13, 8.24, 8.33, Section 10, Section 12 and Section 15 passages; appended Founder Record 04 references to the affected Section 19 source-reference cells; added Governance History rows. Founder Scenarios A and B, all 373 FCTM rows, dispositions, assigned missions and original source pointers, and `FPDR-1`–`FPDR-4` unchanged. | DRAFT — awaiting Mission Control review; not effective until human merge |
| 0.4 | 2026-09-26 | Claude Code (Stage 7 Engineering Review, MC-35) | Added Section 20 (Engineering Review, early delivery plan and 228-row feasibility and risk register) and Section 21 (Engineering Questions, Risks & Recommendations); updated five Metadata status rows. Sections 1–17 and 19 unchanged; all 373 FCTM dispositions, Founder Decisions and Scenarios A and B unchanged. | DRAFT — awaiting Mission Control Stage 7 review and independent security review |

## 19. Governance History

### FCTM Row-ID to Blueprint Section and Source Traceability

Complete accounting of all 373 canonical FCTM rows (`claude-code/03-stage2-populated-fctm.md`). Every table row carries four checkable fields keyed by FCTM row ID: the **disposition**, the **assigned mission exactly as written in the FCTM `Assigned mission` column** (backticks removed), a **source reference** to the numbered section of the governing contract or Build Plan, and the **Blueprint location**. Contiguous row IDs are grouped into one line only when disposition, assigned mission and source section are identical across the range; every row ID inside a range is covered, in FCTM order, with zero silent omissions. Source references cite numbered sections and do not reproduce source prose; the FCTM `Source pointer` and `Citation / evidence` columns hold the row-level wording.

**Source baseline (unchanged from the Stage 1 intake baseline; re-verified against `origin/main` at `d86e8663eabccff62f3f7e3fadd5342a2ca56aac`):** C21 = Contract 21, `21_Permissions_Business_Isolation_and_Role_Authority.md`, blob `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d`; C22 = Contract 22, `22_Shared_Product_Foundations.md`, blob `ca4a0fdaec1ac619663f768ccb2ff10f33c590ff`; C20 = Contract 20, `20_Onboarding_and_First_Experience.md`, blob `56ed4d11d2719abb83e6f9e862a51ffc5ebdf005`; C17 = Contract 17, `17_Operational_Dashboard_and_Manager_Workspace.md`, blob `7943f74a88c2922acc697115f336b68baf7a503a`; C7 = Contract 7, `07_Stock_Supplier_and_Reorder_Intelligence.md`, blob `65ad91b202def9cb4f42b97383bcc58475f59015` (limited MC-03/MC-04 opening); BP = Founder-approved Build Plan, blob `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a`. `NOT APPLICABLE` rows are not obligations; each states its specific reason and is also listed in §11 (Not Applicable), so none vanishes from accounting.

**Founder Record 04 references (version 0.3).** Where a row's source reference below ends with "Founder Record 04 (F-0x)", the row's obligation is also implicated by the Founder-confirmed Stage 6 decision named (F-02, F-03 or F-04(c)) in [`founder/04-stage6-builder-founder-decision-record.md`](../../../communication/missions/SB-P-1.12/founder/04-stage6-builder-founder-decision-record.md). The suffix is added to, and never replaces, the original source pointer; no disposition, assigned mission or Blueprint location cell was changed.

#### Contract 21 — Permissions, Business Isolation and Role Authority (107 rows, wholly `SB-P-1.12`)

| FCTM Row ID(s) | Disposition | Assigned mission (FCTM) | Source reference | Blueprint location |
|---|---|---|---|---|
| `21-§1`–`21-§3` | NOT APPLICABLE | SB-P-1.12 | C21 §§1–3 (Feature Identity; Founder Problem Statement; Lighthouse Principles) | Narrative/interpretive (`L-NARR`), not a testable obligation; informs §§1, 4, 5; listed in §11 |
| `21-§4-1`–`21-§4-6` | IN SCOPE | SB-P-1.12 | C21 §4 Core Authority Model (Owner, Manager, Employee, Supplier, Customer, Delivery Staff); BP §10.1 (role model); Founder Record 04 (F-02, F-03) | §8.1 |
| `21-§5-1`–`21-§5-10` | IN SCOPE | SB-P-1.12 | C21 §5 Permission Dimensions (ten dimensions); BP §10.1 (permission matrix); Founder Record 04 (F-02, F-03) | §8.2 |
| `21-§6-1`–`21-§6-7` | IN SCOPE | SB-P-1.12 | C21 §6 Business Isolation (six isolation surfaces; client `business_id` never trusted alone); BP §10.1 (isolation); Founder Record 04 (F-02) | §8.3 |
| `21-§7` | IN SCOPE | SB-P-1.12 | C21 §7 Server-side Authorization | §8.4 |
| `21-§8`, `21-§9` | IN SCOPE | SB-P-1.12 | C21 §8 Conversation/AI Permission Boundary; C21 §9 Ask CFO / Owner Intelligence boundary | §8.5 |
| `21-§10-1`–`21-§10-6` | IN SCOPE | SB-P-1.12 | C21 §10 Employee Self-service | §8.6, §15 |
| `21-§11-1`, `21-§11-2` | IN SCOPE | SB-P-1.12 | C21 §11 Scoped creation | §8.7 |
| `21-§12-1`–`21-§12-5` | IN SCOPE | SB-P-1.12 | C21 §12 Delegated Automation authority checks; BP §10.1 (delegated authority) | §8.8, §15 |
| `21-§13-1`–`21-§13-3` | IN SCOPE | SB-P-1.12 | C21 §13 Participation (Supplier, Customer, Delivery Staff) | §8.9, §15 |
| `21-§14-1`–`21-§14-7` | IN SCOPE | SB-P-1.12 | C21 §14 Support Access | §8.10 |
| `21-§15-1`–`21-§15-5` | IN SCOPE | SB-P-1.12 | C21 §15 Authentication vs Authorization | §8.11 |
| `21-§16-1`, `21-§16-2` | IN SCOPE | SB-P-1.12 | C21 §16 Entitlements; BP §10.1 (entitlement primitives) | §8.12, §10 |
| `21-§17` | IN SCOPE | SB-P-1.12 | C21 §17 Permission Changes and Runtime Revalidation; BP §10.1 Founder Scenario B; Founder Record 04 (F-04(c)) | §8.13, §15 Scenario B |
| `21-§18-1`–`21-§18-6` | IN SCOPE | SB-P-1.12 | C21 §18 Confirmation Binding; Founder Record 04 (F-04(c)) | §8.14 |
| `21-§19-1`–`21-§19-8` | IN SCOPE | SB-P-1.12 | C21 §19 Auditability | §8.15 |
| `21-§20-1`–`21-§20-5` | IN SCOPE | SB-P-1.12 | C21 §20 Denial Behavior | §8.16 |
| `21-§21-1`–`21-§21-5` | IN SCOPE | SB-P-1.12 | C21 §21 Privacy/Dignity | §8.17, §10 |
| `21-§22` | IN SCOPE | SB-P-1.12 | C21 §22 Shared Foundation Reuse | §8.18 |
| `21-§23-1`–`21-§23-7` | IN SCOPE | SB-P-1.12 | C21 §23 Non-goals (seven) | §8.18, §10 |
| `21-§24-1`–`21-§24-12` | IN SCOPE | SB-P-1.12 | C21 §24 Acceptance scenarios 1–12 (Scenarios 3 and 8 = Founder A and B); Founder Record 04 (F-03, F-04(c)) | §8.19, §15 |
| `21-§25`–`21-§27` | NOT APPLICABLE | SB-P-1.12 | C21 §25 Historical Corrections; §26 Provenance and Hydration Coverage; §27 Completion Gate | Provenance/synthesis (`L-HIST`/`L-PROV`/`L-GATE`), not obligations; listed in §11 |

#### Contract 22 — Shared Product Foundations (112 rows, split across `SB-P-1.12`/`1.13`/`1.14`/`1.15`/`1.18`/`1.20`)

| FCTM Row ID(s) | Disposition | Assigned mission (FCTM) | Source reference | Blueprint location |
|---|---|---|---|---|
| `22-§1`–`22-§3` | NOT APPLICABLE | SB-P-1.12 | C22 §§1–3 (Feature Identity; Founder Problem Statement; Lighthouse Principles) | Narrative/interpretive (`L-NARR`); informs §§1, 4, 5; listed in §11 |
| `22-§4` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C22 §4 Business Memory Foundation; BP §9 row 3, §10.3 | §11 |
| `22-§5-1`–`22-§5-9` | IN SCOPE | SB-P-1.12 | C22 §5 Identity Foundation; BP §10.1 (shared identity primitives); Founder Record 04 (F-02) | §8.20 |
| `22-§6-1`–`22-§6-10` | IN SCOPE | SB-P-1.12 | C22 §6 Permission/Isolation Foundation (nine surfaces + extension rule) | §8.21, §10 |
| `22-§7`, `22-§8` | ASSIGNED TO LATER MISSION | SB-P-1.13 | C22 §7 Conversation/Intent-Action Foundation; C22 §8 Human Language Foundation; BP §10.2 | §11 |
| `22-§9`, `22-§10` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C22 §9 Universal Document Intelligence; C22 §10 Document/Receipt Memory; BP §10.3 | §11 |
| `22-§11` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C22 §11 Reminder/Delegated Automation Foundation; BP §9 row 4, §10.4 | §11 |
| `22-§12-1`–`22-§12-9` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C22 §12 Notification Foundation (nine items); Founder Decision `FPDR-1` (BP has no naming source) | §2, §7, §11, §13 |
| `22-§13-1`–`22-§13-5` | IN SCOPE | SB-P-1.12 | C22 §13 Confirmation/Clarification Foundation; Founder Record 04 (F-04(c)) | §8.22, §10 |
| `22-§14-1`–`22-§14-9` | IN SCOPE | SB-P-1.12 | C22 §14 Audit/Human Context | §8.23 |
| `22-§15` | IN SCOPE | SB-P-1.12 | C22 §15 Idempotency / Duplicate Protection; Founder Record 04 (F-04(c)) | §8.24 |
| `22-§16-1` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C22 §16 Location Foundation (shared purpose-limited primitive); Founder Decision `FPDR-2` | §2, §7, §11, §13 |
| `22-§16-2` | IN SCOPE | SB-P-1.12 | C22 §16 (surveillance rejection), tied to C21 §21 (`21-§21-1`); unchanged, not reopened | §8.17, §10, §15 |
| `22-§16-3`–`22-§16-7` | ASSIGNED TO LATER MISSION | SB-P-1.18 (named instance: attendance/delivery only) | C22 §16 per-feature disclosures (why, who sees, capture, retention, access end); Founder Decision `FPDR-3` — every future location-consuming feature's own mission independently defines and verifies all five | §2, §7, §11, §13 |
| `22-§17` | IN SCOPE | SB-P-1.12 | C22 §17 Integration/Extension Foundation (design constraint) | §8.25 |
| `22-§18` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C22 §18 Scheduler / Background Job Foundation; BP §10.4 | §11 |
| `22-§19` | IN SCOPE | SB-P-1.12 | C22 §19 Error and Narrow-failure Foundation | §8.25 |
| `22-§20-1`–`22-§20-4` | IN SCOPE | SB-P-1.12 | C22 §20 Schema Stability; BP §7 | §8.26 |
| `22-§21`, `22-§22` | IN SCOPE | SB-P-1.12 | C22 §21 Performance Foundation; C22 §22 Platform Quality / Testability | §8.27 |
| `22-§23-1`–`22-§23-7` | IN SCOPE | SB-P-1.12 | C22 §23 Privacy/Data Ownership | §8.28 |
| `22-§24` | ASSIGNED TO LATER MISSION | SB-P-1.13 | C22 §24 AI Authority Foundation; BP §10.2 | §11 |
| `22-§25` | DELEGATED | SB-P-1.13 | C22 §25 AI Orchestration / OpenAI Intelligence Foundation (names Contract 24) | §11 |
| `22-§26` | DELEGATED | SB-P-1.20 | C22 §26 Dedicated Channel Adapter Contracts (names Contract 23) | §11 |
| `22-§27-1`–`22-§27-7` | IN SCOPE | SB-P-1.12 | C22 §27 Dependency Rule (seven mandatory disclosures) | §8.29 |
| `22-§28-1`–`22-§28-10` | IN SCOPE | SB-P-1.12 | C22 §28 Non-goals (ten) | §8.30, §10 |
| `22-§29-1` | ASSIGNED TO LATER MISSION | SB-P-1.13/SB-P-1.20 | C22 §29 Scenario 1 (tests C22 §7/§4) | §11 |
| `22-§29-2` | ASSIGNED TO LATER MISSION | SB-P-1.13 | C22 §29 Scenario 2 (tests C22 §7) | §11 |
| `22-§29-3` | IN SCOPE | SB-P-1.12 (services slice) | C22 §29 Scenario 3 (tests C21 §6 / C22 §6, services-layer slice only) | §8.31 |
| `22-§29-4` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C22 §29 Scenario 4 (tests C22 §11) | §11 |
| `22-§29-5` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C22 §29 Scenario 5 (tests C22 §9) | §11 |
| `22-§29-6`–`22-§29-8` | IN SCOPE | SB-P-1.12 | C22 §29 Scenarios 6–8 (tests C22 §5, §13/Founder B, §15) | §8.31 |
| `22-§29-9` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C22 §29 Scenario 9 (attendance/delivery location; C17 §9/§10); unchanged, not reopened | §11 |
| `22-§29-10`–`22-§29-12` | IN SCOPE | SB-P-1.12 | C22 §29 Scenarios 10–12 (tests C22 §19, §20/C21 §16, §14/C21 §19) | §8.31 |
| `22-§29-13` | ASSIGNED TO LATER MISSION | SB-P-1.13 | C22 §29 Scenario 13 (tests C22 §7 AI boundary) | §11 |
| `22-§29-14` | IN SCOPE | SB-P-1.12 | C22 §29 Scenario 14 (tests C22 §27) | §8.31 |
| `22-§30`–`22-§32` | NOT APPLICABLE | SB-P-1.12 | C22 §30 Historical Corrections; §31 Provenance and Hydration Coverage; §32 Completion Gate | Provenance/synthesis (`L-HIST`/`L-PROV`/`L-GATE`), not obligations; listed in §11 |

#### Contract 20 — Onboarding and First Experience (47 rows, split `SB-P-1.12`/`1.13`/`1.15`/`1.19`/`1.20`)

| FCTM Row ID(s) | Disposition | Assigned mission (FCTM) | Source reference | Blueprint location |
|---|---|---|---|---|
| `20-§1`, `20-§2` | NOT APPLICABLE | SB-P-1.12 | C20 §1 Feature Identity; §2 Founder Problem Statement | Narrative (`L-NARR`); listed in §11 |
| `20-§3` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C20 §3 Approved Route and Domain; BP §10.8 (`/start`) | §11 |
| `20-§4` | NOT APPLICABLE | SB-P-1.12 | C20 §4 Lighthouse Principles | Interpretive (`L-NARR`); listed in §11 |
| `20-§5`–`20-§12` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C20 §5 First-stage Discovery; §6 Historical Funnel Reconciliation; §7 Product Recommendation; §8 Business Identity Setup; §9 Existing Data Import; §10 Activation/Commercial Step; §11 First Practical Win; §12 First 24-hour Experience; BP §10.8 | §11 |
| `20-§13` | ASSIGNED TO LATER MISSION | SB-P-1.19/SB-P-1.13 | C20 §13 Conversation-first Onboarding (needs Conversation Workspace); BP §10.2, §10.8 | §11 |
| `20-§14` | ASSIGNED TO LATER MISSION | SB-P-1.13 (primary build) | C20 §14 Human Language; BP §10.2 names Human Language as `SB-P-1.13`'s build; C20 §21 lists it as a reused foundation | §11 |
| `20-§15` | ASSIGNED TO LATER MISSION | SB-P-1.13 (Workspace build)/SB-P-1.20 (WhatsApp adapter build) | C20 §15 WhatsApp and Conversation Workspace; BP §10.2 (Workspace), §10.9 (WhatsApp adapter) | §11 |
| `20-§16-1`–`20-§16-4` | IN SCOPE | SB-P-1.12 | C20 §16 Permission/Role Setup; BP §10.1 (permission scope) | §8.32 |
| `20-§17`–`20-§20` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C20 §17 Support During Onboarding; §18 Error and Exception Behavior; §19 Privacy and Trust; §20 Performance and Simplicity; BP §10.8 | §11 |
| `20-§21` | NOT APPLICABLE | SB-P-1.12 | C20 §21 Shared Foundations to Reuse | Cross-reference list (`L-REUSE`), not an obligation; listed in §11 |
| `20-§22-1`–`20-§23-4` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C20 §22 Explicit Non-goals (seven); C20 §23 Scenarios 1–4 | §11 |
| `20-§23-5` | ASSIGNED TO LATER MISSION | SB-P-1.19/SB-P-1.13 | C20 §23 Scenario 5 (tests C20 §11) | §11 |
| `20-§23-6`–`20-§23-9` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C20 §23 Scenarios 6–9 | §11 |
| `20-§23-10` | ASSIGNED TO LATER MISSION | SB-P-1.19/SB-P-1.15 | C20 §23 Scenario 10 (tests C20 §12; Daily Intelligence timing is `SB-P-1.15`) | §11 |
| `20-§23-11` | IN SCOPE | SB-P-1.12 | C20 §23 Scenario 11 (direct application of C20 §16-3) | §8.32 |
| `20-§23-12` | ASSIGNED TO LATER MISSION | SB-P-1.19 | C20 §23 Scenario 12 (tests C20 §17) | §11 |
| `20-§24`–`20-§27` | NOT APPLICABLE | SB-P-1.12 | C20 §24 Historical Corrections; §25 Provenance; §26 Unresolved Founder Questions (trial policy, BP §15, non-critical-path, carried in the canonical Delta document); §27 Completion Gate | Provenance/synthesis/carried elsewhere, not obligations; listed in §11 |

#### Contract 17 — Operational Dashboard and Manager Workspace (53 rows, split `SB-P-1.12`/`1.13`/`1.14`/`1.15`/`1.17`/`1.18`)

| FCTM Row ID(s) | Disposition | Assigned mission (FCTM) | Source reference | Blueprint location |
|---|---|---|---|---|
| `17-§1`–`17-§3` | NOT APPLICABLE | SB-P-1.12 | C17 §§1–3 (Feature Identity; Founder Problem Statement; Lighthouse Principles) | Narrative (`L-NARR`); listed in §11 |
| `17-§4` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C17 §4 Workspace Layers; BP §10.6 | §11 |
| `17-§5` | ASSIGNED TO LATER MISSION | SB-P-1.13 | C17 §5 Conversation Workspace Placement; BP §10.2 | §11 |
| `17-§6`–`17-§8` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C17 §6 Financial/Business Summary; §7 Inventory/Supplier/Reorder Views; §8 POS/Counter/Closing Cash Views; BP §10.6 | §11 |
| `17-§9`, `17-§10` | ASSIGNED TO LATER MISSION | SB-P-1.18 | C17 §9 Staff/HR Views; §10 Order & Delivery Views; BP §9 row 7, §10.7 | §11 |
| `17-§11` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C17 §11 Ask CFO and Daily Intelligence; BP §9 row 4, §10.4 | §11 |
| `17-§12` | ASSIGNED TO LATER MISSION | SB-P-1.14 | C17 §12 Documents and Receipt Cabinet; BP §9 row 3, §10.3 | §11 |
| `17-§13-1`–`17-§13-4` | IN SCOPE | SB-P-1.12 | C17 §13 Users and Permissions; BP §10.1 (permission scope) | §8.33 |
| `17-§14-1`–`17-§14-7` | IN SCOPE | SB-P-1.12 | C17 §14 Permission Enforcement | §8.33, §10 |
| `17-§15` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C17 §15 Personalization and Navigation; BP §10.6 | §11 |
| `17-§16-1` | IN SCOPE | SB-P-1.12 | C17 §16 Stable UI/Testability, for the §13/§14 surface | §8.33 |
| `17-§16-2`, `17-§17` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C17 §16 Stable UI/Testability (remaining Manager-depth surface); C17 §17 Error and Exception Behavior; BP §10.6 | §11 |
| `17-§18-1`, `17-§18-2` | IN SCOPE | SB-P-1.12 | C17 §18 Privacy/Trust items 1–2 (no cross-business data; no staff access to Owner intelligence by default); overlaps C21 §6, §21; Founder Record 04 (F-03) | §8.33, §10 |
| `17-§18-3` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C17 §18 item 3 (no routine admin browsing through dashboard shortcuts) | §11 |
| `17-§18-4` | IN SCOPE | SB-P-1.12 | C17 §18 item 4 (sensitive information only to roles with legitimate need); overlaps C21 §5, §14 | §8.33 |
| `17-§18-5`, `17-§19` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C17 §18 item 5 (dashboard analytics must not become hidden surveillance); C17 §19 Performance Expectations | §11 |
| `17-§20` | NOT APPLICABLE | SB-P-1.12 | C17 §20 Shared Foundations to Reuse | Cross-reference list (`L-REUSE`); listed in §11 |
| `17-§21-1`–`17-§21-3` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C17 §21 Non-goals items 1–3 (dashboard-experience-specific) | §11 |
| `17-§21-4` | IN SCOPE | SB-P-1.12 | C17 §21 item 4 (no employee visibility into Owner-wide financial intelligence by convenience); overlaps C21 §21; Founder Record 04 (F-03) | §8.33, §10 |
| `17-§21-5`, `17-§22-1` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C17 §21 item 5 (Conversation Workspace not hidden as fallback only); C17 §22 Scenario 1 | §11 |
| `17-§22-2`, `17-§22-3` | IN SCOPE | SB-P-1.12 | C17 §22 Scenarios 2–3 (Manager delegated ops only; Employee limited surfaces); Founder Scenario A | §8.33, §15 Scenario A |
| `17-§22-4` | ASSIGNED TO LATER MISSION | SB-P-1.13 | C17 §22 Scenario 4 (tests C17 §5) | §11 |
| `17-§22-5`, `17-§22-6` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C17 §22 Scenarios 5–6 (tests C17 §7/§8/§10, §17) | §11 |
| `17-§22-7` | ASSIGNED TO LATER MISSION | SB-P-1.15 | C17 §22 Scenario 7 (tests C17 §11) | §11 |
| `17-§22-8` | ASSIGNED TO LATER MISSION | SB-P-1.13 | C17 §22 Scenario 8 (tests C17 §5) | §11 |
| `17-§22-9`, `17-§22-10a` | IN SCOPE | SB-P-1.12 | C17 §22 Scenario 9 (cross-business denied server-side); Scenario 10, §13/§14-surface half (tests C17 §16-1) | §8.33 |
| `17-§22-10b` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C17 §22 Scenario 10, remaining Manager-depth half (tests C17 §16-2) | §11 |
| `17-§23`–`17-§25` | NOT APPLICABLE | SB-P-1.12 | C17 §23 Historical Corrections; §24 Provenance; §25 Completion Gate | Provenance/synthesis (`L-HIST`/`L-PROV`/`L-GATE`); listed in §11 |

#### Contract 7 — Stock, Supplier & Reorder Intelligence (36 rows, limited MC-03/MC-04 opening, split `SB-P-1.12`/`1.13`/`1.14`/`1.17`)

| FCTM Row ID(s) | Disposition | Assigned mission (FCTM) | Source reference | Blueprint location |
|---|---|---|---|---|
| `7-§1` | NOT APPLICABLE | SB-P-1.12 | C7 §1 Feature Identity | Narrative (`L-NARR`); listed in §11 |
| `7-§2`–`7-§5` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C7 §2 Core Stock Capabilities; §3 Supplier Management; §4 Reorder Intelligence; §5 Reorder Authority (authority rule itself is C21 §12); BP §9 row 6 | §11 |
| `7-§6` | ASSIGNED TO LATER MISSION | SB-P-1.17/SB-P-1.14 | C7 §6 Imports and Documents (UDI) | §11 |
| `7-§7` | IN SCOPE | SB-P-1.12 | C7 §7 POS Relationship (touched, limited: no competing stock-linked pricing path); MC-03/MC-04 | §8.34 |
| `7-§8-1`–`7-§8-5` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C7 §8 Ledger Relationship (integrated rule + four examples); not in MC-03's touched-scope list | §11 |
| `7-§9`–`7-§10-4` | IN SCOPE | SB-P-1.12 | C7 §9 Manager vs Ledger Packaging (touched, limited); C7 §10 Roles and Permissions (touched; Owner, Manager, Employee/Staff, Supplier) | §8.34 |
| `7-§11` | ASSIGNED TO LATER MISSION | SB-P-1.17 (primary)/SB-P-1.13 (AI kernel) | C7 §11 AI Behaviour | §11 |
| `7-§12` | IN SCOPE | SB-P-1.12 | C7 §12 Shared Foundations (touched: Catalog/Product identity, Permission Engine) | §8.34 |
| `7-§13`–`7-§15-1` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C7 §13 Failure and Exception Handling; §14 Privacy and Dignity; §15 Scenario 1 | §11 |
| `7-§15-2` | ASSIGNED TO LATER MISSION | SB-P-1.17/SB-P-1.14 | C7 §15 Scenario 2 (tests C7 §6) | §11 |
| `7-§15-3`–`7-§15-9` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C7 §15 Scenarios 3–9 | §11 |
| `7-§15-10` | IN SCOPE | SB-P-1.12 | C7 §15 Scenario 10 (staff permission boundaries); MC-04 | §8.34 |
| `7-§15-11` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C7 §15 Scenario 11 (tests C7 §14) | §11 |
| `7-§15-12` | IN SCOPE | SB-P-1.12 | C7 §15 Scenario 12 (cross-business isolation); MC-04 | §8.34 |
| `7-§16` | ASSIGNED TO LATER MISSION | SB-P-1.17 | C7 §16 Non-goals / Rejected Historical Behaviour | §11 |
| `7-§17`, `7-§18` | NOT APPLICABLE | SB-P-1.12 | C7 §17 Dependencies; §18 Completion Gate | Cross-reference/synthesis (`L-DEP`/`L-GATE`); listed in §11 |

#### Build Plan §7 and §10.1 (18 rows, governing sections, wholly `SB-P-1.12`)

| FCTM Row ID(s) | Disposition | Assigned mission (FCTM) | Source reference | Blueprint location |
|---|---|---|---|---|
| `BP-§10.1-1`–`BP-§10.1-6` | IN SCOPE | SB-P-1.12 | BP §10.1 required work areas 1–6 (role model; membership/identity; permission matrix; delegated authority; execution-time revalidation; isolation); Founder Record 04 (F-02, F-03, F-04(c)) | §8.1–§8.3 |
| `BP-§10.1-7`–`BP-§10.1-9` | IN SCOPE | SB-P-1.12 | BP §10.1 required work areas 7–9 (RLS/grants/function review; `anon` remediation; CI baseline); BP §5.1, §5.2 | §8.36, §13 (T4) |
| `BP-§10.1-10` | IN SCOPE | SB-P-1.12 | BP §10.1 required work area 10 (entitlement primitives) | §8.12 |
| `BP-§10.1-11`–`BP-§10.1-13` | IN SCOPE | SB-P-1.12 | BP §10.1 required work areas 11–13 (Product & Price Master reclassification; `/catalog` demotion plan; data and deep-link continuity); BP §7 | §8.35 |
| `BP-§7-1`–`BP-§7-5` | IN SCOPE | SB-P-1.12 | BP §7 Founder decision — Product & Price Master (preserve list, do-not list, target treatment) | §8.35 |

**Total: 373 rows — 228 `IN SCOPE`, 113 `ASSIGNED TO LATER MISSION`, 2 `DELEGATED`, 30 `NOT APPLICABLE`, 0 `ESCALATED`.** Matches the canonical FCTM (`claude-code/03-stage2-populated-fctm.md` §G) exactly. Completeness of row coverage, disposition, assigned mission and non-empty source reference is machine-checked against the FCTM (see `claude-code/14-stage4-blueprint-drafting-report.md` §5).

### Institutional Learning Intake Reconciliation

`Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force` (unchanged from the canonical Stage 2 Institutional Learning Intake Record, `claude-code/05-stage2-institutional-learning-intake.md`; no change has been canonically made to that status).

- **Phase 1 guide (dual intake, first leg):** `docs/phase-1-mission-blueprint/00_Phase_1_Institutional_Memory_Lessons_Capabilities_and_Operational_Guardrails.md`, blob `3da3d6d3f9b7fbd89de028ca0191d99484049ba9`, unchanged from the Stage 1 baseline. Sections applied to this Blueprint: §2 (authority model — governs escalation posture, no self-clearing of gates), §5 (current build sequence — the basis of every `ASSIGNED TO LATER MISSION` row in §11), §6.2 (Product & Price Master / Inventory / Transactions architecture — §8.35), §8 (evidence doctrine — file-level versus live evidence in §13), and the §18 mission-start checklist.
- **Validated OLE promotions (dual intake, second leg):** the 17 `VALIDATED`, `MISSION_SCOPED` promotions inventoried at Stage 1 remain the complete set — `organizational-learning/promotions/**` and the guide are byte-identical between the Stage 2 baseline (`96a31aa7a0debc539fcda1bca2008457e1315093`) and this Stage 4 baseline (`d86e8663eabccff62f3f7e3fadd5342a2ca56aac`); no addition or supersession. Dispositions are unchanged from Stage 2 §3 (8 `ALREADY EMBEDDED IN ACTIVE GOVERNANCE`, 1 `APPLIED`, 5 `INFORMATIONAL`, 3 `NOT APPLICABLE`; `MISSION_SCOPED` is an applicability screen, not a universal rule, and no unpromoted candidate is treated as authority). In this Stage 4 work the `SB-OPS-CI-ARCHITECTURE-1.0` exact-run-level-closure practice remains `APPLIED` (exact CI run identifiers are cited in the drafting report), and the `SB-ORG-LEARNING-1.1` narrow finding-scoped correction cycle is being practiced on this PR.
- **Stale statements found (Delta):** the Stage 2 checklist answers that are now historical, superseded by the canonical Stage 3 record and not restated here as current — Q10's "78 `ASSIGNED TO LATER MISSION` rows" (current: 113, with 2 `DELEGATED`) and Q11's open T4/T6 determination and open Contract 22 §12/§16 assignment flags (current: Stage 3 complete, `FPDR-1`–`FPDR-4`, T4 historically `TRIGGERED` with production state `UNVERIFIED`). The Phase 1 guide itself has no stale statement affecting this Blueprint.
- **Conflicts for Mission Control:** none identified between any promotion, the guide and the governing sources.

### Governance History

| Date | Actor | Governance event | Result |
|---|---|---|---|
| 2026-09-22 | Mission Control | Activated SB-P-1.12 Stage 1 (MC-01) and appointed Claude Code Stage 2–4 Definition Actor (MC-02), effective on PR #622 human merge. | Stage 1 Intake Pack canonical. |
| 2026-09-22 | Mission Control | Authorized Stage 2 Mission Truth and Delta Reconciliation (MC-05-B), effective on PR #623 human merge. | Stage 2 authorization canonical. |
| 2026-09-22 | Claude Code, Mission Control | Prepared and, over six correction rounds (MC-06 through MC-11), corrected the Stage 2 Mission Truth Pack and 373-row FCTM. | PR #624 human-merged (MC-12); FCTM canonical with 15 `ESCALATED` Contract 22 §12/§16 rows; Stage 3 `TRIGGERED` (T7, T4). |
| 2026-09-23 | Mission Control | Authorized Stage 3 Founder Brief preparation (MC-13), effective on PR #625 human merge. | Stage 3 brief-preparation authorization canonical. |
| 2026-09-23 | Claude Code, Mission Control | Prepared and, over two correction rounds (MC-14, MC-15), corrected the grouped Founder Decision Brief. | PR #626 human-merged; Brief canonical. |
| 2026-09-23 | Mission Control | Authorized Stage 3 Founder Product Decision Record preparation (MC-16), effective on PR #627 human merge. | Decision-record preparation authorization canonical. |
| 2026-09-23 | Claude Code, Mission Control | Prepared and, over two correction rounds (MC-17, MC-18), corrected and reviewed the draft Founder Product Decision Record and 15-row FCTM reconciliation. | PR #628 human-merged; `FPDR-1`–`FPDR-4` and reconciled 373-row FCTM (228/113/2/30/0) canonical; Stage 3 COMPLETE — CANONICAL, historically `TRIGGERED`. |
| 2026-09-23 | Mission Control | Authorized Stage 4 Product Blueprint Sections 1–19 drafting (MC-19), effective on PR #629 human merge. | Stage 4 drafting authorization canonical, `main@d86e8663eabccff62f3f7e3fadd5342a2ca56aac`. |
| 2026-09-23 | Claude Code | Prepared this DRAFT Product Blueprint — Metadata, Mission Snapshot, Sections 1–19 — assembled by reference to the canonical FCTM and `FPDR-1`–`FPDR-4`. | Draft prepared for Mission Control Stage 5 Product Review; no Builder Review, Engineering Review, lock, EIS or implementation performed. |
| 2026-09-23 | Mission Control | First substantive Stage 5 Product Review of PR #630 at head `8096a24674cec0cba48dffc26393d23590296d7b` (MC-20). | Structure and Founder Scenarios A/B substantively accepted; Stage 5/Gate 10 held for five narrow corrections (MC-20A–E). |
| 2026-09-24 | Claude Code | Applied MC-20A–E on the same branch/PR (Blueprint version 0.2). | Corrections only; awaiting Mission Control re-review; no approval, lock, Section 20/21, EIS or implementation. |
| 2026-09-24 | Mission Control | Stage 5 approval of Sections 1–19 and Gate 10 (MC-21); PR #630 human-merged at `2026-09-24T14:52:34Z`, `main@cae6c064d1a88f766317373d4a16746bfafea0c6`. | Sections 1–19 approved only; Stage 5 COMPLETE — CANONICAL; no lock. |
| 2026-09-24 | Mission Control, Claude Code | Authorized (MC-22, PR #631) and prepared the Stage 6 Builder Review; PR #632 human-merged at `2026-09-24T18:37:11Z`, `main@76ff1575e1ca3978f363d7a1daef307513376345` (MC-24 gate). | Stage 6 findings F-01–F-11 accepted as recommendations; Founder confirmed F-02 Option B, F-03 Option B and F-04(c) Option C in [PR #632 comment `5819755459`](https://github.com/SmartBusinessv1/smart-business/pull/632#issuecomment-5819755459). |
| 2026-09-24 | Mission Control | Authorized the Founder Decision Record and narrow Sections 1–19 reconciliation (MC-25); PR #634 human-merged at `2026-09-24T19:09:02Z`, `main@3a67c803f27d3790a4a772bf7c563b70b32cca2f`. | Documentary preparation authorized only; Stage 7 not authorized. |
| 2026-09-25 | Claude Code | Prepared DRAFT Founder Record 04 and this narrow reconciliation (Blueprint version 0.3). | Awaiting Mission Control review and human merge; no Stage 7, Sections 20–21, EIS, implementation or production action. |

## 20. Engineering Review

**Stage 7 draft (version 0.4).** Prepared by Claude Code as the Source 18 §4.4 Engineering Review owner under the MC-35 activation record (`communication/missions/SB-P-1.12/mission-control/21-stage7-engineering-review-activation-record.md`), effective on the human merge of PR #640 (`main@733f33935b37f6e3b5b4f7e8916f0161d6646527`) and Mission Control's post-merge verification. This section and Section 21 are a DRAFT for Mission Control review. They approve, lock and authorize nothing.

### 20.1 Basis, evidence class and independence

- **Inputs.** Approved Sections 1–19 (v0.3), the accepted Stage 6 Builder Review findings (MC-24; `claude-code/16-stage6-builder-review-report.md`), Founder Records 03 and 04, the canonical FCTM (`claude-code/03-stage2-populated-fctm.md`) and the repository at `main@733f3393`.
- **Evidence class.** Repository files only: migrations, application source, tests and workflow files. No database, provider, production or privileged access was used, and no SQL was executed. Every statement about current behaviour describes files in the repository, not live state. Production grants, RLS, function and default privileges, migration state and remediation execution remain `UNVERIFIED` (G-6).
- **Independence.** Claude Code authored Sections 1–19, the FCTM, Founder Record 04 and the Stage 6 Builder Review. This Engineering Review is not independent security review. Findings marked `PENDING` in Section 20.5 are not accepted or relied on until the appointed Security & Permissions Architecture reviewer (MC-33) completes its review and Mission Control dispositions it.
- **Recommendations, not decisions.** Where this section describes a design direction, it is a recommendation for the EIS, which may only be created after Stage 8 lock. No technical mechanism the Founder left unselected is selected here (in particular the F-04(c) progress, replay and resume mechanism).
- **Product Truth.** No Product Truth, FCTM disposition, build commitment, commercial classification, mission assignment, Founder Decision or Founder Scenario is changed. All 228 `IN SCOPE` rows remain `IN SCOPE`.

### 20.2 Repository baseline relevant to this mission

| Area | Repository fact at `main@733f3393` | Source |
|---|---|---|
| Authority concept | `businesses.owner_id` is `NOT NULL`, `UNIQUE` and references `auth.users(id) ON DELETE CASCADE`. There is no membership, role, capability, entitlement or grant table | `supabase/migrations/20260708210504_0a471e2c-a76c-4178-8aa2-79a3744e8bd2.sql` |
| Business row privileges | `authenticated` holds `SELECT, INSERT, UPDATE, DELETE` on `businesses`, and four Owner policies permit each, including `DELETE` where `auth.uid() = owner_id`. The application does not offer business deletion | Same file; `src/routes/_authenticated/dashboard.tsx` |
| Cascades | 18 foreign keys to `businesses(id)` use `ON DELETE CASCADE`. Catalog event, audit, deletion-record and idempotency tables, and `inventory_movements`, have immutability triggers that raise on any delete, so a cascading business delete fails where such rows exist. `transactions` and `transaction_correction_events` have no delete guard | Stage 1 catalog schema §9; inventory migration `20260721205714_…` |
| Authority resolver | `catalog_internal.resolve_owner_business(p_actor)` returns `businesses.id WHERE owner_id = p_actor`; `catalog_internal.current_actor_uid()` reads only the JWT subject. The resolver is referenced 105 times across migrations | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` §4 |
| Catalog commands | 19 public catalog functions run `SECURITY DEFINER` as one of seven `NOLOGIN NOINHERIT` executor roles with narrow table and column grants, and re-resolve the caller's business at execution time | `20260806130000_sb_p_1_11_impl_1_stage2_functions.sql` |
| Legacy write paths | `transactions` is inserted and read directly by the client through PostgREST under Owner RLS (`src/integrations/supabase/transactions.ts`). `correct_transaction` and `create_inventory_movement` are `SECURITY INVOKER` and rely on RLS | `20260719102137_…`, `20260720142248_…`, `20260724170000_…` |
| RLS | RLS is enabled on 21 application tables. The migrations contain 87 `CREATE POLICY` statements; the Stage 6 review counted 86 policies in effect, all Owner-scoped. Stage 7 did not re-verify each policy line by line | Migrations; Stage 6 report F-01 |
| Default privileges | `reconcile_default_grants` grants `ALL` on six tables and `EXECUTE` on all `public` functions to `anon, authenticated, service_role`, and installs default privileges that do the same for future `postgres`-owned objects. Catalog migrations revoke per object. The Inventory hardening migration (file 21) covers three Inventory tables, and its production status is `UNVERIFIED` | `20260727000000_reconcile_default_grants.sql`; `20260830120000_…`; `docs/migration/README.md` |
| Audit | `catalog_audit_events` and the four catalog event tables pin `authority_basis = 'owner_via_businesses.owner_id'`, `channel = 'dashboard'` and `executed_by_actor_type = 'user'` with `CHECK` constraints, and are append-only. There is no authority (grant, revoke, denial) audit | Stage 1 catalog schema §§9–10 |
| Confirmation binding | `catalog_link_preview_tokens` binds business, initiating actor, requested action, target, expected state fingerprint, issue and expiry, and closure. It has no permission version | Stage 1 catalog schema; Stage 6 F-11 |
| Idempotency | `catalog_write_idempotency_keys` (business, operation, key, payload fingerprint, outcome) and `inventory_movement_idempotency_keys` exist | Stage 1 catalog schema; inventory migrations |
| Reference Cost | `catalog_product_read` returns `build_product_detail_with_cost` unconditionally. A cost-free `build_product_detail_base` exists. `current_reference_cost` is written only by `catalog_cost_executor` | Stage 2 functions; Stage 6 F-03 |
| Service-role paths | `supabaseAdmin` is used in `src/server-functions/catalog-import.ts` and `src/server-functions/parser-lease.ts`. Each first resolves the business through `owner_id` with the caller's client, then uses the service role for batch, row, lease and guard bookkeeping | Both files |
| Application gate | The authenticated route checks session only. `FirstTimeBusinessSetup` offers business creation to any signed-in user without a business. `/super-admin` is a public placeholder. `returnTo` is unvalidated | Stage 6 F-05, F-07, F-09 |
| Tests and CI | 28 test files (catalog import 9, inventory 17, parser lease 2) with Owner-only fixtures. Fast Gate (Application Build Assurance) runs on every PR; Full Assurance runs DB suites against the isolated test environment on a path filter and is not a required check; the Markdown Quality Gate is required | `tests/`; `.github/workflows/`; Stage 6 F-06 |

### 20.3 Engineering assessment by workstream

Each item states feasibility, the main risks and a recommended direction for the EIS. The E-codes are referenced from the per-row register in Section 20.5.

#### E1 — Authority kernel and membership (WS-A)

- **Feasibility.** Feasible. The catalog already re-resolves authority in the database at execution time through one function. That is the seam to replace.
- **Recommended direction.** Add membership beside `owner_id`, keyed by person and business with a role, rather than replacing `owner_id`. Replace `resolve_owner_business` with one kernel resolver that takes the actor, the active business and the required capability, and returns an allow or deny. Move all 105 references to it. Derive the actor only from the verified JWT subject and read role, capability, entitlement and grant state from the database at each execution, never from token claims (F-08). Carry a per-membership permission version so bound confirmations and running imports can detect change.
- **Active-business context (F-02).** Every command should receive the active business explicitly and have the kernel verify membership in it. The kernel should never infer the business from "the one business this person owns", which today's `maybeSingle()` lookups in the client and server functions do.
- **Held conclusion (G-4).** Whether `owner_id UNIQUE` is kept, and therefore whether a person may own more than one business, is not decided here. The membership design above works under either answer. Conclusions that depend on ownership cardinality are held.
- **Risks.** Size: every catalog command, all Owner policies, both server functions and all client lookups change. Regression risk to the Product & Price Master. Partial migration could leave two authority paths.

#### E2 — Role-aware enforcement at RLS and command layers (WS-A)

- **Feasibility.** Feasible, with ordering risk.
- **Recommended direction.** Express every policy through the kernel. Replace direct client table writes and reads on `transactions` with command and query functions, or with policies that separate insert permission from read-all, so that an Employee allowed to add a transaction does not receive read access to all amounts (`21-§11-2`, `21-§24-4`). Keep `SECURITY DEFINER` functions narrow, with `search_path = ''` and explicit executor roles, following the catalog precedent.
- **Risks.** A permissive or unscoped policy written during migration could activate the dormant `anon` exposure (DC-2). Policies and functions must change together per table family, with deny-by-default in between.

#### E3 — Field-level Reference Cost and margin delegation (F-03)

- **Feasibility.** Feasible. The cost-free detail builder already exists, and cost writes already sit behind their own executor.
- **Recommended direction.** Make each field an independent capability. Choose the detail builder by capability, not unconditionally. Restrict search, list, import preview and export paths the same way, and do not expose the columns through direct table grants.
- **Held conclusion (G-3).** Whether a separately delegated value, combined with other visible values, may disclose the undelegated one is unanswered. No inference-proof guarantee is asserted, and no approved delegation is prohibited. Findings that would need that answer are held.

#### E4 — Execution-time revalidation, confirmation binding and import (Scenario B, F-04(c))

- **Feasibility.** Feasible.
- **Recommended direction.** Generalize `catalog_link_preview_tokens` into one shared confirmation-binding pattern and add the permission version as its sixth element. For import: bind the batch to the initiating actor, business and permission version at preview; re-check authority at claim and for every row inside the database; stop the remainder on the first denial; and report completed and remaining counts. The resume or re-submission mechanism is left to the EIS (F-04(c)).
- **Risks.** The current batch claim uses the service role with no actor predicate (Stage 6 F-04). Per-row RPCs already fail closed after revocation, so Scenario B's pre-commit denial is reachable once the kernel exists.

#### E5 — Authority audit and human context

- **Feasibility.** Feasible, with a schema-evolution dependency.
- **Recommended direction.** Add an append-only authority event record for grant, revoke, role change, temporary elevation, support access and security-relevant denial, carrying grantor, subject, capability, scope, business, channel, timestamps and resulting action. Widen the existing catalog provenance `CHECK` constraints through governed migration so non-Owner actors and non-dashboard channels can be recorded truthfully.
- **Risks.** The pinned `CHECK` values would reject any non-Owner write until changed. Audit durability depends on ESC-1 (Section 21.1).

#### E6 — Idempotency and duplicate protection

- **Feasibility.** Feasible. Two idempotency stores already exist and can be generalized. Duplicate-safe import completion (F-04(c)) should reuse the per-row outcome record rather than a second mechanism.

#### E7 — Denial contract and experience

- **Feasibility.** Feasible. Catalog commands already return a deterministic `PERMISSION_DENIED` without leaking whether the object exists.
- **Recommended direction.** One denial outcome shape across commands, queries, RLS-filtered reads and server functions, with calm copy and a next step. Capability-driven navigation. First-run business creation offered only after checking for pending or active membership (F-05). An allowlist for `returnTo` (F-07). Routine denials are not escalated as security events.

#### E8 — Entitlements

- **Feasibility.** Feasible. Entitlements are data rows checked jointly with role by the kernel. No schema is created or dropped for entitlement state, which the repository already avoids.

#### E9 — Surface coverage and shared-foundation reuse

- **Feasibility.** Feasible for the surfaces this mission owns. For WhatsApp, Conversation Workspace, background jobs, integrations and AI tools, this mission supplies the kernel contract and a reusable test harness, and the owning missions prove their surfaces (DC-3).
- **Risk.** Service-role code paths bypass RLS. Every such path must call the kernel before acting.

#### E10 — Residual `anon` remediation and function security (WS-B)

- **Feasibility.** Conditional. The design is feasible: revoke `anon` from `businesses`, `transactions`, `transaction_correction_events` and all `public` functions, replace the default-privilege clause, and grant `authenticated` only what the kernel design needs. Its production correctness depends on G-6 evidence.
- **Boundary.** Stage 7 describes the design dependency and the verification plan only. Nothing here claims remediation complete, and nothing relies on the 2026-09-13 observations as current.

#### E11 — Product & Price Master reclassification (WS-C)

- **Feasibility.** Feasible. All catalog tables are keyed by `business_id`, so membership needs no data move. Reclassification is documentation, navigation and permission work; `/catalog` demotion must keep the structured management path and existing product URLs working until equivalent contextual access is proven.

#### E12 — Tests and CI

- **Feasibility.** Feasible. Add Manager, Employee, revoked-member, external-participant and cross-business fixtures, and DB-level tests for each policy family, Scenario A, Scenario B and F-04(c). Required-check governance stays with Mission Control (G-5).

#### E13 — Temporary support access

- **Feasibility.** Feasible as a wholly new build (F-09). Purpose, consent, minimum scope, time bound, identified privileged actor, audit and revocation as kernel-level grant types, not a bypass role.

#### E14 — Delegated automation authority check

- **Feasibility.** Feasible. A kernel entry point that re-verifies rule status, scope, target and limits, entitlement and permission version on every invocation, proven through a test harness until `SB-P-1.15` and `SB-P-1.17` supply runtimes.

#### E15 — External participants and Employee self-service boundaries

- **Feasibility.** Feasible for the permission boundary. External roles resolve to narrow, object-scoped capabilities with no dashboard capability. Employee self-service uses own-record predicates. The underlying features belong to later missions, so proof uses labelled fixtures (DC-3).

### 20.4 Early delivery plan

Planning and rehearsal only. Execution is never part of a Product Mission (Source 18 §9.1). Nothing in this section is execution authority, a migration execution plan or a deployment instruction.

#### 20.4.1 Environments and the evidence needed to establish them

| Environment | Planned use | Evidence needed before relying on it | Evidence owner | Status |
|---|---|---|---|---|
| Local development | Authoring, unit tests, migration replay from an empty database | None beyond the repository | Implementing actor | Available |
| Isolated test environment (`smart-business-test`, GitHub Actions environment used by Full Assurance) | DB-level policy, kernel, Scenario A and B and F-04(c) tests; migration rehearsal by clean replay | Current project identity, applied migration list and secret bindings, freshly verified | Mission Control (G-7) | Named in `full-assurance.yml`; current identity `UNVERIFIED` |
| Production-shaped rehearsal copy | Rehearsal of remediation and policy migrations against production-shaped grants and data | Whether such an environment exists, its source and its data-handling approval | Mission Control or Founder | Not established |
| Production | Target of later, separately authorized execution only | Project identity, migration ledger, grants, RLS, function and default privileges (T4) through a separately authorized read-only verification | Mission Control or Founder authorizes; executing actor to be named | `UNVERIFIED` (G-6, G-7) |

#### 20.4.2 Expected migration classes and rehearsal needs

| Class | Expected content | Risk | Rehearsal need |
|---|---|---|---|
| M1 Additive schema | Membership, capability grant, entitlement, authority event and confirmation-binding tables; permission version | Low data risk; new tables inherit the `public` default privileges unless revoked in the same migration | Clean replay; assert no `anon` or `PUBLIC` grant on each new object |
| M2 Data backfill | One Owner membership per existing `businesses.owner_id` | Medium; must be idempotent and must not change ownership | Replay on production-shaped data; row-count reconciliation |
| M3 Function replacement | Kernel resolver; catalog commands and server-function paths moved to it; `SECURITY DEFINER` hygiene | High; behaviour change on every write | Full Assurance suite plus new role fixtures before and after |
| M4 Policy replacement | Owner-only policies on 21 tables replaced by kernel-based policies | High; a gap or permissive policy is a security regression (DC-2) | Per-table-family ordering; deny-by-default checks; cross-business and role matrix tests |
| M5 Privilege remediation (WS-B) | Revoke `anon` on the three remaining tables and on functions; replace the default-privilege clause | High, and dependent on the live state | Only after G-6 read-only verification; rehearse against production-shaped grants |
| M6 Constraint evolution | Widen catalog provenance `CHECK` values; reconsider the business `DELETE` path and cascades (ESC-1) | Medium; append-only history must stay intact | Replay with existing event rows present |

No destructive data migration and no subscription-driven schema change is expected. Any migration file is non-executable until a separate, explicit mission authorizes it under `docs/migration/README.md`.

#### 20.4.3 Cross-mission dependencies

| Mission | Dependency on this mission | This mission's dependency on it |
|---|---|---|
| `SB-P-1.13` | Conversation and AI intake use the kernel (`21-§8`, `22-§6-3`, `22-§6-9`) | None for build; channel-inclusive proof completes there (`22-§29-3`) |
| `SB-P-1.14` | Document and file access uses kernel isolation (`21-§6-4`) | None |
| `SB-P-1.15` | Scheduler, reminders and Ask CFO use the delegated-automation check and the Ask CFO boundary (`21-§9`, `21-§12-*`) | Runtime on-every-run proof owed there |
| `SB-P-1.17` | Manager Operations sits inside the permission surface (`17-§13`, `17-§14`) | Feature depth owed there |
| `SB-P-1.18` | Attendance, delivery and Staff/HR use Employee self-service and external-participant boundaries | Feature proof owed there |
| `SB-P-1.19` | Onboarding consumes Owner and invitation setup (`20-§16-*`) | Onboarding flow owed there |
| `SB-P-1.20` | WhatsApp adapter uses the kernel (`22-§6-2`) | Channel proof owed there |

#### 20.4.4 Applicable CI tiers

- **Markdown Quality Gate:** required on `main`; applies to every documentation change.
- **Fast Gate (Application Build Assurance: lint, typecheck, build, fast tests):** every PR and checkpoint. Not a required branch-protection check.
- **Full Assurance (DB, RLS, concurrency suites against the isolated test environment):** triggered by `src/**`, `tests/**`, `supabase/**` and the other listed paths. It will run on every implementation checkpoint of this mission, which touches those paths. It is deliberately not a required check because of its path filter.
- **Governance (G-5).** Whether database isolation tests become a required check is a Mission Control decision. This plan changes no workflow or branch protection.

#### 20.4.5 Stage 1 scope flags (carried unchanged)

`PRODUCTION MUTATION: NOT AUTHORIZED`. `MIGRATION EXECUTION: NOT AUTHORIZED`. `DELIVERY SYNC AND PUBLICATION: NOT AUTHORIZED`.

#### 20.4.6 Planning and execution boundary, and recommended order

Recommended order for the EIS, subject to Stage 8 lock and later authorizations:

1. Separately authorized evidence: T4 read-only verification (G-6) and topology verification (G-7).
2. M1 and M2, with deny-by-default kernel in place but unused.
3. M3 and M4 per table family, with role fixtures (E12).
4. M5 WS-B remediation, informed by step 1. The Blueprint names it a mandatory early security gate, so it should not wait for later steps once its evidence exists.
5. Field-level cost and margin (E3), confirmation binding and import revalidation (E4), audit (E5).
6. Capability-driven UI, denial experience and first-run membership check (E7).
7. Product & Price Master reclassification and `/catalog` demotion (E11).

Every step above is engineering planning. Infrastructure changes, migration execution, production verification and deployment each need their own authorization.

### 20.5 Per-row feasibility and risk register

One entry per `IN SCOPE` FCTM row ID, in FCTM order: 228 entries. Every row keeps its FCTM disposition `IN SCOPE`, and none is narrowed, moved or reclassified.

**Feasibility values.** `FEASIBLE`: buildable within the approved scope on present evidence. `CONDITIONAL`: buildable, but a conclusion depends on named evidence, verification or a dependent gate. `HELD`: the row's main conclusion needs an answer that is not available; it is held on a finding-scoped basis and escalated. `BLOCKED`: infeasible, unsafe or in conflict with Product Truth, raising T8. No row is `BLOCKED` in this draft.

**Independent review (IR).** `PENDING`: security-sensitive under Source 18 §4.8 (authority or permissions, RLS or grants, migrations, idempotency or concurrency, financial integrity). The finding is not accepted or relied on until the MC-33 reviewer completes its review and Mission Control dispositions it. `N/R`: Claude Code's assessment that no mandatory domain is engaged. Mission Control may require review of any `N/R` row.

**Evidence.** Unless stated otherwise, evidence is the repository baseline in Section 20.2 and the E-codes in Section 20.3. Production state is `UNVERIFIED` throughout.

#### Contract 21 — Permissions, Business Isolation and Role Authority (101 rows)

| Row | Blueprint | Feasibility | Finding and dependencies | Gate or evidence | IR |
|---|---|---|---|---|---|
| `21-§4-1` | §8.1 | CONDITIONAL | Owner exists only as `owner_id`. Model Owner as a membership role beside `owner_id` (E1). Owner authority must be preserved exactly during migration (M2) | G-4 HOLD on ownership cardinality only | PENDING |
| `21-§4-2` | §8.1 | FEASIBLE | New Manager role with no implied Owner capability; bounded delegations granted explicitly (E1, E3) | G-3 applies only to cost and margin inference | PENDING |
| `21-§4-3` | §8.1 | FEASIBLE | New Employee role with own-record and scoped-creation capabilities (E1, E15) | None | PENDING |
| `21-§4-4` | §8.1 | FEASIBLE | Supplier as a bounded external role with object-scoped capabilities and no dashboard capability (E15) | Feature surface is later missions' (DC-3) | PENDING |
| `21-§4-5` | §8.1 | FEASIBLE | Customer as a bounded external role (E15) | As `21-§4-4` | PENDING |
| `21-§4-6` | §8.1 | FEASIBLE | Delivery Staff as a bounded external role (E15) | As `21-§4-4` | PENDING |
| `21-§5-1` | §8.2 | FEASIBLE | Authenticated user is already derived from the verified JWT subject only (`current_actor_uid`). Keep that as the kernel's sole identity input (F-08) | None | PENDING |
| `21-§5-2` | §8.2 | CONDITIONAL | Membership table and active-business verification in the kernel (E1, F-02). Client `maybeSingle()` business lookups must be replaced | G-4 HOLD on ownership-dependent conclusions | PENDING |
| `21-§5-3` | §8.2 | FEASIBLE | Role held per membership, checked in the kernel (E1) | None | PENDING |
| `21-§5-4` | §8.2 | CONDITIONAL | Explicit delegated capability as grant rows with permission version (E1); Reference Cost and margin as separate capabilities (E3) | G-3 HOLD on derived-value inference | PENDING |
| `21-§5-5` | §8.2 | FEASIBLE | Object scope is partially present through `business_id` keys and composite foreign keys. Extend with owner-of-record predicates for self-service (E15) | None | PENDING |
| `21-§5-6` | §8.2 | FEASIBLE | Action type as part of the capability checked by each command and policy (E1, E2) | None | PENDING |
| `21-§5-7` | §8.2 | FEASIBLE | Entitlement as data, checked jointly with role (E8) | Commercial tiers are a later product decision | PENDING |
| `21-§5-8` | §8.2 | FEASIBLE | Channel is currently pinned to `dashboard` in provenance. Pass channel into the kernel and widen provenance (E5, E9) | M6 constraint change | PENDING |
| `21-§5-9` | §8.2 | FEASIBLE | Temporary grants as time-bounded grant rows re-checked at execution (E1, E13) | None | PENDING |
| `21-§5-10` | §8.2 | CONDITIONAL | No account or subscription state exists. Kernel input once defined; must not change schema (E8) | The state model belongs to later commercial decisions | PENDING |
| `21-§6-1` | §8.3 | CONDITIONAL | Owner-scoped RLS denies cross-business reads today in repository files. Kernel policies must keep that for every role (E2) | G-6: live policies `UNVERIFIED` | PENDING |
| `21-§6-2` | §8.3 | CONDITIONAL | As `21-§6-1` for writes. Service-role paths must call the kernel first (E9) | G-6 | PENDING |
| `21-§6-3` | §8.3 | FEASIBLE | No conversation context exists. The kernel contract and tests are supplied here; `SB-P-1.13` proves its surface (E9) | DC-3 | PENDING |
| `21-§6-4` | §8.3 | CONDITIONAL | Parser upload leases and import files are business-scoped behind service-role paths. Storage bucket policies were not inspected in migrations | Storage configuration `UNVERIFIED` (G-7) | PENDING |
| `21-§6-5` | §8.3 | FEASIBLE | No export exists. Any export must go through the kernel with an export action type (E1) | None | PENDING |
| `21-§6-6` | §8.3 | FEASIBLE | No integration mapping exists. Kernel contract only (E9) | DC-3 | PENDING |
| `21-§6-7` | §8.3 | FEASIBLE | Client supplies `business_id` on `transactions` inserts but RLS re-checks it. The kernel must verify membership in the supplied active business (E1, E2) | None | PENDING |
| `21-§7` | §8.4 | CONDITIONAL | Enforcement already sits in RLS and command functions. It must remain there for every role (E2) | G-6 | PENDING |
| `21-§8` | §8.5 | FEASIBLE | One kernel for all channels; natural language cannot widen access because every channel calls the same kernel (E9) | `SB-P-1.13` proof (DC-3) | PENDING |
| `21-§9` | §8.5 | FEASIBLE | Ask CFO and Owner intelligence as capabilities denied by default to non-Owners (E1) | `SB-P-1.15` feature | PENDING |
| `21-§10-1` | §8.6 | FEASIBLE | Own-attendance read as own-record predicate; proven with labelled fixtures (E15) | Attendance feature is `SB-P-1.18`'s | PENDING |
| `21-§10-2` | §8.6 | FEASIBLE | Own correction requests; `transaction_correction_events.edited_by` shows actor capture is possible (E15) | DC-3 | PENDING |
| `21-§10-3` | §8.6 | FEASIBLE | Own leave and request status via own-record predicate (E15) | DC-3 | PENDING |
| `21-§10-4` | §8.6 | FEASIBLE | Assigned tasks, orders and deliveries via assignment predicate (E15) | DC-3 | PENDING |
| `21-§10-5` | §8.6 | FEASIBLE | Other job-specific information as scoped capabilities (E15) | DC-3 | PENDING |
| `21-§10-6` | §8.6 | FEASIBLE | Negative path: self-service must not expose staff or Owner intelligence; requires E2 on `transactions` reads | None | PENDING |
| `21-§11-1` | §8.7 | FEASIBLE | Actor identity is already captured (`creator_id`, `authorized_by_user_id`) and is re-checked in RLS; preserve for all roles | None | PENDING |
| `21-§11-2` | §8.7 | FEASIBLE | Risk: today `transactions` insert and select are granted together to the Owner. Separate insert from read-all for non-Owners (E2) | None | PENDING |
| `21-§12-1` | §8.8 | FEASIBLE | Rule-enabled check in the automation entry point (E14) | Runtime proof `SB-P-1.15`/`SB-P-1.17` | PENDING |
| `21-§12-2` | §8.8 | FEASIBLE | Actor and business scope check (E14, E1) | As above | PENDING |
| `21-§12-3` | §8.8 | FEASIBLE | Target, action and limits stored with the rule and compared on each run (E14) | As above | PENDING |
| `21-§12-4` | §8.8 | FEASIBLE | Entitlement and state re-checked on each run (E14, E8) | As above | PENDING |
| `21-§12-5` | §8.8 | FEASIBLE | Permission-version comparison detects revocation since grant (E14, E1) | As above | PENDING |
| `21-§13-1` | §8.9 | FEASIBLE | Supplier bounded participation (E15) | DC-3 | PENDING |
| `21-§13-2` | §8.9 | FEASIBLE | Customer bounded participation (E15) | DC-3 | PENDING |
| `21-§13-3` | §8.9 | FEASIBLE | Delivery Staff bounded participation (E15) | DC-3 | PENDING |
| `21-§14-1` | §8.10 | FEASIBLE | Purpose as a mandatory field of a support grant (E13) | None | PENDING |
| `21-§14-2` | §8.10 | FEASIBLE | Owner consent step before a support grant becomes active (E13) | None | PENDING |
| `21-§14-3` | §8.10 | FEASIBLE | Minimum module and data scope as grant capabilities (E13) | None | PENDING |
| `21-§14-4` | §8.10 | FEASIBLE | Time bound enforced at each execution (E13) | None | PENDING |
| `21-§14-5` | §8.10 | FEASIBLE | Identified privileged actor; must not be a shared or service-role identity (E13) | None | PENDING |
| `21-§14-6` | §8.10 | FEASIBLE | Audit through the authority event record (E5) | None | PENDING |
| `21-§14-7` | §8.10 | FEASIBLE | Revocation on resolution plus automatic expiry (E13) | None | PENDING |
| `21-§15-1` | §8.11 | FEASIBLE | Risk F-05: first-run creates an Owner business for any session. Check membership and invitations before offering creation (E7) | None | PENDING |
| `21-§15-2` | §8.11 | FEASIBLE | Owner role from membership, never from session (E1) | None | PENDING |
| `21-§15-3` | §8.11 | CONDITIONAL | Cross-business denial holds in repository RLS; must hold for all roles (E2) | G-6 | PENDING |
| `21-§15-4` | §8.11 | FEASIBLE | Entitlement checked independently of session (E8) | None | PENDING |
| `21-§15-5` | §8.11 | FEASIBLE | No admin privilege exists; `/super-admin` must not become one (E13, F-09) | None | PENDING |
| `21-§16-1` | §8.12 | FEASIBLE | Role and entitlement jointly required in the kernel (E8) | None | PENDING |
| `21-§16-2` | §8.12 | FEASIBLE | Negative: no schema create or drop for entitlement state. The repository has none today | None | PENDING |
| `21-§17` | §8.13 | FEASIBLE | Scenario B: per-row RPCs already re-resolve authority, so pre-commit revocation fails closed once the kernel exists. F-04(c) outcome needs E4; mechanism left to the EIS | None | PENDING |
| `21-§18-1` | §8.14 | FEASIBLE | Actor binding exists in the preview-token precedent (E4) | None | PENDING |
| `21-§18-2` | §8.14 | FEASIBLE | Business binding exists in the precedent (E4) | None | PENDING |
| `21-§18-3` | §8.14 | FEASIBLE | Action binding exists in the precedent (E4) | None | PENDING |
| `21-§18-4` | §8.14 | FEASIBLE | Target binding exists in the precedent (E4) | None | PENDING |
| `21-§18-5` | §8.14 | FEASIBLE | Reviewed-state fingerprint exists in the precedent (E4) | None | PENDING |
| `21-§18-6` | §8.14 | FEASIBLE | Expiry exists; permission version to be added (E4) | None | PENDING |
| `21-§19-1` | §8.15 | CONDITIONAL | No grant or revoke audit exists. Add authority event record (E5) | Durability depends on ESC-1 | PENDING |
| `21-§19-2` | §8.15 | CONDITIONAL | Grantor and actor captured in the authority event (E5) | ESC-1 | PENDING |
| `21-§19-3` | §8.15 | CONDITIONAL | Role or capability captured (E5) | ESC-1 | PENDING |
| `21-§19-4` | §8.15 | CONDITIONAL | Scope captured (E5) | ESC-1 | PENDING |
| `21-§19-5` | §8.15 | CONDITIONAL | Timestamps exist on current events; extend to authority events (E5) | ESC-1 | PENDING |
| `21-§19-6` | §8.15 | CONDITIONAL | Security-sensitive resulting action or denial recorded; routine denials not treated as incidents (E5, E7) | ESC-1 | PENDING |
| `21-§19-7` | §8.15 | CONDITIONAL | Temporary elevation and support access recorded (E5, E13) | ESC-1 | PENDING |
| `21-§19-8` | §8.15 | CONDITIONAL | Automation provenance: current `executed_by_actor_type` is pinned to `user` and must be widened (E5, M6) | ESC-1 | PENDING |
| `21-§20-1` | §8.16 | FEASIBLE | Deterministic `PERMISSION_DENIED` without existence disclosure exists in catalog commands; extend to all paths, including RLS-filtered reads (E7) | None | PENDING |
| `21-§20-2` | §8.16 | FEASIBLE | Next-step guidance in denial copy (E7) | None | N/R |
| `21-§20-3` | §8.16 | FEASIBLE | Denial scoped to the action; session and other features continue (E7) | None | N/R |
| `21-§20-4` | §8.16 | FEASIBLE | Non-accusatory copy (E7) | None | N/R |
| `21-§20-5` | §8.16 | FEASIBLE | Escalation only on defined security or abuse criteria; criteria to be defined in the EIS (E7) | None | PENDING |
| `21-§21-1` | §8.17 | FEASIBLE | Negative: no geolocation or activity-tracking code in `src` (Stage 6); kernel adds none | None | N/R |
| `21-§21-2` | §8.17 | FEASIBLE | Negative: no scoring; denial events are not attributed as misconduct (E5, E7) | None | N/R |
| `21-§21-3` | §8.17 | FEASIBLE | Negative: no admin visibility; support access only via E13 | None | PENDING |
| `21-§21-4` | §8.17 | FEASIBLE | Negative: no cross-business analytics; every aggregate query goes through the kernel | None | PENDING |
| `21-§21-5` | §8.17 | FEASIBLE | Capability design for useful work, including Employee self-service (E15) | None | N/R |
| `21-§22` | §8.18 | FEASIBLE | One kernel reused by every surface; risk of parallel checks in server functions (E1, E9) | None | PENDING |
| `21-§23-1` | §8.18 | FEASIBLE | Negative: no UI-only enforcement; every UI capability check mirrors a backend check (E2) | None | PENDING |
| `21-§23-2` | §8.18 | FEASIBLE | Negative: Manager capabilities are explicit; no Owner fallback in the kernel | None | PENDING |
| `21-§23-3` | §8.18 | FEASIBLE | Negative: Employee has useful own-record read (E15) | None | N/R |
| `21-§23-4` | §8.18 | FEASIBLE | Negative: support is scoped and time-bound (E13) | None | PENDING |
| `21-§23-5` | §8.18 | FEASIBLE | Negative: AI and tool calls go through the kernel as the requesting person (E9) | DC-3 | PENDING |
| `21-§23-6` | §8.18 | FEASIBLE | Negative: no subscription-driven schema change (E8) | None | PENDING |
| `21-§23-7` | §8.18 | FEASIBLE | Negative: routine denial is not a security accusation (E7) | None | N/R |
| `21-§24-1` | §8.19 | CONDITIONAL | Owner own-business access works in repository tests; must survive M2 to M4 | G-6 for production | PENDING |
| `21-§24-2` | §8.19 | CONDITIONAL | Cross-business denial is tested for Inventory and catalog import; extend to all touched tables (E12) | G-6; F-06 | PENDING |
| `21-§24-3` | §8.19 | CONDITIONAL | Scenario A: needs E1, E2, E3 and Manager fixtures | G-3 HOLD on inference conclusions only | PENDING |
| `21-§24-4` | §8.19 | FEASIBLE | Needs E2 on `transactions` so that insert does not grant read-all | None | PENDING |
| `21-§24-5` | §8.19 | FEASIBLE | Own-attendance boundary via fixtures (E15) | DC-3 | PENDING |
| `21-§24-6` | §8.19 | FEASIBLE | Ask CFO denial via kernel; natural-language path proven by `SB-P-1.13`/`SB-P-1.15` with this mission's harness | DC-3 | PENDING |
| `21-§24-7` | §8.19 | FEASIBLE | External participant boundary via fixtures (E15) | DC-3 | PENDING |
| `21-§24-8` | §8.19 | FEASIBLE | Scenario B via E4 and per-row re-resolution | None | PENDING |
| `21-§24-9` | §8.19 | FEASIBLE | Joint role and entitlement test (E8, E12) | None | PENDING |
| `21-§24-10` | §8.19 | FEASIBLE | Support access lifecycle test (E13) | None | PENDING |
| `21-§24-11` | §8.19 | FEASIBLE | Automation check test harness (E14) | Runtime proof later missions | PENDING |
| `21-§24-12` | §8.19 | FEASIBLE | Denial experience and no-leak tests (E7) | None | PENDING |

#### Contract 22 — Shared Product Foundations (75 rows)

| Row | Blueprint | Feasibility | Finding and dependencies | Gate or evidence | IR |
|---|---|---|---|---|---|
| `22-§5-1` | §8.20 | FEASIBLE | `businesses` is the business identity; keep it and add membership (E1) | None | PENDING |
| `22-§5-2` | §8.20 | CONDITIONAL | Owner identity through membership plus `owner_id` (E1) | G-4 HOLD on ownership cardinality | PENDING |
| `22-§5-3` | §8.20 | FEASIBLE | Manager identity as membership (E1) | None | PENDING |
| `22-§5-4` | §8.20 | FEASIBLE | Employee identity as membership (E1) | None | PENDING |
| `22-§5-5` | §8.20 | FEASIBLE | Customer identity: one shared record per business, not per feature (E15) | None | PENDING |
| `22-§5-6` | §8.20 | FEASIBLE | Supplier identity: one shared record per business (E15) | None | PENDING |
| `22-§5-7` | §8.20 | FEASIBLE | Delivery Staff identity (E15) | None | PENDING |
| `22-§5-8` | §8.20 | FEASIBLE | `catalog_products` is the product identity; preserved (E11) | None | N/R |
| `22-§5-9` | §8.20 | FEASIBLE | External provider references as business-scoped identity records (E9) | None | PENDING |
| `22-§6-1` | §8.21 | FEASIBLE | UI and workspace use capability-driven rendering backed by the kernel (E7, E2) | None | PENDING |
| `22-§6-2` | §8.21 | FEASIBLE | Design constraint: WhatsApp adapter calls the kernel (E9) | `SB-P-1.20` proof | PENDING |
| `22-§6-3` | §8.21 | FEASIBLE | Design constraint: Conversation Workspace calls the kernel (E9) | `SB-P-1.13` proof | PENDING |
| `22-§6-4` | §8.21 | FEASIBLE | Server functions: both service-role files must resolve through the kernel before service-role writes (E9, F-04) | None | PENDING |
| `22-§6-5` | §8.21 | CONDITIONAL | Database and RLS: kernel policies (E2) | G-6 | PENDING |
| `22-§6-6` | §8.21 | FEASIBLE | Background jobs call the kernel as the delegating actor (E14) | `SB-P-1.15` runtime | PENDING |
| `22-§6-7` | §8.21 | FEASIBLE | Integrations call the kernel (E9) | DC-3 | PENDING |
| `22-§6-8` | §8.21 | CONDITIONAL | Exports and files through the kernel; storage policy state not inspected (E9) | Storage configuration `UNVERIFIED` (G-7) | PENDING |
| `22-§6-9` | §8.21 | FEASIBLE | AI tools act as the requesting person through the kernel (E9) | DC-3 | PENDING |
| `22-§6-10` | §8.21 | FEASIBLE | Negative: feature permissions extend the kernel's capability list, never bypass it | None | PENDING |
| `22-§13-1` | §8.22 | FEASIBLE | Clarify before consequential write; the preview step exists for links and import | None | N/R |
| `22-§13-2` | §8.22 | FEASIBLE | Import preview exists; keep it and bind it (E4) | None | PENDING |
| `22-§13-3` | §8.22 | FEASIBLE | Shared binding pattern (E4) | None | PENDING |
| `22-§13-4` | §8.22 | FEASIBLE | Revalidation at execution (E4, E1) | None | PENDING |
| `22-§13-5` | §8.22 | FEASIBLE | Negative: expiry and permission version make a stale confirmation fail (E4) | None | PENDING |
| `22-§14-1` | §8.23 | FEASIBLE | Raw event retained in `change_payload` and event tables; extend to authority events (E5) | None | PENDING |
| `22-§14-2` | §8.23 | FEASIBLE | Actor captured today; must record non-Owner actors truthfully (E5, M6) | None | PENDING |
| `22-§14-3` | §8.23 | FEASIBLE | Channel is pinned to `dashboard`; widen (E5, M6) | None | PENDING |
| `22-§14-4` | §8.23 | FEASIBLE | Interpretation field for AI or parser-derived actions (E5) | DC-3 | PENDING |
| `22-§14-5` | §8.23 | FEASIBLE | Corrections recorded (`transaction_correction_events`); keep the pattern (E5) | None | PENDING |
| `22-§14-6` | §8.23 | FEASIBLE | Authorized human context field (E5) | None | N/R |
| `22-§14-7` | §8.23 | FEASIBLE | Confirmation reference linked to the binding record (E4, E5) | None | PENDING |
| `22-§14-8` | §8.23 | FEASIBLE | Resulting action recorded today; extend (E5) | None | PENDING |
| `22-§14-9` | §8.23 | FEASIBLE | Timestamps exist; extend (E5) | None | N/R |
| `22-§15` | §8.24 | FEASIBLE | Two idempotency stores exist; generalize and reuse for F-04(c) completion (E6) | Mechanism left to the EIS | PENDING |
| `22-§16-2` | §8.17 | FEASIBLE | Negative: no location capture in the kernel | None | N/R |
| `22-§17` | §8.25 | FEASIBLE | Design constraint: the kernel contract is callable by future integrations without schema change (E9) | None | N/R |
| `22-§19` | §8.25 | FEASIBLE | Design constraint: a kernel failure denies narrowly and does not cascade to unrelated features (E7) | None | PENDING |
| `22-§20-1` | §8.26 | FEASIBLE | Negative: no subscription-driven schema change (E8) | None | PENDING |
| `22-§20-2` | §8.26 | HELD | Append-only history is enforced by triggers on catalog and inventory history, but `transactions` and `transaction_correction_events` can be removed by an Owner business `DELETE` through cascade | ESC-1 (Section 21.1) | PENDING |
| `22-§20-3` | §8.26 | FEASIBLE | Capability through entitlements and grants, not schema (E8) | None | PENDING |
| `22-§20-4` | §8.26 | FEASIBLE | All changes as governed migrations (Section 20.4.2); no execution in this mission | `docs/migration/README.md` | PENDING |
| `22-§21` | §8.27 | FEASIBLE | Kernel resolution on every policy check adds cost. Use indexed membership lookups and stable functions; measure in Full Assurance | None | N/R |
| `22-§22` | §8.27 | CONDITIONAL | Testability through role fixtures and DB suites (E12) | G-5 on required-check status | N/R |
| `22-§23-1` | §8.28 | FEASIBLE | Merchant ownership: business-scoped data and no platform role reading it | None | N/R |
| `22-§23-2` | §8.28 | CONDITIONAL | No cross-business leakage: kernel policies (E2) | G-6 | PENDING |
| `22-§23-3` | §8.28 | FEASIBLE | No routine platform access; only E13 support grants | None | PENDING |
| `22-§23-4` | §8.28 | FEASIBLE | Purpose-limited support access (E13) | None | PENDING |
| `22-§23-5` | §8.28 | FEASIBLE | Staff data limited by role and purpose (E15) | None | PENDING |
| `22-§23-6` | §8.28 | FEASIBLE | Negative: no data sale path; a policy commitment verified by absence of any export to third parties | None | N/R |
| `22-§23-7` | §8.28 | FEASIBLE | Aggregate insight only through governed, kernel-checked queries; none is built here | None | PENDING |
| `22-§27-1` | §8.29 | FEASIBLE | Process: this Blueprint states the features it advances | None | N/R |
| `22-§27-2` | §8.29 | FEASIBLE | Process: shared foundations reused are listed (Section 20.3) | None | N/R |
| `22-§27-3` | §8.29 | FEASIBLE | Process: no AI orchestration or channel adapter consumed | None | N/R |
| `22-§27-4` | §8.29 | FEASIBLE | Process: existing assets not to duplicate are listed (Section 20.2) | None | N/R |
| `22-§27-5` | §8.29 | FEASIBLE | Process: committed work outside this mission is listed (Section 11) | None | N/R |
| `22-§27-6` | §8.29 | FEASIBLE | Process: blockers and dependencies listed (Sections 20.4.3 and 21) | None | N/R |
| `22-§27-7` | §8.29 | FEASIBLE | Process: acceptance evidence listed (Section 15; E12) | None | N/R |
| `22-§28-1` | §8.30 | FEASIBLE | Negative: no Business Memory built here | None | N/R |
| `22-§28-2` | §8.30 | FEASIBLE | Negative: the kernel replaces `resolve_owner_business` and the two `loadOwnedBusinessId` helpers rather than adding a second engine (E1) | None | PENDING |
| `22-§28-3` | §8.30 | FEASIBLE | Negative: no AI orchestrator built here | None | N/R |
| `22-§28-4` | §8.30 | FEASIBLE | Negative: no scheduler built here | None | N/R |
| `22-§28-5` | §8.30 | FEASIBLE | Negative: the existing parser pipeline is reused, not duplicated | None | N/R |
| `22-§28-6` | §8.30 | FEASIBLE | Negative: one customer and supplier identity per business (E15) | None | N/R |
| `22-§28-7` | §8.30 | FEASIBLE | Negative: no GPS foundation | None | N/R |
| `22-§28-8` | §8.30 | FEASIBLE | Negative: no subscription-driven table create or drop (E8) | None | PENDING |
| `22-§28-9` | §8.30 | FEASIBLE | Negative: tool capability is not authority (E9) | None | PENDING |
| `22-§28-10` | §8.30 | FEASIBLE | Negative: no client-specific forks; one kernel and one policy set | None | N/R |
| `22-§29-3` | §8.31 | CONDITIONAL | Services layer proof here (E12); channel-inclusive proof completes in later missions | G-6; DC-3 | PENDING |
| `22-§29-6` | §8.31 | FEASIBLE | Shared customer and supplier identity test (E15) | None | N/R |
| `22-§29-7` | §8.31 | FEASIBLE | Binding and revalidation tests (E4) | None | PENDING |
| `22-§29-8` | §8.31 | FEASIBLE | Idempotency replay tests extend existing ones (E6) | None | PENDING |
| `22-§29-10` | §8.31 | FEASIBLE | Narrow-failure tests for kernel denial and parser failure (E7) | None | N/R |
| `22-§29-11` | §8.31 | FEASIBLE | Entitlement change test asserts no schema change (E8) | None | PENDING |
| `22-§29-12` | §8.31 | CONDITIONAL | Audit retains raw evidence and human context (E5) | ESC-1 for durability | PENDING |
| `22-§29-14` | §8.31 | FEASIBLE | Process: this Blueprint identifies reused foundations first | None | N/R |

#### Contract 20 — Onboarding and First Experience (5 rows)

| Row | Blueprint | Feasibility | Finding and dependencies | Gate or evidence | IR |
|---|---|---|---|---|---|
| `20-§16-1` | §8.32 | CONDITIONAL | The creator of a business becomes its Owner today through `owner_id`; keep that as the initial highest authority and record the Owner membership (E1, M2) | G-4 HOLD on ownership cardinality | PENDING |
| `20-§16-2` | §8.32 | FEASIBLE | Explicit invitation and acceptance creating a membership with assigned capabilities; first-run must check for invitations (E7, F-05) | Onboarding flow is `SB-P-1.19`'s (DC-3) | PENDING |
| `20-§16-3` | §8.32 | FEASIBLE | Negative: default Manager and Employee capability sets exclude Owner intelligence and cost and margin (E1, E3) | None | PENDING |
| `20-§16-4` | §8.32 | FEASIBLE | Design constraint: Owner setup requires no role configuration; delegation is optional and later | None | N/R |
| `20-§23-11` | §8.32 | FEASIBLE | Scenario test: staff setup grants no Owner intelligence (E12) | DC-3 | PENDING |

#### Contract 17 — Operational Dashboard and Manager Workspace (20 rows)

| Row | Blueprint | Feasibility | Finding and dependencies | Gate or evidence | IR |
|---|---|---|---|---|---|
| `17-§13-1` | §8.33 | FEASIBLE | Owner dashboard access through capabilities (E7) | None | PENDING |
| `17-§13-2` | §8.33 | CONDITIONAL | Manager dashboard shows delegated areas only. Dashboard totals are computed client-side from `transactions` rows, so they need E2 | G-3 HOLD on cost and margin inference only | PENDING |
| `17-§13-3` | §8.33 | FEASIBLE | Employee sees permitted operational and self-service surfaces (E15, E7) | None | PENDING |
| `17-§13-4` | §8.33 | FEASIBLE | Negative: external roles hold no dashboard capability (E15) | DC-3 | PENDING |
| `17-§14-1` | §8.33 | FEASIBLE | Design constraint: role-based UI is usability only (E2, E7) | None | PENDING |
| `17-§14-2` | §8.33 | FEASIBLE | Authenticated user enforced in every command and policy today; keep | None | PENDING |
| `17-§14-3` | §8.33 | CONDITIONAL | Business isolation enforced in repository RLS; must hold for all roles (E2) | G-6 | PENDING |
| `17-§14-4` | §8.33 | FEASIBLE | Current role and permission enforced by the kernel (E1) | None | PENDING |
| `17-§14-5` | §8.33 | FEASIBLE | Entitlement enforced where relevant (E8) | None | PENDING |
| `17-§14-6` | §8.33 | FEASIBLE | Object and action scope enforced (E1, E15); `returnTo` allowlist so navigation never implies authority (F-07) | None | PENDING |
| `17-§14-7` | §8.33 | FEASIBLE | Negative: UI changes cannot widen backend access because enforcement is in the kernel and RLS (E2) | None | PENDING |
| `17-§16-1` | §8.33 | FEASIBLE | Stable identifiers for the permission surface this mission adds | None | N/R |
| `17-§18-1` | §8.33 | CONDITIONAL | Negative: no cross-business dashboard data (E2) | G-6 | PENDING |
| `17-§18-2` | §8.33 | CONDITIONAL | Negative: no default staff access to Owner intelligence (E1, E3) | G-3 HOLD on inference only | PENDING |
| `17-§18-4` | §8.33 | FEASIBLE | Negative: sensitive information only to roles with need (E1) | None | PENDING |
| `17-§21-4` | §8.33 | CONDITIONAL | Negative: no Employee visibility into Owner-wide financials; requires E2 on `transactions` | G-3 HOLD on inference only | PENDING |
| `17-§22-2` | §8.33 | CONDITIONAL | Scenario: Manager sees delegated operations only (E12) | G-3 HOLD on inference only | PENDING |
| `17-§22-3` | §8.33 | FEASIBLE | Scenario: Employee limited to permitted surfaces (E12) | None | PENDING |
| `17-§22-9` | §8.33 | CONDITIONAL | Scenario: cross-business denial server-side (E12) | G-6 | PENDING |
| `17-§22-10a` | §8.33 | FEASIBLE | Testable stable identifiers for this mission's surface | None | N/R |

#### Contract 7 — Stock, Supplier and Reorder Intelligence, touched scope (9 rows)

| Row | Blueprint | Feasibility | Finding and dependencies | Gate or evidence | IR |
|---|---|---|---|---|---|
| `7-§7` | §8.34 | FEASIBLE | Negative: one pricing path; selling price stays in `catalog_products` and its event table | None | N/R |
| `7-§9` | §8.34 | FEASIBLE | Negative: one stock engine; `create_inventory_movement` stays the sole stock write path | None | N/R |
| `7-§10-1` | §8.34 | FEASIBLE | Owner stock authority through the kernel (E1) | None | PENDING |
| `7-§10-2` | §8.34 | CONDITIONAL | Manager stock capabilities explicit (E1) | G-3 HOLD on cost and margin inference only | PENDING |
| `7-§10-3` | §8.34 | FEASIBLE | Employee stock capabilities bounded (E1, E15) | None | PENDING |
| `7-§10-4` | §8.34 | FEASIBLE | Supplier bounded participation (E15) | DC-3 | PENDING |
| `7-§12` | §8.34 | FEASIBLE | Catalog and Permission Engine are this mission's shared foundations (E1, E11) | None | PENDING |
| `7-§15-10` | §8.34 | FEASIBLE | Staff permission boundaries on inventory tested with role fixtures (E12) | None | PENDING |
| `7-§15-12` | §8.34 | CONDITIONAL | Cross-business isolation on `inventory_items` and `inventory_movements` is tested today for Owners; extend to roles | G-6 for production; the file 21 status is `UNVERIFIED` | PENDING |

#### Build Plan §7 and §10.1 (18 rows)

| Row | Blueprint | Feasibility | Finding and dependencies | Gate or evidence | IR |
|---|---|---|---|---|---|
| `BP-§10.1-1` | §8.1 | FEASIBLE | Owner, Manager and Employee role model (E1) | None | PENDING |
| `BP-§10.1-2` | §8.2, §8.20 | CONDITIONAL | Membership and shared identity primitives (E1) | G-4 HOLD on ownership-dependent conclusions | PENDING |
| `BP-§10.1-3` | §8.2 | FEASIBLE | Explicit permission matrix as capability data checked by the kernel (E1) | None | PENDING |
| `BP-§10.1-4` | §8.8 | FEASIBLE | Delegated authority boundaries (E1, E14) | None | PENDING |
| `BP-§10.1-5` | §8.13 | FEASIBLE | Execution-time authorization and revalidation (E4) | None | PENDING |
| `BP-§10.1-6` | §8.3 | CONDITIONAL | Isolation and cross-tenant denial (E2) | G-6 | PENDING |
| `BP-§10.1-7` | §8.36 | CONDITIONAL | RLS, grants and function-security review: repository review in Section 20.2; the live review needs separately authorized evidence | G-6 | PENDING |
| `BP-§10.1-8` | §8.36, §13 | CONDITIONAL | Residual `anon` remediation design (E10, M5). Not claimed complete | G-6; T4 `UNVERIFIED` | PENDING |
| `BP-§10.1-9` | §8.36 | CONDITIONAL | Keep the Fast Gate green and extend DB tests (E12) | G-5 required-check governance | N/R |
| `BP-§10.1-10` | §8.12 | FEASIBLE | Entitlement primitives as data (E8) | None | PENDING |
| `BP-§10.1-11` | §8.35 | FEASIBLE | Reclassification as the shared foundation (E11) | None | N/R |
| `BP-§10.1-12` | §8.35 | FEASIBLE | `/catalog` demotion plan keeping structured management until contextual access is proven (E11) | None | N/R |
| `BP-§10.1-13` | §8.35 | CONDITIONAL | No data move is needed; deep links are route paths in `src/routes/_authenticated`. Continuity must be tested on each route change | G-7 for any environment-specific URL facts | N/R |
| `BP-§7-1` | §8.35 | FEASIBLE | Preserve product identity, pricing, tax, SKU and barcode, price history and audit; append-only triggers already protect history | None | PENDING |
| `BP-§7-2` | §8.35 | FEASIBLE | Preserve import foundations; the import path is revised only for authority (E4) | None | PENDING |
| `BP-§7-3` | §8.35 | FEASIBLE | Preserve relationships; catalog-inventory link tables unchanged | None | N/R |
| `BP-§7-4` | §8.35 | FEASIBLE | Negative: no expansion, deletion, collapse into Transactions or Inventory ownership of commercial identity | None | N/R |
| `BP-§7-5` | §8.35 | FEASIBLE | Target treatment recorded as `CORE SHARED FOUNDATION` with `PRESERVE + EVOLVE + DEMOTE SURFACE` (E11) | None | N/R |

#### 20.5.1 Register totals

| Measure | Count |
|---|---|
| `IN SCOPE` rows addressed | 228 of 228 (machine-checked against the FCTM, same IDs and order) |
| `FEASIBLE` | 184 |
| `CONDITIONAL` | 43 |
| `HELD` | 1 (`22-§20-2`, ESC-1) |
| `BLOCKED` (T8) | 0 |
| Independent review `PENDING` | 181 |
| Independent review `N/R` | 47 |

## 21. Engineering Questions, Risks & Recommendations

Stage 7 draft (version 0.4). Nothing in this section answers a Founder question, selects a mechanism the Founder left open, or accepts a finding.

### 21.1 Engineering questions and escalations

| ID | Question | Route | Affected rows | Effect until answered |
|---|---|---|---|---|
| EQ-1 (G-4, S-2) | May one person own more than one business? This decides whether `businesses.owner_id` stays `UNIQUE` and how the kernel treats ownership | Mission Control determines whether a Founder decision is needed | `21-§4-1`, `21-§5-2`, `22-§5-2`, `20-§16-1`, `BP-§10.1-2` | Ownership-cardinality conclusions held. Membership design proceeds under either answer |
| EQ-2 (G-3, S-5) | May a separately delegated Reference Cost or margin value, combined with other visible values, disclose the undelegated one? | Founder clarification or a bounded Mission Control technical-feasibility disposition | `21-§4-2`, `21-§5-4`, `21-§24-3`, `17-§13-2`, `17-§18-2`, `17-§21-4`, `17-§22-2`, `7-§10-2` | Inference conclusions held. Field-level delegation design proceeds |
| ESC-1 (new) | Is Owner deletion of a business a supported product action? In repository files, an Owner may `DELETE` their `businesses` row through the API (policy and grant exist; no UI offers it). The cascade fails where append-only history exists, but otherwise removes `transactions` and `transaction_correction_events`. Deleting the Owner's `auth.users` record also cascades to the business. This bears on `22-§20-2` (durable history) and on the durability of this mission's authority audit | Mission Control, which may route a product question to the Founder. Claude Code has not classified it as T8. Mission Control determines whether it is one | `22-§20-2` (HELD); durability conclusions of `21-§19-1`–`21-§19-8`, `22-§29-12` | Only the durability conclusion is held. Audit capture design proceeds. Evidence is repository DDL only, not executed |
| EQ-3 (G-6, S-3) | Will a read-only production verification of grants, RLS, function and default privileges and migration state be authorized, and must it precede WS-B remediation design being relied on? | Mission Control or Founder | Rows marked G-6 (Section 20.5) | Production-security conclusions stay `UNVERIFIED` |
| EQ-4 (G-5, S-7) | Should database isolation tests become a required check, given that Full Assurance is path-filtered? | Mission Control governance | `BP-§10.1-9`, `22-§22` | Testing design proceeds; required-check status undecided |
| EQ-5 (G-7, S-4) | Which environment and provider facts will be verified, and by whom: test project identity, production project identity and ledger, storage bucket policies, any production-shaped rehearsal copy? | Mission Control | `21-§6-4`, `22-§6-8`, `BP-§10.1-13`; Section 20.4.1 | Topology-specific conclusions not relied on |
| EQ-6 (evidence) | What access-token lifetime is configured for production? It bounds how long a client session exists after revocation, although this design reads authority from the database at every execution | Separately authorized read-only evidence | `21-§17`, `21-§24-8` (informational) | None; the design does not rely on token claims |

The F-04(c) progress, replay and resume mechanism is an EIS selection after Stage 8, not a question for this stage.

### 21.2 Risks

| ID | Risk | Likelihood | Impact | Recommended mitigation |
|---|---|---|---|---|
| ER-1 | Migrating 105 resolver references and 87 policy statements leaves a gap or a permissive policy (DC-2) | Medium | High | Table-family migration with deny-by-default, one kernel, and a policy inventory test that fails on any `anon` or `PUBLIC` policy or grant |
| ER-2 | Service-role paths in two server functions act before or without kernel checks | Medium | High | Kernel call as the first step of each service-role handler; tests with revoked and non-Owner actors |
| ER-3 | Default privileges from `reconcile_default_grants` expose each new object to `anon` unless revoked in the same migration | High if unaddressed | High | Revoke in the same migration; replace the default-privilege clause in M5; inventory test |
| ER-4 | Employee insert permission on `transactions` becomes read-all through a shared policy | Medium | High | Command functions or separate insert and select policies (E2) |
| ER-5 | Reference Cost reaches a Manager through the read, search, list, import or export paths | Medium | High | Capability-selected detail builder on every path; column-level grants (E3) |
| ER-6 | Pinned provenance `CHECK` values reject non-Owner writes, or are loosened too far | High (certain rejection today) | Medium | Governed constraint widening to an enumerated set (M6) |
| ER-7 | Active business inferred from single-ownership lookups gives wrong-business context once memberships exist | High if unaddressed | High | Explicit active business on every call; kernel verification (E1) |
| ER-8 | First-run flow makes an invited person the Owner of an empty business (F-05) | Medium | Medium | Membership and invitation check before creation (E7) |
| ER-9 | Kernel checks on every policy evaluation slow queries | Medium | Medium | Indexed lookups, `STABLE` functions and Full Assurance timing checks (`22-§21`) |
| ER-10 | Live production differs from repository files (T4) | Unknown | High | Separately authorized read-only verification before remediation is relied on (EQ-3) |
| ER-11 | Correlated assumptions between this review and earlier SB-P-1.11 designs | Medium | Medium | Independent review under the MC-33 controls; this review discloses its reliance on the catalog executor and preview-token precedents |

### 21.3 Recommendations for the EIS

These are recommendations only. Mission Control accepts, rejects or routes each one, and the EIS is created only after Stage 8 lock.

1. One kernel resolver replacing `resolve_owner_business` and both `loadOwnedBusinessId` helpers (E1).
2. Membership beside `owner_id`, with the ownership-cardinality conclusion held for EQ-1.
3. Authority read from the database at each execution; no role or capability in JWT claims (F-08).
4. A permission version used by confirmation binding, import batches and automation checks (E1, E4, E14).
5. The preview-token pattern generalized as the shared confirmation-binding foundation (F-11).
6. Reference Cost and margin as independent capabilities on every read path (E3).
7. An append-only authority event record, and widened catalog provenance constraints (E5).
8. Role, revoked-member, external and cross-business fixtures, with DB-level tests for Scenarios A and B and F-04(c) (E12).
9. WS-B revocations and default-privilege replacement planned as M5, relied on only after EQ-3 evidence (E10).
10. `returnTo` allowlist, membership-aware first run, and one calm denial contract (E7).

### 21.4 Dependent holds, gates and T1–T8 screen

**Gates.** G-1 satisfied by the MC-35 activation record (MC-37 verification). G-2 appointment satisfied (MC-33); the independent review is outstanding. G-3 to G-8 keep their recorded statuses and are applied as finding-scoped holds in Section 20.5. `Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force` is carried forward (G-8). S-2 to S-7 remain flagged.

| Trigger | Result of this review |
|---|---|
| T1 unresolved product question | EQ-1 and EQ-2 were already open (G-4, G-3). ESC-1 may be a product question; Mission Control determines it |
| T2 source conflict | None found |
| T3 new product decision | None proposed |
| T4 `PRODUCT-AFFECTING` delta | Historically triggered; unchanged; production `UNVERIFIED` |
| T5 Founder request | None received |
| T6 derived constraint | None new. ESC-1 is recorded for Mission Control rather than treated as a constraint |
| T7 omission, deferral or reclassification | None. All 228 rows stay `IN SCOPE` |
| T8 Product Truth conflict, infeasibility or security finding | None raised by Claude Code. ESC-1 is escalated for Mission Control to determine whether it is one, and its affected row is held |

### 21.5 Independent security review handoff

The appointed Security & Permissions Architecture room reviews in parallel and reports to Mission Control. Claude Code does not write under `specialists/**`, and committing the specialist's findings needs a separate authorization.

First reviewable material, in suggested order:

1. Section 20.2 (repository baseline) and Section 20.3 E1, E2 and E10 (kernel, enforcement and WS-B).
2. Section 20.4.2 (migration classes) and Section 21.2 ER-1 to ER-5.
3. ESC-1 (Section 21.1).
4. Section 20.3 E3, E4 and E13 (cost and margin, confirmation and import, support access).
5. The 181 register rows marked `PENDING` in Section 20.5.

Reliance disclosure for the reviewer: this review relies on the SB-P-1.11 catalog executor-role pattern and the preview-token binding pattern as precedents. Under the MC-33 controls, those are claims to verify, not settled premises.

### 21.6 Status

This Engineering Review is a DRAFT. No finding is accepted. Findings marked `PENDING` cannot be accepted or relied on until the independent review is completed and dispositioned by Mission Control. Mission Control reviews the complete Blueprint, and the Founder resolves product decisions. Stage 8 (Founder approval and Blueprint lock), the EIS, implementation, migration execution, production action, delivery and publication are not authorized.
