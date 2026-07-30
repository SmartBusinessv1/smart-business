# SMART BUSINESS MISSION CONTROL

# SB-P — PRODUCT FEATURE ELABORATION WORKFLOW TEMPLATE

**Template ID:** SB-P-PFEW-1.0

**Template Name:** Product Feature Elaboration Workflow

**Applies To:** Every Smart Business Product Mission (`SB-P-*`)

**Authorized By:** Mission Control

**Status:** ACTIVE TEMPLATE

---

# 1. Purpose

This template defines the standard workflow for elaborating, drafting, reviewing, approving, and locking every Smart Business Product Mission.

It shall be used whenever a Product Mission requires a new or revised Product Blueprint.

Only the following mission-specific values shall change:

- Mission ID
- Mission name
- Mission context
- Feature-specific source references
- Founder decisions
- Mission-specific dependencies

The workflow, authority boundaries, review sequence, and approval gates remain unchanged.

---

# 2. Mission Variables

Replace the placeholders below before starting a mission.

| Variable | Mission Value |
|---|---|
| Mission ID | `[SB-P-X.X]` |
| Mission Name | `[MISSION NAME]` |
| Mission Context | `[CONCISE DESCRIPTION OF THE FEATURE OR PRODUCT CAPABILITY]` |
| Product Blueprint Path | `docs/phase-1-mission-blueprint/active/[MISSION-ID].md` |
| Founder Decision Record Path | `docs/phase-1-mission-blueprint/mission-inputs/[MISSION-ID]-Founder-Product-Decision-Record.md` |
| Structural Template | `docs/phase-1-mission-blueprint/completed/SB-P-1.10.md` or the latest approved equivalent |
| Related Completed Missions | `[LIST RELEVANT COMPLETED SB-P MISSIONS]` |
| Primary Product Sources | `[LIST RELEVANT APPROVED PRODUCT SOURCE FILES]` |

---

# 3. Roles and Responsibility

## Founder

The Founder owns unresolved product decisions.

The Founder shall:

- explain the intended feature in practical merchant terms;
- answer unresolved product questions;
- confirm or reject derived interpretations;
- approve major product boundaries;
- retain final product decision ownership.

## Codex

Codex is responsible for founder-led product discovery and Product Blueprint drafting.

Codex shall:

- read the approved product-related source files;
- read relevant completed Product Mission files;
- use the approved structural template only as a document pattern;
- separate confirmed truth, derived constraints, and unresolved questions;
- conduct a structured dialogue with the Founder;
- create and maintain the Founder Product Decision Record;
- draft only Sections 1–19 of the Product Blueprint;
- never invent missing product decisions.

## Mission Control

Mission Control is the governing and approval authority.

Mission Control shall:

- verify source alignment;
- review the Founder Product Decision Record;
- review Product Blueprint Sections 1–19 line by line;
- detect assumptions, contradictions, scope leakage, feature bloat, and technical overreach;
- require revisions or further founder clarification where necessary;
- approve or reject each stage before the next stage begins;
- control lock and implementation authorization status.

## Claude Code

Claude Code is responsible for the Builder Review, Engineering Review, and later engineering specification work after Mission Control approval.

Claude Code shall:

- read the approved Product Blueprint and relevant source files;
- review the current repository where required;
- create the approved review sections without redefining product truth;
- create the EIS only after the Product Blueprint is locked;
- preserve all Mission Control boundaries.

## Lovable

Lovable is an implementation builder only.

Lovable shall not define product truth, author Product Blueprint Sections 1–19, or begin implementation without a separate explicit Mission Control authorization.

---

# 4. Authority Order

All work shall follow this authority order:

1. Founder decisions approved and recorded through Mission Control
2. Lighthouse Constitution
3. Smart Business Master System Manifesto
4. Approved Product Truth and product-related source files
5. Locked Product Blueprints and completed Product Missions
6. Approved architecture, engineering, brand, AI, onboarding, and implementation frameworks relevant to the mission
7. This workflow template
8. Model interpretation

Where a lower authority conflicts with a higher authority, the higher authority prevails.

A model shall not resolve an authority conflict silently. It shall pause and escalate to Mission Control.

---

# 5. Required Source Pack

Before Codex begins, the Founder or Mission Control shall make the relevant source files available inside the Codex workspace.

The standard product-discovery source pack should include, where available:

- Lighthouse Constitution
- Smart Business Master System Manifesto
- Conversion and Onboarding Framework
- Brand and Growth Framework
- Roadmap Command
- Product Truth Map
- Feature Implementation Blueprint
- Feature Acceptance Matrix
- Constitution Design Principles
- AI Development Operating Manual
- Project Continuity and Handover Framework
- Relevant completed Product Mission blueprints
- The latest approved Product Blueprint structural template

Source files that are not relevant to the feature may be omitted.

Engineering and implementation frameworks shall not be used by Codex to invent product behaviour.

---

# 6. Phase A — Source Ingestion

Codex shall first read:

1. all approved product-related source files provided for the mission;
2. every relevant completed Product Mission file;
3. the selected structural template;
4. the mission name and mission context.

