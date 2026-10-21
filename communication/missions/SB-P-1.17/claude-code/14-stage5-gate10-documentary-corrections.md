# SB-P-1.17 — Stage 5 Gate 10 Documentary Corrections (C-1 to C-5)

**DRAFT — FOR MISSION CONTROL REVIEW — NOT APPROVED.**

**Mission:** SB-P-1.17 — Manager Operations\
**Stage:** Source 18 v1.2 Stage 5 — Gate 10 open\
**Prepared by:** Claude Code, Definition Actor, under MC-353 (relayed; follows the MC-350 reconciliation and the MC-352 independent challenge)\
**Baseline:** `main@2806c1fa95a779f17dffd2ff23be1c219578a20b`. Review baseline of the findings: `709f29d2`\
**Findings source:** `communication/missions/SB-P-1.17/mission-control/11-mc349-independent-findings-evidence-packet.md` (blob `b3e13bd3`)\
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

This annex records the equivalent mappings and annotations authorized as C-1 to C-3. C-4 and C-5 are applied in the Blueprint (`docs/phase-1-mission-blueprint/active/SB-P-1.17.md`). **No FCTM row, inventory entry, source contract, Founder decision, disposition, owner, commercial classification, build commitment, verification seed or acceptance scenario is changed.** The FCTM (blob `a335b040`, 630 rows) and the obligation inventory (blob `422e99d8`) are not edited. Where this annex identifies an overbroad method statement in the Stage 2 inventory, it documents the source-faithful clarification proposed for Stage 5 reconciliation. The original inventory and FCTM remain unchanged; this annex does not independently amend their authority, and the clarification remains subject to Mission Control acceptance and independent verification.

## C-1. Normative contract lead-ins — equivalent mappings

**Proposed clarification of the inventory method statement.** Inventory §1 says a colon-ending lead-in "carries no separately verifiable obligation". That holds for list introductions, but not for the 13 lead-ins with normative wording in C7, C13 and C17. Each of those is carried by the rows below. Nine only pass their force to the listed units. **Four add their own standard or qualifier**, and these are mapped explicitly so that the standard or qualifier is preserved and verified. No new row is created.

### C-1.1 Lead-ins with an independent standard or qualifier (4)

| Lead-in | Independent standard or qualifier | Carried by (FCTM rows, unchanged) | Blueprint realization | Verification preserved |
|---|---|---|---|---|
| C7 §4 p2 "A suggestion should explain enough context for the merchant to decide, such as:" | **Sufficiency standard:** the explanation must be enough for the merchant to decide; the listed contexts are examples | `7-§4-2`…`7-§4-6` (examples), `7-§4-1` (suggestion), `7-§4-7` (no fabrication) | §8.4 "A suggestion explains its context"; §9 "Explained, labelled suggestions" | Founder Scenario A clause A2 (`BP-§10.6-A2`, `FRV-A`) tests that the suggestion is evidence-backed and decidable; `RT` on `7-§4-*` unchanged |
| C13 §4 p2 "The bridge should support, where compatible and authorized:" | **Qualifier:** support is owed where the POS is compatible and the integration authorized | `13-§4-2`…`13-§4-9`; `17:FPDR-2` cited on `13-§4-2`…`-7` (minimum and optional fields) | §8.6 "Optional, and conditional on the source"; integration limitation shown (`13-§5-6`) | `RT`/`IDEM` seeds unchanged; minimum fields are mandatory on every connected source (`17:FPDR-2`) |
| C13 §6 p1 "Imported POS events must preserve source identity so the system can distinguish:" | **Core obligation:** preserve source identity; the listed distinctions are its purpose | `13-§6-1`…`13-§6-5` (distinctions), `13-§6-6` (no duplicate revenue), `13-§17-2` (external event/reference ID) | §8.6 source identity and deduplication | `RT`/`IDEM` on `13-§6-*` and `13-§21-1`, `13-§21-2` unchanged |
| C13 §10 p1 "Manager should support end-of-day/shift closing clarity using available evidence, including as applicable:" | **Scope** (end-of-day or shift closing clarity) and **qualifier** (using available evidence, as applicable) | `13-§10-1`…`13-§10-7` (inputs, count, variance), `13-§10-8` (not proof of misconduct) | §8.8: inputs present only, unknowns named, partial variance; day-versus-shift cadence is U-03, carried to the EIS | `RT` on `13-§10-*` and `13-§21-7` unchanged; U-03 open |

