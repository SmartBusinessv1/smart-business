#!/usr/bin/env python3
"""
Team LIPS Governance Repository Scanner

Audits Markdown governance metadata across a repository without modifying files.

Reports:
- Status
- Approval Status
- Approved By
- Approval Date
- Metadata completeness
- Governance style consistency
- Duplicate metadata
- Optional Markdown Quality Gate result

The scanner never edits files and performs no Git operations.
"""

from __future__ import annotations

import argparse
import csv
import dataclasses
import json
import re
import subprocess
import sys
from pathlib import Path
from typing import Sequence


DEFAULT_SCAN_LINES = 120
FIELD_ORDER = ("status", "approval_status", "approved_by", "approval_date")
FIELD_LABELS = {
    "status": "Status",
    "approval_status": "Approval Status",
    "approved_by": "Approved By",
    "approval_date": "Approval Date",
}

FIELD_PATTERN = re.compile(
    r"""
    ^
    (?P<indent>\s*)
    (?P<quote>>\s*)?
    (?P<label>
        \*\*(?:Status|Approval\ Status|Approved\ By|Approval\ Date):\*\*
        |
        (?:Status|Approval\ Status|Approved\ By|Approval\ Date):
    )
    (?P<spacing>\s*)
    (?P<value>.*?)
    (?P<ending>\s*)
    $
    """,
    re.VERBOSE | re.IGNORECASE,
)


@dataclasses.dataclass(frozen=True)
class Match:
    field: str
    line_index: int
    value: str
    bold: bool
    indent: str
    quote: str


@dataclasses.dataclass
class AuditRecord:
    path: str
    governed: bool
    status: str
    approval_status: str
    approved_by: str
    approval_date: str
    metadata_complete: bool
    compact_style: bool
    duplicate_fields: list[str]
    quality_gate: str
    issues: list[str]


class ScannerError(RuntimeError):
    pass


def canonical_field(raw_label: str) -> str:
    normalized = raw_label.replace("**", "").rstrip(":").strip().lower()
    mapping = {
        "status": "status",
        "approval status": "approval_status",
        "approved by": "approved_by",
        "approval date": "approval_date",
    }
    if normalized not in mapping:
        raise ScannerError(f"Unsupported metadata field: {raw_label!r}")
    return mapping[normalized]


def resolve_path(path: Path) -> Path:
    return path.expanduser().resolve()


def discover_markdown_files(
    repository_root: Path,
    include_paths: list[str],
    exclude_dirs: set[str],
) -> list[Path]:
    roots: list[Path]

    if include_paths:
        roots = []
        for raw in include_paths:
            candidate = Path(raw)
            if not candidate.is_absolute():
                candidate = repository_root / candidate
            candidate = resolve_path(candidate)

            try:
                candidate.relative_to(repository_root)
            except ValueError as exc:
                raise ScannerError(
                    f"Include path is outside the repository root: {candidate}"
                ) from exc

            if not candidate.exists():
                raise ScannerError(f"Include path not found: {candidate}")
            roots.append(candidate)
    else:
        roots = [repository_root]

    discovered: set[Path] = set()

    for root in roots:
        candidates = [root] if root.is_file() else root.rglob("*.md")

        for candidate in candidates:
            candidate = resolve_path(candidate)
            if candidate.suffix.lower() != ".md":
                continue

            relative = candidate.relative_to(repository_root)
            if any(part in exclude_dirs for part in relative.parts):
                continue

            discovered.add(candidate)

    return sorted(discovered, key=lambda path: str(path).lower())


def scan_metadata(
    lines: Sequence[str],
    scan_lines: int,
) -> tuple[dict[str, Match], list[str]]:
    matches: dict[str, Match] = {}
    duplicates: list[str] = []
    in_fence = False
    fence_marker: str | None = None

    for index, line in enumerate(lines[:scan_lines]):
        stripped = line.lstrip()

        if stripped.startswith("```") or stripped.startswith("~~~"):
            marker = stripped[:3]
            if not in_fence:
                in_fence = True
                fence_marker = marker
            elif marker == fence_marker:
                in_fence = False
                fence_marker = None
            continue

        if in_fence:
            continue

        content = line.rstrip("\r\n")
        match = FIELD_PATTERN.match(content)
        if not match:
            continue

        field = canonical_field(match.group("label"))

        if field in matches:
            if field not in duplicates:
                duplicates.append(field)
            continue

        matches[field] = Match(
            field=field,
            line_index=index,
            value=match.group("value").strip(),
            bold=match.group("label").startswith("**"),
            indent=match.group("indent") or "",
            quote=match.group("quote") or "",
        )

    return matches, duplicates


