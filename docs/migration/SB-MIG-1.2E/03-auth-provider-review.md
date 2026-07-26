Document: Auth Provider Review

Version: 1.0

Status: ACCEPTED

Created By: Claude Code

Reviewed By: Mission Control

Review Date: 2026-07-26

Mission: SB-MIG-1.2E

# SB-MIG-1.2E — Authentication Provider Review (Task 3)

## 1. User Signups (Authentication → Sign In / Providers)

| Setting | Value | Assessment |
| --- | --- | --- |
| Allow new users to sign up | ON | Correct |
| Allow manual linking | OFF | Correct — not needed |
| Allow anonymous sign-ins | OFF | Correct — no legitimate use case for a B2B platform |
| Confirm email | ON | Correct — required for production |

## 2. Email Provider — Hardening Applied

Reviewed and hardened during this mission (Founder applied all changes, verified via screenshot):

| Setting | Before | After |
| --- | --- | --- |
| Secure email change | ON | ON (unchanged) |
| Secure password change | **OFF** | **ON** |
| Require current password when updating | **OFF** | **ON** |
| Prevent use of leaked passwords (HaveIBeenPwned) | **OFF** | **ON** |
| Minimum password length | **6** | **10** |
| Password requirements | **None set** | **Lowercase, uppercase letters and digits** |
| Email OTP expiration | 3600s | Unchanged |
| Email OTP length | 8 digits | Unchanged |

## 3. Provider-by-Provider Recommendation

| Provider | Status | Decision | Rationale |
| --- | --- | --- | --- |
| Email | Enabled | **Enable (kept)** | Primary auth method |
| Google | **Enabled (this mission)** | **Enable** | See `04-google-oauth-configuration.md` |
| Phone | Disabled | **Future Consideration — deferred to Stage 2 (~100 clients)** | India TRAI DLT SMS registration required for reliable delivery to Kerala merchant numbers; see memory note `project_phone_otp_deferral` |
| Anonymous Login | Disabled | Leave Disabled | No legitimate use case |
| GitHub | Disabled | Leave Disabled | Audience mismatch (dev-tool users, not business clients) |
| Apple | Disabled | Future Consideration | Relevant only if a client-facing iOS app ships later |
| Azure | Disabled | Future Consideration | Relevant only if enterprise clients require Microsoft/Entra SSO |
| Discord | Disabled | Leave Disabled | Audience mismatch |
| Facebook | Disabled | Leave Disabled | Audience mismatch for B2B tool |
| LinkedIn (OIDC) | Disabled | Future Consideration | Plausible fit for business audience, not essential at pilot stage |
| Twitter/X (both variants) | Disabled | Leave Disabled | Not relevant |
| Figma | Disabled | Leave Disabled | No product relationship |
| Slack (both variants) | Disabled | Future Consideration | Relevant only if Slack-based notifications/integrations are built |
| SAML 2.0 | Disabled | Future Consideration | Enterprise SSO — relevant only once larger enterprise clients require it (also requires Team/Enterprise plan tier for full support) |
| Web3 Wallet, Bitbucket, GitLab, Kakao, KeyCloak, Notion, Twitch, Spotify, WorkOS, Zoom | Disabled | Leave Disabled | No relevance to Smart Business's audience or product |

Custom OAuth/OIDC providers: none configured — none needed at this stage.

## 4. Outcome

Phase 5 complete. Email provider hardened to production-appropriate settings; Google OAuth fully configured and enabled (see companion document); Phone/OTP explicitly deferred with a documented trigger condition; all other providers deliberately left disabled with documented rationale, consistent with mission Safety Rule against enabling unnecessary providers.
