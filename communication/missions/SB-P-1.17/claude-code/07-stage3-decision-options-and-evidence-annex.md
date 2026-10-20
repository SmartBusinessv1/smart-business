# SB-P-1.17 — Stage 3 Decision Options and Evidence Annex (Draft)

**Mission:** SB-P-1.17 — Manager Operations\
**Status:** `DRAFT — NOT AUTHORITY; NO OPTION IS APPROVED`\
**Prepared by:** Claude Code, Definition Actor, under `mission-control/06-stage3-founder-decision-gate-preparation-instruction.md` (blob `3b058f6d`)\
**Baseline:** `main@2591668b995ce3f5e4198edf6f45fa7419cbe0a8`\
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 0. Source identities verified at the baseline

| Source | Blob |
|---|---|
| Source 18 v1.2 | `0945bda6` |
| Phase 1 operating pattern | `39b1bc36` |
| Stage 3 instruction (`mission-control/06-…`) | `3b058f6d` |
| Stage 2 FCTM (`claude-code/01-…`) | `198d40c8` |
| Stage 2 Truth Pack (`claude-code/03-…`) | `8d541153` |
| Stage 2 completion report (`claude-code/05-…`) | `e08eefa7` |
| C7 / C13 / C17 | `65ad91b2` / `4426e8b1` / `7943f74a` |
| Build Plan / GPCV | `9dfdd924` / `ee76d920` |
| Source 11 | `16897d6c` |
| `12:FR-04` / `12:FR-09` | `616b3bb7` / `84d61d4d` |
| SB-P-1.16 Founder Product Decision Record (`16:FPDR-1`–`-9`) | `30b19a80` |

- The three Stage 2 files on `main` have the same blobs as the accepted PR #989 head `7551f8c2`.
- No source drifted since the Stage 2 baseline `44895d2c`. The only commits since are #989 and the Stage 3 instruction (#990).
- No new Founder decision has been recorded since Stage 2.

**Method.** For each item this annex separates three things: approved source text (cited, not restated as new truth); the derived question it leaves open; and implementation mechanics, which stay with the Blueprint and EIS. Row lists repeat the accepted completion report §12. "Rows citing" means the row's FCTM citation names the item; "also reached" means the row is touched only through a hold or derived constraint.

## U-01 — Manager delegation in Manager Operations

**Rows citing.**
- `7-§5-1`, `13-§13-2`, `BP-§10.6-W5`, `BP-§10.6-A3`: `IN SCOPE`, SB-P-1.17.
- `7-§10-2`, `17-§22-2`, `21-§4-2`, `21-§24-3`: `DELEGATED`, SB-P-1.12.
- `11-§13-3`: `DELEGATED`, SB-P-1.15.

**Also reached.** DC-03 (`7-§5-2`), DC-14 (operator detail).

**Approved source text.**
- C7 §5 p2: the default flow is "observe → suggest → Owner/authorized Manager reviews → confirm/modify/reject".
- C7 §5 p3: automatic execution only where "**the Owner** has explicitly created a bounded standing rule".
- C7 §10 p2: a Manager has "delegated operational authority only; may review stock and act on reorder workflows where explicitly permitted".
- C13 §13 p2: a Manager has "operational visibility only within Owner-delegated scope. No automatic access to Owner-only intelligence".
- C13 §13 p3: staff "should not automatically see anomaly/risk analysis about other staff".
- C17 §13 p2: "Manager role alone does not grant all Owner intelligence".
- C21 §3 b2: "Manager authority is delegated, not assumed".

**Derived question.** Which named capabilities are delegable, and at what scope? The capabilities in question:
1. view stock, supplier and reorder state;
2. confirm, modify or reject reorder suggestions;
3. manage supplier records;
4. view counter review signals;
5. view operator-attributed counter detail;
6. enter a cash count;
7. view the variance.

