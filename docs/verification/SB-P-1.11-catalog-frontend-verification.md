# SB-P-1.11 Catalog Frontend — Verification Evidence

**Mission:** SB-P-1.11-UI-1R — Hold Release & Verified Lovable Build-Mode Execution
**Companion Report:** `communication/live/report1.63.md`
**Authorized Lovable project:** `f3e992ec-06df-4d49-b157-b92ec064c078`
**Resulting Lovable commit:** `b34d56e1cd3907125ddb96ded1e2f6e6e74a8b87`
**Mission branch:** `mission/SB-P-1.11-UI-1R`

This document records the detailed verification evidence for the Phase 1 catalog frontend, required by `instruction1.45.md` §12. It is a companion to `report1.63.md`, not a duplicate — this file focuses on itemized checklist evidence; the report contains the narrative and mission-governance record.

---

## 1. Files Created / Modified

| File | Type | Lines |
|---|---|---|
| `src/integrations/supabase/catalog.ts` | New | ~440 |
| `src/routes/_authenticated/catalog.tsx` | New | ~40 |
| `src/routes/_authenticated/catalog.index.tsx` | New | ~700 |
| `src/routes/_authenticated/catalog.$productId.tsx` | New | ~1,725 |
| `src/components/authed-header.tsx` | Modified (2 nav-link additions only) | +16 |
| `src/integrations/supabase/types.ts` | Modified (schema-driven regeneration) | +912 |
| `src/routeTree.gen.ts` | Framework-regenerated (local build, not hand-edited) | +72 |

`package.json` was **deliberately excluded** from this list — see `report1.63.md` §7.

---

## 2. Verification Checklist (`instruction1.45.md` §11)

| # | Requirement | Result | Evidence |
|---|---|---|---|
| 1 | Authentication and protected-route behavior remain intact | PASS | `_authenticated/catalog.tsx` mirrors `inventory.tsx`'s existing guard exactly; no auth code touched; `bun run dev` smoke check confirms `/catalog` renders the same guard shell as `/inventory`/`/dashboard` |
| 2 | Owner can open the catalog workspace | PASS | `/catalog` route renders `CatalogWorkspace`, gated the same way every other `_authenticated` route is |
| 3 | Search, list continuation, archived filtering, product read work | PASS | `catalog_products_search` wired with exact keyset cursor semantics; `p_include_archived` toggle present; `catalog_product_read` wired to the detail route |
| 4 | Every implemented write action calls the correct RPC | PASS | Full mapping table in `report1.63.md` §5, independently verified against live `pg_proc` signatures |
| 5 | No direct client table write exists | PASS | `catalog.ts` reviewed line-by-line (`report1.63.md` §4) — every mutation is a `supabase.rpc(...)` call; the only direct `.from(...)` calls are `catalog_categories` (read, RLS-permitted) and `inventory_items` (read, pre-existing pattern) |
| 6 | No service-role secret or client bundled into browser code | PASS | `catalog.ts` imports only the existing anon-key `supabase` client from `client.ts`; no new client instance, no key material |
| 7 | Create product excludes selling price | PASS | `create_catalog_product` args in `createProduct()` never include a price field; `createProductSchema` (zod) has no price field |
| 8 | Category archive confirmation behaves correctly | PASS | `ArchiveCategoryFlow` implements the exact two-step: first attempt without confirmation → `CONFIRMATION_REQUIRED` → re-submit **same** idempotency key with `p_confirm_uncategorize: true` |
| 9 | Archive/reactivate/delete are clearly distinguished | PASS | Three separate buttons/icons (`Archive`, `RotateCcw`, `Trash2`) with distinct copy and a shared but action-specific `AlertDialog`; Delete disabled/hidden whenever any history exists |
| 10 | Price/tax/reference-cost actions remain separate | PASS | Three independent dialogs (`PriceDialog`, `TaxDialog`, `CostDialog`), each its own RPC call and idempotency key |
| 11 | Reference cost is absent from list/search UI | PASS | `ProductRow` (list) renders only `selling_price`; `current_reference_cost` is rendered only in `ProductDetailView`. Structurally reinforced: `catalog_product_summary` (the search/list row type) has no reference-cost column at all in the deployed schema |
| 12 | D-068 preview, required-price branch, confirm, removal, expiry, stale-state handling work | PASS | See §3 below for the full D-068 trace |
| 13 | Duplicate submission is prevented | PASS | Every mutation button is `disabled={mutation.isPending}`, matching the existing repo-wide pattern |
| 14 | Idempotency keys persist across unknown-outcome recovery | PASS | `runCommandWithRecovery` re-uses the exact same `idempotencyKey` for the `get_catalog_command_outcome` reconciliation call; a fresh key is minted only after a genuinely new attempt begins |
| 15 | Responsive and accessible behavior is acceptable | PASS (pattern-reuse basis) | See `report1.63.md` §9; no dedicated device/screen-reader lab pass performed, disclosed as such |
| 16 | Existing dashboard functionality is not broken | PASS | Full existing 62-test suite passes unmodified (`report1.63.md` §8); `authed-header.tsx` diff limited to two additive nav links |
| 17 | Build completes without unauthorized dependency or configuration change | PASS with one disclosed finding | Build/tsc/tests all pass; the one dependency-version drift found (`report1.63.md` §7) was excluded from the return, not silently accepted |

---

## 3. D-068 Trace (Inventory Link Preview/Confirm)

| Step | Backend call | Client behavior |
|---|---|---|
| 1. Merchant opens "Link an inventory item" / "Replace" / "Remove" | none yet | Dialog opens; for assign/replace, an inventory-item picker is populated via a direct read of `inventory_items` |
| 2. Merchant picks a target (assign/replace) or confirms intent (remove) and clicks "Review this change" | `preview_catalog_inventory_link_change(p_product_id, p_requested_action, p_target_inventory_item_id?)` — **no idempotency key** | On `rejected`, the mapped message is shown and no further call is made. On `completed`, a confirmation `AlertDialog` opens showing current vs. proposed link/unit/price and a live 15-minute countdown from `expires_at` |
| 3a. If `price_confirmation_required` | — | A required price input appears; the confirm button is disabled until a valid (`> 0`) price is entered |
| 3b. Merchant clicks "Yes, save link" / "Yes, remove link" | `assign_or_replace_catalog_inventory_link(p_idempotency_key, p_preview_token_id, p_confirmed_price?)` or `remove_catalog_inventory_link(p_idempotency_key, p_preview_token_id)` — **fresh idempotency key**, minted only at this step | On `completed`, dialog closes and the product detail refetches. On any `rejected` (including `STALE_STATE`), the preview token is discarded (`discardPreview()`) and the merchant must reopen the flow from step 1 — a rejected token is never resubmitted |
| Cancel at any point | none | State resets; no call is made; the backend's own preview-token superseding logic handles any abandoned token on the next preview |

This matches the Engineering Contract §12 nine-step commit model on the backend side (already deployed, unmodified by this mission) and the D-068 preview/confirm UI requirement on the frontend side exactly.

---

## 4. Rejection Category Coverage

All 11 categories implemented in the deployed backend (confirmed via direct `pg_proc` source inspection, `report1.63.md` §2) are mapped to a distinct, merchant-safe message in `catalog.ts`'s `rejectionMessage()`:

`PERMISSION_DENIED`, `NOT_FOUND`, `INVALID_INPUT`, `UNIQUENESS_CONFLICT`, `IDEMPOTENCY_CONFLICT`, `STALE_STATE`, `PRICE_CONFIRMATION_REQUIRED`, `CONFIRMATION_REQUIRED`, `LIFECYCLE_CONFLICT`, `DEPENDENT_HISTORY_CONFLICT`, `OPERATION_NOT_PERMITTED`.

No raw backend string, stack trace, or database error is ever surfaced to the merchant — confirmed by direct code review (`report1.63.md` §4).

---

## 5. Build, Type-Check, and Test Evidence

```
bun install --frozen-lockfile
  Checked 469 installs across 600 packages (no changes)

bun run build
  ✓ built in 6.01s
  (only pre-existing chunk-size and inlineDynamicImports advisories, unchanged from report1.62.md)

bunx tsc --noEmit
  (zero output — zero errors)

bun run test
  Test Files  17 passed (17)
  Tests  62 passed (62)
```

Local runtime smoke check (`bun run dev`, unauthenticated):

| Route | HTTP status |
|---|---|
| `/` | 200 |
| `/catalog` | 200 |
| `/inventory` | 200 |
| `/catalog/00000000-0000-0000-0000-000000000000` | 200 |

No error text (`TypeError`, `ReferenceError`, stack trace) found in any response body.

---

## 6. Excluded Scope — Confirmed Absent

Confirmed by direct review of all 8 changed files (`report1.63.md` §4): no images/file upload, no CSV/Excel import, no scheduled/pending price changes, no WhatsApp/voice/photo input, no Manager/Employee permission code or UI, no POS integration, no analytics, no AI recommendation surface, no new database object of any kind, no public-route change, no publish/deploy call.

---

## 7. Deviations and Findings

1. **Unauthorized dependency-version drift** — `report1.63.md` §7. Excluded from the source return.
2. **`business_tax_settings` has no accepted read path** — `report1.63.md` §6. Handled as an honestly write-only control; recommended for a future, separately authorized mission.

Neither finding blocks this mission's `PASS` verdict; both are disclosed, not silently resolved or hidden.
