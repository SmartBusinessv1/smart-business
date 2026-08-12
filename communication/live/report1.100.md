# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-FWR-5 — INVENTORY COMPOSITE FK ORDER MICRO-CORRECTION

**Report ID:** report1.100
**Mission ID:** SB-P-1.11-FWR-5
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing
**Workstream:** Founder Workflow Reconciliation
**Authorized By:** `communication/live/instruction1.94.md`
**Mode:** PLAN MODE — MICRO-CORRECTION ONLY
**Implementation Authority:** NONE
**Database Migration Authority:** NONE
**Production Mutation Authority:** NONE

---

## 1. Mission Identity and Reviewed Commit

Exact latest merged `main` SHA reviewed:

`9597468263fa9ff03318755809d221faedbb7d00` (`Authorize SB-P-1.11 Inventory composite FK order micro-correction (#220)`)

confirmed via `git fetch origin main` immediately before beginning work to match `origin/main`'s head.

This report corrects exactly one defect — the Inventory-side composite foreign-key column order in `communication/live/report1.98.md`'s BKR-3 physical persistence contract — identified by the merged Supabase Backend Confirmation Review in `communication/live/report1.99.md` (NBK-1 / §5 BKR-3 finding). `communication/live/report1.98.md` is preserved unedited as audit history; this report is the bounded corrective addendum superseding only its Inventory-side composite FK clauses.

---

## 2. Exact Repository Evidence for the Canonical Inventory Key Order

Verified directly against two independent sources, both confirming the identical order (repository evidence prevailing over prior report wording, per instruction1.94.md §2):

**1. Canonical migration** — `supabase/migrations/20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql`, line 31:

```sql
CONSTRAINT inventory_items_id_business_uniq UNIQUE (id, business_id),
```

**2. Live dedicated test-project schema** (`drravyyauixltoihzmwo`), queried directly this mission:

```
conname                          | contype | def
----------------------------------|---------|----------------------------
inventory_items_business_name_uniq | u       | UNIQUE (business_id, name)
inventory_items_id_business_uniq   | u       | UNIQUE (id, business_id)
inventory_items_pkey               | p       | PRIMARY KEY (id)
```

`public.inventory_items` carries exactly one composite unique key eligible as a foreign-key reference target: `UNIQUE (id, business_id)`. No `UNIQUE (business_id, id)` key exists, has ever existed in the canonical migration, or is present on the live test project. This confirms report1.99.md §5.1/§9's finding exactly.

