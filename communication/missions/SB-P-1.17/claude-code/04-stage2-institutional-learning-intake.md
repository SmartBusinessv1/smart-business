# SB-P-1.17 — Stage 2 Institutional Learning Intake Record

**Mission:** SB-P-1.17 — Manager Operations\
**Status:** `DRAFT STAGE 2 OUTPUT — NOT CANONICAL UNTIL MISSION CONTROL STAGE 2 REVIEW AND FOUNDER HUMAN MERGE`\
**Prepared by:** Claude Code, Definition Actor, under `05-stage2-discovery-authorization.md` (blob `94e1e36d`)\
**Source rule:** Source 18 v1.2 §3.1 (blob `0945bda60a93c99909c3b7a247d5427ebe256011`)\
**Opened by:** `communication/missions/SB-P-1.17/mission-control/04-stage1-institutional-learning-intake-opened.md` (blob `a2c815da`); that record is not modified

`Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force`

This record is Part 5 of the Stage 2 Truth Pack. Mission Control reviews it at Stage 5. It does not claim the historical backfill is complete and does not perform it.

## 1. Baseline

| Item | Value |
|---|---|
| Intake commit | `main@44895d2c0b2f4ff46f3f750bb7eec4cc8b80423d` |
| Date | 2026-10-20 |
| Previous intake used for the delta | SB-P-1.16 Stage 2 Institutional Learning Intake (`communication/missions/SB-P-1.16/claude-code/05-stage2-institutional-learning-intake.md`, blob `2cf06c171bb4171f54ec7bce568e5ba937545968`), intake baseline `main@e4e382c7` |
| Stage 1 inputs consumed | Intake Pack §3 (blob `79c684e8`); opened intake (blob `a2c815da`) and its risk-oriented learning seeds |

## 2. Phase 1 institutional-memory guide

| Item | Value |
|---|---|
| Path | `docs/phase-1-mission-blueprint/00_Phase_1_Institutional_Memory_Lessons_Capabilities_and_Operational_Guardrails.md` |
| Blob | `3da3d6d3f9b7fbd89de028ca0191d99484049ba9`, unchanged since the SB-P-1.14, SB-P-1.15 and SB-P-1.16 intakes (`git diff e4e382c7 44895d2c` on the path is empty) |
| Sections applied | §6.2 separate truth ownership (Product & Price Master = commercial identity; Inventory = quantity and movements; Ledger = business events) → DC-01, DC-02, `BP-§10.6-W11`; §6.3 shared foundations before duplication → `7-§12-*`, `13-§19-*`, `17-§20-*`; §7 locked lessons (standard POS bridge only; no AI accusation; reorder triggers are not permission; Employee access permission-scoped) → `7-§5-3`, `13-§5-1`, `13-§8-10`, `7-§10-3`; §8 evidence doctrine (repository state is not deployed state; migration file is not execution; unknown stays unknown) → FCTM §0.7, Truth Pack Δ-01, Δ-06; §9 security guardrails (success and denial paths; server-side authorization; revalidation at execution) → verification seeds `NEG`, DC-03; §10 data-integrity guardrails (correction events over rewriting; confirmation binds actor, target, action and reviewed state; server-side idempotency; narrow unknown outcomes) → DC-09, DC-12, `IDEM` seeds; §11 delivery topology is volatile → Δ-06; §13 UX anti-drift → `BP-§10.6-E1`–`E3`; §17 unresolved decision queue → FCTM `BP-§15-*` |
| Statements found stale | §11 names `SmartBusinessv1/starter-supab-shell` as historical delivery topology; it is labelled point-in-time and was not re-verified (Δ-06). No statement changes this mission's truth |

### 2.1 Mission-start checklist (guide §18), answered by reference

| Question | Answer |
|---|---|
| What exact contracts does this mission advance? | Contracts 7, 13 and 17 (Build Plan §9 row 6), with Contract 17's §§13–14 permission surface held by SB-P-1.12. FCTM Parts A–C |
| What current Founder/Product Truth controls this behaviour? | Contract blobs and Build Plan §10.6 (FCTM §0.2); Source 11 Stock Intelligence / Smart Stock Assistant, Supplier Management, Reorder Intelligence, POS Connection & Alerts and Supplier role; `12:FR-04`, `12:FR-09`, `14:FPDR-1`, `16:FPDR-1` (FCTM §0.8) |
| What UX anchors apply? | Build Plan §10.6 experience statements, Founder Scenarios A and B and the exit principle (`BP-§10.6-E1`–`E3`, `-A1`–`A4`, `-B1`, `-B2`, `-X`) |
| What is already implemented and proven? | Nothing in scope is proven. Inventory, Product & Price Master and dashboard foundations exist in repository text only. No row is `ALREADY DEMONSTRATED` (Truth Pack Δ-01) |
| What is historical only? | Fixed numeric thresholds (C7 §16 b6); fixed 15% discount threshold, printer-spool interception, register lockout (C13 §20, §22); fixed four-tab layout (C17 §21 b1, §23) |
| What repository/environment/runtime is authoritative for this step? | Canonical `main` for documentary Stage 2. No runtime environment is named or authorized |
| What permissions/security boundaries are involved? | Owner default; Manager only by Owner delegation (U-01); Employee scoped operations without Owner intelligence; supplier as purpose-limited participant; no routine platform access; tenant isolation (`D12`); cost and margin boundary (`12:FR-09`, DC-05) |
| What success and denial/error scenarios prove the behaviour? | C7 §15 (12), C13 §21 (11), C17 §22 (10) and Build Plan Scenarios A and B (inventory Section 2); verification seeds in the FCTM |
| What shared foundations must be reused? | Product & Price Master, inventory foundation, Business Memory and Ledger, Permission Engine and participant identity, UDI, Reminder Engine and delegated automation, Human Language, AI orchestration, Ask CFO, Daily Intelligence, notification, audit and idempotency, integration layer (`7-§12-*`, `13-§19-*`, `17-§20-*`) |
| What remains outside this mission but still committed? | Staff/HR and Order & Delivery views (SB-P-1.18); onboarding import (SB-P-1.19); WhatsApp slices (SB-P-1.20); all `DELEGATED` and `ASSIGNED TO LATER MISSION` rows |
| What requires Founder or Mission Control decision? | Truth Pack Part D: U-01, U-02, U-05, U-06, U-13 (Founder candidates); U-03, U-04, U-09, U-10, U-12, U-14 (Mission Control) |
| Who builds, who verifies, who accepts? | Not assigned. Implementation is NOT AUTHORIZED. Codex is the named alternate Definition Actor; a separate non-author security/permissions and integration perspective is required for later reviews (Intake Pack §4); Mission Control accepts |

## 3. OLE promotions

All 17 records under `organizational-learning/promotions/**` at the intake commit carry `promotion_scope: MISSION_SCOPED`. The last change to that directory is `ed3ae784` (2026-09-19). `organizational-learning/promotions/README.md` is an index, not a promotion.

**Delta since the previous intake: zero promotions added, zero superseded** (`git diff --name-status e4e382c7 44895d2c -- organizational-learning/` is empty). Under Source 18 §3.1 only the delta must be recorded; every record is still listed and re-screened against this mission's subject.

