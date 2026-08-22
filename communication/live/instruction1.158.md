# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — IAM Roles Anywhere Service-Linked Role Security Review

**Instruction ID:** `instruction1.158`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Executing Room:** Security & Permissions Architecture
**Authorized By:** Mission Control
**Mode:** BOUNDED SECURITY REVIEW ONLY
**Date:** 2026-08-20

---

## 1. Triggering Evidence

GC-38R Phase B diagnostic run #6 reached and passed the complete runner-side public CA certificate diagnostic after the Base64 transport correction.

Observed non-secret evidence:

```text
GC38R_CERT_DIAGNOSTIC byte_count=2248 line_count=36 begin_markers=1 end_markers=1
GC38R_CERT_DIAGNOSTIC computed_sha256_fingerprint=51:3A:3A:71:CD:B6:67:92:AA:E6:00:CB:2E:2A:D5:52:28:71:DB:61:BB:AE:6F:76:BF:B4:85:FA:C8:CD:B1:7E
GC38R_CERT_DIAGNOSTIC fingerprint_match=true
GC38R_CERT_DIAGNOSTIC basic_constraints="CA:TRUE, pathlen:0" key_usage="Certificate Sign, CRL Sign" signature_algorithm="Signature Algorithm: sha384WithRSAEncryption"
GC38R_CERT_DIAGNOSTIC_PASS
```

The subsequent AWS operation then failed at first-time Trust Anchor creation with:

```text
AccessDeniedException when calling the CreateTrustAnchor operation:
Unauthorized because no identity-based policy allows for the iam:CreateServiceLinkedRole action
```

The workflow stopped. No workload CSR, Lambda deployment, Phase C execution, production action, or later-stage progression occurred.

This one-time run authorization is consumed. No rerun is authorized by this instruction.

---

## 2. Security Review Objective

Determine the narrowest safe and governance-compliant way to satisfy the IAM Roles Anywhere first-time service-linked-role prerequisite without unnecessarily broadening the GitHub Actions deploy role.

Review must distinguish at minimum between:

1. granting a narrowly conditioned `iam:CreateServiceLinkedRole` permission to the existing non-production deploy role; and
2. performing a one-time Founder-controlled administrative creation of the required AWS service-linked role outside the workflow, after which the deploy role remains unchanged.

Do not assume either option is preferred until verified against current AWS IAM Roles Anywhere behavior and the existing Smart Business security boundaries.

---

## 3. Required Verification

The Security & Permissions Architecture room must verify, using current official AWS documentation where applicable:

- the exact AWS service principal/service name associated with the IAM Roles Anywhere service-linked role;
- whether `CreateTrustAnchor` can trigger automatic service-linked-role creation when the role is absent;
- whether `iam:CreateServiceLinkedRole` can be constrained by `iam:AWSServiceName` or an equivalent authoritative condition;
- the effective blast radius of adding such permission to `TeamLIPS-SB-NonProd-Parser-DeployRole`;
- whether the permission would be needed only for first-time bootstrap or remain usable afterward;
- whether a one-time Founder-controlled administrative creation is safer and operationally cleaner than granting this capability to the workflow identity;
- whether any additional IAM permission is actually required beyond the observed `iam:CreateServiceLinkedRole` blocker;
- whether existing OIDC trust, RuntimeBoundary, GitHub Environment controls, Roles Anywhere TagResource correction, account `658980433673`, region `ap-south-1`, and CA custody remain unchanged under the recommended correction.

The review must use least privilege and preserve repository-first governance.

---

## 4. Preferred Security Posture

The default posture is **do not broaden the deploy role unless necessary**.

If a one-time Founder-controlled administrative creation of the exact required AWS-managed service-linked role can satisfy the prerequisite without weakening automation boundaries, treat that as the preferred candidate and document the exact evidence for why.

If the deploy role must receive `iam:CreateServiceLinkedRole`, the proposed policy must be the narrowest AWS-supported form and must include every available service-name condition or equivalent restriction.

Do not authorize wildcard IAM administration.

---

## 5. Explicitly Not Authorized

This instruction does **not** authorize:

- any AWS mutation;
- creation of the service-linked role;
- any IAM policy change;
- any GitHub Actions workflow run or rerun;
- any root/admin console session;
- any RuntimeBoundary change;
- any OIDC trust change;
- any GitHub Environment change;
- any CA regeneration, CA private-key access, movement, upload, or exposure;
- any manual Trust Anchor creation;
- any Lambda deployment;
- any Supabase or Lovable action;
- any production migration or production AWS action;
- Phase C or later GC-38R progression.

This is a read-only security analysis and correction recommendation stage only.

---

## 6. Required Deliverable

Return:

`communication/live/report1.163.md`

The report must include:

1. exact blocker classification;
2. official AWS evidence used;
3. exact service-linked-role/service-name details;
4. comparison of the two correction paths;
5. least-privilege recommendation;
6. exact IAM policy shape if a policy change is recommended;
7. exact one-time administrative action shape if that path is recommended;
8. confirmation of all unchanged security boundaries;
9. explicit statement that no AWS mutation or rerun occurred;
10. one final disposition:

```text
GC-38R SERVICE-LINKED ROLE SECURITY REVIEW — NARROW CORRECTION READY
```

or

```text
GC-38R SERVICE-LINKED ROLE SECURITY REVIEW — STOPPED — BROADER AUTHORITY REQUIRED
```

If any repository change is proposed, it must be through a dedicated human-reviewed PR and must not be self-merged.

---

## 7. Next Gate

A successful report does not itself authorize AWS mutation, IAM correction, service-linked-role creation, or a Phase B rerun.

Mission Control will review the report and, if appropriate, issue a separate bounded correction authorization.
