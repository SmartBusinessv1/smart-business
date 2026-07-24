Document: Authentication Recreation Plan

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2A

# SB-MIG-1.2A — Authentication Recreation Plan (Task 2)

Implements the locked Mission Control decision: **controlled account recreation with forced password reset**, not direct copying of Supabase internal authentication rows. Uses only supported Supabase Auth admin-API workflows (`auth.admin.inviteUserByEmail`, `auth.admin.createUser`, `auth.admin.deleteUser`) — no direct manipulation of `auth.users`/`auth.identities` internals.

## 1. The Two Users Require Genuinely Different Treatment

This is the plan's central design finding, and it follows directly from `01-production-user-inventory.md`:

- **User 1** (`iam.mrriyas@gmail.com`, email/password provider) can be **pre-provisioned** on the target before cutover — Supabase's `inviteUserByEmail` creates the `auth.users` row immediately, independent of when the user actually clicks the invite link.
- **User 2** (`creationsflyhigh@gmail.com`, Google OAuth provider) **cannot** be pre-provisioned the same way. Supabase has no supported admin-API path to "pre-create a Google-linked user" without that user actually completing a Google OAuth handshake. **Their `auth.users` row on the target will not exist until they first sign in with Google against the target project, post-cutover.** This means the business-owner reassignment for Salamath Store (User 2's business) cannot happen until after their first successful sign-in — it is necessarily a post-cutover step, not a pre-cutover one.

Both facts must be reflected in the cutover runbook (`09-cutover-runbook.md`) as two different tracks, not treated identically.

## 2. Destination-User Creation Sequence

**For User 1 (email/password):**
1. Confirm business/transaction data for Bhai Store already exists on the target (data migration must precede this step — see `08-production-data-mapping-plan.md`).
2. Call `supabase.auth.admin.inviteUserByEmail("iam.mrriyas@gmail.com", { redirectTo: "<target-app-url>/reset-password" })` against the Team LIPS Supabase project, using the service-role client. This creates the `auth.users` row and sends Supabase's built-in invite email in one call.
3. Record the newly-generated `auth.users.id` returned by the call.
4. Update `businesses.owner_id` for Bhai Store (`4a6741e2-8dde-484d-9846-953a857f833e`) to the new user ID (see §5).

**For User 2 (Google OAuth):** no pre-cutover creation step exists. Their row is created automatically by Supabase Auth the first time they complete `supabase.auth.signInWithOAuth({ provider: "google" })` against the target project — which requires Google OAuth to be configured and working on the target first (`03-google-oauth-parity-report.md`). Business-owner reassignment for Salamath Store happens immediately after that first sign-in is observed (§5).

## 3. Temporary Credential / Invitation Approach

`inviteUserByEmail` is preferred over `admin.createUser` + a discarded temporary password, because it does not require generating, holding, or discarding any credential value at all — Supabase issues a secure, single-use token embedded in the invite link, and no password exists for the account until the user sets one themselves. This is the simpler and safer of the two supported options and is used as the primary mechanism for User 1. `admin.createUser` remains a documented fallback only if `inviteUserByEmail`'s default email template/flow proves unsuitable (see §9 on redirect handling).

## 4. Forced Password-Reset Process

The invite email's link redirects the user to the target application's password-set page with a valid recovery-type session already established by Supabase Auth (the same mechanism used for password-reset links). The existing `src/routes/reset-password.tsx` (confirmed in `04-lovable-oauth-integration-review.md`) already listens for a `PASSWORD_RECOVERY`-equivalent auth state and calls `supabase.auth.updateUser({ password })` — this is very likely directly reusable without modification, but **this specific compatibility (invite-flow session vs. recovery-flow session, in the exact Supabase JS SDK version this app uses) should be verified with a real test invite during the rehearsal (`12-pre-migration-rehearsal-report.md`) before relying on it for real users.** This plan does not assume it works without that verification.

## 5. Business-Owner Reassignment (the technical core of this plan)

Because account recreation via the supported Supabase Auth admin API always generates a **new** `auth.users.id` (there is no supported way to force a specific UUID through `inviteUserByEmail` or `createUser`), the migrated `businesses.owner_id` values cannot simply be carried over unchanged from production. The reassignment step is:

```sql
UPDATE public.businesses
   SET owner_id = '<new-auth-user-id>'
 WHERE id = '<preserved-business-id>';
```

Run once per user, immediately after that user's `auth.users` row exists on the target (post-invite for User 1; post-first-Google-sign-in for User 2). This is an ordinary, service-role-executed `UPDATE` against an existing column with an existing foreign key (`businesses.owner_id REFERENCES auth.users(id)`) — **it requires no schema change, no FK change, and no RLS-policy change.** The FK is satisfied because the referenced `auth.users` row already exists by the time the `UPDATE` runs (this ordering is precisely why User 2's reassignment cannot happen before their first sign-in). RLS is unaffected because RLS policies key off `auth.uid() = businesses.owner_id` dynamically at query time — once `owner_id` is updated, the correct user is immediately and automatically granted the correct visibility, with no policy text change required.

