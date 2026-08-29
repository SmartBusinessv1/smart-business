# SMART BUSINESS — INFRASTRUCTURE OPERATIONS REPORT

## SB-P-1.11-GC-42A — AWS Execution-Access Provisioning Continuation

**Report ID:** `report1.147`  
**Instruction Executed:** `communication/live/instruction1.137.md`  
**Executing Room:** Infrastructure Operations  
**Mode:** CONTINUED NON-PRODUCTION EXECUTION-ACCESS PROVISIONING + EVIDENCE  
**Lambda / Parser Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Exact Canonical Main Used

Exact merged `main` at final verification:

`9bf616a9091a18fba4209812a1f535d884b576e6`

Commit:

`SB-P-1.11-GC-42A: add role assumption verification workflow (#319)`

This execution continued the previously provisioned GC-42 state recorded in `report1.146.md`; existing bootstrap resources were verified and reused rather than recreated.

---

## 2. Preserved Existing State

The continuation preserved the following established state:

- approved AWS account: `658980433673`;
- environment classification: `nonprod`;
- AWS resource region: `ap-south-1`;
- AWS GitHub Actions OIDC provider exists;
- issuer: `token.actions.githubusercontent.com`;
- audience: `sts.amazonaws.com`;
- GitHub Environment: `aws-nonprod-parser`;
- no static AWS deployment credential exists;
- no Lambda parser function exists;
- no parser-ingress S3 bucket/object exists;
- no IAM Roles Anywhere trust anchor/profile exists;
- no workload X.509 certificate/private key exists;
- no Lambda Function URL exists;
- no Supabase, Lovable, application, parser, deployment, publication, or production mutation was performed by GC-42A.

---

## 3. Founder-Stage GitHub Environment Controls

GitHub Environment `aws-nonprod-parser` was verified/configured as follows:

- required reviewer: GitHub account `SmartBusinessv1`, operated by Founder Riyas PK;
- `Prevent self-review`: OFF only under the explicit Founder-stage exception authorized by `instruction1.137.md`;
- administrator bypass: DISABLED;
- deployment branches/tags: selected branches and tags only;
- allowed branch: `main` only;
- allowed tags: none;
- environment secrets: none.

The Founder-stage self-review exception was applied narrowly; all remaining GC-41 controls were preserved.

---

## 4. Deploy Role Provisioned

Created bounded non-production deployment role:

`TeamLIPS-SB-NonProd-Parser-DeployRole`

ARN:

`arn:aws:iam::658980433673:role/TeamLIPS-SB-NonProd-Parser-DeployRole`

Role properties verified:

- one attached customer-managed permission policy only:
  `TeamLIPS-SB-NonProd-Parser-DeployPolicy`;
- deploy-role permissions boundary: not set;
- maximum session duration: 1 hour;
- no static access key is associated with the role;
- role is assumed only through the reviewed GitHub OIDC trust path.

---

## 5. Exact OIDC Trust Boundary

The deploy-role trust policy was provisioned with:

- federated principal:
  `arn:aws:iam::658980433673:oidc-provider/token.actions.githubusercontent.com`;
- action:
  `sts:AssumeRoleWithWebIdentity`;
- audience:
  `sts.amazonaws.com`;
- exact subject:
  `repo:SmartBusinessv1/smart-business:environment:aws-nonprod-parser`;
- exact repository:
  `SmartBusinessv1/smart-business`;
- exact repository ID:
  `1287523579`;
- exact repository owner ID:
  `298686418`;
- exact environment:
  `aws-nonprod-parser`;
- exact ref:
  `refs/heads/main`.

Sanitized emitted GitHub OIDC claim inspection confirmed the environment-bearing subject exactly matched:

`repo:SmartBusinessv1/smart-business:environment:aws-nonprod-parser`

No owner-wide, repository-wide, arbitrary-ref, feature-branch, fork, PR, or wildcard trust was introduced.

---

## 6. Deploy Permission Policy Summary

Created customer-managed policy:

`TeamLIPS-SB-NonProd-Parser-DeployPolicy`

The policy is bounded to the Smart Business non-production parser control plane and was constructed around the approved namespaces/account/region rather than service-wide administration.

Key characteristics verified during provisioning:

- Lambda authority limited to the approved parser function namespace and required lifecycle/configuration actions;
- transient parser-ingress S3 authority limited to the approved non-production bucket namespace and required configuration/object-verification paths;
- CloudWatch Logs authority limited to the parser log-group namespace;
- IAM authority limited to approved parser runtime-role/policy paths;
- `iam:PassRole` restricted to approved parser runtime role/service relationships rather than arbitrary roles;
- runtime-role creation requires the approved runtime permission boundary;
- no `AdministratorAccess`, `PowerUserAccess`, `iam:*`, `s3:*`, `lambda:*`, or equivalent broad AWS managed administrative policy was attached;
- explicit deny/structural exclusions prevent deploy-role self-administration and unrelated control-plane escalation.

