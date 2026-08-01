# Smart Business SB-P Mission Lifecycle and Delivery Framework

- **Source:** 18
- **Version:** Draft 1.0
- **Status:** DRAFT — MISSION CONTROL REVIEW REQUIRED
- **Authority:** PROPOSED — FOUNDER DECISION REQUIRED BEFORE ACTIVATION
- **Repository publication:** COMPLETE — commit `bd9b362`; publication does not confer active authority
- **Scope:** Every Smart Business Product Mission (`SB-P-*`)
- **Created under:** `SB-GOV-LIFECYCLE-1.0`

> **Authority notice:** This draft is stored under `merge/active/` at the path selected by Mission Control, but explicit Founder approval is not recorded. It must not be treated as active governance unless the Founder approves activation and Mission Control records the resulting disposition.

---

## 1. Purpose

This source defines the permanent governance framework for discovery, definition, engineering, implementation, verification, acceptance, documentation closure, and repository handover of every `SB-P-*` mission.

A Product Mission is not a single AI task. It is a governed chain of responsibility in which each participant receives approved inputs, performs only its authorized role, records its outputs in the repository, and hands the mission to the next authorized participant.

Chat history is not the permanent mission record. All material decisions, instructions, approvals, findings, handovers, reports, and unresolved issues must be recorded in the repository.

## 2. Authority and Interpretation

The canonical authority order established by Source 17 applies:

1. Founder.
2. Lighthouse Constitution.
3. Smart Business constitutional authority for Phase 1, formed jointly by Source 01 and Source 11.
4. Approved Governance Sources.
5. Mission Control.
6. Authorized specialist and engineering execution.
7. Repository, platform, and mission-specific instructions.

Within that order, this Source 18 governs the lifecycle of every `SB-P-*` mission. The approved Product Feature Elaboration Workflow Template and Implementation and Evidence Workflow Template are subordinate operational instruments. Mission-specific instructions and AI interpretation remain subordinate to this framework. A template conflict must be corrected through a separate authorized mission; it must not be resolved by silently weakening this framework.

Founder decisions remain final. Capability, tool access, technical convenience, deployment success, and AI confidence do not create authority.

## 3. Governing Principles

Every Product Mission shall:

- begin with an explicit Mission Control authorization;
- preserve confirmed Product Truth and Founder decision ownership;
- separate product definition, engineering specification, implementation, verification, and acceptance;
- prevent an actor from approving its own work;
- use repository artifacts as the durable record;
- move forward only after the preceding mandatory gate;
- identify the current owner and next authorized action;
- preserve business isolation, permissions, auditability, security, and merchant trust;
- stop and escalate when authority, scope, or evidence is unclear.

Only the current stage owner may modify the primary stage deliverable. Other participants may submit findings within their assigned domain but may not create competing instructions or rewrite the primary deliverable without Mission Control authorization.

## 4. Responsibility and Authority Model

### 4.1 Mission Control

Mission Control owns governance, sequencing, review, authorization, acceptance, and closure. It issues missions, defines source packs and permitted files, names the current owner, reviews outputs, obtains Founder decisions, controls Blueprint and EIS locks, authorizes implementation, reviews runtime findings, requests independent verification, issues corrective missions, accepts or rejects outcomes, and controls documentation closure.

Mission Control shall not invent Founder decisions, implement merely to bypass the assigned builder, treat self-reporting as independent evidence, or close a mission before all required gates.

### 4.2 Founder

The Founder owns unresolved and final product decisions, approves the locked product intent, performs or delegates required human runtime verification, supplies observations and evidence, and gives the final human authority required by Mission Control. The Founder does not need to perform technical verification personally and shall not be asked to resolve repository conflicts without guided review.

Where runtime verification is delegated, Mission Control shall name the authorized human verifier. The Founder remains responsible for confirming the submitted human runtime findings before Mission Control closes the runtime-review stage.

### 4.3 Codex

Codex owns Founder-led discovery, Product Truth extraction, the Founder Product Decision Record, Product Blueprint Metadata, Mission Snapshot, Sections 1–19, authorized governance maintenance, repository documentation, stage reports, and Founder Briefs.

