# Team LIPS Markdown Repair Utility
# Version

Markdown Toolkit v1.0

Status: Published

Initial Official Release

Compatible with:

- Team LIPS Engineering Operating System v1.0

## Purpose

This utility repairs common Markdown corruption introduced by rich-text editors, copied AI output, Google Docs exports, and escaped Markdown rendering.

It is designed to reduce manual documentation repair while preserving human review and Git traceability.

---

## Core Principle

AI and automation assist.

Humans verify.

The utility does not determine whether document content is correct.

It repairs known Markdown syntax patterns only.

---

## Supported Repairs

The utility can repair:

- Escaped headings such as `\#`
- Escaped bold and italic markers
- Escaped unordered lists such as `\-`
- Escaped numbered lists such as `1\.`
- Escaped blockquotes such as `\>`
- Escaped horizontal rules such as `\---`
- Escaped table pipes
- Escaped inline backticks
- Escaped or excessive fenced-code markers
- Malformed text blocks such as `---text`
- Decorative escaped separator lines

---

## Safety Features

The utility:

- supports dry-run inspection
- creates timestamped backups
- verifies backups using SHA-256
- avoids modifying content inside valid fenced code blocks
- generates a repair report
- does not commit, push, merge, or change branches

---

## Check Mode

Run from the repository root:

```powershell
python "tools\markdown\repair_markdown.py" `
"docs\path\to\document.md" `
--check
```

Check mode reports proposed repairs without changing the document.

---

## Apply Mode

```powershell
python "tools\markdown\repair_markdown.py" `
"docs\path\to\document.md" `
--apply
```

Apply mode:

1. creates a timestamped backup,
2. verifies the backup,
3. repairs the target,
4. generates a repair report.

---

## Required Verification

After every repair:

1. Open Markdown Preview in VS Code.
2. Review Git diff.
3. Search for unresolved escaped Markdown.
4. Confirm tables, diagrams, code blocks, and governance wording.
5. Commit only after human approval.

---

## Governance Boundary

This utility does not authorize publication.

It does not approve content.

It does not replace Engineering Review, Mission Control Review, or Founder approval.

It is a formatting repair tool only.
---

## Toolkit Components

### `repair_markdown.py`

Repairs recognized Markdown syntax corruption.

Supports:

- check mode
- apply mode
- verified backups
- repair reports

### `lint_markdown.py`

Performs non-destructive formatting checks.

It detects:

- escaped Markdown syntax
- malformed fences
- trailing whitespace
- unclosed fenced blocks

### `validate_markdown.py`

Validates Markdown document structure.

It checks:

- document content
- heading structure
- fenced code blocks
- tables
- unresolved escaped Markdown

### `repair_report.py`

Combines individual repair reports into one summary.

It records:

- files processed
- files changed
- total repair counts
- unresolved suspicious lines

---

## Recommended Workflow

```text
Original Markdown
        ↓
repair_markdown.py --check
        ↓
repair_markdown.py --apply
        ↓
lint_markdown.py
        ↓
validate_markdown.py
        ↓
Markdown Preview
        ↓
Git Diff Review
        ↓
repair_report.py
        ↓
Engineering Review
```

Automation repairs formatting.

Humans approve meaning and publication.