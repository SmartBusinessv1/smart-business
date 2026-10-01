# SB-P-1.12 — Stage 13 Implementation Readiness and Migration Planning Report

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Claude Code — readiness preparer under MC-169
**To:** Smart Business Mission Control
**Work package:** `SB-P-1.12-WP-IMPLEMENTATION-READINESS`
**Instruction:** `communication/live/instruction1.33.md`; authorization `mission-control/41-stage13-implementation-readiness-authorization.md`
**Status:** `READINESS INPUTS FOR MISSION CONTROL — RECOMMENDATIONS ONLY — IMPLEMENTATION AUTHORIZATION WITHHELD`

```text
IMPLEMENTATION: NOT AUTHORIZED (WITHHELD)
SCHEMA / SQL / MIGRATION CREATION OR EXECUTION: NOT AUTHORIZED
LOVABLE BUILD EXECUTION: NOT AUTHORIZED
PROVIDER / PRODUCTION MUTATION: NOT AUTHORIZED
IDENTITY-DELETION RUNTIME: NOT AUTHORIZED
```

This report recommends; it decides nothing. Mission Control decides builder allocation, the migration mission, the verifier and Stage 14. Nothing here is implementation, runtime, provider or production evidence.

## 1. Baseline Verified

| Item | Observed on canonical `main` | Result |
|---|---|---|
| Canonical `main` | `50d273158906337d99be34f0e05ae2e491c1cf9a` (PR #702 merge, MC-169). MC-169 Section 1 names `5cf32e8534101bc74254535e5952fa902aeda69f` (PR #700 merge); `50d27315` is that commit plus the MC-169 records only | PASS |
| Locked Product Blueprint | `77d52096c020668311b039721a4de9248ddd460e` | PASS |
| Locked EIS | `c444f7509477d0e8b997af538440d93bf2ca4d72` | PASS |
| Locked Engineering Contract | `20228e17c2fc6c36cfad9ccc1d5114873b15df1a` | PASS |
| Locked Lovable Build Prompt | `26060db019fdae3cfdb8f4c5547352bc165eedbc` | PASS |
| Locked Verification Checklist | `82646e8d0e7e1e667ebfefbd3d64ee2fc1d2ebe8` | PASS |
| Canonical FCTM | `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` | PASS |
| Implementation Authorization | `mission-control/implementation-authorization.md`: `WITHHELD` | PASS |
| Repository change since the EIS baseline `main@24730a68` | No change under `supabase/`, `src/`, `tests/`, `scripts/`, `package.json`, `vitest*.ts` or `.github/`; the EIS Section 5 baseline still describes the repository | PASS |

**Lock-metadata observations (formatting only; not edited; no effect on scope):**

- **RO-1.** Locked Engineering Contract Section 14 now reads "`APPROVED — LOCKED`. Not approved, not locked, not an implementation authorization." The middle clause is the superseded draft wording left beside the new status.
- **RO-2.** In the locked Engineering Contract and Build Prompt, the MC-168 `1.0-L` change-log row is separated from its table by a blank line, so it renders outside the table.
- **RO-3.** The locked Verification Checklist carries no `1.0-L` change-log row, unlike the other two documents.

## 2. Builder and Workstream Recommendation

### 2.1 Facts that drive the recommendation

1. **Two repositories.** The canonical implementation repository is `SmartBusinessv1/smart-business` (`main`). The production delivery repository is `SmartBusinessv1/starter-supab-shell` (`main`), bound to Lovable project `f3e992ec-06df-4d49-b157-b92ec064c078` (`mission-control/mission_memory.md` "Project Snapshot"; continuity record Section 16).
2. **Lovable writes only to the delivery repository**, and that Lovable project is bound to the **production** Supabase project `gysgzasfcjvtrgaigfyn`. A Lovable preview of new schema-dependent UI would run against production, which will not carry SB-P-1.12 schema until a production migration is separately authorized.
3. **SB-P-1.11 precedent was split ownership.** Backend schema, the 19 command functions and RLS were built in the canonical repository by the "Smart Business" committer (Claude Code), for example PRs #115, #157, #185 and #189. The frontend was built by Lovable in the derivative repository, and its Builder Completion Report states "Canonical authority: `SmartBusinessv1/smart-business` — NOT modified from Lovable", so the work reached canonical by transfer.
4. **Delivery repository drift.** `starter-supab-shell/main` is 2 commits ahead of its last verified delivery commit `205b3f7ab486242ee91e843c61de784b0cb0d2`: `0a51a338` "Work in progress" and `9c10c538` "Lovable update", both by `gpt-engineer-app[bot]` on 2026-09-13. They change `src/integrations/supabase/client.ts` (+2/−1) and `types.ts` (+1433/−1436) and add `previewAuthStorage.ts` (+88). None of this is in canonical. Its review status is **UNVERIFIED** (read-only observation through the GitHub API; no code was moved).
5. **Lovable-generated migrations** (UUID-named files, for example `20260708210504_0a471e2c-…`) exist in history. A Lovable session can author schema against its bound project. That conflicts with the migration default-deny rule unless Lovable is excluded from schema work.
6. **Claude Code has direct authorized repository capability** in the canonical repository: tests, the `scripts/supabase-cli.mjs` test wrapper, and both CI tiers live there.

### 2.2 Recommendation

**Primary recommendation:** Claude Code builds every builder workstream in the canonical repository. Lovable is not used for SB-P-1.12 implementation. Lovable delivery synchronization and publication to `starter-supab-shell` is a separate, later delivery mission, run after production migration and Stage 19.

**Alternative, if Mission Control prefers the SB-P-1.11 split:** Lovable builds only the frontend portions of WS-E (`EC-UX-01`, `EC-UX-02`), WS-G (`EC-FRL-02` first-run UI) and WS-C (`EC-PPM-06`). The consequences are listed in Section 2.4.

| Workstream | Recommended model | Rationale | Expected path scope | Schema or migration | Verification consequence |
|---|---|---|---|---|---|
| WS-0 Evidence | Governance and evidence only | Read-only evidence collection (G-6, G-7) needs Founder or Mission Control access to provider consoles; it builds nothing | No repository code; evidence records under `docs/implementation/SB-P-1.12/evidence/` when authorized | None; read-only queries only, under separate authorization | None |
| WS-A1 Identity and membership | Claude Code | New tables, backfill and reconciliation are database work with migration governance; precedent: SB-P-1.11 backend | `supabase/migrations/**` (via migration mission), `tests/**`, `src/integrations/supabase/types.ts` regeneration | Yes: M-01 to M-04, M-18 | Claude Code may not verify WS-A1 |
| WS-A2 Kernel | Claude Code | `authz` schema, `SECURITY DEFINER` functions, executor roles and the verified-principal model are database-security work | `supabase/migrations/**`, `tests/**`, `src/integrations/supabase/**` | Yes: M-05, M-06 | Claude Code may not verify WS-A2 |
| WS-A3 Enforcement | Claude Code | Per-family RLS and command cut-over must change server functions, client data paths (8 files using `maybeSingle()`; 3 files using the service-role client) and migrations together, per checkpoint | `supabase/migrations/**`, `src/routes/**`, `src/server-functions/**`, `src/integrations/supabase/**`, `tests/**` | Yes: M-13 (per family), M-20; `EC-ISO-10` binds every definer function | Claude Code may not verify WS-A3 |
| WS-B Effective access | Claude Code, evidence-gated | Grant reconciliation is migration work that may start only after G-6 evidence (`EC-ISO-03`) | `supabase/migrations/**`, `tests/**` | Yes: M-17 | Claude Code may not verify WS-B |
| WS-C Product & Price Master | Claude Code (primary); split with Lovable for `EC-PPM-06` (alternative) | `EC-PPM-01` to `EC-PPM-04` change catalog functions and projection; `EC-PPM-05` is regression; `EC-PPM-06` is route and navigation UI | `supabase/migrations/**`, `src/server-functions/**`, `src/routes/_authenticated/catalog*`, navigation components, `tests/**` | Yes: M-13 catalog family, M-15 | The builder of each part may not verify that part |
| WS-D Binding and integrity | Claude Code | Confirmation bindings, serialization and the import ledger are concurrency-critical database work | `supabase/migrations/**`, `src/server-functions/catalog-import.ts`, `tests/**` | Yes: M-05 (serialization rows), M-08 | Claude Code may not verify WS-D |
| WS-E Audit and denial | Claude Code (primary); split with Lovable for `EC-UX-01`/`EC-UX-02` UI (alternative) | Audit tables and denial durability are database work; the denial contract and capability-driven UI are client work bound to kernel reason codes | `supabase/migrations/**`, `src/components/**`, `src/routes/**`, `tests/**` | Yes: M-07, M-14 | The builder of each part may not verify that part |
| WS-F History integrity (ESC-1) and `EC-LEG-02` | Claude Code | Foreign-key re-pointing, `RESTRICT`, delete guards and the tombstone hook carry the highest destructive risk in the mission | `supabase/migrations/**`, `tests/**` | Yes: M-09 to M-12 | Claude Code may not verify WS-F. ESC-1 stays OPEN T8 |
| WS-G First run, invitations, transfer | Claude Code (primary); split with Lovable for `EC-FRL-02` UI (alternative) | Commands and the transfer state machine are database work; first-run membership display is UI | `supabase/migrations/**`, `src/routes/_authenticated/dashboard.tsx`, first-run components, `tests/**` | Yes: M-16 | The builder of each part may not verify that part |
| WS-H Tests and CI | Claude Code, with each workstream | Tests ship with each workstream checkpoint (Engineering Contract `EC-TST-*`); fixtures use product commands | `tests/**`, `vitest.*.config.ts` | No new migration; tests run against the test project | The test author is the builder; the verifier challenges tests independently (IV Protocol Section 6) |
| Identity deletion | Claude Code, **only after** a separate runtime authorization | `EC-DEL-*` and `EC-LEG-01` are BUILD NOW but execution-gated; `EC-LEG-03` is evidence-only | `supabase/migrations/**`, `tests/**` when authorized | Yes: M-19, gated | Claude Code may not verify what it builds. The 22 rows stay `IN SCOPE` |
| Consumer gate and cross-cutting governance (`EC-DEP-01`, `EC-GOV-*`) | Governance and evidence only | `EC-DEP-01` is a Mission Control dependency gate; `EC-GOV-*` constrain every builder | None | None | None |

### 2.3 Why Claude Code is the primary recommendation

- It keeps schema, server and UI changes in one repository and one checkpoint, as required for per-family cut-over ("never two authority paths live on one family", EIS Section 19.1).
- It avoids a canonical-transfer step and therefore a transfer-actor exclusion (Source 18 Section 4.9).
- It lets runtime verification run against the test project. The Lovable project is bound to production.
- It keeps Lovable away from schema authoring against production.

**Cost of this model, stated plainly:** Claude Code also authored the FCTM, Blueprint Sections 1 to 21, the EIS and the package. A single actor would then define and build, so the Stage 19 verifier must be another actor (Section 5) and correlated-assumption risk is concentrated. Under Source 18 Section 4.3, Mission Control must also appoint a different Evidence and Completion compiler for the reconciliation lines of workstreams Claude Code builds, or escalate if none is eligible.

### 2.4 Consequences of the Lovable-frontend alternative

- Lovable works in `starter-supab-shell`; each Lovable change needs a mechanical, manifest-checked canonical transfer (Source 18 Stage 16). The transfer actor may not verify those workstreams.
- The delivery-repository drift in Section 2.1 item 4 must be reconciled first, because the regenerated `types.ts` conflicts with any SB-P-1.12 type regeneration.
- Lovable previews run against production, so Lovable cannot exercise the new authority UI until production schema exists. That forces a production migration before UI build, or a Lovable project bound to the test backend. Neither exists today.
- Stage 14 becomes `APPLICABLE` for those parts.

## 3. Proposed Migration Mission Manifest

**Proposal only. No SQL and no migration file was created.** File names are proposed placeholders; `<ts>` is assigned by the migration mission.

| Field | Proposal |
|---|---|
| Proposed migration mission ID | `SB-MIG-1.4` (next unused identifier; `SB-MIG-1.3` remains a separate, non-executable proposal under `docs/migration/README.md`) |
| Proposed package name | `SB-MIG-1.4 — SB-P-1.12 Authority, Identity and History-Integrity Schema` |
| Proposed file naming | `supabase/migrations/<ts>_sb_p_1_12_<class><nn>_<description>.sql`, following the SB-P-1.11 convention |
| Governing rule | `docs/migration/README.md` default-deny: an explicit mission naming package, environment, actor, branch, paths, safeguards, execution window and evidence |
| Execution environments | Test project `drravyyauixltoihzmwo` first, through `npm run supabase:test`; production `gysgzasfcjvtrgaigfyn` only under a separate production step with `CONFIRM_PRODUCTION=yes` |
| Classification vocabulary | additive; backfill; cut-over; constraint/grant/RLS; cleanup |
| Destructive-risk scale | LOW (new objects only); MEDIUM (data written or grants narrowed, reversible); HIGH (existing keys, policies or authority paths replaced; reversal must be held ready); CRITICAL (reversal not safe once dependent behaviour exists) |

### 3.1 Proposed files and groups

Rows served are listed per group in Appendix A, derived from the locked Engineering Contract mappings.

| # | Proposed file or group | Class (EIS M-class) | Obligations | FCTM rows | Depends on | Destructive risk | Rollback or reversal expectation |
|---|---|---|---|---|---|---|---|
| M-01 | `<ts>_sb_p_1_12_m1_01_persons_identity.sql` | additive (M1) | `EC-ID-01` | 7 | Evidence preconditions (Section 3.3) | LOW | Drop new objects while unreferenced |
| M-02 | `<ts>_sb_p_1_12_m1_02_business_memberships.sql` | additive (M1) | `EC-ID-02`, `EC-ISO-08` | 19 | M-01 | LOW | Drop while unreferenced |
| M-03 | `<ts>_sb_p_1_12_m1_03_participants_external_refs.sql` | additive (M1) | `EC-ID-03`, `EC-ID-05`, `EC-ISO-07` | 14 | M-01, M-02 | LOW | Drop while unreferenced |
| M-04 | `<ts>_sb_p_1_12_m2_04_persons_memberships_backfill.sql` | backfill (M2) | `EC-ID-04`, `EC-ESC-08` | 6 | M-01, M-02 | MEDIUM | Idempotent; reversible by deleting backfilled rows before anything references them; row-count reconciliation at each step |
| M-05 | `<ts>_sb_p_1_12_m1_05_authority_registry_grants_epochs.sql` | additive (M1) | `EC-KER-03`, `EC-KER-04`, `EC-KER-05`, `EC-AUT-01`, `EC-SUP-01`, `EC-EXT-01`, `EC-EXT-02`, `EC-CNF-02` | 64 | M-02, M-04 | LOW | Drop while unused |
| M-06 | `<ts>_sb_p_1_12_m3_06_authz_kernel_functions.sql` | additive functions (M3) | `EC-KER-01`, `EC-KER-02`, `EC-KER-06` to `EC-KER-09`, `EC-ISO-10` | 47 | M-05 | LOW while uncalled | Additive until callers switch; drop or revert function versions |
| M-07 | `<ts>_sb_p_1_12_m1_07_authority_events_denial_audit.sql` | additive (M1) | `EC-AUD-01`, `EC-AUD-02`; `EC-AUD-04` if human-context columns need schema (specialist question Q-14) | 10 or more | M-01 | LOW | Additive; append-only once rows exist |
| M-08 | `<ts>_sb_p_1_12_m1_08_confirmation_idempotency_import_ledger.sql` | additive (M1, M3) | `EC-CNF-01`, `EC-CNF-03`, `EC-CNF-04`, `EC-CNF-05` | 13 or more | M-05, M-06 | LOW | Additive; generalizes, does not remove, existing preview tokens and idempotency tables until a cleanup step |
| M-09 | `<ts>_sb_p_1_12_m6_09_esc1_persons_fk_not_valid.sql`, then `…_m6_09b_validate.sql` | constraint (M6) | `EC-ESC-02`, `EC-ESC-03`, `EC-ESC-05` | 9 | M-04 reconciled with zero orphans | MEDIUM | Reversible by dropping the new constraints (EIS Section 14.4 steps 1 to 3) |
| M-10 | `<ts>_sb_p_1_12_m6_10_esc1_cascade_removal_restrict.sql` | cut-over / constraint (M6) | `EC-ESC-02`, `EC-ESC-03`, `EC-ESC-04` | 10 | M-09 validated; source-complete foreign-key inventory | HIGH, then CRITICAL once governed deletion depends on it | Reversible by re-adding previous definitions, but must not be reversed once governed deletion depends on it (EIS Section 14.4) |
| M-11 | `<ts>_sb_p_1_12_m6_11_esc1_delete_guards_business_delete_revoke.sql` | constraint / grant / RLS (M6) | `EC-ESC-01`, `EC-ESC-04` | 8 | M-10 | HIGH | Re-grant and re-create policy from the recorded inventory; guards removable |
| M-12 | `<ts>_sb_p_1_12_m3_12_lifecycle_hook_tombstone_hold_state.sql` | additive functions and columns (M3, M6) | `EC-ESC-06`; `EC-LEG-02` (BUILD — AUTHORIZATION GATED; neutral technical state only) | 5 | M-10, M-11 | MEDIUM | Additive; the lifecycle command is unused until SB-P-1.19 |
| M-13 | Per-family cut-over group: `…_m4_13a_family_businesses_memberships.sql`, `…_13b_family_transactions_corrections.sql`, `…_13c_family_inventory.sql`, `…_13d_family_catalog.sql`, `…_13e_family_import_parser_support.sql` | cut-over (M3, M4) | `EC-ISO-01`, `EC-ISO-02`, `EC-ISO-04`, `EC-ID-06` | 26 | M-06, M-07, M-08; authority-surface inventory (VC-SEC-01); application code for the same family in the same checkpoint | HIGH | One revert migration held ready per family; never two authority paths live on one family |
| M-14 | `<ts>_sb_p_1_12_m6_14_catalog_provenance_widening.sql` | constraint (M6) | `EC-AUD-03` | 4 | M-13d | MEDIUM | Not reversed once non-Owner rows exist (EIS Section 19.1) |
| M-15 | `<ts>_sb_p_1_12_m3_15_catalog_capabilities_projection.sql` | cut-over functions (M3) | `EC-PPM-01` to `EC-PPM-04` | 16 | M-13d | HIGH (removes the unconditional cost return) | Function versions reverted together (EIS Section 19.1) |
| M-16 | `<ts>_sb_p_1_12_m3_16_invitations_first_run_removal_transfer.sql` | additive (M1, M3) | `EC-FRL-01` to `EC-FRL-05` | 20 | M-06, M-08, M-11 | LOW to MEDIUM | Additive; transfer only after WS-F |
| M-17 | `<ts>_sb_p_1_12_m5_17_effective_access_reconciliation.sql` | constraint / grant (M5) | `EC-ISO-03` | 2 | WS-0 G-6 evidence; M-13 complete | HIGH (revocations can break unapproved anonymous paths) | Re-grant from the recorded inventory (EIS Section 19.1) |
| M-18 | `<ts>_sb_p_1_12_m6_18_owner_id_unique_drop_mirror.sql` | cleanup (M6) | `EC-ID-04` | 4 | All `maybeSingle()` business inference removed (8 files) | MEDIUM | Re-add the `UNIQUE` constraint only while no person owns two businesses |
| M-19 | `<ts>_sb_p_1_12_m1_19_identity_deletion_foundation.sql` (separate sub-package) | additive (M1, M3) | `EC-DEL-01` to `EC-DEL-06`, `EC-LEG-01` | 33 | M-09 to M-12, M-16; **separate identity-deletion runtime authorization** | MEDIUM | Additive; no deletion executes without runtime authorization |
| M-20 | `<ts>_sb_p_1_12_m4_20_storage_business_scoping.sql` | constraint / RLS (M4) | `EC-ISO-05` | 3 | G-7 storage-policy evidence | MEDIUM | Restore previous storage policies from the recorded inventory |

The groups cover 58 of the 81 obligations and 215 of the 267 rows. The remaining 23 obligations need no schema change: application, test, governance or evidence work (`EC-ISO-06`, `EC-ISO-09`, `EC-CNF-06`, `EC-AUD-05`, `EC-UX-01`, `EC-UX-02`, `EC-PPM-05`, `EC-PPM-06`, `EC-ESC-07`, `EC-DEL-07`, `EC-LEG-03`, `EC-TST-01` to `EC-TST-04`, `EC-GOV-01` to `EC-GOV-03`, `EC-DEP-01`, `EC-ENV-01`, `EC-ENV-02`), plus `EC-AUD-04` and `EC-CNF-03` where Q-14 finds no schema need.

### 3.2 Proposed order

M-01 → M-02 → M-03 → M-04 (reconcile) → M-05 → M-06 → M-07 → M-08 → M-09 (validate; zero orphans) → M-10 → M-11 → M-12 → M-13a to M-13e (one family per checkpoint, each with its application change) → M-14 → M-15 → M-16 → M-18 → M-17 (after G-6 evidence) → M-20 (after G-7 evidence) → M-19 (only under a separate runtime authorization).

This follows EIS Section 19.2 (WS-F early; WS-D before WS-A3) and EIS Section 14.4. The specialist is asked to confirm it (Q-1).

### 3.3 Required environment and precondition evidence

| Precondition | Status today | Needed before |
|---|---|---|
| Test-project migration ledger equals `supabase/migrations/**` (24 files) | UNVERIFIED at this baseline | First test application of M-01 |
| Clean replay from zero of all 24 existing migrations plus the new files in the test project | Not run | Each package revision |
| Production migration ledger | UNKNOWN for file 11 and UNVERIFIED for file 21 (`docs/migration/README.md`) | Any production step |
| Production backup and point-in-time-recovery status and retention | UNKNOWN | Any production step; specifically M-04, M-09 to M-11, M-13, M-17 |
| Read-only counts: distinct Auth user IDs in every actor column; orphaned actor values; businesses per `owner_id` | Not collected | M-04 design and M-09 validation |
| Effective grants, RLS, functions and default privileges per role in production (G-6) | UNVERIFIED | M-17 and any production-security claim |
| Storage bucket and object policies (G-7) | UNKNOWN | M-20 |
| Provider Auth-deletion behaviour against `RESTRICT` references (G-7) | UNKNOWN | M-19 runtime |
| Production-shaped rehearsal environment and its data-handling approval | Does not exist; not approved | Rehearsing M-04, M-09 to M-11 and M-13 on realistic data (EIS Section 17) |

## 4. Repository and Branch Topology

| Item | Freshly observed | Source |
|---|---|---|
| Authoritative implementation repository | `SmartBusinessv1/smart-business`, public, `main` | `mission-control/mission_memory.md`; continuity record Section 16; `git remote` |
| Production delivery repository | `SmartBusinessv1/starter-supab-shell`, private, `main` at `9c10c538e79c89e2868b3560df03c1b5c29a3442`, 2 unreconciled Lovable commits after `205b3f7a` | GitHub API, read-only |
| Must implementation cross to `starter-supab-shell`? | **No, for implementation.** Delivery to production does need a later, separate, mechanical transfer from canonical to `starter-supab-shell` (the `SB-OPS-PROD-SYNC-1.0` pattern), plus reconciliation of the drift above | Records above |
| Application code | `src/routes/**`, `src/routes/_authenticated/**`, `src/server-functions/**` (`catalog-import.ts`, `parser-lease.ts`), `src/integrations/supabase/**` (`client.ts`, `client.server.ts`, `types.ts`, `catalog.ts`, `inventory.ts`, `transactions.ts`, auth middleware) | Repository |
| Schema | `supabase/migrations/**` (24 files); `supabase/verification/**` (3 SB-P-1.11 verification SQL files); `supabase/config.toml` | Repository |
| Tests | `tests/catalog-import` (11 files), `tests/inventory` (17), `tests/parser-lease` (2), `tests/setup` (4 helpers); plus `organizational-learning/tests` in the Fast Gate | Repository |
| `supabase/config.toml` `project_id` | `gysgzasfcjvtrgaigfyn`, the **production** ref. The safe path is `scripts/supabase-cli.mjs`, which maps `test` to `drravyyauixltoihzmwo` and refuses production without `CONFIRM_PRODUCTION=yes` | Repository |
| Branch protection on `main` (observed now) | Pull request required (0 approvals; stale reviews dismissed); admins enforced; force push disabled; **no required status checks** | GitHub API |
| Proposed implementation branches | One branch per workstream checkpoint, for example `mission/SB-P-1.12-impl-ws-a1-identity`, each opened as a PR to `main` after its migration files are merged | Proposal |
| Proposed migration branch | `mission/SB-MIG-1.4-sb-p-1-12-schema`, carrying migration files only for the authorized group; one PR per group or per execution window | Proposal |
| Canonical-transfer requirement | None for the primary recommendation. Under the Lovable-frontend alternative, every Lovable change needs a transfer record (Source 18 Stage 16), and the transfer actor may not verify it | Source 18 Sections 4.9 and 8 |

## 5. Test and Environment Facts

| Fact | KNOWN | UNKNOWN or UNVERIFIED |
|---|---|---|
| Test Supabase project | `drravyyauixltoihzmwo` (`smart-business-test`), named in `scripts/supabase-cli.mjs` and the continuity record; GitHub environment `smart-business-test` holds secrets `SUPABASE_TEST_URL`, `SUPABASE_TEST_ANON_KEY` and `SUPABASE_TEST_SERVICE_ROLE_KEY` (names only were read) | Current migration ledger; whether its data and grants still match the repository; its storage policies |
| Runtime-verification environment | None recorded for SB-P-1.12 | **UNKNOWN.** No deployed application bound to the test project is evidenced. The only Lovable project is bound to production |
| Production project | `gysgzasfcjvtrgaigfyn`; domain `https://smartbusiness.teamlips.com`; Lovable project `f3e992ec-…` | Effective grants, RLS, default privileges, ledger (files 11 and 21), backup and PITR state (G-6/T4 `UNVERIFIED`) |
| Fast Gate | Workflow `Team LIPS Application Build Assurance` on every PR and push to `main`: `npm run lint`, `npx tsc --noEmit`, `npm run build`, `npm run test:fast` (`vitest.fast.config.ts`) | Whether it runs at all now (Section 9) |
| Full Assurance | Workflow `Team LIPS Full Assurance`, environment `smart-business-test`, `npm run test:full`; triggered by PR or push to `main` changing `src/**`, `tests/**`, `supabase/**`, `lambda/**`, `scripts/**`, `package*.json`, `vitest*.ts`, `vite.config.ts`, `tsconfig*.json`, `eslint.config.*` or the two assurance workflows; also `workflow_dispatch`. Not a required check | Whether it runs at all now (Section 9) |
| Required suites (locked Checklist Section 10) | 13 new suites (`VC-TEST-01` to `VC-TEST-13`) plus regression (`VC-TEST-14`) and partial-row regression (`VC-TEST-15`); none exists yet | — |
| CI availability | Repository workflow runs: `total_count: 0`; MC-33 records an open GitHub platform incident and states that manual equivalence does not extend to application, security or migration work | When Actions will run again; what assurance substitute Mission Control will accept for implementation checkpoints |
| Provider and effective-access gates | G-6 and G-7 defined in EIS Section 17 | All live values |

**Readiness blocker (fact, not a decision):** Source 18 Stage 15 requires each checkpoint to have a green Fast Gate and, where triggered, Full Assurance. Actions currently produces no runs, and MC-33 Section 5 item 6 does not let documentation-style manual equivalence cover application, security or migration work. Implementation checkpoints cannot satisfy Stage 15 as written until Actions runs or Mission Control records a governed substitute.

## 6. Verification-Plan Preview (proposal; not an appointment)

| Item | Proposal |
|---|---|
| Codex utilization classification | `Codex Required` (IV Protocol Section 4; MC-02 seed in `mission-control/02-stage1-intake-pack.md` Section 8) |
| Intended independent verifier | **Codex**, as seeded under MC-02. Codex authored no SB-P-1.12 definition, design, package or implementation artifact found in the repository. Its SB-P-1.11 discovery and drafting role and its authorship of the IV Protocol are disclosed prior contributions |
| Eligible alternates, in order | (1) The **Security & Permissions Architecture** specialist room, eligible for implementation verification only if it neither implements nor corrects. It reviewed the Stage 7 and Stage 10 design, so Mission Control would assess correlated-assumption risk against its own earlier findings. (2) The **Supabase specialist** (Source 18 Section 4.6), provided its readiness review (Section 8) stays advisory and it authors no migration or correction. Neither is appointed |
| Not eligible | **Claude Code** for every workstream it builds, corrects or transfers. Under the primary recommendation that is every builder workstream. It is also the author of the FCTM, Blueprint, EIS and package, and MC-02 excluded it as the default alternate |
| Prior-contribution screen | Claude Code: FCTM, Blueprint Sections 1 to 21, EIS, package, this report. Security room: Stage 7 and Stage 10 reviews (`specialists/01` to `06`). Codex: none found for SB-P-1.12. Lovable: none for SB-P-1.12 |
| Workstreams the verifier must not have implemented, corrected or transferred | All of WS-A1, WS-A2, WS-A3, WS-B, WS-C, WS-D, WS-E, WS-F, WS-G, WS-H and identity deletion; any transferred frontend under the alternative |
| Coverage-and-drift duty | Independent obligation inventory from contract text (Source 18 Section 3.2 item 6). Because Claude Code authored the FCTM, Mission Control records a separation assessment if the only eligible verifier relates to that authorship |

**Highest-risk Class A boundaries** (verifier executes in the authorized test scope):

1. Cross-business read, write, reference, export and file denial on every table family, including Owner-of-A/Manager-of-B (`NP-01` to `NP-04`, `NP-06`).
2. Revocation between preview and commit for every authority-fact type, plus the business-lifecycle and transfer races and lock-order determinism (`NP-16`, `VC-CONC-01`, `VC-CONC-02`).
3. Atomic confirmation consumption and replay (`NP-17`, `NP-18`, `NP-20`).
4. Multi-row import revocation at the five EIS Section 10.3 points (`NP-19`; Founder decision F-04(c)).
5. Verified-principal rejection, including caller-supplied actor, `service_role` possession and unbound participants (`NP-07`, `NP-08`).
6. Privileged service-role paths bound to a decision record (`NP-25`).
7. Durable denial audit on direct authenticated RPC (`NP-26`).
8. Reference Cost and margin projection on every read path, including `SECURITY DEFINER` responses (`NP-14`; SEC-EIS10-12; Founder Decision Record 09).
9. ESC-1 delete paths, cascades and guards, plus tombstone behaviour (`NP-29` to `NP-34`; `NP-35` with synthetic fixtures only).
10. Active-Owner invariant and transfer completion (`NP-36` to `NP-38`).
11. Effective access for `PUBLIC`/`anon` and `SECURITY DEFINER` hardening in the test project (`NP-28`); the production claim remains G-6.
12. Backfill reconciliation with zero orphans (`VC-DB-04`).

## 7. Runtime-Verification Plan (proposal)

| Class | Checklist items | Proposed verifier | Environment |
|---|---|---|---|
| **Founder-reserved** (Build Plan Section 10.1 scenarios) | `RS-01` Scenario A; `RS-02` Scenario B | Founder, or a delegate the Founder explicitly confirms (Source 18 Section 4.2) | An application build bound to the test project with seeded Owner/Manager fixtures; production only after an authorized production migration |
| **Proposed for Mission Control designation as Founder-reserved experience anchors** | `RS-03` F-02, `RS-04` F-03, `RS-05` F-04(c) (Founder-confirmed outcomes); `RS-13` Product & Price Master in context | Founder, if Mission Control designates; otherwise delegable | Same |
| **Delegable mechanical checks** | `RS-06` to `RS-12`; the UI-observable parts of `VC-FE-01` to `VC-FE-06`; the UI-observable negative paths `NP-06`, `NP-09`, `NP-10`, `NP-13`, `NP-14`, `NP-15`, `NP-27`, `NP-46` | **HUMAN VERIFIER — TO BE NAMED BY MISSION CONTROL / FOUNDER** | Test-bound application build, with one fixture person per role and two businesses |
| **Harness-only (no human runtime surface exists in SB-P-1.12)** | `RS-14`, `RS-15`, and harness parts of `RS-10` and `RS-11` | Automated labelled harness; inspected by the Stage 19 verifier | Test project |
| **Not human runtime** | Database, concurrency and inventory items (`VC-DB-*`, `VC-CONC-*`, `VC-SEC-*`, `VC-TEST-*`) | Builder runs them; Stage 19 verifier challenges them (Class A/B) | Test project |

No authorized human verifier for delegable checks is evidenced in the repository. Runtime verification also needs an application environment bound to the test project, which is currently **UNKNOWN / not evidenced** (Section 5).

## 8. Stage 14 Applicability (recommendation)

- **Primary model (Claude Code builds all builder workstreams in canonical): `NOT APPLICABLE — JUSTIFIED`.** The builder has direct, authorized repository capability (Source 18 Stage 14).
- **Lovable-frontend alternative: `APPLICABLE`** for the Lovable-built parts only. Lovable acts through the Founder and the Lovable tool on `starter-supab-shell`, so a Founder Lovable Brief and a canonical-transfer record are required.

## 9. Supabase and Security Specialist Review — Questions for Mission Control to Send

Claude Code does not answer these on the specialist's behalf.

**Migration plan**

- **Q-1.** Is the proposed order M-01 to M-20 (Section 3.2) safe? In particular, should WS-F (M-09 to M-11) precede the WS-A3 family cut-overs (M-13), as EIS Section 19.2 directs, given that M-13b replaces direct `transactions` DML?
- **Q-2.** For M-04, what read-only queries and acceptance thresholds should prove that every distinct Auth user ID referenced by any actor column (`transactions.creator_id`, correction `edited_by`, catalog `authorized_by_user_id` and `deleted_by_user_id`, inventory actor columns) receives a `persons` row before M-09 validates? How should orphaned values with no Auth user be handled without rewriting history?
- **Q-3.** For M-10, which of the 18 `ON DELETE CASCADE` foreign keys to `businesses(id)` are retained record classes that must become `RESTRICT`, and which operational classes may keep cascades (EQ-S9-4)?
- **Q-4.** Is M-10 reversible in practice on production data, and at what point does reversal become unsafe?
- **Q-5.** Can each M-13 family cut-over run under the expected production write load, and what lock timeouts, batching or maintenance window are needed?
- **Q-6.** Is the per-family revert migration sufficient rollback for M-13, or is a point-in-time restore plan also required?

**RLS, grants and functions**

- **Q-7.** Does the kernel helper design (`STABLE`, `SECURITY DEFINER`, owned by a `NOLOGIN` role, indexed `(person_id, business_id, status)`) avoid RLS recursion and performance regression on list and search paths?
- **Q-8.** For M-17, what live G-6 evidence (per-role grants, default privileges for `postgres` and `supabase_admin`, function `EXECUTE`) must exist first, and which anonymous workflows are approved and must be preserved?
- **Q-9.** Does `EC-ISO-10` hardening (empty `search_path`, schema-qualified references, immediate `PUBLIC`/`anon` revocation) hold for every existing SB-P-1.11 definer function, or must they be re-created?
- **Q-10.** How should the service-role handlers (`catalog-import.ts`, `parser-lease.ts`, `client.server.ts`) bind the kernel decision record to every privileged query so that `service_role` bypassing RLS cannot widen scope?

**Concurrency and integrity**

- **Q-11.** Is the three-row-type serialization (`FOR SHARE` for commands, `FOR UPDATE` for authority changes, fixed lock order) deadlock-free and adequate under Supabase connection pooling (transaction mode)?
- **Q-12.** Do delete guards that stop `service_role` interfere with Supabase-managed operations or provider maintenance?
- **Q-13.** For `EC-LEG-02`, is a neutral record-level hold state safe to add in M-12 without legal semantics, and how should `NP-35` synthetic fixtures be isolated in the test project?
- **Q-14.** Do `EC-AUD-04` (human context per event) and `EC-CNF-03` (clarify and preview) need schema changes, or can they reuse existing correction-event, catalog-event and preview-token structures?

**Environments, CI and tooling**

- **Q-15.** What evidence is needed that the test project's ledger and data match the repository before M-01, and is a clean replay from zero required for every package revision?
- **Q-16.** Is a production-shaped rehearsal environment required for M-04, M-09 to M-11 and M-13? If so, what data-handling approval applies?
- **Q-17.** What production backup and PITR evidence must exist before any production step, and who collects it?
- **Q-18.** `supabase/config.toml` sets `project_id` to the production ref. Should the migration mission forbid the bare `supabase` CLI and require `scripts/supabase-cli.mjs` only, or change the default?
- **Q-19.** While GitHub Actions produces no runs, what assurance substitute is acceptable for migration and application checkpoints, given MC-33 Section 5 item 6?
- **Q-20.** After the schema changes, how should `src/integrations/supabase/types.ts` be regenerated and reconciled with the unreconciled `types.ts` change in `starter-supab-shell` (`9c10c538`)?

**Builder model**

- **Q-21.** Does the specialist see any safety reason to keep Lovable away from schema work, given that its project is bound to production Supabase?
- **Q-22.** Under either builder model, which checkpoints need the specialist's own pre-merge review rather than only Stage 19?

## Appendix A — FCTM Rows Served by Each Proposed Migration Group

Derived from the locked Engineering Contract row-to-obligation map (blob `20228e17c2fc6c36cfad9ccc1d5114873b15df1a`). No row, disposition or mapping is changed.

| Group | Rows | FCTM rows |
|---|---|---|
| M-01 | 7 | `21-§5-1`, `22-§5-2`, `22-§5-3`, `22-§5-4`, `22-§33-2`, `22-§33-23`, `BP-§10.1-2` |
| M-02 | 19 | `21-§4-1`, `21-§4-2`, `21-§4-3`, `21-§5-2`, `21-§5-3`, `22-§5-1`, `22-§5-2`, `22-§5-3`, `22-§5-4`, `22-§21`, `20-§16-1`, `17-§13-1`, `17-§13-2`, `17-§13-3`, `7-§10-1`, `7-§10-2`, `7-§10-3`, `BP-§10.1-1`, `BP-§10.1-2` |
| M-03 | 14 | `21-§4-4`, `21-§4-5`, `21-§4-6`, `21-§6-6`, `21-§6-7`, `22-§5-5`, `22-§5-6`, `22-§5-7`, `22-§5-8`, `22-§5-9`, `22-§28-6`, `22-§29-6`, `17-§13-4`, `7-§10-4` |
| M-04 | 6 | `21-§4-1`, `22-§5-2`, `22-§20-1`, `22-§20-4`, `20-§16-1`, `BP-§10.1-13` |
| M-05 | 64 | `21-§4-2`, `21-§4-3`, `21-§5-4`, `21-§5-7`, `21-§5-10`, `21-§10-1`, `21-§10-2`, `21-§10-3`, `21-§10-4`, `21-§10-5`, `21-§10-6`, `21-§12-1`, `21-§12-2`, `21-§12-3`, `21-§12-4`, `21-§12-5`, `21-§13-1`, `21-§13-2`, `21-§13-3`, `21-§14-1`, `21-§14-2`, `21-§14-3`, `21-§14-4`, `21-§14-5`, `21-§14-6`, `21-§14-7`, `21-§15-5`, `21-§16-1`, `21-§16-2`, `21-§17`, `21-§19-7`, `21-§19-8`, `21-§21-3`, `21-§23-2`, `21-§23-3`, `21-§23-4`, `21-§23-6`, `21-§24-5`, `21-§24-7`, `21-§24-8`, `21-§24-9`, `21-§24-10`, `21-§24-11`, `22-§6-6`, `22-§13-4`, `22-§20-3`, `22-§23-3`, `22-§23-4`, `22-§28-4`, `22-§28-8`, `22-§29-7`, `20-§16-2`, `20-§16-3`, `20-§23-11`, `17-§13-2`, `17-§13-3`, `17-§13-4`, `17-§18-2`, `17-§21-4`, `17-§22-3`, `BP-§10.1-3`, `BP-§10.1-4`, `BP-§10.1-5`, `BP-§10.1-10` |
| M-06 | 47 | `21-§5-1`, `21-§5-2`, `21-§5-3`, `21-§5-4`, `21-§5-5`, `21-§5-6`, `21-§5-7`, `21-§5-8`, `21-§5-9`, `21-§5-10`, `21-§7`, `21-§8`, `21-§9`, `21-§10-6`, `21-§11-2`, `21-§12-5`, `21-§15-1`, `21-§15-2`, `21-§15-3`, `21-§15-4`, `21-§15-5`, `21-§17`, `21-§22`, `21-§23-5`, `21-§24-4`, `21-§24-6`, `21-§24-8`, `22-§6-2`, `22-§6-3`, `22-§6-9`, `22-§6-10`, `22-§28-2`, `22-§28-9`, `22-§29-3`, `17-§14-2`, `17-§14-3`, `17-§14-4`, `17-§14-5`, `17-§14-6`, `17-§18-2`, `17-§18-4`, `17-§21-4`, `7-§12`, `BP-§10.1-3`, `BP-§10.1-5`, `BP-§10.1-7`, `BP-§10.1-8` |
| M-07 | 10 | `21-§19-1`, `21-§19-2`, `21-§19-3`, `21-§19-4`, `21-§19-5`, `21-§19-6`, `21-§19-7`, `21-§19-8`, `21-§20-5`, `21-§23-7` |
| M-07 (if `EC-AUD-04` needs schema; Q-14) | +6 | `22-§14-1`, `22-§14-4`, `22-§14-5`, `22-§14-6`, `22-§14-8`, `22-§29-12` |
| M-08 | 13 | `21-§17`, `21-§18-1`, `21-§18-2`, `21-§18-3`, `21-§18-4`, `21-§18-5`, `21-§18-6`, `22-§13-3`, `22-§13-5`, `22-§14-7`, `22-§15`, `22-§29-8`, `BP-§10.1-5` |
| M-08 (if `EC-CNF-03` needs schema; Q-14) | +2 | `22-§13-1`, `22-§13-2` |
| M-09 | 9 | `21-§11-1`, `22-§20-2`, `22-§33-8`, `22-§33-17`, `22-§33-18`, `22-§33-19`, `22-§33-20`, `22-§33-22`, `22-§33-39` |
| M-10 | 10 | `21-§11-1`, `22-§14-5`, `22-§20-2`, `22-§33-8`, `22-§33-17`, `22-§33-18`, `22-§33-19`, `22-§33-20`, `22-§33-22`, `22-§33-36` |
| M-11 | 8 | `21-§23-6`, `22-§14-5`, `22-§20-2`, `22-§33-17`, `22-§33-20`, `22-§33-22`, `22-§33-36`, `22-§33-39` |
| M-12 | 5 | `22-§20-1`, `22-§20-2`, `22-§33-4`, `22-§33-24`, `22-§33-26` |
| M-13 | 26 | `21-§6-1`, `21-§6-2`, `21-§6-6`, `21-§6-7`, `21-§7`, `21-§11-1`, `21-§11-2`, `21-§15-1`, `21-§15-3`, `21-§15-5`, `21-§21-4`, `21-§23-1`, `21-§24-2`, `21-§24-4`, `22-§6-4`, `22-§6-5`, `22-§6-7`, `22-§23-2`, `22-§29-3`, `17-§14-1`, `17-§14-7`, `17-§18-1`, `17-§22-9`, `7-§15-12`, `BP-§10.1-6`, `BP-§10.1-7` |
| M-14 | 4 | `21-§19-8`, `22-§14-2`, `22-§14-3`, `22-§14-9` |
| M-15 | 16 | `21-§4-2`, `21-§5-4`, `21-§24-3`, `22-§5-8`, `17-§13-2`, `17-§18-2`, `17-§21-4`, `17-§22-2`, `7-§10-1`, `7-§10-2`, `7-§10-3`, `7-§10-4`, `7-§12`, `7-§15-10`, `BP-§10.1-3`, `BP-§10.1-11` |
| M-16 | 20 | `21-§4-1`, `21-§5-2`, `21-§5-10`, `21-§6-7`, `21-§15-1`, `21-§17`, `21-§18-1`, `21-§18-2`, `22-§33-4`, `22-§33-5`, `22-§33-6`, `22-§33-11`, `22-§33-18`, `22-§33-32`, `22-§33-34`, `20-§16-1`, `20-§16-2`, `20-§16-3`, `20-§16-4`, `20-§23-11` |
| M-17 | 2 | `BP-§10.1-7`, `BP-§10.1-8` |
| M-18 | 4 | `21-§4-1`, `22-§5-2`, `20-§16-1`, `BP-§10.1-13` |
| M-19 | 33 | `22-§33-1`, `22-§33-2`, `22-§33-3`, `22-§33-4`, `22-§33-5`, `22-§33-6`, `22-§33-7`, `22-§33-8`, `22-§33-9`, `22-§33-10`, `22-§33-11`, `22-§33-12`, `22-§33-13`, `22-§33-14`, `22-§33-15`, `22-§33-16`, `22-§33-19`, `22-§33-21`, `22-§33-22`, `22-§33-23`, `22-§33-24`, `22-§33-25`, `22-§33-26`, `22-§33-27`, `22-§33-28`, `22-§33-29`, `22-§33-30`, `22-§33-31`, `22-§33-33`, `22-§33-34`, `22-§33-35`, `22-§33-37`, `22-§33-38` |
| M-20 | 3 | `21-§6-4`, `21-§6-5`, `22-§6-8` |

## Status

Readiness inputs only. Implementation Authorization stays `WITHHELD`. ESC-1 OPEN T8; `22-§20-2` BLOCKED / IN SCOPE; G-6/T4 UNVERIFIED; professional legal, privacy and retention validation deferred; identity-deletion runtime not authorized; no schema, SQL, migration, provider or production action taken.
