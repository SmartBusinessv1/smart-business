# Smart Business — Global Product Completion Register

**Operational role:** AUTHORITATIVE GLOBAL PRODUCT-COMPLETION CONTROL  
**Feature model:** 25 mature feature/foundation contracts  
**Current evidence baseline:** `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/final-reconciliation/07_Current_Implementation_Baseline_Refresh_25_Contract_Model.md`  
**Canonical baseline for this normalization:** `main @ 8103ea46f5027905d2d93ca50d1853ff14ab5aaa`  
**Authority boundary:** This register does not redefine Product Truth. It operationalizes current Product Truth, mature feature contracts, implementation evidence, governed mission history, blockers, and next authorized progress.

---

# 1. Purpose

This file is Mission Control's durable global product-completion register for Smart Business.

It exists so Mission Control can answer, for every confirmed feature or shared foundation:

- What is it?
- Is it Core, Add-on, Separate Product, Build Later, or Reject?
- Is it committed to build?
- How much is actually implemented now?
- What evidence supports that implementation state?
- Which governed Product Mission most recently advanced it, where safely attributable?
- What dependencies remain?
- What exactly is blocked?
- What remains allowed while the blocker exists?
- What is not yet authorized?
- What mission or mission-family should advance it next?
- What is its current runtime/acceptance state?

This register is not a substitute for the mature feature contracts, mission-local records, Product Blueprints, EIS documents, implementation evidence, or formal Mission Control acceptance.

A feature listed as `BUILD NOW` is committed product scope. It is not automatically implemented, verified, pilot-ready, accepted, or released.

---

# 2. Permanent Mission-Control Rule

> **Every SB-P mission must state which confirmed Smart Business features it advances, and Mission Control must maintain the Global Product Completion Register while the mission maintains its local scope and evidence.**

Operational consequences:

1. Every new or amended `SB-P-*` mission shall name the affected feature/foundation contract numbers.
2. A mission may advance one or more contracts, but it does not redefine unrelated contracts.
3. Mission-local completion does not automatically equal feature-family completion.
4. Mission Control updates this register only from verified evidence and accepted mission state.
5. A later mission may advance the same feature again; the register records the latest verified advancing mission while preserving earlier important contributors where useful.
6. If mission attribution is uncertain, the register must say so rather than invent lineage.
7. Builder-only code, historical code, placeholders, green CI, deployment, or a merged PR do not independently prove mature feature completion.

---

# 3. Relationship to Other Anti-Drift Controls

The current controls have different jobs:

- **Feature Definition Library** — defines what each approved feature/foundation is.
- **Feature Definition Library Coverage Matrix** — proves recovered Founder-origin behaviour has a durable destination and detects product-definition loss.
- **Current Implementation Baseline** — records what canonical implementation evidence exists against the mature contracts.
- **Global Product Completion Register** — tracks program-level progress, mission lineage, dependencies, blockers, allowed work, and next advancement across the whole product.
- **Mission-local records** — contain the scope, evidence, lifecycle state, and acceptance history of one governed mission.

No one artifact replaces the others.

---

# 4. Status Vocabulary

## 4.1 Product Classification

- `CORE`
- `ADD-ON`
- `INTERNAL PLATFORM`
- `SEPARATE PRODUCT`
- `REJECT`

Some feature families contain both Core and Add-on packaging paths. Where so, the row states the exact commercial position rather than forcing one label.

## 4.2 Build Commitment

- `BUILD NOW`
- `ADD-ON + BUILD NOW`
- `BUILD LATER`
- `SEPARATE PRODUCT`
- `REJECT`

## 4.3 Product Definition State

All 25 active feature/foundation contracts are now:

`MATURE CONTRACT — COMPLETE & HYDRATED`

The former seed/deep-extraction state is closed.

## 4.4 Implementation State

- `IMPLEMENTED + SUFFICIENTLY ALIGNED`
- `IMPLEMENTED BUT INCOMPLETE`
- `IMPLEMENTED BUT MATERIALLY DIVERGENT`
- `FOUNDATION EXISTS — FEATURE WORKFLOW MISSING`
- `NOT IMPLEMENTED`
- `CANNOT CURRENTLY VERIFY`
- `HISTORICAL / PLACEHOLDER ONLY`

## 4.5 Acceptance State

Unless a mature feature family has completed the governed Product Mission lifecycle and Mission Control acceptance, the default is:

`NOT YET ACCEPTED AS MATURE FEATURE`

Existing accepted lower-level missions or implementation slices remain valid evidence; they do not automatically prove the full hydrated feature contract complete.

---

# 5. Global Product Completion Register

| # | Feature / Foundation | Product classification / commercial position | Build commitment | Current implementation | Latest verified advancing SB-P mission | Dependencies remaining | Exact blocker / gap | Allowed now | Not authorized now | Next advancement | Acceptance state |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Smart Order & Delivery Assistant | Add-on for Ledger + Manager | **ADD-ON + BUILD NOW — before first 10 pilot merchants** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Permissions; Conversation/WhatsApp; AI; customer identity; Ledger; stock; notifications; delivery proof/location boundaries | No canonical order/delivery workflow or data model | Product Blueprint/discovery once prerequisites and sequencing authorize it | Marketplace expansion; continuous tracking; unconfirmed consequential execution | Dedicated Smart Order & Delivery Product Mission before first 10 pilots | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 2 | Ask CFO | Core — Ledger + Manager | **BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Permissions; Business Memory/Ledger; AI orchestration; Conversation channels; reliable query layer | No canonical Ask CFO reasoning/query workflow; dashboard card remains non-functional | Define read-only reasoning contract against authorized data after shared foundations | Autonomous financial decisions or write authority | Daily Intelligence + Ask CFO mission after core data/query/permission foundations | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 3 | Ledger / Business Memory | Core — Ledger + Manager | **BUILD NOW** | `IMPLEMENTED BUT INCOMPLETE` | `SB-P-1.9A` materially advanced transaction experience/integrity slice | Permissions; Conversation/WhatsApp; Human Language; Voice; UDI; AI; R2 media; payments/credit | Canonical implementation is mainly manual sale/purchase + correction audit; mature income/expense/credit/repayment and multimodal Business Memory are incomplete | Preserve transaction integrity and extend additively | Destructive rewrite of working transaction history merely to match new terminology | Mature Ledger / Business Memory expansion after shared conversation/document/reminder foundations | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 4 | Daily Intelligence Rhythm | Core — Ledger + Manager | **BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Ledger/Business Memory; AI; Reminder/Scheduler; permissions; notifications/channels | No canonical 07:00 / 10:30 / 22:00 intelligence workflow | Blueprint/query design using existing trustworthy business data | Fabricated insights, unsupported forecasts, duplicate vertical schedulers | Daily Intelligence + Ask CFO Product Mission | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 5 | Universal Document & Receipt Intelligence / Receipt Cabinet | Core cross-feature foundation | **BUILD NOW** | `FOUNDATION EXISTS — FEATURE WORKFLOW MISSING` | `SB-P-1.11` advanced parser/import infrastructure; later GC work continues parser infrastructure but does not complete UDI | Permissions; AI orchestration; R2 storage; Business Memory; confirmation/action layer | Parser/import primitives exist, but no shared receipt/photo/PDF interpret → preview → clarify → confirm → update workflow or Receipt Cabinet | Reuse parser primitives; design common UDI pipeline; preserve opening-stock builder evidence as provenance | Separate vertical OCR/import brains; direct uncertain OCR writes; promotion of Lovable opening-stock code as-is | Universal Document Intelligence Product Mission | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 6 | Staff / HR Assistant | Add-on — Ledger + Manager | **ADD-ON + BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Mature role permissions; staff identity; point-in-time location/QR; Reminder Engine; documents; payroll boundaries | No employee/attendance/leave/payroll canonical workflow/data model | Product definition/EIS after permissions foundation; non-sensitive identity preparation | Continuous GPS surveillance; automatic wage punishment; unresolved KYC expansion | Staff/HR Product Mission after permissions and shared foundations | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 7 | Stock / Supplier / Reorder Intelligence | Manager core; Smart Stock add-on path for Ledger | **BUILD NOW** | `IMPLEMENTED BUT INCOMPLETE` | `SB-P-1.11` most recently advanced Catalog/Product/Pricing and Inventory linkage; `SB-P-1.10` is major Inventory foundation contributor | UDI; permissions; supplier identity; Reminder/Delegated Automation; AI; POS bridge; Ledger linkage | Strong Inventory + Catalog foundation exists; supplier memory, reorder intelligence/rules, expiry/slow-moving/wastage and mature import path remain incomplete | Extend existing inventory/catalog; preserve auditable movement engine | Rebuild duplicate inventory engine; blind auto-procurement; promote stale Lovable import unchanged | Manager/Stock mission after shared UDI + Reminder + permissions foundations | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 8 | Support Automation / 100+ FAQ | Core support foundation | **BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Human Language; AI; permissions; support identity/escalation; notifications | Error capture exists but no merchant FAQ → AI → human support workflow | Build FAQ corpus and escalation architecture without accessing unnecessary merchant data | Treat technical error logging as customer support completion; broad support data access | Support Automation Product Mission after language/AI/permission foundations | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 9 | Human Language Layer | Core shared foundation | **BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | AI orchestration; Conversation/WhatsApp; language preference/context | No first-class English/Malayalam/Manglish interpretation/clarification layer | Design shared language service used by all channels/features | Feature-specific duplicated language logic; guessing ambiguous meaning | Conversational Foundation Product Mission | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 10 | Conversation Workspace & Channel Independence | Core shared channel | **BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Permissions; AI; Human Language; Voice; UDI; Business Memory; shared action/confirmation layer | No authenticated first-class conversation route/history/workflow | Build shared conversation model and channel-independent intent/action layer | Channel-specific business logic forks | Conversational Foundation Product Mission | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 11 | Smart Reminder & Delegated Automation | Core shared foundation — Ledger + Manager | **BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Permissions; notifications/channels; scheduling/idempotency; Business Memory | No canonical reminder/rule engine or delegated-authority data model | Design one reusable Reminder Engine for compliance, credit, stock, HR and personal business reminders | Independent reminder engines per feature; trigger treated as permission | Reminder + Delegated Automation Product Mission | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 12 | Basic Voice Assistant | Core — Ledger + Manager | **BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Conversation; Human Language; AI; permissions; media storage | No canonical voice input/transcription/short voice reply workflow | Build as modality of shared conversation architecture | Separate voice brain or bypassing permission/confirmation | Conversational Foundation Product Mission | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 12A | Smart Voice Assistant Plus | Add-on — Ledger + Manager | **ADD-ON + BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Basic Voice; AI; conversation memory; entitlements | Basic Voice foundation does not yet exist; exact price unresolved | Define capability boundary and entitlement model without blocking Basic Voice | Build premium duplicate architecture; lock unresolved price as Product Truth | Voice Plus follow-on after Basic Voice/shared conversation foundation | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 13 | POS Connection, Counter Intelligence & Closing Cash | Manager core / standard integration layer | **BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Permissions; Ledger; Inventory; integration adapter; AI signals; dashboard | No canonical POS bridge/counter/closing-cash workflow | Define standard adapter interfaces and respectful review signals | Custom client-specific core POS modification; accusation/punishment | Manager/POS Product Mission after core operational foundations | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 14 | Smart Credit Awareness | Core — Ledger + Manager | **BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Customer identity; Ledger; payments; Reminder Engine; permissions; conversation | Payment method `credit` exists but no customer credit memory, ageing, limits, repayments or owner review | Model warn-not-block credit memory and repayment relationships | Hard automatic blocking by default; AI granting/denying credit authority | Payment Verification + Smart Credit Product Mission | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 15 | Payment Verification & Bank Reconciliation | Core — Ledger + Manager | **BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Ledger; UDI/evidence ingestion; permissions; idempotency; AI/clarification | No canonical evidence matching, verification-state or reconciliation workflow | Design deterministic/idempotent matching with ambiguity review | Treat unverified evidence as settled payment; AI guessing matches | Payment Verification + Smart Credit Product Mission | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 16 | Compliance Shield | Add-on — Ledger + Manager | **ADD-ON + BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Reminder Engine; UDI/R2; permissions; language/channels | No canonical compliance-record/renewal/reminder workflow | Prepare compliance domain using shared Reminder + Document foundations | Legal judgement; duplicated reminder/document engines | Compliance Product Mission after Reminder + UDI foundations | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 17 | Operational Dashboard & Manager Workspace | Manager core; role-appropriate Ledger surfaces | **BUILD NOW** | `IMPLEMENTED BUT INCOMPLETE` | No single mature-feature mission attribution safely established; current dashboard is accumulated early foundation | Permissions; Stock/Supplier; POS; Daily Intelligence; Ask CFO; subscriptions/entitlements | Calm dashboard shell/totals exist; mature Manager operational intelligence and role surfaces do not | Preserve current workspace and expand only from accepted domain capabilities | Treat placeholder cards as implemented features; expose Owner intelligence to staff | Manager layer Product Mission after core domains/permissions mature | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 18 | Subscription, Payment & Account Lifecycle | Core platform commercial capability | **BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Entitlements; payment gateway; account states; export/retention policy; notifications | No canonical subscription/lifecycle model; trial and long-term retention duration partly unresolved | Build safe entitlement/lifecycle states that do not depend on unresolved exact trial/retention numbers | Destructive dynamic schema changes; irreversible deletion rules without Founder decision | Subscription / Account Lifecycle Product Mission | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 19 | Super Admin & Platform Stewardship | Internal platform | **BUILD NOW within approved scope** | `HISTORICAL / PLACEHOLDER ONLY` | No dedicated mature-feature mission yet | Permissions/security; system errors; quarantine; backups; support; subscriptions; observability | `/super-admin` is reserved/placeholder; mature cockpit not implemented | Define privacy-bounded operational cockpit over system metadata/evidence | Routine broad access to merchant private business content; bypass keys as normal operation | Internal Platform / Super Admin Product Mission when dependencies permit | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 20 | Onboarding & First Experience | Core activation/conversion | **BUILD NOW** | `FOUNDATION EXISTS — FEATURE WORKFLOW MISSING` | No dedicated mature-feature mission yet; auth/business-identity foundation exists from earlier Phase 1 work | Auth; business identity; language; plan/entitlement context; support | `/start` remains a placeholder and dashboard setup is not the mature first-experience journey | Build `/start` activation and first-win flow on existing auth/business identity | Revive deprecated `/survey`; duplicate auth/business identity | Onboarding / First Experience Product Mission | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 21 | Permissions, Business Isolation & Role Authority | Core shared foundation | **BUILD NOW** | `FOUNDATION EXISTS — FEATURE WORKFLOW MISSING` | `SB-P-1.11` most recently added domain-specific governed execution/isolation patterns; earlier missions established owner auth/RLS | Role identities; permission schema; execution-time revalidation across all future domains; audit | Current owner-scoped isolation is strong for implemented domains, but mature Owner/Manager/Employee/Supplier/Customer authority model is absent | Expand permission model first; preserve existing RLS/business isolation | Staff/customer/supplier workflows before permission boundaries; AI/tool bypass of permissions | **First governed build mission: Permissions / Role Authority expansion** | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 22 | Shared Product Foundations | Core cross-product architecture | **BUILD NOW** | `IMPLEMENTED BUT INCOMPLETE` | `SB-P-1.11` is latest verified contributor to several canonical shared primitives; many earlier missions also contribute | Permissions; conversation; identities; reminders; notifications; AI; UDI; R2; location; entitlements | Auth/business identity/RLS/audit/idempotency/parser foundations exist, but many shared engines remain absent | Extend shared foundations once and require future missions to reuse them | Duplicate feature-specific engines or hidden parallel sources of truth | Dependency-led shared-foundation missions beginning with Permissions and Conversational Foundation | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 23 | WhatsApp Intelligence & Channel Adapter | Core shared channel adapter | **BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Permissions; AI; Human Language; Voice; UDI; Business Memory; Meta API/config; shared action layer | No canonical governed WhatsApp event/identity/media/action adapter | Design adapter over shared domain services; preserve `/api/whatsapp-webhook` route commitment | WhatsApp-specific duplicate business logic or AI brain | Conversational Foundation Product Mission | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 24 | AI Orchestration & OpenAI Intelligence Foundation | Core shared intelligence foundation | **BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Permissions; Business Memory retrieval; tool schemas; conversation; UDI; language; observability/cost controls | No canonical shared orchestration/tool-routing layer proven across features | Define one permission-aware AI orchestration layer and provider abstraction | Model as database/authority; unrestricted tool access; duplicate feature-specific AI brains | Conversational Foundation Product Mission, then reused by later intelligence missions | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 25 | Document, Media Storage & Retention Foundation | Core shared storage foundation | **BUILD NOW** | `NOT IMPLEMENTED` | No dedicated mature-feature mission yet | Permissions; UDI; R2 integration; Supabase metadata/control plane; lifecycle/export; backup/recovery | R2 is approved architecture direction, but no canonical governed R2-backed media-memory workflow is implemented; exact cancellation/non-payment retention duration remains unresolved | Implement provider adapter/control-plane design and non-destructive lifecycle pieces; use Supabase as authoritative metadata/permission layer | Revive historical 60-day/180-day timings as Product Truth; destructive purge without approved policy | UDI + R2 Storage Foundation implementation mission | `NOT YET ACCEPTED AS MATURE FEATURE` |

---

# 6. Current Program-Level Implementation Reading

No one of the 25 mature contracts is currently proven complete end-to-end against its hydrated contract.

This does not mean Smart Business has no working product. It means implementation is concentrated in strong early foundations and selected operational slices.

## Strongest Current Canonical Foundations

- authentication/session protection;
- business identity;
- protected workspace shell;
- manual sale/purchase transaction entry;
- transaction correction audit;
- dashboard daily totals/recent transactions;
- inventory items and auditable movement ledger;
- catalog/product identity;
- pricing/reference-cost/tax foundations;
- product↔inventory linkage;
- catalog import and parser infrastructure;
- owner-scoped business isolation/RLS for implemented domains;
- audit/idempotency/error-handling patterns.

These foundations are assets. Future missions should extend them rather than rebuild them.

---

# 7. Mission Attribution Rules

`Latest verified advancing SB-P mission` means the latest Product Mission that has evidence of materially advancing the feature or a meaningful canonical slice of it.

It does **not** mean:

- the mature feature is complete;
- that mission owned every capability in the hydrated contract;
- later documentation/historical missions count as implementation advancement;
- a GC correction automatically becomes a new Product Mission;
- builder-only work becomes canonical advancement.

Where attribution cannot be established safely from durable evidence, this register states that no dedicated mature-feature mission is yet attributable.

