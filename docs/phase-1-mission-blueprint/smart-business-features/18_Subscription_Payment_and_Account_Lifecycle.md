# Smart Business Feature Definition — Subscription, Payment & Account Lifecycle

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **BUILD NOW**  
**Commercial availability:** Platform/core commercial capability  
**Authority boundary:** Commercial state controls entitlements and lifecycle behavior; it must not destroy business data/schema merely because a subscription changes.

---

## 1. Feature Identity

This feature manages how a Smart Business account/business moves through commercial states such as activation, payment success/failure, downgrade, pause, cancellation, reactivation and eventual deletion according to current policy.

It must protect merchant continuity, export rights, privacy and data integrity while enforcing legitimate commercial entitlements.

---

## 2. Founder Problem Statement

A subscription product needs predictable answers to questions such as:

- what is active after payment?;
- what happens if payment fails?;
- can the merchant still access/export their data?;
- what happens after cancellation?;
- can an account be reactivated?;
- when is data finally deleted?;
- how do add-ons/tier entitlements change without destroying business history?

Historical Smart Business discussions contained conflicting trial and retention models. Current implementation must preserve the settled principles while keeping unresolved commercial decisions explicit.

---

## 3. Lighthouse Principles

- We earn by providing value, not by trapping merchants.
- Commercial enforcement must be clear, predictable and dignified.
- Merchant business data remains merchant data.
- Entitlement changes must not cause destructive schema churn.
- Payment failure should not fabricate business events.
- Give clear notice/recovery/export opportunity where required.
- Narrow commercial restriction should not corrupt unrelated stored truth.

---

## 4. Current Baseline Commercial Truth

Current approved baseline prices preserved by Source 01 / reconciliation include:

- Ledger Core — ₹799/month;
- Manager Core — ₹1,799/month;
- Compliance Shield — ₹99/month.

Exact current prices for Voice Plus, Staff/HR, Smart Stock Assistant and Smart Order & Delivery remain unresolved Founder decisions and must not be guessed from historical values.

---

## 5. Entitlement Model

Subscription/tier/add-on state should control capability access through durable entitlement/permission logic.

A merchant changing tier/add-on must not require destructive `CREATE/DROP` of core business tables or deletion of historical records.

Core law:

> **Entitlements control capability. They do not rewrite product truth or destroy merchant history.**

---

## 6. Lifecycle States

Implementation may use suitable internal states, but the product must distinguish materially different conditions such as:

- onboarding/awaiting activation;
- active/paid;
- payment pending/failure;
- grace/retry state where current policy permits;
- paused/restricted;
- cancelled;
- retained/archive state;
- reactivated;
- scheduled/final deletion;
- administrative/security restriction where separately authorized.

Historical exact enums are implementation provenance, not immutable Product Truth.

---

## 7. Activation

After successful commercial activation, Smart Business should:

- establish correct plan/add-on entitlements;
- preserve one business identity;
- make approved features available;
- avoid duplicate provisioning on retries;
- record subscription/payment provenance;
- provide clear confirmation.

Payment success alone should not duplicate business/account records.

---

## 8. Payment Failure

Payment failure should be treated as a commercial lifecycle event, not a reason to corrupt merchant data.

The product should:

- record failure/retry state;
- explain what happened and how to recover;
- preserve business data;
- apply only current approved entitlement/restriction behavior;
- avoid repeated duplicate charges/actions;
- preserve access required by current export/grace policy.

Exact retry cadence is implementation/commercial policy unless explicitly locked.

---

## 9. Downgrade / Add-on Removal

When an entitlement is removed:

- stop access to the unavailable capability according to policy;
- preserve historical records created while it was active unless current retention policy requires otherwise;
- do not drop domain tables dynamically;
- preserve references needed for financial/audit integrity;
- explain what becomes unavailable;
- allow later reactivation to restore capability without fabricating history.

---

## 10. Cancellation

Cancellation should clearly distinguish:

- cancellation request/effective date;
- current paid period if relevant;
- capability access state;
- data retention/export period;
- deletion schedule/policy;
- reactivation path where supported.

The product must not imply immediate deletion unless that is the actual current policy and the merchant has received required notice/choice.

---

## 11. Export and Merchant Data Rights

Before final deletion where current policy requires, merchants should have a clear opportunity to export/retrieve permitted business data.

Exports should be:

- permission-scoped;
- complete enough to preserve merchant value;
- consistent with Business Memory/source totals;
- available through approved secure mechanisms.

Commercial lockout must not become a deceptive data-hostage mechanism.

---

## 12. Retention and Final Deletion

Current principles require:

- clear notice;
- grace/retention handling;
- export opportunity where applicable;
- privacy-respecting deletion;
- controlled irreversible deletion process;
- audit/proof of deletion according to governance needs.

**Exact long-term retention/deletion duration after cancellation/non-payment remains unresolved.**

Historical 60-day/180-day rules must not be silently reinstated as current policy.

---

## 13. Reactivation

Where reactivation is supported:

- restore appropriate entitlements;
- reconnect preserved business data safely;
- do not duplicate business/account identity;
- retain historical continuity/audit;
- explain anything that could not be restored because it was legitimately deleted under policy.

---

## 14. Trial Policy — Explicitly Unresolved

Historical evidence conflicts between:

- a 14-day full-access promotional trial;
- later no-free-trial/no-freemium direction.

Current Source 01/11 does not settle this conflict.

Therefore:

- no implementation should assume a trial exists;
- no implementation should hardcode no-trial as permanent Product Truth;
- trial policy requires a narrow Founder decision before launch behavior is finalized.

---

## 15. Billing / Payment Provider Independence

Historical discussions referenced Stripe/Razorpay and other payment methods/providers.

Provider choice may evolve.

The product contract requires:

- secure payment initiation/confirmation;
- idempotent webhook/event handling;
- subscription/payment state reconciliation;
- clear merchant receipts/status;
- no duplicate entitlement changes;
- provider failure containment.

---

## 16. Users and Permissions

### Owner

Can view/manage the business subscription/payment state according to current policy.

### Manager / Employee

Do not receive commercial/billing control by default unless explicitly delegated for a legitimate role.

### Super Admin / Platform

May perform approved platform commercial operations within least-privilege governance and auditability. Platform authority is not merchant business-decision authority.

---

## 17. Notifications

Commercial notifications should clearly communicate:

- payment success/failure;
- retry/grace implications where applicable;
- upcoming renewal where current billing model uses it;
- cancellation/effective date;
- entitlement change;
- data/export/deletion implications when relevant.

Avoid manipulative urgency or fear-based retention tactics.

---

## 18. Error and Exception Behavior

Handle:

- duplicate payment/webhook;
- provider outage;
- payment succeeded but callback delayed;
- entitlement update failure;
- cancellation race with renewal;
- downgrade with existing feature records;
- reactivation after restricted state;
- partial commercial-state inconsistency;
- deletion job failure;
- disputed/ambiguous payment state.

Financial/commercial ambiguity must not silently grant/revoke capability without reconciliation.

---

## 19. Security and Privacy

- Payment/billing data is sensitive.
- Business isolation remains mandatory.
- Entitlement checks are server-side.
- Privileged lifecycle/admin actions require audit.
- Deletion must be deliberate and controlled.
- Subscription state must not expose another merchant's billing information.

---

## 20. Shared Foundations to Reuse

Reuse:

- business/user identity;
- Permission/Entitlement Engine;
- Notification foundation;
- audit/idempotency;
- Super Admin platform controls;
- export/document services;
- payment-provider integration layer.

---

## 21. Explicit Non-goals

- dynamic create/drop of core domain schema based on subscription state;
- using old historical add-on prices as current truth;
- silently deleting merchant history on downgrade;
- treating trial policy as settled when it is not;
- fixed 60/180-day retention rules by historical inheritance;
- data-hostage retention tactics.

---

## 22. Acceptance Scenarios

A future Blueprint/EIS must verify at least:

1. Successful payment activates correct entitlement exactly once.
2. Duplicate webhook/event is idempotent.
3. Payment failure preserves data and applies only approved lifecycle restrictions.
4. Downgrade removes capability access without dropping historical tables/data.
5. Add-on removal preserves relevant history.
6. Cancellation clearly exposes state/export/retention implications.
7. Reactivation restores preserved account continuity without duplicate business.
8. Final deletion follows approved current policy and audit.
9. Non-Owner cannot control billing by default.
10. Provider outage does not corrupt subscription state.
11. Trial behavior remains gated until Founder decision.

---

## 23. Historical Corrections / Superseded Behavior

Historical-only/conflicting:

- 14-day trial vs no-free-trial;
- exact retry cadences;
- exact add-on prices not reaffirmed;
- 60-day archive / 180-day purge rules;
- provider-specific billing architecture.

Superseded:

- subscription-driven destructive schema creation/deletion;
- silent immediate destructive account purge as default behavior.

---

## 24. Provenance and Hydration Coverage

Reconciled from Founder-origin Section 6 and Section 7; planning/project-room subscription/payment history; Final Feature Reconciliation Register §25, §33 and §§28–30; Source 01/11 commercial truth and privacy principles.

**Hydration result:** all settled current lifecycle behaviors are represented here; genuine unresolved Founder commercial decisions are explicitly preserved rather than guessed.

---

## 25. Unresolved Founder Questions

1. Current free-trial policy.
2. Exact current prices for Voice Plus, Staff/HR, Smart Stock Assistant and Smart Order & Delivery.
3. Exact long-term retention/deletion duration after cancellation/non-payment.

---

## 26. Completion Gate

Complete only when billing/provider integration, entitlement state, downgrade/cancellation/reactivation, export/retention/deletion, security, notifications, idempotency, unresolved-decision gating and runtime acceptance are proven end-to-end.
