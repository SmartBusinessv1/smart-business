# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-38R — BOUNDED DEPLOY-ROLE TAGRESOURCE CORRECTION AUTHORIZATION

**Instruction ID:** `instruction1.148`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Executing Room:** Infrastructure Operations  
**Authorized By:** Founder / Mission Control  
**Mode:** NARROW AWS DEPLOY-ROLE POLICY CORRECTION + EVIDENCE ONLY  
**Production Authority:** NONE  
**Phase B Rerun Authority:** NONE

---

## 1. Authorization Basis

GC-38R Phase B Run #2 failed at `Create IAM Roles Anywhere trust anchor` because the deployment identity lacked:

`rolesanywhere:TagResource`

Security & Permissions Architecture independently reviewed the gap under `communication/live/instruction1.147.md` and returned `communication/live/report1.156.md` with final disposition:

`GC-38R PHASE B PERMISSION-GAP SECURITY REVIEW — NARROW CORRECTION ELIGIBLE`

Canonical `main` baseline at authorization preparation:

`37b8d60a0049f1e3926531163d9a7579b7087d97`

This instruction authorizes Infrastructure Operations to implement only the exact bounded deploy-role policy correction recommended by Security, capture evidence, and report completion.

---

## 2. Authorized AWS Identity

Target deployment role only:

`TeamLIPS-SB-NonProd-Parser-DeployRole`

Approved account:

`658980433673`

Approved region:

`ap-south-1`

Do not alter the trust policy of this role.

---

## 3. Exact Authorized Permission Addition

Add only:

`rolesanywhere:TagResource`

with resource scope limited to:

```json
[
  "arn:aws:rolesanywhere:ap-south-1:658980433673:trust-anchor/*",
  "arn:aws:rolesanywhere:ap-south-1:658980433673:profile/*"
]
```

and require the same six approved request-tag values already used by the GC-38R tagged creation path:

```json
{
  "StringEquals": {
    "aws:RequestTag/Project": "SmartBusiness",
    "aws:RequestTag/Environment": "nonprod",
    "aws:RequestTag/Workstream": "SB-P-1.11",
    "aws:RequestTag/Component": "lambda-parser",
    "aws:RequestTag/Owner": "TeamLIPS",
    "aws:RequestTag/ManagedBy": "GitHubActions"
  },
  "ForAllValues:StringEquals": {
    "aws:TagKeys": [
      "Project",
      "Environment",
      "Workstream",
      "Component",
      "Owner",
      "ManagedBy"
    ]
  }
}
```

Equivalent bounded policy structure is acceptable only if it preserves exactly the same effective authority.

No `Resource: "*"` is authorized.

---

## 4. Explicitly Forbidden Permission Expansion

Do not add or broaden:

- `rolesanywhere:*`;
- `rolesanywhere:UntagResource`;
- Roles Anywhere update/delete/enable/disable actions;
- any new IAM action;
- any new STS action;
- any new Lambda action;
- any new S3 action;
- `iam:PassRole` scope;
- OIDC trust conditions;
- GitHub Environment scope;
- RuntimeBoundary permissions;
- account or region scope;
- production authority.

If any additional permission appears necessary, STOP and report to Mission Control.

---

## 5. Controls That Must Remain Unchanged

Do not modify:

- `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`;
- GitHub Actions OIDC provider or trust conditions;
- protected environment `aws-nonprod-parser`;
- canonical-main-only deployment requirement;
- workload-role permissions;
- Lambda execution-role permissions;
- Founder-controlled offline CA private-key custody;
- Trust Anchor CA material;
- workflow behavior;
- parser implementation;
- Supabase;
- Lovable;
- production state.

The steady-state deployment path remains:

`GitHub Actions OIDC → TeamLIPS-SB-NonProd-Parser-DeployRole`

The runtime path remains:

`IAM Roles Anywhere → workload role → AWS_IAM Lambda Function URL`

---

## 6. Existing Partial AWS State

Preserve and reuse the authorized non-production resources already created/configured during Phase B Runs #1 and #2.

Do not delete, recreate, manually repair, or replace the existing S3 ingress bucket, Lambda execution role, workload role, or other already-authorized resources merely because the deployment run failed later.

This instruction does not authorize manual Trust Anchor/Profile creation.

---

## 7. Execution Path

Infrastructure Operations shall use only an already-approved, authorized administrative path for this narrow policy amendment.

Do not create static AWS credentials, IAM users, long-lived access keys, or a new trust path.

If the current approved execution path cannot make the exact correction without broader authority, STOP and report to Mission Control rather than improvising.

---

## 8. Required Verification After Correction

After applying the correction, verify and capture provider-derived evidence showing:

1. the deploy-role identity policy now contains `rolesanywhere:TagResource`;
2. the action is limited to the two authorized Roles Anywhere ARN classes only;
3. the exact account and region are preserved;
4. the six approved `aws:RequestTag/*` values are enforced;
5. `aws:TagKeys` remains restricted to the six approved keys;
6. no `rolesanywhere:UntagResource` or broader Roles Anywhere action was introduced;
7. deploy-role trust policy is unchanged;
8. RuntimeBoundary Version 2 is unchanged;
9. OIDC / GitHub Environment protections are unchanged;
10. no static credential, IAM user, root access key, CA private-key movement, or production change occurred.

Provider-derived evidence must be sufficient for an independent Security reviewer to verify the effective correction without relying only on narrative assertions.

---

## 9. Repository Evidence Package

Create a dedicated evidence directory for this correction under:

`communication/evidence/SB-P-1.11-GC-38R-TagResource-Correction/`

Include only non-secret evidence necessary to verify the correction, such as:

- corrected deploy-role policy document;
- before/after or policy-version evidence as appropriate;
- trust-policy unchanged evidence;
- RuntimeBoundary unchanged evidence;
- concise verification manifest.

Do not commit credentials, private keys, CA private-key material, workload private keys, tokens, session values, or secret-bearing CLI output.

---

## 10. Required Completion Report

Return:

`communication/live/report1.157.md`

The report must include:

- exact instruction executed;
- exact canonical `main` SHA used;
- execution path used;
- exact deploy-role policy change;
- exact provider-derived evidence files created;
- confirmation of all ten verification points in §8;
- confirmation that existing partial non-production resources were preserved;
- confirmation that no workflow rerun occurred;
- confirmation that no Phase B deployment authorization was exercised;
- any blocker or unexpected finding;
- final disposition exactly one of:

`GC-38R TAGRESOURCE DEPLOY-ROLE CORRECTION — READY FOR INDEPENDENT SECURITY VERIFICATION`

or

`GC-38R TAGRESOURCE DEPLOY-ROLE CORRECTION — STOPPED — BLOCKER`

Submit the evidence/report through a dedicated human-reviewed PR.

No self-merge.

---

## 11. No Phase B Rerun Authority

This instruction does **not** authorize another GC-38R Phase B workflow run.

After the correction report and evidence are human-reviewed and merged, Mission Control will separately authorize an independent Security & Permissions Architecture verification of the corrected deploy-role policy.

Only after that verification passes may Mission Control consider a fresh Phase B rerun authorization.

---

## 12. Stop Conditions

STOP and report to Mission Control if:

- any permission beyond the exact `rolesanywhere:TagResource` correction is required;
- `Resource: "*"` appears necessary;
- RuntimeBoundary must change;
- OIDC trust must change;
- GitHub Environment protection must change;
- any existing authorized resource must be deleted or manually repaired;
- root/static-credential use becomes necessary outside already-approved governance;
- CA private-key access is requested;
- production scope appears necessary;
- the effective provider state materially differs from `report1.156.md`.

---

## 13. Mission Control Decision

`SB-P-1.11-GC-38R — EXACT BOUNDED TAGRESOURCE DEPLOY-ROLE POLICY CORRECTION AUTHORIZED AFTER HUMAN MERGE`

**AUTHORIZED:** exact narrow deploy-role policy correction + evidence only.  
**NOT AUTHORIZED:** Phase B rerun, broader AWS mutation, runtime verification, production action, or later-stage progression.