| Promotion ID | Disposition | Reason / artifact |
|---|---|---|
| `SB-GOV-IV-1.0-candidate-01-lifecycle-authority-operating-method-separation-promotion-01` | `INFORMATIONAL` | Governance-authoring lesson; no stock, POS or workspace behaviour depends on it |
| `SB-GOV-IV-1.0-candidate-02-actor-flexible-verifier-without-weakening-mandatory-gate-promotion-01` | `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` | Source 18 §4.9; Intake Pack §4 keeps Stage 19 separate from the Definition Actor |
| `SB-GOV-IV-1.0-candidate-03-risk-triggered-verification-budget-classification-promotion-01` | `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` | Independent Verification Efficiency Protocol (Build Plan §19) |
| `SB-GOV-IV-1.0-candidate-04-evidence-classes-prevent-redundant-reexecution-promotion-01` | `APPLIED` | Truth Pack Part C labels each Delta item with its evidence class (`REPO`, `GOV`, `PROV`, `TOPO`); FCTM verification seeds name evidence classes |
| `SB-GOV-IV-1.0-candidate-05-finding-scoped-reverification-with-named-escalation-triggers-promotion-01` | `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` | Source 18 Stage 20; not exercised at Stage 2 |
| `SB-OPS-CI-ARCHITECTURE-1.0-candidate-01-two-tier-ci-architecture-promotion-01` | `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` | `build-assurance.yml` and `full-assurance.yml` remain the CI definitions |
| `SB-OPS-CI-ARCHITECTURE-1.0-candidate-02-exact-run-level-closure-evidence-promotion-02` | `APPLIED` | Check runs and conclusions for the pull request are recorded against the exact head SHA in the pull-request conversation and the Stage 2 return (completion report Section 9) |
| `SB-OPS-CI-ARCHITECTURE-1.0-candidate-03-explicit-followup-retention-promotion-03` | `INFORMATIONAL` | Closure lesson; relevant at Stage 24 |
| `SB-OPS-CI-ARCHITECTURE-1.0-candidate-04-explicit-closure-scope-boundary-promotion-04` | `INFORMATIONAL` | Relevant to eventual closure |
| `SB-ORG-LEARNING-1.1-candidate-01-narrow-finding-scoped-correction-cycle-promotion-01` | `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` | Source 18 §3.3 item 3: refinement rounds are new commits on the same pull request |
| `SB-ORG-LEARNING-1.1-candidate-02-fail-closed-filesystem-ancestry-promotion-01` | `NOT APPLICABLE` | Filesystem tooling lesson; no mission scope |
| `SB-ORG-LEARNING-1.1-candidate-03-windows-linux-lstat-error-code-divergence-promotion-01` | `NOT APPLICABLE` | Cross-platform tooling lesson; no mission scope |
| `SB-ORG-LEARNING-1.1-candidate-04-direct-api-ci-confirmation-and-capacity-resumption-promotion-01` | `APPLIED` | CI state for the pull request is read by direct `gh api` check-run queries, not watch-command exit codes (completion report Section 9) |
| `SB-ORG-LEARNING-1.1-candidate-05-duplicate-envelope-identity-belongs-in-planner-promotion-01` | `INFORMATIONAL` | OLE pipeline lesson. Analogy only: keying duplicates on full validated identity resembles POS event dedupe (DC-12), but a mission-scoped promotion is not product authority |
| `SB-ORG-LEARNING-1.1-candidate-06-deterministic-proof-before-automation-promotion-01` | `APPLIED` | FCTM, inventory and completeness tests come from a deterministic parser over the source blobs (completion report Section 3). C7 §5 likewise requires a stored, re-evaluated rule before any automatic reorder |
| `SB-ORG-LEARNING-1.1-candidate-07-candidate-generation-versus-promotion-authority-separation-promotion-01` | `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` | Partial OLE handoffs are used as candidate context, not authority (Section 4) |
| `SB-ORG-LEARNING-1.1-candidate-08-manual-ole-trigger-dependency-risk-promotion-01` | `INFORMATIONAL` | Risk for the later closure handoff |

**Scope caveat:** every promotion is `MISSION_SCOPED`; it is an applicability screen, not a universal rule. A candidate that has not been promoted is not authority.

## 4. Nonterminal partial-learning handoffs (candidate context only)

These are **not** closed-mission OLE envelopes. They carry no authority and establish no implemented behaviour.

| Source | Blob | Lessons consumed | Where used |
|---|---|---|---|
| SB-P-1.12 `organizational-learning/01_partial_mission_learning_handoff.md` | `6447f815` | Runtime health and administrative recoverability are separate; documentation continues while upstream behaviour is held, not claimed | Δ-06, Δ-08; `D12` |
| SB-P-1.13 `organizational-learning/01_partial_mission_learning_handoff.md` | `2d4a5e24` | One coordinated transaction cut-over; confirmation is exact-action binding; AI authority stays server-derived | `DTX`; DC-12; `24-§21-3`; `7-§11-2.*` |
| SB-P-1.14 `mission-control/47-partial-mission-learning-ole-handoff.md` | `ae8008f7` | A Stage 13 lock never implies permission to build; PQ-2 needs one write path; CI or provider absence cannot substitute for verification | `DTX`; Δ-08 |
| SB-P-1.15 `mission-control/92-partial-mission-learning-ole-handoff.md` | `53736999` | Authorization kernel before financial inference; AI assistant, not judge; evidence counts are not runtime PASS; never hide source limitations. R15-11 (merchant-facing grants) | U-01; inventory independence limitation |
| **SB-P-1.16 `mission-control/16-partial-mission-learning-ole-handoff.md`** | `bf76216d` | See Section 4.1 | Section 4.1 |

### 4.1 SB-P-1.16 nonterminal handoff, consumed separately

| SB-P-1.16 learning or successor guidance | Use in SB-P-1.17 |
|---|---|
| 1. Financial truth has one source | Closing-cash and supplier-credit readers consume the single Ledger definition (DC-04, DC-09); no own arithmetic for balances |
| 2. Decide behaviour, keep representation provisional | Derived constraints are marked **DERIVED — NOT APPROVED PRODUCT TRUTH** and kept apart from approved truth (Part B) |
| 3. Fail closed at every ambiguity | Unmapped POS events, source conflicts, expired rules and missing cash inputs fail closed (DC-03, DC-08, DC-09; `13-§21-4`) |
| 4. Separate evidence phases | Manual CSV fallback and the standard POS bridge are separate sources; neither proves the other (`13-§4-10`, DC-12) |
| 5. Authority wording is precise | Proposal authority is not execution authority; create permission is not read-all (`7-§5-1`, `21-§11-2`); U-01 asks for exact Manager wording |
| 6. Traceability generated, then re-parsed | FCTM and inventory generated from blobs; set comparison in the completion report |
| 7. Same-provider reviews are inputs, not assurance | Independence limitation recorded (inventory header; completion report Section 10) |
| 8. Publication safety | Exact staged-file check; no self-merge; untracked SB-P-1.16 files left untouched (completion report Section 8) |
| 9. Keep the live pair honest | Stale live pair reported, not edited (Δ-10) |
| Successor: supplier-side `owed_by_business` must respect the shared Ledger direction model and FIN-01's provisional status | DC-04; `7-§3-7`, `7-§8-5`; watch W-1 |
| Successor: carry FIN-01 PROVISIONAL; OQ-04 Option C; EQ16-01 conditional; EQ16-02 and EQ16-03 open and fail-closed; OQ-02; OQ-05; U-08; `DPAY`, `DNTF`; 12-Q1 to 12-Q3; 14-Q1 to 14-Q6; P-1 to P-4 | Carried as `D16`, `DPAY`, `DNTF` holds. EQ16-02's open secret-home question recurs for POS credentials (`DSEC`, DC-10). None is resolved or relied on here |
| Successor: locked SB-P-1.16 artifacts are specifications only; no credit balance, evidence pipeline, customer advance or reconciliation exists | Rows `17-§6-3`, `17-§6-5` stay `IN SCOPE` as consumers with `D16`/`DPAY` holds; no runtime claim |

## 5. Conflicts

No conflict was found between the guide, a promotion and a governing source for this mission's subject. The guide §7 lessons, Source 11 and Contracts 7, 13 and 17 agree on the standard POS bridge, non-accusatory review and confirmation-gated reorder. The `12:FR-09` interaction with supplier prices (U-06) and the FIN-01 direction watch (W-1) are product-source questions, not learning conflicts; they are reported in Truth Pack Part D.

**STOP FOR MISSION CONTROL STAGE 2 REVIEW.**
