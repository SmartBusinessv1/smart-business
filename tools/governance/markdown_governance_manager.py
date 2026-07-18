#!/usr/bin/env python3
"""Safely inspect and update approval metadata in Markdown documents."""

from __future__ import annotations

import argparse
import dataclasses
import difflib
import re
import subprocess
import sys
from pathlib import Path
from typing import Iterable, Sequence

FIELD_LABELS = {
    "status": "Status",
    "approval_status": "Approval Status",
    "approved_by": "Approved By",
    "approval_date": "Approval Date",
}
DEFAULT_SCAN_LINES = 120

FIELD_PATTERN = re.compile(
    r"""^
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
    $""",
    re.VERBOSE | re.IGNORECASE,
)


@dataclasses.dataclass(frozen=True)
class Match:
    field: str
    line_index: int
    value: str
    prefix: str
    suffix: str


@dataclasses.dataclass
class DocumentPlan:
    path: Path
    original_text: str
    original_lines: list[str]
    matches: dict[str, Match]
    updated_lines: list[str]
    changes: list[tuple[str, str, str]]

    @property
    def changed(self) -> bool:
        return self.original_lines != self.updated_lines

    @property
    def updated_text(self) -> str:
        return "".join(self.updated_lines)


class GovernanceError(RuntimeError):
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
        raise GovernanceError(f"Unsupported metadata field: {raw_label!r}")
    return mapping[normalized]


def read_text_preserving_newlines(path: Path) -> tuple[str, list[str]]:
    try:
        text = path.read_text(encoding="utf-8")
    except UnicodeDecodeError as exc:
        raise GovernanceError(f"{path}: file is not valid UTF-8.") from exc
    return text, text.splitlines(keepends=True)


def scan_metadata(lines: Sequence[str], scan_lines: int) -> dict[str, Match]:
    matches: dict[str, Match] = {}
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
            raise GovernanceError(
                f"Ambiguous metadata: '{FIELD_LABELS[field]}' appears more than once "
                f"within the scan window (lines {first} and {second})."
            )

        value = match.group("value").strip()
        value_start = match.start("value")
        value_end = match.end("value")
        matches[field] = Match(
            field=field,
            line_index=index,
            value=value,
            prefix=content[:value_start],
            suffix=content[value_end:] + newline,
        )

    return matches


def normalized_path(path: Path) -> Path:
    return path.expanduser().resolve()


def load_targets(
    single_file: str | None,
    batch_file: str | None,
    repository_root: Path,
) -> list[Path]:
    if bool(single_file) == bool(batch_file):
        raise GovernanceError("Provide exactly one of --file or --batch.")

    if single_file:
        targets = [Path(single_file)]
    else:
        batch_path = normalized_path(repository_root / Path(batch_file or ""))
        if not batch_path.is_file():
            raise GovernanceError(f"Batch file not found: {batch_path}")
        targets = []
        for line_number, raw_line in enumerate(
            batch_path.read_text(encoding="utf-8").splitlines(), start=1
        ):
            value = raw_line.strip()
            if not value or value.startswith("#"):
                continue
            if "\x00" in value:
                raise GovernanceError(
                    f"{batch_path}:{line_number}: invalid null character."
                )
            targets.append(Path(value))
        if not targets:
            raise GovernanceError(f"Batch file contains no document paths: {batch_path}")

    resolved: list[Path] = []
    seen: set[Path] = set()

    for target in targets:
        candidate = target if target.is_absolute() else repository_root / target
        candidate = normalized_path(candidate)
        try:
            candidate.relative_to(repository_root)
        except ValueError as exc:
            raise GovernanceError(
                f"Target is outside the repository root: {candidate}"
            ) from exc
        if candidate.suffix.lower() != ".md":
            raise GovernanceError(f"Only Markdown files are supported: {candidate}")
        if not candidate.is_file():
            raise GovernanceError(f"Document not found: {candidate}")
        if candidate not in seen:
            resolved.append(candidate)
            seen.add(candidate)

    return resolved


def make_plan(
    path: Path,
    updates: dict[str, str],
    scan_lines: int,
    require_fields: Iterable[str],
) -> DocumentPlan:
    original_text, original_lines = read_text_preserving_newlines(path)
    matches = scan_metadata(original_lines, scan_lines)

    if not matches:
        raise GovernanceError(
            f"{path}: no supported governance metadata found within "
            f"the first {scan_lines} lines."
        )

    missing_required = [field for field in require_fields if field not in matches]
    if missing_required:
        labels = ", ".join(FIELD_LABELS[field] for field in missing_required)
        raise GovernanceError(f"{path}: required metadata field(s) missing: {labels}")

    requested_but_missing = [field for field in updates if field not in matches]
    if requested_but_missing:
        labels = ", ".join(FIELD_LABELS[field] for field in requested_but_missing)
        raise GovernanceError(
            f"{path}: requested metadata field(s) not found: {labels}. "
            "No fields were added automatically."
        )

    updated_lines = list(original_lines)
    changes: list[tuple[str, str, str]] = []

    for field, new_value in updates.items():
        match = matches[field]
        old_value = match.value
        if old_value == new_value:
            continue
        updated_lines[match.line_index] = f"{match.prefix}{new_value}{match.suffix}"
        changes.append((FIELD_LABELS[field], old_value, new_value))

    return DocumentPlan(
        path=path,
        original_text=original_text,
        original_lines=original_lines,
        matches=matches,
        updated_lines=updated_lines,
        changes=changes,
    )


