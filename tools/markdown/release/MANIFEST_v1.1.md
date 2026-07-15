# Markdown Toolkit Manifest

## Toolkit

Team LIPS Markdown Toolkit

## Version

v1.1

## Status

Ready for Engineering Review

---

## Included Runtime Files

| File | Version | Purpose |
|------|---------|---------|
| `repair_markdown.py` | v1.1 | Repairs Markdown corruption and optionally removes trailing whitespace |
| `lint_markdown.py` | v1.1 | Reports formatting issues and rule totals |
| `validate_markdown.py` | v1.0 | Validates Markdown structure |
| `repair_report.py` | v1.0 | Consolidates repair reports |
| `README.md` | v1.1 | Toolkit operating documentation |

---

## Release Documents

| Document | Status |
|----------|--------|
| `RELEASE_NOTES_v1.1.md` | Ready for Engineering Review |
| `CHANGELOG_v1.1.md` | Ready for Engineering Review |
| `MANIFEST_v1.1.md` | Ready for Engineering Review |

---

## New v1.1 Capability

```text
--trim-trailing-whitespace
```

Removes trailing spaces and tabs outside fenced code blocks.

---

## Governance Boundary

The toolkit repairs formatting.

It does not approve document meaning or publication.

Human review remains mandatory.