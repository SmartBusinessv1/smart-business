# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — ONE-TIME IAM ROLES ANYWHERE SERVICE-LINKED ROLE BOOTSTRAP AUTHORIZATION

**Instruction ID:** `instruction1.159`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Issuer:** Mission Control
**Executing Human:** Founder / Account Owner
**Date:** 2026-08-22
**Mode:** One-time Founder-controlled administrative bootstrap only

---

## 1. Authority Basis

This instruction follows the merged Security & Permissions Architecture review recorded in `communication/live/report1.163.md`.

That review determined that GC-38R Phase B run #6 reached first-time IAM Roles Anywhere Trust Anchor creation only after the public-CA transport and certificate diagnostics passed, and then failed because the deploy role lacks `iam:CreateServiceLinkedRole`.

The least-privilege recommendation was to leave the deploy role unchanged and perform a one-time Founder-controlled creation of the AWS IAM Roles Anywhere service-linked role.

This instruction authorizes that narrow bootstrap action only.

---

## 2. Authorized AWS Account and Service

Authorized AWS account:

`658980433673`

Authorized service:

AWS IAM Roles Anywhere

Authorized service-linked role service name:

`rolesanywhere.amazonaws.com`

Expected AWS-managed service-linked role name:

`AWSServiceRoleForRolesAnywhere`

---

## 3. Authorized Administrative Session

The Founder is authorized to open exactly one MFA-protected AWS administrative/account-owner session solely for the action in this instruction.

The session may be used only to:

1. determine whether `AWSServiceRoleForRolesAnywhere` already exists;
2. if absent, create the service-linked role for `rolesanywhere.amazonaws.com`;
3. verify the resulting service-linked role identity and service binding;
4. capture non-secret verification evidence;
5. sign out immediately after verification.

If the role already exists and is correctly bound to IAM Roles Anywhere, no creation action is authorized or necessary. Verify it and sign out.

---

## 4. Exact Authorized Mutation

If and only if the service-linked role is absent, the Founder may create the AWS service-linked role for:

`rolesanywhere.amazonaws.com`

No other IAM role, policy, trust policy, permission boundary, user, access key, OIDC provider, GitHub Environment setting, or AWS resource may be created or changed under this authorization.

The existing deploy role and deploy policy must remain unchanged.

---

## 5. Verification Requirements

Before ending the session, verify all of the following:

- the service-linked role exists as `AWSServiceRoleForRolesAnywhere`;
- it is the AWS-managed service-linked role for IAM Roles Anywhere / `rolesanywhere.amazonaws.com`;
- no deploy-role permission was added or broadened;
- no IAM user or access key was created;
- no RuntimeBoundary, OIDC trust, GitHub Environment, CA custody, parser, Supabase, Lovable, or production setting changed;
- no Phase B workflow rerun occurred during this bootstrap action.

Capture only non-secret evidence needed for Mission Control verification. Do not expose credentials, session tokens, private keys, CA private material, or workload private material.

---

## 6. Mandatory Sign-Out

After verification, the Founder must sign out of the administrative/account-owner AWS session immediately.

The session must not remain open for convenience or later GC-38R work.

---

## 7. Stop Conditions

Stop and report to Mission Control without proceeding further if:

- AWS requests any permission or action beyond creating/verifying the single IAM Roles Anywhere service-linked role;
- the service-linked role name or service binding differs materially from the expected AWS-managed form;
- any deploy-role or broader IAM modification appears necessary;
- any static access key or IAM user creation is requested;
- any production resource or unrelated service would be affected;
- the Founder cannot confidently verify the service-linked role after creation.

---

## 8. Explicitly Not Authorized

This instruction does **not** authorize:

- any GC-38R Phase B rerun;
- `iam:CreateServiceLinkedRole` permission on the GitHub deploy role;
- any deploy-policy update;
- RuntimeBoundary modification;
- OIDC trust modification;
- GitHub Environment modification;
- root or admin use beyond this one-time service-linked-role bootstrap;
- static AWS credentials;
- IAM user creation;
- CA regeneration, CA private-key access, movement, upload, or disclosure;
- workload private-key handling;
- Lambda, S3, Roles Anywhere profile, Trust Anchor, Supabase, Lovable, or production mutation beyond the single service-linked-role bootstrap described above;
- Phase C or any later mission stage.

---

## 9. Completion Evidence Required

Return to Mission Control with a concise completion record stating:

- whether the service-linked role already existed or was created;
- verified role name;
- verified service binding to IAM Roles Anywhere / `rolesanywhere.amazonaws.com`;
- confirmation that the deploy role/policy remained unchanged;
- confirmation that no unrelated IAM or AWS change occurred;
- confirmation that the administrative session was signed out;
- any non-secret screenshot or console evidence needed to support the above.

Do not include secrets or credentials.

---

## 10. Post-Completion Gate

Successful completion of this one-time bootstrap does **not** itself authorize a Phase B rerun.

Mission Control must first review the completion evidence and then issue a separate one-run Phase B authorization if appropriate.

---

**Mission Control Disposition:** `GC-38R SERVICE-LINKED ROLE BOOTSTRAP — ONE-TIME FOUNDER ACTION AUTHORIZED AFTER HUMAN MERGE`
