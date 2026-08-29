# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-42A — FOUNDER-STAGE SELF-REVIEW AMENDMENT & GC-42 REACTIVATION

**Instruction ID:** `instruction1.137`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-42A — Founder-Stage Self-Review Amendment & GC-42 Reactivation`  
**Executing Room:** Infrastructure Operations  
**Authorized By:** Founder / Mission Control  
**Mode:** NARROW GOVERNANCE AMENDMENT + RESUME AUTHORIZED NON-PRODUCTION EXECUTION-ACCESS PROVISIONING  
**Lambda / S3 Parser Build Authority:** NONE  
**Supabase Mutation Authority:** NONE  
**Lovable Mutation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Purpose

Resolve the single blocker recorded in merged `communication/live/report1.146.md` and reactivate the unfinished portion of `SB-P-1.11-GC-42 — AWS Execution-Access Provisioning` without redesigning the approved execution-access architecture.

This instruction changes exactly one Founder-stage control:

> While Riyas PK is the sole authorized Smart Business infrastructure operator, `Prevent self-review` is not required for the GitHub Environment `aws-nonprod-parser`.

All other GC-41 Security & Permissions controls remain binding.

Required continuation report:

`communication/live/report1.147.md`

---

## 2. Canonical Entry State

Execute only after this instruction is human-reviewed and merged to `main`.

Before resuming, read at minimum:

1. `communication/live/report1.146.md` — merged GC-42 partial provisioning report;
2. `communication/live/instruction1.136.md` — original GC-42 provisioning authorization;
3. `communication/live/report1.145.md` — GC-41 Security & Permissions PASS and binding provisioning conditions;
4. `communication/live/report1.144.md` — GC-40 execution-access design;
5. `communication/live/report1.143.md` — AWS account onboarding baseline;
6. `communication/live/report1.142.md` — earlier GC-38 STOP report;
7. `communication/live/report1.126.md` — locked Lambda Parser EIS record;
8. `docs/implementation/SB-P-1.11/engineering-contract.md` Version 1.2;
9. current repository communication/governance rules and latest merged `main`.

Preserve the already-completed GC-42 state from `report1.146.md`:

- approved AWS account: `658980433673`;
- environment classification: `nonprod`;
- resource region: `ap-south-1`;
- AWS GitHub Actions OIDC provider already exists;
- issuer: `token.actions.githubusercontent.com`;
- intended audience: `sts.amazonaws.com`;
- GitHub Environment `aws-nonprod-parser` already exists;
- no static AWS deployment credential exists;
- no deploy role exists yet;
- no Lambda/S3/IAM Roles Anywhere/parser implementation resource exists yet;
- GC-38 remains stopped.

Do not recreate already-existing OIDC/environment resources merely to restart the mission. Verify and continue from actual current state.

---

## 3. Narrow Founder-Stage Amendment

Mission Control accepts the Founder-stage exception requested in `report1.146.md`.

For the current operating stage only:

- required environment reviewer: **Founder Riyas PK**;
- `Prevent self-review`: **NOT REQUIRED while Riyas PK remains the sole authorized infrastructure operator**;
- administrator bypass: **DISABLED**;
- deployment source: **protected `main` only**;
- environment approval before credential-bearing execution: **REQUIRED**;
- exact GitHub OIDC trust restrictions: **UNCHANGED**;
- short-lived credentials only: **UNCHANGED**;
- no static AWS credentials: **UNCHANGED**;
- account/region/nonprod fail-closed controls: **UNCHANGED**;
- least privilege, permission-boundary, self-escalation prevention, `iam:PassRole`, workflow-supply-chain, auditability and deployment/runtime identity separation controls: **UNCHANGED**.

This exception exists only because the Founder is currently the sole authorized infrastructure operator. It must not be generalized into a permanent rule that self-review is preferred.

If a second authorized infrastructure operator is later introduced, Mission Control / Security & Permissions Architecture shall reconsider whether `Prevent self-review` should then be enabled.

---

## 4. Authority Restored

After human merge, Infrastructure Operations is authorized to resume only the unfinished GC-42 provisioning work that was already authorized by `instruction1.136.md`, subject to this amendment and the binding GC-41 controls.

Authorized continuation includes:

1. verify the existing GitHub Environment state and configure the approved Founder reviewer / administrator-bypass / `main`-only deployment protections;
2. create the reviewed bounded non-production AWS deploy role:
   `TeamLIPS-SB-NonProd-Parser-DeployRole`;
3. create/apply the exact fail-closed GitHub OIDC trust policy required by GC-41;
4. create/apply the bounded least-privilege deploy-role permissions;
5. create the parser-runtime IAM permission-boundary policy outside the deploy role's mutable authority;
6. enforce the approved namespace, account, region, tag and environment restrictions;
7. enforce structural self-escalation prevention;
8. enforce exact-role / exact-service `iam:PassRole` restrictions;
9. create only the minimum verification-only GitHub Actions workflow/path required to test OIDC execution access;
10. inspect actual emitted GitHub OIDC claims in sanitized/non-secret form;
11. verify intended OIDC role assumption succeeds only from the approved environment / protected `main` path;
12. verify unauthorized contexts fail as required by GC-41;
13. verify `sts:GetCallerIdentity` returns account `658980433673` and the target region is `ap-south-1` before any authorized AWS mutation;
14. verify effective deploy-role permissions do not permit self-administration, OIDC-provider administration, IAM-user/access-key creation, broad production reach, or unrelated account authority;
15. verify CloudTrail / STS audit evidence for the test assumption;
16. verify root exits bootstrap and is not used as the steady-state workflow identity;
17. verify no static AWS deployment credential exists.

Infrastructure Operations may guide the Founder interactively for console actions that cannot be performed through the available execution tooling. Never request disclosure of root passwords, MFA codes/seeds, AWS access keys, session tokens, private keys, payment data or recovery material.

---

## 5. Binding GC-41 Controls That Remain Unchanged

The following remain mandatory and are not relaxed by this amendment:

### OIDC trust

- provider exactly `token.actions.githubusercontent.com`;
- audience exactly `sts.amazonaws.com`;
- exact canonical repository `SmartBusinessv1/smart-business`;
- exact GitHub Environment `aws-nonprod-parser`;
- exact supported `sub` / repository / repository ID / repository owner ID / ref conditions based on actual emitted claims;
- protected `main` only;
- no repository-wide, owner-wide, feature-branch, PR, fork or broad wildcard trust;
- STOP rather than widen trust when actual claims do not match the reviewed contract.

### Deploy-role least privilege

No generic:

- `AdministratorAccess`;
- `PowerUserAccess`;
- `iam:*`;
- `s3:*`;
- `lambda:*`;
- AWS-wide administrative managed policy.

### Self-escalation prevention

The deploy role must not be able to:

- edit its own trust or permission policies;
- remove/weaken its own boundary where applicable;
- edit/delete the GitHub OIDC provider;
- create IAM users/access keys;
- create an unrestricted successor role;
- assume arbitrary roles;
- modify the immutable parser-runtime permission boundary;
- gain Organizations, Identity Center, billing, root or unrelated account administration.

### Runtime-role boundary

Any deploy-role-created parser runtime role must require the approved runtime permission boundary, and role creation without that boundary or with a replacement boundary must fail.

### `iam:PassRole`

Must be restricted to the exact approved parser runtime role(s) and exact intended service principal/use path only.

### Workflow / supply-chain

- AWS credential acquisition must not occur in untrusted PR/fork jobs;
- `id-token: write` only on the credential-bearing deployment/verification job;
- third-party actions in the credential-bearing path pinned to verified full commit SHAs;
- workflow uses the approved canonical commit/ref after environment approval;
- no arbitrary ref fetch/execute after AWS credentials are acquired;
- `GITHUB_TOKEN` permissions minimized.

### Non-production isolation

Fail before mutation unless:

- account = `658980433673`;
- region = `ap-south-1`;
- environment = `nonprod`;
- resource names match approved `teamlips-sb-np-parser` / `TeamLIPS-SB-NonProd-Parser-*` namespace;
- required tags match the reviewed contract;
- no production resource identifier is present.

---

## 6. Explicitly Not Authorized

This amendment/reactivation does **not** authorize:

- Lambda parser function creation;
- parser-ingress S3 bucket/object creation;
- IAM Roles Anywhere trust anchor/profile creation;
- workload X.509 certificate/private-key creation;
- Lambda Function URL creation;
- parser application implementation;
- Smart Business server-to-parser integration;
- Supabase support-state migration/schema/RLS/grant/function changes;
- applying the two pending production Catalog-import migrations;
- Lovable changes;
- merchant-facing UI changes;
- application deployment/publication;
- production enablement;
- production AWS resources;
- GC-38 Lambda parser implementation reactivation;
- Founder runtime acceptance;
- Stage 21/22/23/24;
- SB-P-1.11 acceptance or closure.

The verification-only OIDC workflow must not become a hidden parser-deployment workflow.

---

## 7. Stop Conditions

Stop and return to Mission Control if:

- the current AWS account differs from `658980433673`;
- root MFA/security posture has materially regressed;
- the existing OIDC provider/environment does not match the merged evidence and cannot be safely reconciled within this scope;
- the required GitHub Environment reviewer/bypass/main-only controls cannot be configured as authorized;
- actual emitted OIDC claims cannot be matched with the exact reviewed trust contract;
- provisioning would require broad wildcard trust or permanent AWS credentials;
- exact least-privilege policy cannot be implemented without broad permanent administrator access;
- deploy-role self-escalation cannot be structurally prevented;
- runtime permission-boundary enforcement cannot be proven;
- unauthorized-context OIDC assumption does not fail;
- an unexpected production/cross-account dependency appears;
- any requested action crosses into Lambda/S3/parser implementation rather than execution-access provisioning.

Do not silently broaden policy to make a failing test pass.

---

## 8. Required Continuation Report

Infrastructure Operations shall create or return content suitable for:

`communication/live/report1.147.md`

The report must include:

- instruction executed: `instruction1.137.md`;
- exact canonical `main` SHA used;
- confirmation this was a continuation of existing GC-42 state rather than reprovisioning from scratch;
- actual state of the pre-existing OIDC provider and GitHub Environment;
- Founder-stage reviewer-control configuration;
- deploy-role name/ARN as non-secret metadata;
- exact trust-policy summary and sanitized claim evidence;
- exact deploy-role permission-policy summary;
- runtime permission-boundary evidence;
- exact `iam:PassRole` boundary;
- self-escalation negative evidence;
- account/region/nonprod preflight evidence;
- intended OIDC assumption success evidence;
- unauthorized-context assumption failure evidence;
- workflow source/ref/environment and action-pinning evidence;
- CloudTrail/STS audit evidence;
- root-bootstrap exit confirmation;
- confirmation no static AWS credential exists;
- confirmation no Lambda/S3/IAM Roles Anywhere/parser implementation resource was created;
- any residual blocker;
- final disposition.

Allowed final dispositions:

- `AWS EXECUTION-ACCESS PROVISIONING — COMPLETE — READY FOR POST-PROVISIONING SECURITY VERIFICATION`
- `AWS EXECUTION-ACCESS PROVISIONING — PARTIAL — FOUNDER OR TOOLING ACTION REQUIRED`
- `AWS EXECUTION-ACCESS PROVISIONING — STOPPED — SECURITY OR EVIDENCE BLOCKER`

---

## 9. Next Gate

A positive `report1.147.md` does not reactivate GC-38 by itself.

After human-reviewed merge of a positive report, Mission Control must route the actual provisioned AWS/GitHub execution-access boundary to **Security & Permissions Architecture for independent post-provisioning verification**.

Only after that verification passes and is merged may Mission Control consider reactivating `SB-P-1.11-GC-38 — AWS Lambda Parser Implementation`.

---

## 10. Mission Control Decision

`SB-P-1.11-GC-42A — FOUNDER-STAGE SELF-REVIEW AMENDMENT ACCEPTED AND GC-42 PROVISIONING REACTIVATED AFTER HUMAN MERGE`
