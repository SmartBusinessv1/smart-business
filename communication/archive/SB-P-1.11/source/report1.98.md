# SMART BUSINESS — CLAUDE CODE COMPLETION REPORT

## SB-P-1.11-FWR-3 — Backend Architecture Correction

**Report ID:** report1.98
**Mission:** SB-P-1.11-FWR-3 — Backend Architecture Correction
**Authorized By:** `communication/live/instruction1.92.md`
**Repository:** `SmartBusinessv1/smart-business`
**Mission type:** Plan mode / architecture correction only — no implementation authority
**Build Mode authority:** NONE
**Database migration authority:** NONE

**Mission Verdict: `BACKEND ARCHITECTURE CORRECTIONS READY FOR SUPABASE CONFIRMATION REVIEW`**

This report corrects `report1.96.md` against every finding in the merged Supabase Backend Architecture review (`report1.97.md`), resolving BKR-1 through BKR-5 with exactly one chosen architecture each — no unresolved alternatives are left open. It supersedes `report1.96.md`'s backend claims and is standalone: a migration author does not need to consult `report1.96.md` or invent lifecycle, tenancy, authority, or relationship semantics. No code, migration, RLS, grant, or Supabase mutation occurred.

---

## 1. Exact Latest `main` SHA Reviewed

`2f98eb041fbef5a6b0d0c34c9b3b70c9ca3b3f3c` (`Authorize SB-P-1.11 backend architecture correction (#216)`), confirmed via `git fetch origin main` immediately before beginning work to match `origin/main`'s head.

## 2. Source and Repository Evidence Reviewed

