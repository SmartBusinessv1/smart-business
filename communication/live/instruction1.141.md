# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-43B — POST-EVIDENCE SECURITY RE-VERIFICATION

**Instruction ID:** `instruction1.141`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-43B — Post-Evidence Security Re-Verification`  
**Executing Room:** Security & Permissions Architecture  
**Authorized By:** Founder / Mission Control  
**Mode:** READ-ONLY INDEPENDENT SECURITY RE-VERIFICATION  
**AWS / GitHub Mutation Authority:** NONE  
**Application / Parser Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Resume the independent GC-43 post-provisioning Security & Permissions Architecture verification after completion of the GC-43A evidence-recovery mission.

The purpose is to independently evaluate the actual provisioned GC-42A execution-access boundary using the now-canonical provider-derived evidence package rather than relying only on Infrastructure Operations assertions.

Required completion report:

`communication/live/report1.151.md`

---

## 2. Canonical Entry State

Execute only after this instruction is human-reviewed and merged to `main`.

Before beginning, read at minimum:

1. `communication/live/instruction1.139.md`;
2. `communication/live/report1.149.md`;
3. `communication/live/instruction1.140.md`;
4. `communication/live/report1.150.md`;
5. `communication/live/report1.147.md`;
6. `communication/evidence/SB-P-1.11-GC-43A/manifest.md`;
7. every evidence file referenced by that manifest;
8. current canonical GitHub workflows relevant to GC-42A OIDC verification.

Canonical baseline when this authorization was prepared:

`13b0027143543c8ff726e6dd1761e1fa8be3aac6`

Commit:

`SB-P-1.11-GC-43A: recover provider-derived security evidence (#324)`

---

## 3. Independence Requirement

Security & Permissions Architecture must make a fresh determination from the evidence itself.

Do not treat any of the following as proof merely because Infrastructure Operations previously reported them:

- `report1.147.md`;
- `report1.150.md`;
- PR descriptions;
- Mission Control summaries.

Those documents may provide context and evidence pointers, but Security must inspect the underlying canonical evidence package and repository state before classifying a control PASS.

Infrastructure Operations does not approve its own work.

---

## 4. Required Re-Verification Scope

Re-evaluate the full GC-43 control set, with particular attention to the controls previously left `NOT VERIFIED`.

At minimum verify:

### 4.1 Exact GitHub OIDC trust

Inspect the captured provider-derived trust policy and determine whether it is fail-closed to:

- AWS account `658980433673`;
- GitHub OIDC provider `token.actions.githubusercontent.com`;
- audience `sts.amazonaws.com`;
- repository `SmartBusinessv1/smart-business`;
- repository ID `1287523579`;
- repository owner ID `298686418`;
- environment `aws-nonprod-parser`;
- subject `repo:SmartBusinessv1/smart-business:environment:aws-nonprod-parser`;
- ref `refs/heads/main`;
- `sts:AssumeRoleWithWebIdentity` only;
- no wildcard or broader repository/owner/ref trust.

### 4.2 GitHub Environment protections

Inspect provider-state evidence for `aws-nonprod-parser` and verify:

- required reviewer = Founder account `SmartBusinessv1` / Riyas PK;
- `Prevent self-review` OFF only under the already-authorized sole-Founder exception;
- administrator bypass disabled;
- selected branches/tags restriction present;
- allowed branch `main` only;
- allowed tags none;
- environment secrets none;
- environment variables none unless separately justified by canonical state.

Do not treat the approved self-review exception as a failure by itself.

### 4.3 OIDC positive and negative assumption evidence

Inspect the sanitized provider-derived CloudTrail / STS evidence and repository workflow implementation for:

- successful protected `main` + environment assumption;
- missing-environment subject rejected with `AccessDenied`;
- non-main ref rejected with `AccessDenied`;
- no evidence of trust broadening to make the tests pass;
- short-lived STS role-session behavior;
- account and region consistency.

### 4.4 Deploy-role effective least privilege

Inspect the captured actual deploy policy and determine whether its authority is bounded to the approved non-production parser control plane.

Evaluate at minimum:

- Lambda scope and Function URL `AWS_IAM` protection;
- S3 bucket/object scope;
- log-group scope;
- IAM runtime-role scope;
- Roles Anywhere creation/read scope;
- broad `Resource: "*"` statements and whether their conditions are sufficiently restrictive;
- absence of broad administrative actions such as `iam:*`, `s3:*`, `lambda:*`, AdministratorAccess, PowerUserAccess, or equivalent;
- whether any policy statement creates an unintended privilege-escalation or production pivot.

### 4.5 Permission inventory / inline-policy evidence limitation

`report1.150.md` records one residual evidence-depth limitation: a direct `ListRolePolicies` API output was not captured because CloudShell was unavailable.

The provider IAM role page reportedly showed `Permissions policies (1)` and displayed only `TeamLIPS-SB-NonProd-Parser-DeployPolicy`.

Security must independently decide whether the canonical provider evidence is sufficient to establish the effective permission inventory.

Possible outcomes:

- PASS if the available provider-derived evidence is sufficient and no material ambiguity remains;
- NOT VERIFIED / STOPPED if inline-policy absence cannot be established with acceptable confidence;
- CORRECTION REQUIRED only if an actual security defect is identified.

Do not invent an API requirement if the provider evidence already proves the relevant state to a reasonable security-verification standard. Conversely, do not promote ambiguity to PASS merely for momentum.

### 4.6 Self-escalation prevention

Inspect provider-derived IAM Policy Simulator evidence for denial of at least:

- deploy-role trust self-edit;
- attach/put policy to deploy role;
- IAM user creation;
- access-key creation;
- OIDC-provider mutation/deletion;
- runtime-boundary policy version/default-version mutation;
- self-assume;
- arbitrary-role `sts:AssumeRole` pivot.

Also cross-check the actual deploy policy for structural paths that the selected simulator probes may have missed.

### 4.7 Runtime permission boundary

Inspect the actual captured runtime-boundary policy and determine whether it acts as a maximum-permission ceiling for parser runtime roles and excludes:

- IAM identity/federation administration;
- deploy-role administration;
- OIDC provider administration;
- arbitrary role assumption;
- Organizations / Identity Center / billing / account / root administration;
- unrelated or production control-plane authority.

Verify that the deploy role lacks authority to modify or promote the boundary policy itself.

### 4.8 Exact `iam:PassRole`

Inspect the actual deploy policy and verify that `iam:PassRole` is limited to:

1. `TeamLIPS-SB-NonProd-Parser-LambdaExecutionRole` → `lambda.amazonaws.com`;
2. `TeamLIPS-SB-NonProd-Parser-WorkloadRole` → `rolesanywhere.amazonaws.com`.

No deploy role, admin role, unrelated role, production role, or arbitrary role should be passable.

### 4.9 Non-production isolation

Verify the policy documents, trust, workflow, and evidence consistently constrain execution to:

- AWS account `658980433673`;
- region `ap-south-1` where region-scoped resources apply;
- non-production parser namespace;
- no production identifiers/resources;
- exact Smart Business parser names/tags where required.

### 4.10 Static-credential posture and root bootstrap exit

Inspect provider-state evidence for:

- IAM users = `0`;
- root access keys = `0`;
- GitHub Environment AWS secrets = none;
- root MFA present;
- operational execution path = GitHub OIDC → STS → bounded deploy role;
- no evidence root is used as steady-state deployment identity.

### 4.11 Workflow / supply-chain boundary

Inspect canonical GC-42A verification workflows and confirm:

- credential-bearing path is `workflow_dispatch` only unless otherwise explicitly authorized;
- `id-token: write` is limited to jobs that need it;
- successful assumption path is gated by `aws-nonprod-parser` environment and `main`;
- no static AWS secret is referenced;
- no untrusted PR/fork code executes after AWS credentials are acquired;
- no broad third-party action dependency exists in the credential-bearing verification path without proper pinning;
- verification workflow itself does not create parser resources.

### 4.12 Deployment/runtime identity separation

Confirm the provisioned deployment identity remains distinct from the not-yet-built runtime IAM Roles Anywhere identity architecture.

The existence of deploy-role permissions to create narrowly approved runtime resources does not mean those runtime resources already exist.

### 4.13 Non-implementation boundary

Confirm canonical evidence still supports that GC-42A / GC-43A did not implement or deploy:

- Lambda parser function;
- parser-ingress S3 bucket/object;
- IAM Roles Anywhere trust anchor/profile;
- runtime X.509 certificate/private key;
- Lambda Function URL;
- parser application integration;
- Supabase mutation;
- Lovable mutation;
- production migration/deployment/publication.

---

## 5. Read-Only Authority Boundary

Security & Permissions Architecture is authorized to:

- read canonical repository files;
- inspect the canonical evidence package;
- inspect existing GitHub metadata and workflow state available through read-only tooling;
- compare evidence against GC-41 / GC-42A requirements;
- classify controls PASS / FAIL / NOT VERIFIED;
- document findings and required corrections.

Security is not authorized to:

- modify AWS IAM, OIDC, Lambda, S3, Roles Anywhere, CloudTrail, account or root configuration;
- modify GitHub Environment, rulesets, branch protection, workflows or repository settings;
- create any credential, key, token, certificate or secret;
- trigger deployment or implementation workflows;
- mutate Supabase or Lovable;
- implement parser/application functionality;
- deploy or publish;
- apply production migrations;
- reactivate GC-38.

If stronger provider evidence is still required, STOP and specify the exact missing evidence. Do not mutate the provider merely to make evidence easier to obtain.

---

## 6. Required Control Matrix

`report1.151.md` must include a control-by-control matrix covering the GC-43 verification scope.

For each control state:

- control ID / name;
- evidence inspected;
- independent Security finding;
- classification: PASS / FAIL / NOT VERIFIED;
- remediation or evidence requirement where applicable.

Previously verified repository/workflow controls may remain PASS only after confirming canonical state has not materially changed.

---

## 7. Required Final Disposition

The report must end with exactly one of:

- `AWS EXECUTION-ACCESS POST-PROVISIONING SECURITY VERIFICATION — PASS — GC-38 REACTIVATION DECISION ELIGIBLE`
- `AWS EXECUTION-ACCESS POST-PROVISIONING SECURITY VERIFICATION — CORRECTION REQUIRED`
- `AWS EXECUTION-ACCESS POST-PROVISIONING SECURITY VERIFICATION — STOPPED — SECURITY OR EVIDENCE BLOCKER`

A PASS means only that Mission Control may consider a separate GC-38 reactivation authorization.

A PASS does not itself reactivate GC-38 or authorize Lambda/parser implementation.

---

## 8. Required Report

Security & Permissions Architecture shall produce:

`communication/live/report1.151.md`

The report must state:

- exact instruction executed;
- exact canonical `main` SHA reviewed;
- evidence package paths inspected;
- repository/workflow state inspected;
- full control matrix;
- treatment of the residual inline-policy inventory limitation;
- any security defects, ambiguities, or compensating evidence;
- confirmation no mutation occurred;
- final disposition.

The report must be submitted through a dedicated human-reviewed PR.

No self-merge.

---

## 9. Mission Control Decision

`SB-P-1.11-GC-43B — POST-EVIDENCE SECURITY RE-VERIFICATION AUTHORIZED AFTER HUMAN MERGE`
