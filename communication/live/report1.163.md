# SMART BUSINESS — SECURITY & PERMISSIONS ARCHITECTURE REVIEW REPORT

## SB-P-1.11-GC-38R — IAM Roles Anywhere Service-Linked Role Security Review

**Report ID:** `report1.163`  
**Instruction Executed:** `communication/live/instruction1.158.md`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Executing Room:** Security & Permissions Architecture  
**Mode:** BOUNDED READ-ONLY SECURITY REVIEW  
**AWS / IAM / GitHub Mutation Authority:** NONE  
**Phase B Rerun Authority:** NONE  
**Production Authority:** NONE

---

## 1. Exact Canonical State Reviewed

Exact latest canonical `main` SHA reviewed:

`bfe085e1694fed0027c64308d8ee8cb7cb8d616f`

This review was performed from canonical `main` containing merged `communication/live/instruction1.158.md`.

---

## 2. Exact Blocker Classification

Observed provider blocker from canonical `instruction1.158.md`:

```text
AccessDeniedException when calling the CreateTrustAnchor operation:
Unauthorized because no identity-based policy allows for the iam:CreateServiceLinkedRole action
```

Classification:

**FIRST-TIME IAM ROLES ANYWHERE SERVICE-LINKED-ROLE BOOTSTRAP PREREQUISITE.**

This is not a parser runtime permission requirement and does not establish a need to broaden the steady-state GitHub OIDC deploy role.

The current canonical deploy policy contains the already-approved parser deployment authority, including the bounded Roles Anywhere `CreateTrustAnchor`, `CreateProfile`, `TagResource`, inventory, and exact `iam:PassRole` controls, but contains no `iam:CreateServiceLinkedRole` action.

That omission is consistent with the observed provider denial.

---

## 3. Canonical Repository / Provider Evidence Inspected

The review inspected at minimum:

- `communication/live/instruction1.158.md`;
- `communication/live/report1.162.md`;
- `communication/evidence/SB-P-1.11-GC-38R-TagResource-Correction/deploy-policy-v2.json`;
- `communication/evidence/SB-P-1.11-GC-38R-TagResource-Correction/deploy-role-trust.json`;
- `communication/evidence/SB-P-1.11-GC-43C/aws-runtime-boundary-v2.json`;
- canonical GC-38R security architecture context already governing the non-production deployment and runtime paths.

Repository evidence establishes that:

- deploy role: `TeamLIPS-SB-NonProd-Parser-DeployRole`;
- account: `658980433673`;
- region: `ap-south-1`;
- protected GitHub Environment: `aws-nonprod-parser`;
- deploy role OIDC trust remains exact and main/environment/repository bound;
- RuntimeBoundary Version 2 remains the locked runtime maximum-permission boundary;
- CA private-key custody remains Founder-controlled and offline;
- no static AWS credential path is part of the approved architecture.

---

## 4. Official AWS Evidence Used

Current official AWS documentation was consulted only for the load-bearing service-linked-role semantics.

### 4.1 IAM Roles Anywhere service-linked role

AWS documents that IAM Roles Anywhere uses the service-linked role:

`AWSServiceRoleForRolesAnywhere`

The service principal / service name is:

`rolesanywhere.amazonaws.com`

The role is service-owned and trusts:

`rolesanywhere.amazonaws.com`

AWS attaches the service-managed policy:

`AWSRolesAnywhereServicePolicy`

Source:

`https://docs.aws.amazon.com/rolesanywhere/latest/userguide/using-service-linked-roles.html`

### 4.2 Automatic creation on first Trust Anchor

AWS states that when the first IAM Roles Anywhere Trust Anchor is created through the console, CLI, or API, IAM Roles Anywhere creates its service-linked role automatically if it does not already exist.

This directly matches the canonical provider failure: the first Trust Anchor creation path reached the service-linked-role prerequisite and the caller lacked `iam:CreateServiceLinkedRole`.

Source:

`https://docs.aws.amazon.com/rolesanywhere/latest/userguide/using-service-linked-roles.html`

### 4.3 Direct IAM creation is supported

AWS also states that the service-linked role may be created directly through IAM using:

```text
aws iam create-service-linked-role --aws-service-name rolesanywhere.amazonaws.com
```

Source:

`https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create-service-linked-role.html`

### 4.4 Condition and resource scoping

AWS IAM documents that `iam:CreateServiceLinkedRole` can be limited to a specific service-linked-role ARN and conditioned on:

`iam:AWSServiceName`

