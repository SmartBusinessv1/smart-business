# SB-P-1.14 — Lovable Build Prompt

```text
STATUS: APPROVED — LOCKED (EFFECTIVE ONLY AFTER STAGE 13 LOCK PR HUMAN MERGE AND POST-MERGE VERIFICATION)
PRODUCT BLUEPRINT: APPROVED — LOCKED (UNCHANGED)
EIS: APPROVED — LOCKED (UNCHANGED)
IMPLEMENTATION PACKAGE: APPROVED — LOCKED (CONDITIONAL ON HUMAN MERGE)
IMPLEMENTATION: NOT AUTHORIZED
SCHEMA / SQL / MIGRATIONS: NOT AUTHORIZED
AI PROVIDER / STORAGE PROVIDER SELECTION OR ACTIVATION: NOT AUTHORIZED
PRODUCTION MUTATION / DELIVERY: NOT AUTHORIZED
```

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.14 |
| Mission Name | Business Memory, Documents & Durable Media |
| Document | Builder Prompt (Source 18 Stage 12; package template Phase B) |
| Version | 0.2 |
| Status | `APPROVED — LOCKED` — effective only after Stage 13 lock PR human merge and post-merge Mission Control verification |
| Author | Claude Code — initial implementation package owner |
| Builder identity | **Not yet named.** The Implementation Authorization names the builder for each workstream |
| Repository | `SmartBusinessv1/smart-business` |
| Canonical baseline | `main@fe24264fbe01fed7abe5f7032b6eff2fc2b5825d` |
| Date | 2026-10-09 |

## 2. Builder Identity and Artifact Name

Source 18 Section 4.5 retains the artifact path `lovable-build-prompt.md` whatever builder is assigned. The builder is not named here. When the Implementation Authorization names a builder other than Lovable for a workstream, that builder's byline and identity are recorded on this artifact, and nothing here implies Lovable built work it did not. No actor may build from this prompt until the package is approved and locked at Stage 13 and an Implementation Authorization is recorded.

## 3. Read Before Building

Read, in this order, and treat each as binding:

1. `AGENTS.md` and `CLAUDE.md`;
2. the locked Product Blueprint, blob `256828d2c26fba7dab6f52975efb8b574b1563f1`;
3. the locked EIS, blob `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3`;
4. Founder Product Decision Records `FPDR-1` to `FPDR-4` and the Founder restorative T7 Security approval;
5. the SB-P-1.12 and SB-P-1.13 locked EIS consumption conditions (SB-P-1.12 EIS-DEP-01; SB-P-1.13 EIS13-CMD-02, EIS13-PRV-01, EIS13-ATT-01);
6. the Engineering Contract (`engineering-contract.md`) once locked;
7. this Build Prompt once locked;
8. the Verification Checklist (`verification-checklist.md`) once locked;
9. the Implementation Authorization and any migration mission for the workstream;
10. `docs/migration/README.md` before anything that touches `supabase/migrations/**`.

This prompt references the Engineering Contract and does not restate or alter its obligations. Where they differ, the Engineering Contract prevails, and the builder pauses (Section 10).

## 4. What This Prompt Does Not Authorize

This draft authorizes no build. It does not authorize code, schema, SQL, migrations, the transactions-family cut-over, Lovable execution or publication, AI or storage provider selection, purchase, configuration or activation (including Cloudflare R2 and AWS), sending merchant documents or data to a provider, Supabase, R2 or AWS mutation, secrets or environment changes, production mutation or delivery, or crossing any hold in Section 9.

## 5. Repository Scope and Paths

| Path | Treatment |
|---|---|
| `src/**`, `tests/**` | Candidate implementation paths. Writable only for the workstreams and paths the Implementation Authorization lists |
| `lambda/**` | Candidate only for the EIS14-UDI-04 interpretation offload if the Implementation Authorization lists it |
| `supabase/migrations/**` | Writable only under an explicit migration mission meeting `docs/migration/README.md`; never executed from file presence |
| `supabase/functions/**` | Not expected (EIS: server logic in TanStack Start server functions). Any change needs explicit authorization |
| `docs/implementation/SB-P-1.14/evidence/**` | Evidence only, created when an authorized stage produces evidence |
| `docs/implementation/SB-P-1.14/lovable-build-completion-report.md` | Builder Completion Report, at Stage 16 |
| `docs/phase-1-mission-blueprint/**` (locked Blueprint and EIS) | **Prohibited** |
| `communication/missions/SB-P-1.14/claude-code/02-stage2-populated-fctm.md` (FCTM) and `founder/**` | **Prohibited** |
| `.github/workflows/**`, branch protection, repository settings | **Prohibited** |
| `merge/active/**`, `AGENTS.md`, `CLAUDE.md`, governance sources | **Prohibited** |
| Secrets, environment files, credentials, provider and storage consoles | **Prohibited**; never committed or printed |

## 6. Building Rules

- Work repository-first: inspect existing code, migrations and tests before changing anything, and reuse the foundations the EIS names (`requireSupabaseAuth`, the parser lease and catalog-import checks, `create_inventory_movement` and its idempotency, SB-P-1.12 kernel surfaces, the SB-P-1.13 gateway and governed command).
- Build only the assigned FCTM rows of the authorized workstream, through the Engineering Contract obligations listed for them.
- No redesign, unrelated refactoring, duplicate code, dead code, workarounds, placeholders, bypasses or undocumented assumptions.
- No feature flag, test flag or environment switch that weakens a permission, isolation, confirmation, revocation or denial check.
- Every authority-bearing change ships with its Verification Checklist items: the named negative-path checks and runtime scenarios for its rows.
- AI calls only through the SB-P-1.13 gateway with an accepted configuration identity; storage calls only through the provider adapter; tests use mocked or recorded providers and no live key in CI.
- Keep existing suites green at every checkpoint, including the Ledger regression baseline.
- Record evidence as package template Sections 12 and 13 require, and update the Builder Completion Report with a status per assigned row.
- Never verify, approve or accept your own work.

## 7. Workstreams

Workstreams are the Stage 1 register in Blueprint Section 7 (WS-A to WS-G), fixed by Mission Control at Stage 13. Order follows the Blueprint Section 20.4 activation order: P0 cross-mission prerequisites and gates; P1 WS-A; P2 WS-G; P3 WS-E after `DR2`; P4 WS-B; P5 WS-C; P6 WS-D; P7 WS-F. Cross-cutting obligations apply to every builder workstream. Gate obligations are Mission Control gates, not builder work. Splitting into workstreams changes no mission assignment.

A row appears under every workstream whose obligations realize it. A workstream builds only its own obligations for that row.

### 7.1 SB-P-1.14/WS-A — Four-State Ledger and Business Memory

| Field | Value |
|---|---|
| Obligations | `EC14-ARC-02`, `EC14-LDG-01`, `EC14-LDG-02`, `EC14-LDG-03`, `EC14-LDG-04`, `EC14-LDG-05`, `EC14-LDG-06`, `EC14-TOT-01`, `EC14-CMD-01`, `EC14-CMD-02`, `EC14-CMD-03`, `EC14-MIG-01`, `EC14-UX-01` |
| Phase | P1 |
| Depends on | `D12` kernel (EC14-HOLD-01); `DTX` transactions-family cut-over (EC14-HOLD-03); `D13` governed command (EC14-HOLD-02) |
| Expected schema | M14-1: widened `transaction_type`, credit direction, repayment-target link, widened create and correction commands (EC14-MIG-01) |
| Verification | NP-01, NP-03, NP-04, NP-07, NP-08, NP-09, NP-10, NP-11, NP-12, NP-13, NP-27, NP-41, RS-02, RS-03, RS-04, RS-06, RS-11, RS-14, RS-18, RS-21; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Pre-new-data rollback to the prior single write path; post-new-data forward-fix that preserves committed four-state rows; never two live write paths |
| FCTM rows (109) | `3-§2-2`, `3-§3`, `3-§4-1`, `3-§4-2`, `3-§4-3`, `3-§4-4`, `3-§4-5`, `3-§4-6`, `3-§5-1`, `3-§5-2`, `3-§5-3`, `3-§5-4`, `3-§5-5`, `3-§5-6`, `3-§5-10`, `3-§6-1`, `3-§6-2`, `3-§6-3`, `3-§6-4`, `3-§6-5`, `3-§6-6`, `3-§6-7`, `3-§6-8`, `3-§6-9`, `3-§6-10`, `3-§8-1`, `3-§8-2`, `3-§8-3`, `3-§8-4`, `3-§8-5`, `3-§8-6`, `3-§8-7`, `3-§8-8`, `3-§8-9`, `3-§8-10`, `3-§8-11`, `3-§8-12`, `3-§8-13`, `3-§8-14`, `3-§8-15`, `3-§8-16`, `3-§9-7`, `3-§9-10`, `3-§9-11`, `3-§9-14`, `3-§10-2`, `3-§10-3`, `3-§10-4`, `3-§10-5`, `3-§10-9`, `3-§11-1`, `3-§11-2`, `3-§11-3`, `3-§11-4`, `3-§11-5`, `3-§11-7`, `3-§12-2`, `3-§12-3`, `3-§12-4`, `3-§12-5`, `3-§14-2`, `3-§15-1`, `3-§15-2`, `3-§15-3`, `3-§15-4`, `3-§15-5`, `3-§17-6`, `3-§18-1`, `3-§18-2`, `3-§18-3`, `3-§18-5`, `3-§18-6`, `3-§19-1`, `3-§19-2`, `3-§19-3`, `3-§19-7`, `3-§19-10`, `3-§19-11`, `3-§19-12`, `3-§19-13a`, `3-§20-1`, `3-§20-2`, `3-§22-1`, `3-§22-2`, `5-§7-2`, `5-§17-6`, `5-§18-1`, `22-§28-9`, `22-§29-7`, `25-§8-9`, `24-§14-9`, `24-§18-1a`, `24-§27-5`, `9-§12-1`, `10-§13-3`, `17-§12-2`, `BP-§6.1-1`, `BP-§6.2-1`, `BP-§9-1`, `BP-§10.3-O`, `BP-§10.3-W1`, `BP-§10.3-W2`, `BP-§10.3-W3`, `BP-§10.3-W7`, `BP-§10.3-C1`, `BP-§10.3-SA1`, `BP-§10.3-SA2`, `BP-§10.3-SB1`, `BP-§10.3-SB2` |

Forbidden in this workstream, in addition to Section 8:

- rewriting, converting or duplicating any existing `sale`/`purchase` row, including `sale + payment_method=credit`, or any backfill that creates `credit` rows;
- any per-customer outstanding balance, ageing, allocation, overpayment or reconciliation (SB-P-1.16);
- direct client `INSERT`/`UPDATE`/`DELETE` on `transactions` or correction events, or a second protected write path;
- labelling generic income as sales or generic expense as purchases, or inferring credit direction from sign;
- a new customer-facing label beyond the Contract 3 everyday actions.

### 7.2 SB-P-1.14/WS-B — UDI Intake, Interpretation and Domain Adapters

| Field | Value |
|---|---|
| Obligations | `EC14-UDI-01`, `EC14-UDI-02`, `EC14-UDI-03`, `EC14-UDI-04`, `EC14-UDI-05`, `EC14-UDI-06`, `EC14-UDI-07`, `EC14-UDI-08`, `EC14-UDI-09`, `EC14-ADP-01`, `EC14-ADP-02`, `EC14-PRV-01`, `EC14-MIG-03` |
| Phase | P4 |
| Depends on | `D12`; `D13` AI gateway and attachment handoff; `DAI` provider gate (EC14-PRV-01); WS-A governed command for Ledger writes; WS-E for durable originals |
| Expected schema | M14-3: intake, interpretation, preview and import-ledger state extending the parser lease (EC14-MIG-03) |
| Verification | NP-08, NP-18, NP-19, NP-20, NP-21, NP-22, NP-23, NP-24, NP-25, NP-26, NP-38, NP-39, NP-41, RS-01, RS-07, RS-08, RS-10, RS-12, RS-16, RS-17; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Additive; intake disabled without affecting manual entry; deterministic CSV/XLSX path independent of AI |
| FCTM rows (158) | `3-§5-7`, `3-§5-8`, `3-§5-9`, `3-§7-7`, `3-§7-8`, `3-§10-6`, `3-§10-7`, `3-§10-9`, `3-§16-1`, `3-§16-2`, `3-§16-3`, `3-§16-4`, `3-§16-5`, `3-§16-6`, `3-§16-7`, `3-§16-8`, `3-§16-9`, `3-§16-10`, `3-§16-11`, `3-§16-12`, `3-§16-13`, `3-§16-14`, `3-§17-3`, `3-§19-4`, `5-§2-2`, `5-§3-1`, `5-§3-2`, `5-§3-3`, `5-§4-1`, `5-§4-2`, `5-§4-3`, `5-§4-4`, `5-§4-5`, `5-§4-6`, `5-§4-7`, `5-§4-8`, `5-§4-9`, `5-§4-14`, `5-§5-1`, `5-§5-2`, `5-§5-3`, `5-§5-4`, `5-§5-5`, `5-§5-6`, `5-§5-7`, `5-§5-8`, `5-§5-9`, `5-§7-2`, `5-§7-3`, `5-§7-4`, `5-§8-2`, `5-§8-3`, `5-§8-4`, `5-§9-1`, `5-§9-2`, `5-§9-3`, `5-§9-4`, `5-§9-5`, `5-§9-6`, `5-§9-7`, `5-§9-8`, `5-§10-1`, `5-§10-3`, `5-§10-4`, `5-§10-5`, `5-§10-8`, `5-§11-5`, `5-§12-5`, `5-§13-1`, `5-§13-2`, `5-§13-3`, `5-§13-4`, `5-§13-5`, `5-§13-6`, `5-§13-7`, `5-§13-8`, `5-§13-9`, `5-§13-10`, `5-§13-11`, `5-§13-12`, `5-§14-1`, `5-§14-2`, `5-§14-3`, `5-§14-4`, `5-§14-5`, `5-§14-6`, `5-§14-7`, `5-§14-8`, `5-§15-1`, `5-§15-2`, `5-§15-3`, `5-§15-4`, `5-§15-5`, `5-§15-6`, `5-§15-7`, `5-§15-8`, `5-§15-9`, `5-§15-10`, `5-§15-11`, `5-§16-4`, `5-§16-5`, `5-§16-7`, `5-§17-1`, `5-§17-2`, `5-§17-3`, `5-§17-4`, `5-§17-6`, `5-§18-1`, `5-§18-2`, `5-§18-3`, `5-§18-4`, `5-§18-5`, `5-§18-8a`, `5-§19-2`, `22-§9-1`, `22-§9-2`, `22-§9-3`, `22-§19-7`, `22-§28-5`, `22-§29-5`, `22-§29-10`, `22-§29-13`, `25-§8-4`, `25-§8-8`, `25-§11-1`, `25-§19-8`, `25-§25-3`, `25-§26-5`, `24-§5-6`, `24-§7-3`, `24-§7-4`, `24-§14-1`, `24-§14-2`, `24-§14-3`, `24-§14-4`, `24-§14-5`, `24-§14-6`, `24-§14-7`, `24-§14-8`, `24-§14-9`, `24-§18-1a`, `24-§23-6`, `24-§31-8`, `10-§10-1`, `10-§10-3`, `10-§17-4`, `10-§23-3b`, `7-§6-2`, `7-§6-4`, `7-§6-5`, `7-§15-2a`, `BP-§10.3-O`, `BP-§10.3-W4`, `BP-§10.3-W6`, `BP-§10.3-W12`, `BP-§10.3-W13`, `BP-§10.3-SA1`, `BP-§10.3-X` |

