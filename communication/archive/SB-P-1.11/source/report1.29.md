# SMART BUSINESS MISSION CONTROL

# Report 1.29 — SB-P-1.11 Database Specialist Resolution

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Phase 1 Database Constraint Resolution

**Executing Room:** Claude Code

**Authorizing Instruction:** `communication/live/instruction1.29.md`

**Report Type:** Documentation-only database-specialist resolution report. No executable SQL, no implementation, no Lovable use. Every proposed expression below is conceptual notation only, not a runnable statement.

**Refinement Notice:** Items 1–6 below (Sections 7–12), the six-row matrix (Section 13), and the token-security lifecycle matrix (Section 14) were corrected under `communication/live/instruction1.30.md`, applying findings DBR-001 through DBR-005. See `communication/live/report1.30.md` for the refinement's own completion report and final conclusion.

---

## 1. Branch Name

`mission/SB-P-1.11-database-specialist-resolution`

---

## 2. Synchronized Base `main` SHA

`bf009339cdfe47bc16046fbc2e901145461f2f08`

Confirmed via `git fetch --all --prune` followed by `git checkout main` and `git merge --ff-only origin/main` (fast-forward from `e97e451023c2ca40531ba6eaaf5ee6f47f8ff804`, bringing in the merged `instruction1.29.md` and the merged Phase 1 readiness refinement, PR #91).

---

## 3. Substantive Branch Commit SHA

`0c3feb96c815b903d07286254b53ad4b593c3aaa`

---

## 4. Pull-Request Number and URL

PR #93 — `https://github.com/SmartBusinessv1/smart-business/pull/93`

---

## 5. Exact Files Changed

- Created: `communication/live/report1.29.md`

No other file was created, modified, renamed, moved, or deleted in the original PR #93 mission. This document was subsequently corrected under `communication/live/instruction1.30.md`; see `communication/live/report1.30.md` for that refinement's own file-change record.

---

## 6. Source Inventory Consulted

Locked and governing sources (read-only inspection):

1. Lighthouse Constitution and Source 01/11/18 — no additional constraint-level content found beyond what earlier SB-P-1.11 reports already traced; not independently re-cited per item below where no new fact was drawn from them.
2. `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` — Product Blueprint, §8 "Product Name and Description," "SKU," "Barcode," "Categories," §10 "Business Rules" (Rules 4, 8, 9, 10, 17, 21, 27), §20 "Reuse and Duplication Controls."
3. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md` — D-022, D-024, D-026, D-045.
4. `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` — Version 2.2, LOCKED, §3, §5.0, §5.10, §7, §10, §11, §12, §15, §18, §24.
5. `docs/implementation/SB-P-1.11/engineering-contract.md` — Version 1.1, LOCKED, §10, §11, §12, §20.
6. `docs/implementation/SB-P-1.11/lovable-build-prompt.md` — Version 1.1, LOCKED, §13, §15, §16.
7. `docs/implementation/SB-P-1.11/verification-checklist.md` — Version 1.1, LOCKED — no new constraint-level fact beyond what its §29.1 restatement already carries forward.
8. Approved Supabase architecture source `merge/active/02_Supabase_Architecture_Framework.md` — reviewed; no `citext`/`unaccent`/Unicode-normalization guidance found.
9. Existing repository migrations and accepted implementation precedent — `supabase/migrations/20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql` (`inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`), `supabase/migrations/20260708210504_0a471e2c-a76c-4178-8aa2-79a3744e8bd2.sql` (`businesses`).
10. `communication/live/report1.27.md` — Section 9 (index matrix, six `BLOCKED` cells this report resolves).
11. `communication/live/report1.28.md` — Sections 9–10 (matrix summary and blocked-row list).
12. `communication/live/instruction1.30.md` — refinement authorization for DBR-001 through DBR-005 (added in this refinement).

Repository evidence directly inspected: full text of `supabase/migrations/*.sql` (twelve files) for `UNIQUE`, `CHECK`, `btrim`, `CREATE EXTENSION`, `citext`, `unaccent`, and Unicode-normalization usage. Confirmed: only `pgcrypto` is enabled; no `pg_trgm`, `citext`, or `unaccent` extension exists anywhere in the repository; the only existing name-uniqueness precedent (`inventory_items_business_name_uniq UNIQUE (business_id, name)`) is a plain, non-normalized constraint with a separate `CHECK (length(btrim(name)) > 0)` non-empty guard.

No external web research was performed. No Lovable Plan Mode question was asked. No Lovable Build Mode credit was used.

---

## 7. Item 1 — `catalog_products`: Business-Scoped Normalized Product-Name Uniqueness

- **Exact table name:** `catalog_products`.
- **Exact proposed constraint/index name:** `catalog_products_business_name_normalized_uniq`, a named composite `UNIQUE` constraint over `(business_id, name_normalized)` (conceptual name; no object is created by this report).
- **Exact columns or conceptual expression:** `catalog_products.name_normalized` — a stored, generated comparison column, conceptually `name_normalized = lower(regexp_replace(btrim(name), '\s+', ' ', 'g'))`. Descriptive notation only, not executable SQL.
- **Mechanism (fixed per DBR-001, single mechanism only):** stored normalized comparison column (`name_normalized`) plus a named composite `UNIQUE` constraint (`catalog_products_business_name_normalized_uniq`) over `(business_id, name_normalized)`. No expression-index or other interchangeable-mechanism alternative is retained.
- **Exact null behavior:** `name` and therefore `name_normalized` are `NOT NULL` — product name is required (Blueprint §8 "Product Name and Description": "Name is required"; D-026).
- **Empty-string behavior:** rejected, not converted to `NULL`. Mirrors the existing `inventory_items` precedent `CHECK (length(btrim(name)) > 0)` — a name that is empty or whitespace-only after trimming fails validation before any uniqueness check runs.
- **Normalization rule:** trim leading/trailing whitespace; collapse repeated internal whitespace to one space; case-fold for deterministic comparison; preserve punctuation; preserve Malayalam and Manglish — exactly Blueprint Rule 8's two normalization axes (whitespace, Latin-case), no others.
- **Case handling:** standard case-folding (`lower()`), which by construction only maps cased (Latin-script) codepoints; Malayalam has no case distinction, so this function is a no-op on Malayalam text.
- **Leading/trailing whitespace handling:** removed (`btrim`), matching the existing `inventory_items` precedent's use of `btrim`.
- **Repeated internal whitespace handling:** collapsed to a single space, per Blueprint Rule 8's explicit "treats repeated internal whitespace consistently."
- **Punctuation handling:** preserved exactly as entered. Blueprint Rule 8 names exactly two normalization axes (whitespace, Latin-case); adding punctuation-folding would introduce a normalization axis Product Truth does not require, which this report does not do.
- **Malayalam and Manglish preservation:** the stored `name` column is never modified — only the separate, derived `name_normalized` value is used for the uniqueness check. Because `lower()` and whitespace-collapse do not alter Malayalam codepoints or reorder/strip any characters, Manglish (Malayalam written in Latin script) is case-folded exactly as English would be — consistent with Rule 8's undifferentiated "Latin-letter case differences," not a special case. No transliteration, fuzzy matching, or phonetic step is applied; different Malayalam spellings, Manglish transliterations, or translated names remain distinct values under this constraint, exactly as Blueprint §8 requires ("not automatically treated as the same product... returns a possible match for merchant review").
- **Business scope:** `business_id`-qualified composite uniqueness; two different businesses may use the identical name (Blueprint §8: "Different businesses may use the same name"; D-026).
- **Archived/deleted-row behavior (fixed Mission Control implementation-integrity disposition, DBR-003):** archived rows remain inside the uniqueness domain. Archived identities remain reserved. No active-row-only partial unique index is permitted. An archived product's normalized name continues to occupy its `(business_id, name_normalized)` slot and cannot be reused by a new product in the same business. This mirrors the existing `inventory_items_business_name_uniq` precedent, which is likewise a plain, non-partial constraint not exempting `archived`-status rows.
- **Expected command conflict behavior:** `create_catalog_product` or `update_catalog_product_identity` attempting to save a name whose normalized value already exists for the business fails this constraint; the owning command's structured rejection path (not an unhandled database exception) surfaces it as a validation-stage rejection before any write is attempted, consistent with EIS §3's "expected rejections are committed outcomes, not aborted transactions."
- **Locked-source traceability:** Blueprint §8 "Product Name and Description," §10 Rule 8; Founder Decision D-026.
- **Repository precedent relied upon:** `inventory_items_business_name_uniq UNIQUE (business_id, name)` (shape, business-scoping, and non-partial archived-row-inclusive behavior) and `CHECK (length(btrim(name)) > 0)` (non-empty-after-trim pattern), both from `supabase/migrations/20260721205714_...sql`.
- **Technical inference, clearly labeled:** the stored normalized-column mechanism itself (no repository table currently implements case/whitespace-insensitive uniqueness); the exact constraint name.
- **Founder decision required:** No. The normalization rule is already locked Product Truth (Rule 8, D-026); only its database mechanism is resolved here.
- **Final specialist disposition:**

```text
RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED
```

---

## 8. Item 2 — `catalog_products`: Business-Scoped Normalized SKU Uniqueness

- **Exact table name:** `catalog_products`.
- **Exact proposed constraint/index name:** `catalog_products_business_sku_normalized_uniq`, a named composite `UNIQUE` constraint over `(business_id, sku_normalized)` (conceptual name).
- **Exact columns or conceptual expression:** `catalog_products.sku_normalized` — a stored, generated comparison column, conceptually `sku_normalized = NULLIF(lower(btrim(sku)), '')`. Descriptive notation only.
- **Mechanism (fixed per DBR-001, single mechanism only):** stored normalized comparison column (`sku_normalized`) plus a named composite `UNIQUE` constraint (`catalog_products_business_sku_normalized_uniq`) over `(business_id, sku_normalized)`. No expression-index or other interchangeable-mechanism alternative is retained.
- **Exact null behavior:** `sku` is optional (D-024: "at most one optional SKU"), so `sku` and `sku_normalized` are nullable.
- **Optional-field behavior:** a product with no SKU stores `sku` as `NULL`; the constraint never evaluates a comparison for that row against any other row's `NULL`.
- **Whether blank values become `NULL`:** yes. A blank or whitespace-only entered value is normalized to `NULL` (via the conceptual `NULLIF(..., '')` step) rather than stored as an empty string, so "no SKU" is represented once, unambiguously, and does not collide with any other product's absent SKU.
- **Whether multiple `NULL` values are allowed:** yes, inherently. Standard SQL/Postgres `UNIQUE` constraint semantics never treat two `NULL`s as equal, so any number of products in the same business may have `sku_normalized IS NULL` simultaneously without violating the constraint. This is standard relational-database behavior, not an invented mechanism.
- **Whether uniqueness applies only to non-NULL normalized values:** yes — by the same standard `UNIQUE` semantics, the constraint is only ever evaluated between two non-`NULL` `sku_normalized` values.
- **Empty-string behavior:** never stored; converted to `NULL` at the normalization step (see above), for both the raw and normalized value's uniqueness purposes.
- **Normalization rule (narrowed per DBR-002):** trim leading and trailing whitespace; apply case-insensitive comparison where letters exist; preserve internal spacing exactly; preserve punctuation exactly. Repeated-internal-whitespace collapse is deliberately **not** applied to SKU — Blueprint §8 "SKU" states only leading/trailing whitespace and case handling, and this report no longer extends product name's whitespace-collapse axis to SKU.
- **Case handling:** case-insensitive comparison where letters exist (`lower()`), same no-op-on-Malayalam property as Item 1.
- **Leading/trailing whitespace handling:** removed.
- **Internal spacing handling (fixed per DBR-002):** preserved exactly as entered — no repeated-internal-whitespace collapse is applied to SKU.
- **Punctuation handling:** preserved exactly as entered — SKU is explicitly described as merchant-defined free text ("merchant-entered display value is preserved," Blueprint §8 "SKU"), with no punctuation restriction stated.
- **Malayalam and Manglish preservation:** same mechanism and reasoning as Item 1 — `lower()` does not alter Malayalam codepoints; Manglish is case-folded as any Latin-script text would be. No transliteration, fuzzy matching, phonetic matching, or AI normalization is applied.
- **Business scope:** `business_id`-qualified; D-024 — "different businesses may use the same SKU."
- **Archived/deleted-row behavior (fixed Mission Control implementation-integrity disposition, DBR-003):** archived rows remain inside the uniqueness domain. Archived identities remain reserved. No active-row-only partial unique index is permitted — same fixed disposition as Item 1.
- **Expected command conflict behavior:** same rejection-path treatment as Item 1, applied to `create_catalog_product`/`update_catalog_product_identity`'s SKU field.
- **Locked-source traceability:** Blueprint §8 "SKU," §10 Rule 9; Founder Decision D-024.
- **Repository precedent relied upon:** same `btrim`/non-empty-guard pattern and non-partial archived-row-inclusive shape as Item 1; the `NULL`-for-absent-optional-value convention is standard relational practice already implicit in every nullable optional column in the existing schema.
- **Technical inference, clearly labeled:** the stored normalized-column mechanism itself; the exact constraint name.
- **Founder decision required:** No — this is not described as an open Founder decision; SKU normalization is now a fixed database-mechanism resolution.
- **Final specialist disposition:**

```text
RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED
```

---

## 9. Item 3 — `catalog_products`: Business-Scoped Normalized Barcode Uniqueness

- **Exact table name:** `catalog_products`.
- **Exact proposed constraint/index name:** `catalog_products_business_barcode_normalized_uniq`, a named composite `UNIQUE` constraint over `(business_id, barcode_normalized)` (conceptual name).
- **Exact columns or conceptual expression:** `catalog_products.barcode_normalized` — a stored, generated comparison column, conceptually `barcode_normalized = NULLIF(lower(btrim(barcode)), '')`. Descriptive notation only.
- **Mechanism (fixed per DBR-001, single mechanism only):** stored normalized comparison column (`barcode_normalized`) plus a named composite `UNIQUE` constraint (`catalog_products_business_barcode_normalized_uniq`) over `(business_id, barcode_normalized)`. No expression-index or other interchangeable-mechanism alternative is retained.
- **Exact null behavior:** `barcode` is optional (Blueprint §8 "Barcode": "may have one optional manually entered barcode"), so `barcode` and `barcode_normalized` are nullable.
- **Optional-field behavior:** identical shape to Item 2 — absent barcode stores `NULL`.
- **Whether blank values become `NULL`:** yes, same `NULLIF(..., '')` normalization step as Item 2.
- **Whether multiple `NULL` values are allowed:** yes, inherently, same standard `UNIQUE`-with-`NULL` semantics as Item 2.
- **Whether uniqueness applies only to non-NULL normalized values:** yes, same reasoning as Item 2.
- **Empty-string behavior:** never stored; converted to `NULL`.
- **Normalization rule (narrowed per DBR-002):** trim leading and trailing whitespace; apply case-insensitive comparison where letters exist; preserve internal spacing exactly; preserve punctuation exactly. Repeated-internal-whitespace collapse is deliberately **not** applied to barcode, same correction as Item 2.
- **Case handling:** case-insensitive comparison applied only where Latin letters are present, per Blueprint §8 "Barcode" — most literal barcode values are numeric and unaffected by case-folding regardless.
- **Leading/trailing whitespace handling:** removed.
- **Internal spacing handling (fixed per DBR-002):** preserved exactly as entered — no repeated-internal-whitespace collapse is applied to barcode.
- **Punctuation handling:** preserved exactly as entered — barcode is manually entered text, not validated against a specific symbology in Build Now (Blueprint §8 "Barcode": "manually entered barcode... Multiple barcodes, camera or hardware scanning... are not Build Now"), so no punctuation/character-set restriction is introduced.
- **Malayalam and Manglish preservation:** not materially applicable to typical barcode content (numeric/alphanumeric identifiers), but the same non-destructive mechanism as Items 1–2 applies uniformly if non-Latin characters were ever entered. No transliteration, fuzzy matching, phonetic matching, or AI normalization is applied.
- **Business scope:** `business_id`-qualified; Blueprint §8 "Barcode": "unique within the business and may be reused by another business"; D-022.
- **Archived/deleted-row behavior (fixed Mission Control implementation-integrity disposition, DBR-003):** archived rows remain inside the uniqueness domain. Archived identities remain reserved. No active-row-only partial unique index is permitted — same fixed disposition as Items 1–2.
- **Expected command conflict behavior:** same rejection-path treatment as Items 1–2, applied to the barcode field.
- **Locked-source traceability:** Blueprint §8 "Barcode," §10 Rule 9; Founder Decision D-022.
- **Repository precedent relied upon:** same as Item 2.
- **Technical inference, clearly labeled:** the stored normalized-column mechanism itself; the exact constraint name.
- **Founder decision required:** No — not described as an open Founder decision.
- **Final specialist disposition:**

```text
RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED
```

---

## 10. Item 4 — `catalog_categories`: Business-Scoped Normalized Category-Name Uniqueness

- **Exact table name:** `catalog_categories`.
- **Exact proposed constraint/index name:** `catalog_categories_business_name_normalized_uniq`, a named composite `UNIQUE` constraint over `(business_id, name_normalized)` (conceptual name).
- **Exact columns or conceptual expression:** `catalog_categories.name_normalized` — a stored, generated comparison column, conceptually `name_normalized = lower(regexp_replace(btrim(name), '\s+', ' ', 'g'))` — identical shape to Item 1. Descriptive notation only.
- **Mechanism (fixed per DBR-001, single mechanism only):** stored normalized comparison column (`name_normalized`) plus a named composite `UNIQUE` constraint (`catalog_categories_business_name_normalized_uniq`) over `(business_id, name_normalized)`. No expression-index or other interchangeable-mechanism alternative is retained.
- **Exact null behavior:** a category row's own `name` is `NOT NULL` — a category is only created because a merchant named it (Blueprint §8 "Categories": "merchant-defined"); this is distinct from a *product's* category assignment, which is separately optional (Blueprint §8: "A product has zero or one category," D-006) and is not part of this item's scope.
- **Empty-string behavior:** rejected, same `CHECK (length(btrim(name)) > 0)`-style guard as Item 1.
- **Normalization rule:** trim leading/trailing whitespace; collapse repeated internal whitespace to one space; case-fold for deterministic comparison; preserve punctuation; preserve Malayalam and Manglish — Blueprint §8 "Categories" uses the identical three-clause phrasing as the Product Name subsection, so category name retains whitespace-collapse (this axis was never narrowed for name/category — DBR-002 applies only to SKU and barcode).
- **Case handling:** `lower()`, same no-op-on-Malayalam property as Item 1.
- **Leading/trailing whitespace handling:** removed.
- **Repeated internal whitespace handling:** collapsed to a single space, explicitly stated for categories (Blueprint §8 "Categories": "treats repeated internal whitespace consistently").
- **Punctuation handling:** preserved exactly as entered, same reasoning as Item 1 — Blueprint §8 "Categories" names only whitespace and case as normalization axes.
- **Malayalam and Manglish preservation:** identical mechanism and reasoning as Item 1; Blueprint §8 "Categories" uses the same "different Malayalam spellings, Manglish transliterations, or translated category names are not automatically merged" language as the product-name subsection.
- **Business scope:** `business_id`-qualified; Blueprint §8 "Categories": "unique within the business"; D-045: "may be reused by different businesses."
- **Archived/deleted-row behavior (fixed Mission Control implementation-integrity disposition, DBR-003):** archived rows remain inside the uniqueness domain. Archived identities remain reserved. No active-row-only partial unique index is permitted. An archived category's normalized name continues to occupy its `(business_id, name_normalized)` slot and cannot be reused by a new category in the same business, notwithstanding that archiving "prevents new use of the category" and "preserves prior category history" (Blueprint §8 "Categories") — those statements govern the category's own usability and history, not whether its name is released for reuse by a different category record.
- **Expected command conflict behavior:** `create_catalog_category` attempting to save a normalized name that already exists for the business fails this constraint via a structured rejection, consistent with EIS §3's committed-rejection model, mirroring Items 1–3.
- **Locked-source traceability:** Blueprint §8 "Categories," §10 Rules 8 (by direct textual parallel), 10; Founder Decisions D-006, D-007, D-008, D-045.
- **Repository precedent relied upon:** same `inventory_items` `btrim`/non-empty-guard, non-partial archived-row-inclusive shape as Item 1; no separate "category" precedent exists elsewhere in the repository, so the identical Item-1 mechanism is reused for internal consistency (reuse-before-duplication, Blueprint §20).
- **Technical inference, clearly labeled:** the stored normalized-column mechanism itself; the exact constraint name.
- **Founder decision required:** No.
- **Final specialist disposition:**

```text
RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED
```

---

## 11. Item 5 — `catalog_link_preview_tokens`: Token Security Lifecycle

**Corrected per DBR-004.** The prior resolution treated token uniqueness alone as single-use enforcement and relied on deletion-on-consumption. Neither is retained. This section defines a retained-row lifecycle that separately resolves all nine required aspects: token uniqueness, single-use enforcement, token expiry, initiating-actor binding, consuming-actor binding, business binding, preview-state/expected-state binding, replay rejection, and retained audit evidence.

- **Exact table name:** `catalog_link_preview_tokens`.
- **Lifecycle model (fixed per DBR-004):** rows are retained through consumption and expiry — never deleted by this design. Single-use and staleness are enforced by state fields on the row, not by the row's absence. This is a change from this report's original deletion-on-consumption design; no locked source directly requires deletion, so the retained-row model applies.

### 11.1 Conceptual Field Set (specialist notation, not executable SQL)

- `token` — opaque token identifier. Conceptual type: `uuid`, `NOT NULL`, generated the same way every other opaque identifier in this repository already is (`gen_random_uuid()`, via the already-enabled `pgcrypto` extension). **[Specialist-derived — no locked source names this field.]**
- `business_id` — business binding. Conceptual type: `uuid`, `NOT NULL`, server-derived at preview-generation time (never caller-supplied), part of the already-locked composite `(id, business_id)` FK-integrity pattern (Lovable Build Prompt §13). **[Specialist-derived field name; business-scoping principle itself is locked.]**
- `initiating_actor_user_id` — initiating actor binding. Conceptual type: `uuid`, `NOT NULL`, captured server-side from the verified caller identity at preview-generation time. **[Specialist-derived field name; the underlying "scope and identity are always server-derived, never caller-supplied" principle is locked, EIS §3.]**
- `expected_state_snapshot` — preview-state/expected-state binding. Conceptual notation: a retained record of the exact previewed values (proposed inventory link, proposed unit, the price requiring confirmation) the preview computed, matching Engineering Contract §12's "single-use token binding the exact reviewed state." **[Specialist-derived field shape; the binding requirement itself is locked, Engineering Contract §12, EIS §10 step 5.]**
- `expires_at` — token expiry. Conceptual type: `timestamptz`, `NOT NULL`, set at preview-generation time. **[Specialist-derived field; the exact expiry duration is not set by any locked source and is a separate, non-blocking specialist/environment tuning parameter — see Section 20.]**
- `consumed_at` — consumption timestamp/consumed state. Conceptual type: `timestamptz`, nullable; `NULL` while unconsumed, set exactly once at successful-commit time within the same atomic transaction as the D-068 write (EIS §10 step 7/8). **[Specialist-derived field; replaces this report's prior, corrected, deletion-based design.]**
- `consuming_actor_user_id` — consuming-actor binding. Conceptual type: `uuid`, nullable; set together with `consumed_at`, and required to equal `initiating_actor_user_id` for the commit to succeed. **[Specialist-derived field name; the underlying same-actor-confirmation principle is locked, EIS §3 ("only the reviewing actor may confirm what they reviewed"), applied here by extension since EIS §15 states it concretely only for `catalog_channel_pending_actions` — labeled as extension, not literal restatement.]**

### 11.2 Rejection Behavior

- **Invalid token** (does not resolve to any row): `rejected`/`STALE_STATE` — Engineering Contract §12, EIS §10 step 3 ("token resolution — invalid token → rejected/STALE_STATE").
- **Expired token** (`now() > expires_at` and `consumed_at IS NULL`): `rejected`/`STALE_STATE` — expiry is a form of staleness under the same locked rejection category.
- **Already-consumed token** (`consumed_at IS NOT NULL`): `rejected`/`STALE_STATE` — the retained `consumed_at` state, not row absence, is what makes replay detectable; this is the single-use enforcement mechanism.
- **Wrong actor** (calling actor ≠ `initiating_actor_user_id`): `rejected`/`ACTOR_MISMATCH` — reusing the exact locked rejection-category name from EIS §15's same-actor enforcement, applied here by extension.
- **Wrong business** (calling context's server-derived business ≠ token's `business_id`): `rejected`/`STALE_STATE`, and the response is indistinguishable from a nonexistent token — never disclosed as "wrong business." This directly mirrors EIS §11's `get_catalog_command_outcome` cross-business-guessing principle (MC-VRF-009): "a caller attempting to probe another business's [record]... finds nothing... indistinguishable from a genuinely nonexistent key."
- **Stale preview state** (current product/link state no longer matches `expected_state_snapshot`): `rejected`/`STALE_STATE` — this is precisely the already-locked "recompute-and-compare — mismatch → rejected/STALE_STATE" step (Engineering Contract §12, EIS §10 step 5); this report attributes it to the retained-snapshot field rather than inventing a new comparison.
- **Replay rejection (synthesis):** any repeated or replayed submission against an already-decided token is rejected by whichever guard above it fails first (already-consumed, expired, wrong actor, wrong business, or stale state) and never re-invokes the underlying protected write a second time — mirroring the locked channel-replay principle (EIS §5.10: a duplicate confirming event "return[s] the previously recorded outcome... without invoking the underlying protected command again").

### 11.3 Retained Audit Evidence

Because the row is retained (never deleted), it durably records — for as long as it persists — who initiated the preview (`initiating_actor_user_id`), for which business (`business_id`), what state was reviewed (`expected_state_snapshot`), when it would expire (`expires_at`), and whether/when/by whom it was consumed (`consumed_at`, `consuming_actor_user_id`). This satisfies EIS §18's auditability-with-provenance principle for this write path without a separate audit table. This report does not define a garbage-collection or retention-expiry-cleanup policy beyond what the nine required aspects above call for.

- **Founder decision required:** No — every aspect resolved above is either a database/security mechanism (never merchant-visible) or a direct, labeled extension of an already-locked mission-wide principle (same-actor confirmation, cross-business indistinguishability, recompute-and-compare). No merchant-facing product behavior is introduced or changed.
- **Honest completeness assessment:** all nine required aspects (token uniqueness, single-use enforcement, expiry, initiating-actor binding, consuming-actor binding, business binding, preview-state binding, replay rejection, retained audit evidence) now have a concrete, non-conflicting definition. The one open, explicitly non-blocking detail is the exact **expiry duration** value (a tuning parameter, not a structural security question), which no locked source sets and which this report does not invent — comparable to the already-tracked, non-blocking open parameters in Engineering Contract §29.1.
- **Final specialist disposition:**

```text
RESOLVED — TOKEN SECURITY LIFECYCLE DEFINITION ESTABLISHED
```

---

## 12. Item 6 — `business_tax_settings`: Singleton/Uniqueness Enforcement Shape and Null Behavior

**Narrowed per DBR-005.** This item is limited strictly to the constraint/uniqueness shape. The invented `ON CONFLICT ... DO UPDATE` upsert description and any command-execution algorithm are removed; the authorized command (`update_business_tax_settings`) owns its own create-or-update behavior according to the locked command contract, which this report does not redefine.

- **Exact table name:** `business_tax_settings`.
- **Exact proposed constraint/index name:** `business_tax_settings_business_id_uniq`, a named `UNIQUE` constraint over `(business_id)` (conceptual name), layered on top of the already-locked `id`-plus-composite-`UNIQUE (id, business_id)` shape (Lovable Build Prompt §13) that `report1.27.md` Section 9 already recorded as locked for every new table and which this report does not restate as newly resolved.
- **Exact columns or conceptual expression:** conceptually `UNIQUE (business_id)`. Descriptive notation only.
- **Mechanism:** table constraint — a plain, named, single-column `UNIQUE` constraint on `business_id`, enforcing one row maximum per business.
- **Exact null behavior:** `business_id` is `NOT NULL` (mandatory foreign key to `businesses`). No other identity-shaping column is resolved here — this item's scope is strictly the singleton/uniqueness shape, not the substantive tax-setting fields themselves, and not how the owning command creates or updates the row.
- **Business scope:** by definition — this item's entire purpose is to guarantee exactly one row per `business_id`, directly implementing Blueprint Rule 17's "uniform across products" business-wide singleton requirement.
- **Archived/deleted-row behavior:** the row persists for the business lifecycle unless a later authority states otherwise. No locked source or repository precedent describes an independent archive/delete lifecycle for this row distinct from the owning business itself — the `businesses` table (`supabase/migrations/20260708210504_...sql`) has no status/archived concept at all.
- **Command-execution behavior (removed per DBR-005):** this report does not describe, name, or invent an upsert algorithm, conflict-resolution clause, or any other command-execution mechanism. The authorized command `update_business_tax_settings` owns create-or-update behavior according to its own locked command contract (EIS §7, §11); this item resolves only the constraint that contract must satisfy (at most one row per business), not how the command internally achieves it.
- **Locked-source traceability:** Blueprint §10 Rule 17; EIS §7 (`catalog_tax_executor`'s `INSERT`/`UPDATE` grant on `business_tax_settings`); Lovable Build Prompt §13 (mandatory `id`/`business_id` shape for every new table, already locked).
- **Repository precedent relied upon:** the `id uuid PRIMARY KEY` convention used throughout the schema.
- **Technical inference, clearly labeled:** the `UNIQUE (business_id)` singleton mechanism itself and the archived-row conclusion are specialist-derived; Rule 17's singleton requirement itself is locked and unchanged.
- **Founder decision required:** No — a mechanical constraint implementing an already-locked business rule.
- **Final specialist disposition:**

```text
RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED
```

---

## 13. Required Six-Row Constraint Matrix

| Table | Constraint / Index Name | Exact Columns or Conceptual Expression | Mechanism | Null Behavior | Normalization Rule | Business Scope | Archived / Deleted Behavior | Locked-Source Traceability | Specialist Disposition |
|---|---|---|---|---|---|---|---|---|---|
| `catalog_products` | `catalog_products_business_name_normalized_uniq` | `name_normalized = lower(regexp_replace(btrim(name), '\s+', ' ', 'g'))`; `UNIQUE (business_id, name_normalized)` | Stored normalized comparison column + named composite `UNIQUE` constraint | `NOT NULL` (required field; empty/whitespace-only rejected) | Trim + collapse internal whitespace + case-fold; punctuation preserved; Malayalam/Manglish preserved | `business_id`-scoped; reusable across businesses | Archived rows remain inside the uniqueness domain; identities remain reserved; no active-row-only partial index | Blueprint §8 "Product Name and Description," §10 Rule 8; D-026 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |
| `catalog_products` | `catalog_products_business_sku_normalized_uniq` | `sku_normalized = NULLIF(lower(btrim(sku)), '')`; `UNIQUE (business_id, sku_normalized)` | Stored normalized comparison column + named composite `UNIQUE` constraint | Nullable (optional field); blank → `NULL`; multiple `NULL`s allowed; uniqueness applies only to non-`NULL` values | Trim + case-fold where letters exist; internal spacing preserved exactly (no whitespace-collapse); punctuation preserved exactly | `business_id`-scoped; reusable across businesses | Archived rows remain inside the uniqueness domain; identities remain reserved; no active-row-only partial index | Blueprint §8 "SKU," §10 Rule 9; D-024 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |
| `catalog_products` | `catalog_products_business_barcode_normalized_uniq` | `barcode_normalized = NULLIF(lower(btrim(barcode)), '')`; `UNIQUE (business_id, barcode_normalized)` | Stored normalized comparison column + named composite `UNIQUE` constraint | Nullable (optional field); blank → `NULL`; multiple `NULL`s allowed; uniqueness applies only to non-`NULL` values | Trim + case-fold where letters exist; internal spacing preserved exactly (no whitespace-collapse); punctuation preserved exactly | `business_id`-scoped; reusable across businesses | Archived rows remain inside the uniqueness domain; identities remain reserved; no active-row-only partial index | Blueprint §8 "Barcode," §10 Rule 9; D-022 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |
| `catalog_categories` | `catalog_categories_business_name_normalized_uniq` | `name_normalized = lower(regexp_replace(btrim(name), '\s+', ' ', 'g'))`; `UNIQUE (business_id, name_normalized)` | Stored normalized comparison column + named composite `UNIQUE` constraint | `NOT NULL` (required field; empty/whitespace-only rejected) | Trim + collapse internal whitespace + case-fold; punctuation preserved; Malayalam/Manglish preserved | `business_id`-scoped; reusable across businesses | Archived rows remain inside the uniqueness domain; identities remain reserved; no active-row-only partial index | Blueprint §8 "Categories," §10 Rule 10; D-006, D-007, D-008, D-045 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |
| `catalog_link_preview_tokens` | `catalog_link_preview_tokens_token_uniq` | `token uuid`; `UNIQUE (token)`; retained-row lifecycle fields `business_id`, `initiating_actor_user_id`, `expected_state_snapshot`, `expires_at`, `consumed_at`, `consuming_actor_user_id` (Section 11) | Table constraint (`UNIQUE (token)`) plus retained-state lifecycle fields — not deletion-based | `token NOT NULL`; `consumed_at`/`consuming_actor_user_id` nullable until consumption; not a normalized text field | Not applicable — opaque generated value, no text normalization | Token value deliberately global (not business-scoped); owning row is `business_id`-scoped via the separately locked `(id, business_id)` pattern and the row's own `business_id` binding | Rows retained through consumption and expiry — never deleted; single-use and staleness enforced via `consumed_at`/`expires_at` state, not row absence | Engineering Contract §12; EIS §3, §5.10, §10, §11, §15, §18 | `RESOLVED — TOKEN SECURITY LIFECYCLE DEFINITION ESTABLISHED` |
| `business_tax_settings` | `business_tax_settings_business_id_uniq` | `UNIQUE (business_id)` | Table constraint (plain single-column unique, layered on the already-locked `id`/`(id, business_id)` shape) | `business_id NOT NULL`; other identity fields out of this item's scope | Not applicable — singleton-enforcement shape, not a text-normalization rule | `business_id`-scoped by definition (exactly one row per business) | No independent archive/delete lifecycle inferred; persists for the business lifecycle unless later authority states otherwise | Blueprint §10 Rule 17; EIS §7 (`catalog_tax_executor` grant); Lovable Build Prompt §13 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |

---

## 14. Token-Security Lifecycle Matrix (`catalog_link_preview_tokens`)

| Security Property | Conceptual Mechanism | Required Binding or State | Rejection Condition | Locked-Source Basis | Specialist Status |
|---|---|---|---|---|---|
| Token uniqueness | Opaque `token uuid`, globally unique, `UNIQUE (token)`, generated via `gen_random_uuid()` | `token NOT NULL`; unique across the whole table, not only within a business | Token does not resolve to any row → `rejected`/`STALE_STATE` | Engineering Contract §12; EIS §10 step 3 | Specialist-derived column/type; "single-use token" requirement itself is locked (D-068) |
| Token single-use enforcement | Retained-row `consumed_at` timestamp (nullable), set exactly once at successful-commit time; row never deleted | `consumed_at IS NULL` required for the token to be usable | `consumed_at IS NOT NULL` at commit time → `rejected`/`STALE_STATE` | Engineering Contract §12; EIS §10 nine-step commit model | Specialist-derived retained-state mechanism, corrected under DBR-004 to replace this report's prior deletion-based design |
| Token expiry | `expires_at timestamptz`, `NOT NULL`, set at preview-generation time | `now() <= expires_at` required for the token to be usable | `now() > expires_at` → `rejected`/`STALE_STATE` | General "recompute-and-compare" staleness principle, Engineering Contract §12/EIS §10 step 5 | Field and comparison specialist-derived; exact expiry duration not set by any locked source (open, non-blocking) |
| Initiating actor binding | `initiating_actor_user_id uuid`, `NOT NULL`, captured server-side at preview-generation time | Every token row is permanently associated with exactly one initiating actor | Not independently rejectable — consumed together with the consuming-actor-binding check below | EIS §3 (server-derived identity/scope, never caller-supplied) | Specialist-derived field applying a general locked principle to this table |
| Consuming actor binding | At commit time, the verified calling actor is compared against the token's stored `initiating_actor_user_id` | Calling actor must equal the token's initiating actor | Mismatch → `rejected`/`ACTOR_MISMATCH` | EIS §3 ("only the reviewing actor may confirm what they reviewed"); EIS §15 (`ACTOR_MISMATCH` category, stated concretely for `catalog_channel_pending_actions`) | Specialist extension of a locked principle and rejection-category name to this table, labeled |
| Business binding | `business_id uuid NOT NULL`, server-derived at preview-generation time, part of the locked `(id, business_id)` FK-integrity pattern | Calling context's server-derived business must equal the token's stored `business_id` | Mismatch treated identically to a nonexistent token → `rejected`/`STALE_STATE`, never disclosed as "wrong business" | EIS §11 (`get_catalog_command_outcome` cross-business-guessing/indistinguishability principle, MC-VRF-009); Lovable Build Prompt §13 | Specialist extension by direct analogy to an already-locked principle |
| Preview-state / expected-state binding | `expected_state_snapshot` — a retained record of the exact previewed values (proposed link, unit, price requiring confirmation) | Commit step recomputes current state and compares it against the retained snapshot before proceeding | Mismatch (drift since preview) → `rejected`/`STALE_STATE` | Engineering Contract §12; EIS §10 step 5 ("recompute-and-compare") | The recompute-and-compare requirement is locked; the retained-snapshot field shape is specialist-derived |
| Replay rejection | Emergent from the guards above — any resubmission against an already-decided token fails the first applicable guard (consumed, expired, wrong actor, wrong business, or stale state) | No independent field; a composite outcome | Rejected via whichever category applies first; underlying protected write is never invoked a second time | EIS §5.10 (channel confirmation-receipt replay principle, applied here by analogy); Engineering Contract §12 | Specialist synthesis of the other rows' guards, not a new independent mechanism |
| Retained audit evidence | Row is never deleted; `initiating_actor_user_id`, `business_id`, `expected_state_snapshot`, `expires_at`, `consumed_at`, `consuming_actor_user_id` persist together on one row | Row persists after consumption or expiry; not garbage-collected by any mechanism this report defines | Not applicable — this property concerns retention, not rejection | EIS §18 "Audit and Observability" (provenance/auditability principle); DBR-004's retained-row lifecycle requirement | Specialist-derived consequence of adopting the retained-row design DBR-004 requires |

---

## 15. Confirmation That No Executable SQL Appears

```text
EXECUTABLE SQL IN THIS REPORT: NONE
```

Every expression above is written as descriptive/conceptual notation (e.g., `name_normalized = lower(regexp_replace(btrim(name), '\s+', ' ', 'g')))`) inside prose or table cells, explicitly labeled as conceptual and never as a `CREATE TABLE`, `ALTER TABLE`, `CREATE INDEX`, or any other runnable DDL/DML statement. No fenced SQL code block appears anywhere in this report.

---

## 16. Confirmation That No Existing File Was Modified

```text
FILES MODIFIED (this refinement): communication/live/report1.29.md (this file, by its own authorized refinement)
FILES CREATED (this refinement): communication/live/report1.30.md (see that report)
```

No locked document, and no prior report other than this one (as explicitly authorized by `instruction1.30.md` §2), was modified.

---

## 17. Confirmation That No Implementation Artifact Was Created

```text
MIGRATIONS: NONE CREATED
TABLES, COLUMNS, GENERATED COLUMNS: NONE CREATED
CONSTRAINTS, INDEXES: NONE CREATED
RLS POLICIES: NONE CREATED
RPCS, FUNCTIONS, TRIGGERS, ROLES, GRANTS: NONE CREATED
APPLICATION CODE OR TESTS: NONE CREATED
FOUNDER LOVABLE BRIEF: NONE CREATED
IMPLEMENTATION AUTHORIZATION: NONE CREATED
```

This report is Markdown documentation only.

---

## 18. Confirmation That Lovable Was Not Used

```text
LOVABLE PLAN MODE USED: NO
LOVABLE BUILD MODE USED: NO
LOVABLE CREDITS CONSUMED: NONE
```

This resolution was completed entirely through inspection of the locked sources listed in Section 6, `report1.27.md`, `report1.28.md`, `instruction1.30.md`, and direct repository migration inspection. No question was sent to Lovable.

---

## 19. Product Truth Change Status

```text
PRODUCT TRUTH CHANGED: NO
```

No statement in the locked Product Blueprint or the Founder Product Decision Record (D-001–D-068) was altered, reinterpreted, or newly created. Every normalization rule applied above (whitespace, case-folding) is copied directly from Blueprint §8 and §10 text already in force; this report resolves only the database mechanism implementing those already-locked rules, plus purely internal, non-merchant-visible mechanisms (Items 5 and 6).

---

## 20. Founder Decision Requirement, Item by Item

```text
Item 1 (product name):            NO Founder decision required
Item 2 (SKU):                     NO Founder decision required
Item 3 (barcode):                 NO Founder decision required
Item 4 (category name):           NO Founder decision required
Item 5 (link preview token):      NO Founder decision required
Item 6 (business_tax_settings):   NO Founder decision required
```

All six items are resolved as database-mechanism decisions implementing already-locked Product Truth (Items 1–4) or as purely internal, non-merchant-visible mechanisms (Items 5–6). None introduces, changes, or requires a new Founder Product Decision.

---

## 21. Exact Unresolved Blockers, If Any

```text
UNRESOLVED BLOCKERS: NONE
```

All six items reached a fully resolved final disposition. The only remaining open detail is non-blocking: the exact **token expiry duration** for `catalog_link_preview_tokens` (Section 11) is a tuning parameter no locked source sets and this report does not invent, comparable to the already-tracked, non-blocking open parameters in Engineering Contract §29.1. The two points this report previously flagged as inference in its original form — SKU/barcode repeated-internal-whitespace collapse, and archived-row treatment for the four normalized-identity items — are now fixed, non-open dispositions per DBR-002 and DBR-003 and are no longer listed as unresolved.

---

## 22. Founder Lovable Brief Status

```text
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED — NOT CREATED
```

---

## 23. Paste-into-Lovable Authority Status

```text
PASTE-INTO-LOVABLE AUTHORITY: NONE
```

---

## 24. Implementation-Authority Status

```text
STAGE 12 PACKAGE: COMPLETE AND LOCKED
PHASE 1 DATABASE CONSTRAINT RESOLUTION: COMPLETE (AS CORRECTED)
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED — NOT CREATED
PASTE-INTO-LOVABLE AUTHORITY: NONE
LOVABLE PLAN MODE: PROHIBITED — NOT USED
LOVABLE BUILD MODE: PROHIBITED — NOT USED
IMPLEMENTATION AUTHORITY: NONE
```

This report authorizes nothing beyond itself. No Founder Lovable Brief or implementation authorization was created.

---

## 25. Final Conclusion

```text
DATABASE SPECIALIST RESOLUTION COMPLETE — PHASE 1 READINESS MAY PROCEED
```

**As corrected by `instruction1.30.md`:** all six previously blocked database-constraint details from `report1.27.md`/`report1.28.md` now have an exact, implementation-ready (though non-executable) definition. Items 1–4 and 6 conclude `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED`; Item 5 (`catalog_link_preview_tokens`) concludes `RESOLVED — TOKEN SECURITY LIFECYCLE DEFINITION ESTABLISHED` under its own corrected, retained-row security lifecycle. Every item traces to locked Product Truth (Blueprint §8/§10, Founder Decisions D-022/D-024/D-026/D-045) or to already-locked internal mechanisms (Engineering Contract §12, EIS §3/§5.10/§7/§10/§11/§15/§18, Lovable Build Prompt §13/§15), combined with clearly labeled, non-inventive technical inference and existing repository precedent. No Founder decision is required for any item. See `communication/live/report1.30.md` for this refinement's own completion evidence and final conclusion. Preserved throughout: Owner-only initial Phase 1, business isolation, command-only writes, deterministic exact/normalized matching only (no `pg_trgm`, transliteration, phonetic, or AI-based matching), Malayalam/Manglish preservation, D-068 atomic integrity, same-actor confirmation, no global cross-business naming uniqueness, no scheduler or merchant-facing scheduling scope, no Phase 2b/Phase 3 implementation, and the complete locked 28-command future surface unchanged.