Codex shall not invent Product Truth, author canonical Sections 20–21, create an EIS before Blueprint lock, implement code without a separate engineering authorization, or accept its own work.

### 4.4 Claude Code

Claude Code owns Builder Review, Engineering Review, Product Blueprint Sections 20–21, the post-lock EIS, the initial implementation package, independent post-build verification, the Evidence Package, the formal Completion Report, repository verification, stage reports, and Founder Briefs assigned to its stages.

Claude Code shall preserve approved Sections 1–19, apply architecture, security, RLS, integrity, audit, migration, testing, performance, and observability analysis, and classify verification items as `PASS`, `FAIL`, `FOLLOW-UP`, or `NOT APPLICABLE`.

Claude Code shall not redefine locked Product Truth, create an EIS before Blueprint lock, create an implementation package before EIS lock, authorize its own package, accept a Builder Completion Report as proof, create the formal Completion Report before independent verification, or mark formal acceptance.

### 4.5 Lovable

Lovable owns authorized product implementation and the Builder Completion Report at `docs/implementation/[MISSION-ID]/lovable-build-completion-report.md`. It shall inspect the current repository, implement only the locked prompt, preserve routes, permissions, authentication, business isolation, and product behaviour, avoid unauthorized redesign, and report files, build activity, migrations, deployment status, checks, limitations, deviations, and unresolved issues.

Lovable shall not define Product Truth, alter locked artifacts, expand scope, claim verification, create the formal Completion Report, or authorize acceptance.

### 4.6 Supabase Specialist AI

When requested, the Supabase specialist reviews schema, migrations, RLS, authentication, storage, Edge Functions, business isolation, concurrency, idempotency, integrity, auditability, and destructive-migration risk. It records findings in the mission repository record. It may not redefine scope, approve the full mission, override Mission Control, or implement outside authorization.

### 4.7 AI, WhatsApp, and Integration Specialist

When requested, this specialist reviews assistant-not-authority behaviour, interpretation limits, confirmation requirements, webhooks, retries, idempotency, media, voice, failure handling, privacy, permissions, and merchant decision ownership. It may not permit AI to commit merchant decisions without authorized confirmation, redefine the mission, or approve implementation independently.

### 4.8 Other Specialists

Research, Brand, Customer Success, Legal, Finance, Security, and other specialists review only their assigned operational domain. They may identify risks, recommend refinements, classify findings, and create repository reports. They may not redefine approved Product Truth, authorize implementation, approve the whole mission, bypass Mission Control, or create competing instructions. Mission Control decides when specialist review is required.

## 5. Lifecycle Artifact Roots

- Product Blueprint: `docs/phase-1-mission-blueprint/active/[MISSION-ID].md`
- Locked Product Blueprint: `docs/phase-1-mission-blueprint/completed/[MISSION-ID].md`
- EIS: `docs/phase-1-mission-blueprint/implementation/[MISSION-ID]-EIS.md`
- Implementation package: `docs/implementation/[MISSION-ID]/`
- Mission communication: `communication/missions/[MISSION-ID]/`

## 6. Part One — Product Blueprint

### Stage 1 — Mission Initiation

- **Owner:** Mission Control
- **Inputs:** Founder direction, approved sources, repository state.
- **Output:** Mission ID, scope, owner, source pack, permitted paths, initial communication record.
- **Approval:** Mission Control issues the mission.
- **Handover:** Repository record names Codex and the exact discovery inputs.

### Stage 2 — Product Truth Extraction

- **Owner:** Codex
- **Inputs:** Authorized mission and complete source pack.
- **Output:** Confirmed truth, derived constraints, unresolved questions.
- **Approval:** Mission Control confirms discovery may proceed.
- **Handover:** Codex records findings and unresolved questions for Founder discovery.

### Stage 3 — Founder Discovery

- **Owner:** Codex with Founder decision ownership.
- **Inputs:** Unresolved questions and confirmed source constraints.
- **Output:** Founder Product Decision Record containing every material decision.
- **Approval:** Founder confirms decisions; Mission Control records stage completion.
- **Handover:** Repository record authorizes Blueprint drafting.

