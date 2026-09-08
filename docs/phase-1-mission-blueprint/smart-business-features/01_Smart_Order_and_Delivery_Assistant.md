# Smart Order & Delivery Assistant

## Feature Identity

**Feature Name:** Smart Order & Delivery Assistant  
**Product Type:** Optional add-on  
**Availability:** Smart Business Ledger + Smart Business Manager  
**Build Commitment:** **BUILD NOW — required before first 10 pilot clients**  
**Founder Intent:** Give local merchants professional ordering and delivery capability for their own customer relationships without turning Smart Business into a public marketplace.

---

## 1. Founder Problem Statement

Kerala local businesses such as restaurants, bakeries, supermarkets, groceries, and wholesale shops often manage orders and delivery through:

- phone calls;
- informal WhatsApp messages;
- handwritten notes;
- staff memory;
- repeated address questions;
- manual delivery assignment;
- follow-up calls asking where the delivery is;
- cash collection without structured proof.

The goal is not to replace the merchant's customer relationship.

The goal is to make that existing relationship easier to operate.

---

## 2. Lighthouse Principle

This feature must follow:

- Humans serving humans.
- Technology adapts to real human behavior.
- Small businesses deserve professional capability without enterprise complexity.
- Customer trust is a responsibility.
- Ask for information when its value is understandable.
- Reduce owner workload rather than creating new approval rituals.
- Location data exists for an operational purpose, not for uncontrolled surveillance.

A useful product formulation is:

> Help existing customers order directly from their trusted local shop. Do not create a marketplace.

---

## 3. Explicit Non-goal — Not a Marketplace

Smart Order & Delivery Assistant must not evolve into a generic public marketplace by implementation convenience.

It is designed for a merchant's own approved customer relationships.

It must not automatically become:

- public merchant discovery;
- cross-merchant product listing;
- bidding between merchants;
- marketplace commission engine;
- open ordering from unrelated public users;
- Swiggy/Zomato-style marketplace logic.

Future marketplace ideas, if ever considered, require a separate Founder product decision and likely a separate product classification.

---

## 4. Users Involved

### Owner

Full feature authority within the business.

Can:

- create customers;
- import customers;
- create orders;
- review customer-created orders;
- confirm/modify/reject orders;
- assign delivery staff;
- set COD amount;
- view active deliveries;
- view delivery history;
- review exceptions;
- manage customer relationship status;
- add customer address/location when known;
- control delivery permissions.

### Manager

Delegated authority only.

May perform operational order/delivery actions when explicitly permitted by Owner.

Manager does not automatically inherit Owner financial intelligence or Ask CFO access.

### Employee / Staff

Operational access only when permitted.

May:

- create an order for an approved customer;
- review and modify order item availability;
- confirm an approved order workflow;
- assign delivery staff if permitted;
- update approved operational order state.

Must not automatically gain:

- profit intelligence;
- full analytics;
- Ask CFO;
- unrestricted customer export;
- cross-business access.

### Delivery Staff

Can:

- receive assigned delivery;
- see only information needed for the assigned delivery;
- open delivery location/map;
- start delivery;
- update delivery status;
- share location during active delivery;
- mark delivered;
- mark unable to deliver;
- upload approved proof;
- record COD collected amount where required.

Cannot:

- access owner financial intelligence;
- access Ask CFO;
- access unrestricted business analytics;
- browse unrelated customers or deliveries without permission;
- be continuously tracked outside active delivery work.

### Customer

Can:

- be added to the merchant's approved customer network;
- receive one welcome/awareness message;
- unsubscribe/STOP;
- place orders through approved channels;
- provide order items and notes;
- accept/modify/cancel proposed order changes;
- share delivery location when needed;
- receive order confirmation;
- receive delivery assignment/status updates;
- track delivery while active;
- report delivery issues.

Cannot:

- access merchant dashboard;
- access Ask CFO;
- view business analytics;
- view other customers;
- access staff information beyond what is necessary for their delivery;
- access merchant internal business intelligence.

---

## 5. Private Customer Network

The feature operates only within an approved merchant-customer relationship.

Customer identities should be merchant-scoped and linked to the correct business.

Supported customer creation methods:

### A. Bulk customer import

For larger existing customer lists.

Expected supported inputs include:

- Excel;
- CSV;
- other approved Universal Document Intelligence formats as implemented.

### B. Manual dashboard entry

For small numbers of customers.

Minimum identity:

- customer name;
- phone number.

Optional at initial creation:

- address;
- saved location;
- notes;
- customer type;
- delivery preference.

### C. WhatsApp quick add

Example:

> Add Bharath Hotel as a customer, number 98xxxxxx, location MG Road.

Smart Business should interpret the instruction, show/confirm the created customer relationship where consequential, and preserve merchant ownership.

---

## 6. Customer Welcome + Consent / Unsubscribe

When a customer is newly added to the merchant's Order & Delivery network, Smart Business should send a **single** welcome/awareness message on behalf of that merchant.

The message should communicate, in the customer's language where available:

- which merchant added them;
- that they can place orders;
- that they can receive order updates;
- that they can track deliveries;
- that they can report delivery issues;
- how to unsubscribe.

Example intent, not locked public copy:

> ABC Supermarket has enabled its Smart Delivery Service for you. You can place orders, receive updates, and track deliveries here. If you do not wish to receive these updates, reply STOP.

### Trust rules

Smart Business must not:

- repeatedly send welcome messages;
- immediately demand address/location with no reason;
- spam inactive customers;
- send unrelated promotional messaging merely because the customer is in the delivery list;
- ignore STOP/unsubscribe.

---

## 7. Respectful Address / Location Collection

Customer location/address may be missing after customer creation.

That is acceptable.

The system should not repeatedly chase the customer for the missing field.

### Ask only when the location has immediate value

#### Customer creates first delivery order

If location is missing:

> To deliver your order correctly, please share your delivery location.

#### Owner/Staff creates delivery

If the customer location is missing, Smart Business should ask the Owner/Staff to choose:

- add location themselves; or
- request it from the customer in the context of the actual delivery.

The customer request should make the purpose clear.

### Founder rationale

A Kerala customer may hesitate when an unfamiliar WhatsApp bot asks for address or live location without context.

Trust improves when the reason is obvious.

---

## 8. Order Creation Methods

The feature must support more than customer-created orders.

### 8.1 Customer-initiated order

A registered customer sends an order through an approved channel.

Example:

> 2 bread, 1 milk, 1 kg apple.

or natural Malayalam/Manglish/voice equivalent.

Smart Business should convert the input to an **Order Draft**.

Draft contains:

- customer;
- items;
- quantities/units;
- notes where relevant;
- delivery location status;
- order state.

The system must not fabricate missing item details.

### 8.2 Owner/Staff-initiated order

A merchant may have received the order by phone, in person, notebook, or another existing workflow.

Example:

> Create order for Shahul: Banana 1 kg, Milk 2 packets, Biriyani Rice 2 kg, Chicken Masala 1 packet.

Smart Business verifies the customer and creates a draft.

### 8.3 Document/photo-created order

Universal Document Intelligence should support a paper/photo/PDF order list where approved.

Required pattern:

**Document/photo → interpretation → draft/preview → user confirmation → order record.**

Uncertain document interpretation must not silently create a finalized order.

### 8.4 Voice-created order

Owner/authorized Staff may create orders through natural voice input.

The system should preserve the same confirmation rules as text.

---

## 9. Order Draft, Availability and Negotiation

A customer order request is not automatically final.

Owner/authorized Staff must be able to review item availability.

Example:

- Bread — available;
- Milk — available;
- Apple — unavailable;
- Orange — available as alternative.

Smart Business may return a clear change proposal to the customer.

Customer can:

- accept changes;
- modify order;
- cancel.

Only after the approved confirmation flow should the order become `Confirmed`.

This protects both customer expectation and merchant inventory reality.

---

## 10. Owner/Staff Confirmation Flow

For Owner/Staff-created orders, Smart Business should show a clear human-readable draft.

Example:

**Mr. Shahul — Order Received**

- Banana — 1 kg
- Milk — 2 packets
- Biriyani Rice — 2 kg
- Chicken Masala — 1 packet

Actions:

- Confirm
- Modify

Only after confirmation should delivery assignment begin.

---

## 11. Natural-language Delivery Assignment

The feature should support conversational assignment.

Examples:

> Rahul, deliver 5 kg onion to Bharath Hotel by 5 PM.

> Assign it to Rahul. Amount to collect ₹632.

Before assignment, Smart Business should verify:

- order is confirmed;
- customer exists and belongs to this business;
- delivery staff exists;
- delivery staff has delivery permission;
- expected collection amount is valid where applicable;
- customer location is available or a resolution path exists.

After successful assignment:

