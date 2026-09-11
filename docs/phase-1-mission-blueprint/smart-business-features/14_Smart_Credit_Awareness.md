# Smart Credit Awareness

## Feature Identity

**Availability:** Ledger + Manager core  
**Build Commitment:** **BUILD NOW**  
**Locked Authority Rule:** Credit system warns. It must not block Owner decisions. AI informs; Owner decides.

## Founder Problem Statement

Udhar/Kadam is a normal and relationship-sensitive part of Kerala local retail. Merchants need accurate memory of who owes what, what was repaid and where exposure is growing, without a machine humiliating customers or freezing a trusted sale.

## Core Capability

Smart Credit Awareness should preserve:

- merchant-scoped customer identity;
- current outstanding balance;
- credit transaction history;
- repayment history;
- merchant-configured limits/thresholds;
- ageing/follow-up context where supported;
- customer-level and business-wide credit summaries;
- conversational search;
- dashboard visibility;
- respectful reminder/collection continuation when Owner chooses;
- payment-verification integration for repayments;
- export/report support;
- audit trail for material adjustments/overrides.

## Ledger Relationship

Credit and repayment are first-class financial states in Business Memory.

A credit event must preserve the historical transaction while updating the customer's current outstanding position through the governed credit service. A repayment must reduce outstanding exposure without erasing the original credit history.

## Limit Awareness Flow

When an Owner-configured threshold is crossed:

1. identify the correct customer and current balance;
2. show the relevant limit/threshold and supporting history;
3. notify the Owner/authorized user privately;
4. allow the human to decide whether to proceed, adjust, grant grace, freeze future credit under an explicit Owner rule, or follow up later;
5. preserve material override/context in audit history.

The system must not infer moral trustworthiness from the number alone.

## Customer Communication

Collection/follow-up communication occurs only through an Owner/authorized workflow. Tone must be respectful, discreet and relationship-preserving.

Do not automatically send confrontational debt messages because a threshold was crossed.

## Permissions

- Owner: full credit awareness, limits, history and authorized follow-up.
- Manager: only explicitly delegated credit permissions.
- Employee: may record permitted credit/repayment transactions but does not receive business-wide customer-credit intelligence by default.
- Customer: may receive their own permitted statement/reminder where Owner initiates/authorizes; never other customers' information.

## Ask CFO

Ask CFO may analyze authorized credit balances, repayment patterns and exposures, and may recommend things to review. Ask CFO must not modify limits or decide whether a customer deserves credit.

## Reminder Integration

Owner may create follow-up reminders from a credit record or Ask CFO insight. Reminder due date does not imply the customer paid or failed to pay.

## Payment Verification Integration

Where repayment evidence arrives through approved payment/bank channels, strong matches may verify the related repayment. Ambiguous matching must go to human confirmation.

## Corrections

Corrections must preserve auditability. Do not destroy prior financial truth through silent row replacement.

## Error and Exception Behaviour

Handle:

- ambiguous customer identity;
- duplicate customer profiles;
- duplicate credit/repayment entry;
- wrong amount;
- unmatched repayment evidence;
- ambiguous payment match;
- permission denial;
- stale balance state;
- communication failure.

Stop only the uncertain credit write/link where necessary.

## Explicit Non-goals

- autonomous hard credit blocking as default;
- customer shaming;
- AI creditworthiness judgement;
- automated lending/underwriting;
- autonomous limit increases/decreases;
- exposing credit intelligence to staff by default.

## Historical Corrections

Rejected historical stages:

- hard register blocker;
- confrontational automated customer messaging;
- silent backend-only awareness that leaves Owner uninformed.

The current balanced state is real-time awareness plus human authority.

Historical default ₹5,000 limits are implementation history; limits are merchant-controlled/product-configured, not universal truth.

## Provenance

Reconciled from Founder-origin Sections 2, 5B and 7; Source 01 AI/human authority; Source 06 Credit Limit FAQ; and Source 11 Smart Credit Awareness.
