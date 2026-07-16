#!/usr/bin/env python3
"""
TEAM LIPS Engineering Quality Gate

Single entry point for Markdown Quality Assurance.

Pipeline

Load Configuration
        ↓
Repair (optional)
        ↓
Lint
        ↓
Validate
        ↓
Summary
        ↓
Exit Code
"""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path

from quality_gate_core import load_configuration


ROOT = Path(__file__).resolve().parents[2]


def run(command: list[str]) -> bool:
    result = subprocess.run(command)
    return result.returncode == 0


def main() -> int:

    parser = argparse.ArgumentParser(
        description="TEAM LIPS Engineering Quality Gate"
    )

    parser.add_argument(
        "target",
        nargs="+",
        help="Markdown file(s) or folder(s)"
    )

    args = parser.parse_args()

    config = load_configuration()

    success = True

    repair_enabled = config["repair"]["enabled"]
    lint_enabled = config["lint"]["enabled"]
    validate_enabled = config["validation"]["enabled"]

    for target in args.target:

        if repair_enabled:
            print(f"\n=== Repair : {target} ===")

            success &= run([
                sys.executable,
                str(ROOT / "tools/markdown/repair_markdown.py"),
                target,
                "--check"
            ])

        if lint_enabled:
            print(f"\n=== Lint : {target} ===")

            success &= run([
                sys.executable,
                str(ROOT / "tools/markdown/lint_markdown.py"),
                target
            ])

        if validate_enabled:
            print(f"\n=== Validate : {target} ===")

            success &= run([
                sys.executable,
                str(ROOT / "tools/markdown/validate_markdown.py"),
                target
            ])

    print()

    if success:
        print("===================================")
        print("QUALITY GATE PASSED")
        print("===================================")
        return 0

    print("===================================")
    print("QUALITY GATE FAILED")
    print("===================================")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())