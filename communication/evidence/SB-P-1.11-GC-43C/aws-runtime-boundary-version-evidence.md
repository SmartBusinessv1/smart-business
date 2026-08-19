# GC-43C — AWS Runtime Boundary Version Evidence

## Control mapping

- Finding: `GC43B-SEC-01`
- Security control: `SEC-GC43-07 — Runtime Permission Boundary`

## Provider-derived pre-correction state

AWS IAM console inspection of customer-managed policy:

`arn:aws:iam::658980433673:policy/TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`

showed:

- policy versions: `1`;
- `Version 1` marked `Default`;
- the effective document contained unrestricted `lambda:InvokeFunction` on the exact parser Lambda namespace under Sid `AllowExactParserFunctionInvocation`;
- no `lambda:InvokedViaFunctionUrl` condition was present on that statement.

## Authorized correction

A one-time Founder-controlled root console session protected by the existing MFA device was used because the provisioned deploy role correctly does not have authority to create or promote versions of this boundary policy.

Only the runtime-boundary customer-managed policy was edited.

The unrestricted invocation statement was replaced by:

- Sid: `AllowExactParserFunctionInvocationViaFunctionUrlOnly`;
- Action: `lambda:InvokeFunction`;
- unchanged exact parser Lambda resources;
- Condition: `Bool` → `lambda:InvokedViaFunctionUrl = true`.

The existing `lambda:InvokeFunctionUrl` statement and `lambda:FunctionUrlAuthType = AWS_IAM` condition were preserved unchanged.

## Provider-derived post-correction state

AWS IAM console confirmed:

- policy versions: `2`;
- `Version 2` marked `Default`;
- `Version 1` retained and no longer default;
- the provider reported the policy updated successfully.

The complete effective Version 2 JSON is preserved in:

`communication/evidence/SB-P-1.11-GC-43C/aws-runtime-boundary-v2.json`

## Scope-preservation observation

Provider review showed the effective allowed service families remained limited to the existing S3, Lambda, and CloudWatch Logs runtime surface, while the existing explicit control-plane denials remained present.

No deploy-role, OIDC trust, GitHub Environment, `iam:PassRole`, production, parser-runtime resource, or application state was changed.
