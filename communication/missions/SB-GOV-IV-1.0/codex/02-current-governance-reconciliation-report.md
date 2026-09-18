# Current Governance Reconciliation Report

- **Mission:** `SB-GOV-IV-1.0`
- **Author/date:** Codex, 2026-09-18
- **Status:** `DRAFT — MISSION CONTROL REVIEW REQUIRED`
- **Inspected baseline:** `72f4e7d2e947b58b4d796ef2144c8bdd389de1a4`, `SmartBusinessv1/smart-business`.
- **Scope:** Repository research and proposed text only. No governing file was edited.

## 1. Decision for Mission Control

Packet preparation, evidence classes, selective independent execution and finding-scoped correction review can be used within existing authorized roles and gates. No current governing source inspected requires every verifier to rerun the complete deterministic factory locally after each correction.

Provider-neutral Stage 19 ownership **requires a Founder-approved Source 18 amendment**. Its current owner is Claude Code, not Codex, and Appendix A explicitly excludes Codex from that verifier role. The [protocol draft](01-independent-verification-efficiency-protocol-draft.md) preserves this until approval. “Codex Not Required” cannot remove Stage 19. We recommend retaining the mandatory independent gate for every Product Mission while making its method proportionate to risk.

The implementation workflow template contains an existing reporting/sequence ambiguity: builder checklist execution and builder updates to the Completion Report could be mistaken for the independent gate and formal report. Source 18 already controls this conflict. The proposed template alignment below makes that explicit without moving or waiving any gate.

## 2. Discovery method and authority boundary

Started with [canonical index](../../../../merge/active/README.md) and [canonical package register](../../../../docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md). Inspected Source 18 in full; examined relevant clauses of the foundational sources, active product/AI governance, actor instructions, communication protocol, both Product Mission templates, EOS register/current documents, CI baseline and actual workflow YAML. Searched current source and engineering families for named actors, independent verification, runtime, CI and acceptance. Historical missions and OLE promotions supply examples, not competing authority.

The [EOS index](../../../../docs/engineering/eos/README.md) distinguishes approved/active baselines from Founder-approval-pending documents and a published historical release package. Its own status is also approval-pending. Do not infer approval from directory placement. Backups, repair artifacts and archive copies are excluded from current authority. No external branch-protection settings or historical CI run was freshly queried in this drafting mission; references below describe repository records and inspected configuration, not new runtime certification.

The activation record names base `427ea465e29c017e0f9bddb055f4b3b92c561fef`. The requested fast-forward pull reached `72f4e7d2e947b58b4d796ef2144c8bdd389de1a4`, which adds this mission activation via #596 after that base. The draft records the actual inspected head; it does not invent branch/publication authority from the historical base field.

## 3. Current-state map

Classifications: **compatible** preserves the rule; **needs clarification** risks misreading but need not change governing authority; **conflicts** means the proposed generic reading or a subordinate passage contradicts a controlling rule; **governance amendment required** names the approval needed to change it. These labels can coexist where a conflict requires an amendment.

| Source / exact location | Current constraint or evidence | Classification and disposition |
| --- | --- | --- |
| [Source 00](../../../../merge/active/00_Lighthouse_Constitution.md), Chapters 6 and 12; [Source 01](../../../../merge/active/01_Smart_Business_Master_System_Manifesto.md), §5; [Source 11](../../../../merge/active/11_Smart_Business_Product_Truth_Map.md), roles/permissions | Trust, truth, human ownership and Product Truth govern engineering | **Compatible**; no amendment. Efficiency cannot transfer human decisions to AI |
| [Source 09](../../../../merge/active/09_Master_Roadmap_Command.md), execution/acceptance sequence; [Source 15](../../../../merge/active/15_Governance_Mission_Control_Activation_Template.md), inheritance verification | Missions inherit approved sources and gates | **Compatible**; no mission activation by this draft |
| [Source 10](../../../../merge/active/10_Smart_Business_Environment_Activation_Manual.md), Claude Pro phase activation and ChatGPT CTO verification command | Names Claude Pro CTO and ChatGPT CTO calibration/review environments | **Needs clarification**; these are environment/CTO calibration roles, not Source 18 Stage 19. No generic-verifier replacement of them proposed |
| [Source 12](../../../../merge/active/12_Product_Execution_and_Release_Framework.md), §§29–30, 41, 44–46 and release controls | Each feature is assessed against correctness, permissions, integrity, failure handling and evidence; security failures can block acceptance; acceptance is not production release authority | **Compatible**; all obligations remain, A/B/C changes methods only |
| [Source 17](../../../../merge/active/17_AI_Operations_Manual.md), precedence table, B15–B18 and multi-AI handover | “Claims without evidence shall not be treated as completion.” CI is one evidence source; environments and authority remain separate | **Compatible**; no change needed for evidence reuse with provenance |
| [Source 18](../../../../merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md), §§2–4 | Source precedence; Mission Control acceptance; Founder/delegated human runtime; Codex discovery/documentation; Claude Code independent verification | **Governance amendment required** for assigning another Stage 19 actor; role changes limited to verification |
| Source 18, Stages 16–19 | Builder report → human runtime → Mission Control runtime review → Claude Code independent verification | **Conflicts** with silent substitution or risk-based gate omission. Amendment required only for actor flexibility; sequence retained |
| Source 18, Stage 20 | Updated Builder report, Founder retest, runtime review and reverification; preserve prior evidence | **Compatible / needs clarification** for scoped execution. It does not demand a full local suite, but scoped review cannot omit human/runtime steps |
| Source 18, Stages 21–24, §9 and §14 | Independent verification before Evidence Package/formal report; Mission Control acceptance before closure; formal completion explicitly names Claude Code | **Governance amendment required** for actor references only; reporting owner and non-bypassable gates retained |
| Source 18, Appendices A/B | “Not verifier” under Codex; independent report creator Claude Code | **Conflicts / governance amendment required** for generic independent actor; proposed exact rows below |
| [Product Feature Elaboration template](../../../../docs/phase-1-mission-blueprint/templates/SB-P-Product-Feature-Elaboration-Workflow-Template.md), §17 formal report and lifecycle diagram | Two explicit references to “Claude Code independent verification” | **Governance amendment required** as subordinate alignment after Source 18 approval; other Codex/Claude discovery/engineering ownership unchanged |
| [Implementation and Evidence template](../../../../docs/implementation/templates/SB-P-Implementation-and-Evidence-Workflow-Template.md), §§3, 9, 12, 14–19 and authorship matrix | Builder executes checklist; builder updates Completion Report; founder observation described later; corrective work preserves original findings | **Needs clarification / conflicts** if interpreted as independent verification or alternate stage order. Proposed Source 18 alignment below, including formal Evidence Package timing |
| [AGENTS.md](../../../../AGENTS.md), evidence/Git/approval rules; [CHATGPT.md](../../../../CHATGPT.md) and [CLAUDE.md](../../../../CLAUDE.md), responsibilities and Git safety | Evidence before completion; explicit mission authority; no self-approval/merge; primary roles permit scoped work | **Compatible**; “not a builder” must not repeal Codex's other authorized roles. No edits required |
| [Communication protocol](../../../AI_Communication_and_Handover_Protocol.md), §§2–7, 13, 19–24, 26–27; [communication index](../../../README.md) | Repository-only material exchanges; named current owner; durable logs; green CI is not acceptance; local/remote distinction; closure and OLE handoff | **Compatible**; packet/report can use existing mission records. No replacement workflow or archival in this mission |
| [Branch-protection record](../../../governance/branch-protection-verification.md) | Repository record of protected main, PR and Markdown checks, conversation resolution and human verification | **Compatible**; no protection amendment. This draft does not independently refresh remote settings |
| [Build Assurance Baseline](../../../../docs/engineering/assurance/Build_Assurance_Baseline.md), §§1–3 and two-tier extension | “Green CI ... proves only” scoped command success; Fast Gate always runs; Full Assurance selective and uses a test environment | **Compatible / needs clarification**: header still says awaiting Mission Control; historical counts/sections are not current totals. Inspect actual workflow/configuration and acceptance provenance for operational claims |
| [build-assurance.yml](../../../../.github/workflows/build-assurance.yml), [full-assurance.yml](../../../../.github/workflows/full-assurance.yml), [Markdown workflow](../../../../.github/workflows/markdown-quality-gate.yml) | Actual commands and triggers; Full Assurance path-filtered, Fast Gate unconditional on main PRs/pushes, Markdown PR gate | **Compatible**; documentation rule does not suppress CI. Full Assurance comment claiming no database/provider mutation is broader than its real integration-test behaviour described in the baseline; do not rely on that comment for execution authorization |
| [Engineering Quality Gate](../../../../docs/engineering/eos/Engineering_Quality_Gate_v1.0.md), [Artifact Workflow](../../../../docs/engineering/eos/Engineering_Artifact_Workflow_v1.0.md), [Pipeline Architecture](../../../../docs/engineering/eos/Engineering_Pipeline_Architecture_v1.0.md) | Automated Markdown/artifact quality checks, layered validation and review | **Compatible** approved baselines; deterministic evidence reuse does not remove publication gates |
| [ChatGPT GitHub workflow](../../../../docs/engineering/eos/ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md) and [Claude GitHub workflow](../../../../docs/engineering/eos/Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md) | Active scoped Git, exact staging, quality/secret checks, no self-merge | **Compatible**; drafting initially lacked Git authority. The subsequent Mission Control authorization permits only the three Codex deliverables and live report on `mission/SB-GOV-IV-1.0-draft`; governing-source publication remains separately gated |
| [Platform Inventory](../../../../docs/engineering/eos/Engineering_Platform_Inventory_v1.0.md) and [Tooling Register](../../../../docs/engineering/eos/Engineering_Tooling_Register.md) | Baseline/current capability and tool inventory | **Compatible**; capability cannot confer verification or acceptance authority |
| EOS approval-pending Change Management, Integration Architecture, Local Workflow, Release Management, Repository Governance, Security and Access Control, Audit and Continuous Improvement, Automation Architecture and Platform Capability Matrix | Current candidates discuss scoped engineering, Source 18 precedence, automation evidence, platform roles and release boundaries | **Needs clarification** of approval status, not permission to override active sources. No change to these candidates is needed to activate the minimal verifier protocol |
| EOS [published v1.0 specification](../../../../docs/engineering/eos/v1.0/Team_LIPS_Engineering_Operating_System_EOS_v1.0.md) | General verification-before-acceptance and recovery evidence; historical package status is bounded by current register | **Compatible** as background; no independent Stage 19 actor substitution authority inferred. A local `Engineering_Backup_and_Disaster_Recovery_v1.0.md` file is ignored and absent from Git; it is excluded as published authority |
| OLE Stage 5–6 reports, [promotion decision 42](../../SB-ORG-LEARNING-1.1/mission-control/42-final-ole-learning-review-and-mission-scoped-promotion-decision.md), [final acceptance 45](../../SB-ORG-LEARNING-1.1/mission-control/45-final-postmerge-verification-and-formal-acceptance.md) | Narrow corrections, independently verified failure paths and mission-scoped learning; final acceptance retains limitations | **Compatible as evidence**, not organization-wide governance. No historical report or promotion edited |

## 4. What can operate without governance change

Under a valid mission assignment, the named verifier can use a builder packet; inspect completed authoritative CI for deterministic commands; perform static scope/dependency/workflow checks; select independent adversarial probes; preserve evidence provenance and platform limitations; use bounded statuses; carry forward unaffected evidence after an impact assessment; and stop at Mission Control review. A narrow correction can receive narrow independent re-verification while retaining Source 18's correction/runtime sequence.

Documentation-only publication need not reopen substantive assurance if the exact delta preserves its assumptions. Required CI still runs. A mission-specific command to rerun a check remains controlling until Mission Control revises that command within its authority. The draft is not a retroactive waiver of such instructions.

Provider unavailability can already be reported, work can pause, and valid prior evidence can be preserved. Substitute actors may be considered only under sources that already allow that assignment. Source 18 presently does not.

These compatible techniques need no governing-source change; their inclusion here is not a declaration that this new protocol has been activated. Mission Control must still issue the relevant operating instruction.

## 5. Decisions requiring approval

1. **Recommended:** approve a generic Independent Verification Actor for Source 18 Stage 19, with explicit separation and capability checks. Retain the mandatory gate, all human/runtime stages, Claude Code's Evidence Package/formal report ownership and Mission Control acceptance.
2. **Alternative minimal path:** retain Claude Code as Stage 19 owner; activate compatible methods only. Codex budget labels then govern supplemental Codex involvement, not Stage 19 ownership.
3. **Not proposed:** waiving Stage 19 for low-risk Product Missions. That would require separate changes to Source 18's mandatory gates and completion definition and a stronger decision than this efficiency proposal.
4. Approve subordinate template alignment to eliminate misleading builder-versus-independent completion wording. No workflow YAML, branch protection, credentials, Product Truth or implementation change is needed.
5. Select the durable operational protocol destination and approved version in the activation decision. Recommended destination is `communication/Independent_Verification_Efficiency_Protocol.md`; it does not exist and is not an active source in this phase.

