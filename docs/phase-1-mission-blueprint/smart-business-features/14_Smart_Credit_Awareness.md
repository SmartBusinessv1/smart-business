# Smart Business Feature Definition — Smart Credit Awareness

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **BUILD NOW**  
**Commercial availability:** Ledger + Manager core  
**Authority boundary:** Smart Credit warns and informs. The Owner decides whether to extend, change or refuse credit.

---

## 1. Feature Identity

Smart Credit Awareness helps a merchant remember who owes money, how much is outstanding, how repayments change that balance, and when a customer relationship deserves attention.

It is an awareness and memory capability, not an autonomous credit-control authority.

---

## 2. Founder Problem Statement

Neighborhood merchants often extend informal credit based on trust and memory.

Problems arise when:

- multiple small balances accumulate;
- repayments are not linked correctly;
- Owner/staff forget prior credit;
- one customer crosses a comfort threshold;
- collection follow-up becomes awkward;
- the system treats a trusted relationship like a bank underwriting model.

Smart Business should create clarity without humiliating customers or taking the Owner's decision away.

---

## 3. Lighthouse Principles

- AI Assistant, Not AI Judge.
- Credit relationship belongs to merchant and customer.
- Warn, do not automatically block by default.
- Preserve dignity in collection language.
- Human override/decision is explicit and auditable.
- Repayment must reduce the correct credit relationship.
- Do not fabricate customer risk scores.

---

## 4. Customer Credit Identity

Credit is linked to the correct merchant-scoped customer identity.

The system must avoid duplicate balances caused by:

- name spelling variations;
- phone-number variants;
- duplicate customer creation;
- channel-specific identities.

Where identity is ambiguous, ask rather than silently assigning credit to the wrong customer.

---

## 5. Core Credit Facts

The feature should preserve, as applicable:

- customer identity;
- credit transaction(s);
- amount;
- date/time;
- description/items where relevant;
- due/expected follow-up information if used;
- outstanding balance;
- repayment events;
- owner-defined threshold/limit where configured;
- owner decisions/overrides;
- reminder/collection history;
- linked payment evidence where available;
- actor/audit history.

---

## 6. Credit Recording

Credit may be recorded through approved Ledger input paths such as:

- text;
- voice;
- manual workspace entry;
- receipt/document workflow where appropriate;
- order/delivery workflow where credit is permitted.

A credit entry must be confirmed accurately when consequential facts are ambiguous.

---

## 7. Repayment

Repayment is a distinct current Ledger state.

When a repayment is recorded:

- identify the correct customer/credit relationship;
- preserve repayment amount/date/source;
- update outstanding balance consistently;
- avoid creating duplicate income/credit facts;
- preserve correction/audit linkage.

If multiple plausible balances/credits could receive the payment, require human confirmation.

---

## 8. Merchant-defined Thresholds / Limits

An Owner may configure a credit comfort threshold or limit.

The threshold is an awareness input.

When a customer approaches/exceeds it, Smart Business should:

- show current outstanding balance/context;
- make the Owner aware at a useful time;
- optionally suggest follow-up;
- allow Owner decision.

The product must not convert an old fixed value such as ₹5,000 into universal Product Truth.

---

## 9. Warn — Do Not Block by Default

Current Product Truth rejects hard autonomous credit blocking as the default behavior.

Example:

> Anwar's outstanding credit is ₹6,200, above your ₹5,000 awareness limit. Would you like to continue, reduce the amount, or review his history?

The Owner may:

- approve the sale/credit;
- decline;
- adjust amount;
- grant grace;
- change the threshold;
- review customer history.

The system records the material decision where relevant.

---

## 10. Collection Follow-up

Smart Business may help the Owner remember/follow up on outstanding credit through the shared Reminder and Notification foundations.

Collection communication should be respectful and merchant-controlled.

The system must not:

- shame the customer;
- threaten them;
- send confrontational messages autonomously;
- disclose their balance to unrelated people.

---

## 11. Ask CFO Relationship

Ask CFO may answer authorized questions such as:

- `Who owes me the most?`
- `How much credit is outstanding?`
- `Which balances are old?`
- `How much was repaid this week?`

Ask CFO may identify patterns and suggest review, but cannot change limits, block customers or send collection messages by itself.

---

## 12. Daily Intelligence Relationship

Daily Intelligence may surface useful Owner-only credit awareness, such as:

- total outstanding credit;
- meaningful change since prior period;
- customers crossing Owner-configured thresholds;
- repayments received;
- follow-ups due.

Staff must not receive Owner-wide customer-credit intelligence by default.

---

## 13. Orders / Delivery Relationship

Where Order & Delivery uses credit/COD/business payment states:

- credit status must link to the same customer identity;
- one order event must not create duplicate credit facts;
- delivery completion and payment/credit state remain distinct facts where necessary.

---

## 14. Users and Permissions

### Owner

Can view/manage credit awareness, thresholds, decisions and history.

### Manager

Only Owner-delegated credit operations/visibility.

### Employee

May record permitted credit transactions or repayments if explicitly allowed, but does not receive Owner-wide credit analytics by default.

### Customer

May receive only merchant-approved communications relevant to their own relationship.

---

## 15. Human Language and Channels

Credit input/review should work through WhatsApp and Conversation Workspace in English, Malayalam and Manglish.

Natural local expressions for `kadam`, `balance`, `paid`, `gave`, etc. should be interpreted carefully, with clarification where meaning is consequentially ambiguous.

---

## 16. Confirmation and Clarification

Clarify before writing when:

- customer identity is ambiguous;
- amount is unclear;
- credit vs cash/paid state is unclear;
- repayment could match multiple customers/credits;
- a threshold override is unclear.

Never guess a financial link to keep the flow moving.

---

## 17. Corrections and Audit

Consequential credit/repayment corrections must preserve prior truth through the Ledger correction/audit model.

Do not silently erase:

- original amount;
- repayment linkage;
- Owner override;
- reminder/collection history.

---

## 18. Error and Exception Behavior

Handle:

- duplicate customer identity;
- duplicate credit entry;
- repayment greater than expected balance;
- missing/ambiguous customer;
- stale balance during confirmation;
- permission revoked before write;
- reminder delivery failure;
- payment evidence mismatch.

A credit ambiguity should block only the uncertain write/link, not unrelated merchant operations.

---

## 19. Privacy and Dignity

- Credit information is business-sensitive.
- Staff views are permission-scoped.
- Customer balances are not public.
- No accusation or shame language.
- No model-generated moral judgement about whether a customer is 'good' or 'bad'.

---

## 20. Shared Foundations to Reuse

Reuse:

- Ledger / Business Memory;
- Customer Identity;
- Permission Engine;
- Human Language Layer;
- Reminder Engine;
- Notification foundation;
- Ask CFO;
- Daily Intelligence;
- Payment Verification where applicable;
- audit/idempotency.

---

## 21. Explicit Non-goals

- automatic hard credit blocker by default;
- underwriting/lending score;
- public customer reputation system;
- confrontational automated collection;
- fixed universal ₹5,000 limit;
- duplicate customer-credit database separate from Ledger/customer identity.

---

## 22. Acceptance Scenarios

A future Blueprint/EIS must verify at least:

1. Credit entry creates correct customer balance.
2. Repayment reduces correct balance without duplicate revenue.
3. Ambiguous customer triggers clarification.
4. Owner-configured threshold produces warning/context, not automatic block.
5. Owner can approve/decline/adjust/grant grace.
6. Material override is auditable.
7. Employee can record credit only when permitted and cannot see Owner-wide analytics by default.
8. Ask CFO retrieves accurate credit facts without write authority.
9. Respectful collection reminder requires approved workflow.
10. Cross-business credit leakage is blocked.
11. Correction preserves audit history.

---

## 23. Historical Corrections / Superseded Behavior

Superseded:

- default hard block when limit exceeded;
- fixed universal historical credit limit;
- silent warning that does not reach Owner usefully;
- automated confrontational collection language.

Preserved: customer credit memory, thresholds as awareness, repayment tracking and Owner authority.

---

## 24. Provenance and Hydration Coverage

Reconciled from Founder-origin Section 5 and Section 7; planning/project-room credit evolution; Final Feature Reconciliation Register §21 and §§29–30; current Source 11 Smart Credit rule.

**Hydration result:** all current Founder-origin Smart Credit behaviors and corrections assigned to this feature are represented here or delegated to Ledger/Reminder/Payment shared contracts.

---

## 25. Completion Gate

Complete only when customer identity, credit/repayment memory, thresholds, Owner decision flow, reminders, permissions, audit/correction, channel/language behavior and runtime acceptance are proven end-to-end.
