Document: Runtime Test Report

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2B

# SB-MIG-1.2B — Runtime Test Report (Task 8)

## 1. Environment

Only local dev was reachable in this environment. There is no browser access to the Lovable editor/preview UI or to `smartbusiness.teamlips.com` from this session — those require a human to open them (or Mission Control to authorize a different verification channel). This limitation is stated plainly, per the mission's own instruction to mark blocked rather than simulate.

| Environment | Reachable in this session? | Result |
| --- | --- | --- |
| Local dev (`npm run dev`, `http://localhost:8080`) | Yes | Fully exercised — see §2–§4 |
| Lovable preview | No — no browser/network access to the Lovable-hosted preview from this environment | Not tested. Recommend Mission Control or a human tester open the preview URL and repeat §2's checklist. |
| Lovable published app (`https://governed-growth-path.lovable.app`) | No, same reason | Not tested, same recommendation. |
| `smartbusiness.teamlips.com` | No, same reason; also carries the pre-existing unresolved MIG-13 "is this domain actually live" question | Not tested. |

Local dev's `.env` currently points at the **current production** Supabase project (`wwgqnshcgbukqczqblsm`), not Team LIPS Supabase — expected and correct, since re-pointing environment configuration is explicitly out of this mission's scope (no hosting/env migration authorized). This means the Google-OAuth-click test below exercised production's Supabase project's provider configuration, not Team LIPS's; Team LIPS's equivalent state was confirmed separately via direct `curl` (§5).

Tooling note: `chromium-cli` was not available in this Windows Git-Bash environment. Per the `run` skill's documented fallback, a small Playwright driver script was used instead (`chromium.launch({ args: ["--no-sandbox"] })`), run from an isolated scratchpad location — Playwright is not, and was not made, a project dependency.

## 2. Page Load and Static Rendering

| Check | Result |
| --- | --- |
| `/auth` loads (HTTP 200, no crash) | Pass |
| Heading "Sign in to Smart Business" renders | Pass |
| "Continue with Google" button renders and is visible | Pass |
| Email field (`#email`) renders | Pass |
| Password field (`#password`) renders | Pass |
| Console errors on direct page load | **None** — a clean, isolated fresh load of `/auth` produced zero console errors (re-verified independently, see §6) |

Screenshot: `01-auth-page-initial.png`.

## 3. Mode-Switch Navigation

| Check | Result |
| --- | --- |
| "Create an account" switches to sign-up mode (heading "Create your Smart Business account") | Pass |
| "Sign in" link returns from sign-up mode to sign-in mode | Pass |
| "Forgot Password?" switches to reset-password mode (heading "Reset your password") | Pass |
| "Sign in" link returns from forgot-password mode to sign-in mode | Pass |

Screenshots: `02-signup-mode.png`, `03-forgot-password-mode.png`.

None of this mode-switch logic was touched by this mission's code change (only `handleGoogle()` was modified) — its continued correctness here is expected, and confirms no incidental breakage was introduced by the edit.

## 4. Clicking "Continue with Google"

The button is clickable and does not crash the app. What happens next:

1. The click triggers the new `handleGoogle()` code path, which calls `supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: "http://localhost:8080/dashboard" } })`.
2. The Supabase client issues a full-page navigation to `https://wwgqnshcgbukqczqblsm.supabase.co/auth/v1/authorize?provider=google&redirect_to=http%3A%2F%2Flocalhost%3A8080%2Fdashboard` (production's Supabase project, per the local `.env` currently in place).
3. That endpoint responds with **HTTP 400** and body `{"code":400,"error_code":"validation_failed","msg":"Unsupported provider: missing OAuth secret"}`.
4. The browser is left showing that raw JSON response — Supabase's own error page, not the application's UI.
5. A browser console error is recorded: `Failed to load resource: the server responded with a status of 400 ()`.
6. No in-page `[role="alert"]` is shown, because the app has already navigated away — see the explanation in `04-redirect-session-verification.md` §4 ("In-Page Error Surfacing: An Honest Limitation").

Screenshot: `04-after-google-click.png` (shows the raw Supabase JSON error page, confirmed visually).

**This is the expected, correct outcome for this mission's state, not a code defect.** Per the mission's Task 8 instruction: "If Google OAuth dashboard configuration is incomplete, clearly mark live OAuth verification as blocked rather than simulating success." Google OAuth dashboard configuration is confirmed incomplete on both Supabase projects (§5) — end-to-end Google sign-in is genuinely blocked pending that dashboard work, and this report marks it as such rather than fabricating a pass.

## 5. Root-Cause Confirmation (Direct Probe, Both Projects)

To characterize the 400 precisely rather than leave it as an ambiguous "blocked," the `/auth/v1/authorize` endpoint was probed directly with `curl` on both Supabase projects, bypassing the browser entirely:

```
curl -s "https://wwgqnshcgbukqczqblsm.supabase.co/auth/v1/authorize?provider=google&redirect_to=http://localhost:8080/dashboard"
→ HTTP 400
→ {"code":400,"error_code":"validation_failed","msg":"Unsupported provider: missing OAuth secret"}

curl -s "https://gysgzasfcjvtrgaigfyn.supabase.co/auth/v1/authorize?provider=google&redirect_to=http://localhost:8080/dashboard"
→ HTTP 400
→ {"code":400,"error_code":"validation_failed","msg":"Unsupported provider: provider is not enabled"}
```

**Finding:** Google OAuth's native Supabase provider has never been configured via GoTrue's own provider settings on either project. Production's real Google sign-in has only ever worked through Lovable Cloud's separate OAuth broker (`@lovable.dev/cloud-auth-js`), a mechanism entirely independent of Supabase's own native OAuth provider configuration. The two projects differ in exactly which stage they fail at — production has the provider toggled on but no client secret set; Team LIPS Supabase has the provider toggled off entirely — but both are equally blocked for native Google sign-in until a human completes the Google Cloud Console + Supabase dashboard configuration described in `03-oauth-configuration-preconditions.md`.

This upgrades that document's prior "Pending dashboard action" / "requires manual verification" language (hedged, because no tool in this environment reads GoTrue settings directly) to a confirmed, evidence-backed fact — obtained by reading the provider's own honest error response rather than assuming.

## 6. Unauthenticated Protected-Route Redirect

Independent of Google OAuth's live-configuration blocker, the protected-route guard itself (`src/routes/_authenticated/route.tsx`, untouched by this mission) was runtime-tested directly, since it requires no credentials:

| Check | Result |
| --- | --- |
| Visiting `/dashboard` with no active session | Redirects to `/auth` (confirmed: final URL after navigation is `http://localhost:8080/auth`) |

Screenshot: `05-unauthenticated-dashboard-redirect.png`.

One console entry was observed during this specific redirect (a React hydration-mismatch warning referencing `SiteLayout`/`Suspense`). This was isolated as **pre-existing and unrelated to this mission**: a direct, fresh load of `/auth` (§2) produces zero console errors, so the warning is specific to the SSR page → client-side-redirect transition exercised by `_authenticated/route.tsx`'s guard — a file this mission did not modify. It is noted here for completeness, not treated as a blocker, since reproducing and fixing pre-existing hydration behavior outside `auth.tsx` is out of this mission's authorized scope (see the mission's own "unrelated code changes" exclusion).

## 7. Session Persistence, Logout, and a Real Authenticated Session

**Not independently runtime-tested with a live, authenticated session in this mission**, and this is stated plainly rather than glossed over. Reaching an authenticated state to test refresh-persistence and logout requires either:

- Completing a real Google sign-in (blocked — see §5), or
- Signing in with real email/password credentials, which this mission does not have authorization to create or use against the current production backend (doing so would mean touching real or newly-fabricated user accounts, outside this mission's authorized scope — it is an authentication *transition* mission, not a data/account mission).

What **is** verified for these behaviors is code inspection, per `04-redirect-session-verification.md` §1 rows 7–9: `persistSession: true` and `supabase.auth.signOut()` are pre-existing, unmodified code paths in `src/integrations/supabase/client.ts` and `src/hooks/use-auth.tsx`, neither of which this mission's diff touches. These behaviors are provider-agnostic — a session established via Google OAuth is stored and cleared identically to one established via email/password, and the latter already worked before this mission. This is a reasoned inference from an unmodified code path, not a runtime observation, and is labeled as such.

## 8. Summary

| Task 8 requirement | Status |
| --- | --- |
| Auth page loads, renders correctly | Runtime-verified |
| Google button renders and is clickable | Runtime-verified |
| Email/password fields render | Runtime-verified |
| Mode-switch links work | Runtime-verified |
| No console errors on page load | Runtime-verified (clean) |
| Google sign-in end-to-end | **Blocked** — confirmed root cause: Google provider not configured on either Supabase project (§5), not a code defect |
| Session persists across refresh | Verified by code inspection only; not runtime-exercised with a live session (§7) |
| Logout clears session | Verified by code inspection only; not runtime-exercised with a live session (§7) |
| Protected-route redirect (unauthenticated) | Runtime-verified |
| Lovable preview / published app / `smartbusiness.teamlips.com` | Not tested — no browser access to these from this environment (§1) |
