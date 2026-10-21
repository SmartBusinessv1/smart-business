# SB-P-1.17 — Founder Product Decision Record `17:FPDR-7` (Permissive Examples)

**Mission:** SB-P-1.17 — Manager Operations\
**Stage:** Source 18 v1.2 Stage 5 — Gate 10 open\
**Status:** `FOR REVIEW — EFFECTIVE ONLY ON FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION`\
**Prepared by:** Claude Code, Definition Actor, under MC-362A as resumed by MC-363 (relayed)\
**Baseline:** `main@2806c1fa95a779f17dffd2ff23be1c219578a20b`\
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 0. How to read this record

This record keeps three kinds of text separate:

| Kind | Where | Authority |
|---|---|---|
| **Founder direction (verbatim)** | Section 1 only | The Founder |
| **Mission Control disposition** | Section 2 | Mission Control, as stated in MC-362A and MC-363 |
| **Definition Actor analysis** | Sections 3–6 | None. Analysis and boundary accounting for review |

Where Sections 2–6 summarize, Section 1 prevails.

**Identifier check.** `17:FPDR-7` was verified unused on `main@2806c1fa`, where only `17:FPDR-1` to `17:FPDR-6` occur in the mission records and the active Blueprint. The ID follows the mission's register: `17:FPDR-1` to `-6` are in `claude-code/10-stage3-six-entry-founder-product-decision-record-for-review.md`, blob `90b7ca1d`.

## 1. Founder direction — verbatim

**Provenance.** The text below is the Founder's direction, labelled MC-360 / C-2, as communicated to Mission Control. Mission Control supplied it in MC-363 and states it is reproduced verbatim from the Founder's message and is the complete direction. It is **not** the shortened quotation that appeared in MC-361 and MC-362A.

> **FOUNDER DIRECTION — MC-360 / C-2**
>
> I confirm that examples introduced permissively in approved source contracts remain optional implementation approaches unless another approved source, Founder decision or acceptance requirement independently makes them mandatory.
>
> This decision must not weaken required stock, supplier, POS, counter intelligence, closing-cash, authorization, financial privacy, or Founder Runtime Verification capabilities.
>
> Mission Control shall reconcile the affected FCTM interpretations through Source 18, preserve the existing evidence and audit trail, and obtain independent verification before Gate 10 acceptance.
>
> Avoid unnecessary feature expansion. Do not treat the mere availability of supporting data as an obligation to implement every optional presentation or adaptation.
>
> This direction does not approve PR #1001, pass Gate 10 or authorize Stage 6 or implementation.

## 2. Mission Control disposition (as stated in MC-362A and MC-363)

- The MC-361 three-step reconciliation plan is accepted in principle (MC-362A).
- `17:FPDR-7` is the reserved decision identifier, subject to the uniqueness verification in Section 0.
- The authority and non-weakening conditions remain exactly as stated in Section 1.
- The record must keep the MC357-C2-01 provenance and the Source 18 T7 context.
- No FCTM, Blueprint, inventory or source-contract change is authorized by this publication.

## 3. Origin and Source 18 context (Definition Actor analysis)

**Origin.**
- **MC357-C2-01:** an independent review of PR #1001 head `e7a1bbf8`. It found that the C-2 annex implied every permissive presentation or adaptation example becomes mandatory whenever supporting data exists.
- **MC-358:** that annex was then corrected to three classes (PR #1001 head `51097494`).
- **The open question:** the corrected annex left this unresolved. The FCTM (blob `a335b040`) records the permissive examples as `OBL` with runtime verification seeds, while the annex reads them as optional approaches. The annex (§C-2.6) therefore raised a possible Source 18 T7 question for the Founder.

**Source 18 context.**
- Source 18 §3.2 item 5 (classification lock) says requirements may not be simplified or reclassified without a Founder decision.
- Stage 3 trigger T7 covers any proposed simplification of an approved requirement.
- The direction in Section 1 is the Founder's resolution of that question: it settles how permissively introduced examples are read.
- It is not a T7 change of any build commitment, commercial classification or mission assignment, and it removes no obligation. Its second paragraph protects the required capabilities.

## 4. Affected source groups and reconciliation boundary (Definition Actor analysis)

**The five affected source groups** are the permissive lists named in the C-2 annex, PR #1001:

| Source | Permissive lead-in | Affected rows |
|---|---|---|
| C7 §3 p2 | "Useful supplier memory may include:" | `7-§3-5`, `7-§3-8` |
| C13 §8 p1 | "Smart Business may identify factual patterns such as:" | `13-§8-3`, `13-§8-4`, `13-§8-5`, `13-§8-7` |
| C17 §4 p1–p3 | "may present … May include: … May add:" | `17-§4-1`, `17-§4-2`, `17-§4-3`, `17-§4-5`, `17-§4-13`, `17-§4-14` |
| C17 §6 p1 | "may present clear summaries such as:" | `17-§6-1`, `17-§6-2`, `17-§6-3`, `17-§6-4`, `17-§6-5`, `17-§6-6` |
| C17 §15 p2 | "It may adapt to:" | `17-§15-2`, `17-§15-3`, `17-§15-5`, `17-§15-6`, `17-§15-7` |

**The 23-row reconciliation boundary.** The rows above are the candidate permissive-implementation examples identified in the MC-361 analysis. The direction in Section 1 applies to them only where no other approved source, Founder decision or acceptance requirement independently makes them mandatory. Each row's status remains subject to Mission Control's Source 18 reconciliation and to independent verification (Section 1, paragraph 3).

## 5. What survives unchanged (Definition Actor analysis)

**Independently mandatory obligations survive (12 rows):**
- `7-§3-2`, `7-§3-3`, `7-§3-4`, `7-§3-6`;
- `13-§8-6`;
- `17-§4-4`, `17-§4-6`, `17-§4-7`, `17-§4-9`, `17-§4-10`, `17-§4-12`;
- `17-§15-4`.

**Conditionally mandatory obligations survive (5 rows):** each is required once its own source condition holds.
- `7-§3-7`;
- `13-§8-1`, `13-§8-2`;
- `17-§4-8`, `17-§4-11`.

**Mandatory rules and acceptance requirements survive:**
- rules `7-§3-1`, `7-§3-9`, `13-§8-8` to `-10`, `17-§4-16`, `17-§6-7`, `17-§6-8`, `17-§15-1`, `17-§15-8`;
- acceptance `7-§15-6`, `13-§21-5` and `17-§22-1`;
- Founder Scenarios A and B (`BP-§10.6-A1` to `A4`, `B1`, `B2`).

**Protected capability areas** (Section 1, paragraph 2):
- stock and supplier capabilities: C7, and Build Plan §10.6 b1–b6;
- POS and counter intelligence on evidenced sources: `17:FPDR-2`, `13-§8-1`, `-2`, `13-§21-5`;
- closing cash: C13 §10, `13-§8-6`;
- authorization: `17:FPDR-1`, and `17-§13-*` and `17-§14-*` (SB-P-1.12);
- financial privacy: `17:FPDR-4`, `12:FR-04`, `12:FR-09`;
- Founder Runtime Verification: `BP-§13-9`.

None is weakened by this record.

## 6. Publication boundary

This record only publishes the Founder direction and its accounting. **It does not by itself approve or make any change to:**
- the FCTM (blob `a335b040`), the Stage 2 inventory, the Blueprint (`docs/phase-1-mission-blueprint/active/SB-P-1.17.md`) or any source contract;
- product architecture, acceptance scenarios, verification seeds or implementation.

Any reconciliation of FCTM interpretations, Blueprint citations or the PR #1001 annex requires separate Mission Control authorization under Source 18, preserving the existing evidence and audit trail, with independent verification before Gate 10 acceptance (Section 1, paragraph 3).

**Not approved, and not implied by this record:**
- PR #1001;
- Gate 10 passing;
- Stage 6;
- implementation.

**STOP FOR MISSION CONTROL REVIEW AND FOUNDER MERGE.** Gate 10: NOT PASSED. Stage 5: OPEN. Stage 6 and implementation: WITHHELD.
