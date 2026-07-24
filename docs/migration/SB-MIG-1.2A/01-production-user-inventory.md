Document: Production User Inventory

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2A

**Data sensitivity note:** this document contains real production user email addresses. It is required content per this mission's Task 1 brief ("email address" is an explicitly required field), necessary for planning the account-recreation and user-communication work in this mission's other deliverables. Recommend restricting this document's distribution to Mission Control / the founder rather than general repository access, notwithstanding that it is stored in the same repository as the rest of this mission's work. No password hashes, tokens, provider secrets, or refresh tokens are included anywhere in this document, per the mission's explicit prohibition.

# SB-MIG-1.2A — Production User Inventory (Task 1)

## 1. Method

Queried directly, read-only, against the Lovable-managed backend (project `64c2b9b1-2461-4045-9acc-19e2658b8ca2`, Supabase ref `wwgqnshcgbukqczqblsm`) via the same Lovable MCP connector used throughout SB-MIG-1.1 and SB-MIG-1.2. Only `SELECT` statements were issued. No write occurred.

## 2. Complete User Inventory

| # | User ID (`auth.users.id`) | Email | Provider | Email confirmed | Created | Last sign-in |
| - | --- | --- | --- | --- | --- | --- |
| 1 | `74d920ee-b736-4c25-aef2-13bf2e5cff62` | `iam.mrriyas@gmail.com` | `email` (password) | Yes — `2026-07-07 09:03:17 UTC` | `2026-07-07 09:02:09 UTC` | `2026-07-23 07:14:55 UTC` |
| 2 | `3612fc99-ca3e-4daa-ae51-356f9f1c18bb` | `creationsflyhigh@gmail.com` | `google` (OAuth) | Yes — `2026-07-09 08:19:06 UTC` (same instant as account creation, standard for OAuth sign-up) | `2026-07-09 08:19:06 UTC` | `2026-07-21 21:07:32 UTC` |

Metadata observed (non-secret fields only): user 2's `raw_user_meta_data` includes a Google-supplied display name ("Magical Frames") and avatar URL, consistent with a genuine Google OAuth sign-up. User 1's metadata is the standard minimal email-provider set. Neither user shows any custom `app_metadata` role/flag beyond the default `provider`/`providers` fields — there is no admin/staff flag or similar distinguishing metadata to account for in recreation.

**Total: 2 users. Both are real production users — no test, demonstration, or placeholder accounts exist on the Lovable-managed backend.** This matches every prior audit's data inventory (SB-MIG-1.1 §4.2) and is independently re-confirmed here at the row level rather than just the count level.

## 3. Business Ownership

| Business ID | Business name | Owner | Owner email | Category | Locality | Created |
| --- | --- | --- | --- | --- | --- | --- |
| `4a6741e2-8dde-484d-9846-953a857f833e` | Bhai Store | User 1 | `iam.mrriyas@gmail.com` | Grocery | "We are a one stop shop for all" | `2026-07-08 21:24:20 UTC` |
| `28b2e43f-b7f0-4e93-b337-bbcaef242cf5` | Salamath Store | User 2 | `creationsflyhigh@gmail.com` | Grocery | Trivandrum | `2026-07-09 08:20:37 UTC` |

Both `owner_id` values were independently cross-checked against `auth.users.id` via a `LEFT JOIN` — both resolve cleanly, with no NULL/orphaned result. **Zero orphaned businesses. Zero users without a business.** The 1:1 user-to-business relationship matches the schema's own `businesses.owner_id` UNIQUE constraint exactly.

## 4. Associated Data, by Business

| Business | Transactions | Inventory items | Correction events |
| --- | --- | --- | --- |
| Bhai Store (User 1) | 1 | 0 | 0 |
| Salamath Store (User 2) | 4 | 1 | 4 |
| **Total** | **5** | **1** | **4** |

These totals reconcile exactly with every prior audit's counts (SB-MIG-1.1 §4.2: 5 transactions, 1 inventory item, 4 correction events). **No unexplained or unaccounted-for row exists anywhere in the production dataset.**

## 5. Classification

| Category | Count | Detail |
| --- | --- | --- |
| Real production users | 2 | Both, per §2 |
| Test users | 0 | None found on this backend (test fixtures live exclusively on Team LIPS Supabase, already documented and cleared under SB-MIG-1.2) |
| Demonstration users | 0 | None found |
| Orphaned users (no business) | 0 | None found |
| Businesses without a valid owner | 0 | None found |

**This is the cleanest possible starting position for a migration: exactly 2 real users, each with exactly one business, zero ambiguous or unexplained records.**

## 6. Approved-User Migration Register

| User | Recreate? | Reason | Destination business relationship | Required post-migration action |
| --- | --- | --- | --- | --- |
| `iam.mrriyas@gmail.com` (User 1, email/password provider) | **Yes** | Real production user with an active business and transaction history | Must own "Bhai Store" on the target, with the same business `id` preserved (data migration preserves primary keys; see `08-production-data-mapping-plan.md`) so `owner_id` continues to resolve correctly without a schema change | Forced password reset (per the Approved Mission Control Decision on Authentication Migration) before first login on the target |
| `creationsflyhigh@gmail.com` (User 2, Google OAuth provider) | **Yes** | Real production user with an active business, transaction, inventory, and correction-event history | Must own "Salamath Store" on the target, same business `id` preserved | Google OAuth re-authentication on the target (not a password reset — this user has no password on file, since account was OAuth-only from creation). Depends on Google OAuth parity being resolved first — see `03-google-oauth-parity-report.md` |

Both users are recreated. Neither is excluded. This register has only two rows precisely because the production dataset itself is this small and this clean — no ambiguous cases required a judgment call.
