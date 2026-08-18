# GC-43A — AWS CloudTrail / STS Evidence

Provider: AWS CloudTrail Event History  
Event name filter: `AssumeRoleWithWebIdentity`  
Region: `ap-south-1`

## Positive protected-environment assumption

- Event time: `2026-08-18 18:28:41 (UTC+05:30)`
- Event source: `sts.amazonaws.com`
- Event name: `AssumeRoleWithWebIdentity`
- OIDC subject / user name: `repo:SmartBusinessv1/smart-business:environment:aws-nonprod-parser`
- AWS region: `ap-south-1`
- Error code: none
- Assumed role: `TeamLIPS-SB-NonProd-Parser-DeployRole`
- AWS account: `658980433673`
- Outcome: successful assumed-role session created

The provider screen also exposed temporary-session resource identifiers. Those values are intentionally not preserved here.

## Negative case — missing protected environment subject

- Event time: `2026-08-18 18:26:28 (UTC+05:30)`
- Event source: `sts.amazonaws.com`
- Event name: `AssumeRoleWithWebIdentity`
- OIDC subject / user name: `repo:SmartBusinessv1/smart-business:ref:refs/heads/main`
- AWS region: `ap-south-1`
- Error code: `AccessDenied`
- Resources referenced: `0`
- Outcome: no assumed-role session/resource created

## Negative case — non-main ref

- Event time: `2026-08-18 18:32:00 (UTC+05:30)`
- Event source: `sts.amazonaws.com`
- Event name: `AssumeRoleWithWebIdentity`
- OIDC subject / user name: `repo:SmartBusinessv1/smart-business:ref:refs/heads/mission/SB-P-1.11-GC-42A-assumption-verification`
- AWS region: `ap-south-1`
- Error code: `AccessDenied`
- Resources referenced: `0`
- Outcome: no assumed-role session/resource created

## Sanitization

Omitted from this repository evidence:

- temporary access-key IDs;
- temporary secret/session credentials;
- OIDC/JWT tokens;
- source IP addresses;
- CloudTrail Event IDs;
- request IDs;
- browser/session metadata.
