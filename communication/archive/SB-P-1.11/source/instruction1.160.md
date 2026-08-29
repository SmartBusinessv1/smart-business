# SMART BUSINESS — MISSION CONTROL AUTHORIZATION

## SB-P-1.11-GC-38R — Founder Console Trust Anchor Bootstrap

**Instruction ID:** `instruction1.160`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Authorized By:** Mission Control, following explicit Founder direction  
**Executing Actor:** Founder  
**Mode:** ONE-TIME FOUNDER-CONTROLLED CONSOLE BOOTSTRAP  
**Production Authority:** NONE  
**Phase B Rerun Authority:** NONE  

---

## 1. Purpose

Authorize one narrowly bounded workaround to the current AWS account-verification / CloudShell blocker without broadening the steady-state GitHub deploy role.

The Founder may use one fresh MFA-protected AWS administrative/account-owner console session to create the exact GC-38R IAM Roles Anywhere Trust Anchor through the AWS console.

The intended provider behavior is that, because this is the account's first IAM Roles Anywhere Trust Anchor, AWS automatically creates the required service-linked role `AWSServiceRoleForRolesAnywhere` for `rolesanywhere.amazonaws.com` if it is still absent.

This authorization replaces passive waiting on AWS Support with a bounded console bootstrap path while preserving the existing security architecture.

The AWS Support account-verification case may remain open in parallel. It is not a dependency for this authorized console action.

---

## 2. Relationship to Prior Security Recommendation

`communication/live/report1.163.md` preferred direct one-time creation of the service-linked role and stated that manual Trust Anchor creation was outside that reviewed option.

The Founder has now explicitly directed Mission Control to pursue a faster bounded workaround.

This instruction therefore **supersedes only the prior operational restriction against manual Trust Anchor creation for this one bootstrap action**.

It does **not** supersede or weaken any other security boundary from `report1.163.md`, GC-41, GC-42, GC-43, the RuntimeBoundary, OIDC trust, GitHub Environment protection, CA custody, or production restrictions.

---

## 3. Exact Authorized AWS Target

The Founder must first verify the active AWS account is exactly:

`658980433673`

The application/parser region must be:

`ap-south-1`

The exact Trust Anchor to create is:

`teamlips-sb-np-parser-trust-anchor`

Trust Anchor source/type:

- **External certificate bundle / X.509 CA certificate**;
- use only the existing Founder-controlled **public CA certificate**;
- the CA private key must remain offline and must not be uploaded, pasted, imported, moved, or exposed.

The public CA certificate must correspond to the already verified SHA-256 fingerprint:

`51:3A:3A:71:CD:B6:67:92:AA:E6:00:CB:2E:2A:D5:52:28:71:DB:61:BB:AE:6F:76:BF:B4:85:FA:C8:CD:B1:7E`

The Trust Anchor must be created **enabled**.

---

## 4. Exact Required Tags

Apply exactly these six tags to the Trust Anchor:

| Key | Value |
|---|---|
| `Project` | `SmartBusiness` |
| `Environment` | `nonprod` |
| `Workstream` | `SB-P-1.11` |
| `Component` | `lambda-parser` |
| `Owner` | `TeamLIPS` |
| `ManagedBy` | `GitHubActions` |

No additional tag is authorized unless AWS itself creates provider-owned metadata that is not user-controlled.

---

## 5. Exact Authorized Procedure

The Founder is authorized to perform only the following sequence:

1. open one fresh AWS administrative/account-owner console session protected by MFA;
2. verify account `658980433673`;
3. switch to / verify region `ap-south-1` for IAM Roles Anywhere;
4. open IAM Roles Anywhere;
5. verify no Trust Anchor named `teamlips-sb-np-parser-trust-anchor` already exists;
6. begin Trust Anchor creation using the existing public CA certificate only;
7. set the exact Trust Anchor name from §3;
8. ensure the Trust Anchor is enabled;
9. apply exactly the six tags from §4;
10. review the final creation screen for exact match before submission;
11. create the Trust Anchor;
12. allow AWS to perform its normal automatic first-use service-linked-role bootstrap if required;
13. verify the Trust Anchor exists with the exact name and enabled state;
14. verify `AWSServiceRoleForRolesAnywhere` now exists if AWS created it;
15. verify the service-linked role is bound to `rolesanywhere.amazonaws.com` and, where visible, uses AWS-managed policy `AWSRolesAnywhereServicePolicy`;
16. capture only sanitized, non-secret evidence sufficient to show the exact Trust Anchor, enabled state, tags, and service-linked-role existence/service binding;
17. sign out of the administrative/account-owner AWS session immediately.

