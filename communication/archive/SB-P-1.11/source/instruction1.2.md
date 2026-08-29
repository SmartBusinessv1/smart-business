# SMART BUSINESS MISSION CONTROL

# Instruction 1.2

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing — Claude Code Builder Review

**From:** Mission Control

**To:** Claude Code — Builder Review and Engineering Analysis

**Status:** ACTIVE

**Date:** 2026-08-04

---

# Mission Objective

Perform the Source 18 Builder Review of the Mission Control-approved SB-P-1.11 Product Blueprint Sections 1–19.

This instruction authorizes Builder Review only. It does not authorize Engineering Review, Product Blueprint Sections 20–21, Blueprint lock, EIS creation, implementation-package preparation, application changes, database work, migration work, deployment, or production activity.

---

# Context

The Founder authorized SB-P-1.11 Stage 1. Codex completed repository-first Product Truth extraction, Founder discovery, the Founder Product Decision Record, and Product Blueprint Metadata, Mission Snapshot, and Sections 1–19.

Mission Control reviewed the Stage 1 output and accepted:

- Product Truth extraction;
- Founder discovery;
- Founder Product Decision Record D-001 through D-067;
- Product Blueprint Sections 1–19.

The administrative Codex identity correction was completed and accepted through `communication/live/report1.1.md`.

The Product Blueprint remains a Mission Control-approved Stage 1 draft in `active/`. It is not locked. Sections 20–21 are intentionally absent.

---

# Execute According To

Execute according to the latest approved versions of:

1. `merge/active/00_Lighthouse_Constitution.md`
2. `merge/active/01_Smart_Business_Master_System_Manifesto.md`
3. `merge/active/11_Smart_Business_Product_Truth_Map.md`
4. `merge/active/12_Product_Execution_and_Release_Framework.md`
5. `merge/active/17_AI_Operations_Manual.md`
6. `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
7. `merge/active/P00_Operational_Profiles.md`
8. Applicable specialist sources and current repository evidence.
9. `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
10. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
11. Accepted upstream dependency: `docs/phase-1-mission-blueprint/completed/SB-P-1.10.md`
12. The complete current communication record:
    - `communication/live/instruction.md`
    - `communication/live/report.md`
    - `communication/live/instruction1.1.md`
    - `communication/live/report1.1.md`
    - this instruction.

Current approved repository evidence and governing sources prevail over conversation memory or assumptions.

---

# Authorized Scope

Claude Code is authorized to:

1. Synchronize the latest `origin/main` and inspect the current repository.
2. Read the approved Product Blueprint Sections 1–19 and Founder Product Decision Record.
3. Perform a Builder Review focused on:
   - merchant experience clarity;
   - workflow usability;
   - build feasibility at the product-experience level;
   - internal consistency across Sections 1–19;
   - consistency with existing routes, authentication, permissions, components, data foundations, and accepted SB-P-1.10 inventory truth;
   - duplication risk;
   - unnecessary complexity or feature bloat;
   - missing product-experience requirements required before Engineering Review;
   - implementation-sensitive product ambiguities that must be resolved before Sections 20–21.
4. Classify each finding as:
   - `PASS`;
   - `REFINEMENT REQUIRED`;
   - `FOUNDER DECISION REQUIRED`;
   - `ENGINEERING REVIEW INPUT`;
   - `FOLLOW-UP — NON-BLOCKING`.
5. Distinguish documented facts from inferences, risks, and recommendations.
6. Recommend only genuine refinements. Do not expand the approved mission scope.
7. Report whether the Blueprint is ready to proceed to Engineering Review, requires Codex refinement, or requires a Founder decision.

---

# Builder Review Boundaries

Claude Code shall not:

- rewrite or directly edit the Product Blueprint;
- modify the Founder Product Decision Record;
- add, remove, reinterpret, or reopen Founder decisions;
- create Product Blueprint Sections 20–21;
- perform the Engineering Review;
- create or draft an EIS;
- create an engineering contract, Lovable build prompt, verification checklist, or implementation package;
- implement application code or tests;
- change database schemas, SQL, migrations, RLS, authentication, storage, Edge Functions, Supabase, or production data;
- change Lovable, infrastructure, environment configuration, deployment, or production state;
- modify canonical governance sources;
- authorize itself or any later lifecycle stage;
- treat build feasibility observations as permission to redesign Product Truth;
- create competing mission instructions.

If a product decision is unclear, record the exact question and supporting evidence. Do not assume the answer.

---

# Required Deliverable

Create only:

`communication/live/report1.2.md`

The report must include:

1. Executive summary.
2. Sources and repository areas inspected.
3. Builder Review findings grouped by:
   - product experience;
   - workflow clarity;
   - permissions and user roles;
   - catalog–inventory boundary;
   - pricing, tax, reference-cost, lifecycle, import, and conversational behaviour;
   - reuse and duplication risk;
   - feasibility risks that belong to later Engineering Review.
4. Finding classification for every material item.
5. Exact Blueprint sections affected by any refinement request.
6. Exact Founder decision IDs affected, where applicable.
7. Clear disposition:
   - `READY FOR ENGINEERING REVIEW`;
   - `CODEX REFINEMENT REQUIRED`; or
   - `FOUNDER DECISION REQUIRED`.
8. Confirmation that no protected artifact or technical system was changed.
9. Branch, commit, pull-request, changed-file, and validation evidence.

Do not duplicate the entire Product Blueprint in the report. Reference the original file path.

---

# Repository and Pull Request Rules

- Use a protected mission branch based on the latest `origin/main`.
- The only authorized changed file is:
  - `communication/live/report1.2.md`
- Use a focused commit and pull request.
- Run the Markdown Quality Gate, whitespace check, exact changed-file verification, internal-link check where applicable, and staged secret inspection.
- Do not approve or merge your own pull request.

---

# Completion Status

Conclude the report with exactly one of:

```text
SB-P-1.11 BUILDER REVIEW: READY FOR ENGINEERING REVIEW
```

```text
SB-P-1.11 BUILDER REVIEW: CODEX REFINEMENT REQUIRED
```

```text
SB-P-1.11 BUILDER REVIEW: FOUNDER DECISION REQUIRED
```

Implementation authority remains none.