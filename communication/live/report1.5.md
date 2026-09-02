# SMART BUSINESS — REPOSITORY COMMUNICATION

# report1.5 — System-Managed Product ↔ Inventory Identity + Step-4 UX Cleanup Result

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`

**Mission Name:** `Production Runtime Synchronization & Lovable Recovery`

**Sequence:** `1.5`

**From:** `Claude Code / Repository Engineering Operator`

**To:** `Mission Control`

**In Reply To:** `communication/live/instruction1.5.md`

**Status:** `EXECUTED — MERCHANT-FACING CORRECTION READY, BOUNDED BACKEND DECISION REQUIRED`

**Date:** `2026-09-02`

---

## 1. Verified Target Baseline and Branch

- Target repository: `SmartBusinessv1/starter-supab-shell`
- Base verified before work began: `main@a92ee50` — confirmed to be the merge of PR `starter-supab-shell#3` (Step-4 Catalog review + Inventory Opening Stock import, including its own `87522ea` correction)
- Working tree verified clean before modification; `supabase/config.toml` verified bound to `gysgzasfcjvtrgaigfyn` before modification
- Branch: `mission/SB-OPS-PROD-SYNC-1.0-product-inventory-identity` (created fresh from that baseline)
- Before choosing an implementation, the existing product↔inventory link/unlink/create commands and schema constraints were inspected directly against source (§2) rather than assumed

## 2. Existing Product↔Inventory Architecture Discovered

- Linking already goes through a governed two-call sequence (**D-068**): `preview_catalog_inventory_link_change(p_product_id, p_requested_action, p_target_inventory_item_id)` → a 15-minute preview token → `assign_or_replace_catalog_inventory_link(p_idempotency_key, p_preview_token_id, p_confirmed_price)` or `remove_catalog_inventory_link(p_idempotency_key, p_preview_token_id)`. Both confirm calls are idempotent and re-validate the preview token's fingerprint against current product state before writing.
- **D-047 dependent-history guard**, already present and unchanged: both the replace and remove preview paths reject with `DEPENDENT_HISTORY_CONFLICT` if any `inventory_movements` row exists on the linked item at or after that product's own `inventory_link_established_at`. This protects audit history from being silently orphaned by a relink/unlink — it is the correct, existing safeguard, and this instruction does not touch it.
- Inventory item creation (`createInventoryItem`, `@/integrations/supabase/inventory.ts`) is a direct, caller-JWT, RLS-scoped insert into `inventory_items` — the same mechanism Inventory's own "New item" dialog already uses. It is not a heavier RPC like Catalog's command surface, but it is the existing governed path for this specific action in this codebase.
- **The confirmed root cause:** the merchant-facing target-item picker, `listInventoryItemsForPicker(businessId)`, read **every active Inventory item in the business** with no filtering — including items already linked to a *different* Catalog product — and handed the merchant a plain dropdown to choose any of them. `assign_or_replace_catalog_inventory_link` itself performs **no check** that the target item isn't already linked elsewhere; it only checks that the item exists, is active, belongs to the caller's business, and differs from the product's current link. Read directly from `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql` (canonical repo) — no such check exists in either `preview_catalog_inventory_link_change` or `assign_or_replace_catalog_inventory_link`.
- **Schema confirmation:** the generated Supabase types (`starter-supab-shell/src/integrations/supabase/types.ts`) record the `catalog_products_inventory_item_fk` relationship as `isOneToOne: false` — i.e. no unique constraint exists on `catalog_products.inventory_item_id`, confirmed directly from the live schema's own type generation, not inferred.

This is exactly consistent with the runtime evidence in `instruction1.5` §2: two unrelated products (`Mango`, `Milma Milk`) were each individually linked, through this same picker, to the same pre-existing Inventory item (`AVT Tea Powder`) — nothing prevented it at either the UI or the database layer.

## 3. One-to-One Integrity Requirement — Feasibility Finding

**Finding: reliable one-to-one enforcement is not achievable without a bounded backend change.** Per `instruction1.5` §5/§15, this is reported, not implemented.

- The merchant-facing picker was the *only* thing standing between a merchant and this bug — and it exercised no server-side reuse check at all. Removing the picker (§4) closes the **standard UI path**, but:
- A direct call to `assign_or_replace_catalog_inventory_link` (bypassing this UI — e.g. via the same authenticated session's own JWT calling the RPC directly, or a second concurrent tab racing a still-open preview token) can still target an inventory item id already linked to a different active product, because the RPC itself never checks this.
- No unique index or constraint exists at the schema level to reject such a write as a last resort (§2).
- Per `instruction1.5` §5, only a genuine backend change would close this fully:
  1. **Smallest option:** a partial unique index, e.g. `CREATE UNIQUE INDEX ON catalog_products (business_id, inventory_item_id) WHERE inventory_item_id IS NOT NULL AND status <> 'archived';` — rejects a second active product from ever holding the same `inventory_item_id` for the same business, at the database layer, regardless of which code path attempted it.
  2. **Alternative/complementary:** add a reuse check inside `assign_or_replace_catalog_inventory_link` itself (a `SELECT 1 FROM catalog_products WHERE inventory_item_id = p_target_inventory_item_id AND business_id = v_business AND status <> 'archived' AND id <> v_product.id`), returning a new or reused rejection reason (e.g. `UNIQUENESS_CONFLICT`, already used elsewhere in this command surface for name/SKU/barcode collisions) — this is a materially changed governed RPC and would need a migration to redeploy the function body regardless.

Either option is a `supabase/migrations/**` change, which per this repository's own `CLAUDE.md`/`docs/migration/README.md` is never self-authorizing and requires a new explicit mission — **no such change was made or attempted under this instruction, and no production Supabase mutation of any kind was performed.**

**What was achieved without a backend change (§4):** the standard merchant workflow can no longer *produce* a many-products→one-item state, because it no longer offers a choice of existing items at all — every "assign_or_replace" action targets a brand-new, just-created item. This is a real, substantial narrowing of the bug's surface, not a placebo — but it is UI-layer, and `instruction1.5` §5 explicitly says not to represent UI-only prevention as the integrity requirement itself. This report does not do so.

## 4. Required Product Behavior — Implemented Now

### New product / existing non-stock product

- The merchant is never shown a list of existing Inventory items.
- Clicking **"Start tracking stock"** collects only a base counting unit (pre-filled with the product's current selling unit, editable, permanent once set — unchanged D-068 behavior), then:
  1. calls `createInventoryItem` to create a brand-new Inventory item named after the product (`product.name`), with that base unit — the existing, unmodified insert path Inventory's own "New item" dialog already uses;
  2. immediately runs the existing `preview_catalog_inventory_link_change` → `assign_or_replace_catalog_inventory_link` pair against that new item's id.
- If the product's name collides with an existing Inventory item name (a real `inventory_items` uniqueness constraint, confirmed via the existing `CreateItemDialog`'s own duplicate-key handling on the Inventory page), the merchant is shown a clear message and a one-time "Stock item name" field to disambiguate — the create step is retried, never silently renamed.
- The resulting association is business-scoped (RLS-enforced, unchanged) and is, by construction, a brand-new item no other product can already reference.

### Existing stock-tracked product

- The "Inventory link" card was renamed **"Stock tracking"**; its copy no longer frames this as a cross-object linking task ("Stock has been tracked for this product since … , using its own dedicated stock item" / "This product doesn't track stock yet. Smart Business will set up a dedicated stock item for it — you won't manage a separate inventory item yourself").
- **"Set up a new stock item"** (replacing "Replace inventory link") follows the exact same create-then-link steps as above — a fresh item, never a picked one. The existing D-047 guard still applies unchanged: if the currently-linked item already has movement history at/after this product's own link time, the preview step rejects with the same `DEPENDENT_HISTORY_CONFLICT` merchants would have seen before.
- **"Stop tracking stock"** (`remove_catalog_inventory_link`) is unchanged code — already safe, already governed, already blocked by D-047 once history exists.

### Opening Stock import

Unchanged. It already: resolves a Catalog product via the governed search/read RPCs; follows that product's `inventory_item_id`; writes only through `create_inventory_movement`; never touches a Catalog field. Nothing in this correction required or made any change to `src/server-functions/inventory-import.ts` or the Opening Stock import route.

## 5. Catalog Import UX Cleanup — Implemented Now

### 5.1 Review copy (§7.1)

**Before:** every "needs attention" row showed one blanket line — "These rows won't be created unless you fix and re-upload the file" — even for rows with a working inline Category/Selling Unit corrector directly beneath it.

**After:** the section intro is now conditional on whether any inline-fixable rows are present in the current batch, and every row shows copy specific to *its own* resolution path:

- `INVALID_CATEGORY` / `INVALID_UNIT` rows: the existing `RowCorrectionEditor` (unchanged, from `report1.4`), no separate copy needed — the working control is the truth.
- `POSSIBLE_MATCH` rows: "Review the existing product above, then check 'skip' if this row is a duplicate."
- Every other `NEEDS_CORRECTION` row (missing name, duplicate name/SKU/barcode, invalid price, invalid tax): "Fix this in your source file and re-upload, or check 'skip' to move on without creating this row." — unchanged in substance from before, now scoped only to the rows for which it is actually true.

### 5.2 Summary truth after correction (§7.2)

**Before:** the four summary tiles (Total rows / Ready to create / Possible matches / Needs correction) were rendered from `preview.totalRows`/`preview.ready`/`preview.possibleMatch`/`preview.needsCorrection` — a one-time snapshot object captured at the initial preview call and never updated, while the "needs attention" list and the "Confirm import" section both already derived from the live, server-refetched `rows` array. Correcting a row updated the live array (and correctly flipped the confirm count) without ever updating the stale snapshot tiles, producing exactly the contradiction Founder observed (`Ready to create: 0` / `Needs correction: 1` against a confirm section correctly saying `1 row(s) will be created`).

**After:** once row details have loaded, all four tiles are computed directly from the same `rows` array everything else on the page already reads (`rows.length`, and `rows.filter(...).length` per status) — there is now exactly one source of row-status truth on this screen, not two. Before rows finish loading, the tiles fall back to the one-time preview snapshot (accurate at that exact moment, since no correction can have happened yet) purely to avoid a flash of `0`s.

## 6. Exact Files Changed

| Path | Change |
|---|---|
| `src/integrations/supabase/catalog.ts` | removed `listInventoryItemsForPicker`/`InventoryPickerItem` (superseded; documented in place) |
| `src/routes/_authenticated/catalog.$productId.tsx` | `InventoryLinkFlow` rebuilt around create-then-link instead of pick-then-link; "Stock tracking" card copy/labels updated |
| `src/routes/_authenticated/catalog.import.tsx` | review copy made per-row-truthful; summary tiles now derive from live row state |
| `src/routes/_authenticated/inventory.index.tsx` | removed the now-unreachable Path B create-then-return navigation context (search params, banner) that only supported the removed picker flow |

No `supabase/migrations/**`, `package.json`, or `bun.lock` change. No file outside this authorized scope was touched.

## 7. Preserved Step-4 Behavior

Verified by direct inspection, not merely by build passing:

- Catalog CSV/XLSX parser runtime correction (`report1.3`): untouched, no import changed.
- Catalog inline Category/Selling Unit correction (`report1.4`): `RowCorrectionEditor` and `catalogImportUpdateRowCorrection` untouched; only the surrounding copy/summary-derivation changed.
- Custom Selling Unit support, archived-category conflict protection: untouched (same `SellingUnitSelector`/`CategorySelector` components, same server-side re-validation).
- Duplicate/`POSSIBLE_MATCH` protections: untouched (`classify.ts`, commit-time `UNIQUENESS_CONFLICT`, both unmodified).
- Explicit Catalog import confirmation: unchanged — nothing is created before "Confirm import."
- Inventory Opening Stock CSV/XLSX preview, server-authoritative re-resolution at commit (`report1.4` §3 correction), caller-JWT business isolation, idempotent confirmation, movement auditability: `src/server-functions/inventory-import.ts` and the Opening Stock route were not touched by this change at all.
- Catalog/Inventory stock-truth separation: reinforced, not weakened — Opening Stock import and the product-link flow both still write stock exclusively through `create_inventory_movement`/the D-068 RPC pair; no Catalog stock field exists or was introduced.

## 8. Engineering Verification

- `bun install --frozen-lockfile`: **PASS**, no lockfile change (no dependency touched).
- `bun run build`: **PASS**.
- `bunx tsc --noEmit`: **PASS**, zero errors across the entire project (run explicitly, since this toolchain's `vite build` does not itself type-check).
- `git diff --check`: **PASS**, no whitespace errors.
- `bun run lint` on the four changed files: after fixing two genuine (non-CRLF) formatting issues the change itself introduced, every remaining finding — confirmed by exact line number — is either the same pre-existing repo-wide CRLF noise present since `report1`, or one of two pre-existing findings on lines this change did not touch (inside `RowCorrectionEditor`, untouched from `report1.4`). No new substantive finding.
- Forbidden backend-ref search (`wwgqnshcgbukqczqblsm`, `drravyyauixltoihzmwo`) and a secret/credential pattern scan across the diff: **PASS**, no match.
- Targeted source-level checks against `instruction1.5` §12's list:
  1. *Ordinary product stock tracking cannot select an unrelated Inventory item in the merchant UI* — confirmed by removal: `listInventoryItemsForPicker` no longer exists, and `InventoryLinkFlow` no longer renders a `Select` of items; the only Inventory item id ever passed to `assign_or_replace_catalog_inventory_link` from this UI is one this same code path just created.
  2. *A newly stock-tracked product receives its own dedicated Inventory identity through governed paths* — confirmed: `createInventoryItem` (existing insert path) is called with `name: product.name` before every link attempt that doesn't already have a `createdItem` in local state.
  3. *Another ordinary product cannot silently reuse that same dedicated Inventory identity* — **true only within this UI's own standard path** (§3); not true against a direct/concurrent governed RPC call, which is exactly the disclosed bounded backend gap.
  4. *Disabling/changing stock tracking does not erase historical movements or silently corrupt audit truth* — confirmed unchanged: `remove_catalog_inventory_link` and the D-047 guard inside both preview branches were not modified in any way.
  5. *Opening Stock import still resolves and writes only through Inventory* — confirmed: zero lines of `src/server-functions/inventory-import.ts` or `src/routes/_authenticated/inventory.opening-stock-import.tsx` were changed.
  6. *Catalog import correction summary updates truthfully after inline correction* — confirmed by construction (§5.2): the summary and the confirm section now read the identical array.
  7. *Review copy no longer falsely requires re-upload for inline-fixable rows* — confirmed (§5.1): the inline-fixable branch renders the working corrector, not the re-upload copy.
  8. *No new Catalog stock field or parallel quantity truth was introduced* — confirmed: no column, no server function, and no client mutation in this change writes anything resembling a quantity onto `catalog_products` or any Catalog table.
- No production-mutating test was run, and none was needed to establish the above — all eight checks are structural/source-level, consistent with this stage's disclosed pre-existing `vitest` credential-gate limitation (`report1.3`, `report1.4`) which still applies unchanged.

## 9. Confirmation of No Mutation Outside Scope

`supabase/config.toml` untouched (`gysgzasfcjvtrgaigfyn`). `.lovable/**`, `.env*` untouched. No Supabase migration, schema, RLS, grant, or Auth change was made or attempted. No AWS/Lambda deployment. No Lovable publication. No domain/DNS change. No direct push to `starter-supab-shell/main` — only the named mission branch was pushed. No production data was read, written, or repaired (§10 below is a documented plan only, not an executed action). PR `starter-supab-shell#4` was not merged, approved, or self-approved.

## 10. Production Test-Data Repair — Still Pending, Not Performed

Known corrupted state (per `instruction1.5` §6): `Mango` → Inventory item `AVT Tea Powder`; `Milma Milk` → the same item; one `opening_stock +5` movement on that item created during the Founder's Opening Stock runtime test.

**Governed repair mechanism identified:** once PR `starter-supab-shell#4` is merged and live, the corrected flow itself (§4) is the intended repair path — for whichever of the two products is safe to unlink, the Founder can use "Stop tracking stock" (removes the shared link) and then "Start tracking stock" again (creates that product's own fresh, dedicated item). No special command is needed for this part.

**The exact constraint this session could not resolve, and why:** the existing D-047 dependent-history guard (§2, unmodified and correctly protective) rejects "Stop tracking stock" with `DEPENDENT_HISTORY_CONFLICT` for a product whose `inventory_link_established_at` is *at or before* the `+5` movement's `occurred_at`. Whether this blocks `Mango`, `Milma Milk`, or both depends on the exact recorded timestamps of each product's link event relative to that movement — data this session cannot read, because the `supabase` MCP server requires an authorization flow this non-interactive session cannot complete (per the environment's own instruction, no workaround was attempted, and no direct SQL read was substituted for it). **This is a genuine, disclosed evidence gap, not an assumption either way.**

**Founder steps, covering both possible outcomes:**

1. After merge, open `Mango`'s product page and click "Stop tracking stock."
   - **If it succeeds:** click "Start tracking stock" and give it its own base unit — `Mango` now has its own dedicated item, unaffected by `AVT Tea Powder`'s history.
   - **If it is rejected with a message about existing history:** stop — do not force it. This product's current link cannot be safely removed through the governed path without deciding what happens to the `+5` movement's history first.
2. Repeat the same check independently for `Milma Milk`.
3. Whichever product's `AVT Tea Powder` link the Founder decides is the "true" original owner of the `+5` movement (if either) can reasonably stay linked to it going forward, once the *other* product has been moved to its own dedicated item.
4. **If both products are rejected by step 1/2** (i.e. both links predate the movement), the `+5` movement cannot be safely detached from either product through any existing governed action in this codebase. This is the bounded case that would require a genuine Mission Control/Founder decision — and, if the movement must move to a different item entirely, a bounded backend/data-correction action outside this instruction's authority. **No such action was performed or attempted here.**

This item is reported, not resolved, per `instruction1.5` §6's explicit "stop and report the bounded requirement; do not perform it."

## 11. Build Later — Confirmed Not Implemented

None of the following were implemented, touched, or designed toward in this change, consistent with `instruction1.5` §9: product variants sharing stock, recipes/BOM, ingredient consumption, bundles/kits, unit/pack conversion architecture, shared raw-material stock pools, manufacturing/assembly, advanced warehouse/bin/location modeling, POS changes, accounting redesign, or any unrelated Catalog/Inventory redesign.

## 12. Genuine Remaining Blocker

Two items, both explicitly disclosed above rather than hidden, and both matching `instruction1.5` §15's own listed Stop conditions:

1. **Reliable one-to-one enforcement requires a bounded Supabase migration** (§3) — either a partial unique index or a materially changed `assign_or_replace_catalog_inventory_link`. Not performed; the exact smallest change is specified above for a separate, explicit authorization.
2. **Current production test-data cleanup cannot be confirmed safe through existing governed paths alone** without first reading the exact `inventory_link_established_at` / movement `occurred_at` values this session had no authenticated access to read (§10). The repair mechanism itself (unlink + re-link via the corrected flow) is identified and, for at least one of the two products, may well work cleanly — but this session cannot certify which, or whether both are blocked, without that read.

Neither blocker reflects incomplete engineering within this instruction's authorized scope — the merchant-facing UX correction, and both Catalog import UX fixes, are complete and verified (§4, §5, §8).

## 13. Final Result

`BLOCKED — PRODUCT-INVENTORY IDENTITY CORRECTION REQUIRES BOUNDED BACKEND AUTHORIZATION`
