# SMART BUSINESS MISSION CONTROL — MC-186

# SB-P-1.12 — Independent GitLab Continuity Repository Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-02  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE OF PR #728 TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Parent disposition:** MC-185 dependency-based parallel continuity model  
**Founder authority:** FD-C2 + Founder parallelization direction in `communication/live/report1.46.md`  
**Work package:** `SB-P-1.12-WP-GITLAB-SECONDARY-CONTINUITY-1`  
**Implementation Authorization:** WITHHELD for Smart Business product implementation

## 1. Authorized objective

Create and verify one private GitLab.com repository as Team LIPS's independent secondary Git continuity host.

This is Track B only.

GitHub remains canonical.

The GitLab repository is downstream/non-canonical and must never be presented as co-equal canonical history while GitHub remains canonical.

## 2. Pre-execution verification

After PR #728 is human-merged:

1. verify the exact current canonical `main` SHA;
2. verify MC-185, MC-186 and `instruction1.47.md` are canonical;
3. verify no newer authority supersedes or conflicts with this package;
4. bind all seeding evidence to that exact canonical SHA.

If any precondition fails, STOP.

## 3. Authentication and recovery requirements

The GitLab continuity identity must:

- not authenticate through the affected GitHub identity;
- use provider-native or otherwise GitHub-independent authentication;
- have MFA enabled where supported;
- have a human-controlled recovery path independent of the affected GitHub identity.

No password, token, MFA seed, recovery code or private recovery material may be written to Git or repository communication.

If human sign-in, MFA enrollment, recovery-code custody or credential entry is required, stop at the human-interaction boundary and report:

`FOUNDER GITLAB AUTHENTICATION ACTION REQUIRED`

The AI actor must not invent, receive, echo or persist a human secret.

## 4. Repository requirements

The secondary repository must be:

- private;
- clearly identifiable as continuity/downstream, not canonical;
- created on GitLab.com;
- seeded only after exact canonical SHA verification;
- synchronized with explicit branch/tag refspecs only.

Do not use:

- `--mirror` push;
- `--force`;
- `--prune`;
- destructive ref deletion;
- automatic bidirectional synchronization.

A rejected non-fast-forward update, unexpected secondary-ahead state or history mismatch is an incident. Stop rather than override it.

## 5. Initial seed and verification

After authorized human authentication is available:

1. create the private downstream GitLab repository if it does not already exist;
2. configure the secondary remote without exposing credentials;
3. push ordinary `refs/heads/*` and `refs/tags/*` explicitly;
4. verify the GitLab `main` ref equals the exact governed canonical GitHub `main` SHA used for the seed;
5. compare deterministic branch/tag ref manifests between the governed source and GitLab;
6. record only non-sensitive repository/ref/hash evidence.

Do not push GitHub-only pull-request refs.

## 6. Writable repository outputs

The execution actor may write only:

- `communication/missions/SB-P-1.12/claude-code/42-gitlab-secondary-continuity-implementation-report.md`
- `communication/live/report1.47.md`

Do not modify mission indexes, MC records, code, schema, migrations, source contracts, Blueprint, FCTM or EIS.

## 7. Explicitly not authorized

This package does not authorize:

- declaring Track A complete;
- creating plaintext offline backups;
- bypassing the hardware-encrypted-device requirement;
- restore drill;
- GitHub canonical-host promotion or migration;
- GitHub repository transfer;
- automated/scheduled GitLab synchronization;
- GitLab CI;
- WSL2/LGA work;
- Supabase work;
- 1Password activation;
- FD-C7 evidence work;
- application implementation;
- SQL/migration authoring or execution;
- test fixtures;
- runtime activation;
- production mutation.

## 8. Required report

`report1.47.md` must state:

- exact canonical GitHub baseline SHA;
- GitLab repository visibility;
- whether authentication/recovery is GitHub-independent;
- whether MFA/recovery setup is complete or a human action remains;
- whether the repository was created;
- whether the initial seed completed;
- GitLab `main` SHA after seed;
- branch/tag manifest comparison result;
- any non-fast-forward, secondary-ahead or mismatch incident;
- confirmation that no force/prune/mirror push occurred;
- branch/head/blob/PR evidence for the report publication;
- exact GitHub Actions/check state on the report PR head;
- preserved holds.

If human authentication prevents completion, return a PARTIAL/BLOCKED report rather than fabricating completion.

## 9. Stop conditions

STOP if:

- canonical SHA cannot be established;
- newer authority conflicts;
- the GitLab identity depends on affected GitHub OAuth;
- the repository cannot be made private;
- a secret would have to enter Git/repository communication;
- a force/prune/mirror push would be required;
- secondary history is ahead or non-fast-forward;
- seeded `main` differs from the governed GitHub canonical SHA;
- execution would exceed authorized surfaces.

**GITLAB SECONDARY CONTINUITY AUTHORIZATION PREPARED — STOP FOR HUMAN MERGE AND POST-MERGE VERIFICATION**
