# AI Communication and Handover Protocol

- **Mission:** SB-GOV-COMMS-1.2
- **Version:** Draft 1.4
- **Status:** DRAFT — MISSION CONTROL REVIEW REQUIRED
- **Authority:** Founder through Mission Control
- **Scope:** Repository communication and mission-scoped Git operations by authorized AI participants

## 1. Purpose

This protocol proposes GitHub as the durable communication layer between Smart Business AI participants while preserving Mission Control sequencing, Founder decision ownership, repository safety, and review before merge.

At activation, the proposal sentence above shall be replaced with: **This protocol establishes GitHub as the durable communication and handover layer between authorized Smart Business AI participants.**

This draft does not grant Git authority. Current approved repository instructions remain controlling until this protocol and the related `AGENTS.md` amendment are separately reviewed and activated.

## 2. Communication Rule

All material AI-to-AI mission communication shall occur through the repository communication folder.

Founder chat shall be reserved for:

- Founder decisions;
- Founder clarification;
- Founder approval;
- Founder runtime verification;
- exceptions requiring human action;
- concise Founder Briefs.

No material AI-to-AI decision, instruction, finding, report, authorization, or handover may remain only in chat history.

## 3. Limitation of GitHub Communication

GitHub can serve as the durable AI communication bus, but it cannot independently activate another AI. The next AI still requires activation by Mission Control, an agent runner, GitHub Action, MCP orchestration, or a future Team LIPS orchestration service.

A commit, push, pull request, label, review, or repository handover does not itself authorize the next stage.

## 4. Mission Intake

Before acting, an AI shall verify:

- an explicit Mission Control mission exists;
- the mission identifies the current stage owner;
- the authorized branch and remote are stated;
- permitted files and operations are stated;
- prohibited changes and stop conditions are stated;
- the mission communication folder exists or its creation is authorized.

Missing or ambiguous authorization requires a stop report.

## 5. Required Repository Intake

Before each stage, the assigned AI shall read:

1. `AGENTS.md` and applicable actor-specific instructions.
2. Relevant approved governance sources.
3. `communication/missions/[MISSION-ID]/README.md`.
4. `handover-log.md` and `decision-log.md`.
5. The latest report from the preceding actor.
6. Every authoritative artifact named in the handover.
7. Relevant workflow, quality-gate, and branch rules.

The AI shall confirm that it is the current stage owner. Chat history is not a substitute for repository intake.

## 6. Mission Communication Structure

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

Material actor files shall use:

`[STAGE-NUMBER]-[STAGE-SLUG]-[DOCUMENT-TYPE].md`

The mission README and handover log shall link to every material communication file.

## 7. Required Record Updates

Before handover, the current owner shall:

- write its actor-specific stage report;
- record material decisions in `decision-log.md`;
- append the handover to `handover-log.md`;
- update the mission README with stage, owner, blockers, latest commit, pull request, and next authorized action;
- identify exact authoritative inputs for the next actor;
- state what is not yet authorized;
- create a Founder Brief when Founder action is required.

Prior records shall not be silently overwritten. Corrections shall preserve history through append-only entries, versioning, or an explicit correction note.

## 8. Proposed Mission-Branch Model

After separate approval and activation of the related repository-instruction amendment, Codex or Claude Code may perform the following only when an active Founder- or Mission Control-authorized mission explicitly grants Git authority and all of these conditions are satisfied:

1. An active mission exists.
2. The mission explicitly authorizes Git operations.
3. The mission identifies the repository.
4. The mission identifies the authorized branch or branch pattern.
5. The mission defines authorized files or scope.
6. The AI has shell and Git access.
7. Authentication is available.
8. The working tree contains no unrelated changes.
9. Required validation succeeds.
10. No conflict or non-fast-forward condition exists.

Under those conditions, the AI may:

1. Fetch the approved remote.
2. Fast-forward the authorized local branch.
3. Create or switch to the authorized mission branch.
4. Modify only authorized files.
5. Run required validation.
6. Stage only exact authorized paths.
7. Commit verified mission work.
8. Push only the authorized mission branch.
9. Open or update a pull request targeting the authorized base branch.
10. Record commit and pull-request references in the mission communication folder.

Branch format:

