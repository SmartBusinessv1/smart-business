# SB-P-1.14 — Verification Checklist

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

## Document Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.14 |
| Mission Name | Business Memory, Documents & Durable Media |
| Document | Verification Checklist (Source 18 Stage 12; package template Phase C) |
| Version | 0.2 |
| Status | `APPROVED — LOCKED` — effective only after Stage 13 lock PR human merge and post-merge Mission Control verification |
| Author | Claude Code — initial implementation package owner |
| Canonical baseline | `main@fe24264fbe01fed7abe5f7032b6eff2fc2b5825d` |
| Date | 2026-10-09 |
| Execution state | **Not executed.** Every item is a planned check. Nothing here is evidence |

## How to Use This Checklist

Sections 1 to 14 follow package template Phase C. Each item names its planned evidence class and the obligations or FCTM rows it supports. Section 13.4 is the row-keyed authority: one item per `IN SCOPE` row, with that row's obligations, evidence classes, named negative-path checks and named runtime scenarios.

## Evidence Classes

| Class | Meaning |
|---|---|
| `UNIT` | Unit or component test in the Fast Gate (mocked provider and storage) |
| `INT` | Server-function integration test on the isolated test project with a mocked or recorded provider |
| `DB` | Database-level behavioural test on the isolated test project (Full Assurance) |
| `CONC` | Database-level concurrency, race or replay test |
| `INV` | Machine-generated effective-access or repository inventory: object types, owners, grants, default privileges, RLS, view semantics, sequences, function signatures/overloads, security mode and `search_path`, privileged handlers, bundle and secret scan |
| `AUDIT` | Inspection of domain-provenance rows and SB-P-1.12 `authority_events` produced by a test |
| `EVAL` | Governed English/Malayalam/Manglish document-interpretation and injection-fixture evaluation against a recorded provider configuration identity, outside CI |
| `NET` | Outbound-request evidence from the processing runtime (no document-controlled fetch) |
| `OBJ` | Object-store test against a separately authorized non-production bucket after `DR2` activation |
| `PERF` | Latency or plan measurement against the recorded target |
| `REH` | Migration rehearsal evidence on the isolated test project (baseline capture, transition, rollback and forward-fix) |
| `RT` | Human runtime verification in an authorized non-production environment: environment, role, route, expected and actual result, capturer |
| `FRT` | Founder runtime observation of a Founder Runtime Verification Scenario |
| `REG` | Regression re-run of existing suites, routes and the Ledger regression baseline |
| `REPO` | Repository evidence: commit range, diff, file inventory, locked documents unchanged |
| `PROV` | Separately authorized provider, storage, environment or production evidence; never inferred from repository files |
| `DOC` | Documentary design review; not implementation, runtime or production evidence |

## 1. Locked Authority Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-AUTH-01 | The locked Blueprint on canonical `main` is blob `256828d2c26fba7dab6f52975efb8b574b1563f1` at every checkpoint. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-AUTH-02 | The locked EIS on canonical `main` is blob `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3` at every checkpoint. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-AUTH-03 | The canonical FCTM is blob `01e9856aca0afdb1267230a1932fe34054449a4b`; its `IN SCOPE` set is the same 563 rows as Section 13.4, by set difference. | `REPO` | 563 rows via ALL |
| VC-AUTH-04 | Founder records `founder/02` (blob `9717b29d`), `founder/03` (blob `3f36c06d`) and `founder/05` (blob `7e41d483`) are unchanged and applied exactly (Engineering Contract Section 10). | `REPO`, `DOC` | `EC14-LDG-03`, `EC14-LDG-04`, `EC14-TOT-01`, `EC14-RET-01`, `EC14-CNF-03`, `EC14-STO-03` |
| VC-AUTH-05 | The three package documents are `APPROVED — LOCKED` (Stage 13) and an Implementation Authorization names the builder, workstreams, paths, environments and Git authority before any build. | `REPO`, `DOC` | Process item; no FCTM row; adds no behaviour |
| VC-AUTH-06 | Every migration written or executed is covered by an explicit migration mission meeting `docs/migration/README.md`. | `REPO`, `DOC` | `EC14-MIG-01` to `EC14-MIG-06` |
| VC-AUTH-07 | SB-P-1.12 and SB-P-1.13 consumption evidence is accepted by Mission Control for each consumed surface before any dependent row is built. | `PROV`, `DOC` | `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-03` |

## 2. Repository Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-REPO-01 | Diff touches only the paths the Implementation Authorization lists; locked documents, FCTM, Founder records and governance sources are untouched. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-REPO-02 | Module boundaries match EIS Section 6 (`ledger`, `udi`, `storage`, `cabinet`, `search`, `jobs`); no module holds its own permission logic, Business Memory copy, parser stack or storage universe. | `REPO`, `DOC` | `EC14-ARC-01`; NP-41 |
| VC-REPO-03 | No storage or provider secret, `VITE_*` provider value or credential is committed. | `REPO`, `INV` | `EC14-ENV-01`; NP-37 |
| VC-REPO-04 | No direct AI provider SDK exists in `udi`; UDI calls only the SB-P-1.13 gateway. | `REPO` | `EC14-UDI-09`; NP-25 |
| VC-REPO-05 | Generated Supabase types are reproduced by the recorded procedure and hand-written unions, callers and UI branches match. | `REPO`, `REH` | `EC14-MIG-06` |

## 3. Backend Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-BE-01 | Every SB-P-1.14 server function uses `requireSupabaseAuth` and the caller's RLS-bound client; principal and active business come from SB-P-1.12. | `INT`, `INV` | `EC14-SEC-01`; NP-01 |
| VC-BE-02 | Ledger writes go only through the widened governed create command and the governed correction command, inside one protected transaction with confirmation binding, kernel revalidation and idempotency. | `DB`, `CONC` | `EC14-CMD-01`, `EC14-CMD-02`; NP-07, NP-08 |
| VC-BE-03 | Repayment commits revalidate the target inside the commit transaction. | `DB`, `CONC` | `EC14-LDG-03`; NP-11 |
| VC-BE-04 | The UDI pipeline enforces intake validation before parse or storage, deterministic CSV/XLSX routing and a non-executing, non-fetching PDF/image processor within the deployed runtime budget. | `UNIT`, `INT`, `NET` | `EC14-UDI-01` to `EC14-UDI-04`; NP-19, NP-20, NP-26 |
| VC-BE-05 | Every UDI gateway call carries the accepted versioned configuration identity; calls without one are refused. | `UNIT`, `INT` | `EC14-PRV-01`, `EC14-UDI-09`; NP-25 |
| VC-BE-06 | Storage handlers implement two-phase ingest, server-side post-upload verification, reconciliation and governed deletion with `EIS-ISO-04` binding. | `INT`, `OBJ`, `DB` | `EC14-STO-02`, `EC14-STO-03`, `EC14-STO-05`, `EC14-STO-07`; NP-02, NP-30, NP-31, NP-33 |

## 4. Frontend Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-FE-01 | Readers render all six transaction types by name, never through a binary sale/purchase branch, and take totals only from the canonical classification. | `UNIT`, `RT` | `EC14-LDG-05`, `EC14-TOT-01`; NP-10 |
| VC-FE-02 | Four states appear as everyday actions; storage, provider and AI internals are never shown. | `UNIT`, `RT` | `EC14-UX-01` |
| VC-FE-03 | Preview shows type, key fields, line items, destination, fields needing confirmation, possible duplicates and unreadable-content warnings; every field is correctable before confirming. | `UNIT`, `RT` | `EC14-CNF-02`; NP-18 |
| VC-FE-04 | Intake, interpretation, preview, confirmation, write and object states are shown separately; success only from the authoritative outcome; unknown outcome shown explicitly. | `UNIT`, `RT` | `EC14-FAIL-01`, `EC14-IDM-03`; NP-35, NP-15 |
| VC-FE-05 | Receipt Cabinet finds documents by period, party, amount, type and linked record through the shared search layer. | `UNIT`, `RT` | `EC14-CAB-04`, `EC14-SRC-01` |

### 4.1 Named Runtime Scenarios

Each experience row has at least one named runtime scenario. Every scenario is a verification procedure for existing acceptance lines and Blueprint Section 9 and 15 expectations. None is a new Founder Runtime Verification Scenario, and none adds behaviour.

| Scenario | Name | Source anchor | Planned evidence class | FCTM rows |
|---|---|---|---|---|
| RS-01 | Founder Scenario A: upload a receipt, invoice, image or PDF, correct an ambiguous interpreted field and confirm; the committed record uses the exact reviewed interpretation | Blueprint §15.1 Scenario A (`BP-§10.3-SA1`); anchor 1 | `FRT`, `RT`, `DB` | 57 rows (Section 13.4) |
| RS-02 | Founder Scenario A: the resolvable target, including a repayment target, changes between preview and commit and the system re-prompts; a revoked actor is blocked even with the target unchanged | Blueprint §15.1 Scenario A (`BP-§10.3-SA2`); anchor 2; `FPDR-3` | `FRT`, `RT`, `DB` | 24 rows (Section 13.4) |
| RS-03 | Founder Scenario B: Owner records income, expense, credit and repayment (one repayment to a standalone credit, one to a credit-method sale); all four persist and retrieve; totals show distinct measures without double counting | Blueprint §15.1 Scenario B (`BP-§10.3-SB1`); anchor 4; `FPDR-1`, `FPDR-4` | `FRT`, `RT`, `DB` | 56 rows (Section 13.4) |
| RS-04 | Founder Scenario B: existing sale and purchase history, including `sale + payment_method=credit` rows, is unchanged after widening and after repayment linkage | Blueprint §15.1 Scenario B (`BP-§10.3-SB2`); anchor 5; `FPDR-1`, `FPDR-4` | `FRT`, `RT`, `DB`, `REG` | 40 rows (Section 13.4) |
| RS-05 | Anchor 3: original proof found from the linked record under current permission by Owner, Manager and Employee; denied after revocation | Blueprint §15.2 anchor 3 (`BP-§10.3-X`) | `RT`, `DB` | 66 rows (Section 13.4) |
| RS-06 | Anchor 6: an attempt to write a Ledger row from a document, AI proposal or client call outside the governed command fails; only the governed command writes | Blueprint §15.2 anchor 6 | `RT`, `DB`, `INV` | 63 rows (Section 13.4) |
| RS-07 | Deterministic CSV/XLSX import with preview, a failed row, revocation mid-import and duplicate-safe resume; opening-stock import through `create_inventory_movement` | Blueprint §8.2 | `RT`, `DB` | 32 rows (Section 13.4) |
| RS-08 | Unsafe or unsupported file rejected with a clear recoverable state; a PDF with active content processed without execution or fetch | Blueprint §8.2, §8.7 | `RT` | 44 rows (Section 13.4) |
| RS-09 | Receipt Cabinet: browse and find documents by period, party, amount, type and linked record; open the original; a replacement shows as a new version | Blueprint §8.4 | `RT` | 91 rows (Section 13.4) |
| RS-10 | Export to CSV, Excel and PDF with distinct measures and safe cell values; export denied without the export capability | Blueprint §8.6 | `RT` | 8 rows (Section 13.4) |
| RS-11 | Correct a recorded entry through the correction command; the prior values remain visible in the correction history | Blueprint §8.3 | `RT`, `DB` | 39 rows (Section 13.4) |
| RS-12 | Parser, AI, storage or provider outage: the affected operation fails narrowly with no false success; deterministic and unrelated paths keep working | Blueprint §8.7 | `RT` | 61 rows (Section 13.4) |
| RS-13 | Timeout after dispatch: unknown outcome shown, then resolved by lookup; retry and re-upload produce no second write; a re-uploaded file is flagged as a possible duplicate | Blueprint §8.7 | `RT`, `DB` | 23 rows (Section 13.4) |
| RS-14 | Four states shown as everyday actions (sold, bought, received, spent, owes, paid back) in the transaction list, dashboard and correction dialog; no storage, provider or AI internals shown | Blueprint §9 | `RT` | 23 rows (Section 13.4) |
| RS-15 | `FPDR-2`: an unconfirmed upload is discarded after the configured grace period with an honest status; a held document is kept; no raw voice is stored durably | Blueprint §15.4 `FPDR-2` | `RT`, `OBJ` | 31 rows (Section 13.4) |
| RS-16 | Ambiguous amount, party, type or column mapping asks the smallest clarification or rejects safely; unrelated work continues | Blueprint §8.3 | `RT` | 61 rows (Section 13.4) |
| RS-17 | Malayalam, Manglish and mixed-language documents interpreted and reviewed; injected instructions in a document have no effect | Blueprint §8.2 | `RT`, `EVAL` | 18 rows (Section 13.4) |
| RS-18 | Human-concept search (party, period, purpose, amount) returns the same records in the visual workspace and in conversation | Blueprint §8.6 | `RT` | 46 rows (Section 13.4) |
| RS-19 | Retrieval and recording responsiveness measured against Contract 22 §21 with authorization checks in place | Blueprint §8.8 | `PERF`, `RT` | 17 rows (Section 13.4) |
| RS-20 | Implementation-document review: dependency-rule disclosures and delivery accounting present (documentary scenario, no runtime surface) | Contract 22 §27, §29 acceptance 14 | `DOC` | 13 rows (Section 13.4) |
| RS-21 | Role-scoped Ledger and document access: Owner, Manager and Employee defaults applied; participants have no access; no platform or support browsing | Blueprint §8.7 | `RT`, `DB` | 32 rows (Section 13.4) |
| RS-22 | Storage operations: UDI interprets an authorized stored object without holding storage permissions; a provider key or URL migration keeps domain links intact; a backup/restore check reports metadata/object consistency; capacity and cost metrics show no private content | Contract 25 §26 acceptances 5, 9, 13, 14 | `INT`, `OBJ`, `PROV`, `RT` | 11 rows (Section 13.4) |
| RS-23 | The same document entering through the SB-P-1.13 Workspace attachment handoff and through visual upload follows the same interpretation, preview and confirmation rules (Workspace slice) | Contract 5 §18 acceptance 8 (Workspace slice) | `RT`, `DB` | 1 rows (Section 13.4) |

## 5. Database Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-DB-01 | Expected objects only (EIS Section 22): widened `transaction_type`, credit direction, repayment-target link, widened commands (M14-1); `documents`, `document_versions`, `document_links`, `media_objects` and domain-provenance tables (M14-2); UDI and import-ledger state (M14-3); search keys and indexes (M14-4). | `INV` | `EC14-MIG-01` to `EC14-MIG-04` |
| VC-DB-02 | Every new or replaced protected object is born hardened by object type in one migration boundary. | `INV`, `DB` | `EC14-SEC-02`, `EC14-MIG-02`; NP-06 |
| VC-DB-03 | Each migration is rehearsed on the isolated test project with pre-new-data rollback and post-new-data forward-fix evidence, in EIS Section 22 order. | `REH`, `REPO` | `EC14-MIG-05`; NP-09 |
| VC-DB-04 | Index builds follow the live-safe strategy; invalid indexes are detected and recovered; `IF NOT EXISTS` is not treated as proof. | `REH`, `PERF` | `EC14-MIG-04` |

## 6. Security and RLS Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-SEC-01 | Full Assurance effective-access inventory for every new or replaced protected object (EIS14-VER-01 list), including bypass-capable roles and legacy identity disappearance. | `INV` | `EC14-VER-01`, `EC14-SEC-02`; NP-06, NP-07 |
| VC-SEC-02 | Source-complete privileged-handler inventory proves no unbound admin, service-role, maintenance or background-job path. | `INV`, `REPO` | `EC14-STO-03`; NP-02 |
| VC-SEC-03 | Transactions-family cut-over evidence shows one protected write path and no direct authenticated DML on `transactions` or correction events. | `INV`, `DB` | `EC14-CMD-03`, `EC14-HOLD-03`; NP-07 |

### 6.1 Named Negative-Path Checks

Each permission, isolation and denial row has at least one named negative-path check (rule in Section 13.1).

| Check | Name | Realizes | Planned evidence class | FCTM rows |
|---|---|---|---|---|
| NP-01 | A request naming another business, or a client-supplied business, actor or capability, is ignored; the server-derived active business is used and no Ledger row, document, version, object, search result or export of another business is returned (Owner-of-A / Manager-of-B fixtures) | `EC14-ARC-02`, `EC14-CAB-01`, `EC14-CAB-04`, `EC14-RTV-01`, `EC14-SRC-01`, `EC14-SEC-01` | `DB`, `INT` | 117 rows (Section 13.4) |
| NP-02 | No service-role storage, reconciliation, discard, deletion or ingest-verification handler runs without the `EIS-ISO-04` binding (verified principal, current kernel authorization, business/action/object predicates carried into the query); the source-complete privileged-handler inventory has no unbound admin, service-role, maintenance or background-job path | `EC14-STO-03` | `INV`, `REPO`, `DB` | 26 rows (Section 13.4) |
| NP-03 | Upload or create never implies read-all, replace, delete or export; each is a distinct capability that is denied when not held | `EC14-LDG-06`, `EC14-SRC-02`, `EC14-SEC-03` | `DB`, `INT` | 27 rows (Section 13.4) |
| NP-04 | Manager-not-Owner and Employee role defaults deny Owner-only intelligence; Customer, Supplier and Delivery participants have no Ledger or document capability; an Employee upload never exposes Owner aggregates | `EC14-LDG-06`, `EC14-SEC-03` | `DB`, `INT` | 21 rows (Section 13.4) |
| NP-05 | After revocation, role change or business switch, retrieval and export are denied at delivery time; no bearer URL or cached response outlives revocation | `EC14-RTV-01`, `EC14-SRC-02` | `DB`, `CONC`, `INT` | 36 rows (Section 13.4) |
| NP-06 | Effective-access inventory of every new or replaced protected object by object type (tables, views, functions and overloads, sequences, default privileges): no `PUBLIC`/`anon` privilege, intended grants only, view invoker semantics, `SECURITY DEFINER` only under `EIS-ISO-10`, created hardened in one migration boundary | `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-VER-01` | `INV` | 112 rows (Section 13.4) |
| NP-07 | No ordinary authenticated client has direct `INSERT`, `UPDATE` or `DELETE` on `transactions` or `transaction_correction_events`; the legacy `correct_transaction` identity and superseded overloads are dropped or have `EXECUTE` revoked; no alternate protected write path or dual-write window exists | `EC14-CMD-01`, `EC14-CMD-02`, `EC14-CMD-03`, `EC14-MIG-01`, `EC14-VER-01`, `EC14-HOLD-03` | `INV`, `DB` | 71 rows (Section 13.4) |
| NP-08 | No AI, document, import or conversation path writes a Ledger row except through the governed create command; a direct write attempt fails | `EC14-CMD-01`, `EC14-ADP-01`, `EC14-SEC-01` | `DB`, `INT` | 61 rows (Section 13.4) |
| NP-09 | No migration, command, correction or job converts, reinterprets or duplicates an existing or future `sale + payment_method=credit` row; no backfill creates `credit` rows; historical sale and purchase classifications and totals are unchanged | `EC14-LDG-01`, `EC14-LDG-04`, `EC14-MIG-01`, `EC14-MIG-05` | `DB`, `REH`, `REG` | 97 rows (Section 13.4) |
| NP-10 | Standalone `credit` and `repayment` never contribute to a sales or income measure; a credit-method sale counts once; generic income is never labelled sales and generic expense never purchases in any reader, AI answer or export | `EC14-LDG-05`, `EC14-TOT-01`, `EC14-SRC-02` | `DB`, `UNIT` | 32 rows (Section 13.4) |
| NP-11 | A repayment whose target no longer exists, belongs to another business, is no longer a standalone credit or credit-method sale, or has materially changed since review stops and returns to clarification/re-confirmation | `EC14-LDG-03` | `DB`, `CONC` | 13 rows (Section 13.4) |
| NP-12 | A `credit` row without an explicit direction, or with `amount <= 0`, is rejected; direction is never inferred from sign | `EC14-LDG-02` | `UNIT`, `DB` | 4 rows (Section 13.4) |
| NP-13 | No per-customer outstanding balance, ageing, allocation, overpayment or reconciliation is computed or shown, and no customer/supplier identity table or directory search is created (`3-§9-12` stays SB-P-1.16) | `EC14-LDG-03`, `EC14-SRC-01`, `EC14-SRC-03` | `UNIT`, `DB` | 26 rows (Section 13.4) |
| NP-14 | A duplicate submission or retry with the same request key returns the committed outcome with no second write; a matching content fingerprint only surfaces a possible duplicate and never substitutes for the request key or merges across businesses | `EC14-IDM-01`, `EC14-IDM-02` | `DB`, `CONC` | 21 rows (Section 13.4) |
| NP-15 | An unknown commit outcome is reconciled by outcome lookup before any retry and is never re-executed automatically or shown as success | `EC14-IDM-03` | `DB`, `INT` | 6 rows (Section 13.4) |
| NP-16 | A material target change after preview (counterparty reference, amount, type, direction, repayment target, inventory item, quantity, duplicate candidates) invalidates the binding and re-prompts; an internal non-material change does not force re-confirmation | `EC14-CNF-03` | `UNIT`, `DB` | 9 rows (Section 13.4) |
| NP-17 | A revocation, role or membership change or business switch between preview and commit blocks the commit even when the target is unchanged | `EC14-CNF-04` | `DB`, `CONC` | 5 rows (Section 13.4) |
| NP-18 | An ambiguous, low-confidence or unreadable field never commits; missing fields are surfaced, never invented; a safe rejection does not block unrelated work | `EC14-UDI-07`, `EC14-CNF-01`, `EC14-CNF-02` | `UNIT`, `INT` | 66 rows (Section 13.4) |
| NP-19 | Wrong type, oversize, decompression-bomb, magic-byte mismatch, encrypted or macro-bearing input is rejected before any parse or storage commit with a typed recoverable state | `EC14-UDI-01`, `EC14-UDI-02` | `UNIT`, `INT` | 33 rows (Section 13.4) |
| NP-20 | A PDF or image with embedded script, form action, external URL, remote resource or embedded attachment executes nothing, fetches nothing and is not traversed recursively; a supported embedded object re-enters intake as its own item | `EC14-UDI-04` | `UNIT`, `INT`, `NET` | 15 rows (Section 13.4) |
| NP-21 | Inbound spreadsheet formulas are never evaluated; outbound exports neutralize only formula-like untrusted text and preserve typed numbers, dates, booleans and negative numbers (round-trip regression) | `EC14-UDI-05`, `EC14-SRC-02` | `UNIT`, `INT` | 8 rows (Section 13.4) |
| NP-22 | English, Malayalam, Manglish/transliterated and mixed injection fixtures in OCR text, filenames/metadata, headers and line items cannot change intent, tool availability, destination or authority | `EC14-UDI-06` | `UNIT`, `EVAL` | 17 rows (Section 13.4) |
| NP-23 | Interpretation output that fails the per-type schema, or carries authority-bearing fields, is a failure state and is never merged into a proposal | `EC14-UDI-07` | `UNIT` | 31 rows (Section 13.4) |
| NP-24 | Only the needed pages or regions and the business context the actor may read reach the gateway; Owner-only aggregates never enter context for non-Owner principals | `EC14-UDI-08` | `UNIT`, `INT` | 3 rows (Section 13.4) |
| NP-25 | No merchant document reaches an AI provider without an accepted versioned configuration identity, or after a material provider, model, account, routing or data-control change until re-verification; no direct provider SDK exists in `udi` | `EC14-UDI-09`, `EC14-PRV-01` | `UNIT`, `INT`, `REPO` | 98 rows (Section 13.4) |
| NP-26 | With AI unavailable or disabled, deterministic CSV/XLSX intake keeps working and AI never silently reinterprets cell values | `EC14-UDI-03`, `EC14-UDI-09` | `UNIT`, `INT` | 20 rows (Section 13.4) |
| NP-27 | Original bytes are never modified; replacement appends a version; a correction records prior and new values append-only and never converts a credit-method sale into a `credit` row | `EC14-CMD-02`, `EC14-CAB-02`, PQ-10 accountable row `BP-§10.3-W11` (WS-C) | `UNIT`, `DB` | 24 rows (Section 13.4) |
| NP-28 | Domain provenance, storage metrics and logs hold identifiers, security metadata and aggregates only, never document content; allow/deny evidence and durable denials are recorded through SB-P-1.12 `authority_events`, not copied into domain provenance | `EC14-CAB-03`, `EC14-STO-09` | `DB`, `AUDIT`, `INV` | 17 rows (Section 13.4) |
| NP-29 | No public bucket or object; no guessable key confers access; provider keys and URLs are never business identity or authority; provider credentials stay server-side and least-privilege | `EC14-STO-01`, `EC14-STO-04` | `OBJ`, `INV` | 39 rows (Section 13.4) |
| NP-30 | Nothing is presented as stored before `verified`; an upload to an unauthorized key, an oversize upload or an integrity mismatch never reaches `verified`; CORS is origin-limited | `EC14-STO-02` | `INT`, `OBJ` | 14 rows (Section 13.4) |
| NP-31 | Metadata/object mismatch and orphans are detected and reconciled without inventing content or deleting a confirmed record; held metadata with a missing object raises an integrity incident | `EC14-STO-05`, `EC14-RET-01` | `INT`, `OBJ`, `DB` | 19 rows (Section 13.4) |
| NP-32 | An unconfirmed upload is discarded after the configured bounded grace period unless an approved hold applies; a held object is never expired; no durable raw-audio object class exists | `EC14-RET-01`, `EC14-RET-02` | `OBJ`, `DB` | 11 rows (Section 13.4) |
| NP-33 | Deletion runs only as a kernel-checked, audited command with deletion proof that retains no deleted content; a legal or dispute hold blocks deletion and lifecycle eligibility; no retention duration is coded | `EC14-STO-07`, `EC14-RET-03` | `DB`, `AUDIT` | 17 rows (Section 13.4) |
| NP-34 | No Super Admin or support path reads merchant documents or Ledger detail outside SB-P-1.12 purpose-limited support grants | `EC14-SEC-04` | `DB`, `INV` | 4 rows (Section 13.4) |
| NP-35 | Parser, AI, storage or provider failure blocks only the affected operation, preserves the merchant's input, never fails open, never shows success before the authoritative outcome and never creates a partially trusted record | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-FAIL-03` | `UNIT`, `INT` | 48 rows (Section 13.4) |
| NP-36 | The storage disable switch stops new uploads while verified objects stay retrievable through the server-mediated path; rollback keeps committed records intact | `EC14-PRV-02` | `INT`, `OBJ` | 124 rows (Section 13.4) |
| NP-37 | No storage or provider credential appears in a `VITE_*` value, the client bundle, the repository, a log or an error payload | `EC14-ENV-01` | `REPO`, `INV` | 3 rows (Section 13.4) |
| NP-38 | Opening-stock lines create no financial event and never overwrite an item that already has opening stock | `EC14-ADP-02` | `DB` | 8 rows (Section 13.4) |
| NP-39 | A multi-row import revoked mid-run keeps committed rows and stops later rows with exact completed/failed/remaining counts; resumption skips committed rows by fingerprint and creates no duplicate Ledger or opening-stock write | `EC14-ADP-02`, `EC14-MIG-03` | `DB`, `CONC` | 23 rows (Section 13.4) |
| NP-40 | Per-row must-not check: the behaviour the row prohibits is absent, by design inspection and a negative test where testable | `EC14-NG-01`, every `NEG`-kind row | `DOC`, `UNIT` | 96 rows (Section 13.4) |
| NP-41 | No second parser stack, storage universe, Business Memory copy or channel-specific store exists (repository and catalog inventory) | `EC14-ARC-02`, `EC14-UDI-01`, `EC14-STO-08`, PQ-10 accountable row `5-§18-8a` (WS-B) | `INV`, `REPO` | 39 rows (Section 13.4) |
| NP-42 | A later-mission slice (SB-P-1.15 Scheduler and notifications, SB-P-1.17 stock effects, SB-P-1.19 lifecycle export, SB-P-1.20 WhatsApp) is not built here and returns dependency-blocked | `EC14-HOLD-04`, `EC14-HOLD-11` | `UNIT`, `DOC` | 13 rows (Section 13.4) |
| NP-43 | A write against a linked record that has changed or been removed since it was reviewed (stale link) stops safely and returns to review or clarification; it never writes against the stale target and does not block unrelated work (Contract 3 §17) | PQ-10 accountable row `3-§17-8` (WS-G) | `DB`, `CONC` | 1 rows (Section 13.4) |
| NP-44 | A failed downstream notification never rolls back, duplicates or blocks the committed Ledger record or unrelated operations; notification delivery itself (SB-P-1.15) is not built here (Contract 3 §17) | PQ-10 accountable row `3-§17-7` (WS-G) | `INT`, `DOC` | 1 rows (Section 13.4) |

## 7. Validation Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-VAL-01 | Interpretation output is validated per document-type schema; invalid output is a failure state; missing fields surfaced, never invented. | `UNIT`, `INT` | `EC14-UDI-07`; NP-23, NP-18 |
| VC-VAL-02 | Intake validation covers type, size, decompressed size, magic bytes, encryption and macros per kind. | `UNIT`, `INT` | `EC14-UDI-02`; NP-19 |
| VC-VAL-03 | Multilingual and document-borne injection fixtures (OCR text, filenames/metadata, headers, line items) cannot change intent, tools, destination or authority. | `UNIT`, `EVAL` | `EC14-UDI-06`; NP-22 |
| VC-VAL-04 | Formula round-trip and negative-number regressions pass for CSV/XLSX import and export. | `UNIT`, `REG` | `EC14-UDI-05`, `EC14-SRC-02`; NP-21 |

## 8. Concurrency and Idempotency Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-CONC-01 | Concurrent duplicate confirmations of one binding produce one write; replay returns the committed outcome. | `CONC` | `EC14-IDM-01`, `EC14-CNF-03`; NP-14 |
| VC-CONC-02 | Revocation racing commit rejects the commit under SB-P-1.12 EIS-CNF-02 serialization. | `CONC` | `EC14-CNF-04`; NP-17 |
| VC-CONC-03 | A repayment target changed or removed concurrently with commit stops the commit. | `CONC`, `DB` | `EC14-LDG-03`; NP-11 |
| VC-CONC-04 | Multi-row import resumption after revocation creates no duplicate Ledger or opening-stock write. | `CONC`, `DB` | `EC14-MIG-03`, `EC14-ADP-02`; NP-39 |
| VC-CONC-05 | Timeout after dispatch enters unknown outcome; lookup reconciles; no automatic re-execution. | `DB`, `INT` | `EC14-IDM-03`; NP-15 |

## 9. Performance Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-PERF-01 | Retrieval and recording responsiveness meets Contract 22 §21 targets without bypassing authorization; caching and thumbnails only where privacy-safe. | `PERF`, `RT` | `EC14-PERF-01` |
| VC-PERF-02 | Query plans and index validity are captured for M14-4 on representative data. | `PERF`, `REH` | `EC14-MIG-04` |
| VC-PERF-03 | Production AI and provider latency is measured only against an accepted configuration identity (EIS Section 28 fact until evidenced). | `PERF`, `PROV` | `EC14-PRV-01` |

## 10. Automated Testing Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-TEST-01 | Fast Gate: lint, typecheck, build and unit tests for classification, credit direction, formula neutralization, schema validation, injection fixtures, fingerprint material/non-material rules and layered states. | `UNIT`, `REPO` | `EC14-VER-01` |
| VC-TEST-02 | Full Assurance on the isolated test project: effective-access inventory, direct-DML and role negatives, revocation, idempotency, unknown outcome, repayment-target change, mixed-dataset totals and storage states. | `DB`, `CONC`, `INV` | `EC14-VER-01` |
| VC-TEST-03 | Ledger regression baseline proves historical sale and purchase classifications and totals unchanged before and after widening. | `REG`, `DB` | `EC14-MIG-05`, `EC14-TOT-01`; NP-09 |
| VC-TEST-04 | Live provider evaluation runs outside CI against a recorded configuration identity; never with live keys in CI. | `EVAL` | `EC14-PRV-01`, `EC14-UDI-06` |
| VC-TEST-05 | Existing suites and routes re-run green at every checkpoint. | `REG` | Process item; no FCTM row; adds no behaviour |
| VC-TEST-06 | Missing GitHub Actions runs are recorded as missing; local gate output is recorded with exact commands. | `REPO` | Process item; no FCTM row; adds no behaviour |

## 11. Evidence Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-EV-01 | Evidence lives under `docs/implementation/SB-P-1.14/evidence/`, manifest-first, with provenance per package template Section 13. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-EV-02 | `DR2` storage evidence pack (account, environment-separated buckets, server-held credentials, CORS, presign/header enforcement, lifecycle and hold exclusion, revocable delivery if any, monitoring, disable switch, rollback) is accepted before any merchant object is stored. | `PROV` | `EC14-PRV-02` |
| VC-EV-03 | AI provider evidence pack is accepted for the configuration identity in use before any merchant document flows. | `PROV` | `EC14-PRV-01` |
| VC-EV-04 | `D12`, `D13` and `DTX` consumption evidence is accepted by Mission Control for each consumed family before dependent rows are built. | `PROV`, `DOC` | `EC14-HOLD-01` to `EC14-HOLD-03` |
| VC-EV-05 | No EIS Section 28 fact is stated as verified without separately authorized evidence. | `DOC` | Process item; no FCTM row; adds no behaviour |

## 12. Completion Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-COMP-01 | Builder Completion Report records a status per assigned row; no builder self-verification. | `REPO`, `DOC` | Process item; no FCTM row; adds no behaviour |
| VC-COMP-02 | `FPDR-1` and `FPDR-4` acceptance evidence shows a repayment linked to a standalone credit and one linked to a credit-method sale, the sale unchanged and not duplicated, and neither counted in sales or income. | `FRT`, `DB` | `EC14-LDG-03`, `EC14-TOT-01`; RS-03, RS-04 |
| VC-COMP-03 | Completion Report carries the Experience Verification Matrix seeded from Blueprint Section 15.5. | `DOC` | `EC14-VER-02` |

## 13. Product Truth Coverage and Drift Verification

### 13.1 Classification rules

- **Permission, isolation and denial row:** a row whose FCTM kind is `NEG`, or a row realized by any of `EC14-ARC-02`, `EC14-LDG-03`, `EC14-LDG-04`, `EC14-LDG-06`, `EC14-TOT-01`, `EC14-CMD-01`, `EC14-CMD-02`, `EC14-CMD-03`, `EC14-IDM-01`, `EC14-CNF-03`, `EC14-CNF-04`, `EC14-ADP-01`, `EC14-UDI-04`, `EC14-UDI-05`, `EC14-UDI-06`, `EC14-UDI-08`, `EC14-PRV-01`, `EC14-CAB-03`, `EC14-STO-03`, `EC14-STO-04`, `EC14-STO-07`, `EC14-RTV-01`, `EC14-SRC-02`, `EC14-SRC-03`, `EC14-SEC-01`, `EC14-SEC-02`, `EC14-SEC-03`, `EC14-SEC-04`, `EC14-RET-01`, `EC14-RET-02`, `EC14-ENV-01`, `EC14-MIG-02`, `EC14-NG-01`. Each carries at least one named negative-path check; every `NEG` row also carries NP-40.
- **Experience row:** a row whose FCTM kind is `SCN`, `EXP` or `FRV`, a row listed in Blueprint Section 15 (the `EC14-VER-02` rows), or a row realized by a user-visible obligation (`EC14-LDG-05`, `EC14-LDG-06`, `EC14-UX-01`, `EC14-CNF-01`, `EC14-CNF-02`, `EC14-CNF-03`, `EC14-CNF-04`, `EC14-IDM-03`, `EC14-CAB-04`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-FAIL-03`, `EC14-SRC-01`, `EC14-SRC-02`, `EC14-SRC-03`, `EC14-RTV-01`, `EC14-UDI-02`, `EC14-UDI-03`, `EC14-RET-01`, `EC14-CMD-02`, `EC14-PERF-01`). Each carries at least one named runtime scenario.
- **Planned evidence class:** the union of the classes of the row's obligations, negative-path checks and runtime scenarios.
- **Finding and holds:** the Blueprint Section 20.6 Stage 7 finding (documentary, not evidence) and remaining-hold codes. `BLOCKED` and `FOLLOW-UP` rows stay `IN SCOPE`.

### 13.2 Coverage summary

| Measure | Value |
|---|---|
| `IN SCOPE` FCTM rows | 563 |
| Rows with a checklist item and planned evidence class | 563 of 563 |
| Rows missing a checklist item | 0 |
| Permission, isolation and denial rows (rule in 13.1) | 431; all 431 carry a named negative-path check |
| Rows carrying at least one named negative-path check | 541 |
| Experience rows | 261; all 261 carry a named runtime scenario |
| Rows carrying at least one named runtime scenario | 507 |
| Named negative-path checks | 44, each used by at least one row |
| Named runtime scenarios | 23, each used by at least one row |
| `ALREADY DEMONSTRATED` rows | 0 in the FCTM; no regression-only item is needed |
| Rows `BLOCKED` / `FOLLOW-UP` / `PASS` (Stage 7 finding) | 319 / 157 / 87, all `IN SCOPE` |
| Behaviour-adding orphan items | 0 |

### 13.3 Drift and completeness checks to execute

| Item | Check | Planned evidence class | FCTM rows |
|---|---|---|---|
| VC-PT-01 | Every `IN SCOPE` row has an Engineering Contract obligation and a Section 13.4 item, by set difference against the FCTM. | `REPO` | 563 rows via ALL |
| VC-PT-02 | Each row's disposition, build commitment, commercial classification and mission assignment equal the locked FCTM. | `REPO` | 563 rows via ALL |
| VC-PT-03 | No obligation, checklist item, test or built behaviour lacks a row, except the recorded non-behavioural items. | `REPO`, `DOC` | 563 rows via ALL |
| VC-PT-04 | Every permission, isolation and denial row has a named negative-path item, and every experience row a named runtime scenario. | `REPO` | 500 rows; each listed in Section 13.4 |
| VC-PT-05 | The verifier takes its own obligation inventory from the source text and finds no numbered section, obligation or acceptance scenario without a row (Source 18 Section 3.2 item 6). | `DOC` | 563 rows via ALL |
| VC-PT-06 | None of the 20 `OUT OF BUILD SCOPE` rows appears in the built product (must-not-appear checks). | `REPO`, `DOC` | `BP-§16-1`, `BP-§16-2`, `BP-§16-3`, `BP-§16-4`, `BP-§16-5`, `BP-§16-6`, `BP-§16-7`, `BP-§16-8`, `BP-§16-9`, `BP-§16-10`, `BP-§16-11`, `BP-§16-12`, `BP-§16-13`, `BP-§16-14`, `BP-§16-15`, `BP-§16-16`, `BP-§16-17`, `BP-§16-18`, `BP-§16-19`, `BP-§16-20` |
| VC-PT-07 | No row assigned to a later mission or delegated is built here as hidden scope; no authoritative per-customer balance (`3-§9-12`). | `REPO`, `DOC` | 203 non-`IN SCOPE` rows |

| VC-PT-08 | Each PQ-10 row is built by its accountable workstream to its source item under the cited locked EIS text, stays held by its gate obligations, and its named check passes (Engineering Contract Section 13.1). | `REPO`, `DOC`, `DB` | `3-§17-7`, `3-§17-8`, `5-§18-8a`, `BP-§10.3-W11` |
### 13.4 Row-keyed checklist items

| Item | FCTM row | Obligations | Planned evidence class | Negative-path checks | Runtime scenarios | Finding | Holds |
|---|---|---|---|---|---|---|---|
| VC-R-001 | `3-§2-2` | `EC14-UX-01`, `EC14-NG-01` | `UNIT`, `RT`, `REPO`, `DOC` | NP-40 | RS-14 | PASS | — |
| VC-R-002 | `3-§3` | `EC14-LDG-01`, `EC14-UX-01` | `UNIT`, `DB`, `REH`, `RT`, `FRT`, `REG` | NP-09 | RS-03, RS-14 | PASS | — |
| VC-R-003 | `3-§4-1` | `EC14-LDG-01`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09 | RS-03, RS-04, RS-06 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| VC-R-004 | `3-§4-2` | `EC14-LDG-01`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09 | RS-03, RS-04, RS-06 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| VC-R-005 | `3-§4-3` | `EC14-LDG-01`, `EC14-LDG-02`, `EC14-LDG-03`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-11, NP-12, NP-13 | RS-02, RS-03, RS-04, RS-06 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| VC-R-006 | `3-§4-4` | `EC14-LDG-01`, `EC14-LDG-03`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-11, NP-13 | RS-02, RS-03, RS-04, RS-06 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| VC-R-007 | `3-§4-5` | `EC14-LDG-04`, `EC14-MIG-01`, `EC14-NG-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `INV`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `DOC` | NP-07, NP-09, NP-40 | RS-04 | FOLLOW-UP | H-FIN |
| VC-R-008 | `3-§4-6` | `EC14-LDG-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-05` | `UNIT`, `DB`, `INV`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-09 | RS-03, RS-04 | FOLLOW-UP | H-FIN, H-MIG |
| VC-R-009 | `3-§5-1` | `EC14-ARC-02`, `EC14-LDG-05`, `EC14-HOLD-02` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-10, NP-41 | RS-11, RS-14, RS-18 | BLOCKED | H-D13 |
| VC-R-010 | `3-§5-2` | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10 | RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-D13, H-DTX, H-MIG |
| VC-R-011 | `3-§5-3` | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10 | RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-D13, H-DTX, H-MIG |
| VC-R-012 | `3-§5-4` | `EC14-LDG-02`, `EC14-LDG-03`, `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10, NP-11, NP-12, NP-13 | RS-02, RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-D13, H-DTX, H-FIN, H-MIG |
| VC-R-013 | `3-§5-5` | `EC14-LDG-03`, `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10, NP-11, NP-13 | RS-02, RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-D13, H-DTX, H-FIN, H-MIG |
| VC-R-014 | `3-§5-6` | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-02`, `EC14-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10 | RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-D13, H-DTX, H-MIG |
| VC-R-015 | `3-§5-7` | `EC14-UDI-04`, `EC14-ADP-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `NET`, `OBJ`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-08, NP-20, NP-25, NP-36 | RS-01, RS-08 | BLOCKED | H-D12, H-D13, H-PROV, H-STO, H-UDI |
| VC-R-016 | `3-§5-8` | `EC14-UDI-01`, `EC14-UDI-03`, `EC14-PRV-01`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-19, NP-25, NP-26, NP-41 | RS-07, RS-08, RS-16 | BLOCKED | H-D12, H-PROV, H-UDI |
| VC-R-017 | `3-§5-9` | `EC14-UDI-01`, `EC14-NG-01` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `DOC` | NP-19, NP-40, NP-41 | RS-08 | PASS | — |
| VC-R-018 | `3-§5-10` | `EC14-ARC-02`, `EC14-LDG-05`, `EC14-UX-01`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-10, NP-41 | RS-11, RS-14, RS-18 | BLOCKED | H-D12 |
| VC-R-019 | `3-§6-1` | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-UX-01`, `EC14-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10 | RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-DTX, H-MIG |
| VC-R-020 | `3-§6-2` | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10 | RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-DTX, H-MIG |
| VC-R-021 | `3-§6-3` | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10 | RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-DTX, H-MIG |
| VC-R-022 | `3-§6-4` | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10 | RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-DTX, H-MIG |
| VC-R-023 | `3-§6-5` | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10 | RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-DTX, H-MIG |
| VC-R-024 | `3-§6-6` | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10 | RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-DTX, H-MIG |
| VC-R-025 | `3-§6-7` | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10 | RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-DTX, H-MIG |
| VC-R-026 | `3-§6-8` | `EC14-LDG-02`, `EC14-LDG-03`, `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10, NP-11, NP-12, NP-13 | RS-02, RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-DTX, H-FIN, H-MIG |
| VC-R-027 | `3-§6-9` | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10 | RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-DTX, H-MIG |
| VC-R-028 | `3-§6-10` | `EC14-LDG-05`, `EC14-NG-01`, `EC14-HOLD-02` | `UNIT`, `INT`, `DB`, `RT`, `REPO`, `PROV`, `DOC` | NP-10, NP-40 | RS-11, RS-14 | BLOCKED | H-D13 |
| VC-R-029 | `3-§7-1` | `EC14-CNF-01`, `EC14-HOLD-02` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-18 | RS-16 | BLOCKED | H-D13 |
| VC-R-030 | `3-§7-2` | `EC14-CNF-01`, `EC14-HOLD-02` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-18 | RS-16 | BLOCKED | H-D13 |
| VC-R-031 | `3-§7-3` | `EC14-CNF-01`, `EC14-HOLD-02` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-18 | RS-16 | BLOCKED | H-D13 |
| VC-R-032 | `3-§7-4` | `EC14-CNF-01`, `EC14-HOLD-02` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-18 | RS-16 | BLOCKED | H-D13 |
| VC-R-033 | `3-§7-5` | `EC14-CNF-01`, `EC14-HOLD-02` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-18 | RS-16 | BLOCKED | H-D13 |
| VC-R-034 | `3-§7-6` | `EC14-CNF-01`, `EC14-HOLD-02` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-18 | RS-16 | BLOCKED | H-D13 |
| VC-R-035 | `3-§7-7` | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-18, NP-25 | RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-036 | `3-§7-8` | `EC14-IDM-02`, `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `CONC`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-14, NP-18, NP-25 | RS-13, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-037 | `3-§7-9` | `EC14-CNF-01`, `EC14-NG-01` | `UNIT`, `INT`, `RT`, `REPO`, `DOC` | NP-18, NP-40 | RS-16 | PASS | — |
| VC-R-038 | `3-§8-1` | `EC14-CMD-01`, `EC14-CMD-02`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-27 | RS-03, RS-04, RS-06, RS-11 | BLOCKED | H-D13, H-DTX, H-FIN, H-MIG |
| VC-R-039 | `3-§8-2` | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `PROV`, `DOC` | NP-07, NP-27 | RS-11 | BLOCKED | H-D12, H-FIN |
| VC-R-040 | `3-§8-3` | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `PROV`, `DOC` | NP-07, NP-27 | RS-11 | BLOCKED | H-D12, H-FIN |
| VC-R-041 | `3-§8-4` | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `PROV`, `DOC` | NP-07, NP-27 | RS-11 | BLOCKED | H-D12, H-FIN |
| VC-R-042 | `3-§8-5` | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `PROV`, `DOC` | NP-07, NP-27 | RS-11 | BLOCKED | H-D12, H-FIN |
| VC-R-043 | `3-§8-6` | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `PROV`, `DOC` | NP-07, NP-27 | RS-11 | BLOCKED | H-D12, H-FIN |
| VC-R-044 | `3-§8-7` | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `PROV`, `DOC` | NP-07, NP-27 | RS-11 | BLOCKED | H-D12, H-FIN |
| VC-R-045 | `3-§8-8` | `EC14-LDG-03`, `EC14-CMD-01`, `EC14-CMD-02`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-11, NP-13, NP-27 | RS-02, RS-03, RS-04, RS-06, RS-11 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| VC-R-046 | `3-§8-9` | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `PROV`, `DOC` | NP-07, NP-27 | RS-11 | BLOCKED | H-D12, H-FIN |
| VC-R-047 | `3-§8-10` | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `PROV`, `DOC` | NP-07, NP-27 | RS-11 | BLOCKED | H-D12, H-FIN |
| VC-R-048 | `3-§8-11` | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `PROV`, `DOC` | NP-07, NP-27 | RS-11 | BLOCKED | H-D12, H-FIN |
| VC-R-049 | `3-§8-12` | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `PROV`, `DOC` | NP-07, NP-27 | RS-11 | BLOCKED | H-D12, H-FIN |
| VC-R-050 | `3-§8-13` | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `PROV`, `DOC` | NP-07, NP-27 | RS-11 | BLOCKED | H-D12, H-FIN |
| VC-R-051 | `3-§8-14` | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `PROV`, `DOC` | NP-07, NP-27 | RS-11 | BLOCKED | H-D12, H-FIN |
| VC-R-052 | `3-§8-15` | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `PROV`, `DOC` | NP-07, NP-27 | RS-11 | BLOCKED | H-D12, H-FIN |
| VC-R-053 | `3-§8-16` | `EC14-LDG-04`, `EC14-CMD-02`, `EC14-NG-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `DOC` | NP-07, NP-09, NP-27, NP-40 | RS-04, RS-11 | FOLLOW-UP | H-FIN |
| VC-R-054 | `3-§9-1` | `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `PERF`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-13 | RS-18, RS-19 | BLOCKED | H-D12 |
| VC-R-055 | `3-§9-2` | `EC14-SRC-01`, `EC14-SRC-03`, `EC14-MIG-04`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `PERF`, `REH`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-13 | RS-03, RS-18, RS-19 | BLOCKED | H-D12 |
| VC-R-056 | `3-§9-4` | `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `PERF`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-13 | RS-18, RS-19 | BLOCKED | H-D12 |
| VC-R-057 | `3-§9-5` | `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `PERF`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-13 | RS-18, RS-19 | BLOCKED | H-D12 |
| VC-R-058 | `3-§9-6` | `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `PERF`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-13 | RS-18, RS-19 | BLOCKED | H-D12 |
| VC-R-059 | `3-§9-7` | `EC14-LDG-03`, `EC14-SRC-01`, `EC14-SRC-03`, `EC14-MIG-04`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `EVAL`, `PERF`, `REH`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-11, NP-13 | RS-02, RS-03, RS-18, RS-19 | BLOCKED | H-D12, H-FIN |
| VC-R-060 | `3-§9-8` | `EC14-SRC-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-MIG-04`, `EC14-HOLD-01`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `OBJ`, `PERF`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-06, NP-13, NP-36 | RS-18, RS-19 | BLOCKED | H-D12, H-STO, H-BIRTH |
| VC-R-061 | `3-§9-9` | `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-04`, `EC14-HOLD-11` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `PERF`, `REH`, `RT`, `DOC` | NP-01, NP-13, NP-42 | RS-18, RS-19 | FOLLOW-UP | H-LATER |
| VC-R-062 | `3-§9-10` | `EC14-TOT-01`, `EC14-SRC-01`, `EC14-MIG-04`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-02` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `PERF`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-01, NP-10, NP-13 | RS-03, RS-18, RS-19 | BLOCKED | H-D12, H-D13 |
| VC-R-063 | `3-§9-11` | `EC14-TOT-01`, `EC14-SRC-01`, `EC14-MIG-04`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-02` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `PERF`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-01, NP-10, NP-13 | RS-03, RS-18, RS-19 | BLOCKED | H-D12, H-D13 |
| VC-R-064 | `3-§9-13` | `EC14-RTV-01`, `EC14-SRC-01`, `EC14-PRV-02`, `EC14-MIG-04`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `EVAL`, `OBJ`, `PERF`, `REH`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-05, NP-13, NP-36 | RS-05, RS-18, RS-19 | BLOCKED | H-D12, H-D13, H-STO, H-REVOKE |
| VC-R-065 | `3-§9-14` | `EC14-ARC-02`, `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-02` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `PERF`, `REH`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-13, NP-41 | RS-18, RS-19 | BLOCKED | H-D13 |
| VC-R-066 | `3-§10-1` | `EC14-RTV-01`, `EC14-SRC-02`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-03, NP-05, NP-10, NP-21 | RS-05, RS-10 | BLOCKED | H-D12, H-REVOKE |
| VC-R-067 | `3-§10-2` | `EC14-TOT-01`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `INV`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-10 | RS-03 | BLOCKED | H-D12, H-FIN |
| VC-R-068 | `3-§10-3` | `EC14-TOT-01`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `INV`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-10 | RS-03 | BLOCKED | H-D12, H-FIN |
| VC-R-069 | `3-§10-4` | `EC14-TOT-01`, `EC14-HOLD-01` | `UNIT`, `DB`, `INV`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-10 | RS-03 | BLOCKED | H-D12 |
| VC-R-070 | `3-§10-5` | `EC14-LDG-02`, `EC14-LDG-03`, `EC14-TOT-01`, `EC14-SRC-03`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-10, NP-11, NP-12, NP-13 | RS-02, RS-03 | BLOCKED | H-D12, H-FIN |
| VC-R-071 | `3-§10-6` | `EC14-UDI-05`, `EC14-RTV-01`, `EC14-SRC-02`, `EC14-HOLD-01`, `EC14-HOLD-06` | `UNIT`, `INT`, `DB`, `CONC`, `EVAL`, `OBJ`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-03, NP-05, NP-10, NP-21 | RS-05, RS-07, RS-10 | BLOCKED | H-D12, H-REVOKE, H-UDI |
| VC-R-072 | `3-§10-7` | `EC14-UDI-05`, `EC14-RTV-01`, `EC14-SRC-02`, `EC14-HOLD-01`, `EC14-HOLD-06` | `UNIT`, `INT`, `DB`, `CONC`, `EVAL`, `OBJ`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-03, NP-05, NP-10, NP-21 | RS-05, RS-07, RS-10 | BLOCKED | H-D12, H-REVOKE, H-UDI |
| VC-R-073 | `3-§10-8` | `EC14-RTV-01`, `EC14-SRC-02`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-03, NP-05, NP-10, NP-21 | RS-05, RS-10 | BLOCKED | H-D12, H-REVOKE |
| VC-R-074 | `3-§10-9` | `EC14-TOT-01`, `EC14-UDI-05`, `EC14-RTV-01`, `EC14-SRC-02`, `EC14-NG-01`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `OBJ`, `RT`, `FRT`, `REG`, `REPO`, `PROV`, `DOC` | NP-01, NP-03, NP-05, NP-10, NP-21, NP-40 | RS-03, RS-05, RS-07, RS-10 | BLOCKED | H-D12, H-REVOKE, H-FIN |
| VC-R-075 | `3-§11-1` | `EC14-LDG-06`, `EC14-SEC-03`, `EC14-HOLD-01` | `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-03, NP-04 | RS-05, RS-21 | BLOCKED | H-D12 |
| VC-R-076 | `3-§11-2` | `EC14-LDG-06`, `EC14-SEC-03`, `EC14-HOLD-01` | `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-03, NP-04 | RS-05, RS-21 | BLOCKED | H-D12 |
| VC-R-077 | `3-§11-3` | `EC14-LDG-06`, `EC14-SEC-03`, `EC14-HOLD-01` | `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-03, NP-04 | RS-05, RS-21 | BLOCKED | H-D12 |
| VC-R-078 | `3-§11-4` | `EC14-LDG-06`, `EC14-SEC-03`, `EC14-NG-01`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `REPO`, `PROV`, `DOC` | NP-03, NP-04, NP-40 | RS-05, RS-21 | BLOCKED | H-D12 |
| VC-R-079 | `3-§11-5` | `EC14-LDG-06`, `EC14-SEC-03`, `EC14-NG-01`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `REPO`, `PROV`, `DOC` | NP-03, NP-04, NP-40 | RS-05, RS-21 | BLOCKED | H-D12 |
| VC-R-080 | `3-§11-7` | `EC14-LDG-06`, `EC14-SEC-01`, `EC14-SEC-03`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `PROV`, `DOC` | NP-01, NP-03, NP-04, NP-08 | RS-05, RS-06, RS-21 | BLOCKED | H-D12 |
| VC-R-081 | `3-§12-2` | `EC14-ARC-02`, `EC14-HOLD-02` | `INT`, `DB`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-41 | RS-18 | BLOCKED | H-D13 |
| VC-R-082 | `3-§12-3` | `EC14-ARC-02`, `EC14-UX-01`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-41 | RS-14, RS-18 | BLOCKED | H-D12 |
| VC-R-083 | `3-§12-4` | `EC14-ARC-02`, `EC14-NG-01`, `EC14-HOLD-02` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-40, NP-41 | RS-18 | BLOCKED | H-D13 |
| VC-R-084 | `3-§12-5` | `EC14-ARC-02` | `INT`, `DB`, `INV`, `RT`, `REPO` | NP-01, NP-41 | RS-18 | PASS | — |
| VC-R-085 | `3-§14-2` | `EC14-ARC-02` | `INT`, `DB`, `INV`, `RT`, `REPO` | NP-01, NP-41 | RS-18 | PASS | — |
| VC-R-086 | `3-§15-1` | `EC14-ARC-02` | `INT`, `DB`, `INV`, `RT`, `REPO` | NP-01, NP-41 | RS-18 | PASS | — |
| VC-R-087 | `3-§15-2` | `EC14-ARC-02`, `EC14-HOLD-02` | `INT`, `DB`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-41 | RS-18 | BLOCKED | H-D13 |
| VC-R-088 | `3-§15-3` | `EC14-ARC-02`, `EC14-HOLD-02` | `INT`, `DB`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-41 | RS-18 | BLOCKED | H-D13 |
| VC-R-089 | `3-§15-4` | `EC14-ARC-02`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-41 | RS-18 | BLOCKED | H-D12 |
| VC-R-090 | `3-§15-5` | `EC14-ARC-02`, `EC14-HOLD-02` | `INT`, `DB`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-41 | RS-18 | BLOCKED | H-D13 |
| VC-R-091 | `3-§16-1` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-092 | `3-§16-2` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-093 | `3-§16-3` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-094 | `3-§16-4` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-095 | `3-§16-5` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-096 | `3-§16-6` | `EC14-IDM-02`, `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `CONC`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-14, NP-18, NP-23, NP-25 | RS-01, RS-13, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-097 | `3-§16-7` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-098 | `3-§16-8` | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | `UNIT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-22, NP-40 | RS-17 | BLOCKED | H-D13, H-UDI |
| VC-R-099 | `3-§16-9` | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | `UNIT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-22, NP-40 | RS-17 | BLOCKED | H-D13, H-UDI |
| VC-R-100 | `3-§16-10` | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | `UNIT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-22, NP-40 | RS-17 | BLOCKED | H-D13, H-UDI |
| VC-R-101 | `3-§16-11` | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | `UNIT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-22, NP-40 | RS-17 | BLOCKED | H-D13, H-UDI |
| VC-R-102 | `3-§16-12` | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | `UNIT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-22, NP-40 | RS-17 | BLOCKED | H-D13, H-UDI |
| VC-R-103 | `3-§16-13` | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | `UNIT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-22, NP-40 | RS-17 | BLOCKED | H-D13, H-UDI |
| VC-R-104 | `3-§16-14` | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | `UNIT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-22, NP-40 | RS-17 | BLOCKED | H-D13, H-UDI |
| VC-R-105 | `3-§17-1` | `EC14-IDM-01`, `EC14-IDM-03` | `INT`, `DB`, `CONC`, `RT` | NP-14, NP-15 | RS-13 | FOLLOW-UP | H-IDEM |
| VC-R-106 | `3-§17-2` | `EC14-IDM-01`, `EC14-IDM-03`, `EC14-HOLD-01` | `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-14, NP-15 | RS-13 | BLOCKED | H-D12, H-IDEM |
| VC-R-107 | `3-§17-3` | `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `REPO`, `PROV`, `DOC` | NP-25 | — | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-108 | `3-§17-4` | `EC14-CNF-01` | `UNIT`, `INT`, `RT` | NP-18 | RS-16 | PASS | — |
| VC-R-109 | `3-§17-5` | `EC14-CNF-01` | `UNIT`, `INT`, `RT` | NP-18 | RS-16 | PASS | — |
| VC-R-110 | `3-§17-6` | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `PROV`, `DOC` | NP-07, NP-27 | RS-11 | BLOCKED | H-D12, H-FIN |
| VC-R-111 | `3-§17-7` | `EC14-HOLD-04`, `EC14-HOLD-11` | `UNIT`, `INT`, `DOC` | NP-42, NP-44 | — | FOLLOW-UP | H-LATER |
| VC-R-112 | `3-§17-8` | `EC14-HOLD-01` | `DB`, `CONC`, `PROV`, `DOC` | NP-43 | — | BLOCKED | H-D12 |
| VC-R-113 | `3-§17-9` | `EC14-SEC-01`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `PROV`, `DOC` | NP-01, NP-08 | RS-06, RS-21 | BLOCKED | H-D12 |
| VC-R-114 | `3-§17-10` | `EC14-SEC-01`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `PROV`, `DOC` | NP-01, NP-08 | RS-06, RS-21 | BLOCKED | H-D12 |
| VC-R-115 | `3-§17-11` | `EC14-IDM-03`, `EC14-FAIL-01`, `EC14-FAIL-02` | `UNIT`, `INT`, `DB`, `RT` | NP-15, NP-35 | RS-12, RS-13 | FOLLOW-UP | H-STATE |
| VC-R-116 | `3-§18-1` | `EC14-LDG-06`, `EC14-SEC-01`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `PROV`, `DOC` | NP-01, NP-03, NP-04, NP-08 | RS-06, RS-21 | BLOCKED | H-D12 |
| VC-R-117 | `3-§18-2` | `EC14-LDG-06`, `EC14-SEC-01`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `PROV`, `DOC` | NP-01, NP-03, NP-04, NP-08 | RS-06, RS-21 | BLOCKED | H-D12 |
| VC-R-118 | `3-§18-3` | `EC14-LDG-06`, `EC14-CMD-02`, `EC14-SEC-01`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `PROV`, `DOC` | NP-01, NP-03, NP-04, NP-07, NP-08, NP-27 | RS-06, RS-11, RS-21 | BLOCKED | H-D12 |
| VC-R-119 | `3-§18-5` | `EC14-LDG-06`, `EC14-SEC-01`, `EC14-SEC-04`, `EC14-NG-01`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `AUDIT`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-03, NP-04, NP-08, NP-34, NP-40 | RS-06, RS-21 | BLOCKED | H-D12 |
| VC-R-120 | `3-§18-6` | `EC14-LDG-06`, `EC14-SEC-01`, `EC14-SEC-04`, `EC14-NG-01` | `UNIT`, `INT`, `DB`, `INV`, `AUDIT`, `RT`, `REPO`, `DOC` | NP-01, NP-03, NP-04, NP-08, NP-34, NP-40 | RS-06, RS-21 | PASS | — |
| VC-R-121 | `3-§19-1` | `EC14-LDG-01`, `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10 | RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-D13, H-DTX, H-FIN, H-MIG |
| VC-R-122 | `3-§19-2` | `EC14-LDG-01`, `EC14-LDG-03`, `EC14-CMD-01`, `EC14-SRC-03`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-11, NP-13 | RS-02, RS-03, RS-04, RS-06 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| VC-R-123 | `3-§19-3` | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10 | RS-03, RS-04, RS-06, RS-11, RS-14 | BLOCKED | H-D13, H-DTX, H-MIG |
| VC-R-124 | `3-§19-4` | `EC14-CNF-03`, `EC14-ADP-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-07`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `CONC`, `OBJ`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-08, NP-16, NP-25, NP-36 | RS-01, RS-02 | BLOCKED | H-D12, H-PROV, H-STO, H-FPRINT |
| VC-R-125 | `3-§19-5` | `EC14-CNF-01`, `EC14-VER-02`, `EC14-HOLD-02` | `UNIT`, `INT`, `RT`, `FRT`, `PROV`, `DOC` | NP-18 | RS-16 | BLOCKED | H-D13 |
| VC-R-126 | `3-§19-6` | `EC14-IDM-01`, `EC14-VER-02`, `EC14-HOLD-01` | `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-14 | RS-13 | BLOCKED | H-D12, H-IDEM |
| VC-R-127 | `3-§19-7` | `EC14-CMD-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-07, NP-27 | RS-11 | BLOCKED | H-D12, H-FIN |
| VC-R-128 | `3-§19-8` | `EC14-SRC-01`, `EC14-VER-02`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-13 | RS-18 | BLOCKED | H-D12 |
| VC-R-129 | `3-§19-9` | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `OBJ`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-05, NP-36 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-STO, H-REVOKE |
| VC-R-130 | `3-§19-10` | `EC14-LDG-06`, `EC14-VER-02`, `EC14-HOLD-01` | `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-03, NP-04 | RS-21 | BLOCKED | H-D12 |
| VC-R-131 | `3-§19-11` | `EC14-LDG-06`, `EC14-VER-02`, `EC14-HOLD-01` | `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-03, NP-04 | RS-21 | BLOCKED | H-D12 |
| VC-R-132 | `3-§19-12` | `EC14-TOT-01`, `EC14-SRC-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-03, NP-05, NP-10, NP-21 | RS-03, RS-10 | BLOCKED | H-D12, H-FIN |
| VC-R-133 | `3-§19-13a` | `EC14-ARC-02`, `EC14-VER-02`, `EC14-HOLD-02` | `INT`, `DB`, `INV`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-01, NP-41 | RS-18 | BLOCKED | H-D13 |
| VC-R-134 | `3-§19-14` | `EC14-SEC-01`, `EC14-VER-02`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-08 | RS-06, RS-21 | BLOCKED | H-D12 |
| VC-R-135 | `3-§20-1` | `EC14-LDG-04`, `EC14-NG-01` | `UNIT`, `DB`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `DOC` | NP-09, NP-40 | RS-04 | PASS | — |
| VC-R-136 | `3-§20-2` | `EC14-LDG-04`, `EC14-NG-01` | `UNIT`, `DB`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `DOC` | NP-09, NP-40 | RS-04 | PASS | — |
| VC-R-137 | `3-§20-3` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-138 | `3-§20-4` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-139 | `3-§20-5` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-140 | `3-§20-6` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-141 | `3-§22-1` | `EC14-LDG-04`, `EC14-CMD-01`, `EC14-CMD-03`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09 | RS-03, RS-04, RS-06 | BLOCKED | H-DTX, H-MIG |
| VC-R-142 | `3-§22-2` | `EC14-LDG-04`, `EC14-CMD-01`, `EC14-CMD-03`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09 | RS-03, RS-04, RS-06 | BLOCKED | H-DTX, H-MIG |
| VC-R-143 | `5-§2-2` | `EC14-UDI-06`, `EC14-NG-01` | `UNIT`, `EVAL`, `RT`, `REPO`, `DOC` | NP-22, NP-40 | RS-17 | PASS | — |
| VC-R-144 | `5-§3-1` | `EC14-UDI-01`, `EC14-PRV-01`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `INV`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-19, NP-25, NP-41 | RS-08 | BLOCKED | H-D12, H-PROV, H-UDI |
| VC-R-145 | `5-§3-2` | `EC14-UDI-07`, `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-146 | `5-§3-3` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-147 | `5-§4-1` | `EC14-UDI-02`, `EC14-UDI-04`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `NET`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-19, NP-20, NP-25, NP-36 | RS-08 | FOLLOW-UP | H-PROV, H-STO, H-UDI |
| VC-R-148 | `5-§4-2` | `EC14-UDI-02`, `EC14-UDI-04`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `NET`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-19, NP-20, NP-25, NP-36 | RS-08 | FOLLOW-UP | H-PROV, H-STO, H-UDI |
| VC-R-149 | `5-§4-3` | `EC14-UDI-02`, `EC14-UDI-04`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `NET`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-19, NP-20, NP-25, NP-36 | RS-08 | FOLLOW-UP | H-PROV, H-STO, H-UDI |
| VC-R-150 | `5-§4-4` | `EC14-UDI-02`, `EC14-UDI-03`, `EC14-UDI-05` | `UNIT`, `INT`, `DB`, `RT`, `REG` | NP-19, NP-21, NP-26 | RS-07, RS-08, RS-10, RS-16 | PASS | — |
| VC-R-151 | `5-§4-5` | `EC14-UDI-02`, `EC14-UDI-03`, `EC14-UDI-05` | `UNIT`, `INT`, `DB`, `RT`, `REG` | NP-19, NP-21, NP-26 | RS-07, RS-08, RS-10, RS-16 | PASS | — |
| VC-R-152 | `5-§4-6` | `EC14-UDI-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-19, NP-25 | RS-08 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-153 | `5-§4-7` | `EC14-UDI-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-19, NP-25 | RS-08 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-154 | `5-§4-8` | `EC14-UDI-02`, `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `NET`, `RT`, `REPO`, `PROV`, `DOC` | NP-19, NP-20, NP-25 | RS-08 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-155 | `5-§4-9` | `EC14-UDI-02`, `EC14-ADP-02`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `DOC` | NP-19, NP-38, NP-39 | RS-07, RS-08 | FOLLOW-UP | H-FIN |
| VC-R-156 | `5-§4-14` | `EC14-UDI-01`, `EC14-UDI-02` | `UNIT`, `INT`, `INV`, `RT`, `REPO` | NP-19, NP-41 | RS-08 | PASS | — |
| VC-R-157 | `5-§5-1` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-158 | `5-§5-2` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-159 | `5-§5-3` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-160 | `5-§5-4` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-161 | `5-§5-5` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-162 | `5-§5-6` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-163 | `5-§5-7` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-164 | `5-§5-8` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-165 | `5-§5-9` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-NG-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25, NP-40 | RS-01, RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-166 | `5-§6-1` | `EC14-CAB-01`, `EC14-RET-01`, `EC14-RET-03`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-08`, `EC14-HOLD-10` | `INT`, `DB`, `INV`, `AUDIT`, `OBJ`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-06, NP-31, NP-32, NP-33, NP-36 | RS-09, RS-15 | FOLLOW-UP | H-STO, H-LEG, H-BIRTH, H-DISCARD |
| VC-R-167 | `5-§6-2` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-08` | `INT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-06, NP-36 | RS-09 | FOLLOW-UP | H-STO, H-BIRTH |
| VC-R-168 | `5-§6-3` | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-05, NP-36 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-D13, H-STO, H-REVOKE |
| VC-R-169 | `5-§6-4` | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-05, NP-36 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-STO, H-REVOKE |
| VC-R-170 | `5-§6-5` | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-05, NP-36 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-STO, H-REVOKE |
| VC-R-171 | `5-§6-6` | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-05, NP-36 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-STO, H-REVOKE |
| VC-R-172 | `5-§6-7` | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-05, NP-36 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-STO, H-REVOKE |
| VC-R-173 | `5-§6-8` | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-05, NP-36 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-STO, H-REVOKE |
| VC-R-174 | `5-§6-9` | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-05, NP-36 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-STO, H-REVOKE |
| VC-R-175 | `5-§6-11` | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | `UNIT`, `INT`, `DB`, `CONC`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-05, NP-36, NP-42 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-STO, H-LATER, H-REVOKE |
| VC-R-176 | `5-§6-13` | `EC14-CAB-04`, `EC14-NG-01` | `UNIT`, `INT`, `DB`, `RT`, `REPO`, `DOC` | NP-01, NP-40 | RS-05, RS-09, RS-18 | PASS | — |
| VC-R-177 | `5-§7-1` | `EC14-ARC-01` | `UNIT`, `REPO`, `DOC` | — | — | PASS | — |
| VC-R-178 | `5-§7-2` | `EC14-CMD-01`, `EC14-ADP-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `EVAL`, `OBJ`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-25, NP-36, NP-39 | RS-01, RS-03, RS-06, RS-07 | BLOCKED | H-D12, H-PROV, H-DTX, H-STO, H-UDI, H-MIG |
| VC-R-179 | `5-§7-3` | `EC14-ADP-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `INT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-38, NP-39 | RS-07 | BLOCKED | H-D12, H-FIN |
| VC-R-180 | `5-§7-4` | `EC14-ADP-01`, `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-04`, `EC14-HOLD-06`, `EC14-HOLD-09`, `EC14-HOLD-11` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-08, NP-25, NP-42 | RS-01 | BLOCKED | H-D12, H-PROV, H-LATER, H-UDI |
| VC-R-181 | `5-§7-8` | `EC14-ARC-01`, `EC14-HOLD-01` | `UNIT`, `REPO`, `PROV`, `DOC` | — | — | BLOCKED | H-D12 |
| VC-R-182 | `5-§8-2` | `EC14-UDI-01`, `EC14-HOLD-02` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-19, NP-41 | RS-08 | BLOCKED | H-D13 |
| VC-R-183 | `5-§8-3` | `EC14-UDI-01`, `EC14-HOLD-01` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-19, NP-41 | RS-08 | BLOCKED | H-D12 |
| VC-R-184 | `5-§8-4` | `EC14-UDI-01`, `EC14-NG-01`, `EC14-HOLD-02` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-19, NP-40, NP-41 | RS-08 | BLOCKED | H-D13 |
| VC-R-185 | `5-§9-1` | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-25 | RS-01 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-186 | `5-§9-2` | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-25 | RS-01 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-187 | `5-§9-3` | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-25 | RS-01 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-188 | `5-§9-4` | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-25 | RS-01 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-189 | `5-§9-5` | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-25 | RS-01 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-190 | `5-§9-6` | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-25 | RS-01 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-191 | `5-§9-7` | `EC14-IDM-02`, `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `CONC`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-14, NP-18, NP-25 | RS-01, RS-13 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-192 | `5-§9-8` | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-25 | RS-01 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-193 | `5-§9-9` | `EC14-CNF-03`, `EC14-HOLD-01`, `EC14-HOLD-07` | `UNIT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-16 | RS-01, RS-02 | BLOCKED | H-D12, H-FPRINT |
| VC-R-194 | `5-§10-1` | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-18, NP-25 | RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-195 | `5-§10-2` | `EC14-CNF-01`, `EC14-HOLD-06` | `UNIT`, `INT`, `EVAL`, `RT`, `DOC` | NP-18 | RS-16 | FOLLOW-UP | H-UDI |
| VC-R-196 | `5-§10-3` | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-18, NP-25 | RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-197 | `5-§10-4` | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-18, NP-25 | RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-198 | `5-§10-5` | `EC14-UDI-03`, `EC14-CNF-01`, `EC14-HOLD-06` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `DOC` | NP-18, NP-26 | RS-07, RS-16 | FOLLOW-UP | H-UDI |
| VC-R-199 | `5-§10-6` | `EC14-CNF-01`, `EC14-HOLD-06` | `UNIT`, `INT`, `EVAL`, `RT`, `DOC` | NP-18 | RS-16 | FOLLOW-UP | H-UDI |
| VC-R-200 | `5-§10-7` | `EC14-IDM-02`, `EC14-CNF-01`, `EC14-HOLD-06` | `UNIT`, `INT`, `DB`, `CONC`, `EVAL`, `RT`, `DOC` | NP-14, NP-18 | RS-13, RS-16 | FOLLOW-UP | H-UDI |
| VC-R-201 | `5-§10-8` | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-18, NP-25 | RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-202 | `5-§10-9` | `EC14-CNF-01`, `EC14-CNF-04`, `EC14-HOLD-01`, `EC14-HOLD-06` | `UNIT`, `INT`, `DB`, `CONC`, `EVAL`, `RT`, `FRT`, `PROV`, `DOC` | NP-17, NP-18 | RS-02, RS-16 | BLOCKED | H-D12, H-UDI |
| VC-R-203 | `5-§10-10` | `EC14-CNF-01`, `EC14-FAIL-01`, `EC14-FAIL-02` | `UNIT`, `INT`, `RT` | NP-18, NP-35 | RS-12, RS-16 | FOLLOW-UP | H-STATE |
| VC-R-204 | `5-§11-1` | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-HOLD-01` | `UNIT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-14 | RS-13 | BLOCKED | H-D12, H-IDEM |
| VC-R-205 | `5-§11-2` | `EC14-IDM-01`, `EC14-HOLD-01` | `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-14 | RS-13 | BLOCKED | H-D12, H-IDEM |
| VC-R-206 | `5-§11-3` | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-HOLD-01` | `UNIT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-14 | RS-13 | BLOCKED | H-D12, H-IDEM |
| VC-R-207 | `5-§11-4` | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-04`, `EC14-HOLD-11` | `UNIT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-14, NP-42 | RS-13 | BLOCKED | H-D12, H-D13, H-LATER, H-IDEM |
| VC-R-208 | `5-§11-5` | `EC14-IDM-01`, `EC14-UDI-01` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `RT`, `REPO` | NP-14, NP-19, NP-41 | RS-08, RS-13 | FOLLOW-UP | H-IDEM |
| VC-R-209 | `5-§12-1` | `EC14-SEC-03`, `EC14-HOLD-01` | `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-03, NP-04 | RS-05, RS-21 | BLOCKED | H-D12 |
| VC-R-210 | `5-§12-2` | `EC14-SEC-03`, `EC14-HOLD-01` | `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-03, NP-04 | RS-05, RS-21 | BLOCKED | H-D12 |
| VC-R-211 | `5-§12-3` | `EC14-SEC-03`, `EC14-HOLD-01` | `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-03, NP-04 | RS-05, RS-21 | BLOCKED | H-D12 |
| VC-R-212 | `5-§12-4` | `EC14-SEC-03`, `EC14-HOLD-01` | `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-03, NP-04 | RS-05, RS-21 | BLOCKED | H-D12 |
| VC-R-213 | `5-§12-5` | `EC14-UDI-08`, `EC14-SEC-03`, `EC14-NG-01`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-03, NP-04, NP-24, NP-40 | RS-05, RS-17, RS-21 | BLOCKED | H-D12 |
| VC-R-214 | `5-§12-6` | `EC14-SEC-03`, `EC14-SEC-04`, `EC14-NG-01`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `AUDIT`, `RT`, `REPO`, `PROV`, `DOC` | NP-03, NP-04, NP-34, NP-40 | RS-05, RS-21 | BLOCKED | H-D12 |
| VC-R-215 | `5-§13-1` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-216 | `5-§13-2` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-217 | `5-§13-3` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-218 | `5-§13-4` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-219 | `5-§13-5` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-220 | `5-§13-6` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-221 | `5-§13-7` | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25 | RS-01, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-222 | `5-§13-8` | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | `UNIT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-22, NP-40 | RS-17 | BLOCKED | H-D13, H-UDI |
| VC-R-223 | `5-§13-9` | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | `UNIT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-22, NP-40 | RS-17 | BLOCKED | H-D13, H-UDI |
| VC-R-224 | `5-§13-10` | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | `UNIT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-22, NP-40 | RS-17 | BLOCKED | H-D13, H-UDI |
| VC-R-225 | `5-§13-11` | `EC14-UDI-06`, `EC14-UDI-08`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | `UNIT`, `INT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-22, NP-24, NP-40 | RS-17 | BLOCKED | H-D13, H-UDI |
| VC-R-226 | `5-§13-12` | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | `UNIT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-22, NP-40 | RS-17 | BLOCKED | H-D13, H-UDI |
| VC-R-227 | `5-§14-1` | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `NET`, `RT`, `REPO`, `PROV`, `DOC` | NP-20, NP-25 | RS-08 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-228 | `5-§14-2` | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `NET`, `RT`, `REPO`, `PROV`, `DOC` | NP-20, NP-25 | RS-08 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-229 | `5-§14-3` | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `NET`, `RT`, `REPO`, `PROV`, `DOC` | NP-20, NP-25 | RS-08 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-230 | `5-§14-4` | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `NET`, `RT`, `REPO`, `PROV`, `DOC` | NP-20, NP-25 | RS-08 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-231 | `5-§14-5` | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `NET`, `RT`, `REPO`, `PROV`, `DOC` | NP-20, NP-25 | RS-08 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-232 | `5-§14-6` | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `NET`, `RT`, `REPO`, `PROV`, `DOC` | NP-20, NP-25 | RS-08 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-233 | `5-§14-7` | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `NET`, `RT`, `REPO`, `PROV`, `DOC` | NP-20, NP-25 | RS-08 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-234 | `5-§14-8` | `EC14-UDI-04`, `EC14-NG-01`, `EC14-HOLD-06` | `UNIT`, `INT`, `EVAL`, `NET`, `RT`, `REPO`, `PROV`, `DOC` | NP-20, NP-40 | RS-08 | FOLLOW-UP | H-UDI |
| VC-R-235 | `5-§15-1` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `INV`, `OBJ`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09, NP-36, NP-39 | RS-07, RS-09 | BLOCKED | H-D12, H-STO, H-BIRTH, H-MIG |
| VC-R-236 | `5-§15-2` | `EC14-CAB-01`, `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09, NP-28, NP-39 | RS-05, RS-07, RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-237 | `5-§15-3` | `EC14-CAB-01`, `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09, NP-28, NP-39 | RS-05, RS-07, RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-238 | `5-§15-4` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09, NP-39 | RS-07, RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-239 | `5-§15-5` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09, NP-39 | RS-07, RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-240 | `5-§15-6` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09, NP-39 | RS-07, RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-241 | `5-§15-7` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `INV`, `OBJ`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09, NP-36, NP-39 | RS-07, RS-09 | BLOCKED | H-D12, H-STO, H-BIRTH, H-MIG |
| VC-R-242 | `5-§15-8` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09, NP-39 | RS-07, RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-243 | `5-§15-9` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09, NP-39 | RS-07, RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-244 | `5-§15-10` | `EC14-CAB-01`, `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09, NP-28, NP-39 | RS-05, RS-07, RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-245 | `5-§15-11` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05` | `INT`, `DB`, `CONC`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09, NP-39 | RS-07, RS-09 | FOLLOW-UP | H-BIRTH, H-MIG |
| VC-R-246 | `5-§16-1` | `EC14-SEC-01`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `PROV`, `DOC` | NP-01, NP-08 | RS-06, RS-21 | BLOCKED | H-D12 |
| VC-R-247 | `5-§16-2` | `EC14-SEC-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `INV`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-08, NP-36 | RS-06, RS-21 | BLOCKED | H-D12, H-STO |
| VC-R-248 | `5-§16-3` | `EC14-RET-01`, `EC14-RET-03`, `EC14-SEC-01`, `EC14-HOLD-10` | `INT`, `DB`, `INV`, `AUDIT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-08, NP-31, NP-32, NP-33 | RS-06, RS-15, RS-21 | FOLLOW-UP | H-LEG, H-DISCARD |
| VC-R-249 | `5-§16-4` | `EC14-UDI-02`, `EC14-HOLD-06` | `UNIT`, `INT`, `EVAL`, `RT`, `DOC` | NP-19 | RS-08 | FOLLOW-UP | H-UDI |
| VC-R-250 | `5-§16-5` | `EC14-UDI-02`, `EC14-HOLD-06` | `UNIT`, `INT`, `EVAL`, `RT`, `DOC` | NP-19 | RS-08 | FOLLOW-UP | H-UDI |
| VC-R-251 | `5-§16-6` | `EC14-SEC-01`, `EC14-NG-01`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-08, NP-40 | RS-06, RS-21 | BLOCKED | H-D12 |
| VC-R-252 | `5-§16-7` | `EC14-UDI-06`, `EC14-UDI-08`, `EC14-PRV-01`, `EC14-NG-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-22, NP-24, NP-25, NP-40 | RS-17 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-253 | `5-§17-1` | `EC14-UDI-02`, `EC14-FAIL-01`, `EC14-FAIL-02` | `UNIT`, `INT`, `RT` | NP-19, NP-35 | RS-08, RS-12 | FOLLOW-UP | H-STATE |
| VC-R-254 | `5-§17-2` | `EC14-UDI-02`, `EC14-FAIL-01`, `EC14-FAIL-02` | `UNIT`, `INT`, `RT` | NP-19, NP-35 | RS-08, RS-12 | FOLLOW-UP | H-STATE |
| VC-R-255 | `5-§17-3` | `EC14-UDI-02`, `EC14-FAIL-01`, `EC14-FAIL-02` | `UNIT`, `INT`, `RT` | NP-19, NP-35 | RS-08, RS-12 | FOLLOW-UP | H-STATE |
| VC-R-256 | `5-§17-4` | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-01`, `EC14-HOLD-09` | `UNIT`, `INT`, `RT`, `REPO`, `PROV`, `DOC` | NP-25, NP-35 | RS-12 | FOLLOW-UP | H-PROV, H-STATE |
| VC-R-257 | `5-§17-5` | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-14, NP-35 | RS-12, RS-13 | BLOCKED | H-D12, H-IDEM, H-STATE |
| VC-R-258 | `5-§17-6` | `EC14-CMD-01`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV` | NP-06, NP-07, NP-08, NP-09, NP-35, NP-39 | RS-03, RS-06, RS-07, RS-12 | BLOCKED | H-DTX, H-STATE, H-MIG |
| VC-R-259 | `5-§17-7` | `EC14-CNF-04`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-17, NP-35 | RS-02, RS-12 | BLOCKED | H-D12, H-STATE |
| VC-R-260 | `5-§17-8` | `EC14-CNF-04`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-17, NP-35 | RS-02, RS-12 | BLOCKED | H-D12, H-STATE |
| VC-R-261 | `5-§17-9` | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-262 | `5-§17-10` | `EC14-IDM-01`, `EC14-IDM-03`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-14, NP-15, NP-35 | RS-12, RS-13 | BLOCKED | H-D12, H-IDEM, H-STATE |
| VC-R-263 | `5-§17-11` | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-NG-01` | `UNIT`, `INT`, `RT`, `REPO`, `DOC` | NP-35, NP-40 | RS-12 | FOLLOW-UP | H-STATE |
| VC-R-264 | `5-§18-1` | `EC14-CMD-01`, `EC14-CNF-03`, `EC14-ADP-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-07`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `OBJ`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-16, NP-25, NP-36, NP-39 | RS-01, RS-02, RS-03, RS-06, RS-07 | BLOCKED | H-D12, H-PROV, H-DTX, H-STO, H-FPRINT, H-MIG |
| VC-R-265 | `5-§18-2` | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-25 | RS-01, RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-266 | `5-§18-3` | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `NET`, `OBJ`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-20, NP-25, NP-36 | RS-08 | FOLLOW-UP | H-PROV, H-STO, H-UDI |
| VC-R-267 | `5-§18-4` | `EC14-UDI-03`, `EC14-VER-02`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-26 | RS-07, RS-16 | BLOCKED | H-D12 |
| VC-R-268 | `5-§18-5` | `EC14-ADP-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `INT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-38, NP-39 | RS-07 | BLOCKED | H-D12, H-FIN |
| VC-R-269 | `5-§18-6` | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-VER-02`, `EC14-HOLD-01` | `UNIT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-14 | RS-13 | BLOCKED | H-D12, H-IDEM |
| VC-R-270 | `5-§18-7` | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `OBJ`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-05, NP-36 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-STO, H-REVOKE |
| VC-R-271 | `5-§18-8a` | `EC14-VER-02`, `EC14-HOLD-02` | `DB`, `INV`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-41 | RS-23 | BLOCKED | H-D13 |
| VC-R-272 | `5-§18-9` | `EC14-SEC-03`, `EC14-VER-02`, `EC14-HOLD-01` | `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-03, NP-04 | RS-05, RS-21 | BLOCKED | H-D12 |
| VC-R-273 | `5-§18-10` | `EC14-SEC-01`, `EC14-VER-02`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-08 | RS-06, RS-21 | BLOCKED | H-D12 |
| VC-R-274 | `5-§18-11` | `EC14-FAIL-02`, `EC14-VER-02` | `UNIT`, `INT`, `RT`, `FRT`, `DOC` | NP-35 | RS-12 | PASS | — |
| VC-R-275 | `5-§19-1` | `EC14-NG-01` | `UNIT`, `DB`, `INV`, `RT`, `REPO`, `DOC` | NP-40 | RS-06 | PASS | — |
| VC-R-276 | `5-§19-2` | `EC14-UDI-01`, `EC14-NG-01` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `DOC` | NP-19, NP-40, NP-41 | RS-08 | PASS | — |
| VC-R-277 | `5-§19-3` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-278 | `5-§19-4` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-279 | `5-§19-5` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-280 | `22-§4-1` | `EC14-ARC-01`, `EC14-HOLD-01` | `UNIT`, `REPO`, `PROV`, `DOC` | — | — | BLOCKED | H-D12 |
| VC-R-281 | `22-§4-2` | `EC14-ARC-01`, `EC14-HOLD-01` | `UNIT`, `REPO`, `PROV`, `DOC` | — | — | BLOCKED | H-D12 |
| VC-R-282 | `22-§4-3` | `EC14-ARC-01` | `UNIT`, `REPO`, `DOC` | — | — | PASS | — |
| VC-R-283 | `22-§4-4` | `EC14-ARC-01`, `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-284 | `22-§9-1` | `EC14-ARC-01`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `REPO`, `PROV`, `DOC` | NP-25 | — | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-285 | `22-§9-2` | `EC14-UDI-01`, `EC14-PRV-01`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `INV`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-19, NP-25, NP-41 | RS-08 | BLOCKED | H-D12, H-PROV, H-UDI |
| VC-R-286 | `22-§9-3` | `EC14-UDI-01`, `EC14-NG-01`, `EC14-HOLD-06` | `UNIT`, `INT`, `INV`, `EVAL`, `RT`, `REPO`, `DOC` | NP-19, NP-40, NP-41 | RS-08 | FOLLOW-UP | H-UDI |
| VC-R-287 | `22-§10-1` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-06, NP-36 | RS-09 | BLOCKED | H-D12, H-STO, H-BIRTH |
| VC-R-288 | `22-§10-2` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-06, NP-36 | RS-09 | BLOCKED | H-D12, H-STO, H-BIRTH |
| VC-R-289 | `22-§10-3` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-06, NP-36 | RS-09 | BLOCKED | H-D12, H-STO, H-BIRTH |
| VC-R-290 | `22-§10-4` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-06, NP-36 | RS-09 | BLOCKED | H-D12, H-STO, H-BIRTH |
| VC-R-291 | `22-§10-5` | `EC14-CAB-01`, `EC14-RET-01`, `EC14-RET-03`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08`, `EC14-HOLD-10` | `INT`, `DB`, `INV`, `AUDIT`, `OBJ`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-06, NP-31, NP-32, NP-33, NP-36 | RS-09, RS-15 | BLOCKED | H-D12, H-STO, H-LEG, H-BIRTH, H-DISCARD |
| VC-R-292 | `22-§10-6` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-06, NP-36 | RS-09 | BLOCKED | H-D12, H-STO, H-BIRTH |
| VC-R-293 | `22-§10-7` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-NG-01` | `UNIT`, `INT`, `DB`, `INV`, `REH`, `RT`, `REPO`, `DOC` | NP-01, NP-06, NP-40 | RS-09 | FOLLOW-UP | H-BIRTH |
| VC-R-294 | `22-§17-1` | `EC14-ARC-01` | `UNIT`, `REPO`, `DOC` | — | — | PASS | — |
| VC-R-295 | `22-§17-7` | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `PROV`, `DOC` | NP-29, NP-36 | RS-09 | FOLLOW-UP | H-STO |
| VC-R-296 | `22-§17-9` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-297 | `22-§19-1` | `EC14-FAIL-01`, `EC14-FAIL-02` | `UNIT`, `INT`, `RT` | NP-35 | RS-12 | FOLLOW-UP | H-STATE |
| VC-R-298 | `22-§19-2` | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-299 | `22-§19-3` | `EC14-FAIL-01`, `EC14-FAIL-02` | `UNIT`, `INT`, `RT` | NP-35 | RS-12 | FOLLOW-UP | H-STATE |
| VC-R-300 | `22-§19-4` | `EC14-FAIL-01`, `EC14-FAIL-02` | `UNIT`, `INT`, `RT` | NP-35 | RS-12 | FOLLOW-UP | H-STATE |
| VC-R-301 | `22-§19-5` | `EC14-FAIL-01`, `EC14-FAIL-02` | `UNIT`, `INT`, `RT` | NP-35 | RS-12 | FOLLOW-UP | H-STATE |
| VC-R-302 | `22-§19-6` | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-303 | `22-§19-7` | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-25, NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-PROV, H-STATE |
| VC-R-304 | `22-§21` | `EC14-PRV-02`, `EC14-PERF-01`, `EC14-HOLD-08` | `INT`, `OBJ`, `PERF`, `RT`, `PROV`, `DOC` | NP-36 | RS-19 | FOLLOW-UP | H-STO |
| VC-R-305 | `22-§22-1` | `EC14-VER-01` | `UNIT`, `DB`, `INV`, `EVAL`, `REPO` | NP-06, NP-07 | — | PASS | — |
| VC-R-306 | `22-§22-2` | `EC14-VER-01` | `UNIT`, `DB`, `INV`, `EVAL`, `REPO` | NP-06, NP-07 | — | PASS | — |
| VC-R-307 | `22-§22-3` | `EC14-VER-01` | `UNIT`, `DB`, `INV`, `EVAL`, `REPO` | NP-06, NP-07 | — | PASS | — |
| VC-R-308 | `22-§22-4` | `EC14-VER-01` | `UNIT`, `DB`, `INV`, `EVAL`, `REPO` | NP-06, NP-07 | — | PASS | — |
| VC-R-309 | `22-§22-5` | `EC14-VER-01` | `UNIT`, `DB`, `INV`, `EVAL`, `REPO` | NP-06, NP-07 | — | PASS | — |
| VC-R-310 | `22-§22-6` | `EC14-VER-01`, `EC14-NG-01` | `UNIT`, `DB`, `INV`, `EVAL`, `REPO`, `DOC` | NP-06, NP-07, NP-40 | — | PASS | — |
| VC-R-311 | `22-§23-2` | `EC14-SEC-01`, `EC14-NG-01`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-08, NP-40 | RS-06, RS-21 | BLOCKED | H-D12 |
| VC-R-312 | `22-§23-3` | `EC14-SEC-04`, `EC14-NG-01`, `EC14-HOLD-01` | `UNIT`, `DB`, `INV`, `AUDIT`, `RT`, `REPO`, `PROV`, `DOC` | NP-34, NP-40 | RS-21 | BLOCKED | H-D12 |
| VC-R-313 | `22-§23-5` | `EC14-SEC-03`, `EC14-NG-01`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `REPO`, `PROV`, `DOC` | NP-03, NP-04, NP-40 | RS-05, RS-21 | BLOCKED | H-D12 |
| VC-R-314 | `22-§23-7` | `EC14-STO-09`, `EC14-NG-01` | `UNIT`, `INT`, `DB`, `INV`, `AUDIT`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-28, NP-40 | RS-22 | PASS | — |
| VC-R-315 | `22-§27-1` | `EC14-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-316 | `22-§27-2` | `EC14-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-317 | `22-§27-3` | `EC14-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-318 | `22-§27-4` | `EC14-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-319 | `22-§27-5` | `EC14-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-320 | `22-§27-6` | `EC14-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-321 | `22-§27-7` | `EC14-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-322 | `22-§27-8` | `EC14-NG-01`, `EC14-DOC-01` | `UNIT`, `REPO`, `DOC` | NP-40 | RS-20 | PASS | — |
| VC-R-323 | `22-§28-1` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-324 | `22-§28-2` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-325 | `22-§28-3` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-326 | `22-§28-4` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-327 | `22-§28-5` | `EC14-UDI-01`, `EC14-NG-01` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `DOC` | NP-19, NP-40, NP-41 | RS-08 | PASS | — |
| VC-R-328 | `22-§28-6` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-329 | `22-§28-7` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-330 | `22-§28-8` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-331 | `22-§28-9` | `EC14-CMD-03`, `EC14-NG-01` | `UNIT`, `DB`, `INV`, `RT`, `REPO`, `DOC` | NP-07, NP-40 | RS-06 | PASS | — |
| VC-R-332 | `22-§28-10` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-333 | `22-§29-3` | `EC14-SEC-01`, `EC14-VER-02`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-08 | RS-06, RS-21 | BLOCKED | H-D12 |
| VC-R-334 | `22-§29-5` | `EC14-UDI-01`, `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `INV`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-19, NP-25, NP-41 | RS-08 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-335 | `22-§29-7` | `EC14-CMD-01`, `EC14-CNF-03`, `EC14-CNF-04`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-07` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-16, NP-17 | RS-01, RS-02, RS-03, RS-06 | BLOCKED | H-D12, H-DTX, H-FPRINT, H-MIG |
| VC-R-336 | `22-§29-8` | `EC14-IDM-01`, `EC14-VER-02`, `EC14-HOLD-01` | `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-14 | RS-13 | BLOCKED | H-D12, H-IDEM |
| VC-R-337 | `22-§29-10` | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `OBJ`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-25, NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-PROV, H-STATE |
| VC-R-338 | `22-§29-12` | `EC14-CAB-02`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `OBJ`, `RT`, `FRT`, `PROV`, `DOC` | NP-27, NP-36 | RS-09 | BLOCKED | H-D12, H-STO |
| VC-R-339 | `22-§29-13` | `EC14-UDI-09`, `EC14-FAIL-01`, `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-09` | `UNIT`, `INT`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-25, NP-26, NP-35 | RS-12 | FOLLOW-UP | H-PROV, H-STATE |
| VC-R-340 | `22-§29-14` | `EC14-VER-02`, `EC14-DOC-01` | `RT`, `FRT`, `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-341 | `25-§4-1` | `EC14-STO-01`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-29, NP-36 | RS-09 | FOLLOW-UP | H-STO, H-MIG |
| VC-R-342 | `25-§4-2` | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `UNIT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-29 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-343 | `25-§4-3` | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `UNIT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-29 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-344 | `25-§4-4` | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `UNIT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-29 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-345 | `25-§4-5` | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `UNIT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-29 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-346 | `25-§4-6` | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `UNIT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-29 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-347 | `25-§4-7` | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `UNIT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-29 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-348 | `25-§4-8` | `EC14-STO-01`, `EC14-RET-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-10` | `UNIT`, `DB`, `INV`, `AUDIT`, `OBJ`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-29, NP-33 | RS-09 | BLOCKED | H-D12, H-LEG, H-BIRTH, H-MIG |
| VC-R-349 | `25-§4-9` | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `UNIT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-29 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-350 | `25-§4-10` | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `UNIT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-29 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-351 | `25-§4-11` | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `UNIT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-29 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-352 | `25-§4-12` | `EC14-STO-01`, `EC14-STO-04`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-NG-01`, `EC14-HOLD-01` | `UNIT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `REG`, `REPO`, `PROV`, `DOC` | NP-06, NP-09, NP-29, NP-40 | RS-09 | BLOCKED | H-D12, H-MIG |
| VC-R-353 | `25-§5-1` | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `PROV`, `DOC` | NP-29, NP-36 | RS-09 | FOLLOW-UP | H-STO |
| VC-R-354 | `25-§5-2` | `EC14-STO-01` | `UNIT`, `DB`, `INV`, `OBJ`, `RT` | NP-29 | RS-09 | PASS | — |
| VC-R-355 | `25-§6-1` | `EC14-ARC-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `OBJ`, `REPO`, `PROV`, `DOC` | NP-36 | — | FOLLOW-UP | H-STO |
| VC-R-356 | `25-§6-2` | `EC14-ARC-01` | `UNIT`, `REPO`, `DOC` | — | — | PASS | — |
| VC-R-357 | `25-§7-1` | `EC14-ARC-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `OBJ`, `REPO`, `PROV`, `DOC` | NP-36 | — | FOLLOW-UP | H-STO |
| VC-R-358 | `25-§7-2` | `EC14-ARC-01` | `UNIT`, `REPO`, `DOC` | — | — | PASS | — |
| VC-R-359 | `25-§8-1` | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-30 | RS-15 | BLOCKED | H-D12, H-PRIV |
| VC-R-360 | `25-§8-2` | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-30 | RS-15 | BLOCKED | H-D12, H-PRIV |
| VC-R-361 | `25-§8-3` | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-30 | RS-15 | BLOCKED | H-D12, H-PRIV |
| VC-R-362 | `25-§8-4` | `EC14-UDI-02`, `EC14-STO-02`, `EC14-STO-03` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO` | NP-02, NP-19, NP-30 | RS-08, RS-15 | FOLLOW-UP | H-PRIV |
| VC-R-363 | `25-§8-5` | `EC14-STO-02`, `EC14-STO-03`, `EC14-PRV-02`, `EC14-HOLD-08` | `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-30, NP-36 | RS-15 | FOLLOW-UP | H-STO, H-PRIV |
| VC-R-364 | `25-§8-6` | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-30 | RS-15 | BLOCKED | H-D12, H-PRIV |
| VC-R-365 | `25-§8-7` | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-30 | RS-15 | BLOCKED | H-D12, H-PRIV |
| VC-R-366 | `25-§8-8` | `EC14-STO-02`, `EC14-STO-03`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-25, NP-30 | RS-15 | FOLLOW-UP | H-PROV, H-PRIV, H-UDI |
| VC-R-367 | `25-§8-9` | `EC14-CMD-01`, `EC14-STO-02`, `EC14-STO-03`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-03` | `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `OBJ`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `PROV`, `DOC` | NP-02, NP-06, NP-07, NP-08, NP-09, NP-30 | RS-03, RS-06, RS-15 | BLOCKED | H-D12, H-DTX, H-PRIV, H-MIG |
| VC-R-368 | `25-§8-10` | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-30 | RS-15 | BLOCKED | H-D12, H-PRIV |
| VC-R-369 | `25-§8-11` | `EC14-STO-02`, `EC14-STO-03`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-30, NP-35, NP-36, NP-40 | RS-12, RS-15 | FOLLOW-UP | H-STO, H-PRIV, H-STATE |
| VC-R-370 | `25-§9-1` | `EC14-STO-03`, `EC14-RTV-01`, `EC14-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02, NP-05 | RS-05 | BLOCKED | H-D12, H-REVOKE, H-PRIV |
| VC-R-371 | `25-§9-2` | `EC14-STO-03`, `EC14-RTV-01`, `EC14-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02, NP-05 | RS-05 | BLOCKED | H-D12, H-REVOKE, H-PRIV |
| VC-R-372 | `25-§9-3` | `EC14-STO-03`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02, NP-05, NP-36 | RS-05 | FOLLOW-UP | H-STO, H-REVOKE, H-PRIV |
| VC-R-373 | `25-§9-4` | `EC14-STO-03`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02, NP-05, NP-36 | RS-05 | BLOCKED | H-D12, H-STO, H-REVOKE, H-PRIV |
| VC-R-374 | `25-§9-5` | `EC14-STO-03`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02, NP-05, NP-36 | RS-05 | FOLLOW-UP | H-STO, H-REVOKE, H-PRIV |
| VC-R-375 | `25-§9-6` | `EC14-STO-03`, `EC14-RTV-01`, `EC14-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02, NP-05 | RS-05 | BLOCKED | H-D12, H-REVOKE, H-PRIV |
| VC-R-376 | `25-§9-7` | `EC14-STO-03`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02, NP-05, NP-36 | RS-05 | BLOCKED | H-D12, H-STO, H-REVOKE, H-PRIV |
| VC-R-377 | `25-§9-8` | `EC14-STO-03`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02, NP-05, NP-36 | RS-05 | FOLLOW-UP | H-STO, H-REVOKE, H-PRIV |
| VC-R-378 | `25-§10-1` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-NG-01` | `UNIT`, `INT`, `DB`, `INV`, `REH`, `RT`, `REG`, `REPO`, `PROV`, `DOC` | NP-01, NP-06, NP-09, NP-40 | RS-09 | FOLLOW-UP | H-BIRTH, H-MIG |
| VC-R-379 | `25-§10-2` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05` | `INT`, `DB`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09 | RS-09 | FOLLOW-UP | H-BIRTH, H-MIG |
| VC-R-380 | `25-§10-3` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-381 | `25-§10-4` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-382 | `25-§10-5` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-383 | `25-§10-6` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-384 | `25-§10-7` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-385 | `25-§10-8` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-386 | `25-§10-9` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-387 | `25-§10-10` | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `INT`, `DB`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-388 | `25-§10-11` | `EC14-CAB-01`, `EC14-RET-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-10` | `INT`, `DB`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09, NP-33 | RS-09 | BLOCKED | H-D12, H-LEG, H-BIRTH, H-MIG |
| VC-R-389 | `25-§10-12` | `EC14-CAB-01`, `EC14-CAB-02`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-01, NP-06, NP-09, NP-27 | RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-390 | `25-§11-1` | `EC14-CAB-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-25, NP-36 | RS-09 | FOLLOW-UP | H-PROV, H-STO, H-UDI |
| VC-R-391 | `25-§11-2` | `EC14-CAB-01`, `EC14-NG-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `REPO`, `DOC` | NP-01, NP-40 | RS-09 | PASS | — |
| VC-R-392 | `25-§11-3` | `EC14-CAB-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `INT`, `DB`, `INV`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-36 | RS-09 | FOLLOW-UP | H-STO |
| VC-R-393 | `25-§11-4` | `EC14-CAB-01`, `EC14-FAIL-01` | `UNIT`, `INT`, `DB`, `INV`, `RT` | NP-01, NP-35 | RS-09, RS-12 | FOLLOW-UP | H-STATE |
| VC-R-394 | `25-§12-1` | `EC14-RET-01`, `EC14-RET-02`, `EC14-RET-03`, `EC14-PRV-02`, `EC14-HOLD-02`, `EC14-HOLD-08`, `EC14-HOLD-10` | `INT`, `DB`, `INV`, `AUDIT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-31, NP-32, NP-33, NP-36 | RS-15 | BLOCKED | H-D13, H-STO, H-LEG, H-DISCARD |
| VC-R-395 | `25-§12-2` | `EC14-RET-02`, `EC14-HOLD-02` | `DB`, `INV`, `OBJ`, `RT`, `PROV`, `DOC` | NP-32 | RS-15 | BLOCKED | H-D13 |
| VC-R-396 | `25-§12-3` | `EC14-RET-01`, `EC14-RET-02`, `EC14-RET-03`, `EC14-NG-01`, `EC14-HOLD-10` | `UNIT`, `INT`, `DB`, `INV`, `AUDIT`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-31, NP-32, NP-33, NP-40 | RS-15 | FOLLOW-UP | H-LEG, H-DISCARD |
| VC-R-397 | `25-§13-1a` | `EC14-STO-08`, `EC14-PRV-02`, `EC14-HOLD-02`, `EC14-HOLD-08` | `INT`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-36, NP-41 | RS-09 | BLOCKED | H-D13, H-STO |
| VC-R-398 | `25-§13-2` | `EC14-STO-08`, `EC14-NG-01` | `UNIT`, `INV`, `RT`, `REPO`, `DOC` | NP-40, NP-41 | RS-09 | PASS | — |
| VC-R-399 | `25-§13-3` | `EC14-STO-08`, `EC14-HOLD-01` | `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-41 | RS-09 | BLOCKED | H-D12 |
| VC-R-400 | `25-§14-1` | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `PROV`, `DOC` | NP-29, NP-36 | RS-09 | FOLLOW-UP | H-STO |
| VC-R-401 | `25-§14-2` | `EC14-IDM-01`, `EC14-HOLD-01` | `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-14 | RS-13 | BLOCKED | H-D12, H-IDEM |
| VC-R-402 | `25-§14-3` | `EC14-IDM-01`, `EC14-HOLD-01` | `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-14 | RS-13 | BLOCKED | H-D12, H-IDEM |
| VC-R-403 | `25-§14-4` | `EC14-IDM-01`, `EC14-IDM-02` | `UNIT`, `DB`, `CONC`, `RT` | NP-14 | RS-13 | FOLLOW-UP | H-IDEM |
| VC-R-404 | `25-§14-5` | `EC14-IDM-01`, `EC14-IDM-03`, `EC14-HOLD-01` | `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-14, NP-15 | RS-13 | BLOCKED | H-D12, H-IDEM |
| VC-R-405 | `25-§14-6` | `EC14-STO-03`, `EC14-STO-05`, `EC14-RET-01`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-31, NP-32, NP-36, NP-42 | RS-12, RS-15 | FOLLOW-UP | H-STO, H-LATER, H-PRIV, H-DISCARD |
| VC-R-406 | `25-§14-7` | `EC14-STO-01`, `EC14-NG-01` | `UNIT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `DOC` | NP-29, NP-40 | RS-09 | PASS | — |
| VC-R-407 | `25-§15-1` | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `PROV`, `DOC` | NP-29, NP-36 | RS-09 | FOLLOW-UP | H-STO |
| VC-R-408 | `25-§15-2` | `EC14-STO-01` | `UNIT`, `DB`, `INV`, `OBJ`, `RT` | NP-29 | RS-09 | PASS | — |
| VC-R-409 | `25-§15-3` | `EC14-STO-01`, `EC14-NG-01` | `UNIT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `DOC` | NP-29, NP-40 | RS-09 | PASS | — |
| VC-R-410 | `25-§15-4` | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `PROV`, `DOC` | NP-29, NP-36 | RS-09 | FOLLOW-UP | H-STO |
| VC-R-411 | `25-§16-1` | `EC14-STO-07`, `EC14-RET-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `INT`, `DB`, `AUDIT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-31, NP-32, NP-33, NP-36 | RS-15 | FOLLOW-UP | H-STO, H-DISCARD |
| VC-R-412 | `25-§16-2` | `EC14-STO-07`, `EC14-RET-01`, `EC14-RET-03`, `EC14-HOLD-10` | `INT`, `DB`, `AUDIT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-31, NP-32, NP-33 | RS-15 | FOLLOW-UP | H-LEG, H-DISCARD |
| VC-R-413 | `25-§16-3` | `EC14-STO-07`, `EC14-NG-01` | `UNIT`, `DB`, `AUDIT`, `OBJ`, `RT`, `REPO`, `DOC` | NP-33, NP-40 | RS-15 | PASS | — |
| VC-R-414 | `25-§17-2` | `EC14-STO-07`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | `UNIT`, `INT`, `DB`, `AUDIT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-33, NP-36, NP-42 | RS-15 | FOLLOW-UP | H-STO, H-LATER |
| VC-R-415 | `25-§17-3` | `EC14-STO-03`, `EC14-STO-07`, `EC14-HOLD-01` | `DB`, `INV`, `AUDIT`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-33 | RS-15 | BLOCKED | H-D12, H-PRIV |
| VC-R-416 | `25-§17-4` | `EC14-STO-07`, `EC14-NG-01` | `UNIT`, `DB`, `AUDIT`, `OBJ`, `RT`, `REPO`, `DOC` | NP-33, NP-40 | RS-15 | PASS | — |
| VC-R-417 | `25-§17-5` | `EC14-STO-07`, `EC14-RET-03`, `EC14-HOLD-10` | `DB`, `AUDIT`, `OBJ`, `RT`, `DOC` | NP-33 | RS-15 | FOLLOW-UP | H-LEG |
| VC-R-418 | `25-§17-6` | `EC14-STO-07`, `EC14-RET-01`, `EC14-RET-03`, `EC14-HOLD-10` | `INT`, `DB`, `AUDIT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-31, NP-32, NP-33 | RS-15 | FOLLOW-UP | H-LEG, H-DISCARD |
| VC-R-419 | `25-§17-7` | `EC14-STO-07`, `EC14-NG-01` | `UNIT`, `DB`, `AUDIT`, `OBJ`, `RT`, `REPO`, `DOC` | NP-33, NP-40 | RS-15 | PASS | — |
| VC-R-420 | `25-§18-1` | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `PROV`, `DOC` | NP-29, NP-36 | RS-09 | FOLLOW-UP | H-STO |
| VC-R-421 | `25-§18-2` | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `PROV`, `DOC` | NP-29, NP-36 | RS-09 | FOLLOW-UP | H-STO |
| VC-R-422 | `25-§18-3` | `EC14-STO-01`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-29, NP-36, NP-40 | RS-09 | FOLLOW-UP | H-STO |
| VC-R-423 | `25-§19-1` | `EC14-STO-04`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `INV`, `OBJ`, `PROV`, `DOC` | NP-29, NP-36 | — | BLOCKED | H-D12, H-STO |
| VC-R-424 | `25-§19-2` | `EC14-STO-04`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-01`, `EC14-HOLD-08` | `UNIT`, `INT`, `INV`, `OBJ`, `REPO`, `PROV`, `DOC` | NP-29, NP-36, NP-40 | — | BLOCKED | H-D12, H-STO |
| VC-R-425 | `25-§19-3` | `EC14-STO-04`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-01`, `EC14-HOLD-08` | `UNIT`, `INT`, `INV`, `OBJ`, `REPO`, `PROV`, `DOC` | NP-29, NP-36, NP-40 | — | BLOCKED | H-D12, H-STO |
| VC-R-426 | `25-§19-4` | `EC14-STO-04`, `EC14-PRV-02`, `EC14-ENV-01`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `INV`, `OBJ`, `REPO`, `PROV`, `DOC` | NP-29, NP-36, NP-37 | — | BLOCKED | H-D12, H-STO |
| VC-R-427 | `25-§19-5` | `EC14-STO-04`, `EC14-PRV-02`, `EC14-ENV-01`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `INV`, `OBJ`, `REPO`, `PROV`, `DOC` | NP-29, NP-36, NP-37 | — | BLOCKED | H-D12, H-STO |
| VC-R-428 | `25-§19-6` | `EC14-STO-04`, `EC14-ENV-01`, `EC14-NG-01` | `UNIT`, `INV`, `OBJ`, `REPO`, `DOC` | NP-29, NP-37, NP-40 | — | PASS | — |
| VC-R-429 | `25-§19-7` | `EC14-STO-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `INV`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-05, NP-29, NP-36 | RS-05 | BLOCKED | H-D12, H-STO, H-REVOKE |
| VC-R-430 | `25-§19-8` | `EC14-UDI-02`, `EC14-STO-04`, `EC14-HOLD-06` | `UNIT`, `INT`, `INV`, `EVAL`, `OBJ`, `RT`, `DOC` | NP-19, NP-29 | RS-08 | FOLLOW-UP | H-UDI |
| VC-R-431 | `25-§20-1` | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-432 | `25-§20-2` | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-433 | `25-§20-3` | `EC14-STO-05`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `OBJ`, `RT`, `PROV`, `DOC` | NP-31, NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-434 | `25-§20-4` | `EC14-STO-05`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `OBJ`, `RT`, `PROV`, `DOC` | NP-31, NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-435 | `25-§20-5` | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-436 | `25-§20-6` | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-437 | `25-§20-7` | `EC14-RTV-01`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `CONC`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-05, NP-35, NP-36 | RS-05, RS-12 | FOLLOW-UP | H-STO, H-REVOKE, H-STATE |
| VC-R-438 | `25-§20-8` | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-439 | `25-§20-9` | `EC14-STO-05`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `OBJ`, `RT`, `PROV`, `DOC` | NP-31, NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-440 | `25-§20-10` | `EC14-IDM-03`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `OBJ`, `RT`, `PROV`, `DOC` | NP-15, NP-35, NP-36 | RS-12, RS-13 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-441 | `25-§20-11` | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-442 | `25-§20-12` | `EC14-STO-05`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `OBJ`, `RT`, `PROV`, `DOC` | NP-31, NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-443 | `25-§20-13` | `EC14-RTV-01`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `CONC`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-05, NP-35, NP-36 | RS-05, RS-12 | BLOCKED | H-STO, H-D12, H-REVOKE, H-STATE |
| VC-R-444 | `25-§20-14` | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-08` | `UNIT`, `INT`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-35, NP-36, NP-40 | RS-12 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-445 | `25-§21-1` | `EC14-STO-03`, `EC14-STO-05`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-31, NP-35, NP-36, NP-42 | RS-12 | FOLLOW-UP | H-STO, H-LATER, H-PRIV, H-STATE |
| VC-R-446 | `25-§21-2` | `EC14-STO-03`, `EC14-STO-05`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-31, NP-35, NP-36, NP-42 | RS-12 | FOLLOW-UP | H-STO, H-LATER, H-PRIV, H-STATE |
| VC-R-447 | `25-§21-3` | `EC14-STO-03`, `EC14-STO-05`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-31, NP-35, NP-36, NP-42 | RS-12 | FOLLOW-UP | H-STO, H-LATER, H-PRIV, H-STATE |
| VC-R-448 | `25-§21-4` | `EC14-STO-03`, `EC14-STO-05`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-31, NP-35, NP-36, NP-42 | RS-12 | FOLLOW-UP | H-STO, H-LATER, H-PRIV, H-STATE |
| VC-R-449 | `25-§21-5` | `EC14-STO-03`, `EC14-STO-05`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-02, NP-31, NP-35, NP-36, NP-40 | RS-12 | FOLLOW-UP | H-STO, H-PRIV, H-STATE |
| VC-R-450 | `25-§22-1` | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` | `INT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-36 | RS-22 | FOLLOW-UP | H-STO |
| VC-R-451 | `25-§22-2` | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` | `INT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-36 | RS-22 | FOLLOW-UP | H-STO |
| VC-R-452 | `25-§22-3` | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` | `INT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-36 | RS-22 | FOLLOW-UP | H-STO |
| VC-R-453 | `25-§22-4` | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` | `INT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-36 | RS-22 | FOLLOW-UP | H-STO |
| VC-R-454 | `25-§22-5` | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` | `INT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-36 | RS-22 | FOLLOW-UP | H-STO |
| VC-R-455 | `25-§22-6` | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` | `INT`, `OBJ`, `RT`, `PROV`, `DOC` | NP-36 | RS-22 | FOLLOW-UP | H-STO |
| VC-R-456 | `25-§23-1` | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `DB`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-28 | RS-05 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-457 | `25-§23-2` | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `DB`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-28 | RS-05 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-458 | `25-§23-3` | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `DB`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-28 | RS-05 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-459 | `25-§23-4` | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `DB`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-28 | RS-05 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-460 | `25-§23-5` | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `DB`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-28 | RS-05 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-461 | `25-§23-6` | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `DB`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-28 | RS-05 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-462 | `25-§23-7` | `EC14-CAB-02`, `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `UNIT`, `DB`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-27, NP-28 | RS-05, RS-09 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-463 | `25-§23-8` | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `DB`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-28 | RS-05 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-464 | `25-§23-9` | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `DB`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-28 | RS-05 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-465 | `25-§23-10` | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `DB`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-28 | RS-05 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-466 | `25-§23-11` | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `DB`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-28 | RS-05 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-467 | `25-§23-12` | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | `DB`, `INV`, `AUDIT`, `REH`, `RT`, `REG`, `PROV`, `DOC` | NP-06, NP-09, NP-28 | RS-05 | BLOCKED | H-D12, H-BIRTH, H-MIG |
| VC-R-468 | `25-§24-1` | `EC14-PRV-02`, `EC14-PERF-01`, `EC14-HOLD-08` | `INT`, `OBJ`, `PERF`, `RT`, `PROV`, `DOC` | NP-36 | RS-19 | FOLLOW-UP | H-STO |
| VC-R-469 | `25-§24-2` | `EC14-PRV-02`, `EC14-PERF-01`, `EC14-HOLD-08` | `INT`, `OBJ`, `PERF`, `RT`, `PROV`, `DOC` | NP-36 | RS-19 | FOLLOW-UP | H-STO |
| VC-R-470 | `25-§24-3` | `EC14-PERF-01`, `EC14-NG-01`, `EC14-HOLD-01` | `UNIT`, `PERF`, `RT`, `REPO`, `PROV`, `DOC` | NP-40 | RS-19 | BLOCKED | H-D12 |
| VC-R-471 | `25-§25-1` | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `PROV`, `DOC` | NP-29, NP-36 | RS-09 | FOLLOW-UP | H-STO |
| VC-R-472 | `25-§25-2` | `EC14-STO-01`, `EC14-HOLD-01` | `UNIT`, `DB`, `INV`, `OBJ`, `RT`, `PROV`, `DOC` | NP-29 | RS-09 | BLOCKED | H-D12 |
| VC-R-473 | `25-§25-3` | `EC14-UDI-06`, `EC14-STO-01`, `EC14-PRV-01`, `EC14-NG-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-22, NP-25, NP-29, NP-40 | RS-09, RS-17 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-474 | `25-§25-4` | `EC14-STO-01`, `EC14-NG-01`, `EC14-HOLD-02` | `UNIT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-29, NP-40 | RS-09 | BLOCKED | H-D13 |
| VC-R-475 | `25-§26-1` | `EC14-STO-02`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-08` | `INT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-30, NP-36 | RS-15 | BLOCKED | H-D12, H-STO, H-D13, H-BIRTH |
| VC-R-476 | `25-§26-2` | `EC14-RTV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `OBJ`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-05, NP-36 | RS-05 | BLOCKED | H-D12, H-STO, H-REVOKE |
| VC-R-477 | `25-§26-3` | `EC14-RTV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `OBJ`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-05, NP-36 | RS-05 | BLOCKED | H-D12, H-STO, H-REVOKE |
| VC-R-478 | `25-§26-4a` | `EC14-STO-08`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-08` | `INT`, `INV`, `OBJ`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-36, NP-41 | RS-09 | BLOCKED | H-D13, H-STO |
| VC-R-479 | `25-§26-5` | `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `OBJ`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-25, NP-36 | RS-22 | FOLLOW-UP | H-PROV, H-STO, H-UDI |
| VC-R-480 | `25-§26-6` | `EC14-STO-02`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `OBJ`, `RT`, `FRT`, `PROV`, `DOC` | NP-30, NP-35, NP-36 | RS-12, RS-15 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-481 | `25-§26-7` | `EC14-STO-02`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | `UNIT`, `INT`, `DB`, `OBJ`, `RT`, `FRT`, `PROV`, `DOC` | NP-30, NP-35, NP-36, NP-42 | RS-12, RS-15 | FOLLOW-UP | H-STO, H-LATER, H-STATE |
| VC-R-482 | `25-§26-8` | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `CONC`, `OBJ`, `RT`, `FRT`, `PROV`, `DOC` | NP-14, NP-36 | RS-13 | BLOCKED | H-D12, H-STO, H-IDEM |
| VC-R-483 | `25-§26-9` | `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08` | `INT`, `OBJ`, `RT`, `FRT`, `PROV`, `DOC` | NP-36 | RS-22 | FOLLOW-UP | H-STO |
| VC-R-484 | `25-§26-10` | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `OBJ`, `RT`, `FRT`, `PROV`, `DOC` | NP-35, NP-36 | RS-12 | FOLLOW-UP | H-STO, H-STATE |
| VC-R-485 | `25-§26-11` | `EC14-RTV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `OBJ`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-05, NP-36 | RS-05 | BLOCKED | H-D12, H-STO, H-REVOKE |
| VC-R-486 | `25-§26-12` | `EC14-STO-07`, `EC14-RET-01`, `EC14-RET-03`, `EC14-VER-02`, `EC14-HOLD-10` | `INT`, `DB`, `AUDIT`, `OBJ`, `RT`, `FRT`, `PROV`, `DOC` | NP-31, NP-32, NP-33 | RS-15 | FOLLOW-UP | H-LEG, H-DISCARD |
| VC-R-487 | `25-§26-13` | `EC14-STO-06`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08` | `INT`, `OBJ`, `RT`, `FRT`, `PROV`, `DOC` | NP-36 | RS-22 | FOLLOW-UP | H-STO |
| VC-R-488 | `25-§26-14` | `EC14-STO-09`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `AUDIT`, `OBJ`, `RT`, `FRT`, `PROV`, `DOC` | NP-28, NP-36 | RS-22 | FOLLOW-UP | H-STO |
| VC-R-489 | `25-§27-1` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-490 | `25-§27-2` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-491 | `25-§27-3` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-492 | `25-§27-4` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-493 | `25-§27-5` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-494 | `25-§27-6` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-495 | `25-§27-7` | `EC14-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-496 | `25-§27-8` | `EC14-NG-01` | `UNIT`, `DB`, `INV`, `RT`, `REPO`, `DOC` | NP-40 | RS-06 | PASS | — |
| VC-R-497 | `24-§5-6` | `EC14-UDI-01`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `INV`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-19, NP-25, NP-26, NP-41 | RS-08, RS-12 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-498 | `24-§7-3` | `EC14-UDI-04`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `NET`, `RT`, `REPO`, `PROV`, `DOC` | NP-20, NP-25, NP-26 | RS-08, RS-12 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-499 | `24-§7-4` | `EC14-UDI-03`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-25, NP-26 | RS-07, RS-16 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-500 | `24-§14-1` | `EC14-UDI-06`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-22, NP-25, NP-26 | RS-12, RS-17 | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-501 | `24-§14-2` | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25, NP-26 | RS-01, RS-12, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-502 | `24-§14-3` | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25, NP-26 | RS-01, RS-12, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-503 | `24-§14-4` | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25, NP-26 | RS-01, RS-12, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-504 | `24-§14-5` | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25, NP-26 | RS-01, RS-12, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-505 | `24-§14-6` | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25, NP-26 | RS-01, RS-12, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-506 | `24-§14-7` | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-23, NP-25, NP-26 | RS-01, RS-12, RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-507 | `24-§14-8` | `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-25, NP-26 | RS-12 | BLOCKED | H-D12, H-PROV, H-UDI |
| VC-R-508 | `24-§14-9` | `EC14-CMD-03`, `EC14-UDI-06`, `EC14-UDI-09`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-07, NP-22, NP-25, NP-26, NP-40 | RS-06, RS-12, RS-17 | BLOCKED | H-D13, H-UDI |
| VC-R-509 | `24-§18-1a` | `EC14-CMD-01`, `EC14-ADP-01`, `EC14-PRV-01`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-04`, `EC14-HOLD-06`, `EC14-HOLD-09`, `EC14-HOLD-11` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `EVAL`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-25, NP-39, NP-42 | RS-01, RS-03, RS-06, RS-07 | BLOCKED | H-D13, H-PROV, H-DTX, H-LATER, H-UDI, H-MIG |
| VC-R-510 | `24-§21-7` | `EC14-CNF-03`, `EC14-HOLD-01`, `EC14-HOLD-06` | `UNIT`, `DB`, `CONC`, `EVAL`, `RT`, `FRT`, `PROV`, `DOC` | NP-16 | RS-01, RS-02 | BLOCKED | H-D12, H-UDI |
| VC-R-511 | `24-§23-6` | `EC14-UDI-09`, `EC14-FAIL-01`, `EC14-PRV-01`, `EC14-HOLD-09` | `UNIT`, `INT`, `RT`, `REPO`, `PROV`, `DOC` | NP-25, NP-26, NP-35 | RS-12 | FOLLOW-UP | H-PROV, H-STATE |
| VC-R-512 | `24-§27-5` | `EC14-ARC-02`, `EC14-HOLD-02`, `EC14-HOLD-06` | `INT`, `DB`, `INV`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-41 | RS-18 | BLOCKED | H-D13, H-UDI |
| VC-R-513 | `24-§31-8` | `EC14-UDI-09`, `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-25, NP-26 | RS-01, RS-12 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-514 | `9-§12-1` | `EC14-ARC-02`, `EC14-HOLD-02` | `INT`, `DB`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-41 | RS-18 | BLOCKED | H-D13 |
| VC-R-515 | `10-§5-10` | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-05, NP-36 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-D13, H-STO, H-REVOKE |
| VC-R-516 | `10-§10-1` | `EC14-UDI-01`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `INV`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-19, NP-25, NP-41 | RS-08 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-517 | `10-§10-3` | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-18, NP-25 | RS-01 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-518 | `10-§10-4` | `EC14-CNF-02`, `EC14-HOLD-02` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-18 | RS-01 | BLOCKED | H-D13 |
| VC-R-519 | `10-§10-5` | `EC14-CNF-03`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-07` | `UNIT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-16 | RS-01, RS-02 | BLOCKED | H-D12, H-D13, H-FPRINT |
| VC-R-520 | `10-§10-7` | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `OBJ`, `RT`, `PROV`, `DOC` | NP-01, NP-05, NP-36 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-D13, H-STO, H-REVOKE |
| VC-R-521 | `10-§13-3` | `EC14-CMD-01`, `EC14-CNF-03`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-07` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-16 | RS-01, RS-02, RS-03, RS-06 | BLOCKED | H-D12, H-D13, H-DTX, H-FPRINT, H-MIG |
| VC-R-522 | `10-§17-4` | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `RT`, `REPO`, `PROV`, `DOC` | NP-18, NP-25 | RS-16 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-523 | `10-§23-3b` | `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-25 | RS-01 | BLOCKED | H-D13, H-PROV, H-UDI |
| VC-R-524 | `12-§4-5` | `EC14-CNF-01`, `EC14-HOLD-02` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-18 | RS-16 | BLOCKED | H-D13 |
| VC-R-525 | `17-§12-1` | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `CONC`, `INV`, `OBJ`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-05, NP-06, NP-36 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-STO, H-BIRTH, H-REVOKE |
| VC-R-526 | `17-§12-2` | `EC14-ARC-02`, `EC14-CAB-04`, `EC14-RTV-01`, `EC14-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-01, NP-05, NP-41 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-REVOKE |
| VC-R-527 | `7-§6-2` | `EC14-ADP-02`, `EC14-MIG-03`, `EC14-HOLD-01`, `EC14-HOLD-05` | `INT`, `DB`, `CONC`, `REH`, `RT`, `PROV`, `DOC` | NP-38, NP-39 | RS-07 | BLOCKED | H-D12, H-FIN |
| VC-R-528 | `7-§6-4` | `EC14-ADP-02`, `EC14-MIG-03`, `EC14-HOLD-01`, `EC14-HOLD-05` | `INT`, `DB`, `CONC`, `REH`, `RT`, `PROV`, `DOC` | NP-38, NP-39 | RS-07 | BLOCKED | H-D12, H-FIN |
| VC-R-529 | `7-§6-5` | `EC14-ADP-02`, `EC14-NG-01`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `REPO`, `DOC` | NP-38, NP-39, NP-40 | RS-07 | FOLLOW-UP | H-FIN |
| VC-R-530 | `7-§15-2a` | `EC14-ADP-02`, `EC14-MIG-03`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `INT`, `DB`, `CONC`, `REH`, `RT`, `FRT`, `PROV`, `DOC` | NP-38, NP-39 | RS-07 | BLOCKED | H-D12, H-FIN |
| VC-R-531 | `BP-§5.3-1` | `EC14-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-532 | `BP-§5.4-1` | `EC14-PRV-02`, `EC14-HOLD-08` | `INT`, `OBJ`, `PROV`, `DOC` | NP-36 | — | FOLLOW-UP | H-STO |
| VC-R-533 | `BP-§6.1-1` | `EC14-CMD-03`, `EC14-NG-01`, `EC14-HOLD-01` | `UNIT`, `DB`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-07, NP-40 | RS-06 | BLOCKED | H-D12 |
| VC-R-534 | `BP-§6.2-1` | `EC14-CMD-01`, `EC14-CMD-03`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-03` | `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09 | RS-03, RS-04, RS-06 | BLOCKED | H-D12, H-D13, H-DTX, H-MIG |
| VC-R-535 | `BP-§6.3-1` | `EC14-ARC-01` | `UNIT`, `REPO`, `DOC` | — | — | PASS | — |
| VC-R-536 | `BP-§6.3-2` | `EC14-ARC-01`, `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-29, NP-36 | RS-09 | FOLLOW-UP | H-STO |
| VC-R-537 | `BP-§8.4-1` | `EC14-ARC-01` | `UNIT`, `REPO`, `DOC` | — | — | PASS | — |
| VC-R-538 | `BP-§9-1` | `EC14-LDG-01`, `EC14-DOC-01` | `UNIT`, `DB`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `DOC` | NP-09 | RS-03, RS-20 | PASS | — |
| VC-R-539 | `BP-§10.3-O` | `EC14-LDG-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-UX-01`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `EVAL`, `OBJ`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `PROV`, `DOC` | NP-09, NP-25, NP-36 | RS-03, RS-14 | BLOCKED | H-D12, H-PROV, H-STO, H-UDI |
| VC-R-540 | `BP-§10.3-W1` | `EC14-LDG-01`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09 | RS-03, RS-04, RS-06 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| VC-R-541 | `BP-§10.3-W2` | `EC14-LDG-01`, `EC14-LDG-03`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-11, NP-13 | RS-02, RS-03, RS-04, RS-06 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| VC-R-542 | `BP-§10.3-W3` | `EC14-LDG-04`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09 | RS-03, RS-04, RS-06 | BLOCKED | H-DTX, H-FIN, H-MIG |
| VC-R-543 | `BP-§10.3-W4` | `EC14-UDI-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `INV`, `EVAL`, `OBJ`, `RT`, `REPO`, `PROV`, `DOC` | NP-19, NP-25, NP-36, NP-41 | RS-08 | BLOCKED | H-D12, H-PROV, H-STO, H-UDI |
| VC-R-544 | `BP-§10.3-W5` | `EC14-CAB-02`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `PROV`, `DOC` | NP-06, NP-27, NP-36 | RS-09 | BLOCKED | H-D12, H-STO, H-BIRTH |
| VC-R-545 | `BP-§10.3-W6` | `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | `UNIT`, `INT`, `EVAL`, `REPO`, `PROV`, `DOC` | NP-25 | — | FOLLOW-UP | H-PROV, H-UDI |
| VC-R-546 | `BP-§10.3-W7` | `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-03` | `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09 | RS-03, RS-04, RS-06 | BLOCKED | H-D12, H-DTX, H-MIG |
| VC-R-547 | `BP-§10.3-W8` | `EC14-CAB-04`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `INT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-06, NP-36 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-STO, H-BIRTH |
| VC-R-548 | `BP-§10.3-W9` | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `RT`, `PROV`, `DOC` | NP-29, NP-36 | RS-09 | FOLLOW-UP | H-STO |
| VC-R-549 | `BP-§10.3-W10` | `EC14-STO-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `OBJ`, `REH`, `RT`, `PROV`, `DOC` | NP-06, NP-29, NP-36 | RS-09 | BLOCKED | H-D12, H-STO, H-BIRTH |
| VC-R-550 | `BP-§10.3-W11` | `EC14-HOLD-01` | `UNIT`, `DB`, `RT`, `PROV`, `DOC` | NP-27 | RS-11 | BLOCKED | H-D12 |
| VC-R-551 | `BP-§10.3-W12` | `EC14-UDI-01` | `UNIT`, `INT`, `INV`, `RT`, `REPO` | NP-19, NP-41 | RS-08 | PASS | — |
| VC-R-552 | `BP-§10.3-W13` | `EC14-ADP-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-38, NP-39 | RS-07 | BLOCKED | H-D12, H-FIN |
| VC-R-553 | `BP-§10.3-C1` | `EC14-LDG-01`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09 | RS-03, RS-04, RS-06 | BLOCKED | H-DTX, H-MIG |
| VC-R-554 | `BP-§10.3-S1` | `EC14-SRC-01`, `EC14-PRV-02`, `EC14-MIG-04`, `EC14-HOLD-01`, `EC14-HOLD-08` | `UNIT`, `INT`, `DB`, `INV`, `EVAL`, `OBJ`, `PERF`, `REH`, `RT`, `PROV`, `DOC` | NP-01, NP-13, NP-36 | RS-18, RS-19 | BLOCKED | H-D12, H-STO |
| VC-R-555 | `BP-§10.3-SA1` | `EC14-CMD-01`, `EC14-CNF-03`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-07`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `OBJ`, `REH`, `RT`, `FRT`, `REG`, `REPO`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-16, NP-25, NP-36 | RS-01, RS-02, RS-03, RS-04, RS-06 | BLOCKED | H-D12, H-D13, H-PROV, H-DTX, H-STO, H-FPRINT, H-MIG |
| VC-R-556 | `BP-§10.3-SA2` | `EC14-LDG-03`, `EC14-CMD-01`, `EC14-CNF-03`, `EC14-CNF-04`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-07` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-11, NP-13, NP-16, NP-17 | RS-01, RS-02, RS-03, RS-04, RS-06 | BLOCKED | H-D12, H-DTX, H-FPRINT, H-MIG |
| VC-R-557 | `BP-§10.3-SB1` | `EC14-LDG-03`, `EC14-TOT-01`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-10, NP-11, NP-13 | RS-02, RS-03, RS-04, RS-06 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| VC-R-558 | `BP-§10.3-SB2` | `EC14-LDG-03`, `EC14-LDG-04`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-03`, `EC14-HOLD-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REH`, `RT`, `FRT`, `REG`, `PROV`, `DOC` | NP-06, NP-07, NP-08, NP-09, NP-11, NP-13 | RS-02, RS-03, RS-04, RS-06 | BLOCKED | H-DTX, H-FIN, H-MIG |
| VC-R-559 | `BP-§10.3-X` | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | `UNIT`, `INT`, `DB`, `CONC`, `EVAL`, `OBJ`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-01, NP-05, NP-25, NP-36 | RS-05, RS-09, RS-18 | BLOCKED | H-D12, H-PROV, H-STO, H-REVOKE, H-UDI |
| VC-R-560 | `BP-§11-1` | `EC14-ARC-01` | `UNIT`, `REPO`, `DOC` | — | — | PASS | — |
| VC-R-561 | `BP-§11-2` | `EC14-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-562 | `BP-§11-3` | `EC14-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-563 | `BP-§13-1` | `EC14-VER-01` | `UNIT`, `DB`, `INV`, `EVAL`, `REPO` | NP-06, NP-07 | — | PASS | — |

## 14. Final Acceptance Statement

Not executed. To be completed only after the package is locked, implementation is authorized and performed, and Stages 16 to 19 have produced their records. Mission Control decides acceptance. Nothing in this draft checklist is acceptance, demonstration or evidence.

```text
CHECKLIST EXECUTION: NOT STARTED
ROWS DEMONSTRATED: 0 OF 563
D12: HELD (225 ROWS)
D13: HELD (92 ROWS)
DTX: HELD (42 ROWS)
AI PROVIDER EVIDENCE: NOT ACCEPTED (97 ROWS)
STORAGE ACTIVATION (DR2): NOT AUTHORIZED (124 ROWS)
UNVERIFIED — ACCESS REQUIRED: 20 FACTS
```

## Change Log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-10-09 | Claude Code (SB-P-1.14-MC-21 §4) | Initial Stage 12 draft |
| 0.2 | 2026-10-09 | Claude Code (SB-P-1.14-MC-23 §4) | Stage 13 PQ-10 refinement: package-level builder accountability for `3-§17-7`, `3-§17-8` (WS-G), `5-§18-8a` (WS-B) and `BP-§10.3-W11` (WS-C) from their locked Blueprint §8 placement and the Blueprint §7 register; checks NP-43 and NP-44 added and four row items extended. No obligation, EIS link, FCTM row, hold or Founder decision changed; PQ-2 unchanged |


## Stage 13 Lock Crossing Note

Mission Control MC-24 accepted package v0.2 content in PR #849; MC-25 carries that exact reviewed package into canonical `main` by a separate human-merge lock crossing. Only lifecycle/status metadata is changed from v0.2. The locked EIS mapping remains 2,282 links; PQ-10 builder accountability is package-level and PQ-2 remains an implementation prerequisite. This record is effective only after human merge of the Stage 13 lock PR and post-merge verification. Package lock is separate from Implementation Authorization.
