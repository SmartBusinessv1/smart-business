# SMART BUSINESS MISSION CONTROL

## SB-OPS-CI-ARCHITECTURE-1.0 — Fast Gate + Full Assurance

**Mission ID:** `SB-OPS-CI-ARCHITECTURE-1.0`  
**Mission type:** Non-Product operational / engineering-assurance mission  
**Authorized by:** Founder Riyas PK through Mission Control  
**Status:** `ACTIVATION PROPOSED — AWAITING FOUNDER MERGE`

## Objective

Replace the current one-speed CI pattern with a two-speed assurance model that makes ordinary pull-request feedback faster while retaining full environment-dependent verification at the boundaries where it is actually relevant.

## Required outcome

1. A fast PR gate for lint, typecheck, build, Markdown where relevant, and environment-independent tests.
2. A separate full-assurance path for Supabase/HTTP/security/RLS/concurrency/database integration tests.
3. Path/risk-aware triggering so documentation-only or unrelated PRs do not automatically incur the full integration suite.
4. Full assurance remains mandatory for relevant implementation acceptance and post-merge verification.
5. Shared-test-state fragility is identified and hardened without weakening security assertions.
6. Existing fail-closed behavior is preserved.

## Non-negotiable boundaries

- Do not weaken, skip, mute, `continue-on-error`, or otherwise disguise failing relevant tests.
- Do not change production configuration or access production systems.
- Do not modify application/product behavior merely to make CI green.
- Do not perform dependency upgrades under this mission unless separately authorized.
- Do not change database schema/RLS/grants/RPCs merely as CI architecture work.
- Do not activate `SB-P-1.12` under this mission.
- Do not self-approve or self-merge.

## Stage model

- **Stage 0:** activation and evidence baseline.
- **Stage 1:** repository/test classification and implementation design.
- **Stage 2:** implementation of Fast Gate + Full Assurance split and narrow test-isolation hardening where authorized.
- **Stage 3:** independent verification of trigger logic, gate strength, runtime evidence and regression coverage.
- **Stage 4:** Mission Control acceptance, Founder merge and post-merge verification.

## Activation rule

This file does not itself authorize implementation before the activation PR is merged. After Founder/human merge, Mission Control will issue a fresh live instruction naming the first executing specialist and exact authorized paths.
