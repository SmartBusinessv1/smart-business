# SB-OPS-REPO-HOUSEKEEPING-1.0 — Housekeeping Candidate Register

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.0
**Execution actor:** Claude Code
**Canonical baseline:** `main` at `4604fb8169f24149039ef680d8822be149a8d815`
**Date:** 2026-10-03
**Companion report:** [`01_repository_housekeeping_audit.md`](01_repository_housekeeping_audit.md) (section references below point to it)

## Use of This Register

This is a decision table for Mission Control disposition. A classification is a recommendation only. **REMOVE CANDIDATE, ARCHIVE, CONSOLIDATE and REPAIR are not authority to act.** Each row requires separate Mission Control authorization and, where governance requires it, Founder approval.

Classification vocabulary: KEEP — ACTIVE; KEEP — HISTORICAL / AUDIT; REPAIR; CONSOLIDATE; ARCHIVE; REMOVE CANDIDATE; INVESTIGATE / OWNER DECISION REQUIRED; GAP TO FILL.

Nature codes in the Evidence column: **DOC** documentation-only; **EXE** executable/automation; **GEN** generated; **HIST** historical record; **PROV** provider-specific; **REF** Git ref; **CFG** configuration; **LOCAL** workstation-only, not tracked.

Disposition column: left blank for Mission Control.

## A. EOS — `docs/engineering/eos/**` (report Section 5)

