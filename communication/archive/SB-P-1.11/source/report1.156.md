# SMART BUSINESS — SECURITY & PERMISSIONS ARCHITECTURE REVIEW REPORT

## SB-P-1.11-GC-38R — Phase B Permission-Gap Security Review

**Report ID:** `report1.156`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Instruction Executed:** `communication/live/instruction1.147.md`  
**Executing Room:** Security & Permissions Architecture  
**Mode:** READ-ONLY BOUNDED SECURITY REVIEW  
**AWS / GitHub Mutation Authority:** NONE  
**Deployment / Workflow Rerun Authority:** NONE  
**Application / Parser Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission and Scope

This report executes canonical `communication/live/instruction1.147.md` and reviews only the permission gap exposed by GC-38R Phase B Run #2 at:

`Create IAM Roles Anywhere trust anchor`

Observed provider authorization failure:

```text
AccessDeniedException when calling the CreateTrustAnchor operation:
User: arn:aws:sts::658980433673:assumed-role/TeamLIPS-SB-NonProd-Parser-DeployRole/...
is not authorized to perform: rolesanywhere:TagResource
on resource: arn:aws:rolesanywhere:ap-south-1:658980433673:trust-anchor/*
because no identity-based policy allows the rolesanywhere:TagResource action
```

This is not a full GC-38, GC-41, GC-42, or GC-43 re-review.

Previously passing controls remain inherited unless the permission gap creates a direct contradiction.

---

## 2. Exact Canonical `main` SHA Reviewed

Exact latest merged `main` reviewed:

`33f16178ebcb2c3e28aeb3e280f2f92506baa968`

---

## 3. Canonical Evidence Inspected

Repository / provider-derived evidence inspected:

- `communication/live/instruction1.147.md`;
- `communication/live/instruction1.144.md`;
- `communication/live/instruction1.145.md`;
- `communication/live/report1.155.md`;
- `communication/live/instruction1.146.md`;
- `.github/workflows/aws-gc38r-parser-deploy.yml` on canonical `main`;
- `communication/evidence/SB-P-1.11-GC-43A/aws-deploy-policy.json`;
- `communication/evidence/SB-P-1.11-GC-43A/aws-deploy-role-trust.json`;
- `communication/evidence/SB-P-1.11-GC-43C/aws-runtime-boundary-v2.json`;
- `communication/live/report1.153.md`.

Provider evidence supplied canonically by the mission trigger:

- Phase B Run #2 reached AWS authorization for `CreateTrustAnchor`;
- AWS returned `AccessDeniedException` specifically for `rolesanywhere:TagResource` against the generated Trust Anchor resource;
- no policy broadening or workaround was applied after the failure.

---

## 4. Official AWS Documentation Relied Upon

The following current AWS primary documentation was used only for load-bearing service-authorization semantics:

1. AWS Service Authorization Reference — **Actions, resources, and condition keys for AWS Identity and Access Management Roles Anywhere**:
   - `CreateTrustAnchor` supports `aws:RequestTag/${TagKey}` and `aws:TagKeys`;
   - `CreateProfile` supports `aws:RequestTag/${TagKey}` and `aws:TagKeys` and has `iam:PassRole` as a documented dependent action;
   - `TagResource` supports resource types `trust-anchor`, `profile`, `subject`, and `crl` and supports `aws:RequestTag/${TagKey}` and `aws:TagKeys`;
   - Trust Anchor ARN form: `arn:${Partition}:rolesanywhere:${Region}:${Account}:trust-anchor/${TrustAnchorId}`;
   - Profile ARN form: `arn:${Partition}:rolesanywhere:${Region}:${Account}:profile/${ProfileId}`.

2. IAM Roles Anywhere API Reference — **CreateTrustAnchor**:
   - `tags` are accepted as part of the create request.

3. IAM Roles Anywhere API Reference — **CreateProfile**:
   - `tags` are accepted as part of the create request.

4. IAM Roles Anywhere API Reference — **TagResource**:
   - `rolesanywhere:TagResource` is the permission for attaching tags to a Roles Anywhere resource.

### Documentation / provider-evidence reconciliation

The public CreateTrustAnchor / CreateProfile API pages name the create action itself as the required permission and the Service Authorization Reference does not list `TagResource` as a dependent action for those create operations.

