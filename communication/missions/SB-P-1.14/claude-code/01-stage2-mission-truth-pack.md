# SB-P-1.14 — Stage 2 Mission Truth Pack

**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media
**Lifecycle stage:** Source 18 v1.2, Stage 2 — Mission Truth and Delta Reconciliation
**Status:** `DRAFT STAGE 2 OUTPUT — STAGE 2 AUTHORIZED; OUTPUT NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`. Stage 2 was authorized by SB-P-1.14-MC-02 (PR #812, merged) (Source 18 §3.3).
**Prepared by:** Claude Code, Stage 2–4 Definition Actor (SB-P-1.14-MC-01)
**Authorization:** SB-P-1.14-MC-02, `mission-control/04-stage2-authorization-and-stage1-reconciliation.md`, and `communication/live/instruction.md`, canonical at `main@5a464e55f3365cbb4689d70f9c42dbe320ebb558` (PR #812, merged 2026-10-07T16:14:32Z)
**Baseline:** `main@5a464e55f3365cbb4689d70f9c42dbe320ebb558`, 2026-10-07
**Owner of this record:** the Definition Actor prepares; Mission Control reviews. The Definition Actor does not approve its own findings (Source 18 §4.3).

This pack does not decide the Stage 3 gate, draft the Blueprint or the EIS, or authorize implementation, SQL, migration, storage-provider, AI-provider, production or OLE action.

## Contents

| Part | Content | Where |
|---|---|---|
| 1 | Mission scope and experience anchors | this file |
| 2 | Populated FCTM and independent obligation inventory | [`02-stage2-populated-fctm.md`](02-stage2-populated-fctm.md), [`03-stage2-obligation-inventory.md`](03-stage2-obligation-inventory.md) |
| 3 | Derived constraints | this file |
| 4 | Delta | [`05-stage2-delta-evidence.md`](05-stage2-delta-evidence.md) |
| 5 | Upstream dependency reconciliation (SB-P-1.12, SB-P-1.13) | this file |
| 6 | Unresolved items, conflicts, Mission Control questions and T1–T8 evidence screen | this file |
| 7 | Institutional Learning Intake Record | [`04-stage2-institutional-learning-intake.md`](04-stage2-institutional-learning-intake.md) |

## Part 1 — Mission scope and experience anchors

### 1.1 Scope opened

Build Plan §9 row 3 assigns Contracts 3, 5, 25 and 22 to SB-P-1.14; §10.3 governs. Stage 2 adds, without changing any approved assignment:

- inherited residual rows that the canonical SB-P-1.12 FCTM (7 rows) and SB-P-1.13 FCTM (34 rows) name for SB-P-1.14, expanded to obligation level (FCTM Parts C, E; inventory §3);
- `DELEGATED` boundary rows for 57 sections of 19 delegate contracts whose behaviour this mission touches (FCTM Part G).

Boundaries preserved from SB-P-1.14-MC-02 §4:

- four-state Ledger widening (income, expense, credit, repayment) → SB-P-1.14 (`BP-§10.3-C1`, `3-§4-*`);
- customer-credit-specific maturity and financial integrity → SB-P-1.16 (`BP-§9-2`, `BP-§10.3-C2`, Contract 14 rows);
- supplier maturity → SB-P-1.17; structured Customer/Supplier directory-indexed search → SB-P-1.17 / SB-P-1.18 (`3-§9-3`, `BP-§10.3-S2`);
- Reminder, Daily Intelligence, Ask CFO → SB-P-1.15; WhatsApp adapter → SB-P-1.20;
- R2 / durable object storage activation is a later gate (`DR2`); Stage 2 neither selects nor activates a provider.

UDI interprets and proposes. It creates no authority and no parallel protected-write path (`BP-§6.1-1`, `BP-§6.2-1`, `DTX`).

### 1.2 Experience anchors (verification anchors, not implementation authority)

| # | Anchor | FCTM rows | Status at this baseline |
|---|---|---|---|
| 1 | Document interpret → review/correct → preview → confirm binding | `BP-§10.3-SA1`, `5-§3-*`, `5-§9-*`, `5-§18-1`, `5-§18-2`, `10-§10-3` to `-5`, `24-§14-*`, `22-§29-7` | Specified; blocked by `D12`, `D13`, `DAI`, `DR2`, `DTX` |
| 2 | Stale-target re-prompt instead of silent retargeting | `BP-§10.3-SA2`, `21-§18`, `5-§17-7`, `22-§13-4` | Specified; blocked by `D12` (confirmation bindings, revalidation); target definition is DC-05 |
| 3 | Original-proof provenance and permission-scoped retrieval | `BP-§10.3-X`, `5-§6-*`, `5-§15-*`, `5-§18-7`, `25-§9-*`, `25-§23-*`, `25-§26-2`, `-3`, `-11`, `17-§12-*` | Specified; blocked by `D12`, `DR2` |
| 4 | Four-state Ledger recording for income, expense, credit and repayment | `BP-§10.3-SB1`, `3-§4-1` to `-4`, `3-§19-1`, `-2`, `3-§9-7` | Specified; blocked by `DTX`, `D12`; credit/repayment boundary is FDB-1 |
| 5 | No damage to existing sale/purchase history | `BP-§10.3-SB2`, `3-§4-5`, `3-§8-16`, `3-§22-2`, `3-§20-1` | Specified; D-01, D-03, D-20; FDB-1 |
| 6 | No independent AI/document path around governed authority or transaction commands | `BP-§6.1-1`, `BP-§6.2-1`, `5-§13-8` to `-12`, `24-§14-9`, `25-§25-3`, `25-§27-8`, `22-§28-9` | Specified; `DTX`, `D12`, `D13` |

### 1.3 Draft workstream mapping (Stage 1 register, unchanged)

| Workstream | Principal FCTM rows |
|---|---|
| WS-A Ledger / Business Memory Maturity | `3-§4-*`, `3-§6-*`, `3-§10-*`, `3-§11-*`, `3-§12-*`, `3-§22-*`, `22-§4-*`, `BP-§10.3-W1` to `-W3`, `-SB1`, `-SB2` |
| WS-B UDI Intake & Interpretation | `5-§3-*`, `5-§4-*`, `5-§5-*`, `5-§13-*`, `5-§14-*`, `22-§9-*`, `24-§7-*`, `24-§14-*`, `7-§6-2`, `7-§6-4` |
| WS-C Review, Confirmation & Correction | `5-§9-*`, `5-§10-*`, `3-§7-*`, `3-§8-*`, `10-§10-*`, `BP-§10.3-SA1`, `-SA2` |
| WS-D Receipt Cabinet & Provenance | `5-§6-*`, `5-§15-*`, `22-§10-*`, `17-§12-*`, `25-§10-*`, `25-§23-*` |
| WS-E Durable Media / Object Storage | `25-§4` to `25-§9`, `25-§11` to `25-§22`, `25-§24`, `25-§25`, `BP-§5.4-1`, `BP-§6.3-2` |
| WS-F Search & Retrieval | `3-§9-*`, `5-§6-3` to `-12`, `BP-§10.3-S1`, `10-§5-10` |
| WS-G Audit, Idempotency, Failure & Evidence | `3-§17-*`, `5-§11-*`, `5-§16-*`, `5-§17-*`, `25-§14-*`, `25-§20-*`, `22-§19-*`, `22-§22-*` |

### 1.4 Headline counts

766 FCTM rows: 564 `IN SCOPE`, 44 `ASSIGNED TO LATER MISSION`, 104 `DELEGATED`, 32 `NOT APPLICABLE`, 20 `OUT OF BUILD SCOPE`, 2 `UNRESOLVED FOUNDER DECISION` (neither on the critical path), 0 `ESCALATED`, 0 `ALREADY DEMONSTRATED`. All 107 numbered sections of Contracts 3, 5, 22, 25 (plus Contract 25's Final Principle) and all 62 numbered acceptance scenarios have rows. Of the 564 `IN SCOPE` rows, 226 carry `D12`, 93 `D13`, 124 `DR2`, 97 `DAI`, 42 `DTX`, 11 `DLEG`. `FDB-1` touches 24 rows; `FDB-2` touches 8. Counts are reproducible (FCTM §H). Independent coverage check: inventory §3, all PASS.

## Part 3 — Derived constraints

These are engineering or product implications inferred by the Definition Actor. **None is approved Product Truth. None is applied to any FCTM row.** The "Could materially change" column flags the instruction's categories: R = merchant review/confirmation; T = transaction behaviour; P = permission/data visibility; D = document retention/deletion; S = storage/provider behaviour; C = correction/audit; Q = search/retrieval. The last column is the Definition Actor's reading for Mission Control; Mission Control decides T6.

| ID | Derived constraint | Inferred from | Could materially change | Reading for Mission Control |
|---|---|---|---|---|
| DC-01 | Four states are added by additive widening of the transaction model and the correction function; existing `sale`/`purchase` rows are neither rewritten nor reinterpreted, and every reader is updated so no new type renders as a purchase. | `3-§4-5`, `3-§22-2`, `BP-§10.3-W3`, D-01, D-03 | T, C | Engineering realization of approved truth |
| DC-02 | How credit and repayment enter merchant-visible totals ("Today's sales/purchases", period summaries, exports) must avoid double counting (credit sale then repayment). No approved source defines the totals semantics. | `3-§10-*`, `14-§22`, `17-§6`, D-03 | T, Q | **Material.** Tied to FDB-1; candidate T6 |
| DC-03 | All four-state and UDI-confirmed Ledger writes go through the one governed command (`create_transaction_governed`), widened for new types, with idempotency and first-class unknown outcome; no second protected write path. | `BP-§6.2-1`, SB-P-1.13 EIS13-CMD-02, EIS13-IDM-02, resume register §D, D-02 | T | Engineering realization; already constrained by locked upstream specifications |
| DC-04 | Stored object, interpreted fact and confirmed record are three distinct states. The preview fingerprints the exact reviewed interpretation (after merchant corrections) and its target; commit through `confirmation_bindings` writes exactly that. | `25-§11-4`, `BP-§10.3-SA1`, SB-P-1.12 EIS-CNF-01 | R | Engineering realization |
| DC-05 | The "underlying resolvable target" of Scenario A must be defined: at least the matched counterparty reference, a linked credit record for a repayment, an inventory item for opening stock, and duplicate candidates. A change to any of them after preview causes a re-prompt. | `BP-§10.3-SA2`, `22-§13-4`, `21-§17` | R, T | **Material.** What counts as a target change is merchant-visible; candidate T6, otherwise settled at Blueprint |
| DC-06 | Original bytes are immutable once stored; corrections change interpretation or the record, never the original. Replacement creates a new version linked to the prior one. | `22-§14`, `25-§10-12`, `25-§23-7`, `3-§8-16` | C, D | Engineering realization |
| DC-07 | Document retrieval inherits the permission of the linked record at request time, revocation is honoured, and create does not imply read-all. Whether an Employee may later view a receipt they uploaded is not stated by any source; it falls to the SB-P-1.12 capability registry and role defaults. | `21-§11`, `5-§12-4`, `25-§19-7`, `25-§26-11` | P | **Material** if a default differs from Contract 21 §4/§11; otherwise Blueprint detail |
| DC-08 | Storage keys may be business-prefixed (SB-P-1.12 EIS-ISO-05), but authorization never derives from the path, and the internal object identity, not the provider key, is the business reference. | `25-§14-1`, `25-§15-*`, `25-§19-3`, EIS-ISO-05 | S | Engineering realization |
| DC-09 | The existing AWS S3 presigned staging and Lambda parser (non-production) may serve only as transient processing staging; durable originals live in the approved durable object storage. Retaining AWS staging is an infrastructure choice for Mission Control. | `25-§11-2`, `25-§27-4`, `22-§28-5`, D-05 | S | Engineering; infrastructure choice for Mission Control, not a Founder question |
| DC-10 | No retention duration is coded. Documents reuse the SB-P-1.12 record-class retention registry and legal-hold pattern; lifecycle transitions are non-destructive by default; deletion is deliberate and audited. No legal retention rule is inferred. | `25-§17-*`, Contract 22 §33.7, EIS-LEG-01 to -03, Founder Record 06 | D | Engineering realization of approved principles |
| DC-11 | What happens to an uploaded original whose interpretation is rejected, abandoned or whose preview expires (kept as proof, or discarded under minimum-necessary retention) is not stated by any source. | `5-§16-3`, `25-§17-6`, `25-§27-7`, SB-P-1.13 partial learning L-7 | D, R | **Material.** FDB-2 |
| DC-12 | Raw voice audio: once governed storage exists, whether any raw audio is retained durably, and for which purpose, is not stated. FPDR-3 governs only the period before this mission; Contract 25 §12 allows retention only "where justified". | `25-§12-1`, `25-§12-3`, SB-P-1.13 FPDR-3 | D, S | **Material.** FDB-2 |
| DC-13 | Duplicate detection uses a business-scoped content fingerprint (never cross-business) and surfaces a possible duplicate in the preview rather than silently dropping it. | `5-§9-7`, `5-§11-*`, `25-§14-4`, D-07 | R | Engineering realization |
| DC-14 | Search covers period, counterparty reference (free text), purpose/description, amount, payment method, document type and linked record through one permission-scoped query layer shared by conversation and visual surfaces; no directory identity is created. | `3-§9-*`, `BP-§10.3-S1`, `S2` | Q | Engineering realization within approved scope |
| DC-15 | Orphan detection, reconciliation and lifecycle jobs need scheduled execution, but the Scheduler foundation is SB-P-1.15 (`22-§18`). Either these jobs wait, run on demand, or SB-P-1.14 builds against the shared foundation early; a feature-specific scheduler is a non-goal (`22-§28-4`). | `25-§14-6`, `25-§21-*`, `22-§18`, `22-§28-4` | S | Sequencing question for Mission Control (MC-Q4) |
| DC-16 | Image, PDF and handwriting interpretation sends merchant documents to the AI provider only after the SB-P-1.13 provider data-control gate (EIS13-PRV-01); deterministic CSV/XLSX parsing needs no provider. | `24-§25`, `5-§16-7`, EIS13-PRV-01 | S, P | Engineering realization; already constrained |
| DC-17 | Exports are computed from the same query layer as summaries; a generated export is stored durably only where retention is required. | `3-§10-9`, `25-§7-1` | Q, D | Engineering realization |
| DC-18 | Uploader and creator attribution on documents and Ledger rows survives identity deletion as non-authorizing history; the current `ON DELETE CASCADE` paths are SB-P-1.12's (EIS-ESC-03, -04). | `22-§33-1`, D-08 | C | Engineering; owned by SB-P-1.12 |

## Part 5 — Upstream dependency reconciliation

Rule (SB-P-1.14-MC-02 §5): locked specification may be consumed; unimplemented runtime behaviour is never treated as demonstrated. Each row is classified **SPECIFICATION AVAILABLE**; **IMPLEMENTATION NOT COMPLETE** (or **UNVERIFIED** where production state is unknown); **EVIDENCE NOT COMPLETE**.

### 5.1 SB-P-1.12

Shared evidence: Blueprint `APPROVED — LOCKED` (blob `77d52096`); EIS `APPROVED — LOCKED` (blob `c444f750`); Stage 13 package locked; Implementation Authorization `WITHHELD`; MC-70 suspension; MC-71 resume register. No Stage 17 or 19. Consumption contract EIS-DEP-01 (§19.5): a consumer may use a capability only after the providing workstreams are implemented and verified, every touched table family has completed WS-A3 cut-over, and Mission Control accepts the evidence. No temporary parallel authorization.

| ID | Dependency consumed | Specification | Specification | Implementation | Evidence | SB-P-1.14 rows depending on it |
|---|---|---|---|---|---|---|
| U12-01 | Verified principal; explicit active business | EIS-KER-02, EIS-ID-06 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `25-§8-1`, `-2`, `25-§9-1` |
| U12-02 | Memberships, role defaults, capability registry (SB-P-1.14 registers Ledger and document capabilities) | EIS-KER-01, -03, -04 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `3-§11-*`, `5-§12-*`, DC-07 |
| U12-03 | Action types incl. export; object scope; create ≠ read-all | EIS-KER-08 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `3-§10-1`, `21-§5`, `21-§11` |
| U12-04 | Isolation: kernel RLS, client `business_id` untrusted, reference-level isolation | EIS-ISO-01, -07 | AVAILABLE | NOT COMPLETE (owner-only RLS exists) | NOT COMPLETE | `3-§18-1`, `5-§16-1`, `22-§29-3`, `25-§26-2` |
| U12-05 | Files, exports and object storage business-scoped through the kernel; signed operations; storage policy state gated (G-7) | EIS-ISO-05 | AVAILABLE | NOT COMPLETE | UNVERIFIED (live policy) | `25-§4-*`, `25-§9-*`, `25-§19-*`, DC-08 |
| U12-06 | Command-only write boundary for `transactions`; WS-A3 transactions-family cut-over | EIS-ISO-02 | AVAILABLE | NOT COMPLETE (direct insert today, D-02) | NOT COMPLETE | all `DTX` rows |
| U12-07 | Confirmation bindings (fingerprint, target, expiry, single use) | EIS-CNF-01 | AVAILABLE | NOT COMPLETE (catalog preview-token precedent only) | NOT COMPLETE | `BP-§10.3-SA1`, `-SA2`, `5-§9-9`, `21-§18` |
| U12-08 | Revalidation and authority serialization | EIS-CNF-02, EIS-KER-09 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `BP-§10.3-SA2`, `25-§20-13`, `25-§26-11` |
| U12-09 | Server-authoritative preview of material/uncertain imports | EIS-CNF-03 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `5-§3-*`, `5-§9-*` |
| U12-10 | Shared idempotency pattern | EIS-CNF-04 | AVAILABLE | NOT COMPLETE (catalog/inventory keys only) | NOT COMPLETE | `5-§11-*`, `25-§14-*`, `3-§17-2` |
| U12-11 | Multi-row import under revocation (Founder Record 04 F-04(c)) | EIS-CNF-05 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `5-§18-4`, `5-§18-5`, `7-§15-2a` |
| U12-12 | Narrow failure; kernel never fails open | EIS-CNF-06 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `22-§19-*`, `5-§17-*` |
| U12-13 | Authority events and denial contract | EIS-AUD-01, -02, EIS-UX-01 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `21-§19`, `21-§20`, `25-§23-8` |
| U12-14 | Provenance widening; raw evidence + interpretation + correction + human context | EIS-AUD-03, -04 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `5-§15-*`, `22-§29-12`, `25-§23-*` |
| U12-15 | Record-class retention registry, legal hold, backup treatment | EIS-LEG-01 to -03 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `DLEG` rows, DC-10 |
| U12-16 | Purpose-limited support access | EIS-SUP-01 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `3-§18-4`, `5-§12-7` |
| U12-17 | Residual `anon` grant remediation on `transactions`, `transaction_correction_events` (WS-B) | Build Plan §5.1; EIS-ISO-03 | AVAILABLE | NOT COMPLETE (file level) | UNVERIFIED (production grants) | `BP-§5.1-1`; every Ledger write |
| U12-18 | Cascade remediation: `transactions.creator_id`, correction-event cascade | EIS-ESC-03, -04 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `3-§8-16`, `22-§33-1`, DC-18 |
| U12-19 | Product & Price Master read paths (UDI line items matched to products) | EIS-PPM-03, -05 | AVAILABLE | NOT COMPLETE | NOT COMPLETE; gated | `BP-§7-1`, `5-§5-5` |

### 5.2 SB-P-1.13

Shared evidence: Blueprint `APPROVED — LOCKED` (blob `bbf65429`); EIS `APPROVED — LOCKED` (blob `9a1e723d`); package v1.0 locked; Implementation Authorization `WITHHELD`; MC-38 partial completion and suspension; MC-39 resume register. No Stage 17 or 19. SB-P-1.13 itself depends on SB-P-1.12 (`D12`).

| ID | Dependency consumed | Specification | Specification | Implementation | Evidence | SB-P-1.14 rows depending on it |
|---|---|---|---|---|---|---|
| U13-01 | Workspace surface and channel-neutral kernel entry | EIS13-ARC-02, EIS13-WSP-01 to -03 | AVAILABLE | NOT COMPLETE (no conversation code) | NOT COMPLETE | `3-§12-2`, `5-§8-2`, `10-§10-*` |
| U13-02 | Attachment intake and handoff to SB-P-1.14 UDI (transient only; no bucket) | EIS13-ATT-01 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `5-§8-2`, `10-§10-1`, `25-§13-1a`; this mission must publish the UDI intake contract |
| U13-03 | AI gateway, provider abstraction, structured output validation | EIS13-GW-01, -02, EIS13-TOOL-02 | AVAILABLE | NOT COMPLETE | NOT COMPLETE; provider `UNVERIFIED — ACCESS REQUIRED` | all `DAI` rows |
| U13-04 | Instruction/data separation incl. document-borne injection | EIS13-CTX-01 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `24-§22`, `5-§13-*` |
| U13-05 | Frozen confirmed proposal; execution-time revalidation | EIS13-CNF-01, -02 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `BP-§10.3-SA1`, `10-§10-5` |
| U13-06 | Governed create-transaction command (`create_transaction_governed`) under SB-P-1.12 WS-A3 | EIS13-CMD-02 (FPDR-1) | AVAILABLE | NOT COMPLETE | NOT COMPLETE | all `DTX` rows; widening extends this command |
| U13-07 | FPDR-5 credit boundary for existing credit-method sales | EIS13-CMD-03 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `3-§4-3`, D-20, FDB-1 |
| U13-08 | Idempotency and first-class unknown outcome | EIS13-IDM-01, -02 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `3-§17-2`, DC-03 |
| U13-09 | Basic Voice; FPDR-2 sequencing; FPDR-3 transient raw audio | EIS13-VOI-01, -02, -07 | AVAILABLE | NOT COMPLETE; voice provider `UNVERIFIED — ACCESS REQUIRED` | NOT COMPLETE | `3-§5-6`, `3-§19-3`, `12-§4-5`, `25-§12-*`, FDB-2 |
| U13-10 | Shared language layer, clarification, identity matching | EIS13-LANG-01, -03, -04 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `9-§12-1`, `3-§7-*` |
| U13-11 | AI and provider failure states | EIS13-FAIL-01 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | `24-§23-6`, `22-§29-13` |
| U13-12 | Provider data-control and activation gate | EIS13-PRV-01 | AVAILABLE | NOT COMPLETE | NOT COMPLETE | DC-16 |

No SB-P-1.14 row is marked implemented or demonstrated because of any entry above. When SB-P-1.12 or SB-P-1.13 resumes, each row's state is re-read; this table is not a standing assumption.

### 5.3 Reverse dependency — SB-P-1.13 rows waiting on SB-P-1.14

33 SB-P-1.13 `IN SCOPE` rows carry `D14` (SB-P-1.13 EIS13-HOLD-03). They stay SB-P-1.13 rows; SB-P-1.14 must supply the capability they wait for:

- attachment intake and handoff: `10-§4-3` to `-8`, `10-§10-2`, `10-§10-6`, `10-§23-3a`, `BP-§10.2-W11`;
- Business Memory shared with conversation: `22-§7-7`, `22-§24-1`, `22-§29-1`, `24-§9-3`, `24-§31-15`, `10-§6-3`, `10-§6-7`, `10-§7-6`, `17-§5-4`, `17-§5-8`, `17-§22-4`, `BP-§6.4-1`, `24-§6-2`, `24-§9-2`;
- conversation history and media: `10-§16-4`, `10-§16-5`, `BP-§6.4-9`;
- Basic Voice credit/repayment and raw audio: `12-§4-1`, `12-§7-6`, `12-§21-1` (FPDR-2, FPDR-5), `12-§11-5`, `12-§15-4`, `12-§16-8` (FPDR-3).

## Part 6 — Unresolved items, conflicts and T1–T8 evidence screen

### 6.1 Unresolved Founder decisions and escalations in the FCTM

- `ESCALATED` rows: none (findings are reported here, not self-resolved; SB-P-1.13 precedent).
- `UNRESOLVED FOUNDER DECISION` rows: `25-§17-1` and `BP-§15-6` (Build Plan §15 item 6, long-term retention after cancellation/non-payment). Not on the critical path: GPCV §8 says it does not block non-destructive storage/control-plane work.

### 6.2 Open questions found at Stage 2 (Founder brief, questions only)

| ID | Question | Evidence | Rows |
|---|---|---|---|
| FDB-1 | Where exactly is the line between SB-P-1.14 four-state credit/repayment and SB-P-1.16 customer-credit maturity? (a) Must SB-P-1.14 answer per-counterparty owed amounts ("What does Shameer still owe me?") or only record, link and retrieve credit and repayment entries? (b) What merchant-visible meaning do existing `sale` rows with `payment_method = credit` take once a `credit` state exists? (c) Does "credit" include amounts the business owes (payables)? (d) How do credit and repayment enter daily totals? | D-19, D-20, DC-02; Build Plan §10.3, §10.5; Contract 3 §4, §9; Contract 14 §5, §7; SB-P-1.13 FPDR-5 | 24 rows marked `FDB-1` |
| FDB-2 | Retention purpose for originals that never become confirmed records, and for raw voice audio once governed storage exists | DC-11, DC-12; Contract 5 §16; Contract 25 §12, §17; SB-P-1.13 FPDR-3 | 8 rows marked `FDB-2` |

### 6.3 Candidate conflicts and observations among sources

| ID | Finding | Definition Actor reading (not a decision) |
|---|---|---|
| CF-1 | Source 02 §8 (blob `b35ebc2b`) says recent media in Supabase Storage, older media in an R2 archive. Contract 25 §16 and §28 classify that model as historical provenance that an EIS may deliberately re-adopt; Build Plan §16 rejects uncontrolled binary-media concentration in Supabase. | Reconcilable: Contract 25 is the later, reconciled, more specific source. Surfaced for T2 screening; not placed in the Founder brief |
| CF-2 | SB-P-1.13 FPDR-5 restatement versus Build Plan §10.5 (D-19) | Genuine wording conflict between approved records; candidate T2; folded into FDB-1 |
| O-1 | SB-P-1.14 Stage 1 records call R2 "a known candidate infrastructure seam"; Contract 25 header, §2, §5 record R2 as the Founder-selected primary object store. Build Plan §5.4 says "Cloudflare R2 / approved durable object storage". | No conflict among approved sources: R2 is selected product direction; activation is a separate gate. Choosing a provider other than R2 would be a T3/T7 matter. Mission Control may align its wording |
| O-2 | Source 11 "Receipt Scanning" experience reads "Take photo → Smart Business understands → record created"; Contract 5 §3 requires preview and confirmation for uncertain or consequential updates; Source 11's own UDI section requires "create preview, ask confirmation". | Consistent once read together; no change proposed |

### 6.4 Mission Control questions

| ID | Question |
|---|---|
| MC-Q1 | Confirm the inherited residual accounting: 34 SB-P-1.13 and 7 SB-P-1.12 rows naming SB-P-1.14, expanded to obligation level (inventory §3) |
| MC-Q2 | Confirm the slice splits (`a`/`b` rows and `3-§9-2`/`-3`, `5-§4-9`/`-10`, `7-§6-*`) preserve Build Plan ownership and do not trigger T7 |
| MC-Q3 | Confirm the 57 `DELEGATED` boundary rows (FCTM Part G) are the right set of touched delegate sections, and that Contract 21 stays section-level rather than fully opened |
| MC-Q4 | DC-15: how scheduled storage jobs (orphan detection, reconciliation, lifecycle) are sequenced against the SB-P-1.15 Scheduler foundation |
| MC-Q5 | DC-09: whether the AWS S3 transient staging path is retained for UDI processing |
| MC-Q6 | Accept the `L-ILL` single-row judgments and the two departures from precedent (inventory §3) |

### 6.5 T1–T8 evidence screen

This is evidence only. **Mission Control determines whether Stage 3 is triggered.** No `NOT TRIGGERED` record is written.

| Trigger | Evidence found | Candidate? |
|---|---|---|
| T1 — unresolved product question no approved source answers | FDB-1 (a)–(d); FDB-2 | **Yes** |
| T2 — conflict among approved sources | CF-2 (FPDR-5 vs Build Plan §10.5); CF-1 (Source 02 §8 vs Contract 25, read as reconcilable) | **Yes** (CF-2) |
| T3 — new product decision or approved-unresolved decision needed | Build Plan §15 item 6 is relevant but not on the critical path (GPCV §8) | No, on this reading |
| T4 — Delta item `PRODUCT-AFFECTING` | D-19, D-20 | **Yes** |
| T5 — Founder request | None recorded at the baseline | No |
| T6 — material derived constraint | DC-02, DC-05, DC-07, DC-11, DC-12 flagged material | For Mission Control judgment |
| T7 — proposed omission, deferral, pull-forward, simplification or reclassification | None proposed. A Founder answer to FDB-1 that moves owed-balance truth between SB-P-1.14 and SB-P-1.16 would itself be a T7 decision | No |
| T8 — later-stage conflict or infeasibility | Stage 2 | Not applicable |

### 6.6 Dependent work stopped

If Mission Control determines that the gate is triggered, Source 18 §3.3 item 5 stops dependent preparation. No Blueprint, EIS or package work has been started. Nothing beyond the Stage 2 outputs listed in the live instruction was prepared.

## Part 7 — Institutional Learning Intake

`Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force`

All 17 validated promotions dispositioned: 3 `APPLIED`, 8 `ALREADY EMBEDDED IN ACTIVE GOVERNANCE`, 4 `INFORMATIONAL`, 2 `NOT APPLICABLE`. SB-P-1.12 and SB-P-1.13 partial learning handoffs used as context only. See [`04-stage2-institutional-learning-intake.md`](04-stage2-institutional-learning-intake.md).
