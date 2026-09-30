# SB-P-1.12 — Engineering Implementation Specification (EIS)

```text
STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED
PRODUCT BLUEPRINT: APPROVED — LOCKED
EIS: DRAFT / NOT LOCKED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
SCHEMA / SQL / MIGRATIONS: NOT AUTHORIZED
PRODUCTION / PROVIDER MUTATION: NOT AUTHORIZED
```

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.12 |
| Mission Name | Authority, Identity & Product Surface Foundation |
| Related Product Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.12.md`, blob `77d52096c020668311b039721a4de9248ddd460e` (`APPROVED — LOCKED`, Sections 1–21) |
| Canonical FCTM | `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md`, blob `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` (412 rows; 267 `IN SCOPE`) |
| Document Type | Engineering Implementation Specification (EIS), Source 18 Stage 9 |
| Document Version | 0.2 |
| Status | `DRAFT — MISSION CONTROL REVIEW REQUIRED` |
| Author | Claude Code — Source 18 §4.4 EIS owner |
| Authorizing Instruction | `communication/live/instruction1.23.md` (MC-148), work package `SB-P-1.12-WP-STAGE9-EIS-CREATION`; version 0.2 correction under `communication/live/instruction1.24.md` (MC-151), work package `SB-P-1.12-WP-STAGE10-T8-EIS1-CORRECTION` |
| Canonical baseline | `main@24730a684f7ab8d0550066db1ad1acdde0128192` (PR #686 merge; named baseline `e1ecbe39f66509d9606d48f09a86b3c3611d64ad`, differing only by the instruction) |
| Structural precedent | `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` (executor roles, committed rejections, preview binding, idempotency, provenance) |
| Next gate | Stage 10 — EIS Review by Mission Control, with specialist review where applicable |

## 2. Purpose and Authority

This document translates the locked SB-P-1.12 Product Blueprint into an implementation-grade engineering specification for the authority, identity, isolation and Product & Price Master foundation.

The locked Blueprint remains the single source of product truth. Every requirement here implements a Blueprint obligation already fixed by the locked FCTM. The EIS selects engineering mechanisms only where the Blueprint deliberately leaves them open. If any statement here could be read as new merchant-facing behaviour, the Blueprint prevails and this document is in error.

This EIS changes no FCTM disposition, build commitment, commercial classification or mission assignment. It creates no schema, SQL, migration, code, provider setting or production change.

Stage 7 feasibility labels (`FEASIBLE`, `CONDITIONAL`), independent-review labels (`PENDING`, `N/R`) and the completed Stage 7 Security reviews are documentary findings. None of them is implementation evidence, and nothing in this EIS treats them as such (SEC-S7-09).

**Carried-forward holds.**

| Hold | Status in this EIS |
|---|---|
| Blueprint | `APPROVED — LOCKED` |
| R-2 source coverage | CLOSED / SATISFIED |
| ESC-1 | OPEN T8. Section 14 proposes the safe-design direction for Stage 10 review. It is not closed |
| `22-§20-2` | `BLOCKED` / `IN SCOPE`. Section 14.7 states the evidence needed before unblocking can be proposed |
| G-6/T4 production state | `UNVERIFIED` |
| Professional legal, privacy and retention validation | Deferred (Founder Record 06, MC-117) |
| Identity-deletion runtime | Not authorized; Section 15 is design only |

## 3. Canonical Inputs Read

| Input | Identity |
|---|---|
| Locked Blueprint | `completed/SB-P-1.12.md`, blob `77d52096c020668311b039721a4de9248ddd460e` |
| FCTM | blob `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` |
| Stage 7 Engineering Review report | blob `b023b04450869625b75444340785fa5fa6d09a19` |
| Stage 7 gate disposition (MC-144) | `mission-control/26-stage7-final-engineering-review-gate-disposition.md`, blob `6b63f2d48127135806f625b4d0001ee60b4bfe2b` |
| Founder Stage 8 approval | `founder/08-stage8-blueprint-lock-approval.md`, blob `5dcdeb395eb1131699698b83686c86f5e583d84b` |
| Stage 8 lock record (MC-146) | `mission-control/27-stage8-founder-approval-and-blueprint-lock.md`, blob `a57eadc56e8f7e76ea81f4be6c2f7204ffdd7925` |
| Independent Security reports | `specialists/01` (MC-40), `specialists/02` (MC-42), `specialists/03` (MC-44); `communication/live/report1.19.md` (SEC-128-02); `communication/live/report1.21.md` (SEC-137-01 to SEC-137-14) |
| R-2 closure record | `mission-control/25-r2-source-coverage-gate-closure-record.md`, blob `e1c940ae4a6ea87033b58d73c0efe78509a1befa` |
| Founder Records | 03 (`FPDR-1`–`FPDR-4`), 04 (F-02, F-03, F-04(c)), 05 (ESC1-1–ESC1-8), 06 (legal-validation deferral), 07 (§33 ownership split), 09 (Reference Cost and margin permission semantics, blob `84d61d4d62cc33ae81ec372ac725059665ebc9d9`; version 0.2) |
| MC-150 disposition (version 0.2) | `mission-control/28-t8-eis1-founder-decision-disposition.md`, blob `95a5c5df32a09dc3a49e0d0f6366e73331c2af72` |
| Source 18 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `0945bda60a93c99909c3b7a247d5427ebe256011` |
| Repository | 24 migrations under `supabase/migrations/`; `src/integrations/supabase/*`; `src/server-functions/catalog-import.ts`, `parser-lease.ts`; `src/routes/**`; `tests/**`; `.github/workflows/*` at `main@24730a68` |

## 4. Implementation Principles

- **One authority kernel.** Every surface asks one kernel. No feature, channel or later mission builds a parallel permission check (`21-§22`, `22-§28-2`).
- **Authority is read, never carried.** The actor comes from the verified JWT subject; everything else is read from the database at execution time. No role or capability lives in a token, a client store or a request body.
- **Active business is requested, never trusted.** A request names the business it acts in; the kernel proves membership in it.
- **Deny by default, fail closed.** An unprovable state denies. A kernel error denies. New objects start with no client-reachable privilege.
- **Commands are the write boundary.** Protected tables accept writes only through kernel-checked command functions.
- **Expected rejections commit.** Permission, validation and stale-state rejections are committed structured outcomes, so their audit and bookkeeping survive (SB-P-1.11 principle).
- **Authorization holds through the commit.** A consequential command revalidates inside the transaction that writes, serialized against revocation.
- **History does not depend on identity.** No retained business, financial or audit record is deleted, reassigned or orphaned because an identity, membership or Auth user changes. No cascade from identity reaches history.
- **Identity is deleted by governance, never by cascade.** Deletion is an explicit, recorded, eligibility-checked process that de-identifies; it never relies on a foreign-key cascade or a raw delete.
- **Evidence is not implementation.** Documentary review, CI success and feasibility labels are not runtime proof.

## 5. Repository Baseline (at `main@24730a68`)

Repository evidence only. Nothing was executed. Production state is `UNVERIFIED` (G-6, T4).

| Area | Current fact | Source |
|---|---|---|
| Business identity and authority | `businesses.owner_id uuid NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE`. No membership, role, capability, entitlement or grant table | `20260708210504_…` |
| Business delete path | `authenticated` holds `DELETE` on `businesses`; policy "Owners can delete their business" permits it where `auth.uid() = owner_id`. No UI offers it | same file |
| Transaction history | `transactions.creator_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE`, `business_id … ON DELETE CASCADE`; client inserts and reads directly under Owner RLS; Owner `UPDATE` policy for in-place corrections | `20260719102137_…`, `20260719140000_…`, `20260720142204_…` |
| Correction history | `transaction_correction_events.transaction_id … REFERENCES transactions(id) ON DELETE CASCADE`; `edited_by uuid` with no foreign key; no delete guard | `20260720142204_…` |
| Other actor columns | Catalog event tables `authorized_by_user_id`, `catalog_deletion_records.deleted_by_user_id`, inventory `created_by`/`responsible_user_id`: plain `uuid`, no foreign key | SB-P-1.11 stage 1 schema; inventory migrations |
| Business cascades | By Claude Code's inventory, 18 foreign keys to `businesses(id)` use `ON DELETE CASCADE`; catalog, audit, deletion-record, idempotency and inventory-movement tables have immutability triggers that raise on delete | Blueprint §20.2 |
| Authority resolver | `catalog_internal.resolve_owner_business(p_actor)` (`businesses.id WHERE owner_id = p_actor`); `catalog_internal.current_actor_uid()` reads the JWT subject; 105 references across migrations | `20260806120000_…` |
| Catalog commands | 19 public catalog functions `SECURITY DEFINER`, owned by seven `NOLOGIN NOINHERIT` executor roles (`catalog_read`, `identity`, `pricing`, `tax`, `cost`, `link`, `lifecycle` executors) | `20260806130000_…` |
| Provenance | Catalog event tables pin `executed_by_actor_type = 'user'`, `channel = 'dashboard'`, `authority_basis = 'owner_via_businesses.owner_id'` by `CHECK` | `20260806120000_…` |
| Confirmation binding | `catalog_link_preview_tokens` binds actor, business, action, target, state fingerprint, expiry, closure; no permission version | same |
| Idempotency | `catalog_write_idempotency_keys`, `inventory_movement_idempotency_keys` | same; inventory migrations |
| Reference Cost | `catalog_product_read` returns the cost-inclusive builder unconditionally; a cost-free builder exists | `20260806130000_…` |
| Privileged paths | `supabaseAdmin` in `catalog-import.ts` and `parser-lease.ts`; each resolves the business with `loadOwnedBusinessId` (Owner `maybeSingle()`), then uses the service role for batch, row, lease and guard bookkeeping | `src/server-functions/*` |
| Active business in the client | `supabase.from("businesses").select(...).maybeSingle()` in dashboard, catalog, inventory and transactions routes | `src/routes/_authenticated/*` |
| First run | `FirstTimeBusinessSetup` offers business creation to any signed-in user without a business; `returnTo` search parameter is not allowlisted; `/super-admin` is a public placeholder | `dashboard.tsx`, `inventory.index.tsx`, `super-admin.tsx` |
| Default privileges | `reconcile_default_grants` grants `ALL` on six tables and `EXECUTE` on `public` functions to `anon, authenticated, service_role`, and sets default privileges for future `postgres`-owned objects | `20260727000000_reconcile_default_grants.sql` |
| Tests and CI | 28 test files (catalog import 9, inventory 17, parser lease 2), Owner-only fixtures; Fast Gate on every PR; Full Assurance path-filtered against the isolated test environment; Markdown Quality Gate required | `tests/`, `.github/workflows/` |

No repository fact contradicts the locked Blueprint. The locked Blueprint file itself has one formatting defect: a Metadata table row is prepended before the H1 on line 1. It does not affect Product Truth and is reported for Mission Control's attention (Section 21).

## 6. Target Architecture Overview

| Layer | Target |
|---|---|
| Identity | `persons` (stable application identity, key equal to the Auth user ID), `business_memberships`, business-scoped participant identities |
| Authority data | Capability registry, role-default matrix, capability grants, business entitlements, support access grants, delegated automation rules, ownership transfers, invitations |
| Kernel | `authz` schema: `current_actor()`, `authorize(...)`, policy-safe `STABLE` helpers, `resolve_business(actor, requested_business, capability)`, decision records for privileged paths |
| Enforcement | Kernel-based RLS per table family; command functions as the write boundary; executor roles per command group; privileged-operation contract for service-role handlers |
| Binding and integrity | `confirmation_bindings`, shared idempotency, membership-row serialization, import ledger |
| Audit | `authority_events`, committed rejections, out-of-transaction denial recording, widened catalog provenance |
| History integrity (ESC-1) | Actor and owner references point to `persons` without cascades; retained record classes `RESTRICT`; delete guards; governed lifecycle hooks |
| Governed deletion (design only) | Eligibility evaluator, obligation and hold register, record-class registry, de-identification, bounded proof, outbox for provider Auth deletion |
| Client | Capability-driven UI, explicit active-business selector, denial contract, authority-aware first run, Product & Price Master surface |

## 7. Authority and Membership Architecture

### 7.1 Persons

A `persons` row is created for every Auth user at first authenticated contact (and by backfill for every existing Auth user referenced by any table). Its primary key is set to the Auth user ID, so every existing historical actor value is already a valid `persons` key and nothing is rewritten. The row holds status (`active`, `deleted`), the nullable `auth_user_id` link, and minimal profile fields. It is never deleted; governed identity deletion de-identifies it (Section 15).

### 7.2 Memberships and roles

`business_memberships` is the authority source for Owner, Manager and Employee. `businesses.owner_id` remains as a mirror of the active Owner membership during and after migration, maintained only by the create-business and transfer commands, and is never read by the kernel as authority once WS-A3 completes. Multi-business ownership is supported by removing the `UNIQUE` constraint on `owner_id` after every `maybeSingle()` inference is gone (Founder Record 05 ESC1-1; G-4 design).

Supplier, Customer and Delivery Staff are business-scoped participant identities (EIS-ID-03), not memberships with dashboard capability.

### 7.3 Delegation, entitlements, support and automation

Delegated capabilities are explicit grant rows on a membership. Entitlements are business-level feature states read by the kernel. Support access is a separate, consented, time-bounded grant with its own operator identity and audit. Standing automation is a rule tied to its grantor's membership, re-evaluated on every run.

### 7.4 Requirements

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS-ID-01` | Introduce an application-owned `persons` identity whose primary key equals the Supabase Auth user ID at creation and at backfill. It links to `auth.users` through a separate nullable column with a non-cascading rule (Section 14), so the person record, and every historical reference to it, outlives the Auth user. A person row is never deleted; governed identity deletion de-identifies it (Section 15). | `21-§5-1`, `22-§5-2`, `22-§5-3`, `22-§5-4`, `BP-§10.1-2`, `22-§33-2`, `22-§33-23` |
| `EIS-ID-02` | Introduce `business_memberships` (business, person, role `owner`/`manager`/`employee`, status `invited`/`active`/`revoked`/`ended`, grantor, timestamps, end reason, `membership_version`). Exactly one active Owner membership per business (partial unique index). A person may hold memberships, including Owner memberships, in several businesses (Founder Record 05 ESC1-1). | `21-§4-1`, `21-§4-2`, `21-§4-3`, `21-§5-2`, `21-§5-3`, `22-§5-1`, `22-§5-2`, `22-§5-3`, `22-§5-4`, `BP-§10.1-1`, `BP-§10.1-2`, `17-§13-1`, `17-§13-2`, `17-§13-3`, `7-§10-1`, `7-§10-2`, `7-§10-3`, `20-§16-1` |
| `EIS-ID-03` | Represent Supplier, Customer and Delivery Staff as business-scoped participant identities (one shared record per business, not per feature or channel), linked optionally to a `persons` row, with object-scoped capabilities and no dashboard capability. | `21-§4-4`, `21-§4-5`, `21-§4-6`, `22-§5-5`, `22-§5-6`, `22-§5-7`, `17-§13-4`, `7-§10-4`, `22-§28-6`, `22-§29-6` |
| `EIS-ID-04` | Backfill (M2): one active Owner membership per existing `businesses.owner_id`, idempotent and ownership-preserving; `persons` rows for every referenced Auth user. Drop the `UNIQUE` constraint on `businesses.owner_id` only after the kernel no longer infers "the" business from it. `owner_id` becomes a non-authoritative mirror of the active Owner membership, maintained only by the create-business and transfer commands. | `21-§4-1`, `22-§5-2`, `20-§16-1`, `BP-§10.1-13` |
| `EIS-ID-05` | Keep `catalog_products` as the product identity. External integration and provider references are business-scoped identity records bound by composite `(business_id, id)` keys. | `22-§5-8`, `22-§5-9`, `21-§6-6` |
| `EIS-ID-06` | Active business is explicit requested context on every command, RPC, server function and policy evaluation; the kernel verifies membership in it. No path infers the business from "the one business this person owns" (today's `maybeSingle()` lookups), and a client-supplied `business_id` is never trusted alone. | `21-§6-7`, `21-§15-1`, `21-§15-3`, `BP-§10.1-6` |
| `EIS-AUT-01` | Delegated automation rules reference the grantor membership, capability, target and limits. Every run re-evaluates through the kernel: rule enabled; grantor still holds the capability; actor and business scope; exact target, action and limits; current entitlement and state; no revocation since grant. Runs record automation provenance. | `21-§12-1`, `21-§12-2`, `21-§12-3`, `21-§12-4`, `21-§12-5`, `BP-§10.1-4`, `21-§24-11`, `22-§6-6`, `22-§28-4`, `21-§19-8` |
| `EIS-SUP-01` | Temporary support access grants: business, operator identity, legitimate purpose, consent by an authorized business actor, minimum modules, start and expiry, revocation on resolution, full audit. There is no standing platform role that reads merchant data. | `21-§14-1`, `21-§14-2`, `21-§14-3`, `21-§14-4`, `21-§14-5`, `21-§14-6`, `21-§14-7`, `21-§24-10`, `22-§23-3`, `22-§23-4`, `21-§21-3`, `21-§23-4`, `21-§19-7`, `21-§15-5` |
| `EIS-EXT-01` | Employee self-service uses own-record predicates (own attendance, correction requests, leave or request status, assigned work, job-specific information) and never exposes unrelated staff or Owner intelligence. The underlying features belong to later missions; this mission provides the capability and predicate. | `21-§10-1`, `21-§10-2`, `21-§10-3`, `21-§10-4`, `21-§10-5`, `21-§10-6`, `21-§24-5`, `17-§22-3`, `21-§23-3` |
| `EIS-EXT-02` | External participants reach only their own bounded, object-scoped data through narrow capabilities; they have no dashboard capability and no cross-object reads. | `21-§13-1`, `21-§13-2`, `21-§13-3`, `21-§24-7`, `17-§13-4` |

## 8. Permission Kernel

### 8.1 Contract

`authz.authorize(p_business_id, p_action, p_target_type, p_target_id, p_channel, p_context)` returns `(allowed, reason_code, membership_id, membership_version, grant_ids, decision_id)`. The actor is always `authz.current_actor()`: the JWT subject resolved to an `active` person. The kernel evaluates, in order:

1. actor present and `active` (a `deleted` person is always denied);
2. membership in the requested business `active` (or a participant identity, a live support grant or an enabled automation rule, for those paths);
3. role default capability or an unexpired, unrevoked explicit grant for the requested capability and object scope;
4. entitlement where the capability is entitlement-gated, and account or security state once defined;
5. channel permitted for the capability;
6. object scope (the target belongs to the business; own-record predicates for self-service).

Denial returns a stable reason code for the denial contract (EIS-UX-01). Policy helpers (`authz.can(business_id, capability)`) are `STABLE`, `SECURITY DEFINER` owned by a dedicated `NOLOGIN` role with read-only grants on authority tables, and are callable by `authenticated` only.

### 8.2 Reuse by later missions

SB-P-1.13 and every later mission call this contract and register new capabilities in the registry; they do not add authority tables or checks of their own (EIS-DEP-01, Section 19.5).

### 8.3 Requirements

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS-KER-01` | One kernel decision function `authz.authorize(business, action, target_type, target_id, channel, context)` evaluates every permission dimension and returns allow or deny with a reason code, the membership version and the grant identifiers used. All enforcement layers (commands, policies, server functions, jobs, adapters) call it or its policy-safe helpers; features may extend capabilities in the registry but never bypass the kernel. | `21-§5-1`, `21-§5-2`, `21-§5-3`, `21-§5-4`, `21-§5-5`, `21-§5-6`, `21-§5-7`, `21-§5-8`, `21-§5-9`, `21-§5-10`, `BP-§10.1-3`, `21-§7`, `21-§22`, `22-§28-2`, `22-§6-10`, `17-§14-2`, `17-§14-3`, `17-§14-4`, `17-§14-5`, `17-§14-6`, `7-§12` |
| `EIS-KER-02` | The actor is derived only from the verified JWT subject, resolved to a `persons` row. Role, capability, entitlement, support and automation state are read from the database at each execution and never from token claims or client state. A session alone grants no membership, Owner role, cross-business access, entitlement or admin privilege. | `21-§15-1`, `21-§15-2`, `21-§15-3`, `21-§15-4`, `21-§15-5`, `21-§23-5`, `22-§28-9`, `21-§8` |
| `EIS-KER-03` | A versioned capability registry and role-default matrix held as data. Owner holds every business capability by default; Manager and Employee receive nothing implied beyond their bounded defaults. Owner intelligence (financial intelligence, Ask CFO, Reference Cost, margin) is never a default for Manager or Employee. | `21-§4-2`, `21-§4-3`, `21-§23-2`, `21-§23-3`, `BP-§10.1-3`, `17-§13-2`, `17-§13-3`, `20-§16-3`, `20-§23-11`, `17-§18-2`, `17-§21-4` |
| `EIS-KER-04` | Explicit delegated capability grants on a membership: capability, scope constraint, grantor, grant time, optional expiry, revocation. Grants are only created by an actor who holds the capability and the right to delegate it, and are recorded as authority events. | `21-§5-4`, `21-§4-2`, `BP-§10.1-4`, `20-§16-2` |
| `EIS-KER-05` | Entitlement primitive: `business_entitlements` (feature, state, validity). The kernel requires role or capability AND entitlement where a feature is entitlement-gated. Account and security state is a kernel input once the owning commercial mission defines it; entitlement changes never create, drop or alter schema. | `21-§5-7`, `21-§5-10`, `21-§16-1`, `21-§16-2`, `BP-§10.1-10`, `21-§24-9`, `22-§20-3`, `21-§23-6`, `22-§28-8` |
| `EIS-KER-06` | Channel and context is an enumerated kernel input (`dashboard`, `api`, `whatsapp`, `conversation`, `ai_tool`, `background_job`, `integration`, `export`, `support`). The same model applies on every channel; natural language cannot widen access. | `21-§5-8`, `21-§8`, `22-§6-2`, `22-§6-3`, `22-§6-9`, `21-§9`, `21-§24-6`, `22-§29-3` |
| `EIS-KER-07` | Owner-intelligence capabilities (Ask CFO, Owner-wide financial intelligence) are distinct registry capabilities, Owner-default and never inferred from a bounded view or a prompt. Self-service and bounded Manager views never include them. | `21-§9`, `21-§24-6`, `17-§18-2`, `17-§18-4`, `17-§21-4`, `21-§10-6` |
| `EIS-KER-08` | Action types (read, create, update, approve, export, admin) and object scope are kernel inputs. Create permission never implies read-all, edit-all, export or analytics. | `21-§5-5`, `21-§5-6`, `21-§11-2`, `21-§24-4` |
| `EIS-KER-09` | Revocation semantics: revoking a membership or grant bumps `membership_version`, takes effect at the next kernel evaluation, and serializes with in-flight commands through the membership row lock defined in EIS-CNF-02. | `21-§17`, `BP-§10.1-5`, `21-§12-5`, `21-§24-8` |

## 9. Data-Isolation Architecture

### 9.1 Source-complete authority-surface inventory (precondition)

Before any policy or function replacement, WS-A3 produces a machine-generated inventory from the catalog tables of the target database: every table and view with its policies and grants, every function with owner, security mode, grants and callers, every executor role, every service-role handler and every direct client table path. The 105 resolver references and 87 policy statements are scope indicators only (SEC-S7-02).

### 9.2 RLS and commands

Each table family (businesses and memberships; transactions and corrections; inventory; catalog; import and parser support) moves in one migration from Owner-only predicates to kernel helpers, with deny-by-default and role-matrix tests before and after. For `transactions`, Employee submission moves to a `create_transaction` command that inserts through a narrow executor and returns only the created row's safe projection; `SELECT` stays capability-gated, so insert permission never grants read-all. This addresses `RETURNING`, direct grants, privileged RPC responses and audit attribution together (SEC-S7-02, ER-4).

### 9.3 Grants and effective access

| Role | Target state |
|---|---|
| `PUBLIC` | No privilege on any protected table, view, sequence or function |
| `anon` | No privilege on business tables or business-authority RPCs; only separately approved, expressly scoped anonymous workflows documented in the access inventory |
| `authenticated` | `SELECT` through kernel RLS where direct reads are intended; `EXECUTE` on command and read functions; no direct DML on protected tables |
| `service_role` | Used only inside the privileged-operation contract (EIS-ISO-04); every write re-verifies the decision binding; delete guards apply to it |
| Executor roles | `NOLOGIN NOINHERIT`, per command group, own `SECURITY DEFINER` functions, narrow table and column grants |
| Creator roles (`postgres`, `supabase_admin`, others) | Default privileges reconciled so new objects are born with no client-reachable privilege; verified per role against live evidence (G-6) |

### 9.4 Requirements

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS-ISO-01` | Kernel-based RLS per table family, deny by default: every policy on a business-scoped table calls a `STABLE` kernel helper for the requested business and capability instead of `owner_id = auth.uid()`. Cross-business reads and writes are denied server-side on every surface. | `22-§6-5`, `21-§6-1`, `21-§6-2`, `BP-§10.1-6`, `BP-§10.1-7`, `21-§24-2`, `17-§22-9`, `7-§15-12`, `22-§23-2`, `21-§21-4`, `22-§29-3`, `17-§18-1` |
| `EIS-ISO-02` | Commands are the only write boundary for protected tables. Direct client `INSERT`/`UPDATE`/`DELETE` on protected tables (today `transactions` and `businesses`) is replaced by kernel-checked command functions. The UI is a usability layer; changing a UI component never widens backend access. | `21-§7`, `21-§23-1`, `17-§14-1`, `17-§14-7`, `21-§11-1`, `21-§11-2`, `21-§24-4`, `22-§6-4` |
| `EIS-ISO-03` | Effective-access reconciliation (WS-B): for every protected table, view, sequence and function, compute effective privileges for `PUBLIC`, `anon`, `authenticated`, `service_role`, executor roles and the default privileges of each real creator role (`postgres`, `supabase_admin` and any other). Remove unauthorized `anon`/`PUBLIC` access; revoke in the same migration that creates an object; preserve only separately approved, expressly scoped anonymous workflows; no blanket function revocation. | `BP-§10.1-7`, `BP-§10.1-8` |
| `EIS-ISO-04` | Privileged-operation contract for service-role paths: the server function resolves the actor from the verified session, calls the kernel through the caller's client, and obtains a short-lived decision record binding actor, business, action and object. Every later privileged write (claims, bookkeeping, follow-up writes) re-verifies that binding. The service role never selects the business or the actor itself. | `22-§6-4`, `22-§6-7`, `21-§6-6`, `21-§15-5` |
| `EIS-ISO-05` | Files, exports and object storage are business-scoped through the kernel: storage paths are prefixed by business ID, access is issued through kernel-checked signed operations, and exports run as kernel-checked commands. Storage policy state is evidence-gated (G-7). | `21-§6-4`, `21-§6-5`, `22-§6-8` |
| `EIS-ISO-06` | Conversation and AI context isolation contract: any conversation, channel or AI tool call carries actor, business and channel into the kernel before reading or writing business context. SB-P-1.13 and SB-P-1.20 consume this contract; they do not implement their own. | `21-§6-3`, `22-§6-3` |
| `EIS-ISO-07` | Reference-level isolation: every business-scoped reference uses composite `(business_id, id)` foreign keys (the SB-P-1.11 pattern), and scope for any read or outcome lookup is derived server-side, never from a caller parameter. | `21-§6-7`, `22-§5-9`, `21-§6-6` |
| `EIS-ISO-08` | Performance: kernel helpers are `STABLE`, use an indexed membership lookup keyed `(person_id, business_id, status)`, and are timed in Full Assurance so policy evaluation does not regress list and search paths. | `22-§21` |
| `EIS-ISO-09` | Data ownership and privacy: merchant data stays business-scoped; staff data is limited by role and purpose; no path sells or exports individual merchant data to third parties; any aggregate insight is computed only through governed, kernel-checked queries. None is built here. | `22-§23-1`, `22-§23-5`, `22-§23-6`, `22-§23-7`, `21-§21-4` |

## 10. Confirmation and Consequential-Action Binding

### 10.1 Binding

`confirmation_bindings` generalizes `catalog_link_preview_tokens`. A consequential command runs in two steps: a non-mutating preview that computes the reviewed state and issues a single-use binding, and a commit that consumes it. The commit fails if the actor, business, action, target or fingerprint differs, if the binding expired or was consumed, or if the kernel now denies.

### 10.2 Revalidation through the commit

The commit takes `FOR SHARE` on the actor's membership row and on any grant row it relies on, then calls the kernel, then writes. Revocation and role change take `FOR UPDATE` on the same rows. Either the command commits first and the revocation applies afterwards, or the command sees the revocation and returns a committed rejection with no protected write. `membership_version` detects change between preview and commit; it is not itself the revocation mechanism (SEC-S7-05).

### 10.3 Multi-row import under revocation (F-04(c))

| Revocation point | Behaviour |
|---|---|
| After preview, before batch claim | The claim command revalidates and rejects; nothing is claimed or written |
| After claim, before the first row | The first row's command revalidates and rejects; the ledger shows 0 completed, N remaining |
| Between committed rows | Committed rows stay; the next row rejects; the ledger shows exact counts |
| During a row | The row either commits before the revocation (counted) or rejects (remaining), by EIS-CNF-02 serialization |
| During retry or recovery | The row's idempotency key returns the recorded outcome; nothing is written twice or under the revoked authority |

Each row runs as its own domain command. The ledger row for that import row is written in the same transaction as the domain write, so a successful write can never be reported as not done. Bookkeeping that runs through the service role re-verifies the decision binding (EIS-ISO-04). Completing the remainder is a fresh submission by an actor who currently holds authority; rows already committed are matched by row fingerprint and skipped.

### 10.4 Requirements

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS-CNF-01` | Generalize the preview-token precedent into `confirmation_bindings`: actor person, business, action, target, reviewed-state fingerprint, membership version, channel, issue, expiry, single use, outcome. Confirmation by a different actor, for another business, action or target, after expiry or on a changed fingerprint fails; a generic or stale "Yes" is not authority. | `21-§18-1`, `21-§18-2`, `21-§18-3`, `21-§18-4`, `21-§18-5`, `21-§18-6`, `22-§13-3`, `22-§13-5`, `22-§14-7` |
| `EIS-CNF-02` | Execution-time revalidation: every consequential command, in the same transaction as its protected write, re-evaluates the kernel after taking a `FOR SHARE` lock on the acting membership row (and on the grant row where one is used). Revocation takes `FOR UPDATE` on the same row, so a command either commits before the revocation or sees it and fails without a protected write. Permission versions are a change-detection aid only. | `21-§17`, `22-§13-4`, `BP-§10.1-5`, `21-§24-8`, `22-§29-7` |
| `EIS-CNF-03` | Clarify before consequential writes, and preview material or uncertain imports server-authoritatively before any write, using the confirmation binding. | `22-§13-1`, `22-§13-2` |
| `EIS-CNF-04` | One shared idempotency pattern (business, actor, operation, key, payload fingerprint, committed outcome), resolved before mutable-state evaluation, for every command and external event intake. | `22-§15`, `22-§29-8` |
| `EIS-CNF-05` | Multi-row import under revocation (Founder Record 04 F-04(c)): each row or bounded chunk commits in its own transaction after EIS-CNF-02 revalidation; an import ledger records per-row outcome keyed by a stable row fingerprint. On revocation, committed rows stay, later rows stop, and the merchant sees exact completed and remaining counts. Completion is a fresh submission by an actor who currently holds authority; rows already committed are skipped by fingerprint, so nothing is duplicated and nothing resumes under the revoked authority. | `21-§17`, `BP-§10.1-5`, `22-§15` |
| `EIS-CNF-06` | Narrow failure: a kernel error, feature failure or provider failure denies or fails the one operation and never fails open; integration extension points consume the kernel and the idempotency pattern. | `22-§19`, `22-§29-10`, `22-§17` |

## 11. Audit and Provenance

`authority_events` is append-only (no-update and no-delete guards, as the catalog event tables), references `persons` and businesses with `RESTRICT`, and stores codes and references rather than payload values. Security-relevant denials are recorded as committed rejections; a denial raised inside a transaction that then aborts is recorded by the server layer through `authz.record_denial`, a narrowly granted function called in a separate short transaction with minimal fields (actor, business, capability, channel, reason code, request ID, time). Routine denials are recorded at a routine level and never framed as accusations. Because events reference `persons`, which are de-identified rather than deleted, audit survives membership removal, transfer and identity deletion.

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS-AUD-01` | Append-only `authority_events`: grant, revoke, role change, invitation, acceptance, temporary elevation, support access, automation-rule change, transfer steps, identity-deletion steps and security-relevant denials, carrying grantor or actor, subject, role or capability, scope, business, channel, request ID, outcome and timestamps. Rows reference `persons` and businesses without cascading rules. | `21-§19-1`, `21-§19-2`, `21-§19-3`, `21-§19-4`, `21-§19-5`, `21-§19-6`, `21-§19-7`, `21-§19-8` |
| `EIS-AUD-02` | Durable denial audit: expected permission rejections are returned as committed structured outcomes (the SB-P-1.11 principle), so their audit row commits. A denial raised inside a transaction that aborts is recorded by the server layer in a separate, minimal transaction through a dedicated narrowly granted function. Routine denials are recorded as routine, not as incidents. | `21-§19-6`, `21-§20-5`, `21-§23-7` |
| `EIS-AUD-03` | Provenance widening (M6): extend the pinned catalog provenance `CHECK` constraints to enumerated sets for actor type (`user`, `automation`, `support`, `system`), channel and authority basis (`membership_role`, `delegated_capability`, `support_grant`, `automation_rule`, plus the legacy `owner_via_businesses.owner_id` for existing rows). Existing rows are not rewritten. | `22-§14-2`, `22-§14-3`, `22-§14-9`, `21-§19-8` |
| `EIS-AUD-04` | Raw evidence, interpretation, correction, authorized human context and resulting action are kept together per consequential event (the existing correction-event and catalog-event patterns, extended to non-Owner actors). Adding or reading human context is a kernel capability. | `22-§14-1`, `22-§14-4`, `22-§14-5`, `22-§14-6`, `22-§14-8`, `22-§29-12` |
| `EIS-AUD-05` | Minimization and dignity: audit records codes and references, not surveillance data; no continuous location or activity tracking, hidden scoring or accusation is built; permission design serves useful work. | `21-§21-1`, `21-§21-2`, `21-§21-5`, `22-§16-2`, `22-§28-7` |

### 11.1 Denial experience and UI

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS-UX-01` | One denial contract: a reason code, a calm message that leaks no protected data, an optional next step, no accusation, normal operation elsewhere preserved, and escalation only when defined security or abuse criteria are met. | `21-§20-1`, `21-§20-2`, `21-§20-3`, `21-§20-4`, `21-§20-5`, `21-§24-12`, `21-§23-7` |
| `EIS-UX-02` | Capability-driven UI as a usability layer: the client asks the kernel which capabilities apply in the active business and renders accordingly; stable test identifiers for the permission surface this mission adds. | `17-§14-1`, `17-§14-7`, `17-§16-1`, `17-§22-10a`, `22-§6-1`, `21-§20-3` |

## 12. Product & Price Master Permission Integration

### 12.1 Command and read paths

All 19 catalog functions keep their executor roles and gain a requested-business parameter resolved through the kernel with the function's capability. RLS policies that call `resolve_owner_business` move to kernel helpers. Both server functions replace `loadOwnedBusinessId` with kernel resolution of the requested business and adopt the privileged-operation contract.

### 12.2 Revoked permission

Catalog commands use EIS-CNF-02 serialization; a revoked Manager's next command, including an import row, returns a committed rejection.

### 12.3 Direct disclosure

One projection function (`catalog_internal.project_product`) takes the row and the caller's capabilities and includes Reference Cost only with `catalog.cost.read` and margin only with `catalog.margin.read`. Every read path uses it, including `SECURITY DEFINER` functions, whose own responses are shaped by caller capability rather than by column grants (SEC-S7-04).

### 12.4 Reference Cost and margin boundary (Founder Decision Record 09)

**History.** Version 0.1 of this EIS raised T8-EIS-1: a Manager delegated Reference Cost, who also sees the selling price, could compute a per-product difference by hand. It also proposed an aggregate-only margin output for a margin-only delegate. Founder Decision Record 09 (`founder/09-reference-cost-margin-permission-semantics.md`, blob `84d61d4d62cc33ae81ec372ac725059665ebc9d9`) resolved T8-EIS-1, and MC-150 (`mission-control/28-t8-eis1-founder-decision-disposition.md`) found the aggregate-only behaviour unapproved. Version 0.2 removes it.

**Rule applied.** Reference Cost and margin permissions govern what Smart Business itself provides: fields, calculations, reports, aggregates and derived outputs.

- Reference Cost and margin stay Owner-only by default and separately delegable; delegating one never delegates the other; a general product read or bounded Manager view grants neither (Founder Record 04 F-03, unchanged).
- A Manager holding `catalog.cost.read` receives exact Reference Cost, including alongside a selling price the Manager is otherwise authorized to see. That combination is not a margin-permission violation. A person's own arithmetic on two values each separately authorized to them is not Smart Business granting margin.
- Without `catalog.margin.read`, Smart Business never computes, labels, displays, returns, reports, aggregates or otherwise exposes margin or any output it identifies as margin-derived, on any path covered by Section 12.3.
- Holding `catalog.margin.read` does not by itself imply that any particular margin output (for example, exact per-product margin) is approved.

**Not selected by this EIS.** No margin formula, and no per-product or aggregate margin computation or display semantics. These remain a separate future product definition. When approved Product Truth defines them, the Section 12.3 projection function enforces the resulting permission boundary on every path, including `SECURITY DEFINER` responses.

**Status.** T8-EIS-1 / EQ-S9-1: **RESOLVED BY FOUNDER DECISION RECORD 09.** `EIS-PPM-04` is no longer held. The FCTM rows keep their disposition, build commitment, classification and assignment.

### 12.5 Surface demotion and continuity

The standalone Catalog surface is contextualized as Product & Price Master inside business operations. Existing routes keep resolving, and no product, price, tax, history or link data moves.

### 12.6 Requirements

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS-PPM-01` | Replace `catalog_internal.resolve_owner_business` in all 19 catalog functions and the RLS policies that use it with the kernel resolver for the requested business and capability; keep the seven `NOLOGIN` executor roles and narrow grants; move `loadOwnedBusinessId` in both server functions to kernel resolution of the requested business. | `BP-§10.1-11`, `7-§12`, `22-§5-8` |
| `EIS-PPM-02` | Catalog capability set: `catalog.read`, `catalog.write.identity`, `catalog.write.pricing`, `catalog.write.tax`, `catalog.write.link`, `catalog.lifecycle`, `catalog.import`, `catalog.cost.read`, `catalog.cost.write`, `catalog.margin.read`. Owner holds all by default; Manager and Employee hold only what their defaults and explicit grants give. | `7-§10-1`, `7-§10-2`, `7-§10-3`, `7-§10-4`, `7-§15-10`, `BP-§10.1-11` |
| `EIS-PPM-03` | Field-level projection on every read path: one projection function decides, per caller capability, whether Reference Cost and margin fields are present, and every path that can return them (direct read, batch, list, search, import preview, export, dashboards, aggregates, caches, privileged RPC responses) uses it. `catalog_product_read` stops returning cost unconditionally. Column grants alone are not relied on. | `21-§4-2`, `21-§5-4`, `21-§24-3`, `17-§13-2`, `17-§22-2`, `7-§10-2`, `BP-§10.1-3` |
| `EIS-PPM-04` | Margin and Reference Cost output boundary (Founder Decision Record 09; Section 12.4): Smart Business never computes, labels, displays, returns, reports, aggregates or otherwise exposes margin or a margin-derived output unless `catalog.margin.read` is present, and never exposes Reference Cost unless `catalog.cost.read` is present. Exact delegated Reference Cost may be shown alongside a selling price the caller is otherwise authorized to see; a person's own arithmetic on separately authorized values is not a Smart Business margin output. No margin formula and no per-product or aggregate margin semantics are selected here. | `17-§18-2`, `17-§21-4`, `21-§24-3`, `21-§5-4`, `17-§22-2` |
| `EIS-PPM-05` | Preserve product identity, pricing, tax, SKU and barcode, price history, audit history, import foundations and existing relationships; no independent Catalog expansion, no deletion of valid data, no collapse into Transactions and no Inventory ownership of commercial identity; no competing stock-linked pricing path or duplicate stock engine. | `BP-§7-1`, `BP-§7-2`, `BP-§7-3`, `BP-§7-4`, `BP-§10.1-13`, `7-§7`, `7-§9` |
| `EIS-PPM-06` | Reclassify the surface as Product & Price Master, a core shared foundation: navigation and entry points are contextualized under business operations; `/catalog`, `/catalog/$productId` and `/catalog/import` keep resolving (redirect or alias) so valid deep links and bookmarks continue; no data moves. | `BP-§10.1-12`, `BP-§10.1-13`, `BP-§7-5` |

## 13. First-Run, Invitation and Lifecycle Authority Integration

- **Invitation acceptance.** An invitation is a membership in `invited` status. The verified invitee accepts through a command that checks identity, expiry and business; acceptance moves the membership to `active` and records authority events.
- **Existing-membership detection.** First run queries active memberships and pending invitations before offering creation (EIS-FRL-02), so an invited person is never made Owner of a new empty business (F-05, ER-8).
- **Removal.** Revocation or ending of a membership invalidates derived grants, pending bindings and automation rules; history remains.
- **Transfer.** Transfer is an ownership change under EIS-FRL-04, requiring both parties' own verified approvals, bound to one business and set of terms, revalidated at completion. Completion ends all former-Owner authority on every surface at the next kernel evaluation (FA-1 to FA-10), keeps the former Owner's historical attribution without access (FA-9), and deletes nothing. The transferred business, its members and history survive any later identity deletion of the former Owner (FA-11; Section 14).
- **SB-P-1.19 relationship.** Merchant-facing transfer, Pause, cancellation, Stop and Delete experiences, subscription state and governed business-lifecycle evidence belong to SB-P-1.19. This mission supplies the authority foundation, the lifecycle hook guards and the evidence interface.

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS-FRL-01` | Invitations: an invitation is a pending membership (`invited`) bound to business, role, inviter, intended contact and expiry. Acceptance is a kernel-checked command by the verified invitee. The Owner remains the initial highest authority; staff and Manager setup uses explicit invitation and capability assignment, never Owner intelligence by default, and stays short enough not to block the first win. | `20-§16-1`, `20-§16-2`, `20-§16-3`, `20-§16-4`, `20-§23-11` |
| `EIS-FRL-02` | Authority-aware first run: before offering business creation, the app lists the person's active memberships and pending invitations. A person with any membership or invitation is routed to select or accept; only a person with neither may create a business, which creates it and its Owner membership in one command. `returnTo` is validated against an allowlist of internal routes. | `20-§16-4`, `21-§6-7`, `21-§15-1` |
| `EIS-FRL-03` | Membership removal and revocation: `revoked` or `ended` status, grants and pending confirmations derived from it invalidated, sessions lose that business at the next kernel check, authority event recorded, history kept. | `21-§17`, `21-§5-2`, `22-§33-5` |
| `EIS-FRL-04` | Ownership transfer foundation: an `ownership_transfers` state machine (proposed, current-Owner approved, incoming-Owner accepted, completed, cancelled, expired) bound to one business and one set of terms. Completion is one command that revalidates both parties, ends the former Owner membership and its derived grants, creates the new Owner membership, updates the `owner_id` mirror and records authority events. Transfer never deletes anything. | `21-§4-1`, `21-§18-1`, `21-§18-2`, `22-§33-4`, `22-§33-6`, `22-§33-18`, `22-§33-32`, `22-§33-34` |
| `EIS-FRL-05` | Cross-mission evidence interface with SB-P-1.19: SB-P-1.19 records governed business-lifecycle evidence (final-business deletion completed) in a record SB-P-1.12 can read through the kernel. SB-P-1.12 consumes it for eligibility and never produces it. Merchant-facing transfer, Pause, cancellation, Stop and Delete experiences stay with SB-P-1.19; Contract 18 is unchanged. | `22-§33-4`, `22-§33-11`, `22-§33-32`, `21-§5-10` |

## 14. ESC-1 Safe-Design Direction

ESC-1 stays **OPEN T8**. This section proposes the engineering resolution for Stage 10 review; it does not close ESC-1 and does not unblock `22-§20-2`.

### 14.1 Manifestations and treatment

| Manifestation (repository DDL) | Risk | Direction |
|---|---|---|
| Owner business API `DELETE` (grant plus policy) | Uncontrolled business deletion outside any lifecycle | Revoke the grant, drop the policy, add a delete guard that admits only the governed lifecycle owner role (EIS-ESC-01) |
| `businesses.owner_id → auth.users ON DELETE CASCADE` | Auth-user deletion can initiate deletion of a business that must survive | Re-point to `persons(id)` `RESTRICT`; `owner_id` becomes a mirror (EIS-ESC-02, EIS-ID-04) |
| `transactions.creator_id → auth.users ON DELETE CASCADE` | Auth-user deletion can initiate deletion of transactions the person created, including in a transferred business | Re-point to `persons(id)` `RESTRICT` (EIS-ESC-03) |
| `transaction_correction_events.transaction_id → transactions ON DELETE CASCADE` | A transaction deletion can initiate deletion of its correction history | `RESTRICT` plus delete guards on both tables (EIS-ESC-04) |
| Auth user deletable outside the governed path | Future cascades or orphans | `persons.auth_user_id` `RESTRICT`; unlink only in the governed path (EIS-ESC-05) |

### 14.2 How each required outcome is achieved

- **Uncontrolled direct business deletion prevented:** no client grant, no policy, and a guard that also stops `service_role`.
- **Auth-user deletion cannot destroy a surviving business:** no foreign key from businesses to `auth.users`; the only link is `persons`, which is never deleted.
- **Auth-user deletion cannot destroy transaction or correction history:** all actor references point to `persons` with `RESTRICT`; correction events `RESTRICT` to transactions; delete guards on both.
- **Attribution survives without authority:** `persons.id` stays in every historical row; the de-identified person has no membership, grant or session, and the kernel denies any `deleted` person (EIS-DEL-04).
- **Lawful governed deletion remains possible:** identity deletion de-identifies the person and then deletes the Auth user through the governed path (Section 15); business deletion runs only through the lifecycle hook, which processes each retained record class by its rule (EIS-ESC-06).
- **Transfer and deletion stay distinct:** transfer changes memberships and the mirror and deletes nothing; deletion is a separate governed process with its own eligibility.
- **Transferred business isolated and intact after former-Owner identity deletion:** the business's `owner_id` names the new Owner; the former Owner's transactions stay, attributed to a de-identified person; no cascade path exists.

### 14.3 Business `business_id` cascades

For retained record classes, `business_id` foreign keys change from `CASCADE` to `RESTRICT`, so even the governed business-deletion path must handle each class explicitly. Operational, non-retained classes (for example, expired preview tokens and parser leases) may keep cascades where their record-class rule permits; the source-complete inventory lists each decision.

### 14.4 Migration and backfill (design level; no SQL)

1. Create `persons`; backfill from every distinct Auth user ID referenced in any table; reconcile counts.
2. Create memberships; backfill Owner memberships; reconcile one-to-one with `owner_id`.
3. Add the new foreign keys to `persons` as `NOT VALID`, then validate; resolve and report any orphan before validation.
4. Drop the old cascading keys to `auth.users` and change retained `business_id` and correction keys to `RESTRICT`.
5. Add delete guards; revoke the `businesses` delete grant and drop the delete policy.
6. Record the migration as governed evidence; nothing is executable until a separate migration mission authorizes it under `docs/migration/README.md`.

Steps 1 to 3 are additive and reversible. Steps 4 and 5 are reversible by re-adding the previous definitions, but must not be reversed once governed deletion depends on them. Rehearsal uses clean replay and a production-shaped copy only if one is separately approved.

### 14.5 Negative-path verification (later)

Listed in Section 18.3.

### 14.6 Requirements

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS-ESC-01` | Remove the Owner business API `DELETE` path: revoke `DELETE` on `businesses` from `authenticated`, drop the Owner delete policy, and add a `BEFORE DELETE` guard that rejects any delete not executed by the designated governed business-lifecycle function-owner role, including deletes attempted with `service_role`. | `22-§33-22`, `22-§33-39`, `22-§20-2`, `22-§33-20`, `21-§23-6` |
| `EIS-ESC-02` | Re-point `businesses.owner_id` from `auth.users` to `persons(id)` with a non-cascading (`RESTRICT`) rule. Deleting an Auth user can then never initiate business deletion, and a transferred business is untouched by the former Owner's identity deletion. | `22-§33-18`, `22-§33-20`, `22-§33-22`, `22-§20-2` |
| `EIS-ESC-03` | Re-point `transactions.creator_id` and every other historical actor column (correction `edited_by`, catalog `authorized_by_user_id` and `deleted_by_user_id`, inventory actor columns, authority events) to `persons(id)` with `RESTRICT`. Because `persons.id` equals the original Auth user ID, no historical value is rewritten or reassigned. | `22-§33-17`, `22-§33-19`, `22-§33-8`, `22-§20-2`, `21-§11-1` |
| `EIS-ESC-04` | Change `transaction_correction_events.transaction_id` and the `business_id` foreign keys of retained record classes (transactions, corrections, catalog and inventory events, audit, deletion records) from `ON DELETE CASCADE` to `RESTRICT`, and add delete guards on `transactions` and `transaction_correction_events` matching the existing catalog and inventory immutability triggers. | `22-§20-2`, `22-§14-5`, `22-§33-17`, `22-§33-36` |
| `EIS-ESC-05` | Containment of uncontrolled Auth deletion: `persons.auth_user_id` references `auth.users` with `RESTRICT`, so an Auth user linked to a person cannot be deleted outside the governed path. The governed path first de-identifies and unlinks the person, then deletes the Auth user. Person rows have a no-delete guard. | `22-§33-22`, `22-§33-39`, `22-§20-2` |
| `EIS-ESC-06` | Governed business deletion hook for SB-P-1.19: business deletion is possible only through one lifecycle command owned by a dedicated role, which processes each retained record class explicitly (retain, minimize or delete as its record-class rule permits) instead of relying on cascades. This mission provides the hook and its guards; the merchant-facing lifecycle and its runtime belong to SB-P-1.19. | `22-§20-1`, `22-§20-2`, `22-§33-4`, `22-§33-24` |
| `EIS-ESC-07` | Evidence required before `22-§20-2` can be proposed for unblocking: EIS acceptance and lock; implemented EIS-ESC-01 to EIS-ESC-05; DB-level negative tests (Section 18.3) passing in the isolated test environment; source-complete cascade inventory; production-state verification (G-6) before any production reliance; independent Security review; Mission Control disposition. | `22-§20-2`, `22-§29-11`, `22-§29-12` |
| `EIS-ESC-08` | Migration and backfill order for ESC-1 containment (design only): create `persons`, backfill, then add the new foreign keys `NOT VALID` and validate, then drop the old cascading keys, then add guards, then revoke the delete grant; each step reversible until the old keys are dropped; row-count and orphan reconciliation at each step. | `22-§20-4`, `BP-§10.1-13`, `22-§20-1` |

### 14.7 `22-§20-2` treatment

`22-§20-2` remains `BLOCKED` / `IN SCOPE`. EIS-ESC-07 states the evidence that would be needed before Mission Control could consider unblocking it. This EIS does not propose that it is unblocked.

## 15. Personal-Identity Deletion Design (Contract 22 §33; design only)

Identity-deletion runtime is not authorized. This section fixes the design so that the foundation built by this mission does not preclude it.

- **Eligibility.** Every §33.2 condition is computed from authoritative facts and rechecked at the commit under EIS-CNF-02. The final-ownership exit is either SB-P-1.19 governed business-deletion evidence (EIS-FRL-05) or a completed valid transfer with former-Owner authority ended and transferred-business survival and isolation preserved (EIS-FRL-04). Neither domain alone proves eligibility.
- **Deletion.** The person or an authorized process requests; the request binds a confirmation; the commit rechecks eligibility, de-identifies the `persons` row, revokes sessions and unlinks `auth_user_id`, writes the bounded proof and an outbox entry. A provider step deletes the Auth user with retry and reconciliation; a failure leaves an unlinked, de-identified person and an open outbox entry, never a half-deleted history.
- **Records.** Retained records keep `persons.id`; profile and contact data are erased or pseudonymized as the record-class rule allows; nothing is reassigned.

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS-DEL-01` | Identity-deletion eligibility evaluator (design only; runtime not authorized): computes each §33.2 condition from authoritative state (owned businesses, final-ownership exit evidence, memberships, pending transfers, obligation and hold register, history-separation status), rechecked at the commit; request, pause, cancellation, scheduled-deletion, hidden or ticket states are never inputs that satisfy a condition. | `22-§33-3`, `22-§33-4`, `22-§33-5`, `22-§33-6`, `22-§33-7`, `22-§33-8`, `22-§33-10`, `22-§33-11`, `22-§33-31`, `22-§33-33`, `22-§33-34` |
| `EIS-DEL-02` | Governed identity-deletion command (design only): deliberate request by the person or an authorized process, confirmation binding, eligibility recheck at commit, de-identification of the `persons` row, session termination, unlink, then provider Auth-user deletion through an outbox step with retry and reconciliation. It never uses a direct delete or an Auth cascade. | `22-§33-1`, `22-§33-9`, `22-§33-22` |
| `EIS-DEL-03` | De-identification separates identity from records: profile and contact fields are erased or irreversibly pseudonymized as the record-class rule allows; the `persons.id` and a minimal non-identifying label remain so retained records keep their attribution without reassignment. | `22-§33-2`, `22-§33-12`, `22-§33-14`, `22-§33-19`, `22-§33-23` |
| `EIS-DEL-04` | Non-authorizing attribution: a de-identified person has no active membership, grant or session, and the kernel denies any authority to a person whose status is `deleted`; attribution is a reference, never an authority input. | `22-§33-15`, `22-§33-28`, `22-§33-37` |
| `EIS-DEL-05` | Bounded deletion proof: a proof record (fact, time, authorizing actor or process, eligibility-evidence references, outcome) that holds no profile copy and does not depend on the deleted identity row for its own survival. | `22-§33-21`, `22-§33-38` |
| `EIS-DEL-06` | Obligation and hold register: records each identified relevant obligation or legal or dispute hold with its basis, owner and disposition; only an established obligation that genuinely requires the active identity blocks eligibility. | `22-§33-7`, `22-§33-13`, `22-§33-26`, `22-§33-35` |
| `EIS-DEL-07` | Acceptance evidence plan for §33.8: labelled fixtures for both final-ownership exits, membership and transfer blocks, obligation dispositions, before-and-after history comparison across businesses including a transferred business, attribution denial, proof inspection and cascade tests. | `22-§33-31`, `22-§33-32`, `22-§33-33`, `22-§33-34`, `22-§33-35`, `22-§33-36`, `22-§33-37`, `22-§33-38`, `22-§33-39` |

## 16. Legal, Privacy and Retention Boundary

The EIS uses Founder Record 06 and MC-117 provisional Phase One rules only as far as engineering design needs them. It separates personal identity from retained records, codes no universal retention period, keeps record-class-specific treatment, allows minimization or pseudonymization where the rule requires, preserves legal and dispute holds, and keeps rules as data so a professionally validated rule can replace a provisional one without schema redesign. It creates no Privacy Policy or Terms text and claims no professional legal finality.

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS-LEG-01` | Record-class registry: each retained record class (active identity data, merchant statutory and business records, Team LIPS records, legal or dispute holds, security logs, historical audit attribution) carries a reference to a retention-rule entry held as data. No universal period is coded, none is inferred from business-lifecycle windows, and a validated rule can later replace a provisional one without schema redesign. | `22-§33-16`, `22-§33-23`, `22-§33-24`, `22-§33-25`, `22-§33-27`, `22-§33-28`, `22-§33-29`, `22-§33-30` |
| `EIS-LEG-02` | Legal and dispute hold: a record-level hold state that suspends deletion or minimization of the held records until released by an authorized process. | `22-§33-26` |
| `EIS-LEG-03` | Backup and point-in-time-recovery treatment of de-identified data is an evidence item (provider facts) and a legal-rule input; no behaviour is assumed until both exist. | `22-§33-30` |

## 17. Environment and Provider Evidence Plan

Every item is separately authorized, read-only evidence. G-6/T4 stays `UNVERIFIED` in this draft.

| Evidence | Needed before | Owner |
|---|---|---|
| Test and rehearsal project identity; secret bindings; applied migration list | First Full Assurance run of any WS-A migration | Mission Control (G-7) |
| Production project identity and migration ledger | Any production-security conclusion | Mission Control or Founder (G-6) |
| Effective grants, RLS, function and default privileges per role | WS-B reliance and any claim that remediation is current | Mission Control or Founder (G-6, T4) |
| Storage bucket and object-store policies | Relying on file and export isolation (EIS-ISO-05) | Mission Control (G-7) |
| Production-shaped rehearsal environment and its data-handling approval | Rehearsing M4, M5 and ESC-1 key changes on realistic data | Mission Control or Founder |
| Provider Auth-deletion behaviour against `RESTRICT` references, and backup or PITR retention | Governed identity-deletion runtime | Mission Control (G-7) |
| Access-token lifetime | Only if later needed (EQ-6) | Separately authorized |

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS-ENV-01` | Evidence plan (Section 17): separately authorized read-only verification of project identities, migration ledger, grants, RLS, function and default privileges and storage policies before any production-security conclusion or WS-B reliance. | `BP-§10.1-7`, `BP-§10.1-8`, `21-§6-4` |
| `EIS-ENV-02` | Production access-token lifetime is collected only if a later stage needs it (EQ-6); the design reads authority from the database at every execution. | None — Engineering-only evidence item (EQ-6, informational). It adds no product behaviour and realizes no FCTM row by itself; the underlying obligation is realized by EIS-KER-02 and EIS-CNF-02. |

## 18. Testing Architecture

### 18.1 Suites

| Suite | Scope | Tier |
|---|---|---|
| Kernel unit and DB suite | Every kernel dimension and reason code | Full Assurance (mandatory mission verification) |
| Role matrix | Owner, Manager, Employee, participant, support and automation fixtures across every table family and command | Full Assurance |
| Multi-business isolation | Owner-of-A/Manager-of-B; cross-business read, write, reference, export and file attempts | Full Assurance |
| Active business | Explicit selection, missing or foreign selection, `maybeSingle()` removal | Full Assurance and component tests |
| Revocation and concurrency | Stale and revoked authority; mid-operation revocation at each Section 10.3 point; replay | Full Assurance (concurrency) |
| Financial-field disclosure | Direct and derived Reference Cost and margin disclosure on every read path | Full Assurance |
| Privileged paths | Decision binding across claims, bookkeeping and follow-up writes | Full Assurance |
| Denial audit | Durable denial rows after committed rejections and after aborted transactions | Full Assurance |
| Transfer | FA-1 to FA-11 | Full Assurance with labelled harness where SB-P-1.19 surfaces are absent |
| Identity deletion and retained history | §33.8 acceptance with labelled fixtures (design-time only until runtime is authorized) | Full Assurance |
| Effective access inventory | `PUBLIC`, `anon`, `authenticated`, creator-role default privileges | Full Assurance |
| Regression | Existing 28 files | Fast Gate and Full Assurance |

### 18.2 Fixtures and conventions

Fixtures create persons, businesses and memberships through the same commands the product uses. Tests never set authority by writing tables directly, except in explicitly labelled fault-injection tests. Stable test identifiers are added to the permission surface this mission builds (`17-§16-1`, `17-§22-10a`).

### 18.3 ESC-1 negative paths

1. `authenticated` `DELETE` on `businesses` is rejected (no grant, no policy).
2. `service_role` `DELETE` on `businesses` outside the lifecycle role is rejected by the guard.
3. Deleting an Auth user linked to a person is rejected by `RESTRICT`.
4. After governed unlinking, deleting the Auth user leaves every business, transaction, correction, catalog, inventory and audit row intact, with `persons.id` attribution.
5. After a completed transfer and the former Owner's identity deletion, the transferred business, its Owner, members and full history are intact and the former Owner has no access.
6. `DELETE` on `transactions` and `transaction_correction_events` is rejected for every client and service role outside the lifecycle role.
7. The source-complete inventory reports no remaining `ON DELETE CASCADE` from `auth.users` or `persons`, and none from `businesses` into a retained record class.

### 18.4 Requirements

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS-TST-01` | The database isolation and security suite is a mandatory mission verification requirement for every workstream that changes authority, membership, RLS, grants, privileged functions or cross-business access (MC-143 §3.3), extending Full Assurance and passing before Mission Control accepts that work. | `22-§22`, `BP-§10.1-9` |
| `EIS-TST-02` | Acceptance scenarios are executable DB-level or labelled-harness tests: Contract 21 scenarios 1 to 12, Contract 22 cross-cutting scenarios, Contract 17 and Contract 7 permission and isolation scenarios, Founder Scenarios A and B and the F-04(c) outcome. | `21-§24-1`, `21-§24-2`, `21-§24-3`, `21-§24-4`, `21-§24-5`, `21-§24-6`, `21-§24-7`, `21-§24-8`, `21-§24-9`, `21-§24-10`, `21-§24-11`, `21-§24-12`, `22-§29-3`, `22-§29-6`, `22-§29-7`, `22-§29-8`, `22-§29-10`, `22-§29-11`, `22-§29-12`, `17-§22-2`, `17-§22-3`, `17-§22-9`, `17-§22-10a`, `7-§15-10`, `7-§15-12`, `BP-§10.1-1`, `BP-§10.1-5` |
| `EIS-TST-03` | ESC-1 negative-path tests (Section 18.3) and the effective-access inventory test are part of the mandatory suite. | `22-§33-39`, `22-§20-2`, `BP-§10.1-7`, `BP-§10.1-8` |
| `EIS-TST-04` | Existing suites (catalog import 9, inventory 17, parser lease 2) remain green at every checkpoint, re-run with non-Owner fixtures where they touch authority. | `BP-§10.1-9`, `BP-§10.1-13` |

## 19. Workstreams, Migration Architecture and Cross-Mission Consumption

### 19.1 Workstreams

All workstreams stay inside SB-P-1.12; none changes a mission assignment. Migration classes follow Blueprint §20.4.2 (M1 additive, M2 backfill, M3 function replacement, M4 policy replacement, M5 privilege remediation, M6 constraint evolution).

| Workstream | Purpose | EIS requirements | Depends on | Migration class | Verification | Rollback and recovery | Consumable early by later missions |
|---|---|---|---|---|---|---|---|
| WS-0 Evidence | Collect separately authorized read-only evidence | `EIS-ENV-01`, `EIS-ENV-02` | Authorization | None | Evidence records | Not applicable | Not applicable |
| WS-A1 Identity and membership | Persons, memberships, participants, backfill | `EIS-ID-01`–`EIS-ID-06` | EIS lock | M1, M2 | Backfill reconciliation; role fixtures | Additive; drop new objects | Read-only use after WS-A2 |
| WS-A2 Kernel | Kernel, registry, grants, entitlements, support, automation checks | `EIS-KER-*`, `EIS-AUT-01`, `EIS-SUP-01`, `EIS-EXT-*` | WS-A1 | M1, M3 | Kernel DB suite | Additive until callers switch | Yes, the kernel contract, once the suite passes |
| WS-A3 Enforcement | Authority-surface inventory, then RLS and commands per table family | `EIS-ISO-01`, `EIS-ISO-02`, `EIS-ISO-04`–`EIS-ISO-09` | WS-A2 | M3, M4 | Role matrix, isolation and regression suites per family | Per-family revert migration held ready; never two authority paths live on one family | After its families pass |
| WS-B Effective access | Grant and default-privilege reconciliation | `EIS-ISO-03` | WS-0 (G-6 evidence) | M5 | Access inventory test | Re-grant from recorded inventory | Not needed by consumers |
| WS-C Product & Price Master | Catalog to kernel, projection, derived-disclosure controls, surface demotion | `EIS-PPM-*` | WS-A3 catalog family | M3, M6 | Disclosure and regression suites | Function versions reverted together | Not a dependency of SB-P-1.13 |
| WS-D Binding and integrity | Confirmation bindings, revalidation, idempotency, import ledger | `EIS-CNF-*` | WS-A2 | M1, M3 | Concurrency and replay suites | Additive | Yes, once suites pass |
| WS-E Audit | Authority events, denial durability, provenance widening | `EIS-AUD-*`, `EIS-UX-*` | WS-A1 | M1, M6 | Audit and denial suites | Additive; constraint widening not reversed once non-Owner rows exist | Yes |
| WS-F History integrity (ESC-1) | Persons links, `RESTRICT` keys, guards, delete-path removal, lifecycle hook | `EIS-ESC-*` | WS-A1 | M6 | Section 18.3 negative paths | Section 14.4 | Required before any identity or business lifecycle runtime |
| WS-G First run, invitations, transfer | Invitations, first run, removal, transfer foundation, SB-P-1.19 evidence interface | `EIS-FRL-*` | WS-A2, WS-D, WS-F | M1, M3 | FA-1 to FA-11 suites | Additive | Transfer only after WS-F |
| WS-H Tests and CI | Suites and fixtures | `EIS-TST-*` | Runs alongside every workstream | None | Itself | Not applicable | Not applicable |
| Deletion design | §33 evaluator, register, registry | `EIS-DEL-*`, `EIS-LEG-*` | WS-F, WS-G; separate runtime authorization | Design only | Design review | Not applicable | No |

Governance requirement `EIS-GOV-*` applies across all workstreams.

### 19.2 Order

WS-0 (as authorized) → WS-A1 → WS-A2 and WS-E → WS-F → WS-D → WS-A3 per family → WS-B (once its evidence exists) → WS-C → WS-G. WS-H runs throughout. WS-F runs early because it removes a live integrity risk and is a precondition for transfer and any lifecycle runtime.

### 19.3 Governance requirements

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS-GOV-01` | This EIS states the Contract 22 §27 disclosures (Section 19.4): features advanced, foundations reused, AI or channel consumption, what exists and must not be duplicated, what remains outside this mission, blockers and required evidence. | `22-§27-1`, `22-§27-2`, `22-§27-3`, `22-§27-4`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§29-14`, `21-§22` |
| `EIS-GOV-02` | Non-duplication: one permission engine, one identity per participant per business, no per-channel memory, AI orchestrator, scheduler or document pipeline, no continuous GPS foundation, no subscription-driven table create or drop, no client-specific forks. | `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§28-7`, `22-§28-8`, `22-§28-9`, `22-§28-10` |
| `EIS-GOV-03` | Schema stability: capability is controlled through entitlements and permissions, never through schema changes; every schema change is a governed, reviewed migration; no destructive or dynamic schema operation on subscription state. | `22-§20-1`, `22-§20-3`, `22-§20-4`, `22-§29-11`, `21-§16-2` |

### 19.4 Contract 22 §27 disclosures

| Item | Statement |
|---|---|
| Features advanced | Authority model, business isolation, confirmation binding, audit, Product & Price Master permissions (Contracts 21, 22, 20 §16, 17 §13/§14, 7 touched scope; Build Plan §7, §10.1) |
| Foundations reused | SB-P-1.11 executor roles, preview binding, idempotency and provenance; SB-P-1.10 inventory ledger and guards; Supabase Auth sessions |
| AI or channel consumption | None built here; the kernel contract is consumed by SB-P-1.13 and SB-P-1.20 |
| What exists and must not be duplicated | Catalog commands and executors; inventory ledger; transaction correction events; import and parser support |
| Outside this mission | Notification delivery (SB-P-1.15), location (SB-P-1.18), conversation and AI (SB-P-1.13), documents (SB-P-1.14), merchant lifecycle and transfer experience (SB-P-1.19), WhatsApp (SB-P-1.20) |
| Blockers and dependencies | ESC-1 (OPEN T8); `22-§20-2` BLOCKED; G-6/T4 and G-7 evidence; legal validation deferred. T8-EIS-1 is resolved by Founder Decision Record 09 |
| Required evidence | Section 18 suites; Section 17 evidence; Stage 10 and Stage 11 dispositions |

### 19.5 What SB-P-1.13 may depend on

**May depend on, once WS-A1, WS-A2 and WS-D are implemented, verified and accepted, and this EIS is locked:** the `authz.authorize` contract and reason codes; the capability registry, with SB-P-1.13 registering its own capabilities; the channel values `conversation`, `whatsapp` and `ai_tool`; `confirmation_bindings`; the shared idempotency pattern; `authority_events` and the denial contract; explicit active-business context.

**Remains gated for SB-P-1.13:** any assumption that production enforcement is current (G-6); WS-B remediation state; Reference Cost and margin projection (WS-C); identity and business lifecycle behaviour (ESC-1, WS-F, deletion design); transfer runtime (WS-G). SB-P-1.13 must not create authority tables, resolve business from single ownership, or treat AI or tool capability as authority.

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS-DEP-01` | Consumption contract for later missions (Section 19.5): the kernel API, capability registry, channel values, confirmation binding, idempotency, authority events and denial contract are the only authority surface later missions may use. | `21-§22`, `22-§28-2`, `22-§6-10`, `21-§8` |

## 20. Specialist-Finding Integration

| Finding | Where the architecture addresses it |
|---|---|
| SEC-S7-01 ESC-1 | Section 14; `EIS-ESC-01`–`EIS-ESC-08`; Section 18.3 |
| SEC-S7-02 Authority and isolation migration | Section 9.1 inventory precondition; Section 9.2 per-family migration; Owner-of-A/Manager-of-B tests; ER-4 handling in Section 9.2 |
| SEC-S7-03 WS-B and default grants | Section 9.3; `EIS-ISO-03`; WS-B gated on G-6 evidence; no blanket function revocation |
| SEC-S7-04 Reference Cost and margin | Section 12.3 projection on every path, including `SECURITY DEFINER` responses; Section 12.4 output boundary under Founder Decision Record 09 |
| SEC-S7-05 Revocation, confirmations, imports | Section 10.2 serialization; Section 10.3 five revocation points and truthful counts; `EIS-CNF-02`, `EIS-CNF-05` |
| SEC-S7-06 Service role and support | `EIS-ISO-04` privileged-operation contract per handler; `EIS-SUP-01`; no standing bypass; `/super-admin` not an authority surface |
| SEC-S7-07 Denial-audit durability | Section 11; `EIS-AUD-02` |
| SEC-S7-08 Neighbouring integrity rows | `EIS-ESC-03`, `EIS-ESC-04` cover `transactions`, `transaction_correction_events` and catalog history; `EIS-AUD-01` durability |
| SEC-S7-09 Evidence language | Section 2; Section 22.3 |
| SEC-128-02 (R1–R7) | Two final-ownership exits (`EIS-DEL-01`, `EIS-FRL-04`, `EIS-FRL-05`); former-Owner authority termination (`EIS-FRL-04`); transferred-business survival and isolation (`EIS-ESC-02`, `EIS-ESC-03`); transfer is not deletion (Section 14.2) |
| SEC-137-02, -03 | `EIS-DEL-01`, `EIS-DEL-02` with commit-time recheck |
| SEC-137-04 | `EIS-ESC-03`, `EIS-ESC-04`, `EIS-DEL-03` |
| SEC-137-05 | `EIS-ESC-01`, `EIS-ESC-02`, `EIS-ESC-05`; Section 18.3 |
| SEC-137-06 | Section 16; `EIS-LEG-*` |
| SEC-137-10, -11 | `transactions.creator_id` and correction cascade treated in Section 14.1; transferred-business consequence tested in Section 18.3 item 5 |
| SEC-137-12 | ESC-1 treated as one T8 with four manifestations |
| SEC-137-13 | E16 direction adopted in Sections 14 and 15 |
| SEC-137-01, -07, -08, -09, -14 | Source-accounting and totals findings; realized through the Section 22 traceability rather than a mechanism |

## 21. Engineering Questions, Risks and T1–T8 Screen

### 21.1 Questions for Stage 10

| ID | Question | Route |
|---|---|---|
| EQ-S9-1 | T8-EIS-1: per-product cost-only delegation arithmetically discloses unit margin (raised in version 0.1) | **RESOLVED BY FOUNDER DECISION RECORD 09** (Section 12.4) |
| EQ-S9-2 | Minimum group size for aggregated margin output to a margin-only delegate (version 0.1) | **Withdrawn**: the aggregate-only margin behaviour was unapproved (MC-150) and is removed in version 0.2 |
| EQ-S9-3 | Whether provider Auth deletion honours `RESTRICT` references as expected, and how backups treat de-identified data | Evidence (G-7), before any deletion runtime |
| EQ-S9-4 | Record-class decisions for operational tables that may keep `business_id` cascades | Stage 10 review of the source-complete inventory |
| EQ-S9-5 | The locked Blueprint's line 1 carries a Metadata row before the H1 | Mission Control (formatting only; no Product Truth effect) |

### 21.2 Risks

| Risk | Mitigation |
|---|---|
| Two authority paths live at once during migration | Per-family cut-over; inventory precondition; role matrix before and after |
| Kernel checks slow policy evaluation | `STABLE` helpers, indexed membership lookups, timing checks |
| `RESTRICT` keys make legitimate lifecycle work fail | Lifecycle hook processes record classes explicitly; tests cover it |
| Serialization lock contention on busy memberships | `FOR SHARE` on one row per command; revocation is rare; monitored in concurrency tests |
| Live state differs from repository (T4) | Evidence before reliance (Section 17) |

### 21.3 T1–T8 screen

| Trigger | Result |
|---|---|
| T1 | None |
| T2 | None: no source conflict found |
| T3 | None: no new product decision proposed; no orphan requirement adds behaviour |
| T4 | Unchanged; production `UNVERIFIED` |
| T5, T6 | None |
| T7 | None: all 267 rows stay `IN SCOPE`; no deferral or reclassification |
| T8 | ESC-1 stays open, with a safe-design direction proposed. T8-EIS-1, raised in version 0.1, is **RESOLVED BY FOUNDER DECISION RECORD 09** (Section 12.4) |

## 22. FCTM Traceability

### 22.1 Coverage summary

| Measure | Value |
|---|---|
| EIS requirements | 80 |
| `IN SCOPE` FCTM rows | 267 |
| Rows mapped to at least one requirement | 267 of 267 |
| Rows mapped to one requirement | 130 |
| Rows mapped to more than one requirement (one-to-many) | 137; maximum 8 requirements for one row |
| Requirements mapped to more than one row (many-to-one) | 76 |
| Requirements mapped to exactly one row | 3 |
| Requirement-to-row links | 460 |
| Engineering-only requirements (no row, recorded reason) | 1: `EIS-ENV-02` |
| Orphan requirements adding product behaviour | 0 |
| FCTM blob | `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` (unchanged) |

The requirement-to-row direction is in the requirement tables of Sections 7 to 19. The row-to-requirement direction follows.

### 22.2 Row-to-requirement table

| FCTM row | Blueprint | EIS requirements |
|---|---|---|
| `21-§4-1` | §8.1 | `EIS-ID-02`, `EIS-ID-04`, `EIS-FRL-04` |
| `21-§4-2` | §8.1 | `EIS-ID-02`, `EIS-KER-03`, `EIS-KER-04`, `EIS-PPM-03` |
| `21-§4-3` | §8.1 | `EIS-ID-02`, `EIS-KER-03` |
| `21-§4-4` | §8.1 | `EIS-ID-03` |
| `21-§4-5` | §8.1 | `EIS-ID-03` |
| `21-§4-6` | §8.1 | `EIS-ID-03` |
| `21-§5-1` | §8.2 | `EIS-ID-01`, `EIS-KER-01` |
| `21-§5-2` | §8.2 | `EIS-ID-02`, `EIS-KER-01`, `EIS-FRL-03` |
| `21-§5-3` | §8.2 | `EIS-ID-02`, `EIS-KER-01` |
| `21-§5-4` | §8.2 | `EIS-KER-01`, `EIS-KER-04`, `EIS-PPM-03`, `EIS-PPM-04` |
| `21-§5-5` | §8.2 | `EIS-KER-01`, `EIS-KER-08` |
| `21-§5-6` | §8.2 | `EIS-KER-01`, `EIS-KER-08` |
| `21-§5-7` | §8.2 | `EIS-KER-01`, `EIS-KER-05` |
| `21-§5-8` | §8.2 | `EIS-KER-01`, `EIS-KER-06` |
| `21-§5-9` | §8.2 | `EIS-KER-01` |
| `21-§5-10` | §8.2 | `EIS-KER-01`, `EIS-KER-05`, `EIS-FRL-05` |
| `21-§6-1` | §8.3 | `EIS-ISO-01` |
| `21-§6-2` | §8.3 | `EIS-ISO-01` |
| `21-§6-3` | §8.3 | `EIS-ISO-06` |
| `21-§6-4` | §8.3 | `EIS-ISO-05`, `EIS-ENV-01` |
| `21-§6-5` | §8.3 | `EIS-ISO-05` |
| `21-§6-6` | §8.3 | `EIS-ID-05`, `EIS-ISO-04`, `EIS-ISO-07` |
| `21-§6-7` | §8.3 | `EIS-ID-06`, `EIS-ISO-07`, `EIS-FRL-02` |
| `21-§7` | §8.4 | `EIS-KER-01`, `EIS-ISO-02` |
| `21-§8` | §8.5 | `EIS-KER-02`, `EIS-KER-06`, `EIS-DEP-01` |
| `21-§9` | §8.5 | `EIS-KER-06`, `EIS-KER-07` |
| `21-§10-1` | §8.6 | `EIS-EXT-01` |
| `21-§10-2` | §8.6 | `EIS-EXT-01` |
| `21-§10-3` | §8.6 | `EIS-EXT-01` |
| `21-§10-4` | §8.6 | `EIS-EXT-01` |
| `21-§10-5` | §8.6 | `EIS-EXT-01` |
| `21-§10-6` | §8.6 | `EIS-KER-07`, `EIS-EXT-01` |
| `21-§11-1` | §8.7 | `EIS-ISO-02`, `EIS-ESC-03` |
| `21-§11-2` | §8.7 | `EIS-KER-08`, `EIS-ISO-02` |
| `21-§12-1` | §8.8 | `EIS-AUT-01` |
| `21-§12-2` | §8.8 | `EIS-AUT-01` |
| `21-§12-3` | §8.8 | `EIS-AUT-01` |
| `21-§12-4` | §8.8 | `EIS-AUT-01` |
| `21-§12-5` | §8.8 | `EIS-KER-09`, `EIS-AUT-01` |
| `21-§13-1` | §8.9 | `EIS-EXT-02` |
| `21-§13-2` | §8.9 | `EIS-EXT-02` |
| `21-§13-3` | §8.9 | `EIS-EXT-02` |
| `21-§14-1` | §8.10 | `EIS-SUP-01` |
| `21-§14-2` | §8.10 | `EIS-SUP-01` |
| `21-§14-3` | §8.10 | `EIS-SUP-01` |
| `21-§14-4` | §8.10 | `EIS-SUP-01` |
| `21-§14-5` | §8.10 | `EIS-SUP-01` |
| `21-§14-6` | §8.10 | `EIS-SUP-01` |
| `21-§14-7` | §8.10 | `EIS-SUP-01` |
| `21-§15-1` | §8.11 | `EIS-ID-06`, `EIS-KER-02`, `EIS-FRL-02` |
| `21-§15-2` | §8.11 | `EIS-KER-02` |
| `21-§15-3` | §8.11 | `EIS-ID-06`, `EIS-KER-02` |
| `21-§15-4` | §8.11 | `EIS-KER-02` |
| `21-§15-5` | §8.11 | `EIS-KER-02`, `EIS-SUP-01`, `EIS-ISO-04` |
| `21-§16-1` | §8.12 | `EIS-KER-05` |
| `21-§16-2` | §8.12 | `EIS-KER-05`, `EIS-GOV-03` |
| `21-§17` | §8.13 | `EIS-KER-09`, `EIS-CNF-02`, `EIS-CNF-05`, `EIS-FRL-03` |
| `21-§18-1` | §8.14 | `EIS-CNF-01`, `EIS-FRL-04` |
| `21-§18-2` | §8.14 | `EIS-CNF-01`, `EIS-FRL-04` |
| `21-§18-3` | §8.14 | `EIS-CNF-01` |
| `21-§18-4` | §8.14 | `EIS-CNF-01` |
| `21-§18-5` | §8.14 | `EIS-CNF-01` |
| `21-§18-6` | §8.14 | `EIS-CNF-01` |
| `21-§19-1` | §8.15 | `EIS-AUD-01` |
| `21-§19-2` | §8.15 | `EIS-AUD-01` |
| `21-§19-3` | §8.15 | `EIS-AUD-01` |
| `21-§19-4` | §8.15 | `EIS-AUD-01` |
| `21-§19-5` | §8.15 | `EIS-AUD-01` |
| `21-§19-6` | §8.15 | `EIS-AUD-01`, `EIS-AUD-02` |
| `21-§19-7` | §8.15 | `EIS-SUP-01`, `EIS-AUD-01` |
| `21-§19-8` | §8.15 | `EIS-AUT-01`, `EIS-AUD-01`, `EIS-AUD-03` |
| `21-§20-1` | §8.16 | `EIS-UX-01` |
| `21-§20-2` | §8.16 | `EIS-UX-01` |
| `21-§20-3` | §8.16 | `EIS-UX-01`, `EIS-UX-02` |
| `21-§20-4` | §8.16 | `EIS-UX-01` |
| `21-§20-5` | §8.16 | `EIS-AUD-02`, `EIS-UX-01` |
| `21-§21-1` | §8.17 | `EIS-AUD-05` |
| `21-§21-2` | §8.17 | `EIS-AUD-05` |
| `21-§21-3` | §8.17 | `EIS-SUP-01` |
| `21-§21-4` | §8.17 | `EIS-ISO-01`, `EIS-ISO-09` |
| `21-§21-5` | §8.17 | `EIS-AUD-05` |
| `21-§22` | §8.18 | `EIS-KER-01`, `EIS-GOV-01`, `EIS-DEP-01` |
| `21-§23-1` | §8.18 | `EIS-ISO-02` |
| `21-§23-2` | §8.18 | `EIS-KER-03` |
| `21-§23-3` | §8.18 | `EIS-KER-03`, `EIS-EXT-01` |
| `21-§23-4` | §8.18 | `EIS-SUP-01` |
| `21-§23-5` | §8.18 | `EIS-KER-02` |
| `21-§23-6` | §8.18 | `EIS-KER-05`, `EIS-ESC-01` |
| `21-§23-7` | §8.18 | `EIS-AUD-02`, `EIS-UX-01` |
| `21-§24-1` | §8.19 | `EIS-TST-02` |
| `21-§24-2` | §8.19 | `EIS-ISO-01`, `EIS-TST-02` |
| `21-§24-3` | §8.19 | `EIS-PPM-03`, `EIS-PPM-04`, `EIS-TST-02` |
| `21-§24-4` | §8.19 | `EIS-KER-08`, `EIS-ISO-02`, `EIS-TST-02` |
| `21-§24-5` | §8.19 | `EIS-EXT-01`, `EIS-TST-02` |
| `21-§24-6` | §8.19 | `EIS-KER-06`, `EIS-KER-07`, `EIS-TST-02` |
| `21-§24-7` | §8.19 | `EIS-EXT-02`, `EIS-TST-02` |
| `21-§24-8` | §8.19 | `EIS-KER-09`, `EIS-CNF-02`, `EIS-TST-02` |
| `21-§24-9` | §8.19 | `EIS-KER-05`, `EIS-TST-02` |
| `21-§24-10` | §8.19 | `EIS-SUP-01`, `EIS-TST-02` |
| `21-§24-11` | §8.19 | `EIS-AUT-01`, `EIS-TST-02` |
| `21-§24-12` | §8.19 | `EIS-UX-01`, `EIS-TST-02` |
| `22-§5-1` | §8.20 | `EIS-ID-02` |
| `22-§5-2` | §8.20 | `EIS-ID-01`, `EIS-ID-02`, `EIS-ID-04` |
| `22-§5-3` | §8.20 | `EIS-ID-01`, `EIS-ID-02` |
| `22-§5-4` | §8.20 | `EIS-ID-01`, `EIS-ID-02` |
| `22-§5-5` | §8.20 | `EIS-ID-03` |
| `22-§5-6` | §8.20 | `EIS-ID-03` |
| `22-§5-7` | §8.20 | `EIS-ID-03` |
| `22-§5-8` | §8.20 | `EIS-ID-05`, `EIS-PPM-01` |
| `22-§5-9` | §8.20 | `EIS-ID-05`, `EIS-ISO-07` |
| `22-§6-1` | §8.21 | `EIS-UX-02` |
| `22-§6-2` | §8.21 | `EIS-KER-06` |
| `22-§6-3` | §8.21 | `EIS-KER-06`, `EIS-ISO-06` |
| `22-§6-4` | §8.21 | `EIS-ISO-02`, `EIS-ISO-04` |
| `22-§6-5` | §8.21 | `EIS-ISO-01` |
| `22-§6-6` | §8.21 | `EIS-AUT-01` |
| `22-§6-7` | §8.21 | `EIS-ISO-04` |
| `22-§6-8` | §8.21 | `EIS-ISO-05` |
| `22-§6-9` | §8.21 | `EIS-KER-06` |
| `22-§6-10` | §8.21 | `EIS-KER-01`, `EIS-DEP-01` |
| `22-§13-1` | §8.22 | `EIS-CNF-03` |
| `22-§13-2` | §8.22 | `EIS-CNF-03` |
| `22-§13-3` | §8.22 | `EIS-CNF-01` |
| `22-§13-4` | §8.22 | `EIS-CNF-02` |
| `22-§13-5` | §8.22 | `EIS-CNF-01` |
| `22-§14-1` | §8.23 | `EIS-AUD-04` |
| `22-§14-2` | §8.23 | `EIS-AUD-03` |
| `22-§14-3` | §8.23 | `EIS-AUD-03` |
| `22-§14-4` | §8.23 | `EIS-AUD-04` |
| `22-§14-5` | §8.23 | `EIS-AUD-04`, `EIS-ESC-04` |
| `22-§14-6` | §8.23 | `EIS-AUD-04` |
| `22-§14-7` | §8.23 | `EIS-CNF-01` |
| `22-§14-8` | §8.23 | `EIS-AUD-04` |
| `22-§14-9` | §8.23 | `EIS-AUD-03` |
| `22-§15` | §8.24 | `EIS-CNF-04`, `EIS-CNF-05` |
| `22-§16-2` | §8.17 | `EIS-AUD-05` |
| `22-§17` | §8.25 | `EIS-CNF-06` |
| `22-§19` | §8.25 | `EIS-CNF-06` |
| `22-§20-1` | §8.26 | `EIS-ESC-06`, `EIS-ESC-08`, `EIS-GOV-03` |
| `22-§20-2` | §8.26 | `EIS-ESC-01`, `EIS-ESC-02`, `EIS-ESC-03`, `EIS-ESC-04`, `EIS-ESC-05`, `EIS-ESC-06`, `EIS-ESC-07`, `EIS-TST-03` |
| `22-§20-3` | §8.26 | `EIS-KER-05`, `EIS-GOV-03` |
| `22-§20-4` | §8.26 | `EIS-ESC-08`, `EIS-GOV-03` |
| `22-§21` | §8.27 | `EIS-ISO-08` |
| `22-§22` | §8.27 | `EIS-TST-01` |
| `22-§23-1` | §8.28 | `EIS-ISO-09` |
| `22-§23-2` | §8.28 | `EIS-ISO-01` |
| `22-§23-3` | §8.28 | `EIS-SUP-01` |
| `22-§23-4` | §8.28 | `EIS-SUP-01` |
| `22-§23-5` | §8.28 | `EIS-ISO-09` |
| `22-§23-6` | §8.28 | `EIS-ISO-09` |
| `22-§23-7` | §8.28 | `EIS-ISO-09` |
| `22-§27-1` | §8.29 | `EIS-GOV-01` |
| `22-§27-2` | §8.29 | `EIS-GOV-01` |
| `22-§27-3` | §8.29 | `EIS-GOV-01` |
| `22-§27-4` | §8.29 | `EIS-GOV-01` |
| `22-§27-5` | §8.29 | `EIS-GOV-01` |
| `22-§27-6` | §8.29 | `EIS-GOV-01` |
| `22-§27-7` | §8.29 | `EIS-GOV-01` |
| `22-§28-1` | §8.30 | `EIS-GOV-02` |
| `22-§28-2` | §8.30 | `EIS-KER-01`, `EIS-GOV-02`, `EIS-DEP-01` |
| `22-§28-3` | §8.30 | `EIS-GOV-02` |
| `22-§28-4` | §8.30 | `EIS-AUT-01`, `EIS-GOV-02` |
| `22-§28-5` | §8.30 | `EIS-GOV-02` |
| `22-§28-6` | §8.30 | `EIS-ID-03`, `EIS-GOV-02` |
| `22-§28-7` | §8.30 | `EIS-AUD-05`, `EIS-GOV-02` |
| `22-§28-8` | §8.30 | `EIS-KER-05`, `EIS-GOV-02` |
| `22-§28-9` | §8.30 | `EIS-KER-02`, `EIS-GOV-02` |
| `22-§28-10` | §8.30 | `EIS-GOV-02` |
| `22-§29-3` | §8.31 | `EIS-KER-06`, `EIS-ISO-01`, `EIS-TST-02` |
| `22-§29-6` | §8.31 | `EIS-ID-03`, `EIS-TST-02` |
| `22-§29-7` | §8.31 | `EIS-CNF-02`, `EIS-TST-02` |
| `22-§29-8` | §8.31 | `EIS-CNF-04`, `EIS-TST-02` |
| `22-§29-10` | §8.31 | `EIS-CNF-06`, `EIS-TST-02` |
| `22-§29-11` | §8.31 | `EIS-ESC-07`, `EIS-GOV-03`, `EIS-TST-02` |
| `22-§29-12` | §8.31 | `EIS-AUD-04`, `EIS-ESC-07`, `EIS-TST-02` |
| `22-§29-14` | §8.31 | `EIS-GOV-01` |
| `22-§33-1` | §8.37 | `EIS-DEL-02` |
| `22-§33-2` | §8.37 | `EIS-ID-01`, `EIS-DEL-03` |
| `22-§33-3` | §8.37 | `EIS-DEL-01` |
| `22-§33-4` | §8.37 | `EIS-FRL-04`, `EIS-FRL-05`, `EIS-ESC-06`, `EIS-DEL-01` |
| `22-§33-5` | §8.37 | `EIS-FRL-03`, `EIS-DEL-01` |
| `22-§33-6` | §8.37 | `EIS-FRL-04`, `EIS-DEL-01` |
| `22-§33-7` | §8.37 | `EIS-DEL-01`, `EIS-DEL-06` |
| `22-§33-8` | §8.37 | `EIS-ESC-03`, `EIS-DEL-01` |
| `22-§33-9` | §8.37 | `EIS-DEL-02` |
| `22-§33-10` | §8.37 | `EIS-DEL-01` |
| `22-§33-11` | §8.37 | `EIS-FRL-05`, `EIS-DEL-01` |
| `22-§33-12` | §8.37 | `EIS-DEL-03` |
| `22-§33-13` | §8.37 | `EIS-DEL-06` |
| `22-§33-14` | §8.37 | `EIS-DEL-03` |
| `22-§33-15` | §8.37 | `EIS-DEL-04` |
| `22-§33-16` | §8.37 | `EIS-LEG-01` |
| `22-§33-17` | §8.37 | `EIS-ESC-03`, `EIS-ESC-04` |
| `22-§33-18` | §8.37 | `EIS-FRL-04`, `EIS-ESC-02` |
| `22-§33-19` | §8.37 | `EIS-ESC-03`, `EIS-DEL-03` |
| `22-§33-20` | §8.37 | `EIS-ESC-01`, `EIS-ESC-02` |
| `22-§33-21` | §8.37 | `EIS-DEL-05` |
| `22-§33-22` | §8.37 | `EIS-ESC-01`, `EIS-ESC-02`, `EIS-ESC-05`, `EIS-DEL-02` |
| `22-§33-23` | §8.37 | `EIS-ID-01`, `EIS-DEL-03`, `EIS-LEG-01` |
| `22-§33-24` | §8.37 | `EIS-ESC-06`, `EIS-LEG-01` |
| `22-§33-25` | §8.37 | `EIS-LEG-01` |
| `22-§33-26` | §8.37 | `EIS-DEL-06`, `EIS-LEG-02` |
| `22-§33-27` | §8.37 | `EIS-LEG-01` |
| `22-§33-28` | §8.37 | `EIS-DEL-04`, `EIS-LEG-01` |
| `22-§33-29` | §8.37 | `EIS-LEG-01` |
| `22-§33-30` | §8.37 | `EIS-LEG-01`, `EIS-LEG-03` |
| `22-§33-31` | §8.37 | `EIS-DEL-01`, `EIS-DEL-07` |
| `22-§33-32` | §8.37 | `EIS-FRL-04`, `EIS-FRL-05`, `EIS-DEL-07` |
| `22-§33-33` | §8.37 | `EIS-DEL-01`, `EIS-DEL-07` |
| `22-§33-34` | §8.37 | `EIS-FRL-04`, `EIS-DEL-01`, `EIS-DEL-07` |
| `22-§33-35` | §8.37 | `EIS-DEL-06`, `EIS-DEL-07` |
| `22-§33-36` | §8.37 | `EIS-ESC-04`, `EIS-DEL-07` |
| `22-§33-37` | §8.37 | `EIS-DEL-04`, `EIS-DEL-07` |
| `22-§33-38` | §8.37 | `EIS-DEL-05`, `EIS-DEL-07` |
| `22-§33-39` | §8.37 | `EIS-ESC-01`, `EIS-ESC-05`, `EIS-DEL-07`, `EIS-TST-03` |
| `20-§16-1` | §8.32 | `EIS-ID-02`, `EIS-ID-04`, `EIS-FRL-01` |
| `20-§16-2` | §8.32 | `EIS-KER-04`, `EIS-FRL-01` |
| `20-§16-3` | §8.32 | `EIS-KER-03`, `EIS-FRL-01` |
| `20-§16-4` | §8.32 | `EIS-FRL-01`, `EIS-FRL-02` |
| `20-§23-11` | §8.32 | `EIS-KER-03`, `EIS-FRL-01` |
| `17-§13-1` | §8.33 | `EIS-ID-02` |
| `17-§13-2` | §8.33 | `EIS-ID-02`, `EIS-KER-03`, `EIS-PPM-03` |
| `17-§13-3` | §8.33 | `EIS-ID-02`, `EIS-KER-03` |
| `17-§13-4` | §8.33 | `EIS-ID-03`, `EIS-EXT-02` |
| `17-§14-1` | §8.33 | `EIS-ISO-02`, `EIS-UX-02` |
| `17-§14-2` | §8.33 | `EIS-KER-01` |
| `17-§14-3` | §8.33 | `EIS-KER-01` |
| `17-§14-4` | §8.33 | `EIS-KER-01` |
| `17-§14-5` | §8.33 | `EIS-KER-01` |
| `17-§14-6` | §8.33 | `EIS-KER-01` |
| `17-§14-7` | §8.33 | `EIS-ISO-02`, `EIS-UX-02` |
| `17-§16-1` | §8.33 | `EIS-UX-02` |
| `17-§18-1` | §8.33 | `EIS-ISO-01` |
| `17-§18-2` | §8.33 | `EIS-KER-03`, `EIS-KER-07`, `EIS-PPM-04` |
| `17-§18-4` | §8.33 | `EIS-KER-07` |
| `17-§21-4` | §8.33 | `EIS-KER-03`, `EIS-KER-07`, `EIS-PPM-04` |
| `17-§22-2` | §8.33 | `EIS-PPM-03`, `EIS-PPM-04`, `EIS-TST-02` |
| `17-§22-3` | §8.33 | `EIS-EXT-01`, `EIS-TST-02` |
| `17-§22-9` | §8.33 | `EIS-ISO-01`, `EIS-TST-02` |
| `17-§22-10a` | §8.33 | `EIS-UX-02`, `EIS-TST-02` |
| `7-§7` | §8.34 | `EIS-PPM-05` |
| `7-§9` | §8.34 | `EIS-PPM-05` |
| `7-§10-1` | §8.34 | `EIS-ID-02`, `EIS-PPM-02` |
| `7-§10-2` | §8.34 | `EIS-ID-02`, `EIS-PPM-02`, `EIS-PPM-03` |
| `7-§10-3` | §8.34 | `EIS-ID-02`, `EIS-PPM-02` |
| `7-§10-4` | §8.34 | `EIS-ID-03`, `EIS-PPM-02` |
| `7-§12` | §8.34 | `EIS-KER-01`, `EIS-PPM-01` |
| `7-§15-10` | §8.34 | `EIS-PPM-02`, `EIS-TST-02` |
| `7-§15-12` | §8.34 | `EIS-ISO-01`, `EIS-TST-02` |
| `BP-§10.1-1` | §8.1 | `EIS-ID-02`, `EIS-TST-02` |
| `BP-§10.1-2` | §8.2, §8.20 | `EIS-ID-01`, `EIS-ID-02` |
| `BP-§10.1-3` | §8.2 | `EIS-KER-01`, `EIS-KER-03`, `EIS-PPM-03` |
| `BP-§10.1-4` | §8.8 | `EIS-KER-04`, `EIS-AUT-01` |
| `BP-§10.1-5` | §8.13 | `EIS-KER-09`, `EIS-CNF-02`, `EIS-CNF-05`, `EIS-TST-02` |
| `BP-§10.1-6` | §8.3 | `EIS-ID-06`, `EIS-ISO-01` |
| `BP-§10.1-7` | §8.36 | `EIS-ISO-01`, `EIS-ISO-03`, `EIS-TST-03`, `EIS-ENV-01` |
| `BP-§10.1-8` | §8.36, §13 | `EIS-ISO-03`, `EIS-TST-03`, `EIS-ENV-01` |
| `BP-§10.1-9` | §8.36 | `EIS-TST-01`, `EIS-TST-04` |
| `BP-§10.1-10` | §8.12 | `EIS-KER-05` |
| `BP-§10.1-11` | §8.35 | `EIS-PPM-01`, `EIS-PPM-02` |
| `BP-§10.1-12` | §8.35 | `EIS-PPM-06` |
| `BP-§10.1-13` | §8.35 | `EIS-ID-04`, `EIS-PPM-05`, `EIS-PPM-06`, `EIS-ESC-08`, `EIS-TST-04` |
| `BP-§7-1` | §8.35 | `EIS-PPM-05` |
| `BP-§7-2` | §8.35 | `EIS-PPM-05` |
| `BP-§7-3` | §8.35 | `EIS-PPM-05` |
| `BP-§7-4` | §8.35 | `EIS-PPM-05` |
| `BP-§7-5` | §8.35 | `EIS-PPM-06` |

### 22.3 What traceability does not prove

A mapping shows where an obligation is realized in the design. It is not implementation, runtime or production evidence. Stage 7 `FEASIBLE`, `CONDITIONAL`, `PENDING` and `N/R` labels and Security review status are not implementation evidence.

## 23. Status

This EIS is a DRAFT for Mission Control's Stage 10 review. It is not locked. Product Blueprint: `APPROVED — LOCKED`. Implementation package, implementation, schema, SQL, migrations, provider mutation, identity-deletion runtime and production action: NOT AUTHORIZED. ESC-1 stays OPEN T8; `22-§20-2` stays `BLOCKED` / `IN SCOPE`; G-6/T4 stays `UNVERIFIED`; professional legal, privacy and retention validation stays deferred; T8-EIS-1 is resolved by Founder Decision Record 09.

## 24. Document Change Log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-09-30 | Claude Code (MC-148) | Initial Stage 9 draft |
| 0.2 | 2026-09-30 | Claude Code (MC-151) | Finding-scoped Stage 10 correction under Founder Decision Record 09: Section 12.4 rewritten; `EIS-PPM-04` rewritten and no longer held; aggregate-only margin behaviour removed; T8-EIS-1 / EQ-S9-1 resolved and EQ-S9-2 withdrawn; dependent status references in Sections 1, 3, 19.4, 19.5, 20, 21 and 23. No other requirement, mapping or architecture changed |
