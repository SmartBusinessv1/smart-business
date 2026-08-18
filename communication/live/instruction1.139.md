# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-43 — POST-PROVISIONING SECURITY & PERMISSIONS VERIFICATION

**Instruction ID:** `instruction1.139`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-43 — Post-Provisioning Security & Permissions Verification`  
**Executing Room:** Security & Permissions Architecture  
**Authorized By:** Founder / Mission Control  
**Mode:** INDEPENDENT READ-ONLY SECURITY VERIFICATION  
**AWS / GitHub Mutation Authority:** NONE  
**Application / Parser Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Independently verify the actual provisioned GC-42A execution-access boundary recorded in merged:

`communication/live/report1.147.md`

The review must determine whether the implemented GitHub Actions OIDC → bounded non-production AWS deploy-role boundary satisfies the binding GC-41 security requirements as actually provisioned and evidenced.

This is not a design review. It is a post-provisioning verification of real configuration and evidence.

Required output:

`communication/live/report1.149.md`

A positive result does not itself reactivate GC-38. Mission Control must separately review and authorize any later GC-38 reactivation.

---

## 2. Canonical Entry State

Execute only after this instruction is human-reviewed and merged to `main`.

Current canonical baseline at authorization drafting:

`3b43959a55dc5bd6a54f9cc0ba1183e2b5de5f70`

Commit:

`SB-P-1.11-GC-42A: finalize AWS execution-access provisioning report (#320)`

Before verification, read at minimum:

1. `communication/live/report1.147.md` — final GC-42A provisioning/evidence report;
2. `communication/live/instruction1.137.md` — Founder-stage amendment/reactivation;
3. `communication/live/report1.146.md` — partial GC-42 report and Founder-stage conflict;
4. `communication/live/instruction1.136.md` — original provisioning authorization;
5. `communication/live/report1.145.md` — binding GC-41 Security review;
6. `communication/live/report1.144.md` — Infrastructure execution-access design;
7. `.github/workflows/aws-gc42-oidc-claims.yml`;
8. `.github/workflows/aws-gc42-role-assumption-verification.yml`;
9. relevant merged GC-42B CI correction artifacts where needed to understand the verification chain;
10. current repository rules/protections and current canonical `main`.

Use current official AWS/GitHub documentation only where a load-bearing platform behavior needs re-verification.

---

## 3. Frozen Baseline

Do not reopen Product Truth, parser architecture, runtime IAM Roles Anywhere design, parser limits, Catalog/Inventory truth separation, or the nineteen-command Catalog boundary unless a direct material security contradiction is proven.

Preserve the Founder-stage exception already authorized:

> While Riyas PK remains the sole authorized Smart Business infrastructure operator, `Prevent self-review` is not required for `aws-nonprod-parser`.

All other GC-41 controls remain binding.

The deployment identity remains separate from the runtime workload identity:

`GitHub Actions OIDC → TeamLIPS-SB-NonProd-Parser-DeployRole`

is not:

`IAM Roles Anywhere → workload role → AWS_IAM parser Function URL`.

---

## 4. Required Verification Scope

Verify each item below against the actual provisioned state and available evidence.

### SEC-GC43-01 — Exact GitHub OIDC trust policy

Verify the actual deploy-role trust requires the intended exact GitHub identity conditions and does not contain broadened fallback trust.

At minimum verify actual conditions for:

- provider `token.actions.githubusercontent.com`;
- audience `sts.amazonaws.com`;
- subject `repo:SmartBusinessv1/smart-business:environment:aws-nonprod-parser`;
- repository `SmartBusinessv1/smart-business`;
- repository ID `1287523579` where provisioned/supported;
- repository owner ID `298686418` where provisioned/supported;
- environment `aws-nonprod-parser`;
- ref `refs/heads/main`;
- no owner-wide/repository-wide/arbitrary-ref/fork/PR wildcard trust.

Record the actual policy shape. Do not infer from the report alone if read-only AWS evidence is available.

### SEC-GC43-02 — GitHub Environment protection

Verify the actual `aws-nonprod-parser` Environment configuration:

- required reviewer is Founder Riyas PK / `SmartBusinessv1`;
- `Prevent self-review` OFF only under the approved Founder-stage exception;
- administrator bypass disabled;
- deployment branch limited to `main`;
- no deployment tags allowed;
- no AWS static credentials stored as environment secrets.

Confirm no broader repository context can obtain the protected environment unexpectedly.

### SEC-GC43-03 — Positive OIDC assumption evidence

Verify the successful protected `main` + environment OIDC assumption evidence:

- role assumed is exactly `TeamLIPS-SB-NonProd-Parser-DeployRole`;
- AWS account is `658980433673`;
- expected region is `ap-south-1`;
- environment is `nonprod`;
- session is short-lived;
- no static deployment credential is involved.

### SEC-GC43-04 — Negative OIDC assumption evidence

Verify the negative tests actually fail closed:

- missing protected environment subject → `AccessDenied`;
- non-main ref subject → `AccessDenied`;
- no role session/resource created from those unauthorized contexts.

Confirm no trust broadening was applied to make the positive case work.

### SEC-GC43-05 — Deploy-role least privilege

Inspect the actual effective deploy-role policy and verify it is bounded to the approved non-production parser control-plane scope.

Verify at minimum:

- no `AdministratorAccess` / `PowerUserAccess`;
- no broad `iam:*`, `s3:*`, `lambda:*` or equivalent unrestricted service authority;
- Lambda scope limited to approved parser namespace/actions;
- S3 scope limited to approved transient parser-ingress namespace/actions;
- CloudWatch/logging scope limited to parser resources;
- IAM scope limited to approved parser runtime roles/policies;
- Roles Anywhere management scope, if present, is bounded to approved parser resources/conditions;
- read/list/describe wildcard usage, if any, is explicit and justified by AWS API limitations.

### SEC-GC43-06 — Self-escalation prevention

Verify the deploy role cannot materially widen its own authority.

At minimum verify effective denial/no-grant for:

- updating its own trust policy;
- attaching/putting broader policies on itself;
- creating IAM users/access keys;
- modifying/deleting the GitHub OIDC provider;
- modifying/promoting the runtime permission boundary;
- arbitrary `sts:AssumeRole` pivot;
- arbitrary role creation without the approved runtime boundary;
- Organizations/Identity Center/account/billing/root administration.

Review the Policy Simulator evidence recorded in `report1.147.md` and independently inspect the actual policy where possible.

### SEC-GC43-07 — Runtime permission boundary

Verify the actual `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary` exists and behaves as a maximum-permission ceiling rather than a grant.

Verify it excludes:

- IAM identity/federation administration;
- deploy-role administration;
- OIDC-provider administration;
- arbitrary role assumption;
- unrelated control-plane authority;
- production/account-wide authority;
- mutation of the boundary by the deploy role.

### SEC-GC43-08 — `iam:PassRole`

Inspect the actual `iam:PassRole` statements.

Verify they are limited to the exact approved parser runtime role(s)/namespace and intended AWS service principals/use paths.

No deploy role, future production role, account admin role, arbitrary `TeamLIPS-*` role, or unrelated role may be passable.

### SEC-GC43-09 — Workflow / supply-chain boundary

Inspect the canonical credential-bearing verification workflow.

Verify:

- `workflow_dispatch` only;
- successful credential path only on `main`;
- protected environment explicitly referenced;
- `id-token: write` limited to jobs that require OIDC;
- no credential-bearing execution of untrusted PR/fork code;
- no arbitrary ref checkout/execute after credentials are acquired;
- no mutable/unpinned third-party action risk in the credential path; if no third-party actions are used, record that;
- `GITHUB_TOKEN` permissions are minimized;
- workflow performs verification only, not parser resource deployment.

### SEC-GC43-10 — Non-production isolation

Verify the actual execution boundary is fail-closed for:

- AWS account `658980433673`;
- region `ap-south-1`;
- environment `nonprod`;
- approved parser naming/namespace;
- no production identifier/path.

Confirm the non-production deploy role is not suitable for future production reuse without separate authorization and identity.

### SEC-GC43-11 — Static credential posture

Verify no long-lived AWS deployment credential is present or required:

- no root access key;
- no IAM-user engineering access key;
- no GitHub AWS access-key secret;
- no repository-committed AWS credential;
- no ChatGPT/Claude static AWS credential requirement;
- STS/OIDC credentials are temporary only.

Do not expose secret values while verifying.

### SEC-GC43-12 — CloudTrail / STS auditability

Verify the reported positive and negative `AssumeRoleWithWebIdentity` events are credible and consistent with the actual trust model.

Confirm:

- successful protected-environment event exists;
- missing-environment rejection exists;
- non-main rejection exists;
- subject strings match the intended contexts;
- successful event maps to the intended deploy role;
- rejected contexts do not result in assumed-role sessions;
- no credential material is included in the report.

### SEC-GC43-13 — Root bootstrap exit

Verify the one-time root bootstrap has ended and root is not part of the steady-state deployment path.

Confirm:

- root MFA remains expected baseline;
- no root access key exists;
- GitHub workflow does not use root;
- normal deployment path is OIDC → bounded deploy role.

### SEC-GC43-14 — Deployment vs runtime identity separation

Verify the provisioned deployment role does not become the Smart Business application runtime identity and that the runtime IAM Roles Anywhere model has not been replaced or weakened.

No runtime certificate/private key should exist in GitHub simply because GitHub is the deployment path.

### SEC-GC43-15 — Scope integrity / no premature parser implementation

Verify GC-42A did not create or deploy:

- Lambda parser function;
- parser-ingress S3 bucket/object;
- IAM Roles Anywhere trust anchor/profile;
- runtime X.509 certificate/private key;
- Lambda Function URL;
- parser application code;
- Smart Business parser integration;
- Supabase mutations/migrations;
- Lovable changes;
- production AWS resources or production deployment.

GC-43 must not create any of these either.

---

## 5. Verification Method

This must be an independent review, not a restatement of Infrastructure Operations' claims.

For each SEC-GC43 item:

1. state `PASS`, `CHANGES REQUIRED`, `NOT VERIFIED`, or `NOT APPLICABLE`;
2. identify the actual artifact/config/evidence inspected;
3. distinguish direct evidence from report-derived evidence;
4. state any residual gap precisely;
5. do not mutate AWS/GitHub state to obtain missing evidence;
6. where a safe read-only check is available, prefer it over inference.

If a material check cannot be completed without mutation, report the evidence gap and stop rather than modifying the environment.

---

## 6. Explicitly Not Authorized

GC-43 does not authorize:

- changing GitHub Environment protections;
- changing repository rulesets/branch protection;
- changing OIDC provider configuration;
- changing IAM trust or permission policies;
- changing permission boundaries;
- creating/deleting IAM roles or policies;
- changing `iam:PassRole`;
- adding AWS credentials or secrets;
- creating Lambda/S3/IAM Roles Anywhere/Function URL/certificates;
- parser implementation;
- Supabase mutation or production migrations;
- Lovable changes;
- deployment/publication;
- production enablement;
- GC-38 implementation;
- Stage 21/22/23/24;
- SB-P-1.11 acceptance or closure.

Any required correction must be returned to Mission Control for a separately authorized corrective mission.

---

## 7. Required Report

Security & Permissions Architecture shall produce:

`communication/live/report1.149.md`

The report must include:

- mission/workstream identity;
- exact instruction executed;
- exact canonical `main` SHA reviewed;
- exact `report1.147.md` provisioning report reviewed;
- SEC-GC43-01 through SEC-GC43-15 results;
- direct evidence vs inherited/report evidence classification;
- any material gaps or corrections required;
- explicit no-mutation confirmation;
- explicit no-static-credential confirmation;
- explicit statement on whether the completed boundary is safe enough for Mission Control to consider GC-38 reactivation;
- final disposition.

Allowed final dispositions:

- `AWS EXECUTION-ACCESS POST-PROVISIONING SECURITY VERIFICATION — PASS — READY FOR MISSION CONTROL REACTIVATION DECISION`
- `AWS EXECUTION-ACCESS POST-PROVISIONING SECURITY VERIFICATION — CHANGES REQUIRED`
- `AWS EXECUTION-ACCESS POST-PROVISIONING SECURITY VERIFICATION — STOPPED — SECURITY OR EVIDENCE BLOCKER`

Human review and merge required. No self-merge.

---

## 8. Next Gate

Only after a human-reviewed and merged positive `report1.149.md` may Mission Control consider a separate explicit decision to reactivate:

`SB-P-1.11-GC-38 — AWS Lambda Parser Implementation`

A Security PASS does not itself reactivate GC-38 and does not authorize Lambda/S3/IAM Roles Anywhere/parser implementation.

---

## 9. Mission Control Decision

`SB-P-1.11-GC-43 — POST-PROVISIONING SECURITY & PERMISSIONS VERIFICATION AUTHORIZED AFTER HUMAN MERGE`
