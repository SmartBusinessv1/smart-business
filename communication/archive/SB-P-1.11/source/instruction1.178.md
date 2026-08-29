# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — DEPLOYPOLICY V3 ONE-TIME ADMINISTRATIVE APPLICATION AUTHORIZATION

**Instruction ID:** `instruction1.178`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Sender:** Mission Control  
**Recipient:** Founder / Infrastructure Operations  
**Status:** PENDING FOUNDER HUMAN REVIEW AND MERGE  
**Date:** 2026-08-27

---

## 1. Purpose

This instruction authorizes one narrowly-scoped administrative AWS correction required before the corrected GC-38R GitHub OIDC deployment workflow may run.

PR #390 merged the reviewed desired-state artifact:

`docs/implementation/SB-P-1.11-GC-38R_DeployRole_Policy_v3.json`

and the corrected workflow logic authorized by `instruction1.176.md` and `instruction1.177.md`.

The existing `TeamLIPS-SB-NonProd-Parser-DeployRole` cannot modify the managed policy that grants its own permissions. Therefore the single new permission already approved in `instruction1.177.md` must be applied through an administrative path outside that deploy role before the corrected workflow can reconcile the existing workload-role trust policy.

## 2. Exact one-time authorization

After this instruction is human-reviewed and merged, the Founder is authorized to open one fresh AWS account-owner session protected by the existing MFA device solely to update:

`TeamLIPS-SB-NonProd-Parser-DeployPolicy`

so that its effective policy matches the reviewed desired-state artifact:

`docs/implementation/SB-P-1.11-GC-38R_DeployRole_Policy_v3.json`

The only newly-authorized capability is:

```json
{
  "Sid": "UpdateOnlyWorkloadRoleTrustPolicy",
  "Effect": "Allow",
  "Action": "iam:UpdateAssumeRolePolicy",
  "Resource": "arn:aws:iam::658980433673:role/TeamLIPS-SB-NonProd-Parser-WorkloadRole"
}
```

No other policy statement may be added, removed, broadened, reordered in a way that changes meaning, or otherwise modified beyond what is required to make the effective deploy policy equal the reviewed v3 artifact.

## 3. Required execution path

The authorized path is:

1. open one fresh Founder AWS account-owner session;
2. complete MFA using the existing MFA device;
3. navigate only to the existing `TeamLIPS-SB-NonProd-Parser-DeployPolicy`;
4. create/apply a new policy version whose content matches `SB-P-1.11-GC-38R_DeployRole_Policy_v3.json`;
5. make that corrected version the effective/default version;
6. perform the verification in §5;
7. sign out immediately after verification.

No new IAM user, static access key, role, federation path, OIDC provider, or persistent administrative credential may be created.

## 4. Explicit security boundary

This instruction does not authorize:

- `iam:UpdateAssumeRolePolicy` on the deploy role itself;
- `iam:UpdateAssumeRolePolicy` on the Lambda execution role;
- wildcard role resources;
- `iam:*`;
- deploy-role self-management;
- RuntimeBoundary modification;
- OIDC trust modification;
- GitHub Environment protection changes;
- Trust Anchor or Roles Anywhere Profile replacement/modification;
- workload certificate replacement;
- CA private-key use or movement;
- Lambda, S3, parser-runtime, Supabase, Lovable, or production changes;
- production IAM authority;
- GC-38R workflow execution during this administrative session;
- C5 execution during this administrative session;
- Stage 21+ progression.

The one-time account-owner authority granted here expires immediately after the verified policy correction and sign-out.

## 5. Required verification before sign-out

Before closing the administrative session, verify and record sanitized provider evidence showing:

1. `TeamLIPS-SB-NonProd-Parser-DeployPolicy` has a new effective/default version;
2. the effective policy contains exactly one `iam:UpdateAssumeRolePolicy` grant;
3. that grant is limited exactly to:

   `arn:aws:iam::658980433673:role/TeamLIPS-SB-NonProd-Parser-WorkloadRole`;

4. no wildcard IAM administration was introduced;
5. no `iam:UpdateAssumeRolePolicy` grant exists for the deploy role or Lambda execution role;
6. existing OIDC trust remains unchanged;
7. RuntimeBoundary remains unchanged;
8. IAM users remain unchanged and no access key was created;
9. no production state changed;
10. the Founder explicitly signed out after verification.

Do not capture or publish secrets, session credentials, MFA material, access tokens, private keys, or sensitive console artifacts.

## 6. Required completion report

Infrastructure Operations shall record a concise completion report under `communication/live/` stating:

- the exact policy updated;
- the resulting effective/default policy version;
- whether the effective policy matches the reviewed v3 artifact;
- confirmation that the exact `iam:UpdateAssumeRolePolicy` scope is present and no broader IAM authority was introduced;
- confirmation that OIDC trust and RuntimeBoundary were preserved;
- confirmation that no persistent credential was created;
- confirmation that the Founder session was signed out;
- final disposition: PASS or BLOCKER.

If any discrepancy appears, stop and report it. Do not improvise a broader correction.

## 7. What this unlocks

Only after this administrative correction is completed and verified may Mission Control authorize or direct execution of the already-merged corrected GC-38R GitHub OIDC workflow.

That later workflow execution is the step that may reconcile the existing `TeamLIPS-SB-NonProd-Parser-WorkloadRole` trust policy to the exact non-production Trust Anchor ARN and then permit a C5 retry.

This instruction does not itself execute or authorize that workflow run inside the Founder administrative session.

---

**Mission Control disposition:** one-time Founder account-owner + MFA administrative application of the reviewed GC-38R DeployPolicy v3 is authorized only after human review and merge; scope is limited to the exact deploy-policy correction above, followed by verification and immediate sign-out.
