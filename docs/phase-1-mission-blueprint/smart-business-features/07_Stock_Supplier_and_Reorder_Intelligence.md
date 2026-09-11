# Smart Business Feature Definition — Stock, Supplier & Reorder Intelligence

**Status:** MATURE RECONCILED CONTRACT  
**Build commitment:** **BUILD NOW**  
**Commercial availability:** Manager core for Stock Intelligence; Smart Stock Assistant available as Ledger add-on  
**Authority boundary:** AI may observe, explain and suggest. Reorder execution requires Owner confirmation by default or an explicit stored Owner-delegated rule.

---

## 1. Feature Identity

This feature family helps merchants understand what stock exists, what is moving, what is at risk, what may need reorder and which supplier relationship is involved.

It should reduce stock loss, dead capital and mental tracking without forcing a rigid ERP operating model.

---

## 2. Core Stock Capabilities

The mature stock foundation should support:

- item/product identity;
- quantity and unit tracking;
- stock movement history;
- opening stock/imports;
- corrections with auditability;
- low-stock awareness;
- expiry/freshness awareness where relevant data exists;
- slow-moving/dead-capital awareness;
- wastage/spoilage recording where relevant;
- links to catalog/pricing and business events;
- owner/manager search and summaries.

Exact unit-conversion, batch and costing mechanics belong to Blueprint/EIS design where not already governed.

---

## 3. Supplier Management

Supplier identity should be business-scoped and reusable across purchasing/reorder workflows.

Useful supplier memory may include:

- supplier name/contact;
- supplied products/items;
- purchase history;
- recent/typical prices where supported;
- order/communication history;
- payment/credit relationship where authorized;
- preferred/alternate supplier context.

Suppliers do not receive merchant business intelligence.

---

## 4. Reorder Intelligence

Smart Business may suggest that stock needs replenishment based on authorized data.

A suggestion should explain enough context for the merchant to decide, such as:

- current stock;
- observed movement;
- configured threshold/target;
- recent purchase/supplier context;
- expiry or overstock risk where relevant.

The system must not fabricate demand forecasts or supplier availability.

---

## 5. Reorder Authority

Default flow:

**observe → suggest → Owner/authorized Manager reviews → confirm/modify/reject → approved supplier/order action**.

Automatic execution is allowed only where the Owner has explicitly created a bounded standing rule that stores delegated authority.

A trigger firing is not itself permission.

Examples of bounded rule dimensions may include item, supplier, quantity/value ceiling, frequency and validity period; exact schema belongs to EIS.

---

## 6. Imports and Documents

Stock lists, opening-stock sheets, supplier invoices and similar documents must reuse Universal Document Intelligence.

Required pattern for consequential imports:

**file/photo → interpretation → preview → clarification if needed → confirmation → validated inventory update**.

Do not create isolated import truth that bypasses inventory audit/idempotency controls.

---

## 7. POS Relationship

Inventory must work without POS.

Where a standard POS bridge is enabled, POS data may support sales and stock intelligence.

Custom client-specific POS modification inside Smart Business core is rejected; use standard integration/extension boundaries.

Conflicts between POS, manual, document and conversational stock updates must be resolved through explicit precedence/reconciliation rules in the EIS, not silent guessing.

---

## 8. Ledger Relationship

Stock and Ledger should link business events where appropriate without duplicating them.

Examples:

- confirmed purchase may create/associate inventory movement and Ledger expense;
- confirmed sale/order may affect stock through the approved business-event path;
- stock correction should not fabricate a financial transaction;
- supplier payment state is distinct from goods receipt state.

---

## 9. Manager vs Ledger Packaging

### Manager

Stock Intelligence is included as Manager operational capability.

### Ledger

Smart Stock Assistant is the add-on path for deeper stock intelligence.

Packaging must not create duplicate inventory engines. Both use the same shared stock foundation and permissions.

---

## 10. Roles and Permissions

### Owner

Full authorized stock/supplier/reorder authority.

### Manager

Delegated operational authority only; may review stock and act on reorder workflows where explicitly permitted.

### Employee / Staff

May perform scoped stock operations if permitted, but cannot see Owner financial intelligence by default.

### Supplier

Receives only communication required for the approved supplier/order workflow.

---

## 11. AI Behaviour

AI may:

- summarize stock position;
- identify low/slow/expiry-risk items from authorized facts;
- suggest reorder quantities/ranges where evidence supports it;
- suggest supplier candidates from merchant history;
- explain anomalies neutrally;
- prepare drafts and ask clarification.

AI must not:

- invent stock quantities;
- infer theft/fraud from discrepancies;
- silently overwrite stock history;
- place supplier orders without confirmation/delegated authority;
- expose merchant financial intelligence to staff/suppliers.

---

## 12. Shared Foundations

Reuse:

- Catalog/Product identity;
- Business Memory;
- Permission Engine;
- Reminder Engine;
- Customer/Supplier identity;
- Universal Document Intelligence;
- Conversation/Notification Engine;
- audit/idempotency foundation;
- POS integration layer where enabled.

---

## 13. Failure and Exception Handling

Handle at minimum:

- duplicate movement/import;
- unknown item;
- ambiguous item name;
- unit mismatch;
- negative/insufficient stock according to approved policy;
- correction conflicts;
- supplier unavailable;
- supplier/order communication failure;
- POS/manual conflict;
- document parsing conflict;
- retry/idempotency;
- expired/invalid delegated automation rule.

A stock ambiguity should block only the uncertain update, not unrelated business operations.

---

## 14. Privacy and Dignity

Stock intelligence must report facts and signals without accusation.

Counter/POS discrepancy, wastage or shrinkage may be surfaced for review but must not become automated misconduct judgement or staff punishment.

---

## 15. Acceptance Scenarios

Future verification should prove:

- opening stock and normal movement history;
- document/CSV import with preview and idempotency;
- correction with audit trail;
- low-stock awareness;
- expiry/slow-moving signal where source data supports it;
- supplier identity/history;
- reorder suggestion requiring confirmation;
- bounded standing rule executing only within stored authority;
- POS bridge contribution without custom core modification;
- staff permission boundaries;
- neutral handling of stock discrepancy;
- cross-business isolation.

---

## 16. Non-goals / Rejected Historical Behaviour

Rejected:

- blind automatic supplier procurement;
- duplicate stock engines for Ledger vs Manager;
- custom client POS changes inside core;
- AI accusation of theft/fraud from stock anomalies;
- silent precedence guessing among conflicting sources;
- historical fixed numeric thresholds treated as Product Truth without current validation.

---

## 17. Dependencies

The complete feature depends on mature Permissions/Business Isolation, shared identity, Reminder/Delegated Automation for standing rules, Universal Document Intelligence for imports, and the standard POS integration layer where used.

---

## 18. Completion Gate

Stock/Supplier/Reorder is complete only when inventory, supplier memory, advisory reorder, delegated automation boundaries, integrations and auditability work as one verified feature family rather than disconnected modules.
