# SMART BUSINESS — INFRASTRUCTURE OPERATIONS COMPLETION REPORT

## SB-P-1.11-GC-43C — Narrow IAM Runtime-Boundary Correction

**Report ID:** `report1.152`  
**Instruction Executed:** `communication/live/instruction1.142.md`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-43C — Runtime-Boundary Correction`  
**Executing Room:** Infrastructure Operations  
**Downstream Verifier:** Security & Permissions Architecture  
**Affected Finding:** `GC43B-SEC-01`  
**Affected Control:** `SEC-GC43-07 — Runtime Permission Boundary`  
**Parser / Application Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Exact Canonical Baseline

Latest canonical `main` used before provider mutation:

`c0bad5d1ca5ce7a26b183a69943f09461c6cede0`

Commit:

`SB-P-1.11: authorize narrow runtime-boundary correction (#327)`

The executing room read the merged authorization and the canonical GC-43B defect/evidence before applying any AWS mutation.

---

## 2. Exact Pre-Correction Boundary State

AWS customer-managed policy:

`TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`

ARN:

`arn:aws:iam::658980433673:policy/TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`

Provider-derived pre-correction state:

- policy versions: `1`;
- `Version 1` was `Default`;
- the effective policy contained unrestricted `lambda:InvokeFunction` on the exact parser Lambda namespace under Sid `AllowExactParserFunctionInvocation`;
- that statement did not require `lambda:InvokedViaFunctionUrl = true`.

This matched `GC43B-SEC-01` exactly.

---

## 3. Exact Authorized Mutation Applied

Only `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary` was changed.

The prior statement:

`AllowExactParserFunctionInvocation`

was replaced with:

`AllowExactParserFunctionInvocationViaFunctionUrlOnly`

The exact parser Lambda resource scope remained unchanged.

The new statement adds only:

```json
"Condition": {
  "Bool": {
    "lambda:InvokedViaFunctionUrl": "true"
  }
}
```

The existing `AllowExactParserFunctionUrlInvocation` statement and its condition:

`lambda:FunctionUrlAuthType = AWS_IAM`

were preserved unchanged.

No Lambda resource, account, region, role namespace, S3 resource, log-group scope, control-plane deny, OIDC trust, GitHub Environment rule, or `iam:PassRole` grant was broadened.

---

## 4. Founder Root+MFA Exception

The one-time Founder-controlled root+MFA path authorized by `instruction1.142.md` **was used**.

Reason:

The provisioned deploy role correctly remains unable to create/promote policy versions of the RuntimeBoundary. That previously verified fail-closed PASS control was not weakened to facilitate this correction.

The root session was used solely to:

1. open the exact RuntimeBoundary policy;
2. create the corrected policy version;
3. set the corrected version as default;
4. verify the new default policy document/version;
5. verify root/static-credential posture;
6. sign out immediately.

Operational confirmation:

`ROOT CORRECTION SESSION EXITED`

No root access key or IAM user was created.

---

## 5. Exact Post-Correction Boundary State

Provider-derived AWS IAM evidence confirmed:

- policy versions: `2`;
- `Version 2` is `Default`;
- `Version 1` remains present but is no longer default;
- Version 2 contains the exact intended Function-URL-only `lambda:InvokeFunction` condition;
- the existing `AWS_IAM` restriction on `lambda:InvokeFunctionUrl` remains intact.

Complete corrected effective policy:

`communication/evidence/SB-P-1.11-GC-43C/aws-runtime-boundary-v2.json`

Sanitized version/default evidence:

`communication/evidence/SB-P-1.11-GC-43C/aws-runtime-boundary-version-evidence.md`

---

## 6. Negative Direct-Invocation Verification

Result:

`ORDINARY DIRECT lambda:InvokeFunction — OUTSIDE CORRECTED BOUNDARY CEILING`

Basis:

- the corrected maximum-permission boundary allows `lambda:InvokeFunction` only when `lambda:InvokedViaFunctionUrl = true`;
- without that context, the boundary has no matching Allow for ordinary direct invocation;
- AWS permissions-boundary semantics require effective identity permission to remain within the boundary ceiling.

Therefore, even if a future workload-role identity policy were to grant ordinary direct `lambda:InvokeFunction`, that permission cannot become effective through the corrected boundary when the invocation context is not Function URL invocation.

No Lambda function, future workload role, or actual invocation was created or executed to prove this denial.

Evidence:

`communication/evidence/SB-P-1.11-GC-43C/authorization-verification.md`

---

## 7. Approved Function URL Path Verification

The corrected policy structurally preserves the approved authorization shape:

1. `lambda:InvokeFunctionUrl` is limited to the exact parser Lambda namespace and requires:

   `lambda:FunctionUrlAuthType = AWS_IAM`

2. `lambda:InvokeFunction` is limited to the exact parser Lambda namespace and requires:

   `lambda:InvokedViaFunctionUrl = true`

Result:

`APPROVED AWS_IAM FUNCTION URL AUTHORIZATION PATH — REPRESENTED INSIDE CORRECTED CEILING`

### IAM Policy Simulator limitation

A new post-correction interactive IAM Policy Simulator run was not executed.

The one-time Founder root correction session had already been intentionally terminated, and no separate non-root simulator-capable AWS console identity currently exists. Reopening root solely for simulation, creating an IAM user, or broadening deploy-role authority would violate the narrow operating boundary.

No simulator PASS was fabricated.

Downstream Security must independently inspect the corrected provider-derived Version 2 JSON and classify the control.

---

## 8. Deploy-Role Boundary Immutability

The deploy role remains unchanged.

No permission source was added to it during GC-43C.

Canonical provider-generated IAM Policy Simulator evidence from GC-43A already established denial for:

- `iam:CreatePolicyVersion` on `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`;
- `iam:SetDefaultPolicyVersion` on the same policy.

Because the deploy policy was not changed, the previously verified fail-closed boundary-immutability property remains intact.

---

## 9. Post-Correction Root / Static-Credential Posture

Provider-derived post-correction root Security credentials evidence showed:

- MFA devices: `1`;
- root access keys: `0`;
- no root access key present.

The root session was then exited immediately.

No IAM user was created.

Canonical GC-43A provider state already recorded:

- IAM users: `0`;
- GitHub Environment `aws-nonprod-parser` secrets: none;
- GitHub Environment variables: none;
- routine deployment path uses GitHub OIDC → AWS STS → bounded deploy role.

GC-43C did not modify those identity or GitHub controls.

Evidence:

`communication/evidence/SB-P-1.11-GC-43C/post-correction-root-static-credential-posture.md`

---

## 10. Frozen GC-43 PASS Controls Preserved

No changes were made to:

- exact GitHub OIDC trust;
- GitHub Environment protections or the approved Founder-stage self-review exception;
- positive/negative OIDC assumption behavior;
- deploy-role permission policy;
- deploy-role self-escalation controls;
- `iam:PassRole` allowlist;
- workflow/supply-chain controls;
- non-production account/region/namespace boundaries;
- CloudTrail/STS configuration;
- GitHub Environment secret/variable posture;
- deployment/runtime identity separation.

The correction was limited to one customer-managed permissions-boundary policy version.

---

## 11. Explicit Non-Implementation Confirmation

GC-43C created or modified **none** of the following:

- Lambda function or Lambda Function URL;
- parser S3 ingress bucket;
- Lambda execution role;
- workload role;
- IAM Roles Anywhere trust anchor/profile;
- runtime certificate/private key;
- parser/application code;
- Supabase state or migrations;
- Lovable state;
- deployment/publication;
- production state.

GC-38 was **not reactivated**.

---

## 12. Evidence Package

Created under:

`communication/evidence/SB-P-1.11-GC-43C/`

Files:

- `manifest.md`;
- `aws-runtime-boundary-v2.json`;
- `aws-runtime-boundary-version-evidence.md`;
- `authorization-verification.md`;
- `post-correction-root-static-credential-posture.md`.

The manifest maps the package explicitly to `GC43B-SEC-01 / SEC-GC43-07` and records the simulator limitation without overstating evidence.

---

## 13. Required Independent Next Gate

This Infrastructure report does not close Security and does not reactivate GC-38.

The eligible next gate is only:

**Security & Permissions Architecture — narrow independent re-verification of `SEC-GC43-07 / GC43B-SEC-01`.**

Security must independently inspect the actual corrected policy evidence and determine whether the direct-invocation bypass is structurally closed while all frozen PASS controls remain intact.

---

## 14. Final Disposition

`IAM RUNTIME-BOUNDARY CORRECTION — COMPLETE — READY FOR SECURITY RE-VERIFICATION`
