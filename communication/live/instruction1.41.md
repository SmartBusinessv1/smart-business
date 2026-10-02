# SMART BUSINESS MISSION CONTROL — MC-178

# SB-P-1.12 — Founder Auth Configuration Capture

**Recipient:** Founder  
**Status:** EXECUTE ONLY AFTER MC-178 PR IS HUMAN-MERGED AND MISSION CONTROL VERIFIES CANONICAL `main`

Read:

`communication/missions/SB-P-1.12/mission-control/48-auth-configuration-closure-authorization.md`

Inspect only the exact Supabase test project:

- ref: `drravyyauixltoihzmwo`
- name: `smart-business-test`
- organization: `himkzepyuyaejqjieugk`
- region: `ap-south-1`

This is read-only.

Capture only:

1. Authentication → URL Configuration
   - Site URL
   - Redirect URLs
   - whether localhost / 127.0.0.1 is already permitted

2. Authentication → Providers
   - Email/password enabled or disabled
   - Google enabled or disabled
   - other relevant enabled built-in providers

3. Authentication → Email/provider configuration
   - email confirmation required: yes/no
   - custom SMTP configured: yes/no only
   - any visible blocker for pre-created confirmed password users

4. API/client-key metadata
   - browser-safe publishable key exists: yes/no
   - **do not copy its value**

Do not save or change anything.

Return exactly:

```text
Exact project:
- ref:
- name:
- org:
- region:

Auth URL Configuration:
- Site URL:
- Redirect URLs:
- localhost/127.0.0.1 permitted: YES / NO / NOT CLEAR

Providers:
- Email/password: ENABLED / DISABLED / NOT CLEAR
- Google: ENABLED / DISABLED / NOT CLEAR
- Other enabled providers:

Email configuration:
- Email confirmation required: YES / NO / NOT CLEAR
- Custom SMTP configured: YES / NO / NOT CLEAR
- Any visible blocker for pre-created confirmed password users:

API/client-key metadata:
- browser-safe publishable key exists: YES / NO / NOT CLEAR

No settings changed: YES
```

Never include secret/key/token/password values.

If the dashboard requires a mutation, save, upgrade, billing confirmation, plan change, or target switch, stop and return to Mission Control.

**FOUNDER AUTH CONFIGURATION CAPTURE COMPLETE — STOP FOR MISSION CONTROL DISPOSITION**