30 of these rows enter WS-B only through the provider gate (`EC14-PRV-01`); for them WS-B builds no feature behaviour (Engineering Contract PQ-6).

Accountable rows (PQ-10, version 0.2). WS-B builds the SB-P-1.14 slice of these rows to their source item, under the cited locked EIS text and behind their gates; no obligation or EIS link is added (Engineering Contract Section 13.1):

| FCTM row | Source behaviour | Governing locked EIS text | Gates | Verification |
|---|---|---|---|---|
| `5-§18-8a` | Contract 5 §18 acceptance 8, Workspace slice: Conversation Workspace uses the same interpretation rules (the WhatsApp slice is SB-P-1.20) | EIS14-UDI-01 (one intake pipeline for visual upload and the SB-P-1.13 attachment handoff) | `EC14-VER-02`, `EC14-HOLD-02` | NP-41, RS-23; `VC-R` item |

Forbidden in this workstream, in addition to Section 8:

- a third parser stack, a feature-specific parser or a direct AI provider SDK in `udi`;
- evaluating spreadsheet formulas, executing PDF script or form actions, fetching URLs or remote resources, or recursively traversing embedded objects;
- AI silently reinterpreting CSV/XLSX cell values, or inventing missing fields;
- writing a Ledger row except through `EC14-CMD-01`, writing supplier-invoice stock effects (SB-P-1.17) or overwriting existing opening stock;
- a durable AWS S3 or other staging store (MC-Q5).

### 7.3 SB-P-1.14/WS-C — Review, Clarification, Preview, Confirmation and Correction

| Field | Value |
|---|---|
| Obligations | `EC14-CNF-01`, `EC14-CNF-02`, `EC14-CNF-03`, `EC14-CNF-04` |
| Phase | P5 |
| Depends on | `D12` confirmation bindings and EIS-CNF-02 serialization; WS-B interpretation; WS-A commands |
| Expected schema | Uses SB-P-1.12 `confirmation_bindings`; no new binding table |
| Verification | NP-16, NP-17, NP-18, RS-01, RS-02, RS-16; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Additive; preview disabled leaves manual entry usable |
| FCTM rows (48) | `3-§7-1`, `3-§7-2`, `3-§7-3`, `3-§7-4`, `3-§7-5`, `3-§7-6`, `3-§7-7`, `3-§7-8`, `3-§7-9`, `3-§17-4`, `3-§17-5`, `3-§19-4`, `3-§19-5`, `5-§3-2`, `5-§9-1`, `5-§9-2`, `5-§9-3`, `5-§9-4`, `5-§9-5`, `5-§9-6`, `5-§9-7`, `5-§9-8`, `5-§9-9`, `5-§10-1`, `5-§10-2`, `5-§10-3`, `5-§10-4`, `5-§10-5`, `5-§10-6`, `5-§10-7`, `5-§10-8`, `5-§10-9`, `5-§10-10`, `5-§17-7`, `5-§17-8`, `5-§18-1`, `5-§18-2`, `22-§29-7`, `24-§21-7`, `10-§10-3`, `10-§10-4`, `10-§10-5`, `10-§13-3`, `10-§17-4`, `12-§4-5`, `BP-§10.3-W11`, `BP-§10.3-SA1`, `BP-§10.3-SA2` |

Accountable rows (PQ-10, version 0.2). WS-C builds the SB-P-1.14 slice of these rows to their source item, under the cited locked EIS text and behind their gates; no obligation or EIS link is added (Engineering Contract Section 13.1):

| FCTM row | Source behaviour | Governing locked EIS text | Gates | Verification |
|---|---|---|---|---|
| `BP-§10.3-W11` | Build Plan §10.3 required work area "correction/audit continuity": the review, clarification and correction surfaces keep the existing correction audit continuous | EIS14-CMD-02 (governed append-only correction command, built by WS-A inside the transactions-family cut-over) | `EC14-HOLD-01` | NP-27, RS-11; `VC-R` item |

Forbidden in this workstream, in addition to Section 8:

- committing a document-derived write without a binding on the exact reviewed interpretation;
- forcing re-confirmation for a non-material internal change, or silently retargeting on a material change;
- skipping kernel revalidation at commit because the fingerprint matched;
- auto-confirmation, standing automation or delegated execution.

### 7.4 SB-P-1.14/WS-D — Receipt Cabinet, Original-Proof Provenance and Document Memory

| Field | Value |
|---|---|
| Obligations | `EC14-CAB-01`, `EC14-CAB-02`, `EC14-CAB-03`, `EC14-CAB-04` |
| Phase | P6 |
| Depends on | `D12`; WS-E object control plane; WS-F search layer |
| Expected schema | M14-2: `documents`, `document_versions`, `document_links` and domain-provenance tables, born hardened (EC14-MIG-02) |
| Verification | NP-01, NP-27, NP-28, RS-05, RS-09, RS-18; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Additive; new tables kept or dropped only under a migration mission |
| FCTM rows (67) | `3-§19-9`, `5-§6-1`, `5-§6-2`, `5-§6-3`, `5-§6-4`, `5-§6-5`, `5-§6-6`, `5-§6-7`, `5-§6-8`, `5-§6-9`, `5-§6-11`, `5-§6-13`, `5-§15-1`, `5-§15-2`, `5-§15-3`, `5-§15-4`, `5-§15-5`, `5-§15-6`, `5-§15-7`, `5-§15-8`, `5-§15-9`, `5-§15-10`, `5-§15-11`, `5-§18-7`, `22-§10-1`, `22-§10-2`, `22-§10-3`, `22-§10-4`, `22-§10-5`, `22-§10-6`, `22-§10-7`, `22-§29-12`, `25-§10-1`, `25-§10-2`, `25-§10-3`, `25-§10-4`, `25-§10-5`, `25-§10-6`, `25-§10-7`, `25-§10-8`, `25-§10-9`, `25-§10-10`, `25-§10-11`, `25-§10-12`, `25-§11-1`, `25-§11-2`, `25-§11-3`, `25-§11-4`, `25-§23-1`, `25-§23-2`, `25-§23-3`, `25-§23-4`, `25-§23-5`, `25-§23-6`, `25-§23-7`, `25-§23-8`, `25-§23-9`, `25-§23-10`, `25-§23-11`, `25-§23-12`, `10-§5-10`, `10-§10-7`, `17-§12-1`, `17-§12-2`, `BP-§10.3-W5`, `BP-§10.3-W8`, `BP-§10.3-X` |

Forbidden in this workstream, in addition to Section 8:

- modifying original bytes, or a correction that changes the original rather than the interpretation or record;
- copying authority truth or allow/deny evidence into domain provenance, or storing document content in provenance;
- a customer/supplier identity table or directory search (`3-§9-12` and directory search stay later).

### 7.5 SB-P-1.14/WS-E — Governed Durable Media, Object Storage and Retention Lifecycle

| Field | Value |
|---|---|
| Obligations | `EC14-STO-01`, `EC14-STO-02`, `EC14-STO-03`, `EC14-STO-04`, `EC14-STO-05`, `EC14-STO-06`, `EC14-STO-07`, `EC14-STO-08`, `EC14-STO-09`, `EC14-RET-01`, `EC14-RET-02`, `EC14-RET-03`, `EC14-FAIL-03`, `EC14-PRV-02` |
| Phase | P3 |
| Depends on | `D12`; `DR2` storage activation (EC14-PRV-02, EC14-HOLD-08); `DLEG` record-class registry (EC14-RET-03); SB-P-1.15 Scheduler for timed reconciliation |
| Expected schema | M14-2: `media_objects` and lifecycle state, born hardened (EC14-MIG-02) |
| Verification | NP-02, NP-28, NP-29, NP-30, NP-31, NP-32, NP-33, NP-35, NP-36, NP-41, RS-09, RS-12, RS-15, RS-22; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Storage disable switch stops new uploads while verified objects stay retrievable server-side; provider adapter replaceable |
| FCTM rows (171) | `3-§5-7`, `3-§9-8`, `3-§9-13`, `3-§19-4`, `3-§19-9`, `5-§4-1`, `5-§4-2`, `5-§4-3`, `5-§6-1`, `5-§6-2`, `5-§6-3`, `5-§6-4`, `5-§6-5`, `5-§6-6`, `5-§6-7`, `5-§6-8`, `5-§6-9`, `5-§6-11`, `5-§7-2`, `5-§15-1`, `5-§15-7`, `5-§16-2`, `5-§16-3`, `5-§17-9`, `5-§18-1`, `5-§18-3`, `5-§18-7`, `22-§10-1`, `22-§10-2`, `22-§10-3`, `22-§10-4`, `22-§10-5`, `22-§10-6`, `22-§17-7`, `22-§19-2`, `22-§19-6`, `22-§19-7`, `22-§21`, `22-§23-7`, `22-§29-10`, `22-§29-12`, `25-§4-1`, `25-§4-2`, `25-§4-3`, `25-§4-4`, `25-§4-5`, `25-§4-6`, `25-§4-7`, `25-§4-8`, `25-§4-9`, `25-§4-10`, `25-§4-11`, `25-§4-12`, `25-§5-1`, `25-§5-2`, `25-§6-1`, `25-§7-1`, `25-§8-1`, `25-§8-2`, `25-§8-3`, `25-§8-4`, `25-§8-5`, `25-§8-6`, `25-§8-7`, `25-§8-8`, `25-§8-9`, `25-§8-10`, `25-§8-11`, `25-§9-1`, `25-§9-2`, `25-§9-3`, `25-§9-4`, `25-§9-5`, `25-§9-6`, `25-§9-7`, `25-§9-8`, `25-§10-11`, `25-§11-1`, `25-§11-3`, `25-§12-1`, `25-§12-2`, `25-§12-3`, `25-§13-1a`, `25-§13-2`, `25-§13-3`, `25-§14-1`, `25-§14-6`, `25-§14-7`, `25-§15-1`, `25-§15-2`, `25-§15-3`, `25-§15-4`, `25-§16-1`, `25-§16-2`, `25-§16-3`, `25-§17-2`, `25-§17-3`, `25-§17-4`, `25-§17-5`, `25-§17-6`, `25-§17-7`, `25-§18-1`, `25-§18-2`, `25-§18-3`, `25-§19-1`, `25-§19-2`, `25-§19-3`, `25-§19-4`, `25-§19-5`, `25-§19-6`, `25-§19-7`, `25-§19-8`, `25-§20-1`, `25-§20-2`, `25-§20-3`, `25-§20-4`, `25-§20-5`, `25-§20-6`, `25-§20-7`, `25-§20-8`, `25-§20-9`, `25-§20-10`, `25-§20-11`, `25-§20-12`, `25-§20-13`, `25-§20-14`, `25-§21-1`, `25-§21-2`, `25-§21-3`, `25-§21-4`, `25-§21-5`, `25-§22-1`, `25-§22-2`, `25-§22-3`, `25-§22-4`, `25-§22-5`, `25-§22-6`, `25-§24-1`, `25-§24-2`, `25-§25-1`, `25-§25-2`, `25-§25-3`, `25-§25-4`, `25-§26-1`, `25-§26-2`, `25-§26-3`, `25-§26-4a`, `25-§26-5`, `25-§26-6`, `25-§26-7`, `25-§26-8`, `25-§26-9`, `25-§26-10`, `25-§26-11`, `25-§26-12`, `25-§26-13`, `25-§26-14`, `10-§5-10`, `10-§10-7`, `17-§12-1`, `BP-§5.4-1`, `BP-§6.3-2`, `BP-§10.3-O`, `BP-§10.3-W4`, `BP-§10.3-W5`, `BP-§10.3-W8`, `BP-§10.3-W9`, `BP-§10.3-W10`, `BP-§10.3-S1`, `BP-§10.3-SA1`, `BP-§10.3-X` |

60 of these rows enter WS-E only through the provider gate (`EC14-PRV-02`); for them WS-E builds no feature behaviour (Engineering Contract PQ-6).

Forbidden in this workstream, in addition to Section 8:

- a public bucket or object, guessable keys, or a provider key or URL used as identity or authority;
- storage activation, account creation or credentials without a separately authorized `DR2` evidence pack;
- a feature-specific scheduler, a coded retention duration or a durable raw-audio object class;
- reconciliation or lifecycle that deletes a confirmed record or expires a held object;
- `service_role`, maintenance purpose or scheduled-job context used as authority (EC14-STO-03).

### 7.6 SB-P-1.14/WS-F — Search, Retrieval, Reports and Exports

| Field | Value |
|---|---|
| Obligations | `EC14-RTV-01`, `EC14-SRC-01`, `EC14-SRC-02`, `EC14-SRC-03`, `EC14-MIG-04`, `EC14-PERF-01` |
| Phase | P7 |
| Depends on | `D12`; WS-A classification; WS-D cabinet; WS-E retrieval path |
| Expected schema | M14-4: search keys and indexes, live-safe (EC14-MIG-04) |
| Verification | NP-01, NP-03, NP-05, NP-10, NP-13, NP-21, RS-03, RS-05, RS-10, RS-18, RS-19; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Additive; indexes dropped only under a migration mission |
| FCTM rows (55) | `3-§9-1`, `3-§9-2`, `3-§9-4`, `3-§9-5`, `3-§9-6`, `3-§9-7`, `3-§9-8`, `3-§9-9`, `3-§9-10`, `3-§9-11`, `3-§9-13`, `3-§9-14`, `3-§10-1`, `3-§10-5`, `3-§10-6`, `3-§10-7`, `3-§10-8`, `3-§10-9`, `3-§19-2`, `3-§19-8`, `3-§19-9`, `3-§19-12`, `5-§6-3`, `5-§6-4`, `5-§6-5`, `5-§6-6`, `5-§6-7`, `5-§6-8`, `5-§6-9`, `5-§6-11`, `5-§18-7`, `22-§21`, `25-§9-1`, `25-§9-2`, `25-§9-3`, `25-§9-4`, `25-§9-5`, `25-§9-6`, `25-§9-7`, `25-§9-8`, `25-§19-7`, `25-§20-7`, `25-§20-13`, `25-§24-1`, `25-§24-2`, `25-§24-3`, `25-§26-2`, `25-§26-3`, `25-§26-11`, `10-§5-10`, `10-§10-7`, `17-§12-1`, `17-§12-2`, `BP-§10.3-S1`, `BP-§10.3-X` |

Forbidden in this workstream, in addition to Section 8:

- a bearer signed URL used for delivery without provider evidence of immediate revocation or authorization indirection;
- an export, summary or channel copy of Business Memory, or an export that bypasses the kernel;
- any per-customer balance, ageing or reconciliation, or a customer directory;
- totals not taken from the canonical classification.

### 7.7 SB-P-1.14/WS-G — Isolation, Permissions, Idempotency, Failure Containment and Untrusted Input

