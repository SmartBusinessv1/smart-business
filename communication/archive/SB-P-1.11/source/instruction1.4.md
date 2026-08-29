# SMART BUSINESS MISSION CONTROL

# Instruction 1.4

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing — Follow-up Builder Review

**From:** Mission Control

**To:** Claude Code — Builder Review

**Status:** ACTIVE

**Date:** 2026-08-04

---

# Mission Objective

Perform a narrowly scoped follow-up Builder Review to determine whether previously identified Findings F3, F4, and F5 have been fully resolved in the refined SB-P-1.11 Product Blueprint and Founder Product Decision Record.

This authorization is verification only. It does not authorize Engineering Review, Sections 20–21, Blueprint lock, EIS creation, implementation planning, implementation, database work, or deployment.

---

# Context

Claude Code completed the original Builder Review in `communication/live/report1.2.md` and identified:

- F3 — multilingual catalog entry, display, and search behaviour was unspecified;
- F4 — business-scoped normalization and uniqueness matching rules were unspecified;
- F5 — merchant-facing price meaning was unresolved when inventory linking changed the selling unit.

The Founder approved the F5 decision that an existing price must never be silently reinterpreted when the selling unit changes. Codex then refined the Product Blueprint and Founder Product Decision Record and reported completion in `communication/live/report1.3.md`.

Mission Control has accepted the Codex refinement for review and now requires independent follow-up Builder Review confirmation.

---

# Execute According To

- `merge/active/00_Lighthouse_Constitution.md`
- `merge/active/01_Smart_Business_Master_System_Manifesto.md`
- `merge/active/11_Smart_Business_Product_Truth_Map.md`
- `merge/active/12_Product_Execution_and_Release_Framework.md`
- `merge/active/17_AI_Operations_Manual.md`
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
- `merge/active/P00_Operational_Profiles.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `communication/live/report1.2.md`
- `communication/live/instruction1.3.md`
- `communication/live/report1.3.md`

Use current repository evidence. Do not rely on memory where the repository can answer the question.

---

# Scope

Claude Code is authorized only to:

1. Read the refined Product Blueprint and Founder Product Decision Record.
2. Compare the refined text against original Findings F3, F4, and F5.
3. Verify whether each finding is now fully resolved, partially resolved, or unresolved.
4. Confirm that D-068 accurately records the Founder-approved F5 decision.
5. Confirm that the F3 and F4 refinements preserve merchant wording, business isolation, multilingual dignity, and human review of uncertain matches.
6. Confirm that the F5 refinement prevents silent unit-price reinterpretation and preserves unchanged state until explicit merchant confirmation succeeds.
7. Identify only genuine residual gaps directly related to F3, F4, or F5.
8. Report the result in `communication/live/report1.4.md`.

---

# Required Review

For each finding, provide one of these dispositions:

- `RESOLVED`
- `PARTIALLY RESOLVED`
- `UNRESOLVED`

## F3 — Multilingual Entry and Search

Verify that the Blueprint now clearly defines:

- English, Malayalam, and Manglish entry and display;
- preservation of merchant-entered wording;
- no forced translation;
- practical mixed-language search;
- uncertainty handling that requires merchant review rather than silent rename, merge, translation, or overwrite.

## F4 — Business-Scoped Normalization and Matching

Verify that the Blueprint now clearly defines:

- leading and trailing whitespace treatment;
- repeated internal whitespace treatment where applicable;
- Latin-letter case handling;
- business-scoped uniqueness;
- preserved display values;
- SKU and barcode exact-identifier matching rules;
- no automatic equivalence for uncertain Malayalam spelling, Manglish transliteration, or translation;
- merchant review for uncertain possible matches.

## F5 — Unit-Change Price Confirmation

Verify that the Blueprint and D-068 now clearly require:

- no silent reinterpretation of an existing numeric price under a new selling unit;
- an explicit preview showing old unit and price, proposed new unit, and price requiring confirmation;
- explicit confirmation of the price for the new unit or entry of a replacement price;
- no saved product, unit, price, or inventory-link change until confirmation succeeds;
- appropriate audit history after successful confirmation and linking;
- consistency with the pre-history link-change boundary in D-047.

---

# Constraints

Claude Code shall not:

- edit `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`;
- edit `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`;
- add, remove, renumber, reinterpret, or reopen Founder decisions;
- perform a broad second Builder Review;
- revisit findings other than F3, F4, and F5 except to note that they remain outside this instruction;
- perform Engineering Review;
- create Sections 20–21;
- approve or lock the Blueprint;
- create an EIS or implementation package;
- modify application code, tests, routes, dependencies, database, SQL, migrations, RLS, Supabase, Lovable, infrastructure, configuration, authentication, deployment, production, or governance sources;
- authorize itself or any later lifecycle stage.

If a residual issue is found, report it precisely. Do not resolve it by assumption.

---

# Deliverables

Create only:

`communication/live/report1.4.md`

The report must include:

- exact files and sources reviewed;
- separate dispositions for F3, F4, and F5;
- evidence supporting each disposition;
- confirmation of whether D-068 matches the Founder-approved decision;
- any genuine residual gap limited to F3–F5;
- exact changed-file confirmation;
- validation performed;
- a final overall disposition.

Use a protected mission branch and pull request.

---

# Completion Status

If all three findings are fully resolved, conclude exactly with:

`SB-P-1.11 FOLLOW-UP BUILDER REVIEW: F3, F4, AND F5 RESOLVED`

If any finding remains partial or unresolved, conclude exactly with:

`SB-P-1.11 FOLLOW-UP BUILDER REVIEW: REFINEMENT REQUIRED`

Engineering Review remains unauthorized until Mission Control reviews the report and separately authorizes the next lifecycle gate.
