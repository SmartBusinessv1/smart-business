Document: Regression Report

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2D

# SB-MIG-1.2D — Regression Verification (Task 7)

All checks run with the working tree's only change being `.env` (repo-root, tracked) — confirmed via `git status`/`git diff --stat` before and after each run.

## 1. TypeScript

`npx tsc --noEmit` → **Pass, exit 0, zero errors.**

## 2. ESLint

`npx eslint src/` → 10,277 problems reported, spanning exactly **two** rule IDs (confirmed via `--format json`, extracting unique rule identifiers): `prettier/prettier` (the pre-existing, repository-wide CRLF line-ending condition documented in every prior mission's audit this session) and `react-refresh/only-export-components` (a pre-existing repository pattern, unrelated to this mission — this mission's diff touches zero `.ts`/`.tsx` files, so neither rule's count can be attributable to anything this mission changed). **Zero new issues.**

## 3. Production Build

`npm run build` → **Pass** (`✓ built in 2.49s`, Nitro output generated successfully). As in every prior mission this session, the build incidentally regenerates `src/routeTree.gen.ts` with unrelated TanStack Start type-registration boilerplate; this was reverted via `git checkout -- src/routeTree.gen.ts` immediately afterward, and `tsc --noEmit` was re-confirmed passing post-revert, keeping the diff scoped to `.env` only.

## 4. Vitest

`npm run test` → **62/62 tests passing, 17/17 test files**, run directly against Team LIPS Supabase (`SUPABASE_TEST_URL` in `.env.test`, unaffected by this mission's `.env` change — the test suite has always targeted this project independently, per `SB-MIG-1.2A/06-environment-cutover-map.md` §3). This is the expected result and directly confirms this mission's own completion criterion.

## 5. Existing Integration Suite

The Vitest suite (§4) **is** the existing integration suite referenced by this task — there is no separate integration-test tooling in this repository beyond it. No regression observed in any of its 17 files, covering ledger correctness, permissions, RLS cross-business isolation, correction behavior, audit integrity, business isolation, negative-stock handling, performance bounds, concurrency, movement-type invariants, opening-stock invariants, correction-link integrity, cross-business consistency, archived-item protection, idempotency conflict handling, trusted event-link contracts, and shared write-path enforcement.

## 6. Regressions Found

**None.** This mission's only source-of-truth change (`.env`, repointing the local/dev-facing Supabase target) has zero effect on any of the four checks above by construction: `tsc`/`eslint` operate on source files this mission never touched; `npm run build` succeeds identically regardless of which Supabase project `.env` points at (the build doesn't make network calls); and `npm run test` was already targeting Team LIPS Supabase independently of this mission's `.env` change.

## 7. Summary

| Check | Result |
| --- | --- |
| TypeScript | Pass, 0 errors |
| ESLint | 10,277 pre-existing issues (2 known rules), 0 new |
| Production build | Pass |
| Vitest | **62/62**, 17/17 files |
| Existing integration suite | Covered by Vitest — no regression |
