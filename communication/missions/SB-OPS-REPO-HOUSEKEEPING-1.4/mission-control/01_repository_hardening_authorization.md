# SMART BUSINESS MISSION CONTROL

# SB-OPS-REPO-HOUSEKEEPING-1.4 — Repository Hardening Authorization

**Date:** 2026-10-04  
**Owner:** Mission Control  
**Parent mission:** SB-OPS-REPO-HOUSEKEEPING-1.0  
**Depends on:** accepted PRs #736, #738, #740 and #742  
**Execution actor:** Claude Code  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main`  
**Mode:** NARROW REPOSITORY CONFIGURATION HARDENING

## 1. Purpose

Continue housekeeping before the Founder / Mission Control “clean enough to preserve” disposition.

This package addresses the accepted hardening findings:

- **HK-066** — add a repository `.gitattributes` policy for stable future line-ending behavior;
- **HK-067** — narrow the overly broad Markdown backup ignore pattern that can hide genuine files on case-insensitive Windows clones;
- **HK-068** — fix the minor `.gitignore` issues identified in the accepted audit.

This package is intentionally narrow.

## 2. Critical boundary

The accepted audit established that these are repository-hardening items, not GitLab-seed or Track A blockers.

Do not rewrite that decision.

The goal is to improve portability, predictability and visibility of future repository changes before the repository is frozen for continuity.

## 3. HK-066 — .gitattributes

Add one root-level file:

`.gitattributes`

Design the narrowest reasonable policy that:

- keeps repository text files consistently LF in Git and future working trees where Git honors attributes;
- explicitly marks binary file types already present in the repository as binary where useful;
- avoids unnecessary file-type-specific complexity;
- does not cause a mass content rewrite in this mission;
- does not modify existing tracked file contents merely to normalize EOL.

A reasonable baseline may use:

`* text=auto eol=lf`

plus explicit binary patterns for known binary assets if warranted by the actual tree.

Before committing, verify the proposed rules do not classify known binary files as text.

Do not run a repository-wide renormalization in this mission.

## 4. HK-067 — narrow backup ignore rule

The accepted audit found that the current broad pattern:

`*_BACKUP_*.md`

can hide a legitimate file such as:

`Engineering_Backup_and_Disaster_Recovery_v1.0.md`

on a case-insensitive Windows clone.

Replace the broad rule with the narrowest pattern(s) that still ignore the actual generated Markdown-toolkit backup naming convention while not matching ordinary filenames containing words such as “Backup”.

Base the new pattern on real generated artifact examples already observed in the repository/workstation, such as timestamped backup names.

Do not add the local-only EOS disaster-recovery draft to Git in this mission.

After changing the rule, verify with `git check-ignore` or equivalent that:

- timestamped generated backup artifacts remain ignored;
- `docs/engineering/eos/Engineering_Backup_and_Disaster_Recovery_v1.0.md` would no longer be ignored solely because of the toolkit backup rule;
- no secret-bearing local file is unintentionally unignored.

## 5. HK-068 — minor .gitignore cleanup

Reconcile the accepted minor findings, including:

- ensure the intended tracked/local example environment files are not accidentally hidden by the broad `.env.*` rule where a negation is appropriate;
- remove or consolidate redundant Claude-local ignore entries only if doing so preserves the same effective protection;
- preserve ignore protection for:
  - real local environment files;
  - `.mcp.json`;
  - local secret-scan outputs;
  - Supabase local temp state;
  - build outputs;
  - node_modules;
  - local editor/tool state;
  - Python cache;
  - generated Markdown-toolkit artifacts.

Do not weaken secret hygiene.

## 6. Local-only EOS draft boundary

The local-only:

`docs/engineering/eos/Engineering_Backup_and_Disaster_Recovery_v1.0.md`

remains an **OWNER DECISION REQUIRED** item (HK-017).

This mission may make it visible as untracked by correcting the ignore rule.

It must NOT:

- add it;
- stage it;
- commit it;
- delete it;
- rewrite it;
- classify its content as authoritative.

If it appears as untracked after the ignore fix, record that fact in the report and leave it untouched.

## 7. Validation

Claude Code must:

1. inspect the actual tracked file-type mix before writing `.gitattributes`;
2. verify no mass EOL/content rewrite occurred;
3. run `git diff --check`;
4. run Markdown quality in non-modifying mode on touched Markdown/report files;
5. run targeted `git check-ignore` tests for:
   - a real timestamped toolkit backup filename;
   - the EOS B&DR draft filename;
   - representative secret-bearing local files;
   - `.env.test.local.example` or the relevant example path;
6. verify the final diff contains only authorized paths;
7. verify no unexpected tracked file changed because of EOL normalization.

## 8. Writable paths only

Claude Code may modify/create exactly:

1. `.gitattributes` — new
2. `.gitignore` — modified
3. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.4/claude-code/01_repository_hardening_report.md` — new

No other path may change.

## 9. Prohibited actions

Do NOT:

- run `git add --renormalize .`;
- rewrite tracked files solely for EOL normalization;
- add the local-only EOS B&DR draft;
- add ignored local secret files;
- delete/rename/move repository files;
- delete/prune branches or tags;
- close PRs;
- change GitHub/GitLab settings;
- start the GitLab seed;
- modify application code/tests/SQL/migrations;
- resolve EOS authority;
- self-merge.

## 10. Completion report

The report must include:

1. canonical baseline SHA;
2. final `.gitattributes` policy and why;
3. exact `.gitignore` changes;
4. before/after `git check-ignore` evidence for the targeted cases;
5. confirmation whether the local-only EOS B&DR draft became visible as untracked;
6. confirmation no local secret-bearing file became unignored unintentionally;
7. confirmation no tracked file was mass-renormalized;
8. Markdown quality result;
9. `git diff --check` result;
10. exact changed paths;
11. residual hardening/owner decisions.

Open one PR with only the three authorized paths.

Return:

- canonical baseline SHA;
- branch;
- final head SHA;
- all three blob SHAs;
- PR number/URL;
- exact changed paths;
- validation results;
- whether HK-066/067/068 are fully resolved;
- whether HK-017 remains owner-decision-required.

End the report exactly:

**REPOSITORY HARDENING SUBMITTED — NO MASS RENORMALIZATION / SECRET ADMISSION / PROVIDER MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION**
