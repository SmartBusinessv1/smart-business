# Smart Business Feature Definition — Smart Order & Delivery Assistant

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **ADD-ON + BUILD NOW — validate before first 10 pilot merchants**  
**Commercial availability:** Smart Business Ledger + Smart Business Manager add-on  
**Authority boundary:** Merchant serves its own approved customer relationships. This is not a public marketplace. Owner/authorized humans retain consequential decision authority.

---

## 1. Feature Identity

Smart Order & Delivery Assistant gives a local merchant a professional way to receive, confirm, prepare, assign, deliver and close customer orders without turning Smart Business into a public marketplace.

It must work with the way Kerala merchants already operate: phone calls, WhatsApp, handwritten lists, staff-entered orders, voice, paper notes and direct customer relationships.

The feature is a private merchant-customer operating network.

---

## 2. Founder Problem Statement

Local merchants often manage delivery through fragmented human memory:

- orders arrive by phone, WhatsApp, voice note, paper or in person;
- item availability is checked informally;
- addresses are repeatedly requested;
- staff assignment is verbal;
- customers call for status;
- COD collection can be difficult to reconcile;
- delivery proof and exceptions may be poorly recorded.

Smart Business should reduce that coordination burden without taking ownership of the merchant's customer relationship.

---

## 3. Lighthouse Principles

The feature must protect:

- humans serving humans;
- merchant/customer relationship ownership;
- privacy by purpose;
- no public marketplace drift;
- minimal data collection;
- explicit confirmation before consequential commitments;
- dignified staff treatment;
- no default continuous employee surveillance;
- clear, recoverable exception handling;
- channel independence.

---

## 4. Explicit Non-goal — Not a Marketplace

Smart Order & Delivery must not become, by implementation convenience:

- public merchant discovery;
- cross-merchant product listing;
- marketplace bidding;
- marketplace commission logic;
- an open ordering network for unrelated public users;
- a Swiggy/Zomato-style marketplace.

Any broader marketplace or wholesaler network requires a separate future Founder product decision.

---

## 5. Users and Permission Boundaries

### Owner

The Owner may, within plan/feature availability:

- create/import customers;
- create, review, confirm, modify or cancel orders;
- assign permitted delivery staff;
- set/confirm COD amounts;
- view active and historical deliveries;
- manage customer status and delivery permissions;
- review exceptions and delivery evidence.

### Manager

Manager authority is delegated by the Owner. Manager does not automatically inherit Owner financial intelligence or Ask CFO access.

### Employee / Staff

A permitted employee may perform only approved operational actions, for example:

- create an order draft;
- review item availability;
- prepare/pack an order;
- update permitted order states;
- assign delivery staff where explicitly allowed.

Employees must not gain unrestricted customer export, Owner profit, Ask CFO or full analytics merely because they participate in order fulfilment.

### Delivery Staff

Delivery staff receives only what is needed for the assigned delivery:

- merchant identity;
- customer name/contact where required;
- order/item summary;
- delivery address/location;
- delivery timing/instructions;
- COD amount where applicable;
- permitted delivery actions.

Delivery staff must not receive Owner-wide business intelligence or browse unrelated customers/orders.

### Customer

A customer may:

- be added to the merchant's approved customer network;
- place an order through an approved channel;
- accept/modify/cancel a proposed order change;
- provide delivery address/location when needed;
- receive confirmations/status updates;
- report delivery issues;
- unsubscribe from permitted messaging.

Customer access never includes merchant internal analytics or staff information beyond what is necessary for the delivery relationship.

---

## 6. Customer Identity and Private Customer Network

Customer identity is merchant-scoped and should reuse shared identity foundations rather than create a duplicate customer record for each channel.

Supported creation/import paths may include:

- manual workspace entry;
- conversational quick-add;
- Excel/CSV import through Universal Document Intelligence;
- approved migration/import workflows.

At minimum, an orderable customer generally needs a usable identity/contact path. Address/location may remain missing until delivery actually requires it.

The system must detect plausible duplicate customers rather than silently creating parallel identities.

---

## 7. Customer Awareness and Messaging Consent

When a customer is newly enabled for the merchant's order/delivery communication, the product should clearly identify the merchant and explain the purpose of messages.

Messaging must respect:

- unsubscribe/STOP behavior where applicable;
- approved templates/provider rules;
- no repeated welcome spam;
- no unrelated promotional abuse merely because a customer exists in the delivery network.

---

## 8. Order Intake Channels

The feature must support the same business workflow regardless of approved input channel.

### Customer-initiated

Examples:

- text;
- voice;
- image/photo of a handwritten list;
- supported document input.

### Merchant-initiated

Owner/permitted staff may create an order from:

- phone-call information;
- in-person request;
- text/voice instruction;
- handwritten/paper list;
- imported order sheet.

### Document/photo intake

Universal Document Intelligence must be reused:

**input → interpretation → preview → clarify where needed → confirmation → order draft**.

Uncertain extraction must not silently create a confirmed order.

---

## 9. Order Draft and Clarification

Incoming order intent first becomes a draft where consequential facts can be reviewed.

A draft should preserve, as applicable:

- business/customer identity;
- items;
- quantities and units;
- notes/substitution preferences;
- delivery/pickup intent;
- requested time;
- address/location status;
- payment/COD information;
- source/channel;
- creator/actor;
- current order state.

Clarify the smallest useful question when:

- product identity is ambiguous;
- quantity/unit is unclear;
- multiple customer identities match;
- delivery location is missing when required;
- payment/COD amount is inconsistent;
- item interpretation from a document is uncertain.

Never guess a consequential order fact merely to progress the workflow.

---

## 10. Availability, Substitution and Customer Confirmation

A requested order is not automatically final.

Owner/authorized staff should be able to review stock/availability using current business data where available.

If a requested item is unavailable, Smart Business may help propose:

- quantity change;
- replacement/substitute;
- partial fulfilment;
- removal;
- later fulfilment where supported.

The customer or authorized merchant user must approve material changes before the order reaches the confirmed state.

Smart Business must not promise inventory that the product cannot support with reliable data.

---

## 11. Order Lifecycle

The mature lifecycle should support a clear progression such as:

**Draft → Confirmed → Preparing/Packing → Ready/Assigned → Out for Delivery → Delivered/Closed**

with explicit exception/cancel states as needed.

State names may evolve, but state transitions must be auditable and permission-scoped.

A historical fixed status enum is implementation detail, not immutable Product Truth.

---

## 12. Delivery Assignment

Before assignment, verify:

- the order is in an assignable state;
- the customer belongs to the merchant;
- the delivery person exists and has permission;
- required address/location exists or has a resolution path;
- COD amount is reviewed where applicable;
- the assignment is not a duplicate/retry of an already completed action.

Natural-language assignment is supported, subject to the same validation.

---

## 13. Delivery Staff Experience

The delivery workflow should be low-friction and need not require a heavy separate driver application.

Delivery staff should receive only task-required information and permitted actions, such as:

- acknowledge assignment;
- open address/map;
- mark started/out-for-delivery;
- record delivery proof;
- record COD collected amount;
- mark delivered;
- report unable-to-deliver/exception.

The durable requirement is operational usefulness and bounded access, not a particular historic driver UI.

---

## 14. Location and Tracking — Current Reconciled Rule

Location is purpose-limited.

Smart Business may use location for:

- customer delivery destination;
- point-in-time delivery verification;
- proof/event context where appropriate;
- a user-requested or explicitly authorized live-tracking experience if separately designed under current privacy/security rules.

**Default continuous route GPS surveillance of delivery staff is not a required/current behavior.**

The product must not continuously track an employee merely because a delivery assignment exists.

Where location is captured:

- collect only what is necessary;
- make purpose understandable;
- stop/expire access when the operational purpose ends;
- prevent unrelated role access;
- follow current retention policy.

This rule supersedes older Founder-era/seed wording that implied continuous route tracking as the default delivery lifecycle.

---

## 15. Delivery Proof and Completion

Completion must rely on configured positive proof/action rather than unsupported inference.

Possible proof mechanisms may include, as appropriate:

- delivery staff completion action;
- recipient acknowledgement;
- OTP/signature/photo or other approved proof;
- point-in-time location evidence;
- COD/payment evidence;
- merchant confirmation.

The product should select/allow suitable proof according to risk and merchant configuration without forcing unnecessary friction.

### Customer silence rule

Customer silence alone is **not** an automatic delivery failure or exception when sufficient configured proof exists.

Absence of a reply must not automatically roll back an otherwise well-proven delivery.

---

## 16. COD and Payment Relationship

Where COD applies:

- expected collection amount must be explicit;
- delivered/COD-collected are separate facts where needed;
- discrepancies remain visible;
- payment verification/reconciliation should reuse the shared financial-integrity foundation;
- delivery completion must not silently duplicate Ledger income.

The exact Ledger write/link must be idempotent and auditable.

---

## 17. Merchant, Customer and Staff Notifications

Use the shared Notification foundation.

Useful notifications may include:

- order received/draft requiring action;
- confirmation/change request;
- assignment;
- delivery started/status;
- delivery completed;
- payment/COD exception;
- unable-to-deliver exception.

Do not create a separate order-only notification infrastructure when shared foundations can serve the need.

---

## 18. WhatsApp Experience

WhatsApp is an approved channel for:

- customer order intake;
- merchant/staff order creation;
- clarification;
- confirmations;
- status communication;
- approved delivery interactions.

WhatsApp remains an adapter to shared order/customer/delivery truth, not a separate workflow engine.

---

## 19. Conversation Workspace Experience

Authorized merchant users should be able to perform the corresponding order/delivery workflows in the Smart Business Conversation Workspace using:

- text;
- voice;
- image/photo;
- Excel/CSV/PDF where relevant.

The same order record, permissions, identity, confirmations and audit trail must apply across channels.

---

## 20. Human Language

Customer and merchant interactions should support English, Malayalam and Manglish through the shared Human Language Layer.

