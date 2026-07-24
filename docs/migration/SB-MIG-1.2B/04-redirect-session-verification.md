Document: Redirect and Session Verification

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2B

# SB-MIG-1.2B — Redirect and Session Handling Verification (Task 4)

## 1. Lifecycle Walkthrough

| # | Step | Verification method | Result |
| - | --- | --- | --- |
| 1 | User clicks "Continue with Google" | Code inspection + runtime (Task 8) | Button unchanged; `onClick={handleGoogle}` unchanged; confirmed clickable and calls the new handler in runtime verification |
| 2 | Browser is redirected to Google | **Blocked, now with a confirmed cause** — Supabase itself rejects the request before any redirect to Google can occur, on both projects (`03-oauth-configuration-preconditions.md` §1) | Runtime-observed directly: clicking the button navigates the browser to Team LIPS/production Supabase's own `/auth/v1/authorize` endpoint, which returns HTTP 400 with a provider-configuration error instead of a 302 to Google. Confirmed via both the Playwright runtime test and a direct `curl` reproduction (`06-runtime-test-report.md`). The application code itself is correct — `supabase.auth.signInWithOAuth({ provider: "google", ... })` is the standard, documented mechanism for this step in supabase-js v2 — the block is entirely a dashboard-configuration gap, not a code defect |
| 3 | Google redirects to the Team LIPS Supabase callback | **Blocked**, same reason | The callback URL itself (`https://gysgzasfcjvtrgaigfyn.supabase.co/auth/v1/callback`) is fixed by Supabase convention, not application code — nothing in this repository determines or could misconfigure it |
| 4 | Supabase redirects to the approved application URL | **Blocked**, same reason | Depends on the `redirectTo` value (`${window.location.origin}/dashboard`) being present in Team LIPS Supabase's redirect-URL allow-list — a dashboard configuration item, not a code correctness question |
| 5 | The Supabase client receives and persists the session | Code inspection (verified); full end-to-end runtime confirmation blocked | `client.ts`'s `detectSessionInUrl` defaults to `true` and `persistSession: true` is explicit — both already correct, per `01-oauth-dependency-audit.md` §3. Not independently re-testable end-to-end without live OAuth config, but this is unmodified, pre-existing client configuration, not new code this mission introduced |
| 6 | The user reaches `/dashboard` | Code inspection (verified) | `redirectTo` targets `/dashboard` directly; `_authenticated/route.tsx`'s `beforeLoad` guard calls `supabase.auth.getUser()`, which awaits the client's session state (including any pending URL-based exchange) before resolving — confirmed by reading the guard's implementation, not assumed |
| 7 | A refresh preserves the authenticated session | Runtime-verified (Task 8), independent of the OAuth mechanism | `persistSession: true` + `localStorage` storage — this behavior is identical regardless of which sign-in method established the session, and was already working for email/password sign-in before this mission; confirmed still true in Task 8 |
| 8 | Logout clears the session | Runtime-verified (Task 8) | `supabase.auth.signOut()` — never touched by this mission, confirmed still functioning in Task 8 |
| 9 | Revisiting `/dashboard` after logout redirects to `/auth` | Runtime-verified (Task 8) | `_authenticated/route.tsx`'s guard — never touched by this mission, confirmed still functioning in Task 8 |

## 2. Specific Questions Answered

- **Is `/dashboard` the correct `redirectTo` destination?** Yes, confirmed by code inspection: the protected-route guard correctly awaits session resolution before evaluating access (§1, step 6), and this matches the mission's own specified target behavior exactly.
- **Is `window.location.origin` appropriate across production, preview, and local environments?** Yes — `window.location.origin` is computed at click-time from wherever the page is actually being served, so it is correct by construction for any origin the app runs on (Lovable published, Lovable preview, or a future production domain), with no per-environment code branching needed. The *dashboard-side* redirect-URL allow-list must include each origin actually used (tracked in `03-oauth-configuration-preconditions.md`), but that is a configuration concern, not a code concern.
- **Does the application require an explicit callback route?** No — confirmed in `01-oauth-dependency-audit.md` §4.
- **Does router invalidation remain necessary after native OAuth redirect?** No — removed deliberately (see `02-native-oauth-implementation-report.md` §3): a full-page redirect makes any SPA-router-state invalidation moot, since the router itself is freshly re-initialized on the next page load.

## 3. What Remains Genuinely Unverified

Steps 3–5 in §1 cannot be observed at all — the flow never reaches Google, so there is nothing to test past step 2. Step 2 itself *was* observed, and what was observed is a confirmed rejection at the Supabase-authorize stage on both projects, not an unknown. This is stated plainly rather than simulated — per this mission's own instruction: "If Google OAuth dashboard configuration is incomplete, clearly mark live OAuth verification as blocked rather than simulating success." See `06-runtime-test-report.md` for the full evidence and exactly what *was* runtime-tested versus explicitly marked blocked.

## 4. In-Page Error Surfacing: An Honest Limitation

The mission's error-handling design (`02-native-oauth-implementation-report.md` §4) routes all `signInWithOAuth` failures through the `error` object returned by that call, displayed via the existing `role="alert"` UI. Runtime testing surfaced a case that design does not cover: when Supabase rejects the request at its own `/authorize` endpoint (as observed here), the browser has *already navigated away* from the app to that endpoint by the time the rejection happens — the failure is a server-side HTTP 400 on the destination page, not a value the `supabase-js` client can intercept and return as an in-page `error`. Concretely: `signInWithOAuth` triggers `window.location.assign(...)` to the authorize URL and resolves without a populated `error`, because from the client library's perspective the redirect request was issued successfully; what happens after the browser leaves the page is outside the SDK's visibility. As a result, for this specific class of failure (provider not enabled/misconfigured), **the user does not see the app's calm in-page error message — they see Supabase's raw JSON error response rendered as a bare page**, confirmed by screenshot in `06-runtime-test-report.md`. This is a real, user-visible gap, but it is not a defect introduced by this mission's code change: the *previous* Lovable-broker implementation had the same structural limitation for any failure mode where its broker also performed a full browser redirect before failing (its own `result.redirected` branch exists precisely because the old code couldn't always intercept a redirect-time failure either). It is recorded here as an honest limitation rather than glossed over, and is expected to become moot once the Google provider is actually enabled and correctly configured on Team LIPS Supabase — at that point this failure mode cannot occur for a correctly-configured provider, only for genuine user cancellation (which *is* handled gracefully, per row 4 of `02-native-oauth-implementation-report.md`'s error table).
