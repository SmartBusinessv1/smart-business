# SMART BUSINESS — SECURITY & PERMISSIONS ARCHITECTURE RE-VERIFICATION REPORT

## SB-P-1.11-GC-43D — Single-Control Security Re-Verification

**Report ID:** `report1.153`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-43D — Single-Control Security Re-Verification`  
**Instruction Executed:** `communication/live/instruction1.143.md`  
**Executing Room:** Security & Permissions Architecture  
**Mode:** READ-ONLY INDEPENDENT SECURITY RE-VERIFICATION  
**Affected Control:** `SEC-GC43-07 — Runtime Permission Boundary`  
**Affected Finding:** `GC43B-SEC-01`  
**AWS / GitHub Mutation Authority:** NONE  
**Application / Parser Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission and Scope

This report executes merged `communication/live/instruction1.143.md` and independently re-verifies only:

`SEC-GC43-07 / GC43B-SEC-01`

The purpose is to determine whether the GC-43C RuntimeBoundary correction structurally closes the direct Lambda invocation bypass identified in `communication/live/report1.151.md`.

This is intentionally not a full GC-43 re-review. Previously passing GC-43 controls remain inherited PASS unless the GC-43C correction materially changed their underlying state.

This report does not reactivate GC-38 and does not authorize Lambda/parser implementation.

---

## 2. Exact Canonical `main` SHA Reviewed

Exact latest merged `main` reviewed:

`f01e6455137e664602c05cbbafaefed0150a72ea`

The review was performed from the canonical state containing merged `instruction1.143.md`, `report1.152.md`, and the complete GC-43C evidence package.

---

## 3. Evidence Inspected

The following canonical evidence was independently inspected:

- `communication/live/instruction1.143.md`;
- `communication/live/report1.152.md`;
- `communication/evidence/SB-P-1.11-GC-43A/aws-runtime-boundary.json` — pre-correction Version 1 policy;
- `communication/evidence/SB-P-1.11-GC-43C/manifest.md`;
- `communication/evidence/SB-P-1.11-GC-43C/aws-runtime-boundary-v2.json`;
- `communication/evidence/SB-P-1.11-GC-43C/aws-runtime-boundary-version-evidence.md`;
- `communication/evidence/SB-P-1.11-GC-43C/authorization-verification.md`;
- `communication/evidence/SB-P-1.11-GC-43C/post-correction-root-static-credential-posture.md`;
- current official AWS IAM permissions-boundary documentation;
- current official AWS Lambda Function URL authorization documentation and Lambda condition-key reference.

`report1.152.md` was used as context only. The Security classification below is based on the underlying evidence and AWS policy semantics.

---

## 4. Version 1 → Version 2 Semantic Comparison

### 4.1 Version 1 defect

The pre-correction RuntimeBoundary contained:

- `lambda:InvokeFunctionUrl` on the exact parser Lambda namespace with `lambda:FunctionUrlAuthType = AWS_IAM`;
- a separate unconditional `lambda:InvokeFunction` Allow on the same exact parser Lambda namespace.

That unconditional `lambda:InvokeFunction` statement meant the boundary itself did not enforce Function-URL-only invocation for a future workload role.

### 4.2 Version 2 correction

The corrected Version 2 policy preserves the exact parser Lambda resource scope and the existing `lambda:InvokeFunctionUrl` statement, but changes the ordinary invocation statement to:

- Action: `lambda:InvokeFunction`;
- Resource: exact non-production parser Lambda ARN and qualified ARN namespace only;
- Condition: `Bool` → `lambda:InvokedViaFunctionUrl = true`.

No second unconditional `lambda:InvokeFunction` Allow exists in Version 2.

No broader Lambda resource wildcard is present.

No alternate statement in the captured boundary grants parser invocation outside these two conditioned paths.

### 4.3 Version/default state

Provider-derived evidence records:

- Version 2 is the current default;
- Version 1 remains present but is no longer default;
- the effective Version 2 JSON matches the recorded semantic correction.

The evidence is internally consistent.

---

## 5. Q1 — Direct Invocation Ceiling

**Answer: YES.**

The corrected Version 2 boundary makes ordinary direct parser `lambda:InvokeFunction` unavailable when `lambda:InvokedViaFunctionUrl` is absent or false.

Reason:

1. the boundary contains no unconditional `lambda:InvokeFunction` Allow;
2. the only `lambda:InvokeFunction` Allow requires `lambda:InvokedViaFunctionUrl = true`;
3. AWS defines a permissions boundary as the maximum permission envelope for the IAM entity; effective identity permission is limited to the intersection of the identity policy and the boundary;
4. AWS documents `lambda:InvokedViaFunctionUrl` as the condition key that restricts `lambda:InvokeFunction` to calls made through a Function URL.

Therefore, even if a future workload-role identity policy attempted to grant ordinary direct `lambda:InvokeFunction`, that grant would not become effective through this boundary when the request is not a Function URL invocation.

**Security result for Q1: PASS.**

---

## 6. Q2 — Function URL Path

**Answer: YES.**

The corrected boundary still represents the required `AWS_IAM` Function URL authorization shape:

1. `lambda:InvokeFunctionUrl` is allowed only when `lambda:FunctionUrlAuthType = AWS_IAM`;
2. `lambda:InvokeFunction` is allowed only when `lambda:InvokedViaFunctionUrl = true`.

AWS documentation confirms an `AWS_IAM` Function URL invocation requires both invocation permissions and that the latter condition is the mechanism used to keep `lambda:InvokeFunction` limited to the Function URL path.

**Security result for Q2: PASS.**

---

## 7. Q3 — Resource Scope

**Answer: YES.**

Both Lambda invocation permissions remain limited to:

- `arn:aws:lambda:ap-south-1:658980433673:function:teamlips-sb-np-parser`;
- `arn:aws:lambda:ap-south-1:658980433673:function:teamlips-sb-np-parser:*`.

This preserves:

- AWS account `658980433673`;
- region `ap-south-1`;
- the exact non-production parser Lambda namespace.

There is no `Resource: "*"` Lambda invocation Allow.

**Security result for Q3: PASS.**

---

## 8. Q4 — No Alternate Bypass

**Answer: NO ALTERNATE BYPASS FOUND WITHIN THE CORRECTED BOUNDARY.**

The Version 2 policy was inspected as a complete policy document.

No alternate unconditional or broader `lambda:InvokeFunction` Allow exists.

No wildcard Lambda invocation resource exists.

The other Allow statements concern only:

- exact parser S3 object lifecycle;
- exact parser logging;
- the conditioned Function URL invocation path.

The explicit control-plane deny remains present.

Within the permissions-boundary ceiling under review, no alternate statement reintroduces the GC43B-SEC-01 direct-invocation path.

**Security result for Q4: PASS.**

---

## 9. Q5 — Boundary Immutability

**Answer: YES — PREVIOUSLY VERIFIED PROPERTY REMAINS SUPPORTED.**

GC-43C did not modify the deploy-role policy.

Prior canonical provider-generated IAM Policy Simulator evidence established the deploy role is denied:

- `iam:CreatePolicyVersion` on `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`;
- `iam:SetDefaultPolicyVersion` on that boundary.

The GC-43C correction itself required the separately authorized one-time Founder root+MFA path precisely because the deploy role could not promote a boundary version.

No evidence in GC-43C indicates the deploy role gained boundary-mutation authority.

**Security result for Q5: PASS.**

---

## 10. Q6 — Scope Preservation

**Answer: YES.**

The evidence package records that only the RuntimeBoundary policy version was changed.

No evidence shows a GC-43C change to:

- GitHub OIDC trust;
- GitHub Environment protections;
- deploy-role permission policy;
- `iam:PassRole`;
- non-production account/region/resource namespace;
- workflow/supply-chain controls;
- IAM users;
- static AWS credentials;
- Lambda/parser resources;
- S3 parser ingress resources;
- IAM Roles Anywhere runtime resources;
- Supabase;
- Lovable;
- deployment/publication;
- production state.

Post-correction provider evidence further records one root MFA device, zero root access keys, immediate exit of the exceptional root session, and no IAM user or long-lived credential introduced.

No correction-induced contradiction was found against any previously passing GC-43 control.

**Security result for Q6: PASS.**

---

## 11. Q7 — Evidence Sufficiency Without a New Simulator Run

**Answer: YES.**

A new post-correction IAM Policy Simulator run is not required to close this specific finding.

The security question is structural and is directly answerable from:

1. provider-derived complete Version 2 policy JSON;
2. provider-derived evidence that Version 2 is the current default;
3. exact Version 1 → Version 2 semantic comparison;
4. AWS permissions-boundary intersection semantics;
5. AWS Lambda documentation for `lambda:InvokedViaFunctionUrl`.

The missing simulator run does not leave a material ambiguity about whether the corrected boundary contains an unconditional direct invocation Allow; the complete default policy JSON proves that it does not.

Reopening root solely for a simulator run, creating an IAM user, or broadening the deploy role would weaken the operating model for no material gain in this narrow gate.

**Security result for Q7: PASS.**

---

## 12. Single-Control Classification

### `SEC-GC43-07 / GC43B-SEC-01`

**Classification: PASS.**

The corrected RuntimeBoundary Version 2 closes the defect recorded in GC-43B:

- ordinary direct `lambda:InvokeFunction` is outside the boundary ceiling unless the request context indicates Function URL invocation;
- the approved `AWS_IAM` Function URL path remains represented;
- exact non-production parser resource scope is preserved;
- no alternate Lambda invocation Allow reintroduces the bypass;
- deploy-role boundary immutability remains supported;
- no adjacent previously passing control was materially changed.

`GC43B-SEC-01` is therefore **CLOSED** by the corrected provider-derived policy evidence.

---

## 13. Previously Passing GC-43 Controls

All previously passing GC-43 controls remain **INHERITED PASS / NOT REOPENED**.

Reason:

The GC-43C evidence shows the authorized correction was confined to the RuntimeBoundary policy version and did not materially alter the trust, environment, deploy-role, PassRole, static-credential, workflow, non-production, audit, parser-resource, Supabase, Lovable, deployment, or production boundaries.

No correction-induced contradiction was identified.

---

## 14. Remaining Security Blocker

Within the scope of `SEC-GC43-07 / GC43B-SEC-01`:

**None.**

This result does not itself prove later Lambda/parser implementation correctness and does not replace the later runtime verification obligations of the locked Lambda Parser EIS.

---

## 15. No-Mutation Confirmation

During GC-43D Security re-verification:

- AWS IAM/resource mutation: **NO**;
- AWS role assumption initiated by this room: **NO**;
- AWS root session opened by this room: **NO**;
- GitHub Environment/protection/workflow mutation: **NO**;
- GitHub secret/variable mutation: **NO**;
- workflow execution triggered by this room: **NO**;
- Supabase mutation/migration: **NO**;
- Lovable mutation: **NO**;
- parser/application implementation: **NO**;
- deployment/publication: **NO**;
- production state touched: **NO**;
- credential/key/token/certificate/secret created or handled: **NO**.

The only repository artifact created by this mission is:

`communication/live/report1.153.md`

---

## 16. Final Disposition

`AWS EXECUTION-ACCESS RUNTIME-BOUNDARY SECURITY RE-VERIFICATION — PASS — GC-38 REACTIVATION DECISION ELIGIBLE`

This PASS means only that Mission Control may consider a separate explicit GC-38 reactivation authorization after human review and merge of this report.

GC-38 is not reactivated by this report. No Lambda/parser implementation authority is granted.