The system should understand locally natural units/product expressions while clarifying ambiguous consequential details.

---

## 21. AI Behaviour and Authority

AI may:

- interpret order intent;
- prepare drafts;
- identify missing information;
- suggest substitutions;
- summarize state;
- surface exceptions;
- recommend follow-up.

AI must not:

- finalize uncertain orders by guessing;
- expand staff permission;
- mark delivery completed without configured proof;
- create payment facts without evidence;
- expose unrelated customer/Owner information;
- create public marketplace relationships.

---

## 22. Business Memory and Data Requirements

The feature should preserve durable relationships among:

- merchant/business;
- customer identity;
- customer communication preferences;
- order and order lines;
- item/product identity where applicable;
- order state history;
- assignment actor;
- delivery state/events;
- delivery proof;
- COD/payment evidence/link;
- address/location with purpose/retention boundary;
- exception history;
- source channel;
- confirmation/audit events.

Do not duplicate customer/product identities where shared foundations already exist.

---

## 23. Shared Foundations to Reuse

Reuse:

- Permission Engine / business isolation;
- shared identities;
- Business Memory;
- Human Language Layer;
- Conversation Workspace / WhatsApp adapters;
- Universal Document Intelligence;
- inventory/catalog where available;
- Notification foundation;
- Reminder Engine;
- point-in-time location primitive;
- audit/history/idempotency;
- Payment Verification / Ledger services where relevant.

---

## 24. Error and Exception Behaviour

Handle at minimum:

- unknown/duplicate customer;
- ambiguous item/quantity;
- out-of-stock/substitution;
- missing address/location;
- unavailable delivery staff;
- revoked permission during workflow;
- duplicate assignment/action retry;
- customer modification/cancellation;
- delivery delay;
- unable-to-deliver;
- proof failure;
- COD mismatch;
- channel delivery failure;
- payment/linking failure.

A narrow failure must not freeze unrelated merchant operations.

---

## 25. Privacy and Trust Boundaries

- Merchant owns the customer relationship.
- Customer data is business-scoped.
- Delivery staff sees only task-required information.
- Location is purpose-limited.
- No default continuous staff surveillance.
- No staff access to Owner financial intelligence merely through delivery duties.
- No public marketplace reuse of customer data.
- Support/platform access follows separate purpose-limited governance.

---

## 26. Acceptance Scenarios

A future Blueprint/EIS must verify at least:

1. Customer text order → accurate draft → merchant/customer confirmation.
2. Voice order → clarification for ambiguity → confirmed draft.
3. Handwritten/photo order → UDI preview → confirmation → draft.
4. Merchant/staff phone-order capture through conversation.
5. Out-of-stock item → respectful substitution flow.
6. Missing delivery location requested only when operationally needed.
7. Permission-scoped delivery assignment.
8. Delivery staff receives only required information.
9. Purpose-limited delivery proof/location without default continuous tracking.
10. Customer silence does not fail an otherwise sufficiently proven delivery.
11. COD discrepancy remains visible and does not duplicate Ledger revenue.
12. WhatsApp and Conversation Workspace operate on the same order truth.
13. Cross-business access is denied server-side.
14. Duplicate/retry does not create duplicate order/payment events.

---

## 27. Dependencies

Major dependencies include:

- Permissions / Business Isolation;
- shared customer/product identity;
- Human Language Layer;
- Universal Document Intelligence;
- Conversation Workspace / WhatsApp integration;
- Notification foundation;
- audit/idempotency;
- Inventory/Catalog for availability-aware flows;
- Payment Verification / Ledger for financial closure;
- bounded location primitive.

---

## 28. Historical Corrections / Superseded Behaviour

Preserve the original Founder intent for a professional private ordering/delivery capability.

Superseded or historical-only:

- public marketplace interpretation;
- customer silence automatically becoming a failure/rollback;
- default continuous route GPS tracking of delivery staff;
- fixed universal delay thresholds such as 45 minutes;
- mandatory heavy native driver app;
- old implementation-specific transport/status constants where not reaffirmed.

---

## 29. Provenance and Hydration Coverage

Reconciled from:

- Founder-origin Section 5 / Order & Delivery recovery;
- Section 7 cross-feature, confirmation, privacy and residual-completeness evidence;
- Smart Business Planning 1–20 and project-room historical extraction;
- current Founder corrections;
- Final Feature Reconciliation Register §§20, 28–30;
- Source 01 and Source 11 current Product Truth.

**Hydration result:** all current `PRESERVE` / `PRESERVE + EVOLVE` behaviors assigned to this feature family have a destination in this contract or an explicitly referenced shared foundation.

---

## 30. Unresolved Founder Questions

- Exact current Smart Order & Delivery add-on price remains unresolved.
- Broader marketplace/wholesaler expansion remains a separate future Founder decision and is not part of this contract.

---

## 31. Completion Gate

The feature is not complete because an order screen exists.

Completion requires the full approved lifecycle across UI/channel, backend/data, permissions, confirmations, inventory relationship, delivery proof, payment/COD linkage, privacy, exceptions, runtime verification and acceptance evidence.
