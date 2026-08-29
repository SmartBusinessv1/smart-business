# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-RG-1 — KERALA MARKET GLOSSARY RESEARCH

**Mission ID:** SB-P-1.11-RG-1  
**Mission Name:** Kerala Market Glossary Research — Catalog Categories & Selling Units  
**Reporting Room:** 08_Research_Intelligence  
**Mission Status:** ACTIVE AFTER MERGE  
**Authorized By:** Mission Control  
**Implementation Authority:** NONE — research/documentation only

---

## 1. Mission Objective

Deep-research the real Kerala brick-and-mortar merchant vocabulary needed to provide useful preset options for Smart Business Catalog **Category** and **Selling Unit** selectors.

The research must result in a canonical repository glossary that Claude Code can later consume during the SB-P-1.11 Build Now gap-closure implementation.

This is not a UI implementation mission.

---

## 2. Product Context

Smart Business serves Kerala brick-and-mortar merchants, especially:

- bakeries;
- groceries;
- mini-marts;
- supermarkets;
- cafes;
- restaurants;
- local retail businesses.

The preset lists must reduce typing and improve familiarity without forcing merchants into a rigid taxonomy.

The merchant must always retain a **custom entry / create new** path.

---

## 3. Governing Product Decisions

Research must preserve these locked decisions:

- D-006: Category is optional.
- D-007: Categories are flat in Build Now.
- D-008: Categories remain merchant-defined and business-owned; Smart Business must not impose a compulsory universal taxonomy.
- D-051: Every non-stock product has one selling unit.
- D-052: Build Now provides familiar standard units plus a merchant-defined custom unit.

Therefore:

- category presets are **suggested convenience options**, not mandatory master data;
- selling-unit presets are **familiar standard choices**, with custom entry preserved;
- no AI auto-classification or silent assignment is authorized.

---

## 4. Research Scope — Selling Units

Deep-search Kerala merchant practice and produce a prioritized glossary of units commonly used for product sale and stock presentation.

Cover at minimum:

- count-based units;
- weight units;
- volume units;
- packaging units;
- food-service / bakery units;
- local-retail shorthand where genuinely common;
- English display form;
- Malayalam/local terminology or transliteration where useful;
- common abbreviations;
- normalization / canonical value recommendation;
- whether each unit should be a default preset, secondary preset, or custom-only suggestion.

Examples such as Piece, Packet, Bottle, Kg, Gram, Litre, ml, Box, Dozen, Tray, etc. are starting hypotheses only — verify rather than copy them blindly.

Identify ambiguous terms and terms that should not become canonical units.

Do not introduce unit conversion logic. This mission is glossary research only.

---

## 5. Research Scope — Product Categories

Deep-search Kerala merchant practice and produce a prioritized preset glossary for common merchant-facing product categories.

Cover the needs of:

- grocery / supermarket;
- bakery;
- cafe / restaurant;
- mini-mart / convenience retail;
- household / personal-care retail;
- other common Kerala local-retail patterns where evidence supports inclusion.

For each proposed category include:

- recommended English display label;
- Malayalam/local wording or transliteration where useful;
- common alternative names/synonyms;
- applicable merchant types;
- examples of products normally placed there;
- overlap/ambiguity warnings;
- preset priority: `CORE`, `SECONDARY`, or `CUSTOM-ONLY`;
- rationale.

Avoid overly granular taxonomies that increase cognitive load.

Avoid regulatory/legal tax classifications being presented as ordinary categories.

Avoid implying one category is universally correct for a product.

---

## 6. Evidence Standard

Use deep external research.

Prefer authoritative or first-party evidence where available, including relevant Kerala/India retail, measurement, packaged-goods, food-service, trade, standards, retailer, POS, or merchant-facing sources.

Supplement with credible market evidence where formal sources do not capture everyday merchant vocabulary.

Separate:

- official/legal/standards terminology;
- common merchant practice;
- research inference.

Do not present unsupported assumptions as Kerala-market facts.

Record sources and retrieval date.

If sources disagree, document the disagreement rather than forcing false certainty.

---

## 7. Required Repository Deliverable

Create:

`docs/research/kerala-market-catalog-glossary.md`

The file must be implementation-consumable and contain at minimum:

1. Purpose and scope.
2. Research method and evidence standard.
3. Recommended Selling Unit preset set.
4. Selling Unit synonym/normalization table.
5. Recommended Category preset set.
6. Category synonym/alias table.
7. Merchant-type applicability matrix.
8. Malayalam/local-language notes where useful.
9. Terms deliberately excluded and why.
10. Implementation guidance for selector behavior.
11. Source list with citations/links and retrieval date.
12. Confidence notes / unresolved ambiguities.

Also include two clearly marked machine-friendly sections that Claude Code can copy into implementation planning:

### Recommended Selling Unit Presets

Use stable identifiers and display labels, e.g. conceptual structure:

`id | display_label | common_aliases | priority | notes`

### Recommended Category Presets

Use stable identifiers and display labels, e.g. conceptual structure:

`id | display_label | aliases | merchant_types | priority | notes`

Do not create application code, JSON seed files, migrations, database rows, or UI components under this mission.

---

## 8. UX Interpretation Boundary

The future app behavior should be research-informed but merchant-controlled:

### Selling Unit

- preset selector for familiar units;
- searchable where practical;
- custom unit option;
- no automatic unit conversion;
- no forced replacement of merchant wording without explicit user action.

### Category

- preset suggestions for common Kerala-market categories;
- existing merchant-created categories remain visible;
- `Create new category` / custom category remains available;
- presets must not become a compulsory taxonomy;
- merchant may ignore all presets.

The research room may recommend ordering/grouping but may not redesign the Catalog architecture.

---

## 9. Explicitly Not Authorized

Do not:

- modify product code;
- modify Supabase schema/data;
- add migrations;
- add RPCs or public commands;
- add a twentieth Catalog command;
- alter D-001/D-002/D-050 inventory authority;
- change category ownership rules;
- add unit conversions;
- implement auto-categorization;
- publish/deploy;
- modify Lovable;
- self-merge.

---

## 10. Required Research Report

Create:

`communication/live/report1.74.md`

Report:

- research coverage;
- strongest evidence sources;
- glossary file path;
- recommended number of CORE and SECONDARY presets for categories and units;
- important exclusions/ambiguities;
- any implementation cautions;
- final verdict.

Allowed verdicts:

- `PASS — GLOSSARY READY FOR IMPLEMENTATION SPECIFICATION`
- `PASS WITH RESEARCH CAUTIONS — GLOSSARY READY FOR IMPLEMENTATION SPECIFICATION`
- `STOPPED — EVIDENCE GAP`
- `FAIL`

---

## 11. Completion

1. Deep-research the Kerala market.
2. Create `docs/research/kerala-market-catalog-glossary.md`.
3. Create `communication/live/report1.74.md`.
4. Run repository/Markdown quality gates.
5. Open one completion PR containing only the research deliverables.
6. Stop.

Do not self-merge.

---

## Next Logical Step

After Mission Control accepts the glossary, use it as a canonical input to the SB-P-1.11 Build Now Gap Closure Engineering Implementation Specification so Claude Code can implement preset category and selling-unit selectors without guessing Kerala merchant vocabulary.