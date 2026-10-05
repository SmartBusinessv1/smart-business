# SMART BUSINESS MISSION CONTROL

# SB-P-1.12 — Track D Provider-Response Closure Report

**Date:** 2026-10-05  
**Owner:** Infrastructure / Provider Operations  
**Canonical baseline:** `8a760d8b21e1f37c63731c95f846799f6c1cc9ec`  
**Track:** D — Administrative Recovery  
**Scope:** Supabase provider response only  
**Controlling authorization:** `communication/missions/SB-P-1.12/mission-control/64_track_d_provider_response_closure.md`  
**Durable baseline:** `communication/missions/SB-P-1.12/infrastructure/17_track_d_administrative_recovery_report.md`

## A. Executive summary

- **Supabase:** **PARTIAL**
- **Lovable:** **PENDING — provider response not yet received**
- **Resend:** **PENDING — provider response not yet received**
- **Track D recommendation:** **TRACK D PARTIAL — PROVIDER RESPONSE FOLLOW-UP STILL REQUIRED**

Supabase Support has now provided a substantive recovery answer under ticket **SU-494995**.

The response confirms that the existing Team LIPS Supabase identity remains GitHub-sign-in based. A Supabase password reset does not add an independent email/password first factor to that GitHub-only account, and Support did not confirm any supported in-place conversion procedure.

Supabase does, however, provide a supported resilience path while access still exists: an existing Organization Owner can invite a second named human Owner to each organization, and that person can use their own email/password Supabase dashboard identity. Supabase explicitly states that this does not require moving either project or changing runtime configuration, and Owner invitations are available on both Free and paid plans.

That route has **not been executed** because FD-C4 remains deferred and this mission does not authorize membership mutation. Therefore the present Team LIPS organizations remain dependent on the existing GitHub-linked Owner identity until Mission Control authorizes or otherwise disposes of that deferred second-Owner control.

Supabase also confirmed a provider-contact route that does not require dashboard authentication if GitHub access is lost. However, provider-assisted recovery has important limits:

- control of the registered email alone does **not** guarantee restoration or ownership transfer;
- for a paid organization with no other Owner, Support may review possible recovery options, subject to verification;
- for the separate Free testing organization, provider-assisted recovery is **not supported** under the current lost-GitHub-access policy;
- upgrading a subscription does not itself add another login method or guarantee recovery.

The Founder completed the automated Supabase identity-verification step requested for ticket handling. No verification token, credential, OTP, password, session material, or secret is recorded in this report.

## B. Provider-response matrix

| Provider | Case/reference | Response date | Provider answer | Supported recovery path | Remaining human action | State |
|---|---|---|---|---|---|---|
| Supabase | **SU-494995** | **2026-10-05** | Existing account remains GitHub-sign-in based; password reset does not create independent email/password login; no supported in-place conversion confirmed. | While access exists, invite a second named Organization Owner in each organization using that person's own email/password Supabase account. If GitHub access is lost, first recover through GitHub; if dashboard is inaccessible, contact Supabase Support directly. Paid-org recovery without another Owner may be reviewed subject to verification; Free testing-org provider-assisted recovery is not supported. | Identity-verification request already completed by Founder. No further human action is authorized in this mission. Second-Owner invitation remains deferred under FD-C4. | **PARTIAL** |
| Lovable | — | — | **PENDING — provider response not yet received** | — | Await provider response. | **PENDING** |
| Resend | — | — | **PENDING — provider response not yet received** | — | Await provider response. | **PENDING** |

## C. Supabase provider-response analysis

### C1. Existing independent first factor

**Answer: No.**

Supabase Support states that the supported sign-in method for the current account remains GitHub.

A Supabase password reset does not add an independent email/password login to a GitHub-only account.

### C2. In-place migration or conversion away from GitHub-only authentication

**Answer: Not established.**

Support states that it cannot confirm a supported in-place conversion procedure.

Therefore Track D must not treat the current identity as converted or independently recoverable through a newly added first factor.

### C3. Provider-assisted recovery if GitHub OAuth becomes unavailable

**Answer: Limited / conditional.**

Supabase gives the following sequence:

1. first seek recovery through GitHub;
2. if the Supabase dashboard cannot be accessed, contact Supabase Support directly using an account-recovery request; this contact route does not require dashboard authentication;
3. if GitHub recovery is impossible:
   - if an additional Owner already exists, that Owner can invite a replacement Supabase account;
   - for a paid organization with no other Owner, Support can review possible recovery options subject to verification;
   - for the separate Free testing organization, provider-assisted recovery is not supported under the current lost-GitHub-access policy.

This is a real provider-supported support path, but it does not remove the current GitHub dependency by itself and it is not equivalent across the paid production organization and Free testing organization.

### C4. Registered Team LIPS business email as recovery proof

**Answer: Insufficient by itself.**

Supabase explicitly states that control of the registered email alone does not guarantee restoration or ownership transfer.

The registered business email is useful for support contact and verification, but it is not a guaranteed independent recovery credential.

### C5. Organization/project continuity

**Answer: Preserved by the supported second-Owner design, if established before loss of access.**

Support states that adding another Organization Owner does not require:

- moving either project; or
- changing project runtime configuration.

The organizations have separate memberships, so backup Owner access must be established independently in:

- Team LIPS; and
- Smart Business Testing.

This means the existing organizations/projects can remain in place under the supported resilience design.

However, because no second Owner has been added, continuity is not yet independently protected in the current state.

### C6. Later second-human Owner procedure

**Supported procedure:**

An existing Owner may use:

**Organization Settings → Team**

to invite a second named person as an Organization Owner.

That person should use their own Supabase dashboard account with email/password so their access does not depend on GitHub.

This must be done separately for each organization because memberships are separate.

FD-C4 remains deferred. No invitation is authorized or performed in this mission.

### C7. Plan/tier prerequisite

- Organization Owner invitations are available on **Free as well as paid plans**.
- A subscription upgrade does **not** automatically add another login method.
- A subscription upgrade does **not** guarantee recovery.
- Paid organizations may receive provider review of possible recovery options if GitHub recovery is impossible and no other Owner exists, subject to verification.
- The separate Free testing organization does **not** receive provider-assisted lost-GitHub recovery under the current policy.

### C8. Human-only verification

Supabase's automated ticket response requested email-based identity verification for ticket **SU-494995**.

The Founder reports that this verification was completed.

**HUMAN-ONLY — DO NOT SHARE CREDENTIALS HERE**

No verification token or secret material is recorded in Git.

### C9. Limitation / residual GitHub dependency

Residual dependency remains material:

- current account sign-in remains GitHub-only;
- no independent first factor has been added;
- no supported in-place conversion was confirmed;
- registered-email control is not sufficient to guarantee restoration;
- Free testing-org provider-assisted recovery is unavailable if GitHub is lost and no second Owner exists;
- the strongest provider-supported mitigation is a pre-established second human Owner using an independent Supabase identity, but that control is not currently deployed because FD-C4 remains deferred.

## D. Supabase classification

**PARTIAL**

### Why

Supabase has established a credible provider-supported **resilience design** and a direct support contact route, but it has **not** established that the current GitHub-linked Owner identity itself has an independent first factor.

The strongest supported control is to add a second independent Owner to each organization before a GitHub loss event. That has not been performed, and the Free testing organization has no provider-assisted recovery fallback under the current policy if GitHub is lost and no second Owner exists.

Therefore GitHub OAuth remains a current administrative recovery dependency.

### Blocker

**Yes — Supabase remains a Track D blocker pending Mission Control disposition.**

Mission Control may decide whether the firmly established second-Owner design is sufficient despite FD-C4 deferral, but Infrastructure must not silently treat an unexecuted future mitigation as equivalent to present independent recoverability.

## E. New information only

This report adds only the Supabase provider-response delta:

- ticket **SU-494995** exists;
- Founder completed requested identity verification;
- current account remains GitHub-sign-in based;
- password reset cannot create independent email/password login;
- no supported in-place conversion procedure was confirmed;
- second independent Organization Owner is Supabase's recommended pre-loss resilience control;
- second Owner can be added on Free and paid plans without moving projects or changing runtime configuration;
- memberships are separate per organization;
- direct Support contact can be used without dashboard authentication;
- registered-email control alone does not guarantee restoration/transfer;
- paid-org provider-assisted recovery may be reviewed subject to verification;
- Free testing-org provider-assisted lost-GitHub recovery is not supported;
- upgrading does not create another login method or guarantee recovery.

All earlier Supabase project refs, organization names, linkage observations and login tests remain accepted from the durable baseline and were not repeated.

Lovable and Resend remain unchanged as pending.

## F. Mutation attestation

- Supabase membership changed: **No**
- Supabase Auth changed: **No**
- Supabase MFA changed: **No**
- Supabase keys rotated: **No**
- Supabase projects transferred: **No**
- New Supabase identity created: **No**
- Supabase billing changed: **No**
- Lovable mutation occurred: **No**
- Resend mutation occurred: **No**
- OAuth authorization changed: **No**
- Credentials shared with AI: **No**
- Product/runtime mutation occurred: **No**
- Human ticket-identity verification completed: **Yes — Founder-only support verification; no credential/verification token stored in Git**

## G. Recommendation

**TRACK D PARTIAL — PROVIDER RESPONSE FOLLOW-UP STILL REQUIRED**

Supabase remains **PARTIAL** and a current blocker pending Mission Control disposition. Lovable and Resend remain:

**PENDING — provider response not yet received**

**TRACK D PROVIDER-RESPONSE CLOSURE REPORT SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
