# SB-P-1.16 — Founder Decision Brief (Draft)

**DRAFT — STAGE 3 PREPARATION — NOT A FOUNDER DECISION**

**Mission:** SB-P-1.16 — Financial Integrity & Credit  
**Prepared by:** Claude Code, Definition Actor (MC-107 §13.1), under MC-115  
**Authority:** Source 18 v1.2, Stage 3 preparation only  
**Canonical baseline:** `main@59730d67a7efbb3014e63937e56e5b2a17994b2a` (PR #960 merge)  
**Status:** For Mission Control review. Not to be shown to the Founder as a request until Mission Control authorizes the dialogue. No question here has an answer, and no answer is assumed.

**Founder Decision Gate: TRIGGERED — DIALOGUE NOT STARTED.**  
**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**

## 1. Why the Founder is being asked

The Stage 2 Truth Pack (`04-stage2-mission-truth-pack.md`, blob `4a7bfe4f`) found product questions that no approved source answers, one conflict between approved sources, and derived constraints that would change what merchants experience. Source 18 Stage 3 requires the Founder, not an AI actor or Mission Control, to settle these. Every other part of the mission is already defined by approved sources and continues without a decision.

Sources cited: Source 00 Constitution (`9594b802`); Source 11 (`16897d6c`); Build Plan (`9dfdd924`); Contract 14 (`16914a83`); Contract 15 (`632f3402`); Contract 03 (`d8c26c07`); FCTM (`02-stage2-populated-fctm.md`, blob `5e1794c5`).

## 2. Already decided by approved sources — no question

These are settled. The dialogue should not reopen them.

| Settled point | Source |
|---|---|
| Smart Credit warns and informs; the Owner decides. No automatic hard credit block by default | S11 Smart Credit Awareness; C14 §§3, 9, 21; GPCV §9 `REJECT`; BP §16 |
| No universal fixed credit limit (₹5,000 is historical) | C14 §§8, 21, 23 |
| No underwriting or lending score in current core | C14 §21; GPCV §9 `REJECT FOR CURRENT CORE` |
| Ambiguous payment matches are never chosen silently; a human decides | C15 §§3, 9, 19; BP §10.5 |
| Unauthenticated messages or screenshots never become authoritative payment proof by themselves | C15 §§5, 22, 24 |
| Verification never creates a second sale, income or repayment | C15 §8; SB-P-1.14 decisions FPDR-1 and FPDR-4 |
| Existing credit-method sales are never silently reinterpreted | SB-P-1.14 FPDR-1, FPDR-4 |
| WhatsApp delivery belongs to SB-P-1.20; Smart Business works natively without it | BP §§8, 9 row 9 |
| Provider choice is an implementation detail | C15 §§3, 24 |

## 3. Engineering choices — not for the Founder

These are design decisions for the Blueprint (Sections 20–21) and the EIS, bounded by approved sources: the write path and its idempotency keys (DC-04, DC-05); confirmation binding (DC-06); balance computation from Ledger facts (DC-07); re-evaluating warnings at confirmation time (DC-08); evidence-review handling (DC-12); adapter design (DC-13); domain separation from POS cash and subscription billing (DC-14); Ask CFO disclosure of missing data (DC-16); exact state names (C15 §4: "Exact enum names are implementation choices"); matching signals and windows (C15 §7).

## 4. Questions for the Founder

Six consolidated questions. Q1 and Q3 each hold two separate decisions, shown as (a) and (b) so neither is hidden. Options are listed only where approved sources support them. Options that would contradict an approved source are listed as **excluded**, with the reason. If the Founder wants an excluded option, that is a change to approved Product Truth, a separate decision of its own.

### Q1 — Who owns the customer record that credit is linked to? (U-01, escalated; DC-15)

**Status:** `ESCALATED` on FCTM row `BP-§10.3-S2`. Triggers T2 (conflict among approved sources) and T4 (product-affecting Delta Δ-09). Any option that would reassign an approved BUILD NOW obligation to another mission is a **possible Source 18 T7 trigger** requiring an explicit Founder decision (Option B below).

**Why it is open.** Three approved sources point different ways:

- Contract 14 §4 (SB-P-1.16) says credit is linked to "the correct merchant-scoped customer identity" without duplicate balances.
- SB-P-1.12's locked EIS (`EIS-ID-03`) specifies Customer as "one shared record per business", a data-only record, owned by SB-P-1.12 (FCTM-12 `22-§5-5`).
- Build Plan §10.3 says "Structured Customer/Supplier-directory-indexed search matures only after Supplier and Customer identities are established in later missions (SB-P-1.17 / SB-P-1.18)". The SB-P-1.14 FCTM followed this (`BP-§10.3-S2`, `3-§15-7`).

**Q1(a) — Plain-language question:** *When Smart Business keeps a customer's credit balance in this mission, which customer record does it use, and which mission is responsible for creating and maintaining that record?*

| Option | Supported by | Consequence |
|---|---|---|
| **A.** Use the shared customer record specified by SB-P-1.12 (`EIS-ID-03`). SB-P-1.16 creates and resolves customer records for credit (asking when identity is ambiguous, C14 §4). Build Plan §10.3 would be read as limited to *directory-indexed search*, which still matures in SB-P-1.17 / SB-P-1.18. **This interpretation is contested, not settled.** §10.3 also says identities are "established in later missions", and the SB-P-1.14 FCTM followed that broader reading (`3-§15-7`) | C14 §4; C22 §5; `EIS-ID-03`; BP §10.3 text ("directory-indexed search") | C14 §4 and the 18 blocked rows proceed in SB-P-1.16. No row moves. Search-by-directory stays later. Choosing it needs an explicit Founder decision. If Mission Control judges the narrower reading of §10.3 to be a change rather than an interpretation, that change is part of the same Founder decision |
| **B.** Read Build Plan §10.3 literally: customer identities are established only in SB-P-1.17 / SB-P-1.18 | BP §10.3; FCTM-14 `3-§15-7` | C14 §4, authoritative per-customer balances (`3-§9-12`) and acceptance scenarios 1 and 3 cannot be demonstrated in SB-P-1.16. That reassigns approved BUILD NOW obligations to a later mission: a **possible Source 18 T7 trigger** requiring an explicit Founder decision. It also changes Build Plan §10.5's outcome ("know who owes what") for this mission. Not recommended or assumed |
| Excluded: SB-P-1.16 creates its own credit-only customer list | — | Contradicts C14 §21 ("no duplicate customer-credit database separate from Ledger/customer identity") and C22 §5 ("avoid duplicate identity silos") |

Q1(b) is a **separate choice**, decided on its own whatever the answer to Q1(a).

**Q1(b) — Plain-language question:** *Past sales already recorded "on credit" only carry a typed name or reference, not a customer record. Should that existing unattributed credit count in a customer's authoritative outstanding balance, and if so how is it linked to the customer?*

**Fixed under every option (MC-117):** a historical credit-method sale is never recorded again as a new sale, or as any new financial entry, merely to establish which customer it belongs to. Any later attribution is a link to the existing record. It preserves the original Ledger identity and its audit history, and keeps exactly-once financial meaning: the sale counts once, and repayments settle it (14:FPDR-1, 14:FPDR-4; C15 §8).

| Option | Supported by | Consequence |
|---|---|---|
| **i.** Count it once attributed: show it as unattributed credit, clearly disclosed, until the Owner links each existing record to a customer through a confirmed, audited action; once linked, it contributes to that customer's authoritative balance | 14:FPDR-1 (no reinterpretation), 14:FPDR-4 (repayment may settle a credit-method sale), C14 §4 (ask rather than assign), C15 §16 / 15:FDB-3 (disclose uncertainty) | Balances are accurate but may start incomplete; Owners do some one-time linking |
| **ii.** Keep existing unattributed credit outside authoritative customer balances, shown separately as historical credit | 14:FPDR-1 | Simpler. Older credit is not part of "who owes what" in authoritative balances. It is still never re-recorded as a new sale |
| Excluded: automatic matching by name | — | C14 §4: "ask rather than silently assigning credit to the wrong customer"; C14 §16 |

**Lighthouse principles:** customers are people, not transactions (Constitution Ch. 4); trust is a responsibility (Ch. 6); never guess a financial link (C14 §16).

**Affected rows:** 19 rows carry `ESC-U01`. **18 are `IN SCOPE` and blocked:** `14-§4-1`–`14-§4-6`, `14-§5-1`, `14-§13-1`, `14-§18-1`, `14-§20-2`, `14-§22-1`, `14-§22-3`, `15-§7-5`, `15-§14-3`, `15-§23-2`, `15-§25-6`, `3-§9-12`, `BP-§10.5-W1`. **One is `DELEGATED`** and flagged but owned by SB-P-1.12: `22-§5-5`. DC-15 also touches `14-§22-1` and `3-§9-12`.

**Blueprint-lock consequence:** Sections 8 (customer credit), 10 and 12 (credit flows and data) cannot lock. Founder Scenario A depends on it.

**Specialist evidence before asking:** not required for Q1(a). An engineering note on how the SB-P-1.12 record would be populated would help the Founder but does not decide anything. Q1(b) needs none.

### Q2 — What does "partially matched" mean? (U-02; DC-03)

**Status:** T2/T6. Not `ESCALATED`: Contract 15 §4 lists states "such as" and leaves names open, so the sources do not contradict each other, but the Build Plan term is undefined.

**Four different situations (MC-117).** Approved sources already distinguish them; the Founder decides only which one the merchant-facing words "partially matched" name.

| Situation | What it is | Approved treatment |
|---|---|---|
| Verified part-payment | Authentic evidence that matches a record, for an amount smaller than what is owed | A legitimate payment that can be verified. It reduces the balance by the verified amount only (C14 §7; C15 §§8, 14) |
| Remaining unpaid balance | What is still owed after a verified part-payment | Stays owed and visible; never treated as paid (C14 §§5, 7) |
| Amount or reference mismatch | Evidence that conflicts with the recorded amount or reference | Both facts preserved, variance shown, nothing overwritten; review and correction through normal workflows (C15 §10) |
| Ambiguous evidence | Evidence that plausibly matches more than one record | Never chosen silently; a human reviews and confirms (C15 §§9, 19) |

**Plain-language question:** *The approved experience says payment evidence may be "verified, unmatched, partially matched, or ambiguous". When Smart Business shows the words "partially matched" to a merchant, which situation should they describe?*

The Founder decides the merchant-facing meaning of the term. Whether verified part-payments are legitimate is not in question; they are.

| Option | Supported by | Consequence |
|---|---|---|
| **A.** A verified part-payment: the evidence is authentic and matched, and covers part of what is owed | C14 §7 (repayment reduces the balance); C15 §§8, 14; BP §10.5 E2 | The payment is verified for its amount; the balance falls by that amount and the remainder stays owed |
| **B.** An amount or reference mismatch | C15 §10 (preserve both facts, show the variance) | Treated as a discrepancy needing review; not shown as verified |
| **C.** Neither alone: use two separately named labels for the verified part-payment and the mismatch | C14 §7; C15 §§8, 10 | The merchant sees two distinct labels |

**C15 safeguards unchanged under every option:** a mismatch or ambiguous evidence is never shown as verified (C15 §§3, 9, 10); verification never creates a duplicate sale, income or payment (C15 §8); unauthenticated evidence never verifies by itself (C15 §§5, 22); a verified part-payment never clears more than its verified amount (C14 §7).

**Lighthouse principle:** never pretend uncertain money is settled, and never deny money that was genuinely paid (BP §10.5 exit principle; C15 §3).

**Affected rows:** `15-§4-1`–`15-§4-8`, `BP-§10.5-E2`, `BP-§10.5-W10`. **Blueprint-lock consequence:** the payment-state model (Sections 8, 12) and the Scenario B experience. **Specialist evidence:** none needed.

### Q3 — What does the Owner see in the Scenario A credit warning? (U-03, U-04; DC-01, DC-02)

Two separate decisions on the same screen.

**Q3(a) — "Risk" (U-03, T6).** *When a customer with an unpaid balance asks for more credit, Build Plan Scenario A says the Owner sees "ageing/risk clearly". Should "risk" mean only facts from the records (how much is owed, how old it is, how it compares with the Owner's own limit, and past repayments)?*

| Option | Supported by | Consequence |
|---|---|---|
| **A.** Factual context only; no score, rating or good/bad label (DC-01) | C14 §3 ("Do not fabricate customer risk scores"), §19 (no moral judgement), §21 (no underwriting score); GPCV §9 | Consistent with every approved source |
| Excluded: a computed risk score or rating | — | Contradicts C14 §§3, 19, 21 and GPCV §9 `REJECT FOR CURRENT CORE` |

**Q3(b) — "Overdue" (U-04, T1/T6).** *Scenario A speaks of an "overdue" balance, but Contract 14 makes a due date optional ("due/expected follow-up information if used"). How should Smart Business decide that credit is overdue?*

| Option | Supported by | Consequence |
|---|---|---|
| **A.** A due or expected date may be recorded per credit. "Overdue" is shown only when one exists; otherwise the warning shows how long the credit has been outstanding (DC-02) | C14 §5 b6 ("if used"); C03 §16 (a due date is not proof of payment) | Accurate; Owners who never record dates see age, not "overdue" |
| **B. Proposed new product choice — not an existing approved requirement.** The Owner may also set a default expected-payment period, used when a credit has no date of its own | Not named in any approved source. Related wording only: C14 §5 b6 ("expected follow-up information if used"), C14 §8 (Owner-configured awareness inputs) | "Overdue" appears more often. Adopting it would add a new product requirement and needs an explicit Founder decision. Not recommended or assumed |
| Excluded: a fixed system-wide due period | — | Contradicts C14 §§8, 21, 23 (no universal fixed values) |

**Boundary under every option:** Smart Business never invents an overdue date. "Overdue" appears only where a due or expected date was actually recorded, or, if Option B were chosen, explicitly set by the Owner (C14 §5 b6; C03 §16; MC-106 §7).

**Lighthouse principles:** AI assistant, not AI judge (C14 §3; BP §3); dignity in how customers are described (C14 §§3, 19; Constitution Ch. 4).

**Affected rows:** Q3(a) `14-§3-7`, `14-§9-3`–`14-§9-7`, `14-§19-5`, `BP-§10.5-W4`, `BP-§10.5-A2`; Q3(b) `14-§5-6`, `BP-§10.5-W3`, `BP-§10.5-A1`. **Blueprint-lock consequence:** the credit data model, the warning experience and the Experience Verification Matrix seed for Founder Scenario A (Founder-reserved). **Specialist evidence:** none needed.

### Q4 — Which payment evidence must Phase 1 accept? (U-06; U-09 follows)

**Status:** T1/T3. **Specialist evidence needed before asking.**

**Plain-language question:** *To confirm that a customer really paid, which kinds of proof must Smart Business be able to receive in this phase: bank or UPI provider feeds, bank emails, payment-gateway records, settlement files, or only photos and screenshots that the Owner reviews?*

**Why it is open.** Contract 15 §5 lists approved evidence sources "such as" those, and its completion gate requires "authenticated evidence ingestion" (C15 §28). No source names the minimum set. Uploaded evidence alone always needs review and is never authoritative by itself (C15 §5).

**Options:** any non-empty subset of the C15 §5 list. The sources do not rank them. What each requires (provider availability for small Kerala merchants, authentication, consent, cost, credentials) is not yet known, so presenting options now would invite a decision without the facts.

**Consequence:** without at least one authenticated source, C15's completion gate cannot be met. The 41 `IN SCOPE` rows that carry `DPAY` depend on this decision, and so does the scope of reversals and chargebacks (U-09: `15-§4-7`, `15-§13-1`, `15-§21-10`, `15-§25-12`). Each external source is a new infrastructure activation under Build Plan §5.4.

**Lighthouse principles:** never fabricate payment certainty (C15 §3); simplicity without sacrificing integrity (C03 §3).

**Affected rows:** `15-§1-2`, `15-§3-7`, `15-§5-1`–`15-§5-7`, `BP-§5.4-1`, `BP-§10.5-W5`, plus the `DPAY` rows (FCTM Part D-2). **Blueprint-lock consequence:** Sections 8, 20–21 (evidence ingestion and its feasibility) and the activation plan.

**Specialist evidence required first:** a read-only payment and integration review of which listed sources are available, how each is authenticated, and their consent and legal requirements. Its authorization is a Mission Control decision.

### Q5 — How finely can an Owner delegate credit and reconciliation work to a Manager? (U-07; DC-09)

**Status:** T3/T6. Consolidated with the decision already pending from SB-P-1.15 (R15-11: "separate Founder T6/T3 for merchant-facing grants, no Manager role inference"). **Specialist evidence needed before asking.**

**Plain-language question:** *A Manager has no access to customer credit or payment reconciliation unless the Owner delegates it. When the Owner delegates, what choices should the Owner have: for example, see balances only, record repayments, resolve payment matches, or change limits?*

**Supported starting point (not a decision):** Manager access only by explicit Owner delegation (C14 §14; C15 §17; S11 Manager). Contract 21 §5 lists the dimensions a delegation may use (role, explicit delegated capability, object scope, action type) and warns against "a simplistic role-only model where a capability needs finer delegation".

**Consequence:** Owner flows are unaffected. Manager rows (`14-§14-2`, `15-§17-2`) and the related Owner-intelligence boundary cannot lock until decided.

**Lighthouse principle:** human decision ownership stays visible and real (BP §3).

**Specialist evidence required first:** the security specialist's model of grantable capabilities from the SB-P-1.12 kernel, so that the Founder chooses among options that can be enforced (SB-P-1.15 DC-06 treats this as a security design question).

### Q6 — Customer-facing credit messages before a delivery channel exists (U-05; DC-10) — confirmation only

**Status:** largely answered by approved sources. T6 confirmation of DC-10.

**Plain-language question:** *Customers may receive only credit messages that the merchant has approved. Until an approved channel to customers exists (WhatsApp in SB-P-1.20), should this mission prepare those messages for the merchant to review, without sending anything to customers?*

**Already settled:** messages are respectful, merchant-controlled and never sent autonomously in a confrontational way (C14 §10); customers see only their own credit communication (C14 §14; C21 §13); WhatsApp delivery is SB-P-1.20 (BP §9 row 9). SB-P-1.15 FDB-2 covers Owner reach only, not messages to customers.

**Consequence of confirming (MC-117):** native preparation of a message and the merchant's approval of it are documentary or functional scope boundaries for this mission. They are **not** proof that delivery to a customer was demonstrated. Delivering any message to a customer requires an approved channel, the appropriate customer authority (C14 §14; C21 §13) and the applicable permissions.

The delivery-dependent Contract 14 rows stay `IN SCOPE` with their recorded `DNTF` dependency: `14-§10-2`–`14-§10-6`, `14-§14-4`, `14-§22-9`. They are **not** marked complete on the basis of preparation or approval. They are **not** moved to another mission: any change of assignment for delivery needs an approved authority, and is a possible Source 18 T7 trigger.

**Mission Control's Source 11 screen (MC-117):** no direct textual prohibition of merchant-approved credit communication was found in Source 11. No outbound delivery authorization follows from that finding.

**Specialist evidence:** none.

## 5. Screened items — not for this dialogue unless Mission Control decides otherwise

| Item | Remaining dependency | Recommendation to Mission Control |
|---|---|---|
| U-05 — Source 11 Customer authority list | **Screened by Mission Control (MC-117):** no direct textual prohibition of merchant-approved credit communication found in Source 11; no outbound delivery authorization follows. Remaining Founder dependency: Q6 confirmation only | The Founder is asked only Q6 |
| U-08 — Evidence retention (MC-112) | **MC-112 U-08 disposition: Conditionally noncritical for Stage 2 documentary reconciliation and non-destructive payment-evidence workflow definition. U-08 remains OPEN.** A Founder/legal determination is still required before any Blueprint lock that depends on retention duration, deletion eligibility, cancellation/non-payment treatment, backup/restoration or other evidence-lifecycle behaviour (Truth Pack Part D.5) | Not ready for the Founder. Needs **legal specialist evidence** first. Ask only when a Blueprint lock would depend on lifecycle behaviour |
| U-09 — Reversal / chargeback scope | Follows Q4 (which evidence sources exist) | Status unchanged: OPEN, carried with Q4 |
| U-10 — Underwriting/lending ecosystem | None for SB-P-1.16: rejected for current core (GPCV §9); Build Plan §15 item 9 is a wider ecosystem question | Status unchanged: OPEN, not on this mission's critical path |

## 6. Readiness for the Founder dialogue

| Question | Founder product choice? | Ready to ask now? | Needed first |
|---|---|---|---|
| Q1(a) customer record ownership | Yes (conflict between approved sources) | Yes | Mission Control view on whether Option A's contested reading of §10.3 is an interpretation or a change |
| Q1(b) historical credit-method sales | Yes | Yes | — |
| Q2 "partially matched" | Yes | Yes | — |
| Q3(a) factual risk | Yes (confirmation; one source-supported option) | Yes | — |
| Q3(b) overdue definition | Yes (Option B would be a new product choice) | Yes | — |
| Q4 minimum evidence sources | Yes | **No** | Read-only payment/integration specialist review |
| Q5 Manager delegation | Yes | **No** | Security specialist capability model |
| Q6 customer messages | Confirmation | Yes | — |
| U-08 retention lifecycle | Yes (with legal) | **No** | Legal specialist evidence |

**DRAFT — STAGE 3 PREPARATION — NOT A FOUNDER DECISION.** No Founder Product Decision Record is created by this brief.

**STOP FOR MISSION CONTROL REVIEW. Stage 3 Founder dialogue: NOT YET AUTHORIZED. Stage 4: NOT AUTHORIZED.**
