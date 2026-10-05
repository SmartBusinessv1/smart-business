# SB-P-1.13 — Stage 2 Delta Evidence

**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation
**Status:** `DRAFT — NOT AUTHORIZED`. Not canonical until Mission Control review and human merge.
**Baseline:** `main@488b16346941e70975edfe849af4aea317cbd6a3`, 2026-10-05
**Prepared by:** Claude Code, Stage 2 Definition Actor
**Method:** read-only repository inspection of the files named in each item. No production system, test project, provider dashboard, Supabase CLI or deployment was accessed. No code, SQL, migration, configuration or provider state was changed.

## 1. Classification rule

Source 18 Stage 2 classifies each material change since the sources were approved as exactly one of:

- `NO PRODUCT EFFECT` — approved truth and the mission's experience are unaffected;
- `ENGINEERING ONLY` — affects how the mission is built, not what the merchant experiences;
- `PRODUCT-AFFECTING` — could change what this mission can deliver or demonstrate against approved truth, or which actor delivers it.

A fact that needs privileged access is recorded as `UNVERIFIED — ACCESS REQUIRED`. Classification is evidence for Mission Control; it does not decide the Stage 3 gate.

## 2. Summary

| ID | Area | Classification |
|---|---|---|
| D-01 | Conversation UI, routes and components | `NO PRODUCT EFFECT` |
| D-02 | Transaction write path versus "existing governed command/RPC" | `PRODUCT-AFFECTING` |
| D-03 | AI/OpenAI integration | `NO PRODUCT EFFECT` (code); provider state `UNVERIFIED — ACCESS REQUIRED` |
| D-04 | Voice code and voice-provider topology | `ENGINEERING ONLY`; provider state `UNVERIFIED — ACCESS REQUIRED` |
| D-05 | Permission-context plumbing and SB-P-1.12 implementation suspension | `PRODUCT-AFFECTING` |
| D-06 | Attachment/media path | `ENGINEERING ONLY` |
| D-07 | Support/FAQ routing | `NO PRODUCT EFFECT` |
| D-08 | CI/workflows and GitHub Actions availability | `ENGINEERING ONLY` |
| D-09 | Migrations (files only) and inherited residual `anon` grant | `PRODUCT-AFFECTING` (carried forward from SB-P-1.12; no new decision proposed) |
| D-10 | Runtime and provider topology | `ENGINEERING ONLY`; current state `UNVERIFIED — ACCESS REQUIRED` |
| D-11 | Governance and source versions | `NO PRODUCT EFFECT` |
| D-12 | Global Product Completion View lag | `NO PRODUCT EFFECT` |
| D-13 | OLE additions | `NO PRODUCT EFFECT` |
| D-14 | Residual rows inherited from the SB-P-1.12 FCTM | `NO PRODUCT EFFECT` (accounting; Mission Control confirmation requested) |
| D-15 | Existing governed command precedents | `NO PRODUCT EFFECT` |
| D-16 | Transaction types available versus Basic Voice credit/repayment scenarios | `PRODUCT-AFFECTING` |
| D-17 | Public marketing copy | `NO PRODUCT EFFECT` |
| D-18 | Test and runtime environments | `ENGINEERING ONLY`; current state `UNVERIFIED — ACCESS REQUIRED` |

Four items are `PRODUCT-AFFECTING`: D-02, D-05, D-09 and D-16. Source 18 Stage 3 trigger T4 is defined as "a Delta item classified `PRODUCT-AFFECTING`". The Truth Pack (Part 6) reports this; it does not decide the gate.

## 3. Items

### D-01 — Conversation UI, routes and components

- **Evidence:** `src/routes/` holds `auth`, `contact`, `how-it-works`, `index`, `privacy-policy`, `reset-password`, `start`, `super-admin`, `terms-of-service` and the authenticated `dashboard`, `transactions`, `inventory*`, `catalog*` routes. No conversation, chat or assistant route, component or message model exists. `src/components/authed-header.tsx:40-63` navigation lists Dashboard, Transactions, Inventory and Catalog only.
- **Reading:** matches the GPCV baseline for Contract 10 ("No authenticated first-class conversation route/history/workflow").
- **Classification:** `NO PRODUCT EFFECT`. Every Contract 10 row is `NI-CONV`.

### D-02 — Transaction write path versus "existing governed command/RPC"

- **Evidence:** `src/integrations/supabase/transactions.ts` `createTransaction` performs a direct client-side `insert` into `public.transactions` through the anon-key client, relying on RLS (`supabase/migrations/20260719102137_…sql`: `GRANT SELECT, INSERT … TO authenticated`; policy "Owners can create their business transactions", `creator_id = auth.uid()`). There is no create-transaction RPC, no idempotency key, no preview step and no confirmation binding. Corrections do use an RPC (`correct_transaction`). Transaction types are `sale` and `purchase` only.
- **Approved source:** Build Plan §10.2 Founder Runtime Scenario A: the assistant "executes through the existing governed command/RPC". Build Plan §6.2 and Contracts 10 §13, 24 §11 and 22 §15 require a deterministic, idempotent, confirmation-bound command. Contract 3 §22 says existing transaction foundations are extended, not replaced. Mature Ledger work is assigned to SB-P-1.14 (Build Plan §10.3).
- **Reading:** for transactions, Scenario A's premise is not met by the repository. Catalog and inventory do have governed commands (D-15), so a native workflow exists for those domains, but Scenario A names a transaction.
- **Classification:** `PRODUCT-AFFECTING`. Which mission builds the governed create-transaction command, and whether Scenario A waits for it, is not answered by any approved source. Affected rows carry `DTX` (17 `IN SCOPE` rows, including `BP-§10.2-SA1`, `10-§23-1`, `10-§23-9`, `12-§21-1`, `24-§31-13`). Founder decision brief item FDB-1.

### D-03 — AI/OpenAI integration

- **Evidence:** `package.json` has no AI or LLM SDK dependency. No source file under `src/`, `lambda/parser/handler.ts`, `supabase/` or `.github/workflows/` references OpenAI, a model, an embedding or an AI secret. No server function performs model calls.
- **Reading:** matches the GPCV baseline for Contract 24 ("No canonical shared orchestration/tool-routing layer").
- **Provider state:** whether a Team LIPS OpenAI account, API key custody, billing, usage limits and data-retention/training controls exist is `UNVERIFIED — ACCESS REQUIRED`.
- **Classification:** `NO PRODUCT EFFECT` for repository state. Provider facts feed derived constraint DC-11 and the EIS activation gate.

### D-04 — Voice code and voice-provider topology

- **Evidence:** no audio capture (`MediaRecorder`, `getUserMedia`), transcription or speech-synthesis code; no voice-provider dependency or configuration reference.
- **Approved source:** Build Plan §5.4 and §10.2 already record that "no mature voice provider path is currently established" and require an explicit environment/provider activation gate.
- **Provider state:** any voice-provider account, Malayalam/Manglish speech capability, cost and data handling: `UNVERIFIED — ACCESS REQUIRED`. Voice-provider purchase, activation or configuration is NOT AUTHORIZED (SB-P-1.13-MC-01 §3).
- **Classification:** `ENGINEERING ONLY`. The gate is already approved truth. The provider's Malayalam speech quality could narrow the Basic Voice experience; that is flagged as derived constraint DC-13.

### D-05 — Permission-context plumbing and SB-P-1.12 implementation suspension

- **Evidence:** `src/integrations/supabase/auth-middleware.ts:34` `requireSupabaseAuth` verifies a Bearer session. Authorization is owner-only RLS on `businesses.owner_id`. No membership, role, capability, entitlement, channel or confirmation-binding schema exists in `supabase/migrations/`. The SB-P-1.12 Implementation Authorization is `WITHHELD` (`communication/missions/SB-P-1.12/mission-control/implementation-authorization.md`). MC-70 (2026-10-05) suspends SB-P-1.12 implementation at the provider boundary.
- **Approved source:** Build Plan §11 ("1.12 Authority/Identity underpins all later role/permission behavior") and §10.2 Scenario A ("Employee requests for Owner-only profit must be denied"). SB-P-1.12 EIS §19.5 lets SB-P-1.13 consume the kernel only after the relevant SB-P-1.12 workstreams are implemented and verified and Mission Control accepts the dependency evidence.
- **Reading:** the Build Plan sequence assumed SB-P-1.12 would be implemented before SB-P-1.13 needs it. MC-70 changed that after the Build Plan was approved. SB-P-1.13 can be fully specified, but its role-dependent rows cannot be built against a real kernel or runtime-demonstrated until SB-P-1.12 resumes. That includes the Founder-reserved Employee denial (`BP-§10.2-SA2`) and the Manager/Employee rows. 198 `IN SCOPE` rows carry `D12`.
- **Classification:** `PRODUCT-AFFECTING`. No row is moved. Under Source 18 §3.2 item 5 the rows stay `IN SCOPE`, marked blocked, and the Founder decides any change. Founder decision brief item FDB-2.

