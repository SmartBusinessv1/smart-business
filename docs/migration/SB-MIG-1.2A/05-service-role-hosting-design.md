Document: Service-Role Hosting Design

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2A

# SB-MIG-1.2A — Service-Role Hosting Design (Task 5)

## 1. Finding: The Current Application Has Zero Operations That Use the Service-Role Key

A full repository search for every reference to `supabaseAdmin` (the exported name from `src/integrations/supabase/client.server.ts`, the only file in the entire codebase that constructs a service-role client) found **exactly one match: its own definition file.** No route, server function, or component anywhere in `src/` imports or calls it.

This means, as the application exists today, `SUPABASE_SERVICE_ROLE_KEY` is provisioned (per its comment, "automatically generated... Connect Supabase in Lovable Cloud") but **not exercised by any live code path.** The least-privileged-architecture principle this task asks to prefer is, for the *current* application, already trivially satisfied — not because of deliberate hardening, but because nothing calls it yet. This is stated plainly because it changes the shape of this design: there is no existing elevated-privilege operation to re-architect, only a *future* need to design for responsibly, plus one *migration-tooling* need this mission's own plan introduces.

## 2. Operations Requiring Elevated Privilege

| Operation | Purpose | Caller | Current execution location | Genuinely requires service-role? | Proposed location | Input validation | AuthN requirement | AuthZ requirement | Audit logging |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| None (application runtime) | — | — | `src/integrations/supabase/client.server.ts` exists but is uncalled | N/A — no live operation exists | N/A | N/A | N/A | N/A | N/A |
| `auth.admin.inviteUserByEmail` / `auth.admin.deleteUser` / `auth.admin.createUser` (migration tooling, per `02-authentication-recreation-plan.md`) | Recreate the 2 real production users on Team LIPS Supabase during cutover | An operator-run migration script, not an application server endpoint | Not yet built — this mission designs it, a future mission implements and runs it | **Yes** — these are Supabase Auth admin-API calls that only the service-role key can authorize | A one-time, operator-executed script (or a single-purpose Supabase Edge Function invoked manually by an authorized operator during the cutover window), not a standing, publicly-reachable endpoint | N/A — not user-facing; inputs are the two known, hard-coded production user records from `01-production-user-inventory.md`, not arbitrary input | Operator's own authenticated access to the Supabase dashboard/CLI/Edge Function invocation — not an end-user auth requirement | Restricted to whoever Mission Control authorizes to run the cutover mission | Recommend the script log every admin-API call (user created, business reassigned) to a durable location outside the database itself (e.g., the cutover mission's own completion-report evidence), since this is a one-time, high-consequence operation worth an explicit paper trail |

## 3. Recommended Architecture for Any *Future* Elevated-Privilege Need

Since no current operation needs one, this section is forward-looking design, per the task's request to "produce a server-side secret-hosting design" regardless of present usage:

- **Supabase secret storage:** store `SUPABASE_SERVICE_ROLE_KEY` as a Supabase Edge Function secret (`supabase secrets set`), scoped to the Team LIPS Supabase project itself — never as an application-hosting-platform environment variable, and never in any file this repository tracks. This directly satisfies the Approved Mission Control Decision ("Supabase server-side infrastructure, preferably Edge Functions or another approved Supabase-controlled server runtime").
- **Edge Function ownership:** any future server-side admin operation should be implemented as its own narrowly-scoped Supabase Edge Function (one function per operation, not a general-purpose "admin API" function), each reading the service-role key only from Supabase's own secret store at invocation time, never receiving it as a parameter from the caller.
- **Secret names:** continue using `SUPABASE_SERVICE_ROLE_KEY` as the canonical name (matches existing repository convention in `client.server.ts` and the SB-MIG-1.1/1.2 environment-variable inventories) — no reason to rename it during migration.
- **Rotation procedure:** Supabase supports service-role key rotation from the project dashboard; any Edge Function reading the secret at invocation time (not caching it long-lived in application memory) picks up a rotated value on its next invocation with no code change required.
- **Access boundaries:** an Edge Function invoking the service-role client should itself require a valid, authenticated caller (verified via the function's own `Authorization` header check against a real user session) before performing any privileged action on that user's behalf — the service-role key authorizes the Edge Function to talk to Postgres/Auth freely, but the Edge Function itself must still authorize its caller. (Not yet a concern for the migration-tooling use in §2, which is operator-invoked, not user-invoked — but the correct default for any future user-facing elevated operation.)
- **Deployment procedure:** Edge Functions deploy via the Supabase CLI/dashboard, independent of the main application's own deployment pipeline — meaning the service-role key's exposure surface never touches the application's build or hosting configuration at all.
- **Local development handling:** local development against Team LIPS Supabase (e.g., for testing the migration-tooling script) should use `.env.test.local`-style gitignored local secret storage, exactly the pattern already established and proven safe throughout SB-P-1.10-TESTS-1.0 and every mission since (`SUPABASE_TEST_SERVICE_ROLE_KEY` in `.env.test.local`, confirmed gitignored and never staged in every mission's final `git status` check).
- **Incident response:** if a service-role key is ever suspected exposed, it should be rotated immediately via the Supabase dashboard (invalidating the old value instantly), and every Edge Function/script depending on it re-verified against the new value — the "read at invocation time, never cache long-lived" design in this section is precisely what makes that rotation low-friction.

## 4. Explicit Non-Recommendation

**Do not** wire the currently-unused `supabaseAdmin` client back into any client-reachable code path, and do not host the service-role key anywhere client-visible (frontend environment variables, Lovable browser-side configuration) — both explicitly prohibited by this mission's Approved Mission Control Decision on Service-Role Secret Hosting, and both unnecessary given §1's finding that no current feature requires it.
