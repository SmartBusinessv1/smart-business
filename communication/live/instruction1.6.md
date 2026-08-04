# SMART BUSINESS MISSION CONTROL

# Instruction 1.6

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing — Final F5 Replacement-Link Verification

**Authorized By:** Mission Control

**Assigned To:** Claude Code — Builder Review

**Status:** ACTIVE

**Date:** 2026-08-04

---

# Mission Objective

Perform a final, narrowly scoped Builder Review verification confirming whether the remaining F5 replacement-link gap identified in `communication/live/report1.4.md` has been resolved by the Codex refinement recorded in `communication/live/report1.5.md`.

This is a verification mission only.

This is not a broad Builder Review.

This is not Engineering Review.

No implementation work is authorized.

---

# Execute According To

Execute according to:

- `merge/active/00_Lighthouse_Constitution.md`
- `merge/active/01_Smart_Business_Master_System_Manifesto.md`
- `merge/active/11_Smart_Business_Product_Truth_Map.md`
- `merge/active/12_Product_Execution_and_Release_Framework.md`
- `merge/active/17_AI_Operations_Manual.md`
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
- `communication/live/report1.2.md`
- `communication/live/report1.4.md`
- `communication/live/instruction1.5.md`
- `communication/live/report1.5.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`

---

# Authorized Verification Scope

Claude Code is authorized only to verify whether the remaining F5 replacement-link scope gap is fully resolved.

The verification must confirm that the no-silent-price-reinterpretation safeguard applies consistently when a selling-unit change results from either:

1. first-time assignment of an inventory link; or
2. permitted replacement of an existing inventory link under D-047.

The verification must inspect the refined wording in:

- Founder Decision D-068;
- Section 8, `Product–Inventory Link`;
- Section 8, `Selling Unit`;
- Section 9, `Inventory-Link Experience`;
- Section 10, Rule 28;
- the related risk, success, acceptance, change-history, and governance-traceability wording in Sections 13, 14, 15, 18, and 19.

---

# Required Verification Questions

Claude Code must answer all of the following:

1. Does D-068 now cover both first-time assignment and permitted replacement when either changes the selling unit?
2. Does the Blueprint prevent an existing selling price from being silently reinterpreted under the proposed new unit in both scenarios?
3. Does each scenario require explicit merchant confirmation of the selling price for the proposed new unit or entry of a replacement price before saving?
4. Does the first-time-link preview show the current unit and price, proposed inventory link and new unit, and the price requiring confirmation?
5. Does the replacement-link preview show the current inventory link, current unit and price, proposed replacement inventory link and new unit, and the price requiring confirmation?
6. Do cancellation, incomplete confirmation, validation failure, and save failure preserve the existing product record, current link state, selling unit, and selling price?
7. Do the confirmed price and completed assignment or replacement enter the appropriate audit history?
8. Is the safeguard consistently bounded by D-047's no-sale-history and no-linked-stock-event-history rule?
9. Are D-001 through D-067 unchanged?
10. Was no new Founder decision introduced?
11. Were F3 and F4 left unchanged and not reopened?
12. Do Sections 1–19 remain structurally complete with Sections 20–21 absent?

---

# Required Disposition

Claude Code must issue exactly one overall disposition:

- `RESOLVED`
- `PARTIALLY RESOLVED`
- `UNRESOLVED`

If the disposition is `PARTIALLY RESOLVED` or `UNRESOLVED`, identify the exact remaining inconsistency, affected section or decision, merchant-facing consequence, and the minimum correction required.

Do not invent a new Founder decision.

Do not reinterpret Product Truth.

---

# Required Report

Create only:

`communication/live/report1.6.md`

The report must include:

- mission identity and status;
- exact sources inspected;
- answers to all required verification questions;
- the single overall disposition;
- exact evidence supporting that disposition;
- confirmation that protected artifacts were not modified;
- exact changed-file evidence;
- validation results;
- risks and limitations;
- recommended next lifecycle action for Mission Control.

Do not duplicate large sections of the Product Blueprint.

Reference exact sections and decisions instead.

---

# Protected Artifacts

Claude Code must not modify:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `communication/live/report1.2.md`
- `communication/live/report1.4.md`
- `communication/live/report1.5.md`
- any governance source under `merge/active/**`.

The only authorized changed path is:

- `communication/live/report1.6.md`

---

# Explicitly Not Authorized

Do not:

- perform a broad second Builder Review;
- reopen F3 or F4;
- perform Engineering Review;
- create or modify Sections 20–21;
- lock the Product Blueprint;
- create an EIS;
- create an implementation package;
- modify application code or tests;
- modify database schema, SQL, migrations, RLS, or Supabase;
- modify Lovable configuration;
- modify infrastructure, environment, authentication, deployment, or production;
- modify governance sources;
- authorize another actor or lifecycle stage;
- approve or merge your own work.

Implementation authority remains none.

---

# Git and Delivery Requirements

1. Pull and fast-forward synchronize the latest `origin/main`.
2. Create a protected mission branch from the synchronized `main`.
3. Create only `communication/live/report1.6.md`.
4. Run the repository Markdown Quality Gate.
5. Run the pre-commit Markdown Quality Gate.
6. Run whitespace validation.
7. Verify exact changed-file scope.
8. Inspect the staged change for secret or credential patterns.
9. Commit with a clear mission-specific message.
10. Push the protected mission branch.
11. Open a pull request targeting `main`.
12. Do not self-approve or self-merge.

---

# Completion Condition

This instruction is complete only when:

- `communication/live/report1.6.md` exists on a protected mission branch;
- the report answers every required verification question;
- the report gives one valid disposition;
- only the authorized report file changed;
- validation evidence is recorded;
- a pull request is opened against `main`;
- no protected artifact or technical system was modified.

---

# Authority Boundary

This instruction authorizes final verification of the remaining F5 replacement-link gap only.

It does not authorize Engineering Review, Sections 20–21, Blueprint lock, EIS, implementation, deployment, or production activity.
