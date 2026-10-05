# SB-P-1.13 — Stage 2 Mission Truth Pack

**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation
**Lifecycle stage:** Source 18 v1.2, Stage 2 — Mission Truth and Delta Reconciliation
**Status:** `DRAFT STAGE 2 OUTPUT — STAGE 2 AUTHORIZED; OUTPUT NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`. Stage 2 was authorized by SB-P-1.13-MC-02 (PR #776, merged) (Source 18 §3.3).
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
| 6 | Unresolved items, Mission Control resolutions and T1–T8 determination | this file |
| 7 | Institutional Learning Intake Record | [`04-stage2-institutional-learning-intake.md`](04-stage2-institutional-learning-intake.md) |

## Part 1 — Mission scope and experience anchors

### 1.1 Scope opened

Build Plan §9 row 2 assigns Contracts 9, 10, 12 Basic, 24, 22 and the Support Automation foundation to SB-P-1.13. SB-P-1.13-MC-02 §3 opens Contract 21 for delegated authority touch points. Stage 2 adds:

- residual rows that the locked SB-P-1.12 FCTM assigns to SB-P-1.13 in Contracts 17, 20 and 7 (FCTM Part H; Delta D-14);
- `DELEGATED` rows for the sections of Contracts 2, 3, 5, 11, 18, 19, 23 and 25 whose behaviour this mission touches at its boundary (FCTM Part J).

Neither addition changes an approved assignment. Mission Control confirmed both (MC-Q1, MC-Q7). The 15 inherited SB-P-1.12 source rows expand to 45 SB-P-1.13 obligation/scenario rows: the 8 rows in Contracts 17, 20 and 7 expand to 21 rows (FCTM Part H), and the 7 Contract 22 rows expand to 24 rows (FCTM Part F).

Boundaries preserved from SB-P-1.13-MC-02 §4: broader Support completion and Voice Plus are SB-P-1.19; UDI, durable media and mature Business Memory are SB-P-1.14; Ask CFO is SB-P-1.15; the WhatsApp adapter is SB-P-1.20. Attachment work stops at intake and handoff.

### 1.2 Experience anchors (verification anchors, not implementation authority)

| Anchor | FCTM rows | Status at this baseline |
|---|---|---|
| 1. Governed natural-language consequential action: clarification, preview, permission enforcement, deterministic execution, truthful confirmation | `BP-§10.2-SA1`, `10-§23-1`, `24-§21-*`, `24-§31-5`, `24-§31-7`, `9-§9-*`, `3-§6` (delegated) | Specified; blocked by `DTX` (Delta D-02, Founder question FDB-1) and `D12` (Delta D-05, implementation dependency) |
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

These are engineering or product implications inferred by the Definition Actor. **None is approved Product Truth.** None is applied to any FCTM row. The last column records Mission Control's disposition from its review of PR #777 (correction C-5).

| ID | Derived constraint | Inferred from | Material to | Mission Control disposition (C-5) |
|---|---|---|---|---|
| DC-01 | Business and principal context are resolved server-side for every conversational turn and attached to every tool proposal by the gateway; the model never supplies or chooses `business_id`, actor or role. | `21-§6-7`, `24-§10-1`, EIS-KER-02, EIS-KER-06 | permission behaviour | Engineering realization; already constrained by approved sources and the locked SB-P-1.12 design. Not a Founder question at this gate |
| DC-02 | The tool registry exposes read tools and write tools separately. A write tool returns only a preview and a single-use binding; execution happens only through a separate confirm step that the SB-P-1.12 kernel revalidates. | `24-§11-5`, `24-§11-6`, `24-§11-10`, `21-§18-*`, EIS-CNF-01 | confirmation/denial | Engineering realization; already constrained by approved sources and the locked SB-P-1.12 design. Not a Founder question at this gate |
| DC-03 | Owner-only financial aggregates are excluded from model context for non-Owner principals before the model call, not filtered from model output afterwards. | `24-§10-8`, `24-§25-3`, `21-§8-7` | financial-data visibility; denial | Engineering realization; already constrained by approved sources and the locked SB-P-1.12 design. Not a Founder question at this gate |
| DC-04 | Until SB-P-1.14 governed media storage exists, Basic Voice processes audio transiently and keeps no durable raw recording; only the transcript and the resulting governed record persist. | `12-§15-4`, `12-§16-8`, `25-§12`, Build Plan §10.3 | voice behaviour; privacy | Genuine merchant-facing voice/privacy choice; may remain in the Stage 3 brief (FDB-3) |
| DC-05 | Voice output defaults to text for Owner-sensitive content whenever the role or listening context is uncertain. | `12-§15-1` to `-3`, `10-§19-4` | voice behaviour; financial-data visibility | Genuine merchant-facing voice/privacy choice; may remain in the Stage 3 brief (FDB-3) |
| DC-06 | When the AI provider is unavailable, the Workspace keeps the merchant's input, points to the structured pages, and never auto-executes a queued consequential action after recovery without a fresh confirmation. | `24-§23-1`, `-12`, `-13`, `-18`, `22-§19-*`, Phase 1 guide §10 unknown-outcome rule | provider-failure behaviour; confirmation | Engineering realization; already constrained by approved sources and the locked SB-P-1.12 design. Not a Founder question at this gate |
| DC-07 | Pending confirmations expire. The expiry period is visible to the merchant ("this preview has expired, please review again"). | `21-§18-6`, `10-§7-2`, `10-§18-8` | confirmation | Engineering realization; already constrained by approved sources and the locked SB-P-1.12 design. Not a Founder question at this gate |
| DC-08 | Before SB-P-1.14, a document sent in the Workspace is accepted and acknowledged but produces no consequential update; the merchant is told interpretation is not yet available or is routed to an existing import surface. | `10-§4-8`, `10-§23-3a`, `10-§23-3b`, SB-P-1.13-MC-02 §4 | merchant experience | Already bounded by the approved SB-P-1.13/SB-P-1.14 split. Not a Founder question unless a different merchant experience is proposed |
| DC-09 | Clarification thresholds are calibrated per field (amount, party, date, unit) and never default a consequential value silently. | `9-§15-*`, `24-§6-3` | merchant experience | Not material (engineering realization of approved behaviour) |
| DC-10 | Support resolution is FAQ-first. When the FAQ alone is insufficient, AI-supported explanation may use trusted, versioned, approved support knowledge with recorded provenance, in English, Malayalam and Manglish. It never invents policy or an answer the approved knowledge does not support. (Corrected under C-5: the first draft limited AI answers to the FAQ corpus alone, which is narrower than Contract 8 §3 step 5 and §7.) | `8-§4-1`, `8-§6-*`, `8-§7-*` | merchant experience | Wording corrected (see row). Not a Founder question |
| DC-11 | AI provider data controls (no training on merchant data; bounded retention) must be verified and configured before any merchant data reaches the provider. | `24-§25-*`, `24-§31-14`, Delta D-03 | privacy | Engineering realization; already constrained by approved sources and the locked SB-P-1.12 design. Not a Founder question at this gate |
| DC-12 | Conversation history needs a default retention period for active accounts. Build Plan §15 item 6 covers only post-cancellation retention. | `10-§16-1`, `-2`, `24-§24-10` | merchant experience; privacy | Open policy/legal-retention dependency; not on the critical path for this Stage 3 gate |
| DC-13 | Basic Voice quality in Malayalam and Manglish depends on the provider chosen at the activation gate; a provider that cannot meet it would narrow the approved experience. | `9-§8-2`, `12-§9-*`, `12-§21-7`, Delta D-04 | voice behaviour | Activation-gate risk; becomes a Founder/product issue only if no provider can meet the approved Malayalam/Manglish commitment |
| DC-14 | A governed create-transaction command is needed for Scenario A (Delta D-02). It extends, and does not replace, the existing transaction and correction foundations (Contract 3 §22). | `BP-§10.2-SA1`, `3-§22`, `BP-§6.2-1` | confirmation; merchant experience | Folded into the D-02 governed-command question (FDB-1); not a separate decision |

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

## Part 6 — Unresolved items, Mission Control resolutions and T1–T8 determination

### 6.1 Unresolved Founder decisions and escalations in the FCTM

- `ESCALATED` rows: none.
- `UNRESOLVED FOUNDER DECISION` rows: `12-§24` and `BP-§15-2` (Voice Plus price) and `BP-§15-6` (post-cancellation retention). None is on this mission's critical path: GPCV §8 says the Voice Plus price does not block Basic Voice, and the conversation retention controls can follow policy without a final duration.

### 6.2 Mission Control questions — resolved

Mission Control resolved MC-Q1 to MC-Q7 in its review of PR #777 at head `f43ac9a2`.

| ID | Question | Mission Control resolution |
|---|---|---|
| MC-Q1 | Inherited residual rows | CONFIRMED. 15 inherited SB-P-1.12 source rows expand to 45 SB-P-1.13 rows (21 in FCTM Part H from Contracts 17, 20, 7; 24 in Part F from Contract 22); no scope expansion |
| MC-Q2 | Feature-subject splits to later missions | ACCEPTED, subject to D-16 (C-6). The splits preserve Build Plan ownership and do not trigger T7 |
| MC-Q3 | `DELEGATED` for SB-P-1.12-owned Contract 22 foundations | CONFIRMED |
| MC-Q4 | 17 category-`G` single-rule judgments | ACCEPTED for Stage 2; Stage 19 may challenge them independently |
| MC-Q5 | Contract 10 Scenario 3 split (`10-§23-3a`, `10-§23-3b`) | CONFIRMED; both slices trace to the original scenario |
| MC-Q6 | Trusted FAQ foundation here; 100+ corpus SB-P-1.19 | CONFIRMED |
| MC-Q7 | Opening Contract 3 at full obligation level | NOT REQUIRED. Touched Contract 3 sections stay `DELEGATED`; the governed create-transaction gap is governed by Build Plan §6.2/§10.2 and Contract 10/24 rows; mature Ledger is not pulled into SB-P-1.13 |

### 6.3 T1–T8 — Mission Control determination

Mission Control's determination from its review of PR #777 (correction C-3) replaces the first draft's evidence-only screen. **The Stage 3 Founder Decision Gate IS TRIGGERED once this Stage 2 output is canonically merged.** No `NOT TRIGGERED` record is written.

| Trigger | Result | Basis |
|---|---|---|
| T1 — unresolved product question no approved source answers | **TRIGGERED** | D-02: Founder Runtime Scenario A assumes a governed transaction command/RPC that does not exist, and approved sources do not unambiguously assign creating it |
| T2 — conflict among approved sources | **TRIGGERED** | D-16: Basic Voice in SB-P-1.13 requires credit/repayment behaviour; the four-state Ledger it depends on is assigned to SB-P-1.14 |
| T3 — new product decision, or approved-unresolved decision needed | Not separately determined by Mission Control | No Build Plan §15 or Phase 1 guide unresolved decision is on the critical path. Decisions arising from T1/T2 are new decisions |
| T4 — Delta item classified `PRODUCT-AFFECTING` | **TRIGGERED** | D-02 and D-16 accepted as `PRODUCT-AFFECTING`. D-05 and D-09 reclassified `ENGINEERING ONLY` (C-2) |
| T5 — Founder request | **NOT TRIGGERED** at the Stage 2 baseline | No Founder request recorded |
| T6 — derived constraint that materially affects behaviour | Limited to DC-04 and DC-05, which may remain in the Stage 3 brief | Part 3, Mission Control disposition column |
| T7 — proposed omission, deferral, pull-forward, simplification or reclassification | **Not triggered by this Truth Pack** | A Founder choice that pulls four-state Ledger work forward, moves Scenario A, or changes mission ownership or timing would itself be a T7 decision |
| T8 — Product Truth conflict or infeasibility at a later stage | Not applicable yet | Stage 2 |

The SB-P-1.12 dependency (D-05) is not a Founder question. It is already governed by the Founder-directed documentation-acceleration lane (SB-P-1.12 MC-70 §1, §7): later missions continue documentary and readiness work; SB-P-1.12-dependent implementation and runtime proof stay blocked; no temporary parallel permission system may be created (SB-P-1.12 EIS §19.5). The 198 `D12` rows stay `IN SCOPE` and dependency-blocked.

Rows `12-§4-1`, `12-§7-6` and `12-§21-1` stay `IN SCOPE` with the SB-P-1.14 dependency until the Founder decides sequencing (C-6).

The Founder decision brief is narrowed accordingly (`founder/01-stage2-decision-brief.md`): FDB-1 governed create-transaction command and Scenario A ownership and timing (including DC-14); FDB-2 Basic Voice credit/repayment versus the SB-P-1.14 four-state Ledger; FDB-3 voice/privacy choices DC-04 and DC-05. The brief records no decision.

### 6.4 Dependent work stopped

Source 18 §3.3 item 5 stops preparation of dependent artifacts if a Stage 3 trigger fires; Mission Control has determined that it does. No Blueprint, EIS or package work has been started. Nothing beyond the Stage 2 outputs listed in SB-P-1.13-MC-02 was prepared.

## Part 7 — Institutional Learning Intake

`Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force`

All 17 validated promotions dispositioned: 3 `APPLIED`, 8 `ALREADY EMBEDDED IN ACTIVE GOVERNANCE`, 4 `INFORMATIONAL`, 2 `NOT APPLICABLE`. See [`04-stage2-institutional-learning-intake.md`](04-stage2-institutional-learning-intake.md).
