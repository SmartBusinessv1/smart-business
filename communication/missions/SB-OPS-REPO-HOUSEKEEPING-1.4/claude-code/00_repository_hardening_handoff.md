# CLAUDE CODE HANDOFF — SB-OPS-REPO-HOUSEKEEPING-1.4

## Repository Hardening

Read and obey:

`communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.4/mission-control/01_repository_hardening_authorization.md`

Then read the accepted audit/register entries for:

- HK-066
- HK-067
- HK-068
- HK-017 boundary only

## Execute only

- add root `.gitattributes`;
- narrow/fix `.gitignore`;
- create the hardening report.

## Critical rules

Do not:

- renormalize the repository;
- add the local-only EOS B&DR draft;
- add local secret-bearing files;
- touch any other repository path;
- delete branches;
- start GitLab seed;
- change provider settings.

If fixing `.gitignore` makes the EOS B&DR draft appear as untracked, leave it untracked and record that fact.

## Writable paths

Only:

- `.gitattributes`
- `.gitignore`
- `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.4/claude-code/01_repository_hardening_report.md`

## Validation

Must include targeted `git check-ignore` evidence, no mass content rewrite, Markdown quality, and `git diff --check`.

Open one PR. Do not self-merge.

End the report exactly:

**REPOSITORY HARDENING SUBMITTED — NO MASS RENORMALIZATION / SECRET ADMISSION / PROVIDER MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION**
