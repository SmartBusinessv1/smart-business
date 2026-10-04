# SMART BUSINESS MISSION CONTROL

# SB-OPS-REPO-HOUSEKEEPING-1.10 — Pre-Seed Provider Verification Gate Authorization

**Date:** 2026-10-04  
**Owner:** Mission Control  
**Parent mission:** SB-OPS-REPO-HOUSEKEEPING-1.0  
**Continuity context:** SB-P-1.12 Track B / GitLab downstream continuity  
**Execution actor:** Infrastructure / Provider Operations or Claude Code with read-only GitLab visibility  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main`  
**Mode:** READ-ONLY PROVIDER VERIFICATION + CURRENT-TARGET RECONCILIATION  
**Seed authority:** WITHHELD

## 1. Purpose

Repository-local housekeeping has reached the point where no known unresolved repository-local item blocks preservation of the current GitHub state in the first GitLab continuity seed.

Before Mission Control and the Founder make the formal **clean enough to preserve** declaration and separately authorize the first seed, the live GitLab provider state must be reverified.

This package therefore:

1. records the current verified GitLab target for continuity use;
2. supersedes the earlier planned pre-subgroup target for current operational use;
3. authorizes only a fresh read-only pre-seed provider verification;
4. produces evidence for a later Mission Control / Founder clean-enough and seed-authority decision.

It does **not** authorize a Git push, import, mirror, branch mutation, GitHub mutation, GitLab mutation, CI enablement, security-policy change or first seed.

## 2. Current GitLab continuity target — authoritative for current operational use

The current verified live target is:

`team-lips/smart-business/smart-business-continuity`

Full intended live structure:

```text
GitLab
├── lighthouse-hq
├── lips-learners
└── team-lips
    └── smart-business
        └── smart-business-continuity
