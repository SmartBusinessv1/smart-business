# Smart Business Feature Definition — Payment Verification & Bank Reconciliation

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **BUILD NOW**  
**Commercial availability:** Ledger + Manager core financial-integrity capability  
**Authority boundary:** Smart Business may ingest and match trustworthy payment evidence. Ambiguity must be surfaced for human confirmation; the system must never guess among plausible financial matches.

---

## 1. Feature Identity

Payment Verification & Bank Reconciliation determines whether a recorded payment is supported by authoritative evidence and links that evidence to the correct existing business record without duplicating revenue or silently rewriting facts.

This feature includes the historical Bank Email Sync direction as one possible secure evidence-ingestion path, while keeping provider/transport implementation flexible.

---

## 2. Founder Problem Statement

Merchants may have:

- Ledger entries marked paid;
- UPI/bank/card evidence arriving separately;
- bank emails/notifications;
- screenshots or receipts;
- cash/COD events;
- multiple transactions with similar amounts;
- missing Ledger records discovered from bank evidence.

Without reconciliation, Smart Business can either falsely trust an unverified claim or create duplicate revenue. The feature exists to protect financial truth.

---

## 3. Lighthouse Principles

- Never fabricate payment certainty.
- Preserve both business record and external evidence.
- Strong match verifies; it does not duplicate the transaction.
- Ambiguous match requires human confirmation.
- Narrow uncertainty blocks only the uncertain link/write.
- Auditability over silent overwrite.
- Provider choice is implementation detail; authenticity and integrity are product requirements.

---

## 4. Payment Verification States

A payment/business record may need states such as:

- pending/unverified;
- evidence received;
- matched/verified;
- ambiguous/review required;
- mismatched;
- unlinked evidence;
- reversed/invalidated where authoritative evidence supports it.

Exact enum names are implementation choices. The durable behavior is that verification state is explicit and traceable.

---

## 5. Evidence Sources

Approved evidence may come from secure/authorized sources such as:

- bank/payment provider API/webhook;
- authenticated bank email ingestion;
- payment gateway record;
- verified settlement file;
- merchant-uploaded evidence requiring appropriate review;
- COD/order-delivery evidence where the workflow supports it;
- other approved financial integrations.

An unauthenticated message or arbitrary text claim must not automatically become authoritative payment evidence.

---

## 6. Evidence Ingestion

Ingestion should preserve:

- business scope;
- source/provider;
- external reference/UTR where available;
- amount;
- direction;
- timestamp;
- payer/payee/account hints where permitted;
- raw evidence/reference sufficient for audit;
- ingestion time;
- authenticity/validation state;
- dedupe/idempotency key.

Sensitive financial evidence must follow current privacy/security/retention rules.

---

## 7. Matching Principles

Matching may use reliable signals such as:

- amount;
- reference/UTR;
- timestamp/time window;
- direction;
- customer/supplier/account identity;
- payment method;
- linked order/credit context;
- provider-specific identifiers.

Historical fixed formulas/windows (for example five minutes or 24 hours) are implementation provenance, not immutable Product Truth.

Matching logic should be deterministic/idempotent where possible and explainable enough for human review.

---

## 8. Strong Match

When evidence strongly matches one existing record:

- link the evidence to that record;
- mark/derive verification state appropriately;
- preserve the original transaction identity;
- do not create a duplicate sale/income/payment;
- preserve source/reference/audit history;
- notify/surface success where useful.

Verification is a property/link of the existing business truth, not a second financial transaction.

---

## 9. Ambiguous Match

When multiple plausible records could match:

- do not choose silently;
- present the relevant candidates/context to an authorized human;
- ask for the smallest useful confirmation;
- bind the confirmation to the exact evidence/candidate state;
- revalidate state/permission before linking.

If no safe choice is made, evidence remains in review/unlinked state.

---

## 10. Mismatch

If payment evidence conflicts with a recorded amount/reference/state:

- preserve both pieces of evidence;
- show the variance;
- do not overwrite one with the other;
- allow authorized correction/review through normal Ledger/payment workflows;
- keep audit history.

---

## 11. Unlinked Evidence

Authoritative evidence may arrive without a corresponding Ledger transaction.

In that case:

- preserve it as unlinked evidence;
- surface it to the Owner/authorized user;
- allow classification/linking or creation through a governed flow;
- do not auto-create income/expense if business meaning is ambiguous.

---

## 12. Duplicate Evidence and Idempotency

The same bank/provider event may arrive more than once.

The system must prevent:

- duplicate evidence records where avoidable;
- duplicate verification actions;
- duplicate revenue/payment entries;
- repeated notifications/actions caused by retries.

External reference/provider identity should support idempotent processing.

---

## 13. Reversals / Corrections

If authoritative evidence later changes (for example reversal/failure/chargeback where applicable), the product must preserve the history and update verification state through an auditable path.

Do not silently erase the prior verified state.

Ledger correction rules continue to apply to consequential business-record changes.

---

## 14. Smart Credit Relationship

Repayments/customer credit may use Payment Verification to support whether money was actually received.

A verified bank event should link to the correct repayment/credit relationship without:

- duplicating income;
- reducing the wrong customer's balance;
- guessing when multiple matches exist.

---

## 15. Order & Delivery / COD Relationship

COD collection and delivery completion are related but distinct facts.

Where COD evidence is recorded:

- expected amount;
- collected amount;
- delivery proof;
- Ledger/payment record;
- verification state

must link consistently without duplicate financial truth.

---

## 16. Ask CFO and Daily Intelligence

Ask CFO/Daily Intelligence may report authorized payment/reconciliation facts such as:

- unverified payments;
- mismatches;
- unlinked evidence;
- verified receipts;
- ageing review queue.

They must not convert uncertainty into certainty.

---

## 17. Users and Permissions

### Owner

Default authority to review/resolve financial reconciliation.

### Manager

Only delegated financial/reconciliation scope.

### Employee

May record permitted operational payment information but should not automatically receive business-wide bank/reconciliation intelligence.

### Platform/support

No routine access to merchant banking/financial evidence. Support access follows separate purpose-limited governance.

---

## 18. Channels and Language

Authorized review/clarification may occur through Workspace/WhatsApp where secure and suitable, using English/Malayalam/Manglish.

Sensitive evidence should not be exposed in an inappropriate channel merely for convenience.

---

## 19. Confirmation and Authority

Human confirmation is required when:

- multiple plausible matches exist;
- a mismatch correction changes business truth;
- unlinked evidence is being classified into a consequential record;
- current authority/record state requires review.

Confirmation must bind exact evidence/record/action and current actor.

---

## 20. Failure Containment

If reconciliation is unavailable or ambiguous:

- stop only the uncertain link/write;
- preserve evidence safely;
- show recovery/review path;
- allow unrelated Ledger, inventory, orders and other safe operations to continue.

A bank integration outage must not globally freeze Smart Business.

---

## 21. Error and Exception Behavior

Handle:

- provider outage;
- malformed/unsupported evidence;
- authenticity failure;
- duplicate event;
- multiple candidates;
- no candidate;
- amount/reference mismatch;
- stale candidate state;
- permission revoked during review;
- reversal/chargeback where relevant;
- channel notification failure.

---

## 22. Privacy and Security

- Authenticate/validate evidence source where authoritative status is claimed.
- Encrypt/protect sensitive financial information according to architecture policy.
- Business isolation is mandatory.
- Limit staff/platform exposure.
- Preserve audit without unnecessary disclosure.
- Never accept an unauthenticated arbitrary message as authoritative bank evidence.

---

## 23. Shared Foundations to Reuse

Reuse:

- Ledger / Business Memory;
- Customer/Supplier identity;
- Permission Engine;
- audit/idempotency;
- Notification foundation;
- Smart Credit;
- Order & Delivery financial linkage;
- Ask CFO/Daily Intelligence read paths.

---

## 24. Explicit Non-goals

- guessing among plausible matches;
- duplicate revenue creation from bank evidence;
- permanent dependence on SendGrid or any one provider;
- immutable historic five-minute/24-hour matching formula;
- global system lock on reconciliation failure;
- accepting unauthenticated evidence as authoritative.

---

## 25. Acceptance Scenarios

A future Blueprint/EIS must verify at least:

1. Strong unique match verifies existing transaction without duplication.
2. Duplicate provider event is idempotent.
3. Multiple candidates require human selection.
4. No candidate becomes unlinked evidence, not fabricated transaction.
5. Mismatch preserves both facts and variance.
6. Repayment links to correct customer credit.
7. COD evidence does not duplicate Ledger revenue.
8. Permission revocation before confirmation blocks only pending link.
9. Provider outage leaves unrelated product operational.
10. Ask CFO cannot report ambiguous evidence as verified.
11. Cross-business financial evidence access is denied.
12. Reversal preserves history rather than erasing prior state.

---

## 26. Historical Corrections / Superseded Behavior

Historical implementation details retained only as provenance:

- exact five-minute/24-hour matching windows;
- UTR-specific formulas;
- SendGrid as fixed provider.

Superseded:

- guessing ambiguous matches;
- unauthenticated evidence treated as authoritative;
- reconciliation failure globally blocking unrelated work.

---

## 27. Provenance and Hydration Coverage

Reconciled from Founder-origin Section 5 Part B and Section 7; planning/project-room payment/bank-sync history; Final Feature Reconciliation Register §22 and §§29–30; current financial-integrity/security governance; Source 01/11.

**Hydration result:** all current recovered Payment Verification/Bank Reconciliation behaviors and anti-guessing corrections are represented here or delegated to Ledger/identity/permission shared foundations.

---

## 28. Completion Gate

Complete only when authenticated evidence ingestion, deterministic/idempotent matching, ambiguity review, mismatches/unlinked evidence, financial linking, permissions, audit, narrow failure containment and runtime acceptance are proven end-to-end.
