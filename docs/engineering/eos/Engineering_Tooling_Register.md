# TEAM LIPS

# Engineering Tooling Register

**Version:** v1.0

**Document Type:** Engineering Tool Register

**Classification:** Team LIPS Internal

**Program:** Team LIPS Engineering Operating System (EOS)

**Owner:** Infrastructure Operations

**Governance:** Mission Control

**Approved By:** Founder

---

# Purpose

The Engineering Tooling Register provides the official inventory of approved engineering tools used across Team LIPS.

It establishes a governed record of reusable engineering utilities, their purpose, ownership, version, and operational status.

The register ensures that engineering tools remain discoverable, traceable, and aligned with the Team LIPS Engineering Operating System (EOS).

---

# Scope

This register includes:

- Engineering utilities
- Documentation tools
- Validation tools
- Automation utilities
- Quality assurance tools
- Release support tools

Technology-specific application frameworks are maintained separately.

---

# Engineering Tool Register

| Tool | Version | Purpose | Owner | Status |
|------|---------|---------|-------|--------|
| Markdown Toolkit | v1.0 | Repairs, validates, lints, and reports on Markdown engineering documents | Infrastructure Operations | Approved |

## Factual Inventory Refresh — 2026-10-04

*Recorded under `SB-OPS-REPO-HOUSEKEEPING-1.2` (HK-010) as a factual inventory of tooling tracked in the repository at `main@ca0c3b0`. This refresh does not approve any tool, does not change the status of the entry above, and does not change this register's own governance status or EOS authority. Where approval is not recorded, the entry says so.*

| Tool | Location | Version / provenance | Purpose | Where used | Approval status in this register |
|------|----------|----------------------|---------|------------|----------------------------------|
| Markdown Toolkit v1.1 | `tools/markdown/` | Release records `tools/markdown/release/*_v1.1.md` (2026-07-14); release-notes status "Ready for Engineering Review" | Adds optional trailing-whitespace cleanup and compact lint summaries to the v1.0 components | Manual use | Not recorded |
| Markdown Quality Gate | `tools/markdown/quality_gate.py`, `quality_gate_core.py`, configuration `.markdown-gate.yml` | Added 2026-07-16 (SB-INF-1.8); not listed in the v1.0 or v1.1 manifests | Single entry point running repair-check, lint, and validation | `.github/workflows/markdown-quality-gate.yml` (advisory, not a required check); pre-commit gate | Not recorded |
| Pre-commit Markdown gate | `tools/markdown/pre_commit_markdown_gate.py`; hook `.githooks/pre-commit` | Added 2026-07-16 (SB-INF-1.8) | Runs the gate on staged Markdown files | Clones with `core.hooksPath=.githooks` set locally | Not recorded |
| VS Code save watcher | `tools/markdown/vscode_save_watcher.py` | Added 2026-07-17 (SB-INF-1.8) | Runs the gate after a Markdown file is saved | Optional local use; nothing in the repository starts it | Not recorded |
| Markdown artifact cleanup | `tools/markdown/cleanup_markdown_artifacts.py` | Added 2026-07-14 in the v1.1 release commit; not listed in the v1.1 manifest | Lists (`--check`) or deletes (`--apply`) generated repair artifacts | Manual use | Not recorded |
| Governance metadata tools | `tools/governance/governance_repository_audit.py`, `governance_metadata_initializer.py`, `markdown_governance_manager.py` | Added 2026-07-18 (SB-INF-1.9); no README or release record | Audit (read-only), initialize, or update approval metadata in selected Markdown documents | No current repository references | Not recorded |
| Supabase CLI wrapper | `scripts/supabase-cli.mjs` | Added 2026-07-27 (SB-INC-2026-001 / SB-MIG-1.2E-C) | Guarded Supabase CLI invocation requiring an explicit named target | `npm run supabase:test`, `npm run supabase:production` | Not recorded |
| Lambda parser build | `lambda/parser/build.mjs` | Added 2026-08-20 (SB-P-1.11-GC-38R) | Bundles the parser Lambda | `npm run build:lambda`; `.github/workflows/aws-gc38r-parser-deploy.yml` | Not recorded |
| OLE scripts | `organizational-learning/scripts/` (`harvest.mjs`, `validate.mjs`, `reconcile.mjs`, `context-pack.mjs`) | Added 2026-09-17 (SB-ORG-LEARNING-1.1) | Organizational Learning Engine harvesting, validation, reconciliation, context packs | `npm run ole:harvest`, `npm run ole:validate` | Not recorded |

---

# Tool Details

## Markdown Toolkit

### Version

v1.0

### Status

Approved

### Location

```text
tools/markdown/
```

### Components

| Component | Purpose |
|----------|---------|
| repair_markdown.py | Repairs common Markdown syntax issues while preserving document meaning |
| lint_markdown.py | Detects Markdown formatting inconsistencies without modifying files |
| validate_markdown.py | Verifies Markdown structural compliance with Team LIPS documentation standards |
| repair_report.py | Generates repair summaries and engineering reports |
| README.md | Toolkit documentation |
| release/ | Release documentation for the toolkit |

Additional files now present in `tools/markdown/` (`quality_gate.py`, `quality_gate_core.py`, `pre_commit_markdown_gate.py`, `vscode_save_watcher.py`, `cleanup_markdown_artifacts.py`) are recorded in the 2026-10-04 Factual Inventory Refresh above. They are not part of the approved v1.0 component list.

---

# Engineering Principles

Approved engineering tools shall:

- Support engineering workflows.
- Improve consistency and quality.
- Preserve governance.
- Never modify engineering intent.
- Maintain traceability.
- Produce reproducible results.
- Support human review rather than replace it.

Automation assists engineering.

Humans approve engineering.

---

# Governance

Engineering tools operate under the authority of:

1. Lighthouse Constitution
2. Smart Business Governance Framework (where applicable)
3. Team LIPS Engineering Operating System (EOS)
4. Founder Decisions
5. Mission Control Governance

No engineering tool may supersede approved governance.

---

# Lifecycle

Approved engineering tools follow the lifecycle:

```text
Proposal
    │
    ▼
Engineering Review
    │
    ▼
Mission Control Review
    │
    ▼
Founder Approval
    │
    ▼
Published
    │
    ▼
Operational Use
    │
    ▼
Maintenance
    │
    ▼
Retirement (if applicable)
```

---

# Adding New Tools

Before a new engineering tool is added to this register, it shall:

- Have a clearly defined engineering purpose.
- Avoid duplicating existing functionality.
- Include documentation.
- Be versioned.
- Undergo engineering review.
- Receive Mission Control approval.
- Be recorded in this register.

---

# Maintenance

**Owner:** Infrastructure Operations

Infrastructure Operations is responsible for:

- Maintaining the Engineering Tooling Register.
- Recording approved engineering tools.
- Updating version information.
- Tracking operational status.
- Preserving engineering history.

Historical records shall never be rewritten.

---

# Relationship to EOS

This register complements the Team LIPS Engineering Operating System by documenting the approved engineering utilities that support engineering governance and operations.

It does not replace any Engineering Standard and serves as an operational inventory of approved engineering tooling.

---

# Closing Statement

The Engineering Tooling Register provides the authoritative inventory of approved Team LIPS engineering utilities.

It ensures that engineering tools remain governed, traceable, reusable, and aligned with the principles of the Team LIPS Engineering Operating System while preserving human ownership of engineering decisions and publication.