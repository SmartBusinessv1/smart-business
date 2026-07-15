from __future__ import annotations

import argparse
import re
import sys
from collections import Counter
from dataclasses import dataclass
from pathlib import Path


SUPPORTED_EXTENSIONS = {".md", ".markdown"}


@dataclass
class LintIssue:
    file: Path
    line_number: int
    rule: str
    message: str
    content: str


RULES: list[tuple[str, re.Pattern[str], str]] = [
    (
        "MD001",
        re.compile(r"^\s*\\#{1,6}\s+"),
        "Escaped Markdown heading detected.",
    ),
    (
        "MD002",
        re.compile(r"^\s*\\-\s+"),
        "Escaped unordered-list marker detected.",
    ),
    (
        "MD003",
        re.compile(r"^\s*\d+\\\.\s+"),
        "Escaped ordered-list marker detected.",
    ),
    (
        "MD004",
        re.compile(r"\\\*"),
        "Escaped emphasis marker detected.",
    ),
    (
        "MD005",
        re.compile(r"^\s*\\>\s*"),
        "Escaped blockquote marker detected.",
    ),
    (
        "MD006",
        re.compile(r"\\\|"),
        "Escaped table pipe detected.",
    ),
    (
        "MD007",
        re.compile(r"\\`"),
        "Escaped backtick detected.",
    ),
    (
        "MD008",
        re.compile(r"^\s*\\?---text\s*$"),
        "Malformed text code-fence marker detected.",
    ),
    (
        "MD009",
        re.compile(r"^\s*`{4,}"),
        "Code fence contains more than three backticks.",
    ),
    (
        "MD010",
        re.compile(r"^\s*\\={3,}\s*$"),
        "Escaped decorative separator detected.",
    ),
    (
        "MD011",
        re.compile(r"[ \t]+$"),
        "Trailing whitespace detected.",
    ),
]


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


def lint_file(path: Path) -> list[LintIssue]:
    issues: list[LintIssue] = []
    inside_fence = False

    text = path.read_text(encoding="utf-8")

    for line_number, line in enumerate(text.splitlines(), start=1):
        stripped = line.strip()

        if re.match(r"^`{3,}", stripped):
            inside_fence = not inside_fence

        for rule_id, pattern, message in RULES:
            if inside_fence and rule_id not in {"MD009"}:
                continue

            if pattern.search(line):
                issues.append(
                    LintIssue(
                        file=path,
                        line_number=line_number,
                        rule=rule_id,
                        message=message,
                        content=line,
                    )
                )

    if inside_fence:
        issues.append(
            LintIssue(
                file=path,
                line_number=len(text.splitlines()),
                rule="MD012",
                message="Document ends inside an unclosed fenced code block.",
                content="",
            )
        )

    return issues


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Check Markdown files for formatting inconsistencies."
    )
    parser.add_argument(
        "target",
        type=Path,
        help="Markdown file or folder to inspect.",
    )
    parser.add_argument(
        "--report",
        type=Path,
        help="Optional path for a text report.",
    )
    parser.add_argument(
        "--summary-only",
        action="store_true",
        help="Show rule totals without printing every issue.",
    )

    args = parser.parse_args()

    try:
        files = collect_markdown_files(args.target.resolve())
    except (FileNotFoundError, ValueError) as error:
        print(f"ERROR: {error}", file=sys.stderr)
        return 2

    all_issues: list[LintIssue] = []

    for file in files:
        all_issues.extend(lint_file(file))

    rule_counts = Counter(issue.rule for issue in all_issues)
    trailing_whitespace_count = rule_counts.get("MD011", 0)

    report_lines = [
        "TEAM LIPS MARKDOWN LINT REPORT",
        "",
        f"Files inspected: {len(files)}",
        f"Issues found: {len(all_issues)}",
        f"Trailing-whitespace issues (MD011): {trailing_whitespace_count}",
        "",
        "Issues by rule:",
    ]

    if rule_counts:
        for rule_id in sorted(rule_counts):
            report_lines.append(f"- {rule_id}: {rule_counts[rule_id]}")
    else:
        report_lines.append("- None")

    if not args.summary_only:
        report_lines.append("")

        for issue in all_issues:
            report_lines.append(
                f"{issue.file}:{issue.line_number} "
                f"[{issue.rule}] {issue.message}"
            )

            if issue.content:
                report_lines.append(f"  {issue.content}")

    if not all_issues:
        report_lines.extend(["", "PASS: No lint issues detected."])

    report = "\n".join(report_lines) + "\n"

    print(report)

    if args.report:
        args.report.parent.mkdir(parents=True, exist_ok=True)
        args.report.write_text(report, encoding="utf-8")
        print(f"Report saved: {args.report}")

    return 1 if all_issues else 0


if __name__ == "__main__":
    raise SystemExit(main())