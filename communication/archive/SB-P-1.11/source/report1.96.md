# SMART BUSINESS — CLAUDE CODE COMPLETION REPORT

## SB-P-1.11-FWR-1 — Founder Workflow Architecture Reconciliation

**Report ID:** report1.96
**Mission:** SB-P-1.11-FWR-1 — Founder Workflow Architecture Reconciliation
**Authorized By:** `communication/live/instruction1.90.md`
**Repository:** `SmartBusinessv1/smart-business`
**Mission type:** Plan mode / architecture reconciliation only — no implementation authority
**Build Mode authority:** NONE
**Production migration authority:** NONE

**Mission Verdict: `FOUNDER WORKFLOW ARCHITECTURE READY FOR SUPABASE + SECURITY REVIEW`**

All five Founder workflow decisions (FWR-001 through FWR-005) reconcile cleanly against SB-P-1.10 Inventory Truth, D-001, D-023, D-047, D-053 through D-058, and D-068, without requiring a twentieth public Catalog command, without weakening any locked security or truth boundary, and without expanding Phase 1 permissions. The architecture is deliberately the smallest one that satisfies the Founder intent: it reuses the existing governed Catalog↔Inventory link mechanism (`preview_catalog_inventory_link_change` / `assign_or_replace_catalog_inventory_link`), the existing per-command idempotency pattern, and the existing two-table import-bookkeeping pattern, rather than inventing new primitives. No code, dependency, migration, Supabase, or Lovable change was made.

---

## 1. Exact Latest `main` SHA Reviewed

`eb3a22aeb2c8e6d02af5f8b57b9c9c73f5cf6e0f` (`Authorize SB-P-1.11 founder workflow architecture reconciliation (#212)`), confirmed via `git fetch origin main` immediately before beginning work to match `origin/main`'s head.

## 2. Canonical Sources Reviewed

