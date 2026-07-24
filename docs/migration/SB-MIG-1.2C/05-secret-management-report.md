Document: Service Secret Management Report

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2C

# SB-MIG-1.2C — Service Secret Verification (Task 5)

No secret value is exposed anywhere in this document — only variable names, locations, and status.

## 1. Service-Role Key: Current Application Usage

Re-confirmed for this mission (unchanged since SB-MIG-1.2A's `05-service-role-hosting-design.md` §1): a repository-wide search for `supabaseAdmin` — the only exported client in `src/integrations/supabase/client.server.ts` that constructs a service-role Supabase client — finds **exactly one match: its own definition file.** No route, server function, or component anywhere in `src/` imports or calls it. `SUPABASE_SERVICE_ROLE_KEY` is required by that file's `createSupabaseAdminClient()` at construction time, but the constructor itself is never invoked by any live code path today.

## 2. Service-Role Key Location

| Location | Status |
| --- | --- |
| Frontend/browser-bundled code (`src/routes/`, `src/components/`, `src/hooks/`, or anything imported by them) | **Confirmed absent.** `client.server.ts` reads `process.env.SUPABASE_SERVICE_ROLE_KEY` (server-only; `.server.ts` files are excluded from the client bundle by convention, per that file's own comment: "route files and *.functions.ts ship to the client bundle" — implying `.server.ts` files do not) |
| Tracked repository files (`.env`, `.env.test`, `.env.test.local.example`, any `.ts`/`.tsx`/`.md`) | **Confirmed absent.** `.env` (tracked) declares only `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_PROJECT_ID`, and their `VITE_`-prefixed build-time equivalents — six variable names total, none named `SUPABASE_SERVICE_ROLE_KEY`. `.env.test.local.example` declares only the *name* `SUPABASE_TEST_SERVICE_ROLE_KEY` as a documented placeholder, with no value. |
| Current production runtime (Lovable Cloud, serving the live app today) | **Injection mechanism undocumented from this environment** — carried forward, unresolved, from SB-MIG-1.1 (ENV gap) and SB-MIG-1.2 (MIG-8). The current app's own code comment ("Connect Supabase in Lovable Cloud") implies Lovable's own project-secrets system supplies it, but this environment has no access to Lovable's dashboard/secrets configuration to confirm the mechanism directly. |
| Team LIPS Supabase Edge Function secrets | **Not applicable — no Edge Functions exist.** `list_edge_functions` against `gysgzasfcjvtrgaigfyn` returns an empty list, and the repository has no local `supabase/functions/` directory. There is nothing to check secrets *for*. |
| Local development (`.env.test.local`) | **Confirmed correctly gitignored and untracked.** `git ls-files | grep env.test.local$` returns no match — the file exists locally (holding `SUPABASE_TEST_SERVICE_ROLE_KEY` for the dedicated test project, same project ref as the production target) but has never been staged or committed, consistent with every prior mission's final `git status` check this session. |

## 3. Effect of This Mission's Locked Hosting Decision

SB-MIG-1.2 and SB-MIG-1.2A both left the service-role hosting question partially open specifically because *which platform hosts the application* was undecided at the time (MIG-8's stated blocker). **This mission's Locked Decision resolves that ambiguity: "Application remains hosted through Lovable until a future hosting mission."**

This means the practical, near-term answer to "where does `SUPABASE_SERVICE_ROLE_KEY` live for the migrated app" is **Lovable's own project-secrets/environment-variable system** — the same mechanism already in use today for the current Lovable-managed backend, simply repointed at Team LIPS Supabase's own service-role key value once cutover happens. SB-MIG-1.2A's Edge-Function-secret design (`05-service-role-hosting-design.md` §3) remains sound *forward-looking* architecture for any future elevated-privilege operation, but is not the immediate mechanism given hosting stays on Lovable for now, and should not be treated as a blocking prerequisite for SB-MIG-1.3 on that basis alone.

**This still leaves one concrete, unresolved gap:** confirming and configuring Lovable's own secrets mechanism requires Lovable dashboard access this environment does not have. Recorded as a founder action (`08-founder-actions.md`).

## 4. No Client Exposure — Verification

| Check | Result |
| --- | --- |
| Frontend bundle contains `SUPABASE_SERVICE_ROLE_KEY` or its value | No — confirmed absent from every file under `src/` reachable by the client bundle (§2) |
| Frontend bundle contains any `sb_secret_`-prefixed or service-role-tier key | No |
| Any committed file contains a live secret value (not just a variable name) | No — confirmed via targeted pattern search (`sb_secret_`, `eyJ...`-style JWT literals) across all files touched or reviewed this mission; zero matches |
| `.env.test.local` ever staged or committed | No — confirmed via `git ls-files` and this session's own handling discipline (the value was received once, written directly to the gitignored file, never echoed back in plaintext) |

## 5. Summary

| Item | Status |
| --- | --- |
| Service-role key location (current app) | Undocumented Lovable-side mechanism — founder action required to confirm |
| Service-role key location (Team LIPS-side, future) | Resolves to Lovable's own secrets system per this mission's hosting decision; not yet configured (no cutover has happened) |
| Supabase Edge Function secrets | Not applicable — no Edge Functions deployed |
| Local development secrets | Verified correctly isolated (`.env.test.local`, gitignored, untracked) |
| Production runtime secrets | Undocumented — same founder action as above |
| No service-role key in frontend | **Verified — confirmed absent** |
| No service-role key committed | **Verified — confirmed absent** |
| No client exposure | **Verified — confirmed absent** |
