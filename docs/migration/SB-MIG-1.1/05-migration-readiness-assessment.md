Document: Migration Readiness Assessment

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.1

# SB-MIG-1.1 — Migration Readiness Assessment (Audit 7)

Rating scale: **Excellent** · **Good** · **Needs Work** · **Not Ready**. Every rating below is supported by evidence already presented in `01-infrastructure-audit-report.md`, `02-database-comparison-report.md`, and `03-migration-risk-register.md` — cross-referenced by ID rather than re-argued here.

## 1. Repository Readiness — **Needs Work**

**Evidence for:**
- 11 well-structured, individually-reviewable migration files; every table has RLS enabled; a 62-test automated suite exists and is proven (57→62 passing across a real discovered-and-fixed defect, per `docs/implementation/SB-P-1.10/evidence/tests/`); a Markdown documentation quality gate runs in CI.

**Evidence against:**
- MIG-9: no CI workflow runs the build, lint, typecheck, or the test suite — the only automated gate is Markdown-only.
- MIG-10: zero automated test coverage for the transactions/correction-events domain (inventory is the only domain with proven coverage).
- MIG-2: an unresolved discrepancy between the repository's migration file list and what was actually applied to production (migration #3).
- ENV-2: a required runtime secret (`SUPABASE_SERVICE_ROLE_KEY`) has no documented injection mechanism anywhere in the repository.

**Verdict rationale:** the repository has real, demonstrated engineering discipline (the inventory domain's test suite is genuine evidence of rigor), but the gaps above are exactly the kind that turn a migration into an incident — untested domain, no CI safety net, an unexplained migration-history discrepancy, and an undocumented secret. None require new discovery to close; all are scoped, known tasks.

## 2. Database Readiness — **Needs Work**

**Evidence for:**
- Both databases run PostgreSQL 17.6 with an identical installed-extension set; RLS is enabled on every table on both; policy text is identical, word-for-word, on every table both databases share; no storage/realtime/cron drift of any kind.

**Evidence against:**
- MIG-3: Team LIPS Supabase is missing the entire transactions domain — 2 of 6 application tables, 1 of 8 functions, 2 of 9 triggers, 6 of 16 policies simply don't exist there yet.
- MIG-1: the Lovable-managed production database is running the pre-fix, defective version of `create_inventory_movement()` — a known, already-corrected, already-tested defect that has not been deployed to the environment that actually serves users.
- MIG-4: grant-level enforcement is absent (RLS-only) on both databases identically — not a drift, but a standing design characteristic worth deliberate acceptance rather than silent inheritance into the target environment.

**Verdict rationale:** neither database, as currently provisioned, is a complete and correct migration target on its own — Team LIPS Supabase needs the transactions domain applied, and whichever database becomes authoritative needs the idempotency fix deployed. Both gaps are well-understood and each requires exactly one more migration-application step (already-written SQL, already tested against a real database for the idempotency fix; already-written SQL for the transactions domain, needing only the same treatment).

## 3. Authentication Readiness — **Needs Work**

**Evidence for:**
- Application-level auth code (`client.ts`, `client.server.ts`, `auth-middleware.ts`, `auth-attacher.ts`, `use-auth.tsx`, the protected-route guard) is cleanly separated, uses standard Supabase Auth primitives, and is portable to any Supabase project by construction — no Lovable-specific code exists in the *email/password* auth path.
- Both databases show real, working Auth usage (2 users in production, 188 automated-test users in the test project), confirming the mechanism itself functions correctly end-to-end.

**Evidence against:**
- MIG-12: the *Google OAuth* path specifically is implemented through a Lovable-specific integration layer (`src/integrations/lovable/index.ts`, `@lovable.dev/cloud-auth-js`), not native Supabase OAuth — this is real architectural coupling to Lovable that the email/password path does not share.
- MIG-11: Team LIPS Supabase has zero Google-OAuth identities on record — provider configuration parity with production is unconfirmed.
- MIG-7: GoTrue-level settings (leaked-password protection confirmed disabled on Team LIPS Supabase; unknown on the Lovable backend) are not verified as matching between the two projects.

**Verdict rationale:** the dominant, most-used auth path (email/password) is migration-ready by design. The Google OAuth path is not — it is the one place in the entire audited surface where the application code itself, not just infrastructure configuration, depends on Lovable's continued availability.

## 4. Storage Readiness — **Excellent**

**Evidence:**
- Zero storage buckets on either database (directly confirmed via query). Zero Storage-related code anywhere in `src/` (confirmed by exhaustive repository search). Zero Storage-related migrations.

**Verdict rationale:** there is nothing to migrate, nothing to reconcile, and nothing to configure. This is the one dimension of the audit with no open questions and no risk-register entries at all (MIG-14's Edge-Function/Storage manual-verification note is about the *unreachable* Lovable backend's possible undiscovered usage, not about anything found — see the caveat below).

**Caveat:** this rating assumes the Lovable backend genuinely has zero Storage usage, which could not be independently confirmed the same way it was for Team LIPS Supabase (no direct `storage.buckets` query was blocked, and in fact returned 0 rows directly against the Lovable backend too — this was confirmed, not assumed. Re-stated for clarity: **Storage was directly verified as empty on both databases.** Only Edge Functions carry the "unconfirmed on the Lovable side" caveat, tracked separately under Repository/Database readiness via MIG-14.)

## 5. Migration Complexity — **Good**

This axis is rated on how well-understood and bounded the complexity is, not on an abstract difficulty score.

**Evidence for a bounded, tractable migration:**
- Production data volume is small and fully enumerated: 2 businesses, 5 transactions, 4 correction events, 1 inventory item, 0 movements, 2 auth users — 14 business rows plus 2 users, total. A manually-verified, careful migration of this volume is entirely tractable.
- Schema is fully documented (11 migrations, 8 functions, 8 distinct triggers, 16 policies), and this audit has produced a complete, evidence-backed inventory of all of it.
- The one genuinely complex piece (the OAuth/Lovable coupling, MIG-12) is a single, identified, scoped integration point — not a diffuse architectural problem.

**Evidence tempering this rating (why not Excellent):**
- No CI safety net (MIG-9) increases execution risk during the migration itself.
- The transactions domain's total absence of automated tests (MIG-10) means schema changes to it during migration carry real, currently-unmitigated regression risk.

## 6. Rollback Readiness — **Needs Work**

**Evidence for:**
- The Engineering Contract's own design philosophy (documented in the locked EIS, "Migration Safety and Rollback") mandates forward-fix over destructive rollback for the ledger domain — append-only design means a bad movement is corrected by a new movement, never deleted. This is a sound, already-adopted principle at the *application data* level.

**Evidence against / unverified:**
- This audit did not check, and no tool available in this environment directly exposes, either project's backup/Point-In-Time-Recovery (PITR) configuration. **Requires manual verification**: confirm PITR/backup status for both Team LIPS Supabase and the Lovable-managed backend via their respective dashboards before any migration cutover.
- No tested, written rollback procedure exists yet for the *infrastructure* migration itself (i.e., "if cutover to Team LIPS Supabase fails partway, how do we safely revert traffic to the Lovable-managed backend without data loss or duplication") — this is Phase 2 planning work, not yet produced.

**Verdict rationale:** the philosophy is right and the ledger design genuinely helps, but "the ledger doesn't need rollback" is not the same as "the migration has a rollback plan." No backup verification and no written cutover-rollback procedure currently exist.

## 7. Overall Readiness — **Needs Work**

| Dimension | Rating |
| --- | --- |
| Repository Readiness | Needs Work |
| Database Readiness | Needs Work |
| Authentication Readiness | Needs Work |
| Storage Readiness | Excellent |
| Migration Complexity | Good |
| Rollback Readiness | Needs Work |

**Overall: Needs Work — not Not Ready.** Nothing discovered in this audit is rated Critical, nothing represents unrecoverable risk, and every High-severity item in the risk register is a scoped, already-understood task rather than an open unknown requiring further discovery. The foundation is genuinely solid: a well-documented schema, a proven (if partial) automated test methodology, a small and fully-enumerated real dataset, and — critically — this audit itself demonstrates that both target environments are directly inspectable and comparable, which was not true even one mission ago (the SB-AUDIT-1.1 report could not reach the Lovable backend at all).

**Smart Business is not ready to begin Phase 2 execution today.** It is ready to begin Phase 2 **planning** immediately, with the following concretely scoped prerequisites recommended before execution begins (elaborated in `06-recommended-phase-2-execution-plan.md`):

1. Apply the transactions-domain migrations to Team LIPS Supabase (closes MIG-3).
2. Deploy the idempotency-fix migration to production, or decide and document that Team LIPS Supabase (which already has it) becomes authoritative instead (closes MIG-1).
3. Resolve the migration #3 discrepancy — confirm and document why it was never applied, and exclude it from any future replay (closes MIG-2).
4. Identify and document the current `SUPABASE_SERVICE_ROLE_KEY` injection mechanism, and establish its equivalent for the target environment (closes MIG-8/ENV-2).
5. Add CI coverage for build/lint/typecheck/tests (closes MIG-9).
6. Author automated test coverage for the transactions domain (closes MIG-10).
7. Verify Google OAuth provider configuration parity, and replace the Lovable-specific OAuth integration layer with native Supabase OAuth (closes MIG-11, MIG-12).
8. Verify backup/PITR configuration on both projects and produce a written cutover-rollback procedure (closes the Rollback Readiness gap).

None of these require further audit work to define — each is directly actionable from the evidence already gathered in this mission's four other deliverables.
