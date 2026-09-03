# SMART BUSINESS — REPOSITORY COMMUNICATION

# instruction1.4 — Step-4 Catalog Review Corrections + Inventory Opening Stock Bulk Import

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`  
**Mission Name:** `Production Runtime Synchronization & Lovable Recovery`  
**Sequence:** `1.4`  
**From:** Smart Business Mission Control  
**To:** Claude Code / Repository Engineering Operator  
**Status:** `AUTHORIZED — BOUNDED STEP-4 IMPLEMENTATION`  
**Date:** `2026-09-02`

---

## 1. Current verified runtime state

The new production-delivery repository is:

`SmartBusinessv1/starter-supab-shell`

The intended new Lovable production workspace is:

`f3e992ec-06df-4d49-b157-b92ec064c078`

The production Supabase project remains:

`gysgzasfcjvtrgaigfyn`

The parser runtime correction from `instruction1.3` has been merged into `starter-supab-shell/main` and ingested by Lovable. The Founder then reran the same practical four-row CSV upload in the Lovable preview.

Observed result:

- login: PASS;
- Catalog import page: PASS;
- CSV parsing: PASS;
- preview reached successfully instead of `PARSE_TIMEOUT`;
- preview showed 4 total rows, 4 ready, 0 possible matches, 0 needs correction;
- no Catalog Product Truth was committed during this verification;
- no Inventory stock was imported through Catalog.

The parser-runtime correction is therefore accepted for continuation of Step 4. Do not reopen parser architecture unless new direct evidence requires it.

## 2. Confirmed Step-4 gaps

Two practical merchant-facing gaps remain before publication.

### Gap A — Catalog import review correction UX

The current Catalog import review does not allow a merchant to correct Category or Selling Unit directly in the review screen.

Current behavior for a row requiring correction is effectively:

- fix the spreadsheet and re-upload; or
- skip the row.

Reusable Catalog selectors already exist in the production-delivery runtime:

- `src/components/catalog/category-selector.tsx`
- `src/components/catalog/selling-unit-selector.tsx`

The review experience must use the governed Product Truth already established for Catalog:

- custom Selling Units are permitted where current Catalog rules permit them;
- a genuinely new Category may be created through the existing governed Catalog category path;
- archived same-name Category conflicts must not be silently reactivated;
- no row may be silently altered without the merchant seeing and confirming the correction;
- existing duplicate/product-match protections remain intact.

### Gap B — Inventory / Opening Stock bulk upload

There is currently no dedicated merchant-facing Inventory / Opening Stock CSV/XLSX bulk-import flow in the synchronized production runtime.

Opening Stock belongs to Inventory and must remain Inventory stock truth.

Catalog import must never become a second stock source.

## 3. Objective

Implement one bounded Step-4 product cycle containing both confirmed gaps:

1. direct Category and Selling Unit correction/selection inside the Catalog import review experience; and
2. merchant-facing CSV/XLSX Opening Stock bulk import under Inventory.

This is practical pre-publication completion work. Do not redesign unrelated Catalog, Inventory, accounting, authentication, permissions, reporting, WhatsApp, or platform architecture.

## 4. Catalog import review requirements

Implement a practical row-review experience that allows the merchant to inspect and correct imported Category and Selling Unit values before confirmation.

At minimum:

1. show row-level details sufficient to understand what will be created;
2. allow Category selection/correction directly in the review flow;
3. allow Selling Unit selection/correction directly in the review flow;
4. reuse the existing governed Catalog selector components where technically appropriate rather than creating parallel truth models;
5. preserve custom Selling Unit behavior already permitted by Catalog Product Truth;
6. preserve governed creation of a genuinely new Category where current Catalog rules allow it;
7. never silently reactivate or reuse an archived same-name Category;
8. preserve `POSSIBLE_MATCH`, duplicate detection, skip behavior, explicit confirmation, and no-overwrite behavior;
9. ensure edited review values are the values actually used by the eventual commit;
10. preserve row-level status/error truth — no row may be shown as fixed if the backend still considers it invalid;
11. no Inventory stock field may be introduced into Catalog import.

If the current import-batch persistence model requires a narrowly scoped update endpoint or row-state mutation to save merchant corrections before commit, implement only the smallest authenticated, business-scoped mechanism required and document it in `report1.4.md`.

Do not use service-role access for Catalog Product Truth mutations. Existing caller-JWT / RLS / governed command boundaries must remain intact.

## 5. Inventory / Opening Stock bulk-import requirements

Add a dedicated Inventory-side merchant flow for Opening Stock import.

The product boundary is:

- Catalog identifies the product;
- Inventory owns quantity/stock truth;
- Opening Stock is an Inventory movement/event, not a Catalog field.

At minimum the Inventory import flow must:

1. be reachable from Inventory through a clear merchant-facing action;
2. accept `.csv` and `.xlsx`;
3. provide preview before any stock mutation;
4. identify the target Catalog product using safe, explicit matching fields supported by the existing product model (for example product name/SKU/barcode as available); do not invent fuzzy automatic ownership-changing behavior;
5. clearly classify unmatched or ambiguous products for correction/skip rather than creating stock against an uncertain product;
6. require a valid opening quantity;
7. reject invalid, negative, non-finite, or otherwise unsupported quantities according to existing Inventory truth rules;
8. use the existing Inventory mutation/movement architecture as the sole stock-writing path;
9. create auditable opening-stock movements rather than directly overwriting a quantity cache or Catalog record;
10. preserve business isolation and authenticated-owner authority;
11. require explicit merchant confirmation before committing any stock movement;
12. present created/failed/skipped/unmatched outcomes distinctly;
13. be idempotent or otherwise safely protected against accidental duplicate confirmation using the existing repository patterns where available;
14. not change accounting truth unless the existing approved Inventory Opening Stock architecture already requires a governed accounting consequence; do not invent a new accounting rule in this mission.

If the existing production schema/runtime cannot support a truthful Opening Stock bulk import without a database migration, new RLS/grants, or materially different Inventory command, **stop and report that exact bounded requirement**. Do not mutate production Supabase under this instruction.

## 6. File and parser safety

For both bulk-import flows, preserve the practical safety posture already verified for Catalog import.

Reuse existing safe parsing/ingress utilities where appropriate rather than introducing another independent parser stack.

Preserve or match the existing limits unless direct existing Inventory requirements are stricter:

- compressed upload maximum: 5 MB;
- decompressed XLSX processing maximum: 25 MB;
- maximum rows: 2,000;
- maximum columns: 40;
- maximum characters per cell: 2,000;
- malformed/encrypted/macro rejection;
- sanitized merchant-facing errors;
- no raw credential, database, or internal error exposure.

Do not weaken these limits merely to simplify implementation.

## 7. Authorized repository and branch

Implementation repository:

`SmartBusinessv1/starter-supab-shell`

Use a fresh mission branch from current `main` after verifying the merged parser correction is present:

`mission/SB-OPS-PROD-SYNC-1.0-step4-catalog-inventory`

Before modification:

1. fetch and fast-forward only;
2. verify `main` includes merged PR `starter-supab-shell#2` / parser correction;
3. verify the working tree is clean;
4. verify `supabase/config.toml` remains bound to `gysgzasfcjvtrgaigfyn`;
5. stop for unrelated branch drift or unrelated local modifications.

## 8. Authorized implementation scope

Claude Code may modify only files directly required for the two Step-4 gaps and their narrow tests.

Expected areas include, as applicable:

- `src/routes/_authenticated/catalog.import.tsx`
- `src/components/catalog/**`
- `src/lib/catalog-import/**`
- `src/server-functions/catalog-import.ts`
- existing Catalog integration helpers directly required for governed row correction;
- `src/routes/_authenticated/inventory.index.tsx`
- a new authenticated Inventory import route if required;
- existing Inventory integration/server-function modules;
- a narrowly scoped `src/lib/inventory-import/**` only if a separate domain layer is genuinely clearer than reusing Catalog parser utilities;
- `src/routeTree.gen.ts` when generated/required by the new route;
- narrow tests/fixtures for these two workflows;
- `package.json` / `bun.lock` only if a directly required dependency change is proven.

A directly required additional runtime file may be changed only when its necessity is documented in `report1.4.md`.

Do not perform broad repository synchronization or unrelated cleanup.

## 9. Explicitly not authorized

This instruction does **not** authorize:

- Lovable publication;
- production domain/DNS cutover;
- Supabase migration/schema/RLS/grant/Auth mutation;
- direct production data repair or manual stock writes;
- AWS/Lambda deployment;
- historical Lovable reuse;
- accounting redesign;
- transaction redesign;
- WhatsApp implementation;
- employee-permission expansion;
- custom POS implementation;
- unrelated visual redesign;
- unrelated dependency upgrades;
- direct push to `main`;
- force push/history rewrite;
- self-merge or self-approval.

## 10. Engineering verification

Run the safe applicable checks, including at minimum:

```bash
bun install --frozen-lockfile
bun run build
git diff --check
```

Run targeted non-production-mutating tests sufficient to prove:

### Catalog review

- imported rows render with reviewable details;
- Category correction/selection persists into the eventual commit input;
- Selling Unit correction/selection persists into the eventual commit input;
- custom Selling Unit behavior remains valid where governed;
- archived Category conflicts remain protected;
- duplicate/POSSIBLE_MATCH/skip behavior remains intact;
- no stock truth is written through Catalog.

### Inventory Opening Stock

- valid CSV and XLSX parse to preview;
- invalid quantities reject safely;
- unmatched/ambiguous products are not silently assigned;
- preview performs no stock mutation;
- confirmation uses the existing Inventory truth-writing path;
- duplicate confirmation protection is present or an existing idempotency mechanism is reused;
- business isolation/owner authority is preserved;
- no Catalog quantity field or parallel stock truth is introduced.

Do not run any test that mutates production Supabase.

## 11. Required target PR

Commit with a clear bounded message such as:

`Complete Step-4 Catalog review and Inventory opening stock import`

Push only the mission branch and open a PR to:

`SmartBusinessv1/starter-supab-shell/main`

The PR must clearly separate:

- Catalog review correction implementation;
- Inventory Opening Stock import implementation;
- exact files changed;
- any required new server functions/routes;
- verification results;
- any unresolved runtime-only check requiring the Founder.

Do not merge or approve your own PR.

## 12. Required Founder runtime verification after merge/Lovable ingestion

A local build/test PASS is not sufficient for final Step-4 acceptance.

After Mission Control reviews the target PR, it is merged, and Lovable ingests the merge commit, the Founder will practically verify in the Lovable preview:

### Catalog

1. sign in;
2. Catalog → Import products;
3. upload a small sample file;
4. verify row details are visible;
5. change/select Category on a row;
6. change/select Selling Unit on a row;
7. confirm that the review reflects the intended corrected values;
8. perform one tiny controlled Catalog import;
9. verify created Catalog products contain the corrected Category/Unit values;
10. verify no stock was created through Catalog.

### Inventory

1. Inventory → Opening Stock import;
2. upload a tiny CSV/XLSX file;
3. verify matched/unmatched rows and quantities in preview;
4. verify nothing changes before confirmation;
5. confirm a tiny controlled Opening Stock import;
6. verify the resulting Inventory quantity/movement;
7. verify no duplicate/parallel Catalog stock truth exists.

Claude must state any exact sample-column requirements needed for these Founder tests in `report1.4.md`.

## 13. Required live reply — `report1.4.md`

After implementation, verification, and opening the target PR, write the active reply to exactly:

`communication/live/report1.4.md`

Do not place the active reply only in chat or only under `communication/missions/`.

`report1.4.md` must contain:

1. verified target baseline and branch;
2. target commit SHA and PR number;
3. exact files changed;
4. Catalog review architecture before/after;
5. Category correction behavior;
6. Selling Unit correction behavior;
7. how corrected review values reach commit safely;
8. Inventory Opening Stock import architecture;
9. product matching rules;
10. quantity validation rules;
11. Inventory stock-writing path and auditability;
12. idempotency/duplicate-confirmation protection;
13. parser/file safety preservation;
14. business-isolation/owner-authority verification;
15. frozen-install result;
16. build result;
17. targeted test results;
18. diff/secret/forbidden-backend-ref checks;
19. confirmation that `supabase/config.toml`, `.lovable/**`, `.env*`, production Supabase, AWS, Lovable publication, and domain were not mutated;
20. exact Founder runtime retest steps and sample file column requirements;
21. any genuine remaining blocker.

End `report1.4.md` with exactly one:

`PASS — STEP-4 CATALOG AND INVENTORY IMPLEMENTATION READY FOR LOVABLE RETEST`

or

`BLOCKED — STEP-4 CATALOG AND INVENTORY IMPLEMENTATION REQUIRES MISSION CONTROL DECISION`

or

`FAIL — STEP-4 CATALOG AND INVENTORY IMPLEMENTATION FAILED`

## 14. Communication rule

`communication/live/instruction1.4.md` is the active authority for this exchange.

The required response is `communication/live/report1.4.md` with the exact matching suffix.

Do not create a parallel active instruction/report under `communication/missions/**`.

## 15. Stop conditions

Stop and report only for a genuine boundary issue, including:

- a required production Supabase schema/RLS/grant/Auth migration;
- the existing Inventory architecture cannot truthfully represent Opening Stock without a new governed backend primitive;
- safe business isolation cannot be preserved;
- unrelated target branch drift or local changes;
- tracked secret exposure;
- a materially broader product/accounting decision is required.

Ordinary UI, server-function, parser reuse, validation, route, test, and build work inside this bounded scope is engineering work and should be completed without creating another governance loop.

---

**Mission Control boundary:** finish the two confirmed practical Step-4 gaps, preserve Catalog/Inventory truth separation, keep the implementation merchant-usable and reviewable, and return one matching live report for direct Mission Control review.