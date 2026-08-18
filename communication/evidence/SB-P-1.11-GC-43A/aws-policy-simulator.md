# GC-43A — AWS IAM Policy Simulator Evidence

Capture session: 2026-08-19 IST  
Principal simulated: `TeamLIPS-SB-NonProd-Parser-DeployRole`

Provider: AWS IAM Policy Simulator.

All listed results were provider-generated read-only authorization simulations. No mutation API was executed.

## Pass 1 — deploy-role self-administration and control-plane escalation

Result text for every case below: `Denied` / `Implicit deny due to no statement(s) matching`.

| Service | Action | Resource |
|---|---|---|
| IAM | `UpdateAssumeRolePolicy` | `arn:aws:iam::658980433673:role/TeamLIPS-SB-NonProd-Parser-DeployRole` |
| IAM | `AttachRolePolicy` | `arn:aws:iam::658980433673:role/TeamLIPS-SB-NonProd-Parser-DeployRole` |
| IAM | `PutRolePolicy` | `arn:aws:iam::658980433673:role/TeamLIPS-SB-NonProd-Parser-DeployRole` |
| IAM | `CreateUser` | `arn:aws:iam::658980433673:user/GC42-SelfEscalation-Probe` |
| IAM | `CreateAccessKey` | `arn:aws:iam::658980433673:user/GC42-SelfEscalation-Probe` |
| IAM | `UpdateOpenIDConnectProviderThumbprint` | `arn:aws:iam::658980433673:oidc-provider/token.actions.githubusercontent.com` |
| IAM | `DeleteOpenIDConnectProvider` | `arn:aws:iam::658980433673:oidc-provider/token.actions.githubusercontent.com` |
| IAM | `CreatePolicyVersion` | `arn:aws:iam::658980433673:policy/TeamLIPS-SB-NonProd-Parser-RuntimeBoundary` |
| IAM | `SetDefaultPolicyVersion` | `arn:aws:iam::658980433673:policy/TeamLIPS-SB-NonProd-Parser-RuntimeBoundary` |
| STS | `AssumeRole` | `arn:aws:iam::658980433673:role/TeamLIPS-SB-NonProd-Parser-DeployRole` |

## Pass 2 — arbitrary-role pivot

Provider result:

- Service: STS
- Action: `AssumeRole`
- Resource: `arn:aws:iam::658980433673:role/GC42-ArbitraryRole-Probe`
- Result: `Denied`
- Result detail: `Implicit deny due to no statement(s) matching`

The probe ARN was used only as a simulator resource target; no role was created.

## Sanitization

No secret, token, session credential, source IP, browser session data, or unrelated account data is included.
