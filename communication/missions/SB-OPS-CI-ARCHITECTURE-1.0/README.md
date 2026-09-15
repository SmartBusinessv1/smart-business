# SB-OPS-CI-ARCHITECTURE-1.0 — Fast Gate + Full Assurance

## Mission identity

- **Mission ID:** `SB-OPS-CI-ARCHITECTURE-1.0`
- **Mission name:** Fast Gate + Full Assurance
- **Mission type:** Non-Product operational / engineering-assurance mission
- **Founder:** Riyas PK
- **Mission Control:** Smart Business Mission Control
- **Status:** `ACCEPTED — READY FOR FOUNDER MERGE`
- **Canonical repository:** `SmartBusinessv1/smart-business`
- **Activation PR:** `#580 — MERGED`
- **Activation merge:** `f92d2160cc820f24bd93af31187430622f45155f`
- **Working branch:** `mission/SB-OPS-CI-ARCHITECTURE-1.0-stage1`
- **Implementation PR:** `#581 — OPEN — READY FOR FOUNDER MERGE`
- **Accepted implementation head:** `74455d538e984edd1a7fc3b2187d02029d490e84`
- **Current owner:** Founder Riyas PK for protected-main merge

## Purpose

Graduate the current CI model from "run everything everywhere" into a two-speed architecture that preserves assurance while reducing unnecessary PR latency.

## Accepted architecture

### Fast Gate — every PR

- Markdown quality checks where applicable.
- Lint.
- Typecheck.
- Build.
- 8 environment-independent Fast Tests.
- No `smart-business-test` / `SUPABASE_TEST_*` dependency.
- Verified real-CI feedback in roughly 22-28 seconds for the four application jobs on the accepted implementation.

### Full Assurance — selective

- 20 Supabase-dependent integration/security/RLS/concurrency/database-behavior tests.
- Runs against the isolated `smart-business-test` environment.
- Native path filtering for relevant repository changes plus `workflow_dispatch`.
- Not configured as a required branch-protection check under this mission.
- Verified 108/108 passing on repeated successful runs.

### Test isolation hardening

The two rejected-auth tests in `tests/catalog-import/real-http.test.ts` now use request-specific `randomUUID()` filename markers and scoped existence checks instead of unscoped global table counts.

Combined automated test baseline remains **28 files / 169 tests**.

## Stage 1 — Classification and design

**COMPLETE — ACCEPTED.**

Report:

`claude-code/01-stage1-classification-and-design.md`

## Stage 2 — Implementation

**COMPLETE — ACCEPTED.**

Report:

`claude-code/02-stage2-implementation-and-verification.md`

Mission Control Stage 2 acceptance / Stage 3 authority:

`mission-control/04-stage2-review-and-stage3-authorization.md`

## Stage 3 — Independent review

**COMPLETE — PASS WITH NON-BLOCKING FINDINGS.**

Codex was unavailable. Founder Riyas PK explicitly authorized Mission Control to perform the independent review rather than delay the mission. Claude Code was the Stage 2 builder; Mission Control independently re-verified repository state and CI evidence and did not perform the implementation.

Review:

`mission-control/05-stage3-independent-review.md`

Non-blocking findings carried forward include the transient Auth/JWKS-class flake, GitHub Actions action-runtime deprecation warning, existing dependency vulnerability backlog, and the pre-existing inventory shared-write-path diagnostic.

## Stage 4 — Mission Control acceptance

**COMPLETE — ACCEPTED — READY FOR FOUNDER MERGE.**

Acceptance and handoff:

`mission-control/06-stage4-acceptance-and-founder-merge-handoff.md`

Mission Control does not self-merge. Founder/human merge of PR `#581` is the next action.

After merge, Mission Control must verify canonical `main`, post-merge Fast Gate/Full Assurance as applicable, archive the live communication pair, restore the reusable live defaults, and durably close the mission.

## Explicit boundaries

This mission does **not** activate `SB-P-1.12`.

This mission does not authorize product features, UX changes, production deployment, production database access, schema/RLS/grant/RPC changes, dependency upgrades/additions, branch-protection changes, scheduled assurance setup, or unrelated cleanup.

The closed `SB-OPS-CI-STABILIZATION-1.0` mission remains closed and archived.