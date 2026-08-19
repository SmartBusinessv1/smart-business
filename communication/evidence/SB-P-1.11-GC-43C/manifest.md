# SB-P-1.11-GC-43C — Evidence Manifest

## Mission

`SB-P-1.11-GC-43C — Narrow IAM Runtime-Boundary Correction`

Instruction:

`communication/live/instruction1.142.md`

Affected finding/control:

- `GC43B-SEC-01`
- `SEC-GC43-07 — Runtime Permission Boundary`

Canonical GitHub baseline used before mutation:

`c0bad5d1ca5ce7a26b183a69943f09461c6cede0`

## Evidence files

### 1. `aws-runtime-boundary-v2.json`

Provider-derived complete JSON of the corrected AWS customer-managed permissions boundary after the authorized mutation.

Maps to:

- corrected maximum-permission ceiling;
- exact Lambda Function URL conditions;
- preserved S3/logging/control-plane scope.

### 2. `aws-runtime-boundary-version-evidence.md`

Sanitized provider-state record covering:

- pre-correction `Version 1 — Default`;
- post-correction `Version 2 — Default`;
- `Version 1` retained but no longer default;
- exact semantic change;
- one-time Founder root+MFA path used because deploy-role boundary mutation remained fail-closed.

### 3. `authorization-verification.md`

Read-only authorization analysis covering:

- ordinary direct `lambda:InvokeFunction` outside the corrected boundary ceiling when `lambda:InvokedViaFunctionUrl` is absent;
- approved Function URL path represented only with the required Lambda context conditions;
- exact post-correction IAM Policy Simulator limitation;
- preserved deploy-role inability to create/promote RuntimeBoundary versions, using prior canonical provider-generated simulator evidence and unchanged deploy-role permissions.

### 4. `post-correction-root-static-credential-posture.md`

Sanitized provider-state record covering:

- post-correction root MFA device count `1`;
- root access keys `0`;
- immediate root-session exit;
- no IAM user or long-lived AWS credential created;
- steady-state GitHub OIDC → STS deployment posture preserved.

## Source comparison

Pre-correction canonical boundary:

`communication/evidence/SB-P-1.11-GC-43A/aws-runtime-boundary.json`

Current corrected evidence:

`communication/evidence/SB-P-1.11-GC-43C/aws-runtime-boundary-v2.json`

The intended semantic delta is limited to replacing unrestricted parser `lambda:InvokeFunction` ceiling authority with Function-URL-only invocation authority by requiring:

`lambda:InvokedViaFunctionUrl = true`

All existing exact parser resources and the existing `lambda:InvokeFunctionUrl` → `lambda:FunctionUrlAuthType = AWS_IAM` restriction are preserved.

## Evidence limitations

A new post-correction AWS IAM Policy Simulator run was not performed because the one-time Founder root correction session was intentionally exited and no separate non-root simulator-capable AWS console identity currently exists. Reopening root solely for simulation, creating an IAM user, or broadening deploy-role permissions was intentionally rejected as outside the narrow authorization.

No simulator result is fabricated.

## Sanitization statement

This evidence package contains no:

- AWS access-key IDs or secrets;
- temporary credentials or session tokens;
- OIDC/JWT tokens;
- MFA device identifiers;
- account email;
- source IPs;
- cookies;
- private keys;
- payment/PAN data;
- unrelated personal/account metadata.