AWS also recommends restricting the resource ARN rather than allowing broad service-linked-role creation authority.

Source:

`https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create-service-linked-role.html`

### 4.5 Roles Anywhere managed-policy evidence

AWS's current `AWSRolesAnywhereFullAccess` managed policy includes a dedicated `iam:CreateServiceLinkedRole` statement conditioned on:

`iam:AWSServiceName = rolesanywhere.amazonaws.com`

This confirms that `iam:CreateServiceLinkedRole` is the IAM bootstrap permission expected when the Roles Anywhere service-linked role does not yet exist.

Source:

`https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AWSRolesAnywhereFullAccess.html`

---

# COMPARISON OF THE TWO AUTHORIZED OPTIONS

## 5. Option 1 — Narrow Deploy-Role `iam:CreateServiceLinkedRole`

### 5.1 Technical viability

**Technically viable.**

A bounded deploy-role statement can be expressed as:

```json
{
  "Sid": "CreateOnlyRolesAnywhereServiceLinkedRole",
  "Effect": "Allow",
  "Action": "iam:CreateServiceLinkedRole",
  "Resource": "arn:aws:iam::658980433673:role/aws-service-role/rolesanywhere.amazonaws.com/AWSServiceRoleForRolesAnywhere",
  "Condition": {
    "StringEquals": {
      "iam:AWSServiceName": "rolesanywhere.amazonaws.com"
    }
  }
}
```

If later provider behavior requires the AWS-documented role-name prefix form rather than exact-name form, the maximum acceptable fallback would remain confined to:

```text
arn:aws:iam::658980433673:role/aws-service-role/rolesanywhere.amazonaws.com/AWSServiceRoleForRolesAnywhere*
```

with the same exact `iam:AWSServiceName = rolesanywhere.amazonaws.com` condition.

No `Resource: "*"` is recommended.

### 5.2 Blast radius

This would permit the GitHub OIDC deploy identity to request creation of the IAM Roles Anywhere service-linked role in account `658980433673`.

The scope is substantially narrower than generic IAM administration because:

- action is only `iam:CreateServiceLinkedRole`;
- service name is fixed to `rolesanywhere.amazonaws.com`;
- resource is fixed to the Roles Anywhere service-linked-role path/name in the approved AWS account;
- it grants no `iam:CreateRole`, `AttachRolePolicy`, `PutRolePolicy`, `DeleteRole`, `PassRole`, or arbitrary service-linked-role creation beyond the stated service condition.

### 5.3 Persistent-authority concern

The permission would remain attached to the steady-state deploy role after the one-time prerequisite is satisfied unless a later separate IAM cleanup mutation removed it.

Therefore, despite being tightly scoped, it is persistent bootstrap authority retained by an automation identity after its normal operational need has ended.

That is not the least-privilege default when a one-time administrative bootstrap is available.

### 5.4 Additional IAM actions

**No additional IAM action is presently justified.**

For IAM Roles Anywhere, AWS's own managed FullAccess policy identifies `iam:CreateServiceLinkedRole` as the bootstrap IAM action. The service controls the resulting service-linked role and attached service policy.

There is no evidence from the observed blocker or AWS Roles Anywhere documentation that the GC-38R deploy role also needs:

- `iam:AttachRolePolicy`;
- `iam:PutRolePolicy`;
- `iam:UpdateRole`;
- `iam:DeleteServiceLinkedRole`;
- broader IAM administration.

Any later request for one of those actions must be treated as a new blocker requiring separate review.

### 5.5 Security classification

**COMPLIANT FALLBACK, BUT NOT PREFERRED.**

It is technically possible to make this narrow enough to remain within the architecture, but it unnecessarily places first-time IAM bootstrap capability into the steady-state CI deployment identity.

---

## 6. Option 2 — One-Time Founder-Controlled Service-Linked-Role Creation

### 6.1 Technical viability

**Technically viable and AWS-supported.**

AWS explicitly supports direct creation of the Roles Anywhere service-linked role using IAM with service name:

`rolesanywhere.amazonaws.com`

Once `AWSServiceRoleForRolesAnywhere` exists, the first Trust Anchor creation no longer needs to trigger creation of that missing IAM service-linked role.

The existing deploy role can therefore remain unchanged.

### 6.2 Exact recommended one-time administrative action

If Mission Control separately authorizes this correction, the bounded administrative action should be only:

1. open a fresh Founder-controlled administrative AWS session protected by MFA using an already-approved account-owner administrative path;
2. verify exact target AWS account `658980433673`;
3. verify that `AWSServiceRoleForRolesAnywhere` does not already exist before attempting creation;
4. create exactly the IAM Roles Anywhere service-linked role using service name:

   `rolesanywhere.amazonaws.com`;
5. verify the resulting role is exactly:

   `AWSServiceRoleForRolesAnywhere`;
6. verify its service-linked path/service principal is the IAM Roles Anywhere service (`rolesanywhere.amazonaws.com`);
7. verify the AWS-managed service policy is the expected `AWSRolesAnywhereServicePolicy`;
8. make no other IAM or AWS resource mutation;
9. verify no IAM user, static access key, reusable administrative credential, or new trust path was created;
10. sign out immediately and treat the one-time authority as expired;
11. capture only sanitized, non-secret evidence sufficient for independent review.

This action must not include manual Trust Anchor creation. The Trust Anchor remains for the later separately authorized canonical Phase B workflow.

### 6.3 Security advantage

This option leaves unchanged:

`GitHub Actions OIDC → TeamLIPS-SB-NonProd-Parser-DeployRole`

The deploy role receives no new IAM capability.

The one-time bootstrap action exists only within an explicitly bounded human administrative authorization and expires on completion/sign-out.

This better satisfies least privilege because the normal automation identity is not given a permission needed only to bootstrap an AWS-owned account-level service role once.

### 6.4 Operational cleanliness

The service-linked role is AWS-owned after creation. IAM Roles Anywhere defines its trust and permissions and AWS controls the attached policy.

The GC-38R deploy workflow can subsequently return to its already-reviewed parser-scoped permission set instead of carrying an additional account-IAM bootstrap action indefinitely.

### 6.5 Security classification

**PREFERRED.**

---

# REQUIRED SECURITY DETERMINATIONS

## 7. Exact Service / Role Details

Verified:

- service: **IAM Roles Anywhere**;
- service name / service principal: `rolesanywhere.amazonaws.com`;
- service-linked role name: `AWSServiceRoleForRolesAnywhere`;
- AWS-managed service policy: `AWSRolesAnywhereServicePolicy`;
- first Trust Anchor creation can cause automatic service-linked-role creation when absent;
- the observed provider denial is consistent with that automatic bootstrap attempt.

**Result: PASS.**

---

## 8. Is Deploy-Role Broadening Necessary?

**NO.**

AWS supports pre-creating the service-linked role directly through IAM.

The deploy role does not need to permanently hold `iam:CreateServiceLinkedRole` merely because first Trust Anchor creation attempted automatic bootstrap.

**Result: PASS — BROADENING NOT NECESSARY.**

---

## 9. Preferred Least-Privilege Correction

**OPTION 2 — ONE-TIME FOUNDER-CONTROLLED ADMINISTRATIVE CREATION OF `AWSServiceRoleForRolesAnywhere`.**

Reason:

- one-time prerequisite;
- account-level IAM bootstrap concern rather than normal parser deployment concern;
- AWS-supported direct creation path;
- leaves steady-state OIDC deploy role unchanged;
- avoids persistent bootstrap authority in CI;
- preserves repository-first governance because the exceptional mutation can be separately authorized, evidenced, independently verified, and closed before any rerun.

---

## 10. Option 1 Fallback Boundary

If Mission Control rejects or cannot use the one-time administrative bootstrap and later separately chooses deploy-role automation, the maximum acceptable permission addition is:

```json
{
  "Sid": "CreateOnlyRolesAnywhereServiceLinkedRole",
  "Effect": "Allow",
  "Action": "iam:CreateServiceLinkedRole",
  "Resource": "arn:aws:iam::658980433673:role/aws-service-role/rolesanywhere.amazonaws.com/AWSServiceRoleForRolesAnywhere",
  "Condition": {
    "StringEquals": {
      "iam:AWSServiceName": "rolesanywhere.amazonaws.com"
    }
  }
}
```

No other IAM action should accompany it based on current evidence.

This report does **not** authorize that change.

---

## 11. RuntimeBoundary Impact

No RuntimeBoundary change is required.

The canonical RuntimeBoundary Version 2 remains structurally unrelated to this deployment-time service-linked-role bootstrap prerequisite and still preserves:

- `lambda:InvokeFunctionUrl` only with `lambda:FunctionUrlAuthType = AWS_IAM`;
- `lambda:InvokeFunction` only with `lambda:InvokedViaFunctionUrl = true`;
- the existing runtime control-plane deny.

**Result: UNCHANGED.**

---

## 12. OIDC / GitHub Environment Impact

