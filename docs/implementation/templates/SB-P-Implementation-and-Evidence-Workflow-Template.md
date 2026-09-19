# SMART BUSINESS MISSION CONTROL

# SB-P — IMPLEMENTATION, VERIFICATION, EVIDENCE & COMPLETION WORKFLOW TEMPLATE

**Template ID:** SB-P-IVEW-1.2

**Template Name:** Implementation, Verification, Evidence & Completion Workflow

**Applies To:** Every Smart Business Product Mission (`SB-P-*`)

**Authorized By:** Mission Control

**Status:** AMENDMENT PROPOSED — ACTIVATION PENDING. Version 1.1 is the operative template until this version is independently verified, merged by a human and separately activated by Mission Control (the post-merge activation and metadata-reconciliation step defined in the Source 18 header). This version takes effect only after Source 18 Version 1.2 is itself active.

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
- Mission-specific evidence and Corrective Authorizations

The workflow, authority boundaries, authorship responsibilities, evidence provenance requirements, review sequence, correction gates, and acceptance rules remain unchanged. This template is subordinate to active Source 18. Its Phase labels organize instructions and do not create an alternative lifecycle sequence. The mandatory order is Builder Completion Report, Founder or authorized human runtime verification, Mission Control runtime review, Stage 19 independent verification by the actor designated under Source 18, then the Evidence Package and formal Completion Report, Mission Control acceptance and documentation closure. Builder checklist execution is initial evidence, not independent verification. A Verification Packet links existing evidence and does not constitute the formal Evidence Package. No template label or builder declaration may waive these gates. Source 18 Version 1.2 additionally requires the Feature Coverage and Product Truth Traceability Matrix (FCTM), mapped through every document of this template, and a mandatory human runtime retest after every correction.

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
| Authorized Builder (per workstream) | `[LOVABLE OR APPROVED IMPLEMENTATION BUILDER]` |
| Workstream Register | `[WORKSTREAMS: SCOPE, AUTHORIZED BUILDER, PATHS, CONTRACTS ADVANCED, RISK CLASS]` |
| Locked FCTM | `[FCTM PATH, BASELINE COMMIT, AND THE ROWS ASSIGNED TO EACH WORKSTREAM]` |
| Runtime Environment | `[AUTHORIZED RUNTIME / DEPLOYMENT ENVIRONMENT]` |
| Test and Verification Environments | `[TEST PROJECT IDENTITY AND RUNTIME-VERIFICATION ENVIRONMENT]` |
| Production, Migration and Delivery Scope Flags | `production mutation: NOT AUTHORIZED; migration execution: NOT AUTHORIZED; delivery sync and publication: NOT AUTHORIZED` |
| Continuous-Integration Baseline | `[FAST GATE RESULTS REQUIRED AT EACH CHECKPOINT; FULL ASSURANCE APPLICABILITY BY TRIGGER PATH]` |
| Verification Plan | `[APPOINTED VERIFIER AND ALTERNATES, INDEPENDENCE ASSESSMENT, CODEX UTILIZATION CLASSIFICATION, CLASS A BOUNDARIES]` |
| Runtime Verification Plan | `[FOUNDER-RESERVED SCENARIOS AND ANY DELEGATED HUMAN VERIFIER BY NAME]` |
| Checkpoint Plan | `[CHECKPOINT COMMITS AND THEIR REQUIRED CHECKS]` |
| Related Completed Missions | `[LIST RELEVANT COMPLETED MISSIONS]` |
| Dependencies | `[LIST DEPENDENCIES]` |

---

# 3. Roles and Responsibilities

## Founder

The Founder retains final product decision ownership and provides runtime observations where human verification is required.

The Founder shall:

- approve material product and implementation boundaries through Mission Control;
- provide or capture runtime screenshots and observations where required;
- perform or confirm the Founder-reserved runtime scenarios, and confirm the findings of any delegated human verifier;
- confirm merchant-facing behaviour that cannot be established from repository or database evidence alone;
- retain final acceptance authority together with Mission Control.

## Mission Control

Mission Control is the governing, sequencing, review, correction-authorization, and acceptance authority.

Mission Control shall:

- authorize each implementation stage separately;
- ensure locked documents remain unchanged;
- approve the Engineering Contract, Builder Prompt, Verification Checklist, and Completion Report structure;
- review evidence provenance and completeness;
- issue a numbered Corrective Authorization for each correction where defects are found;
- run the FCTM completeness test and withhold the Implementation Authorization while an `IN SCOPE` row is unmapped;
- prevent implementation scope expansion;
- withhold acceptance until all release-blocking obligations pass;
- record the final mission disposition.

## Claude Code / Claude Engineering

Claude Code is responsible for implementation-governance and engineering documents, and for test engineering or corrective engineering when specifically authorized.

Claude Code shall:

- author the Engineering Contract from the locked Product Blueprint and locked EIS;
- author the Builder Prompt;
- author the locked Verification Checklist template;
- author the Completion Report template, including the Contract Reconciliation;
- act as an authorized builder for a workstream only where the Implementation Authorization names it, subject to the independence rules of Source 18 Section 4.9; as a builder it cannot verify, approve or accept its own work;
- act as the Evidence and Completion compiler only under the separate appointment of Source 18 Section 4.3, made after independent verification. That is a role separate from any builder role. As compiler it records independent findings by reference and never edits, summarizes away or suppresses them, and where it built a workstream Mission Control appoints a different compiler for that workstream's reconciliation lines or, if none is eligible, escalates the conflict to the Founder;
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
- create or update the Builder Completion Report with factual implementation results and a linked Verification Packet; do not author the formal Completion Report or claim independent verification;
- state its actual identity truthfully in every artifact, at the existing artifact path (Source 18 Section 4.5);
- report a status for every FCTM row assigned to it, and never omit, defer, simplify or reclassify an authorized row or implement behaviour that maps to no authorized row;
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

**Independence.** The verifier of a workstream did not implement, correct or transfer it. The actor that transfers code between repositories is not that workstream's verifier. A builder never approves its own work.

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
- the FCTM is locked;
- Mission Control authorizes creation of the implementation package.

No package may exist before both the Blueprint lock and the EIS lock are canonical.

The Engineering Contract, Builder Prompt and Verification Checklist are authored and reviewed as one set, and every `IN SCOPE` FCTM row is mapped to an Engineering Contract obligation and to a Verification Checklist item.

Implementation itself shall not begin merely because the package exists. A separate explicit Mission Control implementation authorization is required, and it is not recorded while an `IN SCOPE` row is unmapped or an obligation is an orphan.

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
- prohibit changes to locked documents;
- map every `IN SCOPE` FCTM row to at least one obligation, keyed by row ID and without restating requirement text;
- state what is out of scope as "still committed / not in this mission", with the owning mission or the preserved classification.

Mission Control shall review line by line and may return required refinements.

The Engineering Contract, Builder Prompt and Verification Checklist are reviewed together in one Mission Control review, and cross-references are validated in that review.

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
- list the FCTM rows that each workstream builds and prohibit behaviour outside them;
- include a pause-and-escalate rule.

Mission Control shall review and lock the Builder Prompt with the package.

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
13. Product Truth coverage and drift verification
14. Final acceptance statement

Section 13 verifies, by FCTM row ID: that every `IN SCOPE` row has an Engineering Contract obligation and a checklist item; that each row's classification and mission assignment equal the locked FCTM; that there is no orphan obligation; that permission, isolation and denial rows have named negative-path items; and that an obligation inventory taken from the source text (each contract's numbered sections, applicable obligations and numbered acceptance scenarios) has no obligation or acceptance scenario without a row. A missing obligation or acceptance scenario is a coverage failure even where every retained row maps consistently. Every item carries its row ID and a planned evidence class. `ALREADY DEMONSTRATED` rows map to a regression or no-change item that cites the earlier evidence and the Delta impact check, and are never assumed to pass.

