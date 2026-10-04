# SB-OPS-REPO-HOUSEKEEPING-1.9 — Final Pre-Seed Residual Review

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.9
**Parent:** SB-OPS-REPO-HOUSEKEEPING-1.0
**Execution actor:** Claude Code
**Authority:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.9/mission-control/01_final_preseed_residual_review_authorization.md`
**Handoff:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.9/claude-code/00_final_preseed_residual_review_handoff.md`
**Date:** 2026-10-04
**Mode:** Evidence and disposition support only. No provider, ref, workflow or seed mutation.
**Companions:** [`02_final_preseed_decision_matrix.md`](02_final_preseed_decision_matrix.md), [`03_stale_gitlab_path_reconciliation_list.md`](03_stale_gitlab_path_reconciliation_list.md)

## 1. Global Answer

> Based on the accepted housekeeping evidence from SB-OPS-REPO-HOUSEKEEPING-1.0 through 1.8 and this residual review, is there any known unresolved repository-local housekeeping item that prevents GitHub from being declared "clean enough to preserve" for the first GitLab seed?

**No.** No known repository-local housekeeping item prevents that declaration.

| Category | Finding |
|---|---|
| **Repository-local preservation blockers** | **None.** HK-078 found no credible secret; D-3 settled branch timing; divergent refs reviewed (no recovery needed, PR #742); EOS authority aligned (PR #748); records reconciled (PRs #740, #750); hardening done (PR #744) |
| **Provider-side pre-seed checks** | **Required immediately before the seed** (Section 11). They concern GitLab target state, CI/Auto DevOps, AI and security features, and authentication. They are not repository content |
| **Post-seed cleanup** | HK-057, HK-060, HK-074, HK-020 / 025 / 024 / 073 / 026 (from 1.8), EOS hygiene, and later branch pruning (HK-050 to 052, HK-072) |
| **Founder decisions** | HK-060: provider security-setting enablement (timing: after the seed). HK-057: enable `delete_branch_on_merge` (after the seed). Neither blocks the seed |
| **Recommended, not blocking** | Record the verified GitLab target in a current canonical continuity record before or with the seed instruction (Section 10, report 03) |

The Founder / Mission Control "clean enough to preserve" declaration remains theirs.

## 2. Baseline

| Check | Result |
|---|---|
| Canonical `main` | `7d719d3501d530df2c5e3464b8adf79da0fdcec8`, equal to the authorized baseline (merge of PR #753); unchanged at completion |
| Authorization and handoff | Present on `main`; read in full |
| Prior records relied on | 1.0 candidate register; 1.1 secret, fixture and branch evidence; 1.3 divergent review; 1.7 health checklist; 1.8 tooling dossier; `mission-control/mission_memory.md` (D-3 recorded as decided) |
| Newer or conflicting authority | None; 0 open PRs |
| Mission branch | `mission/SB-OPS-REPO-HOUSEKEEPING-1.9-claude-code-final-residual` (Mission Control's authorization branch is `…-1.9-final-preseed-residual`) |
| Live provider state (read-only `gh api`, 2026-10-04) | Visibility `public`; `delete_branch_on_merge: false`; secret scanning, non-provider patterns, push protection and validity checks all `disabled`; Dependabot security updates `disabled`; vulnerability alerts endpoint `404` (alerts disabled); automated security fixes `enabled: false`; no `.github/dependabot.yml`; 686 remote heads, 1 tag |

## 3. Preserved Canonical Decisions (not reopened)

- **D-3 / Option B (HK-050 / 051 / 052):** non-unique stale ordinary branches are retained through the first seed. Pruning comes later under a separate mission that re-derives the set at execution time and excludes divergent refs unless separately dispositioned. Remote heads have grown to 686 (from 670 at the 1.1 snapshot) through merged-PR head branches, consistent with `delete_branch_on_merge=false`. That growth is expected and handled by re-derivation.
- **HK-078:** the 1.1 history-wide scan is controlling. No credible secret; 38 findings dispositioned; no unresolved blocker. There is no new evidence to reopen it.
- **HK-062:** the 1.1 fixture register is controlling. Section 9 covers only whether GitLab mechanics could block the first push.

## 4. HK-057 — `delete_branch_on_merge`

| Aspect | Assessment |
|---|---|
| Current state | `false` (live) |
| Effect of enabling | GitHub deletes the head branch when a PR is merged **after** enablement. It does not delete existing branches |
| Interaction with Option B | Enabling **before** the seed would not touch the 654+ existing stale branches. But head branches of any PRs merged between enablement and the seed would be deleted before they reach GitLab, so their pre-squash commits would exist only in GitHub `refs/pull/*`. That is a small deviation from Option B's preservation intent |
| Preservation / first-seed executability | Not affected by the current setting |
| Type | Provider-setting mutation (repository setting) |
| Recommended sequence | **(1)** first seed with the current branch set; **(2)** enable `delete_branch_on_merge`; **(3)** later governed stale-branch prune (re-derived set, divergent refs excluded) |
| Authority | Explicit Founder / Mission Control authorization (provider setting) |
| Classification | **DEFER UNTIL AFTER FIRST SEED** |

## 5. HK-058 — Branch Naming

- `AGENTS.md` (lines 176, 180, 190) defines the standard `mission/[MISSION-ID]-[SHORT-SLUG]` convention, or a specifically locked name, and lets Mission Control authorize it generically. That is sufficient for forward work. A second policy document would duplicate authority that `AGENTS.md` already holds.
- Existing prefix variety (`docs/`, `report/`, `security/`, `review/`, `fix/` and others) is historical. **No branch needs renaming before the seed.** Renaming would alter the ref names being preserved and break PR head references.
- One practical lesson from this series: Mission Control's authorization branches and Claude Code's execution branches have repeatedly collided on the same slug (handled each time by choosing a distinct name). A forward note could reserve suffixes, for example `-auth` for Mission Control and `-exec` for actors. That is optional and can be added to the HK-072 rule; it is not required.
- **Classification: ACCEPT AS-IS / NO ACTION.**

## 6. HK-060 — GitHub Security Settings

| Feature | Current | Security value | Affects preservation integrity? | Affects first-seed executability? | Timing | Founder authority? |
|---|---|---|---|---|---|---|
| Secret scanning (alerts) | Disabled | High for a public repository: server-side detection of future leaks. On enablement it will scan history and raise alerts for the known 1.1 fixtures and identifiers (expected; triage with the accepted register) | No | No: the seed pushes to GitLab, not GitHub | After first seed | Yes (provider setting) |
| Push protection | Disabled | High: blocks new secret pushes to GitHub. Could block legitimate future commits that touch fixture files until the fingerprint allowlist (1.1 H-4) exists | No | No | After first seed, after H-4 allowlist | Yes |
| Dependabot alerts | Disabled (vulnerability-alerts `404`) | Medium to high: visibility of vulnerable npm dependencies | No | No | After first seed | Yes |
| Dependabot security updates | Disabled | Medium: automated fix PRs; adds PR volume and needs review ownership (HK-074) | No | No | After alerts and HK-074 policy | Yes |

- **Distinctions:**
  - this is **security hardening**, not a first-seed blocker;
  - the **public-repository risk** is existing and unchanged by seeding (GitHub is already public; GitLab is private);
  - **every change is a provider-setting mutation** requiring explicit Founder authority.
- **Classification: FOUNDER DECISION REQUIRED** (enablement and timing). Recommended timing: after the first seed, in the order alerts → H-4 allowlist → push protection → Dependabot alerts → security updates.

## 7. HK-061 — Supabase anon / Publishable Identifiers

- **Repository evidence:**
  - the current tree contains 2 JWTs decoding to `role: anon` (SB-P-1.11 archive) and 1 claims-less synthetic test JWT;
  - history (1.1 census) contains only `anon` role JWTs and one `sb_publishable_` key;
  - there are **0 `service_role` JWTs and 0 `sb_secret_` keys** anywhere reachable.
- **Assessment:**
  - **Credential?** No: these are publishable client keys by design, with protection provided by RLS.
  - **Rotation:** not required by the key model.
  - **First seed:** not a blocker. They are already public on GitHub, and GitLab is private.
  - **Redaction:** not worthwhile. History retains them regardless, archives are immutable (Protocol §26), and redaction would require a history rewrite (prohibited).
  - **Residual:** the 1.1 owner confirmation of which Supabase projects the two anon keys belong to is informational and does not change any of the above.
- **Classification: ACCEPT AS-IS / NO ACTION** (explicit risk acceptance is sufficient).

## 8. HK-063 — AWS Infrastructure Identifiers

- **Evidence:**
  - **36 tracked files** contain account-bearing ARNs (21 in `communication/archive/**`, 10 in `communication/evidence/**`, 2 workflows, 1 implementation policy JSON, 1 test, 1 `.env.example`), with **2 distinct account identifiers**;
  - `.env.example` carries 3 literal values: region, ingress bucket name and Roles Anywhere role ARN. All other secret-class variables are placeholders or empty.
- **Assessment:**
  - **Credentials?** No. ARNs, account IDs, bucket names and regions are identifiers. Access requires IAM credentials, OIDC trust or Roles Anywhere certificates, none of which are in the repository (1.1 census).
  - **First seed:** no change in exposure. They are already public on GitHub; GitLab is private.
  - **Placeholdering:** a later change to `.env.example` would be marginal hygiene. Because history and archives keep the values anyway, it would reduce operational clarity more than it reduces exposure.
- **Classification: ACCEPT AS-IS / NO ACTION** (explicit acceptance preferred).

## 9. HK-062 — Could GitLab Mechanically Block the First Push?

The 1.1 conclusion remains valid, with one precondition to verify on the provider:

- GitLab secret push protection is Ultimate-tier and **opt-in per project**, and it **does not scan the initial push that creates the repository**. It is also skipped above 3,150 paths or 350,000 lines (docs.gitlab.com, consulted 2026-10-03).
- **New point:** a newly created GitLab.com top-level group may run an Ultimate **trial**, which makes Ultimate security features available. Availability is not activation, but a group-level **security policy** (scan execution or pipeline execution) or compliance framework could still run scans or pipelines on push.
- Therefore a **provider-side pre-seed check is warranted** (Section 11, checks P-4 to P-6): confirm push protection is not enabled on the project, no group or subgroup security policy applies, and the project is still empty so the initial-push exemption applies.
- If a block occurs anyway, the 1.1 rule H-3 stands: stop, no skip options, return to Mission Control.

**Classification: ACCEPT AS-IS / NO ACTION** for the fixtures themselves; the provider check is listed separately.

## 10. Stale GitLab Target Path

- **Search:** across the current tree for the pre-subgroup path `team-lips/smart-business-continuity`, versus the verified live target `team-lips/smart-business/smart-business-continuity`.
- **Results:** 12 files contain the old path, and **none** is under `communication/archive/`. The full classified list is in report 03.
- **Key finding:** **no current canonical continuity record states the verified target.**
  - `mission-control/mission_memory.md` names no GitLab path.
  - The SB-P-1.12 records that name a path (MC-187 / record 57, MC-188 / record 58, specialist guidance 13, live instructions 1.48 and 1.49) all use the pre-subgroup path.
  - The verified path appears only in housekeeping documents (1.5, 1.7, 1.9) and the Mission Control comment on PR #750.
- **Recommendation:** before or with the seed instruction, record the verified target in a current canonical record (mission memory and/or an SB-P-1.12 Mission Control record), and have the seed instruction name it exactly. Do this by **supersession note, not by rewriting** the dated records.
- **Classification: RECOMMENDED BEFORE FIRST SEED BUT NOT BLOCKING.**

## 11. Provider-Side Checks Immediately Before the Seed (read-only)

| # | Check | Why |
|---|---|---|
| P-1 | Target is exactly `team-lips/smart-business/smart-business-continuity`; group, subgroup and project are **Private** | Verified-target integrity; no public exposure |
| P-2 | Project is **empty**: no commits, branches or tags; no README, license or `.gitignore` | Downstream seed integrity; also makes the seed the repository-creating push, which secret push protection exempts |
| P-3 | **No mirroring** configured (push or pull) and the project was **not created by GitHub import** or linked to GitHub | MC-186: no mirror, no co-equal history |
| P-4 | **CI/CD inert:** no `.gitlab-ci.yml` (repository has none) **and** "Default to Auto DevOps pipeline" is **not** enabled at project, subgroup or group level, or CI/CD is disabled for the project | GitLab docs: Auto DevOps runs automatically when a Dockerfile **or matching buildpack** exists. This repository's `package.json` would match the Node.js buildpack, so an enabled Auto DevOps could start a pipeline on the seeded code |
| P-5 | **Security policies:** no group or subgroup scan-execution, pipeline-execution or compliance-framework policy applies to the project; secret push protection not enabled on the project | Trial-era Ultimate features could otherwise run scans or block pushes |
| P-6 | **GitLab Duo / AI and trial behaviour:** no Duo agent, automated code review or AI feature configured to act on pushed code; record whether a trial is active and that no trial default enables these | Seeded code should not be processed by AI review automatically (Duo Code Review acts on merge requests, but confirm nothing is configured to act on pushes) |
| P-7 | **Authentication independent of GitHub:** the pushing identity is a GitLab-native account with 2FA; the push credential is a GitLab PAT (minimum `write_repository`, short expiry) or SSH key held by the human, never in Git or chat | MC-186 independence requirement; FD-C2 |
| P-8 | **Pusher role** is Owner or Maintainer on the project, so default-branch protection created at first push cannot reject the seed | Executability |
| P-9 | **GitHub side:** capture the canonical `main` SHA and the deterministic `refs/heads/*` + `refs/tags/*` manifest (SHA-256) at seed time; currently 686 heads and 1 tag | MC-186 manifest comparison; the ref set grows with each merge |

None of these changes provider state; any needed change is a separate, Founder-performed and authorized step.

## 12. Validation

| Check | Result |
|---|---|
| Canonical `main` at completion | `7d719d3501d530df2c5e3464b8adf79da0fdcec8` (unchanged) |
| Existing tracked files | None changed; only the three new reports |
| Markdown quality (`tools/markdown/quality_gate.py`, non-modifying) | PASS, 0 issues, all three reports; re-run by the pre-commit hook |
| `git diff --check` | Clean |
| Secret and identifier values | None reproduced (counts and categories only) |

## 13. Confirmation of No Mutation

- No GitHub or GitLab setting changed. Provider access was read-only `gh api` GETs and documentation reads.
- No scanner enabled or disabled; no identifier rotated or redacted; no example file edited.
- No branch or tag deleted, pruned or renamed; no workflow modified; no stale-path document edited.
- No GitLab seed; no application code, tests, SQL or migrations changed.

FINAL PRE-SEED RESIDUAL REVIEW SUBMITTED — NO PROVIDER / REF / SEED MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION
