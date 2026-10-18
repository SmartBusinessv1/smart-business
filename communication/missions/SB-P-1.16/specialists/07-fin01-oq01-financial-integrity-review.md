# SB-P-1.16 — FIN-01 Financial Integrity Review

**Subject:** OQ-01 — excess repayment and persistent customer advance  
**Authority:** MC-200 / FIN-01  
**Mode:** Read-only financial-integrity and accounting-design assessment  
**Canonical repository checked:** `main@6ba24ec95d1d744578f9e8c161266c435b8fe7f2`  
**Implementation authority:** WITHHELD

## 1. Specialist conclusion

The Founder direction is **financially supportable, but it is new Product Behaviour and therefore triggers Source 18 T3**.

It resolves the previously open OQ-01/T3-W1 question in substance:

- an excess repayment must stop and clarify;
- the Owner may explicitly retain the excess;
- retained excess becomes a separate customer advance;
- the advance persists until explicitly applied or refunded;
- no automatic income, silent offset, automatic refund or AI financial decision is allowed.

The safest minimum representation is **not a negative customer receivable, not extra income, not an ordinary repayment, and not a wallet balance**.

The closest existing Ledger primitive is:

> a separately identified customer-scoped `credit` fact with direction `owed_by_business`, representing the merchant's obligation to that customer, linked to the original excess-payment evidence and the originating repayment context.

This is compatible with Contract 3's existing meaning of `credit` as an amount “owed to or by a relevant party” and with SB-P-1.14 `EIS14-LDG-02`, which already supports `owed_by_business`.

However, **application of an advance to a later customer debt cannot safely be represented by the existing SB-P-1.14 one-target repayment model alone**. It needs an SB-P-1.16 advance-application relation/event that consumes the advance and settles the selected customer obligation exactly once.

No new wallet product is required.

---

# 2. T3 / T7 / T8 screen

## T3 — TRIGGERED

Source 18 defines T3 as:

> a new product decision, or an approved-unresolved Build Plan or Phase 1 guide decision that the mission needs.

Stage 6 already classified this exact issue as OQ-01:

- `SB16-B6-05 — Lump-sum and excess repayments`
- OQ-01: whether excess repayment creates a lasting customer advance.
- Stage 6 explicitly said retained-advance behaviour would be **new product behaviour — T3-W1**.

The Stage 7 draft preserved the same boundary in §20.4.6:

- overpayment stops before commit;
- nothing is stored as an advance;
- retained advance requires the Founder decision.

Therefore MC-200's Founder direction is the substantive answer to an already identified **T3 question**.

### Governance consequence

The Founder direction should be formally recorded through the appropriate Founder Product Decision / Mission Control reconciliation mechanism before dependent Stage 7 design is treated as canonical.

This Finance review does not itself amend Product Truth.

## T7 — NOT TRIGGERED by the direction as stated

The direction does not omit, defer, reassign or reclassify an approved requirement.

It adds the previously unresolved excess-payment behaviour.

A later proposal to move customer advances to another mission, classify them as a separate product, or remove the approved capability could trigger T7.

## T8 — NOT TRIGGERED presently

I found no fundamental conflict or engineering infeasibility.

There is a **model-extension requirement**, but it can be satisfied without contradicting the existing Ledger contract if the representation respects the boundaries below.

---

# 3. Compatibility with Source 11 Product Truth

Current Source 11 states under **Smart Credit Awareness**:

- “Credit system warns.”
- “It must not block owner decisions.”
- “AI informs.”
- “Owner decides.”

That is directly compatible with the Founder direction.

The advance choice remains an Owner decision; Smart Business does not autonomously decide what happens to excess money.

Source 11 also defines Payment Verification as helping Owners confirm transactions using payment evidence. It does not define customer advances, wallets, stored value, or automatic offset.

### Finding

**Compatible, additive, not contradictory.**

The new advance behaviour must remain subordinate to:

- Owner decision ownership;
- AI advisory-only behavior;
- truthful financial records.

Nothing in Source 11 authorizes automatic advance application or wallet-style autonomous spending.

---

# 4. Compatibility with Contract 3 / SB-P-1.14 Ledger

## 4.1 Contract 3 supports the underlying obligation

Contract 3 §4 defines:

- `Credit` — “an amount owed to or by a relevant party, according to the approved workflow.”
- `Repayment` — “settlement against an existing credit relationship.”

This wording is broad enough for a customer advance obligation:

**merchant owes customer → `credit`, direction `owed_by_business`.**

No new transaction type is required merely to represent the outstanding obligation.

## 4.2 SB-P-1.14 EIS supports the direction

`EIS14-LDG-02` already requires a standalone `credit` to carry:

- `owed_to_business`; or
- `owed_by_business`.

Therefore the Ledger already has an approved directional primitive capable of expressing:

> “The business currently owes this customer ₹X.”

`EIS14-TOT-01` also guarantees that standalone credit is **not sales or income**.

That is essential for an advance.

### Mandatory invariant

A retained customer advance must:

- never increase sales;
- never increase income;
- never be relabelled as revenue merely because cash entered the business.

## 4.3 Existing repayment semantics are not enough for advance application

`EIS14-LDG-03` says each repayment references **exactly one** settlement target.

This works cleanly for:

- refunding a customer advance: a repayment can settle an `owed_by_business` credit.

It does **not** by itself solve:

> apply ₹500 of a customer advance to a later ₹1,000 credit balance.

That action simultaneously:

1. consumes ₹500 of the merchant's advance liability; and
2. settles ₹500 of the customer's receivable.

A single one-target repayment cannot represent both sides without losing one side of the accounting truth.

Creating two independent repayments would also be unsafe because it could falsely look like two payment movements.

### Finding

SB-P-1.14 does **not need to be contradicted**, but SB-P-1.16 needs an additional **advance-application relationship/event** above the existing Ledger primitives.

That event should not be presented as a new cash payment.

---

# 5. Compatibility with approved SB-P-1.16 Founder decisions

## `16:FPDR-3` — verified part-payment versus mismatch

Compatible.

That decision requires:

- only the verified amount reduces outstanding;
- remaining amount stays outstanding;
- no duplicate repayment/income;
- exactly-once financial meaning.

For an overpayment:

- the applicable outstanding portion may settle the debt;
- the excess must **not** be silently treated as another repayment against a nonexistent balance.

The new advance decision supplies the missing treatment.

## `16:FPDR-4` — factual credit awareness

Compatible.

A customer advance is a financial fact. AI may explain it but cannot decide how it is used.

A future Ask CFO answer could truthfully distinguish:

- customer owes business;
- business holds advance belonging to customer;
- net relationship if a UI chooses to show both.

It must not silently collapse those separate facts into one number if doing so hides their origin or legal/accounting meaning.

## `16:FPDR-6` — payment evidence

Compatible.

Payment evidence can prove that more money was received than the selected outstanding amount.

That does not authorize Smart Business to decide what the excess means.

The Founder direction correctly requires clarification.

## `16:FPDR-7` — Manager permissions

The direction does **not itself authorize Managers** to create, apply or refund customer advances.

Existing permission boundaries remain.

Whether any advance operation is delegable to a Manager must follow the explicit scoped-capability model and R15-11 governance.

---

# 6. Minimum safe accounting model

## 6.1 At overpayment receipt

Example:

- Customer outstanding: ₹800.
- Actual verified payment received: ₹1,000.

The product should first show:

- applicable outstanding: ₹800;
- excess: ₹200;
- explicit Owner choice required.

If Owner selects **retain excess as customer advance**:

### Financial result

**A. ₹800 — repayment**

Settles the appropriate existing customer credit target(s).

Existing repayment rules apply.

**B. ₹200 — customer advance obligation**

Represent separately as a customer-linked `credit`:

- positive amount: ₹200;
- direction: `owed_by_business`;
- party: same customer identity;
- semantic subtype/purpose: customer advance;
- origin link: same incoming payment/evidence;
- originating repayment command/reference;
- actor and confirmation record.

The advance must remain outstanding independently of the customer's receivable balance.

## 6.2 Do not represent the advance as

- `income`;
- `sale`;
- generic `repayment`;
- negative customer receivable;
- negative credit amount;
- balance correction to zero;
- hidden credit memo;
- wallet money;
- automatic prepayment against an unidentified future purchase.

---

# 7. Core accounting invariants

The following should be **mandatory safety rules**.

### FI-A1 — Conservation of received amount

For an overpayment intentionally retained:

`verified incoming amount = amount applied to existing debt + retained advance`

No amount may disappear or be counted twice.

### FI-A2 — Customer receivable cannot go negative from repayment

Repayment allocation against customer debt is capped at the valid current outstanding amount.

Excess does not create a negative receivable.

### FI-A3 — Advance is a distinct merchant obligation

An advance is money the business owes or holds for the identified customer.

It is not revenue.

### FI-A4 — Exactly-once origin

