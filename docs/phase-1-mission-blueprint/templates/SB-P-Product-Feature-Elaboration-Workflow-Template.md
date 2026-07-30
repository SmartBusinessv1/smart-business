# SMART BUSINESS MISSION CONTROL

# SB-P — PRODUCT FEATURE ELABORATION WORKFLOW TEMPLATE

**Template ID:** SB-P-PFEW-1.2

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
- review material unresolved recommendations where Mission Control requires Founder input;
- provide final approval before Blueprint lock;
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
- author Metadata, Mission Snapshot, Sections 1–19, and the Founder Product Decision Record;
- not author post–Section 19 Builder or Engineering Review content;
- never invent missing product decisions.

## Mission Control

Mission Control is the governing and approval authority.

Mission Control shall:

- verify source alignment;
- review the Founder Product Decision Record;
- review Product Blueprint Sections 1–19 line by line;
- approve Sections 1–19 before authorizing Claude Code to proceed;
- review each post–Section 19 review stage;
- return required refinements;
- detect assumptions, contradictions, scope leakage, feature bloat, and technical overreach;
- require revisions or further founder clarification where necessary;
- approve or reject each stage before the next stage begins;
- control final approval, lock, and implementation authorization status.

## Claude Code

Claude Code is responsible for the Builder Review, Engineering Review, and later engineering specification work after Mission Control approval.

Claude Code shall:

- read the approved Product Blueprint and relevant source files;
- review the current repository where required;
- create all canonical post–Section 19 review sections in their exact order and purpose;
- preserve Sections 1–19 unchanged unless Mission Control authorizes a correction;
- record risks and unresolved issues honestly;
- not create implementation code during Product Blueprint review;
- create the EIS only after the complete Product Blueprint is approved and locked;
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

# Canonical Product Blueprint Structure

Every Product Blueprint shall follow the complete numbered structural pattern of:

`docs/phase-1-mission-blueprint/completed/SB-P-1.10.md`

or a later Mission Control-approved canonical structural successor.

The structural reference governs:

- top-level section numbering;
- section order;
- section purpose;
- authorship responsibility;
- review sequence;
- approval gates;
- lock and governance records.

The workflow template shall not rely only on general phrases such as “according to the approved Product Blueprint review pattern.”

Codex shall create only Metadata, Mission Snapshot, and Sections 1–19.

After Mission Control approves Sections 1–19, Claude Code shall create every remaining canonical Product Blueprint section required by the structural reference.

Claude Code shall not omit, merge, rename, reorder, or replace a canonical section without explicit Mission Control authorization.

Mission-specific content may vary. The approved structural responsibilities and gates shall not vary.

## Canonical Post–Section 19 Structure

| Section | Canonical Heading | Primary Author | Review / Approval |
|---|---|---|---|
| 20 | `Engineering Review` | Claude Code | Mission Control |
| 21 | `Engineering Questions, Risks & Recommendations` | Claude Code | Mission Control |

SB-P-1.10 contains no standalone numbered Builder Review section. Builder Review is a required review stage completed before Claude Code authors the canonical Engineering Review sections. Its approval is recorded in Blueprint metadata and governance history without renaming Sections 20 or 21.

## Structural Ownership

### Codex

Codex authors:

- Metadata;
- Mission Snapshot;
- Sections 1–19;
- Founder Product Decision Record.

Codex does not author post–Section 19 Builder or Engineering Review content.

### Mission Control

Mission Control:

- reviews and approves Sections 1–19;
- authorizes Claude Code to proceed;
- reviews each post–Section 19 review stage;
- returns required refinements;
- controls final approval and lock.

### Claude Code

Claude Code:

- creates all canonical post–Section 19 review sections;
- preserves Sections 1–19 unchanged unless Mission Control authorizes a correction;
- follows the exact canonical section order and purpose;
- records risks and unresolved issues honestly;
- does not create implementation code during Product Blueprint review;
- does not create the EIS until the complete Product Blueprint is locked.

### Founder

The Founder:

- confirms final product decisions and mission scope;
- reviews material unresolved recommendations where Mission Control requires Founder input;
- provides final approval before Blueprint lock.

## Required Stage Sequence

1. Source ingestion.
2. Product truth extraction.
3. Founder discovery.
4. Founder Product Decision Record.
5. Codex drafts Metadata, Mission Snapshot, and Sections 1–19.
6. Mission Control reviews Sections 1–19.
7. Codex applies required refinements.
8. Mission Control approves Sections 1–19.
9. Claude Code writes all canonical remaining Product Blueprint sections.
10. Mission Control reviews the complete Product Blueprint.
11. Claude Code applies required refinements.
12. Founder gives final approval.
13. Mission Control locks the complete Product Blueprint.
14. The file moves from `active/` to `completed/`.
15. Claude Code creates the EIS from the locked Product Blueprint.
16. EIS review, refinement, approval, and lock.
17. Only then may Part Two begin.

Approval of Sections 1–19 is not Product Blueprint completion.

The Product Blueprint is complete only after all canonical post–Section 19 sections are written, reviewed, approved, and the entire document is locked.

## No Structural Overfitting

The following elements are permanent:

- section numbers;
- section purposes;
- authorship;
- review gates;
- approval and lock records.

The following elements are mission-specific:

- inventory terminology;
- inventory risks;
- ledger-specific analysis;
- mission-specific domain details.

