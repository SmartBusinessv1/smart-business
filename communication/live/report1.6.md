# SMART BUSINESS — REPOSITORY COMMUNICATION

# report1.6 — Backend Product ↔ Inventory Identity Integrity Result

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`

**Mission Name:** `Production Runtime Synchronization & Lovable Recovery`

**Sequence:** `1.6`

**From:** `Claude Code / Repository Engineering Operator`

**To:** `Mission Control`

**In Reply To:** `communication/live/instruction1.6.md`

**Date:** `2026-09-02`

**Final status:** `PARTIAL` (defined precisely in §11 — every phase authorized by this instruction was delivered and verified in full; closing the underlying problem end-to-end still requires a separate execution-authorization mission per `docs/migration/README.md`, and Phase C is, by explicit instruction, a design handoff rather than an execution)

---

## 1. Verified Target Baseline and Branch

- Canonical repository: `SmartBusinessv1/smart-business`, branch `main`, pulled fresh to `dd22c7d` before any work began. New branch: `mission/SB-OPS-PROD-SYNC-1.0-instr1-6-backend-integrity`.
- Implementation repository (small client follow-up only, §8): `SmartBusinessv1/starter-supab-shell`, `main` verified to include merged PR `#4` (`248192c`) before branching. New branch: `mission/SB-OPS-PROD-SYNC-1.0-instr1-6-link-reuse-client`.
- Isolated verification environment: Supabase test project `smart-business-test` (`drravyyauixltoihzmwo`), reached only through `scripts/supabase-cli.mjs test ...` (never bare `supabase` CLI, never the `production` target). Confirmed before any change: all 20 existing canonical migrations already applied (`local == remote` for every file), 165 Catalog products, 903 Inventory items, **zero** existing duplicate `(business_id, inventory_item_id)` groups.
- **No production Supabase (`gysgzasfcjvtrgaigfyn`) connection, read, or write of any kind was made at any point in this instruction.** Every SQL statement below that was actually executed ran only against the isolated test project, and only inside a transaction that was explicitly rolled back unless stated otherwise.

## 2. Exact Source Findings — Existing Product↔Inventory Architecture

Read directly from `supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` and `.../20260806130000_..._stage2_functions.sql` (canonical repo) — not inferred:

1. Linking is a governed two-call sequence (**D-068**): `preview_catalog_inventory_link_change(p_product_id, p_requested_action, p_target_inventory_item_id)` opens a 15-minute preview token; `assign_or_replace_catalog_inventory_link(p_idempotency_key, p_preview_token_id, p_confirmed_price)` or `remove_catalog_inventory_link(...)` confirms it.
2. **Confirmed root cause, read directly from the function body:** `assign_or_replace_catalog_inventory_link` performed **no check whatsoever** that its target Inventory item wasn't already the dedicated identity of a different Catalog product. It only checked that the target item exists, is `active`, belongs to the caller's business, and differs from the product's *own* current link.
3. **Schema confirmation:** `catalog_products_inventory_item_fk` (the FK from `catalog_products.inventory_item_id` to `inventory_items`) carries no accompanying unique constraint — confirmed both from the raw `CREATE TABLE` statement and from `starter-supab-shell`'s generated types (`isOneToOne: false`).
4. **The governing lifecycle precedent for identity uniqueness on this exact table already exists and is explicit**, in a comment directly above the table's other three identity constraints: *"Archived identities remain reserved: plain, non-partial constraints"* — i.e. `catalog_products_business_name_normalized_uniq` / `..._sku_normalized_uniq` / `..._barcode_normalized_uniq` are plain `UNIQUE (business_id, column)` constraints, deliberately **not** filtered by `status`, so an archived product's name/SKU/barcode can never be reused by a new active product. `create_catalog_product` relies on this at the database level (`EXCEPTION WHEN unique_violation`), not on an application-level check.
5. `archive_catalog_product` / `reactivate_catalog_product` never touch `inventory_item_id` — an archived product keeps its link exactly as it was; reactivation is a pure status flip.
6. **D-047 dependent-history guard** (unchanged by this instruction): both `assign_or_replace` (when replacing an existing link) and `remove` reject with `DEPENDENT_HISTORY_CONFLICT` if any `inventory_movements` row exists on the linked item at or after that product's own `inventory_link_established_at`.
7. **Ownership model, discovered while authoring Phase A (not previously documented in any report):** every Catalog command function's ownership was transferred, at creation time, to a dedicated `SECURITY DEFINER` executor role (`preview_catalog_inventory_link_change` / `assign_or_replace_catalog_inventory_link` → `catalog_link_executor`). `postgres` (the role migrations run as) carries a **pre-existing, platform-level baseline membership** in every executor role, granted by `supabase_admin` — but with `inherit_option = false` and `set_option = false` (verified directly via `pg_auth_members` on the test project, not assumed). That baseline membership alone is **not** sufficient for `postgres` to `CREATE OR REPLACE` a function an executor role owns; a fresh `GRANT ... WITH INHERIT TRUE` is required first (§4).

## 3. Phase A — Server-Side Reuse Protection

**File:** `supabase/migrations/20260902120000_sb_ops_prod_sync_1_0_instr1_6_phase_a_link_reuse_guard.sql`

**RPC changes (both functions replaced in place; signatures and return shapes unchanged):**

- `preview_catalog_inventory_link_change`: after confirming the target item exists/is active and before the D-047 check, added — `IF EXISTS (SELECT 1 FROM catalog_products WHERE business_id = v_business AND inventory_item_id = p_target_inventory_item_id AND id <> v_product.id) THEN RETURN rejected/UNIQUENESS_CONFLICT`. This is early merchant feedback only.
- `assign_or_replace_catalog_inventory_link`: after the existing `STALE_STATE` fingerprint check and before the price-confirmation checks, added the **authoritative** re-check — same predicate, run again against live data immediately before the write, reusing the existing `UNIQUENESS_CONFLICT` rejection reason already established elsewhere in this command surface (no new rejection vocabulary invented).
- **Chosen lifecycle predicate and rationale:** the reuse check does **not** filter by `status` — any other row in the business already holding the target item, active or archived, is a conflict. This deliberately mirrors the "archived identities remain reserved" precedent found in §2.4, so the application-level guard can never accept a case Phase B's schema-level constraint (§4) would later reject, or vice versa. Reactivating an archived product needs no special handling under this rule, because (§2.5) archive/reactivate never touch `inventory_item_id` in the first place — the constraint is never at risk of being violated by a reactivation.

**Concurrency protection (the specific instruction requirement: "final confirmation must re-check reuse so stale or concurrent previews cannot bypass the rule"):** the authoritative check in the confirm function is wrapped in `pg_advisory_xact_lock(catalog_internal.idempotency_lock_key(v_business, 'assign_or_replace_catalog_inventory_link:reuse_guard', v_token.target_inventory_item_id))` — locked on **(business, target item)**, not on the idempotency key. Two different in-flight link attempts each carry their own idempotency key, so the existing idempotency-key lock does **not** serialize them against each other; this second, item-scoped lock is what does. It reuses the exact existing `idempotency_lock_key` helper (already used identically for idempotency elsewhere in this file) with a distinct operation string, so a hash collision — which that helper's own doc comment already treats as merely "temporary serialization contention," never as an authorization decision — is not a new risk category.

**Ownership fix required to author this at all (§2.7):** the migration wraps the two `CREATE OR REPLACE FUNCTION` statements in `GRANT catalog_link_executor TO postgres WITH INHERIT TRUE;` ... `REVOKE catalog_link_executor FROM postgres;`. Verified directly, not assumed: after the `REVOKE`, `pg_auth_members` shows exactly the original single `supabase_admin`-granted, non-inheriting row — this migration's own temporary grant leaves zero residue.

**Deployment ordering:** independent of the known duplicate and of Phase B. It changes no data and adds no constraint — it only affects link attempts made after it is applied. It is not deployed to production under this instruction (§10).

### Functional verification (real, on the isolated test project — not source review alone)

Applied via `node scripts/supabase-cli.mjs test db push --include-all` (the same tracked mechanism a real deployment would use — confirmed by `supabase migration list` showing `local == remote` for this file afterward). All functional tests below were then run inside a single transaction closed with `ROLLBACK`, against the pre-existing, clearly-synthetic RLS/isolation fixture business `aaaaaaaa-0000-0000-0000-000000000001` (owner `11111111-1111-1111-1111-111111111111`), authenticated by setting `request.jwt.claims` directly (the same GUC PostgREST would set after verifying a real JWT — no secret or cryptographic material involved). Confirmed byte-for-byte unchanged afterward: fixture products all still `inventory_item_id: null`, global counts unchanged (165 products / 903 items / 0 duplicate groups).

| # | Action | Result | Proves |
|---|---|---|---|
| 1–2 | Preview + confirm `Apple Juice → Test Stock Item` | `completed` / `completed` | Verification item 1: normal create-then-link still succeeds |
| 3 | Preview `Apple Pie → Test Stock Item` (already claimed by Apple Juice) | `rejected / UNIQUENESS_CONFLICT` | Verification item 2: reuse rejected server-side |
| 4–5 | Preview `Green Apple Basket → Test Stock Item 2`, then preview `Banana Bread → Test Stock Item 2` (both succeed — preview never claims the item) | `completed` / `completed` | Two independent, simultaneously-open previews against the same still-free item are both allowed, exactly as they must be |
| 6 | Confirm `Banana Bread`'s preview | `completed` | Banana Bread wins the item |
| 7 | Confirm `Green Apple Basket`'s now-stale preview (item taken by step 6) | `rejected / UNIQUENESS_CONFLICT` | Verification item 3: the authoritative re-check catches a stale preview even though *that same preview* passed cleanly at step 4 |
| 8–9 | Preview + confirm `Apple Juice` remove | `completed` / `completed` | The remove path (untouched code) still works end-to-end — no regression |
| 10 | A different business's owner previews against `Test Stock Item` | `rejected / NOT_FOUND` | Verification item 4: business isolation unchanged — the item is invisible, not merely "in conflict" |

**Not empirically tested:** a true simultaneous two-connection race (both sessions blocked on the advisory lock at the exact same instant). Step 6/7 prove the sequential "stale preview" case exactly as it will occur in practice (a second link attempt completing before a first, older preview is confirmed) and prove the guard exists and functions; the *lock's* concurrency guarantee itself rests on `pg_advisory_xact_lock`'s own well-established Postgres semantics and on this codebase's own existing, already-relied-upon use of the identical locking pattern for idempotency — not on an independently reproduced two-connection race in this session. This is disclosed as a bounded evidence gap, not asserted as fully proven.

## 4. Phase B — Schema One-to-One Enforcement Design

**File:** `supabase/migrations/20260902130000_sb_ops_prod_sync_1_0_instr1_6_phase_b_inventory_item_uniqueness.sql`

**Chosen invariant:** `ALTER TABLE catalog_products ADD CONSTRAINT catalog_products_business_inventory_item_uniq UNIQUE (business_id, inventory_item_id);` — a plain, non-partial constraint.

**Rationale (instruction1.6 explicitly asks this to be determined, not assumed from `report1.5.md`, which had speculated a `WHERE status <> 'archived'` partial index):** `report1.5.md`'s guess was wrong. The correct predicate, read directly from this table's own existing sibling constraints (§2.4), is to **not** filter by status at all — archived identities remain reserved, exactly like name/SKU/barcode. A plain `UNIQUE` constraint is sufficient (not a partial index): Postgres treats each `NULL` as distinct from every other `NULL`, so any number of non-stock-tracked products (`inventory_item_id IS NULL`) remain unaffected, exactly mirroring how the existing SKU/barcode constraints already handle products with no SKU/barcode. Reactivation requires no special interaction (§2.5/§3).

**Why this is the sole authoritative guarantee, and why Phase A alone is not enough:** Phase A's application-level check (§3) can only ever be as strong as every code path that writes `inventory_item_id` choosing to call it. A direct `UPDATE catalog_products` (bypassing the RPC entirely — e.g., a future maintenance script, or a bug in a completely different code path) would not be caught by Phase A at all. Only a real database constraint closes this for every possible writer, present and future.

### Deployment gating — proven mechanically, not just asserted

Per the instruction's explicit requirement ("must not be represented as safely deployable until the duplicate state is resolved"), this is enforced by the nature of the statement itself, and that was directly proven, not assumed:

- Applied to the clean isolated test project: **succeeded** (`db query --linked`, then confirmed for real via tracked `db push` — see §3's method, run for both files together).
- Directly forcing the *exact* production shape inside a rolled-back transaction — drop the constraint, create a genuine duplicate (two products referencing the same item), then re-run the identical `ADD CONSTRAINT` statement from this file — produced: `ERROR: 23505: could not create unique index "catalog_products_business_inventory_item_uniq" ... Key (business_id, inventory_item_id)=(...) is duplicated.` **Postgres itself refuses this migration while a duplicate exists — this is not a comment-based guardrail, it is a mechanical guarantee**, verified directly against a real duplicate in the isolated test project and rolled back afterward (constraint and data confirmed unchanged immediately after).
- `docs/migration/README.md` was updated (§9) recording Phase B's status as `DEFERRED OR PENDING — NON-EXECUTABLE`, explicitly blocked on the Phase C repair, ahead of Phase A which is `DRAFT OR PROPOSAL — NON-EXECUTABLE` (authored and verified, awaiting its own separate execution authorization, but not blocked by the duplicate).

## 5. Phase C — Repair Handoff (Design Only; Nothing Executed, Nothing Modified)

**Verified evidence supplied by Mission Control, used as planning input:** `Milma Milk` was linked to `AVT Tea Powder` first; `Mango` was linked to the same item later; the only movement on that item is the controlled runtime-test `opening_stock +5` created during this mission's own Step-4 testing — i.e., **after both links already existed**.

**Consequence, re-derived directly from D-047's own predicate (§2.6), not assumed:** `occurred_at >= inventory_link_established_at` is true for *both* products relative to that movement (both were linked before it was recorded). This means the plain governed `remove_catalog_inventory_link` path (§4 of `report1.5.md`'s proposed remediation) is rejected with `DEPENDENT_HISTORY_CONFLICT` for **both** `Milma Milk` and `Mango` — neither can be cleanly detached through the ordinary merchant-facing flow. This resolves `report1.5.md` §10's disclosed uncertainty (which of the two, or both, would be blocked) with a definite answer: both are blocked, using the new evidence Mission Control supplied.

**Why a compensating movement alone does not help:** the `+5` movement's *quantity* is very likely correct for whichever product genuinely owns it — nothing needs numeric reversal. The actual defect is that one product's `catalog_products.inventory_item_id` points at the wrong item; a correction (or any other) movement adds another row to `inventory_movements`, which does not change D-047's outcome at all (any movement, including a new correction, still satisfies "history exists at or after link time"). A movement-only fix cannot repair a linkage error.

**What is actually required — a dedicated, narrowly-scoped administrative repair primitive, not the ordinary merchant flow and not a raw ad-hoc `UPDATE`:**

1. **The open factual question only the Founder can answer:** which product genuinely owns `AVT Tea Powder` and its `+5` opening stock — `Milma Milk` (the earlier, and so more plausible, original link) or `Mango`? The other product needs its own brand-new, empty dedicated item, starting at zero, exactly as the corrected `starter-supab-shell#4` flow would create for it today. This is a fact about the Founder's real inventory, not something inferable from link order alone, and this report does not assume an answer.
2. **The repair itself, once that is answered**, for the *incorrectly*-linked product only:
   - Create a fresh, dedicated Inventory item for it (the exact same governed `createInventoryItem` insert path the corrected merchant flow already uses — no new primitive needed for this step).
   - Point that one product's `inventory_item_id` at the new item directly — this step **cannot** go through `assign_or_replace_catalog_inventory_link` (D-047 refuses it, correctly, since it cannot distinguish "this link was a data-entry bug" from "this is real history to protect"). It must be a distinct, explicitly-audited administrative path: a purpose-written, one-time correction (ideally itself a small governed function so it produces a `catalog_audit_events` row and a `catalog_product_link_events` row exactly like every other change in this system, preserving this codebase's own "every change has an event" invariant, rather than a raw `UPDATE` that silently bypasses it) — not a permanent new merchant-facing RPC surface.
   - Leave the *correctly*-linked product, `AVT Tea Powder`, and the `+5` movement entirely untouched — preserving, not erasing, that history, exactly as instructed.
3. **Nothing above was built, migrated, or executed under this instruction.** No SQL for this administrative primitive exists anywhere in this PR. This section is the design and the question that a future, separate mission needs answered and authorized before any of it may be written as an executable migration.

**Exact separate authorization required for production execution (per `docs/migration/README.md`'s Default-Deny Execution Rule, all eight elements, none of which this instruction supplies):** a new, explicit Founder/Mission-Control mission naming (1) the exact repair SQL file once written, (2) production (`gysgzasfcjvtrgaigfyn`) as the target, (3) the authorized actor, (4) the authorized repository/branch/paths, (5) a verified backup taken immediately before, (6) the validation/evidence/rollback plan, (7) an approved execution window, and (8) the approved commit/reporting workflow — plus, prior to all of that, the Founder's own answer to the factual question in point 1 above.

## 6. Preserve Merged 1.5 Behavior — Confirmed Unchanged

Direct inspection, not assumption: `starter-supab-shell`'s `catalog.$productId.tsx` `InventoryLinkFlow` (merged in PR `#4`) still never shows a picker of existing Inventory items — `Start tracking stock` / `Set up a new stock item` still always create a dedicated item first via `createInventoryItem`, then call the same D-068 RPC pair this instruction modifies (only their internal logic changed; their call signatures from the client are untouched, so `starter-supab-shell`'s existing calls need no change beyond the copy fix in §8). Opening Stock import (`inventory-import.ts`) was not touched by this instruction at all and still resolves a Catalog product, follows its `inventory_item_id`, and writes only through `create_inventory_movement`.

## 7. Verification Against Instruction §"Verification" (items 1–7)

1. Normal system-managed create-then-link still succeeds — §3 table row 1–2. **PASS.**
2. Reuse by another relevant product is rejected server-side — §3 table row 3. **PASS.**
3. Final confirmation is protected against stale/concurrent preview state — §3 table row 6–7 (stale case proven; true simultaneous-race disclosed as not independently reproduced, §3). **PASS with disclosed scope.**
4. Business isolation and D-047 behavior remain unchanged — §3 table row 8–10 (D-047 code path untouched; remove still works end-to-end; cross-business isolation intact). **PASS.**
5. Opening Stock still resolves the authoritative product Inventory identity and writes only Inventory movements — unchanged code, confirmed by inspection (§6), not re-tested since nothing in this diff touches it. **PASS.**
6. Migration/deployment ordering explicitly accounts for the known duplicate — §4's deployment-gating proof, §9, §10. **PASS.**
7. Standard build/type/lint/diff/secret/backend-ref checks pass — §8 (client repo; the two migration files are SQL, not part of the TypeScript build/lint/type-check surface, and were verified by direct application instead, per §3–§4). **PASS.**

