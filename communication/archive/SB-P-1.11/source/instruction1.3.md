# SMART BUSINESS MISSION CONTROL

# Instruction 1.3

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing — Builder Review Refinement

**From:** Mission Control

**To:** Codex — Product Discovery and Blueprint Authoring

**Status:** ACTIVE

**Date:** 2026-08-04

---

# Mission Objective

Refine the approved SB-P-1.11 Product Blueprint Sections 1–19 and Founder Product Decision Record only to resolve Builder Review Findings F3, F4, and F5.

This instruction does not authorize Builder Review, Engineering Review, Sections 20–21, Blueprint lock, EIS, implementation planning, implementation, or deployment.

---

# Context

Claude Code completed the Source 18 Builder Review in:

`communication/live/report1.2.md`

Mission Control accepted the Builder Review and identified three findings requiring Codex refinement:

- F3 — multilingual catalog entry and search behaviour;
- F4 — business-unique normalization and matching rules for product name, SKU, and barcode;
- F5 — selling-price handling when inventory linking changes the selling unit.

The Founder approved Mission Control's recommendation for F5:

> When linking a non-stock product to an inventory item changes the selling unit, the existing selling price must not be silently reinterpreted. The merchant must explicitly confirm or enter the selling price for the new unit before the link is saved. Until confirmation is completed, the product and inventory link remain unchanged.

This Founder decision is authoritative for this refinement pass.

---

# Execute According To

- `merge/active/00_Lighthouse_Constitution.md`
- `merge/active/01_Smart_Business_Master_System_Manifesto.md`
- `merge/active/05_AI_Behaviour_and_Model_Training_Framework.md`
- `merge/active/11_Smart_Business_Product_Truth_Map.md`
- `merge/active/12_Product_Execution_and_Release_Framework.md`
- `merge/active/17_AI_Operations_Manual.md`
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `communication/live/report1.2.md`
- the Founder decision recorded in this instruction

Repository evidence and approved sources must be read before editing. Do not assume missing rules.

---

# Authorized Scope

Codex is authorized to modify only:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `communication/live/report1.3.md`

The refinement must remain within Product Blueprint Metadata, Mission Snapshot, and Sections 1–19.

---

# Required Work

## 1. Resolve F3 — Multilingual Entry and Search

Refine the Blueprint to state that:

- product names, descriptions, and category names may be entered and displayed in English, Malayalam, or Manglish;
- merchants are not required to translate catalog data into another language;
- the system preserves the merchant-entered wording while supporting practical search across approved languages where reliable;
- search must handle ordinary mixed-language merchant usage without presenting uncertain translation or transliteration as authoritative catalog data;
- AI may suggest interpreted matches but must clarify uncertainty rather than silently rename, translate, merge, or overwrite product records.

Keep the behaviour simple, respectful, and aligned with the Human Language Layer. Do not invent a complex translation-management system.

## 2. Resolve F4 — Uniqueness and Matching Rules

Refine the Blueprint to define merchant-facing normalization rules for business-unique product names, SKUs, and barcodes.

At minimum, specify that uniqueness checks:

- are scoped to one business only;
- ignore leading and trailing whitespace;
- treat repeated internal whitespace consistently for product-name matching;
- treat Latin-letter case differences as equivalent for matching;
- do not treat different Malayalam spellings, Manglish transliterations, or translated names as automatically equivalent unless the merchant explicitly confirms a match;
- preserve the merchant's chosen display form;
- return possible matches for review rather than silently merging uncertain records.

For SKU and barcode, preserve the merchant-entered display value while applying a consistent normalized comparison suitable for exact identifier matching. Do not invent global uniqueness.

## 3. Resolve F5 — Unit-Change Price Confirmation

Record the Founder-approved decision as the next sequential Founder decision after D-067.

Refine the Blueprint to state that:

- linking a non-stock product to inventory may change its selling unit to the inventory item's immutable base unit;
- when the unit changes, the existing price must never be silently reinterpreted under the new unit;
- before the link is saved, the merchant must explicitly confirm the selling price for the new unit or enter a replacement price;
- the preview must show the old unit and price, the proposed new unit, and the price requiring confirmation;
- until confirmation succeeds, the product record, selling unit, selling price, and inventory link remain unchanged;
- the confirmed price and completed link must enter the appropriate audit history;
- this rule applies only before sale or linked-stock-event history, consistent with the existing link boundary.

## 4. Traceability

Update the Founder Product Decision Record with the new decision and update relevant Blueprint sections, acceptance criteria, business rules, risk controls, change log, and governance history where necessary.

Do not renumber existing decisions D-001 through D-067.

Do not reopen or reinterpret unrelated Founder decisions.

## 5. Report

Create:

`communication/live/report1.3.md`

The report must:

- identify the exact new Founder decision ID;
- list the exact Blueprint sections changed for F3, F4, and F5;
- confirm no unrelated Product Truth changed;
- confirm Sections 20–21 remain absent;
- include the exact Blueprint and Founder Decision Record paths;
- include branch, commit, pull-request, validation, and changed-file evidence;
- conclude with the exact status:

`SB-P-1.11 BUILDER REVIEW REFINEMENT: READY FOR MISSION CONTROL REVIEW`

---

# Constraints

Codex must not:

- modify `communication/live/report1.2.md`;
- create or perform a new Builder Review;
- begin Engineering Review;
- create Sections 20–21;
- request or apply Blueprint lock;
- create an EIS or implementation package;
- modify application code, tests, routes, dependencies, database, SQL, migrations, RLS, Supabase, Lovable, infrastructure, configuration, authentication, deployment, or production;
- modify canonical governance sources;
- expand the refinement beyond F3, F4, and F5;
- authorize Claude Code or any later lifecycle stage;
- approve or merge its own work.

---

# Repository Workflow

- Pull and fast-forward synchronize the latest `origin/main`.
- Use a new protected mission branch based on current `origin/main`.
- Commit only the three authorized paths.
- Open a pull request against `main`.
- Do not self-approve or self-merge.

---

# Validation

Before reporting completion, verify:

- exact changed-file scope;
- Markdown Quality Gate;
- internal links;
- whitespace check;
- staged secret and credential inspection;
- existing decisions D-001 through D-067 remain intact;
- one new sequential Founder decision is recorded;
- Sections 1–19 remain structurally valid;
- Sections 20–21 remain absent;
- no unauthorized technical or governance change exists.

---

# Completion Status

`SB-P-1.11 BUILDER REVIEW REFINEMENT: READY FOR MISSION CONTROL REVIEW`
