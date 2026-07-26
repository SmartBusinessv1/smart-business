Document: Security Review (URL Configuration, Session Settings, Attack Protection)

Version: 1.0

Status: ACCEPTED

Created By: Claude Code

Reviewed By: Mission Control

Review Date: 2026-07-26

Mission: SB-MIG-1.2E

# SB-MIG-1.2E — Security Review (Task 5, covering mission Phases 6-8)

Phases 6, 7, and 8 are reported together here since they were reviewed in the same Authentication configuration area and are thematically one "auth security posture" review.

## 1. Phase 6 — URL Configuration

| Setting | Before | After |
| --- | --- | --- |
| Site URL | `http://localhost:3000` (dev default) | `https://www.smartbusiness.teamlips.com` |
| Redirect URLs | None | `https://www.smartbusiness.teamlips.com/**`, `http://localhost:3000/**`, `https://preview--governed-growth-path.lovable.app/**` |

Rationale: Site URL must point to production, not a local dev placeholder, especially with Google OAuth now live (Phase 5). Localhost retained for continued local development. Lovable preview URL included because it authenticates against the Team LIPS Supabase project during integration testing; confirmed via Lovable documentation research that `preview--<project-slug>.lovable.app` is a stable, project-tied domain (not an ephemeral per-build URL, unlike Lovable's separate 7-day-expiring "share preview" links), so it is safe to keep permanently in the allow-list. Caveat: if the Lovable project/workspace is ever renamed, this URL would change and need updating.

## 2. Phase 7 — Session Settings

| Setting | Before | After |
| --- | --- | --- |
| Detect & revoke compromised refresh tokens | ON | Unchanged (already correct) |
| Refresh token reuse interval | 10s | Unchanged (matches Supabase's own recommendation) |
| Enforce single session per user | OFF | Unchanged — deliberately left off to allow multi-device access (phone + laptop) for business users |
| Time-box user sessions | 0 (never) | **2160 hours (90 days)** |
| Inactivity timeout | 0 (never) | **720 hours (30 days)** |

Rationale: previously sessions never expired outright. Finite caps close the risk window on a leaked/stale refresh token or an abandoned session (e.g. on a shared device) remaining valid indefinitely, while remaining generous enough not to inconvenience active users. JWT (access token) lifetime is not independently configurable in the current dashboard for this project tier — uses the platform default (1 hour), which is an appropriate secure default.

## 3. Phase 8 — Security Review

### 3.1 Attack Protection

| Setting | Status | Decision |
| --- | --- | --- |
| Prevent use of leaked passwords | Enabled | Confirmed carried over correctly from Phase 5 |
| Enable Captcha protection | Disabled | **Future Consideration** — enabling requires a coordinated frontend change (the app must render the CAPTCHA widget and submit a token, or all auth requests will fail). Recommend Cloudflare Turnstile when implemented, given the project already uses Cloudflare for R2 storage. Not enabled today per this mission's no-application-code-changes rule. |

### 3.2 Multi-Factor Authentication

Reviewed, no changes needed — already correctly configured:

| Setting | Value |
| --- | --- |
| TOTP (App Authenticator) | Enabled (platform-level capability; actual enrollment requires a future frontend UI, out of scope here) |
| Maximum per-user MFA factors | 10 |
| Phone (SMS MFA) | Disabled — consistent with the Phone/OTP login deferral ([[project-phone-otp-deferral]]), same India DLT constraint applies |
| Limit duration of AAL1 sessions | Enabled — matches Supabase's own stated recommendation |

### 3.3 Rate Limits & Email Delivery — Critical Finding and Remediation

**Finding:** the project was running on Supabase's built-in default email service (no custom SMTP configured), which hard-caps at **2 emails/hour project-wide**. This is a genuine production blocker, not a minor tuning issue — it would have broken email confirmation and password recovery for pilot clients almost immediately (e.g., 3 signups within the same hour would leave the 3rd without a confirmation email).

**Remediation implemented this mission:**

1. Evaluated using the Team LIPS Google Workspace account's SMTP directly — rejected due to Google's 500/day sending cap, Terms-of-Service risk (automated transactional traffic on a personal/business mailbox can trigger abuse detection), and shared sender-reputation risk with the team's real email traffic.
2. Set up **Resend** as a dedicated transactional email provider, using a dedicated subdomain (`mail.smartbusiness.teamlips.com`) rather than the root domain, to keep sending reputation isolated from the team's actual mailbox.
3. Verified the domain in Resend: added DKIM (TXT), SPF (MX + TXT), and DMARC (TXT, `p=none`) records via Hostinger DNS (where `teamlips.com` DNS is managed). Domain verified successfully within ~21 minutes of adding records.
4. Generated a Resend API key scoped to sending-only access, used as the SMTP password.
5. Configured Supabase custom SMTP: host `smtp.resend.com`, port 465, username `resend`, sender `noreply@mail.smartbusiness.teamlips.com` / "Smart Business". Saved and confirmed.

**Result:** Supabase's email rate limit auto-increased from 2/hour to 30/hour upon enabling custom SMTP — sufficient for Stage 1 and Stage 2 of the Founder's growth plan. This should be revisited and raised further (Authentication → Rate Limits) ahead of Stage 3/4 (250-500 clients); Resend itself has no meaningful throughput constraint at this scale, so the limit is a Supabase-side dial, not a provider bottleneck.

**Important caveat — configuration vs. live effect:** an end-to-end test (triggering a password reset) showed the email arriving from `no-reply@auth.lovable.cloud`, not the new Resend/Supabase setup. Investigation confirmed this is expected: per SB-MIG-1.2D's explicit migration boundary, the `.env` was repointed to the Team LIPS Supabase project for local development, but the **Lovable published app was deliberately left untouched** — production cutover is a separate, not-yet-authorized step. Therefore: **all Phase 5-8 Supabase Auth configuration in this document is correctly and verifiably set at the infrastructure level, but will not affect real users until the Lovable app is explicitly republished against the Team LIPS Supabase project** — an action outside this mission's authorized scope (no production migration authorized). This should be the first item addressed in whatever mission authorizes that cutover.

Other rate limits reviewed and left at defaults (all reasonable): token refreshes (150/5min per IP), token verifications (30/5min per IP), sign-ups/sign-ins (30/5min per IP), anonymous users and Web3 (both irrelevant — those providers are disabled). IP address forwarding left disabled — not needed unless a server-side proxy architecture is introduced later.

## 4. Outcome

Phases 6-8 complete at the infrastructure level. One critical production blocker (email rate limit) identified and fully remediated. One important scope caveat documented (Supabase Auth config not yet live on the published app, pending a separate authorized cutover). CAPTCHA correctly deferred pending frontend work.
