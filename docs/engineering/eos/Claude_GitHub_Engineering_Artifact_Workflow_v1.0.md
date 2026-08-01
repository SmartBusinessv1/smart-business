# TEAM LIPS ENGINEERING OPERATING SYSTEM

# Claude ↔ GitHub Engineering Artifact Workflow v1.0

**Document Version:** v1.0

**Document Type:** Engineering Workflow Standard

**Classification:** Team LIPS Internal

**Program:** Team LIPS Engineering Operating System (EOS)

**Mission:** SB-INF-1.10

**Owner:** Infrastructure Operations

**Approval Authority:** Mission Control

**Status:** ACTIVE

**Stage B Activation:** COMPLETE

**Activation Authority:** Founder through Mission Control

**Activation Commit:** `9c5baf1ed9355d9c3933cb1f7dafb467ee289b14`

**Activation Date:** 2026-08-01

**Temporary Phase 1 Compensating Control:** ACTIVE

**Branch Protection:** NOT CONFIGURED

**Governing References:** `AGENTS.md` and `communication/AI_Communication_and_Handover_Protocol.md`

---

# Purpose

This document defines the approved workflow for transferring engineering artifacts created or refined with Claude into the Team LIPS GitHub Engineering Repository.

The objective is to ensure Claude-assisted engineering artifacts follow the same engineering quality, governance, and traceability standards as all other Team LIPS engineering documentation.

This workflow applies to engineering documentation only.

It does not authorize product implementation, governance changes, or autonomous repository operations.

---

# Objectives

The workflow is designed to:

- Standardize Claude-assisted engineering documentation.
- Maintain engineering quality throughout the artifact lifecycle.
- Preserve human ownership of engineering decisions.
- Ensure repository consistency.
- Maintain complete engineering traceability.
- Prevent unauthorized repository modifications.

---

# Engineering Philosophy

Claude is an engineering assistant.

Humans remain responsible for engineering intent, governance alignment, repository changes, and publication decisions.

GitHub remains the canonical engineering repository.

Mission Control governs engineering publication.

---

# Scope

This workflow applies to:

- Engineering architecture
- Engineering standards
- Engineering workflows
- Engineering operating procedures
- Engineering reports
- Engineering inventories
- Engineering specifications
- Engineering support documentation

This workflow does not apply to:

- Application source code implementation
- Production deployments
- Database migrations
- Governance approval
- Business data

---

# Engineering Roles

| Role | Responsibility |
|-------|----------------|
| Founder | Defines engineering intent and approves publication |
| Claude | Drafts, reviews, and refines engineering artifacts |
| Visual Studio Code | Repository authoring environment |
| Team LIPS Quality Gate | Local engineering validation |
| Git | Version control |
| Git Pre-Commit Hook | Commit validation |
| GitHub Actions | Repository validation |
| Mission Control | Engineering governance oversight |

---

# End-to-End Workflow

```text
Founder
    │
    ▼
Engineering Request
    │
    ▼
Claude Draft or Review
    │
    ▼
Founder Review
    │
    ▼
Repository Authoring
    │
    ▼
Save Markdown
    │
    ▼
Automatic Save Watcher
    │
    ▼
Engineering Quality Gate
    │
    ▼
PASS / FAIL
    │
    ▼
Human Review
    │
    ▼
Git Stage
    │
    ▼
Git Pre-Commit
    │
    ▼
Commit
    │
    ▼
Push
    │
    ▼
GitHub Actions
    │
    ▼
Mission Control Evidence
    │
    ▼
Published Engineering Artifact
```

---

# Stage 1 — Engineering Request

Engineering work begins with an approved request from the Founder or an authorized engineering lead.

The request defines:

- Engineering objective
- Scope
- Expected deliverable
- Target engineering artifact
- Applicable engineering standards

---

# Stage 2 — Claude Draft or Review

Claude may:

- Draft engineering documents.
- Improve engineering clarity.
- Refine Markdown formatting.
- Review engineering consistency.
- Recommend engineering improvements.

Without an active mission-scoped Git authorization, Claude shall not:

- Publish engineering artifacts.
- Modify Git history.
- Approve engineering documents.
- Change governance.
- Commit to Git.
- Push repositories.
- Merge pull requests.

---

# Stage 3 — Human Review

Before repository authoring, the engineer verifies:

- Engineering intent
- Technical correctness
- Governance alignment
- Naming
- Version
- Status
- Markdown formatting

Only approved content proceeds.

---

# Stage 4 — Repository Authoring

Engineering artifacts are created within the Team LIPS Git repository using Visual Studio Code.

Claude conversations are reference material.

The Git repository is the canonical engineering record.

---

# Stage 5 — Automatic Local Validation

Saving the artifact automatically triggers:

1. Save Watcher
2. Repair Check
3. Markdown Lint
4. Structural Validation

Possible outcomes:

- PASS
- FAIL

No automatic repair is performed.

---

# Stage 6 — Human Correction

If validation fails, the engineer may:

