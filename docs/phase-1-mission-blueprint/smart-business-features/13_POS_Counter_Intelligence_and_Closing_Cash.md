# Smart Business Feature Definition — POS Connection, Counter Intelligence & Closing Cash

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **BUILD NOW**  
**Commercial availability:** Smart Business Manager core / standard integration layer  
**Authority boundary:** POS data may inform Smart Business. AI may observe and suggest review; it must not accuse, punish or disrupt checkout by autonomous judgement.

---

## 1. Feature Identity

This feature lets Smart Business work beside an existing standard POS, ingest permitted sales/counter signals, support stock and operational intelligence, and help the Owner close the day with factual reconciliation.

Smart Business must respect merchants who already use a POS. The product enriches the existing workflow instead of demanding replacement.

---

## 2. Founder Problem Statement

A merchant may already have sales flowing through a POS but still lack:

- connected Business Memory;
- meaningful stock/counter insight;
- visibility into unusual void/discount patterns;
- clear closing cash reconciliation;
- a conversational explanation of what deserves review.

The product should add clarity without turning AI into a fraud judge.

---

## 3. Lighthouse Principles

- Respect existing merchant tools.
- Standard bridge, not forced replacement.
- AI Assistant, Not AI Judge.
- Observe/report facts; Owner interprets meaning.
- No checkout punishment from model suspicion.
- Preserve auditability and source provenance.
- Custom client-specific core POS modification is rejected; adapt at integration/extension edges.

---

## 4. Standard POS Bridge

The approved product direction includes a standard POS integration/bridge.

The bridge should support, where compatible and authorized:

- sales ingestion;
- transaction/reference identity;
- product/item mapping;
- quantity/price/discount/void information where the POS exposes it;
- payment-method information where available;
- timestamp/counter/operator identifiers where permitted;
- stock impact where configured;
- closing/reconciliation support.

A manual CSV/file import may coexist as import/fallback, but it must not be used to silently delete the committed standard POS bridge from product scope.

---

## 5. Integration Boundary

Smart Business must not implement bespoke client-specific changes inside the core platform merely to accommodate one POS.

Use:

- standard connectors/adapters;
- documented APIs/files/webhooks where available;
- extension/integration layers;
- mapping/configuration at the edge.

If a POS cannot support the standard bridge safely, classify the integration limitation rather than corrupting core architecture.

---

## 6. POS Data and Business Memory

Imported POS events must preserve source identity so the system can distinguish:

- native/manual Smart Business record;
- POS-origin sale/event;
- correction/reversal;
- duplicate/retry;
- reconciliation link.

POS ingestion must not create duplicate revenue when the same event is later encountered through another source.

---

## 7. Inventory Relationship

For Manager, POS sales may drive stock movement where:

- product mapping exists;
- units/quantities are reliable;
- the event is trusted;
- the stock path is configured.

Conflicts between POS, manual stock, imports or documents must not be silently guessed. The system should preserve evidence and ask/reconcile according to the Stock/Supplier/Reorder contract.

---

## 8. Counter Intelligence

Smart Business may identify factual patterns such as:

- voids;
- unusually high discount activity;
- repeated reversals;
- unexpected price overrides;
- unusual transaction timing/frequency;
- closing-cash variance;
- other evidence-backed counter signals.

The product should present these as **review signals**, not accusations.

Preferred behavior:

> Please review this counter activity. These voids/discounts are higher than the recent pattern.

Not:

> This employee is stealing.

---

## 9. Human Context

Observable anomalies can have legitimate explanations.

Examples:

- Owner-approved festival discount;
- damaged-product adjustment;
- customer relationship discount;
- POS correction;
- staff action on Owner instruction.

The product should allow authorized human context to be attached without deleting the original event history.

---

## 10. Closing Cash

Manager should support end-of-day/shift closing clarity using available evidence, including as applicable:

- POS-reported cash sales;
- other payment methods;
- cash opening/closing information;
- recorded expenses or cash movements;
- refunds/voids/discount adjustments;
- actual cash count entered by authorized user;
- resulting variance.

A variance is a fact to review, not automatic proof of misconduct.

---

## 11. Daily Intelligence Relationship

Night Closing Intelligence may consume approved POS/counter/closing-cash data for the Owner/authorized Manager.

Examples:

- sales summary;
- cash variance;
- unusual void/discount pattern;
- stock-impact signal;
- items requiring review tomorrow.

Employees must not receive Owner-level closing intelligence merely because they used the POS.

---

## 12. Ask CFO Relationship

Ask CFO may reason over authorized POS and closing data.

