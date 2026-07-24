Document: Database Comparison Report

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.1

# SB-MIG-1.1 — Database Comparison Report (Audits 2 and 3)

## 1. Method and Access

Both databases were queried **directly and live** on 24 July 2026 — this is not inferred from documentation.

- **Team LIPS Supabase** (`gysgzasfcjvtrgaigfyn`) — queried via the Supabase MCP connector's `execute_sql`/`get_advisors`/`list_*` tools, to which this environment has standing access.
- **Lovable-managed backend** — queried via the Lovable MCP connector. The Lovable workspace ("Smart Business", id `LICThJCF1oqWPRq7CLLE`) contains exactly one project: `governed-growth-path` (display name "Smart Business", id `64c2b9b1-2461-4045-9acc-19e2658b8ca2`, published at `https://governed-growth-path.lovable.app`, status `completed`). That project's cloud database is Supabase-backed and enabled; `query_database` was used to run read-only SQL directly against it. **This is a materially stronger evidentiary position than the SB-AUDIT-1.1 and SB-P-1.10 completion-report audits had** — those could not connect to the Lovable-managed backend at all and relied on Founder-supplied screenshots and self-rolled-back PL/pgSQL blocks reported back by the Lovable builder. This audit connected directly and ran ordinary, non-destructive `SELECT` queries only.

Only `SELECT` statements (and read-only catalog/information-schema queries) were issued against both databases. No `INSERT`/`UPDATE`/`DELETE`/DDL was executed anywhere, per this mission's explicit boundaries.

**Confirmed: the Lovable project's published URL is `https://governed-growth-path.lovable.app`, not `https://smartbusiness.teamlips.com`** as stated in `docs/implementation/SB-P-1.10/completion-report.md`. This may be a custom domain mapped on top of the Lovable preview (a common Lovable publishing pattern) rather than a contradiction — **requires manual verification** of the custom-domain mapping before treating either URL as wrong.

---

## 2. Project-Level Facts

| Field | Team LIPS Supabase | Lovable-managed backend |
| --- | --- | --- |
| Project ref / ID | `gysgzasfcjvtrgaigfyn` | `wwgqnshcgbukqczqblsm` (per `.env`/`supabase/config.toml`); Lovable's own project id is `64c2b9b1-2461-4045-9acc-19e2658b8ca2` |
| Status | `ACTIVE_HEALTHY` | Confirmed reachable and responsive; no formal "status" field surfaced by the query tool. **Exists.** |
| Region | `ap-south-1` | Not directly queryable via the tools available. **Unknown — requires manual verification.** |
| PostgreSQL version | `17.6.1.141` (postgres_engine 17, release channel `ga`) | `PostgreSQL 17.6 on aarch64-unknown-linux-gnu` (via `SELECT version()`). **Same major/minor version (17.6).** Patch/build string differs slightly, consistent with two independently-provisioned Supabase projects rather than a meaningful drift. |
| Created | 2026-07-06 | Lovable project created 2026-07-02 (per Lovable's own project record); underlying Supabase project creation date not directly queryable. |
| Applied migrations (`supabase_migrations.schema_migrations`) | 4 rows: `sb_p_1_6_businesses`, `sb_p_1_10_inventory_foundation`, `sb_p_1_10_fix_digest_search_path`, `sb_p_1_10_fix_idempotency_rls` — these are the migrations *this audit's own prior missions* applied directly via MCP tooling, not the repository's numbered migration files, so the names don't match the repository's filenames. | 9 rows, matching repository migrations #1, #2, #4, #5, #6, #7, #8, #9, #10 by version-prefix. **Missing**: #3 (`20260719140000`, see Finding INF-1 in the infrastructure report) and #11 (the idempotency fix, see Finding INF-2). |

---

## 3. Schema Object Comparison

Legend: **Exists** / **Missing** / **Unknown**.

### 3.1 Extensions

| Extension | Team LIPS Supabase | Lovable backend |
| --- | --- | --- |
| `pgcrypto` (schema `extensions`) | Exists (1.3) | Exists (1.3) |
| `uuid-ossp` (schema `extensions`) | Exists (1.1) | Exists (1.1) |
| `plpgsql` | Exists (1.0) | Exists (1.0) |
| `supabase_vault` | Exists (0.3.1) | Exists (0.3.1) |
| `pg_stat_statements` | Exists (1.11) | Exists (1.11) |
| `pg_cron` | Available but **not installed** on either project | Not installed |
| All other extensions in the Supabase catalog (postgis, vector, pg_net, etc.) | Available but not installed | Not checked directly (no equivalent "available extensions" listing tool for the Lovable connector) — **not installed is the reasonable inference** since none are referenced anywhere in the repository's migrations, but this specific point is otherwise unverified for the Lovable side |

**Result: identical installed-extension sets (5 extensions) on both projects, as far as directly verified.** No extension drift found.

### 3.2 Schemas

Lovable backend schemas (queried directly): `auth`, `extensions`, `graphql`, `graphql_public`, `information_schema`, `pg_catalog`, `pg_toast`, `pgbouncer`, `public`, `realtime`, `storage`, `supabase_migrations`, `vault` — the standard Supabase schema set. Team LIPS Supabase was not separately re-queried for its schema list (it is provisioned by the same Supabase platform and this audit has no reason to expect deviation, but this specific point was **not independently re-verified** — treat the standard-schema-set assumption as reasonable, not confirmed).

### 3.3 Tables (public schema)

| Table | Team LIPS Supabase | Lovable backend |
| --- | --- | --- |
| `businesses` | Exists | Exists |
| `transactions` | **Missing** (never applied to this test project — deliberate, documented decision from SB-P-1.10-TESTS-1.0) | Exists |
| `transaction_correction_events` | **Missing** (same reason) | Exists |
| `inventory_items` | Exists | Exists |
| `inventory_movements` | Exists | Exists |
| `inventory_movement_idempotency_keys` | Exists | Exists |

**No views exist in either database's `public` schema.**

**This is the single largest structural difference between the two databases**: Team LIPS Supabase has 4 of the 6 application tables; the transactions domain (2 tables, both from SB-P-1.8/SB-P-1.9) was never applied there. It is a dedicated inventory-test database, not a full mirror, by design — but for migration purposes it means Team LIPS Supabase is **not currently a complete candidate target** without first applying the transactions-domain migrations (#2 and #4/#5) to it.

### 3.4 Functions (public schema)

| Function | Team LIPS Supabase | Lovable backend | Notes |
| --- | --- | --- | --- |
| `update_updated_at_column()` | Exists | Exists | Identical purpose across both |
| `correct_transaction(...)` | **Missing** (transactions domain not applied) | Exists | |
| `inventory_items_guard()` | Exists | Exists | |
| `inventory_movements_reject_mutation()` | Exists | Exists | |
| `preview_inventory_movement(...)` | Exists | Exists | |
| `inventory_current_stock_batch(uuid[])` | Exists | Exists | |
| `inventory_movement_remaining_compensable(uuid)` | Exists | Exists | |
| `create_inventory_movement(...)` | Exists — **fixed version** (`search_path=public, extensions`; idempotency lookup is a plain `SELECT`, no `FOR UPDATE`; per-item advisory lock acquired before the lookup; exception-handled race safety net) | Exists — **pre-fix version** (`search_path` correctly set to `public, extensions`, but the idempotency lookup is still `SELECT ... FOR UPDATE`, the defective code path) | **Critical difference — see risk register item MIG-1.** Both functions have identical signatures; only the body differs. Confirmed by direct `pg_get_functiondef()` comparison on both databases. |

### 3.5 Triggers

| Trigger | Team LIPS Supabase | Lovable backend |
| --- | --- | --- |
| `update_businesses_updated_at` | Exists | Exists |
| `update_inventory_items_updated_at` | Exists | Exists |
| `inventory_items_guard_trg` | Exists | Exists |
| `inventory_movements_no_update` | Exists | Exists |
| `inventory_movements_no_delete` | Exists | Exists |
| `update_transactions_updated_at` | **Missing** | Exists |
| `update_transaction_correction_events_updated_at` | **Missing** | Exists |

Team LIPS Supabase: 5 triggers live. Lovable backend: 7 triggers live. Difference is fully explained by the missing transactions domain — no unexplained drift.

### 3.6 RLS Policies

| Table | Team LIPS Supabase policy count | Lovable backend policy count |
| --- | --- | --- |
| `businesses` | 4 | 4 |
| `inventory_items` | 3 | 3 |
| `inventory_movements` | 2 | 2 |
| `inventory_movement_idempotency_keys` | 2 | 2 |
| `transactions` | **Missing (0)** | 3 |
| `transaction_correction_events` | **Missing (0)** | 2 |
| **Total** | **10** (verified live) | **16** (verified live) |

All policy text was compared for the 4 shared tables — **identical wording and conditions on both databases**, confirming no policy drift for anything actually applied to both. RLS is **enabled** on every table that exists, on both databases (independently verified: `relrowsecurity = true` for all 4 tables on Team LIPS Supabase, all 6 tables on the Lovable backend).

### 3.7 Grants (table-level privileges for `anon`, `authenticated`, `service_role`)

**Finding — identical, and identical to the finding first surfaced during SB-P-1.10-TESTS-1.0.** On **both** databases, `anon`, `authenticated`, and `service_role` all hold the full privilege set (`DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE`) on every application table, including `anon`. This is Supabase's standard schema-wide default-privilege behavior, not something either project's migrations configured intentionally — the migrations' own `GRANT SELECT, INSERT ON ... TO authenticated` statements are additive and effectively redundant against this broader default. **Actual enforcement is 100% via RLS policy (or its absence), not via GRANT restriction, on both databases identically.** No drift between the two projects on this point. See risk register item MIG-4 for why this matters.

### 3.8 Storage Buckets

| | Team LIPS Supabase | Lovable backend |
| --- | --- | --- |
| Bucket count | 0 | 0 |

**Exists: neither.** Both confirmed via direct `SELECT * FROM storage.buckets`. No drift.

### 3.9 Auth Configuration

| | Team LIPS Supabase | Lovable backend |
| --- | --- | --- |
| `auth.users` row count | 188 | 2 |
| Identity providers in use | `email` only (188) | `email` (1) and `google` (1) |
| GoTrue-level settings (email confirmation requirement, configured OAuth providers, session lifetime, leaked-password protection) | **Unknown for the Lovable backend specifically** — no tool in this environment exposes GoTrue project settings for an arbitrary Lovable-hosted project. For Team LIPS Supabase, the Supabase advisor tooling flags "Leaked Password Protection Disabled" (WARN) — see `03-migration-risk-register.md`. | **Requires manual verification** via each project's own dashboard |

**Finding: Team LIPS Supabase has no Google-OAuth identities on record**, meaning either the Google OAuth provider has never been exercised there (most likely, since it's a headless test project with no browser-based OAuth flow ever run against it) or it isn't configured. **Requires manual verification** before migration: confirm Google OAuth is configured identically on Team LIPS Supabase (client ID/secret, redirect URLs) before cutover, since production visibly depends on it (1 of 2 real users signed in via Google).

### 3.10 Edge Functions

| | Team LIPS Supabase | Lovable backend |
| --- | --- | --- |
| Edge Functions | 0 (confirmed via `list_edge_functions`) | **Requires manual verification** — no equivalent tool available for this specific Lovable-hosted project via the connectors in this environment |

Consistent with Audit 1's repository finding (no `supabase/functions/` directory exists), the working assumption is zero Edge Functions on the Lovable backend too, but this is an assumption, not a confirmed fact, and Edge Functions can exist without any repository trace.

### 3.11 Cron Jobs

| | Team LIPS Supabase | Lovable backend |
| --- | --- | --- |
| `pg_cron` extension installed | No | No |
| Scheduled jobs | None (extension not installed, so none possible) | None (extension not installed, so none possible) |

**Exists: neither.** No drift.

### 3.12 Realtime Configuration

| | Team LIPS Supabase | Lovable backend |
| --- | --- | --- |
| Tables added to a realtime publication | 0 (`pg_publication_tables` empty) | 0 (`pg_publication_tables` empty) |

**Exists: neither.** No drift. No application code references Supabase Realtime subscriptions either (confirmed by the Audit 1 repository sweep).

### 3.13 Data-Level Row Counts

Full detail and migration recommendations are in the data-inventory section below (§4) and are not repeated in `03-migration-risk-register.md`.

---

## 4. Data Inventory (Audit 4)

### 4.1 Team LIPS Supabase — entirely automated-test data

| Table | Row count |
| --- | --- |
| `businesses` | 188 |
| `inventory_items` | 333 |
| `inventory_movements` | 940 |
| `inventory_movement_idempotency_keys` | 925 |
| `auth.users` | 188 |

**Every one of these rows was created by the automated Vitest test suite** (`tests/inventory/*.test.ts`, via `tests/setup/test-clients.ts`'s `createTestOwner()`), across the SB-P-1.10-TESTS-1.0 and SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 missions and every subsequent `npm run test` run in this environment. This is independently corroborated by the naming pattern already documented in `tests/setup/test-clients.ts` (`sb-p-1-10-tests+<label>-<uuid>@example.com`) and by `test-summary.md`'s explicit statement that no destructive cleanup is performed between runs. **None of this data should migrate anywhere.** It is disposable, reproducible test fixture data with no business meaning.

**Recommendation: do not migrate. Team LIPS Supabase's current row data is not usable as a seed or reference for production and should be truncated (or the project reset entirely) before it is repurposed as anything other than a disposable CI/test target.**

### 4.2 Lovable-managed backend — the only source of real data

| Table | Row count | Classification |
| --- | --- | --- |
| `businesses` | 2 | Real (2 real business owners have signed up) |
| `transactions` | 5 | Real |
| `transaction_correction_events` | 4 | Real (correction/audit trail for the 5 transactions) |
| `inventory_items` | 1 | Real — the "Milk" item referenced throughout the SB-P-1.10 evidence (F-01/F-02 screenshots, D-14/D-15 database evidence) |
| `inventory_movements` | 0 | **No movements exist.** Consistent with the completion report's own D-20 evidence, which describes verification performed via a "self-rolled-back PL/pgSQL block" — i.e. deliberately never committed. No opening stock, adjustment, or correction has ever actually been posted for the Milk item in production. |
| `inventory_movement_idempotency_keys` | 0 | Consistent with zero movements |
| `auth.users` | 2 | Real (1 email-provider account, 1 Google-OAuth account) |

**No seed data or demonstration data was found as a distinct category on either database** — the Lovable backend's 2 businesses / 5 transactions / 1 inventory item appear to be genuine early real usage (small in volume, consistent with a pre-launch or early-access product), not synthetic seed rows. This audit found no marker (naming convention, flag column, or comment) distinguishing "demo" data from "real" data in either database — if such a distinction is needed, **it requires product/business input this audit cannot supply from schema inspection alone.**

**Recommendation: the Lovable backend's data (all 19 rows across 6 tables + 2 auth users) is the only data with any candidate business value and should be the source, not the target, of any data migration.** Its small size makes a full, careful, manually-verified migration straightforward relative to the schema/RLS/function migration work.

---

## 5. Summary of Schema Differences Requiring Action Before Migration

1. Team LIPS Supabase is missing the entire transactions domain (2 tables, 1 function with 2 revisions, 2 triggers, 5 policies) — must be applied before it can serve as a production target.
2. Team LIPS Supabase has the corrected `create_inventory_movement()`; the Lovable backend has the pre-fix, defective version — whichever database is authoritative post-migration must end up with the fixed version.
3. Migration #3 (`20260719140000`) exists in the repository but not in the Lovable backend's applied-migration record — needs resolution (see Finding INF-1) before it's blindly replayed against a new target, since replaying it verbatim against a database that already has migration #2 applied will fail.
4. Google OAuth usage is unconfirmed on Team LIPS Supabase (zero Google identities on record) — needs explicit provider configuration verification before cutover.
5. GoTrue-level settings (password-leak protection, email confirmation policy, session lifetime) are unverified for the Lovable backend and only partially verified (one WARN) for Team LIPS Supabase — needs manual dashboard comparison.
