# SMART BUSINESS MISSION CONTROL

# Report 1.3

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing — Builder Review Refinement

**From:** Codex — Product Discovery and Blueprint Authoring

**To:** Mission Control

**Status:** READY FOR MISSION CONTROL REVIEW

**Date:** 2026-08-04

---

# Executive Summary

Codex completed only the refinement of accepted Builder Review Findings F3, F4, and F5 authorized by `communication/live/instruction1.3.md`.

- F3 now defines simple multilingual product and category entry, display, and search behavior for English, Malayalam, and Manglish without forced translation or authoritative uncertain interpretation.
- F4 now defines business-scoped, merchant-facing normalization and matching behavior for product names, SKUs, barcodes, and category names while preserving merchant-entered display values.
- F5 now prevents a selling price from being silently reinterpreted when inventory linking changes the selling unit. The Founder-approved behavior is recorded as D-068.

No unrelated Product Truth changed. No new Builder Review or Engineering Review was performed.

---

# New Founder Decision

**Exact new decision ID:** D-068.

D-068 records that when linking a non-stock product to inventory would change the selling unit to the inventory item's immutable base unit:

- the existing selling price is never silently reinterpreted;
- the merchant must explicitly confirm the selling price for the new unit or enter a replacement price before saving;
- the preview shows the old unit and price, the proposed new unit, and the price requiring confirmation;
- until confirmation succeeds, the product record, selling unit, selling price, and inventory link remain unchanged;
- the confirmed price and completed link enter the appropriate audit history; and
- the rule applies only before sale or linked-stock-event history, consistent with D-047.

Existing decisions D-001 through D-067 remain intact and were not renumbered.

---

# Exact Blueprint Refinements

## F3 — Multilingual Entry and Search

- Metadata — refinement status and accepted Builder Review state.
- Section 5, `AI Assistant, Not AI Judge` — uncertain multilingual interpretation cannot silently rename, translate, merge, or overwrite merchant wording.
- Section 8, `Product Name and Description` — English, Malayalam, and Manglish entry/display, no forced translation, merchant wording preserved.
- Section 8, `Categories` — the same approved language and merchant-review behavior for category names.
- Section 8, `Search and Filtering` — practical mixed-language search, separation of reliable matches from uncertain interpretation, and no authoritative translation/transliteration assumption.
- Section 9, `Multilingual Catalog Experience` — merchant-facing display and search expectations.
- Section 10 — new Rule 27.
- Section 13 — multilingual matching risk and mitigation.
- Section 14 — multilingual success criteria.
- Section 15 — multilingual entry/display and search acceptance criteria.
- Sections 18 and 19 — change and governance traceability.

## F4 — Uniqueness and Matching Rules

- Section 8, `Product Name and Description` — business-scoped whitespace and Latin-case normalization while preserving display wording; uncertain Malayalam spelling, Manglish transliteration, or translation matches require merchant review.
- Section 8, `SKU` — business-scoped exact-identifier normalization and preserved display value.
- Section 8, `Barcode` — business-scoped exact-identifier normalization and preserved display value.
- Section 8, `Categories` — corresponding business-scoped name normalization and uncertain-match review behavior.
- Section 8, `Search and Filtering` — exact normalized identifier matching remains distinct from interpreted language matching.
- Section 10 — refined Rules 8 and 9 and new Rule 27.
- Section 13 — duplicate/multilingual matching risk control.
- Section 15 — normalized uniqueness and display-preservation acceptance criteria.
- Sections 18 and 19 — change and governance traceability.

## F5 — Unit-Change Price Confirmation

- Section 8, `Product–Inventory Link` — mandatory price confirmation/replacement before a unit-changing link may be saved; unchanged state until success; audit outcome.
- Section 8, `Selling Unit` — existing price cannot silently acquire a new per-unit meaning.
- Section 9, `Inventory-Link Experience` — preview content and atomic no-change behavior on cancellation, incompletion, or failure.
- Section 10 — new Rule 28.
- Section 13 — silent price reinterpretation risk and mitigation.
- Section 14 — price/unit-linking success criterion.
- Section 15 — explicit preview, confirmation, and unchanged-state acceptance criterion.
- Sections 18 and 19 — D-068 and refinement traceability.

