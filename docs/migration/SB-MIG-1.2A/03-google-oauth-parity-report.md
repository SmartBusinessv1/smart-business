Document: Google OAuth Parity Report

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2A

# SB-MIG-1.2A — Google OAuth Parity Report (Task 3)

## 1. Why This Report Is Mostly "Requires Manual Verification"

`04-lovable-oauth-integration-review.md` established that the current production Google sign-in does **not** exercise Supabase's native OAuth configuration — it is brokered entirely by Lovable Cloud's own `@lovable.dev/cloud-auth-js` service. This has two consequences for this report:

1. **No tool available in this environment can inspect GoTrue provider settings** (client ID presence, client secret presence, configured redirect URIs) for either Supabase project — this was already true in SB-MIG-1.1/SB-MIG-1.2, unchanged here.
2. **Even if such a tool existed, whatever it showed for the Lovable-managed backend's Supabase project might not reflect what actually authorizes today's Google sign-ins**, since that authorization currently happens inside Lovable Cloud's own infrastructure, not Supabase's.

This report states plainly what is and isn't knowable, rather than guessing.

## 2. Comparison Table

| Item | Lovable-managed backend (current) | Team LIPS Supabase (target) | Classification |
| --- | --- | --- | --- |
| Google OAuth provider enabled in Supabase Auth | Unknown — and possibly irrelevant to how sign-in currently works (§1) | Unknown | **Requires manual verification** |
| Supabase-side Google client ID configured | Unknown | Unknown | **Requires manual verification** |
| Supabase-side Google client secret configured | Unknown | Unknown | **Requires founder action** to configure on the target, once the native-OAuth code change (`04-lovable-oauth-integration-review.md` §4) is implemented |
| Authorized redirect URI(s) registered with Google Cloud Console | Unknown — likely registered against a Lovable Cloud callback URL, not a Supabase or app URL directly, given the current architecture | Not yet applicable — no redirect URI can be registered for a flow that doesn't exist yet | **Requires founder action** — a Google Cloud Console OAuth client (new or reused) must have the target's actual redirect URI registered |
| Supabase Auth callback URL pattern | N/A under the current architecture (Lovable brokers the callback) | Will be `https://gysgzasfcjvtrgaigfyn.supabase.co/auth/v1/callback` once native Supabase OAuth is configured — this is Supabase's standard, fixed callback URL pattern for any project, not something to look up per-project | **Verified by convention**, not by direct inspection — this is standard Supabase Auth behavior, not project-specific configuration |
| Production site URL (Supabase Auth's "Site URL" setting) | Unknown | Unknown — must be set to whatever the migrated application's actual production URL will be | **Requires founder action** — depends on the still-undecided hosting-platform question (`05-service-role-hosting-design.md` / SB-MIG-1.2's MIG-8) |
| Permitted redirect URLs (Supabase Auth's redirect allow-list) | Unknown | Unknown — must include the app's post-login destination (e.g., `/dashboard`) | **Requires founder action**, same dependency as above |
| Sign-in flow used by the application | Lovable Cloud proxy (`lovable.auth.signInWithOAuth`) — confirmed by direct code inspection | Would be native `supabase.auth.signInWithOAuth({ provider: "google" })` **after** the code change identified in Task 4 is implemented | **Verified matching intent**, contingent on that not-yet-implemented change |
| Post-login redirect behavior | Currently: either an in-page token exchange (`result.tokens` → `setSession`) or a Lovable-driven redirect, depending on Lovable's internal flow (`result.redirected` branch in the wrapper) | Would be: full-page redirect to Google, then back to the app's configured `redirectTo` URL, where Supabase's client (`detectSessionInUrl`, enabled by default) automatically exchanges the returned code/token for a session — **no dedicated callback route file appears to be required**, since the app's Supabase client singleton (`src/integrations/supabase/client.ts`) initializes early on every page load, but this should be confirmed with a real test during rehearsal, not assumed | **Requires verification during rehearsal/implementation** |
| Logout behavior | `supabase.auth.signOut()` (confirmed standard, no Lovable involvement found anywhere for sign-out) | Unaffected — same call works identically on any Supabase project | **Verified matching** — logout was never coupled to Lovable |

## 3. Summary Classification Counts

| Classification | Count |
| --- | --- |
| Verified matching | 1 (logout) |
| Verified matching intent (pending implementation) | 1 (sign-in flow architecture) |
| Verified by convention | 1 (Supabase callback URL pattern) |
| Missing on target | 0 (nothing was found *configured* anywhere to compare against — see §1) |
| Requires manual verification | 3 (provider enabled, client ID, actual redirect URI currently registered with Google) |
| Requires founder action | 4 (client secret on target, Google Cloud Console redirect URI for target, Site URL, redirect allow-list) |
| Requires code change | 1 (the native-OAuth call site — see `04-lovable-oauth-integration-review.md`) |

## 4. What This Means for Cutover Sequencing

Google OAuth readiness is **not** a single yes/no fact this mission could have confirmed even with perfect tooling — it depends on a code change (Task 4) that hasn't happened yet, plus a set of dashboard/console configuration steps that require a human with access to both the Google Cloud Console and the Team LIPS Supabase dashboard (`11-founder-manual-action-checklist.md`). This report's role is to make sure none of those steps are missed, not to claim a state this mission cannot observe.
