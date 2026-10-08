# SB-P-1.14 — Stage 6 Builder Review

**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media
**Stage:** Source 18 v1.2 Stage 6 — Builder Review
**Reviewer:** Claude Code — Stage 6 Builder Review owner (also the Stage 2–4 Definition Actor; this is not independent assurance)
**Authorization:** SB-P-1.14-MC-07 (`mission-control/09-stage6-builder-review-authorization.md`) and `communication/live/instruction.md`, canonical at `main@8bfc100f98b81c146ace4147561c954ba6731ab5` (PR #818)
**Reviewed artifacts:** canonical Blueprint Sections 1–19 (`docs/phase-1-mission-blueprint/active/SB-P-1.14.md`, canonical at PR #817, `2c44945a`); canonical FCTM (blob `3154330d`, 766 rows); `FPDR-1` to `FPDR-3`; SB-P-1.14-MC-06
**Status:** `DRAFT STAGE 6 FINDINGS — RECOMMENDATIONS AND EVIDENCE ONLY; NOT PRODUCT TRUTH; AWAITING MISSION CONTROL REVIEW`
**Date:** 2026-10-08

Findings are recommendations and evidence. None edits the Blueprint, FCTM or Founder Decision Record, and none is approved truth until Mission Control decides it. All 563 `IN SCOPE` rows, all 203 non-`IN SCOPE` dispositions, `FPDR-1` to `FPDR-3`, `3-§9-12` in SB-P-1.16, and every approved runtime scenario and experience anchor are preserved.

## 1. Method and evidence

Read-only inspection at the base `8bfc100f`. No production, test project, provider dashboard, Supabase CLI or deployment was accessed; no code, SQL, migration or provider state was changed. Migrations were read as files only; their production state is not asserted.

| Evidence | Path / fact |
|---|---|
| E-01 | `supabase/migrations/20260719140000_f24b4d69-….sql`: `transactions.transaction_type CHECK IN ('sale','purchase')`; `amount NUMERIC(12,2) CHECK (amount > 0)`; `party_name` free text; `payment_method` includes `credit`; no link, direction or document column |
| E-02 | `20260720142204_….sql`: Owner `FOR UPDATE` policy on `transactions`; `transaction_correction_events` with `original_values`/`updated_values`, `ON DELETE CASCADE` from `transactions` |
| E-03 | `20260720142248_….sql`: `correct_transaction` switched to `SECURITY INVOKER` ("RLS on both tables now enforces authorization"); rejects types other than `sale`/`purchase`; Owner `FOR INSERT` policy on `transaction_correction_events` |
| E-04 | `20260727000000_reconcile_default_grants.sql`: `GRANT ALL` on `transactions`, `transaction_correction_events` (and four other tables) to `anon, authenticated, service_role`; `ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO anon, authenticated, service_role` and `EXECUTE ON FUNCTIONS` — every future table and function created by migration receives these grants |
| E-05 | `src/integrations/supabase/transactions.ts`: `createTransaction` is a direct client `insert`; `getDailyTotals` sums `sale` and `purchase` only; `TransactionType` allows only `"sale"` and `"purchase"` |
| E-06 | `src/routes/_authenticated/transactions.tsx` and `dashboard.tsx`: binary `isSale ? "Sale" : "Purchase"` rendering with `+`/`−`; "Today's sales"/"Today's purchases" cards; record tabs "Record a sale"/"Record a purchase" |
| E-07 | `src/lib/catalog-import/*`: CSV/XLSX only; limits 5 MB / 2,000 rows / 10 s; ZIP magic-byte and macro-workbook rejection; `parse-isolated.ts` uses `node:worker_threads` and records a known Cloudflare Workers incompatibility |
| E-08 | `vite.config.ts`: nitro build "using cloudflare as a default target" |
| E-09 | `src/server-functions/parser-lease.ts`, `lambda/parser/handler.ts`, `20260819120000_…_parser_support_schema.sql`: presigned S3 upload bound to object key, byte length and SHA-256; lease `file_kind CHECK IN ('csv','xlsx')`; Lambda deletes the object after parsing (`DeleteObjectCommand`); unwired to any UI |
| E-10 | `catalog_link_preview_tokens` (`20260806120000_…`): single `expected_state_fingerprint`, `expires_at`, closure `consumed`/`superseded` — the preview-binding precedent |
| E-11 | `20260721205714_…`: `inventory_movements_opening_stock_unique` — one opening-stock movement per item; `create_inventory_movement` with idempotency key |
| E-12 | No storage bucket, policy, `storage.from`, signed-URL call, R2 client or credential anywhere in the repository |
| E-13 | `tests/`: catalog-import, inventory, parser-lease suites; no transaction or Ledger test |
| E-14 | Locked SB-P-1.12 EIS: EIS-ISO-02 (commands only write boundary, today `transactions` and `businesses`), EIS-ISO-03 (WS-B effective-access reconciliation), EIS-ISO-05 (files/exports/storage via kernel), EIS-CNF-01 to -05, EIS-ESC-03/-04; locked SB-P-1.13 EIS: EIS13-CMD-02/-03, EIS13-CTX-01, EIS13-IDM-02, EIS13-ATT-01, EIS13-VOI-02 |

## 2. Lens outcomes

| # | Lens | Outcome |
|---|---|---|
| 1 | Four-state Ledger widening | B6-02 (MEDIUM) |
| 2 | FPDR-1 totals and history integrity | **B6-01 (HIGH, T3 candidate)**; B6-03 (MEDIUM) |
| 3 | Governed transaction command dependency | B6-04 (HIGH) |
| 4 | UDI intake and parser convergence | B6-05 (MEDIUM) |
| 5 | Interpretation → review/correct → preview → confirm | B6-06 (MEDIUM) |
| 6 | Receipt Cabinet / original proof | B6-07 (LOW) |
| 7 | Durable media / object storage | B6-08 (MEDIUM) |
| 8 | FPDR-2 retention and raw voice | B6-09 (MEDIUM) |
| 9 | Permission and business isolation | B6-10 (HIGH) |
| 10 | Idempotency, deduplication and concurrency | B6-11 (MEDIUM) |
| 11 | Untrusted document and AI boundary | B6-12 (MEDIUM) |
| 12 | Search/retrieval feasibility | B6-13 (LOW) |
| 13 | Opening-stock/import convergence | B6-14 (MEDIUM) |
| 14 | Scheduler dependency | Covered by B6-09 (FPDR-2 timing); no separate finding |
| 15 | AWS S3 transient staging | **NO FINDING** — E-09 shows the existing path is transient (object deleted after parse, lease-bound, unwired); consistent with MC-Q5 and Blueprint §8.2 |
| 16 | Provider/runtime unknowns | B6-15 (INFO) |
| 17 | SB-P-1.12 / SB-P-1.13 dependency reality | B6-16 (HIGH importance) |
| 18 | Failure and recovery | B6-17 (MEDIUM) |
| 19 | Migration/topology implications | B6-18 (MEDIUM) |
| 20 | Merchant simplicity | B6-19 (LOW) |

Severity scale: HIGH — must be resolved or explicitly planned before the affected work can proceed; MEDIUM — Stage 7/EIS must address; LOW — refinement or watch item; INFO — evidence for later stages.

## 3. Findings

### B6-01 — Credit and repayment representation and linkage are not fully defined

| Field | Value |
|---|---|
| Severity | **HIGH** |
| Lens | 2 (also 1, 5) |
| Blueprint section | §8.1, §8.3, §8.6, §10.1 (`FPDR-1`, `FPDR-3`), §15.1 Scenario B |
| FCTM rows | `3-§4-3`, `3-§4-4`, `3-§5-4`, `3-§5-5`, `3-§6-8`, `3-§8-8`, `3-§9-7`, `3-§10-5`, `3-§19-2`, `BP-§10.3-W2`, `BP-§10.3-SB1`, `BP-§10.3-SB2`, `BP-§10.3-SA2` |
| Source / Founder Decision | Contract 3 §4 (repayment is "settlement against an existing credit relationship"), §5 examples 3 and 4; `FPDR-1` (existing `sale + payment_method=credit` rows remain sales; a credit sale counts once as the sale; repayment is settlement); `FPDR-3` ("a different credit entry selected for a repayment"); SB-P-1.13 `FPDR-5` (credit-method sales recordable through conversation before this mission) |
| Repository evidence | E-01: credit today exists only as `sale` with `payment_method = credit`; no credit-state row, no direction, no link column |
| Finding | `FPDR-1` settles that credit-method sales stay sales and that repayment is not revenue, and `FPDR-3` implies a repayment selects a credit entry. No approved source says (a) whether a repayment may settle money owed from a **sale recorded with `payment_method = credit`** — legacy rows and the new ones SB-P-1.13 will create — given those rows are not, and may not become, the new `credit` state; (b) whether a **new** credit sale after widening is recorded as one `sale` row (as today) or also creates a `credit` entry that the repayment then settles; (c) whether a standalone credit entry with no recorded sale (for example "Shameer owes ₹2,000") counts in any income or sales total |
| Merchant/product impact | Without an answer, a merchant whose customer bought on credit (recorded the existing way) cannot record "received ₹500 against his credit" as a linked repayment, or totals could double count or drop amounts. Scenario B ("all four persist and retrieve correctly … without damaging existing history") cannot be specified exactly |
| Proposed refinement | Mission Control to determine whether this is a Founder product decision. Options to present (recommendation only): (1) a repayment may link to either a `credit` entry or a `sale` with `payment_method = credit` without changing that sale; new credit sales stay single `sale` rows; standalone credit entries never count as income; or (2) a credit sale also creates a linked `credit` entry going forward, legacy credit-method sales remain unlinkable sales; or (3) another rule |
| Product behaviour affected | **Yes** |
| Blocks Stage 7 | **Yes, for the listed rows only** (their EIS realization depends on the answer); all other rows can proceed |
| Dependency implications | Shapes the SB-P-1.16 base it must extend without a duplicate credit database (`14-§21`, delegated); interacts with `DTX` (command signature) and FPDR-3 target definition |
| T-screen | **T3 candidate** (new product decision needed; no approved source answers it). T2, T6, T7, T8: not triggered. Dependent Stage 7 work on the listed rows is stopped pending Mission Control |

### B6-02 — Widening touches every transaction surface, and credit needs an explicit direction

| Field | Value |
|---|---|
| Severity | MEDIUM |
| Lens | 1 |
| Blueprint section | §8.1, §8.8 |
| FCTM rows | `3-§4-1` to `-6`, `3-§22-1`, `3-§22-2`, `BP-§10.3-W3`, `BP-§10.3-SB2`, `3-§20-2` |
| Source / Founder Decision | Contract 3 §4, §22; `FPDR-1` ("owed to or by a relevant party"; no rewrite of history) |
| Repository evidence | E-01, E-03, E-05, E-06, E-13 |
| Finding | Additive widening is feasible but touches the `transaction_type` CHECK, the `correct_transaction` type guard and signature, generated types, `TransactionType`, every reader, and the binary UI rendering. `amount > 0` means "owed to" versus "owed by" cannot be carried by sign; credit needs an explicit direction attribute. No existing test protects current sale/purchase behaviour |
| Merchant/product impact | Without a full reader update, existing and new rows would be mislabelled ("Purchase −") |
| Proposed refinement (engineering) | Stage 7: enumerate every reader and writer; add a direction attribute for credit; build a pre-widening regression suite over sale/purchase rendering, totals and correction before widening |
| Product behaviour affected | No (realizes approved truth) |
| Blocks Stage 7 | No |
| Dependency implications | `DTX` (command widened in the same cut-over); migration mission (B6-18) |
| T-screen | None |

### B6-03 — Existing totals already count credit sales once; new states need explicit treatment

| Field | Value |
|---|---|
| Severity | MEDIUM |
| Lens | 2 |
| Blueprint section | §8.1, §8.6, §10.1 (`FPDR-1`) |
| FCTM rows | `3-§10-2`, `3-§10-3`, `3-§10-9`, `BP-§10.3-SB1` |
| Source / Founder Decision | `FPDR-1` totals rule; Contract 3 §10 |
| Repository evidence | E-05: `getDailyTotals` counts every `sale` (including `payment_method = credit`) in sales — already consistent with "a credit sale counts once as the sale"; E-06 dashboard cards |
| Finding | Repayment rows must be excluded from sales/income totals; income and expense rows need a defined relationship to the existing "sales"/"purchases" cards (for example sale as a kind of income). Standalone credit treatment depends on B6-01(c). Dashboard maturity itself is SB-P-1.17 (`17-§6`, delegated) |
| Merchant/product impact | Prevents repayment-as-revenue double counting on the existing dashboard |
| Proposed refinement (engineering) | Stage 7: one totals definition used by dashboard, period summaries and exports; regression tests for the `FPDR-1` rule |
| Product behaviour affected | No beyond `FPDR-1` and B6-01(c) |
| Blocks Stage 7 | No |
| Dependency implications | B6-01 |
| T-screen | None |

### B6-04 — No governed transaction command exists; current grants allow audit-bypassing writes

| Field | Value |
|---|---|
| Severity | **HIGH** |
| Lens | 3 (also 6) |
| Blueprint section | §8.1, §8.3, §10.2, §12.2 |
| FCTM rows | all 42 `DTX` rows; `3-§8-9` to `-16`, `3-§18-3`, `BP-§6.2-1`, `BP-§6.1-1` |
| Source / Founder Decision | Build Plan §6.2; SB-P-1.13 `FPDR-1`, EIS13-CMD-02; SB-P-1.12 EIS-ISO-02 |
| Repository evidence | E-02, E-03, E-04, E-05: transactions are created by direct client insert; the Owner `UPDATE` policy plus `GRANT ALL` lets an Owner update a transaction directly without a correction event; the Owner `INSERT` policy on `transaction_correction_events` lets correction events be written directly |
| Finding | Correction continuity (`3-§8-*`) and "no second protected write path" are only true once SB-P-1.12 WS-A3 replaces direct DML with commands for the transactions family and SB-P-1.13 delivers `create_transaction_governed`. Four-state widening must be part of that same command and cut-over, not a separate path |
| Merchant/product impact | Until then, audit history can be bypassed or forged at the database layer |
| Proposed refinement (engineering) | Stage 7 early delivery plan: sequence SB-P-1.12 WS-A3 (transactions family) → SB-P-1.13 EIS13-CMD-02 → SB-P-1.14 widening of that command and of correction; correction becomes a command that writes the event atomically; direct `UPDATE` and correction-event `INSERT` removed in the cut-over |
| Product behaviour affected | No (restores approved behaviour) |
| Blocks Stage 7 | No (Stage 7 plans it); blocks implementation of `DTX` rows |
| Dependency implications | `D12`, `DTX`, `D13` |
| T-screen | None (already governed by SB-P-1.12/1.13 locked specifications) |

### B6-05 — No document interpretation capability; deployed runtime constrains in-process parsing

| Field | Value |
|---|---|
| Severity | MEDIUM |
| Lens | 4 |
| Blueprint section | §8.2 |
| FCTM rows | `5-§4-1` to `-9`, `5-§14-*`, `5-§19-2`, `22-§9-*`, `24-§7-3`, `24-§7-4`, `BP-§10.3-W4`, `BP-§10.3-W12` |
| Source / Founder Decision | Contract 5 §4, §19; Contract 22 §9; Build Plan §10.3 |
| Repository evidence | E-07, E-08, E-09: only CSV/XLSX parsing; the `worker_threads` time-budget isolation is incompatible with the Cloudflare build target; the parser lease and Lambda accept `csv`/`xlsx` only |
| Finding | Image, PDF and handwriting interpretation do not exist and cannot rely on in-process `worker_threads` isolation in the deployed runtime. Interpretation must run through the SB-P-1.13 AI gateway and/or an isolated offload with an enforced budget. Extending one lease/parse pipeline to new kinds avoids a third parser stack |
| Merchant/product impact | Determines whether photo/PDF receipts work in production rather than only in development |
| Proposed refinement (engineering) | Stage 7: one UDI intake pipeline generalizing the existing lease, content checks and limits to new kinds; production-runtime-verified isolation; deterministic parsers for CSV/XLSX, AI gateway for images/PDF |
| Product behaviour affected | No |
| Blocks Stage 7 | No |
| Dependency implications | `DAI`, `D13`; runtime host fact UNVERIFIED (B6-15) |
| T-screen | None |

### B6-06 — `FPDR-3` needs a material-field fingerprint, not a whole-state fingerprint

| Field | Value |
|---|---|
| Severity | MEDIUM |
| Lens | 5 |
| Blueprint section | §8.3, §10.1 (`FPDR-3`), §15.1 |
| FCTM rows | `BP-§10.3-SA1`, `BP-§10.3-SA2`, `5-§9-9`, `22-§29-7`, `22-§13-4` (delegated), `21-§18` (delegated) |
| Source / Founder Decision | `FPDR-3`; SB-P-1.12 EIS-CNF-01 (a changed reviewed-state fingerprint fails confirmation) |
| Repository evidence | E-10: the precedent uses one `expected_state_fingerprint` over the whole previewed state |
| Finding | A whole-state fingerprint would force re-confirmation for irrelevant internal changes, which `FPDR-3` says must not happen; a too-narrow one would miss a material change. The binding fingerprint must cover exactly the reviewed interpretation (including merchant corrections) and the material target fields `FPDR-3` lists, while authority/revocation revalidation stays separate (EIS-CNF-02). This is consistent with EIS-CNF-01, which does not define fingerprint scope |
| Merchant/product impact | Protects against silent retargeting without needless repeat confirmations |
| Proposed refinement (engineering) | Stage 7/EIS: define the material-field fingerprint per destination (Ledger, opening stock) and test each listed material change plus a non-material change |
| Product behaviour affected | No (realizes `FPDR-3`) |
| Blocks Stage 7 | No; the repayment "credit entry" target depends on B6-01 |
| Dependency implications | `D12` (confirmation bindings) |
| T-screen | None |

### B6-07 — Correction keeps record identity; original-proof versioning has no precedent

| Field | Value |
|---|---|
| Severity | LOW |
| Lens | 6 |
| Blueprint section | §8.4 |
| FCTM rows | `25-§10-12`, `25-§23-7`, `5-§15-*`, `22-§29-12`, `3-§19-9` |
| Source / Founder Decision | Contract 25 §10, §23; Contract 22 §14 |
| Repository evidence | E-02, E-03: correction updates the transaction in place and keeps values in the event, so a document linked to the record keeps a stable target; there is no transaction delete policy; no document or version model exists (E-12) |
| Finding | Links from documents to records survive correction. Replacement of an original and correction of a document-derived record need a version/link model that keeps the original interpretation, the merchant's correction and the confirmed record distinguishable |
| Merchant/product impact | Original proof stays findable after edits |
| Proposed refinement (engineering) | Stage 7/EIS: link documents to the stable record identity; append-only version chain for originals; correction events reference the source document where one exists |
| Product behaviour affected | No |
| Blocks Stage 7 | No |
| Dependency implications | B6-04 (correction as a command) |
| T-screen | None |

### B6-08 — Storage control-plane design: credentials, signed-access window and two-phase ingest

| Field | Value |
|---|---|
| Severity | MEDIUM |
| Lens | 7 |
| Blueprint section | §8.5, §12.2, §12.4 |
| FCTM rows | `25-§4-*`, `25-§8-*`, `25-§9-*`, `25-§14-1`, `25-§15-*`, `25-§19-*`, `25-§20-7`, `25-§20-13`, `25-§26-11`, `BP-§5.4-1` |
| Source / Founder Decision | Contract 25; Build Plan §5.4; SB-P-1.12 EIS-ISO-05 |
| Repository evidence | E-12: no storage implementation; E-08: Cloudflare build target; E-09: an existing presigned-upload pattern bound to key, length and checksum |
| Finding | (1) Storage credentials must stay server-side; the upload pattern of E-09 is reusable for R2's S3-compatible API. (2) A signed retrieval URL stays valid until it expires even if permission is revoked, so `25-§26-11` needs short expiry or a proxy path. (3) Ingest must order object write, metadata and linkage so a failure never yields a "completed" record (`25-§8-11`). (4) R2 activation, credentials, rollback and verification remain the `DR2` gate |
| Merchant/product impact | Revocation honoured; no phantom documents |
| Proposed refinement (engineering) | Stage 7/EIS: retrieval mechanism choice with a stated revocation window; provider-independent object ID; ingest state machine reusing the lease pattern; activation/rollback plan |
| Product behaviour affected | No |
| Blocks Stage 7 | No |
| Dependency implications | `DR2`, `D12`; provider facts UNVERIFIED (B6-15) |
| T-screen | None |

### B6-09 — `FPDR-2` discard needs timing before the shared Scheduler exists

| Field | Value |
|---|---|
| Severity | MEDIUM |
| Lens | 8 and 14 |
| Blueprint section | §8.5, §10.1 (`FPDR-2`), §10.2, §12.2 |
| FCTM rows | `5-§6-1`, `5-§16-3`, `25-§12-1`, `25-§12-3`, `25-§17-6`, `25-§14-6`, `25-§21-*`, `25-§26-12`, `22-§28-4` |
| Source / Founder Decision | `FPDR-2`; MC-Q4; Build Plan §9 sequence (SB-P-1.15 after SB-P-1.14) |
| Repository evidence | No scheduler or job infrastructure in the repository; E-09 shows a transient-delete precedent |
| Finding | Discarding unconfirmed originals after a bounded grace period is time-based. The shared Scheduler is SB-P-1.15, which follows this mission. Feasible paths that need no feature-specific scheduler exist: keep unconfirmed uploads in a transient staging area whose expiry is enforced by the object store's own lifecycle rules, with metadata marked discarded on next access or by reconciliation; promote to durable storage only on confirmation. Raw voice stays transient (SB-P-1.13 EIS13-VOI-02) with no durable raw-audio store |
| Merchant/product impact | Unconfirmed documents are not kept longer than `FPDR-2` allows |
| Proposed refinement (engineering) | Stage 7: choose and justify a timing mechanism consistent with MC-Q4; if no acceptable mechanism exists before SB-P-1.15, return to Mission Control |
| Product behaviour affected | No (realizes `FPDR-2`) |
| Blocks Stage 7 | No |
| Dependency implications | `D15`, `DR2`; provider lifecycle capability UNVERIFIED (B6-15) |
| T-screen | None now. Would become **T8** only if Stage 7 finds no acceptable mechanism |

### B6-10 — Default privileges grant `anon` and `authenticated` full access to every new table

| Field | Value |
|---|---|
| Severity | **HIGH** |
| Lens | 9 |
| Blueprint section | §8.7, §12.1 |
| FCTM rows | `3-§18-1`, `3-§18-2`, `5-§16-1`, `5-§16-6`, `22-§23-2`, `22-§29-3`, `25-§19-*`, `25-§26-2`, `BP-§5.1-1` (delegated) |
| Source / Founder Decision | Contract 21 §6, §11 (delegated); SB-P-1.12 EIS-ISO-01, -03, -05; Build Plan §5.1 |
| Repository evidence | E-04: default privileges give every future table `GRANT ALL` to `anon` and `authenticated`; RLS is the only gate. Current policies are Owner-only (`businesses.owner_id`) |
| Finding | Any document, media-metadata, provenance or import table this mission adds would be readable and writable by `anon` unless RLS is enabled and grants are narrowed in the same migration. Owner-only RLS also cannot express Manager/Employee capabilities, so permission-scoped staff upload (`5-§18-9`) needs the SB-P-1.12 kernel |
| Merchant/product impact | Cross-business document leakage risk if a table ships without RLS |
| Proposed refinement (engineering) | Stage 7/EIS: every new table created with RLS enabled, explicit revokes from `anon`, kernel-based policies; mandatory specialist review (Supabase/RLS-grants); no Manager/Employee path before `D12` |
| Product behaviour affected | No |
| Blocks Stage 7 | No (Stage 7 must carry it); blocks implementation of new tables until handled |
| Dependency implications | `D12` (WS-B and WS-A3) |
| T-screen | None (security requirement already approved) |

### B6-11 — No idempotency for transactions or documents yet; multi-step writes need unknown-outcome handling

| Field | Value |
|---|---|
| Severity | MEDIUM |
| Lens | 10 |
| Blueprint section | §8.7 |
| FCTM rows | `3-§17-1`, `3-§17-2`, `5-§11-*`, `5-§18-6`, `25-§14-2` to `-5`, `22-§29-8` |
| Source / Founder Decision | Contract 5 §11; Contract 25 §14; SB-P-1.12 EIS-CNF-04, -05; SB-P-1.13 EIS13-IDM-02 |
| Repository evidence | E-05 (no idempotency on transaction insert); E-09 (SHA-256 bound at upload); E-11 (inventory idempotency precedent); catalog import batches carry no file fingerprint |
| Finding | Re-upload, retry, parser replay and cross-channel arrival need a business-scoped content fingerprint plus the shared idempotency key per destination write; bulk transaction imports follow the per-row commit and revocation semantics of EIS-CNF-05; confirmation that times out must surface an unknown outcome rather than retry blindly |
| Merchant/product impact | No duplicate Ledger entries from re-sent documents |
| Proposed refinement (engineering) | Stage 7/EIS: reuse the lease SHA-256 as the document fingerprint; per-row import ledger; unknown-outcome lookup before retry |
| Product behaviour affected | No |
| Blocks Stage 7 | No |
| Dependency implications | `D12`, `DTX` |
| T-screen | None |

### B6-12 — Untrusted documents: prompt injection and spreadsheet formula injection

| Field | Value |
|---|---|
| Severity | MEDIUM |
| Lens | 11 |
| Blueprint section | §8.2, §8.6, §8.7 |
| FCTM rows | `5-§13-8` to `-12`, `24-§14-1`, `24-§14-9`, `5-§16-4`, `3-§10-6`, `3-§10-7`, `25-§27-8`, `24-§22` (delegated) |
| Source / Founder Decision | Contract 5 §13, §16; Contract 24 §14, §22; SB-P-1.13 EIS13-CTX-01 |
| Repository evidence | E-07: macro-workbook rejection exists; no export code exists |
| Finding | Document text must enter the model only as untrusted data (EIS13-CTX-01). Separately, merchant-supplied text (party names, descriptions, interpreted line items) exported to CSV/Excel can carry spreadsheet formulas; exports must neutralize formula-leading cells. PDFs may carry active content and must be processed without executing it |
| Merchant/product impact | Exports opened in Excel cannot run injected formulas |
| Proposed refinement (engineering) | Stage 7/EIS: formula neutralization on export; injection fixtures for document-borne instructions; PDF processing without active content |
| Product behaviour affected | No |
| Blocks Stage 7 | No |
| Dependency implications | `D13`, `DAI` |
| T-screen | None |

### B6-13 — Counterparty search over free-text names must not become a directory

| Field | Value |
|---|---|
| Severity | LOW |
| Lens | 12 |
| Blueprint section | §8.6 |
| FCTM rows | `3-§9-1`, `3-§9-2`, `3-§9-4` to `-8`, `3-§9-10`, `3-§9-11`, `3-§9-13`, `BP-§10.3-S1`; later `3-§9-3`, `3-§9-12`, `BP-§10.3-S2` |
| Source / Founder Decision | Build Plan §10.3 search sequencing; `FPDR-1` |
| Repository evidence | E-01: `party_name` free text; E-05: no search |
| Finding | Matching spelling variants (English/Malayalam/Manglish) needs normalization from the shared language layer; it must stay a search key, not a customer/supplier identity table, and must not present a balance |
| Merchant/product impact | "Payments to ABC Traders" finds variant spellings without implying a directory or an owed balance |
| Proposed refinement (engineering) | Stage 7: normalized search key on records; no identity entity; no aggregate presented as owed balance |
| Product behaviour affected | No |
| Blocks Stage 7 | No |
| Dependency implications | `D13` (language layer); `D17`/`D18` for later directory |
| T-screen | None |

### B6-14 — Opening-stock import depends on product identity read paths and the single stock-write path

| Field | Value |
|---|---|
| Severity | MEDIUM |
| Lens | 13 |
| Blueprint section | §8.2 |
| FCTM rows | `7-§6-2`, `7-§6-4`, `7-§6-5`, `7-§15-2a`, `5-§4-9`, `5-§7-3`, `5-§18-5`, `BP-§10.3-W13` |
| Source / Founder Decision | Build Plan §10.3; GPCV §11; `FPDR-3` (opening-stock item as material target) |
| Repository evidence | E-11: one opening-stock movement per item; `create_inventory_movement` with idempotency; catalog import exists for product identity |
| Finding | Opening-stock lines must match existing inventory items and catalog products and write only through `create_inventory_movement`; an item that already has opening stock must be clarified, not overwritten. Product matching depends on SB-P-1.12 Product & Price Master read paths, which are gated (EIS-PPM-03/-05) |
| Merchant/product impact | No duplicate or overwritten opening stock |
| Proposed refinement (engineering) | Stage 7/EIS: opening-stock adapter over existing movement command; clarification for already-opened items |
| Product behaviour affected | No |
| Blocks Stage 7 | No |
| Dependency implications | `D12` (PPM read paths) |
| T-screen | None |

### B6-15 — Provider and runtime facts still unverified

| Field | Value |
|---|---|
| Severity | INFO |
| Lens | 16 |
| Blueprint section | §12.2, §12.4 |
| FCTM rows | all `DR2` and `DAI` rows |
| Source | Stage 2 Delta §4 |
| Evidence | E-08 (build target in source only); no provider access used |
| Finding | `UNVERIFIED — ACCESS REQUIRED`: Cloudflare account and R2 availability, lifecycle-rule capability and region; live production hosting runtime; AI provider account and document data controls; live storage policies and effective grants including `anon`; production rows with `payment_method = credit` (affects B6-01); test-project state; AWS non-production parser account |
| Proposed refinement | Mission Control to authorize separate read-only evidence collection before Stage 7 relies on any of these |
| Product behaviour affected | No |
| Blocks Stage 7 | No |
| T-screen | None |

### B6-16 — Upstream implementation chain gates most of this mission

| Field | Value |
|---|---|
| Severity | HIGH (importance; not a defect) |
| Lens | 17 |
| Blueprint section | §12.1 |
| FCTM rows | 225 `D12` rows; 92 `D13` rows; 42 `DTX` rows |
| Source | SB-P-1.12 EIS-DEP-01; SB-P-1.12 MC-70/71; SB-P-1.13 MC-38/39 |
| Evidence | Implementation Authorizations `WITHHELD` for both upstream missions |
| Finding | No four-state write, permission-scoped document access, confirmation binding or Workspace intake can be built or demonstrated before the upstream workstreams exist and are evidenced. Documentary stages can continue; implementation activation must sequence after them |
| Proposed refinement | Stage 7 early delivery plan: explicit dependency-ordered activation; no temporary parallel authority, AI or confirmation path |
| Product behaviour affected | No |
| Blocks Stage 7 | No |
| T-screen | None |

### B6-17 — Failure paths need explicit states across object, metadata, interpretation and record

| Field | Value |
|---|---|
| Severity | MEDIUM |
| Lens | 18 |
| Blueprint section | §8.5, §8.7 |
| FCTM rows | `5-§17-*`, `25-§20-*`, `25-§21-*`, `22-§19-*`, `24-§23-6`, `22-§29-10`, `22-§29-13` |
| Source | Contract 5 §17; Contract 25 §20, §21; Contract 22 §19 |
| Evidence | E-09 lease states (`ISSUED` to `CONSUMED`/`FAILED`/`EXPIRED`, `DISPATCH_OUTCOME_UNKNOWN`) as precedent |
| Finding | Storage outage during upload, AI/parser outage with a preview open, a confirmed write whose outcome is unknown, and a durable copy that fails after confirmation each need a defined state; compensation must never delete a confirmed record; audit continues across retries |
| Proposed refinement (engineering) | Stage 7/EIS: end-to-end state machine extending the lease precedent |
| Product behaviour affected | No |
| Blocks Stage 7 | No |
| T-screen | None |

### B6-18 — Migration and topology concerns

| Field | Value |
|---|---|
| Severity | MEDIUM |
| Lens | 19 |
| Blueprint section | §8.8, §12.4 |
| FCTM rows | `22-§20` (delegated), `BP-§5.3-1`, `BP-§5.1-1` (delegated) |
| Source | `docs/migration/README.md`; Build Plan §5.3 |
| Evidence | E-01 to E-04; two migrations both create `transactions` (`20260719102137_…`, `20260719140000_…`, differing only in comments, already recorded by earlier audits) |
| Finding | Widening alters a live CHECK constraint and a function signature; new tables inherit default privileges (B6-10); generated types must be regenerated; the production migration ledger and delivery-repository state are unverified; ordering must follow the SB-P-1.12 migration series. No backfill is needed because `FPDR-1` forbids rewriting history |
| Proposed refinement (engineering) | Stage 7: migration plan and rehearsal for a separately authorized migration mission; no execution here |
| Product behaviour affected | No |
| Blocks Stage 7 | No |
| T-screen | None |

### B6-19 — Keep the familiar sale/purchase entry while adding credit and repayment in merchant language

| Field | Value |
|---|---|
| Severity | LOW |
| Lens | 20 |
| Blueprint section | §9 |
| FCTM rows | `3-§2-2`, `3-§5-10`, `BP-§10.3-X` |
| Source | Contract 3 §2 (no ERP-first style), §5; Contract 25 Final Principle |
| Evidence | E-06: "Record a sale"/"Record a purchase" tabs |
| Finding | Four states should appear as everyday actions (sold, bought, owes, paid back) rather than accounting categories, and document flows should never expose storage or provider details |
| Proposed refinement | Later UX stages, by reference to Blueprint §9 |
| Product behaviour affected | No |
| Blocks Stage 7 | No |
| T-screen | None |

## 4. Trigger screen summary

| Trigger | Result |
|---|---|
| T2 — source conflict | Not triggered |
| T3 — new product decision | **Candidate — B6-01** (credit/repayment representation and linkage). Dependent Stage 7 work on the B6-01 rows is stopped pending Mission Control |
| T6 — material derived constraint | Not triggered (B6-06 realizes `FPDR-3`) |
| T7 — omission, deferral, pull-forward, reclassification | Not triggered |
| T8 — infeasibility or conflict | Not triggered; B6-09 would become T8 only if no acceptable timing mechanism exists |

## 5. Stage 7 readiness

Stage 7 can proceed for all rows except the 13 listed in B6-01, once Mission Control determines B6-01. Before Stage 7 relies on them, Mission Control's separate specialist appointments (MC-07 §7) are required for permissions/RLS-grants (B6-04, B6-10), storage (B6-08, B6-09), UDI/AI safety (B6-05, B6-12), transaction integrity (B6-01 to B6-04) and migration (B6-18).
