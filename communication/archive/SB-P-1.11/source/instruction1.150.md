# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-GC-38R — Independent TagResource Security Verification

**Instruction ID:** `instruction1.150`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Executing Room:** Security & Permissions Architecture  
**Authorized By:** Founder / Mission Control  
**Mode:** READ-ONLY INDEPENDENT SECURITY VERIFICATION  
**AWS / GitHub Mutation Authority:** NONE  
**Phase B Rerun Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Independently verify the completed bounded deploy-role correction recorded in:

- `communication/live/instruction1.148.md`;
- `communication/live/instruction1.149.md`;
- `communication/live/report1.158.md`;
- `communication/evidence/SB-P-1.11-GC-38R-TagResource-Correction/`.

The verification must determine whether the effective current provider state now grants only the previously approved `rolesanywhere:TagResource` authority and whether all adjacent security controls remain unchanged.

Required completion report:

`communication/live/report1.159.md`

---

## 2. Canonical Entry State

Execute only after this instruction is human-reviewed and merged to `main`.

Canonical baseline at authorization preparation:

`f1065161f2a210a12063f4f10cbf5b969408a75b`

Commit:

`SB-P-1.11 GC-38R TagResource admin correction evidence (#342)`

---

## 3. Required Evidence to Inspect

Security must independently inspect at minimum:

1. `communication/live/instruction1.148.md`;
2. `communication/live/instruction1.149.md`;
3. `communication/live/report1.156.md`;
4. `communication/live/report1.157.md`;
5. `communication/live/report1.158.md`;
6. every non-secret evidence file in `communication/evidence/SB-P-1.11-GC-38R-TagResource-Correction/`;
7. current canonical deploy-role policy evidence;
8. current deploy-role trust-policy evidence;
9. current RuntimeBoundary Version 2 evidence;
10. current canonical workflow relevant to the GC-38R deployment path.

Do not treat `report1.158.md` as proof by assertion. Verify the provider-derived evidence itself.

---

## 4. Required Security Questions

Security must answer explicitly:

### Q1 — Exact action
Does the effective deploy-role policy now add only `rolesanywhere:TagResource` for this correction, without adding broader Roles Anywhere, IAM, STS, Lambda, S3, or other authority?

### Q2 — Exact resources
Is `rolesanywhere:TagResource` limited to exactly:

- `arn:aws:rolesanywhere:ap-south-1:658980433673:trust-anchor/*`
- `arn:aws:rolesanywhere:ap-south-1:658980433673:profile/*`

with no `Resource: "*"`, other region, other account, `subject`, `crl`, or production scope?

### Q3 — Tag-value constraints
Are the six required `aws:RequestTag/*` values preserved exactly:

- `Project=SmartBusiness`
- `Environment=nonprod`
- `Workstream=SB-P-1.11`
- `Component=lambda-parser`
- `Owner=TeamLIPS`
- `ManagedBy=GitHubActions`

### Q4 — Tag-key restriction
Is `aws:TagKeys` constrained to exactly those six approved keys?

### Q5 — No untag/update/delete expansion
Does the effective policy avoid `rolesanywhere:UntagResource`, broader `rolesanywhere:*`, and update/delete/enable/disable authority beyond the previously approved create/list permissions?

### Q6 — Deploy-role trust unchanged
Is the GitHub OIDC trust policy for `TeamLIPS-SB-NonProd-Parser-DeployRole` unchanged from the previously approved state?

### Q7 — RuntimeBoundary unchanged
Is `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary` Version 2 unchanged, including the previously verified Function-URL-only invocation ceiling?

### Q8 — Environment / credential posture
Do the evidence and canonical state support that no IAM user, static credential, persistent administrative credential, or new trust path was introduced, and that the one-time Founder administrative session was closed?

### Q9 — CA custody / production preservation
Did the correction leave Founder-controlled offline CA private-key custody, Supabase, Lovable, production state, and existing partial non-production GC-38R resources unchanged?

### Q10 — Evidence sufficiency
Is the provider-derived evidence sufficient to support an independent PASS without additional AWS mutation or a new privileged session?

---

## 5. Read-Only Authority Boundary

Security & Permissions Architecture may:

- read canonical repository files and evidence;
- compare pre-correction and post-correction policy evidence;
- use official AWS documentation only where necessary to confirm policy semantics;
- classify the corrected security control;
- identify any contradiction or evidence gap.

Security may not:

- modify AWS IAM or any AWS resource;
- open a privileged AWS session;
- modify GitHub workflows, environments, rulesets, or branch protection;
- trigger or rerun Phase B;
- modify RuntimeBoundary or OIDC trust;
- request credentials, private keys, tokens, or secret material;
- modify Supabase, Lovable, production, or application code.

---

## 6. Required Classification

Classify the completed correction as exactly one of:

- **PASS**;
- **FAIL**;
- **NOT VERIFIED**.

If PASS, state explicitly that the bounded deploy-role correction is independently verified and that Mission Control may consider a separate fresh Phase B rerun authorization.

PASS does not itself authorize a rerun.

---

## 7. Required Report

Create only:

`communication/live/report1.159.md`

The report must include:

- exact instruction executed;
- exact canonical `main` SHA reviewed;
- exact evidence files inspected;
- explicit answers to Q1–Q10;
- PASS / FAIL / NOT VERIFIED classification;
- confirmation whether any previously passing security control was materially affected;
- explicit no-mutation confirmation;
- final disposition exactly one of:

`GC-38R TAGRESOURCE CORRECTION INDEPENDENT SECURITY VERIFICATION — PASS — PHASE B RERUN DECISION ELIGIBLE`

or

`GC-38R TAGRESOURCE CORRECTION INDEPENDENT SECURITY VERIFICATION — CORRECTION REQUIRED`

or

`GC-38R TAGRESOURCE CORRECTION INDEPENDENT SECURITY VERIFICATION — STOPPED — EVIDENCE BLOCKER`

Submit through a dedicated human-reviewed PR.

No self-merge.

---

## 8. Next Gate

Only after a PASS report is human-reviewed and merged may Mission Control consider a separate explicit authorization for another GC-38R Phase B non-production workflow run.

No Phase B rerun is authorized by this instruction.

---

## Mission Control Decision

`SB-P-1.11-GC-38R — INDEPENDENT TAGRESOURCE SECURITY VERIFICATION AUTHORIZED AFTER HUMAN MERGE`
