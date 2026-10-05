# SB-P-1.13 — Stage 2 Mission Truth Pack

**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation
**Lifecycle stage:** Source 18 v1.2, Stage 2 — Mission Truth and Delta Reconciliation
**Status:** `DRAFT — NOT AUTHORIZED`. Preparation only. Not canonical until Mission Control review and human merge (Source 18 §3.3).
**Prepared by:** Claude Code, Stage 2–4 Definition Actor (SB-P-1.13-MC-01)
**Authorization:** SB-P-1.13-MC-02, `mission-control/04-stage2-authorization-and-stage1-reconciliation.md`, canonical at `main@488b16346941e70975edfe849af4aea317cbd6a3` (PR #776, merged 2026-10-05T14:08:02Z)
**Baseline:** `main@488b16346941e70975edfe849af4aea317cbd6a3`, 2026-10-05
**Owner of this record:** the Definition Actor prepares; Mission Control reviews. The Definition Actor does not approve its own findings (Source 18 §4.3).

This pack does not decide the Stage 3 gate, draft the Blueprint or the EIS, or authorize implementation, SQL, migration, provider, voice-provider, production or OLE action.

## Contents

| Part | Content | Where |
|---|---|---|
| 1 | Mission scope and experience anchors | this file |
| 2 | Populated FCTM and independent obligation inventory | [`02-stage2-populated-fctm.md`](02-stage2-populated-fctm.md), [`03-stage2-obligation-inventory.md`](03-stage2-obligation-inventory.md) |
| 3 | Derived constraints | this file |
| 4 | Delta | [`05-stage2-delta-evidence.md`](05-stage2-delta-evidence.md) |
| 5 | SB-P-1.12 dependency reconciliation | this file |
| 6 | Unresolved items, Mission Control questions and T1–T8 screen | this file |
| 7 | Institutional Learning Intake Record | [`04-stage2-institutional-learning-intake.md`](04-stage2-institutional-learning-intake.md) |

## Part 1 — Mission scope and experience anchors

### 1.1 Scope opened

Build Plan §9 row 2 assigns Contracts 9, 10, 12 Basic, 24, 22 and the Support Automation foundation to SB-P-1.13. SB-P-1.13-MC-02 §3 opens Contract 21 for delegated authority touch points. Stage 2 adds:

- residual rows that the locked SB-P-1.12 FCTM assigns to SB-P-1.13 in Contracts 17, 20 and 7 (FCTM Part H; Delta D-14);
- `DELEGATED` rows for the sections of Contracts 2, 3, 5, 11, 18, 19, 23 and 25 whose behaviour this mission touches at its boundary (FCTM Part J).

Neither addition changes an approved assignment. Both are listed for Mission Control confirmation (Part 6, MC-Q1 and MC-Q7).

Boundaries preserved from SB-P-1.13-MC-02 §4: broader Support completion and Voice Plus are SB-P-1.19; UDI, durable media and mature Business Memory are SB-P-1.14; Ask CFO is SB-P-1.15; the WhatsApp adapter is SB-P-1.20. Attachment work stops at intake and handoff.

### 1.2 Experience anchors (verification anchors, not implementation authority)

| Anchor | FCTM rows | Status at this baseline |
|---|---|---|
| 1. Governed natural-language consequential action: clarification, preview, permission enforcement, deterministic execution, truthful confirmation | `BP-§10.2-SA1`, `10-§23-1`, `24-§21-*`, `24-§31-5`, `24-§31-7`, `9-§9-*`, `3-§6` (delegated) | Specified; blocked by `DTX` (Delta D-02) and `D12` (Delta D-05) |
| 2. Employee denied Owner-only financial intelligence | `BP-§10.2-SA2`, `10-§23-5`, `24-§10-8`, `24-§31-4`, `21-§8-3` (delegated), `21-§24-6` (delegated) | Specified; blocked by `D12` (Delta D-05) |
| 3. Native workflow succeeds while WhatsApp/Meta is unavailable | `BP-§10.2-SB`, `BP-§8.4-2`, `10-§14-1`, `10-§23-7` | Specified; no blocker beyond this mission's own build |
| 4. Basic Voice keeps exactly the same authority and confirmation rules as text | `9-§8-2`, `10-§23-2`, `12-§6-6`, `12-§14-*`, `12-§21-8`, `24-§31-2` | Specified; blocked by `DV` (activation gate) and `D12` |

### 1.3 Draft workstream mapping (Stage 1 register, unchanged)

| Workstream | Principal FCTM rows |
|---|---|
| WS-A Native Conversation Workspace | Contract 10 §4–§8, §15, §16, §20; `17-§5-*`; `BP-§8.3-1` |
| WS-B Language and Context | Contract 9; `22-§8-*`; `20-§14-*` |
| WS-C AI Orchestration and Governed Tool Kernel | Contract 24 §4–§11, §19–§30; `22-§7-*`, `22-§24-*`; `BP-§6.2-*`, `BP-§6.4-*` |
| WS-D Basic Voice | Contract 12 (Basic rows); `24-§15-*`; `BP-§5.4-1`, `BP-§10.2-I1` |
| WS-E FAQ-first Support Foundation | Contract 8 `IN SCOPE` rows; `24-§17-1`, `-2`, `-4`; `BP-§12-1`, `-3` |
| WS-F Attachment Handoff Boundary | `10-§4-3` to `-8`, `10-§10-2`, `-6`, `-8`, `10-§23-3a` |
| WS-G Failure, Observability and Provider Independence | `24-§23-*`, `22-§19-*`, `10-§14-1`, `10-§18-*`, `24-§26-*` |

### 1.4 Headline counts

974 FCTM rows: 651 `IN SCOPE`, 126 `ASSIGNED TO LATER MISSION`, 121 `DELEGATED`, 52 `NOT APPLICABLE`, 21 `OUT OF BUILD SCOPE`, 3 `UNRESOLVED FOUNDER DECISION` (none on the critical path), 0 `ESCALATED`, 0 `ALREADY DEMONSTRATED`. All 185 numbered sections of the seven opened contracts and all 84 numbered acceptance scenarios have rows. Of the 651 `IN SCOPE` rows, 198 depend on SB-P-1.12 (`D12`), 122 on the voice activation gate (`DV`), 275 on the AI provider gateway (`DAI`), 33 on SB-P-1.14 (`D14`) and 17 on a governed create-transaction command (`DTX`). Counts are reproducible (FCTM §K).

## Part 3 — Derived constraints

These are engineering or product implications inferred by the Definition Actor. **None is approved Product Truth.** Each one marked "material" could change merchant experience, permission behaviour, financial-data visibility, confirmation or denial, voice behaviour or provider-failure behaviour, and is flagged for Mission Control's T6 judgment. None is applied to any FCTM row.

| ID | Derived constraint | Inferred from | Material to | Material? |
|---|---|---|---|---|
| DC-01 | Business and principal context are resolved server-side for every conversational turn and attached to every tool proposal by the gateway; the model never supplies or chooses `business_id`, actor or role. | `21-§6-7`, `24-§10-1`, EIS-KER-02, EIS-KER-06 | permission behaviour | Yes |
| DC-02 | The tool registry exposes read tools and write tools separately. A write tool returns only a preview and a single-use binding; execution happens only through a separate confirm step that the SB-P-1.12 kernel revalidates. | `24-§11-5`, `24-§11-6`, `24-§11-10`, `21-§18-*`, EIS-CNF-01 | confirmation/denial | Yes |
| DC-03 | Owner-only financial aggregates are excluded from model context for non-Owner principals before the model call, not filtered from model output afterwards. | `24-§10-8`, `24-§25-3`, `21-§8-7` | financial-data visibility; denial | Yes |
| DC-04 | Until SB-P-1.14 governed media storage exists, Basic Voice processes audio transiently and keeps no durable raw recording; only the transcript and the resulting governed record persist. | `12-§15-4`, `12-§16-8`, `25-§12`, Build Plan §10.3 | voice behaviour; privacy | Yes |
| DC-05 | Voice output defaults to text for Owner-sensitive content whenever the role or listening context is uncertain. | `12-§15-1` to `-3`, `10-§19-4` | voice behaviour; financial-data visibility | Yes |
| DC-06 | When the AI provider is unavailable, the Workspace keeps the merchant's input, points to the structured pages, and never auto-executes a queued consequential action after recovery without a fresh confirmation. | `24-§23-1`, `-12`, `-13`, `-18`, `22-§19-*`, Phase 1 guide §10 unknown-outcome rule | provider-failure behaviour; confirmation | Yes |
| DC-07 | Pending confirmations expire. The expiry period is visible to the merchant ("this preview has expired, please review again"). | `21-§18-6`, `10-§7-2`, `10-§18-8` | confirmation | Yes |
| DC-08 | Before SB-P-1.14, a document sent in the Workspace is accepted and acknowledged but produces no consequential update; the merchant is told interpretation is not yet available or is routed to an existing import surface. | `10-§4-8`, `10-§23-3a`, `10-§23-3b`, SB-P-1.13-MC-02 §4 | merchant experience | Yes |
| DC-09 | Clarification thresholds are calibrated per field (amount, party, date, unit) and never default a consequential value silently. | `9-§15-*`, `24-§6-3` | merchant experience | No (engineering realization of approved behaviour) |
| DC-10 | The FAQ corpus starts as a Team LIPS-curated seed in English, Malayalam and Manglish with recorded provenance and version, and AI answers in support are grounded only in it. | `8-§4-1`, `8-§6-*`, `8-§7-*` | merchant experience | Yes |
| DC-11 | AI provider data controls (no training on merchant data; bounded retention) must be verified and configured before any merchant data reaches the provider. | `24-§25-*`, `24-§31-14`, Delta D-03 | privacy | Yes |
| DC-12 | Conversation history needs a default retention period for active accounts. Build Plan §15 item 6 covers only post-cancellation retention. | `10-§16-1`, `-2`, `24-§24-10` | merchant experience; privacy | Yes |
| DC-13 | Basic Voice quality in Malayalam and Manglish depends on the provider chosen at the activation gate; a provider that cannot meet it would narrow the approved experience. | `9-§8-2`, `12-§9-*`, `12-§21-7`, Delta D-04 | voice behaviour | Yes |
| DC-14 | A governed create-transaction command is needed for Scenario A (Delta D-02). It extends, and does not replace, the existing transaction and correction foundations (Contract 3 §22). | `BP-§10.2-SA1`, `3-§22`, `BP-§6.2-1` | confirmation; merchant experience | Yes (see FDB-1) |

## Part 5 — SB-P-1.12 dependency reconciliation

Rule (SB-P-1.13-MC-02 §5): locked specification may be consumed; unimplemented runtime behaviour is never treated as demonstrated.

Shared evidence for every row below:

- **Specification:** SB-P-1.12 Blueprint `APPROVED — LOCKED` (blob `77d52096c020668311b039721a4de9248ddd460e`); EIS `APPROVED — LOCKED` (blob `c444f7509477d0e8b997af538440d93bf2ca4d72`); Stage 13 implementation package locked (Engineering Contract `3c9b01d9`, Lovable Build Prompt `3993b777`, Verification Checklist `453b598a`).
- **Implementation:** Implementation Authorization `WITHHELD`; MC-70 suspension. The repository has no membership, role, capability, kernel, confirmation-binding or authority-event schema (Delta D-05).
- **Evidence:** no Stage 17 Human Runtime Verification and no Stage 19 Independent Verification. EV-01 OPEN; EV-02 PARTIALLY EVIDENCED.
- **Consumption gate:** SB-P-1.12 EIS §19.5 (EIS-DEP-01). SB-P-1.13 may use a capability only after the EIS is locked, the providing workstreams are implemented and verified, every touched table family has completed its WS-A3 cut-over and isolation tests, and Mission Control accepts the dependency evidence. §19.5 also forbids SB-P-1.13 to create authority tables, resolve business from single ownership, treat AI or tool capability as authority, or add temporary parallel authorization.

| ID | Dependency consumed | SB-P-1.12 specification | Specification | Implementation | Evidence | SB-P-1.13 rows depending on it |
|---|---|---|---|---|---|---|
| R-01 | Verified principal; session alone grants nothing | Blueprint §8.11; EIS-KER-02 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE | EVIDENCE NOT COMPLETE | `10-§15-*`, `21-§15-*` |
| R-02 | Membership, roles, role defaults (Owner, Manager, Employee) | Blueprint §8.1, §8.20; EIS-KER-03 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE | EVIDENCE NOT COMPLETE | `10-§8-*`, `12-§14-*`, `21-§4-*` |
| R-03 | Explicit delegated capability grants | Blueprint §8.2; EIS-KER-04 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE | EVIDENCE NOT COMPLETE | `10-§8-2`, `12-§14-2`, `24-§10-9` |
| R-04 | Kernel decision `authz.authorize` and capability registry (SB-P-1.13 registers its own capabilities) | EIS §8.1, §8.2; EIS-KER-01 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE | EVIDENCE NOT COMPLETE | `24-§10-*`, `24-§11-*`, `24-§20-8` |
| R-05 | Channel/context values `conversation`, `ai_tool`, `whatsapp` | EIS-KER-06 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE | EVIDENCE NOT COMPLETE | `21-§5-8`, `22-§6-3`, `22-§6-9`, `10-§19-3` |
| R-06 | Owner-intelligence capabilities never default or inferred (Ask CFO boundary) | Blueprint §8.5; EIS-KER-07 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE | EVIDENCE NOT COMPLETE | `BP-§10.2-SA2`, `10-§23-5`, `24-§31-4`, `12-§21-8` |
| R-07 | Business isolation incl. conversation context; client `business_id` never trusted | Blueprint §8.3, §8.21 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE (owner-only RLS exists) | EVIDENCE NOT COMPLETE | `10-§15-4`, `10-§19-1`, `10-§23-10`, `22-§29-3` |
| R-08 | Action types and object scope; create does not imply read-all | EIS-KER-08 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE | EVIDENCE NOT COMPLETE | `21-§11-*`, `24-§11-4` |
| R-09 | Entitlement primitive (Basic Voice per plan; Voice Plus later) | Blueprint §8.12; EIS-KER-05 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE | EVIDENCE NOT COMPLETE | `10-§11-1`, `21-§16-*`, `24-§10-5` |
| R-10 | Confirmation binding (`confirmation_bindings`) | Blueprint §8.14, §8.22; EIS-CNF-01, EIS-CNF-03 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE (catalog preview-token precedent only) | EVIDENCE NOT COMPLETE | `10-§7-2` to `-5`, `10-§17-8`, `24-§21-9`, `21-§18-*` |
| R-11 | Execution-time revalidation and authority serialization | Blueprint §8.13; EIS-KER-09, EIS-CNF-02 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE | EVIDENCE NOT COMPLETE | `10-§17-9`, `10-§23-8`, `24-§10-11`, `24-§21-10` |
| R-12 | Shared idempotency pattern | Blueprint §8.24; EIS-CNF-04 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE (catalog/inventory keys only) | EVIDENCE NOT COMPLETE | `24-§11-7`, `24-§23-18`, `10-§23-9`, `22-§29-8` |
| R-13 | Narrow failure; kernel never fails open | EIS-CNF-06 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE | EVIDENCE NOT COMPLETE | `22-§19-*`, `24-§23-*` |
| R-14 | Authority events and denial contract | Blueprint §8.15, §8.16; EIS §11 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE | EVIDENCE NOT COMPLETE | `21-§20-*`, `24-§24-2`, `12-§16-*` |
| R-15 | Explicit active-business context (Stage 6 Founder Decision F-02) | Blueprint §12 downstream dependencies | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE | EVIDENCE NOT COMPLETE | `10-§15-3`, `24-§10-3` |
| R-16 | Residual `anon` grant remediation (WS-B) | Build Plan §5.1; Blueprint §8.36 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE (inventory tables only, file-level) | EVIDENCE NOT COMPLETE (production `UNVERIFIED`) | conversational access to `transactions` (Delta D-09) |
| R-17 | Product & Price Master read paths and Reference Cost/margin boundary (Founder Decision Record 09) | Blueprint §8.35; EIS §12.4 | SPECIFICATION AVAILABLE | IMPLEMENTATION NOT COMPLETE | EVIDENCE NOT COMPLETE; explicitly gated for SB-P-1.13 by EIS §19.5 | any conversational product/price answer (`24-§9-2`) |

No SB-P-1.13 row is marked implemented or demonstrated because of any entry above. If SB-P-1.12 resumes, each row's state is re-read at that time; this table is not a standing assumption.

## Part 6 — Unresolved items, Mission Control questions and T1–T8 screen

### 6.1 Unresolved Founder decisions and escalations in the FCTM

- `ESCALATED` rows: none.
- `UNRESOLVED FOUNDER DECISION` rows: `12-§24` and `BP-§15-2` (Voice Plus price) and `BP-§15-6` (post-cancellation retention). None is on this mission's critical path: GPCV §8 says the Voice Plus price does not block Basic Voice, and the conversation retention controls can follow policy without a final duration.

### 6.2 Questions for Mission Control (not Founder decisions unless Mission Control finds otherwise)

| ID | Question | Evidence |
|---|---|---|
| MC-Q1 | Confirm the 21 inherited residual rows from Contracts 17, 20 and 7 (FCTM Part H) as accounting of existing assignments, not scope expansion. | Delta D-14; SB-P-1.12 FCTM blob `1650ff95` |
| MC-Q2 | Confirm the feature-subject splits. Rows whose subject is another mission's named feature are `ASSIGNED TO LATER MISSION` with a Build Plan §9/§10/§12 citation: SB-P-1.14 34, SB-P-1.15 38, SB-P-1.16 4, SB-P-1.17 7, SB-P-1.18 8, SB-P-1.19 41, SB-P-1.20 19 rows (owning-mission totals across all dispositions, FCTM §K). None changes an approved commitment; each is offered so Mission Control can test it is not a T7 reclassification. | FCTM §0.2 |
| MC-Q3 | Confirm the vocabulary for Contract 22 sections owned by SB-P-1.12 (`DELEGATED`, citing `I-12` and `L-DEL12`). The alternative, `NOT APPLICABLE`, would hide a real consumption dependency. | FCTM Part F |
| MC-Q4 | Review the 17 category-`G` single-rule judgments. | Inventory §3.1 |
| MC-Q5 | Confirm the split of Contract 10 Scenario 3 into a Workspace handoff slice (`10-§23-3a`, SB-P-1.13) and a UDI preview slice (`10-§23-3b`, SB-P-1.14). | Build Plan §10.2 work area 11; §10.3 Scenario A |
| MC-Q6 | Confirm that Contract 8 §4's 100+ FAQ growth is SB-P-1.19 completion (`8-§4-2`) while the trusted FAQ store is SB-P-1.13 (`8-§4-1`). | Build Plan §12 |
| MC-Q7 | Decide whether any delegate contract in FCTM Part J (notably Contract 3, which governs Scenario A's transaction confirmation) must be opened at full obligation level for SB-P-1.13. | Inventory §4.2 |

### 6.3 T1–T8 screen (evidence only; Mission Control determines the gate)

A `Founder Decision Gate — NOT TRIGGERED` outcome is not authorized in this stage (SB-P-1.13-MC-02 §10). The screen records evidence only.

| Trigger | Finding | Evidence |
|---|---|---|
| T1 — unresolved product question no approved source answers | **Candidate present.** Which mission builds the governed create-transaction command that Founder Runtime Scenario A presumes exists, and whether Scenario A waits for it. Also DC-12 (active-account conversation retention default). | Delta D-02; DC-12, DC-14 |
| T2 — conflict among approved sources | **Candidate present.** Contract 12 §21 Scenario 1 and §7 (Basic Voice credit/repayment, SB-P-1.13) depend on the four-state Ledger that Build Plan §10.3 assigns to SB-P-1.14. | Delta D-16; rows `12-§4-1`, `12-§7-6`, `12-§21-1` |
| T3 — new product decision, or approved-unresolved decision needed | No approved-unresolved Build Plan §15 or Phase 1 guide decision is on the critical path. Any decision arising from T1/T2 candidates would be new. | Part 6.1 |
| T4 — Delta item classified `PRODUCT-AFFECTING` | **Present by definition.** D-02, D-05, D-09 (carried forward from SB-P-1.12) and D-16. | Delta §2 |
| T5 — Founder request | None recorded at the baseline. | Mission decision log D-01, D-02 |
| T6 — derived constraint that materially affects behaviour | **Candidates present.** Twelve derived constraints are marked material (DC-01 to DC-08, DC-10 to DC-14). Mission Control judges which, if any, are T6. | Part 3 |
| T7 — proposed omission, deferral, pull-forward, simplification or reclassification | No proposal is made in this pack. All later-mission dispositions cite approved sources (MC-Q2). Dependency-blocked rows remain `IN SCOPE`. Source 18 §3.2 item 5 leaves any change to them to the Founder. | FCTM §0.2 |
| T8 — Product Truth conflict or infeasibility at a later stage | Not applicable at Stage 2. Watch item: if SB-P-1.12 does not resume, 198 `D12` rows cannot be runtime-demonstrated. | Delta D-05 |

Because T4 is present by definition and T1, T2 and T6 candidates exist, a Founder decision brief is prepared as a draft for Mission Control: `founder/01-stage2-decision-brief.md`. It does not record any decision.

### 6.4 Dependent work stopped

Source 18 §3.3 item 5 stops preparation of dependent artifacts if a Stage 3 trigger fires. No Blueprint, EIS or package work has been started. Nothing beyond the Stage 2 outputs listed in SB-P-1.13-MC-02 was prepared.

## Part 7 — Institutional Learning Intake

`Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force`

All 17 validated promotions dispositioned: 3 `APPLIED`, 8 `ALREADY EMBEDDED IN ACTIVE GOVERNANCE`, 4 `INFORMATIONAL`, 2 `NOT APPLICABLE`. See [`04-stage2-institutional-learning-intake.md`](04-stage2-institutional-learning-intake.md).