Important known contributors currently preserved:

- `SB-P-1.9A` — transaction experience/integrity contribution to Ledger/Business Memory;
- `SB-P-1.10` — major Inventory Foundation contribution to Stock/Shared Foundations;
- `SB-P-1.11` — Catalog/Product/Pricing, inventory linkage, parser/import and governed execution contributions affecting Stock, UDI, Permissions and Shared Foundations.

Future Mission Control closure shall update the relevant rows after formal acceptance.

---

# 8. Blocker Interpretation

A blocker must be narrow.

A blocker on one capability does not freeze unrelated approved work.

Examples:

- unresolved Voice Plus price does not block Basic Voice;
- unresolved cancellation retention duration does not block non-destructive R2 adapter/control-plane work;
- unresolved employee KYC scope does not block ordinary staff profile/attendance architecture that does not require sensitive national-ID collection;
- Smart Order & Delivery price does not block definition of its operational workflow;
- marketplace/wholesaler expansion does not block the approved local Smart Order & Delivery add-on.

Mission Control should state both:

- what is blocked;
- what remains allowed.

---

# 9. Current Explicit Reject / Separate-Product Boundaries

These are not implementation gaps and must not be accidentally scheduled as missing core work:

- automatic hard customer-credit blocking by default — `REJECT`;
- AI accusation/punishment — `REJECT`;
- continuous employee GPS surveillance — `REJECT`;
- automatic wage docking/fines — `REJECT`;
- blind supplier procurement without Owner-delegated authority — `REJECT`;
- custom client-specific POS modifications inside core — `REJECT`; use standard integration/extension layers;
- dynamic CREATE/DROP core schema by subscription state — `REJECT`;
- routine broad Super Admin access to merchant private business data — `REJECT`;
- public marketplace behavior for current Smart Order & Delivery — `REJECT`;
- embedded lending/underwriting inside current Smart Business core — `REJECT FOR CURRENT CORE`; any broader ecosystem is a separate Founder decision;
- future wholesaler/marketplace expansion — not current core; requires separate Founder decision and classification.

