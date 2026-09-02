# SMART BUSINESS — REPOSITORY COMMUNICATION

# report1.7 — Controlled Production Product ↔ Inventory Repair Result

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`

**Mission Name:** `Production Runtime Synchronization & Lovable Recovery`

**Sequence:** `1.7`

**From:** `Claude Code / Repository Engineering Operator`

**To:** `Mission Control`

**In Reply To:** `communication/live/instruction1.7.md`

**Date:** `2026-09-02`

**Final status:** `PASS`

---

## 1. Verified Target Baseline

- Canonical repository: `SmartBusinessv1/smart-business`, `main`, pulled fresh to `262e0a8` before any work began (includes the merged `smart-business#463` Phase A migration and the merged Phase B design/evidence packaging correction).
- Production target: Supabase project `smart-business` (`gysgzasfcjvtrgaigfyn`, Team LIPS org, Pro plan), reached only through `scripts/supabase-cli.mjs production ...` with `CONFIRM_PRODUCTION=yes` explicitly set for each authorized command — never a bare `supabase` CLI invocation, never an ambient/default project reference.
- **Backup verification performed before any write** (not required verbatim by instruction1.7, but a genuine prerequisite this session checked directly rather than assumed, given the stakes): `supabase backups list` against production confirmed daily physical (`walg`) backups, most recent `2026-09-02T01:24:06Z` (same day, `COMPLETED`), with 8 days of prior completed backups also present. `pitr_enabled: false` — physical daily backups only, not point-in-time recovery; disclosed as the accurate backup posture, not overstated.
- Rehearsal environment: Supabase test project `smart-business-test` (`drravyyauixltoihzmwo`), used to rehearse the exact repair logic against a synthetic mirror of the production scenario before it was ever run against production (§4).

## 2. Exact Precondition Evidence

Read directly from production, twice — once before Phase 1 (§3) and again immediately before Phase 3 (§5), per instruction1.7 Phase 2's explicit requirement — using a query that unambiguously identifies the affected business by finding the one business where a product named `Mango` and a product named `Milma Milk` both reference the same Inventory item, and that item is named `AVT Tea Powder`. Exactly one match, both times, identical in every field:

| Field | Value |
|---|---|
| Business | `Bhai Store` (`e158fed3-b7ec-4f0f-9797-319ef25702f6`), category Grocery, locality Thiruvathra, owner `930d41a1-2011-47a0-99f9-777b9164b074` |
| `Milma Milk` | id `0c106cab-f573-4e0a-9492-0bd8793f7a52`, status `active`, `inventory_item_id` = the shared item, `inventory_link_established_at` `2026-08-09T11:49:17.696079Z` |
| `Mango` | id `e778f555-76f3-4300-8305-f6795addab84`, status `active`, `inventory_item_id` = the shared item, `inventory_link_established_at` `2026-08-15T20:42:13.967535Z` — confirmed later than Milma Milk's, matching instruction1.7 §3 |
| Shared item | `AVT Tea Powder`, id `9cdd9e23-49b5-4788-a454-7e32f342d436`, `base_unit` `Packet`, status `active` |
| Movements on that item | exactly one: id `1bdf7f8a-5135-4043-8136-e5a8445ec32c`, `opening_stock`, `increase`, quantity `5`, reason `Opening stock bulk import`, `occurred_at` `2026-09-02T09:47:15.258Z` — matches instruction1.7 §3 exactly, including the date |
| Products referencing the shared item | exactly two: `Milma Milk` and `Mango` — no additional product shares it |
| Catalog product named `AVT Tea Powder` in this business | none — matches instruction1.7 §3 |
| Existing Inventory items named `Mango` or `Milma Milk` in this business | none — matches instruction1.7 §3 |
| Global duplicate `(business_id, inventory_item_id)` groups, across the entire database | exactly one — this same group. Confirms this is the *only* known corruption; nothing else needed touching |

**No divergence found at either read.** Both re-reads (before Phase 1 and immediately before Phase 3) returned byte-for-byte identical results. Per instruction1.7's explicit stop condition, execution proceeded because nothing differed; had anything differed, this report would instead state the exact divergence and stop.

## 3. Authorized Execution Order — What Was Actually Run, in Order

