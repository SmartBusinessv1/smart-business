Document: Native OAuth Implementation Report

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2B

# SB-MIG-1.2B — Native OAuth Implementation Report (Task 3)

## 1. Change Summary

**One file modified: `src/routes/auth.tsx`.** No other file was touched.

- Removed the unused-after-this-change import: `import { lovable } from "@/integrations/lovable";`
- Replaced `handleGoogle()`'s implementation, swapping the Lovable Cloud OAuth broker call for a direct native Supabase call.

## 2. Before / After

**Before:**

```ts
async function handleGoogle() {
  setMessage(null);
  setBusy(true);
  try {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setMessage({ kind: "error", text: result.error.message ?? "Google sign-in failed." });
      return;
    }
    if (result.redirected) return;
    router.invalidate();
    navigate({ to: "/dashboard", replace: true });
  } catch (err) {
    setMessage({ kind: "error", text: err instanceof Error ? err.message : "Google sign-in failed." });
  } finally {
    setBusy(false);
  }
}
```

**After:**

```ts
async function handleGoogle() {
  setMessage(null);
  setBusy(true);
  try {
    // Native Supabase OAuth always redirects the browser to Google on
    // success (there is no in-page result to handle here); the busy
    // state naturally becomes moot once the page navigates away.
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
    if (error) {
      setMessage({ kind: "error", text: error.message || "Google sign-in failed." });
    }
  } catch (err) {
    setMessage({ kind: "error", text: err instanceof Error ? err.message : "Google sign-in failed." });
  } finally {
    setBusy(false);
  }
}
```

## 3. Design Decisions

- **No manual `navigate()`/`router.invalidate()` call on the success path.** The old Lovable wrapper had two possible outcomes (`result.redirected === true`, or tokens returned in-page requiring a manual `navigate`), because Lovable's broker sometimes completed the flow without a full browser redirect. Native `supabase.auth.signInWithOAuth` in a browser context has only one outcome on success: the SDK itself triggers `window.location` to Google immediately. There is no in-page result to act on, so the manual navigation calls were removed rather than kept as dead code — this is the "smallest safe change" applied precisely, not merely "smallest diff": keeping unreachable code would not have been smaller in any meaningful sense.
- **`error.message || "Google sign-in failed."`** preserved from the original's `result.error.message ?? "Google sign-in failed."` pattern — same fallback behavior, adjusted only because the native client's `error` object's `message` field is a required `string` (never `undefined`) in this SDK version, making `||` and `??` behave identically here; `||` was kept to match the exact style already used one line below in the `catch` block, for internal consistency within the same function.
- **`redirectTo: `${window.location.origin}/dashboard``** — matches the mission's specified target behavior exactly, and matches the existing codebase's own established pattern for other Supabase `redirectTo`/`emailRedirectTo` usages in this same file (`resetPasswordForEmail`'s `redirectTo: `${window.location.origin}/reset-password``, `signUp`'s `emailRedirectTo: `${window.location.origin}/dashboard``) — this was already the file's own convention before this change, not a new one introduced by it.
- **The button JSX, its Google "G" icon, its label ("Continue with Google"), its position in the page, and its disabled/busy-state wiring are all byte-for-byte unchanged.** Only the function it calls was modified internally.
- **Email/password sign-in, sign-up, and forgot-password (`handleEmailSubmit` and everything below it) are untouched** — confirmed by inspection (not just intent) in `07-regression-test-report.md`.

## 4. Error Handling (Task 5)

The mission requires calm, human-readable errors for five scenarios. All five resolve to the same code path — `supabase.auth.signInWithOAuth`'s returned `error`, displayed via the pre-existing `message` state and its `role="alert"` UI (unchanged JSX) — which is the correct outcome, not a gap: Supabase Auth itself normalizes each of these into a single `error` object with a `message` string, so the application does not need (and should not invent) per-scenario branching logic.

| Scenario | How it surfaces | User sees |
| --- | --- | --- |
| Google OAuth is unavailable (provider not enabled on the target project) | `signInWithOAuth` returns a non-null `error` before any redirect occurs | The error's own message, via `setMessage({ kind: "error", text: error.message` OR `"Google sign-in failed." })` — falls back to the generic message only if Supabase ever returned an empty string |
| The provider is misconfigured (missing client ID/secret) | Same — Supabase Auth detects this server-side and returns an `error` rather than attempting a redirect it can't complete | Same |
| The redirect URL is rejected (not in the allow-list) | Same — rejected before the browser ever leaves the page | Same |
| The user cancels the flow (closes the Google popup/tab, or denies consent) | The user is redirected back to the app's own `redirectTo` URL by Google/Supabase with an error indicated in the return, which the client surfaces as a session-establishment failure — the user lands back on `/dashboard`'s route guard, which (finding no valid session) redirects them to `/auth` exactly as an unauthenticated visitor would be. **No raw error is shown in this specific case** — the user simply ends up back at the sign-in page, which is itself a calm, unsurprising outcome for "I changed my mind" | Returned to the sign-in page, free to try again |
| Supabase returns a generic authentication error | Same as the first three rows | Same |

**No internal identifier, token, stack trace, or secret configuration is ever exposed**: `error.message` is Supabase Auth's own user-facing error string (the same field the pre-existing email/password handlers already display without incident), and the `catch` block's fallback (`err instanceof Error ? err.message : "Google sign-in failed."`) matches the exact pattern already used by every other handler in this file — no new exposure surface was introduced.

The auth page itself was not redesigned — no new error states, no new UI elements, no new copy beyond what the existing `message` display already renders.

## 5. Requirements Checklist (per Task 3's brief)

| Requirement | Met? | Detail |
| --- | --- | --- |
| Preserve loading state | Yes | `busy`/`setBusy` unchanged in shape and usage |
| Preserve error handling | Yes | Same `message` state, same error-display JSX, same fallback-message pattern |
| Preserve the existing button | Yes | Zero JSX changes |
| Preserve post-authentication navigation | Yes, by different (more correct) means | Full-page redirect + existing session-effect (`auth.tsx` lines 41–45) + protected-route guard (`_authenticated/route.tsx`) already handle it; see `04-redirect-session-verification.md` |
| Do not introduce a new auth framework | Yes | Only the existing `@supabase/supabase-js` client is used |
| Do not add an unnecessary callback route | Yes | Confirmed unnecessary in `01-oauth-dependency-audit.md` §4; none added |
| Do not modify email/password flows | Yes | Zero lines changed in `handleEmailSubmit` |
| Do not weaken route protection | Yes | `_authenticated/route.tsx` untouched |
| Remove the Lovable auth import only if it becomes unused | Yes | Removed from `auth.tsx`; `src/integrations/lovable/index.ts` itself left in place pending Task 6's repository-wide usage check |
