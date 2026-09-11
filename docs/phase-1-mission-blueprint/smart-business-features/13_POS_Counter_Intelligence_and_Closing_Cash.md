# POS Connection, Counter Intelligence & Closing Cash

## Feature Identity

**Availability:** Smart Business Manager core  
**Build Commitment:** **BUILD NOW**  
**Integration Principle:** Standard POS bridge supported; client-specific core modifications rejected.

## Founder Problem Statement

High-volume merchants cannot manually re-enter every sale, and owners need factual awareness of voids, unusual discounts, counter differences and closing cash without forcing replacement of existing billing systems or accusing staff.

## Standard POS Bridge

Smart Business should work beside supported existing POS/billing systems through a standard integration/bridge layer.

The bridge may ingest approved sales and operational events such as:

- completed sales;
- item/quantity information where available;
- payment mode/status where available;
- invoice/bill identity;
- discount events;
- void/cancel events;
- timestamps/counter/operator context where available.

Exact adapter technology is engineering-specific and may differ by POS environment.

## Core Boundary

Smart Business core must not be modified uniquely for one merchant's proprietary POS behavior. Unsupported/custom needs belong in an extension/integration layer or separate connector.

Manual Excel/CSV import may remain a fallback/import capability but must not silently replace the committed standard bridge.

## Counter Intelligence

The system may surface factual signals such as:

- void/cancel activity;
- unusual discount activity;
- sales/cash mismatch;
- repeated/duplicate events;
- abnormal operational patterns grounded in real data.

Required tone:

> Please review this counter activity.

Never:

- `Fraud detected` as an unsupported conclusion;
- call a staff member a thief;
- impose punishment;
- auto-dock wages;
- lock a register merely because an AI model inferred wrongdoing.

Owner/authorized manager interprets context and decides action.

## Closing Cash

At end of day, Smart Business should help reconcile recorded sales/payment evidence with declared/observed closing cash and other available financial evidence.

The workflow should:

1. determine the relevant business period/counter scope;
2. assemble authoritative recorded totals;
3. accept the owner/authorized user's closing cash evidence;
4. show match or variance clearly;
5. preserve both source values;
6. allow contextual explanation/correction through the governed financial-correction path;
7. make the result available to Manager Daily Intelligence and Ask CFO where authorised.

A mismatch is a thing to review, not proof of theft.

## Permissions

- Owner: full review and configuration.
- Manager: only delegated counter/POS intelligence permissions.
- Employee: may operate source POS or contribute permitted data, but does not receive Owner-level risk/profit intelligence by default.

Authorization must exist at server/data boundaries, not merely hidden UI.

## Duplicate and Integrity Handling

POS ingestion should be idempotent where possible. Duplicate events must not create duplicate sales or stock deductions.

If event identity is ambiguous, stop the uncertain write and preserve evidence for review rather than freezing unrelated operations.

## Stock Integration

Where Manager Stock Intelligence is enabled and the POS payload has sufficient trusted item data, confirmed sales may update inventory through the approved stock service.

Do not fabricate SKU mappings. Mapping uncertainty requires review/clarification.

## Payment Verification Integration

Digital-payment status may remain unverified until trusted evidence is reconciled. POS data alone must not override authoritative payment evidence where the current payment workflow requires verification.

## Alerts and Notifications

Alerts must use shared Notification/Conversation foundations. A channel-delivery failure should not duplicate or reverse the underlying POS event.

## Error and Exception Behaviour

Handle at minimum:

- POS unavailable;
- bridge/network failure;
- duplicate event;
- malformed payload;
- unknown SKU/customer/operator mapping;
- stale synchronization;
- void/cancel ambiguity;
- discount threshold/configuration issue;
- closing-cash mismatch;
- permission change;
- downstream notification failure.

Block narrowly and preserve unrelated business functions.

## Historical Corrections

Superseded:

- hardware keyboard/register freezes based on AI judgement;
- accusatory employee messages;
- fixed historical discount percentage as universal Product Truth;
- forcing all POS users into manual CSV nightly upload;
- custom core code per POS client.

Historical printer-spool interception is implementation provenance, not a locked mechanism.

## Provenance

Reconciled from Founder-origin Sections 4 and 7, planning anti-drift evidence, Source 01 existing-habit principle, Source 05 Counter Review Intelligence, Source 06 Existing POS FAQ, and Source 11 POS Connection & Alerts / Manager truth.
