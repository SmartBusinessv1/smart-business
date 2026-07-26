Document: Infrastructure Health & Staged Compute Plan

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2E

# SB-MIG-1.2E — Infrastructure Health (Task 9, covering mission Phase 4 and Phase 14)

## 1. Phase 4 — Project Health Review

Reviewed at mission start (Team LIPS org, Pro plan):

| Item | Status |
| --- | --- |
| Project status | Healthy |
| Region / compute | South Asia (Mumbai, `ap-south-1`) / Nano |
| Advisor | "Advisor found no issues" |
| Total requests (24h at time of check) | 171, 97.7% success rate |
| CPU / Disk / RAM (Nano) | 2% / 14% / **48%** |
| GitHub repository connected | No (informational only, not a mission blocker) |

**Notable finding at the time**: RAM already at 48% on Nano with only 171 requests/day — a fairly high idle baseline for such light load, used as supporting evidence (not the sole basis) for the compute-upgrade timing decision below. Two warnings (API Gateway x3, Realtime x1) were flagged for deeper investigation and fully resolved in `08-monitoring-review.md` (Phase 13).

## 2. Staged Compute Plan (Founder's Growth Roadmap)

The Founder's growth plan: Stage 1 = 10 pilot clients, Stage 2 = 100, Stage 3 = 250, Stage 4 = 500 ("full swing"), all assumed fully concurrent for planning purposes. Discussed and agreed during this mission:

| Stage | Clients | Recommended compute tier | RAM / Direct conns / Pooler | Cost/mo |
| --- | --- | --- | --- | --- |
| 1 — Pilot | 10 | Micro | 1 GB / 60 / 200 | ~$10 |
| 2 — Growth | 100 | Small | 2 GB / 90 / 400 | ~$15 |
| 3 — Scale | 250 | Medium | 4 GB / 120 / 600 | ~$60 |
| 4 — Full swing | 500 | Large (first dedicated-CPU tier) | 8 GB / 160 / 800 | ~$110 |

**Decision (Founder-confirmed)**: remain on **Nano** through the rest of pre-launch infrastructure hardening (no cost, no real client data at risk yet). Upgrade to **Micro** at the moment the first real pilot client's data is onboarded — treated as a pilot-launch checklist item, not deferred until a problem occurs. Scale further reactively per the table above, guided by actual Database → Reports utilization (CPU/RAM/connections), not purely by headcount.

**Architecture note carried forward**: recommended confirming the application backend connects via Supabase's connection pooler (port 6543, transaction mode) rather than direct Postgres connections, since pooler client limits are 3-5x higher than direct connection limits at every tier — this materially affects how much concurrent load each tier can actually serve.

**PITR linkage**: Stage 2's Small compute tier is also the minimum required for PITR (see `02-backup-pitr-verification.md`), so the compute upgrade and the PITR decision naturally align at that stage.

## 3. Phase 14 — Extensions Review

Confirmed a minimal, well-hardened extension footprint: only 4 of several dozen available Postgres extensions are enabled, all clearly necessary —

| Extension | Purpose |
| --- | --- |
| `pgcrypto` | Cryptographic functions |
| `uuid-ossp` | UUID generation for primary keys |
| `plpgsql` | Procedural language required for stored functions/triggers (e.g. `create_inventory_movement` RPC) |
| `pg_stat_statements` | Query performance tracking, powers the dashboard's Query Performance tooling |

No changes needed. Deprecated (`pgjwt`) and obsolete (`refint`) extensions correctly remain disabled.

## 4. Outcome

Phases 4 and 14 complete. Overall infrastructure health is good. A clear, agreed staged compute-scaling plan is documented and tied to concrete triggers (pilot onboarding, monitored utilization) rather than left as an open question for future sessions.
