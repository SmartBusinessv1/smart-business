# SMART BUSINESS MISSION CONTROL

# SB-P-1.12 — FD-C4 Founder Decision: Bring Second Supabase Owner Forward

**Date:** 2026-10-05  
**Founder:** Riyas PK  
**Owner:** Mission Control  
**Canonical baseline:** `1a5216ac605eacc783b61c12f9f8f401e1e578c8`  
**Decision:** FD-C4  
**Status:** DRAFT — EFFECTIVE ONLY AFTER FOUNDER HUMAN MERGE  
**Provider mutation authority:** WITHHELD

## 1. Founder decision

Founder selects:

# FD-C4 OPTION A — BRING SECOND OWNER FORWARD NOW

The previous timing decision to defer a second named human Supabase Owner until active subscribers after Phase 1 is superseded.

The new Founder decision is to establish Supabase's provider-supported independent administrative recovery control now.

## 2. Reason for decision change

This decision is based on the provider evidence recorded under Supabase Support ticket:

`SU-494995`

Supabase confirmed:

- the current Team LIPS Supabase account remains GitHub-sign-in based;
- password reset does not add an independent email/password first factor;
- no supported in-place conversion away from GitHub-only authentication was confirmed;
- control of the registered Team LIPS business email alone does not guarantee restoration or ownership transfer;
- the supported pre-loss resilience control is a second named Organization Owner using their own independent Supabase account;
- this must be established separately in:
  - `Team LIPS`
  - `Smart Business Testing`
- Owner invitations are available on Free and paid plans;
- adding the second Owner does not require moving projects or changing runtime configuration;
- if the Free testing organization loses GitHub-linked access before another Owner exists, provider-assisted recovery is not supported under current policy.

## 3. Intended target state

The intended administrative recovery state is:

### Team LIPS organization

At least two legitimate named human Organization Owners:

1. Founder / existing Owner
2. second legitimate Team LIPS human Owner with their own independently recoverable Supabase email/password account

### Smart Business Testing organization

At least two legitimate named human Organization Owners:

1. Founder / existing Owner
2. same second legitimate Team LIPS human Owner with their own independently recoverable Supabase email/password account

The second Owner must not depend on the affected GitHub identity for Supabase login.

## 4. Human-selection constraint

This decision does not authorize creation of a nominal, fake, duplicate, Founder-controlled or break-glass identity presented as another human.

The second Owner must be:

- a real named human;
- legitimately trusted for Team LIPS administrative recovery;
- individually accountable;
- able to maintain their own independent Supabase account;
- able to maintain their own MFA/recovery method;
- not sharing passwords, OTPs, recovery codes, PATs, MFA seeds or session credentials with the Founder or AI systems.

## 5. Scope of later implementation authorization

A later, separate mutation authorization may permit only:

- inviting the selected named human to `Team LIPS` as Organization Owner;
- inviting the same named human to `Smart Business Testing` as Organization Owner;
- verifying successful acceptance and effective Owner role in both organizations.

The implementation must not require:

- project transfer;
- runtime change;
- database mutation;
- Auth configuration change;
- API/service-role key rotation;
- billing change;
- organization rename;
- project rename;
- production/test project re-linking;
- any product implementation.

## 6. Evidence required after implementation

The later execution report must prove, without exposing secrets:

- second human identity selected and authorized;
- independent Supabase account exists;
- account does not rely on GitHub as the sole sign-in method;
- Owner invitation accepted in `Team LIPS`;
- Owner invitation accepted in `Smart Business Testing`;
- effective Owner role visible in both organizations;
- no project/runtime/Auth/key/billing mutation occurred;
- no credential or MFA secret was shared with AI.

## 7. Track D effect

This Founder decision removes the policy deferral that prevented deployment of Supabase's recommended recovery control.

Supabase remains **PARTIAL** until the second Owner is actually added and independently verified in both organizations.

Lovable remains **PENDING**.

Resend remains **PENDING**.

Track D remains **OPEN**.

After successful second-Owner verification, Mission Control may remove Supabase from the Track D blocker list, subject to final evidence review.

## 8. Authority boundary

This decision record authorizes no Supabase mutation.

It does not authorize:

- sending invitations;
- changing membership;
- creating another person's account;
- changing MFA;
- changing Auth;
- rotating keys;
- transferring projects;
- changing billing;
- changing runtime configuration.

A separate explicit mutation authorization is required after this decision is human-merged.

## 9. Decision

**FD-C4: OPTION A SELECTED**

**SECOND NAMED HUMAN SUPABASE OWNER: BRING FORWARD NOW**

**SUPABASE MUTATION: NOT YET AUTHORIZED**

**FD-C4 OPTION A RECORDED — STOP FOR FOUNDER HUMAN MERGE**
