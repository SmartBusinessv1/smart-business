Document: Completion Report

Version: 1.6

Status: DRAFT — updated under mission SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0

Created By: Claude

Updated By: Lovable Builder (Reporting Room 03_Lovable_Builder) — SB-P-1.10-LOVE-CR-1.0 (v1.2), SB-P-1.10-TV-1.0 (v1.3), SB-P-1.10-FIX-DIGEST-1.0 (v1.4); Claude Engineering (Reporting Room 02_Claude_Engineering) — SB-P-1.10-TESTS-1.0 (v1.5), SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 (v1.6)

Reviewed By: Mission Control — reviewed v1.5, defect correction authorized (pending review of this v1.6 correction)

Approval Date: pending Mission Control acceptance

Mission: SB-P-1.10

# SB-P-1.10 — Inventory Foundation — Completion Report

## 1. Mission Metadata

| Field | Value |
| --- | --- |
| Mission ID | SB-P-1.10 |
| Mission Name | Inventory Foundation |
| Completion Report | `docs/implementation/SB-P-1.10/completion-report.md` |
| Repository | SmartBusinessv1/smart-business |
| Reporting Room | 02_Claude_Engineering (implementation) · 03_Lovable_Builder (evidence & report update under SB-P-1.10-LOVE-CR-1.0) |
| Implementation Commit Range | `412d91b..f9fabe4` (13 commits, 2026-07-21). Head implementation commit `f9fabe4` ("Removed auth header duplication"). |
| Pull Request | None. Implementation was delivered as direct commits to `main` via the Lovable build integration. |
| Runtime Environment | Lovable-managed runtime; published at `https://smartbusiness.teamlips.com`; Lovable Cloud backend (project ref `wwgqnshcgbukqczqblsm`). |
| Report Date | 23 July 2026 (v1.2 update); 24 July 2026 (v1.5 update, SB-P-1.10-TESTS-1.0; v1.6 update, SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0) |

## 2. Implementation Summary

- **Implementation objective.** Deliver the Inventory Foundation described by the locked Product Blueprint, EIS, Engineering Contract, and Lovable Build Prompt — inventory items and an append-only stock-movement ledger, with a single shared write path, ledger-derived current stock, permission-aware Owner actions, and RLS-scoped business isolation.
- **Implementation scope completed.**
  - Database: `inventory_items`, `inventory_movements`, and `inventory_movement_idempotency_keys`, with enums (`inventory_movement_type`, `inventory_direction`, `inventory_item_status`), owner-scoped RLS policies on all three tables, append-only enforcement on `inventory_movements` via BEFORE UPDATE / BEFORE DELETE triggers calling `inventory_movements_reject_mutation()`, and immutability enforcement on `inventory_items` via `inventory_items_guard_trg`.
  - Shared write path: `create_inventory_movement()` with idempotency-key conflict detection (payload-fingerprint), per-item `pg_advisory_xact_lock`, opening-stock uniqueness, correction validation (target existence, direction opposition, no correcting a correction, over-compensation cap), archived-item protection, future-dating rejection, in-transaction negative-stock projection, and explicit "allow negative stock" authorization.
  - Read helpers: `preview_inventory_movement()`, `inventory_current_stock_batch(uuid[])`, `inventory_movement_remaining_compensable(uuid)` — all set-based, invoker-side RLS.
  - Application: `src/integrations/supabase/inventory.ts` data-access layer; routes `inventory.tsx` (layout + shared header), `inventory.index.tsx` (list, search, filters, create), and `inventory.$itemId.tsx` (detail, current stock, history, opening stock, adjustments, corrections, archive/reactivate); shared `src/components/authed-header.tsx` extracted from prior duplicated headers in `dashboard.tsx` and `transactions.tsx` and now exposing the Inventory nav link across all authenticated routes.
- **Implementation scope explicitly excluded.** No automated test suite was authored for this mission — see §5. Runtime observability metrics beyond error taxonomy are not captured under this mission — see §7 Follow-ups.
- **Overall summary.** The Inventory Foundation is deployed in the Lovable-managed runtime. The schema, RLS, append-only defence-in-depth, shared write path, ledger-derived reads, and permission-aware UI are all present and verified against the Engineering Contract at the database and code level, and against the Founder-supplied runtime screenshots at the UI level. Remaining Follow-up items are documentation/testing gaps, not implementation defects — see §7.

## 3. Repository Summary

- **Files created.**
  - `supabase/migrations/20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql` (526 lines): all inventory schema, enums, indexes, RLS, triggers, and the four inventory functions.
  - `src/integrations/supabase/inventory.ts`: data-access layer, sole client caller of `create_inventory_movement`.
  - `src/routes/_authenticated/inventory.tsx`, `inventory.index.tsx`, `inventory.$itemId.tsx`: inventory UI.
  - `src/components/authed-header.tsx`: shared workspace header (extracted).
  - `docs/implementation/SB-P-1.10/evidence/README.md`: evidence index (initial placeholder; expanded under this mission).
- **Files modified.**
  - `src/integrations/supabase/types.ts`: generated Supabase types extended for the new tables/functions.
  - `src/routeTree.gen.ts`: regenerated by TanStack Router.
  - `src/routes/_authenticated/dashboard.tsx` and `src/routes/_authenticated/transactions.tsx`: inline `AuthedHeader` replaced with the shared component (surfacing the Inventory nav link).
- **Files intentionally unchanged.** All locked governance documents — Product Blueprint (`docs/phase-1-mission-blueprint/active/SB-P-1.10.md` v1.3), Engineering Implementation Specification (`docs/phase-1-mission-blueprint/implementation/SB-P-1.10-EIS.md` v1.2), Engineering Contract (`docs/implementation/SB-P-1.10/engineering-contract.md` v1.3), Lovable Build Prompt (`docs/implementation/SB-P-1.10/lovable-build-prompt.md` v1.1). The Verification Checklist (v1.1) template is preserved; execution results are captured in an appended Appendix A under this mission per Mission Control authorization.
- **Migrations added.** One — `20260721205714_c3b38f2f-…sql`.
- **Diff-stat (`412d91b..f9fabe4`).** 11 files changed · 2,813 insertions(+) · 228 deletions(-). See `docs/implementation/SB-P-1.10/evidence/repository/commit-range.txt`.

## 4. Verification Checklist Summary

- **Checklist version.** 1.1 (LOCKED template preserved).
- **Checklist execution.** Appendix A executed 23 July 2026 under SB-P-1.10-LOVE-CR-1.0 (Pass 43 · Fail 0 · Follow-up 9). Appendix B executed 23 July 2026 under SB-P-1.10-TV-1.0. Appendix C executed 24 July 2026 under SB-P-1.10-FIX-DIGEST-1.0. Appendix D executed 24 July 2026 under SB-P-1.10-TESTS-1.0 and SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0.
- **Cumulative totals.** Pass: **51** · Fail: **0** · Follow-up: **1**.
- **Overall result.** No release-blocking failures identified. The runtime defect discovered under TV-1.0 (D-19) was resolved under FIX-DIGEST-1.0 and re-verified end-to-end (D-20). The automated test suite gap was closed under SB-P-1.10-TESTS-1.0, which also discovered a genuine idempotency-replay defect; that defect was corrected under SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 and the full suite (62/62) re-verified stable across 6 runs. One Follow-up item remains: the observability metrics pipeline, still legitimately out of scope (not authorised in Phase 1).

## 5. Testing Summary

- **Automated tests executed (SB-P-1.10-TESTS-1.0, 24 July 2026; corrected under SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0, 24 July 2026).** A Vitest test suite exists (`npm run test`, 17 files under `tests/inventory/`, 62 tests, one file per Engineering Contract §16 testing obligation), run against a dedicated test-only Supabase project (`gysgzasfcjvtrgaigfyn` — explicitly not the production Lovable-managed backend) with the `businesses` + SB-P-1.10 inventory migrations applied. **Result: 62 passed, 0 failed**, confirmed stable across 6 consecutive runs (3 full-suite + 3 isolated runs targeting the race-condition-sensitive files).
  - SB-P-1.10-TESTS-1.0 originally found **57 passed, 5 failed** — five independent reproductions of one real, root-caused implementation defect in `create_inventory_movement`'s idempotency-replay logic (an RLS + `SELECT ... FOR UPDATE` interaction that caused the dedup check to never find an existing, matching row). That mission's authorization was test-only; it reported the defect (`evidence/tests/DEFECT-idempotency-select-for-update-rls.md`) rather than patching it, per its own instructions.
  - Mission Control reviewed those results, accepted the test framework and evidence, declined to mark SB-P-1.10-TESTS-1.0 complete or SB-P-1.10 accepted, and authorized a corrective mission.
  - **SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0** root-caused the defect further (PostgreSQL's planner folds the `FOR UPDATE` query to a constant "no rows" result when combined with this table's subquery-based RLS policy — an `EXPLAIN (VERBOSE, COSTS OFF)` capture shows `LockRows -> Result -> One-Time Filter: false`) and corrected it, scoped entirely to `create_inventory_movement()`: the idempotency lookup is now a plain `SELECT`; the existing per-item advisory lock is acquired earlier (before the lookup, not just before the stock projection), fully serializing same-item retries; and the final insert is wrapped with a targeted `unique_violation` handler as a safety net for the one residual cross-item race. No RLS policy, grant, table, or function signature was touched. Migration: `supabase/migrations/20260724170000_6a0f8a74-e7aa-4200-b54b-3fd57a7c9c62.sql`.
  - Full detail, including the refined root cause and re-verification (a direct raw-SQL replay of the exact original reproduction case, now returning the original movement id): `evidence/tests/DEFECT-idempotency-select-for-update-rls.md` ("Resolution" section) and `evidence/tests/test-summary.md`.
  - Full traceability from each Contract §16 obligation to its test(s) and result is in `evidence/tests/traceability-matrix.md` (now 17/17 Pass); raw output in `evidence/tests/test-run-output.txt`.
  - Two further findings (not defects, not in the corrective mission's authorized scope, still worth Mission Control's attention) remain recorded in the traceability matrix: the append-only guarantee for ordinary owners is enforced by RLS's default-deny (no UPDATE/DELETE policy exists) rather than by the `BEFORE UPDATE`/`BEFORE DELETE` triggers actually firing for that caller (the triggers are real and independently confirmed via `service_role`, which bypasses RLS); and a direct insert bypassing `create_inventory_movement()` can evade its negative-stock guard at the database level, though no application code path does this today (confirmed by a static repository check in the same test file).
- **Runtime verification executed under SB-P-1.10-TV-1.0.**
  - **RLS + business isolation.** Executed as the `authenticated` role with `request.jwt.claims.sub` set to (A) the Owner of the Milk business — sees Milk; (B) the Owner of another business — sees zero inventory items and zero movements; (C) an unknown user — sees zero; (E) cross-business INSERT — rejected with `new row violates row-level security policy for table "inventory_items"`. Confirmed no `anon` GRANT or policy exists on any inventory table. Evidence: `evidence/database/D-16_rls_owner_isolation.txt` + `D-05`.
  - **Query plans.** `EXPLAIN (ANALYZE, BUFFERS)` captured for the item list (Bitmap Index Scan on `inventory_items_business_status_idx`), the batch stock aggregation (function scan), and the movement history (Bitmap Index Scan on `inventory_movements_item_time_idx`). Evidence: `evidence/database/D-18_query_plans.txt`.
- **Runtime verification executed under SB-P-1.10-FIX-DIGEST-1.0.** After the corrective `ALTER FUNCTION … SET search_path = public, extensions`, the shared write path was re-verified end-to-end via a self-rolled-back PL/pgSQL block executed against the live Lovable-managed backend as the Milk business Owner. All of the following succeeded and no state was persisted: opening stock (+100), adjustment increase (+20), adjustment decrease (−5), idempotent replay (same key + same payload returned the original movement id), correction (−20 against the prior adjustment increase), current-stock recalculation via `inventory_current_stock_batch` (100 → 115 → 95), idempotency conflict (same key + different payload — correctly raised), negative-stock guard (`adjustment_decrease` of 9999 with `allow_negative_stock=false` — correctly raised `NEGATIVE_STOCK`), and append-only enforcement (`UPDATE inventory_movements` — blocked by trigger). Evidence: `evidence/database/D-20_runtime_movements_after_fix.txt`.
- **Structural verification (retained from SB-P-1.10-LOVE-CR-1.0).** Append-only enforcement (D-05, D-06, D-13), shared write path signature (D-08), owner-scoped policies (D-05), index strategy (D-09), constraint matrix (D-10), enums (D-11).
- **Concurrency verification.** Structural evidence archived in `evidence/database/D-17_concurrency_structural.txt` (idempotency `SELECT … FOR UPDATE` + payload fingerprint + `inventory_movement_idem_scope_uniq` uniqueness, per-item `pg_advisory_xact_lock`, in-transaction stock projection). Runtime idempotency replay now verified under FIX-DIGEST-1.0 (D-20).
- **Founder runtime observation.** Founder-supplied authenticated screenshots (F-01, F-02) confirm UI presence and shape. Interactive Founder capture of the negative-stock confirmation, correction, archive/reactivate, and successful opening-stock / adjustment mutations against the newly restored write path is a normal runtime-observation next step.

## 6. Evidence Summary

Evidence is archived under `docs/implementation/SB-P-1.10/evidence/`, indexed by `evidence/README.md`, and separated into four sources:

- **Repository implementation evidence.** `evidence/repository/commit-range.txt` — SB-P-1.10 implementation commit range `412d91b..f9fabe4` with diff-stat. FIX-DIGEST-1.0 adds a single one-statement forward migration under `supabase/migrations/` altering `public.create_inventory_movement`'s `search_path` GUC only.
- **Lovable-managed database evidence.** `evidence/database/D-01…D-15` (SB-P-1.10-LOVE-CR-1.0) — table schemas, RLS enabled state, policies, triggers and append-only trigger definitions, Data-API grants, function signatures, indexes, constraints, enums, migration-record read attempt, live row counts, and current items snapshot. **Under SB-P-1.10-TV-1.0:** `D-16_rls_owner_isolation.txt` (runtime RLS behavioural probes as the `authenticated` role), `D-17_concurrency_structural.txt` (concurrency and idempotency mechanisms), `D-18_query_plans.txt` (EXPLAIN plans and index usage), `D-19_movement_creation_defect.txt` (defect record — resolved under FIX-DIGEST-1.0). **Under SB-P-1.10-FIX-DIGEST-1.0:** `D-20_runtime_movements_after_fix.txt` (end-to-end regression of the shared write path).
- **Founder runtime evidence.** `F-01_inventory_list_empty.png` (authenticated Inventory list) and `F-02_item_detail_milk.png` (authenticated item detail for "Milk").
- **Runtime verification notes.** `evidence/runtime/runtime-notes.md`.
- **Automated test evidence (SB-P-1.10-TESTS-1.0; corrected under SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0).** `evidence/tests/traceability-matrix.md`, `evidence/tests/test-run-output.txt`, `evidence/tests/test-summary.md`, `evidence/tests/query-plan-evidence.txt`, `evidence/tests/DEFECT-idempotency-select-for-update-rls.md` — a Vitest suite (17 files, 62 tests) run against a dedicated test-only Supabase project (`gysgzasfcjvtrgaigfyn`), covering every Engineering Contract §16 obligation. Originally 57 passed, 5 failed against one root-caused, independently-reproduced defect (idempotency replay under RLS + `FOR UPDATE`); now **62 passed, 0 failed**, stable across 6 runs, following the corrective mission's fix scoped to `create_inventory_movement()` (migration `supabase/migrations/20260724170000_6a0f8a74-e7aa-4200-b54b-3fd57a7c9c62.sql`).
- **Deployment status.** The SB-P-1.10 migration and the SB-P-1.10-FIX-DIGEST-1.0 corrective migration are both applied in the Lovable-managed backend: the three inventory tables, all seven RLS policies, all four inventory functions (with the corrected `search_path` on `create_inventory_movement`), the two append-only triggers, the immutability guard trigger, the opening-stock uniqueness index, and all enums are present at runtime. Direct read of `supabase_migrations.schema_migrations` was refused for the exec role (D-12); this does not affect the deployment finding. **The SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 corrective migration (`20260724170000_..._6a0f8a74...sql`) has been applied and verified only against the dedicated test project (`gysgzasfcjvtrgaigfyn`) — it has NOT been applied to the Lovable-managed production backend.** Deploying it there is a separate governance step outside this mission's scope (this mission has no access to the production backend); Mission Control's own instructions for this corrective mission were explicitly "do not push" and "do not request Mission Control acceptance."

**Retraction (retained from v1.2).** The v1.1 report referenced a Supabase project ref `gysgzasfcjvtrgaigfyn` and stated that the deployment could not be confirmed because that project's `public` schema was empty. That project is **not** the Lovable-managed backend for Smart Business — Smart Business runs on Lovable Cloud project ref `wwgqnshcgbukqczqblsm`. All references to `gysgzasfcjvtrgaigfyn` and the accompanying "zero tables / no migrations" conclusion are withdrawn.

## 7. Outstanding Issues

- **Resolved under SB-P-1.10-FIX-DIGEST-1.0.**
  - **Runtime defect D-19** — `public.create_inventory_movement` raised `function digest(text, unknown) does not exist`. **Root cause:** function declared `SET search_path TO 'public'`, but `pgcrypto`'s `digest(text, text)` lives in the `extensions` schema. **Correction applied:** `ALTER FUNCTION public.create_inventory_movement(...) SET search_path = public, extensions;` — minimal, single-statement forward migration; no schema, RLS, permission, index, business-rule, validation, or signature change; function body untouched. **Runtime verification:** D-20 (all stock-affecting paths, guards, and idempotency behaviour re-verified end-to-end).
  - **Follow-up item — negative-stock confirmation runtime path** (previously blocked by D-19) — server-side guard re-verified via D-20. Interactive Founder UI capture remains a normal runtime-observation step, not a defect.
  - **Follow-up item — concurrency runtime replay** (previously blocked by D-19) — idempotency replay and conflict paths re-verified via D-20.
- **Resolved under SB-P-1.10-TESTS-1.0 (24 July 2026).**
  1. §9 Automated test suite (Engineering Contract §16) — resolved: a Vitest suite now exists and executes via `npm run test`.
  2. §9 Traceability to §16 obligations — resolved: `evidence/tests/traceability-matrix.md` maps every obligation to its test(s) and result.
  3. §10 Automated test results — resolved: `evidence/tests/test-run-output.txt` and `test-summary.md` archived.
- **Resolved under SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 (24 July 2026).**
  - **§9 Tests execute successfully** — originally partially resolved (executable suite, but 57 of 62 passed, 5 failed against a discovered defect). **Now fully resolved: 62/62 passing**, confirmed stable across 6 consecutive runs.
  - **Discovered defect, corrected.** `create_inventory_movement`'s idempotency-replay check never found an existing, matching, RLS-visible idempotency-key row when combined with `SELECT ... FOR UPDATE`, even though the identical query without `FOR UPDATE` found it correctly — refined root cause: PostgreSQL's planner folds the query to a constant "no rows" result (`LockRows -> Result -> One-Time Filter: false`) when row-locking combines with this table's subquery-based RLS policy, a planner limitation rather than an RLS or `auth.uid()` problem. **Corrected**, scoped entirely to `create_inventory_movement()` (no RLS policy, grant, table, or function signature change): the idempotency lookup is now a plain `SELECT`; the existing per-item advisory lock is acquired earlier so same-item retries are fully serialized without needing row-level locking; a targeted `unique_violation` handler catches the one residual cross-item race gracefully. Migration: `supabase/migrations/20260724170000_6a0f8a74-e7aa-4200-b54b-3fd57a7c9c62.sql`, applied and re-verified against the dedicated test project only (see §6 Deployment status — **not yet applied to the production Lovable-managed backend**). Full detail: `evidence/tests/DEFECT-idempotency-select-for-update-rls.md` ("Resolution" section). Contract §16 items 7/8 (idempotency), the idempotency half of item 11 (concurrency), and the idempotent-retry half of item 17 (trusted event-link) now record **Pass** in `traceability-matrix.md`.
- **Findings, not defects, not corrected (recorded under SB-P-1.10-TESTS-1.0; outside SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0's authorized scope, which was limited to the idempotency defect specifically).**
  - Append-only enforcement for an ordinary owner is provided by RLS's default-deny (no UPDATE/DELETE policy exists on `inventory_movements`), not by the `BEFORE UPDATE`/`BEFORE DELETE` triggers firing for that caller. The triggers are real defence-in-depth, independently confirmed to reject mutation via `service_role` (which bypasses RLS) — not dead code, but a different mechanism than the migration's comment implies for the ordinary-owner path.
  - A direct insert into `inventory_movements`, bypassing `create_inventory_movement()`, can evade the function's negative-stock guard at the database level (that guard lives in the function body, not a trigger or CHECK constraint). No application code path does this today (confirmed via a static repository check), so there is no live exploit surface, but the guarantee is enforced by convention rather than by the database.
- **Remaining Follow-up (unaffected by either mission).** §4 Observability metrics pipeline — still legitimately out of scope, not authorised in Phase 1.
- **Known observations carried over.** OBS-P3C-01 (React hydration warning on `/reset-password`) from SB-P-1.9 — unrelated to the SB-P-1.10 module; not exercised by this mission.
- **Justification.** All findings above are grounded in the evidence archived under `docs/implementation/SB-P-1.10/evidence/`, including the `evidence/tests/` directory. No evidence has been invented.
- **Mission Control notes.** _Reserved for Mission Control._

## 8. Final Repository Verification

- [x] Engineering Contract unchanged. Verified: no commits touch `docs/implementation/SB-P-1.10/engineering-contract.md` after its lock commit.
- [x] Lovable Build Prompt unchanged.
- [x] Verification Checklist template unchanged. Execution results are recorded in appended Appendix A (SB-P-1.10-LOVE-CR-1.0), Appendix B (SB-P-1.10-TV-1.0), Appendix C (SB-P-1.10-FIX-DIGEST-1.0), and Appendix D (SB-P-1.10-TESTS-1.0 and SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0); the locked §§1–12 template is preserved verbatim.
- [x] Product Blueprint unchanged.
- [x] Engineering Implementation Specification unchanged.
- [x] Evidence populated under `docs/implementation/SB-P-1.10/evidence/` with a complete index.

## 9. Builder Declaration

The undersigned builder confirms that:

- [x] Implementation followed the locked governance (Product Blueprint, EIS, Engineering Contract, Lovable Build Prompt), based on code-level review of the migration and application code against the Engineering Contract's stated design.
- [x] Implementation followed the Engineering Contract at the database, function, RLS, and UI levels — see §6 evidence.
- [x] Verification Checklist executed on 23 July 2026 (LOVE-CR-1.0) and 23 July 2026 (TV-1.0); corrective mission SB-P-1.10-FIX-DIGEST-1.0 executed 24 July 2026; SB-P-1.10-TESTS-1.0 and its corrective mission SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 executed 24 July 2026 (Appendix D). Cumulative totals: **51 Pass · 0 Fail · 1 Follow-up**. No release-blocking failure identified; the one remaining Follow-up (observability metrics pipeline) is legitimately out of scope.
- [x] Evidence archived under `docs/implementation/SB-P-1.10/evidence/` with an index mapping every artefact to the checklist requirement it supports.
- [x] Repository is presented for Mission Control review per Mission Control's own instructions for SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 ("present repository diff, updated evidence, final test summary, git status; Mission Control will review before authorizing the commit"). This is not a request for Mission Control acceptance of SB-P-1.10 as a whole, and no commit or push has been made.

| Field | Value |
| --- | --- |
| Builder | Lovable Builder (Reporting Room 03_Lovable_Builder) — evidence and report updates under SB-P-1.10-LOVE-CR-1.0, SB-P-1.10-TV-1.0, SB-P-1.10-FIX-DIGEST-1.0. Original implementation by Claude (Reporting Room 02_Claude_Engineering). Test suite authoring and idempotency-defect correction by Claude Engineering (Reporting Room 02_Claude_Engineering) under SB-P-1.10-TESTS-1.0 and SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0. |
| Date | 24 July 2026 |
| Signature (or equivalent) | Claude Engineering — SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 |

## 10. Future Upgrade Opportunities (Build Later)

This section records useful product opportunities identified during implementation or runtime verification that may be considered in future missions.

Items recorded here:

- are **not** part of the current mission scope
- are **not** implementation defects
- are **not** current acceptance criteria
- do **not** delay Mission Control approval
- do **not** authorize additional implementation
- become inputs for future roadmap planning

| Opportunity | Reason | Recommended Future Mission |
| --- | --- | --- |
| Bulk Inventory Import (Excel/CSV) | Reduce manual inventory setup for merchants who already maintain stock lists in spreadsheets. | Future Inventory Import Foundation |
| PDF Inventory Import | Allow merchants to reuse supplier catalogues and inventory documents. | Future Inventory Import Foundation |
| Photo-based Inventory Import | Allow merchants to submit photographed inventory sheets for assisted extraction and confirmation. | Future AI Document Processing |
| WhatsApp Inventory Import | Allow merchants to import inventory directly from approved WhatsApp attachments. | Future WhatsApp File Integration |
| AI-assisted Inventory Extraction | Extract item names, units, and quantities while keeping merchant confirmation mandatory. | Future AI Inventory Assistant |

## 11. Mission Control Review

Reserved for Mission Control. Not completed by the builder.

| Field | Value |
| --- | --- |
| Review Status | |
| Review Notes | |
| Approval Decision | |
| Approved By | |
| Approval Date | |