---

# Exact Artifact Paths

- Product Blueprint: `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- Founder Product Decision Record: `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- Refinement report: `communication/live/report1.3.md`

---

# Scope Confirmation

- No unrelated Product Truth was added, removed, reopened, or reinterpreted.
- `communication/live/report1.2.md` was not modified.
- Product Blueprint Sections 1–19 remain structurally present.
- Sections 20–21 remain absent.
- No Blueprint lock was requested or applied.
- No new Builder Review or Engineering Review was performed.
- No EIS, implementation package, application code, test, route, dependency, database, SQL, migration, RLS, Supabase, Lovable, infrastructure, configuration, authentication, deployment, production, or governance-source change occurred.
- Claude Code and all later lifecycle stages remain unauthorized by this refinement.

---

# Changed-File Evidence

The pull request changes exactly:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `communication/live/report1.3.md`

No other file changed.

---

# Git and Pull Request Evidence

- Repository: `SmartBusinessv1/smart-business`.
- Synchronized base: `origin/main` at `78ecbc7faa61c4c3bede612f2fa5aa48b816fd5b`.
- Branch: `mission/SB-P-1.11-builder-review-refinement-f3-f5`.
- Product-artifact refinement commit: `ab7436b78a441bfeed649a82d92ac5987a1e5f92`.
- Product-artifact commit message: `Refine SB-P-1.11 Builder Review findings F3-F5`.
- Pull request: https://github.com/SmartBusinessv1/smart-business/pull/33
- Pull-request target: `main`.
- Pull-request state at report preparation: DRAFT / OPEN.
- Report publication commit message: `Report SB-P-1.11 Builder Review refinement`.

---

# Validation Results

- Repository Markdown Quality Gate for both refined product artifacts: PASS with zero warnings and zero failures.
- Pre-commit Markdown Quality Gate for both refined product artifacts: PASS.
- Existing decision diff inspection: PASS — D-001 through D-067 have no changed decision rows.
- Sequential decision inspection: PASS — D-068 is the sole new Founder decision.
- Founder authority traceability: PASS — D-068 matches the Founder-approved F5 decision supplied by Instruction 1.3.
- Structural validation: PASS — canonical Sections 1–19 remain present with valid heading hierarchy.
- Forbidden-section validation: PASS — Sections 20–21 remain absent.
- Changed-file scope before report creation: PASS — only the Blueprint and Founder Product Decision Record changed.
- `git diff --check`: PASS.
- Staged secret and credential inspection: PASS.
- Remote branch verification: PASS at `ab7436b78a441bfeed649a82d92ac5987a1e5f92` before this report was added.
- Pull-request verification: PASS — PR #33 targets `main` from the authorized refinement branch.
- Internal artifact link: PASS — Blueprint and Founder Decision Record retain their reciprocal local relationship without broken path changes.

This report will receive the same Markdown, whitespace, staged-scope, and secret checks before publication.

---

# Risks and Limitations

- This refinement resolves only F3, F4, and F5. It does not disposition or implement any Engineering Review input from the Builder Review.
- This report records the immutable product-artifact commit because a report cannot contain the SHA of the same commit that first creates the report. The report publication commit is identifiable by its exact message on PR #33.
- Mission Control must review this refinement and separately decide the next Source 18 lifecycle action. Codex does not authorize that action.

---

# Required Next Step

Mission Control should review the F3–F5 refinements in PR #33 and decide whether the refined Sections 1–19 require follow-up Builder Review. Engineering Review, Sections 20–21, lock, EIS, implementation, and deployment remain outside this authorization.

---

# Completion Status

SB-P-1.11 BUILDER REVIEW REFINEMENT: READY FOR MISSION CONTROL REVIEW
