# SB-P-1.10 — Inventory Foundation — Evidence Index

This directory holds the evidence collected under four authorised missions:

- **SB-P-1.10-LOVE-CR-1.0** — Evidence Collection and Completion Report
  (23 July 2026): archived Founder screenshots, initial database schema /
  policy / trigger / function evidence, repository commit range.
- **SB-P-1.10-TV-1.0** — Technical Verification Closure (23 July 2026):
  new runtime probes for owner-scoped RLS isolation, EXPLAIN plans for
  the list / aggregation / history queries, structural concurrency
  evidence, and a documented movement-creation defect discovered during
  verification.
- **SB-P-1.10-TESTS-1.0** — Inventory Foundation Test Coverage
  (24 July 2026): a new automated test suite (Vitest) covering every
  Engineering Contract §16 testing obligation, run against a dedicated
  test-only Supabase project; a traceability matrix; and one newly
  discovered implementation defect (idempotency replay under RLS +
  `FOR UPDATE`), reported but not corrected under this test-only mission.
- **SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0** — Idempotency Replay Correction
  (24 July 2026): a Mission-Control-authorized corrective mission fixing
  the defect discovered above, scoped entirely to
  `create_inventory_movement()`. Full suite now 62/62 passing, re-verified
  across 6 stable runs.

Evidence sources: the Lovable-managed runtime, the Lovable-managed
database (project ref `wwgqnshcgbukqczqblsm`), Founder-supplied runtime
screenshots, and the repository implementation history. The prior
report's references to the unrelated Supabase project ref
`gysgzasfcjvtrgaigfyn` (as a claimed *deployment target*) have been
retracted. That same project ref is, separately and intentionally, the
dedicated test-only database used by SB-P-1.10-TESTS-1.0 and
SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 (see `tests/` below) — a different,
deliberate use, not a reassertion of the retracted claim.

## Directory layout

```text
evidence/
  README.md              This index
  founder/               Founder-supplied runtime screenshots
  runtime/               Runtime verification notes
  database/              Live database verification (psql outputs)
  repository/            Repository/commit evidence
  tests/                 Automated test suite evidence (SB-P-1.10-TESTS-1.0)
```

## Founder runtime evidence (`founder/`)

| Artifact | Description | Supports checklist item(s) |
| --- | --- | --- |
| `F-01_inventory_list_empty.png` | Authenticated `/inventory` page. Inventory nav link present in shared workspace header; page renders "Business Operations · Inventory" heading, description, `+ New item`, search field, `Active` and `All stock levels` filters, and the empty-state `Create your first item` CTA. Signed in as `creationsflyhigh@gmail.com`. Business context indicator "Smart Business — Workspace" visible. | §3 folder/naming preservation; §5 UI-shell reuse & permission-aware surfaces; §5 filters & list scaffold; §7 shell preservation |
| `F-02_item_detail_milk.png` | Authenticated `/inventory/{itemId}` detail page for item "Milk", counted in `packet`. Shows `INVENTORY ITEM` badge, `Archive` button, `Current stock: 0 packet` card noting "Derived from the complete movement history below", primary `Record opening stock` action, `Adjustment increase` / `Adjustment decrease` secondary actions, and empty `Stock movement history` section stating "Every recorded movement, newest first. Movements cannot be edited — corrections are recorded as new linked entries." | §4 ledger-derived current-stock read (§6 aggregation); §5 permission-aware actions & append-only-history UI; §5 correction phrasing; §7 shell preservation |

Live-database corroboration for F-02: `database/D-15_current_items.txt`
shows exactly one row — `Milk`, base unit `packet`, status `active`,
business `28b2e43f-…` — matching the screenshot.

## Runtime verification notes (`runtime/`)

| Artifact | Description |
| --- | --- |
| `runtime-notes.md` | Narrative of the runtime verification performed by SB-P-1.10-LOVE-CR-1.0, the coverage provided by the Founder-supplied screenshots, and the runtime checks explicitly deferred to Founder observation. |

## Database evidence (`database/`)

All outputs are `psql` queries against the Lovable-managed backend
(`wwgqnshcgbukqczqblsm`).

| Artifact | Description | Supports checklist item(s) |
| --- | --- | --- |
| `D-01_inventory_items_schema.txt` | `\d public.inventory_items` — columns, types, defaults, indexes, foreign keys, triggers. | §6 schema fields |
| `D-02_inventory_movements_schema.txt` | `\d public.inventory_movements` — append-only ledger schema, movement type/direction enums, correction link, business-event columns. | §6 schema fields |
| `D-03_idempotency_keys_schema.txt` | `\d public.inventory_movement_idempotency_keys` — idempotency scoping table. | §7 idempotency & shared write path |
| `D-04_rls_enabled.txt` | Confirms `rowsecurity=t` on all three inventory tables. | §7 RLS enabled |
| `D-05_rls_policies.txt` | Full `pg_policies` listing. All policies scope by `business_id ∈ SELECT businesses.id WHERE owner_id=auth.uid()`. **No UPDATE and no DELETE policy exists on `inventory_movements`.** No `anon` policies. | §7 owner-scoped RLS |
| `D-06_triggers.txt` | Trigger list confirming `inventory_movements_no_update` (BEFORE UPDATE) and `inventory_movements_no_delete` (BEFORE DELETE) on `inventory_movements`; `inventory_items_guard_trg` immutability guard on `inventory_items`. | §7 defence in depth |
| `D-07_grants.txt` | `has_table_privilege(...)` matrix for `authenticated`, `anon`, `service_role`. | §6 Data-API GRANTs |
| `D-08_functions.txt` | `pg_proc` signatures for `create_inventory_movement`, `preview_inventory_movement`, `inventory_current_stock_batch`, `inventory_movement_remaining_compensable`, `inventory_items_guard`, `inventory_movements_reject_mutation`. | §4 shared write path; §6 batch aggregation |
| `D-09_indexes.txt` | Index definitions, including `inventory_movements_opening_stock_unique` and `inventory_items_business_name_uniq`. | §6 index strategy |
| `D-10_constraints.txt` | Table constraints including type/direction matrix and correction-link check. | §6 constraints; §8 validation |
| `D-11_enums.txt` | Enum labels for `inventory_movement_type`, `inventory_direction`, `inventory_item_status`. | §6 movement-type matrix |
| `D-12_migration_record.txt` | Attempted query of `supabase_migrations.schema_migrations`. Permission denied for the exec role — deployment is corroborated by the runtime artefacts. | Follow-up |
| `D-13_append_only_trigger_defs.txt` | Full `pg_get_triggerdef` for both append-only triggers, both firing `inventory_movements_reject_mutation()`. | §7 defence in depth |
| `D-14_row_counts.txt` | Live counts: `inventory_items=1`, `inventory_movements=0`, idempotency keys=0. | Corroborates F-01/F-02 |
| `D-15_current_items.txt` | Row-level snapshot: the sole live item is `Milk` (packet). | Corroborates Founder evidence |
| `D-16_rls_owner_isolation.txt` | **SB-P-1.10-TV-1.0.** RLS behavioural probes executed as the `authenticated` role with `request.jwt.claims.sub` set to (A) the Milk business owner — sees Milk; (B) another Owner — sees zero; (C) an unknown user — sees zero; (E) cross-business INSERT — rejected `new row violates row-level security policy for table "inventory_items"`; (F/G) UPDATE/DELETE on `inventory_movements` — no matching rows / append-only trigger authoritative; (H) append-only trigger runtime check — blocked because the shared write path itself currently fails (see D-19); (I) confirmed no `anon` GRANT and no `anon` policy exists on any inventory table. | §7 RLS owner-only visibility & cross-business isolation |
| `D-17_concurrency_structural.txt` | **SB-P-1.10-TV-1.0.** Structural concurrency evidence: idempotency-key conflict detection (`SELECT … FOR UPDATE` + payload fingerprint + `inventory_movement_idem_scope_uniq`), per-item `pg_advisory_xact_lock`, and authoritative in-transaction stock projection. Runtime replay was attempted and blocked by D-19. | §7 concurrency / §8 idempotency |
| `D-18_query_plans.txt` | **SB-P-1.10-TV-1.0.** `EXPLAIN (ANALYZE, BUFFERS)` on the item list (Bitmap Index Scan on `inventory_items_business_status_idx`), the batch stock aggregation function scan, and the movement history query (Bitmap Index Scan on `inventory_movements_item_time_idx`). Includes the full index listing for both tables for cross-reference. | §6 index strategy — plan-level validation |
| `D-19_movement_creation_defect.txt` | **SB-P-1.10-TV-1.0. Discovered defect (RESOLVED under SB-P-1.10-FIX-DIGEST-1.0 — see D-20).** Every call to `public.create_inventory_movement` raised `function digest(text, unknown) does not exist`. Root cause: the function was declared `SET search_path TO 'public'`, but `pgcrypto`'s `digest(text, text)` lives in the `extensions` schema. | §7 shared write path — historical defect record |
| `D-20_runtime_movements_after_fix.txt` | **SB-P-1.10-FIX-DIGEST-1.0.** Runtime verification after applying `ALTER FUNCTION … SET search_path = public, extensions`. Executed via `supabase--insert` in a self-rolled-back PL/pgSQL block: opening stock, adjustment increase, adjustment decrease, idempotent replay (same key + payload → same movement id), correction against a prior adjustment, current-stock recalculation (100 → 115 → 95), idempotency conflict (same key + different payload → raised), negative-stock guard (raised without explicit authorization), and append-only guard on `inventory_movements` (raised). All checks passed; no persisted state changes. | §7 shared write path (regression); §4 ledger-derived read (recalculation) |