def print_check(plan: DocumentPlan, repository_root: Path) -> None:
    print(f"\nDocument: {plan.path.relative_to(repository_root)}")
    for field in FIELD_LABELS:
        match = plan.matches.get(field)
        value = match.value if match else "[not present]"
        print(f"- {FIELD_LABELS[field]}: {value}")


def print_preview(plan: DocumentPlan, repository_root: Path) -> None:
    relative = plan.path.relative_to(repository_root)
    print(f"\nDocument: {relative}")
    if not plan.changes:
        print("No changes required.")
        return

    for label, old, new in plan.changes:
        print(f"- {label}: {old!r} -> {new!r}")

    diff = difflib.unified_diff(
        plan.original_lines,
        plan.updated_lines,
        fromfile=str(relative),
        tofile=str(relative),
        lineterm="",
    )
    print("\n".join(diff))


def find_quality_gate(repository_root: Path, explicit: str | None) -> Path | None:
    if explicit:
        candidate = Path(explicit)
        if not candidate.is_absolute():
            candidate = repository_root / candidate
        candidate = normalized_path(candidate)
        if not candidate.is_file():
            raise GovernanceError(f"Quality Gate script not found: {candidate}")
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
            raise GovernanceError(
                f"Quality Gate failed for {relative} with exit code {result.returncode}."
            )


def write_transactionally(
    plans: Sequence[DocumentPlan],
    repository_root: Path,
    quality_gate: Path | None,
    skip_quality_gate: bool,
) -> None:
    changed = [plan for plan in plans if plan.changed]
    if not changed:
        print("\nNo files required changes.")
        return

    originals = {plan.path: plan.original_text for plan in changed}

    try:
        for plan in changed:
            plan.path.write_text(plan.updated_text, encoding="utf-8", newline="")

        if not skip_quality_gate:
            if quality_gate is None:
                raise GovernanceError(
                    "Quality Gate script was not found. Use --quality-gate PATH "
                    "or explicitly use --skip-quality-gate."
                )
            run_quality_gate(
                quality_gate=quality_gate,
                files=[plan.path for plan in changed],
                repository_root=repository_root,
            )
    except Exception:
        for path, original in originals.items():
            path.write_text(original, encoding="utf-8", newline="")
        print("\n[ROLLBACK] Original file contents restored.", file=sys.stderr)
        raise

    print("\nUpdated documents:")
    for plan in changed:
        print(f"- {plan.path.relative_to(repository_root)} ({len(plan.changes)} field(s))")

    print("\nGit operations:")
    print("- No commit performed.")
    print("- No push performed.")
    print("- No merge performed.")
    print("- No branch operation performed.")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description=(
            "Safely inspect or update governance metadata in explicitly selected "
            "Markdown documents."
        )
    )

    target = parser.add_mutually_exclusive_group(required=True)
    target.add_argument("--file", help="Single Markdown document path.")
    target.add_argument(
        "--batch",
        help="Text file containing one Markdown path per line.",
    )

    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--check", action="store_true")
    mode.add_argument("--preview", action="store_true")
    mode.add_argument("--apply", action="store_true")

    parser.add_argument("--status")
    parser.add_argument("--approval-status")
    parser.add_argument("--approved-by")
    parser.add_argument("--approval-date")
    parser.add_argument("--repository-root", default=".")
    parser.add_argument("--scan-lines", type=int, default=DEFAULT_SCAN_LINES)
    parser.add_argument(
        "--require-field",
        action="append",
        choices=sorted(FIELD_LABELS),
        default=[],
    )
    parser.add_argument("--quality-gate")
    parser.add_argument("--skip-quality-gate", action="store_true")
    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()

    try:
        repository_root = normalized_path(Path(args.repository_root))
        if not repository_root.is_dir():
            raise GovernanceError(
                f"Repository root is not a directory: {repository_root}"
            )
        if args.scan_lines < 1:
            raise GovernanceError("--scan-lines must be at least 1.")

        updates = {
            field: value
            for field, value in {
                "status": args.status,
                "approval_status": args.approval_status,
                "approved_by": args.approved_by,
                "approval_date": args.approval_date,
            }.items()
            if value is not None
        }

        if (args.preview or args.apply) and not updates:
            raise GovernanceError(
                "Preview and apply modes require at least one update option."
            )
        if args.check and updates:
            raise GovernanceError(
                "--check cannot be combined with metadata update values."
            )

        targets = load_targets(
            single_file=args.file,
            batch_file=args.batch,
            repository_root=repository_root,
        )

        plans = [
            make_plan(
                path=path,
                updates=updates,
                scan_lines=args.scan_lines,
                require_fields=args.require_field,
            )
            for path in targets
        ]

        if args.check:
            print("TEAM LIPS GOVERNANCE METADATA CHECK")
            for plan in plans:
                print_check(plan, repository_root)
            print("\nNo files were modified.")
            return 0

        if args.preview:
            print("TEAM LIPS GOVERNANCE UPDATE PREVIEW")
            for plan in plans:
                print_preview(plan, repository_root)
            print("\nPreview only. No files were modified.")
            return 0

        quality_gate = find_quality_gate(repository_root, args.quality_gate)
        write_transactionally(
            plans=plans,
            repository_root=repository_root,
            quality_gate=quality_gate,
            skip_quality_gate=args.skip_quality_gate,
        )
        return 0

    except GovernanceError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2
    except KeyboardInterrupt:
        print("Cancelled by user.", file=sys.stderr)
        return 130


if __name__ == "__main__":
    raise SystemExit(main())
