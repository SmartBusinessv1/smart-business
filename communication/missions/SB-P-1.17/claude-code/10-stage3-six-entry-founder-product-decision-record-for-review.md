# SB-P-1.17 — Stage 3 Six-Entry Founder Product Decision Record (For Review)

**Mission:** SB-P-1.17 — Manager Operations\
**Stage:** Source 18 v1.2 Stage 3 — Founder Decision Gate\
**Status:** `FOR REVIEW — NOT CANONICALLY EFFECTIVE UNTIL MISSION CONTROL SUBSTANTIVE REVIEW, FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION`\
**Prepared by:** Claude Code, Definition Actor, under `mission-control/08-stage3-six-entry-fpdr-publication-authorization.md` (blob `1c9c326f4cc07c95c898f436de8ac86c4fb3f1ae`)\
**Baseline:** `main@224566374f94bcb6c30ef6166a7c1df4827d0fca`\
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 0. Rules and provenance

### 0.1 Sources of this record

| Source | Path | Blob |
|---|---|---|
| Stage 3 preparation instruction | `communication/missions/SB-P-1.17/mission-control/06-stage3-founder-decision-gate-preparation-instruction.md` | `3b058f6d` |
| U-15 addendum and Founder dialogue authorization | `…/mission-control/07-stage3-u15-addendum-and-founder-dialogue-authorization.md` | `c7cd9e3b` |
| Six-entry review and publication authorization | `…/mission-control/08-stage3-six-entry-fpdr-publication-authorization.md` | `1c9c326f` |
| Founder Brief | `…/claude-code/06-stage3-founder-brief.md` | `8f95f3f8` |
| Decision options and evidence annex | `…/claude-code/07-stage3-decision-options-and-evidence-annex.md` | `3157dcfd` |
| Unapproved five-entry template (historical draft provenance; **not modified**) | `…/claude-code/08-stage3-founder-decision-record-draft-unapproved.md` | `7afaed67` |
| Stage 2 FCTM / Truth Pack (accepted; **not modified**) | `…/claude-code/01-stage2-populated-fctm.md` / `03-stage2-mission-truth-pack.md` | `198d40c8` / `8d541153` |

### 0.2 Decision evidence and its limits

- **Decision evidence:** Mission Control record 08 states: "The Founder expressly selected Option A for U-01, U-06, U-05, U-13, U-15 and U-02, then collectively confirmed all six in MC-297." Its table gives the Founder-confirmed outcome for each identifier. Mission Control's publication instruction relays the same six Option A answers and collective confirmation as confirmed decision evidence.
- **Verbatim Founder text (supplied by Mission Control in MC-301).** Each entry quotes the Founder's own decision-bearing message from the Stage 3 Founder dialogue. The Founder's collective confirmation (MC-297 summary) is:

  > I confirm all six SB-P-1.17 Stage 3 Founder decisions exactly as summarized in MC-297. Proceed only to preparing the formal six-entry Founder Product Decision Record for review; do not publish, merge, lock, start Stage 4, or implement.

- **Four kinds of text, kept separate in every entry:**
  1. **Founder statement (verbatim):** the Founder's own words, quoted exactly as supplied by Mission Control.
  2. **Selected option text:** canonical text of the chosen option, quoted verbatim from annex `07-…` or addendum `mission-control/07-…`. It is not Founder wording.
  3. **Operational elaboration:** interpretation authored by the Definition Actor under record 08's safeguards, and Mission Control clarifications marked MC-300. It is not a Founder quotation.
  4. **Acceptance condition:** a proposed verification condition, not a Founder quotation.
- **Founder text not received:** the MC-297 summary text that the collective confirmation refers to is not in the repository. Record 08's outcome table is used as Mission Control's statement of that summary.
- **Effect:** This publication is review-only. Every decision becomes canonically effective only after Mission Control substantive review, Founder human merge and Mission Control post-merge verification (Source 18 §3.3 items 4 and 6).
- **No decision here authorizes** implementation, provider activation, permission or schema changes, FCTM edits, Stage 3 lock or Stage 4.
- **Option letters** refer to annex `07-…` (U-01, U-02, U-05, U-06, U-13) and addendum `mission-control/07-…` §1 (U-15).

### 0.3 Decision inventory

