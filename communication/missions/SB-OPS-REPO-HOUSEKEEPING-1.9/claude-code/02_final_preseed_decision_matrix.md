# SB-OPS-REPO-HOUSEKEEPING-1.9 — Final Pre-Seed Decision Matrix

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.9
**Execution actor:** Claude Code
**Canonical baseline:** `main` at `7d719d3501d530df2c5e3464b8adf79da0fdcec8`
**Date:** 2026-10-04
**Evidence:** [`01_final_preseed_residual_review.md`](01_final_preseed_residual_review.md)

Classifications are recommendations only. No decision is recorded here as made, except canonical decisions already merged (D-3 / Option B; HK-078 and HK-062 acceptance in PR #738).

| HK | Subject | Classification | Dependency |
|---|---|---|---|
| HK-050 | Stale branches at their merged-PR head (645 at the 1.1 snapshot; set re-derived at prune) | **DEFER UNTIL BEFORE/AT BRANCH PRUNE** | Canonical D-3 / Option B (PR #738): retained through the first seed; later governed prune re-derives the set (1.1 report 03 §2 method) |
| HK-051 | Stale branches that are ancestors of `main` (incl. `noop`) | **DEFER UNTIL BEFORE/AT BRANCH PRUNE** | Same as HK-050 |
| HK-052 | `docs/pr690-manual-equivalence` (content identical in `main`) | **DEFER UNTIL BEFORE/AT BRANCH PRUNE** | Same as HK-050 |
| HK-057 | `delete_branch_on_merge=false` | **DEFER UNTIL AFTER FIRST SEED** | Sequence: seed → enable setting (Founder/MC authority) → later governed prune. Enabling first would let PRs merged before the seed lose their head branches before GitLab captures them |
| HK-058 | Branch naming | **ACCEPT AS-IS / NO ACTION** | `AGENTS.md` convention sufficient; no renames (renames would alter preserved ref names and PR heads). Optional reserved-suffix note may join HK-072 |
| HK-060 | GitHub secret scanning, push protection, Dependabot alerts and security updates (all disabled) | **FOUNDER DECISION REQUIRED** | Provider-setting mutation. Not a seed blocker (seed targets GitLab). Recommended after the seed: alerts → 1.1 H-4 fingerprint allowlist → push protection → Dependabot alerts → security updates (with HK-074) |
| HK-061 | Supabase anon / publishable keys in archives and history | **ACCEPT AS-IS / NO ACTION** | `role: anon` / `sb_publishable_` only; 0 service-role / `sb_secret_`; no rotation; redaction would need a prohibited history rewrite |
| HK-062 | Scanner-triggering test fixtures | **ACCEPT AS-IS / NO ACTION** | Accepted fixture register (1.1). GitLab mechanics covered by provider checks P-2, P-5, P-6 in report 01 §11; stop-on-block rule H-3 stands |
| HK-063 | AWS ARNs, account IDs, bucket, region (36 files; 3 literals in `.env.example`) | **ACCEPT AS-IS / NO ACTION** | Identifiers, not credentials; exposure unchanged by seeding; placeholdering `.env.example` gives marginal value (history retains values) |
| HK-072 | Stale-branch lifecycle policy | **DEFER UNTIL BEFORE/AT BRANCH PRUNE** | Adopt with the prune mission; proposed rule below |
| HK-074 | Dependency-update policy | **DEFER UNTIL AFTER FIRST SEED** | Depends on the HK-060 Founder decision (Dependabot enablement); proposed minimum below |
| HK-078 | History-wide secret scan | **ACCEPT AS-IS / NO ACTION** | Complete: 1.1 result controlling (0 credible secrets); re-run at a later health check (checklist item 6), not before the seed |
| — | Stale GitLab target path in current records | **RECOMMENDED BEFORE FIRST SEED BUT NOT BLOCKING** | Record the verified target `team-lips/smart-business/smart-business-continuity` in a current canonical record and in the seed instruction; supersede old references by note, not rewrite (report 03) |

**MUST RESOLVE BEFORE FIRST SEED: none.**
**FOUNDER DECISION REQUIRED: HK-060** (and authority for HK-057 when executed after the seed).

## Proposed HK-072 Stale-Branch Lifecycle Rule (for later adoption; not implemented)

1. **Ordinary mission branches after human merge:** deleted automatically by `delete_branch_on_merge` once enabled (HK-057, after the first seed). The merged content lives in `main`; pre-squash commits live in GitHub `refs/pull/*` and in the GitLab continuity copy taken before deletion.
2. **Active or unmerged branches** (open PR, or no PR but in active use): never deleted by lifecycle housekeeping.
3. **Divergent branches** (content not in `main`): excluded from any bulk prune until individually dispositioned (as in PR #742); deletion only by named, authorized decision.
4. **Investigation, evidence or no-PR refs:** treated as divergent unless proven content-identical to `main`. Before deletion, confirm a continuity copy exists (GitLab seed or Track A bundle).
5. **Periodic re-derivation:** each prune mission re-runs the deterministic partition (1.1 report 03 §2) at execution time and records the snapshot hash. Hard-coded deletion lists are never reused.
6. **Order:** continuity copy first, prune second.
7. **Optional:** reserve distinct branch-name suffixes for Mission Control authorization branches versus actor execution branches, to avoid slug collisions.

## Proposed HK-074 Minimum Dependency-Update Policy (for later adoption; not implemented)

| Element | Proposal |
|---|---|
| Dependabot alerts | Enable first (after HK-060 Founder decision). Mission Control triages weekly or at each repository health check |
| Security updates | Enable after alerts are triaged once. Dependabot PRs go through the normal PR path (no auto-merge); review by the engineering actor assigned by Mission Control; CI (`npm ci` + Build Assurance) when Actions dispatch is available, otherwise recorded local verification |
| Ordinary version updates | Not automated initially. Batch them into an occasional dependency-refresh mission, or a monthly `npm` grouped update if later desired |
| Ecosystem scope | **npm only** (`package.json` / `package-lock.json`, the CI lockfile) |
| Secondary Bun state | Excluded from Dependabot. `bun.lock` remains under the HK-026 provider-confirmation path (refresh after Lovable-connection confirmation, per PR #752) |
| Supply-chain guard | Keep the existing `bunfig.toml` 24-hour `minimumReleaseAge` intent; consider an equivalent review delay for npm updates |
