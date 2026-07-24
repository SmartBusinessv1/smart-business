Document: Recommended Phase 2 Execution Plan

Version: 1.0

Status: DRAFT — recommendation only, submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.1

# SB-MIG-1.1 — Recommended Phase 2 Execution Plan

**This document authorizes nothing.** SB-MIG-1.1 is a discovery-and-documentation-only mission; no infrastructure change, migration execution, or repository change is authorized by this deliverable. Every item below is a recommendation for a future, separately authorized mission. Sequencing reflects dependency order, not commitment to timeline.

## 1. Purpose

This plan translates the findings of `01-infrastructure-audit-report.md`, `02-database-comparison-report.md`, `03-migration-risk-register.md`, `04-environment-variable-inventory.md`, and `05-migration-readiness-assessment.md` into a proposed, ordered set of missions that would resolve every High- and Medium-severity item in the risk register and move Overall Readiness from **Needs Work** toward **Good**.

## 2. Proposed Mission Sequence

### Phase 2A — Close database and repository gaps (parallelizable)

| # | Proposed Mission | Closes | Scope |
| - | --- | --- | --- |
| 1 | Apply transactions-domain migrations to Team LIPS Supabase | MIG-3 | Apply migrations #2, #4, #5 (or their equivalent unmodified SQL) to `gysgzasfcjvtrgaigfyn`, matching the same "apply unmodified, exclude what doesn't apply" discipline used for the inventory domain under SB-P-1.10-TESTS-1.0. Re-run the schema comparison in `02-database-comparison-report.md` afterward to confirm parity with production. |
| 2 | Deploy the idempotency-replay fix to production | MIG-1 | Apply migration #11 (already written, already tested) to the Lovable-managed backend. Requires an explicit Mission Control decision first: is the Lovable-managed backend still being patched directly, or does Team LIPS Supabase become authoritative instead and the fix is simply already there? This decision gates whether this task is "deploy to Lovable" or "no action, already correct on the migration target." |
| 3 | Resolve the migration #3 discrepancy | MIG-2 | Investigate why `20260719140000_f24b4d69-...sql` has no corresponding `supabase_migrations.schema_migrations` entry in production. Document the finding. Explicitly exclude it from any future full-history replay onto a new target unless the investigation concludes it should be included in modified form. |
| 4 | Document the service-role-key injection mechanism | MIG-8 / ENV-2 | Identify how `SUPABASE_SERVICE_ROLE_KEY` currently reaches the Lovable-managed runtime. Document the equivalent mechanism needed for the target hosting environment. Obtain Team LIPS Supabase's own service-role key through its dashboard and establish secure storage for it in the new environment — never commit it, never route it through a channel this repository can read. |
| 5 | Add CI coverage for build/lint/typecheck/test | MIG-9 | Add a GitHub Actions workflow running `npx tsc --noEmit`, `npm run lint`, and `npm run test` on pushes/PRs touching `src/`, `tests/`, or `supabase/migrations/` — mirroring the existing `markdown-quality-gate.yml` pattern (path-scoped triggers, clear pass/fail). |

### Phase 2B — Close test-coverage and auth gaps (depends on 2A item 1 for transactions-domain schema to exist on the test target)

| # | Proposed Mission | Closes | Scope |
| - | --- | --- | --- |
| 6 | Author automated test coverage for the transactions/correction-events domain | MIG-10 | Mirror the SB-P-1.10-TESTS-1.0 methodology exactly: real signed-in test users against Team LIPS Supabase, one test file per meaningful obligation (transaction creation, correction via `correct_transaction()`, RLS isolation, audit-trail integrity, permission enforcement). Depends on Phase 2A item 1 (transactions schema must exist on the test project first). |
| 7 | Verify and configure Google OAuth parity | MIG-11 | Confirm Google OAuth client configuration (ID, secret, authorized redirect URLs) on Team LIPS Supabase matches production. Test an actual Google sign-in against it. |
| 8 | Replace the Lovable-specific OAuth integration layer | MIG-12 | Replace `src/integrations/lovable/index.ts`'s use of `@lovable.dev/cloud-auth-js` with native `supabase.auth.signInWithOAuth(...)`. This is the one code change in this entire plan that touches `src/` application code rather than infrastructure/CI — scope it as its own reviewable, testable change, verified against both the email/password path (must remain unaffected) and the Google path (must continue to work end-to-end). |
| 9 | Verify GoTrue-level Auth settings parity | MIG-7 | Compare leaked-password protection, email-confirmation policy, and session lifetime settings between the two projects' dashboards; align before cutover. |

### Phase 2C — Rollback and cutover planning (depends on 2A and 2B substantially complete)

| # | Proposed Mission | Closes | Scope |
| - | --- | --- | --- |
| 10 | Verify backup/PITR configuration on both projects | Rollback Readiness gap | Confirm via each project's dashboard whether Point-In-Time Recovery or scheduled backups are enabled, and at what retention. Document current state — this audit could not determine it via the tools available. |
| 11 | Author a written cutover-and-rollback procedure | Rollback Readiness gap | A step-by-step plan for the actual traffic/environment cutover, including an explicit "if step N fails, do X to safely revert" for each major step (DNS/domain repointing, environment-variable swap, final data sync). Should explicitly account for the custom-domain question raised by MIG-13. |
| 12 | Manually verify Edge Functions / Storage on the Lovable backend | MIG-14 | Confirm via the Lovable or Supabase dashboard that no Edge Functions or Storage buckets exist on `wwgqnshcgbukqczqblsm` beyond what this audit could observe from outside. |
| 13 | Resolve the published-domain discrepancy | MIG-13 | Confirm whether `smartbusiness.teamlips.com` is a custom domain mapped onto the Lovable-hosted preview, and what happens to it if Lovable is disconnected in a later phase. |

### Phase 2D — Data migration (final step, depends on all above)

| # | Proposed Mission | Scope |
| - | --- | --- |
| 14 | Migrate production data | Migrate the Lovable backend's real data (2 businesses, 5 transactions, 4 correction events, 1 inventory item, 2 auth users — see `02-database-comparison-report.md` §4.2) to the now-schema-complete, now-fixed, now-tested Team LIPS Supabase (or vice versa, depending on which environment Mission Control designates as the final target). Given the small, fully-enumerated volume, this should be a manually-verified, row-by-row-checkable operation, not a bulk/automated bulk-copy — consistent with this audit's recommendation that Team LIPS Supabase's current (test-only) data be cleared first (see `02-database-comparison-report.md` §4.1). |

## 3. What This Plan Deliberately Does Not Include

- **Reconnecting or disconnecting Lovable** — outside this mission's and (as far as this audit can tell) SB-MIG-1.0's currently-authorized scope; would need its own explicit Mission Control authorization when the time comes, informed by the OAuth-coupling finding (MIG-12) above.
- **Any RLS-policy rewrite** for the `auth_rls_initplan` performance findings (MIG-6) or the grant-hardening idea (MIG-4) — both are real but non-blocking; recommended as their own, later, lower-priority mission rather than bundled into migration-critical-path work.
- **A decision on which Supabase project is ultimately authoritative** — this plan is written to work either direction (Lovable-managed backend gets patched and becomes the migration source; or Team LIPS Supabase gets completed and becomes the target) because that decision has not been made in any document this audit could find, and making it is a governance decision for Mission Control, not an audit finding.

## 4. Summary

Thirteen scoped tasks (plus the final data-migration step) fully resolve every risk-register item raised in `03-migration-risk-register.md`. None require further discovery — every task above cites the exact evidence and exact artifact (existing migration file, existing test-suite pattern, existing code location) needed to execute it. Phase 2 planning can begin immediately; Phase 2 execution should not begin until Mission Control has authorized the specific missions above and decided the authoritative-environment question in §3.
