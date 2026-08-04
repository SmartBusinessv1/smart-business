# SMART BUSINESS MISSION CONTROL

# Report 1.4

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing — Follow-up Builder Review

**From:** Claude Code — Builder Review

**To:** Mission Control

**Status:** FOLLOW-UP BUILDER REVIEW COMPLETE — MISSION CONTROL REVIEW REQUIRED

**Date:** 2026-08-04

---

# Executive Summary

Claude Code performed the narrowly scoped follow-up Builder Review authorized by `communication/live/instruction1.4.md`, verifying only whether Findings F3, F4, and F5 from `communication/live/report1.2.md` are resolved in the Codex refinement reported in `communication/live/report1.3.md`.

F3 (multilingual entry and search) and F4 (business-scoped normalization and matching) are fully resolved. F5 (unit-change price confirmation) is **partially resolved**: the core scenario the Founder decided — a non-stock product being linked to inventory for the first time — is correctly and thoroughly protected, and D-068 accurately records the Founder-approved decision. However, the same paragraph that defines this protection also permits *replacing* an existing inventory link before sale or linked-stock-event history exists (consistent with D-047), and the protective language is inconsistently scoped: some passages restrict the confirmation requirement to "linking a non-stock product," while others use broader "a proposed inventory link" wording that could also cover a unit-changing replacement on an already stock-tracked product. This is a genuine residual gap directly tied to the D-047 consistency check this instruction requires.

No protected artifact was edited. The only changed file is this report.

---

# Exact Files and Sources Reviewed

- `communication/live/instruction1.4.md` (governing this review)
- `communication/live/report1.2.md` (original Builder Review — source of F3, F4, F5)
- `communication/live/instruction1.3.md` (Codex refinement mandate and Founder-approved F5 decision text)
- `communication/live/report1.3.md` (Codex refinement completion report)
- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` (refined Blueprint, current state)
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md` (refined Decision Record, current state)
- `merge/active/00_Lighthouse_Constitution.md`, `01_Smart_Business_Master_System_Manifesto.md`, `11_Smart_Business_Product_Truth_Map.md`, `12_Product_Execution_and_Release_Framework.md`, `17_AI_Operations_Manual.md`, `18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, `P00_Operational_Profiles.md`

**Repository evidence used for verification (not relied on from memory):**

- `git diff 6904032 ff0bde7 -- docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md` — confirms D-001 through D-067 are byte-for-byte unchanged; only D-068 was appended, plus prose updates to "Open Questions" and "Final Founder Confirmation."
- `git diff 6904032 ff0bde7 -- docs/phase-1-mission-blueprint/active/SB-P-1.11.md` — 42 insertions / 6 deletions, confined to the sections listed in `report1.3.md`.
- `git diff 6904032 ff0bde7 --stat` — confirms `communication/live/report1.2.md` was not touched by the refinement.
- `grep -n "^## " docs/phase-1-mission-blueprint/active/SB-P-1.11.md` — confirms Sections 1–19 remain the complete section set; no Section 20 or 21 exists.

---

# Finding Dispositions

## F3 — Multilingual Entry and Search: `RESOLVED`

Evidence in the refined Blueprint:

- **English/Malayalam/Manglish entry and display:** §8 "Product Name and Description" — "Product names and descriptions may be entered and displayed in English, Malayalam, or Manglish." Mirrored in §8 "Categories."
- **No forced translation, preserved wording:** §8 "Product Name and Description" — "The merchant is not required to translate catalog wording into another language, and Smart Business preserves the merchant's chosen display form." Mirrored in §8 "Categories" and stated as a UX expectation in the new §9 "Multilingual Catalog Experience."
- **Practical mixed-language search:** §8 "Search and Filtering" — "Search supports ordinary mixed-language merchant usage across English, Malayalam, and Manglish where matching is reliable. It searches merchant-entered wording without requiring translated duplicate records."
- **Uncertainty requires merchant review, not silent rename/merge/translate/overwrite:** §5 "AI Assistant, Not AI Judge" — "AI may suggest interpreted search matches... It must clarify uncertainty and must never silently rename, translate, merge, or overwrite merchant catalog wording." Reinforced in §8 "Product Name and Description" ("Smart Business returns a possible match for merchant review rather than silently merging, renaming, translating, or overwriting either record"), §8 "Categories," and §8 "Search and Filtering."

Traceability is complete: new Rule 27 (§10), a new risk row (§13), a new success criterion (§14), two new acceptance criteria (§15), and updated §18/§19 change and governance history. No residual gap identified against the F3 verification checklist in `instruction1.4.md`.

## F4 — Business-Scoped Normalization and Matching: `RESOLVED`

Evidence in the refined Blueprint:

- **Business-scoped uniqueness:** every normalization clause is explicitly scoped "within the business" / "within one business" (§8 "Product Name and Description," "SKU," "Barcode," "Categories"; §10 Rules 8–9).
- **Leading/trailing whitespace:** stated for name, SKU, barcode, and category (e.g., §8 "SKU" — "SKU uniqueness ignores leading and trailing whitespace").
- **Repeated internal whitespace (where applicable):** stated for product name and category ("treats repeated internal whitespace consistently"); reasonably not restated for SKU/barcode, which are compact identifiers rather than free-text names — consistent with the instruction's "where applicable" qualifier.
- **Latin-letter case handling:** stated for name, SKU, barcode, and category ("treats Latin-letter case differences as equivalent" / "consistently" / "where letters are present").
- **Preserved display values:** explicit for all four fields (e.g., §8 "Barcode" — "The merchant-entered display value is preserved").
- **SKU/barcode exact-identifier matching:** §8 "SKU" — "consistent normalized comparison suitable for exact identifier matching"; §8 "Barcode" — "a consistent exact-identifier comparison."
- **No automatic equivalence for uncertain Malayalam spelling, Manglish transliteration, or translation; merchant review required:** stated for name ("Different Malayalam spellings, Manglish transliterations, and translated names are not automatically treated as the same product... Smart Business returns a possible match for merchant review"), SKU ("Different transliterations or translations are not inferred to be the same SKU... requires merchant review"), barcode ("A possible but non-exact match is presented for merchant review and never merged automatically" — barcodes being alphanumeric identifiers rather than language-bearing text, "Malayalam spelling" does not apply here, which is a reasonable and not a gap), and category (same pattern as name).

Traceability is complete: refined Rules 8–9 and new Rule 27 (§10), a new risk row (§13), new acceptance criteria (§15), and updated §18/§19. No residual gap identified against the F4 verification checklist in `instruction1.4.md`.

## F5 — Unit-Change Price Confirmation: `PARTIALLY RESOLVED`

### What is fully resolved

For the scenario the Founder actually decided — *linking a non-stock product to an inventory item for the first time, where the inventory item's base unit differs from the product's current selling unit* — every required element is present and correct:

- **No silent reinterpretation:** §8 "Product–Inventory Link" — "the existing numeric selling price must not be silently reinterpreted under the new unit"; §8 "Selling Unit" — "the old price cannot silently acquire the meaning of a price per new unit."
- **Explicit preview (old unit/price, proposed new unit, price requiring confirmation):** §9 "Inventory-Link Experience" — "the preview must show the current unit and selling price, the proposed inventory base unit, and the selling price that requires confirmation for that new unit."
- **Explicit confirmation or replacement price required:** §8 "Product–Inventory Link" and §9 both require the merchant to "confirm the selling price for the proposed new unit or enter a replacement price" before saving.
- **No saved change until confirmation succeeds:** §8 "Product–Inventory Link" — "Until that confirmation succeeds, the product record, selling unit, selling price, and inventory link remain unchanged"; §9 — "Cancelled, incomplete, or failed confirmation leaves the product, unit, price, and inventory link unchanged."
- **Audit history after success:** §8 "Product–Inventory Link" — "The confirmed price and completed link enter their appropriate audit histories."
- **Consistency with D-047's pre-history boundary:** §8 "Product–Inventory Link" — "This rule applies only while the link remains changeable under the no-sale-history and no-linked-stock-event-history boundary above."

**D-068 accurately records the Founder-approved decision.** The Founder-approved text supplied in `instruction1.3.md` states: "When linking a non-stock product to an inventory item changes the selling unit, the existing selling price must not be silently reinterpreted. The merchant must explicitly confirm or enter the selling price for the new unit before the link is saved. Until confirmation is completed, the product and inventory link remain unchanged." D-068 restates this core decision faithfully and adds only the elaboration `instruction1.3.md` separately required Codex to record (preview content, audit-history outcome, and explicit D-047 consistency) — it does not narrow, broaden, or alter the Founder's substantive decision. `git diff` confirms D-001 through D-067 were not touched and D-068 is the sole new, correctly sequential decision.

### Residual gap

D-047 (unchanged, and re-affirmed by §8 "Product–Inventory Link" itself) permits an inventory link to be "assigned, removed, or **replaced**" at any point before sale or linked stock-event history exists — not only assigned once. A **replacement** of an already-linked, stock-tracked product's inventory item with a *different* inventory item that has a *different* base unit would carry the identical risk the Founder decided to prevent: a previously entered price silently acquiring a new per-unit meaning. The refined text does not consistently state whether the same confirmation protection applies to this replacement case:

- §8 "Product–Inventory Link" and Founder Decision D-068 both use the narrower phrase "linking a non-stock product" — grammatically describing only the first-time assignment of a link, not a later replacement of an existing link.
- Business Rule 28 (§10) uses the same narrow phrasing: "When a proposed inventory link changes a non-stock product's selling unit..."
- By contrast, §8 "Selling Unit" and §9 "Inventory-Link Experience" use broader phrasing not limited to non-stock products or first-time linking — "If a proposed inventory link changes the product's selling unit..." and "If linking changes the selling unit..." — which could reasonably be read to also cover a replacement on an already stock-tracked product.

This inconsistency means a merchant scenario squarely inside D-047's own boundary (replacing a link before sale/stock-event history) is not clearly and uniformly covered by the same price-confirmation safeguard. This is not a new topic outside F5 — it is the same fact pattern (silent price/unit reinterpretation at link-time) applied to the "replaced" branch of the identical D-047 sentence already referenced by F5's own confirmation language, and `instruction1.4.md` explicitly requires checking "consistency with the pre-history link-change boundary in D-047" as part of verifying F5.

Per the instruction's direction ("If a residual issue is found, report it precisely. Do not resolve it by assumption"), this review does not assume whether the Founder intended the protection to also cover replacement, or intended replacement to behave differently (e.g., because a replacement necessarily starts from an already stock-tracked state where the merchant is arguably already aware unit-linked pricing can change). Mission Control should route this precise question back to Codex-facilitated Founder discovery if it elects to close the gap, or explicitly confirm the narrower Founder-approved scope was intentional and the broader wording in §8 "Selling Unit" and §9 should be narrowed to match it for internal consistency.

---

# Genuine Residual Gaps (Limited to F3–F5)

Only one residual gap was identified, and it is limited to F5:

1. **F5 — replacement-of-link scope inconsistency.** Sections affected: §8 ("Product–Inventory Link," "Selling Unit"), §9 ("Inventory-Link Experience"), §10 (Rule 28). Decision ID affected: D-068 (as recorded, its scope is narrower than D-047's full "assigned, removed, or replaced" language it claims consistency with). No other residual gap was found for F3, F4, or F5.

Findings F1, F2, F6–F21 from `report1.2.md` remain outside this instruction and are not revisited here.

---

# Exact Changed-File Confirmation

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` — **not modified by this review**.
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md` — **not modified by this review**.
- `communication/live/report1.2.md` — **not modified**.
- `communication/live/report1.3.md` — **not modified**.
- The only file changed by this review is `communication/live/report1.4.md` (new file).

No Founder decision was added, removed, renumbered, reinterpreted, or reopened by this review. No broad second Builder Review was performed — only F3, F4, and F5 were examined. No Engineering Review, Sections 20–21, Blueprint lock, EIS, implementation package, application code, test, database, SQL, migration, RLS, Supabase, Lovable, infrastructure, deployment, production, or governance-source change occurred.

---

# Validation Performed

- Exact changed-file scope: confirmed as `communication/live/report1.4.md` only via `git status` prior to commit.
- Decision-record integrity: `git diff` between the pre-refinement and post-refinement commits confirms D-001–D-067 are unchanged and D-068 is the sole, correctly sequential addition.
- Blueprint structural check: `grep -n "^## "` confirms Sections 1–19 remain the complete and only numbered section set; Sections 20–21 remain absent.
- Refinement scope check: `git diff --stat` between the pre- and post-refinement commits confirms only the Blueprint, Founder Decision Record, `instruction1.3.md`, and `report1.3.md` changed — `report1.2.md` was not touched.
- Markdown Quality Gate (`tools/markdown/quality_gate.py`): run against this report before commit.
- Whitespace check: `git diff --cached --check` run before commit.
- Staged secret and credential inspection: run against the staged diff before commit.
- Branch verification: confirmed current branch before commit.

---

# Risks and Limitations

- This report cannot record its own creating commit's SHA, since the SHA is only known after the commit is made. The commit is identifiable by its exact approved commit message on the pull request named below.
- The residual gap identified in F5 is a scope-consistency observation, not a defect in the Founder-approved core decision; it does not affect the correctness of D-068 as a faithful record of what the Founder approved.
- This review did not re-examine Findings F1, F2, or F6–F21 from `report1.2.md`; those remain as previously classified and are unaffected by this report.

---

# Mission Control Action Required

Mission Control should review this follow-up Builder Review and decide whether the F5 replacement-scope gap requires a further narrow Codex refinement pass (with Founder input on whether the confirmation safeguard should explicitly extend to link replacement, not only first-time linking), or whether the current Founder-approved scope is intentionally limited to first-time linking and the broader wording in §8 "Selling Unit" and §9 should instead be tightened to match it. Claude Code does not authorize the next actor or stage.

---

# Recommended Next Step

Route the F5 replacement-scope question back to Codex-facilitated Founder discovery for a narrow, F5-scoped refinement pass, then re-submit for a further narrow follow-up Builder Review limited to that single point before Engineering Review begins. F3 and F4 require no further Builder Review action.

---

# Completion Status

```text
SB-P-1.11 FOLLOW-UP BUILDER REVIEW: REFINEMENT REQUIRED
```

Engineering Review remains unauthorized until Mission Control reviews this report and separately authorizes the next lifecycle gate.