**Business `id` and `transactions`/`inventory_items`/etc. rows referencing it are preserved unchanged** during data migration (`08-production-data-mapping-plan.md`) — only `owner_id` (and `transactions.creator_id`, by the same mechanism) need remapping to new auth UUIDs.

## 6. User Metadata Recreation

Not required as an explicit migration step. User 1 has no custom metadata beyond Supabase Auth's own defaults (confirmed in Task 1). User 2's metadata (display name, avatar) is Google-supplied and will be freshly populated the moment they complete their first Google sign-in against the target — recreating it manually beforehand would be redundant and would need to be overwritten anyway.

## 7. Duplicate-Email Handling

Not a live concern for this migration (exactly 2 unique emails, verified in Task 1, no collision risk). As a general safeguard for the recreation script regardless: check for an existing `auth.users` row with the target email before calling `inviteUserByEmail`/relying on first-OAuth-sign-in-creates-user; if one already exists (e.g., from a retried/failed prior attempt), skip creation and proceed directly to the owner-reassignment step using the existing row's ID.

## 8. Failure Recovery

- If `inviteUserByEmail` fails for User 1 (e.g., email delivery misconfiguration on the target project): no business-owner reassignment has happened yet, so no inconsistent state exists. Fix the underlying issue (see `11-founder-manual-action-checklist.md` for anything requiring dashboard-level SMTP/email configuration) and retry.
- If the owner-reassignment `UPDATE` fails or is applied to the wrong business (operator error): re-run it with corrected values — it is idempotent and safe to repeat, since it simply sets a column to a specific value.
- If a user's `auth.users` row is created but the process is aborted before reassignment: the row can be safely deleted via `auth.admin.deleteUser(id)` and the sequence restarted from step 1, since no other table yet references the new ID.

## 9. User Communication Timing

Recommend sending User 1's invite **only after** their business/transaction data is already verified present and correct on the target (per `08-production-data-mapping-plan.md`'s validation queries) — so that when they set their password and sign in, their data is immediately, correctly visible, with no confusing empty-account interval. Recommend the equivalent guidance for User 2: do not announce/expect their Google sign-in on the target until data migration and Google OAuth parity are both independently confirmed ready. Draft communication text is in `10-user-communication-pack.md`; this plan governs *when* to send it, not the wording.

## 10. Final Login Verification

For each user, after recreation:
1. Confirm the user can complete their respective flow (password set via invite link for User 1; Google sign-in for User 2) and reaches an authenticated session.
2. Query (as that authenticated session, respecting RLS — not via service-role) their visible businesses/transactions/inventory and confirm it matches exactly what `01-production-user-inventory.md` §4 recorded for them, no more and no less.
3. Confirm `businesses.owner_id` for their business equals their new session's `auth.uid()` exactly.

## Required Verification (per Task 2 brief)

**Confirmed: recreated users can be linked to the correct `businesses.owner_id` without weakening existing foreign keys or RLS**, because:
- The FK (`businesses.owner_id REFERENCES auth.users(id)`) is never altered — only satisfied by ensuring correct operation order (create user, then reassign).
- RLS policies on every table already key off `auth.uid()` dynamically — no policy text needs to change for the reassignment to take effect correctly.
- This was structurally confirmed by `02-target-environment-verification-report.md` (SB-MIG-1.2): the schema, including this exact FK and every RLS policy, is verified drift-free from the repository's approved design. This plan works entirely within that already-verified structure.
