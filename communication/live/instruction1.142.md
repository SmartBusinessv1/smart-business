# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-43C — NARROW IAM RUNTIME-BOUNDARY CORRECTION

**Instruction ID:** `instruction1.142`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-43C — Runtime-Boundary Correction`  
**Executing Room:** Infrastructure Operations  
**Downstream Verifier:** Security & Permissions Architecture  
**Authorized By:** Founder / Mission Control  
**Mode:** SINGLE-CONTROL AWS IAM CORRECTION + VERIFICATION EVIDENCE  
**Affected Security Control:** `SEC-GC43-07 — Runtime Permission Boundary`  
**Parser / Application Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Correct only the load-bearing authorization defect recorded in merged:

`communication/live/report1.151.md`

Finding:

`GC43B-SEC-01`

The actual customer-managed permission boundary:

`TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`

currently permits ordinary:

`lambda:InvokeFunction`

on the parser Lambda namespace without structurally restricting that permission to invocation through the approved `AWS_IAM` Lambda Function URL path.

Because the deploy role is authorized to manage inline policies on the exact future parser workload role, the current maximum-permission ceiling could permit that role to later receive ordinary direct Lambda invocation authority while still remaining inside the boundary.

The correction must remove that bypass possibility without redesigning the accepted runtime architecture.

Required completion report:

`communication/live/report1.152.md`

A positive Infrastructure report does not close Security. Independent Security re-verification remains mandatory.

GC-38 remains stopped throughout this mission.

---

## 2. Canonical Entry State

Execute only after this instruction is human-reviewed and merged to `main`.

Canonical baseline when this authorization was prepared:

`dfc8ef3addecf5c64c4a500895af93be00d5ad74`

Commit:

`SB-P-1.11-GC-43B: record post-evidence security re-verification (#326)`

Before any provider mutation, read at minimum:

1. `communication/live/report1.151.md`;
2. `communication/live/instruction1.141.md`;
3. `communication/evidence/SB-P-1.11-GC-43A/aws-runtime-boundary.json`;
4. `communication/evidence/SB-P-1.11-GC-43A/aws-deploy-policy.json`;
5. `communication/evidence/SB-P-1.11-GC-43A/aws-deploy-role-trust.json`;
6. `communication/evidence/SB-P-1.11-GC-43A/provider-state-summary.md`;
7. `communication/live/report1.147.md`;
8. `communication/live/report1.145.md`;
9. the locked Lambda Parser EIS/runtime-security requirements referenced by `report1.151.md`;
10. current canonical AWS Lambda Function URL authorization documentation if needed to confirm exact condition-key behavior before applying the policy.

---

## 3. Frozen PASS Controls

GC-43B independently classified all controls other than `SEC-GC43-07` as PASS.

This correction must preserve those passing properties unchanged, including:

- exact GitHub OIDC trust;
- `aws-nonprod-parser` GitHub Environment protections and approved Founder-stage self-review exception;
- positive and negative OIDC assumption behavior;
- deploy-role least privilege;
- deploy-role self-escalation prevention;
- exact `iam:PassRole` allowlist;
- workflow/supply-chain controls;
- non-production account/region/namespace isolation;
- no static AWS deployment credentials;
- CloudTrail/STS auditability;
- root MFA/no-root-access-key posture;
- deployment/runtime identity separation;
- no premature parser implementation.

Do not reopen or redesign these controls unless the exact boundary correction unexpectedly proves impossible without affecting one of them. If that occurs, STOP and return to Mission Control.

---

## 4. Exact Authorized AWS Mutation

The only AWS authorization-policy mutation approved by this mission is to the customer-managed policy:

`TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`

ARN:

`arn:aws:iam::658980433673:policy/TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`

The correction must preserve the existing parser-function resource restriction and change the maximum-permission treatment of `lambda:InvokeFunction` so ordinary direct invocation is not within the allowed ceiling.

The corrected effective boundary must preserve the security equivalent of both of the following properties:

1. `lambda:InvokeFunctionUrl` is allowed only for the exact parser Lambda namespace when:

   `lambda:FunctionUrlAuthType = AWS_IAM`

2. `lambda:InvokeFunction` is allowed only when the invocation occurs through the Lambda Function URL path, using the AWS-supported condition:

   `lambda:InvokedViaFunctionUrl = true`

or an equally strong AWS-supported structure independently shown to make ordinary direct Lambda invocation impossible.

### Preferred narrow correction

Unless current AWS documentation proves a different shape is required, replace the current unrestricted statement equivalent to:

```json
{
  "Sid": "AllowExactParserFunctionInvocation",
  "Effect": "Allow",
  "Action": "lambda:InvokeFunction",
  "Resource": [
    "arn:aws:lambda:ap-south-1:658980433673:function:teamlips-sb-np-parser",
    "arn:aws:lambda:ap-south-1:658980433673:function:teamlips-sb-np-parser:*"
  ]
}
```

with a statement equivalent to:

```json
{
  "Sid": "AllowExactParserFunctionInvocationViaFunctionUrlOnly",
  "Effect": "Allow",
  "Action": "lambda:InvokeFunction",
  "Resource": [
    "arn:aws:lambda:ap-south-1:658980433673:function:teamlips-sb-np-parser",
    "arn:aws:lambda:ap-south-1:658980433673:function:teamlips-sb-np-parser:*"
  ],
  "Condition": {
    "Bool": {
      "lambda:InvokedViaFunctionUrl": "true"
    }
  }
}
```

Do not broaden Lambda resources, services, regions, accounts, role names, or condition scope.

Do not remove the existing `AWS_IAM` protection on `lambda:InvokeFunctionUrl`.

---

## 5. Boundary Versioning / One-Time Founder Root Authority

The already-provisioned deploy role is intentionally not authorized to create or promote versions of the runtime boundary policy. That remains a PASS security property and must not be weakened merely to perform this correction.

Therefore, if the current provider state confirms that no existing non-root authorized identity can make this exact policy-version correction without broadening privileges, this mission authorizes a **one-time Founder-controlled root console session with MFA** solely to:

1. open the exact customer-managed policy `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`;
2. create a corrected new policy version containing only the approved boundary correction;
3. set that corrected version as the default version;
4. verify the new default policy document/version;
5. exit the root session immediately after the correction/evidence capture.

This exceptional root use is authorized only because the deliberately fail-closed deploy role cannot mutate the boundary policy itself.

It does not reopen routine root administration.

### Explicit root prohibitions

Do not:

- create a root access key;
- create an IAM user merely to perform the correction;
- create or store any long-lived credential;
- alter root MFA;
- change account, billing, Organizations, Identity Center, or unrelated IAM state;
- modify the deploy role, OIDC provider, GitHub Environment, or `iam:PassRole`;
- leave root as a steady-state execution identity.

If the exact correction cannot be completed through a narrowly bounded Founder/root MFA session without additional privilege changes, STOP.

---

## 6. Required Post-Correction Verification

After the boundary correction, Infrastructure Operations must collect sanitized provider-derived read-only evidence sufficient for downstream Security to verify the exact effective result.

At minimum capture:

### 6.1 Current boundary policy

- policy ARN;
- new default policy-version identifier;
- complete corrected default policy JSON;
- confirmation old version is no longer default;
- confirmation only the intended semantic correction occurred.

### 6.2 Direct invocation must be outside the ceiling

Use AWS IAM Policy Simulator or another AWS-supported read-only authorization simulator where practical.

Demonstrate that a hypothetical/future parser workload-role identity policy granting ordinary direct:

`lambda:InvokeFunction`

on:

`arn:aws:lambda:ap-south-1:658980433673:function:teamlips-sb-np-parser`

cannot produce effective permission when the invocation context does not assert Function URL invocation.

The negative verification must not create the workload role or invoke Lambda merely to prove denial.

### 6.3 Function URL path remains representable inside the ceiling

Where the simulator supports the required Lambda context keys, demonstrate that the boundary permits the approved Function URL invocation conditions only when the relevant context indicates:

- `lambda:FunctionUrlAuthType = AWS_IAM`; and
- `lambda:InvokedViaFunctionUrl = true` for `lambda:InvokeFunction`.

If the AWS Policy Simulator cannot model one of these service-specific context keys accurately, do not fabricate a PASS. Preserve the corrected policy JSON and document the simulator limitation precisely for Security.

### 6.4 Boundary immutability from deploy role remains intact

Reconfirm, by current policy inspection and/or read-only Policy Simulator, that:

- `iam:CreatePolicyVersion` on `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary` remains denied to the deploy role;
- `iam:SetDefaultPolicyVersion` remains denied to the deploy role;
- no new permission source was added to the deploy role to perform this correction.

### 6.5 Root exit/static-credential posture

After the correction, verify:

- root session exited;
- root access keys remain `0`;
- IAM users remain `0` unless canonical state already changed under unrelated authorized work;
- GitHub Environment AWS static secrets remain absent;
- routine deployment remains GitHub OIDC → STS → bounded deploy role.

---

## 7. Evidence Packaging

Create a dedicated correction-evidence location:

`communication/evidence/SB-P-1.11-GC-43C/`

At minimum include:

- `manifest.md`;
- corrected runtime-boundary JSON;
- sanitized policy-version/default-version evidence;
- sanitized Policy Simulator / authorization-test evidence;
- sanitized post-correction root/static-credential posture evidence.

The manifest must map evidence explicitly to:

`GC43B-SEC-01 / SEC-GC43-07`.

Do not commit secrets, access-key IDs, temporary credentials, OIDC/JWT tokens, session tokens, private keys, MFA identifiers, source IPs, cookies, account email, payment data, PAN data, or unrelated personal/account metadata.

---

## 8. Explicitly Not Authorized

This mission does **not** authorize:

- changing the deploy-role trust policy;
- changing GitHub OIDC provider configuration;
- changing GitHub Environment reviewers/protections/branch/tag rules;
- changing the deploy-role permission policy except if a read-only comparison artifact is needed;
- changing `iam:PassRole`;
- broadening runtime-role names or namespaces;
- creating Lambda parser resources;
- creating the parser S3 ingress bucket;
- creating IAM Roles Anywhere trust anchors/profiles;
- creating runtime X.509 certificates/private keys;
- creating a Lambda Function URL;
- creating the future workload role merely for testing;
- parser/application implementation;
- Supabase mutation or production migrations;
- Lovable mutation;
- deployment/publication;
- production action;
- Stage 21+ progression;
- GC-38 reactivation.

Do not use parser implementation as a way to test this boundary correction.

---

## 9. Stop Conditions

STOP and return to Mission Control if:

- current AWS documentation shows the proposed `lambda:InvokedViaFunctionUrl` structure is invalid or insufficient for the required security property;
- the exact boundary cannot be corrected without changing a currently passing GC-43 control;
- the provider requires creation of a long-lived credential or IAM user;
- the correction would require broadening deploy-role authority to mutate its own boundary-control policy;
- the exact policy/resource inspected differs materially from canonical evidence;
- unexpected policies, principals, versions, roles, or production identifiers are discovered;
- read-only verification indicates ordinary direct Lambda invocation remains within the boundary ceiling;
- evidence capture would expose secrets or sensitive credential material;
- any parser/runtime implementation would be required to complete the verification.

Do not improvise around a stop condition.

---

## 10. Required Completion Report

Infrastructure Operations shall produce:

`communication/live/report1.152.md`

The report must state:

- exact instruction executed;
- exact canonical `main` SHA used;
- exact pre-correction boundary version/default version;
- exact post-correction boundary version/default version;
- exact semantic policy change;
- whether one-time Founder root+MFA authority was used;
- confirmation no root access key or IAM user was created;
- provider-derived evidence files created;
- negative direct-invocation verification result;
- Function URL condition verification result or exact simulator limitation;
- confirmation deploy role still cannot mutate/promote the boundary;
- confirmation all other GC-43 PASS controls were preserved;
- confirmation no Lambda/S3/Roles Anywhere/parser/Supabase/Lovable/production implementation occurred;
- final disposition.

Allowed final dispositions:

- `IAM RUNTIME-BOUNDARY CORRECTION — COMPLETE — READY FOR SECURITY RE-VERIFICATION`
- `IAM RUNTIME-BOUNDARY CORRECTION — PARTIAL — ADDITIONAL VERIFICATION REQUIRED`
- `IAM RUNTIME-BOUNDARY CORRECTION — STOPPED — SECURITY OR PROVIDER BLOCKER`

The report must be submitted through a dedicated human-reviewed PR.

No self-merge.

---

## 11. Next Gate

A positive merged `report1.152.md` does not reactivate GC-38.

It only makes a **narrow independent Security & Permissions Architecture re-verification of `SEC-GC43-07 / GC43B-SEC-01`** eligible.

Security must inspect the corrected actual policy/evidence and determine whether the direct-invocation bypass is structurally closed while the existing PASS controls remain intact.

Only after that independent Security result is positive and human-merged may Mission Control consider a separate explicit GC-38 reactivation authorization.

---

## 12. Mission Control Decision

`SB-P-1.11-GC-43C — NARROW IAM RUNTIME-BOUNDARY CORRECTION AUTHORIZED AFTER HUMAN MERGE`
