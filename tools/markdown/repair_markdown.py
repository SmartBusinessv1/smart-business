from __future__ import annotations

import argparse
import hashlib
import re
import shutil
import sys
from collections import Counter
from datetime import datetime
from pathlib import Path


SUPPORTED_EXTENSIONS = {".md", ".markdown"}

SUSPICIOUS_PATTERNS = {
    "escaped_heading": re.compile(r"\\#{1,6}"),
    "escaped_emphasis": re.compile(r"\\\*"),
    "escaped_unordered_list": re.compile(r"(^|\s)\\-\s"),
    "escaped_ordered_list": re.compile(r"\d+\\\."),
    "escaped_blockquote": re.compile(r"(^|\s)\\>"),
    "escaped_table_pipe": re.compile(r"\\\|"),
    "escaped_backtick": re.compile(r"\\`"),
    "malformed_text_fence": re.compile(r"^\s*\\?-{3,}text\s*$"),
    "escaped_separator": re.compile(r"^\s*\\={3,}[ \t]*$"),
    "excessive_fence": re.compile(r"^\s*`{4,}"),
}


def calculate_sha256(path: Path) -> str:
    """Return the SHA-256 checksum of a file."""

    digest = hashlib.sha256()

    with path.open("rb") as file_handle:
        for chunk in iter(lambda: file_handle.read(1024 * 1024), b""):
            digest.update(chunk)

    return digest.hexdigest()


def preserve_line_ending(original_line: str, repaired_line: str) -> str:
    """Preserve the original line-ending style."""

    if original_line.endswith("\r\n"):
        return repaired_line + "\r\n"

    if original_line.endswith("\n"):
        return repaired_line + "\n"

    return repaired_line


def normalize_fence(line: str) -> tuple[str, bool]:
    """
    Normalize escaped or excessive Markdown fences to exactly three backticks.

    Examples:
        \\```text -> ```text
        ````text  -> ```text
        \\````    -> ```
    """

    match = re.fullmatch(
        r"(\s*)\\?(`{3,})([A-Za-z0-9_-]*)[ \t]*",
        line,
    )

    if not match:
        return line, False

    indentation = match.group(1)
    language = match.group(3)
    normalized = f"{indentation}```{language}"

    return normalized, normalized != line


def is_fence_line(line: str) -> bool:
    """Return True only when the entire line is a valid Markdown fence."""

    return bool(
        re.fullmatch(
            r"\s*```[A-Za-z0-9_-]*\s*",
            line,
        )
    )


def is_closing_fence(line: str) -> bool:
    """Return True only when the entire line is a closing fence."""

    return bool(re.fullmatch(r"\s*```\s*", line))


def trim_trailing_whitespace(line: str) -> tuple[str, bool]:
    """
    Remove spaces and tabs at the end of a non-empty line.

    Blank lines become empty lines. Fenced-code content is excluded by the
    caller so intentional code formatting remains untouched.
    """

    trimmed = line.rstrip(" \t")
    return trimmed, trimmed != line


def repair_code_block_content(line: str) -> tuple[str, Counter]:
    """
    Repair only narrowly defined rich-text export corruption inside fences.

    General whitespace cleanup is intentionally not performed inside fences.
    """

    counts: Counter = Counter()
    repaired = line

    repaired, substitutions = re.subn(
        r"^(\s*)\\(={3,})[ \t]*$",
        r"\1\2",
        repaired,
    )
    counts["code_block_separators"] += substitutions

    repaired, substitutions = re.subn(
        r"^(\s*)\\-(\s+.+)$",
        r"\1-\2",
        repaired,
    )
    counts["code_block_list_markers"] += substitutions

    return repaired, counts


def repair_document(
    text: str,
    *,
    trim_whitespace: bool = False,
) -> tuple[str, Counter, list[tuple[int, str, list[str]]]]:
    """
    Repair recognized Markdown corruption conservatively.

    Valid fenced-code content is preserved except for explicitly approved
    rich-text export patterns handled by repair_code_block_content().
    """

    counts: Counter = Counter()
    output: list[str] = []

    inside_fenced_block = False
    inside_malformed_text_block = False

    for original_line in text.splitlines(keepends=True):
        line = original_line.rstrip("\r\n")
        stripped = line.strip()
        indentation = line[: len(line) - len(line.lstrip())]

        if not inside_fenced_block and not inside_malformed_text_block:
            normalized_fence, fence_changed = normalize_fence(line)

            if is_fence_line(normalized_fence):
                output.append(
                    preserve_line_ending(
                        original_line,
                        normalized_fence,
                    )
                )

                inside_fenced_block = True

                if fence_changed:
                    counts["fences_repaired"] += 1
                    counts["changed_lines"] += 1

                continue

            if re.fullmatch(r"\s*\\?-{3,}text\s*", line):
                repaired = indentation + "```text"

                output.append(
                    preserve_line_ending(
                        original_line,
                        repaired,
                    )
                )

                inside_malformed_text_block = True
                counts["malformed_text_blocks_opened"] += 1
                counts["changed_lines"] += 1
                continue

        elif inside_fenced_block:
            normalized_fence, fence_changed = normalize_fence(line)

            if is_closing_fence(normalized_fence):
                output.append(
                    preserve_line_ending(
                        original_line,
                        normalized_fence,
                    )
                )

                inside_fenced_block = False

                if fence_changed:
                    counts["fences_repaired"] += 1
                    counts["changed_lines"] += 1

                continue

            repaired, code_counts = repair_code_block_content(line)
            counts.update(code_counts)

            if repaired != line:
                counts["changed_lines"] += 1

            output.append(
                preserve_line_ending(
                    original_line,
                    repaired,
                )
            )
            continue

        elif inside_malformed_text_block:
            if stripped in {"---", r"\---"}:
                repaired = indentation + "```"

                output.append(
                    preserve_line_ending(
                        original_line,
                        repaired,
                    )
                )

                inside_malformed_text_block = False
                counts["malformed_text_blocks_closed"] += 1
                counts["changed_lines"] += 1
                continue

            repaired = line.replace(r"\_", "_").replace(r"\|", "|")

            if repaired != line:
                counts["diagram_escapes_repaired"] += 1
                counts["changed_lines"] += 1

            output.append(
                preserve_line_ending(
                    original_line,
                    repaired,
                )
            )
            continue

        repaired = line

        repaired, substitutions = re.subn(
            r"^(\s*)\\(={3,})[ \t]*$",
            r"\1\2",
            repaired,
        )
        counts["decorative_separators"] += substitutions

        repaired, substitutions = re.subn(
            r"^(\s*)\\(#{1,6})(\s+)",
            r"\1\2\3",
            repaired,
        )
        counts["headings"] += substitutions

        repaired, substitutions = re.subn(
            r"^(\s*#{1,6}\s+)(\d+)\\\.(\s+)",
            r"\1\2.\3",
            repaired,
        )
        counts["numbered_headings"] += substitutions

        repaired, substitutions = re.subn(
            r"^(\s*)\\-(\s+)",
            r"\1-\2",
            repaired,
        )
        counts["unordered_lists"] += substitutions

        repaired, substitutions = re.subn(
            r"^(\s*)(\d+)\\\.(\s+)",
            r"\1\2.\3",
            repaired,
        )
        counts["ordered_lists"] += substitutions

        repaired, substitutions = re.subn(
            r"^(\s*)\\>(\s*)",
            r"\1>\2",
            repaired,
        )
        counts["blockquotes"] += substitutions

        if re.fullmatch(r"\s*\\---[ \t]*", repaired):
            repaired = indentation + "---"
            counts["horizontal_rules"] += 1

        bold_marker_count = repaired.count(r"\*\*")
        if bold_marker_count:
            repaired = repaired.replace(r"\*\*", "**")
            counts["bold_markers"] += bold_marker_count

        italic_marker_count = repaired.count(r"\*")
        if italic_marker_count:
            repaired = repaired.replace(r"\*", "*")
            counts["italic_markers"] += italic_marker_count

        underscore_count = repaired.count(r"\_")
        if underscore_count:
            repaired = repaired.replace(r"\_", "_")
            counts["underscores"] += underscore_count

        backtick_count = repaired.count(r"\`")
        if backtick_count:
            repaired = repaired.replace(r"\`", "`")
            counts["inline_backticks"] += backtick_count

        escaped_pipe_count = repaired.count(r"\|")
        looks_like_table = (
            escaped_pipe_count >= 2
            or repaired.lstrip().startswith(r"\|")
        )

        if looks_like_table:
            repaired = repaired.replace(r"\|", "|")
            counts["table_pipes"] += escaped_pipe_count

        normalized_fence, fence_changed = normalize_fence(repaired)

        if fence_changed and is_fence_line(normalized_fence):
            repaired = normalized_fence
            counts["fences_repaired"] += 1

        if trim_whitespace:
            repaired, whitespace_changed = trim_trailing_whitespace(repaired)

            if whitespace_changed:
                counts["trailing_whitespace_lines"] += 1

        if repaired != line:
            counts["changed_lines"] += 1

        output.append(
            preserve_line_ending(
                original_line,
                repaired,
            )
        )

    repaired_text = "".join(output)
    unresolved: list[tuple[int, str, list[str]]] = []

    for line_number, line in enumerate(
        repaired_text.splitlines(),
        start=1,
    ):
        matching_patterns = [
            name
            for name, pattern in SUSPICIOUS_PATTERNS.items()
            if pattern.search(line)
        ]

        if matching_patterns:
            unresolved.append(
                (
                    line_number,
                    line,
                    matching_patterns,
                )
            )

    if inside_fenced_block:
        unresolved.append(
            (
                len(repaired_text.splitlines()),
                "[Document ended inside a fenced code block]",
                ["unclosed_fenced_block"],
            )
        )

    if inside_malformed_text_block:
        unresolved.append(
            (
                len(repaired_text.splitlines()),
                "[Document ended inside a malformed text block]",
                ["unclosed_malformed_text_block"],
            )
        )

    return repaired_text, counts, unresolved


def create_backup_path(target: Path) -> Path:
    """Create a timestamped backup filename beside the target."""

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

    return target.with_name(
        f"{target.stem}_BACKUP_{timestamp}{target.suffix}"
    )


def create_report_path(target: Path) -> Path:
    """Create a repair-report filename beside the target."""

    return target.with_name(
        f"{target.stem}_REPAIR_REPORT.txt"
    )


def format_report(
    target: Path,
    backup: Path | None,
    counts: Counter,
    unresolved: list[tuple[int, str, list[str]]],
    changed: bool,
    mode: str,
    trim_whitespace: bool,
) -> str:
    """Create a human-readable repair report."""

    report_lines = [
        "TEAM LIPS MARKDOWN REPAIR REPORT",
        "",
        f"Target: {target.as_posix()}",
        f"Mode: {mode}",
        f"Trim trailing whitespace: {trim_whitespace}",
        f"Content changed: {changed}",
        (
            f"Backup: {backup.as_posix()}"
            if backup
            else "Backup: Not created in check mode"
        ),
        "",
        "Repair counts:",
    ]

    if counts:
        for key in sorted(counts):
            report_lines.append(f"- {key}: {counts[key]}")
    else:
        report_lines.append("- No automatic repairs detected.")

    report_lines.extend(
        [
            "",
            f"Unresolved suspicious lines: {len(unresolved)}",
        ]
    )

    for line_number, content, pattern_names in unresolved[:200]:
        joined_patterns = ", ".join(pattern_names)

        report_lines.append(
            f"- Line {line_number} [{joined_patterns}]: {content}"
        )

    if len(unresolved) > 200:
        report_lines.append(
            "- Additional unresolved lines omitted: "
            f"{len(unresolved) - 200}"
        )

    report_lines.extend(
        [
            "",
            "Git operations:",
            "- No commit performed.",
            "- No push performed.",
            "- No merge performed.",
            "- No branch operation performed.",
        ]
    )

    return "\n".join(report_lines) + "\n"


