# AI Communication and Handover Protocol

- **Mission:** SB-GOV-COMMS-1.0
- **Version:** Draft 1.0
- **Status:** DRAFT — MISSION CONTROL REVIEW REQUIRED
- **Authority:** Founder through Mission Control
- **Scope:** Repository communication and mission-scoped Git operations by authorized AI participants

## 1. Purpose

This protocol proposes GitHub as the durable communication layer between Smart Business AI participants while preserving Mission Control sequencing, Founder decision ownership, repository safety, and review before merge.

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
- applicable quality gates and tests pass;
- no secret, generated artifact, editor file, or temporary file is staged.

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

The following wording, or equivalent language containing the same controls, is sufficient mission-scoped authorization:

> Founder/Mission Control authorizes this AI to fetch, pull fast-forward only, create or use the named mission branch, stage only authorized files, commit using the approved message, push the mission branch, and open or update the pull request.

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

## 19. Current Instruction Conflicts

At draft creation:

- approved `AGENTS.md`, `CLAUDE.md`, and `CHATGPT.md` prohibit automatic AI commit and push;
- `communication/README.md` states that an active instruction may authorize automatic AI commit and push;
- draft EOS ChatGPT and Claude GitHub workflows preserve human-only commit and push authority.

Until Mission Control and Founder approve a canonical amendment, the stricter approved repository instructions prevail. This protocol does not activate the proposed automation model.

## 20. Review and Activation

Activation requires:

1. Mission Control review of this protocol.
2. Founder approval of the security and authority model.
3. Approval of the exact `AGENTS.md` amendment.
4. Reconciliation of conflicting actor-specific and communication documentation through separately authorized updates.
5. Confirmation of GitHub branch protection and pull-request controls.

---

**Draft control:** This protocol is not active and grants no new Git authority.
