# SB-P-1.12 — Verification Checklist

```text
STATUS: APPROVED — LOCKED
PRODUCT BLUEPRINT: APPROVED — LOCKED (UNCHANGED)
EIS: APPROVED — LOCKED (UNCHANGED)
IMPLEMENTATION PACKAGE: STAGE 12 DRAFT — NOT APPROVED, NOT LOCKED
IMPLEMENTATION: NOT AUTHORIZED
SCHEMA / SQL / MIGRATIONS: NOT AUTHORIZED
PRODUCTION / PROVIDER MUTATION: NOT AUTHORIZED
```

## Document Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.12 |
| Mission Name | Authority, Identity & Product Surface Foundation |
| Document | Verification Checklist (Source 18 Stage 12; package template Phase C) |
| Version | 0.2 |
| Status | `APPROVED — LOCKED` |
| Author | Claude Code — initial implementation package owner |
| Canonical baseline | `main@7d95143ef52f1ca1f72bbc4a76442f02a990d0c5` |
| Date | 2026-10-01 |
| Execution state | **Not executed.** Every item is a planned check. Nothing here is evidence |
| `EC-DEP-01` | Cross-cutting Governance / Consumer Gate; verified by Mission Control dependency evidence, not by builder checks |

## How to Use This Checklist

Sections 1 to 14 follow the package template Phase C. Each item names its planned evidence class and the FCTM rows it supports. Section 13 is the row-keyed authority: one item per `IN SCOPE` row, with that row's obligations, evidence classes, named negative-path checks and named runtime scenarios. Structural items in Sections 1 to 12 reference rows through the obligations, checks and scenarios they run.

After lock, criteria are never edited to fit a result. Results go in an appended execution section or a separate execution record under Mission Control authorization. Per-row results use the Source 18 Section 3.2 item 11 vocabulary. A row without evidence is not demonstrated, and absence of failure is not `PASS`.

## Evidence Classes

| Class | Meaning |
|---|---|
| `DB` | Automated database-level behavioural test against the isolated test environment (Full Assurance); test and database evidence |
| `CONC` | Database-level concurrency or race test (Full Assurance concurrency tier) |
| `HARNESS` | Clearly labelled harness or fixture test where the consuming feature belongs to a later mission (Blueprint section 15, DC-3); never claimed as that mission's end-to-end delivery |
| `INV` | Machine-generated structural inventory from the target database catalog: grants, policies, functions, owners, `search_path`, foreign keys, triggers |
| `AUDIT` | Inspection of committed `authority_events`, denial and provenance rows produced by a test |
| `UNIT` | Component or unit test in the Fast Gate |
| `RT` | Human runtime verification in an authorized non-production environment, recording environment, role context, route, expected and actual result, and capturer |
| `FRT` | Founder runtime observation of a Founder Runtime Verification Scenario (Founder evidence) |
| `REG` | Regression re-run of the existing suites (catalog import 9, inventory 17, parser lease 2) and existing routes |
| `REPO` | Repository evidence: commit range, diff, file inventory, confirmation that locked documents are unchanged |
| `PROV` | Separately authorized read-only provider or production evidence (G-6, G-7); never inferred from repository files |
| `DOC` | Documentary design review; not implementation, runtime or production evidence |

## 1. Locked Authority Verification

| Item | Check | Planned evidence class | FCTM rows |
|---|---|---|---|
| VC-AUTH-01 | The locked Blueprint on canonical `main` is blob `77d52096c020668311b039721a4de9248ddd460e` at every checkpoint. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-AUTH-02 | The locked EIS on canonical `main` is blob `c444f7509477d0e8b997af538440d93bf2ca4d72` at every checkpoint. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-AUTH-03 | The canonical FCTM is blob `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259`; its `IN SCOPE` set is the same 267 rows as Section 13, by set difference. | `REPO` | 267 rows via ALL; each listed against its row in Section 13 |
| VC-AUTH-04 | The three package documents are `APPROVED — LOCKED` (Stage 13) and an Implementation Authorization names the builder, workstreams, paths and Git authority before any build. | `REPO`, `DOC` | Process item; no FCTM row; adds no behaviour |
| VC-AUTH-05 | Every migration written or executed is covered by an explicit migration mission that meets `docs/migration/README.md`. | `REPO`, `DOC` | Process item; no FCTM row; adds no behaviour |
| VC-AUTH-06 | Founder Decision Record 09 (blob `84d61d4d62cc33ae81ec372ac725059665ebc9d9`) is unchanged and applied exactly by `EC-PPM-03` and `EC-PPM-04`. | `REPO`, `DOC` | `21-§5-4`, `21-§24-3`, `17-§18-2`, `17-§21-4`, `17-§22-2` |

## 2. Repository Verification

| Item | Check | Planned evidence class | FCTM rows |
|---|---|---|---|
| VC-REPO-01 | Branch, base, head, commit range and diff-stat recorded; only paths the Implementation Authorization lists changed. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-REPO-02 | Locked Blueprint, locked EIS and FCTM unchanged in the diff. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-REPO-03 | Staged-content secret check, `git diff --check` and the Markdown Quality Gate pass. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-REPO-04 | No path infers the active business from single ownership (`maybeSingle()` lookups removed). | `REPO`, `UNIT` | `21-§6-7`, `21-§15-1`, `21-§15-3`, `BP-§10.1-6` |
| VC-REPO-05 | No `resolve_owner_business` or `loadOwnedBusinessId` authority inference remains. | `REPO`, `INV` | `22-§5-8`, `7-§12`, `BP-§10.1-11` |
| VC-REPO-06 | Must-not-appear scan (`NP-42`) finds no parallel engine, silo, surveillance, scoring or fork. | `REPO`, `INV` | 27 rows via NP-42; each listed against its row in Section 13 |

## 3. Backend Verification

| Item | Check | Planned evidence class | FCTM rows |
|---|---|---|---|
| VC-BE-01 | `authz.authorize` evaluates every dimension in EIS Section 8.1 order and returns the full result contract with stable reason codes. | `DB` | 21 rows via EC-KER-01; each listed against its row in Section 13 |
| VC-BE-02 | Verified-principal suite: `NP-07`, `NP-08` for all four principal types. | `DB` | 17 rows via EC-KER-02, NP-07, NP-08; each listed against its row in Section 13 |
| VC-BE-03 | Commands are the only write boundary for protected tables (`NP-15`). | `DB`, `INV` | `21-§7`, `21-§11-1`, `21-§11-2`, `21-§23-1`, `21-§24-4`, `22-§6-1`, `22-§6-4`, `17-§14-1`, `17-§14-7` |
| VC-BE-04 | Privileged-operation contract on every service-role handler (`NP-25`) and the source-complete handler inventory shows no unbound path. | `DB`, `INV` | `21-§6-6`, `21-§15-5`, `22-§6-4`, `22-§6-7` |
| VC-BE-05 | All 19 catalog functions and both server functions resolve the requested business through the kernel. | `DB`, `REG` | `22-§5-8`, `7-§12`, `BP-§10.1-11` |
| VC-BE-06 | Kernel, feature and provider errors fail closed and narrowly (`NP-44`). | `DB` | `22-§17`, `22-§19`, `22-§29-10` |
| VC-BE-07 | SB-P-1.19 lifecycle evidence is read through the kernel and never produced here. | `HARNESS` | `21-§5-10`, `22-§33-4`, `22-§33-11`, `22-§33-32` |
| VC-BE-08 | Support grants, automation rules and participant bindings enter the one kernel and serialization (`NP-21`, `NP-22`, `NP-23`). | `DB`, `HARNESS` | 34 rows via EC-SUP-01, EC-AUT-01, EC-ID-03; each listed against its row in Section 13 |

## 4. Frontend Verification

| Item | Check | Planned evidence class | FCTM rows |
|---|---|---|---|
| VC-FE-01 | Capability-driven UI renders kernel-reported capabilities only (`RS-07`); every UI-hidden action is also denied by the backend. | `UNIT`, `RT`, `DB` | `21-§4-1`, `21-§4-3`, `21-§20-3`, `21-§23-1`, `22-§6-1`, `17-§13-1`, `17-§13-3`, `17-§14-1`, `17-§14-7`, `17-§16-1`, `17-§22-10a`, `BP-§10.1-1` |
| VC-FE-02 | Denial contract in the UI (`RS-06`, `NP-27`). | `UNIT`, `RT` | `21-§20-1`, `21-§20-2`, `21-§20-3`, `21-§20-4`, `21-§20-5`, `21-§23-7`, `21-§24-12` |
| VC-FE-03 | Explicit active-business selection; missing or foreign selection denied (`RS-03`, `NP-06`). | `UNIT`, `RT` | `21-§5-2`, `21-§6-7`, `21-§15-1`, `21-§15-3`, `BP-§10.1-2`, `BP-§10.1-6` |
| VC-FE-04 | Authority-aware first run and `returnTo` allowlist (`RS-08`, `NP-46`). | `UNIT`, `RT` | `21-§6-7`, `21-§15-1`, `20-§16-1`, `20-§16-4` |
| VC-FE-05 | Product & Price Master in context; `/catalog`, `/catalog/$productId`, `/catalog/import` resolve (`RS-13`). | `RT`, `REG` | `7-§15-10`, `BP-§10.1-11`, `BP-§10.1-12`, `BP-§10.1-13`, `BP-§7-1`, `BP-§7-2`, `BP-§7-3`, `BP-§7-5` |
| VC-FE-06 | Stable test identifiers on the permission surface this mission adds. | `UNIT` | `17-§16-1`, `17-§22-10a` |

### 4.1 Named Runtime Scenarios

Each experience row has at least one named runtime scenario. Every scenario is a verification procedure for existing acceptance lines and Blueprint Section 9 expectations. None is a new Founder Runtime Verification Scenario, and none adds behaviour. Where the consuming surface belongs to a later mission, the scenario runs on a labelled harness and claims nothing for that mission.

| Scenario | Name | Source anchor | Planned evidence class | FCTM rows |
|---|---|---|---|---|
| RS-01 | Founder Scenario A: bounded delegation of a contextual product, price and inventory view | Blueprint section 15, Founder Runtime Verification Scenario A | `FRT`, `RT`, `DB` | `21-§4-2`, `21-§23-2`, `21-§24-3`, `17-§13-2`, `17-§22-2`, `7-§10-2`, `BP-§10.1-3`, `BP-§10.1-4`, `BP-§10.1-11` |
| RS-02 | Founder Scenario B: revocation between preview and commit blocks the commit | Blueprint section 15, Founder Runtime Verification Scenario B | `FRT`, `RT`, `CONC` | `21-§17`, `21-§18-5`, `21-§24-8`, `22-§13-4`, `22-§13-5`, `22-§29-7`, `BP-§10.1-5` |
| RS-03 | F-02: one person, two businesses, one unambiguous active business | Blueprint section 15, Stage 6 supplemental acceptance F-02 | `RT`, `DB` | `21-§5-2`, `21-§6-7`, `21-§15-1`, `21-§15-3`, `BP-§10.1-2`, `BP-§10.1-6` |
| RS-04 | F-03: Reference Cost and margin individually delegable, UI and backend | Blueprint section 15, Stage 6 supplemental acceptance F-03; Founder Decision Record 09 | `RT`, `DB` | `21-§5-4`, `21-§24-3`, `17-§18-2`, `17-§21-4`, `17-§22-2` |
| RS-05 | F-04(c): revocation during a multi-row import shows completed and remaining counts and guides a duplicate-free completion | Blueprint section 15, Stage 6 supplemental acceptance F-04(c) | `RT`, `CONC` | `21-§17`, `22-§13-1`, `22-§13-2`, `22-§15` |
| RS-06 | Denial experience: calm, non-leaking, next step where useful, normal operation elsewhere | Blueprint section 9 bullet 4; section 15 Privacy, Dignity and Denial Behavior | `RT`, `UNIT` | `21-§20-1`, `21-§20-2`, `21-§20-3`, `21-§20-4`, `21-§20-5`, `21-§23-7`, `21-§24-12` |
| RS-07 | Capability-driven UI: Owner visibly highest authority; Manager and Employee bounded; UI hiding never replaces backend denial | Blueprint section 9 bullets 1 and 2; section 15 Authority Model | `RT`, `UNIT`, `DB` | `21-§4-1`, `21-§4-3`, `21-§23-1`, `22-§6-1`, `17-§13-1`, `17-§13-3`, `17-§14-1`, `17-§14-7`, `17-§16-1`, `17-§22-10a`, `BP-§10.1-1` |
| RS-08 | Authority-aware first run: memberships and invitations shown before any first-business creation | Blueprint section 15 F-02 and FA-13; EIS section 13 | `RT`, `UNIT` | `20-§16-1`, `20-§16-4` |
| RS-09 | Invitation and staff setup: explicit capability assignment, no Owner intelligence by default | Blueprint section 9 bullet 2; Contract 20 section 16 rows | `RT`, `DB` | `20-§16-1`, `20-§16-2`, `20-§16-3`, `20-§23-11` |
| RS-10 | Employee bounded surfaces: approved transaction entry without Owner analytics; own-record access through labelled fixtures | Blueprint section 15 Employee Self-Service; Contract 21 scenarios 4 and 5 | `RT`, `HARNESS`, `DB` | `21-§10-1`, `21-§10-2`, `21-§10-3`, `21-§10-4`, `21-§10-5`, `21-§10-6`, `21-§11-2`, `21-§23-3`, `21-§24-4`, `21-§24-5`, `17-§22-3` |
| RS-11 | Owner intelligence stays protected, including through natural-language prompts (labelled harness for conversation) | Blueprint section 9 bullet 3; Contract 21 scenario 6 | `RT`, `HARNESS` | `21-§9`, `21-§24-6`, `20-§16-3`, `17-§18-2`, `17-§18-4`, `17-§21-4` |
| RS-12 | Cross-business isolation in the UI: no see, search, export or modify of another business | Blueprint section 9 bullet 5 | `RT`, `DB` | `21-§24-1`, `21-§24-2`, `22-§23-2`, `17-§18-1`, `17-§22-9`, `7-§15-12` |
| RS-13 | Product & Price Master in context: entry under business operations, `/catalog` routes resolve, no data loss | Blueprint section 9 bullet 7; section 15 Product & Price Master Reclassification | `RT`, `REG` | `7-§15-10`, `BP-§10.1-11`, `BP-§10.1-12`, `BP-§10.1-13`, `BP-§7-1`, `BP-§7-2`, `BP-§7-3`, `BP-§7-5` |
| RS-14 | External participant boundary (labelled harness; no participant surface built) | Blueprint section 15 External Participants; Contract 21 scenario 7 | `HARNESS` | `21-§13-1`, `21-§13-2`, `21-§13-3`, `21-§24-7`, `17-§13-4` |
| RS-15 | Support access consent, scope, expiry and revocation (labelled harness for the operator side) | Blueprint section 15 Auditability; Contract 21 scenario 10 | `HARNESS`, `AUDIT` | `21-§14-2`, `21-§24-10` |

## 5. Database Verification

| Item | Check | Planned evidence class | FCTM rows |
|---|---|---|---|
| VC-DB-01 | `persons` backfill covers every referenced Auth user; Owner-membership backfill reconciles one-to-one with `owner_id`. | `DB`, `INV` | `21-§4-1`, `21-§5-1`, `22-§5-2`, `22-§5-3`, `22-§5-4`, `22-§33-2`, `22-§33-23`, `20-§16-1`, `BP-§10.1-2`, `BP-§10.1-13` |
| VC-DB-02 | Exactly one active Owner membership per business at all times (`NP-36`). | `DB`, `CONC` | 19 rows via EC-ID-02, NP-36; each listed against its row in Section 13 |
| VC-DB-03 | Business-scoped references use composite `(business_id, id)` keys (`NP-03`). | `INV`, `DB` | `21-§6-6`, `21-§6-7`, `22-§5-8`, `22-§5-9` |
| VC-DB-04 | ESC-1 migration and backfill reconcile with zero orphans at each step (EIS Section 18.3 item 10). | `INV`, `DB` | `22-§20-1`, `22-§20-4`, `BP-§10.1-13` |
| VC-DB-05 | Post-migration foreign-key, trigger and delete-guard inventory matches the target (`NP-33`). | `INV` | `22-§20-2`, `22-§29-11`, `22-§29-12`, `22-§33-18`, `22-§33-20`, `22-§33-22`, `22-§33-36`, `22-§33-39` |
| VC-DB-06 | Provenance constraints widened without rewriting existing rows. | `DB`, `INV` | `21-§19-8`, `22-§14-2`, `22-§14-3`, `22-§14-9` |
| VC-DB-07 | `authority_events` is append-only (`NP-45`). | `DB`, `AUDIT` | `21-§14-6`, `21-§19-1`, `21-§19-2`, `21-§19-3`, `21-§19-4`, `21-§19-5`, `21-§19-6`, `21-§19-7`, `21-§19-8`, `22-§14-5`, `22-§29-12` |
| VC-DB-08 | No entitlement or subscription change touches schema (`NP-41`). | `INV`, `REPO` | `21-§16-2`, `21-§23-6`, `22-§20-1`, `22-§20-3`, `22-§20-4`, `22-§29-11` |

## 6. Security and RLS Verification

| Item | Check | Planned evidence class | FCTM rows |
|---|---|---|---|
| VC-SEC-01 | The source-complete authority-surface inventory exists before any policy or function replacement. | `INV` | 16 rows via EC-ISO-01, EC-ISO-04; each listed against its row in Section 13 |
| VC-SEC-02 | Effective-access inventory (`NP-28`) for every protected object and `SECURITY DEFINER` function. Any production claim also needs live evidence (SEC-EIS10-13; G-6/T4 stays `UNVERIFIED` until then). | `INV`, `PROV` | `21-§7`, `BP-§10.1-7`, `BP-§10.1-8` |
| VC-SEC-03 | SEC-EIS10-12: every direct, batch, list, search, import-preview, export, dashboard, aggregate, cache and `SECURITY DEFINER` response goes through the projection; the unconditional cost return is removed (`NP-14`). | `DB` | `21-§4-2`, `21-§5-4`, `21-§24-3`, `17-§13-2`, `17-§18-2`, `17-§21-4`, `17-§22-2`, `7-§10-2`, `BP-§10.1-3` |
| VC-SEC-04 | SEC-EIS10-14: provider Auth-deletion, backup, PITR and legal-hold facts are collected before any deletion-runtime claim; a local schema test is never proof of them. | `PROV`, `DOC` | 15 rows via EC-ESC-05, EC-LEG-03, EC-DEL-01; each listed against its row in Section 13 |
| VC-SEC-05 | ESC-1 negative paths, EIS Section 18.3 items 1 to 10 (`NP-29` to `NP-35`, `VC-DB-04`). `NP-35` runs only in an authorized test or migration context with synthetic hold fixtures (MC-167 PQ-2). | `DB`, `INV` | 16 rows via EC-TST-03, NP-29, NP-30, NP-31, NP-32, NP-33, NP-34, NP-35; each listed against its row in Section 13 |
| VC-SEC-06 | Independent Security review of the implementation of authority, RLS, grants, migrations and concurrency. | `DOC` | Process item; no FCTM row; adds no behaviour |

### 6.1 Named Negative-Path Checks

Each permission, isolation and denial row has at least one named negative-path check. Suites are those of EIS Section 18.1.

