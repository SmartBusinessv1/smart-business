# SMART BUSINESS MISSION CONTROL — MC-178

# SB-P-1.12 — Auth Configuration Closure Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-02  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Evidence source:** PR #716 / Local Runtime Activation Evidence  
**Implementation Authorization:** WITHHELD  
**Candidate migration mission:** `SB-MIG-1.4` — NON-EXECUTABLE

## 1. Canonical verification

Mission Control verified PR #716 human-merged to:

`main@823eb05268512c2717880cc5159cf955ef21b75b`

Canonical artifacts:

- `communication/missions/SB-P-1.12/specialists/11-stage13-local-runtime-activation-evidence.md`
  - blob `0d934a3b421e8bd464b473a21696f01177d95a0a`
- `communication/live/report1.40.md`
  - blob `9c550fe414839ffb2337246f6f46283776dd660f`

## 2. EV-02 disposition

**EV-02 remains PARTIALLY EVIDENCED.**

Mission Control accepts:

- local ephemeral runtime on the authorized verifier's machine as the approved Stage 17 planning model;
- `drravyyauixltoihzmwo / smart-business-test` as the exact non-production runtime backend target for that future verification;
- the browser/server environment-variable boundary;
- no application-table write on startup;
- parser AWS flows can be excluded at the current canonical baseline;
- the 3-person / 2-business synthetic fixture model as the minimum planning baseline.

The remaining activation blocker is the exact hosted Auth configuration.

## 3. Next authorized action — Founder read-only dashboard capture

Mission Control authorizes a **read-only Founder inspection** of the exact Supabase test project's hosted Auth settings.

Exact target:

- project ref: `drravyyauixltoihzmwo`
- name: `smart-business-test`
- organization: `himkzepyuyaejqjieugk`
- region: `ap-south-1`

The Founder must positively confirm the exact project identity before reading settings.

### 3.1 Capture only these facts

From the Supabase dashboard, record without secret values:

1. **Authentication → URL Configuration**
   - Site URL;
   - every Redirect URL / allowlist entry relevant to local verification;
   - whether `localhost` or `127.0.0.1` is currently permitted.

2. **Authentication → Providers**
   - whether Email / password sign-in is enabled;
   - whether Google is enabled;
   - any other enabled built-in provider relevant to Smart Business.

3. **Authentication → Email / provider configuration**
   - whether email confirmation is required;
   - whether custom SMTP is configured: **yes/no only**;
   - any visible setting that would prevent pre-created confirmed synthetic password users from signing in locally.

4. **Project API / client key metadata**
   - confirm a browser-safe publishable key exists;
   - do not copy the key value into chat, Git, screenshots intended for repository evidence, or Mission Control records.

### 3.2 Strictly prohibited

This authorization does **not** permit:

- changing Site URL;
- adding/removing redirect URLs;
- enabling/disabling providers;
- changing email-confirmation behavior;
- changing SMTP;
- rotating/replacing keys;
- creating Auth users;
- creating fixtures;
- starting the application against test;
- Full Assurance execution;
- Stage 17 runtime execution;
- SQL/migration authoring or execution;
- production mutation.

If the dashboard prompts for a mutation, save, billing, upgrade, plan change, or target switch, stop.

## 4. Founder return format

Return the observed facts to Mission Control in plain text using this structure:

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

Do not include any secret/key/token/password value.

## 5. Mission Control decision after capture

After the Founder returns the exact settings:

- if pre-created confirmed password users can sign in without any redirect-bearing flow, Mission Control may authorize local runtime/fixture activation **without changing Auth configuration**;
- if a redirect-bearing Stage 17 flow is required and the exact local origin is absent, Mission Control must separately authorize the smallest required redirect allowlist change;
- if email/password is disabled or another provider setting blocks the selected model, Mission Control must make a separate configuration decision before runtime activation.

## 6. EV-01 routine operating rule remains active

At the next Mission Control checkpoint, re-check:

- exact current Actions/run/status state;
- Community Discussion #209242;
- Community Discussion #209244;
- any Founder-supplied GitHub Support response;
- PR-search/read-model recovery.

Missing evidence remains missing, not pass.

## 7. Preserved authority boundary

Unchanged:

- EV-01 OPEN;
- EV-02 PARTIALLY EVIDENCED;
- EV-06 partial;
- EV-09 partial with 8 unresolved record classes;
- EV-18 OPEN;
- EV-21 partial;
- EV-22 identity deletion NOT AUTHORIZED;
- EV-28 final builder / Implementation Authorization OPEN;
- `SB-MIG-1.4` NON-EXECUTABLE;
- SQL/migration authoring NOT AUTHORIZED;
- application implementation NOT AUTHORIZED;
- runtime activation NOT AUTHORIZED;
- test-fixture creation NOT AUTHORIZED;
- production mutation NOT AUTHORIZED.