SB-P-1.15 R15-11 records that merchant-facing Manager grants need a separate Founder decision. `16:FPDR-7` is a precedent for a different domain and does not bind here.

**Already answered by source.** Standing-rule creation is Owner-only (C7 §5 p3). Changing that would amend an approved contract (T7/T2), so it is **not offered as an option**.

| Option | Product meaning | Merchant experience | Consequence |
|---|---|---|---|
| **A — Scoped Operations Manager** | The Owner may grant capabilities 1, 2, 3, 4, 6 and 7 separately, each limited to assigned items, suppliers or counters. A reorder grant may carry an Owner-set value ceiling. Capability 5, standing-rule creation, Reference Cost and margin (`12:FR-04`, `12:FR-09`), and closing-cash policy stay Owner-reserved | The Owner hands over day-to-day ordering and closing to a trusted Manager without exposing staff-level judgements | Larger permission catalogue; every grant revalidated at execution; revocation voids prepared confirmations |
| **B — Manager prepares, Owner decides** | Managers may view (1, 4) and prepare: draft reorders and enter cash counts (6). Every consequential confirmation, including reorders and variance acknowledgement, stays with the Owner | The Owner remains the bottleneck, but authority is unambiguous | Smallest risk surface; the "authorized Manager reviews" path of C7 §5 p2 is used only for review, not confirmation |
| **C — A plus operator detail by explicit grant** | As A, and the Owner may also grant capability 5 | Richer review for a trusted Manager | Raises staff-privacy exposure (U-11 hold; legal research not complete) |

**Proposal (NOT APPROVED): A.** It is the default-preserving option: nothing is granted by role, and every capability is explicit and revocable.

**Blocks:** Manager-delegated paths only. **Unaffected:** all Owner paths, including the Owner confirmation in Founder Scenario A.

**Proposed acceptance condition (verifiable).** For each capability:
- a Manager without the grant is denied server-side;
- a granted Manager is limited to the assigned scope;
- revocation before commit blocks a prepared confirmation;
- grant, revoke, confirmation and denial are audited;
- no Manager ever creates a standing rule.

## U-02 — Phase 1 standard POS bridge scope

**Rows citing.** `13-§5-6`, `BP-§5.4-1`, `BP-§10.6-W7`, `BP-§10.6-B1`: `IN SCOPE`, SB-P-1.17.

**Also reached.** All 102 rows with the `DPOS` hold, including `13-§4-*`, `13-§8-*`, `13-§21-*` and `BP-§10.6-B2`.

**Approved source text.**
- C13 §4 p1: "The approved product direction includes a standard POS integration/bridge".
- C13 §4 b1–b8: what the bridge supports, "where compatible and authorized". The list includes discount and void "where the POS exposes it" and operator identifiers "where permitted".
- C13 §4 p3: a CSV or file import "may coexist as import/fallback" but must not "silently delete the committed standard POS bridge".
- C13 §5: standard connectors, documented APIs, files or webhooks, mapping at the edge; "if a POS cannot support the standard bridge safely, classify the integration limitation".
- C13 §20 b7: a "CSV-only downgrade of the committed standard bridge" is a non-goal.
- Build Plan §10.6 Scenario B: "standard POS bridge surfaces an unusual discount/counter anomaly".
- Build Plan §5.4: new external infrastructure needs activation, credentials, failure, rollback and verification.

**Derived question.** What Phase 1 honestly commits to:
- which interface class or classes;
- the minimum data a source must provide;
- what happens when a merchant's POS cannot supply discount or void data;
- what source Founder Scenario B is verified against.