---

## 7. Runtime Permission Boundary

Created customer-managed runtime maximum-permission boundary:

`TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`

ARN:

`arn:aws:iam::658980433673:policy/TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`

The policy is deliberately a ceiling, not a grant.

Verified characteristics:

- parser-runtime permissions only;
- no IAM identity/federation administration;
- no deploy-role administration;
- no OIDC-provider administration;
- no arbitrary `sts:AssumeRole` path;
- no Organizations, Identity Center, account, billing, or root administration;
- no unrelated production or account-wide control-plane authority;
- deploy role cannot create/promote policy versions of this boundary.

The boundary remains outside the deploy role's mutable administrative authority.

---

## 8. `iam:PassRole` Boundary

The deploy policy was provisioned so `iam:PassRole` is not open-ended.

The approved boundary is limited to the exact parser runtime role/use path required by the locked architecture and constrained to the intended AWS service principal(s), including the Lambda execution and IAM Roles Anywhere workload paths where applicable.

No deploy role, future production role, account-admin role, arbitrary `TeamLIPS-*` role, or unrelated role is passable under this GC-42A boundary.

---

## 9. Verification-Only Repository Workflow

Canonical workflow merged through PR `#319`:

`.github/workflows/aws-gc42-role-assumption-verification.yml`

Workflow properties:

- trigger: `workflow_dispatch` only;
- repository-level permissions: `contents: read`;
- `id-token: write` appears only on jobs that require an OIDC token;
- intended positive job runs only when `github.ref == refs/heads/main`;
- intended positive job references environment `aws-nonprod-parser`;
- environment approval therefore gates the successful credential-bearing path;
- no AWS static secret is referenced;
- no third-party action is used in the credential-bearing path;
- no arbitrary ref checkout/execute occurs after AWS credentials are acquired;
- workflow performs verification only and contains no Lambda/S3/parser resource mutation.

The workflow uses shell, GitHub's native OIDC request variables, AWS CLI/STS, and Python JSON parsing available on the GitHub-hosted runner; therefore no third-party action pinning exception exists because no third-party action is used.

---

## 10. Account / Region / Non-Production Preflight

The successful `main` run enforced fail-closed preflight checks for:

- ref = `refs/heads/main`;
- account expectation = `658980433673`;
- region = `ap-south-1`;
- environment = `nonprod`.

After short-lived OIDC role assumption, `sts:GetCallerIdentity` verified:

- account = `658980433673`;
- caller ARN matched:
  `arn:aws:sts::658980433673:assumed-role/TeamLIPS-SB-NonProd-Parser-DeployRole/*`.

The verification workflow performed no AWS mutation after preflight.

---

## 11. Intended OIDC Assumption — PASS

GitHub Actions run `GC-42 AWS Role Assumption Verification #1` was manually dispatched from canonical `main` and paused for explicit Founder approval to environment `aws-nonprod-parser`.

After Founder approval:

- `Intended main/environment OIDC assumption` — PASS;
- `Reject token without required environment subject` — PASS;
- `Reject non-main ref OIDC subject` — skipped as expected on `main`;
- overall workflow — SUCCESS.

The positive path obtained only a 900-second `AssumeRoleWithWebIdentity` session and verified caller identity.

---

## 12. Unauthorized-Context OIDC Negative Evidence

### 12.1 Missing environment subject

On the `main` verification run, a job intentionally requested a GitHub OIDC token without referencing the protected environment.

Expected subject form observed by CloudTrail:

`repo:SmartBusinessv1/smart-business:ref:refs/heads/main`

Result:

`AssumeRoleWithWebIdentity` — `AccessDenied`

No assumed-role resource/session was created.

### 12.2 Non-main ref

A second workflow run was manually dispatched from:

`mission/SB-P-1.11-GC-42A-assumption-verification`

The run verified:

- intended main/environment job — skipped;
- environment-mismatch job — skipped;
- `Reject non-main ref OIDC subject` — PASS;
- overall workflow — SUCCESS.

CloudTrail recorded the non-main subject:

`repo:SmartBusinessv1/smart-business:ref:refs/heads/mission/SB-P-1.11-GC-42A-assumption-verification`

Result:

`AssumeRoleWithWebIdentity` — `AccessDenied`

Resources referenced: `0`.

No trust broadening was required to obtain these results.

---

## 13. CloudTrail / STS Audit Evidence

CloudTrail Event History in `ap-south-1` recorded three relevant `AssumeRoleWithWebIdentity` events.

### Successful protected-environment assumption

Event time:

`August 18, 2026, 18:28:41 (UTC+05:30)`

Evidence:

- event source: `sts.amazonaws.com`;
- event name: `AssumeRoleWithWebIdentity`;
- region: `ap-south-1`;
- user/subject:
  `repo:SmartBusinessv1/smart-business:environment:aws-nonprod-parser`;
- error code: none;
- assumed role:
  `TeamLIPS-SB-NonProd-Parser-DeployRole`;
- temporary STS assumed-role session recorded;
- CloudTrail referenced an STS-generated temporary access-key resource as part of the short-lived role session.

### Missing-environment rejection

Event time:

`August 18, 2026, 18:26:28 (UTC+05:30)`

Evidence:

- subject:
  `repo:SmartBusinessv1/smart-business:ref:refs/heads/main`;
- event: `AssumeRoleWithWebIdentity`;
- error code: `AccessDenied`;
- resources referenced: `0`.

### Non-main rejection

Event time:

`August 18, 2026, 18:32:00 (UTC+05:30)`

Evidence:

- subject:
  `repo:SmartBusinessv1/smart-business:ref:refs/heads/mission/SB-P-1.11-GC-42A-assumption-verification`;
- event: `AssumeRoleWithWebIdentity`;
- error code: `AccessDenied`;
- resources referenced: `0`.

This provides positive and negative STS auditability without exposing any temporary credential material.

---

## 14. Structural Self-Escalation Verification

AWS IAM Policy Simulator was used against principal:

`TeamLIPS-SB-NonProd-Parser-DeployRole`

No API operation was executed by these simulations.

### Pass 1 — deploy-role / identity / provider / boundary controls

The following actions all returned:

`Denied — Implicit deny due to no statement(s) matching`

- `iam:UpdateAssumeRolePolicy` against the deploy role;
- `iam:AttachRolePolicy` against the deploy role;
- `iam:PutRolePolicy` against the deploy role;
- `iam:CreateUser` against a probe user ARN;
- `iam:CreateAccessKey` against a probe user ARN;
- `iam:UpdateOpenIDConnectProviderThumbprint` against the GitHub OIDC provider;
- `iam:DeleteOpenIDConnectProvider` against the GitHub OIDC provider;
- `iam:CreatePolicyVersion` against `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`;
- `iam:SetDefaultPolicyVersion` against `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`;
- `sts:AssumeRole` against the deploy role.

### Pass 2 — arbitrary-role pivot

The simulator's shared role-resource control was changed to the non-existent probe ARN:

`arn:aws:iam::658980433673:role/GC42-ArbitraryRole-Probe`

Result relied upon for this pass:

- `sts:AssumeRole` — DENIED — implicit deny due to no matching statement.

This demonstrates the deploy role has no effective arbitrary-role pivot path.

---

## 15. Root Bootstrap Exit

Founder root bootstrap was explicitly terminated after the OIDC/deploy-role/runtime-boundary bootstrap objects were established.

Founder confirmation:

`ROOT BOOTSTRAP EXITED`

Root is not used as the steady-state workflow identity.

No root access key was created.

---

## 16. Static-Credential Verification

Confirmed throughout this gate:

- no GitHub Environment AWS access-key secret exists;
- no IAM-user engineering access key was created;
- no root access key was created;
- GitHub obtains an OIDC token at workflow runtime;
- AWS STS returns only short-lived role-session credentials;
- temporary STS credentials were masked in the GitHub workflow and were not returned to repository communication.

---

## 17. Explicit Non-Implementation Confirmation

GC-42A did not create or modify:

- Lambda parser function;
- parser-ingress S3 bucket/object;
- IAM Roles Anywhere trust anchor/profile;
- runtime X.509 certificate/private key;
- Lambda Function URL;
- parser application implementation;
- Smart Business server-to-parser integration;
- Supabase schema, migrations, RLS, grants, functions, or production data;
- pending production Catalog-import migrations;
- Lovable state;
- merchant-facing UI;
- production AWS resources;
- application deployment/publication;
- production enablement;
- GC-38 Lambda parser implementation.

The AWS resources created under this gate are execution-access/security-boundary IAM objects only:

- GitHub OIDC provider, previously created and reused;
- deploy role;
- deploy permission policy;
- runtime permission-boundary policy.

---

## 18. Residual Blockers

No Infrastructure Operations provisioning blocker remains within GC-42A scope.

This report does not independently certify the security architecture. Per `instruction1.137.md`, the completed provisioned boundary must next be routed to Security & Permissions Architecture for independent post-provisioning verification.

GC-38 remains stopped until that separate gate passes and is merged.

---

## 19. Final Disposition

`AWS EXECUTION-ACCESS PROVISIONING — COMPLETE — READY FOR POST-PROVISIONING SECURITY VERIFICATION`

This disposition authorizes no Lambda/parser implementation by itself.

Infrastructure Operations stops at the provisioning/evidence gate and returns the completed boundary to Mission Control for independent Security & Permissions Architecture review.