`mission/[MISSION-ID]-[SHORT-SLUG]`

Direct AI pushes to `main` are prohibited.

## 9. Safe Intake Commands

Initial inspection:

```powershell
git fetch origin
git remote get-url origin
git branch --show-current
git status
```

For clean `main`:

```powershell
git switch main
git pull --ff-only origin main
```

For a new mission branch:

```powershell
git switch -c mission/[MISSION-ID]-[SHORT-SLUG] origin/main
```

A new mission branch shall be created only from the Mission Control-authorized base branch after that base has been fetched and verified current. Before branch creation, `git remote get-url origin` must match the authorized repository. A mismatch requires a stop report.

The handover shall record the base branch, base commit SHA, mission branch, and mission branch starting SHA.

For an existing mission branch:

```powershell
git switch mission/[MISSION-ID]-[SHORT-SLUG]
git pull --ff-only origin mission/[MISSION-ID]-[SHORT-SLUG]
```

These commands are permitted only after the mission-branch model is approved and when the mission explicitly authorizes them.

## 10. Branch and Working-Tree Safety

The AI shall stop when:

- the working tree contains unrelated changes;
- a pull is not fast-forward;
- the branch is unexpected;
- a merge or rebase conflict exists;
- credentials are unavailable;
- validation fails;
- mission authorization is missing or expired;
- remote or target branch identity is unclear.

The AI shall preserve local work and report exact evidence. It shall not resolve conflicts silently.

## 11. Exact-File Staging and Commit Rules

Only authorized paths may be staged. `git add .`, broad globs, and unrelated staging are prohibited unless a mission expressly authorizes every affected working-tree path.

Before committing, the AI shall verify:

- expected branch;
- exact staged file list;
- no unexpected deletion;
- `git diff --cached --check` passes;
- `git diff --cached --name-status` matches the authorized scope exactly;
- applicable quality gates and tests pass;
- no secret, generated artifact, editor file, or temporary file is staged.

Unexpected staged files, deletions, or renames require a stop report.

Before commit, the AI shall run the repository's approved secret-detection or security check where available. If no approved automated check exists, the AI shall inspect staged changes for credentials, tokens, keys, passwords, and environment values and record that limitation in the handover.

The commit message shall be mission-approved. A commit does not approve the work.

## 12. Push and Pull-Request Rules

An authorized AI may push only the named mission branch. It shall not push directly to `main`, use force push, rewrite history, delete branches, or change protection settings.

The pull request shall:

- target the Mission Control-authorized base branch;
- identify the mission and authorized scope;
- list changed files;
- include validation evidence;
- link the mission communication record;
- state blockers, deviations, and unresolved issues;
- remain subject to Mission Control and repository review.

The AI may open or update the pull request but may not approve or merge its own work.

Where the AI can commit and push but cannot create a pull request, it shall record the pushed branch and commit SHA, then provide the Founder or Mission Control with the exact PR creation action required. Lack of PR-creation capability does not authorize direct push to `main`.

## 13. Mission Control Review and Merge

Mission Control reviews scope, evidence, governance alignment, unresolved risk, and readiness. Merge occurs only through the approved repository process and only by an authorized human or separately authorized merge mechanism.

No AI may:

- self-merge;
- bypass required reviews or checks;
- dismiss blocking feedback without authority;
- alter the target branch to evade controls;
- treat a green check as Mission Control acceptance.

## 14. Conflict Handling

On divergence or conflict, the AI shall stop, record branch and commit references, preserve working state, and return the conflict to Mission Control. Automatic merge-conflict resolution, unrestricted pull, force push, destructive checkout, reset-based work loss, and history rewriting are prohibited.

Mission Control must authorize the resolution owner and strategy before work resumes.

## 15. Founder Brief Requirements

Founder Briefs shall remain concise and contain only actions genuinely requiring Founder involvement. They shall explain current status, what changed, security implications, exact location, required commands or text, expected success evidence, and prohibited actions.

Routine AI-to-AI detail belongs in the repository. The Founder shall not be used as a manual message bus when an authorized repository handover is available.

When Founder action is required, exact PowerShell commands shall be shown directly in Founder chat. The same commands may also be stored in the Founder Brief, but the Founder shall not be required to open a repository file merely to obtain them.