### Delivery Staff receives

- merchant/business identity;
- customer name;
- ordered items;
- quantity;
- expected delivery time/deadline;
- amount to collect where COD applies;
- customer delivery location/map;
- Start Delivery action.

### Customer receives

- order confirmed;
- item summary;
- expected amount where applicable;
- delivery assignment/status;
- notice that tracking becomes available after delivery starts.

### Owner/authorized Staff receives

- assignment confirmation;
- delivery staff identity;
- customer;
- amount to collect where relevant;
- current delivery status.

---

## 12. Start Delivery and Live Tracking

When Delivery Staff starts the delivery:

1. status becomes `Out for Delivery` or equivalent approved state;
2. active location sharing/tracking begins only for the delivery purpose;
3. customer receives tracking access/link through the approved channel;
4. Owner/authorized operations view reflects the active state.

### Privacy rule

Tracking is active only for the delivery lifecycle.

It must stop when the delivery is completed, cancelled, or otherwise closed according to approved workflow.

No permanent employee tracking.

---

## 13. Delivery Completion

Delivery Staff can mark:

- Delivered;
- Unable to Deliver / Delivery Issue.

### Delivered

When marked delivered, Smart Business should record appropriate completion evidence.

Customer receives a polite completion message and an **issue reporting option**.

### Customer silence

No customer response is normal.

It must **not** create a conflict by default.

The system may close the delivery normally when no issue is reported and completion evidence is sufficient.

### Customer reports issue

Create a Delivery Exception / Customer Issue for Owner or authorized staff review.

Do not accuse the Delivery Staff automatically.

### Unable to Deliver

Supported operational reasons may include:

- customer unavailable;
- address/location problem;
- payment issue;
- customer postponed;
- customer refused;
- other reason.

Owner/authorized staff receives the exception and decides next action.

---

## 14. Smart Delivery Proof

Where technically and legally appropriate, `Mark Delivered` should automatically record useful operational proof such as:

- completion timestamp;
- delivery staff identity;
- order identity;
- completion location;
- distance from expected customer location where available;
- delivery status history.

### Optional supporting evidence

Delivery Staff may also attach:

- delivery photo;
- customer note;
- bill/photo proof;
- COD collected confirmation.

The system should prefer automatic evidence over forcing repetitive manual screenshots when reliable automatic capture is available.

---

## 15. COD Collection

Where an order is Cash on Delivery:

- Owner/Staff sets expected amount to collect;
- Delivery Staff sees that amount;
- Delivery Staff records actual amount collected;
- system compares expected vs recorded amount;
- match → normal completion;
- mismatch → operational exception for review.

Smart Business reports the mismatch without accusing the employee.

---

## 16. Inventory / Stock Integration

### Manager

Manager already includes stock intelligence.

Order & Delivery should be capable of using Manager stock foundations for:

- availability checks;
- stock-aware order review;
- inventory movement after confirmed business events;
- reorder intelligence where applicable.

### Ledger

Order & Delivery remains useful without stock automation.

If Smart Stock Assistant is active, the add-on may use the shared stock foundation.

If no stock capability is active, order handling must not fabricate inventory knowledge.

---

## 17. Shared Foundations to Reuse

The feature should reuse approved shared systems instead of creating duplicates.

Likely shared capability areas include:

- Identity / Business Contacts;
- Permission Engine;
- Human Language Layer;
- WhatsApp/Conversation Engine;
- Business Memory;
- Universal Document Intelligence;
- Notification/Message Engine;
- Location Foundation;
- Audit/history foundation;
- Smart Reminder Engine where delivery follow-up reminders are needed;
- Stock foundation where enabled.

The EIS must inspect actual repository architecture before deciding exact schema or services.

---

## 18. Business Memory / Data Requirements

This feature requires durable records for concepts such as:

- merchant-scoped customer identity;
- customer relationship status;
- welcome status;
- unsubscribe state;
- address status;
- location status;
- order;
- order items;
- order status history;
- delivery assignment;
- delivery status history;
- expected collection amount;
- actual collection amount;
- delivery proof;
- customer issue/exception;
- timestamps and actor identity.

This file does **not** prescribe exact table names.

Claude Code / Supabase architecture should design the safest normalized model while preserving this behavior.

---

## 19. AI Behavior

AI may:

- interpret natural order instructions;
- structure item/quantity drafts;
- identify customer and delivery staff candidates;
- ask clarification;
- suggest alternatives based on authorized data;
- summarize order/delivery state;
- assist assignment;
- explain exceptions.

