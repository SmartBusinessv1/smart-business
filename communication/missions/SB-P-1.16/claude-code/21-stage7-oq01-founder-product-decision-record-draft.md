# SB-P-1.16 — Proposed Founder Product Decision Record: OQ-01 Excess Repayment and Customer Advance (Draft v0.2)

**DRAFT — LOCAL — NOT CANONICAL — FOR MISSION CONTROL REVIEW**

**Mission:** SB-P-1.16 — Financial Integrity & Credit  
**Proposed decision ID:** `16:FPDR-10`. Verified at `main@6ba24ec9`: the highest canonical ID is `16:FPDR-9`, and no other record on `main` uses `16:FPDR-10`  
**Question:** OQ-01 (Stage 6 T3-W1; Stage 7 register §7.2)  
**Founder authority:** two Founder statements supplied verbatim in MC-202 (Section 2.1)  
**Mission Control records:** MC-200, MC-201 and MC-202 (interpretation and governance; not Founder wording)  
**Specialist evidence:** FIN-01 Financial Integrity Review, preserved as received at `communication/missions/SB-P-1.16/specialists/07-fin01-oq01-financial-integrity-review.md`  
**Prepared by:** Claude Code (Definition Actor and Stage 7 coordinator). This draft records; it does not decide  
**Baseline:** `main@6ba24ec95d1d744578f9e8c161266c435b8fe7f2`; repository PRIVATE  
**Date:** 2026-10-18  
**Supersedes:** local draft v0.1 (blob `72d181b5`), which lacked the Founder wording and FIN-01  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 0. Status

- **Not canonical.** This draft changes no Source 11 entry, source contract, Build Plan, approved Blueprint, FCTM, EIS or canonical Founder Product Decision Record (`claude-code/09-…`, blob `30b19a80`). It becomes canonical only after Mission Control review, human merge and Mission Control verification (Source 18 §3.3).
- **Founder direction itself.** The Founder's second statement says: "do not change canonical files yet". This draft complies.
- **FIN-01 provenance.** FIN-01 is recorded as the text received in MC-202. Its original file identity and hash at the Finance Room were not supplied, so the local copy's blob identifies only the received text.

## 1. The question and the options put to the Founder

**OQ-01 (Stage 7 register §7.2):** When a customer pays more than the outstanding amount on the selected credit records, or a correction lowers a credit below what has already been repaid, should Smart Business keep the excess as a customer advance that later credit can use, or must the Owner resolve it before anything is recorded?

**Options in the packet:**

- (A) Clarify-and-stop only; no advance concept.
- (B) An Owner-confirmed customer advance, recorded as a distinct Ledger fact (new behaviour).
- (C) Record the excess as unlinked evidence for later Owner classification.

**Source position before the decision:**

- Contract 14 §18 b3 (`14-§18-3`) names "repayment greater than expected balance" as an exception, without an outcome.
- No approved source defines a customer advance (search of Source 11, all 25 contracts, the Build Plan, the SB-P-1.14 Blueprint and EIS, the SB-P-1.16 Blueprint and the FCTM at the baseline).

## 2. Decision entry — `16:FPDR-10` (proposed)

### 2.1 Founder statements (verbatim, as supplied in MC-202)

**Founder statement 1:**

> "a combination of options A and B"

**Founder statement 2:**

> "MC-199 Founder clarification for OQ-01: Retain Owner-confirmed excess as a separate customer advance until explicitly applied or refunded. Record the Founder direction with T3 and upstream Ledger-contract screening; do not change canonical files yet."

**Provenance.** Both statements were supplied verbatim by Mission Control in MC-202, which directs that they be treated as Founder authority. Statement 1 refers to options (A) and (B) in Section 1. Statement 2 is labelled MC-199 in its own text. No timestamp is available and none is invented.

### 2.2 Mission Control interpretation (MC-200, MC-201): the six product-intention elements

These are Mission Control's wording, not Founder text. The table shows how each one rests on the Founder statements.

| # | Element | Basis in the Founder statements |
|---|---|---|
| D-1 | Excess repayment stops automatic financial commitment and requests Owner clarification | Statement 1, option (A): clarify and stop |
| D-2 | The Owner may explicitly retain the excess as a separate customer advance | Statement 1, option (B); statement 2: "Retain Owner-confirmed excess as a separate customer advance" |
| D-3 | The advance persists until explicit Owner-authorized application or refund | Statement 2: "until explicitly applied or refunded" |
| D-4 | No automatic income recognition, offset, refund or AI decision | Interpretation consistent with statement 2 ("Owner-confirmed", "explicitly"), `16:FPDR-4` and `15-§11-5` |
| D-5 | No automatic advance resulting from historical corrections | Interpretation consistent with statement 2 ("Owner-confirmed") |
| D-6 | Permission, audit, idempotency and amount-conservation requirements are preserved | Standing approved rules (`16:FPDR-3`, `16:FPDR-6` §5, `14:FPDR-4`, Contract 14 §17) |

**For Mission Control to confirm:** that D-1 to D-6 together are the decision text to be made canonical, with the two Founder statements quoted as its authority.

### 2.3 Product approval versus technical-model approval

**Approving this record approves the product behaviour in Section 2.2 only.** It does **not** approve FIN-01's recommended representation, any data model, row type, command or EIS design. FIN-01 states this itself: "The financial representation is a recommendation, not approved implementation architecture" (MC-202 summary). Its §1 and §20 present it as a "recommended minimum model".

| Layer | Content | Approval route |
|---|---|---|
| Product behaviour (this record) | D-1 to D-6 | Founder statements; Mission Control review; canonical recording |
| Recommended accounting representation (FIN-01 §1, §6, §20) | A customer-scoped `credit`, direction `owed_by_business`, sourced from the exact excess payment, with semantic subtype "customer advance" | Stage 7 v0.2 Engineering Review, then EIS; independent validation (Section 7) |
| Recommended application mechanism (FIN-01 §4.3, §8) | A distinct SB-P-1.16 advance-application relation or event that reduces the advance and the target by the same amount, atomically, as a settlement transfer and not a payment | Stage 7 v0.2, then EIS; independent validation |
| Recommended refund semantics (FIN-01 §10) | A `repayment` settling the advance `credit`; not an expense or negative income | Stage 7 v0.2, then EIS; independent validation |

### 2.4 What this decision does not decide

The optional expansions in Section 4 (including Manager delegation and customer-facing exposure), any provider or evidence channel, payment-evidence retention (U-08), and implementation. It approves no wallet, stored-value, lending or underwriting product (`GPCV-§9-10`; `BP-§15-9` / U-10 unchanged).

### 2.5 Traceability (rows the decision would be cited on; no row added, removed or reclassified)

| Row | Disposition | Relation |
|---|---|---|
| `14-§18-3` | `IN SCOPE` | Primary: "repayment greater than expected balance" gains a decided outcome |
| `14-§7-2` to `14-§7-6` | `IN SCOPE` | Repayment identification, preservation, balance update, no duplicates, audit linkage |
| `14-§5-7`, `14-§5-8` | `IN SCOPE` | Outstanding balance and repayment events |
| `3-§9-12` | `IN SCOPE` | What the customer still owes: a held advance never reduces it unless the Owner explicitly applies it |
| `14-§21-6` | `IN SCOPE` | No separate customer-credit database: the advance must be a Ledger fact |
| `15-§11-5` | `IN SCOPE` | No automatic income or expense when meaning is ambiguous |
| `15-§14-1` to `15-§14-4` | `IN SCOPE` | Repayment evidence linkage (an overpaid gateway or upload payment) |
| `14-§22-2`, `BP-§10.5-E4`, `BP-§10.5-X` | `IN SCOPE` | No duplicate income or repayment; never pretend uncertain money is settled |

Citing `16:FPDR-10` in these rows' Founder-decision cells is a later FCTM amendment, needing separate authorization (Section 6).

## 3. Mandatory safety and Owner-decision requirements (part of honouring the decision)

These are required by D-1 to D-6 as FIN-01 analyses them (FIN-01 §7, §8, §11 to §15). They are not optional features. Their exact engineering form is fixed in Stage 7 v0.2 and the EIS.