## 16. Explicit Chat Authorization

The following wording, with every bracketed value resolved, is required for mission-scoped authorization:

> Founder/Mission Control authorizes [AI NAME] for mission [MISSION-ID] to operate on repository [OWNER/REPOSITORY], using branch [AUTHORIZED BRANCH], limited to [AUTHORIZED PATHS OR SCOPE], with commit message [APPROVED COMMIT MESSAGE], and to fetch, pull fast-forward only, stage exact authorized files, commit, push the authorized mission branch, and open or update the pull request.

AI name, Mission ID, repository, branch, authorized paths or scope, and approved commit message are mandatory. If any value is missing or ambiguous, the AI shall stop and request clarification.

Without explicit authority, the AI shall prepare commands but shall not execute commit or push.

## 17. Actions Proposed for Controlled Automation

Subject to explicit mission authorization and future activation:

- `git fetch` from the approved remote;
- fast-forward-only pull;
- authorized mission-branch creation or switching;
- exact-file staging;
- mission-scoped commit;
- push of the authorized mission branch;
- pull-request creation or update;
- commit and PR reference recording.

## 18. Actions That Remain Prohibited

- direct AI push to `main`;
- AI self-merge or self-approval;
- force push or history rewriting;
- unauthorized branch deletion;
- staging unrelated files;
- silent conflict resolution;
- bypassing Mission Control review;
- changing branch protection or repository security settings;
- exposing credentials or secrets;
- treating tool access as authority.

## 19. Governance Authority and Tool Capability

Mission authorization grants governance permission only.

It does not create:

- shell access;
- local filesystem access;
- Git credentials;
- GitHub write permission;
- branch permission;
- connector capability;
- repository access;
- local clone access;
- PowerShell access.

An AI may execute only the operations that its actual environment supports. Where the required capability is unavailable, the AI shall prepare exact Founder commands or return a stop report.

## 20. Local and Remote Repository Distinction

GitHub connector operations update the remote repository only. They do not update the Founder's local Windows clone.

Local operations such as `git fetch`, `git pull`, branch switching, staging, local commit, and local push require an AI or agent running inside the local repository with shell access and valid Git authentication.

When remote changes are completed without updating the local clone, the Founder Brief shall provide the exact safe synchronization commands directly in chat.

## 21. Mission-Scoped Git Authority Expiry

Mission-scoped Git authority expires when:

- the authorized stage is completed;
- Mission Control revokes authority;
- the mission is paused, closed, superseded, or rejected;
- the authorized branch or scope changes;
- the approved commit message changes materially;
- unrelated working-tree changes appear;
- validation fails;
- a merge or rebase conflict occurs;
- a pull cannot fast-forward;
- repository or authentication state changes.

Any resumed Git operation requires renewed confirmation of authority and repository state.

## 22. Merge Authority

Merge to `main` may be performed only by:

- the Founder;
- a Mission Control-authorized human maintainer; or
- a separately approved automated merge mechanism operating after all required reviews and status checks pass.

Codex and Claude Code may not approve or merge their own work. No green check, successful push, or open pull request constitutes Mission Control acceptance.

## 23. Branch Protection Activation Gate

Controlled AI Git authority shall not be activated until Mission Control verifies and records:

- protection of the `main` branch;
- required pull-request review rules;
- required status checks;
- direct-push restrictions;
- force-push restrictions;
- branch-deletion restrictions;
- merge permissions.

The verification record shall be stored in `communication/governance/branch-protection-verification.md`.

If branch protection is unavailable, the Founder must approve a documented compensating control before activation. This gate is non-bypassable.

## 24. Pull-Request Handover Record

When an AI creates or updates a pull request, the handover shall record:

- mission ID;
- repository;
- branch name;
- base branch;
- commit SHA;
- pull-request number;
- pull-request reference or URL;
- exact changed files;
- validation results;
- unresolved findings;
- required reviewers;
- next authorized reviewer;
- action not yet authorized.

The mission README and handover log shall both reference the pull request.

## 25. Staged Activation of Repository Instructions

Activation shall occur in two controlled stages.

### Stage A — Core Operating Instructions

Apply and verify:

- `communication/AI_Communication_and_Handover_Protocol.md`;
- `AGENTS.md`;
- `CLAUDE.md`;
- `CHATGPT.md`;
- `communication/README.md`.

After Stage A, Mission Control reviews repository behaviour, branch and status checks are verified, and no workflow contradiction may remain active.

The branch-protection verification record must already exist or be created under the same activation mission before these five files become active.

### Stage B — Workflow Alignment

Only after Stage A is confirmed, update:

- `docs/engineering/eos/ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md`;
- `docs/engineering/eos/Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md`.

Stage B shall align the EOS workflows with the activated core instruction model. Activation must not modify all six live files in one uncontrolled step.

Stage B shall verify that no remaining statement says Codex or Claude Code can never commit or never push without the controlled exception; neither workflow permits direct push to `main` or self-merge; both workflows reference the same Founder- and Mission Control-approved AI Communication and Handover Protocol and `AGENTS.md`; and both preserve Founder, authorized human maintainer, or separately approved merge authority.

## 26. Communication Closure and Archive Governance

Active mission communication shall not remain indefinitely in the active communication area after the communication cycle or mission is complete.

### Active and Archive Locations

- Active: `communication/missions/[MISSION-ID]/`
- Canonical repository archive: `communication/archive/[MISSION-ID]/`

The repository's existing approved archive convention maps the proposed `communication/archive/missions/[MISSION-ID]/` structure to `communication/archive/[MISSION-ID]/`. This mapping shall be recorded in the archive handover. A future change to the canonical archive path requires separate approval.

### Archive Preconditions

Before archiving, the assigned AI shall verify:

- the final mission stage is recorded;
- the mission README is current;
- the decision and handover logs are complete;
- final commit and pull-request references are recorded;
- unresolved follow-ups are named;
- authoritative artifacts remain outside the communication archive where required;
- no active actor still requires the folder;
- Founder or Mission Control has explicitly confirmed closure.
- every associated pull request is merged, closed, or explicitly accepted by Mission Control as an open follow-up reference.

Any open follow-up pull request shall be recorded in the archived README.

Before archiving, the assigned AI shall identify repository links pointing to the active communication path. Where required, it shall update those links or leave an approved redirect or index record at the former active location. The active and archive locations must not both present themselves as authoritative mission communication.

### Archive Action

The assigned AI shall:

1. update the mission README status to `ARCHIVED`;
2. record archive authority and date;
3. record final repository and mission references;
4. preserve all actor reports, decisions, handovers, Founder Briefs, and supporting records;
5. move the complete mission communication folder from the active path to the canonical archive path;
6. preserve Git history;
7. update any active communication index;
8. update `communication/live/report.md`;
9. commit and push when mission-scoped Git authority is active;
10. otherwise provide exact Founder PowerShell commands directly in chat.

The archive operation shall preserve all file content and Git traceability. No communication record may be omitted from the archive commit. The assigned AI shall verify the complete moved-file list before commit.

The archived README shall record mission ID, final disposition, archive date and authority, final commit and pull request, active authoritative artifacts, unresolved follow-up missions, and non-governing communication-history status.

### Archive Protection

Archived records must not be silently deleted or rewritten, treated as active instructions, or reactivated without Mission Control authorization. They remain historical continuity and evidence records.

### No Premature Archive

Communication shall not be archived while a stage, Founder action, Mission Control review, corrective mission, required handover, required pull-request review, or blocking issue remains open.

### Closure and Archive Responsibility

Archive action requires explicit Founder or Mission Control confirmation recorded in the decision log and archived README.

The AI assigned by Mission Control for communication closure owns the archive action. Normally, Codex archives documentation-governance and product-discovery communication, while Claude Code archives engineering, verification, and implementation communication. Mission Control may assign another AI. No AI may archive a mission merely because its own stage is complete.

### Archive Status Model

| Status | Authority |
|---|---|
| `ACTIVE COMMUNICATION` | Mission Control |
| `COMMUNICATION CLOSURE PENDING` | Mission Control |
| `READY FOR ARCHIVE` | Founder or Mission Control |
| `ARCHIVING IN PROGRESS` | Assigned AI records after authorization |
| `ARCHIVED` | Assigned AI records after successful move and synchronization |
| `REACTIVATION AUTHORIZED` | Mission Control only |

### Archive Failure and Stop Conditions

The AI shall stop and report if the destination contains conflicting content, active and archive folders would create duplicate authority, the mission README is incomplete, final commit or PR references are missing where required, unrelated files appear in the move, validation fails, active work remains, repository state is not synchronized, or known references would break without an approved update plan.

### Communication Archive Record

```markdown
## Communication Archive Record

- Mission ID:
- Final disposition:
- Closure confirmed by:
- Closure confirmation date:
- Active communication path:
- Archive path:
- Final commit SHA:
- Final pull-request reference:
- Final authoritative artifacts:
- Open follow-up missions:
- Files moved:
- Validation performed:
- Archive commit SHA:
- Repository synchronization:
- Reactivation prohibited without Mission Control authorization: YES
```

## 27. Recurring Live Communication Housekeeping

### Initial Exchange

The first exchange in a live communication cycle uses:

- instruction: `communication/live/instruction.md`;
- response: `communication/live/report.md`.

### Recurring Exchange

When Mission Control or the Founder issues another instruction based on the current report, the next pair uses `instruction1.1.md` and `report1.1.md`. Further exchanges continue monotonically as `instruction1.2.md` with `report1.2.md`, `instruction1.3.md` with `report1.3.md`, and so on. Numbers shall not be reused.

### Pairing and Ordering

Each numbered instruction shall have exactly one report with the identical suffix. A report shall not respond to a differently numbered instruction.

The live folder shall preserve chronological order. No file may be silently overwritten to conceal an earlier instruction or report. Corrections shall use the next numbered pair unless Mission Control explicitly authorizes an administrative correction to the base template files.

The complete live sequence is:

```text
instruction.md
report.md
instruction1.1.md
report1.1.md
instruction1.2.md
report1.2.md
instruction1.3.md
report1.3.md
...
```

A new numbered pair shall be created only for a real new communication turn. Routine publication of already-authorized files does not itself require another correction pair unless Mission Control identifies a substantive issue.

### Provisional Publication Status

During an active communication cycle, reports may correctly contain provisional publication values, including pending commit SHA, push not yet performed, modified working tree, Founder action required, and remote synchronization pending.

These values are valid while communication remains active. They shall not trigger an unnecessary correction instruction after every Founder publication.

### Closure-State Reconciliation

When the Founder or Mission Control explicitly declares the communication or mission complete, the assigned closure AI shall reconcile every live report before archival. All provisional Git, commit, push, synchronization, branch, pull-request, working-tree, and completion fields shall be replaced with the final verified repository state or an explicit final `NOT APPLICABLE — [REASON]` value.

Reconciliation applies to `report.md`, `report1.1.md`, `report1.2.md`, and every later numbered report in the same cycle.

Applicable final values include:

```text
Commit SHA: [FINAL SHA]
Push status: SUCCESS
Branch: [FINAL BRANCH]
Remote synchronization: SUCCESS
Working tree: CLEAN
Communication status: COMPLETED
Archive status: ARCHIVED
```

No successful state may be recorded without repository evidence.

When a provisional field is replaced at closure, the consolidated archive record shall retain the original provisional event in the chronological communication transcript while the final closure summary records the reconciled repository state. Historical truth shall not be silently rewritten.

### Founder Commands and Evidence

Whenever Founder action is required for pull, push, synchronization, branch work, commit, publication, archival, or another Git operation, exact commands shall be shown directly in Founder chat. The same commands may also appear in a Founder Brief, but the Founder shall not be required to open a repository file to obtain them. Chat shall state the completion evidence expected from the Founder.

Whenever an instruction or report is created or updated on GitHub and the Founder must synchronize the local repository, Founder chat shall identify the exact document, required action, and safe pull command. When Founder-side commit or push is required, exact commit and push commands shall also appear directly in chat.

### Live Communication Closure and Consolidation

Only after explicit Founder or Mission Control closure confirmation, the assigned AI shall:

1. verify that every instruction/report pair is complete;
2. verify that no active instruction is unresolved;
3. verify final repository, commit, pull-request, decision, and follow-up references;
4. reconcile every provisional field using final verified repository evidence;
5. consolidate the full chronological sequence into one coherent communication record and one coherent final report;
6. preserve every base and numbered instruction/report entry;
7. move the consolidated records to the canonical archive path;
8. verify that every source live file is represented in the archive;
9. remove temporary numbered live files only after archive verification succeeds;
10. restore `communication/live/instruction.md` to the approved instruction template;
11. restore `communication/live/report.md` to the approved report template;
12. verify that no numbered live files or mission-specific template content remain;
13. verify that `communication/live/` is ready for a new cycle;
14. commit and push when authorized, or provide exact Founder commands directly in chat.

The archive shall contain at minimum:

- `communication/archive/[MISSION-ID]/communication.md`, containing the complete chronological instruction/report transcript, including original provisional events;
- `communication/archive/[MISSION-ID]/report.md`, containing the final reconciled closure report with outcomes, decisions, verification, final Git state, unresolved follow-ups, archive references, closure authority, mission ID, closure date, final commit and pull request, and confirmation that live templates were restored.

Where the canonical repository archive already contains mission records, a non-conflicting approved subpath shall be used and the mapping recorded.

After successful closure, the live folder shall contain only the approved default live files and any separately approved index. At minimum, it shall contain `communication/live/instruction.md` and `communication/live/report.md`, both restored to approved templates.

The assigned AI shall tell the Founder directly: **Communication is completed and archived. The live folder has been returned to the default template state and is ready for new communication.** It shall also provide any required pull command and expected verification output.

Consolidation shall not lose content, delete unresolved decisions, rewrite historical meaning, archive an unanswered instruction, create duplicate active authority, or remove numbered files before archive content and Git traceability are verified.

## 28. Current Instruction Conflicts

At draft creation:

- approved `AGENTS.md`, `CLAUDE.md`, and `CHATGPT.md` prohibit automatic AI commit and push;
- `communication/README.md` states that an active instruction may authorize automatic AI commit and push;
- draft EOS ChatGPT and Claude GitHub workflows preserve human-only commit and push authority.

Until Mission Control and Founder approve a canonical amendment, the stricter approved repository instructions prevail. This protocol does not activate the proposed automation model.

## 29. Review and Activation

Activation requires:

1. Mission Control review of this protocol.
2. Founder approval of the security and authority model.
3. Approval of the exact `AGENTS.md` amendment.
4. Reconciliation of conflicting actor-specific and communication documentation through separately authorized updates.
5. Confirmation of GitHub branch protection and pull-request controls.

The Stage A activation mission shall set:

- **Version:** 1.0
- **Status:** ACTIVE
- **Approved By:** Founder
- **Activated By:** Mission Control
- **Activation Commit:** `[SHA]`
- **Activation Date:** `[DATE]`

## Protocol Change Log

| Version | Mission | Change | Status |
|---|---|---|---|
| Draft 1.0 | SB-GOV-COMMS-1.0 | Initial AI communication and Git automation governance draft | DRAFT |
| Draft 1.1 | SB-GOV-COMMS-1.1 | Added controlled mission-scoped Git authority, ten safety conditions, explicit chat authorization, and Founder-chat command visibility | DRAFT |
| Draft 1.2 | SB-GOV-COMMS-1.2 | Added capability boundaries, local-versus-remote Git distinction, merge authority, branch-protection gate, authorization expiry, PR handover requirements, staged activation, and communication archival governance | DRAFT |
| Draft 1.3 | SB-GOV-COMMS-1.2 | Added recurring live instruction/report numbering, exact pair matching, closure consolidation, archive outputs, live-template restoration, and Founder-chat Git command visibility | DRAFT |
| Draft 1.4 | SB-GOV-COMMS-1.2 | Added provisional live-report status, closure-state reconciliation, chronological transcript preservation, numbered exchange lifecycle, archive consolidation, live-template restoration, and Founder-chat pull/push command visibility | DRAFT |
| 1.0 | SB-GOV-COMMS-ACT-1.0 | Founder-approved activation of AI communication, controlled Git authority, and archival governance | ACTIVE |

Future updates must append rather than overwrite this history.

---

**Draft control:** This protocol is not active and grants no new Git authority.