Where a canonical section is not materially applicable to a future mission, it shall remain present and record:

`Not applicable — justified`

It shall not be silently omitted.

---

# 13. Phase F — Claude Code Builder Review

After Sections 1–19 are approved, Claude Code shall read:

- the approved Product Blueprint;
- the Founder Product Decision Record;
- relevant approved source files;
- relevant completed missions;
- the current repository frontend and product shell where applicable.

Claude Code shall complete the Builder Review without assigning it a canonical numbered heading that conflicts with the post–Section 19 structure.

This stage is a builder feasibility and product-experience review only.

It shall not authorize implementation or redefine Sections 1–19.

Mission Control shall review and approve the Builder Review before Engineering Review begins. Builder Review approval shall be recorded in Blueprint metadata and governance history.

---

# 14. Phase G — Claude Code Engineering Review

After Builder Review approval, Claude Code shall conduct the Engineering Review using:

- the approved Product Blueprint;
- all relevant architecture and engineering frameworks;
- completed Product Missions and EIS files;
- the current repository architecture;
- the Founder Product Decision Record.

Claude Code shall create every canonical post–Section 19 section in the exact order listed under **Canonical Post–Section 19 Structure**.

The Engineering Review shall identify feasibility, domain, data, permission, audit, concurrency, performance, migration, observability, and implementation risks without creating implementation code.

Mission Control shall review and approve Sections 20 and 21 as the complete Engineering Review stage.

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

Claude Code may create:

`docs/phase-1-mission-blueprint/implementation/[MISSION-ID]-EIS.md`

only after the complete Product Blueprint, including all canonical post–Section 19 review sections, is approved and locked.

Approval of Sections 1–19 alone is insufficient.

The EIS shall:

- translate locked product truth into engineering requirements;
- preserve product, permission, workflow, and AI boundaries;
- identify technical domain design, data, security, RLS, service, validation, concurrency, performance, migration, testing, observability, risks, build order, and completion criteria;
- introduce no new product behaviour.

The EIS shall undergo architecture review, required refinements, Mission Control approval, and lock before implementation-package work or Part Two begins.

---

# 17. Phase J — Implementation Package

After the EIS is locked, Claude Code may prepare the approved implementation package, including as required:

- Engineering Contract
- Lovable Build Prompt
- Verification Checklist

The initial implementation package exists solely to authorize and guide implementation.

It shall not include the formal Completion Report or Evidence Package.

Those documents are verification deliverables created only after implementation has been independently verified.

Each document requires separate Mission Control review and lock.

Approval of these documents is not implementation authorization.

Implementation requires a separate explicit Mission Control mission.

## Lovable Builder Completion Report

After implementation is completed, Lovable shall create:

`docs/implementation/[MISSION-ID]/lovable-build-completion-report.md`

The Builder Completion Report records implementation activity including, where applicable:

- files modified;
- frontend changes;
- backend changes;
- database migrations;
- authentication changes;
- storage changes;
- deployment status;
- known limitations;
- implementation notes;
- repository commit references.

This report records what was implemented.

It does not verify correctness.

It does not authorize acceptance.

It does not replace the formal Completion Report.

## Formal Completion Report

Claude Code shall create:

`docs/implementation/[MISSION-ID]/completion-report.md`

only after ALL of the following have been completed:

1. Lovable implementation;
2. Lovable Builder Completion Report;
3. Founder runtime verification;
4. Mission Control review of runtime findings;
5. Claude Code independent verification.

The Completion Report summarizes:

- implementation;
- verification;
- runtime findings;
- checklist results;
- evidence;
- follow-up items;
- implementation status.

The Completion Report is not an implementation document.

It is a post-verification governance record.

## Evidence Package

Claude Code shall create the Evidence Package only after independent verification.

The Evidence Package shall organize:

- Founder verification evidence;
- Builder evidence;
- repository evidence;
- runtime evidence;
- testing evidence;
- deployment evidence;
- other approved supporting material.

Evidence shall preserve provenance.

Evidence shall not replace verification.

## Approved Implementation Lifecycle

```text
Locked Product Blueprint
↓
Locked EIS
↓
Claude creates:
• Engineering Contract
• Lovable Build Prompt
• Verification Checklist
↓
Mission Control review
↓
Mission Control approval
↓
Founder submits Lovable Build Prompt
↓
Lovable implementation
↓
Lovable Builder Completion Report
↓
Founder runtime verification
↓
Mission Control runtime review
↓
Claude Code independent verification
↓
Claude creates:
• Evidence Package
• Completion Report
↓
Mission Control final acceptance
↓
Documentation closure
```

Neither the Builder Completion Report nor implementation itself constitutes mission completion.

A Product Mission reaches completion only after:

- independent verification;
- Mission Control acceptance;
- formal Completion Report creation;
- documentation closure.

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
| 1.0 | Initial reusable Product Feature Elaboration Workflow for all Smart Business Product Missions | SUPERSEDED |
| 1.1 | Added complete Product Blueprint structural parity with SB-P-1.10, explicit post–Section 19 section list, authorship boundaries, complete Blueprint lock gate, and EIS entry gate | SUPERSEDED |
| 1.2 | Refined implementation package lifecycle by introducing Builder Completion Report, post-verification Completion Report, Evidence Package gate, and independent verification sequence | ACTIVE |
