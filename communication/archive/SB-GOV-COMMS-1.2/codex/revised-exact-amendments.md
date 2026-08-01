# SB-GOV-COMMS-1.2 — Revised Exact Amendments

- **Status:** DRAFT — MISSION CONTROL REVIEW REQUIRED
- **Activation:** NOT AUTHORIZED

## Shared Controlled-Authority Wording

Each target shall inherit or state these exact controls:

```markdown
Controlled AI Git authority is available only when the active mission contains:

> Founder/Mission Control authorizes [AI NAME] for mission [MISSION-ID] to operate on repository [OWNER/REPOSITORY], using branch [AUTHORIZED BRANCH], limited to [AUTHORIZED PATHS OR SCOPE], with commit message [APPROVED COMMIT MESSAGE], and to fetch, pull fast-forward only, stage exact authorized files, commit, push the authorized mission branch, and open or update the pull request.

AI name, Mission ID, repository, branch, authorized paths or scope, and approved commit message are mandatory. Missing or ambiguous values require a stop and clarification.

Mission authority grants permission only; it does not create shell, filesystem, repository, connector, PowerShell, credential, authentication, or GitHub capability. The AI may execute only operations supported by its actual environment.

Before any branch or write operation, `git remote get-url origin` must match the authorized repository. A new mission branch may be created only from the Mission Control-authorized base branch after fetch and current-state verification. The handover shall record base branch, base commit SHA, mission branch, and mission branch starting SHA.

Before commit, `git diff --cached --name-status` must match authorized scope exactly. Unexpected files, deletions, or renames require a stop report. Run the approved secret or security check where available; otherwise inspect staged changes for credentials, tokens, keys, passwords, and environment values and record the limitation.

Authority expires when the stage completes; authority is revoked; the mission pauses, closes, is superseded, or is rejected; branch, scope, commit message, repository, authentication, or working-tree state changes; validation fails; a conflict occurs; or a pull cannot fast-forward. Resumption requires renewed confirmation.

AI shall not push directly to `main`, self-approve, self-merge, force-push, rewrite history, delete branches without separate authority, stage unrelated files, use `git add .` without complete scope authority, resolve conflicts silently, bypass Mission Control review, alter branch protection, or expose credentials.

Merge to `main` may be performed only by the Founder, a Mission Control-authorized human maintainer, or a separately approved automated merge mechanism after required reviews and checks.

When Founder action is required, exact PowerShell commands shall be shown directly in chat.

If the AI can push but cannot create a pull request, it shall record the branch and commit SHA and provide the exact PR creation action. It may not push directly to `main` as a fallback.

Communication closure and archive operations shall follow `communication/AI_Communication_and_Handover_Protocol.md` and require explicit Founder or Mission Control closure authority.
```

## Stage A — Protocol and Core Operating Instructions

### `communication/AI_Communication_and_Handover_Protocol.md`

The activation mission shall replace proposal wording with:

```markdown
This protocol establishes GitHub as the durable communication and handover layer between authorized Smart Business AI participants.
```

It shall set:

```text
Version: 1.0
Status: ACTIVE
Approved By: Founder
Activated By: Mission Control
Activation Commit: [SHA]
Activation Date: [DATE]
```

It shall preserve Draft 1.0 through Draft 1.2 and append the 1.0 activation row already defined in the protocol change log.

### `AGENTS.md`

Replace `# Git Rules` with the shared controlled-authority wording above, followed by:

```markdown
Before commit or push, verify the ten mandatory conditions in the Founder- and Mission Control-approved AI Communication and Handover Protocol. AI-authored work normally uses `mission/[MISSION-ID]-[SHORT-SLUG]`.

Controlled AI Git authority shall not activate until Mission Control records branch-protection verification at `communication/governance/branch-protection-verification.md`, or the Founder approves a documented compensating control.

Without explicit authority, AI may prepare commands but shall not commit or push.
```

### `CLAUDE.md`

Replace `# Git Safety` with:

```markdown
# Git Safety

Claude Code shall follow the controlled mission-scoped Git authority, capability boundaries, expiry rules, protected actions, branch-protection gate, merge authority, and communication-archive requirements in `AGENTS.md` and the Founder- and Mission Control-approved AI Communication and Handover Protocol.

Claude Code may commit and push only the explicitly authorized mission branch after all ten mandatory conditions pass. It may open or update a pull request and record the handover, but may not approve or merge its own work or push directly to `main`.

Without complete explicit authority, Claude Code shall prepare exact human commands and stop before commit or push.
```

