Document: Lovable Build Prompt

Version: 1.1

Status: DRAFT — MISSION CONTROL REVIEW REQUIRED

Created By: Claude Code

Reviewed By: Mission Control (Version 1.0 review recorded findings MC-LBP-001 through MC-LBP-004; re-review of Version 1.1 pending)

Approval Date: Pending

Mission: SB-P-1.11

# SB-P-1.11 — Product Catalog & Pricing — Lovable Build Prompt

```text
STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED
APPROVAL: NOT GRANTED
LOCK: NOT AUTHORIZED
PASTE-INTO-LOVABLE AUTHORITY: NONE
IMPLEMENTATION AUTHORITY: NONE
```

**Do not paste this document into Lovable.** This is a draft. It is not approved, not locked, and carries no implementation authority. It may be pasted into Lovable only after it has been separately reviewed, accepted, and locked by Mission Control, and only after a separately authorized Founder Lovable Brief and a separate, explicit Mission Control implementation authorization exist for the specific phase being built. Preparing this document does not authorize application code, SQL, migrations, RLS policies, RPC implementations, Edge Functions, scheduler workers, tests, Lovable project changes, infrastructure, deployment, or production activity of any kind.

---

## 1. Mission Identity and Document Status

| Field | Value |
|---|---|
| Mission ID | SB-P-1.11 |
| Mission Name | Product Catalog & Pricing |
| Stage | 12B — Lovable Build Prompt Preparation and Refinement |
| Package Position | Second document of the Stage 12 Initial Implementation Package (`engineering-contract.md` LOCKED, `lovable-build-prompt.md` this document, `verification-checklist.md` not yet authorized) |
| Prior Reviews | Version 1.0 prepared under `communication/live/instruction1.21.md` (`report1.21.md`) → Mission Control review recorded findings MC-LBP-001 through MC-LBP-004, requiring narrow refinement |
| This Revision | Narrow refinement authorized by `communication/live/instruction1.22.md`, correcting only MC-LBP-001 through MC-LBP-004; no previously accepted content reopened |
| Authorizing Instruction | `communication/live/instruction1.22.md` |
| Contract Owner | Claude Code, under Mission Control governance |
| Document Type | Builder-facing prompt, intended for future direct use inside Lovable's AI builder |

This prompt exists to give Lovable one controlled, precise, phased instruction set once authorized — not to describe governance history. Where this document repeats content already stated in the locked Engineering Contract, it does so because Lovable will read this document directly and will not separately read Mission Control communications.

---

## 2. Locked Authority Hierarchy

This prompt is subordinate to, and must never contradict, expand, weaken, or reinterpret, the following, in order of precedence:

1. Lighthouse Constitution.
2. Source 01 — Smart Business Master System Manifesto and Source 11 — Smart Business Product Truth Map.
3. Source 18 — SB-P Mission Lifecycle and Delivery Framework.
4. **SB-P-1.11 Product Blueprint** (`docs/phase-1-mission-blueprint/active/SB-P-1.11.md`), Sections 1–21, LOCKED — Product Truth, merchant behaviour, scope, exclusions, approved sequencing.
5. **SB-P-1.11 Founder Decisions D-001 through D-068** (`docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`).
6. **SB-P-1.11 Engineering Implementation Specification, Version 2.2, LOCKED** (`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`) — architecture, technical contracts, data integrity, permissions, security, scheduler design, interfaces, testing obligations.
7. **SB-P-1.11 Engineering Contract, Version 1.1, LOCKED — MISSION CONTROL ACCEPTED** (`docs/implementation/SB-P-1.11/engineering-contract.md`) — binding builder obligations, phase boundaries, dependencies, prohibitions, acceptance conditions.
8. This Lovable Build Prompt.

If anything below appears to conflict with any of the six locked sources above it, the locked source governs and this prompt is in error. Stop and report the conflict (Section 25) rather than resolving it by guessing.

---

## 3. Exact Authorized Build Now Scope

Build only what the locked Blueprint (§7 "Core Deliverables", §8 "Detailed Functional Scope") and the locked EIS (§4–§23) define, as consolidated by the locked Engineering Contract §4:

- Business-owned catalog products: one required business-unique human-readable name; optional description, category, SKU, barcode, image, inventory link, selling price, reference cost; subject to sale-readiness rules (Blueprint §8 "Catalog Product"; EIS §5.1–5.2).
- Stock-tracked / non-stock status derived only from the inventory link — never an independently editable field (Blueprint §8 "Stock-Tracked and Non-Stock Products"; D-050).
- Optional, business-scoped, one-to-one product–inventory link, lockable after sale or linked stock-event history under the D-047 tenure-bounded predicate (Section 15 below; Blueprint §8 "Product–Inventory Link"; D-001–D-005, D-047; EIS §9).
- One selling unit per product — inherited from the linked inventory item's immutable base unit for stock-tracked products; independently settable before sales history for non-stock products (Blueprint §8 "Selling Unit"; D-005, D-051, D-052).
- Optional flat, business-owned, business-unique categories; archival never archives products (Blueprint §8 "Categories"; D-006–D-008, D-045, D-046).
- One current selling price and at most one pending scheduled selling price, with permanent change history (Blueprint §8 "Selling Price", "Selling-Price History", "Scheduled Selling Price"; D-009–D-013, D-039, D-042–D-044; EIS §5.3, §12).
- Optional, non-negative, protected reference cost with change history, never presented as margin or accounting truth (Blueprint §8 "Reference Cost Price"; D-014–D-016, D-040, D-062, D-063).
- Merchant-controlled tax treatment (inherit business default, product-specific rate, or explicit non-taxable) and one business-wide tax-inclusive/exclusive pricing mode (Blueprint §8 "Tax Treatment", "Tax-Inclusive or Tax-Exclusive Pricing", "Tax History"; D-017–D-019, D-036–D-038, D-059–D-061).
- Identifiers: required unique name, optional unique SKU, optional unique barcode, optional image — under approved whitespace/Latin-case normalization and multilingual preservation (Blueprint §8 "Product Name and Description", "SKU", "Barcode", "Product Image"; D-020–D-028; Rule 8, Rule 9, Rule 27).
- Product lifecycle (Active/Archived), conditional permanent deletion, sale readiness (Blueprint §8 "Product Lifecycle", "Conditional Permanent Deletion", "Sale Readiness"; D-029–D-032, D-065).
- Owner-controlled, action-specific permissions and sale-authorized-employee restricted access (Blueprint §8 "Permissions"; D-033–D-035, D-048, D-049) — subject to the Phase 1 Owner-only boundary in Section 8.
- Complete audit history for every meaningful field change (Blueprint §8 "Audit History"; D-064).
- Multilingual (English/Malayalam/Manglish) search, filtering, and dashboard experience (Blueprint §8 "Search and Filtering", "Dashboard Experience"; §9 "Multilingual Catalog Experience").
- Dashboard-based guided creation and confirmation for permitted catalog actions (buildable now; the WhatsApp/voice/photo channel itself is gated — Section 9).
- Safeguarded CSV/Excel bulk import with a correction queue (Blueprint §8 "CSV and Excel Bulk Import"; D-055–D-058) — Phase 2b, not cross-mission-blocked.
- Business ownership and isolation across every catalog, category, event, identifier, image, import, and correction record (Blueprint §8 "Business Ownership and Isolation"; Rule 1, Rule 4).

Nothing beyond this list, and beyond what Sections 7–20 of this prompt further specify, may be built under this prompt.

---

## 4. Build Later, Add-on, Separate Product, and Reject Boundaries

Do not build any of the following. Do not propose, scaffold, stub, or partially implement them "for later convenience" (Blueprint §11 "Out of Scope"; Engineering Contract §5):

- **Build Later (deferred, not this mission):** alternate selling units, pack sizes, unit conversions and rounding; parent/variant hierarchy; multiple or alternate barcodes; barcode scanning, label generation, scanner hardware; nested categories and universal taxonomy; price levels, wholesale tiers, customer-specific pricing, promotions, discounts; scheduled tax and reference-cost changes; multi-currency and exchange rates; calculated margin/profit intelligence; richer bulk editing, export, automated external-catalog synchronization; recipes, bills of materials, bundles, composite products, shared-stock selling forms.
- **Add-on or Approved Extension Layer (separately governed, not this mission):** standard POS bridges and POS operational alerts (Section 20); advanced commerce or channel-specific catalog publication; assisted large-scale catalog onboarding beyond the core self-service importer.
- **Separate Product or Governed Mission (do not build any part of):** Purchase Workflow and supplier cost truth; Sales Workflow, discounts, returns, sale-time price overrides; POS Integration Foundation; Financial Reports and accounting truth; Ask CFO and financial advisory intelligence; public storefront, marketplace, online ordering, customer commerce; any conversation-workspace or AI foundation beyond the guided flows this mission defines.
- **Reject — permanently prohibited, never build under any future authorization of this mission:** any second stock ledger, cached quantity presented as independent truth, or direct catalog write to current stock; automatic legal tax classification, filing, return preparation, or compliance guarantee; rewriting completed-sale price or tax evidence after catalog changes; negative selling price or negative reference cost; global cross-business product/name/SKU/barcode/category uniqueness; uncontrolled employee access to cost, margin, histories, or management actions; automatic archive propagation between product and inventory; automatic import overwrite or creation of invalid live products; custom POS modification inside the Smart Business core platform; AI saving uncertain or consequential catalog changes without explicit human confirmation.

---

## 5. Repository-First Discovery Requirements

Before writing or proposing any code, inspect the current repository state and confirm the following facts still hold. If any of them has changed, **stop and report the discrepancy (Section 25)** rather than building against a stale assumption:

- No `products` or `catalog` route exists yet under `src/routes/_authenticated/`. Confirmed present today: `dashboard.tsx`, `inventory.tsx`, `inventory.index.tsx`, `inventory.$itemId.tsx`, `transactions.tsx`, `route.tsx`.
- `src/components/authed-header.tsx` is the single centralized navigation component for authenticated routes; no parallel navigation mechanism exists.
- No CSV/XLSX parsing dependency exists in `package.json` yet. Adding one is Phase 2b scope only, not Phase 1.
- No WhatsApp webhook, voice, or AI-conversation code exists in `src/`; the dashboard shows only a disabled "Coming soon" WhatsApp assistant card. This is expected and must remain true until Phase 3 is separately authorized (Section 9).
- No `employees`, `business_members`, or role/permission-flag table exists anywhere in the current migrations; `businesses.owner_id` is the only implemented authority column. This is the exact condition Section 8's Owner-only boundary assumes — confirm it still holds before building any permission check.
- Supabase migrations follow the existing `supabase/migrations/<UTC-timestamp>_<uuid>.sql` naming convention (Lovable/Supabase generates this automatically on migration creation — do not hand-invent a different naming scheme).
- The accepted SB-P-1.10 Inventory Foundation (`inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`, and RPCs `create_inventory_movement`, `preview_inventory_movement`, `inventory_current_stock_batch`, `inventory_movement_remaining_compensable`) is implemented and must not be modified by this mission. Read-only reference to it is permitted; no write path to it may be created outside its own existing RPCs.

If discovery reveals any of these facts has changed since this prompt was written, treat it as a stop condition, not as license to improvise a workaround.

---

## 6. Existing-Component and Accepted-Pattern Reuse Requirements

Reuse the following patterns exactly; do not invent parallel or competing mechanisms (EIS §4; Blueprint §20 "Reuse and Duplication Controls"):

- **Business isolation:** the existing `business_id uuid references public.businesses(id)` column plus RLS policy subquery `business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid())`, applied identically to every new catalog, category, and history table. Add the same composite `UNIQUE (id, business_id)` pattern already used elsewhere (e.g. `inventory_items_id_business_uniq`) wherever cross-table FK consistency is needed.
- **Append-only ledger shape:** the `UPDATE`/`DELETE`-rejecting trigger pattern already implemented on `inventory_movements` is the template for every catalog event table (`catalog_selling_price_events`, `catalog_price_schedule_events`, `catalog_tax_events`, `catalog_reference_cost_events`, `catalog_product_link_events`, `catalog_audit_events`).
- **Idempotency:** the `inventory_movement_idempotency_keys` pattern is the template for `catalog_write_idempotency_keys` (EIS §5.8, §11) — two terminal states only, `completed` and `rejected`, no durable `in_progress`/`pending` state.
- **Navigation:** add a Products/Catalog entry point by extending `src/components/authed-header.tsx`, following its existing pattern — do not build a second navigation surface.
- **Routing:** TanStack Router file-based routing under `src/routes/_authenticated/`, guarded by the existing `beforeLoad` session-check pattern already used by `inventory.tsx`. When Phase 1 is separately authorized, follow the same three-file shape already established for inventory (`inventory.tsx` layout / `inventory.index.tsx` list / `inventory.$itemId.tsx` detail) for an equivalent products area — confirm exact naming against the repository's current conventions at build time rather than assuming these names are locked by this prompt; this prompt recommends the precedent, it does not mandate a specific file name the locked EIS itself does not specify.
- **Permission-aware reads:** protected-column reads (reference cost, margin-adjacent data) go through a `SECURITY DEFINER` RPC or view that omits protected columns for unauthorized callers, mirroring `inventory_current_stock_batch` — never a direct table `SELECT` from the client.
- **Observability:** reuse `system_errors` (Source 02 §3.13) for failure logging rather than inventing a catalog-specific error log.

---

## 7. Phased Implementation Sequence

Build only in the order below, and only the phase or phases a separate, explicit Mission Control instruction has authorized (Engineering Contract §24; Blueprint §20 "Build Sequencing"). This prompt does not itself authorize any phase — see Section 26.

| Phase | Scope | Cross-mission dependency |
|---|---|---|
| **Phase 1** | Core catalog and category data model; Owner-scoped dashboard CRUD and RLS; selling-unit inheritance and the D-068 single-RPC atomic safeguard; price/tax/cost value-history tables; multilingual exact-match normalization; scheduled-price activation via the Pattern A external-worker scheduler (environment-gated separately from the rest of Phase 1 — Section 11, Section 18) | None — buildable as soon as separately authorized |
| **Phase 2a** | Manager and sale-authorized-Employee catalog permission enforcement (Blueprint §8 "Permissions"; D-016, D-033–D-035, D-048) | **[SHARED-SYSTEM DEPENDENCY]** — requires the shared permission engine, not yet built for any mission |
| **Phase 2b** | CSV/Excel bulk import and correction queue, extending the `file_import_jobs` conceptual pattern | None — may run parallel to Phase 1 if separately resourced and authorized |
| **Phase 3** | Guided WhatsApp/voice/photo catalog intent handling (Blueprint §8; D-053, D-054) | **[SHARED-SYSTEM DEPENDENCY]** — requires the shared conversational engine, not yet built for any mission |

Do not begin Phase 2a or Phase 3 work under any circumstance until their named shared-system dependency is separately authorized, implemented, verified, and available, and a specific Mission Control instruction authorizes that phase.

---

## 8. Phase 1 Owner-Only Runtime Boundary

**[MANDATORY]** For Phase 1 (Engineering Contract §16 "Phase 1"; corrected per MC-LBP-001):

```text
During Phase 1, every command independently verifies authenticated
ownership using the existing businesses.owner_id boundary.

Command signatures, authorization interfaces, data structures, and UI
gating remain compatible with the future shared permission engine.

Do not query, require, simulate, hard-code, or locally recreate the
future action-specific permission flags during Phase 1.

The eight action-specific permission flags and inventory_view dependency
are activated only in Phase 2a after the shared permission engine is
separately authorized, implemented, verified, available, and the phase
is explicitly authorized by Mission Control.
```

- Runtime access remains Owner-only. Every catalog command's authenticated-ownership check is `businesses.owner_id = auth.uid()`, exactly the pattern already used by SB-P-1.10 — a check against actual business ownership, never against a permission-flag value, since no permission-flag table or value exists during Phase 1.
- Design command signatures, authorization interfaces, data structures, and UI gating so they are *compatible* with the eight future EIS §8 permission flags (`catalog_view`, `catalog_product_manage`, `catalog_lifecycle_manage`, `catalog_price_manage`, `catalog_tax_manage`, `catalog_cost_manage`, `catalog_inventory_link_manage`, `sale_use`) and the `inventory_view` dependency for linking — so that Phase 2a activation requires no later signature change — **without** querying, requiring, simulating, hard-coding, or locally recreating any of them during Phase 1. Compatibility means the shape is ready to receive a real check later, not that a placeholder check exists now.
- **Do not invent a temporary, local, duplicated, or mission-specific substitute permission engine.** Do not build a bespoke roles table, a hard-coded Manager flag, or any stand-in authorization mechanism for SB-P-1.11. Where Manager or Employee access would otherwise be needed, the correct Phase 1 behaviour is: it is not available yet.
- Do not activate any UI path, route guard, or backend check that grants Manager or Employee catalog access. This is not optional or a nice-to-have "early support" — it is a governance boundary.
- The eight permission flags and the `inventory_view` dependency activate only in Phase 2a, and only after the shared permission engine is separately authorized, implemented, verified, and available, and Phase 2a itself is explicitly authorized by Mission Control (Section 9).

---

## 9. Shared Permission-Engine and Conversational-Engine Dependency Gates

**[SHARED-SYSTEM DEPENDENCY]**

- **Permission engine (gates Phase 2a):** do not build Manager or Employee catalog permission enforcement, a Manager/Employee catalog UI, or any code path that assumes their existence, until Mission Control confirms the shared permission engine is separately authorized, implemented, verified, and available (Engineering Contract §16 "Phase 2a"; §24).
- **Conversational engine (gates Phase 3):** do not build a WhatsApp webhook handler, voice/photo intent pipeline, or any catalog-specific conversational intent handler until Mission Control confirms the shared conversational engine (Source 04/05 pipeline: webhook → identity router → multi-modal processing → intent classification → action execution → role-based response) is separately authorized, implemented, verified, and available (Engineering Contract §20; §24).
- **Not gated:** the dashboard-based guided creation and confirmation experience (structured preview, explicit confirmation before saving) does not depend on either gap and is Phase 1 scope.
- Neither gate weakens the Phase 1 Owner-only posture or the employee financial-intelligence restrictions in Section 19 — both remain in force regardless of when either shared system arrives.

