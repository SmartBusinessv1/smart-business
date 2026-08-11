# SB-P-1.11 — Founder Workflow Reconciliation Record

## Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.11 — Product Catalog & Pricing |
| Record | Founder Workflow Reconciliation Record |
| Decision Authority | Founder |
| Created By | Mission Control |
| Date | 2026-08-12 |
| Status | FOUNDER INTENT RECORDED — RECONCILIATION REQUIRED BEFORE IMPLEMENTATION |
| Implementation Authority | NONE |
| Production Migration Authority | NONE |

---

## 1. Purpose

Record and reconcile five Founder workflow decisions spanning SB-P-1.10 Inventory Foundation and SB-P-1.11 Product Catalog & Pricing before any implementation authority is granted.

This record does not merge Inventory Truth and Catalog Truth. Inventory remains the sole stock authority. Catalog remains the product identity, selling, pricing, tax, and sale-readiness authority. The two records remain separate and are joined only through the governed one-to-one Build Now link.

---

## 2. Founder Workflow Decisions

### FWR-001 — Inventory Bulk Onboarding

Build Now shall include CSV/XLSX bulk onboarding for inventory/opening stock, analogous in usability to SB-P-1.11 bulk Catalog import.

Bulk inventory onboarding must preserve SB-P-1.10 Inventory Truth:

- current quantity is never directly written;
- opening quantity is established only through an Opening Stock inventory movement;
- every resulting quantity remains ledger-derived and auditable;
- invalid rows must not create partial inventory or stock truth.

### FWR-002 — Downloadable Import Templates

Build Now shall provide downloadable sample/template files for:

1. Catalog bulk import; and
2. Inventory / Opening Stock bulk onboarding.

Templates must clearly distinguish required and optional fields and provide merchant-friendly example rows. They are onboarding aids, not a new source of business truth.

### FWR-003 — Smart Business SKU When Merchant Has None

A merchant-supplied SKU remains optional.

When a product is created without a merchant SKU, Smart Business shall assign a business-scoped unique tracking SKU automatically so the product can be consistently identified and tracked.

The generated SKU:

- belongs to the Catalog product identity;
- must be unique within the business;
- must not collide with merchant-supplied SKUs;
- must not encode sensitive information unnecessarily;
- must remain governed by the same audit/history rules as other meaningful product identity changes.

This decision requires explicit reconciliation with existing D-023 wording, which currently describes the SKU as optional and merchant-defined.

### FWR-004 — One SKU Rule Across Creation Channels

The same canonical SKU rule shall apply regardless of how the product is created:

- dashboard/manual entry;
- CSV/XLSX bulk import;
- WhatsApp text;
- WhatsApp voice;
- WhatsApp photo-assisted creation; and
- future governed creation channels.

Channel-specific code must not invent separate SKU behavior. Product creation must resolve through one governed domain rule:

- merchant SKU supplied → validate and use if permitted;
- merchant SKU absent → generate Smart Business tracking SKU.

Conversational creation remains subject to structured preview and explicit merchant confirmation before saving.

### FWR-005 — Inventory-First Creation Establishes Catalog Identity

Build Now merchant workflow shall follow this asymmetric relationship:

> Every newly created inventory item must have a corresponding Catalog product and governed link, while a Catalog product may exist without inventory until the merchant explicitly uses Link to Inventory.

This does **not** mean Inventory becomes Catalog or that one record is copied into the other. They remain separate truth models.

For a genuinely new inventory item, the orchestration order must be:

1. resolve whether a suitable Catalog product already exists;
2. if an existing exact/authorized match exists, present the proposed link for confirmation rather than silently creating a duplicate;
3. otherwise create the Catalog product using governed product-creation rules;
4. create the Inventory entity;
5. establish the governed one-to-one Catalog ↔ Inventory link while linking is still permitted;
6. only after identity/link establishment, record Opening Stock as an Inventory movement when an opening quantity exists.

A later Catalog-first product remains non-stock until the merchant explicitly chooses **Link to Inventory**.

No existing inventory item with stock-event history may be silently retro-linked in violation of D-047. Historical/unlinked legacy cases require a separately governed reconciliation path.

---

## 3. Explicit Reconciliation Against Existing Truth

| Existing rule | Reconciliation result |
|---|---|
| **SB-P-1.10 Inventory Truth** — quantity changes only through inventory movements; ledger is authoritative | **COMPATIBLE WITH CONDITION.** Bulk inventory onboarding must create Opening Stock movements and never set current quantity directly. FWR-005 must establish identity/link before opening-stock movement for newly created inventory. |
| **D-001** — Catalog product and Inventory item are separate records joined by explicit governed link; Inventory is stock authority | **COMPATIBLE.** FWR-005 is orchestration, not truth-model merger. Separate records and explicit link remain mandatory. |
| **D-023** — one optional merchant-defined SKU; SKU does not block creation | **AMENDMENT REQUIRED.** SKU remains optional for the merchant, but Smart Business generates a tracking SKU when none is supplied. One SKU per product and business uniqueness remain. |
| **D-047** — Inventory link may be assigned/removed/replaced only before sale or linked stock-event history exists | **COMPATIBLE WITH ORDERING CONDITION.** New inventory-first creation must resolve/create Catalog and establish link before Opening Stock or other linked stock-event history. Existing historical inventory cannot be silently linked. |
| **D-053** — dashboard plus WhatsApp text/voice/photo-assisted creation/search | **COMPATIBLE.** FWR-004 makes SKU behavior channel-independent. |
| **D-054** — conversational changes require structured preview and explicit confirmation | **COMPATIBLE.** Generated SKU and proposed Inventory/Catalog link must be visible in the preview where material to the merchant decision. |
| **D-055** — CSV/XLSX bulk Catalog import is Build Now | **EXTENDS BUILD NOW.** Catalog bulk import remains; FWR-001 adds a distinct Inventory/Opening Stock bulk onboarding mode. |
| **D-056** — valid rows save; invalid rows quarantined | **COMPATIBLE PRINCIPLE.** Inventory bulk onboarding must likewise avoid partial/invalid stock truth and expose correction needs. Exact inventory import error-state design requires implementation specification. |
| **D-057** — import never silently overwrites; identity matches enter correction decision | **COMPATIBLE.** Inventory-first onboarding must not silently create duplicate Catalog products when an existing identity match exists. |
| **D-058** — Manager import only with approved product-creation permission; employees cannot import | **NO AUTHORITY EXPANSION.** Existing fail-closed permission posture remains. Inventory bulk permission requires explicit reconciliation with SB-P-1.10 authorization rules before Build Lock. |
| **D-068** — linking must not silently reinterpret selling price when unit changes | **COMPATIBLE AND MANDATORY.** Any inventory-first link that would establish/change the Catalog selling unit must obey the same preview/confirmation safeguard before save. |

---

## 4. Product Classification

### Build Now

- CSV/XLSX Inventory / Opening Stock bulk onboarding.
- Downloadable Catalog import template.
- Downloadable Inventory / Opening Stock template.
- Smart Business-generated SKU when merchant provides none.
- One canonical SKU rule across manual, bulk, text, voice, and photo creation.
- Inventory-first orchestration that establishes or confirms the corresponding Catalog product and governed link before Opening Stock history is created.
- Duplicate/match review instead of silent Catalog duplication.

### Build Later

- Merchant-configurable SKU formatting conventions.
- Barcode/SKU label generation and printing.
- Batch/lot/expiry-aware inventory import.
- Multi-unit import conversions or packaging relationships.
- Historical reconciliation tooling for already-existing unlinked Inventory/Catalog records if later required.

### Add-on

None.

### Separate Product

None.

### Reject

- Making Inventory and Catalog the same record/source of truth.
- Direct current-stock writes from spreadsheet rows.
- Silent duplicate Catalog creation when an existing match is detected.
- Silent automatic linking after sale or linked stock-event history exists.
- Channel-specific SKU rules.
- Auto-generated SKU as a substitute for merchant barcode or legal/product-standard identifiers.

---

## 5. Required Pre-Implementation Gates

Implementation must not begin from this record alone.

Before Build Lock, Mission Control must obtain a bounded reconciliation confirming:

1. the exact D-023 amendment wording and SKU generation/idempotency/uniqueness behavior;
2. the Inventory bulk import transaction model, row-failure behavior, and Opening Stock audit semantics;
3. permission treatment for Inventory bulk onboarding under the current Phase 1 fail-closed role infrastructure;
4. atomicity/order for Catalog creation, Inventory creation, link establishment, and Opening Stock movement;
5. duplicate/match handling across Catalog and Inventory without silent overwrite;
6. D-068 price/unit confirmation behavior in inventory-first creation;
7. downloadable template schemas and versioning;
8. Security + Supabase architecture review for any new tables, RPCs, privileged paths, or import-support state.

The existing SB-P-1.11 parser/runtime/security gate remains independent and blocked until its own evidence path closes.

---

## 6. Founder Intent Summary

The merchant should experience Catalog and Inventory as one coherent workflow without collapsing their underlying truth models.

A small merchant should be able to bring existing products into Smart Business through a familiar spreadsheet, text, voice, photo, or manual entry without already possessing a formal SKU system. Smart Business may provide the tracking structure the merchant lacks, while keeping every stock quantity auditable and every consequential link under explicit governed control.

---

## 7. Record Status

**`FOUNDER WORKFLOW INTENT RECORDED — ARCHITECTURE / SECURITY RECONCILIATION REQUIRED BEFORE IMPLEMENTATION`**

No implementation, migration, Lovable mutation, production-data mutation, permission expansion, or release authority is granted by this record.