def validate_target(path: Path) -> None:
    """Validate the supplied Markdown target."""

    if not path.exists():
        raise FileNotFoundError(f"Target file not found: {path}")

    if not path.is_file():
        raise ValueError(f"Target is not a file: {path}")

    if path.suffix.lower() not in SUPPORTED_EXTENSIONS:
        raise ValueError(
            "Only .md and .markdown files are supported."
        )


def main() -> int:
    parser = argparse.ArgumentParser(
        description=(
            "Conservatively repair escaped or malformed "
            "GitHub-Flavored Markdown."
        )
    )

    parser.add_argument(
        "target",
        type=Path,
        help="Path to the Markdown file to inspect or repair.",
    )

    parser.add_argument(
        "--trim-trailing-whitespace",
        action="store_true",
        help=(
            "Remove trailing spaces and tabs outside fenced code blocks. "
            "This may remove Markdown hard-break spacing."
        ),
    )

    mode_group = parser.add_mutually_exclusive_group(required=True)

    mode_group.add_argument(
        "--check",
        action="store_true",
        help="Inspect and report without modifying the target.",
    )

    mode_group.add_argument(
        "--apply",
        action="store_true",
        help="Create a verified backup and apply repairs.",
    )

    args = parser.parse_args()
    target = args.target.resolve()

    try:
        validate_target(target)
    except (FileNotFoundError, ValueError) as error:
        print(f"ERROR: {error}", file=sys.stderr)
        return 1

    try:
        original_text = target.read_text(encoding="utf-8")
    except UnicodeDecodeError as error:
        print(
            f"ERROR: Target is not valid UTF-8: {error}",
            file=sys.stderr,
        )
        return 1
    except OSError as error:
        print(
            f"ERROR: Unable to read target: {error}",
            file=sys.stderr,
        )
        return 1

    repaired_text, counts, unresolved = repair_document(
        original_text,
        trim_whitespace=args.trim_trailing_whitespace,
    )
    changed = repaired_text != original_text

    if args.check:
        report = format_report(
            target=target,
            backup=None,
            counts=counts,
            unresolved=unresolved,
            changed=changed,
            mode="CHECK",
            trim_whitespace=args.trim_trailing_whitespace,
        )

        print(report)
        print("CHECK MODE: No files were modified.")
        return 0

    backup_path = create_backup_path(target)
    report_path = create_report_path(target)

    try:
        shutil.copy2(target, backup_path)
    except OSError as error:
        print(
            f"ERROR: Unable to create backup: {error}",
            file=sys.stderr,
        )
        return 1

    if calculate_sha256(backup_path) != calculate_sha256(target):
        print(
            "ERROR: Backup verification failed. "
            "No repair was applied.",
            file=sys.stderr,
        )
        return 1

    report = format_report(
        target=target,
        backup=backup_path,
        counts=counts,
        unresolved=unresolved,
        changed=changed,
        mode="APPLY",
        trim_whitespace=args.trim_trailing_whitespace,
    )

    if not changed:
        try:
            report_path.write_text(report, encoding="utf-8")
        except OSError as error:
            print(
                f"ERROR: Unable to write repair report: {error}",
                file=sys.stderr,
            )
            return 1

        print(
            "No repair was necessary. "
            "The target file was not rewritten."
        )
        print(f"Verified backup created: {backup_path}")
        print(f"Report saved: {report_path}")
        return 0

    try:
        target.write_text(
            repaired_text,
            encoding="utf-8",
            newline="\n",
        )
        report_path.write_text(report, encoding="utf-8")
    except OSError as error:
        print(
            f"ERROR: Unable to write repaired output: {error}",
            file=sys.stderr,
        )
        return 1

    print(f"Repaired file saved: {target}")
    print(f"Verified backup created: {backup_path}")
    print(f"Repair report saved: {report_path}")
    print(
        "No commit, push, merge, or branch operation was performed."
    )

    return 0


if __name__ == "__main__":
    raise SystemExit(main())