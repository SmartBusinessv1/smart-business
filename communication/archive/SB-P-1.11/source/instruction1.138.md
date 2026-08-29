# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-42B — VERY NARROW MARKDOWN QUALITY GATE TRIGGER CORRECTION

**Instruction ID:** `instruction1.138`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-42B — Markdown Quality Gate Trigger Correction`  
**Executing Room:** Infrastructure Operations  
**Authorized By:** Founder / Mission Control  
**Mode:** REPOSITORY CI CORRECTION ONLY  
**AWS IAM / Resource Authority:** NONE  
**Application / Parser Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Remove the single repository CI trigger mismatch recorded in merged `communication/live/report1.147.md` so that the repository-required `Markdown Quality Gate` can report deterministically on pull requests that do not change Markdown files.

This is a very narrow CI correction only.

Required completion report:

`communication/live/report1.148.md`

---

## 2. Canonical Entry State

Execute only after this instruction is human-reviewed and merged to `main`.

Before acting, read at minimum:

1. `communication/live/report1.147.md`;
2. `communication/live/instruction1.137.md`;
3. `communication/live/report1.146.md`;
4. `communication/live/report1.145.md`;
5. current `.github/workflows/markdown-quality-gate.yml`;
6. PR `#314` state and required-check blocker;
7. current repository branch/ruleset requirements.

Current blocker from merged `report1.147.md`:

- PR `#314` changes only `.github/workflows/aws-gc42-oidc-claims.yml`;
- the repository requires status check `Markdown Quality Gate`;
- `.github/workflows/markdown-quality-gate.yml` currently uses a top-level `pull_request.paths` filter;
- therefore the required workflow never starts for PRs with no eligible Markdown-path change;
- branch protection waits indefinitely for a required status that cannot be emitted.

---

## 3. Exact Authorized Change

Infrastructure Operations is authorized to modify exactly:

`.github/workflows/markdown-quality-gate.yml`

and only for the following purpose:

> Remove the top-level `paths:` restriction from the workflow's `pull_request` trigger so the Markdown Quality Gate starts on every pull request targeting the already configured protected branches, while preserving the workflow's existing internal changed-Markdown detection and its existing no-Markdown PASS behavior.

The correction must preserve the existing target branch scope unless a directly proven syntax requirement forces an equivalent formatting change.

The intended semantic result is:

- pull request opened/updated against the existing configured branches → Markdown Quality Gate starts;
- if eligible Markdown changed → existing Markdown validation runs unchanged;
- if no eligible Markdown changed → existing `No Markdown Validation Required` path runs and returns PASS;
- the required check remains required and is not bypassed.

---

## 4. Explicitly Not Authorized

Do not:

- remove, rename, disable, or make optional the required `Markdown Quality Gate` status check;
- modify branch protection/rulesets to bypass the check;
- add a dummy Markdown file merely to trigger the workflow;
- weaken existing Markdown validation logic;
- alter the existing no-Markdown PASS logic except where a minimal syntax correction is strictly required for the trigger change;
- modify `.github/workflows/aws-gc42-oidc-claims.yml` under this authorization;
- merge or modify PR `#314` under this authorization except to observe/re-run its checks after the correction becomes canonical;
- change GitHub Environment `aws-nonprod-parser` protections;
- change OIDC issuer/audience/trust design;
- create or modify AWS IAM roles, policies, permission boundaries, Lambda, S3, IAM Roles Anywhere, certificates, Function URLs, or other AWS resources;
- create static AWS credentials;
- mutate Supabase or Lovable;
- apply production migrations;
- reactivate GC-38;
- perform parser/application implementation;
- deploy or publish production state.

---

## 5. Required Git / PR Boundary

Perform the CI correction through a dedicated protected mission branch and human-reviewed pull request.

The implementation PR must change only:

`.github/workflows/markdown-quality-gate.yml`

No self-merge.

If any unrelated file becomes changed, stop and clean the branch before requesting review.

After the correction PR is human-merged, verify that the canonical workflow contains the intended trigger behavior before treating this gate as complete.

---

## 6. Required Verification

Before positive completion, verify all of the following:

1. the `pull_request.paths` filter that caused the blocker is removed;
2. the workflow still targets the same approved pull-request branches;
3. existing internal changed-Markdown detection remains present;
4. existing Markdown validation path remains materially unchanged;
5. existing no-Markdown PASS path remains present;
6. the status-check identity expected by branch protection remains `Markdown Quality Gate`;
7. a non-Markdown-only PR can now receive a reported Markdown Quality Gate result instead of remaining indefinitely `Expected`;
8. no branch-protection bypass or dummy Markdown workaround was introduced;
9. no AWS/GitHub Environment/Supabase/Lovable/parser/production mutation occurred under GC-42B.

Where practical, use PR `#314` after the correction is canonical as the real verification case. If GitHub requires a synchronize/re-run event before the new workflow behavior appears, record the exact harmless action used and do not broaden scope.

---

## 7. Stop Conditions

Stop and report if:

- the blocker is not actually caused by the top-level `pull_request.paths` filter;
- removing that filter would unexpectedly broaden a security-sensitive workflow beyond the intended Markdown gate behavior;
- the workflow's internal no-Markdown PASS path is missing or materially different from `report1.147.md`;
- fixing the issue requires branch-protection/ruleset weakening;
- fixing the issue requires changes outside `.github/workflows/markdown-quality-gate.yml`;
- PR `#314` exposes a new independent security or workflow defect after the trigger issue is corrected;
- any AWS or production mutation would be required.

Do not improvise a broader CI redesign.

---

## 8. Required Report

Infrastructure Operations shall produce:

`communication/live/report1.148.md`

The report must state:

- exact instruction executed;
- exact canonical `main` SHA used;
- exact correction PR number and merge commit;
- exact file changed;
- before/after trigger behavior;
- confirmation internal Markdown detection and no-Markdown PASS logic were preserved;
- evidence that a non-Markdown PR now receives the required status check;
- PR `#314` status after the correction;
- confirmation no branch-protection bypass occurred;
- confirmation no AWS, Supabase, Lovable, parser, deployment, or production mutation occurred;
- final disposition.

Allowed final dispositions:

- `MARKDOWN QUALITY GATE TRIGGER CORRECTION — COMPLETE — GC-42A MAY RESUME`
- `MARKDOWN QUALITY GATE TRIGGER CORRECTION — CHANGES REQUIRED`
- `MARKDOWN QUALITY GATE TRIGGER CORRECTION — STOPPED — CI OR AUTHORITY BLOCKER`

---

## 9. Next Gate

A positive merged `report1.148.md` does not itself create AWS authority.

It only removes the repository CI blocker so the already-authorized GC-42A execution-access provisioning can resume from its existing state.

The intended continuation is:

1. allow PR `#314` to complete the normal protected review/merge path;
2. observe the actual sanitized GitHub OIDC claim set;
3. continue the remaining GC-42A bounded deploy-role/access provisioning;
4. return to Mission Control;
5. perform the already-required independent post-provisioning Security & Permissions Architecture verification before GC-38 can resume.

---

## 10. Mission Control Decision

`SB-P-1.11-GC-42B — VERY NARROW MARKDOWN QUALITY GATE TRIGGER CORRECTION AUTHORIZED AFTER HUMAN MERGE`