However, the actual Phase B provider authorization response is stronger evidence for this account/request path: when the canonical workflow supplied tags during `CreateTrustAnchor`, AWS evaluated `rolesanywhere:TagResource` on the new Trust Anchor ARN and denied the request because that permission was absent.

Security therefore treats `TagResource` as a real required authorization for the tagged creation path actually exercised by GC-38R, without claiming that AWS documentation currently describes that dependency perfectly.

---

# REQUIRED SECURITY QUESTIONS

## 5. Q1 — Provider Semantics

**Question:** Does the AWS IAM Roles Anywhere create flow require separate `rolesanywhere:TagResource` authorization when tags are supplied during `CreateTrustAnchor` and/or `CreateProfile`?

**Answer:** **YES for the tagged Trust Anchor creation path, directly provider-verified.**

Phase B Run #2 proves that AWS evaluated `rolesanywhere:TagResource` during the canonical tagged `CreateTrustAnchor` request and rejected the request solely because that action was absent from the deploy-role identity policy.

For `CreateProfile`, the workflow also supplies tags in the create request. AWS documentation confirms that:

- `CreateProfile` accepts tags;
- `TagResource` applies to `profile` resources;
- the same `aws:RequestTag/*` and `aws:TagKeys` condition model is supported.

The Profile path was not reached after the Trust Anchor denial, so the need for `TagResource` during `CreateProfile` is not separately provider-runtime-proven in this run. Security nevertheless includes Profile in the minimum correction because it is the same approved tagged resource-creation pattern and because omitting Profile would knowingly leave the second tagged creation path dependent on an untested permission gap.

**Evidence classification:**

- Trust Anchor: **PROVIDER-DERIVED / DIRECT**;
- Profile: **AWS-DOCUMENTED TAGGING SURFACE + SECURITY INFERENCE FROM THE IDENTICAL TAGGED CREATE MODEL**.

---

## 6. Q2 — Exact Affected Resources

**Answer:** The minimum safe correction must cover **both approved GC-38R Roles Anywhere resource classes**:

1. Trust Anchors:

   `arn:aws:rolesanywhere:ap-south-1:658980433673:trust-anchor/*`

2. Profiles:

   `arn:aws:rolesanywhere:ap-south-1:658980433673:profile/*`

The Trust Anchor requirement is directly proven by Run #2.

Profile inclusion is preventive and bounded: the canonical workflow uses the same six approved tags on `CreateProfile`, and AWS expressly supports `TagResource` against Profile resources.

No `subject`, `crl`, other account, other region, or production Roles Anywhere resource class is required.

---

## 7. Q3 — Current Deploy-Role Gap

**Answer:** **YES — VERIFIED.**

Canonical provider-derived deploy-policy evidence currently contains:

```text
rolesanywhere:CreateTrustAnchor
rolesanywhere:CreateProfile
rolesanywhere:ListTrustAnchors
rolesanywhere:ListProfiles
```

but does **not** contain:

```text
rolesanywhere:TagResource
```

The create statement already requires the six exact GC-38R request-tag values and limits allowed tag keys.

The Phase B provider error names this exact omitted action as the authorization failure.

Therefore the current deploy-role policy omission is the direct cause of the observed Run #2 Trust Anchor failure.

---

## 8. Q4 — Minimum Action Scope

**Answer:** **Adding only `rolesanywhere:TagResource` is sufficient for this permission-gap correction.**

No evidence supports adding any other Roles Anywhere action.

In particular, this review does not recommend adding:

- `rolesanywhere:UntagResource`;
- `rolesanywhere:UpdateTrustAnchor`;
- `rolesanywhere:DeleteTrustAnchor`;
- `rolesanywhere:EnableTrustAnchor` / `DisableTrustAnchor`;
- `rolesanywhere:UpdateProfile`;
- `rolesanywhere:DeleteProfile`;
- `rolesanywhere:EnableProfile` / `DisableProfile`;
- broad `rolesanywhere:*`;
- any new IAM, STS, Lambda, S3, OIDC, or RuntimeBoundary permission.

`CreateProfile`'s documented `iam:PassRole` dependency is already represented by the existing exact workload-role PassRole statement constrained to `rolesanywhere.amazonaws.com`.

**Classification:** `NARROW DEPLOY-ROLE POLICY CORRECTION REQUIRED`.

---

## 9. Q5 — Minimum Resource Scope

**Answer:** `Resource: "*"` is **not required** for `rolesanywhere:TagResource`.

AWS defines resource-level authorization for `TagResource` on both Trust Anchors and Profiles.

The narrowest practical resource scope for the current create-time tagging path is:

```json
"Resource": [
  "arn:aws:rolesanywhere:ap-south-1:658980433673:trust-anchor/*",
  "arn:aws:rolesanywhere:ap-south-1:658980433673:profile/*"
]
```

Why the final ID segment remains `*`:

- IAM Roles Anywhere Trust Anchor/Profile ARNs use generated resource IDs, not the configured resource names;
- the future ID is not known before the create request succeeds;
- therefore exact per-resource ARN enumeration is impossible at pre-creation authorization time.

The wildcard is limited to the generated ID segment inside:

- exact service `rolesanywhere`;
- exact region `ap-south-1`;
- exact AWS account `658980433673`;
- exact approved resource classes only.

This is materially narrower than `Resource: "*"`.

---

## 10. Q6 — Tag-Key / Value Constraints

**Answer:** **YES — the new `TagResource` permission should carry the same exact six tag-value constraints already locked on create.**

AWS documents support for:

- `aws:RequestTag/${TagKey}`;
- `aws:TagKeys`

on `rolesanywhere:TagResource`.

The permission should require all six approved values:

- `Project=SmartBusiness`;
- `Environment=nonprod`;
- `Workstream=SB-P-1.11`;
- `Component=lambda-parser`;
- `Owner=TeamLIPS`;
- `ManagedBy=GitHubActions`.

It should also restrict the supplied tag-key set to exactly the approved keys using the existing `ForAllValues:StringEquals` `aws:TagKeys` pattern.

This is not considered brittle in the current workflow because those exact six tags are already canonical deployment metadata and are already required by the existing create permission.

Do **not** add `aws:ResourceTag/*` as a mandatory create-time condition for this new statement. During initial resource creation, the resource does not yet have a pre-existing trusted tag state on which Security should depend. The correct boundary for this path is exact request-tag authorization.

---

## 11. Q7 — RuntimeBoundary Impact

**Answer:** **NO RuntimeBoundary change is required or appropriate.**

`TeamLIPS-SB-NonProd-Parser-RuntimeBoundary` governs future parser runtime-role maximum permissions.

The observed gap exists only in the **deployment/control-plane role** while creating tagged IAM Roles Anywhere resources.

The corrected RuntimeBoundary Version 2 remains valid and unchanged, including the previously verified Function-URL-only invocation ceiling.

Any RuntimeBoundary modification for this issue would be unnecessary scope expansion.

---

## 12. Q8 — OIDC / Trust Impact

**Answer:** **NO.**

No change is required to:

- GitHub OIDC provider;
- audience;
- repository conditions;
- repository ID / owner ID conditions;
- `aws-nonprod-parser` environment;
- main-only ref condition;
- environment reviewer protections;
- OIDC session model;
- account scope;
- region scope;
- session duration.

The provider error occurred **after successful OIDC role assumption** and specifically identified one missing identity-policy action.

The existing OIDC trust remains unrelated to the correction.

---

## 13. Q9 — Existing Partial AWS State

**Answer:** **Preserve and reuse the already-created authorized non-production resources.**

Phase B Run #2 completed the preceding authorized S3 ingress bucket, Lambda execution role, and workload-role configuration steps before failing at Trust Anchor creation.

The canonical workflow is deliberately idempotent and checks/reuses existing resources where applicable.

The `TagResource` denial provides no security reason to delete, replace, manually repair, or recreate those already-authorized resources.

For this narrow review, no evidence indicates those earlier successful steps were malformed or affected by the Roles Anywhere tagging permission gap.

A later authorized rerun should therefore continue from existing state under the canonical idempotent workflow rather than force replacement.

This report does not itself authorize or perform that rerun.

---

## 14. Q10 — Correction Classification

**Classification:**

`NARROW DEPLOY-ROLE POLICY CORRECTION REQUIRED`

Reason:

