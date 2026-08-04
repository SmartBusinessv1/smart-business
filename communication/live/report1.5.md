# SMART BUSINESS MISSION CONTROL

# Report 1.5

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing — Replacement-Link Scope Refinement

**From:** Codex — Product Discovery and Blueprint Authoring

**To:** Mission Control

**Status:** READY FOR MISSION CONTROL REVIEW

**Date:** 2026-08-04

---

# Executive Summary

Codex completed only the remaining F5 replacement-link scope refinement authorized by `communication/live/instruction1.5.md`.

The existing no-silent-price-reinterpretation safeguard now applies consistently when a selling-unit change results from either:

1. first-time assignment of an inventory link; or
2. permitted replacement of an existing inventory link under D-047.

F3 and F4 were not reopened. No new Founder decision was created.

---

# Exact Wording Scope Refined

The Product Blueprint and D-068 now state consistently that when first-time assignment or permitted replacement would change the selling unit:

- the existing selling price is never silently reinterpreted under the proposed inventory item's base unit;
- the merchant must explicitly confirm the selling price for the proposed new unit or enter a replacement price before saving;
- a first-time-link preview shows the current unit and price, proposed inventory link and new unit, and price requiring confirmation;
- a replacement-link preview shows the current inventory link, current unit and price, proposed replacement inventory link and new unit, and price requiring confirmation;
- until confirmation and saving succeed, the existing product record, current inventory link state, selling unit, and selling price remain unchanged;
- cancellation, incomplete confirmation, validation failure, or save failure preserves that existing state;
- the confirmed price and completed assignment or replacement enter the appropriate audit history; and
- the safeguard applies only while assignment or replacement remains permitted before sale or linked-stock-event history under D-047.

---

# Founder Decision Record

- D-068 was refined to cover both first-time assignment and permitted replacement when either changes the selling unit.
- No new Founder decision was introduced.
- D-001 through D-067 remain unchanged.
- D-047 remains unchanged; its approved assignment/removal/replacement boundary is preserved.
- The controlling Founder-approved principle did not change: a selling price must never be silently reinterpreted when an inventory-link action changes the selling unit.

---

# Exact Blueprint Sections Changed

- Section 8, `Product–Inventory Link` — explicit first-time and replacement scope, unchanged-state failure behavior, audit outcome, and D-047 boundary.
- Section 8, `Selling Unit` — equal protection for first-time and replacement unit changes.
- Section 9, `Inventory-Link Experience` — separate first-time and replacement preview requirements and common atomic no-change behavior.
- Section 10, Rule 28 — assignment and replacement consistency.
- Section 13 — replacement-inclusive risk and mitigation.
- Section 14 — replacement-inclusive success criterion.
- Section 15 — separate first-time and replacement acceptance criteria plus shared failure and audit behavior.
- Section 18 — Version 0.3 change traceability.
- Section 19 — accepted follow-up review and authorized refinement governance history.

No other Product Blueprint section changed.

---

# F3 and F4 Confirmation

- F3 multilingual entry and search wording was not changed, reopened, or reinterpreted.
- F4 business-scoped normalization and matching wording was not changed, reopened, or reinterpreted.
- This refinement addresses only the remaining F5 replacement-link consistency gap.

---

# Exact Artifact Paths

- Product Blueprint: `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- Founder Product Decision Record: `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- Refinement report: `communication/live/report1.5.md`

---

# Structural and Scope Confirmation

- Product Blueprint Sections 1–19 remain structurally present.
- Sections 20–21 remain absent.
- No Builder Review or Engineering Review was performed.
- No Blueprint lock was requested or applied.
- No EIS, implementation package, application code, tests, database, SQL, migrations, RLS, Supabase, Lovable, infrastructure, configuration, authentication, deployment, production, or governance-source change occurred.
- No later actor or lifecycle stage was authorized.

---

# Exact Changed-File Evidence

The pull request changes exactly:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `communication/live/report1.5.md`

No other path changed.

---

# Git and Pull Request Evidence

- Repository: `SmartBusinessv1/smart-business`.
- Synchronized base: `origin/main` at `63c6918173a407893703b6aa8a435353e6ad98cc`.
- Branch: `mission/SB-P-1.11-f5-replacement-link-refinement`.
- Product-artifact refinement commit: `9c07851f1c3933400e2d9aa380965d6a98205ce5`.
- Product-artifact commit message: `Refine SB-P-1.11 F5 replacement-link scope`.
- Pull request: https://github.com/SmartBusinessv1/smart-business/pull/37
- Pull-request target: `main`.
- Pull-request state at report preparation: DRAFT / OPEN.
- Report publication commit message: `Report SB-P-1.11 replacement-link refinement`.

---

# Validation Results

- Repository Markdown Quality Gate for both refined product artifacts: PASS with zero warnings and zero failures.
- Pre-commit Markdown Quality Gate for both refined product artifacts: PASS.
- Decision diff inspection: PASS — D-001 through D-067 have no changes; D-068 is refined; no D-069 or other new decision exists.
- D-047 inspection: PASS — unchanged.
- F3/F4 diff inspection: PASS — no multilingual or normalization/matching wording changed.
- Blueprint scope inspection: PASS — only Sections 8, 9, 10, 13, 14, 15, 18, and 19 changed.
- Structural validation: PASS — Sections 1–19 retained with valid heading hierarchy.
- Forbidden-section validation: PASS — Sections 20–21 absent.
- Changed-file scope before report creation: PASS — only the Blueprint and Founder Product Decision Record changed.
- `git diff --check`: PASS.
- Staged secret and credential inspection: PASS.
- Remote branch verification: PASS at `9c07851f1c3933400e2d9aa380965d6a98205ce5` before this report was added.
- Pull-request verification: PASS — PR #37 targets `main` from the authorized refinement branch.
- Internal artifact links: PASS — no link path changed.

This report will receive the same Markdown, whitespace, staged-scope, and secret checks before publication.

---

# Risks and Limitations

- This pass resolves only the F5 replacement-link consistency gap. It does not perform or replace the follow-up Builder Review needed to verify the refinement.
- This report records the immutable product-artifact commit because a report cannot contain the SHA of the same commit that first creates the report. The report publication commit is identifiable by its exact message on PR #37.
- Mission Control must review this refinement and separately decide any next Source 18 lifecycle action.

---

# Required Next Step

Mission Control should review PR #37 and decide whether to authorize a follow-up Builder Review limited to the F5 replacement-link scope. Engineering Review, Sections 20–21, lock, EIS, implementation, and deployment remain unauthorized.

---

# Completion Status

SB-P-1.11 REPLACEMENT-LINK SCOPE REFINEMENT: READY FOR MISSION CONTROL REVIEW
