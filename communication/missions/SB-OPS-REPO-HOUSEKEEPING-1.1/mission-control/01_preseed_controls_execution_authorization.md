# SMART BUSINESS MISSION CONTROL

# SB-OPS-REPO-HOUSEKEEPING-1.1 — Pre-Seed Controls Execution Authorization

**Date:** 2026-10-03  
**Owner:** Mission Control  
**Parent mission:** SB-OPS-REPO-HOUSEKEEPING-1.0  
**Canonical input:** accepted housekeeping audit merged through PR #736  
**Execution actor:** Claude Code  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Mode:** PRE-SEED EVIDENCE / ANALYSIS ONLY — NO CLEANUP, NO PROVIDER MUTATION, NO BRANCH DELETION

## 1. Purpose

Execute the first accepted pre-seed control package arising from the canonical housekeeping audit.

This package covers only:

1. **HK-078 — history-wide secret scan**
2. **HK-062 — scanner / fixture handling**
3. **HK-050 to HK-052 — branch prune timing analysis for the 648 non-unique stale branches**

The goal is to clear the evidence and decision prerequisites needed before the first GitLab continuity seed.

This package does **not** authorize the GitLab seed itself.

## 2. Canonical constraints already settled

The following are already decided and must not be reopened:

- GitHub remains canonical.
- GitLab remains private, downstream and non-canonical.
- MC-186 requires explicit seeding of ordinary:
  - `refs/heads/*`
  - `refs/tags/*`
- GitHub pull-request refs are excluded.
- Mirror/force/prune/bidirectional-sync behavior remains prohibited for the GitLab continuity seed.
- Track A uses the already-authorized bare-mirror / Git-bundle continuity method.
- No working-directory backup is authorized as the canonical Track A baseline.
- `.gitattributes` is hardening, not a seed blocker.

## 3. Workstream A — HK-078 history-wide secret scan

Perform a history-wide scan of the repository Git object/history space, not merely the current working tree.

### 3.1 Required coverage

Scan all reachable ordinary repository history and refs that would be relevant to continuity replication, including at minimum:

- canonical `main` history;
- ordinary remote branches;
- tags;
- historical commits reachable from those refs.

Where technically practical, also assess whether unreachable/dangling local objects exist, but do not treat workstation-only unreachable objects as canonical repository state.

### 3.2 Preferred scanner

Use a reputable local history-capable secret scanner such as Gitleaks if already available or installable without secret disclosure or provider mutation.

If a scanner cannot run, document exactly why and use a second-best static/history-capable method without pretending equivalence.

### 3.3 Secret handling

If any potential secret is detected:

- NEVER print the complete value;
- NEVER place the complete value in Git, chat, reports or screenshots;
- record only:
  - finding ID;
  - path;
  - commit SHA if relevant;
  - rule/type/category;
  - masked fingerprint or scanner-generated stable identifier if safe;
  - whether current or historical;
  - likely real / test fixture / publishable identifier / false positive / unresolved;
  - severity;
  - whether rotation/invalidation appears necessary;
  - whether the finding can block the first GitLab seed.

If a credible live credential is discovered, STOP any step that would replicate it further and clearly raise a security disposition item for Mission Control.

Do not rotate or invalidate credentials in this mission.

### 3.4 Deliverable

Produce a history-scan result table containing every material finding or an explicit clean result.

The report must distinguish:

- current-tree findings;
- history-only findings;
- test fixtures;
- historical/public identifiers;
- likely false positives;
- unresolved findings requiring owner/security review.

## 4. Workstream B — HK-062 scanner / fixture handling

The accepted housekeeping audit identified legitimate scanner-triggering fixtures, including examples such as:

- throwaway/private-key test fixture material;
- synthetic AWS-key-shaped values;
- synthetic JWT-shaped values;
- archived publishable Supabase anon-role JWT material.

Do not assume every scanner hit is a real secret.

### 4.1 Required analysis

For each scanner-triggering known or newly found fixture:

- confirm exact path;
- determine whether it is actively used by tests/tooling;
- determine whether it is synthetic / throwaway / publishable / historical;
- determine whether changing or removing it would break tests, evidence or audit history;
- determine whether GitLab secret detection is likely to block initial push;
- recommend the narrowest safe handling method.

### 4.2 Allowed recommendations

Recommendations may include:

- path-based allowlisting;
- rule-specific allowlisting;
- inline scanner suppression if technically appropriate;
- documented acceptance;
- test-fixture redesign under a later mission;
- pre-seed GitLab-side exception procedure if GitLab requires it.

This mission may **design and document** the handling strategy.

It may NOT:

- alter fixture files;
- alter scanner configuration;
- change GitLab settings;
- create tokens;
- bypass provider protections;
- push any code to GitLab.

### 4.3 Required output

Produce a proposed **pre-seed scanner handling plan** that clearly separates:

- real secret requiring security action;
- legitimate test fixture;
- historical/public identifier;
- false positive;
- unresolved.

Where allowlisting is recommended, specify the narrowest proposed scope. Do not create the allowlist in this mission.

## 5. Workstream C — HK-050 to HK-052 branch-seed timing

The accepted audit found 648 non-unique stale branches covered by HK-050 to HK-052.

### 5.1 Scope

Do not delete any branch.

Re-verify the 648-branch population against the current canonical repository state.

The analysis must answer only this timing question:

> Should the 648 non-unique stale branches be governed-pruned **before** the first GitLab seed, or retained through the first seed and pruned later?

Do not reopen whether ordinary branches are seeded; MC-186 already requires ordinary `refs/heads/*`.

### 5.2 Required decision criteria

Compare the two options against:

- continuity usefulness;
- preservation of human-readable branch names;
- GitHub `refs/pull/*` non-transferability;
- ability to reconstruct historical context after branch deletion;
- seed manifest size/complexity;
- GitLab namespace/ref clutter;
- risk of accidentally mixing the 19 divergent branches into a bulk prune;
- audit/provenance value;
- rollback/recovery implications;
- later cleanup cost;
- provider-independent continuity value.

### 5.3 Mandatory safety boundary

The 19 divergent refs identified by HK-053 to HK-056 are OUT OF SCOPE for deletion and must be explicitly excluded from any proposed bulk-prune set.

The report must provide a deterministic way to identify the 648 non-unique set separately from the 19 divergent refs.

### 5.4 Required output

Return:

- verified count of non-unique stale branches at execution time;
- verified count/list of divergent branches excluded from bulk-prune consideration;
- option A: prune before seed;
- option B: seed first, prune later;
- evidence-backed recommendation;
- exact Founder/Mission Control decision required.

No branch deletion occurs in this mission.

## 6. GitLab / Infra parallel boundary

The Founder and Infrastructure room may continue:

- GitLab account creation;
- 2FA/recovery setup;
- creation of the three top-level groups;
- creation of the private blank `team-lips/smart-business-continuity` project.

This mission must not interfere with that live session.

The first GitLab repository seed remains held until Mission Control accepts this package and separately authorizes seed continuation.

## 7. Writable paths only

Claude Code may create only:

1. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.1/claude-code/01_preseed_controls_execution_report.md`
2. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.1/claude-code/02_secret_scan_and_fixture_register.md`
3. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.1/claude-code/03_branch_seed_timing_analysis.md`

No pre-existing repository file may be edited.

## 8. Prohibited actions

Do NOT:

- seed GitLab;
- push repository refs to GitLab;
- delete branches;
- delete tags;
- close PRs;
- change GitHub settings;
- change GitLab settings;
- alter secret-scanner configuration;
- add allowlist files;
- modify test fixtures;
- modify source code;
- modify EOS;
- modify governance;
- modify SQL/migrations;
- rewrite Git history;
- rotate credentials;
- reveal secret values;
- self-merge.

## 9. Execution discipline

Before work:

1. fetch canonical `main`;
2. record exact current SHA;
3. verify this authorization is on canonical `main`;
4. verify no newer conflicting authority;
5. create a fresh mission-scoped branch from exact current canonical `main`.

Use read-only Git/GitHub operations except for creating the three authorized report files on the mission branch.

## 10. Quality / evidence expectations

Evidence must be reproducible.

For branch counts, include commands/logic sufficient to reproduce the partition.

For scanner results, record:

- tool and version;
- scope;
- command shape with secret-bearing output omitted;
- ruleset/source;
- count of findings;
- triage classification counts.

Do not paste raw scanner output if it contains secret material.

## 11. Completion

Open one PR containing only the three authorized report files.

Return:

- canonical baseline SHA;
- mission branch;
- final head SHA;
- all three report blob SHAs;
- PR number and URL;
- exact changed-file list;
- local quality/check results;
- GitHub check/workflow state;
- headline result for HK-078;
- headline handling plan for HK-062;
- headline branch timing recommendation for HK-050–052;
- explicit confirmation that no seed, cleanup, provider mutation or branch deletion occurred.

End the main report with:

**PRE-SEED CONTROLS EXECUTION SUBMITTED — NO SEED / CLEANUP / PROVIDER MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION**