### Phase 1 — Deploy the accepted Phase A reuse guard

Production migration state before: 20 of 21 tracked migrations applied; `20260902120000_sb_ops_prod_sync_1_0_instr1_6_phase_a_link_reuse_guard.sql` pending (`remote: ""`) — exactly the one migration instruction1.7 authorizes for this phase, confirmed via `supabase migration list` before touching anything.

The Phase B design/evidence file was already absent from `supabase/migrations/**` (removed in the `smart-business#463` packaging correction, merged before this instruction began), so nothing needed to be held back — only Phase A was pending.

Executed: `CONFIRM_PRODUCTION=yes node scripts/supabase-cli.mjs production db push --include-all` — the repository-approved production migration mechanism, the same wrapper this repo's own incident history (`SB-MIG-1.2E-C`/`SB-MIG-1.2E-B`) exists specifically to make safe.

Result: `{"upToDate":false,"dryRun":false,"migrations":["20260902120000_sb_ops_prod_sync_1_0_instr1_6_phase_a_link_reuse_guard.sql"],...,"message":"Finished supabase db push."}`. Verified immediately after via `supabase migration list`: `local == remote` for `20260902120000`. Verified independently (not merely "no error"): both `preview_catalog_inventory_link_change` and `assign_or_replace_catalog_inventory_link` now carry the `UNIQUENESS_CONFLICT` reuse-guard logic in production (`pg_proc.prosrc`), and `postgres`'s temporary `catalog_link_executor` grant (needed to author the `CREATE OR REPLACE FUNCTION` at all — see `report1.6.md` §3/§4) left exactly the original single `supabase_admin`-granted, non-inheriting membership row afterward — zero residue, on production, not only on the test project.

### Phase 2 — Re-read exact production preconditions

Documented in full in §2. No divergence found; proceeded to Phase 3.

### Phase 3 — Perform the one narrow, auditable repair

**Rehearsed twice against the isolated test project before running against production** (§4 for the mechanism, run in full, twice — once with the core write logic only, once with the complete final script including every precondition check — both times against a synthetic fixture built to mirror the exact production shape, both times succeeding and both times rolled back with the shared test fixture's row counts confirmed unchanged afterward: 165 products, 903 items, 0 duplicate groups, both before and after each rehearsal).

Deployed as a new migration file, `supabase/migrations/20260902140000_sb_ops_prod_sync_1_0_instr1_7_mango_milma_milk_repair.sql`, via the identical production migration mechanism as Phase 1 (`db push`), so this repair is version-controlled, permanently recorded in the same tracked history as every other schema/data change this repository has ever made — not an ad-hoc, untracked script.

## 4. Exact Repair Mechanism and Why It Preserves Auditability

The migration is a single `DO $$ ... $$` block, structured as: eight precondition checks (each a `RAISE EXCEPTION` on mismatch, re-verifying every fact in §2 in-transaction, immediately before any write) → the writes → six post-write assertions re-verifying the exact resulting state the repair promises (not merely "no exception was raised"). Any single failure at any point aborts the entire migration transaction with zero effect — this was true by construction and did not need to be exercised for real, since every check passed.

**Why the ordinary D-068 merchant flow (`assign_or_replace_catalog_inventory_link` / `remove_catalog_inventory_link`) could not be used, and why it was not weakened to allow it:** both products were linked to `AVT Tea Powder` before the one movement on that item was recorded (Milma Milk `2026-08-09T11:49:17Z`, Mango `2026-08-15T20:42:13Z`, movement `2026-09-02T09:47:15Z`). The existing D-047 dependent-history guard's own predicate (`occurred_at >= inventory_link_established_at`) is therefore true for both, and correctly rejects a plain unlink for either — it has no way to distinguish "this link was a data-entry bug" from "this is real history to protect," and per instruction1.7 §4's explicit boundary, that guard was not touched, weakened, or bypassed for ordinary merchant workflows. This resolves `report1.6.md` §5's disclosed uncertainty (which of the two, or both, would be blocked) with the definite answer confirmed here: both.

**What was reused from the existing governed command surface, not invented:**

- The two new dedicated Inventory items (`Mango`, `Milma Milk`, both `base_unit = 'Packet'` — matching both products' existing `selling_unit`, itself matching `AVT Tea Powder`'s own `base_unit`, so no unit mismatch or price reconfirmation was ever in question) were created via a plain insert into `inventory_items` — the exact same mechanism `createInventoryItem` (`starter-supab-shell`) already uses for every ordinary "New item" / "Start tracking stock" action. Neither received any Opening Stock movement (instruction1.7 §4.6).
- The controlled `+5` movement was neutralized through the **existing, unmodified `create_inventory_movement` RPC itself** — not a raw `INSERT` — by simulating the business owner's own authenticated context (`set_config('request.jwt.claims', ...)`) for the transaction's duration, exactly as this repository's own established technique for exercising `SECURITY INVOKER` governed commands outside a live HTTP session already works (used identically, and proven, in `report1.6.md`'s own test-project verification). Every one of that RPC's own business-rule checks ran for real: correction direction must oppose the original (`decrease` vs. the original's `increase` — enforced), quantity must not exceed the remaining compensable amount (`5 - 0 - 5 = 0`, not negative — enforced), non-future-dating, idempotency. The original `opening_stock` movement was not deleted, edited, or hidden — it remains in `inventory_movements`, unchanged, permanently. The correction is a second, explicitly linked (`correcting_of`) row that nets the item's stock to zero — an auditable, history-preserving neutralization, exactly as instruction1.7 §4.1 prefers over silent erasure.

