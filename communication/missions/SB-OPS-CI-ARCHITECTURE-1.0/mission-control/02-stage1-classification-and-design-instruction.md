# SB-OPS-CI-ARCHITECTURE-1.0 — Stage 1 Classification and Design

**Stage:** `1 — CI/Test Classification and Implementation Design`
**Assigned specialist:** Claude Code
**Status:** `ACTIVE`
**Date:** 2026-09-15

Activation PR `#580` is merged. Canonical `main` is `f92d2160cc820f24bd93af31187430622f45155f`.

Work on `mission/SB-OPS-CI-ARCHITECTURE-1.0-stage1`.

## Objective

Inspect the current CI and test estate and design a two-speed model:

- Fast Gate for every pull request.
- Full Assurance for environment-dependent integration, security and database checks at relevant boundaries.

Stage 1 is investigation and design only.

## Required analysis

Classify every existing automated test file as applicable: local/environment-independent, Supabase-dependent, real-HTTP, authorization/RLS, database behavior, concurrency, performance, provider/integration, shared-state-sensitive, or uncertain.

Identify the exact test subset suitable for the Fast Gate and the exact subset that belongs in Full Assurance.

Design explicit path/risk rules for when Full Assurance must run. Documentation-only communication PRs should not invoke the full environment-dependent suite unless they also touch CI, test, application, database, security or integration-relevant paths.

Review the flaky assertion in `tests/catalog-import/real-http.test.ts` that compares a global `catalog_import_batches` count. Propose a run-scoped or fixture-scoped assertion that preserves the security intent.

## Deliverable

Create `communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/claude-code/01-stage1-classification-and-design.md` containing:

1. complete test classification table;
2. current workflow observations;
3. Fast Gate composition;
4. Full Assurance composition;
5. triggering/path-filter model;
6. shared-state/flakiness findings;
7. exact Stage 2 file-change plan;
8. risks and tradeoffs;
9. decisions needed from Mission Control or Founder.

Update only the minimum mission README, handover log and live report needed for the Stage 1 handoff.

Do not change application code, test code, workflow YAML, package scripts, dependencies, lockfiles, database/provider state, deployments, branch protection, Product Truth, governance, or Product Mission state in Stage 1.

Do not activate `SB-P-1.12`. Do not self-approve or self-merge.

Publish the Stage 1 documentation-only evidence to the working branch, then stop for Mission Control.
