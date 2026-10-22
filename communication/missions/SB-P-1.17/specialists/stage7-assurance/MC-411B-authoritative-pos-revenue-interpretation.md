# **SB-P-1.17 — Authoritative POS Revenue Interpretation**

**Authority:** MC-411B  
**Mode:** READ-ONLY — SOURCE INTERPRETATION  
**Baseline verified:** `main@e27f9e15aecbaafea549d9dbc277c134269a6217`

## **1\. Conclusion**

The approved sources **do not mandate that a financially trustworthy POS sale must wait for inventory product mapping before it can become a Ledger sale**.

They also do not expressly command immediate Ledger posting in that circumstance.

The strongest source reading is:

> **Product mapping is an eligibility condition for POS-driven stock movement, not an expressed prerequisite for the existence of the POS sale as a financial fact.**

Therefore:

* **untrusted financial facts** must not create Ledger revenue or stock;  
* **trusted financial facts with unresolved inventory mapping** may be represented as a financial sale independently of stock mapping, provided the later EIS establishes the governed, deduplicated and conflict-safe path;  
* **trusted \+ mapped** events may produce both Ledger and stock effects and are then subject to INV-A2 atomicity;  
* **possible POS/manual duplicates** require human review and may not be automatically merged or double-posted.

The current Stage 7 `INV-A8` sentence —

> “Unmapped or untrusted events create no movement and no revenue until resolved”

— combines two materially different conditions. The **untrusted** part is source-supported. The **unmapped → no revenue** part is not clearly supported by Contract 13 or the Founder decision and should not be treated as settled Product Truth merely because it appears in §20.9.1.

A permanent policy that withholds an otherwise trustworthy POS sale solely because stock mapping is unresolved would be a **narrowing interpretation** of the approved POS sales-ingestion capability. That should not be silently fixed at EIS level without Mission Control reconciliation.

---

# **2\. Exact authoritative sources**

## **Contract 13 §§4–7**

**File:**  
`docs/phase-1-mission-blueprint/smart-business-features/13_POS_Counter_Intelligence_and_Closing_Cash.md`

**Blob:**  
`4426e8b1f9e856047759bdb03e2f5b83820f8cc0`

### **§4 — Standard POS Bridge**

The approved product direction includes a standard POS bridge supporting, where compatible and authorized:

* **sales ingestion**;  
* transaction/reference identity;  
* **product/item mapping**;  
* quantity/price;  
* payment method;  
* stock impact where configured.

Important structural point:

**sales ingestion and product/item mapping are listed as separate capabilities.**

The source does not say:

> “sales ingestion is valid only after item mapping succeeds.”

### **§6 — POS Data and Business Memory**

Imported POS events must preserve source identity and distinguish:

* manual/native record;  
* POS-origin sale/event;  
* correction/reversal;  
* duplicate/retry;  
* reconciliation link.

It further requires:

> POS ingestion must not create duplicate revenue when the same event is later encountered through another source.

This establishes a strong financial constraint: a POS event may have revenue meaning, but must retain source identity and avoid duplicate revenue.

### **§7 — Inventory Relationship**

This section is the clearest source for MC-411B.

It says POS sales **may drive stock movement where**:

* product mapping exists;  
* units/quantities are reliable;  
* the event is trusted;  
* the stock path is configured.

Therefore product mapping is expressly tied to **stock movement eligibility**.

The section then requires conflicts between POS/manual stock/import/document evidence to be preserved and reconciled rather than guessed.

It does **not** state that missing product mapping invalidates the financial sale itself.

---

# **3\. Founder decision `17:FPDR-2`**

**File:**  
`communication/missions/SB-P-1.17/claude-code/10-stage3-six-entry-founder-product-decision-record-for-review.md`

Relevant entry:

`17:FPDR-2 — U-02 Phase 1 standard POS bridge scope`

The selected Option A commits to a vendor-neutral bridge with:

* authenticated API/webhook or structured export input;  
* stable source identity;  
* dedupe;  
* minimum fields including:  
  * external transaction ID;  
  * time;  
  * POS item reference;  
  * quantity;  
  * price;  
  * payment method.

It does not state:

> unresolved Smart Business product mapping prevents financial ingestion.

The decision requires a POS item reference in the source payload. That is different from saying the item must already resolve to a Smart Business Product & Price Master record before the financial fact can exist.

**Finding:** `17:FPDR-2` does not settle the case-2 posting policy either way, but it does not support treating mapping resolution as a stated prerequisite for revenue.

---

# **4\. Locked SB-P-1.14 financial contracts**

**File:**  
`docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md`

**Blob:**  
`899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3`

## **`EIS14-LDG-01`**

A `sale` remains a distinct Ledger state.

A POS-origin financial sale, if accepted into Ledger, must therefore be recorded as a canonical `sale`, not generic income or a POS-specific financial type.

## **`EIS14-TOT-01`**

Canonical totals are:

* sales from `sale`;  
* income from `income`;  
* purchases from `purchase`;  
* expenses from `expense`.

Accordingly, once a trustworthy POS financial event is accepted as a sale, its financial truth must enter the same canonical sales measure as other sales.

There is no separate POS-sales total permitted to act as an alternate revenue truth.

## **`EIS14-CMD-01`**

All Ledger creation goes through the single governed `create_transaction_governed` command.

Therefore even if case 2 permits financial posting:

* SB-P-1.17 cannot directly write `transactions`;  
* it cannot build a special POS revenue writer;  
* it must use the canonical SB-P-1.14 command boundary.

None of these three EIS requirements makes inventory mapping a precondition for a sale.

---

# **5\. Blueprint §20.9.1**

**File:**  
`docs/phase-1-mission-blueprint/active/SB-P-1.17.md`

**Blob:**  
`4931ab567da5c8b15767f7ce9ae3df032552e1b5`

Section 20.9 expressly describes itself as:

> proposed engineering invariants for the EIS

and says:

> “No product change.”

That status matters when interpreting INV-A8.

## **INV-A2**

> Related writes of one business command commit in one database transaction or not at all.

This controls an event **when the same business command legitimately has both Ledger and inventory effects**.

It does not independently establish that every POS financial sale must have an inventory effect.

Therefore INV-A2 does not answer case 2 by itself.

## **INV-A7**

Possible manual/POS duplicates:

* become review candidates;  
* neither side is automatically suppressed, merged or deleted;  
* resolution is an authorized human decision.

This is directly relevant to any case-2 Ledger posting.

Even if inventory mapping is irrelevant, a **possible duplicate financial event** may still require review before another sale is created.

## **INV-A8**

Current wording:

> “POS-originated revenue reaches the Ledger only through the governed command, once per source event. Unmapped or untrusted events create no movement and no revenue until resolved.”

The first sentence is fully aligned with SB-P-1.14.

The second sentence groups:

1. **untrusted event**; and  
2. **unmapped event**

as though they were equivalent financial-integrity conditions.

Contract 13 §7 does not establish that equivalence.

Accordingly, the second sentence should be treated as an **engineering interpretation needing reconciliation**, not as independent evidence that Product Truth already requires all revenue to wait for mapping.

---

# **6\. Four-case interpretation**

## **Case 1 — Untrusted POS source or untrusted financial facts**

### **Required treatment**

**No authoritative Ledger posting.**  
**No inventory movement.**

This is well supported.

Reasons:

* Contract 13 conditions stock effects on trusted events.  
* Source identity/authenticity is required.  
* The architecture must not fabricate financial truth.  
* `EIS14-CMD-01` permits only governed validated creation.

An event may remain as source evidence/review material, but it must not be promoted to canonical sale truth until its financial facts are trustworthy.

### **Status**

**MANDATED.**

---

## **Case 2 — Financial facts trustworthy; inventory mapping unresolved**

Example:

* trusted authenticated POS source;  
* stable transaction identity;  
* trustworthy ₹500 sale amount;  
* trustworthy payment method/time;  
* source item reference exists;  
* Smart Business cannot yet map that item reference to its Product & Price Master.

Two treatments were requested for analysis.

### **Treatment A — Governed Ledger posting; stock remains held**

#### **Source compatibility**

**PERMITTED by the source architecture; not expressly mandated.**

This treatment is consistent with:

* Contract 13 §4 separate sales-ingestion capability;  
* Contract 13 §6 source identity/no duplicate revenue;  
* Contract 13 §7, which makes mapping a stock-movement condition;  
* `EIS14-CMD-01`, which supplies the governed financial path;  
* `EIS14-LDG-01` / `TOT-01`, which classify the accepted fact as a sale.

Nothing in those authorities states that an unresolved stock mapping destroys an otherwise valid financial fact.

#### **Required safeguards**

If EIS adopts this interpretation:

* source financial identity must be trustworthy;  
* POS/manual duplicate state must be clear enough to avoid duplicate revenue;  
* Ledger write must use `create_transaction_governed`;  
* event must remain marked as inventory-unresolved;  
* no inventory quantity may move until mapping/unit eligibility is established;  
* later mapping must not create another Ledger sale.

### **Treatment B — Hold the entire event, including Ledger, until mapping**

#### **Source compatibility**

**Not expressly prohibited, but not mandated.**

As a temporary safety posture, it can be conservative.

As a permanent product rule, it is harder to reconcile with the source because:

* §4 commits to sales ingestion;  
* §7 specifically attaches product mapping to stock movement;  
* no approved source says a financially valid sale ceases to be ingestible until inventory resolution.

A permanent rule of:

> “No product mapping → no revenue recognition”

would therefore add a dependency that the approved Product Truth does not currently state.

### **Comparative conclusion**

Of the two, **Treatment A has stronger direct support from the structure of Contract 13**.

That is a source interpretation, not a new revenue policy.

---

## **Case 3 — Trusted financial facts \+ valid stock mapping**

### **Required treatment**

If both financial and stock effects are legitimately required:

* Ledger effect uses SB-P-1.14 governed command;  
* inventory movement uses the approved inventory path;  
* INV-A2 requires both related effects to commit atomically or not at all;  
* one source event must not yield duplicate revenue or stock.

### **Status**

**MANDATED at engineering-contract level by the current Blueprint invariant, subject to EQ17-13 proving composability.**

No partial “Ledger succeeded, stock retry later” is acceptable for a command that is defined to have both eligible effects.

---

## **Case 4 — Possible POS/manual duplicate**

### **Required treatment**

**Human review; no automatic merge.**

INV-A7 and Contract 13 §6/§7 support this.

The system must preserve enough source evidence to distinguish:

* POS-origin event;  
* native/manual record;  
* potential duplicate relationship.

Similarity is not identity.

### **Financial implication**

If a manual sale already exists and the POS event may describe the same sale, Smart Business must not blindly create another revenue fact.

Likewise, it must not silently discard one.

The smallest safe treatment is a review candidate until authorized resolution can determine whether:

* the POS event is the same economic sale;  
* it is a genuinely separate sale;  
* one existing financial record needs governed correction/linkage.

### **Status**

**MANDATED no-auto-merge boundary.**

---

# **7\. Is either case-2 treatment already mandated?**

## **Ledger-now / inventory-held**

**No — not explicitly mandated.**

It is, however, **compatible with and better supported by the approved source separation between sales ingestion and stock mapping**.

## **Entire-event hold**

**No — not explicitly mandated.**

The sources do not say:

> “mapping failure blocks financially trustworthy revenue.”

Therefore neither treatment is currently expressed as a locked Product Truth rule.

---

# **8\. Would selecting either treatment change Product Truth?**

## **Selecting governed Ledger posting while stock is held**

**Likely NO Product Truth change**, provided EIS defines it narrowly as the engineering realization of already-approved:

* sales ingestion;  
* independent stock-mapping eligibility;  
* source identity;  
* no duplicate revenue;  
* governed Ledger ownership.

It does not add a new merchant capability or omit an approved one.

It clarifies how two existing approved capabilities interact.

## **Selecting whole-event hold as a permanent rule**

**Potentially YES / governance-sensitive.**

If this becomes:

> all valid POS revenue is suppressed until inventory mapping exists,

then SB-P-1.17 is making financial sales ingestion conditional on a prerequisite not stated in Contract 13 §4–§7 or `17:FPDR-2`.

That could materially narrow the approved standard POS bridge.

Mission Control should screen such a permanent interpretation rather than allowing the EIS to silently create it.

---

# **9\. Can EIS engineering resolve this?**

## **Yes — with an important boundary**

The EIS can resolve the **technical interaction** if it stays inside the approved source semantics.

A source-faithful EIS may define separately:

### **Financial eligibility**

For example:

* authenticated/trusted source;  
* stable event identity;  
* valid business/account binding;  
* supported amount/currency;  
* financial state accepted;  
* no unresolved financial duplicate condition.

### **Inventory eligibility**

Additionally requires:

* product mapping;  
* reliable unit/quantity;  
* trusted event;  
* stock path configured.

Then:

* financial eligibility can exist without inventory eligibility;  
* inventory eligibility cannot be invented where mapping is absent;  
* if both are eligible as one combined business command, INV-A2 governs atomicity.

That is engineering clarification rather than Product Truth redesign.

---

# **10\. Is a Founder decision necessary?**

## **For the source-faithful interpretation: NO**

The present sources are sufficient to conclude that:

* mapping is explicitly required for stock impact;  
* it is not explicitly stated as a prerequisite for the financial sale.

Therefore Mission Control can permit the EIS to resolve the engineering mechanics without reopening a Founder product question, **provided it does not introduce new product behavior**.

## **When clarification/escalation would become necessary**

A formal source clarification or Founder/governance disposition would be warranted if engineering proposes either of these stronger policies:

* **all** trusted POS financial events must post immediately regardless of unresolved duplicate/reconciliation conditions; or  
* **all** trusted POS revenue must remain unposted until stock mapping is resolved.

Neither broad rule is stated in the current approved sources.

---

# **11\. Smallest safe interim hold**

Until the EIS formally resolves case 2:

1. **Preserve the trusted POS source event and its financial evidence.**  
2. **Do not create an inventory movement while product mapping is unresolved.**  
3. **Do not assume that unresolved mapping itself invalidates or authorizes the Ledger posting.**  
4. Keep the **Ledger-posting decision path held at EIS design level** until:  
   * financial trust criteria;  
   * source-event idempotency;  
   * POS/manual duplicate treatment; and  
   * case-2 command semantics  
5. are explicitly specified.  
6. Do not create any alternate/shadow POS revenue total while held.

This is narrower than treating the entire source event as untrusted and avoids silently adopting either disputed interpretation.

---

# **12\. Mission Control disposition**

### **What approved sources REQUIRE**

* trusted source/evidence before authoritative effects;  
* stable POS source identity;  
* no duplicate revenue;  
* governed SB-P-1.14 Ledger write path;  
* stock mapping/reliable units/trusted event/configured path before stock movement;  
* no automatic POS/manual merge;  
* atomic commit when a legitimate business command contains both Ledger and inventory writes.

### **What approved sources PERMIT**

* treating financial eligibility and inventory eligibility as distinct engineering predicates;  
* retaining a trusted POS financial fact while inventory mapping remains unresolved.

### **What approved sources PROHIBIT**

* direct SB-P-1.17 transaction writing;  
* duplicate POS revenue;  
* guessed stock mapping;  
* automatic POS/manual reconciliation;  
* stock movement without the §7 eligibility conditions.

### **What remains UNDECIDED**

The exact case-2 execution timing:

> whether a financially trustworthy POS sale is posted to Ledger immediately while its stock side remains unresolved, or whether Ledger creation temporarily waits for inventory resolution.

### **Finance specialist interpretation**

**EIS MAY RESOLVE CASE 2 WITHOUT A NEW FOUNDER DECISION if it preserves the source distinction between financial eligibility and stock eligibility.**

The current INV-A8 phrase **“unmapped … events create no … revenue” should not be treated as already-authoritative Product Truth** without that reconciliation.

If Mission Control instead intends to make unresolved inventory mapping a permanent prerequisite for all POS revenue posting, that should receive explicit governance/source clarification because the requirement is not stated in Contract 13 §§4–7 or `17:FPDR-2`.

**STOP FOR MISSION CONTROL DISPOSITION.**