### D-06 — Attachment/media path

- **Evidence:** the only file-intake path is catalog import: `src/server-functions/catalog-import.ts` (`.csv`/`.xlsx` only) and the SB-P-1.11 GC-38R parser path (`src/server-functions/parser-lease.ts`, `src/lib/parser-ingress/*`, `lambda/parser/handler.ts`, `.github/workflows/aws-gc38r-parser-deploy.yml`): presigned transient S3 upload and an AWS Lambda parser through IAM Roles Anywhere. There is no general media store; durable object storage (R2) is SB-P-1.14 (Build Plan §5.4, §10.3).
- **Reading:** SB-P-1.13's attachment work is intake and handoff only (SB-P-1.13-MC-02 §4). The catalog content-type checks and the parser lease are reuse candidates for the handoff boundary, consistent with Build Plan §10.3 "reuse of canonical parser/import/idempotency foundations".
- **Classification:** `ENGINEERING ONLY`. Interaction with derived constraint DC-08 (what the merchant sees when a document is sent before UDI exists).

### D-07 — Support/FAQ routing

- **Evidence:** no FAQ store, support intent routing or ticket model. `src/lib/error-capture.ts` and `src/lib/lovable-error-reporting.ts` capture technical errors; `src/routes/contact.tsx` is a static contact page. User-facing errors say "contact support" (for example `src/routes/_authenticated/dashboard.tsx:89`).
- **Reading:** matches the GPCV baseline for Contract 8 ("Error capture exists but no merchant FAQ → AI → human support workflow"). Contract 8 §13 forbids treating error capture as support (`8-§13-1`).
- **Classification:** `NO PRODUCT EFFECT`.

### D-08 — CI/workflows and GitHub Actions availability

- **Evidence:** `.github/workflows/` holds `build-assurance.yml` (Fast Gate), `full-assurance.yml`, `markdown-quality-gate.yml` and three AWS GC-38R/GC-42 workflows. The most recent workflow runs on `main` returned by `gh run list --branch main` are dated 2026-09-30 (`36708731638` Application Build Assurance and `36708731667` Markdown Quality Gate, both `success`, head `ec0fc74d`). The GitHub account restriction affecting Actions remains open (MC-70 §3; SB-P-1.12 EV-01 OPEN).
- **Reading:** no workflow covers conversation, AI or voice; none is needed for Stage 2. CI results for this pull request may not be produced.
- **Classification:** `ENGINEERING ONLY`.

### D-09 — Migrations (files only) and inherited residual `anon` grant

- **Evidence:** 24 files in `supabase/migrations/`; none creates conversation, message, AI, voice, FAQ or support objects. `20260727000000_reconcile_default_grants.sql:42-55` grants table and function privileges and default privileges to `anon`. `20260830120000_…_inventory_anon_privilege_hardening.sql` hardens the three inventory tables only. `docs/migration/README.md` records its production status as `UNVERIFIED` and leaves `businesses`, `transactions` and `transaction_correction_events` unremediated in the file set.
- **Reading:** a conversational read or write path over transactions would sit on these tables. Build Plan §5.1 assigns remediation to SB-P-1.12 (WS-B), whose G-6/T4 hold is already canonically dispositioned there.
- **Classification:** `PRODUCT-AFFECTING`, carried forward from the SB-P-1.12 Stage 2 record. This Truth Pack proposes no separate SB-P-1.13 decision. It lists the item so Mission Control can confirm none is needed.

### D-10 — Runtime and provider topology

- **Evidence (documentary only):** `docs/migration/README.md` records production live after `SB-MIG-1.2F`. MC-70 and MC-71 record open provider recovery: GitHub Support `#4816157`, Supabase Support `SU-494995`, Lovable and Resend recovery pending; Founder Supabase dashboard access unavailable.
- **Reading:** any later AI or voice credential provisioning, secret placement or deployment step depends on administrative access that is currently impaired. MC-71 §B lists stable facts that must not be rediscovered; none was re-probed.
- **Classification:** `ENGINEERING ONLY`. Current provider state: `UNVERIFIED — ACCESS REQUIRED`.

### D-11 — Governance and source versions

- **Evidence:** all eleven Stage 1 intake blobs are byte-identical at the baseline. Source 18 (`0945bda6`) and the Phase 1 guide (`3da3d6d3`) are unchanged since the SB-P-1.12 intake. The only contract change since the SB-P-1.12 intake is Contract 22 §33 (PR #671, PR #675), which predates the SB-P-1.13 Stage 1 blob and is not touched here (`22-§33` `NOT APPLICABLE`).
- **Classification:** `NO PRODUCT EFFECT`.

### D-12 — Global Product Completion View lag

- **Evidence:** GPCV rows 21 and 22 still describe the pre-SB-P-1.12 state, and rows 8, 9, 10, 12, 24 are `NOT IMPLEMENTED`.
- **Reading:** correct. No SB-P-1.12 or SB-P-1.13 work has reached acceptance, and GPCV §12 forbids early upgrades. This mission does not edit the GPCV.
- **Classification:** `NO PRODUCT EFFECT`.

### D-13 — OLE additions

- **Evidence:** 17 promotions, unchanged since `dc5fe69f`. The SB-P-1.12 partial learning handoff is unpromoted.
- **Classification:** `NO PRODUCT EFFECT` (`04-stage2-institutional-learning-intake.md`).

### D-14 — Residual rows inherited from the SB-P-1.12 FCTM

- **Evidence:** the canonical SB-P-1.12 FCTM assigns 15 rows to SB-P-1.13. Eight are in Contracts 17, 20 and 7, which the SB-P-1.13 Stage 1 Intake Pack did not open: `17-§5`, `17-§22-4`, `17-§22-8`, `20-§13`, `20-§14`, `20-§15`, `20-§23-5`, `7-§11`.
- **Reading:** these are approved assignments, not new scope. Source 18 §3.2 item 9 requires the later mission to inherit them. They are FCTM Part H.
- **Classification:** `NO PRODUCT EFFECT`. Mission Control confirmation requested (Truth Pack MC-Q1).

### D-15 — Existing governed command precedents

- **Evidence:** catalog and inventory use governed RPCs with preview and commit steps and idempotency: `preview_inventory_movement` and `create_inventory_movement`, `preview_catalog_inventory_link_change` with link preview tokens, `catalog_write_idempotency_keys`, `get_catalog_command_outcome`.
- **Reading:** a working pattern for deterministic command execution and replay-safe outcomes. SB-P-1.12 EIS-CNF-01 generalizes the preview-token precedent into `confirmation_bindings`.
- **Classification:** `NO PRODUCT EFFECT`.

### D-16 — Transaction types versus Basic Voice credit/repayment scenarios

- **Evidence:** transaction types are `sale` and `purchase` (`src/integrations/supabase/transactions.ts`). Four-state Ledger (income, expense, credit, repayment) is a Build Plan §10.3 SB-P-1.14 work area.
- **Approved source tension:** Contract 12 §21 Scenario 1 ("natural sale/expense/credit/repayment voice input") and §7 ("credit vs repayment" clarification) belong to Basic Voice, which is SB-P-1.13. The states they need arrive in SB-P-1.14.
- **Classification:** `PRODUCT-AFFECTING`. Rows `12-§4-1`, `12-§7-6` and `12-§21-1` stay `IN SCOPE` with `D14`. Founder decision brief item FDB-3.

### D-17 — Public marketing copy

- **Evidence:** `src/routes/how-it-works.tsx:12` describes "an AI Business Manager on WhatsApp".
- **Reading:** consistent with Build Plan §8.1 (WhatsApp-first go-to-market, channel-independent system).
- **Classification:** `NO PRODUCT EFFECT`.

### D-18 — Test and runtime environments

- **Evidence:** `tests/` holds catalog-import, inventory and parser-lease suites with Supabase test-client setup. No conversation, AI or voice test exists. SB-P-1.12 EV-02 (test-bound runtime environment) is `PARTIALLY EVIDENCED`.
- **Classification:** `ENGINEERING ONLY`. Current test-project state: `UNVERIFIED — ACCESS REQUIRED`.

## 4. Inaccessible evidence

| Fact | Why it matters | State |
|---|---|---|
| OpenAI account, key custody, billing, data controls | AI gateway activation; privacy (DC-11) | `UNVERIFIED — ACCESS REQUIRED` |
| Voice-provider availability and Malayalam/Manglish speech quality | Basic Voice activation gate; DC-13 | `UNVERIFIED — ACCESS REQUIRED` |
| Production effective grants on `businesses`/`transactions` | D-09 | `UNVERIFIED — ACCESS REQUIRED` (owned by SB-P-1.12) |
| Test project state | Later runtime verification | `UNVERIFIED — ACCESS REQUIRED` |
| Supabase/Lovable/GitHub administrative access | Any provisioning step | Documented as impaired (MC-70); not re-probed |

Documentary Stage 2 work did not depend on any of these, so it continued.
