# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — DEPLOY ROLE TRUST-POLICY UPDATE AUTHORIZATION

**Instruction ID:** `instruction1.177`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Sender:** Mission Control  
**Recipient:** Claude Engineering  
**Status:** PENDING FOUNDER HUMAN REVIEW AND MERGE  
**Date:** 2026-08-26

---

## 1. Purpose

This instruction corrects one authority assumption discovered while preparing the implementation authorized by `instruction1.176.md`.

`instruction1.176.md` correctly authorized correction of the non-production workload-role trust policy, but it assumed the existing GitHub OIDC deploy role could already update the trust policy of the existing workload role.

Canonical provider evidence shows that `TeamLIPS-SB-NonProd-Parser-DeployRole` does not currently hold `iam:UpdateAssumeRolePolicy` on the workload role.

Without that exact capability, a merged workflow correction could prevent future recreation of the defect but could not reconcile the already-existing live trust policy through the approved GitHub OIDC deployment path.

This instruction authorizes only the minimum additional permission required to close that gap.

## 2. Exact authorization

Claude Engineering is authorized to prepare an implementation PR that adds exactly:

```text
iam:UpdateAssumeRolePolicy
```

for exactly this resource:

```text
arn:aws:iam::658980433673:role/TeamLIPS-SB-NonProd-Parser-WorkloadRole
```

The permission must be added only to the existing non-production deploy-role policy used by:

```text
TeamLIPS-SB-NonProd-Parser-DeployRole
```

No broader IAM trust-policy administration is authorized.

## 3. Required security boundary

The implementation must preserve all existing restrictions and must not grant:

- `iam:UpdateAssumeRolePolicy` on the deploy role itself;
- `iam:UpdateAssumeRolePolicy` on the Lambda execution role;
- wildcard role resources;
- account-wide or prefix-wide trust-policy administration;
- `iam:*`;
- role creation beyond the already-approved exact runtime roles;
- permission-boundary modification;
- managed-policy attachment authority;
- arbitrary `sts:AssumeRole`;
- OIDC provider modification;
- production IAM authority.

The new permission exists only to allow the approved OIDC deployment path to reconcile the trust policy of the one existing non-production workload role.

## 4. Relationship to instruction1.176

`instruction1.176.md` remains valid in intent and security boundary.

This instruction supplements it by correcting the newly-discovered authority dependency.

The final implementation PR may therefore include, within one bounded change set:

1. the exact deploy-role policy addition authorized here; and
2. the workload-role trust-policy construction/reconciliation authorized by `instruction1.176.md`.

The target workload-role trust remains restricted to:

- Principal: `rolesanywhere.amazonaws.com`;
- Actions: `sts:AssumeRole`, `sts:TagSession`, `sts:SetSourceIdentity`;
- exact existing non-production Trust Anchor:

```text
arn:aws:rolesanywhere:ap-south-1:658980433673:trust-anchor/b0282d51-b071-4c03-97d3-546e2f405baa
```

No wildcard Trust Anchor scope is required or preferred.

## 5. Implementation evidence requirements

Before any live AWS correction, the implementation PR must show that:

1. the deploy-role permission is scoped to exactly the workload-role ARN above;
2. no existing deploy-role security restriction is widened beyond this one action/resource pair;
3. the rendered workload-role trust policy contains the exact Trust Anchor ARN, not literal shell placeholders;
4. `ArnEquals` is used only with the exact Trust Anchor ARN;
5. the workflow is capable of reconciling the trust policy of an already-existing workload role rather than only configuring newly-created roles;
6. no production identifier or authority is introduced.

## 6. AWS execution boundary

This instruction does not itself authorize immediate AWS mutation.

The implementation PR must first be human-reviewed and merged.

Only after that merge may the already-approved GitHub Actions OIDC → `TeamLIPS-SB-NonProd-Parser-DeployRole` path be used to apply the narrowly-scoped policy correction and workload-role trust-policy reconciliation.

No direct Founder console edit is required or preferred.

## 7. Verification after application

After the authorized implementation is applied:

1. read back the effective deploy-role policy and verify `iam:UpdateAssumeRolePolicy` is limited to the exact workload-role ARN;
2. read back the workload-role trust policy and verify the exact Trust Anchor restriction;
3. confirm no deploy-role self-administration path was introduced;
4. reattempt the existing authenticated C5 diagnostic;
5. capture sanitized evidence only;
6. if any new blocker appears, stop and report it without opportunistic correction.

## 8. Explicitly not authorized

This instruction does not authorize:

- production AWS or Supabase changes;
- IAM wildcard expansion;
- deploy-role self-management;
- RuntimeBoundary modification;
- Trust Anchor/Profile/role replacement;
- certificate replacement or CA private-key use;
- parser business-logic changes;
- Lovable changes;
- public release;
- production migrations;
- Stage 21+ work;
- self-merge by Claude Engineering.

---

**Mission Control disposition:** exact non-production deploy-role authority gap identified; narrowly-scoped `iam:UpdateAssumeRolePolicy` permission authorized only for `TeamLIPS-SB-NonProd-Parser-WorkloadRole`, subject to Founder human review and merge.