**Read-only feasibility evidence (2026-10-20).** Public search found:
- A third-party assessment describing GoFrugal's API as limited and partly local-service based ([supergood.ai](https://supergood.ai/api-report-card/gofrugal)). The same site also hosts a design exercise that states it describes no real GoFrugal product ([supergood.ai docs](https://supergood.ai/docs/gofrugal-api)); that page is not relied on.
- GoFrugal's own integration page, which mentions open APIs without field detail ([gofrugal.com](https://cdn.gofrugal.com/integration-pos.html)).
- A community ERPNext app receiving Petpooja order webhooks, including cancellations ([Frappe Cloud](https://cloud.frappe.io/marketplace/apps/petpooja)).

No official documentation was found confirming discount, void or operator fields for any named POS. Search returned nothing for Zoho POS, Vyapar or Marg ERP.

**Status: every vendor's field-level capability is UNKNOWN.** No vendor is named or evaluated here. No contract, credential or live integration was attempted.

| Option | Product meaning | Merchant experience | Consequence |
|---|---|---|---|
| **A — Vendor-neutral bridge contract, two interface classes** | Phase 1 commits to one Smart Business bridge contract fed by (i) an authenticated API or webhook adapter, where a POS offers one, or (ii) a structured export file through UDI. Both carry stable source identity and dedupe. Minimum fields: external transaction ID, time, POS item reference, quantity, price, payment method. Discount, void and operator are optional. Counter signals appear only for data the source supplies; otherwise the product says the signal is unavailable from this POS. Founder Scenario B is verified against the first source with evidence that it supplies discount or void data | Works beside many POS systems; tells the merchant plainly what their POS can and cannot feed | Honest coverage statement needed; Scenario B timing depends on finding one evidenced source |
| **B — One reference POS class first** | As A, but Phase 1 builds the API adapter for one reference POS class, chosen later by Mission Control and the Founder on evidence (separate decision, Build Plan §5.4); other POS systems use the export file only | Deeper fit for merchants on that POS; others get file-based coverage | Concentrates risk on one vendor; selection evidence becomes a gate before Stage 7 |
| ~~CSV-only bridge~~ | Not offered: C13 §20 b7 rejects it, so choosing it would be a T7 reclassification | — | — |

**Proposal (NOT APPROVED): A,** with B's evidence-led selection used only to choose the first Scenario B verification source.

**Blocks:** POS-dependent ingestion, counter signals and `FRV-B`. **Unaffected:** stock, supplier, reorder, manual closing cash, workspace.

**Proposed acceptance condition.**
- A replayed source event creates no duplicate revenue or stock.
- An unmapped item is surfaced, not guessed.
- A source lacking discount data produces no discount signal and shows the limitation.
- Scenario B passes on an evidenced source with neutral wording.
- A POS outage leaves manual operation available.

## U-05 — Supplier communication before SB-P-1.20

**Rows citing.**
- `7-§3-6`, `7-§5-1`, `7-§13-8`, `17-§7-7`: `IN SCOPE`, SB-P-1.17.
- `23-§4-4`, `23-§16-5`: `ASSIGNED TO LATER MISSION`, SB-P-1.20.

**Also reached.** `DNTF` hold; DC-11.

**Approved source text.**
- C7 §5 p2 ends in an "approved supplier/order action".
- C7 §10 p4: a supplier "receives only communication required for the approved supplier/order workflow".
- C7 §3 b5: "order/communication history".
- C7 §13 b8: "supplier/order communication failure".
- Source 11 Supplier: "receive purchase/reorder communication", "confirm through text".
- C23 §16 b5: WhatsApp supplier requests belong to SB-P-1.20.
- SB-P-1.15 notifications are native-only.

**Derived question.** Before SB-P-1.20, what is the "approved supplier/order action" natively?

| Option | Product meaning | Merchant experience | Consequence |
|---|---|---|---|
| **A — Merchant-controlled purchase request** | A confirmed reorder creates a recorded purchase request. Smart Business prepares a factual message for the supplier, which the merchant copies, shares or prints and sends personally. Nothing is shown as "sent" or "accepted" unless the merchant records it. Supplier replies are recorded by the merchant. SB-P-1.20 later adds system dispatch | One tap from confirmation to a ready message; the merchant stays in control | Mirrors `16:FPDR-8`; communication-history rows record merchant-reported events only |
| **B — Record only** | A confirmed reorder is recorded as a purchase request. No message is prepared; the merchant contacts the supplier their own way | Less help, simplest | Communication history holds only what the merchant enters |
| **C — Defer dispatch to SB-P-1.20** | No supplier-facing step in Phase 1 | Reorder ends at confirmation | Defers part of `IN SCOPE` rows; would need an explicit T7 deferral decision |

**Proposal (NOT APPROVED): A.**

**Blocks:** the supplier-dispatch step and supplier communication history and failure handling. **Unaffected:** Founder Scenario A, which ends at confirmation and product identity.

**Proposed acceptance condition.**
- A confirmed reorder yields one purchase request, linked to the Product & Price Master item and the supplier.
- The prepared message contains no merchant-internal intelligence.
- No state claims delivery or acceptance without a merchant entry.
- No external message is sent by the system.

## U-06 — Supplier purchase prices and `12:FR-09`

**Rows citing.** `7-§3-5`, `7-§4-5`: `IN SCOPE`, SB-P-1.17; Founder decision cell `12:FR-09`.

**Also reached through DC-05.** `17-§4-14`, `7-§11-2.5`.

**Approved source text.**
- C7 §3 b4: supplier memory "may include … recent/typical prices where supported".
- C7 §4 b4: a reorder suggestion may explain "recent purchase/supplier context".
- C7 §11 b11: AI must not "expose merchant financial intelligence to staff/suppliers".
- `12:FR-04` F-03 and `12:FR-09`: Reference Cost and margin are Owner-only by default and separately delegable. Smart Business never computes or exposes margin without margin permission. A person's own arithmetic on two values they were separately authorized to see is **not** Smart Business granting margin.

**Correction to the Stage 2 rationale (disclosed, not edited).** The accepted Truth Pack DC-05 justified its hold by saying a purchase price beside a selling price "discloses unit margin arithmetically". `12:FR-09` expressly says such human arithmetic is not a margin grant. So the hold is not justified by margin disclosure. The live question is narrower: **is a supplier purchase price a Reference-Cost-class value, or a Ledger purchase fact?** DC-05's safe hold is kept as provisional until the Founder answers.

| Option | Product meaning | Merchant experience | Consequence |
|---|---|---|---|
| **A — Cost-class** | Supplier purchase prices in reorder and supplier contexts count as cost information. A Manager sees them only with the explicit Reference Cost permission; without it, suggestions show quantities and dates only | Cost stays with the Owner unless deliberately shared | Matches the current hold; one permission governs all cost views |
| **B — Ledger purchase fact** | Purchase prices are purchase-transaction facts. A Manager with explicitly delegated visibility of those purchases (by supplier or item) sees them. The Reference Cost field stays gated, and Smart Business computes no margin (`12:FR-09`) | Purchasing Managers see what they paid | Two permissions can reveal related numbers; consistent with `12:FR-09`'s arithmetic clause |
| **C — Owner-only in Phase 1** | No Manager sees supplier prices, whatever the grants | Simplest | Narrows usefulness of delegated purchasing |

**Proposal (NOT APPROVED): A.** It is the default-preserving option.

**Blocks:** Manager-visible price context only. **Unaffected:** Owner views and quantity-based reorder logic.

**Proposed acceptance condition.**
- A Manager without the governing permission receives no supplier price in any response, card, export or AI answer.
- With the permission, the Manager sees the price and no Smart Business-computed margin.

## U-13 — Historical purchase attribution

**Rows citing.** `7-§3-4`, `7-§15-6`: `IN SCOPE`, SB-P-1.17.

**Also reached.** Δ-13: existing purchases carry a typed-in "Supplier name" (`src/routes/_authenticated/transactions.tsx`) and no supplier identity.

**Approved source text.**
- C7 §3 b3: supplier memory includes "purchase history".
- C7 §15 b6: "supplier identity/history".
- 9-§10-2: a likely spelling match must not silently merge parties.
- C22 §28 b6: no duplicate supplier identity silos.
- Precedent `16:FPDR-2` (customer credit): Owner-confirmed, audited attribution; no automatic assignment from names; original transactions preserved.

**Derived question.** Do historical free-text purchases join supplier history, and how?

| Option | Product meaning | Merchant experience | Consequence |
|---|---|---|---|
| **A — Owner-confirmed attribution** | The Owner may link historical purchases to a supplier identity by explicit, audited confirmation. Smart Business may show possible matches clearly labelled unconfirmed, but never links on its own. The original transaction and its audit history are unchanged; no duplicate purchase is created. Unlinked purchases stay visibly unlinked | Past purchases can enrich supplier history at the merchant's pace | Mirrors `16:FPDR-2` |
| **B — Prospective only** | Supplier history starts when the supplier identity is created. Historical purchases stay searchable by their typed name (3-§9-2) but never join supplier history | Simplest; earlier history is less connected | No attribution workflow |

**Proposal (NOT APPROVED): A.**

**Blocks:** supplier history for historical purchases. **Unaffected:** new supplier identities and new purchase history.

**Proposed acceptance condition.**
- No historical purchase is linked without an explicit confirmation by an authorized actor.
- Linking changes no amount, date or transaction identity, and creates no new purchase.
- An unconfirmed suggestion has no effect.

## T6/T7 screening summary for Mission Control

| Constraint | Merchant-visible? | Covered by the five questions? | Proposed handling |
|---|---|---|---|
| DC-04 supplier credit `owed_by_business` vs FIN-01 | Not yet | No | Keep provisional; watch W-1; no decision now |
| DC-05 Manager-visible supplier price | Yes | **U-06** (rationale corrected above) | Founder via U-06 |
| DC-06 no default thresholds; "not configured" shown | **Yes** | **No** | **Flag: candidate separate narrow Founder determination.** C7 §16 b6 rejects *historical* fixed thresholds "without current validation" but does not say whether Smart Business may offer a suggested starting threshold. No approval is assumed |
| DC-08 source precedence for stock conflicts | Yes (reconciliation items) | No | Mission Control: the contract already requires explicit EIS precedence rules and forbids silent guessing. Escalate only if a rule would favour one source by default |
| DC-09 closing-cash partial result with named unknowns | Yes | No | Mission Control confirm. Already required by the Stage 2 authorization §4 ("explicit unknowns") |
| DC-12 POS/manual duplicate as candidate for review | Yes | Partly (U-02) | Mission Control confirm; consistent with C13 §21 n2 and n4 |
| DC-14 operator detail at Owner level by default | Yes | **U-01** option C, U-11 | Founder via U-01; legal research hold U-11 remains |
| DC-15 Ledger add-on packaging reading (Source 11 list) | Yes (commercial) | No | Mission Control confirm; T1 only if rejected. Price stays `BP-§15-4` (not reopened) |

**Allocation checks (verified on `main@2591668b`, FCTM blob `198d40c8`):**
- `7-§6-4` and `7-§6-5` remain `DELEGATED`, SB-P-1.14 (opening-stock slice). `7-§6-4b` and `7-§6-5b` are `IN SCOPE`, SB-P-1.17, citing U-09.
- `3-§9-3`, `3-§15-7` and `BP-§10.3-S2` keep the owner text `SB-P-1.17 / SB-P-1.18`, read as supplier side (U-12).
- No original assignment was altered.

**Retained holds.** W-1 (FIN-01 `owed_by_business`, PROVISIONAL) and U-11 (employee and operator privacy; Research & Intelligence item under `12:FR-06`). The five Build Plan §15 `UNRESOLVED FOUNDER DECISION` rows are not reopened, because no critical-path dependency on them emerged.
