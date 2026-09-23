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
| Product problem | Nothing later can be safely built — Manager delegation, Employee self-service, external participants, AI/conversation intake, or any cross-mission foundation — until Smart Business has one durable, testable answer to "who is allowed to do what, to which business, under which entitlement, revalidated at the moment of action." Today that answer does not exist: there is no role/membership schema beyond a single `owner_id` per business, the only authorization check anywhere in the application is session authentication, and a residual overly-broad `anon` privilege grant remains an unresolved security gate. |
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

- gives every person a clear role (Owner, Manager, Employee) or bounded external participation (Supplier, Customer, Delivery Staff) within exactly one business, with no ambient cross-business access;
- expresses permission across every dimension Contract 21 §5 requires — authenticated user, business membership, role, explicit delegated capability, object/record ownership, action type, feature entitlement, channel/context, temporary/purpose-limited grant, and current account/subscription state — not merely a single "logged in" check;
- enforces that permission at the server/database layer as the actual security boundary, with the UI as a secondary convenience only;
- revalidates authority at the moment of execution, not merely at the moment of preview, so a permission revoked between preview and commit blocks the commit (Founder Scenario B);
- binds every consequential confirmation to the exact actor, business, action, target and reviewed state/value it confirmed;
- records who did what, from where, with what interpretation, correction and resulting action, on every security-sensitive event;
- denies calmly, without leaking the protected answer, without accusing the person, and without disrupting the rest of their normal work;
- protects Employees from surveillance and staff-scoring while still letting them do bounded, useful self-service work;
- remediates the residual `anon` privilege exposure (Build Plan §5.1) as a mandatory early security gate;
- reclassifies the Product & Price Master as the core shared foundation Build Plan §7 requires, without deleting existing data or breaking deep links; and
- gives every later Product Mission — Notification, Location, Conversation/AI, Document Intelligence, Reminders, Manager Operations, Onboarding, WhatsApp — one Permission Engine and isolation guarantee to consume, rather than each inventing its own.

## 4. Business Purpose

Smart Business cannot safely delegate work — to a Manager, to an Employee, to an AI assistant acting on a merchant's behalf, or to a future external participant like a Supplier or Delivery Staff member — without first answering, reliably and at the database layer, who that person is and what they are actually allowed to do right now. Today, `businesses.owner_id` is the only authority concept in the schema; the application's sole authorization check is session authentication; and every RLS policy in the repository is written for the single-owner case. This is not a partial implementation of Contract 21's authority model — it is the complete absence of one, confirmed directly by repository inspection (`06-stage2-delta-evidence.md` Part 3 §1).

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

A real authority record for Owner, Manager, Employee, Supplier, Customer and Delivery Staff — today only `businesses.owner_id UNIQUE` exists, structurally allowing exactly one authorized account per business (Delta DC-1). This mission's own membership-model design work resolves DC-1; no specific schema is approved Product Truth here.

### 8.2 Permission Dimensions (`21-§5-1`–`21-§5-10`; `BP-§10.1-2`, `BP-§10.1-3`)

Every access decision must check: authenticated user, business membership, role, explicit delegated capability, object/record ownership and scope, action type (read/create/update/approve/export/admin), feature entitlement, channel/context, temporary/purpose-limited grant, and current account/subscription/security state — ten distinct dimensions, not a single "logged in" gate.

### 8.3 Business Isolation (`21-§6-1`–`21-§6-7`; `BP-§10.1-6`)

Cross-business reads, writes, conversation context, file/document access, exports, and integration mappings are all denied server-side; a client-provided `business_id` is never trusted alone — scope is always derived server-side from the authenticated session.

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

Duplicate/retried external or internal events must not be double-applied — a single integrated rule this mission's own deliverable must satisfy.

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

Owner/Manager/Employee each have defined dashboard access; Customer/Supplier/Delivery Staff have none by default. Role-based UI is a usability layer, never the security boundary — every protected read/write independently enforces authenticated user, business isolation, current role/permission, feature entitlement, and object/action scope, and a UI component change never widens backend access. No cross-business dashboard data; no default staff access to Owner intelligence; no employee visibility into Owner-wide financial intelligence by convenience (directly overlaps `21-§21`). `SB-P-1.17`'s Manager Operations depth sits inside this surface; it does not redefine it.

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

- `SB-P-1.13` — Native Conversation & AI Intelligence Foundation: consumes the Conversation/AI Permission Boundary (`21-§8`) and Ask CFO boundary (`21-§9`); owns Human Language reuse design for the Notification Foundation (`FPDR-1`).
- `SB-P-1.14` — Business Memory, Documents & Durable Media.
- `SB-P-1.15` — Reminder, Daily Intelligence & Ask CFO: owns the Shared Notification Foundation workstream (`FPDR-1`).
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

### Founder Runtime Verification Scenarios (Build Plan §10.1, preserved verbatim — not new scenarios)

- [ ] **Scenario A — Bounded delegation.** Owner grants a Manager a bounded contextual product-price-inventory view capability using the shared Product & Price Master. Manager sees only delegated operational areas. Owner financial surfaces remain denied. Evidence must include UI result plus data-layer/RLS denial evidence.
- [ ] **Scenario B — Revocation invalidates stale action.** Manager begins a consequential preview such as a Product & Price Master bulk-import preview. Owner revokes the relevant permission before commit. Commit must fail because authority is rechecked at execution time; no protected write may occur.

### Authority Model and Permission Matrix

- [ ] Owner, Manager, Employee, Supplier, Customer and Delivery Staff each have a distinct, schema-backed authority concept.
- [ ] Every access decision checks all ten Contract 21 §5 permission dimensions, not session authentication alone.
- [ ] Cross-business reads, writes, conversation context, file/document access, exports and integration mappings are denied server-side for every table this mission's obligations touch.
- [ ] A client-supplied `business_id` is never trusted without independent server-side derivation.
- [ ] Role-based UI is demonstrably a usability layer, not the enforcement boundary — every corresponding backend/database check independently enforces the same decision.

### Delegation, Revalidation and Confirmation

- [ ] Standing automation re-checks its enabling rule, scope, target/action/limits, current entitlement, and absence of revocation on every run.
- [ ] Every consequential confirmation binds the exact actor, business, action, target/object and reviewed state/value.
- [ ] Permission and state are revalidated at execution time, not only preview time.
- [ ] A generic or stale "Yes" never grants unlimited authority.

### Employee Self-Service and External Participants

- [ ] Employees can access their own attendance, correction requests, leave/request status, assigned tasks and other job-specific information without exposure to unrelated staff or Owner intelligence.
- [ ] Supplier, Customer and Delivery Staff participation is bounded per role, never general dashboard access.

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

## 19. Governance History

### FCTM Row-ID to Blueprint Section and Source Traceability

Complete accounting of all 373 canonical FCTM rows (`claude-code/03-stage2-populated-fctm.md`). Contiguous row IDs sharing the same disposition, receiving mission and Blueprint location are grouped with an explicit ID range per Source 18 §3.2 item 2's grouping convention; every row ID is individually named within its range, with zero silent omissions. Historical counts, Founder Decision IDs and source citations match the canonical FCTM exactly.

#### Contract 21 — Permissions, Business Isolation and Role Authority (107 rows, wholly `SB-P-1.12`)

| FCTM Row ID(s) | Disposition | Blueprint location |
|---|---|---|
| `21-§1`–`21-§3` | NOT APPLICABLE (narrative) | Not mapped — narrative/interpretive, informs Sections 1, 4, 5 |
| `21-§4-1`–`21-§4-6` | IN SCOPE | §8.1 |
| `21-§5-1`–`21-§5-10` | IN SCOPE | §8.2 |
| `21-§6-1`–`21-§6-7` | IN SCOPE | §8.3 |
| `21-§7` | IN SCOPE | §8.4 |
| `21-§8`, `21-§9` | IN SCOPE | §8.5 |
| `21-§10-1`–`21-§10-6` | IN SCOPE | §8.6 |
| `21-§11-1`, `21-§11-2` | IN SCOPE | §8.7 |
| `21-§12-1`–`21-§12-5` | IN SCOPE | §8.8 |
| `21-§13-1`–`21-§13-3` | IN SCOPE | §8.9 |
| `21-§14-1`–`21-§14-7` | IN SCOPE | §8.10 |
| `21-§15-1`–`21-§15-5` | IN SCOPE | §8.11 |
| `21-§16-1`, `21-§16-2` | IN SCOPE | §8.12, §10 |
| `21-§17` | IN SCOPE | §8.13, §15 Scenario B |
| `21-§18-1`–`21-§18-6` | IN SCOPE | §8.14 |
| `21-§19-1`–`21-§19-8` | IN SCOPE | §8.15 |
| `21-§20-1`–`21-§20-5` | IN SCOPE | §8.16 |
| `21-§21-1`–`21-§21-5` | IN SCOPE | §8.17, §10 |
| `21-§22` | IN SCOPE | §8.18 |
| `21-§23-1`–`21-§23-7` | IN SCOPE | §8.18, §10 |
| `21-§24-1`–`21-§24-12` | IN SCOPE | §8.19, §15 |
| `21-§25`–`21-§27` | NOT APPLICABLE (historical/provenance/gate) | Not mapped |

