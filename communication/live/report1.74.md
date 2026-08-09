# SMART BUSINESS — RESEARCH INTELLIGENCE COMPLETION REPORT

## SB-P-1.11-RG-1 — KERALA MARKET GLOSSARY RESEARCH

**Report ID:** report1.74  
**Mission:** SB-P-1.11-RG-1 — Kerala Market Glossary Research — Catalog Categories & Selling Units  
**Authorized By:** `communication/live/instruction1.68.md`  
**Reporting Room:** 08_Research_Intelligence  
**Implementation Authority:** None — research/documentation only  
**Research Date:** 2026-08-09

**Final Verdict:** `PASS WITH RESEARCH CAUTIONS — GLOSSARY READY FOR IMPLEMENTATION SPECIFICATION`

---

## 1. Research Coverage

The mission deep-researched Kerala/India merchant-facing vocabulary for two Catalog selector needs:

1. Selling Unit presets.
2. Product Category presets.

Evidence coverage included:

- Kerala State Civil Supplies Corporation (Supplyco) product and price vocabulary;
- MILMA product families, package presentations and retail size terminology;
- Kerala Tourism Responsible Tourism food-service listings;
- Kerala-location Reliance SMART Bazaar product-family language;
- Lulu Hypermarket India category structure;
- JioMart broad retail categories and package/retail terminology;
- Kerala Legal Metrology Department rules and references;
- Department of Consumer Affairs / India Code metrology sources.

The research explicitly separated official/legal terminology, merchant-facing evidence, and research synthesis.

---

## 2. Canonical Glossary Deliverable

Created:

`docs/research/kerala-market-catalog-glossary.md`

The glossary contains:

- purpose and governance constraints;
- research method;
- CORE / SECONDARY / CUSTOM-ONLY Selling Unit recommendations;
- selling-unit alias/normalization guidance;
- CORE / SECONDARY / CUSTOM-ONLY Category recommendations;
- category aliases/local-language hints;
- merchant-type applicability matrix;
- Malayalam/local-language notes;
- deliberate exclusions;
- selector-behavior guidance;
- mobile ordering guidance;
- two machine-friendly implementation-planning sections;
- source list with retrieval date;
- confidence and ambiguity notes.

---

## 3. Recommended Selling Unit Presets

### CORE — 10

1. Piece
2. Packet
3. Bottle
4. Box
5. Kilogram
6. Gram
7. Litre
8. Millilitre
9. Plate
10. Cup

### SECONDARY — 10

1. Pouch
2. Tin
3. Tray
4. Bowl
5. Pair
6. Set
7. Roll
8. Metre
9. Carton
10. Bundle

A `Custom unit` path remains mandatory.

No unit conversion is recommended or authorized.

---

## 4. Recommended Category Presets

### CORE — 12

1. Grocery & Staples
2. Snacks & Packaged Foods
3. Beverages
4. Dairy & Chilled
5. Bakery & Sweets
6. Fruits & Vegetables
7. Meat, Fish & Eggs
8. Frozen Foods
9. Personal Care
10. Home Care & Cleaning
11. Prepared Food & Meals
12. Stationery & General Items

### SECONDARY — 8

1. Cooking Essentials
2. Tea & Coffee
3. Ready-to-Cook & Ready-to-Eat
4. Ice Cream & Desserts
5. Baby Care
6. Health & Wellness
7. Household & Kitchen
8. Pet Care

Existing merchant-created categories, `Create new category`, and Uncategorized must remain available.

Preset selection must not become a compulsory global taxonomy.

---

## 5. Strongest Evidence Sources

The strongest local evidence was:

- Supplyco: everyday Kerala commodity naming, mixed English/local terminology and retail pack forms (`gm`, `kg`, `ml`, `litre`, `pkt`, `bottle`).
- MILMA: Kerala dairy category families and packaging/size forms including packets, cups, pouches, tins, packs, g/ml/litre.
- Kerala Tourism Responsible Tourism: repeated food-service units including per plate, per cup, per bowl, per piece and litre.
- Reliance SMART Bazaar Kerala locations: Fruits & Vegetables, Staples, Dairy, Packaged Food, Home & Personal Care.

