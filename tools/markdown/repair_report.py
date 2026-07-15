from __future__ import annotations

import argparse
import re
import sys
from collections import Counter
from pathlib import Path


REPORT_SUFFIX = "_REPAIR_REPORT.txt"


def collect_reports(target: Path) -> list[Path]:
    if target.is_file():
        if not target.name.endswith(REPORT_SUFFIX):
            raise ValueError(
                f"Report filename must end with {REPORT_SUFFIX}"
            )
        return [target]

    if target.is_dir():
        return sorted(
            path
            for path in target.rglob(f"*{REPORT_SUFFIX}")
            if path.is_file()
        )

    raise FileNotFoundError(f"Target not found: {target}")


def parse_report(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")

    target_match = re.search(r"^Target:\s*(.+)$", text, re.MULTILINE)
    mode_match = re.search(r"^Mode:\s*(.+)$", text, re.MULTILINE)
    changed_match = re.search(
        r"^Content changed:\s*(True|False)$",
        text,
        re.MULTILINE,
    )
    unresolved_match = re.search(
        r"^Unresolved suspicious lines:\s*(\d+)$",
        text,
        re.MULTILINE,
    )

    counts: Counter = Counter()
    inside_counts = False

    for line in text.splitlines():
        if line.strip() == "Repair counts:":
            inside_counts = True
            continue

        if inside_counts and not line.strip():
            inside_counts = False
            continue

        if inside_counts:
            match = re.match(r"^-\s+([^:]+):\s+(\d+)$", line)

            if match:
                counts[match.group(1).strip()] += int(match.group(2))

    return {
        "report_file": path,
        "target": target_match.group(1).strip()
        if target_match
        else "Unknown",
        "mode": mode_match.group(1).strip()
        if mode_match
        else "Unknown",
        "changed": changed_match.group(1) == "True"
        if changed_match
        else None,
        "unresolved": int(unresolved_match.group(1))
        if unresolved_match
        else 0,
        "counts": counts,
    }


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Generate a consolidated summary from repair reports."
    )
    parser.add_argument(
        "target",
        type=Path,
        help="Repair report file or folder containing repair reports.",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("markdown_repair_summary.txt"),
        help="Output summary-report path.",
    )

    args = parser.parse_args()

    try:
        reports = collect_reports(args.target.resolve())
    except (FileNotFoundError, ValueError) as error:
        print(f"ERROR: {error}", file=sys.stderr)
        return 2

    if not reports:
        print("ERROR: No repair reports found.", file=sys.stderr)
        return 1

    parsed_reports = [parse_report(report) for report in reports]

    total_counts: Counter = Counter()

    for report in parsed_reports:
        total_counts.update(report["counts"])

    changed_count = sum(
        report["changed"] is True
        for report in parsed_reports
    )

    unchanged_count = sum(
        report["changed"] is False
        for report in parsed_reports
    )

    unresolved_total = sum(
        report["unresolved"]
        for report in parsed_reports
    )

    lines = [
        "TEAM LIPS CONSOLIDATED MARKDOWN REPAIR SUMMARY",
        "",
        f"Repair reports processed: {len(parsed_reports)}",
        f"Documents changed: {changed_count}",
        f"Documents unchanged: {unchanged_count}",
        f"Total unresolved suspicious lines: {unresolved_total}",
        "",
        "Combined repair counts:",
    ]

    if total_counts:
        for key in sorted(total_counts):
            lines.append(f"- {key}: {total_counts[key]}")
    else:
        lines.append("- No repair counts found.")

    lines.extend(
        [
            "",
            "Documents:",
        ]
    )

    for report in parsed_reports:
        changed_value = (
            "Changed"
            if report["changed"] is True
            else "Unchanged"
            if report["changed"] is False
            else "Unknown"
        )

        lines.append(
            f"- {report['target']} | "
            f"{changed_value} | "
            f"Unresolved: {report['unresolved']}"
        )

    lines.extend(
        [
            "",
            "Governance note:",
            "- This report records formatting-repair activity only.",
            "- It does not approve document meaning or publication.",
            "- Human review remains mandatory.",
        ]
    )

    output_text = "\n".join(lines) + "\n"

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(output_text, encoding="utf-8")

    print(output_text)
    print(f"Summary saved: {args.output}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())