---

## 10. Lovable/Frontend Responsibilities

**[MANDATORY]** Build the frontend to (Engineering Contract §22; Blueprint §9 "UI / UX Expectations"):

- Render only actions the requesting user can execute — never show a disabled or greyed-out action as a way of implying it might work; hide it or clearly disable it without leaking why in a way that discloses other-business data.
- Consume exactly the result categories the backend returns: `completed` / `rejected` (with a stable category) from every command, plus the client-inferred `PRE_COMMAND_PROCESSING_FAILED`, `UNKNOWN_OUTCOME`, and `CONFIRMED_SUCCESS` states for channel flows (Section 22). Every rejection category must render as a distinct, stable, merchant-understandable message — never a generic "Something went wrong."
- Distinguish current and pending price visually; show scheduled activation in the business timezone; preserve two-decimal price precision; state clearly whether the business uses tax-inclusive or tax-exclusive pricing.
- Implement the D-068 preview UI exactly as Section 15 specifies — this is the single highest-risk UI surface in this mission.
- Build the import and correction-queue UI (Phase 2b) to distinguish valid, quarantined, and conflicting rows, and to report errors understandably through the dashboard.
- Preserve mobile, conversational-adjacent, desktop, and accessibility parity — labels, validation, focus, contrast, status, and confirmations must remain perceivable without relying on color alone.
- Never let a sensitive value (reference cost, margin-adjacent data, another business's data) leak through list totals, search results, import errors, messages, or audit views, including in error text.
- Do not invent new merchant-facing copy that implies a capability this prompt does not authorize (e.g., do not imply automatic tax compliance, guaranteed legal classification, or margin calculation — Section 4 "Reject").

---

## 11. Supabase/Backend Responsibilities Lovable Must Not Invent or Bypass

**[MANDATORY]** The following architecture is fully specified by the locked EIS and Engineering Contract. Implement it exactly; do not redesign, simplify, "improve," or bypass any part of it (Engineering Contract §7, §15, §23):

- **Three-layer execution identity model** (EIS §7): Layer 1 genuinely `LOGIN`-capable connection identities (`authenticated`; `catalog_channel_service`; `catalog_scheduler_service`) hold `EXECUTE` only, never table DML. Layer 2 `NOLOGIN` `SECURITY DEFINER` function-owner roles (`catalog_identity_executor`, `catalog_lifecycle_executor`, `catalog_pricing_executor`, `catalog_tax_executor`, `catalog_cost_executor`, `catalog_link_executor`, `catalog_import_executor`, `catalog_read_executor`, `catalog_channel_executor`, `catalog_scheduler_executor`) own the actual table privilege, per the exact grant table in EIS §7 "Least-Privilege Command Authority" — do not grant any of these roles a privilege outside its own table. Layer 3 is the `GRANT EXECUTE` invocation boundary itself — no `SET ROLE` step.
- **Command-only writes:** every protected catalog table's RLS policy grants **None** for `INSERT`/`UPDATE`/`DELETE` to `authenticated`. All writes occur exclusively through the named `SECURITY DEFINER` command functions.
- **Exact command surface** (EIS §16) — do not invent alternate names, signatures, or additional commands. The locked surface is fixed at twenty-eight names. Grouped below by the phase or gate in which each may be implemented (corrected per MC-LBP-002); the complete surface remains authoritative regardless of phase — only *execution* is phase-scoped:

  - **Phase 1 — Owner-only catalog and category operations, product identity and lifecycle, price/tax/cost operations, inventory-link preview/assignment/removal, protected reads, and command-outcome reconciliation:** `create_catalog_product`, `update_catalog_product_identity`, `update_catalog_product_unit`, `create_catalog_category`, `archive_catalog_category`, `archive_catalog_product`, `reactivate_catalog_product`, `delete_catalog_product`, `record_catalog_selling_price_change`, `schedule_catalog_selling_price`, `cancel_scheduled_catalog_selling_price`, `record_catalog_tax_change`, `update_business_tax_settings`, `record_catalog_reference_cost_change`, `preview_catalog_inventory_link_change`, `assign_or_replace_catalog_inventory_link`, `remove_catalog_inventory_link`, `get_catalog_command_outcome`, `catalog_products_search`, `catalog_product_read`, `catalog_products_list_batch`.
  - **Phase 2a — permission activation, not new commands:** no new catalog command name is introduced in Phase 2a. This phase activates shared-permission-engine enforcement on the applicable Phase 1 commands above, and only after the permission-engine dependency (Section 9) and Phase 2a itself are separately authorized.
  - **Phase 2b — import commands:** `create_catalog_import_job`, `stage_catalog_import_rows`, `apply_catalog_import_valid_rows`, plus only the locked import-related reads or supporting boundaries the EIS already defines.
  - **Phase 3 — channel commands:** `create_catalog_pending_action`, `confirm_catalog_pending_action`, plus only the locked channel execution and outcome-reconciliation boundary the EIS already defines.
  - **Environment-gated scheduler commands:** `list_due_catalog_price_schedule_candidates`, `activate_catalog_price_schedule` — buildable only when the Section 18 environment-verification gate is satisfied *and* scheduler scope is explicitly included in the specific implementation authorization, independent of which other Phase 1 commands are already authorized.

  A command outside the currently authorized phase or gate must not be implemented, scaffolded, exposed, granted, deployed, or partially activated. Locked command names and signatures must never be changed. Do not invent an additional command, an alternate command name, a substitute RPC, or a direct table write path as a way to reach functionality outside the authorized phase.
- **Standardized provenance** on every dedicated event table (EIS §5.0): `authorized_by_user_id`, `executed_by_actor_type`, `system_run_id`, `channel`, `request_id`, `authority_basis`, `recorded_at`. Do not omit any field or invent an alternate shape.
- **Function-level requirements** (EIS §7): `REVOKE EXECUTE ... FROM PUBLIC` on every function; explicit minimal `GRANT EXECUTE` only to the authorized Layer 1 identity; fixed `SET search_path = public`; fully schema-qualified references; every function independently re-derives caller identity and re-checks permission — never a cached or caller-supplied claim.
- Do not build a frontend code path that writes directly to a protected catalog table via the Supabase client. Every mutation goes through the named RPCs above.
- Do not build a second, simplified, or "MVP" version of any command's logic in application code as a shortcut around the RPC contract.

---

## 12. Command-Only Write Boundaries

**[MANDATORY]** Restated for emphasis, since this is the mission's single most load-bearing invariant (Engineering Contract §13):

- No protected catalog table (product, category, price/tax/cost event, schedule, import, correction, audit, idempotency, file reference, channel pending action/receipt) ever grants direct `INSERT`/`UPDATE`/`DELETE` to any client-reachable role.
- No feature, table, or code path outside the twenty-eight named commands in Section 11 writes to a protected catalog table.
- If a UI need cannot be satisfied by an existing named command, that is a stop condition (Section 25) — it is not license to add a new direct write path.

---

## 13. Business Isolation and Server-Derived Scope

**[MANDATORY]** (Engineering Contract §14; Blueprint §8 "Business Ownership and Isolation"; Rule 1, Rule 4)

- Every product, category, price/tax/cost event, identifier, image reference, import record, correction item, inventory link, and audit event belongs to exactly one business.
- No search, validation, duplicate check, import, or error message may disclose another business's records.
- `get_catalog_command_outcome` and every other read derive `business_id` server-side from verified identity — never accept a caller-supplied business identifier. Cross-business guessing must return the same result as a genuinely nonexistent key.
- Apply the existing `business_id`-plus-`owner_id`-subquery RLS pattern and composite `UNIQUE (id, business_id)` FK-integrity pattern to every new table (Section 6).

---

## 14. Catalog and Inventory Separation

**[MANDATORY]** (Engineering Contract §9; Blueprint §2 "Inventory Domain")

- A product and an inventory item are separate business records joined only by the explicit governed link. Do not write to `inventory_items` or `inventory_movements` from any catalog code path, and do not treat a catalog-stored value as stock quantity.
- Stock status (`Stock tracked` / `Non-stock`) is derived only from the presence of the inventory link — never build a separate editable "type" field.
- A non-stock product never originates a stock movement. A stock-tracked product never itself alters quantity — quantity changes only through SB-P-1.10's existing `create_inventory_movement` path, and only from a future authorized workflow, not from this mission.
- Ledger-derived current stock is displayed only to a user holding `inventory_view` permission, read through a permission-aware read path (Section 6), never a raw table `SELECT`.
- Archiving a product never silently archives its linked inventory item, and vice versa. An active product linked to archived inventory must be blocked from new sale use and show a clear resolution warning.

---

## 15. Price, Tax, Cost, D-047, and D-068 Integrity Requirements

**[MANDATORY]**

### Price, Tax, and Cost (Engineering Contract §10; EIS §11)

- Single write path per value type; database-level immutability of posted history rows (the `UPDATE`/`DELETE`-rejecting trigger pattern, Section 6).
- Selling price optional during setup, required greater-than-zero for sale eligibility; two-decimal precision, no hidden rounding.
- At most one current and one pending scheduled selling price per product, with full change history.
- Reference cost optional, non-negative, protected — never purchase truth, valuation, COGS, margin, or accounting truth.
- Tax treatment merchant-controlled; incomplete inheritance blocks sale readiness; business-wide tax-inclusive/exclusive mode locks after the first completed sale.
- Completed sales retain transaction-time price and tax evidence, never recalculated from a later catalog state.
- Command sequencing on every write: resolve actor/business → permission check → idempotency resolution before mutable-state checks → precondition checks → writes → finalize idempotency row and commit.

### D-047 — Tenure-Bounded Inventory-History Enforcement (Engineering Contract §11; EIS §9)

Enforce this predicate exactly as locked, without reinterpretation:

```text
Any authoritative inventory movement recorded during the current
product–inventory link tenure counts as linked stock-event history.

Inventory movements recorded before the current link tenure do not count.
```

Link, unlink, or replacement is permitted only before the product has sales or linked stock-event history under this tenure-bounded reading. After such history exists, the relationship is locked and a new product is required for a different inventory identity.

### D-068 — Preview, Confirmation, and Atomic Commit Safeguard (Engineering Contract §12; EIS §10)

Implement as a single atomic, transactional RPC — never a client-orchestrated multi-step sequence:

- When first-time inventory-link assignment or permitted replacement would change the selling unit, the existing numeric price must not be silently reinterpreted under the new unit.
- The merchant must explicitly confirm the price for the new unit, or enter a replacement price, before saving.
- Preview content — first-time assignment: current unit and price, proposed inventory link and new unit, and the price requiring confirmation. Replacement: current inventory link, current unit and price, proposed replacement link and new unit, and the price requiring confirmation.
- Cancellation, incomplete confirmation, validation failure, or save failure must each leave the existing product, current link state, unit, and price completely unchanged.
- The nine-step commit model: (1) auth/permission check — failure is a committed `rejected`/`PERMISSION_DENIED`; (2) idempotency-first resolution; (3) token resolution — invalid token → `rejected`/`STALE_STATE`; (4) row locks in deterministic order; (5) recompute-and-compare — mismatch → `rejected`/`STALE_STATE`; (6) confirmation completeness — missing price → `rejected`/`PRICE_CONFIRMATION_REQUIRED`; (7) if every check passes, perform the atomic business writes; (8) finalize bookkeeping and `RETURN` on every branch, committing normally; (9) only a genuinely unexpected error raises an exception and rolls back the whole attempt, becoming `UNKNOWN_OUTCOME`.

---

## 16. Same-Actor Confirmation and AI Assistant, Not AI Judge Boundaries

**[MANDATORY]**

### Same-Actor Confirmation (Engineering Contract §20; EIS §15)

- A pending action created for one verified actor may be confirmed only by that same actor. `confirm_catalog_pending_action` requires `p_confirming_actor_user_id = catalog_channel_pending_actions.actor_user_id` exactly; any mismatch is an unconditional `rejected`/`ACTOR_MISMATCH`. There is no delegated or alternate-confirmer path — do not build one, even as a convenience feature for "the owner confirming on behalf of a manager."

### AI Assistant, Not AI Judge (Engineering Contract §21; Blueprint §5)

- AI may extract candidate fields from voice, text, photos, or import files, identify ambiguity, and prepare a preview. It must never invent a missing price, decide legal tax treatment, infer a sensitive permission, or save an uncertain consequential change without explicit human confirmation.
- Multilingual search suggestions across English, Malayalam, and Manglish must disclose uncertainty and must never silently rename, translate, merge, or overwrite merchant catalog wording (Section 21).
- Exact normalization (whitespace, Latin-letter case) is a database-level constraint. Uncertain-match suggestion is a bounded, best-effort heuristic only — never presented as authoritative, never auto-applied.
- Every operation requiring merchant confirmation of consequential state is preceded by a non-mutating, server-authoritative preview producing a single-use token.

---

## 17. Mandatory Clean-File Scanning and Import Safeguards

**[MANDATORY]** (Engineering Contract §19; EIS §14)

- `product_image` and `import_source` each require `safety_scan_status = 'clean'` — `not_required` is never a valid state for either purpose, checked server-side at every point of use, not only at upload.
- Re-check at: `create_catalog_product`/`update_catalog_product_identity` when accepting an `image_ref`; `create_catalog_import_job` when accepting a `file_ref`; `stage_catalog_import_rows` immediately before parsing.
- Client-supplied purpose or scan status is never authoritative — always read `catalog_file_references`'s own server-recorded columns.
- Import (Phase 2b): valid rows saved; invalid rows quarantined without creating live products; rows matching an existing business-unique name/SKU/barcode are never auto-overwritten and enter a correction queue for explicit owner/manager decision.
- One optional product image; a missing image never blocks creation or sale readiness.

---

## 18. Pattern A Scheduler Boundary and Environment-Verification Gate

**[MANDATORY]** / **[ENVIRONMENT VERIFICATION]** (Engineering Contract §18; EIS §12)

- The scheduler is **not** a PL/pgSQL `PROCEDURE` and contains **no** in-database multi-commit transaction control. It is two ordinary `FUNCTION`s: `list_due_catalog_price_schedule_candidates(p_limit int) RETURNS SETOF uuid`, and `activate_catalog_price_schedule(p_schedule_id uuid) RETURNS catalog_scheduler_command_result`.
- The scheduler runtime is `catalog_scheduler_service` — a genuinely `LOGIN`-capable external worker (a Supabase Scheduled Edge Function, or a `pg_cron` job calling `net.http_post` against one), never an in-database job role.
- Run sequence: generate one `system_run_id`; call the candidate-list function exactly once per run (bounded, `effective_at ASC`, never re-queried mid-run); call the activation function exactly once per candidate regardless of any earlier candidate's outcome; record every result; end when the fixed list is exhausted.
- No durable scheduler-claim field exists anywhere in the data model — claiming is transaction-scoped only, via `FOR UPDATE SKIP LOCKED` inside `activate_catalog_price_schedule`'s own call.
- **Before relying on this design in any deployed environment, confirm Supabase Scheduled Edge Function (or `pg_cron` + `pg_net`) availability, and provision `catalog_scheduler_service` with a real, rotated connection credential.** If this cannot be confirmed, stop and report (Section 25) — do not substitute an unauthorized scheduling mechanism.

---

## 19. Employee Financial-Intelligence Restrictions

**[MANDATORY]** (Blueprint §8 "Permissions"; D-014, D-016, D-035)

- The owner can view and edit reference cost by default. A manager may do so only with explicit owner-granted cost-price permission, once Phase 2a is authorized. Ordinary employees are denied, permanently.
- Sale-authorized employees may view and select active, sale-ready products and see selling price and tax information needed for a sale. They must never see reference cost, margin-adjacent data, protected histories, or management controls.
- This restriction is independent of the Phase 1/Phase 2a permission-engine sequencing (Section 8, Section 9) — it is not weakened by the fact that only the Owner can act in Phase 1; it constrains what the eventual Manager/Employee model must enforce once built.

---

## 20. Standard POS Bridge Boundary

**[OUT OF SCOPE]** (Blueprint §2 "Integration Domain"; §11 "Reject")

- Standard POS bridges may be added only through the separately governed POS Integration Foundation mission (SB-P-1.16). Do not build any POS integration, synchronization, or bridge code under this mission.
- Custom POS modifications inside the Smart Business core platform are permanently rejected — do not build a bespoke POS accommodation of any kind, even a small one, inside catalog code.

---

## 21. UX Requirements for English, Malayalam, and Manglish Use

**[MANDATORY]** (Blueprint §5 "Respect Existing Merchant Workflows"; §8 "Product Name and Description", "Categories", "Search and Filtering"; §9 "Multilingual Catalog Experience"; EIS §13)

- Product names, descriptions, and category names must accept and display exactly the wording the merchant enters — English, Malayalam, Manglish, or ordinary mixed-language usage — with no forced translation.
- Business-scoped uniqueness for name/SKU/barcode/category ignores leading/trailing whitespace, normalizes repeated internal whitespace, and treats Latin-letter case differences as equivalent — this is exact-match normalization, enforced at the database layer, and must never alter the stored display wording.
- Different Malayalam spellings, Manglish transliterations, or translated names/categories are never automatically treated as the same record. When a possible relationship is detected, surface it as a suggestion for merchant review — never silently merge, rename, translate, or overwrite.
- Search must support reliable mixed-language matching while clearly distinguishing exact normalized matches from uncertain interpreted suggestions.

---

## 22. Error, Rejection, Stale-State, Unknown-Outcome, and Merchant-Safe Messaging Behaviour

**[MANDATORY]** (Engineering Contract §25; EIS §10, §11, §15)

- Expected rejections (validation, permission, stale state, conflict) are structured `rejected` results with a stable category, committed normally — never implemented as a thrown exception.
- Only genuinely unexpected errors (constraint violation, deadlock, connection failure) roll back the whole attempt and become client-visible `UNKNOWN_OUTCOME`.
- Four stable failure categories for channel-originated actions: `PRE_COMMAND_PROCESSING_FAILED` (nothing was submitted yet — safe to say "No catalog change was submitted" and simply retry), `COMMAND_REJECTED` (a known, confirmed non-commit outcome), `UNKNOWN_OUTCOME` (reconcile via same-key retry or `get_catalog_command_outcome` before reporting anything definitive), `CONFIRMED_SUCCESS`.
- **Never report `UNKNOWN_OUTCOME` as "nothing changed."** Reconciliation must complete first.
- A rejected D-068 token can never be reused — after any rejection other than `UNKNOWN_OUTCOME`, the merchant must obtain a fresh preview.
- Map every named rejection category to a specific, plain-language, merchant-safe message. Never surface a raw error code, stack trace, or database constraint name to a merchant.

---

## 23. Explicit No-Go List

Do not do any of the following, at any point, even after a phase is separately authorized:

- Modify the locked Product Blueprint, Founder Product Decision Record, EIS, or Engineering Contract.
- Create a new Founder decision or reinterpret an existing one.
- Introduce a write path to a protected catalog table outside the named command functions (Section 11).
- Build a temporary, local, duplicated, or mission-specific substitute permission engine (Section 8).
- Activate Manager/Employee enforcement or any WhatsApp/voice/photo intent handler before its shared-system dependency is separately confirmed and authorized (Section 9).
- Let AI, WhatsApp interpretation, or automation save an uncertain or consequential catalog change without explicit human confirmation.
- Introduce a second stock truth, or any capability listed in Section 4 as Reject.
- Build any custom POS modification inside the Smart Business core platform (Section 20).
- Create `verification-checklist.md` or a Founder Lovable Brief under this mission.
- Generate application code, SQL, migrations, schemas, RLS policies, RPC implementations, Edge Functions, or scheduler workers under this mission — this prompt is documentation only until separately authorized.
- Write prompts for live AI or WhatsApp runtime systems.
- Make any Lovable project change, write a test or test fixture, or touch infrastructure, deployment configuration, or production data under this mission.
- Begin implementation of any kind before a separate, explicit Mission Control authorization names the specific phase.

---

## 24. Required Implementation Evidence and Builder Completion Report Expectations

**[MANDATORY]** Evidence is phase-scoped, not blanket (corrected per MC-LBP-003):

```text
Evidence must be complete for the phase actually authorized and built.

Evidence for a later phase, shared-system dependency, service identity,
executor role, command, or environment-gated component is not required
until that phase or component is separately authorized.

Every deferred obligation must be listed in the Builder Completion Report
as:

NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED
```

For example: a Phase 1-only build does not need to provision or verify Phase 3 channel infrastructure, and does not need to provision `catalog_channel_service` unless a separately authorized component genuinely requires it; a build whose specific authorization excludes the environment-gated scheduler commands (Section 11) does not need scheduler-runtime evidence; a Phase 2b-only build does not need evidence for unrelated channel commands or services. Full-package verification — the complete execution-identity and command surface — may be required only once all applicable phases are separately authorized and completed.

Once a phase is separately authorized and built, the implementing mission must produce, at minimum, evidence covering every component **actually included in that authorization** (Engineering Contract §26, §27; mirroring the evidence structure already established at `docs/implementation/SB-P-1.10/completion-report.md`). The existing evidence quality standard below is preserved unchanged for every component that is actually in the authorized phase:

- **Privilege-verification evidence**, scoped to what the authorized phase actually uses: exact privilege inspection — not role-existence checks — for each command-group owner role the phase's authorized commands are owned by (Section 11); for `catalog_channel_service` or `catalog_scheduler_service`, only if that phase's authorization actually includes the component that identity serves; confirmation of every `EXECUTE` grant against its authorized Layer 1 identity, and every table-level privilege against the EIS §7 grant table, for the tables the authorized phase actually touches; confirmation of `PUBLIC` execute revocation on every command function the phase implements.
- **Scheduler evidence** — required only when the environment-gated scheduler commands (Section 11) are included in the specific authorization: confirmation that the Pattern A worker is available and correctly credentialed, and that `activate_catalog_price_schedule` requires no internal transaction-control statement. Otherwise: `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED`.
- **Rejection-durability evidence:** every named rejection category the authorized phase's commands can return, confirmed to durably persist its idempotency-key and token-consumption bookkeeping under injected-fault testing.
- **Outcome-scope evidence:** `get_catalog_command_outcome` confirmed to accept no caller-supplied business parameter in its deployed signature, when that command is part of the authorized phase.
- **RLS and business-isolation evidence:** confirmed for every new catalog, category, and history table the authorized phase actually creates.
- **Test results:** covering every EIS §21 / Engineering Contract §26 item applicable to the authorized phase's own commands and tables — not the full matrix when only a subset of phases is authorized.
- A **Builder Completion Report** documenting: implementation objective and phase(s) actually executed; files and components created or modified; Lovable implementation and publish status; Supabase migration status; Supabase RLS verification result; runtime verification result; production-domain verification at `smartbusiness.teamlips.com`; GitHub commit SHA and push status; confirmation that the locked Blueprint, Founder Decision Record, EIS, and Engineering Contract remain unmodified; every deferred obligation outside the authorized phase, explicitly listed as `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED`; deviations and their resolution; unresolved defects, if any; final status; recommended next action.

---

## 25. Stop Conditions Requiring Mission Control Clarification

Stop and report to Mission Control — do not guess, improvise, or proceed on an optimistic assumption — whenever any of the following occurs:

- Any apparent conflict between this prompt and the locked Blueprint, Founder Decision Record, EIS, or Engineering Contract.
- Any repository-discovery fact in Section 5 no longer holds (e.g., a `products`/`catalog` route already exists, a permission-flag table has appeared, a CSV/XLSX dependency has been added by another change).
- Any `[ENVIRONMENT VERIFICATION]` fact cannot be confirmed (e.g., Supabase Scheduled Edge Functions or `pg_cron` + `pg_net` are unavailable in the deployed environment — Section 18).
- Any `[SHARED-SYSTEM DEPENDENCY]` (permission engine, conversational engine) appears to exist, partially exist, or be ambiguous in its availability.
- It is unclear which phase (Section 7) is currently authorized for building.
- A genuine product or UX need cannot be satisfied by any command in Section 11's exact list, and would require a new write path.
- Any instruction elsewhere would require modifying a locked document (Blueprint, Founder Decision Record, EIS, or Engineering Contract).
- Any of the open dispositions preserved in Engineering Contract §29.1 (`pg_trgm` threshold, CSV/Excel limits, final index set, scheduler run interval/lag budget, permission/conversational-engine sequencing ownership, Edge Function/`pg_net` availability) must be resolved to proceed and has not yet been resolved. This is distinct from the separately resolved and preserved disposition in §29.2 (selling-unit/price treatment upon inventory-link removal), which is closed, accepted as written, and must never be treated as an open stop condition or reopened (MC-LBP-004).

---

## 26. This Prompt Does Not Authorize Implementation

```text
LOVABLE BUILD PROMPT STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED
APPROVED: NO
LOCKED: NO
PASTE-INTO-LOVABLE AUTHORITY: NONE
IMPLEMENTATION AUTHORITY: NONE
```

Preparing this document does not authorize pasting it into Lovable and does not authorize implementation. Before any phase in Section 7 may be built:

1. Mission Control must review and accept this Lovable Build Prompt.
2. Mission Control must lock this Lovable Build Prompt.
3. A separately authorized Founder Lovable Brief must exist.
4. A separate, explicit Mission Control instruction must authorize implementation of a specific named phase.

The Verification Checklist remains unauthorized until this prompt is accepted and locked. The Stage 12 Initial Implementation Package remains incomplete until all three documents exist and are locked.

---

## 27. Traceability to the Locked Blueprint, EIS, and Engineering Contract

| Prompt Section | Blueprint Reference | EIS Reference | Engineering Contract Reference |
|---|---|---|---|
| 3. Authorized Build Now Scope | §7, §8 | §4–§23 | §4 |
| 4. Build Later/Add-on/Separate/Reject | §11 | — | §5 |
| 6. Reuse Requirements | §20 | §4 | §7 |
| 7. Phased Sequence | §20 "Build Sequencing" | — | §24 |
| 8. Phase 1 Owner-Only Boundary | §8 "Permissions", §20 | §8 | §16 (Phase 1) |
| 9. Shared-System Dependency Gates | §20, §21 | §8, §15 | §16 (Phase 2a), §20 |
| 10. Frontend Responsibilities | §9 | §10, §15, §17 | §22 |
| 11. Backend Responsibilities | §20 | §5, §7, §16 | §7, §13, §15 |
| 12. Command-Only Write Boundaries | §8 (Business Rules) | §3, §6, §7 | §13 |
| 13. Business Isolation | §8 "Business Ownership and Isolation" | §6, §11 | §14 |
| 14. Catalog/Inventory Separation | §2, §8 | §3, §9 | §9 |
| 15. Price/Tax/Cost/D-047/D-068 | §8, §9 | §9, §10, §11 | §10, §11, §12 |
| 16. Same-Actor/AI Boundaries | §5, §8 | §3, §15 | §20, §21 |
| 17. File Scanning/Import | §8 | §14 | §19 |
| 18. Pattern A Scheduler | §8 "Scheduled Selling Price" | §12 | §18 |
| 19. Employee Restrictions | §8 "Permissions" | §8 | §16, §19 |
| 20. POS Boundary | §2, §11 | — | §5 |
| 21. Multilingual UX | §5, §8, §9 | §13 | §21 |
| 22. Merchant-Safe Messaging | §5 | §10, §11, §15 | §25 |
| 24. Evidence and Completion Report | §20 "Verification Expectations" | §21 | §26, §27 |
| 25. Stop Conditions | §21 "Blocking Issues" | §24, §25 | §29 |

Founder Decisions D-001 through D-068 are cited inline throughout Sections 3–21 above rather than repeated in this table; every citation traces to the same decision numbers the Engineering Contract's own traceability table (§28) already maps to its sections.

---

## 28. Document Change Log

| Version | Description |
|---|---|
| 1.0 | Initial draft Lovable Build Prompt, translating the locked SB-P-1.11 Product Blueprint (Sections 1–21), locked EIS (Version 2.2), and locked Engineering Contract (Version 1.1) into a phased, repository-first, implementation-ready builder instruction, per `instruction1.21.md`. Covers all 27 mandatory content areas. No new Product Truth, Founder decision, scope, or engineering behaviour introduced. Not approved, not locked, no paste-into-Lovable or implementation authority. |
| 1.1 | Narrow refinement authorized by `instruction1.22.md`, correcting Mission Control findings MC-LBP-001 through MC-LBP-004 identified in review of Version 1.0. Corrected Section 8's Phase 1 permission behaviour so every command verifies authenticated ownership via `businesses.owner_id` only, without querying, requiring, simulating, hard-coding, or locally recreating the future permission flags during Phase 1 (MC-LBP-001). Restructured Section 11's command surface into explicit phase-scoped groups — Phase 1, Phase 2a (permission activation, no new commands), Phase 2b (import), Phase 3 (channel), and environment-gated scheduler commands — stating that a command outside its authorized phase must not be implemented, scaffolded, exposed, granted, deployed, or partially activated, with all locked names and signatures preserved (MC-LBP-002; consistency edit to Section 7's Phase 1 row). Made Section 24's implementation-evidence requirements phase-scoped, requiring only evidence for the phase actually authorized and built and requiring every deferred obligation to be recorded as `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED` (MC-LBP-003). Corrected Section 25's stop-condition wording, which had inaccurately described all seven original EIS disposition entries as open inside Engineering Contract §29.1, to distinguish the genuinely open §29.1 dispositions from the separately resolved and preserved §29.2 disposition (selling-unit/price treatment upon inventory-link removal), which remains closed and is not reopened (MC-LBP-004). No previously accepted content was reopened; no new Product Truth, Founder decision, scope, or engineering behaviour was introduced. Status remains DRAFT — MISSION CONTROL REVIEW REQUIRED; not approved, not locked, no paste-into-Lovable or implementation authority. |