Examples:

- `Why was cash lower than POS sales yesterday?`
- `Which discounts changed most this week?`
- `Did a stock item move unusually?`

Ask CFO remains read-only and must distinguish fact from hypothesis.

---

## 13. Users and Permissions

### Owner

Full authorized visibility and review.

### Manager

Operational visibility only within Owner-delegated scope. No automatic access to Owner-only intelligence.

### Employee/counter staff

May operate permitted workflows and see only role-appropriate information. A staff user should not automatically see anomaly/risk analysis about other staff or Owner analytics.

### Platform/support

No routine merchant financial browsing. Any support access follows purpose-limited governance.

---

## 14. Human Language and Channels

Owners may ask about POS/counter/closing behavior through WhatsApp or Conversation Workspace in English, Malayalam or Manglish.

The conversational surface must reuse the same POS data and permission rules as the dashboard.

---

## 15. Confirmation and Consequential Actions

POS intelligence may recommend review or prepare actions, but must not autonomously:

- lock a register;
- suspend an employee;
- reverse a transaction;
- change prices;
- block checkout;
- deduct wages;
- accuse a person.

Any consequential correction/action follows the appropriate human-confirmed feature workflow.

---

## 16. Error and Exception Behavior

Handle:

- POS connection unavailable;
- duplicate event;
- missing product mapping;
- incompatible unit/price;
- out-of-order event;
- correction/reversal;
- partial sync;
- stale integration credentials;
- closing count missing;
- variance unresolved;
- integration source conflict.

A POS outage must not stop manual Smart Business operation where safe.

---

## 17. Data and Audit Requirements

Preserve, as applicable:

- POS/integration identity;
- external event/reference ID;
- business/product/customer mapping where relevant;
- raw/normalized event facts;
- ingestion timestamp/source;
- dedupe/idempotency state;
- correction/reversal linkage;
- counter/operator identity where permitted;
- review signal and explanation;
- authorized human context;
- closing-cash inputs/results;
- audit history.

---

## 18. Privacy and Dignity

- No accusation from pattern alone.
- No punitive surveillance framing.
- Staff data is purpose-limited.
- Merchant-specific data remains business-scoped.
- Counter intelligence should support fair review, not hidden judgement.

---

## 19. Shared Foundations to Reuse

Reuse:

- Business Memory;
- Catalog/Product identity;
- Inventory movements;
- Permission Engine;
- Human Language Layer;
- Ask CFO;
- Daily Intelligence;
- audit/idempotency;
- integration/extension layer;
- Notification foundation where needed.

---

## 20. Explicit Non-goals

- custom client-specific POS modifications in core;
- replacing all POS systems;
- AI fraud verdicts;
- hardware/register lockout by AI judgement;
- fixed historic printer-spool mechanism as Product Truth;
- fixed universal discount threshold such as 15%;
- CSV-only downgrade of the committed standard bridge.

---

## 21. Acceptance Scenarios

A future Blueprint/EIS must verify at least:

1. Standard POS event ingests with stable external identity.
2. Retry/duplicate does not duplicate revenue/stock.
3. Product mapping drives valid stock movement where configured.
4. Unmapped/conflicting event is surfaced without guessing.
5. Void/discount pattern produces neutral review signal, not accusation.
6. Authorized human context can be added without erasing raw event.
7. Closing cash computes factual variance from approved inputs.
8. Ask CFO explains POS/closing data without write authority.
9. Employee cannot access Owner-only risk/profit intelligence.
10. POS outage leaves safe manual workflows available.
11. Custom integration requirement remains at extension edge.

---

## 22. Historical Corrections / Superseded Behavior

Superseded:

- AI labelling counter activity theft/fraud;
- register/keyboard lockout as AI punishment;
- custom POS core modification;
- historical fixed trigger thresholds;
- printer-spool interception as mandatory implementation.

Preserved: standard POS bridge, respectful counter intelligence and closing-cash clarity.

---

## 23. Provenance and Hydration Coverage

Reconciled from Founder-origin Section 4 and Section 7; planning/project-room POS evolution; Final Feature Reconciliation Register §16, §17 and §§29–30; Source 01/11 standard-POS and human-authority rules.

**Hydration result:** current approved POS/Counter/Closing Cash behaviors, including the no-accusation and no-custom-core corrections, are represented in this contract.

---

## 24. Completion Gate

Complete only when the standard bridge, dedupe/audit, stock relationship, counter review signals, closing cash, role permissions, failure containment, Ask CFO/Daily Intelligence consumption and runtime acceptance are proven end-to-end.