### Stage 4 — Product Blueprint Sections 1–19

- **Owner:** Codex
- **Inputs:** Sources and Founder Product Decision Record.
- **Output:** Metadata, Mission Snapshot, and Sections 1–19.
- **Approval:** Mission Control review required.
- **Handover:** Codex submits the draft and source/decision traceability.

### Stage 5 — Mission Control Product Review

- **Owner:** Mission Control
- **Inputs:** Draft through Section 19 and Codex stage report.
- **Output:** Refinement request or Sections 1–19 approval.
- **Approval:** Mission Control; this is not complete Blueprint approval.
- **Handover:** Approved Sections 1–19 and exact Builder Review authorization go to Claude Code.

### Stage 6 — Builder Review

- **Owner:** Claude Code
- **Inputs:** Mission Control-approved Sections 1–19 and current repository.
- **Output:** Product-experience and build-feasibility findings without renumbering the Blueprint.
- **Approval:** Mission Control.
- **Handover:** Approved Builder Review and open engineering matters authorize Engineering Review.

### Stage 7 — Engineering Review

- **Owner:** Claude Code
- **Inputs:** Approved Sections 1–19, approved Builder Review, repository, and applicable specialist findings.
- **Output:** `20. Engineering Review` and `21. Engineering Questions, Risks & Recommendations`.
- **Approval:** Mission Control reviews the complete Blueprint; Founder resolves product decisions.
- **Handover:** Complete Blueprint and unresolved decisions go to final approval.

### Stage 8 — Founder Approval and Blueprint Lock

- **Owner:** Mission Control with Founder approval.
- **Inputs:** Complete Blueprint Sections 1–21 and review records.
- **Output:** Founder approval record, `APPROVED — LOCKED` status, and authorized move from `active/` to `completed/`.
- **Approval:** Founder approves product decisions; Mission Control applies the lock.
- **Handover:** Locked Blueprint and EIS authorization go to Claude Code.

## 7. Part One Point Five — Engineering Implementation Specification

### Stage 9 — EIS Creation

- **Owner:** Claude Code
- **Inputs:** Locked Product Blueprint and current repository architecture.
- **Output:** `docs/phase-1-mission-blueprint/implementation/[MISSION-ID]-EIS.md`.
- **Approval:** Mission Control review required.
- **Handover:** Draft EIS and traceability report go to reviewers.

### Stage 10 — EIS Review

- **Owner:** Mission Control; specialists review when applicable.
- **Inputs:** Draft EIS, locked Blueprint, architecture and specialist evidence.
- **Output:** Findings, refinements, and review disposition.
- **Approval:** Mission Control, with Founder decisions where Product Truth is affected.
- **Handover:** Accepted EIS goes to the lock stage; rejected EIS returns to Claude Code.

### Stage 11 — EIS Lock

- **Owner:** Mission Control
- **Inputs:** Reviewed EIS with resolved blocking findings.
- **Output:** `APPROVED — LOCKED` EIS and implementation-package authorization.
- **Approval:** Mission Control.
- **Handover:** Locked Blueprint and locked EIS go to Claude Code. No package may exist before both locks.

## 8. Part Two — Implementation and Verification

### Stage 12 — Initial Implementation Package

- **Owner:** Claude Code
- **Inputs:** Locked Blueprint and locked EIS.
- **Output:** `engineering-contract.md`, `lovable-build-prompt.md`, and `verification-checklist.md` only, status `DRAFT — MISSION CONTROL REVIEW REQUIRED`.
- **Approval:** Mission Control review required.
- **Handover:** Three-document package and traceability report go to Mission Control.

### Stage 13 — Implementation Package Review

- **Owner:** Mission Control
- **Inputs:** The three draft package documents.
- **Output:** Refinement request or `APPROVED — LOCKED` package.
- **Approval:** Mission Control.
- **Handover:** Locked package and explicit implementation-authorization decision go forward.

Mission Control shall record implementation authorization in:

`communication/missions/[MISSION-ID]/mission-control/implementation-authorization.md`

The record shall identify:

