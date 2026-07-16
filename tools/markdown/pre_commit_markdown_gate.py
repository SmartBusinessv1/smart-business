from __future__ import annotations

import subprocess
import sys
from pathlib import Path


SUPPORTED_EXTENSIONS = {".md", ".markdown"}

IGNORED_NAME_PARTS = (
    "_BACKUP_",
    "_REPAIR_REPORT",
    "_TEST",
    "_TOOL_TEST",
    "_WHITESPACE_TEST",
)

IGNORED_EXACT_NAMES = {
    "MARKDOWN_REPAIR_SUMMARY.txt",
}


def repository_root() -> Path:
    """Return the active Git repository root."""

    completed = subprocess.run(
        ["git", "rev-parse", "--show-toplevel"],
        text=True,
        encoding="utf-8",
        errors="replace",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )

    if completed.returncode != 0:
        raise RuntimeError(
            completed.stderr.strip()
            or "Unable to determine the Git repository root."
        )

    return Path(completed.stdout.strip()).resolve()


def should_ignore(path: Path) -> bool:
    """Return True when a generated Markdown artifact must be excluded."""

    if path.name in IGNORED_EXACT_NAMES:
        return True

    return any(part in path.name for part in IGNORED_NAME_PARTS)


def staged_markdown_files(root: Path) -> list[Path]:
    """Return eligible Markdown files currently staged for commit."""

    completed = subprocess.run(
        [
            "git",
            "diff",
            "--cached",
            "--name-only",
            "--diff-filter=ACMR",
        ],
        cwd=root,
        text=True,
        encoding="utf-8",
        errors="replace",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )

    if completed.returncode != 0:
        raise RuntimeError(
            completed.stderr.strip()
            or "Unable to inspect staged Git files."
        )

    markdown_files: list[Path] = []

    for relative_name in completed.stdout.splitlines():
        relative_name = relative_name.strip()

        if not relative_name:
            continue

        path = (root / relative_name).resolve()

        if not path.exists() or not path.is_file():
            continue

        if path.suffix.lower() not in SUPPORTED_EXTENSIONS:
            continue

        if should_ignore(path):
            continue

        markdown_files.append(path)

    return sorted(
        markdown_files,
        key=lambda path: path.as_posix().lower(),
    )


def run_quality_gate(path: Path, root: Path) -> bool:
    """Run the unified Team LIPS Quality Gate for one staged file."""

    quality_gate = root / "tools" / "markdown" / "quality_gate.py"

    if not quality_gate.exists():
        print(
            f"ERROR: Quality Gate entry point not found: {quality_gate}",
            file=sys.stderr,
        )
        return False

    completed = subprocess.run(
        [
            sys.executable,
            str(quality_gate),
            str(path),
        ],
        cwd=root,
        check=False,
    )

    return completed.returncode == 0


def main() -> int:
    try:
        root = repository_root()
        markdown_files = staged_markdown_files(root)
    except RuntimeError as error:
        print(f"ERROR: {error}", file=sys.stderr)
        return 2

    print("TEAM LIPS PRE-COMMIT MARKDOWN QUALITY GATE")
    print()
    print(f"Repository: {root}")
    print(f"Staged Markdown files: {len(markdown_files)}")
    print("Automatic repairs: Disabled")
    print("Git write operations by Quality Gate: Disabled")
    print()

    if not markdown_files:
        print("No staged Markdown files require validation.")
        print("PRE-COMMIT RESULT: PASS")
        return 0

    failed_files: list[Path] = []

    for path in markdown_files:
        try:
            relative_path = path.relative_to(root)
        except ValueError:
            relative_path = path

        print("=" * 72)
        print(f"Validating: {relative_path}")
        print("=" * 72)

        if not run_quality_gate(path, root):
            failed_files.append(path)

    print()

    if failed_files:
        print("=" * 72)
        print("PRE-COMMIT RESULT: FAIL")
        print("COMMIT BLOCKED")
        print()
        print("The following Markdown files failed:")
        for path in failed_files:
            try:
                display_path = path.relative_to(root)
            except ValueError:
                display_path = path

            print(f"- {display_path}")

        print()
        print("Review the output, repair the files, stage them again,")
        print("and retry the commit.")
        print("=" * 72)
        return 1

    print("=" * 72)
    print("PRE-COMMIT RESULT: PASS")
    print("COMMIT MAY CONTINUE")
    print("=" * 72)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
