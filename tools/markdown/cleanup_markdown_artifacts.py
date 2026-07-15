from __future__ import annotations

import argparse
import sys
from dataclasses import dataclass
from pathlib import Path


DEFAULT_PATTERNS = (
    "*_BACKUP_*.md",
    "*_REPAIR_REPORT.txt",
    "*_TEST.md",
    "*_TOOL_TEST.md",
    "*_WHITESPACE_TEST.md",
    "MARKDOWN_REPAIR_SUMMARY.txt",
)

DEFAULT_EXACT_NAMES = (
    "Team_LIPS_Engineering_Operating_System_EOS_v1.0_TEST_BACKUP.md",
    "Team_LIPS_Engineering_Operating_System_EOS_v1.0_TEST_REPAIR_REPORT.txt",
)

PROTECTED_NAMES = {
    "Team_LIPS_Engineering_Operating_System_EOS_v1.0.md",
    "01_Executive_Summary_v1.0.md",
    "02_Quick_Start_Guide_v1.0.md",
    "03_Release_Notes_v1.0.md",
    "04_Changelog_v1.0.md",
    "05_Document_Manifest_v1.0.md",
    "06_Approval_Record_v1.0.md",
    "07_Release_Certificate_v1.0.md",
    "README.md",
    "Markdown_Repair_Completion_Report_v1.0.md",
    "Engineering_Tooling_Register.md",
    "repair_markdown.py",
    "lint_markdown.py",
    "validate_markdown.py",
    "repair_report.py",
    "cleanup_markdown_artifacts.py",
}


@dataclass(frozen=True)
class Candidate:
    path: Path
    reason: str


def is_protected(path: Path) -> bool:
    return path.name in PROTECTED_NAMES


def collect_candidates(target: Path) -> list[Candidate]:
    candidates: dict[Path, Candidate] = {}

    for pattern in DEFAULT_PATTERNS:
        for path in target.rglob(pattern):
            if not path.is_file() or is_protected(path):
                continue
            resolved = path.resolve()
            candidates[resolved] = Candidate(resolved, f"Matched pattern: {pattern}")

    for name in DEFAULT_EXACT_NAMES:
        for path in target.rglob(name):
            if not path.is_file() or is_protected(path):
                continue
            resolved = path.resolve()
            candidates[resolved] = Candidate(
                resolved,
                f"Matched exact generated filename: {name}",
            )

    return sorted(candidates.values(), key=lambda item: item.path.as_posix().lower())


def format_size(size_bytes: int) -> str:
    units = ("B", "KB", "MB", "GB")
    value = float(size_bytes)
    for unit in units:
        if value < 1024 or unit == units[-1]:
            return f"{value:.1f} {unit}"
        value /= 1024
    return f"{size_bytes} B"


def print_report(target: Path, candidates: list[Candidate], mode: str) -> None:
    total_bytes = sum(item.path.stat().st_size for item in candidates)
    print("TEAM LIPS MARKDOWN ARTIFACT CLEANUP")
    print()
    print(f"Target: {target}")
    print(f"Mode: {mode}")
    print(f"Files matched: {len(candidates)}")
    print(f"Total size: {format_size(total_bytes)}")
    print()

    if not candidates:
        print("No generated Markdown artifacts found.")
        return

    for item in candidates:
        print(f"- {item.path}")
        print(f"  {item.reason}")


def delete_candidates(candidates: list[Candidate]) -> tuple[int, list[str]]:
    deleted = 0
    errors: list[str] = []

    for item in candidates:
        try:
            item.path.unlink()
            deleted += 1
        except OSError as error:
            errors.append(f"{item.path}: {error}")

    return deleted, errors


def validate_target(target: Path) -> None:
    if not target.exists():
        raise FileNotFoundError(f"Target does not exist: {target}")
    if not target.is_dir():
        raise ValueError(f"Target must be a directory: {target}")


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Safely identify or delete generated Markdown repair artifacts."
    )
    parser.add_argument(
        "target",
        nargs="?",
        type=Path,
        default=Path("docs/engineering/eos/v1.0"),
        help="Directory to inspect. Defaults to docs/engineering/eos/v1.0.",
    )

    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--check", action="store_true", help="List files only.")
    mode.add_argument("--apply", action="store_true", help="Delete matched files.")
    parser.add_argument(
        "--yes",
        action="store_true",
        help="Skip typed confirmation after reviewing check output.",
    )

    args = parser.parse_args()
    target = args.target.resolve()

    try:
        validate_target(target)
    except (FileNotFoundError, ValueError) as error:
        print(f"ERROR: {error}", file=sys.stderr)
        return 2

    candidates = collect_candidates(target)

    if args.check:
        print_report(target, candidates, "CHECK")
        print()
        print("CHECK MODE: No files were deleted.")
        print("No Git operation was performed.")
        return 0

    print_report(target, candidates, "APPLY")

    if not candidates:
        print()
        print("No deletion was necessary.")
        print("No Git operation was performed.")
        return 0

    if not args.yes:
        print()
        confirmation = input('Type DELETE GENERATED FILES to continue: ').strip()
        if confirmation != "DELETE GENERATED FILES":
            print("Cleanup cancelled. No files were deleted.")
            return 1

    deleted, errors = delete_candidates(candidates)
    print()
    print(f"Files deleted: {deleted}")
    print(f"Deletion errors: {len(errors)}")
    for error in errors:
        print(f"- {error}")
    print("No commit, push, merge, or branch operation was performed.")
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())