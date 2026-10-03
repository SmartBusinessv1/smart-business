# SMART BUSINESS MISSION CONTROL

# SB-OPS-REPO-HOUSEKEEPING-1.0 — Repository Housekeeping Audit Authorization

**Date:** 2026-10-03  
**Owner:** Mission Control  
**Founder direction:** perform a thorough repository housekeeping audit before the first governed repository replication to physical/offline continuity media or the first GitLab continuity seed  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Execution actor:** Claude Code  
**Mode:** READ-ONLY AUDIT / REPORT ONLY

## 1. Purpose

The repository has accumulated implementation history, governance material, mission records, engineering documentation, branches, tooling records, archived material and provider-specific operational artifacts.

Before creating the first governed physical/offline continuity baseline and before seeding the GitLab continuity repository, the Founder wants a deliberate housekeeping audit to determine:

- what is still actively serving Smart Business / Team LIPS;
- what is obsolete, superseded, duplicated, broken, orphaned, misleading or unusable;
- what should remain for historical or audit reasons even if no longer active;
- what should later be archived, consolidated, repaired or removed;
- where repository structure, naming, indexes or folder/file conventions are inconsistent;
- what important repository-level gaps should be filled.

This mission is discovery and evidence only.

## 2. Founder continuity checkpoint

The current Infrastructure / Provider Operations live GitLab account/group setup may continue.

However, until this housekeeping audit is reviewed and disposed by Mission Control:

- do not perform the first GitLab repository seed;
- do not declare the first Track A physical/offline repository baseline complete;
- do not use this audit as authority to delete or rewrite anything.

Mission Control may later authorize cleanup, archive, repair or consolidation in separately scoped work packages.

## 3. Mandatory special focus — `docs/engineering/eos`

Claude Code must perform a file-by-file and folder-by-folder assessment of:

`docs/engineering/eos/**`

The Founder specifically does not know whether EOS is still active or useful.

For EOS, determine with evidence:

1. what EOS appears to have been intended to do;
2. whether EOS is referenced by current canonical governance, root documentation, AGENTS, scripts, hooks, GitHub Actions, package scripts, mission instructions or active operating procedures;
3. whether any EOS material is actually enforced by code/tooling versus merely documented;
4. whether EOS content duplicates or conflicts with:
   - current canonical governance;
   - AI Operations Manual;
   - mission lifecycle / delivery framework;
   - current Mission Control communication protocol;
   - current tooling/platform records;
5. whether the `archive/` and `v1.0/` subtrees duplicate active material;
6. whether `Quality_Gate_Verification_Sample.md` is still useful or only historical/test residue;
7. whether `Engineering_Tooling_Register.md`, platform inventory/capability files, workflow files and provider-specific ChatGPT/Claude workflow files are current, stale, redundant or superseded;
8. whether the `eos-v1.0` tag or other EOS-related tags/refs still serve a documented purpose;
9. whether EOS should be:
   - KEEP ACTIVE;
   - KEEP AS HISTORICAL;
   - ARCHIVE;
   - CONSOLIDATE;
   - REPAIR;
   - REMOVE CANDIDATE;
   - INVESTIGATE FURTHER.

Do not change EOS in this audit mission.

## 4. Whole-repository audit scope

Audit the repository comprehensively, including at minimum:

- root-level files and configuration;
- `.github/**`;
- `app/**`;
- `public/**`;
- `docs/**`;
- `communication/**`;
- `merge/**`;
- `supabase/**`;
- scripts/tooling/configuration directories;
- package manifests and lockfiles;
- build/test/lint/typecheck configuration;
- Git hooks or hook-related files;
- migration documentation and migration files;
- generated/test/sample/temporary artifacts;
- archived/deprecated folders;
- branches, tags and open pull requests where they materially affect housekeeping;
- documentation references and links;
- repository metadata that can create operational confusion.

Do not interpret historical records as removable merely because they are old. Historical/governance/audit value must be assessed separately from active operational value.

## 5. Candidate classifications

Every material candidate should be classified as one of:

- **KEEP — ACTIVE**
- **KEEP — HISTORICAL / AUDIT**
- **REPAIR**
- **CONSOLIDATE**
- **ARCHIVE**
- **REMOVE CANDIDATE**
- **INVESTIGATE / OWNER DECISION REQUIRED**
- **GAP TO FILL**

For each candidate provide:

- exact path/ref;
- classification;
- why it was flagged;
- evidence of active references or lack of references;
- duplication/overlap evidence;
- whether it is executable, documentation-only, generated, historical or provider-specific;
- dependency/risk if changed;
- recommended next action;
- confidence: HIGH / MEDIUM / LOW.

No candidate is approved for deletion by this classification alone.

## 6. Uniformity and structural audit

Assess repository consistency and identify actionable gaps, including:

### Folder/file structure
- inconsistent naming styles;
- inconsistent version suffixes;
- mixed casing or ambiguous abbreviations;
- misplaced files;
- duplicate folder purposes;
- missing README/index files where navigation is genuinely difficult;
- indexes that no longer reflect actual contents;
- orphan documents not linked from any current index.

### Governance / mission communication
- broken instruction/report pair continuity;
- orphaned mission instructions or reports;
- stale mission indexes;
- duplicate or conflicting authority records;
- old references that conflict with current Founder-approved decisions;
- accidental use of deprecated Smart Business routes/domains or old architecture assumptions.

Do not rewrite canonical governance during this audit.

### Documentation quality
- broken internal links;
- broken external links where practical to validate without broad web research;
- documents pointing to nonexistent paths;
- stale references to removed files;
- materially duplicated documents;
- outdated provider/UI instructions clearly superseded by newer canonical records.

### Engineering/tooling
- unused or dead scripts;
- package scripts referencing missing files;
- duplicated tooling/configuration;
- stale workflow definitions;
- disabled/broken automation due to repository configuration versus external provider/account restrictions;
- abandoned test fixtures or samples;
- generated artifacts committed unnecessarily;
- oversized/unusual tracked files;
- dependency/lockfile inconsistencies;
- line-ending / formatting / markdown quality inconsistencies;
- ignore-file gaps that could allow local junk into Git.

### Security hygiene
Perform a cautious static scan for likely committed secret material or credential-shaped artifacts.

If a credible secret exposure is found:
- do not print or copy the secret value;
- report only path, type/category and severity;
- stop any action that would expose it further;
- flag it for Mission Control security disposition.

## 7. Branch / tag / PR hygiene

The audit may inspect repository refs and should specifically assess:

- obviously stale merged mission branches;
- abandoned branches;
- duplicate or superseded open PRs;
- large branch-count causes;
- tags with unclear current purpose;
- whether branch/tag naming is consistent.

Do not delete branches, tags or PRs.

Where possible distinguish:
- branches that preserve unique unmerged work;
- branches safely represented by merged commits;
- provider-generated refs;
- continuity-relevant refs;
- branches requiring human review.

## 8. Gap analysis

Identify repository-level gaps whose absence creates confusion, fragility or maintenance cost.

Examples may include:

- missing repository architecture/index documentation;
- missing ownership/authority markers;
- missing archive policy;
- missing naming convention;
- missing generated-artifact policy;
- missing stale-branch lifecycle policy;
- missing dependency-update policy;
- missing documentation link check;
- missing secret-scanning guard;
- missing repo-health/housekeeping checklist.

Do not invent process for its own sake. Recommend a gap only when it materially improves clarity, trust, maintainability, security or continuity.

## 9. Required deliverables

Write only:

1. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/claude-code/01_repository_housekeeping_audit.md`
2. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/claude-code/02_housekeeping_candidate_register.md`

The audit report must contain:

- executive summary;
- methodology and commands/checks used;
- repository topology summary;
- EOS deep-dive;
- high-confidence remove/archive/consolidate candidates;
- repair candidates;
- keep-active / keep-historical findings where important;
- uniformity findings;
- broken/unusable findings;
- branch/tag/PR hygiene findings;
- security-hygiene findings;
- gap-to-fill findings;
- dependency/risk notes;
- recommended cleanup sequencing;
- explicit items requiring Founder/Mission Control decision;
- exact limitations / uncertainties;
- final statement that no cleanup mutation occurred.

The candidate register should be a compact decision table suitable for Mission Control disposition.

## 10. Prohibited actions

Claude Code must NOT:

- delete, rename, move or rewrite existing repository files;
- edit EOS or other existing documentation;
- close PRs;
- delete branches or tags;
- modify Git history;
- run destructive cleanup commands;
- change application code;
- author or modify SQL/migrations;
- mutate Supabase, Lovable, GitHub provider settings or GitLab;
- enable/disable CI;
- change repository settings;
- change secrets;
- claim a cleanup candidate is approved for removal;
- self-merge.

## 11. Execution discipline

Before audit:

1. fetch and verify current canonical `main`;
2. confirm this authorization is present on canonical `main`;
3. check for newer authority that conflicts;
4. create a mission-scoped branch from exact current canonical `main`.

Use repository-native evidence extensively:
- `git ls-files`;
- directory/file inventory;
- `git log`, `git blame` only where useful;
- `git grep` / ripgrep reference analysis;
- branch/tag/ref inspection;
- package/script/config inspection;
- static link/reference checks;
- GitHub CLI/API read-only queries where available.

Avoid speculative judgments. Evidence first.

## 12. Completion state

Open a PR containing only the two authorized report files.

Report:

- canonical baseline SHA used;
- branch;
- final head SHA;
- both report blob SHAs;
- PR number and URL;
- exact changed-file list;
- check/workflow state;
- confirmation that no other mutation occurred.

End the main audit report with:

**REPOSITORY HOUSEKEEPING AUDIT SUBMITTED — NO CLEANUP MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION**
