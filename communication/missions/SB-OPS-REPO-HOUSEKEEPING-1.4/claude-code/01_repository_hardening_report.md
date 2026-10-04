# SB-OPS-REPO-HOUSEKEEPING-1.4 — Repository Hardening Report

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.4
**Parent:** SB-OPS-REPO-HOUSEKEEPING-1.0 (accepted PRs #736, #738, #740, #742)
**Execution actor:** Claude Code
**Authority:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.4/mission-control/01_repository_hardening_authorization.md`
**Handoff:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.4/claude-code/00_repository_hardening_handoff.md`
**Date:** 2026-10-04
**Scope:** HK-066, HK-067, HK-068; HK-017 as a boundary only

## 1. Baseline

| Check | Result |
|---|---|
| Canonical `main` | `09200da34d7c1f9cade35a665d5aacac87b06cf3`, equal to the authorized baseline (merge of PR #743); unchanged at completion |
| Authorization and handoff | Present on `main`; read in full; register rows HK-017, HK-066, HK-067, HK-068 read |
| Newer or conflicting authority | None; 0 open PRs |
| Mission branch | `mission/SB-OPS-REPO-HOUSEKEEPING-1.4-claude-code-hardening` (Mission Control's authorization branch is `…-1.4-repo-hardening`) |

## 2. Exact Changed Paths

| Path | Change |
|---|---|
| `.gitattributes` | Added (HK-066) |
| `.gitignore` | Modified (HK-067, HK-068) |
| `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.4/claude-code/01_repository_hardening_report.md` | Added (this report) |

## 3. HK-066 — `.gitattributes`

### 3.1 Tracked file mix (inspected before writing)

| Measure | Value |
|---|---|
| Tracked files | 1,853 |
| Extensions | `md` 1,478, `ts` 107, `tsx` 74, `json` 62, `txt` 36, `sql` 27, `png` 23, `py` 12, dotfiles 9, `yml` 7, `mjs` 6, `example` 3, `toml` 2, `csv` 2, `ico` 1, `lock` 1, `js` 1, `css` 1, `pre-commit` 1 |
| Index EOL | 1,818 `i/lf`, 24 `i/-text`, 11 `i/none` (six `.gitkeep`, four single-line SQL files, `supabase/config.toml`); **0 `i/crlf`, 0 `i/mixed`** |
| Binary content | Exactly the 24 `-text` files: 23 PNG and 1 ICO |

### 3.2 Policy

```text
* text=auto eol=lf
*.png binary
*.ico binary
```

Rationale:

- `text=auto` keeps Git's own text/binary detection.
- `eol=lf` stores and checks out detected text with LF on every platform, overriding a local `core.autocrlf=true`. This removes the Windows CRLF/LF working-tree drift recorded in HK-066 for future checkouts.
- Only the two binary types actually tracked are pinned. No other file type needs a special rule, so none was added.

### 3.3 Verification

| Check | Result |
|---|---|
| Attribute resolution | All 24 binaries resolve to `binary: set` (`text: unset`, `diff: unset`); all 1,829 text/empty files resolve to `text=auto`. **No binary file is classified as text** |
| Samples (`git check-attr`) | `public/favicon.ico` and the SB-P-1.9 PNG evidence: `binary: set`. `.githooks/pre-commit`, `README.md`, `bun.lock`: `text: auto`, `eol: lf` |
| No mass rewrite | Each working-tree file was hashed through the new filters (`git hash-object --stdin-paths`) and compared with its index blob: **1,852 of 1,853 identical**. The single difference is the intended `.gitignore` edit. A renormalize would change no tracked content |
| `git status` | Only `.gitignore` modified among tracked files |
| Renormalization | `git add --renormalize` was **not** run; no tracked file was rewritten for EOL |

Note: existing Windows working copies that currently hold CRLF text stay as they are until Git next rewrites those files. They already compare clean against the index, so no action is required.

## 4. HK-067 and HK-068 — `.gitignore`

### 4.1 Exact changes

```diff
 .env.*
 !.env.example
 !.env.test.example
+!.env.test.local.example
 ...
 .claude/
-.claude/settings.local.json
 ...
 # Team LIPS Markdown Toolkit generated artifacts
-*_BACKUP_*.md
+# Timestamped backups written by tools/markdown/repair_markdown.py:
+# {stem}_BACKUP_{YYYYMMDD}_{HHMMSS}{suffix}. Anchored on the timestamp so ordinary
+# names containing "Backup" are not ignored on case-insensitive clones.
+*_BACKUP_[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]_[0-9][0-9][0-9][0-9][0-9][0-9].md
+*_BACKUP_[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]_[0-9][0-9][0-9][0-9][0-9][0-9].markdown
 *_REPAIR_REPORT.txt
 ...
 MARKDOWN_REPAIR_SUMMARY.txt
+
+# Local AI tool / MCP configuration (may contain credentials — never commit)
 .mcp.json
```

### 4.2 Rationale

- **HK-067:** the generator is `tools/markdown/repair_markdown.py` lines 400–403, `f"{target.stem}_BACKUP_{timestamp}{target.suffix}"` with `strftime("%Y%m%d_%H%M%S")`.
  - The new patterns match that exact shape. Digit classes are not affected by case-folding, so `…_Backup_and_…` can no longer match.
  - The `.markdown` variant covers the generator's suffix passthrough. The previous rule did not ignore `.markdown` backups at all.
- **HK-068:**
  - The `!.env.test.local.example` negation stops the tracked example from being matched by `.env.*`. It mirrors the two existing example negations.
  - `.claude/settings.local.json` was redundant: `.claude/` already ignores the whole directory, and Git cannot re-include files under an ignored directory.
  - `.mcp.json` moved out of the "Markdown Toolkit" block into its own section, with the same protection.

### 4.3 Before / after `git check-ignore` evidence

Run with `git check-ignore -v --no-index` against the same case list. A `!` pattern is an explicit un-ignore.

| Path | Before | After |
|---|---|---|
| `…/Engineering_Local_Workflow_v1.0_BACKUP_20260717_151313.md` (real generated backup) | Ignored (`*_BACKUP_*.md`) | **Ignored** (timestamp `.md` rule) |
| `…/Engineering_Platform_Inventory_v1.0_BACKUP_20260715_211156.md` (real generated backup) | Ignored | **Ignored** |
| `docs/example_BACKUP_20261004_120000.markdown` (generator shape, `.markdown`) | Not ignored | **Ignored** |
| `docs/engineering/eos/Engineering_Backup_and_Disaster_Recovery_v1.0.md` | Ignored (`*_BACKUP_*.md`, case-folded) | **Not ignored** |
| `…_REPAIR_REPORT.txt`, `MARKDOWN_REPAIR_SUMMARY.txt`, `*_TEST.md`, `*_TOOL_TEST.md`, `*_WHITESPACE_TEST.md` | Ignored | Ignored (unchanged) |
| `.env`, `.env.local`, `.env.test`, `.env.test.local`, `.env.production` | Ignored | Ignored (unchanged) |
| `.env.example`, `.env.test.example` | Un-ignored (`!` rules) | Un-ignored (unchanged) |
| `.env.test.local.example` (tracked) | **Ignored by `.env.*`** | **Un-ignored** (`!.env.test.local.example`) |
| `.mcp.json` | Ignored | Ignored |
| `gitleaks-report.json` | Ignored | Ignored |
| `supabase/.temp/…` | Ignored | Ignored |
| `node_modules/…`, `dist/…`, `.output/…`, `lambda/parser/dist/…` | Ignored | Ignored |
| `.claude/settings.local.json`, `.claude/settings.json` | Ignored (`.claude/`) | Ignored (`.claude/`) |
| `.vscode/settings.json` / `.vscode/extensions.json` | Ignored / un-ignored | Unchanged |
| `tools/markdown/__pycache__/…pyc` | Ignored | Ignored |
| `.wrangler/…`, `.dev.vars`, `npm-debug.log` | Ignored | Ignored |

Tracked files matched by an ignore rule (`git ls-files -ci --exclude-standard`): before, 1 (`.env.test.local.example`); after, **0**.

### 4.4 Secret hygiene: no unintended unignore

The full set of ignored local paths on this workstation was computed under the old and new `.gitignore` (`git ls-files --others --ignored --directory --exclude-from=…`):

| Measure | Old | New |
|---|---:|---:|
| Ignored local paths | 22 | 21 |
| Became visible | — | **1: `docs/engineering/eos/Engineering_Backup_and_Disaster_Recovery_v1.0.md` only** |
| Became ignored | — | 0 |

`.env.test`, `.env.test.local`, `.mcp.json`, `gitleaks-report.json`, `.claude/` and `supabase/.temp/` all remain ignored. **No secret-bearing local file was unignored.**

## 5. HK-017 Boundary — Local EOS B&DR Draft

- After the fix, `docs/engineering/eos/Engineering_Backup_and_Disaster_Recovery_v1.0.md` **is visible as untracked** (`??`).
- It was **not** added, staged, committed, edited, moved or deleted. It is not in this PR.
- Its content was not assessed and is not treated as authoritative.
- HK-017 remains **INVESTIGATE / OWNER DECISION REQUIRED**: recover and admit it into Git under a separate mission, or discard it knowingly.
- Practical note: on this workstation the file now appears in `git status`. Anyone staging with `git add .` or `git add -A` would pick it up, so exact-file staging (already mandatory under `AGENTS.md`) matters until the owner decides.

## 6. Validation

| Check | Result |
|---|---|
| Markdown quality (`tools/markdown/quality_gate.py`, non-modifying) on this report | PASS, 0 issues; re-run by the pre-commit hook |
| `git diff --check` | Clean |
| Changed paths | Exactly the three authorized paths (Section 2) |
| EOL side effects | None: 1,852 of 1,853 tracked files hash-identical under the new filters; no tracked file other than `.gitignore` changed |

## 7. Resolution Status

| Item | Status |
|---|---|
| HK-066 `.gitattributes` | **Resolved**: LF policy and binary rules in place; no renormalization required or performed |
| HK-067 backup ignore pattern | **Resolved** for the recorded defect (`*_BACKUP_*.md` false positive). Residual (low): `*_TEST.md`, `*_TOOL_TEST.md` and `*_WHITESPACE_TEST.md` are still matched case-insensitively and could hide a genuine file named, for example, `Load_Test.md`. No tracked or local file matches them today, and the generator has no distinctive structure to anchor on. Unchanged, for a later decision |
| HK-068 minor `.gitignore` | **Resolved**: example negation added; redundant Claude entry removed with identical effective protection; `.mcp.json` labelled correctly |
| HK-017 local B&DR draft | **Remains OWNER DECISION REQUIRED**; now visible as untracked, untouched |

Observation, not changed (outside the authorized findings): the cleanup tool's known artifact name `…_TEST_BACKUP.md` (`tools/markdown/cleanup_markdown_artifacts.py:19`) was not ignored before this mission and is not ignored now. That is unchanged behaviour, recorded for completeness.

## 8. Confirmation of No Prohibited Action

- No `git add --renormalize`; no tracked file rewritten for EOL.
- The B&DR draft and all local secret-bearing files were not added or staged.
- No file deleted, renamed or moved; no branch or tag deleted or pruned; no PR closed.
- No GitHub or GitLab setting changed; no GitLab seed.
- No application code, tests, SQL or migrations changed; EOS authority untouched.

REPOSITORY HARDENING SUBMITTED — NO MASS RENORMALIZATION / SECRET ADMISSION / PROVIDER MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION
