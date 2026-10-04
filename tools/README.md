# Team LIPS Engineering Tools

## Purpose

This directory contains reusable engineering utilities developed and maintained for Team LIPS.

These tools support engineering governance, documentation quality, automation, verification, and operational efficiency across Team LIPS projects.

Utilities in this directory are designed to improve engineering workflows while preserving human ownership of decisions, governance, and publication.

---

## Current Toolkits

| Toolkit | Purpose | Status |
|----------|---------|--------|
| Markdown | Markdown repair, linting, validation, reporting, and the Markdown Quality Gate | Published (v1.0, v1.1 release records in `markdown/release/`) |
| Governance | Inspect, audit, and add approval metadata in explicitly selected Markdown documents | Present in repository; no README, release record, or Tooling Register entry; no current repository references |

---

## Directory Structure

*Reconciled with tracked files on 2026-10-04 (`SB-OPS-REPO-HOUSEKEEPING-1.2`, HK-021).*

```text
tools/
│
├── README.md
│
├── markdown/
│   ├── README.md
│   ├── repair_markdown.py              Repair common Markdown issues (--check / --apply)
│   ├── lint_markdown.py                Lint Markdown (never edits the target; optional report file)
│   ├── validate_markdown.py            Validate Markdown structure
│   ├── repair_report.py                Summarize repair reports
│   ├── quality_gate.py                 Quality Gate entry point (used by the GitHub workflow)
│   ├── quality_gate_core.py            Shared Quality Gate checks and configuration (.markdown-gate.yml)
│   ├── pre_commit_markdown_gate.py     Gate for staged files (called by .githooks/pre-commit)
│   ├── vscode_save_watcher.py          Optional local watcher: run the gate after save
│   ├── cleanup_markdown_artifacts.py   List (--check) or delete (--apply) generated repair artifacts
│   └── release/                        CHANGELOG, MANIFEST, RELEASE_NOTES for v1.0 and v1.1
│
└── governance/
    ├── governance_repository_audit.py      Audit governance metadata without modifying files
    ├── governance_metadata_initializer.py  Add missing approval metadata fields (--check / --apply)
    └── markdown_governance_manager.py      Inspect or update governance metadata (--check / --apply)
```

Where tools are wired in:

- `.github/workflows/markdown-quality-gate.yml` runs `markdown/quality_gate.py` on changed Markdown files. The gate is advisory, not a required merge check (`communication/governance/branch-protection-verification.md`).
- `.githooks/pre-commit` runs `markdown/pre_commit_markdown_gate.py` only on clones where `git config core.hooksPath .githooks` has been set locally.

Other repository tooling outside `tools/`: `scripts/supabase-cli.mjs` (`npm run supabase:test` / `supabase:production`), `lambda/parser/build.mjs` (`npm run build:lambda`), and `organizational-learning/scripts/` (`npm run ole:harvest` / `ole:validate`).

Future engineering toolkits may be added alongside the Markdown toolkit.

Examples include:

- documentation/
- github/
- automation/
- quality/
- release/
- archive/

---

## Engineering Principles

All Team LIPS engineering tools shall follow these principles:

- Humans Serving Humans
- AI Assistant, Not AI Judge
- Governance Before Implementation
- Evidence Over Assumptions
- Automation Supports Humans
- Platform Independence
- Traceability
- Reproducibility

Automation improves engineering quality but never replaces engineering judgment.

---

## Governance

Engineering tools are governed by the approved Team LIPS Engineering Operating System (EOS).

Tool development shall remain consistent with:

- Lighthouse Constitution
- Smart Business Governance Framework
- Team LIPS Engineering Operating System (EOS)

---

## Contribution Guidelines

Before introducing a new engineering toolkit:

1. Define its engineering purpose.
2. Ensure it does not duplicate existing functionality.
3. Document its usage.
4. Include release documentation where applicable.
5. Verify compatibility with the Engineering Operating System.

---

## Versioning

Each toolkit manages its own version history and release documentation.

Tool-specific release information is maintained within the respective toolkit's `release` directory.

---

## Ownership

**Owner:** Infrastructure Operations

**Governance:** Mission Control

**Publication Authority:** Founder

---
---

## Version 1.1

Markdown Toolkit v1.1 adds controlled trailing-whitespace cleanup and improved lint summaries.

### Check whitespace cleanup

```powershell
python "tools\markdown\repair_markdown.py" `
"docs\path\to\document.md" `
--check `
--trim-trailing-whitespace
```

### Apply whitespace cleanup

```powershell
python "tools\markdown\repair_markdown.py" `
"docs\path\to\document.md" `
--apply `
--trim-trailing-whitespace
```

Trailing-whitespace cleanup is optional and excludes fenced code blocks.

Review Markdown Preview after use because two trailing spaces can represent an intentional Markdown hard break.

### Compact lint summary

```powershell
python "tools\markdown\lint_markdown.py" `
"docs\path\to\document.md" `
--summary-only
```

The linter reports:

- total issues
- issues grouped by rule
- remaining trailing-whitespace issues (`MD011`)

## Closing Statement

The Team LIPS Engineering Tools directory provides reusable engineering capabilities that strengthen consistency, quality, and governance across Team LIPS projects.

These tools automate repetitive engineering tasks while ensuring that human review remains the final authority for engineering decisions and publication.