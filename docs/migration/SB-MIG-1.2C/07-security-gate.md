Document: Infrastructure Security Gate

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2C

# SB-MIG-1.2C — Infrastructure Security Gate (Task 7)

Per this mission's Locked Decision ("Canonical Security: Repository RLS policies remain unchanged"), this is a **verification gate, not a remediation pass** — findings are recorded precisely; none are fixed here.

## 1. Row-Level Security

**Verified: RLS enabled on 100% of tables (6 of 6)** — `businesses`, `inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`, `transactions`, `transaction_correction_events` (`list_tables`, `rls_enabled: true` on every row). Matches the repository's migrations with zero drift — consistent with SB-MIG-1.2's `02-target-environment-verification-report.md` finding, re-confirmed here.

## 2. Authentication Enabled

**Verified.** The project's Auth service is live and responding (confirmed via the `/auth/v1/authorize` probes in `03-google-oauth-verification.md` and via `get_logs` showing active, healthy auth traffic from the recent test-suite run). Email/password auth is functioning (60 successful `200` responses observed in auth logs, all from legitimate test-suite sign-up/sign-in flows).

## 3. SQL Functions Protected

**Verified, with one minor observation.** All 8 `public`-schema functions are `SECURITY INVOKER` (`prosecdef = false`), owned by `postgres` — none run with elevated definer privileges, consistent with SB-MIG-1.2's confirmation that `correct_transaction()` was switched to invoker form. The two functions callable with business-meaningful parameters that could affect data (`create_inventory_movement`, `correct_transaction`) are correctly scoped: `REVOKE ALL FROM PUBLIC` + `GRANT EXECUTE TO authenticated` only, matching the migration source exactly.

**Minor observation (not a vulnerability, recorded for completeness):** three trigger-only functions (`inventory_items_guard`, `inventory_movements_reject_mutation`, `update_updated_at_column`) retain a `PUBLIC` EXECUTE grant, Postgres's own default for newly created functions. These take no meaningful caller-supplied arguments and rely on trigger context (`NEW`/`OLD`) to operate — a direct call outside trigger context is not a realistic attack path, and revoking `PUBLIC` from them is a schema change this mission's Locked Decision does not authorize. Flagged for awareness only.

## 4. Edge Functions Protected

**Not applicable — no Edge Functions exist.** `list_edge_functions` returns an empty list; there is nothing to verify protection for.

## 5. Storage Policies

**Not applicable — Storage is unused.** `storage.buckets` contains 0 rows. No bucket, no policy surface to verify.

## 6. OAuth Provider Configuration

**See `03-google-oauth-verification.md` in full.** Summary: Google provider confirmed not enabled on Team LIPS Supabase — a configuration gap, not a security weakness (the provider being *off* cannot itself be exploited; it simply means Google sign-in doesn't work yet).

## 7. HTTPS Usage

**Verified.** Team LIPS Supabase's API URL (`get_project_url`) is `https://gysgzasfcjvtrgaigfyn.supabase.co` — HTTPS by Supabase platform default, not independently configurable to plain HTTP. The Lovable published domain (`https://governed-growth-path.lovable.app`, confirmed in prior missions) is also HTTPS. No HTTP-only endpoint identified anywhere in this mission's checks.

## 8. Redirect Safety

**Verified by design, unchanged since SB-MIG-1.2B.** Supabase Auth rejects any `redirectTo` value not present in the project's own redirect-URL allow-list, regardless of what the client sends — a platform-level control, not something application code could bypass. The allow-list's actual contents are a dashboard-configuration item (`03-google-oauth-verification.md`), not a code-security question.

## 9. Origin Restrictions

**Verified — no anomaly.** No custom CORS configuration was found in the repository beyond Supabase's own platform defaults (which restrict browser access to the anon/publishable-key tier, never the service-role tier, regardless of origin). No wildcard or overly permissive origin configuration was identified in any file reviewed this mission.

## 10. Advisor Findings (Full Disclosure)

`get_advisors` (security type) returned exactly one finding:

| Finding | Level | Detail |
| --- | --- | --- |
| `auth_leaked_password_protection` | WARN | Leaked-password protection (HaveIBeenPwned check) is disabled. Dashboard-level Auth setting, not a schema/RLS change — does not conflict with the Locked Decision. Recorded as a founder action (`08-founder-actions.md`), matching SB-MIG-1.2A's founder checklist item #9, still open. |

`get_advisors` (performance type) returned 21 findings, all **INFO** or **WARN**-level performance suggestions (unindexed foreign keys, RLS policies not using the `(select auth.uid())` initplan-caching pattern, three unused indexes) — **zero security-relevant findings** among them. These are the same, previously-identified, deliberately-unaddressed items from SB-MIG-1.2's readiness assessment (MIG-5, MIG-6) — out of this mission's authorized scope per the Locked Decision, re-confirmed still present and still non-blocking for security purposes.

## 11. Summary

| Check | Result |
| --- | --- |
| RLS enabled | Verified — 6/6 tables |
| Authentication enabled | Verified — healthy |
| SQL functions protected | Verified — correctly scoped; one non-exploitable observation noted |
| Edge Functions protected | N/A — none exist |
| Storage policies | N/A — unused |
| OAuth provider configuration | Blocked (config gap, not a vulnerability) — see `03-google-oauth-verification.md` |
| HTTPS usage | Verified |
| Redirect safety | Verified — platform-enforced |
| Origin restrictions | Verified — no anomaly |
| Security advisor findings | 1 WARN (leaked-password protection, dashboard toggle) — founder action |
| Performance advisor findings | 21 INFO/WARN, zero security-relevant, previously known, out of scope per Locked Decision |

**No critical security issue was discovered.** This gate does not trigger this mission's "critical security issue" stop condition.
