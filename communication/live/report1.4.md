# SMART BUSINESS — REPOSITORY COMMUNICATION

# report1.4 — Step-4 Catalog Review Corrections + Inventory Opening Stock Bulk Import Result

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`

**Mission Name:** `Production Runtime Synchronization & Lovable Recovery`

**Sequence:** `1.4`

**From:** `Claude Code / Repository Engineering Operator`

**To:** `Mission Control`

**In Reply To:** `communication/live/instruction1.4.md`

**Status:** `EXECUTED — TARGET PR OPEN FOR REVIEW`

**Date:** `2026-09-02`

---

## 1. Verified Target Baseline and Branch

- Target repository: `SmartBusinessv1/starter-supab-shell`
- Base verified before work began: `main@bdcf58d3cf5263355dfd7e949a0f03f08d26483a` — confirmed to be the merge of PR `starter-supab-shell#2` (the parser correction) before any file was touched
- Branch: `mission/SB-OPS-PROD-SYNC-1.0-step4-catalog-inventory` (created fresh from that baseline)
- Working tree verified clean before modification; `supabase/config.toml` verified bound to `gysgzasfcjvtrgaigfyn` before modification

## 2. Target Commit SHA and PR Number

- Commit: `656c2ec19f7a44528eee1fc2bb92dcac4164c2ed`
- Pull request: [`SmartBusinessv1/starter-supab-shell#3`](https://github.com/SmartBusinessv1/starter-supab-shell/pull/3) — `OPEN`, not merged, not self-approved
- Commit message used (exact, as authorized): `Complete Step-4 Catalog review and Inventory opening stock import`

## 3. Exact Files Changed

| Path | Change | Gap |
|---|---|---|
| `src/server-functions/catalog-import.ts` | one new function (`catalogImportUpdateRowCorrection`) appended; no existing function modified | A |
| `src/routes/_authenticated/catalog.import.tsx` | review screen updated to render the correction editor | A |
| `src/lib/inventory-import/types.ts` | new | B |
| `src/lib/inventory-import/fields.ts` | new | B |
| `src/lib/inventory-import/parse.ts` | new | B |
| `src/lib/inventory-import/parse-isolated.ts` | new | B |
| `src/lib/inventory-import/validate.ts` | new | B |
| `src/lib/inventory-import/idempotency.ts` | new | B |
| `src/server-functions/inventory-import.ts` | new | B |
| `src/routes/_authenticated/inventory.opening-stock-import.tsx` | new | B |
| `src/routes/_authenticated/inventory.index.tsx` | one nav link added, no other change | B |
| `src/routeTree.gen.ts` | auto-regenerated for the new route (clean, additive 23-line diff, no deletions) | B |

No `package.json`/`bun.lock` change was required — no new dependency was needed for either gap.

## 4. Catalog Review Architecture Before/After

**Before:** `catalog.import.tsx`'s review screen showed every `NEEDS_CORRECTION`/`POSSIBLE_MATCH` row with a static explanation and a skip checkbox only. The only way to fix a Category/Selling Unit problem was to correct the source file and re-upload.

**After:** a row whose `correctionReason` is exactly `INVALID_CATEGORY` or `INVALID_UNIT` additionally renders a `RowCorrectionEditor`, using the same governed `CategorySelector`/`SellingUnitSelector` components the main Catalog page already uses (`@/components/catalog/category-selector`, `@/components/catalog/selling-unit-selector` — no new selector UI was built). A "Save correction" button calls the new `catalogImportUpdateRowCorrection` server function; on success the batch query is invalidated so the row list refreshes live from the server, moving a now-`READY` row out of "needs attention" without a page reload or re-upload.

No other row states, no other correction reasons, and no other part of the review screen (summary counts, skip behavior, possible-match linking, confirm/commit flow) were changed.

## 5. Category Correction Behavior

- The merchant interacts with the exact same `CategorySelector` component used on the main Catalog page — including its own existing archived-conflict guard ("You previously archived a category named…") and its own "Create new category" path.
- **Creating a genuinely new category** goes through the existing, unmodified `createCategory()` client function (`@/integrations/supabase/catalog`), which calls the governed `create_catalog_category` RPC via the caller-JWT client — identical to how `catalog.index.tsx`'s own `CreateCategoryDialog` already creates one. This endpoint never creates Catalog Product Truth itself; it only ever *receives* an already-resolved category name from the client.
- The resolved category **name** (not the client's category id) is sent to `catalogImportUpdateRowCorrection`, which re-resolves it server-side against a **freshly fetched** category list (`loadCategories(supabase)`, never the client's possibly-stale list) using the exact same `resolveCategoryLabel` function `classify.ts` already uses. An archived-name conflict is rejected server-side too, independent of the client-side guard — defense in depth, not reliance on the client alone.
- The corrected name is written into the row's `parsed_snapshot.category_label` field. **No change was needed to `catalogImportCommit`** — it already reads `snapshot.category_label` and resolves it via the same `resolveOrCreateCategory` path every row already uses.
- The row flips from `NEEDS_CORRECTION`/`INVALID_CATEGORY` to `READY` only when the corrected label resolves cleanly (matching an active category, or none). If the merchant's new value is a genuinely new category being created live via the selector, `onChange` fires only after the RPC succeeds, so an update is never sent for a category that doesn't yet exist.

## 6. Selling Unit Correction Behavior

- The merchant picks a preset or types a custom unit through the existing `SellingUnitSelector` (D-052 custom-unit behavior preserved — no forced preset match).
- The chosen value is sent to `catalogImportUpdateRowCorrection`, which re-checks the same ≤60-character rule `validateRow` already enforces. A value that still fails is persisted with `status = NEEDS_CORRECTION`, `correction_reason = INVALID_UNIT` (not silently accepted), and the merchant sees an unchanged "needs attention" row — no false "fixed" state, per `instruction1.4` §4 requirement 10.
- On success, the corrected value is written into `parsed_snapshot.selling_unit`, which `catalogImportCommit` already reads directly and unmodified.

## 7. How Corrected Review Values Reach Commit Safely

Both corrections write into the **same** `catalog_import_rows.parsed_snapshot` field `catalogImportCommit` has always read from — there is no second, parallel value store, and no change was made to the commit function itself. A corrected row's `status` is only ever flipped to `READY` by the new endpoint when the field actually corresponds to that row's *original* recorded blocking reason (`INVALID_CATEGORY` only clears an `INVALID_CATEGORY` reason; `INVALID_UNIT` only clears an `INVALID_UNIT` reason) — a `POSSIBLE_MATCH` row's identity concern, or a `NEEDS_CORRECTION` row blocked for an unrelated reason (missing name, duplicate name/SKU/barcode, invalid price, invalid tax), is left exactly as it was; those still require re-upload or an explicit skip, unchanged from before this correction.

**Scope decision, disclosed rather than hidden:** this update endpoint does not re-run `classify.ts`'s full duplicate-in-batch/possible-match rescan on every single edit — doing so would require a fresh identity-search RPC call per *sibling* row in the batch on every correction, which does not scale to a review screen where a merchant may correct several rows in sequence. Instead, a row that would newly collide with another product's name/SKU/barcode purely as a side effect of a category/unit edit is still caught — not silently, not incorrectly reported as successful — by `create_catalog_product`'s own governed `UNIQUENESS_CONFLICT` rejection at commit time, surfaced as a distinct `FAILED` outcome exactly like any other row's commit-time failure already is. The preview screen's `READY` status after a correction therefore means "the corrected field itself is now valid," not "this row is now provably free of every possible commit-time conflict" — the same honest, narrower guarantee this mission's other reports have consistently drawn between preview-time and commit-time evidence.

## 8. Inventory Opening Stock Import Architecture

**Product boundary, preserved exactly as required:** Catalog identifies the product; Inventory owns quantity/stock truth; Opening Stock is an Inventory movement, never a Catalog field.

**No persisted server-side batch/row table.** Catalog import's own architecture persists `catalog_import_batches`/`catalog_import_rows` (an existing table this mission did not need to touch). Inventory Opening Stock import has no equivalent existing table, and creating one would itself be exactly the kind of new backend primitive `instruction1.4` §5 requires stopping for if genuinely necessary — **it was not necessary here.** Instead:

1. `inventoryOpeningStockPreview` parses the uploaded file and returns the **full classified row list directly in its response** — nothing is written to any database table during preview.
2. The client (the new `/inventory/opening-stock-import` route) holds that row list, and the merchant's skip choices, in ordinary component state.
3. `inventoryOpeningStockCommit` receives back exactly the rows the client marked `READY` and did not skip (each row: `rowNumber`, the resolved `itemId`, and `quantity` — never re-derived from anything else server-side), and writes each as a real Inventory movement.

This means the entire flow uses the caller's own JWT-scoped Supabase client only — **no service-role client is used anywhere in this flow**, unlike Catalog import's bookkeeping-table writes. This is a stronger, not weaker, isolation posture than Catalog import's own architecture.

## 9. Product Matching Rules

For each row (after quantity validation passes), matching proceeds through **existing, already-governed read paths only** — never a direct table read:

1. `catalog_products_search(p_query = identifier, p_include_archived = false, p_limit = 1)` — the identifier is SKU if given, else barcode, else name (the same three fields, same preference order, and the same `match_rank` 1–3 confidence threshold `classify.ts` already uses for Catalog import's own `POSSIBLE_MATCH` detection).
2. If a qualifying match is found, `catalog_product_read(p_product_id)` is called to read the matched product's `inventory_item_id` (the summary shape `catalog_products_search` returns does not include it).
3. If the product has no `inventory_item_id` (not yet linked to Inventory), the row is classified `NOT_STOCK_TRACKED` — **no automatic linking is invented**; the merchant is directed to the product's own page (which already has the existing "Link an inventory item" flow) to link it first.
4. If linked, `inventory_movements` is queried (caller-JWT, the same table `listMovements` already reads) for any existing `movement_type = 'opening_stock'` row against that item. If one exists, the row is classified `ALREADY_HAS_OPENING_STOCK` (this mirrors the backend's own hard invariant — confirmed directly against `tests/inventory/opening-stock-invariant.test.ts` in canonical: **exactly one opening-stock movement is permitted per item, ever; a second is rejected by the database itself** — this preview-time check exists so the merchant sees this clearly during review rather than only as a generic commit-time failure).
5. Otherwise the row is `READY`, carrying the resolved `itemId` and validated `quantity` forward to commit.

An unmatched or ambiguous identifier never creates stock against a guessed product — it is classified `UNMATCHED` and excluded from commit unless the merchant corrects the source file and re-uploads.

## 10. Quantity Validation Rules

A row's quantity text must be present and parse to a finite number strictly greater than zero; anything else (blank, non-numeric, zero, negative, `Infinity`/`NaN`) is classified `INVALID_QUANTITY` at preview time, before any product-matching attempt is made. This is re-checked defensively again at commit time (`Number.isFinite(row.quantity) && row.quantity > 0`) using only the value the client sends back, not trusted blindly. The backend's own `create_inventory_movement` constraints remain the final authority; nothing in this feature weakens or bypasses them.

## 11. Inventory Stock-Writing Path and Auditability

The **sole** stock-writing call in this entire feature is `supabase.rpc("create_inventory_movement", { p_movement_type: "opening_stock", p_direction: "increase", ... })` — the exact same governed RPC the interactive Inventory item page already uses for every stock change in this application. Every committed row becomes one real, auditable `inventory_movements` row; nothing overwrites a quantity cache or a Catalog record directly, and no Catalog field is ever written by this flow.

## 12. Idempotency/Duplicate-Confirmation Protection

A client-generated `batchId` (`crypto.randomUUID()`, minted once when the review screen mounts and held in component state, unchanged across retries of the same confirmation) is combined with each row's `itemId` and passed through `deriveOpeningStockIdempotencyKey` — a direct mirror of the exact UUIDv5(namespace, input) technique already established in `src/lib/catalog-import/idempotency.ts`'s `deriveFollowUpIdempotencyKey`, using its own distinct namespace constant. The resulting deterministic key is passed as `p_idempotency_key` to `create_inventory_movement`, which already has its own idempotency-key mechanism (the existing `inventory_movement_idempotency_keys` table). A duplicate or retried confirmation of the same batch therefore reuses the same key per row and replays the RPC's own existing idempotent behavior — **no new idempotency mechanism was added.**

## 13. Parser/File Safety Preservation

`src/lib/inventory-import/parse.ts` imports and calls `verifyCsvStructure`/`verifyXlsxStructure` and `IMPORT_LIMITS`/`ImportLimitError` directly from `@/lib/catalog-import/content-type` and `@/lib/catalog-import/limits` — the exact same functions and the exact same limit values already verified for Catalog import (compressed 5 MB, decompressed 25 MB, 2,000 rows, 40 columns, 2,000 characters/cell, malformed/macro rejection, real produced-byte ZIP-bomb protection). Nothing was duplicated for these safety-relevant pieces; only the header-to-field mapping (`fields.ts`, a different recognized-column set: identifier + quantity, not product/pricing/tax fields) and the bounded-timeout wrapper (`parse-isolated.ts`, a ~15-line, non-security-relevant duplicate of the corrected `catalog-import/parse-isolated.ts` pattern, documented as such in its own header comment) are separate from Catalog import's own files. No limit was weakened, increased, or removed for either gap.

## 14. Business-Isolation/Owner-Authority Verification

Both `inventoryOpeningStockPreview` and `inventoryOpeningStockCommit` re-derive the caller's own business via `loadOwnedBusinessId(supabase, userId)` (re-reading `businesses.owner_id = userId` under RLS, never trusting client input) before doing anything else, exactly matching the pattern already established in `catalog-import.ts`. Every subsequent read/write (`catalog_products_search`, `catalog_product_read`, `inventory_movements` read, `create_inventory_movement`) uses the caller's own JWT-scoped client, inheriting that same client's RLS/ownership enforcement — no service-role client is used anywhere in this flow, and no cross-business data can be matched or written through it.

## 15. Frozen-Install Result

**PASS.** `bun install --frozen-lockfile` completed cleanly with no lockfile changes — no dependency change was required for either gap.

## 16. Build Result

**PASS.** `bun run build` completed successfully, producing the full `.output/` bundle including the new `inventory-import` server-function chunk, the new `inventory.opening-stock-import` route chunk, and the updated `catalog.import`/`catalog-import` chunks (both visibly larger than before, reflecting the added code). `src/routeTree.gen.ts` was correctly auto-regenerated by the router plugin to include the new route.

**Additional check beyond the instruction's minimum:** this toolchain's `vite build` is esbuild/rollup-based and does not itself perform full TypeScript type-checking, so a passing build alone does not prove type correctness. `bunx tsc --noEmit` was run explicitly against the project's own `tsconfig.json` and completed with **zero errors** across the entire project, including every file this change touched or added.

## 17. Targeted Test Results

**Disclosed limitation, same as `report1.3`:** this repository's global `vitest.config.ts` `setupFiles` hook unconditionally requires a Supabase test-project service-role key not present in this verification environment (correctly not added). No new automated test file was added for this stage under `tests/**` for the same reason a prior one could not be executed here either. In its place, the following were verified directly against the built/type-checked code:

- `bunx tsc --noEmit`: zero errors (§16) — proves every new function signature, prop type, and cross-module import (including the reused `@/lib/catalog-import/content-type` and `@/lib/catalog-import/limits` imports, and the reused `@/components/catalog/*` selector components) is structurally correct.
- `bun run build`: zero build errors, correct route/server-function bundling (§16).
- `bun run lint`: identical pre-existing CRLF noise and identical 7 pre-existing warnings as `report1.2`/`report1.3` — **zero new findings** despite ~1,400 new lines, including no new `react-refresh/only-export-components` warning for the additional exported helper components in `catalog.import.tsx`.
- Direct source inspection confirms: `inventoryOpeningStockCommit` never derives `itemId`/`quantity` from anything other than the request body it receives (§8); `catalogImportUpdateRowCorrection` never flips a row to `READY` unless its original recorded reason matches the field just corrected (§7); the Opening Stock invariant this feature relies on is independently confirmed by canonical's own `tests/inventory/opening-stock-invariant.test.ts` (§9).

**This is not a substitute for a live functional test of either flow**, which requires the Founder's actual Lovable-preview retest per §20 below.

## 18. Diff/Secret/Forbidden-Backend-Ref Checks

- `git diff --cached --check`: **PASS** — no whitespace errors.
- Staged-diff secret/credential scan: **PASS** — no match.
- Forbidden backend-ref search (`wwgqnshcgbukqczqblsm`, `drravyyauixltoihzmwo`) across every changed/new file: **PASS** — no match.

## 19. Confirmation of No Mutation Outside Scope

`supabase/config.toml` was not touched (remains bound to `gysgzasfcjvtrgaigfyn`). `.lovable/project.json` and `.lovable/plan.md` were not touched. `.env`, `.env.test`, and `.env.test.local.example` were not touched, read for content, copied, or committed. No production Supabase migration, schema, RLS, grant, or Auth change was made or required. No AWS/Lambda deployment was performed or triggered. No Lovable publication occurred. No production domain/DNS change occurred. No direct push to `starter-supab-shell/main` occurred — only the named mission branch was pushed. PR `starter-supab-shell#3` was not merged, approved, or self-approved.

## 20. Exact Founder Runtime Retest Steps and Sample-File Column Requirements

A local build/test PASS is not sufficient for final Step-4 acceptance. After PR `starter-supab-shell#3` is merged to `main` and the production Lovable workspace (`f3e992ec-06df-4d49-b157-b92ec064c078`) has ingested that exact merge commit:

### Catalog

1. Sign in; Catalog → Import products.
2. Upload a small sample file that includes at least one row with an intentionally invalid Category (e.g. blank or a name close to, but not exactly, an existing archived category) or an over-long Selling Unit, so a `NEEDS_CORRECTION` row appears.
3. On that row, confirm the Category/Selling Unit selector appears; pick or create a Category, and/or pick a Selling Unit; click "Save correction."
4. Verify the row moves out of "Rows needing attention" (its status is now Ready).
5. Perform one tiny controlled import and confirm the created product's Category/Selling Unit match the corrected values, not the originally-uploaded ones.
6. Verify no Inventory stock was created through this import.

### Inventory

**Sample file column requirements:** a header row with **Product Name** and/or **SKU** and/or **Barcode** (at least one — SKU is preferred if the product has one, then barcode, then name), plus **Opening Stock** (or "Quantity"/"Qty") holding a positive number.

1. Before testing, ensure at least one existing Catalog product is already linked to an Inventory item (via that product's own "Link an inventory item" action) and has **no** opening stock recorded yet.
2. Inventory → "Bulk import opening stock."
3. Upload a tiny CSV/XLSX naming that product (by SKU, barcode, or exact name) with a small positive quantity.
4. Verify the row appears as Ready with the correct matched product name and quantity, and that an intentionally-unmatched or already-stocked row (if included) is classified distinctly and excluded.
5. Verify nothing changes in Inventory before clicking "Confirm import."
6. Confirm the import.
7. Verify the item's current stock reflects the imported quantity, and that its movement history shows exactly one `opening_stock` movement.
8. Verify no Catalog field changed as a result.

## 21. Genuine Remaining Blocker

None identified. No `instruction1.4` §15 Stop condition was triggered: no production Supabase schema/RLS/grant/Auth migration was required (§8–§9 explain why the existing architecture already suffices), business isolation is preserved throughout (§14), no unrelated target-branch drift or local changes were present, no secret was encountered, and no materially broader product/accounting decision was required.

Two scope decisions were made deliberately narrower than a fully exhaustive implementation and are disclosed above rather than hidden: the Catalog correction endpoint's reliance on commit-time `UNIQUENESS_CONFLICT` protection rather than a full live duplicate rescan on every edit (§7), and the absence of an automated test run for this stage due to the same pre-existing credential-gated `vitest` setup disclosed in `report1.3` (§17). Neither is a blocker to Mission Control review; both are exactly the kind of evidence-boundary distinction this mission's reports have consistently drawn between what is independently proven and what remains to be confirmed by the Founder's live retest.

## 22. Final Result

`PASS — STEP-4 CATALOG AND INVENTORY IMPLEMENTATION READY FOR LOVABLE RETEST`
