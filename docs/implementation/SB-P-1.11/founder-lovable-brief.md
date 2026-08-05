# SB-P-1.11 — Founder Lovable Brief

Product Catalog & Pricing — Initial Phase 1 (19-Command Scope)

```text
FOUNDER LOVABLE BRIEF STATUS:
DRAFT — MISSION CONTROL REVIEW REQUIRED

PASTE-INTO-LOVABLE AUTHORITY:
NONE

LOVABLE PLAN MODE AUTHORITY:
NONE

LOVABLE BUILD MODE AUTHORITY:
NONE

IMPLEMENTATION AUTHORITY:
NONE

PUBLISHING OR DEPLOYMENT AUTHORITY:
NONE
```

This document is a preparation draft. It is not approved, not locked, and does not authorize pasting it into Lovable, Lovable Plan Mode, Lovable Build Mode, implementation, publishing, or deployment. Founder review and a separate, explicit Mission Control implementation authorization are both still required before any of that may happen.

---

## 1. Document Identity and Status

| Field | Value |
|---|---|
| Mission ID | SB-P-1.11 |
| Mission Name | Product Catalog & Pricing |
| Document Type | Founder Lovable Brief |
| Version | 1.0 |
| Status | DRAFT — MISSION CONTROL REVIEW REQUIRED |
| Authorizing Instruction | `communication/live/instruction1.33.md` |
| Scope Covered | Initial Phase 1 only — 19 of the 28 locked commands |
| Governing Package | Stage 12 Initial Implementation Package (Product Blueprint, EIS v2.2, Engineering Contract v1.1, Lovable Build Prompt v1.1, Verification Checklist v1.1) — all LOCKED |
| Readiness Basis | `communication/live/report1.27.md` through `communication/live/report1.32.md` |

---

## 2. Founder-Facing Purpose

This brief exists to hand a Founder-readable, technically precise description of exactly what "initial Phase 1" means for SB-P-1.11 to whoever eventually receives implementation authorization — so that Lovable is told exactly what to build, exactly what not to build, and exactly how to prove it built the right thing, without needing to re-derive any of that from the underlying engineering documents.

It converts five already-locked documents and six already-accepted readiness reports into one handoff document. This brief is intended to restate locked requirements and accepted Mission Control dispositions. It does not have authority to create new Product Truth or implementation requirements. Any inconsistency with a locked source must be resolved in favor of the locked source.

---

## 3. What This Initial Phase 1 Delivers for the Merchant

For the business owner, initial Phase 1 delivers a working, dashboard-based product catalogue:

- Create and archive categories. Create, edit, archive, reactivate, and — where eligible — permanently delete products. (Categories support create and archive only; there is no edit, reactivate, or permanent-delete command for a category.)
- Set and change a product's selling price immediately, with full price history preserved.
- Set an optional reference cost (never shown to employees by default) and an optional tax treatment, both with full history.
- Link a catalog product to an existing inventory item, with a mandatory price/unit confirmation step so a price can never silently change its meaning.
- Search and browse the catalogue using exact and normalized (whitespace/case-insensitive) matching, in English, Malayalam, or Manglish, with the merchant's own wording always preserved on screen.
- Look up the outcome of any prior catalogue action if something seemed to go wrong (a stuck screen, a retried tap), instead of guessing.

All of this is available to the business owner only, from day one, through the dashboard.

---

## 4. What This Initial Phase 1 Deliberately Does Not Deliver

This is not an oversight list — every item below is either future approved Product Truth on a later build schedule, or infrastructure this mission is explicitly not authorized to design:

- **No scheduled/future pricing.** A merchant cannot yet schedule a price to change automatically at a future date, and no automatic price-schedule activation runs. This includes `schedule_catalog_selling_price`, `cancel_scheduled_catalog_selling_price`, `list_due_catalog_price_schedule_candidates`, `activate_catalog_price_schedule`, the scheduler worker, the scheduler's own service identity, and any `pg_cron`/`pg_net` activation. Scheduling is approved future Product Truth, not part of this scope, so that a merchant can never be shown a "scheduled price" control that looks like it will activate itself when nothing is actually watching for it.
- **No Manager or Employee catalogue access.** Only the owner can use any catalogue feature until a shared, cross-mission permission engine exists and is separately authorized (Phase 2a).
- **No bulk CSV/Excel import.** Import, its correction queue, and its supporting tables are a separate, later phase (Phase 2b).
- **No WhatsApp, voice, or photo-based catalogue actions.** Conversational catalogue intent handling depends on a shared conversational engine that does not yet exist (Phase 3).
- **No "did-you-mean" or similarity-based search suggestions.** Search is exact and normalized only — no `pg_trgm`, no similarity/GIN indexing, no fuzzy or phonetic matching, no transliteration, and no AI-based normalization of any kind.
- **No discretionary performance tuning.** Only the integrity-enforcing constraints already fixed by locked sources are included; query-performance indexes that depend on real usage data or specialist review are deferred.
- **No automated cleanup of expired preview tokens.** Token records become eligible for cleanup after a fixed retention window, but nothing is authorized to actually delete or minimize them yet — that requires its own future, separately authorized mission.
- **No shared `system_errors` table.** Observability for initial Phase 1 relies entirely on the mechanisms already described in Section 13; the generic, cross-mission `system_errors` capability belongs to a future shared-infrastructure mission, not this one.

---

## 5. Locked Sources and Authority Hierarchy

In order of authority, all currently on `main` and unchanged by this brief:

1. Lighthouse Constitution.
2. Smart Business Master System Manifesto.
3. Smart Business Product Truth Map.
4. Founder Product Decisions D-001 through D-068 (`docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`).
5. SB-P-1.11 Product Blueprint — LOCKED (`docs/phase-1-mission-blueprint/active/SB-P-1.11.md`).
6. SB-P-1.11 EIS Version 2.2 — LOCKED (`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`).
7. SB-P-1.11 Engineering Contract Version 1.1 — LOCKED (`docs/implementation/SB-P-1.11/engineering-contract.md`).
8. SB-P-1.11 Lovable Build Prompt Version 1.1 — LOCKED (`docs/implementation/SB-P-1.11/lovable-build-prompt.md`).
9. SB-P-1.11 Verification Checklist Version 1.1 — LOCKED (`docs/implementation/SB-P-1.11/verification-checklist.md`).
10. Accepted readiness reports `communication/live/report1.27.md` through `communication/live/report1.32.md` (Phase 1 readiness resolution, database specialist resolution, and token-lifecycle parameter resolution, each as corrected by its own accepted Mission Control review).

Where a later accepted report corrected an earlier one, this brief uses only the latest accepted disposition. This brief does not add, remove, or reinterpret anything in the list above.

---

## 6. Exact 19-Command Initial Phase 1 Scope Table

Every name below is copied verbatim from the locked Lovable Build Prompt §11 command surface, restricted to the 19 commands `communication/live/report1.27.md`/`report1.28.md` (Matter 4, as corrected) authorize for initial Phase 1.

The initial scope contains 19 of the 21 Phase 1 commands. The two merchant-facing scheduling commands (`schedule_catalog_selling_price`, `cancel_scheduled_catalog_selling_price`) are excluded from Phase 1. The two separate scheduler commands (`list_due_catalog_price_schedule_candidates`, `activate_catalog_price_schedule`) and their runtime were never part of the 21-command Phase 1 group in the first place — the locked Lovable Build Prompt §11 lists them as their own, separately named "Environment-gated scheduler commands" group. Both exclusions are detailed in Section 4 and Section 14.

| Command | Phase | Included in Initial Phase 1 | User or System Actor | Primary Purpose | Main Tables or Protected Resources | Verification Reference |
|---|---|---|---|---|---|---|
| `create_catalog_product` | Phase 1 | Yes | Owner (dashboard) | Create a new catalog product | `catalog_products`, `catalog_audit_events`, `catalog_file_references` (read), `catalog_write_idempotency_keys` | CHK-P1-001, CHK-BE-004, CHK-ISO-001 |
| `update_catalog_product_identity` | Phase 1 | Yes | Owner (dashboard) | Edit name, description, SKU, barcode, category, or image | `catalog_products`, `catalog_categories`, `catalog_audit_events`, `catalog_file_references`, `catalog_write_idempotency_keys` | CHK-P1-001, CHK-UX-002 |
| `update_catalog_product_unit` | Phase 1 | Yes | Owner (dashboard) | Change a non-stock product's selling unit before sale history exists | `catalog_products`, `catalog_audit_events`, `catalog_write_idempotency_keys` | CHK-SEP-002, CHK-P1-001 |
| `create_catalog_category` | Phase 1 | Yes | Owner (dashboard) | Create a business-owned category | `catalog_categories`, `catalog_write_idempotency_keys` | CHK-P1-001, CHK-UX-002 |
| `archive_catalog_category` | Phase 1 | Yes | Owner (dashboard) | Archive a category — uncategorizes affected products, preserves history | `catalog_categories`, `catalog_products`, `catalog_audit_events` | CHK-P1-001 |
| `archive_catalog_product` | Phase 1 | Yes | Owner (dashboard) | Archive a product that has business history | `catalog_products` (status), `catalog_audit_events` | CHK-P1-001 |
| `reactivate_catalog_product` | Phase 1 | Yes | Owner (dashboard) | Reactivate a previously archived product | `catalog_products` (status), `catalog_audit_events` | CHK-P1-001 |
| `delete_catalog_product` | Phase 1 | Yes | Owner (dashboard) | Permanently delete a product with no dependent history, retaining a minimal deletion record | `catalog_products`, `catalog_deletion_records`, `catalog_audit_events` | CHK-P1-001 |
| `record_catalog_selling_price_change` | Phase 1 | Yes | Owner (dashboard) | Change the current selling price immediately | `catalog_selling_price_events`, `catalog_products` (read) | CHK-PTC-001, CHK-PTC-002 |
| `record_catalog_tax_change` | Phase 1 | Yes | Owner (dashboard) | Change a product-level tax override | `catalog_tax_events`, `catalog_write_idempotency_keys` | CHK-PTC-001 |
| `update_business_tax_settings` | Phase 1 | Yes | Owner (dashboard) | Set the business-wide tax-inclusive/exclusive default | `business_tax_settings` | CHK-PTC-001; Section 9 (singleton) |
| `record_catalog_reference_cost_change` | Phase 1 | Yes | Owner (dashboard) | Change the optional reference cost | `catalog_reference_cost_events`, `catalog_products` (read) | CHK-PTC-001, CHK-EMP-001 |
| `preview_catalog_inventory_link_change` | Phase 1 | Yes | Owner (dashboard) | Preview a first-time assignment, replacement, or removal of an inventory link (unit and price where applicable) before saving — step 1 of the D-068 safeguard for every one of these three outcomes | `catalog_link_preview_tokens`, `catalog_products` (read), `inventory_items` (read) | CHK-D068-001 |
| `assign_or_replace_catalog_inventory_link` | Phase 1 | Yes | Owner (dashboard, same actor as the preview) | Confirm and atomically commit a previewed first-time assignment or replacement — step 2 of the D-068 safeguard, using the valid preview token | `catalog_link_preview_tokens`, `catalog_product_link_events`, `catalog_selling_price_events`, `catalog_products` | CHK-D068-001, CHK-D068-002, CHK-ACT-001 (extended) |
| `remove_catalog_inventory_link` | Phase 1 | Yes | Owner (dashboard, same actor as the preview) | Confirm and atomically commit a previewed inventory-link removal — step 2 of the D-068 safeguard, using the valid preview token | `catalog_link_preview_tokens`, `catalog_product_link_events`, `catalog_products` | CHK-SEP-001, CHK-D068-001, CHK-D068-002, CHK-ACT-001 (extended) |
| `get_catalog_command_outcome` | Phase 1 | Yes | Owner (dashboard) | Reconcile the outcome of a prior command call, by idempotency key | `catalog_write_idempotency_keys` | CHK-ISO-002, CHK-IDEM-001 |
| `catalog_products_search` | Phase 1 | Yes | Owner (dashboard) | Deterministic exact/normalized product search | `catalog_products` (read) | CHK-UX-002; Section 11 |
| `catalog_product_read` | Phase 1 | Yes | Owner (dashboard) | Read one product's permission-filtered detail | `catalog_products` (read) | CHK-EMP-001 |
| `catalog_products_list_batch` | Phase 1 | Yes | Owner (dashboard) | List/batch-read products for dashboard views | `catalog_products` (read) | CHK-EMP-001 |

**Total included: 19 commands.** No command name above is renamed, combined, split, or invented; each is copied verbatim from Lovable Build Prompt §11.

---

## 7. Merchant Experience and Human Workflow

