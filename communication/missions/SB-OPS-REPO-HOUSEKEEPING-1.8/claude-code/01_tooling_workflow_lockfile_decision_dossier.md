# SB-OPS-REPO-HOUSEKEEPING-1.8 — Tooling, Workflow and Lockfile Decision Dossier

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.8
**Parent:** SB-OPS-REPO-HOUSEKEEPING-1.0
**Execution actor:** Claude Code
**Authority:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.8/mission-control/01_tooling_workflow_lockfile_decision_dossier_authorization.md`
**Handoff:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.8/claude-code/00_tooling_workflow_lockfile_dossier_handoff.md`
**Date:** 2026-10-04
**Mode:** Evidence and disposition support only. Nothing was executed in write mode, and no workflow, lockfile, Lovable file, hook or provider setting was changed.
**Matrix:** [`02_tooling_disposition_matrix.md`](02_tooling_disposition_matrix.md)

## 1. Summary

| Item | Primary classification | First-seed blocker? |
|---|---|---|
| HK-020 `tools/governance/*.py` | REMOVE / ARCHIVE CANDIDATE | No |
| HK-022 watcher and cleanup tools | KEEP AS-IS | No |
| HK-024 Markdown gate workflow | SAFE TO DEFER UNTIL AFTER FIRST SEED | No |
| HK-025 GC-42 workflows | REMOVE / ARCHIVE CANDIDATE | No |
| HK-026 `bun.lock` | OWNER / PROVIDER DECISION REQUIRED | No |
| HK-029 `.lovable/plan.md` | KEEP AS-IS | No |
| HK-073 relative-link checker | SAFE TO DEFER UNTIL AFTER FIRST SEED | No |

**FIX BEFORE FIRST SEED:** none.
**OWNER / PROVIDER DECISION REQUIRED:** HK-026, which needs confirmation of whether any Lovable project is still connected to `SmartBusinessv1/smart-business`. The same confirmation would also settle the residual question on HK-029.

**Answer to the key question:** **No.** None of the seven items needs to be resolved before GitHub can be declared "clean enough to preserve" for the first GitLab continuity seed (Section 10).

## 2. Baseline

| Check | Result |
|---|---|
| Canonical `main` | `e4f0c3a2c430f07e2be73f9d7ce491c90bba4b08`, equal to the authorized baseline (merge of PR #751); unchanged at completion |
| Authorization and handoff | Present on `main`; read in full; register rows for all seven items read |
| Newer or conflicting authority | None; 0 open PRs |
| Mission branch | `mission/SB-OPS-REPO-HOUSEKEEPING-1.8-claude-code-tooling-dossier` (Mission Control's authorization branch is `…-1.8-tooling-workflow-dossier`) |
| Method | Static reading of code and configuration; `git grep` inbound-reference analysis; `git log` provenance; read-only `gh api` GETs to resolve action tag SHAs; the same read-only relative-link checker used in earlier packages. No tool was run in write mode |

## 3. HK-020 — `tools/governance/*.py`

| Script | Lines | Reads | Writes | Mode safety |
|---|---:|---|---|---|
| `governance_repository_audit.py` | 620 | `*.md` under `--root` (default `.`), first 120 lines per file | Only the optional `--json` / `--csv` report files named by the user | Read-only on documents |
| `governance_metadata_initializer.py` | 657 | Selected documents (single file or batch list) | The selected documents, adding missing `Approval Status`, `Approved By` and `Approval Date` fields (default value "Pending") | Mutually exclusive `--check` / `--apply`, one required; writes only on `--apply` |
| `markdown_governance_manager.py` | 474 | Selected documents | The selected documents' `Status` and approval fields; optionally runs the Quality Gate and **rolls back** all changes on failure | `--check` / `--preview` / `--apply`, one required; writes only on `--apply` |

- **Consumers:** none. Inbound references exist only in inventory and housekeeping documents: `tools/README.md` and `Engineering_Tooling_Register.md` (both added by HK-021 / HK-010 in PR #740) and SB-OPS-REPO-HOUSEKEEPING reports. There is no instruction, workflow, hook, runbook, package script or mission consumer.
- **Evidence of use:** one tracked document carries the managed `**Approval Status:**` field (`Engineering_Release_Management_v1.0.md`), and no commit records running the scripts.
- **Origin:** added 2026-07-18 in SB-INF-1.9 with the EOS approval-metadata model, which is now dormant after FD-HK-2.
- **Executable:** yes (Python), but nothing invokes it. Not used by CI, hooks, Lovable or runtime.
- **Stale assumption:** an EOS approval-metadata workflow that no current process uses.
- **Preservation value:** low; Git history preserves the code.
- **Risk if left:** low (writes need explicit `--apply`). It is maintenance and discovery noise.
- **Risk if removed:** very low (no consumers; recoverable from history).
- **Disposition:** REMOVE / ARCHIVE CANDIDATE. Remove from the tree under a later mission, keeping history, unless the Founder wants to adopt the metadata tooling, in which case document it instead.
- **Later authority:** a Mission Control tooling-cleanup mission. Not a seed blocker.

## 4. HK-022 — `vscode_save_watcher.py` and `cleanup_markdown_artifacts.py`

- **Invocation:** nothing in the repository invokes either: no workflow, hook, package script or other tool.
- **Watcher:** a manually started, long-running polling process (`--interval`, default 1.0 s, minimum 0.2 s) that runs the Quality Gate when an eligible Markdown file is saved. It is "automatic" only after a human starts it.
- **Cleanup tool:** mutually exclusive `--check` / `--apply`, one required.
  - `--apply` deletes matched files only after the typed confirmation `DELETE GENERATED FILES`, unless explicitly skipped.
  - The v1.0 release files are protected by name.
  - The default directory is `docs/engineering/eos/v1.0`; its patterns mirror the toolkit's generated-artifact names.
  - Default behaviour is safe. Note that its `*_BACKUP_*.md` pattern is broader than the narrowed `.gitignore` rule (HK-067).
- **Documentation:** `tools/README.md` (since PR #740) documents both as optional local and manual tools. The "Automatic Save Watcher" wording that remains is in the actor EOS workflows (HK-002 / 003 scope) and non-governing EOS documents (Automation Architecture, EOS README §8, HK-004 scope).
- **Executable:** yes; manual only. Not used by CI, hooks, Lovable or runtime.
- **Risk if left:** low. **Risk if removed:** low, but they are genuine optional conveniences.
- **Disposition:** KEEP AS-IS, as documented optional local tools. Correcting the "automatic" wording belongs with the EOS hygiene items, not here. Optionally align the cleanup pattern with the timestamped backup shape later.
- **Later authority:** none required to keep. Not a seed blocker.

## 5. HK-024 — `.github/workflows/markdown-quality-gate.yml`

| Fact | Evidence |
|---|---|
| `develop` branch | **Does not exist** on `origin`. The push trigger (line 7) and pull-request trigger (line 19) for `develop` are dead |
| `docs/**` push trigger | Live: 45 `docs/*` branches exist |
| Action pinning | `actions/checkout@v4` (line 31) and `actions/setup-python@v5` (line 36) are **mutable tags**. It is the only workflow not SHA-pinned; all others pin by full SHA with a version comment (for example `actions/checkout@11bd719…683 # v4.2.2`) |
| Status under MC-160 | **Advisory**: not a required check (live branch protection has no required checks; `communication/governance/branch-protection-verification.md`); Actions dispatch remains affected by the MC-160 incident |
| Last change | 2026-08-18, `cdd0a28` (GC-42B PR-trigger fix, #317) |

**Exact smallest safe repair** (later mission):

1. Delete the two `- develop` lines (lines 7 and 19).
2. Line 31: `uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2`, the same pin already used by the other workflows.
3. Line 36: `uses: actions/setup-python@a26af69be951a213d495a4c3e4e4022e16d87065 # v5.6.0`.

On 2026-10-04 the `v5` tag resolved to `a26af69be951a213d495a4c3e4e4022e16d87065`, which equals release tag `v5.6.0` (read-only `gh api` lookups). Re-verify at execution time.

- **Risk if left:** low to medium. A mutable tag is a supply-chain inconsistency in a public repository, but the workflow has `contents: read` only and is advisory. The dead trigger is inert.
- **Risk of the repair:** very low. Because of the Actions incident it cannot be proven by a run today; that has to be recorded as missing evidence.
- **Disposition:** SAFE TO DEFER UNTIL AFTER FIRST SEED. **Later authority:** a Mission Control workflow-hygiene mission. Not a seed blocker.

## 6. HK-025 — GC-42 workflows

| Workflow | Origin | What it does |
|---|---|---|
| `aws-gc42-oidc-claims.yml` (89 lines) | SB-P-1.11-GC-42A, PR #314, 2026-08-18 | `workflow_dispatch` only. Requests a GitHub OIDC token in protected environment `aws-nonprod-parser` and verifies its claims |
| `aws-gc42-role-assumption-verification.yml` (173 lines) | SB-P-1.11-GC-42A, PR #319, 2026-08-18 | `workflow_dispatch` only. Uses the OIDC token to `assume-role-with-web-identity` into the non-production parser deploy role and calls `sts get-caller-identity` |

- **Purpose:** one-off provider verification for the SB-P-1.11 parser deploy path (GC-42). Both were last changed at creation.
- **Active use:** none. SB-P-1.12 mentions GC-42 only as historical disclosure of a reviewer's prior work (records 19 and 24). No current mission instructs a run.
- **Evidence preserved elsewhere:** yes, in the SB-P-1.11 archive (`communication/archive/SB-P-1.11/report.md`, `instruction.md`, `source/instruction1.136.md`). Correction to the audit: GC-42 evidence is **not** under `communication/evidence/`, which holds GC-38R and GC-43A/C evidence.
- **Current operational value:** low. The parser deploy path (`aws-gc38r-parser-deploy.yml`) does not depend on these workflows. They would be useful only if someone needed to re-verify OIDC trust, and that could be re-added from history.
- **Security note:** while present, each is a manually dispatchable route to mint deploy-role credentials, constrained by the protected environment and the deploy role's main-only trust. Retiring them slightly reduces that surface. The role ARN embeds an AWS account identifier, already covered by the accepted HK-063 identifier disposition.
- **Risk if left:** low. **Risk if retired:** very low (history and archived evidence retained).
- **Disposition:** REMOVE / ARCHIVE CANDIDATE. Retire from `.github/workflows/` under a later mission. Do not move them into another folder; Git history is the archive. Not a seed blocker.

## 7. HK-026 — `bun.lock`

| Fact | Evidence |
|---|---|
| CI package manager | **npm**: every CI workflow runs `npm ci` (build-assurance, full-assurance, GC-38R deploy) |
| `package-lock.json` vs `package.json` | **In sync**: 0 root differences across 80 direct dependencies |
| `bun.lock` vs `package.json` | **Stale**: 72 of 80 direct dependencies present. **Missing 8:** `@aws-sdk/client-s3`, `aws4fetch`, `exceljs`, `papaparse`, `@tanstack/router-core`, `@types/papaparse`, `esbuild`, `seroval`. No specifier differences; no extras. (The accepted audit listed 4; its substring test missed the other four.) |
| `bun.lock` history | Written by the Lovable bot (`gpt-engineer-app[bot]`) from the template until 2026-07-24; regenerated once by a human in SB-P-1.11-DEP-2 (`0ffae38`, 2026-08-07) |
| Earlier failure precedent | SB-P-1.11-DEP-1 (archived `report1.50`) found a stale `bun.lock` caused `bun install --frozen-lockfile` to fail; regeneration fixed it. With 8 missing entries, a frozen Bun install against **this** repository would fail again |
| Bun configuration | `bunfig.toml` (Lovable template, 2025-01-01) sets a 24-hour `minimumReleaseAge` supply-chain guard |
| Where Lovable builds today | The production delivery repository `SmartBusinessv1/starter-supab-shell` (Lovable project `f3e992ec…`, per `mission-control/mission_memory.md`). SB-OPS-PROD-SYNC-1.0 synchronizes code there by governed mission and reconciles `bun.lock` **in the target**; it corrected an "overly broad `package.json`/`bun.lock` parity rule" |
| Lovable activity in this repository | Last Lovable-bot commit on any ref: 2026-07-24 (216 bot commits before that, none since) |
| Instructions requiring Bun | None in `AGENTS.md`, `CLAUDE.md`, `CHATGPT.md`, `README.md`, `merge/active/**` or `docs/governance/**` |

- **Assessment:** CI and the delivery path do not consume this repository's `bun.lock`. The only exposure is a Bun-based install run directly against `smart-business` (for example a Lovable project still connected to it, or a manual `bun install --frozen-lockfile`).
- **Can repository evidence alone decide?** **Not fully.** It strongly indicates no current Bun consumer, but it cannot prove whether any Lovable project is still connected to this repository.
- **Options:**
  - **Refresh:** `bun install` under a later mission; expected diff is the 8 added dependency graphs only. Keeps both lockfiles truthful and matches the 2026-08-07 precedent.
  - **Remove:** leaves `bunfig.toml` orphaned and departs from the Lovable template shape that sync missions compare against.
  - **Keep stale:** documented drift; frozen Bun installs here would fail.
- **Recommended path:** obtain provider confirmation first. Then **refresh** as the lowest-surprise option whether or not a connection exists. Do not remove while any doubt remains.
- **Disposition:** OWNER / PROVIDER DECISION REQUIRED. Not a seed blocker: the seed preserves the file as-is, and CI is unaffected.

## 8. HK-029 — `.lovable/plan.md`

- **Content:** "SB-P-1.10-TV-1.0 — Technical Verification Closure Plan" (evidence-collection scope for SB-P-1.10). **Stale.**
- **Provenance:** every commit by `gpt-engineer-app[bot]`, the last on 2026-07-23. **Platform-managed.** Sibling files: `project.json` (template), plus two phase-4 verification notes (Lovable bot, 2026-07-19).
- **Inbound references:** all historical: SB-P-1.11 archive (9), SB-OPS-PROD-SYNC records (7), two Lovable-credit audits, housekeeping reports, and the two `.lovable/` sibling notes. **No instruction says anything reads it.**
- **Precedent:** SB-OPS-PROD-SYNC-1.0 instruction 1.1 required `.lovable/**` to be **preserved** in the delivery repository, and its report verified `.lovable/plan.md` and `project.json` untouched. Mission Control has treated `.lovable/**` as platform-owned.
- **Does Lovable read or rewrite it?** Repository evidence shows Lovable **wrote** it while connected. Whether a connected project would read or overwrite it now cannot be proven from the repository; there is no sign of a current connection (Section 7).
- **Risk if left:** negligible (inert text; not built, executed or referenced as authority). **Risk if changed or removed:** small but non-zero if a project is connected, and it would depart from the preservation precedent.
- **Can Mission Control decide from repository evidence alone?** Yes, for **keep**, which needs no provider confirmation. Changing or removing it would need the same Lovable-connection confirmation as HK-026.
- **Disposition:** KEEP AS-IS. Not a seed blocker.

## 9. HK-073 — Internal relative-link checking

**What the current gate validates:**

- `validate_markdown.py`: content, heading structure, code fences, tables, escaped Markdown;
- `lint_markdown.py`: rules MD001–MD012, which all target escaped Markdown, fence and format issues;
- repair-check.

**No link of any kind is checked.** The only match for "link" in `tools/markdown/**`, `.githooks/pre-commit` and the workflow is the file deletion call `unlink`. `AGENTS.md` nevertheless requires "Functional internal links".

**Current baseline** (read-only checker, `main@e4f0c3a`): 576 relative links checked, **30 broken**:

- 9 in `communication/archive/**`, which is immutable (Protocol §26);
- 20 in `docs/implementation/SB-P-1.8_Implementation_Assessment.md` (HK-033);
- 1 in an SB-P-1.12 snapshot record (HK-034).

**Feasibility:** high. A deterministic checker needs:

- relative-link extraction with fenced code ignored;
- `#anchor` and URL encoding handled;
- resolution against the tracked tree (`git ls-files`) or the filesystem;
- external URLs skipped.

It is about 60 lines of standard-library Python, needs no network, and is provider-independent. The equivalent Node script has been used read-only throughout this housekeeping series.

**Recommended placement:** a **separate helper**, `tools/markdown/check_relative_links.py`.

- It would reuse `quality_gate_core` only for file selection and configuration (`.markdown-gate.yml` ignore patterns) and would not change existing gate semantics.
- Rationale: the gate's pass/fail contract stays unchanged; the helper can run standalone, and integration can be decided later.

**Recommended rollout:**

1. **Manual only.** Run against the whole repository with `communication/archive/**` excluded (immutable) and an explicit known-baseline list for HK-033 / HK-034.
2. **Pre-commit advisory.** Warn on newly broken links in staged files only.
3. **CI advisory** in the Markdown gate, once Actions dispatch is restored. It stays non-blocking, consistent with MC-160.

**Disposition:** SAFE TO DEFER UNTIL AFTER FIRST SEED. Link rot affects navigation, not preservation. **Later authority:** a Mission Control tooling mission (new file in `tools/markdown/` only). Not a seed blocker.

## 10. "Clean Enough to Preserve" Dependency

> Do any of HK-020, HK-022, HK-024, HK-025, HK-026, HK-029 or HK-073 need to be resolved before GitHub can reasonably be declared "clean enough to preserve" for the first GitLab continuity seed?

**No.**

| Risk type | Assessment |
|---|---|
| **Preservation risk** | None. The seed copies canonical refs and objects exactly. None of these items affects what is preserved or whether it can be restored |
| **Runtime / build risk** | None for CI (npm, in-sync lockfile) or production (built from the delivery repository). Only residual: a frozen Bun install against this repository would fail (HK-026); it is not on any current build path |
| **Provider / workflow risk** | Low. HK-024 mutable action tags in an advisory, read-only workflow. HK-025 dispatchable deploy-role verifiers behind a protected environment. Neither affects the seed, and both are better handled after Actions dispatch is restored |
| **Navigation / maintenance debt** | Low. HK-020 orphaned scripts, HK-022 wording drift (EOS scope), HK-073 missing link check (30 known broken links, mostly immutable or historical) |

All seven can be resolved after the first seed through ordinary governed commits that reach GitLab downstream. The global "clean enough to preserve" decision remains with Mission Control and the Founder.

## 11. Validation

| Check | Result |
|---|---|
| Canonical `main` at completion | `e4f0c3a2c430f07e2be73f9d7ce491c90bba4b08` (unchanged) |
| Existing tracked files | None changed (`git status` shows only the two new reports) |
| Markdown quality (`tools/markdown/quality_gate.py`, non-modifying) | PASS, 0 issues, both reports; re-run by the pre-commit hook |
| `git diff --check` | Clean |
| Changed paths | Only the two authorized reports |

## 12. Confirmation of No Mutation

- No governance tool was run (write or check mode); no cleanup was run; no watcher was started.
- No workflow, hook, `package-lock.json`, `bun.lock`, `bunfig.toml` or `.lovable/**` file was modified; no lockfile was regenerated.
- No link-check tooling was added; no file was archived or removed.
- Provider interaction was read-only `gh api` GETs (action tag resolution). No GitHub or GitLab setting changed; no GitLab seed.
- No branch or tag was deleted; no application code, tests, SQL or migrations changed.

TOOLING / WORKFLOW / LOCKFILE DOSSIER SUBMITTED — NO EXECUTABLE / PROVIDER / SEED MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION
