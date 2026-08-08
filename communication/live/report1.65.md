# SMART BUSINESS — CLAUDE CODE COMPLETION REPORT

## SB-P-1.11-RR-1 — WORKSTREAM B: SECURITY & PERMISSIONS VERIFICATION

**Report ID:** report1.65
**Mission:** SB-P-1.11-RR-1 — Release-Readiness Specialist Verification, Workstream B
**Authorized By:** `communication/live/instruction1.61.md`
**Repository:** `SmartBusinessv1/smart-business`
**Branch:** `mission/SB-P-1.11-RR-1`

**Workstream Verdict: `PASS WITH NON-BLOCKING FINDINGS`**

No exploitable security defect, privilege-escalation path, cross-business data leak, or merchant-facing information-disclosure risk was found in the new browser-facing Catalog surface. Business isolation, Owner-only access, command-only writes, and safe error messaging all hold — including, notably, under the exact real backend defects Workstream A found (`report1.64.md`): every one of those failures degrades safely, either to a generic non-leaking error or to a silently-empty result, never to a raw internal error or cross-business data exposure. Two non-blocking findings are recorded: a minor idempotency-key-rotation deviation in lifecycle actions (safe in practice, since the specific operations are domain-idempotent) and the already-disclosed Workstream A production-privilege gaps, which are backend defects, not new Catalog-surface vulnerabilities, but are cited here because they are directly relevant to this workstream's own checklist.

---

## 1. Locked Identities

| Item | Value |
|---|---|
| Canonical repository | `SmartBusinessv1/smart-business` |
| Authorized Lovable project | `f3e992ec-06df-4d49-b157-b92ec064c078` |
| Production Supabase | `gysgzasfcjvtrgaigfyn` |
| Dedicated test Supabase (used for behavioral checks) | `drravyyauixltoihzmwo` |

This workstream did not reopen already-accepted backend architecture (the three-layer execution-identity model, command-only write boundary, business-isolation pattern) — it verified whether the *new browser-facing Catalog surface* correctly respects that already-accepted architecture, per `instruction1.61.md` §3. Where new evidence surfaced a genuine defect in that architecture's actual deployed state (not its design), it is reported, consistent with the instruction's own "unless new evidence shows a defect" allowance.

---

## 2. Checklist Results

