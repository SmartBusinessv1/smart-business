Document: High-Risk Resolution Report

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2

# SB-MIG-1.2 — High-Risk Resolution Report (Task 1)

Reviews every **High** severity item from the SB-MIG-1.1 Migration Risk Register (`docs/migration/SB-MIG-1.1/03-migration-risk-register.md`). Four items were rated High: MIG-1, MIG-3, MIG-8, MIG-12.

---

## MIG-3 — Team LIPS Supabase missing the transactions domain

**Status: RESOLVED.**

**Root cause.** The Team LIPS Supabase test project (`gysgzasfcjvtrgaigfyn`) was originally provisioned under SB-P-1.10-TESTS-1.0 with only the inventory-domain migrations applied (a deliberate scoping decision at the time, documented in that mission's own evidence). The transactions domain (SB-P-1.8/SB-P-1.9) was never applied there.

**Mitigation implemented.** Applied migrations #2 (`20260719102137_...`, creates `transactions`), #4 (`20260720142204_...`, creates `transaction_correction_events` and the initial `correct_transaction()`), and #5 (`20260720142248_...`, adds the INSERT policy and replaces `correct_transaction()` with its final SECURITY INVOKER form) — unmodified, in order, via direct migration application against the Team LIPS Supabase project. Migration #3 (`20260719140000_...`) was deliberately excluded, consistent with the SB-MIG-1.1 risk register's own recommendation for MIG-2 (it is a near-duplicate of #2 with no `IF NOT EXISTS` guard, and has no corresponding entry in production's own applied-migration history either).

**Verification.**

| Object type | Before | After | Production (reference) |
| --- | --- | --- | --- |
| Tables | 4 | 6 | 6 |
| Functions | 7 | 8 | 8 |
| Triggers | 5 | 7 | 7 |
| RLS policies | 10 | 16 | 16 |
| Indexes | 17 | 22 | — (not separately counted in SB-MIG-1.1) |

`correct_transaction()` was independently confirmed post-application to be `SECURITY INVOKER` (`prosecdef = false`), matching migration #5's final form rather than migration #4's superseded `SECURITY DEFINER` version. Full object-level comparison against the repository's migration source is in `02-target-environment-verification-report.md`.

---

## MIG-1 — Idempotency-replay defect status

**Status: NOT APPLICABLE TO THE TARGET; UNCHANGED ON THE SOURCE.**

**Root cause (recap from SB-P-1.10-TESTS-1.0 / SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0).** `create_inventory_movement()`'s idempotency-replay lookup used `SELECT ... FOR UPDATE` against a table whose RLS policy contains a subquery-based `USING` clause; PostgreSQL's planner folds this combination to a constant "no rows" result regardless of whether a matching row exists.

**Current state, directly re-verified this mission:**
- **Team LIPS Supabase (the migration target)**: already has the corrected function (verified: `search_path=public, extensions`; body confirmed to use a plain `SELECT`, no `FOR UPDATE`, per the SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 migration already applied there before this mission began). No action required on the target.
- **Lovable-managed backend (the current production source)**: still runs the pre-fix, defective version, per SB-MIG-1.1's direct inspection. **This mission did not re-check or touch it** — Mission Control's explicit boundaries for SB-MIG-1.2 forbid reconnecting Lovable, and this mission has no write mandate over that environment regardless.

**Outcome.** From the perspective of "is the migration target correct," MIG-1 is closed — Team LIPS Supabase already carries the fix. The defect remains live on the *current* production system until a separately authorized mission patches it there, or until cutover to Team LIPS Supabase happens (at which point the fixed version becomes what actually serves traffic). This is a governance/sequencing decision for Mission Control (see `08-sb-mig-1-3-execution-recommendation.md`), not something this mission can resolve unilaterally.

---

## MIG-8 — Undocumented `SUPABASE_SERVICE_ROLE_KEY` injection mechanism

**Status: PARTIALLY RESOLVED — remainder requires manual action.**

**Root cause.** `src/integrations/supabase/client.server.ts` requires `SUPABASE_SERVICE_ROLE_KEY` at runtime. No tracked file in the repository defines this value or documents how the current Lovable Cloud runtime supplies it.

**What this mission could do (repository-side, completed):** confirmed via a fresh repository sweep that the gap is unchanged since SB-MIG-1.1 — still no value, still no documented injection mechanism, still absent from every tracked file including `.env`, `.env.test`, and `.env.test.local.example`.

**What this mission cannot do, and why — stopping per Task 1's explicit instruction:**
1. This environment has no access to Lovable Cloud's own project-secrets configuration UI/API to inspect how the current key is injected. Confirming the *current* mechanism requires a human with Lovable dashboard access.
2. Team LIPS Supabase's own service-role key exists (already held, for test purposes only, in the gitignored `.env.test.local` under a *different* variable name, `SUPABASE_TEST_SERVICE_ROLE_KEY`) but no production hosting environment has been chosen yet for the migrated application, so there is nothing to "configure" the key into. Establishing the target's own secret-storage mechanism is contingent on a hosting decision this mission has no mandate to make.

**Manual action required:** (a) a human with Lovable dashboard access documents the current injection mechanism; (b) once a target hosting platform for the migrated app is decided, its own secret-management mechanism is configured with Team LIPS Supabase's service-role key, obtained directly from that project's dashboard — never through a shared or committed channel.

---

## MIG-12 — Lovable-specific OAuth integration layer

**Status: NOT ADDRESSED — out of this mission's authorized scope.**

**Root cause.** `src/routes/auth.tsx`'s Google sign-in path calls `src/integrations/lovable/index.ts`, which wraps `@lovable.dev/cloud-auth-js`'s `createLovableAuth()` rather than calling Supabase's native `supabase.auth.signInWithOAuth(...)` directly. This is application code, not infrastructure.

**Why this mission does not implement the fix.** SB-MIG-1.2's explicit boundaries prohibit modifying application features ("Do NOT: modify application features... introduce new product features... Only perform work required to prepare the Team LIPS backend for production ownership"). Replacing an authentication integration layer is a change to application behavior's implementation, not an infrastructure-preparation task, even though the intended user-facing outcome (Google sign-in) would be unchanged. This was already flagged in SB-MIG-1.1's Phase 2 plan as its own scoped task (item 8), separate from database/infrastructure preparation.

**Manual/future action required:** a dedicated, separately authorized mission to replace the OAuth integration layer, tested end-to-end against both the email/password path (must remain unaffected) and the Google path (must continue to work), before Lovable can be safely disconnected in a later phase. Not a blocker for Team LIPS Supabase's own readiness as a *database* target — this is specifically an application-code dependency, tracked here for visibility, not resolved.

---

## Summary

| Risk | Status | Blocking for Team LIPS Supabase readiness as a database target? |
| --- | --- | --- |
| MIG-3 | **Resolved** | No — closed |
| MIG-1 | Not applicable to target (already correct there); unresolved on current production | No — target already correct |
| MIG-8 | Partially resolved; remainder requires manual/hosting-decision action | Yes — for full production cutover, not for database-readiness itself |
| MIG-12 | Not addressed; explicitly out of scope | No — application-code concern, tracked separately |

Of the four High-severity risks, one is fully closed by this mission's work, one was already closed on the target before this mission began (and remains a source-side gap outside this mission's authority), and two require action this mission is not authorized or positioned to take — both clearly identified rather than worked around, per Task 1's instruction.
