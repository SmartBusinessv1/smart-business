from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path


SUPPORTED_EXTENSIONS = {".md", ".markdown"}


@dataclass
class ValidationResult:
    file: Path
    check: str
    status: str
    message: str


def collect_markdown_files(target: Path) -> list[Path]:
    if target.is_file():
        if target.suffix.lower() not in SUPPORTED_EXTENSIONS:
            raise ValueError("Target must be a Markdown file.")
        return [target]

    if target.is_dir():
        return sorted(
            path
            for path in target.rglob("*")
            if path.is_file()
            and path.suffix.lower() in SUPPORTED_EXTENSIONS
            and "_BACKUP_" not in path.name
        )

    raise FileNotFoundError(f"Target not found: {target}")


def check_heading_structure(
    path: Path,
    lines: list[str],
) -> list[ValidationResult]:
    results: list[ValidationResult] = []
    previous_level = 0
    heading_count = 0
    invalid_jumps: list[int] = []

    inside_fence = False

    for line_number, line in enumerate(lines, start=1):
        if re.match(r"^\s*```", line):
            inside_fence = not inside_fence
            continue

        if inside_fence:
            continue

        match = re.match(r"^(#{1,6})\s+.+$", line)

        if not match:
            continue

        heading_count += 1
        level = len(match.group(1))

        if previous_level and level > previous_level + 1:
            invalid_jumps.append(line_number)

        previous_level = level

    if heading_count == 0:
        results.append(
            ValidationResult(
                path,
                "headings",
                "WARN",
                "No Markdown headings found.",
            )
        )
    elif invalid_jumps:
        results.append(
            ValidationResult(
                path,
                "headings",
                "WARN",
                "Heading-level jumps detected at lines: "
                + ", ".join(map(str, invalid_jumps)),
            )
        )
    else:
        results.append(
            ValidationResult(
                path,
                "headings",
                "PASS",
                f"{heading_count} headings found with no invalid jumps.",
            )
        )

    return results


def check_code_fences(
    path: Path,
    lines: list[str],
) -> ValidationResult:
    fence_count = sum(
        1
        for line in lines
        if re.match(r"^\s*```", line)
    )

    if fence_count % 2 != 0:
        return ValidationResult(
            path,
            "code_fences",
            "FAIL",
            f"Unbalanced fenced code blocks: {fence_count} fence lines.",
        )

    excessive = [
        number
        for number, line in enumerate(lines, start=1)
        if re.match(r"^\s*`{4,}", line)
    ]

    if excessive:
        return ValidationResult(
            path,
            "code_fences",
            "FAIL",
            "Excessive backtick fences detected at lines: "
            + ", ".join(map(str, excessive)),
        )

    return ValidationResult(
        path,
        "code_fences",
        "PASS",
        f"{fence_count // 2} fenced code blocks validated.",
    )


def check_tables(
    path: Path,
    lines: list[str],
) -> ValidationResult:
    separator_pattern = re.compile(
        r"^\s*\|?\s*:?-{3,}:?\s*"
        r"(?:\|\s*:?-{3,}:?\s*)+\|?\s*$"
    )

    table_separators = [
        number
        for number, line in enumerate(lines, start=1)
        if separator_pattern.match(line)
    ]

    malformed: list[int] = []

    for line_number in table_separators:
        if line_number <= 1:
            malformed.append(line_number)
            continue

        header = lines[line_number - 2]

        if "|" not in header:
            malformed.append(line_number)

    if malformed:
        return ValidationResult(
            path,
            "tables",
            "FAIL",
            "Table separators without valid headers at lines: "
            + ", ".join(map(str, malformed)),
        )

    return ValidationResult(
        path,
        "tables",
        "PASS",
        f"{len(table_separators)} Markdown tables validated.",
    )


def check_escaped_markdown(
    path: Path,
    lines: list[str],
) -> ValidationResult:
    patterns = [
        re.compile(r"^\s*\\#{1,6}\s+"),
        re.compile(r"^\s*\\-\s+"),
        re.compile(r"^\s*\d+\\\.\s+"),
        re.compile(r"\\\*"),
        re.compile(r"^\s*\\>"),
        re.compile(r"\\\|"),
        re.compile(r"\\`"),
        re.compile(r"^\s*\\?---text\s*$"),
    ]

    suspicious: list[int] = []
    inside_fence = False

    for line_number, line in enumerate(lines, start=1):
        if re.match(r"^\s*```", line):
            inside_fence = not inside_fence
            continue

        if inside_fence:
            continue

        if any(pattern.search(line) for pattern in patterns):
            suspicious.append(line_number)

    if suspicious:
        return ValidationResult(
            path,
            "escaped_markdown",
            "FAIL",
            "Suspicious escaped Markdown remains at lines: "
            + ", ".join(map(str, suspicious[:50])),
        )

    return ValidationResult(
        path,
        "escaped_markdown",
        "PASS",
        "No suspicious escaped Markdown detected.",
    )


def check_document_content(
    path: Path,
    lines: list[str],
) -> ValidationResult:
    non_empty = [line for line in lines if line.strip()]

    if not non_empty:
        return ValidationResult(
            path,
            "content",
            "FAIL",
            "Document is empty.",
        )

    return ValidationResult(
        path,
        "content",
        "PASS",
        f"{len(lines)} total lines; {len(non_empty)} non-empty lines.",
    )


def validate_file(path: Path) -> list[ValidationResult]:
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()

    results: list[ValidationResult] = []

    results.append(check_document_content(path, lines))
    results.extend(check_heading_structure(path, lines))
    results.append(check_code_fences(path, lines))
    results.append(check_tables(path, lines))
    results.append(check_escaped_markdown(path, lines))

    return results


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Validate structural Markdown document standards."
    )
    parser.add_argument(
        "target",
        type=Path,
        help="Markdown file or folder to validate.",
    )
    parser.add_argument(
        "--report",
        type=Path,
        help="Optional text-report path.",
    )

    args = parser.parse_args()

    try:
        files = collect_markdown_files(args.target.resolve())
    except (FileNotFoundError, ValueError) as error:
        print(f"ERROR: {error}", file=sys.stderr)
        return 2

    results: list[ValidationResult] = []

    for file in files:
        results.extend(validate_file(file))

    pass_count = sum(result.status == "PASS" for result in results)
    warn_count = sum(result.status == "WARN" for result in results)
    fail_count = sum(result.status == "FAIL" for result in results)

    report_lines = [
        "TEAM LIPS MARKDOWN VALIDATION REPORT",
        "",
        f"Files validated: {len(files)}",
        f"Checks passed: {pass_count}",
        f"Warnings: {warn_count}",
        f"Failures: {fail_count}",
        "",
    ]

    for result in results:
        report_lines.append(
            f"{result.status} | {result.file} | "
            f"{result.check} | {result.message}"
        )

    report = "\n".join(report_lines) + "\n"

    print(report)

    if args.report:
        args.report.parent.mkdir(parents=True, exist_ok=True)
        args.report.write_text(report, encoding="utf-8")
        print(f"Report saved: {args.report}")

    return 1 if fail_count else 0


if __name__ == "__main__":
    raise SystemExit(main())