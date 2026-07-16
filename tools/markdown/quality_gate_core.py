from __future__ import annotations

import fnmatch
import re
import subprocess
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

try:
    import yaml
except ImportError as error:
    raise SystemExit(
        "PyYAML is required.\n"
        "Install it with:\n"
        "python -m pip install PyYAML"
    ) from error


CONFIG_FILENAME = ".markdown-gate.yml"


@dataclass(frozen=True)
class CheckResult:
    """Result returned by one Markdown quality check."""

    name: str
    passed: bool
    return_code: int
    output: str
    reason: str = ""


@dataclass
class FileQualityResult:
    """Combined quality-gate result for one Markdown file."""

    path: Path
    checks: list[CheckResult] = field(default_factory=list)

    @property
    def passed(self) -> bool:
        return all(check.passed for check in self.checks)


@dataclass
class QualityGateResult:
    """Combined quality-gate result for all inspected files."""

    files: list[FileQualityResult] = field(default_factory=list)

    @property
    def passed(self) -> bool:
        return all(file_result.passed for file_result in self.files)

    @property
    def failed_files(self) -> list[FileQualityResult]:
        return [
            file_result
            for file_result in self.files
            if not file_result.passed
        ]


class QualityGateConfigurationError(RuntimeError):
    """Raised when the quality-gate configuration is invalid."""


class QualityGateExecutionError(RuntimeError):
    """Raised when a quality-gate command cannot be executed."""


def repository_root() -> Path:
    """
    Return the repository root.

    quality_gate_core.py is expected at:

    tools/markdown/quality_gate_core.py
    """

    return Path(__file__).resolve().parents[2]


def configuration_path(root: Path | None = None) -> Path:
    """Return the expected repository configuration path."""

    resolved_root = root or repository_root()
    return resolved_root / CONFIG_FILENAME


def load_configuration(
    root: Path | None = None,
) -> dict[str, Any]:
    """Load and validate `.markdown-gate.yml`."""

    resolved_root = root or repository_root()
    path = configuration_path(resolved_root)

    if not path.exists():
        raise QualityGateConfigurationError(
            f"Configuration file not found: {path}"
        )

    try:
        raw = yaml.safe_load(path.read_text(encoding="utf-8"))
    except yaml.YAMLError as error:
        raise QualityGateConfigurationError(
            f"Invalid YAML configuration: {error}"
        ) from error

    if not isinstance(raw, dict):
        raise QualityGateConfigurationError(
            "The Markdown quality-gate configuration must be a YAML mapping."
        )

    required_sections = {
        "quality_gate",
        "repair",
        "lint",
        "validation",
        "files",
        "safety",
        "reporting",
    }

    missing = sorted(required_sections.difference(raw))

    if missing:
        raise QualityGateConfigurationError(
            "Missing configuration sections: "
            + ", ".join(missing)
        )

    validate_safety_configuration(raw)
    return raw


def validate_safety_configuration(
    config: dict[str, Any],
) -> None:
    """
    Enforce the Team LIPS automatic quality-gate safety boundary.

    Automatic validation must never modify files or perform Git actions.
    """

    safety = config.get("safety", {})

    forbidden_true_values = {
        "modify_files": safety.get("modify_files"),
        "create_backups": safety.get("create_backups"),
        "allow_git_operations": safety.get("allow_git_operations"),
    }

    unsafe = [
        name
        for name, value in forbidden_true_values.items()
        if value is not False
    ]

    if unsafe:
        raise QualityGateConfigurationError(
            "Unsafe automatic quality-gate configuration detected: "
            + ", ".join(unsafe)
            + ". These values must remain false."
        )


def normalize_path(
    path: Path,
    root: Path,
) -> Path:
    """Resolve a target relative to the repository root."""

    if path.is_absolute():
        return path.resolve()

    return (root / path).resolve()


def configured_extensions(
    config: dict[str, Any],
) -> set[str]:
    """Return normalized supported Markdown extensions."""

    extensions = config["files"].get(
        "extensions",
        [".md", ".markdown"],
    )

    normalized: set[str] = set()

    for extension in extensions:
        value = str(extension).strip().lower()

        if not value.startswith("."):
            value = f".{value}"

        normalized.add(value)

    return normalized


def should_ignore(
    path: Path,
    root: Path,
    config: dict[str, Any],
) -> bool:
    """Return True when a file must be excluded from quality checks."""

    try:
        relative = path.resolve().relative_to(root.resolve())
    except ValueError:
        return True

    ignored_directories = {
        str(directory)
        for directory in config["files"].get(
            "ignore_directories",
            [],
        )
    }

    if any(part in ignored_directories for part in relative.parts):
        return True

    ignored_patterns = config["files"].get(
        "ignore_patterns",
        [],
    )

    relative_text = relative.as_posix()

    return any(
        fnmatch.fnmatch(path.name, pattern)
        or fnmatch.fnmatch(relative_text, pattern)
        for pattern in ignored_patterns
    )


