# CLAUDE CODE — INDEPENDENT ENGINEERING BUILD PLAN

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`
**Artifact Type:** Independent engineering review and build-plan critique — **NOT IMPLEMENTATION**
**Responds to:** `01_Mission_Control_Founder_Accepted_Build_Proposal.md` and `communication/live/instruction.1.md`
**Author:** Claude Code
**Status:** `INDEPENDENT REVIEW — RECONCILED PER INSTRUCTION 2 — FOR MISSION CONTROL FINAL REVIEW`
**Date:** `2026-09-12` (original), reconciled `2026-09-12` per `communication/live/instruction.2.md`

---

## Reconciliation Note (Instruction 2)

This document was updated in place per Mission Control's `communication/live/instruction.2.md`, which accepted the review's main architectural conclusions and requested four narrow corrections, summarized here for traceability (full detail is reconciled into the relevant sections below, not duplicated here):

1. **Nine Product Mission identities are retained as the planning baseline.** All references to additional Mission IDs (e.g., `1.12A/B`, `1.13A/B/C`) have been withdrawn and reframed as internal workstreams/stages/gates within a single Mission ID's Blueprint and EIS (Section 1, Section 7, Section 19, Section 20). This review directly re-read Source 18 for controlling language requiring separate Mission IDs per contract and found none — see Section 1, item 1.
2. **Catalog / Product & Price Master governance treatment is clarified.** A Founder Product Decision Record, future mission implementation authority, and a constitutional/Source 11 textual amendment are now explicitly distinguished; this reconciliation does not claim Source 11 has already been amended (Section 4).
3. **Support Automation sequencing is reframed as cross-mission advancement of one confirmed contract** — a foundation piece in `SB-P-1.13`, full completion in `SB-P-1.19` — not a wholesale relocation (Section 7, Section 20).
4. **The two live pre-existing gaps (`anon`-privilege residual, missing CI gate) are confirmed as mandatory pre-acceptance gates for `SB-P-1.12` itself**, not implemented under this historical mission and not authorization for `SB-P-1.12` to begin (Section 1, Section 7).

No new research was performed beyond a direct re-reading of Source 18 on the mission-granularity question. All other repository-grounded evidence from the original review is preserved unchanged.

---

## Preface — How This Review Was Built

This review is grounded in direct inspection of the current repository at `main @ 0c83367` (this branch's base), not in the Founder-accepted proposal's own framing. Evidence sources, all cited by exact path below:

- All 25 mature feature contracts and both `00_` registers in `docs/phase-1-mission-blueprint/smart-business-features/`.
- All 8 documents in `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/final-reconciliation/` (the prior implementation-vs-contract audits produced during this same historical mission).
- The complete SB-P-1.0 → SB-P-1.11 mission history in `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/mission-control/`, `synthesis/`, and `docs/implementation/`.
- The 12 binding governance sources in `merge/active/` (Sources 00, 01, 02, 03, 04, 05, 09, 11, 12, 17, 18, and `SB-GOV-1.2`).
- Direct, current-HEAD inspection of `src/`, `supabase/migrations/` (24 files), `tests/` (28 test files), `.github/workflows/` (4 workflows), `lambda/`, and `scripts/` — not documentation *about* the code, the code itself.

**Headline finding that shapes this entire review:** the final-reconciliation audit chain (`final-reconciliation/07_Current_Implementation_Baseline_Refresh_25_Contract_Model.md`, dated 2026-09-12, same day as this review) states that no canonical application code changed between PR #530 and PR #534 — only documentation. My own direct code inspection confirms this independently: current `main` still implements exactly four authenticated domains (auth/session, business identity, Transactions, Inventory, Catalog) and nothing else. **The prior audit's 25-contract implementation matrix is current, not historical**, and this review builds directly on it rather than re-deriving it.

---

## 1. Executive Engineering Verdict

**The proposal's core architectural direction is sound and should be CONFIRMED: converge twenty-five contracts onto a small number of shared kernels (Authority/Identity, Business Command Path, Business Memory, Conversation/AI, Automation), preserve Catalog engineering as a shared foundation rather than deleting it, and build native Conversation independently of WhatsApp.** This is not merely compatible with governance — Sources 12 §4/§5, 17 (Part B, B12), and 04's channel-agnostic policy design already *require* this shape. Mission Control's proposal is, in large part, the correct operationalization of standing governance rather than a new decision.

Three things must change before this proposal is safe to execute as written:

1. **Mission granularity — reconciled per Mission Control's Instruction 2.** The original draft of this review recommended splitting several proposed missions into additional Mission IDs (e.g., `1.12A/B`, `1.13A/B/C`, `1.18A/B/C`). On Mission Control's explicit direction, and on a direct re-reading of Source 18 for controlling language, **that recommendation is withdrawn**. Source 18 §3's Governing Principles require separating product definition, engineering specification, implementation, verification, and acceptance *stages*, and preventing an actor from approving its own work — they state no numeric limit on how many confirmed contracts one Mission ID's Blueprint/EIS may advance together, and nothing elsewhere in Source 18 states one either. The precedent this review itself cited, `SB-P-1.11` (one Mission ID, ~24 internally staged steps, each independently evidenced), in fact *supports* Mission Control's interpretation rather than contradicting it. **This plan therefore retains exactly nine Product Mission identities (`SB-P-1.12` through `SB-P-1.20`)** and reframes all internal decomposition as workstreams/stages/gates within a single Mission ID's Blueprint and EIS, not as additional Mission IDs (Section 7, Section 19).

2. **Two real, currently-live gaps must close early, inside `SB-P-1.12`, because they are not hypothetical:**
   - A residual overly-broad `anon` grant from migration `20260727000000_reconcile_default_grants.sql` was only partially remediated (Inventory only, via `20260830120000_..._anon_privilege_hardening.sql`); `businesses`, `transactions`, and `transaction_correction_events` are explicitly flagged in that same migration's own commentary as sharing the same root cause and **not yet fixed**.
   - No CI workflow currently runs `npm run build`, `npm run lint`, or the Vitest suite automatically on pull requests — only `.github/workflows/markdown-quality-gate.yml` runs automatically, and it inspects Markdown files only. Nine more missions of increasing schema/security complexity should not proceed without an automated gate.

   Both are recorded as **mandatory pre-acceptance gates for `SB-P-1.12` itself** (Section 7). Neither is to be implemented under this historical mission, and this document does not authorize `SB-P-1.12` to begin.

3. **"Catalog" has no textual basis anywhere in the 20 approved canonical governance documents.** It is not in Source 01's foundation-table list (§12), not in Source 01/03's locked route lists, not in Source 03's Dashboard Architecture (§4), and not named in any of the 25 mature feature contracts as a first-class capability — only referenced three times as something other contracts should *reuse*. This is a stronger finding than "product-surface drift": the current `/catalog` top-level navigation item (`src/components/authed-header.tsx:62-68`) was never authorized by Product Truth in the first place. This **strengthens** Mission Control's diagnosis but means the correct engineering remedy is not merely "demote a drifted surface" — it is to obtain an explicit **Founder Product Decision Record** authorizing Product & Price Master as the shared-foundation architectural treatment for the drifted Catalog surface. That record is a mission-planning decision, not a Source 11 textual amendment; a Source 11 amendment, if ever pursued, would require its own separate governance action. See Section 4.

Subject to those three corrections, this plan **confirms** the proposal's shared-foundation strategy, **confirms with changes** the Catalog verdict and several individual missions, and **does not reject** any major architectural element of the Founder-accepted proposal.

---

## 2. Repository Evidence Baseline

- **Canonical repository:** `SmartBusinessv1/smart-business`, branch `mission/SB-DOC-PHASE1-HISTORY-1.0-build-plan-review`, based on `main @ 0c83367` (which includes PR #541, the Founder-accepted build proposal itself).
- **Stack reality, not assumption:** the application is built on **TanStack Start** (file-based router + SSR server functions on Vite), not a generic React SPA — evidenced by `src/router.tsx`, `src/routes/__root.tsx`, `src/server.ts`, `src/start.ts`, `routeTree.gen.ts`, and every domain server action being a `createServerFn` in `src/server-functions/`. `package.json` still names the project `"tanstack_start_ts"`. Every future mission's Blueprint/EIS should assume this framework, not a generic one.
- **Production topology is bifurcated and this matters for every future migration:** the canonical implementation repo (`SmartBusinessv1/smart-business`) is **not** the repo that is actually deployed. Per `docs/implementation/SB-P-1.10-SB-P-1.11-post-completion-continuity.md`, production is delivered from `SmartBusinessv1/starter-supab-shell`, published through Lovable project `f3e992ec-06df-4d49-b157-b92ec064c078`, at `smartbusiness.teamlips.com`, against Supabase project `gysgzasfcjvtrgaigfyn`. `SB-OPS-PROD-SYNC-1.0` (2026-09-01→03) had to resynchronize these after they had silently diverged (the approved SB-P-1.10/1.11 application had never actually reached the production delivery repo) and, in the process, found and fixed two real defects (a parser runtime timeout under the real production runtime, and a Catalog↔Inventory duplicate-link data-integrity bug affecting two live products). **This divergence risk is standing, not historical** — every future mission's rollback/compatibility section must explicitly account for a canonical→delivery-repo sync step, not assume `git push` to canonical is sufficient.
- **No implementation drift since the last audit:** confirmed independently (agent-driven direct code read) that the four-domain implementation surface (auth, business identity, Transactions, Inventory, Catalog) is unchanged from the `07_Current_Implementation_Baseline_Refresh_25_Contract_Model.md` audit baseline (`main @ 8103ea4`). The 25-contract implementation matrix in that document (reproduced with corroboration in Section 6) is current as of this review.

---

## 3. Current Architecture Map

### 3.1 Frontend / routes
File-based TanStack Start routes under `src/routes/`. Locked-route reconciliation against `AGENTS.md`:

| AGENTS.md route | Exists in code | Note |
|---|---|---|
| `/`, `/how-it-works`, `/start`, `/contact` | YES | `src/routes/index.tsx`, `how-it-works.tsx`, `start.tsx`, `contact.tsx` |
| `/dashboard` (Login) | YES | `src/routes/_authenticated/dashboard.tsx`, gated by `src/routes/_authenticated/route.tsx:6-12` |
| `/super-admin` | YES, stub only | `src/routes/super-admin.tsx:24-43` states functionality "is not implemented during Bootstrap" |
| `/api/whatsapp-webhook` | **NOT FOUND** | No route, no Supabase Edge Function (`supabase/functions/` does not exist), no Lambda. Every one of the 16 repository hits for this string is documentation, not code. |
| Footer routes | YES | `privacy-policy.tsx`, `terms-of-service.tsx` |
| `/survey` (deprecated) | correctly absent | — |

Two routes exist that AGENTS.md does not enumerate but are necessary plumbing: `/auth` and `/reset-password`.

Authenticated sub-routes actually built: `/transactions`, `/inventory` (+ `/inventory/$itemId`), `/catalog` (+ `/catalog/$productId`, `/catalog/import`). **`/catalog` is a fully live, first-class top-level navigation item today** (`src/components/authed-header.tsx:62-68`, duplicated in the mobile nav at lines 125-132), reused across every authenticated page. The dashboard itself (`dashboard.tsx`) shows only business-identity setup and today's sale/purchase totals, plus three explicitly `aria-disabled` "Coming soon" cards: Business reports, **Ask CFO**, and **WhatsApp assistant** (`dashboard.tsx:316-329, 497-511`).

### 3.2 Supabase schema (24 migrations, chronological)
Four eras are visible in the migration history:
1. **Identity/Transactions foundation** (migrations 1–5): `businesses` (tenant root, `owner_id = auth.uid()` RLS), `transactions` + `transaction_correction_events` with the `correct_transaction()` governed correction RPC.
2. **Inventory Foundation, SB-P-1.10** (migration 6, 526 lines, plus hardening in 10–11): `inventory_items`, append-only `inventory_movements` (mutation blocked by `inventory_movements_reject_mutation()` trigger), `inventory_movement_idempotency_keys`, and the single governed write path `create_inventory_movement()`.
3. **Catalog Foundation, SB-P-1.11** (migrations 13–20, ~4,000 lines combined): a private `catalog_internal` schema, seven dedicated **executor Postgres roles** (`catalog_identity_executor`, `catalog_lifecycle_executor`, `catalog_pricing_executor`, `catalog_tax_executor`, `catalog_cost_executor`, `catalog_link_executor`, `catalog_read_executor`), 19 governed `SECURITY DEFINER` commands, column-level grants (e.g., only `catalog_pricing_executor` may `UPDATE (current_selling_price)`), and a full import-support schema (`catalog_import_batches`/`catalog_import_rows`) plus an AWS Lambda parser lease/guard schema (`parser_preview_guards`, `parser_upload_leases`).
4. **Security remediation, `SB-REL-1.10-1.11`/`SB-OPS-PROD-SYNC-1.0`** (migrations 21–24): reverts an over-broad `anon` grant for Inventory only; adds an application-level then database-level (`UNIQUE (business_id, inventory_item_id)`) guard against one Inventory item being linked to two Catalog products, including an audited, precondition-guarded repair of two production rows that had already collided.

**There is no `user_roles`/permissions table anywhere.** Multi-role access (Manager/Employee) is 0% implemented — confirmed in-code: `src/server-functions/catalog-import.ts:91-95` states plainly that "no permission infrastructure exists yet for either role to hold this authority." What currently substitutes for role enforcement is the **executor-role-per-command RLS pattern** in the Catalog domain — a genuinely strong, reusable pattern that Section 10 recommends generalizing into the Authority/Identity Kernel, rather than being reinvented per domain.

### 3.3 Idempotency / lease / guard mechanisms (concrete, not aspirational)
- **Idempotency:** `catalog_write_idempotency_keys` + `catalog_internal.idempotency_lock_key()` for every Catalog command; `inventory_movement_idempotency_keys` for Inventory; deterministic UUIDv5-derived follow-up keys in `src/lib/catalog-import/idempotency.ts`; a per-row `row_idempotency_key uuid DEFAULT gen_random_uuid()` column on `catalog_import_rows` that binds preview to commit (detailed in Section 3.4).
- **Lease:** `parser_upload_leases` (issue → confirm → claim → dispatch → complete/fail/expire), implemented in `src/server-functions/parser-lease.ts`.
- **Guard:** `parser_preview_guards` — a one-active-import-per-business mutex — plus several trigger-based consistency guards (`catalog_products_guard()`, `inventory_items_guard()`, etc., a distinct concept from the lease guard).

### 3.4 The actual bulk-import pipeline (and a necessary correction to the proposal's framing)
**The proposal's §12 reference to "the Lovable opening-stock import" describes code that does not exist in this canonical repository.** `final-reconciliation/06_Canonical_Lovable_Opening_Stock_Inventory_Import_Reconciliation.md` explicitly confirms canonical `main` has never contained `inventory.opening-stock-import.tsx`, `src/server-functions/inventory-import.ts`, or `src/lib/inventory-import/*` — that code lives only in a separate, drifted Lovable builder project (`f3e992ec-06df-4d49-b157-b92ec064c078`), classified `BUILDER-SIDE IMPLEMENTATION EVIDENCE — NOT CANONICAL COMPLETION`. Direct inspection of `src/` confirms zero matching files exist here.

What **does** exist canonically, and is directly relevant to UDI design, is the **Catalog product bulk import** (`src/routes/_authenticated/catalog.import.tsx`, `src/server-functions/catalog-import.ts`), which already solves — inside this exact repository — the precise confirmation-binding problem that Document 06 found unsolved in the Lovable-only opening-stock code:

- At preview time, each parsed row is persisted to `catalog_import_rows` with a `row_idempotency_key` generated once (`gen_random_uuid()` default) and never re-minted.
- At commit time, that same key is reused verbatim for `create_catalog_product`, and deterministic UUIDv5-derived variants of it key each optional follow-up command (`catalog-import.ts:575`, `src/lib/catalog-import/idempotency.ts`).
- Commit is atomic-claim-first: `UPDATE catalog_import_batches SET status='committing' WHERE ... status IN ('previewed','failed')` — only the winning claimant proceeds (`catalog-import.ts:499-506`).

This is a materially better pattern than the one Document 06 found in the (non-canonical) Lovable opening-stock code, where commit re-ran free-text resolution against live data without proving the resolved target still matched what the merchant actually previewed. **Recommendation, developed further in Section 12: the UDI mission (`SB-P-1.14`) should generalize this repository's own proven `catalog-import.ts` pattern, not the non-canonical Lovable opening-stock pattern**, which should be treated strictly as historical evidence subject to Document 06's 12-point promotion gate if any of its UX/parsing ideas are reused.

A second, unwired bulk-import path also exists: `src/server-functions/parser-lease.ts` + `lambda/parser/handler.ts`, an AWS Lambda offload for CPU/time-bounded spreadsheet parsing, reusing the same parse code as the in-process path, invoked only via IAM-authenticated Function URL. It is real, deployed to non-production infrastructure via `.github/workflows/aws-gc38r-parser-deploy.yml`, but **not yet reachable from the merchant-facing `/catalog/import` UI**.

### 3.5 Tests and CI
28 Vitest files under `tests/` (`catalog-import/` 9, `inventory/` 17, `parser-lease/` 2), predominantly **integration/RLS tests against a real, isolated test Supabase project** (multi-tenant isolation, concurrency, idempotency, audit-integrity tests all present) — not unit-test theater. Run via the guarded `scripts/supabase-cli.mjs` wrapper (`npm run supabase:test` / `:production`), which exists specifically to prevent a documented past incident where an ambient environment variable silently redirected a migration at production. **No Playwright/Cypress e2e suite exists.**

**CI gap, stated plainly:** of the four workflows in `.github/workflows/`, only `markdown-quality-gate.yml` runs automatically on push/PR, and it inspects `.md` files only. The other three (`aws-gc38r-parser-deploy.yml`, `aws-gc42-oidc-claims.yml`, `aws-gc42-role-assumption-verification.yml`) are manual (`workflow_dispatch`) and AWS-infrastructure-focused. **No workflow runs `npm run build`, `npm run lint`, or the Vitest suite automatically on every pull request.** This is Section 1's second corrective item.

### 3.6 Conversation / AI / Voice / WhatsApp — current state
**None of this exists in code.** `supabase/functions/` does not exist. No `/api/whatsapp-webhook` route exists. A case-insensitive search of `src/` for `conversation|voice|ask.?cfo|orchestrat` returns exactly three files, all false positives (two hit the English word "orchestration" in unrelated server-request comments; the third is the static, disabled "Ask CFO" dashboard card). No voice/speech SDK, no WhatsApp Business API client, appears in `package.json`. This means `SB-P-1.13`, most of `SB-P-1.14`, `SB-P-1.15`, and `SB-P-1.20` are **net-new builds with zero legacy coupling to unwind** — a genuine advantage: there is no existing wrong architecture to migrate away from, only a clean canvas constrained by governance.

---

## 4. Catalog / Product & Price Master Verdict — `CONFIRM WITH CHANGE`

**Mission Control's diagnosis is correct and, per the governance evidence in Section 3 and below, actually understated.** Not one of the 20 canonical governance documents names "Catalog" anywhere:

- Source 01 §12's foundation-table list names `users`, `transactions`, `inventory`, `scheduled_reminders`, `employees`, `system_errors`, `security_quarantine_logs`, `business_alerts` — no catalog/products table.
- Source 01 §9 and Source 03 §2's locked route lists do not include `/catalog`.
- Source 03 §4's Dashboard Architecture names exactly three sections — Financial Command Centre, Ask CFO, Import Export Centre — no Catalog section.
- None of the 25 mature feature contracts names Catalog or "Product & Price Master" as a first-class foundation; contract 22 (Shared Product Foundations) enumerates roughly twenty cross-cutting foundations and Catalog/Product Master is not among them. It is referenced only as something three *other* contracts (01 Order & Delivery, 07 Stock/Supplier/Reorder, 13 POS/Counter Intelligence, 17 Operational Dashboard) should *reuse*.

**Engineering conclusion:** `/catalog`'s current top-level navigation placement was never authorized by Product Truth in the first place — this is not merely UX drift accumulated over time, it is a capability that was built and shipped without ever having a corresponding Founder Product Decision Record. This changes the correct remedy in one material way from the proposal's framing:

1. **Demotion is safe and requires no destructive migration.** Every Catalog write already goes through 19 named, `SECURITY DEFINER` RPC commands (`src/integrations/supabase/catalog.ts`), never direct table access — the backend has zero coupling to where the frontend places its navigation entry point. Moving `/catalog` out of `authed-header.tsx`'s top-level nav into a contextual entry point (e.g., surfaced from within Inventory, or from a "Manage Products" affordance) is a **pure frontend/IA change**. The routes `/catalog`, `/catalog/$productId`, and `/catalog/import` can and should remain live for deep-link compatibility — nothing needs to be deleted.
2. **A Founder Product Decision Record — not a Source 11 amendment — is the correct governance instrument.** Per Mission Control's Instruction 2, this build-plan reconciliation does not itself amend Source 11, and the Founder's earlier acceptance of the Mission Control build proposal does not itself constitute a Source 11 textual amendment either. Three distinct things must not be conflated:
   - **Product Decision Record:** a Founder-recorded decision, per Source 18 Stage 3 (Founder Discovery), that the drifted Catalog implementation is to be treated going forward as a shared **Product & Price Master** foundation — contextually available to Inventory, Transactions, POS, Orders, and UDI — rather than a competing top-level product identity. This is the Founder-approved bridge from the current drifted implementation to the intended shared foundation; the underlying engineering judgment is not in dispute, only the governance record of the decision.
   - **Future mission implementation authority:** the Product Decision Record authorizes `SB-P-1.12`'s Blueprint to *plan* the reclassification and nav demotion; it does not itself authorize implementation, which still requires `SB-P-1.12`'s own full Source 18 lifecycle (Blueprint lock, EIS lock, implementation authorization) before any code changes.
   - **Constitutional/Product Truth source amendment:** if Mission Control later determines that Source 11's own text requires a formal clarification or amendment to name Product & Price Master, that is a separate, explicit governance action — following Document 08's amendment-routing rule — not an implicit effect of either the Product Decision Record or this build-plan reconciliation.
3. **What is genuinely reusable, unconditionally:** the executor-role-per-command RLS pattern (Section 3.2) is the single strongest piece of security engineering in the repository today and should become the template for the Authority/Identity Kernel in `SB-P-1.12`, not something narrowly scoped to Catalog.
4. **What must not happen:** merging Catalog's identity/pricing/tax data into `transactions` (transactions remain events, not master records — already correctly separated in the schema); making `inventory_items` the commercial product master (it already correctly owns only quantity/state, with Catalog owning commercial identity via the `assign_or_replace_catalog_inventory_link` relationship).

---

## 5. Native Conversation / WhatsApp Separation Verdict — `CONFIRM`

The Founder's amendment is technically clean, and — importantly — it is not a novel architectural request. It is already the mandated shape under standing governance:

- **Source 12 §10 (Single Implementation Rule):** "Core capabilities shall have one implementation" — One Conversation Engine, One Business Memory, One Permission Engine, One Reminder Engine, One Notification Engine.
- **Source 12 §4/§5:** "No business workflow shall depend exclusively on WhatsApp"; "Duplicate conversation behaviour between WhatsApp and the Conversation Workspace is rejected."
- **Source 17 Part B, B12 (Channel Independence):** "No core capability shall exist only inside one channel unless Product Truth explicitly requires it."
- **Source 04** (the WhatsApp/API framework) is, on direct reading, already written as a set of channel-agnostic *policies* — Identity Router, Multi-Modal Pipeline, Role Permission System, Ask CFO Engine, cost-protection rules — attached to a webhook example, not architecture that requires those policies to live inside the webhook handler itself. Nothing in Source 04 claims exclusive architectural authority over AI orchestration.

**Concrete boundary definition** (answering instruction §D directly):

> Smart Business can be disconnected from Meta/WhatsApp entirely and remain fully operational, because the kernel — Business Memory (Contract 3), Permission Engine (Contract 21), AI Orchestration (Contract 24), and the native Conversation Workspace (Contract 10) — has no code path that requires a WhatsApp session, webhook, or Meta credential to execute. WhatsApp (Contract 23) is purely a transport/normalization adapter: it converts an inbound Meta webhook payload into the same internal message/intent representation the Conversation Workspace produces, and converts an internal response back into WhatsApp's message format on the way out. It owns webhook signature verification, media/template handling, delivery retries, and channel-specific rate limits — nothing else. Every consequential action still passes through the one shared Business Command Path (input → interpretation → permission → confirmation → deterministic domain command → write → audit), regardless of which channel produced the input.

Because zero Conversation/AI/WhatsApp code exists today (Section 3.6), this separation costs nothing to enforce — there is no legacy coupling to refactor away from, only a discipline to hold during net-new construction. The main engineering risk is not technical feasibility; it is sequencing discipline within `SB-P-1.13`'s internal workstreams (Section 7) to ensure the AI Orchestration/tool-calling layer is built and proven against the native Conversation Workspace *before* a second channel adapter is added, so WhatsApp genuinely reuses rather than reimplements it.

---

## 6. 25-Contract Dependency Graph

Synthesized from the feature contracts, the two `00_` registers, and the final-reconciliation baseline (Document 07), corroborated against current code:

| # | Contract | Implementation state (current, verified) | Hard dependencies |
|---|---|---|---|
| 21 | Permissions/Business Isolation/Role Authority | FOUNDATION EXISTS — WORKFLOW MISSING | none (root dependency for nearly everything else) |
| 22 | Shared Product Foundations | IMPLEMENTED BUT INCOMPLETE | 21 |
| 9 | Human Language Layer | NOT IMPLEMENTED | 21 |
| 10 | Conversation Workspace | NOT IMPLEMENTED | 21, 9, 24, 3 |
| 12/12A | Basic Voice / Voice Plus | NOT IMPLEMENTED | 10, 9, 24 |
| 24 | AI Orchestration & OpenAI Foundation | NOT IMPLEMENTED | 21, 3, 22 |
| 23 | WhatsApp Intelligence & Channel Adapter | NOT IMPLEMENTED | 10, 24, 21, 22, 9, 12, 5 |
| 5 | Universal Document & Receipt Intelligence | FOUNDATION EXISTS — WORKFLOW MISSING | 21, 25, 9 |
| 25 | Document, Media Storage & Retention | NOT IMPLEMENTED | 21 |
| 11 | Smart Reminder & Delegated Automation | NOT IMPLEMENTED | 21, 3 |
| 3 | Ledger & Business Memory | IMPLEMENTED BUT INCOMPLETE | 21 (for role-scoped memory), 5, 9 |
| 2 | Ask CFO | NOT IMPLEMENTED | 3, 21, 10, 9, 11, 4 |
| 4 | Daily Intelligence Rhythm | NOT IMPLEMENTED | 3, 21, 11, 9 |
| 14 | Smart Credit Awareness | NOT IMPLEMENTED | 3, 21, 11, 15 |
| 15 | Payment Verification & Bank Reconciliation | NOT IMPLEMENTED | 3, 21 |
| 7 | Stock/Supplier/Reorder Intelligence | IMPLEMENTED BUT INCOMPLETE | Product & Price Master (Sec. 4), 3, 21, 11, 5 |
| 13 | POS/Counter Intelligence & Closing Cash | NOT IMPLEMENTED | Product & Price Master, 7, 21, 9 |
| 17 | Operational Dashboard & Manager Workspace | IMPLEMENTED BUT INCOMPLETE | 3, 21, 10, 2, 4, 5, 11, 7, 13 |
| 6 | Staff & HR Assistant | NOT IMPLEMENTED | 21, 9, 10, 5, 11 |
| 16 | Compliance Shield | NOT IMPLEMENTED | 5, 25, 11, 21 |
| 1 | Smart Order & Delivery Assistant | NOT IMPLEMENTED | 21, 9, 10, 23, 5, 15, 7 |
| 18 | Subscription/Payment/Account Lifecycle | NOT IMPLEMENTED | 21 |
| 8 | Support Automation | NOT IMPLEMENTED | 9, 10, 21 |
| 19 | Super Admin & Platform Stewardship | HISTORICAL/PLACEHOLDER ONLY | 21, 18, 8 |
| 20 | Onboarding & First Experience | FOUNDATION EXISTS — WORKFLOW MISSING | 21, 9, 10, 5, 3, 2, 11, 4, 18, 8 |

**Reading:** three sequential "waves" are unavoidable — (A) Permissions/21 first, unconditionally; (B) Conversation/Language/Voice/AI-Orchestration/WhatsApp (9, 10, 12, 24, 23) must converge together as one architectural unit or risk duplicate brains; (C) UDI/Media/Reminder (5, 25, 11) can start once 21 and enough of 24 exist to gate document interpretation. Everything else — Ledger completion, Payment, Credit, Daily Intelligence/Ask CFO, Manager Operations, People/Compliance/Order, Platform — is a **consumer** of Waves A–C, not a peer of them. This matches Mission Control's proposed ordering closely; the disagreement in Section 7 is about mission *granularity*, not *sequence*.

---

## 7. Proposed Mission-by-Mission Review

### `SB-P-1.12 — Authority, Identity & Product Surface Foundation` — `CONFIRM WITH CHANGE`
Correctly first: every evidence source (feature-contract dependency reading, both `00_` registers, the final-reconciliation baseline) independently converges on Permissions/21 as the mandatory first mission, and Document 07 itself calls it "the first major shared Product Mission."

**Changes required:**
- Fold in the anon-privilege closure for `businesses`, `transactions`, `transaction_correction_events` (Section 1, item 2) — this is a live security residual, not new scope; fixing it here is the natural home since this mission is already touching RLS/grants for the same reason.
- Fold in the CI build/lint/test gate (Section 1, item 2) — establishing automated verification before the Authority Kernel starts governing every subsequent mission's schema/permission changes is the cheapest point at which to do this.
- Add the Founder Product Decision Record for Product & Price Master (Section 4) as an explicit Founder Discovery item in this mission's Blueprint Stage 3 — it is squarely "Product Surface Foundation" work already in scope by name.
- **Structure as two internal workstreams within one Mission ID and one Blueprint/EIS**, per Mission Control's Instruction 2: (a) the Owner/Manager/Employee/Supplier/Customer/Delivery-staff role model and permission-scoped RLS expansion, generalizing the Catalog executor-role pattern; (b) `anon`-privilege remediation, the Product & Price Master Founder Product Decision Record, and Catalog nav demotion. Each workstream carries its own independent evidence gate, but `SB-P-1.12` has a single Blueprint, a single locked EIS, and a single mission acceptance condition. **`SB-P-1.12` cannot be accepted without both workstreams' gates passing — including full proof of the `anon`-privilege remediation and the automated CI gate — but this document does not authorize `SB-P-1.12` to begin.**

### `SB-P-1.13 — Native Conversation & AI Intelligence Foundation` — `CONFIRM WITH CHANGE`
Correctly second; this is the contract cluster every evidence source calls "Wave B" and treats as inseparable (must converge on one shared engine, not one per feature).

**Changes required:** this mission advances four contracts (9 Human Language, 10 Conversation Workspace, 12 Basic Voice, 24 AI Orchestration) that are each net-new (Section 3.6 — zero existing code) and, per Mission Control's Instruction 2, must remain one Mission ID rather than split into additional missions. **Recommend structuring the Blueprint/EIS around three sequential internal workstreams, each with its own evidence gate:** (a) AI Orchestration core (Contract 24: intent classification, permission-aware context retrieval, typed tool-calling contract, confirmation/clarification state machine) with no UI, proven against the *existing* Catalog/Inventory/Transactions RPCs as its first tool targets (see Section 11); (b) native Conversation Workspace UI + Human Language Layer (9, 10), consuming workstream (a), and including the **shared Support Automation foundation** — the FAQ-before-AI, zero-compute routing/cost-protection pattern (Contract 8, Source 04 §8) — designed inline with the message-handling pipeline rather than retrofitted later (see the `SB-P-1.19` entry below); (c) Basic Voice (12), consuming workstream (b). This ordering also makes the Founder's WhatsApp-independence acceptance test ("prove Smart Business works without Meta") checkable at the end of workstream (b), while giving the overall mission a single, clear acceptance condition spanning all three workstreams.

### `SB-P-1.14 — Business Memory, Documents & Durable Media` — `CONFIRM WITH CHANGE`
Correctly third in dependency order.

**Changes required:**
- The mission must explicitly generalize this repository's own proven `catalog-import.ts` preview→commit identity-binding pattern (Section 3.4) as UDI's reference architecture, rather than treating the non-canonical Lovable opening-stock import as a starting point. If any UX/parsing ideas from that Lovable code are reused, Document 06's 12-point promotion gate applies in full (server-verifiable target binding, live eligibility revalidation, permission-scoped roles, no whole-file reverse-sync from Lovable into canonical).
- Cloudflare R2 is genuinely new infrastructure — no R2 client, credentials, or environment variables exist anywhere in the current codebase. This sub-scope should pass through whatever external-environment activation gate Source 10 (Environment Activation Manual, not in this review's reading set but referenced by Source 09) requires before R2 credentials are provisioned, the same way the AWS Lambda parser path did (Section 3.4, `aws-gc38r-parser-deploy.yml`).

### `SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO` — `CONFIRM`
Correct grouping and correct dependency order (needs the Automation kernel, Business Memory, and enough of AI Orchestration from 1.13/1.14 first). Ask CFO's read-only constraint is independently confirmed by three governance sources (Source 02 §6, Source 04 §13, Source 05 §10 — all list the identical blocked-verb set: DROP/DELETE/TRUNCATE/ALTER/UPDATE/INSERT), so this is one of the best-grounded contracts in the entire plan.

**One flag, non-blocking:** Source 02 §7 still names the historical "Morning Pulse 06:00 IST / Attendance Review 09:15 IST / Closing Review 22:00 IST" schedule, while current Product Truth (Source 11, Contract 4) fixes 7:00 AM / 10:30 AM / 10:00 PM. Document 08 already flags analogous stale-wording cases as `SOURCE CLARIFICATION RECOMMENDED` rather than blocking issues — recommend the same disposition here rather than treating it as a mission blocker.

### `SB-P-1.16 — Financial Integrity & Credit` — `CONFIRM`
Correct dependency order. The current `transactions` table's type constraint permits only `sale`/`purchase` (per the final-reconciliation audit and unchanged since); extending to income/expense/credit/repayment is an **additive** migration (widen a CHECK constraint / extend an enum), not a destructive rebuild, and the existing `transaction_correction_events` audit pattern should be extended rather than replaced, consistent with Contract 3's explicit "Implementation Dependency Rule."

### `SB-P-1.17 — Manager Operations` — `CONFIRM WITH CHANGE`
Correct to reuse the strong existing Inventory+Catalog foundation for Stock/Supplier/Reorder completion.

**Changes required:** any opening-stock bulk-import work built here must (a) reuse UDI from `SB-P-1.14` rather than building a third parser stack (the repository already has two — in-process and Lambda-offload, Section 3.4 — a third specifically for opening stock would violate Contract 5's explicit "no duplicate parser systems per feature" rule), and (b) pass Document 06's 12-point promotion gate if it draws on the non-canonical Lovable opening-stock code at all. POS integration (Contract 13) is entirely net-new (no `pos_integrations` table or code exists yet, though Source 02 §3 names it as an approved foundation table) and should be scoped strictly as a standard-bridge adapter, per the repeated governance prohibition on custom POS modifications inside the core (Source 01 §11, Source 02 §3, Source 12 §76).

### `SB-P-1.18 — Controlled Business Add-ons` — `CONFIRM WITH CHANGE`
The three-workstream, separately-gated structure is sound and, per Mission Control's Instruction 2, should remain **one Mission ID** with three internal, independently feature-flaggable workstreams (Order & Delivery, Staff/HR, Compliance Shield), each with its own evidence gate inside one Blueprint/EIS — not three separate Mission IDs. This still satisfies Source 18's actor-separation and independent-verification requirements, since each workstream's evidence can be independently classified PASS/FAIL/FOLLOW-UP without requiring a separate Mission ID.

**Material flag — pilot-readiness sequencing conflict, not a proposal defect but something Mission Control must see explicitly:** Source 09's Master Roadmap Command has an explicit, named **"Pilot Entry Additional Requirements"** checklist that must be verified before Phase 6 (the first 10 pilot merchants) regardless of mission numbering: Staff/HR geofence attendance, Smart Order & Delivery Assistant, Daily Intelligence Rhythm, Human Language Layer, Universal Document Intelligence, the 100+ FAQ Support Foundation, the Speed Promise, and Security/permissions. As currently sequenced, Staff/HR and Order & Delivery only complete at mission #7 of 9 (`SB-P-1.18`) — meaning **pilot merchants cannot be onboarded, under existing governance, until `SB-P-1.18` is done, regardless of how "ready" earlier missions might look.** This is not a reason to reject the sequence — the dependency order is otherwise correct — but Mission Control should record this explicitly as the real pilot-readiness gate rather than let it be discovered late.

### `SB-P-1.19 — Activation, Lifecycle & Platform Stewardship` — `CONFIRM WITH CHANGE`
The grouping (Subscription/Lifecycle, Support Automation, Super Admin, Onboarding, Voice Plus) is coherent as a platform-operations bundle.

**Change required (reconciled per Mission Control's Instruction 2, §5):** Support Automation (Contract 8) is advanced across two missions, not duplicated. `SB-P-1.13` advances the **shared Support Automation foundation** needed inside the native message-handling pipeline — specifically the FAQ-before-AI, zero-compute routing/cost-protection pattern (Source 04 §8) — because that pattern must be designed inline with AI Orchestration from the start, not retrofitted afterward. `SB-P-1.19` then **completes** the full Contract 8 acceptance criteria: the broader escalation path, human-handoff ticketing, and support-operating surfaces that depend on platform capabilities (Subscription/Lifecycle, Super Admin) not available until this mission. This is cross-mission advancement of one confirmed contract; the Global Product Completion Register should show Contract 8 as partially advanced after `SB-P-1.13` and only fully accepted after `SB-P-1.19`'s own acceptance evidence — never marked complete on `SB-P-1.13`'s evidence alone. The remainder of `SB-P-1.19` (Subscription/Lifecycle, Super Admin, Onboarding, Voice Plus) is correctly sequenced last, since it depends on nearly everything else.

### `SB-P-1.20 — WhatsApp Channel Integration` — `CONFIRM`
Correctly last. This is the direct, correct operationalization of the Founder's amendment (Section 5) and requires no changes — as a thin adapter over an already-complete kernel, it is the one mission in this plan that is naturally sized to a single Source 18 Mission ID (its scope genuinely is one contract, Contract 23).

---

## 8. Exact Reuse / Technical-Debt Map

| Area | Classification | Basis |
|---|---|---|
| `businesses` tenant-identity root + owner-scoped RLS pattern | **PRESERVE** | Sound, simple, correctly scoped; extend for Manager/Employee rather than replace |
| `transactions` + `transaction_correction_events` (in-place correction, full audit) | **PRESERVE + EVOLVE** | Extend type constraint for income/expense/credit/repayment (Contract 3); do not touch the correction-audit mechanism, it already satisfies Contract 3's audit-preservation rule |
| `inventory_items` / `inventory_movements` append-only ledger + `create_inventory_movement()` | **PRESERVE** | Gold-standard idempotency/concurrency engineering (advisory locks, payload-fingerprint dedup, a real planner-folding defect found and fixed via a 62-test suite); this is the reference pattern for Contract 11's automation writes and Contract 15's reconciliation writes |
| Catalog executor-role RLS + 19-command governed surface | **PRESERVE** | The strongest security pattern in the repository; generalize into the Authority Kernel (`SB-P-1.12`), do not treat as Catalog-specific |
| `/catalog` top-level nav placement | **PRESERVE + EVOLVE (demote)** | See Section 4 — backend preserved unconditionally, nav placement changes pending a lightweight Founder decision |
| In-process Catalog bulk-import (`catalog-import.ts`, preview/commit binding) | **PRESERVE + EVOLVE** | Reuse its identity-binding pattern as UDI's reference architecture (Section 3.4, Section 12) |
| Lambda-offload parser path (`lambda/parser/`, `parser-lease.ts`) | **NARROW REBASE REQUIRED** | Real, deployed to non-prod, but unwired to any UI; needs a security review + UI integration decision before merchant-facing use |
| Non-canonical Lovable opening-stock import code | **REUSABLE ENGINEERING EVIDENCE ONLY** | Per Document 06's own final classification — `PRESERVE AS REUSABLE ENGINEERING EVIDENCE`, canonical status `NOT IMPLEMENTED CANONICALLY`, `REJECT — DO NOT PROMOTE AS-IS` |
| `20260727000000_reconcile_default_grants.sql` blanket `anon`/`PUBLIC` grants | **REJECT (residual)** | Root cause of an over-broad privilege grant; partially reverted for Inventory only; must be fully reverted for `businesses`/`transactions`/`transaction_correction_events` in `SB-P-1.12` |
| Mission-history governance process itself (Source 18 24-stage lifecycle, evidence-package discipline, independent verification) | **PRESERVE** | Proven twice (`SB-P-1.10`, `SB-P-1.11`) to catch real defects before production acceptance; apply it faithfully to every future mission rather than compressing it for speed |

---

## 9. Schema/API/Service Evolution Plan by Proposed Mission

Marked `[design work required]` wherever repository evidence is insufficient to specify exact implementation, per instruction §F.

- **`SB-P-1.12`:** new role/permission tables (Owner/Manager/Employee/Supplier/Customer/Delivery-staff — exact shape `[design work required]`, but should follow the Catalog executor-role precedent); RLS policy expansion across `businesses`, `transactions`, `inventory_items`/`inventory_movements`; `anon` grant remediation matching migration `21`'s pattern for the three unremediated tables; no new UI routes beyond nav restructuring.
- **`SB-P-1.13`:** new tables for conversation sessions/messages and a typed tool-call/action-proposal log `[design work required — exact schema unspecified anywhere in current evidence]`; a governed tool-calling service that wraps existing `src/integrations/supabase/{catalog,inventory,transactions}.ts` functions (Section 11); new authenticated route(s) for the Conversation Workspace UI; a language-preference field, likely on `businesses`/a future per-user table.
- **`SB-P-1.14`:** UDI document/interpretation-state tables generalizing `catalog_import_batches`/`catalog_import_rows`'s status-machine pattern; R2 client integration + Supabase-side object-metadata/ownership/lifecycle tables per Contract 25's storage-boundary rule; Receipt Cabinet UI surface `[design work required]`.
- **`SB-P-1.15`:** a shared `scheduled_jobs`/reminder table (Source 02 §3 already names `scheduled_reminders` and `automation_rules` as approved foundation tables not yet built — reuse those names rather than inventing new ones); `pg_cron`-driven or equivalent scheduler wiring; Ask CFO as a read-only query service layered on the AI Orchestration tool-calling contract from `SB-P-1.13`'s AI Orchestration workstream, with the SELECT-only DB boundary enforced identically to Sources 02/04/05.
- **`SB-P-1.16`:** additive widening of the `transactions` type constraint/enum; new `customer_credits`/repayment tables (Source 02 §3 already names `customer_credits` as an approved foundation table); payment-evidence/reconciliation-state tables `[design work required]`.
- **`SB-P-1.17`:** `suppliers` table (already named in Source 02 §3, not yet built); reorder-rule tables extending the delegated-automation model from `1.15`; `pos_integrations` table (already named in Source 02 §3); no changes to existing Catalog/Inventory schema beyond additive links.
- **`SB-P-1.18`:** per-workstream — Order & Delivery needs customer/order/delivery-assignment tables `[design work required]`; Staff/HR needs `employees`/`attendance_logs`/`attendance_correction_requests`/`payroll_reports` (all already named in Source 02 §3, none yet built); Compliance Shield needs compliance-record tables reusing UDI's document-interpretation pipeline from `1.14`.
- **`SB-P-1.19`:** subscription/entitlement tables `[design work required]`; support-ticket schema for the escalation path beyond the FAQ-fortress (which should move to `1.13`, Section 7); Super Admin cockpit is presentation-layer over existing/new telemetry, not new domain schema.
- **`SB-P-1.20`:** no new domain schema — purely webhook/identity-mapping/media-normalization tables scoped to the adapter itself, explicitly forbidden from holding business logic per Contract 23's dependency list.

---

## 10. Security Architecture

- **Tenant isolation today:** sound for the four implemented domains — every table traces RLS back to `businesses.owner_id = auth.uid()`, directly or via `catalog_internal.resolve_owner_business()`. The Catalog domain's executor-role-per-command pattern (Section 3.2) is materially stronger than the simple owner-scoped policies used elsewhere and should become the **template**, not stay Catalog-specific, when `SB-P-1.12` builds the Manager/Employee/Supplier/Customer/Delivery-staff model.
- **Immediate, live remediation required (not new scope):** the `anon`-role over-grant residual on `businesses`/`transactions`/`transaction_correction_events` (Section 1, Section 8) must close in `SB-P-1.12` before any new authority surface is layered on top of an already-known gap.
- **AI tool/action execution boundary:** Source 05 §11 is unambiguous — "AI executes stored owner permission. AI does not create permission." Every typed tool call the AI Orchestration layer proposes must resolve to an existing, stored, owner-originated permission grant or an explicit confirmation step; the orchestrator must never be the origin of authority. Concretely (Section 11), this is enforced for free if the tool-calling layer is a thin wrapper around the *existing* governed RPCs, which already carry RLS/executor-role enforcement independent of who calls them.
- **Webhook validation:** Contract 23 and Source 04 §2 require Meta signature verification on every inbound WhatsApp payload; this is entirely net-new (no webhook exists today) and should be built once, correctly, rather than retrofitted.
- **Document/media retrieval authorization:** per Contract 25's explicit boundary, R2 must never itself be the permission authority — every retrieval must be authorized through the Supabase control-plane path, never via a bare R2/provider URL.
- **Auditability:** the `transaction_correction_events` and `catalog_audit_events` patterns (full original+updated values, actor, timestamp, reason) already satisfy Source 12 §12's data-integrity requirements and should be the literal template extended to every new domain, not reinvented.
- **What should block rapid expansion until corrected:** the anon-grant residual (concrete, live); the absence of any automated PR-time security/lint/test gate (Section 3.5); and the fact that no live cross-tenant RLS probe has ever actually been run against production (flagged as open verification debt `F23-01` in the mission-history record) — this should be closed as a generic, reusable test fixture in `SB-P-1.12`, not deferred indefinitely.

---

## 11. AI Orchestration Architecture

Contract 24's canonical flow — Channel/Input → Identity → Permission/Entitlement Context → Modality Processing → Intent Classification → Context Retrieval → Reasoning/Extraction → Clarification/Confirmation → Governed Tool/Domain Service → Business Memory → Response — is well specified at the product-definition level and should be adopted as written. The concrete engineering recommendation this review adds, grounded directly in what already exists in this repository:

**The typed tool/action layer should be a thin, additive wrapper around the existing governed RPC surface (`create_catalog_product`, `create_inventory_movement`, `correct_transaction`, and their siblings), not a new write path.** Because these RPCs already enforce tenant isolation, executor-role scoping, idempotency, and audit logging independent of the caller, wrapping them as AI-callable tools means the AI Orchestration layer inherits the entire existing security boundary for free — it cannot bypass RLS or invent a write path a human user could not also reach through the UI. This directly operationalizes Source 05 §11 ("AI executes stored owner permission, AI does not create permission") as a structural guarantee rather than a policy statement to be separately re-verified per tool. As new domains (Reminder, Credit, Order & Delivery, etc.) are built, their own governed RPCs should be designed from the start to be equally callable by both the UI and the AI tool layer — one command surface, two callers.

The AI Orchestration workstream within `SB-P-1.13` (Section 7) should therefore be scoped as: intent classification, permission-context propagation, the clarification/confirmation state machine, and a typed tool-registry mapping intents to existing RPCs — explicitly *not* as a new set of AI-only database functions.

---

## 12. UDI / R2 / Media Architecture

As established in Section 3.4, the correct reference architecture already exists in this repository: `catalog-import.ts`'s preview-persists-a-key / commit-reuses-the-same-key pattern, combined with its atomic-claim-first commit step. Generalized for UDI (Contract 5):

- **Interpret:** any document (receipt, invoice, roster, compliance doc) is parsed and the interpretation result is persisted immediately with a generated identity key — never held only in memory between preview and confirm.
- **Preview:** the merchant reviews the interpretation; nothing is written to business tables yet (already the discipline in both existing Catalog import paths).
- **Confirm:** commit reuses the exact persisted key from interpret, and — this is the lesson from Document 06's audited defect in the *non-canonical* Lovable code — commit must prove the target it is about to write to is still the same target the merchant reviewed, not silently re-resolve against current state and accept whatever now matches.
- **Storage boundary (Contract 25):** Supabase remains authoritative for ownership/permissions/metadata/lifecycle; Cloudflare R2 holds binaries only; clients retrieve exclusively through the governed Supabase-authorized path, never a bare R2 URL. This is genuinely new infrastructure (Section 7, `SB-P-1.14`) and should pass through whatever environment-activation gate governs new external credentials, matching the precedent already set for AWS/Lambda.

---

## 13. Automation Architecture

Source 02 §3 already names `scheduled_reminders` and `automation_rules` as approved foundation tables, and its automation-architecture section (§7) already specifies `pg_cron` + secure backend endpoints as the intended mechanism — this should be built once, in `SB-P-1.15`, as a single reusable scheduler/delegation service (reminder due-dates, Daily Intelligence's three fixed times, Compliance renewal cadences, Credit follow-ups, reorder continuations, Staff/HR reminders, Order/Delivery time-based steps), consumed by every later feature rather than each feature standing up its own cron job. Every automation-rule row must, per Source 02 §3 and Contract 11's "trigger is not authority" rule, carry an explicit `approval_mode` (manual/pre-approved) tracing back to a stored owner delegation — never an implicit default to autonomous execution.

---

## 14. Migration / Compatibility / Rollback Plan

- **No destructive schema migration is required by any of the nine proposed missions based on current evidence.** Every identified schema change (Sections 8–9) is additive: new tables, new enum values, a widened CHECK constraint on `transactions`, new columns. The Catalog demotion (Section 4) requires zero schema migration at all.
- **Standing operational risk to close first, not discover later:** the canonical repo (`smart-business`) and the actual production delivery repo (`starter-supab-shell`) are different repositories that must be kept manually synchronized (Section 2). `SB-OPS-PROD-SYNC-1.0` already had to recover from one silent divergence. Recommend Mission Control explicitly decide, before `SB-P-1.12` schema work begins, either (a) a documented, repeatable sync procedure invoked at the end of every future mission, or (b) collapsing the two repositories into one — this review does not have enough evidence to recommend which, and marks it `[Founder/Mission Control decision required]`.
- **Unresolved verification debt that should close opportunistically, not accumulate:** whether `SB-P-1.10`'s idempotency-fix migration (`20260724170000_...sql`) was ever confirmed applied to the *current* production Supabase project (`gysgzasfcjvtrgaigfyn`) — it was verified only against the former test project at the time, per the mission-history record. This is a read-only presence check (`supabase migration list` against production) and should be closed early in `SB-P-1.12` for near-zero cost.
- **Rollback:** every migration to date has followed a consistent, auditable pattern (narrow `ALTER`/`CREATE OR REPLACE`, precondition-guarded `DO` blocks for data repairs, sequential numbered files) that should continue; no future mission in this plan requires an irreversible schema change.

---

## 15. Test / Verification / Evidence Plan

- **Reuse, don't reinvent:** the existing Vitest-against-a-real-isolated-Supabase-project pattern (28 files, `tests/{catalog-import,inventory,parser-lease}/`) is genuinely strong for RLS/tenant-isolation/idempotency/concurrency correctness and should be the template for every new domain's test suite.
- **Close the CI gap first (Section 1, item 2):** add a workflow that runs `npm run build`, `npm run lint`, and the Vitest suite automatically on every pull request, before `SB-P-1.12` schema/RLS work begins — this is cheap, blocks nothing, and directly de-risks the eight missions that follow.
- **Close open verification debt as a shared fixture, not per-feature:** the mission-history record lists five specific open items (`F23-01` through `F23-05`), of which the most consequential is that no live multi-tenant/cross-business RLS probe has ever actually been run against production. Build this once as a reusable test fixture in `SB-P-1.12` (it will need to exist anyway once Manager/Employee roles multiply the number of cross-tenant scenarios) rather than letting each future mission re-derive it.
- **Align acceptance evidence to Source 12 Parts 2–3**, which already specify, in detail, what counts as evidence (and what explicitly does not — "visual resemblance," "absence of obvious errors," and "simulated success" are named as insufficient) and the domain-specific checklists (functional, permission, security, language, document-intelligence, etc.) each future mission's Completion Report must satisfy. No new evidence framework needs to be invented; Source 12 already specifies one in full.
- **No e2e browser-driven suite exists.** Given that `SB-P-1.13` onward introduces genuinely new user-facing surfaces (Conversation Workspace, Voice) where Vitest-against-Supabase alone cannot verify UI behavior, recommend evaluating Playwright as part of `SB-P-1.13`'s own evidence plan — `[design work required, insufficient evidence to prescribe a specific tool decision now]`.

---

## 16. Observability / Performance / Scale Plan

No monitoring, metrics, or tracing code was found anywhere in the current repository. This is a known, explicitly-recorded gap, not an oversight this review is newly discovering: `SB-P-1.10`'s own completion record lists "observability/metrics pipeline" as a legitimate out-of-scope follow-up item. Given nine more missions of increasing complexity, recommend `SB-P-1.12` or `SB-P-1.13` stand up a minimal, reusable observability baseline (structured logging + basic latency/error metrics on the RPC layer) before AI-latency/cost/token tracking (Contract 24) and document-processing accuracy tracking (Contract 5) are layered on top of nothing. Beyond that baseline recommendation, this review does not have enough evidence to specify exact tooling or dashboards — `[design work required]` for the full observability plan across AI cost/latency, scheduled-job success/lateness, storage growth, and channel-delivery health named in the proposal's §10.

---

## 17. Critical Path and Parallelization

- **Hard blocker:** `SB-P-1.12` (Authority/Identity) blocks everything else — no exceptions, confirmed by every evidence source independently.
- **`SB-P-1.13`'s internal workstreams have partial parallelism:** the AI Orchestration core workstream and the Human-Language groundwork for the Conversation Workspace workstream can proceed somewhat concurrently, but the Conversation Workspace UI genuinely needs the AI Orchestration workstream's tool-calling contract to exist first; the Basic Voice workstream strictly follows the Conversation Workspace workstream.
- **`SB-P-1.14` (UDI/Media) can start once `SB-P-1.12` is done and `SB-P-1.13`'s AI Orchestration workstream's permission-context/tool-calling contract exists**, without waiting for the full Conversation UI — UDI's interpret/preview/confirm flow does not itself require a chat interface.
- **Source 09's explicit "Meta Waiting Parallel Build Rule"** (and the build proposal's own §9) already sanctions parallel execution of internal, non-WhatsApp-launch-blocking work — this supports running `SB-P-1.14` through `SB-P-1.18`'s workstreams with genuine overlap, provided (per Source 18 §3 and the proposal's own §9) conflicting authority/schema changes are sequenced, not raced. In practice: any two missions touching the *same* table's RLS or the *same* executor-role set should not run concurrently; missions touching disjoint schema (e.g., Compliance's document tables vs. Credit's repayment tables) can.
- **The true pilot-readiness critical path**, per Section 7's `SB-P-1.18` flag, runs through all of `SB-P-1.12` → `1.13` → `1.14` → `1.15` → `1.18` (Order & Delivery + Staff/HR specifically) before Source 09's Pilot Entry checklist is satisfiable — this is longer than the proposal's mission numbering alone would suggest, and should be stated plainly to Mission Control/Founder rather than left implicit.

---

## 18. Founder Decisions Required

**Carried forward, unchanged, from the historical mission's own unresolved-decision ledger** (`final-reconciliation/08_Current_Source_Reconciliation_Ledger.md` §3/§4.3) — none of these are settled by this review, and none should be guessed at during implementation:
1. Free-trial policy.
2. Exact pricing for Voice Plus, Staff/HR, Smart Stock, and Smart Order & Delivery add-ons.
3. Long-term data retention/deletion duration after cancellation or non-payment.
4. Employee KYC/national-ID necessity, fields, and legal basis.
5. Broader wholesaler/marketplace expansion direction.
6. Third-party lending/underwriting ecosystem direction.

**New items this review identifies, requiring Founder or Mission Control decision before or during `SB-P-1.12`:**
7. **A Founder Product Decision Record authorizing Product & Price Master as the shared-foundation architectural treatment for Catalog** (Section 4) — the underlying engineering judgment is not in dispute, but the record itself is a mission-planning decision, not a Source 11 textual amendment; whether Source 11's own wording should separately be clarified or amended is a distinct governance question this review does not resolve.
8. **Canonical-repo vs. production-delivery-repo divergence resolution** (Section 14) — whether to formalize a repeatable sync procedure or collapse the two repositories; this review does not have sufficient evidence to recommend one over the other.
9. **Source packaging-drift cleanup** (Voice add-on wording in Source 05/03 vs. Source 11; Staff/HR tier wording in Source 07; the stale 06:00/09:15 Daily Intelligence schedule in Source 02 §7) — Document 08 already flags these as `SOURCE CLARIFICATION RECOMMENDED`; recommend a small, dedicated source-clarification pass (not a new mission) before or during `SB-P-1.15`/`SB-P-1.18`, so builders are not working from contradicted source text mid-mission.
10. **Explicit acknowledgment of the true pilot-readiness critical path** (Section 17) — that the first 10 pilot merchants cannot onboard, under existing Source 09 governance, until Staff/HR and Order & Delivery (currently `SB-P-1.18`) are complete, regardless of how the missions are renumbered.

---

## 19. Recommended Final Mission Sequence

This review recommends **confirming Mission Control's nine Product Mission identities and their ordering exactly as proposed, unchanged.** All decomposition below is internal workstream/stage/gate structuring for safety and measurability within each Mission ID's own Blueprint and EIS — it is not, and must not be read as, additional Product Mission IDs (Reconciliation 1, Section 1, Section 7).

1. `SB-P-1.12` — Authority, Identity & Product Surface Foundation. Internal workstreams: (a) Owner/Manager/Employee/Supplier/Customer/Delivery-staff role model, generalizing the Catalog executor-role RLS pattern; (b) `anon`-privilege remediation, automated PR build/lint/test CI, the Product & Price Master Founder Product Decision Record, and Catalog nav demotion. Mission acceptance requires both workstreams' evidence gates to pass, including full proof of (b).
2. `SB-P-1.13` — Native Conversation & AI Intelligence Foundation. Internal workstreams: (a) AI Orchestration core (intent classification, permission-context propagation, typed tool registry wrapping existing governed RPCs; no UI); (b) native Conversation Workspace UI + Human Language Layer, including the shared Support Automation foundation (FAQ-before-AI, zero-compute routing/cost protection) within the message pipeline; (c) Basic Voice. Mission acceptance includes the Founder's WhatsApp-independence acceptance test, checkable at the end of workstream (b).
3. `SB-P-1.14` — Business Memory, Documents & Durable Media (as proposed, generalizing the `catalog-import.ts` pattern, Section 12).
4. `SB-P-1.15` — Reminder, Daily Intelligence & Ask CFO (as proposed).
5. `SB-P-1.16` — Financial Integrity & Credit (as proposed).
6. `SB-P-1.17` — Manager Operations: Stock/Supplier/Reorder completion + POS bridge + Dashboard maturity (as proposed).
7. `SB-P-1.18` — Controlled Business Add-ons. Internal, separately-gated, independently feature-flaggable workstreams: Order & Delivery / Staff & HR / Compliance Shield, each with its own evidence gate inside one Blueprint/EIS.
8. `SB-P-1.19` — Activation, Lifecycle & Platform Stewardship: Subscription/Lifecycle, Super Admin, Onboarding, Voice Plus, and **completion** of the full Support Automation contract (escalation/support-operating surfaces), building on the foundation workstream advanced in `SB-P-1.13`.
9. `SB-P-1.20` — WhatsApp Channel Integration (as proposed, unchanged).

No mission is added, removed, split, or renumbered from Mission Control's proposal. Support Automation (Contract 8) is advanced across two missions as a single confirmed contract, not duplicated (Section 7, Reconciliation 3).

---

## 20. Final Confirm / Change / Reject Matrix

| Proposal Element | Verdict |
|---|---|
| Shared-foundation architectural strategy (Authority Kernel, Business Command Path, Business Memory, Conversation/AI Kernel, Automation Kernel, thin channel adapters) | `CONFIRM` |
| Catalog / Product & Price Master diagnosis and remedy | `CONFIRM WITH CHANGE` — remedy is correct; requires a Founder Product Decision Record (not a Source 11 amendment) because Catalog has zero prior textual authorization in Source 11 (Section 4) |
| Founder amendment: native Conversation independent of WhatsApp | `CONFIRM` — already required by Sources 12 §4/§5 and 17 B12, not a novel request (Section 5) |
| Nine-mission identity and ordering | `CONFIRM` |
| Nine-mission granularity (one Mission ID per bundled mission) | `CONFIRM (reconciled)` — nine Product Mission identities retained per the Founder's explicit minimum-missions direction; Source 18 was re-read directly and states no numeric contract-per-mission-ID limit; internal decomposition uses workstream/stage/gate terminology only, never additional Mission IDs (Section 1, Section 7, Section 19) |
| `SB-P-1.12` | `CONFIRM WITH CHANGE` — structure as two internal workstreams (role/permission model; security remediation + Product Master decision + nav demotion); anon-grant closure and CI gate are mandatory pre-acceptance gates, not new scope |
| `SB-P-1.13` | `CONFIRM WITH CHANGE` — structure as three internal workstreams (AI Orchestration core; Conversation Workspace/Human Language incl. the Support Automation FAQ foundation; Basic Voice), one Mission ID |
| `SB-P-1.14` | `CONFIRM WITH CHANGE` — generalize canonical `catalog-import.ts` pattern, not the non-canonical Lovable code; R2 needs an environment-activation gate |
| `SB-P-1.15` | `CONFIRM` |
| `SB-P-1.16` | `CONFIRM` |
| `SB-P-1.17` | `CONFIRM WITH CHANGE` — must not build a third parser stack; POS strictly standard-bridge only |
| `SB-P-1.18` | `CONFIRM WITH CHANGE` — structure as three internal, separately-gated workstreams within one Mission ID; flag pilot-readiness sequencing consequence explicitly |
| `SB-P-1.19` | `CONFIRM WITH CHANGE` — completes the full Support Automation contract (escalation/support-operating surfaces), building on the foundation workstream advanced in `SB-P-1.13`; cross-mission advancement of one contract, not a relocation |
| `SB-P-1.20` | `CONFIRM` — no changes; naturally the best-sized mission in the plan |
| "What Must Not Happen" list (proposal §13) | `CONFIRM` — consistent with all governance and code evidence reviewed |
| Speed strategy (proposal §9: reuse, vertical slices, feature flags, sequential authority migrations) | `CONFIRM` |
| Global Product Completion Register rule (proposal §11) | `CONFIRM` — already operating correctly per Document 07's own practice |

**No element of the Founder-accepted proposal is rejected outright.** The corrections above are refinements to granularity, sequencing detail, and two concrete pre-existing gaps (security residual, CI gate) — not disagreements with the underlying architecture.

---

*This document does not authorize implementation. `SB-P-1.12` shall not begin until Mission Control has reviewed this response and the historical mission's closure/archival status has been separately resolved per `instruction.1.md` §16–17. `SB-P-1.12` cannot be accepted without proving the `anon`-privilege remediation and automated PR build/lint/test CI gates described in Section 1 and Section 7. This update was made per `communication/live/instruction.2.md`; no future `SB-P-*` mission has been authorized by this reconciliation.*