**What could not go through the existing governed link-event tables, disclosed rather than routed around dishonestly:** `catalog_product_link_events.preview_token_id` is `NOT NULL`, referencing `catalog_link_preview_tokens` — there is no honest way to populate one here, since the only function that mints one (`preview_catalog_inventory_link_change`) would itself reject this exact change via D-047. Fabricating a token, or a link-events row referencing one, would misrepresent how this change happened, so none was written to that table. `catalog_audit_events` has no such dependency and *was* used — one row per product, `change_type = 'inventory_link_replaced'` (an existing, allowed value; the before/after payload shape matches exactly what the governed RPC itself would have written), `system_run_id` set to one shared UUID correlating both rows as the same repair operation (an existing, previously-always-`NULL` column used here for its evident purpose, not a new column). **Genuine, disclosed schema limitation:** that table's `executed_by_actor_type`, `channel`, and `authority_basis` columns are each `CHECK`-constrained to a single fixed value (`'user'`, `'dashboard'`, `'owner_via_businesses.owner_id'` respectively) with no accommodation for an administrative/migration actor — this is a pre-existing constraint this narrow instruction is not authorized to redesign, not something introduced or worked around here. The true provenance of this change is fully and permanently recorded in the migration file itself (version-controlled, deployed through the standard tracked mechanism) and in this report — not claimed by those three columns, which structurally cannot represent it.

## 5. Exact Production Execution Mechanism

`CONFIRM_PRODUCTION=yes node scripts/supabase-cli.mjs production db push --include-all`, run twice (Phase 1, then Phase 3, with the Phase 3 migration file temporarily withheld from `supabase/migrations/**` during Phase 1 specifically so the two phases deployed as genuinely separate, gated steps rather than one combined push). Both runs used the exact same repository-approved wrapper as every other production-targeted command this mission has used, requiring explicit `CONFIRM_PRODUCTION=yes` and printing the resolved target/ref before doing anything, per its own `SB-MIG-1.2E-C` design.

## 6. Before/After Evidence — the Three Affected Identities and the Controlled Test Movement

