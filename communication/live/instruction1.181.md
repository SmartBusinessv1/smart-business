# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — ONE-TIME TEST AUTH CREDENTIAL REPAIR AUTHORIZATION

**Instruction ID:** `instruction1.181`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Recipient:** Founder / Authorized Operator
**Date:** 2026-08-27
**Status:** ACTIVE AFTER HUMAN MERGE

---

## 1. Purpose

Authorize one narrowly scoped repair of the existing throwaway C5 test user's authentication credential in the `smart-business-test` Supabase project so the already-authorized C5 retry under `instruction1.180.md` can proceed.

This instruction exists because the existing C5 user is present and confirmed, but its prior credential is no longer usable and its `@example.com` address cannot receive password-recovery or magic-link email.

This is a test-auth continuity action only. It is not a product auth change, schema change, production change, or authorization to create a replacement test identity.

---

## 2. Preconditions

Before execution, verify all of the following remain true:

1. `communication/live/instruction1.180.md` is merged and active.
2. `communication/live/report1.175.md` is merged and records successful non-production workload-role trust reconciliation.
3. The target Supabase project is exactly `smart-business-test`.
4. The existing C5 throwaway user is the previously used `gc38r-c5-diagnostic+...@example.com` identity.
5. The user remains confirmed and enabled.
6. No C5 diagnostic run has yet been executed under `instruction1.180.md`.

If any precondition is false or ambiguous, stop and report before changing anything.

---

## 3. Authorized Change

Exactly one authentication credential repair is authorized for the existing C5 throwaway user in `smart-business-test`.

The authorized operator may set one new temporary password for that exact existing user using a bounded administrative path that does not require email delivery.

The password itself:

- must be generated/selected by the Founder or authorized operator;
- must not be committed to GitHub;
- must not be pasted into repository communication;
- must not be included in screenshots, logs, reports, or chat messages;
- must be used only to restore access to the existing throwaway C5 test identity.

The existing user identity must be reused. Do not create a new user unless separately authorized.

---

## 4. Scope Boundary

This authorization is limited to:

- Supabase project: `smart-business-test` only;
- one existing throwaway C5 user only;
- one password/credential repair only;
- no business-data mutation other than any unavoidable auth metadata update caused by the credential change.

The following are explicitly NOT authorized:

- any production Supabase project change;
- creating a new test user;
- deleting, banning, or disabling the existing C5 user;
- changing the user's email address;
- changing MFA factors;
- changing auth providers, SMTP, redirect URLs, email templates, rate limits, or other project-wide auth configuration;
- changing application code;
- changing database schema, RLS, business records, ownership, or permission data;
- changing Cloudflare, AWS, IAM, Roles Anywhere, certificate, CA, Lambda, S3, RuntimeBoundary, or OIDC configuration;
- generating or exposing service-role keys or other persistent credentials;
- running C5 more than once.

---

## 5. Execution Method

Use the narrowest available administrative mechanism for `smart-business-test` that can update the password of the exact existing user without email delivery.

Preferred order:

1. an existing authenticated Supabase administrative user-management function/API that updates only the target user's password; or
2. if the dashboard exposes an exact direct password-set action for that existing user, use that action.

Do not use raw database manipulation of `auth.users` if a supported Supabase administrative auth mechanism is available.

Do not expose or request the new password in repository communication.

---

## 6. Verification

After the credential repair:

1. confirm the same existing C5 user remains present;
2. confirm no replacement user was created;
3. confirm the user can sign in through the deployed non-production application flow;
4. stop before running the diagnostic unless the active C5 authorization remains valid;
5. record only sanitized evidence.

The credential value itself is not evidence and must never be recorded.

---

## 7. Relationship to C5 Authorization

This instruction does not itself authorize an additional C5 attempt.

After this credential repair succeeds, `instruction1.180.md` continues to authorize exactly one C5 retry, provided that retry has not already been consumed.

The operator must still:

- use the existing non-production Worker and `smart-business-test` environment;
- stop at the first blocker;
- capture sanitized evidence only;
- make no code, AWS, certificate, or infrastructure mutation under the C5 retry authority.

---

## 8. Completion Reporting

After the credential repair and successful sign-in verification, create a sanitized completion report stating only that:

- the exact existing C5 throwaway user was reused;
- one bounded test-only credential repair was performed;
- sign-in succeeded;
- no password value was recorded;
- no new user was created;
- no production, schema, business-data, AWS, Cloudflare, certificate, or broader auth configuration change occurred;
- the C5 retry remained unconsumed until the diagnostic action itself was executed.

Do not include the password or any secret value.

---

## 9. Stop Conditions

Stop immediately and report if:

- the target user cannot be uniquely identified;
- the supported admin path would require a broader auth/configuration change;
- the user appears disabled, corrupted, or materially different from the prior C5 identity;
- the only available path requires exposing a service-role key or another secret;
- sign-in still fails after the single credential repair;
- any production resource is implicated.

Do not attempt a second credential repair without new authorization.

---

## 10. Final Authority Boundary

This is a one-time, test-only authentication continuity authorization.

It grants no ongoing administrative authority and no permission to redesign the authentication system.

Human review and merge are required before execution.

No self-merge.
