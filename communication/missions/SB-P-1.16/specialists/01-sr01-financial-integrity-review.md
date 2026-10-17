# SB-P-1.16 — Stage 7 SR-01 Financial Integrity Specialist Review

**Assignment:** SR-01 — Financial Integrity specialist review, under MC-183  
**Authority:** Source 18 v1.2 Stage 7 and §4.8; MC-183  
**Reviewer:** Claude subagent (general-purpose agent), model family Claude (Anthropic), fresh context, spawned and briefed by Claude Code (the Stage 2–4, 6 and 7 author) on 2026-10-17  
**Independence:** NOT INDEPENDENT — same provider and model family as the Stage 7 author, and briefed by that author. Separately attributable only. No prior SB-P-1.16 authorship in this context.  
**Baseline:** `main@abd5e0d547aabc315513e8901edecfd327edaaf9`  
**Status:** DRAFT SPECIALIST REPORT — READ-ONLY — FINDINGS ARE INPUTS, NOT AUTHORITY  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. Reviewer provenance and limits

- This review was produced by a Claude subagent with a fresh context, spawned and briefed by Claude Code, the author of the Stage 7 draft under review. It shares provider, model family and briefing with that author. It is separately attributable, not independent assurance.
- Scope is financial integrity only: exactly-once financial meaning, credit facts on the SB-P-1.14 four-state Ledger, repayment allocation and linkage, due dates and ageing, the authoritative balance, historical attribution, overpayment, settlement variance as it affects financial truth, reversals, corrections and audit. Security, concurrency mechanics, migration sequencing, provider adapters and retention are mentioned only where they change financial truth.
- The review is documentary. No database, Supabase project, provider, CLI or network resource was accessed. No SQL was executed. Nothing was built or tested.
- Not verifiable here: the shape and count of historical credit-method sales and any historical repayments recorded as `sale` rows (OQ-05; `UNVERIFIED — ACCESS REQUIRED`); actual provider event and settlement formats; whether SB-P-1.14 or SB-P-1.12 owners accept the command extensions this review says are needed.
- Findings are inputs to Mission Control. They do not change Product Truth, FCTM dispositions, Founder decisions or open questions OQ-01 to OQ-05.

## 2. Evidence inspected

