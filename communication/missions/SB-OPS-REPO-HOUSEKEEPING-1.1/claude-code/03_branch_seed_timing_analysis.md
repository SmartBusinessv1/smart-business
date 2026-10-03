# SB-OPS-REPO-HOUSEKEEPING-1.1 — Branch-Seed Timing Analysis (HK-050 to HK-052)

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.1
**Execution actor:** Claude Code
**Canonical baseline:** `main` at `7007edae1e1dea61c47a40aa9c96a37df5a0fdd1`
**Date:** 2026-10-03
**Companion report:** [`01_preseed_controls_execution_report.md`](01_preseed_controls_execution_report.md)

**Question answered (only):** should the non-unique stale branches be governed-pruned **before** the first GitLab seed, or retained through the first seed and pruned later?

**Settled and not reopened:** MC-186 seeds ordinary `refs/heads/*` and `refs/tags/*`, excludes GitHub `refs/pull/*`, and prohibits `--mirror`, `--force` and `--prune`. No branch was deleted in this mission.

## 1. Verified Partition

Snapshot: GitHub refs fetched 2026-10-03 into a transient bare clone; 670 `refs/heads/*`, 1 tag; 733 PRs (720 merged, 13 closed, 0 open).

| Class | Rule | Count |
|---|---|---:|
| A | Branch has a **merged** PR whose `headRefOid` equals the branch tip | 645 |
| B | No PR; tip is an ancestor of `main` | 4 |
| C | No PR; tip not an ancestor, but every file it changes since its merge base is byte-identical in `main` | 1 |
| **Non-unique (A + B + C)** | **Eligible for later governed prune** | **650** |
| D | Everything else (open PR, closed-unmerged PR, merged PR with post-merge commits, or no PR with content absent from `main`) | **19** |
| — | `main` | 1 |
| **Total** | | **670** |

**Drift since the audit.** The accepted audit counted 648 non-unique branches. The two additional class-A branches are the squash-merged head branches of PR #736 and PR #737. With `delete_branch_on_merge=false`, every merged PR adds one, so the set must be defined **by rule plus a dated snapshot hash**, never by a fixed number. The PR opened by this mission will add one more once merged.

**Snapshot hash of the sorted non-unique branch-name list (650 names, LF-terminated):** `dd3b1f6ee4ec8bbfeb8e2952f07a98666cb464ddf8912c871525e686acae63fd`

Class B: `docs/mc25-26-founder-acceleration-addendum`, `docs/phase1-history-final-closeout`, `mission/SB-P-1.11-GC-1-build-lock-authorization`, `noop`.

Class C: `docs/pr690-manual-equivalence`.

### 1.1 Divergent refs: excluded from any bulk prune (HK-053 to HK-056)

| # | Branch | PR evidence | Commits ahead of `main` |
|---:|---|---|---:|
| 1 | `docs/SB-DOC-PHASE1-HISTORY-1.0-25-contract-implementation-baseline` | #535 merged (tip moved after merge); #536 closed | 4 |
| 2 | `docs/SB-DOC-PHASE1-HISTORY-1.0-build-proposal-claude-handoff` | #541 merged (tip moved after merge) | 4 |
| 3 | `docs/sb-p-1-12-successor-mc-handover` | #619 closed | 1 |
| 4 | `mission/SB-DOC-PHASE1-HISTORY-1.0-groundzero-section5-q59-68` | #525 closed | 3 |
| 5 | `mission/SB-DOC-PHASE1-HISTORY-1.0-planning-origin-part20-final` | #516 merged (tip moved after merge) | 10 |
| 6 | `mission/SB-ENG-BUILD-ASSURANCE-1.0-foundation` | No PR | 12 |
| 7 | `mission/SB-GOV-COMMS-1.3-closure-metadata` | #478 closed | 1 |
| 8 | `mission/SB-GOV-COMMS-1.3-memory-note` | #456 closed | 1 |
| 9 | `mission/SB-ORG-LEARNING-1.1-stage1` | #587 closed | 5 |
| 10 | `mission/SB-P-1.11-FWR-5-bkr3-fk-order` | #221 closed | 1 |
| 11 | `mission/SB-P-1.11-GC-1-production-equivalent-runtime-probe` | #195 merged (tip moved after merge); #196 closed | 2 |
| 12 | `mission/SB-P-1.11-GC-1-runtime-compatibility` | #193 closed | 1 |
| 13 | `mission/SB-P-1.11-GC-10-final-b1-infra-confirmation` | #246 merged (tip moved after merge) | 2 |
| 14 | `mission/SB-P-1.11-GC-40-aws-execution-access-design-check` | No PR | 3 |
| 15 | `mission/SB-P-1.11-GC-42B-report` | No PR | 1 |
| 16 | `mission/SB-P-1.12-esc1-founder-record-instruction` | #647 closed | 1 |
| 17 | `mission/SB-P-1.12-founder-decisions-blueprint-reconciliation-auth` | #633 closed | 8 |
| 18 | `mission/SB-P-1.12-founder-gitlab-setup-guide` | #732 closed | 1 |
| 19 | `mission/SB-P-1.12-mission-control-handover` | #723 closed | 1 |

This list is identical to the 19 refs in the accepted audit.

## 2. Deterministic Reproduction Method

Run against a fresh bare clone of the canonical GitHub repository (read-only):

