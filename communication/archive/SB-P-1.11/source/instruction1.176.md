# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — WORKLOAD ROLE TRUST POLICY CORRECTION

**Instruction ID:** `instruction1.176`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Recipient:** Claude Engineering
**Status:** PENDING FOUNDER HUMAN REVIEW AND MERGE
**Date:** 2026-08-26

---

## 1. Finding

Founder-led read-only AWS inspection identified a concrete defect in the existing `TeamLIPS-SB-NonProd-Parser-WorkloadRole` trust policy.

The live policy currently contains this literal condition value:

```json
"aws:SourceArn": "arn:aws:rolesanywhere:${AWS_REGION}:${EXPECTED_ACCOUNT_ID}:trust-anchor/*"
```

The canonical deployment workflow also generates the same literal value because the workload trust document is written with a single-quoted heredoc (`<<'TRUST'`), which prevents shell expansion of `${AWS_REGION}` and `${EXPECTED_ACCOUNT_ID}`.

Additionally, the condition uses `ArnEquals` while the value contains `*`. Wildcard matching is not provided by `ArnEquals`.

This condition therefore does not match the real non-production Trust Anchor ARN and is a sufficient explanation for the persistent Roles Anywhere `CreateSession` 403.

## 2. Authorized correction

Claude Engineering is authorized to prepare a narrowly-scoped implementation PR that corrects only the workload-role trust-policy construction and applies the corresponding non-production AWS trust-policy correction after Founder human review and merge of that implementation PR.

Required target trust boundary:

- Principal remains exactly `rolesanywhere.amazonaws.com`.
- Actions remain exactly `sts:AssumeRole`, `sts:TagSession`, and `sts:SetSourceIdentity`.
- Restrict `aws:SourceArn` to the existing Smart Business non-production Trust Anchor in account `658980433673`, region `ap-south-1`.
- Prefer the exact existing Trust Anchor ARN when practical:

```text
arn:aws:rolesanywhere:ap-south-1:658980433673:trust-anchor/b0282d51-b071-4c03-97d3-546e2f405baa
```

- If an ARN pattern is retained for idempotent infrastructure construction, use a wildcard-capable ARN condition operator and ensure runtime variable expansion occurs before the policy is submitted to AWS.
- Do not broaden trust to another account, region, service, role, profile, or Trust Anchor.

## 3. Implementation requirements

The implementation PR must:

1. Correct `.github/workflows/aws-gc38r-parser-deploy.yml` so future runs cannot recreate the literal-placeholder defect.
2. Include focused regression evidence proving the rendered trust policy contains real account/region values and a valid Trust Anchor condition.
3. Preserve all existing non-production security boundaries and permissions boundary controls.
4. Make no production change.
5. Make no certificate replacement, Trust Anchor replacement, Profile replacement, or CA-key use.
6. Make no parser business-logic change.
7. Make no Lovable or production Supabase change.

## 4. AWS execution boundary

No AWS mutation is authorized by this instruction until the implementation PR is separately human-reviewed and merged.

After that implementation PR is merged, Claude Engineering may use only the already-approved GitHub Actions OIDC → `TeamLIPS-SB-NonProd-Parser-DeployRole` path to update the existing non-production workload role trust policy to the corrected narrow condition.

Direct console editing by the Founder is not required and should be avoided unless Mission Control separately authorizes it.

## 5. Verification after correction

After the corrected trust policy is applied:

1. Read back the live role trust policy and verify the exact expected Trust Anchor restriction.
2. Reattempt the existing authenticated C5 diagnostic without changing unrelated bindings or secrets.
3. Capture sanitized evidence only.
4. If Roles Anywhere `CreateSession` succeeds, continue the already-authorized C5 path through temporary credentials, S3 presign/upload, AWS_IAM Lambda Function URL invocation, and bounded synthetic CSV completion.
5. If any new blocker appears, stop and report it without opportunistic correction.

## 6. Cleanup boundary

If C5 passes, the previously-required cleanup remains mandatory through a separate human-reviewed cleanup PR before the cleaned Worker is redeployed. Until C5 passes, retain the temporary diagnostic surface and test-scoped bindings needed for bounded verification.

## 7. Explicitly not authorized

This instruction does not authorize:

- production AWS or Supabase changes;
- IAM/security-boundary widening;
- Trust Anchor/Profile/role replacement;
- certificate replacement or CA private-key use;
- public/Lovable publication;
- production migrations;
- Stage 21+ work;
- self-merge by Claude Engineering.

---

**Mission Control disposition:** concrete non-production workload-role trust-policy defect identified; narrow corrective implementation authorized only after this instruction becomes canonical by Founder human review and merge.
