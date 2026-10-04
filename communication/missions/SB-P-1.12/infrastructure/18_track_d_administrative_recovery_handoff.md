# INFRASTRUCTURE ROOM HYDRATION — TRACK D ADMINISTRATIVE RECOVERY

Read and execute only after the authorization PR is Founder-human-merged:

`communication/missions/SB-P-1.12/mission-control/63_track_d_administrative_recovery_closure.md`

Mission objective:

Close the administrative-recovery evidence gap across:

1. Supabase Support / independent administrative recovery;
2. Lovable account/project recovery dependency;
3. the full observed GitHub OAuth dependency set;
4. FD-C7 mailbox + domain/DNS recovery;
5. 1Password organizational recovery readiness.

Founder live evidence shows 7 Authorized OAuth Apps on the affected GitHub identity:

- Git Credential Manager
- GitHub CLI
- GitHub Desktop
- Lovable
- Resend
- Supabase
- Visual Studio Code

All seven require an explicit recovery treatment.

For external services (Lovable, Resend, Supabase), establish a provider-native independent sign-in/recovery path or the provider-supported procedure to obtain one.

For GitHub-specific client/tooling integrations (Git Credential Manager, GitHub CLI, GitHub Desktop), verify they can be safely re-authenticated after GitHub account recovery and are not dependent on an unrecoverable local-only credential.

Treat Visual Studio Code separately as a **multi-provider development control surface**. Team LIPS uses it with GitHub, GitLab, Claude Code, Codex and the local development environment. Verify that VS Code/configuration can be restored and that each connected provider has its own appropriate recoverable authentication path. Do not treat GitHub OAuth as the master recovery dependency for VS Code.

Do not revoke or disconnect any OAuth authorization during this evidence mission.

Important:

- Do not repeat already accepted evidence without a stated freshness reason.
- Founder effort-preservation rule applies.
- FD-C4 second Supabase Owner remains deferred; do not invite anyone.
- No provider-setting mutation.
- No product mutation.
- No secret migration/rotation.
- No credentials in Git or chat.
- Supabase Support enquiry is allowed because FD-C5 already approved it.
- Provider support enquiries for Lovable/Resend recovery-path clarification are evidence actions only; do not mutate accounts without later authority.
- Guide Founder only for human-only UI/support steps that genuinely require the signed-in human.
- Produce one consolidated final report:
  `communication/missions/SB-P-1.12/infrastructure/17_track_d_administrative_recovery_report.md`
- Do not self-merge the evidence PR.

End:

**TRACK D ADMINISTRATIVE RECOVERY REPORT SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
