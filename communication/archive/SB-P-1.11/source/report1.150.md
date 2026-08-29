# SMART BUSINESS — INFRASTRUCTURE OPERATIONS REPORT

# SB-P-1.11-GC-43A — SECURITY EVIDENCE-ACCESS / EVIDENCE-HANDOFF RECOVERY

**Report ID:** `report1.150`  
**Instruction Executed:** `communication/live/instruction1.140.md`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-43A — Security Evidence Recovery`  
**Executing Room:** Infrastructure Operations  
**Downstream Verifier:** Security & Permissions Architecture  
**Mode:** READ-ONLY PROVIDER EVIDENCE COLLECTION + SANITIZED HANDOFF

---

## 1. Canonical baseline

Exact canonical `main` SHA used at mission entry:

`e9656c76af46f0cceb66926b0bfea6735c9107a2`

Commit:

`SB-P-1.11: authorize GC-43A security evidence recovery (#323)`

No provider mutation was performed during evidence collection.

---

## 2. Evidence package created

Created under:

`communication/evidence/SB-P-1.11-GC-43A/`

Files:

- `manifest.md`
- `aws-deploy-role-trust.json`
- `aws-deploy-policy.json`
- `aws-runtime-boundary.json`
- `provider-state-summary.md`
- `aws-policy-simulator.md`
- `aws-cloudtrail-sts.md`

---

## 3. Provider sources used

Read-only evidence was collected from:

- AWS IAM role summary, permissions and trust relationships;
- AWS IAM customer-managed policy details and policy-version views;
- AWS IAM Policy Simulator;
- AWS CloudTrail Event History;
- AWS IAM user inventory;
- AWS root Security credentials read-only page;
- GitHub repository Environment configuration for `aws-nonprod-parser`;
- canonical repository state for instruction/report context.

Founder Riyas PK supplied provider-console access where human access was required.

---

## 4. Recovered evidence by previously unverified GC-43 control

### SEC-GC43-01 — Exact GitHub OIDC trust policy

**Evidence recovery status: RECOVERED FOR SECURITY REVIEW.**

Actual provider-derived trust JSON is preserved in `aws-deploy-role-trust.json`.

It records:

- exact GitHub OIDC federated principal;
- `sts:AssumeRoleWithWebIdentity` only;
- audience `sts.amazonaws.com`;
- exact environment-bearing subject;
- repository, repository ID, repository owner ID, environment and `refs/heads/main` equality conditions;
- one trust statement only in the captured document.

### SEC-GC43-02 — GitHub Environment protection

**Evidence recovery status: RECOVERED FOR SECURITY REVIEW.**

GitHub provider UI showed:

- required reviewer enabled;
- reviewer `SmartBusinessv1`;
- `Prevent self-review` OFF;
- administrator bypass disabled;
- selected branches/tags mode;
- one allowed branch: `main`;
- zero allowed tags;
- no environment secrets;
- no environment variables.

Sanitized provider facts are preserved in `provider-state-summary.md`.

### SEC-GC43-04 — Negative OIDC assumption evidence

**Evidence recovery status: RECOVERED FOR SECURITY REVIEW.**

CloudTrail provider evidence is preserved in `aws-cloudtrail-sts.md` for:

- missing protected environment subject → `AccessDenied`, zero referenced resources;
- non-main ref → `AccessDenied`, zero referenced resources.

### SEC-GC43-05 — Deploy-role least privilege

**Evidence recovery status: RECOVERED WITH ONE EVIDENCE-DEPTH LIMITATION.**

Actual current/default DeployPolicy JSON is preserved in `aws-deploy-policy.json`.

AWS role provider view reported `Permissions policies (1)` and displayed exactly one customer-managed policy, `TeamLIPS-SB-NonProd-Parser-DeployPolicy`. Version view reported Version 1 as Default.

CloudShell/API `ListRolePolicies` output was unavailable because CloudShell had not yet been enabled for the new AWS account. No mutation was attempted to change that state.

### SEC-GC43-06 — Self-escalation prevention

**Evidence recovery status: RECOVERED FOR SECURITY REVIEW.**

Provider-derived IAM Policy Simulator evidence is preserved in `aws-policy-simulator.md`.

Denial evidence covers:

- deploy-role trust self-edit;
- managed/inline policy attachment to deploy role;
- user/access-key creation;
- OIDC-provider modification/deletion;
- runtime-boundary policy version/default-version mutation;
- self-assume test;
- arbitrary-role `sts:AssumeRole` probe.

### SEC-GC43-07 — Runtime permission boundary

**Evidence recovery status: RECOVERED FOR SECURITY REVIEW.**

Actual current/default boundary policy JSON is preserved in `aws-runtime-boundary.json`.

Provider version view showed:

- Version 1;
- Default;
- one policy version only.

### SEC-GC43-08 — `iam:PassRole`

**Evidence recovery status: RECOVERED FOR SECURITY REVIEW.**

Actual DeployPolicy JSON records exactly two `iam:PassRole` statements:

1. `TeamLIPS-SB-NonProd-Parser-LambdaExecutionRole` only, conditioned on `iam:PassedToService = lambda.amazonaws.com`;
2. `TeamLIPS-SB-NonProd-Parser-WorkloadRole` only, conditioned on `iam:PassedToService = rolesanywhere.amazonaws.com`.

### SEC-GC43-10 — Effective IAM non-production isolation

**Evidence recovery status: RECOVERED FOR SECURITY REVIEW.**

DeployPolicy and RuntimeBoundary JSON preserve the actual account, region and parser-resource ARNs/conditions used by the execution boundary.

### SEC-GC43-11 — Static credential posture

**Evidence recovery status: RECOVERED FOR SECURITY REVIEW.**

Provider UI showed:

- IAM users: `0`;
- root access keys: `0`;
- GitHub Environment secrets: none;
- root MFA devices: `1`.

CloudTrail positive assumption evidence confirms use of STS web-identity federation for the recorded execution path.

### SEC-GC43-12 — CloudTrail / STS auditability

**Evidence recovery status: RECOVERED FOR SECURITY REVIEW.**

`aws-cloudtrail-sts.md` preserves sanitized provider facts for:

- successful protected environment assumption;
- denied missing-environment assumption;
- denied non-main assumption.

Temporary access-key IDs, tokens, source IPs, event IDs and request IDs were intentionally excluded.

### SEC-GC43-13 — Root bootstrap exit

**Evidence recovery status: RECOVERED FOR SECURITY REVIEW.**

Current root provider page showed one MFA device and zero root access keys. IAM user inventory showed zero IAM users. Current execution evidence maps deployment authentication to GitHub OIDC → STS → bounded deploy role rather than root.

---

## 5. Sanitization / redaction performed

Repository evidence intentionally excludes:

- AWS secret access keys;
- temporary STS credential values;
- OIDC/JWT tokens;
- session tokens;
- temporary access-key IDs;
- source IP addresses;
- CloudTrail Event IDs and request IDs;
- account email address;
- canonical user ID;
- MFA device identifier/ARN;
- unrelated personal/account metadata;
- browser/session cookies or metadata.

No raw provider screenshot containing those fields was committed.

---

## 6. Residual evidence limitation

One evidence-depth limitation remains:

- AWS CloudShell was not yet available for the new AWS account, so a read-only API `ListRolePolicies` output could not be captured during this session.

The AWS IAM role provider page itself reported exactly one permissions policy and displayed only `TeamLIPS-SB-NonProd-Parser-DeployPolicy`; no second policy source was displayed.

Security & Permissions Architecture must decide independently whether that provider UI evidence is sufficient to close the inline-policy inventory point or whether the control remains partially unverified pending a later API enumeration.

No provider configuration was changed merely to obtain stronger evidence.

---

## 7. Mutation confirmation

During this mission, Infrastructure Operations did **not** modify:

- AWS IAM roles, trust policies, permission policies, permission boundaries, users, access keys, OIDC provider, Lambda, S3, Roles Anywhere, CloudTrail configuration, account settings or production state;
- GitHub Environment reviewers, protection rules, branch/tag rules, secrets, variables, workflows, rulesets or branch protection;
- Supabase;
- Lovable;
- parser/application code;
- deployment/publication state;
- production migrations.

All operational interaction was read-only evidence capture or read-only policy simulation.

---

## 8. Independent verification boundary

Infrastructure Operations does not certify GC-43 PASS.

This report and evidence package are a handoff to **Security & Permissions Architecture**, which must independently classify each previously `NOT VERIFIED` item as PASS, FAIL, or still NOT VERIFIED.

A positive Security decision does not itself reactivate GC-38; Mission Control must separately authorize any later reactivation.

---

## 9. Final disposition

`SECURITY EVIDENCE RECOVERY — COMPLETE — READY FOR GC-43 SECURITY RE-VERIFICATION`
