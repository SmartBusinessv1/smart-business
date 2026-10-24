# SB-P-1.17 — Engineering Implementation Specification

STATUS: DRAFT — STAGE 10 MISSION CONTROL REVIEW REQUIRED

**IMPLEMENTATION NOT AUTHORIZED.** This EIS specifies how the locked SB-P-1.17 Blueprint is to be built. It authorizes no code, SQL, migration, provider or POS activation, test execution, deployment or production change. It is not locked.

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.17 — Manager Operations |
| Document | Engineering Implementation Specification (EIS) |
| Lifecycle stage | Source 18 v1.2 Stage 9 — EIS Creation |
| Status | `DRAFT — STAGE 10 MISSION CONTROL REVIEW REQUIRED` |
| Author | Claude Code (Stage 9 EIS actor; also author of Stages 2–7 and the Stage 8 package; not independent review) |
| Authorization | MC-429 (`communication/missions/SB-P-1.17/mission-control/13-stage9-eis-creation-authorization.md`), effective at PR #1018; MC-430 execution instruction (conversation-source) |
| Related Product Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.17.md`, blob `bc4615f84959a79e6b242f622aae928901fbe959` (`APPROVED — LOCKED`, Stage 8, MC-426) |
| Stage 8 record | `communication/missions/SB-P-1.17/mission-control/12-stage8-founder-approval-and-blueprint-lock-record.md` |
| Canonical FCTM | `communication/missions/SB-P-1.17/claude-code/01-stage2-populated-fctm.md`, blob `cb79088d3fa59f8b3226fd9d11ff9c9573666670`: 630 rows, 404 `IN SCOPE` |
| Founder decisions | `17:FPDR-1` to `-6` (`claude-code/10-…`, blob `90b7ca1d`); `17:FPDR-7` (`claude-code/15-…`, blob `e9f2cacb`); Stage 8 approval (MC-426) |
| Requirements | 157 (`EIS17-*`) |
| Baseline | `main@d3155ac99ade96d3d7fdd739eaa2a6003406961a` (PR #1018) |
| Next gate | Stage 10 — Mission Control EIS review; implementation remains NOT AUTHORIZED |

## 2. Purpose and Authority

This EIS turns the locked Blueprint Sections 1–21, including the Stage 7 refinements (§20.9) and the corrections of PRs #1011 to #1014, into testable engineering requirements. It changes no Product Truth, FCTM row, disposition, Founder decision or Blueprint text. Where the Blueprint and this EIS differ, the Blueprint prevails and the difference is a Stage 10 finding.

**Basis codes.** Every requirement states its basis, so that a proposal is never read as built or approved:

| Code | Meaning |
|---|---|
| PR | Approved product requirement (locked Blueprint, FCTM, Founder decision or Mission Control ruling) |
| AF | Existing architectural fact [R] or locked upstream specification [S]; specified, not built |
| TR | Proposed technical representation for Stage 10 review |
| UQ | Unresolved technical question or hold |
| PD | Provider- or source-dependent; waits for separate authorization |
| FC | Founder-controlled boundary |

**Specialist findings are proposals.** SA-01 to SA-05, MC-410A and MC-411B are integrated where cited, as proposals subject to Stage 10 review (MC-429). They are not approved controls (MC-410A: "Do not turn the five specialist reports' recommendations into automatically approved new EIS controls").

## 3. Canonical Inputs Read

- Source 18 v1.2 (blob `0945bda6`); AI Communication and Handover Protocol v1.1; `AGENTS.md`.
- Locked Blueprint (blob `bc4615f8`), Stage 8 record, FCTM (blob `cb79088d`), Mission Truth Pack (blob `8d541153`), Founder decision records, Stage 3 reconciliation, Stage 6 and Stage 7 records, mission README and logs.
- Locked upstream EIS: SB-P-1.12 (blob `c444f750`), SB-P-1.13 (`9a1e723d`), SB-P-1.14 (`899a0fe1`), SB-P-1.15 (`75dcf385`) and SB-P-1.16 (`46fffd7b`).
- Specialist evidence: `specialists/02-stage7-specialist-assurance-provenance-record.md` and the byte-identical originals in `specialists/stage7-assurance/` (SA-01 to SA-05, MC-410A, MC-411B).
- Repository code at the baseline: `supabase/migrations/` (24 files), `src/`, `tests/inventory/` (17 files).

## 4. Implementation Principles

- Consume the locked upstream foundations; build nothing parallel.
- One governed write path per domain; no client DML on protected objects.
- Stock moves only through `create_inventory_movement`; Ledger effects only through `create_transaction_governed`.
- Atomicity is proven, not assumed; where it cannot be shown, the path stops.
- Ambiguity, conflict and missing evidence fail narrowly and visibly; nothing is guessed.
- The Owner decides by default; Manager authority is explicit, scoped and revocable; capability 5 is never delegated.
- Signals are neutral review facts; AI assists and never decides or accuses.
- Nothing is claimed as built, run or verified without evidence.

## 5. Repository Baseline (at `main@d3155ac9`)

Application code, schema, tests and CI configuration are unchanged since the Truth Pack baseline `44895d2c`; every later change is documentation. Facts relied on [R]:

- `inventory_items`, `inventory_movements` and `create_inventory_movement(p_idempotency_key, p_operation, p_item_id, p_movement_type, p_direction, p_quantity, p_reason, p_occurred_at, p_correcting_of, p_allow_negative_stock, p_business_event_type, p_business_event_id)`, `SECURITY INVOKER`, Owner-only.
- `business_event_type` / `business_event_id` on movements are well-formed but not validated against the referenced domain (`tests/inventory/trusted-event-link.test.ts`).
- `inventory_movement_type` has no wastage, purchase-receipt or POS-sale value; no batch or expiry field (Δ-07).
- `transactions.transaction_type` is `sale`/`purchase` only; `transaction_date` is a DATE; supplier is free text; direct client insert exists (`src/integrations/supabase/transactions.ts`).
- `catalog_products.current_reference_cost` sits on the product row; cost and link audits carry `CHECK authority_basis = 'owner_via_businesses.owner_id'`.
- RLS is `owner_id`-scoped; there is no Manager role, supplier, threshold, reorder, rule, POS, counter or closing object, and no business timezone column.

## 6. Target Architecture, Interfaces and Trust Boundaries

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-ARC-01` | AF/PR | **Consume, never duplicate.** SB-P-1.17 consumes the locked upstream specifications: the SB-P-1.12 kernel, identity, confirmation and delegated-automation primitives; the SB-P-1.13 gateway, typed tools and language layer; the SB-P-1.14 Ledger, governed commands, UDI and storage; the SB-P-1.15 reminders, standing rules, scheduler, timezone, Ask CFO, Daily Intelligence and notification foundation; and the SB-P-1.16 balance contract. It builds no parallel permission, Ledger, inventory, import, AI, reminder or notification authority. None of these is implemented at the baseline. | B6-01, B6-17; SA03-FI-01 | 404 |
| `EIS17-ARC-02` | TR | **Component and module map.** Twelve components follow Blueprint §20.3: C-STK, C-SIG, C-SUP, C-RO, C-DOC, C-POS, C-CTR, C-CC, C-WS, C-AUTH, C-FDN, C-ACC. Server logic lives in TanStack Start server functions in feature modules (`src/features/stock`, `suppliers`, `reorder`, `pos-bridge`, `counter-review`, `closing-cash`, `manager-workspace`); domain writes are Postgres commands. Module names are proposals for Stage 10. | B6-18 | 36 |
| `EIS17-ARC-03` | AF/TR | **Trust zones and data flow.** Zones: (1) browser and native app, untrusted input; (2) server functions, which resolve the principal server-side (`EIS-KER-02`) and never accept actor, business, role or capability from a request body; (3) Postgres, holding RLS and governed commands, the authority for structured business truth (`BP-§6.3-1`); (4) external POS sources and files, untrusted input bound to a business only through `EIS17-POS-02`. Model output is untrusted data (`EIS13-CTX-01`). | SA-01-F02 | 7 |
| `EIS17-ARC-04` | PR | **One Business Command path.** Every consequential stock, supplier, reorder, POS, counter-context and closing write is a governed command that revalidates authority at commit (`EIS-CNF-02`, `EIS-KER-09`), takes an idempotency key (`EIS-CNF-04`) and writes audit in the same transaction. No client DML reaches a protected table (`EIS-ISO-02`). | B6-04 | 6 |
| `EIS17-ARC-05` | PR | **Specified versus built; delivery accounting.** Every interface consumed from SB-P-1.12 to SB-P-1.16 and every table in this EIS is marked specified, not built, until runtime evidence exists. A canonical merge is never proof that production holds the change; the five Build Plan §5.3 delivery stages each need separate authorization. A later mission may not claim earlier work as new (`BP-§11-7`). | B6-21 | 7 |
| `EIS17-ARC-06` | PR | **Native-first; thin channel adapters.** Manager Operations is fully usable natively without WhatsApp (`BP-§8-1`). POS sources and channels are thin adapters into the same services, never separate engines (`BP-§6.6-1`). The dashboard complements the Conversation Workspace (`17-§1-2`, `17-§3-2`). | — | 7 |

## 7. Stock Foundation Extension

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-STK-01` | AF/PR | **One stock foundation, extended additively.** The existing `inventory_items`, `inventory_movements` and `create_inventory_movement` [R] remain the single stock authority for Manager Stock Intelligence and the Smart Stock Assistant add-on path (`7-§9-*`). Extensions are additive; no second engine, ledger of stock or dashboard-only stock state. | B6-07, B6-08 | 28 |
| `EIS17-STK-02` | TR | **Movement-type widening.** Add movement types for wastage/spoilage, purchase receipt and POS sale (Truth Pack Δ-07), each with a fixed direction under the existing type-direction invariant. Existing types and historical rows are not reinterpreted. All 17 `tests/inventory` files are regression gates for any change (`EIS17-VER-12`). | B6-07 | 6 |
| `EIS17-STK-03` | TR | **Batch and expiry only where recorded.** A batch/expiry attribute is captured only when the merchant or a source document records it. No expiry is inferred. Batch granularity is EQ17-06. | B6-07 | 5 |
| `EIS17-STK-04` | TR/UQ | **Unit conversion.** A business-scoped conversion table relates supplier pack, stock base unit and selling unit per item, keyed `(business_id, item_id, from_unit, to_unit)`. Conversions are applied server-side; a missing or conflicting conversion is a unit-mismatch failure (`7-§13-4`), never a guess. Who may change conversions is EQ17-07. | B6-08 | 5 |
| `EIS17-STK-05` | AF/PR | **Append-only corrections.** Stock corrections are new linked movements through the existing correction link [R]; originals are never mutated. A stock correction never creates a financial transaction (`7-§8-4`). | B6-04 | 5 |
| `EIS17-STK-06` | AF/PR | **One product identity.** Stock, suppliers, reorder, POS mapping and purchase requests reference `catalog_products` (`EIS-ID-05`). Product and price management appears contextually where operational work needs it; no Catalog revival as a competing top-level product (`BP-§10.6-E3`). | — | 8 |
| `EIS17-STK-07` | PR/TR | **Governed stock readers.** Stock position, movement history, search and summaries come from batched, kernel-scoped read functions (precedent `inventory_current_stock_batch` [R]). Readers carry the source and freshness of every figure. | — | 7 |
| `EIS17-STK-08` | AF | **Opening stock consumed from SB-P-1.14.** Opening stock arrives through the SB-P-1.14 opening-stock UDI slice (`EIS14-ADP-02`, `EIS14-MIG-03`); SB-P-1.17 does not re-specify it. Bulk and other stock documents use `EIS17-DOC-01`. | — | 3 |
| `EIS17-STK-09` | AF/UQ | **Negative-stock policy.** Insufficient stock follows the approved policy exposed by `p_allow_negative_stock` [R]. Where policy blocks the movement, only that movement fails (`7-§13-13`); the reason is shown. The merchant-facing policy setting is not decided here. | — | 2 |

## 8. Stock Signals and Owner-Confirmed Thresholds

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-SIG-01` | PR | **Owner-confirmed thresholds (`17:FPDR-6`).** An item-level threshold record holds value, state (`suggested`, `confirmed`, `changed`), basis (data period and movements) and confirming actor. Only `confirmed` or `changed` thresholds drive alerts or reorder triggers. There is no universal numeric default; manual reorder is unaffected. | B6-09 | 6 |
| `EIS17-SIG-02` | UQ | **Evidence-sufficiency rule (T6 watch).** When a suggestion may appear is an EIS decision (EQ17-08). Candidate safeguards (minimum observed period and movement count, recency, exclusion of unusual periods) are proposals for Stage 10. If the rule materially changes when suggestions are available, it goes to Mission Control screening and Founder confirmation first (T6). | B6-09 | 3 |
| `EIS17-SIG-03` | PR | **Low, slow and dead-capital signals.** Signals are computed by governed readers from recorded movements and confirmed thresholds. They state their basis and period; insufficient data shows as insufficient, never as a fabricated metric (`17-§6-8`). | — | 12 |
| `EIS17-SIG-04` | PR | **Expiry and wastage from recorded facts.** Expiry and freshness signals read only recorded batch/expiry facts; wastage and spoilage are recorded movements (`EIS17-STK-02`). Nothing is inferred (DC-07). | B6-07 | 6 |

## 9. Supplier Identity, Memory and Protected Prices

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-SUP-01` | AF/PR | **Supplier as SB-P-1.12 participant.** A supplier is a business-scoped participant identity (`EIS-ID-03`) reused across purchasing, reorder and history, retrievable by structured directory-indexed search. Contact identity follows the C22 §33 personal-identity lifecycle (Δ-04). | B6-03 | 18 |
| `EIS17-SUP-02` | TR | **Supplier–product relation.** A supplier–product relation keyed to `catalog_products` records supplied items and preferred or alternate status. It is merchant data, never a supplier network (`BP-§15-8` stays unresolved). | B6-03 | 4 |
| `EIS17-SUP-03` | PR/TR | **Purchase-price history as cost information (`17:FPDR-4`).** A supplier purchase-price history records price, unit, date and source. Prices are Reference Cost information and are released only through `EIS17-AUTH-03`. | B6-02 | 2 |
| `EIS17-SUP-04` | PR | **Owner-confirmed historical attribution (`17:FPDR-5`).** Historical purchases (free-text supplier name, Δ-13) link to a supplier only by explicit, audited Owner confirmation through a confirmation binding over the exact transaction and supplier. Possible matches show as unconfirmed; the original transaction is never edited; no duplicate purchase is created; unlinked rows stay visibly unlinked. Where the link lives is EQ17-03. | B6-03; SA-01 §9 | 2 |
| `EIS17-SUP-05` | PR | **Request and communication history.** Order and communication history is the record of merchant-prepared purchase requests and merchant-recorded outcomes (`EIS17-RO-04`). | B6-13 | 3 |
| `EIS17-SUP-06` | AF/PR | **Supplier payment and credit only where authorized.** Supplier-side `owed_by_business` credit and payment state use the SB-P-1.14 direction model (`EIS14-LDG-02`). Supplier-payable balance and settlement/correction rules belong to SB-P-1.17 and remain FIN-01 PROVISIONAL pending supplier-specific contract validation; the SB-P-1.16 `EIS16-BAL-01` customer-balance contract does not define supplier payable. Goods receipt never records payment (`7-§8-5`). | B6-20; W-1 | 2 |
| `EIS17-SUP-07` | AF/PR | **Supplier isolation.** Suppliers reach only the content of requests addressed to them (`EIS-EXT-02`, `EIS-ISO-07`): no dashboard, no other supplier, no merchant stock, cost, counter or closing data. | SA-01 §7 | 3 |

## 10. Reorder Intelligence, Confirmation, Standing Rules and Purchase Requests

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-RO-01` | PR/TR | **Reorder suggestion record.** A suggestion records item, suggested quantity or range, supplier context, evidence (current stock, observed movement, confirmed threshold, recent purchase, expiry or overstock risk) and state (`open`, `confirmed`, `modified`, `rejected`, `expired`). The explanation names its evidence; a Manager without Reference Cost sees quantities and dates only. | B6-12 | 34 |
| `EIS17-RO-02` | PR | **No fabricated demand or availability.** Suggestions use authorized recorded data only; no demand forecast, supplier availability or stock quantity is invented. | — | 3 |
| `EIS17-RO-03` | PR/AF | **Confirmation-gated reorder.** Confirm, modify or reject goes through an SB-P-1.12 `confirmation_bindings` entry (`EIS-CNF-01`) binding actor, business, item, supplier, quantity, value and suggestion version; commit revalidates under `EIS-CNF-02`. The actor is the Owner or a Manager holding capability 2 within scope and any Owner-set value ceiling (`17:FPDR-1`). | B6-01, B6-12; SA-01 §9 | 7 |
| `EIS17-RO-04` | PR | **Merchant-controlled purchase request (`17:FPDR-3`).** A confirmed reorder creates a purchase-request record linked to the same item and supplier. Smart Business prepares the factual content for the merchant to copy, share or print. `sent`, `accepted` and supplier replies exist only when the merchant records them. No system dispatch before SB-P-1.20 (`DNTF`). | B6-13 | 5 |
| `EIS17-RO-05` | PR/AF | **Owner-created bounded standing rules.** A standing rule is an Owner-only stored delegation (`EIS-AUT-01`; `EIS15-RUL-01` to `-06`) bounded by item, supplier, quantity or value ceiling, frequency and validity. Each run derives its principal from the rule, re-authorizes at execution (`EIS15-RUL-02`), effects only through governed commands, and fails closed to a suggestion when expired, revoked or out of bounds. A trigger is never permission. | B6-12 | 6 |
| `EIS17-RO-06` | AF | **Follow-up through the Reminder Engine.** Supplier and reorder follow-ups are reminder sources on the shared Reminder Engine (`EIS15-REM-07`) and scheduler (`EIS15-SCH-*`); no separate reminder path. | B6-12 | 5 |
| `EIS17-RO-07` | PR | **AI assistance for stock and reorder.** Typed read and draft tools may summarize stock, identify low, slow or expiry-risk items, suggest quantities and supplier candidates from merchant history, explain anomalies neutrally, prepare drafts and ask clarification (`EIS13-LANG-03`). Every write remains a confirmation-gated command. | — | 7 |
| `EIS17-RO-08` | PR | **Downstream interface for orders.** Stock and supplier readers expose availability for SB-P-1.18 order availability and substitution as an interface only; no order behaviour is built here. | — | 1 |

## 11. Stock Documents Through UDI

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-DOC-01` | AF/TR | **SB-P-1.14 UDI adapters for stock documents.** Stock lists, other stock documents and the inventory side of supplier invoices use SB-P-1.17 destination adapters on the single UDI pipeline (`EIS14-UDI-01` to `-09`), modelled on `EIS14-ADP-02`: row-by-row commits, per-row fingerprints, writes only through `create_inventory_movement`. No third import stack. | B6-06 | 9 |
| `EIS17-DOC-02` | AF | **Preview, confirmation and idempotent import.** Imports preview server-side (`EIS14-CNF-01`, `-02`), bind the confirmed material fingerprint (`EIS14-CNF-03`), revalidate at execution (`EIS14-CNF-04`) and commit per row or bounded chunk under revocation (`EIS-CNF-05`). A re-import of the same rows creates no duplicate movement. | B6-06 | 5 |
| `EIS17-DOC-03` | PR | **Prior Lovable opening-stock code is evidence only.** Existing Lovable opening-stock code may inform design but is not promoted directly (`GPCV-§11-2`). | — | 1 |
| `EIS17-DOC-04` | TR/UQ | **Supplier invoice split.** The Ledger purchase side of a supplier invoice belongs to SB-P-1.14 (`EIS14-ADP-01`); the inventory side belongs here. Where one confirmation produces both, `EIS17-TXN-03` governs; until EQ17-13 is resolved, the two sides are not presented as one atomic action. | MC410-R05 | 1 |

## 12. Standard POS Bridge

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-POS-01` | PR | **Vendor-neutral bridge, two interface classes (`17:FPDR-2`).** One bridge contract fed by (i) an authenticated API or webhook adapter where a POS offers one, or (ii) a structured export file through UDI. Both normalize to one event model with stable source identity and dedupe. No vendor is named or assumed. | B6-05 | 41 |
| `EIS17-POS-02` | UQ/TR | **POS intake authority (Founder MC-507R A1; MC410-R01 route documentarily specified, HOLD-15 retained).** Authenticated unattended API/webhook intake uses an Owner-authorized, enabled, source-scoped `EIS-AUT-01` delegation tied to the current grantor membership, exactly one business, registered POS source, permitted action/target and limits. The server authenticates provider provenance and uniquely resolves the enabled `pos_source_id` and current server-registered business binding from verified provider context and trusted `EIS-ID-05` source registration; payload-supplied business, source, principal, role or actor identifiers never select or override authority. Missing or ambiguous provider-account mapping, invalid/expired/rotated/revoked credentials, disabled or unregistered source, wrong-business source or uncertain source state fail closed, including queued uncommitted events (`EIS17-POS-03`). Provider authentication is not merchant authorization. The server derives the existing automation-run principal from the stored delegation and grantor's current authority (`EIS-KER-02`, `EIS-AUT-01`) and calls the single kernel for exact business, source, action/object and scope with `channel = integration` (`EIS-KER-06`); neither source identity, provider credential nor `service_role` creates merchant authority or a fifth principal. Protected execution follows `EIS-ISO-04`. At consequential commit, current credentials, source enabled/business binding, delegation, grantor authority, action/scope/limits and epochs are revalidated under `EIS-KER-09`/`EIS-CNF-02`; revocation fails closed. Stable authenticated source/event identity, replay-safe outcomes and conflicting-payload rejection use `EIS-CNF-04`, `EIS17-TXN-01/02`; source, grantor, delegation and authorization provenance are audited (`EIS-AUD-01/02/03`). Sources without sufficiently stable event identities cannot enter trusted automatic posting. The separately approved structured UDI authorized-upload route remains distinct; this does not turn all merchant imports into unattended automation. **HOLD-15 remains open for targeted verification; DPOS/real-provider and qualified assurance remain separate. No provider activation, RLS privilege or implementation authorization.** | SA-01-F02; MC410-R01 | 6 |
| `EIS17-POS-03` | PD | **Credentials in the approved secret home.** POS credentials live only in an approved server-side secret home (`DSEC`), are never logged or returned to clients, and support rotation and revocation. Stale credentials stop intake for that source only. | B6-05 | 2 |
| `EIS17-POS-04` | PR | **Per-source capability declaration.** Each source declares which fields it supplies: minimum fields (external transaction ID, time, item reference, quantity, price, payment method) and optional fields (discount, void, operator). A signal the source cannot supply is shown as unavailable from this POS. A source unable to meet the bridge safely is classified as an integration limitation (`13-§5-6`). | B6-05; ENG17-03 | 5 |
| `EIS17-POS-05` | TR | **Raw and normalized event records.** A raw event (source, external event ID, payload digest, ingestion time and source) and a normalized sale record (lines, quantities, prices, payment method, occurrence time as supplied) are stored separately; raw is immutable. | ENG17-01 | 7 |
| `EIS17-POS-06` | PR/TR | **Item mapping and conflict queue.** POS item references map to `catalog_products` through a business-scoped mapping table. Unknown, ambiguous, unit- or price-incompatible events go to a review queue with the reason; nothing is guessed. | — | 8 |
| `EIS17-POS-07` | PR | **Stock eligibility.** A POS event moves stock only when mapping exists, units and quantities are reliable, the event is trusted and the stock path is configured; the movement goes through `create_inventory_movement`. | — | 7 |
| `EIS17-POS-08` | PR | **Export-file class and manual fallback.** Structured export files ingest through UDI (`EIS17-DOC-01`) under the same event model. A manual CSV import may coexist as a fallback but never silently replaces or downgrades the committed bridge (`13-§20-7`). | B6-06 | 2 |
| `EIS17-POS-09` | PR | **Works without POS; outage-safe.** Inventory and manual operations work with no POS and during outage or partial sync; intake failure affects only that source. | — | 5 |
| `EIS17-POS-10` | PR | **Extension edge only.** No client-specific POS modification in Smart Business core; adaptation happens at the integration edge; the POS is not replaced. | — | 10 |
| `EIS17-POS-11` | PR/PD | **Source eligibility dossier (SA-04 / ENG17-03).** A source is eligible for activation only after the eleven-item dossier of Blueprint §20.9.3 is evidenced from real authorized samples and approved. Synthetic fixtures may test the bridge at T1/T2 but never establish source feasibility or FRV-B. | SA-04; ENG17-03 | 101 |
| `EIS17-POS-12` | PR | **POS data for intelligence and closing.** Mapped, trusted events feed sales and stock intelligence, counter review and closing inputs through governed readers; the existing POS is enriched, not judged. | — | 7 |