- authorized package version;
- locked Blueprint reference;
- locked EIS reference;
- authorized branch;
- authorized builder;
- authorized implementation scope;
- prohibited changes;
- authorization date;
- Mission Control authority reference.

Implementation shall not begin until this record exists.

### Stage 14 — Founder Lovable Brief

- **Owner:** Claude Code
- **Inputs:** Approved package and actual Git state.
- **Output:** Founder Brief containing exact Lovable instruction, prompt path, branch/pull requirements, expected output, Builder Completion Report path, and only necessary PowerShell commands.
- **Approval:** Mission Control authorizes use.
- **Handover:** Founder receives the exact approved instruction and files.

### Stage 15 — Lovable Implementation

- **Owner:** Lovable
- **Inputs:** Approved build prompt, locked artifacts, current authorized branch.
- **Output:** Scope-limited implementation and implementation facts.
- **Approval:** Implementation must have prior Mission Control authorization; completion remains unverified.
- **Handover:** Changed-file and build information goes to the Builder Completion Report.

### Stage 16 — Lovable Builder Completion Report

- **Owner:** Lovable
- **Inputs:** Actual implementation and checks performed.
- **Output:** `lovable-build-completion-report.md`, status `IMPLEMENTATION REPORTED — VERIFICATION PENDING`.
- **Approval:** Mission Control checks report sufficiency but does not treat it as verification.
- **Handover:** Report, commits, limitations, and deviations go to Founder runtime verification.

### Stage 17 — Founder Runtime Verification

- **Owner:** Founder
- **Inputs:** Approved Verification Checklist and accessible runtime.
- **Output:** Tests performed, pass/fail observations, screenshots or evidence references, unexpected behaviour, device, and environment.
- **Approval:** Mission Control determines whether runtime evidence is sufficient.
- **Handover:** Findings go to Mission Control runtime review.

### Stage 18 — Mission Control Runtime Review

- **Owner:** Mission Control
- **Inputs:** Builder Completion Report, Founder findings, communication record, unresolved issues.
- **Output:** Runtime-review disposition and independent-verification authorization or correction request.
- **Approval:** Mission Control.
- **Handover:** Complete verified input pack goes to Claude Code.

### Stage 19 — Claude Code Independent Verification

- **Owner:** Claude Code
- **Inputs:** Locked Blueprint, locked EIS, package, Builder report, Founder findings, repository, tests, and accessible deployment state.
- **Output:** Independent verification report classifying every item `PASS`, `FAIL`, `FOLLOW-UP`, or `NOT APPLICABLE`.
- **Approval:** Mission Control reviews; Claude Code cannot approve itself.
- **Handover:** Material failures go to correction. Results with no material blocking failure go to Mission Control for authorization of the Evidence Package and formal Completion Report.

### Stage 20 — Corrective Mission

- **Owner:** Mission Control assigns the appropriate builder.
- **Inputs:** Material `FAIL` findings.
- **Output:** Corrective mission, fix, updated Builder report, Founder retest, runtime review, and reverification.
- **Approval:** Mission Control controls every repeat cycle.
- **Handover:** The cycle returns to the applicable build and verification stages until no material failure remains.

Corrective cycles shall preserve prior reports and evidence. Updated artifacts shall use either versioned filenames or an internal version history. No prior Builder Completion Report, verification result, or evidence record may be silently overwritten.

### Stage 21 — Evidence Package

- **Owner:** Claude Code
- **Inputs:** Mission Control-reviewed independent-verification results with no unresolved material blocking failure.
- **Output:** `docs/implementation/[MISSION-ID]/evidence/` with traceable evidence.
- **Approval:** Mission Control reviews provenance and completeness.
- **Handover:** Evidence package goes to formal reporting.

### Stage 22 — Formal Completion Report

- **Owner:** Claude Code
- **Inputs:** Builder Completion Report, Founder runtime evidence, Mission Control runtime review, Claude Code independent-verification results, and all available verified evidence.
- **Output:** `completion-report.md`, status `VERIFICATION COMPLETE — MISSION CONTROL ACCEPTANCE PENDING`.
- **Approval:** Mission Control; report creation is not acceptance.
- **Handover:** Formal report and evidence go to acceptance.

