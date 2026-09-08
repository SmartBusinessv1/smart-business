# Phase 1 Product Blueprint

## Purpose

This directory contains governed Product Blueprint documents for Smart Business Phase 1 missions, including active drafts under review, completed mission records, implementation specifications, templates, and the durable Smart Business Feature Definition Library.

## Mission Workflow

1. Create the Product Blueprint document in `active/` after its content has been supplied and approved through Product Governance.
2. Keep the document in `active/` while the mission is in progress.
3. Move the document to `completed/` after the mission has completed through the approved governance process.
4. Use `smart-business-features/` as durable Founder-feature elaboration input so future Product Blueprints do not have to reconstruct approved feature behaviour from chat history.

## Folder Structure

```text
phase-1-mission-blueprint/
├── README.md
├── active/
├── completed/
├── implementation/
├── templates/
└── smart-business-features/
    ├── README.md
    ├── 01_Smart_Order_and_Delivery_Assistant.md
    └── 02_Ask_CFO.md
```

`active/` holds Product Blueprint missions currently in progress.

`completed/` holds completed Product Blueprints and approved historical Blueprint-area records. As of `SB-DOC-PHASE1-CLASSIFICATION-1.0`, `active/` is empty. `completed/` includes the completed SB-P-1.10 and SB-P-1.11 Product Blueprints and the completed `SB-P-1.11-Build-Now-Gap-Closure-EIS.md` historical specification evidence. For the post-completion evolution of SB-P-1.10 and SB-P-1.11 after their own acceptance, see `docs/implementation/SB-P-1.10-SB-P-1.11-post-completion-continuity.md`.

`implementation/` holds EIS artifacts according to the current lifecycle framework.

`templates/` holds approved Blueprint workflow templates.

`smart-business-features/` preserves detailed Founder-feature intent and product behaviour for reuse by future SB-P discovery, Blueprint, EIS, implementation, and acceptance work.

## Feature Library Boundary

Feature files do not independently override active governance or Source 11 Product Truth.

They exist to prevent approved feature behaviour from being compressed, forgotten, or silently simplified between Founder discussion and implementation.

If a feature file conflicts with current Product Truth, the conflict must be reconciled through Founder/Mission Control rather than resolved by a builder through omission.

Commercial packaging and delivery timing must remain distinct: an `Add-on` may still be a current `Build Now` commitment.

## Mission Status Categories

- `active/`: Product Blueprint missions currently in progress.
- `completed/`: Product Blueprint missions completed through the approved governance process.
- `smart-business-features/`: durable feature-definition input; not a substitute for mission lifecycle approval.

## Governance

This repository follows the approved Smart Business Governance Framework. All Product Blueprint documents must be approved before implementation begins.

Feature-definition records must remain subordinate to the Lighthouse Constitution, current Smart Business constitutional authority, active Product Truth, and Founder decisions.

## Naming Convention

Product Blueprint documents use the mission identifier as the filename in the format `SB-P-X.Y.md`.

Feature files use a stable numeric ordering plus a descriptive feature name so they remain easy for humans and AI systems to discover.