## 13. Transaction Identity, Atomicity, Idempotency and Concurrency

These requirements realize the Blueprint §20.9.1 identity table and invariants INV-A1 to INV-A9 (ENG17-01) as amended by PRs #1013 and #1014.

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-TXN-01` | TR | **Identities.** Five identities stay distinct (Blueprint §20.9.1): source event ID `(business_id, pos_source_id, external_event_id)` or, for export rows, the source row ID (content fingerprint is evidence only, `EIS14-IDM-02`); business-command request key (`EIS-CNF-04`); Ledger event ID from `create_transaction_governed`; inventory movement ID; and the domain-validated event link. | ENG17-01 | 7 |
| `EIS17-TXN-02` | AF/PR | **INV-A1 — one outcome per source event.** A source event yields at most one committed command outcome. Replay returns that outcome; same key with a different payload fingerprint is rejected. Concurrent deliveries are serialized on the source-event key. | ENG17-01; SA03-FI-01 | 21 |
| `EIS17-TXN-03` | UQ | **INV-A2 — atomic composition (EQ17-13 hard hold).** Where one authorized command legitimately requires a Ledger effect and stock effects, the governed Ledger effect (SB-P-1.14), the movements, the source-event state and the event link commit in one database transaction or none. Sequential independent calls, compensating cleanup or eventual reconciliation are not atomic. The composition mechanism is to be defined with SB-P-1.14 without a second Ledger writer; if it cannot be expressed under the locked interfaces, this path stops and returns to Mission Control. | ENG17-01; SA03-FI-02; SA04-F01; MC410-R05 | 13 |
| `EIS17-TXN-04` | TR | **INV-A3 — commit-time event-link validation.** Before a movement carrying `business_event_type`/`business_event_id` is written, the owning domain checks, inside the same transaction and serialization, that the event exists, belongs to the same business, has the declared type and is not reversed. The movement layer does not do this by design [R]. | ENG17-01; SA03-FI-03; SA04-F02 | 3 |
| `EIS17-TXN-05` | AF | **INV-A4 — unknown outcome.** An unknown outcome is resolved by lookup on the request key before any retry (`EIS14-IDM-03`); the merchant never sees a guessed success. | ENG17-01 | 2 |
| `EIS17-TXN-06` | PR/UQ | **INV-A5 — append-only corrections and dual-domain reversal.** Corrections, reversals and voids are new linked events; originals are never mutated. A reversal of an event that wrote both domains needs governed compensating effects in both, atomically (MC410-R04A, EIS hold). If SB-P-1.14 has no governed representation for a required reversal, that is returned to its owner, not improvised. | ENG17-01; SA03-FI-04; MC410-R04A | 5 |
| `EIS17-TXN-07` | TR | **INV-A6 — out-of-order events held.** An event whose target is missing (for example a reversal before its original) is held pending review and correlated exactly once when the target arrives. | ENG17-01 | 1 |
| `EIS17-TXN-08` | PR/TR | **INV-A7 — overlap review, never auto-merge.** A manual record and a POS event that may be the same sale become a review candidate (window and fields: EQ17-14). Neither is suppressed, merged or deleted; resolution is an authorized human decision recorded as a governed correction. Unresolved overlap is shown separately and never presented as verified truth. | ENG17-01; SA03-FI-05; SA04-F03; DC-12 | 7 |
| `EIS17-TXN-09` | PR/UQ | **INV-A8 — financial trust and inventory eligibility (GA-03 Option A, Founder-decided).** POS revenue reaches the Ledger only through the SB-P-1.14 governed create command (`create_transaction_governed`, `EIS14-CMD-01`), once per source event; there is no shadow revenue total and no second Ledger writer. Financial trust is established independently of inventory mapping: the source is authenticated and bound to the business under current merchant authority (`EIS17-POS-02`), the event is deduplicated on its source-event identity and request key (`EIS17-TXN-01`, `EIS17-TXN-02`), and its financial facts are unambiguous, unreversed and not in unresolved conflict. Untrusted, spoofed, ambiguous, conflicting, reversed or unauthorized events create no authoritative Ledger or inventory effect. Under Founder GA-03 Option A (MC-499), a financially trusted sale whose product mapping is unresolved posts once to the Ledger, while any movement that depends on the unresolved mapping is held in an explicit stock-exception state correlated to the source event and the Ledger event; no quantity, SKU or movement is fabricated. A later, separately authorized stock application uses that correlation and never repeats the Ledger sale. Where both effects are eligible at the same governed commit, `EIS17-TXN-03` applies: one database transaction or none; Option A creates no authority to split an already eligible dual-domain commit. Unknown outcomes resolve by lookup (`EIS17-TXN-05`), and pending stock mapping is visible to authorized users. Negative tests cover replay, source conflict, authority revocation and mapping races. The governed-command state machine, eligibility predicate and exception semantics remain open technical work (`EIS17-HOLD-16`). | SA03-FI-06; MC410-R02; MC-411B; GA-03; MC-499 | 7 |
| `EIS17-TXN-10` | PR/AF | **INV-A9 — purchase receipt classification.** Where a confirmed event requires a stock receipt and a Ledger financial event, both commit atomically through their governed commands; SB-P-1.14 determines the Ledger classification. Goods receipt never establishes supplier payment; no duplicate purchase, expense or settlement fact. | SA03-FI-07; MC410-R03 | 3 |
| `EIS17-TXN-11` | AF | **Concurrency and authority serialization.** Commits serialize on the affected object and on authority epochs (`EIS-KER-09`, `EIS-CNF-02`), so a concurrent revocation, threshold change or reversal invalidates a stale preparation. | SA03-FI-03 | 3 |
| `EIS17-TXN-12` | AF | **Narrow failure.** An ambiguity or failure blocks only the uncertain update, never unrelated operations (`EIS-CNF-06`, `7-§13-13`). | — | 3 |

## 14. Neutral Counter Review

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-CTR-01` | PR | **Signals from declared fields only.** Counter signals (voids, high discounts, repeated reversals, price overrides, unusual timing or frequency, closing variance, other evidence-backed patterns) are derived only from fields the source declares (`EIS17-POS-04`), with a stated comparison basis. No fixed universal threshold such as 15%. | B6-14 | 45 |
| `EIS17-CTR-02` | PR | **Neutral review language.** Signals are review items worded as in `13-§8-9`, never accusations (`13-§8-10`). Language is fixed in reviewed templates; model-generated wording passes the same check. | B6-14; SA04 §7.3 | 23 |
| `EIS17-CTR-03` | PR | **Authorized human context.** Authorized users attach context (for example an Owner-approved festival discount or damaged-product adjustment) as a separate record; the original event and signal are never altered. | — | 9 |
| `EIS17-CTR-04` | PR | **No autonomous action.** No signal locks a register, suspends an employee, reverses a transaction, changes prices, blocks checkout, deducts wages or accuses a person. Any consequential correction follows its own human-confirmed workflow. | — | 11 |
| `EIS17-CTR-05` | PR | **No historical mechanisms as Product Truth.** Printer-spool interception and fixed historical triggers are not mandated; comparison baselines are evidence-based and stated. | — | 4 |
| `EIS17-CTR-06` | PR/UQ | **Operator data separated and held (U-11).** Operator identifiers, if a source supplies them, are stored apart from signals and readable only by the Owner (capability 5, non-delegable). Identifiable operator processing is **held** until the U-11 qualified legal and privacy determination; Scenario B works without operator identity. | B6-14; SA-02 | 5 |
| `EIS17-CTR-07` | PR | **Explanation and provenance.** Each signal stores its explanation, evidence references and source provenance. | — | 2 |

## 15. Closing Cash

These requirements realize the Blueprint §20.9.2 decision table (ENG17-02). The period model stays open under U-03.

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-CC-01` | TR | **Closing session record.** A closing session stores period, timezone version (`EIS15-TZ-01`), the inputs present by source, cash count (actor, time), expected cash, variance and state. Results are versioned; corrections link, never overwrite. | B6-10 | 19 |
| `EIS17-CC-02` | PR | **Completeness decision table.** The ten-row decision table of Blueprint §20.9.2 is binding: precedence UNKNOWN > REVIEW-REQUIRED > PARTIAL > COMPLETE; no zero-fill, invented timestamp, silent cadence choice, fabricated operator attribution or double-counted cash. | ENG17-02 | 11 |
| `EIS17-CC-03` | UQ | **Affirmative completeness evidence (MC410-R04B).** COMPLETE requires affirmative, period-bound evidence for every configured required source: validated sync cursor/watermark or equivalent coverage through cutoff; declared structured-export interval covering the exact period; or authorized Owner attestation identifying the manual source and period. Evidence binds business, source identity/category, period start/end, versioned business timezone, occurrence-time/offset semantics, proof type and covered sequence/pages/interval as applicable, evidence time/version, provenance and supersession/staleness. Generic sync success, file presence or absence of a detected gap is not completeness. Missing, stale or unverifiable required-source evidence prevents COMPLETE. Preserve UNKNOWN > REVIEW-REQUIRED > PARTIAL > COMPLETE precedence; PARTIAL uses only known inputs and never claims a final variance. | SA03-FI-08; MC410-R04B | 5 |
| `EIS17-CC-04` | UQ/AF | **Period model (U-03).** Day versus shift and opening-float capture remain U-03. Periods resolve in the versioned business timezone (`EIS15-TZ-*`, `DSCH`); `created_at` is never occurrence time; date-only manual records are excluded from shift periods and named (EQ17-15). | B6-10 | 14 |
| `EIS17-CC-05` | PR | **Cash count and variance authority.** Cash count entry is capability 6 and variance view is capability 7 (`17:FPDR-1`); closing-cash policy is Owner-only. A variance is a neutral fact for review. | B6-01 | 3 |
| `EIS17-CC-06` | UQ | **Post-close reopen.** A late source event, source correction/reversal, governed Ledger correction, or later completeness evidence invalidating an earlier closed-period determination reopens the affected period as REVIEW-REQUIRED through a new linked closing version. Preserve the earlier result as immutable history; a superseded COMPLETE is never left authoritative. Re-evaluate under the same configured business-timezone/occurrence-time and source-evidence rules. Notifications remain neutral and idempotent. | SA03 EQ17-16 | 2 |
| `EIS17-CC-07` | AF | **Night Closing Intelligence consumption.** SB-P-1.15 Daily Intelligence may consume closing and counter data through readers for the Owner; employees never receive Owner-level closing intelligence because they used the POS. | — | 7 |

## 16. Authorization, Capabilities, Denial and Isolation

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-AUTH-01` | AF | **Kernel consumption.** Every SB-P-1.17 read and command calls `authz.authorize` (`EIS-KER-01`) with a server-derived principal; RLS is kernel-based and deny-by-default (`EIS-ISO-01`). No new `owner_id` policies and no interim Manager model. | B6-01 | 145 |
| `EIS17-AUTH-02` | PR/AF | **Seven capabilities (`17:FPDR-1`).** Capabilities 1 to 7 are registry entries (`EIS-KER-03`) with scope constraints (items, suppliers or counters) and, for capability 2, an optional value ceiling (`EIS-KER-04`). Capability 5 is registered non-delegable: no Manager grant can be created for it by any path. Standing-rule creation is a separate Owner-only command. No capability implies another (`EIS-KER-08`). **Accepted scope representation (GA-08; merged MC-507 docket).** Server-owned normalized scoped-grant rows use `delegated_grant → business_id → scope_type → object_id` for business-bound, capability-specific `item`, `supplier` and `counter` constraints (`EIS-KER-03/04/08`, `17:FPDR-1`). Each action/object predicate requires a current qualifying grant; incomplete grants must not be stitched or unioned into broader authority. Capability 2's optional Owner-set ceiling belongs to the qualifying grant and is validated at preview and consequential commit. Expiry, revocation and `EIS-KER-09` authority epochs participate in `EIS-CNF-02` commit-time reauthorization. Capability 5 and standing-rule creation remain Owner-only; Manager operational grants imply no `catalog.cost.read`, `catalog.cost.write`, `catalog.margin.read`, Ask CFO or Owner financial access. Employee own-attendance is separately permissioned and own-record-only. EQ17-01 remains open pending targeted EIS acceptance; no implementation or RLS/grant change is authorized. | B6-01; SA-01-F01 | 5 |
| `EIS17-AUTH-03` | PR/UQ | **Reference Cost read, cost-event write and margin.** Reading Reference Cost (supplier purchase prices, purchase-price history and `current_reference_cost`) requires the explicit `catalog.cost.read` grant. It reaches a caller only through permissioned projections that never select the protected column for an unauthorized caller (`17:FPDR-4`; `12:FR-04`). Margin is a separate grant, `catalog.margin.read` (`12:FR-09`); neither grant implies the other. This holds for dashboard, RPC, export, Ask CFO, conversation, background readers and caches. Reference Cost is Owner-only by default, and no Manager operational grant (capabilities 1 to 7) implies cost read, cost write or margin. Cost-event **write** (`catalog.cost.write`) is separate from cost read: `catalog.cost.read` alone authorizes no cost write, and the Owner-only `authority_basis` CHECK on cost and link events stays in force. This EIS authorizes no Manager cost write; any change to the protected cost-event write contract needs SB-P-1.12 owner review (EQ17-02). | B6-02; SA-01 §6; GA-08 | 5 |
| `EIS17-AUTH-04` | AF/PR | **Owner intelligence and employee denial.** Owner intelligence is distinct and Owner-only by default (`EIS-KER-07`, `EIS13-AUTH-03`, `EIS15-AUTHZ-05`). Employees operate permitted tasks only and see no anomaly analysis about other staff. | — | 6 |
| `EIS17-AUTH-05` | AF | **No routine platform access.** No support or admin path browses merchant data; temporary support access follows `EIS-SUP-01`. | — | 2 |
| `EIS17-AUTH-06` | AF | **Revocation stops prepared work.** Revoking or changing a grant before commit stops prepared reorders, standing-rule runs, queued imports and pending confirmations (`EIS-KER-09`, `EIS-CNF-02`, `EIS15-AUTHZ-06`). | — | 2 |
| `EIS17-AUTH-07` | UQ | **Grant interface not assumed.** No merchant-facing grant interface is assumed while R15-11 is open; the capability catalogue is consumed from SB-P-1.12 (N-6). | R15-11 | 1 |
| `EIS17-AUTH-08` | AF | **Business and reference isolation.** Every business-scoped reference uses composite `(business_id, id)` keys (`EIS-ISO-07`); cross-business access is denied on every channel. | — | 3 |

## 17. Conversation, Ask CFO, Voice and AI Authority

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-AI-01` | AF | **Typed tools and confirmation.** Stock, supplier, reorder, POS and closing conversation uses SB-P-1.13 typed tools (`EIS13-TOOL-01`, `-02`) with frozen confirmed proposals (`EIS13-CNF-01`, `-02`); the same data and permissions as the dashboard. | B6-17 | 19 |
| `EIS17-AI-02` | AF/PR | **Ask CFO read-only.** Ask CFO reasons over authorized POS and closing data read-only (`EIS15-CFO-01` to `-07`), separating fact from hypothesis. | — | 9 |
| `EIS17-AI-03` | AF | **Basic Voice.** Voice stock and supplier instructions converge on the same typed tools (`EIS13-VOI-01` to `-10`) where role permits. | — | 2 |
| `EIS17-AI-04` | AF | **Authorization before retrieval.** Context retrieval runs with the caller's authority (`EIS13-CTX-02`, `EIS-ISO-06`); cost, operator and Owner-only facts never enter an unauthorized model context; cached content is reauthorized (`EIS13-CTX-03`). | SA-01 §6 | 10 |
| `EIS17-AI-05` | PR | **AI must-nots enforced below the model.** AI may not invent quantities, infer theft, overwrite history, order without confirmation or expose intelligence; each is a server-side check, not a prompt instruction. | — | 5 |
| `EIS17-AI-06` | AF | **Language layer.** English, Malayalam and Manglish use the SB-P-1.13 language module (`EIS13-LANG-01` to `-05`), including clarification and identity matching. | — | 3 |

## 18. Manager Workspace and Governed Readers

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-WS-01` | PR | **Workspace reads feature services.** Role-aware cards read only governed feature readers; no dashboard-only business logic or second truth. | B6-15 | 82 |
| `EIS17-WS-02` | PR/TR | **Card catalogue.** Each card names its reader, capability, empty and unavailable states: business identity, Business Memory views, reminders, Ask CFO, Daily Intelligence, add-ons, stock, suppliers and reorder, POS and counter, closing cash, trends and role-appropriate analytics. | B6-15 | 37 |
| `EIS17-WS-03` | PR | **Truthful metrics.** Metrics appear only when plan, add-ons and reliable data support them; insufficient data is shown as such (`17-§6-8`). | — | 3 |
| `EIS17-WS-04` | PR | **Non-manipulative personalization.** Prioritization by mission type, add-ons, role, open tasks, business type and recent use; no fear-based upsell or engagement design. | — | 8 |
| `EIS17-WS-05` | PR | **Resilience.** A failing card or provider is isolated; stale state, permission change, unavailable add-on, outage, empty state, source conflict and failed export each have a defined state. | B6-16 | 10 |
| `EIS17-WS-06` | PR | **Performance without bypass.** Responsive loads through batched readers and safe caching; caches never bypass authorization or present stale permissions. | — | 2 |
| `EIS17-WS-07` | PR | **Stable identifiers for tests.** Critical Manager-depth surfaces carry stable IDs and test hooks; testability is not a visual freeze. | — | 4 |
| `EIS17-WS-08` | PR | **Calm, role-appropriate design.** Calm, conversation-first, no form clutter, navigation free to evolve under capability truth; no ERP-first or fixed four-tab layout. | — | 15 |
| `EIS17-WS-09` | AF | **Readers for SB-P-1.15.** Stock, supplier, POS and closing readers are exposed as contracts consumed by SB-P-1.15 Ask CFO and Daily Intelligence (`D17` interface rows). | — | 4 |
| `EIS17-WS-10` | AF | **Entitlement awareness.** Add-on visibility reads entitlements (`EIS-KER-05`); the Smart Stock Assistant price stays unresolved (`BP-§15-4`). | — | 4 |
| `EIS17-WS-11` | AF | **Consumed views.** Credit, payment and reconciliation views are consumed from SB-P-1.14 and SB-P-1.16; not re-implemented. | — | 7 |

## 19. Failure, Retry and Recovery

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-FLR-01` | PR/TR | **Failure catalogue.** Each failure in C7 §13 and C13 §16 has a state, a merchant message, a recovery and an audit code; recovery never loses the merchant's input. | B6-18 | 25 |
| `EIS17-FLR-02` | PR | **Supplier unavailability and communication failure.** Supplier unavailable or merchant-recorded communication failure keeps the request open with its state; no automatic re-send. | B6-13 | 2 |
| `EIS17-FLR-03` | AF | **Bounded retries.** Background work uses the SB-P-1.15 scheduler leases, fencing, effect keys and bounded retries (`EIS15-SCH-03` to `-07`). | — | 39 |

## 20. Audit, Corrections and Provenance

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-AUD-01` | TR | **Domain events.** Append-only domain events cover thresholds, suppliers, attributions, suggestions, confirmations, requests, rule runs, POS intake, mappings, signals, context and closing results. | B6-18 | 95 |
| `EIS17-AUD-02` | AF | **Authority audit reuse.** Grants, revocations and denials are recorded only in SB-P-1.12 `authority_events` and denial audit (`EIS-AUD-01`, `-02`). | — | 2 |
| `EIS17-AUD-03` | AF | **Evidence, interpretation and action kept apart.** Raw evidence, interpretation, correction, human context and resulting action are separate records (`EIS-AUD-04`), with minimization (`EIS-AUD-05`). | — | 4 |

## 21. Privacy and Data Minimization

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-PRIV-01` | TR | **POS field allowlist and operator-field exclusion.** Only declared bridge fields are stored. Operator names, phones, emails and every other unapproved operator field are excluded or redacted at intake, before any durable raw-event, dead-letter, log, diagnostic, export or AI-context path. Until U-11 approves identifiable operator processing (`EIS17-CTR-06`, `EIS17-PRIV-02`), operator identifiers are themselves unapproved fields, and Scenario B does not need them. The event's permitted financial provenance (source, external event ID, amounts and times) is preserved. | SA-02 PRIV-03; GA-09 | 2 |
| `EIS17-PRIV-02` | UQ | **Default non-attribution under U-11; indirect identification.** Scenario B and counter review run on neutral counter- and period-level data, and identifiable operator processing stays off until U-11 is resolved by qualified review. Counter, shift and time detail can identify a person indirectly, so neutral signals are never claimed to be anonymous and are never matched to a staff roster or employee identity. The approved merchant-visible granularity of neutral Scenario B is unchanged; any change to it goes to Mission Control for T6 screening instead of being narrowed silently. | SA-02 PRIV-02, PRIV-04; GA-09 | 6 |
| `EIS17-PRIV-03` | UQ | **Retention not invented.** Retention follows record-class rules (`EIS14-RET-03`); no period is set here (`BP-§15-6` unresolved). | SA-02 PRIV-07 | 2 |

## 22. Database Security and Birth-Safe Objects

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-SEC-01` | TR | **Birth-safe objects.** Every new table, view, sequence and function starts unusable by browser roles: `REVOKE ALL` from `PUBLIC`, `anon` and `authenticated`; explicit `service_role` treatment; RLS enabled before any grant; function `EXECUTE` neutralized before intended grants; fixed `search_path`. | SA-05; SA-01 SA17-EIS-09 | 4 |
| `EIS17-SEC-02` | AF | **Commands as the write boundary.** Writes go through governed commands (`EIS-ISO-02`), and caller DML on protected tables stays revoked. `SECURITY INVOKER` is used only where the calling role already holds every underlying privilege the function needs. A protected write that the caller cannot perform directly uses either the approved SB-P-1.12 narrow-executor pattern (`SECURITY DEFINER` owned by a `NOLOGIN NOINHERIT` executor role per command group, narrow table and column grants, hardened `search_path`, no `PUBLIC` execute, authorization inside the function; SB-P-1.12 §9.3, `EIS-ISO-10`) or an explicitly bounded `EIS-ISO-04` server operation whose decision record binds principal, business, action and objects. Direct table DML is never granted to authenticated callers to make an invoker function work. | SA-05; GA-07 | 2 |
| `EIS17-SEC-03` | AF | **Effective-access verification.** Effective privileges are verified as state, including creator-role defaults (`EIS-ISO-03`), not inferred from migration text. | SA-05 | 2 |
| `EIS17-SEC-04` | AF | **Upstream anon-grant gate.** Surfaces reading `businesses`, `transactions` or `transaction_correction_events` rely on the SB-P-1.12 Build Plan §5.1 remediation being closed and verified first. | — | 1 |

## 23. Migration Design (Design Only; Not Executed)

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-MIG-01` | TR | **Classes M17-1 to M17-9; install versus activate.** Migration classes follow Blueprint §20.7.2. Installation is separated from activation: POS structures may install before M17-9, but no mapped event creates stock or revenue until M17-9 is proven and DTX is cut over. | SA-05 | 4 |
| `EIS17-MIG-02` | TR | **Additive, live-safe, no reinterpretation.** Enum and CHECK widening is additive and live-safe; no historical movement, transaction or price is reinterpreted or backfilled. | SA-05 | 3 |
| `EIS17-MIG-03` | TR | **Rollback and forward-fix boundaries.** Each class states pre-data reversibility and the point after which only forward-fix applies; PITR is disaster recovery only. | SA-05 | 1 |
| `EIS17-MIG-04` | PR | **No execution; fresh rehearsal environment.** No migration is authorized. Rehearsal needs a freshly verified `smart-business-test` (Δ-06) and separate authorization. | SA-05 | 2 |
| `EIS17-MIG-05` | TR | **Type synchronization and compatibility.** Generated types and application code stay compatible across any old-app/new-schema interval (`EIS14-MIG-06` pattern). | SA-05 | 1 |

## 24. Verification Contract

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-VER-01` | PR | **Runtime tests (RT).** Rows with an RT seed get T2 integration tests and, where user-visible, T3 runtime evidence. | — | 219 |
| `EIS17-VER-02` | PR | **Negative tests (NEG).** Rows with a NEG seed get named negative-path tests, including the SA-01 §10 permission matrix as a Stage 10 proposal. | SA-01 §10 | 109 |
| `EIS17-VER-03` | PR | **Design inspection (INSP).** Rows with an INSP seed are verified by design inspection against this EIS. | — | 102 |
| `EIS17-VER-04` | PR | **Replay tests (IDEM).** Rows with an IDEM seed get replay, concurrent-delivery and lost-response tests. | ENG17-01 | 21 |
| `EIS17-VER-05` | PR | **Experience review (EXP).** Rows with an EXP seed get an experience review, including neutral-language review. | — | 44 |
| `EIS17-VER-06` | FC | **Founder Runtime Verification A.** FRV-A is Founder-reserved: confirmed threshold, explained suggestion, Owner confirmation, purchase request on the same item; negative paths per Blueprint §20.7.10. Not demonstrated. | — | 18 |
| `EIS17-VER-07` | FC | **Founder Runtime Verification B.** FRV-B runs only on the first source evidenced to supply discount or void data; fixtures never count. Not demonstrated. | ENG17-03; SA-04 | 17 |
| `EIS17-VER-08` | PR | **Completion gates and Experience Verification Matrix.** Gate rows require their full evidence set; the Experience Verification Matrix is seeded from Build Plan §10.6. | — | 8 |
| `EIS17-VER-09` | PR | **Scenario tests (SCN).** Contract scenario rows each become a named acceptance scenario. | — | 39 |
| `EIS17-VER-10` | TR | **CI tiers.** SB-P-1.17 code and migration paths join the Full Assurance path filter; new Supabase-backed tests join `vitest.full.config.ts` (EQ17-12). | B6-21 | 2 |
| `EIS17-VER-11` | PR | **Closing decision-table tests.** One T2 test per §20.9.2 row and the precedence rule. | ENG17-02 | 9 |
| `EIS17-VER-12` | AF | **Inventory regression.** All 17 `tests/inventory` files run unchanged against any stock extension. | B6-07 | 23 |

## 25. Must-Not Checks

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-NEG-01` | PR | **Must-not rows enforced below the UI.** Every must-not row is enforced by grant, command check or server validation and has a negative test or inspection item. | — | 66 |
| `EIS17-NEG-02` | PR | **Rejected approaches stay out.** Blind procurement, custom POS core changes, AI verdicts, register lockout, fixed thresholds, duplicate engines and dashboard-only logic must not appear. | — | 25 |

## 26. Optional Implementation Approaches (`17:FPDR-7`)

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-OPT-01` | FC | **Permissive examples are optional.** Rows marked `PERM-EX (17:FPDR-7)` are optional implementation approaches: verified as RT, EXP or FRV-B only if adopted. Independently mandatory rows are unaffected. | — | 23 |

## 27. Holds and Dependency Gates