| Area | Requirement | FIN-01 |
|---|---|---|
| Default | Excess stops; the Owner is asked; nothing commits automatically | §1, §15 |
| Owner control | Retaining, applying, refunding and correcting an advance-generating decision are Owner-reserved, unless later expressly delegated | §14 |
| Not revenue | An advance never increases sales or income, before or after application | §4.2, FI-A3, FI-A8 |
| No negative receivable | Repayment allocation is capped at current outstanding; excess never creates a negative receivable | FI-A2 |
| Conservation | Verified incoming amount = amount applied to existing debt + retained advance; later, remaining advance = original − applications − refunds ± governed corrections, from one canonical calculation | FI-A1, FI-A10 |
| Identity | An advance attaches only to the confirmed merchant-scoped customer identity; an ambiguous payer gets no automatic advance | FI-A5 |
| No automation | No automatic offset, refund or income recognition; AI is advisory only | FI-A6 to FI-A8, §14 |
| Provenance | Links to originating evidence, overpayment, customer, actor, confirmation, applications, refunds, corrections and reversals | FI-A9 |
| Exactly-once | No duplicate repayment, advance, application or refund (D1 to D4); request-key idempotency (`EIS14-IDM-01`) and unknown-outcome lookup (`EIS14-IDM-03`) | FI-A4, §12 |
| Application | An atomic, confirmation-bound settlement transfer with commit-time revalidation of ownership, amounts, state and authority | §8 |
| Corrections | A correction that would leave an overpaid position stops with an exception; it never creates an advance, refund or offset automatically. The Owner then decides | §13 |
| Reversals | Reversal of the source payment flags every use and goes through governed correction or review; no hidden negative advance. A failed refund does not reduce the advance | §11 |
| Permissions | No Manager authority by default (`16:FPDR-7`; R15-11 open). Employees get no advance visibility or action | §5, §14 |
| Partial application and refund | The accounting model must support partial amounts, each explicitly authorized | §9, §10 |

## 4. Optional expansion (not part of this decision; each needs its own approval)

These are product questions only if Mission Control or the Founder wants behaviour beyond the minimum. None blocks this record (FIN-01 §15, §17).

| Item | Status |
|---|---|
| Manager delegation of retain, apply or refund | Not authorized. Would need an explicit scoped capability under `16:FPDR-7` and R15-11 governance |
| Automatic application to future credit | Excluded by D-4. A change would be a new Founder decision |
| Expiry or automatic refund after a period | Excluded by D-3. New behaviour (T3) |
| One Owner action applying an advance across several debts | Optional workflow expansion; T3 screening advised if it materially changes the approved experience |
| Showing advances directly to customers | Not authorized; channel, privacy and product decision needed (`16:FPDR-8`; `DNTF`) |
| Wallet, stored value, cross-customer or cross-business transfer, interest, rewards, cash-credit facility, bulk auto-allocation, predictive AI use | Not to enter the core design by implication |

## 5. T3, T7 and T8 reconciliation

| Trigger | Disposition | Basis |
|---|---|---|
| **T3** | **TRIGGERED.** The persistent customer advance is new product behaviour, a "new product decision" (Source 18), previously watched as T3-W1 | Founder statements; FIN-01 §2, §20; Stage 6 SB16-B6-05 |
| T7 | Not triggered. No approved requirement is omitted, deferred, reassigned or reclassified | FIN-01 §2 |
| T8 | Not triggered, provided the advance remains a separate obligation, not income, not a negative receivable, Owner-controlled, idempotent, audit-preserving, separately applied or refunded, and outside any wallet behaviour | FIN-01 §20 |
| T3 follow-ons | Any item in Section 4 pursued later | FIN-01 §17 |

**Gate effect.** The Founder Product Decision Record runs for this item only. Until it is canonical, the Stage 7 interim rule stays in force: stop and clarify, no advance stored (§20.4.6). When canonical, that rule is replaced by D-1 to D-6.

## 6. Reconciliation required (identified only; no file changed)

