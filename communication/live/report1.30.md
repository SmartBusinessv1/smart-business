# SMART BUSINESS MISSION CONTROL

# Report 1.30 — SB-P-1.11 Database Specialist Resolution Refinement

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Phase 1 Database Constraint Resolution — Narrow Refinement

**Executing Room:** Claude Code, acting in the Database Specialist role

**Authorizing Instruction:** `communication/live/instruction1.30.md`

**Report Type:** Documentation-only refinement report. Corrects Mission Control findings DBR-001 through DBR-005 in `communication/live/report1.29.md`. No implementation, no executable SQL, no Lovable use, no locked-source change.

---

## 1. Mission Identity and Authorization

- Mission ID: SB-P-1.11 — Product Catalog & Pricing.
- Lifecycle activity: Phase 1 Database Constraint Resolution — Narrow Refinement.
- Authorizing instruction: `communication/live/instruction1.30.md`, issued in response to Mission Control's review of `communication/live/report1.29.md` (originally authorized by `communication/live/instruction1.29.md`).
- Executing role: Claude Code acting in the Database Specialist role, as named by `instruction1.30.md`.

---

## 2. Synchronized Base `main` SHA

`30ae3bc248fd4a036a38ae726ea19f50793ff73a`

Confirmed via `git fetch --all --prune` followed by `git checkout main` and `git merge --ff-only origin/main` (fast-forward from `bf009339cdfe47bc16046fbc2e901145461f2f08`, bringing in the merged `instruction1.30.md` and the merged database specialist resolution, PR #93).

---

## 3. Branch Name

`mission/SB-P-1.11-database-specialist-resolution-refinement`

---

## 4. Substantive Commit SHA

`PENDING-SUBSTANTIVE-COMMIT` — to be filled in by a documentation-only follow-up commit once the substantive commit exists, per this repository's established two-commit reporting pattern.

---

## 5. Pull-Request Number and URL

`PENDING-PULL-REQUEST` — to be filled in by the same follow-up commit.

---

## 6. Exact Files Changed

- Modified: `communication/live/report1.29.md`
- Created: `communication/live/report1.30.md`

No other file was created, modified, renamed, moved, or deleted.

---

## 7. Correction Status for DBR-001 Through DBR-005

```text
DBR-001 — One exact normalized-uniqueness mechanism:      APPLIED
DBR-002 — Narrow SKU and barcode normalization:            APPLIED
DBR-003 — Fix archived-row uniqueness:                     APPLIED
DBR-004 — Resolve link-preview token security lifecycle:   APPLIED
DBR-005 — Limit business_tax_settings to constraint only:  APPLIED
```

**DBR-001:** `report1.29.md` Items 1–4 (Sections 7, 8, 9, 10) and the six-row matrix (Section 13) now state exactly one mechanism — a stored normalized comparison column (`catalog_products.name_normalized`, `catalog_products.sku_normalized`, `catalog_products.barcode_normalized`, `catalog_categories.name_normalized`) plus a named composite `UNIQUE` constraint (`catalog_products_business_name_normalized_uniq`, `catalog_products_business_sku_normalized_uniq`, `catalog_products_business_barcode_normalized_uniq`, `catalog_categories_business_name_normalized_uniq`). The prior "or an equivalent expression-based unique index... interchangeable alternative" language was removed everywhere it appeared.

**DBR-002:** `report1.29.md` Items 2 and 3 (Sections 8, 9) now state, for SKU and barcode: trim leading/trailing whitespace; case-insensitive comparison where letters exist; preserve internal spacing exactly; preserve punctuation exactly; blank-after-trim becomes `NULL`; multiple `NULL` values permitted; uniqueness applies only to non-`NULL` normalized values. The prior repeated-internal-whitespace-collapse extension (previously applied to SKU/barcode "by consistency inference") was removed, and the accompanying "a future Founder or Mission Control clarification could narrow this" hedge was removed — SKU and barcode normalization is no longer described as an open Founder decision.

**DBR-003:** `report1.29.md` Items 1–4 (Sections 7–10) now state, for product name, SKU, barcode, and category name, the fixed disposition: archived rows remain inside the uniqueness domain; archived identities remain reserved; no active-row-only partial unique index is permitted. The prior "Mission Control or the Founder may later choose a partial index scoped to active products instead" alternative-design language was removed from all four items.

**DBR-004:** `report1.29.md` Item 5 (Section 11) is fully rewritten. It no longer treats token uniqueness alone as single-use enforcement and no longer relies on deletion-on-consumption. It now defines a retained-row lifecycle separately resolving: token uniqueness, single-use enforcement, token expiry, initiating-actor binding, consuming-actor binding, business binding, preview-state/expected-state binding, replay rejection, and retained audit evidence, each with conceptual specialist field notation and explicit rejection-condition mapping. D-068 and the same-actor confirmation principle are preserved and applied by labeled extension. Item 5's final disposition changed to `RESOLVED — TOKEN SECURITY LIFECYCLE DEFINITION ESTABLISHED`.

**DBR-005:** `report1.29.md` Item 6 (Section 12) is narrowed to retain only: `business_id NOT NULL`; one row maximum per business; named `UNIQUE (business_id)` constraint; row persists for the business lifecycle unless later authority states otherwise. The invented `INSERT ... ON CONFLICT (business_id) DO UPDATE` upsert description and its "command-execution behavior" framing were removed and replaced with an explicit statement that the authorized command `update_business_tax_settings` owns create-or-update behavior according to its own locked command contract, which this resolution does not redefine.

---

## 8. Final Six-Row Corrected Constraint Matrix

| Table | Constraint / Index Name | Exact Columns or Conceptual Expression | Mechanism | Null Behavior | Normalization Rule | Business Scope | Archived / Deleted Behavior | Locked-Source Traceability | Specialist Disposition |
|---|---|---|---|---|---|---|---|---|---|
| `catalog_products` | `catalog_products_business_name_normalized_uniq` | `name_normalized = lower(regexp_replace(btrim(name), '\s+', ' ', 'g'))`; `UNIQUE (business_id, name_normalized)` | Stored normalized comparison column + named composite `UNIQUE` constraint | `NOT NULL` (required field; empty/whitespace-only rejected) | Trim + collapse internal whitespace + case-fold; punctuation preserved; Malayalam/Manglish preserved | `business_id`-scoped; reusable across businesses | Archived rows remain inside the uniqueness domain; identities remain reserved; no active-row-only partial index | Blueprint §8 "Product Name and Description," §10 Rule 8; D-026 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |
| `catalog_products` | `catalog_products_business_sku_normalized_uniq` | `sku_normalized = NULLIF(lower(btrim(sku)), '')`; `UNIQUE (business_id, sku_normalized)` | Stored normalized comparison column + named composite `UNIQUE` constraint | Nullable (optional field); blank → `NULL`; multiple `NULL`s allowed; uniqueness applies only to non-`NULL` values | Trim + case-fold where letters exist; internal spacing preserved exactly; punctuation preserved exactly | `business_id`-scoped; reusable across businesses | Archived rows remain inside the uniqueness domain; identities remain reserved; no active-row-only partial index | Blueprint §8 "SKU," §10 Rule 9; D-024 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |
| `catalog_products` | `catalog_products_business_barcode_normalized_uniq` | `barcode_normalized = NULLIF(lower(btrim(barcode)), '')`; `UNIQUE (business_id, barcode_normalized)` | Stored normalized comparison column + named composite `UNIQUE` constraint | Nullable (optional field); blank → `NULL`; multiple `NULL`s allowed; uniqueness applies only to non-`NULL` values | Trim + case-fold where letters exist; internal spacing preserved exactly; punctuation preserved exactly | `business_id`-scoped; reusable across businesses | Archived rows remain inside the uniqueness domain; identities remain reserved; no active-row-only partial index | Blueprint §8 "Barcode," §10 Rule 9; D-022 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |
| `catalog_categories` | `catalog_categories_business_name_normalized_uniq` | `name_normalized = lower(regexp_replace(btrim(name), '\s+', ' ', 'g'))`; `UNIQUE (business_id, name_normalized)` | Stored normalized comparison column + named composite `UNIQUE` constraint | `NOT NULL` (required field; empty/whitespace-only rejected) | Trim + collapse internal whitespace + case-fold; punctuation preserved; Malayalam/Manglish preserved | `business_id`-scoped; reusable across businesses | Archived rows remain inside the uniqueness domain; identities remain reserved; no active-row-only partial index | Blueprint §8 "Categories," §10 Rule 10; D-006, D-007, D-008, D-045 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |
| `catalog_link_preview_tokens` | `catalog_link_preview_tokens_token_uniq` | `token uuid`; `UNIQUE (token)`; retained lifecycle fields `business_id`, `initiating_actor_user_id`, `expected_state_snapshot`, `expires_at`, `consumed_at`, `consuming_actor_user_id` | Table constraint (`UNIQUE (token)`) plus retained-state lifecycle fields — not deletion-based | `token NOT NULL`; consumption fields nullable until consumed; not a normalized text field | Not applicable — opaque generated value, no text normalization | Token value deliberately global; owning row is `business_id`-scoped | Rows retained through consumption and expiry — never deleted; single-use and staleness enforced via state fields | Engineering Contract §12; EIS §3, §5.10, §10, §11, §15, §18 | `RESOLVED — TOKEN SECURITY LIFECYCLE DEFINITION ESTABLISHED` |
| `business_tax_settings` | `business_tax_settings_business_id_uniq` | `UNIQUE (business_id)` | Table constraint (plain single-column unique, layered on the already-locked `id`/`(id, business_id)` shape) | `business_id NOT NULL`; other identity fields out of scope | Not applicable — singleton-enforcement shape | `business_id`-scoped by definition (exactly one row per business) | No independent archive/delete lifecycle inferred; persists for the business lifecycle unless later authority states otherwise | Blueprint §10 Rule 17; EIS §7 (`catalog_tax_executor` grant); Lovable Build Prompt §13 | `RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED` |

---

## 9. Confirmation That No Alternative Normalized-Uniqueness Mechanism Remains

```text
ALTERNATIVE MECHANISMS REMAINING: NONE
```

A review of the corrected `report1.29.md` Items 1–4 and the Section 13 matrix confirms every occurrence of "equivalent expression-based unique index," "expression unique index," or any other interchangeable-mechanism phrasing has been removed. Each of the four normalized-identity items now names exactly one mechanism: a stored normalized comparison column plus a named composite `UNIQUE` constraint, using the exact column names `catalog_products.name_normalized`, `catalog_products.sku_normalized`, `catalog_products.barcode_normalized`, and `catalog_categories.name_normalized` required by `instruction1.30.md` §3.1.

---

## 10. Confirmation That SKU and Barcode Internal Spacing Is Preserved

```text
SKU INTERNAL SPACING: PRESERVED EXACTLY — NO COLLAPSE APPLIED
BARCODE INTERNAL SPACING: PRESERVED EXACTLY — NO COLLAPSE APPLIED
```

`report1.29.md` Items 2 and 3 (Sections 8, 9) each state explicitly, under "Internal spacing handling (fixed per DBR-002)," that no repeated-internal-whitespace collapse is applied. Only leading/trailing whitespace is trimmed; every internal space, however many consecutive characters, is preserved byte-for-byte in the normalized comparison value. This is a deliberate narrowing from product name and category name, which retain whitespace-collapse because Blueprint §8 states that clause explicitly only for those two fields.

---

## 11. Confirmation That Archived Rows Remain in Uniqueness Scope

```text
ARCHIVED-ROW UNIQUENESS SCOPE: FIXED — ARCHIVED ROWS REMAIN INCLUDED
PARTIAL (ACTIVE-ROW-ONLY) UNIQUE INDEX: NOT PERMITTED — NOT PRESENTED AS AN ALTERNATIVE
```

`report1.29.md` Items 1–4 (Sections 7–10) each state, verbatim, the fixed Mission Control implementation-integrity disposition required by `instruction1.30.md` §3.3: "Archived rows remain inside the uniqueness domain. Archived identities remain reserved. No active-row-only partial unique index is permitted." The prior text presenting a partial-index alternative as something Mission Control or the Founder "may later choose instead" was removed from all four items; this is now recorded as a fixed disposition, not an open design choice.

---

## 12. Link-Preview-Token Security-Lifecycle Matrix

| Security Property | Conceptual Mechanism | Required Binding or State | Rejection Condition | Locked-Source Basis | Specialist Status |
|---|---|---|---|---|---|
| Token uniqueness | Opaque `token uuid`, globally unique, `UNIQUE (token)`, generated via `gen_random_uuid()` | `token NOT NULL`; unique across the whole table, not only within a business | Token does not resolve to any row → `rejected`/`STALE_STATE` | Engineering Contract §12; EIS §10 step 3 | Specialist-derived column/type; "single-use token" requirement itself is locked (D-068) |
| Token single-use enforcement | Retained-row `consumed_at` timestamp (nullable), set exactly once at successful-commit time; row never deleted | `consumed_at IS NULL` required for the token to be usable | `consumed_at IS NOT NULL` at commit time → `rejected`/`STALE_STATE` | Engineering Contract §12; EIS §10 nine-step commit model | Specialist-derived retained-state mechanism, corrected under DBR-004 |
| Token expiry | `expires_at timestamptz`, `NOT NULL`, set at preview-generation time | `now() <= expires_at` required for the token to be usable | `now() > expires_at` → `rejected`/`STALE_STATE` | General "recompute-and-compare" staleness principle, Engineering Contract §12/EIS §10 step 5 | Field and comparison specialist-derived; exact expiry duration not set by any locked source (open, non-blocking) |
| Initiating actor binding | `initiating_actor_user_id uuid`, `NOT NULL`, captured server-side at preview-generation time | Every token row is permanently associated with exactly one initiating actor | Not independently rejectable — consumed together with the consuming-actor-binding check | EIS §3 (server-derived identity/scope, never caller-supplied) | Specialist-derived field applying a general locked principle to this table |
| Consuming actor binding | At commit time, the verified calling actor is compared against the token's stored `initiating_actor_user_id` | Calling actor must equal the token's initiating actor | Mismatch → `rejected`/`ACTOR_MISMATCH` | EIS §3 ("only the reviewing actor may confirm what they reviewed"); EIS §15 (`ACTOR_MISMATCH` category) | Specialist extension of a locked principle and rejection-category name to this table, labeled |
| Business binding | `business_id uuid NOT NULL`, server-derived at preview-generation time | Calling context's server-derived business must equal the token's stored `business_id` | Mismatch treated identically to a nonexistent token → `rejected`/`STALE_STATE` | EIS §11 (cross-business indistinguishability, MC-VRF-009); Lovable Build Prompt §13 | Specialist extension by direct analogy to an already-locked principle |
| Preview-state / expected-state binding | `expected_state_snapshot` — retained record of the exact previewed values | Commit step recomputes current state and compares it against the retained snapshot | Mismatch (drift since preview) → `rejected`/`STALE_STATE` | Engineering Contract §12; EIS §10 step 5 | Recompute-and-compare requirement is locked; retained-snapshot field shape is specialist-derived |
| Replay rejection | Emergent from the guards above — any resubmission fails the first applicable guard | No independent field; a composite outcome | Rejected via whichever category applies first; underlying write never invoked twice | EIS §5.10 (channel confirmation-receipt replay principle, applied by analogy); Engineering Contract §12 | Specialist synthesis of the other rows' guards |
| Retained audit evidence | Row is never deleted; all lifecycle fields persist together | Row persists after consumption or expiry; no defined garbage-collection | Not applicable — concerns retention, not rejection | EIS §18 "Audit and Observability" | Specialist-derived consequence of the retained-row design DBR-004 requires |

---

## 13. Confirmation That Invented Tax-Settings Upsert Behavior Was Removed

```text
ON CONFLICT ... DO UPDATE LANGUAGE: REMOVED
INVENTED UPSERT ALGORITHM: REMOVED
COMMAND-EXECUTION BEHAVIOR DESCRIPTION: REMOVED
```

`report1.29.md` Item 6 (Section 12) no longer describes `INSERT ... ON CONFLICT (business_id) DO UPDATE` or any other upsert mechanism. It now states explicitly, under "Command-execution behavior (removed per DBR-005)," that this report does not describe, name, or invent an upsert algorithm, conflict-resolution clause, or any other command-execution mechanism, and that the authorized command `update_business_tax_settings` owns create-or-update behavior according to its own locked command contract. Item 6 retains only the four elements `instruction1.30.md` §3.5 authorizes: `business_id NOT NULL`; one row maximum per business; named `UNIQUE (business_id)` constraint; row persists for the business lifecycle unless later authority states otherwise.

---

## 14. Confirmation That No Locked Source Was Modified

```text
PRODUCT BLUEPRINT: LOCKED — UNCHANGED
FOUNDER PRODUCT DECISION RECORD D-001–D-068: UNCHANGED
EIS VERSION 2.2: LOCKED — UNCHANGED
ENGINEERING CONTRACT VERSION 1.1: LOCKED — UNCHANGED
LOVABLE BUILD PROMPT VERSION 1.1: LOCKED — UNCHANGED
VERIFICATION CHECKLIST VERSION 1.1: LOCKED — UNCHANGED
PRIOR INSTRUCTIONS: UNCHANGED
PRIOR REPORTS OTHER THAN report1.29.md: UNCHANGED
```

No file under `docs/phase-1-mission-blueprint/` or `docs/implementation/SB-P-1.11/` appears in `git status --porcelain`. `report1.27.md` and `report1.28.md` were not touched.

---

## 15. Confirmation That No Executable Artifact Was Created

```text
SQL: NONE CREATED
MIGRATIONS: NONE CREATED
SCHEMAS, TABLES, COLUMNS, GENERATED COLUMNS: NONE CREATED
CONSTRAINTS, INDEXES: NONE CREATED
RLS POLICIES: NONE CREATED
RPCS, FUNCTIONS, TRIGGERS, ROLES, GRANTS: NONE CREATED
APPLICATION CODE OR TESTS: NONE CREATED
FOUNDER LOVABLE BRIEF: NONE CREATED
IMPLEMENTATION AUTHORIZATION: NONE CREATED
```

Both `report1.29.md` (as corrected) and this report are Markdown documentation only; no fenced SQL/DDL/DML block appears in either file.

---

## 16. Lovable Plan Mode and Build Mode Usage Status

```text
LOVABLE PLAN MODE USED: NO
LOVABLE BUILD MODE USED: NO
LOVABLE CREDITS CONSUMED: NONE
PUBLISHED OR DEPLOYED: NO
```

This refinement was completed entirely through inspection of `report1.29.md`, the locked sources it already cited, and `instruction1.30.md` itself. No question was sent to Lovable.

---

## 17. Product Truth and Founder Decision Status

```text
PRODUCT TRUTH CHANGED: NO
NEW FOUNDER DECISION REQUIRED: NO
```

All five corrections (DBR-001 through DBR-005) are database-mechanism and documentation-precision corrections. None changes merchant-facing product behavior, reinterprets a locked Business Rule, or requires a new Founder Product Decision. The normalization rules themselves (Blueprint §8, §10 Rules 8/9/10) are unchanged; only their previously ambiguous or overreaching database-mechanism descriptions were corrected.

---

## 18. Implementation-Authority Status

```text
STAGE 12 PACKAGE: COMPLETE AND LOCKED
DATABASE SPECIALIST RESOLUTION: COMPLETE (AS CORRECTED)
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED — NOT CREATED
PASTE-INTO-LOVABLE AUTHORITY: NONE
LOVABLE PLAN MODE: PROHIBITED — NOT USED
LOVABLE BUILD MODE: PROHIBITED — NOT USED
IMPLEMENTATION AUTHORITY: NONE
```

This report authorizes nothing beyond itself. No Founder Lovable Brief or implementation authorization was created.

---

## 19. Final Readiness Conclusion

```text
DATABASE SPECIALIST RESOLUTION COMPLETE — PHASE 1 READINESS MAY PROCEED
```

All five Mission Control findings (DBR-001 through DBR-005) are applied. The six-row constraint matrix (Section 8) and the token-security lifecycle matrix (Section 12) are both fully populated with no unresolved cell affecting whether Phase 1 readiness may proceed. The single remaining open detail — the exact token expiry duration for `catalog_link_preview_tokens` — is a non-blocking tuning parameter, not a structural or Product Truth question, and does not change this conclusion. This does not overstate resolution: every item's disposition in `report1.29.md` (as corrected) accurately reflects what was and was not established by this and the prior resolution.