One external payment/evidence item may fund:

- repayment allocations; and
- one retained advance remainder,

but the sum of linked uses cannot exceed the authoritative received amount.

Retry/replay must return the same committed result.

### FI-A5 — Customer identity is mandatory

A persistent advance must be attached to the confirmed merchant-scoped customer identity.

An ambiguous payer/customer cannot receive an automatically assigned advance.

### FI-A6 — No automatic offset

Existing or future credit cannot consume the advance merely because the customer owes money.

Application requires a separate authorized human action.

### FI-A7 — No automatic refund

Refund requires explicit authorization.

### FI-A8 — No automatic income recognition

Neither retaining nor later applying the advance automatically creates sales/income.

The underlying sale itself remains the sale.

### FI-A9 — Immutable provenance

Advance must retain links to:

- originating payment evidence;
- originating overpayment;
- original customer;
- actor;
- confirmation;
- later applications/refunds;
- corrections/reversals.

### FI-A10 — One canonical remaining-advance calculation

Remaining advance must come from one source:

`original advance − valid applications − valid refunds ± governed corrections`

No independent cached/manual balance truth.

---

# 8. Advance application

The Founder direction says the advance remains outstanding until the Owner explicitly authorizes application or refund.

That means application must be a consequential action.

## Minimum safe application event

An application should bind:

- business;
- customer;
- source advance;
- destination credit/sale obligation;
- amount;
- Owner/authorized actor;
- current source remaining advance;
- current target outstanding;
- confirmation binding;
- idempotency key;
- timestamp;
- audit provenance.

### Commit invariants

At commit:

- source advance still belongs to that customer/business;
- remaining advance ≥ applied amount;
- destination target still belongs to the same customer/business;
- destination outstanding ≥ applied amount;
- neither source nor destination materially changed after preview;
- authority is still current.

One atomic operation then reduces:

- advance outstanding; and
- target outstanding

by the **same amount**.

### Important

This is a **settlement transfer**, not a fresh payment receipt.

It should not create new cash, income or revenue.

---

# 9. Partial application

Accounting-wise, partial application is safe if the invariants above hold.

Example:

- advance: ₹1,000;
- later credit: ₹400;
- Owner applies ₹400;
- advance remaining: ₹600.

This is materially safer than forcing all-or-nothing application because the product must not invent another destination for the remaining ₹600.

### Boundary

The **underlying accounting model should be capable of partial application**.

Whether Phase 1 exposes:

- one partial application;
- multiple later applications;
- bulk application across multiple invoices;

is a product/UX scope question.

I would classify **multi-target bulk advance application** as optional expansion, not required by MC-200.

---

# 10. Refund

Refunding an advance is conceptually different from an expense.

If Smart Business uses the existing Ledger primitive, the cleanest financial semantics are:

- source: customer advance `credit`, direction `owed_by_business`;
- refund: `repayment` settling that credit.

Therefore:

- refund is not business expense;
- refund is not negative income;
- refund decreases advance outstanding;
- cash/payment evidence may be linked if available.

Partial refund follows the same conservation rule.

---

# 11. Reversals

There are two materially different reversal situations.

## 11.1 Original incoming payment is reversed

If the source payment that created:

- repayment allocation; and
- advance

later reverses or chargebacks, the system must not silently delete either record.

Contract 15 §13 requires preserved history and auditable state change.

Required response:

- mark the evidence reversal;
- flag all allocations funded by that source;
- recompute the factual financial position through governed correction/review;
- preserve prior verified history.

If the advance remains untouched, restoring/reducing it may be straightforward through governed correction.

If some advance has already been applied/refunded, this becomes an exception requiring human review; Smart Business must not create a hidden negative advance.

## 11.2 Refund itself fails/reverses

A failed refund must not be treated as successfully reducing the customer advance.

If an outward refund is later reversed back to the merchant, the obligation may re-open, with full provenance.

---

# 12. Duplicate recording risks

The design must explicitly prevent four duplicates.

### D1 — duplicate repayment

Retrying the original overpayment command must not create a second repayment.

### D2 — duplicate advance

The same incoming excess cannot create another advance on webhook replay or user resubmission.

### D3 — duplicate application

Retrying an application cannot consume the advance twice.

### D4 — duplicate refund

Retrying a refund request cannot produce two financial effects.

All consequential commands should inherit:

- `EIS14-IDM-01` request-key idempotency;
- `EIS14-IDM-03` unknown-outcome lookup before retry.

---

# 13. Corrections that create an overpaid position

This is an important edge case.

Example:

1. Customer owed ₹1,000.
2. Customer repaid ₹1,000.
3. Owner later corrects original credit to ₹800.

The correction creates an economic excess of ₹200.

### Mandatory rule

The correction command must **not automatically manufacture a customer advance**.

Why:

The Founder direction requires an explicit Owner choice to retain excess as advance.

Therefore correction should produce an exception:

> “This correction would leave ₹200 overpaid. Choose how the excess should be handled.”

Until clarified:

- existing prior truth is preserved;
- no advance is silently created;
- no refund is silently created;
- no automatic offset occurs.

This is consistent with Contract 14 §18, which explicitly calls out repayment greater than expected balance as an exception.

---

# 14. Permission boundaries

## Owner

The Founder direction explicitly gives the **Owner** the decision to retain the excess.

At minimum, the following should therefore remain Owner-reserved unless later expressly delegated:

- retain excess as advance;
- apply advance;
- refund advance;
- correct an advance-generating decision.

## Manager

No automatic authority follows from existing transaction or reconciliation access.

A future scoped capability could potentially allow Manager action, but that must be separately authorized under the Manager delegation model.

R15-11 remains relevant.

## Employee

Employee transaction-entry permission must not grant:

- advance balance visibility;
- retention decision;
- application;
- refund;
- Owner financial intelligence.

## Ask CFO / AI

Strictly advisory.

AI may say:

> “₹200 remains as customer advance.”

It may not decide:

- to retain it;
- which debt to apply it to;
- when to refund;
- whether to net balances automatically.

---

# 15. Mandatory rules versus optional expansion

## Build Now / mandatory safety implications of the Founder direction

These are necessary to implement the direction safely:

- stop-and-clarify on excess;
- explicit Owner retention choice;
- separate advance balance;
- no revenue/income classification;
- same customer identity;
- source-payment provenance;
- idempotency;
- exact amount conservation;
- no automatic offset;
- explicit application/refund;
- correction/audit preservation;
- reversal handling;
- permission enforcement;
- AI cannot decide;
- canonical remaining-advance calculation.

## Build Later / optional expansion unless separately approved

Not required merely to honor MC-200:

- general-purpose customer wallet;
- stored-value spending across unrelated businesses;
- automatic future-purchase deduction;
- customer self-service wallet balance;
- interest on advances;
- expiry of advances;
- auto-refund after N days;
- cross-customer transfer;
- advance transfer between businesses;
- cash-credit facility;
- rewards/loyalty conversion;
- bulk automatic allocation to oldest invoices;
- predictive AI use of advances.

These should **not** enter the core design by implication.

---

# 16. Upstream-contract amendment assessment

## SB-P-1.14 Contract 3

**No substantive contract amendment appears necessary** to represent the advance obligation because Contract 3 already defines credit as an amount owed **to or by** a relevant party.

## SB-P-1.14 EIS

The existing EIS supports:

- `credit`;
- `owed_by_business`;
- governed commands;
- idempotency;
- audit;
- refund-as-repayment semantics.

However, it does **not** define:

- a customer-advance semantic subtype;
- advance source provenance;
- advance-to-receivable application;
- the dual-sided balance effect of an application.

Those belong naturally to SB-P-1.16's EIS/data model rather than requiring SB-P-1.14 to be rewritten.

### Possible upstream clarification

If engineering later concludes that `EIS14-LDG-02` intended `owed_by_business` exclusively for supplier relationships, that would need formal upstream clarification.

The literal current wording does **not** impose that restriction.

The Stage 7 draft's statement that `owed_by_business` belongs to supplier work is a **draft engineering interpretation**, not a restriction stated in `EIS14-LDG-02`.

---

# 17. Questions that may require separate Founder disposition

The principal product decision is already supplied by MC-200.

I do **not** see a need to send the core advance concept back to the Founder.

The following should remain separate only if Mission Control wants product-level behavior beyond the minimum:

1. **Can a Manager be delegated advance-retain/application/refund authority?**  
   Crosses R15-11 / delegation policy.

2. **May an advance be applied automatically to future credit?**  
   Current direction says no automatic offset, so the safe answer is no unless Founder later changes it.

3. **Can an advance expire or be auto-refunded after a period?**  
   New product behavior; T3.

4. **May an advance apply to multiple future debts in one Owner action?**  
   Could be treated as optional workflow expansion; if it materially changes approved experience, T3 screening is prudent.

5. **Does the product expose customer advances directly to customers?**  
   Not authorized by this direction; channel/privacy/product decision required.

No separate decision is needed merely to support ordinary partial application/refund internally, provided every amount is explicitly authorized and auditable.

---

# 18. Required Stage 7 correction to the existing draft

Current Stage 7 §20.4.6 says:

- excess stops;
- no advance is stored;
- retained advance is OQ-01/T3-W1.

After formal canonical recording of MC-200, that wording is stale.

A later authorized Engineering Review correction should replace the hold with the approved behavior:

1. detect overpayment;
2. stop and clarify;
3. Owner may retain excess;
4. record separate customer advance obligation;
5. advance is not income;
6. application/refund require explicit consequential commands;
7. no automatic offset;
8. preserve idempotency and audit.

This Finance review does **not** edit that draft.

---

# 19. Key exact source references

**Source 18**
- §3.3 trigger definitions: T3, T7, T8.

**Source 11**
- `Smart Credit Awareness`: warn; do not block Owner; AI informs; Owner decides.
- `Feature: Payment Verification Assistant`: payment checking, mismatch awareness, financial clarity.

**Contract 3 — Ledger and Business Memory**
- §4: `Credit` = amount owed **to or by** a relevant party.
- §4: `Repayment` = settlement against an existing credit relationship.
- §8: corrections preserve original identity, old/new values, actor/time/context and downstream effects.

**SB-P-1.14 EIS**
- `EIS14-LDG-01` — six transaction types.
- `EIS14-LDG-02` — `credit` direction `owed_to_business` / `owed_by_business`.
- `EIS14-LDG-03` — one repayment → one settlement target; no SB-P-1.14 overpayment rule.
- `EIS14-LDG-04` — no history rewrite / duplicate credit.
- `EIS14-TOT-01` — credit and repayment never sales/income.
- `EIS14-CMD-01` — governed transaction command.
- `EIS14-CMD-02` — governed auditable correction.
- `EIS14-CMD-03` — no alternate direct mutation.
- `EIS14-IDM-01` — consequential-command idempotency.
- `EIS14-IDM-03` — unknown-outcome lookup before retry.

**Contract 14 — Smart Credit Awareness**
- §3 — repayment reduces correct credit relationship; Owner decision.
- §5 — outstanding balance and repayment events are core facts.
- §7 — repayment integrity.
- §17 — correction/audit preserves prior truth.
- §18 — explicitly includes “repayment greater than expected balance” as an exception.

**Contract 15 — Payment Verification**
- §3 — no fabricated certainty / duplicate financial truth.
- §8 — verification links existing truth; no duplicate payment.
- §12 — duplicate evidence/idempotency.
- §13 — reversal history preserved.
- §14 — verified payment links to correct customer credit without duplicate income.

**SB-P-1.16**
- `16:FPDR-3` — only verified repayment amount reduces outstanding; no duplicate repayment/income.
- `16:FPDR-4` — factual awareness only; human financial decision ownership.
- Stage 6 `SB16-B6-05`.
- Stage 6 OQ-01 / T3-W1.
- Stage 7 draft §20.4.6.

---

# 20. Final trigger disposition

**T3: TRIGGERED — YES.**

The persistent customer advance is the new product behavior anticipated by OQ-01/T3-W1.

**Founder direction now supplies the substantive decision**, but it still requires formal canonical decision recording/reconciliation before the dependent Stage 7 design can be treated as resolved.

**T7: NOT TRIGGERED.**

No approved requirement is omitted, deferred, reassigned or reclassified by this direction.

**T8: NOT TRIGGERED.**

No Product Truth conflict or financial infeasibility is found, provided the advance remains:

- a separate obligation;
- not income;
- not a negative receivable;
- explicitly Owner-controlled;
- idempotent;
- audit-preserving;
- separately applied/refunded;
- outside any wallet-style autonomous product behavior.

## Finance specialist recommendation

**ACCEPT THE FOUNDER DIRECTION AS FINANCIALLY SOUND, SUBJECT TO FORMAL T3 RECORDING AND THE ACCOUNTING INVARIANTS ABOVE.**

Recommended minimum model:

> **customer advance = customer-scoped `credit`, direction `owed_by_business`, sourced from the exact excess payment, plus a separate governed advance-application relation for later explicit offset and existing repayment semantics for refund.**

That is the smallest model I found that preserves cash/payment truth, receivable truth, merchant liability, exactly-once semantics and SB-P-1.14 history without creating a wallet product.

**STOP FOR MISSION CONTROL DISPOSITION.**