```

For current continuity operations, this target **supersedes** the earlier planned pre-subgroup path:

`team-lips/smart-business-continuity`

Earlier dated instructions and setup records that used the pre-subgroup path remain historical evidence and must not be rewritten.

All future seed instructions, verification reports and continuity commands must use:

`team-lips/smart-business/smart-business-continuity`

exactly.

## 3. Canonical continuity role

The GitLab project remains:

- **Private**;
- downstream / noncanonical;
- continuity-only;
- independent-provider recovery support;
- subordinate to GitHub canonical `SmartBusinessv1/smart-business`.

GitHub remains canonical.

No GitLab state may be treated as canonical merely because it receives a continuity seed.

## 4. Required read-only provider verification

The execution actor must verify the live GitLab target immediately before any later seed authorization.

### PV-1 — exact target identity

Verify:

- namespace: `team-lips`
- subgroup: `smart-business`
- project: `smart-business-continuity`
- full path: `team-lips/smart-business/smart-business-continuity`

### PV-2 — privacy

Verify:

- `team-lips` remains Private;
- `team-lips/smart-business` remains Private;
- the project remains Private.

### PV-3 — blank project state

Verify the project is still blank:

- zero commits;
- no branches;
- no tags;
- no README;
- no license;
- no `.gitignore`;
- no sample code;
- no initialized pipeline content.

If any repository content now exists, STOP and report.

### PV-4 — no import / mirror / GitHub linkage

Verify:

- no GitHub import;
- no repository mirroring;
- mirrored repositories = 0 where visible;
- no automatic pull/push mirror;
- no GitHub OAuth/service connection used as continuity dependency.

### PV-5 — CI / Auto DevOps / automatic pipeline behavior

Verify the first seed would not automatically trigger unintended provider-managed build/deploy behavior.

Check:

- project CI/CD state;
- project-level Auto DevOps / default Auto DevOps setting;
- inherited group/subgroup Auto DevOps behavior where visible;
- whether a push to this blank project could automatically create/run a pipeline.

The repository currently has no `.gitlab-ci.yml`.

If Auto DevOps or equivalent inherited automatic CI behavior would act on a seed push, report the exact setting and STOP before any seed authorization.

Do not disable it in this mission.

### PV-6 — security policies / push protection / secret detection

Verify whether any project/group/subgroup feature could block or automatically act on the first push, including:

- secret push protection;
- push rules;
- scan-execution policy;
- pipeline-execution policy;
- compliance framework;
- security policy inheritance;
- other Ultimate-trial controls.

Record factual state only.

If any control would block or mutate the intended seed behavior, STOP and report.

Do not bypass or disable anything.

### PV-7 — Duo / AI / automated code review

Verify:

- whether an Ultimate trial is active;
- whether GitLab Duo / AI features are enabled or available;
- whether automated code review is enabled;
- whether any AI feature is configured to act automatically on pushed code or newly created branches.

The accepted continuity policy requires seeded code not to be subjected to unexpected automated review or modification.

If any automatic behavior would operate on the seed, STOP and report.

Do not change the setting in this mission.

### PV-8 — authentication independence

Verify continuity access remains independent of GitHub identity:

- GitLab-native account authentication;
- 2FA active;
- no GitHub Service sign-in/recovery dependency;
- recovery remains under Founder/human custody.

Do not expose recovery codes, tokens, passwords or secrets.

### PV-9 — actor authority for later seed

Verify the human who will perform the later seed has sufficient project role, expected to be Owner or Maintainer.

Do not change membership or roles.

### PV-10 — GitHub canonical snapshot

Record, from GitHub:

- exact current `main` SHA;
- count of ordinary `refs/heads/*`;
- count of `refs/tags/*`;
- explicit branch/tag manifest;
- SHA-256 of the sorted manifest.

The manifest must describe the state to be preserved.

Do not include `refs/pull/*`.

D-3 / Option B remains controlling: stale ordinary branches are retained through this first seed.

### PV-11 — seed-mechanism readiness

Confirm the later seed can be performed using explicit ordinary heads and tags only:

- `refs/heads/*`
- `refs/tags/*`

Explicitly reject for the later seed:

- `--mirror`
- `--force`
- `--prune`
- destructive ref deletion
- GitHub `refs/pull/*`

No seed command may be executed in this mission.

## 5. Stop conditions

STOP and return to Mission Control without mutation if any of the following is found:

- target path differs from §2;
- project is not Private;
- project is not blank;
- any commit/branch/tag already exists;
- mirror/import linkage exists;
- unexpected CI / Auto DevOps would execute on push;
- unexpected security policy / push protection would block or alter the seed;
- Duo / automated review would automatically operate on seeded code;
- GitLab authentication independence is not intact;
- human role is insufficient;
- current provider state cannot be verified confidently;
- any other provider drift materially changes the accepted continuity design.

## 6. Clean-enough boundary

This mission may recommend whether the provider verification gate is satisfied.

It may **not** make the Founder / Mission Control clean-enough declaration.

It may **not** authorize the seed.

After the verification report is merged and accepted, Mission Control will decide whether to:

1. declare GitHub **clean enough to preserve**;
2. freeze/capture the seed snapshot;
3. issue a separate explicit first-seed authorization.

## 7. Writable paths only

The execution actor may create only:

1. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.10/provider/01_preseed_provider_verification_report.md`
2. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.10/provider/02_github_seed_ref_manifest.txt`
3. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.10/provider/03_seed_readiness_matrix.md`

No existing repository file may change.

The manifest file must contain only ordinary heads and tags plus their object SHAs, sorted deterministically.

Do not include secrets or provider tokens.

## 8. Prohibited

Do NOT:

- push any Git ref to GitLab;
- initialize the GitLab project;
- create README/license/.gitignore;
- import GitHub;
- configure mirroring;
- change GitLab visibility;
- change GitLab CI/CD;
- disable/enable Auto DevOps;
- change security policies;
- change Duo / AI settings;
- change user/project roles;
- change authentication;
- change GitHub settings;
- delete/prune/rename branches;
- enable `delete_branch_on_merge`;
- execute first seed;
- modify application code/tests/SQL/migrations;
- self-merge.

## 9. Validation

Before completion:

- verify canonical GitHub main at execution time;
- generate the ref manifest from live GitHub refs;
- deterministically sort it;
- compute and record SHA-256;
- verify the manifest excludes `refs/pull/*`;
- verify no existing tracked file changed;
- run Markdown quality in non-modifying mode on both Markdown reports;
- run `git diff --check`;
- confirm diff contains only the three authorized new files.

## 10. Return

Open one PR with only the three authorized evidence files.

Return:

- canonical baseline/main SHA;
- mission branch;
- final head SHA;
- report blob SHAs;
- PR number/URL;
- exact changed paths;
- PV-1 through PV-11 result;
- exact GitLab target;
- privacy state;
- blank-project state;
- mirror/import state;
- CI/Auto DevOps state;
- security-policy/push-protection state;
- Duo / automated-code-review state;
- authentication-independence state;
- human project role;
- ordinary branch count;
- tag count;
- manifest SHA-256;
- whether the provider verification gate is satisfied;
- any stop condition encountered;
- explicit confirmation that no seed or provider mutation occurred.

End the main report exactly:

**PRE-SEED PROVIDER VERIFICATION SUBMITTED — NO PROVIDER / REF / SEED MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION**
