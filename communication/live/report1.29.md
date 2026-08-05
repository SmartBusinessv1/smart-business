# SMART BUSINESS MISSION CONTROL

# Report 1.29 — SB-P-1.11 Database Specialist Resolution

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Phase 1 Database Constraint Resolution

**Executing Room:** Claude Code

**Authorizing Instruction:** `communication/live/instruction1.29.md`

**Report Type:** Documentation-only database-specialist resolution report. No executable SQL, no implementation, no Lovable use. Every proposed expression below is conceptual notation only, not a runnable statement.

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

No other file was created, modified, renamed, moved, or deleted.

---

## 6. Source Inventory Consulted

Locked and governing sources (read-only inspection):

1. Lighthouse Constitution and Source 01/11/18 — no additional constraint-level content found beyond what earlier SB-P-1.11 reports already traced; not independently re-cited per item below where no new fact was drawn from them.
2. `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` — Product Blueprint, §8 "Product Name and Description," "SKU," "Barcode," "Categories," §10 "Business Rules" (Rules 4, 8, 9, 10, 17, 21, 27), §20 "Reuse and Duplication Controls."
3. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md` — D-022, D-024, D-026, D-045.
4. `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` — Version 2.2, LOCKED, §3, §5.0, §7, §10, §11, §12, §24.
5. `docs/implementation/SB-P-1.11/engineering-contract.md` — Version 1.1, LOCKED, §10, §11, §12.
6. `docs/implementation/SB-P-1.11/lovable-build-prompt.md` — Version 1.1, LOCKED, §13, §15.
7. `docs/implementation/SB-P-1.11/verification-checklist.md` — Version 1.1, LOCKED — no new constraint-level fact beyond what its §29.1 restatement already carries forward.
8. Approved Supabase architecture source `merge/active/02_Supabase_Architecture_Framework.md` — reviewed; no `citext`/`unaccent`/Unicode-normalization guidance found.
9. Existing repository migrations and accepted implementation precedent — `supabase/migrations/20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql` (`inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`), `supabase/migrations/20260708210504_0a471e2c-a76c-4178-8aa2-79a3744e8bd2.sql` (`businesses`).
10. `communication/live/report1.27.md` — Section 9 (index matrix, six `BLOCKED` cells this report resolves).
11. `communication/live/report1.28.md` — Sections 9–10 (matrix summary and blocked-row list).

Repository evidence directly inspected: full text of `supabase/migrations/*.sql` (twelve files) for `UNIQUE`, `CHECK`, `btrim`, `CREATE EXTENSION`, `citext`, `unaccent`, and Unicode-normalization usage. Confirmed: only `pgcrypto` is enabled; no `pg_trgm`, `citext`, or `unaccent` extension exists anywhere in the repository; the only existing name-uniqueness precedent (`inventory_items_business_name_uniq UNIQUE (business_id, name)`) is a plain, non-normalized constraint with a separate `CHECK (length(btrim(name)) > 0)` non-empty guard.

No external web research was performed. No Lovable Plan Mode question was asked. No Lovable Build Mode credit was used.

---

## 7. Item 1 — `catalog_products`: Business-Scoped Normalized Product-Name Uniqueness

- **Exact table name:** `catalog_products`.
- **Exact proposed constraint/index name:** `catalog_products_business_name_normalized_uniq` (conceptual name; no object is created by this report).
- **Exact columns or conceptual expression:** a stored, generated comparison value — conceptually `name_normalized = lower(regexp_replace(btrim(name), '\s+', ' ', 'g'))` — with uniqueness expressed conceptually as `UNIQUE (business_id, name_normalized)`. This is descriptive notation only, not executable SQL.
- **Mechanism type:** generated-column uniqueness rule (a stored generated column holding the normalized value, with an ordinary composite unique constraint over `(business_id, name_normalized)`) is the recommended shape; an equivalent expression-based unique index over the same expression is a technically interchangeable alternative. Both are named here so a database specialist may pick either at implementation time without this being an open question.
- **Exact null behavior:** `name` and therefore `name_normalized` are `NOT NULL` — product name is required (Blueprint §8 "Product Name and Description": "Name is required"; D-026).
- **Empty-string behavior:** rejected, not converted to `NULL`. Mirrors the existing `inventory_items` precedent `CHECK (length(btrim(name)) > 0)` — a name that is empty or whitespace-only after trimming fails validation before any uniqueness check runs.
- **Normalization rule:** exactly the two axes Blueprint Rule 8 states — leading/trailing whitespace removed, repeated internal whitespace collapsed to a single space, Latin-letter case folded — and no others.
- **Case handling:** standard case-folding (`lower()`), which by construction only maps cased (Latin-script) codepoints; Malayalam has no case distinction, so this function is a no-op on Malayalam text.
- **Leading/trailing whitespace handling:** removed (`btrim`), matching the existing `inventory_items` precedent's use of `btrim`.
- **Repeated internal whitespace handling:** collapsed to a single space, per Blueprint Rule 8's explicit "treats repeated internal whitespace consistently."
- **Punctuation handling:** preserved exactly as entered. Blueprint Rule 8 names exactly two normalization axes (whitespace, Latin-case); adding punctuation-folding would introduce a normalization axis Product Truth does not require, which this report does not do.
- **Malayalam and Manglish preservation:** the stored `name` column is never modified — only the separate, derived `name_normalized` value is used for the uniqueness check. Because `lower()` and whitespace-collapse do not alter Malayalam codepoints or reorder/strip any characters, Manglish (Malayalam written in Latin script) is case-folded exactly as English would be — consistent with Rule 8's undifferentiated "Latin-letter case differences," not a special case. No transliteration, fuzzy matching, or phonetic step is applied; different Malayalam spellings, Manglish transliterations, or translated names remain distinct values under this constraint, exactly as Blueprint §8 requires ("not automatically treated as the same product... returns a possible match for merchant review").
- **Business scope:** `business_id`-qualified composite uniqueness; two different businesses may use the identical name (Blueprint §8: "Different businesses may use the same name"; D-026).
- **Archived/deleted-row behavior (technical inference, labeled):** not resolved by any locked text. The only existing repository precedent (`inventory_items_business_name_uniq`) is a plain, non-partial `UNIQUE` constraint that does not exempt `archived`-status rows — an archived inventory item's name continues to occupy the uniqueness space. Adopting the same non-partial shape for `catalog_products` (an archived product's name remains reserved and cannot be reused by a new product in the same business) is the specialist recommendation, on reuse-before-duplication grounds (Blueprint §20). This is inference from precedent, not a locked requirement, and Mission Control or the Founder may later choose a partial index scoped to active products instead without conflicting with any locked source.
- **Expected command conflict behavior:** `create_catalog_product` or `update_catalog_product_identity` attempting to save a name whose normalized value already exists for the business should fail this constraint; the owning command's structured rejection path (not an unhandled database exception) should surface it as a validation-stage rejection before any write is attempted, consistent with EIS §3's "expected rejections are committed outcomes, not aborted transactions."
- **Locked-source traceability:** Blueprint §8 "Product Name and Description," §10 Rule 8; Founder Decision D-026.
- **Repository precedent relied upon:** `inventory_items_business_name_uniq UNIQUE (business_id, name)` (shape and business-scoping) and `CHECK (length(btrim(name)) > 0)` (non-empty-after-trim pattern), both from `supabase/migrations/20260721205714_...sql`.
- **Technical inference, clearly labeled:** the normalized-value generated-column mechanism itself (no repository table currently implements case/whitespace-insensitive uniqueness); the archived-row-inclusion choice above.
- **Founder decision required:** No. The normalization rule is already locked Product Truth (Rule 8, D-026); only its database mechanism is resolved here.
- **Final specialist disposition:**

```text
RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED
```

---

## 8. Item 2 — `catalog_products`: Business-Scoped Normalized SKU Uniqueness

- **Exact table name:** `catalog_products`.
- **Exact proposed constraint/index name:** `catalog_products_business_sku_normalized_uniq` (conceptual name).
- **Exact columns or conceptual expression:** conceptually `sku_normalized = NULLIF(lower(btrim(sku)), '')`, with uniqueness expressed conceptually as `UNIQUE (business_id, sku_normalized)`. Descriptive notation only.
- **Mechanism type:** generated-column uniqueness rule (stored generated column plus composite unique constraint), or an equivalent expression-based unique index — same interchangeable pair as Item 1.
- **Exact null behavior:** `sku` is optional (D-024: "at most one optional SKU"), so `sku` and `sku_normalized` are nullable.
- **Optional-field behavior:** a product with no SKU stores `sku` as `NULL`; the constraint never evaluates a comparison for that row against any other row's `NULL`.
- **Whether blank values become `NULL`:** yes. A blank or whitespace-only entered value is normalized to `NULL` (via the conceptual `NULLIF(..., '')` step) rather than stored as an empty string, so "no SKU" is represented once, unambiguously, and does not collide with any other product's absent SKU.
- **Whether multiple `NULL` values are allowed:** yes, inherently. Standard SQL/Postgres `UNIQUE` constraint semantics never treat two `NULL`s as equal, so any number of products in the same business may have `sku_normalized IS NULL` simultaneously without violating the constraint. This is standard relational-database behavior, not an invented mechanism.
- **Whether uniqueness applies only to non-NULL normalized values:** yes — by the same standard `UNIQUE` semantics, the constraint is only ever evaluated between two non-`NULL` `sku_normalized` values.
- **Empty-string behavior:** never stored; converted to `NULL` at the normalization step (see above), for both the raw and normalized value's uniqueness purposes.
- **Normalization rule:** leading/trailing whitespace removed, Latin-letter case folded "consistently for exact identifier matching" (Blueprint §8 "SKU"). Blueprint's SKU text does not repeat the "repeated internal whitespace" phrase used for product name; out of caution against inventing an unstated axis, this report applies whitespace-collapse identically to Item 1's for consistency of identifier comparison, and flags this specific point as inference, not an explicit textual match — see below.
- **Case handling:** `lower()`, same no-op-on-Malayalam property as Item 1.
- **Leading/trailing whitespace handling:** removed.
- **Repeated internal whitespace handling (technical inference, labeled):** Blueprint §8 "SKU" states only leading/trailing whitespace and case handling explicitly, unlike the Product Name subsection's explicit "repeated internal whitespace" clause. This report recommends collapsing repeated internal whitespace for SKU as well, for identifier-comparison consistency with product name and category, but flags this as a specialist recommendation extending beyond SKU's own literal locked text, not itself Product Truth. A future Founder or Mission Control clarification could narrow this without conflicting with any other locked rule.
- **Punctuation handling:** preserved exactly as entered — SKU is explicitly described as merchant-defined free text ("merchant-entered display value is preserved," Blueprint §8 "SKU"), with no punctuation restriction stated.
- **Malayalam and Manglish preservation:** same mechanism and reasoning as Item 1 — `lower()`/whitespace-collapse do not alter Malayalam codepoints; Manglish is case-folded as any Latin-script text would be.
- **Business scope:** `business_id`-qualified; D-024 — "different businesses may use the same SKU."
- **Archived/deleted-row behavior (technical inference, labeled):** same reasoning and same recommendation as Item 1 — non-partial constraint, archived products' SKUs remain reserved, adopted from the `inventory_items` precedent shape, not an explicit lock.
- **Expected command conflict behavior:** same rejection-path treatment as Item 1, applied to `create_catalog_product`/`update_catalog_product_identity`'s SKU field.
- **Locked-source traceability:** Blueprint §8 "SKU," §10 Rule 9; Founder Decision D-024.
- **Repository precedent relied upon:** same `btrim`/non-empty-guard pattern as Item 1; the `NULL`-for-absent-optional-value convention is standard relational practice already implicit in every nullable optional column in the existing schema (e.g., `inventory_items.created_by`, various optional fields), not a single named object.
- **Technical inference, clearly labeled:** the generated-column mechanism itself; the repeated-internal-whitespace extension beyond SKU's literal text; the archived-row-inclusion choice.
- **Founder decision required:** No.
- **Final specialist disposition:**

```text
RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED
```

---

## 9. Item 3 — `catalog_products`: Business-Scoped Normalized Barcode Uniqueness

- **Exact table name:** `catalog_products`.
- **Exact proposed constraint/index name:** `catalog_products_business_barcode_normalized_uniq` (conceptual name).
- **Exact columns or conceptual expression:** conceptually `barcode_normalized = NULLIF(lower(btrim(barcode)), '')`, with uniqueness expressed conceptually as `UNIQUE (business_id, barcode_normalized)`. Descriptive notation only.
- **Mechanism type:** generated-column uniqueness rule or equivalent expression-based unique index — same pair as Items 1–2.
- **Exact null behavior:** `barcode` is optional (D-021/D-020 conceptual precedent carried by Blueprint §8 "Barcode": "may have one optional manually entered barcode"), so `barcode` and `barcode_normalized` are nullable.
- **Optional-field behavior:** identical shape to Item 2 — absent barcode stores `NULL`.
- **Whether blank values become `NULL`:** yes, same `NULLIF(..., '')` normalization step as Item 2.
- **Whether multiple `NULL` values are allowed:** yes, inherently, same standard `UNIQUE`-with-`NULL` semantics as Item 2.
- **Whether uniqueness applies only to non-NULL normalized values:** yes, same reasoning as Item 2.
- **Empty-string behavior:** never stored; converted to `NULL`.
- **Normalization rule:** leading/trailing whitespace removed; Latin-letter case "normalized... where letters are present" (Blueprint §8 "Barcode"). Barcode text, like SKU, does not repeat the explicit "repeated internal whitespace" clause; this report applies the same consistency-driven, explicitly labeled inference as Item 2.
- **Case handling:** `lower()`, applied only where Latin letters are present, per Blueprint §8 "Barcode" — most literal barcode values are numeric and unaffected by case-folding regardless.
- **Leading/trailing whitespace handling:** removed.
- **Repeated internal whitespace handling (technical inference, labeled):** same extension-by-consistency reasoning as Item 2, explicitly flagged as inference beyond barcode's own literal text.
- **Punctuation handling:** preserved exactly as entered — barcode is manually entered text, not validated against a specific symbology in Build Now (Blueprint §8 "Barcode": "manually entered barcode... Multiple barcodes, camera or hardware scanning... are not Build Now"), so no punctuation/character-set restriction is introduced.
- **Malayalam and Manglish preservation:** not materially applicable to typical barcode content (numeric/alphanumeric identifiers), but the same non-destructive mechanism as Items 1–2 applies uniformly if non-Latin characters were ever entered.
- **Business scope:** `business_id`-qualified; Blueprint §8 "Barcode": "unique within the business and may be reused by another business"; D-022.
- **Archived/deleted-row behavior (technical inference, labeled):** same reasoning and recommendation as Items 1–2.
- **Expected command conflict behavior:** same rejection-path treatment as Items 1–2, applied to the barcode field.
- **Locked-source traceability:** Blueprint §8 "Barcode," §10 Rule 9; Founder Decision D-022.
- **Repository precedent relied upon:** same as Item 2.
- **Technical inference, clearly labeled:** the generated-column mechanism itself; the repeated-internal-whitespace extension; the archived-row-inclusion choice.
- **Founder decision required:** No.
- **Final specialist disposition:**

```text
RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED
```

---

## 10. Item 4 — `catalog_categories`: Business-Scoped Normalized Category-Name Uniqueness

- **Exact table name:** `catalog_categories`.
- **Exact proposed constraint/index name:** `catalog_categories_business_name_normalized_uniq` (conceptual name).
- **Exact columns or conceptual expression:** conceptually `name_normalized = lower(regexp_replace(btrim(name), '\s+', ' ', 'g'))`, with uniqueness expressed conceptually as `UNIQUE (business_id, name_normalized)` — identical shape to Item 1. Descriptive notation only.
- **Mechanism type:** generated-column uniqueness rule or equivalent expression-based unique index — same pair as Items 1–3.
- **Exact null behavior:** a category row's own `name` is `NOT NULL` — a category is only created because a merchant named it (Blueprint §8 "Categories": "merchant-defined"); this is distinct from a *product's* category assignment, which is separately optional (Blueprint §8: "A product has zero or one category," D-006) and is not part of this item's scope.
- **Empty-string behavior:** rejected, same `CHECK (length(btrim(name)) > 0)`-style guard as Item 1.
- **Normalization rule:** leading/trailing whitespace removed, repeated internal whitespace collapsed, Latin-letter case folded — Blueprint §8 "Categories" uses the identical three-clause phrasing as the Product Name subsection.
- **Case handling:** `lower()`, same no-op-on-Malayalam property as Item 1.
- **Leading/trailing whitespace handling:** removed.
- **Repeated internal whitespace handling:** collapsed to a single space, explicitly stated for categories (Blueprint §8 "Categories": "treats repeated internal whitespace consistently").
- **Punctuation handling:** preserved exactly as entered, same reasoning as Item 1 — Blueprint §8 "Categories" names only whitespace and case as normalization axes.
- **Malayalam and Manglish preservation:** identical mechanism and reasoning as Item 1; Blueprint §8 "Categories" uses the same "different Malayalam spellings, Manglish transliterations, or translated category names are not automatically merged" language as the product-name subsection.
- **Business scope:** `business_id`-qualified; Blueprint §8 "Categories": "unique within the business"; D-045: "may be reused by different businesses."
- **Archived/deleted-row behavior:** Blueprint §8 "Categories" states directly: archiving "prevents new use of the category" and "preserves prior category history," but does not state whether the archived category's *name* becomes reusable by a brand-new category. Applying the same non-partial-constraint precedent as Items 1–3 (inference, not lock) means an archived category's normalized name remains reserved and blocks a new category of the same name in that business. This is the more conservative, precedent-consistent reading and is flagged the same way as Items 1–3.
- **Expected command conflict behavior:** `create_catalog_category` attempting to save a normalized name that already exists for the business should fail this constraint via a structured rejection, consistent with EIS §3's committed-rejection model, mirroring Items 1–3.
- **Locked-source traceability:** Blueprint §8 "Categories," §10 Rules 8 (by direct textual parallel), 10; Founder Decisions D-006, D-007, D-008, D-045.
- **Repository precedent relied upon:** same `inventory_items` `btrim`/non-empty-guard shape as Item 1; no separate "category" precedent exists elsewhere in the repository, so the identical Item-1 mechanism is reused for internal consistency (reuse-before-duplication, Blueprint §20).
- **Technical inference, clearly labeled:** the generated-column mechanism itself; the archived-row-inclusion choice.
- **Founder decision required:** No.
- **Final specialist disposition:**

```text
RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED
```

---

## 11. Item 5 — `catalog_link_preview_tokens`: Exact Single-Use Token Uniqueness Column and Null Behavior

- **Exact table name:** `catalog_link_preview_tokens`.
- **Exact proposed constraint/index name:** `catalog_link_preview_tokens_token_uniq` (conceptual name).
- **Exact columns or conceptual expression:** a `token` column of type `uuid`, generated the same way every other opaque identifier in this repository already is (`gen_random_uuid()`, via the already-enabled `pgcrypto` extension), with uniqueness expressed conceptually as `UNIQUE (token)`. Descriptive notation only.
- **Mechanism type:** table constraint (a plain, single-column `UNIQUE` constraint) — no normalization or expression is involved, since a token is an opaque generated value, not merchant-entered text.
- **Exact null behavior:** `token` is `NOT NULL` — every preview row exists specifically to hold a token; there is no scenario in which a preview row is created without one.
- **Business scope (deliberately different from Items 1–4):** the *row* itself is `business_id`-scoped like every other new table (composite `UNIQUE (id, business_id)` FK-integrity pattern, Lovable Build Prompt §13), but the `token` *value's* own uniqueness is deliberately global, not business-scoped. A cryptographically random `uuid` has negligible collision probability regardless of scope, and keeping it globally unique is the correct security property for a bearer-style single-use credential (it must not be guessable or reusable across any boundary, business or otherwise). This does not conflict with the "no global cross-business uniqueness" review standard (Section 9 "Review Standard," instruction1.29.md), which governs merchant-facing catalog-identity uniqueness (product name/SKU/barcode/category) — a distinct concern from an internal, non-product-identifying security token.
- **Archived/deleted-row behavior:** rows are not archived — the repository's own scheduler precedent (EIS §12: "delete the now-superseded `catalog_pending_price_schedules` row") establishes that ephemeral, single-use state is deleted upon consumption, not soft-marked. Applying the same shape here: a consumed or expired preview token's row is deleted, which is itself the single-use enforcement mechanism — a replayed token simply resolves to "not found."
- **Expected command conflict behavior:** `assign_or_replace_catalog_inventory_link`/`remove_catalog_inventory_link`'s commit step, presented with a token that does not resolve to an existing row (already consumed, expired, or never issued), returns `rejected`/`STALE_STATE` — the exact behavior Engineering Contract §12 and EIS §10's nine-step commit model step 3 ("token resolution — invalid token → rejected/STALE_STATE") already lock; this report supplies only the missing column-level mechanism behind that already-locked behavior.
- **Locked-source traceability:** Engineering Contract §12 "D-068 — Preview, Confirmation, and Atomic Commit Safeguard"; EIS §10; Lovable Build Prompt §15.
- **Repository precedent relied upon:** `uuid` primary-key/identifier convention used throughout the schema (e.g., `inventory_items.id uuid PRIMARY KEY DEFAULT gen_random_uuid()`); the delete-on-consumption pattern from EIS §12's scheduler model.
- **Technical inference, clearly labeled:** the entire column name, type, and delete-on-consumption mechanism are specialist-derived, since no locked text names them; the D-068 single-use requirement itself is locked and unchanged.
- **Founder decision required:** No — purely an internal database/security mechanism, never merchant-visible.
- **Final specialist disposition:**

```text
RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED
```

---

## 12. Item 6 — `business_tax_settings`: Exact Singleton or Uniqueness Enforcement Shape and Null Behavior

- **Exact table name:** `business_tax_settings`.
- **Exact proposed constraint/index name:** `business_tax_settings_business_id_uniq` (conceptual name), in addition to the already-locked `id`-plus-composite-`UNIQUE (id, business_id)` shape (Lovable Build Prompt §13) that this report does not restate as newly resolved, since `report1.27.md` Section 9 already recorded it as locked for every new table.
- **Exact columns or conceptual expression:** conceptually `UNIQUE (business_id)`, layered on top of the already-locked `id uuid PRIMARY KEY` and `UNIQUE (id, business_id)` shape. Descriptive notation only.
- **Mechanism type:** table constraint (a plain single-column `UNIQUE` constraint on `business_id`), enforcing at most one settings row per business — the minimum additional mechanism needed beyond the already-locked composite pattern.
- **Exact null behavior:** `business_id` is `NOT NULL` (mandatory foreign key to `businesses`); no other identity-shaping column requires resolution under this item's scope, which is limited to the singleton/uniqueness shape, not the substantive tax-setting fields themselves.
- **Business scope:** by definition — this item's entire purpose is to guarantee exactly one row per `business_id`, directly implementing Blueprint Rule 17's "uniform across products" business-wide singleton requirement.
- **Archived/deleted-row behavior (technical inference, labeled):** no locked source or repository precedent describes an independent archive/delete lifecycle for this row distinct from the owning business itself — the `businesses` table (`supabase/migrations/20260708210504_...sql`) has no status/archived concept at all. This report infers the settings row persists for the life of the business record and is not independently archivable, consistent with there being no contrary signal anywhere in locked sources.
- **Expected command conflict behavior (technical inference, labeled):** `update_business_tax_settings` should use a create-or-update ("upsert") shape against `business_id` — conceptually, insert the row if none exists for the business, otherwise update the existing row — mirroring the repository's own existing `INSERT ... ON CONFLICT (business_id, operation, idempotency_key) DO NOTHING` idiom already used for `catalog_write_idempotency_keys` (EIS §11), applied here as `ON CONFLICT (business_id) DO UPDATE` in concept. This is the natural application of an already-used repository pattern, not a new invented mechanism.
- **Locked-source traceability:** Blueprint §10 Rule 17; EIS §7 (`catalog_tax_executor`'s `INSERT`/`UPDATE` grant on `business_tax_settings`); Lovable Build Prompt §13 (mandatory `id`/`business_id` shape for every new table, already locked).
- **Repository precedent relied upon:** the `ON CONFLICT` claiming idiom from `catalog_write_idempotency_keys`/`inventory_movement_idempotency_keys`; the `id uuid PRIMARY KEY` convention used throughout the schema.
- **Technical inference, clearly labeled:** the `UNIQUE (business_id)` singleton mechanism itself, the archived-row conclusion, and the upsert-conflict-handling recommendation are all specialist-derived; Rule 17's singleton requirement itself is locked and unchanged.
- **Founder decision required:** No — a mechanical constraint implementing an already-locked business rule.
- **Final specialist disposition:**

```text
RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED
```

---

## 13. Required Six-Row Constraint Matrix

| Table | Constraint / Index Name | Exact Columns or Conceptual Expression | Mechanism | Null Behavior | Normalization Rule | Business Scope | Archived / Deleted Behavior | Locked-Source Traceability | Specialist Disposition |
|---|---|---|---|---|---|---|---|---|---|
| `catalog_products` | `catalog_products_business_name_normalized_uniq` | `name_normalized = lower(regexp_replace(btrim(name), '\s+', ' ', 'g'))`; `UNIQUE (business_id, name_normalized)` | Generated-column uniqueness rule (or equivalent expression unique index) | `NOT NULL` (required field; empty/whitespace-only rejected) | Trim + collapse internal whitespace + Latin-case fold; punctuation preserved; Malayalam/Manglish preserved | `business_id`-scoped; reusable across businesses | Archived rows remain in uniqueness domain (precedent-based inference) | Blueprint §8 "Product Name and Description," §10 Rule 8; D-026 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |
| `catalog_products` | `catalog_products_business_sku_normalized_uniq` | `sku_normalized = NULLIF(lower(btrim(sku)), '')`; `UNIQUE (business_id, sku_normalized)` | Generated-column uniqueness rule (or equivalent expression unique index) | Nullable (optional field); blank → `NULL`; multiple `NULL`s allowed; uniqueness applies only to non-`NULL` values | Trim + Latin-case fold; whitespace-collapse applied by consistency inference; punctuation preserved | `business_id`-scoped; reusable across businesses | Archived rows remain in uniqueness domain (precedent-based inference) | Blueprint §8 "SKU," §10 Rule 9; D-024 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |
| `catalog_products` | `catalog_products_business_barcode_normalized_uniq` | `barcode_normalized = NULLIF(lower(btrim(barcode)), '')`; `UNIQUE (business_id, barcode_normalized)` | Generated-column uniqueness rule (or equivalent expression unique index) | Nullable (optional field); blank → `NULL`; multiple `NULL`s allowed; uniqueness applies only to non-`NULL` values | Trim + Latin-case fold where letters present; whitespace-collapse applied by consistency inference; punctuation preserved | `business_id`-scoped; reusable across businesses | Archived rows remain in uniqueness domain (precedent-based inference) | Blueprint §8 "Barcode," §10 Rule 9; D-022 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |
| `catalog_categories` | `catalog_categories_business_name_normalized_uniq` | `name_normalized = lower(regexp_replace(btrim(name), '\s+', ' ', 'g'))`; `UNIQUE (business_id, name_normalized)` | Generated-column uniqueness rule (or equivalent expression unique index) | `NOT NULL` (required field; empty/whitespace-only rejected) | Trim + collapse internal whitespace + Latin-case fold; punctuation preserved; Malayalam/Manglish preserved | `business_id`-scoped; reusable across businesses | Archived rows remain in uniqueness domain (precedent-based inference) | Blueprint §8 "Categories," §10 Rule 10; D-006, D-007, D-008, D-045 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |
| `catalog_link_preview_tokens` | `catalog_link_preview_tokens_token_uniq` | `token uuid`; `UNIQUE (token)` | Table constraint (plain single-column unique) | `NOT NULL`; not applicable — not a normalized text field | Not applicable — opaque generated value, no text normalization | Deliberately global (not business-scoped) for token-security reasons; owning row remains `business_id`-scoped via the separately locked `(id, business_id)` pattern | Row deleted on consumption/expiry — single-use enforced by absence, not a status flag | Engineering Contract §12; EIS §10; Lovable Build Prompt §15 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |
| `business_tax_settings` | `business_tax_settings_business_id_uniq` | `UNIQUE (business_id)` | Table constraint (plain single-column unique, layered on the already-locked `id`/`(id, business_id)` shape) | `business_id NOT NULL`; other identity fields out of this item's scope | Not applicable — singleton-enforcement shape, not a text-normalization rule | `business_id`-scoped by definition (exactly one row per business) | No independent archive/delete lifecycle inferred; persists for the life of the business | Blueprint §10 Rule 17; EIS §7 (`catalog_tax_executor` grant); Lovable Build Prompt §13 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |

---

## 14. Confirmation That No Executable SQL Appears

```text
EXECUTABLE SQL IN THIS REPORT: NONE
```

Every expression above is written as descriptive/conceptual notation (e.g., `name_normalized = lower(regexp_replace(btrim(name), '\s+', ' ', 'g')))`) inside prose or table cells, explicitly labeled as conceptual and never as a `CREATE TABLE`, `ALTER TABLE`, `CREATE INDEX`, or any other runnable DDL/DML statement. No fenced SQL code block appears anywhere in this report.

---

## 15. Confirmation That No Existing File Was Modified

```text
FILES MODIFIED: NONE
FILES CREATED: communication/live/report1.29.md (only)
```

Confirmed by `git status --porcelain` on the mission branch, showing exactly this one new path. `report1.27.md` and `report1.28.md` were read-only inputs and were not touched.

---

## 16. Confirmation That No Implementation Artifact Was Created

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

## 17. Confirmation That Lovable Was Not Used

```text
LOVABLE PLAN MODE USED: NO
LOVABLE BUILD MODE USED: NO
LOVABLE CREDITS CONSUMED: NONE
```

This resolution was completed entirely through inspection of the locked sources listed in Section 6, `report1.27.md`, `report1.28.md`, and direct repository migration inspection. No question was sent to Lovable.

---

## 18. Product Truth Change Status

```text
PRODUCT TRUTH CHANGED: NO
```

No statement in the locked Product Blueprint or the Founder Product Decision Record (D-001–D-068) was altered, reinterpreted, or newly created. Every normalization rule applied above (whitespace, Latin-case) is copied directly from Blueprint §8 and §10 text already in force; this report resolves only the database mechanism implementing those already-locked rules, plus purely internal, non-merchant-visible mechanisms (Items 5 and 6).

---

## 19. Founder Decision Requirement, Item by Item

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

## 20. Exact Unresolved Blockers, If Any

```text
UNRESOLVED BLOCKERS: NONE
```

All six items reached `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED`. Two narrow points are explicitly flagged as specialist inference beyond literal locked text, for future Mission Control or Founder visibility, though neither blocks proceeding: (a) whether an archived product/category's normalized name should remain reserved (this report adopts the existing `inventory_items` non-partial-constraint precedent) or instead be freed for reuse; (b) whether SKU/barcode should collapse repeated internal whitespace (this report extends product-name's explicit rule to SKU/barcode for identifier-comparison consistency, since Blueprint §8 states the whitespace-collapse clause explicitly only for product name and category, not for SKU or barcode).

---

## 21. Founder Lovable Brief Status

```text
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED — NOT CREATED
```

---

## 22. Paste-into-Lovable Authority Status

```text
PASTE-INTO-LOVABLE AUTHORITY: NONE
```

---

## 23. Implementation-Authority Status

```text
STAGE 12 PACKAGE: COMPLETE AND LOCKED
PHASE 1 DATABASE CONSTRAINT RESOLUTION: COMPLETE
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED — NOT CREATED
PASTE-INTO-LOVABLE AUTHORITY: NONE
LOVABLE PLAN MODE: PROHIBITED — NOT USED
LOVABLE BUILD MODE: PROHIBITED — NOT USED
IMPLEMENTATION AUTHORITY: NONE
```

This report authorizes nothing beyond itself. No Founder Lovable Brief or implementation authorization was created.

---

## 24. Final Conclusion

```text
DATABASE SPECIALIST RESOLUTION COMPLETE — PHASE 1 AUTHORIZATION MAY BE PREPARED
```

All six previously blocked database-constraint details from `report1.27.md`/`report1.28.md` now have an exact, implementation-ready (though non-executable) definition, each traceable to locked Product Truth (Items 1–4: Blueprint §8/§10, Founder Decisions D-022/D-024/D-026/D-045) or to already-locked internal mechanisms (Items 5–6: Engineering Contract §12, EIS §10/§7, Lovable Build Prompt §13/§15), combined with clearly labeled, non-inventive technical inference and existing repository precedent (`inventory_items`, `catalog_write_idempotency_keys`/`inventory_movement_idempotency_keys`). No Founder decision is required for any item. Preserved throughout: Owner-only initial Phase 1, business isolation, command-only writes, deterministic exact/normalized matching only (no `pg_trgm`, transliteration, phonetic, or AI-based matching), Malayalam/Manglish preservation, D-068 atomic integrity, no global cross-business naming uniqueness, no scheduler or merchant-facing scheduling scope, no Phase 2b/Phase 3 implementation, and the complete locked 28-command future surface unchanged.
