# SMART BUSINESS — SECURITY & PERMISSIONS ARCHITECTURE VERIFICATION REPORT

## SB-P-1.11-GC-43 — Post-Provisioning Security & Permissions Verification

**Report ID:** `report1.149`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-43 — Post-Provisioning Security & Permissions Verification`  
**Instruction Executed:** `communication/live/instruction1.139.md`  
**Executing Room:** Security & Permissions Architecture  
**Mode:** INDEPENDENT READ-ONLY SECURITY VERIFICATION  
**AWS / GitHub Mutation Authority:** NONE  
**Application / Parser Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission and Authority

This report independently reviews the actual GC-42A execution-access boundary recorded in merged `communication/live/report1.147.md` against the binding GC-41 security requirements and the Founder-stage amendment in `communication/live/instruction1.137.md`.

This is a post-provisioning verification, not a design review and not a restatement of Infrastructure Operations' recommendation.

No AWS, GitHub Environment, repository protection, Supabase, Lovable, parser, deployment, publication, or production state was modified during this review.

---

## 2. Exact Canonical `main` SHA Reviewed

Exact merged `main` reviewed:

`48247cbacef85f241b1e1618f1e219c1692e5169`

The reviewed baseline contains merged `instruction1.139.md`, final GC-42A provisioning report `report1.147.md`, GC-42B correction report `report1.148.md`, the canonical OIDC-claims workflow, and the role-assumption verification workflow.

---

## 3. Primary Inputs Reviewed

Reviewed from the exact canonical baseline:

- `communication/live/instruction1.139.md`;
- `communication/live/report1.147.md`;
- `communication/live/instruction1.137.md`;
- `communication/live/report1.146.md`;
- `communication/live/report1.145.md`;
- `communication/live/report1.144.md`;
- `.github/workflows/aws-gc42-oidc-claims.yml`;
- `.github/workflows/aws-gc42-role-assumption-verification.yml`;
- `communication/live/report1.148.md`;
- PR `#319` repository evidence for the canonical role-assumption verification workflow;
- repository diff from pre-GC-42 provisioning authorization baseline `cca08de309f81b82a57cb8173c132b9da4551371` through current `main`.

The Founder-stage exception remains frozen as authorized:

> While Riyas PK remains the sole authorized Smart Business infrastructure operator, `Prevent self-review` is not required for `aws-nonprod-parser`.

All other GC-41 controls remain binding.

---

## 4. Evidence Classification and Limitation

This review distinguishes:

- **DIRECT REPOSITORY/GITHUB EVIDENCE** — artifacts and repository state independently inspected through the connected GitHub provider;
- **REPORT-DERIVED EVIDENCE** — provider-state facts recorded by Infrastructure Operations in merged `report1.147.md` but not independently readable from the available provider connection in this room;
- **NOT VERIFIED** — a load-bearing provider-state control for which independent read-only evidence is not available to this room.

The available GitHub connection permits direct repository, PR, workflow-source and commit inspection. It does not expose read-only AWS IAM/STS/CloudTrail state, AWS Policy Simulator output, or GitHub Environment protection/secrets configuration.

Per `instruction1.139.md`, missing provider-state evidence is not filled by inference and no platform mutation is permitted merely to obtain it.

---

# SECURITY VERIFICATION

## 5. SEC-GC43-01 — Exact GitHub OIDC Trust Policy

**Result: NOT VERIFIED.**

### Evidence inspected

Direct repository evidence confirms both canonical workflows request OIDC tokens with audience `sts.amazonaws.com`, and `report1.147.md` records the intended exact environment-bearing subject and immutable repository conditions.

The report states the provisioned trust contains exact equality for:

- provider `token.actions.githubusercontent.com`;
- audience `sts.amazonaws.com`;
- subject `repo:SmartBusinessv1/smart-business:environment:aws-nonprod-parser`;
- repository `SmartBusinessv1/smart-business`;
- repository ID `1287523579`;
- repository owner ID `298686418`;
- environment `aws-nonprod-parser`;
- ref `refs/heads/main`.

### Independent verification gap

The actual AWS role trust-policy JSON is not independently readable through the tools available to this room. No repository copy of the provisioned trust-policy document is present.

Therefore this review cannot independently prove absence of an additional broadened statement, wildcard principal, fallback `sub`, owner-wide trust, or alternate federation statement.

### Residual requirement

Read-only inspection of the effective AWS role trust policy is required before this item can PASS.

---

## 6. SEC-GC43-02 — GitHub Environment Protection

**Result: NOT VERIFIED.**

### Direct evidence

The canonical credential-bearing workflow explicitly references:

`environment: aws-nonprod-parser`

and only the `main` positive job can enter the intended assumption path.

### Report-derived evidence

`report1.147.md` states:

- required reviewer = Founder account `SmartBusinessv1`;
- `Prevent self-review` OFF under the approved exception;
- administrator bypass disabled;
- deployment branches/tags restricted to selected sources;
- branch `main` only;
- no allowed tags;
- no environment secrets.

### Independent verification gap

The connected GitHub toolset does not expose Environment protection settings, reviewers, administrator-bypass state, deployment-branch rules, or environment secret inventory.

Those are load-bearing controls and cannot be independently confirmed from workflow YAML alone.

Read-only GitHub Environment configuration evidence is required before PASS.

---

## 7. SEC-GC43-03 — Positive OIDC Assumption Evidence

**Result: PASS WITH EVIDENCE-DEPTH LIMITATION.**

### Direct repository evidence

The canonical workflow:

- targets exactly `arn:aws:iam::658980433673:role/TeamLIPS-SB-NonProd-Parser-DeployRole`;
- requests a 900-second `AssumeRoleWithWebIdentity` session;
- runs the intended positive job only when `github.ref == 'refs/heads/main'`;
- references environment `aws-nonprod-parser`;
- checks account `658980433673` after assumption;
- constrains the accepted caller ARN to the exact deploy-role session pattern;
- fixes region to `ap-south-1`;
- fixes expected environment to `nonprod`;
- references no static AWS access key or secret.

PR `#319` independently confirms this verification-only workflow was human-merged into canonical `main`.

### Report-derived runtime evidence

`report1.147.md` records a successful protected `main` + environment OIDC role assumption using a 900-second session and `sts:GetCallerIdentity` in account `658980433673`.

### Limitation

The successful STS response/run log is not independently queryable from the available connector because manually dispatched workflow-run evidence is not surfaced through the commit-run API used by this room.

The repository control path itself is directly verified; runtime success remains report-derived.

---

## 8. SEC-GC43-04 — Negative OIDC Assumption Evidence

**Result: NOT VERIFIED.**

### Direct repository evidence

The canonical workflow contains two explicit fail-closed negative tests:

1. a `main` job without the protected environment that fails the workflow if role assumption unexpectedly succeeds;
2. a non-main job that fails the workflow if role assumption unexpectedly succeeds.

The workflow uses no trust-broadening fallback.

### Report-derived evidence

`report1.147.md` records:

- missing-environment subject rejection with `AccessDenied`;
- non-main subject rejection with `AccessDenied`;
- zero assumed-role resource/session from the rejected contexts;
- no trust broadening.

### Independent verification gap

The corresponding STS/CloudTrail negative events and workflow-run logs are not independently readable through the available toolset.

Because the instruction requires post-provisioning verification of actual rejection, not only test-code existence, this item remains NOT VERIFIED.

---

## 9. SEC-GC43-05 — Deploy-Role Least Privilege

**Result: NOT VERIFIED.**

### Report-derived evidence

`report1.147.md` states the deploy role has one customer-managed policy only and no `AdministratorAccess`, `PowerUserAccess`, `iam:*`, `s3:*`, `lambda:*`, or equivalent broad administrative authority.

It further states Lambda, S3, CloudWatch Logs, IAM, IAM Roles Anywhere, read/describe and tagging authority are constrained to the approved parser non-production scope.

### Independent verification gap

The actual effective identity policy document, policy version, attached-policy list and any inline policies are not independently inspectable from this room.

A security PASS cannot be issued on a least-privilege boundary based solely on a prose summary of the policy that is being verified.

Read-only effective-policy inspection is required.

---

## 10. SEC-GC43-06 — Self-Escalation Prevention

**Result: NOT VERIFIED.**

### Report-derived evidence

`report1.147.md` records Policy Simulator implicit-deny results for:

- deploy-role trust updates;
- attaching/putting broader policies on the deploy role;
- IAM user/access-key creation;
- GitHub OIDC-provider mutation/deletion;
- runtime-boundary policy-version mutation;
- arbitrary `sts:AssumeRole` pivot.

### Independent verification gap

Neither the actual deploy policy nor the Policy Simulator result set is independently available through the current provider connection.

Because self-escalation prevention is load-bearing, this item cannot PASS from report-derived assertions alone.

---

## 11. SEC-GC43-07 — Runtime Permission Boundary

**Result: NOT VERIFIED.**

### Report-derived evidence

`report1.147.md` records existence of:

`TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`

and states it excludes IAM/federation administration, deploy-role/OIDC administration, arbitrary role assumption, unrelated control-plane authority and production/account-wide reach.

### Independent verification gap

The actual permission-boundary policy JSON and default policy version are not independently inspectable in this room.

The report also states the deploy role cannot create/promote boundary policy versions, but that fact depends on effective policy inspection that is likewise unavailable.

Result remains NOT VERIFIED.

---

## 12. SEC-GC43-08 — `iam:PassRole`

**Result: NOT VERIFIED.**

### Report-derived evidence

`report1.147.md` states `iam:PassRole` is restricted to exact parser runtime role/use paths and intended services, excluding the deploy role, production roles, admin roles and unrelated roles.

### Independent verification gap

The actual `iam:PassRole` statements, `Resource` values and `iam:PassedToService` conditions cannot be independently inspected.

Because `iam:PassRole` is a primary privilege-escalation boundary, report-level summarization is insufficient for PASS.

---

## 13. SEC-GC43-09 — Workflow / Supply-Chain Boundary

**Result: PASS.**

### Direct evidence

The current canonical `.github/workflows/aws-gc42-role-assumption-verification.yml` independently verifies:

- trigger is `workflow_dispatch` only;
- repository-level `permissions` is `contents: read`;
- positive OIDC job is gated by `github.ref == 'refs/heads/main'`;
- positive credential-bearing job explicitly references `aws-nonprod-parser`;
- `id-token: write` exists only on OIDC-requiring jobs;
- no `pull_request` or `pull_request_target` trigger exists;
- no source checkout occurs after credentials are acquired;
- no arbitrary ref fetch or execution occurs in the credential-bearing path;
- no third-party GitHub Action is used;
- AWS credentials are obtained through direct OIDC + STS and masked before job-environment export;
- the workflow performs verification only and contains no Lambda, S3, IAM Roles Anywhere, parser or deployment mutation.

The current OIDC-claims workflow is likewise `workflow_dispatch` only and contains no AWS credentials or AWS mutation.

PR `#319` confirms the credential-bearing workflow was merged as a one-file, verification-only change.

No workflow-supply-chain blocker was identified in the actual canonical YAML.

---

## 14. SEC-GC43-10 — Non-Production Isolation

**Result: PASS FOR WORKFLOW PREFLIGHT; NOT VERIFIED FOR EFFECTIVE IAM RESOURCE SCOPE.**

### Direct workflow evidence

The positive workflow fails before credential use unless:

- ref is `refs/heads/main`;
- region is `ap-south-1`;
- expected environment is `nonprod`.

After assumption it requires:

- account `658980433673`;
- assumed-role ARN matching `TeamLIPS-SB-NonProd-Parser-DeployRole/*`.

### Gap

The actual deploy policy's resource ARNs, naming/tag conditions and absence of production reach cannot be independently inspected.

The workflow-level preflight is sound, but effective IAM non-production isolation remains NOT VERIFIED until the actual policy is inspected read-only.

---

## 15. SEC-GC43-11 — Static Credential Posture

**Result: PASS FOR REPOSITORY/WORKFLOW; GITHUB ENVIRONMENT SECRET INVENTORY NOT VERIFIED.**

### Direct evidence

The canonical workflows contain no AWS access-key ID, secret access key, session token, root credential or IAM-user credential as a configured repository secret reference.

The positive workflow obtains an OIDC token at runtime, exchanges it for a 900-second STS session, masks the returned temporary credentials, and exports them only to the running job environment.

Repository comparison from the GC-42 provisioning authorization baseline through current `main` shows only the two verification workflows, Markdown CI correction, and communication artifacts; no credential/configuration file or parser implementation was introduced by this chain.

### Report-derived evidence

`report1.147.md` states:

- no root access key;
- no IAM-user engineering access key;
- no GitHub Environment AWS access-key secret;
- no static deployment credential.

### Gap

The GitHub Environment secret inventory and AWS IAM user/root credential inventories are not independently exposed to this room.

No repository-level static-credential defect is present, but provider-side inventories remain report-derived.

---

## 16. SEC-GC43-12 — CloudTrail / STS Auditability

**Result: NOT VERIFIED.**

### Report-derived evidence

`report1.147.md` records three `AssumeRoleWithWebIdentity` events:

- protected-environment success;
- missing-environment `AccessDenied`;
- non-main `AccessDenied`.

The recorded subjects align with the expected contexts and no credential material is reproduced in the report.

### Independent verification gap

CloudTrail Event History / STS events are not available through any read-only AWS provider connection in this room.

The event existence, exact role mapping and zero-session rejection outcomes therefore remain report-derived and cannot independently PASS.

---

## 17. SEC-GC43-13 — Root Bootstrap Exit

**Result: NOT VERIFIED.**

### Report-derived evidence

`report1.147.md` records Founder confirmation:

`ROOT BOOTSTRAP EXITED`

and states no root access key was created and root is absent from the steady-state workflow.

### Direct repository evidence

The canonical workflow authenticates exclusively through GitHub OIDC and the bounded deploy role; it contains no root/static-credential path.

### Independent verification gap

Current root credential/MFA/access-key state cannot be read independently by this room.

The steady-state repository path is correct, but the root-account state itself remains NOT VERIFIED.

---

## 18. SEC-GC43-14 — Deployment vs Runtime Identity Separation

**Result: PASS AT REPOSITORY/BOUNDARY LEVEL.**

### Direct evidence

The canonical role-assumption workflow references only:

`TeamLIPS-SB-NonProd-Parser-DeployRole`

and performs verification-only STS caller checks.

It contains no IAM Roles Anywhere runtime certificate/private key, workload credential, Function URL invocation path or parser runtime secret.

Repository comparison across the GC-42/GC-42A chain shows no runtime certificate/private key, IAM Roles Anywhere implementation, parser integration or application-runtime credential material was added.

### Report-derived provider evidence

`report1.147.md` states no IAM Roles Anywhere trust anchor/profile, workload X.509 certificate/private key or Lambda Function URL was created.

No evidence indicates the deployment role has replaced the locked runtime workload identity.

---

## 19. SEC-GC43-15 — Scope Integrity / No Premature Parser Implementation

**Result: PASS FOR REPOSITORY STATE; AWS RESOURCE NON-EXISTENCE PARTLY REPORT-DERIVED.**

### Direct repository evidence

Comparison from pre-GC-42 baseline `cca08de309f81b82a57cb8173c132b9da4551371` through current `main` shows only:

- `.github/workflows/aws-gc42-oidc-claims.yml` added;
- `.github/workflows/aws-gc42-role-assumption-verification.yml` added;
- `.github/workflows/markdown-quality-gate.yml` narrowly corrected;
- GC-42/42A/42B/43 communication instructions/reports added.

No parser application code, infrastructure-as-code, Lambda implementation, S3 implementation, Supabase migration, Lovable change or production deployment artifact was introduced by the GC-42 chain.

### Report-derived AWS evidence

`report1.147.md` states no Lambda parser function, parser-ingress S3 bucket/object, IAM Roles Anywhere trust anchor/profile, runtime certificate/private key, Lambda Function URL, production AWS resource or parser deployment exists.

Because AWS resource inventory is not independently readable here, the AWS non-existence component remains report-derived.

---

# RESULT MATRIX

## 20. SEC-GC43 Matrix

| Item | Result | Primary evidence class |
|---|---|---|
| SEC-GC43-01 Exact OIDC trust policy | NOT VERIFIED | AWS policy only report-derived |
| SEC-GC43-02 GitHub Environment protection | NOT VERIFIED | Environment settings only report-derived |
| SEC-GC43-03 Positive OIDC assumption | PASS with evidence-depth limitation | Workflow direct; runtime result report-derived |
| SEC-GC43-04 Negative OIDC assumption | NOT VERIFIED | Test code direct; actual rejections report-derived |
| SEC-GC43-05 Deploy-role least privilege | NOT VERIFIED | AWS effective policy unavailable |
| SEC-GC43-06 Self-escalation prevention | NOT VERIFIED | Simulator/policy evidence unavailable |
| SEC-GC43-07 Runtime permission boundary | NOT VERIFIED | AWS boundary document unavailable |
| SEC-GC43-08 `iam:PassRole` | NOT VERIFIED | AWS statements unavailable |
| SEC-GC43-09 Workflow/supply-chain | PASS | Direct canonical workflow inspection |
| SEC-GC43-10 Non-production isolation | PASS workflow / NOT VERIFIED IAM | Direct preflight; AWS resource scope unavailable |
| SEC-GC43-11 Static credential posture | PASS repository / provider inventory not verified | Direct workflow/repository plus report-derived inventory |
| SEC-GC43-12 CloudTrail/STS auditability | NOT VERIFIED | AWS audit events unavailable |
| SEC-GC43-13 Root bootstrap exit | NOT VERIFIED | Workflow direct; root state report-derived |
| SEC-GC43-14 Deploy/runtime separation | PASS | Direct repository/workflow plus report-derived provider state |
| SEC-GC43-15 Scope integrity | PASS repository / AWS non-existence report-derived | Direct repository diff plus report-derived AWS inventory |

---

## 21. Material Security / Evidence Blocker

The provisioned boundary may be correctly configured exactly as `report1.147.md` states, but the current Security room cannot independently prove the load-bearing provider configuration.

The missing read-only evidence covers the controls that actually determine AWS authority:

1. effective deploy-role trust policy;
2. effective deploy-role permissions policy and all attachments/inline policies;
3. runtime permission-boundary policy document/default version;
4. exact `iam:PassRole` resources and service conditions;
5. effective self-escalation denial/no-grant structure;
6. actual GitHub Environment reviewer/bypass/main-only/no-secret configuration;
7. actual positive and negative STS/CloudTrail events;
8. current root/no-static-access-key provider state.

These are not cosmetic evidence gaps. They are the exact properties this post-provisioning gate exists to independently verify.

A security PASS would therefore overstate the available evidence.

---

## 22. Required Evidence for a Later Re-Verification

A later Security re-verification can close this gate without any architecture redesign if Mission Control provides or exposes read-only evidence equivalent to:

- `aws iam get-role` for the deploy role including trust policy;
- complete attached and inline role-policy inventory plus current effective policy JSON;
- current default policy version for the deploy policy;
- `aws iam get-policy` / `get-policy-version` for `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`;
- exact `iam:PassRole` statement inspection;
- read-only Policy Simulator output or reproducible no-mutation simulator evidence for the GC-41 negative set;
- GitHub Environment read-only configuration showing reviewer, self-review exception, administrator bypass state, deployment branch/tag policy, and secret names/count without exposing secret values;
- GitHub Actions run/job evidence for the positive and both negative role-assumption paths;
- read-only CloudTrail Event History entries for the three `AssumeRoleWithWebIdentity` events;
- read-only account credential posture sufficient to confirm no root/IAM-user engineering access key exists;
- read-only AWS resource inventory sufficient to confirm GC-42A created only execution-access IAM/OIDC boundary resources and no parser runtime resources.

If those artifacts match `report1.147.md`, the current repository-side findings indicate no separate design correction is presently apparent.

---

## 23. GC-38 Reactivation Decision

**Security result: NOT READY FOR REACTIVATION DECISION.**

The current repository workflow design is coherent and no direct repository-side security defect was found. However, the actual AWS/GitHub authority boundary cannot be independently certified from the evidence accessible to this room.

Therefore this report does not state that the completed boundary is safe enough for Mission Control to reactivate GC-38.

Mission Control should keep GC-38 stopped until the provider-state evidence in Section 22 is independently reviewed and the load-bearing NOT VERIFIED items are closed.

---

## 24. No-Mutation Confirmation

During GC-43:

- AWS IAM/resource mutation: **NO**;
- AWS role assumption initiated by this room: **NO**;
- GitHub Environment/protection mutation: **NO**;
- GitHub secret mutation: **NO**;
- workflow execution triggered by this room: **NO**;
- Supabase mutation/migration: **NO**;
- Lovable mutation: **NO**;
- parser/application implementation: **NO**;
- deployment/publication: **NO**;
- production state touched: **NO**.

No static AWS access key was created, requested, approved or handled by this review.

The only repository artifact created by this mission is:

`communication/live/report1.149.md`

---

## 25. Final Disposition

`AWS EXECUTION-ACCESS POST-PROVISIONING SECURITY VERIFICATION — STOPPED — SECURITY OR EVIDENCE BLOCKER`

Reason:

The repository and workflow controls can be independently inspected and are coherent, but the actual provisioned AWS trust/permission/permission-boundary/PassRole/self-escalation/audit state and GitHub Environment protection/secrets state are not independently readable from this Security room. Those load-bearing provider controls therefore remain `NOT VERIFIED`.

This is an evidence stop, not a finding that GC-42A is incorrectly configured.

GC-38 remains stopped. Human review and merge of this report are required. No self-merge.