| Item | Finding | Action needed (separately authorized) |
|---|---|---|
| Source 11 (`16897d6c`) | Smart Credit Awareness: "Credit system warns." / "It must not block owner decisions." / "AI informs." / "Owner decides." (lines 843–848). Compatible and additive; no advance or wallet concept exists (FIN-01 §3) | **Mission Control ruling:** a Source 11 addition for the advance behaviour, or a recorded ruling that `16:FPDR-10` suffices |
| Contract 03 (`d8c26c07`) §4 | "Credit — an amount owed to or by a relevant party"; supports the advance obligation | **No contract amendment** (FIN-01 §4.1, §16). Mission Control to confirm the interpretation |
| SB-P-1.14 EIS (`899a0fe1`) | `EIS14-LDG-02` supports `owed_by_business`; `EIS14-TOT-01` keeps credit out of sales and income; `EIS14-LDG-03` is one repayment to one target. No advance subtype, provenance or application relation | **No SB-P-1.14 rewrite expected.** The advance subtype, provenance and application relation belong in the SB-P-1.16 EIS and data model (FIN-01 §16). Upstream clarification is needed only if `EIS14-LDG-02` was meant to limit `owed_by_business` to suppliers; its literal wording does not |
| Contracts 14 and 15 | Compatible. `14-§18-3` gains an outcome; Contract 15 §13 reversal history is preserved | No contract change; decision cited on the rows |
| Approved Blueprint (`8e79636f`) §8.2, §8.8, §9, §10.1, §15.4 | No advance behaviour; §10.1 lists `16:FPDR-1` to `-9` | **Governed Blueprint revision** to add `16:FPDR-10` and trace the behaviour. Not authorized now |
| Canonical FCTM (`5ff7742f`) | No row changes; `14-§18-3` Founder-decision cell is "—" | **FCTM amendment** to cite `16:FPDR-10` on the Section 2.5 rows |
| Stage 7 draft (`1064ab18`) | §20.4.6 "store no advance" becomes stale (FIN-01 §18). §20.4.4 states that `owed_by_business` credit belongs to the supplier side; FIN-01 §16 shows that is a draft engineering interpretation, not a restriction in `EIS14-LDG-02` | Stage 7 v0.2 round: replace the §20.4.6 hold; correct the §20.4.4 statement; add the advance to the canonical balance definition (C-BAL) with the FIN-01 invariants |
| Decision log and README | No `16:FPDR-10` entry | Canonical recording step |

## 7. Remaining independent assurance

- **FIN-01 actor and independence.** FIN-01's header names its authority (MC-200) and mode, but not its actor, provider or prior involvement. Mission Control should record these before FIN-01 is counted as the non-author financial-integrity review the Stage 7 draft requires. If it is a non-Claude, non-author Finance Room session, it may meet that need for OQ-01.
- **Security and permissions.** The new Owner-reserved capabilities (retain, apply, refund), Employee exclusion, response filtering and no Manager default need an independent security review, alongside the open SR-02 HIGH findings.
- **Concurrency and idempotency.** Advance application and refund add new races: concurrent applications against one advance; an application racing a reversal of the source payment; replay of a retain decision. They need an independent concurrency review, alongside the five open SR-03 HIGH findings.
- **Unchanged.** The six Stage 7 specialist reviews (SR-01 to SR-06) remain non-independent. All 63 Stage 7 findings stay open.

## 8. Genuinely unresolved Founder-level questions

**None that blocks this record.** The Founder statements decide the core behaviour, and FIN-01 §17 finds no need to return the core concept to the Founder. The only Founder-level items are the optional expansions in Section 4, raised only if Mission Control wants them.

The questions from draft v0.1 are disposed of as follows:

| v0.1 question | Disposition |
|---|---|
| FQ-01 decision wording | Supplied (Section 2.1); Mission Control confirms the canonical text |
| FQ-02 Manager delegation | Optional expansion (Section 4); the default is Owner-only |
| FQ-03 refund recording | Engineering, following FIN-01 §10 |
| FQ-04 correction-created excess | Covered: stop with an exception, then an explicit Owner choice (D-5; FIN-01 §13) |
| FQ-05 presentation | Merchant and Ask CFO factual display is within `16:FPDR-4`, with advance and outstanding shown as separate facts (FIN-01 §5). Customer exposure is optional expansion |
| FQ-06 evidence-sourced advance | Covered by "Owner-confirmed excess". Whether the evidence must first be verified follows MQ-01, which is Mission Control's |

## 9. Preservation

- All 349 `IN SCOPE` FCTM commitments, all dispositions, owners and dependency codes are unchanged. That includes the 41 `DPAY` rows and the 7 `DNTF` rows.
- U-08 / DC-11, U-10, R15-11, F-7 and the `16:FPDR-9` deferred branches stay open.
- `16:FPDR-1` to `16:FPDR-9` are unchanged.
- OQ-02 to OQ-05, MQ-01 to MQ-06, G-W1 and all 63 Stage 7 findings stay open.

## 10. Not done

No canonical file was changed. Nothing was committed, pushed, opened as a PR or merged. No Product Truth, Founder decision, Blueprint, FCTM or EIS was modified. No Stage 7 v0.2 edit, SQL, migration, provider operation or implementation.

**STOP FOR MISSION CONTROL REVIEW.**

**Stage 7 Final Approval: WITHHELD. Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
