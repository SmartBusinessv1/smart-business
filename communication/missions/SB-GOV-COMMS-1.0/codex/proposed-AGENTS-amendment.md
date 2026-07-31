# Proposed `AGENTS.md` Amendment

- **Mission:** SB-GOV-COMMS-1.0
- **Status:** DRAFT — MISSION CONTROL REVIEW REQUIRED
- **Target section:** `# Git Rules`
- **Activation:** NOT AUTHORIZED

## Exact Proposed Replacement

Replace the current `# Git Rules` section in `AGENTS.md` with:

```markdown
# Git Rules

AI assistants may perform mission-scoped Git operations only when an explicit Mission Control mission identifies:

- the authorized remote;
- the authorized mission branch;
- the base branch;
- permitted files;
- required validation;
- the approved commit scope;
- pull-request requirements.

Under that explicit authorization, an AI may:

- fetch from the approved remote;
- pull using fast-forward only;
- create or switch to the authorized mission branch;
- stage only exact authorized files;
- commit verified mission work;
- push only the authorized mission branch;
- open or update a pull request;
- record commit and pull-request references in the mission communication folder.

AI assistants shall never:

- push directly to `main`;
- approve or merge their own work;
- force push;
- rewrite Git history;
- delete branches without explicit authorization;
- stage unrelated files;
- resolve merge or rebase conflicts without an authorized resolution instruction;
- bypass Mission Control review or repository protection rules;
- treat persistent credentials, tool access, or a previous mission as continuing authority.

Before any authorized commit or push, the AI shall verify the expected branch, exact staged paths, required quality gates, and absence of secrets, temporary files, generated artifacts, and unexpected deletions.

The AI shall stop and report when the working tree contains unrelated changes, a pull cannot fast-forward, the branch is unexpected, a conflict exists, credentials are unavailable, validation fails, or mission authority is missing or unclear.

GitHub is a durable communication and review layer. It does not independently activate another AI or authorize the next mission stage.

When mission-scoped Git authority is not explicitly granted, AI may only prepare Git commands for authorized human execution.
```

## Security Effect

The amendment narrows automation to explicitly authorized mission branches and exact files. It does not permit direct AI publication to `main`, self-merge, force push, history rewriting, silent conflict resolution, branch-protection changes, or bypass of Mission Control.

## Related Documentation Requiring Later Reconciliation

If approved, separate missions should align:

- `CLAUDE.md`;
- `CHATGPT.md`;
- `communication/README.md`;
- the draft ChatGPT and Claude GitHub engineering artifact workflows.

This proposal does not modify those documents.
