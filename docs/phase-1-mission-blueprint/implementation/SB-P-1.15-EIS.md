# SB-P-1.15 — Engineering Implementation Specification

STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED

**IMPLEMENTATION NOT AUTHORIZED.** This EIS specifies how the locked SB-P-1.15 Blueprint is to be built. It authorizes no code, SQL, migration, scheduler or provider activation, negative-test execution, deployment or release.

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO |
| Document | Engineering Implementation Specification (EIS) |
| Lifecycle stage | Source 18 v1.2 Stage 10 — EIS Review: corrective revision (C1 = IR15-10-01, C2 = IR15-10-02) |
| Status | `DRAFT — MISSION CONTROL REVIEW REQUIRED` |
| Author | Claude Code (Stage 9 EIS drafter; also author of Stages 2–7; not independent review) |
| Authorization | SB-P-1.15-MC-84, `communication/missions/SB-P-1.15/mission-control/84-stage9-eis-source-pack-disposition-and-documentation-authority.md` (blob `8e6b0088`), canonical at `main@2bce2d634ac3a6e8375e732ddadb966266bd643a` (PR #944) |
| Related Product Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.15.md`, blob `0ab2ad6f12cedc54836d766bac7a2e9c0e1e03e5` (`APPROVED — LOCKED`, Stage 8, MC-81) |
| Canonical FCTM | `communication/missions/SB-P-1.15/claude-code/03-stage2-populated-fctm.md`, blob `65eeaf8d31b81595b971c22895615a096555f84f`: 803 rows, 694 `IN SCOPE` |
| Founder decisions | FPDR-01 (`founder/02`, `0e0928fe`); FPDR-02 (`founder/03`, `373a31df`); FPDR-03 (`founder/04`, `2382846b`); MC-74 DC-03; MC-75 D1–D3; MC-80 U-3 allocation. Unqualified `FPDR-0n` means SB-P-1.15; upstream decisions are written `SB-P-1.1n FPDR-n` |
| Requirements | 147 (`EIS15-*`) |
| Date | 2026-10-12 |
| Revision | Stage 10 corrective revision of the canonical Stage 9 EIS (blob `6bee0a013ceca4d4a3d68d36bce913d93997deb7`, PR #945, `main@d78df021`); the 141 Stage 9 requirement IDs are preserved and 6 are added |
| Next gate | Mission Control Stage 10 re-review (with DC-06 security review), then Stage 11 — EIS Lock |

## 2. Purpose and Authority

This EIS realizes the locked Blueprint, its Stage 7 Engineering Review v0.3 (Sections 20–21), the six accepted Stage 7 specialist reviews (44 findings) and the MC-78 material-assurance closure. It changes no Product Truth, FCTM row, disposition, owning mission, build commitment, commercial classification or Founder decision, and it resolves no Founder-reserved question.

Stage 10 corrective revision. Mission Control's Stage 10 review raised IR15-10-01 to IR15-10-06. This revision applies corrections C1 and C2 and carries the remaining findings into exact requirement, verification and hold references:

| Finding | Correction or carry | EIS references | Hold and verification |
|---|---|---|---|
| IR15-10-01 | C1 — timezone lifecycle | Section 10.1; `EIS15-TZ-01`, `-03`, `-04`, `-06`, `-09` (new), `-10` (new); `EIS15-VER-05`, `-07` | `H-TZC`, `H-TZ`; Stage 17 verification |
| IR15-10-02 | C2 — DC-06 data-access enforcement | Section 8.1; `EIS15-AUTHZ-04`, `-08` to `-11` (new); `EIS15-VER-01` | DC-06 — PROPOSED; Stage 10 security review; Founder T6/T3 for merchant-facing grants |
| IR15-10-03 | Atomic-effect and reconciliation boundaries (carried) | `EIS15-SCH-05`, `-06`, `EIS15-MIG-04`, `EIS15-VER-05`, `-06` | `H-IDEM`, `H-DTX`, `H-MIG`; Stage 17 and test-project rehearsal |
| IR15-10-04 | Legacy-test environment controls (carried) | Section 24.2; `EIS15-VER-LEG`, `EIS15-MIG-04`, `EIS15-HOLD-ENV` | Test-project access `UNVERIFIED — ACCESS REQUIRED`; Stages 17–19 |
| IR15-10-05 | Effective privileges (carried) | `EIS15-SEC-02`, `EIS15-VER-02` | `H-BIRTH`; Stage 19 non-author verifier |
| IR15-10-06 | Private-review limitations (carried) | `EIS15-HOLD-PAR`; Section 3 | `H-PAR`; Mission Control |

MC-84 decisions applied: **P1** — `20-§23-10` is traced in a separate governance-allocated table (Section 29.4) outside the 694-row count, with its canonical FCTM status unchanged; **P2** — Manager intelligence is deny-by-default with explicit current Owner delegation, and the section/domain granularity is **DC-06 — PROPOSED; STAGE 10 SECURITY REVIEW REQUIRED** (`EIS15-AUTHZ-04`); **P3** — Source 02 §7 is cited only as the definition of the obsolete 06:00/09:15 artifacts for `EIS15-VER-LEG`.

**Specified is not deployed.** Every upstream EIS cited here (SB-P-1.12, SB-P-1.13, SB-P-1.14) is locked as a specification but **not implemented**. Every table, command, role and worker in this EIS is `SPECIFIED — NOT DEPLOYED` (`EIS15-ARC-03`).

## 3. Canonical Inputs Read

| Input | Path | Blob |
|---|---|---|
| Source 18 v1.2 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | `0945bda6` |
| Phase 1 operating pattern | `mission-control/SB-P-Phase 1 operating pattern.md` | `39b1bc36` |
| Locked Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.15.md` | `0ab2ad6f` |
| Stage 7 report | `communication/missions/SB-P-1.15/claude-code/11-stage7-engineering-review-report.md` | `230b82f9` |
| FCTM | `communication/missions/SB-P-1.15/claude-code/03-stage2-populated-fctm.md` | `65eeaf8d` |
| Specialist reports S7-SP-1 to S7-SP-6 | `communication/missions/SB-P-1.15/specialists/01`–`06` | `43b3b7a7`, `bd5041b6`, `34148818`, `e0c512c3`, `65611102`, `d1096aae` |
| Governance | MC-77 (`78-…`), MC-78 (`79-…`), MC-79 (`80-…`), MC-80 (`81-…`), MC-81 (`82-…`), MC-82 (`83-…`), MC-84 (`84-…`) | `f9a84f19`, `53cd12c5`, `7c5e58c7`, `55339340`, `9303c44d`, `3134c3df`, `8e6b0088` |
| Upstream EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`, `SB-P-1.13-EIS.md`, `SB-P-1.14-EIS.md` | `c444f750`, `9a1e723d`, `899a0fe1` |
| Legacy schedule evidence (P3) | `merge/active/02_Supabase_Architecture_Framework.md` §7 | `b35ebc2b` |
| Feature sources | `docs/phase-1-mission-blueprint/smart-business-features/04_Daily_Intelligence_Rhythm.md`, `20_Onboarding_and_First_Experience.md` | read-only |

Not read and not relied on: the private S7-PAR §8.5 derivative v2, the private 22-MATERIAL register and the private MC-77 closure artifact (`H-PAR`). PR #870 and PR #898 are frozen and untouched; PR #898 annexes remain draft evidence.

## 4. Implementation Principles

1. One foundation per concern; reuse before build (Contract 22 §27–§28).
2. Kernel first: every action through `authz.authorize`; no feature-local permission.
3. Commands are the only write boundary; one governed transactions-family write path (`DTX`/PQ-2).
4. Birth-safe objects proven by effective access, not by statements.
5. Identity before execution: logical work, attempt, lease, fence and effect are separate.
6. Business-local time only from an Owner-confirmed IANA timezone; history is never reinterpreted.
7. Native first; no outbound channel before SB-P-1.20; prospective-only correction notifications.
8. AI explains computed facts and never writes; retrieved content is untrusted.
9. Truthful status everywhere: no PASS, readiness or delivery claim without evidence.

## 5. Repository Baseline (at `main@d78df021582a31ff54e847f25ea7b5c3f5be96eb`)

| Area | Exists today | Specified here (not deployed) |
|---|---|---|
| Runtime | TanStack Start via nitro, Cloudflare default target; server entry exports only `fetch` | Scheduler wake-up runtime (selection gated, `EIS15-SCH-10`) |
| Scheduler | None; no database or platform cron; no `supabase/functions/` | `sched_*` foundation (Section 11) |
| Data | One business per Owner; no business timezone; no membership/role model in schema (SB-P-1.12 specified, not built) | Timezone, reminder, rule, notification and Daily Intelligence tables |
| Grants | July `20260727000000_reconcile_default_grants.sql` broad grants; August `20260830120000_…anon_privilege_hardening.sql` revokes future `postgres`-created `anon` defaults; `authenticated`/`service_role`/`supabase_admin` residuals; live state `UNVERIFIED — ACCESS REQUIRED` | Per-object birth-safe grants (Section 7) |
| Privileged client | Service-role `supabaseAdmin` bypasses RLS | Bound privileged operations (Section 9) |
| Transactions | Direct client insert; Owner-only legacy correction RPC; `notification_status` default `'pending'` with no consumer | Quarantine view (`EIS15-MIG-05`); DTX via SB-P-1.13/1.14 |
| AI | No AI SDK or provider in the repository | Consumption of SB-P-1.13 gateway only |
| Last migration | `20260902150000_sb_ops_prod_sync_1_0_instr1_8_phase_b_inventory_item_uniqueness.sql` | Groups M1–M8 (Section 22) |
| CI | Workflows exist; last `main` runs 2026-09-30; no required checks | Section 23 |

## 6. Target Architecture and Upstream Interfaces

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-ARC-01` | **One foundation per concern.** SB-P-1.15 adds five modules on the shared kernel and reuses them everywhere: one Reminder Engine, one standing-rule (delegated automation) model, one scheduler foundation, one native Notification Foundation, one Daily Intelligence pipeline, plus Ask CFO on the SB-P-1.13 Workspace. No feature may create its own reminder table, scheduler, notification sender, Business Memory copy, permission engine or AI orchestrator. New subsystems must name the foundation they reuse. | SP2-07 | 103 |
| `EIS15-ARC-02` | **Upstream interfaces consumed, not re-implemented.** The module consumes, and never re-implements: SB-P-1.12 `EIS-KER-01` (`authz.authorize`), `EIS-KER-03`/`-04` (capability registry and delegated grants), `EIS-KER-07` (Owner-intelligence boundary), `EIS-KER-09` (revocation serialization), `EIS-ISO-02` (commands as the only write boundary), `EIS-ISO-04` (privileged-operation contract), `EIS-ISO-06`/`-07` (context and reference isolation), `EIS-CNF-04` (idempotency pattern), `EIS-AUD-01` (authority events); SB-P-1.13 `EIS13-AUTH-01` to `-04`, `EIS13-GW-01`, `EIS13-GW-04`, `EIS13-CTX-02`, `EIS13-CTX-03`, `EIS13-TOOL-01`/`-02`, `EIS13-CNF-02`/`-03`, `EIS13-CMD-01`/`-02`, `EIS13-IDM-01`/`-02`, `EIS13-TEL-02`; SB-P-1.14 `EIS14-ARC-02`, `EIS14-LDG-04` to `-06`, `EIS14-CMD-01`/`-02`, `EIS14-IDM-01`/`-03`, `EIS14-RTV-01`, `EIS14-SRC-03`, `EIS14-SEC-01`/`-02`. **These are locked specifications, not deployed code** (Section 5). | MIG15-S7-07 | 39 |
| `EIS15-ARC-03` | **Specified versus deployed register.** Every interface in `EIS15-ARC-02` and every table in Sections 10–16 is classified as **SPECIFIED — NOT DEPLOYED** until a later stage records repository and runtime evidence. No document, package or report may describe a specified component as available, and Section 5 lists what exists today. | MIG15-S7-07 | 8 |
| `EIS15-ARC-04` | **Channel independence and native-first.** Reminder, briefing, notification and Ask CFO truth is channel-independent: native dashboard and Workspace surfaces are the system of record and work with WhatsApp or Meta disconnected. Channel adapters (SB-P-1.20) consume the foundation and may not hold separate state. No email, SMS, push, Resend or WhatsApp sending exists before SB-P-1.20 (FDB-2). | NTF15-05 | 34 |

## 7. Security, Birth-Safe Objects, RLS and Grants

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-SEC-01` | **Atomic birth-safe object creation.** Every new table, view, sequence and function is created and hardened in the same migration transaction: `REVOKE ALL` from `PUBLIC` and `anon`, explicit minimal grants to `authenticated` (or none), `ENABLE ROW LEVEL SECURITY` with policies before any grant, and no window in which the object is externally usable. Reliance on the August 2026 `anon` default-privilege revocation alone is prohibited; `authenticated`, `service_role` and `supabase_admin` defaults are handled per object. | SEC15-S7-01, MIG15-S7-03 | 265 |
| `EIS15-SEC-02` | **Effective-access proof, not statements.** `H-BIRTH` closes only on object-specific effective-privilege evidence: creator-role and default-ACL inventory; per-table grants and RLS policies; function signatures and overloads with `PUBLIC`/`anon`/`authenticated`/`service_role` `EXECUTE`; owner, `SECURITY INVOKER`/`DEFINER` mode and pinned `search_path`; view and sequence privileges. Evidence is captured from the migrated test database (Section 24). Applies to every object added by `EIS15-AUTHZ-08` and `EIS15-TZ-01` (IR15-10-05). | SEC15-S7-01 | 265 |
| `EIS15-SEC-03` | **Business-scoped RLS and composite references.** Every SB-P-1.15 table carries `business_id`; RLS predicates resolve the caller membership through the SB-P-1.12 kernel; every business-scoped reference is composite `(business_id, id)` (`EIS-ISO-07`) so a row can never point into another business. Direct client `INSERT`/`UPDATE`/`DELETE` is not granted; writes go through governed commands (`EIS-ISO-02`). | SEC15-S7-03 | 329 |
| `EIS15-SEC-04` | **Function security.** Read functions run `SECURITY INVOKER`. Any `SECURITY DEFINER` function is limited to command wrappers that call `authz.authorize` first, pins `search_path` to `pg_catalog, public` (or a dedicated schema), has no `EXECUTE` for `PUBLIC` or `anon`, and validates `business_id` against the bound authority decision. | SEC15-S7-01, SEC15-S7-02 | 269 |
| `EIS15-SEC-05` | **Cross-business effective-access matrix.** A matrix covering Owner, Manager (with and without delegation), Employee, former Owner, removed member, anonymous caller and service role, across dashboard, RPC, server functions, scheduler workers, notification processing and AI tools, specifies allow or deny for every SB-P-1.15 object and command. Cross-business access is denied on every path. The matrix is the source of the isolation tests in `EIS15-VER-02`. | SEC15-S7-03, SP2-07, NTF15-07 | 134 |
| `EIS15-SEC-06` | **No routine platform access.** No Super Admin, support or operator path reads reminders, standing rules, notifications, briefings or Ask CFO conversations. Any future support access uses the SB-P-1.12 temporary support grant (`EIS-SUP-01`) with consent and audit. | SEC15-S7-03 | 12 |

## 8. Authorization, Capabilities, Owner-Only Actions and DC-06

Locked Product Truth (MC-84 P2): Owner-default intelligence; no Manager intelligence or Ask CFO access by role alone; Manager access only through explicit, current Owner delegation; Employees never receive Owner intelligence; `tz.confirm`/`tz.change` are Owner-only and non-delegable. Anything finer is **DC-06 — PROPOSED; STAGE 10 SECURITY REVIEW REQUIRED**.

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-AUTHZ-01` | **Kernel consumption for every action.** Every read and command in this mission starts from the verified principal and explicit active business and calls `authz.authorize(business, action, target_type, target_id, context)` (`EIS-KER-01`, `EIS13-AUTH-01`). There is no feature-local role check and no AI- or trigger-created permission. | SEC15-S7-02, FIN15-S7-07 | 235 |
| `EIS15-AUTHZ-02` | **Capability set.** Capabilities registered as data in the SB-P-1.12 registry: `reminder.create`, `reminder.manage.own`, `reminder.manage.business`, `rule.create`, `rule.manage`, `notification.read.own`, `tz.confirm` (Owner-only, covering confirm and change), and the intelligence data capabilities `intel.cfo.ask`, `intel.ops`, `intel.sales`, `intel.expenses`, `intel.cash`, `intel.credit` (`EIS15-AUTHZ-08`). The Owner holds all by default. **The intelligence capability split is DC-06 — PROPOSED; STAGE 10 SECURITY REVIEW REQUIRED.** | AI15-S7-07 | 39 |
| `EIS15-AUTHZ-03` | **Owner-only, non-delegable timezone confirmation.** `tz.confirm` and `tz.change` require the verified principal to be the **current Owner** of the business at commit. The capability is not grantable, not part of any role default other than Owner, and not reachable through standing rules, AI tools or workers. Manager and Employee attempts are denied and audited (MC-74). | SP2-06 | 6 |
| `EIS15-AUTHZ-04` | **Manager intelligence: deny by default, explicit current delegation (DC-06).** Locked Product Truth: Ask CFO and Owner-wide intelligence are Owner-default; a Manager has **no** intelligence or Ask CFO access by role alone; access exists only through an explicit Owner delegation that is current at read time (`EIS-KER-04`, `EIS-KER-07`). Proposed security model, **DC-06 — PROPOSED; STAGE 10 SECURITY REVIEW REQUIRED** and not Product Truth: delegation is expressed only as the data capabilities of `EIS15-AUTHZ-08`, each scoped to one business with optional expiry; no capability implies another; enforcement is on data access (`EIS15-AUTHZ-08` to `-11`), not on screens or question categories. Any merchant-facing grant UI, default bundle or wording is not specified here and routes to Founder T6/T3 before use. There is no broad Manager fallback (IR15-10-02). | AI15-S7-07, SEC15-S7-03 | 29 |
| `EIS15-AUTHZ-05` | **Employee denial of Owner intelligence.** Employees and other roles never receive Owner intelligence, Ask CFO financial answers or another person's private reminders (`EIS13-AUTH-03`). Employee reminders are limited to permitted self and operational reminders; Employees cannot create standing automation. | SEC15-S7-03 | 30 |
| `EIS15-AUTHZ-06` | **Revocation at execution and commit.** Authority is evaluated when work is scheduled, re-evaluated when it executes and again at commit (`EIS13-CNF-02`, `EIS-KER-09`). A revoked, paused or expired authority fails the operation narrowly with a recorded reason; nothing executes on stale authority. | SP2-04, FIN15-S7-03, SEC15-S7-02 | 14 |
| `EIS15-AUTHZ-07` | **Current recipient and former-Owner ineligibility.** A former Owner or removed member loses read access, notification eligibility and briefing access immediately; eligibility is never inferred from historical ownership. | SEC15-S7-05, NTF15-03 | 2 |
| `EIS15-AUTHZ-08` | **Capability-to-projection map (DC-06).** **DC-06 — PROPOSED; STAGE 10 SECURITY REVIEW REQUIRED**. Each intelligence capability authorizes a fixed set of read projections and nothing else; the map is data in the SB-P-1.12 registry and versioned. Proposed map (Section 8.1 table): `intel.ops` → due reminders and operational signals (no money amounts); `intel.sales` → sales counts and amounts by period and method; `intel.expenses` → expense and purchase amounts; `intel.cash` → cash-in, cash-out and cash position; `intel.credit` → credit-method sales and recorded repayments by party (FDB-3); `intel.cfo.ask` → permission to use Ask CFO at all, granting no data. Restricted financial inputs (expenses, purchase cost and margin, cash position, owner withdrawals, party-level credit) are deny-by-default for every non-Owner principal. Projections are `SECURITY INVOKER` views or functions whose predicate calls `authz.has_capability(business, capability)` for the caller; RLS on the underlying read model remains in force (IR15-10-02). | AI15-S7-07, SEC15-S7-03, FIN15-S7-07 | 30 |
| `EIS15-AUTHZ-09` | **Authorization before retrieval and aggregation; derived metrics.** **DC-06 — PROPOSED; STAGE 10 SECURITY REVIEW REQUIRED**. Authorization is evaluated before any row is read: aggregation functions accept no business-wide input and compute only over projections the caller holds, so no total is computed over unauthorized rows and then filtered. A derived metric (profit, margin, net cash, ratios, shares, period differences) is computed only when the caller holds the capability of **every** input; otherwise it is not computed. No metric uses a restricted value as denominator, baseline or comparison (IR15-10-02). | FIN15-S7-07, FIN15-S7-04 | 38 |
| `EIS15-AUTHZ-10` | **Fact-level capability tags and mixed-response denial.** **DC-06 — PROPOSED; STAGE 10 SECURITY REVIEW REQUIRED**. Every typed fact (`EIS15-FIN-03`) carries the set of capabilities its inputs required. The AI tool registry exposes to a request only the retrieval tools whose capability the caller holds at that moment (`EIS13-AUTH-02`), so the model never receives an unauthorized fact and cannot explain one. Before rendering, the response assembler checks every referenced fact's capability set against the caller's current set. If a question needs an unauthorized fact, that part is replaced by an explicit statement that the information is not available to the user; if the answer cannot be given without it (for example a derived metric), the whole answer is denied with that statement. No partial figure, estimate or hint substitutes for a denied fact (IR15-10-02). | AI15-S7-02, AI15-S7-04, AI15-S7-07 | 294 |
| `EIS15-AUTHZ-11` | **Caches, briefings and revocation.** **DC-06 — PROPOSED; STAGE 10 SECURITY REVIEW REQUIRED**. Cached facts, Ask CFO responses and AI narratives are keyed by business, principal, capability-set hash and the kernel authority version (`EIS-KER-09`); a cache entry is never served to a different capability set. Daily Intelligence stores facts once per business but renders per viewer: a Manager sees only sections whose facts are within the held capabilities, and AI narrative is generated per capability set, never shared from the Owner's narrative. Any role change, delegation change or revocation increments the authority version, invalidates those caches and the conversation context (`EIS13-CTX-03`), and the next read re-evaluates; notifications built from a now-unauthorized fact are suppressed (`EIS15-NTF-03`) (IR15-10-02). | AI15-S7-03, SEC15-S7-05, NTF15-03 | 227 |

### 8.1 Proposed capability-to-projection map — DC-06 — PROPOSED; STAGE 10 SECURITY REVIEW REQUIRED

Not Product Truth. Owner holds every capability by default; Manager holds none until the Owner delegates; Employee can hold none of these.

| Capability | Read projections authorized | Restricted financial input | Never authorizes |
|---|---|---|---|
| `intel.cfo.ask` | None; permits use of Ask CFO only | — | Any data |
| `intel.ops` | Due reminders, operational signals without money amounts; later-owned signals when D17/D18 exist | No | Amounts, party balances |
| `intel.sales` | Sales counts and amounts by period and payment method | No | Expenses, cash position, margins |
| `intel.expenses` | Expense and purchase amounts | Yes | Sales detail, cash position |
| `intel.cash` | Cash-in, cash-out, cash position | Yes | Party-level credit |
| `intel.credit` | Credit-method sales and recorded repayments by party (FDB-3, never authoritative balances) | Yes | Expenses, cash position |

Derived metrics require every input capability (`EIS15-AUTHZ-09`): profit and margin need `intel.sales` and `intel.expenses`; net cash needs `intel.cash`; any share or ratio needs the capabilities of numerator and denominator.

## 9. Privileged Worker Isolation and Current-Authority Execution

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-PRIV-01` | **Privileged-operation binding.** Every service-role path follows `EIS-ISO-04`: the server function resolves the verified principal (human or rule grantor), business, capability and authorization decision before using elevated credentials, binds them to the operation, and records them. Plain service role is never treated as a human or merchant authority. | SEC15-S7-02 | 169 |
| `EIS15-PRIV-02` | **Least-privilege worker identities.** Scheduler, Daily Intelligence and notification workers run as distinct database roles. The Daily Intelligence worker can write only `di_slots` and `di_briefing_revisions`; the notification worker only `notification_*`; the scheduler only `sched_*`. No worker role holds Ledger write grants or `EXECUTE` on DTX commands except through a bound standing-rule effect (`EIS15-RUL-05`). | SEC15-S7-02, AI15-S7-04 | 169 |
| `EIS15-PRIV-03` | **Persisted business binding.** Each work item persists its `business_id` at creation; a worker cannot change it, cannot batch across businesses in one transaction and sets the business context before any read. Aggregate or background work never returns rows of another business. | SP2-07, SEC15-S7-03 | 114 |
| `EIS15-PRIV-04` | **No background creation of authority.** A background job may run maintenance or already-authorized actions but cannot create human or business authority, approve, or widen a standing rule. A historical trigger is not authority by itself. | SP2-04, FIN15-S7-03 | 7 |

## 10. Business Timezone Versioning

Implements MC-74 (DC-03) and MC-75 D2/D3. Merchant-visible states are specified semantically; final copy is accepted at Stage 17.

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-TZ-01` | **Versioned business timezone record.** Immutable table `business_timezone_versions(business_id, version, iana_zone, effective_from timestamptz, created_by_membership_id, created_at, evidence_ref)` with unique `(business_id, version)`; rows are never updated or deleted. Version state is not a column: it is the latest event in the append-only table `business_timezone_events(business_id, version, seq, event CHECK IN ('PENDING','ACTIVATED','SUPERSEDED','CANCELLED'), actor, reason, at)`, unique `(business_id, seq)`. A one-row-per-business pointer `business_timezone_heads(business_id PRIMARY KEY, active_version, pending_version, head_seq bigint)` is a derived index of the event log, changed only inside the commands of `EIS15-TZ-03`, `-09` and `-10` under row lock, and rebuildable from the events. Invariants: at most one `ACTIVATED` (active) and at most one `PENDING` version per business; a pending version always has `effective_from` later than the commit that created it. A business with no head row is `UNSET`. **No column with a default, no `NOT NULL`, no backfill** is added to `businesses`. State machine and transition rules: Section 10.1 (IR15-10-01). | SP2-05, SP2-06, MIG15-S7-02, SP2-07 | 57 |
| `EIS15-TZ-02` | **Non-authoritative suggestion.** Table `business_timezone_suggestions(business_id, iana_zone, evidence_kind, evidence_source, created_at, status)`. A suggestion records where the candidate came from (for example the Owner's device IANA zone at an authenticated session, or an Owner-entered locality). The scheduler, Daily Intelligence and reminder code never read it. It becomes effective only through `EIS15-TZ-03`. | SP2-06 | 6 |
| `EIS15-TZ-03` | **Governed confirm and change command.** First confirmation, `tz.confirm(business, iana_zone, idempotency_key, expected_head_seq)` on an `UNSET` business: validates the IANA name against `pg_timezone_names`, requires `EIS15-AUTHZ-03`, locks or creates the head row, compares `expected_head_seq`, and in one transaction writes version 1 with `effective_from` = commit instant, an `ACTIVATED` event, the head (`active_version` = 1, `head_seq` + 1) and a `TZ_CONFIRMED` audit event (MC-74; first confirmation is effective immediately and never backdated). Later changes use `tz.change` (`EIS15-TZ-10`). Concurrent commands with the same `expected_head_seq` give one winner and one `CONFLICT` returning the current head; the `EIS-CNF-04` idempotency key returns the original outcome on retry (IR15-10-01). | SP2-05, SP2-06 | 6 |
| `EIS15-TZ-04` | **Activation fence and no backfill.** A business is scheduler-eligible only with an active version. Slot and occurrence resolution uses `tz.version_at(business, instant)`: the pending version if one exists and `instant >= pending.effective_from`, otherwise the active version; it never returns a cancelled or superseded version and never returns any version for an instant before the first `effective_from`. The first slot or occurrence created after first confirmation is the first whose scheduled instant is strictly after `effective_from`. No earlier slot is created, backdated or caught up. | SP2-05, SP2-01 | 57 |
| `EIS15-TZ-05` | **Reminders saved before confirmation (MC-75 D2).** A time-based reminder may be saved while the business is `UNSET`. Its occurrences are `UNSCHEDULED`: no `sched_work`, no due state, no dispatch. On confirmation, only occurrences whose intended local time, interpreted in the confirmed zone, is still in the future become `SCHEDULED`; any whose time has passed become `NOT_SCHEDULED_TIME_PASSED` and never fire. The merchant sees both states (`EIS15-UX-02`). | SP2-06, MIG15-S7-02 | 17 |
| `EIS15-TZ-06` | **Timezone change at the next business-day boundary (MC-75 D3).** An Owner change (`EIS15-TZ-10`) creates version n+1 in state `PENDING` with `effective_from` = the first local midnight in the **newly selected** zone strictly after the change commit (MC-75 D3). The active version stays authoritative for every instant before that boundary. At the boundary `EIS15-TZ-09` activates it atomically. Generated briefings, completed or acknowledged occurrences, audit events and Ledger dates are never rewritten. Slot ownership: a slot belongs to the version effective at its scheduled instant; if a `(business, local_date, slot_code)` slot already exists from the prior version, it is not generated again (no duplicate); slots that fall in a gap created by the change are not generated later (no fabrication) (IR15-10-01). | SP2-05, MIG15-S7-05 | 6 |
| `EIS15-TZ-07` | **Local-time rules and historical meaning.** Business-local times convert with the confirmed IANA zone. A nonexistent local time (daylight-saving gap) maps to the first valid instant after it and is labelled; a repeated local time uses its first instance. Business day = local calendar date in the confirmed zone. Ledger `transaction_date` and historical briefing dates are never reinterpreted (`EIS14-LDG-04`). | SP2-05, SP2-08, MIG15-S7-05 | 57 |
| `EIS15-TZ-08` | **Option C exceptions.** Conflicting legacy schedule artifacts or ambiguous location evidence are quarantined (`quarantine_reason`, `quarantined_at`), never executed, and resolved only by an explicit Mission Control- or Founder-approved exception record referenced by audit. No automatic resolution exists. | SP2-06 | 6 |
| `EIS15-TZ-09` | **Atomic activation and supersession.** `tz.activate_due(business)` runs as an idempotent scheduler kind at each pending boundary and is also invoked by any worker that resolves an instant at or after a pending `effective_from`. In one transaction under the head-row lock it: re-reads the head; returns without change if the pending version is gone or not yet due; appends `SUPERSEDED` for the old active version and `ACTIVATED` for the pending one; sets `active_version` = pending, `pending_version` = null, `head_seq` + 1; marks `SUPERSEDED` (fence + 1) every not-yet-claimed `sched_work` and `SCHEDULED` reminder occurrence whose `tz_version` is the old version and whose scheduled instant is at or after the boundary; and writes `SCHEDULING_ACTIVATED`. The planner then materializes new-version work for those instants with the same logical identity rules; work delayed by planner lag runs late as the same logical item (`EIS15-SCH-09`), never as a fabricated catch-up. A worker holding a claim compares the work item's `tz_version` with `tz.version_at(business, scheduled_instant)` at execution and at commit; on mismatch the item becomes `SUPERSEDED` and commits nothing (IR15-10-01). | SP2-02, SP2-05, SP2-07 | 57 |
| `EIS15-TZ-10` | **Owner changes, consecutive changes and cancellation.** `tz.change(business, iana_zone, idempotency_key, expected_head_seq)` requires `EIS15-AUTHZ-03` and an active version, and under the head-row lock with the `head_seq` comparison: (a) no pending version and a zone different from the active zone: create a `PENDING` version (`EIS15-TZ-06`); (b) a pending version exists and the new zone differs from both active and pending: append `CANCELLED` (reason `REPLACED_BY_OWNER_CHANGE`) for the old pending version and create a new `PENDING` version whose boundary is computed from the new zone at this commit; (c) the new zone equals the active zone: append `CANCELLED` for the pending version, if any, and create no version (the Owner has reverted the change); (d) the new zone equals the pending zone: no change, return the existing pending version. Each outcome increments `head_seq`, fences (`SUPERSEDED`) any work already materialized for the cancelled version, and writes `TZ_CHANGED` or `TZ_CHANGE_CANCELLED` with prior and new zone. Cancellation happens only as a result of an Owner change; no separate merchant-facing cancel behaviour is specified, and no suggestion ever creates or activates a version (IR15-10-01). | SP2-05, SP2-06 | 6 |

### 10.1 Timezone version state machine (IR15-10-01)

Version rows are immutable; each version's state is its latest event in `business_timezone_events`. The head row is a derived pointer changed only by the commands below under row lock, each incrementing `head_seq`.

| From | Event | To | Command | Condition |
|---|---|---|---|---|
| (none) | `ACTIVATED` | `ACTIVATED` (active) | `tz.confirm` | Business `UNSET`; Owner; `effective_from` = commit instant |
| (none) | `PENDING` | `PENDING` | `tz.change` case (a) or (b) | Owner; active version exists; `effective_from` = next local midnight in the new zone |
| `PENDING` | `ACTIVATED` | `ACTIVATED` (active) | `tz.activate_due` | `now >= effective_from`; same transaction supersedes the old active version |
| `ACTIVATED` | `SUPERSEDED` | `SUPERSEDED` | `tz.activate_due` | Its successor activates |
| `PENDING` | `CANCELLED` | `CANCELLED` | `tz.change` case (b) or (c) | Owner chooses another zone or the active zone before the boundary |

Terminal states: `SUPERSEDED`, `CANCELLED`. No transition leaves them, no event is deleted, and no suggestion creates any event.

## 11. Scheduler Foundation

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-SCH-01` | **Fixed slot registry.** A versioned registry (database table `sched_slot_registry(slot_code PRIMARY KEY, local_time, label, registry_version)` seeded by migration, with `CHECK (slot_code IN ('0700','1030','2200'))`) defines the only Daily Intelligence slots: 07:00 morning briefing, 10:30 pulse check, 22:00 closing intelligence, business-local. The dispatcher derives slots only from this registry and ignores any slot or time carried by an external trigger, payload or application configuration. Historical 06:00 and 09:15 times are invalid. Enforcement points per artifact are listed in Section 24.2 (`EIS15-VER-LEG`). | SP2-08 | 13 |
| `EIS15-SCH-02` | **Logical work identity.** Table `sched_work(id, business_id, kind, logical_key, di_slot_id, due_at, state, fence bigint, created_at)` with unique `(business_id, kind, logical_key)`. Logical keys are built only by typed constructor functions owned by the scheduler planner: briefing `(local_date, slot_code)`; reminder occurrence `(reminder_id, rule_version, local_datetime, tz_version)`; standing-rule run `(rule_id, rule_version, trigger_ref)`. Briefing work carries no free-standing slot column: `CHECK (kind <> 'di_briefing' OR di_slot_id IS NOT NULL)` plus a composite foreign key `(business_id, di_slot_id)` to `di_slots`, so briefing work can exist only for a slot row that already passed the slot check. Identity never derives from attempt time. | SP2-02, MIG15-S7-04 | 287 |
| `EIS15-SCH-03` | **Attempts and leases.** Table `sched_attempts(work_id, attempt_no, worker_id, lease_expires_at, fence, started_at, finished_at, outcome)`. A worker claims due work with `SELECT … FOR UPDATE SKIP LOCKED` (or the selected runtime's equivalent), sets a bounded lease and increments `sched_work.fence`. An expired lease may be reclaimed by another worker. | SP2-02 | 268 |
| `EIS15-SCH-04` | **Fencing.** Every write and every effect performed for a work item presents its fence token; the write is rejected if the token is lower than `sched_work.fence`. A stale worker therefore cannot commit after its lease has passed to another worker. | SP2-02, SP2-07 | 268 |
| `EIS15-SCH-05` | **Effect keys.** Table `sched_effects(effect_key unique, work_id, command_ref, outcome, recorded_at)`. The effect key is derived from the logical work key and effect type and is passed as the idempotency key to the downstream governed command (`EIS-CNF-04`, `EIS14-IDM-01`), so retries cannot duplicate briefings, occurrences, notifications or financial effects. Each effect commits atomically with its `sched_effects` row in the downstream command transaction; there is no window in which an effect exists without its key (IR15-10-03). | SP2-03, FIN15-S7-02, MIG15-S7-04, NTF15-04 | 59 |
| `EIS15-SCH-06` | **Unknown outcome.** When a downstream result is unknown (timeout, lost response, crash after commit), the worker records `UNKNOWN`, then looks up the command result by effect key (`EIS13-IDM-02`, `EIS14-IDM-03`) before any retry. It never re-issues a financial effect without that lookup. Reconciliation boundary: an `UNKNOWN` effect is resolved only by key lookup; a found result is recorded without re-execution, and a missing result is retried with the same key (IR15-10-03). | SP2-03, FIN15-S7-02 | 59 |
| `EIS15-SCH-07` | **Bounded retries and dead letter.** Retries use bounded exponential back-off with a per-kind maximum. Exhausted, poisoned or ambiguous work moves to `DEAD_LETTER` or `QUARANTINED`, visible in operations views (`EIS15-OPS-01`) and never repeats an effect. Retry is narrow: one failed item does not stop other items or businesses. | SP2-03, NTF15-08 | 24 |
| `EIS15-SCH-08` | **Business isolation and fairness.** Claims are per business; one business's backlog cannot starve others (per-business concurrency cap). Workers set business context per item (`EIS15-PRIV-03`). | SP2-07 | 110 |
| `EIS15-SCH-09` | **Late and missed runs.** If a slot's work runs late it still generates a revision of the same logical slot with its original scheduled instant recorded (`EIS15-DI-03`); display follows FPDR-03 (`EIS15-DI-04`). No skipped slot is fabricated later, and nothing is sent outbound late. Reminder occurrences that become due during an outage become visible as due when processing resumes; consequential actions still require confirmation. | SP2-01, AI15-S7-01, NTF15-06 | 30 |
| `EIS15-SCH-10` | **Runtime selection gate.** The scheduler runtime is not selected (EQ15-01). Candidates are a database scheduler (`pg_cron`), platform cron triggers (Cloudflare) or another approved option. Any choice must deliver at-least-once wake-ups into this foundation; the foundation alone provides identity, leasing, fencing and idempotency, so the runtime choice does not change correctness. Selection and activation need separate authorization; until then `H-SCHED` holds. | SP2-02, SP2-07 | 268 |
| `EIS15-SCH-11` | **Observable jobs.** Each work item, attempt and effect is queryable by business and kind, with state counts, lag, dead-letter totals and last success per kind (`EIS15-OPS-01`). Observability never exposes merchant content outside the business. | SP2-02 | 7 |

## 12. Shared Reminder Engine

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-REM-01` | **Reminder model.** Table `reminders(id, business_id, creator_membership_id, owner_scope CHECK IN ('personal','business'), title, intent, related_type, related_id, source_ref, status, created_at)` holds one reminder truth for every feature (`11-§4-*`). `related_type/related_id` link to a business object with composite reference; permission sensitivity of the linked object is inherited (`EIS15-AUTHZ-05`). | SEC15-S7-03 | 163 |
| `EIS15-REM-02` | **Recurrence rules separate from occurrences.** Table `reminder_rule_versions(reminder_id, version, rrule, timezone_mode, created_at)`. Completing, snoozing or failing one occurrence never destroys future recurrence. Rule changes create a new version; occurrences keep the version that produced them. | SP2-05, MIG15-S7-04 | 7 |
| `EIS15-REM-03` | **Occurrence identity and states.** Table `reminder_occurrences(id, business_id, reminder_id, rule_version, local_scheduled_at, tz_version, state, due_at, completed_by, completed_at)` unique on `(reminder_id, rule_version, local_scheduled_at, tz_version)`. States: `UNSCHEDULED`, `SCHEDULED`, `DUE`, `SNOOZED`, `DONE`, `CANCELLED`, `SUPERSEDED`, `NOT_SCHEDULED_TIME_PASSED`, `FAILED`. Transitions only through governed commands. | SP2-02, SP2-05 | 138 |
| `EIS15-REM-04` | **Done, snooze and reschedule history.** Commands `reminder.done`, `reminder.snooze(until)`, `reminder.reschedule(local_datetime)` and `reminder.cancel` append to `reminder_events(occurrence_id, event, actor, at, payload)`; they never create a second reminder. Exact buttons are a UX decision (`11-§6-7`). | — | 27 |
| `EIS15-REM-05` | **Creation by text and voice.** Natural-language and voice creation (English, Malayalam, Manglish) runs through the SB-P-1.13 Human Language Layer and gateway, which returns a structured reminder draft; the Reminder Engine owns state. Ambiguous time, target or intent produces the smallest clarification, never a silent guess. Time phrases resolve in the business zone; if the business is `UNSET`, `EIS15-TZ-05` applies. | AI15-S7-05 | 65 |
| `EIS15-REM-06` | **Native due surface.** Due items appear on the native dashboard and Workspace for authorized readers (FDB-2), with honest wording when no channel delivery exists. Due state is independent of notification delivery. | NTF15-01 | 7 |
| `EIS15-REM-07` | **Feature reminder sources.** Ask CFO continuation, compliance, supplier and reorder, credit follow-up, stock and expiry, HR, order and delivery, and onboarding follow-up all create reminders through `EIS15-REM-01` with a typed `related_type`. Domain truth stays in the owning feature; later-owned data (D16–D19) is linked only when that mission exists. | FIN15-S7-05 | 72 |
| `EIS15-REM-08` | **Reminder is not proof of an event.** A due or completed reminder never records that a payment, order, renewal, delivery or employee action happened. The business event is recorded only through its governed feature command. | FIN15-S7-01 | 14 |

## 13. Delegated Automation and Standing Rules

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-RUL-01` | **Standing rule as stored delegation.** Tables `standing_rules(id, business_id, grantor_membership_id, state CHECK IN ('ENABLED','PAUSED','REVOKED'))` and `standing_rule_versions(rule_id, version, action_type, trigger_conditions, target, limit_value, channel, effective_from, created_by)`. Creation needs `rule.create` and an explicit Owner (or Owner-delegated Manager) confirmation; the rule references the grantor membership, capability, target and limit (`EIS-AUT-01`). | SP2-04, FIN15-S7-03 | 59 |
| `EIS15-RUL-02` | **Acting principal and revalidation.** Each run derives its acting principal from the rule and the grantor's **current** authority; it re-evaluates `authz.authorize` at execution and at commit. If the grantor lost the capability, the rule is paused automatically and the run fails narrowly. | SP2-04, FIN15-S7-03, SEC15-S7-02 | 41 |
| `EIS15-RUL-03` | **Pause and revoke.** Paused or revoked rules produce no run. A rule never widens itself; any change creates a new version requiring the same confirmation. | SP2-04 | 6 |
| `EIS15-RUL-04` | **Bounded continuation offers.** A reminder or briefing may offer a typed action affordance (target, action, facts) shown as "not yet executed". Selecting it opens the owning feature's confirmation with the exact facts bound to the actor and state (`EIS13-CNF-02`); a stale confirmation does not execute a changed action. | FIN15-S7-01 | 37 |
| `EIS15-RUL-05` | **Effects only through governed domain commands.** Consequential effects (payment, expense, reorder) execute only through the owning feature command; financial effects only through the single governed transactions-family command (`DTX`/PQ-2, `EIS13-CMD-02`, `EIS14-CMD-01`) with the run's effect key. No standing-rule, reminder or scheduler code writes Ledger rows directly. | FIN15-S7-01, FIN15-S7-02 | 35 |
| `EIS15-RUL-06` | **Run history.** Table `standing_rule_runs(rule_id, rule_version, trigger_ref, work_id, decision, outcome, effect_key, at)` records trigger, execution, failure and retry history, auditable to the grantor. | SP2-04 | 17 |

## 14. Shared Notification Foundation (Native Only)

Native only (FDB-2). FPDR-02 prospective-only; correction-specific integration is outside this EIS (`H-CORR`).

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-NTF-01` | **Request is not delivery.** Table `notification_requests(id, business_id, source_type, source_ref, purpose, recipient_membership_id, dedupe_key unique, created_at)`. A request records that something should be shown; it never records business completion, and delivery success never completes a business action. | NTF15-01 | 26 |
| `EIS15-NTF-02` | **Native state machine.** Table `notification_states(request_id, state, at)` with native states `CREATED`, `VISIBLE`, `ACKNOWLEDGED`, `SUPERSEDED`, `EXPIRED`, `SUPPRESSED_INELIGIBLE`. Channel states (`QUEUED`, `SENT`, `DELIVERED`, `FAILED`) are reserved for SB-P-1.20 and not created. | NTF15-01 | 54 |
| `EIS15-NTF-03` | **Recipient revalidation.** Recipient eligibility (current membership, role, capability, linked-object sensitivity) is evaluated at request creation, at display, at processing and at any future dispatch. An ineligible recipient sees nothing and the state becomes `SUPPRESSED_INELIGIBLE`. | NTF15-03, SEC15-S7-05 | 13 |
| `EIS15-NTF-04` | **Durable identities and de-duplication.** `dedupe_key` = hash of (business, source event, purpose, recipient). Request, worker attempt and (later) provider identities are distinct durable columns so a retry or duplicate source event yields one logical request. | NTF15-04 | 28 |
| `EIS15-NTF-05` | **No outbound before SB-P-1.20.** Native readiness grants no outbound permission. Language, template and channel preference fields are stored for future adapters; no adapter, provider client or callback endpoint exists in this mission. | NTF15-05 | 45 |
| `EIS15-NTF-06` | **FPDR-02 prospective-only correction notifications.** Correction-sourced requests may be created only for correction events committed after an audited activation boundary record (`notification_activation(business_id, source_type, activated_at, activated_by)`). Historical correction events are never replayed; the legacy `transactions.notification_status` column is quarantined read-only and never bulk-updated (`EIS15-MIG-05`). | FIN15-S7-06, MIG15-S7-01, NTF15-02 | 3 |
| `EIS15-NTF-07` | **H-CORR boundary.** The foundation exposes only the event-source-neutral request interface. Correction-specific integration and the (d1) interim wording belong to the separately governed, **unactivated** MC-75 D1 corrective mission. This EIS specifies no correction notification and claims none is operational. | NTF15-02 | 3 |
| `EIS15-NTF-08` | **Minimized, isolated evidence.** Notification content stores references, not copies of financial detail; previews show no sensitive Owner information to unauthorized readers. All notification tables are business-scoped with RLS. | NTF15-07 | 9 |
| `EIS15-NTF-09` | **Unknown outcome and restore safety.** Processing uses `EIS15-SCH-03` to `-07`; after a restore, requests are re-derived from their dedupe keys and never duplicated. | NTF15-08 | 5 |
| `EIS15-NTF-10` | **Honest, dignified copy.** Notification text states what is known, never claims delivery or completion, and avoids shaming language. | NTF15-09 | 1 |

## 15. Daily Intelligence Rhythm

FPDR-03 latest valid native briefing with scheduled, generated and source-as-of provenance.

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-DI-01` | **Three business-local slots.** Daily Intelligence runs only for confirmed-timezone businesses at the registry slots 07:00 (Morning Business Briefing), 10:30 (Business Pulse Check) and 22:00 (Night Closing Intelligence) in business-local time (`EIS15-SCH-01`). | SP2-08, SP2-05 | 126 |
| `EIS15-DI-02` | **Slot identity and revisions.** Tables `di_slots(id, business_id, local_date, slot_code, tz_version, scheduled_at)` unique `(business_id, local_date, slot_code)`, with `CHECK (slot_code IN ('0700','1030','2200'))` and a foreign key `slot_code` → `sched_slot_registry`, and `di_briefing_revisions(slot_id, revision, generated_at, …)`. A regeneration is a new revision of the same slot, never a new briefing. | SP2-01, SP2-02 | 180 |
| `EIS15-DI-03` | **Immutable provenance.** Each revision stores scheduled local slot, scheduled UTC instant, timezone version, actual `generated_at`, per-source `source_as_of`, correction watermark, calculation version, validity (`VALID`, `PARTIAL`, `UNAVAILABLE`) and limitations. Revisions are immutable. | SP2-01, AI15-S7-05, NTF15-06 | 22 |
| `EIS15-DI-04` | **FPDR-03 latest-valid display.** The display shows the latest `VALID` revision of the current slot. If none exists it says so truthfully and shows the prior valid briefing labelled with its own slot and generation time. No duplicate, no invented staleness cutoff, no late outbound send. | SP2-01, AI15-S7-01, NTF15-06 | 126 |
| `EIS15-DI-05` | **Empty, partial and unavailable states.** Missing or unauthorized sources produce honest empty sections ("no sales recorded yet"), never invented content. | AI15-S7-05 | 8 |
| `EIS15-DI-06` | **Section composition.** Morning: yesterday's close, today's due reminders, cash and credit reminders. Pulse: sales so far, stock and staff signals where authorized. Closing: day totals, pending credits, cash review. Each section is computed from authorized sources only (`EIS15-FIN-01`), with later-owned sections (D16–D19) shown as not available until those missions exist. | FIN15-S7-04 | 126 |
| `EIS15-DI-07` | **Before timezone confirmation.** For an `UNSET` business the surface shows "Daily Intelligence starts after you confirm your business timezone", with the suggestion if one exists. No slot is created. | SP2-06 | 6 |
| `EIS15-DI-08` | **AI explanation over computed facts.** Prioritization and explanation run through the SB-P-1.13 gateway over typed facts only (`EIS15-AI-04`); the model never computes figures. | AI15-S7-05 | 29 |

## 16. Deterministic, Correction-Aware Financial Aggregation and DTX/PQ-2

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-FIN-01` | **Deterministic aggregation functions.** Read functions (for example `intel.daily_totals(business, local_date)`, `intel.credit_summary(business)`) are `SECURITY INVOKER`, have no `EXECUTE` for `PUBLIC`/`anon`, check the business against the bound authority decision and read only the SB-P-1.14 governed read model (`EIS14-ARC-02`). Same inputs give the same outputs. | FIN15-S7-04, FIN15-S7-07 | 105 |
| `EIS15-FIN-02` | **Correction-aware projection.** Aggregations use corrected values with originals preserved (`EIS14-LDG-04`/`-05`). A correction watermark recorded with each fact lets later corrections be shown as "updated since this briefing" while past briefings stay immutable. | FIN15-S7-04, MIG15-S7-05 | 298 |
| `EIS15-FIN-03` | **Typed facts.** Aggregation output is typed facts (`fact_id`, metric, value, currency, period, source watermark, calculation version) consumed by Daily Intelligence and Ask CFO. | FIN15-S7-04, AI15-S7-05 | 340 |
| `EIS15-FIN-04` | **Credit truth (FDB-3).** A credit-method sale is never an authoritative customer balance or receivable. "Who owes me money?" returns qualified entry-level information (credit-method sales and recorded repayments, `EIS14-SRC-03`) with the stated limitation; authoritative balances belong to SB-P-1.16. | FIN15-S7-05 | 17 |
| `EIS15-FIN-05` | **Single governed write path.** No SB-P-1.15 component writes the Ledger. Every financial effect goes through `DTX`/PQ-2 governed commands only; Ask CFO and Daily Intelligence cannot call them. | FIN15-S7-01, FIN15-S7-08 | 33 |
| `EIS15-FIN-06` | **Financial permission boundaries.** Financial facts are returned only to principals holding the relevant intelligence capability (`EIS15-AUTHZ-04`); Employees receive none. | FIN15-S7-07 | 17 |

## 17. Ask CFO and AI Behaviour

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-CFO-01` | **Conversational surface.** Ask CFO is a Workspace experience on SB-P-1.13 (`EIS13-WSP-01`, `EIS13-WSP-05`) with permission-scoped retrieval over Business Memory; it supports English, Malayalam and Manglish through the Human Language Layer. | AI15-S7-05 | 302 |
| `EIS15-CFO-02` | **Read-only data path.** Ask CFO reads through a dedicated role with `SELECT` on invoker-mode views and functions only, no table write grants and no `EXECUTE` on commands. Any write attempt fails at the database. | SEC15-S7-04, AI15-S7-04, FIN15-S7-08 | 306 |
| `EIS15-CFO-03` | **Zero write tools.** The Ask CFO tool registry (`EIS13-TOOL-01`) contains read tools only; registry validation rejects any tool with a write side effect. Continuation to action goes through `EIS15-RUL-04` with human confirmation outside the model. | AI15-S7-04, SEC15-S7-04 | 332 |
| `EIS15-CFO-04` | **Grounded calculation for data questions.** Data questions are answered from `EIS15-FIN-01` typed facts; figures are rendered by the application from facts, never from model text; prose references fact IDs and unreferenced numbers are suppressed. | AI15-S7-05, FIN15-S7-04 | 42 |
| `EIS15-CFO-05` | **Fact versus interpretation.** Answers separate recorded fact, deterministic calculation, AI interpretation and unavailable data, and state uncertainty. | AI15-S7-05 | 291 |
| `EIS15-CFO-06` | **Dignity and no accusation.** No answer accuses staff or customers or shames the Owner; anomalies are framed as questions to check, with evidence. | AI15-S7-06 | 12 |
| `EIS15-CFO-07` | **Human decision ownership.** The assistant advises; the human decides. No answer is presented as a decision or executed outcome. | AI15-S7-04 | 26 |
| `EIS15-AI-01` | **Gateway consumption only.** All model calls go through the SB-P-1.13 gateway (`EIS13-GW-01`) with versioned prompts (`EIS13-GW-04`); no provider SDK is added to `src/**`. | AI15-S7-05 | 200 |
| `EIS15-AI-02` | **Prompt-injection containment.** Retrieved merchant content (descriptions, party names, notes, documents) is untrusted data, passed delimited and after calculation; it cannot become an instruction, choose a tool or change a figure. Structured output is schema-validated (`EIS13-TOOL-02`). | AI15-S7-02 | 284 |
| `EIS15-AI-03` | **Revocation-safe context.** Authorization runs before retrieval for every request (`EIS13-CTX-02`); cached conversation context is discarded or re-checked on revocation or role change (`EIS13-CTX-03`, `EIS14-RTV-01`). | AI15-S7-03 | 216 |
| `EIS15-AI-04` | **Evidence classes and provenance.** Each answer and briefing carries evidence classes and the fact IDs, source watermarks and prompt version used, stored with the output (`EIS13-AUD-01`). | AI15-S7-05 | 283 |
| `EIS15-AI-05` | **Provider controls and disable path.** Provider configuration, data controls and the ability to disable AI explanation without breaking deterministic facts are inherited from the SB-P-1.13 gateway gate; provider outage never corrupts authoritative state and briefings fall back to facts-only. | AI15-S7-05 | 206 |

## 18. Audit and Provenance

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-AUD-01` | **Domain events.** Append-only domain events: `TZ_SUGGESTED`, `TZ_CONFIRMED`, `TZ_CHANGED`, `TZ_CHANGE_CANCELLED`, `TZ_DENIED`, `SCHEDULING_ACTIVATED`, reminder lifecycle events, rule create/pause/revoke/run events, notification state changes, briefing generation, quarantine and Option C exception events. Each records actor, principal, business, authority decision reference and time. | SEC15-S7-02, SP2-06 | 20 |
| `EIS15-AUD-02` | **Authority audit reuse.** Grants, revocations and delegation changes are recorded only in SB-P-1.12 `authority_events` (`EIS-AUD-01`); domain provenance stays separate. | SEC15-S7-02 | 23 |
| `EIS15-AUD-03` | **AI-assisted output provenance.** AI-assisted reminder drafts, briefings and answers record initiator, input reference, facts, prompt version and resulting action (`EIS13-AUD-01`). | AI15-S7-05 | 6 |

## 19. Privacy, Minimization and Retention

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-RET-01` | **Record classes; U-5 held.** Each table is assigned a record class in the SB-P-1.12 retention registry. **Retention durations are not specified (U-5).** No purge, cleanup or deletion job exists until U-5 is decided; the scheduler kind `retention_cleanup` is registered disabled. | MIG15-S7-06 | 1 |
| `EIS15-RET-02` | **Minimization.** Logs, telemetry, notification payloads and AI context hold only what the purpose needs; no financial values or personal notes in logs. | NTF15-07, AI15-S7-03 | 8 |

## 20. Failure, Recovery and Observability

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-FAIL-01` | **Narrow failure containment.** A failing reminder, rule, notification path, scheduler kind or provider blocks only what is unsafe or unavailable; unrelated features keep working. There is no global lock. | SP2-07 | 19 |
| `EIS15-FAIL-02` | **Clear cause and safe recovery.** Every failure records a clear reason, preserves user input and evidence, and is recoverable without duplicate effects; no false success is shown (`EIS13-TEL-02`). | SP2-03, NTF15-08 | 6 |
| `EIS15-OPS-01` | **Operational observability.** Per-kind metrics (due, claimed, completed, failed, dead-lettered, lag) per business in aggregate, alerting on dead letters and lag, with no merchant content in metrics. | SP2-02 | 3 |
| `EIS15-OPS-02` | **Performance never weakens authorization.** Caching of facts or briefings is keyed by business and authority version; cache hits re-check authorization. Responsiveness targets never bypass authorization, financial correctness, confirmation, privacy or audit. | SEC15-S7-03 | 20 |

## 21. Merchant Presentation and Copy Semantics

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-UX-01` | **Native surfaces.** Due items, briefings, notifications and Ask CFO answers appear on native dashboard and Workspace surfaces with stable test identifiers for critical flows. | — | 17 |
| `EIS15-UX-02` | **Copy semantics.** Required messages (final wording and Malayalam/Manglish copy accepted at Stage 17): "Suggested — not active until you confirm"; "Daily Intelligence starts after you confirm your business timezone"; "Unscheduled — confirm your business timezone"; "Not scheduled — time passed before confirmation"; confirmation receipt stating the effective time; "Updated since this briefing"; native-only disclosure (FDB-2). | NTF15-09 | 20 |
| `EIS15-UX-03` | **Truthful success language.** "Saved", "Done" or "Scheduled" appears only after the governing commit; nothing implies delivery, payment or completion that did not occur. | NTF15-01 | 3 |

## 22. Migration Design (Design Only; Not Executed)

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-MIG-01` | **Dependency order.** Migrations apply only after SB-P-1.12, SB-P-1.13 and SB-P-1.14 (including the DTX cut-over) migrations exist and are verified: D12 → D13 → D14/DTX → this mission. `docs/migration/README.md` default-deny applies; no migration is self-authorizing. | MIG15-S7-07 | 62 |
| `EIS15-MIG-02` | **Migration groups.** M1 timezone tables; M2 slot registry and scheduler tables; M3 reminder tables; M4 standing-rule tables; M5 notification tables and activation boundary; M6 Daily Intelligence tables; M7 read-only roles, views and aggregation functions; M8 capability registrations. Each group is birth-safe (`EIS15-SEC-01`) and reversible before data. | MIG15-S7-03, MIG15-S7-04 | 265 |
| `EIS15-MIG-03` | **Rollback versus forward-fix.** Before production data exists, a failed group is rolled back by its down migration. After data exists, failures are fixed forward; no destructive rollback of merchant data. | MIG15-S7-06 | 62 |
| `EIS15-MIG-04` | **Restore reconciliation.** After a backup or PITR restore, open `sched_work` is re-fenced (fence incremented), `UNKNOWN` effects are reconciled by effect-key lookup before any retry, and notification requests are re-derived by dedupe key, so restored work repeats no effect. Artifacts from an older or foreign source (legacy dumps, earlier schema versions, external schedules) are never loaded into live tables directly: they are staged in an isolated, unconstrained `legacy_staging` schema with no grants to application or worker roles, and `sched.reconcile_restored_artifacts()` validates each staged item against the slot registry, constructor-built logical keys and confirmed timezone. Valid items enter live tables only through governed commands; invalid items are recorded in `sched_quarantine(id, source, artifact_kind, artifact_ref, reason, payload_hash, quarantined_at)` with a `LEGACY_ARTIFACT_QUARANTINED` audit event and are never activated. (IR15-10-03; legacy staging controls IR15-10-04.) | MIG15-S7-06, NTF15-08 | 62 |
| `EIS15-MIG-05` | **Legacy notification_status quarantine.** The legacy `transactions.notification_status` column (default `'pending'`, no consumer) is left untouched, exposed only through a read-only quarantine view and never replayed, backfilled or bulk-updated (FPDR-02). | MIG15-S7-01, FIN15-S7-06 | 3 |
| `EIS15-MIG-06` | **Timezone without default.** M1 adds no default, `NOT NULL` or backfill on `businesses`; existing businesses start `UNSET` (MC-74). | MIG15-S7-02, SP2-06 | 6 |
| `EIS15-MIG-07` | **Rehearsal.** Every group is rehearsed on the isolated test project against the real migration ledger before any production consideration; production migration is NOT AUTHORIZED. | MIG15-S7-07 | 62 |

## 23. CI and Verification Architecture

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-CI-01` | **CI tiers.** When implementation is authorized: Fast Gate at every checkpoint, Full Assurance on application, schema and test paths, Markdown Quality Gate on documents. Green CI alone is not acceptance. No CI pass is claimed by this EIS. | — | 3 |

## 24. Verification Contract

Every test in this section is **PROPOSED — NOT EXECUTED**. Execution requires an authorized test environment (`EIS15-HOLD-ENV`) and later-stage authority.

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-VER-01` | **Permission negatives.** Manager and Employee `tz.confirm`/`tz.change` denied; Manager without delegation denied intelligence; Manager holding only `intel.sales` receives no expense, cash, credit or derived-profit fact through dashboard, briefing, Ask CFO, explanation or cache, and gets an explicit denial for mixed questions; revoking a capability denies the next read and invalidates cached answers; Employee denied Owner intelligence; former Owner denied display and notification; AI-created permission rejected (IR15-10-02). | SEC15-S7-03, SEC15-S7-05, AI15-S7-07 | 31 |
| `EIS15-VER-02` | **Isolation negatives.** Cross-tenant read and write attempts across dashboard, RPC, server function, worker, notification processing and AI tool return zero foreign rows; service-role path without binding is denied. Includes the effective-privilege inventory of `EIS15-SEC-02` as evidence (IR15-10-05). | SEC15-S7-03, SP2-07 | 133 |
| `EIS15-VER-03` | **Revocation at execution.** Revoke a grant between scheduling and execution, and between execution and commit: no effect commits; paused rule produces no run. | SP2-04, FIN15-S7-03 | 4 |
| `EIS15-VER-04` | **Zero-write and injection.** Prompt-injection payloads in party names, notes and documents; tool-registry write probe; direct DTX call from Ask CFO and Daily Intelligence roles: Ledger row counts unchanged, calls denied. | AI15-S7-02, AI15-S7-04, SEC15-S7-04 | 306 |
| `EIS15-VER-05` | **Concurrency.** Concurrent `tz.confirm` or `tz.change` with the same `expected_head_seq` gives one winner and one conflict; `tz.activate_due` run twice concurrently activates once; two workers claim the same work: one lease, stale fence rejected (IR15-10-01, IR15-10-03). | SP2-02, SP2-05 | 46 |
| `EIS15-VER-06` | **Idempotency and unknown outcome.** Crash after commit before acknowledgement, duplicate trigger, duplicate source event: exactly one effect, occurrence, briefing revision set and notification request. (IR15-10-03) | SP2-03, FIN15-S7-02, NTF15-04 | 59 |
| `EIS15-VER-07` | **Timezone D2, D3 and daylight saving.** UNSCHEDULED reminder saved, time passes, then confirm: `NOT_SCHEDULED_TIME_PASSED`, no dispatch. Change zone: pending version effective at next local midnight in the new zone; activation atomic; no duplicate slot; Ledger dates unchanged. Consecutive changes before the boundary (A→B then B→C; A→B then back to A; A→B then B again): exactly one pending version or none, cancelled versions never active, no work executed under a cancelled version. Activation racing a claim: the stale claim commits nothing. Gap and repeated-hour cases in a daylight-saving zone (IR15-10-01). | SP2-05, SP2-06, MIG15-S7-02, SP2-07 | 57 |
| `EIS15-VER-08` | **FPDR-02 and FPDR-03.** Historical correction events produce no requests; activation boundary respected; delayed slot shows latest valid briefing with three timestamps; no late outbound. | FIN15-S7-06, NTF15-02, SP2-01, NTF15-06 | 11 |
| `EIS15-VER-09` | **Migration and restore.** Rehearsal on the test project; rollback before data; forward-fix after; PITR restore then resume: no repeated effect. | MIG15-S7-06, MIG15-S7-07 | 62 |
| `EIS15-VER-10` | **Scenario, acceptance and experience runtime verification.** Every SCN, FRV, EXP and WORK row has a named runtime scenario in the Stage 12 Verification Checklist, executed at Stage 17 (Founder scenarios A and B reserved to the Founder) and independently verified at Stage 19. | — | 120 |
| `EIS15-VER-11` | **Evidence classes and no premature PASS.** Each test records environment, commit, data set, command and output. Nothing is PASS until executed in an authorized environment; documentary design acceptance (`H-EVID`) is not runtime evidence. | — | 11 |
| `EIS15-VER-LEG` | **Obsolete 06:00 and 09:15 schedule regression (mandatory).** See Section 24.2 for the full contract: hardened-schema rejection tests, legacy artifacts staged in an isolated `legacy_staging` schema and processed by restore reconciliation, external trigger and configuration tests. Proves obsolete 06:00 and 09:15 artifacts cannot activate, generate, request or dispatch, with positive 07:00 / 10:30 / 22:00 controls. **Not executed.** Environment controls: isolated authorized test environment only, staging schema without grants and never created in production (IR15-10-04). | SP2-08 | 13 |

### 24.1 Test ownership and stages

| Test class | Requirement | Evidence | Owner | Stage |
|---|---|---|---|---|
| Permission negatives | `EIS15-VER-01` | Denial result and audit row | SB-P-1.15 builder | 17; non-author verifier at 19 |
| Isolation | `EIS15-VER-02` | Zero foreign rows per channel | SB-P-1.15 builder | 19 |
| Revocation at execution | `EIS15-VER-03` | Command logs | SB-P-1.15 builder | 17 |
| Zero-write and injection | `EIS15-VER-04` | Ledger counts, registry dump | SB-P-1.15 builder | 19 |
| Concurrency | `EIS15-VER-05` | Test logs | SB-P-1.15 builder | 17 |
| Idempotency and unknown outcome | `EIS15-VER-06` | Effect-key ledger | SB-P-1.15 builder | 17 |
| Timezone D2/D3 and daylight saving | `EIS15-VER-07` | Occurrence and audit tables | SB-P-1.15 builder | 17 |
| FPDR-02 and FPDR-03 | `EIS15-VER-08` | Native UI evidence and tables | SB-P-1.15 builder; Founder scenarios | 17–18 |
| Migration and restore | `EIS15-VER-09` | Rehearsal log | Migration mission and operations | Test-project rehearsal |
| Runtime scenarios | `EIS15-VER-10` | Scenario evidence | SB-P-1.15; Founder for scenarios A and B | 17–19 |
| Obsolete schedule regression | `EIS15-VER-LEG` | Section 24.2 | SB-P-1.15 (SB-P-1.19 consumes, MC-80) | 17–19 |

Carried forward as proposed tests: SP2-T01 to SP2-T18 (`specialists/02`) and the negative tests in the specialist reports and PR #898 draft annexes, each mapped to the class above at Stage 12.

### 24.2 `EIS15-VER-LEG` — obsolete 06:00 and 09:15 schedule regression (mandatory; not executed)

**Basis.** MC-78, MC-79, MC-80 and MC-81 require it; MC-84 P3 limits Source 02 §7 to defining the obsolete artifacts. Source 02 §7 describes `pg_cron` jobs "Morning Pulse 06:00 AM IST" and "Attendance Review 09:15 AM IST". No such artifact exists in the repository; production `cron.job` state is `UNVERIFIED — ACCESS REQUIRED`. Only 07:00, 10:30 and 22:00 business-local slots are valid.

**Environment.** An authorized test environment only (the isolated test project, once access is verified and execution authorized). Never production.

**Preconditions.** Migrations M1–M8 applied; one business confirmed in `Asia/Kolkata`, one in a non-IST zone with daylight saving (for example `Europe/London`); one business `UNSET`.

**Constraint facts relied on.** PostgreSQL enforces `CHECK` and `NOT NULL` constraints on every insert and update, including under `session_replication_role = replica` and during `pg_restore` data loading; `replica` mode suppresses only ordinary triggers, which include the triggers that enforce foreign keys. No test may assume that an invalid slot code can be placed in a constrained live table. Invalid legacy data is therefore staged **outside** the live tables, and the scheduler and restore paths must reject or quarantine it.

**Enforcement points by artifact:**

| Artifact | Live location | Enforcement point | Kind |
|---|---|---|---|
| Slot registry entry | `sched_slot_registry` | `CHECK (slot_code IN ('0700','1030','2200'))`; primary key | Database constraint |
| Daily Intelligence slot | `di_slots` | Same `CHECK`, plus foreign key `slot_code` → `sched_slot_registry` | Database constraint |
| Briefing work item | `sched_work` (`kind = 'di_briefing'`) | No slot column; `CHECK (kind <> 'di_briefing' OR di_slot_id IS NOT NULL)` and composite foreign key to `di_slots`; `logical_key` built only by the planner's typed constructor from a registry slot | Validated logical key through a constrained parent |
| Reminder and standing-rule work | `sched_work` (other kinds) | Constructor-built logical keys; no Daily Intelligence slot concept | Validated logical key |
| `pg_cron` job | `cron.job` (extension-owned; cannot carry project constraints) | The wake-up function ignores any slot or time in its arguments and selects only due work derived from the registry; `sched.audit_external_triggers()` inventories `cron.job` and records any job outside the approved set | Scheduler eligibility validation and inventory |
| Platform cron trigger | Runtime configuration | Same wake-up rule; the payload slot is not trusted | Scheduler eligibility validation |
| Application configuration | Deployment configuration | Startup validation refuses any slot time not in the registry; the scheduler module does not start with nonconforming configuration | Startup validation |
| Restored legacy rows | `legacy_staging` schema (test environment only) | `sched.reconcile_restored_artifacts()` (`EIS15-MIG-04`) validates and quarantines into `sched_quarantine` | Restore reconciliation |

**Fixture — obsolete artifacts (exact legacy times from Source 02 §7):**

| ID | Artifact | Detail |
|---|---|---|
| LEG-F1 | `pg_cron` job, 06:00 IST | `cron.schedule('legacy_morning_pulse', '0 6 * * *', …)` evaluated with `cron.timezone` at `GMT` (the `pg_cron` default) and, where the installed `pg_cron` version supports `cron.timezone`, at `Asia/Kolkata`; plus `'30 0 * * *'` (06:00 IST expressed in UTC). Each job calls the scheduler wake-up function with an argument naming slot `0600` |
| LEG-F2 | `pg_cron` job, 09:15 IST | `'15 9 * * *'` under the same two settings; plus `'45 3 * * *'` (09:15 IST in UTC); argument naming slot `0915` |
| LEG-F3 | Platform cron trigger | If the selected runtime supports cron triggers, triggers at the same four expressions, calling the wake-up endpoint with a payload naming `0600` or `0915` |
| LEG-F4 | Legacy slot rows | Rows shaped like `di_slots` with `slot_code` `0600` and `0915`, loaded into `legacy_staging.di_slots` (same columns, no constraints) as the output of restoring a legacy dump into the isolated test environment |
| LEG-F5 | Legacy work rows | Rows shaped like `sched_work` with logical keys naming `0600`/`0915`, state `PENDING` and due now, loaded into `legacy_staging.sched_work` |
| LEG-F6 | Legacy registry and configuration | Rows `0600` and `0915` in `legacy_staging.sched_slot_registry`, and a deployment configuration naming 06:00 and 09:15 |

The `legacy_staging` schema exists only in the isolated, authorized test environment. It has no grants to application, worker or `anon`/`authenticated` roles, is never read by the scheduler or Daily Intelligence, and is never created in production.

**Part A — hardened-schema rejection (database constraints):**

1. Inserting `0600` or `0915` into `sched_slot_registry` or `di_slots` fails with a `CHECK` violation, as the table owner and again with `session_replication_role = replica`. This also proves the replica setting does not bypass the constraint.
2. Inserting `di_briefing` work with no `di_slot_id`, or with a `di_slot_id` from another business, fails on the `CHECK` or the composite foreign key. With `replica` set the foreign key is not enforced, so the test also asserts that the planner's constructor, the only code path that creates work, refuses to build the key.

**Part B — legacy staging and restore reconciliation:**

1. Running `sched.reconcile_restored_artifacts()` on LEG-F4 to LEG-F6 inserts **no** row into `sched_slot_registry`, `di_slots` or `sched_work`.
2. Each staged artifact produces exactly one `sched_quarantine` row (source, artifact kind, reference, reason `SLOT_NOT_IN_REGISTRY`, payload hash) and one `LEGACY_ARTIFACT_QUARANTINED` audit event.
3. Control rows staged alongside with valid codes (`0700`, `1030`, `2200`) for the confirmed businesses are imported through governed commands and produce live slots; the same control rows for the `UNSET` business are quarantined with reason `TIMEZONE_UNCONFIRMED`.

**Part C — external triggers and configuration:**

1. LEG-F1 to LEG-F3 wake-ups at 06:00 and 09:15 (both interpretations) create no `sched_work`, generate nothing, and do not bring forward the 07:00 or 10:30 slot. A wake-up whose argument or payload names a non-registry slot writes one `WAKEUP_REJECTED` audit event.
2. `sched.audit_external_triggers()` lists every LEG-F1 and LEG-F2 job as `NONCONFORMING` in its inventory output and audit. Removing the job is a separate operations action.
3. Starting the scheduler module with the LEG-F6 configuration fails startup validation with a logged error naming the invalid times, and no slots are registered from configuration.

**Part D — zero effects and truthful display:**

1. Before-and-after counts across Parts A to C show **Zero** new `di_briefing_revisions`, `notification_requests`, `notification_states`, `sched_attempts`, `sched_effects`, outbound sends or merchant-visible "current" briefings attributable to any LEG fixture.
2. No surface displays 06:00 or 09:15 as a current schedule.

**Positive control:** 07:00, 10:30 and 22:00 slots generate exactly one slot each per local date for the `Asia/Kolkata` and `Europe/London` businesses, including across a daylight-saving transition; the `UNSET` business generates none.

**Evidence.** Constraint-violation outputs, `sched_quarantine` and audit rows, trigger inventory, startup log, before-and-after row counts, dispatcher logs, UI capture, environment and commit identity. Owner: SB-P-1.15 at Stages 17–19; SB-P-1.19 consumes the evidence for onboarding first-value acceptance (MC-80, U-3). **Not executed; no PASS claimed.**

## 25. Critical Consequence Mapping

Critical is the consequence rating for these five rows (MC-79, MC-81). Design sufficiency is documentary; runtime proof is held.

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-CRIT-01` | **`4-§16-1` scheduler and timezone (Critical).** Realized by `EIS15-TZ-01` to `-08`, `EIS15-SCH-01` to `-09`, `EIS15-DI-01` to `-04`; proof by `EIS15-VER-05`, `-07`, `-08`, `-LEG`. | SP2-05, SP2-06, SP2-02 | 1 |
| `EIS15-CRIT-02` | **`24-§16-1` deterministic financial aggregation (Critical).** Realized by `EIS15-FIN-01` to `-05`, `EIS15-AI-02`, `-04`, `EIS15-CFO-04`; proof by `EIS15-VER-02`, `-04`, plus D14 projection evidence. | FIN15-S7-04, AI15-S7-05 | 1 |
| `EIS15-CRIT-03` | **`22-§23-2` no cross-business leakage (Critical).** Realized by `EIS15-SEC-01` to `-05`, `EIS15-PRIV-01` to `-03`; proof by effective-grant inventory and `EIS15-VER-02` on all channels. | SEC15-S7-01, SEC15-S7-03 | 1 |
| `EIS15-CRIT-04` | **`22-§28-9` AI/tool capability treated as authority (Critical).** Realized by `EIS15-AUTHZ-01`, `EIS15-CFO-02`, `-03`, `EIS15-AI-02`, `EIS15-FIN-05`; proof by `EIS15-VER-04` and typed allowlist review. | AI15-S7-02, SEC15-S7-04 | 1 |
| `EIS15-CRIT-05` | **`22-§29-3` cross-business access blocked on every channel (Critical).** Realized by `EIS15-SEC-05`, `EIS15-PRIV-01`, `EIS15-NTF-03`; proof by `EIS15-VER-02` covering tools, RPC, adapters and logs in an applied test environment. | SEC15-S7-03, NTF15-07 | 1 |

| Row | Section 8 home | Requirement | Realized by | Proof gate |
|---|---|---|---|---|
| `4-§16-1` | §8.5 | `EIS15-CRIT-01` | Realized by `EIS15-TZ-01` to `-08`, `EIS15-SCH-01` to `-09`, `EIS15-DI-01` to `-04`; proof by `EIS15-VER-05`, `-07`, `-08`, `-LEG`. | Stages 17–19; no runtime proof claimed |
| `24-§16-1` | §8.5 | `EIS15-CRIT-02` | Realized by `EIS15-FIN-01` to `-05`, `EIS15-AI-02`, `-04`, `EIS15-CFO-04`; proof by `EIS15-VER-02`, `-04`, plus D14 projection evidence. | Stages 17–19; no runtime proof claimed |
| `22-§23-2` | §8.7 | `EIS15-CRIT-03` | Realized by `EIS15-SEC-01` to `-05`, `EIS15-PRIV-01` to `-03`; proof by effective-grant inventory and `EIS15-VER-02` on all channels. | Stages 17–19; no runtime proof claimed |
| `22-§28-9` | §8.7 | `EIS15-CRIT-04` | Realized by `EIS15-AUTHZ-01`, `EIS15-CFO-02`, `-03`, `EIS15-AI-02`, `EIS15-FIN-05`; proof by `EIS15-VER-04` and typed allowlist review. | Stages 17–19; no runtime proof claimed |
| `22-§29-3` | §8.7 | `EIS15-CRIT-05` | Realized by `EIS15-SEC-05`, `EIS15-PRIV-01`, `EIS15-NTF-03`; proof by `EIS15-VER-02` covering tools, RPC, adapters and logs in an applied test environment. | Stages 17–19; no runtime proof claimed |

## 26. Non-Goals and Must-Not Checks

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-NG-01` | **Must-not rows enforced below the UI.** Every must-not row is enforced by database grants, RLS, command validation or registry constraints and has a negative test; UI hiding alone never satisfies a must-not. | — | 111 |
| `EIS15-NG-02` | **Non-goals.** Out of this mission: outbound channels and providers (SB-P-1.20); authoritative customer balances (SB-P-1.16); correction-specific notification integration (`H-CORR`); retention durations (U-5); later-owned data (D16–D19); scheduler or AI provider activation; production migration. | — | 26 |

## 27. Holds and Dependency Gates

| Requirement | Specification | Specialist findings | FCTM rows |
|---|---|---|---|
| `EIS15-HOLD-01` | **D12 — SB-P-1.12 kernel.** Rows carrying `D12` cannot be built or demonstrated until SB-P-1.12 is implemented and verified. Owner: SB-P-1.12 (resume at its withheld Implementation Authorization); re-check at this mission's Stage 19. | MIG15-S7-07 | 548 |
| `EIS15-HOLD-02` | **D13 — SB-P-1.13 Workspace and AI gateway.** Rows carrying `D13` wait for SB-P-1.13 implementation and provider gate. | MIG15-S7-07 | 534 |
| `EIS15-HOLD-03` | **D14 — SB-P-1.14 governed Ledger and Business Memory.** Rows carrying `D14` wait for SB-P-1.14 implementation. | MIG15-S7-05, MIG15-S7-07 | 298 |
| `EIS15-HOLD-04` | **DTX/PQ-2 cut-over.** Rows carrying `DTX` wait for the coordinated transactions-family cut-over. | FIN15-S7-01 | 33 |
| `EIS15-HOLD-05` | **Later-mission data (D16–D19).** Rows carrying `D16`, `D17`, `D18` or `D19` link to data owned by SB-P-1.16 to SB-P-1.19; shown as not available until those missions exist. | — | 61 |
| `EIS15-HOLD-06` | **AI provider and runtime access.** Rows carrying `DAI` or `H-PROV` need the SB-P-1.13 provider gate; provider access is UNVERIFIED — ACCESS REQUIRED. | AI15-S7-03 | 200 |
| `EIS15-HOLD-07` | **Scheduler runtime.** Rows carrying `DSCH` or `H-SCHED` need runtime selection and authorization (`EIS15-SCH-10`). | SP2-02 | 268 |
| `EIS15-HOLD-08` | **Notification channels.** Rows carrying `DNTF` or `H-NTF` are native-only until SB-P-1.20. | NTF15-05 | 54 |
| `EIS15-HOLD-PAR` | **Independent per-row evidence limits.** `H-PAR` rows keep the Blueprint §21.4 limitation: PR #898 annexes are draft, the private §8.5 derivative was not consumed, and MC-78 closed material design sufficiency only. The EIS does not claim per-row private incorporation. Private-review limitations remain disclosed (IR15-10-06). | — | 235 |
| `EIS15-HOLD-CORR` | **Unactivated corrective mission.** `H-CORR` rows depend on the separately governed MC-75 D1 corrective mission (mission ID, owner, source contract, T3/T7 screening). | NTF15-02 | 3 |
| `EIS15-HOLD-ENGQ` | **Engineering questions.** Rows carrying `H-ENGQ` (Contract 2 §29 questions) are answered or held in Section 30. | — | 11 |
| `EIS15-HOLD-ENV` | **Test environment and CI access.** Test project SU-494995, live grants, production `cron.job` and CI runs are UNVERIFIED — ACCESS REQUIRED; every verification requirement waits for them. Includes the legacy-test environment controls of Section 24.2 (IR15-10-04). | — | none — Non-product governance requirement: environment access gate for Section 24; applies to every row through `EIS15-VER-*`. |

Holds outside the FCTM dependency columns:

| Hold | Condition | Owner | Gate |
|---|---|---|---|
| U-5 | Retention durations undecided | Founder and legal | Before any cleanup job (`EIS15-RET-01`) |
| DC-06 | Manager granularity proposed only | Stage 10 security specialist; Founder T6/T3 if merchant-facing grant behaviour changes | Stage 10 |
| `H-PAR` | Independent per-row evidence limits | Mission Control | Recorded; not cleared by this EIS |
| `H-CORR` | MC-75 D1 corrective mission unactivated | Mission Control | Separate mission authority |
| Provider and runtime access | Scheduler runtime, AI provider, test project, live grants, production `cron.job` | Mission Control and Founder | Implementation Authorization |
| CI recovery | GitHub support ticket #4816157 | Founder | Before implementation checkpoints |
| U-3 | `20-§23-10` split responsibility (MC-80) | SB-P-1.15 and SB-P-1.19 | Joint acceptance evidence |

## 28. UNVERIFIED — ACCESS REQUIRED Register

| Item | Needed for |
|---|---|
| Live Supabase schema, grants, default ACLs and policies | `EIS15-SEC-02`, `EIS15-VER-02` |
| Test project SU-494995 availability | All Section 24 tests; `EIS15-MIG-07` |
| Production `cron.job` contents | `EIS15-VER-LEG` legacy inventory (read-only) |
| Scheduler runtime capability (`pg_cron`, Cloudflare cron triggers) | `EIS15-SCH-10` |
| AI provider configuration and data controls | `EIS15-AI-05` |
| Live hosting configuration | `EIS15-ARC-03` |
| CI execution | Section 23 |
| Production backlog of legacy `notification_status` | `EIS15-MIG-05` (read-only count; no update) |

## 29. Traceability

### 29.1 Integrity checks

| Check | Result |
|---|---|
| `IN SCOPE` FCTM rows | 694 |
| Rows mapped to at least one EIS requirement | 694 / 694 |
| Missing rows / extra IDs / IDs absent from the FCTM | 0 / 0 / 0 |
| EIS requirements | 147 |
| Requirements with FCTM rows | 146 |
| Requirements with a recorded non-product reason and no rows | 1 (`EIS15-HOLD-ENV`) |
| Orphan requirements adding product behaviour | 0 |
| Row-to-requirement links | 13248 |
| Requirements per row (minimum / maximum) | 2 / 53 |
| Stage 7 residual holds and FCTM dependencies carried by their named requirement | yes (0 gaps) |
| Specialist findings cited by at least one requirement | 44 / 44 |
| Critical rows with a named requirement | 5 / 5 |
| `20-§23-10` in the 694-row table | no (Section 29.4) |
| FCTM or Blueprint changes | 0 (FCTM blob `65eeaf8d`; Blueprint blob `0ab2ad6f`) |

Selection rules: `EIS15-HOLD-01` to `-08` select every row carrying the FCTM dependency `D12`, `D13`, `D14`, `DTX`, `D16`–`D19`, `DAI`, `DSCH` or `DNTF`, or the matching Stage 7 hold; each Stage 7 residual hold selects its named requirement (`H-BIRTH` → `SEC-01`, `H-SEC` → `SEC-03`, `H-ISO` → `SEC-05`, `H-PRIV` → `PRIV-01`, `H-IDEM` → `SCH-05`, `H-TZ` → `TZ-07`, `H-TZC` → `TZ-01`, `H-LVB` → `DI-04`, `H-ACT` → `NTF-06`, `H-CORR` → `HOLD-CORR`, `H-RO` → `CFO-02`, `H-FIN` → `FIN-01`, `H-AI` → `AI-04`, `H-MIG` → `MIG-01`, `H-PAR` → `HOLD-PAR`, `H-ENGQ` → `HOLD-ENGQ`, `H-EVID` → `VER-11`); `EIS15-NG-01` selects every must-not row; `EIS15-VER-10` every scenario, Founder-runtime, experience and work row; Section 8 homes select their core module requirement; remaining requirements select rows by the keyword rules recorded in the generator. Mapping is mechanical and reproducible (validator in the pull request).

### 29.2 FCTM row to EIS requirement (694 rows)

| FCTM row | Blueprint | Source | Kind | Stage 7 status | Effective risk | Stage 7 residual holds | EIS requirements |
|---|---|---|---|---|---|---|---|
| `2-§2-1` | §8.6 | C2 | PRIN | FOLLOW-UP | M | H-AI, H-RO | AUTHZ-10, DI-08, CFO-01, CFO-02, CFO-03, CFO-05, CFO-06, CFO-07, AI-02, AI-04, VER-04 |
| `2-§2-2` | §8.6 | C2 | PRIN | FOLLOW-UP | M | H-RO | CFO-01, CFO-02, CFO-03, CFO-06, CFO-07, VER-04 |
| `2-§2-3` | §8.6 | C2 | PRIN | FOLLOW-UP | M | H-RO, H-SEC | SEC-03, AUTHZ-01, CFO-01, CFO-02, CFO-03, CFO-07, VER-04 |
| `2-§2-4` | §8.6 | C2 | PRIN | FOLLOW-UP | M | H-AI, H-RO | AUTHZ-10, REM-05, NTF-05, CFO-01, CFO-02, CFO-03, CFO-05, CFO-07, AI-02, AI-04, UX-02, VER-04 |
| `2-§2-5` | §8.6 | C2 | PRIN | FOLLOW-UP | M | H-AI, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, CFO-07, AI-02, AI-04, VER-04 |
| `2-§2-6` | §8.6 | C2 | PRIN | FOLLOW-UP | M | H-RO, H-SEC | SEC-03, AUTHZ-01, CFO-01, CFO-02, CFO-03, CFO-06, CFO-07, VER-04 |
| `2-§2-7` | §8.6 | C2 | PRIN | FOLLOW-UP | M | H-AI, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-10, REM-07, CFO-01, CFO-02, CFO-03, CFO-05, CFO-06, CFO-07, AI-02, AI-04, VER-04 |
| `2-§2-8` | §8.6 | C2 | PRIN | FOLLOW-UP | M | H-RO, H-SEC | SEC-03, AUTHZ-01, CFO-01, CFO-02, CFO-03, CFO-07, VER-04 |
| `2-§2-9` | §8.6 | C2 | EXP | FOLLOW-UP | M | H-AI, H-RO | AUTHZ-10, RUL-01, DI-08, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, UX-01, VER-04, VER-10 |
| `2-§3-1` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02 |
| `2-§3-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, REM-05, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02 |
| `2-§3-3` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02 |
| `2-§3-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO, H-SEC, H-TZ | SEC-03, AUTHZ-01, AUTHZ-10, TZ-01, TZ-04, TZ-07, TZ-09, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-07, HOLD-01, HOLD-02 |
| `2-§3-5` | §8.6 | C2 | OBL | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-LATER, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-09, AUTHZ-10, AUTHZ-11, REM-04, REM-07, RUL-06, FIN-01, FIN-02, FIN-03, FIN-04, FIN-06, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§3-6` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, RUL-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02 |
| `2-§3-7` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02 |
| `2-§3-8` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO, H-SCHED, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-03, AI-04, VER-04, HOLD-01, HOLD-02, HOLD-07 |
| `2-§3-9` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, NTF-03, CFO-01, CFO-02, CFO-03, VER-01, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§3-10` | §8.6 | C2 | RULE | DEPENDENCY-HELD | M | H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, RUL-01, CFO-01, CFO-02, CFO-03, VER-04, HOLD-01, HOLD-02 |
| `2-§3-11` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, CFO-01, CFO-02, CFO-03, VER-01, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§3-12` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-FIN, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, FIN-01, FIN-03, FIN-06, CFO-01, CFO-02, CFO-03, VER-01, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§3-13` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, CFO-01, CFO-02, CFO-03, VER-01, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§3-14` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-FIN, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-10, FIN-01, FIN-03, FIN-06, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-01, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§3-15` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, CFO-01, CFO-02, CFO-03, CFO-04, VER-01, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§3-16` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, REM-07, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§3-17` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§3-18` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-NTF, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, REM-07, NTF-02, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-08 |
| `2-§4-1` | §8.6 | C2 | EXP | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, UX-01, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§4-2` | §8.6 | C2 | EXP | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, UX-01, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§4-3` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§4-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§4-5` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§4-6` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, SCH-07, SCH-09, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§4-7` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§4-8` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§4-9` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, SCH-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§4-10` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-1` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-2` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-3` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, FIN-04, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-4` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-5` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-LATER, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§5-6` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-7` | §8.6 | C2 | RULE | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, DI-03, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-8` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-9` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, FIN-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-10` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-11` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-12` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-LATER, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, REM-07, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§5-13` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, REM-07, RUL-01, FIN-01, FIN-02, FIN-03, FIN-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-14` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-15` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-16` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-17` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§5-18` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§6-1` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§6-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, DI-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, FAIL-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§6-3` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-03, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§6-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§7-1` | §8.6 | C2 | RULE | DEPENDENCY-HELD | M | H-D12, H-D13, H-RO | AUTHZ-02, CFO-01, CFO-02, CFO-03, VER-04, HOLD-01, HOLD-02 |
| `2-§7-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, SCH-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§7-3` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, REM-05, NTF-05, CFO-01, CFO-02, CFO-03, CFO-04, AI-02, AUD-02, UX-02, VER-01, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§7-4` | §8.6 | C2 | RULE | DEPENDENCY-HELD | M | H-D12, H-D13, H-RO | CFO-01, CFO-02, CFO-03, VER-04, HOLD-01, HOLD-02 |
| `2-§7-5` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO | CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§7-6` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO | CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§7-7` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO | CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§7-8` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO | CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§7-9` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO | SCH-09, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§7-10` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO | REM-07, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§7-11` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-FIN, H-RO | FIN-01, FIN-03, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| `2-§7-12` | §8.6 | C2 | RULE | DEPENDENCY-HELD | H | H-D12, H-D13, H-DTX, H-FIN, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-09, RUL-05, FIN-01, FIN-03, FIN-05, FIN-06, CFO-01, CFO-02, CFO-03, VER-04, HOLD-01, HOLD-02, HOLD-04 |
| `2-§8-1` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§8-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, SCH-09, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§8-3` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§8-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§8-5` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§8-6` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§8-7` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§8-8` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§8-9` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, UX-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§8-10` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO, H-SCHED | AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, RUL-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02, HOLD-07 |
| `2-§8-11` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§8-12` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, CFO-06, AI-01, AI-02, AI-03, AI-04, AI-05, VER-01, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§8-13` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§8-14` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§8-15` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-03, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§8-16` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-02, VER-01, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§9-1` | §8.6 | C2 | PRIN | DEPENDENCY-HELD | M | H-D13, H-RO | CFO-01, CFO-02, CFO-03, CFO-07, VER-04, HOLD-02 |
| `2-§9-2` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D13, H-RO | CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-02 |
| `2-§9-3` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D13, H-FIN, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, REM-07, FIN-01, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-02 |
| `2-§9-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D13, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-02 |
| `2-§9-5` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D13, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-02 |
| `2-§9-6` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D13, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, CFO-06, AI-02, AI-04, VER-04, HOLD-02 |
| `2-§9-7` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D13, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, CFO-06, AI-02, AI-04, VER-04, HOLD-02 |
| `2-§9-8` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D13, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-02 |
| `2-§10-1` | §8.6 | C2 | PRIN | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, CFO-07, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§10-2` | §8.6 | C2 | RULE | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§10-3` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-10, AUTHZ-11, SCH-09, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§10-4` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§10-5` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§10-6` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§10-7` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, SCH-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, OPS-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§11-1` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§11-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§11-3` | §8.6 | C2 | OBL | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-LATER, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, REM-07, FIN-01, FIN-02, FIN-03, FIN-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§11-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§11-5` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-LATER, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§11-6` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-LATER, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§11-7` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-LATER, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§11-8` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SCHED | AUTHZ-10, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07 |
| `2-§11-9` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-LATER, H-NTF, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, NTF-02, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06, HOLD-08 |
| `2-§11-10` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-LATER, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§11-11` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SCHED | AUTHZ-10, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, REM-04, RUL-06, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07 |
| `2-§11-12` | §8.6 | C2 | OBL | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-LATER, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§11-13` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, DI-03, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§11-14` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-IDEM, H-PROV, H-RO | ARC-01, AUTHZ-10, AUTHZ-11, SCH-02, SCH-05, SCH-06, NTF-04, DI-02, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-06, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§11-15` | §8.6 | C2 | RULE | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | ARC-01, ARC-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§12-1` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§12-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-02, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§12-3` | §8.6 | C2 | OBL | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§12-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-LATER, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, REM-07, FIN-01, FIN-02, FIN-03, FIN-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§12-5` | §8.6 | C2 | OBL | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§12-6` | §8.6 | C2 | OBL | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, REM-01, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§12-7` | §8.6 | C2 | OBL | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-LATER, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-03, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§12-8` | §8.6 | C2 | OBL | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-LATER, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§12-9` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-LATER, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§12-10` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-LATER, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§12-11` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-LATER, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§12-12` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§12-13` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§12-14` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-LATER, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, SCH-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§12-15` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, FIN-06, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-01, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§13-1` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§13-6` | §8.6 | C2 | RULE | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-NTF, H-PROV, H-RO, H-SEC | ARC-04, SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, AUTHZ-11, NTF-02, NTF-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-08 |
| `2-§14-1` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | ARC-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§14-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§14-3` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§14-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§14-5` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | ARC-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§14-6` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§14-7` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO, H-SCHED | AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, RUL-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02, HOLD-07 |
| `2-§14-8` | §8.6 | C2 | RULE | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-NTF, H-PROV, H-RO | ARC-04, SEC-06, AUTHZ-10, AUTHZ-11, RUL-04, NTF-02, DI-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, FAIL-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-08 |
| `2-§14-9` | §8.6 | C2 | RULE | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-NTF, H-PROV, H-RO | ARC-04, AUTHZ-10, AUTHZ-11, NTF-02, NTF-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-08 |
| `2-§15-1` | §8.6 | C2 | RULE | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO, H-SEC | ARC-02, SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, REM-05, FIN-01, FIN-02, FIN-03, FIN-06, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§15-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§15-3` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§15-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | ARC-02, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§15-5` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, REM-05, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§15-6` | §8.6 | C2 | RULE | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, RUL-04, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§15-7` | §8.6 | C2 | PRIN | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | ARC-02, SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, CFO-07, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§17-1` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§17-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, RUL-04, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§17-3` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§17-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, SCH-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§17-5` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§17-6` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§17-7` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO, H-SCHED | AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-09, SCH-10, REM-01, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, NG-02, HOLD-01, HOLD-02, HOLD-07 |
| `2-§17-8` | §8.6 | C2 | RULE | DEPENDENCY-HELD | M | H-D12, H-D13, H-IDEM, H-RO, H-SCHED | ARC-01, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, NTF-04, DI-02, CFO-01, CFO-02, CFO-03, VER-04, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-07 |
| `2-§18-1` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO, H-SCHED, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-09, SCH-10, RUL-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, NG-02, HOLD-01, HOLD-02, HOLD-07 |
| `2-§18-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO, H-SCHED, H-SEC | ARC-01, SEC-03, AUTHZ-01, AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02, HOLD-07 |
| `2-§18-3` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO, H-SCHED | SCH-02, SCH-03, SCH-04, SCH-10, REM-01, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| `2-§18-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO, H-SCHED | AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-05, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-03, AI-04, VER-04, HOLD-01, HOLD-02, HOLD-07 |
| `2-§19-1` | §8.6 | C2 | RULE | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, SCH-09, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§19-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-RO, H-SCHED, H-TZ | AUTHZ-10, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-07, HOLD-01, HOLD-02, HOLD-03, HOLD-07 |
| `2-§19-3` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§19-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | ARC-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§19-5` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§19-6` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§19-7` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, REM-05, NTF-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, UX-02, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§19-8` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-02, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§19-9` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-IDEM, H-PROV, H-RO | ARC-01, AUTHZ-10, AUTHZ-11, SCH-02, SCH-05, SCH-06, NTF-04, DI-02, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-06, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§20-1` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D13, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-02 |
| `2-§20-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D13, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, UX-02, VER-04, HOLD-02 |
| `2-§20-3` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D13, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, UX-02, VER-04, HOLD-02 |
| `2-§20-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D13, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, UX-02, VER-04, HOLD-02 |
| `2-§20-5` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D13, H-RO | AUTHZ-10, REM-05, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-02 |
| `2-§20-6` | §8.6 | C2 | PRIN | DEPENDENCY-HELD | M | H-D13, H-RO | RUL-01, CFO-01, CFO-02, CFO-03, CFO-07, VER-04, HOLD-02 |
| `2-§21-1` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§21-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§21-3` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, SCH-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-03, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§21-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§21-5` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§21-6` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§21-7` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§22-1` | §8.6 | C2 | EXP | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, OPS-02, UX-01, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§22-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, DI-03, DI-08, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§22-3` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§22-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§22-5` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-IDEM, H-PROV, H-RO | ARC-01, AUTHZ-10, AUTHZ-11, SCH-02, SCH-05, SCH-06, NTF-04, DI-02, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§22-6` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§22-7` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§22-8` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, OPS-02, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§22-9` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-ISO, H-PROV, H-RO, H-SEC | SEC-03, SEC-05, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-02, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§22-10` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§22-11` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§22-12` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, NTF-03, NTF-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, RET-02, OPS-02, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§23-1` | §8.6 | C2 | PRIN | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, CFO-07, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§23-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | SEC-06, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§23-3` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§23-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§23-5` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§23-6` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, OPS-02, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§23-7` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, SCH-09, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, FAIL-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§23-8` | §8.6 | C2 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§24-1` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§24-2` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-06, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§24-3` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-03, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§24-4` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, DI-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, FAIL-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§24-5` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02 |
| `2-§24-6` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-TZ | AUTHZ-10, AUTHZ-11, TZ-01, TZ-04, TZ-07, TZ-09, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-07, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§24-7` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§24-8` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | SEC-06, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§24-9` | §8.6 | C2 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, SCH-07, NTF-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§24-10` | §8.6 | C2 | RULE | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§25-1` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03 |
| `2-§25-2` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| `2-§25-3` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, REM-07, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| `2-§25-4` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| `2-§25-5` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| `2-§25-6` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§25-7` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, REM-07, FIN-01, FIN-02, FIN-03, FIN-04, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§25-8` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-LATER, H-PROV, H-RO | AUTHZ-02, AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| `2-§25-9` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-02, AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§25-10` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§25-11` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§25-12` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§25-13` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§25-14` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§25-15` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§25-16` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, CFO-06, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§25-17` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, RUL-04, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§25-18` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | ARC-02, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§25-22a` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-RO, H-SCHED | ARC-02, AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-05, RUL-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| `2-§25-24` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| `2-§25-25` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-ISO, H-RO, H-SEC | SEC-03, SEC-05, AUTHZ-01, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-02, VER-04, VER-10, HOLD-01 |
| `2-§25-26` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| `2-§25-27` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-ISO, H-RO, H-SEC | SEC-03, SEC-05, AUTHZ-01, AUTHZ-10, NTF-08, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-02, VER-04, VER-10, HOLD-01 |
| `2-§25-28` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, OPS-02, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§25-29` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, SCH-09, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, OPS-02, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§25-30` | §8.6 | C2 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, OPS-02, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `2-§26-1` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-RO | ARC-02, CFO-01, CFO-02, CFO-03, VER-04 |
| `2-§26-2` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-RO, H-SEC | ARC-02, SEC-03, AUTHZ-01, AUTHZ-02, CFO-01, CFO-02, CFO-03, VER-04 |
| `2-§26-3` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-RO | CFO-01, CFO-02, CFO-03, VER-04 |
| `2-§26-4` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-RO | CFO-01, CFO-02, CFO-03, AI-03, VER-04 |
| `2-§26-5` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-RO | ARC-02, REM-05, NTF-05, CFO-01, CFO-02, CFO-03, UX-02, VER-04 |
| `2-§26-6` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-RO | FIN-01, CFO-01, CFO-02, CFO-03, CFO-04, VER-04 |
| `2-§26-7` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-RO | REM-01, CFO-01, CFO-02, CFO-03, VER-04 |
| `2-§26-8` | §8.6 | C2 | RULE | DEPENDENCY-HELD | M | H-D14, H-RO | FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, VER-04, HOLD-03 |
| `2-§26-9` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-RO, H-SCHED | SCH-02, SCH-03, SCH-04, SCH-10, CFO-01, CFO-02, CFO-03, CFO-04, VER-04, HOLD-07 |
| `2-§26-10` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-RO, H-SEC | ARC-01, SEC-03, AUTHZ-01, CFO-01, CFO-02, CFO-03, AUD-01, VER-04 |
| `2-§26-11` | §8.6 | C2 | NEG | FOLLOW-UP | H | H-AI, H-IDEM, H-RO, H-SEC | ARC-01, SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, SCH-02, SCH-05, SCH-06, SCH-09, NTF-04, DI-02, DI-08, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-01, VER-04, VER-06, NG-01 |
| `2-§27-1` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-FIN, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, FIN-01, FIN-03, FIN-06, CFO-01, CFO-02, CFO-03, VER-04 |
| `2-§27-2` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-RO | SCH-09, CFO-01, CFO-02, CFO-03, VER-04, NG-02 |
| `2-§27-3` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, CFO-01, CFO-02, CFO-03, VER-04 |
| `2-§27-4` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, CFO-01, CFO-02, CFO-03, VER-04 |
| `2-§27-5` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, REM-05, CFO-01, CFO-02, CFO-03, CFO-04, VER-04 |
| `2-§27-6` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-RO | REM-05, CFO-01, CFO-02, CFO-03, VER-04 |
| `2-§29-1` | §8.6 | C2 | ENGQ | FOLLOW-UP | M | H-ENGQ, H-RO | FIN-01, CFO-01, CFO-02, CFO-03, VER-04, HOLD-ENGQ |
| `2-§29-2` | §8.6 | C2 | ENGQ | FOLLOW-UP | M | H-AI, H-ENGQ, H-RO | AUTHZ-10, DI-03, FIN-01, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-02, AI-04, VER-04, HOLD-ENGQ |
| `2-§29-3` | §8.6 | C2 | ENGQ | FOLLOW-UP | M | H-ENGQ, H-RO | CFO-01, CFO-02, CFO-03, VER-04, HOLD-ENGQ |
| `2-§29-4` | §8.6 | C2 | ENGQ | FOLLOW-UP | M | H-ENGQ, H-RO | REM-05, CFO-01, CFO-02, CFO-03, AI-03, VER-04, HOLD-ENGQ |
| `2-§29-5` | §8.6 | C2 | ENGQ | FOLLOW-UP | M | H-ENGQ, H-RO | AUTHZ-11, CFO-01, CFO-02, CFO-03, OPS-02, VER-04, HOLD-ENGQ |
| `2-§29-6` | §8.6 | C2 | ENGQ | FOLLOW-UP | M | H-ENGQ, H-RO | AUTHZ-06, DI-03, CFO-01, CFO-02, CFO-03, VER-04, HOLD-ENGQ |
| `2-§29-7` | §8.6 | C2 | ENGQ | FOLLOW-UP | M | H-AI, H-ENGQ, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, RUL-06, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, AUD-01, AUD-03, OPS-02, VER-04, HOLD-ENGQ |
| `2-§29-8` | §8.6 | C2 | ENGQ | FOLLOW-UP | M | H-AI, H-ENGQ, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, AI-05, VER-04, HOLD-ENGQ |
| `2-§29-9` | §8.6 | C2 | ENGQ | FOLLOW-UP | M | H-ENGQ, H-RO | CFO-01, CFO-02, CFO-03, OPS-02, VER-04, HOLD-ENGQ |
| `2-§29-10` | §8.6 | C2 | ENGQ | FOLLOW-UP | M | H-ENGQ, H-RO | REM-05, NTF-05, CFO-01, CFO-02, CFO-03, AI-05, VER-04, HOLD-ENGQ |
| `2-§29-11` | §8.6 | C2 | ENGQ | DEPENDENCY-HELD | M | H-AI, H-D12, H-ENGQ, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, RUL-01, RUL-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-ENGQ |
| `2-§29-12` | §8.6 | C2 | RULE | FOLLOW-UP | M | H-AI, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, FAIL-01, VER-04 |
| `4-§1-1` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§1-2` | §8.5 | C4 | EXP | DEPENDENCY-HELD | M | H-D12, H-D13, H-D14, H-PAR, H-SCHED, H-SEC | ARC-02, SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, UX-01, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§1-3` | §8.5 | C4 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-D14, H-NTF, H-PAR, H-SCHED, H-SEC | SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, NTF-01, NTF-02, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, AUD-02, VER-01, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-08, HOLD-PAR |
| `4-§2-1` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LVB, H-PAR, H-PRIV, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-08, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§2-2` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LVB, H-PAR, H-PRIV, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-08, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§2-3` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LVB, H-PAR, H-PRIV, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-08, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§2-4` | §8.5 | C4 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-D14, H-PAR, H-SCHED | SCH-02, SCH-03, SCH-04, SCH-10, RUL-06, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, AUD-01, AUD-02, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§2-5` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-MIG, H-NTF, H-PAR, H-PRIV, H-SCHED, H-TZ, H-TZC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-03, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-02, TZ-03, TZ-04, TZ-05, TZ-06, TZ-07, TZ-08, TZ-09, TZ-10, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, NTF-02, DI-01, DI-02, DI-04, DI-06, DI-07, FIN-02, FIN-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-06, MIG-07, VER-02, VER-05, VER-07, VER-09, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-08, HOLD-PAR |
| `4-§3-1` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED, H-SEC, H-TZ | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, MIG-02, VER-02, VER-07, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§3-2` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-05, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, AI-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§3-3` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, RUL-01, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§3-4` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-01, REM-03, REM-06, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§3-5` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§3-6` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§3-7` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§3-8` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-NTF, H-PAR, H-PRIV, H-RO, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, NTF-02, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-02, CFO-03, MIG-02, VER-02, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-08, HOLD-PAR |
| `4-§3-9` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§3-10` | §8.5 | C4 | NEG | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PAR, H-SCHED | AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-09, SCH-10, NTF-05, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, AI-02, AI-04, FAIL-01, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§4-1` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§4-2` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§4-3` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§4-4` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§4-5` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-01, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§4-6` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§4-7` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§4-8` | §8.5 | C4 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-D14, H-PAR, H-SCHED | SCH-02, SCH-03, SCH-04, SCH-10, DI-01, DI-02, DI-04, DI-05, DI-06, FIN-02, FIN-03, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§5-1` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED, H-SEC, H-TZ | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§5-2` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§5-3` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§5-4` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§5-5` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§5-6` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-NTF, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-02, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-08, HOLD-PAR |
| `4-§5-7` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-01, REM-08, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§5-8` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§5-9` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-04, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§5-10` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-06, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§6-1` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§6-2` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-ISO, H-PAR, H-PRIV, H-SCHED | ARC-02, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§6-3` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§6-4` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§6-5` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§6-6` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§6-7` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-01, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§6-8` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§6-9` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-NTF, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, NTF-02, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-08, HOLD-PAR |
| `4-§6-10` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§6-11` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-03, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§6-12` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§7-1` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-ISO, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-07, HOLD-PAR |
| `4-§7-2` | §8.5 | C4 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-PAR, H-SCHED, H-SEC | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, DI-01, DI-02, DI-04, DI-06, VER-01, NG-01, HOLD-01, HOLD-02, HOLD-07, HOLD-PAR |
| `4-§7-3` | §8.5 | C4 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-PAR, H-SCHED, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, SCH-02, SCH-03, SCH-04, SCH-10, DI-01, DI-02, DI-04, DI-06, VER-01, NG-01, HOLD-01, HOLD-02, HOLD-07, HOLD-PAR |
| `4-§7-4` | §8.5 | C4 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-PAR, H-SCHED, H-SEC | ARC-02, SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-05, SCH-02, SCH-03, SCH-04, SCH-10, DI-01, DI-02, DI-04, DI-06, VER-01, NG-01, HOLD-01, HOLD-02, HOLD-07, HOLD-PAR |
| `4-§8-2` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | ARC-02, ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-05, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, AI-03, MIG-02, VER-02, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§8-3` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | ARC-02, ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-05, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, UX-01, MIG-02, VER-02, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§8-4` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-NTF, H-PAR, H-PRIV, H-SCHED, H-SEC | ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-02, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-02, NTF-05, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-08, HOLD-PAR |
| `4-§9-1` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D13, H-ISO, H-PAR, H-PRIV | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| `4-§9-2` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D13, H-ISO, H-PAR, H-PRIV | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| `4-§9-3` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D13, H-ISO, H-PAR, H-PRIV | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, CFO-05, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| `4-§9-4` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D13, H-ISO, H-PAR, H-PRIV | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, DI-08, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| `4-§9-5` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D13, H-ISO, H-PAR, H-PRIV | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| `4-§9-6` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D13, H-ISO, H-PAR, H-PRIV | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| `4-§9-7` | §8.5 | C4 | NEG | DEPENDENCY-HELD | M | H-AI, H-D13, H-PAR | AUTHZ-10, REM-05, NTF-05, DI-01, DI-02, DI-04, DI-06, CFO-05, CFO-06, AI-02, AI-04, UX-02, NG-01, HOLD-02, HOLD-PAR |
| `4-§9-8` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D13, H-ISO, H-PAR, H-PRIV | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, CFO-03, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| `4-§10-1` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, RUL-04, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§10-2` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, AI-02, AI-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§10-3` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, AI-02, AI-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§10-4` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§10-5` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-06, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§10-6` | §8.5 | C4 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-ISO, H-PAR, H-PRIV, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, CFO-05, MIG-02, VER-02, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§10-7` | §8.5 | C4 | SCN | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-04, CFO-05, AI-02, AI-04, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§10-8` | §8.5 | C4 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, REM-08, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§11-1` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§11-2` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-PROV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, FIN-02, FIN-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07, HOLD-PAR |
| `4-§11-3` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-IDEM, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, REM-01, REM-04, DI-01, DI-02, DI-04, DI-06, MIG-02, VER-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-07, HOLD-PAR |
| `4-§11-4` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§11-5` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, AI-02, AI-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| `4-§11-6` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LATER, H-NTF, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, NTF-02, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-08, HOLD-PAR |
| `4-§11-7` | §8.5 | C4 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-D14, H-DTX, H-FIN, H-PAR, H-SCHED | SCH-02, SCH-03, SCH-04, SCH-10, RUL-05, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-05, CFO-03, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-07, HOLD-PAR |
| `4-§12-1` | §8.5 | C4 | NEG | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PAR, H-SCHED | AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, CFO-05, AI-02, AI-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§12-2` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§12-3` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§12-4` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, AI-02, AI-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§12-5` | §8.5 | C4 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-05, DI-06, FIN-02, FIN-03, FAIL-01, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§13-1` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LVB, H-PAR, H-PRIV, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-08, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§13-2` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-IDEM, H-ISO, H-PAR, H-PRIV, H-SCHED | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, NTF-04, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§13-3` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-NTF, H-PAR, H-PRIV, H-SCHED | ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-07, SCH-08, SCH-10, REM-07, NTF-02, NTF-05, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-08, HOLD-PAR |
| `4-§13-5` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-MIG, H-PAR, H-PRIV, H-SCHED, H-TZ, H-TZC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-03, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-02, TZ-03, TZ-04, TZ-05, TZ-06, TZ-07, TZ-08, TZ-09, TZ-10, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-07, FIN-02, FIN-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-06, MIG-07, VER-02, VER-05, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§13-6` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-06, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§13-7` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-07, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-05, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§13-8` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-NTF, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-01, NTF-02, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-08, HOLD-PAR |
| `4-§13-9` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-IDEM, H-ISO, H-PAR, H-PRIV, H-SCHED | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, NTF-04, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§14-1` | §8.5 | C4 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D13, H-ISO, H-PAR, H-PRIV | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, UX-02, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| `4-§14-2` | §8.5 | C4 | PRIN | DEPENDENCY-HELD | M | H-D13, H-PAR | REM-05, NTF-05, DI-01, DI-02, DI-04, DI-06, CFO-07, UX-02, HOLD-02, HOLD-PAR |
| `4-§15-1` | §8.5 | C4 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-FIN, H-PAR, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-09, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-03, FIN-06, NG-01, HOLD-01, HOLD-02, HOLD-PAR |
| `4-§15-2` | §8.5 | C4 | NEG | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-PAR, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-10, DI-01, DI-02, DI-04, DI-06, CFO-05, CFO-06, AI-02, AI-04, VER-01, NG-01, HOLD-01, HOLD-02, HOLD-PAR |
| `4-§15-3` | §8.5 | C4 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-PAR, H-SEC | SEC-03, AUTHZ-01, AUTHZ-02, REM-07, NTF-03, NTF-08, DI-01, DI-02, DI-04, DI-06, RET-02, VER-01, NG-01, HOLD-01, HOLD-02, HOLD-PAR |
| `4-§15-4` | §8.5 | C4 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-PAR | DI-01, DI-02, DI-04, DI-06, NG-01, HOLD-01, HOLD-02, HOLD-PAR |
| `4-§15-5` | §8.5 | C4 | PRIN | DEPENDENCY-HELD | M | H-D12, H-D13, H-PAR | DI-01, DI-02, DI-04, DI-06, CFO-07, HOLD-01, HOLD-02, HOLD-PAR |
| `4-§16-1` | §8.5 | C4 | SCN | DEPENDENCY-HELD | C | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LVB, H-MIG, H-PAR, H-PRIV, H-SCHED, H-TZ, H-TZC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-03, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-02, TZ-03, TZ-04, TZ-05, TZ-06, TZ-07, TZ-08, TZ-09, TZ-10, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, DI-07, FIN-02, FIN-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-06, MIG-07, VER-02, VER-05, VER-07, VER-08, VER-09, VER-10, VER-LEG, CRIT-01, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§16-2` | §8.5 | C4 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-IDEM, H-ISO, H-LVB, H-PAR, H-PRIV, H-SCHED, H-TZ | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-09, SCH-10, NTF-04, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-05, VER-06, VER-07, VER-08, VER-10, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§16-3` | §8.5 | C4 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LVB, H-PAR, H-PRIV, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-08, VER-10, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§16-4` | §8.5 | C4 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-05, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§16-5` | §8.5 | C4 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-IDEM, H-ISO, H-NTF, H-PAR, H-PRIV, H-SCHED | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-07, SCH-08, SCH-10, NTF-01, NTF-02, NTF-04, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-05, VER-06, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-08, HOLD-PAR |
| `4-§16-7` | §8.5 | C4 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§16-8` | §8.5 | C4 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-DTX, H-FIN, H-ISO, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-01, RUL-04, RUL-05, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-05, AUD-02, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-07, HOLD-PAR |
| `4-§16-9` | §8.5 | C4 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, UX-02, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§16-10` | §8.5 | C4 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-01, FIN-02, FIN-03, CFO-05, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§16-11` | §8.5 | C4 | SCN | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, CFO-06, AI-02, AI-04, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `4-§17-1` | §8.5 | C4 | NEG | FOLLOW-UP | M | H-PAR, H-TZ | TZ-01, TZ-04, TZ-07, TZ-09, DI-01, DI-02, DI-04, DI-06, VER-07, NG-01, HOLD-PAR |
| `4-§17-2` | §8.5 | C4 | NEG | FOLLOW-UP | M | H-PAR, H-SEC | SEC-03, AUTHZ-01, RUL-04, DI-01, DI-02, DI-04, DI-06, NG-01, HOLD-PAR |
| `4-§17-3` | §8.5 | C4 | NEG | FOLLOW-UP | M | H-PAR, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, DI-01, DI-02, DI-04, DI-06, NG-01, HOLD-PAR |
| `4-§17-4` | §8.5 | C4 | NEG | FOLLOW-UP | M | H-PAR, H-SEC | SEC-03, AUTHZ-01, DI-01, DI-02, DI-04, DI-06, NG-01, HOLD-PAR |
| `4-§17-5` | §8.5 | C4 | NEG | FOLLOW-UP | M | H-AI, H-PAR | AUTHZ-10, DI-01, DI-02, DI-03, DI-04, DI-06, CFO-05, AI-02, AI-04, NG-01, HOLD-PAR |
| `4-§17-6` | §8.5 | C4 | NEG | FOLLOW-UP | M | H-NTF, H-PAR | NTF-01, NTF-02, DI-01, DI-02, DI-04, DI-06, NG-01, HOLD-08, HOLD-PAR |
| `11-§1-1` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-RO, H-SCHED | ARC-01, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, CFO-02, CFO-03, MIG-02, VER-04, HOLD-01, HOLD-02, HOLD-07 |
| `11-§1-2` | §8.1 | C11 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-SCHED, H-TZ | ARC-01, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, VER-07, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| `11-§2-9` | §8.1 | C11 | PRIN | FOLLOW-UP | M | H-SEC | SEC-03, AUTHZ-01, REM-01, REM-03, CFO-07 |
| `11-§3-1` | §8.1 | C11 | PRIN | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-SCHED | AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, DI-08, CFO-05, CFO-06, CFO-07, AI-02, AI-04, HOLD-01, HOLD-02, HOLD-07 |
| `11-§3-2` | §8.1 | C11 | PRIN | DEPENDENCY-HELD | M | H-D12, H-D13, H-SCHED, H-SEC | SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, CFO-07, HOLD-01, HOLD-02, HOLD-07 |
| `11-§3-3` | §8.1 | C11 | PRIN | DEPENDENCY-HELD | M | H-D12, H-D13, H-SCHED | SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-08, CFO-07, HOLD-01, HOLD-02, HOLD-07 |
| `11-§3-4` | §8.1 | C11 | PRIN | DEPENDENCY-HELD | M | H-D12, H-D13, H-SCHED, H-SEC | SEC-03, AUTHZ-01, PRIV-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, CFO-07, AUD-02, HOLD-01, HOLD-02, HOLD-07 |
| `11-§3-5` | §8.1 | C11 | PRIN | DEPENDENCY-HELD | M | H-D12, H-D13, H-SCHED, H-SEC | SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, RUL-04, CFO-07, HOLD-01, HOLD-02, HOLD-07 |
| `11-§3-6` | §8.1 | C11 | PRIN | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-SCHED, H-SEC | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, RUL-01, DI-08, CFO-05, CFO-07, AI-02, AI-04, AUD-02, HOLD-01, HOLD-02, HOLD-07 |
| `11-§3-7` | §8.1 | C11 | PRIN | DEPENDENCY-HELD | M | H-D12, H-D13, H-IDEM, H-SCHED | ARC-01, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, NTF-04, DI-02, CFO-07, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-07 |
| `11-§3-8` | §8.1 | C11 | PRIN | DEPENDENCY-HELD | M | H-D12, H-D13, H-SCHED, H-SEC | SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-04, RUL-06, CFO-07, AUD-01, AUD-02, OPS-02, HOLD-01, HOLD-02, HOLD-07 |
| `11-§4-1` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-MIG, H-SCHED | SEC-01, SEC-02, SEC-04, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `11-§4-2` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-MIG, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `11-§4-3` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-MIG, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `11-§4-4` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-MIG, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-05, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-06, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `11-§4-5` | §8.1 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-MIG, H-SCHED, H-TZ, H-TZC | SEC-01, SEC-02, SEC-04, AUTHZ-03, TZ-01, TZ-02, TZ-03, TZ-04, TZ-05, TZ-06, TZ-07, TZ-08, TZ-09, TZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, DI-07, MIG-01, MIG-02, MIG-03, MIG-04, MIG-06, MIG-07, VER-05, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `11-§4-6` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-IDEM, H-MIG, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-02, REM-03, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-05, VER-06, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `11-§4-7` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-FIN, H-MIG, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-05, SCH-02, SCH-03, SCH-04, SCH-09, SCH-10, REM-01, REM-03, REM-07, FIN-01, FIN-03, FIN-04, FIN-06, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `11-§4-8` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-MIG, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, DI-03, AI-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `11-§4-9` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-MIG, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `11-§4-10` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-IDEM, H-MIG, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, REM-04, RUL-06, DI-02, AUD-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-05, VER-06, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `11-§4-11` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-MIG, H-SCHED | SEC-01, SEC-02, SEC-04, TZ-05, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-04, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `11-§4-12` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-MIG, H-NTF, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-06, REM-07, NTF-01, NTF-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| `11-§4-13` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-AI, H-BIRTH, H-D12, H-D13, H-MIG, H-SCHED | ARC-01, SEC-01, SEC-02, SEC-04, AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, CFO-05, AI-02, AI-04, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `11-§5-1` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-NTF, H-SCHED | ARC-04, SEC-01, SEC-02, SEC-04, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, NTF-02, AI-03, MIG-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| `11-§5-2` | §8.1 | C11 | SCN | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-04, REM-05, MIG-02, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| `11-§5-3` | §8.1 | C11 | SCN | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-LATER, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, DI-08, MIG-02, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| `11-§5-4` | §8.1 | C11 | SCN | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, RUL-04, MIG-02, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| `11-§5-5` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, HOLD-01, HOLD-02, HOLD-07 |
| `11-§6-1` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-IDEM, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, REM-04, DI-02, MIG-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-07 |
| `11-§6-2` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-IDEM, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, REM-04, DI-02, MIG-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-07 |
| `11-§6-3` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-04, MIG-02, VER-07, HOLD-01, HOLD-02, HOLD-07 |
| `11-§6-4` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-04, MIG-02, VER-07, HOLD-01, HOLD-02, HOLD-07 |
| `11-§6-5` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-IDEM, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, REM-04, DI-02, MIG-02, VER-05, VER-06, VER-07, HOLD-01, HOLD-02, HOLD-07 |
| `11-§6-6` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-D14, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-09, SCH-10, REM-01, REM-03, FIN-02, CFO-03, MIG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07 |
| `11-§6-7` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-IDEM, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, REM-04, RUL-04, DI-02, MIG-02, VER-05, VER-06, VER-07, HOLD-01, HOLD-02, HOLD-07 |
| `11-§7-1` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-IDEM, H-MIG, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-02, REM-03, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-05, VER-06, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `11-§7-2` | §8.1 | C11 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-IDEM, H-SCHED, H-TZ | TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-02, REM-03, DI-02, VER-05, VER-06, VER-07, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| `11-§7-3` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-IDEM, H-MIG, H-NTF, H-SCHED | ARC-01, ARC-04, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-07, SCH-10, REM-01, REM-03, NTF-02, NTF-04, NTF-05, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-05, VER-06, VER-09, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| `11-§8-1` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, RUL-04, MIG-02, HOLD-01, HOLD-02, HOLD-07 |
| `11-§8-2` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-LATER, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, MIG-02, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| `11-§8-3` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-LATER, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, MIG-02, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| `11-§8-4` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-FIN, H-LATER, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, FIN-01, FIN-03, FIN-04, MIG-02, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| `11-§8-5` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-LATER, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, MIG-02, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| `11-§8-6` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-LATER, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-05, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, CFO-03, MIG-02, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| `11-§8-7` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-LATER, H-NTF, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, NTF-02, MIG-02, HOLD-01, HOLD-02, HOLD-05, HOLD-07, HOLD-08 |
| `11-§8-8` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-LATER, H-SCHED | SEC-01, SEC-02, SEC-04, SEC-06, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, MIG-02, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| `11-§8-9` | §8.1 | C11 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-SCHED, H-TZ | TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, VER-07, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| `11-§9-1` | §8.1 | C11 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-FIN, H-SCHED | SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-08, FIN-01, FIN-03, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| `11-§9-2` | §8.1 | C11 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-SCHED, H-SEC | SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, REM-08, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| `11-§9-3` | §8.1 | C11 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-SCHED, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-08, CFO-03, VER-01, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| `11-§9-4` | §8.1 | C11 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-SCHED | SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-08, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| `11-§9-5` | §8.1 | C11 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-FIN, H-SCHED, H-SEC | SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-08, FIN-01, FIN-03, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| `11-§9-6` | §8.1 | C11 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-NTF, H-SCHED | SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, REM-08, NTF-02, NG-01, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| `11-§9-7` | §8.1 | C11 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-08, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-07 |
| `11-§10-1` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, REM-01, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, MIG-02, HOLD-01, HOLD-02, HOLD-04 |
| `11-§10-2` | §8.2 | C11 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, REM-08, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| `11-§10-3` | §8.2 | C11 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-LATER, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-04, HOLD-05, HOLD-PAR |
| `11-§10-4` | §8.2 | C11 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-LATER, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, REM-07, RUL-01, RUL-02, RUL-04, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-05, HOLD-PAR |
| `11-§10-5` | §8.2 | C11 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-LATER, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-04, FIN-02, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-05 |
| `11-§10-6` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| `11-§10-7` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-06, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| `11-§10-8` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-02, AUTHZ-09, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-05, FIN-01, FIN-03, FIN-05, FIN-06, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| `11-§10-9` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, CFO-05, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| `11-§10-10` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| `11-§10-11` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, REM-01, REM-04, RUL-01, RUL-02, RUL-05, RUL-06, FIN-01, FIN-03, FIN-05, AUD-01, AUD-02, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| `11-§11-1` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-MIG, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `11-§11-2` | §8.2 | C11 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-MIG, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `11-§11-3` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-MIG, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `11-§11-4` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-MIG, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, RUL-04, CFO-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `11-§11-5` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-MIG, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `11-§11-6` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-MIG, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `11-§11-7` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-MIG, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `11-§11-8` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-MIG, H-NTF, H-PRIV, H-SCHED, H-SEC | ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, NTF-02, NTF-05, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-08 |
| `11-§11-9` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-MIG, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, RUL-06, AUD-01, AUD-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `11-§11-10` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-MIG, H-PAR, H-PRIV, H-SCHED, H-SEC, H-TZ | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `11-§11-11` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-MIG, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-06, AUTHZ-11, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, RUL-03, AI-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-03, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `11-§11-12` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-MIG, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, REM-04, RUL-01, RUL-02, RUL-06, AUD-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `11-§11-13` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-MIG, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, REM-04, RUL-01, RUL-02, RUL-06, AUD-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `11-§11-14` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-IDEM, H-MIG, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-07, SCH-10, REM-04, RUL-01, RUL-02, RUL-06, DI-02, AUD-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-05, VER-06, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `11-§11-15` | §8.2 | C11 | NEG | DEPENDENCY-HELD | H | H-D12, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, PRIV-04, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, RUL-03, AUD-02, VER-01, NG-01, HOLD-01, HOLD-07, HOLD-PAR |
| `11-§12-1` | §8.2 | C11 | SCN | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D12, H-LATER, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-10, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, REM-07, RUL-01, RUL-02, CFO-05, AI-02, AI-04, MIG-02, VER-10, HOLD-01, HOLD-05, HOLD-07 |
| `11-§12-2` | §8.2 | C11 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-LATER, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, REM-07, RUL-01, RUL-02, CFO-03, MIG-02, VER-10, HOLD-01, HOLD-05, HOLD-07, HOLD-PAR |
| `11-§12-3` | §8.2 | C11 | NEG | DEPENDENCY-HELD | H | H-D12, H-LATER, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, PRIV-04, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, AUD-02, VER-01, NG-01, HOLD-01, HOLD-05, HOLD-07, HOLD-PAR |
| `11-§13-1` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, REM-01, REM-03, RUL-01, MIG-02, HOLD-01 |
| `11-§13-2` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, REM-01, REM-03, RUL-01, AUD-02, MIG-02, HOLD-01 |
| `11-§13-3` | §8.1 | C11 | NEG | DEPENDENCY-HELD | M | H-D12, H-FIN, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-09, REM-01, REM-03, FIN-01, FIN-03, FIN-06, VER-01, NG-01, HOLD-01 |
| `11-§13-4` | §8.1 | C11 | NEG | DEPENDENCY-HELD | M | H-D12, H-SEC | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-05, REM-01, REM-03, RUL-01, NTF-03, CFO-03, VER-01, NG-01, HOLD-01 |
| `11-§14-1` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-NTF, H-SCHED | ARC-04, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, NTF-02, NTF-05, MIG-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| `11-§14-3` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-NTF, H-SCHED | ARC-04, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-07, SCH-10, REM-01, REM-03, REM-07, NTF-01, NTF-02, NTF-05, MIG-02, NG-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| `11-§15-1` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D13 | ARC-01, SEC-01, SEC-02, SEC-04, SEC-06, REM-01, REM-03, CFO-03, UX-02, MIG-02, HOLD-02 |
| `11-§15-2` | §8.1 | C11 | NEG | DEPENDENCY-HELD | M | H-D13, H-TZ | TZ-01, TZ-04, TZ-05, TZ-07, TZ-09, REM-01, REM-03, REM-05, VER-07, NG-01, HOLD-02 |
| `11-§16-1` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| `11-§16-2` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-06, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| `11-§16-3` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-IDEM, H-PAR, H-PRIV, H-SEC | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-05, SCH-06, RUL-01, RUL-02, RUL-05, NTF-04, DI-02, FIN-01, FIN-03, FIN-05, MIG-02, VER-06, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| `11-§16-4` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-05, RUL-06, FIN-01, FIN-03, FIN-05, AUD-01, AUD-02, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| `11-§16-5` | §8.2 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-07, RUL-01, RUL-02, RUL-05, FIN-01, FIN-03, FIN-05, FAIL-01, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| `11-§16-6` | §8.2 | C11 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-DTX, H-FIN, H-PAR, H-PRIV, H-SEC | SEC-03, SEC-04, AUTHZ-01, AUTHZ-06, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, NG-01, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| `11-§17-1` | §8.4 | C11 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-ISO, H-NTF, H-PAR, H-PRIV, H-SCHED, H-SEC | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-01, NTF-02, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08, HOLD-PAR |
| `11-§17-2` | §8.4 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-ISO, H-NTF, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-02, AUTHZ-07, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-01, NTF-02, NTF-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08, HOLD-PAR |
| `11-§17-3` | §8.4 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-ISO, H-NTF, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-05, NTF-01, NTF-02, NTF-05, UX-02, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| `11-§17-4` | §8.4 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-ISO, H-NTF, H-PAR, H-PRIV, H-SCHED, H-SEC | ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-01, NTF-02, NTF-05, MIG-02, VER-02, NG-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08, HOLD-PAR |
| `11-§17-5` | §8.4 | C11 | OBL | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D12, H-D13, H-ISO, H-NTF, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-10, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, NTF-01, NTF-02, NTF-05, CFO-05, AI-02, AI-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| `11-§17-6` | §8.4 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-IDEM, H-ISO, H-NTF, H-PAR, H-PRIV, H-SCHED, H-SEC | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, NTF-01, NTF-02, NTF-04, DI-02, MIG-02, VER-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-07, HOLD-08, HOLD-PAR |
| `11-§17-7` | §8.4 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-ISO, H-NTF, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-01, NTF-02, NTF-03, NTF-08, RET-02, OPS-02, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08, HOLD-PAR |
| `11-§17-8` | §8.4 | C11 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-NTF, H-PAR, H-SCHED, H-SEC | SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, NTF-01, NTF-02, CFO-03, UX-03, NG-01, HOLD-01, HOLD-02, HOLD-07, HOLD-08, HOLD-PAR |
| `11-§18-1` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-05, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, VER-07, HOLD-01, HOLD-02, HOLD-07 |
| `11-§18-2` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, AI-03, MIG-02, HOLD-01, HOLD-02, HOLD-07 |
| `11-§18-3` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED | SEC-01, SEC-02, SEC-04, AUTHZ-06, SCH-02, SCH-03, SCH-04, SCH-09, SCH-10, REM-01, REM-03, MIG-02, HOLD-01, HOLD-02, HOLD-07 |
| `11-§18-4` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-IDEM, H-SCHED | ARC-01, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, NTF-04, DI-02, MIG-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-07 |
| `11-§18-5` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-NTF, H-SCHED | ARC-04, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-07, SCH-10, REM-01, REM-03, NTF-01, NTF-02, NTF-05, NTF-09, AI-05, MIG-02, NG-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| `11-§18-6` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-02, AUTHZ-06, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, RUL-03, AI-03, MIG-02, VER-03, HOLD-01, HOLD-02, HOLD-07 |
| `11-§18-7` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-06, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, RUL-01, RUL-03, AI-03, MIG-02, VER-03, HOLD-01, HOLD-02, HOLD-07 |
| `11-§18-8` | §8.1 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN | SEC-01, SEC-02, SEC-04, REM-01, REM-03, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, FAIL-02, MIG-02, HOLD-01, HOLD-02, HOLD-04 |
| `11-§18-9` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-IDEM, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-02, REM-03, DI-02, MIG-02, VER-05, VER-06, VER-07, HOLD-01, HOLD-02, HOLD-07 |
| `11-§18-10` | §8.1 | C11 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-MIG, H-SCHED, H-TZ, H-TZC | SEC-01, SEC-02, SEC-04, AUTHZ-03, TZ-01, TZ-02, TZ-03, TZ-04, TZ-05, TZ-06, TZ-07, TZ-08, TZ-09, TZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, DI-07, MIG-01, MIG-02, MIG-03, MIG-04, MIG-06, MIG-07, VER-05, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `11-§18-11` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-NTF, H-SCHED | ARC-04, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, NTF-02, NTF-05, NTF-09, FAIL-01, MIG-02, NG-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| `11-§18-12` | §8.1 | C11 | NEG | DEPENDENCY-HELD | M | H-D12, H-D13, H-SCHED | SCH-02, SCH-03, SCH-04, SCH-09, SCH-10, REM-01, REM-03, FAIL-01, FAIL-02, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| `11-§19-1` | §8.1 | C11 | NEG | DEPENDENCY-HELD | M | H-D12, H-SEC | SEC-03, AUTHZ-01, AUTHZ-05, REM-01, REM-03, NTF-03, NTF-08, RET-02, VER-01, NG-01, HOLD-01 |
| `11-§19-2` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-02, REM-01, REM-03, MIG-02, HOLD-01 |
| `11-§19-3` | §8.1 | C11 | NEG | DEPENDENCY-HELD | M | H-D12, H-SEC | SEC-03, AUTHZ-01, AUTHZ-02, REM-01, REM-03, REM-05, NTF-03, NTF-08, RET-02, VER-01, NG-01, HOLD-01 |
| `11-§19-4` | §8.1 | C11 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, REM-01, REM-03, REM-04, RUL-06, AUD-01, AUD-02, MIG-02, HOLD-01 |
| `11-§20-1` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D14 | ARC-02, SEC-01, SEC-02, SEC-04, REM-01, REM-03, FIN-02, MIG-02, HOLD-03 |
| `11-§20-2` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12 | ARC-02, SEC-01, SEC-02, SEC-04, REM-01, REM-03, MIG-02, HOLD-01 |
| `11-§20-3` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-SEC | ARC-02, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-02, REM-01, REM-03, MIG-02, HOLD-01 |
| `11-§20-4` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D13 | ARC-02, SEC-01, SEC-02, SEC-04, REM-01, REM-03, REM-05, NTF-05, UX-02, MIG-02, HOLD-02 |
| `11-§20-5` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D13, H-NTF | ARC-02, ARC-04, SEC-01, SEC-02, SEC-04, REM-01, REM-03, NTF-02, NTF-05, AI-03, MIG-02, HOLD-02, HOLD-08 |
| `11-§20-6` | §8.1 | C11 | RULE | FOLLOW-UP | M | H-BIRTH, H-NTF | ARC-01, SEC-01, SEC-02, SEC-04, REM-01, REM-03, NTF-01, NTF-02, MIG-02, HOLD-08 |
| `11-§20-7` | §8.1 | C11 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-IDEM, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, SCH-02, SCH-05, SCH-06, REM-01, REM-03, DI-02, AUD-01, AUD-02, MIG-02, VER-06, HOLD-01 |
| `11-§20-8` | §8.1 | C11 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-DTX, H-FIN | ARC-02, SEC-01, SEC-02, SEC-04, REM-01, REM-03, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, MIG-02, HOLD-04 |
| `11-§21-1` | §8.1 | C11 | NEG | FOLLOW-UP | M | H-IDEM | ARC-01, SCH-02, SCH-05, SCH-06, REM-01, REM-03, NTF-04, DI-02, VER-06, NG-01 |
| `11-§21-2` | §8.1 | C11 | NEG | FOLLOW-UP | M | H-AI, H-SEC | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, PRIV-04, REM-01, REM-03, CFO-05, AI-02, AI-04, VER-01, NG-01 |
| `11-§21-3` | §8.1 | C11 | NEG | FOLLOW-UP | H | H-FIN, H-RO | REM-01, REM-03, RUL-05, FIN-01, FIN-03, CFO-02, CFO-03, VER-04, NG-01 |
| `11-§21-4` | §8.1 | C11 | NEG | FOLLOW-UP | M | H-TZ | TZ-01, TZ-04, TZ-05, TZ-07, TZ-09, REM-01, REM-03, REM-06, REM-08, VER-07, NG-01 |
| `11-§21-5` | §8.1 | C11 | NEG | FOLLOW-UP | M | H-SEC | SEC-03, AUTHZ-01, REM-01, REM-03, REM-07, RUL-05, NG-01 |
| `11-§21-6` | §8.1 | C11 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | H-EVID, H-PAR | ARC-01, REM-01, REM-03, FAIL-01, VER-11, NG-01, HOLD-PAR |
| `11-§22-1` | §8.1 | C11 | SCN | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED | SEC-01, SEC-02, SEC-04, TZ-05, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, NTF-05, UX-02, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| `11-§22-2` | §8.1 | C11 | SCN | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| `11-§22-3` | §8.1 | C11 | SCN | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-IDEM, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-02, REM-03, REM-04, RUL-06, DI-02, AUD-01, MIG-02, VER-05, VER-06, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| `11-§22-4` | §8.1 | C11 | SCN | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-IDEM, H-SCHED, H-TZ | ARC-01, SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, REM-04, NTF-04, DI-02, MIG-02, VER-05, VER-06, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| `11-§22-6` | §8.1 | C11 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-06, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-04, HOLD-07 |
| `11-§22-7` | §8.1 | C11 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, REM-01, REM-03, RUL-01, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, AUD-02, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-04 |
| `11-§22-8` | §8.1 | C11 | SCN | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, RUL-01, RUL-03, MIG-02, VER-10, HOLD-01, HOLD-07 |
| `11-§22-9` | §8.1 | C11 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-DTX, H-FIN, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-02, AUTHZ-06, AUTHZ-09, AUTHZ-11, TZ-05, REM-01, REM-03, RUL-03, RUL-05, FIN-01, FIN-03, FIN-05, FIN-06, AI-03, MIG-02, VER-03, VER-10, HOLD-01, HOLD-04 |
| `11-§22-10` | §8.1 | C11 | SCN | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-NTF, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-07, SCH-10, REM-01, REM-03, REM-04, NTF-01, NTF-02, NTF-10, UX-03, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| `11-§22-11` | §8.1 | C11 | SCN | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-IDEM, H-SCHED | ARC-01, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, NTF-04, DI-02, MIG-02, VER-05, VER-06, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| `11-§22-12` | §8.1 | C11 | SCN | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-07, SCH-09, SCH-10, REM-01, REM-03, FAIL-01, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| `11-§23-1` | §8.1 | C11 | PRIN | DEPENDENCY-HELD | M | H-D12, H-D13, H-SCHED | SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, CFO-07, HOLD-01, HOLD-02, HOLD-07 |
| `11-§23-2` | §8.1 | C11 | NEG | FOLLOW-UP | M | H-SEC | SEC-03, AUTHZ-01, REM-01, REM-03, NG-01 |
| `11-§23-3` | §8.1 | C11 | NEG | FOLLOW-UP | M | H-AI, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, PRIV-04, REM-01, REM-03, CFO-05, AI-02, AI-04, VER-01, NG-01 |
| `11-§23-4` | §8.1 | C11 | NEG | FOLLOW-UP | M | H-IDEM, H-TZ | ARC-01, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-05, SCH-06, REM-01, REM-03, NTF-04, DI-02, VER-06, VER-07, NG-01 |
| `11-§23-5` | §8.1 | C11 | NEG | FOLLOW-UP | M | H-TZ | TZ-01, TZ-04, TZ-05, TZ-07, TZ-09, SCH-01, REM-01, REM-03, VER-07, VER-LEG, NG-01 |
| `22-§11-1` | §8.1 | C22 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-MIG, H-SCHED | SEC-01, SEC-02, SEC-04, AUTHZ-05, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, RET-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `22-§11-2` | §8.1 | C22 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-LATER, H-MIG, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| `22-§11-3` | §8.1 | C22 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-LATER, H-MIG, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| `22-§11-4` | §8.1 | C22 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-FIN, H-LATER, H-MIG, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, FIN-01, FIN-03, FIN-04, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| `22-§11-5` | §8.1 | C22 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-LATER, H-MIG, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| `22-§11-6` | §8.1 | C22 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-LATER, H-MIG, H-NTF, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, NTF-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-05, HOLD-07, HOLD-08 |
| `22-§11-7` | §8.1 | C22 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-MIG, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, RUL-04, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `22-§11-8` | §8.1 | C22 | RULE | DEPENDENCY-HELD | M | H-AI, H-BIRTH, H-D12, H-D13, H-MIG, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, PRIV-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, RUL-01, CFO-05, AI-02, AI-04, AUD-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `22-§11-9` | §8.1 | C22 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-MIG, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| `22-§12-1` | §8.4 | C22 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-ISO, H-MIG, H-NTF, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-02, AUTHZ-07, PRIV-01, PRIV-02, NTF-01, NTF-02, NTF-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-09, HOLD-01, HOLD-02, HOLD-08, HOLD-PAR |
| `22-§12-2` | §8.4 | C22 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-ISO, H-MIG, H-NTF, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, REM-05, NTF-01, NTF-02, NTF-05, UX-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-09, HOLD-01, HOLD-02, HOLD-08 |
| `22-§12-3` | §8.4 | C22 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-ISO, H-MIG, H-NTF, H-PAR, H-PRIV, H-SEC | ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, NTF-01, NTF-02, NTF-05, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-09, NG-02, HOLD-01, HOLD-02, HOLD-08, HOLD-PAR |
| `22-§12-4` | §8.4 | C22 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-ISO, H-MIG, H-NTF, H-PRIV, H-SEC | ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, SCH-09, NTF-01, NTF-02, NTF-05, AI-05, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-09, NG-02, HOLD-01, HOLD-02, HOLD-08 |
| `22-§12-5` | §8.4 | C22 | OBL | DEPENDENCY-HELD | H | H-ACT, H-BIRTH, H-CORR, H-D12, H-D13, H-IDEM, H-ISO, H-MIG, H-NTF, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-05, SCH-06, SCH-07, REM-07, NTF-01, NTF-02, NTF-06, NTF-07, NTF-09, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-05, MIG-07, VER-02, VER-06, VER-08, VER-09, HOLD-01, HOLD-02, HOLD-08, HOLD-PAR, HOLD-CORR |
| `22-§12-6` | §8.4 | C22 | OBL | DEPENDENCY-HELD | H | H-ACT, H-BIRTH, H-CORR, H-D12, H-D13, H-IDEM, H-ISO, H-MIG, H-NTF, H-PAR, H-PRIV, H-SEC | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-05, SCH-06, NTF-01, NTF-02, NTF-04, NTF-06, NTF-07, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-05, MIG-07, VER-02, VER-06, VER-08, VER-09, HOLD-01, HOLD-02, HOLD-08, HOLD-PAR, HOLD-CORR |
| `22-§12-7` | §8.4 | C22 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-ISO, H-MIG, H-NTF, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, NTF-01, NTF-02, NTF-03, NTF-08, RET-02, OPS-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-09, HOLD-01, HOLD-02, HOLD-08, HOLD-PAR |
| `22-§12-8` | §8.4 | C22 | OBL | DEPENDENCY-HELD | H | H-ACT, H-BIRTH, H-CORR, H-D12, H-D13, H-ISO, H-MIG, H-NTF, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, NTF-01, NTF-02, NTF-06, NTF-07, MIG-01, MIG-02, MIG-03, MIG-04, MIG-05, MIG-07, VER-02, VER-08, VER-09, NG-02, HOLD-01, HOLD-02, HOLD-08, HOLD-PAR, HOLD-CORR |
| `22-§12-9` | §8.4 | C22 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-ISO, H-MIG, H-NTF, H-PAR, H-PRIV, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, REM-04, REM-07, NTF-01, NTF-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-09, HOLD-01, HOLD-02, HOLD-08, HOLD-PAR |
| `22-§17-1` | §8.7 | C22 | RULE | DESIGN ACCEPTED — EVIDENCE HOLD | M | H-EVID | ARC-01, VER-11 |
| `22-§17-9` | §8.7 | C22 | NEG | FOLLOW-UP | H | H-PAR, H-SEC | ARC-01, SEC-03, AUTHZ-01, NG-01, HOLD-PAR |
| `22-§18-1` | §8.3 | C22 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-IDEM, H-ISO, H-MIG, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, DI-02, FIN-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `22-§18-2` | §8.3 | C22 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-IDEM, H-ISO, H-MIG, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, REM-01, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `22-§18-3` | §8.3 | C22 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-IDEM, H-ISO, H-MIG, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-07, SCH-08, SCH-10, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `22-§18-4` | §8.3 | C22 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D14, H-IDEM, H-ISO, H-MIG, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, DI-02, FIN-02, RET-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-03, HOLD-07 |
| `22-§18-5` | §8.3 | C22 | OBL | FOLLOW-UP | H | H-BIRTH, H-IDEM, H-ISO, H-LATER, H-MIG, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-05, HOLD-07 |
| `22-§18-6` | §8.3 | C22 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-IDEM, H-ISO, H-MIG, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, DI-02, DI-03, FIN-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `22-§18-7` | §8.3 | C22 | NEG | DEPENDENCY-HELD | H | H-D12, H-IDEM, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, PRIV-04, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, DI-02, CFO-03, VER-05, VER-06, NG-01, HOLD-01, HOLD-07, HOLD-PAR |
| `22-§18-8` | §8.3 | C22 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-IDEM, H-ISO, H-MIG, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `22-§18-9` | §8.3 | C22 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-IDEM, H-ISO, H-MIG, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, SCH-11, DI-02, OPS-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `22-§18-10` | §8.3 | C22 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-IDEM, H-ISO, H-MIG, H-PAR, H-PRIV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-07, SCH-08, SCH-10, DI-02, FAIL-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| `22-§18-11` | §8.3 | C22 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-DTX, H-FIN, H-IDEM, H-ISO, H-MIG, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-02, AUTHZ-06, AUTHZ-09, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, RUL-05, DI-02, FIN-01, FIN-03, FIN-05, FIN-06, AUD-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-01, HOLD-04, HOLD-07, HOLD-PAR |
| `22-§19-8` | §8.7 | C22 | RULE | FOLLOW-UP | H | H-IDEM, H-PAR | ARC-01, SCH-02, SCH-05, SCH-06, SCH-09, DI-02, DI-05, FAIL-01, VER-06, HOLD-PAR |
| `22-§19-1` | §8.7 | C22 | OBL | FOLLOW-UP | M | H-AI, H-PAR | ARC-01, AUTHZ-10, SCH-07, CFO-05, AI-02, AI-04, FAIL-02, HOLD-PAR |
| `22-§19-2` | §8.7 | C22 | OBL | FOLLOW-UP | H | H-IDEM, H-PAR | ARC-01, SCH-02, SCH-05, SCH-06, SCH-07, DI-02, FAIL-02, VER-06, HOLD-PAR |
| `22-§19-3` | §8.7 | C22 | OBL | FOLLOW-UP | H | H-PAR | ARC-01, FAIL-02, UX-03, HOLD-PAR |
| `22-§19-4` | §8.7 | C22 | OBL | FOLLOW-UP | M | H-PAR | ARC-01, FAIL-02, HOLD-PAR |
| `22-§19-5` | §8.7 | C22 | OBL | FOLLOW-UP | M | H-PAR | ARC-01, SCH-11, OPS-01, HOLD-PAR |
| `22-§19-6` | §8.7 | C22 | OBL | FOLLOW-UP | H | H-PAR | ARC-01, FAIL-01, HOLD-PAR |
| `22-§19-7` | §8.7 | C22 | RULE | FOLLOW-UP | H | H-PAR, H-SEC | ARC-01, SEC-03, AUTHZ-01, NTF-05, AI-05, FAIL-01, HOLD-PAR |
| `22-§21-1` | §8.7 | C22 | RULE | FOLLOW-UP | M | H-SEC | ARC-01, SEC-03, AUTHZ-01, OPS-02, UX-01 |
| `22-§21-2` | §8.7 | C22 | NEG | FOLLOW-UP | H | H-PAR, H-SEC | ARC-01, SEC-03, AUTHZ-01, OPS-02, NG-01, HOLD-PAR |
| `22-§21-3` | §8.7 | C22 | NEG | FOLLOW-UP | H | H-FIN, H-PAR | ARC-01, FIN-01, FIN-03, OPS-02, NG-01, HOLD-PAR |
| `22-§21-4` | §8.7 | C22 | NEG | FOLLOW-UP | H | H-PAR, H-SEC | ARC-01, SEC-03, AUTHZ-01, OPS-02, NG-01, HOLD-PAR |
| `22-§21-5` | §8.7 | C22 | NEG | FOLLOW-UP | H | H-PAR, H-SEC | ARC-01, SEC-03, AUTHZ-01, NTF-03, NTF-08, RET-02, OPS-02, NG-01, HOLD-PAR |
| `22-§21-6` | §8.7 | C22 | NEG | FOLLOW-UP | M | H-PAR, H-SEC | ARC-01, SEC-03, AUTHZ-01, RUL-06, AUD-01, OPS-02, NG-01, HOLD-PAR |
| `22-§21-7` | §8.7 | C22 | RULE | FOLLOW-UP | H | H-AI, H-PAR | ARC-01, AUTHZ-10, AUTHZ-11, CFO-05, AI-02, AI-04, OPS-02, HOLD-PAR |
| `22-§22-1` | §8.7 | C22 | OBL | FOLLOW-UP | M | H-PAR | ARC-01, UX-01, HOLD-PAR |
| `22-§22-2` | §8.7 | C22 | OBL | FOLLOW-UP | H | H-FIN, H-PAR, H-SEC | ARC-01, SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-09, DI-03, FIN-01, FIN-03, FIN-06, CI-01, HOLD-PAR |
| `22-§22-3` | §8.7 | C22 | OBL | FOLLOW-UP | M | H-PAR | ARC-01, SCH-07, CI-01, HOLD-PAR |
| `22-§22-4` | §8.7 | C22 | OBL | FOLLOW-UP | H | H-PAR | ARC-01, VER-11, HOLD-PAR |
| `22-§22-5` | §8.7 | C22 | OBL | FOLLOW-UP | M | H-PAR | ARC-01, VER-11, HOLD-PAR |
| `22-§22-6` | §8.7 | C22 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | M | H-EVID | ARC-01, CI-01, VER-11, NG-01 |
| `22-§23-2` | §8.7 | C22 | OBL | DEPENDENCY-HELD | C | H-D12, H-ISO, H-PAR, H-SEC | ARC-01, SEC-03, SEC-05, AUTHZ-01, NTF-08, VER-02, CRIT-03, HOLD-01, HOLD-PAR |
| `22-§23-3` | §8.7 | C22 | OBL | DEPENDENCY-HELD | H | H-D12, H-PAR, H-SEC | ARC-01, SEC-03, SEC-05, SEC-06, AUTHZ-01, AUTHZ-05, NTF-03, HOLD-01, HOLD-PAR |
| `22-§23-5` | §8.7 | C22 | OBL | DEPENDENCY-HELD | H | H-D12, H-PAR, H-SEC | ARC-01, SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-05, NTF-03, HOLD-01, HOLD-PAR |
| `22-§27-1` | §8.7 | C22 | OBL | FOLLOW-UP | M | H-PAR | ARC-01, ARC-03, HOLD-PAR |
| `22-§27-2` | §8.7 | C22 | OBL | FOLLOW-UP | M | H-PAR | ARC-01, ARC-03, HOLD-PAR |
| `22-§27-3` | §8.7 | C22 | OBL | FOLLOW-UP | M | H-AI, H-NTF, H-PAR | ARC-01, ARC-03, ARC-04, AUTHZ-10, NTF-02, NTF-05, DI-08, CFO-05, AI-02, AI-04, HOLD-08, HOLD-PAR |
| `22-§27-4` | §8.7 | C22 | OBL | FOLLOW-UP | M | H-IDEM, H-PAR | ARC-01, ARC-03, SCH-02, SCH-05, SCH-06, NTF-04, DI-02, VER-06, HOLD-PAR |
| `22-§27-5` | §8.7 | C22 | OBL | FOLLOW-UP | H | H-PAR | ARC-01, ARC-03, NG-02, HOLD-PAR |
| `22-§27-6` | §8.7 | C22 | OBL | FOLLOW-UP | M | H-PAR | ARC-01, ARC-03, HOLD-PAR |
| `22-§27-7` | §8.7 | C22 | OBL | FOLLOW-UP | M | H-PAR | ARC-01, ARC-03, VER-11, HOLD-PAR |
| `22-§27-8` | §8.7 | C22 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | H | H-EVID | ARC-01, SCH-09, FAIL-01, VER-11, NG-01, NG-02 |
| `22-§28-1` | §8.7 | C22 | NEG | FOLLOW-UP | H | H-IDEM, H-NTF, H-PAR | ARC-01, ARC-02, ARC-04, SCH-02, SCH-05, SCH-06, NTF-02, NTF-04, NTF-05, DI-02, VER-06, NG-01, HOLD-08, HOLD-PAR |
| `22-§28-2` | §8.7 | C22 | NEG | FOLLOW-UP | H | H-IDEM, H-PAR, H-SEC | ARC-01, ARC-02, SEC-03, AUTHZ-01, AUTHZ-02, SCH-02, SCH-05, SCH-06, NTF-04, DI-02, VER-01, VER-06, NG-01, HOLD-PAR |
| `22-§28-3` | §8.7 | C22 | NEG | FOLLOW-UP | H | H-AI, H-IDEM, H-NTF, H-PAR | ARC-01, ARC-04, AUTHZ-10, SCH-02, SCH-05, SCH-06, NTF-02, NTF-04, NTF-05, DI-02, DI-08, CFO-05, AI-02, AI-04, VER-06, NG-01, HOLD-08, HOLD-PAR |
| `22-§28-4` | §8.7 | C22 | NEG | FOLLOW-UP | H | H-IDEM, H-PAR, H-TZ | ARC-01, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-05, SCH-06, REM-01, NTF-04, DI-02, VER-06, VER-07, NG-01, HOLD-PAR |
| `22-§28-5` | §8.7 | C22 | NEG | FOLLOW-UP | M | H-IDEM, H-PAR | ARC-01, SCH-02, SCH-05, SCH-06, NTF-04, DI-02, VER-06, NG-01, HOLD-PAR |
| `22-§28-6` | §8.7 | C22 | NEG | FOLLOW-UP | M | H-IDEM, H-PAR, H-SEC | ARC-01, SEC-03, AUTHZ-01, SCH-02, SCH-05, SCH-06, REM-07, NTF-04, DI-02, VER-06, NG-01, HOLD-PAR |
| `22-§28-7` | §8.7 | C22 | NEG | FOLLOW-UP | H | H-PAR, H-SEC | ARC-01, SEC-03, AUTHZ-01, AUTHZ-05, VER-01, NG-01, HOLD-PAR |
| `22-§28-8` | §8.7 | C22 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | H | H-EVID | ARC-01, VER-11, NG-01 |
| `22-§28-9` | §8.7 | C22 | NEG | FOLLOW-UP | C | H-AI, H-PAR, H-SEC | ARC-01, SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, CFO-03, CFO-05, AI-02, AI-04, VER-01, CRIT-04, NG-01, HOLD-PAR |
| `22-§28-10` | §8.7 | C22 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | H | H-EVID | ARC-01, VER-11, NG-01 |
| `22-§29-3` | §8.7 | C22 | SCN | DEPENDENCY-HELD | C | H-AI, H-D12, H-ISO, H-NTF, H-PAR, H-SEC | ARC-01, ARC-04, SEC-03, SEC-05, AUTHZ-01, AUTHZ-10, NTF-02, NTF-05, DI-08, CFO-03, CFO-05, AI-02, AI-04, VER-02, VER-10, CRIT-05, HOLD-01, HOLD-08, HOLD-PAR |
| `22-§29-4` | §8.7 | C22 | SCN | DEPENDENCY-HELD | M | H-D12, H-D13, H-PAR, H-SCHED | ARC-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, VER-10, HOLD-01, HOLD-02, HOLD-07, HOLD-PAR |
| `22-§29-7` | §8.7 | C22 | SCN | DEPENDENCY-HELD | H | H-D12, H-DTX, H-FIN, H-PAR, H-SEC | ARC-01, SEC-03, AUTHZ-01, AUTHZ-06, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, VER-10, HOLD-01, HOLD-04, HOLD-PAR |
| `22-§29-8` | §8.7 | C22 | SCN | DEPENDENCY-HELD | H | H-D12, H-IDEM, H-PAR, H-SCHED | ARC-01, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-07, SCH-10, NTF-04, DI-02, VER-05, VER-06, VER-10, HOLD-01, HOLD-07, HOLD-PAR |
| `22-§29-10` | §8.7 | C22 | SCN | FOLLOW-UP | H | H-NTF, H-PAR, H-SCHED | ARC-01, SCH-02, SCH-03, SCH-04, SCH-07, SCH-10, NTF-02, NTF-05, NTF-09, AI-05, FAIL-01, VER-10, HOLD-07, HOLD-08, HOLD-PAR |
| `22-§29-12` | §8.7 | C22 | SCN | DEPENDENCY-HELD | H | H-D12, H-PAR, H-SEC | ARC-01, SEC-03, AUTHZ-01, REM-05, AI-03, AUD-01, AUD-02, VER-10, HOLD-01, HOLD-PAR |
| `22-§29-13` | §8.7 | C22 | SCN | FOLLOW-UP | H | H-AI, H-PAR, H-PROV | ARC-01, AUTHZ-01, AUTHZ-10, AUTHZ-11, NTF-09, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, FAIL-01, VER-10, HOLD-06, HOLD-PAR |
| `22-§29-14` | §8.7 | C22 | SCN | FOLLOW-UP | M | H-PAR | ARC-01, ARC-03, VER-10, HOLD-PAR |
| `24-§5-4` | §8.3 | C24 | RULE | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D13, H-IDEM, H-ISO, H-PAR, H-PRIV, H-PROV, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, DI-02, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, VER-05, VER-06, VER-07, HOLD-02, HOLD-06, HOLD-07, HOLD-PAR |
| `24-§12-1` | §8.6 | C24 | RULE | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | ARC-01, AUTHZ-10, AUTHZ-11, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, UX-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `24-§12-2` | §8.6 | C24 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `24-§12-3` | §8.6 | C24 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `24-§12-4` | §8.6 | C24 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, SCH-07, SCH-09, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `24-§12-5` | §8.6 | C24 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `24-§12-6` | §8.6 | C24 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `24-§12-7` | §8.6 | C24 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `24-§12-8` | §8.6 | C24 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO | CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| `24-§12-9` | §8.6 | C24 | RULE | DEPENDENCY-HELD | H | H-D12, H-D13, H-DTX, H-FIN, H-RO | RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-01, CFO-02, CFO-03, VER-04, HOLD-01, HOLD-02, HOLD-04 |
| `24-§13-1` | §8.1 | C24 | OBL | DEPENDENCY-HELD | M | H-AI, H-BIRTH, H-D12, H-D13, H-IDEM, H-SCHED, H-SEC, H-TZ | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-02, REM-03, REM-04, REM-05, RUL-01, RUL-06, DI-02, DI-08, CFO-05, AI-02, AI-04, AUD-01, MIG-02, VER-05, VER-06, VER-07, HOLD-01, HOLD-02, HOLD-07 |
| `24-§16-1` | §8.5 | C24 | RULE | DEPENDENCY-HELD | C | H-AI, H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-PROV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, DI-08, FIN-01, FIN-02, FIN-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, CRIT-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07, HOLD-PAR |
| `24-§16-2` | §8.5 | C24 | OBL | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-PROV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, FIN-02, FIN-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07, HOLD-PAR |
| `24-§16-3` | §8.5 | C24 | OBL | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-PROV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, FIN-02, FIN-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07, HOLD-PAR |
| `24-§16-4` | §8.5 | C24 | OBL | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-PROV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, FIN-02, FIN-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07, HOLD-PAR |
| `24-§16-5` | §8.5 | C24 | OBL | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-PROV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, FIN-02, FIN-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07, HOLD-PAR |
| `24-§16-6` | §8.5 | C24 | OBL | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-PAR, H-PRIV, H-PROV, H-SCHED | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, FIN-02, FIN-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07, HOLD-PAR |
| `24-§16-7` | §8.5 | C24 | NEG | DEPENDENCY-HELD | M | H-AI, H-D12, H-PAR, H-SCHED, H-SEC, H-TZ | SEC-03, AUTHZ-01, AUTHZ-10, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, CFO-05, AI-02, AI-04, AUD-02, VER-01, VER-07, NG-01, HOLD-01, HOLD-07, HOLD-PAR |
| `24-§18-1b` | §8.6 | C24 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO, H-SCHED | AUTHZ-10, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07 |
| `24-§18-2` | §8.2 | C24 | SCN | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-05, RUL-01, RUL-02, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-04, HOLD-07, HOLD-PAR |
| `24-§27-3` | §8.6 | C24 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, UX-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `24-§31-9` | §8.6 | C24 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| `24-§31-10` | §8.1 | C24 | SCN | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED | ARC-01, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| `9-§12-2` | §8.6 | C9 | RULE | DEPENDENCY-HELD | M | H-D13, H-RO | ARC-01, ARC-02, REM-05, NTF-05, CFO-01, CFO-02, CFO-03, UX-02, VER-04, HOLD-02 |
| `9-§12-3` | §8.5 | C9 | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D13, H-ISO, H-PAR, H-PRIV | ARC-01, ARC-02, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, REM-05, NTF-05, DI-01, DI-02, DI-04, DI-06, UX-02, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| `9-§12-6` | §8.1 | C9 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D13, H-SEC | ARC-01, ARC-02, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-11, REM-01, REM-03, REM-05, RUL-01, NTF-05, UX-02, MIG-02, HOLD-02 |
| `9-§17-5` | §8.1 | C9 | SCN | DEPENDENCY-HELD | M | H-BIRTH, H-D13, H-SCHED, H-TZ | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-05, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, VER-07, VER-10, HOLD-02, HOLD-07 |
| `9-§17-6` | §8.6 | C9 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, REM-05, NTF-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, UX-02, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `10-§5-5` | §8.6 | C10 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | ARC-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `10-§5-7` | §8.1 | C10 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED | ARC-02, ARC-04, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-06, NTF-05, MIG-02, NG-02, HOLD-01, HOLD-02, HOLD-07 |
| `10-§9-1` | §8.6 | C10 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | ARC-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `10-§9-2` | §8.6 | C10 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | ARC-01, AUTHZ-02, AUTHZ-10, AUTHZ-11, SCH-07, RUL-04, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `10-§11-4` | §8.1 | C10 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D13, H-SCHED | ARC-02, SEC-01, SEC-02, SEC-04, SEC-06, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, HOLD-02, HOLD-07 |
| `10-§13-4` | §8.1 | C10 | SCN | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED | ARC-02, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, CFO-03, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| `10-§23-4` | §8.6 | C10 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, AUD-02, VER-04, VER-10, HOLD-01, HOLD-02 |
| `12-§4-2` | §8.6 | C12 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | ARC-02, SEC-06, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `12-§4-3` | §8.1 | C12 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D13, H-SCHED | ARC-02, SEC-01, SEC-02, SEC-04, SEC-06, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, HOLD-02, HOLD-07 |
| `12-§11-6` | §8.6 | C12 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | ARC-02, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `12-§12-1` | §8.6 | C12 | OBL | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | ARC-02, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `12-§12-3` | §8.6 | C12 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO | REM-05, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| `12-§13-1` | §8.1 | C12 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D13, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, HOLD-02, HOLD-07 |
| `12-§13-2` | §8.1 | C12 | OBL | DEPENDENCY-HELD | M | H-BIRTH, H-D13, H-SCHED | ARC-01, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, RUL-04, MIG-02, HOLD-02, HOLD-07 |
| `12-§21-3` | §8.6 | C12 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `12-§21-4` | §8.1 | C12 | SCN | DEPENDENCY-HELD | M | H-BIRTH, H-D13, H-SCHED | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, VER-10, HOLD-02, HOLD-07 |
| `3-§13-1` | §8.6 | C3 | OBL | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `3-§13-2` | §8.6 | C3 | NEG | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO | CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| `3-§13-3` | §8.2 | C3 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-PAR, H-PRIV, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-07, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-07, HOLD-PAR |
| `3-§14-1` | §8.5 | C3 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-ISO, H-PAR, H-PRIV, H-SCHED, H-SEC, H-TZ | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `3-§15-6` | §8.1 | C3 | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-D14, H-FIN, H-IDEM, H-SCHED | ARC-01, ARC-02, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, NTF-04, DI-02, FIN-01, FIN-02, FIN-03, MIG-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-07 |
| `17-§11-1` | §8.6 | C17 | RULE | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO, H-SCHED | ARC-02, AUTHZ-10, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07 |
| `17-§11-2` | §8.6 | C17 | NEG | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-RO | ARC-01, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, NG-01, HOLD-01, HOLD-02 |
| `17-§11-3` | §8.5 | C17 | OBL | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-NTF, H-PAR, H-PRIV, H-SCHED, H-TZ | ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-02, NTF-05, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-08, HOLD-PAR |
| `17-§22-7` | §8.6 | C17 | SCN | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-RO | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| `BP-§9-4` | §8.8 | BP | RULE | DESIGN ACCEPTED — EVIDENCE HOLD | L | H-EVID, H-PAR | ARC-04, REM-01, VER-11, HOLD-PAR |
| `BP-§10.4-O` | §8.8 | BP | EXP | FOLLOW-UP | M | H-SEC | ARC-04, SEC-03, AUTHZ-01, UX-01, VER-10 |
| `BP-§10.4-W1` | §8.1 | BP | WORK | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED | ARC-01, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| `BP-§10.4-W2` | §8.1 | BP | WORK | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-IDEM, H-SCHED, H-TZ | ARC-01, SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, REM-04, DI-02, MIG-02, VER-05, VER-06, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| `BP-§10.4-W3` | §8.1 | BP | WORK | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-IDEM, H-SCHED, H-TZ | ARC-01, SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-02, REM-03, REM-04, RUL-06, DI-02, AUD-01, MIG-02, VER-05, VER-06, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| `BP-§10.4-W4` | §8.2 | BP | WORK | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-DTX, H-FIN, H-PAR, H-PRIV, H-SCHED, H-SEC | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-11, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, VER-10, HOLD-01, HOLD-04, HOLD-07, HOLD-PAR |
| `BP-§10.4-W5` | §8.5 | BP | WORK | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-D13, H-D14, H-ISO, H-LVB, H-MIG, H-PAR, H-PRIV, H-SCHED, H-TZ, H-TZC | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-03, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-02, TZ-03, TZ-04, TZ-05, TZ-06, TZ-07, TZ-08, TZ-09, TZ-10, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, DI-07, FIN-02, FIN-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-06, MIG-07, VER-02, VER-05, VER-07, VER-08, VER-09, VER-10, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `BP-§10.4-W6` | §8.6 | BP | WORK | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | ARC-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `BP-§10.4-W7` | §8.6 | BP | WORK | DEPENDENCY-HELD | M | H-AI, H-D12, H-RO, H-SEC | ARC-01, SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-08, AUTHZ-10, SCH-07, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01 |
| `BP-§10.4-W8` | §8.6 | BP | WORK | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-D14, H-PROV, H-RO | ARC-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `BP-§10.4-W9` | §8.2 | BP | WORK | DEPENDENCY-HELD | H | H-AI, H-BIRTH, H-D12, H-D13, H-DTX, H-FIN, H-PAR, H-PRIV, H-SEC | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, CFO-05, AI-02, AI-04, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| `BP-§10.4-E1` | §8.6 | BP | EXP | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO | AUTHZ-10, REM-05, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, UX-01, VER-04, VER-10, HOLD-01, HOLD-02 |
| `BP-§10.4-E2` | §8.5 | BP | EXP | DEPENDENCY-HELD | M | H-D12, H-D13, H-D14, H-PAR, H-SCHED | SCH-02, SCH-03, SCH-04, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, FIN-02, FIN-03, UX-01, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| `BP-§10.4-E3` | §8.6 | BP | EXP | DEPENDENCY-HELD | M | H-AI, H-D12, H-D13, H-RO, H-SEC | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-05, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-03, AI-04, UX-01, VER-04, VER-10, HOLD-01, HOLD-02 |
| `BP-§10.4-A1` | §8.8 | BP | FRV | DEPENDENCY-HELD | H | H-D12, H-D13, H-SCHED, H-SEC, H-TZ | ARC-04, SEC-03, AUTHZ-01, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-05, REM-07, NTF-05, VER-07, VER-10, NG-02, HOLD-01, HOLD-02, HOLD-07 |
| `BP-§10.4-A2` | §8.8 | BP | FRV | DEPENDENCY-HELD | H | H-D12, H-D13, H-DTX, H-FIN, H-SCHED, H-SEC | ARC-04, SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, REM-03, REM-06, RUL-01, RUL-04, RUL-05, NTF-05, FIN-01, FIN-03, FIN-05, FIN-06, VER-10, NG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-07 |
| `BP-§10.4-B1` | §8.8 | BP | FRV | DEPENDENCY-HELD | H | H-AI, H-D12, H-D13, H-D14, H-FIN, H-PROV, H-SEC | ARC-04, SEC-03, AUTHZ-01, AUTHZ-09, AUTHZ-10, AUTHZ-11, REM-05, FIN-01, FIN-02, FIN-03, FIN-04, FIN-06, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-10, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| `BP-§10.4-B2` | §8.8 | BP | FRV | DEPENDENCY-HELD | H | H-D12, H-D13, H-SEC | ARC-04, SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, RUL-01, VER-01, VER-10, HOLD-01, HOLD-02 |
| `BP-§10.4-B3` | §8.8 | BP | FRV | DEPENDENCY-HELD | H | H-D12, H-D13, H-RO | ARC-04, REM-08, CFO-02, CFO-03, VER-04, VER-10, HOLD-01, HOLD-02 |
| `BP-§10.4-X` | §8.8 | BP | EXP | FOLLOW-UP | M | H-PAR | ARC-04, CFO-07, UX-01, VER-10, HOLD-PAR |
| `BP-§6.2` | §8.2 | BP | RULE | DEPENDENCY-HELD | H | H-BIRTH, H-D12, H-DTX, H-FIN, H-PAR, H-PRIV, H-SEC | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, REM-01, RUL-01, RUL-02, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, MIG-02, HOLD-01, HOLD-04, HOLD-PAR |
| `BP-§6.5` | §8.1 | BP | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-SCHED | ARC-01, SEC-01, SEC-02, SEC-04, TZ-05, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-02, HOLD-01, HOLD-02, HOLD-07 |
| `BP-§8` | §8.8 | BP | RULE | DEPENDENCY-HELD | M | H-D13, H-NTF | ARC-04, REM-08, NTF-02, NTF-05, NG-02, HOLD-02, HOLD-08 |
| `BP-§11-4` | §8.1 | BP | RULE | DEPENDENCY-HELD | M | H-BIRTH, H-D12, H-D13, H-FIN, H-SCHED, H-SEC | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, TZ-05, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, FIN-01, FIN-03, FIN-04, MIG-02, HOLD-01, HOLD-02, HOLD-07 |
| `BP-§13` | §8.8 | BP | RULE | DESIGN ACCEPTED — EVIDENCE HOLD | L | H-EVID, H-PAR | ARC-04, REM-04, UX-01, VER-11, HOLD-PAR |

Requirement IDs in the last column omit the `EIS15-` prefix.

### 29.3 EIS requirement to FCTM rows

Rows are listed when 25 or fewer; larger sets are defined by the Section 29.1 selection rule and are exactly the rows citing the requirement in Section 29.2.

| Requirement | Section | FCTM rows | Rows (or basis) |
|---|---|---|---|
| `EIS15-ARC-01` | 6 | 103 | selection rule; see Section 29.2 |
| `EIS15-ARC-02` | 6 | 39 | selection rule; see Section 29.2 |
| `EIS15-ARC-03` | 6 | 8 | `22-§27-1`, `22-§27-2`, `22-§27-3`, `22-§27-4`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§29-14` |
| `EIS15-ARC-04` | 6 | 34 | selection rule; see Section 29.2 |
| `EIS15-SEC-01` | 7 | 265 | selection rule; see Section 29.2 |
| `EIS15-SEC-02` | 7 | 265 | selection rule; see Section 29.2 |
| `EIS15-SEC-03` | 7 | 329 | selection rule; see Section 29.2 |
| `EIS15-SEC-04` | 7 | 269 | selection rule; see Section 29.2 |
| `EIS15-SEC-05` | 7 | 134 | selection rule; see Section 29.2 |
| `EIS15-SEC-06` | 7 | 12 | `2-§14-8`, `2-§23-2`, `2-§24-8`, `4-§6-12`, `4-§10-6`, `4-§14-1`, `11-§8-8`, `11-§15-1`, `22-§23-3`, `10-§11-4`, `12-§4-2`, `12-§4-3` |
| `EIS15-AUTHZ-01` | 8 | 235 | selection rule; see Section 29.2 |
| `EIS15-AUTHZ-02` | 8 | 39 | selection rule; see Section 29.2 |
| `EIS15-AUTHZ-03` | 8 | 6 | `4-§2-5`, `4-§13-5`, `4-§16-1`, `11-§4-5`, `11-§18-10`, `BP-§10.4-W5` |
| `EIS15-AUTHZ-04` | 8 | 29 | selection rule; see Section 29.2 |
| `EIS15-AUTHZ-05` | 8 | 30 | selection rule; see Section 29.2 |
| `EIS15-AUTHZ-06` | 8 | 14 | `2-§24-2`, `2-§29-6`, `4-§10-5`, `4-§13-6`, `11-§10-7`, `11-§11-11`, `11-§16-2`, `11-§16-6`, `11-§18-3`, `11-§18-6`, `11-§18-7`, `11-§22-9`, `22-§18-11`, `22-§29-7` |
| `EIS15-AUTHZ-07` | 8 | 2 | `11-§17-2`, `22-§12-1` |
| `EIS15-AUTHZ-08` | 8 | 30 | selection rule; see Section 29.2 |
| `EIS15-AUTHZ-09` | 8 | 38 | selection rule; see Section 29.2 |
| `EIS15-AUTHZ-10` | 8 | 294 | selection rule; see Section 29.2 |
| `EIS15-AUTHZ-11` | 8 | 227 | selection rule; see Section 29.2 |
| `EIS15-PRIV-01` | 9 | 169 | selection rule; see Section 29.2 |
| `EIS15-PRIV-02` | 9 | 169 | selection rule; see Section 29.2 |
| `EIS15-PRIV-03` | 9 | 114 | selection rule; see Section 29.2 |
| `EIS15-PRIV-04` | 9 | 7 | `11-§3-4`, `11-§11-15`, `11-§12-3`, `11-§21-2`, `11-§23-3`, `22-§11-8`, `22-§18-7` |
| `EIS15-TZ-01` | 10 | 57 | selection rule; see Section 29.2 |
| `EIS15-TZ-02` | 10 | 6 | `4-§2-5`, `4-§13-5`, `4-§16-1`, `11-§4-5`, `11-§18-10`, `BP-§10.4-W5` |
| `EIS15-TZ-03` | 10 | 6 | `4-§2-5`, `4-§13-5`, `4-§16-1`, `11-§4-5`, `11-§18-10`, `BP-§10.4-W5` |
| `EIS15-TZ-04` | 10 | 57 | selection rule; see Section 29.2 |
| `EIS15-TZ-05` | 10 | 17 | `4-§2-5`, `4-§13-5`, `4-§16-1`, `11-§4-4`, `11-§4-5`, `11-§4-11`, `11-§15-2`, `11-§18-1`, `11-§18-10`, `11-§21-4`, `11-§22-1`, `11-§22-9`, `11-§23-5`, `9-§17-5`, `BP-§10.4-W5`, `BP-§6.5`, `BP-§11-4` |
| `EIS15-TZ-06` | 10 | 6 | `4-§2-5`, `4-§13-5`, `4-§16-1`, `11-§4-5`, `11-§18-10`, `BP-§10.4-W5` |
| `EIS15-TZ-07` | 10 | 57 | selection rule; see Section 29.2 |
| `EIS15-TZ-08` | 10 | 6 | `4-§2-5`, `4-§13-5`, `4-§16-1`, `11-§4-5`, `11-§18-10`, `BP-§10.4-W5` |
| `EIS15-TZ-09` | 10 | 57 | selection rule; see Section 29.2 |
| `EIS15-TZ-10` | 10 | 6 | `4-§2-5`, `4-§13-5`, `4-§16-1`, `11-§4-5`, `11-§18-10`, `BP-§10.4-W5` |
| `EIS15-SCH-01` | 11 | 13 | `4-§2-1`, `4-§2-2`, `4-§2-3`, `4-§3-1`, `4-§4-1`, `4-§5-1`, `4-§5-10`, `4-§16-1`, `4-§16-2`, `4-§16-3`, `11-§23-5`, `3-§14-1`, `BP-§10.4-W5` |
| `EIS15-SCH-02` | 11 | 287 | selection rule; see Section 29.2 |
| `EIS15-SCH-03` | 11 | 268 | selection rule; see Section 29.2 |
| `EIS15-SCH-04` | 11 | 268 | selection rule; see Section 29.2 |
| `EIS15-SCH-05` | 11 | 59 | selection rule; see Section 29.2 |
| `EIS15-SCH-06` | 11 | 59 | selection rule; see Section 29.2 |
| `EIS15-SCH-07` | 11 | 24 | `2-§4-6`, `2-§7-2`, `2-§24-9`, `4-§13-3`, `4-§13-7`, `4-§16-5`, `11-§7-3`, `11-§11-14`, `11-§14-3`, `11-§16-5`, `11-§18-5`, `11-§22-10`, `11-§22-12`, `22-§12-5`, `22-§18-3`, `22-§18-10`, `22-§19-1`, `22-§19-2`, `22-§22-3`, `22-§29-8`, `22-§29-10`, `24-§12-4`, `10-§9-2`, `BP-§10.4-W7` |
| `EIS15-SCH-08` | 11 | 110 | selection rule; see Section 29.2 |
| `EIS15-SCH-09` | 11 | 30 | selection rule; see Section 29.2 |
| `EIS15-SCH-10` | 11 | 268 | selection rule; see Section 29.2 |
| `EIS15-SCH-11` | 11 | 7 | `2-§4-9`, `2-§10-7`, `2-§12-14`, `2-§17-4`, `2-§21-3`, `22-§18-9`, `22-§19-5` |
| `EIS15-REM-01` | 12 | 163 | selection rule; see Section 29.2 |
| `EIS15-REM-02` | 12 | 7 | `11-§4-6`, `11-§7-1`, `11-§7-2`, `11-§18-9`, `11-§22-3`, `24-§13-1`, `BP-§10.4-W3` |
| `EIS15-REM-03` | 12 | 138 | selection rule; see Section 29.2 |
| `EIS15-REM-04` | 12 | 27 | selection rule; see Section 29.2 |
| `EIS15-REM-05` | 12 | 65 | selection rule; see Section 29.2 |
| `EIS15-REM-06` | 12 | 7 | `4-§3-4`, `11-§4-4`, `11-§4-12`, `11-§21-4`, `11-§22-6`, `10-§5-7`, `BP-§10.4-A2` |
| `EIS15-REM-07` | 12 | 72 | selection rule; see Section 29.2 |
| `EIS15-REM-08` | 12 | 14 | `4-§5-7`, `4-§10-8`, `11-§3-3`, `11-§9-1`, `11-§9-2`, `11-§9-3`, `11-§9-4`, `11-§9-5`, `11-§9-6`, `11-§9-7`, `11-§10-2`, `11-§21-4`, `BP-§10.4-B3`, `BP-§8` |
| `EIS15-RUL-01` | 13 | 59 | selection rule; see Section 29.2 |
| `EIS15-RUL-02` | 13 | 41 | selection rule; see Section 29.2 |
| `EIS15-RUL-03` | 13 | 6 | `11-§11-11`, `11-§11-15`, `11-§18-6`, `11-§18-7`, `11-§22-8`, `11-§22-9` |
| `EIS15-RUL-04` | 13 | 37 | selection rule; see Section 29.2 |
| `EIS15-RUL-05` | 13 | 35 | selection rule; see Section 29.2 |
| `EIS15-RUL-06` | 13 | 17 | `2-§3-5`, `2-§11-11`, `2-§29-7`, `4-§2-4`, `11-§3-8`, `11-§4-10`, `11-§10-11`, `11-§11-9`, `11-§11-12`, `11-§11-13`, `11-§11-14`, `11-§16-4`, `11-§19-4`, `11-§22-3`, `22-§21-6`, `24-§13-1`, `BP-§10.4-W3` |
| `EIS15-NTF-01` | 14 | 26 | selection rule; see Section 29.2 |
| `EIS15-NTF-02` | 14 | 54 | selection rule; see Section 29.2 |
| `EIS15-NTF-03` | 14 | 13 | `2-§3-9`, `2-§22-12`, `4-§15-3`, `11-§13-4`, `11-§17-2`, `11-§17-7`, `11-§19-1`, `11-§19-3`, `22-§12-1`, `22-§12-7`, `22-§21-5`, `22-§23-3`, `22-§23-5` |
| `EIS15-NTF-04` | 14 | 28 | selection rule; see Section 29.2 |
| `EIS15-NTF-05` | 14 | 45 | selection rule; see Section 29.2 |
| `EIS15-NTF-06` | 14 | 3 | `22-§12-5`, `22-§12-6`, `22-§12-8` |
| `EIS15-NTF-07` | 14 | 3 | `22-§12-5`, `22-§12-6`, `22-§12-8` |
| `EIS15-NTF-08` | 14 | 9 | `2-§22-12`, `2-§25-27`, `4-§15-3`, `11-§17-7`, `11-§19-1`, `11-§19-3`, `22-§12-7`, `22-§21-5`, `22-§23-2` |
| `EIS15-NTF-09` | 14 | 5 | `11-§18-5`, `11-§18-11`, `22-§12-5`, `22-§29-10`, `22-§29-13` |
| `EIS15-NTF-10` | 14 | 1 | `11-§22-10` |
| `EIS15-DI-01` | 15 | 126 | selection rule; see Section 29.2 |
| `EIS15-DI-02` | 15 | 180 | selection rule; see Section 29.2 |
| `EIS15-DI-03` | 15 | 22 | `2-§5-7`, `2-§11-13`, `2-§22-2`, `2-§29-2`, `2-§29-6`, `4-§2-1`, `4-§2-2`, `4-§2-3`, `4-§12-1`, `4-§12-5`, `4-§13-1`, `4-§13-6`, `4-§16-1`, `4-§16-2`, `4-§16-3`, `4-§16-10`, `4-§17-5`, `11-§4-8`, `22-§18-6`, `22-§22-2`, `24-§16-1`, `BP-§10.4-W5` |
| `EIS15-DI-04` | 15 | 126 | selection rule; see Section 29.2 |
| `EIS15-DI-05` | 15 | 8 | `2-§6-2`, `2-§14-8`, `2-§24-4`, `4-§4-8`, `4-§12-5`, `4-§13-7`, `4-§16-4`, `22-§19-8` |
| `EIS15-DI-06` | 15 | 126 | selection rule; see Section 29.2 |
| `EIS15-DI-07` | 15 | 6 | `4-§2-5`, `4-§13-5`, `4-§16-1`, `11-§4-5`, `11-§18-10`, `BP-§10.4-W5` |
| `EIS15-DI-08` | 15 | 29 | selection rule; see Section 29.2 |
| `EIS15-FIN-01` | 16 | 105 | selection rule; see Section 29.2 |
| `EIS15-FIN-02` | 16 | 298 | selection rule; see Section 29.2 |
| `EIS15-FIN-03` | 16 | 340 | selection rule; see Section 29.2 |
| `EIS15-FIN-04` | 16 | 17 | `2-§3-5`, `2-§5-3`, `2-§5-9`, `2-§5-13`, `2-§11-3`, `2-§12-4`, `2-§25-7`, `4-§3-3`, `4-§4-6`, `4-§5-4`, `4-§6-3`, `4-§10-7`, `11-§4-7`, `11-§8-4`, `22-§11-4`, `BP-§10.4-B1`, `BP-§11-4` |
| `EIS15-FIN-05` | 16 | 33 | selection rule; see Section 29.2 |
| `EIS15-FIN-06` | 16 | 17 | `2-§3-5`, `2-§3-12`, `2-§3-14`, `2-§7-12`, `2-§12-15`, `2-§15-1`, `2-§27-1`, `4-§5-10`, `4-§15-1`, `11-§4-7`, `11-§10-8`, `11-§13-3`, `11-§22-9`, `22-§18-11`, `22-§22-2`, `BP-§10.4-A2`, `BP-§10.4-B1` |
| `EIS15-CFO-01` | 17 | 302 | selection rule; see Section 29.2 |
| `EIS15-CFO-02` | 17 | 306 | selection rule; see Section 29.2 |
| `EIS15-CFO-03` | 17 | 332 | selection rule; see Section 29.2 |
| `EIS15-CFO-04` | 17 | 42 | selection rule; see Section 29.2 |
| `EIS15-CFO-05` | 17 | 291 | selection rule; see Section 29.2 |
| `EIS15-CFO-06` | 17 | 12 | `2-§2-1`, `2-§2-2`, `2-§2-6`, `2-§2-7`, `2-§8-12`, `2-§9-6`, `2-§9-7`, `2-§25-16`, `4-§9-7`, `4-§15-2`, `4-§16-11`, `11-§3-1` |
| `EIS15-CFO-07` | 17 | 26 | selection rule; see Section 29.2 |
| `EIS15-AI-01` | 17 | 200 | selection rule; see Section 29.2 |
| `EIS15-AI-02` | 17 | 284 | selection rule; see Section 29.2 |
| `EIS15-AI-03` | 17 | 216 | selection rule; see Section 29.2 |
| `EIS15-AI-04` | 17 | 283 | selection rule; see Section 29.2 |
| `EIS15-AI-05` | 17 | 206 | selection rule; see Section 29.2 |
| `EIS15-AUD-01` | 18 | 20 | `2-§3-5`, `2-§11-11`, `2-§26-10`, `2-§29-7`, `4-§2-4`, `11-§3-8`, `11-§4-10`, `11-§10-11`, `11-§11-9`, `11-§11-12`, `11-§11-13`, `11-§11-14`, `11-§16-4`, `11-§19-4`, `11-§20-7`, `11-§22-3`, `22-§21-6`, `22-§29-12`, `24-§13-1`, `BP-§10.4-W3` |
| `EIS15-AUD-02` | 18 | 23 | `2-§7-3`, `2-§8-16`, `2-§19-8`, `4-§1-3`, `4-§2-4`, `4-§16-8`, `11-§3-4`, `11-§3-6`, `11-§3-8`, `11-§10-11`, `11-§11-9`, `11-§11-15`, `11-§12-3`, `11-§13-2`, `11-§16-4`, `11-§19-4`, `11-§20-7`, `11-§22-7`, `22-§11-8`, `22-§18-11`, `22-§29-12`, `24-§16-7`, `10-§23-4` |
| `EIS15-AUD-03` | 18 | 6 | `2-§6-3`, `2-§8-15`, `2-§12-7`, `2-§21-3`, `2-§24-3`, `2-§29-7` |
| `EIS15-RET-01` | 19 | 1 | `22-§18-4` |
| `EIS15-RET-02` | 19 | 8 | `2-§22-12`, `4-§15-3`, `11-§17-7`, `11-§19-1`, `11-§19-3`, `22-§11-1`, `22-§12-7`, `22-§21-5` |
| `EIS15-FAIL-01` | 20 | 19 | `2-§6-2`, `2-§14-8`, `2-§23-7`, `2-§24-4`, `2-§29-12`, `4-§3-10`, `4-§12-5`, `11-§16-5`, `11-§18-11`, `11-§18-12`, `11-§21-6`, `11-§22-12`, `22-§18-10`, `22-§19-8`, `22-§19-6`, `22-§19-7`, `22-§27-8`, `22-§29-10`, `22-§29-13` |
| `EIS15-FAIL-02` | 20 | 6 | `11-§18-8`, `11-§18-12`, `22-§19-1`, `22-§19-2`, `22-§19-3`, `22-§19-4` |
| `EIS15-OPS-01` | 20 | 3 | `2-§10-7`, `22-§18-9`, `22-§19-5` |
| `EIS15-OPS-02` | 20 | 20 | `2-§22-1`, `2-§22-8`, `2-§22-12`, `2-§23-6`, `2-§25-28`, `2-§25-29`, `2-§25-30`, `2-§29-5`, `2-§29-7`, `2-§29-9`, `11-§3-8`, `11-§17-7`, `22-§12-7`, `22-§21-1`, `22-§21-2`, `22-§21-3`, `22-§21-4`, `22-§21-5`, `22-§21-6`, `22-§21-7` |
| `EIS15-UX-01` | 21 | 17 | `2-§2-9`, `2-§4-1`, `2-§4-2`, `2-§8-9`, `2-§22-1`, `4-§1-2`, `4-§8-3`, `22-§21-1`, `22-§22-1`, `24-§12-1`, `24-§27-3`, `BP-§10.4-O`, `BP-§10.4-E1`, `BP-§10.4-E2`, `BP-§10.4-E3`, `BP-§10.4-X`, `BP-§13` |
| `EIS15-UX-02` | 21 | 20 | `2-§2-4`, `2-§7-3`, `2-§19-7`, `2-§20-2`, `2-§20-3`, `2-§20-4`, `2-§26-5`, `4-§9-7`, `4-§14-1`, `4-§14-2`, `4-§16-9`, `11-§15-1`, `11-§17-3`, `11-§20-4`, `11-§22-1`, `22-§12-2`, `9-§12-2`, `9-§12-3`, `9-§12-6`, `9-§17-6` |
| `EIS15-UX-03` | 21 | 3 | `11-§17-8`, `11-§22-10`, `22-§19-3` |
| `EIS15-MIG-01` | 22 | 62 | selection rule; see Section 29.2 |
| `EIS15-MIG-02` | 22 | 265 | selection rule; see Section 29.2 |
| `EIS15-MIG-03` | 22 | 62 | selection rule; see Section 29.2 |
| `EIS15-MIG-04` | 22 | 62 | selection rule; see Section 29.2 |
| `EIS15-MIG-05` | 22 | 3 | `22-§12-5`, `22-§12-6`, `22-§12-8` |
| `EIS15-MIG-06` | 22 | 6 | `4-§2-5`, `4-§13-5`, `4-§16-1`, `11-§4-5`, `11-§18-10`, `BP-§10.4-W5` |
| `EIS15-MIG-07` | 22 | 62 | selection rule; see Section 29.2 |
| `EIS15-CI-01` | 23 | 3 | `22-§22-2`, `22-§22-3`, `22-§22-6` |
| `EIS15-VER-01` | 24 | 31 | selection rule; see Section 29.2 |
| `EIS15-VER-02` | 24 | 133 | selection rule; see Section 29.2 |
| `EIS15-VER-03` | 24 | 4 | `11-§11-11`, `11-§18-6`, `11-§18-7`, `11-§22-9` |
| `EIS15-VER-04` | 24 | 306 | selection rule; see Section 29.2 |
| `EIS15-VER-05` | 24 | 46 | selection rule; see Section 29.2 |
| `EIS15-VER-06` | 24 | 59 | selection rule; see Section 29.2 |
| `EIS15-VER-07` | 24 | 57 | selection rule; see Section 29.2 |
| `EIS15-VER-08` | 24 | 11 | `4-§2-1`, `4-§2-2`, `4-§2-3`, `4-§13-1`, `4-§16-1`, `4-§16-2`, `4-§16-3`, `22-§12-5`, `22-§12-6`, `22-§12-8`, `BP-§10.4-W5` |
| `EIS15-VER-09` | 24 | 62 | selection rule; see Section 29.2 |
| `EIS15-VER-10` | 24 | 120 | selection rule; see Section 29.2 |
| `EIS15-VER-11` | 24 | 11 | `11-§21-6`, `22-§17-1`, `22-§22-4`, `22-§22-5`, `22-§22-6`, `22-§27-7`, `22-§27-8`, `22-§28-8`, `22-§28-10`, `BP-§9-4`, `BP-§13` |
| `EIS15-VER-LEG` | 24 | 13 | `4-§2-1`, `4-§2-2`, `4-§2-3`, `4-§2-5`, `4-§4-1`, `4-§5-1`, `4-§16-1`, `4-§16-2`, `4-§16-3`, `11-§23-5`, `22-§18-1`, `3-§14-1`, `BP-§10.4-W5` |
| `EIS15-CRIT-01` | 25 | 1 | `4-§16-1` |
| `EIS15-CRIT-02` | 25 | 1 | `24-§16-1` |
| `EIS15-CRIT-03` | 25 | 1 | `22-§23-2` |
| `EIS15-CRIT-04` | 25 | 1 | `22-§28-9` |
| `EIS15-CRIT-05` | 25 | 1 | `22-§29-3` |
| `EIS15-NG-01` | 26 | 111 | selection rule; see Section 29.2 |
| `EIS15-NG-02` | 26 | 26 | selection rule; see Section 29.2 |
| `EIS15-HOLD-01` | 27 | 548 | selection rule; see Section 29.2 |
| `EIS15-HOLD-02` | 27 | 534 | selection rule; see Section 29.2 |
| `EIS15-HOLD-03` | 27 | 298 | selection rule; see Section 29.2 |
| `EIS15-HOLD-04` | 27 | 33 | selection rule; see Section 29.2 |
| `EIS15-HOLD-05` | 27 | 61 | selection rule; see Section 29.2 |
| `EIS15-HOLD-06` | 27 | 200 | selection rule; see Section 29.2 |
| `EIS15-HOLD-07` | 27 | 268 | selection rule; see Section 29.2 |
| `EIS15-HOLD-08` | 27 | 54 | selection rule; see Section 29.2 |
| `EIS15-HOLD-PAR` | 27 | 235 | selection rule; see Section 29.2 |
| `EIS15-HOLD-CORR` | 27 | 3 | `22-§12-5`, `22-§12-6`, `22-§12-8` |
| `EIS15-HOLD-ENGQ` | 27 | 11 | `2-§29-1`, `2-§29-2`, `2-§29-3`, `2-§29-4`, `2-§29-5`, `2-§29-6`, `2-§29-7`, `2-§29-8`, `2-§29-9`, `2-§29-10`, `2-§29-11` |
| `EIS15-HOLD-ENV` | 27 | 0 | non-product: Non-product governance requirement: environment access gate for Section 24; applies to every row through `EIS15-VER-*`. |

### 29.4 Governance-allocated row outside the 694 (MC-80; MC-84 P1)

| FCTM row | Canonical FCTM status (unchanged) | Source assignment (unchanged) | MC-80 allocation | EIS requirements | IN SCOPE source rows also realized |
|---|---|---|---|---|---|
| `20-§23-10` | ASSIGNED TO LATER MISSION — HELD: ALLOCATION UNRESOLVED (U-3) | SB-P-1.19/SB-P-1.15 (inherited verbatim) | SB-P-1.15: technical schedule enforcement, obsolete 06:00/09:15 prevention and EIS regression contract. SB-P-1.19: onboarding and first-value acceptance. Joint traceable acceptance; no duplicate scheduler | `EIS15-VER-LEG`, `EIS15-SCH-01`, `EIS15-DI-01` | `4-§2-1`, `4-§2-2`, `4-§2-3`, `4-§2-5`, `4-§4-1`, `4-§5-1`, `4-§16-1`, `4-§16-2`, `4-§16-3`, `11-§23-5`, `22-§18-1`, `3-§14-1`, `BP-§10.4-W5` |

This row is not counted in the 694, is not given an `IN SCOPE` disposition, and is not double-counted.

### 29.5 Specialist finding coverage (44)

| Finding | Title | Stage 7 v0.3 disposition | EIS requirements |
|---|---|---|---|
| SEC15-S7-01 | Birth-safe database permissions | Incorporated as design; chronology corrected | SEC-01, SEC-02, SEC-04, CRIT-03 |
| SEC15-S7-02 | Privileged execution authority | Incorporated as design | SEC-04, AUTHZ-01, AUTHZ-06, PRIV-01, PRIV-02, RUL-02, AUD-01, AUD-02 |
| SEC15-S7-03 | Cross-business effective-access matrix | Incorporated as design | SEC-03, SEC-05, SEC-06, AUTHZ-04, AUTHZ-05, AUTHZ-08, PRIV-03, REM-01, OPS-02, VER-01, VER-02, CRIT-03, CRIT-05 |
| SEC15-S7-04 | Ask CFO read-only enforcement | Direction accepted; evidence held | CFO-02, CFO-03, VER-04, CRIT-04 |
| SEC15-S7-05 | Former-Owner and current-recipient eligibility | Direction accepted; evidence held | AUTHZ-07, AUTHZ-11, NTF-03, VER-01 |
| SP2-01 | FPDR-03 reconciliation | Restored by Founder decision FPDR-03 | TZ-04, SCH-09, DI-02, DI-03, DI-04, VER-08 |
| SP2-02 | Logical work versus attempt identity; claim, lease and fencing | Incorporated as design | TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, SCH-11, REM-03, DI-02, OPS-01, VER-05, CRIT-01, HOLD-07 |
| SP2-03 | Crash and retry unknown-outcome idempotency | Incorporated as design | SCH-05, SCH-06, SCH-07, FAIL-02, VER-06 |
| SP2-04 | Standing-rule current-authority execution | Incorporated as design | AUTHZ-06, PRIV-04, RUL-01, RUL-02, RUL-03, RUL-06, VER-03 |
| SP2-05 | Business-local named slots and timezone changes | Incorporated as design | TZ-01, TZ-03, TZ-04, TZ-06, TZ-07, TZ-09, TZ-10, REM-02, REM-03, DI-01, VER-05, VER-07, CRIT-01 |
| SP2-06 | DC-03 existing-merchant timezone default | Restored by Founder decision MC-74 and MC-75 D2/D3 | AUTHZ-03, TZ-01, TZ-02, TZ-03, TZ-05, TZ-08, TZ-10, DI-07, AUD-01, MIG-06, VER-07, CRIT-01 |
| SP2-07 | Cross-business scheduler isolation and stale-worker denial | Incorporated as design | ARC-01, SEC-05, PRIV-03, TZ-01, TZ-09, SCH-04, SCH-08, SCH-10, FAIL-01, VER-02, VER-07 |
| SP2-08 | Fixed schedule integrity and timing regression | Direction accepted; evidence held | TZ-07, SCH-01, DI-01, VER-LEG |
| FIN15-S7-01 | Single governed financial write path | Direction accepted; evidence held | REM-08, RUL-04, RUL-05, FIN-05, HOLD-04 |
| FIN15-S7-02 | Scheduler-to-financial-command idempotency and unknown-outcome recovery | Incorporated as design | SCH-05, SCH-06, RUL-05, VER-06 |
| FIN15-S7-03 | Current-authority standing automation | Direction accepted; evidence held | AUTHZ-06, PRIV-04, RUL-01, RUL-02, VER-03 |
| FIN15-S7-04 | Financial evidence integrity | Direction accepted; evidence held | AUTHZ-09, DI-06, FIN-01, FIN-02, FIN-03, CFO-04, CRIT-02 |
| FIN15-S7-05 | Credit-method sale is not an authoritative customer balance | Direction accepted; evidence held | REM-07, FIN-04 |
| FIN15-S7-06 | FPDR-02 prospective-only correction-notification reconciliation | Restored by Founder decision FPDR-02 | NTF-06, MIG-05, VER-08 |
| FIN15-S7-07 | Financial permission boundaries | Direction accepted; evidence held | AUTHZ-01, AUTHZ-08, AUTHZ-09, FIN-01, FIN-06 |
| FIN15-S7-08 | Ask CFO strictly read-only and advisory | Direction accepted; evidence held | FIN-05, CFO-02 |
| AI15-S7-01 | FPDR-03 restoration | Restored by Founder decision FPDR-03 | SCH-09, DI-04 |
| AI15-S7-02 | Prompt-injection containment | Incorporated as design | AUTHZ-10, AI-02, VER-04, CRIT-04 |
| AI15-S7-03 | Revocation-safe AI context | Incorporated as design | AUTHZ-11, AI-03, RET-02, HOLD-06 |
| AI15-S7-04 | Zero-write Ask CFO | Incorporated as design | AUTHZ-10, PRIV-02, CFO-02, CFO-03, CFO-07, VER-04 |
| AI15-S7-05 | Grounding and provenance | Incorporated as design | REM-05, DI-03, DI-05, DI-08, FIN-03, CFO-01, CFO-04, CFO-05, AI-01, AI-04, AI-05, AUD-03, CRIT-02 |
| AI15-S7-06 | Human dignity | Direction accepted; evidence held | CFO-06 |
| AI15-S7-07 | Manager delegation | Direction accepted; evidence held (DC-06) | AUTHZ-02, AUTHZ-04, AUTHZ-08, AUTHZ-10, VER-01 |
| MIG15-S7-01 | Historical correction notification migration | Restored by Founder decision FPDR-02 | NTF-06, MIG-05 |
| MIG15-S7-02 | Existing-business timezone default and DC-03 | Restored by Founder decision MC-74 and MC-75 D2/D3 | TZ-01, TZ-05, MIG-06, VER-07 |
| MIG15-S7-03 | Atomic birth-safe schema security | Incorporated as design | SEC-01, MIG-02 |
| MIG15-S7-04 | Durable logical identities and replay safety | Incorporated as design | SCH-02, SCH-05, REM-02, MIG-02 |
| MIG15-S7-05 | Historical Ledger and audit preservation | Direction accepted; evidence held | TZ-06, TZ-07, FIN-02, HOLD-03 |
| MIG15-S7-06 | Rollback, partial migration and backup/PITR restoration | Incorporated as design | RET-01, MIG-03, MIG-04, VER-09 |
| MIG15-S7-07 | Dependency-ordered migration and truthful readiness | Direction accepted; evidence held | ARC-02, ARC-03, MIG-01, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-03 |
| NTF15-01 | Notification request is not delivery proof | Incorporated as design | REM-06, NTF-01, NTF-02, UX-03 |
| NTF15-02 | FPDR-02 prospective-only historical correction safety | Restored by Founder decision FPDR-02 | NTF-06, NTF-07, VER-08, HOLD-CORR |
| NTF15-03 | Recipient authorization at sensitive display and dispatch | Incorporated as design | AUTHZ-07, AUTHZ-11, NTF-03 |
| NTF15-04 | Durable logical request, worker and provider identities | Incorporated as design | SCH-05, NTF-04, VER-06 |
| NTF15-05 | No outbound permission from native readiness | Incorporated as design | ARC-04, NTF-05, HOLD-08 |
| NTF15-06 | FPDR-03 latest valid native briefing, no late outbound inference | Restored by Founder decision FPDR-03 | SCH-09, DI-03, DI-04, VER-08 |
| NTF15-07 | Minimized, authenticated and isolated notification evidence | Incorporated as design | SEC-05, NTF-08, RET-02, CRIT-05 |
| NTF15-08 | Unknown outcomes, bounded recovery, dead letter and restore safety | Incorporated as design | SCH-07, NTF-09, FAIL-02, MIG-04 |
| NTF15-09 | Honest and dignified native notification copy | Direction accepted; evidence held | NTF-10, UX-02 |

## 30. Trigger Screen and Open Engineering Questions

| Trigger | Result |
|---|---|
| T1 | Decided by FPDR-02; realized by `EIS15-NTF-06`, `EIS15-MIG-05` |
| T3 | Not triggered. No requirement adds product behaviour; non-product requirements carry recorded reasons (Section 29.1). |
| T6 | Not triggered. DC-06 granularity is a proposed security model only; any merchant-facing grant behaviour beyond `EIS15-AUTHZ-04` routes to Founder T6/T3 before use. |
| T7 | Not triggered. No FCTM row, disposition or assignment changes; `20-§23-10` handled per MC-84 P1. |
| T8 | Not triggered. Every row is specifiable; `DEPENDENCY-HELD` rows wait for upstream foundations. Reopeners: birth-safe least privilege unattainable; a second write path unavoidable; read-only unenforceable below the prompt layer; per-business isolation unattainable for scheduled work. |

**Engineering questions:**

| ID | Question | Status |
|---|---|---|
| EQ15-01 | Scheduler runtime (`pg_cron`, Cloudflare cron triggers or other) | Open; selection and authorization gated (`EIS15-SCH-10`); correctness does not depend on the choice |
| EQ15-02 | Timezone change boundary, concurrency and daylight-saving rules | Answered: `EIS15-TZ-03`, `EIS15-TZ-06`, `EIS15-TZ-07` |
| EQ15-03 | Location-evidence sources for suggestions | Answered: suggestion records its source and is never authoritative (`EIS15-TZ-02`); reliability ranking is advisory UX only |
| EQ15-04 | Option C exception record | Answered: `EIS15-TZ-08` |
| EQ15-05 | Restore reconciliation | Answered: `EIS15-MIG-04` |
| `2-§29-1` | Analytics/query abstraction | `EIS15-FIN-01`: invoker-mode deterministic functions over the D14 read model |
| `2-§29-2` | Deterministic library versus model orchestration | `EIS15-CFO-04`: deterministic facts; model explains only |
| `2-§29-3` | Safe tool schemas | `EIS15-CFO-03`, `EIS13-TOOL-01`: typed read-only registry |
| `2-§29-4` | Context windowing | `EIS15-AI-03`, `EIS13-CTX-02`/`-03` |
| `2-§29-5` | Caching | `EIS15-OPS-02`: business- and authority-version keyed |
| `2-§29-6` | Source-of-truth timestamps and staleness | `EIS15-DI-03`; no invented staleness cutoff (FPDR-03) |
| `2-§29-7` | Auditability of recommendations | `EIS15-AUD-03` |
| `2-§29-8` | Model routing by complexity | `EIS15-AI-05`: gateway concern (SB-P-1.13); held on provider gate |
| `2-§29-9` | Performance budgets | `EIS15-OPS-02`; numeric budgets set at Stage 12 from Contract 22 §21 without weakening authorization |
| `2-§29-10` | Voice generation provider and fallback | `EIS15-AI-05`; provider held (SB-P-1.13 gate) |
| `2-§29-11` | Manager delegated-intelligence model | `EIS15-AUTHZ-04` — **DC-06 — PROPOSED; STAGE 10 SECURITY REVIEW REQUIRED** |

**Phase 1 boundary.** Stage 10 review and Stage 11 lock are separate decisions. If provider and execution prerequisites remain unmet at Implementation Authorization, Mission Control records **Implementation Authorization: WITHHELD** and **IMPLEMENTATION NOT AUTHORIZED** and follows the partial-suspension pattern.