Every checklist item shall be objective, traceable, and evidence-backed.

The template shall remain preserved after lock. Execution results shall be recorded in an appended execution section or a separate execution record under Mission Control authorization, rather than silently altering approved criteria.

---

# 9. Phase D — Completion Report Template

This section defines the required report structure and does not authorize an early mission-specific Completion Report. Only after Source 18 independent verification and Mission Control authorization, the Evidence and Completion compiler (Claude Code unless Mission Control appoints another actor) shall create the formal Completion Report at:

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
- defects and Corrective Authorizations;
- follow-up items;
- outstanding risks;
- repository and deployment status;
- builder declaration;
- the Experience Verification Matrix;
- the **Contract Reconciliation**: for every contract advanced, one line per FCTM row with the status `DEMONSTRATED` (evidence class and path, verifier result, runtime evidence), `DEMONSTRATED — CARRIED FORWARD` (with the original evidence), `IMPLEMENTED — NOT DEMONSTRATED`, `PARTIALLY DEMONSTRATED` (stating what remains), `NOT IMPLEMENTED`, `ASSIGNED TO LATER MISSION`, `DELEGATED`, `OUT OF BUILD SCOPE`, `NOT APPLICABLE` or `DEFERRED WITH FOUNDER DECISION <ID>`, and per contract the count and list of `BUILD NOW` requirements not demonstrated by this mission;
- Mission Control review and acceptance section.

The template must distinguish:

- implementation complete;
- verification complete;
- evidence complete;
- accepted by Mission Control;
- follow-up items that are non-blocking;
- unresolved release-blocking defects;
- requirement demonstrated;
- requirement not demonstrated.

The report also keeps apart the states committed, implemented, merged, migrated or configured, deployed, runtime-verified, independently verified, accepted and globally complete.

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
- the workstream register, with each workstream's scope, authorized builder, paths, contracts advanced and risk class
- the environments, with production, migration and delivery each stated `NOT AUTHORIZED`
- the continuous-integration baseline
- the verification plan, including the appointed verifier and alternates
- the runtime verification plan, including the Founder-reserved scenarios
- the FCTM reference: the locked path and baseline commit, the rows assigned to each workstream, and Mission Control's statement that the mapping completeness test passed

The authorization records no Git authority, which is granted separately under the AI Communication and Handover Protocol, and it authorizes no production, migration or delivery action. It may be recorded after package approval and lock as a separately identified disposition. No implementation shall start without this authorization.

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
- commit checkpoints, each with a green Fast Gate and, where triggered, Full Assurance, and record commit and deployment provenance;
- where the builder works outside the canonical repository, record the canonical transfer, which is mechanical, scope-preserving and manifest-checked and never counts as verification;
- capture and reference initial evidence with provenance in the authorized mission record; the Evidence and Completion compiler assembles the formal Evidence Package only after independent verification and Mission Control authorization under Source 18;

The builder shall not:

- change product truth;
- change permissions or business rules;
- modify locked documents;
- implement Build Later items;
- redesign the architecture;
- introduce a second write path;
- allow AI or automation to take owner decisions;
- omit, defer, simplify or reclassify an authorized FCTM row, or implement behaviour that maps to no authorized row, and instead raise the matter with Mission Control for a Founder decision;
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
- mission or Corrective Authorization that captured it;
- capturer;
- environment;
- date;
- checklist obligation and FCTM row supported;
- limitations.

The evidence index is a manifest: it links continuous-integration run identities and other durable records and stores only artifacts that are not otherwise durable.

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
- authorized branch and pull-request reference; AI-authored changes use the protected-main pull-request workflow;
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
- raw output, or the continuous-integration run identity and checkout commit where the Independent Verification Efficiency Protocol accepts that evidence;
- known limitations;
- author/capturer.

## Corrective Evidence

Evidence from a Corrective Authorization shall preserve the original defect record and append the resolution and re-verification. Historical failure evidence shall not be deleted merely because the defect was fixed.

---

# 14. Phase G — Initial Verification and Checklist Execution

