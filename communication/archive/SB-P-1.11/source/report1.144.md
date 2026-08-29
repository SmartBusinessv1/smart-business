# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-40 — AWS EXECUTION-ACCESS & ENVIRONMENT-PROVISIONING DESIGN REPORT

**Report ID:** `report1.144`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-40 — AWS Execution-Access & Environment-Provisioning Design`  
**Executing Room:** Infrastructure Operations  
**In Reply To:** `communication/live/instruction1.134.md`  
**Mode:** DESIGN + READINESS ONLY  
**AWS Resource-Creation Authority:** NONE  
**AWS IAM / Identity Mutation Authority:** NONE  
**Application Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission and Authority

This report executes merged `communication/live/instruction1.134.md` and recommends exactly one Phase 1 deployment/control-plane execution design for the new organization-controlled Smart Business AWS account.

No AWS identity, IAM object, Lambda function, S3 bucket, credential, certificate, Function URL, Supabase object, Lovable state, application code, deployment, publication, or production state was created or modified during GC-40.

A positive result from this report is design-only. It does not provision the design and does not reactivate GC-38.

---

## 2. Exact Canonical `main` SHA Reviewed

Latest merged `main` reviewed:

`47bd5935b3d7d2e411fcb4a290fe32e6ebf016e3`

Commit:

`SB-P-1.11: authorize AWS execution-access design (#307)`

Primary canonical inputs reviewed:

- `communication/live/instruction1.134.md`
- `communication/live/report1.143.md`
- `communication/live/report1.142.md`
- `communication/live/instruction1.132.md`
- `communication/live/report1.126.md`
- `communication/live/report1.115.md`
- `docs/implementation/SB-P-1.11/engineering-contract.md` Version 1.2

Current official AWS IAM/OIDC/root-user guidance and current official GitHub Actions OIDC/environment guidance were also consulted for the access design.

---

## 3. Current AWS / Non-Production Baseline

Established baseline from GC-39:

- AWS account display name: `Team LIPS - Smart Business`
- AWS account ID: `658980433673`
- account purpose for this workstream: **non-production / test implementation environment**
- legal customer verification: **VERIFIED** under Lighthouse Information Publishing Service
- root MFA: **ENABLED AND SIGN-IN VERIFIED**
- root access key: **NONE**
- long-lived engineering access key: **NONE**
- Lambda parser resources: **NONE**
- transient S3 parser resources: **NONE**
- IAM Roles Anywhere resources: **NONE**
- future parser resource region: `ap-south-1` unless separately amended
- GC-38 remains stopped.

No account-state contradiction was found.

---

## 4. Identity Separation — Mandatory

### 4.1 Deployment / control-plane identity

The deployment identity is the temporary AWS identity used by the governed repository workflow to create/configure the approved **non-production** Lambda parser infrastructure after later authorization.

It must not be the root user and must not use long-lived IAM user keys.

### 4.2 Runtime workload identity

The runtime workload identity remains the already locked:

`IAM Roles Anywhere → AWS4-X509 CreateSession → temporary workload credentials → AWS_IAM Lambda Function URL`

This identity belongs to the Smart Business server runtime after implementation. It is not the deployment identity.

The recommended deployment design below does not replace, weaken, or redesign IAM Roles Anywhere.

---

## 5. Execution Paths Evaluated

### Option A — IAM Identity Center / human CLI session

**Technically valid for human administration, but rejected as the primary Phase 1 deployment path.**

AWS recommends temporary credentials and supports IAM Identity Center-backed AWS CLI sessions. However, making IAM Identity Center the deployment mechanism would leave the actual infrastructure apply dependent on a Founder/human workstation session rather than the canonical repository workflow.

More importantly for the current account, AWS documentation states that enabling an organization instance for a standalone Free-plan account creates AWS Organizations and upgrades the account to paid/pay-as-you-go, expiring Free-plan credits. GC-40 has no authority to change the account-plan posture merely to obtain a deployment identity.

IAM Identity Center may be reconsidered later for broader Team LIPS human administration, but it is not required to solve this narrow parser execution gate.

### Option B — long-lived IAM user access key

**Rejected.**

This would solve tool convenience by introducing persistent AWS secrets into an engineering environment. It conflicts with the mission requirement, AWS temporary-credential best practice, and the existing no-root/no-long-lived-key posture.

### Option C — GitHub Actions OIDC federation to a narrowly scoped non-production deploy role

**Accepted and recommended.**

GitHub Actions OIDC allows a workflow to exchange a GitHub OIDC token for short-lived AWS credentials without storing AWS access keys in GitHub. AWS IAM supports restricting GitHub federation by OIDC `sub`, repository, branch/ref and other claims, and GitHub Environments can enforce a deployment approval/branch boundary.

This aligns with the existing repository-first Smart Business operating model:

`human-reviewed PR → merged canonical main → controlled GitHub Environment approval → OIDC temporary session → non-production AWS apply → evidence returned to repository`

---

## 6. Exactly One Recommended End-State Design

**Recommended deployment/control-plane path:**

`GitHub Actions OIDC federation → one narrowly scoped AWS non-production parser deploy role`

Target steady-state identity name:

`TeamLIPS-SB-NonProd-Parser-DeployRole`

Target GitHub Environment name:

`aws-nonprod-parser`

Target repository:

`SmartBusinessv1/smart-business`

Current non-secret repository identity metadata available for Security review:

- GitHub repository ID: `1287523579`
- GitHub repository owner ID: `298686418`

No static AWS access key is part of the design.

---

## 7. Required One-Time Bootstrap Sequence — FOR A LATER AUTHORIZED PROVISIONING MISSION

The following is a design specification only. None of these actions were performed in GC-40.

1. Founder signs in to AWS using the existing root account with MFA for the minimum bootstrap only, because the new standalone account currently has no delegated AWS identity.
2. Founder creates the AWS IAM OIDC provider for `https://token.actions.githubusercontent.com` with audience `sts.amazonaws.com`, following current AWS/GitHub guidance.
3. Founder creates the non-production deploy role `TeamLIPS-SB-NonProd-Parser-DeployRole` and its bounded permission policy/permission-boundary controls.
4. The role trust policy is restricted to the approved GitHub repository and the dedicated `aws-nonprod-parser` environment, with no organization-wide or repository-wide wildcard trust.
5. Founder exits root immediately after bootstrap; root is not used by the deployment workflow and no root access key is created.
6. In GitHub, create the `aws-nonprod-parser` Environment and restrict deployment to the approved main/protected deployment branch. Require explicit Founder/human approval where the current repository plan supports it.
7. Record only non-secret environment variables such as AWS account ID, `ap-south-1`, and the deploy-role ARN/name. Do not store AWS access keys or session tokens as GitHub secrets.
8. Add the later Mission-Control-authorized repository IaC/deployment workflow through a normal human-reviewed PR.
9. The workflow requests `id-token: write` only for the deployment job, exchanges the GitHub OIDC token for a short-lived `sts:AssumeRoleWithWebIdentity` session, verifies account/region, performs the authorized non-production apply, and emits evidence.
10. After bootstrap, routine parser infrastructure changes use only the GitHub OIDC deploy role. Root returns to recovery/account-level use only.

The direct one-time root bootstrap is intentionally smaller than creating a separate long-lived IAM user or enabling AWS Organizations solely for this workstream. Security & Permissions Architecture must review and approve this bootstrap exception before it is ever executed.

---

## 8. GitHub OIDC Trust Boundary

The future AWS trust policy must fail closed unless all required GitHub identity conditions match.

At minimum Security review must validate a trust policy equivalent in strength to:

- OIDC provider: `token.actions.githubusercontent.com`
- audience: `sts.amazonaws.com`
- repository: exactly `SmartBusinessv1/smart-business`
- repository ID: `1287523579` where the emitted AWS-supported claim is available
- repository owner ID: `298686418` where the emitted AWS-supported claim is available
- GitHub Environment: exactly `aws-nonprod-parser`
- ref/deployment branch: exactly the approved protected `main` deployment path
- `sub`: the exact GitHub environment subject for this repository/environment; no broad wildcard

GitHub's current OIDC documentation notes that environment jobs use an environment-bearing subject, and newer/opted-in repositories can use immutable ID-bearing subject formats. Therefore the later provisioning mission must inspect the actual GitHub OIDC claim format and configure the AWS trust policy to that exact value. If the emitted claim differs from the reviewed trust contract, provisioning must stop rather than broaden the trust wildcard.

The trust must never be `repo:SmartBusinessv1/*`, `repo:*`, or organization-wide.

---

## 9. Repository-First Deployment Model

The eventual parser infrastructure definition should be committed to `SmartBusinessv1/smart-business` as bounded infrastructure-as-code or equivalent declarative deployment configuration.

Required operating sequence:

1. infrastructure change proposed on a mission branch;
2. human-reviewed PR;
3. merge to approved canonical `main` only after Mission Control authority;
4. explicit deployment workflow invocation;
5. GitHub Environment approval;
6. OIDC role assumption;
7. preflight identity checks;
8. controlled non-production apply;
9. post-apply verification;
10. evidence committed/reported through the existing communication protocol.

No workflow triggered from an arbitrary feature branch or pull-request fork may obtain the AWS deploy role.

---

## 10. Non-Production Isolation / Naming Contract

Account:

`658980433673`

Environment classification:

`nonprod`

Region:

`ap-south-1`

Recommended common AWS resource prefix:

`teamlips-sb-np-parser`

Resource names should derive from that prefix and remain clearly separate from any future production naming. For example, where service naming rules permit:

- Lambda: `teamlips-sb-np-parser`
- log group namespace: `/aws/lambda/teamlips-sb-np-parser`
- S3 parser-ingress naming base: `teamlips-sb-np-parser-658980433673-ap-south-1`
- runtime/deployment IAM names: `TeamLIPS-SB-NonProd-Parser-*`

Minimum ownership/environment tags where supported:

- `Project=SmartBusiness`
- `Environment=nonprod`
- `Workstream=SB-P-1.11`
- `Component=lambda-parser`
- `Owner=TeamLIPS`
- `ManagedBy=GitHubActions`

Any future production parser environment must use a separate production trust/deploy identity and production resource namespace. This GC-40 design does not decide whether future production will use a separate AWS account, but the non-production deploy role must not be written to target future production resources.

### Mandatory preflight fail-closed checks

Before every authorized apply, the workflow must verify:

- `sts:GetCallerIdentity` account equals `658980433673`;
- configured/target region equals `ap-south-1`;
- intended environment equals `nonprod`;
- target names/prefixes match the approved non-production parser namespace;
- no production resource identifier is present.

Any mismatch stops the workflow before mutation.

---

## 11. Steady-State Least-Privilege Deployment Role Design

The steady-state deploy role must be constrained to the action/resource families actually required by the locked parser architecture.

Security review should refine the exact IAM statements, but the intended boundary is:

### Allowed management families, only within approved non-production parser scope

- **Lambda:** create/update/configure/version/alias/function-URL operations for the approved parser function namespace.
- **S3:** create/configure the one transient parser-ingress bucket, public-access block, encryption, CORS/policy/lifecycle/checksum-related configuration, and only the object operations required by the deployment/verification contract.
- **CloudWatch Logs / metrics:** create/configure only parser log groups/retention and required monitoring resources.
- **IAM:** only the narrow runtime roles/policies and `iam:PassRole` relationships required by the parser architecture, constrained to the approved parser IAM namespace, required tags, and an approved permission boundary so the deploy role cannot manufacture unrestricted roles.
- **IAM Roles Anywhere:** only the trust-anchor/profile management required by the locked runtime model and only for the parser namespace.
- **STS/read-only identity verification:** `GetCallerIdentity` and other narrowly required verification calls.
- **Tagging/read-only describe/list calls:** only where required to safely plan, verify, update, or roll back the approved resources.

### Explicitly excluded from steady-state deploy authority

- editing the deploy role's own trust policy or permission policy;
- altering/deleting the GitHub OIDC provider;
- removing or bypassing the required IAM permission boundary;
- attaching `AdministratorAccess` or equivalent broad managed policies;
- creating IAM users or access keys;
- modifying billing/account/root settings;
- Organizations/Identity Center administration;
- unrelated S3/Lambda/IAM resources;
- any production namespace;
- Supabase, Lovable, DNS/domain, or non-AWS provider authority.

Where an AWS create API cannot be resource-ARN-scoped before creation, Security review must require the strongest available request-tag, naming, permission-boundary, and condition-key controls. If a required action cannot be bounded acceptably, that is a Security blocker rather than a reason to grant permanent administrator access.

---

## 12. Temporary / Bootstrap Privilege Treatment

The only proposed high-privilege bootstrap identity is the already secured root user, used interactively by the Founder for the minimum one-time OIDC/deploy-role establishment because no delegated identity currently exists.

Bootstrap rules:

- root MFA required;
- console/interactively controlled use only;
- no root access key;
- no root credential exposure to GitHub, ChatGPT, Claude Code, repository or local `.env`;
- bootstrap ends once the OIDC provider and bounded deploy role exist and are verified;
- root is not used for subsequent deployments;
- any later change to the deploy-role trust or permission boundary requires separate human-reviewed security authority.

This is not a declaration that OIDC/provider creation technically requires root. It is a controlled initial-account bootstrap choice because the account currently has no safer delegated administrative identity and enabling a broader identity platform is unnecessary for this narrow gate.

---

## 13. Secret / Credential Model

Target steady state:

- GitHub stores **no AWS access key ID/secret access key** for deployment.
- GitHub receives a short-lived OIDC token at job runtime.
- AWS STS exchanges that token for a temporary role session.
- Claude Code/ChatGPT never receives root credentials or static AWS credentials.
- Root password/MFA material remains outside repository and automation.
- Runtime IAM Roles Anywhere private-key/certificate handling remains governed by the separately locked runtime-security contract and is not reused for deployment.

Non-secret configuration may include:

- AWS account ID;
- `ap-south-1`;
- deploy-role ARN/name;
- OIDC provider ARN/metadata;
- resource names/prefixes;
- GitHub repository/environment identifiers;
- reviewed IAM policy/trust-policy documents.

---

## 14. Human Approval Boundaries

The future deployment workflow must not convert a merged code change directly into an unattended AWS mutation.

Required controls:

- infrastructure change requires human-reviewed PR and Mission Control authority;
- deployment job uses the dedicated GitHub Environment;
- explicit human/Founder environment approval where supported;
- destructive or high-impact operations are not part of the default deployment path;
- deletion of Lambda/S3/IAM Roles Anywhere/IAM role resources, trust-policy broadening, permission-boundary changes, OIDC-provider changes, or environment/region/account changes require separate explicit authorization;
- workflow must stop on account/region/name/tag mismatch;
- workflow must stop if OIDC claims do not match the reviewed trust contract;
- workflow must stop if a requested action would require static AWS credentials or broad permanent administrator access.

---

## 15. Runtime IAM Roles Anywhere Relationship

The deployment role creates/configures infrastructure only after a later provisioning/build authorization.

The runtime identity remains separate:

`Smart Business server runtime → X.509 workload identity → IAM Roles Anywhere → short-lived runtime role session → AWS_IAM parser Function URL`

The GitHub deploy role must not be reused by the Smart Business application runtime, and the workload private key/certificate must never be stored in GitHub Actions merely because GitHub is the deployment path.

No current AWS evidence contradicts the locked IAM Roles Anywhere model in this design review.

---

## 16. Security & Permissions Architecture Review Required

Before provisioning, Security & Permissions Architecture must review at minimum:

1. exact GitHub OIDC claims/trust-policy restrictions, including current immutable-subject behavior where applicable;
2. exact repository/environment/ref restrictions and fail-closed claim mismatch behavior;
3. whether stable `repository_id` / `repository_owner_id` conditions should be mandatory in addition to `sub`;
4. deploy-role permission policy and permission-boundary design;
5. IAM privilege-escalation paths, especially `CreateRole`, `PutRolePolicy`, policy attachment and `PassRole`;
6. Roles Anywhere create/manage permissions and whether any action requires `Resource: *` with compensating conditions;
7. S3 bucket-policy/public-access/lifecycle permissions and deletion controls;
8. Lambda Function URL permission controls;
9. bootstrap root-use exception and whether the proposed bootstrap can be further reduced without forcing AWS Organizations/paid-plan changes;
10. destructive-action/human-approval boundaries;
11. secret leakage and artifact/log exposure risks;
12. deployment identity vs runtime IAM Roles Anywhere separation;
13. account/region/non-production naming mismatch stop rules.

Only a later human-reviewed merged Security PASS may make provisioning eligible.

---

## 17. Remaining Blocker / Tooling Status

No unresolved technical blocker prevents Security review of this design.

The expected later implementation dependency is intentional: the OIDC provider, deploy role, GitHub Environment and deployment workflow do not yet exist and must not exist until Security review and separate provisioning authorization.

No AWS-capable ChatGPT/Claude execution integration was required to select this design. Repository capability plus current official AWS/GitHub federation guidance is sufficient for the design stage.

---

## 18. No-Mutation Confirmation

During GC-40:

- AWS root/account settings changed: **NO**
- IAM user/role/policy/provider created or changed: **NO**
- IAM Identity Center/Organizations changed: **NO**
- GitHub AWS deployment Environment/workflow created: **NO**
- AWS access key/session token created or disclosed: **NO**
- Lambda created/changed: **NO**
- S3 bucket/object created/changed: **NO**
- IAM Roles Anywhere created/changed: **NO**
- certificate/private key created/handled: **NO**
- Function URL created/changed: **NO**
- CloudFormation/CDK/Terraform apply: **NO**
- application/parser implementation: **NO**
- dependency change: **NO**
- Supabase mutation/migration: **NO**
- Lovable change: **NO**
- deployment/publication/production action: **NO**
- GC-38 reactivated: **NO**

The only repository deliverable created by GC-40 is:

`communication/live/report1.144.md`

---

## 19. Final Disposition

`AWS EXECUTION-ACCESS DESIGN — READY FOR SECURITY REVIEW`

Exactly one deployment/control-plane design is recommended:

**GitHub Actions OIDC federation from `SmartBusinessv1/smart-business` through the protected `aws-nonprod-parser` GitHub Environment into the narrowly scoped `TeamLIPS-SB-NonProd-Parser-DeployRole` in AWS account `658980433673`, with a one-time Founder-controlled MFA-protected bootstrap and no long-lived AWS access keys.**

This is a design recommendation only. Actual AWS/GitHub provisioning remains prohibited until the required Security & Permissions Architecture review is human-reviewed and merged and Mission Control issues a separate provisioning authorization.
