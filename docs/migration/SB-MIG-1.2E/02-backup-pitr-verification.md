Document: Backup & PITR Verification

Version: 1.0

Status: ACCEPTED

Created By: Claude Code

Reviewed By: Mission Control

Review Date: 2026-07-26

Mission: SB-MIG-1.2E

# SB-MIG-1.2E — Backup & PITR Verification (Task 2)

## 1. Daily Scheduled Backups

Verified at **Database → Backups → Scheduled backups**.

- Initial check showed a stale "Free Plan does not include project backups" message despite the org already being on Pro — resolved by hard refresh (cache artifact, not a real entitlement issue).
- Post-refresh: **7 consecutive daily physical backups confirmed**, dated 19 Jul 2026 through 25 Jul 2026, one per day around 01:2x UTC (project region midnight).
- Matches Pro plan's included 7-day retention. Status: **Enabled, healthy**.

Note: database backups do not include Storage API objects (metadata only) — not a practical concern for this project since Cloudflare R2 is the intended primary file store (see `07-storage-review.md`, pending).

## 2. Point-in-Time Recovery (PITR)

Reviewed at **Settings → Add-ons → Point in Time Recovery**. Status at time of review: **Disabled**.

Key facts established (Supabase docs, confirmed 2026-07-26):

| Retention | Price |
| --- | --- |
| 7 days | ~$100/month |
| 14 days | ~$200/month |
| 28 days | ~$400/month |

- PITR **replaces** daily backups (not additive) and provides restore granularity down to ~2 minutes RPO via WAL archiving.
- PITR **requires a minimum "Small" compute add-on** — not compatible with the project's current Nano compute.

## 3. Decision (Founder-confirmed)

- **Daily backups**: remain as-is (included, active, 7-day retention) — adequate baseline for pre-launch/pilot stage.
- **PITR**: deferred. To be revisited at Stage 2 of the client-growth plan (~100 clients), when compute is separately planned to move to Small — PITR's compute prerequisite will already be satisfied at that point.

## 4. Related Decision — Compute Tier

Discussed in the same conversation (see `09-infrastructure-health.md` for full staged compute plan). Summary relevant to this document:

- Current compute: **Nano** (0.5 GB RAM, shared CPU, 60 direct / 200 pooler connections) — Supabase's free/hobby-grade tier.
- Founder confirmed: remain on Nano through the remainder of pre-launch infrastructure hardening (no real client data at risk yet).
- Founder-agreed trigger: upgrade to **Micro (~$10/month)** at the moment the first real pilot client's data is onboarded — treated as a pilot-launch checklist item, not deferred until a problem occurs.

## 5. Outcome

| Setting | Status | Next review trigger |
| --- | --- | --- |
| Daily backups | Enabled, verified healthy | N/A — already correct for current stage |
| PITR | Disabled (deliberate) | Stage 2 (~100 clients) / Small compute upgrade |
| Compute | Nano (deliberate) | First pilot client onboarding → Micro |

Phase 3 complete.
