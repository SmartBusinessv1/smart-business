# SMART BUSINESS MISSION CONTROL

# SB-P-1.12 — Track D Administrative Recovery Closure

**Date:** 2026-10-04  
**Owner:** Mission Control  
**Canonical baseline:** `920e9618b2e888232a6ac8aa128a6c750e03c3ae`  
**Track:** D — Administrative Recovery  
**Status:** DRAFT — EFFECTIVE ONLY AFTER FOUNDER HUMAN MERGE  
**Mode:** EVIDENCE / SUPPORTED-RECOVERY-PATH VALIDATION  
**Provider mutation authority:** WITHHELD except outward-facing support enquiry already Founder-approved  
**Product implementation authority:** WITHHELD

## 1. Mission

Close the minimum administrative-recovery gap required before Track C assurance work and later reconsideration of core SB-P-1.12 implementation authority.

The objective is to establish that the affected / flagged GitHub identity is no longer an unexamined single administrative failure domain across the services required to operate Smart Business.

This mission covers:

1. Supabase administrative recovery / independent-login support path;
2. Lovable access and recovery dependency;
3. FD-C7 mailbox + domain/DNS recovery independence;
4. approved organizational secrets-recovery mechanism readiness;
5. a final Track D closure assessment for Mission Control.

This mission does **not** authorize product implementation, migrations, runtime changes, Auth changes, Supabase membership changes, Lovable project mutations, DNS changes, mailbox changes, secret migration/rotation, or second-Owner invitation.

## 2. Founder decisions already controlling

Carry forward without reopening:

### FD-C4 — second Supabase human Owner

Deferred until active subscribers after Phase 1.

Do **not** convert FD-C4 into a Track D closure blocker.

Do not invite or mutate any Supabase membership in this mission.

### FD-C5 — Supabase Support

Founder approved immediate outward-facing Supabase Support contact.

Purpose:

- existing Supabase dashboard/account is linked to the affected GitHub identity;
- determine supported recovery/access path;
- determine whether the existing GitHub-linked account can gain or migrate to an independent first-factor login;
- determine the supported process for adding a second named human Owner later, when FD-C4 becomes active.

Evidence only. Do not perform membership/Auth/MFA/key mutation.

### FD-C6 — recovery mechanism

Founder selected **1Password Teams Starter Pack** as the organizational secrets-recovery mechanism.

Selection is accepted.

This mission may validate setup/readiness requirements and recovery design, but must not migrate, rotate, expose, paste, or store provider secrets in Git.

Second recovery human remains deferred consistently with FD-C4 unless separately authorized.

### FD-C7 — mailbox/domain recovery

Perform the previously approved narrow evidence check for independent recovery of:

- Team LIPS business email;
- domain registrar / DNS administration.

No mutation.

## 3. Founder effort-preservation rule

Do not make the Founder rediscover accepted provider facts from scratch.

Use existing merged evidence as baseline.

Ask the Founder only for fresh human observations that are truly required for Track D and cannot be determined from existing records.

Any repeated check must state the specific freshness dependency.

The Founder must not become the integration layer between rooms.

Infrastructure / Provider Operations must return one consolidated final report to Mission Control.

## 4. Workstream D-1 — Supabase administrative recovery

### Objective

Determine the provider-supported path that would allow Smart Business / Team LIPS to recover Supabase administrative access without depending exclusively on the affected GitHub sign-in path.

### Required actions

1. Confirm current account linkage state from existing evidence and only the minimum fresh observation needed.
2. Use the Founder-approved Supabase Support route.
3. Submit or continue a support enquiry that asks only for supported administrative recovery guidance.
4. Record:
   - ticket/case/reference number, if issued;
   - date/time;
   - provider response status;
   - whether independent first-factor login can be added/migrated to the existing account;
   - supported recovery path if GitHub OAuth is unavailable;
   - supported later procedure for adding a second human Owner;
   - any plan/tier prerequisite;
   - any provider limitation or unresolved dependency.

### Secret boundary

Do not place in Git:

- passwords;
- OTP/TOTP;
- recovery codes;
- access tokens;
- API keys;
- service-role keys;
- session cookies;
- private identifiers not needed for governance.

If Support requires human authentication, Founder completes it HUMAN-ONLY.

### Result states

D-1 may be:

- PASS — provider-supported independent recovery path established;
- PARTIAL — support case open / path not yet confirmed;
- STOP — provider confirms no acceptable recovery path or access cannot be safely restored;
- NOT VERIFIABLE.

## 5. Workstream D-2 — Lovable administrative recovery

### Objective

Determine whether current Smart Business Lovable access is coupled to the affected GitHub identity and establish the supported recovery/independence path.

### Required evidence

Record:

- current sign-in method(s) visible to Founder;
- whether Lovable project access depends on GitHub OAuth/sign-in;
- whether another supported sign-in/recovery path exists for the same account/workspace/project;
- whether workspace/project ownership can survive loss of the current GitHub identity;
- whether a provider support path exists for account/project recovery;
- whether any GitHub repository connection is required for account login versus only project integration;
- any unresolved provider limitation.

Do not disconnect GitHub.

Do not reconnect, relink, transfer, invite, change ownership, or mutate the Lovable project.

If provider documentation/support is needed, use current official provider guidance and record the authoritative result.

### Result states

D-2 may be:

- PASS — independent/supported recovery path established;
- PARTIAL — provider support/documentation route exists but recovery path not yet fully confirmed;
- STOP — project/admin access is confirmed irrecoverably dependent on the affected GitHub identity;
- NOT VERIFIABLE.

## 6. Workstream D-3 — FD-C7 mailbox + domain/DNS recovery evidence

