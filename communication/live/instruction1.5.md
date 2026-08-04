# SMART BUSINESS MISSION CONTROL

# Instruction 1.5

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing — Replacement-Link Scope Refinement

**To:** Codex — Product Discovery and Blueprint Authoring

**From:** Mission Control

**Status:** ACTIVE

**Date:** 2026-08-04

---

# Mission Objective

Refine only the remaining F5 replacement-link scope gap identified by the accepted follow-up Builder Review in `communication/live/report1.4.md`.

This is a consistency refinement only.

No new Founder decision is required.

The already approved product principle remains controlling:

> A selling price must never be silently reinterpreted when an inventory-link action changes the selling unit.

---

# Execute According To

Execute according to:

- the Lighthouse Constitution;
- the approved Smart Business Product Truth sources;
- Source 18 — SB-P Mission Lifecycle and Delivery Framework;
- `communication/live/report1.2.md`;
- `communication/live/instruction1.3.md`;
- `communication/live/report1.3.md`;
- `communication/live/instruction1.4.md`;
- `communication/live/report1.4.md`;
- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`;
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`.

---

# Accepted Review Disposition

Mission Control accepts the follow-up Builder Review disposition:

- F3 — RESOLVED;
- F4 — RESOLVED;
- F5 — PARTIALLY RESOLVED.

The remaining gap is limited to replacement of an existing inventory link before sale or linked-stock-event history exists.

D-047 permits an inventory link to be assigned, removed, or replaced within that boundary.

The current F5 refinement clearly protects first-time linking of a non-stock product but does not state consistently that the same price-confirmation safeguard applies when replacing an existing link changes the selling unit.

---

# Authorized Refinement

Update the Product Blueprint and Founder Product Decision Record only as needed to make the approved safeguard apply consistently to both:

1. first-time linking of a non-stock product to inventory; and
2. replacement of an existing inventory link when the replacement changes the selling unit.

The refined rule must state clearly that:

- the existing selling price must never be silently reinterpreted under the replacement inventory item's base unit;
- the merchant must explicitly confirm the selling price for the proposed new unit or enter a replacement price before the replacement link is saved;
- the preview must show the current inventory link, current unit and price, proposed replacement inventory link, proposed new unit, and price requiring confirmation;
- until confirmation succeeds, the existing product record, current inventory link, selling unit, and selling price remain unchanged;
- cancellation, incomplete confirmation, validation failure, or save failure must leave the existing state unchanged;
- the confirmed price and completed replacement link must enter the appropriate audit history; and
- the rule applies only while link replacement remains permitted under D-047.

This instruction does not authorize changes to the underlying Founder-approved product principle.

---

# Founder Product Decision Record

Do not create a new Founder decision unless strictly necessary for accurate traceability.

Prefer refining D-068 so that it consistently covers any permitted inventory-link action that changes the selling unit, including first-time linking and replacement linking.

Existing decisions D-001 through D-067 must remain unchanged.

D-047 must remain unchanged unless a wording cross-reference is strictly required and does not alter its approved meaning.

Do not renumber decisions.

---

# Product Blueprint Scope

You may update only relevant wording within Product Blueprint Sections 1–19.

Likely affected areas include:

- Section 8 — Product–Inventory Link;
- Section 8 — Selling Unit;
- Section 9 — Inventory-Link Experience;
- Section 10 — applicable business rule;
- Section 13 — risk and mitigation;
- Section 14 — success criterion;
- Section 15 — acceptance criterion;
- Sections 18 and 19 — change and governance traceability.

Do not broaden the change beyond replacement-link consistency.

---

# Required Report

Report completion only in:

`communication/live/report1.5.md`

The report must include:

- the exact wording scope refined;
- whether D-068 was refined and confirmation that no new Founder decision was introduced unless unavoidable;
- the exact Blueprint sections changed;
- confirmation that F3 and F4 were not reopened;
- confirmation that D-001 through D-067 remain unchanged;
- confirmation that Sections 20–21 remain absent;
- exact changed-file evidence;
- validation results;
- the pull-request URL;
- completion status.

Do not duplicate full Blueprint Sections 1–19 in the report.

---

# Authorized Changed Paths

Only these future paths may change:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`;
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`;
- `communication/live/report1.5.md`.

No other path is authorized.

---

# Explicit Exclusions

Do not:

- reopen F3 or F4;
- conduct a new Builder Review;
- conduct Engineering Review;
- create Sections 20–21;
- request or apply Blueprint lock;
- create an EIS or implementation package;
- modify application code or tests;
- modify database schema, SQL, migrations, RLS, or Supabase;
- modify Lovable, infrastructure, environments, deployment, or production;
- modify canonical governance sources;
- begin implementation;
- authorize Claude Code or any later lifecycle stage.

Implementation authority remains none.

---

# Git and Review Protocol

- Pull and fast-forward synchronize the latest `origin/main` before beginning.
- Use a protected mission branch.
- Open a pull request against `main`.
- Do not approve or merge your own work.
- Verify exact changed-file scope before commit and before pull-request submission.
- Run the repository Markdown quality gate, whitespace check, and staged secret-pattern inspection.

---

# Completion Status Required

Conclude `communication/live/report1.5.md` with:

```text
SB-P-1.11 REPLACEMENT-LINK SCOPE REFINEMENT: READY FOR MISSION CONTROL REVIEW
```
