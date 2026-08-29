# SMART BUSINESS — SECURITY & PERMISSIONS ARCHITECTURE RE-VERIFICATION REPORT

## SB-P-1.11-GC-43B — Post-Evidence Security Re-Verification

**Report ID:** `report1.151`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-43B — Post-Evidence Security Re-Verification`  
**Instruction Executed:** `communication/live/instruction1.141.md`  
**Executing Room:** Security & Permissions Architecture  
**Mode:** READ-ONLY INDEPENDENT SECURITY RE-VERIFICATION  
**AWS / GitHub Mutation Authority:** NONE  
**Application / Parser Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission and Authority

This report resumes the independent GC-43 post-provisioning Security & Permissions Architecture verification after the GC-43A evidence-recovery mission.

The prior `report1.149.md` STOP disposition was not inherited automatically. The underlying canonical provider-derived evidence package was independently inspected and each GC-43 control was reclassified from the evidence itself.

This mission does not reactivate GC-38, does not modify the provisioned boundary, and does not authorize Lambda/parser implementation.

---

## 2. Exact Canonical `main` SHA Reviewed

Exact merged `main` reviewed:

`e17c75295b5832931e1eb8e6caf89c14659afffa`

This baseline contains merged `instruction1.141.md`, the GC-43A evidence package, `report1.150.md`, the prior GC-43 record, and the current GC-42A verification workflows.

---

## 3. Canonical Evidence Inspected

Security independently inspected:

- `communication/live/instruction1.139.md`;
- `communication/live/report1.149.md`;
- `communication/live/instruction1.140.md`;
- `communication/live/report1.150.md`;
- `communication/live/report1.147.md` for context only, not as proof;
- `communication/evidence/SB-P-1.11-GC-43A/manifest.md`;
- `communication/evidence/SB-P-1.11-GC-43A/aws-deploy-role-trust.json`;
- `communication/evidence/SB-P-1.11-GC-43A/aws-deploy-policy.json`;
- `communication/evidence/SB-P-1.11-GC-43A/aws-runtime-boundary.json`;
- `communication/evidence/SB-P-1.11-GC-43A/provider-state-summary.md`;
- `communication/evidence/SB-P-1.11-GC-43A/aws-policy-simulator.md`;
- `communication/evidence/SB-P-1.11-GC-43A/aws-cloudtrail-sts.md`;
- `.github/workflows/aws-gc42-oidc-claims.yml`;
- `.github/workflows/aws-gc42-role-assumption-verification.yml`.

Current AWS Lambda Function URL authorization documentation was also rechecked because the interaction between `lambda:InvokeFunction`, `lambda:InvokeFunctionUrl`, and `lambda:InvokedViaFunctionUrl` is load-bearing to the locked runtime boundary.

---

## 4. Evidence Standard

Classifications in this report mean:

- **PASS** — the canonical evidence is sufficient to establish the required security property;
- **FAIL** — the inspected provisioned policy/evidence contains a direct load-bearing security incompatibility;
- **NOT VERIFIED** — evidence remains insufficient to reach a reliable conclusion without mutation or stronger read-only evidence.

Provider-derived structured JSON and sanitized provider-state records are treated as direct evidence for this gate because they were captured under the separately authorized read-only GC-43A evidence-recovery mission and preserved canonically for independent specialist inspection.

---

# CONTROL-BY-CONTROL RE-VERIFICATION

## 5. SEC-GC43-01 — Exact GitHub OIDC Trust

**Classification: PASS.**

### Evidence inspected

`aws-deploy-role-trust.json`.

### Finding

The captured trust policy contains one statement only and is fail-closed to:

- federated provider `arn:aws:iam::658980433673:oidc-provider/token.actions.githubusercontent.com`;
- action `sts:AssumeRoleWithWebIdentity` only;
- `aud = sts.amazonaws.com`;
- `sub = repo:SmartBusinessv1/smart-business:environment:aws-nonprod-parser`;
- `repository = SmartBusinessv1/smart-business`;
- `repository_id = 1287523579`;
- `repository_owner_id = 298686418`;
- `environment = aws-nonprod-parser`;
- `ref = refs/heads/main`.

No wildcard, owner-wide, repository-wide, arbitrary-ref, fork, PR, or fallback trust statement appears in the captured policy.

No defect identified.

---

## 6. SEC-GC43-02 — GitHub Environment Protections

**Classification: PASS.**

### Evidence inspected

`provider-state-summary.md` and canonical credential-bearing workflow.

### Finding

Provider-state evidence records:

- environment exactly `aws-nonprod-parser`;
- required reviewers enabled;
- reviewer `SmartBusinessv1`;
- `Prevent self-review` OFF, consistent with the already-authorized sole-Founder exception;
- administrator bypass disabled;
- selected branches/tags policy active;
- allowed branch exactly `main`;
- allowed tags `0`;
- environment secrets none;
- environment variables none.

The canonical positive credential path explicitly references this environment.

No defect identified.

---

## 7. SEC-GC43-03 — Positive OIDC Assumption

**Classification: PASS.**

### Evidence inspected

`aws-cloudtrail-sts.md` and `.github/workflows/aws-gc42-role-assumption-verification.yml`.

### Finding

CloudTrail evidence records a successful `AssumeRoleWithWebIdentity` event for:

- subject `repo:SmartBusinessv1/smart-business:environment:aws-nonprod-parser`;
- deploy role `TeamLIPS-SB-NonProd-Parser-DeployRole`;
- account `658980433673`;
- region `ap-south-1`;
- no error.

The canonical workflow requests only a 900-second session, validates the exact account/assumed-role ARN, and uses OIDC rather than static credentials.

No defect identified.

---

## 8. SEC-GC43-04 — Negative OIDC Assumption

**Classification: PASS.**

### Evidence inspected

`aws-cloudtrail-sts.md` and canonical negative-test workflow paths.

### Finding

Provider evidence records both required negative outcomes:

1. missing protected-environment subject:
   `repo:SmartBusinessv1/smart-business:ref:refs/heads/main` → `AccessDenied`, zero referenced resources;
2. non-main subject:
   `repo:SmartBusinessv1/smart-business:ref:refs/heads/mission/SB-P-1.11-GC-42A-assumption-verification` → `AccessDenied`, zero referenced resources.

The current trust JSON contains no broader fallback statement.

No defect identified.

---

## 9. SEC-GC43-05 — Deploy-Role Effective Least Privilege

**Classification: PASS, WITH NON-BLOCKING INVENTORY EVIDENCE LIMITATION.**

### Evidence inspected

`aws-deploy-policy.json`, `provider-state-summary.md`, trust JSON, and runtime-boundary JSON.

### Policy shape

The actual DeployPolicy is bounded to the non-production parser control plane:

- Lambda actions target only `teamlips-sb-np-parser` in `ap-south-1`, account `658980433673`;
- Function URL creation/update has an explicit deny when auth type is not `AWS_IAM`;
- S3 authority targets only `teamlips-sb-np-parser-658980433673-ap-south-1` and its objects;
- log authority targets only the parser log-group namespace, apart from the necessary read-only `DescribeLogGroups` wildcard;
- IAM role creation is limited to the exact Lambda execution role and workload role and requires the approved RuntimeBoundary at creation;
- IAM role-policy management is limited to those two exact runtime roles;
- Roles Anywhere create authority is `Resource: "*"` only for create APIs and is constrained by the exact required request-tag set; inventory list actions are read-only;
- no `AdministratorAccess`, `PowerUserAccess`, `iam:*`, `s3:*`, `lambda:*`, or generic AWS administrator policy appears.

### Residual inline-policy inventory limitation

GC-43A could not capture `ListRolePolicies` API output because CloudShell was unavailable. The provider IAM role page reported `Permissions policies (1)` and displayed exactly one customer-managed policy, `TeamLIPS-SB-NonProd-Parser-DeployPolicy`; no second permission-policy source was displayed.

For this gate, that provider-derived role inventory is sufficient to establish the effective permission inventory to a reasonable independent-review standard. The missing API enumeration is retained as a non-blocking evidence-depth limitation, not a `NOT VERIFIED` result.

### Cross-control note

A separate defect exists in the **runtime maximum-permission boundary**, classified under SEC-GC43-07 below. That defect does not make the deploy role service-wide or administratively broad, so this control remains PASS.

---

## 10. SEC-GC43-06 — Self-Escalation Prevention

**Classification: PASS.**

### Evidence inspected

`aws-deploy-policy.json`, `aws-policy-simulator.md`, and `aws-runtime-boundary.json`.

### Finding

The deploy policy contains no grant allowing self-management of the deploy role or OIDC provider and does not grant arbitrary `sts:AssumeRole`.

Provider-generated IAM Policy Simulator evidence records implicit denial for:

- `iam:UpdateAssumeRolePolicy` on the deploy role;
- `iam:AttachRolePolicy` on the deploy role;
- `iam:PutRolePolicy` on the deploy role;
- `iam:CreateUser`;
- `iam:CreateAccessKey`;
- `iam:UpdateOpenIDConnectProviderThumbprint`;
- `iam:DeleteOpenIDConnectProvider`;
- `iam:CreatePolicyVersion` on the RuntimeBoundary;
- `iam:SetDefaultPolicyVersion` on the RuntimeBoundary;
- self `sts:AssumeRole`;
- arbitrary-role `sts:AssumeRole` pivot.

Role creation is constrained to two exact parser runtime roles and requires the immutable RuntimeBoundary ARN.

No deploy-role self-escalation defect was identified.

---

## 11. SEC-GC43-07 — Runtime Permission Boundary

**Classification: FAIL.**

### Evidence inspected

`aws-runtime-boundary.json`, `aws-deploy-policy.json`, the locked runtime-security boundary inherited through the canonical Lambda Parser EIS, and current AWS Lambda Function URL authorization behavior.

### Positive properties

The RuntimeBoundary correctly denies:

- all `iam:*`;
- Organizations;
- IAM Identity Center related administration;
- account/billing administration;
- `sts:AssumeRole`;
- `sts:AssumeRoleWithWebIdentity`;
- `sts:AssumeRoleWithSAML`.

It restricts S3 and Lambda resources to the exact parser namespace and therefore prevents general account/control-plane escalation.

### Load-bearing defect — direct Lambda invocation remains inside the ceiling

The boundary contains:

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

There is no `lambda:InvokedViaFunctionUrl = true` restriction on this maximum-permission statement.

At the same time, the deploy role has `iam:PutRolePolicy` authority on the exact future workload role:

`TeamLIPS-SB-NonProd-Parser-WorkloadRole`.

A permissions boundary is a maximum-permission ceiling. Because this ceiling permits ordinary `lambda:InvokeFunction`, a later or compromised deployment path can write a workload-role identity policy granting direct Lambda invocation and remain inside the boundary.

That would bypass the accepted runtime rule:

`IAM Roles Anywhere workload identity → AWS_IAM Lambda Function URL`

by permitting the same workload role to invoke Lambda through another invocation method.

Current AWS Lambda documentation confirms that `lambda:InvokedViaFunctionUrl` is the control that restricts `lambda:InvokeFunction` to Function URL calls; without that restriction the principal can invoke through other methods in addition to the Function URL.

### Security impact

This is not merely an implementation-detail preference. The locked runtime model deliberately keeps the external workload caller behind the `AWS_IAM` Function URL boundary. The currently provisioned RuntimeBoundary does not structurally preserve that property as a ceiling.

### Required correction

Mission Control must authorize a bounded IAM correction before GC-38 reactivation eligibility is restored.

The corrected effective maximum-permission design must ensure that the future workload role cannot obtain ordinary direct parser `lambda:InvokeFunction` authority. At minimum, the final authorization path must preserve the equivalent of:

- `lambda:InvokeFunctionUrl` only with `lambda:FunctionUrlAuthType = AWS_IAM`; and
- `lambda:InvokeFunction` only when invocation is via the Function URL (`lambda:InvokedViaFunctionUrl = true`), or an equally strong AWS-supported structure that proves ordinary direct invocation is impossible.

The exact corrected policy must then be independently re-inspected and negatively verified before this item can PASS.

Do not broaden the workload role or replace the locked runtime architecture to resolve this finding.

---

## 12. SEC-GC43-08 — Exact `iam:PassRole`

**Classification: PASS.**

### Evidence inspected

`aws-deploy-policy.json`.

### Finding

Exactly two `iam:PassRole` grants exist:

1. `TeamLIPS-SB-NonProd-Parser-LambdaExecutionRole` only, conditioned on `iam:PassedToService = lambda.amazonaws.com`;
2. `TeamLIPS-SB-NonProd-Parser-WorkloadRole` only, conditioned on `iam:PassedToService = rolesanywhere.amazonaws.com`.

No deploy role, admin role, production role, arbitrary `TeamLIPS-*` role, or unrelated role is passable.

No defect identified.

---

## 13. SEC-GC43-09 — Workflow / Supply-Chain Boundary

**Classification: PASS.**

### Evidence inspected

Both current canonical GC-42A workflows.

### Finding

The credential-bearing verification workflow:

- is `workflow_dispatch` only;
- has repository-level `contents: read`;
- restricts the successful credential path to `refs/heads/main`;
- references `aws-nonprod-parser` explicitly;
- grants `id-token: write` only on OIDC-requiring jobs;
- has no PR or `pull_request_target` trigger;
- checks out no arbitrary source after credentials are acquired;
- uses no third-party GitHub Actions in the credential-bearing path;
- references no static AWS secret;
- performs STS verification only and creates no parser resource.

The OIDC-claims workflow is likewise manually dispatched, environment-gated, and non-mutating.

No defect identified.

---

## 14. SEC-GC43-10 — Non-Production Isolation

**Classification: PASS.**

### Evidence inspected

Trust JSON, DeployPolicy JSON, RuntimeBoundary JSON, CloudTrail evidence, and canonical verification workflow.

### Finding

The boundary consistently uses:

- AWS account `658980433673`;
- region `ap-south-1` for regional parser resources;
- exact non-production names `teamlips-sb-np-parser*` / `TeamLIPS-SB-NonProd-Parser-*`;
- `Environment=nonprod` in Roles Anywhere creation tags;
- exact protected `main`/environment OIDC trust;
- workflow preflight for account, region and `nonprod` environment.

No production resource identifier or reusable production deployment identity is present in the captured boundary.

No defect identified.

---

## 15. SEC-GC43-11 — Static Credential Posture

**Classification: PASS.**

### Evidence inspected

`provider-state-summary.md`, CloudTrail evidence, and canonical workflow source.

### Finding

Provider state records:

- IAM users: `0`;
- root access keys: `0`;
- root MFA devices: `1`;
- GitHub Environment secrets: none;
- GitHub Environment variables: none.

The canonical workflow obtains credentials only through GitHub OIDC → STS and requests a 900-second role session. No static AWS deployment credential is referenced or required.

No defect identified.

---

## 16. SEC-GC43-12 — CloudTrail / STS Auditability

**Classification: PASS.**

### Evidence inspected

`aws-cloudtrail-sts.md`.

### Finding

The provider-derived event set is internally consistent with the trust contract:

- protected environment subject → successful `AssumeRoleWithWebIdentity` into the intended deploy role/account;
- missing-environment subject → `AccessDenied`, zero referenced resources;
- non-main ref subject → `AccessDenied`, zero referenced resources.

No temporary credential values are preserved in the evidence package.

No defect identified.

---

## 17. SEC-GC43-13 — Root Bootstrap Exit

**Classification: PASS.**

### Evidence inspected

`provider-state-summary.md`, canonical workflow, and CloudTrail evidence.

### Finding

Current provider state shows:

- root MFA device present;
- root access keys `0`;
- IAM users `0`.

The observed operational execution path is GitHub OIDC → STS → `TeamLIPS-SB-NonProd-Parser-DeployRole`, not root.

No evidence indicates root remains a steady-state deployment identity.

No defect identified.

---

## 18. SEC-GC43-14 — Deployment vs Runtime Identity Separation

**Classification: PASS.**

### Evidence inspected

Deploy trust/policy JSON, RuntimeBoundary JSON, workflows, provider-state evidence, and repository state.

### Finding

The provisioned deployment identity is:

`GitHub Actions OIDC → TeamLIPS-SB-NonProd-Parser-DeployRole`.

The locked runtime workload identity remains a separate future path:

`IAM Roles Anywhere → workload role → AWS_IAM Lambda Function URL`.

No runtime certificate/private key appears in GitHub/repository evidence and the current workflows do not use the runtime identity.

The SEC-GC43-07 boundary defect weakens one future runtime authorization ceiling but does not collapse the deployment and runtime identities into one principal; therefore this separation control remains PASS.

---

## 19. SEC-GC43-15 — Scope Integrity / No Premature Parser Implementation

**Classification: PASS, WITH DISCLOSED PROVIDER-INVENTORY DEPTH LIMITATION.**

### Evidence inspected

Repository comparison/communication chain, canonical workflows, provider-state package, and the GC-43A no-mutation evidence record.

### Finding

The GC-42/GC-42A repository changes are limited to OIDC verification workflows, CI correction, execution-access evidence and governance artifacts. No parser application code, parser IaC deployment package, Supabase migration, Lovable change, or production deployment artifact was introduced through this chain.

The recovered provider evidence is centered on the execution-access IAM/OIDC boundary and does not contain a complete Lambda/S3/Roles Anywhere inventory API dump. That is an evidence-depth limitation.

However, the authorized GC-42A scope, canonical repository state, provider-state handoff, CloudTrail assumption evidence, and GC-43A read-only capture record remain mutually consistent with the recorded state that GC-42A provisioned only the execution-access boundary and did not implement the parser runtime.

No contradictory evidence or parser implementation artifact was found. For this gate, the combined canonical evidence is sufficient for PASS with the limitation disclosed.

---

# CONTROL MATRIX

## 20. Final GC-43B Matrix

| Control | Classification | Primary independent evidence | Remediation / evidence requirement |
|---|---|---|---|
| SEC-GC43-01 Exact OIDC trust | PASS | Captured trust JSON | None |
| SEC-GC43-02 GitHub Environment protections | PASS | Provider-state summary + workflow | None |
| SEC-GC43-03 Positive OIDC assumption | PASS | CloudTrail + workflow | None |
| SEC-GC43-04 Negative OIDC assumption | PASS | CloudTrail + workflow | None |
| SEC-GC43-05 Deploy-role least privilege | PASS | DeployPolicy JSON + provider policy inventory | Retain non-blocking `ListRolePolicies` evidence limitation |
| SEC-GC43-06 Self-escalation prevention | PASS | DeployPolicy + Policy Simulator | None |
| SEC-GC43-07 Runtime permission boundary | **FAIL** | RuntimeBoundary + DeployPolicy + AWS Function URL authorization contract | Correct direct `lambda:InvokeFunction` ceiling so workload cannot bypass Function URL; independently re-verify |
| SEC-GC43-08 `iam:PassRole` | PASS | DeployPolicy JSON | None |
| SEC-GC43-09 Workflow/supply-chain | PASS | Canonical workflows | None |
| SEC-GC43-10 Non-production isolation | PASS | Policy/trust JSON + workflow + CloudTrail | None |
| SEC-GC43-11 Static credentials | PASS | Provider-state summary + workflow | None |
| SEC-GC43-12 CloudTrail/STS auditability | PASS | CloudTrail evidence | None |
| SEC-GC43-13 Root bootstrap exit | PASS | Provider-state summary + OIDC/STS path | None |
| SEC-GC43-14 Deploy/runtime separation | PASS | Policy/workflow/provider evidence | None |
| SEC-GC43-15 No premature parser implementation | PASS | Repository + evidence chain | Retain provider-inventory depth limitation |

No control remains `NOT VERIFIED` on the current evidence set. One control is a direct security FAIL.

---

## 21. Treatment of Residual Inline-Policy Inventory Limitation

Security explicitly considered the GC-43A limitation that no `ListRolePolicies` API output was captured.

The provider IAM role page reported exactly one permissions policy and displayed `TeamLIPS-SB-NonProd-Parser-DeployPolicy`; no second policy source was shown. The DeployPolicy itself is captured exactly and the simulator results align with its narrow authority.

Security therefore does **not** keep SEC-GC43-05 `NOT VERIFIED` solely because CloudShell was unavailable. The canonical provider UI evidence is sufficient for the current gate.

This conclusion does not weaken the requirement to inspect effective policy again after any corrective IAM change.

---

## 22. Material Security Defect

**Finding ID:** `GC43B-SEC-01`  
**Severity:** HIGH / LOAD-BEARING AUTHORIZATION DEFECT  
**Affected control:** SEC-GC43-07

The actual `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary` permits direct `lambda:InvokeFunction` on the parser function without a Function-URL-only condition. The deploy role can write inline policy on the exact future workload role, so the currently provisioned boundary does not structurally prevent that workload role from later receiving ordinary direct Lambda invocation authority.

This contradicts the accepted runtime security property that the external workload caller reaches the parser through the `AWS_IAM` Function URL and cannot use ordinary direct Lambda invocation as an alternate path.

The defect is bounded: the trust boundary, deploy-role account/service scope, `iam:PassRole`, root/static-credential posture, environment protections, self-escalation probes, and positive/negative OIDC tests remain sound. No broad redesign is required.

---

## 23. Required Corrective Gate

Before GC-38 reactivation may become eligible, Mission Control should issue a narrow Infrastructure/IAM correction authorization limited to the runtime maximum-permission ceiling.

The correction must:

1. preserve the existing OIDC trust, GitHub Environment, deploy role, non-production namespace, exact PassRole allowlist and all current PASS controls;
2. make ordinary direct parser `lambda:InvokeFunction` unavailable to the future workload role;
3. preserve `AWS_IAM` Function URL invocation as the allowed workload path;
4. use an AWS-supported policy structure equivalent in security strength to `lambda:InvokedViaFunctionUrl = true` on the required `lambda:InvokeFunction` permission, or another independently demonstrated structure that makes direct invocation impossible;
5. verify the corrected effective boundary/policy with read-only policy inspection and an appropriate negative authorization test;
6. return the corrected evidence to Security & Permissions Architecture for narrow re-verification.

Do not create the Lambda parser, S3 parser ingress, IAM Roles Anywhere trust anchor/profile, workload certificate/private key, Function URL, Supabase state or parser integration merely to correct this IAM ceiling.

---

## 24. GC-38 Reactivation Eligibility

**Result: NOT ELIGIBLE.**

The prior evidence blocker is substantially resolved, but the fresh evidence reveals an actual load-bearing authorization defect in the provisioned runtime permission boundary.

GC-38 must remain stopped until `GC43B-SEC-01` is corrected under separate Mission Control authority and Security independently confirms the corrected effective boundary.

This report does not reactivate GC-38.

---

## 25. No-Mutation Confirmation

During GC-43B:

- AWS IAM/OIDC/Lambda/S3/Roles Anywhere mutation: **NO**;
- AWS role assumption initiated by this room: **NO**;
- GitHub Environment/ruleset/branch-protection/workflow mutation: **NO**;
- GitHub secret/variable mutation: **NO**;
- deployment or implementation workflow triggered: **NO**;
- Supabase mutation/migration: **NO**;
- Lovable mutation: **NO**;
- parser/application implementation: **NO**;
- deployment/publication: **NO**;
- production state touched: **NO**.

No credential, access key, session token, certificate, private key or secret was created, requested, exposed or handled by this review.

The only repository artifact created by this mission is:

`communication/live/report1.151.md`

---

## 26. Final Disposition

`AWS EXECUTION-ACCESS POST-PROVISIONING SECURITY VERIFICATION — CORRECTION REQUIRED`

Reason:

The GC-43A evidence package closes the previous provider-state evidence gap and supports PASS across the OIDC trust, environment, assumption, deploy-role, self-escalation, PassRole, non-production, credential, audit, root and workflow controls. Independent inspection of the actual RuntimeBoundary, however, identifies a direct Function-URL-bypass authorization path inside the maximum-permission ceiling.

Human review and merge are required. No self-merge.
