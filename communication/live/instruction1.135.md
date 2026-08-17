# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-41 — AWS EXECUTION-ACCESS SECURITY & PERMISSIONS REVIEW

**Instruction ID:** `instruction1.135`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-41 — AWS Execution-Access Security & Permissions Review`  
**Executing Room:** Security & Permissions Architecture  
**Authorized By:** Founder / Mission Control  
**Mode:** SECURITY REVIEW ONLY  
**AWS IAM / Identity Mutation Authority:** NONE  
**AWS Resource-Creation Authority:** NONE  
**Application Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Perform an independent Security & Permissions Architecture review of the merged Infrastructure Operations design in:

`communication/live/report1.144.md`

The design under review is:

`GitHub Actions OIDC federation → narrowly scoped non-production AWS parser deploy role`

The purpose of this gate is to determine whether that design is safe enough to proceed to a separately authorized provisioning mission.

This review does **not** provision the design and does **not** reactivate GC-38.

Required specialist output:

`communication/live/report1.145.md`

---

## 2. Entry Basis

Execute only after this instruction is human-reviewed and merged to `main`.

Before reviewing, read at minimum:

1. `communication/live/report1.144.md` — GC-40 Infrastructure Operations design report;
2. `communication/live/instruction1.134.md` — GC-40 design authorization;
3. `communication/live/report1.143.md` — completed AWS Founder onboarding baseline;
4. `communication/live/report1.142.md` — GC-38 STOP report;
5. `communication/live/instruction1.132.md` — locked Lambda implementation authorization and stop conditions;
6. `communication/live/report1.126.md` — Lambda Parser EIS lock record;
7. `communication/live/report1.124.md` — prior Lambda Parser Security & Permissions PASS;
8. the accepted security correction/confirmation chain made authoritative by the EIS lock record;
9. `docs/implementation/SB-P-1.11/engineering-contract.md` Version 1.2;
10. current repository communication protocol and current merged `main` state.

Use current official AWS and GitHub documentation where security-sensitive OIDC/IAM behavior could have changed.

---

## 3. Frozen Baseline

Do not reopen Product Truth, Founder Workflow, parser limits, the nineteen-command Catalog boundary, Catalog/Inventory separation, D-047, D-068, EC-2, EC-3, BKR-1 through BKR-5, or the locked runtime workload identity unless a direct load-bearing security contradiction is proven.

The locked runtime workload identity remains separate from deployment identity:

`IAM Roles Anywhere → AWS4-X509 CreateSession → temporary workload credentials → AWS_IAM Lambda Function URL`

The GC-40 deployment/control-plane design must not replace or weaken that runtime identity.

Current non-production AWS account metadata from the merged baseline:

- account: `658980433673`
- environment: `nonprod`
- region: `ap-south-1`
- canonical repository: `SmartBusinessv1/smart-business`
- proposed GitHub Environment: `aws-nonprod-parser`
- proposed deploy role: `TeamLIPS-SB-NonProd-Parser-DeployRole`

No AWS IAM/resource provisioning is currently authorized.

---

## 4. Required Security Review Scope

Review the complete GC-40 execution-access design, with particular attention to the following.

### SEC-GC41-01 — GitHub OIDC trust boundary

Determine whether the proposed AWS trust model can be made fail-closed and narrowly scoped.

Verify the design requires:

- OIDC provider `token.actions.githubusercontent.com`;
- audience restricted to `sts.amazonaws.com`;
- exact canonical repository restriction;
- exact GitHub Environment restriction;
- exact subject/claim matching based on the actual emitted GitHub OIDC claim format;
- no repository-owner wildcard, organization-wide wildcard, fork trust, arbitrary branch trust, or broad `repo:*` trust;
- STOP if actual emitted claims do not match the reviewed trust contract rather than broadening the policy to make it work.

Review whether immutable repository/owner identifiers should be used where supported and reliable, and whether any documented claim limitation requires a narrower alternative condition set.

### SEC-GC41-02 — GitHub Environment and workflow authorization boundary

Review whether the proposed `aws-nonprod-parser` GitHub Environment provides sufficient human/branch protection for this repository and current plan/capabilities.

Confirm the design cannot permit an arbitrary pull request, fork, feature branch, unreviewed workflow edit, or unrelated repository workflow to obtain the AWS deploy role.

Identify any mandatory repository/environment protection that must exist before provisioning may pass.

### SEC-GC41-03 — One-time root bootstrap exception

Review the GC-40 proposal to use the MFA-protected root user only for the minimum one-time bootstrap required to establish the OIDC provider and deploy role in a new standalone account with no delegated AWS identity.

Determine whether this is acceptable as a bounded bootstrap exception or whether a safer practical bootstrap path is required.

If accepted, lock the minimum necessary actions and require root to exit immediately afterward.

No root access key may be created.

### SEC-GC41-04 — Deploy-role least privilege

Review whether the proposed deploy role can be constrained to the exact non-production parser resource families and namespace.

The review must address at minimum:

- Lambda management;
- transient parser-ingress S3 management;
- CloudWatch Logs/monitoring needed by the parser;
- the exact IAM runtime roles/policies needed by the locked parser architecture;
- IAM Roles Anywhere resources required by the runtime model;
- limited read/describe/tagging operations required for plan, verification and rollback;
- any AWS APIs that cannot be resource-ARN scoped before creation and the strongest available request-tag/name/condition controls for them.

Do not approve generic AdministratorAccess, PowerUserAccess, broad `iam:*`, broad `s3:*`, broad `lambda:*`, or account-wide wildcard authority merely for convenience.

### SEC-GC41-05 — Self-escalation prevention

Determine whether the deploy role is structurally prevented from expanding its own authority.

Review and require controls for:

- deploy role cannot modify its own trust policy;
- deploy role cannot modify/attach its own permission policies;
- deploy role cannot delete or weaken its own permission boundary where one is required;
- deploy role cannot create unrestricted IAM roles and then assume/pass them;
- deploy role cannot create IAM users or access keys;
- deploy role cannot alter/delete the GitHub OIDC provider;
- deploy role cannot create an alternate privileged federation path;
- deploy role cannot attach broad AWS managed admin policies.

### SEC-GC41-06 — `iam:PassRole` boundary

Review every expected `iam:PassRole` need.

Require that `iam:PassRole` is limited to specifically approved parser runtime role(s), approved namespace, and intended AWS service principal/use path.

The deploy role must not be able to pass arbitrary or future production roles.

### SEC-GC41-07 — Permission boundary design

Determine whether an IAM permission boundary is mandatory for roles created/managed by the deploy role.

If mandatory, define what security properties the boundary must enforce, including prevention of privilege escalation, unrelated resource management and production reach.

Do not require a broader governance system than necessary for this Phase 1 non-production parser boundary.

### SEC-GC41-08 — Non-production and production isolation

Review whether the account/region/name/tag preflight controls in `report1.144.md` sufficiently prevent accidental production targeting.

At minimum verify the design fails closed unless:

- `sts:GetCallerIdentity` account is `658980433673`;
- region is `ap-south-1`;
- environment classification is `nonprod`;
- target names match the approved non-production parser namespace;
- no production resource identifier is present.

Confirm the non-production deploy role must not be reusable for a future production parser environment.

### SEC-GC41-09 — Deployment identity vs runtime workload identity

Confirm that GitHub Actions OIDC deployment identity and IAM Roles Anywhere runtime identity remain separate trust domains with separate permissions and lifecycle.

The deployment role must not become the runtime application credential, and the runtime workload identity must not gain deployment/control-plane authority.

### SEC-GC41-10 — Secrets and credential posture

Confirm the design requires no static AWS access key, secret access key or session token stored in GitHub Secrets, repository files, Claude Code local configuration or ChatGPT.

Review whether any later certificate/private-key material required for IAM Roles Anywhere has an appropriately separate handling path and is not implicitly solved by GitHub OIDC.

### SEC-GC41-11 — Workflow mutation / supply-chain boundary

Review the risk that a compromised or malicious repository change could modify the deployment workflow or IaC and then obtain the OIDC role.

Require the minimum practical controls consistent with the existing repository-first operating model, such as protected human-reviewed changes, explicit environment approval where supported, deployment from approved canonical state, and avoidance of untrusted PR code in credential-bearing jobs.

Do not invent enterprise ceremony unsupported by actual project needs.

### SEC-GC41-12 — Auditability, revocation and recovery

Review whether the design provides clear revocation and incident-recovery paths, including:

- disabling/removing OIDC trust;
- disabling the deploy role;
- reviewing CloudTrail/STS role-session evidence where applicable;
- keeping root as recovery/account-level authority only;
- preventing permanent engineering credentials from becoming the recovery mechanism.

### SEC-GC41-13 — Bootstrap-to-steady-state transition

Review whether the proposed sequence can transition safely from one-time Founder/root bootstrap to steady-state GitHub OIDC deployment without leaving an unnecessary privileged bootstrap identity or credential behind.

The positive security result must identify the exact security prerequisites that the later provisioning mission must satisfy before the first OIDC role assumption is accepted.

---

## 5. Required Review Method

This is an independent review, not a restatement of Infrastructure Operations' recommendation.

For each SEC-GC41 item:

1. state `PASS`, `CHANGES REQUIRED`, or `NOT APPLICABLE`;
2. cite the concrete design element reviewed;
3. identify any attack path or privilege-escalation path considered;
4. state the exact required correction if the item does not pass;
5. distinguish architecture/design evidence from controls that can only be verified during later provisioning/runtime evidence.

Where official AWS/GitHub behavior is load-bearing and could have changed, verify it against current official documentation.

Do not claim a future policy or control has been tested when it has not yet been provisioned.

---

## 6. Allowed Outcomes

### Positive outcome

Use only if the design is sufficiently safe to proceed to a later controlled provisioning authorization:

`AWS EXECUTION-ACCESS SECURITY & PERMISSIONS REVIEW — PASS — READY FOR PROVISIONING AUTHORIZATION`

### Correction outcome

Use if bounded design corrections are required before provisioning:

`AWS EXECUTION-ACCESS SECURITY & PERMISSIONS REVIEW — CHANGES REQUIRED`

### Stop outcome

Use if a material security/evidence gap prevents a safe design decision:

`AWS EXECUTION-ACCESS SECURITY & PERMISSIONS REVIEW — STOPPED — SECURITY OR EVIDENCE BLOCKER`

A positive outcome does not itself authorize provisioning.

---

## 7. Explicitly Not Authorized

This review mission does **not** authorize:

- creating the GitHub OIDC provider in AWS;
- creating or modifying IAM roles/policies/permission boundaries;
- creating GitHub Environments or changing repository protection settings;
- assuming any AWS role through OIDC;
- creating Lambda, S3, CloudWatch, IAM Roles Anywhere or Function URL resources;
- creating certificates or private keys;
- creating any AWS access key;
- Terraform/CloudFormation/CDK apply;
- Supabase migrations or support-state implementation;
- applying the two pending production Catalog-import migrations;
- Lovable changes;
- application implementation;
- deployment/publication;
- production enablement;
- GC-38 reactivation;
- Stage 21/22/23/24 lifecycle actions;
- SB-P-1.11 acceptance or closure.

If verification would require mutating AWS/GitHub state, record it as a later provisioning-evidence requirement instead of performing it.

---

## 8. Required Report

Security & Permissions Architecture shall create or return content suitable for:

`communication/live/report1.145.md`

The report must include:

- mission/workstream identity;
- exact instruction executed;
- exact canonical `main` SHA reviewed;
- exact `report1.144.md` design reviewed;
- SEC-GC41-01 through SEC-GC41-13 results;
- any required policy/trust/permission-boundary corrections;
- explicit statement that no AWS/GitHub/Supabase/Lovable mutation occurred;
- explicit statement that no static AWS access key was created or approved;
- exact remaining prerequisites for a provisioning mission;
- final disposition from Section 6.

Human review and merge are required. No self-merge.

---

## 9. Next Gate

Only after a human-reviewed and merged positive Security & Permissions Architecture report may Mission Control consider a separate:

**AWS execution-access provisioning authorization**

That later mission may provision only the reviewed bootstrap/OIDC/deploy-role boundary and must verify the actual emitted OIDC claims and effective AWS permissions before GC-38 is reactivated.

GC-38 remains stopped until that later provisioning gate is completed and independently accepted.

---

## 10. Mission Control Decision

`SB-P-1.11-GC-41 — AWS EXECUTION-ACCESS SECURITY & PERMISSIONS REVIEW AUTHORIZED AFTER HUMAN MERGE`