| ID | Path / Ref | Classification | Reason | Evidence | Risk | Recommendation | Confidence | Disposition |
|---|---|---|---|---|---|---|---|---|
| HK-001 | `docs/engineering/eos/` (subtree) | INVESTIGATE / OWNER DECISION REQUIRED | Only 2 of 20 tracked root/archive files are operative; nothing executable reads EOS | DOC. Inbound active refs only to the two actor workflows (`docs/governance/…Source_Set_v1.0.md:91`, Protocol §25); none from `.github`, `.githooks`, `package.json`, `scripts` | Mis-reading dormant EOS as current authority | Decide EOS's future shape via one EOS governance mission (rows HK-002 to HK-017) | HIGH | |
| HK-002 | `docs/engineering/eos/Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md` | REPAIR | Active intake source drifted behind 2026-09-20 `AGENTS.md` amendment | DOC. Line 332 requires "approved commit message"; no trailer rule, no work-package grant; last change 2026-09-03 versus amendment PR #606 on 2026-09-20 | Claude Code intake reads stale Git-authority rules; EOS ranks above `AGENTS.md` in `AGENTS.md`'s own order | Replace Git-authority section with a pointer to `AGENTS.md` / Protocol §16.1, §21, or align text | HIGH | |
| HK-003 | `docs/engineering/eos/ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md` | REPAIR | Same drift as HK-002 for Codex | DOC. Same commits (`9c5baf1`, `6a3356e`, `809caec`); 0 mentions of trailer or work package | As HK-002 | As HK-002, same mission | HIGH | |
| HK-004 | `docs/engineering/eos/README.md` | REPAIR | Register and roadmap overstate currency; "watcher" and "Quality Gate active" claims; omits `docs/engineering/assurance/` | DOC. Status "Correction Candidate — Non-Governing"; AC-02 disposition already required a rebuilt register | Readers infer more EOS authority than exists | Rebuild register: two operative documents, all else non-governing or historical | HIGH | |
| HK-005 | EOS `Engineering_Audit_and_Continuous_Improvement`, `_Change_Management`, `_Release_Management`, `_Automation_Architecture`, `_Integration_Architecture`, `_Repository_Governance`, `_Security_and_Access_Control` (`_v1.0.md`) | INVESTIGATE / OWNER DECISION REQUIRED | AC-02 deferred since 2026-08-03; content largely overtaken by Source 18, Protocol, `AGENTS.md` | DOC. `mission_memory.md:215-231`; reopen gate (daily audit tooling + more Actions) unmet: no `schedule:` workflow; Actions not dispatching | Indefinite "pending" state; competing approval paths if revived unchanged | Founder/MC: keep deferred, or reclassify as historical non-governing drafts | HIGH | |
| HK-006 | EOS `Engineering_Local_Workflow_v1.0.md`, `Engineering_Platform_Capability_Matrix_v1.0.md` | ARCHIVE | AC-02 ruled "SUPERSEDE WITH REPLACEMENT DRAFT"; VS Code-only and stale capability assumptions | DOC. AC-02 disposition rows 27-28; 18 and 6 "watcher" mentions; 9 Google Drive mentions in the matrix | Low; no active inbound refs | Move into the EOS archive boundary with manifest entry per `archive/README.md` rules, or replace | HIGH | |
| HK-007 | EOS `Engineering_Platform_Inventory_v1.0.md`, `Engineering_Pipeline_Architecture_v1.0.md` | REPAIR | "Approved Baseline" status on stale platform facts | DOC. 0 mentions of AWS, Lambda, npm, Vitest, Build Assurance, Supabase CLI, GitLab; Google Drive "Pending Phase 2" (retired 2026-09-21, PR #613); last change 2026-07-16 | An "approved" label on a wrong inventory; continuity planners may rely on it | Refresh under mission, or withdraw approved status and ARCHIVE (owner choice) | HIGH | |
| HK-008 | EOS `Engineering_Quality_Gate_v1.0.md` | KEEP — ACTIVE | Describes the implemented gate | DOC. Gate implemented in `tools/markdown/`, `.githooks/pre-commit`, workflow | Status text may imply blocking enforcement | Keep; note advisory status when HK-004 is done | MEDIUM | |
| HK-009 | EOS `Engineering_Artifact_Workflow_v1.0.md` | CONSOLIDATE | Generic predecessor of the two actor workflows | DOC. No direct inbound ref from any active source (substring hits are the actor workflow names) | Low | Fold into actor workflows or mark historical | MEDIUM | |
| HK-010 | EOS `Engineering_Tooling_Register.md` | REPAIR | v1.0 snapshot; v1.1 released; most current tools unregistered | DOC. Lists Markdown Toolkit v1.0 only; omits `quality_gate*.py`, pre-commit gate, watcher, cleanup, `tools/governance/`, OLE scripts, `scripts/supabase-cli.mjs`, `lambda/parser/build.mjs`; last change 2026-07-14 | Untraceable tooling | Refresh, or retire in favour of `tools/README.md` | HIGH | |
| HK-011 | EOS `Quality_Gate_Verification_Sample.md` | REMOVE CANDIDATE | Self-declared one-time gate test | DOC. 20 lines; only inbound ref is this mission's authorization; Git history preserves SB-INF-1.8 evidence (`5670935`) | None identified | Remove under EOS mission | HIGH | |
| HK-012 | EOS `archive/README.md` | KEEP — ACTIVE | Archive-boundary policy marker | DOC. Only tracked file in `archive/`, by its own rule; no duplication | — | Keep; reuse for HK-006 | HIGH | |
| HK-013 | EOS `v1.0/` (10 files) | KEEP — HISTORICAL / AUDIT | Published release package; not a duplicate | HIST. 11-36% line overlap with monolith (boilerplate); byte-identical to tag except one line; README calls folder `03_Release_Package/` and omits 2 files | Editing would falsify a release record | Keep unedited; record discrepancy only | HIGH | |
| HK-014 | Tag `eos-v1.0` (`b2a8817` → `d9991a0`) | KEEP — HISTORICAL / AUDIT | Only tag; marks EOS v1.0 release | REF. Already counted in SB-P-1.12 continuity manifests (`report1.47.md:35`; Claude Code report 42) | Deletion changes the continuity manifest | Keep | HIGH | |
| HK-015 | Local ignored EOS artifacts: two `*_BACKUP_*.md`, two `*_REPAIR_REPORT.txt` | REMOVE CANDIDATE | Toolkit residue in the source tree | LOCAL, GEN. Ignored by `.gitignore:51-52`; dated 2026-07-15/17 | None (untracked) | Founder workstation cleanup; make toolkit write residue outside the source tree | MEDIUM | |
| HK-016 | `AGENTS.md` "Authority Order" vs Source 17 table vs EOS README §3 | INVESTIGATE / OWNER DECISION REQUIRED | Three different precedence models; EOS ranks above `AGENTS.md` and mission instructions in `AGENTS.md` | DOC. Source 17 (declared canonical by `README.md`) does not name EOS; `AGENTS.md` omits Source 11 | Stale EOS text can outrank current rules on a literal reading | Founder-approved governance correction; do not change in housekeeping | HIGH | |
| HK-017 | Local `docs/engineering/eos/Engineering_Backup_and_Disaster_Recovery_v1.0.md` | INVESTIGATE / OWNER DECISION REQUIRED | Genuine EOS B&DR draft silently ignored by case-insensitive `*_BACKUP_*.md` match | LOCAL, DOC. `git check-ignore -v` → `.gitignore:51`; not ignored with `core.ignorecase=false`; 7,446 bytes, 2026-07-17 | Continuity-relevant document exists on one workstation only | Founder decides: recover into Git under mission, or discard knowingly; before Track A | HIGH | |

## B. Root, Instructions, Governance Records (report Sections 7–9, 11)

| ID | Path / Ref | Classification | Reason | Evidence | Risk | Recommendation | Confidence | Disposition |
|---|---|---|---|---|---|---|---|---|
| HK-018 | `AGENTS.md`, `CLAUDE.md`, `CHATGPT.md` | KEEP — ACTIVE | Mandatory intake | DOC. `CLAUDE.md`/`CHATGPT.md` last changed 2026-08-02 but defer to `AGENTS.md`; no conflicting Git text | — | Keep; HK-016 is the only open issue | HIGH | |
| HK-027 | `communication/governance/branch-protection-verification.md` | REPAIR | Records required check `Markdown Quality Gate`; live protection has none | DOC. API `required_status_checks.checks: []`, `contexts: []`; MC-160 §2 item 7 made gate advisory; record unchanged since 2026-08-02 | Mandatory operational source states a control that does not exist | Reconcile record to live state and MC-160 decision | HIGH | |
| HK-030 | `merge/README.md`; `merge/merged/.gitkeep` | REPAIR | Describes `<MERGE-ID>` workspace model; `merge/active/` is now the flat canonical set; `merged/` empty since creation | DOC. `merge/README.md` structure block vs actual tree | Confusion about where canonical sources live | Rewrite README to current role; decide `merged/` fate | HIGH | |
| HK-031 | `README.md` "High-Level Structure" | REPAIR | Lists nonexistent `app/`; omits most top-level directories | DOC. No `app/` in tree; source in `src/` | First-contact misdirection | Correct the map (also closes HK-070) | HIGH | |
| HK-036 | `mission-control/mission_memory.md` | REPAIR | "Current operational state" source stale | DOC. Last change 2026-09-21; SB-P-1.12 mentioned once; no GitLab/continuity/GitHub-operating-model entries; next-mission list outdated | AI intake reads outdated state | Mission Control refresh | HIGH | |
| HK-069 | `docs/engineering/assurance/Build_Assurance_Baseline.md` | KEEP — ACTIVE | Current build-assurance baseline | DOC. Added PR #575 | Not indexed by EOS README | Index under HK-004 | HIGH | |
| HK-076 | `merge/active/**`, `docs/governance/**`, Protocol, `communication/README.md` | KEEP — ACTIVE | Canonical spine | DOC. Zero broken backtick-path references across all active operational sources | — | Keep | HIGH | |

## C. Tooling, Configuration, Automation (report Sections 7, 8, 11)

| ID | Path / Ref | Classification | Reason | Evidence | Risk | Recommendation | Confidence | Disposition |
|---|---|---|---|---|---|---|---|---|
| HK-019 | `.github/workflows/aws-gc38r-parser-deploy.yml` | KEEP — ACTIVE | Parser non-production deploy path | EXE, PROV. `workflow_dispatch`; SHA-pinned actions; OIDC, no static credentials | Removal breaks parser deploy | Keep | HIGH | |
| HK-020 | `tools/governance/*.py` (3 scripts, 1,751 lines) | INVESTIGATE / OWNER DECISION REQUIRED | Orphaned | EXE. Zero inbound refs; absent from `tools/README.md` and Tooling Register; two scripts write files; last change 2026-07-18 | Unknown users; undocumented write-capable scripts | Register and document, or remove | MEDIUM | |
| HK-021 | `tools/README.md` | REPAIR | Directory diagram stale | DOC. Lists 4 scripts; omits `tools/governance/` and 5 newer `tools/markdown/` files | Discoverability | Update with HK-010 | HIGH | |
| HK-022 | `tools/markdown/vscode_save_watcher.py`, `cleanup_markdown_artifacts.py` | INVESTIGATE / OWNER DECISION REQUIRED | No executable references | EXE. Watcher promised by EOS README §8, started by nothing; cleanup defaults to `docs/engineering/eos/v1.0` | Low | Keep as optional local tools (document) or remove | MEDIUM | |
| HK-023 | `.githooks/pre-commit` | KEEP — ACTIVE | Local Markdown gate hook | EXE. Works only where `core.hooksPath=.githooks` is set manually; nothing installs it | Uneven local enforcement | Document setup in contributor guidance | HIGH | |
| HK-024 | `.github/workflows/markdown-quality-gate.yml` | REPAIR | Dead `develop` trigger; tag-pinned actions | EXE, CFG. `develop` branch absent; `actions/checkout@v4`, `setup-python@v5` while other 5 workflows SHA-pin | Supply-chain inconsistency | Remove dead trigger; SHA-pin | MEDIUM | |
| HK-025 | `.github/workflows/aws-gc42-oidc-claims.yml`, `aws-gc42-role-assumption-verification.yml` | ARCHIVE | One-off SB-P-1.11 GC-42 verification | EXE, PROV. `workflow_dispatch` only; evidence under `communication/evidence/` | Low; keep evidence links | Retire from `.github/workflows/` under mission; keep evidence | MEDIUM | |
| HK-026 | `bun.lock` | INVESTIGATE / OWNER DECISION REQUIRED | Stale secondary lockfile | GEN. Missing `@aws-sdk/client-s3`, `exceljs`, `papaparse`, `@types/papaparse`; last change 2026-08-07; CI uses `npm ci`; `package-lock.json` fully in sync | Lovable may install from Bun with a stale lock | Confirm Lovable installer; then refresh or remove | MEDIUM | |
| HK-028 | GitHub Actions dispatch (0 runs via API; all workflows `active`) | INVESTIGATE / OWNER DECISION REQUIRED | No CI evidence possible | PROV. MC-160: suspected GitHub backend incident; settings and minutes cleared; **not a repository config defect** | Merges proceed without automated evidence | Track with GitHub support per MC-160; no repo change | HIGH | |
| HK-029 | `.lovable/plan.md` | INVESTIGATE / OWNER DECISION REQUIRED | Stale SB-P-1.10-TV-1.0 plan in a platform-managed file | PROV. Last change 2026-07-23; 37 inbound refs (mostly historical) | Lovable may read or rewrite it | Lovable-side check before any change | MEDIUM | |
| HK-066 | `.gitattributes` (absent) | GAP TO FILL | Mixed working-tree EOL on Windows | CFG. Index: 1,802 LF, 0 CRLF; working tree: 480 CRLF / 1,322 LF; `core.autocrlf=true` | Working-directory backups will not hash-match; CRLF scripts break on Linux | Add `* text=auto eol=lf` plus binary rules, before Track A | HIGH | |
| HK-067 | `.gitignore` toolkit patterns | REPAIR | Case-insensitive false positives on Windows | CFG. `*_BACKUP_*.md` caught HK-017 | Silent loss of real documents | Narrow patterns (for example timestamp-anchored) | HIGH | |
| HK-068 | `.gitignore` minor | REPAIR | `.env.*` ignores tracked `.env.test.local.example`; redundant `.claude/` entries | CFG. `git check-ignore --no-index` → `.gitignore:3` | Edits to that example need `-f` | Add `!` negation; tidy | LOW | |
| HK-077 | `package.json`, `package-lock.json`, Vitest/ESLint/TS/Prettier configs | KEEP — ACTIVE | Sound | CFG. All script targets exist; manifest and lock match; OLE tests wired in `vitest.fast.config.ts` | — | Keep | HIGH | |

## D. Communication, Documentation, Navigation (report Sections 9–11, 14)

| ID | Path / Ref | Classification | Reason | Evidence | Risk | Recommendation | Confidence | Disposition |
|---|---|---|---|---|---|---|---|---|
| HK-032 | `communication/missions/SB-P-1.12/README.md` | REPAIR | 6 broken links to old blueprint path | DOC. Target moved `active/` → `completed/` by PR #685 (`e1ecbe3`, R098) | Active mission navigation broken | Update links | HIGH | |
| HK-033 | `docs/implementation/SB-P-1.8_Implementation_Assessment.md` | REPAIR | 20 links written repo-root-relative from a nested file | DOC, HIST | Low | Fix if touched; low priority | MEDIUM | |
| HK-034 | `communication/missions/SB-P-1.12/mission-control/16-founder-record-live-instruction-snapshot.md` | KEEP — HISTORICAL / AUDIT | 1 broken link inside a snapshot | HIST | — | Leave (snapshot) | HIGH | |
| HK-035 | 9 broken links in `communication/archive/**` | KEEP — HISTORICAL / AUDIT | Archive immutability | HIST. Protocol §26 "shall never be rewritten" | — | Leave | HIGH | |
| HK-037 | `communication/missions/` index | GAP TO FILL | 23 missions, 18 not listed in any navigable index | DOC | Navigation cost | Add index or status table | MEDIUM | |
| HK-038 | `communication/live/instruction1.{9,12-18,31,32,41}.md` (no report twin) | KEEP — HISTORICAL / AUDIT | Decision records / gates / chat-return instructions | HIST. None names a report file; `1.49` in flight; no orphan reports | — | Leave; archive at SB-P-1.12 closure | MEDIUM | |
| HK-039 | `communication/live/` (88 SB-P-1.12 files) | KEEP — ACTIVE | Authorized numbered sequence (Protocol §27) | DOC | Growth until closure | Archive at mission closure per Protocol §26 | HIGH | |
| HK-040 | `communication/archive/SB-COMM-TEST-1.0/` | KEEP — HISTORICAL / AUDIT | Protocol bootstrap test | HIST. 2026-07-28 | — | Keep | MEDIUM | |
| HK-041 | Pre-format archives without `communication.md`: `SB-COMM-TEST-1.0`, `SB-DOC-PHASE1-HISTORY-1.0`, `SB-GOV-HOUSEKEEPING-1.8` | KEEP — HISTORICAL / AUDIT | Predate format | HIST. Protocol §26 "not retrofitted" | — | Leave | HIGH | |
| HK-042 | `communication/archive/SB-GOV-HOUSEKEEPING-1.8/` holds the durable record (no `missions/` twin) | KEEP — HISTORICAL / AUDIT | Pre-three-location model | HIST | — | Leave; mention in HK-037 index | MEDIUM | |
| HK-043 | `communication/missions/SB-GOV-COMMS-SUPERSEDED-PROPOSALS.md` | KEEP — HISTORICAL / AUDIT | Loose file at `missions/` root, but intentional | HIST. Referenced by `communication/README.md`, `mission_memory.md` | — | Keep | HIGH | |
| HK-044 | `Project Source File Archive/` | KEEP — HISTORICAL / AUDIT | Governed legacy archive | HIST. Reactivation/alteration prohibition (SB-GOV-HOUSEKEEPING-1.3); 9 byte-identical successors in `merge/active/`; spaces and `(n)` in names | Rename requires Founder governance | Keep as is | HIGH | |
| HK-045 | `reports/` (2 SB-GOV-COMPARE files) | KEEP — HISTORICAL / AUDIT | Provenance evidence | HIST. Cited by archive README | Moving breaks provenance links | Keep; cover in HK-071 | HIGH | |
| HK-046 | `docs/implementation/` naming and index | GAP TO FILL | 124 files, no index; `SB-P1.x` (8) vs `SB-P-1.x` (12); flat vs folder layout | DOC | Navigation cost | Add index; adopt forward convention; no historical renames | MEDIUM | |
| HK-047 | SB-P-1.9 evidence screenshots (identical images under different names) | KEEP — HISTORICAL / AUDIT | Possible labelling ambiguity | HIST. 4-way and 3-way identical PNG blobs | — | Owner glance only; never edit evidence | LOW | |
| HK-048 | Byte-identical archive/mission pairs (`SB-OPS-PROD-SYNC-1.0` x4; SB-P-1.12 snapshot x1) | KEEP — HISTORICAL / AUDIT | By design of three-location model | HIST | — | Leave | HIGH | |
| HK-049 | `communication/archive/SB-P-1.11/` (396 files; combined `report.md` 3.4 MB, `instruction.md` 2.0 MB) | KEEP — HISTORICAL / AUDIT | Largest tracked content; combined plus source copies | HIST | — | Leave | HIGH | |
| HK-070 | Repository map | GAP TO FILL | No accurate top-level directory map | DOC | Onboarding friction | Close via HK-031 | MEDIUM | |
| HK-071 | Archive policy | GAP TO FILL | Six archive mechanisms with different rules | DOC | Inconsistent future archiving | One short policy naming the canonical archive per material type | MEDIUM | |
| HK-073 | Internal link check | GAP TO FILL | `AGENTS.md` requires functional internal links; the gate does not check them | EXE gap. 36 broken links found | Silent link rot | Add a relative-link check to the gate (advisory) | MEDIUM | |
| HK-075 | Housekeeping cadence | GAP TO FILL | Drift accrued in 4-8 weeks | DOC | Recurrence | Lightweight periodic repo-health checklist | LOW | |

## E. Branches, Tags, PRs (report Section 12)

| ID | Path / Ref | Classification | Reason | Evidence | Risk | Recommendation | Confidence | Disposition |
|---|---|---|---|---|---|---|---|---|
| HK-050 | 643 remote branches whose tip equals their merged PR `headRefOid` | REMOVE CANDIDATE | No unique content | REF. Squash-merged into `main`; commits retained in `refs/pull/*` | Irreversible name loss; affects GitLab seed manifest | Decide seed-vs-prune order first (D-3); then governed bulk prune | HIGH | |
| HK-051 | `noop`, `docs/mc25-26-founder-acceleration-addendum`, `docs/phase1-history-final-closeout`, `mission/SB-P-1.11-GC-1-build-lock-authorization` | REMOVE CANDIDATE | 0 commits ahead of `main`; no PR | REF | None | Include in governed prune | HIGH | |
| HK-052 | `docs/pr690-manual-equivalence` | REMOVE CANDIDATE | Content already in `main` | REF. 1 commit ahead; both files byte-identical in `main`; no PR | None | Include in governed prune | HIGH | |
| HK-053 | Head branches of merged PRs #535, #541, #516, #195, #246 | INVESTIGATE / OWNER DECISION REQUIRED | Commits added after merge | REF. 2-10 commits ahead; 1-4 files not identical in `main` | Possible unlanded edits | Owner diff review | MEDIUM | |
| HK-054 | 11 closed-unmerged PR head branches (#732, #723, #647, #633, #619, #587, #525, #478, #456, #221, #193) | INVESTIGATE / OWNER DECISION REQUIRED | Divergent; likely superseded | REF. All hold files not identical in `main`; titles suggest supersession (for example #732 → #733) | Discarding unique work | Confirm supersession per PR; then prune | MEDIUM | |
| HK-055 | `mission/SB-ENG-BUILD-ASSURANCE-1.0-foundation` | INVESTIGATE / OWNER DECISION REQUIRED | 12 commits, 12 files, no PR, none identical in `main` | REF. Tip 2026-09-14; mission ID family `SB-ENG` not used elsewhere | Largest unlanded work set | Priority owner review vs `SB-OPS-BUILD-ASSURANCE-1.0` | HIGH | |
| HK-056 | `mission/SB-P-1.11-GC-40-aws-execution-access-design-check`, `mission/SB-P-1.11-GC-42B-report` | INVESTIGATE / OWNER DECISION REQUIRED | Divergent; no PR | REF. 1 file each not in `main` | Lost SB-P-1.11 evidence | Owner review | MEDIUM | |
| HK-057 | Repository setting `delete_branch_on_merge=false` | GAP TO FILL | Root cause of branch growth | CFG, PROV. About 8 new stale branches a day | Unbounded ref growth; heavier continuity manifests | Founder decision to enable | HIGH | |
| HK-058 | Branch naming | GAP TO FILL | 19 prefixes vs `AGENTS.md` standard `mission/[MISSION-ID]-[SHORT-SLUG]` | REF | Low | Forward convention only | LOW | |
| HK-059 | 193 local branches on the Founder workstation clone | INVESTIGATE / OWNER DECISION REQUIRED | Local clutter | LOCAL | None to the repository | Optional local prune; not a repository action | LOW | |
| HK-072 | Stale-branch lifecycle policy | GAP TO FILL | No documented lifecycle | DOC | Recurrence after any prune | Short rule paired with HK-057 | HIGH | |

## F. Security (report Section 13)

No row records a secret value. No credible live secret exposure was found.

| ID | Path / Ref | Classification | Reason | Evidence | Risk | Recommendation | Confidence | Disposition |
|---|---|---|---|---|---|---|---|---|
| HK-060 | GitHub secret scanning, push protection, Dependabot security updates | GAP TO FILL | All disabled on a public repository | PROV. `security_and_analysis` all `disabled`; secret-scanning API 404 "disabled" | No server-side guard against future leaks | Enable after HK-062 allowlist | HIGH | |
| HK-061 | Supabase anon-role JWTs in `communication/archive/SB-P-1.11/report.md`, `…/source/report1.57.md` | INVESTIGATE / OWNER DECISION REQUIRED | Publishable key in a public repository | HIST. Decoded `role: anon` only; severity LOW; rotation not required by the key model | Scanner noise; project-identifier exposure | MC security disposition: confirm project/key generation, record acceptance | MEDIUM | |
| HK-062 | Test fixtures: throwaway private key (`tests/parser-lease/roles-anywhere-decimal-serial.test.ts`); synthetic AWS key IDs and JWT (`organizational-learning/tests/*.test.ts`) | KEEP — ACTIVE | Legitimate fixtures, but scanner-triggering | EXE. Key documented as throwaway; synthetic patterned IDs | GitLab secret detection or push protection may block the seed | Prepare allowlist / path exclusions before seed and HK-060 | HIGH | |
| HK-063 | AWS account-bearing ARNs (36 files); literal role ARN, bucket and region in `.env.example` | INVESTIGATE / OWNER DECISION REQUIRED | Infrastructure identifiers in a public repository | DOC, CFG. Identifiers, not credentials | Reconnaissance aid; LOW | Record acceptance or placeholder the example | LOW | |
| HK-064 | Repository visibility: public | INVESTIGATE / OWNER DECISION REQUIRED | Raises weight of HK-060 to HK-063 | PROV. Already deferred in MC-160 (private after core build) | — | Keep existing deferral; revisit with HK-060 | HIGH | |
| HK-065 | Ignored local secret-bearing files (`.env.test`, `.env.test.local`, `.mcp.json`, `gitleaks-report.json`) | GAP TO FILL | Track A could capture them if it copies a working directory | LOCAL | Secret spread onto offline media | Rule: baseline from `git bundle` / mirror clone only | HIGH | |
| HK-074 | Dependency-update policy | GAP TO FILL | Dependabot off; stale `bun.lock` | CFG | Unpatched dependencies | Enable Dependabot alerts at minimum | MEDIUM | |
| HK-078 | Git history secret scan | GAP TO FILL | Only the current tree was scanned | — | Historical blobs replicate on seed | Run a history-wide scan (for example gitleaks) before GitLab seed | MEDIUM | |

## Summary Counts

| Classification | Count |
|---|---:|
| KEEP — ACTIVE | 10 |
| KEEP — HISTORICAL / AUDIT | 14 |
| REPAIR | 15 |
| CONSOLIDATE | 1 |
| ARCHIVE | 2 |
| REMOVE CANDIDATE | 5 |
| INVESTIGATE / OWNER DECISION REQUIRED | 17 |
| GAP TO FILL | 14 |
| **Total** | **78** (some rows aggregate many refs, for example HK-050 covers 643 branches) |

## Pre-Seed Priority Set

Recommended for disposition before the first GitLab seed and the Track A baseline: HK-017, HK-065, HK-066, HK-067, HK-062, HK-078, and the HK-050 seed-vs-prune ordering decision.
