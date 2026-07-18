#!/usr/bin/env python3
"""
Team LIPS Governance Metadata Initializer

Adds missing approval metadata fields to explicitly selected Markdown documents
without changing the document's existing status value.

Supported fields:
- Status
- Approval Status
- Approved By
- Approval Date

Safety characteristics:
- Explicit single-file or batch targeting only.
- Scans only the first metadata window.
- Ignores fenced code blocks.
- Refuses duplicate or ambiguous metadata fields.
- Adds fields only after an existing Status line.
- Preview mode shows the exact diff.
- Apply mode runs the existing Markdown Quality Gate.
- Rolls back all changed files if validation fails.
- Performs no Git operations.
"""

from __future__ import annotations

import argparse
import dataclasses
import difflib
import re
import subprocess
import sys
from pathlib import Path
from typing import Sequence


DEFAULT_SCAN_LINES = 120
DEFAULT_APPROVAL_STATUS = "Pending"
DEFAULT_APPROVED_BY = "Pending"
DEFAULT_APPROVAL_DATE = "Pending"

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
class MetadataMatch:
    field: str
    line_index: int
    value: str
    indent: str
    quote: str
    bold: bool
    newline: str


@dataclasses.dataclass
class InitializationPlan:
    path: Path
    original_text: str
    original_lines: list[str]
    updated_lines: list[str]
    inserted_fields: list[tuple[str, str]]

    @property
    def changed(self) -> bool:
        return self.original_lines != self.updated_lines

    @property
    def updated_text(self) -> str:
        return "".join(self.updated_lines)


class InitializerError(RuntimeError):
    """Safe, user-correctable initializer failure."""


def canonical_field(raw_label: str) -> str:
    normalized = raw_label.replace("**", "").rstrip(":").strip().lower()
    mapping = {
        "status": "status",
        "approval status": "approval_status",
        "approved by": "approved_by",
        "approval date": "approval_date",
    }
    if normalized not in mapping:
        raise InitializerError(f"Unsupported metadata field: {raw_label!r}")
    return mapping[normalized]


def resolve_path(path: Path) -> Path:
    return path.expanduser().resolve()


def read_text(path: Path) -> tuple[str, list[str]]:
    try:
        text = path.read_text(encoding="utf-8")
    except UnicodeDecodeError as exc:
        raise InitializerError(f"{path}: file is not valid UTF-8.") from exc
    return text, text.splitlines(keepends=True)


def scan_metadata(
    lines: Sequence[str],
    scan_lines: int,
) -> dict[str, MetadataMatch]:
    matches: dict[str, MetadataMatch] = {}
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

        newline = ""
        content = line
        if content.endswith("\r\n"):
            content, newline = content[:-2], "\r\n"
        elif content.endswith("\n"):
            content, newline = content[:-1], "\n"

        match = FIELD_PATTERN.match(content)
        if not match:
            continue

        field = canonical_field(match.group("label"))
        if field in matches:
            first = matches[field].line_index + 1
            second = index + 1
            raise InitializerError(
                f"Ambiguous metadata: '{FIELD_LABELS[field]}' appears more than "
                f"once within the scan window (lines {first} and {second})."
            )

        raw_label = match.group("label")
        matches[field] = MetadataMatch(
            field=field,
            line_index=index,
            value=match.group("value").strip(),
            indent=match.group("indent") or "",
            quote=match.group("quote") or "",
            bold=raw_label.startswith("**"),
            newline=newline,
        )

    return matches


def load_targets(
    single_file: str | None,
    batch_file: str | None,
    repository_root: Path,
) -> list[Path]:
    if bool(single_file) == bool(batch_file):
        raise InitializerError("Provide exactly one of --file or --batch.")

    if single_file:
        raw_targets = [Path(single_file)]
    else:
        batch_path = resolve_path(repository_root / Path(batch_file or ""))
        if not batch_path.is_file():
            raise InitializerError(f"Batch file not found: {batch_path}")

        raw_targets = []
        for line_number, raw_line in enumerate(
            batch_path.read_text(encoding="utf-8").splitlines(),
            start=1,
        ):
            value = raw_line.strip()
            if not value or value.startswith("#"):
                continue
            if "\x00" in value:
                raise InitializerError(
                    f"{batch_path}:{line_number}: invalid null character."
                )
            raw_targets.append(Path(value))

        if not raw_targets:
            raise InitializerError(
                f"Batch file contains no Markdown paths: {batch_path}"
            )

    targets: list[Path] = []
    seen: set[Path] = set()

    for raw_target in raw_targets:
        candidate = (
            raw_target
            if raw_target.is_absolute()
            else repository_root / raw_target
        )
        candidate = resolve_path(candidate)

        try:
            candidate.relative_to(repository_root)
        except ValueError as exc:
            raise InitializerError(
                f"Target is outside the repository root: {candidate}"
            ) from exc

        if candidate.suffix.lower() != ".md":
            raise InitializerError(
                f"Only Markdown files are supported: {candidate}"
            )
        if not candidate.is_file():
            raise InitializerError(f"Document not found: {candidate}")

        if candidate not in seen:
            targets.append(candidate)
            seen.add(candidate)

    return targets


def infer_newline(lines: Sequence[str], status: MetadataMatch) -> str:
    if status.newline:
        return status.newline

    for line in lines:
        if line.endswith("\r\n"):
            return "\r\n"
        if line.endswith("\n"):
            return "\n"

    return "\n"


def format_field(
    status: MetadataMatch,
    label: str,
    value: str,
    newline: str,
) -> str:
    if status.bold:
        field_text = f"**{label}:** {value}"
    else:
        field_text = f"{label}: {value}"

    return f"{status.indent}{status.quote}{field_text}{newline}"


def make_plan(
    path: Path,
    scan_lines: int,
    approval_status: str,
    approved_by: str,
    approval_date: str,
) -> InitializationPlan:
    original_text, original_lines = read_text(path)
    matches = scan_metadata(original_lines, scan_lines)

    status = matches.get("status")
    if status is None:
        raise InitializerError(
            f"{path}: no Status field found within the first {scan_lines} lines. "
            "No insertion point can be determined safely."
        )

    missing = [
        field
        for field in ("approval_status", "approved_by", "approval_date")
        if field not in matches
    ]

    if not missing:
        return InitializationPlan(
            path=path,
            original_text=original_text,
            original_lines=original_lines,
            updated_lines=list(original_lines),
            inserted_fields=[],
        )

    values = {
        "approval_status": approval_status,
        "approved_by": approved_by,
        "approval_date": approval_date,
    }

    newline = infer_newline(original_lines, status)
    insertion_index = status.line_index + 1

    insertion_lines: list[str] = []
    inserted_fields: list[tuple[str, str]] = []

    for field in ("approval_status", "approved_by", "approval_date"):
        if field not in missing:
            continue
        label = FIELD_LABELS[field]
        value = values[field]
        insertion_lines.append(
            format_field(status, label, value, newline)
        )
        inserted_fields.append((label, value))

    updated_lines = list(original_lines)

    # Preserve a visually separated metadata block when the original document
    # already uses blank lines between metadata entries.
    add_blank_lines = (
        insertion_index < len(original_lines)
        and original_lines[insertion_index].strip() == ""
    )

    if add_blank_lines:
        separated: list[str] = []
        for index, line in enumerate(insertion_lines):
            if index > 0:
                separated.append(newline)
            separated.append(line)
        insertion_lines = separated

    updated_lines[insertion_index:insertion_index] = insertion_lines

    return InitializationPlan(
        path=path,
        original_text=original_text,
        original_lines=original_lines,
        updated_lines=updated_lines,
        inserted_fields=inserted_fields,
    )


def print_check(
    plan: InitializationPlan,
    repository_root: Path,
) -> None:
    relative = plan.path.relative_to(repository_root)
    print(f"\nDocument: {relative}")

    if plan.inserted_fields:
        print("Missing fields:")
        for label, value in plan.inserted_fields:
            print(f"- {label}: would initialize as {value!r}")
    else:
        print("Metadata schema already complete.")


def print_preview(
    plan: InitializationPlan,
    repository_root: Path,
) -> None:
    relative = plan.path.relative_to(repository_root)
    print(f"\nDocument: {relative}")

    if not plan.changed:
        print("No changes required.")
        return

    for label, value in plan.inserted_fields:
        print(f"- Add {label}: {value!r}")

    diff = difflib.unified_diff(
        plan.original_lines,
        plan.updated_lines,
        fromfile=str(relative),
        tofile=str(relative),
        lineterm="",
    )
    print("\n".join(diff))


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
            raise InitializerError(
                f"Quality Gate script not found: {candidate}"
            )
        return candidate

    default = repository_root / "tools" / "markdown" / "quality_gate.py"
    return default if default.is_file() else None


def run_quality_gate(
    quality_gate: Path,
    files: Sequence[Path],
    repository_root: Path,
) -> None:
    for path in files:
        relative = path.relative_to(repository_root)
        print(f"\n[QUALITY GATE] Validating: {relative}")

        result = subprocess.run(
            [sys.executable, str(quality_gate), str(path)],
            cwd=repository_root,
            check=False,
        )

        if result.returncode != 0:
            raise InitializerError(
                f"Quality Gate failed for {relative} with exit code "
                f"{result.returncode}."
            )


