# SB-OPS-REPO-HOUSEKEEPING-1.8 — Tooling Disposition Matrix

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.8
**Execution actor:** Claude Code
**Canonical baseline:** `main` at `e4f0c3a2c430f07e2be73f9d7ce491c90bba4b08`
**Date:** 2026-10-04
**Evidence:** [`01_tooling_workflow_lockfile_decision_dossier.md`](01_tooling_workflow_lockfile_decision_dossier.md)

Classifications are recommendations only. Every action requires its own authorized mission.

| HK | Files | Current role / consumers | Executable? Used by CI / hooks / Lovable / runtime? | Risk if left | Risk if changed | Primary classification | First-seed blocker? | Recommended later action | Later authority |
|---|---|---|---|---|---|---|---|---|---|
| HK-020 | `tools/governance/governance_repository_audit.py`, `governance_metadata_initializer.py`, `markdown_governance_manager.py` | None; inventory mentions only (`tools/README.md`, Tooling Register) | Yes; writes only with explicit `--apply` (audit writes report files only). Not used by any | Low (noise) | Very low (history preserves) | **REMOVE / ARCHIVE CANDIDATE** | No | Remove from the tree, unless the Founder wants to adopt the EOS approval-metadata tooling (then document it) | Mission Control tooling-cleanup mission |
| HK-022 | `tools/markdown/vscode_save_watcher.py`, `cleanup_markdown_artifacts.py` | Optional local tools, documented in `tools/README.md`; nothing invokes them | Yes, manual only (watcher must be started by a human; cleanup needs a mode plus typed confirmation). Not used by any | Low | Low, but they are useful conveniences | **KEEP AS-IS** | No | None now. "Automatic Save Watcher" wording is fixed with EOS hygiene (HK-002 / 003, HK-004). Optionally align the cleanup `*_BACKUP_*.md` pattern with the timestamped shape | None to keep |
| HK-024 | `.github/workflows/markdown-quality-gate.yml` | Advisory Markdown gate (MC-160); not a required check | Yes (CI, advisory); Actions dispatch affected by the MC-160 incident | Low to medium: mutable action tags; dead `develop` trigger | Very low | **SAFE TO DEFER UNTIL AFTER FIRST SEED** | No | Remove both `develop` lines; pin `actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2` and `actions/setup-python@a26af69be951a213d495a4c3e4e4022e16d87065 # v5.6.0` (re-verify at execution) | Mission Control workflow-hygiene mission |
| HK-025 | `.github/workflows/aws-gc42-oidc-claims.yml`, `aws-gc42-role-assumption-verification.yml` | One-off SB-P-1.11 GC-42 OIDC and role-assumption verifiers; no active mission use | Yes (`workflow_dispatch`, protected environment `aws-nonprod-parser`). Not used by the deploy path | Low: dispatchable credential-minting verifiers | Very low; evidence archived in `communication/archive/SB-P-1.11/` | **REMOVE / ARCHIVE CANDIDATE** | No | Retire from `.github/workflows/`; rely on Git history and archived evidence | Mission Control workflow-hygiene mission |
| HK-026 | `bun.lock` (plus `bunfig.toml`, template) | No current consumer evidenced. CI uses `npm ci`; Lovable builds from `starter-supab-shell`, whose `bun.lock` is reconciled by sync missions | Lockfile. A frozen Bun install against this repository would fail (8 dependencies missing) | Low to medium only if a Bun consumer exists | Low (refresh) / medium (remove: orphans `bunfig.toml`, departs from the template shape) | **OWNER / PROVIDER DECISION REQUIRED** | No | Confirm whether any Lovable project is still connected to `SmartBusinessv1/smart-business`; then **refresh** with `bun install` (expected diff: the 8 missing graphs). Do not remove while uncertain | Provider confirmation, then a Mission Control lockfile mission |
| HK-029 | `.lovable/plan.md` | Stale Lovable-written SB-P-1.10-TV-1.0 plan; references are historical only | No (inert text); platform-managed | Negligible | Small if a project is connected; departs from the `.lovable/**` preservation precedent (SB-OPS-PROD-SYNC-1.0) | **KEEP AS-IS** | No | None. Revisit only with the HK-026 Lovable-connection confirmation | None to keep |
| HK-073 | (gap) proposed `tools/markdown/check_relative_links.py` | No link checking exists anywhere; 30 known broken relative links (9 archive-immutable, 20 HK-033, 1 snapshot) | N/A | Low: navigation rot | Low: new standalone helper; gate semantics unchanged | **SAFE TO DEFER UNTIL AFTER FIRST SEED** | No | Add a deterministic, stdlib-only helper; staged rollout: manual → pre-commit advisory → CI advisory (non-blocking under MC-160); exclude `communication/archive/**`; seed a known-baseline list | Mission Control tooling mission |

## Summary

| Classification | Items |
|---|---|
| FIX BEFORE FIRST SEED | **None** |
| SAFE TO DEFER UNTIL AFTER FIRST SEED | HK-024, HK-073 |
| OWNER / PROVIDER DECISION REQUIRED | HK-026 |
| KEEP AS-IS | HK-022, HK-029 |
| REMOVE / ARCHIVE CANDIDATE | HK-020, HK-025 |

**Clean-enough dependency:** none of the seven items needs resolution before the first GitLab continuity seed. They carry no preservation risk and no CI or production build risk. Provider and workflow risk is low; the rest is navigation and maintenance debt.
