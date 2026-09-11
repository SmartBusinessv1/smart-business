# Payment Verification & Bank Reconciliation

## Feature Identity

**Availability:** Ledger + Manager core  
**Build Commitment:** **BUILD NOW**

## Founder Problem Statement

Digital-payment evidence often arrives separately from the sale or repayment that a merchant recorded. Smart Business must help establish financial clarity without duplicating revenue, trusting screenshots blindly, or guessing between plausible matches.

## Core Capability

The feature should support:

- pending/unverified payment state where appropriate;
- secure ingestion of approved authoritative payment/bank evidence;
- extraction of amount, direction, reference/UTR where available, timestamp, account/payment-mode context and useful description;
- tenant/business mapping;
- matching against existing Ledger/POS/order/credit records;
- safe verification of strong matches;
- duplicate-event protection;
- ambiguity review;
- unmatched-evidence review;
- audit history;
- Ledger/dashboard/Ask CFO visibility of verification state.

## Authority and Evidence Rule

A screenshot or user assertion is not automatically authoritative settlement evidence. The system should use the strongest approved evidence available.

Unauthenticated or untrusted incoming messages must not be treated as bank truth.

## Matching Behaviour

A strong deterministic match may verify an existing record rather than insert duplicate revenue.

Matching may consider, as available:

- unique payment reference;
- amount;
- credit/debit direction;
- timestamp/window;
- payment mode;
- party/account context;
- linked order/customer/transaction state.

No historical fixed matching window is Product Truth. The engineering design must choose and verify a safe strategy.

## Ambiguous Match

If more than one plausible record matches:

1. do not guess;
2. preserve the evidence;
3. show the candidate matches to an authorized human;
4. require explicit selection before linking/verifying;
5. bind confirmation to the exact evidence and target record;
6. revalidate permission and state at execution.

## Mismatch Behaviour

If recorded and authoritative amounts differ:

- preserve both values;
- show the variance clearly;
- do not silently overwrite either side;
- allow the Owner/authorized user to correct/reconcile through governed financial correction.

## Unmatched Evidence

If trusted bank/payment evidence has no matching business record, surface it as an unlinked event. Do not fabricate a sale, customer or purpose.

## Duplicate Handling

Repeated delivery of the same authoritative event must be idempotent. A duplicated bank webhook/email must not create duplicated income or repayment.

## Smart Credit Integration

Verified repayment evidence may confirm a customer repayment and update outstanding credit through the governed Credit/Ledger path. Ambiguous customer/payment identity requires confirmation.

## POS / Order Integration

Payment state may be associated with POS sales or Order & Delivery records where reliable identifiers exist. One subsystem must not create duplicate financial truth in another.

## Ask CFO

Ask CFO may explain verified/unverified status, mismatches and reconciliation gaps using read-only intelligence. It cannot force a match or modify financial history itself.

## Permissions

Owner has full authorized reconciliation access. Manager only if delegated. Employees may see only payment status needed for their permitted operational task and never broad bank intelligence by default.

## Failure Containment

Core rule:

> Stop the uncertain financial write/link, not the whole business.

If bank ingestion or matching fails, unrelated Ledger, stock, POS, HR and other safe workflows continue.

## Error / Exception Cases

- spoofed/untrusted evidence;
- parser failure;
- duplicate event;
- same-value collision;
- wrong amount;
- missing reference;
- stale evidence;
- no candidate transaction;
- multiple candidate transactions;
- permission change;
- downstream bank/channel outage.

## Explicit Non-goals

- phone/SMS scraping as assumed default architecture;
- trusting customer screenshots as final settlement proof;
- guessing matches;
- duplicate income creation;
- globally blocking Smart Business because reconciliation is uncertain;
- exposing broad banking data to staff.

## Historical Corrections

Historical `24-hour amount lookback`, shorter rolling windows, named banks, SendGrid endpoints and exact routes are implementation provenance. The mature requirement is safe authenticated evidence ingestion, idempotency and ambiguity-to-human confirmation.

## Provenance

Reconciled from Founder-origin Section 5B and Section 7, planning history, current financial-integrity lessons, Source 11 Payment Verification Assistant + Bank Email Sync, and current confirmation/security doctrine.
