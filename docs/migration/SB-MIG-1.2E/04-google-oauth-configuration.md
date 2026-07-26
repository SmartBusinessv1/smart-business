Document: Google OAuth Configuration

Version: 1.0

Status: ACCEPTED

Created By: Claude Code

Reviewed By: Mission Control

Review Date: 2026-07-26

Mission: SB-MIG-1.2E

# SB-MIG-1.2E — Google OAuth Configuration (Task 4)

## 1. Google Cloud Project

| Item | Value |
| --- | --- |
| Project name | Team LIPS Smart Business |
| Project ID | `team-lips-smart-business` |
| Project number | 270044555604 |
| Parent organization | `teamlips.com` (Google Cloud org auto-linked to Team LIPS Workspace domain) |

**Note on setup friction:** initial project creation failed with `resourcemanager.projects.create` permission error when the Founder (logged in as Workspace Super Admin) selected **"No organization"** as the parent resource. Investigation via Cloud Resource Manager → IAM showed the `teamlips.com` organization already grants **Project Creator** to the whole domain and **Organization Administrator** to `admin@teamlips.com` — the failure was caused by targeting the wrong parent resource ("No organization" is a distinct resource from the actual org), not a missing permission. Resolved by re-creating the project with **`teamlips.com`** explicitly selected as the parent.

## 2. OAuth Consent Screen (Google Auth Platform)

| Setting | Value |
| --- | --- |
| App name | Team LIPS (Founder-configured branding) |
| User support email | Founder-provided, monitored address |
| Audience / User Type | **External** |
| Publishing status | Testing (not yet verified by Google) |

**External** was chosen deliberately over Internal, since Smart Business's clients are outside the `teamlips.com` Workspace organization — Internal would restrict sign-in to only Team LIPS staff.

**Verification note:** External apps in Testing mode are limited to manually-added test users (up to 100). This comfortably covers Stage 1 (10 pilot clients) and, on paper, Stage 2 (100 clients) of the Founder's growth plan without requiring Google's app verification process.

**Revised recommendation (Mission Control, SB-MIG-1.2E-A Refinement 5):** don't wait until the 100-user ceiling is actually reached. Google's verification process itself takes real time to complete, so starting only once Stage 2 hits its limit would leave onboarding blocked mid-review with no fallback. Begin the verification process **well before** the 100-test-user limit is approached — i.e., early in Stage 2, not at its boundary — so review has comfortably completed with margin before it could ever block a new signup. This is the same category of long-lead item as the India DLT registration deferred for Phone auth: worth starting proactively, not reactively.

## 3. OAuth Client Credentials

| Item | Value |
| --- | --- |
| Client type | Web application |
| Authorized JavaScript origin | `https://gysgzasfcjvtrgaigfyn.supabase.co` |
| Authorized redirect URI | `https://gysgzasfcjvtrgaigfyn.supabase.co/auth/v1/callback` |
| Client ID / Client Secret | Generated; saved by Founder in a password manager. **Not pasted into this chat or stored in this repository**, per mission Safety Rules |

**Setup error encountered and corrected:** the callback URL was initially entered into the "Authorized JavaScript origins" field (which rejects paths), rather than "Authorized redirect URIs". Corrected by entering the bare origin (no path) under JavaScript origins, and the full callback URL under redirect URIs.

## 4. Supabase-Side Configuration

Applied at **Authentication → Sign In / Providers → Google**:

| Setting | Value |
| --- | --- |
| Enable Sign in with Google | **ON** |
| Client IDs | Set (verified format: `<number>-<hash>.apps.googleusercontent.com`, no protocol prefix) |
| Client Secret (for OAuth) | Set |
| Skip nonce checks | OFF (kept — enabling would weaken token validation) |
| Allow users without an email | OFF (kept — app assumes every user has an email) |

**Setup error encountered and corrected:** Client ID was initially pasted with an erroneous `http://` prefix, which Supabase rejected as an invalid Client ID format. Corrected by removing the prefix, leaving the raw Google-issued identifier.

Post-save verification: Providers list now shows **Google: Enabled** (green badge), matching Email's state.

## 5. Outcome

Google OAuth is fully configured and enabled. Two follow-up items are not yet due but should be tracked:

1. **Google app verification** — start early in Stage 2 (well before the 100-test-user ceiling is reached, not at Stage 3) to avoid the "unverified app" warning screen and ensure review completes with margin before it could block onboarding.
2. **OAuth consent screen branding polish** (logo, privacy policy/terms links) — cosmetic, can be refined anytime via Branding settings without affecting functionality.
