# Smart Business — Canonical / Lovable Opening-Stock & Inventory-Import Reconciliation

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`  
**Gate:** `CANONICAL / LOVABLE RECONCILIATION — OPENING-STOCK / INVENTORY-IMPORT DRIFT`  
**Status:** `RECONCILED — DO NOT PROMOTE AS-IS`  
**Nature:** Repository/runtime topology reconciliation and engineering-evidence preservation  
**Authority:** Founder / Smart Business Mission Control

---

## 1. Objective

Resolve the known drift between canonical repository `SmartBusinessv1/smart-business` and the active Lovable project for the Inventory Opening Stock bulk-import capability.

This gate answers:

1. Does the builder-side implementation still exist?
2. Does canonical `main` already contain an equivalent implementation?
3. Is the builder implementation technically useful/current?
4. Can it be promoted directly without regressing newer canonical behavior or violating mature product contracts?
5. What durable disposition should future engineering use?

This is not a new feature-design mission.

---

## 2. Canonical Baseline Verified

Canonical repository:

`SmartBusinessv1/smart-business`

Baseline used for this reconciliation:

`main @ 4d360fdf4ef8e768bed2322baa60e182a1ab5aa6`

Canonical `main` currently contains:

- `src/routes/_authenticated/inventory.index.tsx`
- `src/routes/_authenticated/inventory.$itemId.tsx`
- `src/integrations/supabase/inventory.ts`
- Catalog import infrastructure
- the governed `create_inventory_movement` client path

Canonical `main` does **not** contain:

- `src/routes/_authenticated/inventory.opening-stock-import.tsx`
- `src/server-functions/inventory-import.ts`
- `src/lib/inventory-import/*`

Therefore the bulk Opening Stock import is not canonical implementation completion.

---

## 3. Active Lovable Evidence Verified

Active Lovable project:

`f3e992ec-06df-4d49-b157-b92ec064c078`

The current Lovable project still contains:

- `src/routes/_authenticated/inventory.opening-stock-import.tsx`
- `src/server-functions/inventory-import.ts`
- `src/lib/inventory-import/fields.ts`
- `src/lib/inventory-import/idempotency.ts`
- `src/lib/inventory-import/parse-isolated.ts`
- `src/lib/inventory-import/parse.ts`
- `src/lib/inventory-import/types.ts`
- `src/lib/inventory-import/validate.ts`

The Lovable Inventory index also exposes:

`/inventory/opening-stock-import`

through a `Bulk import opening stock` action.

Classification before review:

`BUILDER-SIDE IMPLEMENTATION EVIDENCE — NOT CANONICAL COMPLETION`

---

## 4. Historical Engineering Provenance

Lovable edit history shows this capability was not an accidental prototype.

It was introduced during `SB-OPS-PROD-SYNC-1.0` and subsequently received a specific security/integrity correction.

Relevant historical builder commits include:

- `656c2ec19f7a44528eee1fc2bb92dcac4164c2ed` — Complete Step-4 Catalog review and Inventory opening stock import.
- `87522ea5e22e8e3fd6371b4cc8ca6c0342222395` — Correct Inventory Opening Stock commit to re-resolve eligibility server-side.
- `a92ee50784f16fe4641361530b09c7eb32519b79` — Merge of the corrected Step-4 Catalog/Inventory work.

The correction removed direct trust in a client-supplied Inventory item id and changed commit-time behavior to re-resolve eligibility against live data before invoking the existing governed Inventory movement write path.

Historical builder verification reported:

- frozen install success;
- build success;
- TypeScript `--noEmit` success;
- no new lint defect beyond pre-existing repository noise.

This history is valuable engineering evidence, but historical builder verification is not current canonical acceptance.

---

## 5. Builder Implementation — Strengths Worth Preserving

The builder implementation contains several good patterns that should inform later canonical work.

### 5.1 Preview before consequential write

The user flow is:

**upload → parse → preview/classify → merchant review/skip → explicit confirm → commit → per-row outcome**

Nothing is written during preview.

### 5.2 Existing Inventory truth path reused

Stock writes use the existing:

`create_inventory_movement`

RPC with `movement_type = 'opening_stock'` rather than directly editing quantity fields.

This aligns with the existing Inventory ledger model.

### 5.3 Live eligibility revalidation

Commit re-runs row eligibility against current data instead of accepting a preview result as permanent fact.

It rechecks:

- product match;
- current Catalog→Inventory link;
- existing Opening Stock state;
- positive numeric quantity.

### 5.4 Caller-scoped Supabase client

The import uses the authenticated caller client and does not introduce a service-role bypass for the business write path.

### 5.5 Existing idempotency mechanism reused

A deterministic per-batch/per-item key is derived and passed through the existing Inventory movement idempotency mechanism.

### 5.6 Narrow row failure

Rows can fail independently without representing unrelated Inventory work as failed.

These patterns should be preserved or improved in later canonical implementation.

---

## 6. Why Direct Promotion Is Rejected

The builder implementation is **not approved for direct copy/promotion into current canonical `main`**.

This is not because the product capability is rejected.

Product commitment remains:

**BUILD NOW — Opening stock/import is part of the mature Stock capability.**

Direct promotion is rejected because the builder snapshot no longer satisfies the current canonical/mature architecture without correction.

---

## 7. Blocker A — Confirmation Is Not Bound to the Exact Previewed Object

The commit step correctly refuses a client-supplied Inventory item id.

However, it currently round-trips only:

- `identifierText`;
- quantity;
- row number;
- batch id.

At commit time it re-runs free-text Catalog resolution and accepts whichever eligible product currently resolves from that identifier.

It does **not** prove that the commit-time resolved product/item is the same exact product/item that the merchant saw in preview.

Therefore a Catalog change between preview and commit can theoretically produce:

**previewed product A → same identifier re-resolves to product B → opening stock written to B**

without a new confirmation of B.

This violates the mature shared confirmation rule:

> consequential confirmation must remain bound to the exact actor, action, object and relevant state, and must be revalidated at execution.

### Required correction

Future canonical implementation must preserve both:

1. **server-side revalidation** — never trust client ownership/eligibility claims; and
2. **confirmation binding** — commit must prove that the revalidated target still matches the exact target the merchant confirmed.

Exact mechanism belongs to EIS/security design. Possible patterns include a server-verifiable preview token/snapshot identity or expected target identifiers that are revalidated before mutation.

No write should silently retarget to a different product merely because matching changed.

---

## 8. Blocker B — Isolated Inventory Import Parser vs Mature UDI Contract

The mature Stock contract now states:

> Stock lists, opening-stock sheets, supplier invoices and similar documents must reuse Universal Document Intelligence.

Required pattern:

**file/photo → interpretation → preview → clarification if needed → confirmation → validated inventory update**

It also explicitly rejects isolated import truth that bypasses shared document intelligence, audit or idempotency foundations.

The historical Lovable implementation predates that mature contract and creates a dedicated:

`src/lib/inventory-import/*`

parser stack.

The implementation currently supports CSV/XLSX Opening Stock intake, but it is not yet expressed as a domain adapter over the mature shared UDI foundation.

### Required correction

Do not canonize a second long-term document/import intelligence architecture.

Future Product Blueprint/EIS should decide what parts of the builder parser are reusable implementation utilities while routing the feature through the shared UDI/import contract.

The good preview/confirmation/row-classification UX may be reused.

The architecture must converge on shared document intelligence rather than duplicate it.

---

## 9. Blocker C — Lovable Surrounding Snapshot Is Stale vs Canonical Main

The active Lovable Inventory index is not identical to current canonical `main`.

Canonical `main` contains newer Catalog→Inventory navigation/context behavior that is absent from the current Lovable `inventory.index.tsx` snapshot.

The Lovable history also shows later evolution of the Product→Inventory identity model after the Opening Stock import was first introduced.

Therefore:

**whole-file or whole-project synchronization from Lovable back into canonical is prohibited.**

It could overwrite newer canonical behavior.

Any later promotion must be a narrow rebase onto current canonical files, not a reverse sync.

---

## 10. Permission Model Note

The historical Opening Stock server function currently resolves the business through an Owner-specific `owner_id` lookup.

That was consistent with the narrower implementation stage in which it was created.

The mature Stock contract now requires permission-scoped Owner / Manager / Staff behavior.

This does not make the historical implementation useless, but future canonical EIS must route import authorization through the current Permission/Business Isolation foundation rather than treating Owner lookup as the final product permission model.

No Owner financial intelligence should become visible to staff merely because stock-entry permission exists.

---

## 11. Test / Evidence Gap

The Lovable project contains extensive Inventory foundation tests, including opening-stock invariants and RLS/business-isolation tests.

However, the current project file inventory does not show a dedicated end-to-end/test suite specifically proving the complete bulk-import contract across:

- ambiguous product matching;
- preview→commit target binding;
- replay/idempotency after partial success;
- concurrent Catalog/Inventory link changes;
- permission-scoped non-Owner roles;
- UDI integration;
- stale confirmation;
- current canonical UI integration.

Historical build/typecheck success is therefore useful evidence but insufficient for current promotion acceptance.

---

## 12. Final Classification

### Product capability

`PRESERVE — STILL CURRENT / BUILD NOW`

Opening Stock import remains part of the mature Stock capability.

### Builder code

`PRESERVE AS REUSABLE ENGINEERING EVIDENCE`

### Canonical implementation status

`NOT IMPLEMENTED CANONICALLY`

### Direct promotion status

`REJECT — DO NOT PROMOTE AS-IS`

### Required future treatment

`NARROW REBASE + ARCHITECTURAL CORRECTION + CURRENT VERIFICATION`

---

## 13. What Future Engineering May Reuse

Future implementation may reuse or adapt, subject to current review:

- upload/review/confirm UX structure;
- row classification concepts;
- CSV/XLSX parser utilities where compatible with UDI;
- parse isolation/timeout patterns;
- live eligibility revalidation;
- use of `create_inventory_movement`;
- deterministic idempotency idea;
- per-row result handling;
- sanitized failure copy.

These are evidence inputs, not pre-approved code blocks.

---

## 14. Required Promotion Gate

Before any Opening Stock bulk-import code becomes canonical, Product Blueprint/EIS and implementation verification must prove:

1. current canonical branch is the implementation base;
2. shared UDI/import foundation is reused rather than duplicated;
3. preview confirmation is cryptographically/server-verifiably or otherwise safely bound to the exact target/action/state;
4. commit revalidates business isolation, permission, current target and Opening Stock eligibility;
5. current Product→Inventory one-to-one identity invariant is respected;
6. `create_inventory_movement` remains the stock write path;
7. duplicate/retry/partial-failure behavior is idempotent;
8. permission-scoped Owner/Manager/Staff behavior is deliberate;
9. ambiguous matching cannot silently choose another item;
10. canonical tests cover stale preview, changed Catalog state and replay;
11. UI is integrated without regressing newer canonical Inventory/Catalog behavior;
12. independent verification is completed before Mission Control acceptance.

---

## 15. Repository / Lovable Authority Result

Controlling rule after this reconciliation:

> Canonical `main` remains authoritative. The Lovable implementation is preserved as builder-side engineering evidence only. Lovable must not overwrite canonical code, and canonical must not silently claim the builder-only Opening Stock import as implemented.

No Lovable code was deleted.

No product capability was demoted.

No current canonical code was overwritten.

---

## 16. Next Controlled Step

This drift gate is now resolved enough to continue Mission Control planning.

The Opening Stock bulk-import capability should be picked up later inside the governed Stock / UDI implementation mission using this record as engineering provenance.

The immediate next planning action is:

**refresh the current implementation baseline against the completed 25-contract Feature Definition Library, then sequence the remaining Build Now Product Missions by dependency.**

The implementation sequence must not treat this builder-only code as canonical completion.

---

## Final Principle

**Preserve useful engineering. Do not preserve drift. Revalidate the exact thing the merchant confirmed. Reuse shared intelligence foundations. Canonical truth stays canonical.**
