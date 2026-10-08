# SB-P-1.14 — Engineering Implementation Specification

STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.14 — Business Memory, Documents & Durable Media |
| Document | Engineering Implementation Specification (EIS) |
| Lifecycle stage | Source 18 v1.2 Stage 10 — EIS Review (consolidated documentary refinement) |
| Status | `DRAFT — MISSION CONTROL REVIEW REQUIRED` |
| Author | Claude Code (Stage 9 EIS author; Stage 10 refinement) |
| Authorization | SB-P-1.14-MC-13, `communication/missions/SB-P-1.14/mission-control/20-stage9-eis-creation-authorization.md` (blob `6bc024fbbb262b9b3d72f9c8afefa67b82619bf7`), canonical at `main@ded86278675c16be6ca2586d709eb3ef71a14440` (PR #830); Stage 10 refinement under SB-P-1.14-MC-16, `communication/missions/SB-P-1.14/mission-control/28-stage10-consolidated-eis-refinement-authorization.md` (blob `6408e753907548ac1a4e0f9f2e66bc1e55bb8dd7`), canonical at `main@cc8663dc4f8e7e5eacfaa8b41cac1a7cceece0bd` |
| Related Product Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.14.md`, blob `256828d2c26fba7dab6f52975efb8b574b1563f1` (`APPROVED — LOCKED`, Sections 1–21) |
| Canonical FCTM | blob `01e9856aca0afdb1267230a1932fe34054449a4b`: 766 rows, 563 `IN SCOPE` |
| Founder decisions | `FPDR-1` to `FPDR-3` (`founder/02`, blob `9717b29d`); `FPDR-4` (`founder/03`, blob `3f36c06d`). Unqualified `FPDR-n` means SB-P-1.14; upstream decisions are written `SB-P-1.13 FPDR-n` |
| Date | 2026-10-08 |
| Revision | Stage 9 draft (blob `20fd97177348ad9b02bbb8d1be9e53f05ad18bde`, PR #831 head `254e40a723e4c74af69d425cb918bb03dc9817e2`) refined once for all accepted Stage 10 findings (Section 2) |
| Next gate | Mission Control Stage 10 disposition |

## 2. Purpose and Authority

This EIS specifies how the locked SB-P-1.14 Blueprint is to be built. It realizes the locked product intent, the Stage 7 Engineering Review and the five canonical specialist constraints. It does not change Product Truth, FCTM dispositions, owning missions, build commitments, commercial classifications or mission assignments, and it does not resolve any Founder-reserved question.

This revision applies one consolidated documentary refinement for the accepted Stage 10 findings (SB-P-1.14-MC-16), including the Founder-approved restorative T7 Security refinement (`founder/05`), which restores existing security truth and adds no Product Truth. Requirement IDs and FCTM row mappings are unchanged; only requirement wording changed.

| MC-16 item | Specialist findings | EIS requirements refined |
|---|---|---|
| R10-SEC-01 (MC10-PRE-01; merges R10-STO-03, R10-MIG-01) | SEC14-EIS-S10-01; S10-SP4-03; S10M-01 | EIS14-SEC-02, EIS14-MIG-02, EIS14-VER-01, EIS14-TOT-01 |
| R10-SEC-02 | SEC14-EIS-S10-02 | EIS14-CAB-03, EIS14-SEC-01 |
| R10-SEC-03 | SEC14-EIS-S10-03 | EIS14-VER-01, EIS14-STO-03, EIS14-CMD-03, EIS14-MIG-05 |
| R10-FI-01 (MC10-PRE-02; merges R10-MIG-05) | S10-FI-01; S10M-05 | EIS14-TOT-01, EIS14-LDG-01, EIS14-LDG-05, EIS14-SRC-02, EIS14-VER-01, EIS14-MIG-05, EIS14-HOLD-05 |
| R10-FI-02 | S10-FI-02 | EIS14-LDG-03, EIS14-CMD-01, EIS14-VER-01, EIS14-HOLD-05 |
| R10-FI-03 | S10-FI-03 | EIS14-CMD-03, EIS14-VER-01, EIS14-HOLD-05 |
| R10-AI-01 | UDI-EIS10-01 | EIS14-UDI-05, EIS14-VER-01 |
| R10-AI-02 | UDI-EIS10-02 | EIS14-UDI-04, EIS14-VER-01 |
| R10-AI-03 | UDI-EIS10-03 | EIS14-PRV-01 |
| R10-AI-04 | UDI-EIS10-04 | EIS14-TOT-01 (via R10-FI-01) |
| R10-AI-05 | UDI-EIS10-05 | EIS14-UDI-06, EIS14-VER-01 |
| R10-STO-01 | S10-SP4-01 | EIS14-RTV-01, EIS14-PRV-02 |
| R10-STO-02 | S10-SP4-02 | EIS14-RET-01, EIS14-STO-07, EIS14-PRV-02 |
| R10-STO-04 | S10-SP4-04 | EIS14-STO-02, EIS14-PRV-02 |
| R10-MIG-02 | S10M-02 | EIS14-MIG-03, EIS14-ADP-02 |
| R10-MIG-03 | S10M-03 | EIS14-MIG-04, EIS14-MIG-05, EIS14-VER-01 |
| R10-MIG-04 | S10M-04 | EIS14-MIG-06, EIS14-MIG-05, EIS14-VER-01 |

This EIS remains a draft for Mission Control Stage 10 disposition. It authorizes nothing: no implementation package, code, SQL, schema or migration work, provider selection or activation, Cloudflare R2 activation, production access, or delivery.

## 3. Canonical Inputs Read

| Input | Path | Blob |
|---|---|---|
| Locked Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.14.md` | `256828d2c26fba7dab6f52975efb8b574b1563f1` |
| FCTM | `communication/missions/SB-P-1.14/claude-code/02-stage2-populated-fctm.md` | `01e9856aca0afdb1267230a1932fe34054449a4b` |
| Founder decisions `FPDR-1`–`FPDR-3` | `communication/missions/SB-P-1.14/founder/02-stage3-founder-product-decision-record.md` | `9717b29dbe08b6d115f512a90450c528d5212773` |
| Founder decision `FPDR-4` | `communication/missions/SB-P-1.14/founder/03-post-stage6-founder-product-decision-record.md` | `3f36c06da8a7327766ada44248ce2953cd8e3a2c` |
| Stage 6 Builder Review | `communication/missions/SB-P-1.14/claude-code/08-stage6-builder-review.md` | `11dbd47b77e68eced7a4b4a3e190cfbd4f818239` |
| S7-SP-1 Security / RLS / Grants | `communication/missions/SB-P-1.14/specialists/01-stage7-security-rls-grants-review.md` | `93252bba5b7d133d4db14efb7cfc838ff035b944` |
| S7-SP-2 Transaction & Financial Integrity | `communication/missions/SB-P-1.14/specialists/02-stage7-transaction-financial-integrity-review.md` | `157cbf0fa219bfb1b2b87c3a753053756993810a` |
| S7-SP-3 UDI / AI Interpretation Safety | `communication/missions/SB-P-1.14/specialists/03-stage7-udi-ai-safety-review.md` | `3344bf583e511eae0a1296c6f344abd268bfd65d` |
| S7-SP-4 Storage / Provider Readiness | `communication/missions/SB-P-1.14/specialists/04-stage7-storage-provider-readiness-review.md` | `dfcde0c759c60e59096b476bd7c7ee8b2a940208` |
| S7-SP-5 Migration / Data-Transition Safety | `communication/missions/SB-P-1.14/specialists/05-stage7-migration-data-transition-review.md` | `74273b4b5d35258fce66a8b0870c4de8d6a750a9` |
| SB-P-1.12 Blueprint / EIS (locked) | `docs/phase-1-mission-blueprint/completed/SB-P-1.12.md`; `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` | `77d52096`; `c444f750` |
| SB-P-1.13 Blueprint / EIS (locked) | `docs/phase-1-mission-blueprint/completed/SB-P-1.13.md`; `docs/phase-1-mission-blueprint/implementation/SB-P-1.13-EIS.md` | `bbf65429`; `9a1e723d` |
| Build Plan | `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` |
| Source 18 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | `0945bda60a93c99909c3b7a247d5427ebe256011` |
| S10 Security / RLS / Grants | `communication/missions/SB-P-1.14/specialists/06-stage10-eis-security-rls-grants-review.md` | `c9b14a5dcbddaad5aa5a62e080e3f96945ad7857` |
| S10 Transaction & Financial Integrity | `communication/missions/SB-P-1.14/specialists/07-stage10-eis-transaction-financial-integrity-review.md` | `56ce53c4a5fdc196b19cd81ab31f4dbfd974ed5a` |
| S10 UDI / AI Safety | `communication/missions/SB-P-1.14/specialists/08-stage10-eis-udi-ai-safety-review.md` | `4235bedff08f7802fe504a6438b1c006197f5def` |
| S10 Storage / Provider Readiness | `communication/missions/SB-P-1.14/specialists/09-stage10-eis-storage-provider-readiness-review.md` | `431de25b3305959eceabb72c304fada62e317444` |
| S10 Migration / Data Transition | `communication/missions/SB-P-1.14/specialists/10-stage10-eis-migration-data-transition-review.md` | `676ce4bc74fa16b05763c07f61b0622243e98612` |
| Founder T7 Security refinement approval | `communication/missions/SB-P-1.14/founder/05-stage10-t7-security-refinement-approval.md` | `7e41d4835dc9fa5a8b62619049a52584eb2a364e` |
| MC-15 T7 disposition | `communication/missions/SB-P-1.14/mission-control/27-stage10-t7-security-refinement-disposition.md` | `8a00b7cdaa7263c33f0d370fa88de61b863843dd` |
| MC-16 refinement authorization | `communication/missions/SB-P-1.14/mission-control/28-stage10-consolidated-eis-refinement-authorization.md` | `6408e753907548ac1a4e0f9f2e66bc1e55bb8dd7` |

Contracts and delegates mapped by the FCTM are read at the blobs recorded in FCTM §0.4. The Stage 7 Engineering Review is Blueprint Sections 20–21.

## 4. Implementation Principles

1. **One Business Memory, one write path.** Every financial write goes through the one governed command; every reader uses one canonical classification with distinct sales, income, purchase and expense measures.
2. **Consume, never duplicate, upstream authority.** SB-P-1.12 decides; SB-P-1.13 interprets and proposes; this mission builds no authority tables, parallel permission path or second AI brain (SB-P-1.12 EIS-DEP-01).
3. **Additive and history-preserving.** No rewrite of existing sale/purchase history; no duplicate credit rows (`FPDR-1`, `FPDR-4`).
4. **Evidence, not truth.** Interpretation output is evidence until the merchant confirms the exact reviewed version (`FPDR-3`).
5. **Stored object ≠ interpreted fact ≠ confirmed record.** Three states, three tables, three outcomes.
6. **Authorization at delivery.** Retrieval is decided when bytes are delivered, not only when a link is issued; server-mediated delivery is the default.
7. **Born hardened.** No protected object exists, even briefly, under inherited broad grants; hardening follows the security semantics of each object type (table, view, function, sequence, default privileges).
8. **Fail narrow and honest.** No false success; unknown outcome is a state; compensation never deletes a confirmed record.
9. **Provider-replaceable.** Interfaces in Smart Business; providers behind adapters and evidence gates.
10. **Holds stay visible.** A described mechanism is not evidence that a held dependency is met (SB-P-1.14-MC-13 §7).

## 5. Repository Baseline (at `main@ded86278675c16be6ca2586d709eb3ef71a14440`)

No application, schema, test or Lambda path changed between this baseline and `main@cc8663dc4f8e7e5eacfaa8b41cac1a7cceece0bd` (repository inspection; only governance and mission documents changed).

| Area | Current state | EIS consequence |
|---|---|---|
| Transactions | `transaction_type CHECK IN ('sale','purchase')`; `amount > 0`; free-text `party_name`; `payment_method` includes `credit`; direct client `insert`; Owner `UPDATE` policy; `correct_transaction` `SECURITY INVOKER`, rejects other types | EIS14-LDG-01 to -04, EIS14-CMD-01 to -03, EIS14-MIG-01 |
| Correction audit | `transaction_correction_events` with original/updated values; `ON DELETE CASCADE`; Owner direct `INSERT` policy | EIS14-CMD-02, -03 |
| Grants | `GRANT ALL` to `anon`/`authenticated`/`service_role` on six tables; default privileges grant ALL on future tables and EXECUTE on functions | EIS14-SEC-02, EIS14-MIG-02 |
| Readers | `getDailyTotals` sums sale/purchase; UI binary `isSale ? … : Purchase` | EIS14-TOT-01, EIS14-LDG-05, EIS14-MIG-06 |
| Import/parser | Catalog CSV/XLSX import with limits, magic-byte and macro checks, preview/commit, row idempotency; parser lease with SHA-256; unwired Lambda offload; `worker_threads` isolation incompatible with the Cloudflare build target | EIS14-UDI-01 to -05, EIS14-IDM-02 |
| Preview binding | `catalog_link_preview_tokens` (single expected-state fingerprint, expiry) | EIS14-CNF-03 (generalized via SB-P-1.12 `confirmation_bindings`) |
| Inventory | `opening_stock` one per item; `create_inventory_movement` with idempotency | EIS14-ADP-02 |
| Storage | No bucket, policy, storage client or R2 credential | EIS14-STO-01 to -09, EIS14-PRV-02 |
| Tests | Catalog-import, inventory, parser-lease suites; no Ledger tests | EIS14-VER-01 |

## 6. Target Architecture Overview

```text
visual upload ─┐                        ┌─ ledger (four-state model, governed create/correction)
attachment     ├─► udi intake ─► parse/ ├─► adapters ─► governed commands ─► authoritative rows
handoff (13)  ─┘   (validate,   interpret│                                        │
                    fingerprint) (gateway)└─ preview + confirmation binding (12)    ▼
storage control plane ◄── two-phase ingest ◄── original bytes           cabinet (documents,
   (media_objects; provider adapter → R2 behind DR2)                      versions, links, audit)
search/exports ◄── one query layer + one classification ◄── ledger + cabinet
```

All boxes run behind the SB-P-1.12 kernel (`authz.authorize`, explicit active business) and are blocked where their FCTM rows carry `D12`, `D13` or `DTX` (Section 27).

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-ARC-01` | Module boundaries. Server logic in TanStack Start server functions behind `requireSupabaseAuth`, split into `ledger` (four-state domain model and readers), `udi` (intake, parsing, interpretation, preview), `storage` (object control plane and provider adapter), `cabinet` (document memory, versions, provenance), `search` (query layer, summaries, exports) and `jobs` (requirements and interfaces for storage maintenance, executed only through the shared SB-P-1.15 Scheduler or on-demand where approved behaviour needs no background timing). No module holds its own permission logic, Business Memory copy, parser stack or storage universe. | `5-§7-1`, `5-§7-8`, `22-§4-1`, `22-§4-2`, `22-§4-3`, `22-§4-4`, `22-§9-1`, `22-§17-1`, `25-§6-1`, `25-§6-2`, `25-§7-1`, `25-§7-2`, `BP-§6.3-1`, `BP-§6.3-2`, `BP-§8.4-1`, `BP-§11-1` (16) |
| `EIS14-ARC-02` | One Business Memory read model. Conversation, dashboard, Receipt Cabinet, summaries and exports read the same authoritative tables through one `ledger`/`search` query layer; no channel, Daily Intelligence or export copy is kept. | `3-§5-1`, `3-§5-10`, `3-§9-14`, `3-§12-2`, `3-§12-3`, `3-§12-4`, `3-§12-5`, `3-§14-2`, `3-§15-1`, `3-§15-2`, `3-§15-3`, `3-§15-4`, `3-§15-5`, `3-§19-13a`, `24-§27-5`, `9-§12-1`, `17-§12-2` (17) |

## 7. Four-State Ledger Domain Model and Aggregation

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-LDG-01` | Four-state type model. `transaction_type` widens additively to the existing `sale`/`purchase` plus `income`, `expense`, `credit` and `repayment`; `sale`, `income`, `purchase` and `expense` each keep a distinct measure under EIS14-TOT-01 (`sale` is never merged into generic income, nor `purchase` into generic expense, in a merchant-facing total); existing rows keep their type and values (`FPDR-1`; S10-FI-01). | `3-§3`, `3-§4-1`, `3-§4-2`, `3-§4-3`, `3-§4-4`, `3-§4-6`, `3-§19-1`, `3-§19-2`, `BP-§9-1`, `BP-§10.3-O`, `BP-§10.3-W1`, `BP-§10.3-W2`, `BP-§10.3-C1` (13) |
| `EIS14-LDG-02` | Credit direction. Every `credit` row carries an explicit direction (`owed_to_business` / `owed_by_business`); amount stays positive (`amount > 0`); direction is required, never inferred from sign (`FPDR-1`; S7-FI review question on credit direction). | `3-§4-3`, `3-§5-4`, `3-§6-8`, `3-§10-5` (4) |
| `EIS14-LDG-03` | Repayment-target link and commit-time revalidation (`FPDR-4`; R10-FI-02; S10-FI-02). Each `repayment` row references exactly one settlement target: a standalone `credit` row or a `sale` row with `payment_method = credit`, in the same business, through a business-scoped composite reference. Linking never updates, converts or duplicates the target sale. Inside the commit transaction the governed command verifies that the target still exists, belongs to the same business and is still an `FPDR-4`-valid target (a standalone `credit`, or a `sale` whose current `payment_method` is still `credit`), and that it has not materially changed against the reviewed version; otherwise the command stops and returns to the existing clarification/review/re-confirmation path. The mechanism (locking, transactional predicate or version comparison) is an EIS-level engineering choice. Each actual partial or multiple repayment is its own row; same-intent retries are deduplicated by command idempotency (EIS14-IDM-01). No remaining-balance, overpayment, ageing, allocation or reconciliation rule exists in SB-P-1.14 (SB-P-1.16; EQ14-01, EQ14-02). | `3-§4-3`, `3-§4-4`, `3-§5-4`, `3-§5-5`, `3-§6-8`, `3-§8-8`, `3-§9-7`, `3-§10-5`, `3-§19-2`, `BP-§10.3-W2`, `BP-§10.3-SA2`, `BP-§10.3-SB1`, `BP-§10.3-SB2` (13) |
| `EIS14-LDG-04` | No history rewrite; no duplicate credit. No migration, command, correction or job converts, reinterprets or duplicates an existing or future `sale + payment_method=credit` row; a new credit sale is one `sale` row; no backfill creates `credit` rows (`FPDR-1`, `FPDR-4`; S7M-03). | `3-§4-5`, `3-§8-16`, `3-§20-1`, `3-§20-2`, `3-§22-1`, `3-§22-2`, `BP-§10.3-W3`, `BP-§10.3-SB2` (8) |
| `EIS14-LDG-05` | Truthful readers and confirmation. Every reader (transaction list, dashboard, correction dialog, conversation answers, exports) renders each of the six types by name, never via a binary sale/purchase branch, and takes totals only from the distinct measures of EIS14-TOT-01; post-write confirmation is built from the committed row returned by the command, not from the proposal (Contract 3 §6; S10-FI-01). | `3-§5-1`, `3-§5-2`, `3-§5-3`, `3-§5-4`, `3-§5-5`, `3-§5-6`, `3-§5-10`, `3-§6-1`, `3-§6-2`, `3-§6-3`, `3-§6-4`, `3-§6-5`, `3-§6-6`, `3-§6-7`, `3-§6-8`, `3-§6-9`, `3-§6-10`, `3-§19-1`, `3-§19-3` (19) |
| `EIS14-LDG-06` | Ledger role application. Ledger read, create, correct and export actions are distinct kernel capabilities registered by this mission with Owner/Manager/Employee defaults consumed from SB-P-1.12; Customer/Supplier/Delivery participants have no Ledger capability (Contract 3 §11; SEC14-S7-03). | `3-§11-1`, `3-§11-2`, `3-§11-3`, `3-§11-4`, `3-§11-5`, `3-§11-7`, `3-§18-1`, `3-§18-2`, `3-§18-3`, `3-§18-5`, `3-§18-6`, `3-§19-10`, `3-§19-11` (13) |
| `EIS14-TOT-01` | One canonical classification source with distinct truthful measures (R10-FI-01, R10-AI-04, R10-MIG-05; S10-FI-01; UDI-EIS10-04; S10M-05). A single SQL-level classification (view or function, born hardened under EIS14-SEC-02) is the only source for every financial total and returns distinct measures: **sales** from `sale` rows; **income** from `income` rows; **purchases** from `purchase` rows; **expenses** from `expense` rows. A broader combined measure (for example all income-class or all expense-class events) may exist only when explicitly named as combined and is never substituted for, or labelled as, a distinct merchant total. A credit-method sale counts once, as a sale; standalone `credit` contributes to no sales or income measure; `repayment` contributes to no sales or income measure. Dashboard, period summaries, conversation and AI answers, exports and migration regression evidence all consume this classification and cannot relabel generic income as sales or generic expense as purchases (`FPDR-1`, `FPDR-4`; S7-FI-04). No new customer-facing label is introduced. | `3-§9-10`, `3-§9-11`, `3-§10-2`, `3-§10-3`, `3-§10-4`, `3-§10-5`, `3-§10-9`, `3-§19-12`, `BP-§10.3-SB1` (9) |

## 8. Governed Command Path

The sequence is fixed by upstream truth: SB-P-1.12 WS-A3 transactions-family cut-over → SB-P-1.13 `create_transaction_governed` → this mission widens that command and converts correction into a command in the same family. No intermediate state leaves two protected write paths.

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-CMD-01` | Governed create command widened. The four states are added to the single SB-P-1.13 governed create-transaction command (`create_transaction_governed`, EIS13-CMD-02) under the SB-P-1.12 narrow-executor contract, consuming the confirmation binding, kernel revalidation, the shared idempotency pattern and, for repayments, the commit-time target revalidation of EIS14-LDG-03, in one protected transaction. All callers (forms, conversation, voice, UDI) use it. | 42 rows: listed in Section 29.2 (Section 29.2) |
| `EIS14-CMD-02` | Governed correction command. Correction becomes a command that, in one transaction, revalidates authority, records the prior values and the new values in an append-only correction event, applies the change and preserves `FPDR-1`/`FPDR-4` semantics (a correction never converts a credit-method sale into a `credit` row). Correction events are never written directly by clients (SEC14-S7-04; S7-FI-06). | `3-§8-1`, `3-§8-2`, `3-§8-3`, `3-§8-4`, `3-§8-5`, `3-§8-6`, `3-§8-7`, `3-§8-8`, `3-§8-9`, `3-§8-10`, `3-§8-11`, `3-§8-12`, `3-§8-13`, `3-§8-14`, `3-§8-15`, `3-§8-16`, `3-§17-6`, `3-§18-3`, `3-§19-7` (19) |
| `EIS14-CMD-03` | Complete direct-mutation closure (R10-FI-03; S10-FI-03; SEC14-EIS-S10-03). After cut-over: ordinary authenticated clients have no direct `INSERT`, `UPDATE` or `DELETE` on `transactions`; `transaction_correction_events` is append-only and not directly `INSERT`/`UPDATE`/`DELETE`-capable by ordinary clients; only the approved governed create and correction commands mutate them. The legacy `correct_transaction` signature, any superseded overload and any other function identity that can write these tables are dropped or have `EXECUTE` revoked. Verification inspects actual table privileges, RLS policies, executable functions/RPCs (exact signatures and overloads) and legacy paths, and proves no alternate protected write path (S7M-04; SEC14-S7-04). | `3-§22-1`, `3-§22-2`, `22-§28-9`, `24-§14-9`, `BP-§6.1-1`, `BP-§6.2-1` (6) |

## 9. Idempotency, Content Fingerprint and Unknown Outcome

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-IDM-01` | Command idempotency. Every consequential command takes a client request key resolved through the SB-P-1.12 shared idempotency pattern (business, actor, operation, key, payload fingerprint, committed outcome) before mutable evaluation; replay returns the committed outcome (S7-FI-03). | `3-§17-1`, `3-§17-2`, `3-§19-6`, `5-§11-1`, `5-§11-2`, `5-§11-3`, `5-§11-4`, `5-§11-5`, `5-§17-5`, `5-§17-10`, `5-§18-6`, `22-§29-8`, `25-§14-2`, `25-§14-3`, `25-§14-4`, `25-§14-5`, `25-§26-8` (17) |
| `EIS14-IDM-02` | Content fingerprint as duplicate evidence only. A business-scoped SHA-256 of the original bytes (the parser-lease precedent) identifies re-uploaded content and surfaces a possible duplicate in the preview; it never substitutes for command idempotency and never merges across businesses (S7-FI-03; UDI-AI-S7-09). | `3-§7-8`, `3-§16-6`, `5-§9-7`, `5-§10-7`, `5-§11-1`, `5-§11-3`, `5-§11-4`, `5-§17-5`, `5-§18-6`, `25-§14-4`, `25-§26-8` (11) |
| `EIS14-IDM-03` | Unknown outcome. A command whose commit result is unknown (timeout, lost response) is reconciled by outcome lookup on its request key before any retry; the merchant sees an explicit unknown-then-resolved state, never a guessed success (SB-P-1.13 EIS13-IDM-02). | `3-§17-1`, `3-§17-2`, `3-§17-11`, `5-§17-10`, `25-§14-5`, `25-§20-10` (6) |

## 10. UDI Intake, Validation and Parsing

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-UDI-01` | One intake pipeline. A single `udi` pipeline generalizes the existing parser lease, limits and content checks for all approved inputs from visual upload and from the SB-P-1.13 attachment handoff (EIS13-ATT-01); no feature module builds its own parser; no third parser stack (Contract 5 §19; Contract 22 §9). | `3-§5-8`, `3-§5-9`, `5-§3-1`, `5-§4-14`, `5-§8-2`, `5-§8-3`, `5-§8-4`, `5-§11-5`, `5-§19-2`, `22-§9-2`, `22-§9-3`, `22-§28-5`, `22-§29-5`, `24-§5-6`, `10-§10-1`, `BP-§10.3-W4`, `BP-§10.3-W12` (17) |
| `EIS14-UDI-02` | Intake validation. Server-side type, size, decompressed-size, magic-byte and encryption/macro checks per kind before any parse or storage commit; failures map to typed recoverable states (Contract 5 §16, §17). | `5-§4-1`, `5-§4-2`, `5-§4-3`, `5-§4-4`, `5-§4-5`, `5-§4-6`, `5-§4-7`, `5-§4-8`, `5-§4-9`, `5-§4-14`, `5-§16-4`, `5-§16-5`, `5-§17-1`, `5-§17-2`, `5-§17-3`, `25-§8-4`, `25-§19-8` (17) |
| `EIS14-UDI-03` | Deterministic structured routing. CSV and XLSX are always parsed deterministically; AI may label columns or propose mappings but never silently reinterprets cell values; unknown schemas produce clarification, not guesses (UDI-AI-S7-01). | `3-§5-8`, `5-§4-4`, `5-§4-5`, `5-§10-5`, `5-§18-4`, `24-§7-4` (6) |
| `EIS14-UDI-04` | Non-executing, non-fetching PDF and image path (R10-AI-02; UDI-EIS10-02). PDFs and images are rasterized or text-extracted by a processor that executes no embedded script or form action and performs no document-controlled outbound fetch, URL or resource loading, callback or automatic recursive traversal of embedded objects or attachments. Any embedded object that is supported re-enters the normal untrusted intake and validation pipeline as its own item. Processing runs in an isolated budget that works in the deployed runtime (offload where needed); runtime fit is evidence-held (UDI-AI-S7-03; EQ14-04). | `3-§5-7`, `5-§4-1`, `5-§4-2`, `5-§4-3`, `5-§4-8`, `5-§14-1`, `5-§14-2`, `5-§14-3`, `5-§14-4`, `5-§14-5`, `5-§14-6`, `5-§14-7`, `5-§14-8`, `5-§18-3`, `24-§7-3` (15) |
| `EIS14-UDI-05` | Type-sensitive spreadsheet formula safety (R10-AI-01; UDI-EIS10-01). Inbound: formulas are never evaluated; formula text and cached value are both retained with provenance; consequential values derived from formulas require explicit review. Outbound: CSV/XLSX exports neutralize only untrusted textual values that spreadsheet software could interpret as formulas (text beginning with `=`, `+`, `-`, `@`, tab or carriage return); genuine typed numeric, date and boolean values, including negative numbers, are preserved as typed values. Round-trip and negative-number regression tests are required (UDI-AI-S7-04). | `3-§10-6`, `3-§10-7`, `3-§10-9`, `5-§4-4`, `5-§4-5` (5) |

## 11. Untrusted Content, Interpretation Validation and Context Minimization

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-UDI-06` | Document content is untrusted data. Extracted text, metadata, filenames, headers and line items enter model context only as delimited data after the SB-P-1.13 instruction/data separation (EIS13-CTX-01); they can never change intent, tool availability, destination or authority. This is verified with English, Malayalam, Manglish/transliterated and mixed/code-switched injection fixtures across OCR text, filenames/metadata, headers and line items (R10-AI-05; UDI-EIS10-05; UDI-AI-S7-02). | `3-§16-8`, `3-§16-9`, `3-§16-10`, `3-§16-11`, `3-§16-12`, `3-§16-13`, `3-§16-14`, `5-§2-2`, `5-§13-8`, `5-§13-9`, `5-§13-10`, `5-§13-11`, `5-§13-12`, `5-§16-7`, `25-§25-3`, `24-§14-1`, `24-§14-9` (17) |
| `EIS14-UDI-07` | Interpretation schema. The AI gateway returns a schema-validated interpretation per document type (type, fields, line items, confidence, conflicts); invalid output is a failure state; missing fields are surfaced, never invented (SB-P-1.13 EIS13-TOOL-02; Contract 5 §5, §13). | `3-§16-1`, `3-§16-2`, `3-§16-3`, `3-§16-4`, `3-§16-5`, `3-§16-6`, `3-§16-7`, `5-§3-2`, `5-§3-3`, `5-§5-1`, `5-§5-2`, `5-§5-3`, `5-§5-4`, `5-§5-5`, `5-§5-6`, `5-§5-7`, `5-§5-8`, `5-§5-9`, `5-§13-1`, `5-§13-2`, `5-§13-3`, `5-§13-4`, `5-§13-5`, `5-§13-6`, `5-§13-7`, `24-§14-2`, `24-§14-3`, `24-§14-4`, `24-§14-5`, `24-§14-6`, `24-§14-7` (31) |
| `EIS14-UDI-08` | Context minimization. Only the document pages or regions needed for the task, and only the linked business context the actor may read, are sent to the gateway; Owner-only aggregates never enter context for non-Owner principals (UDI-AI-S7-08). | `5-§12-5`, `5-§13-11`, `5-§16-7` (3) |
| `EIS14-UDI-09` | AI gateway consumption. UDI calls only the SB-P-1.13 gateway; no direct provider SDK in `udi`; gateway failure maps to the layered failure states (EIS14-FAIL-01); deterministic paths keep working without AI. | `22-§29-13`, `24-§5-6`, `24-§7-3`, `24-§14-1`, `24-§14-2`, `24-§14-3`, `24-§14-4`, `24-§14-5`, `24-§14-6`, `24-§14-7`, `24-§14-8`, `24-§14-9`, `24-§23-6`, `24-§31-8` (14) |

## 12. Ambiguity, Preview, Confirmation and `FPDR-3`

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-CNF-01` | Clarification and safe rejection. Ambiguity cases (Contract 3 §7; Contract 5 §10) produce the smallest clarification or a safe rejection; an uncertain write stops without blocking unrelated work. | `3-§7-1`, `3-§7-2`, `3-§7-3`, `3-§7-4`, `3-§7-5`, `3-§7-6`, `3-§7-7`, `3-§7-8`, `3-§7-9`, `3-§17-4`, `3-§17-5`, `3-§19-5`, `5-§10-1`, `5-§10-2`, `5-§10-3`, `5-§10-4`, `5-§10-5`, `5-§10-6`, `5-§10-7`, `5-§10-8`, `5-§10-9`, `5-§10-10`, `5-§18-2`, `10-§17-4`, `12-§4-5` (25) |
| `EIS14-CNF-02` | Preview and review. The preview shows recognized type, key fields, line items, destination, fields requiring confirmation, possible duplicates and unreadable-content warnings; the merchant may correct any field before confirming (Contract 5 §9; Contract 10 §10). | `5-§3-2`, `5-§9-1`, `5-§9-2`, `5-§9-3`, `5-§9-4`, `5-§9-5`, `5-§9-6`, `5-§9-7`, `5-§9-8`, `10-§10-3`, `10-§10-4` (11) |
| `EIS14-CNF-03` | Material fingerprint (`FPDR-3`). The preview issues an SB-P-1.12 `confirmation_bindings` entry whose fingerprint covers the exact reviewed interpretation (including merchant corrections) plus the destination's material targets: Ledger — counterparty reference, amount, type, direction, repayment target; opening stock — inventory item and quantity; both — duplicate candidates. Internal state not in this set never forces re-confirmation. A mismatch at commit re-prompts (UDI-AI-S7-05; EQ14-03). | `3-§19-4`, `5-§9-9`, `5-§18-1`, `22-§29-7`, `24-§21-7`, `10-§10-5`, `10-§13-3`, `BP-§10.3-SA1`, `BP-§10.3-SA2` (9) |
| `EIS14-CNF-04` | Independent execution-time revalidation. The commit re-evaluates the kernel under SB-P-1.12 EIS-CNF-02 serialization regardless of the fingerprint result; a revoked actor is blocked even when the target is unchanged (`FPDR-3`; SEC14-S7-05). | `5-§10-9`, `5-§17-7`, `5-§17-8`, `22-§29-7`, `BP-§10.3-SA2` (5) |

## 13. Destination Adapters

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-ADP-01` | Ledger destination adapter. Confirmed document interpretations become Ledger rows only through EIS14-CMD-01; the adapter owns Ledger validation; supplier-invoice stock effects are not written here (SB-P-1.17). | `3-§5-7`, `3-§19-4`, `5-§7-2`, `5-§7-4`, `5-§18-1`, `24-§18-1a` (6) |
| `EIS14-ADP-02` | Opening-stock adapter. Opening-stock lines match existing catalog products and inventory items through SB-P-1.12 Product & Price Master read paths and write only through `create_inventory_movement`, row by row under the EIS14-MIG-03 multi-row import contract; an item that already has opening stock is clarified, never overwritten; no financial event is created (S7-FI-07; S10M-02). | `5-§4-9`, `5-§7-3`, `5-§18-5`, `7-§6-2`, `7-§6-4`, `7-§6-5`, `7-§15-2a`, `BP-§10.3-W13` (8) |

## 14. Receipt Cabinet, Versions and Provenance

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-CAB-01` | Document memory model. `documents` (business, uploader, channel, type, interpretation state, retention state), `document_versions` (immutable original object reference, content fingerprint) and `document_links` (document ↔ Ledger row or inventory movement) keep stored object, interpreted fact and confirmed record distinct (Contract 25 §11). | `5-§6-1`, `5-§6-2`, `5-§15-1`, `5-§15-2`, `5-§15-3`, `5-§15-4`, `5-§15-5`, `5-§15-6`, `5-§15-7`, `5-§15-8`, `5-§15-9`, `5-§15-10`, `5-§15-11`, `22-§10-1`, `22-§10-2`, `22-§10-3`, `22-§10-4`, `22-§10-5`, `22-§10-6`, `22-§10-7`, `25-§10-1`, `25-§10-2`, `25-§10-3`, `25-§10-4`, `25-§10-5`, `25-§10-6`, `25-§10-7`, `25-§10-8`, `25-§10-9`, `25-§10-10`, `25-§10-11`, `25-§10-12`, `25-§11-1`, `25-§11-2`, `25-§11-3`, `25-§11-4` (36) |
| `EIS14-CAB-02` | Immutable originals and versioning. Original bytes are never modified; replacement appends a new version; corrections change interpretation or the record, never the original (B6-07). | `22-§29-12`, `25-§10-12`, `25-§23-7`, `BP-§10.3-W5` (4) |
| `EIS14-CAB-03` | Domain provenance, separate from authority audit (R10-SEC-02; SEC14-EIS-S10-02). SB-P-1.14 provenance tables record domain provenance only: what happened to a document, object or business record (upload, interpretation, preview, confirmation/rejection, linkage, sensitive retrieval, retention change, deletion, reconciliation). They are not a second authority ledger. Allow/deny authorization evidence and security-relevant denial durability consume the locked SB-P-1.12 `authority_events` and durable-denial contract (`EIS-AUD-01`, `EIS-AUD-02`, `EIS-UX-01`); domain provenance may reference the kernel decision ID, verified principal, business, action and target identifiers without copying mutable authority truth. Sensitive-retrieval records hold identifiers and security metadata, never private document content. Provider logs are supplemental operational evidence and never determine whether an actor was authorized (SEC14-S7-09). | `5-§15-2`, `5-§15-3`, `5-§15-10`, `25-§23-1`, `25-§23-2`, `25-§23-3`, `25-§23-4`, `25-§23-5`, `25-§23-6`, `25-§23-7`, `25-§23-8`, `25-§23-9`, `25-§23-10`, `25-§23-11`, `25-§23-12` (15) |
| `EIS14-CAB-04` | Receipt Cabinet retrieval. Documents are found by period, party, amount, type and linked record; the visual workspace and conversation use the same `search` layer and permissions. | `3-§19-9`, `5-§6-3`, `5-§6-4`, `5-§6-5`, `5-§6-6`, `5-§6-7`, `5-§6-8`, `5-§6-9`, `5-§6-11`, `5-§6-13`, `5-§18-7`, `10-§5-10`, `10-§10-7`, `17-§12-1`, `17-§12-2`, `BP-§10.3-W8`, `BP-§10.3-X` (17) |

## 15. Durable Object Storage Control Plane

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-STO-01` | Control plane and provider-independent identity. `media_objects` holds the internal object ID, owning business, provider, provider key, size, checksum, state and lifecycle; provider keys and URLs are never business identity or authority; a provider adapter interface isolates R2 so provider migration does not change merchant semantics (Contract 25 §4, §14, §15; S7-SP4-01). | `22-§17-7`, `25-§4-1`, `25-§4-2`, `25-§4-3`, `25-§4-4`, `25-§4-5`, `25-§4-6`, `25-§4-7`, `25-§4-8`, `25-§4-9`, `25-§4-10`, `25-§4-11`, `25-§4-12`, `25-§5-1`, `25-§5-2`, `25-§14-1`, `25-§14-7`, `25-§15-1`, `25-§15-2`, `25-§15-3`, `25-§15-4`, `25-§18-1`, `25-§18-2`, `25-§18-3`, `25-§25-1`, `25-§25-2`, `25-§25-3`, `25-§25-4`, `BP-§6.3-2`, `BP-§10.3-W9`, `BP-§10.3-W10` (31) |
| `EIS14-STO-02` | Two-phase ingest with specified secure-upload outcomes (R10-STO-04; S10-SP4-04; S7-SP4-03). States `reserved` → `uploaded` → `verified` → `linked` (or `failed`/`orphaned`); metadata is authoritative; nothing is presented as stored until `verified`. Required outcomes: upload only to a server-authorized object key; bounded size; expected checksum or equivalent integrity evidence; narrowly scoped, short-lived upload authority; server-side post-upload verification of key, size and integrity before `verified`; origin-limited CORS. Whether the provider can enforce key, length and checksum at presign or header level is conditional on `DR2` evidence; without it, server-side verification carries the guarantee. | `25-§8-1`, `25-§8-2`, `25-§8-3`, `25-§8-4`, `25-§8-5`, `25-§8-6`, `25-§8-7`, `25-§8-8`, `25-§8-9`, `25-§8-10`, `25-§8-11`, `25-§26-1`, `25-§26-6`, `25-§26-7` (14) |
| `EIS14-STO-03` | **Privileged handler binding.** Every service-role storage, reconciliation, discard, deletion, ingest-verification or other privileged handler that can access or mutate merchant-scoped data must satisfy the locked SB-P-1.12 `EIS-ISO-04` authority-binding contract. The operation must execute from a verified interactive principal or an upstream-approved verified automation/system principal, obtain current kernel authorization for the exact business, action and object set, and carry those business/action/object predicates into the privileged query or mutation. A non-interactive maintenance operation may use only an already-approved upstream automation/system-principal path and remains subject to the same current authorization and scope binding. A documented maintenance purpose, server location, scheduled-job context or possession of `service_role` is never authority by itself. `service_role` possession never creates merchant membership, business authority or permission to inspect or mutate merchant content. The source-complete privileged-handler inventory and effective-access verification under `EIS14-VER-01` must prove that no unbound admin, service-role, maintenance or background-job path exists. *(SEC14-S7-08; SEC14-EIS-S10-03; R10-SEC-03).* | `25-§8-1`, `25-§8-2`, `25-§8-3`, `25-§8-4`, `25-§8-5`, `25-§8-6`, `25-§8-7`, `25-§8-8`, `25-§8-9`, `25-§8-10`, `25-§8-11`, `25-§9-1`, `25-§9-2`, `25-§9-3`, `25-§9-4`, `25-§9-5`, `25-§9-6`, `25-§9-7`, `25-§9-8`, `25-§14-6`, `25-§17-3`, `25-§21-1`, `25-§21-2`, `25-§21-3`, `25-§21-4`, `25-§21-5` (26) |
| `EIS14-STO-04` | Storage protections. No public bucket or object; no guessable authorization through keys; least-privilege provider credentials held server-side only; upload safety checks (Contract 25 §19). | `25-§4-12`, `25-§19-1`, `25-§19-2`, `25-§19-3`, `25-§19-4`, `25-§19-5`, `25-§19-6`, `25-§19-7`, `25-§19-8` (9) |
| `EIS14-STO-05` | Orphan detection and reconciliation. A reconciliation routine compares metadata with provider listings and deletion state; it runs on demand now and through the shared SB-P-1.15 Scheduler once available; it never invents content and never deletes a confirmed record (Contract 25 §21; MC-Q4). | `25-§14-6`, `25-§20-3`, `25-§20-4`, `25-§20-9`, `25-§20-12`, `25-§21-1`, `25-§21-2`, `25-§21-3`, `25-§21-4`, `25-§21-5` (10) |
| `EIS14-STO-06` | Backup and durability documentation. The EIS-level runbook states provider durability assumptions, metadata/object backup coordination, restore testing and one-sided restore behaviour; provider facts are evidence-held (Contract 25 §22). | `25-§22-1`, `25-§22-2`, `25-§22-3`, `25-§22-4`, `25-§22-5`, `25-§22-6`, `25-§26-13` (7) |
| `EIS14-STO-07` | Lifecycle states and governed deletion. States `active`, `archived`, `pending_deletion`, `deleted`, `quarantined`, `failed`, `orphaned`, with legal/dispute hold as an overriding flag that blocks deletion and lifecycle eligibility; deletion is a kernel-checked, audited command producing durable deletion proof without retaining deleted content; no fixed historical timer (Contract 25 §16, §17; R10-STO-02). | `25-§16-1`, `25-§16-2`, `25-§16-3`, `25-§17-2`, `25-§17-3`, `25-§17-4`, `25-§17-5`, `25-§17-6`, `25-§17-7`, `25-§26-12` (10) |
| `EIS14-STO-08` | One storage foundation across channels. Workspace and visual uploads share object identity; channel is metadata only; the WhatsApp slice reuses it in SB-P-1.20 (Contract 25 §13). | `25-§13-1a`, `25-§13-2`, `25-§13-3`, `25-§26-4a` (4) |
| `EIS14-STO-09` | Storage metrics. Capacity and cost metrics are aggregate counts and bytes per business class, never content (Contract 25 §26 scenario 14). | `22-§23-7`, `25-§26-14` (2) |

## 16. Retention, `FPDR-2` and Raw Voice

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-RET-01` | `FPDR-2` bounded discard, hold-aware (R10-STO-02; S10-SP4-02; S7-SP4-04). Unconfirmed uploads stay in a transient staging area with a configured bounded grace period (not a legal period); confirmation promotes the object to durable storage. A legal or dispute hold is applied before lifecycle eligibility: held objects are excluded from any expiring lifecycle treatment, and hold release is an authorized, audited transition. Expiry may use the object store's lifecycle capability on the transient area where provider evidence shows hold exclusion is possible; asynchronous provider deletion is reconciled to durable Smart Business discard/deletion proof that retains no deleted content; "held metadata with missing object" is an integrity incident. No feature-specific scheduler. Provider lifecycle and hold-exclusion capability are evidence-held; if no compliant mechanism exists, this returns to Mission Control (conditional T8; EQ14-06). | `5-§6-1`, `5-§16-3`, `22-§10-5`, `25-§12-1`, `25-§12-3`, `25-§14-6`, `25-§16-1`, `25-§16-2`, `25-§17-6`, `25-§26-12` (10) |
| `EIS14-RET-02` | Raw voice not durable by default. No durable raw-audio object class is enabled; SB-P-1.13 transient audio (EIS13-VOI-02) continues; a durable raw-audio class requires a separately approved product purpose (`FPDR-2`; S7-SP4-05). | `25-§12-1`, `25-§12-2`, `25-§12-3` (3) |
| `EIS14-RET-03` | Record-class retention. Document classes reference the SB-P-1.12 record-class retention registry (EIS-LEG-01) and legal hold (EIS-LEG-02); no retention duration is coded. | `5-§6-1`, `5-§16-3`, `22-§10-5`, `25-§4-8`, `25-§10-11`, `25-§12-1`, `25-§12-3`, `25-§16-2`, `25-§17-5`, `25-§17-6`, `25-§26-12` (11) |

## 17. Retrieval, Search and Export

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-RTV-01` | Revocation-safe retrieval (R10-STO-01; S10-SP4-01; SEC14-S7-06; S7-SP4-02; EQ14-05). Every retrieval is authorized by the kernel at request time. **Server-mediated delivery is the default**, because it rechecks authority when bytes are delivered. A direct bearer signed URL may be used only if provider-specific evidence (`DR2`) proves an immediately revocable or authorization-indirection mechanism; short expiry or authorized issuance alone is insufficient. Any proposal of an intentional non-zero post-revocation access window returns to Mission Control as a T3 candidate. | `3-§9-13`, `3-§10-1`, `3-§10-6`, `3-§10-7`, `3-§10-8`, `3-§10-9`, `3-§19-9`, `5-§6-3`, `5-§6-4`, `5-§6-5`, `5-§6-6`, `5-§6-7`, `5-§6-8`, `5-§6-9`, `5-§6-11`, `5-§18-7`, `25-§9-1`, `25-§9-2`, `25-§9-3`, `25-§9-4`, `25-§9-5`, `25-§9-6`, `25-§9-7`, `25-§9-8`, `25-§19-7`, `25-§20-7`, `25-§20-13`, `25-§26-2`, `25-§26-3`, `25-§26-11`, `10-§5-10`, `10-§10-7`, `17-§12-1`, `17-§12-2`, `BP-§10.3-X` (35) |
| `EIS14-SRC-01` | Search keys and query layer. Records carry a normalized counterparty-reference search key (SB-P-1.13 language normalization), period, purpose/description, amount, payment method, type and document link; no customer/supplier identity table is created (`3-§9-12` and directory search stay later). | `3-§9-1`, `3-§9-2`, `3-§9-4`, `3-§9-5`, `3-§9-6`, `3-§9-7`, `3-§9-8`, `3-§9-9`, `3-§9-10`, `3-§9-11`, `3-§9-13`, `3-§9-14`, `3-§19-8`, `BP-§10.3-S1` (14) |
| `EIS14-SRC-02` | Kernel-checked exports. CSV/Excel/PDF exports run as kernel-checked export commands using the same projection, the distinct measures of EIS14-TOT-01 and the revocation-safe delivery of EIS14-RTV-01 (SEC14-S7-10; S10-FI-01). | `3-§10-1`, `3-§10-6`, `3-§10-7`, `3-§10-8`, `3-§10-9`, `3-§19-12` (6) |
| `EIS14-SRC-03` | No authoritative balance. Retrieval returns underlying credit and repayment entries and their links; no per-customer outstanding balance, ageing or reconciliation is computed or presented (`FPDR-1`, `FPDR-4`; S7-FI-08). | `3-§9-2`, `3-§9-7`, `3-§10-5`, `3-§19-2` (4) |

## 18. Security, Isolation and Birth-Safe Objects

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-SEC-01` | Kernel consumption only. Every Ledger, document and object action starts from the SB-P-1.12 verified principal and explicit active business and is decided by `authz.authorize`; client `business_id` is never trusted; no temporary parallel authority. Denials are recorded through the SB-P-1.12 durable-denial contract, not through SB-P-1.14 domain provenance (SEC14-S7-01, -07; SEC14-EIS-S10-02). | `3-§11-7`, `3-§17-9`, `3-§17-10`, `3-§18-1`, `3-§18-2`, `3-§18-3`, `3-§18-5`, `3-§18-6`, `3-§19-14`, `5-§16-1`, `5-§16-2`, `5-§16-3`, `5-§16-6`, `5-§18-10`, `22-§23-2`, `22-§29-3` (16) |
| `EIS14-SEC-02` | Birth-safe protected objects, by object type (R10-SEC-01; SEC14-EIS-S10-01; S10-SP4-03; S10M-01). Invariant: no protected object is ever externally reachable under unintended authority. **Tables:** every business-scoped protected table is born with RLS enabled, kernel-based deny-by-default policies per action/object capability, `PUBLIC`/`anon` grants removed and only intended `authenticated`/executor grants present. **Views:** RLS is not "enabled on a view"; a view exposed to caller roles carries explicit view grants and invoker-security semantics so the caller's underlying permissions and RLS apply; an owner-rights view is never exposed to caller roles. **Functions/RPCs:** each new or replaced function declares `SECURITY INVOKER` (default) or `SECURITY DEFINER` only under the SB-P-1.12 `EIS-ISO-10` invariant (fixed owner, pinned `search_path`, explicit `EXECUTE` grants, default `PUBLIC` `EXECUTE` revoked). **Sequences:** included in effective-access and default-privilege reconciliation; no client sequence privilege by implication. **Default privileges:** reconciled for every real creator role and every relevant object class. **Atomic birth:** creation or replacement, grants, revokes, RLS/policies, view/function security attributes and default-ACL reconciliation complete in one migration boundary before the object becomes usable; effective access is then verified under EIS14-VER-01 (`EIS-ISO-01`, `-03`, `-10`; SEC14-S7-02; S7M-06). | 60 rows: listed in Section 29.2 (Section 29.2) |
| `EIS14-SEC-03` | Action/object separation. Upload/create, read, replace, delete and export are distinct capabilities; create never implies read-all or export; an Employee upload never exposes Owner intelligence (SEC14-S7-03). | `3-§11-1`, `3-§11-2`, `3-§11-3`, `3-§11-4`, `3-§11-5`, `3-§11-7`, `5-§12-1`, `5-§12-2`, `5-§12-3`, `5-§12-4`, `5-§12-5`, `5-§12-6`, `5-§18-9`, `22-§23-5` (14) |
| `EIS14-SEC-04` | No routine platform access. No Super Admin or support path reads merchant documents or Ledger detail outside SB-P-1.12 purpose-limited support grants (EIS-SUP-01). | `3-§18-5`, `3-§18-6`, `5-§12-6`, `22-§23-3` (4) |

## 19. Failure and Recovery

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-FAIL-01` | Layered states. Intake, interpretation, preview, confirmation, domain write and durable object outcomes are separate states; success is shown only from the authoritative destination or storage outcome; compensation never deletes a confirmed record (UDI-AI-S7-06; S7-SP4-07). | 47 rows: listed in Section 29.2 (Section 29.2) |
| `EIS14-FAIL-02` | Narrow failure. Parser, AI, storage or provider failure blocks only the affected operation, preserves the merchant's input, never fails open and never creates a partially trusted record (Contract 22 §19; Contract 5 §17). | `3-§17-11`, `5-§10-10`, `5-§17-1`, `5-§17-2`, `5-§17-3`, `5-§17-4`, `5-§17-5`, `5-§17-6`, `5-§17-7`, `5-§17-8`, `5-§17-9`, `5-§17-10`, `5-§17-11`, `5-§18-11`, `22-§19-1`, `22-§19-2`, `22-§19-3`, `22-§19-4`, `22-§19-5`, `22-§19-6`, `22-§19-7`, `22-§29-10`, `25-§26-10` (23) |
| `EIS14-FAIL-03` | Storage failure handling. Failed or interrupted upload, metadata/object mismatch, provider timeout or outage, expired access, corrupted or missing object, duplicate retry, lifecycle failure, orphan and permission change between request and delivery each map to a typed state (Contract 25 §20). | `25-§20-1`, `25-§20-2`, `25-§20-3`, `25-§20-4`, `25-§20-5`, `25-§20-6`, `25-§20-7`, `25-§20-8`, `25-§20-9`, `25-§20-10`, `25-§20-11`, `25-§20-12`, `25-§20-13`, `25-§20-14` (14) |

## 20. Provider Evidence, Activation, Disable and Rollback Gates

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-PRV-01` | AI provider gate bound to versioned configuration identity (R10-AI-03; UDI-EIS10-03). Every UDI provider call is bound to the currently accepted versioned SB-P-1.13 provider configuration identity (EIS13-PRV-01). No merchant document reaches a provider until evidence is accepted for that identity (model, account, routing, retention, training use, region, logging). A material change of provider, model, account, routing or data controls invalidates the affected evidence and blocks merchant-document flow until re-verification; deterministic non-AI paths (CSV/XLSX) remain available (UDI-AI-S7-07). | 97 rows: listed in Section 29.2 (Section 29.2) |
| `EIS14-PRV-02` | Storage activation, disable and rollback gate (`DR2`). R2 activation requires a separately authorized evidence pack: account, environment-separated buckets, server-held credentials, origin-limited CORS, presign/header enforcement capability (EIS14-STO-02), lifecycle and hold-exclusion capability (EIS14-RET-01), any immediately revocable delivery mechanism (EIS14-RTV-01), monitoring, a disable switch that stops new uploads while keeping server-mediated retrieval of verified objects, and a rollback plan (Build Plan §5.4; S7-SP4-06). | 124 rows: listed in Section 29.2 (Section 29.2) |

## 21. Environment, Secrets and Credentials

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-ENV-01` | Secrets and configuration. Storage and provider credentials are server-only environment values, never `VITE_*`, never in client bundles, logs or error payloads; per-environment separation (Contract 25 §19). | `25-§19-4`, `25-§19-5`, `25-§19-6` (3) |

## 22. Migration Design (Design Only; Not Executed)

Execution requires a separately authorized migration mission (`docs/migration/README.md`). Ordering: after the SB-P-1.12 migration series and the SB-P-1.13 governed-command migration; M14-1 → M14-2 → M14-3 → M14-4.

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-MIG-01` | M14-1 four-state widening. Additive CHECK widening; credit direction column; repayment-target link; widened create and correction commands; no history rewrite; zero duplicate-credit backfill; existing identities preserved; actual constraint names, function identities and ACLs inventoried before execution; cut-over leaves exactly one protected write path (S7M-02, -03, -04). | `3-§4-1`, `3-§4-2`, `3-§4-3`, `3-§4-4`, `3-§4-5`, `3-§4-6`, `3-§5-2`, `3-§5-3`, `3-§5-4`, `3-§5-5`, `3-§5-6`, `3-§6-1`, `3-§6-2`, `3-§6-3`, `3-§6-4`, `3-§6-5`, `3-§6-6`, `3-§6-7`, `3-§6-8`, `3-§6-9`, `3-§8-1`, `3-§8-8`, `3-§19-1`, `3-§19-2`, `3-§19-3`, `3-§22-1`, `3-§22-2`, `BP-§6.2-1`, `BP-§10.3-W1`, `BP-§10.3-W2`, `BP-§10.3-W3`, `BP-§10.3-W7`, `BP-§10.3-C1`, `BP-§10.3-SA1`, `BP-§10.3-SA2`, `BP-§10.3-SB1`, `BP-§10.3-SB2` (37) |
| `EIS14-MIG-02` | M14-2 document/object schema. `documents`, `document_versions`, `document_links`, `media_objects` and domain-provenance tables, born hardened by object type under EIS14-SEC-02 (R10-MIG-01; S10M-01). | 64 rows: listed in Section 29.2 (Section 29.2) |
| `EIS14-MIG-03` | M14-3 UDI state and multi-row import (R10-MIG-02; S10M-02). Intake, interpretation, preview and import-ledger tables extend the parser lease and import foundations without repurposing their history (S7M-07). Multi-row imports consume the locked SB-P-1.12 contract (`EIS-CNF-05`): each row or bounded chunk commits in its own transaction after fresh `EIS-CNF-02` authority revalidation; a stable business-scoped row fingerprint and outcome are recorded; committed rows stay after revocation and later rows stop; completed/failed/remaining counts are exact; resumption is a fresh authorized submission that skips committed rows by fingerprint; no duplicate Ledger or opening-stock writes. Opening stock still terminates through `create_inventory_movement`. | `5-§7-2`, `5-§15-1`, `5-§15-2`, `5-§15-3`, `5-§15-4`, `5-§15-5`, `5-§15-6`, `5-§15-7`, `5-§15-8`, `5-§15-9`, `5-§15-10`, `5-§15-11`, `5-§17-6`, `5-§18-1`, `24-§18-1a`, `7-§6-2`, `7-§6-4`, `7-§15-2a` (18) |
| `EIS14-MIG-04` | M14-4 search keys and indexes, live-safe (R10-MIG-03; S10M-03). The index-build strategy is chosen from real table size, activity and lock window on the target: low-downtime/concurrent builds where needed, accounting for non-transactional DDL behaviour; invalid or failed index artifacts are detected and recovered; concurrent read/write is rehearsed; query-plan and index-validity evidence is captured. `IF NOT EXISTS` is never treated as proof that an index definition is correct. | `3-§9-1`, `3-§9-2`, `3-§9-4`, `3-§9-5`, `3-§9-6`, `3-§9-7`, `3-§9-8`, `3-§9-9`, `3-§9-10`, `3-§9-11`, `3-§9-13`, `3-§9-14`, `BP-§10.3-S1` (13) |
| `EIS14-MIG-05` | Rollback, forward-fix and rehearsal. Each migration has a pre-new-data rollback plan and a post-new-data forward-fix/compatibility-recovery plan preserving committed new-state data; rehearsal asserts the actual target ledger, constraints, ACL and RLS baseline and the EIS14-VER-01 effective-access inventory, concurrent CHECK transition, legacy RPC disappearance, generated and hand-written type consistency (EIS14-MIG-06), live-safe index builds (EIS14-MIG-04), no historical mutation, historical sale and purchase classifications and totals unchanged under EIS14-TOT-01, zero duplicate-credit creation and backup/PITR/restore readiness (S7M-08, -09; S10M-01, -05). | 90 rows: listed in Section 29.2 (Section 29.2) |
| `EIS14-MIG-06` | Reproducible type synchronization and compatibility (R10-MIG-04; S10M-04; S7M-05). Generated Supabase types are produced by a recorded procedure (generator and tool version, source project/environment, migration/schema identity) and compared against the previous output by diff or signature. Hand-written unions (`TransactionType`), callers and UI branches are updated and verified together. Compatibility is proven for old-app/new-schema wherever that state can exist and for new-app/final-schema; no breaking RPC change is deployed before its callers are ready. | `3-§4-1`, `3-§4-2`, `3-§4-3`, `3-§4-4`, `3-§6-2`, `BP-§10.3-W3` (6) |

## 23. CI and Verification Architecture

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-VER-01` | CI tiers, suites and Full Assurance evidence (R10-SEC-03; R10-AI-01, -05; R10-FI-01; R10-MIG-03, -04, -05). Fast Gate at every checkpoint; Full Assurance on application, schema, test and Lambda paths. Full Assurance produces an effective-access inventory for every new or replaced protected object: object type and stable identity; owner; effective privileges for `PUBLIC`, `anon`, `authenticated`, `service_role` and every executor/creator role; table RLS state and policies; view owner and invoker/owner semantics; sequence privileges; exact function signatures and overloads, owner, security mode, effective `search_path` and executable grants; creator-role default ACLs per object class; roles whose attributes bypass normal enforcement; disappearance or revocation of legacy callable identities and superseded overloads; a source-complete privileged-handler inventory proving no unbound admin/service-role path; direct-DML negatives for `transactions` and `transaction_correction_events`; cross-business, Manager-not-Owner, Employee-no-Owner-intelligence, create-does-not-imply-read/export, revoked retrieval/export, `anon` and stale-link/revocation negatives. Suites also cover: Ledger regression proving historical sale and purchase classifications and totals unchanged; mixed-dataset totals (ordinary sale, credit-method sale, generic income, ordinary purchase, generic expense, standalone credit, repayment) proving distinct measures and no double count; command idempotency and unknown outcome; `FPDR-3` material and non-material changes; repayment-target change between preview and commit; English, Malayalam, Manglish/transliterated and mixed/code-switched injection fixtures across OCR text, filenames/metadata, headers and line items; PDF external-fetch and embedded-object negatives; spreadsheet formula round-trip and negative-number regressions; storage ingest, revocation, legal-hold and outage states; index validity and query plans; generated-type provenance and compatibility. Live evidence for the effective-access inventory is `UNVERIFIED — ACCESS REQUIRED`. Interim local evidence while Actions produce no runs; absence of CI is never a pass. | `22-§22-1`, `22-§22-2`, `22-§22-3`, `22-§22-4`, `22-§22-5`, `22-§22-6`, `BP-§13-1` (7) |
| `EIS14-VER-02` | Acceptance and experience evidence. Every acceptance, worked-example, Founder Runtime and experience row is verified at Stage 17/19 with runtime evidence and recorded in the Experience Verification Matrix (Blueprint §15). | 67 rows: listed in Section 29.2 (Section 29.2) |

## 24. Performance and Merchant Presentation

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-PERF-01` | Performance. Retrieval and recording target the Contract 22 §21 responsiveness without weakening authorization; thumbnails and caching only where privacy-safe and authorization-preserving (Contract 25 §24). | `22-§21`, `25-§24-1`, `25-§24-2`, `25-§24-3` (4) |
| `EIS14-UX-01` | Merchant-language presentation. Four states appear as everyday actions (sold, bought, received, spent, owes, paid back); existing record tabs stay familiar; storage, provider and AI internals are never shown (B6-19; Contract 3 §2). | `3-§2-2`, `3-§3`, `3-§5-10`, `3-§6-1`, `3-§12-3`, `BP-§10.3-O` (6) |

## 25. Non-Goals and Must-Not Checks

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-NG-01` | Must-not checks. Every `IN SCOPE` must-not row is a negative test or design-inspection item in the Verification Checklist. | 96 rows: listed in Section 29.2 (Section 29.2) |

## 26. Dependency-Rule Disclosures (Contract 22 §27)

| Item | Disclosure |
|---|---|
| Mature features advanced | Contracts 3, 5, 25; Contract 22 obligations touched |
| Shared foundations reused | SB-P-1.12 kernel, confirmation bindings, idempotency, authority events, record-class retention; SB-P-1.13 gateway, governed command, attachment handoff, language normalization; existing parser lease, import and inventory foundations |
| AI orchestration / channel adapter | Consumes the SB-P-1.13 AI gateway; no channel adapter (WhatsApp is SB-P-1.20) |
| Existing, not duplicated | Transactions, correction events, catalog import, parser lease, inventory movements |
| Committed but outside this mission | Blueprint Section 11 (203 rows) |
| Blockers | Section 27 |
| Acceptance evidence | EIS14-VER-02; Blueprint §15 |

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-DOC-01` | Dependency-rule disclosures (Contract 22 §27) and delivery accounting (Build Plan §5.3, §11) are carried by Sections 26–27 of this EIS. | `22-§27-1`, `22-§27-2`, `22-§27-3`, `22-§27-4`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§27-8`, `22-§29-14`, `BP-§5.3-1`, `BP-§9-1`, `BP-§11-2`, `BP-§11-3` (13) |

## 27. Holds and Dependency Gates

Holds carried from the locked Blueprint §20.6 and §21.4 (SB-P-1.14-MC-13 §7). Describing a mechanism here does not satisfy a hold.

| Hold | Rows (Stage 7) | Requirement |
|---|---|---|
| `D12` SB-P-1.12 implementation/evidence | 225 | EIS14-HOLD-01 |
| `D13` SB-P-1.13 implementation/evidence | 92 | EIS14-HOLD-02 |
| `DTX` governed transaction command | 42 | EIS14-HOLD-03 |
| AI provider evidence (`H-PROV`) | 97 | EIS14-HOLD-09; EIS14-PRV-01 |
| Storage activation (`H-STO`, `DR2`) | 124 | EIS14-HOLD-08; EIS14-PRV-02 |
| Retention/legal basis (`H-LEG`) | 11 | EIS14-HOLD-10; EIS14-RET-03 |
| Later-mission dependencies (`H-LATER`) | 13 | EIS14-HOLD-04, -11 |
| Birth-safe object hardening (`H-BIRTH`) | 60 | EIS14-SEC-02 |
| Revocation-safe retrieval/export (`H-REVOKE`) | 35 | EIS14-RTV-01 |
| Privileged-handler binding (`H-PRIV`) | 26 | EIS14-STO-03 |
| Financial-integrity design (`H-FIN`) | 48 | EIS14-HOLD-05 |
| Command idempotency / unknown outcome (`H-IDEM`) | 17 | EIS14-IDM-01 |
| `FPDR-3` material fingerprint (`H-FPRINT`) | 8 | EIS14-HOLD-07; EIS14-CNF-03 |
| UDI safety (`H-UDI`) | 116 | EIS14-HOLD-06 |
| Layered failure/ingest states (`H-STATE`) | 47 | EIS14-FAIL-01 |
| `FPDR-2` discard mechanism (`H-DISCARD`) | 10 | EIS14-RET-01 |
| Migration package and rehearsal (`H-MIG`) | 90 | EIS14-MIG-05 |
| Runtime / acceptance evidence | all | EIS14-VER-02 (Stage 17 and Stage 19) |

Section 29.2 lists each row with its Stage 7 residual holds and the requirements that carry them. A check confirms that every Stage 7 residual hold on every row is carried by its named requirement (Section 29.1).

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS14-HOLD-01` | SB-P-1.12 consumption gate. No requirement mapped to a `D12` row is implemented until the consumed SB-P-1.12 workstreams are implemented, verified and accepted for SB-P-1.14 (EIS-DEP-01). | 225 rows: all `IN SCOPE` rows carrying `D12` (Section 29.2) |
| `EIS14-HOLD-02` | SB-P-1.13 consumption gate. No requirement mapped to a `D13` row is implemented until the consumed SB-P-1.13 surfaces (Workspace, gateway, governed command, attachment handoff) are implemented, verified and accepted. | 92 rows: all `IN SCOPE` rows carrying `D13` (Section 29.2) |
| `EIS14-HOLD-03` | Transactions-family gate. All `DTX` rows stay held until the coordinated SB-P-1.12 WS-A3 / SB-P-1.13 EIS13-CMD-02 cut-over has completed and effective-access verification shows one protected write path. | 42 rows: all `IN SCOPE` rows carrying `DTX` (Section 29.2) |
| `EIS14-HOLD-04` | Later-mission dependencies. Rows carrying `D15`, `D17`, `D19` or `D20` realize only their SB-P-1.14 slice; the dependent slice waits for the owning mission. | 13 rows: all `IN SCOPE` rows carrying `D15`, `D17`, `D19` or `D20` (Section 29.2) |
| `EIS14-HOLD-05` | Financial-integrity design hold (`H-FIN`). Distinct-measure aggregation, repayment-link integrity and commit-time target revalidation, atomic correction, direct-mutation closure and opening-stock no-finance rules are accepted only with the evidence named in EIS14-TOT-01, EIS14-LDG-03, EIS14-CMD-02, EIS14-CMD-03 and EIS14-ADP-02 (S7-FI-04 to -07; S10-FI-01 to -03). | 48 rows: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-FIN` (Section 29.2) |
| `EIS14-HOLD-06` | UDI safety hold (`H-UDI`). UDI rows are accepted only with the deterministic-routing, instruction-isolation, non-executing PDF, formula and minimization evidence of EIS14-UDI-03 to -08 (UDI-AI-S7-01 to -04, -08). | 116 rows: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-UDI` (Section 29.2) |
| `EIS14-HOLD-07` | Fingerprint hold (`H-FPRINT`). Accepted only with the material/non-material change evidence of EIS14-CNF-03. | 8 rows: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-FPRINT` (Section 29.2) |
| `EIS14-HOLD-08` | Storage activation hold (`H-STO`). Accepted only after EIS14-PRV-02 evidence. | 124 rows: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-STO` (Section 29.2) |
| `EIS14-HOLD-09` | AI provider hold (`H-PROV`). Accepted only after EIS14-PRV-01 evidence. | 97 rows: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-PROV` (Section 29.2) |
| `EIS14-HOLD-10` | Retention-basis hold (`H-LEG`). Accepted only against a validated record-class rule (EIS14-RET-03). | 11 rows: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-LEG` (Section 29.2) |
| `EIS14-HOLD-11` | Later-mission hold (`H-LATER`), as EIS14-HOLD-04. | 13 rows: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-LATER` (Section 29.2) |

## 28. UNVERIFIED — ACCESS REQUIRED Register

None of these facts is inferred in this EIS.

| Fact | State | Requirement |
|---|---|---|
| Live production hosting runtime and its isolation/offload limits | `UNVERIFIED — ACCESS REQUIRED` | EIS14-UDI-04 |
| Live effective grants, RLS policies, view security semantics, sequence privileges, function identities/overloads, owners, creator-role default ACLs and bypass-capable roles (effective-access inventory) | `UNVERIFIED — ACCESS REQUIRED` | EIS14-SEC-02, EIS14-MIG-01, EIS14-VER-01, EIS14-CMD-03 |
| Target `supabase_migrations.schema_migrations` ledger and exact `transactions` constraint names | `UNVERIFIED — ACCESS REQUIRED` | EIS14-MIG-01, -05 |
| Production transaction-type distribution and `sale + payment_method=credit` population | `UNVERIFIED — ACCESS REQUIRED` | EIS14-MIG-05 |
| Backup / PITR / restore readiness | `UNVERIFIED — ACCESS REQUIRED` | EIS14-MIG-05, EIS14-STO-06 |
| Current isolated test-project state | `UNVERIFIED — ACCESS REQUIRED` | EIS14-VER-01 |
| Delivery-repository state if deployment differs from canonical GitHub | `UNVERIFIED — ACCESS REQUIRED` | EIS14-MIG-05 |
| Cloudflare account, R2 availability, region, pricing | `UNVERIFIED — ACCESS REQUIRED` | EIS14-PRV-02 |
| R2 lifecycle-rule capability for transient staging, exclusion of held objects and asynchronous deletion behaviour | `UNVERIFIED — ACCESS REQUIRED` | EIS14-RET-01, EIS14-STO-07 |
| R2 CORS / presigned-upload behaviour (key, length and checksum enforcement at presign or header level) and credential scoping | `UNVERIFIED — ACCESS REQUIRED` | EIS14-STO-02, EIS14-ENV-01 |
| Any immediately revocable or authorization-indirection direct-delivery mechanism | `UNVERIFIED — ACCESS REQUIRED` | EIS14-RTV-01 |
| Target table sizes, write activity and acceptable lock window for index builds | `UNVERIFIED — ACCESS REQUIRED` | EIS14-MIG-04 |
| Storage provider durability and restore behaviour | `UNVERIFIED — ACCESS REQUIRED` | EIS14-STO-06 |
| AI/vision provider, service and model for UDI | `UNVERIFIED — ACCESS REQUIRED` | EIS14-PRV-01 |
| AI provider account, credential custody | `UNVERIFIED — ACCESS REQUIRED` | EIS14-PRV-01 |
| Document/image retention, training use, abuse-monitoring retention, regional processing, logging and deletion | `UNVERIFIED — ACCESS REQUIRED` | EIS14-PRV-01 |
| PDF/image OCR quality; Malayalam/Manglish document quality | `UNVERIFIED — ACCESS REQUIRED` | EIS14-PRV-01, EIS14-VER-02 |
| Production AI/provider latency | `UNVERIFIED — ACCESS REQUIRED` | EIS14-PERF-01 |
| AWS non-production parser account and S3 lifecycle | `UNVERIFIED — ACCESS REQUIRED` | EIS14-UDI-04 (optional transient seam only) |
| Accepted provider configuration identity (none yet) | `UNVERIFIED — ACCESS REQUIRED` | EIS14-PRV-01, -02 |

## 29. Traceability

### 29.1 Integrity checks

| Check | Result |
|---|---|
| `IN SCOPE` FCTM rows | 563 |
| Rows mapped to at least one EIS requirement | 563 / 563 |
| Missing rows | 0 |
| Extra FCTM IDs (mapped but not `IN SCOPE`) | 0 |
| Mapped IDs absent from the FCTM | 0 |
| EIS requirements | 83 |
| Duplicate requirement IDs | 0 |
| Requirements with FCTM rows | 83 |
| Requirements with a recorded non-product reason and no rows | 0 |
| Orphan requirements adding product behaviour | 0 |
| Row-to-requirement links | 2282 |
| Requirements per row (minimum) | 1 |
| Stage 7 residual holds carried by their named requirement on every row | yes (0 gaps) |
| FCTM disposition, owner, build commitment, commercial classification or assignment changes | 0 (FCTM read-only; blob `01e9856aca0afdb1267230a1932fe34054449a4b`) |

Rules for cross-cutting requirements: `EIS14-HOLD-01` selects every row carrying `D12`; `EIS14-HOLD-02` every row carrying `D13`; `EIS14-HOLD-03` and `EIS14-CMD-01` every row carrying `DTX`; `EIS14-HOLD-04` every row carrying `D15`, `D17`, `D19` or `D20`; `EIS14-PRV-01` every row carrying `DAI`; `EIS14-PRV-02` every row carrying `DR2`; `EIS14-RET-03` every row carrying `DLEG` or `DUF6`; `EIS14-NG-01` every must-not row; `EIS14-VER-02` every acceptance, worked-example, Founder Runtime and experience row; `EIS14-HOLD-05` to `-11`, `EIS14-SEC-02`, `EIS14-RTV-01`, `EIS14-STO-03`, `EIS14-IDM-01`, `EIS14-FAIL-01`, `EIS14-RET-01` and `EIS14-MIG-05` every row whose Stage 7 residual hold (Blueprint §20.6) includes the corresponding hold; `EIS14-LDG-03` also every row carrying `FPDR-4`; `EIS14-CNF-03` every row carrying `FPDR-3`; `EIS14-RET-01` every row carrying `FPDR-2`.

### 29.2 FCTM row to EIS requirement (563 rows)

| FCTM row | Blueprint | Source | Stage 7 class | Stage 7 residual holds | EIS requirements |
|---|---|---|---|---|---|
| `3-§2-2` | §8.1 | C3 §2 | PASS | — | EIS14-UX-01, EIS14-NG-01 |
| `3-§3` | §8.1 | C3 §3 | PASS | — | EIS14-LDG-01, EIS14-UX-01 |
| `3-§4-1` | §8.1 | C3 §4 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG | EIS14-LDG-01, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-MIG-06, EIS14-HOLD-01, EIS14-HOLD-03, EIS14-HOLD-05 |
| `3-§4-2` | §8.1 | C3 §4 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG | EIS14-LDG-01, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-MIG-06, EIS14-HOLD-01, EIS14-HOLD-03, EIS14-HOLD-05 |
| `3-§4-3` | §8.1 | C3 §4 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG | EIS14-LDG-01, EIS14-LDG-02, EIS14-LDG-03, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-MIG-06, EIS14-HOLD-01, EIS14-HOLD-03, EIS14-HOLD-05 |
| `3-§4-4` | §8.1 | C3 §4 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG | EIS14-LDG-01, EIS14-LDG-03, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-MIG-06, EIS14-HOLD-01, EIS14-HOLD-03, EIS14-HOLD-05 |
| `3-§4-5` | §8.1 | C3 §4 | FOLLOW-UP | H-FIN | EIS14-LDG-04, EIS14-MIG-01, EIS14-NG-01, EIS14-HOLD-05 |
| `3-§4-6` | §8.1 | C3 §4 | FOLLOW-UP | H-FIN, H-MIG | EIS14-LDG-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-05 |
| `3-§5-1` | §8.1 | C3 §5 | BLOCKED | H-D13 | EIS14-ARC-02, EIS14-LDG-05, EIS14-HOLD-02 |
| `3-§5-2` | §8.1 | C3 §5 | BLOCKED | H-D13, H-DTX, H-MIG | EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-VER-02, EIS14-HOLD-02, EIS14-HOLD-03 |
| `3-§5-3` | §8.1 | C3 §5 | BLOCKED | H-D13, H-DTX, H-MIG | EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-VER-02, EIS14-HOLD-02, EIS14-HOLD-03 |
| `3-§5-4` | §8.1 | C3 §5 | BLOCKED | H-D13, H-DTX, H-FIN, H-MIG | EIS14-LDG-02, EIS14-LDG-03, EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-VER-02, EIS14-HOLD-02, EIS14-HOLD-03, EIS14-HOLD-05 |
| `3-§5-5` | §8.1 | C3 §5 | BLOCKED | H-D13, H-DTX, H-FIN, H-MIG | EIS14-LDG-03, EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-VER-02, EIS14-HOLD-02, EIS14-HOLD-03, EIS14-HOLD-05 |
| `3-§5-6` | §8.1 | C3 §5 | BLOCKED | H-D13, H-DTX, H-MIG | EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-02, EIS14-HOLD-03 |
| `3-§5-7` | §8.2 | C3 §5 | BLOCKED | H-D12, H-D13, H-PROV, H-STO, H-UDI | EIS14-UDI-04, EIS14-ADP-01, EIS14-PRV-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-08, EIS14-HOLD-09 |
| `3-§5-8` | §8.2 | C3 §5 | BLOCKED | H-D12, H-PROV, H-UDI | EIS14-UDI-01, EIS14-UDI-03, EIS14-PRV-01, EIS14-HOLD-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `3-§5-9` | §8.2 | C3 §5 | PASS | — | EIS14-UDI-01, EIS14-NG-01 |
| `3-§5-10` | §8.1 | C3 §5 | BLOCKED | H-D12 | EIS14-ARC-02, EIS14-LDG-05, EIS14-UX-01, EIS14-HOLD-01 |
| `3-§6-1` | §8.1 | C3 §6 | BLOCKED | H-DTX, H-MIG | EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-UX-01, EIS14-HOLD-03 |
| `3-§6-2` | §8.1 | C3 §6 | BLOCKED | H-DTX, H-MIG | EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-MIG-06, EIS14-HOLD-03 |
| `3-§6-3` | §8.1 | C3 §6 | BLOCKED | H-DTX, H-MIG | EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-03 |
| `3-§6-4` | §8.1 | C3 §6 | BLOCKED | H-DTX, H-MIG | EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-03 |
| `3-§6-5` | §8.1 | C3 §6 | BLOCKED | H-DTX, H-MIG | EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-03 |
| `3-§6-6` | §8.1 | C3 §6 | BLOCKED | H-DTX, H-MIG | EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-03 |
| `3-§6-7` | §8.1 | C3 §6 | BLOCKED | H-DTX, H-MIG | EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-03 |
| `3-§6-8` | §8.1 | C3 §6 | BLOCKED | H-DTX, H-FIN, H-MIG | EIS14-LDG-02, EIS14-LDG-03, EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-03, EIS14-HOLD-05 |
| `3-§6-9` | §8.1 | C3 §6 | BLOCKED | H-DTX, H-MIG | EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-03 |
| `3-§6-10` | §8.1 | C3 §6 | BLOCKED | H-D13 | EIS14-LDG-05, EIS14-NG-01, EIS14-HOLD-02 |
| `3-§7-1` | §8.3 | C3 §7 | BLOCKED | H-D13 | EIS14-CNF-01, EIS14-HOLD-02 |
| `3-§7-2` | §8.3 | C3 §7 | BLOCKED | H-D13 | EIS14-CNF-01, EIS14-HOLD-02 |
| `3-§7-3` | §8.3 | C3 §7 | BLOCKED | H-D13 | EIS14-CNF-01, EIS14-HOLD-02 |
| `3-§7-4` | §8.3 | C3 §7 | BLOCKED | H-D13 | EIS14-CNF-01, EIS14-HOLD-02 |
| `3-§7-5` | §8.3 | C3 §7 | BLOCKED | H-D13 | EIS14-CNF-01, EIS14-HOLD-02 |
| `3-§7-6` | §8.3 | C3 §7 | BLOCKED | H-D13 | EIS14-CNF-01, EIS14-HOLD-02 |
| `3-§7-7` | §8.3 | C3 §7 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-CNF-01, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `3-§7-8` | §8.3 | C3 §7 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-IDM-02, EIS14-CNF-01, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `3-§7-9` | §8.3 | C3 §7 | PASS | — | EIS14-CNF-01, EIS14-NG-01 |
| `3-§8-1` | §8.3 | C3 §8 | BLOCKED | H-D13, H-DTX, H-FIN, H-MIG | EIS14-CMD-01, EIS14-CMD-02, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-02, EIS14-HOLD-03, EIS14-HOLD-05 |
| `3-§8-2` | §8.3 | C3 §8 | BLOCKED | H-D12, H-FIN | EIS14-CMD-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§8-3` | §8.3 | C3 §8 | BLOCKED | H-D12, H-FIN | EIS14-CMD-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§8-4` | §8.3 | C3 §8 | BLOCKED | H-D12, H-FIN | EIS14-CMD-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§8-5` | §8.3 | C3 §8 | BLOCKED | H-D12, H-FIN | EIS14-CMD-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§8-6` | §8.3 | C3 §8 | BLOCKED | H-D12, H-FIN | EIS14-CMD-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§8-7` | §8.3 | C3 §8 | BLOCKED | H-D12, H-FIN | EIS14-CMD-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§8-8` | §8.3 | C3 §8 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG | EIS14-LDG-03, EIS14-CMD-01, EIS14-CMD-02, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-01, EIS14-HOLD-03, EIS14-HOLD-05 |
| `3-§8-9` | §8.3 | C3 §8 | BLOCKED | H-D12, H-FIN | EIS14-CMD-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§8-10` | §8.3 | C3 §8 | BLOCKED | H-D12, H-FIN | EIS14-CMD-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§8-11` | §8.3 | C3 §8 | BLOCKED | H-D12, H-FIN | EIS14-CMD-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§8-12` | §8.3 | C3 §8 | BLOCKED | H-D12, H-FIN | EIS14-CMD-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§8-13` | §8.3 | C3 §8 | BLOCKED | H-D12, H-FIN | EIS14-CMD-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§8-14` | §8.3 | C3 §8 | BLOCKED | H-D12, H-FIN | EIS14-CMD-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§8-15` | §8.3 | C3 §8 | BLOCKED | H-D12, H-FIN | EIS14-CMD-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§8-16` | §8.3 | C3 §8 | FOLLOW-UP | H-FIN | EIS14-LDG-04, EIS14-CMD-02, EIS14-NG-01, EIS14-HOLD-05 |
| `3-§9-1` | §8.6 | C3 §9 | BLOCKED | H-D12 | EIS14-SRC-01, EIS14-MIG-04, EIS14-HOLD-01 |
| `3-§9-2` | §8.6 | C3 §9 | BLOCKED | H-D12 | EIS14-SRC-01, EIS14-SRC-03, EIS14-MIG-04, EIS14-HOLD-01 |
| `3-§9-4` | §8.6 | C3 §9 | BLOCKED | H-D12 | EIS14-SRC-01, EIS14-MIG-04, EIS14-HOLD-01 |
| `3-§9-5` | §8.6 | C3 §9 | BLOCKED | H-D12 | EIS14-SRC-01, EIS14-MIG-04, EIS14-HOLD-01 |
| `3-§9-6` | §8.6 | C3 §9 | BLOCKED | H-D12 | EIS14-SRC-01, EIS14-MIG-04, EIS14-HOLD-01 |
| `3-§9-7` | §8.6 | C3 §9 | BLOCKED | H-D12, H-FIN | EIS14-LDG-03, EIS14-SRC-01, EIS14-SRC-03, EIS14-MIG-04, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§9-8` | §8.6 | C3 §9 | BLOCKED | H-D12, H-STO, H-BIRTH | EIS14-SRC-01, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-MIG-04, EIS14-HOLD-01, EIS14-HOLD-08 |
| `3-§9-9` | §8.6 | C3 §9 | FOLLOW-UP | H-LATER | EIS14-SRC-01, EIS14-MIG-04, EIS14-HOLD-04, EIS14-HOLD-11 |
| `3-§9-10` | §8.6 | C3 §9 | BLOCKED | H-D12, H-D13 | EIS14-TOT-01, EIS14-SRC-01, EIS14-MIG-04, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-02 |
| `3-§9-11` | §8.6 | C3 §9 | BLOCKED | H-D12, H-D13 | EIS14-TOT-01, EIS14-SRC-01, EIS14-MIG-04, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-02 |
| `3-§9-13` | §8.6 | C3 §9 | BLOCKED | H-D12, H-D13, H-STO, H-REVOKE | EIS14-RTV-01, EIS14-SRC-01, EIS14-PRV-02, EIS14-MIG-04, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-02, EIS14-HOLD-08 |
| `3-§9-14` | §8.6 | C3 §9 | BLOCKED | H-D13 | EIS14-ARC-02, EIS14-SRC-01, EIS14-MIG-04, EIS14-HOLD-02 |
| `3-§10-1` | §8.6 | C3 §10 | BLOCKED | H-D12, H-REVOKE | EIS14-RTV-01, EIS14-SRC-02, EIS14-HOLD-01 |
| `3-§10-2` | §8.6 | C3 §10 | BLOCKED | H-D12, H-FIN | EIS14-TOT-01, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§10-3` | §8.6 | C3 §10 | BLOCKED | H-D12, H-FIN | EIS14-TOT-01, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§10-4` | §8.6 | C3 §10 | BLOCKED | H-D12 | EIS14-TOT-01, EIS14-HOLD-01 |
| `3-§10-5` | §8.6 | C3 §10 | BLOCKED | H-D12, H-FIN | EIS14-LDG-02, EIS14-LDG-03, EIS14-TOT-01, EIS14-SRC-03, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§10-6` | §8.6 | C3 §10 | BLOCKED | H-D12, H-REVOKE, H-UDI | EIS14-UDI-05, EIS14-RTV-01, EIS14-SRC-02, EIS14-HOLD-01, EIS14-HOLD-06 |
| `3-§10-7` | §8.6 | C3 §10 | BLOCKED | H-D12, H-REVOKE, H-UDI | EIS14-UDI-05, EIS14-RTV-01, EIS14-SRC-02, EIS14-HOLD-01, EIS14-HOLD-06 |
| `3-§10-8` | §8.6 | C3 §10 | BLOCKED | H-D12, H-REVOKE | EIS14-RTV-01, EIS14-SRC-02, EIS14-HOLD-01 |
| `3-§10-9` | §8.6 | C3 §10 | BLOCKED | H-D12, H-REVOKE, H-FIN | EIS14-TOT-01, EIS14-UDI-05, EIS14-RTV-01, EIS14-SRC-02, EIS14-NG-01, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§11-1` | §8.1 | C3 §11 | BLOCKED | H-D12 | EIS14-LDG-06, EIS14-SEC-03, EIS14-HOLD-01 |
| `3-§11-2` | §8.1 | C3 §11 | BLOCKED | H-D12 | EIS14-LDG-06, EIS14-SEC-03, EIS14-HOLD-01 |
| `3-§11-3` | §8.1 | C3 §11 | BLOCKED | H-D12 | EIS14-LDG-06, EIS14-SEC-03, EIS14-HOLD-01 |
| `3-§11-4` | §8.1 | C3 §11 | BLOCKED | H-D12 | EIS14-LDG-06, EIS14-SEC-03, EIS14-NG-01, EIS14-HOLD-01 |
| `3-§11-5` | §8.1 | C3 §11 | BLOCKED | H-D12 | EIS14-LDG-06, EIS14-SEC-03, EIS14-NG-01, EIS14-HOLD-01 |
| `3-§11-7` | §8.1 | C3 §11 | BLOCKED | H-D12 | EIS14-LDG-06, EIS14-SEC-01, EIS14-SEC-03, EIS14-HOLD-01 |
| `3-§12-2` | §8.1 | C3 §12 | BLOCKED | H-D13 | EIS14-ARC-02, EIS14-HOLD-02 |
| `3-§12-3` | §8.1 | C3 §12 | BLOCKED | H-D12 | EIS14-ARC-02, EIS14-UX-01, EIS14-HOLD-01 |
| `3-§12-4` | §8.1 | C3 §12 | BLOCKED | H-D13 | EIS14-ARC-02, EIS14-NG-01, EIS14-HOLD-02 |
| `3-§12-5` | §8.1 | C3 §12 | PASS | — | EIS14-ARC-02 |
| `3-§14-2` | §8.1 | C3 §14 | PASS | — | EIS14-ARC-02 |
| `3-§15-1` | §8.1 | C3 §15 | PASS | — | EIS14-ARC-02 |
| `3-§15-2` | §8.1 | C3 §15 | BLOCKED | H-D13 | EIS14-ARC-02, EIS14-HOLD-02 |
| `3-§15-3` | §8.1 | C3 §15 | BLOCKED | H-D13 | EIS14-ARC-02, EIS14-HOLD-02 |
| `3-§15-4` | §8.1 | C3 §15 | BLOCKED | H-D12 | EIS14-ARC-02, EIS14-HOLD-01 |
| `3-§15-5` | §8.1 | C3 §15 | BLOCKED | H-D13 | EIS14-ARC-02, EIS14-HOLD-02 |
| `3-§16-1` | §8.3 | C3 §16 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `3-§16-2` | §8.3 | C3 §16 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `3-§16-3` | §8.3 | C3 §16 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `3-§16-4` | §8.3 | C3 §16 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `3-§16-5` | §8.3 | C3 §16 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `3-§16-6` | §8.3 | C3 §16 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-IDM-02, EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `3-§16-7` | §8.3 | C3 §16 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `3-§16-8` | §8.3 | C3 §16 | BLOCKED | H-D13, H-UDI | EIS14-UDI-06, EIS14-NG-01, EIS14-HOLD-02, EIS14-HOLD-06 |
| `3-§16-9` | §8.3 | C3 §16 | BLOCKED | H-D13, H-UDI | EIS14-UDI-06, EIS14-NG-01, EIS14-HOLD-02, EIS14-HOLD-06 |
| `3-§16-10` | §8.3 | C3 §16 | BLOCKED | H-D13, H-UDI | EIS14-UDI-06, EIS14-NG-01, EIS14-HOLD-02, EIS14-HOLD-06 |
| `3-§16-11` | §8.3 | C3 §16 | BLOCKED | H-D13, H-UDI | EIS14-UDI-06, EIS14-NG-01, EIS14-HOLD-02, EIS14-HOLD-06 |
| `3-§16-12` | §8.3 | C3 §16 | BLOCKED | H-D13, H-UDI | EIS14-UDI-06, EIS14-NG-01, EIS14-HOLD-02, EIS14-HOLD-06 |
| `3-§16-13` | §8.3 | C3 §16 | BLOCKED | H-D13, H-UDI | EIS14-UDI-06, EIS14-NG-01, EIS14-HOLD-02, EIS14-HOLD-06 |
| `3-§16-14` | §8.3 | C3 §16 | BLOCKED | H-D13, H-UDI | EIS14-UDI-06, EIS14-NG-01, EIS14-HOLD-02, EIS14-HOLD-06 |
| `3-§17-1` | §8.7 | C3 §17 | FOLLOW-UP | H-IDEM | EIS14-IDM-01, EIS14-IDM-03 |
| `3-§17-2` | §8.7 | C3 §17 | BLOCKED | H-D12, H-IDEM | EIS14-IDM-01, EIS14-IDM-03, EIS14-HOLD-01 |
| `3-§17-3` | §8.7 | C3 §17 | FOLLOW-UP | H-PROV, H-UDI | EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `3-§17-4` | §8.7 | C3 §17 | PASS | — | EIS14-CNF-01 |
| `3-§17-5` | §8.7 | C3 §17 | PASS | — | EIS14-CNF-01 |
| `3-§17-6` | §8.7 | C3 §17 | BLOCKED | H-D12, H-FIN | EIS14-CMD-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§17-7` | §8.7 | C3 §17 | FOLLOW-UP | H-LATER | EIS14-HOLD-04, EIS14-HOLD-11 |
| `3-§17-8` | §8.7 | C3 §17 | BLOCKED | H-D12 | EIS14-HOLD-01 |
| `3-§17-9` | §8.7 | C3 §17 | BLOCKED | H-D12 | EIS14-SEC-01, EIS14-HOLD-01 |
| `3-§17-10` | §8.7 | C3 §17 | BLOCKED | H-D12 | EIS14-SEC-01, EIS14-HOLD-01 |
| `3-§17-11` | §8.7 | C3 §17 | FOLLOW-UP | H-STATE | EIS14-IDM-03, EIS14-FAIL-01, EIS14-FAIL-02 |
| `3-§18-1` | §8.1 | C3 §18 | BLOCKED | H-D12 | EIS14-LDG-06, EIS14-SEC-01, EIS14-HOLD-01 |
| `3-§18-2` | §8.1 | C3 §18 | BLOCKED | H-D12 | EIS14-LDG-06, EIS14-SEC-01, EIS14-HOLD-01 |
| `3-§18-3` | §8.1 | C3 §18 | BLOCKED | H-D12 | EIS14-LDG-06, EIS14-CMD-02, EIS14-SEC-01, EIS14-HOLD-01 |
| `3-§18-5` | §8.1 | C3 §18 | BLOCKED | H-D12 | EIS14-LDG-06, EIS14-SEC-01, EIS14-SEC-04, EIS14-NG-01, EIS14-HOLD-01 |
| `3-§18-6` | §8.1 | C3 §18 | PASS | — | EIS14-LDG-06, EIS14-SEC-01, EIS14-SEC-04, EIS14-NG-01 |
| `3-§19-1` | §8.1 | C3 §19 | BLOCKED | H-D13, H-DTX, H-FIN, H-MIG | EIS14-LDG-01, EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-VER-02, EIS14-HOLD-02, EIS14-HOLD-03, EIS14-HOLD-05 |
| `3-§19-2` | §8.1 | C3 §19 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG | EIS14-LDG-01, EIS14-LDG-03, EIS14-CMD-01, EIS14-SRC-03, EIS14-MIG-01, EIS14-MIG-05, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-03, EIS14-HOLD-05 |
| `3-§19-3` | §8.1 | C3 §19 | BLOCKED | H-D13, H-DTX, H-MIG | EIS14-LDG-05, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-VER-02, EIS14-HOLD-02, EIS14-HOLD-03 |
| `3-§19-4` | §8.3 | C3 §19 | BLOCKED | H-D12, H-PROV, H-STO, H-FPRINT | EIS14-CNF-03, EIS14-ADP-01, EIS14-PRV-01, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-07, EIS14-HOLD-08, EIS14-HOLD-09 |
| `3-§19-5` | §8.3 | C3 §19 | BLOCKED | H-D13 | EIS14-CNF-01, EIS14-VER-02, EIS14-HOLD-02 |
| `3-§19-6` | §8.7 | C3 §19 | BLOCKED | H-D12, H-IDEM | EIS14-IDM-01, EIS14-VER-02, EIS14-HOLD-01 |
| `3-§19-7` | §8.3 | C3 §19 | BLOCKED | H-D12, H-FIN | EIS14-CMD-02, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§19-8` | §8.6 | C3 §19 | BLOCKED | H-D12 | EIS14-SRC-01, EIS14-VER-02, EIS14-HOLD-01 |
| `3-§19-9` | §8.4 | C3 §19 | BLOCKED | H-D12, H-STO, H-REVOKE | EIS14-CAB-04, EIS14-RTV-01, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `3-§19-10` | §8.1 | C3 §19 | BLOCKED | H-D12 | EIS14-LDG-06, EIS14-VER-02, EIS14-HOLD-01 |
| `3-§19-11` | §8.1 | C3 §19 | BLOCKED | H-D12 | EIS14-LDG-06, EIS14-VER-02, EIS14-HOLD-01 |
| `3-§19-12` | §8.6 | C3 §19 | BLOCKED | H-D12, H-FIN | EIS14-TOT-01, EIS14-SRC-02, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `3-§19-13a` | §8.1 | C3 §19 | BLOCKED | H-D13 | EIS14-ARC-02, EIS14-VER-02, EIS14-HOLD-02 |
| `3-§19-14` | §8.7 | C3 §19 | BLOCKED | H-D12 | EIS14-SEC-01, EIS14-VER-02, EIS14-HOLD-01 |
| `3-§20-1` | §8.9 | C3 §20 | PASS | — | EIS14-LDG-04, EIS14-NG-01 |
| `3-§20-2` | §8.9 | C3 §20 | PASS | — | EIS14-LDG-04, EIS14-NG-01 |
| `3-§20-3` | §8.9 | C3 §20 | PASS | — | EIS14-NG-01 |
| `3-§20-4` | §8.9 | C3 §20 | PASS | — | EIS14-NG-01 |
| `3-§20-5` | §8.9 | C3 §20 | PASS | — | EIS14-NG-01 |
| `3-§20-6` | §8.9 | C3 §20 | PASS | — | EIS14-NG-01 |
| `3-§22-1` | §8.1 | C3 §22 | BLOCKED | H-DTX, H-MIG | EIS14-LDG-04, EIS14-CMD-01, EIS14-CMD-03, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-03 |
| `3-§22-2` | §8.1 | C3 §22 | BLOCKED | H-DTX, H-MIG | EIS14-LDG-04, EIS14-CMD-01, EIS14-CMD-03, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-03 |
| `5-§2-2` | §8.2 | C5 §2 | PASS | — | EIS14-UDI-06, EIS14-NG-01 |
| `5-§3-1` | §8.2 | C5 §3 | BLOCKED | H-D12, H-PROV, H-UDI | EIS14-UDI-01, EIS14-PRV-01, EIS14-HOLD-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§3-2` | §8.2 | C5 §3 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-07, EIS14-CNF-02, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§3-3` | §8.2 | C5 §3 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§4-1` | §8.2 | C5 §4 | FOLLOW-UP | H-PROV, H-STO, H-UDI | EIS14-UDI-02, EIS14-UDI-04, EIS14-PRV-01, EIS14-PRV-02, EIS14-HOLD-06, EIS14-HOLD-08, EIS14-HOLD-09 |
| `5-§4-2` | §8.2 | C5 §4 | FOLLOW-UP | H-PROV, H-STO, H-UDI | EIS14-UDI-02, EIS14-UDI-04, EIS14-PRV-01, EIS14-PRV-02, EIS14-HOLD-06, EIS14-HOLD-08, EIS14-HOLD-09 |
| `5-§4-3` | §8.2 | C5 §4 | FOLLOW-UP | H-PROV, H-STO, H-UDI | EIS14-UDI-02, EIS14-UDI-04, EIS14-PRV-01, EIS14-PRV-02, EIS14-HOLD-06, EIS14-HOLD-08, EIS14-HOLD-09 |
| `5-§4-4` | §8.2 | C5 §4 | PASS | — | EIS14-UDI-02, EIS14-UDI-03, EIS14-UDI-05 |
| `5-§4-5` | §8.2 | C5 §4 | PASS | — | EIS14-UDI-02, EIS14-UDI-03, EIS14-UDI-05 |
| `5-§4-6` | §8.2 | C5 §4 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-02, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§4-7` | §8.2 | C5 §4 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-02, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§4-8` | §8.2 | C5 §4 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-02, EIS14-UDI-04, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§4-9` | §8.2 | C5 §4 | FOLLOW-UP | H-FIN | EIS14-UDI-02, EIS14-ADP-02, EIS14-HOLD-05 |
| `5-§4-14` | §8.2 | C5 §4 | PASS | — | EIS14-UDI-01, EIS14-UDI-02 |
| `5-§5-1` | §8.2 | C5 §5 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§5-2` | §8.2 | C5 §5 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§5-3` | §8.2 | C5 §5 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§5-4` | §8.2 | C5 §5 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§5-5` | §8.2 | C5 §5 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§5-6` | §8.2 | C5 §5 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§5-7` | §8.2 | C5 §5 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§5-8` | §8.2 | C5 §5 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§5-9` | §8.2 | C5 §5 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-NG-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§6-1` | §8.4 | C5 §6 | FOLLOW-UP | H-STO, H-LEG, H-BIRTH, H-DISCARD | EIS14-CAB-01, EIS14-RET-01, EIS14-RET-03, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-HOLD-08, EIS14-HOLD-10 |
| `5-§6-2` | §8.4 | C5 §6 | FOLLOW-UP | H-STO, H-BIRTH | EIS14-CAB-01, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-HOLD-08 |
| `5-§6-3` | §8.4 | C5 §6 | BLOCKED | H-D12, H-D13, H-STO, H-REVOKE | EIS14-CAB-04, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-02, EIS14-HOLD-08 |
| `5-§6-4` | §8.4 | C5 §6 | BLOCKED | H-D12, H-STO, H-REVOKE | EIS14-CAB-04, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `5-§6-5` | §8.4 | C5 §6 | BLOCKED | H-D12, H-STO, H-REVOKE | EIS14-CAB-04, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `5-§6-6` | §8.4 | C5 §6 | BLOCKED | H-D12, H-STO, H-REVOKE | EIS14-CAB-04, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `5-§6-7` | §8.4 | C5 §6 | BLOCKED | H-D12, H-STO, H-REVOKE | EIS14-CAB-04, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `5-§6-8` | §8.4 | C5 §6 | BLOCKED | H-D12, H-STO, H-REVOKE | EIS14-CAB-04, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `5-§6-9` | §8.4 | C5 §6 | BLOCKED | H-D12, H-STO, H-REVOKE | EIS14-CAB-04, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `5-§6-11` | §8.4 | C5 §6 | BLOCKED | H-D12, H-STO, H-LATER, H-REVOKE | EIS14-CAB-04, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-04, EIS14-HOLD-08, EIS14-HOLD-11 |
| `5-§6-13` | §8.4 | C5 §6 | PASS | — | EIS14-CAB-04, EIS14-NG-01 |
| `5-§7-1` | §8.2 | C5 §7 | PASS | — | EIS14-ARC-01 |
| `5-§7-2` | §8.2 | C5 §7 | BLOCKED | H-D12, H-PROV, H-DTX, H-STO, H-UDI, H-MIG | EIS14-CMD-01, EIS14-ADP-01, EIS14-PRV-01, EIS14-PRV-02, EIS14-MIG-03, EIS14-MIG-05, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-03, EIS14-HOLD-06, EIS14-HOLD-08, EIS14-HOLD-09 |
| `5-§7-3` | §8.2 | C5 §7 | BLOCKED | H-D12, H-FIN | EIS14-ADP-02, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `5-§7-4` | §8.2 | C5 §7 | BLOCKED | H-D12, H-PROV, H-LATER, H-UDI | EIS14-ADP-01, EIS14-PRV-01, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-04, EIS14-HOLD-06, EIS14-HOLD-09, EIS14-HOLD-11 |
| `5-§7-8` | §8.2 | C5 §7 | BLOCKED | H-D12 | EIS14-ARC-01, EIS14-HOLD-01 |
| `5-§8-2` | §8.2 | C5 §8 | BLOCKED | H-D13 | EIS14-UDI-01, EIS14-HOLD-02 |
| `5-§8-3` | §8.2 | C5 §8 | BLOCKED | H-D12 | EIS14-UDI-01, EIS14-HOLD-01 |
| `5-§8-4` | §8.2 | C5 §8 | BLOCKED | H-D13 | EIS14-UDI-01, EIS14-NG-01, EIS14-HOLD-02 |
| `5-§9-1` | §8.3 | C5 §9 | FOLLOW-UP | H-PROV, H-UDI | EIS14-CNF-02, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§9-2` | §8.3 | C5 §9 | FOLLOW-UP | H-PROV, H-UDI | EIS14-CNF-02, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§9-3` | §8.3 | C5 §9 | FOLLOW-UP | H-PROV, H-UDI | EIS14-CNF-02, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§9-4` | §8.3 | C5 §9 | FOLLOW-UP | H-PROV, H-UDI | EIS14-CNF-02, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§9-5` | §8.3 | C5 §9 | FOLLOW-UP | H-PROV, H-UDI | EIS14-CNF-02, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§9-6` | §8.3 | C5 §9 | FOLLOW-UP | H-PROV, H-UDI | EIS14-CNF-02, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§9-7` | §8.3 | C5 §9 | FOLLOW-UP | H-PROV, H-UDI | EIS14-IDM-02, EIS14-CNF-02, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§9-8` | §8.3 | C5 §9 | FOLLOW-UP | H-PROV, H-UDI | EIS14-CNF-02, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§9-9` | §8.3 | C5 §9 | BLOCKED | H-D12, H-FPRINT | EIS14-CNF-03, EIS14-HOLD-01, EIS14-HOLD-07 |
| `5-§10-1` | §8.3 | C5 §10 | FOLLOW-UP | H-PROV, H-UDI | EIS14-CNF-01, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§10-2` | §8.3 | C5 §10 | FOLLOW-UP | H-UDI | EIS14-CNF-01, EIS14-HOLD-06 |
| `5-§10-3` | §8.3 | C5 §10 | FOLLOW-UP | H-PROV, H-UDI | EIS14-CNF-01, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§10-4` | §8.3 | C5 §10 | FOLLOW-UP | H-PROV, H-UDI | EIS14-CNF-01, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§10-5` | §8.3 | C5 §10 | FOLLOW-UP | H-UDI | EIS14-UDI-03, EIS14-CNF-01, EIS14-HOLD-06 |
| `5-§10-6` | §8.3 | C5 §10 | FOLLOW-UP | H-UDI | EIS14-CNF-01, EIS14-HOLD-06 |
| `5-§10-7` | §8.3 | C5 §10 | FOLLOW-UP | H-UDI | EIS14-IDM-02, EIS14-CNF-01, EIS14-HOLD-06 |
| `5-§10-8` | §8.3 | C5 §10 | FOLLOW-UP | H-PROV, H-UDI | EIS14-CNF-01, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§10-9` | §8.3 | C5 §10 | BLOCKED | H-D12, H-UDI | EIS14-CNF-01, EIS14-CNF-04, EIS14-HOLD-01, EIS14-HOLD-06 |
| `5-§10-10` | §8.3 | C5 §10 | FOLLOW-UP | H-STATE | EIS14-CNF-01, EIS14-FAIL-01, EIS14-FAIL-02 |
| `5-§11-1` | §8.7 | C5 §11 | BLOCKED | H-D12, H-IDEM | EIS14-IDM-01, EIS14-IDM-02, EIS14-HOLD-01 |
| `5-§11-2` | §8.7 | C5 §11 | BLOCKED | H-D12, H-IDEM | EIS14-IDM-01, EIS14-HOLD-01 |
| `5-§11-3` | §8.7 | C5 §11 | BLOCKED | H-D12, H-IDEM | EIS14-IDM-01, EIS14-IDM-02, EIS14-HOLD-01 |
| `5-§11-4` | §8.7 | C5 §11 | BLOCKED | H-D12, H-D13, H-LATER, H-IDEM | EIS14-IDM-01, EIS14-IDM-02, EIS14-HOLD-01, EIS14-HOLD-02, EIS14-HOLD-04, EIS14-HOLD-11 |
| `5-§11-5` | §8.7 | C5 §11 | FOLLOW-UP | H-IDEM | EIS14-IDM-01, EIS14-UDI-01 |
| `5-§12-1` | §8.7 | C5 §12 | BLOCKED | H-D12 | EIS14-SEC-03, EIS14-HOLD-01 |
| `5-§12-2` | §8.7 | C5 §12 | BLOCKED | H-D12 | EIS14-SEC-03, EIS14-HOLD-01 |
| `5-§12-3` | §8.7 | C5 §12 | BLOCKED | H-D12 | EIS14-SEC-03, EIS14-HOLD-01 |
| `5-§12-4` | §8.7 | C5 §12 | BLOCKED | H-D12 | EIS14-SEC-03, EIS14-HOLD-01 |
| `5-§12-5` | §8.7 | C5 §12 | BLOCKED | H-D12 | EIS14-UDI-08, EIS14-SEC-03, EIS14-NG-01, EIS14-HOLD-01 |
| `5-§12-6` | §8.7 | C5 §12 | BLOCKED | H-D12 | EIS14-SEC-03, EIS14-SEC-04, EIS14-NG-01, EIS14-HOLD-01 |
| `5-§13-1` | §8.2 | C5 §13 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§13-2` | §8.2 | C5 §13 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§13-3` | §8.2 | C5 §13 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§13-4` | §8.2 | C5 §13 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§13-5` | §8.2 | C5 §13 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§13-6` | §8.2 | C5 §13 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§13-7` | §8.2 | C5 §13 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§13-8` | §8.2 | C5 §13 | BLOCKED | H-D13, H-UDI | EIS14-UDI-06, EIS14-NG-01, EIS14-HOLD-02, EIS14-HOLD-06 |
| `5-§13-9` | §8.2 | C5 §13 | BLOCKED | H-D13, H-UDI | EIS14-UDI-06, EIS14-NG-01, EIS14-HOLD-02, EIS14-HOLD-06 |
| `5-§13-10` | §8.2 | C5 §13 | BLOCKED | H-D13, H-UDI | EIS14-UDI-06, EIS14-NG-01, EIS14-HOLD-02, EIS14-HOLD-06 |
| `5-§13-11` | §8.2 | C5 §13 | BLOCKED | H-D13, H-UDI | EIS14-UDI-06, EIS14-UDI-08, EIS14-NG-01, EIS14-HOLD-02, EIS14-HOLD-06 |
| `5-§13-12` | §8.2 | C5 §13 | BLOCKED | H-D13, H-UDI | EIS14-UDI-06, EIS14-NG-01, EIS14-HOLD-02, EIS14-HOLD-06 |
| `5-§14-1` | §8.2 | C5 §14 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-04, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§14-2` | §8.2 | C5 §14 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-04, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§14-3` | §8.2 | C5 §14 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-04, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§14-4` | §8.2 | C5 §14 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-04, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§14-5` | §8.2 | C5 §14 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-04, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§14-6` | §8.2 | C5 §14 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-04, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§14-7` | §8.2 | C5 §14 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-04, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§14-8` | §8.2 | C5 §14 | FOLLOW-UP | H-UDI | EIS14-UDI-04, EIS14-NG-01, EIS14-HOLD-06 |
| `5-§15-1` | §8.4 | C5 §15 | BLOCKED | H-D12, H-STO, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-MIG-03, EIS14-MIG-05, EIS14-HOLD-01, EIS14-HOLD-08 |
| `5-§15-2` | §8.4 | C5 §15 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-CAB-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-03, EIS14-MIG-05, EIS14-HOLD-01 |
| `5-§15-3` | §8.4 | C5 §15 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-CAB-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-03, EIS14-MIG-05, EIS14-HOLD-01 |
| `5-§15-4` | §8.4 | C5 §15 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-03, EIS14-MIG-05, EIS14-HOLD-01 |
| `5-§15-5` | §8.4 | C5 §15 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-03, EIS14-MIG-05, EIS14-HOLD-01 |
| `5-§15-6` | §8.4 | C5 §15 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-03, EIS14-MIG-05, EIS14-HOLD-01 |
| `5-§15-7` | §8.4 | C5 §15 | BLOCKED | H-D12, H-STO, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-MIG-03, EIS14-MIG-05, EIS14-HOLD-01, EIS14-HOLD-08 |
| `5-§15-8` | §8.4 | C5 §15 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-03, EIS14-MIG-05, EIS14-HOLD-01 |
| `5-§15-9` | §8.4 | C5 §15 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-03, EIS14-MIG-05, EIS14-HOLD-01 |
| `5-§15-10` | §8.4 | C5 §15 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-CAB-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-03, EIS14-MIG-05, EIS14-HOLD-01 |
| `5-§15-11` | §8.4 | C5 §15 | FOLLOW-UP | H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-03, EIS14-MIG-05 |
| `5-§16-1` | §8.7 | C5 §16 | BLOCKED | H-D12 | EIS14-SEC-01, EIS14-HOLD-01 |
| `5-§16-2` | §8.5 | C5 §16 | BLOCKED | H-D12, H-STO | EIS14-SEC-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `5-§16-3` | §8.5 | C5 §16 | FOLLOW-UP | H-LEG, H-DISCARD | EIS14-RET-01, EIS14-RET-03, EIS14-SEC-01, EIS14-HOLD-10 |
| `5-§16-4` | §8.2 | C5 §16 | FOLLOW-UP | H-UDI | EIS14-UDI-02, EIS14-HOLD-06 |
| `5-§16-5` | §8.2 | C5 §16 | FOLLOW-UP | H-UDI | EIS14-UDI-02, EIS14-HOLD-06 |
| `5-§16-6` | §8.7 | C5 §16 | BLOCKED | H-D12 | EIS14-SEC-01, EIS14-NG-01, EIS14-HOLD-01 |
| `5-§16-7` | §8.2 | C5 §16 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-06, EIS14-UDI-08, EIS14-PRV-01, EIS14-NG-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§17-1` | §8.7 | C5 §17 | FOLLOW-UP | H-STATE | EIS14-UDI-02, EIS14-FAIL-01, EIS14-FAIL-02 |
| `5-§17-2` | §8.7 | C5 §17 | FOLLOW-UP | H-STATE | EIS14-UDI-02, EIS14-FAIL-01, EIS14-FAIL-02 |
| `5-§17-3` | §8.7 | C5 §17 | FOLLOW-UP | H-STATE | EIS14-UDI-02, EIS14-FAIL-01, EIS14-FAIL-02 |
| `5-§17-4` | §8.7 | C5 §17 | FOLLOW-UP | H-PROV, H-STATE | EIS14-FAIL-01, EIS14-FAIL-02, EIS14-PRV-01, EIS14-HOLD-09 |
| `5-§17-5` | §8.7 | C5 §17 | BLOCKED | H-D12, H-IDEM, H-STATE | EIS14-IDM-01, EIS14-IDM-02, EIS14-FAIL-01, EIS14-FAIL-02, EIS14-HOLD-01 |
| `5-§17-6` | §8.7 | C5 §17 | BLOCKED | H-DTX, H-STATE, H-MIG | EIS14-CMD-01, EIS14-FAIL-01, EIS14-FAIL-02, EIS14-MIG-03, EIS14-MIG-05, EIS14-HOLD-03 |
| `5-§17-7` | §8.7 | C5 §17 | BLOCKED | H-D12, H-STATE | EIS14-CNF-04, EIS14-FAIL-01, EIS14-FAIL-02, EIS14-HOLD-01 |
| `5-§17-8` | §8.7 | C5 §17 | BLOCKED | H-D12, H-STATE | EIS14-CNF-04, EIS14-FAIL-01, EIS14-FAIL-02, EIS14-HOLD-01 |
| `5-§17-9` | §8.7 | C5 §17 | FOLLOW-UP | H-STO, H-STATE | EIS14-FAIL-01, EIS14-FAIL-02, EIS14-PRV-02, EIS14-HOLD-08 |
| `5-§17-10` | §8.7 | C5 §17 | BLOCKED | H-D12, H-IDEM, H-STATE | EIS14-IDM-01, EIS14-IDM-03, EIS14-FAIL-01, EIS14-FAIL-02, EIS14-HOLD-01 |
| `5-§17-11` | §8.7 | C5 §17 | FOLLOW-UP | H-STATE | EIS14-FAIL-01, EIS14-FAIL-02, EIS14-NG-01 |
| `5-§18-1` | §8.3 | C5 §18 | BLOCKED | H-D12, H-PROV, H-DTX, H-STO, H-FPRINT, H-MIG | EIS14-CMD-01, EIS14-CNF-03, EIS14-ADP-01, EIS14-PRV-01, EIS14-PRV-02, EIS14-MIG-03, EIS14-MIG-05, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-03, EIS14-HOLD-07, EIS14-HOLD-08, EIS14-HOLD-09 |
| `5-§18-2` | §8.3 | C5 §18 | FOLLOW-UP | H-PROV, H-UDI | EIS14-CNF-01, EIS14-PRV-01, EIS14-VER-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `5-§18-3` | §8.2 | C5 §18 | FOLLOW-UP | H-PROV, H-STO, H-UDI | EIS14-UDI-04, EIS14-PRV-01, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-06, EIS14-HOLD-08, EIS14-HOLD-09 |
| `5-§18-4` | §8.2 | C5 §18 | BLOCKED | H-D12 | EIS14-UDI-03, EIS14-VER-02, EIS14-HOLD-01 |
| `5-§18-5` | §8.2 | C5 §18 | BLOCKED | H-D12, H-FIN | EIS14-ADP-02, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `5-§18-6` | §8.7 | C5 §18 | BLOCKED | H-D12, H-IDEM | EIS14-IDM-01, EIS14-IDM-02, EIS14-VER-02, EIS14-HOLD-01 |
| `5-§18-7` | §8.4 | C5 §18 | BLOCKED | H-D12, H-STO, H-REVOKE | EIS14-CAB-04, EIS14-RTV-01, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `5-§18-8a` | §8.2 | C5 §18 | BLOCKED | H-D13 | EIS14-VER-02, EIS14-HOLD-02 |
| `5-§18-9` | §8.7 | C5 §18 | BLOCKED | H-D12 | EIS14-SEC-03, EIS14-VER-02, EIS14-HOLD-01 |
| `5-§18-10` | §8.7 | C5 §18 | BLOCKED | H-D12 | EIS14-SEC-01, EIS14-VER-02, EIS14-HOLD-01 |
| `5-§18-11` | §8.7 | C5 §18 | PASS | — | EIS14-FAIL-02, EIS14-VER-02 |
| `5-§19-1` | §8.9 | C5 §19 | PASS | — | EIS14-NG-01 |
| `5-§19-2` | §8.9 | C5 §19 | PASS | — | EIS14-UDI-01, EIS14-NG-01 |
| `5-§19-3` | §8.9 | C5 §19 | PASS | — | EIS14-NG-01 |
| `5-§19-4` | §8.9 | C5 §19 | PASS | — | EIS14-NG-01 |
| `5-§19-5` | §8.9 | C5 §19 | PASS | — | EIS14-NG-01 |
| `22-§4-1` | §8.1 | C22 §4 | BLOCKED | H-D12 | EIS14-ARC-01, EIS14-HOLD-01 |
| `22-§4-2` | §8.1 | C22 §4 | BLOCKED | H-D12 | EIS14-ARC-01, EIS14-HOLD-01 |
| `22-§4-3` | §8.1 | C22 §4 | PASS | — | EIS14-ARC-01 |
| `22-§4-4` | §8.1 | C22 §4 | PASS | — | EIS14-ARC-01, EIS14-NG-01 |
| `22-§9-1` | §8.2 | C22 §9 | FOLLOW-UP | H-PROV, H-UDI | EIS14-ARC-01, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `22-§9-2` | §8.2 | C22 §9 | BLOCKED | H-D12, H-PROV, H-UDI | EIS14-UDI-01, EIS14-PRV-01, EIS14-HOLD-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `22-§9-3` | §8.2 | C22 §9 | FOLLOW-UP | H-UDI | EIS14-UDI-01, EIS14-NG-01, EIS14-HOLD-06 |
| `22-§10-1` | §8.4 | C22 §10 | BLOCKED | H-D12, H-STO, H-BIRTH | EIS14-CAB-01, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `22-§10-2` | §8.4 | C22 §10 | BLOCKED | H-D12, H-STO, H-BIRTH | EIS14-CAB-01, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `22-§10-3` | §8.4 | C22 §10 | BLOCKED | H-D12, H-STO, H-BIRTH | EIS14-CAB-01, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `22-§10-4` | §8.4 | C22 §10 | BLOCKED | H-D12, H-STO, H-BIRTH | EIS14-CAB-01, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `22-§10-5` | §8.4 | C22 §10 | BLOCKED | H-D12, H-STO, H-LEG, H-BIRTH, H-DISCARD | EIS14-CAB-01, EIS14-RET-01, EIS14-RET-03, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-HOLD-01, EIS14-HOLD-08, EIS14-HOLD-10 |
| `22-§10-6` | §8.4 | C22 §10 | BLOCKED | H-D12, H-STO, H-BIRTH | EIS14-CAB-01, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `22-§10-7` | §8.4 | C22 §10 | FOLLOW-UP | H-BIRTH | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-NG-01 |
| `22-§17-1` | §8.5 | C22 §17 | PASS | — | EIS14-ARC-01 |
| `22-§17-7` | §8.5 | C22 §17 | FOLLOW-UP | H-STO | EIS14-STO-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `22-§17-9` | §8.9 | C22 §17 | PASS | — | EIS14-NG-01 |
| `22-§19-1` | §8.7 | C22 §19 | FOLLOW-UP | H-STATE | EIS14-FAIL-01, EIS14-FAIL-02 |
| `22-§19-2` | §8.7 | C22 §19 | FOLLOW-UP | H-STO, H-STATE | EIS14-FAIL-01, EIS14-FAIL-02, EIS14-PRV-02, EIS14-HOLD-08 |
| `22-§19-3` | §8.7 | C22 §19 | FOLLOW-UP | H-STATE | EIS14-FAIL-01, EIS14-FAIL-02 |
| `22-§19-4` | §8.7 | C22 §19 | FOLLOW-UP | H-STATE | EIS14-FAIL-01, EIS14-FAIL-02 |
| `22-§19-5` | §8.7 | C22 §19 | FOLLOW-UP | H-STATE | EIS14-FAIL-01, EIS14-FAIL-02 |
| `22-§19-6` | §8.7 | C22 §19 | FOLLOW-UP | H-STO, H-STATE | EIS14-FAIL-01, EIS14-FAIL-02, EIS14-PRV-02, EIS14-HOLD-08 |
| `22-§19-7` | §8.7 | C22 §19 | FOLLOW-UP | H-STO, H-PROV, H-STATE | EIS14-FAIL-01, EIS14-FAIL-02, EIS14-PRV-01, EIS14-PRV-02, EIS14-HOLD-08, EIS14-HOLD-09 |
| `22-§21` | §8.8 | C22 §21 | FOLLOW-UP | H-STO | EIS14-PRV-02, EIS14-PERF-01, EIS14-HOLD-08 |
| `22-§22-1` | §8.8 | C22 §22 | PASS | — | EIS14-VER-01 |
| `22-§22-2` | §8.8 | C22 §22 | PASS | — | EIS14-VER-01 |
| `22-§22-3` | §8.8 | C22 §22 | PASS | — | EIS14-VER-01 |
| `22-§22-4` | §8.8 | C22 §22 | PASS | — | EIS14-VER-01 |
| `22-§22-5` | §8.8 | C22 §22 | PASS | — | EIS14-VER-01 |
| `22-§22-6` | §8.8 | C22 §22 | PASS | — | EIS14-VER-01, EIS14-NG-01 |
| `22-§23-2` | §8.7 | C22 §23 | BLOCKED | H-D12 | EIS14-SEC-01, EIS14-NG-01, EIS14-HOLD-01 |
| `22-§23-3` | §8.7 | C22 §23 | BLOCKED | H-D12 | EIS14-SEC-04, EIS14-NG-01, EIS14-HOLD-01 |
| `22-§23-5` | §8.7 | C22 §23 | BLOCKED | H-D12 | EIS14-SEC-03, EIS14-NG-01, EIS14-HOLD-01 |
| `22-§23-7` | §8.7 | C22 §23 | PASS | — | EIS14-STO-09, EIS14-NG-01 |
| `22-§27-1` | §8.8 | C22 §27 | PASS | — | EIS14-DOC-01 |
| `22-§27-2` | §8.8 | C22 §27 | PASS | — | EIS14-DOC-01 |
| `22-§27-3` | §8.8 | C22 §27 | PASS | — | EIS14-DOC-01 |
| `22-§27-4` | §8.8 | C22 §27 | PASS | — | EIS14-DOC-01 |
| `22-§27-5` | §8.8 | C22 §27 | PASS | — | EIS14-DOC-01 |
| `22-§27-6` | §8.8 | C22 §27 | PASS | — | EIS14-DOC-01 |
| `22-§27-7` | §8.8 | C22 §27 | PASS | — | EIS14-DOC-01 |
| `22-§27-8` | §8.8 | C22 §27 | PASS | — | EIS14-NG-01, EIS14-DOC-01 |
| `22-§28-1` | §8.9 | C22 §28 | PASS | — | EIS14-NG-01 |
| `22-§28-2` | §8.9 | C22 §28 | PASS | — | EIS14-NG-01 |
| `22-§28-3` | §8.9 | C22 §28 | PASS | — | EIS14-NG-01 |
| `22-§28-4` | §8.9 | C22 §28 | PASS | — | EIS14-NG-01 |
| `22-§28-5` | §8.9 | C22 §28 | PASS | — | EIS14-UDI-01, EIS14-NG-01 |
| `22-§28-6` | §8.9 | C22 §28 | PASS | — | EIS14-NG-01 |
| `22-§28-7` | §8.9 | C22 §28 | PASS | — | EIS14-NG-01 |
| `22-§28-8` | §8.9 | C22 §28 | PASS | — | EIS14-NG-01 |
| `22-§28-9` | §8.9 | C22 §28 | PASS | — | EIS14-CMD-03, EIS14-NG-01 |
| `22-§28-10` | §8.9 | C22 §28 | PASS | — | EIS14-NG-01 |
| `22-§29-3` | §8.7 | C22 §29 | BLOCKED | H-D12 | EIS14-SEC-01, EIS14-VER-02, EIS14-HOLD-01 |
| `22-§29-5` | §8.2 | C22 §29 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-01, EIS14-PRV-01, EIS14-VER-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `22-§29-7` | §8.3 | C22 §29 | BLOCKED | H-D12, H-DTX, H-FPRINT, H-MIG | EIS14-CMD-01, EIS14-CNF-03, EIS14-CNF-04, EIS14-MIG-02, EIS14-MIG-05, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-03, EIS14-HOLD-07 |
| `22-§29-8` | §8.7 | C22 §29 | BLOCKED | H-D12, H-IDEM | EIS14-IDM-01, EIS14-VER-02, EIS14-HOLD-01 |
| `22-§29-10` | §8.7 | C22 §29 | FOLLOW-UP | H-STO, H-PROV, H-STATE | EIS14-FAIL-01, EIS14-FAIL-02, EIS14-PRV-01, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-08, EIS14-HOLD-09 |
| `22-§29-12` | §8.4 | C22 §29 | BLOCKED | H-D12, H-STO | EIS14-CAB-02, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `22-§29-13` | §8.7 | C22 §29 | FOLLOW-UP | H-PROV, H-STATE | EIS14-UDI-09, EIS14-FAIL-01, EIS14-PRV-01, EIS14-VER-02, EIS14-HOLD-09 |
| `22-§29-14` | §8.8 | C22 §29 | PASS | — | EIS14-VER-02, EIS14-DOC-01 |
| `25-§4-1` | §8.5 | C25 §4 | FOLLOW-UP | H-STO, H-MIG | EIS14-STO-01, EIS14-PRV-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-08 |
| `25-§4-2` | §8.5 | C25 §4 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-STO-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§4-3` | §8.5 | C25 §4 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-STO-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§4-4` | §8.5 | C25 §4 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-STO-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§4-5` | §8.5 | C25 §4 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-STO-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§4-6` | §8.5 | C25 §4 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-STO-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§4-7` | §8.5 | C25 §4 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-STO-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§4-8` | §8.5 | C25 §4 | BLOCKED | H-D12, H-LEG, H-BIRTH, H-MIG | EIS14-STO-01, EIS14-RET-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01, EIS14-HOLD-10 |
| `25-§4-9` | §8.5 | C25 §4 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-STO-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§4-10` | §8.5 | C25 §4 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-STO-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§4-11` | §8.5 | C25 §4 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-STO-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§4-12` | §8.5 | C25 §4 | BLOCKED | H-D12, H-MIG | EIS14-STO-01, EIS14-STO-04, EIS14-MIG-02, EIS14-MIG-05, EIS14-NG-01, EIS14-HOLD-01 |
| `25-§5-1` | §8.5 | C25 §5 | FOLLOW-UP | H-STO | EIS14-STO-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§5-2` | §8.5 | C25 §5 | PASS | — | EIS14-STO-01 |
| `25-§6-1` | §8.5 | C25 §6 | FOLLOW-UP | H-STO | EIS14-ARC-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§6-2` | §8.5 | C25 §6 | PASS | — | EIS14-ARC-01 |
| `25-§7-1` | §8.5 | C25 §7 | FOLLOW-UP | H-STO | EIS14-ARC-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§7-2` | §8.5 | C25 §7 | PASS | — | EIS14-ARC-01 |
| `25-§8-1` | §8.5 | C25 §8 | BLOCKED | H-D12, H-PRIV | EIS14-STO-02, EIS14-STO-03, EIS14-HOLD-01 |
| `25-§8-2` | §8.5 | C25 §8 | BLOCKED | H-D12, H-PRIV | EIS14-STO-02, EIS14-STO-03, EIS14-HOLD-01 |
| `25-§8-3` | §8.5 | C25 §8 | BLOCKED | H-D12, H-PRIV | EIS14-STO-02, EIS14-STO-03, EIS14-HOLD-01 |
| `25-§8-4` | §8.5 | C25 §8 | FOLLOW-UP | H-PRIV | EIS14-UDI-02, EIS14-STO-02, EIS14-STO-03 |
| `25-§8-5` | §8.5 | C25 §8 | FOLLOW-UP | H-STO, H-PRIV | EIS14-STO-02, EIS14-STO-03, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§8-6` | §8.5 | C25 §8 | BLOCKED | H-D12, H-PRIV | EIS14-STO-02, EIS14-STO-03, EIS14-HOLD-01 |
| `25-§8-7` | §8.5 | C25 §8 | BLOCKED | H-D12, H-PRIV | EIS14-STO-02, EIS14-STO-03, EIS14-HOLD-01 |
| `25-§8-8` | §8.5 | C25 §8 | FOLLOW-UP | H-PROV, H-PRIV, H-UDI | EIS14-STO-02, EIS14-STO-03, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `25-§8-9` | §8.5 | C25 §8 | BLOCKED | H-D12, H-DTX, H-PRIV, H-MIG | EIS14-CMD-01, EIS14-STO-02, EIS14-STO-03, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01, EIS14-HOLD-03 |
| `25-§8-10` | §8.5 | C25 §8 | BLOCKED | H-D12, H-PRIV | EIS14-STO-02, EIS14-STO-03, EIS14-HOLD-01 |
| `25-§8-11` | §8.5 | C25 §8 | FOLLOW-UP | H-STO, H-PRIV, H-STATE | EIS14-STO-02, EIS14-STO-03, EIS14-FAIL-01, EIS14-PRV-02, EIS14-NG-01, EIS14-HOLD-08 |
| `25-§9-1` | §8.5 | C25 §9 | BLOCKED | H-D12, H-REVOKE, H-PRIV | EIS14-STO-03, EIS14-RTV-01, EIS14-HOLD-01 |
| `25-§9-2` | §8.5 | C25 §9 | BLOCKED | H-D12, H-REVOKE, H-PRIV | EIS14-STO-03, EIS14-RTV-01, EIS14-HOLD-01 |
| `25-§9-3` | §8.5 | C25 §9 | FOLLOW-UP | H-STO, H-REVOKE, H-PRIV | EIS14-STO-03, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§9-4` | §8.5 | C25 §9 | BLOCKED | H-D12, H-STO, H-REVOKE, H-PRIV | EIS14-STO-03, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `25-§9-5` | §8.5 | C25 §9 | FOLLOW-UP | H-STO, H-REVOKE, H-PRIV | EIS14-STO-03, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§9-6` | §8.5 | C25 §9 | BLOCKED | H-D12, H-REVOKE, H-PRIV | EIS14-STO-03, EIS14-RTV-01, EIS14-HOLD-01 |
| `25-§9-7` | §8.5 | C25 §9 | BLOCKED | H-D12, H-STO, H-REVOKE, H-PRIV | EIS14-STO-03, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `25-§9-8` | §8.5 | C25 §9 | FOLLOW-UP | H-STO, H-REVOKE, H-PRIV | EIS14-STO-03, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§10-1` | §8.4 | C25 §10 | FOLLOW-UP | H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-NG-01 |
| `25-§10-2` | §8.4 | C25 §10 | FOLLOW-UP | H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05 |
| `25-§10-3` | §8.4 | C25 §10 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§10-4` | §8.4 | C25 §10 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§10-5` | §8.4 | C25 §10 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§10-6` | §8.4 | C25 §10 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§10-7` | §8.4 | C25 §10 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§10-8` | §8.4 | C25 §10 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§10-9` | §8.4 | C25 §10 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§10-10` | §8.4 | C25 §10 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§10-11` | §8.4 | C25 §10 | BLOCKED | H-D12, H-LEG, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-RET-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01, EIS14-HOLD-10 |
| `25-§10-12` | §8.4 | C25 §10 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-01, EIS14-CAB-02, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§11-1` | §8.4 | C25 §11 | FOLLOW-UP | H-PROV, H-STO, H-UDI | EIS14-CAB-01, EIS14-PRV-01, EIS14-PRV-02, EIS14-HOLD-06, EIS14-HOLD-08, EIS14-HOLD-09 |
| `25-§11-2` | §8.4 | C25 §11 | PASS | — | EIS14-CAB-01, EIS14-NG-01 |
| `25-§11-3` | §8.4 | C25 §11 | FOLLOW-UP | H-STO | EIS14-CAB-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§11-4` | §8.4 | C25 §11 | FOLLOW-UP | H-STATE | EIS14-CAB-01, EIS14-FAIL-01 |
| `25-§12-1` | §8.5 | C25 §12 | BLOCKED | H-D13, H-STO, H-LEG, H-DISCARD | EIS14-RET-01, EIS14-RET-02, EIS14-RET-03, EIS14-PRV-02, EIS14-HOLD-02, EIS14-HOLD-08, EIS14-HOLD-10 |
| `25-§12-2` | §8.5 | C25 §12 | BLOCKED | H-D13 | EIS14-RET-02, EIS14-HOLD-02 |
| `25-§12-3` | §8.5 | C25 §12 | FOLLOW-UP | H-LEG, H-DISCARD | EIS14-RET-01, EIS14-RET-02, EIS14-RET-03, EIS14-NG-01, EIS14-HOLD-10 |
| `25-§13-1a` | §8.5 | C25 §13 | BLOCKED | H-D13, H-STO | EIS14-STO-08, EIS14-PRV-02, EIS14-HOLD-02, EIS14-HOLD-08 |
| `25-§13-2` | §8.5 | C25 §13 | PASS | — | EIS14-STO-08, EIS14-NG-01 |
| `25-§13-3` | §8.5 | C25 §13 | BLOCKED | H-D12 | EIS14-STO-08, EIS14-HOLD-01 |
| `25-§14-1` | §8.5 | C25 §14 | FOLLOW-UP | H-STO | EIS14-STO-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§14-2` | §8.5 | C25 §14 | BLOCKED | H-D12, H-IDEM | EIS14-IDM-01, EIS14-HOLD-01 |
| `25-§14-3` | §8.5 | C25 §14 | BLOCKED | H-D12, H-IDEM | EIS14-IDM-01, EIS14-HOLD-01 |
| `25-§14-4` | §8.5 | C25 §14 | FOLLOW-UP | H-IDEM | EIS14-IDM-01, EIS14-IDM-02 |
| `25-§14-5` | §8.5 | C25 §14 | BLOCKED | H-D12, H-IDEM | EIS14-IDM-01, EIS14-IDM-03, EIS14-HOLD-01 |
| `25-§14-6` | §8.5 | C25 §14 | FOLLOW-UP | H-STO, H-LATER, H-PRIV, H-DISCARD | EIS14-STO-03, EIS14-STO-05, EIS14-RET-01, EIS14-PRV-02, EIS14-HOLD-04, EIS14-HOLD-08, EIS14-HOLD-11 |
| `25-§14-7` | §8.5 | C25 §14 | PASS | — | EIS14-STO-01, EIS14-NG-01 |
| `25-§15-1` | §8.5 | C25 §15 | FOLLOW-UP | H-STO | EIS14-STO-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§15-2` | §8.5 | C25 §15 | PASS | — | EIS14-STO-01 |
| `25-§15-3` | §8.5 | C25 §15 | PASS | — | EIS14-STO-01, EIS14-NG-01 |
| `25-§15-4` | §8.5 | C25 §15 | FOLLOW-UP | H-STO | EIS14-STO-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§16-1` | §8.5 | C25 §16 | FOLLOW-UP | H-STO, H-DISCARD | EIS14-STO-07, EIS14-RET-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§16-2` | §8.5 | C25 §16 | FOLLOW-UP | H-LEG, H-DISCARD | EIS14-STO-07, EIS14-RET-01, EIS14-RET-03, EIS14-HOLD-10 |
| `25-§16-3` | §8.5 | C25 §16 | PASS | — | EIS14-STO-07, EIS14-NG-01 |
| `25-§17-2` | §8.5 | C25 §17 | FOLLOW-UP | H-STO, H-LATER | EIS14-STO-07, EIS14-PRV-02, EIS14-HOLD-04, EIS14-HOLD-08, EIS14-HOLD-11 |
| `25-§17-3` | §8.5 | C25 §17 | BLOCKED | H-D12, H-PRIV | EIS14-STO-03, EIS14-STO-07, EIS14-HOLD-01 |
| `25-§17-4` | §8.5 | C25 §17 | PASS | — | EIS14-STO-07, EIS14-NG-01 |
| `25-§17-5` | §8.5 | C25 §17 | FOLLOW-UP | H-LEG | EIS14-STO-07, EIS14-RET-03, EIS14-HOLD-10 |
| `25-§17-6` | §8.5 | C25 §17 | FOLLOW-UP | H-LEG, H-DISCARD | EIS14-STO-07, EIS14-RET-01, EIS14-RET-03, EIS14-HOLD-10 |
| `25-§17-7` | §8.5 | C25 §17 | PASS | — | EIS14-STO-07, EIS14-NG-01 |
| `25-§18-1` | §8.5 | C25 §18 | FOLLOW-UP | H-STO | EIS14-STO-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§18-2` | §8.5 | C25 §18 | FOLLOW-UP | H-STO | EIS14-STO-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§18-3` | §8.5 | C25 §18 | FOLLOW-UP | H-STO | EIS14-STO-01, EIS14-PRV-02, EIS14-NG-01, EIS14-HOLD-08 |
| `25-§19-1` | §8.5 | C25 §19 | BLOCKED | H-D12, H-STO | EIS14-STO-04, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `25-§19-2` | §8.5 | C25 §19 | BLOCKED | H-D12, H-STO | EIS14-STO-04, EIS14-PRV-02, EIS14-NG-01, EIS14-HOLD-01, EIS14-HOLD-08 |
| `25-§19-3` | §8.5 | C25 §19 | BLOCKED | H-D12, H-STO | EIS14-STO-04, EIS14-PRV-02, EIS14-NG-01, EIS14-HOLD-01, EIS14-HOLD-08 |
| `25-§19-4` | §8.5 | C25 §19 | BLOCKED | H-D12, H-STO | EIS14-STO-04, EIS14-PRV-02, EIS14-ENV-01, EIS14-HOLD-01, EIS14-HOLD-08 |
| `25-§19-5` | §8.5 | C25 §19 | BLOCKED | H-D12, H-STO | EIS14-STO-04, EIS14-PRV-02, EIS14-ENV-01, EIS14-HOLD-01, EIS14-HOLD-08 |
| `25-§19-6` | §8.5 | C25 §19 | PASS | — | EIS14-STO-04, EIS14-ENV-01, EIS14-NG-01 |
| `25-§19-7` | §8.5 | C25 §19 | BLOCKED | H-D12, H-STO, H-REVOKE | EIS14-STO-04, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `25-§19-8` | §8.5 | C25 §19 | FOLLOW-UP | H-UDI | EIS14-UDI-02, EIS14-STO-04, EIS14-HOLD-06 |
| `25-§20-1` | §8.7 | C25 §20 | FOLLOW-UP | H-STO, H-STATE | EIS14-FAIL-01, EIS14-FAIL-03, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§20-2` | §8.7 | C25 §20 | FOLLOW-UP | H-STO, H-STATE | EIS14-FAIL-01, EIS14-FAIL-03, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§20-3` | §8.7 | C25 §20 | FOLLOW-UP | H-STO, H-STATE | EIS14-STO-05, EIS14-FAIL-01, EIS14-FAIL-03, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§20-4` | §8.7 | C25 §20 | FOLLOW-UP | H-STO, H-STATE | EIS14-STO-05, EIS14-FAIL-01, EIS14-FAIL-03, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§20-5` | §8.7 | C25 §20 | FOLLOW-UP | H-STO, H-STATE | EIS14-FAIL-01, EIS14-FAIL-03, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§20-6` | §8.7 | C25 §20 | FOLLOW-UP | H-STO, H-STATE | EIS14-FAIL-01, EIS14-FAIL-03, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§20-7` | §8.7 | C25 §20 | FOLLOW-UP | H-STO, H-REVOKE, H-STATE | EIS14-RTV-01, EIS14-FAIL-01, EIS14-FAIL-03, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§20-8` | §8.7 | C25 §20 | FOLLOW-UP | H-STO, H-STATE | EIS14-FAIL-01, EIS14-FAIL-03, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§20-9` | §8.7 | C25 §20 | FOLLOW-UP | H-STO, H-STATE | EIS14-STO-05, EIS14-FAIL-01, EIS14-FAIL-03, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§20-10` | §8.7 | C25 §20 | FOLLOW-UP | H-STO, H-STATE | EIS14-IDM-03, EIS14-FAIL-01, EIS14-FAIL-03, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§20-11` | §8.7 | C25 §20 | FOLLOW-UP | H-STO, H-STATE | EIS14-FAIL-01, EIS14-FAIL-03, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§20-12` | §8.7 | C25 §20 | FOLLOW-UP | H-STO, H-STATE | EIS14-STO-05, EIS14-FAIL-01, EIS14-FAIL-03, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§20-13` | §8.7 | C25 §20 | BLOCKED | H-STO, H-D12, H-REVOKE, H-STATE | EIS14-RTV-01, EIS14-FAIL-01, EIS14-FAIL-03, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `25-§20-14` | §8.7 | C25 §20 | FOLLOW-UP | H-STO, H-STATE | EIS14-FAIL-01, EIS14-FAIL-03, EIS14-PRV-02, EIS14-NG-01, EIS14-HOLD-08 |
| `25-§21-1` | §8.5 | C25 §21 | FOLLOW-UP | H-STO, H-LATER, H-PRIV, H-STATE | EIS14-STO-03, EIS14-STO-05, EIS14-FAIL-01, EIS14-PRV-02, EIS14-HOLD-04, EIS14-HOLD-08, EIS14-HOLD-11 |
| `25-§21-2` | §8.5 | C25 §21 | FOLLOW-UP | H-STO, H-LATER, H-PRIV, H-STATE | EIS14-STO-03, EIS14-STO-05, EIS14-FAIL-01, EIS14-PRV-02, EIS14-HOLD-04, EIS14-HOLD-08, EIS14-HOLD-11 |
| `25-§21-3` | §8.5 | C25 §21 | FOLLOW-UP | H-STO, H-LATER, H-PRIV, H-STATE | EIS14-STO-03, EIS14-STO-05, EIS14-FAIL-01, EIS14-PRV-02, EIS14-HOLD-04, EIS14-HOLD-08, EIS14-HOLD-11 |
| `25-§21-4` | §8.5 | C25 §21 | FOLLOW-UP | H-STO, H-LATER, H-PRIV, H-STATE | EIS14-STO-03, EIS14-STO-05, EIS14-FAIL-01, EIS14-PRV-02, EIS14-HOLD-04, EIS14-HOLD-08, EIS14-HOLD-11 |
| `25-§21-5` | §8.5 | C25 §21 | FOLLOW-UP | H-STO, H-PRIV, H-STATE | EIS14-STO-03, EIS14-STO-05, EIS14-FAIL-01, EIS14-PRV-02, EIS14-NG-01, EIS14-HOLD-08 |
| `25-§22-1` | §8.5 | C25 §22 | FOLLOW-UP | H-STO | EIS14-STO-06, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§22-2` | §8.5 | C25 §22 | FOLLOW-UP | H-STO | EIS14-STO-06, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§22-3` | §8.5 | C25 §22 | FOLLOW-UP | H-STO | EIS14-STO-06, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§22-4` | §8.5 | C25 §22 | FOLLOW-UP | H-STO | EIS14-STO-06, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§22-5` | §8.5 | C25 §22 | FOLLOW-UP | H-STO | EIS14-STO-06, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§22-6` | §8.5 | C25 §22 | FOLLOW-UP | H-STO | EIS14-STO-06, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§23-1` | §8.4 | C25 §23 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§23-2` | §8.4 | C25 §23 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§23-3` | §8.4 | C25 §23 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§23-4` | §8.4 | C25 §23 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§23-5` | §8.4 | C25 §23 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§23-6` | §8.4 | C25 §23 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§23-7` | §8.4 | C25 §23 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-02, EIS14-CAB-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§23-8` | §8.4 | C25 §23 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§23-9` | §8.4 | C25 §23 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§23-10` | §8.4 | C25 §23 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§23-11` | §8.4 | C25 §23 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§23-12` | §8.4 | C25 §23 | BLOCKED | H-D12, H-BIRTH, H-MIG | EIS14-CAB-03, EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05, EIS14-HOLD-01 |
| `25-§24-1` | §8.5 | C25 §24 | FOLLOW-UP | H-STO | EIS14-PRV-02, EIS14-PERF-01, EIS14-HOLD-08 |
| `25-§24-2` | §8.5 | C25 §24 | FOLLOW-UP | H-STO | EIS14-PRV-02, EIS14-PERF-01, EIS14-HOLD-08 |
| `25-§24-3` | §8.5 | C25 §24 | BLOCKED | H-D12 | EIS14-PERF-01, EIS14-NG-01, EIS14-HOLD-01 |
| `25-§25-1` | §8.5 | C25 §25 | FOLLOW-UP | H-STO | EIS14-STO-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `25-§25-2` | §8.5 | C25 §25 | BLOCKED | H-D12 | EIS14-STO-01, EIS14-HOLD-01 |
| `25-§25-3` | §8.5 | C25 §25 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-06, EIS14-STO-01, EIS14-PRV-01, EIS14-NG-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `25-§25-4` | §8.5 | C25 §25 | BLOCKED | H-D13 | EIS14-STO-01, EIS14-NG-01, EIS14-HOLD-02 |
| `25-§26-1` | §8.5 | C25 §26 | BLOCKED | H-D12, H-STO, H-D13, H-BIRTH | EIS14-STO-02, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-02, EIS14-HOLD-08 |
| `25-§26-2` | §8.5 | C25 §26 | BLOCKED | H-D12, H-STO, H-REVOKE | EIS14-RTV-01, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `25-§26-3` | §8.5 | C25 §26 | BLOCKED | H-D12, H-STO, H-REVOKE | EIS14-RTV-01, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `25-§26-4a` | §8.5 | C25 §26 | BLOCKED | H-D13, H-STO | EIS14-STO-08, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-02, EIS14-HOLD-08 |
| `25-§26-5` | §8.5 | C25 §26 | FOLLOW-UP | H-PROV, H-STO, H-UDI | EIS14-PRV-01, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-06, EIS14-HOLD-08, EIS14-HOLD-09 |
| `25-§26-6` | §8.5 | C25 §26 | FOLLOW-UP | H-STO, H-STATE | EIS14-STO-02, EIS14-FAIL-01, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-08 |
| `25-§26-7` | §8.5 | C25 §26 | FOLLOW-UP | H-STO, H-LATER, H-STATE | EIS14-STO-02, EIS14-FAIL-01, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-04, EIS14-HOLD-08, EIS14-HOLD-11 |
| `25-§26-8` | §8.5 | C25 §26 | BLOCKED | H-D12, H-STO, H-IDEM | EIS14-IDM-01, EIS14-IDM-02, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `25-§26-9` | §8.5 | C25 §26 | FOLLOW-UP | H-STO | EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-08 |
| `25-§26-10` | §8.5 | C25 §26 | FOLLOW-UP | H-STO, H-STATE | EIS14-FAIL-01, EIS14-FAIL-02, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-08 |
| `25-§26-11` | §8.5 | C25 §26 | BLOCKED | H-D12, H-STO, H-REVOKE | EIS14-RTV-01, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `25-§26-12` | §8.5 | C25 §26 | FOLLOW-UP | H-LEG, H-DISCARD | EIS14-STO-07, EIS14-RET-01, EIS14-RET-03, EIS14-VER-02, EIS14-HOLD-10 |
| `25-§26-13` | §8.5 | C25 §26 | FOLLOW-UP | H-STO | EIS14-STO-06, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-08 |
| `25-§26-14` | §8.5 | C25 §26 | FOLLOW-UP | H-STO | EIS14-STO-09, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-08 |
| `25-§27-1` | §8.9 | C25 §27 | PASS | — | EIS14-NG-01 |
| `25-§27-2` | §8.9 | C25 §27 | PASS | — | EIS14-NG-01 |
| `25-§27-3` | §8.9 | C25 §27 | PASS | — | EIS14-NG-01 |
| `25-§27-4` | §8.9 | C25 §27 | PASS | — | EIS14-NG-01 |
| `25-§27-5` | §8.9 | C25 §27 | PASS | — | EIS14-NG-01 |
| `25-§27-6` | §8.9 | C25 §27 | PASS | — | EIS14-NG-01 |
| `25-§27-7` | §8.9 | C25 §27 | PASS | — | EIS14-NG-01 |
| `25-§27-8` | §8.9 | C25 §27 | PASS | — | EIS14-NG-01 |
| `24-§5-6` | §8.2 | C24 §5 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-01, EIS14-UDI-09, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `24-§7-3` | §8.2 | C24 §7 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-04, EIS14-UDI-09, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `24-§7-4` | §8.2 | C24 §7 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-03, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `24-§14-1` | §8.2 | C24 §14 | FOLLOW-UP | H-PROV, H-UDI | EIS14-UDI-06, EIS14-UDI-09, EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `24-§14-2` | §8.2 | C24 §14 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-UDI-09, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `24-§14-3` | §8.2 | C24 §14 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-UDI-09, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `24-§14-4` | §8.2 | C24 §14 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-UDI-09, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `24-§14-5` | §8.2 | C24 §14 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-UDI-09, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `24-§14-6` | §8.2 | C24 §14 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-UDI-09, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `24-§14-7` | §8.2 | C24 §14 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-07, EIS14-UDI-09, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `24-§14-8` | §8.2 | C24 §14 | BLOCKED | H-D12, H-PROV, H-UDI | EIS14-UDI-09, EIS14-PRV-01, EIS14-HOLD-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `24-§14-9` | §8.2 | C24 §14 | BLOCKED | H-D13, H-UDI | EIS14-CMD-03, EIS14-UDI-06, EIS14-UDI-09, EIS14-NG-01, EIS14-HOLD-02, EIS14-HOLD-06 |
| `24-§18-1a` | §8.2 | C24 §18 | BLOCKED | H-D13, H-PROV, H-DTX, H-LATER, H-UDI, H-MIG | EIS14-CMD-01, EIS14-ADP-01, EIS14-PRV-01, EIS14-MIG-03, EIS14-MIG-05, EIS14-VER-02, EIS14-HOLD-02, EIS14-HOLD-03, EIS14-HOLD-04, EIS14-HOLD-06, EIS14-HOLD-09, EIS14-HOLD-11 |
| `24-§21-7` | §8.3 | C24 §21 | BLOCKED | H-D12, H-UDI | EIS14-CNF-03, EIS14-HOLD-01, EIS14-HOLD-06 |
| `24-§23-6` | §8.7 | C24 §23 | FOLLOW-UP | H-PROV, H-STATE | EIS14-UDI-09, EIS14-FAIL-01, EIS14-PRV-01, EIS14-HOLD-09 |
| `24-§27-5` | §8.2 | C24 §27 | BLOCKED | H-D13, H-UDI | EIS14-ARC-02, EIS14-HOLD-02, EIS14-HOLD-06 |
| `24-§31-8` | §8.2 | C24 §31 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-09, EIS14-PRV-01, EIS14-VER-02, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `9-§12-1` | §8.2 | C9 §12 | BLOCKED | H-D13 | EIS14-ARC-02, EIS14-HOLD-02 |
| `10-§5-10` | §8.4 | C10 §5 | BLOCKED | H-D12, H-D13, H-STO, H-REVOKE | EIS14-CAB-04, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-02, EIS14-HOLD-08 |
| `10-§10-1` | §8.2 | C10 §10 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-UDI-01, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `10-§10-3` | §8.3 | C10 §10 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-CNF-02, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `10-§10-4` | §8.3 | C10 §10 | BLOCKED | H-D13 | EIS14-CNF-02, EIS14-HOLD-02 |
| `10-§10-5` | §8.3 | C10 §10 | BLOCKED | H-D12, H-D13, H-FPRINT | EIS14-CNF-03, EIS14-HOLD-01, EIS14-HOLD-02, EIS14-HOLD-07 |
| `10-§10-7` | §8.4 | C10 §10 | BLOCKED | H-D12, H-D13, H-STO, H-REVOKE | EIS14-CAB-04, EIS14-RTV-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-02, EIS14-HOLD-08 |
| `10-§13-3` | §8.3 | C10 §13 | BLOCKED | H-D12, H-D13, H-DTX, H-FPRINT, H-MIG | EIS14-CMD-01, EIS14-CNF-03, EIS14-MIG-05, EIS14-HOLD-01, EIS14-HOLD-02, EIS14-HOLD-03, EIS14-HOLD-07 |
| `10-§17-4` | §8.3 | C10 §17 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-CNF-01, EIS14-PRV-01, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `10-§23-3b` | §8.3 | C10 §23 | BLOCKED | H-D13, H-PROV, H-UDI | EIS14-PRV-01, EIS14-VER-02, EIS14-HOLD-02, EIS14-HOLD-06, EIS14-HOLD-09 |
| `12-§4-5` | §8.3 | C12 §4 | BLOCKED | H-D13 | EIS14-CNF-01, EIS14-HOLD-02 |
| `17-§12-1` | §8.4 | C17 §12 | BLOCKED | H-D12, H-STO, H-BIRTH, H-REVOKE | EIS14-CAB-04, EIS14-RTV-01, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `17-§12-2` | §8.4 | C17 §12 | BLOCKED | H-D12, H-REVOKE | EIS14-ARC-02, EIS14-CAB-04, EIS14-RTV-01, EIS14-HOLD-01 |
| `7-§6-2` | §8.2 | C7 §6 | BLOCKED | H-D12, H-FIN | EIS14-ADP-02, EIS14-MIG-03, EIS14-HOLD-01, EIS14-HOLD-05 |
| `7-§6-4` | §8.2 | C7 §6 | BLOCKED | H-D12, H-FIN | EIS14-ADP-02, EIS14-MIG-03, EIS14-HOLD-01, EIS14-HOLD-05 |
| `7-§6-5` | §8.2 | C7 §6 | FOLLOW-UP | H-FIN | EIS14-ADP-02, EIS14-NG-01, EIS14-HOLD-05 |
| `7-§15-2a` | §8.2 | C7 §15 | BLOCKED | H-D12, H-FIN | EIS14-ADP-02, EIS14-MIG-03, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `BP-§5.3-1` | §8.8 | BP §5.3 | PASS | — | EIS14-DOC-01 |
| `BP-§5.4-1` | §8.5 | BP §5.4 | FOLLOW-UP | H-STO | EIS14-PRV-02, EIS14-HOLD-08 |
| `BP-§6.1-1` | §8.3 | BP §6.1 | BLOCKED | H-D12 | EIS14-CMD-03, EIS14-NG-01, EIS14-HOLD-01 |
| `BP-§6.2-1` | §8.3 | BP §6.2 | BLOCKED | H-D12, H-D13, H-DTX, H-MIG | EIS14-CMD-01, EIS14-CMD-03, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-01, EIS14-HOLD-02, EIS14-HOLD-03 |
| `BP-§6.3-1` | §8.1 | BP §6.3 | PASS | — | EIS14-ARC-01 |
| `BP-§6.3-2` | §8.5 | BP §6.3 | FOLLOW-UP | H-STO | EIS14-ARC-01, EIS14-STO-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `BP-§8.4-1` | §8.2 | BP §8.4 | PASS | — | EIS14-ARC-01 |
| `BP-§9-1` | §8.1 | BP §9 | PASS | — | EIS14-LDG-01, EIS14-DOC-01 |
| `BP-§10.3-O` | §8.1 | BP §10.3 | BLOCKED | H-D12, H-PROV, H-STO, H-UDI | EIS14-LDG-01, EIS14-PRV-01, EIS14-PRV-02, EIS14-VER-02, EIS14-UX-01, EIS14-HOLD-01, EIS14-HOLD-06, EIS14-HOLD-08, EIS14-HOLD-09 |
| `BP-§10.3-W1` | §8.1 | BP §10.3 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG | EIS14-LDG-01, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-01, EIS14-HOLD-03, EIS14-HOLD-05 |
| `BP-§10.3-W2` | §8.1 | BP §10.3 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG | EIS14-LDG-01, EIS14-LDG-03, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-01, EIS14-HOLD-03, EIS14-HOLD-05 |
| `BP-§10.3-W3` | §8.1 | BP §10.3 | BLOCKED | H-DTX, H-FIN, H-MIG | EIS14-LDG-04, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-MIG-06, EIS14-HOLD-03, EIS14-HOLD-05 |
| `BP-§10.3-W4` | §8.2 | BP §10.3 | BLOCKED | H-D12, H-PROV, H-STO, H-UDI | EIS14-UDI-01, EIS14-PRV-01, EIS14-PRV-02, EIS14-HOLD-01, EIS14-HOLD-06, EIS14-HOLD-08, EIS14-HOLD-09 |
| `BP-§10.3-W5` | §8.4 | BP §10.3 | BLOCKED | H-D12, H-STO, H-BIRTH | EIS14-CAB-02, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `BP-§10.3-W6` | §8.2 | BP §10.3 | FOLLOW-UP | H-PROV, H-UDI | EIS14-PRV-01, EIS14-HOLD-06, EIS14-HOLD-09 |
| `BP-§10.3-W7` | §8.3 | BP §10.3 | BLOCKED | H-D12, H-DTX, H-MIG | EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-01, EIS14-HOLD-03 |
| `BP-§10.3-W8` | §8.4 | BP §10.3 | BLOCKED | H-D12, H-STO, H-BIRTH | EIS14-CAB-04, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `BP-§10.3-W9` | §8.5 | BP §10.3 | FOLLOW-UP | H-STO | EIS14-STO-01, EIS14-PRV-02, EIS14-HOLD-08 |
| `BP-§10.3-W10` | §8.5 | BP §10.3 | BLOCKED | H-D12, H-STO, H-BIRTH | EIS14-STO-01, EIS14-SEC-02, EIS14-PRV-02, EIS14-MIG-02, EIS14-HOLD-01, EIS14-HOLD-08 |
| `BP-§10.3-W11` | §8.3 | BP §10.3 | BLOCKED | H-D12 | EIS14-HOLD-01 |
| `BP-§10.3-W12` | §8.2 | BP §10.3 | PASS | — | EIS14-UDI-01 |
| `BP-§10.3-W13` | §8.2 | BP §10.3 | BLOCKED | H-D12, H-FIN | EIS14-ADP-02, EIS14-HOLD-01, EIS14-HOLD-05 |
| `BP-§10.3-C1` | §8.1 | BP §10.3 | BLOCKED | H-DTX, H-MIG | EIS14-LDG-01, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-HOLD-03 |
| `BP-§10.3-S1` | §8.6 | BP §10.3 | BLOCKED | H-D12, H-STO | EIS14-SRC-01, EIS14-PRV-02, EIS14-MIG-04, EIS14-HOLD-01, EIS14-HOLD-08 |
| `BP-§10.3-SA1` | §8.3 | BP §10.3 | BLOCKED | H-D12, H-D13, H-PROV, H-DTX, H-STO, H-FPRINT, H-MIG | EIS14-CMD-01, EIS14-CNF-03, EIS14-PRV-01, EIS14-PRV-02, EIS14-MIG-01, EIS14-MIG-05, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-02, EIS14-HOLD-03, EIS14-HOLD-07, EIS14-HOLD-08, EIS14-HOLD-09 |
| `BP-§10.3-SA2` | §8.3 | BP §10.3 | BLOCKED | H-D12, H-DTX, H-FPRINT, H-MIG | EIS14-LDG-03, EIS14-CMD-01, EIS14-CNF-03, EIS14-CNF-04, EIS14-MIG-01, EIS14-MIG-05, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-03, EIS14-HOLD-07 |
| `BP-§10.3-SB1` | §8.1 | BP §10.3 | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG | EIS14-LDG-03, EIS14-TOT-01, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-03, EIS14-HOLD-05 |
| `BP-§10.3-SB2` | §8.1 | BP §10.3 | BLOCKED | H-DTX, H-FIN, H-MIG | EIS14-LDG-03, EIS14-LDG-04, EIS14-CMD-01, EIS14-MIG-01, EIS14-MIG-05, EIS14-VER-02, EIS14-HOLD-03, EIS14-HOLD-05 |
| `BP-§10.3-X` | §8.4 | BP §10.3 | BLOCKED | H-D12, H-PROV, H-STO, H-REVOKE, H-UDI | EIS14-CAB-04, EIS14-RTV-01, EIS14-PRV-01, EIS14-PRV-02, EIS14-VER-02, EIS14-HOLD-01, EIS14-HOLD-06, EIS14-HOLD-08, EIS14-HOLD-09 |
| `BP-§11-1` | §8.2 | BP §11 | PASS | — | EIS14-ARC-01 |
| `BP-§11-2` | §8.8 | BP §11 | PASS | — | EIS14-DOC-01 |
| `BP-§11-3` | §8.8 | BP §11 | PASS | — | EIS14-DOC-01 |
| `BP-§13-1` | §8.8 | BP §13 | PASS | — | EIS14-VER-01 |

### 29.3 EIS requirement to FCTM rows

| Requirement | Section | FCTM rows | Basis |
|---|---|---|---|
| `EIS14-ARC-01` | 6 | 16 | explicit or selected rows |
| `EIS14-ARC-02` | 6 | 17 | explicit or selected rows |
| `EIS14-LDG-01` | 7 | 13 | explicit or selected rows |
| `EIS14-LDG-02` | 7 | 4 | explicit or selected rows |
| `EIS14-LDG-03` | 7 | 13 | explicit or selected rows |
| `EIS14-LDG-04` | 7 | 8 | explicit or selected rows |
| `EIS14-LDG-05` | 7 | 19 | explicit or selected rows |
| `EIS14-LDG-06` | 7 | 13 | explicit or selected rows |
| `EIS14-TOT-01` | 7 | 9 | explicit or selected rows |
| `EIS14-CMD-01` | 8 | 42 | explicit or selected rows |
| `EIS14-CMD-02` | 8 | 19 | explicit or selected rows |
| `EIS14-CMD-03` | 8 | 6 | explicit or selected rows |
| `EIS14-IDM-01` | 9 | 17 | explicit or selected rows |
| `EIS14-IDM-02` | 9 | 11 | explicit or selected rows |
| `EIS14-IDM-03` | 9 | 6 | explicit or selected rows |
| `EIS14-UDI-01` | 10 | 17 | explicit or selected rows |
| `EIS14-UDI-02` | 10 | 17 | explicit or selected rows |
| `EIS14-UDI-03` | 10 | 6 | explicit or selected rows |
| `EIS14-UDI-04` | 10 | 15 | explicit or selected rows |
| `EIS14-UDI-05` | 10 | 5 | explicit or selected rows |
| `EIS14-UDI-06` | 11 | 17 | explicit or selected rows |
| `EIS14-UDI-07` | 11 | 31 | explicit or selected rows |
| `EIS14-UDI-08` | 11 | 3 | explicit or selected rows |
| `EIS14-UDI-09` | 11 | 14 | explicit or selected rows |
| `EIS14-CNF-01` | 12 | 25 | explicit or selected rows |
| `EIS14-CNF-02` | 12 | 11 | explicit or selected rows |
| `EIS14-CNF-03` | 12 | 9 | explicit or selected rows |
| `EIS14-CNF-04` | 12 | 5 | explicit or selected rows |
| `EIS14-ADP-01` | 13 | 6 | explicit or selected rows |
| `EIS14-ADP-02` | 13 | 8 | explicit or selected rows |
| `EIS14-CAB-01` | 14 | 36 | explicit or selected rows |
| `EIS14-CAB-02` | 14 | 4 | explicit or selected rows |
| `EIS14-CAB-03` | 14 | 15 | explicit or selected rows |
| `EIS14-CAB-04` | 14 | 17 | explicit or selected rows |
| `EIS14-STO-01` | 15 | 31 | explicit or selected rows |
| `EIS14-STO-02` | 15 | 14 | explicit or selected rows |
| `EIS14-STO-03` | 15 | 26 | explicit or selected rows |
| `EIS14-STO-04` | 15 | 9 | explicit or selected rows |
| `EIS14-STO-05` | 15 | 10 | explicit or selected rows |
| `EIS14-STO-06` | 15 | 7 | explicit or selected rows |
| `EIS14-STO-07` | 15 | 10 | explicit or selected rows |
| `EIS14-STO-08` | 15 | 4 | explicit or selected rows |
| `EIS14-STO-09` | 15 | 2 | explicit or selected rows |
| `EIS14-RET-01` | 16 | 10 | explicit or selected rows |
| `EIS14-RET-02` | 16 | 3 | explicit or selected rows |
| `EIS14-RET-03` | 16 | 11 | explicit or selected rows |
| `EIS14-RTV-01` | 17 | 35 | explicit or selected rows |
| `EIS14-SRC-01` | 17 | 14 | explicit or selected rows |
| `EIS14-SRC-02` | 17 | 6 | explicit or selected rows |
| `EIS14-SRC-03` | 17 | 4 | explicit or selected rows |
| `EIS14-SEC-01` | 18 | 16 | explicit or selected rows |
| `EIS14-SEC-02` | 18 | 60 | explicit or selected rows |
| `EIS14-SEC-03` | 18 | 14 | explicit or selected rows |
| `EIS14-SEC-04` | 18 | 4 | explicit or selected rows |
| `EIS14-FAIL-01` | 19 | 47 | explicit or selected rows |
| `EIS14-FAIL-02` | 19 | 23 | explicit or selected rows |
| `EIS14-FAIL-03` | 19 | 14 | explicit or selected rows |
| `EIS14-PRV-01` | 20 | 97 | explicit or selected rows |
| `EIS14-PRV-02` | 20 | 124 | explicit or selected rows |
| `EIS14-ENV-01` | 21 | 3 | explicit or selected rows |
| `EIS14-MIG-01` | 22 | 37 | explicit or selected rows |
| `EIS14-MIG-02` | 22 | 64 | explicit or selected rows |
| `EIS14-MIG-03` | 22 | 18 | explicit or selected rows |
| `EIS14-MIG-04` | 22 | 13 | explicit or selected rows |
| `EIS14-MIG-05` | 22 | 90 | explicit or selected rows |
| `EIS14-MIG-06` | 22 | 6 | explicit or selected rows |
| `EIS14-VER-01` | 23 | 7 | explicit or selected rows |
| `EIS14-VER-02` | 23 | 67 | explicit or selected rows |
| `EIS14-PERF-01` | 24 | 4 | explicit or selected rows |
| `EIS14-UX-01` | 24 | 6 | explicit or selected rows |
| `EIS14-NG-01` | 25 | 96 | explicit or selected rows |
| `EIS14-DOC-01` | 26 | 13 | explicit or selected rows |
| `EIS14-HOLD-01` | 27 | 225 | rule: all `IN SCOPE` rows carrying `D12` |
| `EIS14-HOLD-02` | 27 | 92 | rule: all `IN SCOPE` rows carrying `D13` |
| `EIS14-HOLD-03` | 27 | 42 | rule: all `IN SCOPE` rows carrying `DTX` |
| `EIS14-HOLD-04` | 27 | 13 | rule: all `IN SCOPE` rows carrying `D15`, `D17`, `D19` or `D20` |
| `EIS14-HOLD-05` | 27 | 48 | rule: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-FIN` |
| `EIS14-HOLD-06` | 27 | 116 | rule: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-UDI` |
| `EIS14-HOLD-07` | 27 | 8 | rule: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-FPRINT` |
| `EIS14-HOLD-08` | 27 | 124 | rule: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-STO` |
| `EIS14-HOLD-09` | 27 | 97 | rule: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-PROV` |
| `EIS14-HOLD-10` | 27 | 11 | rule: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-LEG` |
| `EIS14-HOLD-11` | 27 | 13 | rule: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-LATER` |

## 30. Trigger Screen and Open Engineering Questions

| Trigger | Result |
|---|---|
| T2 — conflict among approved sources | NOT TRIGGERED |
| T3 — new merchant-visible Product Truth or orphan behaviour | NOT TRIGGERED. Every requirement maps to FCTM rows; none adds product behaviour. EIS14-RTV-01 records that any intentional non-zero post-revocation access window would return to Mission Control as a T3 candidate; server-mediated delivery is the default, so no such window is proposed. Stage 10 refinement adds no merchant-visible behaviour: distinct measures use existing type names and no new customer-facing label (EIS14-TOT-01) |
| T6 — material derived constraint | NOT TRIGGERED anew; Stage 7 and specialist constraints are carried as engineering constraints accepted by Mission Control |
| T7 — omission, deferral, pull-forward, simplification, reclassification, reassignment | NOT TRIGGERED. No row moved or narrowed; held rows stay `IN SCOPE`; SB-P-1.16 balance, ageing and reconciliation are not pulled in (EIS14-SRC-03) |
| T8 — conflict, infeasibility or material security/integrity conflict | NOT TRIGGERED. Conditional: EIS14-RET-01 returns to Mission Control if no compliant `FPDR-2` discard mechanism exists; EIS14-MIG-01/-05 if a history rewrite, duplicate-credit backfill or destructive post-new-data rollback were required; EIS14-CMD-03 if a parallel protected write path could not be eliminated; EIS14-SEC-02 if a new object could not be born safely; EIS14-LDG-03 if commit-time repayment-target revalidation proved infeasible; EIS14-RET-01 if held objects could not be excluded from lifecycle expiry. The Stage 10 T7 Security refinement is a Founder-approved restoration (`founder/05`), not a new T7 |

Engineering choices made here (not Product Truth): module split; table names `documents`, `document_versions`, `document_links`, `media_objects`; ingest state names; aggregation as a SQL view or function; credit-direction value names; fingerprint field sets per destination; server-mediated delivery (default) versus a direct mechanism proven immediately revocable; repayment-target revalidation mechanism (locking, transactional predicate or version comparison); index-build strategy. Stage 10 may change any of them without a Founder decision.

Open questions for Stage 10:

| ID | Question |
|---|---|
| EQ-1 | Whether any direct delivery mechanism can replace the server-mediated default under EIS14-RTV-01 once provider capability is evidenced |
| EQ-2 | `FPDR-2` mechanism under EIS14-RET-01 once R2 lifecycle and hold-exclusion capability is evidenced |
| EQ-3 | Interpretation offload placement within the deployed runtime (EIS14-UDI-04) |
| EQ-4 | Sequencing of M14-1 with the SB-P-1.12 WS-A3 transactions-family migration and SB-P-1.13 EIS13-CMD-02 |
| EQ-5 | Timing of the SB-P-1.12 and SB-P-1.13 workstreams this EIS consumes |
| EQ-6 | CI evidence path while GitHub Actions produce no runs |
| EQ-7 | Index-build strategy under EIS14-MIG-04 once target size, activity and lock window are known |
