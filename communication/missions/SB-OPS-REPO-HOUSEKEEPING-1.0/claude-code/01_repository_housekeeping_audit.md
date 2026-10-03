# SB-OPS-REPO-HOUSEKEEPING-1.0 — Repository Housekeeping Audit

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.0
**Execution actor:** Claude Code
**Mode:** Read-only audit; two report files only
**Authority:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/mission-control/01_repository_housekeeping_audit_authorization.md`
**Handoff:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/claude-code/00_housekeeping_audit_handoff.md`
**Canonical baseline:** `main` at `4604fb8169f24149039ef680d8822be149a8d815`
**Audit date:** 2026-10-03
**Companion register:** [`02_housekeeping_candidate_register.md`](02_housekeeping_candidate_register.md)

No classification in this report or the register is deletion, archive, rename or repair authority. Every candidate requires separate Mission Control disposition and, where governance requires it, Founder approval.

## 1. Executive Summary

The repository is in substantially better order than its size suggests. The canonical governance spine (`README.md`, `AGENTS.md`, `merge/active/`, `docs/governance/`, the communication Protocol) is internally consistent at the path level: a backtick-path check of every active operational source found **zero** references to nonexistent files. Historical material is mostly well-bounded by explicit non-governing markers. No credible live secret exposure was found.

The material findings are concentrated in six areas:

1. **EOS is two different things.** Two EOS files are mandatory, actively governed operational sources (the Claude and ChatGPT GitHub workflows). The remaining EOS material is dormant: the ten-document AC-02 package (the EOS README plus nine standalone documents) has been formally `CORRECTION REQUIRED — FOUNDER APPROVAL PENDING` since 2026-08-03, two "Approved Baseline" platform documents describe a platform that no longer exists (no AWS, Lambda, npm/Vitest, Build Assurance; Google Drive still "pending Phase 2" although retired), and the Tooling Register is a v1.0 snapshot. No script, hook, workflow or package script reads any EOS document. The only EOS-related enforcement is the Markdown Quality Gate, which lives in `tools/markdown/` and is now advisory. The two active workflows have drifted behind the 2026-09-20 `AGENTS.md` amendment (standard branch convention, attribution-trailer rule, work-package grants).
2. **An authority-order conflict exists.** `AGENTS.md` places "Engineering Operating System (EOS)" at precedence 4, above `AGENTS.md` itself. Source 17's canonical precedence table does not mention EOS at all, and the EOS README asserts a third, different order. Because the active EOS workflows are stale, the literal `AGENTS.md` order would rank stale text above current rules.
3. **Recorded controls no longer match live provider state.** `communication/governance/branch-protection-verification.md` records `Markdown Quality Gate` as a required check; the live GitHub API returns no required checks. A later Mission Control record (MC-160 §2, item 7) made the gate advisory, but the verification record was never reconciled. Separately, GitHub Actions reports zero workflow runs although all six workflows are `active`; MC-160 records this as a suspected GitHub-side dispatch incident, not a repository defect.
4. **The 668-branch count has a single root cause.** `delete_branch_on_merge` is `false`. Of 667 non-`main` remote branches, 643 sit exactly at the head of their merged pull request and add nothing beyond `main` plus GitHub's preserved `refs/pull/*`. Five more refs carry no unique content. Nineteen hold divergent work and need human review, including one unmerged, PR-less 12-file branch (`mission/SB-ENG-BUILD-ASSURANCE-1.0-foundation`).
5. **Public-repository security guards are off.** The repository is public, and GitHub secret scanning, push protection and Dependabot security updates are all disabled (all are free for public repositories).
6. **Continuity-relevant findings, separated by effect.**
   - **Genuine pre-GitLab-seed controls.** The seed replicates Git history, so a history-wide secret scan (HK-078) should precede it. Test fixtures (a throwaway private key, synthetic AWS key IDs, Supabase anon JWTs in archives) may trip GitLab secret detection and need handling so the seed is not falsely blocked (HK-062). The prune-before-or-after-seed order for the 648 non-unique branches must also be decided (HK-050 to HK-052).
   - **Already settled by existing authority.** Track A is an encrypted bare mirror, multi-generation Git bundles, verified manifests/checksums and a site-independent encrypted copy. Ignored local secret-bearing files on the workstation (`.env.test.local`, `.mcp.json`, `gitleaks-report.json`) reinforce why a checked-out working-directory copy is not, and must not become, the governed baseline (HK-065).
   - **Useful hardening, not seed or Track A blockers.** No `.gitattributes`, with `core.autocrlf=true`, leaves the Windows working tree mixed (480 CRLF and 1,322 LF files) (HK-066). A case-insensitive `.gitignore` pattern is too broad (HK-067). The governed mechanisms operate on canonical Git objects and refs, which working-tree EOL conversion does not alter.
   - **Separate owner housekeeping item.** The same `.gitignore` false positive silently excludes a local-only EOS **Backup and Disaster Recovery** draft from Git (HK-017). It is not canonical Git content, and its status does not redefine or block the authorized Track A method.

The register contains 78 candidates. The highest-value early actions are low-risk and mostly configuration or record reconciliation rather than deletion. See Section 16.

## 2. Canonical Baseline / Authority Verification

