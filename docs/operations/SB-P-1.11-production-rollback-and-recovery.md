# SB-P-1.11 Production Rollback and Recovery

**Mission:** SB-P-1.11-PROD-PREP-1 — Production Migration Runbook and Preflight
**Status:** `PREPARED — NOT EXECUTABLE ON ITS OWN — USE ONLY DURING AN AUTHORIZED PRODUCTION EXECUTION MISSION`

> **Lifecycle continuity note (added 2026-09-03, `SB-DOC-1.10-1.11-CONTINUITY-1.0`).** This decision framework's companion migration (`docs/operations/SB-P-1.11-production-migration-runbook.md`) was subsequently executed against production; see that document's own continuity note and `docs/implementation/SB-P-1.10-SB-P-1.11-post-completion-continuity.md`. This document's content is preserved unchanged as the prepared decision framework; whether it was actually invoked during that execution is not established by this audit.

This document does not create or execute a destructive rollback migration. It is a decision framework, prepared in advance so that a real failure during a future, separately authorized execution mission is handled by pre-agreed procedure rather than improvisation under pressure.

---

## 1. Guiding Principle: Why a Simplistic Destructive Rollback Is Wrong Here

The SB-P-1.11 migrations introduce **immutable, append-only history tables** (`catalog_selling_price_events`, `catalog_tax_events`, `catalog_reference_cost_events`, `catalog_product_link_events`, `catalog_audit_events`, `catalog_deletion_records`, `catalog_write_idempotency_keys`) — each protected by a `BEFORE UPDATE`/`BEFORE DELETE` trigger that unconditionally rejects mutation. This is deliberate, accepted architecture (`report1.37.md` LSF-5, SA-6), not an oversight.

The consequence for rollback planning: **once any real row has been written to any of these tables through normal application use, a `DROP TABLE` or destructive `DELETE`-based rollback destroys evidence that the system was specifically designed to make un-destroyable.** A rollback procedure that reaches for `DROP TABLE ... CASCADE` without first confirming zero real rows exist is itself a bigger risk than the failure it responds to.

**Therefore:** every procedure below distinguishes *(a)* a failure with **zero committed application data** (the only case a destructive drop is ever acceptable) from *(b)* a failure or defect discovered **after real merchant data exists** (which requires a forward-fix, never a drop).

---

## 2. Why Most Failure Modes Here Are Self-Healing (Read Before Panicking)

Both migrations are applied via `supabase db push`, which wraps **each migration file in its own single transaction**. This was verified empirically, repeatedly, across the entire SB-P-1.11 non-production verification history (`report1.41.md`, `report1.44.md`): every mid-migration failure encountered during development — a role-creation ordering bug, a missing `ALTER FUNCTION OWNER TO` privilege, a missing schema grant — **rolled back completely and automatically**, leaving **zero partial state**, every single time, with no manual cleanup ever required.

This means:

- A failure **during** Stage 1's transaction leaves production in **exactly its pre-migration state** (the same 6 tables, 12 migrations, nothing catalog-related) — automatically, with no action needed beyond re-running the verification checklist to confirm it.
- A failure **during** Stage 2's transaction leaves production in **exactly the Stage-1-committed state** (11 tables, 7 roles, zero functions) — automatically. This state is itself safe and inert: with zero of the 19 RPCs granted to `authenticated`, none of the new surface is reachable through the application at all.
- **No destructive rollback SQL is ever needed to recover from an in-flight failure.** The only decision required is *whether to retry* (Section 5) — never *how to undo*.

The only scenario requiring an actual destructive or corrective action is a migration that **completes and commits successfully**, but is later found to have introduced a genuine defect discovered only after commit (Section 6) — a materially different, much rarer situation.

---

## 3. Pre-Migration Restore Strategy

Before any execution mission reaches `docs/operations/SB-P-1.11-production-migration-runbook.md` Section 6, Section 4 of that runbook requires confirming:

1. the most recent automatic daily backup timestamp;
2. whether Point-in-Time Recovery (PITR) is enabled, and its retention window;
3. a fresh on-demand manual backup/snapshot, triggered immediately before execution.

Given the production database is 12 MB with zero rows in every pre-existing table (`report1.47.md`), a manual backup completes in seconds and removes any dependency on PITR being enabled. **Do not proceed past runbook Section 4 without this confirmation, regardless of how the two mechanisms above resolve** — this is a named stop condition.

---

## 4. Abort-Before-First-Migration Procedure

If any stop condition in `docs/operations/SB-P-1.11-production-migration-runbook.md` Section 7 triggers **before** Step 6.3 (the apply step) is run:

1. Take no database action of any kind.
2. Unset `CONFIRM_PRODUCTION` if it was set.
3. Record the exact stop condition and the evidence that triggered it.
4. Return to Mission Control with the recorded evidence. No further repository or database action is needed — nothing was touched.

---

## 5. Failure-During-Stage-1 Procedure

**Trigger:** `docs/operations/SB-P-1.11-production-migration-runbook.md` Step 6.3 returns an error while applying `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql`.

1. **Do not re-run `db push` immediately.** Per Section 2, the failed transaction has already rolled back automatically — production is back to its pre-migration state. Confirm this before anything else:
   ```sql
   SELECT count(*) FROM pg_tables WHERE schemaname='public' AND tablename LIKE 'catalog_%';
   SELECT count(*) FROM pg_roles WHERE rolname LIKE 'catalog_%executor';
   SELECT version FROM supabase_migrations.schema_migrations WHERE version IN ('20260806120000','20260806130000');
   ```
   Expected: `0`, `0`, zero rows. **If this does not hold — if any partial catalog object or migration-history row exists — STOP. Do not attempt any further step. This is an unprecedented state; escalate to Founder/Mission Control per Section 9 immediately.**
2. If confirmed clean: capture the exact error text and diagnose the root cause using the same class of investigation used throughout SB-P-1.11-IMPL-1's non-production verification (every prior Stage-1-application defect was a missing grant or ordering bug, always diagnosable from the error message alone — see `report1.41.md` Section 6 for the precedent pattern).
3. **Do not modify the migration file to work around the failure without separate Mission Control authorization** — `instruction1.44.md` §8 prohibits altering production migration history, and any fix to the migration source itself is a repository change requiring the same review path the original migrations went through (`report1.42.md`, `report1.43.md`, `report1.45.md`, `report1.46.md`).
4. Once a fix is authorized and merged through the normal review path, re-run from `docs/operations/SB-P-1.11-production-migration-runbook.md` Section 3 (full re-confirmation), not from Step 6.3 directly.

---

## 6. Failure-Between-Stage-1-and-Stage-2 Procedure

**Trigger:** Stage 1 committed successfully; Stage 2 has not yet been attempted (e.g., the Operator paused between the two, or `db push` applied Stage 1 and then the session ended before Stage 2 ran).

This is a **valid, safe, inert intermediate state** — not a failure. With Stage 2 not yet applied, zero of the 19 RPCs exist, so nothing in the new surface is reachable by any client regardless of how long this state persists. No urgency, no rollback consideration.

1. Confirm the state precisely:
   ```sql
   SELECT count(*) FROM pg_tables WHERE schemaname='public' AND tablename LIKE 'catalog_%'; -- expect 11 (10 catalog_-prefixed + business_tax_settings counted separately, see checklist 1.1 for the exact 11-name list)
   SELECT count(*) FROM pg_roles WHERE rolname LIKE 'catalog_%executor'; -- expect 7
   SELECT count(*) FROM pg_proc p JOIN pg_namespace n ON n.oid=p.pronamespace WHERE n.nspname='public' AND p.proname IN (<19 names>); -- expect 0
   ```
2. Resume with `docs/operations/SB-P-1.11-production-migration-runbook.md` Step 6.2 (dry-run) — it will correctly report only `20260806130000_...` as pending (`db push` tracks each migration's applied status independently; this was verified repeatedly in non-production testing).
3. Proceed to Step 6.3 to apply Stage 2 once ready. No special recovery action is needed for this state itself.

---

## 7. Failure-During-Stage-2 Procedure

**Trigger:** Stage 1 committed successfully; `20260806130000_sb_p_1_11_impl_1_stage2_functions.sql` fails partway through.

1. Confirm the automatic rollback, same pattern as Section 5:
   ```sql
   SELECT count(*) FROM pg_proc p JOIN pg_namespace n ON n.oid=p.pronamespace WHERE n.nspname='public' AND p.proname IN (<19 names>);
   SELECT version FROM supabase_migrations.schema_migrations WHERE version = '20260806130000';
   ```
   Expected: `0`, zero rows. Stage 1's 11 tables and 7 roles remain intact and untouched (confirm via the Section 6 queries) — this is expected and correct, not a defect.
2. **If confirmed clean:** this state is identical in risk profile to Section 6 (Stage 1 committed, Stage 2 not yet present) — safe, inert, no urgency. Diagnose and fix per the same constraints as Section 5 steps 2–4.
3. **If not confirmed clean** (any of the 19 functions partially exists, or `20260806130000` shows as applied despite the error): STOP. Do not attempt further changes. Escalate to Founder/Mission Control per Section 9 — this indicates either a `db push` transactional guarantee did not hold as expected (itself alarming and worth deep investigation) or a `migration repair` state mismatch from a prior, different action.

---

## 8. Forward-Fix Criteria

Given Sections 5–7 establish that every in-flight failure mode self-heals to a safe state, **forward-fix (fix the root cause, then re-apply the pending migration(s)) is the default and strongly preferred response** for any failure discovered before commit. Prefer forward-fix over any form of rollback whenever:

- the failure occurred during Step 6.3 and the automatic-rollback confirmation (Section 5 or 7, step 1) passed;
- the root cause is diagnosable from the error text (the pattern established throughout this mission's entire non-production history — every defect found was a missing grant, ordering issue, or similar, never ambiguous);
- no `businesses`, `inventory_items`, or `inventory_movements` **data** was touched (these migrations never write to those tables' rows — they only add grants and RLS policies, confirmed in `report1.47.md`).

**Rollback of a successfully committed migration** (rather than forward-fix) should only be considered if a defect is discovered **after** commit that is a genuine security or data-integrity issue that cannot safely wait for a forward-fix to be reviewed and merged through the normal path. Given the accepted design fails closed everywhere (every defect found during the entire SB-P-1.11 verification history was a permission error blocking legitimate use, never an over-permissive access — `report1.41.md` §6, `report1.44.md` §13), this scenario is considered unlikely but is not excluded by design.

If rollback of committed DDL is genuinely required: this is **always** a Founder/Mission-Control decision (Section 9), never a unilateral operator action, and must itself be planned as a new, explicitly reviewed migration (a `DROP`/`REVOKE` migration file going through the same review chain), not an ad hoc `psql` session against production.

---

## 9. Point-in-Time Restore Criteria

PITR (or a restore from the confirmed pre-migration backup, Section 3) should be considered **only** if there is evidence that pre-existing table **data** was altered, deleted, or made inconsistent — for example:

- a row disappears from or is unexpectedly modified in `businesses`, `transactions`, `transaction_correction_events`, `inventory_items`, `inventory_movements`, or `inventory_movement_idempotency_keys`;
- `pg_stat_activity` or logs show an unexpected `DELETE`/`UPDATE` against any pre-existing table during the migration window that this runbook did not authorize.

**Neither migration in this package contains any `DELETE` or `UPDATE` statement against a pre-existing table's rows** — confirmed by direct inspection of both migration files. A PITR/restore need arising from *this specific migration package* would therefore indicate either a platform-level incident unrelated to this migration, or that the applied migration content differs from what this runbook documents (itself a stop condition — see runbook Section 6, commit verification). Treat any PITR consideration as **automatically escalating to Section 9 below** — it is never a unilateral operator decision.

---

## 10. Evidence Preservation Requirements

For any failure, rollback consideration, or forward-fix, preserve (do not delete or overwrite):

- the full terminal transcript of the failed attempt;
- the exact error text and, if shown, the statement/line it occurred at;
- the state-confirmation query results from Sections 5–7 (before and after any corrective action);
- the advisor comparison output at the time of failure, if Section 11 of the runbook was reached;
- a copy of the exact migration file content that was attempted (via `git log`/`git show` on the commit used), even if the repository source is later corrected — the historical attempt is evidence, not to be silently rewritten.

---

## 11. Conditions Requiring Founder/Mission Control Decision

The Operator and Observer must escalate rather than act unilaterally whenever:

- the automatic-rollback confirmation (Section 5 or 7) does not pass;
- any partial catalog object, partial function, or unexpected migration-history row is found;
- a fix to either migration file's *source* is being considered (any source change requires the same review chain as the original migrations, not an in-the-moment edit);
- rollback of a successfully committed migration is being considered at all (Section 8);
- PITR or backup restore is being considered at all (Section 9);
- any advisor finding beyond the expected set (runbook Section 11 / checklist Section 5) appears;
- the failure or its evidence does not clearly match any procedure in this document.

No AI agent may make any of the above decisions unilaterally, including this preparation mission's own agent. This document provides the decision framework; it does not pre-authorize any specific rollback, restore, or forward-fix action.
