# Smart Business Feature Definition — Ledger & Business Memory

**Status:** MATURE RECONCILED CONTRACT  
**Build commitment:** **BUILD NOW**  
**Commercial availability:** Smart Business Ledger + Smart Business Manager core  
**Authority boundary:** Current Founder direction, Source 01, Source 11 and Final Feature Reconciliation control this contract.

---

## 1. Feature Identity

Smart Business Ledger is the core **AI Business Memory and Daily Clarity System**.

It allows a merchant to record, retrieve, correct and understand business activity without becoming a software operator.

The Ledger is not just a transaction form. It is the durable business-memory layer used by conversation, Ask CFO, Daily Intelligence, reports, reminders and other authorized Smart Business features.

---

## 2. Founder Problem Statement

Kerala merchants often run their businesses through a mixture of:

- memory;
- notebooks;
- WhatsApp messages;
- paper bills and receipts;
- Excel/CSV files;
- POS systems;
- verbal instructions to staff;
- informal credit and repayment records.

Smart Business must respect those habits and convert useful business events into structured, searchable memory with less mental load.

The product must not force an ERP-first operating style merely because structured data exists underneath.

---

## 3. Lighthouse Principle

Ledger behavior must preserve:

- humans serving humans;
- AI Assistant, Not AI Judge;
- merchant decision ownership;
- clear confirmation of consequential records;
- auditability instead of silent history rewriting;
- simplicity without sacrificing financial integrity;
- respectful coexistence with existing notebooks, POS and spreadsheets.

---

## 4. Core Business States

The reconciled Ledger must preserve four core financial states:

1. **Income** — money earned/received by the business.
2. **Expense** — money spent by the business.
3. **Credit** — an amount owed to or by a relevant party, according to the approved workflow.
4. **Repayment** — settlement against an existing credit relationship.

Implementation may use richer internal event types, but must not reduce current product behavior to a permanent sale/purchase-only model.

---

## 5. Supported Input Paths

Ledger recording must be available through the approved shared conversation and document foundations.

### Text

Examples:

- `Sold goods to Rahman for ₹1,250 cash.`
- `Paid ₹800 to ABC Traders for supplies.`
- `Shameer owes ₹2,000.`
- `Received ₹500 from Shameer against his credit.`

### Voice

The same business facts may be spoken naturally in English, Malayalam or Manglish through Basic Voice.

### Images / receipts / invoices

Use Universal Document Intelligence:

**capture → interpret → preview → clarify where needed → confirm → validated Ledger update**.

### Excel / CSV / PDF

Bulk or structured document input must reuse Universal Document Intelligence and must not create a separate financial-import truth system.

### Manual visual workspace

Forms may exist as a practical alternative, but they are a visual surface over the same Ledger truth and permission model.

---

## 6. Immediate Confirmation

After a consequential Ledger write, Smart Business must provide a human-readable confirmation that reflects the state actually stored.

A confirmation should make clear, as relevant:

- event type;
- amount;
- party;
- date/time;
- payment method;
- purpose/description;
- credit/repayment linkage;
- whether any information remains uncertain.

A model-generated interpretation is not itself proof that storage succeeded.

---

## 7. Clarification Rules

Smart Business must ask the smallest useful clarification when a consequential record is ambiguous.

Examples include:

- unclear amount;
- multiple plausible customers/suppliers;
- unclear whether an amount is paid or still owed;
- uncertain transaction type;
- ambiguous date;
- conflicting document values;
- plausible duplicate entry.

The system must not fabricate missing facts merely to complete a transaction.

---

## 8. Correction and Audit History

Merchants must be able to correct mistakes conversationally or through the visual workspace.

Examples:

- wrong amount;
- wrong party;
- wrong payment method;
- wrong date;
- wrong description;
- incorrect credit/repayment association.

Corrections must preserve:

- original record identity;
- original values;
- updated values;
- actor;
- time;
- reason/context where required;
- links to consequential downstream effects where applicable.

Financial correction must not silently destroy prior truth.

---

## 9. Searchable Business Memory

Authorized users should be able to retrieve business history naturally by:

- date or period;
- customer or supplier;
- category/purpose;
- payment method;
- amount range where useful;
- credit/repayment state;
- linked document;
- product or stock relationship where available.

Examples:

- `How much did I spend on bakery supplies last month?`
- `Show payments to ABC Traders in August.`
- `What does Shameer still owe me?`
- `Find the receipt for that mixer purchase.`

Conversational retrieval and dashboard/report retrieval must read from the same underlying business truth.

---

## 10. Reports and Exports

Ledger must support permission-scoped summaries and exports including, where approved:

- period summaries;
- income/expense views;
- customer/supplier views;
- credit/repayment views;
- CSV/Excel/PDF export.

Exports must remain consistent with source totals and must not create an alternate financial truth.

---

## 11. Roles and Permissions

### Owner

May access full authorized Ledger records, corrections, exports and owner financial intelligence.

### Manager

May receive delegated operational and financial access appropriate to the Owner's permissions. Manager access does not automatically equal Owner access.

### Employee / Staff

May add or view only permitted operational records. Staff must not receive Owner profit intelligence, Ask CFO or unrestricted analytics by default.

### Customer / Supplier / Delivery Staff

No general Ledger access. They may participate only in specific workflows that expose the minimum relevant information.

Every record remains business-scoped.

---

## 12. WhatsApp and Conversation Workspace

Ledger must behave consistently across:

- WhatsApp;
- the Smart Business Conversation Workspace;
- approved visual workspace flows.

Channels must not have separate transaction semantics, separate permissions or separate Business Memory.

A WhatsApp outage must not make the underlying Ledger unavailable through the web app or background services.

---

## 13. Relationship to Ask CFO

Ask CFO may read authorized Ledger information to explain patterns, facts, risks and opportunities.

Ask CFO remains read-only intelligence.

If an Owner chooses to continue an Ask CFO insight into a reminder or other action, the action must pass through the relevant execution/confirmation service rather than allowing Ask CFO to mutate Ledger state directly.

---

## 14. Relationship to Daily Intelligence

Daily Intelligence consumes authorized Ledger events to provide proactive clarity at the current Founder-approved rhythm:

- 7:00 AM Morning Business Briefing;
- 10:30 AM Business Pulse Check;
- 10:00 PM Night Closing Intelligence.

Ledger is the business-memory source; Daily Intelligence is a scheduled clarity layer over that source.

---

## 15. Relationship to Other Features

Ledger should integrate with shared foundations rather than duplicate them:

- Universal Document Intelligence;
- Human Language Layer;
- Basic Voice / Voice Plus;
- Permission Engine;
- Conversation Engine;
- Smart Reminder Engine;
- Customer/Supplier identity;
- Smart Credit Awareness;
- Payment Verification / Bank Reconciliation;
- Stock / Supplier / Reorder Intelligence;
- POS bridge where enabled;
- Smart Order & Delivery;
- Staff / HR where authorized.

---

## 16. AI Behaviour

AI may:

- interpret natural-language business events;
- structure drafts;
- identify likely parties using authorized business context;
- ask clarification;
- summarize history;
- identify possible duplicate/conflicting input;
- explain what was recorded.

AI must not:

- invent amounts, parties or payment status;
- treat due date as proof of payment;
- guess among plausible payment matches;
- expose Owner intelligence to unauthorized users;
- silently overwrite financial history;
- create permission through inference;
- accuse users of wrongdoing from anomalous data.

---

## 17. Failure and Exception Principles

The Ledger must handle at minimum:

- duplicate submissions;
- network retry/idempotency;
- conflicting document data;
- ambiguous identity;
- invalid amount/date;
- correction conflicts;
- failed downstream notification;
- stale linked records;
- unauthorized write/read attempts;
- cross-business access attempts.

An uncertain or failed write should stop that write safely. It must not block unrelated business operations.

---

## 18. Privacy and Integrity

Ledger data is sensitive merchant information.

Requirements include:

- strict business isolation;
- permission-scoped access;
- auditable consequential corrections;
- purpose-limited support access;
- no broad routine Super Admin visibility into merchant financial detail;
- no unsupported financial certainty claims.

---

## 19. Acceptance Scenarios

Future Blueprint/EIS and runtime verification should prove at least:

- text income/expense recording;
- credit and repayment recording;
- voice-created Ledger event;
- image/document-created draft with preview/confirmation;
- ambiguous-input clarification;
- duplicate/retry protection;
- correction with durable audit history;
- period/party search;
- receipt/document retrieval linkage;
- permission-scoped staff contribution;
- Owner-only financial intelligence boundary;
- CSV/Excel/PDF export consistency;
- identical business semantics across WhatsApp and Conversation Workspace;
- cross-business isolation.

---

## 20. Non-goals / Rejected Historical Behaviour

This contract does not authorize:

- destructive correction that erases prior truth;
- permanent two-type income/expense-only or sale/purchase-only product scope;
- unrestricted generated SQL against production;
- employee access to Owner intelligence by default;
- AI-autonomous financial decision authority;
- provider/model/table names from historical architecture as product requirements.

---

## 21. Historical Corrections Preserved

Historical parser schemas, fixed providers, old timing assumptions and implementation constants remain useful provenance only.

Current product truth is the reconciled business behavior above.

---

## 22. Implementation Dependency Rule

Existing transaction, correction, inventory/catalog and audit foundations should be reused where aligned.

Future implementation must **extend rather than destructively replace** accepted integrity work unless a later EIS proves replacement is necessary and migration-safe.

---

## 23. Completion Gate

Ledger is complete only when the approved Business Memory behavior—not merely a transaction form—has passed the governed Product Mission lifecycle, runtime verification and acceptance.
