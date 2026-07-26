Document: Test Environment Isolation

Version: 1.0

Status: ACCEPTED

Created By: Claude Code

Reviewed By: Mission Control

Review Date: 2026-07-26

Mission: SB-MIG-1.2E-B

# SB-MIG-1.2E-B — Automated Test Environment Isolation

## 1. Objective

Isolate the Smart Business automated test suite from the Team LIPS production Supabase project, so automated tests can never modify production data or use production credentials, clearing the way for a safe production application cutover.

## 2. Phase 1 — Test Infrastructure Audit (findings)

- Credentials load via `tests/setup/load-env.ts` (Vitest `setupFiles`), reading `.env.test` then `.env.test.local`, requiring `SUPABASE_TEST_URL`, `SUPABASE_TEST_ANON_KEY`, `SUPABASE_TEST_SERVICE_ROLE_KEY`.
- Before this mission: `.env.test` (tracked in git) set the URL/anon key to the **production** project (`gysgzasfcjvtrgaigfyn`); `.env.test.local` (gitignored) held production's actual service-role secret. `.env.test.local.example`'s own setup instructions called this "the dedicated test project" — the conflation was embedded in onboarding instructions, not just a stale comment.
- `tests/setup/test-clients.ts` builds an `adminClient` (service-role) and `createAnonClient()` (anon key). By design, tests sign in for real via `auth.signInWithPassword()` so RLS is exercised exactly as in production. The admin client provisions real synthetic users (`sb-p-1-10-tests+{label}-{uuid}@example.com`) and business rows directly.
- 17 test files under `tests/inventory/`, run sequentially (`vitest.config.ts`: `fileParallelism: false`), covering every table hardened in SB-MIG-1.2E.
- No CI workflow runs this suite (only unrelated Markdown-linting Actions exist) — it's run manually, locally, via `npm run test` (`vitest run`).
- This was a known, previously-managed condition (not a fresh discovery) — see `docs/migration/SB-MIG-1.2/03-test-data-cleanup-report.md`, `docs/migration/SB-MIG-1.2D/06-test-data-cleanup.md`, and `docs/migration/SB-MIG-1.2C/08-founder-actions.md` item #14, all of which document cleaning up test-generated rows from this same production project after prior test runs.

## 3. Phase 2 — Strategy Decision

Three options considered: (A) dedicated Supabase cloud test project, (B) shared development project, (C) local Supabase CLI/Docker stack. **Option A selected** — zero code changes needed (the harness is already fully env-var-parameterized), fastest to stand up using a workflow the Founder already executed twice this mission (Google Cloud, Resend), and it fully closes the actual risk. Option C (local stack) was a reasonable alternative but introduces a new dependency (Docker) not otherwise used in this project; noted as a future option if a CI pipeline is added later.

**Amendment (approved by Mission Control mid-mission):** rather than creating the test project under the Team LIPS organization (which, being on Pro, would default new projects to paid Micro compute, ~$10/month), a **separate, new Free-plan Supabase organization** was created instead. This achieves genuinely $0/month for the test project — its compute needs never scale with production client growth, since it only ever runs the same fixed, synthetic Vitest fixture load regardless of real usage — while keeping the ~$10/month Micro upgrade available for production instead, when the pilot-onboarding trigger from `09-infrastructure-health.md` is reached.

## 4. Phase 4 — Dedicated Test Project

| Field | Value |
| --- | --- |
| Organization | Smart Business Testing (Free plan) |
| Project name | smart-business-test |
| Project reference | `drravyyauixltoihzmwo` |
| Region | South Asia (Mumbai) — matches production |
| Compute | Nano (free) |
| Health | Healthy |
| Separate from production? | Yes — distinct organization entirely, distinct project ref from `gysgzasfcjvtrgaigfyn` |

Project-creation security settings applied (matching production's own hardening from `06-api-review.md`): "Automatically expose new tables" left **unchecked**; "Enable automatic RLS" (event-trigger safety net) **checked**.

## 5. Phase 5 — Schema Synchronization

Applied via `npx supabase link --project-ref drravyyauixltoihzmwo` + `npx supabase db push`, replaying all 11 tracked migrations from `supabase/migrations/`.

**A critical incident occurred and was fully resolved during this phase**, documented here in full since it's directly relevant to anyone repeating this kind of operation:

1. Initial `db push` attempts failed with `relation "businesses" already exists`, even though the freshly-created test project's Table Editor and a direct SQL query both confirmed the `public` schema was empty.
2. Root cause, found via `npx supabase db push --debug`: the Supabase CLI auto-reads `SUPABASE_PROJECT_ID` from a `.env` file in the working directory as an override — and this repo's own `.env` sets that variable to the **production** project ref. Every `db push` attempt was silently targeting **production**, not the linked test project, regardless of the `--project-ref` flag or `supabase link` state.
3. **Verified via production's own Postgres logs that no harm occurred**: the only statements that reached production were idempotent CLI bookkeeping (`CREATE SCHEMA IF NOT EXISTS`, `CREATE TABLE IF NOT EXISTS`, `ADD COLUMN IF NOT EXISTS`) and one `CREATE TABLE public.businesses` that failed immediately and rolled back (production already has this table). No `GRANT`, `ALTER`, `DROP`, `INSERT`, `UPDATE`, or `DELETE` ever reached production. Confirmed independently via row-count query (all 7 relevant tables/`auth.users` at 0 rows, matching the pre-existing clean baseline from `SB-MIG-1.2D`).
4. **Fix**: explicitly setting `$env:SUPABASE_PROJECT_ID` to the test project's ref in the terminal session, overriding the `.env` file's value, before running CLI commands.
5. **Operational lesson for future work in this repo**: any Supabase CLI operation must explicitly set `$env:SUPABASE_PROJECT_ID` for the intended target first — do not rely on `--project-ref` or `supabase link` alone while this repo's `.env` contains a `SUPABASE_PROJECT_ID` value, since the CLI silently prioritizes the `.env` file.

Two further issues were found and resolved while replaying the full migration history from empty, both genuine pre-existing gaps in the migration file set (not caused by this work), resolved via `supabase migration repair --status applied <version>` (marking them as already-satisfied rather than re-running them):

- `20260719140000` is a byte-for-byte functional duplicate of `20260719102137` (identical table/indexes/trigger/grants/policies, only added comments) — safe to treat as a no-op.
- `20260723200718` / `20260723200952` grant/revoke a Postgres role `sandbox_exec` — a Lovable-platform-specific role (used by Lovable's live-preview sandbox execution environment) that a dashboard-created, non-Lovable-connected project like this test project never has and doesn't need.

**Verification of final schema state** (via direct SQL queries, not just the CLI): all 6 tables present with RLS enabled on each, matching production exactly. 9 functions present (8 matching production's set exactly, all `SECURITY INVOKER`; the 9th, `rls_auto_enable`, is Supabase's own platform-generated function for the "Enable automatic RLS" project setting, `SECURITY DEFINER` as Supabase designs it, not from any of our migrations). 12 triggers (5 Supabase system-level defaults on `realtime`/`storage` schemas, 7 matching our expected application triggers exactly). 5 extensions (4 matching production's set — `pgcrypto`, `uuid-ossp`, `plpgsql`, `pg_stat_statements` — plus `supabase_vault`, a newer Supabase platform default not present on the older production project).

## 6. A Genuine Schema Gap Found During Test Execution (Phase 7)

Running the full suite against the freshly-synced test project surfaced one real test failure: `correction-behaviour.test.ts`'s test for RLS-mediated UPDATE denial on `inventory_movements` expected `result.error` to be `null` (i.e., RLS silently matching zero rows), but got a hard Postgres permission-denied error instead.

Investigation confirmed this is a genuine gap between production's true schema and what the tracked migration files capture: our migrations only `GRANT SELECT, INSERT ON public.inventory_movements TO authenticated` — no `UPDATE`. The test's own inline comment, and the existence of an `inventory_movements_no_update`/`inventory_movements_no_delete` defense-in-depth trigger pair (which is only meaningful if `authenticated` has UPDATE/DELETE privilege to be caught by), both confirm production must have an additional `GRANT UPDATE, DELETE ON public.inventory_movements TO authenticated` that was applied directly to production outside of any file in this repository — consistent with the "orphan migration versions" gap already flagged in `06-api-review.md` §2.3 (remote migration history entries with no local file counterpart).

**Applied to the test project** (not a migration file, since the original statement's exact provenance is unknown): `GRANT UPDATE, DELETE ON public.inventory_movements TO authenticated;`. After this, all 62 tests across all 17 files pass.

**Flagged for whoever eventually reconciles the orphan-migration gap in production** (referenced also in `06-api-review.md` and `10-final-readiness-report.md`): this is a second, concrete, specific example of a change that exists on production but not in this repo's tracked migration history, beyond the previously-flagged unnamed July 24 versions.

## 7. Phase 6 — Test Credentials

`.env.test` updated: `SUPABASE_TEST_URL` and `SUPABASE_TEST_ANON_KEY` now point to the test project (`drravyyauixltoihzmwo`, current-format `sb_publishable_...` key). `.env.test.local` updated by the Founder directly (never shared in chat) with the test project's `sb_secret_...` key. `.env.test.local.example` rewritten to reference the test project and its actual current setup path (`Project Settings → API Keys → Secret keys`), and its stale reference to a non-existent `tests/setup/global-setup.ts` corrected to the actual current file, `tests/setup/test-clients.ts`. Confirmed via repository-wide search: no remaining reference to the production project ref anywhere under `tests/`.

## 8. Phase 7 — Test Execution

Full suite run twice: first run surfaced the genuine schema gap in §6 (1 failed, 61 passed); after applying the missing grant, second run: **62 passed, 0 failed, across all 17 test files.** Test output confirmed environment files were loaded correctly (`injected env (2) from .env.test`, `injected env (1) from .env.test.local`).

## 9. Phase 8 — Production Verification

- **Row counts**: `businesses`, `inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`, `transactions`, `transaction_correction_events`, and `auth.users` all confirmed at **0 rows** on production — unchanged from the clean baseline established in `SB-MIG-1.2D`.
- **Production Postgres logs**, inspected directly for the exact window of the earlier CLI incident: only idempotent bookkeeping statements and one failed, rolled-back `CREATE TABLE` reached production; one connection attempt was rejected outright at the network/auth level before any SQL could run. No mutating statement of any kind reached production.

**Conclusion: production is verified untouched by this mission's work, including during the CLI misconfiguration incident.**

## 10. Phase 10 — Required Future Engineering Workflow

| Purpose | Target |
| --- | --- |
| Manual/local development | Local dev environment, pointed at Team LIPS Supabase per `.env` (unchanged by this mission) |
| Automated tests (`npm run test`) | **smart-business-test** project (org: Smart Business Testing, Free plan) — never production |
| Preview / integration testing | Lovable Preview, connected to Team LIPS Supabase (per `05-security-review.md` §1) |
| Production | Team LIPS Supabase (`gysgzasfcjvtrgaigfyn`), reached only via an explicitly authorized production cutover |

**No workflow should ever permit automated tests to target production.** Concretely, this means: never remove or repoint `SUPABASE_TEST_URL`/`SUPABASE_TEST_ANON_KEY`/`SUPABASE_TEST_SERVICE_ROLE_KEY` to the production project ref, and — per the incident in §5 — always be aware that the Supabase CLI will silently prefer a `SUPABASE_PROJECT_ID` value from `.env` over any `--project-ref` flag or `supabase link` state, so any future CLI operation against a non-default project must explicitly override `$env:SUPABASE_PROJECT_ID` first.

## 11. Outcome

```text
SB-MIG-1.2E-B PASS — AUTOMATED TESTS FULLY ISOLATED FROM PRODUCTION
```

Automated tests no longer target production. A dedicated, genuinely separate (different organization, different account boundary) test environment is operational, schema-complete, and fully passing (62/62 tests). Production credentials have been fully removed from all test configuration and setup documentation. Production has been verified untouched via both row-count evidence and direct log inspection, including through the CLI misconfiguration incident encountered mid-mission. Two genuine gaps between production's true state and this repository's tracked migration history were newly discovered and are flagged for future reconciliation, but do not block this mission's completion criteria.