India-wide supporting evidence from Lulu Hypermarket and JioMart confirmed broad retail category conventions such as packaged foods, beverages, dairy/bakery, personal care, home care, cooking essentials and stationery.

Kerala Legal Metrology and Government of India sources were used to validate canonical metric terminology and to prevent regulatory language from being misused as automatic product behavior.

---

## 6. Important Exclusions / Ambiguities

### Selling Units

Excluded from default presets:

- Half / Full / Small / Medium / Large — relative descriptors, not stable units.
- Glass / Scoop / Serving — context-dependent capacity or serving concepts.
- Quintal / Case — primarily wholesale-oriented for the target Build Now experience.
- Dozen — familiar commercially but kept custom-only because Legal Metrology prohibits dozen as a packaged net-quantity expression; the product should avoid blurring legal package quantity with merchant sale-unit semantics.

Ambiguities retained with caution:

- `gm` should be searchable as an alias for Gram even though `g` is the SI symbol.
- `Can` may match Tin, but custom entry remains because merchants may distinguish the forms.
- Bundle/Bunch is product-dependent.

### Categories

Excluded from default presets:

- GST/HSN or other regulatory classifications;
- Medicines/Pharmacy;
- Alcohol;
- Tobacco/Nicotine;
- brand names;
- large e-commerce style deep category hierarchies;
- categories well outside the current target merchant focus.

---

## 7. Implementation Cautions

The future Engineering Implementation Specification should preserve these cautions:

1. Presets are convenience choices, not global compulsory master data.
2. Existing business-owned categories must remain first-class.
3. Selecting a Category preset must not silently create duplicates.
4. Search may recognize aliases/local terms, but must not silently rewrite merchant data.
5. Custom unit and Create new category must remain available.
6. No kg↔g, litre↔ml, pack↔piece or other conversion logic is authorized.
7. The linked Inventory item's immutable base unit remains the authority where D-005 applies.
8. No product auto-categorization is authorized.
9. Avoid displaying all CORE + SECONDARY values as one long mobile dropdown; searchable selection is preferable.
10. Malayalam/local wording should be treated as optional search/support language, not a forced UI language standard.

---

## 8. Research Cautions

The glossary is ready for Engineering specification use, with these explicit limitations:

- This was deep web/first-party research, not a statistically representative field survey of Kerala merchants.
- No direct merchant interviews were conducted under this mission.
- Large-retailer taxonomies were simplified intentionally to protect D-008 and reduce cognitive load.
- `Prepared Food & Meals` is a research synthesis for the restaurant/cafe target rather than a label mandated by one authoritative source.
- Malayalam translations are usability aids and aliases, not evidence of one universally preferred merchant label.

These limitations do not prevent the glossary from serving as an implementation-planning input because the proposed presets remain optional and merchant-controlled.

---

## 9. Boundary Confirmation

No product code was modified.

No Supabase schema, data, migrations, RLS, functions, RPCs or public commands were modified.

No twentieth Catalog command was added.

No Lovable project was modified.

No unit-conversion or auto-categorization behavior was implemented.

No publish, deploy or domain cutover occurred.

This mission produced research/documentation only.

---

## 10. Final Verdict

`PASS WITH RESEARCH CAUTIONS — GLOSSARY READY FOR IMPLEMENTATION SPECIFICATION`

The research provides a bounded, Kerala-informed vocabulary that Engineering can consume without guessing while preserving merchant custom entry, category ownership, flat categories, Inventory unit authority and human decision control.

---

## Next Logical Step

Mission Control reviews the glossary and report. After human approval and merge, use `docs/research/kerala-market-catalog-glossary.md` as canonical research input to the SB-P-1.11 Build Now Gap Closure Engineering Implementation Specification covering the preset selector implementation alongside the remaining Build Now gap-closure work.
