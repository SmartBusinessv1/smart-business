# SB-P-1.11 — Evidence: Catalog Command Surface, RLS, Grants, Executor Roles, Merchant Isolation

**Mission:** SB-P-1.11 — Product Catalog & Pricing
**Stage:** 21 — Evidence Package (supporting document)
**Primary source:** `communication/missions/SB-P-1.11/claude-code/19-independent-verification-report.md` §5–§9, §9A
**Date compiled:** 2026-08-29

This document consolidates, without re-deriving, the exact Catalog command-surface and security evidence already independently verified in the Stage 19 canonical report. Every figure below is a direct citation of that report's own findings; nothing here is a new claim.

---

## 1. Exactly 19 Public Catalog Commands — No Twentieth

Confirmed independently via three separate methods that all agree exactly (Stage 19 report §5):

1. Migration source inspection (`grep -c "CREATE OR REPLACE FUNCTION public\."` across the Stage 2 functions migration plus the one later security-correction re-definition of `delete_catalog_product`).
2. Live database query (test project) — every one of the 19 names is `SECURITY DEFINER = true`, owned by one of seven narrow executor roles, with `EXECUTE` granted to exactly `{authenticated, service_role}` — never `anon`, never `PUBLIC`.
3. Frontend call-site audit — `src/integrations/supabase/catalog.ts` contains exactly 19 distinct `supabase.rpc(...)` call sites, zero `.insert(`/`.update(`/`.delete(`/`.upsert(` calls anywhere in the file.

| # | Command | Owner (executor role) | `SECURITY DEFINER` |
|---|---|---|---|
| 1 | `create_catalog_product` | `catalog_identity_executor` | true |
| 2 | `update_catalog_product_identity` | `catalog_identity_executor` | true |
| 3 | `update_catalog_product_unit` | `catalog_identity_executor` | true |
| 4 | `create_catalog_category` | `catalog_identity_executor` | true |
| 5 | `archive_catalog_category` | `catalog_identity_executor` | true |
| 6 | `archive_catalog_product` | `catalog_lifecycle_executor` | true |
| 7 | `reactivate_catalog_product` | `catalog_lifecycle_executor` | true |
| 8 | `delete_catalog_product` | `catalog_lifecycle_executor` | true |
| 9 | `record_catalog_selling_price_change` | `catalog_pricing_executor` | true |
| 10 | `record_catalog_tax_change` | `catalog_tax_executor` | true |
| 11 | `update_business_tax_settings` | `catalog_tax_executor` | true |
| 12 | `record_catalog_reference_cost_change` | `catalog_cost_executor` | true |
| 13 | `preview_catalog_inventory_link_change` | `catalog_link_executor` | true |
| 14 | `assign_or_replace_catalog_inventory_link` | `catalog_link_executor` | true |
| 15 | `remove_catalog_inventory_link` | `catalog_link_executor` | true |
| 16 | `get_catalog_command_outcome` | `catalog_read_executor` | true |
| 17 | `catalog_products_search` | `catalog_read_executor` | true |
| 18 | `catalog_product_read` | `catalog_read_executor` | true |
| 19 | `catalog_products_list_batch` | `catalog_read_executor` | true |

Identical, name-for-name, to the Builder Completion Report's own list and the canonical nineteen-command list established across the Stage 12 package's own audit history.

Three additional `public.*catalog*` functions exist (`catalog_products_guard`, `catalog_link_preview_tokens_guard`, `catalog_event_provenance_guard`) — `SECURITY INVOKER` trigger functions owned by `postgres`, not client-invocable commands, correctly not counted.

**This 19-count was independently re-verified four additional times during the GC-40 production migration workstream** (before and after each of Migrations 1–4), every time returning exactly 19 — see `gc40-production-migration-reconciliation.md` §3.

## 2. RLS, Grants, Executor Ownership, `SECURITY DEFINER`, `service_role` Neutrality

**Test project** (Stage 19 report §9): RLS enabled (`relrowsecurity = true`) on all twelve `catalog_*` tables existing at that time, each with at least one policy (range: 1–15 policies per table). `service_role` holds `GRANT ALL` on every protected table (standard server-side-only architecture, never client-reachable). Seven narrow executor roles each hold only the exact column/table privileges their own command group needs (e.g., `catalog_pricing_executor` holds `UPDATE (current_selling_price)` only, not full-row `UPDATE`).

**Production project** (Stage 19 report §9A, added under Mission Control correction `MC-S19-002`, direct read-only evidence — not inferred): all 19 commands exist, every one `security_definer = true`, `search_path` pinned to `""`, owned by the same narrow executor role confirmed in test, `EXECUTE` granted to exactly `{authenticated, service_role}` on every one. Ten `catalog_*` tables existed in production at that time, every one `relrowsecurity = true` with at least one policy. `authenticated` held only `SELECT` on `catalog_categories` and no grant on any other Catalog table present at that time; `anon`/`PUBLIC` held zero grants anywhere; `service_role` held full `ALL`-equivalent privilege on every table.

**No direct client-reachable Catalog table mutation bypass** (Stage 19 report §7): `authenticated` holds only `SELECT`, never `INSERT`/`UPDATE`/`DELETE`, on any Catalog table. The one client-side `.insert()` call found (`catalog-import.ts`, targeting `catalog_import_rows`) uses the server-only `service_role` admin client, never the caller-JWT browser client, and never writes `catalog_products` or any other Product Truth table.

## 3. Business Isolation and Merchant-Scoped Authorization

**Stage 19 report §8:** every Catalog RLS policy and every `SECURITY DEFINER` function body resolves scope server-side via `catalog_internal.resolve_owner_business(catalog_internal.current_actor_uid())` or the equivalent `businesses.owner_id = auth.uid()` predicate — never a caller-supplied business ID. Manager/Employee actors are denied by construction because no permission infrastructure exists yet for either role (confirmed by direct source reading and by a zero-match grep sweep for `manager|employee|role|permission_flag` across every Catalog-related frontend file and migration).

## 4. Two Real, Already-Corrected Historical Defects

Stage 19 report §9 notes two real post-deployment defect corrections found and read in full — `RR-3` and `SEC-IMP-5`/`SEC-IMP-6` — both grant/RLS-gap fixes with matching migrations, demonstrating the security model has been genuinely exercised and corrected under real conditions, not merely designed on paper. `SEC-IMP-5`/`SEC-IMP-6` is GC-40 Migration 2, whose production application and verification is documented in full in `gc40-production-migration-reconciliation.md` §2.

## 5. Post-GC-40 Confirmation — the Boundary Was Never Widened

Every one of the four GC-40 production migration reports (`report1.183.md`, `report1.185.md`, `report1.186.md`, `report1.187.md`) independently re-confirms the Catalog command count at exactly 19, both immediately before and immediately after its respective migration. No migration in the GC-40 package added, removed, renamed, or altered the signature of any of the 19 commands; Migration 2 corrected only `delete_catalog_product`'s internal body (adding one more dependent-history check), preserving its exact public signature and `SECURITY DEFINER` posture, as independently verified in `report1.185.md` §9 item 7.

## Conclusion

The locked 19-command public Catalog boundary, its RLS/grant/executor-role/`SECURITY DEFINER` security model, and its merchant (business-owner) isolation guarantee are independently verified in both the test and production Supabase environments, and were re-confirmed unchanged across all four GC-40 production migrations. No twentieth command exists anywhere in `public` schema in either environment as of this package's preparation date.
