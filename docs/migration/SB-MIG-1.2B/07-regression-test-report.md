Document: Regression and Dependency Test Report

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2B

# SB-MIG-1.2B — Regression and Dependency Test Report (Tasks 6 & 7)

## 1. Dependency Review (Task 6)

A repository-wide search for `lovable` (case-insensitive) across `src/` found 6 files referencing the term. Each was individually classified:

| File | Relation to the OAuth broker removed this mission | Action |
| --- | --- | --- |
| `src/integrations/lovable/index.ts` | **The OAuth broker itself** — wraps `createLovableAuth()` from `@lovable.dev/cloud-auth-js`; exported `lovable.auth.signInWithOAuth(...)` was the function `auth.tsx` called before this mission's change | No longer referenced anywhere else in `src/` (confirmed by the same search, post-change). **Left in place, not deleted** — see rationale below. |
| `src/lib/lovable-error-reporting.ts` | Unrelated — a generic error-reporting integration (`window.__lovableEvents?.captureException`) used by the app's root error boundary | Untouched, out of scope |
| `src/routes/__root.tsx` | Unrelated — imports `reportLovableError` (the error-reporting helper above), not the OAuth broker | Untouched, out of scope |
| `src/integrations/supabase/client.ts` | Unrelated — a string literal in an error message ("Connect Supabase in Lovable Cloud") shown if Supabase env vars are missing | Untouched, out of scope |
| `src/integrations/supabase/client.server.ts` | Same as above (server-side counterpart) | Untouched, out of scope |
| `src/integrations/supabase/auth-middleware.ts` | Same as above | Untouched, out of scope |

`package.json` still declares `"@lovable.dev/cloud-auth-js": "^1.1.2"` as a dependency, and `src/integrations/lovable/index.ts` (an auto-generated file explicitly marked "Do not modify it") still exists, now with zero application-code callers.

**Decision: defer removal of both**, rather than delete them as part of this mission. Reasoning:

- The mission's Locked Decisions keep the application **hosted through Lovable** for this mission ("No frontend hosting migration is authorized"). Lovable's own build/preview tooling may depend on this auto-generated integration file existing, in ways not fully knowable from this repository alone — removing it carries a real, not hypothetical, risk of breaking the Lovable-hosted build for reasons outside this mission's visibility.
- The mission's Task 6 instruction is to "review," not to mandate removal — an unused import was removed from `auth.tsx` (the file this mission is authorized to change); the broader package/generated-file removal is a separate, independently-verifiable cleanup step better scoped to a future mission once the app is no longer Lovable-hosted (at which point removing it is unambiguously safe).
- Leaving it in place has no runtime cost to the new native-OAuth flow and introduces no security exposure (the file contains no secret — confirmed in `05-security-verification.md`).

This is recorded as a deliberate scope boundary, not an oversight.

## 2. Automated Verification (Task 7)

All four required checks were executed against the working tree with only `src/routes/auth.tsx` modified (verified via `git status`/`git diff --stat` immediately before each run).

| Check | Command | Result |
| --- | --- | --- |
| TypeScript | `npx tsc --noEmit` | **Pass** — exit 0, zero errors |
| ESLint | `npx eslint src/routes/auth.tsx` | 288 problems reported, **all** attributable to a single rule: `prettier/prettier` (confirmed via `--format json`, extracting the unique rule IDs — only `prettier/prettier` appears). This is the same pre-existing, repository-wide CRLF line-ending condition documented in every prior audit this session (byte-level confirmed in this mission: the file uses CRLF consistently both before and after the edit, matching every other file in the repo). **Zero logic or style violations introduced by this change.** |
| Production build | `npm run build` | **Pass** — build completes successfully (`✓ built in 2.22s`, Nitro output generated). Incidentally regenerates `src/routeTree.gen.ts` with unrelated TanStack Start type-registration boilerplate each time it runs; this file was reverted via `git checkout -- src/routeTree.gen.ts` after every build/dev-server run in this mission to keep the diff scoped to the intended change, and `tsc --noEmit` was re-confirmed passing after each revert. |
| Vitest | `npm run test` | **Pass — 62/62 tests, 17/17 test files.** `Test Files 17 passed (17)`, `Tests 62 passed (62)`. |

## 3. Email/Password, Signup, and Forgot-Password Paths: Unaffected

Confirmed **by diff inspection**, the strongest available evidence short of live credentialed testing (see `06-runtime-test-report.md` §7 for why live credentialed testing was not performed):

- `git diff src/routes/auth.tsx` shows exactly two changes: removal of the `import { lovable } from "@/integrations/lovable"` line, and replacement of `handleGoogle()`'s body.
- `handleEmailSubmit` (the function backing sign-in, sign-up, and password-recovery submission) has **zero lines changed** — confirmed by its absence from the diff.
- Runtime-verified separately (`06-runtime-test-report.md` §3): the sign-up and forgot-password mode-switch UI, which is rendered by the same component and would visibly break if the file's structure were disturbed, continues to render and navigate correctly.
- The 62 passing Vitest tests exercise the Inventory Foundation's database layer (RLS, ledger correctness, permissions, etc.) and do not cover the auth UI directly, so they are corroborating evidence that nothing else in the application broke, not direct evidence for the auth forms themselves — direct evidence for the auth forms is the diff-scope and runtime checks above.

## 4. Summary

| Requirement | Status |
| --- | --- |
| TypeScript compiles | Pass |
| ESLint: no new issues | Pass (288 pre-existing CRLF-only, zero new) |
| Production build succeeds | Pass |
| Vitest: 62/62 | Pass |
| Email/password/signup/forgot-password unaffected | Confirmed by diff scope + runtime mode-switch checks |
| Dependency review complete, decision recorded | Complete — removal deferred, reasoning documented above |
