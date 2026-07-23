# SB-P-1.10 — Runtime Verification Notes

**Mission:** SB-P-1.10-LOVE-CR-1.0 · **Environment:** Lovable-managed
runtime (published at https://smartbusiness.teamlips.com; Lovable Cloud
backend ref `wwgqnshcgbukqczqblsm`).

## Scope and method

This mission's runtime verification combines:

1. **Founder-supplied authenticated runtime screenshots** archived at
   `../founder/F-01_inventory_list_empty.png` and
   `../founder/F-02_item_detail_milk.png`. These were captured in the
   published Lovable environment while signed in as the Business Owner
   (`creationsflyhigh@gmail.com`) against the "Smart Business" workspace.
2. **Live-database corroboration** via `psql` against the Lovable Cloud
   backend at the time of this mission — see `../database/`. Every
   database artifact was collected against the same project that serves
   the runtime.
3. **Repository-level review** of the shared movement-creation function,
   the RLS policies, and the append-only triggers to confirm the observed
   runtime behaviour follows the intended contract.

Automated authenticated Playwright capture was **not** performed under this
mission — the sandbox environment reported
`LOVABLE_BROWSER_AUTH_STATUS=signed_out`, so an owner session could not be
minted. Authenticated runtime evidence therefore relies on the
Founder-supplied screenshots, which were the explicit basis Mission Control
authorized in the mission brief ("The Founder will provide runtime
verification screenshots and observations directly in the Lovable room").

## What the Founder screenshots demonstrate

**F-01 — Inventory list, empty state (authenticated).**

- Shared workspace header renders with the `Workspace`, `Transactions`,
  and `Inventory` navigation entries, `creationsflyhigh@gmail.com` user
  chip, and `Sign out` control — i.e. the Inventory module is reachable
  from the authenticated workspace and the previously reported "Inventory
  navigation missing" observation is resolved.
- The `Business Operations · Inventory` heading, the descriptive
  paragraph ("Every stock change is recorded as an auditable inventory
  movement. Current stock is derived from the complete movement
  history — quantities are never edited directly."), the `+ New item`
  primary action, the search-by-name field, and the `Active` /
  `All stock levels` filters are all rendered.
- The empty state ("No inventory yet · Create your first inventory item
  to start recording stock movements.") is displayed with a
  `+ Create your first item` CTA — matching the design of the shared
  application shell without a redesign.

**F-02 — Item detail, "Milk" (authenticated).**

- `INVENTORY ITEM` badge, name `Milk`, and the immutable base-unit
  indicator "Counted in `packet`" are rendered together — the base unit
  is presented as a read-only property of the item, consistent with the
  Engineering Contract's immutable-base-unit rule (also enforced at
  database level by `inventory_items_guard_trg`, see
  `../database/D-06_triggers.txt` and the function body in
  `../database/D-08_functions.txt`).
- `Archive` is available in the item header, consistent with the
  permission-aware Owner action.
- `Current stock: 0 packet` is derived from the ledger; the copy states
  "Derived from the complete movement history below." — matching the
  Phase 1 ledger-derived read path.
- Three permission-aware actions are rendered: `Record opening stock`
  (primary), `Adjustment increase`, `Adjustment decrease`.
- The `Stock movement history` section is present with the copy "Every
  recorded movement, newest first. Movements cannot be edited —
  corrections are recorded as new linked entries.", reflecting the
  append-only + linked-correction design.
- Empty-state ("No movements yet · Record opening stock to start this
  item's history.") is rendered because the ledger is empty for this
  item (corroborated by `../database/D-14_row_counts.txt`, which shows
  `inventory_movements = 0`).

**Live-database corroboration.** `../database/D-15_current_items.txt`
shows exactly one live inventory item — `Milk`, base unit `packet`,
status `active`, in business `28b2e43f-b7f0-4e93-b337-bbcaef242cf5`.
Row counts, item name, and base unit match F-02 exactly, tying the
Founder screenshot to the live Lovable-managed database used by the
published application.

## Runtime behaviour verified via the database and code

The Founder screenshots demonstrate the presence and shape of the UI
surfaces. The behaviours below are verified via the live database and the
migration/code path invoked by the UI:

| Behaviour | Evidence |
| --- | --- |
| Inventory schema present and matches the Engineering Contract | `../database/D-01`, `D-02`, `D-03`, `D-10`, `D-11` |
| Owner-scoped RLS enabled on all three inventory tables; no anon policy | `../database/D-04`, `D-05` |
| Append-only ledger enforced at trigger level (defence in depth) | `../database/D-06`, `D-13` |
| Shared movement-creation function is the sole write path (idempotency, per-item advisory lock, negative-stock check, opening-stock invariant, correction validation, archived-item protection) | `../database/D-08` + `src/integrations/supabase/inventory.ts` + `create_inventory_movement()` body captured in the migration source |
| Data-API GRANTs present for `authenticated` (SELECT/INSERT/UPDATE/DELETE) and `service_role`; append-only writes are prevented by triggers rather than by revoking GRANT | `../database/D-07`, `D-13` |
| Ledger-derived current-stock read path (Phase 1 grouped aggregation) | `../database/D-08` (`inventory_current_stock_batch`, `preview_inventory_movement`) |
| Opening-stock uniqueness at index level | `../database/D-09` (`inventory_movements_opening_stock_unique`) |
| Deployed migration matches the repository source | Tables/policies/triggers/functions/enums/indexes all present per D-01…D-11 and D-13; source at `supabase/migrations/20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql` |

## Behaviours not covered by this mission's runtime evidence

The following runtime scenarios are **not** directly captured under this
mission and are recorded as Follow-up in the executed checklist. They can
be closed by a subsequent authenticated Playwright pass or by additional
Founder screenshots:

- Recording opening stock; adjustment increase; adjustment decrease
  updating current stock in the UI.
- The negative-stock warning + explicit "allow negative" confirmation
  path in the UI.
- Correction dialog producing a linked compensating movement in the
  timeline.
- Archive / reactivate action results on the item detail page.
- Idempotency-key duplicate replay behaviour observed through the UI.
- Runtime cross-business isolation observed by a second signed-in owner.

The underlying schema, function bodies, RLS, and trigger definitions
that implement these behaviours are all archived under `../database/`.

## Pre-existing observations still applicable

- **OBS-P3C-01 (React hydration warning on `/reset-password`)** carried
  over from SB-P-1.9 Phase 4. Not relevant to the SB-P-1.10 module and
  not exercised by this mission.
