# SB-GOV-COMMS-1.1 — Exact Proposed Amendments

- **Status:** DRAFT — MISSION CONTROL REVIEW REQUIRED
- **Activation:** NOT AUTHORIZED

## 1. `AGENTS.md`

Replace the complete `# Git Rules` section with:

```markdown
# Git Rules

Codex and Claude Code may perform automatic Git operations only when all of the following are true:

1. An active mission exists.
2. The Founder or Mission Control explicitly authorizes Git operations.
3. The mission identifies the repository.
4. The mission identifies the authorized branch or branch pattern.
5. The mission defines authorized files or scope.
6. The AI has shell and Git access.
7. Authentication is available.
8. The working tree contains no unrelated changes.
9. Required validation succeeds.
10. No conflict or non-fast-forward condition exists.

Under that explicit mission authority, Codex and Claude Code may:

- fetch from the approved remote;
- pull using fast-forward only;
- create or switch to the authorized mission branch;
- stage only exact authorized files;
- commit verified mission work using the approved message;
- push only the authorized mission branch;
- open or update a pull request;
- record commit and pull-request references in the mission communication folder.

The following wording, or equivalent, is sufficient authorization:

> Founder/Mission Control authorizes this AI to fetch, pull fast-forward only, create or use the named mission branch, stage only authorized files, commit using the approved message, push the mission branch, and open or update the pull request.

AI assistants shall never:

- push directly to `main`;
- approve or merge their own pull requests;
- force-push;
- rewrite Git history;
- delete branches without separate authorization;
- stage unrelated files;
- use `git add .` unless every working-tree change is explicitly authorized;
- resolve merge or rebase conflicts silently;
- bypass Mission Control review or repository protection;
- alter branch protection;
- expose credentials or secrets.

The AI shall stop when the working tree has unrelated changes, a pull cannot fast-forward, the branch is unexpected, a conflict exists, credentials are unavailable, validation fails, or mission authorization is missing or unclear.

All AI-authored changes shall normally use `mission/[MISSION-ID]-[SHORT-SLUG]`. Merge to `main` requires Mission Control review, required validation, and an authorized human merge or separately approved merge mechanism.

Without explicit Git authority, the AI may prepare commands but shall not execute commit or push.
```

## 2. `CLAUDE.md`

Replace the complete `# Git Safety` section with:

```markdown
# Git Safety

Claude Code may perform the mission-scoped Git operations permitted by `AGENTS.md` only when the active Founder or Mission Control mission explicitly authorizes them and identifies the repository, branch, scope, and approved commit requirements.

Claude Code shall verify the working tree, branch, exact staged paths, validation results, authentication, and fast-forward state before commit or push.

Claude Code shall never push directly to `main`, self-approve, self-merge, force-push, rewrite history, delete a branch without separate authority, stage unrelated files, resolve conflicts silently, bypass Mission Control review, alter branch protection, or expose credentials.

Without explicit mission-scoped Git authority, Claude Code may only prepare Git commands for authorized human execution.
```

## 3. `CHATGPT.md`

Add the following section immediately before `# Security`:

```markdown
# Git Safety

ChatGPT Codex may perform the mission-scoped Git operations permitted by `AGENTS.md` only when the active Founder or Mission Control mission explicitly authorizes them and identifies the repository, branch, scope, and approved commit requirements.

ChatGPT Codex shall verify the working tree, branch, exact staged paths, validation results, authentication, and fast-forward state before commit or push.

ChatGPT Codex shall never push directly to `main`, self-approve, self-merge, force-push, rewrite history, delete a branch without separate authority, stage unrelated files, resolve conflicts silently, bypass Mission Control review, alter branch protection, or expose credentials.

Without explicit mission-scoped Git authority, ChatGPT Codex may only prepare Git commands for authorized human execution.
```

## 4. `communication/README.md`

Replace the complete `## Pull and Push Visibility Rule` section with:

```markdown
## Controlled Git Operations and Founder Visibility

Codex and Claude Code may perform automatic Git operations only when the active Founder or Mission Control mission explicitly authorizes them under `AGENTS.md`.

Authorized AI work shall normally use `mission/[MISSION-ID]-[SHORT-SLUG]`, push only that mission branch, and open or update a pull request. Direct AI push to `main` and AI self-merge are prohibited.

When Founder action is required, exact PowerShell commands must be shown directly in chat. The commands may also be stored in a Founder Brief, but the Founder shall not be required to open a repository file merely to obtain them.

Do not show unnecessary Git commands when the AI has already completed an authorized mission-branch operation. AI-to-AI instructions, reports, commit references, and pull-request references remain in the repository communication record.
```

## 5. ChatGPT EOS GitHub Workflow

In `docs/engineering/eos/ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md`, replace `# Safety Boundaries` through the sentence immediately before the following separator with:

```markdown
# Safety Boundaries

ChatGPT Codex may commit and push an authorized mission branch only when the active Founder or Mission Control mission explicitly grants the controlled Git authority defined by `AGENTS.md`.

ChatGPT Codex shall never:

- push directly to `main`;
- merge or approve its own pull request;
- force-push or rewrite history;
- delete branches without separate authorization;
- stage unrelated files;
- resolve conflicts silently;
- bypass Mission Control review or branch protection;
- expose credentials or secrets;
- publish or approve an engineering artifact merely because it committed or pushed it.

Without explicit mission-scoped Git authority, repository commit and push require authorized human execution.
```

Also replace any absolute statements elsewhere in that workflow that ChatGPT can never commit or push with references to this controlled mission-scoped rule.

## 6. Claude EOS GitHub Workflow

In `docs/engineering/eos/Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md`, replace `# Safety Boundaries` through the sentence immediately before the following separator with:

```markdown
# Safety Boundaries

Claude Code may commit and push an authorized mission branch only when the active Founder or Mission Control mission explicitly grants the controlled Git authority defined by `AGENTS.md`.

Claude Code shall never:

- push directly to `main`;
- merge or approve its own pull request;
- force-push or rewrite history;
- delete branches without separate authorization;
- stage unrelated files;
- resolve conflicts silently;
- bypass Mission Control review or branch protection;
- expose credentials or secrets;
- publish or approve an engineering artifact merely because it committed or pushed it.

Without explicit mission-scoped Git authority, repository commit and push require authorized human execution.
```

Also replace any absolute statements elsewhere in that workflow that Claude can never commit or push with references to this controlled mission-scoped rule.

## Conflict Resolution

These amendments replace contradictory blanket prohibitions and broad automatic-push language with one rule: automatic Git actions are allowed only under explicit Founder or Mission Control mission authority, only on an authorized mission branch, and only after all ten safety conditions pass.

## Activation Boundary

This document proposes exact wording. It does not modify or activate any target instruction file.
