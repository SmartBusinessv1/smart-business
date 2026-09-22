# SB-P-1.12 — Stage 2 Populated FCTM

**Status:** `POPULATED — MISSION CONTROL REVIEW REQUIRED`. Source 18 §3.2/§6 Stage 2. Every numbered section of Contracts 21, 22, 20, 17 and the limited Contract 7 opening, every one of their 60 numbered acceptance scenarios, and Build Plan §7/§10.1's obligations are represented below, cross-checked against the independent inventory in `04-stage2-obligation-inventory.md`. This is Product Truth accounting, not a redesign: no row here changes an approved requirement's build commitment, commercial classification or mission assignment without a cited Founder Decision ID, and none carries one.

**Baseline:** `main@dc5fe69f14843002b46af6ef4116935cc36b6c68`, 2026-09-22. Contract blob SHAs are those recorded in `04-stage2-obligation-inventory.md` §1, re-verified unchanged from the Stage 1 intake baseline.

**Row ID convention:** `<contract>-§<section>` for a section-level row; `<contract>-§<section>-<ordinal>` for an acceptance-scenario row; `BP-§<section>-<ordinal>` for a Build Plan-sourced row (per the Stage 1 proposal, `03-stage1-fctm-open.md` §5, adopted here).

**Disposition vocabulary used below** (Source 18 §3.2 item 3): `IN SCOPE`, `ASSIGNED TO LATER MISSION` (names the owning mission and its Build Plan §9 citation), `DELEGATED` (names the owning contract/mission), `NOT APPLICABLE` (narrative/non-normative section), `OUT OF BUILD SCOPE` (not used below — no row here carries a `BUILD LATER`/`SEPARATE PRODUCT`/`REJECT` commitment). No row is `UNRESOLVED FOUNDER DECISION` or `ESCALATED` — see Part 4 in `06-stage2-delta-evidence.md` for why.

**Evidence column shorthand:** `NEW` = current repository state does not yet implement this obligation (Delta evidence in `06-stage2-delta-evidence.md`); `PARTIAL` = a related but incomplete precedent exists, cited; a mission ID = existing accepted-mission precedent contributing partial evidence (never `ALREADY DEMONSTRATED` unless the *exact* obligation was itself accepted evidence, per Source 18 §3.2 item 8 — none of SB-P-1.12's own rows qualify, since Contracts 21/17§13-14/20§16/22§5-6 were never themselves the subject of an accepted mission's FCTM).

---

## A. Contract 21 — Permissions, Business Isolation and Role Authority (wholly assigned to SB-P-1.12; no other mission in Build Plan §9 lists Contract 21)

