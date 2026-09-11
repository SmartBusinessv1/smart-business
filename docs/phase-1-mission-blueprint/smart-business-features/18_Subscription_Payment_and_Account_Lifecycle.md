# Subscription, Payment & Account Lifecycle

## Feature Identity

**Product Type:** Core commercial/platform capability  
**Build Commitment:** **BUILD NOW**

## Current Commercial Baseline

Current Source 01 baseline:

- Smart Business Ledger Core — ₹799/month;
- Smart Business Manager Core — ₹1,799/month;
- Compliance Shield Add-on — ₹99/month.

Other add-on prices must not be inferred from historical values unless current Founder/Product Truth separately confirms them.

## Purpose

Manage subscription entitlement, payment recovery, downgrade/cancellation/reactivation and data lifecycle respectfully without making merchant dependency exploitative or confusing commercial state with data ownership.

## Core Principles

- Pricing should reflect value and sustainability.
- Architecture must not permanently hardcode historical price values.
- Payment failure is not moral failure.
- Commercial entitlement change is not automatic data deletion.
- Downgrade is not deletion.
- Temporary payment failure is not cancellation.
- Cancellation is not final deletion.
- Destructive deletion requires the current approved notice/grace/export/control process.

## Lifecycle Model

The implementation should maintain explicit states sufficient to distinguish at minimum:

- not yet activated / onboarding;
- active;
- payment recovery / past-due equivalent;
- paused/limited where applicable;
- cancelled;
- retained/archive/grace period where applicable;
- final deletion when current policy and authorization permit.

Exact state names are engineering/product design details, but their semantic separation is required.

## Payment Failure Experience

When payment fails:

- communicate clearly and respectfully;
- explain the recovery action;
- preserve existing data during the approved recovery period;
- avoid threatening or fear-heavy wording;
- keep any permitted read/export/recovery access according to current policy;
- do not silently delete data or rewrite subscription history.

## Downgrade

When moving from Manager to Ledger or disabling an add-on:

- preserve historical business records;
- disable only capabilities no longer entitled;
- avoid destructive schema mutation;
- keep the merchant's Business Memory intact;
- explain which capabilities changed.

## Reactivation

If retained data remains under policy, reactivation should restore the appropriate entitlement and reuse existing merchant identity/history rather than creating a duplicate business.

## Data Export and Ownership

Merchant data belongs to the merchant. Lifecycle design must provide the export/continuity opportunities required by current policy before destructive deletion.

## Architecture Boundary

Do not dynamically CREATE/DROP core tables when a subscription changes. Use stable shared schema plus authorization/entitlement controls where architecturally appropriate.

## Unresolved Founder Decisions

The following remain intentionally unresolved and must not be guessed:

1. current free-trial policy — historical 14-day full-access trial conflicts with later no-trial/no-freemium history;
2. exact current prices for Voice Plus, Staff/HR, Smart Stock and Smart Order & Delivery;
3. exact long-term retention/deletion duration after cancellation/non-payment.

These questions do not block safe implementation of lifecycle state separation, payment recovery, downgrade preservation and controlled deletion architecture.

## Error / Exception Behaviour

Handle:

- failed payment-webhook delivery;
- duplicate billing events;
- entitlement mismatch;
- payment succeeded but workspace not activated;
- downgrade with active feature records;
- reactivation before/after archive transition;
- cancellation reversal;
- export request during grace period;
- deletion job failure;
- inconsistent provider/internal status.

Reconcile provider state to internal authoritative state before making destructive changes.

## Explicit Non-goals

- exploiting dependency to raise prices;
- immediate destructive purge after payment failure;
- subscription events altering database schema destructively;
- treating a historical Tier 3 schema reservation as a current marketed plan;
- guessing unresolved trial/add-on-price/retention decisions.

## Historical Corrections

Historical fixed setup fees, old add-on prices, 14-day trial, no-trial model and 180-day purge are preserved as competing history. Only current canonical baselines are promoted here.

## Provenance

Reconciled from Founder-origin Section 6 and Section 7, Source 01 Pricing/Trust principles, Source 11 subscription/product truth and planning/project lessons separating provider state, entitlement and data continuity.