---

# 10. Current Unresolved Founder Decisions

These remain narrow and must not block unrelated approved work:

1. Free-trial policy.
2. Exact Voice Plus price.
3. Exact Staff/HR price.
4. Exact Smart Stock Assistant price.
5. Exact Smart Order & Delivery price.
6. Exact long-term retention/deletion duration after cancellation/non-payment.
7. Sensitive employee KYC/national-ID necessity, scope, legal basis and privacy boundary.
8. Any broader wholesaler/marketplace ecosystem direction.
9. Any future underwriting/lending ecosystem direction.

Each future mission shall identify whether any unresolved decision is actually in its critical path. If not, the mission must continue without manufacturing a blocker.

---

# 11. Canonical / Lovable Opening-Stock Disposition

The former builder-drift ambiguity is closed by:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/final-reconciliation/06_Canonical_Lovable_Opening_Stock_Inventory_Import_Reconciliation.md`

Current durable disposition:

- product capability: `PRESERVE — STILL CURRENT / BUILD NOW`;
- Lovable code: reusable engineering evidence;
- canonical implementation: not implemented canonically;
- direct promotion: rejected;
- future treatment: narrow rebase + architectural correction + current verification;
- mature path: reuse UDI, bind confirmation to exact previewed target/state, align permissions, preserve inventory audit/idempotency.

This is no longer an unresolved topology question.

---

# 12. Register Update Protocol for Every Future SB-P Mission

## At Mission Initiation

Mission Control shall record:

- contract number(s) advanced;
- current register state before mission;
- intended delta;
- dependencies;
- blockers;
- explicitly allowed work;
- work not authorized.

## During Mission Execution

The mission owns its local scope and evidence. The global register should not be prematurely upgraded because implementation was reported or CI passed.

## At Mission Acceptance

Mission Control shall update the affected row(s) with:

- latest accepted advancing mission ID;
- new implementation state;
- new acceptance state where justified;
- dependencies closed;
- dependencies remaining;
- blocker changes;
- next controlled advancement.

## At Mission Closure

The feature-level status must be evaluated independently from mission-level completion.

A mission can be formally completed while the larger feature remains `IMPLEMENTED BUT INCOMPLETE`.

---

# 13. Next Program Gate

After this register normalization and the 25-contract implementation baseline are merged and verified on `main`, Mission Control may proceed to:

`GOVERNED PRODUCT MISSION SEQUENCING AGAINST THE 25-CONTRACT IMPLEMENTATION BASELINE`

Sequencing must be dependency-led rather than simply following feature numbers.

The current dependency reading indicates the first build wave should begin with:

1. Permissions / Role Authority expansion.
2. Conversational Foundation, including Conversation Workspace, Human Language, Basic Voice, AI Orchestration/OpenAI Intelligence and WhatsApp Intelligence/Channel Adapter.
3. Universal Document Intelligence + Document/Media Storage/R2 foundation.
4. Reminder + Delegated Automation.

Later feature missions consume those shared foundations rather than recreating them.

Mission IDs shall be assigned by Mission Control under the approved lifecycle. This register does not invent future mission IDs.

---

# 14. Final Principle

**Feature Definition tells us what Smart Business must be. Evidence tells us what exists. Missions tell us what was advanced. This register keeps all three aligned so no feature disappears, no partial slice is mistaken for completion, and no blocker becomes an excuse to stop unrelated useful work.**
