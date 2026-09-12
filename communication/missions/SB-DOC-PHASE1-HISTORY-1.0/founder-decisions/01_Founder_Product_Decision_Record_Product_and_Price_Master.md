# SMART BUSINESS — FOUNDER PRODUCT DECISION RECORD

## Product & Price Master Treatment of Existing Catalog Capability

**Decision ID:** `SB-FDR-PRODUCT-PRICE-MASTER-1.0`

**Related Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`

**Founder:** Riyas PK

**Decision Status:** `FOUNDER DECISION — APPROVED`

**Date:** `2026-09-12`

---

## 1. Purpose

This record resolves the product-positioning ambiguity identified during the Phase 1 Historical Continuity Reconstruction concerning the existing Smart Business Catalog implementation.

The historical reconstruction, final feature reconciliation, Mission Control build proposal, and independent Claude Code engineering review established that:

- Catalog engineering exists in the current product and repository;
- the Catalog capability has no clear basis as a standalone top-level product identity in the recovered Founder-origin Product Truth;
- its underlying product, price, tax, cost, import, identity, lifecycle, and inventory-linking engineering remains useful and should not be discarded; and
- future Smart Business capabilities require a shared canonical product/item/price foundation rather than competing Catalog and Inventory product models.

This decision records the Founder disposition before `SB-DOC-PHASE1-HISTORY-1.0` is closed.

---

## 2. Founder Decision

The existing Smart Business **Catalog** implementation shall **not continue as an independent top-level Smart Business product capability or product identity**.

Its valid underlying engineering shall be **preserved and evolved as the shared Product & Price Master foundation** for Smart Business.

The Product & Price Master is intended to provide one canonical structured source for product/item identity and applicable commercial attributes needed by approved Smart Business workflows, including where relevant:

- Inventory;
- Transactions and transaction line items;
- stock, supplier and reorder intelligence;
- standard POS bridges;
- Smart Order & Delivery;
- Universal Document Intelligence and imports;
- operational reporting and analytics; and
- other approved workflows that legitimately require product or price reference data.

The objective is one shared product/item/price truth, not parallel Catalog and Inventory data models.

---

## 3. Merchant Experience Decision

The current top-level `/catalog` merchant-facing product surface is not protected as a permanent standalone navigation concept.

Future authorized Product Mission work may:

- contextualize it;
- rename it;
- demote it from top-level navigation;
- integrate its functions into Inventory, Manager, setup, import, pricing, or other appropriate workflows; or
- retain a structured management surface where merchants genuinely need direct product-and-price administration.

Any such change must preserve clarity and must not remove a useful merchant capability merely to satisfy terminology cleanup.

Smart Business should present the simplest coherent merchant mental model while preserving strong shared engineering underneath.

---

## 4. Preservation Rule

This decision is **not authorization to delete Catalog code, tables, routes, RPCs, imports, history, pricing data, tax data, cost data, inventory links, audit records, or current merchant data**.

Existing Catalog engineering shall be treated according to evidence as:

- `PRESERVE` where already sound and reusable;
- `PRESERVE + EVOLVE` where it must become shared Product & Price Master infrastructure;
- `NARROW REBASE REQUIRED` where current implementation must be safely adapted to mature shared architecture; or
- `SUPERSEDED / REJECT` only where later engineering review proves a component unsafe, duplicated, unauthorized, or no longer required.

No destructive migration is authorized by this record.

---

## 5. Implementation Authority Boundary

This Founder Product Decision Record settles **product intent only**.

It does **not** authorize implementation.

The future implementation of this decision belongs to the governed lifecycle of:

`SB-P-1.12 — Authority, Identity & Product Surface Foundation`

`SB-P-1.12` must independently define, engineer, verify, migrate, and accept the Product & Price Master treatment through the approved Source 18 Product Mission lifecycle.

That future mission must determine, with repository/runtime evidence:

- exact schema treatment;
- naming and domain boundaries;
- route and deep-link compatibility;
- navigation changes;
- migration/backfill requirements, if any;
- inventory/product relationship rules;
- permissions and RLS;
- import/UDI reuse;
- production compatibility and rollback; and
- the final merchant-facing management surfaces.

---

## 6. Source 11 / Constitutional Boundary

This record does **not silently amend** `11_Smart_Business_Product_Truth_Map.md` or any other constitutional/governance source.

It records a Founder-approved product decision required to bridge the discovered current implementation state into the future Product Mission sequence.

If Mission Control later determines that Source 11 itself requires textual clarification or amendment so the shared Product & Price Master foundation is explicitly represented in constitutional Product Truth, that must be handled as a separate explicit governance action.

Until then:

- existing approved Product Truth remains controlling;
- this Founder decision controls the disposition of the discovered Catalog drift for future planning; and
- no specialist or implementation actor may infer broader Product Truth changes from this record.

---

## 7. Architectural Guardrails

Future implementation must preserve the following:

1. **One canonical product/item/price foundation.** Do not create separate competing Catalog, Inventory-product, POS-product, Order-product, or import-product masters.
2. **Inventory remains inventory.** Quantity, stock movement, availability, adjustment and stock-history responsibilities must not be confused with product identity and price-master responsibilities.
3. **Transactions remain financial/operational records.** Product reference data may support transaction line items, but Product & Price Master must not become a parallel accounting ledger.
4. **POS remains an adapter/integration concern.** Standard POS bridges may use the Product & Price Master; client-specific POS customization must not enter the core platform.
5. **UDI must reuse the shared foundation.** Imports and document intelligence should resolve approved product/item identities through the same canonical foundation instead of creating feature-specific masters.
6. **Permission boundaries remain authoritative.** Staff access to product/price management must be explicit and permission-scoped.
7. **Merchant clarity outranks internal terminology.** The UI should expose only the concepts merchants need to understand and use.

---

## 8. Historical Mission Disposition

For `SB-DOC-PHASE1-HISTORY-1.0`, the Catalog ambiguity is now considered **resolved at Founder product-intent level**.

Historical closeout may therefore record:

> Catalog drift identified → valid engineering preserved → standalone top-level product identity rejected → shared Product & Price Master direction approved by Founder → implementation deferred to `SB-P-1.12` → Source 11 textual amendment, if required, remains a separate governance action.

This decision removes the Catalog/Product & Price Master ambiguity from the historical mission closeout boundary.

---

## 9. What This Decision Does Not Decide

This record does not decide:

- exact future route names;
- exact navigation placement;
- exact Product & Price Master database schema;
- whether `/catalog` remains as a compatibility/deep-link route;
- whether existing tables are renamed or retained internally;
- exact UI grouping;
- exact migration mechanics;
- pricing-plan or add-on pricing policy;
- POS vendor-specific integrations; or
- any implementation timeline.

Those are future mission design/engineering decisions unless separately reserved for Founder approval.

---

## 10. Founder Authority Statement

Founder decision:

> Preserve the useful Catalog engineering, but do not continue treating Catalog as a separate top-level Smart Business product concept. Evolve it into the shared Product & Price Master foundation that the rest of Smart Business can use. Keep the merchant experience simple, avoid duplicate product models, protect existing data, and make the actual implementation only through the authorized `SB-P-1.12` lifecycle.

**Decision:** `APPROVED FOR FUTURE PRODUCT PLANNING`

**Implementation:** `NOT AUTHORIZED BY THIS RECORD`