- `communication/live/instruction1.90.md` (this mission's governing instruction, read in full).
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md` (primary source, read in full).
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md` (canonical wording of D-001 through D-068, read in full).
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.10-EIS.md` (Inventory Foundation engineering specification, read in full — ledger design, movement-type/direction matrix, idempotency contract, RLS strategy, trusted event-link contract).
- The actual current Catalog import implementation (`src/server-functions/catalog-import.ts`, `src/lib/catalog-import/**`, already deeply familiar from prior missions in this repository's history and re-confirmed unchanged on this SHA).
- The actual, live dedicated test Supabase project schema (`drravyyauixltoihzmwo`) — table columns, constraints, RLS policies, and full function definitions for every relevant table/RPC, queried directly and read in full (not inferred from documentation alone): `inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`, `catalog_products`, `catalog_link_preview_tokens`, `catalog_import_batches`, `catalog_import_rows`, and every `public` schema function matching `%inventory%`, `%link%`, or `%catalog%`.
- `src/integrations/supabase/auth-middleware.ts` and the existing `loadOwnedBusinessId`-style fail-closed Owner-derivation pattern used throughout Catalog import.
- Repository-wide search for any Manager-role permission infrastructure (`grep -rli manager src/ supabase/migrations/`) and for any implemented WhatsApp product-creation channel — both confirmed absent (§5, §11).

No prior rejected architecture for this specific workflow was found in repository history; this is new reconciliation, not a re-proposal.

---

## 3. Reconciliation of FWR-001 Through FWR-005

This section restates each Founder decision's disposition with the concrete evidence found this mission, going beyond the Founder record's own (already-compatible) reconciliation table in §3 of the primary source.

### FWR-001 — Inventory Bulk Onboarding

**Compatible, with the exact mechanism now identified.** The existing `create_inventory_movement` operation (live in the test project, `SECURITY INVOKER`, owned by `postgres`, gated entirely by `inventory_items`/`inventory_movements` RLS rather than a Catalog-style `SECURITY DEFINER` executor role) already enforces every EIS invariant a bulk-onboarding caller needs: single-opening-stock-per-item, movement type/direction matching, durable idempotency, and rejection against archived items. Bulk onboarding needs no change to this operation — it only needs a governed *caller* (§14) that resolves/creates the Catalog and Inventory identities first, exactly mirroring FWR-005's own ordering requirement. No spreadsheet row can ever set current stock directly, because no code path other than `create_inventory_movement` can write `inventory_movements`, and that operation has no "set quantity" parameter — only movement type, direction, and quantity of *change*.

### FWR-002 — Downloadable Import Templates

**Compatible, and genuinely new.** Direct repository inspection confirms **no template-download feature exists today, even for the already-Build-Now Catalog import.** This is not a regression to reconcile against; it is new Build Now scope for both Catalog and Inventory, specified in §14/ARC-7.

### FWR-003 — Smart Business SKU

**Compatible, requires only an internal-body change to an existing command.** `create_catalog_product`'s live body (read in full, §2) currently leaves `sku`/`sku_normalized` `NULL` whenever `p_sku` is omitted or blank; the existing `UNIQUE (business_id, sku_normalized)` constraint on `catalog_products` already permits unlimited concurrent `NULL` rows (standard PostgreSQL NULL-uniqueness semantics) but would enforce true business-scoped uniqueness the instant every row is guaranteed to carry a non-`NULL` value — exactly the condition FWR-003 establishes. See §6 ARC-1/ARC-2.

### FWR-004 — One SKU Rule Across Channels

**Compatible by construction, given where the change lands.** Only two creation channels exist in the repository today: dashboard/manual entry and CSV/XLSX bulk import — both already call `create_catalog_product` as their sole product-creation path (confirmed: no WhatsApp text/voice/photo-assisted creation channel exists in `src/` at this SHA). Placing SKU-resolution logic inside `create_catalog_product`'s own body, rather than in any caller, means FWR-004 is satisfied automatically for every channel that exists today and every channel built later, with zero channel-specific code required anywhere. See §6 ARC-8.

### FWR-005 — Inventory-First Catalog Orchestration

**Compatible, and the exact reusable mechanism was located.** The live `preview_catalog_inventory_link_change` → `assign_or_replace_catalog_inventory_link` pair (both already part of the locked nineteen, both read in full, §2) is precisely the D-068 preview/confirm safeguard FWR-005 §6 requires — it already refuses to operate unless the target `inventory_items` row exists and is `status = 'active'` (confirmed by direct read of its `WHERE ... AND status = 'active'` clause), already computes whether the proposed link would change the product's `selling_unit`, already blocks the confirm step (`PRICE_CONFIRMATION_REQUIRED`) until a price is supplied whenever that change would occur, and already writes the resulting `catalog_selling_price_events`/`catalog_product_link_events`/`catalog_audit_events` rows atomically with the link itself. FWR-005's orchestration order (resolve match → confirm → create Catalog product → create Inventory entity → establish link → Opening Stock) is therefore not a new mechanism to design — it is a new *caller* sequencing five already-existing, already-idempotent operations. See §6 ARC-4.

---

## 4. ARC-1 — Exact D-023 Replacement Wording

**Current D-023** (`SB-P-1.11-Founder-Product-Decision-Record.md`, unchanged verbatim elsewhere in this report):

> Build Now includes one optional merchant-defined SKU. SKU does not block product creation.

**Proposed replacement D-023** (for Mission Control/Founder confirmation before any Product Truth mutation — drafting this wording is explicitly the only Product Truth activity instruction1.90.md §8 authorizes in this mission):

> Build Now includes exactly one SKU per product, in every creation channel. A merchant-supplied SKU remains optional and, when supplied, is validated and used. When no merchant SKU is supplied, Smart Business automatically assigns a business-scoped unique tracking SKU at product-creation time, so SKU never blocks product creation. A generated SKU is a Smart Business-issued tracking identifier, not a substitute for a merchant barcode or a legal/product-standard identifier (see D-020 through D-022 for barcode, which remains separate and independently optional). A generated SKU may later be replaced by a merchant-supplied SKU through the same governed product-identity update path (D-064) used for any other identity change, subject to the same business-scoped uniqueness rule and the same identity-change audit trail. Business-scoped SKU uniqueness (D-024) is unchanged and applies identically whether the SKU is merchant-supplied or Smart Business-generated. This decision does not introduce merchant-configurable SKU formatting; the generated SKU's exact format is an engineering implementation detail (§6 ARC-2), not a Founder-facing configuration surface, in Build Now.

This wording directly answers every element instruction1.90.md §5 ARC-1 requires:

| Required element | Where addressed |
|---|---|
| One SKU per product in Build Now | First sentence; unchanged from current D-023/D-024 |
| Merchant-supplied SKU optional | Second sentence |
| Smart Business-generated SKU when absent | Third sentence |
| Business-scoped uniqueness | Fifth sentence, cross-referencing unchanged D-024 |
| Collision handling | Deferred to the engineering contract (§6 ARC-2) as implementation detail, not product policy — a collision is an implementation-level retry event, not a merchant-visible decision |
| Source/provenance of SKU if needed internally | "a Smart Business-issued tracking identifier" — no separate provenance field is introduced; provenance is knowable from whether the value matches the merchant-entered value at creation time, which the audit trail already preserves (D-064) |
| Whether/when a generated SKU may later be replaced | Fourth sentence |
| Audit/history implications | Fourth sentence, cross-referencing unchanged D-064 |
| No dependence on input channel | First sentence ("in every creation channel") |
| No merchant-configurable SKU formatting invented | Final sentence, explicit |

---

## 5. ARC-2 — SKU Generation Contract

**Smallest safe algorithm:** a fixed, non-configurable prefix (e.g. `SB-`) followed by a short, high-entropy, case-insensitive alphanumeric suffix (e.g. Crockford base32 of a cryptographically random value, sized so collision probability within one business's realistic product count is negligible — this is an implementation-level sizing decision for Build Mode, not a product decision). No sequential per-business counter is introduced, because a counter requires its own concurrency-safe allocation mechanism (a locked counter row or a database sequence scoped per business) that a random-suffix approach avoids entirely.

**Contract, mapped to every instruction1.90.md §5 ARC-2 requirement:**

- **Unique within one business:** enforced by the existing `catalog_products_business_sku_normalized_uniq UNIQUE (business_id, sku_normalized)` constraint — no new constraint required (§2, confirmed live).
- **Concurrency-safe:** two concurrent `create_catalog_product` calls that both need to generate a SKU each generate their own independent random candidate; if a collision occurs (astronomically unlikely at Phase 1 volumes, but not assumed impossible), the existing `EXCEPTION WHEN unique_violation` handler in `create_catalog_product`'s body (already present, §2, currently mapped to `UNIQUENESS_CONFLICT` for a *merchant-supplied* SKU/barcode/name collision) is extended, for the internally-generated-SKU case only, to regenerate and retry a small bounded number of times before falling back to the existing `UNIQUENESS_CONFLICT` rejection — never to an infinite loop and never to relaxing the uniqueness constraint.
- **Idempotent under retried create/import requests:** for free, from the existing idempotency contract already in `create_catalog_product`'s body — a retry using the same idempotency key and the same payload replays the original committed result (including whatever SKU was generated the first time) rather than re-running generation logic at all.
- **Non-sensitive:** the generated value carries no embedded business data, timestamp-derived sequence, or user-identifying material — purely a random tracking token.
- **Stable after creation unless an authorized governed identity update occurs:** unchanged — `sku`/`sku_normalized` only ever change through `update_catalog_product_identity`, exactly as any merchant-supplied SKU does today.
- **Compatible with existing business-scoped uniqueness and archived-identity rules:** unchanged — an archived product's SKU is not released for reuse any differently than it is today (D-024/D-031 govern this already; this mission does not touch archive/delete SKU-release behavior).
- **No barcode generation required:** confirmed — barcode (D-020 through D-022) remains fully separate, independently optional, never auto-generated by this contract.

---

## 6. ARC-3 — Inventory Bulk Import Model

**Supported template schema (Build Now):** Item Name (required), Base Unit (required — immutable after Inventory-item creation per SB-P-1.10 EIS §5), Opening Quantity (optional — a row with no quantity creates the Catalog/Inventory identity and link only, no Opening Stock movement), Catalog match hints (optional: SKU and/or Barcode, used only for match resolution against existing Catalog products, never written to `inventory_items` directly since that table carries no SKU/barcode column — confirmed by direct schema read, §2).

**Required vs. optional columns:** Item Name and Base Unit are required for every row (an Inventory item cannot exist without them, per SB-P-1.10 EIS §5's `base_unit` not-null/immutable constraint); Opening Quantity, SKU hint, and Barcode hint are optional.

**Validation order** (mirrors the existing Catalog import's own validated order — `verifyCsvStructure`/`verifyXlsxStructure` → structural caps → per-row field validation → identity classification — extended with inventory-specific steps):

1. File-format/structural containment (reuse `content-type.ts`/`limits.ts` verbatim — file-format parsing is domain-agnostic; see §5 of instruction1.90.md's "Existing Independent Parser Gate" and this report's §16 disclosure).
2. Per-row field validation (item name non-empty, base unit non-empty/recognized, opening quantity non-negative numeric if present).
3. Catalog-side match resolution (does a Catalog product already exist by exact name, matching SKU hint, or matching barcode hint — reusing the existing `catalog_products_search` RPC, already part of the locked nineteen).
4. Inventory-side match resolution (does an `inventory_items` row already exist by exact name for this business, and if so, is it already linked to a Catalog product via `catalog_products.inventory_item_id`).
5. Row-state classification from the combination of 3 and 4 (§ ARC-5 below).

**Row-state vocabulary (Build Now):** `READY` (no conflicting match; safe to create Catalog + Inventory + link + Opening Stock), `POSSIBLE_MATCH` (a Catalog and/or Inventory match exists; requires merchant confirmation before proceeding — never auto-linked), `NEEDS_CORRECTION` (validation failure — missing required field, invalid unit, invalid quantity), `SKIPPED` (merchant explicitly excluded at commit time) — this is the exact same four-state vocabulary Catalog import already uses (`READY`/`POSSIBLE_MATCH`/`NEEDS_CORRECTION`/`SKIPPED`), reused rather than reinvented, per D-056's "compatible principle" reconciliation already recorded in the Founder record.

**Valid-row vs. invalid-row behavior:** identical principle to D-056 — valid rows proceed through the orchestration in §7 ARC-4; invalid rows never create partial Inventory or Catalog truth (no Inventory item, no Catalog product, and no Opening Stock movement for a row that fails validation) and are surfaced for correction, never silently dropped.

**Duplicate/match handling:** no fuzzy match ever auto-creates, auto-merges, or auto-links (§8 ARC-5) — this is a hard requirement carried over unchanged from D-057 and explicit in instruction1.90.md §3 ARC-5.

**Retry/idempotency semantics:** every governed step in the orchestration (Catalog product creation, Inventory item creation — see below, link preview/assign, Opening Stock movement) already carries its own idempotency key and durable idempotency contract; the import row itself carries one stable `row_idempotency_key` (mirroring `catalog_import_rows.row_idempotency_key`) that seeds every downstream step's own deterministically-derived key, exactly as `deriveFollowUpIdempotencyKey` already does for Catalog import's price/tax/cost follow-ups. A retried commit attempt skips any step whose durable state already shows `"complete"` and only re-attempts the remainder — the same pattern already proven in `catalogImportCommit`'s SEC-IMP-5 durable follow-up state model.

**Batch-level status semantics:** identical model to `catalog_import_batches` — `previewed` → `committing` (atomic claim) → `committed`/`failed`, reusing the exact claim-before-mutation ordering already corrected in the Catalog import mission chain (SEC-IMP-4).

**Opening-stock audit behavior:** every Opening Stock movement created by bulk onboarding carries a `responsible_user_id` (the importing Owner) and, where `create_inventory_movement`'s existing `business_event_type`/`business_event_id` parameters support it, a loosely-coupled reference back to the originating inventory-import row — the exact "Transaction Links"/"Trusted event-link contract" mechanism SB-P-1.10 EIS §4 already specifies for precisely this purpose (an import row is, in EIS terms, an "originating business event"). **Whether `create_inventory_movement`'s current implementation already validates this specific event-type generically, or needs a small, additive registration for an `inventory_import_row` event type, is a concrete, bounded question for Build Mode to verify against the live function body** — flagged as an unresolved implementation-verification item (§18), not assumed either way.

**Existing Catalog import support tables — reuse or separate structure:** **A separate, narrow, parallel structure is required, not an extension of `catalog_import_batches`/`catalog_import_rows`.** Reasoning: `catalog_import_rows`' schema (`parsed_snapshot`, `matched_product_id`, `resolved_product_id`, `has_reference_cost_authority`, `follow_up_state` for price/tax/cost) is shaped entirely around Catalog-only concerns and typed foreign keys into `catalog_products`. Inventory-first onboarding needs to track a genuinely different shape: matches against *both* `catalog_products` and `inventory_items`, a base unit and opening quantity, and durable per-step state across *five* orchestration steps (Catalog match/create, Inventory match/create, link preview, link confirm, Opening Stock) rather than three follow-up operations. Overloading the existing Catalog-shaped tables with nullable, dual-purpose columns would blur two domains into one table — the same anti-pattern D-001/FWR-005 forbid at the truth-model level, just relocated into bookkeeping schema. A new `inventory_import_batches` / `inventory_import_rows` pair, structurally parallel to (but not shared with) the existing Catalog pair, preserves the same proven *pattern* (service-role bookkeeping client, atomic claim, durable per-row state, business-scoped RLS SELECT-only for `authenticated`) without merging the two domains' bookkeeping data. See §14 ARC-10 for the exact classification.

---

## 7. ARC-4 — Atomic Inventory-First Orchestration

**Reality check, stated plainly per instruction1.90.md §5 ARC-4's own demand to "state clearly... where compensating/cleanup behavior is required if full database atomicity is not feasible":** full cross-step database atomicity across all five steps is **not feasible** and is **not proposed**. Each governed operation below (`create_catalog_product`, the Inventory-item insert, `preview_catalog_inventory_link_change`, `assign_or_replace_catalog_inventory_link`, `create_inventory_movement`) is its own `SECURITY DEFINER`/RLS-scoped database transaction, invoked as a separate call from the orchestrating server function — exactly the same shape `catalogImportCommit`'s existing row-processing loop already has for Catalog product creation followed by price/tax/cost follow-ups, and precedent this mission reuses deliberately rather than re-deriving.

**Exact order (per Founder record §2 FWR-005, confirmed unchanged and directly implementable against existing operations):**

1. **Resolve Catalog match.** `catalog_products_search` (existing, read-only, part of the locked nineteen) against the row's item name and any SKU/barcode hint.
2. **Merchant confirmation where required.** If step 1 finds a candidate, or step 3 below finds an Inventory-side candidate, the row is classified `POSSIBLE_MATCH` and the orchestration stops at this row until the merchant's explicit commit-time decision (link to the existing match, or proceed as new) — never silently resolved either way.
3. **Create Catalog product if needed.** `create_catalog_product` (existing, unchanged signature), using the row's already-persisted `row_idempotency_key`-derived key — safe to call on retry because it is itself idempotent.
4. **Create Inventory entity.** A direct, RLS-scoped `INSERT INTO inventory_items` (the existing authorization pattern for this table — no `SECURITY DEFINER` wrapper exists or is proposed to be added; see §11 ARC-6), guarded by the same per-row idempotency discipline (a durable "inventory item already created" flag in the import row's state, checked before attempting the insert on retry, since `inventory_items` itself carries no idempotency-key column of its own today).
5. **Establish the governed one-to-one link.** `preview_catalog_inventory_link_change` then `assign_or_replace_catalog_inventory_link` (existing, unchanged, already includes the D-068 safeguard — see §3 FWR-005 above). The preview step's 15-minute token expiry (confirmed live, §2) means the orchestration must call preview and confirm close together within one commit attempt, not across a long-idle retry window; if a retry occurs after token expiry, the orchestration re-previews rather than reusing a stale token — the same "STALE_STATE" outcome the function already returns and already handles safely by design.
6. **D-068 confirmation is not a separate step — it is already inside step 5.** `preview_catalog_inventory_link_change` computes `price_confirmation_required` itself; the orchestrator supplies whatever price the import row specifies (or the product's own current price, unit-adjusted, if the template provides one) only when the preview response says confirmation is required, and never otherwise — so a D-068 price reinterpretation can only ever happen through the exact same explicit-confirmation path a manual link change already uses, never silently.
7. **Create Opening Stock movement if quantity exists.** `create_inventory_movement` with `p_movement_type = 'opening_stock'`, `p_direction = 'increase'` (the only valid pairing per the EIS's own type/direction matrix) — reached only after step 5 has committed, so an Opening Stock movement is never posted against an item that is not yet linked, and the single-opening-stock-per-item invariant (already enforced at the data layer per SB-P-1.10 EIS §6) protects against a duplicate on retry.

**Preventing the three specific partial-truth failure modes instruction1.90.md §5 ARC-4 names:**

| Failure mode | Prevention |
|---|---|
| Inventory item created but Catalog product/link absent | The orchestrator's per-row durable state never marks a row `CREATED` until step 5 (link) has committed; a row that completed only steps 3–4 remains `FAILED`/retryable, never `CREATED`, so it is always visibly incomplete rather than silently accepted |
| Catalog product created but failed Inventory workflow leaves an unintended live duplicate | Impossible by construction: step 3 (`create_catalog_product`) is idempotent on the row's stable key, so a retry never creates a second product; a Catalog product left non-stock after a partial failure is not a "duplicate," it is exactly the same, already-approved D-002/FWR-005 state as any ordinary Catalog-first product awaiting **Link to Inventory** — no cleanup/deletion is required or proposed |
| Opening Stock created before the governed link is valid | Structurally impossible: step 7 is reachable only after step 5's `assign_or_replace_catalog_inventory_link` has returned `outcome: "completed"`; there is no code path that calls `create_inventory_movement` earlier in the sequence |
| A D-068 price reinterpretation occurring silently | Structurally impossible: `current_selling_price` is only ever written by `assign_or_replace_catalog_inventory_link`'s own `CASE WHEN v_token.price_confirmation_required THEN p_confirmed_price ELSE current_selling_price END` (confirmed by direct read of the live function body, §2) — a caller cannot force a price change the function itself did not determine was required |

**Compensating/cleanup behavior where full atomicity is not feasible:** none is required beyond what already exists. Because every step is individually idempotent and the row's durable state always reflects exactly which steps have committed, "compensation" is simply "retry the row" — the same principle already proven for Catalog import's own commit loop. No step is ever rolled back or deleted; a partially-completed row is always a valid, inspectable, retryable intermediate state, never a corrupted one.

---

## 8. ARC-5 — Match / Duplicate Rules

No fuzzy match is proposed anywhere in this contract — every match tier below is an exact, deterministic comparison, consistent with D-057's "a name, SKU, or barcode match enters the correction queue."

| Signal | Catalog-side check | Inventory-side check |
|---|---|---|
| Exact name | `catalog_products_search` exact-name tier (existing) | Exact `name` match against `inventory_items` for the business (new query, read-only, no new table) |
| Merchant/generated SKU | `catalog_products_search` exact-SKU tier (existing) | N/A — `inventory_items` carries no SKU column (confirmed live schema, §2) |
| Barcode where present | `catalog_products_search` exact-barcode tier (existing) | N/A — same reason |
| Existing Catalog ↔ Inventory links | `catalog_products.inventory_item_id IS NOT NULL` (existing column) — a matched Catalog product that is *already linked* to a *different* Inventory item is a `POSSIBLE_MATCH` requiring explicit merchant resolution, never an automatic replace | Same check from the Inventory side: an `inventory_items` row already referenced by some `catalog_products.inventory_item_id` is already linked; presenting it as a fresh, unlinked target is rejected as a match conflict, not silently re-linked |
| Archived Catalog products | Existing `status = 'archived'` filter — an archived match is surfaced, never silently reactivated or silently skipped | N/A (Inventory has its own independent active/archived status; see next row) |
| Already-linked Catalog products | Covered above | Covered above |
| Inventory records with stock history | `preview_catalog_inventory_link_change`'s own existing `DEPENDENT_HISTORY_CONFLICT` check (D-047 tenure-bounded, confirmed live, §3) already refuses to relink an item whose movement history postdates its current link establishment — bulk onboarding inherits this refusal automatically by calling the same function, with zero new logic |

**No silent create/merge/link/overwrite** is possible anywhere in this table: every non-exact-`READY` outcome routes to `POSSIBLE_MATCH`, which per §6 ARC-3 blocks automatic progression until the merchant's explicit commit-time decision.

---

## 9. ARC-6 — Permissions

**Verified current reality, not assumed:** direct RLS-policy inspection of `inventory_items` and `inventory_movements` (§2) shows every existing policy scoped to `business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid())` — **Owner only.** No Manager-scoped or Employee-scoped RLS policy exists for either table today. A repository-wide search for Manager-role permission logic (`grep -rli manager src/ supabase/migrations/`) found none outside a single explanatory comment in `catalog-import.ts`. This mirrors Catalog import's own already-approved Owner-only Phase 1 posture exactly.

| Authority | Phase 1 disposition | Basis |
|---|---|---|
| Owner inventory bulk onboarding | **Authorized** | Owner already holds full RLS-granted read/write on `inventory_items`/`inventory_movements`; bulk onboarding is additive orchestration over already-authorized operations, not new authority |
| Manager inventory bulk onboarding | **Not authorized in Build Now** | Manager holds **zero** RLS-granted access to `inventory_items`/`inventory_movements` today, for anything — not merely a missing bulk-import permission. Authorizing Manager bulk onboarding would require first authorizing Manager inventory access generally, which is a permission-model expansion squarely outside this mission's scope ("Do not create permission expansion merely to make the workflow convenient" — instruction1.90.md §3 ARC-6) |
| Employee access | **Denied**, unchanged | No Employee authority exists anywhere in the current permission model |
| Reference Cost handling if included in any template | **Not included in the Inventory template.** Reference Cost is a Catalog-side, Owner-controlled-by-default concept (D-014/D-016) with its own independent authority; an Inventory/Opening-Stock template has no reason to carry it, and this contract does not add it there. If a future Catalog-side bulk import template independently includes Reference Cost, it inherits Catalog import's existing, already-approved `has_reference_cost_authority`/Owner-derived authority mechanism unchanged | D-014, D-016, existing `catalog_import_rows.has_reference_cost_authority` |
| Inventory link authority | **Owner only, unchanged** — `preview_catalog_inventory_link_change`/`assign_or_replace_catalog_inventory_link` already derive authority via `catalog_internal.resolve_owner_business`, the same Owner-derivation function every other Catalog command uses | Confirmed live, §2/§3 |

**Fail-closed confirmation:** this contract introduces no new role, no new RLS policy granting Manager or Employee any inventory access, and no bypass of the existing Owner-derivation pattern. Where the Founder record's own §3 table flagged D-058 permission reconciliation as still required, this section resolves it: Build Now inventory bulk onboarding is Owner-only, for the same reason Catalog bulk import is Owner-only today, until a separately authorized permission-model mission introduces real Manager authority infrastructure for *either* domain.

---

## 10. ARC-7 — Template Contract and Versioning

- **Catalog template filename/columns:** `catalog-import-template.csv` (and an `.xlsx` twin), columns matching the existing recognized-header allowlist in `fields.ts`'s `HEADER_ALIASES` (Product Name, Selling Unit, Category, SKU, Barcode, Description, Selling Price, Tax Treatment, Product Tax Rate, and Reference Cost where the requesting Owner holds cost authority) — no new column is introduced; the template merely documents columns the parser already recognizes.
- **Inventory/Opening Stock template filename/columns:** `inventory-import-template.csv` (and `.xlsx` twin), columns: Item Name (required), Base Unit (required), Opening Quantity (optional), SKU hint (optional, match-only), Barcode hint (optional, match-only) — per §6 ARC-3.
- **Example-row policy:** exactly one illustrative example row per template, clearly marked as an example (e.g., an obviously-placeholder product name), never a real merchant record, and never counted as live data if accidentally left in an uploaded file (ordinary duplicate/validation handling applies to it like any other row).
- **Version identifier strategy:** a single version marker embedded in the template filename or a leading metadata cell (e.g., `v1`), incremented only when a column is added, removed, or its meaning changes — not on every minor wording tweak.
- **Backward-compatibility/unsupported-version behavior:** the parser does not require an exact version match; it matches columns by recognized header name (already the existing Catalog import behavior — unrecognized columns are reported, not rejected outright) rather than by strict positional/version contract, so an older downloaded template continues to work unless a column it relies on was later removed, in which case the existing `unrecognizedColumnNames` reporting mechanism already surfaces the mismatch to the merchant.
- **CSV/XLSX identical logical schema:** yes, both formats carry the same column set and meaning — unchanged principle from Catalog import today.
- **No merchant/private data in template downloads:** both templates are static, generated-once assets (or generated from a fixed schema definition with no per-business data interpolation) — never populated from any business's actual Catalog or Inventory data.

---

## 11. ARC-8 — Channel-Neutral Creation Contract

**Only two channels exist today** (dashboard/manual, CSV/XLSX bulk import); WhatsApp text, voice, and photo-assisted creation are **not implemented anywhere in the repository at this SHA** (confirmed by repository-wide search, §2) — they remain future, D-053-approved-but-unbuilt channels.

**The governed boundary, unchanged in shape from today:** `create_catalog_product` is already the single Catalog product-creation path for every existing channel. This contract's only change to it is internal-body SKU-resolution logic (§5 ARC-2), which every caller inherits automatically regardless of channel, with no caller-side change required. When WhatsApp channels are eventually built, they must call this same function (already the only sanctioned Catalog write path, per the locked nineteen-command boundary) — a requirement this report states explicitly for that future mission to inherit, not one this mission needs to build against, since no such channel exists to reconcile against yet.

**Identity validation, Inventory linking, D-068 safeguards, and audit semantics** are likewise already channel-agnostic: `preview_catalog_inventory_link_change`/`assign_or_replace_catalog_inventory_link` do not know or care which UI/channel initiated the call, only which authenticated actor and business are involved — exactly the shared-domain-logic requirement instruction1.90.md §5 ARC-8 asks for.

---

## 12. ARC-9 — Existing Public Catalog Command Boundary

**No twentieth public Catalog command is required.** Every FWR-001 through FWR-005 need maps onto either an existing Catalog command used unchanged (`create_catalog_product`, `catalog_products_search`, `preview_catalog_inventory_link_change`, `assign_or_replace_catalog_inventory_link`), an existing Catalog command's internal body corrected under the same precedent already accepted for `delete_catalog_product`'s SEC-IMP-6 correction ("internal implementation of an existing command may be corrected only where required, without widening authority or changing its public semantic contract" — `create_catalog_product`'s SKU-generation addition fits this exactly, since its signature, `p_sku text DEFAULT NULL`, does not change), or an **Inventory-domain** operation (`create_inventory_movement`, a direct `inventory_items` insert) that was never part of the Catalog nineteen in the first place and remains outside that boundary. Re-verified directly against the live test project (§2): exactly nineteen `SECURITY DEFINER` Catalog commands exist today, matching the locked list byte-for-byte; this reconciliation proposes adding none and removing none.

---

## 13. Existing Independent Parser Gate — Explicit Non-Claim

Per instruction1.90.md §5: **this report does not claim the Lovable CPU-time/parser-runtime evidence gap (report1.92.md through report1.95.md's still-open architecture/evidence chain) is resolved.** Inventory bulk import's file-parsing step (CSV/XLSX structural verification, decompression containment) is designed to reuse `content-type.ts`/`limits.ts` verbatim, since those modules parse file *bytes*, not Catalog-specific meaning, and carry no dependency on whichever worker/isolation mechanism is ultimately approved for Catalog import. **Whatever parser execution/isolation architecture Mission Control ultimately approves for Catalog import must be adopted identically for Inventory import** — this report does not propose, and Build Mode must not implement, a second, Inventory-specific parser execution model. Until that gate closes, Inventory bulk import inherits the same "not yet production-runtime-proven" status Catalog import currently carries, and this report's `Build Now` classification (§17) for the *orchestration/domain logic* around parsing is independent of, and does not presuppose, resolution of the parser-runtime gate itself.

---

## 14. ARC-10 — Supabase and Security Impact Map

| Item | Classification | Detail |
|---|---|---|
| `catalog_products.sku`/`sku_normalized`, `catalog_products_business_sku_normalized_uniq` | **Existing, reused** | No schema change; SKU auto-generation only changes what value `create_catalog_product` writes into already-existing columns |
| `create_catalog_product` | **Amended (internal body only)** | Adds SKU-generation-when-absent logic; signature, return type, and every other behavior unchanged |
| `update_catalog_product_identity` | **Existing, reused** | Already the correct path for a merchant to later replace a generated SKU |
| `catalog_products_search` | **Existing, reused** | Catalog-side match resolution |
| `preview_catalog_inventory_link_change` / `assign_or_replace_catalog_inventory_link` / `catalog_link_preview_tokens` | **Existing, reused, unchanged** | The entire D-068 safeguard and link-establishment mechanism |
| `inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`, `create_inventory_movement`, `preview_inventory_movement` | **Existing, reused, unchanged** | SB-P-1.10's own ledger/movement machinery; Opening Stock is an ordinary call into what already exists |
| `inventory_import_batches` (new table) | **New** | Parallel to, structurally modeled on, but never merged with `catalog_import_batches` — batch status, business scope, initiating user, original filename, file kind, row count, timestamps |
| `inventory_import_rows` (new table) | **New** | Parallel to `catalog_import_rows`: row number, status, parsed snapshot (item name/base unit/opening quantity/SKU hint/barcode hint), Catalog match reference, Inventory match reference, durable per-step orchestration state (Catalog-created/Inventory-created/link-established/opening-stock-created), resolved Catalog product id and resolved Inventory item id, resolved-by/resolved-at, row idempotency key |
| A small number of narrow, `SECURITY DEFINER` or RLS-gated server-only functions analogous to the existing import preview/commit pattern, to orchestrate the five-step sequence server-side | **New, narrow** | Exact function boundary (whether this is one commit-loop function analogous to `catalogImportCommit`, or several) is an implementation-design decision for Build Mode, not fixed here; it must not become a twentieth *Catalog* command (§12) — these are Inventory-import-support functions, a distinct governance boundary the locked nineteen never claimed to cover |
| RLS policies on the two new import-support tables | **New**, modeled directly on `catalog_import_batches`/`catalog_import_rows`'s existing pattern: `authenticated` SELECT-only within the caller's own owned business; all INSERT/UPDATE reserved to the server-only bookkeeping client | Mirrors existing, already-security-reviewed pattern |
| Idempotency keys for the new orchestration steps | **New usage of an existing pattern** | Each step derives its key from the stable `row_idempotency_key`, exactly as `deriveFollowUpIdempotencyKey` already does for Catalog import's follow-ups — no new idempotency *mechanism*, only new keys flowing through it |
| Template asset/endpoint (Catalog and Inventory downloadable templates) | **New** | Static asset generation or a narrow read-only server function serving a fixed, non-merchant-data file; exact mechanism (static public asset vs. generated-on-request) is a Build Mode implementation choice |
| Twentieth public Catalog command | **Not proposed, not required** | §12 |
| Any change to `businesses`, `catalog_categories`, `catalog_tax_events`, `catalog_selling_price_events`, `catalog_reference_cost_events`, `catalog_product_link_events`, `catalog_audit_events`, `catalog_deletion_records` | **None** | Out of scope; no Founder decision touches these |
| Any change to existing Catalog or Inventory RLS policies | **None** | This contract adds new tables' own RLS; it does not modify any existing table's existing policy |

---

## 15. Security Impact Map

| Concern | Disposition |
|---|---|
| Authority source for every mutation | Unchanged: caller-JWT/RLS for direct `inventory_items`/`inventory_movements` writes and for every Catalog `SECURITY DEFINER` command; a narrow, server-only bookkeeping client confined to the two new import-support tables, exactly mirroring the existing, already-reviewed Catalog import boundary |
| Cross-business isolation | Unchanged pattern: every new table scoped by `business_id`, every new RLS policy modeled on the existing `catalog_import_*` pattern already found sufficient in three prior Security re-verifications this repository's mission history recorded |
| Idempotency/replay safety | Reuses the existing, already-audited durable idempotency contract at every step; introduces no new idempotency primitive |
| Sanitized failure boundary | The new orchestration must reuse the existing `logSanitized`/`sanitizedError()` pattern from `catalog-import.ts` verbatim — no raw error, merchant text, or internal detail may reach the client or logs, exactly as already required for Catalog import |
| Secret isolation | Unchanged: service-role material remains confined to the dynamically-imported server-only client for the two new import-support tables only, never for Catalog or Inventory truth tables themselves |
| Parser/runtime containment | Explicitly **not resolved by this report** — inherited, unresolved, and must track whatever architecture Mission Control ultimately approves for Catalog import (§13) |
| Fail-closed permission posture | Confirmed, not merely assumed, via direct RLS inspection (§9) — Manager/Employee inventory access does not exist today; this contract adds none |
| Twentieth Catalog command risk | None — §12 |
| D-047/D-068 preservation | Both preserved by construction, by reusing the exact existing functions that already enforce them, rather than reimplementing equivalent logic that could drift from the original (§3, §7) |

---

## 16. Test/Evidence Plan for Future Build Mode

- **Unit-level:** SKU-generation collision/retry behavior; new `fields.ts`-equivalent header mapping for the Inventory template; new row validation (item name, base unit, opening quantity).
- **DB-integration (dedicated test project only, never production):** business-scoped uniqueness of generated SKUs under concurrent creation; idempotent replay of every new step; RLS isolation tests for the two new import-support tables mirroring the existing `support-schema-rls.test.ts` pattern; a direct test that `create_inventory_movement`'s single-opening-stock-per-item invariant blocks a duplicate Opening Stock from a retried commit.
- **Orchestration-level:** a full inventory-first row from `READY` through Catalog-create → Inventory-create → link-establish → Opening-Stock, asserting each intermediate durable state; a forced mid-sequence failure (e.g., simulated link-preview token expiry) followed by a retry, asserting no duplicate Catalog product or Inventory item and correct resumption from the failed step; a `POSSIBLE_MATCH` row on both the Catalog and Inventory sides, asserting no silent auto-link.
- **Real-HTTP (mirroring the existing `real-http.test.ts` pattern):** authenticated Owner end-to-end bulk onboarding; Manager/Employee denial (confirming the fail-closed posture in §9 is actually enforced, not merely designed); cross-business non-disclosure for the new import-support tables.
- **Template evidence:** downloaded template round-trips cleanly through the corresponding import path with zero validation errors on its own example row.
- **Regression:** the full existing Catalog import test suite (real-HTTP, support-schema RLS, content-type, parse-isolation-or-whatever-mechanism-is-then-approved) must remain green, since `create_catalog_product`'s body is amended (§5) and must not regress any existing behavior.
- **Command-count regression:** exactly nineteen public Catalog commands must remain, re-verified directly against `pg_proc` after implementation, exactly as every prior Catalog-import mission in this repository's history has done.

---

## 17. Mandatory Classification

### Build Now

- Inventory/Opening Stock CSV/XLSX bulk onboarding (new `inventory_import_batches`/`inventory_import_rows` + orchestration functions).
- Downloadable Catalog and Inventory templates.
- Automatic Smart Business-generated SKU when absent (`create_catalog_product` body amendment).
- One SKU rule across creation channels (satisfied by construction, §11).
- Inventory-first Catalog establishment/linking before Opening Stock (new orchestration reusing existing link/movement operations).
- Explicit duplicate/match review (§8).
- D-068 safeguard where applicable (already inherited from the existing link mechanism, §7).

### Build Later

- Merchant-configurable SKU formats.
- Barcode/SKU label printing.
- Batch/lot/expiry import.
- Multi-unit conversion/import packaging.
- Historical bulk reconciliation tooling for already-existing unlinked Inventory/Catalog records.
- A maintained running-balance stock projection (already flagged Build Later by SB-P-1.10 EIS itself, unaffected by this mission).

### Add-on

None. No external service is required or proposed; every mechanism this report specifies exists inside the current Supabase/Cloudflare-Workers/TanStack Start architecture.

### Separate Product

None.

### Reject

- Inventory and Catalog as one truth record — never proposed; §3 FWR-005 and §7 ARC-4 preserve strict separation throughout.
- Direct current-stock writes — structurally impossible; the only write path to `inventory_movements` remains `create_inventory_movement`, unchanged.
- Silent duplicate creation/merge/linking — prevented by §8 ARC-5.
- Post-history silent linking contrary to D-047 — prevented by the existing, reused `DEPENDENT_HISTORY_CONFLICT` check.
- Channel-specific SKU behavior — prevented by §11 ARC-8's placement of SKU logic inside the shared governed command.
- SKU used as barcode/legal identifier substitute — explicit in the §4 D-023 replacement wording.
- Twentieth public Catalog command — not required, §12.

---

## 18. Unresolved Assumptions or Conflicts

Stated per instruction1.90.md §9's evidence-discipline requirement — none of the following blocks a positive verdict, but each is a concrete, bounded item Build Mode (or the Supabase/Security reviews preceding it) must resolve rather than assume:

1. **`create_inventory_movement`'s exact current validation behavior for `business_event_type`/`business_event_id` values it has not seen before** (§6 ARC-3) — whether an `inventory_import_row` event type is already generically supported by the live function body, or needs a small, additive extension. Engineering inference from the EIS's documented design intent, not yet confirmed against the live function body's exact SQL (which this mission did not read in full, unlike every other function cited in this report).
2. **The exact generated-SKU length/character-set/entropy sizing** (§5 ARC-2) is left to Build Mode as an implementation detail; this report specifies the contract's guarantees, not the literal format string.
3. **Whether the new orchestration functions should be one commit-loop function or several** (§14 ARC-10) is left to Build Mode, provided the outcome never becomes a twentieth *public Catalog* command.
4. **Template asset delivery mechanism** (static public file vs. generated-on-request server function) is left to Build Mode as a deployment-detail choice with no security-relevant difference identified in this reconciliation, since neither carries merchant data.
5. **The still-open Catalog import parser/runtime architecture gate** (§13) is explicitly not resolved by this report and gates the *file-parsing* portion of Inventory bulk import identically to how it already gates Catalog bulk import — this is a dependency this report discloses, not a conflict this report can resolve.

No irreconcilable conflict with SB-P-1.10 Inventory Truth, D-047, or D-068 was found. No twentieth Catalog command was found necessary. No permission behavior was found to require becoming non-fail-closed. No unapproved external service was found necessary. No unresolved governance conflict was discovered. None of instruction1.90.md §7's Stop Rules are triggered.

---

## 19. Explicit Confirmation of No Implementation or Production Mutation

During this mission:

- application/parser code changed: **NO**
- dependency changed: **NO**
- migration created or applied: **NO**
- Supabase DDL/DML performed: **NO** — every database interaction this mission performed was a read-only `SELECT` against `information_schema`/`pg_catalog`/`pg_proc`/`pg_policies`/`pg_constraint` on the dedicated test project, to confirm exact live schema/RLS/function state rather than infer it from documentation alone
- production data mutated: **NO**
- Lovable mutated, published, or deployed: **NO**
- domain cutover performed: **NO**
- parser runtime redesigned: **NO** — explicitly disclaimed, §13
- R2 introduced: **NO**
- permission expanded: **NO**
- Product Truth mutated: **NO** — the D-023 replacement wording in §4 is a draft for Mission Control/Founder review, not an applied change to the canonical decision record
- twentieth Catalog command added: **NO**
- Build Lock issued: **NO**

---

## 20. Final Verdict

**`FOUNDER WORKFLOW ARCHITECTURE READY FOR SUPABASE + SECURITY REVIEW`**

Per instruction1.90.md §9, this verdict does not itself authorize Build Mode. Mission Control must obtain a Supabase Backend Architecture review (schema/RPC/RLS/atomicity impacts, §14) and a Security & Permissions Architecture review (authority, isolation, upload/import, idempotency, abuse, privileged-path boundaries, §15) before any Build Lock/Build Mode instruction may be issued. Production migration remains blocked throughout.