Codex shall not begin drafting the Product Blueprint during this phase.

Codex shall confirm:

- files successfully read;
- files unavailable or incomplete;
- apparent source conflicts;
- areas where the sources provide insufficient feature detail.

---

# 7. Phase B — Product Truth Extraction

Before questioning the Founder or drafting the Product Blueprint, Codex shall prepare three working sections.

## 7.1 Confirmed Product Truth

Record only product decisions explicitly supported by approved sources or already locked Product Missions.

Each item should identify its source.

## 7.2 Derived Constraints

Record implications that reasonably follow from approved decisions but are not stated directly.

Every derived constraint must be labelled as an interpretation requiring confirmation when it could materially affect product behaviour.

## 7.3 Unresolved Product Questions

List every product question that cannot be answered safely from the approved sources.

Codex must not invent an answer.

Questions may cover:

- user problem and intended outcome;
- entity meaning and relationships;
- merchant workflows;
- owner and staff permissions;
- lifecycle and archive behaviour;
- pricing, units, variants, categories, or identifiers;
- corrections and audit expectations;
- WhatsApp, voice, photo, or dashboard behaviour;
- dependencies and downstream missions;
- Build Now, Build Later, Add-on, Separate Product, and Reject boundaries;
- acceptance criteria and success conditions.

Only mission-relevant questions shall be asked.

---

# 8. Phase C — Founder Product Discovery Dialogue

Codex shall conduct a structured dialogue with the Founder before drafting Sections 1–19.

Questions must be asked in small, coherent groups rather than as one long questionnaire.

Recommended sequence:

1. Feature purpose and merchant problem
2. Core entities and business meaning
3. Primary merchant workflows
4. Product rules and exceptions
5. Permissions and human decision ownership
6. Lifecycle, correction, archive, and audit behaviour
7. Integrations and future relationships
8. Scope boundaries and exclusions
9. Success and acceptance conditions

After each group, Codex shall:

- restate the Founder’s decision;
- distinguish confirmed decisions from interpretations;
- identify conflicts with approved sources;
- request confirmation before treating the decision as product truth;
- update the Founder Product Decision Record.

Codex shall not pressure the Founder toward unnecessary complexity.

Where the Founder is uncertain, Codex may present a small number of clearly differentiated options, including trade-offs, but shall not choose on the Founder’s behalf.

---

# 9. Founder Product Decision Record

Codex shall create and maintain:

```text
[FOUNDER DECISION RECORD PATH]
```

The record shall use the following structure:

| Decision ID | Question | Founder Decision | Source Alignment | Status | Date |
|---|---|---|---|---|---|
| `[MISSION-ID]-D-001` | `[QUESTION]` | `[DECISION]` | `[ALIGNED / NEW FOUNDER DECISION / CONFLICT REQUIRING MISSION CONTROL]` | `[CONFIRMED / OPEN / SUPERSEDED]` | `[DATE]` |

The record shall also contain:

## Confirmed Product Decisions

## Open Questions

## Superseded Decisions

## Source Conflicts and Mission Control Resolutions

## Final Founder Confirmation

No material product decision shall exist only in chat history.

---

# 10. Phase D — Product Blueprint Drafting

After product discovery is sufficiently complete, Codex shall create:

```text
[PRODUCT BLUEPRINT PATH]
```

Codex shall use the latest approved completed Product Blueprint as the structural template.

Codex shall create only:

- document metadata;
- mission snapshot;
- Sections 1–19.

Codex shall not create:

- Builder Review;
- Engineering Review;
- Engineering Implementation Specification;
- database schema;
- SQL or migrations;
- RLS policies;
- API design;
- component implementation instructions;
- Lovable build instructions;
- implementation code.

The Product Blueprint shall state product truth, user behaviour, business rules, scope, boundaries, dependencies, risks, success criteria, acceptance criteria, future evolution, product philosophy, and governance history at the same level of abstraction as the approved template.

---

# 11. Codex Drafting Rules

Codex shall:

- preserve Smart Business terminology and Lighthouse principles;
- write for Kerala brick-and-mortar merchants;
- preserve owner decision ownership;
- treat Ask CFO and all AI as assistants, not authorities;
- protect employee permission boundaries;
- respect existing merchant habits;
- separate Build Now, Build Later, Add-on, Separate Product, and Reject;
- avoid feature bloat and premature technical design;
- cite or identify the source basis for material decisions during review;
- mark unresolved matters explicitly;
- pause where a product decision is missing.

Codex shall not:

- fill gaps with generic SaaS assumptions;
- import competitor behaviour as product truth;
- create hidden automation that commits business decisions;
- expand the mission merely because a feature is technically possible;
- modify locked source files or completed missions.

---

# 12. Phase E — Mission Control Product Review

Mission Control shall review the Codex draft against:

- the Founder Product Decision Record;
- all relevant approved source files;
- completed Product Missions;
- current roadmap and mission sequencing;
- Lighthouse principles;
- approved domain, route, permission, AI, POS, and workflow boundaries.

