# SMART BUSINESS — REPOSITORY COMMUNICATION

# instruction1.5 — System-Managed Product ↔ Inventory Identity + Step-4 UX Cleanup

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`  
**Mission Name:** `Production Runtime Synchronization & Lovable Recovery`  
**Sequence:** `1.5`  
**From:** Smart Business Mission Control  
**To:** Claude Code / Repository Engineering Operator  
**Status:** `AUTHORIZED — BOUNDED PRODUCT-INTEGRITY IMPLEMENTATION`  
**Date:** `2026-09-02`

---

## 1. Founder-approved product decision

Founder has approved the following Build Now product rule for standard Smart Business stock-tracked products:

> A stock-tracked Catalog product must have one dedicated Inventory identity managed by Smart Business. Merchants must not manually link an ordinary Catalog product to an arbitrary unrelated Inventory item.

The internal architecture remains separated:

- Catalog owns product identity and commercial Product Truth;
- Inventory owns quantity/stock truth and auditable movements;
- Smart Business manages the association between them.

The merchant-facing mental model should remain one product, one stock identity. Do not force merchants to understand or operate the internal Catalog/Inventory object split.

This rule is for ordinary stock-tracked products in the core product. Advanced shared-stock relationships such as variants, bundles, recipes/BOM, pack conversions, and shared raw materials are **Build Later** and are not authorized by this instruction.

---

## 2. Runtime evidence that triggered this correction

During Founder Step-4 runtime verification:

1. Catalog inline Selling Unit correction was verified end-to-end using `Correction Test Product` and persisted as `Packet`.
2. Catalog import created no stock truth for that product.
3. Inventory Opening Stock preview for `Mango,5` returned READY.
4. Confirmation created one opening-stock movement successfully.
5. The Inventory page then showed `AVT Tea Powder — 5 Packet`, not `Mango`.

Read-only production inspection established that this was not a random bulk-import match failure. Existing data already had multiple Catalog products pointing at the same Inventory item:

- `Mango` → Inventory item `AVT Tea Powder`;
- `Milma Milk` → the same Inventory item `AVT Tea Powder`.

The new Opening Stock importer faithfully followed the existing Catalog → Inventory link.

This exposes a core merchant-model weakness: the runtime currently permits arbitrary many-products → one-inventory-item linking that ordinary Kerala merchants should not need and can easily misunderstand.

Do not repair this only as one-off test data while leaving the merchant-facing structural problem in place.

---

## 3. Objective

Implement the smallest truthful Build Now correction so that ordinary stock-tracked products use system-managed dedicated Inventory identities instead of arbitrary merchant-selected cross-linking.

Also fix the two small Catalog-import UX defects discovered during the same Founder runtime test:

1. outdated review copy that still says the merchant must "fix and re-upload" even when inline Category/Selling Unit correction is available;
2. stale preview summary counts after an inline correction succeeds.

This is still pre-publication recovery work. Do not expand into advanced inventory modeling.

---

## 4. Required product behavior — ordinary stock-tracked products

The desired merchant-facing behavior is:

### New product / existing non-stock product

When a merchant chooses to track stock for a standard Catalog product:

- Smart Business establishes a dedicated Inventory item for that Catalog product through existing governed Inventory/Catalog paths where possible;
- the merchant is not asked to choose an arbitrary existing Inventory item;
- the Inventory identity should use the product's own merchant-recognizable identity/name unless an existing approved rule requires otherwise;
- the resulting association must be business-scoped and unambiguous;
- Inventory remains the sole quantity/stock ledger.

### Existing stock-tracked product

The UI should present stock tracking as part of the product's behavior, not as a generic cross-object linking task.

Remove or replace ordinary merchant-facing affordances that allow selecting an unrelated Inventory item for a standard product.

### Opening Stock import

Keep the current product boundary:

- Opening Stock import resolves a Catalog product;
- it follows that product's system-managed dedicated Inventory identity;
- it writes only through the governed Inventory movement path;
- it never creates or mutates a Catalog stock quantity field.

---

## 5. One-to-one integrity requirement

For the standard Build Now model, the runtime must not silently permit two ordinary Catalog products to share the same dedicated Inventory item.

First inspect the existing schema, governed RPCs/commands, constraints, and Catalog/Inventory linking code.

Use the strongest existing mechanism already available.

If true one-to-one enforcement **cannot** be made reliable without any of the following:

- database migration;
- new unique constraint/index;
- new or materially changed governed RPC/command;
- RLS/grant change;

then **stop and report the exact smallest required backend change** in `report1.5.md`.

Do not weaken the requirement into UI-only prevention if concurrency or direct governed calls could still produce many-products → one-item states.

Do not mutate production Supabase under this instruction.

---

## 6. Existing corrupted test-data state

Known current production test data includes at least:

- `Mango` linked to Inventory item named `AVT Tea Powder`;
- `Milma Milk` linked to the same Inventory item;
- one `opening_stock +5` movement created during the Founder runtime test on that Inventory item.

This instruction does **not** authorize direct SQL repair, deletion, or manual production stock rewriting.

Claude must inspect the existing governed unlink/relink/correction mechanisms and document the smallest safe cleanup sequence in `report1.5.md`.

If the new system-managed flow itself can safely repair this data through normal authenticated product/Inventory actions after merge, state the exact Founder steps.

If a special data-repair command or production mutation is genuinely required, stop and report the bounded requirement. Do not perform it.

---

## 7. Catalog import UX cleanup

Fix both observed runtime inconsistencies:

### 7.1 Review copy

When inline correction is available, do not tell the merchant that the only fix is to edit the source file and re-upload.

Use truthful copy that distinguishes:

- inline-fixable Category/Selling Unit rows;
- rows that still require source correction or skip.

Keep wording concise and merchant-friendly.

### 7.2 Summary truth after correction

After a successful inline correction, the visible summary must reflect the current server-backed batch-row state.

Example observed defect after correcting Selling Unit to `Packet`:

- summary still showed `Ready to create: 0`, `Needs correction: 1`;
- confirm section correctly showed `1 row(s) will be created`.

Remove this contradiction. Summary counts and confirm state must derive from the same current row truth after correction.

---

## 8. Preserve all previously verified Step-4 behavior

Do not regress:

- Catalog CSV/XLSX parser runtime correction;
- Catalog inline Category/Selling Unit correction;
- custom Selling Unit support where governed;
- archived Category conflict protection;
- duplicate/POSSIBLE_MATCH protections;
- explicit Catalog import confirmation;
- Inventory Opening Stock CSV/XLSX preview;
- server-authoritative re-resolution at Opening Stock commit;
- caller-JWT business isolation;
- idempotent Opening Stock confirmation;
- Inventory movement auditability;
- Catalog/Inventory stock-truth separation.

---

## 9. Explicitly Build Later / not authorized

Do not implement in this mission:

- product variants sharing stock;
- recipes/BOM;
- ingredient consumption;
- bundles/kits;
- unit/pack conversion architecture;
- shared raw-material stock pools;
- manufacturing/assembly;
- advanced warehouse/bin/location modeling;
- custom POS changes;
- accounting redesign;
- unrelated Catalog or Inventory redesign.

These may later justify more complex stock relationships, but they must not weaken the simple Build Now default.

---

## 10. Authorized repository and branch

Implementation repository:

`SmartBusinessv1/starter-supab-shell`

Start from current `main` containing merged PR `#3` (`Step-4 Catalog review + Inventory Opening Stock import`).

