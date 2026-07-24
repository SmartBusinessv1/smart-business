Document: Live OAuth Test

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2C

# SB-MIG-1.2C — Live OAuth Verification (Task 4)

## 1. Instruction Applied

This mission's Task 4 instruction is explicit: "Where configuration permits: perform a complete Google sign-in verification... If configuration is incomplete: Stop verification immediately. Document exactly which configuration prevented testing." `03-google-oauth-verification.md` §1 confirms the Google provider is not enabled on Team LIPS Supabase. Per the instruction, live end-to-end verification **stops here** rather than being simulated or attempted piecemeal.

## 2. Exactly Which Configuration Prevented Testing

The blocking configuration item is precise, not vague: **Team LIPS Supabase's GoTrue "Google" provider toggle is off.** Confirmed via a direct HTTP request to the project's own `/auth/v1/authorize` endpoint, which returned:

```text
HTTP 400
{"code":400,"error_code":"validation_failed","msg":"Unsupported provider: provider is not enabled"}
```

This is the first step of the OAuth handshake (browser → Supabase → Google). Because it fails at this first step, none of the following steps can be exercised at all — not "exercised and found broken," genuinely unreachable:

| Step | Reachable? |
| --- | --- |
| Redirect to Google | No — request rejected before any redirect to Google occurs |
| Return to Supabase (Google → Supabase callback) | No — never reached |
| Session established | No — never reached |
| Dashboard reached | No — never reached |
| Refresh persists session | Not applicable to Google OAuth specifically — see §3 for what *is* known about this behavior |
| Logout succeeds | Not applicable to Google OAuth specifically — see §3 |
| Protected routes remain protected | **Yes — independently verifiable without any OAuth flow at all (§4)** |

## 3. Session Persistence and Logout: What Is and Isn't Known

Session persistence (`persistSession: true`) and logout (`supabase.auth.signOut()`) are providers-agnostic, pre-existing code paths in `src/integrations/supabase/client.ts` and `src/hooks/use-auth.tsx`, unmodified by SB-MIG-1.2B or this mission. They do not depend on *which* sign-in method produced the session. This was already stated, with the same honesty about its limits, in SB-MIG-1.2B's `06-runtime-test-report.md` §7: not independently runtime-exercised with a live, credentialed session in that mission either, for the same reason — no authorized path in either mission to obtain one (completing Google OAuth is blocked; using real or newly-fabricated email/password credentials against the target project is outside this mission's authorized scope, which is verification, not account creation).

## 4. What Was Independently Verified Without Requiring OAuth

The protected-route guard (`src/routes/_authenticated/route.tsx`) requires no credentials to test — an unauthenticated visit is itself the test case. This was verified fresh for this mission:

- Local dev server (`http://localhost:8080`) started, `/dashboard` visited with no active session → redirected to `/auth`. Confirmed via direct HTTP check of the app's routing behavior, consistent with SB-MIG-1.2B's `06-runtime-test-report.md` §6 finding (same guard, unmodified since).

This confirms the *application's* authorization boundary is intact and working, independent of which OAuth provider is or isn't configured — a meaningful, real result, not a substitute for the blocked end-to-end Google test.

## 5. Summary

| Requirement | Result |
| --- | --- |
| Redirect to Google | Blocked — provider not enabled |
| Return to Supabase | Blocked — unreachable |
| Session established (via Google) | Blocked — unreachable |
| Dashboard reached (via Google) | Blocked — unreachable |
| Refresh persists session | Verified by code inspection only (provider-agnostic, unmodified code); not runtime-exercised with a live Google-authenticated session |
| Logout succeeds | Verified by code inspection only, same caveat |
| Protected routes remain protected | **Runtime-verified**, independent of OAuth configuration |

**Live Google OAuth verification is blocked, and the exact blocking configuration item is Team LIPS Supabase's Google provider toggle (`03-google-oauth-verification.md` §1–2).** This is not a code defect — SB-MIG-1.2B's implementation is confirmed correct and unchanged (`docs/migration/SB-MIG-1.2B/`). It is a dashboard-configuration gap requiring founder/Google-Cloud-Console action, tracked precisely in `08-founder-actions.md`.
