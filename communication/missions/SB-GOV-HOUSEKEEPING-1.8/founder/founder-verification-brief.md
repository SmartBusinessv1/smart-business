# Founder Verification Brief — SB-GOV-HOUSEKEEPING-1.8

## Current Result

Branch-protection configuration is blocked because Codex has no usable GitHub settings/API surface in this session. No GitHub setting changed, no enforcement test ran, and the compensating control remains active.

## Restore CLI Capability

Run in PowerShell:

```powershell
winget install --id GitHub.cli --exact
```

Close and reopen PowerShell, then run:

```powershell
gh auth login --hostname github.com --git-protocol https --web
gh auth status
```

Expected evidence: `gh auth status` identifies an authenticated GitHub account with repository administration access. Do not paste tokens or credentials into chat or repository files.

After capability is restored, Mission Control must renew execution authority because the current mission stopped at a defined gate. Configuration and safe enforcement testing must then be completed before an independent Founder, Mission Control, or authorized reviewer verifies the rule. Codex cannot self-certify that gate.
