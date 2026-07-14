# Team LIPS Markdown Toolkit

# Release Notes

## Version

v1.1

## Release Type

Minor Feature Release

## Status

Ready for Engineering Review

---

# Overview

Markdown Toolkit v1.1 extends the initial toolkit with controlled trailing-whitespace cleanup and improved lint reporting.

The release preserves the existing safety model:

- dry-run inspection before modification
- timestamped verified backups
- repair reports
- no automatic Git operations
- human review before publication

---

# Added

## Optional trailing-whitespace cleanup

`repair_markdown.py` now supports:

```powershell
--trim-trailing-whitespace
```

The option removes trailing spaces and tabs outside fenced code blocks.

It is not enabled by default.

## Lint summary reporting

`lint_markdown.py` now reports:

- total issues
- issues grouped by rule
- total trailing-whitespace issues (`MD011`)

It also supports:

```powershell
--summary-only
```

for compact reporting.

---

# Safety Boundary

Trailing-whitespace cleanup may remove Markdown hard-break spacing created by two trailing spaces.

Use it only after preview review confirms that the document does not depend on those hard breaks.

Fenced code blocks remain excluded from whitespace trimming.

---

# Compatibility

Markdown Toolkit v1.1 remains compatible with the Team LIPS Engineering Operating System v1.0 documentation workflow.

---

# Recommended Workflow

```text
repair_markdown.py --check
        ↓
repair_markdown.py --check --trim-trailing-whitespace
        ↓
Review proposed counts
        ↓
repair_markdown.py --apply --trim-trailing-whitespace
        ↓
lint_markdown.py --summary-only
        ↓
validate_markdown.py
        ↓
Markdown Preview
        ↓
Git Diff Review
        ↓
Engineering Review
```