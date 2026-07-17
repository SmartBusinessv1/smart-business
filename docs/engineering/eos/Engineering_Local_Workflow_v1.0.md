# TEAM LIPS ENGINEERING OPERATING SYSTEM

# Engineering Local Workflow v1.0

**Document Version:** v1.0

**Document Type:** Engineering Workflow Standard

**Classification:** Team LIPS Internal

**Program:** Team LIPS Engineering Operating System (EOS)

**Mission:** SB-INF-1.8

**Owner:** Infrastructure Operations

**Approval Authority:** Mission Control

**Status:** Draft

---

# Purpose

This document defines the approved local engineering workflow for creating, validating, repairing, committing, and publishing Team LIPS engineering Markdown artifacts.

The workflow applies whether an artifact is authored by:

- Founder
- Authorized Team LIPS contributors
- ChatGPT
- Claude
- Other approved AI engineering assistants

The workflow protects document quality while preserving human decision ownership.

---

# Core Principle

The Team LIPS Engineering Quality Gate assists the author.

It does not independently judge document meaning, approve governance, or silently change engineering artifacts.

Automatic validation may identify defects.

File modification requires an explicit human-authorized action.

---

# Scope

This workflow applies to Markdown engineering artifacts created or modified within the Team LIPS repository.

Examples include:

- Engineering Operating System documents
- Architecture specifications
- Engineering standards
- Mission reports
- Release documentation
- Acceptance checklists
- Platform inventories
- Calibration reports
- Engineering procedures

This workflow does not authorize product implementation or governance changes.

---

# Local Engineering Environment

The approved local engineering environment consists of:

| Component | Responsibility |
|-----------|----------------|
| Visual Studio Code | Artifact authoring and review |
| Team LIPS Save Watcher | Automatic detection of saved Markdown files |
| Markdown Quality Gate | Repair check, lint, and structural validation |
| Markdown Repair Tool | Human-authorized repair execution |
| Artifact Cleanup Tool | Removal of generated backups and reports |
| Git | Local version control |
| Git Pre-Commit Hook | Automatic validation before commit |
| GitHub Actions | Repository-level validation |

---

# Standard Workflow

```text
Author
(Human or AI-assisted)

        │
        ▼

Create or modify Markdown in VS Code

        │
        ▼

Save the document

        │
        ▼

Automatic Save Watcher detects the change

        │
        ▼

Repair Check

        │
        ▼

Markdown Lint

        │
        ▼

Structural Validation

        │
        ▼

PASS or FAIL
```

---

# Step 1 — Author the Artifact

Markdown artifacts shall be created or modified in Visual Studio Code.

The author remains responsible for:

- Purpose
- Scope
- Meaning
- Governance alignment
- Accuracy
- Approval status
- Final publication decision

AI assistants may help draft, review, and refine the artifact.

---

# Step 2 — Save the Artifact

When an eligible Markdown file is saved, the Team LIPS automatic save watcher detects the change.

The watcher invokes the unified Quality Gate for the saved file only.

The watcher shall not:

- Modify the file
- Create a Git commit
- Push changes
- Merge changes
- Approve the artifact
- Change governance status

---

# Step 3 — Automatic Quality Gate

The automatic Quality Gate runs the following stages:

## Repair Check

The repair tool runs in check mode.

It identifies formatting or structural repairs that may be required.

No file is modified.

## Markdown Lint

The linter checks repository Markdown rules, including trailing whitespace and other configured formatting requirements.

## Structural Validation

The validator checks:

- Document content
- Heading hierarchy
- Code fences
- Markdown tables
- Suspicious escaped Markdown

---

# PASS Result

A document passes when all configured stages complete successfully.

Example:

```text
QUALITY GATE PASSED

[QUALITY GATE] PASS:
docs/engineering/eos/Example_Artifact_v1.0.md
```

A PASS result means the document has met the configured technical Markdown quality requirements.

It does not mean:

- Governance approval has been granted
- Document meaning is correct
- Product implementation is authorized
- Mission Control review is complete

---

# FAIL Result

A document fails when one or more Quality Gate stages identify an issue.

Example:

```text
QUALITY GATE FAILED

[QUALITY GATE] FAIL:
docs/engineering/eos/Example_Artifact_v1.0.md
```

The output shall identify the relevant:

- File
- Line
- Rule
- Issue
- Required human review

No automatic repair is applied by the save watcher.

---

# Human Response to a Failure

When the Quality Gate fails, the author may:

1. Correct the issue manually.
2. Run the approved Markdown Repair Tool.
3. Review the issue before deciding whether a repair is appropriate.
4. Escalate an uncertain structural issue for engineering review.

The author shall not bypass a genuine Quality Gate failure without documented authorization.

---

# Manual Repair Workflow

The Markdown Repair Tool may be run explicitly when a repair is appropriate.

Example:

```powershell
python tools\markdown\repair_markdown.py `
"docs\engineering\eos\Example_Artifact_v1.0.md" `
--apply
```

For trailing whitespace cleanup:

