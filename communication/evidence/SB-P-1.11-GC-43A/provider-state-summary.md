# SB-P-1.11-GC-43A — Provider-State Summary

Capture session: 2026-08-19 IST  
Canonical baseline: `e9656c76af46f0cceb66926b0bfea6735c9107a2`

## AWS deploy role

Role: `TeamLIPS-SB-NonProd-Parser-DeployRole`  
ARN: `arn:aws:iam::658980433673:role/TeamLIPS-SB-NonProd-Parser-DeployRole`  
Maximum session duration: `1 hour`

AWS IAM role Permissions view reported exactly one permissions policy:

- `TeamLIPS-SB-NonProd-Parser-DeployPolicy`
- type: customer managed
- attached entities: 1

Deploy role permissions boundary: not set.

The DeployPolicy provider page reported exactly one policy version:

- Version 1
- Default

No second permission-policy source was displayed in the role's provider view. No separate API `ListRolePolicies` output was available because CloudShell had not yet been enabled for the new AWS account during this capture session.

## Runtime boundary

Policy: `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`  
ARN: `arn:aws:iam::658980433673:policy/TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`  
Type: customer managed

Provider page reported exactly one policy version:

- Version 1
- Default

## GitHub Environment

Environment: `aws-nonprod-parser`

Provider UI showed:

- Required reviewers: enabled
- Reviewer: `SmartBusinessv1`
- Prevent self-review: OFF
- Wait timer: OFF
- Administrator bypass: disabled
- Deployment policy: selected branches and tags
- Allowed branches: `1`
- Allowed branch: `main`
- Allowed tags: `0`
- Environment secrets: none
- Environment variables: none

## IAM user inventory

AWS IAM Users provider view showed:

- IAM users: `0`
- no resources to display

## Root credential posture

Root Security Credentials provider view showed:

- MFA devices: `1`
- MFA type: virtual
- Access keys: `0`
- no root access keys

Sensitive fields visible on the provider screen but not preserved here include account email address, canonical user ID, MFA device identifier/ARN, and other unrelated account metadata.

## Sanitization

This file intentionally omits:

- access-key IDs;
- temporary STS credentials;
- OIDC/JWT tokens;
- session tokens;
- source IP addresses;
- CloudTrail request/event IDs;
- account email and canonical user ID;
- MFA device identifier;
- unrelated personal/account metadata.