| Check | Name | Realizes | EIS 18.1 suite | Planned evidence class | FCTM rows |
|---|---|---|---|---|---|
| NP-01 | Cross-business read denied on every table family, including Owner-of-A/Manager-of-B | EIS-ISO-01 | Multi-business isolation | `DB` | `21-§5-2`, `21-§6-1`, `21-§15-3`, `21-§21-4`, `21-§24-1`, `21-§24-2`, `22-§5-1`, `22-§6-5`, `22-§23-2`, `22-§23-7`, `22-§29-3`, `17-§14-3`, `17-§18-1`, `17-§22-9`, `7-§15-12`, `BP-§10.1-6` |
| NP-02 | Cross-business write denied on every table family and command | EIS-ISO-01, EIS-ISO-02 | Multi-business isolation | `DB` | `21-§5-2`, `21-§6-2`, `21-§24-2`, `22-§6-5`, `22-§29-3`, `17-§14-3`, `17-§22-9`, `7-§15-12` |
| NP-03 | Cross-business reference or integration mapping rejected; caller-supplied scope ignored | EIS-ISO-07, EIS-ID-05 | Multi-business isolation | `DB`, `INV` | `21-§5-5`, `21-§6-6`, `22-§5-8`, `22-§5-9`, `22-§6-7`, `22-§29-3` |
| NP-04 | Cross-business file, document and export access denied | EIS-ISO-05 | Multi-business isolation | `DB` | `21-§6-4`, `21-§6-5`, `22-§6-8`, `22-§29-3` |
| NP-05 | Cross-business conversation or AI context denied before any read | EIS-ISO-06 | Multi-business isolation | `HARNESS` | `21-§6-3`, `21-§8`, `22-§6-3`, `22-§29-3` |
| NP-06 | Missing, foreign or client-only `business_id` denied; no single-ownership inference | EIS-ID-06 | Active business | `DB`, `UNIT` | `21-§5-2`, `21-§6-7`, `BP-§10.1-2`, `BP-§10.1-6` |
| NP-07 | Authenticated session alone grants no membership, Owner role, cross-business access, entitlement or admin privilege | EIS-KER-02 | Verified principals | `DB` | `21-§5-1`, `21-§15-1`, `21-§15-2`, `21-§15-3`, `21-§15-4`, `21-§15-5`, `17-§14-2` |
| NP-08 | Unverified principal rejected: request-body or claim-supplied actor, `service_role` possession, unbound participant, `/super-admin` | EIS-KER-02 | Verified principals | `DB` | `21-§4-4`, `21-§4-5`, `21-§4-6`, `21-§5-1`, `21-§8`, `21-§11-1`, `21-§15-5`, `21-§23-5`, `22-§5-5`, `22-§5-6`, `22-§5-7`, `22-§28-9` |
| NP-09 | Capability not held (no role default and no live, unexpired, unrevoked grant) denied; Manager is never Owner-equivalent | EIS-KER-03, EIS-KER-04 | Role matrix | `DB` | `21-§4-1`, `21-§4-2`, `21-§4-3`, `21-§5-3`, `21-§5-4`, `21-§5-9`, `21-§23-2`, `21-§24-3`, `22-§5-3`, `22-§5-4`, `22-§14-6`, `22-§23-5`, `20-§16-2`, `17-§13-1`, `17-§13-2`, `17-§13-3`, `17-§14-4`, `17-§22-2`, `7-§10-1`, `7-§10-2`, `7-§10-3`, `7-§15-10`, `BP-§10.1-1`, `BP-§10.1-3`, `BP-§10.1-4`, `BP-§10.1-11` |
| NP-10 | Create permission does not imply read-all, edit-all, export or analytics, including through `RETURNING` | EIS-KER-08, EIS-ISO-02 | Role matrix | `DB` | `21-§5-5`, `21-§5-6`, `21-§11-2`, `21-§23-3`, `21-§24-4`, `17-§14-6` |
| NP-11 | Entitlement-gated capability denied without entitlement, and without role even with entitlement | EIS-KER-05 | Kernel unit and DB suite | `DB` | `21-§5-7`, `21-§5-10`, `21-§16-1`, `21-§24-9`, `17-§14-5`, `BP-§10.1-10` |
| NP-12 | Capability denied on a channel not permitted for it; natural language cannot widen access | EIS-KER-06 | Kernel unit and DB suite | `DB`, `HARNESS` | `21-§5-8`, `21-§8`, `21-§23-5`, `21-§24-6`, `22-§6-2`, `22-§6-9`, `22-§29-3` |
| NP-13 | Owner intelligence (Ask CFO, Owner-wide financial intelligence) denied to Manager and Employee by default and through prompts | EIS-KER-07 | Role matrix | `DB`, `HARNESS` | `21-§9`, `21-§10-6`, `21-§24-6`, `22-§6-9`, `20-§16-3`, `20-§23-11`, `17-§18-2`, `17-§18-4`, `17-§21-4` |
| NP-14 | Reference Cost absent without `catalog.cost.read`; margin or margin-derived output absent without `catalog.margin.read`; one never implies the other, on every read path | EIS-PPM-03, EIS-PPM-04 | Financial-field disclosure | `DB` | `21-§5-4`, `21-§24-3`, `17-§13-2`, `17-§18-2`, `17-§21-4`, `17-§22-2`, `7-§10-2`, `BP-§10.1-3` |
| NP-15 | Direct client DML on protected tables rejected; a UI change never widens backend access | EIS-ISO-02, EIS-UX-02 | Role matrix | `DB`, `INV` | `21-§7`, `21-§11-1`, `21-§23-1`, `22-§6-1`, `17-§14-1`, `17-§14-7` |
| NP-16 | Authority revoked or changed after preview: commit returns a committed rejection with no protected write, for every authority fact type | EIS-CNF-02, EIS-KER-09 | Revocation and concurrency | `CONC` | `21-§12-5`, `21-§17`, `21-§24-8`, `22-§13-4`, `22-§29-7`, `BP-§10.1-5` |
| NP-17 | Confirmation for another actor, business, action or target, after expiry, on a changed fingerprint, already consumed, or generic, is rejected | EIS-CNF-01 | Revocation and concurrency | `DB` | `21-§18-1`, `21-§18-2`, `21-§18-3`, `21-§18-4`, `21-§18-5`, `21-§18-6`, `22-§13-1`, `22-§13-2`, `22-§13-3`, `22-§13-5`, `22-§14-7`, `22-§29-7` |
| NP-18 | Concurrent consumption of one confirmation binding: exactly one commit writes; the contender receives the replay outcome | EIS-CNF-01 | Revocation and concurrency | `CONC` | `21-§18-6`, `22-§13-3`, `22-§14-7` |
| NP-19 | Import revocation at each of the five EIS section 10.3 points: no duplicate, no continuation, exact counts | EIS-CNF-05 | Revocation and concurrency | `CONC` | `21-§17`, `22-§15` |
| NP-20 | Idempotent replay returns the stored outcome and writes nothing twice | EIS-CNF-04 | Revocation and concurrency | `DB`, `CONC` | `22-§15`, `22-§29-8` |
| NP-21 | Automation run denied when disabled, outside scope, target or limits, without entitlement, or after grantor revocation | EIS-AUT-01 | Revocation and concurrency | `HARNESS`, `CONC` | `21-§12-1`, `21-§12-2`, `21-§12-3`, `21-§12-4`, `21-§12-5`, `21-§19-8`, `21-§24-11`, `22-§6-6`, `BP-§10.1-4` |
| NP-22 | Support access denied without consent, outside modules, after expiry or after revocation; no standing platform read of merchant data | EIS-SUP-01 | Verified principals | `DB`, `HARNESS` | `21-§5-9`, `21-§14-1`, `21-§14-2`, `21-§14-3`, `21-§14-4`, `21-§14-5`, `21-§14-6`, `21-§14-7`, `21-§19-7`, `21-§21-3`, `21-§23-4`, `21-§24-10`, `22-§23-3`, `22-§23-4` |
| NP-23 | External participant denied dashboard capability and other objects | EIS-EXT-02, EIS-ID-03 | Role matrix | `DB`, `HARNESS` | `21-§4-4`, `21-§4-5`, `21-§4-6`, `21-§13-1`, `21-§13-2`, `21-§13-3`, `21-§24-7`, `22-§5-5`, `22-§5-6`, `22-§5-7`, `17-§13-4`, `7-§10-4` |
| NP-24 | Employee self-service denied unrelated staff and Owner intelligence; own-record access permitted | EIS-EXT-01 | Role matrix | `DB`, `HARNESS` | `21-§10-1`, `21-§10-2`, `21-§10-3`, `21-§10-4`, `21-§10-5`, `21-§10-6`, `21-§23-3`, `21-§24-5`, `22-§23-5`, `17-§22-3` |
| NP-25 | Privileged service-role path rejected when unbound or when business or actor is derived from request values | EIS-ISO-04 | Privileged paths | `DB`, `INV` | `21-§15-5`, `22-§6-4`, `22-§6-7` |
| NP-26 | Denial row committed after a committed rejection, after an aborted transaction and on direct authenticated RPC; server-boundary-only families not executable by `authenticated` | EIS-AUD-02 | Denial audit | `DB`, `AUDIT` | `21-§19-6`, `21-§20-5` |
| NP-27 | Denial response leaks no protected data, makes no accusation, and routine denial raises no escalation | EIS-UX-01 | Denial audit | `UNIT`, `RT` | `21-§20-1`, `21-§20-2`, `21-§20-3`, `21-§20-4`, `21-§20-5`, `21-§23-7`, `21-§24-12` |
| NP-28 | Effective access: no `PUBLIC` or unapproved `anon` privilege on protected objects; every definer function hardened | EIS-ISO-03, EIS-ISO-10 | Effective access inventory | `INV` | `21-§7`, `BP-§10.1-7`, `BP-§10.1-8` |
| NP-29 | `authenticated` `DELETE` on `businesses` rejected (EIS section 18.3 item 1) | EIS-ESC-01 | ESC-1 negative paths | `DB` | `21-§23-6`, `22-§20-2`, `22-§33-20`, `22-§33-22`, `22-§33-39` |
| NP-30 | `service_role` `DELETE` on `businesses` outside the lifecycle role rejected by the guard (item 2) | EIS-ESC-01 | ESC-1 negative paths | `DB` | `22-§20-2`, `22-§33-20`, `22-§33-22`, `22-§33-39` |
| NP-31 | Deleting an Auth user linked to a person rejected by `RESTRICT`; after governed unlink, all history intact (items 3 and 4) | EIS-ESC-05, EIS-ESC-03 | ESC-1 negative paths | `DB` | `22-§20-2`, `22-§33-8`, `22-§33-17`, `22-§33-18`, `22-§33-19`, `22-§33-22`, `22-§33-39` |
| NP-32 | `DELETE` on `transactions` and `transaction_correction_events` rejected outside the lifecycle role (item 6) | EIS-ESC-04 | ESC-1 negative paths | `DB` | `22-§14-5`, `22-§20-2`, `22-§29-12`, `22-§33-17`, `22-§33-36` |
| NP-33 | No `ON DELETE CASCADE` from `auth.users` or `persons`, or from `businesses` into a retained class (item 7) | EIS-ESC-02, EIS-ESC-03, EIS-ESC-04 | ESC-1 negative paths | `INV` | `22-§20-2`, `22-§33-18`, `22-§33-20`, `22-§33-22`, `22-§33-36`, `22-§33-39` |
| NP-34 | Governed business deletion over a mixed record set leaves a tombstone; no action, reactivation or selector appearance (item 8) | EIS-ESC-06 | ESC-1 negative paths | `DB`, `HARNESS` | `22-§20-2`, `22-§33-24` |
| NP-35 | Records under a technical hold state survive governed deletion with stable attribution until release (item 9); executable only in an authorized test or migration context with synthetic hold fixtures | EIS-ESC-06, EIS-LEG-02 | ESC-1 negative paths | `DB` | `22-§20-2`, `22-§33-24`, `22-§33-26` |
| NP-36 | Active Owner membership cannot be removed through generic membership APIs by any principal | EIS-FRL-03, EIS-ID-02 | Transfer and Owner invariant | `DB` | `21-§4-1`, `21-§5-2`, `22-§5-2`, `22-§33-5`, `20-§16-1` |
| NP-37 | Transfer completion refused without both distinct verified approvals, on changed terms, after expiry, or after an authority change | EIS-FRL-04 | Transfer and Owner invariant | `DB`, `CONC`, `HARNESS` | `21-§4-1`, `21-§18-1`, `21-§18-2`, `22-§33-6`, `22-§33-32`, `22-§33-34` |
| NP-38 | Former Owner denied on every surface after transfer; no residual membership, capability or exemption | EIS-FRL-04, EIS-KER-09 | Transfer and Owner invariant | `DB`, `HARNESS` | `22-§33-18` |
| NP-39 | Historical or surviving attribution grants no access, membership or authority | EIS-DEL-04 | Transfer and Owner invariant | `DB` | `22-§33-15`, `22-§33-28`, `22-§33-37` |
| NP-40 | Identity-deletion eligibility refusals: owned business, remaining membership, pending transfer, undispositioned obligation; request, pause, schedule, hidden or ticket states are not proof | EIS-DEL-01 | Identity deletion and retained history | `HARNESS`, `DB` | `22-§33-4`, `22-§33-5`, `22-§33-6`, `22-§33-8`, `22-§33-10`, `22-§33-11`, `22-§33-12`, `22-§33-32`, `22-§33-34` |
| NP-41 | No entitlement or subscription change creates, drops or mutates schema | EIS-GOV-03, EIS-KER-05 | Effective access inventory | `INV`, `REPO` | `21-§16-2`, `21-§23-6`, `22-§20-1`, `22-§20-3`, `22-§20-4`, `22-§29-11` |
| NP-42 | Must-not-appear inventory: no parallel permission engine, identity silo, surveillance, scoring, data sale, universal retention period or duplicate engine | EIS-GOV-02, EIS-AUD-05, EIS-ISO-09 | Effective access inventory | `REPO`, `INV` | `21-§21-1`, `21-§21-2`, `21-§21-4`, `21-§21-5`, `21-§22`, `22-§6-10`, `22-§16-2`, `22-§23-1`, `22-§23-6`, `22-§23-7`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§28-7`, `22-§28-8`, `22-§28-9`, `22-§28-10`, `22-§29-6`, `22-§33-16`, `22-§33-29`, `7-§7`, `7-§9`, `7-§12`, `BP-§7-4` |
| NP-43 | Kernel always denies a `deleted` person or a `deleted` (tombstoned) business | EIS-KER-01, EIS-DEL-04 | Kernel unit and DB suite | `DB` | `21-§5-10`, `22-§5-1` |
| NP-44 | Kernel, feature or provider error fails the one operation closed and narrowly | EIS-CNF-06 | Kernel unit and DB suite | `DB` | `22-§17`, `22-§19`, `22-§29-10` |
| NP-45 | `authority_events` rejects update and delete for every role; an authority change without its event is a failure | EIS-AUD-01 | Denial audit | `DB`, `AUDIT` | `21-§14-6`, `21-§19-1`, `21-§19-2`, `21-§19-3`, `21-§19-4`, `21-§19-5`, `21-§19-6`, `21-§19-7`, `21-§19-8`, `22-§14-5`, `22-§29-12` |
| NP-46 | Invited person never silently made Owner of a new empty business; `returnTo` outside the allowlist rejected | EIS-FRL-02 | Active business | `DB`, `UNIT` | `20-§16-1`, `20-§16-4` |

## 7. Validation Verification

| Item | Check | Planned evidence class | FCTM rows |
|---|---|---|---|
| VC-VAL-01 | A client-supplied `business_id`, actor or capability is never trusted alone (`NP-06`, `NP-08`). | `DB` | 16 rows via NP-06, NP-08; each listed against its row in Section 13 |
| VC-VAL-02 | `returnTo` is validated against an allowlist of internal routes (`NP-46`). | `UNIT` | `20-§16-1`, `20-§16-4` |
| VC-VAL-03 | Confirmation fingerprint, actor, business, action, target and expiry checks (`NP-17`). | `DB` | `21-§18-1`, `21-§18-2`, `21-§18-3`, `21-§18-4`, `21-§18-5`, `21-§18-6`, `22-§13-1`, `22-§13-2`, `22-§13-3`, `22-§13-5`, `22-§14-7`, `22-§29-7` |
| VC-VAL-04 | Material or uncertain imports are previewed server-authoritatively before any write. | `DB`, `RT` | `22-§13-1`, `22-§13-2` |

## 8. Concurrency and Idempotency Verification

| Item | Check | Planned evidence class | FCTM rows |
|---|---|---|---|
| VC-CONC-01 | Revocation of every authority fact type in EIS-CNF-02 between preview and commit (`NP-16`). | `CONC` | `21-§12-5`, `21-§17`, `21-§24-8`, `22-§13-4`, `22-§29-7`, `BP-§10.1-5` |
| VC-CONC-02 | Lock-order determinism with several person rows; business lifecycle transition racing a protected operation; transfer completion racing a change to either Owner person row. | `CONC` | 16 rows via EC-CNF-02, EC-FRL-04, EC-ESC-06; each listed against its row in Section 13 |
| VC-CONC-03 | Concurrent consumption of one confirmation binding (`NP-18`). | `CONC` | `21-§18-6`, `22-§13-3`, `22-§14-7` |
| VC-CONC-04 | Import revocation at the five EIS Section 10.3 points (`NP-19`). | `CONC` | `21-§17`, `22-§15`, `BP-§10.1-5` |
| VC-CONC-05 | Idempotent replay (`NP-20`). | `DB`, `CONC` | `22-§15`, `22-§29-8` |
| VC-CONC-06 | Automation re-evaluation on every run (`NP-21`). | `HARNESS`, `CONC` | `21-§12-1`, `21-§12-2`, `21-§12-3`, `21-§12-4`, `21-§12-5`, `21-§19-8`, `21-§24-11`, `22-§6-6`, `22-§28-4`, `BP-§10.1-4` |
| VC-CONC-07 | Transfer completion keeps exactly one active Owner (`NP-37`). | `CONC` | `21-§4-1`, `21-§18-1`, `21-§18-2`, `22-§33-4`, `22-§33-6`, `22-§33-18`, `22-§33-32`, `22-§33-34` |

## 9. Performance Verification

| Item | Check | Planned evidence class | FCTM rows |
|---|---|---|---|
| VC-PERF-01 | Kernel helpers are `STABLE`, use the indexed membership lookup and are timed in Full Assurance with no list or search regression. | `DB` | `22-§21` |
| VC-PERF-02 | Serialization contention on the business authority-state row is measured in the concurrency tier. | `CONC` | `21-§17`, `21-§24-8`, `22-§13-4`, `22-§29-7`, `BP-§10.1-5` |

## 10. Automated Testing Verification

| Item | Check | Planned evidence class | FCTM rows |
|---|---|---|---|
| VC-TEST-01 | Kernel unit and DB suite (EIS Section 18.1). | `DB` | 23 rows via EC-KER-01, EC-TST-01; each listed against its row in Section 13 |
| VC-TEST-02 | Verified-principals suite. | `DB` | `21-§8`, `21-§15-1`, `21-§15-2`, `21-§15-3`, `21-§15-4`, `21-§15-5`, `21-§23-5`, `22-§28-9` |
| VC-TEST-03 | Role-matrix suite across every table family and command. | `DB` | 38 rows via NP-09, NP-10, NP-15; each listed against its row in Section 13 |
| VC-TEST-04 | Multi-business isolation suite. | `DB` | 25 rows via NP-01, NP-02, NP-03, NP-04; each listed against its row in Section 13 |
| VC-TEST-05 | Active-business suite. | `DB`, `UNIT` | `21-§6-7`, `21-§15-1`, `21-§15-3`, `BP-§10.1-6` |
| VC-TEST-06 | Revocation and concurrency suite. | `CONC` | `21-§17`, `21-§24-8`, `22-§13-4`, `22-§15`, `22-§29-7`, `BP-§10.1-5` |
| VC-TEST-07 | Financial-field disclosure suite. | `DB` | `21-§4-2`, `21-§5-4`, `21-§24-3`, `17-§13-2`, `17-§18-2`, `17-§21-4`, `17-§22-2`, `7-§10-2`, `BP-§10.1-3` |
| VC-TEST-08 | Privileged-paths suite. | `DB` | `21-§6-6`, `21-§15-5`, `22-§6-4`, `22-§6-7` |
| VC-TEST-09 | Denial-audit suite. | `DB`, `AUDIT` | `21-§19-6`, `21-§20-5`, `21-§23-7` |
| VC-TEST-10 | Transfer and Owner-invariant suite (FA-1 to FA-11, labelled harness where SB-P-1.19 surfaces are absent). | `DB`, `HARNESS` | `21-§4-1`, `21-§5-2`, `21-§17`, `21-§18-1`, `21-§18-2`, `22-§33-4`, `22-§33-5`, `22-§33-6`, `22-§33-18`, `22-§33-32`, `22-§33-34` |
| VC-TEST-11 | Identity deletion and retained history (Contract 22 Section 33.8, labelled fixtures); `VERIFICATION — RUNTIME GATED`: executed once the identity-deletion runtime is authorized. The rows stay `IN SCOPE`. | `DB`, `HARNESS` | `22-§33-31`, `22-§33-32`, `22-§33-33`, `22-§33-34`, `22-§33-35`, `22-§33-36`, `22-§33-37`, `22-§33-38`, `22-§33-39` |
| VC-TEST-12 | Effective-access inventory test. | `INV` | `21-§7`, `22-§20-2`, `22-§33-39`, `BP-§10.1-7`, `BP-§10.1-8` |
| VC-TEST-13 | Executable acceptance scenarios (Contract 21 scenarios 1 to 12, Contract 22, 17 and 7 scenarios, Founder Scenarios A and B, F-04(c)). | `DB`, `HARNESS` | 27 rows via EC-TST-02; each listed against its row in Section 13 |
| VC-TEST-14 | Existing suites (catalog import 9, inventory 17, parser lease 2) green at every checkpoint, re-run with non-Owner fixtures where they touch authority. | `REG` | `BP-§10.1-9`, `BP-§10.1-13` |
| VC-TEST-15 | Rows `IN SCOPE — PARTIALLY DEMONSTRATED` in the FCTM: the existing partial behaviour is re-verified by regression, never assumed, and the remainder is built and verified. | `REG`, `DB` | 32 rows via PARTIAL; each listed against its row in Section 13 |

## 11. Evidence Verification

| Item | Check | Planned evidence class | FCTM rows |
|---|---|---|---|
| VC-EVD-01 | Evidence index under `docs/implementation/SB-P-1.12/evidence/` per package template Section 12, naming the checklist item and FCTM row each artifact supports. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-EVD-02 | Each artifact meets the provenance rules of package template Section 13 for its class. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-EVD-03 | Separately authorized G-6 evidence exists and is dispositioned before WS-B reliance. | `PROV` | `21-§6-4`, `BP-§10.1-7`, `BP-§10.1-8` |
| VC-EVD-04 | Separately authorized G-7 evidence exists before relying on storage or provider behaviour. | `PROV` | `21-§6-4`, `21-§6-5`, `22-§6-8`, `22-§20-2`, `22-§33-22`, `22-§33-30`, `22-§33-39` |
| VC-EVD-05 | Exact GitHub Actions state recorded for every reviewed head; a missing run or status is recorded as missing, never as a pass. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-EVD-06 | The `EC-ESC-07` evidence bundle is complete before any proposal to unblock `22-§20-2`; unblocking is a Mission Control decision. | `DB`, `INV`, `DOC` | `22-§20-2`, `22-§29-11`, `22-§29-12` |

## 12. Completion Verification

| Item | Check | Planned evidence class | FCTM rows |
|---|---|---|---|
| VC-CMP-01 | Builder Completion Report gives a status per assigned FCTM row; the builder claims no demonstration. | `REPO` | 267 rows via ALL; each listed against its row in Section 13 |
| VC-CMP-02 | Combined cross-mission outcomes (R-1 with FA-11; FA-21 exits) are not claimed before both missions' evidence exists. | `DOC` | `21-§5-10`, `22-§20-1`, `22-§20-2`, `22-§33-4`, `22-§33-11`, `22-§33-24`, `22-§33-32` |
| VC-CMP-03 | ESC-1, `22-§20-2`, G-6/T4, legal deferral and runtime gates are stated unchanged in every report. | `DOC` | Process item; no FCTM row; adds no behaviour |
| VC-CMP-04 | No row is reported `DEMONSTRATED` without a Stage 19 `PASS` for that row. | `DOC` | 267 rows via ALL; each listed against its row in Section 13 |

## 13. Product Truth Coverage and Drift Verification

### 13.1 Classification rules

- **Permission, isolation and denial row:** every Contract 21 row; every row whose FCTM disposition is a negative or must-not-appear check; and every row realized by a kernel, isolation, participant, support, automation, denial-audit, denial-contract, confirmation, serialization, Owner-removal, transfer, ESC-1 containment, non-authorizing-attribution or catalog permission obligation (performance `EC-ISO-08` excluded). Each such row carries at least one named negative-path check. Further rows carry negative-path checks where one applies.
- **Experience row:** a row whose acceptance has a user-visible result under Blueprint Section 9 or a Blueprint Section 15 acceptance line. Each carries at least one named runtime scenario.
- **Planned evidence class:** the union of the classes of the row's obligations, negative-path checks and runtime scenarios.
- **Status:** the Blueprint Section 20.5 feasibility label (documentary, not evidence) plus any runtime gate. `BLOCKED` and `CONDITIONAL` rows stay `IN SCOPE`.

### 13.2 Coverage summary

| Measure | Value |
|---|---|
| `IN SCOPE` FCTM rows | 267 |
| Rows with a checklist item and planned evidence class | 267 of 267 |
| Rows missing a checklist item | 0 |
| Permission, isolation and denial rows (rule in 13.1) | 201; all 201 carry a named negative-path check |
| Rows carrying at least one named negative-path check | 226 |
| Experience rows | 85; all 85 carry a named runtime scenario |
| Named negative-path checks | 46, each used by at least one row |
| Named runtime scenarios | 15 |
| `ALREADY DEMONSTRATED` rows | 0 in the FCTM; no regression-only item is needed. Rows `IN SCOPE — PARTIALLY DEMONSTRATED` carry `VC-TEST-15` |
| Rows `BLOCKED` | 1 (`22-§20-2`), `IN SCOPE` |
| Rows `CONDITIONAL` | 87, `IN SCOPE` |
| Rows execution-gated (`RUNTIME NOT AUTHORIZED`) | 22, `IN SCOPE`; an execution gate, not a scope deferral |
| Behaviour-adding orphan items | 0 |

### 13.3 Drift and completeness checks to execute

| Item | Check | Planned evidence class | FCTM rows |
|---|---|---|---|
| VC-PT-01 | Every `IN SCOPE` row has an Engineering Contract obligation and a Section 13.4 item, by set difference against the FCTM. | `REPO` | 267 rows via ALL; each listed in Section 13.4 |
| VC-PT-02 | Each row's disposition, build commitment, commercial classification and mission assignment equal the locked FCTM. | `REPO` | 267 rows via ALL; each listed in Section 13.4 |
| VC-PT-03 | No obligation, checklist item, test or built behaviour lacks a row, except the recorded non-behavioural items. | `REPO`, `DOC` | 267 rows via ALL; each listed in Section 13.4 |
| VC-PT-04 | Every permission, isolation and denial row has a named negative-path item, and every experience row a named runtime scenario. | `REPO` | 218 rows; each listed in Section 13.4 |
| VC-PT-05 | The verifier takes its own obligation inventory from the source text and finds no numbered section, obligation or acceptance scenario without a row (Source 18 Section 3.2 item 6). | `DOC` | 267 rows via ALL; each listed in Section 13.4 |

### 13.4 Row-keyed checklist items

| Item | FCTM row | Obligations | Planned evidence class | Negative-path checks | Runtime scenarios | Status | Holds |
|---|---|---|---|---|---|---|---|
| VC-R-001 | `21-§4-1` | `EC-ID-02`, `EC-ID-04`, `EC-FRL-04` | `DB`, `CONC`, `HARNESS`, `INV`, `UNIT`, `RT` | NP-09, NP-36, NP-37 | RS-07 | CONDITIONAL | — |
| VC-R-002 | `21-§4-2` | `EC-ID-02`, `EC-KER-03`, `EC-KER-04`, `EC-PPM-03` | `DB`, `CONC`, `AUDIT`, `RT`, `FRT` | NP-09 | RS-01 | FEASIBLE | FDR-09, SEC-EIS10-12 |
| VC-R-003 | `21-§4-3` | `EC-ID-02`, `EC-KER-03` | `DB`, `CONC`, `UNIT`, `RT` | NP-09 | RS-07 | FEASIBLE | — |
| VC-R-004 | `21-§4-4` | `EC-ID-03` | `DB`, `HARNESS` | NP-08, NP-23 | — | FEASIBLE | — |
| VC-R-005 | `21-§4-5` | `EC-ID-03` | `DB`, `HARNESS` | NP-08, NP-23 | — | FEASIBLE | — |
| VC-R-006 | `21-§4-6` | `EC-ID-03` | `DB`, `HARNESS` | NP-08, NP-23 | — | FEASIBLE | — |
| VC-R-007 | `21-§5-1` | `EC-ID-01`, `EC-KER-01` | `DB`, `INV`, `REG` | NP-07, NP-08 | — | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-008 | `21-§5-2` | `EC-ID-02`, `EC-KER-01`, `EC-FRL-03` | `DB`, `CONC`, `UNIT`, `RT` | NP-01, NP-02, NP-06, NP-36 | RS-03 | CONDITIONAL | — |
| VC-R-009 | `21-§5-3` | `EC-ID-02`, `EC-KER-01` | `DB`, `CONC` | NP-09 | — | FEASIBLE | — |
| VC-R-010 | `21-§5-4` | `EC-KER-01`, `EC-KER-04`, `EC-PPM-03`, `EC-PPM-04` | `DB`, `AUDIT`, `RT` | NP-09, NP-14 | RS-04 | CONDITIONAL | FDR-09, SEC-EIS10-12 |
| VC-R-011 | `21-§5-5` | `EC-KER-01`, `EC-KER-08` | `DB`, `INV`, `REG` | NP-03, NP-10 | — | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-012 | `21-§5-6` | `EC-KER-01`, `EC-KER-08` | `DB` | NP-10 | — | FEASIBLE | — |
| VC-R-013 | `21-§5-7` | `EC-KER-01`, `EC-KER-05` | `DB` | NP-11 | — | FEASIBLE | — |
| VC-R-014 | `21-§5-8` | `EC-KER-01`, `EC-KER-06` | `DB`, `HARNESS` | NP-12 | — | FEASIBLE | — |
| VC-R-015 | `21-§5-9` | `EC-KER-01` | `DB`, `HARNESS` | NP-09, NP-22 | — | FEASIBLE | — |
| VC-R-016 | `21-§5-10` | `EC-KER-01`, `EC-KER-05`, `EC-FRL-05` | `DB`, `HARNESS` | NP-11, NP-43 | — | CONDITIONAL | — |
| VC-R-017 | `21-§6-1` | `EC-ISO-01` | `DB`, `INV`, `REG` | NP-01 | — | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| VC-R-018 | `21-§6-2` | `EC-ISO-01` | `DB`, `INV`, `REG` | NP-02 | — | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| VC-R-019 | `21-§6-3` | `EC-ISO-06` | `HARNESS` | NP-05 | — | FEASIBLE | — |
| VC-R-020 | `21-§6-4` | `EC-ISO-05`, `EC-ENV-01` | `DB`, `REG`, `PROV` | NP-04 | — | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4, G-7, SEC-EIS10-13 |
| VC-R-021 | `21-§6-5` | `EC-ISO-05` | `DB`, `PROV` | NP-04 | — | FEASIBLE | G-7 |
| VC-R-022 | `21-§6-6` | `EC-ID-05`, `EC-ISO-04`, `EC-ISO-07` | `DB`, `INV` | NP-03 | — | FEASIBLE | — |
| VC-R-023 | `21-§6-7` | `EC-ID-06`, `EC-ISO-07`, `EC-FRL-02` | `DB`, `INV`, `UNIT`, `RT`, `REG` | NP-06 | RS-03 | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-024 | `21-§7` | `EC-KER-01`, `EC-ISO-02`, `EC-ISO-10` | `DB`, `INV`, `REG` | NP-15, NP-28 | — | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| VC-R-025 | `21-§8` | `EC-KER-02`, `EC-KER-06`, `EC-DEP-01` | `DB`, `HARNESS`, `DOC` | NP-05, NP-08, NP-12 | — | FEASIBLE | — |
| VC-R-026 | `21-§9` | `EC-KER-06`, `EC-KER-07` | `DB`, `HARNESS`, `RT` | NP-13 | RS-11 | FEASIBLE | — |
| VC-R-027 | `21-§10-1` | `EC-EXT-01` | `DB`, `HARNESS`, `RT` | NP-24 | RS-10 | FEASIBLE | — |
| VC-R-028 | `21-§10-2` | `EC-EXT-01` | `DB`, `HARNESS`, `RT` | NP-24 | RS-10 | FEASIBLE | — |
| VC-R-029 | `21-§10-3` | `EC-EXT-01` | `DB`, `HARNESS`, `RT` | NP-24 | RS-10 | FEASIBLE | — |
| VC-R-030 | `21-§10-4` | `EC-EXT-01` | `DB`, `HARNESS`, `RT` | NP-24 | RS-10 | FEASIBLE | — |
| VC-R-031 | `21-§10-5` | `EC-EXT-01` | `DB`, `HARNESS`, `RT` | NP-24 | RS-10 | FEASIBLE | — |
| VC-R-032 | `21-§10-6` | `EC-KER-07`, `EC-EXT-01` | `DB`, `HARNESS`, `RT` | NP-13, NP-24 | RS-10 | FEASIBLE | — |
| VC-R-033 | `21-§11-1` | `EC-ISO-02`, `EC-ESC-03` | `DB`, `INV` | NP-08, NP-15 | — | FEASIBLE | ESC-1 |
| VC-R-034 | `21-§11-2` | `EC-KER-08`, `EC-ISO-02` | `DB`, `HARNESS`, `INV`, `RT` | NP-10 | RS-10 | CONDITIONAL | — |
| VC-R-035 | `21-§12-1` | `EC-AUT-01` | `CONC`, `HARNESS` | NP-21 | — | FEASIBLE | — |
| VC-R-036 | `21-§12-2` | `EC-AUT-01` | `CONC`, `HARNESS` | NP-21 | — | FEASIBLE | — |
| VC-R-037 | `21-§12-3` | `EC-AUT-01` | `CONC`, `HARNESS` | NP-21 | — | FEASIBLE | — |
| VC-R-038 | `21-§12-4` | `EC-AUT-01` | `CONC`, `HARNESS` | NP-21 | — | FEASIBLE | — |
| VC-R-039 | `21-§12-5` | `EC-KER-09`, `EC-AUT-01` | `DB`, `CONC`, `HARNESS` | NP-16, NP-21 | — | FEASIBLE | — |
| VC-R-040 | `21-§13-1` | `EC-EXT-02` | `DB`, `HARNESS` | NP-23 | RS-14 | FEASIBLE | — |
| VC-R-041 | `21-§13-2` | `EC-EXT-02` | `DB`, `HARNESS` | NP-23 | RS-14 | FEASIBLE | — |
| VC-R-042 | `21-§13-3` | `EC-EXT-02` | `DB`, `HARNESS` | NP-23 | RS-14 | FEASIBLE | — |
| VC-R-043 | `21-§14-1` | `EC-SUP-01` | `DB`, `HARNESS`, `AUDIT` | NP-22 | — | FEASIBLE | — |
| VC-R-044 | `21-§14-2` | `EC-SUP-01` | `DB`, `HARNESS`, `AUDIT` | NP-22 | RS-15 | FEASIBLE | — |
| VC-R-045 | `21-§14-3` | `EC-SUP-01` | `DB`, `HARNESS`, `AUDIT` | NP-22 | — | FEASIBLE | — |
| VC-R-046 | `21-§14-4` | `EC-SUP-01` | `DB`, `HARNESS`, `AUDIT` | NP-22 | — | FEASIBLE | — |
| VC-R-047 | `21-§14-5` | `EC-SUP-01` | `DB`, `HARNESS`, `AUDIT` | NP-22 | — | FEASIBLE | — |
| VC-R-048 | `21-§14-6` | `EC-SUP-01` | `DB`, `HARNESS`, `AUDIT`, `REG` | NP-22, NP-45 | — | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-049 | `21-§14-7` | `EC-SUP-01` | `DB`, `HARNESS`, `AUDIT` | NP-22 | — | FEASIBLE | — |
| VC-R-050 | `21-§15-1` | `EC-ID-06`, `EC-KER-02`, `EC-FRL-02` | `DB`, `UNIT`, `RT` | NP-07 | RS-03 | FEASIBLE | — |
| VC-R-051 | `21-§15-2` | `EC-KER-02` | `DB` | NP-07 | — | FEASIBLE | — |
| VC-R-052 | `21-§15-3` | `EC-ID-06`, `EC-KER-02` | `DB`, `UNIT`, `RT`, `REG` | NP-01, NP-07 | RS-03 | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| VC-R-053 | `21-§15-4` | `EC-KER-02` | `DB` | NP-07 | — | FEASIBLE | — |
| VC-R-054 | `21-§15-5` | `EC-KER-02`, `EC-SUP-01`, `EC-ISO-04` | `DB`, `HARNESS`, `INV`, `AUDIT` | NP-07, NP-08, NP-25 | — | FEASIBLE | — |
| VC-R-055 | `21-§16-1` | `EC-KER-05` | `DB` | NP-11 | — | FEASIBLE | — |
| VC-R-056 | `21-§16-2` | `EC-KER-05`, `EC-GOV-03` | `DB`, `INV`, `REPO` | NP-41 | — | FEASIBLE | — |
| VC-R-057 | `21-§17` | `EC-KER-09`, `EC-CNF-02`, `EC-CNF-05`, `EC-FRL-03` | `DB`, `CONC`, `RT`, `FRT` | NP-16, NP-19 | RS-02, RS-05 | CONDITIONAL | — |
| VC-R-058 | `21-§18-1` | `EC-CNF-01`, `EC-FRL-04` | `DB`, `CONC`, `HARNESS` | NP-17, NP-37 | — | FEASIBLE | — |
| VC-R-059 | `21-§18-2` | `EC-CNF-01`, `EC-FRL-04` | `DB`, `CONC`, `HARNESS` | NP-17, NP-37 | — | FEASIBLE | — |
| VC-R-060 | `21-§18-3` | `EC-CNF-01` | `DB`, `CONC` | NP-17 | — | FEASIBLE | — |
| VC-R-061 | `21-§18-4` | `EC-CNF-01` | `DB`, `CONC` | NP-17 | — | FEASIBLE | — |
| VC-R-062 | `21-§18-5` | `EC-CNF-01` | `DB`, `CONC`, `RT`, `FRT` | NP-17 | RS-02 | FEASIBLE | — |
| VC-R-063 | `21-§18-6` | `EC-CNF-01` | `DB`, `CONC` | NP-17, NP-18 | — | FEASIBLE | — |
| VC-R-064 | `21-§19-1` | `EC-AUD-01` | `DB`, `AUDIT` | NP-45 | — | CONDITIONAL | ESC-1 |
| VC-R-065 | `21-§19-2` | `EC-AUD-01` | `DB`, `AUDIT` | NP-45 | — | CONDITIONAL | ESC-1 |
| VC-R-066 | `21-§19-3` | `EC-AUD-01` | `DB`, `AUDIT` | NP-45 | — | CONDITIONAL | ESC-1 |
| VC-R-067 | `21-§19-4` | `EC-AUD-01` | `DB`, `AUDIT` | NP-45 | — | CONDITIONAL | ESC-1 |
| VC-R-068 | `21-§19-5` | `EC-AUD-01` | `DB`, `AUDIT`, `REG` | NP-45 | — | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | ESC-1 |
| VC-R-069 | `21-§19-6` | `EC-AUD-01`, `EC-AUD-02` | `DB`, `AUDIT` | NP-26, NP-45 | — | CONDITIONAL | ESC-1 |
| VC-R-070 | `21-§19-7` | `EC-SUP-01`, `EC-AUD-01` | `DB`, `HARNESS`, `AUDIT` | NP-22, NP-45 | — | CONDITIONAL | ESC-1 |
| VC-R-071 | `21-§19-8` | `EC-AUT-01`, `EC-AUD-01`, `EC-AUD-03` | `DB`, `CONC`, `HARNESS`, `INV`, `AUDIT` | NP-21, NP-45 | — | CONDITIONAL | ESC-1 |
| VC-R-072 | `21-§20-1` | `EC-UX-01` | `UNIT`, `RT` | NP-27 | RS-06 | FEASIBLE | — |
| VC-R-073 | `21-§20-2` | `EC-UX-01` | `UNIT`, `RT` | NP-27 | RS-06 | FEASIBLE | — |
| VC-R-074 | `21-§20-3` | `EC-UX-01`, `EC-UX-02` | `UNIT`, `RT` | NP-27 | RS-06 | FEASIBLE | — |
| VC-R-075 | `21-§20-4` | `EC-UX-01` | `UNIT`, `RT` | NP-27 | RS-06 | FEASIBLE | — |
| VC-R-076 | `21-§20-5` | `EC-AUD-02`, `EC-UX-01` | `DB`, `AUDIT`, `UNIT`, `RT` | NP-26, NP-27 | RS-06 | FEASIBLE | — |
| VC-R-077 | `21-§21-1` | `EC-AUD-05` | `INV`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-078 | `21-§21-2` | `EC-AUD-05` | `INV`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-079 | `21-§21-3` | `EC-SUP-01` | `DB`, `HARNESS`, `AUDIT` | NP-22 | — | FEASIBLE | — |
| VC-R-080 | `21-§21-4` | `EC-ISO-01`, `EC-ISO-09` | `DB`, `INV`, `REPO` | NP-01, NP-42 | — | FEASIBLE | — |
| VC-R-081 | `21-§21-5` | `EC-AUD-05` | `INV`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-082 | `21-§22` | `EC-KER-01`, `EC-GOV-01`, `EC-DEP-01` | `DB`, `INV`, `REPO`, `DOC` | NP-42 | — | CONDITIONAL | — |
| VC-R-083 | `21-§23-1` | `EC-ISO-02` | `DB`, `INV`, `UNIT`, `RT` | NP-15 | RS-07 | FEASIBLE | — |
| VC-R-084 | `21-§23-2` | `EC-KER-03` | `DB`, `RT`, `FRT` | NP-09 | RS-01 | FEASIBLE | — |
| VC-R-085 | `21-§23-3` | `EC-KER-03`, `EC-EXT-01` | `DB`, `HARNESS`, `RT` | NP-10, NP-24 | RS-10 | FEASIBLE | — |
| VC-R-086 | `21-§23-4` | `EC-SUP-01` | `DB`, `HARNESS`, `AUDIT` | NP-22 | — | FEASIBLE | — |
| VC-R-087 | `21-§23-5` | `EC-KER-02` | `DB`, `HARNESS` | NP-08, NP-12 | — | FEASIBLE | — |
| VC-R-088 | `21-§23-6` | `EC-KER-05`, `EC-ESC-01` | `DB`, `INV`, `REPO` | NP-29, NP-41 | — | FEASIBLE | ESC-1 |
| VC-R-089 | `21-§23-7` | `EC-AUD-02`, `EC-UX-01` | `DB`, `AUDIT`, `UNIT`, `RT` | NP-27 | RS-06 | FEASIBLE | — |
| VC-R-090 | `21-§24-1` | `EC-TST-02` | `DB`, `HARNESS`, `RT`, `REG` | NP-01 | RS-12 | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| VC-R-091 | `21-§24-2` | `EC-ISO-01`, `EC-TST-02` | `DB`, `HARNESS`, `INV`, `RT`, `REG` | NP-01, NP-02 | RS-12 | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| VC-R-092 | `21-§24-3` | `EC-PPM-03`, `EC-PPM-04`, `EC-TST-02` | `DB`, `HARNESS`, `RT`, `FRT` | NP-09, NP-14 | RS-01, RS-04 | CONDITIONAL | FDR-09, SEC-EIS10-12 |
| VC-R-093 | `21-§24-4` | `EC-KER-08`, `EC-ISO-02`, `EC-TST-02` | `DB`, `HARNESS`, `INV`, `RT` | NP-10 | RS-10 | CONDITIONAL | — |
| VC-R-094 | `21-§24-5` | `EC-EXT-01`, `EC-TST-02` | `DB`, `HARNESS`, `RT` | NP-24 | RS-10 | FEASIBLE | — |
| VC-R-095 | `21-§24-6` | `EC-KER-06`, `EC-KER-07`, `EC-TST-02` | `DB`, `HARNESS`, `RT` | NP-12, NP-13 | RS-11 | FEASIBLE | — |
| VC-R-096 | `21-§24-7` | `EC-EXT-02`, `EC-TST-02` | `DB`, `HARNESS` | NP-23 | RS-14 | FEASIBLE | — |
| VC-R-097 | `21-§24-8` | `EC-KER-09`, `EC-CNF-02`, `EC-TST-02` | `DB`, `CONC`, `HARNESS`, `RT`, `FRT` | NP-16 | RS-02 | CONDITIONAL | — |
| VC-R-098 | `21-§24-9` | `EC-KER-05`, `EC-TST-02` | `DB`, `HARNESS` | NP-11 | — | FEASIBLE | — |
| VC-R-099 | `21-§24-10` | `EC-SUP-01`, `EC-TST-02` | `DB`, `HARNESS`, `AUDIT` | NP-22 | RS-15 | FEASIBLE | — |
| VC-R-100 | `21-§24-11` | `EC-AUT-01`, `EC-TST-02` | `DB`, `CONC`, `HARNESS` | NP-21 | — | FEASIBLE | — |
| VC-R-101 | `21-§24-12` | `EC-UX-01`, `EC-TST-02` | `DB`, `HARNESS`, `UNIT`, `RT` | NP-27 | RS-06 | FEASIBLE | — |
| VC-R-102 | `22-§5-1` | `EC-ID-02` | `DB`, `CONC`, `REG` | NP-01, NP-43 | — | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-103 | `22-§5-2` | `EC-ID-01`, `EC-ID-02`, `EC-ID-04` | `DB`, `CONC`, `INV`, `REG` | NP-36 | — | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-104 | `22-§5-3` | `EC-ID-01`, `EC-ID-02` | `DB`, `CONC`, `INV` | NP-09 | — | FEASIBLE | — |
| VC-R-105 | `22-§5-4` | `EC-ID-01`, `EC-ID-02` | `DB`, `CONC`, `INV` | NP-09 | — | FEASIBLE | — |
| VC-R-106 | `22-§5-5` | `EC-ID-03` | `DB`, `HARNESS` | NP-08, NP-23 | — | FEASIBLE | — |
| VC-R-107 | `22-§5-6` | `EC-ID-03` | `DB`, `HARNESS` | NP-08, NP-23 | — | FEASIBLE | — |
| VC-R-108 | `22-§5-7` | `EC-ID-03` | `DB`, `HARNESS` | NP-08, NP-23 | — | FEASIBLE | — |
| VC-R-109 | `22-§5-8` | `EC-ID-05`, `EC-PPM-01` | `DB`, `INV`, `REG` | NP-03 | — | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-110 | `22-§5-9` | `EC-ID-05`, `EC-ISO-07` | `DB`, `INV` | NP-03 | — | FEASIBLE | — |
| VC-R-111 | `22-§6-1` | `EC-UX-02` | `DB`, `INV`, `UNIT`, `RT`, `REG` | NP-15 | RS-07 | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-112 | `22-§6-2` | `EC-KER-06` | `DB`, `HARNESS` | NP-12 | — | FEASIBLE | — |
| VC-R-113 | `22-§6-3` | `EC-KER-06`, `EC-ISO-06` | `DB`, `HARNESS` | NP-05 | — | FEASIBLE | — |
| VC-R-114 | `22-§6-4` | `EC-ISO-02`, `EC-ISO-04` | `DB`, `INV` | NP-25 | — | FEASIBLE | — |
| VC-R-115 | `22-§6-5` | `EC-ISO-01` | `DB`, `INV`, `REG` | NP-01, NP-02 | — | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| VC-R-116 | `22-§6-6` | `EC-AUT-01` | `CONC`, `HARNESS` | NP-21 | — | FEASIBLE | — |
| VC-R-117 | `22-§6-7` | `EC-ISO-04` | `DB`, `INV` | NP-03, NP-25 | — | FEASIBLE | — |
| VC-R-118 | `22-§6-8` | `EC-ISO-05` | `DB`, `PROV` | NP-04 | — | CONDITIONAL | G-7 |
| VC-R-119 | `22-§6-9` | `EC-KER-06` | `DB`, `HARNESS` | NP-12, NP-13 | — | FEASIBLE | — |
| VC-R-120 | `22-§6-10` | `EC-KER-01`, `EC-DEP-01` | `DB`, `INV`, `REPO`, `DOC` | NP-42 | — | FEASIBLE | — |
| VC-R-121 | `22-§13-1` | `EC-CNF-03` | `DB`, `CONC`, `RT` | NP-17 | RS-05 | FEASIBLE | — |
| VC-R-122 | `22-§13-2` | `EC-CNF-03` | `DB`, `CONC`, `RT`, `REG` | NP-17 | RS-05 | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-123 | `22-§13-3` | `EC-CNF-01` | `DB`, `CONC` | NP-17, NP-18 | — | FEASIBLE | — |
| VC-R-124 | `22-§13-4` | `EC-CNF-02` | `CONC`, `RT`, `FRT` | NP-16 | RS-02 | FEASIBLE | — |
| VC-R-125 | `22-§13-5` | `EC-CNF-01` | `DB`, `CONC`, `RT`, `FRT` | NP-17 | RS-02 | FEASIBLE | — |
| VC-R-126 | `22-§14-1` | `EC-AUD-04` | `DB`, `AUDIT`, `REG` | — | — | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-127 | `22-§14-2` | `EC-AUD-03` | `DB`, `INV`, `REG` | — | — | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-128 | `22-§14-3` | `EC-AUD-03` | `DB`, `INV` | — | — | FEASIBLE | — |
| VC-R-129 | `22-§14-4` | `EC-AUD-04` | `DB`, `AUDIT` | — | — | FEASIBLE | — |
| VC-R-130 | `22-§14-5` | `EC-AUD-04`, `EC-ESC-04` | `DB`, `INV`, `AUDIT`, `REG` | NP-32, NP-45 | — | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | ESC-1 |
| VC-R-131 | `22-§14-6` | `EC-AUD-04` | `DB`, `AUDIT` | NP-09 | — | FEASIBLE | — |
| VC-R-132 | `22-§14-7` | `EC-CNF-01` | `DB`, `CONC` | NP-17, NP-18 | — | FEASIBLE | — |
| VC-R-133 | `22-§14-8` | `EC-AUD-04` | `DB`, `AUDIT`, `REG` | — | — | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-134 | `22-§14-9` | `EC-AUD-03` | `DB`, `INV`, `REG` | — | — | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-135 | `22-§15` | `EC-CNF-04`, `EC-CNF-05` | `DB`, `CONC`, `RT`, `REG` | NP-19, NP-20 | RS-05 | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-136 | `22-§16-2` | `EC-AUD-05` | `INV`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-137 | `22-§17` | `EC-CNF-06` | `DB` | NP-44 | — | FEASIBLE | — |
| VC-R-138 | `22-§19` | `EC-CNF-06` | `DB` | NP-44 | — | FEASIBLE | — |
| VC-R-139 | `22-§20-1` | `EC-ESC-06`, `EC-ESC-08`, `EC-GOV-03` | `DB`, `HARNESS`, `INV`, `REPO`, `DOC` | NP-41 | — | FEASIBLE | ESC-1, SEC-EIS10-14 |
| VC-R-140 | `22-§20-2` | `EC-ESC-01`, `EC-ESC-02`, `EC-ESC-03`, `EC-ESC-04`, `EC-ESC-05`, `EC-ESC-06`, `EC-ESC-07`, `EC-TST-03` | `DB`, `HARNESS`, `INV`, `REG`, `PROV`, `DOC` | NP-29, NP-30, NP-31, NP-32, NP-33, NP-34, NP-35 | — | BLOCKED (T8, ESC-1 OPEN); FCTM partial; regression `VC-TEST-15` | ESC-1, 22-§20-2, G-7, SEC-EIS10-14 |
| VC-R-141 | `22-§20-3` | `EC-KER-05`, `EC-GOV-03` | `DB`, `INV`, `REPO` | NP-41 | — | FEASIBLE | — |
| VC-R-142 | `22-§20-4` | `EC-ESC-08`, `EC-GOV-03` | `INV`, `REG`, `REPO`, `DOC` | NP-41 | — | FEASIBLE; FCTM partial; regression `VC-TEST-15` | ESC-1 |
| VC-R-143 | `22-§21` | `EC-ISO-08` | `DB` | — | — | FEASIBLE | — |
| VC-R-144 | `22-§22` | `EC-TST-01` | `DB` | — | — | CONDITIONAL | — |
| VC-R-145 | `22-§23-1` | `EC-ISO-09` | `DB`, `INV`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-146 | `22-§23-2` | `EC-ISO-01` | `DB`, `INV`, `RT` | NP-01 | RS-12 | CONDITIONAL | G-6/T4 |
| VC-R-147 | `22-§23-3` | `EC-SUP-01` | `DB`, `HARNESS`, `AUDIT` | NP-22 | — | FEASIBLE | — |
| VC-R-148 | `22-§23-4` | `EC-SUP-01` | `DB`, `HARNESS`, `AUDIT` | NP-22 | — | FEASIBLE | — |
| VC-R-149 | `22-§23-5` | `EC-ISO-09` | `DB`, `HARNESS`, `REPO` | NP-09, NP-24 | — | FEASIBLE | — |
| VC-R-150 | `22-§23-6` | `EC-ISO-09` | `DB`, `INV`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-151 | `22-§23-7` | `EC-ISO-09` | `DB`, `INV`, `REPO` | NP-01, NP-42 | — | FEASIBLE | — |
| VC-R-152 | `22-§27-1` | `EC-GOV-01` | `REPO`, `DOC` | — | — | FEASIBLE | — |
| VC-R-153 | `22-§27-2` | `EC-GOV-01` | `REPO`, `DOC` | — | — | FEASIBLE | — |
| VC-R-154 | `22-§27-3` | `EC-GOV-01` | `REPO`, `DOC` | — | — | FEASIBLE | — |
| VC-R-155 | `22-§27-4` | `EC-GOV-01` | `REPO`, `DOC` | — | — | FEASIBLE | — |
| VC-R-156 | `22-§27-5` | `EC-GOV-01` | `REPO`, `DOC` | — | — | FEASIBLE | — |
| VC-R-157 | `22-§27-6` | `EC-GOV-01` | `REPO`, `DOC` | — | — | FEASIBLE | — |
| VC-R-158 | `22-§27-7` | `EC-GOV-01` | `REPO`, `DOC` | — | — | FEASIBLE | — |
| VC-R-159 | `22-§28-1` | `EC-GOV-02` | `INV`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-160 | `22-§28-2` | `EC-KER-01`, `EC-GOV-02`, `EC-DEP-01` | `DB`, `INV`, `REPO`, `DOC` | NP-42 | — | FEASIBLE | — |
| VC-R-161 | `22-§28-3` | `EC-GOV-02` | `INV`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-162 | `22-§28-4` | `EC-AUT-01`, `EC-GOV-02` | `CONC`, `HARNESS`, `INV`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-163 | `22-§28-5` | `EC-GOV-02` | `INV`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-164 | `22-§28-6` | `EC-ID-03`, `EC-GOV-02` | `DB`, `HARNESS`, `INV`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-165 | `22-§28-7` | `EC-AUD-05`, `EC-GOV-02` | `INV`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-166 | `22-§28-8` | `EC-KER-05`, `EC-GOV-02` | `DB`, `INV`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-167 | `22-§28-9` | `EC-KER-02`, `EC-GOV-02` | `DB`, `INV`, `REPO` | NP-08, NP-42 | — | FEASIBLE | — |
| VC-R-168 | `22-§28-10` | `EC-GOV-02` | `INV`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-169 | `22-§29-3` | `EC-KER-06`, `EC-ISO-01`, `EC-TST-02` | `DB`, `HARNESS`, `INV` | NP-01, NP-02, NP-03, NP-04, NP-05, NP-12 | — | CONDITIONAL | G-6/T4 |
| VC-R-170 | `22-§29-6` | `EC-ID-03`, `EC-TST-02` | `DB`, `HARNESS`, `INV`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-171 | `22-§29-7` | `EC-CNF-02`, `EC-TST-02` | `DB`, `CONC`, `HARNESS`, `RT`, `FRT` | NP-16, NP-17 | RS-02 | FEASIBLE | — |
| VC-R-172 | `22-§29-8` | `EC-CNF-04`, `EC-TST-02` | `DB`, `CONC`, `HARNESS`, `REG` | NP-20 | — | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-173 | `22-§29-10` | `EC-CNF-06`, `EC-TST-02` | `DB`, `HARNESS` | NP-44 | — | FEASIBLE | — |
| VC-R-174 | `22-§29-11` | `EC-ESC-07`, `EC-GOV-03`, `EC-TST-02` | `DB`, `HARNESS`, `INV`, `REPO`, `DOC` | NP-41 | — | FEASIBLE | ESC-1, 22-§20-2 |
| VC-R-175 | `22-§29-12` | `EC-AUD-04`, `EC-ESC-07`, `EC-TST-02` | `DB`, `HARNESS`, `INV`, `AUDIT`, `DOC` | NP-32, NP-45 | — | CONDITIONAL | ESC-1, 22-§20-2 |
| VC-R-176 | `22-§29-14` | `EC-GOV-01` | `REPO`, `DOC` | — | — | FEASIBLE | — |
| VC-R-177 | `22-§33-1` | `EC-DEL-02` | `DB`, `HARNESS` | — | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| VC-R-178 | `22-§33-2` | `EC-ID-01`, `EC-DEL-03` | `DB`, `HARNESS`, `INV` | — | — | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, LEGAL, SEC-EIS10-14 |
| VC-R-179 | `22-§33-3` | `EC-DEL-01` | `DB`, `HARNESS` | — | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, SEC-EIS10-14 |
| VC-R-180 | `22-§33-4` | `EC-FRL-04`, `EC-FRL-05`, `EC-ESC-06`, `EC-DEL-01` | `DB`, `CONC`, `HARNESS` | NP-40 | — | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| VC-R-181 | `22-§33-5` | `EC-FRL-03`, `EC-DEL-01` | `DB`, `HARNESS` | NP-36, NP-40 | — | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| VC-R-182 | `22-§33-6` | `EC-FRL-04`, `EC-DEL-01` | `DB`, `CONC`, `HARNESS` | NP-37, NP-40 | — | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| VC-R-183 | `22-§33-7` | `EC-DEL-01`, `EC-DEL-06` | `DB`, `HARNESS` | — | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| VC-R-184 | `22-§33-8` | `EC-ESC-03`, `EC-DEL-01` | `DB`, `HARNESS`, `INV` | NP-31, NP-40 | — | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| VC-R-185 | `22-§33-9` | `EC-DEL-02` | `DB`, `HARNESS` | — | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, SEC-EIS10-14 |
| VC-R-186 | `22-§33-10` | `EC-DEL-01` | `DB`, `HARNESS` | NP-40 | — | FEASIBLE; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, SEC-EIS10-14 |
| VC-R-187 | `22-§33-11` | `EC-FRL-05`, `EC-DEL-01` | `DB`, `HARNESS` | NP-40 | — | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| VC-R-188 | `22-§33-12` | `EC-DEL-03` | `DB`, `HARNESS` | NP-40 | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| VC-R-189 | `22-§33-13` | `EC-DEL-06` | `DB` | — | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | LEGAL, SEC-EIS10-14 |
| VC-R-190 | `22-§33-14` | `EC-DEL-03` | `DB`, `HARNESS` | — | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | LEGAL, SEC-EIS10-14 |
| VC-R-191 | `22-§33-15` | `EC-DEL-04` | `DB` | NP-39 | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, SEC-EIS10-14 |
| VC-R-192 | `22-§33-16` | `EC-LEG-01` | `DB`, `INV`, `REPO`, `DOC` | NP-42 | — | FEASIBLE; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | LEGAL, SEC-EIS10-14 |
| VC-R-193 | `22-§33-17` | `EC-ESC-03`, `EC-ESC-04` | `DB`, `INV` | NP-31, NP-32 | — | CONDITIONAL | ESC-1 |
| VC-R-194 | `22-§33-18` | `EC-FRL-04`, `EC-ESC-02` | `DB`, `CONC`, `HARNESS`, `INV` | NP-31, NP-33, NP-38 | — | CONDITIONAL | ESC-1 |
| VC-R-195 | `22-§33-19` | `EC-ESC-03`, `EC-DEL-03` | `DB`, `HARNESS`, `INV` | NP-31 | — | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, LEGAL, SEC-EIS10-14 |
| VC-R-196 | `22-§33-20` | `EC-ESC-01`, `EC-ESC-02` | `DB`, `INV` | NP-29, NP-30, NP-33 | — | CONDITIONAL | ESC-1 |
| VC-R-197 | `22-§33-21` | `EC-DEL-05` | `DB` | — | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| VC-R-198 | `22-§33-22` | `EC-ESC-01`, `EC-ESC-02`, `EC-ESC-05`, `EC-DEL-02` | `DB`, `HARNESS`, `INV`, `PROV` | NP-29, NP-30, NP-31, NP-33 | — | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, G-6/T4, G-7, SEC-EIS10-14 |
| VC-R-199 | `22-§33-23` | `EC-ID-01`, `EC-DEL-03`, `EC-LEG-01` | `DB`, `HARNESS`, `INV`, `DOC` | — | — | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, LEGAL, SEC-EIS10-14 |
| VC-R-200 | `22-§33-24` | `EC-ESC-06`, `EC-LEG-01` | `DB`, `HARNESS`, `DOC` | NP-34, NP-35 | — | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, LEGAL, SEC-EIS10-14 |
| VC-R-201 | `22-§33-25` | `EC-LEG-01` | `DB`, `DOC` | — | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | LEGAL, SEC-EIS10-14 |
| VC-R-202 | `22-§33-26` | `EC-DEL-06`, `EC-LEG-02` | `DB` | NP-35 | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | LEGAL, SEC-EIS10-14 |
| VC-R-203 | `22-§33-27` | `EC-LEG-01` | `DB`, `DOC` | — | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | G-7, LEGAL, SEC-EIS10-14 |
| VC-R-204 | `22-§33-28` | `EC-DEL-04`, `EC-LEG-01` | `DB`, `DOC` | NP-39 | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| VC-R-205 | `22-§33-29` | `EC-LEG-01` | `DB`, `INV`, `REPO`, `DOC` | NP-42 | — | FEASIBLE; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | LEGAL, SEC-EIS10-14 |
| VC-R-206 | `22-§33-30` | `EC-LEG-01`, `EC-LEG-03` | `DB`, `PROV`, `DOC` | — | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | G-7, LEGAL, SEC-EIS10-14 |
| VC-R-207 | `22-§33-31` | `EC-DEL-01`, `EC-DEL-07` | `DB`, `HARNESS` | — | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| VC-R-208 | `22-§33-32` | `EC-FRL-04`, `EC-FRL-05`, `EC-DEL-07` | `DB`, `CONC`, `HARNESS` | NP-37, NP-40 | — | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| VC-R-209 | `22-§33-33` | `EC-DEL-01`, `EC-DEL-07` | `DB`, `HARNESS` | — | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, SEC-EIS10-14 |
| VC-R-210 | `22-§33-34` | `EC-FRL-04`, `EC-DEL-01`, `EC-DEL-07` | `DB`, `CONC`, `HARNESS` | NP-37, NP-40 | — | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| VC-R-211 | `22-§33-35` | `EC-DEL-06`, `EC-DEL-07` | `DB`, `HARNESS` | — | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| VC-R-212 | `22-§33-36` | `EC-ESC-04`, `EC-DEL-07` | `DB`, `HARNESS`, `INV` | NP-32, NP-33 | — | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| VC-R-213 | `22-§33-37` | `EC-DEL-04`, `EC-DEL-07` | `DB`, `HARNESS` | NP-39 | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, SEC-EIS10-14 |
| VC-R-214 | `22-§33-38` | `EC-DEL-05`, `EC-DEL-07` | `DB`, `HARNESS` | — | — | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| VC-R-215 | `22-§33-39` | `EC-ESC-01`, `EC-ESC-05`, `EC-DEL-07`, `EC-TST-03` | `DB`, `HARNESS`, `INV`, `PROV` | NP-29, NP-30, NP-31, NP-33 | — | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, G-6/T4, G-7, SEC-EIS10-14 |
| VC-R-216 | `20-§16-1` | `EC-ID-02`, `EC-ID-04`, `EC-FRL-01` | `DB`, `CONC`, `INV`, `UNIT`, `RT` | NP-36, NP-46 | RS-08, RS-09 | CONDITIONAL | — |
| VC-R-217 | `20-§16-2` | `EC-KER-04`, `EC-FRL-01` | `DB`, `AUDIT`, `RT` | NP-09 | RS-09 | FEASIBLE | — |
| VC-R-218 | `20-§16-3` | `EC-KER-03`, `EC-FRL-01` | `DB`, `HARNESS`, `RT` | NP-13 | RS-09, RS-11 | FEASIBLE | — |
| VC-R-219 | `20-§16-4` | `EC-FRL-01`, `EC-FRL-02` | `DB`, `UNIT`, `RT` | NP-46 | RS-08 | FEASIBLE | — |
| VC-R-220 | `20-§23-11` | `EC-KER-03`, `EC-FRL-01` | `DB`, `HARNESS`, `RT` | NP-13 | RS-09 | FEASIBLE | — |
| VC-R-221 | `17-§13-1` | `EC-ID-02` | `DB`, `CONC`, `UNIT`, `RT` | NP-09 | RS-07 | FEASIBLE | — |
| VC-R-222 | `17-§13-2` | `EC-ID-02`, `EC-KER-03`, `EC-PPM-03` | `DB`, `CONC`, `RT`, `FRT` | NP-09, NP-14 | RS-01 | CONDITIONAL | FDR-09, SEC-EIS10-12 |
| VC-R-223 | `17-§13-3` | `EC-ID-02`, `EC-KER-03` | `DB`, `CONC`, `UNIT`, `RT` | NP-09 | RS-07 | FEASIBLE | — |
| VC-R-224 | `17-§13-4` | `EC-ID-03`, `EC-EXT-02` | `DB`, `HARNESS` | NP-23 | RS-14 | FEASIBLE | — |
| VC-R-225 | `17-§14-1` | `EC-ISO-02`, `EC-UX-02` | `DB`, `INV`, `UNIT`, `RT` | NP-15 | RS-07 | FEASIBLE | — |
| VC-R-226 | `17-§14-2` | `EC-KER-01` | `DB`, `REG` | NP-07 | — | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-227 | `17-§14-3` | `EC-KER-01` | `DB`, `REG` | NP-01, NP-02 | — | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| VC-R-228 | `17-§14-4` | `EC-KER-01` | `DB` | NP-09 | — | FEASIBLE | — |
| VC-R-229 | `17-§14-5` | `EC-KER-01` | `DB` | NP-11 | — | FEASIBLE | — |
| VC-R-230 | `17-§14-6` | `EC-KER-01` | `DB` | NP-10 | — | FEASIBLE | — |
| VC-R-231 | `17-§14-7` | `EC-ISO-02`, `EC-UX-02` | `DB`, `INV`, `UNIT`, `RT` | NP-15 | RS-07 | FEASIBLE | — |
| VC-R-232 | `17-§16-1` | `EC-UX-02` | `DB`, `UNIT`, `RT` | — | RS-07 | FEASIBLE | — |
| VC-R-233 | `17-§18-1` | `EC-ISO-01` | `DB`, `INV`, `RT` | NP-01 | RS-12 | CONDITIONAL | G-6/T4 |
| VC-R-234 | `17-§18-2` | `EC-KER-03`, `EC-KER-07`, `EC-PPM-04` | `DB`, `HARNESS`, `RT` | NP-13, NP-14 | RS-04, RS-11 | CONDITIONAL | FDR-09, SEC-EIS10-12 |
| VC-R-235 | `17-§18-4` | `EC-KER-07` | `DB`, `HARNESS`, `RT` | NP-13 | RS-11 | FEASIBLE | — |
| VC-R-236 | `17-§21-4` | `EC-KER-03`, `EC-KER-07`, `EC-PPM-04` | `DB`, `HARNESS`, `RT` | NP-13, NP-14 | RS-04, RS-11 | CONDITIONAL | FDR-09, SEC-EIS10-12 |
| VC-R-237 | `17-§22-2` | `EC-PPM-03`, `EC-PPM-04`, `EC-TST-02` | `DB`, `HARNESS`, `RT`, `FRT` | NP-09, NP-14 | RS-01, RS-04 | CONDITIONAL | FDR-09, SEC-EIS10-12 |
| VC-R-238 | `17-§22-3` | `EC-EXT-01`, `EC-TST-02` | `DB`, `HARNESS`, `RT` | NP-24 | RS-10 | FEASIBLE | — |
| VC-R-239 | `17-§22-9` | `EC-ISO-01`, `EC-TST-02` | `DB`, `HARNESS`, `INV`, `RT`, `REG` | NP-01, NP-02 | RS-12 | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| VC-R-240 | `17-§22-10a` | `EC-UX-02`, `EC-TST-02` | `DB`, `HARNESS`, `UNIT`, `RT` | — | RS-07 | FEASIBLE | — |
| VC-R-241 | `7-§7` | `EC-PPM-05` | `DB`, `INV`, `REG`, `REPO` | NP-42 | — | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| VC-R-242 | `7-§9` | `EC-PPM-05` | `DB`, `INV`, `REG`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-243 | `7-§10-1` | `EC-ID-02`, `EC-PPM-02` | `DB`, `CONC` | NP-09 | — | FEASIBLE | — |
| VC-R-244 | `7-§10-2` | `EC-ID-02`, `EC-PPM-02`, `EC-PPM-03` | `DB`, `CONC`, `RT`, `FRT` | NP-09, NP-14 | RS-01 | CONDITIONAL | FDR-09, SEC-EIS10-12 |
| VC-R-245 | `7-§10-3` | `EC-ID-02`, `EC-PPM-02` | `DB`, `CONC` | NP-09 | — | FEASIBLE | — |
| VC-R-246 | `7-§10-4` | `EC-ID-03`, `EC-PPM-02` | `DB`, `HARNESS` | NP-23 | — | FEASIBLE | — |
| VC-R-247 | `7-§12` | `EC-KER-01`, `EC-PPM-01` | `DB`, `INV`, `REG`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-248 | `7-§15-10` | `EC-PPM-02`, `EC-TST-02` | `DB`, `HARNESS`, `RT`, `REG` | NP-09 | RS-13 | FEASIBLE | — |
| VC-R-249 | `7-§15-12` | `EC-ISO-01`, `EC-TST-02` | `DB`, `HARNESS`, `INV`, `RT`, `REG` | NP-01, NP-02 | RS-12 | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| VC-R-250 | `BP-§10.1-1` | `EC-ID-02`, `EC-TST-02` | `DB`, `CONC`, `HARNESS`, `UNIT`, `RT` | NP-09 | RS-07 | FEASIBLE | — |
| VC-R-251 | `BP-§10.1-2` | `EC-ID-01`, `EC-ID-02` | `DB`, `CONC`, `INV`, `UNIT`, `RT` | NP-06 | RS-03 | CONDITIONAL | — |
| VC-R-252 | `BP-§10.1-3` | `EC-KER-01`, `EC-KER-03`, `EC-PPM-03` | `DB`, `RT`, `FRT` | NP-09, NP-14 | RS-01 | FEASIBLE | FDR-09, SEC-EIS10-12 |
| VC-R-253 | `BP-§10.1-4` | `EC-KER-04`, `EC-AUT-01` | `DB`, `CONC`, `HARNESS`, `AUDIT`, `RT`, `FRT` | NP-09, NP-21 | RS-01 | FEASIBLE | — |
| VC-R-254 | `BP-§10.1-5` | `EC-KER-09`, `EC-CNF-02`, `EC-CNF-05`, `EC-TST-02` | `DB`, `CONC`, `HARNESS`, `RT`, `FRT` | NP-16 | RS-02 | CONDITIONAL | — |
| VC-R-255 | `BP-§10.1-6` | `EC-ID-06`, `EC-ISO-01` | `DB`, `INV`, `UNIT`, `RT` | NP-01, NP-06 | RS-03 | CONDITIONAL | G-6/T4 |
| VC-R-256 | `BP-§10.1-7` | `EC-ISO-01`, `EC-ISO-03`, `EC-ISO-10`, `EC-TST-03`, `EC-ENV-01` | `DB`, `INV`, `PROV` | NP-28 | — | CONDITIONAL | G-6/T4, SEC-EIS10-13 |
| VC-R-257 | `BP-§10.1-8` | `EC-ISO-03`, `EC-ISO-10`, `EC-TST-03`, `EC-ENV-01` | `DB`, `INV`, `PROV` | NP-28 | — | CONDITIONAL | G-6/T4, SEC-EIS10-13 |
| VC-R-258 | `BP-§10.1-9` | `EC-TST-01`, `EC-TST-04` | `DB`, `REG` | — | — | CONDITIONAL | — |
| VC-R-259 | `BP-§10.1-10` | `EC-KER-05` | `DB` | NP-11 | — | FEASIBLE | — |
| VC-R-260 | `BP-§10.1-11` | `EC-PPM-01`, `EC-PPM-02` | `DB`, `RT`, `FRT`, `REG` | NP-09 | RS-01, RS-13 | FEASIBLE | — |
| VC-R-261 | `BP-§10.1-12` | `EC-PPM-06` | `UNIT`, `RT`, `REG` | — | RS-13 | FEASIBLE | — |
| VC-R-262 | `BP-§10.1-13` | `EC-ID-04`, `EC-PPM-05`, `EC-PPM-06`, `EC-ESC-08`, `EC-TST-04` | `DB`, `INV`, `UNIT`, `RT`, `REG`, `DOC` | — | RS-13 | CONDITIONAL | ESC-1, G-7 |
| VC-R-263 | `BP-§7-1` | `EC-PPM-05` | `DB`, `RT`, `REG` | — | RS-13 | CONDITIONAL | ESC-1 |
| VC-R-264 | `BP-§7-2` | `EC-PPM-05` | `DB`, `RT`, `REG` | — | RS-13 | FEASIBLE | — |
| VC-R-265 | `BP-§7-3` | `EC-PPM-05` | `DB`, `RT`, `REG` | — | RS-13 | FEASIBLE | — |
| VC-R-266 | `BP-§7-4` | `EC-PPM-05` | `DB`, `INV`, `REG`, `REPO` | NP-42 | — | FEASIBLE | — |
| VC-R-267 | `BP-§7-5` | `EC-PPM-06` | `UNIT`, `RT`, `REG` | — | RS-13 | FEASIBLE | — |

## 14. Final Acceptance Statement

Not executed. To be completed only after the package is locked, implementation is authorized and performed, and Stages 16 to 19 have produced their records. Mission Control decides acceptance. Nothing in this draft is acceptance, demonstration or evidence.

```text
CHECKLIST EXECUTION: NOT STARTED
ROWS DEMONSTRATED: 0 OF 267
ESC-1: OPEN T8
22-§20-2: BLOCKED / IN SCOPE
G-6/T4: UNVERIFIED
LEGAL, PRIVACY AND RETENTION VALIDATION: DEFERRED
```

## Change Log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-10-01 | Claude Code (MC-165, MC-166) | Initial Stage 12 draft. Before first publication, locked-EIS identity and baseline references updated to MC-166; no row, obligation, check or count changed |
| 0.2 | 2026-10-01 | Claude Code (MC-167) | Stage 13 refinement: locked EIS blob `c444f750`; `NP-35` test or migration context with synthetic fixtures; `VC-TEST-11` runtime-gated verification; identity-deletion rows shown as execution-gated, not deferred; evidence classes of the gated identity-deletion obligations updated to build evidence. No row, item or mapping changed |