```powershell
python tools\markdown\repair_markdown.py `
"docs\engineering\eos\Example_Artifact_v1.0.md" `
--apply `
--trim-trailing-whitespace
```

The trailing-whitespace option may remove intentional Markdown hard-break spacing.

Human review is therefore required before and after execution.

---

# Repair Safety

When repair mode is used, the tool shall:

- Create a verified backup
- Apply the authorized repair
- Save a repair report
- Perform no Git commit
- Perform no push
- Perform no merge
- Perform no branch operation

The author shall review the repaired document before continuing.

---

# Generated Artifact Cleanup

Repair operations may create temporary backup and report files.

After verifying the repaired document, generated artifacts may be removed using:

```powershell
python tools\markdown\cleanup_markdown_artifacts.py --apply
```

The cleanup utility requires explicit confirmation before deletion.

It shall not delete canonical engineering documents.

---

# Revalidation After Repair

After manual or tool-assisted repair, the document shall be saved again.

The automatic save watcher should then rerun the Quality Gate.

Expected workflow:

```text
Quality Gate FAIL

        │
        ▼

Human-authorized repair

        │
        ▼

Save repaired document

        │
        ▼

Automatic Quality Gate reruns

        │
        ▼

Quality Gate PASS
```

---

# Manual Quality Gate

The Quality Gate may also be run manually when required.

Example:

```powershell
python tools\markdown\quality_gate.py `
"docs\engineering\eos\Example_Artifact_v1.0.md"
```

A VS Code task is also available:

```text
Team LIPS: Validate Current Markdown File
```

Manual execution supplements the automatic save watcher.

It does not replace the pre-commit or GitHub Actions gates.

---

# Git Pre-Commit Workflow

When Markdown files are staged and a commit is attempted, the repository-managed pre-commit hook runs automatically.

Workflow:

```text
git commit

        │
        ▼

Detect staged Markdown files

        │
        ▼

Run Team LIPS Quality Gate

        │
        ├── PASS → Commit may continue
        │
        └── FAIL → Commit blocked
```

The pre-commit hook shall:

- Validate staged Markdown files
- Exclude configured generated artifacts
- Block commits containing failing Markdown
- Perform no automatic repair

---

# GitHub Actions Workflow

GitHub Actions provides repository-level validation.

The workflow runs when relevant files are changed through:

- Pushes
- Pull Requests

GitHub Actions shall validate only eligible changed Markdown files.

Legacy documents that were not changed shall not block unrelated work.

Workflow:

```text
Push or Pull Request

        │
        ▼

Identify changed Markdown files

        │
        ▼

Run Team LIPS Quality Gate

        │
        ├── PASS → Workflow succeeds
        │
        └── FAIL → Workflow fails
```

---

# Legacy Markdown Policy

Existing legacy Markdown debt shall not be repaired through unrestricted repository-wide automation.

Legacy normalization requires a separate controlled mission.

Mass replacement commands that may alter intentional Markdown formatting are rejected unless specifically reviewed and authorized.

---

# VS Code Automatic Watcher

The approved watcher is:

```text
tools/markdown/vscode_save_watcher.py
```

It monitors eligible Markdown files for saved changes.

The watcher is configured through:

```text
.vscode/tasks.json
```

and starts through the automatic folder-open task when the workspace is trusted and automatic tasks are allowed.

The watcher uses polling and file stability checks before invoking the Quality Gate.

---

# Automatic Watcher Safety Boundary

The save watcher shall never:

- Apply repairs automatically
- Modify Markdown files
- Create backups
- Delete files
- Stage files
- Commit files
- Push changes
- Merge branches
- Approve artifacts
- Change governance state

Its responsibility is detection, execution, and reporting only.

---

# Engineering Artifact Lifecycle Integration

The local workflow participates in the wider Engineering Artifact lifecycle:

```text
Draft

        │
        ▼

Local Authoring

        │
        ▼

Automatic Save Validation

        │
        ▼

Human Review and Repair

        │
        ▼

Git Pre-Commit Validation

        │
        ▼

Branch and Pull Request

        │
        ▼

GitHub Actions Validation

        │
        ▼

Human Approval

        │
        ▼

Merge into main

        │
        ▼

Published Engineering Record
```

---

# Human Authority

Humans retain authority over:

- Artifact meaning
- Repair approval
- Governance status
- Pull Request approval
- Merge authorization
- Release authorization
- Publication
- Archival

Automation provides evidence and consistency.

It does not replace human accountability.

---

# Failure Handling

If the automatic watcher does not start:

1. Confirm the repository is opened as a folder in VS Code.
2. Confirm the workspace is trusted.
3. Confirm automatic tasks are allowed.
4. Run:

```text
Tasks: Run Task
```

5. Select:

```text
Team LIPS: Automatic Markdown Quality Gate
```

6. Confirm the watcher terminal displays:

```text
Watching for saved Markdown files...
```

---

# Quality Gate Configuration

Repository-level Markdown Quality Gate behavior is defined in:

```text
.markdown-gate.yml
```

The configuration governs:

- Eligible file extensions
- Ignore patterns
- Ignore directories
- Repair-check behavior
- Lint behavior
- Validation behavior
- Reporting behavior
- Automatic safety boundaries

---

# Related Engineering Artifacts

- Team_LIPS_Engineering_Operating_System_EOS_v1.0.md
- Engineering_Quality_Gate_v1.0.md
- Engineering_Pipeline_Architecture_v1.0.md
- Engineering_Artifact_Workflow_v1.0.md
- Engineering_Platform_Inventory_v1.0.md
- Engineering_Platform_Capability_Matrix_v1.0.md
- Engineering_Tooling_Register.md

---

# Revision History

| Version | Description |
|---------|-------------|
| v1.0 | Initial Team LIPS Engineering Local Workflow |

---

# Approval

This document defines the Team LIPS local engineering workflow baseline.

**Engineering Review:** Pending

**Mission Control Review:** Pending

**Founder Approval:** Pending