## 6. Amendment instructions

The exact excerpts and replacement text below are proposals for a separately authorized amendment mission. Each current excerpt was matched against the inspected baseline. Replace only the cited occurrence(s), preserve surrounding content and historical source changelogs, then append the actual approval/version/activation record after it exists. Do not pre-fill approval dates or claim acceptance from this package.

Package A concerns actor flexibility. Package B clarifies existing source precedence and reporting boundaries. Under the alternative retaining Claude Code, omit Package A and keep Claude Code wherever Package B says the Source 18-designated verifier. Package C is optional protocol-method clarification; compatible methods may instead remain in the operational protocol with mission-specific authorization.

### A1 — Source 18, Section 4.3 Codex role

Current exact paragraph:

```text
Codex shall not invent Product Truth, author canonical Sections 20–21, create an EIS before Blueprint lock, implement code without a separate engineering authorization, or accept its own work.
```

Proposed replacement:

```text
Codex shall not invent Product Truth, author canonical Sections 20–21, create an EIS before Blueprint lock, implement code without a separate engineering authorization, or accept its own work. Codex may perform Stage 19 only when Mission Control appoints it under Section 4.9; its other stage responsibilities remain unchanged.
```

### A2 — Source 18, Section 4.4 Claude Code role

Current exact paragraph:

```text
Claude Code owns Builder Review, Engineering Review, Product Blueprint Sections 20–21, the post-lock EIS, the initial implementation package, independent post-build verification, the Evidence Package, the formal Completion Report, repository verification, stage reports, and Founder Briefs assigned to its stages.
```

Proposed replacement:

```text
Claude Code owns Builder Review, Engineering Review, Product Blueprint Sections 20–21, the post-lock EIS, the initial implementation package, the Evidence Package, the formal Completion Report, repository verification, stage reports, and Founder Briefs assigned to its stages. Claude Code may own independent post-build verification only when appointed under Section 4.9 and independent of the implementation and corrections being verified.
```

### A3 — Source 18, new Section 4.9

Current exact insertion anchor:

```text
## 5. Lifecycle Artifact Roots
```

Proposed replacement including retained anchor:

```text
### 4.9 Independent Verification Actor

Mission Control shall appoint a capable Independent Verification Actor for Stage 19 and record the actor, scope, environment, affected artifacts, prior contributions and independence assessment in the mission record. Codex is preferred for the highest-risk cases where eligible and available; Claude Code or another approved actor may be appointed when the same independence and capability conditions are satisfied.

The actor shall not independently verify implementation or corrections it authored, approve its own report, accept the mission or merge its own work. A new session, model or role label alone does not establish independence. A same-provider appointment requires a distinct actor and a documented Mission Control assessment of contribution separation and correlated-assumption risk.

When the appointed actor is unavailable, Mission Control may appoint an eligible replacement under these conditions, recording authority, capability, preserved evidence and remaining obligations before resumption. If none is available, the gate remains pending. No builder self-verification or silent substitution is permitted.

This appointment changes only independent-verification ownership. Discovery, engineering/package ownership, human runtime verification, Evidence Package and formal Completion Report ownership, mandatory stage order, Mission Control acceptance and Founder authority remain unchanged.

## 5. Lifecycle Artifact Roots
```

### A4 — Source 18, Stage 18 handover

Current exact line:

```text
- **Handover:** Complete verified input pack goes to Claude Code.
```

Proposed replacement:

```text
- **Handover:** Complete verified input pack goes to the Mission Control-appointed Independent Verification Actor.
```

### A5 — Source 18, complete Stage 19 block

Current exact block:

```text
### Stage 19 — Claude Code Independent Verification

- **Owner:** Claude Code
- **Inputs:** Locked Blueprint, locked EIS, package, Builder report, Founder findings, repository, tests, and accessible deployment state.
- **Output:** Independent verification report classifying every item `PASS`, `FAIL`, `FOLLOW-UP`, or `NOT APPLICABLE`.
- **Approval:** Mission Control reviews; Claude Code cannot approve itself.
- **Handover:** Material failures go to correction. Results with no material blocking failure go to Mission Control for authorization of the Evidence Package and formal Completion Report.
```

Proposed replacement:

```text
### Stage 19 — Independent Verification

- **Owner:** Independent Verification Actor appointed by Mission Control under Section 4.9.
- **Inputs:** Locked Blueprint, locked EIS, package, Builder report and Verification Packet, Founder findings, Mission Control runtime review, repository, tests, and accessible deployment state.
- **Output:** Independent verification report classifying every item `PASS`, `FAIL`, `FOLLOW-UP`, or `NOT APPLICABLE`, with evidence provenance, methods and limitations.
- **Approval:** Mission Control reviews; the verifier cannot approve itself or accept the mission.
- **Handover:** Material failures go to correction. Results with no material blocking failure go to Mission Control for authorization of the Evidence Package and formal Completion Report.

Every Product Mission retains this gate. Risk classification determines verification method and effort, not whether Stage 19 exists. The verifier shall independently exercise material risk boundaries and may inspect authoritative automated evidence or perform static inspection where those methods sufficiently support the obligation. Missing mandatory evidence keeps verification incomplete.
```

### A6 — Source 18, Stage 22 Inputs

Current exact line:

```text
- **Inputs:** Builder Completion Report, Founder runtime evidence, Mission Control runtime review, Claude Code independent-verification results, and all available verified evidence.
```

Proposed replacement:

```text
- **Inputs:** Builder Completion Report, Founder runtime evidence, Mission Control runtime review, the appointed actor's independent-verification results, and all available verified evidence.
```

### A7 — Source 18, Section 14 completion definition

Current exact paragraph:

```text
Formal completion requires an approved Product Blueprint, locked EIS, approved implementation package, authorized implementation, Builder Completion Report, Founder runtime verification, Mission Control runtime review, Claude Code independent verification, Evidence Package, formal Completion Report, Mission Control acceptance, repository synchronization, and documentation closure.
```

Proposed replacement:

```text
Formal completion requires an approved Product Blueprint, locked EIS, approved implementation package, authorized implementation, Builder Completion Report, Founder runtime verification, Mission Control runtime review, independent verification by the Mission Control-appointed actor, Evidence Package, formal Completion Report, Mission Control acceptance, repository synchronization, and documentation closure.
```

### A8 — Source 18, Appendix A independent verification row

Current exact row:

```text
| Independent verification | Reviews | Not verifier | Owns | Cannot verify itself | Supplies findings | Supplies evidence | Verification report | Mission Control |
```

Proposed replacement:

```text
| Independent verification | Appoints and reviews | Owns only if appointed and independent | Owns only if appointed and independent | Cannot verify itself | Supplies findings; may own only if appointed and independent | Supplies evidence | Verification report | Mission Control |
```

### A9 — Source 18, Appendix B report creator

Current exact row:

```text
| Independent verification report | Claude Code | After runtime review | Mission Control reviews |
```

Proposed replacement:

```text
| Independent verification report | Mission Control-appointed Independent Verification Actor | After runtime review | Mission Control reviews |
```

### A10 — Product Feature Elaboration template, formal report prerequisite

File: `docs/phase-1-mission-blueprint/templates/SB-P-Product-Feature-Elaboration-Workflow-Template.md`, Section 17, Formal Completion Report, prerequisite 5.

Current exact line:

```text
5. Claude Code independent verification.
```

Proposed replacement:

```text
5. Independent verification by the Mission Control-appointed Independent Verification Actor under Source 18.
```

### A11 — Product Feature Elaboration template, lifecycle diagram

Same file, Section 17, Approved Implementation Lifecycle; replace only the standalone verification node, retaining its arrows and surrounding nodes.

Current exact line:

```text
Claude Code independent verification
```

Proposed replacement:

```text
Independent verification by the Mission Control-appointed actor under Source 18
```

### B1 — Implementation and Evidence template, Section 1 precedence

All Package B excerpts target `docs/implementation/templates/SB-P-Implementation-and-Evidence-Workflow-Template.md`.

Current exact paragraph:

```text
The workflow, authority boundaries, authorship responsibilities, evidence provenance requirements, review sequence, correction gates, and acceptance rules remain unchanged.
```

Proposed replacement:

```text
The workflow, authority boundaries, authorship responsibilities, evidence provenance requirements, review sequence, correction gates, and acceptance rules remain unchanged. This template is subordinate to active Source 18. Its Phase labels organize instructions and do not create an alternative lifecycle sequence. The mandatory order is Builder Completion Report, Founder or authorized human runtime verification, Mission Control runtime review, Stage 19 independent verification by the actor designated under Source 18, then the Evidence Package and formal Completion Report, Mission Control acceptance and documentation closure. Builder checklist execution is initial evidence, not independent verification. A Verification Packet links existing evidence and does not constitute the formal Evidence Package. No template label or builder declaration may waive these gates.
```

### B2 — Implementation template, Section 3 builder responsibility

Current exact bullet:

```text
- update the Completion Report with factual implementation results;
```

Proposed replacement:

```text
- create or update the Builder Completion Report with factual implementation results and a linked Verification Packet; do not author the formal Completion Report or claim independent verification;
```

### B3 — Implementation template, Section 9 report creation

Current exact opening sentence in Section 9 (retain the following path block):

```text
Claude Code shall create:
```

Proposed replacement:

```text
This section defines the required report structure and does not authorize an early mission-specific Completion Report. Only after Source 18 independent verification and Mission Control authorization, Claude Code shall create the formal Completion Report at:
```

### B4 — Implementation template, Section 11 evidence timing

Current exact bullet:

```text
- create the evidence directory structure.
```

Proposed replacement:

```text
- capture and reference initial evidence with provenance in the authorized mission record; Claude Code assembles the formal Evidence Package only after independent verification and Mission Control authorization under Source 18;
```

### B5 — Implementation template, Section 15 report authorship

Current exact paragraph:

```text
The builder shall update the Completion Report with factual results only.
```

Proposed replacement:

```text
The builder shall update its Builder Completion Report with factual results only. After Source 18 independent verification and Mission Control authorization, Claude Code shall create or update the formal Completion Report from verified evidence, distinguishing builder statements, independent findings, human runtime observations and Mission Control decisions.
```

### B6 — Implementation template, Section 19 runtime prerequisite

Current exact paragraph:

```text
Founder runtime observation is required where merchant-facing behaviour cannot be fully established by static repository, database, or automated-test evidence.
```

Proposed replacement:

```text
Founder runtime verification, or authorized human runtime verification confirmed by the Founder, and Mission Control runtime review are mandatory before independent verification under Source 18. Mission Control defines the affected runtime scope and reviews its evidence. Static repository, database and automated-test evidence do not replace this gate.
```

### B7 — Implementation template, Section 17 corrective sequence

Current exact block:

```text
After correction:

- rerun the relevant tests;
- rerun affected checklist items;
- record the new commit or migration;
- update evidence and Completion Report;
- return to Mission Control review.
```

Proposed replacement:

```text
After correction:

- rerun relevant focused tests and affected checklist items; provide full applicable deterministic CI;
- record the correction checkpoint and changed scope;
- update the Builder Completion Report and Verification Packet, preserving prior evidence;
- perform Founder retest and Mission Control runtime review under Source 18 Stage 20;
- obtain Mission Control correction review and finding-scoped independent re-verification, escalating where the correction invalidates a broader assurance boundary;
- after independent verification and Mission Control authorization, update the formal Evidence Package and Completion Report;
- return to Mission Control for acceptance disposition.
```

### B8 — Implementation template, Section 13 protected-main wording

This is a pre-existing subordinate mismatch; the active communication/Git rules already control.

Current exact bullet:

```text
- branch or direct-main delivery mode;
```

Proposed replacement:

```text
- authorized branch and pull-request reference; AI-authored changes use the protected-main pull-request workflow;
```

### C1 — Optional Source 18, Stage 20 method clarification

Current exact line:

```text
- **Output:** Corrective mission, fix, updated Builder report, Founder retest, runtime review, and reverification.
```

Proposed replacement:

```text
- **Output:** Corrective mission, fix, updated Builder report, Founder retest, runtime review, and reverification. Reverification is finding-scoped by default, with an impact assessment and cited carry-forward of unaffected evidence. Broaden when shared infrastructure or another contract changes, evidence shows an incomplete assurance boundary, or Mission Control explicitly expands scope. Full applicable deterministic CI remains required. Narrowing independent execution does not remove Founder retest, runtime review or any mandatory gate.
```

### C2 — Optional Source 18, post-Stage 22 publication clarification

Current exact paragraph:

```text
The Evidence Package and formal Completion Report may be prepared in parallel after independent verification. Neither may be created before independent verification.
```

Proposed replacement:

```text
The Evidence Package and formal Completion Report may be prepared in parallel after independent verification. Neither may be created before independent verification. Subsequent documentation-only or reporting-only changes do not reopen substantive independent verification solely because the commit changed. Record the verified checkpoint, final head and exact delta; confirm that implementation, dependencies, configuration, workflows, locked criteria and authority assumptions remain unchanged. Preserve substantive evidence at its original checkpoint, verify new reporting claims and applicable publication checks, and return any substantive change to the affected gate. This rule does not waive independent verification or Mission Control acceptance.
```

## 7. Amendment completeness and retained boundaries

Package A changes the named Stage 19 verifier references found in Source 18 and the Product Feature Elaboration template. Claude Code retains separate engineering, Evidence Package and formal Completion Report ownership. Mandatory gates, runtime ownership, acceptance status model and protected-main rules remain. Package B aligns subordinate wording without granting execution or publication authority. Package C is optional if methods remain in the operational protocol.

Do not globally replace every reference to Claude Code, Codex or verification. Approval-pending EOS documents, Source 10 CTO calibration roles, workflow YAML and historical mission records are not proposed targets. Re-scan the then-current sources for new role references at amendment time; route actual drift through Mission Control.

## 8. Unresolved decisions and handoff

Mission Control and Founder must choose the actor model, approve amendment scope/version, decide whether Package C belongs in Source 18, select the operational protocol destination, and issue authority for any approved governing-source amendments. Publication of this four-file draft package has now been separately authorized; that is not authority to apply its proposals. The minimal alternative activates compatible techniques while retaining the Claude Code gate. Neither alternative starts SB-P-1.12 automatically.

Review this report with the protocol draft and activation plan. No source amendment, provider-neutral gate, acceptance or publication success is claimed.
