# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-39 — AWS FOUNDER ONBOARDING & ENVIRONMENT ACTIVATION GUIDANCE

**Instruction ID:** `instruction1.133`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-39 — AWS Founder Onboarding & Environment Activation Guidance`  
**Executing Room:** Infrastructure Operations  
**Authorized By:** Founder / Mission Control  
**Mode:** FOUNDER GUIDANCE + ACCOUNT ACTIVATION READINESS ONLY  
**Application Implementation Authority:** NONE  
**Lambda / S3 / IAM Roles Anywhere Build Authority:** NONE  
**Supabase Mutation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Guide the Founder, step by step, through establishing the first organization-controlled AWS account/context required for the locked Smart Business Lambda parser architecture, because the prior controlled implementation attempt stopped before implementation when no approved AWS account/environment or execution access existed.

This mission exists to remove that environment prerequisite safely.

The Infrastructure Operations room must act as the Founder's specialist guide. Mission Control must not substitute itself for the infrastructure specialist on AWS account setup.

Required completion / status report:

`communication/live/report1.143.md`

---

## 2. Entry Basis

Execute only after this instruction is human-reviewed and merged to `main`.

Before guiding the Founder, read at minimum:

1. `communication/live/report1.142.md` — GC-38 STOP report;
2. `communication/live/instruction1.132.md` — locked Lambda implementation authorization and stop conditions;
3. `communication/live/report1.126.md` — Lambda Parser EIS lock record;
4. `communication/live/report1.115.md` — Infrastructure Operations PASS for the Lambda Parser EIS;
5. the accepted Infrastructure correction/confirmation chain that `report1.126.md` makes authoritative where needed;
6. `docs/implementation/SB-P-1.11/engineering-contract.md` Version 1.2 — locked package;
7. current repository communication protocol and current merged `main` state.

Do not infer that an AWS account already exists. `report1.142.md` established that no approved AWS account/environment identity was available to the GC-38 executor.

---

## 3. Founder Fact To Preserve

The Founder has confirmed that Team LIPS / Smart Business has **not yet signed up for AWS**.

The organization normally signs up to stack tools using an official organization-controlled email identity and/or an approved organization account flow.

Infrastructure Operations shall guide the Founder from this actual starting point. Do not assume prior AWS Organizations, IAM, billing, CLI, access-key, SSO, or account setup exists.

---

## 4. Guidance Standard

Infrastructure Operations must guide the Founder interactively and sequentially.

For each material step:

1. explain what the step does in plain founder-friendly language;
2. state exactly what the Founder should click/select/enter;
3. distinguish secret/private fields from information that may safely be reported back;
4. wait for the Founder's confirmation or screenshot/result where useful before advancing to the next sensitive step;
5. verify the resulting state before declaring that step complete.

Use current **official AWS documentation** as the primary external source for any signup, root-user security, account-management, MFA, billing, identity, or region guidance that could have changed.

Do not overload the Founder with optional enterprise architecture that is not necessary to establish the approved Smart Business AWS context.

---

## 5. Scope Authorized In This Mission

Infrastructure Operations is authorized to guide the Founder through only the minimum account-establishment and baseline-security steps required to create a trustworthy organization-controlled AWS context.

This includes guidance for:

- creating the first AWS account using an appropriate organization-controlled Team LIPS / LIPS email identity selected by the Founder;
- completing the AWS signup identity/contact/billing verification steps required by AWS;
- establishing a strong root-account password privately;
- enabling appropriate root-user MFA using the currently supported AWS mechanism;
- verifying that account ownership/recovery remains controlled by the organization / Founder;
- identifying the resulting AWS account ID after creation, where AWS treats that identifier as non-secret account metadata;
- explaining that an AWS account is global and that `ap-south-1` is the locked **resource deployment region** for the Smart Business Lambda parser, not a separate account-signup region;
- verifying the Founder can sign in successfully after signup and baseline hardening;
- identifying what additional environment/access work remains before GC-38 can resume.

Infrastructure Operations may recommend a sensible account/display naming convention for this first Smart Business non-production context, but must not invent a legal/business identity different from the Founder-provided organizational details.

---

## 6. Non-Production Meaning For This First AWS Context

For this mission, `non-production` means:

> the first organization-controlled AWS context used to build, configure and verify the Smart Business Lambda parser architecture before any AWS resources are allowed to serve live merchant production workflows.

Do not tell the Founder that an AWS account itself is tied to `ap-south-1`; AWS accounts are global. The locked Lambda/S3 resources are intended for `ap-south-1` when their later creation is separately activated.

Do not decide future production-account topology beyond what is necessary now. A later Mission Control / Infrastructure / Security decision may determine whether production uses a separate AWS account or another formally isolated production boundary.

---

## 7. Secrets & Credential Safety

Infrastructure Operations must **never ask the Founder to paste or disclose** any of the following into ChatGPT, GitHub, the repository, screenshots intended for sharing, or a completion report:

- AWS root password;
- MFA seed / QR secret;
- MFA one-time codes except directly into the AWS UI where required;
- credit/debit card details;
- bank/payment authentication data;
- access-key secret;
- session token;
- private key;
- certificate private-key material;
- recovery codes or equivalent authentication secrets.

The room must explicitly warn the Founder before any step involving such information.

No long-lived AWS access key may be created merely to make Claude Code convenient.

---

## 8. Explicitly Not Authorized Yet

This mission does **not** authorize Infrastructure Operations or the Founder to create/configure the later Lambda parser resources, including:

- Lambda functions;
- S3 parser-ingress buckets or objects;
- IAM Roles Anywhere trust anchors/profiles;
- workload roles/policies for GC-38;
- Lambda Function URLs;
- certificates/private keys for workload identity;
- AWS access keys for Claude Code;
- CloudFormation/CDK/Terraform deployment stacks;
- application secrets or environment integration;
- production aliases or production AWS resources.

It also does not authorize:

- Supabase migrations or support-state implementation;
- the two pending production Catalog-import migrations;
- Lovable changes;
- application implementation;
- deployment/publication;
- production enablement;
- Founder runtime acceptance;
- Stage 21/22/23/24 lifecycle actions;
- SB-P-1.11 closure.

If AWS signup itself presents an unexpected architectural/security choice with material consequences, pause and return the choice to Mission Control rather than silently selecting a broader architecture.

---

## 9. Required Baseline Verification Before Positive Completion

Before reporting the AWS onboarding prerequisite as satisfied, Infrastructure Operations must verify with the Founder, without exposing secrets:

1. an AWS account has actually been created and can be signed into;
2. the account is controlled through an organization-owned/approved email identity;
3. root-user MFA is enabled and verified;
4. organization/Founder recovery control is understood and retained;
5. the AWS account ID is known and recorded only as non-secret metadata if needed;
6. the locked future deployment region is understood as `ap-south-1`;
7. no Lambda/S3/IAM Roles Anywhere implementation resource has yet been created under this guidance mission unless a later explicit authorization supersedes this instruction;
8. no long-lived access key has been created for Claude Code;
9. the next missing item for GC-38 is precisely identified — expected to be a separately governed execution-access / environment-provisioning step.

If account creation cannot be completed, report the exact blocker without asking the Founder to reveal sensitive data.

---

## 10. Required Report

Infrastructure Operations shall create or return content suitable for:

`communication/live/report1.143.md`

The report must contain only non-secret evidence and include:

- mission/workstream identity;
- exact instruction executed;
- current repository/main context used where applicable;
- whether AWS signup was completed;
- organization-controlled email posture stated without exposing unnecessary personal data;
- whether root MFA was enabled;
- AWS account ID only if appropriate as non-secret infrastructure metadata;
- confirmation `ap-south-1` is the locked future parser-resource region;
- confirmation no Lambda/S3/IAM Roles Anywhere/parser implementation was performed;
- confirmation no long-lived access key was created for Claude Code;
- any unresolved signup/billing/account-verification blocker;
- the exact next infrastructure/access prerequisite before GC-38 can resume;
- final disposition.

Allowed final dispositions:

- `AWS FOUNDER ONBOARDING — COMPLETE — READY FOR EXECUTION-ACCESS DESIGN`
- `AWS FOUNDER ONBOARDING — PARTIAL — FOUNDER ACTION REQUIRED`
- `AWS FOUNDER ONBOARDING — STOPPED — ACCOUNT OR SECURITY BLOCKER`

A positive disposition does **not** reactivate GC-38 by itself.

---

## 11. Specialist Coordination Rule

Infrastructure Operations owns this Founder onboarding mission.

If a decision specifically crosses into Security & Permissions Architecture — for example privileged identity topology, workload credential trust, or a consequential exception to the locked IAM Roles Anywhere security model — record the question and return it to Mission Control for a separately routed Security review rather than taking over Security authority.

Likewise, do not send Supabase or Lovable work downstream from this mission. Their stages remain separately gated.

---

## 12. Next Gate

After the Founder completes the guided AWS onboarding and `report1.143.md` records a positive disposition, Mission Control shall review the result and decide the next narrow gate:

**AWS execution-access / environment-provisioning activation** for the approved non-production account.

Only after that access is independently verified may Mission Control reactivate `SB-P-1.11-GC-38 — AWS Lambda Parser Implementation`.

---

## 13. Mission Control Decision

`SB-P-1.11-GC-39 — AWS FOUNDER ONBOARDING & ENVIRONMENT ACTIVATION GUIDANCE AUTHORIZED AFTER HUMAN MERGE`.
