Document: Rollback Procedure

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2

# SB-MIG-1.2 — Rollback Procedure (Task 7)

Written to be directly executable by whoever runs the future cutover mission described in `05-migration-dry-run-report.md`. Each scenario below states the trigger condition, the exact steps to take, and how to confirm the rollback succeeded.

## Scenario A — Failed Migration (data export/import fails before cutover)

**Trigger:** row-count mismatch, constraint violation, or any error during the export-from-production or import-to-Team-LIPS-Supabase steps (dry-run §4 steps 3–6), **before** the application's environment variables have been repointed.

**Procedure:**
1. Stop the import process immediately; do not proceed to environment repointing.
2. On Team LIPS Supabase, run the same row-count query used in `03-test-data-cleanup-report.md` §3/§5 against all 7 tables (`businesses`, `transactions`, `transaction_correction_events`, `inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`, `auth.users`). If any partial data was written, clear it using the same pattern as Task 3 (`TRUNCATE ... CASCADE` across the 6 public tables, `DELETE FROM auth.users WHERE <the specific migration batch's identifying criterion>` — **do not blanket-delete `auth.users` without a precise filter**, since by this point the project may legitimately contain the real migrated accounts rather than only test accounts).
3. Confirm Team LIPS Supabase is back to a clean, empty-data, correct-schema state (matching `02-target-environment-verification-report.md`'s baseline).
4. No application-facing action is needed — the application was never repointed, so production continues serving traffic from the Lovable-managed backend without interruption.
5. **Verification:** re-run the Task 2 canonical-schema comparison to confirm structural integrity was undisturbed, and confirm all 7 table row counts are 0 (or back to their pre-attempt state).

## Scenario B — Failed Verification (smoke test fails immediately after cutover)

**Trigger:** post-cutover smoke test (dry-run §4 step 9) fails — sign-in broken, missing/incorrect data visible to a real user, RLS returning wrong results, or any application error directly attributable to the new backend.

**Procedure:**
1. Immediately revert the application's runtime environment variables (`SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, and `VITE_` equivalents) to their prior values pointing at the Lovable-managed backend.
2. Redeploy/restart the application with the reverted configuration.
3. Re-run the smoke test against the reverted (original) backend to confirm the application itself is healthy and the issue was specific to the new backend, not a coincidental unrelated regression.
4. **Do not delete or modify anything on Team LIPS Supabase yet** — preserve its post-cutover state for root-cause investigation before deciding whether to retry or start over.
5. **Verification:** confirm real users can sign in and see their correct data against the reverted backend; confirm application logs show requests going to the Lovable-managed backend's URL, not Team LIPS Supabase's.

## Scenario C — Authentication Issues (sign-in broken specifically, backend otherwise fine)

**Trigger:** users cannot sign in against Team LIPS Supabase post-cutover, but other data/schema checks pass — e.g., the Google OAuth path fails (expected/possible per MIG-11/MIG-12, unresolved), or `auth.users` data wasn't migrated correctly (per the dry run's §3 finding — the hardest step).

**Procedure:**
1. Determine scope: is *all* sign-in broken, or only one provider (e.g., Google OAuth specifically, while email/password works)?
2. **If all sign-in is broken:** treat as Scenario B — full revert to the Lovable-managed backend immediately. Broken authentication blocks all users from all functionality; there is no partial-service option.
3. **If only Google OAuth is broken and email/password works:** this is the decision point flagged in the dry run (§7). Options, both requiring a Mission Control decision, not a unilateral technical call:
   - (a) Accept a temporary email/password-only launch on Team LIPS Supabase, with Google OAuth users specifically informed and unable to sign in until MIG-11/MIG-12 are resolved in a follow-up mission; or
   - (b) Treat as a full rollback trigger (Scenario B) and wait until MIG-11/MIG-12 are resolved before attempting cutover again.
4. **Verification:** for whichever path is chosen, confirm the decision and its user-facing consequence are explicitly documented in the cutover mission's own completion report before proceeding further.

## Scenario D — Data Integrity Issues (discovered during the post-cutover bake window)

**Trigger:** during the monitoring/bake window (dry-run §4 step 10) — after real users may have already written new data to Team LIPS Supabase — a data-integrity problem is discovered (missing rows, corrupted values, RLS allowing/denying incorrectly, orphaned references).

**Procedure — this is the highest-risk scenario, because writes may already have happened against the new backend:**
1. Freeze writes immediately (same mechanism as dry-run §4 step 2, now applied to Team LIPS Supabase instead of the original production backend).
2. Export every row written to Team LIPS Supabase **since the cutover moment** (identifiable via `created_at`/`updated_at` timestamps later than the recorded cutover time) across all 7 tables, in dependency order (dry-run §2), and preserve this export durably before doing anything else.
3. Revert environment variables to the Lovable-managed backend (as in Scenario B) so users can resume working immediately, without waiting for reconciliation to finish.
4. Reconcile the exported post-cutover writes (step 2) into the Lovable-managed backend manually, respecting the same dependency order, checking for and resolving any conflicts with data that was also being written there if the freeze in dry-run §4 step 2 was not fully effective.
5. Once reconciliation is confirmed complete and verified (row-by-row spot check, not just counts, given the small data volume makes this fully tractable), Team LIPS Supabase can be reset to match the reconciled Lovable-managed backend's state (via the Task 3 cleanup pattern, then a fresh export/import) before any future cutover attempt.
6. **Verification:** every row that existed in Team LIPS Supabase's post-cutover window is accounted for — either successfully reconciled into the Lovable-managed backend, or explicitly and deliberately discarded with documented justification (e.g., confirmed duplicate/test data accidentally created during the bake window).

## Scenario E — Connection Rollback (application cannot reach Team LIPS Supabase at all)

**Trigger:** network/connectivity failure, project paused, or credential failure prevents the application from reaching Team LIPS Supabase at all (distinct from Scenario B, where the connection works but the *data/behavior* is wrong).

**Procedure:**
1. Confirm the failure is connectivity/credentials, not a code-level bug, by testing a direct `SELECT 1` against Team LIPS Supabase from outside the application (e.g., via the same MCP tooling used throughout this mission, or the Supabase dashboard's SQL editor).
2. If confirmed unreachable: immediately revert environment variables to the Lovable-managed backend (identical mechanism to Scenario B step 1–2).
3. Investigate connectivity separately (project status, network/firewall rules, credential validity, connection-pooler limits) without time pressure, since the application is already safely back on the working backend.
4. **Verification:** identical to Scenario B — confirm application health against the reverted backend before considering another cutover attempt.

## General Principles Underlying All Scenarios

1. **The Lovable-managed backend is never modified by any cutover step**, so for every scenario except D, "rollback" is simply "stop pointing at the new backend" — there is no destructive undo required.
2. **Never blanket-delete data during rollback.** Every deletion instruction above is scoped to a specific, verifiable criterion (a migration batch, a timestamp window, a confirmed test-account pattern) — mirroring the discipline already demonstrated in `03-test-data-cleanup-report.md`.
3. **Reconciliation (Scenario D) is the only genuinely hard case**, and it is hard specifically because it's the only scenario where real user writes might exist only on the new, about-to-be-abandoned backend. This is exactly why the dry run (`05-migration-dry-run-report.md` §6) recommends a deliberate, monitored bake window rather than declaring success immediately after the smoke test.
4. **Every rollback action should be logged** (what was reverted, when, why, by whom) as part of whatever cutover mission executes this procedure — this document specifies *what* to do, not a substitute for that mission's own evidence trail.
