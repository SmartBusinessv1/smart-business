# SB-OPS-REPO-HOUSEKEEPING-1.1 — Pre-Seed Controls Execution Report

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.1
**Parent:** SB-OPS-REPO-HOUSEKEEPING-1.0 (accepted audit, PR #736)
**Execution actor:** Claude Code
**Authority:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.1/mission-control/01_preseed_controls_execution_authorization.md`
**Handoff:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.1/claude-code/00_preseed_controls_handoff.md`
**Canonical baseline:** `main` at `7007edae1e1dea61c47a40aa9c96a37df5a0fdd1`
**Date:** 2026-10-03
**Mode:** Evidence and analysis only

| Companion | Content |
|---|---|
| [`02_secret_scan_and_fixture_register.md`](02_secret_scan_and_fixture_register.md) | HK-078 scan record, 38-finding register, HK-062 fixture groups and handling plan |
| [`03_branch_seed_timing_analysis.md`](03_branch_seed_timing_analysis.md) | HK-050 to HK-052 partition, reproduction method, option comparison |

## 1. Authority and Baseline Verification

| Check | Result |
|---|---|
| `git fetch origin --prune` | Completed |
| Canonical `main` | `7007edae1e1dea61c47a40aa9c96a37df5a0fdd1`, equal to the authorized baseline (merge of PR #737) |
| Authorization on `main` | Present and read in full |
| Handoff on `main` | Present and read in full |
| Accepted audit inputs | `SB-OPS-REPO-HOUSEKEEPING-1.0/claude-code/01_…audit.md` and `02_…register.md` on `main` (PR #736) |
| MC-186 constraints | Confirmed from `communication/live/instruction1.47.md`: seed ordinary branches and tags only; no `--mirror`, `--force` or `--prune`. Seed procedure (bare clone, then explicit `refs/heads/*` and `refs/tags/*` push) from `communication/missions/SB-P-1.12/claude-code/42-gitlab-secondary-continuity-implementation-report.md` |
| Newer or conflicting authority | None; no open PRs at start |
| Mission branch | `mission/SB-OPS-REPO-HOUSEKEEPING-1.1-preseed-controls`, created from the exact baseline SHA |

## 2. HK-078 — History-Wide Secret Scan

**Result: no credible secret in any history that the first GitLab seed would replicate.**

| Item | Value |
|---|---|
| Tool | Gitleaks 8.30.1, default ruleset, `--redact=100` |
| Scope | Transient bare clone of GitHub: 670 heads, 1 tag, 0 PR refs (the MC-186 seed-source shape); 2,776 reachable commits |
| Supplementary census | All 3,461 reachable blobs: JWT role decoding, Supabase secret/publishable prefixes, private-key bodies, GitHub, Slack and `sk-` tokens, historical `.env*` variable classes |
| Local unreachable objects | 37 workstation-only blobs: 0 findings (not canonical) |
| Findings | 38: 0 credible secret, 12 test fixture, 22 historical/public identifier, 4 false positive, 0 unresolved |
| Current tree / history only | 18 / 20 |

Key facts:

- **Zero `service_role` JWTs and zero `sb_secret_` keys** exist anywhere in reachable history.
- The `.env` and `.env.test` files committed before SB-P-1.11-GC-30 (PR #288) contained only anon/publishable keys, URLs and project identifiers.
- The only private-key body is the documented throwaway test key.

No rotation or invalidation is indicated. Nothing requires stopping replication.

One owner-confirmation item, which does not change any classification: the anon JWTs in history come from two Supabase projects, neither of which is the current test project. Production attribution could not be checked locally.

## 3. HK-062 — Scanner / Fixture Handling

**Result: no allowlist or exception is needed for the first GitLab seed.**

The scanner hits fall into eight groups (FX-01 to FX-08):

- three active test-fixture groups (throwaway key; OLE screener and harvester synthetic values);
- archived/historical publishable anon keys;
- identifier UUIDs;
- one prose false positive.

GitLab secret push protection is Ultimate-tier, opt-in per project, does not scan the initial push that creates a repository, and is skipped for pushes over 3,150 paths or 350,000 lines. Pipeline Secret Detection needs a `.gitlab-ci.yml` (absent) and does not block pushes.

Proposed handling (design only; nothing created):

1. Accept the register as the documented disposition.
2. Seed into a **blank** project with push protection at its default.
3. If a block occurs anyway, stop: no skip options without Mission Control authorization.
4. Before enabling GitHub push protection (HK-060) or any CI secret gate, add a fingerprint-only `.gitleaksignore` for the 38 accepted findings under a later mission.
5. Optionally redesign fixtures FX-01 to FX-03 to construct values at runtime.
6. No history rewrite.

## 4. HK-050 to HK-052 — Branch-Seed Timing

**Recommendation: Option B — retain the non-unique branches through the first seed; prune later under a separate governed mission.**

| Item | Value |
|---|---|
| Verified non-unique stale branches | **650**: 645 at their merged PR head, 4 ancestors of `main`, 1 with all content identical in `main` |
| Drift from audit (648) | +2: head branches of PR #736 and PR #737; the set grows with every merge while `delete_branch_on_merge=false` |
| Divergent refs excluded | **19**, identical to HK-053 to HK-056 (listed in report 03, Section 1.1) |
| Snapshot hash (sorted non-unique list) | `dd3b1f6ee4ec8bbfeb8e2952f07a98666cb464ddf8912c871525e686acae63fd` |
| Weight of non-unique set | 1,570 commits (57% of reachable commits) and 5,956 objects reachable only through them; 1.9 MB packed |

Option A would permanently keep those 1,570 pre-squash commits out of GitLab, because they otherwise survive only in GitHub's non-transferable `refs/pull/*`. It would also put an irreversible GitHub bulk delete on the seed's critical path. Option B costs 1.9 MB and 650 cosmetic ref names in a private, non-canonical repository, and it makes GitLab the recovery source for any later prune error.

## 5. Blockers

None. No credible secret was found, no scanner exception is required for the first seed, and the timing question has an evidence-backed recommendation.

Conditions the seed itself must still observe (already in existing guidance, restated):

- The GitLab project is blank at seed time.
- Push protection is not enabled before the seed.
- The manifest is captured at seed time. The ref set has changed since earlier evidence: 670 heads now, versus 661 in the SB-P-1.12 pre-seed manifest.

## 6. Decisions Required

| # | Decision | Owner |
|---|---|---|
| P-1 | Accept the HK-078 result (0 credible secrets; 38 findings dispositioned) and the HK-062 handling plan (no seed-time allowlist; stop-on-block rule; fingerprint allowlist and fixture redesign deferred to a later mission) | Mission Control |
| P-2 | D-3: approve **Option B**. Retain the non-unique stale branches through the first GitLab seed; defer the governed prune to a later mission that re-derives the set by the documented rule and excludes the 19 divergent refs | Founder / Mission Control |
| P-3 | Owner confirmation of Supabase project attribution for the historical anon keys (FX-04, FX-05); classification and rotation answer unaffected | Founder / owner |
| P-4 | Separately authorize seed continuation, which this package does not authorize | Mission Control |

## 7. Confirmation of No Mutation

- **No GitLab seed**; no ref was pushed to GitLab; no GitLab setting was touched.
- **No branch, tag or PR** was deleted, closed or modified.
- **No GitHub setting** was changed; GitHub access was read-only (`gh pr list`, `gh api` GET, an anonymous clone).
- No fixture, scanner configuration, allowlist, source code, EOS, governance, SQL or migration file was changed. No history was rewritten and no credential was rotated.
- No secret value was printed or recorded. The Gitleaks report was generated with `--redact=100` in the session scratchpad, outside the repository.
- The transient bare clone and scan artifacts reside only in the session scratchpad, outside the repository; they are not continuity artifacts.
- The only repository changes are the three authorized files under `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.1/claude-code/`.

PRE-SEED CONTROLS EXECUTION SUBMITTED — NO SEED / CLEANUP / PROVIDER MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION
