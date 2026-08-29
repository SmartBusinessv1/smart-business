# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing — Stage 1 Product Definition

**From:** Mission Control

**To:** Codex

**Status:** ACTIVE

**Date:** 2026-08-04

---

# Mission Objective

Execute Stage 1 of SB-P-1.11: extract the applicable Product Truth, conduct Founder discovery, record the Founder Product Decision Record, and prepare the Product Blueprint through Section 19.

This instruction authorizes product-definition work only. It does not authorize Builder Review, Engineering Review, EIS creation, implementation-package creation, application changes, database changes, migrations, deployment, or production work.

---

# Context

SB-P-1.10 is the completed preceding Product Mission and may be used as a structural and continuity reference. SB-P-1.11 must define Product Catalog & Pricing without creating a second inventory truth, duplicating existing entities, or allowing implementation convenience to redefine Product Truth.

The repository is the durable mission record. Chat history is not the authoritative mission artifact.

---

# Execute According To

- Founder instructions and decisions
- `merge/active/00_Lighthouse_Constitution.md`
- `merge/active/01_Smart_Business_Master_System_Manifesto.md`
- `merge/active/02_Supabase_Architecture_Framework.md`
- `merge/active/03_Lovable_Build_Framework.md`
- `merge/active/05_AI_Behaviour_and_Model_Training_Framework.md`
- `merge/active/08_Smart_Business_Brand_and_Growth_Framework.md`
- `merge/active/09_Master_Roadmap_Command.md`
- `merge/active/11_Smart_Business_Product_Truth_Map.md`
- `merge/active/12_Product_Execution_and_Release_Framework.md`
- `merge/active/15_Governance_Mission_Control_Activation_Template.md`
- `merge/active/17_AI_Operations_Manual.md`
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
- `merge/active/P00_Operational_Profiles.md`
- `docs/phase-1-mission-blueprint/templates/SB-P-Product-Feature-Elaboration-Workflow-Template.md`
- `docs/phase-1-mission-blueprint/completed/SB-P-1.10.md`
- Current repository implementation and mission records relevant to catalog, products, inventory, stock, pricing, transactions, permissions, and business isolation

Where repository paths or source names have evolved, locate and use the current approved equivalent. Do not guess.

---

# Scope

Codex is authorized to:

1. Inspect the current repository and approved sources.
2. Extract confirmed Product Truth, inherited constraints, existing implementation facts, and unresolved product decisions for SB-P-1.11.
3. Conduct Founder discovery one question at a time.
4. Search the repository and approved sources before every Founder question.
5. Avoid asking the Founder to rediscover an answer already present in authoritative records.
6. Record all material Founder decisions in the Founder Product Decision Record.
7. Create the SB-P-1.11 Product Blueprint using the approved template.
8. Complete Product Blueprint Metadata, Mission Snapshot, and Sections 1–19 only.
9. Submit the completed Stage 1 artifacts for Mission Control review.

---

# Required Work

## 1. Repository-first Product Truth extraction

Before Founder discovery:

- inspect the current repository state;
- identify existing product, inventory, stock, pricing, transaction, permission, and business-isolation structures;
- identify confirmed source requirements and inherited constraints;
- distinguish documented facts from inference;
- record unresolved product decisions without inventing answers.

## 2. Founder discovery

- Ask only one question at a time.
- Before each question, search the repository, approved sources, prior Founder decisions, and relevant mission records.
- Ask only questions that require a genuine Founder product decision.
- Explain material options or consequences when needed for an informed decision.
- Do not begin Blueprint drafting until the required Founder decisions are sufficiently resolved.

## 3. Founder Product Decision Record

Record every material Founder decision with enough clarity to support Blueprint drafting and later traceability.

## 4. Product Blueprint Sections 1–19

Use:

`docs/phase-1-mission-blueprint/templates/SB-P-Product-Feature-Elaboration-Workflow-Template.md`

Create the active Blueprint at:

`docs/phase-1-mission-blueprint/active/SB-P-1.11.md`

Complete only:

- Product Blueprint Metadata;
- Mission Snapshot;
- Sections 1–19.

Do not create or populate canonical Sections 20–21.

## 5. Stage report

Write the Stage 1 completion report in:

`communication/live/report.md`

The report must include:

- Product Truth extraction summary;
- unresolved matters, if any;
- Founder discovery completion status;
- Founder Product Decision Record location;
- exact SB-P-1.11 Blueprint filename and repository path or GitHub link;
- confirmation that Sections 1–19 are complete;
- changed-file list;
- commit SHA and pull-request reference;
- validation performed;
- deviations, risks, or limitations;
- explicit confirmation that no Stage 2 or implementation work was performed.

Mission Control will read the Product Blueprint from its original file. Do not duplicate Sections 1–19 inside the report.

---

# Constraints

Codex must not:

- assume or invent Product Truth;
- ask multiple Founder questions in one message;
- repeat questions already answered by approved sources or repository evidence;
- redefine SB-P-1.10 inventory truth;
- create a second inventory or stock source of truth;
- create Sections 20–21;
- perform Builder Review or Engineering Review;
- create an EIS, engineering contract, Lovable build prompt, verification checklist, evidence package, or completion report;
- modify application code, tests, database schema, SQL, migrations, Supabase, Lovable, infrastructure, configuration, authentication, deployment, or production state;
- modify canonical governance sources;
- authorize another actor or lifecycle stage;
- approve its own work;
- merge its own pull request.

Use a protected mission branch and pull request. Keep the changed-file scope limited to the Stage 1 mission artifacts and communication report genuinely required by this instruction.

---

# Deliverables

- SB-P-1.11 Product Truth extraction recorded in the mission artifacts.
- Founder Product Decision Record in the approved Blueprint structure or its approved linked mission location.
- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` completed through Section 19.
- `communication/live/report.md` containing the exact Blueprint path or GitHub link and Stage 1 completion evidence.
- Protected-branch pull request for authorized human and Mission Control review.

---

# Completion Status

The report must conclude with:

`SB-P-1.11 STAGE 1: READY FOR MISSION CONTROL PRODUCT REVIEW`

This status may be used only when Product Truth extraction, Founder discovery, the Founder Product Decision Record, and Product Blueprint Sections 1–19 are complete and traceable.

If a genuine unresolved Founder decision prevents completion, conclude instead with:

`SB-P-1.11 STAGE 1: BLOCKED — FOUNDER DECISION REQUIRED`
