# CLAUDE CODE HANDOFF — SB-OPS-REPO-HOUSEKEEPING-1.2

## Repository Record Reconciliation

Read and obey:

`communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.2/mission-control/01_record_reconciliation_authorization.md`

Then read the accepted housekeeping audit and register:

- `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/claude-code/01_repository_housekeeping_audit.md`
- `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/claude-code/02_housekeeping_candidate_register.md`

## Execute only these candidates

- HK-027
- HK-036
- HK-032
- HK-031 / HK-070
- HK-030
- HK-021
- HK-010

## Important

This is a factual record-reconciliation package, not an EOS redesign.

Do not resolve:
- EOS authority order;
- dormant EOS status;
- branch cleanup;
- GitLab seed;
- provider settings;
- `.gitignore`;
- `.gitattributes`;
- divergent branches.

## Writable paths

Only:

- `communication/governance/branch-protection-verification.md`
- `mission-control/mission_memory.md`
- `communication/missions/SB-P-1.12/README.md`
- `README.md`
- `merge/README.md`
- `tools/README.md`
- `docs/engineering/eos/Engineering_Tooling_Register.md`
- `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.2/claude-code/01_record_reconciliation_report.md`

No other file may change.

## Workflow

1. fetch and verify latest canonical main;
2. verify this authorization is merged and no newer authority conflicts;
3. create a fresh mission branch;
4. inspect each target before editing;
5. make the narrowest factual correction;
6. validate touched links;
7. run Markdown quality in non-modifying mode;
8. run `git diff --check`;
9. confirm diff contains only authorized paths;
10. commit, push, open one PR;
11. do not self-merge.

Return the required baseline/head/blob/PR/check details.

End the report exactly:

**RECORD RECONCILIATION SUBMITTED — NO BRANCH / PROVIDER / APPLICATION MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION**