For contrast, and to confirm this defect is Inventory-specific and does **not** extend to the Catalog-side references: `catalog_products` carries `catalog_products_business_id_uniq UNIQUE (business_id, id)` (re-confirmed live this mission, unchanged from the evidence already recorded in `report1.96.md`'s prior mission) — the opposite order, and the order `report1.98.md`'s Catalog-side composite FKs already correctly use. No Catalog-side ordering defect exists; instruction1.94.md §4 correctly scopes this correction to the Inventory side only, and no evidence found this mission suggests otherwise.

---

## 3. Incorrect Prior Architecture Form

`communication/live/report1.98.md` §5.2 specifies (quoted verbatim):

```
FOREIGN KEY (business_id, matched_inventory_item_id) REFERENCES inventory_items (business_id, id) ON DELETE RESTRICT   -- nullable, same-business only
FOREIGN KEY (business_id, resolved_inventory_item_id) REFERENCES inventory_items (business_id, id) ON DELETE RESTRICT  -- nullable, same-business only
```

and its accompanying prose incorrectly states these use "the already-existing composite unique keys on `catalog_products (business_id, id)` and `inventory_items (business_id, id)`" — treating both truth tables as if they shared the same key order. Per §2 above, `inventory_items` does not expose a `(business_id, id)` key; only `(id, business_id)` exists. As written, this FK pair cannot be created against any existing Inventory key in the referencing order specified.

---

## 4. Corrected Composite FK Form

The two Inventory-side composite foreign keys in `inventory_import_rows` (report1.98.md §5.2) are corrected to:

```sql
FOREIGN KEY (matched_inventory_item_id, business_id)
REFERENCES inventory_items (id, business_id)
ON DELETE RESTRICT   -- nullable, same-business only

FOREIGN KEY (resolved_inventory_item_id, business_id)
REFERENCES inventory_items (id, business_id)
ON DELETE RESTRICT   -- nullable, same-business only
```

Both referencing-column pairs are reordered to `(inventory_item_id_column, business_id)` so they match the referenced key's actual column order, `inventory_items (id, business_id)`, exactly. `MATCH SIMPLE` nullability semantics apply as already noted in report1.99.md §5.2 — a row with `matched_inventory_item_id IS NULL` (no candidate found yet) or `resolved_inventory_item_id IS NULL` (not yet created/confirmed) satisfies the constraint trivially, unchanged from the original architecture's intent.

No other column, table, index, RLS policy, grant, or state value in `report1.98.md` §5 is affected by this correction. The Catalog-side composite FKs in the same section (`matched_catalog_product_id`/`resolved_catalog_product_id` referencing `catalog_products (business_id, id)`) are confirmed correct as originally written (§2) and are unchanged.

---

## 5. No New Unique Key Required or Authorized

**No new unique constraint on `inventory_items` is required, proposed, or authorized by this correction.** The existing `inventory_items_id_business_uniq UNIQUE (id, business_id)` key is reused exactly as-is; only the *referencing* column order in the two Inventory-side foreign keys is reordered to match it. Per instruction1.94.md §1/§3, adding a redundant `UNIQUE (business_id, id)` merely to preserve the prior (incorrect) wording is explicitly not authorized and is not proposed here. If a future mission ever finds an independent, separately justified reason to add such a key, that remains an explicit, separately authorized decision — not implied or pre-authorized by this report.

---

## 6. Confirmation That BKR-1, BKR-2, BKR-4, and BKR-5 Remain Unchanged

| Correction | Status this mission |
|---|---|
| BKR-1 — durable `create_inventory_item` Inventory-item creation idempotency (report1.98.md §3) | **Unchanged.** Not read, not touched, not affected by an Inventory *identity-table* key-order correction — BKR-1's idempotency table (`inventory_item_idempotency_keys`) and its own fingerprint/replay/conflict contract reference no composite FK into `inventory_items` at all. |
| BKR-2 — preview-generation-scoped link-confirm idempotency (report1.98.md §4) | **Unchanged.** This correction concerns `catalog_products`/`catalog_link_preview_tokens` key derivation, not any Inventory composite FK. |
| BKR-4 — Catalog hard-delete dependency reconciliation (report1.98.md §6) | **Unchanged.** The added `delete_catalog_product` dependent-history clause references `inventory_import_rows.matched_catalog_product_id`/`resolved_catalog_product_id` (both Catalog-side, correctly ordered per §2/§4 above) — it does not reference `inventory_items` and is not affected by this correction. |
| BKR-5 — batch terminal-state rule (report1.98.md §7) | **Unchanged.** The terminal-state rule is expressed entirely over `classification_state`/`execution_state`/`step_state` row values and batch claim semantics — no composite FK, Inventory or Catalog, appears anywhere in its logic. |

No wording, mechanism, or requirement in any of the four preserved corrections was read, reinterpreted, or altered by this mission.

---

## 7. Confirmation That No Other BKR-3 Physical-Contract Element Changed

Every other element of `report1.98.md` §5 (BKR-3) is preserved exactly as merged:

- `inventory_import_batches`' full column list, constraints, uniqueness, and history index (§5.1) — unchanged.
- `inventory_import_rows`' full column list (§5.2) — unchanged, including `classification_state`, `execution_state`, `parsed_snapshot`, `correction_reason`, `row_idempotency_key`, `link_preview_token_id`, `step_state`, `attempt_count`, `last_attempt_at`, `resolved_by`/`resolved_at`, and both timestamp columns.
- Required uniqueness (`UNIQUE (batch_id, row_number)`, `UNIQUE (business_id, row_idempotency_key)`) — unchanged.
- The batch→row tenant-bound composite FK (`(business_id, batch_id) → inventory_import_batches (business_id, id)`) — unchanged; `inventory_import_batches` itself carries `UNIQUE (business_id, id)` (report1.98.md §5.1), which is a *new* table this architecture defines, not a reference into the pre-existing `inventory_items`/`catalog_products` truth tables, so no analogous ordering defect applies to it.
- The Catalog-side composite FKs (`matched_catalog_product_id`/`resolved_catalog_product_id` → `catalog_products (business_id, id)`) — unchanged and confirmed correct (§2, §4).
- `opening_stock_movement_id`'s referential form (left as a Build Mode implementation-verification item in report1.98.md §5.2/§15) — unchanged, not addressed by this correction.
- RLS/grants (report1.98.md §5.3) — unchanged: `anon` no access; `authenticated` SELECT-only, Owner-scoped; no Manager/Employee policy; server-only bookkeeping writes; default-privilege neutralization requirement; the `catalog_lifecycle_executor` SELECT grant/RLS policy on `inventory_import_rows` for BKR-4 (§6 above).
- The full corrected end-to-end row orchestration (report1.98.md §8), idempotency/key-derivation map (§9), partial-failure/retry matrix (§10), Supabase impact map (§11), Security impact map (§12), independent-parser-gate disclosure (§13), classification (§14), and unresolved-assumptions list (§15) — all unchanged; none reference the specific FK column order corrected here in a way this correction affects.

---

## 8. Explicit Scope-Integrity Statement

This mission changed exactly one thing: the column order of two Inventory-side composite foreign-key clauses inside `report1.98.md` §5.2's conceptual persistence contract, as restated in §4 above. It did not:

- redesign BKR-1, BKR-2, BKR-4, or BKR-5 (§6);
- redesign `inventory_import_batches` or `inventory_import_rows` beyond this single FK-order correction (§7);
- add a column, state, index, constraint, RPC, grant, or policy beyond what was already locked in `report1.98.md`;
- add a new unique key (§5);
- change any Catalog-side composite reference (§2, §4);
- create or modify application code, dependencies, SQL, or migrations;
- mutate the Supabase test or production project — every database fact cited in §2 was obtained through read-only `SELECT` queries against `pg_constraint`/live schema state, and read-only inspection of the already-committed migration file;
- change RLS, grants, or service-role authority;
- change Lovable, the parser, Product Truth, or permissions;
- add a twentieth Catalog command;
- enter Build Mode, authorize Build Lock, deploy, or touch production.

No additional architecture defect beyond the one corrected here was discovered during this mission's evidence review. Per instruction1.94.md §4's explicit instruction to record rather than expand scope if one were found, none is reported.

---

## 9. Final Disposition

**`FK ORDER MICRO-CORRECTION — READY FOR SUPABASE FINAL CONFIRMATION`**

The Inventory composite FK order defect identified in `communication/live/report1.99.md` (BKR-3 / NBK-1) is corrected exactly as specified, using the existing `inventory_items_id_business_uniq UNIQUE (id, business_id)` key with no new constraint. `communication/live/report1.98.md` remains the base architecture document, unedited, with this report as its bounded corrective addendum for this single issue. Per instruction1.94.md §7, this does not authorize implementation. After human review and merge, Mission Control should issue one final short Supabase confirmation review limited to this FK-order correction; only a PASS from that review may unlock the separate Security & Permissions Architecture review.
