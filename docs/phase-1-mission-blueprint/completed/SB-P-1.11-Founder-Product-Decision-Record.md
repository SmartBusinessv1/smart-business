# SB-P-1.11 — Founder Product Decision Record

## Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.11 — Product Catalog & Pricing |
| Stage | Stage 1 — Product Definition |
| Decision authority | Founder |
| Facilitator and recorder | Codex |
| Date | 2026-08-04 |
| Status | Confirmed for Product Blueprint drafting; subject to Mission Control review |
| Blueprint | [`SB-P-1.11.md`](./SB-P-1.11.md) |

## Confirmed Product Decisions

| ID | Confirmed Founder decision |
|---|---|
| D-001 | A catalog product and an inventory item are separate business records joined by an explicit governed link. The catalog describes what is sold; SB-P-1.10 Inventory remains the sole stock authority. |
| D-002 | A product may be non-stock. Its inventory link is optional, and a non-stock product must not create inventory movements. |
| D-003 | One product may link to at most one inventory item in Build Now. Recipes, bills of materials, bundles, and other multi-input relationships are deferred. |
| D-004 | One inventory item may link to at most one product in Build Now. Shared-stock selling forms and alternate packs are deferred. |
| D-005 | A stock-tracked product's selling unit equals the linked inventory item's immutable base unit. Alternate units, conversions, and conversion rounding are deferred. |
| D-006 | Category is optional. Uncategorized products remain visible and usable. |
| D-007 | Categories are flat in Build Now; a product has zero or one category. Category hierarchy is deferred. |
| D-008 | Categories are merchant-defined, business-owned, and business-isolated; Smart Business does not impose a universal taxonomy. |
| D-009 | Selling price is optional during setup but required before a product can be used in a sale. |
| D-010 | Build Now provides one current selling price per product. Price levels, wholesale tiers, and customer-specific prices are deferred. |
| D-011 | Selling-price history preserves old value, new value, time, and responsible user. Completed sales retain their transaction-time price. |
| D-012 | Immediate and scheduled future-effective selling-price changes are Build Now. They remain merchant-controlled and auditable and cannot rewrite completed sales. |
| D-013 | A product may have at most one pending scheduled price. An authorized user may replace or cancel it; an effective price becomes permanent history. |
| D-014 | Build Now includes an optional merchant-entered current reference cost price. It is not purchase truth, inventory valuation, COGS, verified margin, or accounting truth. It is owner-controlled and hidden from employees by default. |
| D-015 | Reference-cost changes preserve old value, new value, time, and responsible user and remain separate from future Purchase Workflow truth. |
| D-016 | The owner can view and edit reference cost by default. A manager may do so only with explicit owner-granted cost-price permission. Ordinary employees are denied. |
| D-017 | Build Now includes optional merchant-controlled product tax configuration but no tax filing, return preparation, compliance advice, automatic legal classification, invoice-compliance guarantee, or legal verification. |
| D-018 | A business may define an optional default tax setting. A product may override it. The effective source remains visible, and changing the default never silently replaces a product override. |
| D-019 | Each business chooses tax-inclusive or tax-exclusive pricing. The experience clearly distinguishes base, tax, and final amounts without making a compliance claim. |
| D-020 | Build Now includes one optional manually entered barcode. Scanning, label generation, hardware workflows, and POS synchronization are deferred. |
| D-021 | Each product has at most one optional barcode in Build Now. Multiple or alternate barcodes are deferred. |
| D-022 | A barcode is unique within a business but may be used by different businesses. |
| D-023 | *(Amended under SB-P-1.11-GC-27 — see Amendment History below.)* Build Now uses one SKU per Catalog product. Merchant-supplied SKU input is optional: when supplied, Smart Business validates and uses it if permitted; when absent, Smart Business automatically assigns a business-scoped unique tracking SKU. Absence of a merchant-supplied SKU does not block product creation. The same rule applies identically across dashboard/manual creation, Catalog CSV/XLSX import, Inventory-first creation, WhatsApp text, voice, and photo-assisted creation, and future governed creation channels. |
| D-024 | *(Consistency-aligned under SB-P-1.11-GC-27 — see Amendment History below.)* A product has one SKU, unique within its business; different businesses may use the same SKU. |
| D-025 | Build Now has no product-variant hierarchy. Each separately priced, identified, or stocked size or flavour is a separate product. Structured variants are deferred. |
| D-026 | Product name is required and unique within its business. Separate sizes or flavours must be distinguishable in the name. |
| D-027 | Build Now includes an optional text description. |
| D-028 | Build Now includes one optional product image, which never blocks product creation. |
| D-029 | Product lifecycle has Active and Archived states only. Archive represents discontinuation, blocks new sales, and preserves authorized history. |
| D-030 | Product and inventory archival are independent. Neither silently archives the other. An active product linked to archived inventory is blocked from new sales until explicitly resolved. |
| D-031 | Permanent deletion is allowed only before price, tax, sales, inventory-link, or other dependent business history exists. Otherwise archive is required. |
| D-032 | Authorized users may reactivate an archived product. It becomes sale-eligible only after current price, tax, unit, and linked-inventory conditions pass validation. |
| D-033 | The owner manages products by default. Managers require explicit owner-granted catalog authority. Ordinary employees cannot manage product master data. |
| D-034 | Manager permissions are independently controlled for catalog viewing, product details, lifecycle, selling price, tax, and reference cost. |
| D-035 | Sale-authorized employees may view and select active, sale-ready products and see selling-price and tax information. Cost, margin, histories, and management controls remain hidden. |
| D-036 | Product tax treatment is one of: inherit business default, merchant-entered product-specific rate, or explicitly non-taxable. Smart Business does not determine legal classification. |
| D-037 | Tax-setting changes preserve old value, new value, time, and responsible user. Completed sales retain transaction-time tax evidence. |
| D-038 | Tax-setting changes are immediate in Build Now. Scheduled future-effective tax changes are deferred. |
| D-039 | Selling price may be blank during setup but must be greater than zero for sale eligibility. Zero and negative selling prices are invalid for sale use. |
| D-040 | Reference cost is optional and non-negative. Zero is permitted; negative cost is invalid. |
| D-041 | Each business has one currency in Build Now, defaulting to INR. All product prices use it; multi-currency is deferred. |
| D-042 | Selling and reference-cost prices support two decimal places and display paise without hidden whole-rupee rounding. Sales Workflow will govern transaction-level tax rounding. |
| D-043 | A scheduled selling price activates at an exact future date and time in the business timezone. The pending price and time remain visible before activation. |
| D-044 | Archiving a product requires confirmation and cancels any pending scheduled price with an audit record. Reactivation uses the last effective price and normal validation. |
| D-045 | Category names are unique within each business but may be reused by different businesses. |
| D-046 | Archiving a category does not archive products. After explicit confirmation, affected products become uncategorized and prior category history is preserved. |
| D-047 | An inventory link may be assigned, removed, or replaced only before sale or linked stock-event history exists. After such history, the relationship is locked and a new product is required. |
| D-048 | Inventory linking is a distinct owner-controlled permission. An authorized manager also needs inventory-view access. Employees cannot manage links. |
| D-049 | Ledger-derived current stock and base unit appear beside a linked product only for users with inventory-view permission. Catalog access alone does not disclose stock quantity. |
| D-050 | Stock status is derived from the inventory link: linked means Stock tracked; unlinked means Non-stock. No separate editable type may contradict the link. |
| D-051 | Every non-stock product has one selling unit, defaulting to piece. It may be changed before sales history exists. |
| D-052 | Build Now provides familiar standard units plus a merchant-defined custom unit. Custom labels do not create conversions, and a product retains one selling unit. |
| D-053 | Build Now includes dashboard management and guided WhatsApp text, voice, and photo-assisted product creation and search, with explicit confirmation before saving. |
| D-054 | Authorized users may perform permitted catalog changes through conversational channels only after a structured preview and explicit confirmation. Separate action permissions still apply. |
| D-055 | CSV and Excel bulk catalog import are Build Now. |
| D-056 | Bulk import saves valid rows, quarantines invalid rows without creating live products, and reports correction needs through WhatsApp and the future in-app conversational interface. |
| D-057 | Import never overwrites automatically. A name, SKU, or barcode match enters the correction queue for an authorized update, skip, or correction decision. |
| D-058 | A manager with product-creation permission may import. Employees cannot import. |
| D-059 | If a business has no tax default, inherited tax is incomplete. The product requires a specific rate or an explicit non-taxable choice before sale. |
| D-060 | Tax-inclusive or tax-exclusive pricing is business-wide in Build Now; products cannot override it. |
| D-061 | The business pricing mode may change only before completed sales exist. A later change requires a separately governed pricing migration and never remaps catalog or inventory identity. |
| D-062 | Build Now does not calculate or claim product margin. Authorized users see selling price and reference cost separately. |
| D-063 | Reference-cost changes take effect immediately. Scheduled reference-cost changes belong to the future Purchase Workflow. |
| D-064 | Meaningful product changes preserve old/new values, time, and responsible user, including identity, description, image, category, identifiers, unit, inventory link, lifecycle, price, cost, and tax. |
| D-065 | Permitted deletion removes an unused product from the live catalog but retains a minimal audit record containing product identity, business, deletion time, and responsible user. |
| D-066 | Catalog selling price is the default authoritative price. Future discounts and sale-time overrides belong to Sales Workflow, require their own authority and audit, and never rewrite catalog price history. |
| D-067 | The Founder confirmed that the Stage 1 Product Blueprint and Founder Product Decision Record accurately represent the confirmed product decisions and may be prepared for Mission Control Product Review. This is not Blueprint lock or implementation approval. |
| D-068 | When either first-time assignment of an inventory link or permitted replacement of an existing inventory link would change the product's selling unit to the proposed inventory item's immutable base unit, the existing selling price must not be silently reinterpreted. Before the assignment or replacement is saved, the merchant must explicitly confirm the selling price for the proposed new unit or enter a replacement price. For first-time linking, the preview must show the current unit and price, proposed inventory link and new unit, and price requiring confirmation. For replacement linking, it must show the current inventory link, current unit and price, proposed replacement inventory link and new unit, and price requiring confirmation. Until confirmation and saving succeed, the existing product record, current inventory link state, selling unit, and selling price remain unchanged; cancellation, incomplete confirmation, validation failure, or save failure preserves that existing state. The confirmed price and completed assignment or replacement enter the appropriate audit history. This safeguard applies only while assignment or replacement remains permitted before sale or linked-stock-event history under D-047. |

## Open Questions

No unresolved Founder product decision currently prevents refinement of Product Blueprint Sections 1–19 for Builder Review Findings F3, F4, and F5.

## Superseded Decisions

None.

## Amendment History

**D-023 — formally amended under SB-P-1.11-GC-27 (`communication/live/instruction1.123.md`).**

- **Original wording (2026-08-04, Stage 1 Founder confirmation, preserved here for historical auditability):** "Build Now includes one optional merchant-defined SKU. SKU does not block product creation."
- **Amended wording (in effect above):** "Build Now uses one SKU per Catalog product. Merchant-supplied SKU input is optional: when supplied, Smart Business validates and uses it if permitted; when absent, Smart Business automatically assigns a business-scoped unique tracking SKU. Absence of a merchant-supplied SKU does not block product creation. The same rule applies identically across dashboard/manual creation, Catalog CSV/XLSX import, Inventory-first creation, WhatsApp text, voice, and photo-assisted creation, and future governed creation channels."
- **Reason:** the original wording described merchant-supplied SKU as the only entry path and did not account for the Smart Business–generated business-scoped tracking SKU assigned when the merchant supplies none. The Founder Workflow Reconciliation Record (`docs/phase-1-mission-blueprint/completed/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md`, FWR-003 and FWR-004) recorded this generated-SKU behavior as Founder-approved Product Truth and classified D-023 as `AMENDMENT REQUIRED` pending a formal decision-record amendment. This amendment implements that already Founder-approved FWR-003/FWR-004 rule; it does not create new Product Truth.
- **D-024 received only a minimum consistency wording alignment**, not a substantive amendment: the phrase "at most one optional SKU" was removed because it became textually stale once D-023 confirmed every product resolves to exactly one SKU (merchant-supplied or generated) rather than an optionally-absent one; D-024's existing uniqueness/business-scope rule ("unique within its business; different businesses may use the same SKU") is preserved unchanged in meaning.
- **No other Founder decision (D-001 through D-022, D-025 through D-068) was reopened, reinterpreted, or modified by this amendment.**
- **No implementation authority was granted by this amendment.** This is a governance-record correction only; it does not authorize application code, SQL, migrations, Supabase/AWS/Lovable mutation, repository hygiene remediation, Blueprint lifecycle movement, deployment, publication, or production activity, and it does not itself modify the already-locked SB-P-1.11 Version 1.2 implementation package (`docs/implementation/SB-P-1.11/engineering-contract.md`, `lovable-build-prompt.md`, `verification-checklist.md`), which already carried this same generated-SKU behavior forward under `communication/live/instruction1.120.md` (SB-P-1.11-GC-24) and `communication/live/instruction1.122.md` (SB-P-1.11-GC-26).