Independently re-read from production after execution (not inferred from the migration's own internal post-checks alone):

| Identity | Before | After |
|---|---|---|
| `Mango` (`e778f555-...`) | `inventory_item_id` = `9cdd9e23-...` (`AVT Tea Powder`) | `inventory_item_id` = `6067f128-d62c-42c2-8136-0a108c31e4e8` — a new, dedicated Inventory item named `Mango`, `base_unit` `Packet`, no movement history |
| `Milma Milk` (`0c106cab-...`) | `inventory_item_id` = `9cdd9e23-...` (`AVT Tea Powder`) | `inventory_item_id` = `502daf11-1987-4770-8c57-712ecfc27b8b` — a new, dedicated Inventory item named `Milma Milk`, `base_unit` `Packet`, no movement history |
| `AVT Tea Powder` (`9cdd9e23-...`) | one movement: `opening_stock +5` | **unchanged as a Catalog-facing identity** — no longer referenced by any Catalog product (instruction1.7 §4.7: not repurposed as `Mango` or `Milma Milk`); its own row (`name`, `base_unit`, `status`, `created_at`) is byte-for-byte unchanged; now has two movements: the original `opening_stock +5` (unmodified) and a new `correction -5` (`correcting_of` = the original's id); **net stock is `0`** |

`Mango`'s and `Milma Milk`'s new item ids are confirmed distinct from each other and from `AVT Tea Powder`'s id. Both retain their original `selling_unit` (`Packet`), `current_selling_price` (`80` / `32`), `status` (`active`), and every other field — only `inventory_item_id` and `inventory_link_established_at` changed, exactly as required.

Two `catalog_audit_events` rows were written (`change_type = 'inventory_link_replaced'`, one per product), sharing one `system_run_id`, with `before`/`after` payloads matching the table above.

## 7. Global Duplicate-Group Verification

Read fresh from production after execution, across the entire database, not scoped to this one business:

```text
global_duplicate_groups_after_repair: []
```

Zero `(business_id, inventory_item_id)` duplicate groups remain anywhere. Before the repair, exactly one existed (this one, per §2); after, none.

## 8. Confirmation That Phase B Remains Deferred

- No `.sql` file for Phase B exists anywhere in `supabase/migrations/**`, locally or on production's applied-migration history (`supabase migration list` shows no `20260902130000` entry, since it was never re-added after the `smart-business#463` packaging correction).
- `pg_constraint` on production confirms `catalog_products_business_inventory_item_uniq` does not exist.
- Nothing in this instruction authored, restored, or executed that constraint. `docs/migration/README.md`'s Phase B row is updated (§9) to record that the blocking duplicate is now repaired and independently confirmed absent — making Phase B *eligible* for a future explicit authorization per instruction1.7 §6 — but no such authorization exists yet, and none is created by this repair.

## 9. Documentation Kept Synchronized

`docs/migration/README.md` updated: Phase A's row moved to `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` (applied and independently verified); a new row added for the repair migration, also `COMPLETED`; Phase B's row updated to state the duplicate is repaired and it is now eligible, but not authorized, for a future mission.

## 10. Preserved Boundaries — Confirmed, Not Merely Asserted

- No broad production cleanup was performed — exactly two `catalog_products` rows and one Inventory item's movement history were touched; two new `inventory_items` rows were created. Nothing else.
- No unrelated test/demo data was deleted.
- D-047 was not weakened, removed, or bypassed for any ordinary merchant workflow — the governed link functions are byte-for-byte the same as `report1.6.md` left them; this repair used a separate, narrowly-scoped path specifically because that guard correctly refused the ordinary one.
- No RLS policy, grant, or Auth setting was added, removed, or altered — `postgres`'s temporary `catalog_link_executor` membership (needed only to author Phase A's `CREATE OR REPLACE FUNCTION`, not needed at all by the repair migration) was granted and revoked within Phase 1 alone, confirmed to leave zero residue on production directly (§3), independent of the earlier test-project confirmation in `report1.6.md`.
- No Lovable publication or domain cutover occurred.
- Phase B uniqueness was not authored, restored, or deployed under this instruction (§8).
- No self-merge, self-approval, or push to a protected branch occurred; this report itself is delivered through the same PR-based communication workflow as every other step in this mission.

## 11. Final Status

`PASS`. Every item in instruction1.7 §5's required verification list was independently confirmed true after execution: the Phase A migration is applied in production; `Mango` and `Milma Milk` have different, non-null `inventory_item_id` values; neither references `AVT Tea Powder`; the two new dedicated items' names and base units are correct; zero duplicate `(business_id, inventory_item_id)` groups remain anywhere; the controlled test `+5` no longer contributes to merchant stock truth (net zero, original movement preserved); no unrelated Catalog product, Inventory item, movement, RLS policy, grant, Auth setting, or business record changed; and Phase B remains genuinely absent as an executable migration. No precondition divergence was found at either re-read, so no stop-and-report branch was triggered. No self-merge.