Every hold below is preserved from Blueprint §21.3, the Stage 8 lock record §7 and MC-429. None is converted to PASS by this EIS.

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS17-HOLD-01` | UQ | **`D12` gate.** Rows carrying `D12` (SB-P-1.12 kernel, identity, confirmation and delegated automation) are not implemented or demonstrated until that dependency is implemented, verified and separately authorized. | — | 214 |
| `EIS17-HOLD-02` | UQ | **`D13` gate.** Rows carrying `D13` (SB-P-1.13 gateway, tools, language and voice) are not implemented or demonstrated until that dependency is implemented, verified and separately authorized. | — | 49 |
| `EIS17-HOLD-03` | UQ | **`D14` gate.** Rows carrying `D14` (SB-P-1.14 Ledger, governed commands, UDI and storage) are not implemented or demonstrated until that dependency is implemented, verified and separately authorized. | — | 118 |
| `EIS17-HOLD-04` | UQ | **`DTX` gate.** Rows carrying `DTX` (governed transactions-family cut-over (PQ-2)) are not implemented or demonstrated until that dependency is implemented, verified and separately authorized. | — | 13 |
| `EIS17-HOLD-05` | UQ | **`D15` gate.** Rows carrying `D15` (SB-P-1.15 reminders, standing rules, scheduler, Ask CFO, Daily Intelligence, notifications) are not implemented or demonstrated until that dependency is implemented, verified and separately authorized. | — | 37 |
| `EIS17-HOLD-06` | UQ | **`D16` gate.** Rows carrying `D16` (SB-P-1.16 balance contract (FIN-01 PROVISIONAL)) are not implemented or demonstrated until that dependency is implemented, verified and separately authorized. | — | 5 |
| `EIS17-HOLD-07` | UQ | **`DPOS` gate.** Rows carrying `DPOS` (evidenced POS source and adapter) are not implemented or demonstrated until that dependency is implemented, verified and separately authorized. | — | 101 |
| `EIS17-HOLD-08` | UQ | **`DSEC` gate.** Rows carrying `DSEC` (server-side secret home) are not implemented or demonstrated until that dependency is implemented, verified and separately authorized. | — | 1 |
| `EIS17-HOLD-09` | UQ | **`DENT` gate.** Rows carrying `DENT` (commercial entitlement state) are not implemented or demonstrated until that dependency is implemented, verified and separately authorized. | — | 4 |
| `EIS17-HOLD-10` | UQ | **`DSCH` gate.** Rows carrying `DSCH` (scheduler and business timezone) are not implemented or demonstrated until that dependency is implemented, verified and separately authorized. | — | 12 |
| `EIS17-HOLD-11` | UQ | **`DAI` gate.** Rows carrying `DAI` (AI provider) are not implemented or demonstrated until that dependency is implemented, verified and separately authorized. | — | 8 |
| `EIS17-HOLD-12` | UQ | **`DV` gate.** Rows carrying `DV` (voice provider) are not implemented or demonstrated until that dependency is implemented, verified and separately authorized. | — | 2 |
| `EIS17-HOLD-13` | UQ | **`DNTF` gate.** Rows carrying `DNTF` (out-of-app delivery channel) are not implemented or demonstrated until that dependency is implemented, verified and separately authorized. | — | 7 |
| `EIS17-HOLD-14` | UQ | **`DPAY` gate.** Rows carrying `DPAY` (payment-evidence source) are not implemented or demonstrated until that dependency is implemented, verified and separately authorized. | — | 1 |
| `EIS17-HOLD-15` | UQ | **MC410-R01 POS intake authority.** See `EIS17-POS-02`. Blocks EIS approval of the API/webhook intake path. | SA-01-F02 | 4 |
| `EIS17-HOLD-16` | UQ | **MC410-R02 / GA-03 — posting policy decided; technical contract open.** The Founder decided the posting policy (GA-03 Option A, MC-499; see `EIS17-TXN-09`). This hold is **not closed**. Still open: the governed-command state machine, the financial-eligibility predicate, source-event and stock-exception linkage, later stock application, replay and duplicate suppression, reversal and late-resolution semantics, and coordination with `EIS17-TXN-03` (GA-04), with targeted SA-03, SA-04 and SB-P-1.14 Ledger-owner review. | MC-411B; GA-03; MC-499 | 4 |
| `EIS17-HOLD-17` | UQ | **EQ17-13 atomic composition.** See `EIS17-TXN-03`. Blocks M17-9 activation. | MC410-R05 | 4 |
| `EIS17-HOLD-18` | UQ | **MC410-R04A dual-domain reversal.** See `EIS17-TXN-06`. | SA03-FI-04 | 2 |
| `EIS17-HOLD-19` | UQ | **MC410-R04B — closing-source completeness assurance OPEN.** Documentary per-source proof, timezone/cutoff, status and linked-reopening semantics are specified in `EIS17-CC-03/06`; this hold remains OPEN pending accountable source/time-owner acceptance of precise source and occurrence-time interfaces and later required source-specific implementation/runtime verification. No actual cursor/watermark coverage, export completeness, timestamp offsets, deployed enforcement or real-source evidence is certified. No COMPLETE result from missing, stale, unverified or superseded evidence. No POS activation, implementation, EIS Lock or hold closure is granted. | SA03-FI-08 | 3 |
| `EIS17-HOLD-20` | UQ | **U-11 operator data.** See `EIS17-CTR-06`, `EIS17-PRIV-02`. Qualified Indian legal and privacy validation OPEN. | SA-02 | 5 |
| `EIS17-HOLD-21` | UQ | **SA-04 POS assurance and real-source dossier.** See `EIS17-POS-11`. Independent qualified POS assurance OPEN. | SA-04 | 3 |
| `EIS17-HOLD-22` | UQ | **T6 and T8 watches.** T6 on `EIS17-SIG-02`; T8 on POS source capability. Either may require a stop. | B6-05, B6-09 | 3 |
| `EIS17-HOLD-23` | UQ | **U-03 closing cadence.** See `EIS17-CC-04`. | — | 8 |

## 28. Unresolved Matrix and EIS Blockers

| ID | Matter | Owner | EIS requirement | Effect on Stage 10 |
|---|---|---|---|---|
| MC410-R01 | Kernel-compatible authorization route for POS intake | SB-P-1.12 owner with SB-P-1.17 | POS-02, HOLD-15 | **Blocker** for approving the API/webhook intake path; escalate if an SB-P-1.12 amendment is needed |
| MC410-R02 | Posting timing for financially trusted, inventory-unmapped POS events | SB-P-1.14 Ledger authority via Mission Control | TXN-09, HOLD-16 | **Policy decided by the Founder (GA-03 Option A, MC-499):** financially trusted revenue posts once through the governed Ledger while mapping-dependent inventory is held. The technical contract remains open (`HOLD-16` open); **blocker** for that path until it is accepted |
| EQ17-13 / MC410-R05 | Atomic composition of the governed Ledger command and movements | SB-P-1.14 and SB-P-1.17; Supabase architecture | TXN-03, HOLD-17 | **Blocker** for M17-9 and every dual-domain path; demonstrated impossibility returns to Mission Control (T8 screen) |
| MC410-R04A | Dual-domain reversal semantics | SB-P-1.14 and SB-P-1.17 | TXN-06, HOLD-18 | Blocker for reversal of dual-domain events |
| MC410-R04B | Affirmative closing completeness evidence per source | SB-P-1.17; DPOS, DSCH and Ledger owners | CC-03, HOLD-19 | Blocker for any COMPLETE closing result |
| U-11 | Identifiable operator processing | Qualified Indian legal and privacy review | CTR-06, PRIV-02, HOLD-20 | Operator detail stays off |
| SA-04 / DPOS | Independent POS assurance; real-source dossier | Mission Control; Founder (EQ17-05) | POS-11, HOLD-21 | No source activation; FRV-B unavailable |
| U-03 | Day or shift closing; opening float | EIS, Mission Control | CC-04, HOLD-23 | Closing period model open |
| EQ17-01 | Capability scope-constraint shape | EIS with SB-P-1.12 | AUTH-02 | Open |
| EQ17-02 | Cost projection mechanism; `authority_basis` change path | EIS with SB-P-1.12 | AUTH-03 | Open; blocks Manager Reference Cost |
| EQ17-03 | Where the historical-attribution link lives | EIS with SB-P-1.14 | SUP-04 | Open |
| EQ17-04 | Item lines versus event linkage for stock–Ledger links | EIS with SB-P-1.14 | TXN-03, TXN-04 | Open |
| EQ17-06 / EQ17-07 | Batch granularity; who may change conversions | EIS; Mission Control if a grant changes | STK-03, STK-04 | Open |
| EQ17-08 | Evidence-sufficiency rule (T6 watch) | EIS; T6 screening | SIG-02 | Open |
| EQ17-10 / EQ17-14 | Manual versus POS precedence; overlap window and fields | EIS | TXN-08 | Open; review candidates only |
| EQ17-11 | Retention and lawful basis for operator identifiers | Specialist and legal review | CTR-06, PRIV-03 | Open |
| EQ17-12 | CI tier and path filters | EIS; Mission Control | VER-10 | Open |
| EQ17-15 / EQ17-16 | Occurrence time for manual cash; post-close reopen | EIS with SB-P-1.14 | CC-04, CC-06 | Open |
| FIN-01 / W-1 | Supplier-side `owed_by_business` representation | SB-P-1.16 | SUP-06 | PROVISIONAL |
| R15-11 / N-6 | Merchant-facing grant interface | SB-P-1.15 / SB-P-1.12 | AUTH-07 | Open |
| Δ-06 | Delivery topology and test environment state | Mission Control | MIG-04 | UNKNOWN; fresh verification before any rehearsal |

## 29. Specialist Findings Integration (Proposals for Stage 10)

| Finding | Source | EIS treatment | Status |
|---|---|---|---|
| SA-01-F01 capability 5 | SA-01 | AUTH-02 | Closed in the Blueprint (PR #1012); carried |
| SA-01-F02 integration principal | SA-01; MC410-R01 | POS-02, ARC-03, HOLD-15 | Hold carried |
| SA17-EIS-01 to -09 | SA-01 | AUTH-02, AUTH-03, SUP-07, POS-02, RO-03, SUP-04, AUTH-06, AI-04, SEC-01, SEC-03, VER-02 | Proposals |
| SA-01 §10 negative matrix (53 cases) | SA-01 | VER-02 | Proposal |
| SA-02 PRIV-01 to PRIV-12 | SA-02 | PRIV-01, PRIV-02, PRIV-03, CTR-06, AUD-03, AI-04, VER-02 | Proposals; U-11 open |
| SA03-FI-01 single Ledger owner | SA-03 | ARC-01, TXN-09 | Carried |
| SA03-FI-02 atomicity | SA-03; MC410-R05 | TXN-03, HOLD-17 | Hold |
| SA03-FI-03 commit-time link validation | SA-03 | TXN-04, TXN-11 | Proposal |
| SA03-FI-04 dual-domain reversal | SA-03; MC410-R04A | TXN-06, HOLD-18 | Hold |
| SA03-FI-05 overlap | SA-03 | TXN-08 | Proposal |
| SA03-FI-06 unmapped POS revenue | SA-03; MC410-R02; MC-411B | TXN-09, HOLD-16 | Founder Product Truth decided (GA-03 Option A, MC-499); technical `HOLD-16` open |
| SA03-FI-07 purchase classification | SA-03; MC410-R03 | TXN-10 | Corrected in the Blueprint (PR #1013) |
| SA03-FI-08 closing completeness | SA-03; MC410-R04B | CC-03, HOLD-19 | Hold |
| SA04-F01 to F03 | SA-04 | TXN-03, TXN-04, TXN-08 | Proposals; F01 is a hold |
| SA04-EIS-01 to -12 | SA-04 | POS-01, POS-04, POS-05, TXN-02, TXN-03, POS-06, TXN-08, TXN-07, POS-02, CC-03, CTR-01, POS-11 | Proposals |
| SA-05 blockers 1–11 and EIS requirements | SA-05 | MIG-01 to MIG-05, SEC-01 to SEC-03, VER-10 | Proposals; migration not authorized |
| MC-410A R-01 to R-05 | MC-410A | As above | Reconciliation accepted by Mission Control; holds carried |
| MC-411B case analysis | MC-411B | TXN-09 | Interpretation accepted (MC-415); timing held |

**Specialist qualification.** No reviewer's qualification or independence is certified (provenance record §3). Independent qualified review is requested at Stage 10 for security and authorization, POS integration, financial integrity, migration and privacy (U-11).

## 30. Traceability

### 30.1 Integrity checks

| Check | Result |
|---|---|
| `IN SCOPE` FCTM rows | 404 |
| Rows mapped to at least one EIS requirement | 404 / 404 |
| Missing rows / IDs absent from the FCTM | 0 / 0 (every explicit row reference is validated against the FCTM) |
| EIS requirements | 157 |
| Requirements with FCTM rows | 157 |
| Requirements without FCTM rows (orphans) | 0 |
| Orphan requirements adding product behaviour | 0 |
| Row-to-requirement links | 3040 |
| Requirements per row (minimum / maximum) | 3 / 14 |
| FCTM or Blueprint changes | 0 (FCTM blob `cb79088d`; Blueprint blob `bc4615f8`) |

**Selection rules.** Each requirement carries its own selectors (Stage 7 component, explicit row IDs, row-ID patterns, FCTM dependency code, `17:FPDR` citation, FCTM kind, verification seed or evidence marker). The two tables below are generated from the same selectors, so they are exact inverses.

### 30.2 FCTM row to EIS requirement (404 rows)

| FCTM row | Kind | Stage 7 component | Stage 7 status | FCTM dependency | EIS requirements (`EIS17-`) |
|---|---|---|---|---|---|
| `7-§1-1` | EXP | C-STK | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, STK-01, STK-07, VER-05, VER-12 |
| `7-§1-2` | PRIN | C-STK | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, STK-01, STK-07, VER-05, VER-12 |
| `7-§2-1` | OBL | C-STK | DEPENDENCY-HELD | D12 | ARC-01, STK-01, STK-06, VER-01, VER-12, HOLD-01 |
| `7-§2-2` | OBL | C-STK | DEPENDENCY-HELD | D12; D14 | ARC-01, STK-01, STK-04, VER-01, VER-12, HOLD-01, HOLD-03 |
| `7-§2-3` | OBL | C-STK | DEPENDENCY-HELD | D12; D14 | ARC-01, STK-01, STK-02, STK-07, MIG-02, VER-01, VER-12, HOLD-01, HOLD-03 |
| `7-§2-4` | OBL | C-STK | DEPENDENCY-HELD | D14 | ARC-01, STK-01, STK-08, VER-01, VER-12, HOLD-03 |
| `7-§2-5` | OBL | C-STK | DEPENDENCY-HELD | D12; D14 | ARC-01, STK-01, STK-05, TXN-06, AUD-01, VER-01, VER-12, HOLD-01, HOLD-03 |
| `7-§2-6` | OBL | C-SIG | DEPENDENCY-HELD | D12; D14 | ARC-01, SIG-01, SIG-02, SIG-03, VER-01, VER-06, HOLD-01, HOLD-03, HOLD-22 |
| `7-§2-7` | OBL | C-SIG | DEPENDENCY-HELD | D14 | ARC-01, STK-03, SIG-03, SIG-04, VER-01, HOLD-03 |
| `7-§2-8` | OBL | C-SIG | DEPENDENCY-HELD | D12; D14 | ARC-01, SIG-03, VER-01, HOLD-01, HOLD-03 |
| `7-§2-9` | OBL | C-SIG | DEPENDENCY-HELD | D12; D14 | ARC-01, STK-02, SIG-03, SIG-04, MIG-01, VER-01, HOLD-01, HOLD-03 |
| `7-§2-10` | OBL | C-STK | DEPENDENCY-HELD | D12; D14; DTX | ARC-01, STK-01, STK-06, TXN-03, TXN-04, VER-01, VER-12, HOLD-01, HOLD-03, HOLD-04 |
| `7-§2-11` | OBL | C-STK | DEPENDENCY-HELD | D12; D13 | ARC-01, STK-01, STK-07, VER-01, VER-12, HOLD-01, HOLD-02 |
| `7-§2-12` | RULE | C-STK | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, STK-01, STK-02, STK-03, STK-04, MIG-01, MIG-02, VER-03, VER-12 |
| `7-§3-1` | RULE | C-SUP | DEPENDENCY-HELD | D12 | ARC-01, SUP-01, AUTH-01, VER-01, HOLD-01 |
| `7-§3-2` | OBL | C-SUP | DEPENDENCY-HELD | D12 | ARC-01, SUP-01, AUTH-01, VER-01, HOLD-01 |
| `7-§3-3` | OBL | C-SUP | DEPENDENCY-HELD | D12 | ARC-01, SUP-01, SUP-02, AUTH-01, VER-01, HOLD-01 |
| `7-§3-4` | OBL | C-SUP | DEPENDENCY-HELD | D12; D14 | ARC-01, SUP-01, SUP-04, AUTH-01, MIG-02, VER-01, HOLD-01, HOLD-03 |
| `7-§3-5` | OBL | C-SUP | DEPENDENCY-HELD | D12; D14 | ARC-01, SUP-01, SUP-03, AUTH-01, AUTH-03, VER-01, OPT-01, HOLD-01, HOLD-03 |
| `7-§3-6` | OBL | C-SUP | DEPENDENCY-HELD | D12; DNTF | ARC-01, SUP-01, SUP-05, RO-04, AUTH-01, VER-01, HOLD-01, HOLD-13 |
| `7-§3-7` | OBL | C-SUP | DEPENDENCY-HELD | D12; D14; DTX; D16 | ARC-01, SUP-01, SUP-06, TXN-03, TXN-10, AUTH-01, WS-11, VER-01, HOLD-01, HOLD-03, HOLD-04, HOLD-06 |
| `7-§3-8` | OBL | C-SUP | DEPENDENCY-HELD | D12 | ARC-01, SUP-01, SUP-02, AUTH-01, VER-01, OPT-01, HOLD-01 |
| `7-§3-9` | NEG | C-SUP | DEPENDENCY-HELD | D12 | ARC-01, SUP-01, SUP-07, AUTH-01, VER-02, NEG-01, HOLD-01 |
| `7-§4-1` | OBL | C-RO | DEPENDENCY-HELD | D12; D13; D14 | ARC-01, RO-01, AUTH-01, VER-01, VER-06, HOLD-01, HOLD-02, HOLD-03 |
| `7-§4-2` | OBL | C-RO | DEPENDENCY-HELD | D12; D13; D14 | ARC-01, RO-01, AUTH-01, VER-01, VER-06, HOLD-01, HOLD-02, HOLD-03 |
| `7-§4-3` | OBL | C-RO | DEPENDENCY-HELD | D12; D13; D14 | ARC-01, RO-01, AUTH-01, VER-01, VER-06, HOLD-01, HOLD-02, HOLD-03 |
| `7-§4-4` | OBL | C-RO | DEPENDENCY-HELD | D12; D13; D14 | ARC-01, SIG-01, RO-01, AUTH-01, VER-01, VER-06, HOLD-01, HOLD-02, HOLD-03 |
| `7-§4-5` | OBL | C-RO | DEPENDENCY-HELD | D12; D13; D14 | ARC-01, SUP-03, RO-01, AUTH-01, AUTH-03, VER-01, VER-06, HOLD-01, HOLD-02, HOLD-03 |
| `7-§4-6` | OBL | C-RO | DEPENDENCY-HELD | D12; D13; D14 | ARC-01, STK-03, RO-01, AUTH-01, VER-01, VER-06, HOLD-01, HOLD-02, HOLD-03 |
| `7-§4-7` | NEG | C-RO | DEPENDENCY-HELD | D12; D13; D14 | ARC-01, RO-01, RO-02, AUTH-01, VER-02, NEG-01, HOLD-01, HOLD-02, HOLD-03 |
| `7-§5-1` | RULE | C-RO | DEPENDENCY-HELD | D12; D13; DNTF | ARC-01, RO-01, RO-03, RO-04, AUTH-01, AUTH-02, VER-01, VER-02, VER-06, HOLD-01, HOLD-02, HOLD-13 |
| `7-§5-2` | RULE | C-RO | DEPENDENCY-HELD | D12; D15; DSCH | ARC-01, RO-01, RO-05, CC-04, AUTH-01, FLR-03, VER-01, VER-02, VER-06, HOLD-01, HOLD-05, HOLD-10 |
| `7-§5-3` | NEG | C-RO | DEPENDENCY-HELD | D12; D15 | ARC-01, RO-01, RO-05, AUTH-01, FLR-03, VER-02, NEG-01, HOLD-01, HOLD-05 |
| `7-§5-4` | RULE | C-RO | DEPENDENCY-HELD | D12; D15 | ARC-01, RO-01, RO-05, AUTH-01, FLR-03, VER-02, VER-03, HOLD-01, HOLD-05 |
| `7-§6-1` | OBL | C-DOC | DEPENDENCY-HELD | D12; D14 | ARC-01, DOC-01, VER-01, HOLD-01, HOLD-03 |
| `7-§6-3` | OBL | C-DOC | DEPENDENCY-HELD | D12; D14 | ARC-01, DOC-01, DOC-04, VER-01, HOLD-01, HOLD-03 |
| `7-§6-4b` | RULE | C-DOC | DEPENDENCY-HELD | D12; D14 | ARC-01, DOC-01, DOC-02, TXN-02, VER-01, VER-04, HOLD-01, HOLD-03 |
| `7-§6-5b` | NEG | C-DOC | DEPENDENCY-HELD | D14 | ARC-01, DOC-01, DOC-02, TXN-02, VER-02, VER-04, NEG-01, HOLD-03 |
| `7-§7-1` | OBL | C-POS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, POS-01, POS-09, VER-01 |
| `7-§7-2` | OBL | C-POS | SOURCE-HELD | DPOS | ARC-01, POS-01, POS-07, POS-11, POS-12, VER-01, HOLD-07 |
| `7-§7-3` | NEG | C-POS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, POS-01, POS-10, VER-02, VER-03, NEG-01 |
| `7-§7-4` | RULE | C-POS | SOURCE-HELD | DPOS; D14 | ARC-01, POS-01, POS-11, TXN-08, VER-01, VER-03, HOLD-03, HOLD-07 |
| `7-§8-1` | RULE | C-STK | DEPENDENCY-HELD | D14; DTX | ARC-01, ARC-04, STK-01, TXN-02, TXN-03, TXN-04, VER-03, VER-04, VER-12, HOLD-03, HOLD-04, HOLD-17 |
| `7-§8-2` | OBL | C-STK | DEPENDENCY-HELD | D14; DTX | ARC-01, STK-01, STK-02, TXN-02, TXN-03, TXN-10, VER-01, VER-04, VER-12, HOLD-03, HOLD-04, HOLD-17 |
| `7-§8-3` | OBL | C-STK | SOURCE-HELD | D14; DTX; DPOS | ARC-01, STK-01, STK-02, POS-11, TXN-02, TXN-03, TXN-09, VER-01, VER-04, VER-12, HOLD-03, HOLD-04, HOLD-07, HOLD-17 |
| `7-§8-4` | NEG | C-STK | DEPENDENCY-HELD | D14 | ARC-01, STK-01, STK-05, VER-02, VER-12, NEG-01, HOLD-03 |
| `7-§8-5` | RULE | C-STK | DEPENDENCY-HELD | D14; DTX; D16 | ARC-01, STK-01, SUP-06, TXN-03, TXN-10, WS-11, VER-01, VER-03, VER-12, HOLD-03, HOLD-04, HOLD-06 |
| `7-§9-1` | OBL | C-STK | DEPENDENCY-HELD | D12 | ARC-01, STK-01, VER-01, VER-12, HOLD-01 |
| `7-§9-2` | OBL | C-STK | DEPENDENCY-HELD | D12; DENT | ARC-01, STK-01, WS-10, VER-01, VER-12, HOLD-01, HOLD-09 |
| `7-§9-3` | NEG | C-STK | DEPENDENCY-HELD | D12 | ARC-01, STK-01, VER-02, VER-03, VER-12, NEG-01, HOLD-01 |
| `7-§11-1.1` | OBL | C-RO | DEPENDENCY-HELD | D13; DAI; D12 | ARC-01, STK-07, RO-01, RO-07, AUTH-01, AI-04, VER-01, HOLD-01, HOLD-02, HOLD-11 |
| `7-§11-1.2` | OBL | C-RO | DEPENDENCY-HELD | D13; DAI; D12 | ARC-01, SIG-02, SIG-03, RO-01, RO-07, AUTH-01, AI-04, VER-01, HOLD-01, HOLD-02, HOLD-11 |
| `7-§11-1.3` | OBL | C-RO | DEPENDENCY-HELD | D13; DAI; D12 | ARC-01, RO-01, RO-07, AUTH-01, AI-04, VER-01, VER-06, HOLD-01, HOLD-02, HOLD-11 |
| `7-§11-1.4` | OBL | C-RO | DEPENDENCY-HELD | D13; DAI; D12 | ARC-01, SUP-02, RO-01, RO-07, AUTH-01, AI-04, VER-01, HOLD-01, HOLD-02, HOLD-11 |
| `7-§11-1.5` | OBL | C-RO | DEPENDENCY-HELD | D13; DAI; D12 | ARC-01, RO-01, RO-07, CTR-02, AUTH-01, AI-04, VER-01, HOLD-01, HOLD-02, HOLD-11 |
| `7-§11-1.6` | OBL | C-RO | DEPENDENCY-HELD | D13; DAI; D12 | ARC-01, RO-01, RO-07, AUTH-01, AI-04, VER-01, HOLD-01, HOLD-02, HOLD-11 |
| `7-§11-2.1` | NEG | C-RO | DEPENDENCY-HELD | D13; D12 | ARC-01, RO-01, RO-02, AUTH-01, AI-05, VER-02, NEG-01, HOLD-01, HOLD-02 |
| `7-§11-2.2` | NEG | C-RO | DEPENDENCY-HELD | D13; D12 | ARC-01, RO-01, CTR-02, AUTH-01, AI-05, VER-02, NEG-01, HOLD-01, HOLD-02 |
| `7-§11-2.3` | NEG | C-RO | DEPENDENCY-HELD | D13; D12 | ARC-01, STK-05, RO-01, AUTH-01, AI-05, VER-02, NEG-01, HOLD-01, HOLD-02 |
| `7-§11-2.4` | NEG | C-RO | DEPENDENCY-HELD | D13; D12 | ARC-01, RO-01, RO-03, AUTH-01, AI-05, VER-02, NEG-01, HOLD-01, HOLD-02 |
| `7-§11-2.5` | NEG | C-RO | DEPENDENCY-HELD | D13; D12 | ARC-01, SUP-07, RO-01, AUTH-01, AUTH-04, AI-04, AI-05, VER-02, NEG-01, HOLD-01, HOLD-02 |
| `7-§12-1` | RULE | C-FDN | DEPENDENCY-HELD | D12 | ARC-01, ARC-02, STK-01, STK-06, AUD-01, VER-03, HOLD-01 |
| `7-§12-2` | RULE | C-FDN | DEPENDENCY-HELD | D14 | ARC-01, ARC-02, AUD-01, VER-03, HOLD-03 |
| `7-§12-3` | RULE | C-FDN | DEPENDENCY-HELD | D12 | ARC-01, ARC-02, AUTH-01, AUD-01, AUD-02, VER-03, HOLD-01 |
| `7-§12-4` | RULE | C-FDN | DEPENDENCY-HELD | D15; DSCH | ARC-01, ARC-02, RO-06, CC-04, FLR-03, AUD-01, VER-03, HOLD-05, HOLD-10 |
| `7-§12-5` | RULE | C-FDN | DEPENDENCY-HELD | D12 | ARC-01, ARC-02, SUP-01, AUD-01, VER-03, HOLD-01 |
| `7-§12-6` | RULE | C-FDN | DEPENDENCY-HELD | D14 | ARC-01, ARC-02, DOC-01, AUD-01, VER-03, HOLD-03 |
| `7-§12-7` | RULE | C-FDN | DEPENDENCY-HELD | D13; D15; DNTF | ARC-01, ARC-02, AI-01, FLR-03, AUD-01, VER-03, HOLD-02, HOLD-05, HOLD-13 |
| `7-§12-8` | RULE | C-FDN | DEPENDENCY-HELD | D12 | ARC-01, ARC-02, ARC-04, TXN-01, AUD-01, SEC-01, VER-03, HOLD-01 |
| `7-§12-9` | RULE | C-FDN | SOURCE-HELD | DPOS | ARC-01, ARC-02, ARC-03, POS-11, AUD-01, VER-03, HOLD-07 |
| `7-§13-1` | OBL | C-FDN | DEPENDENCY-HELD | D12; D14 | ARC-01, DOC-02, TXN-02, FLR-01, AUD-01, VER-04, HOLD-01, HOLD-03 |
| `7-§13-2` | OBL | C-FDN | DEPENDENCY-HELD | D12; D14 | ARC-01, POS-06, FLR-01, AUD-01, VER-01, VER-02, HOLD-01, HOLD-03 |
| `7-§13-3` | OBL | C-FDN | DEPENDENCY-HELD | D12; D14 | ARC-01, POS-06, FLR-01, AUD-01, VER-01, VER-02, HOLD-01, HOLD-03 |
| `7-§13-4` | OBL | C-FDN | DEPENDENCY-HELD | D12; D14 | ARC-01, STK-04, FLR-01, AUD-01, VER-01, VER-02, HOLD-01, HOLD-03 |
| `7-§13-5` | OBL | C-FDN | DEPENDENCY-HELD | D12; D14 | ARC-01, STK-09, FLR-01, AUD-01, VER-01, VER-02, HOLD-01, HOLD-03 |
| `7-§13-6` | OBL | C-FDN | DEPENDENCY-HELD | D12; D14 | ARC-01, STK-05, TXN-06, TXN-11, FLR-01, AUD-01, VER-01, VER-02, HOLD-01, HOLD-03 |
| `7-§13-7` | OBL | C-FDN | DEPENDENCY-HELD | D12; D14 | ARC-01, RO-02, FLR-01, FLR-02, AUD-01, VER-01, VER-02, HOLD-01, HOLD-03 |
| `7-§13-8` | OBL | C-FDN | DEPENDENCY-HELD | D14; DNTF | ARC-01, RO-04, FLR-01, FLR-02, AUD-01, VER-01, VER-02, HOLD-03, HOLD-13 |
| `7-§13-9` | OBL | C-FDN | SOURCE-HELD | DPOS; D14 | ARC-01, POS-11, TXN-08, FLR-01, AUD-01, VER-01, VER-02, HOLD-03, HOLD-07 |
| `7-§13-10` | OBL | C-FDN | DEPENDENCY-HELD | D14 | ARC-01, DOC-02, FLR-01, AUD-01, VER-01, VER-02, HOLD-03 |
| `7-§13-11` | OBL | C-FDN | DEPENDENCY-HELD | D12; D14 | ARC-01, TXN-02, TXN-05, FLR-01, FLR-03, AUD-01, VER-04, HOLD-01, HOLD-03 |
| `7-§13-12` | OBL | C-FDN | DEPENDENCY-HELD | D12; D15 | ARC-01, RO-05, AUTH-06, FLR-01, FLR-03, AUD-01, VER-01, VER-02, HOLD-01, HOLD-05 |
| `7-§13-13` | RULE | C-FDN | DEPENDENCY-HELD | D12; D14 | ARC-01, STK-09, TXN-12, FLR-01, AUD-01, VER-01, VER-02, HOLD-01, HOLD-03 |
| `7-§14-1` | PRIN | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-02, VER-02, VER-05 |
| `7-§14-2` | NEG | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-02, VER-02, VER-05, NEG-01 |
| `7-§15-1` | SCN | C-ACC | DEPENDENCY-HELD | D12; D14 | ARC-01, STK-07, STK-08, VER-01, VER-09, HOLD-01, HOLD-03 |
| `7-§15-2b` | SCN | C-ACC | DEPENDENCY-HELD | D12; D14 | ARC-01, DOC-02, TXN-02, VER-01, VER-04, VER-09, HOLD-01, HOLD-03 |
| `7-§15-3` | SCN | C-ACC | DEPENDENCY-HELD | D12; D14 | ARC-01, STK-05, VER-01, VER-09, HOLD-01, HOLD-03 |
| `7-§15-4` | SCN | C-ACC | DEPENDENCY-HELD | D12; D14 | ARC-01, SIG-01, SIG-03, VER-01, VER-09, HOLD-01, HOLD-03 |
| `7-§15-5` | SCN | C-ACC | DEPENDENCY-HELD | D12; D14 | ARC-01, SIG-03, SIG-04, VER-01, VER-09, HOLD-01, HOLD-03 |
| `7-§15-6` | SCN | C-ACC | DEPENDENCY-HELD | D12 | ARC-01, SUP-04, VER-01, VER-09, HOLD-01 |
| `7-§15-7` | SCN | C-ACC | DEPENDENCY-HELD | D12; D13 | ARC-01, RO-01, RO-03, VER-01, VER-06, VER-09, HOLD-01, HOLD-02 |
| `7-§15-8` | SCN | C-ACC | DEPENDENCY-HELD | D12; D15; DSCH | ARC-01, RO-05, CC-04, FLR-03, VER-01, VER-02, VER-09, HOLD-01, HOLD-05, HOLD-10 |
| `7-§15-9` | SCN | C-ACC | SOURCE-HELD | DPOS | ARC-01, POS-11, POS-12, VER-01, VER-03, VER-09, HOLD-07 |
| `7-§15-11` | SCN | C-ACC | DEPENDENCY-HELD | D12; D14 | ARC-01, CTR-02, VER-02, VER-05, VER-09, HOLD-01, HOLD-03 |
| `7-§16-1` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUD-01, VER-02, NEG-01, NEG-02 |
| `7-§16-2` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, STK-01, AUD-01, VER-02, NEG-01, NEG-02 |
| `7-§16-3` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, POS-10, AUD-01, VER-02, NEG-01, NEG-02 |
| `7-§16-4` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-02, AUD-01, VER-02, NEG-01, NEG-02 |
| `7-§16-5` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, TXN-08, AUD-01, VER-02, NEG-01, NEG-02 |
| `7-§16-6` | NEG | C-SIG | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, SIG-01, SIG-02, SIG-03, VER-02, NEG-01, NEG-02 |
| `7-§18-1` | GATE | C-ACC | SOURCE-HELD | D12; D13; D14; D15; DPOS | ARC-01, POS-11, FLR-03, VER-08, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07 |
| `13-§1-1` | EXP | C-POS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, POS-01, POS-12, VER-05 |
| `13-§1-2` | EXP | C-POS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, POS-01, POS-12, VER-05 |
| `13-§2-6` | PRIN | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-02, VER-05 |
| `13-§3-1` | PRIN | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, POS-10, CTR-01, VER-03, VER-05 |
| `13-§3-2` | PRIN | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, POS-10, CTR-01, VER-03, VER-05 |
| `13-§3-3` | PRIN | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-02, VER-03, VER-05 |
| `13-§3-4` | PRIN | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-02, VER-03, VER-05 |
| `13-§3-5` | PRIN | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-04, VER-03, VER-05 |
| `13-§3-6` | PRIN | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-07, AUD-01, VER-03, VER-05 |
| `13-§3-7` | NEG | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, POS-10, CTR-01, VER-02, VER-03, NEG-01 |
| `13-§4-1` | OBL | C-POS | SOURCE-HELD | DPOS | ARC-01, POS-01, POS-02, POS-11, VER-01, HOLD-07, HOLD-15 |
| `13-§4-2` | OBL | C-POS | SOURCE-HELD | DPOS | ARC-01, POS-01, POS-05, POS-11, TXN-09, VER-01, HOLD-07, HOLD-16 |
| `13-§4-3` | OBL | C-POS | SOURCE-HELD | DPOS | ARC-01, POS-01, POS-05, POS-11, TXN-02, VER-01, VER-04, HOLD-07 |
| `13-§4-4` | OBL | C-POS | SOURCE-HELD | DPOS; D12 | ARC-01, POS-01, POS-06, POS-11, VER-01, HOLD-01, HOLD-07 |
| `13-§4-5` | OBL | C-POS | SOURCE-HELD | DPOS | ARC-01, POS-01, POS-04, POS-11, VER-01, HOLD-07 |
| `13-§4-6` | OBL | C-POS | SOURCE-HELD | DPOS | ARC-01, POS-01, POS-04, POS-11, VER-01, HOLD-07 |
| `13-§4-7` | OBL | C-POS | SOURCE-HELD | DPOS; D12 | ARC-01, POS-01, POS-04, POS-11, CTR-06, PRIV-01, PRIV-02, VER-01, HOLD-01, HOLD-07, HOLD-20 |
| `13-§4-8` | OBL | C-POS | SOURCE-HELD | DPOS; D14; DTX | ARC-01, STK-02, POS-01, POS-07, POS-11, TXN-03, VER-01, HOLD-03, HOLD-04, HOLD-07 |
| `13-§4-9` | OBL | C-POS | SOURCE-HELD | DPOS | ARC-01, POS-01, POS-11, POS-12, VER-01, HOLD-07 |
| `13-§4-10` | RULE | C-POS | SOURCE-HELD | DPOS; D14 | ARC-01, POS-01, POS-08, POS-11, VER-03, HOLD-03, HOLD-07 |
| `13-§5-1` | NEG | C-POS | SOURCE-HELD | DPOS | ARC-01, POS-01, POS-10, POS-11, VER-02, VER-03, NEG-01, HOLD-07 |
| `13-§5-2` | RULE | C-POS | SOURCE-HELD | DPOS | ARC-01, ARC-06, POS-01, POS-11, VER-03, HOLD-07 |
| `13-§5-3` | RULE | C-POS | SOURCE-HELD | DPOS | ARC-01, POS-01, POS-02, POS-11, VER-03, HOLD-07 |
| `13-§5-4` | RULE | C-POS | SOURCE-HELD | DPOS | ARC-01, ARC-03, POS-01, POS-11, VER-03, HOLD-07 |
| `13-§5-5` | RULE | C-POS | SOURCE-HELD | DPOS | ARC-01, POS-01, POS-04, POS-11, VER-03, HOLD-07 |
| `13-§5-6` | RULE | C-POS | SOURCE-HELD | DPOS | ARC-01, POS-01, POS-04, POS-11, VER-03, HOLD-07, HOLD-21 |
| `13-§6-1` | OBL | C-POS | SOURCE-HELD | DPOS; D14 | ARC-01, POS-01, POS-11, TXN-01, TXN-02, TXN-08, VER-01, VER-04, HOLD-03, HOLD-07 |
| `13-§6-2` | OBL | C-POS | SOURCE-HELD | DPOS; D14 | ARC-01, POS-01, POS-05, POS-11, TXN-01, TXN-02, VER-01, VER-04, HOLD-03, HOLD-07 |
| `13-§6-3` | OBL | C-POS | SOURCE-HELD | DPOS; D14 | ARC-01, POS-01, POS-11, TXN-02, TXN-06, VER-01, VER-04, HOLD-03, HOLD-07, HOLD-18 |
| `13-§6-4` | OBL | C-POS | SOURCE-HELD | DPOS; D14 | ARC-01, POS-01, POS-11, TXN-02, VER-01, VER-04, HOLD-03, HOLD-07 |
| `13-§6-5` | OBL | C-POS | SOURCE-HELD | DPOS; D14 | ARC-01, POS-01, POS-11, TXN-01, TXN-02, VER-01, VER-04, HOLD-03, HOLD-07 |
| `13-§6-6` | NEG | C-POS | SOURCE-HELD | DPOS; D14; DTX | ARC-01, POS-01, POS-11, TXN-02, TXN-03, TXN-09, VER-02, VER-04, NEG-01, HOLD-03, HOLD-04, HOLD-07, HOLD-16 |
| `13-§7-1` | OBL | C-POS | SOURCE-HELD | DPOS; D12 | ARC-01, POS-01, POS-06, POS-07, POS-11, VER-01, HOLD-01, HOLD-07 |
| `13-§7-2` | OBL | C-POS | SOURCE-HELD | DPOS; D14 | ARC-01, STK-04, POS-01, POS-07, POS-11, VER-01, HOLD-03, HOLD-07 |
| `13-§7-3` | OBL | C-POS | SOURCE-HELD | DPOS; D14 | ARC-01, POS-01, POS-07, POS-11, TXN-09, VER-01, HOLD-03, HOLD-07, HOLD-16 |
| `13-§7-4` | OBL | C-POS | SOURCE-HELD | DPOS; D14 | ARC-01, POS-01, POS-07, POS-11, VER-01, HOLD-03, HOLD-07 |
| `13-§7-5` | RULE | C-POS | SOURCE-HELD | DPOS; D14 | ARC-01, POS-01, POS-11, TXN-08, VER-01, VER-02, HOLD-03, HOLD-07 |
| `13-§8-1` | OBL | C-CTR | SOURCE-HELD | DPOS | ARC-01, POS-11, CTR-01, VER-01, VER-07, HOLD-07 |
| `13-§8-2` | OBL | C-CTR | SOURCE-HELD | DPOS | ARC-01, POS-11, CTR-01, VER-01, VER-07, HOLD-07 |
| `13-§8-3` | OBL | C-CTR | SOURCE-HELD | DPOS | ARC-01, POS-11, CTR-01, VER-01, VER-07, OPT-01, HOLD-07 |
| `13-§8-4` | OBL | C-CTR | SOURCE-HELD | DPOS | ARC-01, POS-11, CTR-01, VER-01, VER-07, OPT-01, HOLD-07 |
| `13-§8-5` | OBL | C-CTR | SOURCE-HELD | DPOS | ARC-01, POS-11, CTR-01, VER-01, VER-07, OPT-01, HOLD-07 |
| `13-§8-6` | OBL | C-CTR | SOURCE-HELD | DPOS; D14 | ARC-01, POS-11, CTR-01, VER-01, VER-07, HOLD-03, HOLD-07 |
| `13-§8-7` | OBL | C-CTR | SOURCE-HELD | DPOS | ARC-01, POS-11, CTR-01, VER-01, VER-07, OPT-01, HOLD-07 |
| `13-§8-8` | RULE | C-CTR | SOURCE-HELD | DPOS | ARC-01, POS-11, CTR-01, CTR-02, VER-05, VER-07, HOLD-07 |
| `13-§8-9` | EXP | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-02, VER-05, VER-07 |
| `13-§8-10` | NEG | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-02, VER-02, VER-07, NEG-01 |
| `13-§9-1` | PRIN | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-03, VER-05 |
| `13-§9-2` | SCN | C-CTR | SOURCE-HELD | D12; DPOS | ARC-01, POS-11, CTR-01, CTR-03, VER-01, VER-09, HOLD-01, HOLD-07 |
| `13-§9-3` | SCN | C-CTR | SOURCE-HELD | D12; DPOS | ARC-01, POS-11, CTR-01, CTR-03, VER-01, VER-09, HOLD-01, HOLD-07 |
| `13-§9-4` | SCN | C-CTR | SOURCE-HELD | D12; DPOS | ARC-01, POS-11, CTR-01, CTR-03, VER-01, VER-09, HOLD-01, HOLD-07 |
| `13-§9-5` | SCN | C-CTR | SOURCE-HELD | D12; DPOS | ARC-01, POS-11, CTR-01, CTR-03, VER-01, VER-09, HOLD-01, HOLD-07 |
| `13-§9-6` | SCN | C-CTR | SOURCE-HELD | D12; DPOS | ARC-01, POS-11, CTR-01, CTR-03, VER-01, VER-09, HOLD-01, HOLD-07 |
| `13-§9-7` | OBL | C-CTR | DEPENDENCY-HELD | D12; D14 | ARC-01, CTR-01, CTR-03, AUD-03, VER-01, VER-02, HOLD-01, HOLD-03 |
| `13-§10-1` | OBL | C-CC | SOURCE-HELD | DPOS; D14 | ARC-01, POS-11, CC-01, CC-02, CC-03, VER-01, VER-11, HOLD-03, HOLD-07, HOLD-19, HOLD-23 |
| `13-§10-2` | OBL | C-CC | SOURCE-HELD | DPOS; D14 | ARC-01, POS-11, CC-01, CC-02, VER-01, VER-11, HOLD-03, HOLD-07, HOLD-23 |
| `13-§10-3` | OBL | C-CC | DEPENDENCY-HELD | D12; D14 | ARC-01, CC-01, CC-02, CC-04, VER-01, VER-11, HOLD-01, HOLD-03, HOLD-23 |
| `13-§10-4` | OBL | C-CC | DEPENDENCY-HELD | D14; DTX | ARC-01, TXN-03, CC-01, CC-02, CC-03, CC-04, VER-01, VER-11, HOLD-03, HOLD-04, HOLD-23 |
| `13-§10-5` | OBL | C-CC | DEPENDENCY-HELD | D12; D14 | ARC-01, CC-01, CC-02, VER-01, VER-11, HOLD-01, HOLD-03, HOLD-23 |
| `13-§10-6` | OBL | C-CC | DEPENDENCY-HELD | D12 | ARC-01, CC-01, CC-02, CC-05, AUTH-02, VER-01, VER-11, HOLD-01, HOLD-23 |
| `13-§10-7` | OBL | C-CC | DEPENDENCY-HELD | D12; D14 | ARC-01, CC-01, CC-02, CC-03, CC-05, VER-01, VER-11, HOLD-01, HOLD-03, HOLD-23 |
| `13-§10-8` | NEG | C-CC | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CC-01, CC-02, CC-05, VER-02, VER-05, VER-11, NEG-01, HOLD-23 |
| `13-§11-1` | CONS | C-CC | DEPENDENCY-HELD | D15; DSCH | ARC-01, CC-01, CC-04, CC-07, FLR-03, VER-01, HOLD-05, HOLD-10 |
| `13-§11-2` | SCN | C-CC | DEPENDENCY-HELD | D15; DSCH | ARC-01, CC-01, CC-04, CC-07, FLR-03, VER-01, VER-09, HOLD-05, HOLD-10 |
| `13-§11-3` | SCN | C-CC | DEPENDENCY-HELD | D15; DSCH | ARC-01, CC-01, CC-04, CC-07, FLR-03, VER-01, VER-09, HOLD-05, HOLD-10 |
| `13-§11-4` | SCN | C-CC | DEPENDENCY-HELD | D15; DSCH | ARC-01, CTR-01, CC-01, CC-04, CC-07, FLR-03, VER-01, VER-09, HOLD-05, HOLD-10 |
| `13-§11-5` | SCN | C-CC | DEPENDENCY-HELD | D15; DSCH | ARC-01, CC-01, CC-04, CC-07, FLR-03, VER-01, VER-09, HOLD-05, HOLD-10 |
| `13-§11-6` | SCN | C-CC | DEPENDENCY-HELD | D15; DSCH | ARC-01, CC-01, CC-04, CC-07, FLR-03, VER-01, VER-09, HOLD-05, HOLD-10 |
| `13-§11-7` | NEG | C-CC | DEPENDENCY-HELD | D12; D15 | ARC-01, CC-01, CC-07, AUTH-04, FLR-03, VER-02, NEG-01, HOLD-01, HOLD-05 |
| `13-§12-1` | CONS | C-AUTH | DEPENDENCY-HELD | D13; D15 | ARC-01, AUTH-01, AI-01, AI-02, FLR-03, VER-01, HOLD-02, HOLD-05 |
| `13-§12-2` | SCN | C-AUTH | DEPENDENCY-HELD | D13; D15 | ARC-01, AUTH-01, AI-01, AI-02, FLR-03, VER-01, VER-09, HOLD-02, HOLD-05 |
| `13-§12-3` | SCN | C-AUTH | DEPENDENCY-HELD | D13; D15 | ARC-01, AUTH-01, AI-01, AI-02, FLR-03, VER-01, VER-09, HOLD-02, HOLD-05 |
| `13-§12-4` | SCN | C-AUTH | DEPENDENCY-HELD | D13; D15 | ARC-01, AUTH-01, AI-01, AI-02, FLR-03, VER-01, VER-09, HOLD-02, HOLD-05 |
| `13-§12-5` | NEG | C-AUTH | DEPENDENCY-HELD | D12; D15 | ARC-01, AUTH-01, AI-01, AI-02, AI-04, FLR-03, VER-02, NEG-01, HOLD-01, HOLD-05 |
| `13-§13-1` | OBL | C-AUTH | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, AUTH-02, AI-01, VER-01, VER-02, HOLD-01 |
| `13-§13-2` | OBL | C-AUTH | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, AUTH-02, AUTH-07, AI-01, VER-01, VER-02, HOLD-01 |
| `13-§13-3` | OBL | C-AUTH | DEPENDENCY-HELD | D12 | ARC-01, CTR-06, AUTH-01, AUTH-04, AI-01, PRIV-02, VER-02, HOLD-01, HOLD-20 |
| `13-§13-4` | NEG | C-AUTH | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, AUTH-05, AI-01, VER-02, NEG-01, HOLD-01 |
| `13-§14-1a` | OBL | C-AUTH | DEPENDENCY-HELD | D13; DAI; D12 | ARC-01, AUTH-01, AI-01, AI-04, AI-06, VER-01, HOLD-01, HOLD-02, HOLD-11 |
| `13-§14-2` | RULE | C-AUTH | DEPENDENCY-HELD | D12; D13 | ARC-01, AUTH-01, AI-01, VER-02, VER-03, HOLD-01, HOLD-02 |
| `13-§15-1` | NEG | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-04, VER-02, NEG-01 |
| `13-§15-2` | NEG | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-04, VER-02, NEG-01 |
| `13-§15-3` | NEG | C-CTR | DEPENDENCY-HELD | D14 | ARC-01, CTR-01, CTR-04, VER-02, NEG-01, HOLD-03 |
| `13-§15-4` | NEG | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-04, VER-02, NEG-01 |
| `13-§15-5` | NEG | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-04, VER-02, NEG-01 |
| `13-§15-6` | NEG | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-04, VER-02, NEG-01 |
| `13-§15-7` | NEG | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-04, VER-02, NEG-01 |
| `13-§15-8` | RULE | C-CTR | DEPENDENCY-HELD | D12; D13 | ARC-01, ARC-04, CTR-01, CTR-04, VER-01, HOLD-01, HOLD-02 |
| `13-§16-1` | OBL | C-FDN | SOURCE-HELD | DPOS | ARC-01, POS-09, POS-11, FLR-01, AUD-01, VER-01, VER-02, HOLD-07 |
| `13-§16-2` | OBL | C-FDN | SOURCE-HELD | DPOS | ARC-01, POS-11, TXN-02, FLR-01, FLR-03, AUD-01, VER-04, HOLD-07 |
| `13-§16-3` | OBL | C-FDN | SOURCE-HELD | DPOS; D12 | ARC-01, POS-06, POS-11, FLR-01, AUD-01, VER-01, VER-02, HOLD-01, HOLD-07 |
| `13-§16-4` | OBL | C-FDN | SOURCE-HELD | DPOS | ARC-01, STK-04, POS-06, POS-11, FLR-01, AUD-01, VER-01, VER-02, HOLD-07 |
| `13-§16-5` | OBL | C-FDN | SOURCE-HELD | DPOS | ARC-01, POS-11, TXN-02, TXN-07, FLR-01, AUD-01, VER-04, HOLD-07 |
| `13-§16-6` | OBL | C-FDN | SOURCE-HELD | DPOS | ARC-01, POS-11, TXN-06, FLR-01, AUD-01, VER-01, VER-02, HOLD-07, HOLD-18 |
| `13-§16-7` | OBL | C-FDN | SOURCE-HELD | DPOS | ARC-01, POS-09, POS-11, CC-03, FLR-01, AUD-01, VER-01, VER-02, HOLD-07, HOLD-19 |
| `13-§16-8` | OBL | C-FDN | SOURCE-HELD | DPOS; DSEC | ARC-01, POS-02, POS-03, POS-11, FLR-01, AUD-01, VER-01, VER-02, HOLD-07, HOLD-08, HOLD-15 |
| `13-§16-9` | OBL | C-FDN | DEPENDENCY-HELD | D12 | ARC-01, CC-02, FLR-01, AUD-01, VER-01, VER-02, HOLD-01 |
| `13-§16-10` | OBL | C-FDN | DEPENDENCY-HELD | D12 | ARC-01, CC-02, FLR-01, AUD-01, VER-01, VER-02, HOLD-01 |
| `13-§16-11` | OBL | C-FDN | SOURCE-HELD | DPOS | ARC-01, POS-11, TXN-08, FLR-01, AUD-01, VER-01, VER-02, HOLD-07 |
| `13-§16-12` | RULE | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, POS-09, TXN-12, FLR-01, AUD-01, VER-01, VER-02 |
| `13-§17-1` | OBL | C-FDN | SOURCE-HELD | DPOS; D12 | ARC-01, POS-02, POS-11, AUD-01, VER-01, VER-03, HOLD-01, HOLD-07, HOLD-15 |
| `13-§17-2` | OBL | C-FDN | SOURCE-HELD | DPOS; D12 | ARC-01, POS-05, POS-11, TXN-01, AUD-01, VER-01, VER-03, HOLD-01, HOLD-07 |
| `13-§17-3` | OBL | C-FDN | SOURCE-HELD | DPOS; D12 | ARC-01, POS-06, POS-11, AUD-01, VER-01, VER-03, HOLD-01, HOLD-07 |
| `13-§17-4` | OBL | C-FDN | SOURCE-HELD | DPOS; D12 | ARC-01, POS-05, POS-11, AUD-01, AUD-03, MIG-01, VER-01, VER-03, HOLD-01, HOLD-07 |
| `13-§17-5` | OBL | C-FDN | SOURCE-HELD | DPOS; D12 | ARC-01, POS-05, POS-11, AUD-01, VER-01, VER-03, HOLD-01, HOLD-07 |
| `13-§17-6` | OBL | C-FDN | SOURCE-HELD | DPOS; D12 | ARC-01, POS-11, TXN-01, TXN-02, TXN-05, TXN-11, AUD-01, VER-04, HOLD-01, HOLD-07 |
| `13-§17-7` | OBL | C-FDN | SOURCE-HELD | DPOS; D12 | ARC-01, POS-11, TXN-04, TXN-06, AUD-01, VER-01, VER-03, HOLD-01, HOLD-07 |
| `13-§17-8` | OBL | C-FDN | SOURCE-HELD | DPOS; D12 | ARC-01, POS-11, CTR-06, AUD-01, PRIV-02, VER-01, VER-03, HOLD-01, HOLD-07, HOLD-20 |
| `13-§17-9` | OBL | C-FDN | SOURCE-HELD | DPOS; D12 | ARC-01, POS-11, CTR-07, AUD-01, AUD-03, VER-01, VER-03, HOLD-01, HOLD-07 |
| `13-§17-10` | OBL | C-FDN | SOURCE-HELD | DPOS; D12 | ARC-01, POS-11, CTR-03, AUD-01, AUD-03, VER-01, VER-03, HOLD-01, HOLD-07 |
| `13-§17-11` | OBL | C-FDN | DEPENDENCY-HELD | D12; D14 | ARC-01, CC-01, CC-06, AUD-01, VER-01, VER-03, HOLD-01, HOLD-03 |
| `13-§17-12` | OBL | C-FDN | SOURCE-HELD | DPOS; D12 | ARC-01, POS-11, CC-06, AUD-01, PRIV-03, VER-01, VER-03, HOLD-01, HOLD-07 |
| `13-§18-1` | NEG | C-CTR | DEPENDENCY-HELD | D12 | ARC-01, CTR-01, CTR-02, VER-02, VER-05, NEG-01, HOLD-01 |
| `13-§18-2` | NEG | C-CTR | DEPENDENCY-HELD | D12 | ARC-01, CTR-01, CTR-02, PRIV-02, VER-02, VER-05, NEG-01, HOLD-01 |
| `13-§18-3` | NEG | C-CTR | DEPENDENCY-HELD | D12 | ARC-01, CTR-01, CTR-06, PRIV-01, PRIV-02, PRIV-03, VER-02, VER-05, NEG-01, HOLD-01, HOLD-20 |
| `13-§18-4` | NEG | C-CTR | DEPENDENCY-HELD | D12 | ARC-01, CTR-01, AUTH-08, SEC-01, SEC-03, VER-02, VER-05, NEG-01, HOLD-01 |
| `13-§18-5` | PRIN | C-CTR | DEPENDENCY-HELD | D12 | ARC-01, CTR-01, CTR-02, VER-02, VER-05, HOLD-01 |
| `13-§19-1` | RULE | C-FDN | DEPENDENCY-HELD | D14 | ARC-01, ARC-02, AUD-01, VER-03, HOLD-03 |
| `13-§19-2` | RULE | C-FDN | DEPENDENCY-HELD | D12 | ARC-01, ARC-02, STK-06, AUD-01, VER-03, HOLD-01 |
| `13-§19-3` | RULE | C-FDN | DEPENDENCY-HELD | D12 | ARC-01, ARC-02, STK-01, AUD-01, VER-03, HOLD-01 |
| `13-§19-4` | RULE | C-FDN | DEPENDENCY-HELD | D12 | ARC-01, ARC-02, AUTH-01, AUD-01, AUD-02, VER-03, HOLD-01 |
| `13-§19-5` | RULE | C-FDN | DEPENDENCY-HELD | D13 | ARC-01, ARC-02, AI-01, AUD-01, VER-03, HOLD-02 |
| `13-§19-6` | RULE | C-FDN | DEPENDENCY-HELD | D15 | ARC-01, ARC-02, AI-02, FLR-03, AUD-01, VER-03, HOLD-05 |
| `13-§19-7` | RULE | C-FDN | DEPENDENCY-HELD | D15 | ARC-01, ARC-02, WS-09, FLR-03, AUD-01, VER-03, HOLD-05 |
| `13-§19-8` | RULE | C-FDN | DEPENDENCY-HELD | D12 | ARC-01, ARC-02, ARC-04, TXN-01, AUD-01, VER-03, HOLD-01 |
| `13-§19-9` | RULE | C-FDN | SOURCE-HELD | DPOS | ARC-01, ARC-02, ARC-03, POS-11, AUD-01, VER-03, HOLD-07 |
| `13-§19-10` | RULE | C-FDN | DEPENDENCY-HELD | D15; DNTF | ARC-01, ARC-02, RO-06, FLR-03, AUD-01, VER-03, HOLD-05, HOLD-13 |
| `13-§20-1` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, POS-10, AUD-01, VER-02, NEG-01, NEG-02 |
| `13-§20-2` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, POS-10, AUD-01, VER-02, NEG-01, NEG-02 |
| `13-§20-3` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-02, AUD-01, VER-02, NEG-01, NEG-02 |
| `13-§20-4` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-04, AUD-01, VER-02, NEG-01, NEG-02 |
| `13-§20-5` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-05, AUD-01, VER-02, NEG-01, NEG-02 |
| `13-§20-6` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-05, AUD-01, VER-02, NEG-01, NEG-02 |
| `13-§20-7` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, POS-08, AUD-01, VER-02, NEG-01, NEG-02 |
| `13-§21-1` | SCN | C-ACC | SOURCE-HELD | DPOS; D12 | ARC-01, POS-05, POS-11, VER-01, VER-09, HOLD-01, HOLD-07 |
| `13-§21-2` | SCN | C-ACC | SOURCE-HELD | DPOS; D14; DTX | ARC-01, POS-11, TXN-02, TXN-03, VER-04, VER-09, HOLD-03, HOLD-04, HOLD-07 |
| `13-§21-3` | SCN | C-ACC | SOURCE-HELD | DPOS; D12; D14 | ARC-01, POS-07, POS-11, TXN-09, VER-01, VER-09, HOLD-01, HOLD-03, HOLD-07 |
| `13-§21-4` | SCN | C-ACC | SOURCE-HELD | DPOS; D12 | ARC-01, POS-06, POS-11, TXN-09, VER-01, VER-02, VER-09, HOLD-01, HOLD-07, HOLD-16 |
| `13-§21-5` | SCN | C-ACC | SOURCE-HELD | DPOS; D12 | ARC-01, POS-11, CTR-02, VER-01, VER-07, VER-09, HOLD-01, HOLD-07 |
| `13-§21-6` | SCN | C-ACC | DEPENDENCY-HELD | D12; D14 | ARC-01, CTR-03, VER-01, VER-09, HOLD-01, HOLD-03 |
| `13-§21-7` | SCN | C-ACC | DEPENDENCY-HELD | D12; D14 | ARC-01, CC-02, CC-03, VER-01, VER-09, VER-11, HOLD-01, HOLD-03, HOLD-19 |
| `13-§21-8` | SCN | C-ACC | DEPENDENCY-HELD | D13; D15 | ARC-01, AI-02, FLR-03, VER-02, VER-09, HOLD-02, HOLD-05 |
| `13-§21-9` | SCN | C-ACC | DEPENDENCY-HELD | D12 | ARC-01, AUTH-04, VER-02, VER-09, HOLD-01 |
| `13-§21-10` | SCN | C-ACC | SOURCE-HELD | DPOS | ARC-01, POS-09, POS-11, VER-01, VER-09, HOLD-07 |
| `13-§21-11` | SCN | C-ACC | SOURCE-HELD | DPOS | ARC-01, POS-10, POS-11, VER-03, VER-09, HOLD-07 |
| `13-§22-1` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-02, AUD-01, VER-02, NEG-01, NEG-02 |
| `13-§22-2` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-04, AUD-01, VER-02, NEG-01, NEG-02 |
| `13-§22-3` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, POS-10, AUD-01, VER-02, NEG-01, NEG-02 |
| `13-§22-4` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-05, AUD-01, VER-02, NEG-01, NEG-02 |
| `13-§22-5` | NEG | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-05, AUD-01, VER-02, NEG-01, NEG-02 |
| `13-§24-1` | GATE | C-ACC | SOURCE-HELD | D12; D13; D14; D15; DPOS | ARC-01, POS-11, FLR-03, VER-08, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07 |
| `17-§1-1` | EXP | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUTH-01, WS-01, WS-08, VER-05 |
| `17-§1-2` | RULE | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, ARC-06, AUTH-01, WS-01, VER-03 |
| `17-§2-9` | PRIN | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUTH-01, WS-01, WS-08, VER-05 |
| `17-§3-1` | PRIN | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUTH-01, WS-01, WS-08, VER-03, VER-05 |
| `17-§3-2` | PRIN | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, ARC-06, AUTH-01, WS-01, WS-08, VER-03, VER-05 |
| `17-§3-3` | PRIN | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUTH-01, AUTH-04, WS-01, WS-08, VER-03, VER-05 |
| `17-§3-4` | PRIN | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, AUTH-04, WS-01, WS-08, VER-03, VER-05, HOLD-01 |
| `17-§3-5` | PRIN | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, AUTH-01, WS-01, WS-08, VER-03, VER-05, HOLD-01, HOLD-03 |
| `17-§3-6` | PRIN | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUTH-01, WS-01, WS-07, WS-08, VER-03, VER-05 |
| `17-§3-7` | PRIN | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUTH-01, WS-01, WS-08, VER-03, VER-05 |
| `17-§4-1` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-02, VER-01, OPT-01, HOLD-01 |
| `17-§4-2` | OBL | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, AUTH-01, WS-01, WS-02, WS-11, VER-01, OPT-01, HOLD-01, HOLD-03 |
| `17-§4-3` | CONS | C-WS | DEPENDENCY-HELD | D12; D16 | ARC-01, AUTH-01, WS-01, WS-02, WS-11, VER-01, OPT-01, HOLD-01, HOLD-06 |
| `17-§4-4` | OBL | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, AUTH-01, WS-01, WS-02, WS-11, VER-01, HOLD-01, HOLD-03 |
| `17-§4-5` | OBL | C-WS | DEPENDENCY-HELD | D12; D15 | ARC-01, AUTH-01, WS-01, WS-02, FLR-03, VER-01, OPT-01, HOLD-01, HOLD-05 |
| `17-§4-6` | OBL | C-WS | DEPENDENCY-HELD | D12; D15 | ARC-01, AUTH-01, AI-02, WS-01, WS-02, WS-09, FLR-03, VER-01, HOLD-01, HOLD-05 |
| `17-§4-7` | OBL | C-WS | DEPENDENCY-HELD | D12; D15 | ARC-01, AUTH-01, WS-01, WS-02, WS-09, FLR-03, VER-01, HOLD-01, HOLD-05 |
| `17-§4-8` | OBL | C-WS | DEPENDENCY-HELD | D12; DENT | ARC-01, AUTH-01, WS-01, WS-02, WS-10, VER-01, HOLD-01, HOLD-09 |
| `17-§4-9` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-02, VER-01, HOLD-01 |
| `17-§4-10` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-02, VER-01, HOLD-01 |
| `17-§4-11` | OBL | C-WS | SOURCE-HELD | D12; DPOS | ARC-01, POS-11, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-07 |
| `17-§4-12` | OBL | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-03 |
| `17-§4-13` | OBL | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, AUTH-01, WS-01, WS-02, VER-01, OPT-01, HOLD-01, HOLD-03 |
| `17-§4-14` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, AUTH-03, WS-01, WS-02, VER-01, OPT-01, HOLD-01 |
| `17-§4-16` | RULE | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-02, WS-08, VER-03, HOLD-01 |
| `17-§6-1` | OBL | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, AUTH-01, AUTH-03, WS-01, WS-02, VER-01, OPT-01, HOLD-01, HOLD-03 |
| `17-§6-2` | OBL | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, AUTH-01, AUTH-03, WS-01, WS-02, VER-01, OPT-01, HOLD-01, HOLD-03 |
| `17-§6-3` | CONS | C-WS | DEPENDENCY-HELD | D12; D16 | ARC-01, AUTH-01, WS-01, WS-02, WS-11, VER-01, OPT-01, HOLD-01, HOLD-06 |
| `17-§6-4` | OBL | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, AUTH-01, WS-01, WS-02, VER-01, OPT-01, HOLD-01, HOLD-03 |
| `17-§6-5` | CONS | C-WS | DEPENDENCY-HELD | D12; D16; DPAY | ARC-01, AUTH-01, WS-01, WS-02, WS-11, VER-01, OPT-01, HOLD-01, HOLD-06, HOLD-14 |
| `17-§6-6` | OBL | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, AUTH-01, WS-01, WS-02, VER-01, OPT-01, HOLD-01, HOLD-03 |
| `17-§6-7` | RULE | C-WS | DEPENDENCY-HELD | D12; DENT | ARC-01, AUTH-01, WS-01, WS-02, WS-03, WS-10, VER-02, VER-03, HOLD-01, HOLD-09 |
| `17-§6-8` | NEG | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, AUTH-01, WS-01, WS-02, WS-03, VER-02, NEG-01, HOLD-01, HOLD-03 |
| `17-§7-1` | OBL | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, STK-07, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-03 |
| `17-§7-2` | OBL | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, SIG-03, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-03 |
| `17-§7-3` | OBL | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, STK-03, SIG-04, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-03 |
| `17-§7-4` | OBL | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, SIG-03, SIG-04, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-03 |
| `17-§7-5` | OBL | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, SUP-05, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-03 |
| `17-§7-6` | OBL | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, RO-01, AUTH-01, WS-01, WS-02, VER-01, VER-06, HOLD-01, HOLD-03 |
| `17-§7-7` | OBL | C-WS | DEPENDENCY-HELD | D12; D14; DNTF | ARC-01, SUP-05, RO-04, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-03, HOLD-13 |
| `17-§7-8` | NEG | C-WS | DEPENDENCY-HELD | D12; D14 | ARC-01, STK-01, AUTH-01, WS-01, WS-02, VER-02, VER-03, NEG-01, HOLD-01, HOLD-03 |
| `17-§8-1` | OBL | C-WS | SOURCE-HELD | D12; DPOS | ARC-01, POS-11, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-07 |
| `17-§8-2` | OBL | C-WS | SOURCE-HELD | D12; DPOS | ARC-01, POS-11, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-07 |
| `17-§8-3` | OBL | C-WS | SOURCE-HELD | D12; DPOS | ARC-01, POS-11, CTR-01, AUTH-01, WS-01, WS-02, VER-01, VER-07, HOLD-01, HOLD-07 |
| `17-§8-4` | OBL | C-WS | SOURCE-HELD | D12; DPOS | ARC-01, POS-11, CC-01, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-07 |
| `17-§8-5` | OBL | C-WS | SOURCE-HELD | D12; DPOS | ARC-01, POS-11, CC-01, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-07 |
| `17-§8-6` | NEG | C-WS | SOURCE-HELD | D12; DPOS | ARC-01, POS-11, CTR-02, AUTH-01, WS-01, WS-02, VER-02, VER-05, VER-07, NEG-01, HOLD-01, HOLD-07 |
| `17-§15-1` | RULE | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-04, VER-05, HOLD-01 |
| `17-§15-2` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-04, VER-01, OPT-01, HOLD-01 |
| `17-§15-3` | OBL | C-WS | DEPENDENCY-HELD | D12; DENT | ARC-01, AUTH-01, WS-01, WS-04, WS-10, VER-01, OPT-01, HOLD-01, HOLD-09 |
| `17-§15-4` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-04, VER-01, HOLD-01 |
| `17-§15-5` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-04, VER-01, OPT-01, HOLD-01 |
| `17-§15-6` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-04, VER-01, OPT-01, HOLD-01 |
| `17-§15-7` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-04, VER-05, OPT-01, HOLD-01 |
| `17-§15-8` | NEG | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUTH-01, WS-01, WS-04, VER-02, VER-05, NEG-01 |
| `17-§16-2` | RULE | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUTH-01, WS-01, WS-07, VER-03 |
| `17-§16-3` | RULE | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUTH-01, WS-01, WS-07, MIG-05, VER-03, VER-10 |
| `17-§17-1` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-05, VER-01, VER-02, HOLD-01 |
| `17-§17-2` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-05, VER-01, VER-02, HOLD-01 |
| `17-§17-3` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, TXN-11, AUTH-01, AUTH-06, WS-01, WS-05, VER-01, VER-02, HOLD-01 |
| `17-§17-4` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-05, VER-01, VER-02, HOLD-01 |
| `17-§17-5` | OBL | C-WS | SOURCE-HELD | D12; DPOS | ARC-01, POS-11, AUTH-01, WS-01, WS-05, VER-01, VER-02, HOLD-01, HOLD-07 |
| `17-§17-6` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-03, WS-05, VER-01, VER-02, HOLD-01 |
| `17-§17-7` | OBL | C-WS | SOURCE-HELD | D12; D14; DPOS | ARC-01, POS-11, TXN-08, AUTH-01, WS-01, WS-05, VER-01, VER-02, HOLD-01, HOLD-03, HOLD-07 |
| `17-§17-8` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-05, VER-01, VER-02, HOLD-01 |
| `17-§17-9` | RULE | C-WS | DEPENDENCY-HELD | D12 | ARC-01, TXN-12, AUTH-01, WS-01, WS-05, VER-01, VER-02, HOLD-01 |
| `17-§18-3` | NEG | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, AUTH-05, WS-01, VER-02, NEG-01, HOLD-01 |
| `17-§18-5` | NEG | C-WS | DEPENDENCY-HELD | D12 | ARC-01, CTR-06, AUTH-01, WS-01, PRIV-02, VER-02, VER-05, NEG-01, HOLD-01, HOLD-20 |
| `17-§19-1` | OBL | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, WS-06, VER-01, HOLD-01 |
| `17-§19-2` | NEG | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, AUTH-08, WS-01, WS-06, SEC-03, VER-02, NEG-01, HOLD-01 |
| `17-§20-1` | RULE | C-FDN | DEPENDENCY-HELD | D14 | ARC-01, ARC-02, AUD-01, VER-03, HOLD-03 |
| `17-§20-2` | RULE | C-FDN | DEPENDENCY-HELD | D12 | ARC-01, ARC-02, AUTH-01, AUD-01, VER-03, HOLD-01 |
| `17-§20-3` | RULE | C-FDN | DEPENDENCY-HELD | D13 | ARC-01, ARC-02, AI-01, AUD-01, VER-03, HOLD-02 |
| `17-§20-4` | RULE | C-FDN | DEPENDENCY-HELD | D13 | ARC-01, ARC-02, AI-01, AUD-01, VER-03, HOLD-02 |
| `17-§20-5` | RULE | C-FDN | DEPENDENCY-HELD | D15 | ARC-01, ARC-02, AI-02, FLR-03, AUD-01, VER-03, HOLD-05 |
| `17-§20-6` | RULE | C-FDN | DEPENDENCY-HELD | D15 | ARC-01, ARC-02, WS-09, FLR-03, AUD-01, VER-03, HOLD-05 |
| `17-§20-7` | RULE | C-FDN | DEPENDENCY-HELD | D14 | ARC-01, ARC-02, DOC-01, AUD-01, VER-03, HOLD-03 |
| `17-§20-8` | RULE | C-FDN | DEPENDENCY-HELD | D15 | ARC-01, ARC-02, RO-06, FLR-03, AUD-01, VER-03, HOLD-05 |
| `17-§20-9` | RULE | C-FDN | DEPENDENCY-HELD | D12 | ARC-01, ARC-02, STK-01, STK-06, AUD-01, VER-03, HOLD-01 |
| `17-§20-10` | RULE | C-FDN | SOURCE-HELD | DPOS | ARC-01, ARC-02, POS-11, AUD-01, VER-03, HOLD-07 |
| `17-§20-11` | RULE | C-FDN | DEPENDENCY-HELD | D12 | ARC-01, ARC-02, SUP-01, AUTH-08, AUD-01, VER-03, HOLD-01 |
| `17-§20-12` | RULE | C-FDN | DEPENDENCY-HELD | D12; D15 | ARC-01, ARC-02, ARC-04, FLR-03, AUD-01, VER-03, HOLD-01, HOLD-05 |
| `17-§21-1` | NEG | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUTH-01, WS-01, WS-08, VER-03, NEG-01, NEG-02 |
| `17-§21-2` | NEG | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUTH-01, WS-01, WS-08, VER-05, NEG-01, NEG-02 |
| `17-§21-3` | NEG | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUTH-01, WS-01, VER-02, VER-03, NEG-01, NEG-02 |
| `17-§21-5` | NEG | C-WS | DEPENDENCY-HELD | D13 | ARC-01, ARC-06, AUTH-01, WS-01, VER-03, NEG-01, NEG-02, HOLD-02 |
| `17-§22-1` | SCN | C-ACC | DEPENDENCY-HELD | D12; D14 | ARC-01, WS-01, VER-01, VER-09, HOLD-01, HOLD-03 |
| `17-§22-5` | SCN | C-ACC | SOURCE-HELD | D12; D14; DPOS | ARC-01, ARC-02, POS-11, WS-01, VER-01, VER-03, VER-09, HOLD-01, HOLD-03, HOLD-07 |
| `17-§22-6` | SCN | C-ACC | SOURCE-HELD | D12; DPOS | ARC-01, POS-11, WS-05, VER-01, VER-09, HOLD-01, HOLD-07 |
| `17-§22-10b` | SCN | C-ACC | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, WS-07, VER-01, VER-03, VER-09 |
| `17-§23-2` | NEG | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUTH-01, WS-01, VER-03, NEG-01, NEG-02 |
| `17-§23-3` | NEG | C-WS | DEPENDENCY-HELD | D12 | ARC-01, AUTH-01, WS-01, SEC-01, SEC-02, VER-02, NEG-01, NEG-02, HOLD-01 |
| `17-§23-4` | NEG | C-WS | DEPENDENCY-HELD | D13 | ARC-01, ARC-06, AUTH-01, WS-01, VER-03, NEG-01, NEG-02, HOLD-02 |
| `17-§25-1` | GATE | C-ACC | SOURCE-HELD | D12; D13; D14; D15; DPOS | ARC-01, POS-11, FLR-03, VER-08, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07 |
| `3-§9-3` | OBL | C-SUP | DEPENDENCY-HELD | D12; D14 | ARC-01, SUP-01, AUTH-01, VER-01, HOLD-01, HOLD-03 |
| `3-§11-6` | OBL | C-SUP | DEPENDENCY-HELD | D12; D14 | ARC-01, SUP-01, SUP-07, AUTH-01, VER-02, HOLD-01, HOLD-03 |
| `3-§15-7` | RULE | C-SUP | DEPENDENCY-HELD | D12; D14 | ARC-01, SUP-01, AUTH-01, VER-03, HOLD-01, HOLD-03 |
| `3-§15-10` | RULE | C-STK | DEPENDENCY-HELD | D14; DTX | ARC-01, STK-01, TXN-02, TXN-03, VER-03, VER-04, VER-12, HOLD-03, HOLD-04 |
| `3-§15-11` | RULE | C-POS | SOURCE-HELD | D14; DTX; DPOS | ARC-01, POS-01, POS-11, POS-12, TXN-02, TXN-03, TXN-09, VER-03, VER-04, HOLD-03, HOLD-04, HOLD-07 |
| `5-§4-10` | OBL | C-DOC | DEPENDENCY-HELD | D12; D14 | ARC-01, DOC-01, VER-01, HOLD-01, HOLD-03 |
| `9-§12-8` | OBL | C-AUTH | DEPENDENCY-HELD | D13; DAI | ARC-01, AUTH-01, AI-01, AI-04, AI-06, VER-01, HOLD-02, HOLD-11 |
| `10-§13-6` | OBL | C-RO | DEPENDENCY-HELD | D12; D13 | ARC-01, RO-01, RO-03, AUTH-01, VER-01, VER-06, HOLD-01, HOLD-02 |
| `12-§4-4` | OBL | C-AUTH | DEPENDENCY-HELD | D13; DV | ARC-01, AUTH-01, AI-01, AI-03, VER-01, HOLD-02, HOLD-12 |
| `12-§7-7` | OBL | C-RO | DEPENDENCY-HELD | D13; DV | ARC-01, RO-01, RO-07, AUTH-01, AI-03, AI-06, VER-01, HOLD-02, HOLD-12 |
| `22-§17-2` | RULE | C-POS | SOURCE-HELD | DPOS; D12 | ARC-01, ARC-03, POS-01, POS-02, POS-11, VER-03, HOLD-01, HOLD-07 |
| `24-§18-3` | SCN | C-RO | DEPENDENCY-HELD | D13; D15; DSCH; DNTF | ARC-01, RO-01, RO-06, CC-04, AUTH-01, FLR-03, VER-01, VER-06, VER-09, HOLD-02, HOLD-05, HOLD-10, HOLD-13 |
| `24-§21-3` | OBL | C-RO | DEPENDENCY-HELD | D12; D13 | ARC-01, RO-01, RO-03, AUTH-01, VER-01, VER-02, HOLD-01, HOLD-02 |
| `BP-§3-1` | PRIN | C-CTR | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, CTR-01, CTR-02, VER-05 |
| `BP-§5.3-1` | RULE | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, ARC-05, AUD-01, MIG-01, MIG-03, MIG-04, VER-03, VER-10 |
| `BP-§5.4-1` | RULE | C-POS | SOURCE-HELD | DPOS | ARC-01, ARC-03, POS-01, POS-02, POS-03, POS-11, VER-03, HOLD-07, HOLD-15 |
| `BP-§6.1-1` | NEG | C-AUTH | DEPENDENCY-HELD | D12 | ARC-01, ARC-03, AUTH-01, AI-01, VER-02, NEG-01, HOLD-01 |
| `BP-§6.2-1` | RULE | C-FDN | DEPENDENCY-HELD | D12; D13; DTX | ARC-01, ARC-04, TXN-03, AUD-01, SEC-02, VER-01, VER-03, HOLD-01, HOLD-02, HOLD-04, HOLD-17 |
| `BP-§6.3-1` | RULE | C-FDN | DEPENDENCY-HELD | D14 | ARC-01, ARC-03, AUD-01, SEC-01, SEC-04, MIG-04, VER-03, HOLD-03 |
| `BP-§6.5-1` | RULE | C-RO | DEPENDENCY-HELD | D15; DSCH | ARC-01, RO-01, RO-06, CC-04, AUTH-01, FLR-03, VER-03, HOLD-05, HOLD-10 |
| `BP-§6.6-1` | RULE | C-POS | SOURCE-HELD | DPOS | ARC-01, ARC-06, POS-01, POS-11, VER-03, HOLD-07 |
| `BP-§8-1` | RULE | C-AUTH | DEPENDENCY-HELD | D13 | ARC-01, ARC-06, AUTH-01, AI-01, VER-01, HOLD-02 |
| `BP-§9-6` | RULE | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, ARC-02, AUD-01, VER-03 |
| `BP-§9-AL` | RULE | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, ARC-05, AUD-01, VER-03 |
| `BP-§10.3-S2` | OBL | C-SUP | DEPENDENCY-HELD | D12; D14 | ARC-01, SUP-01, AUTH-01, VER-01, HOLD-01, HOLD-03 |
| `BP-§10.6-O` | EXP | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUTH-01, WS-01, WS-08, VER-05 |
| `BP-§10.6-W1` | WORK | C-SUP | DEPENDENCY-HELD | D12 | ARC-01, SUP-01, SUP-02, AUTH-01, VER-01, HOLD-01 |
| `BP-§10.6-W2` | WORK | C-SIG | DEPENDENCY-HELD | D14 | ARC-01, SIG-01, SIG-03, VER-01, HOLD-03 |
| `BP-§10.6-W3` | WORK | C-SIG | DEPENDENCY-HELD | D14 | ARC-01, STK-03, SIG-03, SIG-04, VER-01, HOLD-03 |
| `BP-§10.6-W4` | WORK | C-RO | DEPENDENCY-HELD | D13; D14 | ARC-01, RO-01, AUTH-01, VER-01, HOLD-02, HOLD-03 |
| `BP-§10.6-W5` | WORK | C-RO | DEPENDENCY-HELD | D12; D13 | ARC-01, RO-01, RO-03, AUTH-01, VER-01, HOLD-01, HOLD-02 |
| `BP-§10.6-W6` | WORK | C-RO | DEPENDENCY-HELD | D12; D15; DSCH | ARC-01, RO-01, RO-05, CC-04, AUTH-01, AUTH-02, FLR-03, VER-01, HOLD-01, HOLD-05, HOLD-10 |
| `BP-§10.6-W7` | WORK | C-POS | SOURCE-HELD | DPOS | ARC-01, POS-01, POS-11, VER-01, HOLD-07, HOLD-21 |
| `BP-§10.6-W8` | WORK | C-CTR | SOURCE-HELD | DPOS; D12 | ARC-01, POS-11, CTR-01, CTR-02, VER-01, HOLD-01, HOLD-07 |
| `BP-§10.6-W9` | WORK | C-CC | DEPENDENCY-HELD | D12; D14 | ARC-01, CC-01, VER-01, HOLD-01, HOLD-03 |
| `BP-§10.6-W10` | WORK | C-SUP | DEPENDENCY-HELD | D12 | ARC-01, SUP-01, AUTH-01, WS-08, VER-01, HOLD-01 |
| `BP-§10.6-W11` | WORK | C-STK | DEPENDENCY-HELD | D12 | ARC-01, STK-01, STK-06, VER-01, VER-12, HOLD-01 |
| `BP-§10.6-W12` | WORK | C-SUP | DEPENDENCY-HELD | D14 | ARC-01, STK-08, SUP-01, DOC-01, AUTH-01, VER-01, HOLD-03 |
| `BP-§10.6-E1` | EXP | C-POS | SOURCE-HELD | DPOS | ARC-01, POS-01, POS-11, POS-12, VER-05, VER-07, HOLD-07 |
| `BP-§10.6-E2` | EXP | C-CTR | SOURCE-HELD | DPOS | ARC-01, POS-11, CTR-01, CTR-02, VER-05, VER-07, HOLD-07 |
| `BP-§10.6-E3` | EXP | C-STK | DEPENDENCY-HELD | D12 | ARC-01, STK-01, STK-06, VER-05, VER-12, HOLD-01 |
| `BP-§10.6-A1` | FRV | C-ACC | DEPENDENCY-HELD | D12; D14 | ARC-01, SIG-01, VER-06, HOLD-01, HOLD-03 |
| `BP-§10.6-A2` | FRV | C-ACC | DEPENDENCY-HELD | D12; D13; D14 | ARC-01, RO-01, VER-06, HOLD-01, HOLD-02, HOLD-03 |
| `BP-§10.6-A3` | FRV | C-ACC | DEPENDENCY-HELD | D12; D15 | ARC-01, RO-03, FLR-03, VER-06, HOLD-01, HOLD-05 |
| `BP-§10.6-A4` | FRV | C-ACC | DEPENDENCY-HELD | D12 | ARC-01, STK-06, RO-04, VER-06, HOLD-01 |
| `BP-§10.6-B1` | FRV | C-ACC | SOURCE-HELD | DPOS | ARC-01, POS-01, POS-11, VER-07, HOLD-07, HOLD-21, HOLD-22 |
| `BP-§10.6-B2` | FRV | C-ACC | SOURCE-HELD | DPOS | ARC-01, POS-11, CTR-02, VER-07, HOLD-07, HOLD-22 |
| `BP-§10.6-X` | EXP | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUTH-01, WS-01, WS-08, VER-05 |
| `BP-§11-6` | RULE | C-RO | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, RO-01, RO-08, AUTH-01, VER-03 |
| `BP-§11-7` | RULE | C-STK | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, ARC-05, STK-01, VER-03, VER-12 |
| `BP-§13-1` | RULE | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUD-01, VER-08 |
| `BP-§13-9` | RULE | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, AUD-01, VER-08 |
| `BP-§14-1` | RULE | C-FDN | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, ARC-05, AUD-01, VER-03 |
| `GPCV-§11-2` | NEG | C-DOC | DEPENDENCY-HELD | D14 | ARC-01, DOC-01, DOC-03, VER-03, NEG-01, HOLD-03 |
| `GPCV-R7` | RULE | C-STK | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, ARC-02, ARC-05, STK-01, VER-08, VER-12 |
| `GPCV-R13` | RULE | C-POS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, ARC-02, ARC-05, POS-01, VER-08 |
| `GPCV-R17` | RULE | C-WS | DESIGN ACCEPTED — EVIDENCE HOLD | — | ARC-01, ARC-02, ARC-05, AUTH-01, WS-01, VER-08 |

### 30.3 EIS requirement to FCTM rows

Rows are listed when 20 or fewer; larger sets are exactly the rows citing the requirement in the previous table.

| Requirement | Section | FCTM rows | Rows |
|---|---|---|---|
| `EIS17-ARC-01` | 6 | 404 | see the previous table |
| `EIS17-ARC-02` | 6 | 36 | see the previous table |
| `EIS17-ARC-03` | 6 | 7 | `7-§12-9`, `13-§5-4`, `13-§19-9`, `22-§17-2`, `BP-§5.4-1`, `BP-§6.1-1`, `BP-§6.3-1` |
| `EIS17-ARC-04` | 6 | 6 | `7-§8-1`, `7-§12-8`, `13-§15-8`, `13-§19-8`, `17-§20-12`, `BP-§6.2-1` |
| `EIS17-ARC-05` | 6 | 7 | `BP-§5.3-1`, `BP-§9-AL`, `BP-§11-7`, `BP-§14-1`, `GPCV-R7`, `GPCV-R13`, `GPCV-R17` |
| `EIS17-ARC-06` | 6 | 7 | `13-§5-2`, `17-§1-2`, `17-§3-2`, `17-§21-5`, `17-§23-4`, `BP-§6.6-1`, `BP-§8-1` |
| `EIS17-STK-01` | 7 | 28 | see the previous table |
| `EIS17-STK-02` | 7 | 6 | `7-§2-3`, `7-§2-9`, `7-§2-12`, `7-§8-2`, `7-§8-3`, `13-§4-8` |
| `EIS17-STK-03` | 7 | 5 | `7-§2-7`, `7-§2-12`, `7-§4-6`, `17-§7-3`, `BP-§10.6-W3` |
| `EIS17-STK-04` | 7 | 5 | `7-§2-2`, `7-§2-12`, `7-§13-4`, `13-§7-2`, `13-§16-4` |
| `EIS17-STK-05` | 7 | 5 | `7-§2-5`, `7-§8-4`, `7-§11-2.3`, `7-§13-6`, `7-§15-3` |
| `EIS17-STK-06` | 7 | 8 | `7-§2-1`, `7-§2-10`, `7-§12-1`, `13-§19-2`, `17-§20-9`, `BP-§10.6-W11`, `BP-§10.6-E3`, `BP-§10.6-A4` |
| `EIS17-STK-07` | 7 | 7 | `7-§1-1`, `7-§1-2`, `7-§2-3`, `7-§2-11`, `7-§11-1.1`, `7-§15-1`, `17-§7-1` |
| `EIS17-STK-08` | 7 | 3 | `7-§2-4`, `7-§15-1`, `BP-§10.6-W12` |
| `EIS17-STK-09` | 7 | 2 | `7-§13-5`, `7-§13-13` |
| `EIS17-SIG-01` | 8 | 6 | `7-§2-6`, `7-§4-4`, `7-§15-4`, `7-§16-6`, `BP-§10.6-W2`, `BP-§10.6-A1` |
| `EIS17-SIG-02` | 8 | 3 | `7-§2-6`, `7-§11-1.2`, `7-§16-6` |
| `EIS17-SIG-03` | 8 | 12 | `7-§2-6`, `7-§2-7`, `7-§2-8`, `7-§2-9`, `7-§11-1.2`, `7-§15-4`, `7-§15-5`, `7-§16-6`, `17-§7-2`, `17-§7-4`, `BP-§10.6-W2`, `BP-§10.6-W3` |
| `EIS17-SIG-04` | 8 | 6 | `7-§2-7`, `7-§2-9`, `7-§15-5`, `17-§7-3`, `17-§7-4`, `BP-§10.6-W3` |
| `EIS17-SUP-01` | 9 | 18 | `7-§3-1`, `7-§3-2`, `7-§3-3`, `7-§3-4`, `7-§3-5`, `7-§3-6`, `7-§3-7`, `7-§3-8`, `7-§3-9`, `7-§12-5`, `17-§20-11`, `3-§9-3`, `3-§11-6`, `3-§15-7`, `BP-§10.3-S2`, `BP-§10.6-W1`, `BP-§10.6-W10`, `BP-§10.6-W12` |
| `EIS17-SUP-02` | 9 | 4 | `7-§3-3`, `7-§3-8`, `7-§11-1.4`, `BP-§10.6-W1` |
| `EIS17-SUP-03` | 9 | 2 | `7-§3-5`, `7-§4-5` |
| `EIS17-SUP-04` | 9 | 2 | `7-§3-4`, `7-§15-6` |
| `EIS17-SUP-05` | 9 | 3 | `7-§3-6`, `17-§7-5`, `17-§7-7` |
| `EIS17-SUP-06` | 9 | 2 | `7-§3-7`, `7-§8-5` |
| `EIS17-SUP-07` | 9 | 3 | `7-§3-9`, `7-§11-2.5`, `3-§11-6` |
| `EIS17-RO-01` | 10 | 34 | see the previous table |
| `EIS17-RO-02` | 10 | 3 | `7-§4-7`, `7-§11-2.1`, `7-§13-7` |
| `EIS17-RO-03` | 10 | 7 | `7-§5-1`, `7-§11-2.4`, `7-§15-7`, `10-§13-6`, `24-§21-3`, `BP-§10.6-W5`, `BP-§10.6-A3` |
| `EIS17-RO-04` | 10 | 5 | `7-§3-6`, `7-§5-1`, `7-§13-8`, `17-§7-7`, `BP-§10.6-A4` |
| `EIS17-RO-05` | 10 | 6 | `7-§5-2`, `7-§5-3`, `7-§5-4`, `7-§13-12`, `7-§15-8`, `BP-§10.6-W6` |
| `EIS17-RO-06` | 10 | 5 | `7-§12-4`, `13-§19-10`, `17-§20-8`, `24-§18-3`, `BP-§6.5-1` |
| `EIS17-RO-07` | 10 | 7 | `7-§11-1.1`, `7-§11-1.2`, `7-§11-1.3`, `7-§11-1.4`, `7-§11-1.5`, `7-§11-1.6`, `12-§7-7` |
| `EIS17-RO-08` | 10 | 1 | `BP-§11-6` |
| `EIS17-DOC-01` | 11 | 9 | `7-§6-1`, `7-§6-3`, `7-§6-4b`, `7-§6-5b`, `7-§12-6`, `17-§20-7`, `5-§4-10`, `BP-§10.6-W12`, `GPCV-§11-2` |
| `EIS17-DOC-02` | 11 | 5 | `7-§6-4b`, `7-§6-5b`, `7-§13-1`, `7-§13-10`, `7-§15-2b` |
| `EIS17-DOC-03` | 11 | 1 | `GPCV-§11-2` |
| `EIS17-DOC-04` | 11 | 1 | `7-§6-3` |
| `EIS17-POS-01` | 12 | 41 | see the previous table |
| `EIS17-POS-02` | 12 | 6 | `13-§4-1`, `13-§5-3`, `13-§16-8`, `13-§17-1`, `22-§17-2`, `BP-§5.4-1` |
| `EIS17-POS-03` | 12 | 2 | `13-§16-8`, `BP-§5.4-1` |
| `EIS17-POS-04` | 12 | 5 | `13-§4-5`, `13-§4-6`, `13-§4-7`, `13-§5-5`, `13-§5-6` |
| `EIS17-POS-05` | 12 | 7 | `13-§4-2`, `13-§4-3`, `13-§6-2`, `13-§17-2`, `13-§17-4`, `13-§17-5`, `13-§21-1` |
| `EIS17-POS-06` | 12 | 8 | `7-§13-2`, `7-§13-3`, `13-§4-4`, `13-§7-1`, `13-§16-3`, `13-§16-4`, `13-§17-3`, `13-§21-4` |
| `EIS17-POS-07` | 12 | 7 | `7-§7-2`, `13-§4-8`, `13-§7-1`, `13-§7-2`, `13-§7-3`, `13-§7-4`, `13-§21-3` |
| `EIS17-POS-08` | 12 | 2 | `13-§4-10`, `13-§20-7` |
| `EIS17-POS-09` | 12 | 5 | `7-§7-1`, `13-§16-1`, `13-§16-7`, `13-§16-12`, `13-§21-10` |
| `EIS17-POS-10` | 12 | 10 | `7-§7-3`, `7-§16-3`, `13-§3-1`, `13-§3-2`, `13-§3-7`, `13-§5-1`, `13-§20-1`, `13-§20-2`, `13-§21-11`, `13-§22-3` |
| `EIS17-POS-11` | 12 | 101 | see the previous table |
| `EIS17-POS-12` | 12 | 7 | `7-§7-2`, `7-§15-9`, `13-§1-1`, `13-§1-2`, `13-§4-9`, `3-§15-11`, `BP-§10.6-E1` |
| `EIS17-TXN-01` | 13 | 7 | `7-§12-8`, `13-§6-1`, `13-§6-2`, `13-§6-5`, `13-§17-2`, `13-§17-6`, `13-§19-8` |
| `EIS17-TXN-02` | 13 | 21 | see the previous table |
| `EIS17-TXN-03` | 13 | 13 | `7-§2-10`, `7-§3-7`, `7-§8-1`, `7-§8-2`, `7-§8-3`, `7-§8-5`, `13-§4-8`, `13-§6-6`, `13-§10-4`, `13-§21-2`, `3-§15-10`, `3-§15-11`, `BP-§6.2-1` |
| `EIS17-TXN-04` | 13 | 3 | `7-§2-10`, `7-§8-1`, `13-§17-7` |
| `EIS17-TXN-05` | 13 | 2 | `7-§13-11`, `13-§17-6` |
| `EIS17-TXN-06` | 13 | 5 | `7-§2-5`, `7-§13-6`, `13-§6-3`, `13-§16-6`, `13-§17-7` |
| `EIS17-TXN-07` | 13 | 1 | `13-§16-5` |
| `EIS17-TXN-08` | 13 | 7 | `7-§7-4`, `7-§13-9`, `7-§16-5`, `13-§6-1`, `13-§7-5`, `13-§16-11`, `17-§17-7` |
| `EIS17-TXN-09` | 13 | 7 | `7-§8-3`, `13-§4-2`, `13-§6-6`, `13-§7-3`, `13-§21-3`, `13-§21-4`, `3-§15-11` |
| `EIS17-TXN-10` | 13 | 3 | `7-§3-7`, `7-§8-2`, `7-§8-5` |
| `EIS17-TXN-11` | 13 | 3 | `7-§13-6`, `13-§17-6`, `17-§17-3` |
| `EIS17-TXN-12` | 13 | 3 | `7-§13-13`, `13-§16-12`, `17-§17-9` |
| `EIS17-CTR-01` | 14 | 45 | see the previous table |
| `EIS17-CTR-02` | 14 | 23 | see the previous table |
| `EIS17-CTR-03` | 14 | 9 | `13-§9-1`, `13-§9-2`, `13-§9-3`, `13-§9-4`, `13-§9-5`, `13-§9-6`, `13-§9-7`, `13-§17-10`, `13-§21-6` |
| `EIS17-CTR-04` | 14 | 11 | `13-§3-5`, `13-§15-1`, `13-§15-2`, `13-§15-3`, `13-§15-4`, `13-§15-5`, `13-§15-6`, `13-§15-7`, `13-§15-8`, `13-§20-4`, `13-§22-2` |
| `EIS17-CTR-05` | 14 | 4 | `13-§20-5`, `13-§20-6`, `13-§22-4`, `13-§22-5` |
| `EIS17-CTR-06` | 14 | 5 | `13-§4-7`, `13-§13-3`, `13-§17-8`, `13-§18-3`, `17-§18-5` |
| `EIS17-CTR-07` | 14 | 2 | `13-§3-6`, `13-§17-9` |
| `EIS17-CC-01` | 15 | 19 | `13-§10-1`, `13-§10-2`, `13-§10-3`, `13-§10-4`, `13-§10-5`, `13-§10-6`, `13-§10-7`, `13-§10-8`, `13-§11-1`, `13-§11-2`, `13-§11-3`, `13-§11-4`, `13-§11-5`, `13-§11-6`, `13-§11-7`, `13-§17-11`, `17-§8-4`, `17-§8-5`, `BP-§10.6-W9` |
| `EIS17-CC-02` | 15 | 11 | `13-§10-1`, `13-§10-2`, `13-§10-3`, `13-§10-4`, `13-§10-5`, `13-§10-6`, `13-§10-7`, `13-§10-8`, `13-§16-9`, `13-§16-10`, `13-§21-7` |
| `EIS17-CC-03` | 15 | 5 | `13-§10-1`, `13-§10-4`, `13-§10-7`, `13-§16-7`, `13-§21-7` |
| `EIS17-CC-04` | 15 | 14 | `7-§5-2`, `7-§12-4`, `7-§15-8`, `13-§10-3`, `13-§10-4`, `13-§11-1`, `13-§11-2`, `13-§11-3`, `13-§11-4`, `13-§11-5`, `13-§11-6`, `24-§18-3`, `BP-§6.5-1`, `BP-§10.6-W6` |
| `EIS17-CC-05` | 15 | 3 | `13-§10-6`, `13-§10-7`, `13-§10-8` |
| `EIS17-CC-06` | 15 | 2 | `13-§17-11`, `13-§17-12` |
| `EIS17-CC-07` | 15 | 7 | `13-§11-1`, `13-§11-2`, `13-§11-3`, `13-§11-4`, `13-§11-5`, `13-§11-6`, `13-§11-7` |
| `EIS17-AUTH-01` | 16 | 145 | see the previous table |
| `EIS17-AUTH-02` | 16 | 5 | `7-§5-1`, `13-§10-6`, `13-§13-1`, `13-§13-2`, `BP-§10.6-W6` |
| `EIS17-AUTH-03` | 16 | 5 | `7-§3-5`, `7-§4-5`, `17-§4-14`, `17-§6-1`, `17-§6-2` |
| `EIS17-AUTH-04` | 16 | 6 | `7-§11-2.5`, `13-§11-7`, `13-§13-3`, `13-§21-9`, `17-§3-3`, `17-§3-4` |
| `EIS17-AUTH-05` | 16 | 2 | `13-§13-4`, `17-§18-3` |
| `EIS17-AUTH-06` | 16 | 2 | `7-§13-12`, `17-§17-3` |
| `EIS17-AUTH-07` | 16 | 1 | `13-§13-2` |
| `EIS17-AUTH-08` | 16 | 3 | `13-§18-4`, `17-§19-2`, `17-§20-11` |
| `EIS17-AI-01` | 17 | 19 | `7-§12-7`, `13-§12-1`, `13-§12-2`, `13-§12-3`, `13-§12-4`, `13-§12-5`, `13-§13-1`, `13-§13-2`, `13-§13-3`, `13-§13-4`, `13-§14-1a`, `13-§14-2`, `13-§19-5`, `17-§20-3`, `17-§20-4`, `9-§12-8`, `12-§4-4`, `BP-§6.1-1`, `BP-§8-1` |
| `EIS17-AI-02` | 17 | 9 | `13-§12-1`, `13-§12-2`, `13-§12-3`, `13-§12-4`, `13-§12-5`, `13-§19-6`, `13-§21-8`, `17-§4-6`, `17-§20-5` |
| `EIS17-AI-03` | 17 | 2 | `12-§4-4`, `12-§7-7` |
| `EIS17-AI-04` | 17 | 10 | `7-§11-1.1`, `7-§11-1.2`, `7-§11-1.3`, `7-§11-1.4`, `7-§11-1.5`, `7-§11-1.6`, `7-§11-2.5`, `13-§12-5`, `13-§14-1a`, `9-§12-8` |
| `EIS17-AI-05` | 17 | 5 | `7-§11-2.1`, `7-§11-2.2`, `7-§11-2.3`, `7-§11-2.4`, `7-§11-2.5` |
| `EIS17-AI-06` | 17 | 3 | `13-§14-1a`, `9-§12-8`, `12-§7-7` |
| `EIS17-WS-01` | 18 | 82 | see the previous table |
| `EIS17-WS-02` | 18 | 37 | see the previous table |
| `EIS17-WS-03` | 18 | 3 | `17-§6-7`, `17-§6-8`, `17-§17-6` |
| `EIS17-WS-04` | 18 | 8 | `17-§15-1`, `17-§15-2`, `17-§15-3`, `17-§15-4`, `17-§15-5`, `17-§15-6`, `17-§15-7`, `17-§15-8` |
| `EIS17-WS-05` | 18 | 10 | `17-§17-1`, `17-§17-2`, `17-§17-3`, `17-§17-4`, `17-§17-5`, `17-§17-6`, `17-§17-7`, `17-§17-8`, `17-§17-9`, `17-§22-6` |
| `EIS17-WS-06` | 18 | 2 | `17-§19-1`, `17-§19-2` |
| `EIS17-WS-07` | 18 | 4 | `17-§3-6`, `17-§16-2`, `17-§16-3`, `17-§22-10b` |
| `EIS17-WS-08` | 18 | 15 | `17-§1-1`, `17-§2-9`, `17-§3-1`, `17-§3-2`, `17-§3-3`, `17-§3-4`, `17-§3-5`, `17-§3-6`, `17-§3-7`, `17-§4-16`, `17-§21-1`, `17-§21-2`, `BP-§10.6-O`, `BP-§10.6-W10`, `BP-§10.6-X` |
| `EIS17-WS-09` | 18 | 4 | `13-§19-7`, `17-§4-6`, `17-§4-7`, `17-§20-6` |
| `EIS17-WS-10` | 18 | 4 | `7-§9-2`, `17-§4-8`, `17-§6-7`, `17-§15-3` |
| `EIS17-WS-11` | 18 | 7 | `7-§3-7`, `7-§8-5`, `17-§4-2`, `17-§4-3`, `17-§4-4`, `17-§6-3`, `17-§6-5` |
| `EIS17-FLR-01` | 19 | 25 | see the previous table |
| `EIS17-FLR-02` | 19 | 2 | `7-§13-7`, `7-§13-8` |
| `EIS17-FLR-03` | 19 | 39 | see the previous table |
| `EIS17-AUD-01` | 20 | 95 | see the previous table |
| `EIS17-AUD-02` | 20 | 2 | `7-§12-3`, `13-§19-4` |
| `EIS17-AUD-03` | 20 | 4 | `13-§9-7`, `13-§17-4`, `13-§17-9`, `13-§17-10` |
| `EIS17-PRIV-01` | 21 | 2 | `13-§4-7`, `13-§18-3` |
| `EIS17-PRIV-02` | 21 | 6 | `13-§4-7`, `13-§13-3`, `13-§17-8`, `13-§18-2`, `13-§18-3`, `17-§18-5` |
| `EIS17-PRIV-03` | 21 | 2 | `13-§17-12`, `13-§18-3` |
| `EIS17-SEC-01` | 22 | 4 | `7-§12-8`, `13-§18-4`, `17-§23-3`, `BP-§6.3-1` |
| `EIS17-SEC-02` | 22 | 2 | `17-§23-3`, `BP-§6.2-1` |
| `EIS17-SEC-03` | 22 | 2 | `13-§18-4`, `17-§19-2` |
| `EIS17-SEC-04` | 22 | 1 | `BP-§6.3-1` |
| `EIS17-MIG-01` | 23 | 4 | `7-§2-9`, `7-§2-12`, `13-§17-4`, `BP-§5.3-1` |
| `EIS17-MIG-02` | 23 | 3 | `7-§2-3`, `7-§2-12`, `7-§3-4` |
| `EIS17-MIG-03` | 23 | 1 | `BP-§5.3-1` |
| `EIS17-MIG-04` | 23 | 2 | `BP-§5.3-1`, `BP-§6.3-1` |
| `EIS17-MIG-05` | 23 | 1 | `17-§16-3` |
| `EIS17-VER-01` | 24 | 219 | see the previous table |
| `EIS17-VER-02` | 24 | 109 | see the previous table |
| `EIS17-VER-03` | 24 | 102 | see the previous table |
| `EIS17-VER-04` | 24 | 21 | see the previous table |
| `EIS17-VER-05` | 24 | 44 | see the previous table |
| `EIS17-VER-06` | 24 | 18 | `7-§2-6`, `7-§4-1`, `7-§4-2`, `7-§4-3`, `7-§4-4`, `7-§4-5`, `7-§4-6`, `7-§5-1`, `7-§5-2`, `7-§11-1.3`, `7-§15-7`, `17-§7-6`, `10-§13-6`, `24-§18-3`, `BP-§10.6-A1`, `BP-§10.6-A2`, `BP-§10.6-A3`, `BP-§10.6-A4` |
| `EIS17-VER-07` | 24 | 17 | `13-§8-1`, `13-§8-2`, `13-§8-3`, `13-§8-4`, `13-§8-5`, `13-§8-6`, `13-§8-7`, `13-§8-8`, `13-§8-9`, `13-§8-10`, `13-§21-5`, `17-§8-3`, `17-§8-6`, `BP-§10.6-E1`, `BP-§10.6-E2`, `BP-§10.6-B1`, `BP-§10.6-B2` |
| `EIS17-VER-08` | 24 | 8 | `7-§18-1`, `13-§24-1`, `17-§25-1`, `BP-§13-1`, `BP-§13-9`, `GPCV-R7`, `GPCV-R13`, `GPCV-R17` |
| `EIS17-VER-09` | 24 | 39 | see the previous table |
| `EIS17-VER-10` | 24 | 2 | `17-§16-3`, `BP-§5.3-1` |
| `EIS17-VER-11` | 24 | 9 | `13-§10-1`, `13-§10-2`, `13-§10-3`, `13-§10-4`, `13-§10-5`, `13-§10-6`, `13-§10-7`, `13-§10-8`, `13-§21-7` |
| `EIS17-VER-12` | 24 | 23 | see the previous table |
| `EIS17-NEG-01` | 25 | 66 | see the previous table |
| `EIS17-NEG-02` | 25 | 25 | see the previous table |
| `EIS17-OPT-01` | 26 | 23 | see the previous table |
| `EIS17-HOLD-01` | 27 | 214 | see the previous table |
| `EIS17-HOLD-02` | 27 | 49 | see the previous table |
| `EIS17-HOLD-03` | 27 | 118 | see the previous table |
| `EIS17-HOLD-04` | 27 | 13 | `7-§2-10`, `7-§3-7`, `7-§8-1`, `7-§8-2`, `7-§8-3`, `7-§8-5`, `13-§4-8`, `13-§6-6`, `13-§10-4`, `13-§21-2`, `3-§15-10`, `3-§15-11`, `BP-§6.2-1` |
| `EIS17-HOLD-05` | 27 | 37 | see the previous table |
| `EIS17-HOLD-06` | 27 | 5 | `7-§3-7`, `7-§8-5`, `17-§4-3`, `17-§6-3`, `17-§6-5` |
| `EIS17-HOLD-07` | 27 | 101 | see the previous table |
| `EIS17-HOLD-08` | 27 | 1 | `13-§16-8` |
| `EIS17-HOLD-09` | 27 | 4 | `7-§9-2`, `17-§4-8`, `17-§6-7`, `17-§15-3` |
| `EIS17-HOLD-10` | 27 | 12 | `7-§5-2`, `7-§12-4`, `7-§15-8`, `13-§11-1`, `13-§11-2`, `13-§11-3`, `13-§11-4`, `13-§11-5`, `13-§11-6`, `24-§18-3`, `BP-§6.5-1`, `BP-§10.6-W6` |
| `EIS17-HOLD-11` | 27 | 8 | `7-§11-1.1`, `7-§11-1.2`, `7-§11-1.3`, `7-§11-1.4`, `7-§11-1.5`, `7-§11-1.6`, `13-§14-1a`, `9-§12-8` |
| `EIS17-HOLD-12` | 27 | 2 | `12-§4-4`, `12-§7-7` |
| `EIS17-HOLD-13` | 27 | 7 | `7-§3-6`, `7-§5-1`, `7-§12-7`, `7-§13-8`, `13-§19-10`, `17-§7-7`, `24-§18-3` |
| `EIS17-HOLD-14` | 27 | 1 | `17-§6-5` |
| `EIS17-HOLD-15` | 27 | 4 | `13-§4-1`, `13-§16-8`, `13-§17-1`, `BP-§5.4-1` |
| `EIS17-HOLD-16` | 27 | 4 | `13-§4-2`, `13-§6-6`, `13-§7-3`, `13-§21-4` |
| `EIS17-HOLD-17` | 27 | 4 | `7-§8-1`, `7-§8-2`, `7-§8-3`, `BP-§6.2-1` |
| `EIS17-HOLD-18` | 27 | 2 | `13-§6-3`, `13-§16-6` |
| `EIS17-HOLD-19` | 27 | 3 | `13-§10-1`, `13-§16-7`, `13-§21-7` |
| `EIS17-HOLD-20` | 27 | 5 | `13-§4-7`, `13-§13-3`, `13-§17-8`, `13-§18-3`, `17-§18-5` |
| `EIS17-HOLD-21` | 27 | 3 | `13-§5-6`, `BP-§10.6-W7`, `BP-§10.6-B1` |
| `EIS17-HOLD-22` | 27 | 3 | `7-§2-6`, `BP-§10.6-B1`, `BP-§10.6-B2` |
| `EIS17-HOLD-23` | 27 | 8 | `13-§10-1`, `13-§10-2`, `13-§10-3`, `13-§10-4`, `13-§10-5`, `13-§10-6`, `13-§10-7`, `13-§10-8` |

### 30.4 The 226 rows outside `IN SCOPE` (preserved)

Dispositions, owners and boundaries are unchanged and frozen by the Stage 8 lock. `DELEGATED` rows are consumed from their owner; `ASSIGNED TO LATER MISSION` rows are not built here; `OUT OF BUILD SCOPE` rows must not appear (`EIS17-NEG-02`); `NOT APPLICABLE` rows carry no obligation; the five `UNRESOLVED FOUNDER DECISION` rows stay unresolved and off the critical path.

| FCTM row | Disposition | Owning mission | EIS treatment |
|---|---|---|---|
| `7-§6-2` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `7-§6-4` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `7-§6-5` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `7-§7` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `7-§9` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `7-§10-1` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `7-§10-2` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `7-§10-3` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `7-§10-4` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `7-§11-2` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `7-§12` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `7-§15-2a` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `7-§15-10` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `7-§15-12` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `7-§17` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `13-§2-1` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `13-§2-2` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `13-§2-3` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `13-§2-4` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `13-§2-5` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `13-§14-1b` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here; interface only where Section 8 realizes one |
| `13-§22-6` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `13-§23` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `17-§2-1` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `17-§2-2` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `17-§2-3` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `17-§2-4` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `17-§2-5` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `17-§2-6` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `17-§2-7` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `17-§2-8` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `17-§4-15` | ASSIGNED TO LATER MISSION | SB-P-1.18 | Not built here; interface only where Section 8 realizes one |
| `17-§5-1` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `17-§5-2` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `17-§5-3` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `17-§5-4` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `17-§5-5` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `17-§5-6` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `17-§5-7` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `17-§5-8` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `17-§9` | ASSIGNED TO LATER MISSION | SB-P-1.18 | Not built here; interface only where Section 8 realizes one |
| `17-§10` | ASSIGNED TO LATER MISSION | SB-P-1.18 | Not built here; interface only where Section 8 realizes one |
| `17-§11-1` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `17-§11-2` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `17-§11-3` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `17-§12-1` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `17-§12-2` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `17-§13-1` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§13-2` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§13-3` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§13-4` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§14-1` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§14-2` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§14-3` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§14-4` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§14-5` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§14-6` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§14-7` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§16-1` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§18-1` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§18-2` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§18-4` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§21-4` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§22-2` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§22-3` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§22-4` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `17-§22-7` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `17-§22-8` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `17-§22-9` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§22-10a` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `17-§23-1` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `17-§24` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `1-§10-2` | DELEGATED | SB-P-1.18 | Consumed from owner; not re-specified |
| `1-§10-9` | DELEGATED | SB-P-1.18 | Consumed from owner; not re-specified |
| `1-§23-7` | DELEGATED | SB-P-1.18 | Consumed from owner; not re-specified |
| `1-§24-3` | DELEGATED | SB-P-1.18 | Consumed from owner; not re-specified |
| `1-§26-5` | DELEGATED | SB-P-1.18 | Consumed from owner; not re-specified |
| `1-§27-8` | DELEGATED | SB-P-1.18 | Consumed from owner; not re-specified |
| `2-§3-5` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§5-12` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§7-10` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§10-4` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§10-6` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§11-5` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§11-6` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§11-7` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§12-9` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§12-10` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§12-11` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§12-12` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§12-13` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§12-14` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§12-15` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§25-8` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `2-§25-9` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `3-§3-7` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `3-§7-3` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `3-§9-2` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `3-§9-9` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `3-§10-4` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `3-§22-1` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `4-§3-3` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `4-§3-5` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `4-§4-4` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `4-§4-7` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `4-§5-3` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `4-§5-5` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `4-§5-10` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `4-§6-5` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `4-§6-6` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `4-§10-8` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `4-§11-5` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `5-§4-7` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `5-§4-9` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `5-§5-1` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `5-§6-11` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `5-§7-3` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `5-§7-4` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `5-§18-5` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `9-§9-6` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `9-§10-2` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `10-§14-3` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here; interface only where Section 8 realizes one |
| `10-§17-2` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `11-§4-7` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `11-§8-3` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `11-§8-5` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `11-§9-2` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `11-§10-4` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `11-§12-1` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `11-§12-2` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `11-§12-3` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `11-§13-3` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `11-§21-3` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `11-§21-5` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `12-§7-3` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `12-§9-2` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `15-§7-5` | DELEGATED | SB-P-1.16 | Consumed from owner; not re-specified |
| `15-§20-4` | DELEGATED | SB-P-1.16 | Consumed from owner; not re-specified |
| `15-§23-2` | DELEGATED | SB-P-1.16 | Consumed from owner; not re-specified |
| `18-§4-4` | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | Unresolved; not decided by this EIS |
| `18-§25-2` | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | Unresolved; not decided by this EIS |
| `20-§5` | ASSIGNED TO LATER MISSION | SB-P-1.19 | Not built here; interface only where Section 8 realizes one |
| `20-§9` | ASSIGNED TO LATER MISSION | SB-P-1.19 | Not built here; interface only where Section 8 realizes one |
| `21-§4-2` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `21-§4-3` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `21-§4-4` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `21-§11-1` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `21-§11-2` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `21-§12-1` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `21-§12-2` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `21-§12-3` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `21-§12-4` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `21-§12-5` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `21-§13-1` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `21-§24-3` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `21-§24-7` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `22-§4` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `22-§5-6` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `22-§11-3` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `22-§15` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `22-§25` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `22-§28-6` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `22-§29-6` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `23-§4-4` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here; interface only where Section 8 realizes one |
| `23-§10-5` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here; interface only where Section 8 realizes one |
| `23-§10-6` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here; interface only where Section 8 realizes one |
| `23-§12-4` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here; interface only where Section 8 realizes one |
| `23-§16-5` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here; interface only where Section 8 realizes one |
| `23-§19-3` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here; interface only where Section 8 realizes one |
| `23-§20-7` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here; interface only where Section 8 realizes one |
| `23-§21-4` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here; interface only where Section 8 realizes one |
| `24-§6-2` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `24-§9-2` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `24-§10-10` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `25-§6-1` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `BP-§7-1` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `BP-§7-2` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `BP-§7-3` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `BP-§7-4` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `BP-§7-5` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `BP-§11-1` | DELEGATED | SB-P-1.12 | Consumed from owner; not re-specified |
| `BP-§11-2` | DELEGATED | SB-P-1.13 | Consumed from owner; not re-specified |
| `BP-§11-3` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |
| `BP-§11-4` | DELEGATED | SB-P-1.15 | Consumed from owner; not re-specified |
| `BP-§11-5` | DELEGATED | SB-P-1.16 | Consumed from owner; not re-specified |
| `BP-§15-1` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `BP-§15-2` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `BP-§15-3` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `BP-§15-4` | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | Unresolved; not decided by this EIS |
| `BP-§15-5` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `BP-§15-6` | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | Unresolved; not decided by this EIS |
| `BP-§15-7` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `BP-§15-8` | UNRESOLVED FOUNDER DECISION | SB-P-1.17 | Unresolved; not decided by this EIS |
| `BP-§15-9` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `BP-§16-1` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-2` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-3` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-4` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-5` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-6` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-7` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-8` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-9` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-10` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-11` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-12` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-13` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-14` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-15` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-16` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-17` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-18` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-19` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `BP-§16-20` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `GPCV-§9-1` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `GPCV-§9-2` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `GPCV-§9-3` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `GPCV-§9-4` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `GPCV-§9-5` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `GPCV-§9-6` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `GPCV-§9-7` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `GPCV-§9-8` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `GPCV-§9-9` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `GPCV-§9-10` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `GPCV-§9-11` | OUT OF BUILD SCOPE | SB-P-1.17 | Must not appear (`EIS17-NEG-02`) |
| `GPCV-§11-1` | DELEGATED | SB-P-1.14 | Consumed from owner; not re-specified |

## 31. Stage 6 and Stage 7 Coverage

| Item | EIS requirements |
|---|---|
| B6-01 | AUTH-01, AUTH-02, RO-03, CC-05 |
| B6-02 | AUTH-03, SUP-03 |
| B6-03 | SUP-01, SUP-02, SUP-04 |
| B6-04 | TXN-03, TXN-04, STK-05, ARC-04 |
| B6-05 | POS-01, POS-04, POS-11, HOLD-21 |
| B6-06 | DOC-01, DOC-02, POS-08 |
| B6-07 | STK-02, STK-03, SIG-04, VER-12 |
| B6-08 | STK-04 |
| B6-09 | SIG-01, SIG-02, HOLD-22 |
| B6-10 | CC-01, CC-04, CC-06 |
| B6-11 | TXN-08 |
| B6-12 | RO-05, RO-06 |
| B6-13 | RO-04, SUP-05, FLR-02 |
| B6-14 | CTR-01, CTR-02, CTR-06 |
| B6-15 | WS-01, WS-02 |
| B6-16 | WS-05 |
| B6-17 | AI-01, ARC-01 |
| B6-18 | FLR-01, AUD-01, ARC-02 |
| B6-19 | WS-10, HOLD-09 |
| B6-20 | SUP-06, HOLD-06 |
| B6-21 | ARC-05, VER-10, VER-01 to VER-09 |
| ENG17-01 | TXN-01 to TXN-10 |
| ENG17-02 | CC-02, CC-03, CC-04, VER-11 |
| ENG17-03 | POS-04, POS-11, VER-07 |

## 32. Trigger Screen

| Trigger | Result |
|---|---|
| T1, T2 | None established. |
| T3 | None. No requirement adds product behaviour; every requirement maps to approved rows (0 orphans). |
| T4, T5 | None. |
| T6 | **WATCH** on the evidence-sufficiency rule (`EIS17-SIG-02`). |
| T7 | None. No row, disposition, commitment or assignment changes. |
| T8 | **WATCH, not established.** POS source capability is UNKNOWN; EQ17-13 impossibility is not demonstrated. Either would stop the affected path. |

**STOP FOR STAGE 10 MISSION CONTROL REVIEW.**

**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
