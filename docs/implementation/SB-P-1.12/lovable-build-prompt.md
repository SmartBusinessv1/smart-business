# SB-P-1.12 — Lovable Build Prompt

```text
STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED
PRODUCT BLUEPRINT: APPROVED — LOCKED (UNCHANGED)
EIS: APPROVED — LOCKED (UNCHANGED)
IMPLEMENTATION PACKAGE: STAGE 12 DRAFT — NOT APPROVED, NOT LOCKED
IMPLEMENTATION: NOT AUTHORIZED
SCHEMA / SQL / MIGRATIONS: NOT AUTHORIZED
PRODUCTION / PROVIDER MUTATION: NOT AUTHORIZED
```

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.12 |
| Mission Name | Authority, Identity & Product Surface Foundation |
| Document | Builder Prompt (Source 18 Stage 12; package template Phase B) |
| Version | 0.1 |
| Status | `DRAFT — MISSION CONTROL REVIEW REQUIRED` |
| Author | Claude Code — initial implementation package owner |
| Builder identity | **Not yet named.** The Implementation Authorization names the builder for each workstream |
| Repository | `SmartBusinessv1/smart-business` |
| Canonical baseline | `main@e6c6aac5395fcffc4693bd53144e310c70657c6f` |
| Date | 2026-10-01 |

## 2. Builder Identity and Artifact Name

Source 18 Section 4.5 retains the artifact path `lovable-build-prompt.md` whatever builder is assigned. The builder is not named here. When the Implementation Authorization names a builder other than Lovable for a workstream, that builder's byline and identity are recorded on this artifact, and nothing here implies Lovable built work it did not. No actor may build from this prompt until the package is approved and locked at Stage 13 and an Implementation Authorization is recorded.

## 3. Read Before Building

Read, in this order, and treat each as binding:

1. `AGENTS.md` and `CLAUDE.md`;
2. the locked Product Blueprint, blob `77d52096c020668311b039721a4de9248ddd460e`;
3. the locked EIS, blob `476b00e061772648c5547161328e48e3f5ab0991`;
4. Founder Decision Record 09;
5. the Engineering Contract (`engineering-contract.md`) once locked;
6. this Build Prompt once locked;
7. the Verification Checklist (`verification-checklist.md`) once locked;
8. the Implementation Authorization and any migration mission for the workstream;
9. `docs/migration/README.md` before anything that touches `supabase/migrations/**`.

This prompt references the Engineering Contract and does not restate or alter its obligations. Where they differ, the Engineering Contract prevails, and the builder pauses (Section 10).

## 4. What This Prompt Does Not Authorize

This draft authorizes no build. It does not authorize code, schema, SQL, migrations, Lovable execution or publication, provider or production mutation, identity-deletion runtime, unblocking `22-§20-2`, closing ESC-1, claiming G-6/T4 evidence, or SB-P-1.13 consumption.

## 5. Repository Scope and Paths

| Path | Treatment |
|---|---|
| `src/**`, `tests/**` | Candidate implementation paths. Writable only for the workstreams and paths the Implementation Authorization lists |
| `supabase/migrations/**` | Writable only under an explicit migration mission meeting `docs/migration/README.md`; never executed from file presence |
| `docs/implementation/SB-P-1.12/evidence/**` | Evidence only, created when an authorized stage produces evidence |
| `docs/implementation/SB-P-1.12/lovable-build-completion-report.md` | Builder Completion Report, at Stage 16 |
| `docs/phase-1-mission-blueprint/**` (locked Blueprint and EIS) | **Prohibited** |
| `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md` (FCTM) | **Prohibited** |
| `.github/workflows/**`, branch protection, repository settings | **Prohibited** |
| `merge/active/**`, `AGENTS.md`, `CLAUDE.md`, governance sources | **Prohibited** |
| Secrets, environment files, credentials | **Prohibited**; never committed or printed |

## 6. Building Rules

- Work repository-first: inspect existing code, migrations and tests before changing anything, and reuse the SB-P-1.11 executor-role, preview-binding, idempotency and provenance patterns the EIS names.
- Build only the assigned FCTM rows of the authorized workstream, through the Engineering Contract obligations listed for them.
- No redesign, unrelated refactoring, duplicate code, dead code, workarounds, placeholders, bypasses or undocumented assumptions.
- No feature flag, test flag or environment switch that weakens a permission, isolation or denial check.
- Every authority-bearing change ships with its Verification Checklist items: the named negative-path checks and runtime scenarios for its rows.
- Tests follow EIS Section 18.2: fixtures go through product commands; direct table writes only in labelled fault-injection tests.
- Keep the existing suites green at every checkpoint (`EC-TST-04`).
- Record evidence as the package template Sections 12 and 13 require, and update the Builder Completion Report with a status per assigned row.
- Never verify, approve or accept your own work.

## 7. Workstreams

Workstreams are those of EIS Section 19.1. Splitting into workstreams changes no mission assignment. Order (EIS Section 19.2): WS-0 (as authorized), WS-A1, WS-A2 and WS-E, WS-F, WS-D, WS-A3 per family, WS-B (once its evidence exists), WS-C, WS-G. WS-H runs throughout. Cross-cutting obligations apply to every workstream. Deletion design stays design-only.

A row appears under every workstream whose obligations realize it. A workstream builds only its own obligations for that row.

### 7.1 SB-P-1.12/WS-0 — Evidence

| Field | Value |
|---|---|
| Obligations | `EC-ENV-01`, `EC-ENV-02` |
| Depends on | Authorization |
| Migration class | None |
| Verification | Evidence records |
| Rollback and recovery | Not applicable |
| FCTM rows built (3) | `21-§6-4`, `BP-§10.1-7`, `BP-§10.1-8` |

Forbidden in this workstream, in addition to Section 8:

- any write, configuration change or mutation in a provider, test or production project;
- collecting evidence without its own separate authorization;
- stating any production-security conclusion from repository files.

### 7.2 SB-P-1.12/WS-A1 — Identity and membership

| Field | Value |
|---|---|
| Obligations | `EC-ID-01`, `EC-ID-02`, `EC-ID-03`, `EC-ID-04`, `EC-ID-05`, `EC-ID-06` |
| Depends on | EIS lock |
| Migration class | M1, M2 |
| Verification | Backfill reconciliation; role fixtures |
| Rollback and recovery | Additive; drop new objects |
| FCTM rows built (39) | `21-§4-1`, `21-§4-2`, `21-§4-3`, `21-§4-4`, `21-§4-5`, `21-§4-6`, `21-§5-1`, `21-§5-2`, `21-§5-3`, `21-§6-6`, `21-§6-7`, `21-§15-1`, `21-§15-3`, `22-§5-1`, `22-§5-2`, `22-§5-3`, `22-§5-4`, `22-§5-5`, `22-§5-6`, `22-§5-7`, `22-§5-8`, `22-§5-9`, `22-§28-6`, `22-§29-6`, `22-§33-2`, `22-§33-23`, `20-§16-1`, `17-§13-1`, `17-§13-2`, `17-§13-3`, `17-§13-4`, `7-§10-1`, `7-§10-2`, `7-§10-3`, `7-§10-4`, `BP-§10.1-1`, `BP-§10.1-2`, `BP-§10.1-6`, `BP-§10.1-13` |

Forbidden in this workstream, in addition to Section 8:

- any participant-authentication experience (EIS-ID-03 defines none);
- inferring a business from single ownership in any new code;
- dropping the `owner_id` `UNIQUE` constraint before every `maybeSingle()` inference is gone;
- rewriting or reassigning any historical actor value.

### 7.3 SB-P-1.12/WS-A2 — Kernel

| Field | Value |
|---|---|
| Obligations | `EC-KER-01`, `EC-KER-02`, `EC-KER-03`, `EC-KER-04`, `EC-KER-05`, `EC-KER-06`, `EC-KER-07`, `EC-KER-08`, `EC-KER-09`, `EC-AUT-01`, `EC-SUP-01`, `EC-EXT-01`, `EC-EXT-02` |
| Depends on | WS-A1 |
| Migration class | M1, M3 |
| Verification | Kernel DB suite |
| Rollback and recovery | Additive until callers switch |
| FCTM rows built (95) | `21-§4-2`, `21-§4-3`, `21-§5-1`, `21-§5-2`, `21-§5-3`, `21-§5-4`, `21-§5-5`, `21-§5-6`, `21-§5-7`, `21-§5-8`, `21-§5-9`, `21-§5-10`, `21-§7`, `21-§8`, `21-§9`, `21-§10-1`, `21-§10-2`, `21-§10-3`, `21-§10-4`, `21-§10-5`, `21-§10-6`, `21-§11-2`, `21-§12-1`, `21-§12-2`, `21-§12-3`, `21-§12-4`, `21-§12-5`, `21-§13-1`, `21-§13-2`, `21-§13-3`, `21-§14-1`, `21-§14-2`, `21-§14-3`, `21-§14-4`, `21-§14-5`, `21-§14-6`, `21-§14-7`, `21-§15-1`, `21-§15-2`, `21-§15-3`, `21-§15-4`, `21-§15-5`, `21-§16-1`, `21-§16-2`, `21-§17`, `21-§19-7`, `21-§19-8`, `21-§21-3`, `21-§22`, `21-§23-2`, `21-§23-3`, `21-§23-4`, `21-§23-5`, `21-§23-6`, `21-§24-4`, `21-§24-5`, `21-§24-6`, `21-§24-7`, `21-§24-8`, `21-§24-9`, `21-§24-10`, `21-§24-11`, `22-§6-2`, `22-§6-3`, `22-§6-6`, `22-§6-9`, `22-§6-10`, `22-§20-3`, `22-§23-3`, `22-§23-4`, `22-§28-2`, `22-§28-4`, `22-§28-8`, `22-§28-9`, `22-§29-3`, `20-§16-2`, `20-§16-3`, `20-§23-11`, `17-§13-2`, `17-§13-3`, `17-§13-4`, `17-§14-2`, `17-§14-3`, `17-§14-4`, `17-§14-5`, `17-§14-6`, `17-§18-2`, `17-§18-4`, `17-§21-4`, `17-§22-3`, `7-§12`, `BP-§10.1-3`, `BP-§10.1-4`, `BP-§10.1-5`, `BP-§10.1-10` |

Forbidden in this workstream, in addition to Section 8:

- a parallel or feature-local permission check;
- accepting a principal from a request body, client store, token claims beyond the subject, or `service_role` possession;
- a standing platform role that reads merchant data;
- building Employee attendance, leave or task features, participant portals, or the scheduler and channel runtime that later missions own (prove the boundary with labelled harnesses only).

### 7.4 SB-P-1.12/WS-A3 — Enforcement

| Field | Value |
|---|---|
| Obligations | `EC-ISO-01`, `EC-ISO-02`, `EC-ISO-04`, `EC-ISO-05`, `EC-ISO-06`, `EC-ISO-07`, `EC-ISO-08`, `EC-ISO-09` |
| Depends on | WS-A2 |
| Migration class | M3, M4 |
| Verification | Role matrix, isolation and regression suites per family |
| Rollback and recovery | Per-family revert migration held ready; never two authority paths live on one family |
| FCTM rows built (35) | `21-§6-1`, `21-§6-2`, `21-§6-3`, `21-§6-4`, `21-§6-5`, `21-§6-6`, `21-§6-7`, `21-§7`, `21-§11-1`, `21-§11-2`, `21-§15-5`, `21-§21-4`, `21-§23-1`, `21-§24-2`, `21-§24-4`, `22-§5-9`, `22-§6-3`, `22-§6-4`, `22-§6-5`, `22-§6-7`, `22-§6-8`, `22-§21`, `22-§23-1`, `22-§23-2`, `22-§23-5`, `22-§23-6`, `22-§23-7`, `22-§29-3`, `17-§14-1`, `17-§14-7`, `17-§18-1`, `17-§22-9`, `7-§15-12`, `BP-§10.1-6`, `BP-§10.1-7` |

Forbidden in this workstream, in addition to Section 8:

- replacing any policy or function before the source-complete authority-surface inventory exists;
- two authority paths live on one table family;
- blanket function revocation;
- any unbound admin-client path;
- building conversation or AI context features (`SB-P-1.13`, `SB-P-1.20` consume the contract).

### 7.5 SB-P-1.12/WS-B — Effective access

| Field | Value |
|---|---|
| Obligations | `EC-ISO-03` |
| Depends on | WS-0 (G-6 evidence) |
| Migration class | M5 |
| Verification | Access inventory test |
| Rollback and recovery | Re-grant from recorded inventory |
| FCTM rows built (2) | `BP-§10.1-7`, `BP-§10.1-8` |

Forbidden in this workstream, in addition to Section 8:

- starting before separately authorized G-6 evidence exists and is dispositioned;
- removing a separately approved, expressly scoped anonymous workflow;
- claiming remediation is current in production.

### 7.6 SB-P-1.12/WS-C — Product & Price Master

| Field | Value |
|---|---|
| Obligations | `EC-PPM-01`, `EC-PPM-02`, `EC-PPM-03`, `EC-PPM-04`, `EC-PPM-05`, `EC-PPM-06` |
| Depends on | WS-A3 catalog family |
| Migration class | M3, M6 |
| Verification | Disclosure and regression suites |
| Rollback and recovery | Function versions reverted together |
| FCTM rows built (25) | `21-§4-2`, `21-§5-4`, `21-§24-3`, `22-§5-8`, `17-§13-2`, `17-§18-2`, `17-§21-4`, `17-§22-2`, `7-§7`, `7-§9`, `7-§10-1`, `7-§10-2`, `7-§10-3`, `7-§10-4`, `7-§12`, `7-§15-10`, `BP-§10.1-3`, `BP-§10.1-11`, `BP-§10.1-12`, `BP-§10.1-13`, `BP-§7-1`, `BP-§7-2`, `BP-§7-3`, `BP-§7-4`, `BP-§7-5` |

Forbidden in this workstream, in addition to Section 8:

- any margin formula, per-product margin output or aggregate margin semantics (Founder Decision Record 09);
- relying on column grants alone for Reference Cost or margin;
- independent Catalog expansion, deletion or movement of valid data, collapse into Transactions, Inventory ownership of commercial identity, or a competing stock-linked pricing path;
- removing structured management before equivalent contextual access is proven, or breaking `/catalog`, `/catalog/$productId` or `/catalog/import`.

### 7.7 SB-P-1.12/WS-D — Binding and integrity

| Field | Value |
|---|---|
| Obligations | `EC-CNF-01`, `EC-CNF-02`, `EC-CNF-03`, `EC-CNF-04`, `EC-CNF-05`, `EC-CNF-06` |
| Depends on | WS-A2 |
| Migration class | M1, M3 |
| Verification | Concurrency and replay suites |
| Rollback and recovery | Additive |
| FCTM rows built (21) | `21-§17`, `21-§18-1`, `21-§18-2`, `21-§18-3`, `21-§18-4`, `21-§18-5`, `21-§18-6`, `21-§24-8`, `22-§13-1`, `22-§13-2`, `22-§13-3`, `22-§13-4`, `22-§13-5`, `22-§14-7`, `22-§15`, `22-§17`, `22-§19`, `22-§29-7`, `22-§29-8`, `22-§29-10`, `BP-§10.1-5` |

Forbidden in this workstream, in addition to Section 8:

- a separate confirmation, idempotency or serialization mechanism per feature;
- treating `membership_version` or epochs alone as serialization;
- rolling back committed import rows, continuing an import under revoked authority, or duplicating rows on completion.

### 7.8 SB-P-1.12/WS-E — Audit

| Field | Value |
|---|---|
| Obligations | `EC-AUD-01`, `EC-AUD-02`, `EC-AUD-03`, `EC-AUD-04`, `EC-AUD-05`, `EC-UX-01`, `EC-UX-02` |
| Depends on | WS-A1 |
| Migration class | M1, M6 |
| Verification | Audit and denial suites |
| Rollback and recovery | Additive; constraint widening not reversed once non-Owner rows exist |
| FCTM rows built (34) | `21-§19-1`, `21-§19-2`, `21-§19-3`, `21-§19-4`, `21-§19-5`, `21-§19-6`, `21-§19-7`, `21-§19-8`, `21-§20-1`, `21-§20-2`, `21-§20-3`, `21-§20-4`, `21-§20-5`, `21-§21-1`, `21-§21-2`, `21-§21-5`, `21-§23-7`, `21-§24-12`, `22-§6-1`, `22-§14-1`, `22-§14-2`, `22-§14-3`, `22-§14-4`, `22-§14-5`, `22-§14-6`, `22-§14-8`, `22-§14-9`, `22-§16-2`, `22-§28-7`, `22-§29-12`, `17-§14-1`, `17-§14-7`, `17-§16-1`, `17-§22-10a` |

Forbidden in this workstream, in addition to Section 8:

- surveillance data, hidden scoring or accusation in audit or denial handling;
- rewriting existing provenance rows;
- escalating routine denials.

### 7.9 SB-P-1.12/WS-F — History integrity (ESC-1)

| Field | Value |
|---|---|
| Obligations | `EC-ESC-01`, `EC-ESC-02`, `EC-ESC-03`, `EC-ESC-04`, `EC-ESC-05`, `EC-ESC-06`, `EC-ESC-07`, `EC-ESC-08` |
| Depends on | WS-A1 |
| Migration class | M6 |
| Verification | EIS section 18.3 negative paths |
| Rollback and recovery | EIS section 14.4 |
| FCTM rows built (19) | `21-§11-1`, `21-§23-6`, `22-§14-5`, `22-§20-1`, `22-§20-2`, `22-§20-4`, `22-§29-11`, `22-§29-12`, `22-§33-4`, `22-§33-8`, `22-§33-17`, `22-§33-18`, `22-§33-19`, `22-§33-20`, `22-§33-22`, `22-§33-24`, `22-§33-36`, `22-§33-39`, `BP-§10.1-13` |

Forbidden in this workstream, in addition to Section 8:

- identity-deletion runtime;
- claiming ESC-1 closed or `22-§20-2` unblocked;
- physical removal of a business row while retained records or holds reference it;
- a legal-hold state beyond what Mission Control dispositions under PQ-2;
- any provider Auth deletion.

### 7.10 SB-P-1.12/WS-G — First run, invitations, transfer

| Field | Value |
|---|---|
| Obligations | `EC-FRL-01`, `EC-FRL-02`, `EC-FRL-03`, `EC-FRL-04`, `EC-FRL-05` |
| Depends on | WS-A2, WS-D, WS-F |
| Migration class | M1, M3 |
| Verification | FA-1 to FA-11 suites |
| Rollback and recovery | Additive |
| FCTM rows built (20) | `21-§4-1`, `21-§5-2`, `21-§5-10`, `21-§6-7`, `21-§15-1`, `21-§17`, `21-§18-1`, `21-§18-2`, `22-§33-4`, `22-§33-5`, `22-§33-6`, `22-§33-11`, `22-§33-18`, `22-§33-32`, `22-§33-34`, `20-§16-1`, `20-§16-2`, `20-§16-3`, `20-§16-4`, `20-§23-11` |

Forbidden in this workstream, in addition to Section 8:

- merchant-facing transfer, Pause, cancellation, Stop or Delete experiences, contact or payment flows (`SB-P-1.19`);
- silently making an invited person Owner of a new empty business;
- removing the active Owner membership outside transfer completion or governed business deletion;
- producing SB-P-1.19 lifecycle evidence (this mission only consumes it).

### 7.11 SB-P-1.12/WS-H — Tests and CI

| Field | Value |
|---|---|
| Obligations | `EC-TST-01`, `EC-TST-02`, `EC-TST-03`, `EC-TST-04` |
| Depends on | Runs alongside every workstream |
| Migration class | None |
| Verification | Itself |
| Rollback and recovery | Not applicable |
| FCTM rows built (34) | `21-§24-1`, `21-§24-2`, `21-§24-3`, `21-§24-4`, `21-§24-5`, `21-§24-6`, `21-§24-7`, `21-§24-8`, `21-§24-9`, `21-§24-10`, `21-§24-11`, `21-§24-12`, `22-§20-2`, `22-§22`, `22-§29-3`, `22-§29-6`, `22-§29-7`, `22-§29-8`, `22-§29-10`, `22-§29-11`, `22-§29-12`, `22-§33-39`, `17-§22-2`, `17-§22-3`, `17-§22-9`, `17-§22-10a`, `7-§15-10`, `7-§15-12`, `BP-§10.1-1`, `BP-§10.1-5`, `BP-§10.1-7`, `BP-§10.1-8`, `BP-§10.1-9`, `BP-§10.1-13` |

Forbidden in this workstream, in addition to Section 8:

- setting authority by writing tables directly outside labelled fault-injection tests;
- changing workflows or branch protection;
- reporting a missing or skipped run as a pass.

### 7.12 Deletion design — Section 33 evaluator, register, registry

