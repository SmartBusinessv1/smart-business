# Markdown Toolkit Changelog

## v1.1

### Added

- Optional `--trim-trailing-whitespace` repair mode
- Trailing-whitespace repair counts
- Lint totals grouped by rule
- Explicit `MD011` total
- `--summary-only` lint output

### Changed

- Repair reports now record whether trailing-whitespace cleanup was enabled
- Whitespace cleanup excludes fenced code-block content

### Safety

- Trailing-whitespace cleanup remains opt-in
- Verified backups remain mandatory in apply mode
- No commit, push, merge, or branch action is performed

---

## v1.0

Initial Official Release.

### Added

- `repair_markdown.py`
- `lint_markdown.py`
- `validate_markdown.py`
- `repair_report.py`
- Toolkit documentation