| Field | Value |
|---|---|
| Obligations | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-IDM-03`, `EC14-SEC-01`, `EC14-SEC-02`, `EC14-SEC-03`, `EC14-SEC-04`, `EC14-FAIL-01`, `EC14-FAIL-02` |
| Phase | P2 |
| Depends on | `D12` kernel, idempotency pattern and durable-denial contract; SB-P-1.13 unknown-outcome pattern |
| Expected schema | Consumes SB-P-1.12 surfaces; no authority tables |
| Verification | NP-01, NP-03, NP-04, NP-06, NP-08, NP-14, NP-15, NP-34, NP-35, RS-05, RS-06, RS-12, RS-13, RS-21; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Not applicable beyond the owning objects' migration plans |
| FCTM rows (159) | `3-§7-8`, `3-§9-8`, `3-§11-1`, `3-§11-2`, `3-§11-3`, `3-§11-4`, `3-§11-5`, `3-§11-7`, `3-§16-6`, `3-§17-1`, `3-§17-2`, `3-§17-7`, `3-§17-8`, `3-§17-9`, `3-§17-10`, `3-§17-11`, `3-§18-1`, `3-§18-2`, `3-§18-3`, `3-§18-5`, `3-§18-6`, `3-§19-6`, `3-§19-14`, `5-§6-1`, `5-§6-2`, `5-§9-7`, `5-§10-7`, `5-§10-10`, `5-§11-1`, `5-§11-2`, `5-§11-3`, `5-§11-4`, `5-§11-5`, `5-§12-1`, `5-§12-2`, `5-§12-3`, `5-§12-4`, `5-§12-5`, `5-§12-6`, `5-§15-1`, `5-§15-2`, `5-§15-3`, `5-§15-4`, `5-§15-5`, `5-§15-6`, `5-§15-7`, `5-§15-8`, `5-§15-9`, `5-§15-10`, `5-§15-11`, `5-§16-1`, `5-§16-2`, `5-§16-3`, `5-§16-6`, `5-§17-1`, `5-§17-2`, `5-§17-3`, `5-§17-4`, `5-§17-5`, `5-§17-6`, `5-§17-7`, `5-§17-8`, `5-§17-9`, `5-§17-10`, `5-§17-11`, `5-§18-6`, `5-§18-9`, `5-§18-10`, `5-§18-11`, `22-§10-1`, `22-§10-2`, `22-§10-3`, `22-§10-4`, `22-§10-5`, `22-§10-6`, `22-§10-7`, `22-§19-1`, `22-§19-2`, `22-§19-3`, `22-§19-4`, `22-§19-5`, `22-§19-6`, `22-§19-7`, `22-§23-2`, `22-§23-3`, `22-§23-5`, `22-§29-3`, `22-§29-8`, `22-§29-10`, `22-§29-13`, `25-§4-2`, `25-§4-3`, `25-§4-4`, `25-§4-5`, `25-§4-6`, `25-§4-7`, `25-§4-8`, `25-§4-9`, `25-§4-10`, `25-§4-11`, `25-§8-11`, `25-§10-1`, `25-§10-2`, `25-§10-3`, `25-§10-4`, `25-§10-5`, `25-§10-6`, `25-§10-7`, `25-§10-8`, `25-§10-9`, `25-§10-10`, `25-§10-11`, `25-§10-12`, `25-§11-4`, `25-§14-2`, `25-§14-3`, `25-§14-4`, `25-§14-5`, `25-§20-1`, `25-§20-2`, `25-§20-3`, `25-§20-4`, `25-§20-5`, `25-§20-6`, `25-§20-7`, `25-§20-8`, `25-§20-9`, `25-§20-10`, `25-§20-11`, `25-§20-12`, `25-§20-13`, `25-§20-14`, `25-§21-1`, `25-§21-2`, `25-§21-3`, `25-§21-4`, `25-§21-5`, `25-§23-1`, `25-§23-2`, `25-§23-3`, `25-§23-4`, `25-§23-5`, `25-§23-6`, `25-§23-7`, `25-§23-8`, `25-§23-9`, `25-§23-10`, `25-§23-11`, `25-§23-12`, `25-§26-1`, `25-§26-6`, `25-§26-7`, `25-§26-8`, `25-§26-10`, `24-§23-6`, `17-§12-1`, `BP-§10.3-W5`, `BP-§10.3-W8`, `BP-§10.3-W10` |

Accountable rows (PQ-10, version 0.2). WS-G builds the SB-P-1.14 slice of these rows to their source item, under the cited locked EIS text and behind their gates; no obligation or EIS link is added (Engineering Contract Section 13.1):

| FCTM row | Source behaviour | Governing locked EIS text | Gates | Verification |
|---|---|---|---|---|
| `3-§17-7` | Contract 3 §17 item "failed downstream notification" and its rule that an uncertain or failed write stops safely without blocking unrelated operations; the SB-P-1.14 slice only — notification delivery is SB-P-1.15 (`D15`, `EC14-HOLD-04`, `EC14-HOLD-11`) | EIS14-FAIL-02 (narrow failure) | `EC14-HOLD-04`, `EC14-HOLD-11` | NP-44; `VC-R` item |
| `3-§17-8` | Contract 3 §17 item "stale linked records" and its rule that an uncertain or failed write stops safely without blocking unrelated operations | EIS14-CNF-03, EIS14-CNF-04 (re-prompt or block at commit), EIS14-LDG-03 (repayment-target revalidation), EIS14-FAIL-02 (narrow failure) | `EC14-HOLD-01` | NP-43; `VC-R` item |

Forbidden in this workstream, in addition to Section 8:

- any authority table, single-ownership lookup or temporary parallel permission system (SB-P-1.12 EIS-DEP-01);
- trusting a client-supplied business, actor or capability;
- routine Super Admin or support access to merchant documents or Ledger detail;
- failing open, guessed success or automatic re-execution of an unknown outcome.

### 7.8 Cross-cutting — Governance, migration design and verification applying to every builder workstream

| Field | Value |
|---|---|
| Obligations | `EC14-ARC-01`, `EC14-ENV-01`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-VER-01`, `EC14-VER-02`, `EC14-NG-01`, `EC14-DOC-01` |
| Phase | All |
| Depends on | — |
| Expected schema | Design only (`EC14-MIG-02`, `-05`, `-06`) |
| Verification | NP-06, NP-07, NP-09, NP-37, NP-40, RS-20; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Not applicable |
| FCTM rows (283) | `3-§2-2`, `3-§4-1`, `3-§4-2`, `3-§4-3`, `3-§4-4`, `3-§4-5`, `3-§4-6`, `3-§5-2`, `3-§5-3`, `3-§5-4`, `3-§5-5`, `3-§5-6`, `3-§5-9`, `3-§6-1`, `3-§6-2`, `3-§6-3`, `3-§6-4`, `3-§6-5`, `3-§6-6`, `3-§6-7`, `3-§6-8`, `3-§6-9`, `3-§6-10`, `3-§7-9`, `3-§8-1`, `3-§8-8`, `3-§8-16`, `3-§9-8`, `3-§9-10`, `3-§9-11`, `3-§9-13`, `3-§10-9`, `3-§11-4`, `3-§11-5`, `3-§12-4`, `3-§16-8`, `3-§16-9`, `3-§16-10`, `3-§16-11`, `3-§16-12`, `3-§16-13`, `3-§16-14`, `3-§18-5`, `3-§18-6`, `3-§19-1`, `3-§19-2`, `3-§19-3`, `3-§19-4`, `3-§19-5`, `3-§19-6`, `3-§19-7`, `3-§19-8`, `3-§19-9`, `3-§19-10`, `3-§19-11`, `3-§19-12`, `3-§19-13a`, `3-§19-14`, `3-§20-1`, `3-§20-2`, `3-§20-3`, `3-§20-4`, `3-§20-5`, `3-§20-6`, `3-§22-1`, `3-§22-2`, `5-§2-2`, `5-§5-9`, `5-§6-1`, `5-§6-2`, `5-§6-13`, `5-§7-1`, `5-§7-2`, `5-§7-3`, `5-§7-4`, `5-§7-8`, `5-§8-4`, `5-§12-5`, `5-§12-6`, `5-§13-8`, `5-§13-9`, `5-§13-10`, `5-§13-11`, `5-§13-12`, `5-§14-8`, `5-§15-1`, `5-§15-2`, `5-§15-3`, `5-§15-4`, `5-§15-5`, `5-§15-6`, `5-§15-7`, `5-§15-8`, `5-§15-9`, `5-§15-10`, `5-§15-11`, `5-§16-6`, `5-§16-7`, `5-§17-6`, `5-§17-11`, `5-§18-1`, `5-§18-2`, `5-§18-3`, `5-§18-4`, `5-§18-5`, `5-§18-6`, `5-§18-7`, `5-§18-8a`, `5-§18-9`, `5-§18-10`, `5-§18-11`, `5-§19-1`, `5-§19-2`, `5-§19-3`, `5-§19-4`, `5-§19-5`, `22-§4-1`, `22-§4-2`, `22-§4-3`, `22-§4-4`, `22-§9-1`, `22-§9-3`, `22-§10-1`, `22-§10-2`, `22-§10-3`, `22-§10-4`, `22-§10-5`, `22-§10-6`, `22-§10-7`, `22-§17-1`, `22-§17-9`, `22-§22-1`, `22-§22-2`, `22-§22-3`, `22-§22-4`, `22-§22-5`, `22-§22-6`, `22-§23-2`, `22-§23-3`, `22-§23-5`, `22-§23-7`, `22-§27-1`, `22-§27-2`, `22-§27-3`, `22-§27-4`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§27-8`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§28-7`, `22-§28-8`, `22-§28-9`, `22-§28-10`, `22-§29-3`, `22-§29-5`, `22-§29-7`, `22-§29-8`, `22-§29-10`, `22-§29-12`, `22-§29-13`, `22-§29-14`, `25-§4-1`, `25-§4-2`, `25-§4-3`, `25-§4-4`, `25-§4-5`, `25-§4-6`, `25-§4-7`, `25-§4-8`, `25-§4-9`, `25-§4-10`, `25-§4-11`, `25-§4-12`, `25-§6-1`, `25-§6-2`, `25-§7-1`, `25-§7-2`, `25-§8-9`, `25-§8-11`, `25-§10-1`, `25-§10-2`, `25-§10-3`, `25-§10-4`, `25-§10-5`, `25-§10-6`, `25-§10-7`, `25-§10-8`, `25-§10-9`, `25-§10-10`, `25-§10-11`, `25-§10-12`, `25-§11-2`, `25-§12-3`, `25-§13-2`, `25-§14-7`, `25-§15-3`, `25-§16-3`, `25-§17-4`, `25-§17-7`, `25-§18-3`, `25-§19-2`, `25-§19-3`, `25-§19-4`, `25-§19-5`, `25-§19-6`, `25-§20-14`, `25-§21-5`, `25-§23-1`, `25-§23-2`, `25-§23-3`, `25-§23-4`, `25-§23-5`, `25-§23-6`, `25-§23-7`, `25-§23-8`, `25-§23-9`, `25-§23-10`, `25-§23-11`, `25-§23-12`, `25-§24-3`, `25-§25-3`, `25-§25-4`, `25-§26-1`, `25-§26-2`, `25-§26-3`, `25-§26-4a`, `25-§26-5`, `25-§26-6`, `25-§26-7`, `25-§26-8`, `25-§26-9`, `25-§26-10`, `25-§26-11`, `25-§26-12`, `25-§26-13`, `25-§26-14`, `25-§27-1`, `25-§27-2`, `25-§27-3`, `25-§27-4`, `25-§27-5`, `25-§27-6`, `25-§27-7`, `25-§27-8`, `24-§14-9`, `24-§18-1a`, `24-§31-8`, `10-§13-3`, `10-§23-3b`, `17-§12-1`, `7-§6-5`, `7-§15-2a`, `BP-§5.3-1`, `BP-§6.1-1`, `BP-§6.2-1`, `BP-§6.3-1`, `BP-§6.3-2`, `BP-§8.4-1`, `BP-§9-1`, `BP-§10.3-O`, `BP-§10.3-W1`, `BP-§10.3-W2`, `BP-§10.3-W3`, `BP-§10.3-W5`, `BP-§10.3-W7`, `BP-§10.3-W8`, `BP-§10.3-W10`, `BP-§10.3-C1`, `BP-§10.3-SA1`, `BP-§10.3-SA2`, `BP-§10.3-SB1`, `BP-§10.3-SB2`, `BP-§10.3-X`, `BP-§11-1`, `BP-§11-2`, `BP-§11-3`, `BP-§13-1` |

### 7.9 Gates — Mission Control holds; not a builder workstream