#### Contract 22 — Shared Product Foundations (112 rows, split `SB-P-1.12`/`1.13`/`1.14`/`1.15`/`1.18`/`1.20`)

| FCTM Row ID(s) | Disposition | Blueprint location |
|---|---|---|
| `22-§1`–`22-§3` | NOT APPLICABLE (narrative) | Not mapped |
| `22-§4` | ASSIGNED → `SB-P-1.14` | §11 |
| `22-§5-1`–`22-§5-9` | IN SCOPE | §8.20 |
| `22-§6-1`–`22-§6-10` | IN SCOPE | §8.21, §10 |
| `22-§7`, `22-§8` | ASSIGNED → `SB-P-1.13` | §11 |
| `22-§9`, `22-§10` | ASSIGNED → `SB-P-1.14` | §11 |
| `22-§11` | ASSIGNED → `SB-P-1.15` | §11 |
| `22-§12-1`–`22-§12-9` | ASSIGNED → `SB-P-1.15` (`FPDR-1`) | §2, §7, §11, §13 |
| `22-§13-1`–`22-§13-5` | IN SCOPE | §8.22, §10 |
| `22-§14-1`–`22-§14-9` | IN SCOPE | §8.23 |
| `22-§15` | IN SCOPE | §8.24 |
| `22-§16-1` | ASSIGNED → `SB-P-1.18` (`FPDR-2`) | §2, §7, §11, §13 |
| `22-§16-2` | IN SCOPE (unchanged, not reopened) | §8.17, §10, §15 |
| `22-§16-3`–`22-§16-7` | ASSIGNED → `SB-P-1.18` (named instance: attendance/delivery only, `FPDR-3`) | §2, §7, §11, §13 |
| `22-§17` | IN SCOPE | §8.25 |
| `22-§18` | ASSIGNED → `SB-P-1.15` | §11 |
| `22-§19` | IN SCOPE | §8.25 |
| `22-§20-1`–`22-§20-4` | IN SCOPE | §8.26 |
| `22-§21`, `22-§22` | IN SCOPE | §8.27 |
| `22-§23-1`–`22-§23-7` | IN SCOPE | §8.28 |
| `22-§24` | ASSIGNED → `SB-P-1.13` | §11 |
| `22-§25` | DELEGATED (Contract 24 → `SB-P-1.13`) | §11 |
| `22-§26` | DELEGATED (Contract 23 → `SB-P-1.20`) | §11 |
| `22-§27-1`–`22-§27-7` | IN SCOPE | §8.29 |
| `22-§28-1`–`22-§28-10` | IN SCOPE | §8.30, §10 |
| `22-§29-1` | ASSIGNED → `SB-P-1.13`/`SB-P-1.20` | §11 |
| `22-§29-2` | ASSIGNED → `SB-P-1.13` | §11 |
| `22-§29-3` | IN SCOPE (services-layer slice) | §8.31 |
| `22-§29-4` | ASSIGNED → `SB-P-1.15` | §11 |
| `22-§29-5` | ASSIGNED → `SB-P-1.14` | §11 |
| `22-§29-6`–`22-§29-8` | IN SCOPE | §8.31 |
| `22-§29-9` | ASSIGNED → `SB-P-1.18` (unchanged, not reopened) | §11 |
| `22-§29-10`–`22-§29-12` | IN SCOPE | §8.31 |
| `22-§29-13` | ASSIGNED → `SB-P-1.13` | §11 |
| `22-§29-14` | IN SCOPE | §8.31 |
| `22-§30`–`22-§32` | NOT APPLICABLE (historical/provenance/gate) | Not mapped |

#### Contract 20 — Onboarding and First Experience (47 rows, split `SB-P-1.12`/`1.19`)

| FCTM Row ID(s) | Disposition | Blueprint location |
|---|---|---|
| `20-§1`, `20-§2`, `20-§4` | NOT APPLICABLE (narrative) | Not mapped |
| `20-§3` | ASSIGNED → `SB-P-1.19` | §11 |
| `20-§5`–`20-§14` | ASSIGNED → `SB-P-1.19` (`20-§13` shared `SB-P-1.13`; `20-§14` primary `SB-P-1.13`) | §11 |
| `20-§15` | ASSIGNED → `SB-P-1.13`/`SB-P-1.20` | §11 |
| `20-§16-1`–`20-§16-4` | IN SCOPE | §8.32 |
| `20-§17`–`20-§20` | ASSIGNED → `SB-P-1.19` | §11 |
| `20-§21` | NOT APPLICABLE (cross-reference) | Not mapped |
| `20-§22-1`–`20-§22-7` | ASSIGNED → `SB-P-1.19` | §11 |
| `20-§23-1`–`20-§23-10`, `20-§23-12` | ASSIGNED → `SB-P-1.19` (`20-§23-5` shared `SB-P-1.13`; `20-§23-10` shared `SB-P-1.15`) | §11 |
| `20-§23-11` | IN SCOPE | §8.32 |
| `20-§24`, `20-§25` | NOT APPLICABLE (historical/provenance) | Not mapped |
| `20-§26` | NOT APPLICABLE (unresolved Founder question, non-critical-path, carried in Delta document) | Not mapped |
| `20-§27` | NOT APPLICABLE (gate) | Not mapped |

#### Contract 17 — Operational Dashboard and Manager Workspace (53 rows, split `SB-P-1.12`/`1.17`/`1.18`)

| FCTM Row ID(s) | Disposition | Blueprint location |
|---|---|---|
| `17-§1`–`17-§3` | NOT APPLICABLE (narrative) | Not mapped |
| `17-§4` | ASSIGNED → `SB-P-1.17` | §11 |
| `17-§5` | ASSIGNED → `SB-P-1.13` | §11 |
| `17-§6`–`17-§8` | ASSIGNED → `SB-P-1.17` | §11 |
| `17-§9`, `17-§10` | ASSIGNED → `SB-P-1.18` | §11 |
| `17-§11` | ASSIGNED → `SB-P-1.15` | §11 |
| `17-§12` | ASSIGNED → `SB-P-1.14` | §11 |
| `17-§13-1`–`17-§13-4` | IN SCOPE | §8.33 |
| `17-§14-1`–`17-§14-7` | IN SCOPE | §8.33, §10 |
| `17-§15` | ASSIGNED → `SB-P-1.17` | §11 |
| `17-§16-1` | IN SCOPE | §8.33 |
| `17-§16-2` | ASSIGNED → `SB-P-1.17` | §11 |
| `17-§17` | ASSIGNED → `SB-P-1.17` | §11 |
| `17-§18-1` | IN SCOPE | §8.33 |
| `17-§18-2` | IN SCOPE | §8.33, §10 |
| `17-§18-3` | ASSIGNED → `SB-P-1.17` | §11 |
| `17-§18-4` | IN SCOPE | §8.33 |
| `17-§18-5` | ASSIGNED → `SB-P-1.17` | §11 |
| `17-§19` | ASSIGNED → `SB-P-1.17` | §11 |
| `17-§20` | NOT APPLICABLE (cross-reference) | Not mapped |
| `17-§21-1`–`17-§21-3` | ASSIGNED → `SB-P-1.17` | §11 |
| `17-§21-4` | IN SCOPE | §8.33, §10 |
| `17-§21-5` | ASSIGNED → `SB-P-1.17` | §11 |
| `17-§22-1` | ASSIGNED → `SB-P-1.17` | §11 |
| `17-§22-2`, `17-§22-3` | IN SCOPE | §8.33, §15 Scenario A |
| `17-§22-4` | ASSIGNED → `SB-P-1.13` | §11 |
| `17-§22-5`, `17-§22-6` | ASSIGNED → `SB-P-1.17` | §11 |
| `17-§22-7` | ASSIGNED → `SB-P-1.15` | §11 |
| `17-§22-8` | ASSIGNED → `SB-P-1.13` | §11 |
| `17-§22-9` | IN SCOPE | §8.33 |
| `17-§22-10a` | IN SCOPE | §8.33 |
| `17-§22-10b` | ASSIGNED → `SB-P-1.17` | §11 |
| `17-§23`, `17-§24` | NOT APPLICABLE (historical/provenance) | Not mapped |
| `17-§25` | NOT APPLICABLE (gate) | Not mapped |

