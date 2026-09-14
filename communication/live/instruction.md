# SMART BUSINESS — LIVE INSTRUCTION

**Mission ID:** `SB-OPS-CI-STABILIZATION-1.0`
**Mission name:** CI Baseline Stabilization
**Sender:** Smart Business Mission Control
**Recipient:** Infrastructure Operations / Founder Riyas PK
**Status:** `STAGE 1B ACTIVE — TEST ENVIRONMENT PROVISIONING`
**Date:** 2026-09-14

Stage 1A is accepted.

Controlling authorization:

`communication/missions/SB-OPS-CI-STABILIZATION-1.0/mission-control/03-stage1a-review-and-stage1b-authorization.md`

PR `#578` remains open and must not be merged yet.

Stage 1B authorizes only the GitHub Actions environment `smart-business-test` and the three environment-scoped secret names required by the existing test job:

- `SUPABASE_TEST_URL`
- `SUPABASE_TEST_ANON_KEY`
- `SUPABASE_TEST_SERVICE_ROLE_KEY`

Use values only from the already approved isolated `smart-business-test` Supabase project. Do not disclose any secret value in chat, repository content, screenshots, logs, or reports.

Do not change application/workflow code, database/provider state, deployment, branch protection, dependencies, or Product Mission state. Do not run local credential-backed integration tests. `SB-P-1.12` remains not activated.

After provisioning, report only that the GitHub environment exists and the three named secrets are configured. Stop for Mission Control before any further action.
