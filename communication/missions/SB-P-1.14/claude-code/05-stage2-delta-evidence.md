# SB-P-1.14 — Stage 2 Delta Evidence

**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media
**Status:** `DRAFT STAGE 2 OUTPUT — STAGE 2 AUTHORIZED; OUTPUT NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`
**Baseline:** `main@5a464e55f3365cbb4689d70f9c42dbe320ebb558`, 2026-10-07
**Prepared by:** Claude Code, Stage 2 Definition Actor
**Method:** read-only repository inspection of the files named in each item, plus read-only `gh` API queries for CI and branch state. No production system, test project, provider dashboard, Supabase CLI, AWS or Cloudflare account was accessed. Migration files were read as files only. No code, SQL, migration, configuration or provider state was changed.

## 1. Classification rule

Each material change since the sources were approved is classified as exactly one of:

- `NO PRODUCT EFFECT` — approved truth and the mission's experience are unaffected;
- `ENGINEERING ONLY` — affects how the mission is built or assured, not what the merchant experiences;
- `PRODUCT-AFFECTING` — could change what this mission can deliver or demonstrate against approved truth, or which mission delivers it.

Following Mission Control correction C-2 on the SB-P-1.13 Stage 2 pack, an implementation or assurance blocker that changes no approved behaviour is `ENGINEERING ONLY`. A fact that needs privileged access is `UNVERIFIED — ACCESS REQUIRED`. Classification is evidence for Mission Control; it does not decide the Stage 3 gate.

## 2. Summary

| ID | Area | Classification |
|---|---|---|
| D-01 | Ledger/transaction schema: two types only, free-text party, no linkage | `ENGINEERING ONLY` |
| D-02 | Transaction write path versus the one governed command | `ENGINEERING ONLY` |
| D-03 | Existing UI and dashboard totals assume two types | `ENGINEERING ONLY` (merchant-visible risk carried as DC-02) |
| D-04 | Document/import/parser paths | `ENGINEERING ONLY` |
| D-05 | AWS S3 transient staging and Lambda parser (non-production) | `ENGINEERING ONLY`; provider state `UNVERIFIED — ACCESS REQUIRED` |
| D-06 | Durable storage: none exists | `NO PRODUCT EFFECT` |
| D-07 | Idempotency/dedupe foundations | `NO PRODUCT EFFECT` |
| D-08 | Audit/provenance surfaces | `ENGINEERING ONLY` |
| D-09 | Search, retrieval and export | `NO PRODUCT EFFECT` |
| D-10 | Conversation/AI attachment handoff seam | `ENGINEERING ONLY` |
| D-11 | Upstream implementation suspended (SB-P-1.12, SB-P-1.13) | `ENGINEERING ONLY` |
| D-12 | Migrations (files only) and residual `anon` grant | `ENGINEERING ONLY` |
| D-13 | CI/workflows, checks and test coverage | `ENGINEERING ONLY` |
| D-14 | Runtime and provider topology | `ENGINEERING ONLY`; current state `UNVERIFIED — ACCESS REQUIRED` |
| D-15 | Governance and source versions | `NO PRODUCT EFFECT` |
| D-16 | OLE additions | `NO PRODUCT EFFECT` |
| D-17 | Global Product Completion View lag | `NO PRODUCT EFFECT` |
| D-18 | Inherited residual and reverse-dependency rows | `NO PRODUCT EFFECT` (accounting) |
| D-19 | SB-P-1.13 FPDR-5 restatement versus Build Plan §10.5 credit-balance ownership | `PRODUCT-AFFECTING` |
| D-20 | Existing credit-payment-method sales versus the four-state credit state | `PRODUCT-AFFECTING` |
| D-21 | Opening-stock foundations | `NO PRODUCT EFFECT` |

Counts: 2 `PRODUCT-AFFECTING` (D-19, D-20), 11 `ENGINEERING ONLY`, 8 `NO PRODUCT EFFECT`.

## 3. Items

### D-01 — Ledger/transaction schema

- **Evidence:** `supabase/migrations/20260719140000_f24b4d69-….sql`: `transaction_type TEXT NOT NULL CHECK (transaction_type IN ('sale','purchase'))`; `party_name TEXT NOT NULL` free text; `payment_method` includes `credit`; no column linking a repayment to a credit, no document reference. `20260720142204_….sql` and `20260720142248_….sql`: `correct_transaction` raises unless the type is `sale` or `purchase`. `src/integrations/supabase/transactions.ts:7` `TransactionType = "sale" | "purchase"`.
- **Reading:** matches GPCV row 3 ("mainly manual sale/purchase + correction audit"). Build Plan §10.3 already prescribes additive widening. Widening touches the table CHECK, the correction function, generated types and every reader (D-03).
- **Classification:** `ENGINEERING ONLY`. Rows carry `NI-LDG4`.