## Repository evidence (`repository/`)

| Artifact | Description |
| --- | --- |
| `commit-range.txt` | Implementation commit range `412d91b..f9fabe4` (13 commits, 2026-07-21). Diff-stat: 11 files changed, 2,813 insertions, 228 deletions. |

## Automated test evidence (`tests/`)

**SB-P-1.10-TESTS-1.0** (24 July 2026) **+ SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0** (24 July 2026, corrective mission). A Vitest test suite (17 files, 62
tests) exercising every Engineering Contract §16 testing obligation
against the dedicated test-only Supabase project `gysgzasfcjvtrgaigfyn`
(explicitly not the production Lovable-managed backend), with the
`businesses` + SB-P-1.10 inventory migrations applied, plus one corrective
migration authored under this mission. **Current result: 62 passed, 0
failed**, stable across 6 consecutive runs. SB-P-1.10-TESTS-1.0 originally
found 5 failures tracing to one real, root-caused implementation defect;
SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 corrected it (scoped entirely to
`create_inventory_movement()`) and re-verified.

| Artifact | Description | Supports checklist item(s) |
| --- | --- | --- |
| `traceability-matrix.md` | Maps every Engineering Contract §16 obligation to its test file(s), test name(s), pass/fail result, and notes. Updated post-fix: 17/17 Pass. | §9 testing obligations; §16 all items |
| `test-run-output.txt` | Raw `npm run test` output from the final, stable post-fix run (62/62). | §10 automated test results |
| `test-summary.md` | Execution command, runtime environment, migrations applied and why, coverage summary, the corrective-mission root cause and fix, and a transparent list of test-authoring bugs found and fixed while first building the suite. | §9/§10 |
| `query-plan-evidence.txt` | `EXPLAIN (ANALYZE, BUFFERS)` captured against the test project for the performance obligation (history query, batch aggregation, and the aggregation function's inlined query shape) — same style as `D-18_query_plans.txt`, on a smaller (336-row) test dataset. Unaffected by the corrective mission. | §6 index strategy — grouped-aggregation structural evidence |
| `DEFECT-idempotency-select-for-update-rls.md` | Root-caused, independently-reproduced (JS integration test + raw SQL) defect: `create_inventory_movement`'s idempotency-replay `SELECT ... FOR UPDATE` never found an existing, matching, RLS-visible row, so retries were never gracefully deduplicated — traced to a PostgreSQL planner limitation (`FOR UPDATE` + a subquery-based RLS policy folding to a constant "no rows"). **RESOLVED** under SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0; original discovery record preserved in full, resolution appended. | §7 idempotency (Pass, was Fail); §13 concurrency (Pass, was partial Fail) |

Source: `tests/setup/` (test-only Supabase client helpers — deliberately
independent of `src/integrations/supabase/client.ts`, since that module
holds one process-wide client singleton and cannot represent two
simultaneously signed-in businesses or fire genuinely concurrent requests
as the same user) and `tests/inventory/` (the 17 test files themselves).

## What this evidence does NOT cover

- Authenticated Playwright runtime capture was not performed. The
  Founder-supplied screenshots (F-01, F-02) provide the authenticated UI
  evidence.
- Interactive UI capture for the negative-stock confirmation dialog, the
  correction dialog, and archive/reactivate remains deferred to Founder
  runtime observation. The underlying database write path has been verified
  end-to-end under SB-P-1.10-FIX-DIGEST-1.0 (D-20) and, for the specific
  paths covered, under SB-P-1.10-TESTS-1.0's automated suite.
- The automated test suite runs against a dedicated test-only Supabase
  project, not the production Lovable-managed backend. It does not by
  itself confirm the production backend's current schema matches what was
  tested — that remains covered by the database evidence above (D-01–D-20).