The one-time authority expires immediately on successful verification and sign-out, or immediately on any STOP condition below.

---

## 6. Explicitly Not Authorized

This instruction does **not** authorize:

- manual creation of a normal IAM role for Roles Anywhere;
- manual attachment of `AdministratorAccess` or any unrelated AWS-managed/customer-managed policy;
- manual editing of the service-linked role trust policy or permissions;
- adding `iam:CreateServiceLinkedRole` to `TeamLIPS-SB-NonProd-Parser-DeployRole`;
- changing the deploy policy;
- changing the RuntimeBoundary;
- changing GitHub OIDC trust;
- changing protected environment `aws-nonprod-parser`;
- creating an IAM user;
- creating or using static AWS access keys;
- creating reusable administrative credentials;
- uploading or exposing the CA private key;
- regenerating or replacing the CA;
- creating the IAM Roles Anywhere Profile manually;
- creating or changing the workload certificate/CSR in this step;
- creating or changing Lambda, S3, Supabase, Lovable, or production resources;
- deleting/recreating prior partial GC-38R resources;
- a Phase B workflow rerun;
- Phase C or later-stage progression.

---

## 7. STOP Conditions

Stop immediately without improvisation if any of the following occurs:

- active AWS account is not `658980433673`;
- wrong region or ambiguous provider context;
- an existing Trust Anchor with the same name has unexpected configuration;
- AWS asks the Founder to manually attach arbitrary IAM policies;
- AWS asks for a CA private key;
- AWS asks for access keys or another reusable credential path;
- the console cannot create the exact Trust Anchor without additional IAM/security changes;
- the automatic service-linked-role bootstrap fails with a new authorization/provider blocker;
- the resulting Trust Anchor name, source, enabled state, or tags differ from this instruction;
- any action outside §5 appears necessary.

If stopped, capture the exact provider message and return to Mission Control. Do not attempt another workaround inside the same session unless separately authorized.

---

## 8. Required Verification Evidence

Capture only non-secret evidence showing, where available:

- account context `658980433673`;
- Trust Anchor name `teamlips-sb-np-parser-trust-anchor`;
- Trust Anchor enabled/active state;
- source is the certificate-bundle/X.509 CA path;
- exact six user-controlled tags;
- Trust Anchor ARN or ID;
- `AWSServiceRoleForRolesAnywhere` existence;
- service binding `rolesanywhere.amazonaws.com`;
- `AWSRolesAnywhereServicePolicy` where visible;
- confirmation that the Founder administrative session was signed out.

Do not capture or share:

- CA private key;
- CA passphrase;
- workload private key;
- session tokens;
- access keys;
- MFA seed/OTP;
- payment/identity-verification documents.

---

## 9. Canonical Workflow Compatibility

The canonical GC-38R workflow already performs an idempotent lookup by exact Trust Anchor name.

If `teamlips-sb-np-parser-trust-anchor` exists, the workflow reuses its ARN instead of attempting first-time Trust Anchor creation.

Therefore this manual bootstrap is intended to remove the account-level first-use blocker while allowing the later separately authorized Phase B workflow to resume its canonical path and create/verify the remaining GC-38R resources.

The IAM Roles Anywhere Profile remains for the canonical workflow; it must not be created manually under this instruction.

---

## 10. Completion / Next Gate

Successful console creation and verification do **not** authorize a workflow rerun.

After the Founder completes the action and signs out, Mission Control must assess the evidence and issue a separate one-time Phase B rerun authorization before GitHub Actions may run again.

Possible completion disposition:

`GC-38R FOUNDER CONSOLE TRUST ANCHOR BOOTSTRAP — COMPLETE — PHASE B RERUN DECISION ELIGIBLE`

Possible stopped disposition:

`GC-38R FOUNDER CONSOLE TRUST ANCHOR BOOTSTRAP — STOPPED — NEW BLOCKER`

---

**End of `instruction1.160.md`**