Use a fresh branch:

`mission/SB-OPS-PROD-SYNC-1.0-product-inventory-identity`

Before modification:

1. fetch and fast-forward only;
2. verify the Step-4 merge is present;
3. verify working tree clean;
4. verify `supabase/config.toml` remains bound to `gysgzasfcjvtrgaigfyn`;
5. inspect existing product↔inventory link/unlink/create commands and schema constraints before choosing implementation.

---

## 11. Authorized implementation scope

Modify only files directly required for:

- ordinary product stock-tracking association UX;
- system-managed dedicated Inventory identity establishment using existing governed primitives if sufficient;
- blocking/removing generic unrelated-item linking from the standard merchant path;
- one-to-one enforcement through existing backend mechanisms if already available;
- the two Catalog import UX fixes;
- narrow tests and generated route/types only where directly necessary.

No broad cleanup or dependency upgrade.

---

## 12. Engineering verification

Run at minimum:

```bash
bun install --frozen-lockfile
bun run build
bunx tsc --noEmit
git diff --check
```

Run safe targeted tests/source checks sufficient to establish:

1. ordinary product stock tracking cannot select an unrelated Inventory item in the merchant UI;
2. a newly stock-tracked product receives/uses its own dedicated Inventory identity through governed paths;
3. another ordinary product cannot silently reuse that same dedicated Inventory identity;
4. disabling or changing stock tracking does not erase historical Inventory movements or silently corrupt audit truth;
5. Opening Stock import still resolves and writes only through Inventory;
6. Catalog import correction summary updates truthfully after inline correction;
7. review copy no longer falsely requires re-upload for inline-fixable rows;
8. no new Catalog stock field or parallel quantity truth is introduced.

Do not run production-mutating tests.

---

## 13. Required target PR

Open one bounded PR to:

`SmartBusinessv1/starter-supab-shell/main`

The PR must clearly report:

- existing product↔inventory architecture discovered;
- whether reliable one-to-one enforcement was possible without backend mutation;
- exact merchant UX before/after;
- exact files changed;
- Catalog import UX fixes;
- verification results;
- whether implementation is complete or blocked on a minimal backend change;
- exact safe cleanup plan for current `Mango` / `Milma Milk` / `AVT Tea Powder` test data and the `+5` Opening Stock movement.

Do not merge or self-approve.

---

## 14. Required live reply — `report1.5.md`

Reply only through:

`communication/live/report1.5.md`

The report must distinguish clearly between:

- **implemented now**;
- **backend change required, if any**;
- **production test-data repair still pending**;
- **Build Later advanced stock relationships**.

End with exactly one:

`PASS — PRODUCT-INVENTORY IDENTITY CORRECTION READY FOR LOVABLE RETEST`

or

`BLOCKED — PRODUCT-INVENTORY IDENTITY CORRECTION REQUIRES BOUNDED BACKEND AUTHORIZATION`

or

`FAIL — PRODUCT-INVENTORY IDENTITY CORRECTION FAILED`

---

## 15. Stop conditions

Stop and report for a genuine boundary issue, especially:

- reliable one-to-one enforcement requires a Supabase migration/constraint/RLS/grant change;
- existing governed commands cannot create a dedicated Inventory identity safely;
- preserving historical movements requires a broader lifecycle decision;
- current production test-data cleanup cannot be done safely through existing governed paths;
- unrelated branch drift or tracked secret exposure.

Do not create governance work for ordinary bounded UI/server-function engineering inside this scope.

---

**Mission Control boundary:** keep Catalog and Inventory technically separate, but make ordinary stock tracking feel like one merchant product with one system-managed stock identity. Remove the opportunity for arbitrary cross-linking in the standard workflow, preserve auditability, and do not solve advanced stock relationships prematurely.