The builder shall execute the locked Verification Checklist after implementation.

Every item shall be marked:

- `PASS`
- `FAIL`
- `FOLLOW-UP`
- `NOT APPLICABLE` with justification

Rules:

- `FAIL` means non-compliance and blocks acceptance unless explicitly superseded by a Corrective Authorization.
- `FOLLOW-UP` is allowed only for non-blocking evidence or capability gaps that are genuinely outside the authorized mission scope. It never covers a non-demonstrated `IN SCOPE` row.
- A missing release-blocking test, RLS check, migration check, or business-isolation check cannot be downgraded to Follow-up without Mission Control approval, and a non-demonstrated `IN SCOPE` row cannot be downgraded without a recorded Founder decision.
- Evidence references must accompany every result, and results are recorded per FCTM row.

---

# 15. Phase H — Completion Report Update

The builder shall update its Builder Completion Report with factual results only. After Source 18 independent verification and Mission Control authorization, the Evidence and Completion compiler shall create or update the formal Completion Report from verified evidence, distinguishing builder statements, independent findings, human runtime observations and Mission Control decisions.

The report shall identify who authored or updated each version.

At minimum, metadata shall record:

- `Created By`
- `Updated By`
- mission IDs and Corrective Authorization numbers
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
- defects, risks, and Follow-up items;
- requirement coverage and the Contract Reconciliation, including the Reconciliation Integrity Check of Source 18 Stage 22, which Mission Control performs after the Completion Report and before acceptance, separately from independent verification and without waiving it.

Possible outcomes:

- `ACCEPTED`
- `ACCEPTED WITH NON-BLOCKING FOLLOW-UP`
- `CORRECTION REQUIRED`
- `EVIDENCE INCOMPLETE`
- `IMPLEMENTATION REJECTED`

`ACCEPTED WITH NON-BLOCKING FOLLOW-UP` cannot cover a non-demonstrated `IN SCOPE` row without a recorded Founder decision.

No builder may self-accept a mission.

---

# 17. Phase J — Corrective Cycle

When a defect is discovered, Mission Control shall issue a narrowly scoped, numbered Corrective Authorization. It is a record within the existing mission and never a new Product Mission ID.

A Corrective Authorization shall define:

- defect ID and evidence reference;
- root-cause scope;
- files or functions authorized for modification;
- the builder, who is never the verifier;
- prohibited changes;
- required regression tests;
- required re-verification, including the human retest;
- report and evidence updates;
- completion gate.

Corrective work shall not be used as permission for unrelated refactoring or product changes.

The original defect evidence must be preserved.

A correction never resolves a coverage finding by removing or deferring an FCTM row. It restores the approved behaviour or removes the unauthorized behaviour, and if that is impossible or unsafe the row goes to the Founder through Mission Control.

After correction:

- rerun relevant focused tests and affected checklist items; provide full applicable deterministic CI;
- record the correction checkpoint and changed scope, listing the affected FCTM rows;
- update the Builder Completion Report and Verification Packet, preserving prior evidence;
- perform the **human runtime retest** described below, and Mission Control runtime review under Source 18 Stage 20;
- obtain Mission Control correction review and finding-scoped independent re-verification, escalating where the correction invalidates a broader assurance boundary;
- after independent verification and Mission Control authorization, update the formal Evidence Package and Completion Report;
- return to Mission Control for acceptance disposition.

**Human retest after every correction.** A human runtime retest is required after every correction, before correction acceptance and before re-verification closes. Its scope may be specific to the finding and is not automatically the whole mission: it covers the affected behaviour and its regression surface, as Mission Control determines. Each retest records the actor, the target, the scenarios, the expected and actual results, and the evidence. No automated-only waiver exists: continuous integration, tests and static review never replace it. Founder-reserved scenarios remain with the Founder or a confirmed delegate.

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

Founder runtime verification, or authorized human runtime verification confirmed by the Founder, and Mission Control runtime review are mandatory before independent verification under Source 18. Mission Control defines the affected runtime scope and reviews its evidence. Static repository, database and automated-test evidence do not replace this gate.

The Founder-reserved scenarios (the Build Plan Founder Runtime Verification scenarios for the mission, and any anchor Mission Control designates) are performed by the Founder or a delegate the Founder confirms. Delegable mechanical checks, such as role and permission behaviour, negative paths and data visibility, are performed by a named authorized human verifier against the Verification Checklist. The Founder confirms all submitted findings. Runtime evidence names the environment, commit and deployment identity, actor, role, route, expected and actual result, and the FCTM row IDs exercised.

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
- Corrective Authorizations are closed, each with its human retest recorded;
- the Experience Verification Matrix and the Contract Reconciliation are accurate, and the Reconciliation Integrity Check found no unresolved discrepancy;
- every `IN SCOPE` FCTM row is `DEMONSTRATED` or covered by a recorded Founder decision;
- the Completion Report is accurate;
- the Global Product Completion View is updated from the accepted Contract Reconciliation and only from demonstrated evidence;
- no unresolved implementation defect is hidden;
- Mission Control records acceptance;
- Founder approval is recorded where required.

Acceptance is not release, deployment or migration authority.

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
- let a builder approve its own work;
- silently omit, defer, simplify, reclassify or expand an approved requirement;
- treat a Git authorization as authority to approve, lock, authorize, execute, accept, close or merge.

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
Authorized Builder(s): [BUILDER PER WORKSTREAM]
Locked FCTM: [PATH AND BASELINE COMMIT]
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
- [ ] The FCTM is locked.
- [ ] Engineering Contract, Builder Prompt and Verification Checklist are approved and locked as one package.
- [ ] Every `IN SCOPE` row is mapped to an obligation and a checklist item.
- [ ] No orphan obligation exists.
- [ ] Completion Report template exists.
- [ ] Evidence folder exists.
- [ ] Implementation authorization is explicit and states production, migration and delivery as not authorized.
- [ ] The verification plan and runtime verification plan are recorded.
- [ ] Builder and reporting room are identified.
- [ ] Evidence provenance rules are acknowledged.
- [ ] Corrective Authorization authority remains with Mission Control.
- [ ] Final acceptance remains with Mission Control and Founder.

Until these checks pass, implementation shall not begin.

---

# 25. Template Change Log

| Version | Change | Status |
|---|---|---|
| 1.0 | Initial reusable Implementation, Verification, Evidence & Completion Workflow for all Smart Business Product Missions | SUPERSEDED |
| 1.1 | Aligned the template with Source 18 Version 1.1: subordination to Source 18, Builder Completion Report versus formal Completion Report, Verification Packet, independent verification and finding-scoped correction sequence, protected-main pull-request workflow (merged in PR #598 at `4ddbb647cfb413e43af38a7e362130c5fd16133c`). This log and this row were added retroactively under `SB-GOV-PRODUCT-EXEC-1.0` and are reconstructed from that pull request (correction of an omitted log) | ACTIVE |
| 1.2 | Product Mission execution reconciliation under `SB-GOV-PRODUCT-EXEC-1.0`: FCTM mapped through the Engineering Contract, Builder Prompt, Verification Checklist and Completion Report; Contract Reconciliation; expanded Implementation Authorization fields; per-row builder reporting; numbered Corrective Authorization with mandatory human retest; Founder-reserved and delegable runtime checks; existing Lovable-specific artifact names retained. Subordinate to Source 18 Version 1.2 | AMENDMENT PROPOSED — ACTIVATION PENDING |

**Correction and interpretation notes (append-only, added under `SB-GOV-PRODUCT-EXEC-1.0`).**

1. **Correction — omitted log.** This template had no change log before this amendment. Rows 1.0 and 1.1 are reconstructed from the template's history and from PR #598, and are added retroactively.
2. **Interpretation — status of row 1.0.** Row 1.0 is shown as `SUPERSEDED` because Version 1.1 was merged in PR #598 on 2026-09-18. No earlier recorded status is altered, because none existed.
