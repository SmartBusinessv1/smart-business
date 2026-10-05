# SMART BUSINESS MISSION CONTROL

# SB-P-1.12 — FD-C4 Supabase Second-Owner Reconsideration

**Date:** 2026-10-05  
**Owner:** Mission Control  
**Canonical baseline:** `29e6c188888634077aa981ff472ebb54d5991044`  
**Decision:** FD-C4 — second named human Supabase Owner  
**Status:** DRAFT — EFFECTIVE ONLY AFTER FOUNDER HUMAN MERGE  
**Provider mutation authority:** WITHHELD

## 1. Purpose

Reconsider FD-C4 narrowly in light of new provider-specific recovery evidence from Supabase Support.

This record does not reopen the wider Track D investigation.

This record does not invite any user, create any Supabase identity, or mutate any provider state.

## 2. Previous FD-C4 position

Founder previously decided:

> defer the second named human Supabase Owner until active subscribers after Phase 1.

That decision remains valid unless explicitly changed by Founder.

Mission Control will not silently override it.

## 3. New provider evidence that changes the assumption

Supabase Support ticket:

`SU-494995`

now establishes:

- the current Team LIPS Supabase identity remains GitHub-sign-in based;
- Supabase password reset does not create an independent email/password first factor;
- Supabase did not confirm a supported in-place conversion away from GitHub-only authentication;
- control of the registered Team LIPS business email alone does not guarantee restoration or ownership transfer;
- the provider-supported pre-loss resilience control is a second named Organization Owner using their own independent Supabase email/password account;
- that Owner must be added separately to:
  - `Team LIPS`
  - `Smart Business Testing`
- adding that Owner does not require moving projects or changing runtime configuration;
- Owner invitations are available on Free and paid plans;
- if GitHub access is lost:
  - paid organizations without another Owner may receive provider review subject to verification;
  - the separate Free testing organization has no provider-assisted lost-GitHub recovery under the current policy;
- upgrading does not itself create another login method or guarantee recovery.

This means the assumptions underlying the earlier FD-C4 deferral have materially changed.

## 4. Current risk if FD-C4 remains deferred

If no second independent Organization Owner is established:

### Team LIPS production organization

- current administrative access remains materially dependent on the affected GitHub identity;
- provider-assisted recovery may be considered if GitHub recovery fails, but is not guaranteed.

### Smart Business Testing organization

- current administrative access remains materially dependent on the affected GitHub identity;
- if GitHub access is lost and no additional Owner exists, provider-assisted recovery is not supported under the current policy.

Therefore the Free testing organization has the clearest unrecovered single-point administrative dependency.

## 5. Founder decision fork

Founder must select one of the following.

### OPTION A — Bring FD-C4 forward now

Change FD-C4 timing.

Authorize a later, separately governed provider-mutation mission to add one legitimate second named human Organization Owner, using their own independent Supabase email/password account, separately to:

1. `Team LIPS`
2. `Smart Business Testing`

Conditions:

- no shared credentials;
- no shared MFA seed;
- no Founder-held duplicate/break-glass identity masquerading as another human;
- named human must be a legitimate Team LIPS recovery/admin participant;
- invitation must be performed under a separate explicit mutation authorization;
- no project transfer;
- no runtime configuration change;
- no Auth change;
- no API-key/service-role-key rotation;
- no billing change unless independently required;
- evidence must prove Owner status independently in both organizations.

Effect:

- Supabase's supported pre-loss resilience control can be implemented;
- after verification, Supabase may be removable from the Track D blocker list.

### OPTION B — Keep FD-C4 deferred

Preserve the original timing:

> second named human Owner remains deferred until active subscribers after Phase 1.

Founder explicitly accepts that, until then:

- Supabase administrative access remains materially dependent on the affected GitHub identity;
- paid production recovery without another Owner is provider-discretionary / not guaranteed;
- the Free `Smart Business Testing` organization has no provider-assisted lost-GitHub recovery under current policy if GitHub is lost before another Owner is established.

Effect:

- Supabase cannot be described as independently recoverable;
- Mission Control must decide whether this accepted residual risk is compatible with closing Track D and proceeding to Track C.

Option B is a legitimate risk-acceptance decision, not an implementation failure.

## 6. Mission Control recommendation

Mission Control recommends:

**OPTION A — BRING FD-C4 FORWARD NOW**

Reason:

- the control is provider-supported;
- it is available on Free and paid plans;
- it does not require project movement or runtime change;
- it directly protects both existing organizations;
- the Free testing organization otherwise has no provider-assisted fallback;
- the current account itself cannot be converted in place to an independent first factor.

This is a recommendation only.

Founder decision authority remains final.

## 7. No mutation in this record

This record authorizes no:

- Supabase invitation;
- membership change;
- account creation;
- MFA change;
- Auth change;
- key rotation;
- project transfer;
- billing mutation;
- runtime change.

A separate mutation authorization is required if Founder selects Option A.

## 8. Relationship to Track D

Current Track D state remains:

- Supabase: PARTIAL
- Lovable: PENDING
- Resend: PENDING
- Track D: OPEN

After Founder disposition:

### If Option A

Mission Control may prepare the narrow second-Owner implementation authorization while Lovable/Resend provider responses continue in parallel.

### If Option B

Mission Control must record explicit residual-risk acceptance and later decide whether Track D may close with Supabase remaining intentionally dependent.

## 9. Founder decision required

Founder must choose exactly one:

- **FD-C4 OPTION A — BRING SECOND OWNER FORWARD NOW**
- **FD-C4 OPTION B — KEEP SECOND OWNER DEFERRED AND ACCEPT RESIDUAL SUPABASE RECOVERY RISK**

**FD-C4 RECONSIDERATION PREPARED — NO PROVIDER MUTATION AUTHORIZED — STOP FOR FOUNDER HUMAN MERGE AND DECISION**