| ID | Item | Founder selection (as recorded by Mission Control) | Mission Control outcome summary (record 08) |
|---|---|---|---|
| `17:FPDR-1` | U-01 Manager delegation | Option A | Separately scoped Owner grants to Managers; operator-level details and standing-rule creation Owner-reserved |
| `17:FPDR-2` | U-02 Standard POS bridge | Option A | Vendor-neutral standard POS bridge: compatible API/webhook and structured file input; no unverified vendor/field guarantee |
| `17:FPDR-3` | U-05 Supplier communication | Option A | Merchant-controlled recorded purchase request with copy/share/print; no automatic sending or assumed delivery |
| `17:FPDR-4` | U-06 Supplier purchase prices | Option A | Supplier purchase prices cost-protected; Manager needs explicit Reference Cost permission |
| `17:FPDR-5` | U-13 Historical attribution | Option A | Explicit Owner-confirmed non-destructive historical purchase-to-supplier linking |
| `17:FPDR-6` | U-15 Starting threshold | Option A | Evidence-backed initial threshold suggestion only; Owner confirmation required before activation |

Dialogue order (addendum §2): U-01, U-06, U-05, U-13, U-15, U-02. Collective confirmation of all six: MC-297.

## 1. `17:FPDR-1` — U-01 Manager delegation in Manager Operations

**Founder statement (verbatim; Stage 3 Founder dialogue, answer 1 of 6; supplied by Mission Control in MC-301):**

> For SB-P-1.17 Stage 3 U-01, my Founder decision is Option A. Record this as my answer and proceed to the next question without publishing or locking the Founder Decision Record.

**Selected option text (annex `07-…`, U-01 Option A, "Scoped Operations Manager"):** "The Owner may grant capabilities 1, 2, 3, 4, 6 and 7 separately, each limited to assigned items, suppliers or counters. A reorder grant may carry an Owner-set value ceiling. Capability 5, standing-rule creation, Reference Cost and margin (`12:FR-04`, `12:FR-09`), and closing-cash policy stay Owner-reserved"

The capabilities are: 1 view stock, supplier and reorder state; 2 confirm, modify or reject reorder suggestions; 3 manage supplier records; 4 view counter review signals; 5 view operator-attributed counter detail; 6 enter a cash count; 7 view the variance.

**Capability 5 clarification (MC-300).**
- Capability 5 is **operator-attributed counter detail**, and it is Owner-reserved under Option A.
- Standing-rule creation is also Owner-only (C7 §5 p3), but it is **not** capability 5. It is a separate Owner-only boundary.
- The quoted annex text is retained unmodified. Its phrase "Capability 5, standing-rule creation, Reference Cost and margin …, and closing-cash policy" can be misread as equating capability 5 with standing-rule creation. That is a numbering and wording inconsistency in the annex, and the intended reading is the four separate Owner-reserved items above.

**Operational elaboration (faithful interpretation, not a Founder quotation):**

- No capability arises from the Manager role. Each is an explicit, scoped, revocable Owner grant, checked server-side and revalidated at execution.
- Revoking a grant before commit prevents a prepared confirmation from committing.
- Grant, revoke, confirmation and denial events are audited.

**Boundaries preserved:**

- Standing-rule creation stays Owner-only. This comes from approved source C7 §5 p3, not from this decision.
- Operator-level counter detail stays Owner-reserved. The U-11 staff-privacy and legal research hold remains (`12:FR-06`).
- SB-P-1.15 R15-11 and `16:FPDR-7` were precedents only.

**Contract references:** C7 §5 p2–p3, §10 p2; C13 §13 p2–p3; C17 §13 p2; C21 §3 b2, §4.

**FCTM traceability** (rows that would cite the ID once effective; dispositions unchanged):
- `7-§5-1`, `13-§13-2`, `BP-§10.6-W5`, `BP-§10.6-A3` (`IN SCOPE`).
- Consumer notes on `7-§10-2`, `17-§22-2`, `21-§4-2`, `21-§24-3` (`DELEGATED`, SB-P-1.12) and `11-§13-3` (`DELEGATED`, SB-P-1.15).
- Also reaches DC-03 (`7-§5-2`) and DC-14.

**Acceptance condition (annex):**
- A Manager without a grant is denied each capability server-side.
- A granted Manager is limited to the assigned scope.
- Revocation before commit blocks a prepared confirmation.
- All grant, revoke, confirmation and denial events are audited.
- No Manager creates a standing rule.

## 2. `17:FPDR-2` — U-02 Phase 1 standard POS bridge scope

**Founder statement (verbatim; Stage 3 Founder dialogue, answer 6 of 6; supplied by Mission Control in MC-301):**

> For SB-P-1.17 Stage 3 U-02, my Founder decision is Option A. Capture this as my sixth answer. Then present a complete six-decision confirmation summary without publishing or locking the Founder Decision Record.

