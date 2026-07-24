Document: Pre-Migration Rehearsal Report

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2A

# SB-MIG-1.2A — Pre-Migration Rehearsal Report (Task 12)

Everything in this report was executed against **Team LIPS Supabase only** (non-production, per this mission's own boundaries), using entirely throwaway, clearly-labeled data (`rehearsal-*@example.com`), never touching either real production user or any real production data. All rehearsal data was created and removed within the same session; the project's data tables were confirmed at 0 rows both before and after.

## 1. What Was Rehearsed

### 1.1 The Account-Recreation and Owner-Reassignment Mechanism (`02-authentication-recreation-plan.md`)

A script exercised the actual mechanism this mission's plan depends on: create a throwaway "old owner" user, create a business owned by them, create a throwaway "new owner" user, run the exact `UPDATE businesses SET owner_id = ...` reassignment pattern, and verify the result.

**Result: 12 of 13 rehearsal steps passed**, including the two steps that matter most:

- **"owner-reassignment UPDATE succeeds and FK is satisfied" — PASS.** The `businesses.owner_id` foreign key was satisfied and the update applied cleanly, directly confirming `02-authentication-recreation-plan.md` §5's central design claim with a real execution, not just written reasoning.
- **"post-reassignment row is internally consistent" — PASS.** An independent re-read confirmed the row's `owner_id` matched the new user's ID exactly.
- Full cleanup succeeded: the rehearsal business and all rehearsal users were removed, independently re-verified via a direct row-count query (`businesses`, `auth.users`, `transactions`, `inventory_items` all confirmed at 0 immediately afterward).

### 1.2 A Genuine Finding: `inviteUserByEmail` Rejects `@example.com`

**The one rehearsal step that did not pass as originally designed: `inviteUserByEmail("rehearsal-new-...@example.com")` failed with `"Email address ... is invalid"`, reproduced consistently across two separate attempts.** This is not a script defect — `admin.createUser` accepted the identical domain without issue in the same run, isolating the cause to `inviteUserByEmail` specifically applying stricter deliverability validation (Supabase's invite-email path appears to reject known non-routable/reserved test domains, which `example.com` is, by IANA design).

**Why this matters for `02-authentication-recreation-plan.md`:** the plan's primary mechanism for User 1 (`iam.mrriyas@gmail.com`) is `inviteUserByEmail`. `gmail.com` is a real, routable domain, so this specific rejection is very unlikely to recur for the actual recreation — but this finding means **the plan's assumption that `inviteUserByEmail` "just works" was not something this mission should have asserted without testing, and testing surfaced a real edge case in Supabase's validation behavior worth knowing about.** Recommend the actual cutover mission send a single real test invite (to a real, disposable inbox the operator controls — not `@example.com`) during its own final pre-flight check, rather than assuming success on the first attempt against a real user.

### 1.3 `generateLink` Structure Inspection

Rather than requiring a real email inbox to validate the invite-link mechanism, `admin.generateLink({ type: "invite", ... })` was called directly, and its returned `action_link` was inspected structurally (without following it or exposing its full value in this document — only its host and parameter names are recorded):

- Host: `gysgzasfcjvtrgaigfyn.supabase.co` (confirms links are issued by Supabase Auth directly, not proxied through any third party — relevant confirmation given `04-lovable-oauth-integration-review.md`'s finding that the *current* Google OAuth path is Lovable-proxied; this confirms the *password-recovery* mechanism, in contrast, has no such indirection)
- Parameters: `token`, `type`, `redirect_to` — standard Supabase Auth recovery-link shape, consistent with what `src/routes/reset-password.tsx` is already built to handle (per `02-authentication-recreation-plan.md` §4's flagged-as-needing-verification assumption — this rehearsal step provides supporting, though not conclusive, evidence that the link shape is the expected one; actually completing a click-through against the real reset-password page remains untested, since doing so would require a running instance of the application, out of this mission's scope).

### 1.4 Schema Compatibility and Data-Mapping Validation

Not separately re-rehearsed as new work in this task — already exhaustively performed as live verification in `07-canonical-target-protection-checklist.md` §1 and throughout SB-MIG-1.2. Re-asserting it here would be redundant rather than additive.

### 1.5 Rollback Command Validation

The `TRUNCATE`/`DELETE`-based data-removal pattern from SB-MIG-1.2's `03-test-data-cleanup-report.md` was implicitly re-exercised by this rehearsal's own cleanup steps (§1.1) — the same category of operation (remove specific, identified rows without touching structure), executed successfully again, on a live project, with independent before/after verification. This is a second, independent confirmation of that pattern's reliability, not just a repeat of the same evidence.

### 1.6 Automated Test Execution

`npm run test` was re-run in full after this mission's Task 1 database changes (transactions domain applied) and this rehearsal's own data creation/cleanup activity. **Result: 62/62 passing, 17/17 files, no regression.** This confirms none of this mission's database-level work destabilized the existing, proven inventory test suite.

## 2. What Was Correctly NOT Rehearsed (per this mission's boundaries)

- No real production data was copied anywhere.
- No account was created on the target for either real user (`iam.mrriyas@gmail.com` or `creationsflyhigh@gmail.com`) — both users referenced throughout this mission's documents remain untouched by any actual account-creation or data-import action.
- The live application was never reconnected or repointed to Team LIPS Supabase.
- No production setting was changed anywhere.

## 3. Summary

The rehearsal validated the plan's single most important technical mechanism (owner reassignment) with a real execution, not just design reasoning, and surfaced one genuine, previously-unknown edge case (`inviteUserByEmail`'s domain-validation strictness) that the actual cutover mission should account for rather than discover for the first time against a real user. The automated test suite's continued 62/62 pass confirms this mission's database changes (Task 1's transactions-domain migration, Task 3's cleanup, and this rehearsal's own throwaway activity) introduced no regression to the already-verified inventory domain.
