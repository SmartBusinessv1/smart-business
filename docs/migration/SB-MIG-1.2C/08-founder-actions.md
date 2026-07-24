Document: Founder Manual Actions Checklist

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2C

# SB-MIG-1.2C — Founder Manual Actions (Task 8)

This checklist supersedes SB-MIG-1.2A's `11-founder-manual-action-checklist.md`. Item #7 from that list (choose a hosting platform) is now **resolved** by this mission's Locked Decision ("Application remains hosted through Lovable until a future hosting mission") and is not repeated here. Every remaining item is carried forward, re-verified as still open, or newly identified by this mission's own checks. None of these actions can be completed by Claude Code — each requires dashboard/console access this environment does not have, or a decision only a human with product/business authority can make.

| # | Platform | Navigation path | Action required | Verification evidence required |
| - | --- | --- | --- | --- |
| 1 | Team LIPS Supabase dashboard (billing) | Organization Settings → Billing | **Upgrade the organization plan from `free` to Pro (or above).** This is the prerequisite for #2 below and is a hard blocker per `02-backup-recovery-report.md` §7. | Dashboard confirms plan is Pro-or-above |
| 2 | Team LIPS Supabase dashboard | Project (`gysgzasfcjvtrgaigfyn`) → Database → Backups | **Enable Point-in-Time Recovery (or confirm scheduled daily backups if PITR is deferred), or explicitly document an approved alternative recovery strategy for Mission Control's acceptance.** This is the mission's own stop condition (`02-backup-recovery-report.md` §7) — production cutover remains blocked without this. | Screenshot of the Backups configuration screen showing PITR/backup status enabled |
| 3 | Google Cloud Console | APIs & Services → Credentials → OAuth 2.0 Client IDs | Confirm whether an existing Google OAuth client can be reused, or create a new one, with an authorized redirect URI of `https://gysgzasfcjvtrgaigfyn.supabase.co/auth/v1/callback` | Screenshot of the redirect URI configuration (client ID visible is fine; secret must not appear) |
| 4 | Team LIPS Supabase dashboard | Project → Authentication → Providers → Google | Enable the Google provider; enter the client ID and secret from #3 | Provider shows "Enabled"; re-running this mission's `curl` probe against `/auth/v1/authorize?provider=google` should stop returning `"provider is not enabled"` |
| 5 | Team LIPS Supabase dashboard | Project → Authentication → URL Configuration | Set Site URL and populate the redirect allow-list with every origin the app is genuinely served from — at minimum the Lovable published app (`https://governed-growth-path.lovable.app/dashboard`), plus `smartbusiness.teamlips.com/dashboard` **only if #12 below confirms that domain is actually live** | A test OAuth flow (after #4) completes and lands on `/dashboard`, not an error page |
| 6 | Team LIPS Supabase dashboard | Project → Settings → API | Obtain Team LIPS Supabase's own `service_role` secret key | Confirm the key works via a single low-risk test call (e.g., listing users) before relying on it; never paste this value into any chat, commit, or document |
| 7 | Lovable dashboard | Project settings → Secrets/Environment variables (exact path depends on Lovable's current UI) | Configure `SUPABASE_SERVICE_ROLE_KEY` (and the five variables in `06-environment-verification.md` §5) in Lovable's own secrets system, pointed at Team LIPS Supabase's values — **only at actual cutover time**, not before, per this mission's "no reconnect" boundary | Confirm the app's server-side code (`client.server.ts`) can construct its admin client without a missing-variable error, tested only in a non-production context |
| 8 | Team LIPS Supabase dashboard | Project → Authentication → Emails (or Settings → Auth → SMTP) | Confirm default email delivery is sufficient for the very low expected volume (per `SB-MIG-1.2A/01-production-user-inventory.md`, 2 real users) | Send a real test invite and confirm delivery |
| 9 | Team LIPS Supabase dashboard | Project → Authentication → Policies | Enable "leaked password protection" — confirmed disabled by this mission's security advisor check (`07-security-gate.md` §10) | Dashboard shows the setting toggled on |
| 10 | Team LIPS Supabase dashboard / DNS provider | — | Resolve whether `smartbusiness.teamlips.com` is genuinely live and DNS-mapped to the Lovable-hosted app (carried unresolved since SB-MIG-1.2's MIG-13 finding) | A direct visit to the domain resolves to the application, or a written decision that the domain is not yet in use |
| 11 | (Founder/Mission Control decision) | — | Approve the migration-freeze window's timing for the eventual SB-MIG-1.3 cutover | A written approval, including the agreed time window |
| 12 | (Founder/Mission Control decision) | — | Review and approve (or edit) the draft communications in `SB-MIG-1.2A/10-user-communication-pack.md` before sending to either real user | Explicit written approval per message |
| 13 | (Founder/Mission Control decision) | — | Decide the Scenario-C fallback (`SB-MIG-1.2/06-rollback-procedure.md` Scenario C): if Google OAuth isn't fully ready at cutover time, is a temporary email/password-only launch acceptable, or should cutover wait? | A written decision, made before SB-MIG-1.3 begins |
| 14 | (Operator action, technical not a "decision") | Supabase MCP or dashboard SQL editor | Re-run test-data cleanup on Team LIPS Supabase (same pattern as `SB-MIG-1.2/03-test-data-cleanup-report.md`) immediately before SB-MIG-1.3 begins — this mission's own checks found 69 test businesses/users have re-accumulated since that cleanup, from subsequent Vitest suite runs (`01-production-plan-verification.md` §7) | Before/after row counts across all 7 tables, same evidence pattern as the original cleanup report |

## Summary

14 items: 9 require dashboard/console/DNS access (#1–6, #8–10), 3 are pure decisions (#11–13), 1 is a repeatable operator action (#14), and 1 (#7) is explicitly deferred to actual cutover time rather than performed now. Items #1 and #2 are new this mission and are the most consequential — they are this mission's stop-condition trigger (`02-backup-recovery-report.md`).
