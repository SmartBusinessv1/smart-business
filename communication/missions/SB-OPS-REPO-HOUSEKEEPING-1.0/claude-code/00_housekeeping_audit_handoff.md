# CLAUDE CODE HANDOFF — SB-OPS-REPO-HOUSEKEEPING-1.0

## Repository Housekeeping Audit

**Execution actor:** Claude Code  
**Mode:** exhaustive read-only audit + two report files only  
**Authority:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/mission-control/01_repository_housekeeping_audit_authorization.md`

## Mission

Perform a thorough housekeeping inspection of the entire Smart Business repository and produce evidence-backed candidates for later cleanup, repair, consolidation, archival or gap filling.

This is intentionally being done before the first governed physical/offline repository baseline and before the first GitLab continuity seed.

Do not perform cleanup.

## Founder special concern

Treat this subtree as a mandatory deep-dive:

`docs/engineering/eos/**`

The Founder does not know whether EOS is still used.

Do not assume EOS is obsolete merely because it looks old, and do not assume it is active merely because it exists.

Determine actual present-day utility by references, enforcement, overlap, history and current governance.

## Read first

Read only the minimum authority necessary before scanning:

1. this handoff;
2. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/mission-control/01_repository_housekeeping_audit_authorization.md`;
3. root `README.md`;
4. `AGENTS.md`;
5. current canonical governance/source index referenced by root README;
6. current mission lifecycle / AI operations sources only as necessary to assess conflicts or duplication.

Then inspect the repository broadly.

## Classification

Use exactly:

- KEEP — ACTIVE
- KEEP — HISTORICAL / AUDIT
- REPAIR
- CONSOLIDATE
- ARCHIVE
- REMOVE CANDIDATE
- INVESTIGATE / OWNER DECISION REQUIRED
- GAP TO FILL

A REMOVE CANDIDATE is not deletion authority.

## Required rigor

For each material candidate, gather evidence:

- exact path/ref;
- active inbound references;
- scripts/workflows/hooks that use it;
- overlapping or superseding source;
- whether it has unique historical/audit value;
- risk/dependencies;
- confidence.

For EOS, inventory every active-level file and both `archive/` and `v1.0/` subtrees, plus EOS-related tags/refs.

Audit repo uniformity and gaps as required by the authorization.

Pay particular attention to:
- stale or superseded docs;
- broken links/references;
- duplicate mission/governance artifacts;
- test/sample residue;
- dead scripts;
- outdated configuration;
- generated/junk artifacts;
- package/lock/config inconsistencies;
- stale branches/tags/duplicate PRs;
- missing indexes/readmes where needed;
- naming/taxonomy inconsistencies;
- historical records that should be kept rather than deleted;
- likely secrets without exposing values.

## Writable paths only

You may create only:

- `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/claude-code/01_repository_housekeeping_audit.md`
- `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/claude-code/02_housekeeping_candidate_register.md`

Do not edit any pre-existing file.

## Git workflow

- verify canonical main and authority first;
- branch from exact current canonical main;
- no direct main;
- no force;
- no deletion;
- no rename/move;
- no provider mutation;
- open a PR with only the two report files;
- no self-merge.

## Important parallel-work boundary

The Infrastructure room may simultaneously guide the Founder through GitLab account/group/project creation.

Do not interfere with that session.

Do not seed GitLab.

Do not perform Track A backup creation.

The housekeeping audit is independent and may run in parallel.

## Final return

Return:
- baseline main SHA;
- branch;
- final head SHA;
- report blob SHAs;
- PR number/URL;
- changed paths;
- CI/check state;
- headline findings only;
- explicit confirmation that no cleanup mutation occurred.

End the main report exactly:

**REPOSITORY HOUSEKEEPING AUDIT SUBMITTED — NO CLEANUP MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION**