def is_eligible_markdown(
    path: Path,
    root: Path,
    config: dict[str, Any],
) -> bool:
    """Return True when a file is eligible for Markdown validation."""

    if not path.is_file():
        return False

    if path.suffix.lower() not in configured_extensions(config):
        return False

    return not should_ignore(path, root, config)


def discover_markdown_files(
    target: Path,
    root: Path,
    config: dict[str, Any],
) -> list[Path]:
    """Discover eligible Markdown files from a file or directory target."""

    resolved_target = normalize_path(target, root)

    if not resolved_target.exists():
        raise FileNotFoundError(
            f"Target does not exist: {resolved_target}"
        )

    if resolved_target.is_file():
        if not is_eligible_markdown(
            resolved_target,
            root,
            config,
        ):
            return []

        return [resolved_target]

    files = [
        path.resolve()
        for path in resolved_target.rglob("*")
        if is_eligible_markdown(path, root, config)
    ]

    return sorted(
        files,
        key=lambda path: path.as_posix().lower(),
    )


def run_command(
    command: list[str],
    root: Path,
) -> tuple[int, str]:
    """Run a read-only quality command and capture combined output."""

    try:
        completed = subprocess.run(
            command,
            cwd=root,
            text=True,
            encoding="utf-8",
            errors="replace",
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            check=False,
        )
    except OSError as error:
        raise QualityGateExecutionError(
            f"Unable to execute command: {' '.join(command)}\n{error}"
        ) from error

    return completed.returncode, completed.stdout


def extract_integer(
    pattern: str,
    output: str,
    default: int = 0,
) -> int:
    """Extract an integer value from tool output."""

    match = re.search(pattern, output, flags=re.IGNORECASE)

    if match is None:
        return default

    return int(match.group(1))


def extract_boolean(
    pattern: str,
    output: str,
    default: bool = False,
) -> bool:
    """Extract a True/False value from tool output."""

    match = re.search(
        pattern,
        output,
        flags=re.IGNORECASE,
    )

    if match is None:
        return default

    return match.group(1).lower() == "true"


def run_repair_check(
    target: Path,
    root: Path,
    config: dict[str, Any],
) -> CheckResult:
    """Run `repair_markdown.py --check` without modifying the file."""

    repair_config = config["repair"]

    if not repair_config.get("enabled", True):
        return CheckResult(
            name="Repair Check",
            passed=True,
            return_code=0,
            output="Repair check disabled by configuration.",
        )

    script = root / "tools/markdown/repair_markdown.py"

    if not script.exists():
        return CheckResult(
            name="Repair Check",
            passed=False,
            return_code=2,
            output="",
            reason=f"Repair tool not found: {script}",
        )

    command = [
        sys.executable,
        str(script),
        str(target),
        "--check",
    ]

    if repair_config.get(
        "trim_trailing_whitespace",
        False,
    ):
        command.append("--trim-trailing-whitespace")

    return_code, output = run_command(command, root)

    changed = extract_boolean(
        r"Content changed:\s*(True|False)",
        output,
    )

    unresolved = extract_integer(
        r"Unresolved suspicious lines:\s*(\d+)",
        output,
    )

    fail_on_repair = config["quality_gate"].get(
        "fail_on_repair_needed",
        True,
    )

    passed = (
        return_code == 0
        and unresolved == 0
        and (not fail_on_repair or not changed)
    )

    reasons: list[str] = []

    if return_code != 0:
        reasons.append(
            f"repair command exited with code {return_code}"
        )

    if changed and fail_on_repair:
        reasons.append(
            "the document requires Markdown repair"
        )

    if unresolved:
        reasons.append(
            f"{unresolved} suspicious line(s) remain"
        )

    return CheckResult(
        name="Repair Check",
        passed=passed,
        return_code=return_code,
        output=output,
        reason="; ".join(reasons),
    )


def run_lint_check(
    target: Path,
    root: Path,
    config: dict[str, Any],
) -> CheckResult:
    """Run the Team LIPS Markdown linter."""

    lint_config = config["lint"]

    if not lint_config.get("enabled", True):
        return CheckResult(
            name="Lint",
            passed=True,
            return_code=0,
            output="Lint check disabled by configuration.",
        )

    script = root / "tools/markdown/lint_markdown.py"

    if not script.exists():
        return CheckResult(
            name="Lint",
            passed=False,
            return_code=2,
            output="",
            reason=f"Lint tool not found: {script}",
        )

    command = [
        sys.executable,
        str(script),
        str(target),
    ]

    if lint_config.get("summary_only", True):
        command.append("--summary-only")

    return_code, output = run_command(command, root)

    issues = extract_integer(
        r"Issues found:\s*(\d+)",
        output,
    )

    fail_on_issues = config["quality_gate"].get(
        "fail_on_lint_issues",
        True,
    )

    passed = (
        return_code == 0
        and (not fail_on_issues or issues == 0)
    )

    reasons: list[str] = []

    if return_code != 0:
        reasons.append(
            f"lint command exited with code {return_code}"
        )

    if issues and fail_on_issues:
        reasons.append(
            f"{issues} lint issue(s) detected"
        )

    return CheckResult(
        name="Lint",
        passed=passed,
        return_code=return_code,
        output=output,
        reason="; ".join(reasons),
    )


def run_validation_check(
    target: Path,
    root: Path,
    config: dict[str, Any],
) -> CheckResult:
    """Run the Team LIPS structural Markdown validator."""

    validation_config = config["validation"]

    if not validation_config.get("enabled", True):
        return CheckResult(
            name="Validation",
            passed=True,
            return_code=0,
            output="Validation disabled by configuration.",
        )

    script = root / "tools/markdown/validate_markdown.py"

    if not script.exists():
        return CheckResult(
            name="Validation",
            passed=False,
            return_code=2,
            output="",
            reason=f"Validation tool not found: {script}",
        )

    command = [
        sys.executable,
        str(script),
        str(target),
    ]

    return_code, output = run_command(command, root)

    warnings = extract_integer(
        r"Warnings:\s*(\d+)",
        output,
    )

    failures = extract_integer(
        r"Failures:\s*(\d+)",
        output,
    )

    fail_on_warnings = config["quality_gate"].get(
        "fail_on_validation_warnings",
        True,
    )

    fail_on_failures = config["quality_gate"].get(
        "fail_on_validation_failures",
        True,
    )

    passed = (
        return_code == 0
        and (not fail_on_warnings or warnings == 0)
        and (not fail_on_failures or failures == 0)
    )

    reasons: list[str] = []

    if return_code != 0:
        reasons.append(
            f"validator exited with code {return_code}"
        )

    if warnings and fail_on_warnings:
        reasons.append(
            f"{warnings} validation warning(s)"
        )

    if failures and fail_on_failures:
        reasons.append(
            f"{failures} validation failure(s)"
        )

    return CheckResult(
        name="Validation",
        passed=passed,
        return_code=return_code,
        output=output,
        reason="; ".join(reasons),
    )


def run_quality_gate_for_file(
    target: Path,
    root: Path,
    config: dict[str, Any],
) -> FileQualityResult:
    """Run every configured quality check for one Markdown file."""

    return FileQualityResult(
        path=target,
        checks=[
            run_repair_check(target, root, config),
            run_lint_check(target, root, config),
            run_validation_check(target, root, config),
        ],
    )


def run_quality_gate(
    target: Path,
    root: Path | None = None,
    config: dict[str, Any] | None = None,
) -> QualityGateResult:
    """
    Run the Team LIPS Engineering Quality Gate.

    This function performs validation only.

    It never modifies files and never performs Git operations.
    """

    resolved_root = root or repository_root()
    resolved_config = config or load_configuration(
        resolved_root
    )

    files = discover_markdown_files(
        target,
        resolved_root,
        resolved_config,
    )

    results = [
        run_quality_gate_for_file(
            file_path,
            resolved_root,
            resolved_config,
        )
        for file_path in files
    ]

    return QualityGateResult(files=results)


def format_relative_path(
    path: Path,
    root: Path,
) -> str:
    """Return a repository-relative path where possible."""

    try:
        return path.relative_to(root).as_posix()
    except ValueError:
        return str(path)


def print_quality_gate_report(
    result: QualityGateResult,
    root: Path,
    config: dict[str, Any],
) -> None:
    """Print a standardized Team LIPS quality-gate report."""

    reporting = config["reporting"]
    show_passing_output = reporting.get(
        "show_passing_output",
        False,
    )
    show_failure_output = reporting.get(
        "show_failure_output",
        True,
    )

    print("TEAM LIPS ENGINEERING QUALITY GATE")
    print()
    print(f"Repository: {root}")
    print(f"Files inspected: {len(result.files)}")
    print("Mode: VALIDATE ONLY")
    print("Files modified: No")
    print("Backups created: No")
    print("Git operations: No")

    if not result.files:
        print()
        print("No eligible Markdown files found.")
        print()
        print("FINAL RESULT: PASS")
        print("Commit readiness: READY")
        return

    for file_result in result.files:
        print()
        print("=" * 72)
        print(
            "Target: "
            + format_relative_path(
                file_result.path,
                root,
            )
        )
        print("=" * 72)

        for check in file_result.checks:
            status = "PASS" if check.passed else "FAIL"

            if check.reason:
                print(
                    f"{check.name}: {status} — "
                    f"{check.reason}"
                )
            else:
                print(f"{check.name}: {status}")

            should_show_output = (
                check.passed and show_passing_output
            ) or (
                not check.passed and show_failure_output
            )

            if should_show_output and check.output.strip():
                print()
                print(check.output.rstrip())
                print()

        print(
            "File result: "
            + ("PASS" if file_result.passed else "FAIL")
        )

    print()
    print("=" * 72)
    print(
        "FINAL RESULT: "
        + ("PASS" if result.passed else "FAIL")
    )
    print(
        "Commit readiness: "
        + ("READY" if result.passed else "BLOCKED")
    )

    if not result.passed:
        print("Human review required.")

    print("=" * 72)