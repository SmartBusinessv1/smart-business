# SB-OPS-REPO-HOUSEKEEPING-1.10 — Pre-Seed Provider Verification Report

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.10
**Execution actor:** Claude Code (the authorization permits Infrastructure / Provider Operations, or Claude Code with read-only GitLab visibility)
**Authority:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.10/mission-control/01_preseed_provider_verification_gate_authorization.md`
**Handoff:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.10/provider/00_preseed_provider_verification_handoff.md`
**Date:** 2026-10-04
**Mode:** Read-only provider verification. **Seed authority: WITHHELD.**
**Companions:** [`02_github_seed_ref_manifest.txt`](02_github_seed_ref_manifest.txt), [`03_seed_readiness_matrix.md`](03_seed_readiness_matrix.md)

## 1. Result

**STOP: provider verification gate NOT SATISFIED.**

The stop condition encountered is **"current provider state cannot be verified confidently"** (authorization §5). This execution actor has **no read-only GitLab visibility** (Section 3), so PV-1 to PV-9 are **NOT VERIFIABLE** by Claude Code.

This is **not** evidence of a provider defect. Nothing found indicates the GitLab target is wrong, public, non-blank, mirrored, or configured to act on a push; it simply could not be observed. PV-10 and PV-11, which depend only on GitHub, **PASS**.

| PV | Result |
|---|---|
| PV-1 exact target identity | NOT VERIFIABLE |
| PV-2 privacy | NOT VERIFIABLE (anonymous 404 is consistent with, but does not prove, Private) |
| PV-3 blank project | NOT VERIFIABLE |
| PV-4 no import / mirror / GitHub linkage | NOT VERIFIABLE |
| PV-5 CI / Auto DevOps | NOT VERIFIABLE |
| PV-6 security policies / push protection | NOT VERIFIABLE |
| PV-7 Duo / AI / automated review | NOT VERIFIABLE |
| PV-8 authentication independence | NOT VERIFIABLE |
| PV-9 human role for later seed | NOT VERIFIABLE |
| PV-10 GitHub seed snapshot | **PASS** |
| PV-11 seed-mechanism readiness | **PASS** (GitHub side and command form); GitLab-side executability depends on PV-1 to PV-9 |

**Recommended path to complete the gate:** the Founder, or Infrastructure / Provider Operations with the Founder signed in, performs PV-1 to PV-9 **read-only in the GitLab web UI** using the checklist in Section 6, and records the results without exposing any secret. Claude Code should **not** be given a GitLab token: MC-186 (`communication/live/instruction1.47.md`) prohibits AI actors from receiving or storing the Founder's tokens or recovery material.

## 2. Authority and Baseline

| Check | Result |
|---|---|
| Canonical GitHub `main` | `80aca83953536f2b5ee4b6d1aaf12ba7b9ea914d`, equal to the authorized baseline (merge of PR #755); confirmed live via API at capture |
| Authorization and handoff | Present on `main`; read in full |
| Current verified GitLab target (authorization §2) | `team-lips/smart-business/smart-business-continuity`; the pre-subgroup path is historical only and was not used except in a single anonymous negative-control probe (Section 3) |
| Newer or conflicting authority | None; 0 open PRs |
| Evidence branch | `mission/SB-OPS-REPO-HOUSEKEEPING-1.10-claude-code-provider-verification` (Mission Control's authorization branch is `…-1.10-preseed-provider-gate`) |

## 3. GitLab Visibility Available to This Actor

Checked without printing any credential value:

| Access path | State |
|---|---|
| `glab` CLI | Not installed |
| `GITLAB_TOKEN`, `GL_TOKEN`, `GITLAB_PRIVATE_TOKEN`, `CI_JOB_TOKEN` | Absent |
| Stored Git credential for `gitlab.com` | 0 entries |
| SSH to `git@gitlab.com` (BatchMode) | `Permission denied (publickey)`; no registered key |
| Anonymous REST API `GET /api/v4/groups/team-lips` | HTTP 404 |
| Anonymous `GET /api/v4/groups/team-lips%2Fsmart-business` | HTTP 404 |
| Anonymous `GET /api/v4/projects/team-lips%2Fsmart-business%2Fsmart-business-continuity` | HTTP 404 |
| Anonymous `GET /api/v4/projects/team-lips%2Fsmart-business-continuity` (pre-subgroup path, negative control) | HTTP 404 |

GitLab returns 404 to unauthenticated callers for both private and non-existent groups and projects. The anonymous results are therefore **consistent with** PV-2 (all Private) but **cannot distinguish** "private" from "absent" or "wrong path". They are not verification.

Local side effect, disclosed: the SSH probe added `gitlab.com`'s public ED25519 host key to this workstation's `~/.ssh/known_hosts`. That is a local file outside the repository; no provider state changed.

## 4. PV-10 — GitHub Seed Snapshot (PASS)

| Item | Value |
|---|---|
| Capture time (UTC) | 2026-10-04T13:47:05Z |
| Method | `git ls-remote origin 'refs/heads/*' 'refs/tags/*'` (the MC-186 manifest method), with peeled annotated-tag pseudo-ref lines (`^{}`) excluded, then sorted with `LC_ALL=C sort -k2,2`; written as `<40-hex SHA><TAB><ref>`, LF line endings |
| `main` | `80aca83953536f2b5ee4b6d1aaf12ba7b9ea914d` (matches the live API) |
| Ordinary branches (`refs/heads/*`) | **688** |
| Tags (`refs/tags/*`) | **1** (`refs/tags/eos-v1.0`, annotated tag object) |
| Total manifest lines (non-empty) | 689 (688 heads + 1 tag) |
| Peeled pseudo-ref lines (`^{}`) | **0** |
| `refs/pull/*` lines | **0** |
| Lines outside `refs/heads/*` / `refs/tags/*` | 0 |
| Non-conforming lines | 0 |
| **Manifest SHA-256** | **`a055928ee5ff78921f4ce45b74d17463a84f132ea019d4dc5c44c797ee7c8161`** |
| D-3 / Option B check | All 19 divergent refs (PR #742 register) present; stale ordinary branches retained; tag present |

**Correction (2026-10-04, per Mission Control review on PR #756):** the first version of this manifest included the peeled annotated-tag line `refs/tags/eos-v1.0^{}` (690 lines, SHA-256 `1f65ce5d…57103ce`). That line is not an ordinary Git ref and has been removed from the same point-in-time snapshot. No ref was added and all 688 head lines are unchanged.

**Snapshot drift note:** the ref set grows with every merged PR while `delete_branch_on_merge=false`. Pushing this evidence branch adds one more head after capture. The snapshot must be **recaptured with the same method at seed time**, and the seed must be verified against that recapture, not against this file.

## 5. PV-11 — Seed-Mechanism Readiness (PASS)

- **Seed source shape:**
  - a fresh `git clone --bare` of GitHub holds exactly `refs/heads/*` and `refs/tags/*` and no `refs/pull/*` (verified empirically in SB-OPS-REPO-HOUSEKEEPING-1.1: 670 heads, 1 tag, 0 pull refs);
  - the manifest above confirms the live GitHub set contains only those namespaces under the method.
- **Command form for a later, separately authorized seed** (not executed):

```text
git -C <bare-clone> push https://gitlab.com/team-lips/smart-business/smart-business-continuity.git \
  'refs/heads/*:refs/heads/*' 'refs/tags/*:refs/tags/*'
```

- **Explicitly excluded:** `--mirror`, `--force`, `--force-with-lease`, `--prune`, any `:<ref>` deletion refspec, and `refs/pull/*`.
- **Post-push verification:** `git ls-remote <gitlab> 'refs/heads/*' 'refs/tags/*'`, with peeled `^{}` pseudo-ref lines excluded, sorted with `LC_ALL=C sort -k2,2` and hashed with `sha256sum`, must equal the seed-time GitHub recapture built the same way, with GitLab `main` equal to the bound GitHub SHA.
- **Size:** about 13.6 MB packed (SB-OPS-REPO-HOUSEKEEPING-1.1). No LFS objects.
- **Dependency:** GitLab-side executability (target exists, empty, private, pusher role, no blocking control) depends on PV-1 to PV-9.

## 6. Human Read-Only Checklist to Complete PV-1 to PV-9

For the Founder, or Infrastructure / Provider Operations with the Founder signed in. Observe only: change nothing, and never enter or record a secret in chat or Git. Menu names may differ slightly by GitLab version.

| PV | Where to look (GitLab web UI) | Record | STOP if |
|---|---|---|---|
| PV-1 | Open the project; read its URL and breadcrumb | Full path exactly `team-lips/smart-business/smart-business-continuity` | Any other path |
| PV-2 | Group `team-lips` → Settings → General → Visibility; subgroup `smart-business` → same; project → Settings → General → Visibility | Each shows **Private** | Any is Internal or Public |
| PV-3 | Project overview (an empty project shows the "empty repository" push instructions); Code → Branches; Code → Tags; Repository graph or commits | 0 commits, 0 branches, 0 tags; no README, license, `.gitignore` or sample files | Any content exists |
| PV-4 | Project → Settings → Repository → Mirroring repositories; project activity / creation event | 0 mirrors; created as a blank project (not "Import project" / GitHub); no GitHub integration under Settings → Integrations | Any mirror, import or GitHub link |
| PV-5 | Project → Settings → CI/CD → Auto DevOps; subgroup and group → Settings → CI/CD → Auto DevOps; project → Settings → General → Visibility, project features, permissions → CI/CD | "Default to Auto DevOps pipeline" **unchecked** at project, subgroup and group (or CI/CD feature off); 0 pipelines | Auto DevOps enabled or inherited (the repository's `package.json` matches the Node.js buildpack, so a pipeline could start) |
| PV-6 | Project → Secure → Security configuration (secret push protection); project → Settings → Repository → Push rules; group and subgroup → Secure → Policies; project → Settings → General → Compliance frameworks | Push protection off; no push rule that would reject the seed; no scan-execution or pipeline-execution policy; no compliance framework | Any control that would block or act on the push |
| PV-7 | Group `team-lips` → Settings → Billing (trial status); group → Settings → GitLab Duo; project → Settings → General / Merge requests (GitLab Duo, automatic reviews) | Trial active yes or no (and end date); Duo enabled or not; no automatic AI review or agent configured to act on pushes or new branches | Any automatic AI action on pushed code |
| PV-8 | User avatar → Edit profile → Account (two-factor authentication; service sign-in / connected accounts); Password | Native GitLab password sign-in; 2FA **enabled**; **no** GitHub service sign-in connected; recovery codes held offline by the Founder (state only "held", never the codes) | 2FA off, GitHub sign-in connected, or recovery depends on GitHub |
| PV-9 | Project → Manage → Members | The human who will push is **Owner** or **Maintainer** | Lower role |

Historical context only (not a PV item): earlier historical instructions (for example live instruction 1.49) used the planned top-level workspace name `lighthouseips`. Accepted live provider evidence establishes `lighthouse-hq` (authorization §2), which Mission Control has accepted as superseding the planned name. This is not an unresolved provider issue and not a pending Founder decision. Only `team-lips` is in scope for PV-1 to PV-9.

## 7. Validation

| Check | Result |
|---|---|
| Canonical GitHub `main` | `80aca83953536f2b5ee4b6d1aaf12ba7b9ea914d` at capture and completion |
| Manifest reflects live GitHub refs | Yes: generated by `git ls-remote` against `origin` at capture time; `main` matches the API |
| Deterministic sort | `LC_ALL=C sort -k2,2` |
| SHA-256 | `a055928ee5ff78921f4ce45b74d17463a84f132ea019d4dc5c44c797ee7c8161` |
| `refs/pull/*` absent | Yes (0) |
| Existing tracked files | None changed |
| Markdown quality (`tools/markdown/quality_gate.py`, non-modifying) | PASS, 0 issues, both Markdown reports; re-run by the pre-commit hook |
| `git diff --check` | Clean |
| Changed paths | Exactly the three authorized new evidence files |

## 8. Confirmation of No Mutation

- **No GitLab seed occurred.** No Git push, import, mirror or initialization against GitLab.
- **No provider setting changed** on GitHub or GitLab. GitHub access was read-only (`git ls-remote`, `gh api` GET); GitLab access was four anonymous GET probes and one rejected SSH handshake.
- **No branch or tag was deleted, renamed or pruned.** `delete_branch_on_merge` is unchanged.
- **No GitLab project content was created.**
- No credential was requested, received, printed or stored.

PRE-SEED PROVIDER VERIFICATION SUBMITTED — NO PROVIDER / REF / SEED MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION
