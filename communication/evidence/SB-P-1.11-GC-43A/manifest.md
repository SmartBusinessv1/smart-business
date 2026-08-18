# SB-P-1.11-GC-43A — Evidence Manifest

Instruction: `communication/live/instruction1.140.md`  
Canonical baseline: `e9656c76af46f0cceb66926b0bfea6735c9107a2`  
Capture session: 2026-08-19 IST  
Collector: Infrastructure Operations with Founder-guided read-only provider access

## Evidence doctrine

Only sanitized provider-derived read-only evidence is preserved here. No AWS, GitHub protection, Supabase, Lovable, parser, deployment, or production mutation was performed.

Screens visible during capture contained some unrelated/sensitive account metadata. Repository evidence therefore preserves structured policy JSON and sanitized textual provider facts rather than raw screenshots.

## Evidence files

| File | Source | Capture method | Sanitization |
|---|---|---|---|
| `aws-deploy-role-trust.json` | AWS IAM role Trust relationships | Founder copied current trust-policy JSON from AWS console | No credentials present; preserved exact trust fields only |
| `aws-deploy-policy.json` | AWS IAM customer-managed policy | Founder copied current/default policy JSON from AWS console | No secrets present; preserved exact permission policy |
| `aws-runtime-boundary.json` | AWS IAM customer-managed policy | Founder copied current/default boundary JSON from AWS console | No secrets present; preserved exact boundary policy |
| `provider-state-summary.md` | AWS IAM + GitHub Environment provider UI | Founder-guided read-only console inspection | Omitted email, canonical user ID, MFA identifier, unrelated account metadata |
| `aws-policy-simulator.md` | AWS IAM Policy Simulator | Read-only simulation output | No credentials/session data preserved |
| `aws-cloudtrail-sts.md` | AWS CloudTrail Event History | Read-only event inspection | Omitted temp access-key IDs, tokens, IPs, event/request IDs |

## GC-43 control mapping

| GC-43 control | Previous status in `report1.149.md` | Evidence source/file | Recovery status for Security handoff |
|---|---|---|---|
| SEC-GC43-01 — Exact GitHub OIDC trust policy | NOT VERIFIED | `aws-deploy-role-trust.json`, `provider-state-summary.md` | Provider evidence recovered |
| SEC-GC43-02 — GitHub Environment protection | NOT VERIFIED | `provider-state-summary.md` | Provider evidence recovered |
| SEC-GC43-04 — Negative OIDC assumption evidence | NOT VERIFIED | `aws-cloudtrail-sts.md` | Provider evidence recovered |
| SEC-GC43-05 — Deploy-role least privilege | NOT VERIFIED | `aws-deploy-policy.json`, `provider-state-summary.md` | Provider evidence recovered; AWS role page reports exactly one permissions policy |
| SEC-GC43-06 — Self-escalation prevention | NOT VERIFIED | `aws-deploy-policy.json`, `aws-policy-simulator.md`, `aws-runtime-boundary.json` | Provider evidence recovered |
| SEC-GC43-07 — Runtime permission boundary | NOT VERIFIED | `aws-runtime-boundary.json`, `provider-state-summary.md`, `aws-policy-simulator.md` | Provider evidence recovered |
| SEC-GC43-08 — `iam:PassRole` | NOT VERIFIED | `aws-deploy-policy.json` | Provider evidence recovered |
| SEC-GC43-10 — Effective IAM non-production resource scope | PARTLY NOT VERIFIED | `aws-deploy-policy.json`, `aws-runtime-boundary.json` | Provider evidence recovered |
| SEC-GC43-11 — Provider-side static credential posture | PARTLY NOT VERIFIED | `provider-state-summary.md`, `aws-cloudtrail-sts.md` | Provider evidence recovered: IAM users 0, root access keys 0, GitHub environment secrets none |
| SEC-GC43-12 — CloudTrail / STS auditability | NOT VERIFIED | `aws-cloudtrail-sts.md` | Provider evidence recovered |
| SEC-GC43-13 — Root bootstrap exit | NOT VERIFIED | `provider-state-summary.md`, `aws-cloudtrail-sts.md` | Provider evidence recovered: root MFA 1, root access keys 0; steady-state path is OIDC/STS deploy role |

## Adjacent evidence recovered

SEC-GC43-03 had already been classified PASS WITH EVIDENCE-DEPTH LIMITATION. `aws-cloudtrail-sts.md` now adds provider-derived positive-assumption evidence for the successful protected-environment path.

## Residual evidence limitation

AWS CloudShell was not yet available for the new AWS account during this capture session, so an API `ListRolePolicies` response could not be collected. The AWS IAM role provider page itself reported `Permissions policies (1)` and displayed exactly one customer-managed policy: `TeamLIPS-SB-NonProd-Parser-DeployPolicy`; no second permission-policy source was displayed.

Security & Permissions Architecture must independently decide whether this provider UI evidence is sufficient to close the inline-policy inventory point. Infrastructure Operations does not certify GC-43 PASS.

## Independent verification boundary

This package is an evidence handoff only. Security & Permissions Architecture remains responsible for reclassifying each previously unverified control as PASS, FAIL, or still NOT VERIFIED.
