Document: Infrastructure Audit Report

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.1

# SB-MIG-1.1 — Infrastructure Audit Report

## 1. Mission Metadata

| Field | Value |
| --- | --- |
| Mission ID | SB-MIG-1.1 |
| Mission Name | Environment Audit & Infrastructure Discovery |
| Parent Mission | SB-MIG-1.0 (Phase 1) |
| Mission Type | Read-only assessment. No infrastructure was modified, no migrations executed, no data deleted, Lovable was not reconnected. |
| Audit date | 24 July 2026 |
| Repository | SmartBusinessv1/smart-business, `main` branch |

## 2. Scope and Method

This report covers Audit 1 (Repository Infrastructure) only. Audits 2–7 are reported in the companion documents listed in the mission's Deliverables section. Repository findings below were gathered by direct file inspection (migrations, source, config) of the working tree at the time of this audit. All 12 sub-items requested by the mission brief are covered.

---

## 3. Supabase Configuration

`supabase/config.toml` — entire contents:

```text
project_id = "wwgqnshcgbukqczqblsm"
```

No other keys or sections are present (no `[api]`, `[auth]`, `[db]`, `[studio]` blocks). No other Supabase CLI config files exist anywhere in the repository. `supabase/` contains only `config.toml` and `migrations/`.

The project ref `wwgqnshcgbukqczqblsm` matches the URL in the tracked `.env` (`https://wwgqnshcgbukqczqblsm.supabase.co`) — this is the Lovable-managed backend the repository's CLI config points at, confirmed live via direct query (see Audit 3 in `02-database-comparison-report.md`).

**Status: Exists.**

---

## 4. Migration History

11 files in `supabase/migrations/`, in chronological order:

| # | Filename | Summary |
| - | --- | --- |
| 1 | `20260708210504_0a471e2c-a76c-4178-8aa2-79a3744e8bd2.sql` | Creates `public.businesses` (owner_id, name, category, locality); RLS + 4 owner-scoped CRUD policies; creates `update_updated_at_column()` trigger function. |
| 2 | `20260719102137_55a1dac6-b26a-47e6-aed3-305b9b20636b.sql` | Creates `public.transactions`; 2 indexes; SELECT/INSERT-only grants; RLS with owner-scoped SELECT/INSERT policies; `updated_at` trigger. |
| 3 | `20260719140000_f24b4d69-127e-4547-9fff-8ed9f31cc8fe.sql` | Re-creates the same `public.transactions` table/indexes/trigger/policies as #2 (no `IF NOT EXISTS`), with added design-intent comments. **Not present in the Lovable backend's applied-migrations record — see Finding INF-1 below.** |
| 4 | `20260720142204_3786b8a1-e72a-4ae4-88b3-837b76ce1bf9.sql` | SB-P-1.9: adds an UPDATE policy on `transactions`; creates `public.transaction_correction_events` (RLS + SELECT policy + trigger); creates `correct_transaction()` (initially SECURITY DEFINER). |
| 5 | `20260720142248_97de5be2-ef9f-4283-9318-9eb9f9a6cca1.sql` | Adds INSERT policy on `transaction_correction_events`; replaces `correct_transaction()` to run SECURITY INVOKER (authorization delegated to RLS). |
| 6 | `20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql` | SB-P-1.10 "Inventory Foundation" (20,981 bytes, largest migration). Enables `pgcrypto`; creates 3 enums; creates `inventory_items`, `inventory_movements` (append-only ledger), `inventory_movement_idempotency_keys`; RLS + policies on all three; triggers for updated_at, immutability guard, append-only enforcement; creates `create_inventory_movement()`, `preview_inventory_movement()`, `inventory_current_stock_batch()`, `inventory_movement_remaining_compensable()`. |
| 7 | `20260723200622_c91f9e51-70ba-4b7c-b952-9e2ac9b4b0a8.sql` | One-line data cleanup: deletes a stray/test row (`name = 'Rogue Item'`) from `inventory_items`. |
| 8 | `20260723200718_f9801e9d-3f18-4827-b3db-196e6a11af8d.sql` | `GRANT authenticated TO sandbox_exec;` |
| 9 | `20260723200952_78716769-3b76-4595-a46c-3a6158ebba0c.sql` | `REVOKE authenticated FROM sandbox_exec;` — reverses #8. |
| 10 | `20260724085729_272cf407-5ca1-4433-b6e1-f39f9e44c13b.sql` | `ALTER FUNCTION create_inventory_movement(...) SET search_path = public, extensions;` — the SB-P-1.10-FIX-DIGEST-1.0 corrective migration. |
| 11 | `20260724170000_6a0f8a74-e7aa-4200-b54b-3fd57a7c9c62.sql` | SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0: replaces `create_inventory_movement()` to fix an idempotency-replay defect (`SELECT ... FOR UPDATE` silently returning zero rows under this table's RLS policy). **Committed to the repository but not yet applied to the Lovable backend — see Finding INF-2 below.** |

**Exact count: 11 migration files.**

**Finding INF-1 — repository/production drift on migration #3.** The Lovable backend's `supabase_migrations.schema_migrations` table (queried directly, see `02-database-comparison-report.md` §2) has no entry for `20260719140000`. Since migration #3 issues a plain `CREATE TABLE public.transactions` with no `IF NOT EXISTS` guard, and migration #2 already creates that table, running #3 against a database where #2 is already applied would fail outright. The live schema matches what #2 (not #3) would produce. **Requires manual verification**: why this file exists in the repository if it was never (and structurally could not be, post-#2) applied — e.g., an abandoned draft, a locally-tested alternate version never promoted, or a Lovable build artifact. Not asserted as harmful; flagged because the repository's own migration history does not fully reconcile with the deployed schema's history.

**Finding INF-2 — corrective migration not yet deployed.** Migration #11 (the idempotency-replay fix) is committed to `main` and was applied to and verified against the dedicated test project only. Direct inspection of the Lovable backend (Audit 3) confirms `create_inventory_movement()` there still contains the pre-fix, defective idempotency logic. This is a known, already-documented gap (see `docs/implementation/SB-P-1.10/completion-report.md` §6 "Deployment status"), repeated here because it is directly relevant to migration planning: whichever environment becomes authoritative post-migration must receive this fix.

---

## 5. SQL Functions

All `CREATE FUNCTION` / `CREATE OR REPLACE FUNCTION` statements across all migrations (repository history; see `02-database-comparison-report.md` for what is actually live in each database):

| Function | Defined/altered in | Purpose |
| --- | --- | --- |
| `update_updated_at_column()` | Migration 1 | Generic `BEFORE UPDATE` trigger; sets `NEW.updated_at = now()`. Reused by 4 tables. |
| `correct_transaction(...)` | Migration 4 (SECURITY DEFINER) → Migration 5 (replaced, SECURITY INVOKER) | Owner-only in-place correction of a transaction row; logs before/after to `transaction_correction_events`. |
| `inventory_items_guard()` | Migration 6 | `BEFORE UPDATE` trigger; blocks changes to `id`, `business_id`, `base_unit` (immutability guard). |
| `inventory_movements_reject_mutation()` | Migration 6 | Trigger function; unconditionally raises, used to hard-block UPDATE/DELETE on the append-only ledger. |
| `create_inventory_movement(...)` | Migration 6 → altered by Migration 10 (search_path only) → replaced by Migration 11 | Central RPC for every stock-affecting write. |
| `preview_inventory_movement(...)` | Migration 6 | Read-only stock-projection RPC for UI warnings. |
| `inventory_current_stock_batch(uuid[])` | Migration 6 | Batch stock aggregation (avoids N+1 in list views). |
| `inventory_movement_remaining_compensable(uuid)` | Migration 6 | Remaining compensable quantity for a correction target. |

**Exact count: 8 distinct functions** defined across migration history (one, `create_inventory_movement`, has 3 revisions).

---

## 6. Triggers

| Trigger | Table | Event | Function | Defined in |
| --- | --- | --- | --- | --- |
| `update_businesses_updated_at` | `businesses` | BEFORE UPDATE | `update_updated_at_column()` | Migration 1 |
| `update_transactions_updated_at` | `transactions` | BEFORE UPDATE | `update_updated_at_column()` | Migrations 2, 3, 4 (re-created as the table itself was re-defined) |
| `update_transaction_correction_events_updated_at` | `transaction_correction_events` | BEFORE UPDATE | `update_updated_at_column()` | Migration 4 |
| `update_inventory_items_updated_at` | `inventory_items` | BEFORE UPDATE | `update_updated_at_column()` | Migration 6 |
| `inventory_items_guard_trg` | `inventory_items` | BEFORE UPDATE | `inventory_items_guard()` | Migration 6 |
| `inventory_movements_no_update` | `inventory_movements` | BEFORE UPDATE | `inventory_movements_reject_mutation()` | Migration 6 |
| `inventory_movements_no_delete` | `inventory_movements` | BEFORE DELETE | `inventory_movements_reject_mutation()` | Migration 6 |

**Exact count: 9 `CREATE TRIGGER` statements across 8 distinct trigger names** in the repository's migration history (the discrepancy is `update_transactions_updated_at`, issued 3 times as `transactions` was redefined). Live counts per database are in `02-database-comparison-report.md`.

---

## 7. RLS Policies

16 `CREATE POLICY` statements across all migrations, covering 6 tables. Full policy-by-policy detail (command, role, condition) is in `02-database-comparison-report.md` §3, since it is identical to what was independently re-verified live against both databases. Every `CREATE TABLE` in the migration history has a corresponding `ENABLE ROW LEVEL SECURITY` statement — no table is missing RLS at the repository level, and this was independently confirmed live on both databases (Audit 2/3).

No UPDATE or DELETE policy exists for `transaction_correction_events`, no DELETE policy for `inventory_items`, and no UPDATE/DELETE policy for `inventory_movements` or `inventory_movement_idempotency_keys` — consistent with the append-only design documented in the migration comments. **Finding INF-3** (elaborated in `03-migration-risk-register.md`): the absence of an UPDATE/DELETE *policy* is not the same as an absence of UPDATE/DELETE *grant* — see the grants finding in the database comparison report.

---

## 8. Seed Files

Searched the full repository (excluding `node_modules`, `.git`) for `seed.sql`, `supabase/seed/`, and any similarly named seed-data file.

**Result: none found.**

---

## 9. Edge Functions

Searched for `supabase/functions/` and any Deno-style edge function source anywhere in the repository.

**Result: none found** in the repository. Independently confirmed **zero Edge Functions deployed** on the Team LIPS Supabase project (`gysgzasfcjvtrgaigfyn`) via direct tooling. The Lovable-managed project's deployed Edge Functions (if any exist outside what the repository would show — Edge Functions can be deployed without a corresponding repository artifact) could not be enumerated from this environment. **Requires manual verification**: confirm via the Lovable dashboard or Supabase dashboard for project `wwgqnshcgbukqczqblsm` that no Edge Functions are deployed there either.

---

## 10. Storage Configuration

Searched all migrations and all of `src/` for `storage.buckets`, `storage.objects`, bucket-creation/policy SQL, and any Supabase Storage client usage.

**Result: none found** in the repository or application code. Independently confirmed **zero storage buckets** on both the Team LIPS Supabase project and the Lovable-managed backend via direct query (`SELECT * FROM storage.buckets` returned 0 rows on both — see `02-database-comparison-report.md`).

---

## 11. Environment Variable Usage

Full detail, classification, and cross-reference against code usage is in the dedicated `04-environment-variable-inventory.md` deliverable. Summary: 6 variables in tracked `.env` (3 real values + 3 `VITE_`-prefixed duplicates), 1 code-referenced variable (`SUPABASE_SERVICE_ROLE_KEY`) present in no tracked file and not in `.env.test`/`.env.test.local` either (it is a Lovable Cloud runtime-injected secret with no local record of its value or injection mechanism), and the test-suite's own 3 `SUPABASE_TEST_*` variables.

---

## 12. Authentication Configuration

Supabase Auth is wired up across:

- **`src/integrations/supabase/client.ts`** — browser/client Supabase client singleton; `VITE_SUPABASE_URL`/`VITE_SUPABASE_PUBLISHABLE_KEY` (SSR fallback to `process.env.SUPABASE_URL`/`SUPABASE_PUBLISHABLE_KEY`); `persistSession: true`, `autoRefreshToken: true`; custom fetch wrapper stripping the `Authorization` header for new-format opaque Supabase API keys.
- **`src/integrations/supabase/client.server.ts`** — server-only admin client using `SUPABASE_SERVICE_ROLE_KEY` (bypasses RLS; documented as never to be exposed client-side).
- **`src/integrations/supabase/auth-middleware.ts`** — `requireSupabaseAuth`, a TanStack Start server-function middleware validating a `Bearer` JWT via `supabase.auth.getClaims(token)`.
- **`src/integrations/supabase/auth-attacher.ts`** — `attachSupabaseAuth`, a client-side middleware attaching the session's `access_token` to outgoing server-function RPCs; registered globally in `src/start.ts`.
- **`src/hooks/use-auth.tsx`** — `useAuth()` hook subscribing to `supabase.auth.onAuthStateChange`.
- **`src/routes/auth.tsx`** — sign-in/sign-up/forgot-password; `supabase.auth.signInWithPassword`, `signUp`, `resetPasswordForEmail`; also offers Google OAuth via the Lovable Cloud Auth wrapper.
- **`src/routes/reset-password.tsx`** — password-reset landing page; listens for the `PASSWORD_RECOVERY` event, calls `supabase.auth.updateUser({ password })`.
- **`src/integrations/lovable/index.ts`** — wraps `@lovable.dev/cloud-auth-js`'s `createLovableAuth()` for OAuth; on success, hands the OAuth-issued tokens to the Supabase client via `supabase.auth.setSession(...)`. **This is a Lovable-managed integration layer that will need to be replaced or re-pointed as part of any migration off Lovable Cloud** — flagged in `03-migration-risk-register.md`.
- **Protected-route mechanism**: `src/routes/_authenticated/route.tsx` — TanStack Router layout route (`ssr: false`) with a `beforeLoad` guard calling `supabase.auth.getUser()`; redirects to `/auth` on failure. All authenticated routes (dashboard, inventory, transactions) inherit this guard.

Independently confirmed live: both databases show real Auth usage. The Lovable backend has 2 `auth.users` rows (1 email-provider identity, 1 Google-OAuth identity); the Team LIPS project has 188 `auth.users` rows, all email-provider (entirely automated-test-created accounts — see `02-database-comparison-report.md` §5 and the data inventory in that same document). Neither MCP surface exposes GoTrue-level Auth *settings* (email-confirmation requirement, OAuth provider configuration, session lifetime) via SQL — **provider configuration parity between the two projects requires manual verification** via each project's Supabase dashboard.

---

## 13. Test Infrastructure

`tests/` directory: 17 test files under `tests/inventory/` + 4 setup files under `tests/setup/` (assertions, inventory-rpc, load-env, test-clients). Full inventory already documented in `docs/implementation/SB-P-1.10/evidence/tests/`; not duplicated here beyond confirming it exists and is current.

`vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: "node",
    setupFiles: ["./tests/setup/load-env.ts"],
    include: ["tests/**/*.test.ts"],
    testTimeout: 30000,
    hookTimeout: 30000,
    fileParallelism: false,
  },
});
```

`package.json` script: `"test": "vitest run"`. The suite runs against the Team LIPS Supabase project (`gysgzasfcjvtrgaigfyn`) exclusively, and requires `SUPABASE_TEST_URL`, `SUPABASE_TEST_ANON_KEY`, and `SUPABASE_TEST_SERVICE_ROLE_KEY` (the last gitignored) — see `04-environment-variable-inventory.md`.

---

## 14. CI/CD Workflow

`.github/workflows/` contains exactly **one** file: `markdown-quality-gate.yml` ("Team LIPS Markdown Quality Gate").

- **Triggers**: `push` to `main`/`develop`/`docs/**`, and `pull_request` targeting `main`/`develop` — both scoped via `paths:` filters to `**/*.md`, `**/*.markdown`, `.markdown-gate.yml`, `tools/markdown/**`, and the workflow file itself.
- **Permissions**: `contents: read` only.
- **Job**: checks out full history, sets up Python 3.12 + PyYAML, computes changed Markdown files, runs `tools/markdown/quality_gate.py` on each, fails the job on any validation failure.

**Finding INF-4 — no CI gate on tests, build, lint, or migrations.** No workflow builds the app, runs `npm run lint`, runs `npx tsc --noEmit`, runs `npm run test` (the 62-test Vitest suite), or lints/validates Supabase migrations. This is a pre-existing gap, not introduced by this audit, but directly relevant to migration readiness (see `05-migration-readiness-assessment.md`, "Repository Readiness").

---

## 15. Summary of Findings Referenced Elsewhere

| ID | Finding | Detail |
| --- | --- | --- |
| INF-1 | Migration #3 not applied to Lovable backend | §4 above |
| INF-2 | Idempotency-fix migration (#11) not yet deployed to production | §4 above; risk register item MIG-1 |
| INF-3 | GRANT-level vs policy-level enforcement gap | §7 above; risk register item MIG-4 |
| INF-4 | No CI gate on tests/build/lint/migrations | §14 above; readiness assessment |

Manual verification required: Edge Functions on the Lovable-managed project (§9); Storage/Auth provider configuration parity between the two Supabase projects at the GoTrue-settings level (§12).