## Later Product Refinement — System-Managed Dedicated Inventory Identity (added 2026-09-03, `SB-DOC-1.10-1.11-CONTINUITY-1.0`)

**D-003 and D-004 are not amended or reopened by this note.** Their cardinality rule — one product links to at most one Inventory item, and one Inventory item links to at most one product, in Build Now — remains exactly as confirmed here and is unchanged.

What later changed, under a separate Founder-approved product decision recorded in `SB-OPS-PROD-SYNC-1.0` instruction1.5 (2026-09-02): the **mechanism** by which that one-to-one relationship is established for an ordinary stock-tracked product. At Stage 1 (this record) and through the original SB-P-1.11 implementation, the merchant-facing flow let a merchant pick any existing active Inventory item as the target of a new link. Runtime verification during `SB-OPS-PROD-SYNC-1.0` found this allowed two unrelated products to be linked, one after another, to the same pre-existing Inventory item — nothing in the UI or the original backend rejected it. The Founder subsequently approved the standard Build Now rule that an ordinary stock-tracked product receives a **system-managed dedicated Inventory identity**, created automatically rather than chosen by the merchant from existing items; the merchant no longer sees a picker of existing Inventory items for this ordinary path.

This is classified as an **already-authorized Founder product refinement**, not a new, unauthorized Product Truth change and not a contradiction of D-001–D-004: Catalog and Inventory remain separate records (D-001 unchanged), the relationship remains one-to-one (D-003/D-004 unchanged), and D-047's dependent-history protection is unchanged and remains fully in force — it correctly refused to unlink either of the two products found sharing one Inventory item during this same incident, precisely because it was working as designed. The database now additionally enforces this one-to-one rule structurally via `UNIQUE (business_id, inventory_item_id)` on `catalog_products`, closing the gap for every write path, not only the merchant UI.

Full chronology and evidence: `docs/implementation/SB-P-1.10-SB-P-1.11-post-completion-continuity.md`.

## Source Conflicts and Mission Control Resolutions

- Source 02 contains a legacy directly mutable inventory shape. The accepted SB-P-1.10 Inventory Foundation and its ledger-derived stock model are the controlling downstream dependency. SB-P-1.11 does not repeat or revive the legacy shape.
- No Product Truth conflict was resolved by Codex. Any future conflict remains reserved for Mission Control.

## Final Founder Confirmation

The Founder answered the discovery questions one at a time, confirmed D-001 through D-066, and then confirmed the resulting Stage 1 draft as D-067. Mission Control Instruction 1.3 records the Founder-approved F5 unit-change price-confirmation decision as D-068. Instruction 1.5 refines D-068 for consistent application to both first-time assignment and permitted replacement linking without changing the controlling no-silent-price-reinterpretation principle. Final approval and Blueprint lock remain future lifecycle gates and are not claimed here.
