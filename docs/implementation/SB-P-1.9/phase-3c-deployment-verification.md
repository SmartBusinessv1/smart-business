# SB-P-1.9 — Phase 3C Deployment Verification

- **Mission ID:** SB-P-1.9-P3C
- **Mission Name:** Deployment Verification
- **Reporting Room:** Lovable Engineering
- **Version:** 1.1
- **Status:** PENDING REVIEW
- **Scope:** Deployment verification only. No runtime testing, no code
  changes, no design changes.

---

## 1. Verification Summary

Deployment verification confirms that the approved SB-P-1.9 implementation
has been successfully deployed to the Lovable Cloud environment attached
to this project and is available for Founder-led runtime verification.

- Repository contains the approved implementation commit reference and
  canonical documentation.
- Migration files for SB-P-1.9 are present and applied.
- The `transaction_correction_events` table is deployed with the
  approved columns, constraints, foreign keys, and indexes.
- The `correct_transaction` function is deployed and executes as
  `SECURITY INVOKER` (i.e. under caller RLS, not with owner privileges).
- Row Level Security is enabled on all SB-P-1.9-affected tables.
- Owner-scoped policies exist for transaction updates and for
  correction-event access; no anonymous-role policy was introduced.
- The published site at `https://smartbusiness.teamlips.com` serves the
  latest build; home, sign-in, protected-redirect, and reset-password
  routes render correctly.
- Two non-blocking observations recorded (see Section 8).

**Overall Result:** PASS WITH OBSERVATIONS

---

## 2. Evidence Model (Lovable Cloud)

This project runs on Lovable Cloud. The Lovable Cloud platform does not
expose a Supabase dashboard UI to the workspace, so Supabase-dashboard
screenshots of migration history, the table editor, the function editor,
the RLS toggle, or the policy list cannot be produced for this project.

Per Mission Control's *SB-P-1.9 Phase 3C Evidence Adaptation
Authorization*, the authoritative backend deployment evidence for this
environment is the read-only query output collected directly from the
Postgres catalogs of the attached Lovable Cloud backend. Those outputs
are preserved verbatim as text artifacts under
`docs/implementation/SB-P-1.9/evidence/phase-3c/`. No dashboard
screenshot has been fabricated or substituted.

Evidence in this report is grouped into two categories:

- **Browser Evidence** — screenshots captured against the live published
  site.
- **Backend Evidence (Lovable Cloud Data API)** — text artifacts
  captured directly from the attached Postgres catalogs.

---

## 3. Repository Verification

- Implementation commit of record (from the SB-P-1.9 completion report):
  `2ebd8d8e05ebfaf431bc1946f88843178d4e5a0b`.
- Canonical implementation documents present under
  `docs/implementation/SB-P-1.9/`:
  - `completion-report.md`
  - `scope.md`
  - `engineering-contract.md`
  - `lovable-build-prompt.md`
  - `verification-checklist.md`
- Phase 3C evidence directory:
  `docs/implementation/SB-P-1.9/evidence/phase-3c/`
- Migration files present under `supabase/migrations/`:
  - `20260720142204_3786b8a1-e72a-4ae4-88b3-837b76ce1bf9.sql`
  - `20260720142248_97de5be2-ef9f-4283-9318-9eb9f9a6cca1.sql`

Evidence artifacts:

- `evidence/phase-3c/01_migration_files.txt` — SB-P-1.9 migration filename listing.
- `evidence/phase-3c/02_migration_sql_bodies.txt` — verbatim SQL of both SB-P-1.9 migrations.

---

## 4. Backend Evidence (Lovable Cloud Data API)

### 4.1 `transaction_correction_events` — Table Deployment

Deployed with the approved columns, defaults, constraints, foreign keys,
and indexes:

- Columns: `id`, `transaction_id`, `business_id`, `edited_at`,
  `edited_by`, `original_values`, `updated_values`, `edit_reason`,
  `notification_status` (default `'pending'`), `notification_sent_at`,
  `created_at`, `updated_at`.
- Foreign keys:
  - `business_id` → `public.businesses(id)` `ON DELETE CASCADE`
  - `transaction_id` → `public.transactions(id)` `ON DELETE CASCADE`
- Indexes: primary key on `id`, plus `business_id` and `transaction_id`
  index.

Evidence artifacts:

- `evidence/phase-3c/03_transaction_correction_events_schema.txt`
- `evidence/phase-3c/04_transaction_correction_events_columns.txt`
- `evidence/phase-3c/11_transaction_correction_events_constraints.txt`
- `evidence/phase-3c/12_transaction_correction_events_indexes.txt`

### 4.2 `correct_transaction` — Function Deployment

Function is deployed in schema `public`, language `plpgsql`, with the
approved argument list, and executes as `SECURITY INVOKER` (i.e.
`prosecdef = false` in `pg_proc`). This is the mode required by the
SB-P-1.9 engineering contract: the function runs under caller
privileges, and RLS on `public.transactions` and
`public.transaction_correction_events` enforces owner scoping.

Evidence artifacts:

- `evidence/phase-3c/05_correct_transaction_metadata.txt` — includes the
  `security_definer = f` / `SECURITY INVOKER` result.
- `evidence/phase-3c/06_correct_transaction_definition.txt` — full
  function body via `pg_get_functiondef`.

### 4.3 Row Level Security — Enabled

RLS is enabled on all three SB-P-1.9-affected tables in schema `public`:
`businesses`, `transactions`, and `transaction_correction_events`.

Evidence artifact:

- `evidence/phase-3c/07_rls_enabled.txt`

### 4.4 Row Level Security — Policies

All SB-P-1.9-relevant policies are owner-scoped to `authenticated` and
key off `auth.uid()` (directly or through
`businesses.owner_id = auth.uid()`):

- `public.transactions`
  - `Owners can view their business transactions` — SELECT
  - `Owners can create their business transactions` — INSERT
  - `Owners can update their business transactions` — UPDATE
- `public.transaction_correction_events`
  - `Owners can view their correction events` — SELECT
  - `Owners can record correction events` — INSERT
- `public.businesses`
  - Owner-scoped SELECT, INSERT, UPDATE, DELETE (pre-existing from
    SB-P-1.6; retained unchanged).

Evidence artifact:

- `evidence/phase-3c/08_rls_policies.txt`

### 4.5 No Anonymous-Role Policy Introduced

A direct query against `pg_policies` filtered on `'anon' = ANY(roles)`
returned zero rows for schema `public`. No anonymous-role policy exists
on any SB-P-1.9-affected table, confirming that SB-P-1.9 did not widen
public access.

Evidence artifact:

- `evidence/phase-3c/09_anon_policies_check.txt`

### 4.6 Data API Grants

Table-level ACL entries were captured from `pg_class.relacl` for the
three affected tables. The Lovable Cloud project uses inherited-role
grants at the schema level; per-table `pg_class` ACL shows the standard
Cloud role set present, and access is effectively controlled by the
RLS policies above (anon has no matching policy → no data reach).

Evidence artifact:

- `evidence/phase-3c/10_table_grants.txt`

### 4.7 No Database Deployment Errors

The queries above returned the expected metadata (table present,
function present with the correct security mode, RLS enabled, policies
present, no anonymous policy). No missing-object, permission, or catalog
errors were surfaced while collecting the evidence artifacts. Migration
files corresponding to the schema state above are recorded in the
repository (Section 3) and their contents match the deployed state.

---

## 5. Authentication Verification

- `/auth` deployed. Sign-in form renders, with "Forgot Password?" link
  that switches the form into the recovery-request mode (see
  `src/routes/auth.tsx`).
- `/reset-password` deployed. Route displays the "Set a new password"
  panel and, when accessed without a valid recovery link, shows the
  "This recovery link is invalid or has expired" fallback — confirming
  the recovery-session gating is active (see
  `src/routes/reset-password.tsx`).
- Recovery redirect target is configured in code to
  `${window.location.origin}/reset-password`, resolving to
  `https://smartbusiness.teamlips.com/reset-password`.

Supabase Auth provider-level configuration (email template, allowed
redirect URLs) is managed inside the Lovable Cloud backend and is not
introspectable through the Data API in this environment. It is captured
here at the code level; Founder-side confirmation is expected during
runtime verification.

Evidence artifact:

- `evidence/phase-3c/2_auth.png` (Browser Evidence, Section 6)
- `evidence/phase-3c/4_reset_password.png` (Browser Evidence, Section 6)

---

## 6. Browser Evidence

Captured against the published domain, without runtime testing.

| Route | Result | Evidence |
| --- | --- | --- |
| `/` | Home renders in full. | `evidence/phase-3c/1_home.png` |
| `/auth` | Sign-in + Forgot Password visible. | `evidence/phase-3c/2_auth.png` |
| `/dashboard` (signed out) | Redirects to `/auth`. | `evidence/phase-3c/3_dashboard_redirect.png` |
| `/reset-password` (no token) | Shows "invalid or expired" recovery state. | `evidence/phase-3c/4_reset_password.png` |

---

## 7. Complete Evidence Inventory

### 7.1 Browser Evidence

| # | File | Finding |
| --- | --- | --- |
| B-01 | `evidence/phase-3c/1_home.png` | Home page loads on the live domain. |
| B-02 | `evidence/phase-3c/2_auth.png` | Sign-in and Forgot Password flow deployed. |
| B-03 | `evidence/phase-3c/3_dashboard_redirect.png` | Protected route redirects unauthenticated users to `/auth`. |
| B-04 | `evidence/phase-3c/4_reset_password.png` | `/reset-password` route deployed with recovery-link guard. |

### 7.2 Backend Evidence (Lovable Cloud Data API)

| # | File | Finding |
| --- | --- | --- |
| BE-01 | `evidence/phase-3c/01_migration_files.txt` | SB-P-1.9 migration files present in repository. |
| BE-02 | `evidence/phase-3c/02_migration_sql_bodies.txt` | Verbatim SQL of the two SB-P-1.9 migrations. |
| BE-03 | `evidence/phase-3c/03_transaction_correction_events_schema.txt` | Deployed schema of `transaction_correction_events` (columns, FKs, indexes, policies). |
| BE-04 | `evidence/phase-3c/04_transaction_correction_events_columns.txt` | Column-level view of `transaction_correction_events`. |
| BE-05 | `evidence/phase-3c/05_correct_transaction_metadata.txt` | `correct_transaction` present; `security_definer = f`; `SECURITY INVOKER`. |
| BE-06 | `evidence/phase-3c/06_correct_transaction_definition.txt` | Full function definition from `pg_get_functiondef`. |
| BE-07 | `evidence/phase-3c/07_rls_enabled.txt` | RLS enabled on `businesses`, `transactions`, `transaction_correction_events`. |
| BE-08 | `evidence/phase-3c/08_rls_policies.txt` | Owner-scoped policies for transactions and correction events. |
| BE-09 | `evidence/phase-3c/09_anon_policies_check.txt` | Zero anonymous-role policies on `public` tables. |
| BE-10 | `evidence/phase-3c/10_table_grants.txt` | Table-level ACL entries for the three affected tables. |
| BE-11 | `evidence/phase-3c/11_transaction_correction_events_constraints.txt` | Constraints (PK, FKs, NOT NULLs) on `transaction_correction_events`. |
| BE-12 | `evidence/phase-3c/12_transaction_correction_events_indexes.txt` | Indexes on `transaction_correction_events`. |

---

## 8. Observations

**OBS-P3C-01 — Non-blocking. Hydration warning on `/reset-password`.**

When `/reset-password` is loaded directly (no recovery token), the
browser console records a single React hydration warning
(`Minified React error #418`). The page renders correctly and the
"invalid or expired" fallback is displayed as designed. The warning
appears to originate from the recovery-session probe running during
client hydration.

- Impact: cosmetic; no user-visible failure, no impact on the recovery
  flow.
- Scope: outside SB-P-1.9 Phase 3C authority. Recorded for future
  Mission Control triage. No fix applied.

**OBS-P3C-02 — Non-blocking. WhatsApp delivery still pending.**

Consistent with the SB-P-1.9 completion report: correction events are
recorded with `notification_status = 'pending'`. The WhatsApp delivery
worker is out of scope for SB-P-1.9 and is not part of Phase 3C
verification.

---

## 9. Risks

None identified for Phase 3C deployment. Any change to authentication or
transaction-correction functionality after this report is filed would
invalidate this verification and require a repeat.

---

## 10. Overall Result

**PASS WITH OBSERVATIONS.**

Every required deployment claim is backed by a corresponding evidence
artifact (Section 7). Two non-blocking observations recorded in Section
8. Mission Control decisions are outside the scope of this report.

---

DEPLOYMENT VERIFICATION COMPLETE. Awaiting Founder Authorization for
Phase 4.
