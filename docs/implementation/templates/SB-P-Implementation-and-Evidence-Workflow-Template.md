# SMART BUSINESS MISSION CONTROL

# SB-P — IMPLEMENTATION, VERIFICATION, EVIDENCE & COMPLETION WORKFLOW TEMPLATE

**Template ID:** SB-P-IVEW-1.0

**Template Name:** Implementation, Verification, Evidence & Completion Workflow

**Applies To:** Every Smart Business Product Mission (`SB-P-*`)

**Authorized By:** Mission Control

**Status:** ACTIVE TEMPLATE

---

# 1. Purpose

This template defines the standard Part Two workflow for implementing, verifying, evidencing, correcting, reporting, and accepting every Smart Business Product Mission after its Product Blueprint and Engineering Implementation Specification are approved and locked.

Only the following mission-specific values shall change:

- Mission ID
- Mission name
- Mission context
- Locked Product Blueprint path and version
- Locked EIS path and version
- Relevant source files and dependencies
- Authorized implementation scope
- Builder/runtime environment
- Repository paths and commit references
- Mission-specific evidence and corrective missions

The workflow, authority boundaries, authorship responsibilities, evidence provenance requirements, review sequence, correction gates, and acceptance rules remain unchanged.

---

# 2. Mission Variables

Replace the placeholders below before starting a mission.

| Variable | Mission Value |
|---|---|
| Mission ID | `[SB-P-X.X]` |
| Mission Name | `[MISSION NAME]` |
| Mission Context | `[CONCISE DESCRIPTION OF THE AUTHORIZED FEATURE OR CAPABILITY]` |
| Locked Product Blueprint | `docs/phase-1-mission-blueprint/completed/[MISSION-ID].md` |
| Locked EIS | `docs/phase-1-mission-blueprint/implementation/[MISSION-ID]-EIS.md` |
| Implementation Package Root | `docs/implementation/[MISSION-ID]/` |
| Engineering Contract | `docs/implementation/[MISSION-ID]/engineering-contract.md` |
| Builder Prompt | `docs/implementation/[MISSION-ID]/lovable-build-prompt.md` |
| Verification Checklist | `docs/implementation/[MISSION-ID]/verification-checklist.md` |
| Completion Report | `docs/implementation/[MISSION-ID]/completion-report.md` |
| Evidence Root | `docs/implementation/[MISSION-ID]/evidence/` |
| Builder | `[LOVABLE OR APPROVED IMPLEMENTATION BUILDER]` |
| Runtime Environment | `[AUTHORIZED RUNTIME / DEPLOYMENT ENVIRONMENT]` |
| Related Completed Missions | `[LIST RELEVANT COMPLETED MISSIONS]` |
| Dependencies | `[LIST DEPENDENCIES]` |

---

# 3. Roles and Responsibilities

## Founder

The Founder retains final product decision ownership and provides runtime observations where human verification is required.

The Founder shall:

- approve material product and implementation boundaries through Mission Control;
- provide or capture runtime screenshots and observations where required;
- confirm merchant-facing behaviour that cannot be established from repository or database evidence alone;
- retain final acceptance authority together with Mission Control.

## Mission Control

Mission Control is the governing, sequencing, review, correction-authorization, and acceptance authority.

Mission Control shall:

- authorize each implementation stage separately;
- ensure locked documents remain unchanged;
- approve the Engineering Contract, Builder Prompt, Verification Checklist, and Completion Report structure;
- review evidence provenance and completeness;
- authorize corrective missions where defects are found;
- prevent implementation scope expansion;
- withhold acceptance until all release-blocking obligations pass;
- record the final mission disposition.

## Claude Code / Claude Engineering

Claude Code is responsible for implementation-governance and engineering documents, and for test engineering or corrective engineering when specifically authorized.

Claude Code shall:

- author the Engineering Contract from the locked Product Blueprint and locked EIS;
- author the Builder Prompt;
- author the locked Verification Checklist template;
- author the Completion Report template;
- create or refine automated tests when separately authorized;
- diagnose defects discovered through testing;
- implement narrowly scoped corrective engineering only under explicit Mission Control authorization;
- preserve product truth and locked engineering authority.

## Lovable / Approved Builder

Lovable or the approved builder is responsible for implementation execution and initial implementation evidence.

The builder shall:

- implement only the authorized contract scope;
- preserve the existing repository architecture and product shell;
- create required migrations, backend, frontend, tests, and runtime changes only as authorized;
- capture implementation, repository, runtime, and database evidence within its access;
- execute the Verification Checklist where authorized;
- update the Completion Report with factual implementation results;
- pause and escalate on ambiguity or conflict;
- never modify locked governance documents.

## Architecture and Security Review