## 8. Required Client/Type Handling

`assign_or_replace_catalog_inventory_link`'s signature and `catalog_command_result` return shape are unchanged, so no generated-types regeneration was needed. The one required client update: `rejectionMessage`'s existing `UNIQUENESS_CONFLICT` case (previously only worded for Catalog name/SKU/barcode conflicts) now has a `context === "link"` branch, matching the existing pattern already used for `DEPENDENT_HISTORY_CONFLICT`/`OPERATION_NOT_PERMITTED` in the same function.

- File: `starter-supab-shell/src/integrations/supabase/catalog.ts`
- Commit: `96442fd`, PR [`SmartBusinessv1/starter-supab-shell#5`](https://github.com/SmartBusinessv1/starter-supab-shell/pull/5) — `OPEN`, not merged
- Verification: `bun install --frozen-lockfile` PASS; `bun run build` PASS; `bunx tsc --noEmit` PASS, zero errors; `bun run lint` — same pre-existing repo-wide CRLF noise only, nothing new; forbidden-backend-ref and secret scan on the diff — none found.

## 9. Documentation Kept Synchronized

`docs/migration/README.md`'s Migration-Family Status table was updated with two new rows for these files, each carrying its own accurate `Executable now: NO` status and the exact reason (Phase A: awaiting its own separate execution mission; Phase B: additionally blocked on the Phase C repair) — per that document's own instruction that any new migration artifact must not be left unlisted, to avoid becoming exactly the kind of "conflicting evidence" it says to stop and reconcile.

## 10. Deployment Order (Summary)

1. **Phase A** may be deployed to production independently, at any time, once a separate execution-authorization mission is granted for it specifically — it depends on nothing else in this report.
2. **Phase C's repair** (design only here) must be answered (the factual ownership question), designed as an executable migration, and separately authorized and executed against production next — it does not depend on Phase A, but must precede Phase B.
3. **Phase B** may only be deployed to production after Phase C's repair has actually executed and the duplicate no longer exists — attempting it before that will fail outright, by Postgres's own mechanics (§4), not merely by policy.

None of the three steps above were executed against production under this instruction. Steps 1 and 3 were fully authored and functionally verified in the isolated test project only (§3, §4). Step 2 is a design and an open question for the Founder, not yet an executable artifact.

## 11. Final Status — Definition

`PARTIAL`. Every phase this instruction authorized was delivered in full and to the depth the instruction asked for: Phase A is complete, functionally verified, and merge-ready; Phase B is complete, its predicate corrected from `report1.5.md`'s own admitted guess, and its deployment gating mechanically proven, not merely asserted; Phase C is a complete design handoff, explicitly not an execution, exactly as scoped ("repair handoff only"). What remains outstanding is not unfinished engineering but two further, genuinely separate steps this instruction's own boundaries correctly withhold from this session: a new execution-authorization mission for Phase A/B against production, and the Founder's factual answer plus a new mission for Phase C's actual repair. No Stop condition in instruction1.6's own list was silently worked around — each one is instead the reason this report is `PARTIAL` rather than `PASS`.

## 12. PRs and Commits

- Canonical `smart-business` (this report + both migration files + `docs/migration/README.md` update): commit `af6b3b6`, PR [`SmartBusinessv1/smart-business#463`](https://github.com/SmartBusinessv1/smart-business/pull/463) — `OPEN`, not merged.
- `starter-supab-shell` client copy fix: commit `96442fd`, PR [`SmartBusinessv1/starter-supab-shell#5`](https://github.com/SmartBusinessv1/starter-supab-shell/pull/5) — `OPEN`, not merged.

No PR in either repository was merged or self-approved. No production Supabase mutation was made or attempted.
