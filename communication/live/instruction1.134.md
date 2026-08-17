# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-40 — AWS EXECUTION-ACCESS & ENVIRONMENT-PROVISIONING DESIGN

**Instruction ID:** `instruction1.134`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-40 — AWS Execution-Access & Environment-Provisioning Design`  
**Executing Room:** Infrastructure Operations  
**Required Next Specialist:** Security & Permissions Architecture  
**Authorized By:** Founder / Mission Control  
**Mode:** DESIGN + READINESS ONLY  
**AWS Resource-Creation Authority:** NONE  
**AWS IAM / Identity Mutation Authority:** NONE  
**Application Implementation Authority:** NONE  
**Supabase Mutation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Design the exact, least-privilege, non-production AWS execution-access and environment-provisioning path required before `SB-P-1.11-GC-38 — AWS Lambda Parser Implementation` may resume.

The prior GC-38 implementation attempt stopped because the engineering executor had no approved AWS account/environment identity or AWS-capable execution path. GC-39 has now established the first organization-controlled AWS account and baseline root security.

This mission must convert that new account state into one implementation-ready access design without creating any AWS resource or credential yet.

Required Infrastructure Operations output:

`communication/live/report1.144.md`

A positive Infrastructure report does not activate the design. It must next receive a separately authorized Security & Permissions Architecture review before any access or environment provisioning is permitted.

---

## 2. Canonical Entry State

Execute only after this instruction is human-reviewed and merged to `main`.

Before review/design, read at minimum:

1. `communication/live/report1.143.md` — GC-39 AWS Founder onboarding completion;
2. `communication/live/report1.142.md` — GC-38 implementation STOP report;
3. `communication/live/instruction1.132.md` — GC-38 controlled implementation authorization and stop conditions;
4. `communication/live/report1.126.md` — locked Lambda Parser EIS record;
5. `communication/live/report1.115.md` — Infrastructure Operations Lambda Parser EIS PASS;
6. accepted Infrastructure/Supabase/Security correction chain incorporated by `report1.126.md`;
7. `docs/implementation/SB-P-1.11/engineering-contract.md` Version 1.2;
8. current repository communication protocol and current merged `main`.

Preserve the following established state:

- organization-controlled AWS account exists;
- account display name: `Team LIPS - Smart Business`;
- AWS account ID: `658980433673` — non-secret account metadata;
- root MFA is enabled and sign-in verified;
- no long-lived AWS access key has been created;
- no Lambda/S3/IAM Roles Anywhere/parser implementation resource exists yet;
- `ap-south-1` remains the locked future parser-resource region unless separately amended;
- GC-38 remains stopped and must not resume from this instruction alone.

---

## 3. Design Question To Resolve

Infrastructure Operations must recommend exactly one practical Phase 1 path for authorized engineering execution against this non-production AWS account.

The design must answer two distinct identity questions and must not collapse them:

### 3.1 Deployment / control-plane identity

How an authorized human/repository engineering workflow will create and configure the approved Lambda, S3, IAM, Function URL, and related non-production AWS resources.

This is an engineering/deployment identity.

### 3.2 Runtime workload identity

How the Smart Business server runtime will later authenticate to the parser boundary at runtime.

The locked runtime architecture uses the approved IAM Roles Anywhere / AWS4-X509 / AWS_IAM Function URL model. This runtime identity is not automatically the correct deployment identity.

Infrastructure Operations must preserve that distinction.

---

## 4. Required Execution-Path Evaluation

Using current official AWS documentation as the primary source, and current official GitHub documentation where repository federation is evaluated, Infrastructure Operations must evaluate only the smallest credible options needed to choose one implementation path.

At minimum consider whether the deployment/control-plane path should use one of the following classes:

- AWS IAM Identity Center / short-lived human CLI session;
- GitHub Actions OIDC federation into a narrowly scoped non-production AWS deployment role;
- an equivalent current AWS-native temporary-credential method;
- a Founder-operated/bootstrap path for the minimum one-time trust setup if an initial AWS-side action cannot yet be automated safely.

Do not treat these as a menu for the Founder. Compare them, reject unsuitable options, and recommend exactly one end-state design plus the minimum bootstrap sequence required to establish it.

Do not select long-lived IAM user access keys merely because they are easy for an AI executor to consume.

If an AWS-capable ChatGPT/Claude integration is available and materially changes the design, record it as evidence. Capability availability alone does not create authority.

---

## 5. Repository-First Requirement

The preferred design should strengthen the established Smart Business repository-first operating model.

Infrastructure Operations must determine whether the safest practical deployment path is:

1. infrastructure-as-code or bounded deployment configuration committed to `SmartBusinessv1/smart-business`;
2. human-reviewed PR;
3. short-lived/federated AWS deployment identity;
4. controlled non-production apply/deploy;
5. evidence returned to the repository.

If GitHub Actions OIDC is recommended, the report must define without implementing:

- expected AWS OIDC trust boundary;
- exact repository restriction;
- branch/environment restriction;
- required GitHub Environment or approval boundary if appropriate;
- deploy-role purpose and least-privilege principle;
- whether initial role/provider bootstrap must be Founder-guided in the AWS console;
- how future automation avoids static AWS secrets in GitHub.

If another design is recommended, provide the equivalent repository-first and short-lived-credential controls.

---

## 6. Non-Production Isolation Design

Define the minimum naming/tagging/environment boundary needed so GC-38 cannot accidentally create production resources.

At minimum specify:

- account: `658980433673`;
- intended environment classification: non-production / test implementation environment;
- resource region: `ap-south-1` unless separately amended;
- a consistent Smart Business parser resource naming prefix/convention;
- environment tags/labels sufficient to identify non-production ownership;
- separation from any future production Lambda/S3/IAM resources;
- a deny/stop rule for any unexpected account or region mismatch.

Do not create the resources during GC-40.

Do not decide the final future production-account topology unless necessary to keep this non-production environment safely isolated.

---

## 7. Root Account Boundary

Root must not become the normal engineering execution identity.

The design must preserve:

- root only for account-level/root-only recovery and exceptional administration;
- root MFA remains enabled;
- no root access key;
- no routine Claude Code or GitHub deployment through root;
- no storage of root credentials in repository, CI, local `.env`, ChatGPT, Claude, or third-party automation.

If one-time root use is unavoidable for an AWS account-level bootstrap action, explicitly identify the action and why ordinary delegated administration cannot perform it. Do not assume root is required where AWS supports a safer delegated mechanism.

---

## 8. Privilege Boundary Required In The Design

The design report must specify the intended deployment identity's permission boundary at a resource/action-family level sufficient for Security review.

It must be limited to what GC-38 will actually need for the locked non-production parser architecture, such as narrowly bounded management of the approved Lambda/S3/IAM/Function URL/logging resources and only the required trust/configuration dependencies.

Do not silently authorize broad `AdministratorAccess` as the permanent engineering identity.

If temporary bootstrap administration is proposed, distinguish it from the final steady-state deploy role and specify how the bootstrap authority is removed or no longer used afterward.

The report must identify destructive/high-risk actions that should require explicit human approval or remain excluded.

---

## 9. Secret and Credential Safety

Infrastructure Operations must not ask the Founder to disclose or commit:

- root password;
- MFA secrets/codes;
- access-key secrets;
- session tokens;
- private keys;
- workload certificate private keys;
- recovery material;
- payment data.

The target design must avoid long-lived AWS secrets in:

- GitHub repository;
- GitHub Actions secrets where federation can replace them;
- Claude Code configuration;
- ChatGPT;
- Lovable client/server bundles;
- committed `.env` files.

Non-secret values such as AWS account ID, role names, resource names, OIDC provider metadata, region, and policy document structure may be recorded where appropriate.

---

## 10. Runtime IAM Roles Anywhere Boundary

Do not redesign the locked runtime workload-authentication model in this mission.

The report must state how the future IAM Roles Anywhere / AWS4-X509 runtime identity relates to, but remains separate from, the deployment/control-plane identity.

No trust anchor, profile, workload certificate, private key, runtime IAM role, or Function URL is created in GC-40.

If Infrastructure Operations discovers that the locked runtime model is no longer technically implementable or conflicts with current AWS platform behavior, stop and return the evidence to Mission Control. Do not silently substitute another runtime authentication architecture.

---

## 11. Required Founder Interaction

Infrastructure Operations may ask the Founder for non-secret screenshots or confirmations necessary to understand the current AWS console/account state.

The Founder should not be asked to perform broad IAM/resource setup during this design mission.

If a small read-only console observation is needed, guide it step by step.

If the design concludes that one-time bootstrap actions will later be required, list them for the next provisioning mission rather than performing them now.

---

## 12. Required `report1.144.md`

Infrastructure Operations must produce a concise but implementation-ready design report containing:

1. mission/workstream identity and exact instruction executed;
2. exact canonical `main` SHA used;
3. current AWS account/non-production baseline;
4. explicit separation of deployment identity vs runtime IAM Roles Anywhere identity;
5. options evaluated and why rejected/accepted;
6. exactly one recommended deployment/control-plane execution path;
7. exact bootstrap sequence required to establish it later;
8. repository/GitHub integration model where applicable;
9. account/region/resource naming and non-production isolation rules;
10. steady-state least-privilege deployment role/identity design;
11. temporary/bootstrap privilege treatment if any;
12. secret-storage/credential model;
13. human approval boundaries and stop conditions;
14. confirmation that no AWS resource/identity/credential was created or changed during GC-40;
15. whether any unresolved technical/account/tooling blocker remains;
16. exact items Security & Permissions Architecture must review;
17. final disposition.

Allowed dispositions:

- `AWS EXECUTION-ACCESS DESIGN — READY FOR SECURITY REVIEW`
- `AWS EXECUTION-ACCESS DESIGN — CHANGES REQUIRED`
- `AWS EXECUTION-ACCESS DESIGN — STOPPED — AUTHORITY OR TOOLING BLOCKER`

A positive result is design-only and grants no provisioning authority.

---

## 13. Mandatory Security Review Gate

After a human-reviewed and merged positive `report1.144.md`, Mission Control must issue a separate instruction to **Security & Permissions Architecture**.

Security review must verify at minimum:

- least privilege;
- root separation;
- temporary/federated credential posture;
- repository/OIDC trust restriction if used;
- branch/environment/repository claims;
- privilege escalation paths;
- IAM pass-role boundaries;
- destructive-action containment;
- bootstrap authority removal;
- secret leakage risks;
- deployment identity vs runtime IAM Roles Anywhere separation;
- account/region mismatch fail-closed behavior.

Only a later human-reviewed and merged Security PASS may make actual execution-access/environment provisioning eligible.

---

## 14. Explicitly Not Authorized

GC-40 does not authorize:

- IAM user/role/provider/Identity Center creation or mutation;
- GitHub OIDC provider creation in AWS;
- GitHub Actions workflow that actually deploys AWS resources;
- AWS access key creation;
- Lambda/S3/IAM Roles Anywhere/Function URL/resource creation;
- certificates/private keys;
- CloudFormation/CDK/Terraform apply;
- application code implementation;
- parser dependencies;
- Supabase migrations or mutation;
- the two pending production Catalog-import migrations;
- Lovable mutation;
- deployment/publication;
- production enablement;
- GC-38 reactivation;
- Stage 21/22/23/24;
- SB-P-1.11 acceptance or closure.

---

## 15. Stop Conditions

Stop and report to Mission Control if:

- current account identity conflicts with GC-39;
- root security has materially regressed;
- an exact current AWS platform fact required for the design cannot be verified;
- the selected design would require persistent access keys as the only feasible path;
- the locked IAM Roles Anywhere runtime model is contradicted by current AWS behavior;
- the design requires broad permanent administrator access with no bounded alternative;
- repository/GitHub trust cannot be constrained to the approved repository/environment;
- an unexpected production or cross-account dependency appears;
- the requested work would require actual AWS mutation before Security review.

---

## 16. Mission Control Decision

`SB-P-1.11-GC-40 — AWS EXECUTION-ACCESS & ENVIRONMENT-PROVISIONING DESIGN AUTHORIZED AFTER HUMAN MERGE`

The next eligible gate after a positive merged Infrastructure report is **Security & Permissions Architecture review only**. Actual provisioning remains separately gated.