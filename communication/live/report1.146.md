# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-42 — AWS EXECUTION-ACCESS PROVISIONING REPORT

**Report ID:** `report1.146`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-42 — AWS Execution-Access Provisioning`  
**Executing Room:** Infrastructure Operations  
**In Reply To:** `communication/live/instruction1.136.md`  
**Mode:** CONTROLLED NON-PRODUCTION ACCESS PROVISIONING + EVIDENCE  
**Lambda / S3 Parser Build Authority:** NONE  
**Production Authority:** NONE

---

## 1. Exact Instruction and Canonical Base

Executed:

`communication/live/instruction1.136.md`

Exact merged `main` SHA used:

`cca08de309f81b82a57cb8173c132b9da4551371`

Commit:

`SB-P-1.11: authorize AWS execution-access provisioning (#311)`

Binding security input:

`communication/live/report1.145.md`

---

## 2. Provisioning Actions Completed Before STOP

The following authorized bootstrap actions were completed interactively by the Founder:

1. AWS IAM OIDC provider created for GitHub Actions.
2. Provider issuer confirmed as:

   `token.actions.githubusercontent.com`

3. Intended client audience used:

   `sts.amazonaws.com`

4. GitHub Environment created in the canonical repository:

   `aws-nonprod-parser`

5. No GitHub Environment secret or static AWS credential was added.

The AWS OIDC provider currently has no deploy role attached under this mission state, so it grants no deployment authority by itself.

---

## 3. Provisioning Action Intentionally Not Performed

The following were not created because a binding GitHub Environment protection contradiction was discovered before deploy-role creation:

- `TeamLIPS-SB-NonProd-Parser-DeployRole`;
- deploy-role trust policy;
- deploy-role permissions policy;
- parser-runtime permission-boundary policy;
- verification-only credential-bearing workflow;
- any OIDC role assumption;
- any Lambda, S3, IAM Roles Anywhere, Function URL, certificate, Supabase, Lovable, parser, deployment, or production resource/action.

This stop occurred before creating any AWS role or permission-bearing execution identity.

---

## 4. Founder-Stage GitHub Reviewer Constraint Discovered

`report1.145.md` and `instruction1.136.md` require the GitHub Environment to have both:

- a required Founder/human reviewer; and
- Prevent self-review enabled where available.

During provisioning, the Founder confirmed that he is currently the sole person operating Smart Business infrastructure and repository deployment decisions and does not wish to add a second person solely to satisfy this workflow control.

Current operating reality:

- Founder / sole infrastructure operator: Riyas PK;
- no second trusted GitHub reviewer currently exists for this repository;
- the Founder is the person who would both initiate and explicitly approve the controlled non-production verification workflow.

With GitHub Prevent self-review enabled, the initiating Founder cannot approve his own environment deployment. Therefore the merged security condition functionally requires a second human participant even though neither AWS nor GitHub inherently requires two people for OIDC federation.

This creates an internal governance/operating-model conflict rather than an AWS technical blocker.

---

## 5. Infrastructure Operations Finding

Infrastructure Operations does not recommend adding an otherwise unnecessary collaborator merely to satisfy this control.

For the current Founder-operated stage, a narrower control set remains materially strong without inventing a second operator:

- required environment reviewer: Founder Riyas PK;
- Prevent self-review: OFF while the Founder is the sole authorized operator;
- administrator bypass: OFF;
- deployment branch: protected `main` only;
- exact repository/environment OIDC trust;
- no pull-request/fork/feature-branch credential path;
- no static AWS credentials;
- explicit environment approval before credential-bearing execution;
- fail-closed AWS account `658980433673` verification;
- fail-closed region `ap-south-1` verification;
- fail-closed `nonprod` environment verification;
- all repository/PR/Mission Control gates otherwise preserved.

This is not being applied silently under GC-42 because it differs from the merged GC-41 binding condition.

---

## 6. Requested Mission Control Resolution

Mission Control should decide whether to issue a narrow Founder-stage amendment equivalent to:

> While Riyas PK is the sole authorized Smart Business infrastructure operator, `Prevent self-review` is not mandatory for `aws-nonprod-parser`. The environment must still require Founder approval, disable administrator bypass, restrict deployment to protected `main`, retain exact OIDC trust, use short-lived credentials only, and preserve every other GC-41 least-privilege and non-production control. If a second authorized infrastructure operator is later introduced, Prevent self-review should be reconsidered/enabled as part of the operating model.

If Mission Control approves that amendment through the normal communication channel, GC-42 can resume from the existing OIDC-provider / GitHub-Environment state without creating a second human role merely for process compliance.

If Mission Control declines the amendment, GC-42 remains blocked until a second trusted reviewer is intentionally added.

---

## 7. Security Boundary Preserved During STOP

Confirmed:

- AWS account remains `658980433673`;
- target environment remains `nonprod`;
- target region remains `ap-south-1`;
- root MFA remains the established account baseline;
- no root access key was created;
- no IAM-user engineering access key was created;
- no deploy role exists yet under GC-42;
- no static AWS deployment credential exists in GitHub Environment secrets;
- runtime IAM Roles Anywhere architecture was not touched or redesigned;
- no parser implementation resource was created.

---

## 8. GC-42 Verification Matrix at Current Disposition

| Mandatory item | Current result |
|---|---|
| GitHub OIDC provider exists | PASS |
| Correct GitHub issuer | PASS |
| Intended `sts.amazonaws.com` audience | PASS based on Founder provisioning input |
| GitHub Environment exists | PASS |
| Mandatory reviewer + reviewed self-review control | BLOCKED by sole-Founder operating model |
| Deploy role exists | NOT STARTED |
| Exact trust policy | NOT STARTED |
| Bounded permissions | NOT STARTED |
| Runtime permission boundary | NOT STARTED |
| Exact `iam:PassRole` | NOT STARTED |
| OIDC assumption | NOT STARTED |
| Negative assumption tests | NOT STARTED |
| CloudTrail/STS evidence | NOT STARTED |
| No static AWS credentials | PASS |
| No parser implementation resources | PASS |

No uncompleted verification item is represented as passing.

---

## 9. Unresolved Blocker

Single current blocker:

**The merged Prevent-self-review requirement is incompatible with the current sole-Founder operating model unless Team LIPS adds a second human reviewer solely for deployment approval.**

Infrastructure Operations recommends a narrow Founder-stage governance amendment rather than adding unnecessary organizational complexity.

No AWS technical contradiction has been found in the approved GitHub OIDC design itself.

---

## 10. Explicit Non-Implementation Confirmation

GC-42 has not created or modified:

- Lambda parser function;
- parser-ingress S3 bucket/object;
- IAM Roles Anywhere trust anchor/profile;
- runtime X.509 certificate/private key;
- Lambda Function URL;
- parser application code;
- Smart Business server integration;
- Supabase support state or migrations;
- pending production Catalog-import migrations;
- Lovable state;
- merchant-facing UI;
- production AWS resources;
- deployment/publication/domain cutover;
- GC-38 implementation.

---

## 11. Final Disposition

`AWS EXECUTION-ACCESS PROVISIONING — PARTIAL — FOUNDER OR TOOLING ACTION REQUIRED`

Required next action is Mission Control review of the sole-Founder reviewer-control conflict. Infrastructure Operations stops here and does not create the deploy role or begin Lambda parser implementation.