| Field | Value |
|---|---|
| Obligations | `EC-DEL-01`, `EC-DEL-02`, `EC-DEL-03`, `EC-DEL-04`, `EC-DEL-05`, `EC-DEL-06`, `EC-DEL-07`, `EC-LEG-01`, `EC-LEG-02`, `EC-LEG-03` |
| Depends on | WS-F, WS-G; separate runtime authorization |
| Migration class | Design only |
| Verification | Design review |
| Rollback and recovery | Not applicable |
| FCTM rows built (36) | `22-§33-1`, `22-§33-2`, `22-§33-3`, `22-§33-4`, `22-§33-5`, `22-§33-6`, `22-§33-7`, `22-§33-8`, `22-§33-9`, `22-§33-10`, `22-§33-11`, `22-§33-12`, `22-§33-13`, `22-§33-14`, `22-§33-15`, `22-§33-16`, `22-§33-19`, `22-§33-21`, `22-§33-22`, `22-§33-23`, `22-§33-24`, `22-§33-25`, `22-§33-26`, `22-§33-27`, `22-§33-28`, `22-§33-29`, `22-§33-30`, `22-§33-31`, `22-§33-32`, `22-§33-33`, `22-§33-34`, `22-§33-35`, `22-§33-36`, `22-§33-37`, `22-§33-38`, `22-§33-39` |

Forbidden in this workstream, in addition to Section 8:

- any identity-deletion runtime, provider Auth deletion or de-identification of real data;
- coding any retention period;
- Privacy Policy or Terms text, or any claim of professional legal finality.

### 7.13 Cross-cutting — Governance and invariants applying to every workstream

