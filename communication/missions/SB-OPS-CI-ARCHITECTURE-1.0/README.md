# SB-OPS-CI-ARCHITECTURE-1.0 — Fast Gate + Full Assurance

## Mission identity

- **Mission ID:** `SB-OPS-CI-ARCHITECTURE-1.0`
- **Mission name:** Fast Gate + Full Assurance
- **Mission type:** Non-Product operational / engineering-assurance mission
- **Founder:** Riyas PK
- **Mission Control:** Smart Business Mission Control
- **Status:** `CLOSED — ACCEPTED`
- **Canonical repository:** `SmartBusinessv1/smart-business`
- **Activation PR:** `#580 — MERGED`
- **Activation merge:** `f92d2160cc820f24bd93af31187430622f45155f`
- **Implementation PR:** `#581 — MERGED`
- **Accepted PR head:** `b7c06d91cdc266d79d307819cbb65db1b99b4111`
- **Merge commit / verified canonical main:** `8a6f0df93f608724b63a95f73762f1cf52f066f4`
- **Current owner:** none — mission closed

## Purpose

Graduate CI from "run everything everywhere" into a two-speed architecture that preserves assurance while reducing unnecessary PR latency.

## Accepted architecture

### Fast Gate — every PR/push

- lint;
- typecheck;
- build;
- 8 environment-independent Fast Test files / 61 tests;
- no `smart-business-test` / `SUPABASE_TEST_*` dependency.

### Full Assurance — selective

- 20 Supabase-dependent integration/security/RLS/concurrency/database-behavior files / 108 tests;
- isolated `smart-business-test` environment;
- relevant-path triggering plus `workflow_dispatch`;
- not configured as a required branch-protection check under this mission.

### Test isolation hardening

The two rejected-auth tests in `tests/catalog-import/real-http.test.ts` use request-specific `randomUUID()` filename markers and scoped existence checks instead of unscoped global table counts.

Combined automated baseline: **28 files / 169 tests**.

## Stage record

- **Stage 1 — Classification and design:** COMPLETE — ACCEPTED.
- **Stage 2 — Implementation:** COMPLETE — ACCEPTED.
- **Stage 3 — Independent review:** COMPLETE — `PASS WITH NON-BLOCKING FINDINGS` under Founder-authorized Mission Control substitution because Codex was unavailable.
- **Stage 4 — Mission Control acceptance / Founder merge:** COMPLETE.
- **Post-merge verification / communication closeout:** COMPLETE, pending only merge of the administrative closeout PR carrying this record.

## Post-merge evidence

Against actual merge commit `8a6f0df93f608724b63a95f73762f1cf52f066f4`:

- Application Build Assurance `#84` / `35014746387` — SUCCESS;
- Markdown Quality Gate `#1688` / `35014746175` — SUCCESS;
- Full Assurance `#15` / `35014746163` — SUCCESS;
- Full Assurance — 20/20 files, 108/108 tests, 0 failures.

Final closure record:

`mission-control/07-post-merge-verification-and-closure.md`

Communication archive:

`communication/archive/SB-OPS-CI-ARCHITECTURE-1.0/communication.md`

## Carried non-blocking follow-ups

- transient Auth/JWKS-class flakiness;
- GitHub Actions runtime deprecation warning;
- existing dependency vulnerability backlog;
- pre-existing inventory shared-write-path diagnostic.

These are explicitly not represented as resolved by this mission.

## Explicit boundaries

This mission did **not** activate `SB-P-1.12`.

This mission did not authorize product features, UX changes, production deployment, production database access, schema/RLS/grant/RPC changes, dependency upgrades/additions, branch-protection changes, scheduled assurance setup, or unrelated cleanup.

The closed `SB-OPS-CI-STABILIZATION-1.0` mission remains closed and archived.