#### Contract 7 — Stock, Supplier & Reorder Intelligence (36 rows, limited MC-03/MC-04 opening, split `SB-P-1.12`/`1.17`)

| FCTM Row ID(s) | Disposition | Blueprint location |
|---|---|---|
| `7-§1` | NOT APPLICABLE (narrative) | Not mapped |
| `7-§2`–`7-§6` | ASSIGNED → `SB-P-1.17` (`7-§6` shared `SB-P-1.14`) | §11 |
| `7-§7` | IN SCOPE | §8.34 |
| `7-§8-1`–`7-§8-5` | ASSIGNED → `SB-P-1.17` | §11 |
| `7-§9` | IN SCOPE | §8.34 |
| `7-§10-1`–`7-§10-4` | IN SCOPE | §8.34 |
| `7-§11` | ASSIGNED → `SB-P-1.17` (primary)/`SB-P-1.13` (AI kernel) | §11 |
| `7-§12` | IN SCOPE | §8.34 |
| `7-§13`, `7-§14` | ASSIGNED → `SB-P-1.17` | §11 |
| `7-§15-1`–`7-§15-9`, `7-§15-11` | ASSIGNED → `SB-P-1.17` (`7-§15-2` shared `SB-P-1.14`) | §11 |
| `7-§15-10` | IN SCOPE | §8.34 |
| `7-§15-12` | IN SCOPE | §8.34 |
| `7-§16` | ASSIGNED → `SB-P-1.17` | §11 |
| `7-§17` | NOT APPLICABLE (dependency cross-reference) | Not mapped |
| `7-§18` | NOT APPLICABLE (gate) | Not mapped |

#### Build Plan §7 and §10.1 (18 rows, governing sections, wholly `SB-P-1.12`)

| FCTM Row ID(s) | Disposition | Blueprint location |
|---|---|---|
| `BP-§10.1-1`–`BP-§10.1-6` | IN SCOPE | §8.1–§8.3 (anchors) |
| `BP-§10.1-7`–`BP-§10.1-9` | IN SCOPE | §8.36, §13 (T4) |
| `BP-§10.1-10` | IN SCOPE | §8.12 |
| `BP-§10.1-11`–`BP-§10.1-13` | IN SCOPE | §8.35 |
| `BP-§7-1`–`BP-§7-5` | IN SCOPE | §8.35 |

**Total: 373 rows — 228 `IN SCOPE`, 113 `ASSIGNED TO LATER MISSION`, 2 `DELEGATED`, 30 `NOT APPLICABLE`, 0 `ESCALATED`.** Matches the canonical FCTM (`claude-code/03-stage2-populated-fctm.md` §G) exactly; independently re-verified against that file before this table was drafted.

### Institutional Learning Intake Reconciliation

`Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force` (unchanged from the canonical Stage 2 Institutional Learning Intake Record, `claude-code/05-stage2-institutional-learning-intake.md`). This Blueprint applies the same dual-intake discipline: the Phase 1 institutional-memory guide and every validated `organizational-learning/promotions/**` entry current as of the Stage 2 intake baseline remain applicable; no new OLE promotion occurred between Stage 2 and this Stage 4 draft (no drift found on re-check). No conflict identified requiring Mission Control escalation.

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
