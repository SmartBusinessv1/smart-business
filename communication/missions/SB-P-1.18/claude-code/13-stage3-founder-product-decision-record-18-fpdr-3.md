# SB-P-1.18 — Founder Product Decision Record `18:FPDR-3` (`SB-P-1.18 / F-3`): Customer-Facing Interactions Before SB-P-1.20

**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Stage:** Source 18 v1.2 Stage 3 — Founder Decision Gate (triggered; remains open)
**Status:** `FOR REVIEW — EFFECTIVE ONLY ON FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION`
**Prepared by:** Claude Code, SB-P-1.18 Definition Actor. Drafted read-only under MC-560-A and corrected read-only under MC-561-A. Neither authorized repository publication
**Publication authority:** only a separate, bounded Mission Control Git-write grant under Protocol §16, issued after Mission Control content review of this text
**Baseline:** `main@c1110efa5715542b9765e2f35be69e3040374ab1`
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 0. How to read this record

| Kind | Where | Authority |
|---|---|---|
| **Founder statements (verbatim)** | Section 1.1 only | The Founder |
| **Accepted consent-instrument wording** | Section 1.2 | None. It is the accepted instrument's proposed text, not the Founder's words |
| **Mission Control record of the selections and interpretation** | Section 2 | Mission Control, as recorded in MC-560 |
| **Definition Actor analysis** | Sections 3–9 | None. Analysis and boundary accounting for review |

Where Sections 1.2–9 summarize, Section 1.1 prevails. Where Sections 3–9 differ from Section 2, Section 2 prevails.

**Identifier check.** At `main@c1110efa5715542b9765e2f35be69e3040374ab1`, the string `18:FPDR-3` appears in no SB-P-1.18 repository record. `claude-code/11-stage3-founder-product-decision-record-18-fpdr-2.md` §0 reserves `-3` for F-3 "without presuming any outcome". `18:FPDR-1` and `18:FPDR-4` stay reserved for F-1 and F-4.

## 1. The decision

### 1.1 Verbatim Founder statements