| Field | Value |
|---|---|
| Obligations | `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-04`, `EC14-HOLD-05`, `EC14-HOLD-06`, `EC14-HOLD-07`, `EC14-HOLD-08`, `EC14-HOLD-09`, `EC14-HOLD-10`, `EC14-HOLD-11` |
| Phase | P0 |
| Depends on | Mission Control dependency evidence |
| Expected schema | None |
| Verification | NP-07, NP-42; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Not applicable |
| FCTM rows (457) | `3-§4-1`, `3-§4-2`, `3-§4-3`, `3-§4-4`, `3-§4-5`, `3-§4-6`, `3-§5-1`, `3-§5-2`, `3-§5-3`, `3-§5-4`, `3-§5-5`, `3-§5-6`, `3-§5-7`, `3-§5-8`, `3-§5-10`, `3-§6-1`, `3-§6-2`, `3-§6-3`, `3-§6-4`, `3-§6-5`, `3-§6-6`, `3-§6-7`, `3-§6-8`, `3-§6-9`, `3-§6-10`, `3-§7-1`, `3-§7-2`, `3-§7-3`, `3-§7-4`, `3-§7-5`, `3-§7-6`, `3-§7-7`, `3-§7-8`, `3-§8-1`, `3-§8-2`, `3-§8-3`, `3-§8-4`, `3-§8-5`, `3-§8-6`, `3-§8-7`, `3-§8-8`, `3-§8-9`, `3-§8-10`, `3-§8-11`, `3-§8-12`, `3-§8-13`, `3-§8-14`, `3-§8-15`, `3-§8-16`, `3-§9-1`, `3-§9-2`, `3-§9-4`, `3-§9-5`, `3-§9-6`, `3-§9-7`, `3-§9-8`, `3-§9-9`, `3-§9-10`, `3-§9-11`, `3-§9-13`, `3-§9-14`, `3-§10-1`, `3-§10-2`, `3-§10-3`, `3-§10-4`, `3-§10-5`, `3-§10-6`, `3-§10-7`, `3-§10-8`, `3-§10-9`, `3-§11-1`, `3-§11-2`, `3-§11-3`, `3-§11-4`, `3-§11-5`, `3-§11-7`, `3-§12-2`, `3-§12-3`, `3-§12-4`, `3-§15-2`, `3-§15-3`, `3-§15-4`, `3-§15-5`, `3-§16-1`, `3-§16-2`, `3-§16-3`, `3-§16-4`, `3-§16-5`, `3-§16-6`, `3-§16-7`, `3-§16-8`, `3-§16-9`, `3-§16-10`, `3-§16-11`, `3-§16-12`, `3-§16-13`, `3-§16-14`, `3-§17-2`, `3-§17-3`, `3-§17-6`, `3-§17-7`, `3-§17-8`, `3-§17-9`, `3-§17-10`, `3-§18-1`, `3-§18-2`, `3-§18-3`, `3-§18-5`, `3-§19-1`, `3-§19-2`, `3-§19-3`, `3-§19-4`, `3-§19-5`, `3-§19-6`, `3-§19-7`, `3-§19-8`, `3-§19-9`, `3-§19-10`, `3-§19-11`, `3-§19-12`, `3-§19-13a`, `3-§19-14`, `3-§22-1`, `3-§22-2`, `5-§3-1`, `5-§3-2`, `5-§3-3`, `5-§4-1`, `5-§4-2`, `5-§4-3`, `5-§4-6`, `5-§4-7`, `5-§4-8`, `5-§4-9`, `5-§5-1`, `5-§5-2`, `5-§5-3`, `5-§5-4`, `5-§5-5`, `5-§5-6`, `5-§5-7`, `5-§5-8`, `5-§5-9`, `5-§6-1`, `5-§6-2`, `5-§6-3`, `5-§6-4`, `5-§6-5`, `5-§6-6`, `5-§6-7`, `5-§6-8`, `5-§6-9`, `5-§6-11`, `5-§7-2`, `5-§7-3`, `5-§7-4`, `5-§7-8`, `5-§8-2`, `5-§8-3`, `5-§8-4`, `5-§9-1`, `5-§9-2`, `5-§9-3`, `5-§9-4`, `5-§9-5`, `5-§9-6`, `5-§9-7`, `5-§9-8`, `5-§9-9`, `5-§10-1`, `5-§10-2`, `5-§10-3`, `5-§10-4`, `5-§10-5`, `5-§10-6`, `5-§10-7`, `5-§10-8`, `5-§10-9`, `5-§11-1`, `5-§11-2`, `5-§11-3`, `5-§11-4`, `5-§12-1`, `5-§12-2`, `5-§12-3`, `5-§12-4`, `5-§12-5`, `5-§12-6`, `5-§13-1`, `5-§13-2`, `5-§13-3`, `5-§13-4`, `5-§13-5`, `5-§13-6`, `5-§13-7`, `5-§13-8`, `5-§13-9`, `5-§13-10`, `5-§13-11`, `5-§13-12`, `5-§14-1`, `5-§14-2`, `5-§14-3`, `5-§14-4`, `5-§14-5`, `5-§14-6`, `5-§14-7`, `5-§14-8`, `5-§15-1`, `5-§15-2`, `5-§15-3`, `5-§15-4`, `5-§15-5`, `5-§15-6`, `5-§15-7`, `5-§15-8`, `5-§15-9`, `5-§15-10`, `5-§16-1`, `5-§16-2`, `5-§16-3`, `5-§16-4`, `5-§16-5`, `5-§16-6`, `5-§16-7`, `5-§17-4`, `5-§17-5`, `5-§17-6`, `5-§17-7`, `5-§17-8`, `5-§17-9`, `5-§17-10`, `5-§18-1`, `5-§18-2`, `5-§18-3`, `5-§18-4`, `5-§18-5`, `5-§18-6`, `5-§18-7`, `5-§18-8a`, `5-§18-9`, `5-§18-10`, `22-§4-1`, `22-§4-2`, `22-§9-1`, `22-§9-2`, `22-§9-3`, `22-§10-1`, `22-§10-2`, `22-§10-3`, `22-§10-4`, `22-§10-5`, `22-§10-6`, `22-§17-7`, `22-§19-2`, `22-§19-6`, `22-§19-7`, `22-§21`, `22-§23-2`, `22-§23-3`, `22-§23-5`, `22-§29-3`, `22-§29-5`, `22-§29-7`, `22-§29-8`, `22-§29-10`, `22-§29-12`, `22-§29-13`, `25-§4-1`, `25-§4-2`, `25-§4-3`, `25-§4-4`, `25-§4-5`, `25-§4-6`, `25-§4-7`, `25-§4-8`, `25-§4-9`, `25-§4-10`, `25-§4-11`, `25-§4-12`, `25-§5-1`, `25-§6-1`, `25-§7-1`, `25-§8-1`, `25-§8-2`, `25-§8-3`, `25-§8-5`, `25-§8-6`, `25-§8-7`, `25-§8-8`, `25-§8-9`, `25-§8-10`, `25-§8-11`, `25-§9-1`, `25-§9-2`, `25-§9-3`, `25-§9-4`, `25-§9-5`, `25-§9-6`, `25-§9-7`, `25-§9-8`, `25-§10-3`, `25-§10-4`, `25-§10-5`, `25-§10-6`, `25-§10-7`, `25-§10-8`, `25-§10-9`, `25-§10-10`, `25-§10-11`, `25-§10-12`, `25-§11-1`, `25-§11-3`, `25-§12-1`, `25-§12-2`, `25-§12-3`, `25-§13-1a`, `25-§13-3`, `25-§14-1`, `25-§14-2`, `25-§14-3`, `25-§14-5`, `25-§14-6`, `25-§15-1`, `25-§15-4`, `25-§16-1`, `25-§16-2`, `25-§17-2`, `25-§17-3`, `25-§17-5`, `25-§17-6`, `25-§18-1`, `25-§18-2`, `25-§18-3`, `25-§19-1`, `25-§19-2`, `25-§19-3`, `25-§19-4`, `25-§19-5`, `25-§19-7`, `25-§19-8`, `25-§20-1`, `25-§20-2`, `25-§20-3`, `25-§20-4`, `25-§20-5`, `25-§20-6`, `25-§20-7`, `25-§20-8`, `25-§20-9`, `25-§20-10`, `25-§20-11`, `25-§20-12`, `25-§20-13`, `25-§20-14`, `25-§21-1`, `25-§21-2`, `25-§21-3`, `25-§21-4`, `25-§21-5`, `25-§22-1`, `25-§22-2`, `25-§22-3`, `25-§22-4`, `25-§22-5`, `25-§22-6`, `25-§23-1`, `25-§23-2`, `25-§23-3`, `25-§23-4`, `25-§23-5`, `25-§23-6`, `25-§23-7`, `25-§23-8`, `25-§23-9`, `25-§23-10`, `25-§23-11`, `25-§23-12`, `25-§24-1`, `25-§24-2`, `25-§24-3`, `25-§25-1`, `25-§25-2`, `25-§25-3`, `25-§25-4`, `25-§26-1`, `25-§26-2`, `25-§26-3`, `25-§26-4a`, `25-§26-5`, `25-§26-6`, `25-§26-7`, `25-§26-8`, `25-§26-9`, `25-§26-10`, `25-§26-11`, `25-§26-12`, `25-§26-13`, `25-§26-14`, `24-§5-6`, `24-§7-3`, `24-§7-4`, `24-§14-1`, `24-§14-2`, `24-§14-3`, `24-§14-4`, `24-§14-5`, `24-§14-6`, `24-§14-7`, `24-§14-8`, `24-§14-9`, `24-§18-1a`, `24-§21-7`, `24-§23-6`, `24-§27-5`, `24-§31-8`, `9-§12-1`, `10-§5-10`, `10-§10-1`, `10-§10-3`, `10-§10-4`, `10-§10-5`, `10-§10-7`, `10-§13-3`, `10-§17-4`, `10-§23-3b`, `12-§4-5`, `17-§12-1`, `17-§12-2`, `7-§6-2`, `7-§6-4`, `7-§6-5`, `7-§15-2a`, `BP-§5.4-1`, `BP-§6.1-1`, `BP-§6.2-1`, `BP-§6.3-2`, `BP-§10.3-O`, `BP-§10.3-W1`, `BP-§10.3-W2`, `BP-§10.3-W3`, `BP-§10.3-W4`, `BP-§10.3-W5`, `BP-§10.3-W6`, `BP-§10.3-W7`, `BP-§10.3-W8`, `BP-§10.3-W9`, `BP-§10.3-W10`, `BP-§10.3-W11`, `BP-§10.3-W13`, `BP-§10.3-C1`, `BP-§10.3-S1`, `BP-§10.3-SA1`, `BP-§10.3-SA2`, `BP-§10.3-SB1`, `BP-§10.3-SB2`, `BP-§10.3-X` |

No builder builds anything for a gate. A gate is satisfied only by Mission Control acceptance of the named evidence.

The 4 rows that the locked mapping realizes only by gate obligations (`3-§17-7`, `3-§17-8`, `5-§18-8a`, `BP-§10.3-W11`) carry an accountable builder workstream from version 0.2 (Engineering Contract Section 13.1); the gates still hold them.

## 8. Behaviour Outside the Assigned Rows Is Forbidden

A workstream builds nothing that no assigned row requires. In particular, no workstream builds:

- any row that is `ASSIGNED TO LATER MISSION` (45), `DELEGATED` (104), `NOT APPLICABLE` (32), `OUT OF BUILD SCOPE` (20) or `UNRESOLVED FOUNDER DECISION` (2) in the FCTM (Blueprint Section 11; Engineering Contract Section 5.3);
- authoritative per-customer owed balance, ageing, allocation, reconciliation or a customer/supplier directory (SB-P-1.16);
- Ask CFO, Daily Intelligence, the Reminder Engine, the Notification Foundation or the shared Scheduler (SB-P-1.15); stock effects of supplier invoices (SB-P-1.17); SB-P-1.18 and SB-P-1.19 domain behaviour; a WhatsApp or Meta adapter (SB-P-1.20);
- any SB-P-1.12 surface (authority kernel, confirmation bindings, idempotency, authority events, retention registry) or SB-P-1.13 surface (Workspace, AI gateway, governed create command, attachment handoff), or a temporary parallel version of either;
- direct OCR-to-production writes, a duplicate parser or storage universe, provider URLs as identity or authority, destructive correction or historical 60-day / 180-day timers as policy (Build Plan rejections);
- a new merchant-facing feature, label, retention period, consent policy, commercial classification or pricing;
- any experience beyond Blueprint Section 9 and the Section 15 acceptance lines.

Anything a builder believes is needed but not assigned is raised under Section 10, never built.

## 9. Holds the Builder Must Not Cross

| Hold or gate | Status carried by this package | Effect |
|---|---|---|
| `D12` / H-D12 | 225 rows; SPECIFICATION AVAILABLE, IMPLEMENTATION NOT COMPLETE, EVIDENCE NOT COMPLETE | `EC14-HOLD-01`: no obligation mapped to a `D12` row is built until the consumed SB-P-1.12 workstreams are implemented, verified and accepted for SB-P-1.14 (SB-P-1.12 EIS-DEP-01). No authority table, single-ownership lookup or temporary parallel authorization |
| `D13` / H-D13 | 92 rows; SPECIFICATION AVAILABLE, IMPLEMENTATION NOT COMPLETE, EVIDENCE NOT COMPLETE | `EC14-HOLD-02`: no obligation mapped to a `D13` row is built until the consumed SB-P-1.13 surfaces (Workspace, AI gateway, governed command, attachment handoff) are implemented, verified and accepted |
| `DTX` / H-DTX | 42 rows; held | `EC14-HOLD-03`: held until the coordinated SB-P-1.12 WS-A3 / SB-P-1.13 EIS13-CMD-02 transactions-family cut-over is complete and effective-access verification shows one protected write path. `EC14-CMD-01` to `-03` and `EC14-MIG-01` are delivered inside that cut-over family under a separately authorized migration mission |
| AI provider evidence / H-PROV (`DAI`) | 97 rows | `EC14-PRV-01`, `EC14-HOLD-09`: no merchant document reaches an AI provider until evidence is accepted for the versioned SB-P-1.13 configuration identity; a material change blocks merchant-document flow until re-verification. Provider selection, purchase and activation: NOT AUTHORIZED |
| Storage activation / H-STO (`DR2`) | 124 rows | `EC14-PRV-02`, `EC14-HOLD-08`: no merchant object is stored in R2 or any durable object store until a separately authorized `DR2` evidence pack is accepted. Selection, purchase, configuration and activation: NOT AUTHORIZED |
| Retention basis / H-LEG (`DLEG`, `DUF6`) | 11 rows | `EC14-RET-03`, `EC14-HOLD-10`: record classes reference the SB-P-1.12 registry; no duration is coded |
| Later missions / H-LATER (`D15`, `D17`, `D19`, `D20`) | 13 rows | `EC14-HOLD-04`, `EC14-HOLD-11`: only the SB-P-1.14 slice is built |
| Birth-safe objects / H-BIRTH | 60 rows | `EC14-SEC-02`: object-type-specific hardening in one migration boundary; effective-access inventory under `EC14-VER-01` |
| Revocation-safe retrieval and export / H-REVOKE | 35 rows | `EC14-RTV-01`: server-mediated delivery by default; any non-zero post-revocation window returns to Mission Control as a T3 candidate |
| Privileged-handler binding / H-PRIV | 26 rows | `EC14-STO-03`: `EIS-ISO-04` binding; maintenance purpose, server location, scheduled-job context or `service_role` is never authority |
| Financial integrity / H-FIN | 48 rows | `EC14-HOLD-05`: distinct measures, repayment-target revalidation, atomic correction, direct-mutation closure and opening-stock rules accepted only with evidence |
| Command idempotency / unknown outcome / H-IDEM | 17 rows | `EC14-IDM-01` to `-03` |
| `FPDR-3` material fingerprint / H-FPRINT | 8 rows | `EC14-CNF-03`, `EC14-HOLD-07` |
| UDI safety / H-UDI | 116 rows | `EC14-HOLD-06`: deterministic routing, instruction isolation, non-executing PDF, formula and minimization evidence |
| Layered failure and ingest states / H-STATE | 47 rows | `EC14-FAIL-01` |
| `FPDR-2` discard mechanism / H-DISCARD | 10 rows | `EC14-RET-01`: returns to Mission Control (conditional T8) if no compliant hold-aware mechanism exists |
| Migration package and rehearsal / H-MIG | 90 rows | `EC14-MIG-05`: rehearsal on the isolated test project before any production authorization |
| Runtime and acceptance evidence | 67 acceptance and experience rows | `EC14-VER-02`: Stage 17 and Stage 19 evidence; Experience Verification Matrix |
| `UNVERIFIED — ACCESS REQUIRED` register | 20 facts (EIS Section 28) | None is inferred from repository files or documentary wording; each needs separately authorized evidence |
| Migration execution | NOT AUTHORIZED | Each migration needs a separately authorized migration mission under `docs/migration/README.md`, rehearsed on the isolated test project |
| GitHub Actions | No runs since 2026-09-30 | A missing run or status is reported as missing, never as a pass |

## 10. Pause-and-Escalate Rule

Stop the dependent work, record what was found with evidence, and report to Mission Control when:

- a locked source is ambiguous, conflicts with another, or with repository state;
- an assigned row cannot be built as the locked EIS specifies (technical difficulty never changes a commitment; the row stays `IN SCOPE`, marked partial or blocked with the reason);
- a change would add, remove, narrow or reclassify behaviour, or touch a row not assigned to the workstream;
- a step needs a migration, provider or storage action, production action, credential or environment not explicitly authorized;
- an intentional non-zero post-revocation access window is proposed (T3 candidate), or no compliant hold-aware `FPDR-2` mechanism exists, commit-time repayment-target revalidation proves infeasible, a protected write path cannot be closed or an object cannot be born safely (T8 candidates);
- any Stage 3 trigger T1 to T8 fires, including any new Product Truth question;
- a hold in Section 9 would be crossed;
- repository state differs from the baseline the authorization names.

Do not resolve a conflict by dropping, narrowing or inventing behaviour. Resume only on a recorded Mission Control decision.

## 11. Tests, Evidence, Checklist and Completion Duties

- Run the Verification Checklist items for every assigned row: its `VC-R` item, its named negative-path checks (`NP-*`) and its named runtime scenarios (`RS-*`).
- Record each result with its evidence class. A missing run is `NOT RUN`, never a pass.
- Write the Builder Completion Report with a status per assigned FCTM row, using `IMPLEMENTED — NOT DEMONSTRATED` or `NOT IMPLEMENTED`, or marking the row partial or blocked with the reason (Source 18 Section 3.2 item 5). Demonstration is decided after independent verification, not by the builder.
- Keep `D12`, `D13`, `DTX`, provider, storage, retention, migration and every `UNVERIFIED — ACCESS REQUIRED` fact visible in every report.

## 12. Workstream-to-FCTM-Row Map

One line per `IN SCOPE` FCTM row, in FCTM order.

| # | FCTM row | Workstreams | Obligations |
|---|---|---|---|
| 1 | `3-§2-2` | WS-A, Cross-cutting | `EC14-UX-01`, `EC14-NG-01` |
| 2 | `3-§3` | WS-A | `EC14-LDG-01`, `EC14-UX-01` |
| 3 | `3-§4-1` | WS-A, Cross-cutting, Gate | `EC14-LDG-01`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 4 | `3-§4-2` | WS-A, Cross-cutting, Gate | `EC14-LDG-01`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 5 | `3-§4-3` | WS-A, Cross-cutting, Gate | `EC14-LDG-01`, `EC14-LDG-02`, `EC14-LDG-03`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 6 | `3-§4-4` | WS-A, Cross-cutting, Gate | `EC14-LDG-01`, `EC14-LDG-03`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 7 | `3-§4-5` | WS-A, Cross-cutting, Gate | `EC14-LDG-04`, `EC14-MIG-01`, `EC14-NG-01`, `EC14-HOLD-05` |
| 8 | `3-§4-6` | WS-A, Cross-cutting, Gate | `EC14-LDG-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-05` |
| 9 | `3-§5-1` | WS-A, Gate | `EC14-ARC-02`, `EC14-LDG-05`, `EC14-HOLD-02` |
| 10 | `3-§5-2` | WS-A, Cross-cutting, Gate | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03` |
| 11 | `3-§5-3` | WS-A, Cross-cutting, Gate | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03` |
| 12 | `3-§5-4` | WS-A, Cross-cutting, Gate | `EC14-LDG-02`, `EC14-LDG-03`, `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 13 | `3-§5-5` | WS-A, Cross-cutting, Gate | `EC14-LDG-03`, `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 14 | `3-§5-6` | WS-A, Cross-cutting, Gate | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-02`, `EC14-HOLD-03` |
| 15 | `3-§5-7` | WS-B, WS-E, Gate | `EC14-UDI-04`, `EC14-ADP-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 16 | `3-§5-8` | WS-B, Gate | `EC14-UDI-01`, `EC14-UDI-03`, `EC14-PRV-01`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 17 | `3-§5-9` | WS-B, Cross-cutting | `EC14-UDI-01`, `EC14-NG-01` |
| 18 | `3-§5-10` | WS-A, Gate | `EC14-ARC-02`, `EC14-LDG-05`, `EC14-UX-01`, `EC14-HOLD-01` |
| 19 | `3-§6-1` | WS-A, Cross-cutting, Gate | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-UX-01`, `EC14-HOLD-03` |
| 20 | `3-§6-2` | WS-A, Cross-cutting, Gate | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-03` |
| 21 | `3-§6-3` | WS-A, Cross-cutting, Gate | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` |
| 22 | `3-§6-4` | WS-A, Cross-cutting, Gate | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` |
| 23 | `3-§6-5` | WS-A, Cross-cutting, Gate | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` |
| 24 | `3-§6-6` | WS-A, Cross-cutting, Gate | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` |
| 25 | `3-§6-7` | WS-A, Cross-cutting, Gate | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` |
| 26 | `3-§6-8` | WS-A, Cross-cutting, Gate | `EC14-LDG-02`, `EC14-LDG-03`, `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 27 | `3-§6-9` | WS-A, Cross-cutting, Gate | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` |
| 28 | `3-§6-10` | WS-A, Cross-cutting, Gate | `EC14-LDG-05`, `EC14-NG-01`, `EC14-HOLD-02` |
| 29 | `3-§7-1` | WS-C, Gate | `EC14-CNF-01`, `EC14-HOLD-02` |
| 30 | `3-§7-2` | WS-C, Gate | `EC14-CNF-01`, `EC14-HOLD-02` |
| 31 | `3-§7-3` | WS-C, Gate | `EC14-CNF-01`, `EC14-HOLD-02` |
| 32 | `3-§7-4` | WS-C, Gate | `EC14-CNF-01`, `EC14-HOLD-02` |
| 33 | `3-§7-5` | WS-C, Gate | `EC14-CNF-01`, `EC14-HOLD-02` |
| 34 | `3-§7-6` | WS-C, Gate | `EC14-CNF-01`, `EC14-HOLD-02` |
| 35 | `3-§7-7` | WS-B, WS-C, Gate | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 36 | `3-§7-8` | WS-B, WS-C, WS-G, Gate | `EC14-IDM-02`, `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 37 | `3-§7-9` | WS-C, Cross-cutting | `EC14-CNF-01`, `EC14-NG-01` |
| 38 | `3-§8-1` | WS-A, Cross-cutting, Gate | `EC14-CMD-01`, `EC14-CMD-02`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 39 | `3-§8-2` | WS-A, Gate | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 40 | `3-§8-3` | WS-A, Gate | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 41 | `3-§8-4` | WS-A, Gate | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 42 | `3-§8-5` | WS-A, Gate | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 43 | `3-§8-6` | WS-A, Gate | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 44 | `3-§8-7` | WS-A, Gate | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 45 | `3-§8-8` | WS-A, Cross-cutting, Gate | `EC14-LDG-03`, `EC14-CMD-01`, `EC14-CMD-02`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 46 | `3-§8-9` | WS-A, Gate | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 47 | `3-§8-10` | WS-A, Gate | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 48 | `3-§8-11` | WS-A, Gate | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 49 | `3-§8-12` | WS-A, Gate | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 50 | `3-§8-13` | WS-A, Gate | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 51 | `3-§8-14` | WS-A, Gate | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 52 | `3-§8-15` | WS-A, Gate | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 53 | `3-§8-16` | WS-A, Cross-cutting, Gate | `EC14-LDG-04`, `EC14-CMD-02`, `EC14-NG-01`, `EC14-HOLD-05` |
| 54 | `3-§9-1` | WS-F, Gate | `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-01` |
| 55 | `3-§9-2` | WS-F, Gate | `EC14-SRC-01`, `EC14-SRC-03`, `EC14-MIG-04`, `EC14-HOLD-01` |
| 56 | `3-§9-4` | WS-F, Gate | `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-01` |
| 57 | `3-§9-5` | WS-F, Gate | `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-01` |
| 58 | `3-§9-6` | WS-F, Gate | `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-01` |
| 59 | `3-§9-7` | WS-A, WS-F, Gate | `EC14-LDG-03`, `EC14-SRC-01`, `EC14-SRC-03`, `EC14-MIG-04`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 60 | `3-§9-8` | WS-E, WS-F, WS-G, Cross-cutting, Gate | `EC14-SRC-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-MIG-04`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 61 | `3-§9-9` | WS-F, Gate | `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-04`, `EC14-HOLD-11` |
| 62 | `3-§9-10` | WS-A, WS-F, Cross-cutting, Gate | `EC14-TOT-01`, `EC14-SRC-01`, `EC14-MIG-04`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-02` |
| 63 | `3-§9-11` | WS-A, WS-F, Cross-cutting, Gate | `EC14-TOT-01`, `EC14-SRC-01`, `EC14-MIG-04`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-02` |
| 64 | `3-§9-13` | WS-E, WS-F, Cross-cutting, Gate | `EC14-RTV-01`, `EC14-SRC-01`, `EC14-PRV-02`, `EC14-MIG-04`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-08` |
| 65 | `3-§9-14` | WS-A, WS-F, Gate | `EC14-ARC-02`, `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-02` |
| 66 | `3-§10-1` | WS-F, Gate | `EC14-RTV-01`, `EC14-SRC-02`, `EC14-HOLD-01` |
| 67 | `3-§10-2` | WS-A, Gate | `EC14-TOT-01`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 68 | `3-§10-3` | WS-A, Gate | `EC14-TOT-01`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 69 | `3-§10-4` | WS-A, Gate | `EC14-TOT-01`, `EC14-HOLD-01` |
| 70 | `3-§10-5` | WS-A, WS-F, Gate | `EC14-LDG-02`, `EC14-LDG-03`, `EC14-TOT-01`, `EC14-SRC-03`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 71 | `3-§10-6` | WS-B, WS-F, Gate | `EC14-UDI-05`, `EC14-RTV-01`, `EC14-SRC-02`, `EC14-HOLD-01`, `EC14-HOLD-06` |
| 72 | `3-§10-7` | WS-B, WS-F, Gate | `EC14-UDI-05`, `EC14-RTV-01`, `EC14-SRC-02`, `EC14-HOLD-01`, `EC14-HOLD-06` |
| 73 | `3-§10-8` | WS-F, Gate | `EC14-RTV-01`, `EC14-SRC-02`, `EC14-HOLD-01` |
| 74 | `3-§10-9` | WS-A, WS-B, WS-F, Cross-cutting, Gate | `EC14-TOT-01`, `EC14-UDI-05`, `EC14-RTV-01`, `EC14-SRC-02`, `EC14-NG-01`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 75 | `3-§11-1` | WS-A, WS-G, Gate | `EC14-LDG-06`, `EC14-SEC-03`, `EC14-HOLD-01` |
| 76 | `3-§11-2` | WS-A, WS-G, Gate | `EC14-LDG-06`, `EC14-SEC-03`, `EC14-HOLD-01` |
| 77 | `3-§11-3` | WS-A, WS-G, Gate | `EC14-LDG-06`, `EC14-SEC-03`, `EC14-HOLD-01` |
| 78 | `3-§11-4` | WS-A, WS-G, Cross-cutting, Gate | `EC14-LDG-06`, `EC14-SEC-03`, `EC14-NG-01`, `EC14-HOLD-01` |
| 79 | `3-§11-5` | WS-A, WS-G, Cross-cutting, Gate | `EC14-LDG-06`, `EC14-SEC-03`, `EC14-NG-01`, `EC14-HOLD-01` |
| 80 | `3-§11-7` | WS-A, WS-G, Gate | `EC14-LDG-06`, `EC14-SEC-01`, `EC14-SEC-03`, `EC14-HOLD-01` |
| 81 | `3-§12-2` | WS-A, Gate | `EC14-ARC-02`, `EC14-HOLD-02` |
| 82 | `3-§12-3` | WS-A, Gate | `EC14-ARC-02`, `EC14-UX-01`, `EC14-HOLD-01` |
| 83 | `3-§12-4` | WS-A, Cross-cutting, Gate | `EC14-ARC-02`, `EC14-NG-01`, `EC14-HOLD-02` |
| 84 | `3-§12-5` | WS-A | `EC14-ARC-02` |
| 85 | `3-§14-2` | WS-A | `EC14-ARC-02` |
| 86 | `3-§15-1` | WS-A | `EC14-ARC-02` |
| 87 | `3-§15-2` | WS-A, Gate | `EC14-ARC-02`, `EC14-HOLD-02` |
| 88 | `3-§15-3` | WS-A, Gate | `EC14-ARC-02`, `EC14-HOLD-02` |
| 89 | `3-§15-4` | WS-A, Gate | `EC14-ARC-02`, `EC14-HOLD-01` |
| 90 | `3-§15-5` | WS-A, Gate | `EC14-ARC-02`, `EC14-HOLD-02` |
| 91 | `3-§16-1` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 92 | `3-§16-2` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 93 | `3-§16-3` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 94 | `3-§16-4` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 95 | `3-§16-5` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 96 | `3-§16-6` | WS-B, WS-G, Gate | `EC14-IDM-02`, `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 97 | `3-§16-7` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 98 | `3-§16-8` | WS-B, Cross-cutting, Gate | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` |
| 99 | `3-§16-9` | WS-B, Cross-cutting, Gate | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` |
| 100 | `3-§16-10` | WS-B, Cross-cutting, Gate | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` |
| 101 | `3-§16-11` | WS-B, Cross-cutting, Gate | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` |
| 102 | `3-§16-12` | WS-B, Cross-cutting, Gate | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` |
| 103 | `3-§16-13` | WS-B, Cross-cutting, Gate | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` |
| 104 | `3-§16-14` | WS-B, Cross-cutting, Gate | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` |
| 105 | `3-§17-1` | WS-G | `EC14-IDM-01`, `EC14-IDM-03` |
| 106 | `3-§17-2` | WS-G, Gate | `EC14-IDM-01`, `EC14-IDM-03`, `EC14-HOLD-01` |
| 107 | `3-§17-3` | WS-B, Gate | `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 108 | `3-§17-4` | WS-C | `EC14-CNF-01` |
| 109 | `3-§17-5` | WS-C | `EC14-CNF-01` |
| 110 | `3-§17-6` | WS-A, Gate | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 111 | `3-§17-7` | WS-G (accountable; PQ-10), Gate | `EC14-HOLD-04`, `EC14-HOLD-11` |
| 112 | `3-§17-8` | WS-G (accountable; PQ-10), Gate | `EC14-HOLD-01` |
| 113 | `3-§17-9` | WS-G, Gate | `EC14-SEC-01`, `EC14-HOLD-01` |
| 114 | `3-§17-10` | WS-G, Gate | `EC14-SEC-01`, `EC14-HOLD-01` |
| 115 | `3-§17-11` | WS-G | `EC14-IDM-03`, `EC14-FAIL-01`, `EC14-FAIL-02` |
| 116 | `3-§18-1` | WS-A, WS-G, Gate | `EC14-LDG-06`, `EC14-SEC-01`, `EC14-HOLD-01` |
| 117 | `3-§18-2` | WS-A, WS-G, Gate | `EC14-LDG-06`, `EC14-SEC-01`, `EC14-HOLD-01` |
| 118 | `3-§18-3` | WS-A, WS-G, Gate | `EC14-LDG-06`, `EC14-CMD-02`, `EC14-SEC-01`, `EC14-HOLD-01` |
| 119 | `3-§18-5` | WS-A, WS-G, Cross-cutting, Gate | `EC14-LDG-06`, `EC14-SEC-01`, `EC14-SEC-04`, `EC14-NG-01`, `EC14-HOLD-01` |
| 120 | `3-§18-6` | WS-A, WS-G, Cross-cutting | `EC14-LDG-06`, `EC14-SEC-01`, `EC14-SEC-04`, `EC14-NG-01` |
| 121 | `3-§19-1` | WS-A, Cross-cutting, Gate | `EC14-LDG-01`, `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 122 | `3-§19-2` | WS-A, WS-F, Cross-cutting, Gate | `EC14-LDG-01`, `EC14-LDG-03`, `EC14-CMD-01`, `EC14-SRC-03`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 123 | `3-§19-3` | WS-A, Cross-cutting, Gate | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03` |
| 124 | `3-§19-4` | WS-B, WS-C, WS-E, Cross-cutting, Gate | `EC14-CNF-03`, `EC14-ADP-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-07`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 125 | `3-§19-5` | WS-C, Cross-cutting, Gate | `EC14-CNF-01`, `EC14-VER-02`, `EC14-HOLD-02` |
| 126 | `3-§19-6` | WS-G, Cross-cutting, Gate | `EC14-IDM-01`, `EC14-VER-02`, `EC14-HOLD-01` |
| 127 | `3-§19-7` | WS-A, Cross-cutting, Gate | `EC14-CMD-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 128 | `3-§19-8` | WS-F, Cross-cutting, Gate | `EC14-SRC-01`, `EC14-VER-02`, `EC14-HOLD-01` |
| 129 | `3-§19-9` | WS-D, WS-E, WS-F, Cross-cutting, Gate | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 130 | `3-§19-10` | WS-A, Cross-cutting, Gate | `EC14-LDG-06`, `EC14-VER-02`, `EC14-HOLD-01` |
| 131 | `3-§19-11` | WS-A, Cross-cutting, Gate | `EC14-LDG-06`, `EC14-VER-02`, `EC14-HOLD-01` |
| 132 | `3-§19-12` | WS-A, WS-F, Cross-cutting, Gate | `EC14-TOT-01`, `EC14-SRC-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 133 | `3-§19-13a` | WS-A, Cross-cutting, Gate | `EC14-ARC-02`, `EC14-VER-02`, `EC14-HOLD-02` |
| 134 | `3-§19-14` | WS-G, Cross-cutting, Gate | `EC14-SEC-01`, `EC14-VER-02`, `EC14-HOLD-01` |
| 135 | `3-§20-1` | WS-A, Cross-cutting | `EC14-LDG-04`, `EC14-NG-01` |
| 136 | `3-§20-2` | WS-A, Cross-cutting | `EC14-LDG-04`, `EC14-NG-01` |
| 137 | `3-§20-3` | Cross-cutting | `EC14-NG-01` |
| 138 | `3-§20-4` | Cross-cutting | `EC14-NG-01` |
| 139 | `3-§20-5` | Cross-cutting | `EC14-NG-01` |
| 140 | `3-§20-6` | Cross-cutting | `EC14-NG-01` |
| 141 | `3-§22-1` | WS-A, Cross-cutting, Gate | `EC14-LDG-04`, `EC14-CMD-01`, `EC14-CMD-03`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` |
| 142 | `3-§22-2` | WS-A, Cross-cutting, Gate | `EC14-LDG-04`, `EC14-CMD-01`, `EC14-CMD-03`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` |
| 143 | `5-§2-2` | WS-B, Cross-cutting | `EC14-UDI-06`, `EC14-NG-01` |
| 144 | `5-§3-1` | WS-B, Gate | `EC14-UDI-01`, `EC14-PRV-01`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 145 | `5-§3-2` | WS-B, WS-C, Gate | `EC14-UDI-07`, `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 146 | `5-§3-3` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 147 | `5-§4-1` | WS-B, WS-E, Gate | `EC14-UDI-02`, `EC14-UDI-04`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 148 | `5-§4-2` | WS-B, WS-E, Gate | `EC14-UDI-02`, `EC14-UDI-04`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 149 | `5-§4-3` | WS-B, WS-E, Gate | `EC14-UDI-02`, `EC14-UDI-04`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 150 | `5-§4-4` | WS-B | `EC14-UDI-02`, `EC14-UDI-03`, `EC14-UDI-05` |
| 151 | `5-§4-5` | WS-B | `EC14-UDI-02`, `EC14-UDI-03`, `EC14-UDI-05` |
| 152 | `5-§4-6` | WS-B, Gate | `EC14-UDI-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 153 | `5-§4-7` | WS-B, Gate | `EC14-UDI-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 154 | `5-§4-8` | WS-B, Gate | `EC14-UDI-02`, `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 155 | `5-§4-9` | WS-B, Gate | `EC14-UDI-02`, `EC14-ADP-02`, `EC14-HOLD-05` |
| 156 | `5-§4-14` | WS-B | `EC14-UDI-01`, `EC14-UDI-02` |
| 157 | `5-§5-1` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 158 | `5-§5-2` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 159 | `5-§5-3` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 160 | `5-§5-4` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 161 | `5-§5-5` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 162 | `5-§5-6` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 163 | `5-§5-7` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 164 | `5-§5-8` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 165 | `5-§5-9` | WS-B, Cross-cutting, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-NG-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 166 | `5-§6-1` | WS-D, WS-E, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-RET-01`, `EC14-RET-03`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-08`, `EC14-HOLD-10` |
| 167 | `5-§6-2` | WS-D, WS-E, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-08` |
| 168 | `5-§6-3` | WS-D, WS-E, WS-F, Gate | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-08` |
| 169 | `5-§6-4` | WS-D, WS-E, WS-F, Gate | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 170 | `5-§6-5` | WS-D, WS-E, WS-F, Gate | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 171 | `5-§6-6` | WS-D, WS-E, WS-F, Gate | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 172 | `5-§6-7` | WS-D, WS-E, WS-F, Gate | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 173 | `5-§6-8` | WS-D, WS-E, WS-F, Gate | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 174 | `5-§6-9` | WS-D, WS-E, WS-F, Gate | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 175 | `5-§6-11` | WS-D, WS-E, WS-F, Gate | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` |
| 176 | `5-§6-13` | WS-D, Cross-cutting | `EC14-CAB-04`, `EC14-NG-01` |
| 177 | `5-§7-1` | Cross-cutting | `EC14-ARC-01` |
| 178 | `5-§7-2` | WS-A, WS-B, WS-E, Cross-cutting, Gate | `EC14-CMD-01`, `EC14-ADP-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 179 | `5-§7-3` | WS-B, Cross-cutting, Gate | `EC14-ADP-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 180 | `5-§7-4` | WS-B, Cross-cutting, Gate | `EC14-ADP-01`, `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-04`, `EC14-HOLD-06`, `EC14-HOLD-09`, `EC14-HOLD-11` |
| 181 | `5-§7-8` | Cross-cutting, Gate | `EC14-ARC-01`, `EC14-HOLD-01` |
| 182 | `5-§8-2` | WS-B, Gate | `EC14-UDI-01`, `EC14-HOLD-02` |
| 183 | `5-§8-3` | WS-B, Gate | `EC14-UDI-01`, `EC14-HOLD-01` |
| 184 | `5-§8-4` | WS-B, Cross-cutting, Gate | `EC14-UDI-01`, `EC14-NG-01`, `EC14-HOLD-02` |
| 185 | `5-§9-1` | WS-B, WS-C, Gate | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 186 | `5-§9-2` | WS-B, WS-C, Gate | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 187 | `5-§9-3` | WS-B, WS-C, Gate | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 188 | `5-§9-4` | WS-B, WS-C, Gate | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 189 | `5-§9-5` | WS-B, WS-C, Gate | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 190 | `5-§9-6` | WS-B, WS-C, Gate | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 191 | `5-§9-7` | WS-B, WS-C, WS-G, Gate | `EC14-IDM-02`, `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 192 | `5-§9-8` | WS-B, WS-C, Gate | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 193 | `5-§9-9` | WS-C, Gate | `EC14-CNF-03`, `EC14-HOLD-01`, `EC14-HOLD-07` |
| 194 | `5-§10-1` | WS-B, WS-C, Gate | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 195 | `5-§10-2` | WS-C, Gate | `EC14-CNF-01`, `EC14-HOLD-06` |
| 196 | `5-§10-3` | WS-B, WS-C, Gate | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 197 | `5-§10-4` | WS-B, WS-C, Gate | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 198 | `5-§10-5` | WS-B, WS-C, Gate | `EC14-UDI-03`, `EC14-CNF-01`, `EC14-HOLD-06` |
| 199 | `5-§10-6` | WS-C, Gate | `EC14-CNF-01`, `EC14-HOLD-06` |
| 200 | `5-§10-7` | WS-C, WS-G, Gate | `EC14-IDM-02`, `EC14-CNF-01`, `EC14-HOLD-06` |
| 201 | `5-§10-8` | WS-B, WS-C, Gate | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 202 | `5-§10-9` | WS-C, Gate | `EC14-CNF-01`, `EC14-CNF-04`, `EC14-HOLD-01`, `EC14-HOLD-06` |
| 203 | `5-§10-10` | WS-C, WS-G | `EC14-CNF-01`, `EC14-FAIL-01`, `EC14-FAIL-02` |
| 204 | `5-§11-1` | WS-G, Gate | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-HOLD-01` |
| 205 | `5-§11-2` | WS-G, Gate | `EC14-IDM-01`, `EC14-HOLD-01` |
| 206 | `5-§11-3` | WS-G, Gate | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-HOLD-01` |
| 207 | `5-§11-4` | WS-G, Gate | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-04`, `EC14-HOLD-11` |
| 208 | `5-§11-5` | WS-B, WS-G | `EC14-IDM-01`, `EC14-UDI-01` |
| 209 | `5-§12-1` | WS-G, Gate | `EC14-SEC-03`, `EC14-HOLD-01` |
| 210 | `5-§12-2` | WS-G, Gate | `EC14-SEC-03`, `EC14-HOLD-01` |
| 211 | `5-§12-3` | WS-G, Gate | `EC14-SEC-03`, `EC14-HOLD-01` |
| 212 | `5-§12-4` | WS-G, Gate | `EC14-SEC-03`, `EC14-HOLD-01` |
| 213 | `5-§12-5` | WS-B, WS-G, Cross-cutting, Gate | `EC14-UDI-08`, `EC14-SEC-03`, `EC14-NG-01`, `EC14-HOLD-01` |
| 214 | `5-§12-6` | WS-G, Cross-cutting, Gate | `EC14-SEC-03`, `EC14-SEC-04`, `EC14-NG-01`, `EC14-HOLD-01` |
| 215 | `5-§13-1` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 216 | `5-§13-2` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 217 | `5-§13-3` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 218 | `5-§13-4` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 219 | `5-§13-5` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 220 | `5-§13-6` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 221 | `5-§13-7` | WS-B, Gate | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 222 | `5-§13-8` | WS-B, Cross-cutting, Gate | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` |
| 223 | `5-§13-9` | WS-B, Cross-cutting, Gate | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` |
| 224 | `5-§13-10` | WS-B, Cross-cutting, Gate | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` |
| 225 | `5-§13-11` | WS-B, Cross-cutting, Gate | `EC14-UDI-06`, `EC14-UDI-08`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` |
| 226 | `5-§13-12` | WS-B, Cross-cutting, Gate | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` |
| 227 | `5-§14-1` | WS-B, Gate | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 228 | `5-§14-2` | WS-B, Gate | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 229 | `5-§14-3` | WS-B, Gate | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 230 | `5-§14-4` | WS-B, Gate | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 231 | `5-§14-5` | WS-B, Gate | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 232 | `5-§14-6` | WS-B, Gate | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 233 | `5-§14-7` | WS-B, Gate | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 234 | `5-§14-8` | WS-B, Cross-cutting, Gate | `EC14-UDI-04`, `EC14-NG-01`, `EC14-HOLD-06` |
| 235 | `5-§15-1` | WS-B, WS-D, WS-E, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 236 | `5-§15-2` | WS-B, WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 237 | `5-§15-3` | WS-B, WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 238 | `5-§15-4` | WS-B, WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 239 | `5-§15-5` | WS-B, WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 240 | `5-§15-6` | WS-B, WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 241 | `5-§15-7` | WS-B, WS-D, WS-E, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 242 | `5-§15-8` | WS-B, WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 243 | `5-§15-9` | WS-B, WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 244 | `5-§15-10` | WS-B, WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 245 | `5-§15-11` | WS-B, WS-D, WS-G, Cross-cutting | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05` |
| 246 | `5-§16-1` | WS-G, Gate | `EC14-SEC-01`, `EC14-HOLD-01` |
| 247 | `5-§16-2` | WS-E, WS-G, Gate | `EC14-SEC-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 248 | `5-§16-3` | WS-E, WS-G, Gate | `EC14-RET-01`, `EC14-RET-03`, `EC14-SEC-01`, `EC14-HOLD-10` |
| 249 | `5-§16-4` | WS-B, Gate | `EC14-UDI-02`, `EC14-HOLD-06` |
| 250 | `5-§16-5` | WS-B, Gate | `EC14-UDI-02`, `EC14-HOLD-06` |
| 251 | `5-§16-6` | WS-G, Cross-cutting, Gate | `EC14-SEC-01`, `EC14-NG-01`, `EC14-HOLD-01` |
| 252 | `5-§16-7` | WS-B, Cross-cutting, Gate | `EC14-UDI-06`, `EC14-UDI-08`, `EC14-PRV-01`, `EC14-NG-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 253 | `5-§17-1` | WS-B, WS-G | `EC14-UDI-02`, `EC14-FAIL-01`, `EC14-FAIL-02` |
| 254 | `5-§17-2` | WS-B, WS-G | `EC14-UDI-02`, `EC14-FAIL-01`, `EC14-FAIL-02` |
| 255 | `5-§17-3` | WS-B, WS-G | `EC14-UDI-02`, `EC14-FAIL-01`, `EC14-FAIL-02` |
| 256 | `5-§17-4` | WS-B, WS-G, Gate | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-01`, `EC14-HOLD-09` |
| 257 | `5-§17-5` | WS-G, Gate | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-HOLD-01` |
| 258 | `5-§17-6` | WS-A, WS-B, WS-G, Cross-cutting, Gate | `EC14-CMD-01`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-03` |
| 259 | `5-§17-7` | WS-C, WS-G, Gate | `EC14-CNF-04`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-HOLD-01` |
| 260 | `5-§17-8` | WS-C, WS-G, Gate | `EC14-CNF-04`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-HOLD-01` |
| 261 | `5-§17-9` | WS-E, WS-G, Gate | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 262 | `5-§17-10` | WS-G, Gate | `EC14-IDM-01`, `EC14-IDM-03`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-HOLD-01` |
| 263 | `5-§17-11` | WS-G, Cross-cutting | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-NG-01` |
| 264 | `5-§18-1` | WS-A, WS-B, WS-C, WS-E, Cross-cutting, Gate | `EC14-CMD-01`, `EC14-CNF-03`, `EC14-ADP-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-07`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 265 | `5-§18-2` | WS-B, WS-C, Cross-cutting, Gate | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 266 | `5-§18-3` | WS-B, WS-E, Cross-cutting, Gate | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 267 | `5-§18-4` | WS-B, Cross-cutting, Gate | `EC14-UDI-03`, `EC14-VER-02`, `EC14-HOLD-01` |
| 268 | `5-§18-5` | WS-B, Cross-cutting, Gate | `EC14-ADP-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 269 | `5-§18-6` | WS-G, Cross-cutting, Gate | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-VER-02`, `EC14-HOLD-01` |
| 270 | `5-§18-7` | WS-D, WS-E, WS-F, Cross-cutting, Gate | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 271 | `5-§18-8a` | WS-B (accountable; PQ-10), Cross-cutting, Gate | `EC14-VER-02`, `EC14-HOLD-02` |
| 272 | `5-§18-9` | WS-G, Cross-cutting, Gate | `EC14-SEC-03`, `EC14-VER-02`, `EC14-HOLD-01` |
| 273 | `5-§18-10` | WS-G, Cross-cutting, Gate | `EC14-SEC-01`, `EC14-VER-02`, `EC14-HOLD-01` |
| 274 | `5-§18-11` | WS-G, Cross-cutting | `EC14-FAIL-02`, `EC14-VER-02` |
| 275 | `5-§19-1` | Cross-cutting | `EC14-NG-01` |
| 276 | `5-§19-2` | WS-B, Cross-cutting | `EC14-UDI-01`, `EC14-NG-01` |
| 277 | `5-§19-3` | Cross-cutting | `EC14-NG-01` |
| 278 | `5-§19-4` | Cross-cutting | `EC14-NG-01` |
| 279 | `5-§19-5` | Cross-cutting | `EC14-NG-01` |
| 280 | `22-§4-1` | Cross-cutting, Gate | `EC14-ARC-01`, `EC14-HOLD-01` |
| 281 | `22-§4-2` | Cross-cutting, Gate | `EC14-ARC-01`, `EC14-HOLD-01` |
| 282 | `22-§4-3` | Cross-cutting | `EC14-ARC-01` |
| 283 | `22-§4-4` | Cross-cutting | `EC14-ARC-01`, `EC14-NG-01` |
| 284 | `22-§9-1` | WS-B, Cross-cutting, Gate | `EC14-ARC-01`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 285 | `22-§9-2` | WS-B, Gate | `EC14-UDI-01`, `EC14-PRV-01`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 286 | `22-§9-3` | WS-B, Cross-cutting, Gate | `EC14-UDI-01`, `EC14-NG-01`, `EC14-HOLD-06` |
| 287 | `22-§10-1` | WS-D, WS-E, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 288 | `22-§10-2` | WS-D, WS-E, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 289 | `22-§10-3` | WS-D, WS-E, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 290 | `22-§10-4` | WS-D, WS-E, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 291 | `22-§10-5` | WS-D, WS-E, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-RET-01`, `EC14-RET-03`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08`, `EC14-HOLD-10` |
| 292 | `22-§10-6` | WS-D, WS-E, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 293 | `22-§10-7` | WS-D, WS-G, Cross-cutting | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-NG-01` |
| 294 | `22-§17-1` | Cross-cutting | `EC14-ARC-01` |
| 295 | `22-§17-7` | WS-E, Gate | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 296 | `22-§17-9` | Cross-cutting | `EC14-NG-01` |
| 297 | `22-§19-1` | WS-G | `EC14-FAIL-01`, `EC14-FAIL-02` |
| 298 | `22-§19-2` | WS-E, WS-G, Gate | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 299 | `22-§19-3` | WS-G | `EC14-FAIL-01`, `EC14-FAIL-02` |
| 300 | `22-§19-4` | WS-G | `EC14-FAIL-01`, `EC14-FAIL-02` |
| 301 | `22-§19-5` | WS-G | `EC14-FAIL-01`, `EC14-FAIL-02` |
| 302 | `22-§19-6` | WS-E, WS-G, Gate | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 303 | `22-§19-7` | WS-B, WS-E, WS-G, Gate | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 304 | `22-§21` | WS-E, WS-F, Gate | `EC14-PRV-02`, `EC14-PERF-01`, `EC14-HOLD-08` |
| 305 | `22-§22-1` | Cross-cutting | `EC14-VER-01` |
| 306 | `22-§22-2` | Cross-cutting | `EC14-VER-01` |
| 307 | `22-§22-3` | Cross-cutting | `EC14-VER-01` |
| 308 | `22-§22-4` | Cross-cutting | `EC14-VER-01` |
| 309 | `22-§22-5` | Cross-cutting | `EC14-VER-01` |
| 310 | `22-§22-6` | Cross-cutting | `EC14-VER-01`, `EC14-NG-01` |
| 311 | `22-§23-2` | WS-G, Cross-cutting, Gate | `EC14-SEC-01`, `EC14-NG-01`, `EC14-HOLD-01` |
| 312 | `22-§23-3` | WS-G, Cross-cutting, Gate | `EC14-SEC-04`, `EC14-NG-01`, `EC14-HOLD-01` |
| 313 | `22-§23-5` | WS-G, Cross-cutting, Gate | `EC14-SEC-03`, `EC14-NG-01`, `EC14-HOLD-01` |
| 314 | `22-§23-7` | WS-E, Cross-cutting | `EC14-STO-09`, `EC14-NG-01` |
| 315 | `22-§27-1` | Cross-cutting | `EC14-DOC-01` |
| 316 | `22-§27-2` | Cross-cutting | `EC14-DOC-01` |
| 317 | `22-§27-3` | Cross-cutting | `EC14-DOC-01` |
| 318 | `22-§27-4` | Cross-cutting | `EC14-DOC-01` |
| 319 | `22-§27-5` | Cross-cutting | `EC14-DOC-01` |
| 320 | `22-§27-6` | Cross-cutting | `EC14-DOC-01` |
| 321 | `22-§27-7` | Cross-cutting | `EC14-DOC-01` |
| 322 | `22-§27-8` | Cross-cutting | `EC14-NG-01`, `EC14-DOC-01` |
| 323 | `22-§28-1` | Cross-cutting | `EC14-NG-01` |
| 324 | `22-§28-2` | Cross-cutting | `EC14-NG-01` |
| 325 | `22-§28-3` | Cross-cutting | `EC14-NG-01` |
| 326 | `22-§28-4` | Cross-cutting | `EC14-NG-01` |
| 327 | `22-§28-5` | WS-B, Cross-cutting | `EC14-UDI-01`, `EC14-NG-01` |
| 328 | `22-§28-6` | Cross-cutting | `EC14-NG-01` |
| 329 | `22-§28-7` | Cross-cutting | `EC14-NG-01` |
| 330 | `22-§28-8` | Cross-cutting | `EC14-NG-01` |
| 331 | `22-§28-9` | WS-A, Cross-cutting | `EC14-CMD-03`, `EC14-NG-01` |
| 332 | `22-§28-10` | Cross-cutting | `EC14-NG-01` |
| 333 | `22-§29-3` | WS-G, Cross-cutting, Gate | `EC14-SEC-01`, `EC14-VER-02`, `EC14-HOLD-01` |
| 334 | `22-§29-5` | WS-B, Cross-cutting, Gate | `EC14-UDI-01`, `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 335 | `22-§29-7` | WS-A, WS-C, Cross-cutting, Gate | `EC14-CMD-01`, `EC14-CNF-03`, `EC14-CNF-04`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-07` |
| 336 | `22-§29-8` | WS-G, Cross-cutting, Gate | `EC14-IDM-01`, `EC14-VER-02`, `EC14-HOLD-01` |
| 337 | `22-§29-10` | WS-B, WS-E, WS-G, Cross-cutting, Gate | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 338 | `22-§29-12` | WS-D, WS-E, Cross-cutting, Gate | `EC14-CAB-02`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 339 | `22-§29-13` | WS-B, WS-G, Cross-cutting, Gate | `EC14-UDI-09`, `EC14-FAIL-01`, `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-09` |
| 340 | `22-§29-14` | Cross-cutting | `EC14-VER-02`, `EC14-DOC-01` |
| 341 | `25-§4-1` | WS-E, Cross-cutting, Gate | `EC14-STO-01`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-08` |
| 342 | `25-§4-2` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 343 | `25-§4-3` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 344 | `25-§4-4` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 345 | `25-§4-5` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 346 | `25-§4-6` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 347 | `25-§4-7` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 348 | `25-§4-8` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-01`, `EC14-RET-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-10` |
| 349 | `25-§4-9` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 350 | `25-§4-10` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 351 | `25-§4-11` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 352 | `25-§4-12` | WS-E, Cross-cutting, Gate | `EC14-STO-01`, `EC14-STO-04`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-NG-01`, `EC14-HOLD-01` |
| 353 | `25-§5-1` | WS-E, Gate | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 354 | `25-§5-2` | WS-E | `EC14-STO-01` |
| 355 | `25-§6-1` | WS-E, Cross-cutting, Gate | `EC14-ARC-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 356 | `25-§6-2` | Cross-cutting | `EC14-ARC-01` |
| 357 | `25-§7-1` | WS-E, Cross-cutting, Gate | `EC14-ARC-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 358 | `25-§7-2` | Cross-cutting | `EC14-ARC-01` |
| 359 | `25-§8-1` | WS-E, Gate | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` |
| 360 | `25-§8-2` | WS-E, Gate | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` |
| 361 | `25-§8-3` | WS-E, Gate | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` |
| 362 | `25-§8-4` | WS-B, WS-E | `EC14-UDI-02`, `EC14-STO-02`, `EC14-STO-03` |
| 363 | `25-§8-5` | WS-E, Gate | `EC14-STO-02`, `EC14-STO-03`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 364 | `25-§8-6` | WS-E, Gate | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` |
| 365 | `25-§8-7` | WS-E, Gate | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` |
| 366 | `25-§8-8` | WS-B, WS-E, Gate | `EC14-STO-02`, `EC14-STO-03`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 367 | `25-§8-9` | WS-A, WS-E, Cross-cutting, Gate | `EC14-CMD-01`, `EC14-STO-02`, `EC14-STO-03`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-03` |
| 368 | `25-§8-10` | WS-E, Gate | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` |
| 369 | `25-§8-11` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-02`, `EC14-STO-03`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-08` |
| 370 | `25-§9-1` | WS-E, WS-F, Gate | `EC14-STO-03`, `EC14-RTV-01`, `EC14-HOLD-01` |
| 371 | `25-§9-2` | WS-E, WS-F, Gate | `EC14-STO-03`, `EC14-RTV-01`, `EC14-HOLD-01` |
| 372 | `25-§9-3` | WS-E, WS-F, Gate | `EC14-STO-03`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 373 | `25-§9-4` | WS-E, WS-F, Gate | `EC14-STO-03`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 374 | `25-§9-5` | WS-E, WS-F, Gate | `EC14-STO-03`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 375 | `25-§9-6` | WS-E, WS-F, Gate | `EC14-STO-03`, `EC14-RTV-01`, `EC14-HOLD-01` |
| 376 | `25-§9-7` | WS-E, WS-F, Gate | `EC14-STO-03`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 377 | `25-§9-8` | WS-E, WS-F, Gate | `EC14-STO-03`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 378 | `25-§10-1` | WS-D, WS-G, Cross-cutting | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-NG-01` |
| 379 | `25-§10-2` | WS-D, WS-G, Cross-cutting | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05` |
| 380 | `25-§10-3` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 381 | `25-§10-4` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 382 | `25-§10-5` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 383 | `25-§10-6` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 384 | `25-§10-7` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 385 | `25-§10-8` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 386 | `25-§10-9` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 387 | `25-§10-10` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 388 | `25-§10-11` | WS-D, WS-E, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-RET-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-10` |
| 389 | `25-§10-12` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-01`, `EC14-CAB-02`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 390 | `25-§11-1` | WS-B, WS-D, WS-E, Gate | `EC14-CAB-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 391 | `25-§11-2` | WS-D, Cross-cutting | `EC14-CAB-01`, `EC14-NG-01` |
| 392 | `25-§11-3` | WS-D, WS-E, Gate | `EC14-CAB-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 393 | `25-§11-4` | WS-D, WS-G | `EC14-CAB-01`, `EC14-FAIL-01` |
| 394 | `25-§12-1` | WS-E, Gate | `EC14-RET-01`, `EC14-RET-02`, `EC14-RET-03`, `EC14-PRV-02`, `EC14-HOLD-02`, `EC14-HOLD-08`, `EC14-HOLD-10` |
| 395 | `25-§12-2` | WS-E, Gate | `EC14-RET-02`, `EC14-HOLD-02` |
| 396 | `25-§12-3` | WS-E, Cross-cutting, Gate | `EC14-RET-01`, `EC14-RET-02`, `EC14-RET-03`, `EC14-NG-01`, `EC14-HOLD-10` |
| 397 | `25-§13-1a` | WS-E, Gate | `EC14-STO-08`, `EC14-PRV-02`, `EC14-HOLD-02`, `EC14-HOLD-08` |
| 398 | `25-§13-2` | WS-E, Cross-cutting | `EC14-STO-08`, `EC14-NG-01` |
| 399 | `25-§13-3` | WS-E, Gate | `EC14-STO-08`, `EC14-HOLD-01` |
| 400 | `25-§14-1` | WS-E, Gate | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 401 | `25-§14-2` | WS-G, Gate | `EC14-IDM-01`, `EC14-HOLD-01` |
| 402 | `25-§14-3` | WS-G, Gate | `EC14-IDM-01`, `EC14-HOLD-01` |
| 403 | `25-§14-4` | WS-G | `EC14-IDM-01`, `EC14-IDM-02` |
| 404 | `25-§14-5` | WS-G, Gate | `EC14-IDM-01`, `EC14-IDM-03`, `EC14-HOLD-01` |
| 405 | `25-§14-6` | WS-E, Gate | `EC14-STO-03`, `EC14-STO-05`, `EC14-RET-01`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` |
| 406 | `25-§14-7` | WS-E, Cross-cutting | `EC14-STO-01`, `EC14-NG-01` |
| 407 | `25-§15-1` | WS-E, Gate | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 408 | `25-§15-2` | WS-E | `EC14-STO-01` |
| 409 | `25-§15-3` | WS-E, Cross-cutting | `EC14-STO-01`, `EC14-NG-01` |
| 410 | `25-§15-4` | WS-E, Gate | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 411 | `25-§16-1` | WS-E, Gate | `EC14-STO-07`, `EC14-RET-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 412 | `25-§16-2` | WS-E, Gate | `EC14-STO-07`, `EC14-RET-01`, `EC14-RET-03`, `EC14-HOLD-10` |
| 413 | `25-§16-3` | WS-E, Cross-cutting | `EC14-STO-07`, `EC14-NG-01` |
| 414 | `25-§17-2` | WS-E, Gate | `EC14-STO-07`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` |
| 415 | `25-§17-3` | WS-E, Gate | `EC14-STO-03`, `EC14-STO-07`, `EC14-HOLD-01` |
| 416 | `25-§17-4` | WS-E, Cross-cutting | `EC14-STO-07`, `EC14-NG-01` |
| 417 | `25-§17-5` | WS-E, Gate | `EC14-STO-07`, `EC14-RET-03`, `EC14-HOLD-10` |
| 418 | `25-§17-6` | WS-E, Gate | `EC14-STO-07`, `EC14-RET-01`, `EC14-RET-03`, `EC14-HOLD-10` |
| 419 | `25-§17-7` | WS-E, Cross-cutting | `EC14-STO-07`, `EC14-NG-01` |
| 420 | `25-§18-1` | WS-E, Gate | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 421 | `25-§18-2` | WS-E, Gate | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 422 | `25-§18-3` | WS-E, Cross-cutting, Gate | `EC14-STO-01`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-08` |
| 423 | `25-§19-1` | WS-E, Gate | `EC14-STO-04`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 424 | `25-§19-2` | WS-E, Cross-cutting, Gate | `EC14-STO-04`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 425 | `25-§19-3` | WS-E, Cross-cutting, Gate | `EC14-STO-04`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 426 | `25-§19-4` | WS-E, Cross-cutting, Gate | `EC14-STO-04`, `EC14-PRV-02`, `EC14-ENV-01`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 427 | `25-§19-5` | WS-E, Cross-cutting, Gate | `EC14-STO-04`, `EC14-PRV-02`, `EC14-ENV-01`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 428 | `25-§19-6` | WS-E, Cross-cutting | `EC14-STO-04`, `EC14-ENV-01`, `EC14-NG-01` |
| 429 | `25-§19-7` | WS-E, WS-F, Gate | `EC14-STO-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 430 | `25-§19-8` | WS-B, WS-E, Gate | `EC14-UDI-02`, `EC14-STO-04`, `EC14-HOLD-06` |
| 431 | `25-§20-1` | WS-E, WS-G, Gate | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 432 | `25-§20-2` | WS-E, WS-G, Gate | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 433 | `25-§20-3` | WS-E, WS-G, Gate | `EC14-STO-05`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 434 | `25-§20-4` | WS-E, WS-G, Gate | `EC14-STO-05`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 435 | `25-§20-5` | WS-E, WS-G, Gate | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 436 | `25-§20-6` | WS-E, WS-G, Gate | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 437 | `25-§20-7` | WS-E, WS-F, WS-G, Gate | `EC14-RTV-01`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 438 | `25-§20-8` | WS-E, WS-G, Gate | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 439 | `25-§20-9` | WS-E, WS-G, Gate | `EC14-STO-05`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 440 | `25-§20-10` | WS-E, WS-G, Gate | `EC14-IDM-03`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 441 | `25-§20-11` | WS-E, WS-G, Gate | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 442 | `25-§20-12` | WS-E, WS-G, Gate | `EC14-STO-05`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 443 | `25-§20-13` | WS-E, WS-F, WS-G, Gate | `EC14-RTV-01`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 444 | `25-§20-14` | WS-E, WS-G, Cross-cutting, Gate | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-08` |
| 445 | `25-§21-1` | WS-E, WS-G, Gate | `EC14-STO-03`, `EC14-STO-05`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` |
| 446 | `25-§21-2` | WS-E, WS-G, Gate | `EC14-STO-03`, `EC14-STO-05`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` |
| 447 | `25-§21-3` | WS-E, WS-G, Gate | `EC14-STO-03`, `EC14-STO-05`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` |
| 448 | `25-§21-4` | WS-E, WS-G, Gate | `EC14-STO-03`, `EC14-STO-05`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` |
| 449 | `25-§21-5` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-03`, `EC14-STO-05`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-08` |
| 450 | `25-§22-1` | WS-E, Gate | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 451 | `25-§22-2` | WS-E, Gate | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 452 | `25-§22-3` | WS-E, Gate | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 453 | `25-§22-4` | WS-E, Gate | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 454 | `25-§22-5` | WS-E, Gate | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 455 | `25-§22-6` | WS-E, Gate | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 456 | `25-§23-1` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 457 | `25-§23-2` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 458 | `25-§23-3` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 459 | `25-§23-4` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 460 | `25-§23-5` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 461 | `25-§23-6` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 462 | `25-§23-7` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-02`, `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 463 | `25-§23-8` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 464 | `25-§23-9` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 465 | `25-§23-10` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 466 | `25-§23-11` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 467 | `25-§23-12` | WS-D, WS-G, Cross-cutting, Gate | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` |
| 468 | `25-§24-1` | WS-E, WS-F, Gate | `EC14-PRV-02`, `EC14-PERF-01`, `EC14-HOLD-08` |
| 469 | `25-§24-2` | WS-E, WS-F, Gate | `EC14-PRV-02`, `EC14-PERF-01`, `EC14-HOLD-08` |
| 470 | `25-§24-3` | WS-F, Cross-cutting, Gate | `EC14-PERF-01`, `EC14-NG-01`, `EC14-HOLD-01` |
| 471 | `25-§25-1` | WS-E, Gate | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 472 | `25-§25-2` | WS-E, Gate | `EC14-STO-01`, `EC14-HOLD-01` |
| 473 | `25-§25-3` | WS-B, WS-E, Cross-cutting, Gate | `EC14-UDI-06`, `EC14-STO-01`, `EC14-PRV-01`, `EC14-NG-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 474 | `25-§25-4` | WS-E, Cross-cutting, Gate | `EC14-STO-01`, `EC14-NG-01`, `EC14-HOLD-02` |
| 475 | `25-§26-1` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-02`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-08` |
| 476 | `25-§26-2` | WS-E, WS-F, Cross-cutting, Gate | `EC14-RTV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 477 | `25-§26-3` | WS-E, WS-F, Cross-cutting, Gate | `EC14-RTV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 478 | `25-§26-4a` | WS-E, Cross-cutting, Gate | `EC14-STO-08`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-08` |
| 479 | `25-§26-5` | WS-B, WS-E, Cross-cutting, Gate | `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 480 | `25-§26-6` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-02`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08` |
| 481 | `25-§26-7` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-02`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` |
| 482 | `25-§26-8` | WS-E, WS-G, Cross-cutting, Gate | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 483 | `25-§26-9` | WS-E, Cross-cutting, Gate | `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08` |
| 484 | `25-§26-10` | WS-E, WS-G, Cross-cutting, Gate | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08` |
| 485 | `25-§26-11` | WS-E, WS-F, Cross-cutting, Gate | `EC14-RTV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 486 | `25-§26-12` | WS-E, Cross-cutting, Gate | `EC14-STO-07`, `EC14-RET-01`, `EC14-RET-03`, `EC14-VER-02`, `EC14-HOLD-10` |
| 487 | `25-§26-13` | WS-E, Cross-cutting, Gate | `EC14-STO-06`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08` |
| 488 | `25-§26-14` | WS-E, Cross-cutting, Gate | `EC14-STO-09`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08` |
| 489 | `25-§27-1` | Cross-cutting | `EC14-NG-01` |
| 490 | `25-§27-2` | Cross-cutting | `EC14-NG-01` |
| 491 | `25-§27-3` | Cross-cutting | `EC14-NG-01` |
| 492 | `25-§27-4` | Cross-cutting | `EC14-NG-01` |
| 493 | `25-§27-5` | Cross-cutting | `EC14-NG-01` |
| 494 | `25-§27-6` | Cross-cutting | `EC14-NG-01` |
| 495 | `25-§27-7` | Cross-cutting | `EC14-NG-01` |
| 496 | `25-§27-8` | Cross-cutting | `EC14-NG-01` |
| 497 | `24-§5-6` | WS-B, Gate | `EC14-UDI-01`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 498 | `24-§7-3` | WS-B, Gate | `EC14-UDI-04`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 499 | `24-§7-4` | WS-B, Gate | `EC14-UDI-03`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 500 | `24-§14-1` | WS-B, Gate | `EC14-UDI-06`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 501 | `24-§14-2` | WS-B, Gate | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 502 | `24-§14-3` | WS-B, Gate | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 503 | `24-§14-4` | WS-B, Gate | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 504 | `24-§14-5` | WS-B, Gate | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 505 | `24-§14-6` | WS-B, Gate | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 506 | `24-§14-7` | WS-B, Gate | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 507 | `24-§14-8` | WS-B, Gate | `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 508 | `24-§14-9` | WS-A, WS-B, Cross-cutting, Gate | `EC14-CMD-03`, `EC14-UDI-06`, `EC14-UDI-09`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` |
| 509 | `24-§18-1a` | WS-A, WS-B, Cross-cutting, Gate | `EC14-CMD-01`, `EC14-ADP-01`, `EC14-PRV-01`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-04`, `EC14-HOLD-06`, `EC14-HOLD-09`, `EC14-HOLD-11` |
| 510 | `24-§21-7` | WS-C, Gate | `EC14-CNF-03`, `EC14-HOLD-01`, `EC14-HOLD-06` |
| 511 | `24-§23-6` | WS-B, WS-G, Gate | `EC14-UDI-09`, `EC14-FAIL-01`, `EC14-PRV-01`, `EC14-HOLD-09` |
| 512 | `24-§27-5` | WS-A, Gate | `EC14-ARC-02`, `EC14-HOLD-02`, `EC14-HOLD-06` |
| 513 | `24-§31-8` | WS-B, Cross-cutting, Gate | `EC14-UDI-09`, `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 514 | `9-§12-1` | WS-A, Gate | `EC14-ARC-02`, `EC14-HOLD-02` |
| 515 | `10-§5-10` | WS-D, WS-E, WS-F, Gate | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-08` |
| 516 | `10-§10-1` | WS-B, Gate | `EC14-UDI-01`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 517 | `10-§10-3` | WS-B, WS-C, Gate | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 518 | `10-§10-4` | WS-C, Gate | `EC14-CNF-02`, `EC14-HOLD-02` |
| 519 | `10-§10-5` | WS-C, Gate | `EC14-CNF-03`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-07` |
| 520 | `10-§10-7` | WS-D, WS-E, WS-F, Gate | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-08` |
| 521 | `10-§13-3` | WS-A, WS-C, Cross-cutting, Gate | `EC14-CMD-01`, `EC14-CNF-03`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-07` |
| 522 | `10-§17-4` | WS-B, WS-C, Gate | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 523 | `10-§23-3b` | WS-B, Cross-cutting, Gate | `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 524 | `12-§4-5` | WS-C, Gate | `EC14-CNF-01`, `EC14-HOLD-02` |
| 525 | `17-§12-1` | WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 526 | `17-§12-2` | WS-A, WS-D, WS-F, Gate | `EC14-ARC-02`, `EC14-CAB-04`, `EC14-RTV-01`, `EC14-HOLD-01` |
| 527 | `7-§6-2` | WS-B, Gate | `EC14-ADP-02`, `EC14-MIG-03`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 528 | `7-§6-4` | WS-B, Gate | `EC14-ADP-02`, `EC14-MIG-03`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 529 | `7-§6-5` | WS-B, Cross-cutting, Gate | `EC14-ADP-02`, `EC14-NG-01`, `EC14-HOLD-05` |
| 530 | `7-§15-2a` | WS-B, Cross-cutting, Gate | `EC14-ADP-02`, `EC14-MIG-03`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 531 | `BP-§5.3-1` | Cross-cutting | `EC14-DOC-01` |
| 532 | `BP-§5.4-1` | WS-E, Gate | `EC14-PRV-02`, `EC14-HOLD-08` |
| 533 | `BP-§6.1-1` | WS-A, Cross-cutting, Gate | `EC14-CMD-03`, `EC14-NG-01`, `EC14-HOLD-01` |
| 534 | `BP-§6.2-1` | WS-A, Cross-cutting, Gate | `EC14-CMD-01`, `EC14-CMD-03`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-03` |
| 535 | `BP-§6.3-1` | Cross-cutting | `EC14-ARC-01` |
| 536 | `BP-§6.3-2` | WS-E, Cross-cutting, Gate | `EC14-ARC-01`, `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 537 | `BP-§8.4-1` | Cross-cutting | `EC14-ARC-01` |
| 538 | `BP-§9-1` | WS-A, Cross-cutting | `EC14-LDG-01`, `EC14-DOC-01` |
| 539 | `BP-§10.3-O` | WS-A, WS-B, WS-E, Cross-cutting, Gate | `EC14-LDG-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-UX-01`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 540 | `BP-§10.3-W1` | WS-A, Cross-cutting, Gate | `EC14-LDG-01`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 541 | `BP-§10.3-W2` | WS-A, Cross-cutting, Gate | `EC14-LDG-01`, `EC14-LDG-03`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 542 | `BP-§10.3-W3` | WS-A, Cross-cutting, Gate | `EC14-LDG-04`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 543 | `BP-§10.3-W4` | WS-B, WS-E, Gate | `EC14-UDI-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 544 | `BP-§10.3-W5` | WS-D, WS-E, WS-G, Cross-cutting, Gate | `EC14-CAB-02`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 545 | `BP-§10.3-W6` | WS-B, Gate | `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` |
| 546 | `BP-§10.3-W7` | WS-A, Cross-cutting, Gate | `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-03` |
| 547 | `BP-§10.3-W8` | WS-D, WS-E, WS-G, Cross-cutting, Gate | `EC14-CAB-04`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 548 | `BP-§10.3-W9` | WS-E, Gate | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` |
| 549 | `BP-§10.3-W10` | WS-E, WS-G, Cross-cutting, Gate | `EC14-STO-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 550 | `BP-§10.3-W11` | WS-C (accountable; PQ-10), Gate | `EC14-HOLD-01` |
| 551 | `BP-§10.3-W12` | WS-B | `EC14-UDI-01` |
| 552 | `BP-§10.3-W13` | WS-B, Gate | `EC14-ADP-02`, `EC14-HOLD-01`, `EC14-HOLD-05` |
| 553 | `BP-§10.3-C1` | WS-A, Cross-cutting, Gate | `EC14-LDG-01`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` |
| 554 | `BP-§10.3-S1` | WS-E, WS-F, Gate | `EC14-SRC-01`, `EC14-PRV-02`, `EC14-MIG-04`, `EC14-HOLD-01`, `EC14-HOLD-08` |
| 555 | `BP-§10.3-SA1` | WS-A, WS-B, WS-C, WS-E, Cross-cutting, Gate | `EC14-CMD-01`, `EC14-CNF-03`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-07`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 556 | `BP-§10.3-SA2` | WS-A, WS-C, Cross-cutting, Gate | `EC14-LDG-03`, `EC14-CMD-01`, `EC14-CNF-03`, `EC14-CNF-04`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-07` |
| 557 | `BP-§10.3-SB1` | WS-A, Cross-cutting, Gate | `EC14-LDG-03`, `EC14-TOT-01`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 558 | `BP-§10.3-SB2` | WS-A, Cross-cutting, Gate | `EC14-LDG-03`, `EC14-LDG-04`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-03`, `EC14-HOLD-05` |
| 559 | `BP-§10.3-X` | WS-B, WS-D, WS-E, WS-F, Cross-cutting, Gate | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` |
| 560 | `BP-§11-1` | Cross-cutting | `EC14-ARC-01` |
| 561 | `BP-§11-2` | Cross-cutting | `EC14-DOC-01` |
| 562 | `BP-§11-3` | Cross-cutting | `EC14-DOC-01` |
| 563 | `BP-§13-1` | Cross-cutting | `EC14-VER-01` |

## 13. Workstream Row Counts

| Workstream | Obligations | Rows |
|---|---|---|
| WS-A | 13 | 109 |
| WS-B | 13 | 158 |
| WS-C | 4 | 48 |
| WS-D | 4 | 67 |
| WS-E | 14 | 171 |
| WS-F | 6 | 55 |
| WS-G | 9 | 159 |
| Cross-cutting | 9 | 283 |
| Gate | 11 | 457 |

Every one of the 563 rows is assigned to at least one workstream; 491 rows are shared by two or more. 56 rows reach no builder workstream; all are realized by cross-cutting obligations (must-not, module-boundary, CI and disclosure rows) that apply to every builder workstream. The 4 rows realized in the locked mapping only by gate obligations carry an accountable builder workstream (Engineering Contract Section 13.1). No row is assigned outside SB-P-1.14.

## 14. Status

`APPROVED — LOCKED` after human merge and Mission Control verification; implementation remains NOT AUTHORIZED. No builder is named and nothing may be built from this prompt until the package is locked at Stage 13 and an Implementation Authorization is recorded.

## 15. Change Log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-10-09 | Claude Code (SB-P-1.14-MC-21 §4) | Initial Stage 12 draft |
| 0.2 | 2026-10-09 | Claude Code (SB-P-1.14-MC-23 §4) | Stage 13 PQ-10 refinement: package-level builder accountability for `3-§17-7`, `3-§17-8` (WS-G), `5-§18-8a` (WS-B) and `BP-§10.3-W11` (WS-C) from their locked Blueprint §8 placement and the Blueprint §7 register; checks NP-43 and NP-44 added and four row items extended. No obligation, EIS link, FCTM row, hold or Founder decision changed; PQ-2 unchanged |


## Stage 13 Lock Crossing Note

Mission Control MC-24 accepted package v0.2 content in PR #849; MC-25 carries that exact reviewed package into canonical `main` by a separate human-merge lock crossing. Only lifecycle/status metadata is changed from v0.2. The locked EIS mapping remains 2,282 links; PQ-10 builder accountability is package-level and PQ-2 remains an implementation prerequisite. This record is effective only after human merge of the Stage 13 lock PR and post-merge verification. Package lock is separate from Implementation Authorization.
