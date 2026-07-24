Document: Runtime Verification

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2D

# SB-MIG-1.2D — Runtime Verification (Task 4)

All checks below were performed against the **local development server** (`http://localhost:8080`), now configured to target Team LIPS Supabase (`02-environment-configuration.md`). **Lovable preview verification is blocked** (`03-preview-integration.md`) — nothing in this document should be read as testing the Lovable-hosted preview specifically; every result here is local-dev-only, driven by a headless-Chromium (Playwright) session.

## 1. Application Loads / Public Pages

| Check | Result |
| --- | --- |
| Homepage (`/`) loads | Verified — HTTP 200, correct title ("Smart Business — Your AI Business Manager on WhatsApp"), no console errors |

## 2. Authentication Page

| Check | Result |
| --- | --- |
| `/auth` loads, renders sign-in form | Verified (re-confirmed; unchanged since SB-MIG-1.2B) |
| Mode switches (sign-up / forgot-password / back) | Verified |

## 3. Email/Password Signup

**Verified end-to-end against Team LIPS Supabase.** A synthetic test account was created via the actual UI signup form. Result: HTTP 200 from `/auth/v1/signup`, correct in-app message ("Account created. Please check your email to confirm your address before signing in."), confirming both the write path and Team LIPS Supabase's email-confirmation requirement are functioning as designed. (Note: Team LIPS Supabase rejects `@example.com`-pattern addresses as invalid during signup — the same edge case `SB-MIG-1.2A/12-pre-migration-rehearsal-report.md` found for `inviteUserByEmail`; a realistic-looking domain was used instead, consistent with that prior finding.)

## 4. Email/Password Signin

**Verified end-to-end.** The signup-created account's email was confirmed via a single, precisely-scoped SQL update (`email_confirmed_at`) restricted to this mission's own synthetic probe address — a data operation on a test account this mission created, not a schema change and not a real user. Signing in with the confirmed account correctly redirected to `/dashboard`.

## 5. Password Recovery

**Verified.** Submitting the "Forgot Password?" form returned HTTP 200 from `/auth/v1/recover` and the correct, calm, non-enumerating in-app message ("If an account exists for that email, we've sent a password recovery link...").

## 6. Native Google OAuth Button — Configuration State

**Unchanged from SB-MIG-1.2C: the Google provider is confirmed not enabled on Team LIPS Supabase.** Re-verified fresh for this mission via the same `/auth/v1/authorize` probe technique:

```text
HTTP 400
{"code":400,"error_code":"validation_failed","msg":"Unsupported provider: provider is not enabled"}
```

The button itself renders correctly and is clickable (unchanged since SB-MIG-1.2B); clicking it produces the same, already-documented, code-correct-but-infrastructure-blocked outcome. Not re-litigated in full detail here — see `SB-MIG-1.2B/06-runtime-test-report.md` and `SB-MIG-1.2C/03-google-oauth-verification.md` for the original characterization, which stands unchanged.

## 7. Dashboard and Business Workspace Loading

**Verified.** After signing in with the newly-confirmed test account (which has no business yet), the dashboard correctly rendered Smart Business's first-time-setup flow ("Let's set up your business"). Completing that form (business name, category, location) via the actual UI successfully created a real `businesses` row (independently confirmed via direct SQL query — correct `owner_id`, correct name), and the app correctly navigated into the workspace, with functioning "Workspace / Transactions / Inventory" navigation and a visible signed-in user email + sign-out control.

## 8. Protected Routes

| Check | Result |
| --- | --- |
| Authenticated visit to `/dashboard` | Verified reachable |
| Unauthenticated visit to `/dashboard` | Verified — redirects to `/auth` |
| Visit to `/dashboard` immediately after logout | Verified — redirects to `/auth` (session correctly cleared, not just client-side UI state) |

## 9. Logout

**Verified.** Clicking the sign-out control redirected away from `/dashboard`, and a subsequent direct visit to `/dashboard` was correctly blocked (§8) — confirming logout genuinely invalidates the session against Team LIPS Supabase, not merely a client-side navigation change.

## 10. Refresh Persistence

**Verified.** Reloading the browser while authenticated (`page.reload()`, a full navigation, not a client-side soft refresh) kept the session intact — the app remained on `/dashboard` rather than bouncing to `/auth`, confirming `persistSession: true` correctly restores the session from storage against Team LIPS Supabase's Auth service specifically (not merely against the previously-tested production project).

## 11. Summary

| Requirement | Status |
| --- | --- |
| Application loads | Verified |
| Public pages | Verified |
| Authentication page | Verified |
| Email/password signup | **Verified end-to-end** against Team LIPS Supabase |
| Email/password signin | **Verified end-to-end** |
| Password recovery | Verified |
| Google OAuth button (config state) | Verified — confirmed still not enabled (unchanged, expected) |
| Dashboard | Verified |
| Protected routes | Verified |
| Logout | Verified |
| Refresh persistence | Verified |
| Business workspace loading | **Verified end-to-end** — real business row created and confirmed |

One pre-existing, already-documented (`SB-MIG-1.2B/06-runtime-test-report.md`) hydration console warning was not newly re-triggered in this mission's checks — unrelated to the backend change, structurally tied to the SSR/client-redirect path, not re-tested exhaustively here since it is a known, out-of-scope, non-blocking condition.