- **Catalogue entry point.** A Products/Catalog navigation entry extends the existing dashboard header, following the same pattern already used for Inventory — no second navigation surface.
- **List and search.** The merchant sees their products, can search by name, SKU, or barcode using exact/normalized matching (typo-in-whitespace or letter-case does not create a false "not found"), and can filter by category or lifecycle status.
- **Create and edit.** Creating or editing a product is a plain form: name (required), optional description/SKU/barcode/category/image, and — once linked to inventory — an inherited unit; otherwise a selling unit the merchant chooses.
- **Price, tax, and cost.** Selling price, tax treatment, and reference cost each have their own small, clearly labeled edit surface, each preserving full history. Reference cost is owner-only and never shown to any other role by default (Section 9), which matters even though Phase 1 has no other roles yet, because the same screens must not expose it once Phase 2a arrives.
- **Linking to inventory — the one screen requiring extra care.** When a merchant links a product to an inventory item, changes an existing link, or removes a link entirely, the system always shows a preview first — for a link that changes the selling unit, the preview shows current unit and price, the proposed new unit, and the price the merchant must explicitly confirm or replace; for a removal, the preview shows exactly what will stop being linked. Nothing saves until the merchant reviews and confirms that exact preview, and only the same person who opened the preview can confirm it. If the merchant closes the tab, gets interrupted, or waits too long (the preview is valid for 15 minutes only), nothing changes — the merchant simply requests a fresh preview. **Unlinking is not a one-tap action** — it goes through this same preview-and-confirm step before the product-inventory relationship actually changes, exactly like assigning or replacing a link does. This exists so a number the merchant typed under one unit can never silently become "the same number, but per a different unit," and so a link can never disappear from a single accidental tap — both real risks for a cash-strapped small business if either happened silently.
- **Archiving and deletion.** Archiving a product or category never deletes its history and never silently affects a linked record on the other side (product/inventory). Categories can be created and archived only — there is no command to edit, reactivate, or permanently delete a category once created. For products only, permanent deletion is offered when there is truly nothing to lose, and a product can be reactivated after archiving.
- **When something seems stuck.** If a save appears to hang or a screen is retried, the merchant is never left guessing — the system can always look up what actually happened using the same reference the original attempt used, rather than risking a duplicate action.

---

## 8. Data Model and Integrity Boundaries

Every table below is new to this mission; none is a Phase 1-only object — it is simply the subset relevant to the 19 included commands (Section 6). Later-phase tables (`catalog_pending_price_schedules`, `catalog_price_schedule_events`, `catalog_channel_pending_actions`, `catalog_channel_confirmation_receipts`, `catalog_import_jobs`, `catalog_import_rows`) are locked future authority and are explicitly out of this scope (Section 14).

**In-scope tables:** `catalog_products`, `catalog_categories`, `catalog_selling_price_events`, `catalog_tax_events`, `business_tax_settings`, `catalog_reference_cost_events`, `catalog_link_preview_tokens`, `catalog_product_link_events`, `catalog_audit_events`, `catalog_deletion_records`, `catalog_file_references`, `catalog_write_idempotency_keys`.

**Integrity-enforcing constraints (already fixed, not discretionary):**

- Every new table's primary key is `id`, plus the mandatory composite `UNIQUE (id, business_id)` FK-integrity pattern applied to every new table.
- `catalog_products.name_normalized`, `catalog_products.sku_normalized`, `catalog_products.barcode_normalized`, `catalog_categories.name_normalized` — stored normalized comparison columns, each backed by a named composite `UNIQUE (business_id, <column>)` constraint. This is the one accepted normalized-uniqueness mechanism; no expression-index alternative is used.
- Product-name and category-name normalization: trim leading/trailing whitespace, collapse repeated internal whitespace to one space, case-fold for deterministic comparison, preserve punctuation, preserve Malayalam and Manglish exactly.
- SKU and barcode normalization: trim leading/trailing whitespace, case-fold where letters exist, **preserve internal spacing exactly** (no whitespace collapse), preserve punctuation exactly, blank-after-trim becomes `NULL`, multiple `NULL` values are allowed, uniqueness applies only to non-`NULL` normalized values.
- **Archived identities remain reserved.** For product name, SKU, barcode, and category name, an archived row's identity continues to occupy its uniqueness slot. No active-row-only partial unique index is permitted, for any of the four.
- `catalog_write_idempotency_keys` — `UNIQUE (business_id, operation, idempotency_key)`, the outcome-of-record for every command call, including rejected ones.
- `business_tax_settings` — `business_id NOT NULL`, `UNIQUE (business_id)`, one row maximum per business. No upsert algorithm is prescribed here; the authorized command owns its own create-or-update behavior under its locked command contract.
- Deferred, not included here: query-supporting/performance indexes, `pg_trgm`/GIN indexes, and any index requiring real usage evidence — these remain a specialist-review item, non-blocking to this scope.

---

## 9. Authorization, RLS, and Business-Isolation Boundaries

- **Owner-only.** Every one of the 19 commands verifies `businesses.owner_id = auth.uid()` and nothing else. No permission flag, staff role, or delegated authority is queried, simulated, or locally recreated. Command signatures and data structures remain forward-compatible with the future Phase 2a permission engine, but Phase 2a enforcement itself is not activated.
- **RLS everywhere, but writes never come from RLS grants.** Every new table carries `business_id` and the standard owner-subquery RLS pattern. No protected catalog table's RLS policy grants `INSERT`/`UPDATE`/`DELETE` to `authenticated`. Reads that expose protected fields (reference cost, margin-adjacent data) go through a permission-aware read path, never a direct table `SELECT`.
- **Business isolation.** No search, read, validation, or error message discloses another business's existence, state, or record content. `get_catalog_command_outcome` derives its business scope server-side only — a cross-business idempotency-key guess must return the same result as a nonexistent key.
- **The single-use preview token follows the same discipline.** A `catalog_link_preview_tokens` row is `business_id`-bound at issuance; a caller whose server-derived business does not match the token's business gets the same rejection as an invalid token — never a distinguishable "wrong business" response (Section 12).

---

## 10. Command-Only Write Model and Idempotency

- No protected catalog table ever grants direct client `INSERT`/`UPDATE`/`DELETE`. Every mutation goes through one of the 19 named commands above (or, for future phases, the remaining 9 commands of the locked 28 — Section 14).
- Idempotency resolves before any mutable-state check, on every command: actor and business are derived first, then the idempotency key and payload fingerprint are checked, before any precondition or stale-state evaluation runs. `catalog_write_idempotency_keys.status` has exactly two terminal values (`completed`, `rejected`) — never a durable "in progress" state.
- A rejected attempt is a committed outcome, not an aborted transaction: rejection bookkeeping (idempotency status, D-068 token consumption where applicable) durably persists even when the protected business tables themselves were never touched.
- If a UI need cannot be satisfied by one of the 19 named commands, that is a stop condition (Section 17) — never license to add a new write path.

---

## 11. Search and Normalization Rules

Initial Phase 1 search (`catalog_products_search`) and every uniqueness check use **deterministic exact and normalized matching only**:

- No `pg_trgm`.
- No GIN similarity indexing.
- No fuzzy matching.
- No phonetic matching.
- No transliteration.
- No AI-based normalization.
- No uncertain-match automation of any kind.

Different Malayalam spellings, Manglish transliterations, or translated names/SKUs are never treated as the same value; the exact/normalized comparison rules in Section 8 are the entire matching surface for this scope. A future, separately specialist-reviewed similarity-assistance feature is explicitly out of scope here, not silently included.

---

## 12. D-068 Preview, Confirmation, Token, and Audit Lifecycle

The inventory-link safeguard is a two-step flow for every one of the three outcomes it governs — first-time assignment, replacement, and removal — and none of it is discretionary:

```text
1. preview_catalog_inventory_link_change
2. assign_or_replace_catalog_inventory_link (assignment/replacement)
   OR remove_catalog_inventory_link (removal)
   — using the valid preview token from step 1
```

**Removal is not exempt from this flow.** `remove_catalog_inventory_link` never runs on its own; it always confirms a preview that `preview_catalog_inventory_link_change` already produced, exactly as `assign_or_replace_catalog_inventory_link` does for assignment/replacement. Everything below applies identically to all three outcomes unless stated otherwise:

- **Preview before confirmation.** A non-mutating preview is required before any inventory-link assignment, replacement, or removal; it returns a single-use token binding the exact reviewed state (proposed link, unit, and price for assignment/replacement; the link being removed for removal).
- **Token validity: exactly 15 minutes, fixed, server-controlled.** The client cannot supply, extend, renew, or override this. The clock starts at server-side issuance; the boundary is `now() < expires_at`, evaluated on the server only — there is no client-clock dependency and no clock-skew case to handle, because only one clock (the server's) is ever consulted.
- **No renewal.** There is no "extend" or "refresh" operation. After expiry, the merchant must request a fresh preview, which also re-shows current, accurate state.
- **Same-actor confirmation.** Only the actor who requested the preview may confirm it. Any mismatch is rejected unconditionally — there is no delegated or "confirm on behalf of" path.
- **Business binding and expected-state binding.** The token is bound to one business and to the exact previewed state; a mismatch on either is rejected identically to an invalid token (never disclosed as "wrong business" specifically).
- **Single-use, enforced by state, not by deletion.** The token row is retained, not deleted, on consumption or expiry; a `consumed_at` field (set exactly once, atomically with the confirming write) is what makes replay impossible — not the row's absence.
- **Replay rejection.** Any resubmission against an already-decided token — consumed, expired, wrong actor, wrong business, or stale preview state — is rejected, and the underlying protected write is never invoked a second time.
- **Retention (fixed, not indefinite):** full non-secret lifecycle metadata is retained for **90 days after `consumed_at`** for a consumed token, or **30 days after `expires_at`** for an expired-and-never-consumed token.
- **Raw-token minimization.** On consumption, the raw token value is redacted immediately, in the same transaction that records consumption. On expiry, logical unusability is immediate (guaranteed by the mandatory `expires_at` check alone) even though physical redaction of the stored value may lag until the first authorized interaction with that row or a future cleanup process, whichever happens first — an expired, never-retried row is unusable the entire time regardless.
- **Purge eligibility is fixed; purge execution is not authorized.** A row becomes purge-eligible at `consumed_at + 90 days` or `expires_at + 30 days`. Reaching that point does not itself delete or further minimize anything — no cleanup worker, cron job, Edge Function, RPC, or equivalent mechanism exists or is authorized by this brief. Reaching eligibility must never be described, in any implementation or documentation, as active automated purge.
- **Durable audit-only evidence**, if a row is ever minimized rather than deleted by a future authorized mechanism, excludes the raw bearer token, the complete previewed-state payload, and unnecessary personal data — retaining only business identity, a stable correlation identity, initiating/consuming actor, issue/expiry/consumption times, lifecycle outcome, rejection reason where applicable, and a minimal expected-state digest.

---

## 13. Error, Rollback, and Observability Boundaries

- **No `system_errors` in this scope.** Initial Phase 1 does not create, reference, or substitute a catalog-specific error table. Observability relies entirely on: `catalog_write_idempotency_keys` (the outcome-of-record for every command attempt, including rejections), standard database transaction rollback for genuinely unexpected failures, structured database errors, and the repository's existing logging. The shared, generic `system_errors` capability is real, Founder-approved future infrastructure — it belongs to a separate future shared-infrastructure mission, not to this one.
- **Expected rejections commit; only genuine failures roll back.** A validation, permission, stale-state, or conflict rejection is a normal, committed structured result (idempotency bookkeeping and, where applicable, D-068 token consumption, persist) — the protected business tables are simply never written on that path. Only a genuinely unexpected error triggers a full exception-driven rollback, and only that becomes a client-visible `UNKNOWN_OUTCOME`.
- **Merchant-safe messaging.** Every rejection category maps to a specific, plain-language message. No raw error code, stack trace, or database constraint name is ever exposed to the merchant.

---

## 14. Phase Gates and Excluded Future Scope

The locked, complete 28-command surface remains fully authoritative future authority. This brief documents only the 19 commands included in initial Phase 1 (Section 6); the remaining 9 are not implemented, scaffolded, exposed, granted, or partially activated under this brief.

The initial scope contains 19 of the 21 Phase 1 commands. The two merchant-facing scheduling commands are excluded from Phase 1. The two separate scheduler commands and their runtime remain excluded under the scheduler gate — they were never part of the 21-command Phase 1 group; the locked Lovable Build Prompt §11 has always listed them as their own separate "Environment-gated scheduler commands" group, independent of which Phase 1 commands are authorized:

| Excluded group | Commands / capability | Gate |
|---|---|---|
| Merchant-facing scheduling (2 of the 21 Phase 1 commands) | `schedule_catalog_selling_price`, `cancel_scheduled_catalog_selling_price` | Excluded from initial Phase 1 by Mission Control disposition — a merchant must never see a scheduling control that cannot actually activate |
| Scheduler runtime (a separate 2-command group, not part of the 21-command Phase 1 group) | `list_due_catalog_price_schedule_candidates`, `activate_catalog_price_schedule`, scheduler worker, `catalog_scheduler_service` identity, `pg_cron`, `pg_net` | Environment-verification gate + separate future implementation authorization |
| Phase 2a | Permission-flag enforcement on existing Phase 1 commands (no new command names) | Requires the shared permission engine — not yet built for any mission |
| Phase 2b | `create_catalog_import_job`, `stage_catalog_import_rows`, `apply_catalog_import_valid_rows` and their tables/indexes | Separate future authorization |
| Phase 3 | `create_catalog_pending_action`, `confirm_catalog_pending_action`, channel pending actions, channel confirmation receipts | Requires the shared conversational engine — not yet built for any mission |

No command outside the authorized initial Phase 1 scope may be implemented, scaffolded, exposed, granted, deployed, or partially activated by any future Lovable run this brief eventually feeds — that requires its own separate, explicit Mission Control authorization naming that specific phase or gate.

---

## 15. Lovable Execution Instructions for a Future Authorized Implementation Run

**These instructions are for a future, separately authorized run only. They are not active now (see the status block at the top of this document and Section 18).** When, and only when, a Founder- and Mission-Control-authorized implementation run begins:

1. Attach the locked Lovable Build Prompt Version 1.1 (`docs/implementation/SB-P-1.11/lovable-build-prompt.md`) in full — it remains the complete builder instruction; this brief summarizes it for Founder review, it does not replace it.
2. Build exactly the 19 commands in Section 6, and no others, using the exact locked signatures, table names, and role/privilege model already specified in the EIS and Engineering Contract.
3. Implement every boundary in Sections 8–13 of this brief exactly as stated — none of it is optional or subject to "simplification."
4. Do not implement, scaffold, or expose anything listed in Section 4 or Section 14.
5. Do not design, build, or activate any cleanup/purge mechanism for `catalog_link_preview_tokens` — reaching purge eligibility (Section 12) is the limit of this scope.
6. Produce the evidence named in Section 16 as the implementation proceeds, not after the fact from memory.
7. Stop and escalate per Section 17 rather than guessing at any ambiguity.

---

## 16. Required Verification Evidence

Every included command and every major boundary maps to the locked Verification Checklist Version 1.1 or to a named accepted readiness disposition. No new verification standard is introduced here, and no live verification has occurred as of this brief.

| Scope Item | Required Evidence | Checklist or Report Reference | Pass Condition | Stop Condition |
|---|---|---|---|---|
| Repository sync, branch, and locked-source integrity | Fresh-sync branch; byte-identical locked documents | CHK-REPO-001–003, CHK-LOCK-001–005, CHK-FILES-001–002 | Every locked document byte-identical; changed-file list matches authorization exactly | Any locked document differs, or an unauthorized file changed |
| Build Now / exclusion boundary | Implemented scope is a strict subset of Build Now; no Build Later/Add-on/Reject item present | CHK-SCOPE-001–002 | No excluded capability (Section 4, Section 14) present anywhere in the diff | Any excluded capability found |
| Owner-only enforcement | Every command's auth check is exactly `businesses.owner_id = auth.uid()` | CHK-P1-001–005 | No permission flag, role, or substitute engine queried or simulated | Any Manager/Employee access path found |
| Exact 28-command surface, phase-scoped | Only the 19 named commands implemented for this phase; no alternate name or substitute RPC | CHK-BE-004–005 | Command names/signatures match Section 6 exactly | Any renamed, combined, split, or invented command |
| Three-layer identity model and privilege scoping | Role/grant inspection per EIS §7 | CHK-BE-001–003, CHK-BE-006 (full-package check deferred until every phase is authorized) | Each of the eight command-group owners holds only its own table privileges | Any role holds cross-group DML |
| Command-only writes | No direct client DML on any protected table | CHK-CMD-001–002 | Direct client `INSERT`/`UPDATE`/`DELETE` attempt fails | Any protected table grants client DML |
| Business isolation | RLS presence; cross-business idempotency-key probe | CHK-ISO-001–003 | Cross-business probe indistinguishable from nonexistent record | Any cross-business disclosure |
| Catalog/inventory separation | No catalog write path touches `inventory_items`/`inventory_movements`; stock status derived only from link presence | CHK-SEP-001–003 | No direct write found; no separate editable "type" field exists | Any violation found |
| Normalized uniqueness and archived-identity reservation | Schema inspection of the four `_normalized` columns and their composite constraints | CHK-UX-002; Section 8 of this brief | Archived rows continue to occupy their uniqueness slot; no partial active-row-only index exists | Any partial index or non-normalized constraint found |
| Price/tax/cost/D-047 integrity | Append-only event tables; D-047 tenure-bounded predicate | CHK-PTC-001–002, CHK-D047-001 | History immutable; tenure-bounded reading enforced exactly as locked | Any mutable history row or misapplied predicate |
| D-068 safeguard (assignment, replacement, AND removal) | Nine-step commit model; all four failure modes leave state unchanged; `remove_catalog_inventory_link` requires the same preceding preview and same-actor confirmation as `assign_or_replace_catalog_inventory_link` | CHK-D068-001–002, CHK-ACT-001 (extended to the preview-token flow) | Cancellation/incomplete confirmation/validation failure/save failure each leave product, link, unit, and price unchanged, for assignment, replacement, and removal alike; removal never commits without a valid, unexpired, same-actor preview token | Any partial-state leak on any failure path; any removal that commits without a valid preceding preview |
| Same-actor confirmation (extended to preview tokens) | Actor-mismatch rejection test | CHK-ACT-001 (extended per `report1.29.md`/`report1.30.md` Item 5) | Mismatched actor unconditionally rejected `ACTOR_MISMATCH` | Any delegated-confirmation path found |
| Idempotency, audit, stale-state, rejection durability | Direct-query verification after a rejected call | CHK-IDEM-001–002, CHK-AUD-001, CHK-STALE-001, CHK-REJ-001, CHK-UNK-001 | Two-terminal-state model; full provenance shape present; rejections durably persist | Any missing provenance field or lost rejection record |
| Token validity, retention, and minimization | Schema/behavior inspection against Section 12 | `communication/live/report1.31.md`, `report1.32.md` | 15-minute validity; 90-day/30-day retention; immediate consumption-time redaction; no automated purge claimed | Any deviation from the fixed parameters, or any claim of active automated purge |
| `system_errors` deferral | Absence of any catalog-specific error table; presence of idempotency-key-based observability only | `communication/live/report1.27.md` (Matter 1), `report1.28.md` | No `system_errors` table or substitute created | Any catalog-specific error table invented |
| Deterministic matching only | Absence of `pg_trgm`/GIN/similarity code paths | Section 11 of this brief; EIS §24 (open, non-blocking) | Only exact/normalized comparisons present | Any similarity, fuzzy, phonetic, or AI-normalization code path found |
| Multilingual preservation | Round-trip check of English/Malayalam/Manglish display values | CHK-UX-001–002 | Stored display wording unchanged by normalization | Any silent rename/translate/merge |
| Employee-restriction forward-compatibility | Read-path inspection for protected fields | CHK-EMP-001 | Reference cost/margin never exposed outside a permission-aware path | Any direct-table exposure of protected fields |
| Merchant-safe messaging | Rejection-message content review | CHK-MSG-001–002 | No raw error code, stack trace, or constraint name shown to the merchant | Any raw internal detail exposed |
| POS boundary | Diff inspection for POS code | CHK-POS-001 | No POS integration or custom POS modification present | Any POS-adjacent code found |
| Tests and quality gate | Automated coverage; Markdown Quality Gate | CHK-TEST-001–002 | Coverage matches EIS §21/Engineering Contract §26 scope; quality gate passes | Any missing coverage or failed gate |
| Supabase/migration/RLS hygiene | Migration naming; RLS-before-access; advisor scan | CHK-SUPA-001–003 | Clean migration apply; RLS enabled before any grant; no new critical advisory | Any RLS gap or unresolved critical finding |
| Production verification | Live check at `smartbusiness.teamlips.com` | CHK-PROD-001 | Authorized functionality live and correct | Any mismatch between reviewed and deployed implementation |

---

## 17. Stop Conditions and Escalation Rules

A future authorized implementation run must stop and escalate to Mission Control — never guess, improvise, or silently narrow/expand scope — if:

- a UI or workflow need cannot be satisfied by one of the 19 named commands;
- any locked source appears to conflict with another;
- the deployed environment's actual state contradicts a fact this brief assumes (e.g., a route, table, or dependency this brief describes as absent is found to already exist, or vice versa);
- completing a requirement would require inventing a command, table, index, or mechanism not already named in a locked source or this brief;
- a database-environment fact needed to proceed (for example, anything about the future scheduler's environment) is required but unavailable — this brief does not resolve any scheduler-environment fact, since the scheduler itself is out of scope;
- anything would require treating token-cleanup eligibility as if it were active automated purge;
- anything would require weakening Owner-only enforcement, command-only writes, business isolation, or the D-068 safeguard "just for this one case."

---

## 18. Authority Status

```text
FOUNDER LOVABLE BRIEF STATUS:
DRAFT — MISSION CONTROL REVIEW REQUIRED

PASTE-INTO-LOVABLE AUTHORITY:
NONE

LOVABLE PLAN MODE AUTHORITY:
NONE

LOVABLE BUILD MODE AUTHORITY:
NONE

IMPLEMENTATION AUTHORITY:
NONE

PUBLISHING OR DEPLOYMENT AUTHORITY:
NONE
```

This brief does not authorize pasting itself or the Lovable Build Prompt into Lovable, Lovable Plan Mode, Lovable Build Mode, implementation of any kind, publishing, or deployment. It is a preparation draft awaiting Founder review and a separate, explicit Mission Control implementation authorization.
