Document: Environment Variable Inventory

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.1

# SB-MIG-1.1 — Environment Variable Inventory (Audit 5)

Names only — no values are reproduced anywhere in this document, per the mission's explicit instruction.

## 1. Complete Variable Inventory

| Variable | Classification | Build-time / Runtime | Where defined | Where used |
| --- | --- | --- | --- | --- |
| `SUPABASE_URL` | Public | Runtime (SSR fallback) | `.env` (tracked) | `src/integrations/supabase/client.ts` |
| `SUPABASE_PUBLISHABLE_KEY` | Public | Runtime (SSR fallback) | `.env` (tracked) | `src/integrations/supabase/client.ts` |
| `SUPABASE_PROJECT_ID` | Public | — | `.env` (tracked) | **Not referenced anywhere in `src/` or config files** — see Finding ENV-1 |
| `VITE_SUPABASE_URL` | Public | Build-time | `.env` (tracked) | `src/integrations/supabase/client.ts` (via `import.meta.env`) |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Public | Build-time | `.env` (tracked) | `src/integrations/supabase/client.ts` (via `import.meta.env`) |
| `VITE_SUPABASE_PROJECT_ID` | Public | Build-time | `.env` (tracked) | **Not referenced anywhere in `src/` or config files** — see Finding ENV-1 |
| `SUPABASE_SERVICE_ROLE_KEY` | **Server Secret** | Runtime | **Not present in any tracked file, `.env`, `.env.test`, or example file** | `src/integrations/supabase/client.server.ts` — see Finding ENV-2 |
| `SUPABASE_TEST_URL` | Public | Runtime | `.env.test` (tracked) | `tests/setup/test-clients.ts` |
| `SUPABASE_TEST_ANON_KEY` | Public | Runtime | `.env.test` (tracked) | `tests/setup/test-clients.ts` |
| `SUPABASE_TEST_SERVICE_ROLE_KEY` | **Server Secret** | Runtime | `.env.test.local` (untracked, gitignored) | `tests/setup/test-clients.ts` |

## 2. Classification Notes

- **Public**: Supabase anon/publishable keys and project URLs are, by Supabase's own design, safe for client-bundle embedding — the actual access boundary is Row-Level Security, not key secrecy. Classified Public here consistent with the classification already established and reviewed by Mission Control during the SB-AUDIT-1.1 documentation refinement and the SB-P-1.10-TESTS-1.0/FIX-IDEMPOTENCY-RLS-1.0 environment reviews.
- **Server Secret**: `SUPABASE_SERVICE_ROLE_KEY` and `SUPABASE_TEST_SERVICE_ROLE_KEY` bypass Row-Level Security entirely. Neither value is exposed anywhere in this repository; only the test-suite one has any local record at all, and only in a gitignored file.
- **Build-time vs Runtime**: `VITE_`-prefixed variables are inlined into the client JavaScript bundle at build time by Vite and become permanently embedded in every shipped bundle regardless of server configuration afterward. Non-`VITE_`-prefixed equivalents are read from `process.env` at request time for server-side rendering and server-only code paths (`client.server.ts`).

## 3. Missing Variables

**Finding ENV-2 (also risk register MIG-8).** `SUPABASE_SERVICE_ROLE_KEY` is required by `src/integrations/supabase/client.server.ts` but is defined nowhere in this repository — not in `.env`, not in any `.env.example`-style file (none exists for the production variable set; only `.env.test.local.example` exists, and it documents a different, test-only variable). Its value and its injection mechanism for the current Lovable-managed runtime are both outside this repository's visibility. **This is the single most important environment-variable gap for migration planning**: whichever platform hosts the application post-migration needs its own equivalent runtime-secret mechanism established and verified before cutover, and this repository currently contains no record of how the existing one is configured to model the replacement on.

No other required variable was found missing. `SUPABASE_TEST_*` are all fully defined and validated at test-runtime (`tests/setup/load-env.ts` hard-fails if any of the three is absent).

## 4. Duplicated Variables

`SUPABASE_URL`/`VITE_SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`/`VITE_SUPABASE_PUBLISHABLE_KEY`, and `SUPABASE_PROJECT_ID`/`VITE_SUPABASE_PROJECT_ID` are each defined twice — once without and once with the `VITE_` prefix. This is an intentional, understood pattern (one copy for Vite's build-time client injection, one copy for `process.env` server-side access), not an accidental duplication or drift. No action recommended.

## 5. Deprecated / Unused Variables

**Finding ENV-1.** `SUPABASE_PROJECT_ID` and `VITE_SUPABASE_PROJECT_ID` are both defined in the tracked `.env` but referenced nowhere in `src/`, `vite.config.ts`, or any other repository config file (confirmed by an exhaustive grep across the codebase during Audit 1). Not formally deprecated (no removal notice exists), but appear unused by the application itself — plausibly consumed only by Lovable's own external tooling/CLI rather than by the app's own runtime code. **Recommendation, not an instruction**: confirm with Lovable/dashboard tooling whether either variable is actually consumed by anything outside this repository before removing them; if confirmed unused everywhere, they are candidates for cleanup in a future documentation/config mission (out of this audit's read-only scope).

No other variable shows deprecation markers, comments, or evidence of being superseded.

## 6. Test-Suite Variable Set (for completeness)

The three `SUPABASE_TEST_*` variables exist solely to let the automated test suite (`tests/`) run against the dedicated Team LIPS Supabase test project, and are unrelated to the application's own runtime configuration. They do not need a production/Lovable equivalent — they are the test harness's own environment, already correctly separated from `.env` (Public) vs `.env.test.local` (Server Secret, gitignored).
