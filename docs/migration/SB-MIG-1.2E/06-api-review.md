Document: Database Security & API Review

Version: 1.0

Status: ACCEPTED

Created By: Claude Code

Reviewed By: Mission Control

Review Date: 2026-07-26

Mission: SB-MIG-1.2E

# SB-MIG-1.2E — Database Security & API Review (Task 6, covering mission Phases 9-10)

## 1. Phase 9 — Database Security

### 1.1 Row Level Security

All 6 tables in the `public` schema (`businesses`, `inventory_items`, `inventory_movement_idempotency_keys`, `inventory_movements`, `transaction_correction_events`, `transactions`) confirmed to have **RLS enabled**, with consistent "Owners can..." policies scoped to the `authenticated` role (never `anon`). Notably, transactional/audit tables (`inventory_movements`, `transaction_correction_events`, `transactions`) correctly have no DELETE policy — appropriate for data that should be immutable for audit integrity; only `businesses` allows delete.

### 1.2 Data API / PostgREST Exposure

| Setting | Before | After |
| --- | --- | --- |
| Exposed schemas | `public`, `graphql_public` (2 of 2) | Unchanged — confirmed standard, no broader exposure |
| Exposed tables | 6 of 6 | Unchanged — matches the RLS-covered table set exactly |
| Exposed functions | 8 of 8 | Unchanged — **fully reviewed at the SQL level as of SB-MIG-1.2E-A, see §2.5**: all 8 confirmed `SECURITY INVOKER`, none bypass RLS |
| Automatically expose new tables | ON | **OFF** |

Rationale for disabling auto-expose: matches Supabase's own explicit in-product recommendation. Prevents any future table from silently becoming API-accessible without deliberate review.

"Harden Data API" (expose a custom schema instead of `public`) reviewed and left as-is — a defense-in-depth option, not urgent given RLS is already the enforced authorization layer.

### 1.3 Connection Security

| Setting | Before | After |
| --- | --- | --- |
| Enforce SSL on incoming connections | OFF | **ON** |

Applied during this mission (brief database restart accepted deliberately while pre-launch, no real client traffic to disrupt). Closes a gap where an unencrypted direct Postgres connection could otherwise be accepted.

### 1.4 Open Items Referred to Mission Control

Per Founder's explicit request, the following are logged as pending decisions rather than resolved in this session:

- **Network restrictions**: currently open to all IP addresses. Only practically actionable if Smart Business has a backend server with a fixed, known IP connecting directly to Postgres — needs confirmation of current/planned backend architecture before a decision can be made.
- **Connection logging** (Log connections / Log disconnections): currently OFF. Recommended to enable for audit-trail purposes; trade-off is increased log volume proportional to connection churn. Needs a decision on timing — now, or deferred to the Phase 13 (Logs & Monitoring) review.

## 2. Phase 10 — API Review

### 2.1 API Key Architecture

Project uses Supabase's newer key format (`sb_publishable_...` / `sb_secret_...`) as the current default, alongside legacy `anon`/`service_role` JWT-format keys which remain active because the application currently depends on the legacy anon key (confirmed via source inspection, see below). **Do not disable legacy JWT-based API keys** until the application has been migrated to the new key format — doing so now would break authentication immediately.

### 2.2 Source Code Verification (performed directly against the repository, not just the dashboard)

- `src/integrations/supabase/client.ts` (browser-side): confirmed to use only `SUPABASE_PUBLISHABLE_KEY` — never references the service role key.
- `src/integrations/supabase/client.server.ts` (server-side only): uses `SUPABASE_SERVICE_ROLE_KEY` from `process.env`, which is not reachable from any browser bundle.
- Tracked `.env` and `.env.test` files contain only the anon/publishable key value — no service role key present in either. `.env.test` has an explicit header comment documenting that its service-role equivalent belongs only in `.env.test.local`, confirmed covered by the repo's `*.local` `.gitignore` rule.

**Result: service-role key is not exposed client-side or in version control.** Two non-urgent hygiene notes: (1) tracked `.env` files contain real (if intentionally-public) anon key values rather than placeholders — not a security issue given Supabase's design intent for this key type, but not best practice either; (2) the app runs on the legacy JWT-format anon key rather than the new `sb_publishable_` format — no urgency since Supabase fully supports legacy keys, but worth noting as a future modernization item requiring an application-level `.env` change.

### 2.3 Automated Test Isolation — Confirmed Finding (SB-MIG-1.2E-A Refinement 3)

Mission Control elevated this from an observation to a mandatory pre-cutover verification. Factual findings, read-only (nothing modified):

**Confirmed: the automated test suite targets the production Team LIPS Supabase project, not a dedicated/isolated one.**

Evidence chain:

1. `.env.test` sets `SUPABASE_TEST_URL=https://gysgzasfcjvtrgaigfyn.supabase.co` — the same project ref as production, despite the file's own header comment describing it as "an isolated, disposable database."
2. `.env.test.local` (gitignored, present locally, correctly never committed) supplies `SUPABASE_TEST_SERVICE_ROLE_KEY` — confirmed to be the project's actual live service-role secret (prefix matches the `sb_secret_...` key shown in the Supabase dashboard's API Keys panel, §2.1). **This document does not reproduce the key value.**
3. `tests/setup/load-env.ts` loads `.env.test` then `.env.test.local` and requires all three test-environment variables to be present before any test can run.
4. `tests/setup/test-clients.ts` uses this service-role key to instantiate an `adminClient` that calls `auth.admin.createUser(...)` and inserts directly into `public.businesses` — real writes against the production database and its `auth.users` table, via a credential Supabase's own UI explicitly warns "has the ability to bypass Row Level Security." The module's own comment states this is intentional so RLS is "exercised exactly as it is in production," using a separate `createAnonClient()` for the actual RLS-under-test assertions.
5. This is **not a new or accidental situation** — it is a known, previously-documented, and previously-managed pattern:
   - `docs/migration/SB-MIG-1.2/03-test-data-cleanup-report.md` and `docs/migration/SB-MIG-1.2D/06-test-data-cleanup.md` both record full TRUNCATE/targeted-DELETE cleanups of this exact production project after test runs, confirming (via 100%-synthetic email-pattern matching) that all data present at those points in time was test fixture data — consistent with Smart Business currently having no real clients yet.
   - `docs/migration/SB-MIG-1.2C/08-founder-actions.md` item #14 already documents that 69 test businesses/users had re-accumulated since the prior cleanup, purely from subsequent Vitest runs, and explicitly instructs: "Re-run test-data cleanup on Team LIPS Supabase... immediately before SB-MIG-1.3 begins."
6. No CI pipeline currently runs this test suite automatically — the only workflow present (`.github/workflows/markdown-quality-gate.yml`) is unrelated (Markdown linting only). Test runs happen locally, on-demand, by whoever runs `npm run test`.
7. Log evidence independently corroborates this: Phase 13 (`08-monitoring-review.md`) found a cluster of `/auth/v1/admin/users` 403s and `/rest/v1/rpc/create_inventory_movement` 400s on this production project consistent with a local test run.

**Operational risk, stated plainly:** every local test run performs real admin-level writes (user creation, business creation, and whatever downstream inventory/transaction fixtures the suite exercises) against the same project that will become the live production database once the pending cutover happens. Today this is low-consequence because, per the Founder, Smart Business is pre-launch with no real client data — confirmed structurally correct by the SB-MIG-1.2D cleanup report showing 100% of rows present at that time were synthetic. **This stops being low-consequence the moment real client data exists.** This session has no live database query access to state current row counts; a fresh count/cleanup check (same method as the two prior cleanup reports) is recommended immediately, and is already a standing action item (SB-MIG-1.2C item #14) rather than a new one.

**This mission does not resolve or change this pattern** — no test configuration, CI configuration, or code was modified, per this mission's read-only mandate. Resolving it (e.g., provisioning a genuinely separate test project) is a decision and a piece of work for Mission Control/Founder to schedule, ideally before real client data exists.

### 2.4 JWT Signing Configuration

Confirmed already correctly configured, no changes needed:

| Key | Type | Status |
| --- | --- | --- |
| Current | ECC (P-256), asymmetric | Active |
| Previous | Legacy HS256 (shared secret) | Retained only to verify not-yet-expired tokens issued before rotation (20 days ago); to be revoked once all such tokens have expired |

This reflects a proper, already-completed migration from legacy shared-secret signing to modern asymmetric signing, with correct rotation hygiene.

### 2.5 Database Function Security Review (SB-MIG-1.2E-A Refinement 4)

SQL-level review of all 8 functions exposed via the Data API (matching the "8 of 8" count in §1.2), performed by reading the actual `CREATE FUNCTION` statements in `supabase/migrations/`, taking the most recent `CREATE OR REPLACE` as authoritative where a function was redefined across migrations. Report only — no SQL modified.

| Function | Current security mode | RLS interaction / notes |
| --- | --- | --- |
| `correct_transaction` | `SECURITY INVOKER` (see history below) | Explicit `auth.uid() IS NULL` check; SELECT/UPDATE/INSERT all execute under the caller's own RLS — comments in the SQL itself confirm each statement is "gated by" the relevant RLS policy. `SET search_path = public` pinned. |
| `create_inventory_movement` | `SECURITY INVOKER` | Explicit `auth.uid()` check; `SET search_path = public, extensions` pinned; handles idempotency and stock validation entirely under invoker privileges. |
| `preview_inventory_movement` | `SECURITY INVOKER` | Read-only projection; explicitly commented as non-authoritative (the real check is repeated inside `create_inventory_movement` at commit time). |
| `inventory_current_stock_batch` | `SECURITY INVOKER` | `LANGUAGE sql`, read-only aggregation. |
| `inventory_movement_remaining_compensable` | `SECURITY INVOKER` | Read-only helper for the correction UI. |
| `update_updated_at_column` | No explicit clause → Postgres default (`INVOKER`) | Trigger function; sets `updated_at = now()` only. `SET search_path = public` pinned. No privilege interaction. |
| `inventory_items_guard` | No explicit clause → Postgres default (`INVOKER`) | Trigger function; enforces immutability of `id`/`business_id`/`base_unit` on `inventory_items`. No privilege interaction. |
| `inventory_movements_reject_mutation` | No explicit clause → Postgres default (`INVOKER`) | Trigger function; unconditionally raises an exception on any UPDATE/DELETE against `inventory_movements`, regardless of caller privilege — a deliberate defense-in-depth guard enforcing the append-only ledger design already noted in §1.1 (no DELETE policy exists on that table either; this closes the same gap at the trigger layer too). |

**Result: zero functions currently use `SECURITY DEFINER`.** All 8 run as `SECURITY INVOKER` (the safe default) — none of them execute with elevated privileges, so none can bypass RLS. No privilege-escalation risk identified.

**Historical note, not a live finding:** `correct_transaction` was originally created as `SECURITY DEFINER` (migration `20260720142204`, 2026-07-20). It was corrected to `SECURITY INVOKER` in a same-day follow-up migration (`20260720142248`), whose own inline comment states the change explicitly: "Switch correction function to SECURITY INVOKER; RLS on both tables now enforces authorization." This was resolved by the development team before this review and before this mission began — cited here as evidence of an already security-conscious development process, not as an outstanding issue.

## 3. Outcome

Phases 9-10 complete. RLS posture is solid across all tables. One meaningful hardening applied (SSL enforcement) and one meaningful hygiene fix applied (disabled auto-expose of new tables). No service-role key exposure found anywhere in the codebase or version control. Two items explicitly deferred to Mission Control (network restrictions, connection logging). Both items flagged in the original version of this report have since been fully investigated per SB-MIG-1.2E-A: the database function review (§2.5) found no privilege-escalation risk, and the automated-test-isolation question (§2.3) is confirmed as a real, known, previously-managed condition requiring a pre-cutover data check rather than an open unknown.