The review shall verify:

- product correctness;
- completeness of Sections 1–19;
- terminology consistency;
- source alignment;
- founder-decision traceability;
- dependency accuracy;
- permission clarity;
- human decision ownership;
- realistic merchant workflow;
- scope discipline;
- absence of engineering leakage;
- absence of unsupported assumptions;
- acceptance criteria quality.

Mission Control outcomes:

- `APPROVED`
- `APPROVED WITH REQUIRED REFINEMENTS`
- `FOUNDER CLARIFICATION REQUIRED`
- `RETURNED FOR REVISION`

No later stage may begin without Mission Control approval.

---

# 13. Phase F — Claude Code Builder Review

After Sections 1–19 are approved, Claude Code shall read:

- the approved Product Blueprint;
- the Founder Product Decision Record;
- relevant approved source files;
- relevant completed missions;
- the current repository frontend and product shell where applicable.

Claude Code shall create:

- Section 20 — Builder Review
- Section 21 — Builder Questions, Risks & Recommendations

This stage is a builder feasibility and product-experience review only.

It shall not authorize implementation or redefine Sections 1–19.

Mission Control shall review and approve the Builder Review before engineering review begins.

---

# 14. Phase G — Claude Code Engineering Review

After Builder Review approval, Claude Code shall conduct the Engineering Review using:

- the approved Product Blueprint;
- all relevant architecture and engineering frameworks;
- completed Product Missions and EIS files;
- the current repository architecture;
- the Founder Product Decision Record.

Claude Code shall replace or update the designated review sections according to the approved Product Blueprint review pattern.

The Engineering Review shall identify feasibility, domain, data, permission, audit, concurrency, performance, migration, observability, and implementation risks without creating implementation code.

Mission Control shall review and approve the Engineering Review.

---

# 15. Phase H — Founder Approval and Blueprint Lock

After all required reviews are approved:

1. Mission Control presents the final Product Blueprint to the Founder.
2. The Founder confirms the product decisions and mission scope.
3. Mission Control records approval and locks the Product Blueprint.
4. The file moves from `active/` to `completed/` only according to the approved repository workflow.

A locked Product Blueprint becomes the product authority for the mission.

No later engineering document may redefine it.

---

# 16. Phase I — Engineering Implementation Specification

Only after the Product Blueprint is locked may Claude Code create the mission EIS.

The EIS shall:

- translate locked product truth into engineering requirements;
- preserve product, permission, workflow, and AI boundaries;
- identify technical domain design, data, security, RLS, service, validation, concurrency, performance, migration, testing, observability, risks, build order, and completion criteria;
- introduce no new product behaviour.

The EIS shall undergo architecture review, required refinements, Mission Control approval, and lock before implementation-package work begins.

---

# 17. Phase J — Implementation Package

After the EIS is locked, Claude Code may prepare the approved implementation package, including as required:

- Engineering Contract
- Lovable Build Prompt
- Verification Checklist
- Completion Report Template

Each document requires separate Mission Control review and lock.

Approval of these documents is not implementation authorization.

Implementation requires a separate explicit Mission Control mission.

---

# 18. Permanent Governance Boundaries

The following rules apply to every Product Mission:

- The Founder retains product decision ownership.
- Mission Control retains governance, review, approval, and lock authority.
- Codex may structure discovery and draft product truth but may not invent missing decisions.
- Claude Code may translate approved product truth into builder and engineering reviews but may not redefine it.
- Lovable may implement only approved and authorized scope.
- AI, WhatsApp interpretation, automation, and Ask CFO may assist but may not become the authority for merchant decisions.
- Employee access remains permission-scoped.
- Owner financial intelligence is not exposed to staff by default.
- Standard POS bridges are allowed; custom POS modification inside the core platform is rejected.
- Smart Business must preserve clarity, dignity, usefulness, simplicity, trust, sustainability, and peace of mind.

---

# 19. Mission Completion Conditions

The Product Feature Elaboration Workflow is complete for a mission only when:

- relevant sources were successfully ingested;
- confirmed truth, derived constraints, and unresolved questions were documented;
- Founder discovery dialogue was completed;
- the Founder Product Decision Record was created and confirmed;
- Codex drafted Sections 1–19 only;
- Mission Control completed product review;
- Builder Review was completed and approved where required;
- Engineering Review was completed and approved where required;
- Founder approval was recorded;
- the Product Blueprint was locked;
- repository paths, status, commit, push, and synchronization were verified.

---

# 20. Reuse Instruction

For each new Product Mission:

1. Copy this template into the mission’s working instruction.
2. Replace only the Mission Variables in Section 2 and any explicitly mission-specific source references.
3. Do not modify the workflow, authority order, stage gates, or permanent governance boundaries without Mission Control approval.
4. Record any approved workflow change as a new version of this template rather than altering prior mission history silently.

---

# 21. Template Change Log

| Version | Change | Status |
|---|---|---|
| 1.0 | Initial reusable Product Feature Elaboration Workflow for all Smart Business Product Missions | ACTIVE |
