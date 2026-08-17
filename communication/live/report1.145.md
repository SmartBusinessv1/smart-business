# SMART BUSINESS — SECURITY & PERMISSIONS ARCHITECTURE REVIEW REPORT

## SB-P-1.11-GC-41 — AWS Execution-Access Security & Permissions Review

**Report ID:** `report1.145`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-41 — AWS Execution-Access Security & Permissions Review`  
**Instruction Executed:** `communication/live/instruction1.135.md`  
**Primary Design Reviewed:** `communication/live/report1.144.md`  
**Executing Room:** Security & Permissions Architecture  
**Mode:** SECURITY REVIEW ONLY  
**AWS IAM / Identity Mutation Authority:** NONE  
**AWS Resource-Creation Authority:** NONE  
**GitHub Environment / Protection Mutation Authority:** NONE  
**Application Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission and Authority

This report executes the merged Security & Permissions Architecture instruction in `communication/live/instruction1.135.md`.

The review independently evaluates the merged Infrastructure Operations design in `communication/live/report1.144.md`:

`GitHub Actions OIDC federation → narrowly scoped non-production AWS parser deploy role`

The question for this gate is whether that design can be provisioned later without introducing an unacceptable AWS identity, privilege-escalation, repository-supply-chain, credential, tenancy, or production-isolation risk.

This report does not provision the design, does not create or modify any AWS IAM/resource, does not create or modify any GitHub Environment/protection setting, does not assume an AWS role, and does not reactivate GC-38.

---

## 2. Exact Canonical `main` SHA Reviewed

Exact merged `main` reviewed:

`942887808f47a7b5a06e323bf1d0d1a63db71347`

The reviewed baseline contains merged `instruction1.135.md` and the GC-40 design report.

Primary canonical inputs reviewed:

- `communication/live/instruction1.135.md`;
- `communication/live/report1.144.md`;
- `communication/live/instruction1.134.md`;
- `communication/live/report1.143.md`;
- `communication/live/report1.142.md`;
- `communication/live/instruction1.132.md`;
- `communication/live/report1.126.md`;
- `communication/live/report1.124.md`;
- the accepted Infrastructure/Supabase/Security correction chain made authoritative by `report1.126.md`;
- `docs/implementation/SB-P-1.11/engineering-contract.md` Version 1.2;
- current repository communication/governance rules.

Current official AWS and GitHub documentation was also rechecked for OIDC claims, environment protection, IAM permission boundaries, `iam:PassRole`, Lambda permission-management condition keys, IAM Roles Anywhere authorization, root-user security, and GitHub Actions supply-chain hardening.

---

## 3. Frozen Baseline Preserved

This review does not reopen Product Truth or the locked parser runtime architecture.

Preserved without redesign:

- Owner-only Phase 1;
- exactly nineteen public Catalog commands;
- Catalog / Inventory truth separation;
- D-047;
- D-068;
- BKR-1 through BKR-5;
- EC-2;
- EC-3;
- AWS Lambda narrow parser runtime;
- `nodejs24.x`;
- `ap-south-1`;
- transient private S3 parser ingress;
- IAM Roles Anywhere runtime identity;
- manual AWS4-X509 `CreateSession`;
- `AWS_IAM` Lambda Function URL;
- parser limits and response limits;
- final Supabase support-state privilege contract.

The deployment/control-plane identity reviewed here remains separate from the locked runtime identity:

`GitHub Actions OIDC → deploy role`

is not:

`IAM Roles Anywhere → workload role`.

---

# SECURITY REVIEW

## 4. SEC-GC41-01 — GitHub OIDC Trust Boundary

**Result: PASS, WITH MANDATORY PROVISIONING CONDITIONS.**

### Design element reviewed

`report1.144.md` selects the AWS OIDC provider `token.actions.githubusercontent.com`, audience `sts.amazonaws.com`, exact repository `SmartBusinessv1/smart-business`, dedicated environment `aws-nonprod-parser`, protected `main` deployment path, and fail-closed handling if emitted claims differ from the reviewed contract.

### Attack paths considered

- unrelated GitHub repository attempts to assume the role;
- repository-owner or organization wildcard trust;
- fork or pull-request context obtains deployment credentials;
- feature branch obtains deployment credentials;
- repository rename/name-reuse weakens text-only repository binding;
- environment claim omitted or substituted;
- OIDC token audience changed;
- trust policy broadened to make a claim mismatch work.

### Current-provider verification

Current AWS IAM documentation exposes GitHub OIDC condition keys including `sub`, `aud`, `repository`, immutable `repository_id`, stable `repository_owner_id`, `ref`, `environment`, `workflow`, and `job_workflow_ref` where applicable.

Current GitHub OIDC documentation defines an environment-bearing default subject of the form:

`repo:ORG/REPO:environment:ENVIRONMENT`

Therefore the later provisioning mission must not rely on one broad `sub` wildcard when stronger exact conditions are available.

### Mandatory trust contract for provisioning

The future deploy-role trust must require, at minimum, exact equality for the actually emitted and AWS-supported values equivalent to:

- provider: `token.actions.githubusercontent.com`;
- `aud = sts.amazonaws.com`;
- `sub = repo:SmartBusinessv1/smart-business:environment:aws-nonprod-parser`;
- `repository = SmartBusinessv1/smart-business`;
- `repository_id = 1287523579`;
- `repository_owner_id = 298686418`;
- `environment = aws-nonprod-parser`;
- `ref = refs/heads/main`.

If the eventual credential-bearing workflow uses a stable reusable-workflow path and AWS receives `job_workflow_ref`, bind that exact reviewed workflow reference too. Do not invent a `job_workflow_ref` condition if the actual token does not contain it.

The provisioning mission must inspect the actual OIDC token claims before accepting the first role assumption. If an expected condition key is unavailable or a claim differs, STOP and return for Security review. Do not replace exact matching with `repo:*`, `SmartBusinessv1/*`, `repo:SmartBusinessv1/smart-business:*`, arbitrary ref wildcard, or owner-wide trust simply to make assumption succeed.

### Evidence classification

Architecture/design: PASS.

Later provisioning evidence still required: actual token claim capture in sanitized form, trust-policy inspection, successful intended assumption, and negative assumption attempts from non-main/non-environment contexts.

---

## 5. SEC-GC41-02 — GitHub Environment and Workflow Authorization Boundary

**Result: PASS, WITH MANDATORY PROTECTION PREREQUISITES.**

### Design element reviewed

Dedicated GitHub Environment:

`aws-nonprod-parser`

and repository-first sequence:

`human-reviewed PR → merged main → environment approval → OIDC role assumption`.

### Attack paths considered

- arbitrary PR or fork triggers credential-bearing job;
- feature branch references the environment;
- malicious workflow edit merges and immediately deploys without a second human gate;
- workflow checks out untrusted PR code after credentials are available;
- unrelated workflow in the same repository obtains the role.

### Current-provider verification

The canonical repository is public. Current GitHub documentation confirms public repositories support deployment environments, deployment branch/tag restrictions, and required reviewers. Therefore `report1.144.md`'s phrase "where supported" is resolved for this repository: required human approval is supported and must be treated as mandatory for this Phase 1 non-production parser boundary.

### Mandatory GitHub controls before first OIDC assumption

The later provisioning mission must prove:

1. Environment name is exactly `aws-nonprod-parser`.
2. Required reviewer protection is enabled with an approved Founder/human reviewer.
3. Prevent-self-review is enabled where the setting is available for the configured environment.
4. Deployment branches/tags are restricted to the approved protected `main` branch only; no pull-request merge refs or wildcard feature branches are permitted.
5. The credential-bearing job references this environment explicitly.
6. `permissions: id-token: write` is granted only to the credential-bearing deployment job, not repository-wide by convenience.
7. The workflow does not run AWS credential acquisition for `pull_request`, fork-controlled code, or a `pull_request_target` path that checks out/executes untrusted PR content.
8. `GITHUB_TOKEN` permissions are minimized for the deployment job.

These are provisioning prerequisites, not controls claimed as already configured.

---

## 6. SEC-GC41-03 — One-Time Root Bootstrap Exception

**Result: PASS AS A BOUNDED BOOTSTRAP EXCEPTION.**

### Design element reviewed

GC-40 proposes MFA-protected root console use only because the new standalone account has no delegated AWS administrative identity and no long-lived engineering credential is acceptable.

### Attack paths considered

- root becomes routine deployment identity;
- root access key is created;
- root credential material reaches GitHub/Claude/ChatGPT/local `.env`;
- bootstrap leaves an unnecessary second privileged identity;
- bootstrap authority persists as engineering convenience.

### Finding

AWS continues to recommend avoiding root for everyday tasks, using MFA, and not creating root access keys. The proposed use is acceptable only because it is a one-time account bootstrap and no delegated identity exists yet.

### Minimum allowed root bootstrap actions

The later provisioning mission may use root interactively only to establish the reviewed steady-state security boundary, limited to the equivalent of:

1. create/verify the GitHub OIDC provider for `token.actions.githubusercontent.com` with `sts.amazonaws.com` client audience;
2. create the bounded non-production deploy role and exact reviewed trust policy;
3. create/attach the deploy role's bounded permissions and, if selected, its own immutable maximum-permission boundary;
4. create the parser-runtime permission-boundary policy required for any runtime role the deploy role is authorized to create/manage;
5. verify the resulting OIDC/deploy-role bootstrap objects;
6. exit root immediately.

Root must not create an access key, become the workflow credential, perform routine parser deployment, or remain part of the steady-state engineering path.

A broader Identity Center/Organizations rollout is not required merely to avoid this single controlled bootstrap.

---

## 7. SEC-GC41-04 — Deploy-Role Least Privilege

**Result: PASS AT DESIGN LEVEL, SUBJECT TO EXACT POLICY REVIEW BEFORE PROVISIONING ACCEPTANCE.**

### Design element reviewed

`TeamLIPS-SB-NonProd-Parser-DeployRole` is intended to manage only the locked non-production parser infrastructure.

### Required least-privilege shape

The future policy must be decomposed by resource/action family rather than use broad service wildcards.

#### Lambda

Allow only the exact create/update/version/alias/Function URL/configuration actions required by the locked parser on the `teamlips-sb-np-parser` function namespace in account `658980433673`, region `ap-south-1`.

Permission-management actions such as `lambda:AddPermission`/`RemovePermission` must be restricted to the exact parser function/alias and constrained with available condition keys such as `lambda:FunctionUrlAuthType = AWS_IAM` and exact intended principal where applicable. The deploy role must not be able to use Lambda resource policy changes to create a public `AuthType=NONE` parser endpoint.

#### S3

Allow management only for the one approved transient parser-ingress bucket/name and its exact parser prefix. No unrelated bucket authority. Any object-level verification authority must be justified and kept to the transient verification prefix; routine broad data-plane access is not required merely because the role manages bucket configuration.

Public Access Block, private access, encryption, lifecycle, CORS, TLS policy and locked checksum/transport controls must remain enforceable.

#### CloudWatch Logs / metrics

Allow only the parser log-group namespace and exact monitoring resources. Where a write API is account-wide by service design, use the strongest supported namespace/resource/condition restriction rather than broad monitoring administration.

#### IAM

Allow only parser runtime roles/policies in the approved `TeamLIPS-SB-NonProd-Parser-*` namespace. No deploy-role self-management. No IAM users/access keys. No unrelated role/policy management.

#### IAM Roles Anywhere

Allow only the required parser trust-anchor/profile lifecycle. For create APIs that do not support resource-ARN scoping, require exact request tags matching the approved parser ownership/environment set. For existing resources, restrict to the resulting parser trust-anchor/profile ARNs and resource tags. Do not use `AWSRolesAnywhereFullAccess` as the deploy-role policy.

#### Read/list/describe

Account-wide `List*`/`Describe*`/`Get*` is acceptable only where AWS does not support resource scoping and the operation is genuinely required for plan/verification/rollback. Such read-only wildcard actions must be enumerated, not hidden inside `service:*`.

### Required policy-quality gate

Before provisioning acceptance, the exact trust policy, permissions policy, permission-boundary policy and `iam:PassRole` statements must be separately inspected. Any need for generic `AdministratorAccess`, `PowerUserAccess`, `iam:*`, `s3:*`, `lambda:*`, or equivalent broad wildcard authority is a blocker.

---

## 8. SEC-GC41-05 — Self-Escalation Prevention

**Result: PASS, PROVIDED THE MANDATORY STRUCTURAL CONTROLS BELOW ARE IMPLEMENTED.**

### Attack paths considered

- deploy role edits its own trust policy;
- deploy role attaches/puts a broader policy on itself;
- deploy role changes or removes its own permission boundary;
- deploy role creates an unrestricted role and assumes it;
- deploy role creates an IAM user/access key;
- deploy role changes/deletes the GitHub OIDC provider;
- deploy role creates a second GitHub/OIDC federation path;
- deploy role modifies the runtime boundary policy to become administrator.

### Mandatory structural controls

The deploy role must have no effective permission for:

- `iam:UpdateAssumeRolePolicy`, `iam:PutRolePolicy`, `iam:AttachRolePolicy`, `iam:PutRolePermissionsBoundary`, or `iam:DeleteRolePermissionsBoundary` against its own role;
- policy-version/create/delete operations against the managed policy used as the immutable parser-runtime permissions boundary;
- `iam:CreateUser`, `iam:CreateAccessKey`, or equivalent long-lived user credential administration;
- `iam:CreateOpenIDConnectProvider`, `iam:UpdateOpenIDConnectProviderThumbprint`, `iam:AddClientIDToOpenIDConnectProvider`, `iam:RemoveClientIDFromOpenIDConnectProvider`, or `iam:DeleteOpenIDConnectProvider` after bootstrap;
- `sts:AssumeRole` into arbitrary roles;
- organization, billing, account, root, Identity Center or unrelated federation administration.

If `iam:CreateRole` is required, it must be limited to the approved parser runtime role namespace and require the approved parser-runtime permission boundary at role creation. The deploy role must not have permission to remove that boundary later.

The runtime boundary itself must exclude deployment/control-plane administration so that a maliciously chosen trust policy on a newly created runtime-named role cannot turn that role into a second deploy role.

This converts self-escalation prevention from repository convention into an IAM-enforced maximum-authority property.

---

## 9. SEC-GC41-06 — `iam:PassRole` Boundary

**Result: PASS, WITH EXACT PASSROLE ALLOWLIST REQUIRED.**

`iam:PassRole` must never use an unrestricted role resource.

Expected needs are limited to the specific approved parser runtime role(s), including:

- Lambda execution role passed to `lambda.amazonaws.com`;
- IAM Roles Anywhere workload role passed to `rolesanywhere.amazonaws.com` where required by profile operations.

The future policy must restrict:

- `Resource` to the exact approved parser runtime role ARN(s), or the smallest pre-approved parser role ARN set;
- `iam:PassedToService` to the exact intended service principal (`lambda.amazonaws.com` or `rolesanywhere.amazonaws.com` as applicable);
- `iam:AssociatedResourceArn` where the target AWS API supplies a reliable associated resource and using it materially narrows the path.

No future production role, deploy role, account admin role, or arbitrary `TeamLIPS-*` role may be passable.

---

## 10. SEC-GC41-07 — Permission Boundary Design

**Result: PASS — PERMISSION BOUNDARY IS MANDATORY FOR DEPLOY-ROLE-CREATED/MANAGED RUNTIME ROLES.**

A permission boundary is required because the deploy role must be able to create or configure IAM runtime roles while remaining structurally unable to manufacture a role with greater authority than the approved parser runtime.

The boundary must be created/owned outside the deploy role's mutable authority and must define the maximum permission envelope for parser runtime roles.

At minimum it must exclude:

- IAM identity/federation administration;
- OIDC provider administration;
- role/policy administration unrelated to the exact parser runtime;
- `sts:AssumeRole` paths not explicitly required by the locked runtime model;
- Organizations/Identity Center/account/billing administration;
- unrelated Lambda/S3/CloudWatch authority;
- any future production namespace/account reach;
- permissions capable of changing the deploy role or the boundary itself.

Each created runtime role still requires its own narrow identity policy. The permission boundary is a ceiling, not a grant.

The provisioning package must prove `iam:CreateRole` fails when the approved boundary is omitted or replaced.

---

## 11. SEC-GC41-08 — Non-Production / Production Isolation

**Result: PASS.**

The account/region/name/tag preflight controls in GC-40 are necessary and sufficient at design level when combined with IAM resource scoping.

Every deployment must fail before mutation unless:

- `sts:GetCallerIdentity` account equals `658980433673`;
- target region equals `ap-south-1`;
- environment equals `nonprod`;
- names match the approved `teamlips-sb-np-parser` / `TeamLIPS-SB-NonProd-Parser-*` namespace;
- required ownership/environment tags match the reviewed contract;
- no production resource identifier is present.

The deploy role's IAM policy must itself be written only for account `658980433673` and the approved non-production parser namespace. Workflow preflight is defense in depth, not the sole isolation mechanism.

The non-production deploy role must never be reused for a future production parser environment. Future production requires a separate trust/deploy identity and separate authorization.

---

## 12. SEC-GC41-09 — Deployment Identity vs Runtime Workload Identity

**Result: PASS.**

The two trust domains remain separate:

### Deployment identity

`GitHub OIDC token → sts:AssumeRoleWithWebIdentity → TeamLIPS-SB-NonProd-Parser-DeployRole`

Purpose: create/configure approved non-production parser infrastructure.

### Runtime workload identity

`server-held X.509 identity → IAM Roles Anywhere AWS4-X509 CreateSession → temporary runtime role credentials → AWS_IAM Function URL`

Purpose: bounded application runtime access only.

The deployment role must never be embedded in Smart Business application configuration. The runtime workload role must never receive Lambda/S3/IAM/IAM Roles Anywhere control-plane deployment permissions.

No runtime private key/certificate is to be stored in GitHub simply because GitHub is the deployment path.

---

## 13. SEC-GC41-10 — Secrets and Credential Posture

**Result: PASS.**

The design requires no static AWS access key ID, secret access key, or session token in:

- GitHub Secrets;
- repository files;
- committed `.env` files;
- Claude Code configuration;
- ChatGPT;
- Lovable/browser bundles.

OIDC and STS provide temporary deployment credentials at job runtime.

The later IAM Roles Anywhere certificate/private-key path remains a separate server-runtime secret-handling problem governed by the locked runtime security contract. GitHub OIDC does not solve and must not absorb that private-key lifecycle.

No root access key or long-lived engineering IAM-user access key is approved.

---

## 14. SEC-GC41-11 — Workflow Mutation / Supply-Chain Boundary

**Result: PASS, WITH MANDATORY WORKFLOW HARDENING.**

### Attack paths considered

- malicious workflow change obtains `id-token: write`;
- third-party action compromise steals temporary AWS credentials;
- credential-bearing job executes fork/PR-controlled code;
- mutable action tag changes after review;
- merged workflow automatically applies AWS changes without environment approval.

### Mandatory controls

Before first OIDC role assumption:

1. Infrastructure/deployment workflow must be added only through a human-reviewed PR merged to canonical `main` under Mission Control authority.
2. Credential-bearing job must run only from the reviewed canonical `main` state and the protected `aws-nonprod-parser` environment.
3. Do not acquire AWS credentials in PR/fork jobs or in any job that checks out or executes untrusted pull-request code/artifacts.
4. Third-party actions used in the credential-bearing path must be pinned to verified full-length commit SHAs. Mutable tags/branches are not acceptable for the AWS credential path.
5. Minimize `GITHUB_TOKEN` permissions; `id-token: write` must be job-scoped to the deployment job.
6. Environment human approval must occur after the reviewed canonical workflow definition is known and before the credential-bearing job proceeds.
7. The actual IaC/apply target must be the exact reviewed commit. A job must not fetch and execute an arbitrary ref after credentials are acquired.
8. Destructive/high-impact parser infrastructure operations remain separately authorized and are not silently enabled by the default workflow.

These controls are proportionate to the current repository-first Phase 1 model and do not require an enterprise deployment bureaucracy.

---

## 15. SEC-GC41-12 — Auditability, Revocation and Recovery

**Result: PASS, WITH LATER EVIDENCE REQUIRED.**

The steady-state design has clear revocation controls:

- remove/disable the deploy role trust relationship or disable/delete the deploy role;
- remove the GitHub OIDC provider only under explicit account-level recovery authority when appropriate;
- disable the GitHub deployment environment/workflow path;
- review CloudTrail/STS evidence for `AssumeRoleWithWebIdentity` role sessions and subsequent AWS API calls;
- revoke/replace runtime IAM Roles Anywhere identity independently if runtime compromise occurs;
- use root only as protected account recovery/bootstrap authority, never as permanent engineering credential.

The provisioning mission must establish and record a deterministic role-session naming convention that identifies the GitHub workflow/run context without placing secrets in the session name.

Recovery must not create a permanent IAM user/access key as a convenience fallback.

---

## 16. SEC-GC41-13 — Bootstrap-to-Steady-State Transition

**Result: PASS.**

The design can safely transition from one-time root bootstrap to steady-state OIDC deployment if the later provisioning mission completes all prerequisites below before accepting the first OIDC session.

### Mandatory prerequisites before first accepted role assumption

1. AWS account verified as `658980433673`.
2. Root MFA remains enabled and no root access key exists.
3. OIDC provider exact issuer/audience configured.
4. Deploy-role trust policy contains the exact reviewed repository/environment/ref/ID claim restrictions.
5. GitHub Environment `aws-nonprod-parser` exists with required human reviewer, prevent-self-review where available, and `main`-only deployment branch restriction.
6. Deploy-role permissions are explicit least privilege; no broad administrator/service wildcard policy exists.
7. Deploy role cannot modify its own trust/permissions/boundary or the GitHub OIDC provider.
8. Parser runtime-role permission boundary exists outside the deploy role's mutable authority.
9. `iam:CreateRole` requires that boundary and is limited to approved parser runtime names.
10. `iam:PassRole` is exact-role and exact-service allowlisted.
11. No IAM user/access key path is created.
12. Credential-bearing workflow is human-reviewed, main-only, environment-gated, untrusted-PR-safe, and pins third-party actions to full commit SHAs.
13. Preflight account/region/environment/name/tag checks are present and fail closed before apply.
14. Actual emitted OIDC claims are inspected and match the reviewed trust contract exactly.
15. Intended role assumption succeeds.
16. Negative assumptions from at least a non-main/ref-mismatch and environment-mismatch context fail.
17. Effective policy inspection proves no self-administration, OIDC administration, user/access-key creation, broad IAM, production namespace, or unrelated account authority.
18. Root exits bootstrap and is not used by the workflow.

Failure of any item blocks GC-38 reactivation.

---

# CROSS-CUTTING SECURITY CONCLUSIONS

## 17. Root / OIDC / Deploy Role Authority Chain

**Result: SECURITY-COHERENT.**

The design does not require a permanent engineering administrator.

The intended steady-state authority chain is:

`human-reviewed canonical GitHub state`

→ `protected GitHub Environment`

→ `OIDC token with exact claims`

→ `short-lived AWS deploy-role session`

→ `bounded non-production parser infrastructure management only`.

Root exists outside that steady-state chain.

---

## 18. Privilege-Escalation Conclusion

**Result: NO UNRESOLVED DESIGN-LEVEL ESCALATION PATH, PROVIDED THE MANDATORY POLICY PREREQUISITES IN THIS REPORT ARE APPLIED.**

The critical property is not simply that the deploy role begins narrow. It must be unable to widen itself or manufacture a wider successor role.

That property is achieved only when:

- self-IAM/OIDC administration is absent;
- runtime role creation is namespace-limited;
- runtime role creation requires an immutable permission boundary;
- boundary mutation/removal is unavailable;
- `iam:PassRole` is exact-role/exact-service limited;
- runtime identities cannot obtain deployment authority;
- GitHub trust is exact-repository/environment/ref/ID bound;
- credential-bearing workflow execution is protected by human-reviewed canonical state and environment approval.

Any later policy that omits these controls is not equivalent to the reviewed design and must fail provisioning review.

---

## 19. Static Credential Conclusion

**Result: PASS.**

No static AWS deployment credential is required or approved.

No root access key, IAM-user engineering access key, long-lived GitHub AWS secret, workload private key in GitHub, or permanent Claude/ChatGPT AWS credential is part of the accepted design.

---

## 20. Mutation / Implementation Confirmation

During this Security review:

- AWS OIDC provider created/modified: **NO**;
- AWS IAM role/policy/boundary created/modified: **NO**;
- AWS role assumed through OIDC: **NO**;
- Lambda/S3/CloudWatch/IAM Roles Anywhere resource created/modified: **NO**;
- certificate/private key created: **NO**;
- AWS access key created: **NO**;
- GitHub Environment created/modified: **NO**;
- GitHub branch-protection/deployment-protection settings modified: **NO**;
- GitHub Actions deployment workflow implemented: **NO**;
- Supabase schema/RLS/grant/function mutated: **NO**;
- Lovable changed: **NO**;
- application/parser implementation performed: **NO**;
- Product Truth changed: **NO**;
- parser limits changed: **NO**;
- Catalog command count changed: **NO**;
- GC-38 reactivated: **NO**;
- deployment/publication/production action performed: **NO**.

No static AWS access key was created, requested, approved, or stored.

---

## 21. Remaining Provisioning Prerequisites

A later Mission Control provisioning instruction must treat Sections 4–16 of this report as binding Security requirements.

Before that later provisioning mission can be accepted, it must provide direct evidence for at least:

- exact OIDC claims and exact trust-policy conditions;
- GitHub Environment reviewer/branch restrictions;
- deploy-role effective permission policy;
- deploy-role self-administration denial;
- parser runtime-role permission boundary and boundary-required role creation;
- exact `iam:PassRole` restrictions;
- OIDC provider immutability from the deploy role;
- no IAM user/access-key authority;
- non-production account/region/name/tag scoping;
- main-only human-reviewed credential-bearing workflow;
- full-SHA-pinned third-party actions;
- intended OIDC assumption success;
- unauthorized-context OIDC assumption denial;
- CloudTrail/STS auditability;
- root exit from bootstrap;
- confirmation that no static AWS deployment credential exists.

These are provisioning evidence gates, not claims of controls already installed.

---

## 22. Security Review Matrix

| Item | Result | Remaining evidence |
|---|---|---|
| SEC-GC41-01 GitHub OIDC trust boundary | PASS | Actual claims/trust + negative assumption tests |
| SEC-GC41-02 GitHub Environment/workflow boundary | PASS | Actual environment/reviewer/branch configuration |
| SEC-GC41-03 one-time root bootstrap | PASS | Root-scoped bootstrap evidence; no access key; root exit |
| SEC-GC41-04 deploy-role least privilege | PASS | Exact IAM policy/effective permission inspection |
| SEC-GC41-05 self-escalation prevention | PASS | Negative IAM/self-admin tests |
| SEC-GC41-06 `iam:PassRole` | PASS | Exact role/service allowlist evidence |
| SEC-GC41-07 permission boundary | PASS | Boundary enforcement and omission/replacement denial |
| SEC-GC41-08 nonprod/prod isolation | PASS | Effective account/region/name/tag policy + preflight evidence |
| SEC-GC41-09 deploy/runtime identity separation | PASS | Actual role/policy separation evidence |
| SEC-GC41-10 secrets/credential posture | PASS | Secret/config/artifact scan during provisioning/build |
| SEC-GC41-11 workflow/supply-chain boundary | PASS | Main-only gated workflow and full-SHA action evidence |
| SEC-GC41-12 audit/revocation/recovery | PASS | CloudTrail/STS session evidence and revocation procedure |
| SEC-GC41-13 bootstrap-to-steady-state | PASS | Complete prerequisite matrix before GC-38 reactivation |

No SEC-GC41 item requires a design rewrite before Mission Control may consider a separate provisioning authorization. The mandatory conditions in this report narrow and operationalize GC-40's intentionally high-level Security-review placeholders; they do not broaden the architecture.

---

## 23. Final Disposition

`AWS EXECUTION-ACCESS SECURITY & PERMISSIONS REVIEW — PASS — READY FOR PROVISIONING AUTHORIZATION`

The merged GC-40 GitHub Actions OIDC → bounded non-production AWS deploy-role design is security-coherent at architecture level when provisioned with the mandatory exact trust, GitHub Environment, permission-boundary, self-escalation, `iam:PassRole`, non-production isolation, supply-chain and audit controls in this report.

No Security & Permissions Architecture blocker remains before Mission Control considers a separately authorized provisioning mission.

This PASS does not authorize provisioning, GitHub Environment/protection mutation, role assumption, AWS resource creation, GC-38 reactivation, implementation, deployment, publication, production use, or SB-P-1.11 acceptance.
