# GC-38R TagResource Correction — Provider Verification

## DeployPolicy

AWS IAM provider evidence captured during the authorized Founder administrative session showed:

- Policy: `TeamLIPS-SB-NonProd-Parser-DeployPolicy`
- Policy type: customer managed
- Post-correction version count: `2`
- Effective version: `Version 2 — Default`
- Previous version: `Version 1` retained and no longer default
- AWS displayed the policy as successfully updated

The effective Version 2 JSON is preserved in `deploy-policy-v2.json`.

The only newly added permission is:

`rolesanywhere:TagResource`

restricted to:

- `arn:aws:rolesanywhere:ap-south-1:658980433673:trust-anchor/*`
- `arn:aws:rolesanywhere:ap-south-1:658980433673:profile/*`

and constrained to these six request-tag values:

- `Project=SmartBusiness`
- `Environment=nonprod`
- `Workstream=SB-P-1.11`
- `Component=lambda-parser`
- `Owner=TeamLIPS`
- `ManagedBy=GitHubActions`

with `aws:TagKeys` restricted to exactly:

- `Project`
- `Environment`
- `Workstream`
- `Component`
- `Owner`
- `ManagedBy`

No `rolesanywhere:UntagResource` permission is present.

## Deploy-role trust preservation

Read-only AWS IAM evidence showed `TeamLIPS-SB-NonProd-Parser-DeployRole` still uses the exact GitHub Actions OIDC trust preserved in `deploy-role-trust.json`.

No trust-policy edit was performed.

## RuntimeBoundary preservation

Read-only AWS IAM evidence showed:

- Policy: `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`
- Policy versions: `2`
- `Version 2 — Default`
- Version 1 retained

No RuntimeBoundary edit was performed under this instruction.

## Persistent-credential posture

AWS IAM provider evidence showed:

- `IAM users (0)`
- no IAM users created
- account-owner MFA devices: `1`
- account-owner access keys: `0`

No IAM user, access key, static credential, persistent administrative credential, or additional trust path was created.

## GitHub Environment / OIDC protection preservation

No GitHub Environment setting or protection was accessed for mutation during this correction. The exact AWS-side deploy-role OIDC trust was re-read after the correction and remained unchanged. The previously merged provider-derived GitHub Environment protection evidence remains canonical; this execution performed no GitHub settings mutation.

## CA custody

No CA private key, certificate-authority custody material, Roles Anywhere certificate material, or related secret was opened, copied, created, rotated, or changed.

## Existing partial GC-38R resources

Existing authorized partial non-production resources were preserved. No Lambda, S3, IAM role, Roles Anywhere Trust Anchor/Profile, parser/runtime, Supabase, Lovable, or production resource was created, deleted, recreated, repaired, replaced, or manually mutated.

## Phase B

Phase B was not rerun.
