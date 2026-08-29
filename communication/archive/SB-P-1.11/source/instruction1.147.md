# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-38R — PHASE B PERMISSION-GAP SECURITY REVIEW

**Instruction ID:** `instruction1.147`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Executing Room:** Security & Permissions Architecture  
**Authorized By:** Founder / Mission Control  
**Mode:** READ-ONLY BOUNDED SECURITY REVIEW  
**AWS / GitHub Mutation Authority:** NONE  
**Deployment / Workflow Rerun Authority:** NONE  
**Application / Parser Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Trigger

GC-38R Phase B Run #2 failed at:

`Create IAM Roles Anywhere trust anchor`

Observed provider error:

```text
AccessDeniedException when calling the CreateTrustAnchor operation:
User: arn:aws:sts::658980433673:assumed-role/TeamLIPS-SB-NonProd-Parser-DeployRole/...
is not authorized to perform: rolesanywhere:TagResource
on resource: arn:aws:rolesanywhere:ap-south-1:658980433673:trust-anchor/*
because no identity-based policy allows the rolesanywhere:TagResource action
```

The corrected workflow syntax from PR #335 was therefore accepted far enough to reach provider authorization, but the deploy role lacks an action required by the tagged Roles Anywhere create path.

Mission Control is not authorizing any permission change yet.

This review exists only to determine the minimum secure correction, if any.

Required completion report:

`communication/live/report1.156.md`

---

## 2. Canonical Entry State

Execute only after this instruction is human-reviewed and merged to `main`.

Current canonical baseline when this authorization was prepared:

`aca316902d3a34839ed6abca5f37b7ba8a42fec5`

Commit:

`Authorize GC38R Phase B rerun from corrected main (#336)`

Before review, Security must inspect at minimum:

1. `communication/live/instruction1.144.md` — GC-38R reactivation authority;
2. `communication/live/instruction1.145.md` — Roles Anywhere tag-syntax correction authority;
3. `communication/live/report1.155.md` — correction completion report;
4. `communication/live/instruction1.146.md` — Phase B rerun authority;
5. `.github/workflows/aws-gc38r-parser-deploy.yml` on canonical `main`;
6. the current deploy-role policy evidence and trust-policy evidence from the GC-42 / GC-43 evidence chain;
7. the current RuntimeBoundary Version 2 evidence;
8. `communication/live/report1.153.md` — prior independent Security PASS;
9. any canonical evidence describing the intended IAM Roles Anywhere resource-creation permissions;
10. official AWS IAM Roles Anywhere documentation where needed to confirm create/tag authorization semantics.

Do not treat the workflow or prior reports as proof by assertion. Reconcile the provider error against the actual effective policy design.

---

## 3. Scope Is Intentionally Narrow

This is not a full GC-38, GC-41, GC-42, or GC-43 re-review.

Review only the permission gap exposed by Phase B Run #2 and the minimum adjacent controls necessary to classify a correction safely.

The primary question is whether `rolesanywhere:TagResource` is legitimately required by the already-approved tagged creation of:

- the GC-38R non-production Trust Anchor; and/or
- the GC-38R non-production Roles Anywhere Profile;

and, if required, what the minimum resource/action/condition scope must be.

Previously passing controls remain inherited unless this review discovers a material contradiction.

---

## 4. Required Security Questions

Security must answer each question explicitly.

### Q1 — Provider semantics

Does the AWS IAM Roles Anywhere create flow require separate `rolesanywhere:TagResource` authorization when tags are supplied during `CreateTrustAnchor` and/or `CreateProfile`?

### Q2 — Exact affected resources

Is `TagResource` required for:

- Trust Anchor creation only;
- Profile creation only; or
- both creation paths used by the current workflow?

### Q3 — Current deploy-role gap

Does the canonical deploy-role identity policy currently omit `rolesanywhere:TagResource`, and is that omission the direct cause of Run #2 failure?

### Q4 — Minimum action scope

If a correction is required, is adding only:

`rolesanywhere:TagResource`

sufficient, with no other new Roles Anywhere action?

If not, identify the exact additional action and why it is strictly required.

### Q5 — Minimum resource scope

What is the narrowest valid AWS resource scope for the required tag permission?

Determine whether the policy can safely restrict `rolesanywhere:TagResource` to the approved non-production parser Trust Anchor and Profile resource namespaces in:

- account `658980433673`;
- region `ap-south-1`;
- GC-38R parser scope only.

Do not recommend `Resource: "*"` unless AWS authorization semantics make a narrower scope impossible and official documentation establishes that constraint.

### Q6 — Tag-key/value constraints

Can or should the permission be further constrained by tag-condition keys so the deploy role may tag only the already-approved GC-38R metadata values?

Approved workflow metadata currently includes:

- `Project=SmartBusiness`
- `Environment=nonprod`
- `Workstream=SB-P-1.11`
- `Component=lambda-parser`
- `Owner=TeamLIPS`
- `ManagedBy=GitHubActions`

Assess whether condition-key restrictions are supported, reliable, and worth adding without creating brittle deployment behavior.

### Q7 — RuntimeBoundary impact

Does this correction require any change to:

`TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`

or can the deploy-role identity policy alone be corrected while leaving the runtime workload boundary untouched?

Any recommendation to modify RuntimeBoundary must be treated as a material escalation and justified explicitly.

### Q8 — OIDC / trust impact

Does this correction require any change to GitHub OIDC trust, environment protection, account scope, branch scope, repository scope, or session conditions?

Expected answer should be `no` unless evidence proves otherwise.

### Q9 — Existing partial AWS state

Given that Phase B Run #2 successfully completed the S3 ingress bucket, Lambda execution role, and workload-role configuration steps before failing, is preserving and reusing those authorized resources consistent with the idempotent design?

Identify any security reason those resources would need inspection or correction before a future rerun.

### Q10 — Correction classification

Classify the required next action as exactly one of:

- `NO POLICY CHANGE REQUIRED — WORKFLOW CHANGE ONLY`
- `NARROW DEPLOY-ROLE POLICY CORRECTION REQUIRED`
- `MATERIAL SECURITY ARCHITECTURE CHANGE REQUIRED`
- `NOT VERIFIED — MORE EVIDENCE REQUIRED`

---

## 5. Explicit Non-Authorization

Security & Permissions Architecture may not:

- modify AWS IAM;
- add `rolesanywhere:TagResource` itself;
- edit deploy-role policies;
- edit RuntimeBoundary;
- edit OIDC trust;
- edit GitHub Environment protection;
- trigger or rerun the Phase B workflow;
- create, delete, replace, tag, or manually repair any AWS resource;
- create the Trust Anchor or Profile manually;
- request or handle the Founder CA private key;
- modify CA custody;
- modify Lambda, S3, Supabase, Lovable, production, or Product Truth;
- authorize itself to implement the recommended correction.

This room is read-only and advisory for this review.

---

## 6. Security Boundary to Preserve

Any recommendation must preserve the already-approved architecture:

`GitHub Actions OIDC → TeamLIPS-SB-NonProd-Parser-DeployRole`

for deployment, and:

`IAM Roles Anywhere → workload role → AWS_IAM Lambda Function URL`

for runtime.

The following must remain unchanged unless this review proves a contradiction:

- account `658980433673`;
- region `ap-south-1`;
- protected environment `aws-nonprod-parser`;
- canonical-main-only credential-bearing deployment;
- no static AWS credentials;
- no root implementation path;
- no IAM-user long-lived credentials;
- RuntimeBoundary Version 2 direct-invocation restriction;
- Founder-controlled offline CA private-key custody;
- exactly one approved non-production Trust Anchor;
- no production authority.

---

## 7. Required Evidence Standard

Security must distinguish:

- provider-derived evidence;
- repository policy/workflow evidence;
- official AWS documentation;
- inference.

Do not upgrade inference into provider-verified state.

If the exact current deploy-role policy cannot be established from canonical evidence, return `NOT VERIFIED — MORE EVIDENCE REQUIRED` and identify exactly what evidence is missing.

---

## 8. Required Report — `report1.156.md`

The report must contain:

1. exact instruction executed;
2. exact canonical `main` SHA reviewed;
3. exact files/evidence inspected;
4. official AWS documentation relied upon, if any;
5. explicit answers to Q1–Q10;
6. exact current deploy-role policy gap, if verified;
7. exact minimum recommended policy correction, expressed as a bounded policy fragment or precise action/resource/condition specification;
8. explicit statement whether RuntimeBoundary changes are required;
9. explicit statement whether OIDC/GitHub Environment changes are required;
10. treatment of the existing partial non-production AWS resources;
11. confirmation no mutation occurred;
12. final disposition exactly one of:

`GC-38R PHASE B PERMISSION-GAP SECURITY REVIEW — NARROW CORRECTION ELIGIBLE`

or

`GC-38R PHASE B PERMISSION-GAP SECURITY REVIEW — MATERIAL SECURITY CHANGE REQUIRED`

or

`GC-38R PHASE B PERMISSION-GAP SECURITY REVIEW — NO POLICY CHANGE REQUIRED`

or

`GC-38R PHASE B PERMISSION-GAP SECURITY REVIEW — STOPPED — EVIDENCE BLOCKER`

Submit the report through a dedicated human-reviewed PR.

No self-merge.

---

## 9. Next Gate

A Security recommendation does not itself authorize an AWS policy mutation.

If the report returns:

`GC-38R PHASE B PERMISSION-GAP SECURITY REVIEW — NARROW CORRECTION ELIGIBLE`

Mission Control will separately decide whether to authorize Infrastructure Operations to implement the exact bounded deploy-role policy correction.

Only after that correction is executed, evidenced, independently reviewed where required, and explicitly re-authorized may another GC-38R Phase B workflow run occur.

---

## 10. Mission Control Decision

`SB-P-1.11-GC-38R — PHASE B PERMISSION-GAP SECURITY REVIEW AUTHORIZED AFTER HUMAN MERGE`
