# SB-P-1.10 — Inventory Foundation — Evidence Index

This directory holds the evidence collected under mission
**SB-P-1.10-LOVE-CR-1.0** (Evidence Collection and Completion Report),
authorized by Mission Control.

Evidence sources: the Lovable-managed runtime, the Lovable-managed database
(project ref `wwgqnshcgbukqczqblsm`), Founder-supplied runtime screenshots,
and the repository implementation history. The prior report's references to
the unrelated Supabase project ref `gysgzasfcjvtrgaigfyn` have been retracted
in the updated Completion Report.

## Directory layout

```text
evidence/
  README.md              This index
  founder/               Founder-supplied runtime screenshots
  runtime/               Runtime verification notes
  database/              Live database verification (psql outputs)
  repository/            Repository/commit evidence
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
| `runtime-notes.md` | Narrative of the runtime verification performed by this mission, the coverage provided by the Founder-supplied screenshots, and the runtime checks explicitly deferred to Founder observation (see notes for scope). |

## Database evidence (`database/`)

All outputs are `psql` queries against the Lovable-managed backend
(`wwgqnshcgbukqczqblsm`) at the time of this mission.

| Artifact | Description | Supports checklist item(s) |
| --- | --- | --- |
| `D-01_inventory_items_schema.txt` | `\d public.inventory_items` — columns, types, defaults, indexes, foreign keys, triggers. | §6 schema fields |
| `D-02_inventory_movements_schema.txt` | `\d public.inventory_movements` — append-only ledger schema, movement type/direction enums, correction link, business-event columns. | §6 schema fields |
| `D-03_idempotency_keys_schema.txt` | `\d public.inventory_movement_idempotency_keys` — idempotency scoping table. | §7 idempotency & shared write path |
| `D-04_rls_enabled.txt` | Confirms `rowsecurity=t` on all three inventory tables. | §7 RLS enabled |
| `D-05_rls_policies.txt` | Full `pg_policies` listing. All policies scope by `business_id ∈ SELECT businesses.id WHERE owner_id=auth.uid()`. **No UPDATE and no DELETE policy exists on `inventory_movements`.** No `anon` policies. | §7 owner-scoped RLS, no update/delete policy on movements |
| `D-06_triggers.txt` | Trigger list confirming `inventory_movements_no_update` (BEFORE UPDATE) and `inventory_movements_no_delete` (BEFORE DELETE) on `inventory_movements`; `inventory_items_guard_trg` immutability guard on `inventory_items`. | §7 defence in depth — append-only |
| `D-07_grants.txt` | `has_table_privilege(...)` matrix for `authenticated`, `anon`, `service_role` on inventory tables. Confirms the Data-API GRANTs required for reachability. | §6 Data-API GRANTs on public schema |
| `D-08_functions.txt` | `pg_proc` signatures for `create_inventory_movement`, `preview_inventory_movement`, `inventory_current_stock_batch`, `inventory_movement_remaining_compensable`, `inventory_items_guard`, `inventory_movements_reject_mutation`. | §4 shared write path; §6 batch aggregation function |
| `D-09_indexes.txt` | Index definitions, including `inventory_movements_opening_stock_unique` (single-opening-stock enforcement) and `inventory_items_business_name_uniq`. | §6 index strategy & opening-stock invariant |
| `D-10_constraints.txt` | All table constraints including the movement type/direction matrix check and correction-link check. | §6 constraints; §8 validation matrix |
| `D-11_enums.txt` | Enum labels for `inventory_movement_type`, `inventory_direction`, `inventory_item_status` matching the Engineering Contract. | §6 movement-type matrix |
| `D-12_migration_record.txt` | Attempted query of `supabase_migrations.schema_migrations`. Permission denied for this role — Follow-up. Deployment is corroborated by tables/functions/policies existing at runtime (D-01…D-11, D-13, D-14, D-15) and by the migration file at `supabase/migrations/20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql`. |
| `D-13_append_only_trigger_defs.txt` | Full `pg_get_triggerdef` for both append-only triggers, both firing `inventory_movements_reject_mutation()`. | §7 defence in depth |
| `D-14_row_counts.txt` | Live counts: `inventory_items=1`, `inventory_movements=0`, idempotency keys=0. | Corroborates F-01/F-02 empty-state Founder screenshots |
| `D-15_current_items.txt` | Row-level snapshot: the sole live item is `Milk` (packet), matching F-02. | Corroborates Founder evidence |

## Repository evidence (`repository/`)

| Artifact | Description |
| --- | --- |
| `commit-range.txt` | Implementation commit range `412d91b..f9fabe4` (13 commits, 2026-07-21). Diff-stat: 11 files changed, 2,813 insertions, 228 deletions — including the SB-P-1.10 migration, the `inventory.ts` data-access layer, the three inventory routes, the shared `AuthedHeader`, and the generated TanStack routeTree / Supabase types. |

## What this evidence does NOT cover

- Authenticated Playwright runtime capture was not performed by this mission
  because the sandbox reported `LOVABLE_BROWSER_AUTH_STATUS=signed_out`;
  authenticated runtime verification is represented by the Founder-supplied
  screenshots archived under `founder/`.
- No automated test suite exists in the repository. The runtime and database
  evidence above demonstrates that the append-only, RLS, idempotency,
  negative-stock, correction, and opening-stock behaviours are implemented
  in the deployed database, but the "automated tests" obligations of
  Engineering Contract §16 remain a **Follow-up** — see the executed
  Verification Checklist and the Completion Report.