| Field | Value |
|---|---|
| Obligations | `EC-ISO-10`, `EC-GOV-01`, `EC-GOV-02`, `EC-GOV-03`, `EC-DEP-01` |
| Depends on | Every workstream |
| Migration class | Every M3 for EIS-ISO-10 |
| Verification | Inventory, repository and design review |
| Rollback and recovery | Not applicable |
| FCTM rows built (29) | `21-§7`, `21-§8`, `21-§16-2`, `21-§22`, `22-§6-10`, `22-§20-1`, `22-§20-3`, `22-§20-4`, `22-§27-1`, `22-§27-2`, `22-§27-3`, `22-§27-4`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§28-7`, `22-§28-8`, `22-§28-9`, `22-§28-10`, `22-§29-11`, `22-§29-14`, `BP-§10.1-7`, `BP-§10.1-8` |

Forbidden in this workstream, in addition to Section 8:

- any duplicate permission engine, Business Memory, AI orchestrator, scheduler, document pipeline, identity silo or client-specific fork;
- schema change driven by entitlement or subscription state;
- any later-mission consumption before EIS Section 19.5 conditions hold and Mission Control accepts the evidence;
- a `SECURITY DEFINER` function without the `EC-ISO-10` hardening.

## 8. Behaviour Outside the Assigned Rows Is Forbidden

A workstream builds nothing that no assigned row requires. In particular, no workstream builds:

- any row that is `ASSIGNED TO LATER MISSION`, `DELEGATED` or `NOT APPLICABLE` in the FCTM (Engineering Contract Section 5.3; Blueprint Section 11);
- the Notification Foundation (`SB-P-1.15`) or the Location Foundation (`SB-P-1.18`), or any part of either;
- conversation, AI orchestration, WhatsApp, document, reminder or scheduler runtime;
- a new merchant-facing feature, location-capture mode, retention period, consent policy, commercial classification or pricing;
- any experience beyond Blueprint Section 9 and the Section 15 acceptance lines;
- any margin formula or margin output semantics.

Anything a builder believes is needed but not assigned is raised under Section 10, never built.

## 9. Holds the Builder Must Not Cross

| Hold or gate | Status carried by this package | Effect on the package |
|---|---|---|
| R-2 source coverage | CLOSED / SATISFIED (MC-141, MC-142) | None; the 39 `22-§33-*` rows are mapped |
| ESC-1 | **OPEN T8** | Not closed or weakened. WS-F realizes the EIS safe-design direction only under a future Implementation Authorization; the hold stays until Mission Control disposes it |
| `22-§20-2` | **BLOCKED / IN SCOPE** | Mapped to obligations and checklist items; never treated as out of scope or unblocked. `EC-ESC-07` lists the evidence before unblocking may be proposed |
| G-6/T4 production state | **UNVERIFIED** | No production-security conclusion is drawn from repository files. WS-B relies only on separately authorized evidence (`EC-ENV-01`) |
| G-7 environment and provider topology | Evidence gate | Storage, provider Auth-deletion and backup facts need separately authorized evidence before reliance |
| Professional legal, privacy and retention validation | **Deferred** (Founder Record 06, MC-117) | No retention period, policy text or legal finality is created; rules stay data |
| Founder Decision Record 09 | APPROVED Product Truth | Reference Cost and margin semantics are applied exactly; no margin formula or margin output semantics are selected |
| Identity-deletion runtime | Not authorized (EIS Section 15) | `EC-DEL-*` and `EC-LEG-*` are design-only; their rows stay `IN SCOPE` and are marked runtime-gated with the reason |
| Security design findings SEC-EIS10-01 to SEC-EIS10-11 | Closed at design level (MC-164) | Realized through the obligations that implement the EIS sections named in EIS Section 20 |
| Security implementation and evidence gates SEC-EIS10-12 to SEC-EIS10-14 | Open as implementation and evidence gates | Carried as verification items: projection on every read path (12); live effective-access evidence (13); provider, backup, PITR and legal-hold evidence (14) |
| Implementation and runtime Security proof | Not yet established | Nothing in this package is runtime, implementation or production evidence |

## 10. Pause-and-Escalate Rule

Stop the dependent work, record what was found with evidence, and report to Mission Control when:

- a locked source is ambiguous, conflicts with another, or with repository state;
- an assigned row cannot be built as the locked EIS specifies (technical difficulty never changes a commitment; the row stays `IN SCOPE`, marked partial or blocked with the reason);
- a change would add, remove, narrow or reclassify behaviour, or touch a row not assigned to the workstream;
- a step needs a migration, provider action, production action, credential or environment not explicitly authorized;
- any Stage 3 trigger T1 to T8 fires, including any new Product Truth question;
- a hold in Section 9 would be crossed;
- repository state differs from the baseline the authorization names.

Do not resolve a conflict by dropping, narrowing or inventing behaviour. Resume only on a recorded Mission Control decision.

## 11. Tests, Evidence, Checklist and Completion Duties

- Run the Verification Checklist items for every assigned row: its `VC-R` item, its named negative-path checks (`NP-*`) and its named runtime scenarios (`RS-*`).
- Record each result with its evidence class. A missing run is `NOT RUN`, never a pass.
- Write the Builder Completion Report with a status per assigned FCTM row, using `IMPLEMENTED — NOT DEMONSTRATED` or `NOT IMPLEMENTED`, or marking the row partial or blocked with the reason (Source 18 Section 3.2 item 5). Demonstration is decided after independent verification, not by the builder.
- Keep `ESC-1`, `22-§20-2`, G-6/T4, legal deferral and every runtime gate visible in every report.

## 12. Workstream-to-FCTM-Row Map

One line per `IN SCOPE` FCTM row, in FCTM order.

| # | FCTM row | Workstreams | Obligations |
|---|---|---|---|
| 1 | `21-§4-1` | WS-A1, WS-G | `EC-ID-02`, `EC-ID-04`, `EC-FRL-04` |
| 2 | `21-§4-2` | WS-A1, WS-A2, WS-C | `EC-ID-02`, `EC-KER-03`, `EC-KER-04`, `EC-PPM-03` |
| 3 | `21-§4-3` | WS-A1, WS-A2 | `EC-ID-02`, `EC-KER-03` |
| 4 | `21-§4-4` | WS-A1 | `EC-ID-03` |
| 5 | `21-§4-5` | WS-A1 | `EC-ID-03` |
| 6 | `21-§4-6` | WS-A1 | `EC-ID-03` |
| 7 | `21-§5-1` | WS-A1, WS-A2 | `EC-ID-01`, `EC-KER-01` |
| 8 | `21-§5-2` | WS-A1, WS-A2, WS-G | `EC-ID-02`, `EC-KER-01`, `EC-FRL-03` |
| 9 | `21-§5-3` | WS-A1, WS-A2 | `EC-ID-02`, `EC-KER-01` |
| 10 | `21-§5-4` | WS-A2, WS-C | `EC-KER-01`, `EC-KER-04`, `EC-PPM-03`, `EC-PPM-04` |
| 11 | `21-§5-5` | WS-A2 | `EC-KER-01`, `EC-KER-08` |
| 12 | `21-§5-6` | WS-A2 | `EC-KER-01`, `EC-KER-08` |
| 13 | `21-§5-7` | WS-A2 | `EC-KER-01`, `EC-KER-05` |
| 14 | `21-§5-8` | WS-A2 | `EC-KER-01`, `EC-KER-06` |
| 15 | `21-§5-9` | WS-A2 | `EC-KER-01` |
| 16 | `21-§5-10` | WS-A2, WS-G | `EC-KER-01`, `EC-KER-05`, `EC-FRL-05` |
| 17 | `21-§6-1` | WS-A3 | `EC-ISO-01` |
| 18 | `21-§6-2` | WS-A3 | `EC-ISO-01` |
| 19 | `21-§6-3` | WS-A3 | `EC-ISO-06` |
| 20 | `21-§6-4` | WS-A3, WS-0 | `EC-ISO-05`, `EC-ENV-01` |
| 21 | `21-§6-5` | WS-A3 | `EC-ISO-05` |
| 22 | `21-§6-6` | WS-A1, WS-A3 | `EC-ID-05`, `EC-ISO-04`, `EC-ISO-07` |
| 23 | `21-§6-7` | WS-A1, WS-A3, WS-G | `EC-ID-06`, `EC-ISO-07`, `EC-FRL-02` |
| 24 | `21-§7` | WS-A2, WS-A3, Cross-cutting | `EC-KER-01`, `EC-ISO-02`, `EC-ISO-10` |
| 25 | `21-§8` | WS-A2, Cross-cutting | `EC-KER-02`, `EC-KER-06`, `EC-DEP-01` |
| 26 | `21-§9` | WS-A2 | `EC-KER-06`, `EC-KER-07` |
| 27 | `21-§10-1` | WS-A2 | `EC-EXT-01` |
| 28 | `21-§10-2` | WS-A2 | `EC-EXT-01` |
| 29 | `21-§10-3` | WS-A2 | `EC-EXT-01` |
| 30 | `21-§10-4` | WS-A2 | `EC-EXT-01` |
| 31 | `21-§10-5` | WS-A2 | `EC-EXT-01` |
| 32 | `21-§10-6` | WS-A2 | `EC-KER-07`, `EC-EXT-01` |
| 33 | `21-§11-1` | WS-A3, WS-F | `EC-ISO-02`, `EC-ESC-03` |
| 34 | `21-§11-2` | WS-A2, WS-A3 | `EC-KER-08`, `EC-ISO-02` |
| 35 | `21-§12-1` | WS-A2 | `EC-AUT-01` |
| 36 | `21-§12-2` | WS-A2 | `EC-AUT-01` |
| 37 | `21-§12-3` | WS-A2 | `EC-AUT-01` |
| 38 | `21-§12-4` | WS-A2 | `EC-AUT-01` |
| 39 | `21-§12-5` | WS-A2 | `EC-KER-09`, `EC-AUT-01` |
| 40 | `21-§13-1` | WS-A2 | `EC-EXT-02` |
| 41 | `21-§13-2` | WS-A2 | `EC-EXT-02` |
| 42 | `21-§13-3` | WS-A2 | `EC-EXT-02` |
| 43 | `21-§14-1` | WS-A2 | `EC-SUP-01` |
| 44 | `21-§14-2` | WS-A2 | `EC-SUP-01` |
| 45 | `21-§14-3` | WS-A2 | `EC-SUP-01` |
| 46 | `21-§14-4` | WS-A2 | `EC-SUP-01` |
| 47 | `21-§14-5` | WS-A2 | `EC-SUP-01` |
| 48 | `21-§14-6` | WS-A2 | `EC-SUP-01` |
| 49 | `21-§14-7` | WS-A2 | `EC-SUP-01` |
| 50 | `21-§15-1` | WS-A1, WS-A2, WS-G | `EC-ID-06`, `EC-KER-02`, `EC-FRL-02` |
| 51 | `21-§15-2` | WS-A2 | `EC-KER-02` |
| 52 | `21-§15-3` | WS-A1, WS-A2 | `EC-ID-06`, `EC-KER-02` |
| 53 | `21-§15-4` | WS-A2 | `EC-KER-02` |
| 54 | `21-§15-5` | WS-A2, WS-A3 | `EC-KER-02`, `EC-SUP-01`, `EC-ISO-04` |
| 55 | `21-§16-1` | WS-A2 | `EC-KER-05` |
| 56 | `21-§16-2` | WS-A2, Cross-cutting | `EC-KER-05`, `EC-GOV-03` |
| 57 | `21-§17` | WS-A2, WS-D, WS-G | `EC-KER-09`, `EC-CNF-02`, `EC-CNF-05`, `EC-FRL-03` |
| 58 | `21-§18-1` | WS-D, WS-G | `EC-CNF-01`, `EC-FRL-04` |
| 59 | `21-§18-2` | WS-D, WS-G | `EC-CNF-01`, `EC-FRL-04` |
| 60 | `21-§18-3` | WS-D | `EC-CNF-01` |
| 61 | `21-§18-4` | WS-D | `EC-CNF-01` |
| 62 | `21-§18-5` | WS-D | `EC-CNF-01` |
| 63 | `21-§18-6` | WS-D | `EC-CNF-01` |
| 64 | `21-§19-1` | WS-E | `EC-AUD-01` |
| 65 | `21-§19-2` | WS-E | `EC-AUD-01` |
| 66 | `21-§19-3` | WS-E | `EC-AUD-01` |
| 67 | `21-§19-4` | WS-E | `EC-AUD-01` |
| 68 | `21-§19-5` | WS-E | `EC-AUD-01` |
| 69 | `21-§19-6` | WS-E | `EC-AUD-01`, `EC-AUD-02` |
| 70 | `21-§19-7` | WS-A2, WS-E | `EC-SUP-01`, `EC-AUD-01` |
| 71 | `21-§19-8` | WS-A2, WS-E | `EC-AUT-01`, `EC-AUD-01`, `EC-AUD-03` |
| 72 | `21-§20-1` | WS-E | `EC-UX-01` |
| 73 | `21-§20-2` | WS-E | `EC-UX-01` |
| 74 | `21-§20-3` | WS-E | `EC-UX-01`, `EC-UX-02` |
| 75 | `21-§20-4` | WS-E | `EC-UX-01` |
| 76 | `21-§20-5` | WS-E | `EC-AUD-02`, `EC-UX-01` |
| 77 | `21-§21-1` | WS-E | `EC-AUD-05` |
| 78 | `21-§21-2` | WS-E | `EC-AUD-05` |
| 79 | `21-§21-3` | WS-A2 | `EC-SUP-01` |
| 80 | `21-§21-4` | WS-A3 | `EC-ISO-01`, `EC-ISO-09` |
| 81 | `21-§21-5` | WS-E | `EC-AUD-05` |
| 82 | `21-§22` | WS-A2, Cross-cutting | `EC-KER-01`, `EC-GOV-01`, `EC-DEP-01` |
| 83 | `21-§23-1` | WS-A3 | `EC-ISO-02` |
| 84 | `21-§23-2` | WS-A2 | `EC-KER-03` |
| 85 | `21-§23-3` | WS-A2 | `EC-KER-03`, `EC-EXT-01` |
| 86 | `21-§23-4` | WS-A2 | `EC-SUP-01` |
| 87 | `21-§23-5` | WS-A2 | `EC-KER-02` |
| 88 | `21-§23-6` | WS-A2, WS-F | `EC-KER-05`, `EC-ESC-01` |
| 89 | `21-§23-7` | WS-E | `EC-AUD-02`, `EC-UX-01` |
| 90 | `21-§24-1` | WS-H | `EC-TST-02` |
| 91 | `21-§24-2` | WS-A3, WS-H | `EC-ISO-01`, `EC-TST-02` |
| 92 | `21-§24-3` | WS-C, WS-H | `EC-PPM-03`, `EC-PPM-04`, `EC-TST-02` |
| 93 | `21-§24-4` | WS-A2, WS-A3, WS-H | `EC-KER-08`, `EC-ISO-02`, `EC-TST-02` |
| 94 | `21-§24-5` | WS-A2, WS-H | `EC-EXT-01`, `EC-TST-02` |
| 95 | `21-§24-6` | WS-A2, WS-H | `EC-KER-06`, `EC-KER-07`, `EC-TST-02` |
| 96 | `21-§24-7` | WS-A2, WS-H | `EC-EXT-02`, `EC-TST-02` |
| 97 | `21-§24-8` | WS-A2, WS-D, WS-H | `EC-KER-09`, `EC-CNF-02`, `EC-TST-02` |
| 98 | `21-§24-9` | WS-A2, WS-H | `EC-KER-05`, `EC-TST-02` |
| 99 | `21-§24-10` | WS-A2, WS-H | `EC-SUP-01`, `EC-TST-02` |
| 100 | `21-§24-11` | WS-A2, WS-H | `EC-AUT-01`, `EC-TST-02` |
| 101 | `21-§24-12` | WS-E, WS-H | `EC-UX-01`, `EC-TST-02` |
| 102 | `22-§5-1` | WS-A1 | `EC-ID-02` |
| 103 | `22-§5-2` | WS-A1 | `EC-ID-01`, `EC-ID-02`, `EC-ID-04` |
| 104 | `22-§5-3` | WS-A1 | `EC-ID-01`, `EC-ID-02` |
| 105 | `22-§5-4` | WS-A1 | `EC-ID-01`, `EC-ID-02` |
| 106 | `22-§5-5` | WS-A1 | `EC-ID-03` |
| 107 | `22-§5-6` | WS-A1 | `EC-ID-03` |
| 108 | `22-§5-7` | WS-A1 | `EC-ID-03` |
| 109 | `22-§5-8` | WS-A1, WS-C | `EC-ID-05`, `EC-PPM-01` |
| 110 | `22-§5-9` | WS-A1, WS-A3 | `EC-ID-05`, `EC-ISO-07` |
| 111 | `22-§6-1` | WS-E | `EC-UX-02` |
| 112 | `22-§6-2` | WS-A2 | `EC-KER-06` |
| 113 | `22-§6-3` | WS-A2, WS-A3 | `EC-KER-06`, `EC-ISO-06` |
| 114 | `22-§6-4` | WS-A3 | `EC-ISO-02`, `EC-ISO-04` |
| 115 | `22-§6-5` | WS-A3 | `EC-ISO-01` |
| 116 | `22-§6-6` | WS-A2 | `EC-AUT-01` |
| 117 | `22-§6-7` | WS-A3 | `EC-ISO-04` |
| 118 | `22-§6-8` | WS-A3 | `EC-ISO-05` |
| 119 | `22-§6-9` | WS-A2 | `EC-KER-06` |
| 120 | `22-§6-10` | WS-A2, Cross-cutting | `EC-KER-01`, `EC-DEP-01` |
| 121 | `22-§13-1` | WS-D | `EC-CNF-03` |
| 122 | `22-§13-2` | WS-D | `EC-CNF-03` |
| 123 | `22-§13-3` | WS-D | `EC-CNF-01` |
| 124 | `22-§13-4` | WS-D | `EC-CNF-02` |
| 125 | `22-§13-5` | WS-D | `EC-CNF-01` |
| 126 | `22-§14-1` | WS-E | `EC-AUD-04` |
| 127 | `22-§14-2` | WS-E | `EC-AUD-03` |
| 128 | `22-§14-3` | WS-E | `EC-AUD-03` |
| 129 | `22-§14-4` | WS-E | `EC-AUD-04` |
| 130 | `22-§14-5` | WS-E, WS-F | `EC-AUD-04`, `EC-ESC-04` |
| 131 | `22-§14-6` | WS-E | `EC-AUD-04` |
| 132 | `22-§14-7` | WS-D | `EC-CNF-01` |
| 133 | `22-§14-8` | WS-E | `EC-AUD-04` |
| 134 | `22-§14-9` | WS-E | `EC-AUD-03` |
| 135 | `22-§15` | WS-D | `EC-CNF-04`, `EC-CNF-05` |
| 136 | `22-§16-2` | WS-E | `EC-AUD-05` |
| 137 | `22-§17` | WS-D | `EC-CNF-06` |
| 138 | `22-§19` | WS-D | `EC-CNF-06` |
| 139 | `22-§20-1` | WS-F, Cross-cutting | `EC-ESC-06`, `EC-ESC-08`, `EC-GOV-03` |
| 140 | `22-§20-2` | WS-F, WS-H | `EC-ESC-01`, `EC-ESC-02`, `EC-ESC-03`, `EC-ESC-04`, `EC-ESC-05`, `EC-ESC-06`, `EC-ESC-07`, `EC-TST-03` |
| 141 | `22-§20-3` | WS-A2, Cross-cutting | `EC-KER-05`, `EC-GOV-03` |
| 142 | `22-§20-4` | WS-F, Cross-cutting | `EC-ESC-08`, `EC-GOV-03` |
| 143 | `22-§21` | WS-A3 | `EC-ISO-08` |
| 144 | `22-§22` | WS-H | `EC-TST-01` |
| 145 | `22-§23-1` | WS-A3 | `EC-ISO-09` |
| 146 | `22-§23-2` | WS-A3 | `EC-ISO-01` |
| 147 | `22-§23-3` | WS-A2 | `EC-SUP-01` |
| 148 | `22-§23-4` | WS-A2 | `EC-SUP-01` |
| 149 | `22-§23-5` | WS-A3 | `EC-ISO-09` |
| 150 | `22-§23-6` | WS-A3 | `EC-ISO-09` |
| 151 | `22-§23-7` | WS-A3 | `EC-ISO-09` |
| 152 | `22-§27-1` | Cross-cutting | `EC-GOV-01` |
| 153 | `22-§27-2` | Cross-cutting | `EC-GOV-01` |
| 154 | `22-§27-3` | Cross-cutting | `EC-GOV-01` |
| 155 | `22-§27-4` | Cross-cutting | `EC-GOV-01` |
| 156 | `22-§27-5` | Cross-cutting | `EC-GOV-01` |
| 157 | `22-§27-6` | Cross-cutting | `EC-GOV-01` |
| 158 | `22-§27-7` | Cross-cutting | `EC-GOV-01` |
| 159 | `22-§28-1` | Cross-cutting | `EC-GOV-02` |
| 160 | `22-§28-2` | WS-A2, Cross-cutting | `EC-KER-01`, `EC-GOV-02`, `EC-DEP-01` |
| 161 | `22-§28-3` | Cross-cutting | `EC-GOV-02` |
| 162 | `22-§28-4` | WS-A2, Cross-cutting | `EC-AUT-01`, `EC-GOV-02` |
| 163 | `22-§28-5` | Cross-cutting | `EC-GOV-02` |
| 164 | `22-§28-6` | WS-A1, Cross-cutting | `EC-ID-03`, `EC-GOV-02` |
| 165 | `22-§28-7` | WS-E, Cross-cutting | `EC-AUD-05`, `EC-GOV-02` |
| 166 | `22-§28-8` | WS-A2, Cross-cutting | `EC-KER-05`, `EC-GOV-02` |
| 167 | `22-§28-9` | WS-A2, Cross-cutting | `EC-KER-02`, `EC-GOV-02` |
| 168 | `22-§28-10` | Cross-cutting | `EC-GOV-02` |
| 169 | `22-§29-3` | WS-A2, WS-A3, WS-H | `EC-KER-06`, `EC-ISO-01`, `EC-TST-02` |
| 170 | `22-§29-6` | WS-A1, WS-H | `EC-ID-03`, `EC-TST-02` |
| 171 | `22-§29-7` | WS-D, WS-H | `EC-CNF-02`, `EC-TST-02` |
| 172 | `22-§29-8` | WS-D, WS-H | `EC-CNF-04`, `EC-TST-02` |
| 173 | `22-§29-10` | WS-D, WS-H | `EC-CNF-06`, `EC-TST-02` |
| 174 | `22-§29-11` | WS-F, Cross-cutting, WS-H | `EC-ESC-07`, `EC-GOV-03`, `EC-TST-02` |
| 175 | `22-§29-12` | WS-E, WS-F, WS-H | `EC-AUD-04`, `EC-ESC-07`, `EC-TST-02` |
| 176 | `22-§29-14` | Cross-cutting | `EC-GOV-01` |
| 177 | `22-§33-1` | Deletion design | `EC-DEL-02` |
| 178 | `22-§33-2` | WS-A1, Deletion design | `EC-ID-01`, `EC-DEL-03` |
| 179 | `22-§33-3` | Deletion design | `EC-DEL-01` |
| 180 | `22-§33-4` | WS-G, WS-F, Deletion design | `EC-FRL-04`, `EC-FRL-05`, `EC-ESC-06`, `EC-DEL-01` |
| 181 | `22-§33-5` | WS-G, Deletion design | `EC-FRL-03`, `EC-DEL-01` |
| 182 | `22-§33-6` | WS-G, Deletion design | `EC-FRL-04`, `EC-DEL-01` |
| 183 | `22-§33-7` | Deletion design | `EC-DEL-01`, `EC-DEL-06` |
| 184 | `22-§33-8` | WS-F, Deletion design | `EC-ESC-03`, `EC-DEL-01` |
| 185 | `22-§33-9` | Deletion design | `EC-DEL-02` |
| 186 | `22-§33-10` | Deletion design | `EC-DEL-01` |
| 187 | `22-§33-11` | WS-G, Deletion design | `EC-FRL-05`, `EC-DEL-01` |
| 188 | `22-§33-12` | Deletion design | `EC-DEL-03` |
| 189 | `22-§33-13` | Deletion design | `EC-DEL-06` |
| 190 | `22-§33-14` | Deletion design | `EC-DEL-03` |
| 191 | `22-§33-15` | Deletion design | `EC-DEL-04` |
| 192 | `22-§33-16` | Deletion design | `EC-LEG-01` |
| 193 | `22-§33-17` | WS-F | `EC-ESC-03`, `EC-ESC-04` |
| 194 | `22-§33-18` | WS-G, WS-F | `EC-FRL-04`, `EC-ESC-02` |
| 195 | `22-§33-19` | WS-F, Deletion design | `EC-ESC-03`, `EC-DEL-03` |
| 196 | `22-§33-20` | WS-F | `EC-ESC-01`, `EC-ESC-02` |
| 197 | `22-§33-21` | Deletion design | `EC-DEL-05` |
| 198 | `22-§33-22` | WS-F, Deletion design | `EC-ESC-01`, `EC-ESC-02`, `EC-ESC-05`, `EC-DEL-02` |
| 199 | `22-§33-23` | WS-A1, Deletion design | `EC-ID-01`, `EC-DEL-03`, `EC-LEG-01` |
| 200 | `22-§33-24` | WS-F, Deletion design | `EC-ESC-06`, `EC-LEG-01` |
| 201 | `22-§33-25` | Deletion design | `EC-LEG-01` |
| 202 | `22-§33-26` | Deletion design | `EC-DEL-06`, `EC-LEG-02` |
| 203 | `22-§33-27` | Deletion design | `EC-LEG-01` |
| 204 | `22-§33-28` | Deletion design | `EC-DEL-04`, `EC-LEG-01` |
| 205 | `22-§33-29` | Deletion design | `EC-LEG-01` |
| 206 | `22-§33-30` | Deletion design | `EC-LEG-01`, `EC-LEG-03` |
| 207 | `22-§33-31` | Deletion design | `EC-DEL-01`, `EC-DEL-07` |
| 208 | `22-§33-32` | WS-G, Deletion design | `EC-FRL-04`, `EC-FRL-05`, `EC-DEL-07` |
| 209 | `22-§33-33` | Deletion design | `EC-DEL-01`, `EC-DEL-07` |
| 210 | `22-§33-34` | WS-G, Deletion design | `EC-FRL-04`, `EC-DEL-01`, `EC-DEL-07` |
| 211 | `22-§33-35` | Deletion design | `EC-DEL-06`, `EC-DEL-07` |
| 212 | `22-§33-36` | WS-F, Deletion design | `EC-ESC-04`, `EC-DEL-07` |
| 213 | `22-§33-37` | Deletion design | `EC-DEL-04`, `EC-DEL-07` |
| 214 | `22-§33-38` | Deletion design | `EC-DEL-05`, `EC-DEL-07` |
| 215 | `22-§33-39` | WS-F, Deletion design, WS-H | `EC-ESC-01`, `EC-ESC-05`, `EC-DEL-07`, `EC-TST-03` |
| 216 | `20-§16-1` | WS-A1, WS-G | `EC-ID-02`, `EC-ID-04`, `EC-FRL-01` |
| 217 | `20-§16-2` | WS-A2, WS-G | `EC-KER-04`, `EC-FRL-01` |
| 218 | `20-§16-3` | WS-A2, WS-G | `EC-KER-03`, `EC-FRL-01` |
| 219 | `20-§16-4` | WS-G | `EC-FRL-01`, `EC-FRL-02` |
| 220 | `20-§23-11` | WS-A2, WS-G | `EC-KER-03`, `EC-FRL-01` |
| 221 | `17-§13-1` | WS-A1 | `EC-ID-02` |
| 222 | `17-§13-2` | WS-A1, WS-A2, WS-C | `EC-ID-02`, `EC-KER-03`, `EC-PPM-03` |
| 223 | `17-§13-3` | WS-A1, WS-A2 | `EC-ID-02`, `EC-KER-03` |
| 224 | `17-§13-4` | WS-A1, WS-A2 | `EC-ID-03`, `EC-EXT-02` |
| 225 | `17-§14-1` | WS-A3, WS-E | `EC-ISO-02`, `EC-UX-02` |
| 226 | `17-§14-2` | WS-A2 | `EC-KER-01` |
| 227 | `17-§14-3` | WS-A2 | `EC-KER-01` |
| 228 | `17-§14-4` | WS-A2 | `EC-KER-01` |
| 229 | `17-§14-5` | WS-A2 | `EC-KER-01` |
| 230 | `17-§14-6` | WS-A2 | `EC-KER-01` |
| 231 | `17-§14-7` | WS-A3, WS-E | `EC-ISO-02`, `EC-UX-02` |
| 232 | `17-§16-1` | WS-E | `EC-UX-02` |
| 233 | `17-§18-1` | WS-A3 | `EC-ISO-01` |
| 234 | `17-§18-2` | WS-A2, WS-C | `EC-KER-03`, `EC-KER-07`, `EC-PPM-04` |
| 235 | `17-§18-4` | WS-A2 | `EC-KER-07` |
| 236 | `17-§21-4` | WS-A2, WS-C | `EC-KER-03`, `EC-KER-07`, `EC-PPM-04` |
| 237 | `17-§22-2` | WS-C, WS-H | `EC-PPM-03`, `EC-PPM-04`, `EC-TST-02` |
| 238 | `17-§22-3` | WS-A2, WS-H | `EC-EXT-01`, `EC-TST-02` |
| 239 | `17-§22-9` | WS-A3, WS-H | `EC-ISO-01`, `EC-TST-02` |
| 240 | `17-§22-10a` | WS-E, WS-H | `EC-UX-02`, `EC-TST-02` |
| 241 | `7-§7` | WS-C | `EC-PPM-05` |
| 242 | `7-§9` | WS-C | `EC-PPM-05` |
| 243 | `7-§10-1` | WS-A1, WS-C | `EC-ID-02`, `EC-PPM-02` |
| 244 | `7-§10-2` | WS-A1, WS-C | `EC-ID-02`, `EC-PPM-02`, `EC-PPM-03` |
| 245 | `7-§10-3` | WS-A1, WS-C | `EC-ID-02`, `EC-PPM-02` |
| 246 | `7-§10-4` | WS-A1, WS-C | `EC-ID-03`, `EC-PPM-02` |
| 247 | `7-§12` | WS-A2, WS-C | `EC-KER-01`, `EC-PPM-01` |
| 248 | `7-§15-10` | WS-C, WS-H | `EC-PPM-02`, `EC-TST-02` |
| 249 | `7-§15-12` | WS-A3, WS-H | `EC-ISO-01`, `EC-TST-02` |
| 250 | `BP-§10.1-1` | WS-A1, WS-H | `EC-ID-02`, `EC-TST-02` |
| 251 | `BP-§10.1-2` | WS-A1 | `EC-ID-01`, `EC-ID-02` |
| 252 | `BP-§10.1-3` | WS-A2, WS-C | `EC-KER-01`, `EC-KER-03`, `EC-PPM-03` |
| 253 | `BP-§10.1-4` | WS-A2 | `EC-KER-04`, `EC-AUT-01` |
| 254 | `BP-§10.1-5` | WS-A2, WS-D, WS-H | `EC-KER-09`, `EC-CNF-02`, `EC-CNF-05`, `EC-TST-02` |
| 255 | `BP-§10.1-6` | WS-A1, WS-A3 | `EC-ID-06`, `EC-ISO-01` |
| 256 | `BP-§10.1-7` | WS-A3, WS-B, Cross-cutting, WS-H, WS-0 | `EC-ISO-01`, `EC-ISO-03`, `EC-ISO-10`, `EC-TST-03`, `EC-ENV-01` |
| 257 | `BP-§10.1-8` | WS-B, Cross-cutting, WS-H, WS-0 | `EC-ISO-03`, `EC-ISO-10`, `EC-TST-03`, `EC-ENV-01` |
| 258 | `BP-§10.1-9` | WS-H | `EC-TST-01`, `EC-TST-04` |
| 259 | `BP-§10.1-10` | WS-A2 | `EC-KER-05` |
| 260 | `BP-§10.1-11` | WS-C | `EC-PPM-01`, `EC-PPM-02` |
| 261 | `BP-§10.1-12` | WS-C | `EC-PPM-06` |
| 262 | `BP-§10.1-13` | WS-A1, WS-C, WS-F, WS-H | `EC-ID-04`, `EC-PPM-05`, `EC-PPM-06`, `EC-ESC-08`, `EC-TST-04` |
| 263 | `BP-§7-1` | WS-C | `EC-PPM-05` |
| 264 | `BP-§7-2` | WS-C | `EC-PPM-05` |
| 265 | `BP-§7-3` | WS-C | `EC-PPM-05` |
| 266 | `BP-§7-4` | WS-C | `EC-PPM-05` |
| 267 | `BP-§7-5` | WS-C | `EC-PPM-06` |

## 13. Workstream Row Counts

| Workstream | Obligations | Rows |
|---|---|---|
| WS-0 | 2 | 3 |
| WS-A1 | 6 | 39 |
| WS-A2 | 13 | 95 |
| WS-A3 | 8 | 35 |
| WS-B | 1 | 2 |
| WS-C | 6 | 25 |
| WS-D | 6 | 21 |
| WS-E | 7 | 34 |
| WS-F | 8 | 19 |
| WS-G | 5 | 20 |
| WS-H | 4 | 34 |
| Deletion design | 10 | 36 |
| Cross-cutting | 5 | 29 |

Every one of the 267 rows is assigned to at least one workstream; 103 rows are shared by two or more workstreams. No row is assigned outside SB-P-1.12.

## 14. Status

`DRAFT — MISSION CONTROL REVIEW REQUIRED`. No builder is named and no build is authorized.

## 15. Change Log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-10-01 | Claude Code (MC-165, MC-166) | Initial Stage 12 draft. Before first publication, locked-EIS identity and baseline references updated to MC-166; no row, obligation, check or count changed |
