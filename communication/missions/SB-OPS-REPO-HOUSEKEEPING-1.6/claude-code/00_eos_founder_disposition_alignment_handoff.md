# CLAUDE CODE HANDOFF — SB-OPS-REPO-HOUSEKEEPING-1.6

## Founder EOS Disposition + Narrow Alignment

Read and obey:

`communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.6/mission-control/01_founder_eos_disposition_and_alignment_authorization.md`

Founder decisions to implement only after this authorization is canonical:

- D-1 / HK-017: **DISCARD KNOWINGLY**
- D-5 / HK-016: **OPTION B — EOS operational-workflow layer; Source 17 single precedence model**

## Authorized repository changes only

1. `AGENTS.md`
   - remove EOS as an independent authority/precedence tier;
   - point to Source 17 as the single canonical precedence model;
   - preserve the operational role of actor-specific EOS workflows.

2. `docs/engineering/eos/README.md`
   - align authority wording with the Founder decision;
   - EOS is an operational-workflow layer, not a precedence tier;
   - do not execute broader EOS cleanup.

3. Create:
   `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.6/claude-code/01_eos_founder_disposition_alignment_report.md`

## Local HK-017 cleanup

If the untracked local file exists:

`docs/engineering/eos/Engineering_Backup_and_Disaster_Recovery_v1.0.md`

verify it materially matches the draft assessed in PR #746 before deleting it locally.

Do not stage or commit it.

If materially different, STOP and report.

## Do not

- modify Source 17;
- modify actor-specific EOS workflow files;
- execute broader EOS cleanup;
- alter tags;
- delete/prune branches;
- change provider settings;
- start GitLab seed;
- modify app/tests/SQL/migrations;
- self-merge.

Open one PR with only the three authorized repository paths.

End the report exactly:

**EOS FOUNDER DISPOSITION ALIGNMENT SUBMITTED — SOURCE 17 UNCHANGED — NO PROVIDER / SEED MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION**