### C-1.2 Lead-ins whose force passes to their units (9)

| Lead-in | Carried by |
|---|---|
| C7 §2 p1 "The mature stock foundation should support:" | `7-§2-1`…`7-§2-11` |
| C7 §6 p2 "Required pattern for consequential imports:" | `7-§6-4` (SB-P-1.14 slice), `7-§6-4b` (SB-P-1.17 slice) |
| C7 §11 p2 "AI must not:" | `7-§11-2` (SB-P-1.13 kernel), `7-§11-2.1`…`7-§11-2.5` |
| C7 §15 p1 "Future verification should prove:" | `7-§15-1`…`7-§15-12` (incl. `-2a`/`-2b`) |
| C13 §15 p1 "POS intelligence may recommend review or prepare actions, but must not autonomously:" | `13-§15-1`…`13-§15-7` (`13-§15-8` is the separate confirmed-workflow rule) |
| C13 §21 p1 "A future Blueprint/EIS must verify at least:" | `13-§21-1`…`13-§21-11` |
| C17 §7 p1 "Manager surfaces should connect to the shared Stock/Supplier/Reorder contract for:" | `17-§7-1`…`17-§7-7` (`17-§7-8` is the separate no-dashboard-only-logic rule) |
| C17 §14 p2 "Every protected read/write must enforce:" | `17-§14-2`…`17-§14-6` (DELEGATED, SB-P-1.12) |
| C17 §22 p1 "A future Blueprint/EIS must verify at least:" | `17-§22-1`…`17-§22-10b` |

## C-2. Permissive source lists — three-class annotation (corrected at MC-358)

Five lists are introduced by permissive wording ("may include", "may identify … such as", "may present", "may add", "may adapt to"). Each listed item belongs to exactly one class:

| Class | Meaning | How it is verified |
|---|---|---|
| **Independently mandatory** | A separate approved source, Founder decision or acceptance scenario requires the capability. | As any `IN SCOPE` obligation; its acceptance requirements are preserved. |
| **Conditionally mandatory** | Required once the original source's own stated condition is met ("where authorized", a connected source supplying the field, an enabled add-on). | Verified when the condition holds; otherwise the honest-absence or limitation behaviour is verified. |
| **Permissive implementation example** | An optional presentation, signal or adaptation approach. **Supporting data alone does not make it mandatory.** | Verified only if the EIS adopts it. The governing mandatory rule of the same section (truthfulness, authorization, entitlement, no accusation, useful-work priority) is verified in every case. |

**Rules of this annotation (MC-358):**

- **FCTM unchanged.** No FCTM row is removed or edited. Every row keeps its kind, disposition, owner, commitment, classification and verification seed as recorded.
- **Seeds kept.** For a permissive example, the seed applies to the approach if adopted. No seed is deleted.
- **Nothing weakened.** No acceptance scenario, Founder Runtime Verification clause or negative-path test is removed or weakened.
- **Nothing added or moved.** No commercial commitment or mission ownership changes, and no product functionality is added.

### C-2.1 C7 §3 p2 "Useful supplier memory may include:" (MC333-C7-02)

| Row | Item | Class | Basis |
|---|---|---|---|
| `7-§3-2` | supplier name/contact | Independently mandatory | `7-§3-1` supplier identity; `7-§15-6` supplier identity/history |
| `7-§3-3` | supplied products/items | Independently mandatory | `BP-§10.6-W1` supplier-product relationships |
| `7-§3-4` | purchase history | Independently mandatory | `7-§15-6`; `17:FPDR-5` |
| `7-§3-5` | recent/typical prices where supported | Permissive implementation example | "may include … where supported". **If presented**, `17:FPDR-4` is mandatory: Reference Cost permission for Managers, and no Smart Business-computed margin (`12:FR-09`) |
| `7-§3-6` | order/communication history | Independently mandatory | `17:FPDR-3` (merchant-recorded requests and replies); `7-§13-8` |
| `7-§3-7` | payment/credit relationship where authorized | Conditionally mandatory | Own condition "where authorized"; supplier payment state is distinct from goods receipt (`7-§8-5`); `D16`; W-1 FIN-01 PROVISIONAL |
| `7-§3-8` | preferred/alternate supplier context | Permissive implementation example | "may include" |

`7-§3-1` (business-scoped identity) and `7-§3-9` (suppliers receive no merchant intelligence) are outside the list and stay mandatory.

### C-2.2 C13 §8 p1 "Smart Business may identify factual patterns such as:" (MC334-C13-03)

| Row | Item | Class | Basis |
|---|---|---|---|
| `13-§8-1` | voids | Conditionally mandatory | Required on a connected source evidenced to supply void data (`17:FPDR-2`); Founder Scenario B (`BP-§10.6-B1`); acceptance `13-§21-5` |
| `13-§8-2` | unusually high discount activity | Conditionally mandatory | As above, for discount data |
| `13-§8-3` | repeated reversals | Permissive implementation example | "such as" |
| `13-§8-4` | unexpected price overrides | Permissive implementation example | "such as" |
| `13-§8-5` | unusual transaction timing/frequency | Permissive implementation example | "such as" |
| `13-§8-6` | closing-cash variance | Independently mandatory | C13 §10 b7 (`13-§10-7`) |
| `13-§8-7` | other evidence-backed counter signals | Permissive implementation example | "other evidence-backed" |

**Counter intelligence on evidenced sources is preserved.** Founder Scenario B and `13-§21-5` remain mandatory on the first evidenced source. `13-§8-8` (review signals, not accusations), `13-§8-9` (preferred wording) and `13-§8-10` (no accusation) govern every signal that is presented.

### C-2.3 C17 §4 p1–p3 "may present … May include: … May add:" (MC336-C17-01)

This list separates **required operational capabilities** from **optional visual surfaces**.

| Rows | Items | Class | Basis |
|---|---|---|---|
| `17-§4-9`, `17-§4-10` | inventory/stock intelligence; suppliers/reorder | Independently mandatory | C17 §7 p1 ("Manager surfaces should connect to the shared Stock/Supplier/Reorder contract"); `BP-§10.6-W1`–`W6`, `W10` |
| `17-§4-11` | POS/counter intelligence | Conditionally mandatory | Required once a standard POS source is connected (`BP-§10.6-W7`, `W8`; `17:FPDR-2`; `DPOS`) |
| `17-§4-12` | closing cash | Independently mandatory | `BP-§10.6-W9`; C13 §10 |
| `17-§4-6`, `17-§4-7` | Ask CFO access; Daily Intelligence | Independently mandatory (owned by SB-P-1.15) | `17-§11-1` (`DELEGATED`): the workspace exposes Ask CFO and Daily Intelligence |
| `17-§4-4` | document/receipt memory | Independently mandatory (owned by SB-P-1.14) | `17-§12-1` (`DELEGATED`) |
| `17-§4-8` | enabled add-ons | Conditionally mandatory | When an add-on is enabled and entitled (`DENT`; `17-§14-5`) |
| `17-§4-1`, `17-§4-2`, `17-§4-3`, `17-§4-5` | business identity; transaction/business-memory views; credit awareness; reminders | Permissive implementation examples (visual surfaces) | "May include". The underlying capabilities are owned by their own contracts and missions |
| `17-§4-13`, `17-§4-14` | operational trends; deeper role-appropriate analytics | Permissive implementation examples | "May add". **If presented**, `17:FPDR-4` and `12:FR-09` are mandatory |
| `17-§4-15` | staff/HR/order-delivery views | `ASSIGNED TO LATER MISSION` (SB-P-1.18), unchanged | `A-BP107` |

`17-§4-16` ("capability truth remains governed by feature contracts") stays mandatory.

### C-2.4 C17 §6 p1 "For authorized users, the workspace may present clear summaries such as:" (MC336-C17-03)

This list separates **optional summary presentation** from **mandatory truthfulness, authorization and the required Owner summary**.

| Rows | Items | Class | Basis |
|---|---|---|---|
| `17-§6-1`…`17-§6-6` | sales/income; expenses/purchases; outstanding credit; recent activity; payment/reconciliation state; comparisons/trends | Permissive implementation examples | "may present … such as"; availability depends on plan, add-ons and reliable data (`17-§6-7`) |
| `17-§6-7` | metric availability depends on plan, add-ons and reliable data | Independently mandatory rule | C17 §6 p2 |
| `17-§6-8` | no fabricated derived metrics | Independently mandatory rule | C17 §6 p3 |
| `17-§22-1` | Owner sees an accurate role-authorized summary from shared Business Memory | Independently mandatory acceptance | C17 §22 n1. At least the Owner summary must be delivered and verified; which example metrics it contains is the permissive part |

**Authorization is unchanged and mandatory for every summary presented:** `17-§13-*`, `17-§14-*` (`DELEGATED`, SB-P-1.12), `17:FPDR-1`, `17:FPDR-4`, `12:FR-04`, `12:FR-09`.

### C-2.5 C17 §15 p2 "It may adapt to:" (MC336-C17-04)

This list separates **optional navigation adaptations** from **mandatory role enforcement and useful-work prioritization**.

| Rows | Items | Class | Basis |
|---|---|---|---|
| `17-§15-1` | prioritize useful work rather than every module equally | Independently mandatory rule | C17 §15 p1 |
| `17-§15-4` | role | Independently mandatory | Role-appropriate visibility (`17-§3-3`); server-side role enforcement (`17-§13-*`, `17-§14-*`, SB-P-1.12); `17:FPDR-1` |
| `17-§15-2`, `17-§15-3` | Ledger vs Manager; enabled add-ons | Permissive implementation examples (navigation adaptation) | "may adapt to". Entitlement enforcement (`17-§14-5`) and unavailable-add-on handling (`17-§17-4`) stay mandatory regardless |
| `17-§15-5`, `17-§15-6`, `17-§15-7` | unresolved tasks/exceptions; merchant business type; recently used features | Permissive implementation examples | "may adapt to" |
| `17-§15-8` | no manipulative engagement or fear-based upsell | Independently mandatory rule | C17 §15 p3 |

### C-2.6 Source-fidelity and no-reduction assessment

| Class | Rows | Count |
|---|---|---|
| Independently mandatory | `7-§3-2`, `7-§3-3`, `7-§3-4`, `7-§3-6`; `13-§8-6`; `17-§4-4`, `-6`, `-7`, `-9`, `-10`, `-12`; `17-§15-4` | 12 |
| Conditionally mandatory | `7-§3-7`; `13-§8-1`, `13-§8-2`; `17-§4-8`, `17-§4-11` | 5 |
| Permissive implementation examples | `7-§3-5`, `7-§3-8`; `13-§8-3`, `-4`, `-5`, `-7`; `17-§4-1`, `-2`, `-3`, `-5`, `-13`, `-14`; `17-§6-1`…`-6`; `17-§15-2`, `-3`, `-5`, `-6`, `-7` | 23 |
| Outside the list, mandatory rules or acceptance | `7-§3-1`, `7-§3-9`; `13-§8-8`, `-9`, `-10`; `17-§4-16`; `17-§6-7`, `-8`; `17-§15-1`, `-8`; `17-§22-1` | 11 |
| Unchanged later-mission row | `17-§4-15` | 1 |

The five lists hold 41 items: 40 classified (12 + 5 + 23) and 1 unchanged later-mission row.

- **Fidelity:** each class follows the source's own words, or a separate approved source, Founder decision or acceptance scenario that requires the item. Supporting data alone never turns an example into an obligation.
- **No reduction of approved acceptance obligations:**
  - Every acceptance and Founder scenario touching these lists stays mandatory: `7-§15-6`, `13-§21-5`, `17-§22-1`, `BP-§10.6-B1`, `BP-§10.6-B2`.
  - So do the delegated acceptance rows `17-§22-2`, `17-§22-3` and `17-§22-9`.
  - Every `NEG` row and every authorization rule is unchanged.
- **FCTM untouched.** The FCTM is not edited: kinds, dispositions and seeds stay as recorded.
- **Precedent:** SB-P-1.13 treated illustrative lists the same way (`24-§6-2`, `24-§9-2`), accepted canonically.
- **Open T7 question for Mission Control.** The FCTM still records the 23 permissive examples as `OBL` with runtime seeds, while this annex reads them as optional approaches. No acceptance obligation changes, so I did not stop. But if Mission Control or the Founder considers that the reading itself narrows an approved obligation, it is a Source 18 T7 matter and should go to the Founder before Gate 10 relies on it. Any later FCTM annotation of these rows would need its own authorization.

## C-3. Build Plan §3 Lighthouse principles — existing coverage

Build Plan §3 (lines 70–86) lists thirteen principles that every mission must preserve, then states the "one coherent Smart Business" goal. `BP-§3-1` names three of them. Each principle is mapped below to existing rows. No row is created and `BP-§3-1` is unchanged.

| # | Principle (Build Plan §3) | Existing authoritative coverage |
|---|---|---|
| 1 | Humans serving humans | `BP-§10.6-O`, `BP-§10.6-X`, `17-§3-1` |
| 2 | AI Assistant, Not AI Judge | `13-§3-3`, `13-§2-6`, `7-§11-1.1`…`-1.6`, `7-§11-2.1`…`-2.5`, `BP-§16-2` |
| 3 | Technology is a tool; human improvement is the purpose | `BP-§10.6-X`, `13-§2-6` |
| 4 | Clarity, dignity, usefulness and peace of mind | `17-§3-1`, `13-§18-1`…`-5`, `7-§14-1`, `7-§14-2` |
| 5 | Respect existing merchant habits | `BP-§3-1`, `13-§3-1`, `BP-§10.6-E1` |
| 6 | Enrich workflows; do not insult or unnecessarily replace existing methods | `13-§1-2`, `13-§3-2`, `13-§20-2`, `BP-§10.6-E1` |
| 7 | Human decision ownership visible and real | `7-§5-1`, `7-§5-3`, `13-§3-4`, `13-§15-1`…`-8`, `24-§21-3` |
| 8 | The merchant's business data belongs to the merchant | `7-§3-9`, `13-§18-4`, `17-§18-3` |
| 9 | AI may analyze, explain, warn, suggest, clarify and prepare actions; it must not silently become the Owner | `7-§11-1.*`, `7-§11-2.4`, `13-§12-5`, `13-§15-*` |
| 10 | Customize the edges; standardize the foundation | `13-§3-7`, `13-§5-*`, `22-§17-2`, `BP-§6.6-1` |
| 11 | No duplication of Business Memory, permissions, AI logic, reminders, UDI or domain rules per channel | `13-§14-2`, `17-§20-*`, `7-§9-3`, `BP-§8-1` |
| 12 | Implementation history does not override current Product Truth | `7-§16-6`, `13-§22-1`…`-5`, `17-§21-1`, `17-§23-2`…`-4` |
| 13 | Security, privacy, integrity, auditability, simplicity, scalability and dignity are product requirements | `13-§3-6`, `13-§17-*`, `7-§13-*`, `13-§18-*`, `BP-§6.1-1` |
| — | One coherent Smart Business, not disconnected modules | `17-§21-3`, `BP-§6.2-1`, `BP-§11-7` |

## C-4 and C-5. Applied in the Blueprint

| Correction | Blueprint location | Content |
|---|---|---|
| C-4 | §12.4 Execution gates | SB-P-1.12-owned Build Plan §5.1 `anon`-grant gate as a security precondition; the five Build Plan §5.3 delivery-chain verification stages and the separate release authority (Source 18 §9.1). Optional §6.3 pointer to the SB-P-1.14 storage foundation |
| C-5 | §14 Success Criteria; §15.5 | Global Product Completion View rows 7, 13 and 17 updated by Mission Control at acceptance from the Contract Reconciliation (GPCV §12); Build Plan §13 rules 1–8 and 10 governing the Experience Verification Matrix and the Contract Reconciliation |

## Finding-ID-to-diff map

| Finding ID | Correction | Location of the change |
|---|---|---|
| MC333-C7-01 | C-1 | This annex §C-1.1 row 1 |
| MC334-C13-01 | C-1 | This annex §C-1.1 row 4 |
| MC334-C13-02 | C-1 (traceability) | This annex §C-1.1 row 2 |
| MC333-C7-02 | C-2 | This annex §C-2.1; Blueprint §8.3 pointer |
| MC334-C13-03 | C-2 | This annex §C-2.2; Blueprint §8.7 pointer |
| MC336-C17-01 | C-2 | This annex §C-2.3; Blueprint §8.9 pointer |
| MC336-C17-03 | C-2 | This annex §C-2.4; Blueprint §8.9 pointer |
| MC336-C17-04 | C-2 | This annex §C-2.5; Blueprint §8.9 pointer |
| MC340-BP-01 | C-3 | This annex §C-3 |
| MC340-BP-02 | C-4 | Blueprint §12.4 (Build Plan §5.1 gate) |
| MC340-BP-03 | C-4 | Blueprint §12.4 (Build Plan §5.3 stages) |
| MC340-BP-05 | C-4 (optional pointer) | Blueprint §12.4 (Build Plan §6.3 pointer) |
| MC342-BP-02 | C-5 | Blueprint §14 (GPCV update) |
| MC342-BP-04, MC342-BP-05, MC342-BP-06, MC342-BP-07 | C-5 | Blueprint §15.5 (Build Plan §13 rules) |
| All | Change record | Blueprint §18 v0.3; this annex |

## Final proposed treatment of all 25 findings

| # | Finding ID | Proposed final treatment |
|---|---|---|
| 1 | MC333-C7-01 | (b) Narrow documentary correction — C-1 |
| 2 | MC333-C7-02 | (b) Narrow documentary correction — C-2 |
| 3 | MC334-C13-01 | (b) Narrow documentary correction — C-1 |
| 4 | MC334-C13-02 | (a) Existing coverage sufficient (`17:FPDR-2`; Blueprint §8.6); C-1 traceability added |
| 5 | MC334-C13-03 | (b) Narrow documentary correction — C-2 |
| 6 | MC336-C17-01 | (b) Narrow documentary correction — C-2 |
| 7 | MC336-C17-02 | (a) Existing coverage sufficient (`17-§21-5`, `17-§23-4`, `17-§20-4`; Blueprint §15.3 consumer verification) |
| 8 | MC336-C17-03 | (b) Narrow documentary correction — C-2; permission-leakage part: existing coverage sufficient |
| 9 | MC336-C17-04 | (b) Narrow documentary correction — C-2 |
| 10 | MC338-BP106-01 | (a) Existing coverage sufficient (`7-§6-*` slices; `7-§15-2a`/`-2b`; W-3; U-09) |
| 11 | MC340-BP-01 | (b) Narrow documentary correction — C-3 |
| 12 | MC340-BP-02 | (b) Narrow documentary correction — C-4 |
| 13 | MC340-BP-03 | (b) Narrow documentary correction — C-4 |
| 14 | MC340-BP-04 | (c) Justified exclusion: program-level pilot gate owned by Mission Control and SB-P-1.18; `BP-§11-6` |
| 15 | MC340-BP-05 | (c) Justified upstream delegation to SB-P-1.14 (`25-§6-1`); optional C-4 pointer added |
| 16 | MC340-BP-06 | (a) Existing coverage sufficient (`BP-§9-AL`; Blueprint §11, §11.1) |
| 17 | MC342-BP-01 | (c) Justified delegation: obligations of SB-P-1.18, SB-P-1.19 and SB-P-1.20; Blueprint §11, §12.5 |
| 18 | MC342-BP-02 | (b) Narrow documentary correction — C-5 |
| 19 | MC342-BP-03 | (a) Existing coverage sufficient (all 15 later-mission rows cite approved sources) |
| 20 | MC342-BP-04 | (b) Narrow documentary correction — C-5 |
| 21 | MC342-BP-05 | (b) Narrow documentary correction — C-5 |
| 22 | MC342-BP-06 | (b) Narrow documentary correction — C-5 |
| 23 | MC342-BP-07 | (b) Narrow documentary correction — C-5 |
| 24 | MC342-BP-08 | (a) Existing coverage sufficient (Source 18 lifecycle; §3.2 item 7) |
| 25 | MC342-BP-09 | (a) Existing coverage sufficient (Source 18 §3, §3.3; AGENTS.md) |

Totals: (a) 7, (b) 15, (c) 3, (d) 0. Each applied correction needs finding-scoped independent re-verification against the original source pointers.

**STOP FOR MISSION CONTROL REVIEW AND FOUNDER MERGE.** Gate 10 is not passed. Stage 6, EIS and implementation are not authorized.