### D-02 — Transaction write path

- **Evidence:** `createTransaction` performs a direct client `insert` through the anon-key client under owner-only RLS; no idempotency key, preview or binding. The locked SB-P-1.13 EIS specifies `create_transaction_governed` (EIS13-CMD-02) implemented only through the SB-P-1.12 WS-A3 transactions-family cut-over (SB-P-1.13 resume register §D: "No second or parallel protected transaction-write path is permitted"). SB-P-1.12 EIS-ISO-02 makes commands the only write boundary for `transactions`.
- **Reading:** four-state recording and UDI-confirmed Ledger writes must extend that one command. Ownership is already settled (SB-P-1.13 FPDR-1 for existing types; Build Plan §10.3 for widening).
- **Classification:** `ENGINEERING ONLY`. Rows carry `DTX` (42 `IN SCOPE` rows).

### D-03 — Existing UI and dashboard totals assume two types

- **Evidence:** `src/routes/_authenticated/transactions.tsx:320-354` and `dashboard.tsx:446-458` render `isSale ? "Sale" : "Purchase"` with `+`/`−`, so any new type would display as a purchase. `getDailyTotals` (`transactions.ts`) sums only `sale` and `purchase`; dashboard shows "Today's sales" and "Today's purchases".
- **Reading:** widening without changing every reader would mislabel history and distort totals (Scenario B, `BP-§10.3-SB2`). How credit and repayment affect daily totals without double-counting is merchant-visible and not defined by approved sources (DC-02; FDB-1).
- **Classification:** `ENGINEERING ONLY` for the rendering change; the totals-semantics question is carried as DC-02.

### D-04 — Document/import/parser paths

- **Evidence:** the only file intake is catalog import: `src/server-functions/catalog-import.ts` and `src/lib/catalog-import/*` (CSV/XLSX only; `limits.ts` 5 MB, 2,000 rows, 10 s; `content-type.ts` ZIP magic-byte and macro-workbook rejection; preview/commit with `catalog_import_batches`/`catalog_import_rows` statuses `NEEDS_CORRECTION`, `POSSIBLE_MATCH`). A second, unwired path exists: `src/server-functions/parser-lease.ts`, `src/lib/parser-ingress/*`, `lambda/parser/handler.ts` (SB-P-1.11-GC-38R). No image, PDF, OCR or handwriting interpretation exists.
- **Reading:** Build Plan §10.3 requires reuse of these foundations; the Claude Code build plan (`SB-DOC-PHASE1-HISTORY-1.0/build-proposal/02_Claude_Code_Independent_Build_Plan.md` §3.4) already notes two parser stacks and forbids a third (Contract 5 §19).
- **Classification:** `ENGINEERING ONLY`. Rows carry `NI-UDI` or `PART-IMP`.

### D-05 — AWS S3 transient staging and Lambda parser

- **Evidence:** `parser-lease.ts` mints a presigned S3 POST (`PARSER_INGRESS_BUCKET`, 300 s) and invokes an AWS Lambda Function URL through IAM Roles Anywhere; `parser_upload_leases` binds object key, byte length and SHA-256 (`20260819120000_…_parser_support_schema.sql`). `.github/workflows/aws-gc38r-parser-deploy.yml` is manual. The build plan records it as deployed to non-production and unwired to any UI.
- **Reading:** this is a non-R2 object-storage reference used as transient processing staging, not durable Business Memory. If reused for UDI, it must stay transient and must not become a second durable storage universe (Contract 25 §11, §27; DC-09).
- **Classification:** `ENGINEERING ONLY`. AWS account, bucket lifecycle and Lambda state: `UNVERIFIED — ACCESS REQUIRED`.

### D-06 — Durable storage

- **Evidence:** no migration references `storage.` objects or buckets; no `storage.from`, `createSignedUrl` or upload call in `src`; no R2 or Cloudflare client, credential or environment variable (the only "Cloudflare" mentions are Workers runtime comments in `parse-isolated.ts:13` and `parser-lease.ts:67`). SB-P-1.13 EIS13-ATT-01 states no Supabase storage bucket is created.
- **Reading:** matches GPCV row 25 `NOT IMPLEMENTED`. Storage policy state on live projects (SB-P-1.12 EIS-ISO-05 gate G-7) is `UNVERIFIED — ACCESS REQUIRED`.
- **Classification:** `NO PRODUCT EFFECT`.

### D-07 — Idempotency/dedupe foundations

- **Evidence:** `catalog_write_idempotency_keys`, `catalog_import_rows.row_idempotency_key`, derived keys (`src/lib/catalog-import/idempotency.ts`), inventory idempotency key and payload fingerprint (`create_inventory_movement`), `catalog_link_preview_tokens` preview binding, parser lease SHA-256. `catalog_import_batches` stores no file fingerprint, so re-uploading the same file is not detected. Nothing covers transactions or documents.
- **Classification:** `NO PRODUCT EFFECT` (reuse candidates; SB-P-1.12 EIS-CNF-04 generalizes them).

### D-08 — Audit/provenance surfaces

- **Evidence:** `transaction_correction_events` keeps `original_values`, `updated_values`, `edited_by`, `edit_reason`, `notification_status`, but references `transactions` `ON DELETE CASCADE`; `transactions.creator_id` references `auth.users` `ON DELETE CASCADE`. Catalog and inventory event tables are append-only. No document provenance exists.
- **Reading:** the cascades are already addressed by SB-P-1.12 EIS-ESC-03 and EIS-ESC-04. Document provenance is new work here.
- **Classification:** `ENGINEERING ONLY`.

### D-09 — Search, retrieval and export

- **Evidence:** `listRecentTransactions` (newest 50) and `getDailyTotals` only; no filter, search or export.
- **Classification:** `NO PRODUCT EFFECT` (matches GPCV).

### D-10 — Conversation/AI attachment handoff seam

- **Evidence:** SB-P-1.13 EIS13-ATT-01 (locked): Workspace intake under content-type and size checks, transient in-request staging only, unguessable references bound to principal and business, deterministic deletion, no durable storage, "The handoff interface targets the SB-P-1.14 UDI contract." No code exists. 33 SB-P-1.13 `IN SCOPE` rows carry `D14` (Truth Pack Part 5.3).
- **Reading:** this mission must publish the UDI intake contract that EIS13-ATT-01 hands off to, and must accept transient references without requiring channel-specific storage.
- **Classification:** `ENGINEERING ONLY`.

### D-11 — Upstream implementation suspended

- **Evidence:** SB-P-1.12 MC-70/MC-71 and SB-P-1.13 MC-38/MC-39: Implementation Authorization `WITHHELD`, formal completion not claimed.
- **Reading:** dependency-blocked rows stay `IN SCOPE` (226 carry `D12`, 93 carry `D13`). Governed by the Founder-directed documentation-acceleration lane; not a Founder question (precedent: SB-P-1.13 C-4).
- **Classification:** `ENGINEERING ONLY`.

### D-12 — Migrations (files only) and residual `anon` grant

- **Evidence:** 24 files; latest `20260902150000_…`. `20260719102137_…` and `20260719140000_…` both `CREATE TABLE public.transactions` and differ only in comments (already recorded by `docs/audits/SB-AUDIT-1.0…`, `SB-AUDIT-1.1…`, `docs/migration/SB-MIG-1.1/01-…`). `20260727000000_reconcile_default_grants.sql` residual `anon` exposure on `transactions` and `transaction_correction_events` remains (Build Plan §5.1; SB-P-1.12 WS-B). `docs/migration/README.md`: no current migration mission; default-deny.
- **Reading:** widening needs a separately authorized migration mission and rehearsal.
- **Classification:** `ENGINEERING ONLY`.

### D-13 — CI/workflows, checks and test coverage

- **Evidence:** `.github/workflows/`: `build-assurance.yml` (Fast Gate, PR and push to `main`), `full-assurance.yml` (path-triggered), `markdown-quality-gate.yml`, three manual AWS workflows. `gh run list --branch main` latest runs 2026-09-30 (`36708731638` Build Assurance, `36708731667` Markdown Quality Gate, both `success`, head `ec0fc74d`). Check runs on `5a464e55`: 0; combined status `pending` with 0 statuses. Branch protection on `main`: required status checks empty, strict, admins enforced, force push off, 0 rulesets (already recorded by SB-OPS-REPO-HOUSEKEEPING-1.2). `tests/` covers catalog-import (9), inventory (17), parser-lease (2); no transaction or Ledger test exists.
- **Reading:** Contract 3 §19 and Scenario B need a new transaction regression suite, including a pre-widening baseline of existing sale/purchase behaviour.
- **Classification:** `ENGINEERING ONLY`.

### D-14 — Runtime and provider topology

- **Evidence (documentary only):** `docs/migration/README.md` production LIVE after SB-MIG-1.2F. SB-P-1.12 MC-71 §C: GitHub, Supabase, Lovable and Resend recovery responses pending. Source 10 and P00 Part 6 describe an R2 activation pack and operational profile; no account exists in the repository.
- **Unverifiable here:** Cloudflare account and R2 availability, AWS non-production parser account, OpenAI account and data controls, live storage policies, test-project state, production data containing `payment_method = credit` sales.
- **Classification:** `ENGINEERING ONLY`; current state `UNVERIFIED — ACCESS REQUIRED`.

### D-15 — Governance and source versions

- **Evidence:** all eight Stage 1 intake blobs byte-identical at the baseline; Source 18 `0945bda6`; guide `3da3d6d3`; protocol `aacb1775`. No contract changed since Stage 1.
- **Note:** source-reading observations (Source 02 §8 storage tiering, Source 11 Receipt Scanning wording, R2 "candidate" wording) are not version drift; they are reported in Truth Pack Part 6.3.
- **Classification:** `NO PRODUCT EFFECT`.

### D-16 — OLE additions

- **Evidence:** 17 promotions, unchanged since the SB-P-1.12 and SB-P-1.13 intakes. SB-P-1.13 added an unpromoted partial learning handoff (blob `2d4a5e24`).
- **Classification:** `NO PRODUCT EFFECT` (`04-stage2-institutional-learning-intake.md`).

### D-17 — Global Product Completion View lag

- **Evidence:** rows 3, 5, 22, 25 unchanged; correct, as no SB-P-1.12 to SB-P-1.14 work has reached acceptance. This mission does not edit the GPCV.
- **Classification:** `NO PRODUCT EFFECT`.

### D-18 — Inherited residual and reverse-dependency rows

- **Evidence:** 34 SB-P-1.13 rows and 7 SB-P-1.12 rows name SB-P-1.14; all are represented (inventory §3). 33 SB-P-1.13 `IN SCOPE` rows depend on this mission (Truth Pack Part 5.3).
- **Classification:** `NO PRODUCT EFFECT` (accounting; Mission Control confirmation requested as MC-Q1).

### D-19 — FPDR-5 restatement versus Build Plan §10.5

- **Evidence:** SB-P-1.13 `founder/03-post-stage6-founder-product-decision-record.md` §6 lists as unchanged "mature four-state Ledger, customer-credit balance and repayment ownership in SB-P-1.14 (and credit maturity in SB-P-1.16)"; §3 and its `9-§9-4` annotation call "an owed balance … mature credit truth (SB-P-1.14)". Build Plan §10.5 assigns "customer-credit-specific records and balances; repayment history" to SB-P-1.16, and §10.3 says SB-P-1.16 "builds customer-credit-specific structures … on top of" this mission's Ledger. Contract 14 §5 and §7 (SB-P-1.16) own outstanding balance.
- **Reading:** FPDR-5 says it changes no assignment, so the Build Plan governs; but downstream SB-P-1.13 rows (`9-§9-4`, `12-§7-6`) now expect owed-balance truth from SB-P-1.14. Whether SB-P-1.14 must answer per-counterparty owed amounts ("What does Shameer still owe me?", `3-§9-12`) is not settled by any approved source.
- **Classification:** `PRODUCT-AFFECTING` — it could change which mission delivers owed-balance truth. FDB-1.

### D-20 — Existing credit-payment-method sales versus the four-state credit state

- **Evidence:** the schema allows `sale` with `payment_method = credit`; SB-P-1.13 FPDR-5 will add more such sales through conversation and voice before this mission's widening. Whether production holds such rows is `UNVERIFIED — ACCESS REQUIRED`.
- **Reading:** once a `credit` state exists, these rows are either left as sales (two parallel representations of money owed) or reinterpreted as credit (risking Scenario B's "without damaging existing sale/purchase history"). Contract 3 §4 allows richer internal types but no approved source says which merchant-visible meaning prior credit-method sales take.
- **Classification:** `PRODUCT-AFFECTING`. FDB-1.

### D-21 — Opening-stock foundations

- **Evidence:** `inventory_movements` `opening_stock` type with one-per-item unique index (`20260721205714_…`); no canonical opening-stock import. GPCV §11 closes the Lovable opening-stock disposition: reuse UDI, Lovable code is evidence only.
- **Classification:** `NO PRODUCT EFFECT`.

## 4. Inaccessible evidence

| Fact | Needed for | State |
|---|---|---|
| Cloudflare account, R2 availability, pricing, region | `DR2` activation | `UNVERIFIED — ACCESS REQUIRED` |
| AWS non-production parser bucket lifecycle and Lambda state | DC-09 reuse decision | `UNVERIFIED — ACCESS REQUIRED` |
| OpenAI account, key custody, data-retention/training controls for documents | `DAI`; DC-16 | `UNVERIFIED — ACCESS REQUIRED` |
| Live storage policies and effective grants (incl. `anon` on `transactions`) | `D12`; EIS-ISO-05 G-7 | `UNVERIFIED — ACCESS REQUIRED` |
| Production rows with `payment_method = credit` | D-20 | `UNVERIFIED — ACCESS REQUIRED` |
| Test-project state | later runtime verification | `UNVERIFIED — ACCESS REQUIRED` |

None blocked the documentary Stage 2 work.