### `CHATGPT.md`

Add immediately before `# Security`:

```markdown
# Git Safety

ChatGPT Codex shall follow the controlled mission-scoped Git authority, capability boundaries, expiry rules, protected actions, branch-protection gate, merge authority, and communication-archive requirements in `AGENTS.md` and the Founder- and Mission Control-approved AI Communication and Handover Protocol.

ChatGPT Codex may commit and push only the explicitly authorized mission branch after all ten mandatory conditions pass. It may open or update a pull request and record the handover, but may not approve or merge its own work or push directly to `main`.

Without complete explicit authority, ChatGPT Codex shall prepare exact human commands and stop before commit or push.
```

### `communication/README.md`

Replace `## Pull and Push Visibility Rule` with:

```markdown
## Controlled Git Operations and Founder Visibility

Codex and Claude Code may perform Git operations only under the complete explicit mission authority defined by `AGENTS.md` and the Founder- and Mission Control-approved AI Communication and Handover Protocol.

GitHub connector actions affect the remote only; local Windows clone operations require a local agent with shell access and authentication. When Founder action or local synchronization is required, exact PowerShell commands must be shown directly in chat.

AI-authored work normally uses `mission/[MISSION-ID]-[SHORT-SLUG]`, pushes only that branch, and hands over through a pull request. Direct AI push to `main` and AI self-merge are prohibited.

Pull-request handovers and communication closure shall follow the protocol. Completed communication may be archived only after explicit Founder or Mission Control closure confirmation.
```

The branch-protection verification record must already exist or be created under the same Stage A activation mission before the five Stage A files become active. After Stage A, Mission Control shall verify repository behaviour and confirm that no active contradiction remains before Stage B begins.

## Stage B — Workflow Alignment

### ChatGPT EOS GitHub Workflow

Replace absolute statements that ChatGPT can never commit or push, including the `# Safety Boundaries` section, with:

```markdown
# Safety Boundaries

ChatGPT Codex may commit and push only an explicitly authorized mission branch under the controls in `AGENTS.md` and the Founder- and Mission Control-approved AI Communication and Handover Protocol. Permission does not create capability. Authority expires on any defined state change or failure.

Direct push to `main`, self-approval, self-merge, force-push, history rewriting, unrelated staging, silent conflict resolution, protection bypass, and credential exposure remain prohibited. Merge authority remains with the Founder, an authorized human maintainer, or a separately approved automated mechanism after checks and review.

Every pull-request handover and communication archive shall use the protocol records. Without complete authority and capability, authorized human execution is required.
```

### Claude EOS GitHub Workflow

Replace absolute statements that Claude can never commit or push, including the `# Safety Boundaries` section, with:

```markdown
# Safety Boundaries

Claude Code may commit and push only an explicitly authorized mission branch under the controls in `AGENTS.md` and the Founder- and Mission Control-approved AI Communication and Handover Protocol. Permission does not create capability. Authority expires on any defined state change or failure.

Direct push to `main`, self-approval, self-merge, force-push, history rewriting, unrelated staging, silent conflict resolution, protection bypass, and credential exposure remain prohibited. Merge authority remains with the Founder, an authorized human maintainer, or a separately approved automated mechanism after checks and review.

Every pull-request handover and communication archive shall use the protocol records. Without complete authority and capability, authorized human execution is required.
```

## Activation Sequence

1. Verify and record branch protection.
2. Apply the protocol and four core Stage A amendments in a dedicated mission.
3. Validate and observe Stage A behaviour.
4. Obtain Mission Control confirmation.
5. Apply the two Stage B amendments in a separate mission.
6. Validate that no contradiction remains.

Stage B validation must confirm that no uncontrolled "never commit" or "never push" statement remains; neither workflow permits direct push to `main` or self-merge; both reference the same approved protocol and `AGENTS.md`; and both preserve Founder, authorized human maintainer, or separately approved merge authority.

## Archive Precision Required in Every Activated Target

Each activated target shall cross-reference the approved protocol rule that communication may be archived only after every associated pull request is merged, closed, or accepted by Mission Control as an open follow-up. Link targets must be updated or an approved redirect/index retained, no active/archive duplicate authority may exist, and the archive commit must include and verify every moved communication file.

All six target files remain unchanged during SB-GOV-COMMS-1.2.