| # | Required check | Result | Evidence |
|---|---|---|---|
| 1 | Catalog surface is Owner-only as authorized | **PASS** | Source review: no permission-flag table, role check, or Manager/Employee code path exists anywhere in `catalog.ts` or the three route files (confirmed via targeted grep for `employee`, `manager`, `permission_flag`, `role ===`, `isManager`, `isEmployee` — zero matches). Every route/command relies solely on the existing `businesses.owner_id = auth.uid()` boundary, identical to every other authenticated route in this app |
| 2 | Unauthenticated users cannot access protected Catalog intelligence | **PASS** | Two independent layers confirmed: (a) the `_authenticated` route guard (unmodified by this mission) prevents a signed-out browser session from ever reaching `/catalog`; (b) behaviorally confirmed at the RPC layer — an unauthenticated (`anon`-role) call to `create_catalog_product` or `catalog_products_search` is denied outright at the database grant level (`42501`), a *stricter* posture than even the documented graceful-rejection contract (`report1.64.md` §5.5) |
| 3 | Employee/staff access is not accidentally introduced | **PASS** | Same grep evidence as #1 — zero role/permission-flag code of any kind |
| 4 | Business isolation enforced for all direct reads and RPC calls | **PASS** | Behaviorally confirmed (`report1.64.md` §4): a second, independent owner's `update_catalog_product_identity` call against the first owner's product returns `NOT_FOUND` — not a permission-denied or any signal that the product exists — and `catalog_product_read` returns `null` rather than another business's data. No existence-leaking or cross-tenant behavior observed anywhere in 50 test calls |
| 5 | Direct reads of `catalog_categories` remain read-only and business-scoped | **PASS** (read-only, confirmed two ways) / **see finding in §3.1** (business-scoped, but currently non-functional on production) | Read-only: zero `INSERT`/`UPDATE`/`DELETE` RLS policy exists for `authenticated` on this table (confirmed via `pg_policies`) — direct writes are structurally impossible regardless of any future client code change. Business-scoping: the one existing `authenticated` SELECT policy is correctly scoped (`business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid())`) — but `has_table_privilege('authenticated', 'public.catalog_categories', 'SELECT')` returns `false` on production, meaning the scoped policy currently cannot take effect at all (§3.1; this is the same finding as `report1.64.md` §5.4, cited here because it is squarely within this workstream's own checklist item) |
| 6 | Direct reads of `inventory_items` remain read-only and business-scoped, as used by Catalog | **PASS**, precisely scoped | The `inventory_items` table itself is *not* globally read-only (it has pre-existing, unrelated `authenticated` INSERT/UPDATE policies from `SB-P-1.10`, correctly scoped to the owner) — but the Catalog code's own use of it, `listInventoryItemsForPicker()`, issues only a `.select(...)` call, never a write, confirmed by source review (§4 below). The existing `SELECT` RLS policy (`Owners can view their inventory items`) is correctly business-scoped and was confirmed live-functional in behavioral testing (the D-068 picker successfully read a freshly-created item) |
| 7 | No direct client write exists for catalog tables | **PASS** | Full enumeration of every `.from("...")` call site across all 4 changed files (§4) — exactly 4 direct-table calls total: `catalog_categories` (read), `inventory_items` (read), `businesses` ×2 (read, pre-existing app-wide pattern). Zero `.insert()`/`.update()`/`.delete()` against any catalog table anywhere |
| 8 | No service-role secret or service-role client in browser code | **PASS** | Targeted grep for `service_role`, `SERVICE_ROLE`, `secret`, `serviceKey`, and any new `createClient(...)` call across all 4 files — zero matches. The only Supabase client used is the existing, already-reviewed anon-key `client.ts` singleton |
| 9 | All consequential mutations use the accepted RPC contract | **PASS** | Every write action traced to its exact RPC call and parameter set (`report1.63.md` §5, independently re-confirmed in `report1.64.md` §3) — no twentieth command, no direct table write |
| 10 | Reference cost not exposed in search/list or unauthorized surfaces | **PASS** | Structural: `catalog_product_summary` (the type returned by `catalog_products_search`/`catalog_products_list_batch`) has no reference-cost column in the deployed schema at all — it is architecturally impossible for the search/list surface to carry it, not merely a client-side omission. Behaviorally confirmed: the field is absent from a live search response, present only on `catalog_product_read` |
| 11 | Idempotency recovery cannot silently issue a fresh consequential command after an unknown result | **PASS WITH NON-BLOCKING FINDING** | See §3.2 |
| 12 | D-068 cannot be bypassed through client-only confirmation state | **PASS** | No code path calls `assign_or_replace_catalog_inventory_link` / `remove_catalog_inventory_link` without first obtaining a genuine `preview_token_id` from a real `preview_catalog_inventory_link_change` response — confirmed by source review. Independently defended server-side regardless: the backend re-validates the token's existence, ownership, expiry, and a recomputed state fingerprint on every confirm call (`report1.63.md` §2, function source), so even a hypothetically forged client-side token value would be rejected as `STALE_STATE`, not accepted |
| 13 | Stale/expired preview tokens are not reused | **PASS** | Behaviorally confirmed: reusing an already-consumed token returns `STALE_STATE` (`report1.64.md` §4). Frontend-side, `discardPreview()` is called on every rejection path and on cancel, forcing a brand-new preview before any further confirm attempt |
| 14 | Public rejection messages do not expose restricted internal reasons | **PASS**, verified under real failure conditions, not just code review | See §3.3 |
| 15 | No Lovable Cloud dependency, legacy backend reference, or unauthorized backend endpoint | **PASS** | `get_database_status` on the authorized Lovable project confirms `{"enabled":true,"stack":"supabase"}`, unchanged throughout this mission chain; grep across all 4 catalog files for `wwgqnshcgbukqczqblsm`, `drravyyauixltoihzmwo`, hardcoded `https://` URLs, or any Lovable Cloud reference — zero matches |
| 16 | No new unauthorized route, permission path, or browser privilege escalation | **PASS** | The regenerated `src/routeTree.gen.ts` diff (`report1.63.md` §4, re-confirmed here) shows exactly 3 new routes — `/catalog`, `/catalog/`, `/catalog/$productId` — all nested under the existing `_authenticated` layout route, using the identical guard/session pattern as every pre-existing protected route. No new middleware, no new auth logic, no new public route |

---

## 3. Detailed Findings

### 3.1 `catalog_categories` read path is currently non-functional on production (cited from Workstream A)

This is the same defect documented in `report1.64.md` §5.4: `authenticated` has no `SELECT` grant on `catalog_categories` on production, confirmed via the authoritative `has_table_privilege()` check, despite an RLS policy existing that assumes the grant is present. From a **security** standpoint specifically (this workstream's lens, distinct from Workstream A's functional lens): this is **not** a vulnerability — it fails closed, not open. The merchant sees an empty category list rather than any wrong or cross-tenant data. It is cited here only because checklist item #5 explicitly asks about this exact read path's current state, and a security review that failed to notice a read path is completely broken would itself be an incomplete review. No corrective action is proposed here; `report1.64.md` §10 already covers it.

### 3.2 Idempotency-key rotation in `LifecyclePanel` deviates from the stated principle for the ambiguous-outcome case, but is not exploitable for the specific operations involved

`report1.63.md`'s own build brief (§8) specifies: reuse the same idempotency key across a retry of the *same* attempt; mint a new key only when a genuinely new attempt begins. Source review of all consequential-write dialogs (grep evidence in §4) shows every dialog correctly holds an **immutable** key for its lifetime (`const [idempotencyKey] = useState(...)`, no setter) — **except** `LifecyclePanel` (archive/reactivate/delete) and `TaxSettingsPanel`, which hold mutable keys.

`TaxSettingsPanel` only rotates its key in `onSuccess` — correct, since a confirmed success is a definitive terminal state; a new key for the *next* save is appropriate.

`LifecyclePanel` rotates its key in **both** `onSuccess` and `onError` — including the case where `runCommandWithRecovery`'s own reconciliation attempt was inconclusive (a genuine "we don't know if this saved" outcome, not a confirmed rejection). In that specific ambiguous case, a merchant-initiated retry would use a **new** key rather than the original one, meaning if the original attempt had in fact silently succeeded server-side, the retry would be treated as a distinct new command rather than recognized and replayed as a duplicate.

**Why this does not create an exploitable or harmful condition in practice:** the three operations `LifecyclePanel` wraps — `archive_catalog_product`, `reactivate_catalog_product`, `delete_catalog_product` — are each independently **domain-idempotent** regardless of key strategy: archiving an already-archived product safely returns `LIFECYCLE_CONFLICT`; reactivating an already-active product likewise; and a second delete attempt on an already-deleted product safely returns `NOT_FOUND`. None of these three specific commands has a side effect that compounds or corrupts state on a duplicate call. This is a genuine, disclosed deviation from the stated idempotency-preservation principle — worth correcting for defense-in-depth and consistency — but it is not, on the evidence gathered, a security vulnerability for the operations it currently governs. **Non-blocking.**

### 3.3 Safe-error-messaging chain verified end-to-end, including under real (not simulated) backend failures

This is a positive finding worth stating explicitly, because it was verified under genuinely adverse conditions rather than assumed from code shape: Workstream A's Defects 2 and 3 (`report1.64.md` §5.2, §5.3) are real, currently-reproducing backend failures that throw raw Postgres permission-denied errors (`"permission denied for table catalog_products"`, etc.) from inside the RPC call. Tracing the actual code path these errors travel through:

1. `supabase.rpc(...)` throws a `PostgrestError` (which `instanceof Error` is `true` for).
2. `runCommandWithRecovery` catches it, confirms it is *not* a `CatalogRejection`, attempts reconciliation via `get_catalog_command_outcome`, finds nothing was recorded (the failed `UPDATE`/`SELECT` rolls back the whole transaction before any idempotency-key row is written), and throws a **new, generic, hardcoded** `Error("We couldn't reach the server, and nothing was saved. Please try again.")`.
3. The dialog's own `onError` handler reads `err.message` — but by this point `err` is the *already-sanitized* generic error from step 2, not the original `PostgrestError`. The raw Postgres message never reaches this layer at all.

The same layered protection was independently confirmed for read-path failures (`catalog_product_read`, `catalog_products_search`), which use hardcoded generic messages (`"We couldn't load this product. Please try again."`) rather than ever rendering `query.error.message`. **No code path in the shipped implementation can surface a raw internal error string to the merchant** — confirmed against real, currently-failing backend calls, not only against code review of the intended design.

---

## 4. Source Enumeration Evidence

- Direct `.from("...")` call sites (all 4 changed files): `catalog_categories` (read only), `inventory_items` (read only), `businesses` (read only, ×2, pre-existing pattern) — no others.
- Idempotency-key mutability per dialog: immutable (safest) in `CreateProductDialog`, `CreateCategoryDialog`, `ArchiveCategoryFlow`, `IdentityDialog`, `UnitDialog`, `PriceDialog`, `TaxDialog`, `CostDialog`; mutable-on-success-only (correct) in `TaxSettingsPanel`; mutable-on-success-and-error (§3.2 finding) in `LifecyclePanel`; mutable-on-preview-cycle (correct, required) in `InventoryLinkFlow`.
- `service_role`/`secret`/`serviceKey`/new-`createClient` grep: zero matches across all 4 files.
- `employee`/`manager`/`permission_flag`/role-check grep: zero matches across all 4 files.
- Hardcoded URL / legacy-backend-ID grep: zero matches across all 4 files.
- `routeTree.gen.ts` diff: exactly 3 new routes, all under `_authenticated`.

---

## 5. Business Tax Settings — Security Reviewer Decision

Per `instruction1.61.md` §4, independently recording one of the two required verdicts:

**`ACCEPT FOR PHASE 1`**

From a security standpoint, the write-only design is the *safer* of the two options available given the underlying `business_tax_settings` read-access gap: it does not attempt to work around the missing read grant with a client-side cache, a direct-table-read fallback, or any other improvised path that could leak or misrepresent data. It fails closed and says so plainly. No security concern with accepting this for Phase 1.

---

## 6. Confirmation of No Prohibited Actions

- No destructive production testing was performed. All behavioral checks in this workstream cite evidence already gathered in `report1.64.md` (against the dedicated test Supabase project) and read-only `information_schema`/`has_table_privilege` queries against production.
- No database schema, table, function, policy, role, or trigger was modified in the course of this review.
- No backend architecture already accepted in prior missions was reopened or re-litigated — the one architectural gap discussed (§3.1) is a *deployment state* finding (a missing grant), not a design reopening.

---

## 7. Final Verdict

**`PASS WITH NON-BLOCKING FINDINGS`**

All 16 required security checklist items were independently verified. Business isolation, Owner-only access, command-only writes, service-role absence, and safe error messaging all hold — the last of these confirmed specifically under real, currently-reproducing backend failure conditions, not merely assumed from code shape. Two findings are recorded, neither blocking from a security standpoint: the `catalog_categories` production read-gap (already a Workstream A blocking functional finding, cited here for completeness) and a minor, non-exploitable idempotency-key-rotation deviation in `LifecyclePanel` (§3.2), recommended for correction alongside the Workstream A fixes but not itself a vulnerability.

This workstream's `PASS WITH NON-BLOCKING FINDINGS` does not, by itself, clear the mission for preview/publish — `report1.64.md`'s `FAIL` verdict independently blocks that per `instruction1.61.md` §7.

---

## 8. Recommended Next Step

1. When the Workstream A corrections (`report1.64.md` §10) are implemented, additionally correct `LifecyclePanel`'s idempotency-key handling to preserve the key across an ambiguous/unknown-outcome error, matching every other dialog's pattern, for consistency and defense-in-depth (not because a concrete exploit exists today).
2. No other security correction is required before this workstream can be considered fully clear.
3. Per `instruction1.61.md` §7, preview/publish remains gated on all three workstreams and the Mission Control business-tax-settings decision — this report does not independently authorize it.
