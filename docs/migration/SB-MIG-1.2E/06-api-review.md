Document: Database Security & API Review

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

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
| Exposed functions | 8 of 8 | Unchanged — **flagged as needing a separate follow-up**: dashboard review cannot confirm whether any function uses `SECURITY DEFINER` in a way that bypasses RLS; this requires inspecting actual SQL function definitions (a database code review, not infra config) |
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

### 2.3 Notable Side-Discovery — Flagged for Mission Control

`.env.test`'s header comment states project `gysgzasfcjvtrgaigfyn` is "an isolated, disposable database used only by the automated test suite" — but this is the **same project reference** as the main Team LIPS production Supabase project configured throughout this entire mission. This is either a stale/inaccurate comment, or the automated test suite genuinely runs against the production database rather than an isolated one. This is a test-architecture question outside this infrastructure mission's scope to resolve, but is flagged here since it could mean test runs touch production data.

### 2.4 JWT Signing Configuration

Confirmed already correctly configured, no changes needed:

| Key | Type | Status |
| --- | --- | --- |
| Current | ECC (P-256), asymmetric | Active |
| Previous | Legacy HS256 (shared secret) | Retained only to verify not-yet-expired tokens issued before rotation (20 days ago); to be revoked once all such tokens have expired |

This reflects a proper, already-completed migration from legacy shared-secret signing to modern asymmetric signing, with correct rotation hygiene.

## 3. Outcome

Phases 9-10 complete. RLS posture is solid across all tables. One meaningful hardening applied (SSL enforcement) and one meaningful hygiene fix applied (disabled auto-expose of new tables). No service-role key exposure found anywhere in the codebase or version control. Two items explicitly deferred to Mission Control (network restrictions, connection logging), and two discoveries flagged for awareness/follow-up outside this mission's scope (function SECURITY DEFINER review; test suite possibly targeting the production project).
