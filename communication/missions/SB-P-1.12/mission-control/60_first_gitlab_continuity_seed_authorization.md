# SMART BUSINESS MISSION CONTROL

# SB-P-1.12 — First GitLab Continuity Seed Authorization

**Date:** 2026-10-04  
**Owner:** Mission Control  
**Canonical GitHub repository:** `SmartBusinessv1/smart-business`  
**Canonical baseline at authorization:** `78409f7403aa35413f6f3938944eda7a043b4ca8`  
**GitLab continuity target:** `team-lips/smart-business/smart-business-continuity`  
**GitLab role:** Private, downstream, noncanonical, continuity-only  
**Execution actor:** Founder / human operator only  
**Status:** DRAFT — EFFECTIVE ONLY AFTER FOUNDER HUMAN MERGE  
**Seed authority:** AUTHORIZED ONLY AFTER ALL PRE-PUSH CONDITIONS IN THIS RECORD PASS

## 1. Purpose

This record authorizes the first governed GitHub → GitLab continuity seed after:

- repository housekeeping completion sufficient for preservation;
- Mission Control's clean-enough-to-preserve declaration;
- Founder-guided PV-1 through PV-9 provider verification;
- acceptance of PV-10 methodology and PV-11 seed constraints.

This authorization is narrow.

It authorizes one initial continuity seed from canonical GitHub to the approved private GitLab target.

It does not authorize migration of canonical status, branch pruning, destructive synchronization, provider reconfiguration, CI activation, GitHub import, or ongoing mirroring.

## 2. Canonical decisions carried forward

The following are controlling:

- GitHub remains canonical.
- GitLab remains private, downstream, noncanonical and continuity-only.
- Current live GitLab target is exactly:
  `team-lips/smart-business/smart-business-continuity`
- D-3 / Option B remains controlling:
  - stale ordinary branches are preserved through the first seed;
  - prune later under separate governance;
  - stale set is re-derived at prune time;
  - divergent refs are not implicitly deleted.
- Founder effort-preservation rule applies:
  - reuse accepted provider evidence;
  - perform only minimum dynamic revalidation needed before action;
  - do not repeat the full PV-1 to PV-9 walkthrough absent a specific freshness dependency.

## 3. Human-only execution boundary

The actual GitLab push must be performed by the Founder or another specifically authorized human operator.

AI actors must not receive or store:

- GitLab passwords;
- OTP/TOTP values;
- recovery codes;
- personal access tokens;
- project/group access tokens;
- deploy tokens;
- SSH private keys;
- session cookies;
- recovery material.

If authentication is required, it must be completed by the human directly.

## 4. Mandatory pre-push gate

Immediately before the first push, complete the following.

### S-1 — verify canonical GitHub main

Record the exact current `main` SHA.

If canonical main has changed since this authorization, that is expected only if merged governance evidence advanced it. Use the actual live main SHA for the seed snapshot.

### S-2 — recapture PV-10

Generate a fresh deterministic ref manifest from live GitHub containing only actual:

- `refs/heads/*`
- `refs/tags/*`

Exclude:

- `refs/pull/*`
- any peeled `^{}` pseudo-ref
- any non-head/non-tag namespace.

Record:

- ordinary head count;
- actual tag count;
- exact manifest;
- SHA-256 of the sorted manifest.

This fresh manifest, not the earlier 688-head snapshot, is the controlling first-seed snapshot.

### S-3 — narrow GitLab dynamic revalidation

Do not repeat the full Founder walkthrough.

Confirm only that dynamic state required for safe execution still matches the accepted baseline:

- exact target path unchanged;
- project remains Private;
- project remains blank / zero-commit;
- no branch/tag content exists;
- no import/mirror was added;
- Auto DevOps / CI remains inert;
- no newly added security/push policy would block or alter the push;
- no automatic Duo/AI action is configured to operate on push/new branches;
- human seed actor still has Owner or Maintainer role.

If any of these changed materially, STOP.

### S-4 — confirm no concurrent seed

Confirm no other process/operator has initialized or seeded the GitLab project.

If the project is no longer blank, STOP.

### S-5 — confirm exact destination

The only authorized destination is:

`team-lips/smart-business/smart-business-continuity`

Do not push to:

- `team-lips/smart-business-continuity`
- a personal namespace
- any other GitLab project/group
- any GitHub repository.

## 5. Authorized seed mechanism

The seed must transfer ordinary branch heads and tags explicitly.

Allowed source ref classes:

- `refs/heads/*`
- `refs/tags/*`

The seed mechanism must preserve all ordinary branch names and tag names in the fresh S-2 manifest.

The execution must NOT use:

- `git push --mirror`
- `--force`
- `--prune`
- ref deletion
- wildcard deletion
- GitHub `refs/pull/*`
- provider import
- repository mirroring
- GitLab migration/import tooling.

The exact command form may use explicit refspecs for ordinary heads and tags only.

If the operator encounters any rejection, divergence, protected-ref conflict, security/push-policy block, or unexpected automatic behavior:

**STOP. DO NOT BYPASS. DO NOT FORCE. RETURN TO MISSION CONTROL.**

## 6. Required post-push verification

After the push completes without stop condition, verify read-only:

1. GitLab project now contains the expected branch and tag set.
2. GitLab `main` points to the same commit SHA as the captured canonical GitHub `main`.
3. Every branch/tag in the fresh S-2 manifest exists on GitLab with the same object SHA.
4. No unexpected ref exists outside the intended ordinary heads/tags set.
5. No GitHub `refs/pull/*` was created.
6. No peeled `^{}` pseudo-ref exists as a ref.
7. No CI/Auto DevOps pipeline unexpectedly started.
8. No mirror/import was configured.
9. GitLab remains Private.
10. GitHub remains canonical.

If any mismatch exists:

- do not delete;
- do not overwrite;
- do not force;
- record the discrepancy;
- STOP for Mission Control.

## 7. Seed evidence package

After execution, create a governed evidence package containing at minimum:

- pre-push canonical GitHub main SHA;
- pre-push ordinary head count;
- pre-push tag count;
- fresh manifest SHA-256;
- exact GitLab target;
- human operator identity/role (non-secret);
- exact seed command form with credentials redacted/omitted;
- push result;
- post-push GitLab main SHA;
- post-push branch count;
- post-push tag count;
- ref-manifest comparison result;
- CI/Auto DevOps observation;
- confirmation no mirror/import;
- confirmation GitHub remains canonical;
- any warnings or provider messages;
- explicit mutation attestation limited to the authorized Git push.

Do not include secrets.

## 8. Success condition

The first seed succeeds only if:

- fresh S-2 manifest is captured;
- all S-3/S-4/S-5 checks pass;
- push completes without bypass/force;
- GitLab ref state matches the captured GitHub ordinary-head/tag state;
- GitLab `main` matches GitHub `main`;
- no unexpected provider automation materially alters the operation.

## 9. Post-seed authority boundary

Successful first seed does NOT authorize:

- branch pruning;
- enabling `delete_branch_on_merge`;
- GitHub secret scanning / push protection / Dependabot changes;
- ongoing mirroring;
- scheduled synchronization;
- GitLab CI;
- GitLab becoming canonical;
- repo migration;
- provider cleanup;
- physical/offline backup mutation beyond separately authorized Track A work.

Those remain separate missions.

## 10. Stop conditions

STOP immediately if:

- target is not exact;
- target is not Private;
- target is not blank before first seed;
- any existing branch/tag/commit appears before seed;
- import/mirror exists;
- CI/Auto DevOps would automatically run unexpectedly;
- a security/push policy blocks or alters the seed;
- Duo/AI would act automatically on the push;
- human role is insufficient;
- authentication independence is broken;
- source ref manifest cannot be deterministically captured;
- destination rejects refs unexpectedly;
- divergence is detected;
- a force/prune/delete action appears necessary;
- any credential would need to be given to an AI actor.

## 11. Mission Control return

Return the complete seed evidence package to Mission Control.

Do not self-merge any evidence PR.

End the execution report exactly:

**FIRST GITLAB CONTINUITY SEED EXECUTION SUBMITTED — GITHUB REMAINS CANONICAL — STOP FOR MISSION CONTROL DISPOSITION**

## 12. Authorization decision

**CLEAN-ENOUGH DECLARATION: CANONICAL**

**PROVIDER GATE: SATISFIED**

**FIRST GITLAB CONTINUITY SEED: AUTHORIZED SUBJECT TO S-1 THROUGH S-5 PASSING IMMEDIATELY BEFORE PUSH**

**FORCE / PRUNE / MIRROR / DELETE: NOT AUTHORIZED**

**FIRST GITLAB CONTINUITY SEED AUTHORIZATION PREPARED — STOP FOR FOUNDER HUMAN MERGE**
