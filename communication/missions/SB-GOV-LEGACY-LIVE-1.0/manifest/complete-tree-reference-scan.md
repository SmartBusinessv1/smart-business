# Track B — Complete Tracked-Tree Reference Scan Evidence Report

**Workstream:** SB-GOV-LEGACY-LIVE-1.0, Track B
**Authority:** `mission-control/03-complete-tree-reference-scan-authorization.md`, Founder-merged PR #1073, merge `b2d68c26cb9a9b6a4d7771589b65fc551dfa259e`
**Actor:** Claude Code — Repository Scan Operator (Track B; separate instance from Track A SB-P-1.18)
**Scanned baseline:** `main@462130f625c9366380ee37b87109d1831a5db49d` (PR #1072)
**Branch:** `governance/legacy-live-full-scan-evidence`
**Date:** 2026-10-25 (Asia/Kolkata)
**Status:** EVIDENCE SUBMITTED FOR INDEPENDENT MISSION CONTROL REPOSITORY EVIDENCE REVIEW. Not a clearance, not a removal authorization, not a closure.

## 1. Result summary

| Measure | Result |
|---|---|
| Tracked entries at baseline (`git ls-files -s -z`) | **2,516** (all mode `100644`) |
| Submodules / symlinks / executable-mode files | **0 / 0 / 0** |
| Text files scanned line by line (UTF-8) | **2,492** |
| Binary files (NUL byte present) | **24** (1,697,164 bytes), raw-byte searched, **0 hits** |
| Files excluded from scanning | **0** |
| Access failures | **0** |
| Total tracked bytes read from Git objects | 45,669,238 |
| Numbered live targets | **90** (51 instructions, 39 reports; 39 pairs, 12 unpaired instructions) |
| PR #1070 manifest: source blob equal / snapshot blob equal | **90/90 / 90/90** |
| Per-target hit rows | **3,838** across 468 referring files; every target has at least 9 hits |
| Directory-level (`communication/live/`) rows | **267** |
| TSV rows in total | **4,105** |
| **Active dependency** (rule-based) | **0** |
| Historic reference / self-reference / false positive | 794 / 398 / 2,619 |
| **Ambiguous** (unresolved, file-specific / directory-level) | **27 / 31** |
| `complete-tree-reference-hits.tsv` SHA-256 | `dec352638787282c7e7b851cea4972b6f97203872961566538095d3a43467800` |
| `complete-tree-scan-script.py` SHA-256 | `fff1b0be6468c395a49e99c268ce1b67c2fac24edffd7e555bfa363e432fedf7` |

No reference to any of the 90 files was found in executable code, workflows, scripts, configuration or tests. However, **all 90 files are still cited by durable records**: 384 historic-reference rows in 72 historical-record files. Removing any live path would leave those citations pointing at nothing (Section 9). Exhaustive *safety* is therefore **not** declared; this report establishes exhaustive *coverage*.

## 2. Reproduction

The script is not present in the baseline tree. Run it from outside the scanned checkout:

```bash
git fetch origin 462130f625c9366380ee37b87109d1831a5db49d
git worktree add --detach ../sb-legacy-scan 462130f625c9366380ee37b87109d1831a5db49d
git show <evidence-pr-head>:communication/missions/SB-GOV-LEGACY-LIVE-1.0/manifest/complete-tree-scan-script.py > /tmp/complete-tree-scan-script.py
python3 -I /tmp/complete-tree-scan-script.py --repo ../sb-legacy-scan --out /tmp/complete-tree-reference-hits.tsv > /tmp/scan-summary.txt
sha256sum /tmp/complete-tree-reference-hits.tsv
```

| Item | Value |
|---|---|
| Interpreter used | Python 3.15.0b3 (`python -I`, standard library only; written for 3.8+) |
| Git used | `git version 2.55.0.windows.2` |
| Runtime | about 2.5 minutes, dominated by `git blame` |
| Determinism check | Two consecutive full runs gave a byte-identical TSV (same SHA-256) and an identical summary |
| Committed TSV | Byte-identical to the script output above |

**Guards:** the script exits unless `HEAD` equals the baseline and the tracked tree is clean. Content is read from the Git object database (`git cat-file --batch` on the blob IDs from `git ls-files -s`), so working-tree line endings and editor state cannot affect results. `.gitattributes` sets `* text=auto eol=lf`, so blob bytes equal checkout bytes for text files. The script writes nothing inside the repository.

**Cross-version note:** the `line_commit` column comes from `git blame`. A different Git version could attribute a line differently in rare rename or copy edge cases. If the reviewer's digest differs, compare rows. The `match_form` and target columns do not depend on blame.

## 3. Coverage and exclusions

- **Enumeration:** `git ls-files -s -z` at the verified HEAD. The count is 2,516, the same as the baseline Git tree's blob count. The 2,856 figure in the authorization counts tree entries including directories.
- **Hidden files:** included, for example `.env.example`, `.gitattributes`, `.markdown-gate.yml` and everything under `.github/`.
- **Submodules / symlinks:** none exist (no `160000` or `120000` modes; no `.gitmodules`).
- **Binary files:** 24, namely 23 PNG evidence screenshots under `docs/implementation/SB-P-1.9/` and `SB-P-1.10/`, plus `public/favicon.ico`. They were not line-scanned. Instead, each was searched case-insensitively at the byte level for all 90 basenames and for `communication/live`, with **0 hits**.
- **Non-UTF-8 text:** none. The script would decode such files as Latin-1 and list them.
- **Targets excluded:** `communication/live/instruction.md` and `communication/live/report.md`, the active SB-P-1.18 pair. They are not among the 90 numbered files. They **were scanned as referrers** (read-only); neither contains a target hit.
- **Not scanned:** untracked or ignored files, Git history beyond what `git blame` and occupancy analysis read, PR comments, and other GitHub-hosted text. These are outside the tracked tree.

## 4. Inventory and PR #1070 manifest comparison

The script parses `manifest/legacy-live-90-file-manifest.md` (PR #1070) at the baseline. For each of the 90 paths it checks:

- the live blob ID equals the manifest's original blob SHA: **90/90**;
- the blob at the manifest's proposed preservation destination equals the live blob: **90/90**;
- no third tracked copy with the same blob exists outside the live path and its snapshot: **0** extra copies.

Destinations are `communication/missions/SB-P-1.12/communication-preservation/legacy-live-numbered/` (88 files, suffixes 1.1–1.50) and `communication/missions/SB-P-1.17/communication-preservation/legacy-live-numbered/` (2 files, suffix 1.51).

Unpaired instructions by filename: 1.9, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.31, 1.32, 1.41 and 1.49.

## 5. Matching method and collision treatment

Each line is matched case-insensitively against the script's `NAME_RE`. It matches `instruction` or `report`, then `1.` and a whole run of digits, then an optional `.md`. The match must not be preceded by a word character, dot or hyphen, and must not be followed by a word character or by a dot plus a word character. The captured name is then looked up in the 90-name inventory. As a result:

- `instruction1.1` never matches inside `instruction1.10`, `instruction1.110` or `instruction1.1.2`;
- names glued to a word, `.` or `-` (for example `SB-report1.5.md`) do not match;
- `report1.5.md.bak` does not match.

The path token immediately to the left of each name sets its `match_form`:

| `match_form` | Rule | Rows |
|---|---|---:|
| `exact-path` | token ends in `communication/live/` (also with backslash or `%2F` separators; `exact-path-url` if it contains `://`) | 2,014 |
| `relative-path-resolves` | token resolved against the referrer's directory equals the target path | 2 |
| `relative-path-unresolved` | token ends in `live/` but does not resolve to the target | 0 |
| `other-directory-path` | token names a different directory, for example a snapshot or `archive/SB-P-1.11/source/` | 146 |
| `basename` | bare `instructionN.md` / `reportN.md` | 1,391 |
| `stem` / `stem-with-path` | name without `.md` | 214 / 71 |
| `directory-or-glob` | `communication/live`, `communication/live/`, `communication/live/**` and similar, with no file named | 267 |

Directory mentions followed by the active pair (676), by a non-target numbered name such as `report1.86.md` or `instruction1.154.md` (3,694), or by another entry (203) are counted in the summary but not written as rows, because they do not name any of the 90.

## 6. Key finding — the live paths were reused across missions

Each `communication/live/<name>` path has held **several different files over time**. For example, `instruction1.5.md` was added and then deleted or archived four times before its current SB-P-1.12 occupant arrived in #652 (2026-09-27): #17, #427, #471 and earlier cycles. SB-P-1.11, SB-OPS-PROD-SYNC-1.0, SB-GOV-HOUSEKEEPING-1.0 and SB-GOV-COMMS-1.2/1.3 each ran their own `1.x` chains under the same filenames. Those chains are now archived under `communication/archive/<mission>/`.

**A textual `communication/live/instruction1.5.md` therefore does not mean the current file is referenced.** The script decides each row's `occupancy_era` deterministically:

1. Blame the hit line at the baseline (`git blame --porcelain -L n,n`, which follows whole-file renames).
2. List the target path's add and delete events (`git log --no-renames --diff-filter=AD`), ordered by `git rev-list --topo-order`.
3. Place the line's commit among those events:

| Era | Meaning | Rows |
|---|---|---:|
| `current` | line authored at or after the commit that created the current occupant | 1,100 |
| `prior-occupant` | line authored while an earlier occupant held the path, or in the commit that deleted it | 1,289 |
| `vacant-earlier` | authored while the path was vacant and a different occupant came next; cannot denote the current file | 316 |
| `pre-creation` | authored in the last vacancy before the current occupant; either a look-back or a forward reference | 987 |
| `n/a` | `other-directory-path` rows (no blame needed) | 146 |

For era-based false positives (2,473 rows; the other 146 are `other-directory-path`), `proposed_preserved_destination` records the blob that last occupied the path before the deletion, plus every baseline path holding that blob:

- **2,222 rows:** that blob is found at baseline, 1,823 of them under `communication/archive/SB-P-1.11/source/`;
- **141 rows:** the earlier blob is **not present** at baseline, because it was archived in edited form or not archived;
- **110 rows:** the line predates any occupant of that path.

None of these rows refer to the current files.

Spot check: the migration comment `report1.37.md SA-5` (`supabase/migrations/20260902120000_…link_reuse_guard.sql:283`, authored 2026-09-02) refers to the SB-P-1.11 report. `SA-5` occurs in `communication/archive/SB-P-1.11/source/report1.37.md` and 0 times in the current `report1.37.md`.

## 7. Classification rules

The rules are applied in order. Each row's TSV `rationale` field gives the rule that fired.

| Order | Condition | Classification |
|---:|---|---|
| 1 | `other-directory-path` | false positive |
| 2 | Referrer is the target itself (live original or its identical-blob snapshot) | self-reference |
| 3 | Referrer is under `communication/missions/SB-GOV-LEGACY-LIVE-1.0/` | self-reference |
| 4 | Era `prior-occupant` or `vacant-earlier` | false positive |
| 5 | Referrer is the active SB-P-1.18 pair | ambiguous |
| 6 | Executable/config file (code dirs or code/config extension), current era, exact or resolving path | **active dependency** |
| 6a | Executable/config or current-governance file otherwise | ambiguous |
| 7 | Era `pre-creation` and referrer in the occupant's mission (`SB-P-1.12`; `SB-P-1.17` for 1.51) or the live chain | historic reference (forward reference) |
| 7a | Era `pre-creation` otherwise | false positive |
| 8 | Live-chain file or snapshot, current era | historic reference |
| 9 | Historical record of a *different* mission, current era | ambiguous |
| 10 | Historical record, current era, exact path, or basename with mission or "live" context | historic reference |
| 11 | Anything else | ambiguous |

Directory-level rows are not file-specific. They are self-reference for workstream records, historic reference for historical records and live files, and ambiguous elsewhere.

**Action needed** follows from the classification:

- **active dependency:** re-point under a separate exact-file authorization before removal;
- **historic reference:** none for preservation; leave the historical text unmodified; content stays resolvable at the snapshot;
- **self-reference / false positive:** none;
- **ambiguous:** independent manual review.

## 8. Result breakdown

### 8.1 Form × classification (per-target rows)

| `match_form` | Historic | Self | False positive | Ambiguous |
|---|---:|---:|---:|---:|
| exact-path | 631 | 299 | 1,069 | 15 |
| relative-path-resolves | 2 | 0 | 0 | 0 |
| basename | 155 | 87 | 1,138 | 11 |
| stem | 4 | 12 | 197 | 1 |
| stem-with-path | 2 | 0 | 69 | 0 |
| other-directory-path | 0 | 0 | 146 | 0 |

### 8.2 Referrer class (per-target rows)

`historical-record` 2,843; `workstream-record` 399; `live-numbered` 263; `preserved-snapshot` 263; `executable-or-config` 60; `current-governance` 10.

All 60 `executable-or-config` rows are prior-era false positives (SB-P-1.11 and SB-OPS-PROD-SYNC-1.0 migration and verification SQL comments) except one, `H03812`, which Section 10.1 resolves as a false positive.

### 8.3 Per-target counts

The complete per-target classification counts are in the script summary (`per_target_classification`). Range: 9 rows (`report1.39.md`) to 120 rows (`report1.1.md`, `report1.10.md`). Targets with zero hits: **none**.

## 9. Record-pointer references that removal would break

These rows are classified `historic reference`, but they are the durable records' own pointers to the live files. Removing a live path would make each pointer unresolvable at its literal location, although the content would survive at the snapshot.

| Referrer | Rows | Note |
|---|---:|---|
| `communication/missions/SB-P-1.12/communication/03_live_chain_index.md` | 88 | Index of the whole SB-P-1.12 live chain |
| `communication/missions/SB-P-1.12/handover-log.md` | 35 | Handover record pointers |
| `communication/missions/SB-P-1.12/README.md` | 23 | Mission index |
| `docs/phase-1-mission-blueprint/completed/SB-P-1.12.md` | 18 | Completed blueprint |
| `communication/missions/SB-P-1.12/decision-log.md` | 17 | Decision record pointers |
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` | 8 | Locked EIS citations |
| `communication/missions/SB-P-1.17/decision-log.md` | 1 | D-11 cites `instruction1.51.md` as its record |
| `communication/missions/SB-P-1.17/README.md` | 2 | Line 149: the 1.51 pair "is reconciled at closure, not before" |
| `docs/research/India-Legal-Privacy-Retention-Deep-Research-Report.md` | 1 | Line 6 cites `instruction1.14.md` as research authority |
| 63 further SB-P-1.12 / SB-P-1.17 mission records | 191 | Stage reports and Mission Control records |

Protocol `communication/AI_Communication_and_Handover_Protocol.md:484` (row `H03845`) requires the archiving actor to "identify repository links pointing to the `communication/live/` exchange being archived" and either update them or leave an approved note. That rule governs any future removal mission. The scan does not resolve it.

## 10. Unresolved references (ambiguous) — operator review proposals

The operator reviewed every ambiguous row by hand. The proposals below are **appended findings**: the TSV keeps the rule-based classification, and the reviewer decides.

### 10.1 File-specific (27 rows)

| Rows | Referrer | Operator finding | Proposed classification |
|---|---|---|---|
| H00002–H00004 | `communication/AI_Communication_and_Handover_Protocol.md:579` | Illustrative naming convention ("`instruction1.1.md` with `report1.1.md` …"), not a pointer to a file | false positive (generic pattern) |
| H00008, H00010 | `communication/README.md:36`, `:98` | Same illustrative convention | false positive (generic pattern) |
| H03812 | `supabase/migrations/20260902120000_…link_reuse_guard.sql:283` | Prior occupant (SB-P-1.11 `report1.37.md` SA-5); see Section 6 | false positive |
| H02934, H02936 | `SB-OPS-REPO-HOUSEKEEPING-1.0/claude-code/01_…audit.md:174`, `02_…register.md:36` | Cites `report1.47.md:35` as an SB-P-1.12 continuity-manifest entry | historic reference (cross-mission) |
| H02935 | `SB-OPS-REPO-HOUSEKEEPING-1.0/claude-code/01_…audit.md:281` | Records the unpaired-instruction observation (HK-038) | historic reference |
| H02937, H02941 | `SB-OPS-REPO-HOUSEKEEPING-1.1/…/01_…report.md:26`; `…-1.10/provider/01_…report.md:33` | Cite MC-186 constraints in `instruction1.47.md` (no AI token custody) as controlling | **historic reference with governance weight** — the cited constraint is applied, not merely recorded |
| H02938–H02940 | `SB-OPS-REPO-HOUSEKEEPING-1.1/claude-code/02_secret_scan_and_fixture_register.md:66,130,131` | Secret-scan register lines point to `report1.44.md:152` (test UUID, history only) | historic reference; on removal the register's line pointer would need the snapshot path |
| H02942, H02943 | `SB-OPS-REPO-HOUSEKEEPING-1.11/mission-control/01_clean_enough_to_preserve_declaration.md:27,64` | Line 64: Mission Control "adopts the merged `report1.50.md` rule as **controlling operational guidance**". The rule bullets are restated in the declaration | **OPEN — strongest governance dependency found.** The authority source cited is the live path. Recommend the reviewer decide whether a citation to the snapshot is required before any removal |
| H02944, H02945 | `SB-OPS-REPO-HOUSEKEEPING-1.3/claude-code/02_divergent_branch_register.md:27,36` | Branch register: the `instruction1.1.md` draft on closed #478 is the SB-GOV-COMMS-1.3 era file, not the current SB-P-1.12 file; the `instruction1.3.md` MC-59 draft is the SB-P-1.12 era file | H02944 false positive (closed-PR draft of a different occupant); H02945 historic reference |
| H02946 | `…-1.3/claude-code/02_divergent_branch_register.md:38` | `report1.48.md` draft on closed #732 | historic reference |
| H02947, H02948 | `SB-OPS-REPO-HOUSEKEEPING-1.5/…/01_…dossier.md:90` | Cites `instruction1.48.md` / `1.49.md` lines for the pre-subgroup GitLab path | historic reference |
| H02949 | `SB-OPS-REPO-HOUSEKEEPING-1.7/…/01_…report.md:141` | Same GitLab-path observation | historic reference |
| H02951–H02953 | `SB-OPS-REPO-HOUSEKEEPING-1.9/claude-code/03_stale_gitlab_path_reconciliation_list.md:27,35,36` | Section 2 lists `instruction1.48.md` / `1.49.md` as "Current Operational Records — Later Reconciliation Candidates" (supersede, do not rewrite). At baseline, neither `mission-control/mission_memory.md` nor `SB-P-1.12/decision-log.md` records the verified target | **OPEN — reconciliation item still outstanding**; it names these two live files |
| H03573, H03574 | `SB-P-1.17/communication-preservation/01-mc422-…-record.md:16` | Inventory row naming the SB-P-1.12 range `instruction1.1.md`–`instruction1.50.md` | historic reference (inventory) |

### 10.2 Directory-level (31 rows)

| Rows | Referrer | Operator finding |
|---|---|---|
| H03839–H03849 | `communication/AI_Communication_and_Handover_Protocol.md` | Policy on the live folder's lifecycle. Line 484 is the link-identification duty in Section 9. Not a dependency on a specific numbered file |
| H03850–H03854 | `communication/README.md` | Folder-purpose and archive-format policy |
| H04085, H04086 | `docs/governance/Repository_Archive_Routing_Policy.md:16`; `…Canonical_Project_Source_Set_v1.0.md:92` | Folder routing / source-set row for `communication/live/**` |
| H04093 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md:583` | "transient pointer" policy |
| H04094–H04096 | `mission-control/mission-control-22-24.md:387,538`; `mission_memory.md:258` | Harvest exclusion policy. Line 258 states that the live folder "now contains only reusable blank `instruction.md` and `report.md` templates", which is **stale against the baseline** (92 files present) |
| H04097–H04105 | `organizational-learning/` README, `sources/allowlist.ts`, tests | `HARD_EXCLUDED_SOURCE_PREFIXES = ["communication/live/"]` is a prefix **exclusion**. Removing numbered files cannot break it. Tests use only `instruction.md`, `report.md` and the non-target `report1.57.md` |

Operator proposal for all 31: **not a dependency on any of the 90 files**. The folder and the active pair remain.

## 11. Twelve unmatched instructions and `report1.51.md` (step 4)

These are appended findings only. **The existing 90-file clearance matrix (`legacy-live-removal-readiness-matrix.md`) is not amended.** Each finding cites durable mission files and PR state (GitHub API, 2026-10-25). Nothing is inferred from filenames.

MC numbers are reused across missions (for example, MC-92 and MC-113 also exist in SB-P-1.15 and SB-P-1.16), so the evidence below is restricted to SB-P-1.12 / SB-P-1.17 records.

| Instruction | MC / PR (merge) | Nature and expected return | Durable outcome evidence | Finding |
|---|---|---|---|---|
| `instruction1.9.md` | MC-92 / #660 merged 2026-09-27, `7a39daa6` | Gate record; no file report specified. It cites an MC-90 addendum as chat-only "`report1.9.md` … not yet a canonical GitHub file" | `SB-P-1.12/mission-control/25-r2-source-coverage-gate-closure-record.md` (MC-141, #682): "§3 instruction1.9 §4 completion evidence"; gate **CLOSED / SATISFIED** | Outcome evidenced. **OPEN gap:** the MC-90 addendum named `report1.9.md` was never committed |
| `instruction1.12.md` | MC-109 / #664, `ef2ff5f2` | Decision record; STOP line requires merge only | Parent of MC-111, MC-113, MC-117 and MC-120 headers; Founder Record 06 line 14 | Decision record canonical; no report required |
| `instruction1.13.md` | MC-111 / #665, `ecf91b9a` | Package for human counsel; return to MC-112 | Founder Record 06 lines 22–23: the MC-111 external validation gate is **deferred**; routed to research by MC-113 | **Not executed as written; deferred, not cancelled.** No counsel return exists. OPEN |
| `instruction1.14.md` | MC-113 / #666, `6304b9ef` | Deep-research report to Mission Control | `docs/research/India-Legal-Privacy-Retention-Deep-Research-Report.md` (#667, `e5eb124b`), line 6 cites this instruction; accepted in MC-117 (`instruction1.15.md` line 22) | Executed; output durable |
| `instruction1.15.md` | MC-117 / #668, `18f8d977` | Decision record | Parent of MC-120 (`instruction1.16.md` header) | Decision record canonical; no report required |
| `instruction1.16.md` | MC-120 / #669, `3125a099` | Proposal; Founder disposition required | Founder Record 07 (`founder/07-…approval.md` lines 14–16) approves the substance | Disposed by Founder approval |
| `instruction1.17.md` | MC-122 / #670, `d4be1927` | Approval capture; Contract 22 edit follows | Contract 22 §33 added by #671 (`5e23b3c8`); heading at `22_Shared_Product_Foundations.md:560` | Executed |
| `instruction1.18.md` | MC-126 / #672, `8fbd4346` | Claude Code work package; completion report required | `SB-P-1.12/claude-code/33-contract22-section33-fctm-blueprint-reconciliation-report.md` (#673, `c8015b4f`) cites this instruction's blob `fbae55aa…`, equal to baseline; result relied on by MC-141 §3.1 | Executed; report in mission folder, not under a same-suffix live name |
| `instruction1.31.md` | MC-166 / #699, `e6c6aac5` | Publish Stage 12 package; return in the authorized `report1.30.md` | `report1.30.md` header line 8 and §9; PR #700 | Executed; answered in `report1.30.md` |
| `instruction1.32.md` | MC-167 / #701, `7d95143e` | Refine PR #700; return in `report1.30.md` | `report1.30.md` §10; #700 merged (`5cf32e85`); `mission-control/40-stage13-implementation-package-lock.md` lines 46–48 (PQ-7 resolved by MC-167) | Executed; answered in `report1.30.md` |
| `instruction1.41.md` | MC-178 / #717, `47ad308c` | Founder read-only Auth capture | `mission-control/49-…disposition.md` §5: **BLOCKED — GitHub account restriction**; EV-02 PARTIALLY EVIDENCED; `claude-code/40-…assessment.md:496` | **Not executed (blocked).** OPEN |
| `instruction1.49.md` | MC-188 / #734, `1f8b5e93` | Live interactive Founder guidance; no file return specified | Indirect only: `report1.50.md` (PV-1 to PV-9 verification on `team-lips/smart-business/smart-business-continuity`); `mission-control/60_…` and `61_…` seed records; HK-1.9 list Section 2 still open | **OPEN:** no direct durable record of the MC-188 session outcome; stale-path reconciliation outstanding |

**`report1.51.md`:** status line "AWAITING SPECIALIST EXECUTION — NOT A VERIFICATION RESULT". The SB-P-1.17 preservation record (`communication-preservation/01-mc422-…-record.md` §4) states that independent returns arrived by Founder relay as MC-333 to MC-342. They were transcribed in `mission-control/11-mc349-…packet.md` (PR #1000), Gate 10 passed under MC-393 (PR #1009), and `report1.51.md` "was never updated". **NOT EXECUTED PLACEHOLDER, unchanged.** Per `SB-P-1.17/README.md:149`, the pair is reconciled at SB-P-1.17 closure, so removal before that closure would conflict with the mission's own record.

## 12. Limitations

- Natural-language mentions without the filename pattern are not matched, for example "instruction 1.9", "1.12–1.18" or "report for 1.31". Range notation is not expanded.
- Classification is rule-based and proposed. Era placement relies on `git blame` without copy detection (`-C`). Lines copied into another file are attributed to the copying commit, which is why archive consolidations such as #429 appear as `pre-creation`. Topological order is used for commits on parallel branches.
- `referrer_class` is path-based. A historical file stored outside the listed directories would fall to `other`; none did.
- PR comments, issues and GitHub-hosted text are out of scope.

## 13. Gate position

- **Coverage:** complete for the tracked tree at the baseline (2,516 of 2,516 entries; 0 excluded; 0 access failures; binaries byte-searched).
- **Reference assurance:** 0 executable/config dependencies. Durable record-pointer references exist for all 90 files (Section 9). Two governance-weight citations (H02942/H02943, H02937/H02941) and one open reconciliation item (H02951–H02953) remain **OPEN**.
- **Not authorized and not done:** no `communication/live/` edit, removal, archive, Stage 23/24 closure or matrix amendment. The SB-P-1.18 pair was untouched.
- **Next gate:** independent Mission Control Repository Evidence Reviewer. If independent complete-tree access is unavailable, the result is **REVIEW BLOCKED** and exhaustive safety must not be declared.

**STOP — EVIDENCE PR SUBMITTED FOR INDEPENDENT MISSION CONTROL REVIEW. NO SELF-MERGE.**