def check_compact_style(
    lines: Sequence[str],
    matches: dict[str, Match],
) -> bool:
    if any(field not in matches for field in FIELD_ORDER):
        return False

    indices = [matches[field].line_index for field in FIELD_ORDER]
    if indices != list(range(indices[0], indices[0] + len(FIELD_ORDER))):
        return False

    style = matches["status"]
    for field in FIELD_ORDER:
        item = matches[field]
        if (
            item.bold != style.bold
            or item.indent != style.indent
            or item.quote != style.quote
        ):
            return False

    return True


def find_quality_gate(
    repository_root: Path,
    explicit_path: str | None,
) -> Path | None:
    if explicit_path:
        candidate = Path(explicit_path)
        if not candidate.is_absolute():
            candidate = repository_root / candidate
        candidate = resolve_path(candidate)
        if not candidate.is_file():
            raise ScannerError(f"Quality Gate script not found: {candidate}")
        return candidate

    default = repository_root / "tools" / "markdown" / "quality_gate.py"
    return default if default.is_file() else None


def run_quality_gate(
    quality_gate: Path,
    document: Path,
    repository_root: Path,
) -> str:
    result = subprocess.run(
        [sys.executable, str(quality_gate), str(document)],
        cwd=repository_root,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        check=False,
    )
    return "PASS" if result.returncode == 0 else "FAIL"


def audit_document(
    document: Path,
    repository_root: Path,
    scan_lines: int,
    quality_gate: Path | None,
    run_gate: bool,
) -> AuditRecord:
    try:
        text = document.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        relative = str(document.relative_to(repository_root))
        return AuditRecord(
            path=relative,
            governed=False,
            status="",
            approval_status="",
            approved_by="",
            approval_date="",
            metadata_complete=False,
            compact_style=False,
            duplicate_fields=[],
            quality_gate="NOT RUN",
            issues=["File is not valid UTF-8"],
        )

    lines = text.splitlines(keepends=True)
    matches, duplicate_fields = scan_metadata(lines, scan_lines)
    governed = "status" in matches

    values = {
        field: matches[field].value if field in matches else ""
        for field in FIELD_ORDER
    }

    complete = governed and all(field in matches for field in FIELD_ORDER)
    compact = governed and complete and not duplicate_fields and check_compact_style(
        lines, matches
    )

    issues: list[str] = []

    if duplicate_fields:
        labels = ", ".join(FIELD_LABELS[field] for field in duplicate_fields)
        issues.append(f"Duplicate metadata: {labels}")

    if governed:
        missing = [
            FIELD_LABELS[field]
            for field in FIELD_ORDER
            if field not in matches
        ]
        if missing:
            issues.append("Missing metadata: " + ", ".join(missing))
        if complete and not compact:
            issues.append("Metadata block is not compact and standardized")
    elif matches:
        issues.append("Approval metadata exists without a Status field")

    gate_result = "NOT RUN"
    if run_gate:
        if quality_gate is None:
            gate_result = "UNAVAILABLE"
        else:
            gate_result = run_quality_gate(
                quality_gate,
                document,
                repository_root,
            )
            if gate_result == "FAIL":
                issues.append("Markdown Quality Gate failed")

    return AuditRecord(
        path=str(document.relative_to(repository_root)),
        governed=governed,
        status=values["status"],
        approval_status=values["approval_status"],
        approved_by=values["approved_by"],
        approval_date=values["approval_date"],
        metadata_complete=complete,
        compact_style=compact,
        duplicate_fields=[
            FIELD_LABELS[field] for field in duplicate_fields
        ],
        quality_gate=gate_result,
        issues=issues,
    )


def print_table(records: Sequence[AuditRecord]) -> None:
    headers = [
        "Document",
        "Status",
        "Approval",
        "Complete",
        "Style",
        "Quality Gate",
        "Issues",
    ]

    rows: list[list[str]] = []

    for record in records:
        rows.append(
            [
                record.path,
                record.status or ("N/A" if not record.governed else ""),
                record.approval_status or (
                    "N/A" if not record.governed else ""
                ),
                "YES" if record.metadata_complete else "NO",
                "PASS" if record.compact_style else "FAIL",
                record.quality_gate,
                "; ".join(record.issues) or "None",
            ]
        )

    widths = [
        max(len(headers[index]), *(len(row[index]) for row in rows))
        for index in range(len(headers))
    ]

    def render(row: Sequence[str]) -> str:
        return " | ".join(
            value.ljust(widths[index])
            for index, value in enumerate(row)
        )

    print(render(headers))
    print("-+-".join("-" * width for width in widths))
    for row in rows:
        print(render(row))


