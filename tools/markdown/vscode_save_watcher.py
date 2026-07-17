from __future__ import annotations

import argparse
import subprocess
import sys
import time
from dataclasses import dataclass
from pathlib import Path

from quality_gate_core import (
    discover_markdown_files,
    load_configuration,
    repository_root,
)


@dataclass(frozen=True)
class FileState:
    """Observed filesystem state for one Markdown file."""

    modified_time_ns: int
    size_bytes: int


def file_state(path: Path) -> FileState | None:
    """Return the current file state, or None when the file is unavailable."""

    try:
        stat = path.stat()
    except OSError:
        return None

    return FileState(
        modified_time_ns=stat.st_mtime_ns,
        size_bytes=stat.st_size,
    )


def build_snapshot(
    root: Path,
    config: dict,
) -> dict[Path, FileState]:
    """Build a snapshot of every eligible Markdown file."""

    snapshot: dict[Path, FileState] = {}

    for path in discover_markdown_files(root, root, config):
        state = file_state(path)

        if state is not None:
            snapshot[path] = state

    return snapshot


def wait_until_stable(
    path: Path,
    *,
    checks: int = 3,
    interval_seconds: float = 0.2,
) -> bool:
    """
    Wait until the file stops changing.

    This prevents validation from starting while an editor or AI tool
    is still writing the file.
    """

    previous = file_state(path)

    if previous is None:
        return False

    stable_checks = 0

    while stable_checks < checks:
        time.sleep(interval_seconds)
        current = file_state(path)

        if current is None:
            return False

        if current == previous:
            stable_checks += 1
        else:
            stable_checks = 0
            previous = current

    return True


def run_quality_gate(path: Path, root: Path) -> int:
    """Run the unified Team LIPS Quality Gate for one saved file."""

    quality_gate = root / "tools" / "markdown" / "quality_gate.py"

    if not quality_gate.exists():
        print(
            f"[QUALITY GATE] ERROR: Entry point not found: {quality_gate}",
            file=sys.stderr,
            flush=True,
        )
        return 2

    print()
    print("=" * 72)
    print(f"[QUALITY GATE] Markdown save detected: {path.relative_to(root)}")
    print("=" * 72)
    print(flush=True)

    completed = subprocess.run(
        [
            sys.executable,
            str(quality_gate),
            str(path),
        ],
        cwd=root,
        check=False,
    )

    print()

    if completed.returncode == 0:
        print(
            f"[QUALITY GATE] PASS: {path.relative_to(root)}",
            flush=True,
        )
    else:
        print(
            f"[QUALITY GATE] FAIL: {path.relative_to(root)}",
            flush=True,
        )
        print(
            "[QUALITY GATE] Human review is required. "
            "No automatic repair was applied.",
            flush=True,
        )

    return completed.returncode


def changed_paths(
    previous: dict[Path, FileState],
    current: dict[Path, FileState],
) -> list[Path]:
    """Return files that are new or whose observed state changed."""

    return sorted(
        (
            path
            for path, state in current.items()
            if previous.get(path) != state
        ),
        key=lambda path: path.as_posix().lower(),
    )


def main() -> int:
    parser = argparse.ArgumentParser(
        description=(
            "Watch eligible Markdown files and run the Team LIPS "
            "Engineering Quality Gate automatically after save."
        )
    )

    parser.add_argument(
        "--interval",
        type=float,
        default=1.0,
        help="Filesystem polling interval in seconds. Default: 1.0",
    )

    parser.add_argument(
        "--initial-scan",
        action="store_true",
        help="Validate all eligible Markdown files when the watcher starts.",
    )

    args = parser.parse_args()

    if args.interval < 0.2:
        print(
            "ERROR: --interval must be at least 0.2 seconds.",
            file=sys.stderr,
        )
        return 2

    root = repository_root()

    try:
        config = load_configuration(root)
    except Exception as error:
        print(
            f"ERROR: Unable to load Quality Gate configuration: {error}",
            file=sys.stderr,
        )
        return 2

    print("TEAM LIPS AUTOMATIC MARKDOWN QUALITY GATE")
    print()
    print(f"Repository: {root}")
    print(f"Polling interval: {args.interval} second(s)")
    print("Eligible files: .md and .markdown")
    print("Automatic repair: Disabled")
    print("File modification by watcher: Disabled")
    print("Git operations: Disabled")
    print()
    print("Watching for saved Markdown files...")
    print("Press Ctrl+C to stop.")
    print(flush=True)

    previous = build_snapshot(root, config)

    if args.initial_scan:
        for path in sorted(
            previous,
            key=lambda item: item.as_posix().lower(),
        ):
            run_quality_gate(path, root)

    try:
        while True:
            time.sleep(args.interval)

            current = build_snapshot(root, config)

            for path in changed_paths(previous, current):
                if wait_until_stable(path):
                    run_quality_gate(path, root)

                    refreshed = file_state(path)

                    if refreshed is not None:
                        current[path] = refreshed

            previous = current

    except KeyboardInterrupt:
        print()
        print("Automatic Markdown Quality Gate stopped.")
        return 0


if __name__ == "__main__":
    raise SystemExit(main())