- the provider directly identified a single missing action;
- the action is legitimately connected to the already-approved tagged Roles Anywhere create path;
- AWS supports resource-level scoping for that action;
- AWS supports the exact request-tag condition model already locked by GC-41/GC-43;
- no runtime, OIDC, account, region, CA-custody, workflow, Product Truth, or production architecture change is required.

---

# MINIMUM RECOMMENDED CORRECTION

## 15. Exact Bounded Policy Fragment

Mission Control may separately authorize Infrastructure Operations to add only the following permission to the deploy-role identity policy, expressed equivalently to:

```json
{
  "Sid": "TagOnlyApprovedParserRolesAnywhereResources",
  "Effect": "Allow",
  "Action": "rolesanywhere:TagResource",
  "Resource": [
    "arn:aws:rolesanywhere:ap-south-1:658980433673:trust-anchor/*",
    "arn:aws:rolesanywhere:ap-south-1:658980433673:profile/*"
  ],
  "Condition": {
    "StringEquals": {
      "aws:RequestTag/Project": "SmartBusiness",
      "aws:RequestTag/Environment": "nonprod",
      "aws:RequestTag/Workstream": "SB-P-1.11",
      "aws:RequestTag/Component": "lambda-parser",
      "aws:RequestTag/Owner": "TeamLIPS",
      "aws:RequestTag/ManagedBy": "GitHubActions"
    },
    "ForAllValues:StringEquals": {
      "aws:TagKeys": [
        "Project",
        "Environment",
        "Workstream",
        "Component",
        "Owner",
        "ManagedBy"
      ]
    }
  }
}
```

### Security properties of this correction

This fragment:

- adds one action only;
- applies only to IAM Roles Anywhere Trust Anchor/Profile resources;
- applies only in `ap-south-1`;
- applies only in AWS account `658980433673`;
- allows only the six approved GC-38R tag values;
- prevents arbitrary additional tag keys;
- grants no update/delete/untag/enable/disable authority;
- grants no production scope;
- grants no root or static credential path;
- grants no runtime workload authority;
- does not modify `iam:PassRole`;
- does not modify OIDC trust;
- does not weaken RuntimeBoundary Version 2.

The existing `CreateOnlyTaggedParserRolesAnywhereResources` statement should remain unchanged unless Infrastructure Operations needs a syntactic policy-document edit solely to append this new statement.

---

## 16. Controls Explicitly Preserved

This recommendation preserves unchanged:

- `GitHub Actions OIDC → TeamLIPS-SB-NonProd-Parser-DeployRole` deployment identity;
- protected environment `aws-nonprod-parser`;
- canonical-main-only credential path;
- no static AWS credentials;
- no root implementation path;
- no IAM-user long-lived credentials;
- `IAM Roles Anywhere → workload role → AWS_IAM Lambda Function URL` runtime architecture;
- RuntimeBoundary Version 2;
- Founder-controlled offline Trust Anchor CA private-key custody;
- exactly one approved non-production Trust Anchor;
- account `658980433673`;
- region `ap-south-1`;
- no production authority.

No previously passing GC-43 control is reopened by this recommendation.

---

## 17. No-Mutation Confirmation

During this Security review:

- AWS IAM/resource mutation: **NO**;
- AWS role assumption initiated by this room: **NO**;
- workflow rerun/dispatch: **NO**;
- GitHub Environment/protection mutation: **NO**;
- GitHub workflow mutation: **NO**;
- RuntimeBoundary mutation: **NO**;
- OIDC trust mutation: **NO**;
- Supabase mutation: **NO**;
- Lovable/application mutation: **NO**;
- deployment/publication: **NO**;
- production state touched: **NO**;
- Founder CA private key requested/handled: **NO**.

The only repository artifact created by this mission is:

`communication/live/report1.156.md`

through the approved repository communication channel.

---

## 18. Final Disposition

`GC-38R PHASE B PERMISSION-GAP SECURITY REVIEW — NARROW CORRECTION ELIGIBLE`

This disposition does not authorize the AWS policy mutation itself and does not authorize another Phase B workflow run.

Mission Control must separately authorize Infrastructure Operations to implement the exact bounded deploy-role policy correction, obtain evidence, and complete any required independent verification before a future GC-38R Phase B rerun is authorized.