### Objective

Confirm Team LIPS has an independent administrative recovery path for the business email and domain/DNS control plane.

### Mailbox evidence

Verify, without exposing secrets:

- provider identity;
- administrative owner / recovery owner;
- recovery email / recovery method exists independently of the affected GitHub account;
- MFA/recovery mechanism exists;
- loss of the current Founder device does not create an unrecoverable single point of failure, or explicitly record the remaining gap.

### Domain/DNS evidence

Verify, without mutation:

- registrar / DNS provider identity;
- administrative access ownership;
- recovery method independent of GitHub;
- recovery mailbox not circularly dependent on the same domain in a way that makes recovery impossible;
- MFA/recovery availability;
- billing/renewal ownership sufficiently recoverable to avoid silent domain loss.

Do not change:

- DNS records;
- nameservers;
- registrar lock;
- transfer lock;
- account email;
- MFA;
- billing data;
- domain contact details.

### Result states

D-3 may be:

- PASS;
- PARTIAL;
- STOP;
- NOT VERIFIABLE.

## 7. Workstream D-4 — 1Password organizational recovery readiness

### Objective

Validate that the selected recovery mechanism can support Smart Business provider recovery without placing secrets in Git and without depending solely on the affected GitHub identity.

### Required evidence

Record, without secrets:

- selected product: 1Password Teams Starter Pack;
- whether account/workspace has been created or remains selection-only;
- intended admin/recovery ownership;
- sign-in/recovery independence from GitHub;
- Founder recovery material custody model;
- whether secrets can be stored with individual accountability;
- whether recovery/rotation can occur without Git;
- what remains before activation;
- whether second recovery human is deferred consistently with FD-C4.

### Authority limit

This mission does **not** authorize:

- bulk secret migration;
- password rotation;
- API-key rotation;
- changing provider credentials;
- storing secret values in Git;
- granting another human access.

### Result states

D-4 may be:

- PASS — organizational recovery mechanism operational enough to support Track D;
- PARTIAL — design/provider selected but activation/readiness incomplete;
- STOP — mechanism cannot meet independence/recovery requirements;
- NOT VERIFIABLE.

## 8. Track D closure test

Infrastructure must produce a single closure assessment.

Track D can be recommended **CLOSED FOR PRODUCT-RESUMPTION PURPOSES** only if Mission Control can reasonably conclude:

1. Supabase has a credible provider-supported administrative recovery path independent of exclusive GitHub OAuth reliance, or a provider-supported route is actively established with no known dead end;
2. Lovable has a credible supported account/project recovery route not irrecoverably tied to the affected GitHub identity;
3. business email and domain/DNS control have independent recovery paths sufficient to avoid correlated lockout;
4. the approved secrets-recovery mechanism is at least sufficiently established to avoid Git as the secret-recovery store and avoid exclusive dependence on the affected GitHub identity;
5. no material unresolved administrative single point of failure remains that would make core product work operationally irresponsible.

If one or more items are PARTIAL, explain whether the partial state is acceptable for Track D closure or remains a blocker.

Do not declare Track D closed yourself. Return a recommendation to Mission Control.

## 9. Required final report

Create:

`communication/missions/SB-P-1.12/infrastructure/17_track_d_administrative_recovery_report.md`

Include:

### A. Executive summary

- Track D overall recommendation;
- material blockers;
- material partials;
- whether Founder action remains.

### B. D-1 through D-4 matrix

For each:

- state;
- evidence;
- provider dependency;
- next action;
- blocker yes/no.

### C. Supabase Support record

- case/ticket/reference;
- request date;
- response date/status;
- supported recovery answer;
- independent-login answer;
- later second-Owner procedure;
- unresolved questions.

### D. Lovable recovery record

- login dependency;
- project/workspace dependency;
- supported recovery route;
- support/documentation evidence;
- unresolved questions.

### E. FD-C7 record

- mailbox recovery finding;
- domain/DNS recovery finding;
- circular-dependency finding;
- remaining gaps.

### F. 1Password readiness record

- activation/readiness state;
- independence finding;
- recovery model;
- deferred second-human status;
- remaining actions.

### G. Correlated-failure assessment

State whether the affected GitHub identity still creates a material single administrative failure domain across:

- GitHub;
- Supabase;
- Lovable;
- business email;
- domain/DNS;
- secrets recovery.

### H. Mutation attestation

State explicitly whether any:

- Supabase membership changed;
- Supabase Auth/MFA/key changed;
- Lovable project/workspace changed;
- mailbox changed;
- DNS/domain changed;
- secret migrated/rotated;
- provider credential shared with AI;
- provider mutation occurred.

Expected: all No, except the allowed creation/continuation of a Supabase Support enquiry.

### I. Mission Control recommendation

Choose one:

- **TRACK D READY TO CLOSE — PROCEED TO TRACK C**
- **TRACK D PARTIAL — SPECIFIC FOLLOW-UP REQUIRED BEFORE TRACK C**
- **TRACK D BLOCKED — ADMINISTRATIVE RECOVERY RISK REMAINS**

End exactly:

**TRACK D ADMINISTRATIVE RECOVERY REPORT SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**

## 10. Authority boundary after this mission

This mission does not authorize Track C execution.

It does not authorize branch pruning or housekeeping mutations.

It does not authorize product implementation or migration.

The agreed critical path remains:

**Track D → Track C → reconsider implementation/migration authority → core SB-P-1.12 product work**

Parallel housekeeping and Track A remain non-blocking parallel workstreams.

**TRACK D ADMINISTRATIVE RECOVERY CLOSURE AUTHORIZATION PREPARED — STOP FOR FOUNDER HUMAN MERGE**
