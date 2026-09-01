# SB-REL-1.10-1.11 — Communication Archive

**Archive Status:** CLOSED FOR LIVE COMMUNICATION

**Disposition:** `POSTPONED — NON-BLOCKING TEST SECURITY FOLLOW-UP`

**Archived By:** Mission Control

**Archive Date:** 2026-09-01

## Closure Note

This archive preserves the live communication state for `SB-REL-1.10-1.11`, specifically `Gate 2A-C3B-IR1 — Test-Project Legacy Service-Role Credential Containment`.

The containment work was not completed to PASS. It is intentionally removed from the active product critical path and preserved as a non-blocking test-security follow-up.

Verified before postponement:

- target test project identity confirmed as `drravyyauixltoihzmwo / smart-business-test / ap-south-1`;
- test project Healthy;
- modern Publishable key migrated into the local test configuration and verified by a non-secret anonymous request with HTTP 200;
- modern Secret key replaced the local test legacy privileged dependency in `.env.test.local` and was verified by a backend-style non-secret request with HTTP 200;
- production project `gysgzasfcjvtrgaigfyn` was not changed.

Still unresolved at postponement:

- test legacy JWT-based `anon` and `service_role` keys were not disabled;
- full retirement/revocation of the exposed legacy JWT credential was not completed;
- F23-01 remained `BLOCKED — F23-01 LIVE VERIFICATION INCONCLUSIVE`.

No claim of successful credential containment is made by this closure.

---

# Original Source — `communication/live/instruction.md`

# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** `SB-REL-1.10-1.11`

**Gate:** `Gate 2A-C3B-IR1 — Test-Project Legacy Service-Role Credential Containment`

**Parent Incident:** `Gate 2A-C3B-D2 — STOP — HTTP DIAGNOSTIC INCIDENT`

**From:** Mission Control

**To:** `Founder / Authorized Human Supabase Operator`, with Claude Code limited to repository/read-only dependency verification and reporting support

**Status:** `PENDING HUMAN MERGE — TEST-PROJECT-ONLY SECURITY CONTAINMENT AUTHORIZATION`

**Date:** `2026-09-01`

---

## 1. Trigger

PR #447 closed Gate 2A-C3B-D2 with:

`STOP — HTTP DIAGNOSTIC INCIDENT`

The incident was limited to the Supabase **test project**:

- project ID: `drravyyauixltoihzmwo`;
- name: `smart-business-test`;
- region: `ap-south-1`.

A legacy JWT-style `service_role` API key for that test project was displayed in session tool output and must therefore be treated as compromised.

No production secret exposure was evidenced. Production project `gysgzasfcjvtrgaigfyn` is explicitly outside this gate.

Current read-only verification confirms the test project remains `ACTIVE_HEALTHY` and has an active modern publishable key. The incident report also records that a newer secret-key pair exists, but any secret value must remain private to the human/operator environment.

## 2. Security Objective

Contain the compromised test-project legacy privileged credential using the smallest safe supported Supabase path.

The preferred outcome is:

1. identify any legitimate test-only dependency still using the legacy `service_role` key;
2. move that dependency to a modern `sb_secret_...` key where required and supported;
3. verify no required test dependency remains on the legacy JWT keys;
4. disable the test project's legacy API keys through Supabase's supported API Keys controls;
5. verify the legacy keys are disabled and the test project remains operational enough for its intended non-production role;
6. record non-secret evidence only.

Supabase's current platform model treats legacy `service_role` as the predecessor of modern secret keys. Legacy keys may be disabled after dependencies are migrated. Do not regenerate or expose the legacy JWT secret as part of this gate.

## 3. Canonical Baseline

Before containment, verify canonical repository `SmartBusinessv1/smart-business`.

Expected baseline after PR #447:

`70fa05adc799ce637433e64467bf8d65562b7011`

STOP if canonical state materially changed in a way that affects this incident response.

## 4. Authorized Environment

**Authorized:**

- Supabase test project only: `drravyyauixltoihzmwo / smart-business-test / ap-south-1`;
- canonical repository read-only dependency inspection;
- test-only CI/config/integration dependency inspection where the Founder/operator has access;
- Supabase Dashboard `Settings → API Keys` for the test project;
- replacement of a legitimate test-only legacy `service_role` dependency with an existing or newly-created modern secret key, only where necessary for containment;
- disabling the test project's legacy API keys after dependency verification;
- non-secret functional verification of the test environment after containment.

**Not authorized:**

- production project `gysgzasfcjvtrgaigfyn`;
- production keys, Auth, data, RLS, grants, functions, migrations, deployment, application release, or domain changes;
- F23-01 retest or any Owner A/Owner B session replay;
- F23-02/F23-03/F23-04 progression;
- unrelated test-project schema/data changes;
- JWT signing-key rotation unless separately authorized after evidence shows it is required;
- broad infrastructure changes;
- disclosure of any new or existing secret in chat, Git, screenshots, PR text, logs, or report files.

## 5. Required Containment Sequence

### C1 — Verify target

In Supabase Dashboard confirm all three before any mutation:

- project ID `drravyyauixltoihzmwo`;
- project name `smart-business-test`;
- region `ap-south-1`.

STOP on mismatch.

### C2 — Confirm modern replacement capability

Open:

`Settings → API Keys`

Confirm that the project has modern Publishable and Secret API Keys available.

Do not reveal or copy any secret into chat or repository evidence.

If no usable modern secret key exists, creating one for **test-project backend use only** is authorized under this containment gate.

### C3 — Dependency check

Before disabling legacy keys, determine whether any required test-only component still depends on legacy `anon` or `service_role` credentials.

Check only the minimum relevant surfaces, including as applicable:

- test application/backend environment variables;
- CI/CD secrets;
- Edge Functions secrets;
- test workers/cron/automation;
- database webhooks or `pg_net` calls;
- local test operator scripts;
- third-party test integrations.

Repository references to environment-variable names alone are not proof that a live dependency still uses the compromised value.

Do not reveal secret values while checking.

### C4 — Replace privileged dependency if needed

If a legitimate test-only backend dependency still uses the compromised legacy `service_role` key:

- replace only that dependency with a modern secret key;
- use the supported header/client pattern for modern secret keys;
- change no unrelated configuration;
- verify the dependency works without exposing the key.

If replacing the dependency would require application-code changes, schema changes, production changes, or scope expansion beyond a secret/config substitution, STOP and report `BLOCKED` for separate authorization.

### C5 — Disable legacy test-project API keys

After C3/C4 establish that required test dependencies no longer need the legacy keys, disable the legacy API keys for **test project `drravyyauixltoihzmwo` only** using Supabase's supported `Settings → API Keys` control.

This may disable both legacy `anon` and legacy `service_role` together. That is acceptable for the test project only after dependency verification confirms modern-key readiness.

Do not change production legacy-key state.

### C6 — Verify containment

Confirm, without exposing secret values:

- test project remains `ACTIVE_HEALTHY`;
- legacy API keys show disabled/inactive;
- modern publishable key remains active;
- required test-only backend dependency, if any was migrated, functions with the modern secret key;
- no production setting was changed;
- no secret value was recorded in repository evidence.

Do not test the compromised legacy key by printing or reusing it. Dashboard/key-state evidence is sufficient.

## 6. Required Human Evidence

Record only non-secret outcomes:

- exact test-project identity verified;
- whether a modern secret key existed or had to be created;
- dependency surfaces checked;
- whether any dependency required migration;
- whether legacy keys were disabled successfully;
- post-containment project health;
- confirmation production was untouched;
- confirmation no secret was recorded.

Do not include screenshots if they display any key value.

## 7. Stop Conditions

STOP immediately if:

- project identity is ambiguous;
- the Dashboard action appears to target production;
- disabling legacy keys would break an unresolved required dependency;
- a required migration needs code/schema changes outside secret substitution;
- any new secret becomes exposed;
- the test project becomes unhealthy and cannot be restored through the same bounded key/config action;
- Supabase presents a destructive JWT-signing-key rotation rather than simple legacy API-key disablement;
- scope expansion is required.

## 8. Final Result

The canonical containment report must end with exactly one of:

- `PASS — TEST LEGACY PRIVILEGED CREDENTIAL CONTAINED`
- `BLOCKED — TEST LEGACY CREDENTIAL CONTAINMENT INCOMPLETE`
- `FAIL — TEST CREDENTIAL CONTAINMENT FAILED`
- `STOP — CREDENTIAL-CONTAINMENT INCIDENT`

## 9. Continuation Boundary

A PASS here closes only the credential-exposure incident.

It does **not** resume F23-01 automatically.

After canonical containment is complete, Mission Control must separately decide whether the next action is:

- a further HTTP/authenticated-path diagnostic step; or
- a newly instrumented human F23-01 retest.

No downstream release-readiness authority is created.

---

**Mission Control boundary:** contain only the exposed test-project legacy privileged credential; protect production, protect secrets, and do not resume F23-01 until containment is canonically complete.

---

# Original Source — `communication/live/report.md`

# SMART BUSINESS — REPOSITORY COMMUNICATION

# Report

**Mission ID:** `SB-REL-1.10-1.11`

**Gate:** `Gate 2A-C3B-IR1 — Test-Project Legacy Service-Role Credential Containment`

**Parent Incident:** `Gate 2A-C3B-D2 — STOP — HTTP DIAGNOSTIC INCIDENT`

**From:** `Founder / Authorized Human Supabase Operator`

**To:** `Mission Control`

**In Reply To:** `communication/live/instruction.md`

**Status:** `PENDING HUMAN MERGE — AWAITING TEST-PROJECT CREDENTIAL CONTAINMENT`

**Date:** `2026-09-01`

---

## Reporting Boundary

This report is only for containment of the exposed legacy privileged credential on Supabase test project:

`drravyyauixltoihzmwo / smart-business-test / ap-south-1`

Production project `gysgzasfcjvtrgaigfyn` is out of scope.

Do not include any API key, JWT, secret, password, authorization header, session token, recovery link, or screenshot that exposes a credential.

## Required Non-Secret Evidence

Complete only after the authorization PR is human-reviewed and merged.

### 1. Target Verification

- Project ID verified:
- Project name verified:
- Region verified:

### 2. Modern Key Readiness

- Modern publishable key available:
- Modern secret key available:
- New modern secret key created, if necessary:

Do not record key values.

### 3. Dependency Check

List only dependency surfaces checked and whether they still relied on legacy keys.

- Test app/backend environment:
- CI/CD:
- Edge Functions:
- Workers/cron/automation:
- Database webhooks / `pg_net`:
- Local operator scripts:
- Third-party test integrations:
- Other:

### 4. Dependency Migration

- Legacy privileged dependency found:
- If yes, migrated to modern secret key without code/schema scope expansion:
- Verification outcome:

Do not record secret values.

### 5. Legacy-Key Disablement

- Test-project legacy API keys disabled:
- Production legacy-key state changed: `NO` required

### 6. Post-Containment Verification

- Test project status:
- Legacy keys show disabled/inactive:
- Modern publishable key remains active:
- Required migrated test dependency works, if applicable:
- Production untouched:
- No secret recorded in repository/chat evidence:

## Incident Continuity

Preserve the canonical PR #447 conclusion:

`STOP — HTTP DIAGNOSTIC INCIDENT`

This containment report does not alter the unresolved F23-01 status:

`BLOCKED — F23-01 LIVE VERIFICATION INCONCLUSIVE`

No F23-01 retest or downstream gate progression is authorized here.

## Final Result

End with exactly one of:

- `PASS — TEST LEGACY PRIVILEGED CREDENTIAL CONTAINED`
- `BLOCKED — TEST LEGACY CREDENTIAL CONTAINMENT INCOMPLETE`
- `FAIL — TEST CREDENTIAL CONTAINMENT FAILED`
- `STOP — CREDENTIAL-CONTAINMENT INCIDENT`

---

# Archive Reconciliation

The live report shell was never completed to one of its final result states. Mission Control therefore closes this live communication cycle administratively as:

`POSTPONED — NON-BLOCKING TEST SECURITY FOLLOW-UP`

This is not a PASS. It does not claim the exposed legacy credential was fully revoked. The unfinished test-only security matter remains preserved for later follow-up and does not block `SB-OPS-PROD-SYNC-1.0`.