def write_json(records: Sequence[AuditRecord], output: Path) -> None:
    payload = [dataclasses.asdict(record) for record in records]
    output.write_text(
        json.dumps(payload, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )


def write_csv(records: Sequence[AuditRecord], output: Path) -> None:
    fieldnames = [
        "path",
        "governed",
        "status",
        "approval_status",
        "approved_by",
        "approval_date",
        "metadata_complete",
        "compact_style",
        "duplicate_fields",
        "quality_gate",
        "issues",
    ]

    with output.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()

        for record in records:
            row = dataclasses.asdict(record)
            row["duplicate_fields"] = "; ".join(record.duplicate_fields)
            row["issues"] = "; ".join(record.issues)
            writer.writerow(row)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description=(
            "Audit governance metadata across Markdown documents without "
            "modifying files."
        )
    )

    parser.add_argument(
        "--repository-root",
        default=".",
        help="Repository root. Defaults to the current directory.",
    )
    parser.add_argument(
        "--include",
        action="append",
        default=[],
        help=(
            "File or directory to scan. Repeat as needed. "
            "Defaults to the entire repository."
        ),
    )
    parser.add_argument(
        "--exclude-dir",
        action="append",
        default=[],
        help=(
            "Directory name to exclude. Repeat as needed. "
            "Common defaults are always excluded."
        ),
    )
    parser.add_argument(
        "--scan-lines",
        type=int,
        default=DEFAULT_SCAN_LINES,
        help=f"Metadata scan window. Default: {DEFAULT_SCAN_LINES}.",
    )
    parser.add_argument(
        "--governed-only",
        action="store_true",
        help="Show only documents containing a Status field.",
    )
    parser.add_argument(
        "--problems-only",
        action="store_true",
        help="Show only records with metadata, style, or Quality Gate issues.",
    )
    parser.add_argument(
        "--run-quality-gate",
        action="store_true",
        help="Run the Markdown Quality Gate for every included document.",
    )
    parser.add_argument(
        "--quality-gate",
        help=(
            "Path to quality_gate.py. Defaults to "
            "tools/markdown/quality_gate.py."
        ),
    )
    parser.add_argument(
        "--json",
        dest="json_output",
        help="Optional path for a JSON audit report.",
    )
    parser.add_argument(
        "--csv",
        dest="csv_output",
        help="Optional path for a CSV audit report.",
    )

    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()

    try:
        repository_root = resolve_path(Path(args.repository_root))
        if not repository_root.is_dir():
            raise ScannerError(
                f"Repository root is not a directory: {repository_root}"
            )

        if args.scan_lines < 1:
            raise ScannerError("--scan-lines must be at least 1.")

        exclude_dirs = {
            ".git",
            ".github",
            ".venv",
            "venv",
            "node_modules",
            "dist",
            "build",
            "__pycache__",
        }
        exclude_dirs.update(args.exclude_dir)

        documents = discover_markdown_files(
            repository_root=repository_root,
            include_paths=args.include,
            exclude_dirs=exclude_dirs,
        )

        quality_gate = None
        if args.run_quality_gate:
            quality_gate = find_quality_gate(
                repository_root,
                args.quality_gate,
            )

        records = [
            audit_document(
                document=document,
                repository_root=repository_root,
                scan_lines=args.scan_lines,
                quality_gate=quality_gate,
                run_gate=args.run_quality_gate,
            )
            for document in documents
        ]

        if args.governed_only:
            records = [record for record in records if record.governed]

        if args.problems_only:
            records = [
                record for record in records
                if record.issues
                or (record.governed and not record.metadata_complete)
                or (record.governed and not record.compact_style)
                or record.quality_gate == "FAIL"
            ]

        print("TEAM LIPS GOVERNANCE REPOSITORY AUDIT")
        print(f"\nRepository: {repository_root}")
        print(f"Markdown files inspected: {len(documents)}")
        print(f"Records shown: {len(records)}\n")

        if records:
            print_table(records)
        else:
            print("No matching records.")

        governed = [record for record in records if record.governed]
        complete = [
            record for record in governed if record.metadata_complete
        ]
        standardized = [
            record for record in governed if record.compact_style
        ]
        problem_records = [
            record for record in records if record.issues
        ]

        print("\nSummary:")
        print(f"- Governed documents shown: {len(governed)}")
        print(f"- Metadata complete: {len(complete)}")
        print(f"- Compact standardized style: {len(standardized)}")
        print(f"- Records with issues: {len(problem_records)}")

        if args.json_output:
            output = Path(args.json_output)
            if not output.is_absolute():
                output = repository_root / output
            output = resolve_path(output)
            output.parent.mkdir(parents=True, exist_ok=True)
            write_json(records, output)
            print(f"- JSON report: {output}")

        if args.csv_output:
            output = Path(args.csv_output)
            if not output.is_absolute():
                output = repository_root / output
            output = resolve_path(output)
            output.parent.mkdir(parents=True, exist_ok=True)
            write_csv(records, output)
            print(f"- CSV report: {output}")

        print("\nNo files were modified.")
        print("No Git operations were performed.")

        return 1 if problem_records else 0

    except ScannerError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2
    except KeyboardInterrupt:
        print("Cancelled by user.", file=sys.stderr)
        return 130


if __name__ == "__main__":
    raise SystemExit(main())