No change is required to:

- GitHub OIDC provider;
- deploy-role trust policy;
- repository/repository-ID conditions;
- owner-ID condition;
- protected environment `aws-nonprod-parser`;
- `refs/heads/main` condition;
- audience/subject conditions;
- GitHub Environment protections.

The canonical deploy-role trust evidence remains the previously approved exact trust contract.

**Result: UNCHANGED.**

---

## 13. TagResource Correction Impact

The bounded `rolesanywhere:TagResource` correction remains valid and unrelated to this new IAM bootstrap prerequisite.

No change to that statement is required.

**Result: UNCHANGED.**

---

## 14. Account / Region / Partial-Resource Posture

The recommendation preserves:

- AWS account `658980433673`;
- application/parser region `ap-south-1`;
- existing authorized partial GC-38R non-production resources;
- no delete/recreate/manual repair of S3, runtime roles, or other prior partial resources.

IAM service-linked roles are account-level IAM resources; their bootstrap existence does not alter the locked parser deployment region or authorize any production scope.

**Result: UNCHANGED.**

---

## 15. Credential Posture

The preferred option requires no:

- IAM user;
- static AWS credential;
- root access key;
- long-lived access key;
- GitHub secret containing AWS credentials;
- new OIDC trust path;
- reusable administrative identity.

Any separately authorized Founder administrative session must be MFA-protected, narrowly bounded to the one service-linked-role creation/verification task, signed out immediately afterward, and treated as non-reusable authority.

**Result: PRESERVED.**

---

## 16. CA Custody

The service-linked-role prerequisite does not require:

- CA regeneration;
- CA private-key access;
- CA private-key upload;
- CA movement into GitHub/AWS/CI/chat;
- workload private-key handling;
- manual Trust Anchor creation.

Founder-controlled offline CA private-key custody remains unchanged.

**Result: PRESERVED.**

---

## 17. Production / Application / Supabase / Lovable Posture

Neither correction path requires production authority.

The preferred option requires no change to:

- production AWS resources;
- production Supabase;
- test Supabase;
- Lovable;
- parser code;
- Product Truth;
- Catalog/Inventory boundaries;
- merchant-facing application state.

**Result: PRESERVED.**

---

## 18. Phase B Rerun

No Phase B rerun was performed or authorized by this review.

The current run authorization remains consumed.

Even after a separately authorized service-linked-role correction, Mission Control must issue a fresh explicit Phase B rerun authorization before the workflow may execute again.

---

## 19. Security Recommendation

### Preferred correction

**One-time Founder-controlled administrative creation of `AWSServiceRoleForRolesAnywhere`, followed by immediate verification/sign-out, leaving the deploy role unchanged.**

### Why this is the minimum safer correction

The permission is only needed because the AWS account has not yet bootstrapped the IAM Roles Anywhere service-linked role. Granting that bootstrap action to the normal CI deploy identity would make a transient prerequisite into persistent automation authority.

A one-time human administrative bootstrap avoids that expansion while still using an AWS-supported creation path.

### No broader authority required

Current evidence does not justify:

- deploy-role broadening;
- wildcard IAM administration;
- RuntimeBoundary changes;
- OIDC trust changes;
- GitHub Environment changes;
- `iam:PassRole` changes;
- Roles Anywhere TagResource changes;
- CA-custody changes;
- production changes.

---

## 20. Explicit No-Mutation Confirmation

During this Security review:

- AWS mutation: **NO**;
- IAM mutation: **NO**;
- service-linked-role creation: **NO**;
- privileged AWS session opened: **NO**;
- root/admin session opened: **NO**;
- deploy-role policy changed: **NO**;
- RuntimeBoundary changed: **NO**;
- OIDC trust changed: **NO**;
- GitHub Environment/protection changed: **NO**;
- workflow triggered/rerun: **NO**;
- CA/private-key/certificate secret handled: **NO**;
- Supabase mutation: **NO**;
- Lovable mutation: **NO**;
- parser/application mutation: **NO**;
- production state touched: **NO**.

The only repository artifact authorized for this review is this communication report and its dedicated human-reviewed PR.

---

## 21. Final Disposition

`GC-38R SERVICE-LINKED ROLE SECURITY REVIEW — NARROW CORRECTION READY`

This disposition does not authorize AWS mutation, IAM policy change, service-linked-role creation, a privileged administrative session, or a Phase B rerun.

Mission Control must separately authorize the preferred one-time Founder-controlled service-linked-role bootstrap before any provider mutation occurs.