The Evidence Package and formal Completion Report may be prepared in parallel after independent verification. Neither may be created before independent verification.

### Stage 23 — Mission Control Acceptance

- **Owner:** Mission Control with Founder authority where required.
- **Inputs:** Formal Completion Report and complete evidence chain.
- **Output:** `ACCEPTED`, `ACCEPTED WITH FOLLOW-UP`, `CORRECTION REQUIRED`, or `REJECTED`.
- **Approval:** Mission Control records the mission disposition. Founder approval is additionally required where acceptance includes a new product decision, a scope deviation, a material unresolved follow-up, or a change to previously approved Product Truth.
- **Handover:** Accepted missions proceed to documentation closure; others receive explicit next actions.

### Stage 24 — Documentation Closure

- **Owner:** Mission Control assigns Claude Code or Codex.
- **Inputs:** Acceptance disposition, final commits, deployment reference, and follow-up list.
- **Output:** `COMPLETED — FORMALLY ACCEPTED` closure record with approval date, final commit, deployment reference, follow-up missions, non-blocking issues, and repository status.
- **Approval:** Mission Control.
- **Handover:** Repository synchronization is verified and the mission is closed or transferred to named follow-up missions.

## 9. Mandatory Non-Bypassable Gates

The following order is mandatory:

1. Sections 1–19 approval before Builder Review.
2. Builder Review approval before Engineering Review.
3. Complete Product Blueprint lock before EIS creation.
4. EIS lock before the Implementation Package.
5. Implementation Package approval before implementation authorization.
6. Builder Completion Report before Founder runtime-review closure.
7. Founder runtime findings and Mission Control review before independent verification.
8. Independent verification before the Evidence Package and formal Completion Report.
9. Mission Control acceptance before formal documentation closure.

No actor may waive a gate governing its own work.

## 10. Repository Communication Governance

Each Product Mission shall use:

```text
communication/missions/[MISSION-ID]/
├── README.md
├── mission-control/
├── codex/
├── claude-code/
├── lovable/
├── specialists/
├── founder/
├── handover-log.md
└── decision-log.md
```

Empty folders need not be committed. A `.gitkeep` may be used only when repository policy permits it.

The mission `README.md` shall state identity, current stage and owner, last completed action, next authorized action, blockers, authoritative files, branch, latest relevant commit, and Mission Control status.

Before beginning an authorized stage, every AI participant shall read:

- the mission `README.md`;
- the `handover-log.md`;
- the `decision-log.md`;
- the latest stage report from the preceding actor;
- all authoritative artifacts named in the handover.

An AI shall not rely on chat history as a substitute for this repository intake.

Material AI communication files shall use:

`[STAGE-NUMBER]-[STAGE-SLUG]-[DOCUMENT-TYPE].md`

Examples:

- `04-blueprint-drafting-stage-report.md`
- `06-builder-review-handover.md`
- `19-independent-verification-report.md`

The mission README and handover log shall link to every material communication file.

The `decision-log.md` shall preserve all material scope, behaviour, architecture, permission, security, sequence, acceptance, and follow-up decisions. AI stage reports belong under the actor's folder. A Lovable handover may link to its Builder Completion Report instead of duplicating it.

Communication records preserve continuity but do not replace the Blueprint, EIS, Engineering Contract, Build Prompt, Verification Checklist, Builder Completion Report, Evidence Package, Completion Report, or Mission Control acceptance. Higher-authority approved artifacts prevail over communication records.

## 11. Founder Brief Governance

Every stage requiring Founder action shall create `communication/missions/[MISSION-ID]/founder/[STAGE]-founder-brief.md` with:

1. Mission.
2. Current Status.
3. What Has Been Completed.
4. What You Need to Do Now.
5. Where to Perform the Action.
6. Exact Text to Copy.
7. Files Involved.
8. PowerShell Commands.
9. What Success Looks Like.
10. What to Send Back to Mission Control.
11. Do Not Do.

Commands must reflect actual repository state and include only necessary operations. Branch must be verified before commit or push. Use exact-file staging; do not use `git add .` unless every working-tree change is expressly authorized. Use `git pull --ff-only origin main` when a fast-forward pull is required. If it cannot fast-forward, stop and return the result to Mission Control.

## 12. Handover Standard

Before a handover, the current owner shall complete and verify its deliverable, record a stage report, update the handover log and mission README, provide a Founder Brief when required, commit and push or supply exact Founder commands, name the next authorized AI and exact input files, and state what is not yet authorized. Handover is incomplete until repository synchronization is verified.

Each handover shall record date, mission, sender, recipient, completed stage, work, files, commit SHA, verification, open issues, next authorized action, action not yet authorized, and Mission Control approval reference.

## 13. Status Model

| Status | Authorized assigning authority |
|---|---|
| `NOT STARTED` | Mission Control |
| `ACTIVE` | Mission Control |
| `DRAFT — REVIEW REQUIRED` | Authorized artifact creator |
| `RETURNED FOR REFINEMENT` | Mission Control |
| `APPROVED` | Mission Control; Founder where product decisions require it |
| `APPROVED — LOCKED` | Mission Control after required approval |
| `IMPLEMENTATION AUTHORIZED` | Mission Control |
| `IMPLEMENTATION IN PROGRESS` | Authorized builder, after authorization |
| `IMPLEMENTATION REPORTED — VERIFICATION PENDING` | Authorized builder |
| `RUNTIME REVIEW PENDING` | Mission Control |
| `INDEPENDENT VERIFICATION IN PROGRESS` | Mission Control authorizes; verifier records start |
| `CORRECTION REQUIRED` | Mission Control |
| `VERIFICATION COMPLETE — ACCEPTANCE PENDING` | Independent verifier records completion; Mission Control confirms acceptance-stage entry |
| `ACCEPTED` | Mission Control with required Founder authority |
| `ACCEPTED WITH FOLLOW-UP` | Mission Control with required Founder authority |
| `COMPLETED — FORMALLY ACCEPTED` | Mission Control after documentation closure |
| `SUPERSEDED` | Mission Control under Founder-approved governance |
| `ARCHIVED` | Mission Control under authorized archive action |

## 14. Formal Completion Definition

A mission is not complete merely because code exists, Lovable reports completion, deployment succeeds, one workflow works, tests pass, or Claude Code creates a report.

Formal completion requires an approved Product Blueprint, locked EIS, approved implementation package, authorized implementation, Builder Completion Report, Founder runtime verification, Mission Control runtime review, Claude Code independent verification, Evidence Package, formal Completion Report, Mission Control acceptance, repository synchronization, and documentation closure.

## Appendix A — AI Responsibility Matrix

| Stage group | Mission Control | Codex | Claude Code | Lovable | Specialist AI | Founder | Required output | Approval gate |
|---|---|---|---|---|---|---|---|---|
| Initiation | Owns | Receives | Informed | Not authorized | As named | Directs | Mission record | Mission issued |
| Discovery | Reviews | Owns | Not authorized | Not authorized | Advises if asked | Decides | Decision record | Founder/Mission Control |
| Sections 1–19 | Reviews | Owns | Not authorized | Not authorized | Advises if asked | Clarifies | Blueprint draft | Mission Control |
| Builder Review | Approves | Supports | Owns | Not authorized | Advises | Informed | Review findings | Mission Control |
| Engineering Review | Reviews | Preserves 1–19 | Owns 20–21 | Not authorized | Reviews domain | Decides product matters | Complete Blueprint | Founder/Mission Control |
| EIS | Locks | Not authorized | Owns | Not authorized | Reviews domain | Decides product changes | Locked EIS | Mission Control |
| Package | Approves | Not authorized | Owns | Not authorized | Advises | Receives brief | Three locked documents | Mission Control |
| Build | Governs | Not authorized | Supports only if assigned | Owns | Reviews if asked | Initiates approved prompt | Implementation/report | Mission Control review |
| Runtime | Reviews | Not authorized | Awaits authorization | Supplies report | Advises | Owns observations | Runtime findings | Mission Control |
| Independent verification | Reviews | Not verifier | Owns | Cannot verify itself | Supplies findings | Supplies evidence | Verification report | Mission Control |
| Evidence/report | Reviews | Supports if assigned | Owns | Not authorized | Supplies evidence | Informed | Evidence and report | Mission Control |
| Acceptance/closure | Owns | Updates if assigned | Updates if assigned | Not authorized | Not authorized | Final authority | Disposition/closure | Mission Control |

## Appendix B — Required Repository Artifacts

| Artifact | Creator | Timing | Approval authority |
|---|---|---|---|
| Mission communication README | Current owner | Initiation and every handover | Mission Control |
| Founder Product Decision Record | Codex | Discovery | Founder/Mission Control |
| Product Blueprint Sections 1–19 | Codex | Before Builder Review | Mission Control |
| Builder Review | Claude Code | After Sections 1–19 approval | Mission Control |
| Product Blueprint Sections 20–21 | Claude Code | After Builder Review approval | Founder/Mission Control |
| EIS | Claude Code | After Blueprint lock | Mission Control |
| Engineering Contract | Claude Code | After EIS lock | Mission Control |
| Lovable Build Prompt | Claude Code | After EIS lock | Mission Control |
| Verification Checklist | Claude Code | After EIS lock | Mission Control |
| Implementation Authorization | Mission Control | After implementation-package approval and before implementation | Mission Control |
| Builder Completion Report | Lovable | After implementation | Mission Control reviews |
| Founder runtime findings | Founder | After Builder report | Mission Control reviews |
| Independent verification report | Claude Code | After runtime review | Mission Control reviews |
| Evidence Package | Claude Code | After verification | Mission Control |
| Formal Completion Report | Claude Code | After independent verification | Mission Control |
| Acceptance and closure | Mission Control/assigned recorder | Final stages | Mission Control |

## Appendix C — Communication Folder Standard

Use the tree in Section 10. Actor reports shall be dated, mission-specific, linked from the mission README, and referenced by the handover log. Do not duplicate authoritative artifacts inside communication folders.

## Appendix D — Founder Brief Template

```markdown
# Founder Brief

## Mission
## Current Status
## What Has Been Completed
## What You Need to Do Now
## Where to Perform the Action
## Exact Text to Copy
## Files Involved
## PowerShell Commands
## What Success Looks Like
## What to Send Back to Mission Control
## Do Not Do
```

## Appendix E — PowerShell Command Templates

Branch and pull verification:

```powershell
git branch --show-current
git switch main
git pull --ff-only origin main
git status
```

Exact-file commit and push:

```powershell
git branch --show-current
git status
git diff --check
git add "exact/path/to/file.md"
git commit -m "Approved commit message"
git push origin main
git status
git log -1 --oneline
```

Multiple authorized files:

```powershell
git add `
  "exact/path/file-one.md" `
  "exact/path/file-two.md"
```

If the branch is unexpected, a pull cannot fast-forward, validation fails, or unrelated files appear, stop and report to Mission Control.

## Appendix F — Mission Handover Template

```markdown
## Handover [NUMBER]

- Date:
- Mission:
- From:
- To:
- Stage completed:
- Work completed:
- Files created or modified:
- Commit SHA:
- Verification performed:
- Open issues:
- Next authorized action:
- Action not yet authorized:
- Mission Control approval reference:
```

## Appendix G — Lifecycle Status Matrix

The status table in Section 13 is canonical for `SB-P-*` lifecycle records. An artifact creator may record draft or factual work-in-progress states, but only Mission Control may authorize transition across governance gates. Founder approval is mandatory wherever final product truth or Founder authority is implicated.

## Source Change Log

| Version | Date | Change | Authority | Status |
|---|---|---|---|---|
| Draft 1.0 | 2026-07-31 | Initial SB-P Mission Lifecycle and Delivery Framework draft | Founder through Mission Control | DRAFT |

Future refinements must append rather than replace earlier history.

---

**Draft control:** This source is not approved, locked, or active. Repository publication is complete at commit `bd9b362`, but explicit Founder approval remains required before activation. Governing language in this draft is proposed and has no active authority until that decision is recorded.