```text
1. git clone --bare https://github.com/SmartBusinessv1/smart-business.git seed.git
2. git -C seed.git for-each-ref --format='%(objectname) %(refname)' 'refs/heads/*' 'refs/tags/*' \
     | LC_ALL=C sort -k2,2 | sha256sum            # ref-manifest hash for the snapshot
3. gh pr list -R SmartBusinessv1/smart-business --state all --limit 2000 \
     --json number,state,headRefName,headRefOid > prs.json
4. For each refs/heads/<b> other than main, with tip T, in this order:
   a. any PR for <b> is OPEN                                  -> D
   b. some MERGED PR for <b> has headRefOid == T              -> A
   c. git merge-base --is-ancestor T main succeeds            -> B
   d. no PR for <b>; for every path changed in
      git diff --name-status --no-renames $(git merge-base T main) T:
        added/modified -> git rev-parse T:<path> == main:<path>
        deleted        -> <path> absent from main             -> C if all hold
   e. otherwise                                               -> D
5. Non-unique set = A + B + C; sort names with LC_ALL=C; join with LF; sha256sum.
```

Any later prune must re-run this method at prune time, take its list (not this snapshot) as the candidate set, confirm the D list is excluded, and record both hashes.

## 3. Continuity Weight of the Non-Unique Set

| Measure | All heads + tags (Option B seed) | `main` + tags + 19 divergent (Option A seed) | Difference |
|---|---:|---:|---:|
| Seeded refs (heads + tags) | 671 | 21 | 650 |
| Reachable commits | 2,776 | 1,206 | **1,570** |
| Reachable objects | 14,979 | 9,023 | 5,956 |
| Packed size on disk | 13.6 MB | 11.7 MB | 1.9 MB |
| Inflated object size | 76.1 MB | 58.1 MB | 18.0 MB |

The 1,570 commits (57% of all reachable commits) are the **pre-squash working history** of merged PRs. The squashed result is on `main`; the individual commits exist on GitHub only as branch tips and in `refs/pull/<n>/head`. `refs/pull/*` is GitHub-specific and is excluded from the seed by MC-186. If the branches are deleted first, those commits never reach GitLab.

## 4. Option Comparison

| Criterion | Option A — prune before seed | Option B — seed first, prune later |
|---|---|---|
| Continuity usefulness | GitLab holds only final squashed history plus the 19 divergent refs | GitLab holds the complete ordinary-ref history, including 1,570 pre-squash commits |
| Human-readable branch names | Lost in both providers at once | Preserved in GitLab; can be pruned on GitHub later without losing them |
| `refs/pull/*` non-transferability | Pre-squash commits survive only in GitHub `refs/pull/*`, which is GitHub-dependent | Not relevant: the commits travel under their branch names |
| Reconstructing historical context after deletion | Depends on GitHub remaining available and on PR refs never being garbage-collected | Possible from GitLab alone |
| Audit / provenance value | Reduced: reviewers lose commit-by-commit evidence outside GitHub | Retained |
| Seed manifest size and complexity | 21 lines (smaller) | 671 lines plus the peeled tag. Already handled: the SB-P-1.12 pre-seed manifest captured 661 heads with the same deterministic method |
| GitLab namespace / ref clutter | Clean | 650 stale branches in GitLab until a later decision; cosmetic, and does not affect `main` |
| Risk of sweeping in the 19 divergent refs | **Higher**: an irreversible GitHub bulk delete sits on the seed's critical path, under time pressure | **Lower**: no deletion is needed to seed; a later prune runs as its own reviewed mission with the reproducible D exclusion list |
| Rollback / recovery | A mistaken delete is recoverable only from GitHub (`refs/pull/*` or the PR "restore branch" control) or a local clone | A mistaken later GitHub delete is recoverable from the GitLab copy: a provider-independent safety net |
| Effect on canonical state at seed time | A canonical GitHub mutation must happen first, so the manifest must be recaptured | Seed reflects current canonical state unchanged |
| Later cleanup cost | None after the seed | One governed prune on GitHub, plus an optional separate decision on whether GitLab keeps the names as archive. MC-186 forbids `--prune` on the seed, so GitLab retains them by default |
| Provider-independent continuity value | Lower: about 57% of reachable commits depend on GitHub alone | Higher: the whole ordinary-ref history is independent of GitHub |
| Seed size | 11.7 MB packed | 13.6 MB packed (+1.9 MB); negligible |

## 5. Recommendation

**Option B — retain the non-unique branches through the first GitLab seed; prune later under a separate governed mission.**

Evidence:

1. Option A permanently excludes 1,570 commits (57% of reachable history) from the provider-independent copy, which defeats the purpose of Track B.
2. Option A puts an irreversible GitHub bulk delete on the seed's critical path; Option B needs no deletion to seed.
3. Option B turns GitLab into the recovery source for any later GitHub prune error, including protection against accidentally deleting one of the 19 divergent refs.
4. The costs of Option B are small and cosmetic: +1.9 MB packed and 650 stale names in a private, non-canonical repository.

Suggested shape of the later prune mission (for Mission Control, not authorized here):

- re-run Section 2 at prune time;
- verify the GitLab seed manifest first;
- prune only the A + B + C set on GitHub, excluding D;
- decide separately whether GitLab keeps those names as an archive;
- pair with HK-057 (`delete_branch_on_merge`) so the set stops growing.

## 6. Decision Required

**D-3 (Founder / Mission Control):** approve **Option B**: retain the non-unique stale branches (650 at the 2026-10-03 snapshot, defined by the Section 2 rule) through the first GitLab seed, and defer any governed prune to a separate later mission that re-derives the set at execution time and excludes the 19 divergent refs.

No branch, tag or PR was deleted, closed or modified in this analysis.
