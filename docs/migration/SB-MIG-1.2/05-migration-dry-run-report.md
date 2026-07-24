Document: Migration Dry Run Report

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2

# SB-MIG-1.2 — Migration Dry Run Report (Task 6)

**This is a simulation, not an execution.** No production data was touched, exported, imported, or modified in producing this report, per this mission's explicit boundaries. This document describes the expected process, based on the verified current state of both environments, so that Mission Control can evaluate the plan before any execution mission is authorized.

## 1. Object Compatibility

Confirmed compatible, both environments:

- Both PostgreSQL 17.6 (patch-level string differs slightly between the two independently-provisioned Supabase projects, not a compatibility concern).
- Identical installed-extension set (5 extensions: `pgcrypto`, `uuid-ossp`, `plpgsql`, `supabase_vault`, `pg_stat_statements`).
- Team LIPS Supabase's schema is now structurally identical to production's (`02-target-environment-verification-report.md`) — same 6 tables, 8 functions, 7 triggers, 16 policies, 22 indexes, all constraint names matching.
- One meaningful *content* difference: Team LIPS Supabase's `create_inventory_movement()` already carries the idempotency-replay fix; production's does not (MIG-1, unresolved on the source side).

**No object-compatibility blocker found.**

## 2. Dependency Order for Data Migration

Foreign-key dependencies dictate a strict insertion order (reverse of the deletion order used in Task 3):

1. `auth.users` (and `auth.identities`) — every other table ultimately depends on this.
2. `businesses` — depends on `auth.users.id` (`owner_id`).
3. `transactions` — depends on `businesses.id` and `auth.users.id` (`creator_id`).
4. `transaction_correction_events` — depends on `transactions.id` and `businesses.id`.
5. `inventory_items` — depends on `businesses.id`.
6. `inventory_movements` — depends on `inventory_items.id` (composite with `business_id`); self-references `correcting_of`.
7. `inventory_movement_idempotency_keys` — depends on `businesses.id` and `inventory_movements.id`.

Given production's current data (`02-database-comparison-report.md` §4.2 in SB-MIG-1.1: 2 businesses, 5 transactions, 4 correction events, 1 inventory item, 0 movements, 0 idempotency keys, 2 users), steps 6 and 7 are trivial (no rows to move) as of this audit.

## 3. The One Genuinely Hard Step: `auth.users`

**This is the step most likely to need careful, manual handling, and is flagged as the dry run's single most important finding.**

`businesses.owner_id` and `transactions.creator_id` are foreign keys into `auth.users.id`. For the migrated data to remain referentially valid, the **same UUIDs** must exist in Team LIPS Supabase's `auth.users` as exist in production's. Supabase's standard, supported user-creation paths (`auth.signUp`, `auth.admin.createUser`) generate a *new* UUID and do not accept an existing password hash — they are not designed for "clone this exact user, including their password, to a new project."

Two realistic approaches, neither exercised in this dry run (both would touch real user data, out of this mission's authorization):

- **(a) Direct row-level copy** of `auth.users` and `auth.identities` (and any dependent auth tables — `auth.sessions`, `auth.refresh_tokens` are session-scoped and do not need to move) from production to Team LIPS Supabase, preserving `id`, `encrypted_password`, `email_confirmed_at`, and identity metadata exactly. Technically straightforward (Postgres data is portable) but bypasses GoTrue's normal write paths — needs careful field-by-field verification, not a blind `INSERT ... SELECT`, and should be tested against a throwaway user first, not the 2 real accounts directly.
- **(b) Force password reset for both real users** post-migration, creating fresh accounts via the standard admin API instead of copying credentials. Simpler and safer from a security-hygiene standpoint (no password-hash portability risk), but requires user communication/consent this mission cannot arrange, and does not preserve the Google-OAuth user's identity linkage without additional handling.

**This dry run does not recommend one over the other — it is a decision requiring Mission Control input (and likely the two real users' knowledge), not a technical audit finding.**

## 4. Expected Execution Sequence (for a future, separately authorized cutover mission)

1. Final pre-flight schema/object comparison (repeat of Task 2, immediately before cutover, to catch any last-minute drift).
2. Brief write-freeze on the production (Lovable-managed) backend — no new transactions, inventory movements, or business/user changes accepted.
3. Export the 7-table dataset from production in dependency order (§2).
4. Resolve the `auth.users` question (§3) via whichever approach Mission Control selects.
5. Import into Team LIPS Supabase in the same dependency order.
6. Row-count and spot-check verification (compare every table's count and a sample of actual values against the export).
7. Re-point the application's runtime environment variables (`SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SERVICE_ROLE_KEY` and their `VITE_` equivalents) to Team LIPS Supabase — this requires the hosting-platform decision and secret-provisioning work flagged as still-open in `01-high-risk-resolution-report.md` (MIG-8).
8. Redeploy/restart the application against the new configuration.
9. Smoke test: sign-in (both email/password and, if resolved, Google OAuth), view businesses/transactions/inventory for both real accounts, confirm RLS isolation still holds.
10. Monitoring/bake window before declaring the write-freeze over and directing all traffic permanently to the new backend.
11. End the write-freeze.

## 5. Estimated Downtime

**Estimate, not a measurement — no infrastructure was actually exercised for timing.** Given the very small data volume (14 business rows + 2 users, confirmed in SB-MIG-1.1's data inventory) and an environment-variable-based cutover (rather than an in-place schema migration), the write-freeze window itself (steps 2–8 above) is plausibly on the order of **single-digit minutes** for the data-movement portion, plus whatever redeploy/restart time the eventual hosting platform requires (unknown until that platform is chosen — see MIG-8). The verification/bake window (step 10) is a separate, non-blocking monitoring period that does not need to extend the write-freeze itself if step 9's smoke test passes cleanly.

**This estimate should not be treated as a commitment** — it has not been validated against any real hosting platform's deploy/restart characteristics.

## 6. Rollback Feasibility

**Favorable, structurally.** Because this is a "repoint the application" cutover rather than a destructive in-place migration, and because production (the Lovable-managed backend) is not modified by any step above, rollback at any point before step 11 is simply: **do not repoint the application, or repoint it back.** The old backend remains fully live and untouched throughout steps 1–9. This is a materially lower-risk migration shape than an in-place schema transformation would be.

**One caveat:** once real user traffic begins writing to Team LIPS Supabase (after step 8), any rollback to the old backend means those new writes are not present there — a genuine data-reconciliation problem, not just a config revert. This is why step 10's bake window matters, and why the rollback trigger points below are framed around *before* vs. *after* real writes begin.

## 7. Rollback Trigger Points

| Trigger | Stage | Action |
| --- | --- | --- |
| Schema/object drift found in the final pre-flight check | Before step 2 | Abort. Do not begin the write-freeze. Re-run Task 2-style verification after fixing drift. |
| Export/import row-count mismatch | Steps 3–6 | Abort. Do not repoint the application. Production continues serving from the old backend, unaffected. |
| Smoke test failure (sign-in broken, missing data, RLS misbehavior) | Step 9 | Immediately repoint environment variables back to the Lovable-managed backend. No data reconciliation needed yet if no real user has written to the new backend since step 8. |
| Data-integrity anomaly discovered during the bake window | Step 10 | Repoint back. **Requires reconciliation** of any writes made to Team LIPS Supabase during the bake window before it can be trusted again as a target. |
| Google OAuth sign-in specifically fails (expected, given MIG-11/MIG-12 unresolved) | Step 9 | Not necessarily a full-rollback trigger — a decision point for Mission Control: accept a temporary email/password-only launch, or block cutover until MIG-11/MIG-12 are resolved. |

Full step-by-step rollback execution instructions are in `06-rollback-procedure.md`.
