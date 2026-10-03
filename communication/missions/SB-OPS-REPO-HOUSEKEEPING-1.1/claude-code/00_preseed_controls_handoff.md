# CLAUDE CODE HANDOFF — SB-OPS-REPO-HOUSEKEEPING-1.1

## First Pre-Seed Controls Execution Package

**Parent:** SB-OPS-REPO-HOUSEKEEPING-1.0  
**Execution actor:** Claude Code  
**Mode:** evidence / analysis only  
**Authority:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.1/mission-control/01_preseed_controls_execution_authorization.md`

## Read first

1. this handoff;
2. the authorization above;
3. canonical housekeeping audit:
   - `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/claude-code/01_repository_housekeeping_audit.md`
   - `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/claude-code/02_housekeeping_candidate_register.md`
4. MC-186 / current Track B authority only as needed to confirm ref-seeding constraints.

Do not broaden into general housekeeping.

## Execute exactly three workstreams

### A — HK-078 history-wide secret scan

Run a history-wide secret scan.

Do not expose secret values.

Triage all findings into:
- credible secret;
- legitimate test fixture;
- historical/public identifier;
- false positive;
- unresolved.

If a credible live credential is found, flag it clearly and do not replicate it.

### B — HK-062 scanner / fixture handling

Assess the known scanner-triggering fixtures and any newly found scanner hits.

Produce the narrowest proposed handling strategy for the first GitLab seed.

Do not modify fixtures, scanner configs or provider settings.

### C — HK-050 to HK-052 branch-seed timing

Re-verify the non-unique stale branch set and the divergent exclusion set.

Compare only:

- prune non-unique stale branches before first GitLab seed;
- retain them through first seed and prune later.

Ordinary branch/tag seeding is already required by MC-186 and is not up for reconsideration.

Do not delete branches.

## Writable paths only

Create only:

- `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.1/claude-code/01_preseed_controls_execution_report.md`
- `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.1/claude-code/02_secret_scan_and_fixture_register.md`
- `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.1/claude-code/03_branch_seed_timing_analysis.md`

No existing file may change.

## Critical safety

- no GitLab seed;
- no GitHub/GitLab settings mutation;
- no branch/tag deletion;
- no fixture edits;
- no allowlist edits;
- no history rewrite;
- no secret value in reports;
- no self-merge.

## Return

Open one PR and return:

- baseline SHA;
- branch;
- final head;
- three blob SHAs;
- PR;
- changed paths;
- quality/check state;
- secret-scan headline;
- fixture-handling headline;
- branch-timing recommendation;
- confirmation of no seed/cleanup/provider/ref mutation.

End the main report exactly:

**PRE-SEED CONTROLS EXECUTION SUBMITTED — NO SEED / CLEANUP / PROVIDER MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION**
