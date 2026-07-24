Document: Environment Variable Cutover Map

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2A

Names only — no values are reproduced anywhere in this document, per this mission's explicit instruction, extending the same discipline used in every prior mission's environment-variable reporting.

# SB-MIG-1.2A — Environment Variable Cutover Map (Task 6)

## 1. Application Runtime Variables (require a cutover action)

| Variable | Current location | Target location | Classification | Value changes? | Who updates | When | Rollback value location |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `SUPABASE_URL` | Lovable Cloud runtime env (SSR); tracked `.env` | The chosen production hosting platform's runtime env (undecided — see `01-high-risk-resolution-report.md` MIG-8 from SB-MIG-1.2) | Public / Runtime | **Yes** — points at Team LIPS Supabase's URL instead of the Lovable-managed project's | Whoever administers the new hosting platform | At cutover (step 8 of `05-migration-dry-run-report.md`'s sequence, carried into this mission's `09-cutover-runbook.md`) | Current tracked `.env` value (Lovable-managed project URL) — restorable by reverting the hosting platform's env var, no secret-recovery needed since this value is Public classification |
| `SUPABASE_PUBLISHABLE_KEY` | Lovable Cloud runtime env; tracked `.env` | New hosting platform's runtime env | Public / Runtime | **Yes** — Team LIPS Supabase's own anon/publishable key | Same as above | Same as above | Same as above |
| `VITE_SUPABASE_URL` | Tracked `.env`, build-time | New hosting platform's build environment | Public / Build-time | **Yes** | Whoever controls the build pipeline for the new hosting platform | At the next build following cutover | Current tracked `.env` value |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Tracked `.env`, build-time | New hosting platform's build environment | Public / Build-time | **Yes** | Same as above | Same as above | Same as above |
| `SUPABASE_SERVICE_ROLE_KEY` | Lovable Cloud runtime env (mechanism undocumented — MIG-8, still open) | Supabase Edge Function secret store on Team LIPS Supabase (per `05-service-role-hosting-design.md`) — **not** the application hosting platform's env vars at all | **Server Secret** / Runtime | **Yes** — Team LIPS Supabase's own service-role key, obtained directly from its dashboard | Whoever has Team LIPS Supabase dashboard access | Before any migration-tooling script (`02-authentication-recreation-plan.md`) runs, and independently before any future Edge Function needing it is deployed | Not applicable in the same way as the Public variables — this value should never be written to a location simple enough to "revert"; if rotation is ever needed, generate a new key via the dashboard rather than trying to restore an old one |

## 2. Application Runtime Variables (no cutover action needed)

| Variable | Reason no action is needed |
| --- | --- |
| `SUPABASE_PROJECT_ID` | Confirmed unused anywhere in `src/` (SB-MIG-1.1 Audit 1, Finding ENV-1). If retained at all post-migration, it would simply be updated to Team LIPS Supabase's ref for documentation consistency, but no code path depends on its value. |
| `VITE_SUPABASE_PROJECT_ID` | Same as above — unused. |

## 3. Test-Suite Variables (no cutover action — already correctly scoped)

| Variable | Note |
| --- | --- |
| `SUPABASE_TEST_URL` | Already points at Team LIPS Supabase. No change needed — this variable's entire purpose was always to target this project. |
| `SUPABASE_TEST_ANON_KEY` | Same — no change needed. |
| `SUPABASE_TEST_SERVICE_ROLE_KEY` | Same — no change needed. Remains in gitignored `.env.test.local`, untouched by this mission (confirmed via `git status` at the end of this mission, same as every prior mission). |

These three are the automated test suite's own configuration and were never pointed at the Lovable-managed backend in the first place — they require no "cutover" because they already target the eventual production database.

## 4. New Variables This Migration Introduces

None. This migration's environment footprint is a **repoint**, not an expansion — every variable the target needs already has a name and a defined purpose from the existing `.env`/`.env.test` pattern. No new variable name is required by anything designed in this mission (the service-role hosting design in Task 5 reuses the existing `SUPABASE_SERVICE_ROLE_KEY` name, just in a different storage location).

## 5. Deprecated Variables

None newly identified this mission. `SUPABASE_PROJECT_ID`/`VITE_SUPABASE_PROJECT_ID` remain flagged as unused-candidates-for-cleanup per SB-MIG-1.1 (Finding ENV-1), unchanged status — not deprecated outright, just unused by application code.

## 6. Duplicated Variables

Unchanged from SB-MIG-1.1: `SUPABASE_URL`/`VITE_SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY`/`VITE_SUPABASE_PUBLISHABLE_KEY` are each intentionally defined twice (build-time vs. runtime access patterns) — not accidental duplication, no action needed beyond updating both copies of each pair together at cutover (§1).

## 7. Summary

Five variables require an actual cutover action (§1); two require no action because they're unused (§2); three require no action because they already target the correct project (§3); zero new variables are introduced; zero newly-deprecated variables identified. The cutover's environment-variable footprint is small and fully enumerated — the complexity in this migration is not "how many variables," it's the still-open hosting-platform decision (MIG-8) that determines *where* these five values get configured.