def apply_transactionally(
    plans: Sequence[InitializationPlan],
    repository_root: Path,
    quality_gate: Path | None,
    skip_quality_gate: bool,
) -> None:
    changed = [plan for plan in plans if plan.changed]

    if not changed:
        print("\nNo documents required initialization.")
        return

    originals = {
        plan.path: plan.original_text
        for plan in changed
    }

    try:
        for plan in changed:
            plan.path.write_text(
                plan.updated_text,
                encoding="utf-8",
                newline="",
            )

        if not skip_quality_gate:
            if quality_gate is None:
                raise InitializerError(
                    "Quality Gate script was not found. Use --quality-gate PATH "
                    "or explicitly use --skip-quality-gate."
                )

            run_quality_gate(
                quality_gate=quality_gate,
                files=[plan.path for plan in changed],
                repository_root=repository_root,
            )

    except Exception:
        for path, original_text in originals.items():
            path.write_text(
                original_text,
                encoding="utf-8",
                newline="",
            )

        print(
            "\n[ROLLBACK] Original file contents restored.",
            file=sys.stderr,
        )
        raise

    print("\nInitialized documents:")
    for plan in changed:
        relative = plan.path.relative_to(repository_root)
        print(
            f"- {relative} "
            f"({len(plan.inserted_fields)} field(s) added)"
        )

    print("\nGit operations:")
    print("- No commit performed.")
    print("- No push performed.")
    print("- No merge performed.")
    print("- No branch operation performed.")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description=(
            "Add missing approval metadata fields after an existing Status "
            "field in explicitly selected Markdown documents."
        )
    )

    target = parser.add_mutually_exclusive_group(required=True)
    target.add_argument(
        "--file",
        help="Single Markdown document path.",
    )
    target.add_argument(
        "--batch",
        help=(
            "Text file containing one Markdown path per line. "
            "Blank lines and lines beginning with # are ignored."
        ),
    )

    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument(
        "--check",
        action="store_true",
        help="Report missing metadata fields without changing files.",
    )
    mode.add_argument(
        "--preview",
        action="store_true",
        help="Show the proposed insertions and diff without changing files.",
    )
    mode.add_argument(
        "--apply",
        action="store_true",
        help="Insert missing fields and run the Markdown Quality Gate.",
    )

    parser.add_argument(
        "--approval-status",
        default=DEFAULT_APPROVAL_STATUS,
        help=f"Initializer value. Default: {DEFAULT_APPROVAL_STATUS}.",
    )
    parser.add_argument(
        "--approved-by",
        default=DEFAULT_APPROVED_BY,
        help=f"Initializer value. Default: {DEFAULT_APPROVED_BY}.",
    )
    parser.add_argument(
        "--approval-date",
        default=DEFAULT_APPROVAL_DATE,
        help=f"Initializer value. Default: {DEFAULT_APPROVAL_DATE}.",
    )
    parser.add_argument(
        "--repository-root",
        default=".",
        help="Repository root. Defaults to the current directory.",
    )
    parser.add_argument(
        "--scan-lines",
        type=int,
        default=DEFAULT_SCAN_LINES,
        help=f"Metadata scan window. Default: {DEFAULT_SCAN_LINES}.",
    )
    parser.add_argument(
        "--quality-gate",
        help=(
            "Path to quality_gate.py. Defaults to "
            "tools/markdown/quality_gate.py."
        ),
    )
    parser.add_argument(
        "--skip-quality-gate",
        action="store_true",
        help=(
            "Apply without running the Quality Gate. Use only when "
            "validation will be performed separately."
        ),
    )

    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()

    try:
        repository_root = resolve_path(Path(args.repository_root))

        if not repository_root.is_dir():
            raise InitializerError(
                f"Repository root is not a directory: {repository_root}"
            )

        if args.scan_lines < 1:
            raise InitializerError("--scan-lines must be at least 1.")

        targets = load_targets(
            single_file=args.file,
            batch_file=args.batch,
            repository_root=repository_root,
        )

        plans = [
            make_plan(
                path=path,
                scan_lines=args.scan_lines,
                approval_status=args.approval_status,
                approved_by=args.approved_by,
                approval_date=args.approval_date,
            )
            for path in targets
        ]

        if args.check:
            print("TEAM LIPS GOVERNANCE METADATA INITIALIZER CHECK")
            for plan in plans:
                print_check(plan, repository_root)
            print("\nNo files were modified.")
            return 0

        if args.preview:
            print("TEAM LIPS GOVERNANCE METADATA INITIALIZER PREVIEW")
            for plan in plans:
                print_preview(plan, repository_root)
            print("\nPreview only. No files were modified.")
            return 0

        quality_gate = find_quality_gate(
            repository_root,
            args.quality_gate,
        )

        apply_transactionally(
            plans=plans,
            repository_root=repository_root,
            quality_gate=quality_gate,
            skip_quality_gate=args.skip_quality_gate,
        )
        return 0

    except InitializerError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2
    except KeyboardInterrupt:
        print("Cancelled by user.", file=sys.stderr)
        return 130


if __name__ == "__main__":
    raise SystemExit(main())
