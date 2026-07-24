Document: Security Verification

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2B

# SB-MIG-1.2B — Security Verification (Task 9)

## 1. No OAuth Client Secret in Frontend Code

Confirmed by inspection of the actual diff (`02-native-oauth-implementation-report.md`): the new implementation passes only `provider: "google"` and a `redirectTo` URL to `supabase.auth.signInWithOAuth`. No client ID, client secret, or any Google-specific credential appears anywhere in `src/routes/auth.tsx` or any other file this mission touched. The client secret, per the locked architecture, lives exclusively in Team LIPS Supabase's own GoTrue configuration (server-side, Supabase-managed) — never in this repository, matching the same discipline already established for every other secret handled across the SB-MIG mission sequence.

## 2. No Service-Role Key in Frontend Code

Unaffected by this mission (no file using `SUPABASE_SERVICE_ROLE_KEY` was touched). Re-confirmed via a repository-wide search: zero occurrences of `SUPABASE_SERVICE_ROLE_KEY` outside `src/integrations/supabase/client.server.ts` (the server-only admin client, unmodified) — same finding as SB-MIG-1.2A's `05-service-role-hosting-design.md` §1, unchanged.

## 3. No Secret Committed to Git

`git status` and `git diff` (reviewed in `08-sb-mig-1-2b-completion-report.md`) confirm the only source-code change is the two-part edit to `src/routes/auth.tsx` described in `02-native-oauth-implementation-report.md` — an import removal and a function-body replacement, neither of which contains any credential value.

## 4. Only Public Supabase Client Configuration Used in the Browser

The new code calls `supabase.auth.signInWithOAuth` on the existing `supabase` client from `src/integrations/supabase/client.ts`, which is already configured with only the publishable/anon-tier key (`VITE_SUPABASE_PUBLISHABLE_KEY`) — the same client every other browser-side auth call in this file already uses (`signInWithPassword`, `signUp`, `resetPasswordForEmail`). No new client, no new configuration surface, no elevated-privilege access introduced.

## 5. Redirect URLs Are Allowlisted

By design, not merely by convention: Supabase Auth rejects any `redirectTo` value not present in the project's configured redirect-URL allow-list, regardless of what the client sends. This is a platform-level safeguard, not something this application's code could bypass even if it wanted to — meaning the *application* cannot cause an unauthorized redirect no matter what value is passed, and misconfiguration (an incomplete allow-list) fails closed (the OAuth attempt errors) rather than open (an unauthorized redirect succeeding). The allow-list's actual current contents are tracked as a dashboard-configuration item in `03-oauth-configuration-preconditions.md`, not a code-security question.

## 6. RLS Remains the Authorization Boundary After Sign-In

Nothing about *how* a session was established (email/password vs. native Google OAuth vs., previously, Lovable-brokered Google OAuth) changes what that session can subsequently do — every table's RLS policies key off `auth.uid()` at query time, independent of the sign-in method that produced the current JWT. This mission changed only the sign-in initiation code; it did not touch, and could not weaken, any RLS policy, any table, or any function. Confirmed structurally unchanged by the fact that this mission's diff touches exactly one file (`src/routes/auth.tsx`) and zero database objects.

## 7. Google Authentication Does Not Grant Financial Visibility Beyond Existing Owner Permissions

A Google-authenticated user's `auth.uid()` is exactly as significant to RLS as an email/password-authenticated user's — RLS does not distinguish by provider at all (confirmed by reading every RLS policy across all six tables in prior SB-MIG missions: none references `auth.jwt() ->> 'provider'` or any provider-conditional logic). A user signing in via Google sees exactly the businesses/transactions/inventory their `owner_id`/`creator_id` already entitles them to — identical in scope to what they would see signing in via email/password with the same underlying account. This mission introduces no new privilege path.

## 8. Summary

All seven security-verification requirements are satisfied. This mission's change is narrow enough (one file, an initiation-call swap) that most of these checks reduce to "confirm nothing else was touched" — which is itself the correct outcome for a "minimum-change" mission, not an evasion of the checks.
