Document: Environment Configuration

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2D

# SB-MIG-1.2D — Environment Configuration (Task 2)

No value is reproduced in this document — only variable names and verification status.

## 1. Local Development — Configured and Verified

`.env` (repo root, tracked) updated: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_PROJECT_ID`, and their `VITE_`-prefixed build-time equivalents now hold Team LIPS Supabase's (`gysgzasfcjvtrgaigfyn`) values. `SUPABASE_SERVICE_ROLE_KEY` was not present before this change and is not present after — untouched, per this mission's explicit instruction.

**Verification (`04-runtime-verification.md` has full detail):**

| Check | Result |
| --- | --- |
| `SUPABASE_URL` / `VITE_SUPABASE_URL` resolve to Team LIPS Supabase | **Verified** — local dev server's actual network requests (captured via a Playwright-driven browser session) went to `gysgzasfcjvtrgaigfyn.supabase.co`, not the prior production host |
| `SUPABASE_PUBLISHABLE_KEY` / `VITE_SUPABASE_PUBLISHABLE_KEY` are valid and accepted | **Verified** — successful sign-up, sign-in, and RLS-governed queries all completed with `200`/expected responses using this key |
| Service-role key not configured | **Verified** — absent from `.env` before and after; no code path in this mission's diff references it |

## 2. Lovable Preview — Not Configured

**Blocked.** The mechanism available to configure Lovable's project-level environment variables (the `send_message` MCP tool, which drives Lovable's own AI agent) failed with: `"Your workspace is out of credits, so Lovable can't send this message."` No environment variable was changed on the Lovable side. The Lovable preview (and, unaffected either way, the published production site) continue to use whatever backend they were already configured with before this mission — presumed to be the current production Supabase project, consistent with `01-connection-audit.md` §2, though this was not independently re-confirmed today (no working mechanism to inspect Lovable's own env-var values was available either, for the same credit-exhaustion reason).

## 3. Why the Service-Role Key Was Never a Candidate for Either Environment

Consistent with `SB-MIG-1.2A/05-service-role-hosting-design.md` and `SB-MIG-1.2C/05-secret-management-report.md`: no live application code path calls `supabaseAdmin` (`src/integrations/supabase/client.server.ts`), so no environment in this mission genuinely needs `SUPABASE_SERVICE_ROLE_KEY` configured to function. This mission's own explicit instruction not to configure it is therefore not a limiting constraint on what could be tested — every capability this mission verifies (auth, RLS, CRUD, idempotency) operates entirely through the anon/publishable-key tier, exactly as the production application does today.

## 4. Summary

| Environment | `SUPABASE_URL` | `SUPABASE_ANON_KEY`/publishable key | Service-role key |
| --- | --- | --- | --- |
| Local development | **Configured and verified** — Team LIPS Supabase | **Configured and verified** | Not configured (correct) |
| Lovable preview | **Not configured — blocked** (credits) | **Not configured — blocked** (credits) | Not configured (correct) |