**(a) Architectural direction (MC-555, PR #1084 comment 6419422473)**

> "build the Smart Business engine first, then connect the customer-facing WhatsApp experience through SB-P-1.20, without duplicating the work"

**(b) Row-by-row selections: Founder chat statement, supplied verbatim to Mission Control and reproduced in MC-561 (PR #1084 comment 6437728240)**

```text
MC-559-E Founder row-specific direction for MC-560 verification. These are my explicit choices under the accepted F-3 v2+v2a+v2b responsibility map.
Package P:
1-§5-24: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit E-1
1-§5-25: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit E-4
1-§5-26: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit E-6
1-§5-27: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit E-4/E-5
1-§5-28: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit E-6
1-§5-29: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit A-STOP
1-§7-1: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit A-WEL
1-§7-2: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit A-STOP
1-§7-4: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit A-WEL
1-§7-5: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit R-4/16
1-§17-3: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit E-4
1-§17-5: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit E-5
1-§17-6: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit E-5
1-§20-1: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit R-10/16
1-§24-13: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit R-19/24
1-§26-1: APPROVE native SB-P-1.18 plus exact customer-channel SB-P-1.20 unit E-1 + separate test
Package W:
1-§7-3: APPROVE WHOLE ROW to SB-P-1.20 via R-17
1-§8-2: APPROVE WHOLE ROW to SB-P-1.20 via E-1 · text
1-§8-3: APPROVE WHOLE ROW to SB-P-1.20 via E-1 · voice
1-§8-4: APPROVE WHOLE ROW to SB-P-1.20 via E-1 · image
1-§8-5: APPROVE WHOLE ROW to SB-P-1.20 via E-1 · document
All unspecified rows unchanged; 1-§15-4 held for F-4. No automatic transfer. Preserve original ADD-ON + BUILD NOW before first 10 pilot merchants commitment without deferred deadline. Preserve F-1, F-4, DC-13, AEG-1, C1 §17, U-09 and acceptance dependencies. This is for MC-560 verification, not implementation or Git edits.
```

MC-560 (PR #1084 comment 6437479709) is Mission Control's repository-side record and index of these selections (Section 2).

**(c) Shared-engine clarification: Founder chat statement, supplied verbatim to Mission Control and reproduced in MC-561 (PR #1084 comment 6437728240)**

```text
# FOUNDER CLARIFICATION — MC-559-E

I accept the three-package decision structure for MC-559-E.

Before recording my row-specific selections, preserve one explicit architectural boundary:

Assignment of WhatsApp channel responsibility to SB-P-1.20 must never transfer ownership of order truth, shared document and voice interpretation, business permissions, consent state, financial recording or the end-to-end business lifecycle away from their applicable shared Smart Business engines.

For #6/#8, WhatsApp-specific STOP handling must integrate with authoritative consent enforcement.

For #12–#15, whole-row transfer concerns customer-channel intake, not duplicated text, voice, image or document processing engines.

For #20, reuse shared language capabilities.

For #22, WhatsApp E-1 acceptance must remain separate from the full business-order scenario.

These are interpretations of the approved shared-engine architecture, not new feature requirements or blanket T7 consent.

No additional governance review is requested merely for this clarification. Proceed with the grouped Founder decision intake and preserve existing holds.
```

MC-561 notes that this clarification followed the row-selection text in the conversation, even though it refers to the intake stage. It is an interpretive boundary on the selections in (b). It is not a new requirement and not blanket T7 consent.

The direction in (a) is **not** row-specific T7 consent (MC-555). The row selections rest on (b) only.

### 1.2 Accepted consent instrument (not the Founder's words)

The selections were made against the instrument accepted under MC-558-R2:

- **[F-3 v2](https://github.com/SmartBusinessv1/smart-business/pull/1084#issuecomment-6420045996)** — 22 rows; channel-unit catalogue E, R, A, H; deadline rule; holds.
- **[v2a](https://github.com/SmartBusinessv1/smart-business/pull/1084#issuecomment-6420168645)** — evidence levels L0–L5; human reading is never inferred.
- **[v2b](https://github.com/SmartBusinessv1/smart-business/pull/1084#issuecomment-6420275831)** — L1 and L2 show only that the send path works; L3, where reported, is the only customer-delivery evidence; AEG-1.

Its Founder-facing caveats, adopted with the selections:

> **Delivery evidence is not human reading.** … Silence is never treated as reading, approval or rejection. (v2a §4)

> For outbound customer messages, **L1 (channel submission) and L2 (provider acceptance) confirm only that the channel send path functions. They are not evidence of customer delivery or receipt.** … (v2b §2)

## 2. Mission Control record (as recorded in MC-560, verbatim extracts)

### 2.1 Selections

> **Package P — expressly APPROVED exact native SB-P-1.18 + channel SB-P-1.20 leg:**
> `1-§5-24`→E-1; `1-§5-25`→E-4; `1-§5-26`→E-6; `1-§5-27`→E-4/E-5; `1-§5-28`→E-6; `1-§5-29`→A-STOP; `1-§7-1`→A-WEL; `1-§7-2`→A-STOP; `1-§7-4`→A-WEL; `1-§7-5`→R-4/16; `1-§17-3`→E-4; `1-§17-5`→E-5; `1-§17-6`→E-5; `1-§20-1`→R-10/16; `1-§24-13`→R-19/24; `1-§26-1`→E-1 + separate full order test.

> **Package W — FIVE separately and expressly APPROVED whole-row SB-P-1.20 channel-obligation assignments:** `1-§7-3`→R-17; `1-§8-2`→E-1 text; `1-§8-3`→E-1 voice; `1-§8-4`→E-1 image; `1-§8-5`→E-1 document.

> **Package H — no F-3 consent:** `1-§15-4` retained IN SCOPE / held for F-4.

### 2.2 Architectural interpretation

MC-560 calls this a "binding constraint on drafting; not additional requirement":

> Ownership of order truth, shared voice/document interpretation, business permissions, native consent state and enforcement, financial records, shared language capability and complete business lifecycle stays with the existing applicable Smart Business engines. WhatsApp/SB-P-1.20 is a **thin transport/channel adapter**; no duplicated engine or security authority. For #6/#8 A-STOP is channel receipt bridged into authoritative native STOP consent enforcement (DC-13 still T6-pending). For #12–15 the five 'whole-row transfers' refer exclusively to ownership of these *customer-initiated channel intake obligations*; do not move or recreate general text/voice/image/document interpretation engines. #20 R-10/16 reuses existing language layer. #22 E-1 customer-leg acceptance remains separate from full end-to-end business-order scenario; E-12 is not a substitute.

## 3. Classification (Definition Actor analysis)

| Trigger | Treatment |
|---|---|
| **T7** (mission assignment) | **Fired and decided for 21 rows.** BP §11, final paragraph: assignment to a later mission needs BP §§9–12 or the contract's own dependency, otherwise "the change goes to the Founder". No approved source named SB-P-1.20 for these units (U-01; Brief Annex B). The Founder's express row-specific consent (Section 1.1 (b)) is that authority, under Source 18 §3.2 item 5 |
| T1, T3 (U-01) | **Resolved for the same 21 rows.** **Open for `1-§15-4`**, which is held on F-4 |
| T2, T4, T5, T8 | Not fired by F-3 |
| T6 | **DC-13** (consent and STOP state) and the **C1 §17 "may include"** source-semantics screening stay Mission Control matters. Neither is decided here |
| Timeline | **No timeline or commitment change.** None was proposed or decided |

## 4. The 21 selections and the held row

Paths and row IDs are as in the FCTM `claude-code/03-stage2-populated-fctm.md` (blob `c97ec77e88a7b3b3147eb4b0d5db16a4d0590b92`). Unit references (E, R, A) are as defined in F-3 v2 §1 as amended by v2b. The channel acceptance tests are in v2 §4 as amended by v2a §3 and v2b §2.

### 4.1 Package P — native stays in SB-P-1.18; named channel leg assigned to SB-P-1.20 (16 rows)

| # | Row | Obligation (C1) | Stays in SB-P-1.18 (native) | Assigned to SB-P-1.20 (channel leg) | Holds |
|---|---|---|---|---|---|
| 1 | `1-§5-24` | §5 Customer b2: place an order through an approved channel | Merchant capture (`1-§8-6` to `-10`) on the shared order engine | E-1 `1-§18-1`: customer-initiated ordering | — |
| 2 | `1-§5-25` | §5 Customer b3: accept/modify/cancel a proposed change | Merchant-recorded decision bound to exact order state (`1-§10-8`; DC-02) | E-4 `1-§18-4`: inbound customer response, bound per C23 §15 | — |
| 3 | `1-§5-26` | §5 Customer b4: provide address/location | Merchant entry; Shared Location primitive | E-6 `1-§18-6`: customer location sharing | **F-1** |
| 4 | `1-§5-27` | §5 Customer b5: receive confirmations/status | Notification events (`12:FPDR-1`, native) | E-4 / E-5: delivery to the customer | **AEG-1** |
| 5 | `1-§5-28` | §5 Customer b6: report delivery issues | Merchant-recorded issue | E-6: customer issue report | — |
| 6 | `1-§5-29` | §5 Customer b7: unsubscribe | **Authoritative** native consent/STOP state and enforcement | A-STOP: channel receipt bridged to native state | **DC-13** |
| 7 | `1-§7-1` | §7 p1: identify the merchant and the purpose | Welcome content, enabled state, once-only flag | A-WEL: sending the welcome | **AEG-1**; U-09 |
| 8 | `1-§7-2` | §7 b1: STOP behaviour | Native STOP enforcement | A-STOP | **DC-13** |
| 10 | `1-§7-4` | §7 b3: no repeated welcome spam | Once-only rule state | A-WEL, with C23 §16 duplicate suppression | — |
| 11 | `1-§7-5` | §7 b4: no promotional abuse | Native purpose restriction | R-4/16 (C23 §4, §16) | — |
| 17 | `1-§17-3` | §17 b2: confirmation/change request | Notification event; native recipients | E-4 | **AEG-1**; C1 §17 screening |
| 18 | `1-§17-5` | §17 b4: delivery started/status | As #17; no customer live-location view (`18:FPDR-2`) | E-5 | **AEG-1**; C1 §17 screening |
| 19 | `1-§17-6` | §17 b5: delivery completed | As #17 | E-5 | **AEG-1**; C1 §17 screening |
| 20 | `1-§20-1` | §20 p1: English/Malayalam/Manglish | Shared language layer; preference on the shared customer identity | R-10/16 (C23 §10, §16), reusing the language layer | — |
| 21 | `1-§24-13` | §24 b13: channel delivery failure | Order-side handling. Upstream foundation `22-§12-9` (SB-P-1.12 FCTM, owned by SB-P-1.15) | R-19/24 (C23 §19, §24) | — |
| 22 | `1-§26-1` | §26 b1: customer text order → draft → confirmation | Native leg: merchant-captured order → draft → merchant-recorded confirmation | E-1 customer leg, plus a **separate** full order test. E-12 is not a substitute | — |

### 4.2 Package W — whole row assigned to SB-P-1.20 (5 rows)

**What transfers is the customer-channel obligation only:** ownership of each customer-initiated channel intake obligation. **What never transfers:** the shared text, voice, image and document interpretation engines (D13, DV, D14 / UDI) stay with their owners and are neither moved nor recreated (Section 1.1 (c)).

| # | Row | Obligation (C1) | Assigned to SB-P-1.20 | Native unit |
|---|---|---|---|---|
| 9 | `1-§7-3` | §7 b2: approved templates/provider rules | R-17 (C23 §17) | None |
| 12 | `1-§8-2` | §8 customer-initiated b1: text | E-1 (text) | None. Merchant-initiated text stays `1-§8-8` |
| 13 | `1-§8-3` | b2: voice | E-1 (voice) | None (`1-§8-8`) |
| 14 | `1-§8-4` | b3: image of a handwritten list | E-1 (image) | None (`1-§8-9`) |
| 15 | `1-§8-5` | b4: supported document | E-1 (document) | None (`1-§8-10`) |

### 4.3 Package H — held (1 row)

| # | Row | State |
|---|---|---|
| 16 | `1-§15-4` | C1 §15 b3 OTP/signature/photo. **No F-3 consent.** It stays `IN SCOPE` in SB-P-1.18, blocked on `DNTF`, held on F-4 |

**Count.** 16 + 5 + 1 = **22**.

## 5. Engine and channel boundary (from Section 2.2; Definition Actor restatement)

**Stays with the existing Smart Business engines:**
- order truth and the complete business lifecycle;
- shared voice and document interpretation;
- business permissions;
- native consent state and its enforcement;
- financial records;
- the shared language capability.

**SB-P-1.20** is a **thin transport and channel adapter**. It holds no duplicated engine and no security authority, consistent with BP §8.4 and BP §11 ("must not create missing core business behavior inside the adapter").

**New SB-P-1.20 acceptance units:** only A-STOP and A-WEL. R-units reuse existing C23 duties and E-units reuse existing SB-P-1.20 assignments. **Reuse means no duplicate standalone subsystem.** It does not mean no engineering work: each reused leg still needs its own channel acceptance test, and any integration work within the existing duty.

## 6. Preserved commitments and acceptance rules

1. **Deadline.** Every one of the 22 rows keeps `ADD-ON + BUILD NOW — before first 10 pilot merchants`. Assignment to SB-P-1.20 **does not defer** it: the assigned legs and rows must be accepted at SB-P-1.20 before the first ten pilot merchants (S09; BP §5.5; U-09). Any later completion needs a separate, express Founder T7 timeline decision. None is made here.
2. **Native evidence does not demonstrate customer-channel behaviour.** Until each named leg passes its test, the record states "customer channel: not demonstrated".
3. **Delivery evidence (v2a, v2b).**
   - L1 and L2 show only that the send path works.
   - L3, where reported, is the only customer-delivery evidence, and is not human reading.
   - Where only L2 is available, the record states "provider accepted; customer delivery not independently confirmed".
   - Human reading is never inferred, and silence is never reading, approval or rejection.
4. **Protected rows.** The 12 existing SB-P-1.20 assignments are unchanged and not re-scoped: `1-§18-1` to `-6`, `1-§23-5b`, `1-§26-12b`, `6-§10-1b`, `16-§5-5b`, `16-§11-6b`, `16-§20-7b`. Also unchanged: `21-§13-2` (`DELEGATED`, SB-P-1.12) and `23-§4-3`, `23-§4-5` (`DELEGATED`, SB-P-1.20).
5. **No non-WhatsApp customer channel** is introduced.

## 7. Holds carried forward (not resolved by this record)

| Hold | Rows | Owner |
|---|---|---|
| **F-1** — destination location purpose, access expiry, retention and erasure | #3 | Founder, after qualified Indian legal/privacy advice |
| **F-4** — permissive proof mechanisms | #16 | Founder |
| **DC-13** — consent/STOP state | #6, #8 | Mission Control (T6) |
| **C1 §17 "may include"** — source-semantics screening | #17–#19 | Mission Control |
| **AEG-1** — customer-receipt acceptance evidence where L3 is unavailable | #4, #7, #17–#19 | Mission Control acceptance hold (MC-558-R2) |
| **U-09** — S09 pilot sequencing | All assigned legs | Mission Control |
| **Dependencies** D12, D13, D14, D15, D20, DV, DLOC, DNTF | As per FCTM | Specified, not demonstrated |

## 8. Future FCTM implications (accounting only; no row is changed by this record)

The current FCTM is **unchanged** until a separately authorized reconciliation. Expected reconciliation (a proposal; Mission Control decides representation):

| Group | Rows | Expected reconciliation |
|---|---|---|
| P | 16 rows (§4.1) | Each stays owner SB-P-1.18, `IN SCOPE`, commitment unchanged, citing `18:FPDR-3`. The named SB-P-1.20 leg is recorded as a cross-reference to the E/R/A unit. **The representation (same ID with a named leg, or an approved `a`/`b` pair) is fixed only by the reconciliation; no automatic split.** `U-01` is resolved for the row |
| W | `1-§7-3`, `1-§8-2` to `-5` | `ASSIGNED TO LATER MISSION` → SB-P-1.20, citing `18:FPDR-3`; commitment unchanged |
| H | `1-§15-4` | Unchanged; `U-01` and F-4 stay open |

**Disposition counts after reconciliation (expected, from F-3 alone, against the FCTM §H totals):** `IN SCOPE` 590 → 585; `ASSIGNED TO LATER MISSION` 12 → 17; total 764 unchanged. The pending `18:FPDR-2` and `18:FPDR-5` reconciliations change counts separately.

**SB-P-1.20.** A-STOP and A-WEL are recorded for SB-P-1.20's own FCTM when it is built. R-units are reconciled into its C23 rows, not added beside them.

**Separately authorized citation fixes:**
- `1-§5-25`: `1-§10-7` → `1-§10-8`;
- `22-§12-9`: cited as upstream, SB-P-1.15.

## 9. Publication boundary

This record publishes the Founder's F-3 row-specific decision and its accounting. **It does not by itself change:**
- the FCTM or the Stage 2 registers;
- Contract 01 or 23, Source 09 or 11, or the Build Plan;
- any SB-P-1.20 record;
- any Blueprint, EIS or implementation.

**Not approved and not implied:**
- completion of Stage 3;
- any decision on F-1 or F-4;
- any timeline change;
- any customer-channel acceptance or pilot readiness;
- resolution of DC-13, C1 §17 or AEG-1;
- implementation.

**STOP FOR MISSION CONTROL REVIEW AND FOUNDER MERGE.** Stage 3: OPEN. Implementation: WITHHELD.
