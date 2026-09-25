# SB-P-1.12 — Authority, Identity & Product Surface Foundation

## Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.12 |
| Mission Name | Authority, Identity & Product Surface Foundation |
| Mission Type | Foundational Product Mission (Core Authority/Permission Kernel; not a single end-user feature) |
| Lifecycle Stage | Stage 4 — Product Blueprint Sections 1–19 — **DRAFT** |
| Product Blueprint Scope | Metadata, Mission Snapshot, Sections 1–19 (this document only). Sections 20–21, Builder Review, Engineering Review, EIS and implementation are separately authorized later stages. |
| Status | `DRAFT — AWAITING MISSION CONTROL STAGE 5 PRODUCT REVIEW` |
| Product Authority | Founder (Riyas PK) |
| Product Discovery and Drafting | Claude Code, MC-02 appointed Stage 2–4 Definition Actor |
| Constitutional Authority | Source 01 and Source 11 jointly, subordinate to the Lighthouse Constitution (Source 00) |
| Lifecycle Authority | Source 18 v1.2 |
| Upstream Product Dependency | None — this is itself the authority/permission/isolation foundation later missions depend on. Builds on existing session authentication (Supabase Auth) and the existing `owner_id`-scoped RLS pattern established by SB-P-1.10/SB-P-1.11, without treating either as an accepted authority-model dependency. |
| Founder Product Decision Record | [`founder/03-stage3-founder-product-decision-record.md`](../../../communication/missions/SB-P-1.12/founder/03-stage3-founder-product-decision-record.md) — `FPDR-1`–`FPDR-4`, canonical, PR #628, `main@d7110a98a8b843304c81e3803b637a6fc41906e9` |
| Canonical FCTM | [`claude-code/03-stage2-populated-fctm.md`](../../../communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md) — 373 rows: 228 `IN SCOPE`, 113 `ASSIGNED TO LATER MISSION`, 2 `DELEGATED`, 30 `NOT APPLICABLE`, 0 `ESCALATED` |
| Date | 2026-09-23 |
| Builder Review | Not started — separately authorized after Mission Control Stage 5 approval |
| Engineering Review | Not started — Sections 20–21 remain absent from this document |
| Founder Approval | Not yet sought — Stage 5–8 review precedes any Founder Sections 1–19 approval |
| Mission Control Review | Pending — Stage 5 Product Review, including the Source 18 §3.2 item 6 FCTM completeness test (Gate 10) and Institutional Learning Intake confirmation |
| Blueprint Lock | Not applied |
| Next Lifecycle Gate | Mission Control Stage 5 Product Review of Sections 1–19; Stage 6 Builder Review and Stage 7 Engineering Review (with the still-unappointed independent Security & Permissions Architecture specialist) follow only after Stage 5 approval |

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
