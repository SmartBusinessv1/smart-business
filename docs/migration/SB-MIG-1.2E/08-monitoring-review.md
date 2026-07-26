Document: Logs & Monitoring Review

Version: 1.0

Status: ACCEPTED

Created By: Claude Code

Reviewed By: Mission Control

Review Date: 2026-07-26

Mission: SB-MIG-1.2E

# SB-MIG-1.2E — Logs & Monitoring Review (Task 8, Phase 13)

## 1. Postgres Logs

Reviewed recent activity. Notable entries: 4 consecutive `FATAL: terminating connection due to administrator command` events, followed by `pg_cron scheduler shutting down`, `aborting any active transactions`, `received fast shutdown request`. Confirmed this is the expected signature of the database restart triggered by enabling "Enforce SSL on incoming connections" in Phase 9 — not an incident. Remaining activity is routine WAL checkpoint housekeeping and one benign client-disconnect ("connection reset by peer").

## 2. API Gateway Warnings (follow-up from Phase 4)

Phase 4's project overview showed 3 warnings on API Gateway over 24 hours. Investigated via Logs → API Gateway, filtered to Warning (400/403 status codes) over a 5-day window. Findings, clustered tightly within a single window (01:31-02:57 on Jul 25):

- `GET /auth/v1/user` → 403 (x2)
- `POST /auth/v1/token` → 400
- `GET /auth/v1/authorize` → 400 (x2)
- `POST /rest/v1/inventory_movements` → 400
- `POST /auth/v1/admin/users` → 403 (x2) — call to the admin-only endpoint (requires service-role key) correctly rejected
- `POST /rest/v1/rpc/create_inventory_movement` → 400 (x3)

**Assessment:** this pattern (tight clustering, admin-endpoint access attempts, validation-rejection style 400s on inventory/transaction RPCs) is consistent with an **automated test suite run**, not real client traffic or an attack. The 403s demonstrate access control correctly rejecting improper credentials — a good sign, not a vulnerability.

**Connects directly to a Phase 10 finding**: this log evidence corroborates what SB-MIG-1.2E-A's Refinement 3 investigation later confirmed outright in `06-api-review.md` §2.3 — the automated test suite genuinely runs directly against this production project (not an "isolated, disposable" one as `.env.test`'s header comment claims), using the project's real service-role key. This is a known, previously-managed condition (see the cleanup precedent cited in §2.3), requiring a pre-cutover data check rather than an open unknown.

## 3. Realtime Warning (follow-up from Phase 4)

Phase 4 showed 1 warning on Realtime. Investigated via Logs → Realtime: a single `Database supervisor not found for tenant gysgzasfcjvtrgaigfyn` entry, immediately followed by a successful reconnection ("Sent 200 in 16ms"). Assessed as a transient, self-healed blip in Supabase's shared Realtime infrastructure — not recurring, no action needed.

## 4. Outcome

Phase 13 complete. No unresolved errors or ongoing issues found. Both Phase 4 warnings fully explained. One cross-cutting item (production test-suite targeting) corroborated here with log evidence and since fully confirmed under SB-MIG-1.2E-A, consistent with the Phase 10 finding.
