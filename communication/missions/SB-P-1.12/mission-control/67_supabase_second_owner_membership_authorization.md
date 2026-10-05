# SMART BUSINESS MISSION CONTROL

# SB-P-1.12 — Supabase Second-Owner Membership Authorization

**Date:** 2026-10-05  
**Owner:** Mission Control  
**Canonical baseline:** `22be04e8188af20afd3392045530d6ed451a3c00`  
**Founder decision:** FD-C4 Option A — bring second Owner forward now  
**Status:** DRAFT — EFFECTIVE ONLY AFTER FOUNDER HUMAN MERGE  
**Mutation scope:** NARROW SUPABASE ORGANIZATION MEMBERSHIP ONLY  
**Product/runtime mutation:** PROHIBITED

## 1. Purpose

Implement the Founder-approved Supabase resilience control by adding one legitimate second named human Organization Owner, using their own independently recoverable Supabase account, to both:

1. `Team LIPS`
2. `Smart Business Testing`

This is the provider-supported pre-loss recovery control confirmed under Supabase Support ticket `SU-494995`.

## 2. Preconditions

Before sending invitations, verify:

- the selected person is a real named human;
- the person is legitimately trusted for Team LIPS administrative recovery;
- the person has or will create their own Supabase account;
- that account uses an independent email/password sign-in path and does not rely on the affected Founder GitHub identity as its sole sign-in method;
- the person controls their own MFA/recovery method;
- no passwords, OTPs, recovery codes, MFA seeds, tokens, session cookies, or other credentials will be shared with Founder or AI.

If these conditions are not true, STOP.

## 3. Authorized mutation

The only authorized provider mutations are:

### Team LIPS

Invite the selected human as:

**Organization Owner**

to:

`Team LIPS`

### Smart Business Testing

Invite the same selected human as:

**Organization Owner**

to:

`Smart Business Testing`

The organizations have separate memberships, so both invitations must be completed independently.

## 4. Explicitly prohibited

Do not:

- transfer projects;
- move projects between organizations;
- rename organizations;
- rename projects;
- change project runtime configuration;
- change database configuration;
- change Auth settings;
- change MFA policy;
- rotate anon/service-role/API keys;
- rotate passwords;
- change billing;
- change plan;
- create a Founder-controlled duplicate identity;
- create a shared account;
- share credentials;
- add any additional member beyond the one authorized second Owner;
- change the Founder’s existing role.

## 5. Human-only boundary

Founder may send the invitations.

The selected second human must:

- independently create/sign in to their own account;
- independently accept the invitations;
- independently complete any MFA/recovery setup required.

All credential entry is:

**HUMAN-ONLY — DO NOT SHARE CREDENTIALS HERE**

AI systems must not receive or store:

- passwords;
- OTP/TOTP;
- recovery codes;
- MFA seeds;
- tokens;
- session cookies;
- Supabase credentials.

## 6. Required verification after acceptance

After both invitations are accepted, verify read-only:

### Team LIPS

- Founder remains Owner;
- second named human appears as Owner;
- second human access is independently authenticated.

### Smart Business Testing

- Founder remains Owner;
- second named human appears as Owner;
- second human access is independently authenticated.

Also verify:

- production project remains in `Team LIPS`;
- testing project remains in `Smart Business Testing`;
- no project transfer occurred;
- no runtime/Auth/key/billing mutation occurred.

## 7. Evidence requirements

Create a governed execution report containing:

- selected human name;
- non-secret account identifier/email only if appropriate for governance;
- invitation date/time for each organization;
- acceptance status for each organization;
- effective role in each organization;
- independent-login confirmation;
- MFA/recovery confirmation at state level only, no secret values;
- mutation attestation;
- any provider warning/error;
- whether Supabase can now be removed from the Track D blocker list.

Do not include secret material.

## 8. Stop conditions

STOP if:

- the selected person is not clearly legitimate/trusted;
- their Supabase identity depends on the affected Founder GitHub account;
- either organization invitation cannot be completed cleanly;
- role is lower than Owner;
- a project transfer or other unrelated mutation appears necessary;
- any credential would need to be shared with AI;
- Supabase UI/provider behavior differs materially from the provider-supported procedure.

Do not bypass.

## 9. Track D effect

If the second human Owner is independently verified in both organizations, Mission Control may classify Supabase as:

**PASS — independent administrative recovery control deployed**

subject to final evidence review.

Lovable and Resend remain separately pending until their provider responses are resolved.

Track D remains open until all required provider blockers are cleared.

## 10. Required execution report

Create:

`communication/missions/SB-P-1.12/infrastructure/21_supabase_second_owner_execution_report.md`

End exactly:

**SUPABASE SECOND OWNER EXECUTION SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**

## 11. Authority boundary

This authorization covers only the two Owner invitations and evidence verification.

It does not authorize:

- product implementation;
- migrations;
- runtime changes;
- branch housekeeping;
- Track C execution;
- any other provider mutation.

**SUPABASE SECOND OWNER AUTHORIZATION PREPARED — STOP FOR FOUNDER HUMAN MERGE**
