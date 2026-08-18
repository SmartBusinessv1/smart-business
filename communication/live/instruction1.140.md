# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-43A — SECURITY EVIDENCE-ACCESS / EVIDENCE-HANDOFF RECOVERY

**Instruction ID:** `instruction1.140`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-43A — Security Evidence Recovery`  
**Executing Room:** Infrastructure Operations  
**Downstream Verifier:** Security & Permissions Architecture  
**Authorized By:** Founder / Mission Control  
**Mode:** READ-ONLY PROVIDER EVIDENCE COLLECTION + SANITIZED HANDOFF  
**AWS / GitHub Mutation Authority:** NONE  
**Parser / Application Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Resolve only the evidence-access blocker recorded in merged:

`communication/live/report1.149.md`

GC-43 stopped because Security & Permissions Architecture could not independently inspect several load-bearing provider-state controls from the tooling available in that room.

This mission does not redesign or re-provision GC-42A.

The objective is to collect, sanitize, preserve, and hand off read-only evidence for the exact provider-state items marked `NOT VERIFIED`, so Security can resume independent verification without relying only on Infrastructure Operations assertions.

Required completion report:

`communication/live/report1.150.md`

---

## 2. Canonical Entry State

Execute only after this instruction is human-reviewed and merged to `main`.

Before acting, read at minimum:

1. `communication/live/report1.149.md`;
2. `communication/live/instruction1.139.md`;
3. `communication/live/report1.147.md`;
4. `communication/live/instruction1.137.md`;
5. `communication/live/report1.145.md`;
6. current GC-42A verification workflows under `.github/workflows/`;
7. current repository communication and evidence-handling rules.

Exact evidence blocker from merged `report1.149.md` includes independent verification of:

- actual AWS deploy-role trust policy;
- effective deploy-role permission policy and attachments;
- runtime permission-boundary policy document;
- exact `iam:PassRole` statements;
- IAM Policy Simulator results relied upon for self-escalation denial;
- GitHub Environment reviewer / bypass / branch / tag / secrets configuration;
- CloudTrail / STS positive and negative assumption events;
- current root / static-access-key provider state.

Do not broaden this mission beyond those evidence gaps except where one directly adjacent read-only fact is required to authenticate or interpret the evidence.

---

## 3. Evidence Doctrine

Evidence must be provider-derived wherever practical.

Acceptable evidence sources include:

- AWS console read-only views;
- AWS CLI/API read-only commands executed interactively by the Founder or Infrastructure Operations under already-authorized access;
- GitHub repository/environment/ruleset UI or API read-only views;
- GitHub Actions run logs that contain only sanitized non-secret evidence;
- CloudTrail Event History read-only records;
- IAM Policy Simulator read-only simulation outputs;
- canonical repository workflow/configuration files.

Infrastructure Operations may guide Founder Riyas PK through interactive console steps where the provider requires human access.

Infrastructure Operations must not ask Security to trust a verbal assertion when a provider-derived read-only artifact can be captured safely.

---

## 4. Required AWS Evidence

Collect and record sanitized evidence sufficient for Security to independently evaluate the following.

### 4.1 Deploy-role identity and trust policy

Role:

`TeamLIPS-SB-NonProd-Parser-DeployRole`

Required evidence:

- role ARN;
- maximum session duration;
- current assume-role trust policy document;
- exact OIDC federated principal;
- exact audience condition;
- exact subject condition;
- exact repository, repository ID, repository owner ID, environment, and ref conditions where present;
- confirmation no wildcard or broader alternate trusted principal exists.

### 4.2 Effective deploy-role permissions

Required evidence:

- attached managed policies;
- inline policies, if any;
- current policy document(s) for every permission source attached to the deploy role;
- confirmation no AWS-managed administrator/power-user policy is attached;
- confirmation no unexpected second policy source is present.

### 4.3 Runtime permission boundary

Policy:

`TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`

Required evidence:

- policy ARN;
- current/default policy version;
- full current boundary policy document;
- evidence that the deploy role cannot mutate or replace the boundary through its effective permissions.

### 4.4 Exact `iam:PassRole`

Extract the actual effective `iam:PassRole` statement(s) from the current deploy-role permission policy and preserve:

- allowed role resource ARN(s);
- service-principal conditions such as `iam:PassedToService` where used;
- any tag/path/namespace conditions;
- explicit evidence that arbitrary deploy/admin/production roles are not passable.

### 4.5 Self-escalation / Policy Simulator evidence

Reproduce or retrieve read-only Policy Simulator evidence for the material denial cases relied upon in `report1.147.md`, including at minimum:

- deploy-role trust self-edit;
- attach/put policy to deploy role;
- create user/access key;
- modify/delete GitHub OIDC provider;
- mutate runtime-boundary policy version/default version;
- arbitrary `sts:AssumeRole` pivot;
- arbitrary-role probe denial.

Do not execute mutation APIs merely to prove denial.

### 4.6 CloudTrail / STS evidence

Capture sanitized read-only evidence for the three GC-42A assumption cases:

- successful protected `main` + `aws-nonprod-parser` environment assumption;
- denied missing-environment-subject assumption;
- denied non-main-ref assumption.

For each, preserve where available:

- event time;
- event source;
- event name;
- region;
- sanitized OIDC subject;
- success/error result;
- assumed role identity for the positive case;
- zero-resource/no-session outcome for negative cases where provider output exposes it.

Never capture or store OIDC tokens, temporary access keys, secret keys, or session tokens.

### 4.7 Static-credential and root posture

Provide current provider-derived read-only evidence sufficient to establish:

- no root access key exists;
- no IAM-user engineering access key was created for this execution path;
- deployment uses OIDC/STS short-lived credentials;
- root is not the steady-state deployment identity.

Do not expose unrelated account credential metadata or personal/security-sensitive data beyond what is necessary to prove the posture.

---

## 5. Required GitHub Environment Evidence

For environment:

`aws-nonprod-parser`

Collect provider-derived read-only evidence sufficient to establish:

- required reviewer is the Founder-controlled GitHub account `SmartBusinessv1`;
- `Prevent self-review` is OFF only under the approved Founder-stage exception;
- administrator bypass is disabled;
- deployment branch/tag policy permits `main` only;
- no tags are allowed;
- environment secrets contain no AWS static access credential;
- no broader deployment path exists through the environment configuration.

If GitHub does not expose a field through one available interface, use a second read-only interface or record the limitation precisely. Do not mutate configuration to make it easier to inspect.

---

## 6. Evidence Packaging and Sanitization

Create a dedicated evidence location under:

`communication/evidence/SB-P-1.11-GC-43A/`

Store only sanitized text/JSON/Markdown evidence that is safe for the canonical repository.

At minimum include a manifest:

`communication/evidence/SB-P-1.11-GC-43A/manifest.md`

The manifest must map each GC-43 `NOT VERIFIED` control to:

- provider/source;
- evidence file or canonical provider/run reference;
- capture method;
- capture time;
- sanitization performed;
- whether Security should be able to independently verify the control from the evidence.

Do not commit:

- AWS secret access keys;
- temporary STS credentials;
- OIDC/JWT tokens;
- private keys or certificates;
- session cookies;
- MFA data;
- PAN/payment data;
- unrelated personal data;
- raw secrets from GitHub or AWS.

If a provider screen contains sensitive values, redact them before repository inclusion while preserving enough context for independent verification.

Screenshots may be used only if textual/API evidence is unavailable or materially weaker; prefer structured textual evidence where practical.

---

## 7. Mutation Prohibitions

This mission does not authorize any mutation of:

- AWS IAM roles, policies, permission boundaries, OIDC provider, users, access keys, Lambda, S3, IAM Roles Anywhere, certificates, Function URLs, CloudTrail configuration, account settings, or production resources;
- GitHub Environment protections, reviewers, branch/tag rules, secrets, repository rulesets, branch protection, workflows, or Actions settings;
- Supabase;
- Lovable;
- parser/application code;
- production migrations;
- deployment/publication state.

Read-only evidence capture is the only operational purpose.

If a provider requires a configuration change merely to expose evidence, STOP and return to Mission Control.

---

## 8. Independent Verification Boundary

Infrastructure Operations may collect and package evidence, but must not certify GC-43 as PASS.

The downstream decision remains with:

**Security & Permissions Architecture**

After a positive `report1.150.md` is human-reviewed and merged, Mission Control may route Security back to complete GC-43 against:

- canonical provider-derived evidence;
- repository/workflow state;
- previously recorded GC-42A evidence.

Security must independently classify each previously `NOT VERIFIED` item as PASS, FAIL, or still NOT VERIFIED.

No AI actor may approve its own evidence collection work as the final Security decision.

---

## 9. Stop Conditions

Stop and report if:

- any required evidence can only be obtained by changing AWS/GitHub state;
- evidence capture would expose secrets or sensitive credentials;
- provider state materially differs from `report1.147.md`;
- an unexpected principal, policy, permission, secret, deployment branch/tag, static credential, or production path is discovered;
- Policy Simulator or CloudTrail evidence contradicts the previously recorded result;
- evidence cannot be made independently understandable after safe sanitization;
- access/tooling remains insufficient for a load-bearing control.

Do not repair or mutate provider state under this mission.

---

## 10. Required Completion Report

Infrastructure Operations shall produce:

`communication/live/report1.150.md`

The report must state:

- exact instruction executed;
- exact canonical `main` SHA used;
- evidence files created;
- provider sources used;
- each previously unverified GC-43 control and its evidence status;
- sanitization/redaction performed;
- any residual evidence limitation;
- confirmation no AWS/GitHub/Supabase/Lovable/parser/production mutation occurred;
- final disposition.

Allowed final dispositions:

- `SECURITY EVIDENCE RECOVERY — COMPLETE — READY FOR GC-43 SECURITY RE-VERIFICATION`
- `SECURITY EVIDENCE RECOVERY — PARTIAL — ADDITIONAL READ-ONLY EVIDENCE REQUIRED`
- `SECURITY EVIDENCE RECOVERY — STOPPED — SECURITY, ACCESS, OR EVIDENCE BLOCKER`

---

## 11. Next Gate

A positive merged `report1.150.md` does not reactivate GC-38.

It only makes a resumed independent GC-43 Security & Permissions Architecture verification eligible.

Only after Security independently verifies the actual provisioned boundary and returns a positive merged Security disposition may Mission Control consider a separate GC-38 reactivation authorization.

---

## 12. Mission Control Decision

`SB-P-1.11-GC-43A — SECURITY EVIDENCE-ACCESS / EVIDENCE-HANDOFF RECOVERY AUTHORIZED AFTER HUMAN MERGE`