AI must not:

- invent customer identity;
- invent stock availability;
- create a final order from ambiguous input without required confirmation;
- assign an unauthorized employee;
- expose Owner intelligence to customer/delivery staff;
- treat a delivery issue as proof of wrongdoing;
- continue location tracking outside the delivery purpose.

---

## 20. Human Language Layer

Customer, Owner, Staff, and Delivery Staff experiences should support the user's approved language preference:

- English;
- Malayalam;
- Manglish.

Messages should sound natural for Kerala users, not like literal machine translation.

---

## 21. Performance Expectations

Critical interactions should feel fast and dependable.

Examples:

- order draft creation;
- confirmation;
- assignment;
- Start Delivery;
- status update;
- customer tracking notification.

Performance must not weaken:

- permission checks;
- merchant isolation;
- correctness;
- idempotency;
- financial integrity for COD;
- privacy.

---

## 22. Failure / Exception Principles

The system must handle at least:

- duplicate order submission;
- customer unsubscribed;
- unknown/unapproved customer;
- ambiguous customer name;
- ambiguous delivery staff name;
- unavailable item;
- missing location;
- delivery staff unavailable;
- tracking unavailable;
- customer issue report;
- failed delivery;
- COD mismatch;
- location mismatch;
- message-delivery failure;
- retry/idempotency conditions.

Failures must produce clear recoverable states rather than silent data corruption.

---

## 23. Acceptance Scenarios

At minimum, later Product Blueprint / acceptance work should verify:

### Customer network

- bulk customer import;
- manual customer entry;
- WhatsApp quick add;
- one welcome message;
- STOP/unsubscribe;
- no repeated immediate location requests.

### Ordering

- customer-created order;
- Owner-created order;
- Staff-created order;
- voice-created order;
- document/photo-created order;
- draft review;
- unavailable-item modification;
- customer acceptance/cancel;
- Owner/Staff confirm/modify.

### Assignment

- natural-language assignment;
- wrong/ambiguous staff identity;
- delivery permission check;
- COD amount assignment.

### Delivery

- Start Delivery;
- customer tracking notification;
- location active only during delivery;
- Delivered;
- Unable to Deliver;
- automatic/approved proof capture;
- customer issue reporting;
- customer no-response normal completion;
- tracking stops at completion.

### Security

- customer cannot access dashboard;
- Delivery Staff cannot access Ask CFO;
- Employee cannot access Owner analytics unless explicitly permitted;
- no cross-business customer/order leakage;
- private customer network boundary enforced.

### Inventory

- Manager stock-aware behavior;
- Ledger + Smart Stock behavior;
- Ledger without stock capability does not invent availability.

---

## 24. Historical Correction Record

### Superseded assistant classification

Earlier planning assistant recommendation:

> Build after core pilot.

Founder correction:

> **Build before first 10 pilot clients and include in pilot feedback.**

The earlier `after pilot` recommendation is therefore historical only and must not be used as current Build Later authority.

---

## 25. Provenance

Primary detailed origin:

- `smart_business_planning_19.txt`

Continuity:

- `smart_business_planning_18.txt`
- earlier planning-origin feature/product extractions where relevant.

Current canonical echoes:

- Source 11 — Smart Order & Delivery Assistant Add-on;
- Source 12 — Smart Order and Delivery implementation/acceptance rules;
- Source 09 — pilot-entry requirement for Smart Order & Delivery.

---

## 26. Unresolved Engineering Questions

The following are engineering/product-implementation questions for future Blueprint/EIS work, not reasons to demote the feature:

- exact customer/relationship schema;
- exact live-location provider and data-retention approach;
- exact tracking-link UX;
- delivery location tolerance/geofence rules;
- delivery proof retention;
- COD reconciliation integration with ledger/payment verification;
- messaging-template requirements under Meta policies;
- offline/poor-network delivery behavior;
- mapping provider fallback;
- idempotent order and status-event architecture;
- exact owner/staff permission granularity.

These questions must be resolved while preserving the feature promise above.

---

## Final Product Principle

Smart Order & Delivery Assistant should make a local merchant's existing customer relationship feel more organized, trustworthy, and professional.

It must not make the merchant become a marketplace operator.

It must not make the customer feel surveilled or spammed.

It must not make Delivery Staff surrender privacy outside active delivery work.

It should simply help the business serve its own customers better.