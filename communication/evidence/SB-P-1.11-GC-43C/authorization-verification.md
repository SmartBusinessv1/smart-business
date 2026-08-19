# GC-43C — Authorization Verification Evidence

## Control mapping

- Finding: `GC43B-SEC-01`
- Security control: `SEC-GC43-07 — Runtime Permission Boundary`

## Direct invocation negative verification

The corrected default permissions boundary grants `lambda:InvokeFunction` on the exact parser Lambda namespace only when:

`lambda:InvokedViaFunctionUrl = true`

AWS documents `lambda:InvokedViaFunctionUrl` as the condition key that restricts `lambda:InvokeFunction` to calls made through a Lambda Function URL. Without that context asserted, the corrected boundary contains no matching Allow for ordinary direct `lambda:InvokeFunction`.

Because a permissions boundary defines the maximum permissions of an IAM entity, a hypothetical future workload-role identity policy that independently grants ordinary direct `lambda:InvokeFunction` still cannot produce effective permission when the permissions boundary does not also allow that request context.

Result:

`ORDINARY DIRECT lambda:InvokeFunction — OUTSIDE CORRECTED BOUNDARY CEILING`

This is a structural policy verification from the provider-derived corrected default JSON plus AWS IAM permissions-boundary semantics. No Lambda function, workload role, or invocation was created or executed for this test.

## Function URL path preservation

The corrected boundary preserves both required policy conditions:

1. `lambda:InvokeFunctionUrl` is allowed only on the exact parser Lambda namespace when `lambda:FunctionUrlAuthType = AWS_IAM`.
2. `lambda:InvokeFunction` is allowed on the exact parser Lambda namespace only when `lambda:InvokedViaFunctionUrl = true`.

AWS Lambda documentation states that AWS_IAM Function URL invocation requires both `lambda:InvokeFunctionUrl` and `lambda:InvokeFunction`, and identifies `lambda:InvokedViaFunctionUrl` as the condition that limits the latter to Function URL calls.

Result:

`APPROVED AWS_IAM FUNCTION URL AUTHORIZATION PATH — REPRESENTED INSIDE CORRECTED CEILING`

## IAM Policy Simulator limitation

A post-correction interactive AWS IAM Policy Simulator run was not performed.

Reason:

- the one-time Founder root+MFA correction session had already been intentionally exited;
- the account currently has no separate non-root simulator-capable console identity available;
- reopening root solely to obtain simulation evidence would exceed the narrow exceptional-root purpose;
- creating an IAM user or broadening the deploy role for simulator access is explicitly prohibited.

No simulator PASS is fabricated. Downstream Security should treat the provider-derived Version 2 JSON as the primary policy evidence and independently classify the corrected boundary.

## Deploy-role boundary immutability preserved

Canonical provider-generated IAM Policy Simulator evidence from GC-43A already records denial for the deploy role on:

- `iam:CreatePolicyVersion` against `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`;
- `iam:SetDefaultPolicyVersion` against the same policy.

No deploy-role permission source was changed during GC-43C. The correction was performed only through the explicitly authorized one-time Founder root+MFA path.

Therefore the fail-closed deploy-role immutability property remains unchanged from the previously verified PASS state.