| Check | Result |
|---|---|
| `git fetch origin --prune` | Completed |
| Canonical `main` SHA | `4604fb8169f24149039ef680d8822be149a8d815` — equal to the authorized baseline |
| Authorization file on `main` | Present: `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/mission-control/01_repository_housekeeping_audit_authorization.md` |
| Handoff file on `main` | Present: `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/claude-code/00_housekeeping_audit_handoff.md` |
| Authorization merge | PR #735 (`docs(housekeeping): authorize pre-continuity repository audit`), merged |
| Newer commits on `main` | None at start; re-verified after the network interruption, still none |
| Open pull requests | None (0 open; 731 total) |
| Conflicting authority | None found; the GitLab live-guidance records (MC-188, #733/#734) explicitly run in parallel and hold the GitLab seed and Track A baseline pending this disposition |
| Mission branch | `mission/SB-OPS-REPO-HOUSEKEEPING-1.0-claude-code-audit`, created from the exact baseline SHA |
| Branch-name note | `mission/SB-OPS-REPO-HOUSEKEEPING-1.0-audit` already existed as Mission Control's squash-merged authorization branch (PR #735); a distinct name was used to avoid reusing it |

**Interruption record.** Execution was interrupted by a temporary network/DNS failure (`ENOTFOUND`) after the `.gitignore`, EOL, `.gitattributes`, Prettier and ESLint ignore checks. On resumption the working tree was clean, `HEAD` and `origin/main` were both still `4604fb8`, both authority files were present, and no pull requests were open. No earlier check was repeated except where needed for evidence integrity (the workflow-run query, which had returned empty before the outage, was re-run through the REST API).

## 3. Methodology

All work was read-only against the baseline tree, Git metadata, and read-only GitHub API queries. No file other than the two authorized reports was created or changed. No provider setting was changed.

| Area | Method |
|---|---|
| Inventory | `git ls-files` (1,837 tracked files), per-directory counts, extension mix, `git ls-tree -l` size ranking, duplicate-blob detection across the tree |
| History | `git log` first-add and last-change per file for EOS, tools, instruction files and lockfiles |
| References | `git grep` inbound-reference counts per candidate; separation of historical (`communication/archive/**`) from active references |
| Links | Node script resolving every relative Markdown link in all 1,462 `.md` files (471 links checked); separate backtick-path check over all active operational sources |
| EOS | File-by-file reading of indexes, status headers and governing records; term-coverage matrix against current platform facts; line-overlap measurement of `v1.0/` package files against the monolith; tag-tree comparison |
| Tooling | `package.json` script-target existence; lockfile-versus-manifest dependency comparison; workflow trigger and step inspection; hook and `core.hooksPath` inspection; tool-script inbound tracing |
| Branches | Ancestry test of all 668 remote heads; join with all 731 PRs (`gh pr list --state all`); branch tip versus merged PR `headRefOid`; per-file "identical in `main`" test for every divergent branch |
| Provider (read-only) | `gh api` for repository settings, branch protection, rulesets, Actions permissions, workflow states, workflow runs, and security-and-analysis settings |
| Security | Pattern scan (AWS key IDs, JWTs, private-key blocks, GitHub tokens, model-provider keys, Supabase new-format keys, Slack/Google keys, credentialed Postgres URLs, payment live keys, Meta tokens); masked triage (prefix, length, decoded `role` claim only — no value printed or recorded) |
| Line endings | `git ls-files --eol` index and working-tree distributions; `core.autocrlf`, `core.ignorecase` |
| Quality | `tools/markdown/quality_gate.py` run read-only on active root documents (configuration `modify_files: false`); working tree confirmed clean afterward |

Limits are recorded in Section 18.

## 4. Repository Topology Summary

| Area | Tracked files | Role | Notes |
|---|---:|---|---|
| `communication/` | 1,160 | Live exchange, durable mission records, frozen archives, evidence | 553 in `missions/`, 496 in `archive/` (396 of them `SB-P-1.11`), 88 in `live/` |
| `docs/` | 298 | Implementation, migration, blueprint, engineering, governance | `docs/implementation/` (124) and `docs/engineering/` (30) have no index |
| `src/` | 106 | Application (TanStack Start) | README "High-Level Structure" still says `app/` |
| `organizational-learning/` | 93 | OLE harvester, schemas, candidates, promotions, tests | Tests wired via `vitest.fast.config.ts` |
| `tests/` | 34 | Application/integration tests | |
| `supabase/` | 28 | 24 migrations, 3 verification files, `config.toml` | Governed by `docs/migration/README.md`; not assessed for SQL content |
| `Project Source File Archive/` | 26 | Non-governing legacy source archive | Spaces and `(n)` suffixes in path names |
| `merge/` | 24 | `merge/active/` = canonical 20-file source set | `merge/README.md` still describes a consolidation workspace |
| `tools/` | 20 | Markdown toolkit and governance metadata scripts | `tools/governance/` is unreferenced |
| `mission-control/` | 8 | Mission memory and historical Mission Control records | Mission memory last updated 2026-09-21 |
| `.github/` | 6 | Six workflows | No `dependabot.yml`, no `CODEOWNERS` |
| `.lovable/` | 4 | Lovable platform files | `plan.md` is an SB-P-1.10 plan |
| Root files | ~30 | Instruction files, manifests, configs, env examples | Two lockfiles; no `.gitattributes`; no `LICENSE` |

Git object store: 13.28 MiB packed. No tracked file exceeds 3.5 MB; the largest are the combined `communication/archive/SB-P-1.11/report.md` (3.4 MB) and `instruction.md` (2.0 MB). There are 23 PNG files and one ICO; no unusual binary types.

Refs: 668 remote heads (including `main`), 1 annotated tag (`eos-v1.0`), 731 `refs/pull/*`. Local clone: 193 local branches (workstation state, not repository state).

## 5. EOS Deep-Dive

### 5.1 What EOS was intended to do

EOS (Team LIPS Engineering Operating System) was published as v1.0 on 2026-07-13 to 2026-07-15 (`daf9cd9`, `a5c9e1b`, PR #1, tag `eos-v1.0`) as a tool-neutral engineering governance framework. The v1.0 specification (`v1.0/Team_LIPS_Engineering_Operating_System_EOS_v1.0.md`, 9,257 lines) bundles a charter, foundational references, standards EOS-001 to EOS-014, and release records. Between 2026-07-16 and 2026-07-18 (SB-INF-1.8, 1.8C, 1.9, 1.10) a second generation of standalone `Engineering_*_v1.0.md` documents was added at the EOS root, together with the Markdown Quality Gate pipeline (`tools/markdown/`, `.githooks/pre-commit`, `.github/workflows/markdown-quality-gate.yml`).

EOS predates the current governance stack: the canonical source set in `merge/active/` (2026-07-30 onward), Source 17 (AI Operations Manual), Source 18 (Mission Lifecycle and Delivery Framework), and the communication Protocol. Those later sources took over most of the territory EOS was written to govern.

### 5.2 Current references

| Referencing source | EOS reference | Effect |
|---|---|---|
| `docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md:91` | Names `ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md` and `Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md` as "Actor-specific EOS workflows" among Active GitHub Operational Sources | **Active, mandatory** for Codex and Claude Code intake (step 6 of each intake) |
| `communication/AI_Communication_and_Handover_Protocol.md:436-439, 658-660` | The same two workflows, as Stage B alignment targets | Active |
| `merge/active/README.md:13` | "EOS workflows support execution but are not counted among the 20 canonical project-source files" | Active, generic |
| `AGENTS.md` (Purpose; Authority Order item 4; Continuous Improvement) | "supplements the Engineering Operating System"; EOS at precedence 4 | Active, generic; see 5.6 |
| `README.md`, `CLAUDE.md`, `CHATGPT.md` | `CLAUDE.md` lists "Relevant Engineering Operating System (EOS) documentation" as intake item 4 | Generic |
| `merge/active/17_AI_Operations_Manual.md` (Source 17) | **None** | EOS is absent from the canonical precedence table |
| `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` (Source 18) | **None** | |
| `mission-control/mission_memory.md:209-231, 299` | EOS backup separation; AC-02 review, correction, Founder deferral, and reopen gate | Active state record |
| `tools/markdown/cleanup_markdown_artifacts.py:134` | Default directory `docs/engineering/eos/v1.0` | Tool default only |
| `.github/**`, `.githooks/**`, `package.json`, `scripts/**` | **None** | No automation reads any EOS document |

No EOS document other than the two actor workflows is named by any non-historical operational source.

### 5.3 Enforced versus documented

EOS is **documentation-only**. The only engineering behaviour that EOS documents and that is also implemented is the Markdown Quality Gate. Its implementation is outside EOS:

- `tools/markdown/quality_gate.py` and `quality_gate_core.py`, configured by `.markdown-gate.yml`;
- `.githooks/pre-commit` → `tools/markdown/pre_commit_markdown_gate.py`, active only on clones where `core.hooksPath=.githooks` is set locally (it is set on this workstation; nothing in the repository sets it for other clones);
- `.github/workflows/markdown-quality-gate.yml`, which is `active` but not a required check (live branch protection lists no required checks), and is currently not dispatching (Section 11).

The EOS README §8 still describes an "automatic watcher". `tools/markdown/vscode_save_watcher.py` exists, but nothing references or starts it.

### 5.4 Duplication and conflict with current governance

| EOS material | Overlaps | Assessment |
|---|---|---|
| Claude / ChatGPT GitHub workflows (§ "Controlled Mission-Scoped Git Authority") | `AGENTS.md` Git Rules; Protocol §§10–24 | Restates `AGENTS.md`, but frozen at the 2026-08-01/09-03 model. Line 332 requires "authorized branch … and approved commit message"; it lacks the 2026-09-20 standard-convention authorization form, the attribution-trailer rule, and work-package grants with end event and end date. **Drift, not contradiction of intent**; a literal reader of the EOS file would demand exact commit text that `AGENTS.md` no longer requires. |
| Engineering Change Management / Release Management | Source 18 lifecycle; Source 12 | AC-02 disposition already found they must be mapped to Source 18 and must not create a competing approval path |
| Engineering Repository Governance / Security and Access Control | `AGENTS.md`; Protocol; `branch-protection-verification.md` | AC-02: "RETURN FOR MATERIAL CORRECTION" (blanket human-authorization claim conflicts with the mission-scoped model) |
| Engineering Integration Architecture / Platform Capability Matrix / Platform Inventory | `docs/governance/GitHub_Operating_Model_and_Organization_Plan.md`; SB-P-1.12 provider continuity assessments (`communication/missions/SB-P-1.12/claude-code/40-provider-continuity-engineering-assessment.md`) | Stale. Term coverage across the seven platform/workflow EOS documents: AWS 0, Lambda 0, npm 0, Vitest 0, Build Assurance 0, Supabase CLI 0, GitLab 0; Google Drive appears 16 times (retired as an active destination on 2026-09-21, PR #613) |
| Engineering Audit and Continuous Improvement | OLE (`organizational-learning/**`), Source 18 closure | AC-02: align with Source 18 |
| EOS README §3 authority order | Source 17 precedence table; `AGENTS.md` Authority Order | Third independent precedence model |

### 5.5 File-by-file and folder-by-folder classification

Status values are quoted from each document's own header or the EOS register.

| File | Lines | Last change | Own status | Classification | Register |
|---|---:|---|---|---|---|
| `Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md` | 453 | 2026-09-03 | ACTIVE | REPAIR (active source with drift) | HK-002 |
| `ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md` | 461 | 2026-09-03 | ACTIVE | REPAIR (active source with drift) | HK-003 |
| `README.md` (SB-EOS-INDEX-001 v1.1) | 190 | 2026-08-03 | Correction Candidate — Non-Governing Until Founder Approval | REPAIR | HK-004 |
| `Engineering_Audit_and_Continuous_Improvement_v1.0.md` | 553 | 2026-08-03 | Founder approval pending (AC-02) | INVESTIGATE / OWNER DECISION REQUIRED | HK-005 |
| `Engineering_Change_Management_v1.0.md` | 329 | 2026-08-03 | Founder approval pending (AC-02) | INVESTIGATE / OWNER DECISION REQUIRED | HK-005 |
| `Engineering_Release_Management_v1.0.md` | 325 | 2026-08-03 | Founder approval pending (AC-02) | INVESTIGATE / OWNER DECISION REQUIRED | HK-005 |
| `Engineering_Automation_Architecture_v1.0.md` | 421 | 2026-08-03 | Founder approval pending (AC-02) | INVESTIGATE / OWNER DECISION REQUIRED | HK-005 |
| `Engineering_Integration_Architecture_v1.0.md` | 383 | 2026-08-03 | Founder approval pending (AC-02) | INVESTIGATE / OWNER DECISION REQUIRED | HK-005 |
| `Engineering_Repository_Governance_v1.0.md` | 419 | 2026-08-03 | Founder approval pending (AC-02) | INVESTIGATE / OWNER DECISION REQUIRED | HK-005 |
| `Engineering_Security_and_Access_Control_v1.0.md` | 322 | 2026-08-03 | Founder approval pending (AC-02) | INVESTIGATE / OWNER DECISION REQUIRED | HK-005 |
| `Engineering_Local_Workflow_v1.0.md` | 647 | 2026-08-03 | Replacement candidate (AC-02: supersede) | ARCHIVE | HK-006 |
| `Engineering_Platform_Capability_Matrix_v1.0.md` | 337 | 2026-08-03 | Replacement candidate (AC-02: supersede) | ARCHIVE | HK-006 |
| `Engineering_Platform_Inventory_v1.0.md` | 534 | 2026-07-16 | Approved Baseline | REPAIR (or ARCHIVE if superseded by owner decision) | HK-007 |
| `Engineering_Pipeline_Architecture_v1.0.md` | 359 | 2026-07-16 | Approved Baseline | REPAIR (or ARCHIVE) | HK-007 |
| `Engineering_Quality_Gate_v1.0.md` | 309 | 2026-07-16 | Approved Baseline | KEEP — ACTIVE (describes the implemented gate; note advisory status) | HK-008 |
| `Engineering_Artifact_Workflow_v1.0.md` | 347 | 2026-07-17 | Approved | CONSOLIDATE (generic predecessor of the two actor workflows; no direct inbound reference from any active source) | HK-009 |
| `Engineering_Tooling_Register.md` | 189 | 2026-07-14 | Current register / Approved | REPAIR | HK-010 |
| `Quality_Gate_Verification_Sample.md` | 20 | 2026-07-17 | Self-declared "solely to verify" the gate | REMOVE CANDIDATE | HK-011 |
| `archive/README.md` | 36 | 2026-08-03 | Historical boundary marker | KEEP — ACTIVE | HK-012 |
| `v1.0/` (10 files) | 11,768 | 2026-07-17 | Published historical release package | KEEP — HISTORICAL / AUDIT | HK-013 |
| Tag `eos-v1.0` | — | 2026-07-15 | Annotated baseline tag | KEEP — HISTORICAL / AUDIT | HK-014 |

Points of detail:

- **Active workflows (HK-002, HK-003).** These must remain; they are named intake sources. Their Git-authority sections should be reduced to a pointer to `AGENTS.md` and Protocol §16.1/§21, or updated to match. A pointer is less likely to drift again.
- **AC-02 package (HK-005, HK-006).** The controlling disposition (`communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/AC-02_EOS_Focused_Review_and_Disposition.md`) and the Founder deferral (`mission-control/mission_memory.md:227-231`) set a reopen gate: daily application-audit tooling (security, bugs, scalability, performance) **and** additional GitHub Actions automation, both implemented, documented and verified. Evidence today: Build Assurance (`build-assurance.yml`: lint, typecheck, build, fast tests) and Full Assurance (`full-assurance.yml`) were added after the deferral. No workflow has a `schedule:` trigger, so no daily audit exists, and the Actions dispatch incident means there is no current run evidence. **The reopen gate is not met.** The package is correctly deferred, but it has now sat unchanged for two months. Most of its content is superseded by Source 18, the Protocol and `AGENTS.md`. Mission Control and the Founder should decide whether AC-02 remains the right vehicle or whether these documents should be reclassified as historical drafts.
- **Platform documents (HK-007).** Both carry "Approved Baseline" status while describing a pre-AWS, pre-npm-CI platform with Google Drive as a planned destination. An "approved" label on a factually stale inventory is the riskiest kind of stale document. Either refresh them under a mission or mark them historical.
- **Quality Gate sample (HK-011).** Its only inbound reference is this mission's authorization. It verifies a pipeline that is now verified continuously by the workflow itself. No historical value beyond the SB-INF-1.8 commit, which Git history preserves.
- **`archive/` (HK-012).** Contains only its README, by design: "the only tracked file authorized in this archive boundary". It does not duplicate active material. It is a policy marker; keep it.
- **`v1.0/` (HK-013).** Not a duplicate of active material. Unique-line overlap of the seven package documents with the monolith is 11–36% (mostly shared boilerplate); `Markdown_Repair_Completion_Report_v1.0.md` overlaps 6%. The tree is byte-identical to the `eos-v1.0` tag except one line in `01_Executive_Summary_v1.0.md` (changed 2026-07-17). `v1.0/README.md` calls its own folder `03_Release_Package/` and omits the monolith and the repair report from its structure listing. It is a historical release artifact, so it should not be edited; record the discrepancy only.
- **Tag `eos-v1.0` (HK-014).** Points to `d9991a0` (merge of PR #1). It is already enumerated in SB-P-1.12 continuity manifests (`communication/live/report1.47.md:35`; `communication/missions/SB-P-1.12/claude-code/42-gitlab-secondary-continuity-implementation-report.md:66`). Deleting it would change the continuity manifest. Keep.

### 5.6 Authority-order conflict (HK-016)

| Source | Order |
|---|---|
| `AGENTS.md` "Authority Order" | Founder-approved governance → Lighthouse Constitution → Manifesto → **EOS** → `AGENTS.md`/`CLAUDE.md`/`CHATGPT.md` → mission instructions → user requests |
| Source 17 "Canonical Governance Authority and Precedence Table" (declared canonical by `README.md`) | Founder → Lighthouse Constitution → Phase 1 constitutional authority (Sources 01 + 11) → Approved Governance Sources → Mission Control → Specialist/Engineering Execution → Repository, Platform and Mission-Specific Instructions |
| EOS README §3 | Lighthouse governance → Mission Control → **Approved EOS** → Approved engineering documents → mission instructions → evidence |

Three issues follow: (a) `AGENTS.md` places mission instructions **below** EOS and repository files, whereas Source 17 places Mission Control at 5; (b) `AGENTS.md` omits Source 11 from the constitutional tier; (c) EOS is named as a precedence tier in two orders but not in the canonical one. This is canonical governance, which this audit must not rewrite. It is recorded as an owner decision.

### 5.7 EOS-related local artifacts and ignore-rule defect (HK-015, HK-017)

The workstation clone holds five ignored files in `docs/engineering/eos/`:

| Local file | Ignore rule | Nature |
|---|---|---|
| `Engineering_Local_Workflow_v1.0_BACKUP_20260717_151313.md` | `.gitignore:51` `*_BACKUP_*.md` | Toolkit backup (intended) |
| `Engineering_Platform_Inventory_v1.0_BACKUP_20260715_211156.md` | `.gitignore:51` | Toolkit backup (intended) |
| `Engineering_Local_Workflow_v1.0_REPAIR_REPORT.txt` | `.gitignore:52` | Toolkit report (intended) |
| `Engineering_Platform_Inventory_v1.0_REPAIR_REPORT.txt` | `.gitignore:52` | Toolkit report (intended) |
| `Engineering_Backup_and_Disaster_Recovery_v1.0.md` (7,446 bytes, 2026-07-17) | `.gitignore:51` `*_BACKUP_*.md` — **false positive** | A genuine EOS governance standard draft ("Engineering Backup and Disaster Recovery v1.0") |

`git check-ignore -v` attributes the last file to `*_BACKUP_*.md`. It matches only because `core.ignorecase=true` on Windows makes `_Backup_` match `_BACKUP_`. With `-c core.ignorecase=false` (Linux, GitLab runners) the file is **not** ignored. The SB-GOV-IV-1.0 reconciliation report noticed the file was absent from Git and excluded it as authority. Nobody recorded that it was excluded by accident. A disaster-recovery standard that exists only on one workstation, invisible to Git, is an owner housekeeping item. Its boundary is explicit:

- it is local-only and not part of canonical Git history;
- Track A protects canonical Git repository content (bare mirror and bundles), so this file was never within Track A scope;
- its unresolved status does not redefine or block the authorized Track A method;
- the Founder may later recover and admit it into Git under a separate mission, or consciously discard it.

The four intended artifacts show that the gitignore guard works. They also show that toolkit runs leave residue in the source tree, not in a scratch location.

### 5.8 EOS verdict

| EOS component | Verdict |
|---|---|
| Two actor-specific workflows | **KEEP — ACTIVE, REPAIR** drift against `AGENTS.md` |
| EOS README | **REPAIR**: rebuild the register to state truthfully which two documents are operative and that everything else is non-governing |
| AC-02 seven-document correction group | **INVESTIGATE / OWNER DECISION**: reopen gate unmet; decide keep-deferred versus reclassify as historical drafts |
| Local Workflow, Platform Capability Matrix | **ARCHIVE** (AC-02 already ruled them for replacement) |
| Platform Inventory, Pipeline Architecture | **REPAIR or ARCHIVE**; must not keep "Approved Baseline" while stale |
| Quality Gate standard | **KEEP — ACTIVE** |
| Generic Artifact Workflow | **CONSOLIDATE** into the actor workflows or mark historical |
| Tooling Register | **REPAIR** |
| Quality Gate sample | **REMOVE CANDIDATE** |
| `archive/` boundary | **KEEP — ACTIVE** |
| `v1.0/` and tag `eos-v1.0` | **KEEP — HISTORICAL / AUDIT** |
| Authority-order placement of EOS | **OWNER DECISION** |
| Local B&DR draft | **OWNER DECISION** (recover into Git or consciously discard); local-only housekeeping, not a Track A blocker |

In short, EOS is still serving the project only through the two actor workflows, and those need repair. Everything else in EOS is either historical or parked.

## 6. High-Confidence Remove / Archive / Consolidate Candidates

| ID | Path / ref | Classification | Key evidence | Confidence |
|---|---|---|---|---|
| HK-050 | 643 remote branches whose tip equals their merged PR's `headRefOid` | REMOVE CANDIDATE | Content squash-merged into `main`; commits preserved in GitHub `refs/pull/*` | HIGH |
| HK-051 | `noop`, `docs/mc25-26-founder-acceleration-addendum`, `docs/phase1-history-final-closeout`, `mission/SB-P-1.11-GC-1-build-lock-authorization` | REMOVE CANDIDATE | No PR; tip is an ancestor of `main` (0 commits ahead) | HIGH |
| HK-052 | `docs/pr690-manual-equivalence` | REMOVE CANDIDATE | No PR; 1 commit ahead; both changed files byte-identical in `main` | HIGH |
| HK-011 | `docs/engineering/eos/Quality_Gate_Verification_Sample.md` | REMOVE CANDIDATE | Self-declared test file; only inbound reference is this mission's authorization | HIGH |
| HK-006 | `docs/engineering/eos/Engineering_Local_Workflow_v1.0.md`, `Engineering_Platform_Capability_Matrix_v1.0.md` | ARCHIVE | AC-02: "SUPERSEDE WITH REPLACEMENT DRAFT"; stale tool assumptions | HIGH |
| HK-009 | `docs/engineering/eos/Engineering_Artifact_Workflow_v1.0.md` | CONSOLIDATE | Generic predecessor; superseded by the two named actor workflows; no direct active inbound reference | MEDIUM |
| HK-025 | `.github/workflows/aws-gc42-oidc-claims.yml`, `aws-gc42-role-assumption-verification.yml` | ARCHIVE | One-off SB-P-1.11 GC-42 verification workflows (`workflow_dispatch` only); evidence already recorded under `communication/evidence/` | MEDIUM |
| HK-022 | `tools/markdown/vscode_save_watcher.py`, `tools/markdown/cleanup_markdown_artifacts.py` | INVESTIGATE (see register) | Zero executable references; watcher still promised by EOS README §8 | MEDIUM |

Branch deletion is the largest single cleanup. MC-186 already requires the Track B seed to carry ordinary `refs/heads/*` and `refs/tags/*` and to exclude GitHub `refs/pull/*`; that is not reopened here. The only open question is timing: should the 648 non-unique branches be governed-pruned before the first GitLab seed, or retained through the first seed and pruned later? See Sections 16 and 17 (D-3).

## 7. Repair Candidates

| ID | Path | Defect | Confidence |
|---|---|---|---|
| HK-002/003 | EOS Claude/ChatGPT GitHub workflows | Git-authority text predates the 2026-09-20 `AGENTS.md` amendment (branch-convention form, trailer rule, work packages) | HIGH |
| HK-004 | `docs/engineering/eos/README.md` | Register implies broad currency; roadmap says the Quality Gate is "active" and that a watcher runs; does not show that only two documents are operative; omits `docs/engineering/assurance/Build_Assurance_Baseline.md` | HIGH |
| HK-007 | EOS Platform Inventory, Pipeline Architecture | "Approved Baseline" status on a stale platform description | HIGH |
| HK-010 | `docs/engineering/eos/Engineering_Tooling_Register.md` | Lists Markdown Toolkit v1.0 only; v1.1 released (`tools/markdown/release/*_v1.1.md`); omits `quality_gate.py`, the pre-commit gate, the watcher, the cleanup tool, `tools/governance/`, OLE scripts, `scripts/supabase-cli.mjs`, `lambda/parser/build.mjs` | HIGH |
| HK-021 | `tools/README.md` | Directory diagram lists only the four original Markdown scripts; omits `tools/governance/` and five newer `tools/markdown/` files | HIGH |
| HK-024 | `.github/workflows/markdown-quality-gate.yml` | Push trigger includes nonexistent `develop` branch; uses tag-pinned `actions/checkout@v4` / `actions/setup-python@v5` while the other five workflows pin by full SHA | MEDIUM |
| HK-027 | `communication/governance/branch-protection-verification.md` | Records "Required check: `Markdown Quality Gate`"; live API returns `checks: []`, `contexts: []`; MC-160 §2 item 7 made the gate advisory without reconciling this mandatory operational source | HIGH |
| HK-030 | `merge/README.md` | Describes `merge/active/<MERGE-ID>/` workspace folders and `merge/merged/`; `merge/active/` is now the flat canonical 20-file source set | HIGH |
| HK-031 | `README.md` "High-Level Structure" | Lists `app/` (does not exist; source is `src/`); omits `communication/`, `merge/`, `supabase/`, `organizational-learning/`, `mission-control/`, `tools/` | HIGH |
| HK-032 | `communication/missions/SB-P-1.12/README.md` | Six links to `docs/phase-1-mission-blueprint/active/SB-P-1.12.md`; file moved to `completed/` by PR #685 (`e1ecbe3`, rename R098); the status line already uses the correct path | HIGH |
| HK-033 | `docs/implementation/SB-P-1.8_Implementation_Assessment.md` | 20 links written repo-root-relative (`src/...`, `AGENTS.md`) from a nested file; all broken on GitHub | MEDIUM (historical document; low priority) |
| HK-036 | `mission-control/mission_memory.md` | Mandatory "current operational state" source last changed 2026-09-21; mentions SB-P-1.12 once; no continuity, GitHub operating-model or GitLab decisions; "Next Recommended Mission" still lists the historical reconstruction as "NOT YET ACTIVATED" although `SB-DOC-PHASE1-HISTORY-1.0` has been archived | HIGH |
| HK-067 | `.gitignore` | Toolkit patterns (`*_BACKUP_*.md`, `*_TEST.md`) are matched case-insensitively on Windows; already caused HK-017 | HIGH |
| HK-068 | `.gitignore` | `.env.*` ignores the tracked `.env.test.local.example` (no `!` negation, unlike the other two examples); redundant `.claude/` plus `.claude/settings.local.json` | LOW |

## 8. Important KEEP — ACTIVE Findings

- **Canonical spine is path-clean.** All backtick path references in `README.md`, `AGENTS.md`, `CLAUDE.md`, `CHATGPT.md`, `communication/README.md`, the Protocol, the Independent Verification Efficiency Protocol, `branch-protection-verification.md`, `mission_memory.md`, `docs/migration/README.md`, the blueprint README, `merge/active/**` and `docs/governance/**` resolve to existing paths.
- **Package scripts are sound.** Every `package.json` script target exists (`scripts/supabase-cli.mjs`, `lambda/parser/build.mjs`, `organizational-learning/scripts/harvest.mjs`, `validate.mjs`, both Vitest configs). `package-lock.json` matches `package.json` exactly for all direct dependencies.
- **OLE tests are wired.** All 20 `organizational-learning/tests/*.test.ts` files are listed in `vitest.fast.config.ts`.
- **Workflows:** `build-assurance.yml`, `full-assurance.yml`, `markdown-quality-gate.yml` and `aws-gc38r-parser-deploy.yml` are active engineering assets (HK-019: the GC-38R deploy workflow remains the documented parser deploy path).
- **Active root documents pass the Markdown gate.** `README.md`, `AGENTS.md`, `docs/engineering/eos/README.md` and `mission_memory.md` exit 0 under `tools/markdown/quality_gate.py`.
- **No deprecated `/survey` route** reference exists anywhere outside the `AGENTS.md` deprecation notice. No code references old Lovable hosts.
- **`.githooks/pre-commit`** (HK-023) is active on this clone (`core.hooksPath=.githooks`) but is not self-installing; other clones get no hook.
- **`communication/live/`** holds 88 SB-P-1.12 files under a Mission Control-authorized numbered sequence (Protocol §27, "Optional Numbered Compatibility Sequence"). That is permitted while the mission is active, and they are archived at closure.

## 9. Important KEEP — HISTORICAL / AUDIT Findings

- **`Project Source File Archive/`** (HK-044): explicit non-governing archive with a reactivation and alteration prohibition (`SB-GOV-HOUSEKEEPING-1.3`). Nine files are byte-identical to their `merge/active/` successors. That is expected provenance, not harmful duplication. The space-containing path and `(n)` suffixes are a tooling inconvenience, but renaming is prohibited without Founder-approved governance.
- **`communication/archive/**`** (HK-035, HK-041, HK-049): immutable by Protocol §26 ("shall never be rewritten"). Nine broken links inside archives, three pre-format packages without `communication.md` (`SB-COMM-TEST-1.0`, `SB-DOC-PHASE1-HISTORY-1.0`, `SB-GOV-HOUSEKEEPING-1.8`), and the 5.4 MB combined `SB-P-1.11` records alongside their 396 `source/` files are all permitted ("not retrofitted").
- **Byte-identical archive/mission pairs** (HK-048): four `SB-OPS-PROD-SYNC-1.0` instruction/report pairs and one SB-P-1.12 snapshot pair. This follows from the three-location model, not error.
- **`reports/`** (HK-045): two SB-GOV-COMPARE reports cited as replacement evidence by the archive README; moving them would break provenance links.
- **`.lovable/phase-4*.md`** and **`docs/implementation/**` evidence** (HK-047): historical. Several SB-P-1.9 evidence screenshots stored under different names are identical images (for example `2_auth.png`, `3_dashboard_redirect.png`, `02_auth_signin.png`, `06_dashboard_redirect.png`). This is plausible, because the redirect lands on sign-in, but it is worth one owner glance; evidence must not be edited.
- **Tag `eos-v1.0`** and **EOS `v1.0/`** (HK-013, HK-014).
- **`communication/missions/SB-GOV-COMMS-SUPERSEDED-PROPOSALS.md`** (HK-043): loose file at the `missions/` root, but referenced by `communication/README.md` "Historical Proposal Containment" and `mission_memory.md`.
- **Unpaired live instructions** (HK-038): `instruction1.9`, `1.12`–`1.18`, `1.31`, `1.32` and `1.41` have no `report` twin. Sampling shows they are decision records, gates, or chat-return/Founder instructions that name no report file. `1.49` is in flight. No orphan reports exist.

## 10. Repository Uniformity Findings

| Finding | Evidence | Register |
|---|---|---|
| Mission-file prefix drift in `docs/implementation/` | 8 files `SB-P1.x_…` versus 12 `SB-P-1.x_…`; SB-P-1.1–1.8 flat at root, 1.9–1.12 in folders; no index for 124 files | HK-046 |
| Branch prefix proliferation | 19 prefixes: `mission/` 490, `mission-control/` 63, `docs/` 45, `report/` 18, `security/` 17, `review/` 10, `fix/` 10, then singletons (`noop`, `infra`, `handover`, `feat`, `evidence`, `engineering`, `closeout`, `chore`, `audit`, `governance`, `implementation`); `AGENTS.md` standard is `mission/[MISSION-ID]-[SHORT-SLUG]` | HK-058 |
| Mission-ID family drift | `SB-ENG-BUILD-ASSURANCE-1.0` exists only as a branch; the mission of record is `SB-OPS-BUILD-ASSURANCE-1.0` | HK-055 |
| Six archive mechanisms with different rules | `communication/archive/`, `docs/engineering/eos/archive/`, `Project Source File Archive/`, `docs/phase-1-mission-blueprint/completed/`, `merge/merged/` (empty since creation), root `reports/` | HK-071 |
| Missing indexes where navigation is hard | `docs/implementation/` (124), `docs/engineering/` (30, the EOS README covers only `eos/`), `communication/missions/` (23 missions; `communication/README.md` lists 5), `mission-control/`, `supabase/` | HK-037, HK-046, HK-070 |
| Version-suffix inconsistency | `_v1.0` on EOS/governance documents; none on most implementation documents; `_v1` on early SB-P1.7 documents; `(n)` browser-download suffixes in the legacy archive | HK-046 (record only) |
| Stale structure documentation | `README.md` (`app/`), `merge/README.md`, `tools/README.md`, `v1.0/README.md` (`03_Release_Package/`) | HK-031, HK-030, HK-021, HK-013 |

Renames are **not** recommended for historical material. `AGENTS.md` "Preserve approved file names" and the archive prohibitions make indexes and forward conventions the safer remedy.

## 11. Broken / Unusable Findings

| Finding | Type | Cause | Register |
|---|---|---|---|
| GitHub Actions: 0 runs returned by the API; all six workflows `active`; Actions enabled | Broken automation | **External provider**: MC-160 records a suspected GitHub backend dispatch/registration incident after local settings and minutes were cleared. No repository configuration defect was found. | HK-028 |
| No required status checks on `main` | Intentional (per MC-160 §2 item 7) but **undocumented in the verification record** | Record drift | HK-027 |
| 36 broken relative links | Docs | 20 in one historical implementation document; 6 in the active SB-P-1.12 README; 1 snapshot; 9 in immutable archives | HK-032, HK-033, HK-034, HK-035 |
| `bun.lock` missing `@aws-sdk/client-s3`, `exceljs`, `papaparse`, `@types/papaparse` | Stale lockfile | Last updated 2026-08-07; CI uses `npm ci`; `.prettierignore` lists `bun.lock`, `package-lock.json` and `pnpm-lock.yaml` | HK-026 |
| Markdown gate push trigger on `develop` | Dead trigger | Branch does not exist | HK-024 |
| `vscode_save_watcher.py` | Unwired | Promised by EOS README §8, started by nothing | HK-022 |
| `tools/governance/*.py` (1,751 lines) | Orphaned | Zero inbound references; not in `tools/README.md` or the Tooling Register; two scripts write files | HK-020 |
| `merge/merged/` | Empty since creation | Only `.gitkeep`; described only by the stale `merge/README.md` | HK-030 |
| `.lovable/plan.md` | Stale platform-managed file | Contains the SB-P-1.10-TV-1.0 closure plan (last change 2026-07-23); 37 inbound references, mostly historical | HK-029 |

## 12. Branch / Tag / PR Hygiene

### 12.1 Counts

| Measure | Value |
|---|---:|
| Remote heads (excluding `main`) | 667 |
| PRs total / merged / closed-unmerged / open | 731 / 718 / 13 / 0 |
| `delete_branch_on_merge` | `false` |
| Merge methods allowed | squash, merge commit, rebase (all) |
| Tags | 1 (`eos-v1.0`) |
| `refs/pull/*` | 731 |

### 12.2 Why the branch count is large

Squash merging plus `delete_branch_on_merge=false` leaves every mission branch in place forever, and only 5 of 667 branch tips are even Git ancestors of `main`. At about 700 PRs in under three months, the count grows by roughly 8 branches a day. This is a configuration effect, not an accumulation of unmerged work.

### 12.3 Classification

| Class | Count | Unique content? | Register |
|---|---:|---|---|
| Merged PR, tip equals merged PR head | 643 | No (in `main` by squash; commits in `refs/pull/*`) | HK-050 REMOVE CANDIDATE |
| No PR, tip ancestor of `main` | 4 | No | HK-051 REMOVE CANDIDATE |
| No PR, divergent, content already in `main` | 1 (`docs/pr690-manual-equivalence`) | No | HK-052 REMOVE CANDIDATE |
| Merged PR, tip moved after merge | 5 (`#535`, `#541`, `#516`, `#195`, `#246` head branches) | Yes, 1–4 files each not identical in `main` | HK-053 INVESTIGATE |
| Closed-unmerged PR | 11 | Yes | HK-054 INVESTIGATE |
| No PR, divergent | 3 (`mission/SB-ENG-BUILD-ASSURANCE-1.0-foundation` 12 files; `mission/SB-P-1.11-GC-40-aws-execution-access-design-check`; `mission/SB-P-1.11-GC-42B-report`) | Yes | HK-055, HK-056 INVESTIGATE |

Most closed PRs appear to be superseded by later merged PRs (for example #732 → #733; #723 handover; #619 → successor handover). This is an inference from titles and timing; branch-by-branch confirmation is owner work. The `SB-ENG-BUILD-ASSURANCE-1.0-foundation` branch is the one item most likely to hold work that someone expected to land: 12 commits, 12 files, none identical in `main`.

**Provider-generated refs.** None other than GitHub's `refs/pull/*`. An earlier audit (`docs/audits/SB-AUDIT-1.1-…`) noted a local `refs/codex/turn-diffs/...` ref, which is local-only and not on the remote.

**Continuity-relevant refs.** `main`, `eos-v1.0`, and any branch Mission Control rules as holding unique work (HK-053 to HK-056). The SB-P-1.12 pre-seed evidence counted 661 branches. Under MC-186 ordinary branches and tags are seeded and PR refs are excluded. Pruning the 648 non-unique branches before the first seed would materially shrink the GitLab manifest; retaining them through the first seed and pruning later is equally compatible with MC-186. That timing is the only open Mission Control decision here (Section 17, D-3).

## 13. Security Hygiene

No credible live secret exposure was found. No secret value was printed, copied or recorded during this audit; triage used masked prefixes, lengths and decoded `role` claims only.

| Finding | Path(s) | Category | Severity | Rotation? | Register |
|---|---|---|---|---|---|
| GitHub secret scanning, push protection, non-provider patterns, validity checks, Dependabot security updates all **disabled** on a **public** repository | Repository settings | Missing guard | HIGH (gap, not exposure) | n/a | HK-060 |
| Supabase **anon**-role JWTs (decoded `role: anon`) | `communication/archive/SB-P-1.11/report.md`, `communication/archive/SB-P-1.11/source/report1.57.md` | Publishable client key | LOW | Not required by the Supabase key model; Mission Control to confirm which project and whether the legacy JWT keys are still active | HK-061 |
| Throwaway PKCS#8 private key (documented "generated solely for this test") | `tests/parser-lease/roles-anywhere-decimal-serial.test.ts` | Test fixture | LOW | No | HK-062 |
| Synthetic AWS key-ID-shaped strings; synthetic JWT; dummy RSA header | `organizational-learning/tests/*.test.ts` (5 files) | Scanner test fixtures | NONE | No | HK-062 |
| `sk-…` pattern hits | 9 files | False positive ("ri**sk-**triggered…") | NONE | No | — |
| AWS account-bearing ARNs | 36 tracked files; `.env.example` contains a literal role ARN, bucket name and region | Infrastructure identifiers (not credentials) | LOW | No | HK-063 |
| Ignored local secret-bearing files on the workstation | `.env.test`, `.env.test.local`, `.mcp.json`, `gitleaks-report.json` | Local secrets / scan output | LOW under the authorized Track A method (bare mirror and bundles exclude untracked files); would only matter for a working-directory copy, which is not an authorized baseline | n/a | HK-065 |
| `.env*.example` files | Root | Placeholders or empty for every key/secret variable | NONE | No | — |

Private-key, GitHub-token, Supabase new-format key, Slack, Google, credentialed Postgres URL, payment live-key and Meta-token patterns returned no hits other than those above. Certificate blocks found are public certificates (workflow and archived SB-P-1.11 PKI exchange).

**Continuity note.** GitLab secret detection, or GitHub push protection once enabled, will likely flag HK-061 and HK-062 at seed or push time. An allowlist or path exclusion decision should precede the GitLab seed so that the seed does not stall on known-benign fixtures.

## 14. Gap-to-Fill Findings

Only gaps with a concrete failure mode observed in this audit are listed.

| ID | Gap | Observed failure mode | Priority |
|---|---|---|---|
| HK-060 | Enable secret scanning and push protection (and Dependabot alerts) | Public repository with no server-side secret guard; only an ad hoc local gitleaks run | HIGH |
| HK-066 | `.gitattributes` (`* text=auto eol=lf`, binary rules for PNG/ICO, LF for hooks/scripts) | Index is clean LF (1,802 LF, 0 CRLF), but this Windows working tree is mixed (480 CRLF, 1,322 LF; for example `scripts/supabase-cli.mjs` is CRLF on disk). Working-tree files differ from canonical blobs, and a CRLF script copied from a Windows checkout to Linux can break. Bare mirrors, bundles and explicit ref pushes operate on canonical Git objects, so this is not a GitLab-seed or Track A blocker | MEDIUM (recommended portability hardening) |
| HK-065 | Reinforcement of the already-authorized Track A method (encrypted bare mirror, multi-generation Git bundles, verified manifests/checksums, site-independent encrypted copy) | Ignored secret-bearing files and the local B&DR draft exist only in the working directory, which confirms why a checked-out working-directory copy must not be used as the governed baseline. No new decision required | Validation of existing authority |
| HK-057 / HK-072 | Branch lifecycle rule (enable `delete_branch_on_merge`, or a periodic governed prune; one naming convention) | 667 branches, growing about 8 a day | HIGH |
| HK-073 | Internal link check in the Markdown gate | `AGENTS.md` requires "Functional internal links"; the gate does not check links; 36 broken links found, 6 in an active mission README | MEDIUM |
| HK-037 | `communication/missions/` index | 23 mission folders, 18 not listed anywhere navigable | MEDIUM |
| HK-070 | Repository map in `README.md` | Current map is wrong (`app/`) and omits most top-level directories | MEDIUM (repair HK-031 covers it) |
| HK-071 | Single archive policy | Six archive mechanisms with different rules | MEDIUM |
| HK-074 | Dependency-update policy | Dependabot disabled; stale secondary lockfile; mixed `^`-ranges and exact pins | LOW–MEDIUM |
| HK-075 | Housekeeping cadence or repo-health checklist | This audit found drift that accrued in 4–8 weeks (Tooling Register, mission memory, branch-protection record) | LOW |

Not recommended: a new ownership-marker scheme (`CODEOWNERS` adds little with a single human approver and zero required reviews); a generated-artifact policy document (the only generated tracked file, `src/routeTree.gen.ts`, is framework-standard, and `.gitignore` already covers build outputs).

## 15. Dependency and Risk Notes

- **EOS edits** touch two mandatory intake sources (HK-002/003). Changing them alters what every Codex and Claude Code session reads. Pair any change with `AGENTS.md` review under one governance mission.
- **Authority-order change** (HK-016) is constitutional-tier governance and needs Founder approval.
- **Branch deletion** (HK-050 to HK-052) is irreversible in practice on GitHub (commits survive in `refs/pull/*` for merged PRs, but branch names and divergent tips do not). Never include HK-053 to HK-056 in a bulk prune. Decide seed-versus-prune order first.
- **`bun.lock` removal** (HK-026) may affect Lovable, which can install with Bun. Confirm Lovable's installer before removing; refreshing it is the lower-risk alternative.
- **`.lovable/plan.md`** (HK-029) is platform-managed; Lovable may rewrite or rely on it. Do not edit from the repository side without a Lovable-side check.
- **`.gitattributes` introduction** (HK-066) causes a one-time renormalization on Windows clones. The index is already LF, so the content diff should be empty, but every Windows clone should re-checkout afterwards.
- **`.gitignore` pattern repair** (HK-067) will make the B&DR draft visible as untracked on Windows. It needs coordinating with HK-017 only if the Founder chooses to admit that draft into Git; otherwise it is independent hardening.
- **Enabling push protection** (HK-060) may block future pushes containing the HK-062 fixtures; prepare an allowlist first.
- **AWS GC-42 workflow archival** (HK-025): the OIDC trust policies they verify still exist; keep their evidence links intact.
- **Supabase migrations** were inventoried only. Their disposition is governed by `docs/migration/README.md` and was not assessed.

## 16. Recommended Cleanup Sequencing

Each step requires its own Mission Control authorization. Continuity items fall into four groups.

**Genuine pre-GitLab-seed controls**

- HK-078: history-wide secret scan, because the seed replicates Git history, not only the current tree.
- HK-062 (with HK-061 as context): scanner and fixture handling (allowlist or path exclusions), where required to prevent false blocking during the seed.
- HK-050 to HK-052: decide whether the 648 non-unique branches are governed-pruned before the first seed or retained through it and pruned later. Ordinary branch and tag inclusion is already required by MC-186.

**Track A / continuity method already settled**

- HK-065 validates and reinforces the existing encrypted bare-mirror and Git-bundle authority. No decision required.

**Useful hardening, not seed or Track A blockers**

- HK-066: `.gitattributes`.
- HK-067: `.gitignore` narrowing, unless it materially affects a file intentionally being admitted into Git.

**Owner housekeeping, separate from canonical continuity**

- HK-017: local-only EOS B&DR draft (recover under a separate mission, or discard knowingly).

Recommended order of work:

1. **Pre-seed controls.** HK-078; HK-062 fixture handling; the HK-050 to HK-052 prune-timing decision.
2. **Record reconciliation (documentation only, low risk).** HK-027 branch-protection record; HK-036 mission memory; HK-032 SB-P-1.12 README links; HK-031 README structure; HK-030 `merge/README.md`; HK-021 `tools/README.md`; HK-010 Tooling Register.
3. **Branch disposition.** Owner review of the 19 divergent refs (HK-053 to HK-056), which must never be included in a bulk prune; execute the HK-050 to HK-052 prune per the D-3 timing; then decide HK-057 (`delete_branch_on_merge`).
4. **Security guards.** HK-060 (enable secret scanning, push protection, Dependabot alerts), after the HK-062 fixture handling.
5. **Hardening and owner housekeeping.** HK-066 `.gitattributes`; HK-067 `.gitignore` narrowing; HK-017 owner decision.
6. **EOS governance mission.** HK-016 authority order; HK-002/003 workflow repair; HK-004 README register; HK-005 AC-02 reclassification decision; HK-006/HK-007/HK-009 archive, refresh or consolidate; HK-011 sample removal.
7. **Tooling tidy.** HK-020 `tools/governance/`; HK-022 watcher and cleanup scripts; HK-024 workflow trigger and pinning; HK-025 GC-42 workflows; HK-026 `bun.lock`; HK-029 `.lovable/plan.md`.
8. **Navigation and conventions.** HK-037 missions index; HK-046 implementation index; HK-071 archive policy; HK-058 branch naming; HK-073 link check; HK-074 and HK-075 as capacity allows.

## 17. Founder / Mission Control Decision Items

| # | Decision | Register |
|---|---|---|
| D-1 | Should the local-only `Engineering_Backup_and_Disaster_Recovery_v1.0.md` draft be recovered into Git under a separate mission, or consciously discarded? (Owner housekeeping; not part of canonical Git history and not a Track A blocker) | HK-017 |
| D-2 | CLOSED BY EXISTING AUTHORITY: HK-065 validates the already-authorized Track A bare-mirror / Git-bundle method and reinforces that a checked-out working-directory copy must not be used as the governed baseline. | HK-065 |
| D-3 | Should the 648 non-unique stale branches be governed-pruned before the first GitLab seed, or retained through the first seed and pruned later? (Ordinary `refs/heads/*` and `refs/tags/*` seeding is already required by MC-186; the 19 divergent branches require owner review either way) | HK-050–052 |
| D-4 | Enable `delete_branch_on_merge` going forward? | HK-057 |
| D-5 | Resolve the authority-order conflict (`AGENTS.md` vs Source 17 vs EOS README); where, if anywhere, does EOS sit? | HK-016 |
| D-6 | AC-02: keep deferred under the existing reopen gate, or reclassify the seven HK-005 documents (and HK-006) as historical non-governing drafts? | HK-005 |
| D-7 | Platform Inventory / Pipeline Architecture: refresh under a mission, or withdraw "Approved Baseline" status and archive? | HK-007 |
| D-8 | Enable GitHub secret scanning, push protection and Dependabot alerts on the public repository | HK-060 |
| D-9 | Authorize / perform reconciliation of `communication/governance/branch-protection-verification.md` with MC-160 and current live provider state (advisory status already decided by MC-160) | HK-027 |
| D-10 | Owner review of `mission/SB-ENG-BUILD-ASSURANCE-1.0-foundation` and the other 18 divergent refs | HK-053–056 |
| D-11 | `bun.lock`: refresh, remove, or keep as-is pending Lovable confirmation | HK-026 |
| D-12 | `tools/governance/`: register and document, or remove | HK-020 |
| D-13 | Supabase anon JWTs in archives: confirm the project and key generation; record acceptance as publishable keys | HK-061 |
| D-14 | Repository visibility remains public (already deferred in MC-160) | HK-064 |

## 18. Limitations / Uncertainties

- **GitHub Actions history unavailable.** The runs API returned `total_count: 0`, so no workflow outcome could be verified. Whether historical runs were purged or are hidden by the dispatch incident is unknown.
- **Branch "unique content" test is file-level.** A branch counted as unique has at least one changed file whose tip blob differs from `main`. It does not prove that content is valuable or unsuperseded; a later PR may have rewritten the same material.
- **Closed-PR supersession** is inferred from titles and timing, not verified one by one.
- **Secret scan is pattern-based** on the current tree only. Git history was not scanned; a historical-blob scan (for example gitleaks over all commits) is recommended before the GitLab seed makes history more widely replicated.
- **Supabase anon JWT project attribution** was deliberately not decoded beyond `role` and `iss`, to avoid recording project identifiers.
- **External links** were not validated (no broad web probing).
- **Application source** (`src/**`) was inventoried, not code-reviewed; dead-code analysis was out of scope.
- **Supabase SQL and migrations** were inventoried, not assessed (migration governance prohibits treating them as actionable without a mission).
- **Lovable behaviour** regarding `.lovable/plan.md` and `bun.lock` is not observable from the repository.
- **Local workstation findings** (ignored files, 193 local branches, `core.hooksPath`, `core.autocrlf`, `core.ignorecase`) describe this Windows clone only; other clones may differ.
- **`.uv-cache/` and `.uv-python/`** appear ignored through a nested `.gitignore` written by the `uv` tool, not through the repository `.gitignore`. On machines without that nested file they could appear untracked. This is low risk and not registered.

## 19. Confirmation That No Cleanup Mutation Occurred

- No file was deleted, renamed, moved, rewritten or archived.
- No EOS, governance, `README.md`, `AGENTS.md`, application, SQL or migration file was edited.
- No branch, tag or pull request was deleted, closed or modified; no history was rewritten; no force push occurred.
- No GitHub, GitLab, Supabase, Lovable or CI setting was changed; all provider interaction was read-only `gh` queries.
- No GitLab seed and no Track A backup was performed.
- `tools/markdown/quality_gate.py` was run only in its non-modifying configuration (`modify_files: false`); `git status --short` was clean afterward.
- The only repository changes are the two authorized files under `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/claude-code/`.
- No secret value was printed, copied or recorded.

REPOSITORY HOUSEKEEPING AUDIT SUBMITTED — NO CLEANUP MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION
