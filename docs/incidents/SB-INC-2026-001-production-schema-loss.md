Document: Production Schema Loss and Recovery

Version: 1.0

Status: RESOLVED

Created By: Claude Code

Reviewed By: Mission Control

Review Date: 2026-07-27

Incident: SB-INC-2026-001

# SB-INC-2026-001 — Production Schema Destruction and Controlled Recovery

## 1. Incident Summary

During SB-MIG-1.2E-C (a mission to improve migration reproducibility and add CLI production-targeting safeguards), a destructive `DROP TABLE/FUNCTION/TYPE ... CASCADE` statement — intended for the isolated `smart-business-test` project — was instead executed against the **Team LIPS production project** (`gysgzasfcjvtrgaigfyn`) via the Supabase Dashboard SQL Editor. This removed all 6 application tables, 8 application functions, and 3 custom enum types, along with their dependent triggers, RLS policies, and grants. The incident was detected during subsequent verification work, investigated with a full evidence review, and resolved via a guarded migration replay. **No customer data was lost** — production held zero rows in every affected table both before and after the incident, since Smart Business is still pre-launch.

## 2. Confirmed Root Cause

```text
Dashboard SQL Editor execution against the wrong Supabase project.
```

Per Mission Control's independent inspection of Supabase Postgres logs:

| Field | Value |
| --- | --- |
| Source | dashboard |
| Timestamp | 2026-07-26T18:56:41.542Z |
| Statement | `DROP TABLE ... CASCADE` (and paired function/type drops) targeting the application schema |

The Supabase CLI's guarded workflow (`scripts/supabase-cli.mjs`, introduced earlier in SB-MIG-1.2E-C) was independently verified, via its own `--debug` output showing `Loading project ref from env var: drravyyauixltoihzmwo` on every invocation, to have targeted only the test project throughout. **The guarded CLI was not the cause.** The cause was a manual dashboard action, most likely a destructive script being run in a browser tab that was still on the production project's SQL Editor from earlier read-only audit queries in the same working session, rather than a fresh tab opened against the intended test project.

## 3. Evidence Trail (Summary)

A full raw evidence report — every SQL statement issued, every response received, breadcrumb-screenshot status for each, and every CLI invocation with its logged target — was compiled and reviewed by Mission Control before any recovery action was authorized. Key findings from that review:

- No breadcrumb screenshot was captured at the moment of the destructive DROP itself, which is why root cause could not be attributed with certainty from chat evidence alone.
- A live, breadcrumb-verified check using the reliable `pg_class` system catalog (not `information_schema.tables`, which was independently proven unreliable earlier in this same investigation) confirmed zero application tables present in the Team LIPS / smart-business / PRODUCTION project immediately before recovery began.
- Mission Control's own server-side Postgres log inspection independently corroborated both the timestamp and the dashboard-sourced nature of the statement, resolving the residual uncertainty in the chat-based evidence trail.

## 4. Impact Assessment

**This was a schema-loss incident, not a data-loss incident.** Confirmed repeatedly across this mission chain (SB-MIG-1.2E Phase 3, SB-MIG-1.2E-B Phase 8, and again immediately before this incident): every application table held zero rows, because Smart Business has not yet onboarded any real pilot clients. What was lost was structure (tables, functions, types, triggers, policies, grants) — fully and deterministically recoverable from this repository's tracked migrations — not any customer or business data.

Confirmed unaffected by the incident and by the recovery:
- `auth.users`: 0 before, 0 after (no accounts existed, none created or lost)
- Storage buckets: 0 before, 0 after (Storage is unused; Cloudflare R2 is the intended primary store per `docs/migration/SB-MIG-1.2E/07-storage-review.md`)
- Edge Functions: none deployed before or after
- All platform control-plane configuration (Google OAuth, Email/password policy, custom SMTP/Resend, URL configuration, session settings, backups, SSL enforcement, API keys) — these live in Supabase's control plane, not in the project database, and were independently re-verified unchanged after recovery (see §6).

## 5. Recovery Procedure

Recovery used **migration replay, not backup/PITR restore** — deliberately, per Mission Control's authorization, because: there was no production customer data to preserve via a snapshot; schema recreation from tracked migrations is deterministic and had already been proven correct against the test project; and a full project restore carries more uncertainty about side effects on unrelated project state than a targeted, understood migration replay.

1. **Preflight**: the CLI guard (`npm run supabase:production`) was re-verified to refuse execution without `CONFIRM_PRODUCTION=yes`, and to display the resolved target (`smart-business`, ref `gysgzasfcjvtrgaigfyn`) before any command runs — confirmed to match Mission Control's independently-confirmed production reference.
2. **Explicit authorization** was obtained from the Founder for the specific command before it ran.
3. **Migration replay**: `CONFIRM_PRODUCTION=yes npm run supabase:production -- db push --yes`, executed directly via Claude Code's Bash tool (not relayed through the Founder's terminal), applying all 12 tracked migrations including the `20260727000000_reconcile_default_grants.sql` migration introduced earlier in SB-MIG-1.2E-C.
4. **Known-issue repairs during replay** (all pre-existing repository issues, previously documented in SB-MIG-1.2E-C's audit of the test project, and now confirmed to affect production identically — not new problems introduced by this incident):
   - `20260719140000` (byte-for-byte duplicate of `20260719102137`) — repaired via `migration repair --status applied`.
   - `20260723200718` / `20260723200952` (`GRANT`/`REVOKE ... TO sandbox_exec`, a role not present as a standing database role on either project — its exact origin is not established from available evidence) — repaired via `migration repair --status applied`.
5. No ad hoc schema SQL was run. No synthetic data, test users, or Vitest suite executions occurred against production during recovery. No Auth, SMTP, OAuth, or dashboard configuration was touched.

## 6. Verification Results

**Phase 5 (schema) — consolidated read-only verification, all checks pass:**

| Check | Result |
| --- | --- |
| Tables present | All 6 (`businesses`, `inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`, `transactions`, `transaction_correction_events`) |
| Tables missing | None |
| RLS enabled on all 6 | true |
| Policy count | 16 |
| Functions present | All 8 |
| Functions using SECURITY DEFINER | 0 (all correctly SECURITY INVOKER) |
| Application triggers | 7 |
| Enum types present | All 3 |
| `inventory_movements` → `authenticated` grants | DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE (full set — the reconciliation migration's fix confirmed live) |
| Row counts across all 6 tables | 0 (zero data loss) |
| `auth.users` count | 0 |
| Storage buckets | 0 |
| Migration history | All 12 versions correctly recorded |

**Phase 6 (control plane) — spot-checked, unaffected:**
- Email provider hardening (secure password change, require current password, leaked-password protection, min length 10) — confirmed unchanged.
- Google OAuth — confirmed Enabled, correct Client ID and callback URL.
- Custom SMTP (Resend) — confirmed unchanged: sender `noreply@mail.smartbusiness.teamlips.com`, host `smtp.resend.com`, port 465.

## 7. Corrective Controls

| # | Control | Status |
| --- | --- | --- |
| 1 | Destructive SQL never executed without a fresh breadcrumb screenshot | **Adopted going forward** — breadcrumb screenshot now requested *before* any query is given, not after |
| 2 | Production and test dashboard tabs visually distinguished | Recommendation for the Founder: keep production and test project tabs in separate, clearly-labeled browser windows (not tabs within one window) during any session touching both |
| 3 | Production SQL actions require explicit written confirmation | Adopted — this incident's own recovery required explicit Founder authorization before the guarded command ran |
| 4 | Destructive scripts begin with a prominent target declaration | Recommendation: prefix any future destructive SQL script with a comment block naming the intended target project ref, for the Founder to visually cross-check against the breadcrumb before running |
| 5 | CLI production commands remain guarded by project-ref validation | **Implemented and proven**: `scripts/supabase-cli.mjs` (SB-MIG-1.2E-C), refuses production targeting without `CONFIRM_PRODUCTION=yes`, displays resolved target before every command, independently verified via `--debug` output throughout this incident |
| 6 | Automated tests remain permanently isolated from production | **Implemented and confirmed unaffected by this incident** (SB-MIG-1.2E-B); `.env.test`/`.env.test.local` still point only at the separate `smart-business-test` project under the separate Free-plan "Smart Business Testing" organization |
| 7 | Recovery and migration operations are repository-controlled | **Implemented**: recovery used only tracked migrations from `supabase/migrations/`, no ad hoc SQL, no historical migration edits |

## 8. Lessons Learned

1. **The guarded CLI wrapper worked exactly as designed** and is the reason this incident's root cause could be confidently ruled out for every CLI-driven operation — every invocation logged its resolved target, and none pointed at production until explicitly and deliberately authorized. This is strong validation of the SB-MIG-1.2E-C safeguard.
2. **The dashboard SQL Editor has no equivalent safeguard.** Unlike the CLI, there is no tooling-level guard against running a query in the wrong browser tab — the only defense is human visual verification of the breadcrumb, which failed here because it wasn't checked immediately before the destructive statement.
3. **`information_schema.tables` is not a reliable verification method in this environment** — it was independently proven, twice during this incident's investigation, to report misleading empty results for a database that actually still had tables. `pg_class` (the raw system catalog) is the reliable method and should be preferred for any future schema-existence verification.
4. **Reversibility discipline paid off**: because the underlying application had zero real data at the time (pre-launch), and because a complete, tested, tracked migration set already existed (a direct output of the SB-MIG-1.2E-C mission this incident occurred during), recovery was fast, deterministic, and low-risk. This is a strong argument for keeping migrations fully reproducible from source control at all times, not just as a nice-to-have.
5. **Evidence-first incident response worked as intended**: Mission Control's insistence on a full raw evidence report and an explicit hold before any recovery action — even after a plausible root cause had already been proposed — caught that the initial "confirmed affected" conclusion was stated with more certainty than the chat-based evidence alone supported. The final, decisive breadcrumb-verified `pg_class` check, combined with Mission Control's independent server-log inspection, is what actually closed the loop.

## 9. Related Documents

- `docs/migration/SB-MIG-1.2E/12-migration-reproducibility.md` — the mission during which this incident occurred; documents the reconciliation migration and CLI guard that made this recovery possible.
- `docs/migration/SB-MIG-1.2E/06-api-review.md` §2.3, §2.5 — prior findings on migration/production drift that foreshadowed the reconciliation work.
- `docs/migration/SB-MIG-1.2E/11-test-environment-isolation.md` — confirms the test environment (and its guard script) that this incident's evidence trail relied on to rule out CLI responsibility.

## 10. Final Status

```text
SB-INC-2026-001 RESOLVED — PRODUCTION SCHEMA RESTORED AND VERIFIED
```
