# SMART BUSINESS MISSION CONTROL

# SB-P — PRODUCT FEATURE ELABORATION WORKFLOW TEMPLATE

**Template ID:** SB-P-PFEW-1.4

**Template Name:** Product Feature Elaboration Workflow

**Applies To:** Every Smart Business Product Mission (`SB-P-*`)

**Authorized By:** Mission Control

**Status:** ACTIVE FROM THE ACTIVATION EVENT — the human merge of the finalization pull request, at its actual `merged_at` UTC instant, as defined in the Source 18 header and recorded in the [activation record](../../../communication/missions/SB-GOV-PRODUCT-EXEC-1.0/mission-control/04_activation_decision_and_metadata_reconciliation.md). Version 1.3 is the operative template until that event. This version has been independently verified and merged by a human (PR #606), and it takes effect only with Source 18 Version 1.2, never before it.

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

This template is subordinate to active Source 18. Its phase labels organize instructions and do not create an alternative lifecycle sequence. Where this template and Source 18 differ, Source 18 governs and the difference is corrected through a separate authorized mission.

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
| Contracts Advanced | `[CONTRACT NUMBERS AND GLOBAL PRODUCT COMPLETION VIEW IDENTIFIERS]` |
| Delegated Contracts In Scope | `[CONTRACTS THE ADVANCED CONTRACTS DELEGATE TO, WHERE THE MISSION TOUCHES THE DELEGATED BEHAVIOUR]` |
| Build Plan Section | `[THE FOUNDER-APPROVED BUILD PLAN SECTION THAT GOVERNS THE MISSION]` |
| Intake Baseline | `[MAIN COMMIT AND DATE AT INTAKE]` |
| FCTM Path and Contract Baselines | `[PATH TO THE MISSION FCTM AND EACH CONTRACT'S BLOB SHA AT INTAKE]` |
| Institutional Intake Sources | `The canonical Phase 1 institutional-memory guide and the OLE promotion records under organizational-learning/promotions/**` |
| Definition Actor | `[ACTOR APPOINTED BY MISSION CONTROL IN THE STAGE 1 RECORD]` |
| Workstream Register | `[DRAFT WORKSTREAMS, IF ANY]` |
| Delivery, Migration and Production Scope Flags | `production mutation: NOT AUTHORIZED; migration execution: NOT AUTHORIZED; delivery sync and publication: NOT AUTHORIZED` |
| Founder-Reserved Runtime Scenarios | `[BUILD PLAN FOUNDER RUNTIME VERIFICATION SCENARIOS FOR THE MISSION, PLUS ANY ANCHOR MISSION CONTROL DESIGNATES]` |

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

The Founder is asked only about genuine open decisions, conflicts or proposed changes to approved truth (Section 8).

## Definition Actor

The Definition Actor is a qualified actor that Mission Control appoints in the Stage 1 record. Codex, Claude Code or another authorized actor may be appointed where fit. **Codex is not the default or the mandatory Definition Actor.** The Definition Actor is responsible for Mission Truth and Delta Reconciliation, the preparation of the Founder Decision Gate, and Product Blueprint drafting.

The Definition Actor shall:

- read the approved product-related source files, the in-scope feature contracts and the Build Plan section that governs the mission;
- read relevant completed Product Mission files;
- use the approved structural template only as a document pattern;
- populate the Feature Coverage and Product Truth Traceability Matrix (FCTM);
- separate confirmed truth, derived constraints, and unresolved questions;
- prepare the Institutional Learning Intake Record;
- create and maintain the Founder Product Decision Record for triggered items, and conduct the Founder dialogue only for those items when Mission Control designates it to do so;
- author Metadata, Mission Snapshot, and Sections 1–19;
- not author post–Section 19 Builder or Engineering Review content;
- never invent missing product decisions;
- never omit, defer, simplify, reclassify or expand an approved requirement;
- never approve its own Sections 1–19.

The role-separation rule of Source 18 Section 4.3 applies by role and not by provider.

## Mission Control

Mission Control is the governing and approval authority.

Mission Control shall:

- verify source alignment;
- review the Founder Product Decision Record, where one exists;
- review Product Blueprint Sections 1–19 line by line;
- confirm the FCTM completeness test and the Institutional Learning Intake Record before approving Sections 1–19;
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
- preserve all Mission Control boundaries;
- act as Definition Actor or as an authorized builder only where Mission Control appoints it and the role-separation rule of Source 18 Section 4.3 is satisfied.

## Lovable and Other Authorized Builders

Lovable, and any other builder that the Implementation Authorization names, is an implementation builder only.

A builder shall not define product truth, author Product Blueprint Sections 1–19, omit, defer, simplify or reclassify an authorized requirement, or begin implementation without the Mission Control Implementation Authorization record. The existing Lovable-specific artifact names are retained, and the builder's identity is stated truthfully in each artifact (Source 18 Section 4.5).

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

Source 18 governs the Product Mission lifecycle. This workflow template is a subordinate operational instrument.

---

# 5. Required Source Pack

Before the Definition Actor begins, Mission Control issues the Intake Pack of Source 18 Stage 1. It names the in-scope contracts at their intake blob SHAs, the Build Plan section that governs the mission, the Global Product Completion View identifiers, and the institutional intake sources.

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
- The mature feature contracts that the mission advances, and the contracts they delegate to
- The Founder-approved Build Plan
- The Global Product Completion View
- The canonical Phase 1 institutional-memory guide and the current OLE promotion records
- Relevant completed Product Mission blueprints
- The latest approved Product Blueprint structural template

Source files that are not relevant to the feature may be omitted.

Engineering and implementation frameworks shall not be used by the Definition Actor to invent product behaviour.

---

# 6. Phase A — Source Ingestion

The Definition Actor shall first read:

1. all approved product-related source files provided for the mission, including each in-scope contract in full at its intake baseline;
2. the Build Plan section that governs the mission and the Build Plan cross-mission sections that concern it;
3. the canonical Phase 1 institutional-memory guide and the current OLE promotion records;
4. every relevant completed Product Mission file;
5. the selected structural template;
6. the mission name and mission context.

The Definition Actor shall not begin drafting the Product Blueprint during this phase.

The Definition Actor shall confirm:

- files successfully read;
- files unavailable or incomplete;
- apparent source conflicts;
- areas where the sources provide insufficient feature detail.

---

# 7. Phase B — Mission Truth and Delta Reconciliation

Before any Founder question is asked or the Product Blueprint is drafted, the Definition Actor shall prepare the Mission Truth Pack. It consumes approved truth and accounts for all of it. It does not rediscover approved truth, and it does not reopen an approved decision.

## 7.1 Confirmed Product Truth

Confirmed Product Truth is recorded in the FCTM (Section 7.4). Record only product decisions explicitly supported by approved sources or already locked Product Missions.

Each item shall identify its source. A claim with no citation is unresolved.

## 7.2 Derived Constraints

Record implications that reasonably follow from approved decisions but are not stated directly.

Every derived constraint must be labelled as an interpretation requiring confirmation when it could materially affect product behaviour. A derived constraint is never an approved requirement and never fills an unresolved row.

## 7.3 Unresolved Product Questions and Conflicts

List every product question that cannot be answered safely from the approved sources, and every conflict among approved sources. They are drawn from the FCTM rows marked `UNRESOLVED FOUNDER DECISION` or `ESCALATED` and from any unresolved decision the mission actually needs.

The Definition Actor must not invent an answer.

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

## 7.4 Feature Coverage and Product Truth Traceability Matrix

The FCTM is the mission's requirement-level accounting of approved truth, defined in Source 18 Section 3.2. It is opened at Stage 1 and populated here.

**Scope.** Every contract the mission advances, every contract those delegate to where the mission touches the delegated behaviour, and the Build Plan section for the mission together with its cross-mission, support-split and explicit-rejection sections.

**Row rule.** One row is one separately verifiable obligation, cited to the contract's actual numbered section at its intake blob SHA, with the row ID `<contract number>-§<section>-<ordinal>`. Every section of every in-scope contract appears in at least one row, and each numbered acceptance scenario is its own row. In-scope, partially delivered and mixed sections are enumerated at obligation level. A section may be a single row only when the whole section has one non-`IN SCOPE` disposition and one citation. "etc." is not permitted.

**Columns.** Row ID and source; a pointer to the exact source text (never a paraphrase that can drift); kind; build commitment; commercial classification; assigned mission; disposition with citation; and a Founder Decision ID whenever anything differs from the approved source.

**Dispositions, exactly one per row.** `IN SCOPE`; `ALREADY DEMONSTRATED` (with the earlier mission's verified evidence and a Delta impact check, and never assumed to pass); `ASSIGNED TO LATER MISSION` (a `BUILD NOW` requirement scheduled elsewhere by an approved source); `DELEGATED`; `NOT APPLICABLE`; `OUT OF BUILD SCOPE` (the approved commitment is `BUILD LATER`, `SEPARATE PRODUCT` or `REJECT`); `UNRESOLVED FOUNDER DECISION`; and `ESCALATED`. `BUILD LATER` is a product commitment and `ASSIGNED TO LATER MISSION` is mission scheduling; a `BUILD NOW` requirement assigned to a later mission stays `BUILD NOW`.

**Classification lock.** The build commitment, commercial classification and mission assignment of an approved requirement change only by a recorded Founder decision cited in the row. Technical difficulty, a partial foundation, a missing dependency or an older label never authorizes a change.

**Completeness test.** The test compares the matrix with the source text and not only with itself: (a) every numbered section of every in-scope contract is represented by at least one row; (b) every applicable, separately verifiable obligation inside an in-scope, partially delivered or mixed section is represented by its own row, and inside a wholly non-`IN SCOPE` section by the single section-level row that the row rule permits; (c) every numbered acceptance scenario is individually represented by its own row; (d) every row has exactly one cited disposition, at lock there is no `ESCALATED` row and no critical-path `UNRESOLVED FOUNDER DECISION` row, and each row's classification and assignment equal the source; and (e) downstream mappings have no unmapped `IN SCOPE` row and no orphan. Checks (a) to (c) are made against an obligation inventory taken from the source text: a list of pointers to the numbered sections, obligations and acceptance scenarios of each in-scope contract, kept in the verification record. It is not a second matrix and restates no requirement. **A missing obligation or acceptance scenario fails the test even when every retained row has a valid disposition and a consistent downstream mapping.**

**Escalation.** A proposed omission, deferral, pull-forward, simplification or reclassification, and any Product Truth conflict or infeasibility found at any later stage, stops dependent work, marks the row `ESCALATED`, and goes to the Founder through Mission Control.

**Efficiency.** Requirement text lives only in the source contracts. The FCTM stores identifiers, pointers, dispositions and citations, and downstream documents carry identifier-keyed mappings and never restate requirement text.

## 7.5 Delta

Record changes since each source was approved: repository, migrations, continuous integration, delivery topology, governance versions and OLE additions. Classify each `NO PRODUCT EFFECT`, `ENGINEERING ONLY` or `PRODUCT-AFFECTING`.

## 7.6 Institutional Learning Intake Record

Every Product Mission intake must consume both current validated OLE learning and the canonical Phase 1 institutional-memory guide until Mission Control verifies that the historical OLE backfill is complete.

Record the intake baseline, the guide's mission-start checklist answered by reference, every OLE promotion with one disposition, the scope caveat, any conflict, and the status statement `Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force`, in the form Source 18 Section 3.1 defines.

---

# 8. Phase C — Founder Decision Gate (conditional)

Founder discovery is an exception gate. It is `TRIGGERED` by any of:

- **T1** an unresolved product question that no approved source answers;
- **T2** a conflict among approved sources;
- **T3** a new product decision, or an approved-unresolved decision that the mission needs;
- **T4** a Delta item classified `PRODUCT-AFFECTING`;
- **T5** a Founder request, which Mission Control cannot decline;
- **T6** a derived constraint that Mission Control judges materially affects product behaviour;
- **T7** a proposed omission, deferral, pull-forward, simplification or reclassification of an approved requirement, including any change of its build commitment, commercial classification or mission assignment;
- **T8** a Product Truth conflict or infeasibility found at any later stage.

When triggered, the actor Mission Control designates conducts a structured dialogue with the Founder for the **triggering items only** before Sections 1–19 are drafted. No Founder-question sequence runs by default, and Codex is not the default interviewer.

Questions must be asked in small, coherent groups rather than as one long questionnaire. Where a triggering item touches them, the recommended groups are:

1. Feature purpose and merchant problem
2. Core entities and business meaning
3. Primary merchant workflows
4. Product rules and exceptions
5. Permissions and human decision ownership
6. Lifecycle, correction, archive, and audit behaviour
7. Integrations and future relationships
8. Scope boundaries and exclusions
9. Success and acceptance conditions

After each group, the conducting actor shall:

- restate the Founder’s decision;
- distinguish confirmed decisions from interpretations;
- identify conflicts with approved sources;
- request confirmation before treating the decision as product truth;
- update the Founder Product Decision Record.

The conducting actor shall not pressure the Founder toward unnecessary complexity.

Where the Founder is uncertain, the conducting actor may present a small number of clearly differentiated options, including trade-offs, but shall not choose on the Founder’s behalf.

When no trigger applies, Mission Control records `Founder Decision Gate — NOT TRIGGERED`, listing each trigger checked with its evidence. **That record is permitted only if the FCTM has no critical-path `UNRESOLVED FOUNDER DECISION` row and no `ESCALATED` row.** A one-page Founder Brief summarizes the FCTM and the determination. The Founder's objection at any point reopens the gate, and T7 and T8 reopen it at whatever stage they arise.

---

# 9. Founder Product Decision Record

The conducting actor shall create and maintain, for the triggered items only:

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

Decision IDs are cited in the FCTM rows they affect. Every change of build commitment, commercial classification or mission assignment is recorded here with the source alignment `NEW FOUNDER DECISION`. A Founder decision is recorded only after the Founder has given it.

No material product decision shall exist only in chat history.

---

# 10. Phase D — Product Blueprint Drafting

After the Truth Pack is complete and the Founder Decision Gate is resolved, the Definition Actor shall create:

```text
[PRODUCT BLUEPRINT PATH]
```

The Definition Actor shall use the latest approved completed Product Blueprint as the structural template.

The Definition Actor shall create only:

- document metadata;
- mission snapshot;
- Sections 1–19.

The Definition Actor shall not create:

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

**Assembly by reference.** Approved truth is cited (contract section, Build Plan subsection) and not re-authored. New prose is limited to mission scope selection, the Delta, dependencies and acceptance criteria. Assembly by reference must preserve full FCTM obligation coverage.

**FCTM mapping.** The Blueprint maps every FCTM row: Section 8 carries in-scope functional rows, Section 10 business rules, Section 12 dependencies, and Section 15 acceptance scenarios and experience anchors seeded from the Build Plan. Section 11 (Out of Scope) lists every `ASSIGNED TO LATER MISSION`, `DELEGATED` and `OUT OF BUILD SCOPE` row as "still committed / not in this mission", with its owning mission or preserved classification. Section 19 holds the section-to-source table keyed by row ID. Content that maps to no row is recorded as a refinement, or as a scope expansion that raises T3 if it changes truth.

---

# 11. Definition Actor Drafting Rules

The Definition Actor shall:

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

The Definition Actor shall not:

- fill gaps with generic SaaS assumptions;
- import competitor behaviour as product truth;
- create hidden automation that commits business decisions;
- expand the mission merely because a feature is technically possible;
- omit, defer, simplify, reclassify or expand an approved requirement, or treat an old label or technical incompleteness as a deferral;
- resolve a source conflict silently;
- modify locked source files or completed missions.

---

# 12. Phase E — Mission Control Product Review

Mission Control shall review the Definition Actor's draft against:

- the Founder Product Decision Record, where one exists;
- the Truth Pack, including the populated FCTM and the Institutional Learning Intake Record;
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
- acceptance criteria quality;
- FCTM completeness and the absence of orphans, by the completeness test of Section 7.4;
- the Institutional Learning Intake Record.

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

The Definition Actor shall create only Metadata, Mission Snapshot, and Sections 1–19.

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

### Definition Actor

The Definition Actor authors:

- Metadata;
- Mission Snapshot;
- Sections 1–19;
- the FCTM row set, until the Blueprint lock;
- the Founder Product Decision Record, for triggered items.

The Definition Actor does not author post–Section 19 Builder or Engineering Review content.

### Mission Control

Mission Control:

- reviews and approves Sections 1–19, after confirming the FCTM and the Institutional Learning Intake Record;
- authorizes Claude Code to proceed;
- reviews each post–Section 19 review stage;
- returns required refinements;
- controls final approval and lock.

### Claude Code

Claude Code:

- creates all canonical post–Section 19 review sections;
- preserves Sections 1–19 unchanged unless Mission Control authorizes a correction;
- follows the exact canonical section order and purpose;
- records a feasibility and risk finding for every `IN SCOPE` FCTM row, and never narrows or moves a blocked row;
- records risks and unresolved issues honestly;
- does not create implementation code during Product Blueprint review;
- does not create the EIS until the complete Product Blueprint is locked.

### Founder

The Founder:

- confirms final product decisions and mission scope;
- reviews material unresolved recommendations where Mission Control requires Founder input;
- provides final approval before Blueprint lock.

## Required Stage Sequence

1. Mission Initiation and Intake Pack; the Definition Actor is appointed.
2. Mission Truth and Delta Reconciliation: the Truth Pack, with the FCTM populated and the Institutional Learning Intake Record.
3. Founder Decision Gate: the Founder Product Decision Record for triggered items, or a `NOT TRIGGERED` Gate Record.
4. The Definition Actor drafts Metadata, Mission Snapshot, and Sections 1–19, assembled by reference.
5. Mission Control reviews Sections 1–19.
6. The Definition Actor applies required refinements.
7. Mission Control approves Sections 1–19.
8. Claude Code completes the Builder Review, which Mission Control approves, and then the Engineering Review, writing all canonical remaining Product Blueprint sections. Specialist reviews may run in parallel with the Engineering Review as read-only fact-finding and change no approval order.
9. Mission Control reviews the complete Product Blueprint.
10. Claude Code applies required refinements.
11. Founder gives final approval.
12. Mission Control locks the complete Product Blueprint, which freezes every FCTM row's disposition, classification and assignment.
13. The file moves from `active/` to `completed/`.
14. Claude Code creates the EIS from the locked Product Blueprint.
15. EIS review, refinement, approval, and lock, each recorded as its own disposition.
16. Only then may Part Two begin.

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

Mission Control shall review and approve the Builder Review before Engineering Review begins. Builder Review approval shall be recorded in Blueprint metadata and governance history. Parallel specialist fact-finding does not change this order.

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

Section 20 or 21 shall also record a feasibility and risk finding for every `IN SCOPE` FCTM row and the early delivery plan (environments, the migrations expected and their rehearsal, cross-mission dependencies, and the continuous-integration tiers that apply). A row found infeasible, unsafe or blocked stays `IN SCOPE`, is marked blocked with the reason, and raises T8. It is never quietly narrowed or moved.

Specialist review is mandatory where the mission touches authority or permissions, RLS or grants, migrations, idempotency or concurrency, financial integrity, or a new external provider.

Mission Control shall review and approve Sections 20 and 21 as the complete Engineering Review stage.

---

# 15. Phase H — Founder Approval and Blueprint Lock

After all required reviews are approved:

1. Mission Control presents the final Product Blueprint to the Founder.
2. The Founder confirms the product decisions and mission scope.
3. Mission Control records approval and locks the Product Blueprint.
4. The file moves from `active/` to `completed/` only according to the approved repository workflow.

A locked Product Blueprint becomes the product authority for the mission. The lock freezes every FCTM row's disposition, build commitment, commercial classification and mission assignment, so any later change needs a Founder decision.

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
- introduce no new product behaviour;
- carry an FCTM traceability table: every `IN SCOPE` row maps to the EIS requirements that realize it, and every EIS requirement maps back to a row, with any orphan recorded with its reason.

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

The three documents are authored and reviewed as one set, only after both the Blueprint lock and the EIS lock are canonical. Mission Control reviews the set in one review and records its disposition and the package lock. The Engineering Contract maps every `IN SCOPE` row to an obligation, the Verification Checklist maps every `IN SCOPE` row to an item with a planned evidence class, and the Build Prompt lists the rows each workstream builds and forbids behaviour outside them.

Approval of these documents is not implementation authorization.

Implementation requires the explicit Mission Control Implementation Authorization record of Source 18 Stage 13, which is not recorded while an `IN SCOPE` row is unmapped.

## Builder Completion Report

After implementation is completed, the authorized builder shall create:

`docs/implementation/[MISSION-ID]/lovable-build-completion-report.md`

The existing path is retained, and the report states its actual builder truthfully. The Builder Completion Report records implementation activity including, where applicable:

- files modified;
- frontend changes;
- backend changes;
- database migrations;
- authentication changes;
- storage changes;
- deployment status;
- known limitations;
- implementation notes;
- repository commit references;
- a status for every assigned FCTM row: `IMPLEMENTED`, `PARTIALLY IMPLEMENTED` or `NOT IMPLEMENTED`.

This report records what was implemented.

It does not verify correctness.

It does not authorize acceptance.

It does not replace the formal Completion Report.

## Formal Completion Report

The Evidence and Completion compiler shall create the formal Completion Report. The compiler is Claude Code unless Mission Control appoints another actor, under a separate appointment made after independent verification (Source 18 Section 4.3). It is a role separate from any builder role. The compiler records the independent findings by reference and never edits, summarizes away or suppresses them. It shall create:

`docs/implementation/[MISSION-ID]/completion-report.md`

only after ALL of the following have been completed:

1. implementation by the authorized builder;
2. the Builder Completion Report;
3. human runtime verification, with the Founder-reserved scenarios performed by the Founder or a confirmed delegate;
4. Mission Control review of runtime findings;
5. Independent verification by the Mission Control-appointed Independent Verification Actor under Source 18.

The Completion Report summarizes:

- implementation;
- verification;
- runtime findings;
- checklist results;
- evidence;
- follow-up items;
- implementation status;
- the Experience Verification Matrix;
- the Contract Reconciliation, with one line for every FCTM row of every contract advanced and the count and list of `BUILD NOW` requirements not demonstrated by the mission. Mission Control checks it before acceptance in the Reconciliation Integrity Check of Source 18 Stage 22, which is separate from independent verification and never waives it.

The Completion Report is not an implementation document.

It is a post-verification governance record.

## Evidence Package

The Evidence and Completion compiler shall create the Evidence Package only after independent verification.

The Evidence Package is manifest-first: an index linking continuous-integration run identities, the verification report, runtime evidence and provenance, storing only artifacts that are not otherwise durable.

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

After independent verification, Mission Control may authorize the combined preparation and review of the Evidence Package and the Completion Report. The Stage 21 and Stage 22 dispositions are recorded separately.

## Corrections and Human Retest

A material `FAIL` after independent verification is corrected through a numbered Corrective Authorization within the existing mission (Source 18 Stage 20), and never through a new Product Mission ID.

**A human runtime retest is required after every correction**, before correction acceptance and before re-verification closes. Its scope may be specific to the finding and is not automatically the whole mission: it covers the affected behaviour and its regression surface, as Mission Control determines. Each retest records the actor, the target, the scenarios, the expected and actual results, and the evidence. **No automated-only waiver exists**: continuous integration, tests and static review never replace it. Founder-reserved scenarios remain with the Founder or a confirmed delegate. A correction never removes or defers an FCTM row.

## Approved Implementation Lifecycle

```text
Locked Product Blueprint
↓
Locked EIS
↓
Claude creates, after both locks are canonical:
• Engineering Contract
• Lovable Build Prompt
• Verification Checklist
↓
Mission Control review
↓
Mission Control approval and package lock
↓
Mission Control Implementation Authorization record
↓
Founder submits Lovable Build Prompt
(only when the builder acts through a human or an external tool)
↓
Implementation by the authorized builder
↓
Builder Completion Report
↓
Human runtime verification
↓
Mission Control runtime review
↓
Independent verification by the Mission Control-appointed actor under Source 18
↓
Separately appointed Evidence and Completion compiler prepares, after independent verification:
• Evidence Package
• Completion Report
↓
Mission Control final acceptance
↓
Documentation closure
```

Corrections return to the applicable build and verification stages through the Corrective Cycle described above, with a human retest after every correction.

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
- The Definition Actor may structure discovery and draft product truth but may not invent missing decisions.
- No actor may change the build commitment, commercial classification or mission assignment of an approved requirement, or omit, defer, simplify or reclassify it, without a recorded Founder decision.
- A Git authorization never creates approval, lock, authorization, acceptance, closure, merge, production or migration authority.
- Claude Code may translate approved product truth into builder and engineering reviews but may not redefine it.
- Lovable, or another authorized builder, may implement only approved and authorized scope.
- AI, WhatsApp interpretation, automation, and Ask CFO may assist but may not become the authority for merchant decisions.
- Employee access remains permission-scoped.
- Owner financial intelligence is not exposed to staff by default.
- Standard POS bridges are allowed; custom POS modification inside the core platform is rejected.
- Smart Business must preserve clarity, dignity, usefulness, simplicity, trust, sustainability, and peace of mind.

---

# 19. Mission Completion Conditions

The Product Feature Elaboration Workflow is complete for a mission only when:

- the Intake Pack was issued and the Definition Actor was appointed;
- relevant sources were successfully ingested;
- the Truth Pack was completed: the FCTM was populated with a cited disposition for every row, confirmed truth, derived constraints, the Delta and unresolved questions were documented, and the Institutional Learning Intake Record was completed;
- the Founder Decision Gate was resolved, and the Founder Product Decision Record was created and confirmed for any triggered item;
- the Definition Actor drafted Sections 1–19 only, and the Blueprint maps every FCTM row;
- Mission Control completed product review and confirmed the FCTM completeness test;
- Builder Review was completed and approved where required;
- Engineering Review was completed and approved where required, with a feasibility finding for every `IN SCOPE` row;
- Founder approval was recorded;
- the Product Blueprint was locked with no `ESCALATED` row remaining;
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
| 1.3 | Aligned independent-verification wording with Source 18 Version 1.1, replacing "Claude Code independent verification" with independent verification by the Mission Control-appointed Independent Verification Actor (merged in PR #598 at `4ddbb647cfb413e43af38a7e362130c5fd16133c`). This row was added retroactively under `SB-GOV-PRODUCT-EXEC-1.0` and is reconstructed from that pull request (correction of an omitted entry; see the notes below) | ACTIVE |
| 1.4 | Product Mission execution reconciliation under `SB-GOV-PRODUCT-EXEC-1.0`: Definition Actor; mandatory FCTM (Section 7.4); Institutional Learning Intake Record; conditional Founder Decision Gate; assembly by reference; per-row feasibility findings; implementation package authored and reviewed as one set after both locks; mandatory Contract Reconciliation; existing Lovable-specific artifact names retained; Gate 2 order unchanged. Subordinate to Source 18 Version 1.2. Independently verified and merged in PR #606 at publication commit `b3cd5f439e8795855d6ef0f527d7ccea18c48080` (publication commit, not an activation commit). Activation preparation merged in PR #607 at preparation commit `86d9813582c4505c41be2c712a2a1df33912e988` (preparation commit, not an activation commit) | ACTIVE FROM THE ACTIVATION EVENT (the human merge of the finalization pull request, at its actual `merged_at` UTC instant). No activation date or activation merge commit is recorded here; they are recorded afterward as mandatory factual evidence |

**Correction and interpretation notes (append-only, added under `SB-GOV-PRODUCT-EXEC-1.0`).** The rows above that pre-date this amendment are not rewritten.

1. **Correction — omitted entry.** The Version 1.3 change merged in PR #598 had no row in this log. Row 1.3 is added retroactively and is reconstructed from that pull request.
2. **Interpretation — status of row 1.2.** The Status of row 1.2 remains as originally logged (`ACTIVE`). Version 1.2 was superseded by Version 1.3 when PR #598 was merged on 2026-09-18.
3. **Interpretation — activation-record reconciliation.** The Status of row 1.4 and the header Status previously read "AMENDMENT PROPOSED — ACTIVATION PENDING". They now record that PR #606 was independently verified and merged and that activation is still pending. No activation date or activation merge commit is recorded, and the status of rows 1.0 to 1.3 is unchanged.
4. **Interpretation — finalization reconciliation.** The Status of row 1.4 and the header Status previously read "AMENDMENT MERGED (PR #606) — MISSION CONTROL ACTIVATION CONFIRMATION PENDING". They now record that Version 1.4 is active from the activation event, the human merge of the finalization pull request. The Status of row 1.3 remains as originally logged (`ACTIVE`), and Version 1.3 is superseded by Version 1.4 at the activation event. The activation date and merge commit are recorded afterward as mandatory factual evidence, and none is recorded here.