- `communication/live/instruction1.92.md` (this mission's governing instruction, read in full).
- `communication/live/instruction1.90.md`, `communication/live/report1.96.md` (the architecture being corrected, both read in full in the prior mission and re-confirmed unchanged on this SHA).
- `communication/live/instruction1.91.md`, `communication/live/report1.97.md` (the Supabase Backend Architecture review driving this correction, both read in full).
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md` (re-confirmed unchanged).
- `src/lib/catalog-import/idempotency.ts` — the live `deriveFollowUpIdempotencyKey` UUIDv5 derivation this report extends conceptually for BKR-2.
- The live dedicated test-project schema/function state (`drravyyauixltoihzmwo`), queried directly this mission (not inferred): the full current body of `delete_catalog_product` (re-read in full to confirm its exact five-clause `v_has_history` structure before specifying the BKR-4 sixth clause), and re-confirmation of `inventory_items` columns/constraints, `inventory_movement_idempotency_keys` columns, and the `assign_or_replace_catalog_inventory_link`/`preview_catalog_inventory_link_change` bodies already read in full in the prior mission.
- Catalog import support-table precedent (`catalog_import_batches`/`catalog_import_rows`, `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql` and the SEC-IMP corrections) as the structural precedent this correction extends, not copies.

Repository evidence took precedence over `report1.96.md`'s assumptions everywhere the two diverged, per instruction1.92.md §2.

---

## 3. BKR-1 Correction — Durable Inventory-Item Creation Idempotency

**Chosen architecture (one, not a menu):** a new, narrow, Inventory-domain `SECURITY INVOKER` RPC, `create_inventory_item`, backed by a new durable idempotency table `inventory_item_idempotency_keys` — structurally identical in shape to the already-live `inventory_movement_idempotency_keys` (confirmed by direct read, §2), not a novel pattern. This is the Supabase review's own stated preference (report1.97.md §6.1/§17 BKR-1), adopted here as the single locked design rather than left open.

**Why not the preallocated-ID alternative:** report1.97.md §6.1 permits a preallocated stable-ID design only if it "provides equivalent unknown-outcome safety" to the RPC+table design. A preallocated ID alone cannot distinguish "this ID was reserved but the insert never happened" from "the insert happened and this is the same request retrying" without *also* durably recording a payload fingerprint and a terminal outcome per key — at which point it has reconstructed the same idempotency table by another name, with more moving parts (an extra reservation step) and no offsetting benefit. The direct RPC+table design is smaller.

### 3.1 Exact logical operation name/purpose

`create_inventory_item` — creates one `inventory_items` row for the caller's own business, replay-safe under a caller-supplied idempotency key. Purpose: give Inventory-first bulk onboarding (and any future caller) the same unknown-outcome-safe replay guarantee `create_inventory_movement` and `create_catalog_product` already have; ordinary dashboard-driven single-item creation may continue to use the existing direct `INSERT` unchanged (§3.10).

### 3.2 Public/internal exposure classification

**Internal Inventory-domain operation, not a public Catalog command.** It is exposed the same way `create_inventory_movement` already is: callable by `authenticated` under RLS, owned by `postgres` (or an equivalent non-Catalog-executor role), `SECURITY INVOKER`. It is never counted toward, and never represented as, the locked nineteen public Catalog commands (§12).

### 3.3 Caller identity model

Identical to `create_inventory_movement`'s existing pattern: `auth.uid()` is the caller identity; business is derived the same way `inventory_items`'s existing RLS already derives it (`business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid())`), re-evaluated inside the function body, never trusted from a client-supplied `business_id` parameter. No new authority model, no service-role identity, no permission expansion.

### 3.4 Idempotency tuple

`(business_id, operation = 'create_inventory_item', idempotency_key)` — the same three-part scoping `inventory_movement_idempotency_keys` already uses, so the same collision-domain reasoning already proven for movements applies unchanged.

### 3.5 Payload fingerprint inputs

`name` (trimmed) and `base_unit` (trimmed) — the only two caller-supplied fields the function accepts. No generated/derived value (there is none here, unlike SKU generation) and no service-side timestamp is included in the fingerprint.

### 3.6 Durable outcome structure

A new composite return type, `inventory_command_result` (`outcome text, rejection_reason text, item_id uuid, idempotency_key uuid, resolved_at timestamptz`) — deliberately parallel in *shape* to the existing `catalog_command_result` for orchestration-code consistency (the calling server function already has to branch on an `outcome` field for every other step in the sequence, §9), but a distinct type, never the Catalog type itself, so the two domains' result vocabularies never blur.

### 3.7 Same-key/same-payload replay behaviour

Exactly the existing pattern: a repeated `(business_id, operation, idempotency_key)` whose fingerprint matches the stored fingerprint returns the original durable outcome (`outcome`, `rejection_reason`, `item_id`) without attempting a second `INSERT` — verbatim the same replay branch already present in `create_catalog_product`, `create_inventory_movement`, and `delete_catalog_product` (§2).

### 3.8 Same-key/different-payload conflict behaviour

Exactly the existing pattern: a repeated key whose fingerprint does not match returns `rejected` / `IDEMPOTENCY_CONFLICT` — the same branch already present in every governed command reviewed this mission.

### 3.9 Concurrency behaviour

Exactly the existing pattern: `pg_advisory_xact_lock` keyed by `(business_id, operation, idempotency_key)` before the idempotency-table lookup, matching `catalog_internal.idempotency_lock_key`'s existing role for Catalog commands and the per-item advisory lock `create_inventory_movement` already uses — two concurrent calls with the same key serialize against each other rather than racing to both insert.

### 3.10 Effect on existing direct Inventory creation outside this import workflow

**None.** The existing direct-`INSERT`-under-RLS path for ordinary dashboard-driven Inventory-item creation is not removed, deprecated, or required to change. `create_inventory_item` is an *additional*, narrower-purpose operation for callers that need replay safety (bulk import, and any future caller with the same need); it does not replace the general-purpose direct insert, exactly as `create_inventory_movement` coexists with (rather than replaces) any other Inventory read/write pattern already in place.

---

## 4. BKR-2 Correction — Preview-Generation-Scoped Link-Confirm Idempotency

**Chosen architecture (one, not a menu):** derive the link-confirm idempotency key from `(row_idempotency_key, "catalog_inventory_link_confirm", preview_token_id)`, using the exact existing UUIDv5 mechanism in `src/lib/catalog-import/idempotency.ts` (`deriveFollowUpIdempotencyKey`, read in full, §2) extended with a third input component, rather than introducing a separate monotonic attempt-counter column.

**Why the token ID and not a monotonic counter:** `catalog_link_preview_tokens.id` (confirmed live, `gen_random_uuid()` default, §2 of the prior mission's report1.96.md evidence, re-confirmed unchanged this mission) is already a fresh, unique, durably-persisted value generated exactly once per preview call. Using it directly as the third derivation input gives every preview generation its own deterministic confirm-key for free, with no new counter column, no extra increment step, and no risk of a counter racing or drifting out of sync with the actual preview state. The orchestrator captures `preview_token_id` from the preview response and derives the confirm key immediately afterward, before calling confirm — it never needs to know the key before the token exists, because confirm is always the very next call after preview in the sequence (§9).

### 4.1 Root identity and derivation inputs (conceptual)

- **Root row identity:** the import row's own stable `row_idempotency_key` (§6, `inventory_import_rows.row_idempotency_key`) — the same root every other per-row derived key (Catalog creation, Inventory creation, Opening Stock) also uses.
- **Operation label:** a fixed string per logical step, extending the existing `ImportFollowUpOperation`-style closed vocabulary: `catalog_create`, `inventory_create`, `catalog_inventory_link_confirm`, `opening_stock` (matching report1.97.md §7's required operation domains exactly).
- **Generation component (link-confirm only):** `preview_token_id`, appended to the derivation input only for the `catalog_inventory_link_confirm` operation — every other operation label derives from `(row_idempotency_key, operation)` alone, unchanged from the existing two-part pattern.

Conceptually: `derive(row_idempotency_key, "catalog_inventory_link_confirm", preview_token_id)` = UUIDv5(NAMESPACE, `"${row_idempotency_key}:catalog_inventory_link_confirm:${preview_token_id}"`) — the same hash construction `deriveFollowUpIdempotencyKey` already performs, with one additional colon-joined component. No new dependency, no new persisted column beyond what §6 already requires to remember the current `preview_token_id`.

### 4.2 Behavioural guarantees

- **Retry of the same preview confirmation reuses the same derived key:** because the input triple (`row_idempotency_key`, operation label, `preview_token_id`) is unchanged across a retry of confirming the *same* preview, the derived key is identical, and `assign_or_replace_catalog_inventory_link`'s own existing idempotency replay (§2) returns the original result.
- **Re-preview creates a new derived confirmation key:** a fresh `preview_catalog_inventory_link_change` call always returns a new, distinct `preview_token_id` (confirmed live: no code path reuses an old token id for a new preview), so the derived confirm-key for the new attempt is necessarily different from the old one — never colliding with, and never needing to overwrite, the old key's terminal outcome.
- **Stale preview attempts remain durable historical outcomes and are not overwritten:** the old derived key's `STALE_STATE` (or any other terminal) outcome remains permanently recorded under its own distinct key in `catalog_write_idempotency_keys`, exactly as every other terminal idempotency outcome already is — nothing is deleted or replaced.
- **No infinite preview/retry loop is possible:** re-preview attempts increment the same bounded `attempt_count` the row's durable state already tracks for the whole row (§6), not a separate unbounded counter; Build Mode must enforce a governed maximum attempt count before surfacing a terminal `FAILED` execution state to the merchant, consistent with the bounded-retry discipline already required for SKU generation (§5, and report1.97.md §8).
- **Merchant confirmation requirements are preserved:** `assign_or_replace_catalog_inventory_link`'s existing `PRICE_CONFIRMATION_REQUIRED` gate (§2) is untouched by this correction — the derivation change only affects which idempotency key wraps the *call*, never what the call itself requires before it will succeed.
- **No preview token is exposed as authority outside the existing governed D-068 flow:** the token id is used purely as a key-derivation input inside the server-only orchestration; it is never returned to the browser as a capability, never accepted as caller input for any other operation, and never substitutes for the existing `preview_catalog_inventory_link_change`/`assign_or_replace_catalog_inventory_link` pair's own internal validation (fingerprint match, expiry, actor match, action match — all unchanged, §2).

---

## 5. BKR-3 Exact Inventory Import Persistence Contract

This section locks the physical contract report1.97.md §4 specified, resolved into one standalone statement (no executable SQL, per instruction1.92.md §6, but precise enough that no lifecycle, tenancy, authority, or relationship semantic is left to a migration author's judgment).

### 5.1 `inventory_import_batches`

| Column | Type / constraint |
|---|---|
| `id` | `uuid PRIMARY KEY DEFAULT gen_random_uuid()` |
| `business_id` | `uuid NOT NULL REFERENCES businesses(id)` |
| `initiated_by` | `uuid NOT NULL` (the importing Owner's `auth.uid()`) |
| `original_filename` | `text NOT NULL` |
| `file_kind` | `text NOT NULL CHECK (file_kind IN ('csv','xlsx'))` |
| `row_count` | `integer NOT NULL CHECK (row_count >= 0)` |
| `status` | `text NOT NULL DEFAULT 'previewed' CHECK (status IN ('previewed','committing','committed','failed'))` |
| `created_at` | `timestamptz NOT NULL DEFAULT now()` |
| `committed_at` | `timestamptz NULL` |

Constraints: `UNIQUE (business_id, id)` (the tenant-composite-key anchor every row-level FK references, matching `catalog_import_batches`'s own precedent exactly); a check enforcing `status = 'committed' ⟺ committed_at IS NOT NULL` (bidirectional coherence, report1.97.md §4.1); an index on `(business_id, created_at DESC, id)` for Owner history retrieval. No ordinary delete path — no DELETE grant/policy for any application role, matching the existing Catalog import precedent.

### 5.2 `inventory_import_rows`

| Column | Type / constraint |
|---|---|
| `id` | `uuid PRIMARY KEY DEFAULT gen_random_uuid()` |
| `batch_id` | `uuid NOT NULL` |
| `business_id` | `uuid NOT NULL` |
| `row_number` | `integer NOT NULL CHECK (row_number >= 1)` |
| `classification_state` | `text NOT NULL CHECK (classification_state IN ('READY','POSSIBLE_MATCH','NEEDS_CORRECTION','SKIPPED'))` — the pre-commit validation/match decision, separate from execution progress (report1.97.md §4.2/§9.2, adopted verbatim) |
| `execution_state` | `text NOT NULL DEFAULT 'PENDING' CHECK (execution_state IN ('PENDING','IN_PROGRESS','FAILED','COMPLETE'))` — the post-commit multi-step orchestration progress, independent of `classification_state` |
| `parsed_snapshot` | `jsonb NOT NULL` — allowlisted Inventory-import fields only (item name, base unit, opening quantity, SKU/barcode match hints); never raw file bytes, never unrecognized columns' values |
| `correction_reason` | `text NULL`, closed vocabulary only (e.g. `MISSING_NAME`, `INVALID_UNIT`, `INVALID_QUANTITY`) — never a raw parser/SQL error string |
| `matched_catalog_product_id` | `uuid NULL` — candidate discovered during classification, not yet acted on |
| `matched_inventory_item_id` | `uuid NULL` — candidate discovered during classification, not yet acted on |
| `resolved_catalog_product_id` | `uuid NULL` — the Catalog product actually created or confirmed-linked by this row |
| `resolved_inventory_item_id` | `uuid NULL` — the Inventory item actually created or confirmed-linked by this row |
| `opening_stock_movement_id` | `uuid NULL` — set only after `create_inventory_movement` succeeds for this row |
| `row_idempotency_key` | `uuid NOT NULL DEFAULT gen_random_uuid()` — the root identity every derived per-step key (§4, §9) builds on |
| `link_preview_token_id` | `uuid NULL` — the current (most recent) preview token this row is attempting confirmation against; overwritten on each re-preview, *not* itself an audit trail (the audit trail is the sequence of terminal idempotency outcomes each derived key already leaves behind, §4.2) |
| `attempt_count` | `integer NOT NULL DEFAULT 0 CHECK (attempt_count >= 0)` |
| `last_attempt_at` | `timestamptz NULL` |
| `resolved_by` | `uuid NULL` |
| `resolved_at` | `timestamptz NULL` |
| `created_at` | `timestamptz NOT NULL DEFAULT now()` |
| `updated_at` | `timestamptz NOT NULL DEFAULT now()` |

**Durable per-step execution state:** in addition to the single row-level `execution_state`, the row must carry enough structured state to distinguish exactly which of the four mutating steps (Catalog creation, Inventory creation, link confirmation, Opening Stock) has durably completed — modeled the same way `catalog_import_rows.follow_up_state jsonb` already tracks per-operation state for Catalog's own follow-ups (SEC-IMP-5 precedent): a `step_state jsonb NOT NULL DEFAULT '{}'::jsonb` column keyed by `catalog_create` / `inventory_create` / `link_confirm` / `opening_stock`, each value one of `pending | complete | failed`. This is the authoritative source the corrected orchestration (§9) reads before deciding whether to skip an already-complete step on retry — never re-derived by guessing from which of `resolved_catalog_product_id`/`resolved_inventory_item_id`/`opening_stock_movement_id` happen to be non-null, since a step can legitimately be `complete` for reasons that do not always leave a distinct foreign key (e.g., a `remove`-then-reassign edge case is out of scope for Build Now but the state model must not assume every step's completion is inferable from a single FK column alone).

**Required uniqueness:** `UNIQUE (batch_id, row_number)`; `UNIQUE (business_id, row_idempotency_key)`.

**Required tenant binding:**

```
FOREIGN KEY (business_id, batch_id) REFERENCES inventory_import_batches (business_id, id) ON DELETE RESTRICT
FOREIGN KEY (business_id, matched_catalog_product_id) REFERENCES catalog_products (business_id, id) ON DELETE RESTRICT   -- nullable, same-business only
FOREIGN KEY (business_id, resolved_catalog_product_id) REFERENCES catalog_products (business_id, id) ON DELETE RESTRICT -- nullable, same-business only
FOREIGN KEY (business_id, matched_inventory_item_id) REFERENCES inventory_items (business_id, id) ON DELETE RESTRICT   -- nullable, same-business only
FOREIGN KEY (business_id, resolved_inventory_item_id) REFERENCES inventory_items (business_id, id) ON DELETE RESTRICT  -- nullable, same-business only
```

using the already-existing composite unique keys on `catalog_products (business_id, id)` and `inventory_items (business_id, id)` (both confirmed live, §2 of the prior mission's evidence) as the referenced side — no new unique index is required on either truth table to support these FKs. `opening_stock_movement_id` may be implemented either as a same-business-validated FK to `inventory_movements` or as a validated loose reference (report1.97.md §18 leaves this exact choice to Build Mode as an implementation-verification item, not an architecture decision this report needs to lock); either choice must preserve same-business/item coherence. No `ON DELETE CASCADE` anywhere in this table.

### 5.3 RLS / grants

Identical posture to the existing, already-security-reviewed Catalog import pattern, for both new tables:

- `anon`: no access.
- `authenticated`: `SELECT` only, RLS-scoped to `business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid())` — Owner-only, no Manager/Employee policy.
- No `authenticated` `INSERT`/`UPDATE`/`DELETE` grant or policy.
- All batch/row writes occur only through the server-only bookkeeping client, after caller-JWT validation and Owner/business re-derivation in the calling server function — the same boundary `catalog-import.ts`'s existing `supabaseAdmin` usage already enforces, confined to exactly these two new tables.
- Because this repository carries broad forward default privileges (the same fact already documented for the existing Catalog import tables), the eventual migration must explicitly `REVOKE`/neutralize inherited default grants before applying the narrow grants above — the same discipline already applied when the Catalog import tables were created.
- If `delete_catalog_product`'s dependent-history check (§6 BKR-4) needs to read `inventory_import_rows`, the same narrow executor-role `SELECT` grant + RLS policy pattern already used for `catalog_lifecycle_executor` on `catalog_import_rows` (business-scoped via `catalog_internal.resolve_owner_business`) extends to this new table — no broader privilege than that single, already-precedented grant.

---

## 6. BKR-4 Correction — Catalog Hard-Delete Dependency Reconciliation

**Verified current state (re-read in full this mission, §2):** `delete_catalog_product`'s `v_has_history` computation is exactly five `EXISTS` clauses joined by `OR`: `catalog_selling_price_events`, `catalog_tax_events`, `catalog_reference_cost_events`, `catalog_product_link_events`, and `catalog_import_rows` (checking `matched_product_id`/`resolved_product_id`).

**Chosen correction:** add a sixth `EXISTS` clause, identical in shape to the fifth, referencing the new `inventory_import_rows` table:

```
EXISTS (
  SELECT 1 FROM public.inventory_import_rows
   WHERE business_id = v_business
     AND (matched_catalog_product_id = v_product.id OR resolved_catalog_product_id = v_product.id)
)
```

**Which reference columns count as dependent history:** both `matched_catalog_product_id` and `resolved_catalog_product_id` — a product a merchant was ever *shown* as a match candidate (`matched_catalog_product_id`) is included for the same reason `catalog_import_rows.matched_product_id` already is (report1.97.md's own precedent, §2), and a product this workflow actually *created or confirmed* (`resolved_catalog_product_id`) is included for the obvious audit-evidence reason. **No Inventory-import reference column may safely be excluded from the block** — this report identifies none, consistent with instruction1.92.md §7's fail-closed default posture.

**Preserved unchanged:**

- `delete_catalog_product`'s public signature (`p_idempotency_key uuid, p_product_id uuid`) — no parameter added or removed.
- Its `SECURITY DEFINER`/`catalog_lifecycle_executor` authority model.
- The locked nineteen-command surface — this is an internal-body correction to an existing command, the same precedent already accepted for the identical `catalog_import_rows` addition.
- The governed `DEPENDENT_HISTORY_CONFLICT` sanitized outcome for the new dependency, exactly matching the existing outcome for every other dependency source — no new rejection reason is introduced.
- No raw SQL/FK error can escape, for the same structural reason it cannot escape today: the check runs *before* the `DELETE` statement, not as a caught exception after one.
- Archived-identity reservation rules — unaffected; this correction only changes what counts as "has dependent history," not archive/reactivation behavior.
- Tenant isolation — the new clause is scoped by `business_id = v_business`, identical to every existing clause.

**New grant required to support this (already anticipated in §5.3):** `catalog_lifecycle_executor` needs the same narrow `SELECT` grant + business-scoped RLS policy on `inventory_import_rows` it already holds on `catalog_import_rows`. No broader privilege, no service-role involvement, no change to any other executor role.

---

## 7. BKR-5 Correction — Batch Terminal-State Contract

**Default safety rule, locked exactly as instruction1.92.md §8 states it:** a batch may become `committed` only when every included row has reached its required terminal business outcome and no required Catalog creation, Inventory creation, link confirmation, D-068 confirmation, or Opening Stock operation remains unresolved.

### 7.1 State transitions

- **`previewed` → `committing`:** exactly one atomic compare-and-set `UPDATE ... SET status = 'committing' WHERE id = :batchId AND business_id = :businessId AND status IN ('previewed','failed') RETURNING id` — identical mechanism to the already-corrected Catalog import claim (SEC-IMP-4 precedent). Exactly one concurrent claimant may proceed; a losing concurrent request performs zero row mutation, identical to the existing Catalog import guarantee.
- **`committing` → `committed`:** only after every row's terminal disposition (below) has been evaluated and none blocks commit.
- **`committing` → `failed`:** if any row remains in a blocking state after processing; `failed` is retryable (re-enters `committing` on the next claim, exactly like Catalog import's existing `failed` → re-`committing` path).

### 7.2 What blocks commit

A row blocks commit unless it is in one of these terminal, non-blocking dispositions:

- `classification_state = 'SKIPPED'` (merchant explicitly excluded — always terminal, never blocks).
- `classification_state = 'READY'` **and** `execution_state = 'COMPLETE'` (every required step — Catalog creation/reuse, Inventory creation, link confirmation, and Opening Stock if a quantity was supplied — has durably succeeded per `step_state`, §5.2).

Every other combination blocks commit:

- `execution_state IN ('PENDING','IN_PROGRESS','FAILED')` for any non-`SKIPPED` row.
- `classification_state IN ('NEEDS_CORRECTION','POSSIBLE_MATCH')` that has not been converted to `SKIPPED` or resolved into `READY` by an explicit merchant decision before the commit attempt.

### 7.3 Partial success representation

**Row states only — no batch-level partial-success representation is introduced.** The batch's own `status` remains the same closed four-value vocabulary (`previewed`/`committing`/`committed`/`failed`) already used by Catalog import; "partial success" is visible exclusively through the mix of terminal row dispositions a merchant can already inspect via the existing per-row `SELECT` access, exactly mirroring how Catalog import already represents partial batch outcomes today. This avoids inventing a new batch-level status value merely to describe what row-level state already describes unambiguously.

### 7.4 Retry re-entry without losing prior attempt evidence

A retry re-claims the batch (§7.1), then re-processes only rows that are not yet in a non-blocking terminal disposition. For each such row, the orchestrator reads `step_state` (§5.2) and skips any step already `complete`, attempting only the steps still `pending`/`failed` — the same "durable partial-completion, resume from the right step" discipline already proven for Catalog import's SEC-IMP-5 follow-up model. `attempt_count`/`last_attempt_at` increment on every re-attempt; no prior terminal idempotency-key outcome is ever deleted or overwritten (§4.2).

### 7.5 Crash-during-aggregation safety

Because batch aggregation (deciding whether every row is now non-blocking) is a read-only evaluation performed *after* all row processing for the current claim attempt, a crash during aggregation leaves the batch in `committing` — which is itself a valid, retryable state under §7.1's claim predicate extension (Build Mode must include `committing` rows that have exceeded a bounded staleness window in the retryable set, or require an explicit re-claim path; this exact staleness/reclaim mechanism is an implementation-verification item for Build Mode, not a new architecture decision, since the underlying claim-then-process-then-aggregate shape is unchanged from Catalog import's own already-proven pattern).

### 7.6 Required timestamp/state invariants

- `status = 'committed' ⟺ committed_at IS NOT NULL` (batch level, §5.1).
- A row's `resolved_at`/`resolved_by` are set if and only if `resolved_catalog_product_id` and `resolved_inventory_item_id` are both set (mirroring the existing `catalog_import_rows_resolution_pair`-style coherence check precedent) — Build Mode must define the exact equivalent constraint for the two-domain (Catalog + Inventory) resolution shape this table introduces, since it resolves two identities rather than one.
- No row may have `execution_state = 'COMPLETE'` while any entry in `step_state` reads anything other than `complete` for a step the row's `parsed_snapshot` actually requires (no quantity supplied ⇒ `opening_stock` is not "required" for that row and its absence from `step_state`, or a `complete`/never-attempted marker, does not block completion — mirroring exactly how Catalog import's `buildRequiredFollowUps` only requires the operations a row's own snapshot calls for).

---

## 8. Corrected End-to-End Row Orchestration

One corrected canonical sequence, integrating BKR-1 through BKR-5:

1. **Parse and validate before Product Truth mutation.** Reuses `content-type.ts`/`limits.ts` unchanged (file-format parsing is domain-agnostic, §10) plus new Inventory-specific field validation (item name, base unit, opening quantity). No Catalog or Inventory truth exists yet at this point.
2. **Exact candidate resolution.** `catalog_products_search` (existing) for Catalog-side candidates plus a new, narrow, exact-match (never fuzzy) query against `inventory_items` for Inventory-side candidates, both server-side, both read-only. Normalized exact name/SKU/barcode comparisons only, per report1.97.md §9 (SUPA-6) — a fuzzy rank may surface a candidate for merchant review but never itself authorizes mutation.
3. **Merchant confirmation where required.** Any non-exact candidate sets `classification_state = 'POSSIBLE_MATCH'`; the row does not proceed past this point until an explicit merchant decision converts it to `READY` (proceed as new / confirmed link) or `SKIPPED`.
4. **Catalog creation or reuse.** `create_catalog_product` (existing, unchanged signature, §5 of `report1.96.md`/§8 of `report1.97.md`) called with the row's `row_idempotency_key`-derived `catalog_create` key (§4.1). Idempotent on retry; never creates a duplicate.
5. **Durable Inventory-item creation using the corrected BKR-1 contract.** `create_inventory_item` (§3) called with the same row's `inventory_create`-derived key. Idempotent on retry; never creates a duplicate, and — critically, correcting `report1.96.md`'s false assumption — now genuinely unknown-outcome-safe across a server crash between INSERT and bookkeeping update.
6. **Fresh D-068/link preview.** `preview_catalog_inventory_link_change` (existing, disposable, no idempotency key by design, §2) called against the now-existing Catalog product and Inventory item; the returned `preview_token_id` is durably persisted into the row's `link_preview_token_id` (§5.2) before the next step.
7. **Preview-generation-scoped governed link confirmation.** `assign_or_replace_catalog_inventory_link` (existing, unchanged signature) called with the BKR-2-corrected derived key `derive(row_idempotency_key, "catalog_inventory_link_confirm", link_preview_token_id)` (§4). D-068's `PRICE_CONFIRMATION_REQUIRED` gate is satisfied by supplying whatever price the import row specifies only when the preview response says confirmation is required, never otherwise (unchanged from `report1.96.md`'s original, correct description of this behavior).
8. **Re-read/verify current link truth.** After step 7 returns `completed`, the orchestrator re-reads `catalog_products.inventory_item_id`/`inventory_link_established_at` for the resolved product rather than trusting only the command's return value, so Opening Stock (step 9) is gated on *observed current state*, not merely a remembered success flag — a defense-in-depth read this report adds explicitly per report1.97.md §6.2's "Opening Stock may execute only after link success is re-read/verified as current truth."
9. **Opening Stock movement using existing Inventory movement idempotency.** `create_inventory_movement` (existing, unchanged signature, §2) called with `p_movement_type = 'opening_stock'`, `p_direction = 'increase'`, and the row's `opening_stock`-derived key — reached only if step 8's re-read confirms a valid, current link and the row's snapshot specifies a quantity. A row with no supplied quantity skips this step entirely and is not blocked by its absence (§7.6).
10. **Support-row completion and batch aggregation.** The row's `step_state` is updated to reflect exactly which of steps 4/5/7/9 are `complete`; `execution_state` becomes `COMPLETE` only when every step the row's snapshot requires is `complete` (§7.2); batch aggregation (§7) evaluates all rows only after every row in the current claim attempt has been processed to a stable disposition.

---

## 9. Idempotency / Key-Derivation Map for Every Mutating Step

| Step | Operation | Derivation | Governed by |
|---|---|---|---|
| Catalog creation | `catalog_create` | `derive(row_idempotency_key, "catalog_create")` | `create_catalog_product`'s own existing idempotency contract |
| Inventory-item creation | `inventory_create` | `derive(row_idempotency_key, "inventory_create")` | `create_inventory_item`'s new idempotency contract (§3) |
| Link confirmation | `catalog_inventory_link_confirm` | `derive(row_idempotency_key, "catalog_inventory_link_confirm", link_preview_token_id)` | `assign_or_replace_catalog_inventory_link`'s own existing idempotency contract, keyed per preview generation (§4) |
| Opening Stock | `opening_stock` | `derive(row_idempotency_key, "opening_stock")` | `create_inventory_movement`'s own existing durable idempotency contract |
| Row root | — | `row_idempotency_key` (stable, `gen_random_uuid()` at row insert) | Never itself submitted to any command; only the seed for every derived key above |
| Generated SKU (inside step 4, when `p_sku` absent) | — | Not a separate idempotency dimension — resolved *after* `create_catalog_product`'s own idempotency lookup (report1.97.md §7.2), so a replayed create request replays the original committed SKU rather than generating a new one | `create_catalog_product`'s existing idempotency contract |

All derivations use the existing `deriveFollowUpIdempotencyKey`-style UUIDv5 construction (§4.1) — no new hashing mechanism, no new dependency.

---

## 10. Partial-Failure and Retry Matrix

| Failure point | Preserved state | Batch effect | Retry behaviour |
|---|---|---|---|
| Catalog creation fails | Nothing created | Row `execution_state = FAILED`; batch cannot commit | Retries step 4 with the same `catalog_create` key |
| Catalog created, Inventory creation fails | Catalog product preserved, `resolved_catalog_product_id` durably recorded, `step_state.catalog_create = complete` | Row `FAILED`, non-stock Catalog product remains valid Catalog Truth (never rolled back) | Retry skips step 4 (already complete, idempotent no-op if re-attempted anyway), resumes at step 5 |
| Inventory created, link cannot complete (preview rejection, e.g. `DEPENDENT_HISTORY_CONFLICT`, or confirm rejection) | Catalog product and Inventory item both preserved; no Opening Stock | Row `FAILED`, no batch commit | Retry re-previews (step 6, fresh token), then re-confirms with the new derived key (§4) |
| D-068 preview becomes stale (`STALE_STATE`) before confirm | Old preview's terminal outcome preserved under its own derived key, never overwritten | Row `FAILED` until re-preview succeeds | Orchestrator re-previews unconditionally on any non-`completed` step-6/7 outcome, obtaining a new `link_preview_token_id` and therefore a new step-7 key |
| Link confirmed, Opening Stock fails (e.g., a rare data-layer rejection) | Link and both identities preserved; `step_state.link_confirm = complete` | Row `FAILED`, no batch commit | Retry skips steps 4–8 (already complete/verified), resumes at step 9 with the same `opening_stock` key |
| Timeout / unknown outcome at any step | Whatever the last durably-committed step's idempotency table already recorded | Row remains non-terminal | Retry re-derives the same key for the in-doubt step and receives either the original terminal outcome (if it actually committed) or performs the operation fresh (if it did not) — never ambiguous, because every step now resolves through a durable idempotent operation (§3, §4), correcting `report1.96.md`'s original gap |
| Duplicate/concurrent commit request for the same batch | N/A at row level; batch-level claim (§7.1) ensures only one claimant processes rows at all | Losing claimant performs zero row mutation | Losing request observes `in_progress`/`already_committed`, identical to the existing Catalog import guarantee |
| Crash between steps (any two adjacent steps) | Whichever steps had durably committed before the crash | Row remains `FAILED`/non-terminal, batch cannot commit | Retry resumes exactly where `step_state` says it stopped |

**Compensation policy, stated once for every step:** compensation (destructive rollback of already-committed Catalog or Inventory truth) is **prohibited** at every step. Every partial state above is explicitly allowed to persist as valid, non-terminal, retryable truth — never silently destroyed to make a row appear atomic, per instruction1.92.md §9's explicit preservation requirement.

---

## 11. Supabase Impact Map

| Object | Classification | Disposition |
|---|---|---|
| `create_inventory_item` | **NEW** | Narrow Inventory-domain `SECURITY INVOKER` RPC (§3) |
| `inventory_item_idempotency_keys` | **NEW** | Structurally identical to existing `inventory_movement_idempotency_keys` (§3) |
| `inventory_command_result` (composite type) | **NEW** | Return shape for `create_inventory_item`, parallel to but distinct from `catalog_command_result` (§3.6) |
| `inventory_items` | **EXISTING / REUSED** | Identity truth unchanged; gains a new, additional replay-safe creation path alongside the existing direct insert (§3.10) |
| `inventory_movements`, `inventory_movement_idempotency_keys`, `create_inventory_movement` | **EXISTING / REUSED** | Unchanged, no signature change |
| `catalog_products`, `create_catalog_product` | **EXISTING / AMENDED** | Internal generated-SKU logic only (unchanged from `report1.96.md`'s original, correct proposal); signature unchanged |
| `catalog_products_search` | **EXISTING / REUSED** | Candidate discovery only |
| `preview_catalog_inventory_link_change` | **EXISTING / REUSED** | Unchanged |
| `assign_or_replace_catalog_inventory_link` | **EXISTING / REUSED** | Unchanged function body; orchestration-side key derivation corrected (§4) |
| `delete_catalog_product` | **EXISTING / AMENDED** | Sixth `EXISTS` clause for `inventory_import_rows` (§6); signature/authority unchanged |
| `catalog_link_preview_tokens` | **EXISTING / REUSED** | Unchanged |
| `inventory_import_batches` | **NEW** | §5.1 |
| `inventory_import_rows` | **NEW** | §5.2, including the new `step_state`/`link_preview_token_id` columns this correction adds beyond `report1.96.md`'s original proposal |
| Batch/row and Catalog/Inventory support composite FKs | **NEW** | §5.2 |
| Inventory import RLS policies | **NEW** | §5.3 |
| Inventory import grants (incl. default-privilege neutralization) | **NEW** | §5.3 |
| `catalog_lifecycle_executor` `SELECT` grant + RLS policy on `inventory_import_rows` | **NEW** | §6, mirrors the existing identical grant on `catalog_import_rows` |
| `deriveFollowUpIdempotencyKey`-equivalent for Inventory-import steps | **EXISTING PATTERN / NEW USAGE** | Same UUIDv5 mechanism, extended with a third input component for link-confirm only (§4) |
| Catalog/Inventory template mechanism | **NOT REQUIRED as a database object** | Static/versioned asset or equivalent read-only response, unchanged from `report1.96.md`/`report1.97.md`'s agreement |
| Twentieth public Catalog command | **NOT REQUIRED / REJECTED** | §12 below |

---

## 12. Security Impact Map (for the Following Security & Permissions Architecture Review)

| Concern | Disposition |
|---|---|
| Authority source for every new mutation | `create_inventory_item`: caller-JWT/RLS, `SECURITY INVOKER`, no service-role identity — same pattern as `create_inventory_movement`. Every other mutating step reuses an already-reviewed `SECURITY DEFINER` Catalog command or the existing Inventory movement RPC, unchanged |
| Service-role scope | Confined to `INSERT`/`UPDATE` on exactly the two new support tables, after caller-JWT validation and Owner/business re-derivation — never establishes authorization, never writes Catalog or Inventory business truth, never invokes a governed command under service-role identity (report1.97.md §5.2, adopted verbatim) |
| Cross-business isolation | Every new table/FK is business-scoped; every new RLS policy is Owner-derived from `businesses.owner_id`, matching the existing, already-reviewed Catalog import pattern exactly |
| Idempotency/replay safety at every step | Newly closed for Inventory-item creation (§3) and link-confirm re-preview (§4) — the two specific gaps this mission corrects; every other step was already closed before this mission |
| Sanitized failure boundary | The new orchestration must reuse the existing `logSanitized`/`sanitizedError()` pattern verbatim, including for `create_inventory_item`'s new rejection outcomes — no raw error, merchant text, or internal detail may reach the client or logs |
| D-047 preservation | Unchanged — `preview_catalog_inventory_link_change`'s existing `DEPENDENT_HISTORY_CONFLICT` check is reused without modification; inventory-first sequencing establishes the link before any stock-event history can exist (§8 step 6–9 ordering), so the check is structurally never triggered by this workflow's own newly-created items |
| D-068 preservation | Unchanged mechanism; only the idempotency-key derivation wrapping the existing mechanism changes (§4) |
| Fail-closed permission posture | No RLS policy or grant introduced anywhere in this correction grants Manager or Employee any new access; Owner-only throughout, re-confirmed against live policy state in the prior mission and unchanged this mission |
| Hard-delete dependency completeness | §6 closes the specific gap report1.97.md identified — a raw FK violation can no longer escape `delete_catalog_product` once `inventory_import_rows` exists |
| Twentieth Catalog command risk | None — `create_inventory_item` is explicitly an Inventory-domain operation, never represented as a Catalog command, never counted toward the nineteen (§3.2, §12 of instruction1.92.md) |
| Parser/runtime containment | Explicitly not addressed by this report — remains the independent, unresolved gate (§13) |

---

## 13. Independent Parser Gate — Explicit Non-Claim

Unchanged from `report1.96.md`'s own disclosure, reaffirmed here per instruction1.92.md §10: this report does not claim the Lovable/Cloudflare CPU-evidence issue is resolved, does not redesign the parser runtime, does not choose an external parser deployment architecture, does not implement or redesign any pre-parse concurrency/rate guard, and does not introduce R2 as a parser workaround. Inventory bulk import's file-parsing step remains dependent on whatever parser/runtime security architecture Mission Control ultimately approves for Catalog import (report1.92.md through the still-open architecture chain), applied identically to both domains. Correcting BKR-1 through BKR-5 does not close, and is not offered as closing, that independent gate.

---

## 14. Mandatory Classification

### Build Now

Unchanged from `report1.96.md`/`report1.97.md`, now with the exact backend mechanisms locked: Inventory/Opening Stock CSV/XLSX onboarding; Catalog and Inventory downloadable templates; automatic Smart Business SKU when absent; one SKU rule across channels; inventory-first Catalog establishment/linking before Opening Stock; explicit duplicate/match review; D-068 safeguard; and — newly explicit — `create_inventory_item` plus its idempotency table, the corrected link-confirm key derivation, the exact `inventory_import_batches`/`inventory_import_rows` contract, the `delete_catalog_product` sixth dependent-history clause, and the batch terminal-state rule, all as the minimum backend mechanisms required to implement the above safely.

### Build Later

Unchanged: merchant-configurable SKU formats; barcode/SKU label printing; batch/lot/expiry import; unit-conversion/import packaging; historical bulk reconciliation tooling unless separately authorized.

### Add-on

None — no external service is introduced or required by any BKR correction.

### Separate Product

None.

### Reject

Unchanged list from `instruction1.92.md` §14, all confirmed still rejected by this correction: merged Catalog/Inventory truth; direct current-stock writes; silent duplicate creation/merge/linking; silent post-history linking contrary to D-047; silent D-068 price reinterpretation; support-row completion flags used as a substitute for durable operation idempotency (the specific defect this report corrects, §3); a fixed link-confirm idempotency key reused across different preview tokens (the specific defect this report corrects, §4); service-role Product Truth mutation; Manager/Employee permission expansion for convenience; cascade deletion of import audit-adjacent evidence; twentieth public Catalog command; parser-gate bypass.

---

## 15. Unresolved Assumptions or Conflicts

No conflict was found that requires a Stop verdict. The following remain concrete, bounded Build-implementation verification items (matching report1.97.md §18's own framing, extended for this correction's additions), not unresolved architecture authority:

1. **`opening_stock_movement_id`'s exact referential form** (validated FK vs. loose validated reference) — left to Build Mode, §5.2.
2. **The exact bounded-staleness/reclaim mechanism for a `committing` batch abandoned mid-aggregation** — the shape (claim-then-process-then-aggregate) is locked; the exact staleness window is a Build Mode parameter, §7.5.
3. **The exact two-domain resolution-coherence constraint** for `inventory_import_rows` (analogous to `catalog_import_rows_resolution_pair` but covering both a Catalog and an Inventory identity) — the requirement is locked (§7.6); the precise constraint expression is left to Build Mode's detailed schema design.
4. **Generated-SKU format/entropy and bounded collision-retry count** — unchanged open item from `report1.96.md`/`report1.97.md`, still an implementation detail, not a product or architecture decision.
5. **The still-open Catalog import parser/runtime architecture gate** (§13) — explicitly not resolved by this report, and this report's Build Now classification for orchestration/domain logic does not presuppose its resolution.

No irreconcilable conflict with SB-P-1.10 Inventory Truth, D-047, or D-068 was found. No twentieth Catalog command was found necessary. No permission behavior was found to require becoming non-fail-closed. No unapproved external service was found necessary. No unresolved governance conflict was discovered. None of instruction1.92.md §15's Stop Rules are triggered.

---

## 16. Explicit Confirmation of No Implementation or Production Mutation

During this mission:

- application/parser code changed: **NO**
- dependency changed: **NO**
- migration created or applied: **NO**
- Supabase DDL/DML performed: **NO** — every database interaction this mission performed was a read-only query against `pg_proc`/`information_schema` on the dedicated test project, to re-confirm `delete_catalog_product`'s exact current body before specifying its amendment
- RLS or grants mutated: **NO**
- service-role authority expanded: **NO**
- production data mutated: **NO**
- Lovable mutated, published, or deployed: **NO**
- domain cutover performed: **NO**
- parser runtime redesigned: **NO** — §13
- R2 introduced: **NO**
- permission expanded: **NO**
- Product Truth mutated: **NO** — no D-023 canonical activation occurred; this report does not touch the D-023 wording question at all (that remains `report1.96.md` §4's draft, unaffected by this backend correction)
- twentieth Catalog command added: **NO**
- Build Lock or Build Mode entered: **NO**

---

## 17. Final Verdict

**`BACKEND ARCHITECTURE CORRECTIONS READY FOR SUPABASE CONFIRMATION REVIEW`**

BKR-1 through BKR-5 are each resolved with exactly one chosen architecture, none left as an open menu of alternatives. Per instruction1.92.md §17, this verdict does not authorize implementation. Mission Control must first obtain a short Supabase Backend Architecture confirmation review focused only on whether BKR-1 through BKR-5 are now fully resolved; only after that confirmation returns a positive merged verdict may Mission Control issue the Security & Permissions Architecture review, which must evaluate this corrected contract rather than the superseded `report1.96.md` assumptions. No Build Mode may be considered until both specialist gates are positive and merged, and the independent parser/runtime security gate remains separately open.
