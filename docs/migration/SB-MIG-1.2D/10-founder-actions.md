Document: Founder Manual Actions

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2D

# SB-MIG-1.2D — Founder Manual Actions (Task 10)

Only remaining, not-yet-completed actions are listed — nothing already resolved by this mission (e.g., local environment configuration) is repeated here.

| # | Platform | Navigation path | Action required | Verification method |
| - | --- | --- | --- | --- |
| 1 | Lovable | `https://lovable.dev/settings/billing` | **Add credits to the "Smart Business" workspace** (`LICThJCF1oqWPRq7CLLE`) — currently exhausted, blocking any AI-agent-mediated project change. The workspace plan is `pro`; this is a credit-balance issue, not a plan-tier gap. | Retry the environment-variable update this mission attempted (or have a new mission attempt it) and confirm it no longer returns "Your workspace is out of credits" |
| 2 | Lovable dashboard (direct, no credits needed) | Project `governed-growth-path` → editor → environment/project settings (exact menu label depends on Lovable's current UI) | **Alternative to #1**: a human can likely set the same six environment variables directly via the dashboard UI without needing AI-agent credits at all. Values: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_PROJECT_ID`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID` — all now correctly set in this repository's own `.env` (`02-environment-configuration.md`), which can be copied from directly since none of these six are secret-tier values. | Visit the Lovable preview URL after saving and confirm (via browser dev tools network tab, or a repeat of this mission's runtime checks) that Supabase requests now target `gysgzasfcjvtrgaigfyn.supabase.co` |
| 3 | (Decision) | — | Once either #1 or #2 is complete, **authorize a follow-up mission** (or a continuation of this one) to complete Tasks 3, 4 (preview-specific), and 9 — the preview-connectivity, preview-authentication, and preview-deployment verification this mission could not reach | A completed set of `03-preview-integration.md`/`09-preview-validation.md`-equivalent results showing genuine preview-side (not just local-dev) verification |

## Summary

3 items: 1 is the root-cause billing action, 1 is a practical no-credits-needed alternative path to the same outcome, and 1 is a downstream decision to actually complete the preview verification once either of the first two is done.