The relevant architecture specialist shall review the EIS or implementation package where required and record findings before lock or implementation authorization.

## Evidence Capturer

Every evidence artifact must name or infer a clear capturer category:

- Founder
- Lovable / Approved Builder
- Claude Engineering
- Architecture Specialist
- Repository automation / CI
- Mission Control

No artifact may be presented as evidence without identifiable provenance.

---

# 4. Authority Order

All Part Two work shall follow this order of authority:

1. Lighthouse Constitution
2. Smart Business Master System Manifesto
3. Locked Product Blueprint
4. Locked Engineering Implementation Specification
5. Relevant approved architecture and security frameworks
6. Locked Engineering Contract
7. Locked Builder Prompt
8. Locked Verification Checklist
9. Explicit Mission Control implementation and correction authorizations
10. Builder or engineering interpretation

A lower authority may not override, expand, narrow, or reinterpret a higher authority.

Where ambiguity or conflict exists, implementation shall pause and Mission Control clarification is required.

---

# 5. Entry Conditions

Part Two shall not begin until:

- Product Blueprint Sections 1–19 are approved;
- required Builder and Engineering Reviews are complete;
- Founder approval is recorded;
- the Product Blueprint is locked;
- the EIS is authored, reviewed, refined, and locked;
- architecture/security review findings are resolved or explicitly accepted;
- Mission Control authorizes creation of the implementation package.

Implementation itself shall not begin merely because the package exists. A separate explicit Mission Control implementation authorization is required.

---

# 6. Phase A — Engineering Contract

Claude Code shall author:

```text
[ENGINEERING CONTRACT PATH]
```

The Engineering Contract shall:

- translate the locked Product Blueprint and EIS into a builder-facing implementation contract;
- identify authority order and locked references;
- define authorized scope and explicit exclusions;
- specify backend, frontend, database, migration, permission, RLS, validation, concurrency, performance, observability, testing, evidence, and completion obligations where relevant;
- preserve human decision ownership;
- preserve the single authorized write path for sensitive business events;
- state that package approval is not implementation authorization;
- prohibit changes to locked documents.

Mission Control shall review line by line and may return required refinements.

The Engineering Contract shall be locked before the Builder Prompt is locked.

---

# 7. Phase B — Builder Prompt

Claude Code shall author:

```text
[BUILDER PROMPT PATH]
```

The Builder Prompt shall:

- name the builder and repository;
- identify the locked Product Blueprint, EIS, and Engineering Contract;
- define repository scope;
- define authorized and prohibited paths;
- reference the Engineering Contract rather than restating or altering its rules;
- require repository-first development;
- prohibit redesign, unrelated refactoring, duplicate code, dead code, workarounds, placeholders, bypasses, and undocumented assumptions;
- require tests, evidence, checklist execution, and Completion Report updates;
- include a pause-and-escalate rule.

Mission Control shall review and lock the Builder Prompt.

---

# 8. Phase C — Verification Checklist

Claude Code shall author:

```text
[VERIFICATION CHECKLIST PATH]
```

The locked checklist template shall include, where applicable:

1. Locked authority verification
2. Repository verification
3. Backend verification
4. Frontend verification
5. Database verification
6. Security and RLS verification
7. Validation verification
8. Concurrency and idempotency verification
9. Performance verification
10. Automated testing verification
11. Evidence verification
12. Completion verification
13. Final acceptance statement

Every checklist item shall be objective, traceable, and evidence-backed.

The template shall remain preserved after lock. Execution results shall be recorded in an appended execution section or a separate execution record under Mission Control authorization, rather than silently altering approved criteria.

---

# 9. Phase D — Completion Report Template

Claude Code shall create:

```text
[COMPLETION REPORT PATH]
```

The template shall include:

- mission metadata;
- implementation summary;
- repository summary;
- checklist summary;
- testing summary;
- evidence summary;
- defects and corrective missions;
- follow-up items;
- outstanding risks;
- repository and deployment status;
- builder declaration;
- Mission Control review and acceptance section.

The template must distinguish:

- implementation complete;
- verification complete;
- evidence complete;
- accepted by Mission Control;
- follow-up items that are non-blocking;
- unresolved release-blocking defects.

---

# 10. Phase E — Implementation Authorization

Mission Control shall issue a separate explicit implementation authorization naming:

- Mission ID
- authorized builder
- authorized branch or delivery mode
- authorized files and systems
- locked document versions
- evidence obligations
- verification obligations
- reporting room
- pause-and-escalate conditions

No implementation shall start without this authorization.

---

# 11. Phase F — Builder Implementation

The builder shall:

- read the repository before writing code;
- implement the smallest safe change satisfying the Engineering Contract;
- preserve existing authentication, navigation, business workspace, and visual patterns;
- build backend before dependent UI when required by the contract;
- use migrations and forward-fix practices approved by the EIS;
- preserve tenant/business isolation;
- preserve append-only and audit guarantees;
- add automated tests where authorized;
- record commit and deployment provenance;
- create the evidence directory structure.

The builder shall not:

- change product truth;
- change permissions or business rules;
- modify locked documents;
- implement Build Later items;
- redesign the architecture;
- introduce a second write path;
- allow AI or automation to take owner decisions;
- hide failures or unresolved assumptions.

---

# 12. Standard Evidence Directory

Each mission shall use:

```text
[IMPLEMENTATION PACKAGE ROOT]/evidence/
```

Recommended structure:

```text
evidence/
  README.md
  founder/
  runtime/
  database/
  repository/
  tests/
  security/
  deployment/
```

Folders may be omitted only where genuinely irrelevant.

The evidence index shall identify:

- artifact name;
- artifact description;
- mission or corrective mission that captured it;
- capturer;
- environment;
- date;
- checklist obligation supported;
- limitations.

---

# 13. Evidence Provenance Rules

## Founder Evidence

Founder screenshots or observations shall be stored under:

```text
evidence/founder/
```

The index shall state that the Founder captured or supplied them. A builder may archive and reference them but shall not claim authorship or capture ownership.

## Runtime Evidence

Runtime notes, screenshots, logs, and behavioural probes shall identify:

- environment;
- authenticated role or user context where relevant;
- route or workflow tested;
- expected result;
- actual result;
- capturer.

## Database Evidence

Database evidence shall identify:

- target project/environment;
- tool or query used;
- role or access context;
- whether the evidence is structural or behavioural;
- whether state changes were persisted or rolled back;
- capturer.

## Repository Evidence

Repository evidence shall include:

- commit range;
- head commit;
- branch or direct-main delivery mode;
- diff-stat;
- relevant files changed;
- confirmation that locked documents remained unchanged.

## Test Evidence

Automated test evidence shall include:

- framework and command;
- environment;
- test project separation from production where applicable;
- total passed, failed, skipped;
- traceability matrix;
- raw output;
- known limitations;
- author/capturer.

## Corrective Evidence

Evidence from a corrective mission shall preserve the original defect record and append the resolution and re-verification. Historical failure evidence shall not be deleted merely because the defect was fixed.

---

# 14. Phase G — Initial Verification and Checklist Execution

The builder shall execute the locked Verification Checklist after implementation.

Every item shall be marked:

- `PASS`
- `FAIL`
- `FOLLOW-UP`
- `NOT APPLICABLE` with justification

Rules:

- `FAIL` means non-compliance and blocks acceptance unless explicitly superseded by a corrective mission.
- `FOLLOW-UP` is allowed only for non-blocking evidence or capability gaps that are genuinely outside the authorized mission scope.
- A missing release-blocking test, RLS check, migration check, or business-isolation check cannot be downgraded to Follow-up without Mission Control approval.
- Evidence references must accompany every result.

---

# 15. Phase H — Completion Report Update

The builder shall update the Completion Report with factual results only.

The report shall identify who authored or updated each version.

At minimum, metadata shall record:

- `Created By`
- `Updated By`
- mission or corrective mission IDs
- `Reviewed By`
- status
- approval date or pending status

The report shall never imply Mission Control acceptance before that acceptance is explicitly recorded.

---

# 16. Phase I — Mission Control Review

Mission Control shall review:

- repository changes;
- locked document integrity;
- checklist execution;
- evidence completeness and provenance;
- Completion Report accuracy;
- runtime behaviour;
- security/RLS and business isolation;
- automated test coverage;
- defects, risks, and Follow-up items.

Possible outcomes:

- `ACCEPTED`
- `ACCEPTED WITH NON-BLOCKING FOLLOW-UP`
- `CORRECTIVE MISSION REQUIRED`
- `EVIDENCE INCOMPLETE`
- `IMPLEMENTATION REJECTED`

No builder may self-accept a mission.

---

# 17. Phase J — Corrective Missions

When a defect is discovered, Mission Control shall authorize a narrowly scoped corrective mission.

A corrective mission shall define:

- defect ID and evidence reference;
- root-cause scope;
- files or functions authorized for modification;
- prohibited changes;
- required regression tests;
- required re-verification;
- report and evidence updates;
- completion gate.

Corrective work shall not be used as permission for unrelated refactoring or product changes.

The original defect evidence must be preserved.

After correction:

- rerun the relevant tests;
- rerun affected checklist items;
- record the new commit or migration;
- update evidence and Completion Report;
- return to Mission Control review.

---

# 18. Phase K — Automated Test Engineering

Where the initial implementation does not yet satisfy the locked testing obligations, Mission Control may authorize a separate test mission.

Claude Engineering may:

- create the test harness;
- author tests mapped to every Engineering Contract testing obligation;
- use a dedicated test-only backend where necessary;
- produce a traceability matrix;
- capture raw test output and query plans;
- report genuine implementation defects without exceeding a test-only authorization.

A test-only mission shall not silently patch production defects unless separately authorized.

---

# 19. Phase L — Founder Runtime Observation

Founder runtime observation is required where merchant-facing behaviour cannot be fully established by static repository, database, or automated-test evidence.

Examples:

- authenticated screen presence and layout;
- permission-aware action visibility;
- confirmation dialogs;
- correction workflows;
- archive/reactivate behaviour;
- successful merchant workflow completion;
- preservation of the existing application shell.

The Founder may provide screenshots or observation notes. These shall be archived with explicit Founder provenance.

---

# 20. Acceptance Conditions

A mission may be accepted only when:

- implementation matches the locked Product Blueprint and EIS;
- the Engineering Contract obligations are satisfied;
- all release-blocking checklist items pass;
- business isolation and permission boundaries are verified;
- locked documents remain unchanged;
- required migrations are applied and verified;
- required automated tests pass;
- evidence is complete and provenance is clear;
- corrective missions are closed;
- Completion Report is accurate;
- no unresolved implementation defect is hidden;
- Mission Control records acceptance;
- Founder approval is recorded where required.

---

# 21. Authorship and Provenance Standard

Every implementation-package document shall identify its authorship and review history.

Expected default attribution:

| Artifact | Default Author / Capturer | Review Authority |
|---|---|---|
| Engineering Contract | Claude Code | Mission Control |
| Builder Prompt | Claude Code | Mission Control |
| Verification Checklist template | Claude Code | Mission Control |
| Checklist execution results | Builder; later Claude Engineering for test/correction appendices | Mission Control |
| Completion Report template | Claude Code | Mission Control |
| Completion Report implementation updates | Builder | Mission Control |
| Completion Report test/correction updates | Claude Engineering or authorized corrective builder | Mission Control |
| Founder screenshots | Founder | Archived by builder or Mission Control |
| Runtime evidence | Builder or authorized verifier | Mission Control |
| Database evidence | Builder, architecture specialist, or Claude Engineering according to mission | Mission Control |
| Repository evidence | Builder or authorized verifier | Mission Control |
| Automated test evidence | Claude Engineering or authorized test engineer | Mission Control |
| Final acceptance | Mission Control / Founder | Not delegated |

Actual mission metadata shall override this default where a different authorized actor performed the work.

---

# 22. Permanent Governance Boundaries

No Part Two workflow may:

- redefine product truth;
- alter locked Product Blueprint or EIS content;
- weaken human decision ownership;
- allow AI to act as financial or operational authority;
- expose owner intelligence to staff without explicit permission;
- weaken tenant/business isolation;
- replace append-only records with editable history;
- create hidden or duplicate mutation paths;
- treat evidence as acceptance;
- treat successful deployment as proof of correctness;
- hide defects after correction;
- mark Follow-up items as Pass without evidence;
- let a builder approve its own work.

---

# 23. Reusable Mission Instruction

Use the following instruction when starting Part Two for a new Product Mission:

```text
SMART BUSINESS MISSION CONTROL

Apply the active SB-P Implementation, Verification, Evidence & Completion Workflow Template.

Mission ID: [MISSION ID]
Mission Name: [MISSION NAME]
Mission Context: [MISSION CONTEXT]
Locked Product Blueprint: [PATH AND VERSION]
Locked EIS: [PATH AND VERSION]
Implementation Package Root: [PATH]
Builder: [BUILDER]
Relevant Sources: [SOURCE PATHS]
Dependencies: [DEPENDENCIES]

Begin only with the currently authorized phase.
Do not skip approval gates.
Do not modify locked documents.
Do not infer missing authority.
Record authorship and evidence provenance explicitly.
Pause and escalate any ambiguity to Mission Control.
```

---

# 24. Template Completion Gate

Before using this workflow for implementation, Mission Control shall confirm:

- [ ] Mission variables are complete.
- [ ] Product Blueprint is locked.
- [ ] EIS is locked.
- [ ] Engineering Contract is approved and locked.
- [ ] Builder Prompt is approved and locked.
- [ ] Verification Checklist is approved and locked.
- [ ] Completion Report template exists.
- [ ] Evidence folder exists.
- [ ] Implementation authorization is explicit.
- [ ] Builder and reporting room are identified.
- [ ] Evidence provenance rules are acknowledged.
- [ ] Corrective-mission authority remains with Mission Control.
- [ ] Final acceptance remains with Mission Control and Founder.

Until these checks pass, implementation shall not begin.