- Correct manually.
- Run the approved repair tool.
- Save the document again.
- Allow the Quality Gate to revalidate.

Automation reports engineering evidence.

Humans determine corrective action.

---

# Stage 7 — Git Staging

Only validated engineering artifacts shall be staged.

Generated artifacts such as:

- Backup files
- Repair reports
- Temporary validation files

shall never be committed.

---

# Stage 8 — Git Pre-Commit Validation

The Team LIPS pre-commit hook validates staged Markdown artifacts.

Validation includes:

- Repair Check
- Markdown Lint
- Structural Validation

Commits containing failing engineering artifacts are blocked.

---

# Stage 9 — Commit

Commits should represent coherent engineering milestones.

Example:

```text
SB-INF-1.10: Add Claude GitHub engineering artifact workflow
```

---

# Stage 10 — GitHub Actions

After push, GitHub Actions validates changed engineering Markdown.

Repository validation follows the same engineering standards as local validation.

Workflow success provides repository-level engineering evidence.

---

# Stage 11 — Mission Control Evidence

Engineering completion evidence should include:

- Local Quality Gate PASS
- Pre-Commit PASS
- GitHub Actions PASS
- Commit identifier
- Engineering artifacts created
- Engineering artifacts modified

Mission Control determines publication readiness.

---

# Human Authority

## Controlled Mission-Scoped Git Authority

Claude Code may commit and push only when an active Founder or Mission Control mission explicitly identifies the AI name, Mission ID, repository, authorized branch, authorized paths or scope, and approved commit message.

Permission does not create capability. Shell and Git access, repository access, credentials, and authentication must be available independently. Before committing or pushing, Claude Code shall verify the configured remote, current branch, authorized base branch and SHA, working-tree scope, exact staged paths with `git diff --cached --name-status`, applicable validation, `git diff --cached --check`, and staged content for secrets or credentials. Authority must remain unexpired through publication.

Claude Code may fetch, pull fast-forward only, create or use the authorized mission branch, stage exact authorized files, commit with the approved message, push the authorized branch, and open or update a pull request. AI-authored work normally uses a mission branch.

Direct AI push to `main` is prohibited except for a narrowly scoped governance or communication update explicitly authorized by the Founder or Mission Control under the active temporary compensating control. Claude Code shall not self-approve or self-merge, force push, rewrite history, stage unrelated files, use `git add .` unless every working-tree change is authorized, resolve conflicts silently, bypass protection or review, alter branch protection, or expose credentials.

Merge authority is restricted to the Founder, a Mission Control-authorized human maintainer, or a separately approved automated merge mechanism after required checks and reviews. When Founder action is required, exact Git commands and expected evidence must appear directly in chat.

Pull-request handover, recurring communication, closure reconciliation, and archival shall follow `communication/AI_Communication_and_Handover_Protocol.md`. This workflow is subordinate to `AGENTS.md` and that active protocol.

---

Humans retain authority over:

- Engineering intent
- Engineering quality
- Repository modifications
- Repair approval
- Commit approval
- Push approval
- Merge approval
- Publication approval

Automation assists engineering work.

Automation never replaces engineering accountability.

---

# Safety Boundaries

Claude Code may commit or push only through the controlled mission-scoped authority above. Regardless of mission authorization, Claude Code shall never:

- Self-approve or self-merge pull requests.
- Force push or rewrite repository history.
- Approve engineering artifacts.
- Bypass required review or protection controls.
- Expose credentials or secrets.

All repository modifications require explicit Founder or Mission Control authorization.

---

# Engineering Evidence Chain

```text
Engineering Request
        │
        ▼
Claude Draft or Review
        │
        ▼
Founder Review
        │
        ▼
Repository Authoring
        │
        ▼
Automatic Quality Gate
        │
        ▼
Git Pre-Commit
        │
        ▼
Commit
        │
        ▼
GitHub Actions
        │
        ▼
Mission Control Evidence
        │
        ▼
Published Engineering Artifact
```

---

# Future Integrations

This workflow is designed to integrate with:

- ChatGPT Engineering Workflow
- Google Drive Engineering Repository
- Lovable Engineering Workspace
- Supabase Engineering Backend
- Mission Control Automation

All future integrations shall preserve the same engineering safety model and human authority.

---

# Related Engineering Artifacts

- Team_LIPS_Engineering_Operating_System_EOS_v1.0.md
- Engineering_Local_Workflow_v1.0.md
- Engineering_Automation_Architecture_v1.0.md
- ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md
- Engineering_Artifact_Workflow_v1.0.md
- Engineering_Quality_Gate_v1.0.md

---

# Revision History

| Version | Description |
|---------|-------------|
| v1.0 | Initial Claude ↔ GitHub Engineering Artifact Workflow |

---

# Approval

This document defines the approved workflow for transferring Claude-assisted engineering artifacts into the Team LIPS GitHub Engineering Repository.

**Stage B Alignment Validation:** PASS

**Mission Control Activation:** COMPLETE

**Founder Authorization:** RECORDED THROUGH MISSION CONTROL
