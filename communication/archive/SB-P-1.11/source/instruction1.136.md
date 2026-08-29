# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-42 — AWS EXECUTION-ACCESS PROVISIONING AUTHORIZATION

**Instruction ID:** `instruction1.136`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-42 — AWS Execution-Access Provisioning`  
**Executing Room:** Infrastructure Operations  
**Required Post-Provisioning Specialist:** Security & Permissions Architecture  
**Authorized By:** Founder / Mission Control  
**Mode:** CONTROLLED NON-PRODUCTION ACCESS PROVISIONING + EVIDENCE  
**Lambda / S3 Parser Build Authority:** NONE  
**Supabase Mutation Authority:** NONE  
**Lovable Mutation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Provision and verify the approved non-production AWS execution-access boundary required before `SB-P-1.11-GC-38 — AWS Lambda Parser Implementation` may be reactivated.

The approved design is:

`GitHub Actions OIDC federation → narrowly scoped non-production AWS parser deploy role`

This mission may provision only the identity, trust, permission-boundary, GitHub Environment, and verification path approved by merged GC-40 and GC-41.

It does **not** authorize creation of the Lambda parser, parser-ingress S3 bucket, IAM Roles Anywhere runtime resources, workload certificates, Function URL, application integration, Supabase support state, or production resources.

Required Infrastructure Operations report:

`communication/live/report1.146.md`

A positive GC-42 report does not itself reactivate GC-38. A separate post-provisioning Security & Permissions Architecture verification is mandatory.

---

## 2. Canonical Entry State

Execute only after this instruction is human-reviewed and merged to `main`.

Before provisioning, read at minimum:

1. `communication/live/report1.145.md` — GC-41 Security PASS and binding provisioning conditions;
2. `communication/live/instruction1.135.md` — GC-41 review authorization;
3. `communication/live/report1.144.md` — GC-40 Infrastructure Operations design;
4. `communication/live/instruction1.134.md` — GC-40 design authorization;
5. `communication/live/report1.143.md` — AWS Founder onboarding completion;
6. `communication/live/report1.142.md` — prior GC-38 STOP report;
7. `communication/live/instruction1.132.md` — original GC-38 implementation authorization and stop conditions;
8. `communication/live/report1.126.md` — locked Lambda Parser EIS record;
9. `docs/implementation/SB-P-1.11/engineering-contract.md` Version 1.2;
10. current repository communication protocol, branch rules, and merged `main`.

Canonical baseline at authorization issuance:

`7426dc48aabe4fae3f7546fa5a971760c3237206`

Preserve:

- AWS account: `658980433673`;
- environment: `nonprod`;
- region: `ap-south-1`;
- canonical repository: `SmartBusinessv1/smart-business`;
- GitHub Environment target: `aws-nonprod-parser`;
- deploy role target: `TeamLIPS-SB-NonProd-Parser-DeployRole`;
- no long-lived AWS access key;
- root MFA enabled;
- runtime IAM Roles Anywhere identity remains separate;
- GC-38 remains stopped until this gate and the post-provisioning Security gate both pass.

---

## 3. Authority Granted

Infrastructure Operations is authorized to guide the Founder interactively and/or perform only those non-production provisioning actions that are explicitly within this instruction and technically available through approved tooling.

### 3.1 AWS one-time bootstrap

Using the existing MFA-protected AWS root session only where necessary for initial bootstrap, authorize creation/configuration of:

1. the GitHub OIDC provider for `token.actions.githubusercontent.com` with audience `sts.amazonaws.com`;
2. `TeamLIPS-SB-NonProd-Parser-DeployRole`;
3. the exact reviewed OIDC trust policy;
4. the bounded deploy-role permissions policy required for later parser infrastructure management;
5. the immutable parser-runtime permission-boundary policy required by GC-41;
6. only the minimum bootstrap IAM objects necessary to establish the reviewed steady-state OIDC boundary.

Root use must end immediately after the bootstrap objects are verified. No root access key may be created.

### 3.2 GitHub execution boundary

Authorize creation/configuration of the GitHub Environment:

`aws-nonprod-parser`

with the controls required by `report1.145.md`, including:

- required Founder/human reviewer;
- prevent-self-review where available;
- deployment restriction to protected `main` only;
- no arbitrary feature branch, pull-request merge ref, or fork deployment path;
- no static AWS deployment credentials stored as GitHub secrets.

### 3.3 Verification-only GitHub Actions path

Authorize a narrowly scoped repository workflow, through the normal human-reviewed PR process, only to prove the execution-access boundary.

The verification workflow may:

- request `id-token: write` only in the credential-bearing job;
- reference `aws-nonprod-parser` explicitly;
- use the reviewed OIDC federation path;
- call `sts:GetCallerIdentity`;
- verify account `658980433673`;
- verify region `ap-south-1`;
- emit non-secret evidence required for GC-42;
- perform bounded read-only IAM/trust/policy inspection where required to prove the provisioned state.

The verification workflow must **not** create Lambda, S3, IAM Roles Anywhere, Function URL, certificates, application secrets, Supabase objects, or any parser implementation resource.

Third-party GitHub Actions in the credential-bearing path must be pinned to full commit SHAs as required by GC-41.

---

## 4. Binding OIDC Trust Requirements

Provisioning must preserve all mandatory GC-41 conditions.

The deploy-role trust must be fail-closed and bind to the actual emitted AWS-supported GitHub OIDC claims.

At minimum the intended contract is equivalent in strength to:

- provider: `token.actions.githubusercontent.com`;
- `aud = sts.amazonaws.com`;
- `sub = repo:SmartBusinessv1/smart-business:environment:aws-nonprod-parser`;
- repository exactly `SmartBusinessv1/smart-business`;
- repository ID `1287523579` where emitted and supported;
- repository owner ID `298686418` where emitted and supported;
- environment exactly `aws-nonprod-parser`;
- ref exactly `refs/heads/main` where emitted and supported;
- exact `job_workflow_ref` only if the actual token contains it and the reviewed workflow path is stable.

The first credential-bearing run must inspect the actual emitted claim set in a sanitized, non-secret form before accepting the trust configuration as proven.

If a required claim is unavailable or differs from the reviewed contract, **STOP**. Do not broaden trust to `repo:*`, `SmartBusinessv1/*`, `repo:SmartBusinessv1/smart-business:*`, organization-wide wildcard, arbitrary ref wildcard, or equivalent convenience trust.

---

## 5. Deploy-Role Security Boundary

The exact deploy-role policy must follow `report1.145.md` and must not use generic `AdministratorAccess`, `PowerUserAccess`, `iam:*`, `s3:*`, `lambda:*`, or equivalent broad service administration.

The role must be structurally unable to:

- edit its own trust policy;
- attach or put broader policy on itself;
- weaken/remove its own boundary if one is used;
- create IAM users or access keys;
- alter/delete the GitHub OIDC provider after bootstrap;
- create an alternate privileged federation path;
- assume arbitrary roles;
- manage Organizations, Identity Center, billing, account, or root settings;
- reach future production resources or namespaces.

If `iam:CreateRole` is authorized for later parser runtime roles, it must:

- be limited to the approved `TeamLIPS-SB-NonProd-Parser-*` runtime namespace;
- require the approved parser-runtime permission boundary at role creation;
- prevent the deploy role from removing or weakening that boundary later.

`iam:PassRole` must be limited to the exact approved parser runtime roles and exact intended AWS services. No arbitrary-role or future-production role passing is allowed.

---

## 6. Non-Production Isolation

Every accepted OIDC session and verification run must fail closed unless:

- AWS account equals `658980433673`;
- region equals `ap-south-1`;
- environment equals `nonprod`;
- intended names match the approved `teamlips-sb-np-parser` / `TeamLIPS-SB-NonProd-Parser-*` namespace;
- required ownership/environment tags match the reviewed contract where applicable;
- no production resource identifier is present.

The non-production deploy role must not be reusable for future production.

---

## 7. Required Verification Before Positive GC-42 Completion

Infrastructure Operations must directly establish, or guide the Founder to establish and then verify, all of the following without exposing secrets:

1. AWS OIDC provider exists with the correct issuer/client audience.
2. Deploy role exists with the exact reviewed trust boundary.
3. Deploy-role effective permissions are bounded and contain no broad admin/service wildcard authority.
4. Deploy role cannot self-administer its trust/permissions/boundary.
5. Parser-runtime permission boundary exists outside the deploy role's mutable authority.
6. Role creation without the required runtime boundary is denied where that creation capability is included.
7. `iam:PassRole` is exact-role / exact-service allowlisted.
8. GitHub Environment `aws-nonprod-parser` exists with mandatory reviewer and `main`-only protection.
9. No static AWS deployment credential exists in GitHub, repository, local configuration, Claude Code, ChatGPT, or report artifacts.
10. Credential-bearing workflow is main-only, environment-gated, minimized, and full-SHA-pins third-party actions.
11. Actual emitted OIDC claims were inspected in sanitized form and match the accepted trust contract.
12. Intended OIDC role assumption succeeds.
13. At least one non-main/ref-mismatch path and one environment-mismatch path are demonstrated to fail, or an equally strong direct provider-supported negative verification method is evidenced. Do not weaken protections merely to manufacture the negative test.
14. `sts:GetCallerIdentity` confirms account `658980433673`.
15. Region/config preflight confirms `ap-south-1` and `nonprod` before any future mutation path.
16. CloudTrail/STS or equivalent AWS audit evidence confirms the intended `AssumeRoleWithWebIdentity` session is observable.
17. A deterministic non-secret role-session naming convention is recorded.
18. Root bootstrap is exited; root is not used by the GitHub workflow.
19. No root access key, IAM-user engineering access key, or permanent AWS credential was created.
20. No Lambda/S3/IAM Roles Anywhere/parser implementation resource was created under GC-42.

Any failed mandatory item means GC-42 does not pass.

---

## 8. Founder Guidance Requirement

Infrastructure Operations owns the Founder-facing provisioning guidance for console actions.

For each sensitive step:

1. explain the purpose in plain language;
2. state exactly where the Founder should navigate/click/select;
3. identify fields that are secret and must never be pasted into ChatGPT or GitHub;
4. wait for confirmation before advancing when the step is consequential;
5. verify the resulting non-secret state before marking the step complete.

Use current official AWS and GitHub documentation as the primary provider source for console behavior and security-sensitive settings that may have changed.

Never request:

- root password;
- MFA secret/QR seed or OTP;
- payment details;
- access-key secret;
- session token;
- private key;
- certificate private-key material;
- recovery secrets.

---

## 9. Explicitly Not Authorized

GC-42 does **not** authorize:

- Lambda parser function creation or deployment;
- parser-ingress S3 bucket/object creation;
- IAM Roles Anywhere trust anchor/profile creation;
- runtime X.509 certificate/private-key creation;
- Lambda Function URL creation;
- parser application code implementation;
- Smart Business server integration;
- Supabase parser support-state migration or mutation;
- the two pending production Catalog-import migrations;
- Lovable mutation;
- merchant-facing UI changes;
- production AWS resources;
- production migration;
- deployment/publication/domain cutover;
- GC-38 reactivation by Infrastructure Operations;
- Stage 21/22/23/24 lifecycle actions;
- SB-P-1.11 acceptance or closure.

The verification workflow must remain non-destructive and access-boundary-only.

---

## 10. Stop Conditions

STOP and report to Mission Control if:

- account is not `658980433673`;
- root MFA is not active;
- a required GitHub Environment protection is unavailable or cannot be applied as reviewed;
- actual OIDC claims cannot be bound as narrowly as GC-41 requires;
- role assumption works only after broadening trust;
- exact least privilege would require unreviewed administrator-level authority;
- deploy role can modify its own authority or the OIDC provider;
- runtime permission-boundary enforcement cannot be made structural;
- `iam:PassRole` cannot be narrowed to the approved role/service set;
- static credentials appear necessary;
- an unexpected production/cross-account dependency appears;
- verification requires creation of parser implementation resources;
- any material requirement from `report1.145.md` cannot be proven.

Do not repair a Security-design contradiction silently. Return it to Mission Control.

---

## 11. Required Report

Infrastructure Operations shall create or return content suitable for:

`communication/live/report1.146.md`

The report must contain only non-secret evidence and include:

- exact instruction executed;
- exact canonical `main` SHA used;
- AWS account/region/environment verified;
- exact OIDC provider identity and client audience;
- exact deploy-role name/ARN as non-secret metadata;
- sanitized trust-policy/claim evidence;
- exact GitHub Environment protections verified;
- deploy-role permission summary and explicit absence of broad administrator/service wildcards;
- permission-boundary enforcement evidence;
- `iam:PassRole` restriction evidence;
- self-escalation prevention evidence;
- successful intended OIDC assumption evidence;
- negative assumption evidence;
- CloudTrail/STS audit evidence;
- confirmation root exited bootstrap;
- confirmation no static AWS credential was created;
- confirmation no Lambda/S3/IAM Roles Anywhere/parser implementation occurred;
- unresolved blockers, if any;
- final disposition.

Allowed dispositions:

- `AWS EXECUTION-ACCESS PROVISIONING — COMPLETE — READY FOR POST-PROVISIONING SECURITY VERIFICATION`
- `AWS EXECUTION-ACCESS PROVISIONING — PARTIAL — FOUNDER OR TOOLING ACTION REQUIRED`
- `AWS EXECUTION-ACCESS PROVISIONING — STOPPED — SECURITY, AUTHORITY OR ENVIRONMENT BLOCKER`

Human review and merge are required. No self-merge.

---

## 12. Mandatory Post-Provisioning Security Gate

After a human-reviewed and merged positive `report1.146.md`, Mission Control must route the provisioned state back to **Security & Permissions Architecture** for an independent post-provisioning verification.

Security must verify the actual effective trust, GitHub Environment controls, OIDC claims, deploy-role permissions, self-escalation prevention, runtime permission-boundary enforcement, `iam:PassRole`, negative assumption tests, auditability, non-production isolation, and absence of static credentials.

Only after that independent Security PASS is human-reviewed and merged may Mission Control consider reactivating `SB-P-1.11-GC-38`.

---

## 13. Mission Control Decision

`SB-P-1.11-GC-42 — AWS EXECUTION-ACCESS PROVISIONING AUTHORIZED AFTER HUMAN MERGE`