| Path | Blob |
|---|---|
| `communication/missions/SB-P-1.16/claude-code/18-stage7-blueprint-sections-20-21-draft.md` | `1064ab18` |
| `communication/missions/SB-P-1.16/claude-code/17-stage6-builder-review.md` | `c9a93566` |
| `communication/missions/SB-P-1.16/claude-code/02-stage2-populated-fctm.md` | `5ff7742f` |
| `communication/missions/SB-P-1.16/claude-code/09-stage3-founder-product-decision-record-draft.md` | `30b19a80` |
| `docs/phase-1-mission-blueprint/active/SB-P-1.16.md` | `8e79636f` |
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md` | `899a0fe1` |
| `supabase/migrations/20260719102137_55a1dac6-b26a-47e6-aed3-305b9b20636b.sql` | `b79ad8e7` |
| `communication/missions/SB-P-1.15/specialists/03-stage7-financial-integrity-review.md` (format precedent only) | not relied on for content |

The Stage 7 engineering review report (`19-stage7-engineering-review-report.md`, blob `a3b644f0`) was not needed for any finding; all draft pointers below refer to blob `1064ab18`.

## 3. Method

1. Read Stage 7 draft §20.3 (component map), §20.4.1 to §20.4.11, §20.6, §20.7.8, §21.1, §21.5 and the register rows for components C-LDG, C-BAL, C-REP, C-DUE, C-AUD, E-LINK and E-RVS, plus adjacent rows (C-EXC, E-REV, E-STATE) where a financial-integrity row was assigned there.
2. Read the locked SB-P-1.14 EIS entries `EIS14-LDG-01` to `-06`, `EIS14-TOT-01` and `EIS14-CMD-01` to `-03` (lines 131 to 147) and compared each Stage 7 proposal with what those entries actually guarantee.
3. Read the Founder decision texts `16:FPDR-2`, `16:FPDR-3`, `16:FPDR-5` and `16:FPDR-6` §§2, 5, 6 and `16:FPDR-9` §8 verbatim, and the Stage 6 findings SB16-B6-04, -05, -06, -07, -11, -15 and -21.
4. Worked the balance algebra of §20.4.4 by hand against these cases: a sale corrected away from `credit` after a repayment was linked; a target amount corrected below its linked repayments; a repayment amount corrected upward; a repayment re-targeted; a partial repayment; a lump sum across several targets; a verified part-payment versus a mismatch; a reversal of repayment evidence; an unattributed historical sale with and without linked repayments; and repayments against `owed_by_business` credit.
5. For each case, checked whether any path could create a duplicate sale, income or repayment, whether verification state could itself change Ledger truth, and whether the Ledger could express the needed outcome under the existing `amount > 0` check and the `EIS14-CMD-03` no-delete closure.
6. Verified every cited FCTM row ID against the canonical FCTM.

## 4. Findings

### SR01-01 — Corrections can break the repayment-to-target invariant; §20.4.4 relies on a check that does not run at correction time

- **Severity:** HIGH
- **Evidence:** Stage 7 draft §20.4.4 line 103: "If a correction changes a sale away from `credit`, the `EIS14-LDG-03` revalidation applies to its linked repayments and the case goes to review." SB-P-1.14 EIS line 133 (`EIS14-LDG-03`): the revalidation runs "inside the commit transaction" of the governed command that writes a `repayment`, and "No remaining-balance, overpayment, ageing, allocation or reconciliation rule exists in SB-P-1.14 (SB-P-1.16)". SB-P-1.14 EIS line 146 (`EIS14-CMD-02`): the correction command preserves `FPDR-1`/`FPDR-4` semantics but states no rule about repayments already linked to the corrected row. Stage 7 draft §20.4.6 line 117 applies the excess stop only to "a payment or allocation", not to corrections. Stage 6 SB16-B6-04 lines 92 to 97 names corrections that change a sale's payment method as a required case.
- **Affected FCTM IDs:** `14-§3-6`, `14-§7-4`, `14-§7-5`, `14-§7-6`, `14-§17-1`, `14-§17-2`, `14-§17-3`, `14-§18-3`, `14-§22-2`
- **Affected Stage 7 draft sections:** §20.4.2, §20.4.4, §20.4.6, §20.4.11; register rows for C-REP and C-AUD
- **Related Stage 6 findings:** SB16-B6-04, SB16-B6-05, SB16-B6-07
- **Engineering implication:** `EIS14-LDG-03` protects the repayment write, not later corrections to the target or to the repayment. Under the §20.4.4 formula the following corrections each produce wrong financial truth if they commit and are only "sent to review" afterwards:
  - a credit-method sale corrected to `cash`: the sale now counts as money collected at sale, and its linked repayment rows still exist as money received, so the same money is counted twice in any collected or repaid measure, and the repayments have no valid target;
  - a target amount corrected below the sum of its linked repayments: target outstanding becomes negative, which is a stored customer advance in effect, the behaviour OQ-01 holds open;
  - a repayment amount corrected upward, or a repayment re-targeted to another target, with the same results on the receiving target;
  - a standalone `credit` corrected from `owed_to_business` to `owed_by_business` with linked customer repayments.
- **Required correction or evidence obligation:** The Stage 7 draft should state one invariant and enforce it before commit, not by after-the-fact review: for every settlement target, the sum of its active linked repayments never exceeds its current amount, and every active repayment references a target that is currently valid under `EIS14-LDG-03`. Every governed command that can change an operand (record repayment, allocation, correct repayment amount, re-target repayment, correct target amount, payment method, type or direction) must check it in the same transaction and, if it would fail, stop and return a clarification (the §20.4.6 interim control, extended to corrections). The draft should say whether this needs an `EIS14-CMD-02` extension owned by SB-P-1.14 and, if so, list it beside G-W1 as an upstream specification matter. §21.1 EQ-03 "Upstream amendment needed? No" should be revisited. Fast Gate and Full Assurance tests should include each correction case above.
- **Uncertainty:** SB-P-1.14 may intend `EIS14-CMD-02` to forbid changing `payment_method` on a sale that has linked repayments; its text does not say so. If the SB-P-1.14 owner confirms that, the gap narrows to amount and re-target corrections.
- **Trigger screen:** none. This is an engineering design gap. Stopping such corrections stores no advance, so it adds no product behaviour. Any proposal to keep a negative outstanding after a correction would be OQ-01 (T3-W1), not decided here.

### SR01-02 — The path from verified evidence to a balance reduction is undefined, and §20.7.8 contradicts §20.4.4

- **Severity:** HIGH
- **Evidence:** Stage 7 draft §20.4.4 lines 101 to 104: target outstanding is target amount minus linked repayment amounts, with no reference to verification state. §20.7.8 line 298, Scenario B: "target outstanding reduced only by verified, linked repayment". §20.4.9 line 159: "Linking creates a link record against the existing sale or repayment target. It never creates a second financial transaction." FCTM `15-§11-4` ("allow classification/linking or creation through a governed flow") and `15-§11-5`. `16:FPDR-3` (FPDR record lines 96 and 101): "Only that verified amount may reduce the corresponding outstanding balance" and "No duplicate sale, income or repayment may result from verification". `16:FPDR-6` §5 (line 188).
- **Affected FCTM IDs:** `15-§8-1`, `15-§8-4`, `15-§8-7`, `15-§11-4`, `15-§11-5`, `15-§14-1`, `15-§14-2`, `14-§22-2`, `BP-§10.5-B1`
- **Affected Stage 7 draft sections:** §20.4.4, §20.4.7, §20.4.9, §20.7.8
- **Related Stage 6 findings:** SB16-B6-04, SB16-B6-14, SB16-B6-15
- **Engineering implication:** The draft allows evidence to link to "the existing sale or repayment target" but does not say what happens to the balance in each case:
  - evidence linked to a credit-method sale with no repayment row changes no balance under §20.4.4, so a customer who paid by gateway still shows as owing;
  - if a later design lets the resolution create a repayment, and the Owner had already recorded the same payment as a cash or UPI repayment, the result is a duplicate repayment, which `16:FPDR-3` and `16:FPDR-6` §5 forbid;
  - §20.7.8 implies that verification state gates the balance, while §20.4.4 makes the balance purely a Ledger quantity. If verification state gated the balance, a reversal or a review outcome would change Ledger truth without a governed correction, which §20.4.10 forbids.
- **Required correction or evidence obligation:** The draft should define link types explicitly: (a) evidence verifies an existing `repayment` row; (b) evidence is resolved against a credit target that has no matching repayment, which creates exactly one `repayment` row through `EIS14-CMD-01` in the same transaction as the link, keyed for idempotency on the evidence identity, after the matcher has shown any existing unverified repayment rows for that target as candidates to link instead; (c) evidence for a sale paid at the time of sale verifies that sale. It should state that the authoritative balance is computed from Ledger rows only, and that verification state is shown beside it (for example "repaid, of which verified") and never changes it. §20.7.8 should be reworded to match. Mission Control should confirm the reading of the `16:FPDR-3` sentence "Only that verified amount may reduce the corresponding outstanding balance": either it governs the evidence path only (an evidence-backed repayment reduces the balance by the verified amount, not by the evidence total), or it means unevidenced Owner-recorded repayments do not reduce the balance. The draft appears to assume the first reading without saying so.
- **Uncertainty:** The first reading is consistent with `14:FPDR-4`, Contract 14 §7 and Blueprint §8.2 ("A repayment reduces the correct credit relationship"). This reviewer did not read Contract 14 or Contract 15 directly beyond FCTM pointers.
- **Trigger screen:** none fired by this review. Conditional: if Mission Control or the Founder read `16:FPDR-3` as requiring verification for every balance reduction, that reading should be screened for T8 against `14:FPDR-4` and `14-§7-4` before the EIS fixes the balance definition.

### SR01-03 — Reversal of a repayment cannot be expressed through the governed correction path as specified

- **Severity:** HIGH
- **Evidence:** Stage 7 draft §20.4.10 line 170: a reversal "does not change the Ledger or the balance until the Owner runs a governed correction"; §20.4.4 line 104. The current schema has `amount NUMERIC(12, 2) NOT NULL CHECK (amount > 0)` (`supabase/migrations/20260719102137_55a1dac6-b26a-47e6-aed3-305b9b20636b.sql` line 9, blob `b79ad8e7`), kept by `EIS14-LDG-02` ("amount stays positive"). `EIS14-CMD-03` (SB-P-1.14 EIS line 147) removes direct `DELETE`. `EIS14-CMD-02` (line 146) changes values with an append-only event; no void or cancel operation exists in the SB-P-1.14 EIS. `16:FPDR-6` §6 (FPDR record lines 190 to 193).
- **Affected FCTM IDs:** `15-§4-7`, `15-§13-1`, `15-§13-2`, `15-§13-3`, `15-§21-10`, `15-§25-12`, `14-§17-3`
- **Affected Stage 7 draft sections:** §20.4.4, §20.4.10, §20.4.11; register rows for E-RVS
- **Related Stage 6 findings:** SB16-B6-15, SB16-B6-07
- **Engineering implication:** When a chargeback shows that a recorded repayment never truly happened, the Owner needs the Ledger to say "this repayment is void". The repayment amount cannot be corrected to zero, the row cannot be deleted, and re-targeting is wrong. The only remaining options are workarounds such as recording a new standalone `credit` for the same amount, which creates a second financial fact and breaks exactly-once meaning, or leaving the balance understated. The same gap applies to a refund of a credit-method sale.
- **Required correction or evidence obligation:** The draft should name a governed, audited way to void or reverse a `repayment` (and to record a refund against a sale), state that voided repayments are excluded from target outstanding and from every repaid or collected measure, and state who owns it. This probably needs an SB-P-1.14 `EIS14-CMD-02` extension or a defined SB-P-1.16 command on the `DTX` path. That should be routed to Mission Control in the same way as G-W1. SB16-B6-15 should move from "DESIGNED" to "DESIGNED / ROUTED" until this is settled. §21.1 EQ-11 "Upstream amendment needed? No" should be revisited.
- **Uncertainty:** SB-P-1.14 may already plan a void status outside the text read here; this reviewer found none by searching the EIS for void, cancel and reversal.
- **Trigger screen:** none. A Ledger void is an engineering mechanism for the already-approved `15-§13-3` and `16:FPDR-6` §6 behaviour, not new product behaviour. If the chosen mechanism adds a new merchant-visible Ledger type or label, screen it for T3.

### SR01-04 — Lump-sum allocation conflicts with "at most one active link per evidence item"

- **Severity:** MEDIUM
- **Evidence:** Stage 7 draft §20.4.2 line 88 (one lump sum becomes one repayment row per target); §20.4.9 line 162 ("at most one active link per evidence item, enforced by a uniqueness rule on active links"). Stage 6 SB16-B6-05 line 105.
- **Affected FCTM IDs:** `14-§7-7`, `14-§18-3`, `15-§8-1`, `15-§14-1`, `15-§14-4`
- **Affected Stage 7 draft sections:** §20.4.2, §20.4.7, §20.4.9
- **Related Stage 6 findings:** SB16-B6-05, SB16-B6-14
- **Engineering implication:** One gateway payment of a lump sum covering three credits produces three repayment rows, but the uniqueness rule allows the evidence item to link to only one of them. Either two rows stay unverified despite evidence, or the rule is relaxed without an amount guard, which allows over-linking. The opposite case also occurs: one recorded repayment paid through two transfers needs two evidence items on one repayment.
- **Required correction or evidence obligation:** The draft should define link cardinality with amounts. For example, each link carries a linked amount; the sum of active linked amounts per evidence item never exceeds the evidence amount, and per repayment never exceeds the repayment amount; or evidence links to the allocation command's group, with one link per group. The part-payment and mismatch classification (SR01-05) then uses these sums. Fast Gate fixtures should cover one-to-many and many-to-one.
- **Uncertainty:** The draft may intend the allocation group to be the link target; it does not say so.
- **Trigger screen:** none.

### SR01-05 — The verified part-payment versus mismatch predicate is not defined

- **Severity:** MEDIUM
- **Evidence:** Stage 7 draft §20.4.7 line 132 ("A verified part-payment and a mismatch never share a label") and the §20.6 row for SB16-B6-12. `16:FPDR-3` (FPDR record lines 96 to 99): a part-payment "must not be treated as a mismatch solely because it is less than the full amount owed"; a mismatch is evidence that "differs materially from the expected or recorded transaction details".
- **Affected FCTM IDs:** `15-§4-3`, `15-§4-5`, `15-§4-8`, `14-§18-8`, `BP-§10.5-E2`
- **Affected Stage 7 draft sections:** §20.4.7, §20.4.9
- **Related Stage 6 findings:** SB16-B6-11, SB16-B6-12
- **Engineering implication:** Without a stated comparison basis, a matcher that compares evidence with the target's outstanding amount would label every legitimate part-payment a mismatch, which `16:FPDR-3` forbids. A matcher that compares with nothing would label real discrepancies as part-payments.
- **Required correction or evidence obligation:** The draft should state the comparison basis: evidence is compared with the Ledger repayment it verifies (or with the repayment it creates under SR01-02 (b)), not with the target outstanding. Evidence smaller than the target outstanding but equal to the repayment amount is a verified part-payment. Evidence that differs from the recorded repayment amount, currency or direction is a mismatch until reviewed. Settlement net amounts are compared at line level only (§20.4.9) and never with a target. The Fast Gate state-table fixtures should include each case. Exact thresholds and labels remain design matters under `16:FPDR-3`.
- **Uncertainty:** Low. The draft's FG tier already lists the state table; this finding asks for the predicate to be written down before EIS.
- **Trigger screen:** none.

### SR01-06 — A repayment's own participant reference creates a second identity source

- **Severity:** MEDIUM
- **Evidence:** Stage 7 draft §20.4.1 line 77: "Credit-bearing rows are a `sale` with `payment_method = credit`, a `credit` with direction `owed_to_business`, and a `repayment`", each carrying the participant reference. §20.4.4 line 102: customer balance sums over attributed targets. `EIS14-LDG-03` (SB-P-1.14 EIS line 133): a repayment references exactly one target.
- **Affected FCTM IDs:** `14-§4-1`, `14-§7-2`, `15-§14-3`, `3-§9-12`, `BP-§10.5-W2`
- **Affected Stage 7 draft sections:** §20.4.1, §20.4.4, §20.4.5
- **Related Stage 6 findings:** SB16-B6-04, SB16-B6-06
- **Engineering implication:** The balance follows the target's reference, but a repayment-history reader (`BP-§10.5-W2`, "how much was repaid this week") might use the repayment's own reference. After a re-attribution of the target, or an Owner attribution of a historical sale that already has repayments, the two disagree, and one customer is shown repayments that reduced another customer's balance (`15-§14-3`).
- **Required correction or evidence obligation:** The draft should either derive a repayment's customer from its target only, or state an equality invariant that every attribution or re-attribution command updates atomically, in one audited event, for the target and all its linked repayments. A reader-parity test should compare repayment history with balance movements per customer.
- **Uncertainty:** A separate repayment reference may be wanted for repayments recorded before a target is chosen; the draft does not allow targetless repayments, so that need does not appear to arise.
- **Trigger screen:** none.

### SR01-07 — The unattributed total and the historical attribution preview need defined arithmetic and disclosure

- **Severity:** MEDIUM
- **Evidence:** Stage 7 draft §20.4.4 line 104 ("reported as a separate 'unattributed credit' total"); §20.4.5 lines 110 to 113 (preview shows "the resulting balance"). `16:FPDR-2` (FPDR record lines 73 to 77): unattributed sales "remain visibly unattributed", attributed sales count "accounting for all supported repayments, corrections and reversals", and "missing or uncertain financial facts must remain clearly disclosed". Stage 6 SB16-B6-06 line 113: historical repayments may have been recorded as `sale` rows.
- **Affected FCTM IDs:** `3-§9-12`, `14-§5-7`, `14-§22-1`, `BP-§10.5-W1`
- **Affected Stage 7 draft sections:** §20.4.4, §20.4.5
- **Related Stage 6 findings:** SB16-B6-06
- **Engineering implication:** The draft does not say whether the unattributed total is gross sale amounts or net of linked repayments, or whether a repayment may be linked to a still-unattributed historical sale. For historical data, repayments that were never recorded, or were recorded as cash `sale` rows, are not linked to anything. Both the unattributed total and the post-attribution customer balance therefore overstate what is owed, and the preview would present that overstated figure as the customer's balance.
- **Required correction or evidence obligation:** The draft should define the unattributed total with the same target-outstanding arithmetic as attributed targets. It should state that repayments may link to an unattributed target, which leaves it unattributed. It should require the attribution preview to list the sale's linked repayments and to state that repayments outside the system are not reflected. None of this permits detecting or reinterpreting historical rows (`EIS14-LDG-04`); the disclosure is the control.
- **Uncertainty:** The OQ-05 data profile may show few historical credit sales, which would lower the practical impact but not the requirement.
- **Trigger screen:** none. The disclosure wording is required by `16:FPDR-2` and adds no behaviour.

### SR01-08 — "Collected" and "repaid" measures are claimed as designed but are not defined

- **Severity:** MEDIUM
- **Evidence:** Stage 7 draft §20.6 line 225: SB16-B6-21 "DESIGNED — Distinct measures via `EIS14-TOT-01` and C-BAL". `EIS14-TOT-01` (SB-P-1.14 EIS line 137) defines sales, income, purchases and expenses and says `repayment` "contributes to no sales or income measure"; it defines no collected or repaid measure. §20.4.4 defines only balances. Stage 6 SB16-B6-21 line 238. §20.4.9 line 165 (settlement status never shown as funds in the bank).
- **Affected FCTM IDs:** `14-§11-4`, `14-§12-4`, `15-§15-3`, `15-§16-6`, `BP-§10.5-X`
- **Affected Stage 7 draft sections:** §20.4.4, §20.4.9, §20.6
- **Related Stage 6 findings:** SB16-B6-21, SB16-B6-11
- **Engineering implication:** "How much was repaid this week" and "what was actually paid" need a measure that neither upstream definition provides. Without one, readers will build their own and diverge from C-BAL, which is the DC-07 risk the draft rates High in §21.3. Specific errors to prevent: counting repayments against `owed_by_business` credit (money the business paid out) as repayments received; counting voided repayments (SR01-03); and using evidence or settlement amounts, which are not Ledger facts, as money collected.
- **Required correction or evidence obligation:** The C-BAL definition should add named measures alongside the balance. Repayments received would be the sum of active, non-void repayment rows whose target is `owed_to_business`, by business-local date. Money collected at sale would come from sales with a non-credit `payment_method`, consistent with `EIS14-TOT-01`. The draft should state that evidence and settlement amounts never feed these measures. SB16-B6-21 should read "DESIGNED (pending measure definition)" until this is added.
- **Uncertainty:** The SB-P-1.15 reader EIS may define some of this; this reviewer did not read `SB-P-1.15-EIS.md`.
- **Trigger screen:** none.

### SR01-09 — Register defects in C-REP, C-AUD and duplicate-credit rows

- **Severity:** LOW
- **Evidence:** Stage 7 draft §20.8: eight C-REP rows (lines 389 to 391, 393 to 395, 451 and 677) cite "(§20.4.5)", which is historical attribution; allocation is §20.4.2 and excess is §20.4.6. Line 450: `14-§18-2` ("duplicate credit entry") is assigned C-EXC with risk "M: Global freeze; uncertain write committed". Lines 444 to 448: C-AUD risk text names only direct-UPDATE bypass and forged events.
- **Affected FCTM IDs:** `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§18-3`, `BP-§10.5-W2`, `14-§18-2`, `14-§17-3`
- **Affected Stage 7 draft sections:** §20.8
- **Related Stage 6 findings:** SB16-B6-05, SB16-B6-07
- **Engineering implication:** Wrong section pointers send the EIS author to the wrong control. `14-§18-2` is an exactly-once financial row whose main risk is a duplicate credit fact; rating it M with a narrow-failure risk understates it and points its verification at the wrong tests. The C-AUD risk omits the orphaned-repayment and negative-outstanding risks in SR01-01.
- **Required correction or evidence obligation:** Correct the C-REP pointers to §20.4.2 (and §20.4.6 for `14-§18-3`). Give `14-§18-2` an H duplicate-credit risk with idempotent-replay and duplicate-detection verification, keeping its narrow-failure aspect. Add the SR01-01 risk to `14-§17-3`. No disposition, owner or status changes.
- **Uncertainty:** None material.
- **Trigger screen:** none. These are documentation corrections; no row is narrowed or reassigned.

## 5. Dissent from the Stage 7 draft

- **§20.4.4, correction case.** I disagree that `EIS14-LDG-03` revalidation covers a sale corrected away from `credit`. That check runs when a repayment is written. Post-commit review is not an adequate control for an invariant that protects exactly-once meaning (SR01-01).
- **§20.7.8 Scenario B.** "Target outstanding reduced only by verified, linked repayment" contradicts §20.4.4 and, read literally, makes verification state change financial truth (SR01-02).
- **§20.6 dispositions.** SB16-B6-15 is marked DESIGNED, but the Ledger mechanism it depends on is missing (SR01-03), so it should be DESIGNED / ROUTED. SB16-B6-21 is marked DESIGNED, but no collected or repaid measure is defined (SR01-08).
- **§21.1 EQ-03 and EQ-11.** "Upstream amendment needed? No" may be wrong if the correction-time invariant or the repayment void requires an `EIS14-CMD-02` extension. That would be an upstream engineering-specification matter like G-W1, not a Product Truth conflict.
- **§21.5 "held is not T8".** No dissent within this domain. The financial-integrity rows reviewed here are held by recorded, unbuilt dependencies (`D12`, `D14`, `DTX`, `DPAY`), and none of the gaps above makes a row infeasible: each has a known engineering remedy that adds no product behaviour. The conditional T8 screen in SR01-02 depends on a Mission Control reading of `16:FPDR-3`, which this review does not make.

## 6. Infeasible, unsafe, omitted, narrowed or reassigned rows

None found. No row in this domain is infeasible, unsafe, omitted, narrowed or reassigned by the Stage 7 draft. SR01-01 to SR01-03 are design gaps that must be closed before the EIS fixes the balance, linkage and reversal designs. They do not make any row infeasible.

## 7. Summary

| Finding ID | Severity | Short title | Correction required |
|---|---|---|---|
| SR01-01 | HIGH | Corrections can break the repayment-to-target invariant | yes |
| SR01-02 | HIGH | Evidence-to-balance path undefined; §20.7.8 contradicts §20.4.4 | yes |
| SR01-03 | HIGH | Repayment reversal not expressible on the governed path | yes |
| SR01-04 | MEDIUM | Lump-sum allocation conflicts with one-link-per-evidence rule | yes |
| SR01-05 | MEDIUM | Part-payment versus mismatch predicate undefined | yes |
| SR01-06 | MEDIUM | Repayment participant reference is a second identity source | yes |
| SR01-07 | MEDIUM | Unattributed total and attribution preview arithmetic and disclosure | yes |
| SR01-08 | MEDIUM | Collected and repaid measures not defined | yes |
| SR01-09 | LOW | Register pointer and risk defects | yes |

**STOP FOR MISSION CONTROL SPECIALIST FINDINGS REVIEW.**

**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