| Row ID | Section | Disposition | Evidence |
|---|---|---|---|
| 21-§1 | Feature Identity | NOT APPLICABLE — narrative, no separately verifiable obligation | — |
| 21-§2 | Founder Problem Statement | NOT APPLICABLE — narrative | — |
| 21-§3 | Lighthouse Principles | NOT APPLICABLE — interpretive; implemented through the operative sections below, not independently | — |
| 21-§4 | Core Authority Model (Owner/Manager/Employee/Supplier/Customer/Delivery Staff) | IN SCOPE — NOT YET IMPLEMENTED | `NEW`. Schema has only `businesses.owner_id` (1:1 UNIQUE); no Manager/Employee/business-membership table exists (`supabase/migrations`, confirmed via targeted search for `business_members`/`user_roles`/`roles`/`staff`/`employees` — no matches) |
| 21-§5 | Permission Dimensions | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§6 | Business Isolation | IN SCOPE — PARTIALLY DEMONSTRATED for owner-only isolation; multi-role isolation not built | `PARTIAL` — RLS policies scope every protected table to `owner_id = auth.uid()`; no Manager/Employee-scoped policy exists |
| 21-§7 | Server-side Authorization | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — RLS is the enforcement layer today (owner-only); `src/routes/_authenticated/route.tsx` gates only on session authentication, no role check |
| 21-§8 | Conversation / AI Permission Boundary | IN SCOPE — the Permission Engine's design must anticipate this; conversational/AI enforcement itself is downstream (SB-P-1.13/1.20) | `NEW`. No Conversation Workspace or WhatsApp intake exists yet at this baseline |
| 21-§9 | Ask CFO / Owner Intelligence | IN SCOPE — the Permission Engine must define this boundary now; Ask CFO's own build is SB-P-1.15 (Build Plan §9) | `NEW` |
| 21-§10 | Employee Self-service | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§11 | Permission-scoped Transaction / Operational Contribution | IN SCOPE — NOT YET IMPLEMENTED | `NEW`. `transactions` grants `SELECT, INSERT` to `authenticated` broadly with owner-scoped RLS only; no employee-scoped creation policy exists |
| 21-§12 | Delegated Automation Authority | IN SCOPE — the authority/revalidation rule itself; the Reminder Engine it will gate is SB-P-1.15's build | `NEW` |
| 21-§13 | Supplier / Customer / Delivery Participation | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§14 | Temporary / Purpose-limited Support Access | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§15 | Authentication vs Authorization | IN SCOPE — PARTIALLY DEMONSTRATED (authentication only) | `PARTIAL` — Supabase auth session exists; no membership/role/entitlement check anywhere in the authenticated route gate |
| 21-§16 | Feature Entitlements | IN SCOPE — NOT YET IMPLEMENTED | `NEW`. No entitlement/subscription-plan gating schema found |
| 21-§17 | Permission Changes and Runtime Revalidation | IN SCOPE — NOT YET IMPLEMENTED | `NEW`. This is Founder Scenario B's core obligation |
| 21-§18 | Confirmation Binding | IN SCOPE — NOT YET IMPLEMENTED for authority confirmation; idempotency-key confirmation exists for unrelated domain writes | `PARTIAL` — SB-P-1.11's `catalog_write_idempotency_keys` binds a write to actor/state, a reusable pattern, not the same as authority confirmation |
| 21-§19 | Auditability | IN SCOPE — PARTIALLY DEMONSTRATED for domain-write audit; no permission-grant/revoke audit exists | `PARTIAL` — `catalog_audit_events`, `transaction_correction_events` exist (SB-P-1.10/1.11); no permission-event audit table exists |
| 21-§20 | Error and Denial Behavior | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§21 | Privacy and Dignity | IN SCOPE — forward design constraint; no violation exists because no staff-facing surface exists yet | `NEW` |
| 21-§22 | Shared Foundation Reuse | IN SCOPE — architectural mandate on this mission's own deliverable | — |
| 21-§23 | Explicit Non-goals | IN SCOPE — negative/must-not-appear check (6 items) for the eventual Verification Checklist | — |
| 21-§24-1 | Acceptance scenario 1: Owner accesses own-business Owner-authorized data | IN SCOPE — PARTIALLY DEMONSTRATED for the owner-only case | `PARTIAL` — existing owner-scoped RLS |
| 21-§24-2 | Acceptance scenario 2: cross-business query/write denied server-side | IN SCOPE — PARTIALLY DEMONSTRATED for existing owner-scoped tables | `PARTIAL` |
| 21-§24-3 | Acceptance scenario 3: Manager sees only delegated capabilities | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — Founder Scenario A |
| 21-§24-4 | Acceptance scenario 4: Employee adds approved transaction, no Owner analytics | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§24-5 | Acceptance scenario 5: Employee sees own attendance if permitted | IN SCOPE — NOT YET IMPLEMENTED (no attendance feature exists; SB-P-1.18 builds Staff/HR) — the *permission mechanics* are SB-P-1.12's, the *attendance feature* is SB-P-1.18's | `NEW` |
| 21-§24-6 | Acceptance scenario 6: Employee cannot gain Ask CFO via NL prompt | IN SCOPE — NOT YET IMPLEMENTED (no Ask CFO/AI exists yet; the permission gate is SB-P-1.12's) | `NEW` |
| 21-§24-7 | Acceptance scenario 7: external participant sees only own bounded data | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§24-8 | Acceptance scenario 8: permission revoked after preview blocks execution | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — Founder Scenario B |
| 21-§24-9 | Acceptance scenario 9: entitlement plus role both enforced | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§24-10 | Acceptance scenario 10: temporary support access scoped/audited/revoked | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§24-11 | Acceptance scenario 11: standing automation cannot exceed delegated scope | IN SCOPE — NOT YET IMPLEMENTED (no automation engine exists) | `NEW` |
| 21-§24-12 | Acceptance scenario 12: normal denial respectful, no data leak | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§25 | Historical Corrections / Superseded Behavior | NOT APPLICABLE — historical provenance | — |
| 21-§26 | Provenance and Hydration Coverage | NOT APPLICABLE — provenance narrative | — |
| 21-§27 | Completion Gate | NOT APPLICABLE — synthesis of the sections above, not its own separately verifiable obligation | — |

**Contract 21 row count: 27 section rows + 12 scenario rows = 39.**

---

## B. Contract 22 — Shared Product Foundations (split across SB-P-1.12/1.13/1.14; Build Plan §9 lists Contract 22 under all three)

| Row ID | Section | Disposition | Evidence |
|---|---|---|---|
| 22-§1 | Feature Identity | NOT APPLICABLE — narrative | — |
| 22-§2 | Founder Problem Statement | NOT APPLICABLE — narrative | — |
| 22-§3 | Lighthouse Principles | NOT APPLICABLE — interpretive | — |
| 22-§4 | Business Memory Foundation | ASSIGNED TO LATER MISSION — `SB-P-1.14` (Build Plan §9 row 3: "Business Memory, Documents & Durable Media"; §10.3) | `PARTIAL` precedent only — Ledger/`transactions` exists from SB-P-1.10/1.11 but full one-authoritative-memory-model completion is SB-P-1.14's stated outcome |
| 22-§5 | Identity Foundation | IN SCOPE — matches SB-P-1.12's own "shared identity primitives" outcome (Build Plan §9 row 1) | `NEW` |
| 22-§6 | Permission / Business Isolation Foundation | IN SCOPE — the cross-surface generalization of Contract 21 | `NEW` |
| 22-§7 | Conversation / Intent-Action Foundation | ASSIGNED TO LATER MISSION — `SB-P-1.13` (Build Plan §9 row 2; §10.2 "shared AI/tool/confirmation/action kernel") | `NEW` (no Conversation Workspace exists yet) |
| 22-§8 | Human Language Foundation | ASSIGNED TO LATER MISSION — `SB-P-1.13` (§10.2 names "Human Language") | `NEW` |
| 22-§9 | Universal Document Intelligence Foundation | ASSIGNED TO LATER MISSION — `SB-P-1.14` (§10.3 names "UDI") | `PARTIAL` — SB-P-1.11's Catalog import parser (`parser_preview_guards`, `parser_upload_leases`) is a domain-specific precedent, not the general UDI foundation |
| 22-§10 | Document / Receipt Memory Foundation | ASSIGNED TO LATER MISSION — `SB-P-1.14` (§10.3 names "Receipt Cabinet, governed document/media storage") | `NEW` |
| 22-§11 | Reminder / Delegated Automation Foundation | ASSIGNED TO LATER MISSION — `SB-P-1.15` (Build Plan §9 row 4; §10.4 "Reminder, Daily Intelligence") | `NEW` |
| 22-§12 | Notification Foundation | **IN SCOPE by default — no explicit Build Plan §9–12 naming source found for this specific foundation; flagged for Mission Control confirmation of owning mission (Part 4, `06-stage2-delta-evidence.md`)** | `NEW` |
| 22-§13 | Confirmation / Clarification Foundation | IN SCOPE — the general form of Contract 21 §18/Founder Scenario B | `NEW` |
| 22-§14 | Audit / Human Context Foundation | IN SCOPE — general form of Contract 21 §19 | `PARTIAL` — see 21-§19 |
| 22-§15 | Idempotency / Duplicate Protection | IN SCOPE — PARTIALLY DEMONSTRATED for the domains that already exist | `PARTIAL` — `catalog_write_idempotency_keys`, `inventory_movement_idempotency_keys` (SB-P-1.10/1.11 accepted evidence for those domains only; not re-asserted here as `ALREADY DEMONSTRATED` for the general cross-feature obligation) |
| 22-§16 | Location Foundation | **IN SCOPE by default — no explicit naming source found; likely consumers are Contract 1/6 under `SB-P-1.18` (Build Plan §9 row 7), but the *foundation* itself is not explicitly assigned; flagged for Mission Control (Part 4)** | `NEW` |
| 22-§17 | Integration / Extension Foundation | IN SCOPE — design constraint on this mission's own deliverable; directly touches Product & Price Master's POS/Orders boundary (Build Plan §7) | `NEW` |
| 22-§18 | Scheduler / Background Job Foundation | ASSIGNED TO LATER MISSION — `SB-P-1.15` (§10.4 names Daily Intelligence as this section's primary use case) | `NEW` |
| 22-§19 | Error and Narrow-failure Foundation | IN SCOPE — design constraint on this mission's own deliverable | — |
| 22-§20 | Data / Schema Stability Principle | IN SCOPE — directly touches Product & Price Master reconciliation (Build Plan §7) | — |
| 22-§21 | Performance Foundation | IN SCOPE — design constraint | — |
| 22-§22 | Platform Quality / Testability | IN SCOPE — design constraint | — |
| 22-§23 | Privacy / Data Ownership Foundation | IN SCOPE — ties directly to Contract 21's privacy sections | — |
| 22-§24 | AI Authority Foundation | ASSIGNED TO LATER MISSION — `SB-P-1.13` (AI kernel's own behavior limits; SB-P-1.12 supplies the Permission Engine it must respect, covered at 21-§8/§9) | `NEW` |
| 22-§25 | AI Orchestration / OpenAI Intelligence Foundation | DELEGATED — names Contract 24 explicitly, owning mission `SB-P-1.13` (Build Plan §9 row 2) | — |
| 22-§26 | Dedicated Channel Adapter Contracts | DELEGATED — names Contract 23 explicitly, owning mission `SB-P-1.20` (Build Plan §9 row 9) | — |
| 22-§27 | Dependency Rule for Product Missions | IN SCOPE — process obligation on every mission including this one; this Mission Truth Pack is partial compliance evidence | — |
| 22-§28 | Explicit Non-goals | IN SCOPE — negative/must-not-appear check | — |
| 22-§29-1 | Scenario 1: WhatsApp/Workspace share one Business Memory/action truth | ASSIGNED TO LATER MISSION — `SB-P-1.13`/`SB-P-1.20` (channel proof); SB-P-1.12 must not violate it | `NEW` |
| 22-§29-2 | Scenario 2: one permission-aware AI orchestration path | ASSIGNED TO LATER MISSION — `SB-P-1.13` | `NEW` |
| 22-§29-3 | Scenario 3: cross-business access blocked consistently across channels/services/AI tools | IN SCOPE for the services/Permission-Engine slice; full channel-inclusive proof completes cumulatively in later missions | `NEW` |
| 22-§29-4 | Scenario 4: multiple features reuse one Reminder Engine | ASSIGNED TO LATER MISSION — `SB-P-1.15` | `NEW` |
| 22-§29-5 | Scenario 5: multiple document types reuse one UDI pipeline | ASSIGNED TO LATER MISSION — `SB-P-1.14` | `PARTIAL` precedent, see 22-§9 |
| 22-§29-6 | Scenario 6: customer/supplier identity not duplicated by channel/feature | IN SCOPE — Identity Foundation is this mission's job | `NEW` |
| 22-§29-7 | Scenario 7: consequential confirmation exact and revalidated | IN SCOPE — Founder Scenario B | `NEW` |
| 22-§29-8 | Scenario 8: duplicate external/retry events idempotent | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL`, see 22-§15 |
| 22-§29-9 | Scenario 9: purpose-limited location | ASSIGNED TO LATER MISSION — `SB-P-1.18` (see 22-§16 flag) | `NEW` |
| 22-§29-10 | Scenario 10: feature/provider failure narrowly contained | IN SCOPE — design constraint on this mission's deliverable | — |
| 22-§29-11 | Scenario 11: subscription changes don't destroy core schema | IN SCOPE — ties to 21-§16 and Product & Price Master reconciliation | — |
| 22-§29-12 | Scenario 12: audit retains raw evidence + human context | IN SCOPE — ties to 21-§19 | `PARTIAL` |
| 22-§29-13 | Scenario 13: OpenAI/model outage doesn't corrupt state | ASSIGNED TO LATER MISSION — `SB-P-1.13` | `NEW` |
| 22-§29-14 | Scenario 14: future docs identify reused foundations first | IN SCOPE — process obligation, see 22-§27 | — |
| 22-§30 | Historical Corrections / Superseded Behavior | NOT APPLICABLE | — |
| 22-§31 | Provenance and Hydration Coverage | NOT APPLICABLE | — |
| 22-§32 | Completion Gate | NOT APPLICABLE — synthesis, not its own obligation | — |

**Contract 22 row count: 32 section rows + 14 scenario rows = 46.**

---

## C. Contract 20 — Onboarding and First Experience (split across SB-P-1.12/1.19; Build Plan §9 lists Contract 20 under both)

Only §16 (Permission / Role Setup) matches SB-P-1.12's own required-work-area language (Build Plan §10.1); every other substantive section matches SB-P-1.19's stated required-work-areas (§10.8) essentially one-to-one. Naming source for the split: Build Plan §9 table (both missions listed against Contract 20) read together with §10.1 and §10.8's own required-work-area lists (Source 18 §3.2 item 4).

| Row ID | Section | Disposition | Evidence |
|---|---|---|---|
| 20-§1 | Feature Identity | NOT APPLICABLE — narrative | — |
| 20-§2 | Founder Problem Statement | NOT APPLICABLE — narrative | — |
| 20-§3 | Approved Route and Domain | ASSIGNED TO LATER MISSION — `SB-P-1.19` (§10.8 "`/start` onboarding") | `PARTIAL` — `/start` route exists (`src/routes/start.tsx`); depth unverified |
| 20-§4 | Lighthouse Principles | NOT APPLICABLE — interpretive | — |
| 20-§5 | First-stage Discovery | ASSIGNED TO LATER MISSION — `SB-P-1.19` (§10.8 "progressive discovery") | `NEW` |
| 20-§6 | Historical Funnel Evolution — Reconciliation | ASSIGNED TO LATER MISSION — `SB-P-1.19` | — |
| 20-§7 | Product Recommendation / Trust Result | ASSIGNED TO LATER MISSION — `SB-P-1.19` (§10.8 "understandable product recommendation") | `NEW` |
| 20-§8 | Business Identity Setup | ASSIGNED TO LATER MISSION — `SB-P-1.19` (§10.8 "Business Identity continuity") | `PARTIAL` — `businesses` table/creation exists from SB-P-1.10 baseline |
| 20-§9 | Existing Data Import | ASSIGNED TO LATER MISSION — `SB-P-1.19` (§10.8 "UDI-assisted import") | `PARTIAL` — Catalog CSV import exists (SB-P-1.11), domain-specific |
| 20-§10 | Activation / Commercial Step (incl. unresolved trial policy) | ASSIGNED TO LATER MISSION — `SB-P-1.19` (§10.8 "subscription/payment/account lifecycle... trial/no-trial configurability") | `NEW`. Trial policy unresolved (Build Plan §15 item 6/§26) — non-critical-path for SB-P-1.12 |
| 20-§11 | First Practical Win | ASSIGNED TO LATER MISSION — `SB-P-1.19` (§10.8 "first practical win") | `NEW` |
| 20-§12 | First 24-hour Experience | ASSIGNED TO LATER MISSION — `SB-P-1.19` | `NEW` |
| 20-§13 | Conversation-first Onboarding | ASSIGNED TO LATER MISSION — `SB-P-1.19`/`SB-P-1.13` (needs Conversation Workspace) | `NEW` |
| 20-§14 | Human Language | ASSIGNED TO LATER MISSION — `SB-P-1.13`/`SB-P-1.19` | `NEW` |
| 20-§15 | WhatsApp and Conversation Workspace | ASSIGNED TO LATER MISSION — `SB-P-1.13`/`SB-P-1.20` | `NEW` |
| 20-§16 | **Permission / Role Setup** | **IN SCOPE** — squarely SB-P-1.12's own authority/identity remit; the only Contract 20 section named in neither exclusive-onboarding language | `NEW`. No staff-invitation/permission-assignment flow exists |
| 20-§17 | Support During Onboarding | ASSIGNED TO LATER MISSION — `SB-P-1.19` (§10.8 "FAQ-first → AI fallback → human escalation") | `NEW` |
| 20-§18 | Error and Exception Behavior | ASSIGNED TO LATER MISSION — `SB-P-1.19` (§10.8 "recoverable lifecycle/support/platform failures") | `NEW` |
| 20-§19 | Privacy and Trust (incl. employee-KYC note) | ASSIGNED TO LATER MISSION — `SB-P-1.19` for onboarding privacy generally; the employee-KYC unresolved item (Build Plan §15 item 7) is non-critical-path for SB-P-1.12 | `NEW` |
| 20-§20 | Performance and Simplicity | ASSIGNED TO LATER MISSION — `SB-P-1.19` | — |
| 20-§21 | Shared Foundations to Reuse | NOT APPLICABLE for row purposes — a cross-reference list, not itself an obligation; its named foundations (Permission Engine) are covered at 20-§16/Contract 21 | — |
| 20-§22 | Explicit Non-goals | IN SCOPE for the §16 slice only (e.g. "staff setup never default-grants Owner intelligence"); remainder ASSIGNED TO LATER MISSION `SB-P-1.19` | — |
| 20-§23-1 | Scenario 1: reach `/start`, language choice | ASSIGNED TO LATER MISSION — `SB-P-1.19` | `PARTIAL` |
| 20-§23-2 | Scenario 2: discovery → recommendation | ASSIGNED TO LATER MISSION — `SB-P-1.19` | `NEW` |
| 20-§23-3 | Scenario 3: identity created once, persists cross-channel | ASSIGNED TO LATER MISSION — `SB-P-1.19` | `PARTIAL` |
| 20-§23-4 | Scenario 4: CSV import uses preview/confirm | ASSIGNED TO LATER MISSION — `SB-P-1.19` | `PARTIAL` — Catalog precedent |
| 20-§23-5 | Scenario 5: first text/voice transaction confirmation | ASSIGNED TO LATER MISSION — `SB-P-1.19`/`SB-P-1.13` | `NEW` |
| 20-§23-6 | Scenario 6: resume interrupted onboarding | ASSIGNED TO LATER MISSION — `SB-P-1.19` | `NEW` |
| 20-§23-7 | Scenario 7: payment failure doesn't destroy setup | ASSIGNED TO LATER MISSION — `SB-P-1.19` | `NEW` |
| 20-§23-8 | Scenario 8: trial behavior driven by explicit policy | ASSIGNED TO LATER MISSION — `SB-P-1.19`; blocked on the unresolved trial-policy Founder decision (non-critical-path for SB-P-1.12) | `NEW` |
| 20-§23-9 | Scenario 9: first-day real workflow value | ASSIGNED TO LATER MISSION — `SB-P-1.19` | `NEW` |
| 20-§23-10 | Scenario 10: current DI times used, not historical | ASSIGNED TO LATER MISSION — `SB-P-1.19`/`SB-P-1.15` | `NEW` |
| 20-§23-11 | **Scenario 11: staff setup never grants Owner intelligence by default** | **IN SCOPE** — directly SB-P-1.12's §16 permission-setup obligation | `NEW` |
| 20-§23-12 | Scenario 12: support escalation preserves continuity | ASSIGNED TO LATER MISSION — `SB-P-1.19` | `NEW` |
| 20-§24 | Historical Corrections / Superseded Behavior | NOT APPLICABLE | — |
| 20-§25 | Provenance and Hydration Coverage | NOT APPLICABLE | — |
| 20-§26 | Unresolved Founder Questions (trial policy) | NOT APPLICABLE as a row (it is itself the Build Plan §15/§26 unresolved item, carried in Part 4, not disposed here) | — |
| 20-§27 | Completion Gate | NOT APPLICABLE — synthesis | — |

**Contract 20 row count: 27 section rows + 12 scenario rows = 39.**

---

## D. Contract 17 — Operational Dashboard and Manager Workspace (split across SB-P-1.12/1.17; Build Plan §9 lists Contract 17 under both)

Only §13 (Users and Permissions) and §14 (Permission Enforcement) match SB-P-1.12's remit; the Manager-operational-depth sections match `SB-P-1.17`'s stated required-work-areas (§10.6: "mature Manager workspace," "contextual Product & Price Master access") almost exactly.

| Row ID | Section | Disposition | Evidence |
|---|---|---|---|
| 17-§1 | Feature Identity | NOT APPLICABLE — narrative | — |
| 17-§2 | Founder Problem Statement | NOT APPLICABLE — narrative | — |
| 17-§3 | Lighthouse Principles | NOT APPLICABLE — interpretive | — |
| 17-§4 | Workspace Layers | ASSIGNED TO LATER MISSION — `SB-P-1.17` (§10.6 "mature Manager workspace") | `PARTIAL` — `_authenticated/dashboard.tsx` route exists; depth unverified |
| 17-§5 | Conversation Workspace Placement | ASSIGNED TO LATER MISSION — `SB-P-1.13` (Conversation Workspace doesn't exist yet) | `NEW` |
| 17-§6 | Financial / Business Summary | ASSIGNED TO LATER MISSION — `SB-P-1.17` | `NEW` |
| 17-§7 | Inventory / Supplier / Reorder Views | ASSIGNED TO LATER MISSION — `SB-P-1.17` (names Contract 7 directly; §10.6 "supplier identities," "reorder intelligence") | `PARTIAL` — `_authenticated/inventory.tsx` route exists (SB-P-1.10 baseline), not dashboard-integrated reorder views |
| 17-§8 | POS / Counter / Closing Cash Views | ASSIGNED TO LATER MISSION — `SB-P-1.17` (§10.6 "standard POS bridge adapters," "closing-cash comparison") | `NEW` |
| 17-§9 | Staff / HR Views | ASSIGNED TO LATER MISSION — `SB-P-1.18` (Staff/HR add-on, Build Plan §9 row 7) | `NEW` |
| 17-§10 | Order & Delivery Views | ASSIGNED TO LATER MISSION — `SB-P-1.18` (Smart Order & Delivery add-on) | `NEW` |
| 17-§11 | Ask CFO and Daily Intelligence | ASSIGNED TO LATER MISSION — `SB-P-1.15` | `NEW` |
| 17-§12 | Documents and Receipt Cabinet | ASSIGNED TO LATER MISSION — `SB-P-1.14` | `NEW` |
| 17-§13 | **Users and Permissions** | **IN SCOPE** — this mission's Owner/Manager/Employee dashboard-access model | `NEW` |
| 17-§14 | **Permission Enforcement** | **IN SCOPE** — dashboard consumption of the Permission Engine this mission builds | `NEW` |
| 17-§15 | Personalization and Navigation | ASSIGNED TO LATER MISSION — `SB-P-1.17` (adapts to enabled add-ons/role depth this mission does not yet build) | `NEW` |
| 17-§16 | Stable UI/Testability | IN SCOPE for whatever dashboard surface this mission itself touches (§13/§14); ASSIGNED TO LATER MISSION `SB-P-1.17` for the rest | — |
| 17-§17 | Error and Exception Behavior | ASSIGNED TO LATER MISSION — `SB-P-1.17` | `NEW` |
| 17-§18 | Privacy and Trust | IN SCOPE for the permission/Owner-intelligence-default slice (overlaps 21-§21); rest ASSIGNED TO LATER MISSION `SB-P-1.17` | — |
| 17-§19 | Performance Expectations | ASSIGNED TO LATER MISSION — `SB-P-1.17` | — |
| 17-§20 | Shared Foundations to Reuse | NOT APPLICABLE for row purposes — cross-reference list; "Permission Engine" and "shared identities" covered at 17-§13/§14 and Contract 21/22 | — |
| 17-§21 | Explicit Non-goals | IN SCOPE for the permission-visibility non-goals (e.g. "no employee visibility into Owner-wide financial intelligence"); rest ASSIGNED TO LATER MISSION `SB-P-1.17` | — |
| 17-§22-1 | Scenario 1: Owner sees accurate role-authorized summary | ASSIGNED TO LATER MISSION — `SB-P-1.17` (needs Financial/Business Summary, 17-§6) | `NEW` |
| 17-§22-2 | **Scenario 2: Manager sees delegated ops, not non-delegated Owner intelligence** | **IN SCOPE** — direct application of Founder Scenario A at the dashboard surface | `NEW` |
| 17-§22-3 | **Scenario 3: Employee limited to permitted operational/self-service surfaces** | **IN SCOPE** | `NEW` |
| 17-§22-4 | Scenario 4: dashboard and conversation show consistent state | ASSIGNED TO LATER MISSION — `SB-P-1.13` (Conversation Workspace doesn't exist yet) | `NEW` |
| 17-§22-5 | Scenario 5: stock/POS/order modules consume shared services | ASSIGNED TO LATER MISSION — `SB-P-1.17` | `NEW` |
| 17-§22-6 | Scenario 6: one integration failure leaves rest usable | ASSIGNED TO LATER MISSION — `SB-P-1.17` | `NEW` |
| 17-§22-7 | Scenario 7: Ask CFO remains read-only | ASSIGNED TO LATER MISSION — `SB-P-1.15` | `NEW` |
| 17-§22-8 | Scenario 8: Conversation Workspace first-class in nav | ASSIGNED TO LATER MISSION — `SB-P-1.13` | `NEW` |
| 17-§22-9 | **Scenario 9: cross-business access denied server-side** | **IN SCOPE** — direct application of Contract 21 §6 at the dashboard surface | `PARTIAL` — owner-scoped precedent exists; Manager/Employee case does not |
| 17-§22-10 | Scenario 10: testable stable identifiers exist | ASSIGNED TO LATER MISSION `SB-P-1.17` for the Manager-depth surfaces; IN SCOPE for whatever §13/§14 surface this mission adds | — |
| 17-§23 | Historical Corrections / Superseded Behavior | NOT APPLICABLE | — |
| 17-§24 | Provenance and Hydration Coverage | NOT APPLICABLE | — |
| 17-§25 | Completion Gate | NOT APPLICABLE — synthesis | — |

**Contract 17 row count: 25 section rows + 10 scenario rows = 35.**

---

## E. Contract 7 — Stock, Supplier & Reorder Intelligence (limited opening, MC-03/MC-04; blob `65ad91b202def9cb4f42b97383bcc58475f59015`)

Per MC-03, only the touched Product & Price Master / inventory-view / permission-integration surface is opened; per MC-04, all 12 §15 scenarios are individually inventoried and disposed rather than bundled into the untouched-sections bucket.

| Row ID | Section | Disposition | Evidence |
|---|---|---|---|
| 7-§1 | Feature Identity | NOT APPLICABLE — narrative | — |
| 7-§2 | Core Stock Capabilities | ASSIGNED TO LATER MISSION — `SB-P-1.17` (Build Plan §9 row 6) | `PARTIAL` — `inventory_items`/`inventory_movements` schema exists (SB-P-1.10) |
| 7-§3 | Supplier Management | ASSIGNED TO LATER MISSION — `SB-P-1.17` | `NEW` |
| 7-§4 | Reorder Intelligence | ASSIGNED TO LATER MISSION — `SB-P-1.17` | `NEW` |
| 7-§5 | Reorder Authority | ASSIGNED TO LATER MISSION — `SB-P-1.17`; the underlying delegated-automation *authority rule* is 21-§12's job | `NEW` |
| 7-§6 | Imports and Documents | ASSIGNED TO LATER MISSION — `SB-P-1.17`/`SB-P-1.14` (UDI) | `NEW` |
| 7-§7 | **POS Relationship** | IN SCOPE (touched, limited) — this mission's Product & Price Master surface must not create a competing/duplicate stock-linked pricing path; full POS bridge build is `SB-P-1.17`'s | `PARTIAL` |
| 7-§8 | **Ledger Relationship** | IN SCOPE (touched, limited) — Product & Price Master reconciliation must preserve the existing Catalog↔Inventory↔Transactions separation (`docs/implementation/SB-P-1.10-SB-P-1.11-post-completion-continuity.md` §16) | `PARTIAL` — the one-to-one Catalog↔Inventory link and `UNIQUE(business_id, inventory_item_id)` constraint already exist |
| 7-§9 | **Manager vs Ledger Packaging** | IN SCOPE (touched, limited) — Product & Price Master's own packaging must not create a duplicate stock engine | `NEW` |
| 7-§10 | **Roles and Permissions** | IN SCOPE (touched) — directly overlaps this mission's Authority & Identity Kernel (Contract 21 §4) | `NEW` |
| 7-§11 | AI Behaviour | ASSIGNED TO LATER MISSION — `SB-P-1.17`/`SB-P-1.13` | `NEW` |
| 7-§12 | **Shared Foundations** | IN SCOPE (touched) — names "Catalog/Product identity" and "Permission Engine," the exact seam this mission's WS-A/WS-C must keep consistent | — |
| 7-§13 | Failure and Exception Handling | ASSIGNED TO LATER MISSION — `SB-P-1.17` | `NEW` |
| 7-§14 | Privacy and Dignity | ASSIGNED TO LATER MISSION — `SB-P-1.17` | — |
| 7-§15-1 | Scenario 1: opening stock/normal movement history | ASSIGNED TO LATER MISSION — `SB-P-1.17` | `PARTIAL` |
| 7-§15-2 | Scenario 2: document/CSV import preview + idempotency | ASSIGNED TO LATER MISSION — `SB-P-1.17`/`SB-P-1.14` | `PARTIAL` |
| 7-§15-3 | Scenario 3: correction with audit trail | ASSIGNED TO LATER MISSION — `SB-P-1.17` | `PARTIAL` — `inventory_movements` correction precedent exists |
| 7-§15-4 | Scenario 4: low-stock awareness | ASSIGNED TO LATER MISSION — `SB-P-1.17` | `NEW` |
| 7-§15-5 | Scenario 5: expiry/slow-moving signal | ASSIGNED TO LATER MISSION — `SB-P-1.17` | `NEW` |
| 7-§15-6 | Scenario 6: supplier identity/history | ASSIGNED TO LATER MISSION — `SB-P-1.17` | `NEW` |
| 7-§15-7 | Scenario 7: reorder suggestion requiring confirmation | ASSIGNED TO LATER MISSION — `SB-P-1.17` | `NEW` |
| 7-§15-8 | Scenario 8: bounded standing rule executes only within stored authority | ASSIGNED TO LATER MISSION — `SB-P-1.17`; the authority-rule mechanics it relies on are 21-§12's | `NEW` |
| 7-§15-9 | Scenario 9: POS bridge contributes without custom core modification | ASSIGNED TO LATER MISSION — `SB-P-1.17` | `NEW` |
| 7-§15-10 | **Scenario 10: staff permission boundaries** | **IN SCOPE** — MC-04: overlaps this mission's approved authority work directly; disposed individually per MC-04, not bundled with §15 generally | `NEW` |
| 7-§15-11 | Scenario 11: neutral handling of stock discrepancy | ASSIGNED TO LATER MISSION — `SB-P-1.17` | `NEW` |
| 7-§15-12 | **Scenario 12: cross-business isolation** | **IN SCOPE** — MC-04: direct application of Contract 21 §6 to Contract 7's tables; disposed individually per MC-04 | `PARTIAL` — owner-scoped RLS precedent exists on `inventory_items`/`inventory_movements` |
| 7-§16 | Non-goals / Rejected Historical Behaviour | ASSIGNED TO LATER MISSION — `SB-P-1.17` (not this mission's non-goal list) | — |
| 7-§17 | Dependencies | NOT APPLICABLE — cross-reference list; names Contract 21 (this mission's own contract) as a dependency, consistent with the split above | — |
| 7-§18 | Completion Gate | NOT APPLICABLE — synthesis | — |

**Contract 7 row count: 18 section rows + 12 scenario rows = 30.**

---

## F. Build Plan §7 and §10.1 (governing sections, not a 26th contract)

| Row ID | Item | Disposition | Evidence |
|---|---|---|---|
| BP-§10.1-1 | Owner/Manager/Employee role model | IN SCOPE | `NEW`; duplicate of 21-§4, cited here as the mission-plan anchor |
| BP-§10.1-2 | Business membership and shared identity primitives | IN SCOPE | `NEW`; anchors 22-§5 |
| BP-§10.1-3 | Explicit permission matrix | IN SCOPE | `NEW`; anchors 21-§5 |
| BP-§10.1-4 | Delegated authority boundaries | IN SCOPE | `NEW`; anchors 21-§12 |
| BP-§10.1-5 | Execution-time authorization and revalidation | IN SCOPE | `NEW`; anchors 21-§17, Founder Scenario B |
| BP-§10.1-6 | Business isolation / cross-tenant denial | IN SCOPE | `PARTIAL`; anchors 21-§6 |
| BP-§10.1-7 | RLS/grants/function-security review | IN SCOPE | `NEW` — see Delta §WS-B finding |
| BP-§10.1-8 | Residual `anon` privilege remediation | IN SCOPE | `NEW` — see Delta, critical finding: broader than previously recorded |
| BP-§10.1-9 | CI baseline maintained/extended for authority+isolation obligations (Build Plan §5.2) | IN SCOPE | `NEW` — current required check is Markdown Quality Gate only (verified live via GitHub API, 2026-09-22) |
| BP-§10.1-10 | Entitlement primitives where needed | IN SCOPE | `NEW`; anchors 21-§16 |
| BP-§10.1-11 | Product & Price Master reclassification | IN SCOPE | see BP-§7 below |
| BP-§10.1-12 | Safe contextualization/demotion plan for `/catalog` | IN SCOPE | `NEW` — `/catalog` currently exists as a standalone top-level route (`src/routes/_authenticated/catalog*.tsx`) |
| BP-§10.1-13 | Preserve existing valid product/pricing/inventory data and deep-link continuity | IN SCOPE | `PARTIAL` — existing Catalog↔Inventory link/constraint is the preservation baseline |
| BP-§7-1 | Preserve: product identity, pricing, tax, SKU/barcode, price history, audit/history | IN SCOPE | `PARTIAL` — `catalog_products`, `catalog_selling_price_events`, `catalog_tax_events`, `catalog_reference_cost_events`, `catalog_audit_events` already exist (SB-P-1.11) |
| BP-§7-2 | Preserve: import foundations | IN SCOPE | `PARTIAL` — `catalog_import_batches`/`catalog_import_rows` exist |
| BP-§7-3 | Preserve: relationships to POS/Orders/Supplier/UDI/Transactions/reporting | IN SCOPE | `PARTIAL` |
| BP-§7-4 | Do not: independent Catalog expansion, delete valid data, destructive collapse into Transactions, make Inventory sole owner of commercial identity | IN SCOPE — negative/must-not-appear check | — |
| BP-§7-5 | Target treatment: "Product & Price Master — CORE SHARED FOUNDATION," "PRESERVE + EVOLVE + DEMOTE SURFACE" | IN SCOPE | — |

**Build Plan row count: 13 (§10.1) + 5 (§7) = 18.**

---

## G. Row-count reconciliation (Source 18 §3.2 item 6 completeness test)

| Source | Section rows | Scenario rows | Total |
|---|---|---|---|
| Contract 21 | 27 | 12 | 39 |
| Contract 22 | 32 | 14 | 46 |
| Contract 20 | 27 | 12 | 39 |
| Contract 17 | 25 | 10 | 35 |
| Contract 7 (limited) | 18 | 12 | 30 |
| Build Plan §10.1 + §7 | 18 | — | 18 |
| **Total** | **147** | **60** | **208** |

Matches the independent inventory in `04-stage2-obligation-inventory.md` §3 exactly (208 = 208; no coverage gap in either direction).

**Disposition summary:** `IN SCOPE` 112 rows; `ASSIGNED TO LATER MISSION` 78 rows (named mission cited on each); `DELEGATED` 2 rows (Contracts 24, 23); `NOT APPLICABLE` 30 rows (narrative/synthesis sections); `UNRESOLVED FOUNDER DECISION` 0; `ESCALATED` 0. Two `IN SCOPE` rows (22-§12 Notification Foundation, 22-§16 Location Foundation) are flagged as ambiguous-assignment rather than cleanly sourced — see Part 4 in `06-stage2-delta-evidence.md`. No row was reclassified from any prior mission's accepted evidence; no `BUILD NOW` requirement was moved to `BUILD LATER`; no `REJECT` row was revived.

**Effort note for Mission Control calibration (Source 18 §3.2 item 12):** contract-by-contract, the review effort was: Contract 21 (wholly in-mission, deepest read) > Contract 22 (32-section split-assignment analysis) > Contract 20/17 (structurally similar split-assignment pattern once established) > Contract 7 (limited-opening pattern already set by MC-03/MC-04). The two ambiguous-assignment rows (22-§12, 22-§16) took disproportionate effort relative to their eventual `IN SCOPE`-by-default resolution, because Source 18 §3.2 item 4's strict citation requirement for `ASSIGNED TO LATER MISSION` does not tolerate a plausible-sounding later-mission guess.
