# SB-REL-1.10-1.11 — Communication Archive

**Archive Status:** CLOSED FOR LIVE COMMUNICATION

**Disposition:** `POSTPONED — NON-BLOCKING TEST SECURITY FOLLOW-UP`

**Archived By:** Mission Control

**Archive Date:** 2026-09-01

## Closure Note

This archive preserves the live communication state for `SB-REL-1.10-1.11`, specifically `Gate 2A-C3B-IR1 — Test-Project Legacy Service-Role Credential Containment`.

The containment work was not completed to PASS. The work is intentionally removed from the active product critical path and preserved as a non-blocking test-security follow-up.

Verified before postponement:

- target test project identity was confirmed as `drravyyauixltoihzmwo / smart-business-test / ap-south-1`;
- the test project was Healthy;
- a modern Publishable key existed and was migrated into the local test configuration;
- the modern Publishable key was verified by a non-secret anonymous request with HTTP 200;
- a modern Secret key existed and replaced the local test legacy privileged dependency in `.env.test.local`;
- the modern Secret key was verified by a backend-style non-secret request with HTTP 200;
- production project `gysgzasfcjvtrgaigfyn` was not changed.

Still unresolved at postponement:

- the test project's legacy JWT-based `anon` and `service_role` keys were not disabled;
- full retirement/revocation of the exposed legacy JWT credential was not completed;
- F23-01 remained `BLOCKED — F23-01 LIVE VERIFICATION INCONCLUSIVE`;
- the unresolved test-only security follow-up does not authorize or block unrelated product-runtime synchronization work.

No claim of successful credential containment is made by this closure.

---

# Original Source: `communication/live/instruction.md`

# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** `SB-REL-1.10-1.11`

**Gate:** `Gate 2A-C3B-IR1 — Test-Project Legacy Service-Role Credential Containment`

**Parent Incident:** `Gate 2A-C3B-D2 — STOP — HTTP DIAGNOSTIC INCIDENT`

**From:** Mission Control

**To:** `Founder / Authorized Human Supabase Operator`, with Claude Code limited to repository/read-only dependency verification and reporting support

**Status:** `PENDING HUMAN MERGE — TEST-PROJECT-ONLY SECURITY CONTAINMENT AUTHORIZATION`

**Date:** `2026-09-01`

## Trigger

PR #447 closed Gate 2A-C3B-D2 with `STOP — HTTP DIAGNOSTIC INCIDENT`.

The incident was limited to Supabase test project `drravyyauixltoihzmwo / smart-business-test / ap-south-1`. A legacy JWT-style `service_role` API key for that test project was displayed in session tool output and therefore treated as compromised. No production secret exposure was evidenced. Production project `gysgzasfcjvtrgaigfyn` was explicitly outside the gate.

## Security Objective

Contain the compromised test-project legacy privileged credential using the smallest safe supported Supabase path: identify test-only dependencies using the legacy credential, move them to modern keys where required, disable the test legacy API keys after dependency verification, verify test health, and record non-secret evidence only.

## Authorized Environment

Authorized scope was limited to the test project, canonical repository read-only dependency inspection, test-only CI/config/integration dependency inspection, Supabase Dashboard API Keys controls, modern-key substitution for legitimate test-only dependencies, and non-secret post-containment verification.

Not authorized were production changes, F23-01 retest, downstream F23 progression, unrelated test schema/data changes, broad infrastructure changes, or disclosure of secrets.

## Required Sequence

1. Verify test project identity.
2. Confirm modern Publishable and Secret API keys exist.
3. Check minimum relevant test-only dependency surfaces.
4. Replace any required legacy privileged dependency with a modern secret key without code/schema scope expansion.
5. Disable test-project legacy API keys after dependencies are clear.
6. Verify test health, disabled legacy-key state, modern-key operation, production untouched, and no secret recorded.

## Stop Conditions

Stop on ambiguous project identity, production targeting, unresolved dependency breakage, required code/schema scope expansion, new secret exposure, test-project health failure, destructive signing-key rotation, or other scope expansion.

## Final Results Allowed

- `PASS — TEST LEGACY PRIVILEGED CREDENTIAL CONTAINED`
- `BLOCKED — TEST LEGACY CREDENTIAL CONTAINMENT INCOMPLETE`
- `FAIL — TEST CREDENTIAL CONTAINMENT FAILED`
- `STOP — CREDENTIAL-CONTAINMENT INCIDENT`

A PASS would have closed only the credential incident and would not have resumed F23-01 automatically.

---

# Original Source: `communication/live/report.md`

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

## Reporting Boundary

The report shell was limited to containment of the exposed legacy privileged credential on test project `drravyyauixltoihzmwo / smart-business-test / ap-south-1`. Production project `gysgzasfcjvtrgaigfyn` was out of scope. No credential values were to be recorded.

## Required Evidence Fields

The report requested non-secret evidence for target verification, modern-key readiness, dependency checks, dependency migration, legacy-key disablement, post-containment health, production untouched, and no secret recorded.

## Incident Continuity

The report preserved `STOP — HTTP DIAGNOSTIC INCIDENT` and `BLOCKED — F23-01 LIVE VERIFICATION INCONCLUSIVE` and did not authorize an F23-01 retest or downstream progression.

## Archive Reconciliation

The live report shell was never completed to one of its four final result states. This archive therefore reconciles the live cycle as:

`POSTPONED — NON-BLOCKING TEST SECURITY FOLLOW-UP`

This is an administrative live-cycle closure, not a PASS and not a declaration that the exposed legacy credential was fully revoked.
