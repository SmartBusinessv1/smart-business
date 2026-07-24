Document: Production Configuration Report

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2

# SB-MIG-1.2 — Production Configuration Report (Task 4)

Verifies production readiness of the Team LIPS Supabase project across authentication, RLS, extensions, storage, realtime, functions, triggers, and indexes. All checks below were run after Task 1 (transactions domain applied) and Task 3 (test data cleared).

## 1. Authentication

| Check | Result |
| --- | --- |
| `auth.users` row count (post-cleanup) | 0 — clean, ready to receive real accounts |
| Auth mechanism (application-level) | Unaffected by this mission; unchanged from SB-MIG-1.1's findings — email/password path is fully portable, Google OAuth path depends on a Lovable-specific integration layer (MIG-12, unresolved, out of scope here) |
| GoTrue-level settings (email confirmation policy, session lifetime, OAuth provider config) | **Not directly inspectable via any tool available in this environment.** Security advisor returned zero findings related to Auth settings at the time of this check (see §8 note on the leaked-password-protection finding) |
| Google OAuth provider configured on this project | **Unverified.** No Google-identity data exists post-cleanup to infer from (it was all cleared); this was already an open item in SB-MIG-1.1 (MIG-11) and remains open — **requires manual verification** via the Supabase dashboard |

**Gap: Google OAuth provider configuration parity is still unverified.** This is a genuine remaining production gap, not resolved by this mission.

## 2. Row-Level Security

| Check | Result |
| --- | --- |
| Tables with RLS enabled | 6 of 6 (100%) |
| Tables missing RLS | None |
| Policy count | 16, matching the repository's full migration history exactly |
| Policy text drift vs. repository | None found (see `02-target-environment-verification-report.md` §2.6) |

**No gap.** RLS coverage is complete and verified drift-free.

## 3. Extensions

| Extension | Installed | Matches repository requirement |
| --- | --- | --- |
| `pgcrypto` | Yes (1.3, schema `extensions`) | Yes — required by `create_inventory_movement`'s `digest()` call |
| `uuid-ossp` | Yes (1.1, schema `extensions`) | Yes |
| `plpgsql` | Yes (1.0) | Yes — required for all PL/pgSQL functions |
| `supabase_vault` | Yes (0.3.1) | Yes — Supabase-platform default |
| `pg_stat_statements` | Yes (1.11) | Yes — Supabase-platform default |
| `pg_cron` | Not installed | Consistent — no cron jobs are defined anywhere in the repository |

**No gap.** Extension set matches what the repository's migrations actually require, with no missing or extraneous extensions.

## 4. Storage

| Check | Result |
| --- | --- |
| Storage buckets | 0 |
| Repository Storage usage | None (confirmed in SB-MIG-1.1 Audit 1 — no bucket-creation SQL, no client-side Storage usage anywhere in `src/`) |

**No gap.** Nothing to configure; consistent with the application's current design.

## 5. Realtime

| Check | Result |
| --- | --- |
| Tables in any realtime publication | 0 |
| Repository Realtime usage | None (no client-side Realtime subscription code found anywhere in `src/`) |

**No gap.** Nothing to configure; consistent with the application's current design.

## 6. SQL Functions

All 8 functions present and verified against the repository's current (post-fix) definitions — see `02-target-environment-verification-report.md` §2.2 for full detail. Notably, `create_inventory_movement()` on this project already carries the idempotency-replay fix that the current production (Lovable-managed) database does not.

**No gap** on this project specifically. The gap is on the *other* environment (current production), tracked as MIG-1.

## 7. Triggers

All 7 triggers present and correctly attached, matching the repository exactly (`02-target-environment-verification-report.md` §2.3).

**No gap.**

## 8. Indexes

All 22 indexes present and verified identical (name, columns, uniqueness, partial-index conditions) to the repository's migration DDL (`02-target-environment-verification-report.md` §2.4).

Performance advisor findings (informational, not blocking):

- **3 unindexed foreign keys** (`inventory_movements_correcting_of_fk`, `inventory_movements_item_business_fk`, and — new since the transactions domain was applied this mission — `transactions_creator_id_fkey`). All INFO-level; performance-only, not correctness. Already tracked as MIG-5 in the SB-MIG-1.1 risk register (Low severity); the third instance is the same category of finding, not a new class of issue.
- **16 `auth_rls_initplan` WARNs** — every RLS policy on this project (all 16, now including the 6 newly-applied transactions-domain policies) calls `auth.uid()`/`current_setting()` directly rather than wrapped in `(select auth.uid())`. Already tracked as MIG-6 in the SB-MIG-1.1 risk register (Low–Medium severity, performance-only). Not fixed by this mission — rewriting RLS policy text is a schema/security-object change outside this mission's "prepare, don't redesign" mandate, and MIG-6 was not rated High severity in the risk register this mission was scoped to resolve.
- **6 unused indexes** (INFO level) — expected and not meaningful: every table was just truncated to zero rows in Task 3, so no index has been exercised by any query yet. Not evidence of a genuine unused-index problem.

**No gap requiring action under this mission's scope.** Both the FK-index and RLS-initplan findings are pre-existing, already-tracked, non-blocking performance items — not something this "preparation and hardening" mission introduced, and not High-severity items this mission was tasked to resolve.

**Note on the security advisor.** At the time of this check, the Supabase security advisor returned **zero** findings for this project — the "Leaked Password Protection Disabled" WARN recorded in SB-MIG-1.1 (MIG-7) did not reappear on this run. This mission made no change to any Auth setting; the change in advisor output is reported as observed, not explained, since this environment has no tool to directly inspect or confirm GoTrue settings independent of the advisor tool itself. **Recommend a manual dashboard confirmation of the leaked-password-protection setting before treating MIG-7 as closed.**

## 9. Summary of Remaining Production Gaps

| Gap | Severity (per SB-MIG-1.1 framework) | Status |
| --- | --- | --- |
| Google OAuth provider configuration parity unverified | Medium (MIG-11) | Open — requires manual dashboard verification |
| GoTrue settings (session lifetime, email-confirmation policy) unverified | Medium (MIG-7, partially) | Open — requires manual dashboard verification; advisor-level leaked-password-protection signal is currently clean but unconfirmed independently |
| Unindexed foreign keys (3, including 1 new) | Low (MIG-5) | Tracked, non-blocking |
| RLS policies not using `(select auth.uid())` pattern (16, including 6 new) | Low–Medium (MIG-6) | Tracked, non-blocking, out of this mission's scope |

No High-severity production-configuration gap remains open on the Team LIPS Supabase project itself. The remaining gaps are either Medium-severity items requiring manual dashboard access this environment doesn't have, or Low-severity, already-tracked performance items explicitly out of this mission's scope to fix.