**Selected option text (annex, U-02 Option A, "Vendor-neutral bridge contract, two interface classes"):** "Phase 1 commits to one Smart Business bridge contract fed by (i) an authenticated API or webhook adapter, where a POS offers one, or (ii) a structured export file through UDI. Both carry stable source identity and dedupe. Minimum fields: external transaction ID, time, POS item reference, quantity, price, payment method. Discount, void and operator are optional. Counter signals appear only for data the source supplies; otherwise the product says the signal is unavailable from this POS. Founder Scenario B is verified against the first source with evidence that it supplies discount or void data"

**Operational elaboration (faithful interpretation):**

- Option A is the Phase 1 commitment. The annex's proposal also allowed the evidence-led selection described in Option B. It is used only to choose the first source for verifying Founder Scenario B, and that choice is a separate later Mission Control and Founder decision on evidence (Build Plan §5.4).
- The structured export file is one of the two committed interface classes. It is not the CSV-only bridge rejected by C13 §20 b7.

**Boundaries preserved:**

- No POS vendor is named, selected, contracted or activated.
- **Every vendor's field-level capability remains UNKNOWN** (annex U-02 feasibility evidence, 2026-10-20). No compatibility is asserted.
- The `DPOS` hold stays on all 102 rows that carry it.
- Founder Scenario B remains Founder-reserved, and its feasibility remains a T8 watch until an evidenced source exists.

**Contract references:** C13 §4 p1, b1–b8, p3; §5; §20 b7; Build Plan §5.4, §10.6 Scenario B.

**FCTM traceability:**
- `13-§5-6`, `BP-§5.4-1`, `BP-§10.6-W7`, `BP-§10.6-B1` (`IN SCOPE`).
- `DPOS` rows by reference, incl. `13-§4-*`, `13-§8-*`, `13-§21-*`, `BP-§10.6-B2`.

**Acceptance condition (annex):**
- A replayed event creates no duplicate revenue or stock.
- An unmapped item is surfaced, not guessed.
- A source lacking discount data produces no discount signal and shows the limitation.
- Scenario B passes on an evidenced source with neutral wording.
- A POS outage leaves manual operation available.

## 3. `17:FPDR-3` — U-05 Supplier communication before SB-P-1.20

**Founder statement (verbatim; Stage 3 Founder dialogue, answer 3 of 6; supplied by Mission Control in MC-301):**

> For SB-P-1.17 Stage 3 U-05, my Founder decision is Option A. Record this as my answer and proceed to the next question without publishing or locking the Founder Decision Record.

**Selected option text (annex, U-05 Option A, "Merchant-controlled purchase request"):** "A confirmed reorder creates a recorded purchase request. Smart Business prepares a factual message for the supplier, which the merchant copies, shares or prints and sends personally. Nothing is shown as "sent" or "accepted" unless the merchant records it. Supplier replies are recorded by the merchant. SB-P-1.20 later adds system dispatch"

**Operational elaboration (faithful interpretation):** The prepared message contains only what the supplier workflow needs and no merchant-internal intelligence (C7 §3 p3, §10 p4). Communication history holds merchant-reported events only (DC-11). The pattern mirrors `16:FPDR-8`.

**Boundaries preserved:**

- No system-sent external supplier message, and no out-of-app channel pulled forward from SB-P-1.20. Rows `23-§4-4` and `23-§16-5` stay `ASSIGNED TO LATER MISSION`, SB-P-1.20.
- No approved requirement is deferred; the T7 deferral option (C) was not chosen.

**Contract references:** C7 §3 b5, p3; §5 p2; §10 p4; §13 b8; Source 11 Supplier; C23 §16 b5.

**FCTM traceability:**
- `7-§3-6`, `7-§5-1`, `7-§13-8`, `17-§7-7` (`IN SCOPE`).
- `23-§4-4`, `23-§16-5` (`ASSIGNED TO LATER MISSION`, SB-P-1.20, unchanged).
- Also reaches the `DNTF` hold and DC-11.

**Acceptance condition (annex):**
- A confirmed reorder yields one purchase request linked to the Product & Price Master item and the supplier.
- The prepared message contains no merchant-internal intelligence.
- No state claims delivery or acceptance without a merchant entry.
- No external message is sent by the system.

## 4. `17:FPDR-4` — U-06 Supplier purchase prices

**Founder statement (verbatim; Stage 3 Founder dialogue, answer 2 of 6; supplied by Mission Control in MC-301):**

> For SB-P-1.17 Stage 3 U-06, my Founder decision is Option A. Record this as my answer and proceed to the next question without publishing or locking the Founder Decision Record.

**Selected option text (annex, U-06 Option A, "Cost-class"):** "Supplier purchase prices in reorder and supplier contexts count as cost information. A Manager sees them only with the explicit Reference Cost permission; without it, suggestions show quantities and dates only"

**DC-05 interpretation correction (recorded as required by record 08; the accepted Stage 2 Truth Pack is not edited).**
- The Stage 2 Truth Pack justified DC-05 by saying a purchase price beside a selling price "discloses unit margin arithmetically".
- That rationale is superseded for this decision. Under `12:FR-09`, a person's own arithmetic on two separately authorized values is **not** Smart Business granting the margin permission.
- Supplier purchase-price access is protected because the Founder classified supplier purchase prices as **cost information**. It is not protected because of margin disclosure.

**Operational elaboration (faithful interpretation):**

- No Manager has supplier-price access by default or by role.
- With the explicit Reference Cost permission, a Manager may see supplier purchase prices. Smart Business still computes, labels and exposes no margin without the separate margin permission (`12:FR-09`).
- The rule covers every surface: workspace cards, suggestions, exports and AI answers.

**Boundaries preserved:** `12:FR-04` F-03 and `12:FR-09` are applied as written, not reinterpreted. Owner views are unaffected.

**Contract references:** C7 §3 b4, §4 b4, §11 b11; C17 §4 b14.

**FCTM traceability:**
- `7-§3-5`, `7-§4-5` (`IN SCOPE`; Founder decision cell already cites `12:FR-09`).
- Through DC-05, `17-§4-14` and `7-§11-2.5` (`IN SCOPE`).

**Acceptance condition (annex):**
- A Manager without the governing permission receives no supplier price in any response, card, export or AI answer.
- With the permission, the Manager sees the price and no Smart Business-computed margin.

## 5. `17:FPDR-5` — U-13 Historical purchase attribution

**Founder statement (verbatim; Stage 3 Founder dialogue, answer 4 of 6; supplied by Mission Control in MC-301):**

> For SB-P-1.17 Stage 3 U-13, my Founder decision is Option A. Record this as my answer and proceed to the next question without publishing or locking the Founder Decision Record.

**Selected option text (annex, U-13 Option A, "Owner-confirmed attribution"):** "The Owner may link historical purchases to a supplier identity by explicit, audited confirmation. Smart Business may show possible matches clearly labelled unconfirmed, but never links on its own. The original transaction and its audit history are unchanged; no duplicate purchase is created. Unlinked purchases stay visibly unlinked"

**Operational elaboration (faithful interpretation):** "Owner" means the Owner. Whether linking can later be delegated is not decided here; `17:FPDR-1` grants supplier-record management, not historical attribution. The pattern mirrors `16:FPDR-2`.

**Boundaries preserved:**

- No automatic identity merging (9-§10-2; C22 §28 b6).
- No transaction rewrite, no false history and no guessed attribution.
- Existing free-text supplier names remain searchable (3-§9-2).

**Contract references:** C7 §3 b3, §15 b6; Truth Pack Δ-13.

**FCTM traceability:** `7-§3-4`, `7-§15-6` (`IN SCOPE`).

**Acceptance condition (annex):**
- No historical purchase is linked without explicit confirmation by an authorized actor.
- Linking changes no amount, date or transaction identity, and creates no new purchase.
- An unconfirmed suggestion has no effect.

## 6. `17:FPDR-6` — U-15 Suggested starting low-stock threshold

**Founder statement (verbatim; Stage 3 Founder dialogue, answer 5 of 6; supplied by Mission Control in MC-301):**

> For SB-P-1.17 Stage 3 U-15, my Founder decision is Option A. Record this as my answer and proceed to the final question without publishing or locking the Founder Decision Record.

**Question (addendum `mission-control/07-…` §1):** "When no low-stock threshold has been configured, may Smart Business suggest an evidence-backed starting threshold requiring Owner confirmation, or should it wait for the Owner to set a threshold manually?"

**Selected option text (addendum, Option A):** "An explained item-level threshold suggestion may appear. Nothing is activated until the Owner explicitly confirms or changes it."

**Addendum constraints carried with the option** (Mission Control proposal text, now bounding the selected option): "Option A only where evidence is sufficient; otherwise show the configuration gap. Do not prescribe a universal numeric threshold, infer unsupported forecasts, silently enable an alert or authorize reorder execution."

**Operational elaboration (faithful interpretation):**

- A suggestion is item-level and explains its evidence, such as the merchant's own recent movement.
- Where evidence is insufficient, the product shows that no threshold is configured.
- A confirmed threshold enables only low-stock awareness. Reorder execution still follows C7 §5: Owner confirmation, or a stored bounded standing rule.
- **Owner confirmation:** the record 08 outcome reads "Owner confirmation required before activation". Whether a Manager with a `17:FPDR-1` grant may confirm a threshold is not decided here.

**Boundaries preserved:** C7 §16 b6 (no historical fixed numeric threshold as Product Truth). Supersedes DC-06's "no suggestion" reading only to the extent of this decision.

**Contract references:** C7 §2 b6, §4, §15 b4, §16 b6; Build Plan §10.6 Founder Scenario A.

**FCTM traceability** (citations verified at FCTM blob `198d40c8`):

| Row | Disposition | Current citation |
|---|---|---|
| `7-§2-6` | `IN SCOPE` | `NI-RO; I-12 (7-§2); A-BP106 (low-stock)` |
| `7-§16-6` | `IN SCOPE` | `L-NEG; DC-06` |
| `BP-§10.6-A1` | `IN SCOPE` | `NI-RO; A-BP106-FRV; Founder-reserved; DC-06 (threshold merchant-configured)` |

**Acceptance condition (as clarified by Mission Control, MC-300):**
- Without sufficient evidence, no threshold is suggested and the configuration gap is shown.
- No **threshold-driven** alert and no **threshold-driven** reorder action becomes active from a proposed threshold until the Owner confirms or changes it.
- This condition does not prohibit independently authorized manual reorder workflows (C7 §5, `17:FPDR-1`).
- No universal numeric default threshold exists anywhere.

## 7. Carried holds and unchanged boundaries

- **Approved commitments unchanged:** no build commitment, commercial classification or mission assignment changes, and no T7 change is recorded. Manager core versus Ledger add-on packaging is unchanged.
- **Unchanged boundaries:**
  - standing-rule creation is Owner-only (C7 §5 p3);
  - no default Manager cost permission;
  - no system supplier dispatch;
  - no destructive transaction change;
  - no unverified POS commitment;
  - thresholds activate only explicitly.
- **Holds retained:**
  - U-11, operator and staff privacy legal research (`12:FR-06`);
  - W-1, FIN-01 `owed_by_business` PROVISIONAL;
  - `DPOS`, POS provider feasibility UNKNOWN;
  - all upstream kernel holds (`D12`, `D13`, `D14`, `DTX`, `D15`, `DSCH`) as unimplemented and unverified dependencies.
- **Build Plan §15 rows** (`BP-§15-4`, `18-§4-4`, `18-§25-2`, `BP-§15-6`, `BP-§15-8`): not reopened.
- **Mission Control items still open from Stage 2 and 3:** DC-04, DC-08, DC-09, DC-12, DC-15; U-03, U-04, U-09, U-10, U-12; U-14 housekeeping.

## 8. FCTM application (not performed)

FCTM decision IDs are **not** populated by this record. Once the record is canonically effective, a separately authorized change may append each ID to the Founder decision cell of the rows listed above. No disposition changes.

## 9. Findings for Mission Control review

1. **Resolved (MC-301).** All seven Founder quotations, the six decision statements and the collective confirmation, are inserted verbatim as supplied by Mission Control and attributed to the Stage 3 Founder dialogue. Each decision statement sits in its matching entry: U-01 `17:FPDR-1`, U-06 `17:FPDR-4`, U-05 `17:FPDR-3`, U-13 `17:FPDR-5`, U-15 `17:FPDR-6`, U-02 `17:FPDR-2`. The collective confirmation is in Section 0.2. The MC-297 summary text it refers to remains outside the repository; record 08's outcome table stands in for it.
2. **Resolved (MC-300).** The U-13 Owner-only linking interpretation and the U-15 Owner-confirmation boundary are retained as written. Delegation of either remains undecided.
3. **Resolved (MC-300).** The U-15 acceptance condition is clarified to threshold-driven alerts and actions, and manual reorder workflows are excluded from it.
4. **Resolved (MC-300).** The U-01 capability 5 numbering inconsistency in the quoted annex text is identified in entry 1. The quote itself is unchanged.
5. **Status lines (administrative observation).** Records 07 and 08 still read "PROPOSED" although they are merged. No post-merge verification records are in the repository. This publication relies on the relayed instruction.

**STOP FOR MISSION CONTROL SUBSTANTIVE REVIEW.** No FCTM population, Stage 3 lock, Stage 4, implementation, provider operation or SB-P-1.16 reopening.
