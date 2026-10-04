# Repository Health Checklist

**Type:** Lightweight operational checklist for periodic manual use. It is not an automation, schedule or governance authority.
**Established:** 2026-10-04 (SB-OPS-REPO-HOUSEKEEPING-1.7, HK-075)

## How to Use

- Run it when Mission Control asks for a repository health check, for example before a continuity seed or baseline, after a large mission closes, or when drift is suspected.
- Run the checks read-only. Record findings in a mission report; **a finding is not cleanup authority**. Repairs need their own authorized mission.
- Work from a current fetch: `git fetch origin --prune`, then check against `origin/main`.
- Never print secret values. Record only path, category and severity.

## Checklist

| # | Check | How (read-only) | Healthy when |
|---:|---|---|---|
| 1 | **Broken internal links** | Resolve every relative Markdown link against the tracked tree. Archived links are expected to stay broken (Protocol §26) | No new broken links outside `communication/archive/**`; known historical breaks listed, not rewritten |
| 2 | **Mission-index drift** | Compare `communication/missions/*/` directories with the rows in `communication/missions/README.md` | Every mission directory has a row; recorded statuses are quoted, not inferred |
| 3 | **Implementation-index drift** | Compare `docs/implementation/` top-level entries with `docs/implementation/README.md` | Every top-level file and folder is indexed; new records follow the forward naming guidance |
| 4 | **Branch evidence** | Re-run the deterministic partition in `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.1/claude-code/03_branch_seed_timing_analysis.md` §2 | Non-unique and divergent counts recorded with a snapshot hash; divergent refs dispositioned before any prune |
| 5 | **Ignored and untracked local artifacts** | `git status --short --ignored`; `git ls-files -ci --exclude-standard` | No tracked file is matched by an ignore rule; no unexpected untracked file; local secret files stay ignored |
| 6 | **Secret-scan status** | History-wide scan of ordinary branches and tags with full redaction (for example Gitleaks `--redact=100`); compare with the accepted fixture register in `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.1/claude-code/02_secret_scan_and_fixture_register.md` | No credible secret; any new finding triaged; provider secret-scanning status known |
| 7 | **Stale workflow and provider documentation** | Compare `communication/governance/branch-protection-verification.md` and workflow descriptions with live, read-only provider state | Records match live state or explicitly record the difference |
| 8 | **Orphaned tools and workflows** | For each script in `tools/`, `scripts/` and `.github/workflows/`, check inbound references and `tools/README.md` | Each is referenced, documented, or listed as a housekeeping candidate |
| 9 | **Stale lockfiles** | Compare direct dependencies in `package.json` with `package-lock.json` and `bun.lock` | The lockfile used by CI (`npm ci`) is in sync; any secondary lockfile drift is recorded |
| 10 | **Archive-routing consistency** | Check new historical or archived material against `docs/governance/Repository_Archive_Routing_Policy.md` | No new archive folder without authorization; nothing moved out of an archive |
| 11 | **Continuity target and path references** | Compare GitLab and Track A references in mission memory and current SB-P-1.12 records with the **verified live GitLab target `team-lips/smart-business/smart-business-continuity`**, accepted by Mission Control from the Infrastructure live-setup verification. Older records may still show the pre-subgroup path `team-lips/smart-business-continuity`; treat any such reference as stale documentation to reconcile, not as an open provider-target question | Current records name the verified target; remaining pre-subgroup references are listed as documentation-reconciliation items |
| 12 | **Unresolved housekeeping decisions** | Review open items in the housekeeping candidate register (`communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.0/claude-code/02_housekeeping_candidate_register.md`) and `mission-control/mission_memory.md` "Pending Founder Decisions" | Each open item has an owner and status; nothing silently dropped |
| 13 | **Line endings and attributes** | `git ls-files --eol`; check `.gitattributes` coverage of any new binary type | 0 CRLF in the index; new binary types listed in `.gitattributes` |
| 14 | **Mission memory currency** | Compare `mission-control/mission_memory.md` Active Mission and Pending Founder Decisions with recent merged records | Current state reflected; stale entries raised to Mission Control |

## Recording Results

Record in the report of the mission that runs the check:

- the baseline SHA;
- the date;
- each check: pass or finding;
- any new candidate items, using the housekeeping register's classification vocabulary.
