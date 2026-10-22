# SB-P-1.17 — Stage 6 Builder Review (Approved Record)

**Mission:** SB-P-1.17 — Manager Operations\
**Stage:** Source 18 v1.2 Stage 6 — Builder Review, approved\
**Review authority:** MC-395A (read-only Builder Review)\
**Approval authority:** MC-396 — Stage 6 Builder Review PASS\
**Published under:** MC-396A\
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 0. MC-396 disposition

Mission Control's disposition, as issued in MC-396A:

> Stage 6 Builder Review is APPROVED.
>
> All 21 findings, B6-01 through B6-21, are accepted for Stage 7 treatment.
>
> Stage 7 Engineering Review is AUTHORIZED.

**Provenance.** MC-395A, MC-396 and MC-396A are Mission Control conversation records relayed by the Founder, not repository records.

**Content.** The approved review follows unchanged from its submitted text, without its original title line. The review was submitted in conversation, and a working copy was kept outside the repository; this record omits that local path. MC-396 names seven high-priority findings for Stage 7: B6-01, B6-02, B6-03, B6-04, B6-05, B6-10 and B6-21. Their treatment is in Blueprint §20.6.

## Approved Stage 6 Builder Review

**Mission:** SB-P-1.17 — Manager Operations\
**Stage:** Source 18 v1.2 Stage 6 — Builder Review\
**Reviewer:** Claude Code, Builder Review Actor (MC-395A). Claude Code was also the Stage 2–4 Definition Actor, so this review is not independent assurance\
**Mode:** READ-ONLY. Findings and recommendations only; nothing in Sections 1–19, the FCTM or any Founder decision is changed\
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

### 1. Verified baseline

| Item | Value |
|---|---|
| Repository `main` | `da53e1c9d7a84960532318a89cf27236b040694e` (PR #1009 merge, the verified Stage 5 approval) |
| Approved Blueprint | `docs/phase-1-mission-blueprint/active/SB-P-1.17.md`, blob `d84493b5` (approved content `8265f7ce` plus the MC-393A status update) |
| Canonical FCTM | `communication/missions/SB-P-1.17/claude-code/01-stage2-populated-fctm.md`, blob `cb79088d` (630 rows; 404 `IN SCOPE`) |
| Stage 5 record | `mission-control/MC-393-stage5-gate10-approval-and-stage6-handover.md`, blob `e89511e3` |
| Source 18 v1.2 | blob `0945bda6` (Stage 6: "product-experience and build-feasibility findings without renumbering the Blueprint") |
| Product code drift | None: `git diff 3c9a7743..da53e1c9` over `src`, `supabase`, `package.json` is empty since the SB-P-1.16 Stage 6 baseline |

Evidence classes used below: **[R]** verified repository text at `da53e1c9`; **[S]** locked upstream specification, not implemented; **[U]** unknown or unproven runtime condition. Repository code is never treated as runtime readiness.

### 2. Product-experience assessment

The approved experience is coherent and keeps the Lighthouse principles.

- **Merchant habits respected.**
  - An existing POS is bridged, never replaced (`BP-§10.6-E1`; `17:FPDR-2`).
  - Inventory works without any POS (§8.6).
  - Supplier requests are prepared by Smart Business and sent by the merchant (`17:FPDR-3`).
  - Stock documents go through the same preview-and-confirm pattern merchants already use for receipts (§8.5).
- **Human decision ownership holds at every consequential step.**
  - Reorder suggestions need confirmation (`7-§5-1`).
  - Standing rules are Owner-created and fail closed (`7-§5-2`; DC-03).
  - Thresholds stay unconfirmed until the Owner acts (`17:FPDR-6`).
  - Historical supplier attribution is Owner-confirmed only (`17:FPDR-5`).
  - Counter signals are review items, not verdicts (§8.7).
- **Role boundaries are clear.**
  - **Owner:** all authority.
  - **Manager:** seven explicit scoped grants (§8.10). Operator detail, standing rules, closing policy and Reference Cost are Owner-only or separately permissioned.
  - **Employee:** permitted operational tasks only.
  - **Supplier:** a purpose-limited participant.
- **Experience risks for Stage 7** (detail in Section 8):
  - The Manager experience cannot be exercised until a grant surface exists, and no merchant-facing grant interface is assumed while R15-11 is open (§8.10, N-6) (B6-01).
  - Closing cash needs a clear day or shift boundary that the merchant recognises (U-03) (B6-10).
  - The workspace must not show a Ledger "Today's sales" figure that a merchant reads as reconciled with POS takings while POS and manual sales can overlap (DC-12) (B6-11).

### 3. Technical feasibility findings

What exists today **[R]**:

| Foundation | Repository fact | Relevance |
|---|---|---|
| Business and authority | `businesses.owner_id` is `UNIQUE` (one business per owner); no membership, role, capability or grant table; every RLS policy is Owner-only, through `owner_id = auth.uid()` subqueries or `catalog_internal.resolve_owner_business(current_actor_uid())` | No Manager, Employee or Supplier principal exists |
| Inventory | `inventory_items` (business-scoped, `base_unit` text, unique name); append-only `inventory_movements` with types `opening_stock`, `stock_increase`, `stock_decrease`, `adjustment_increase`, `adjustment_decrease`, `correction`; `quantity numeric(14,4)`; `responsible_user_id`; `business_event_type` / `business_event_id`; `correcting_of`; negative stock requires an explicit flag; idempotency keys with payload fingerprint; `create_inventory_movement`, `preview_inventory_movement`, `inventory_current_stock_batch` (SECURITY INVOKER) | Strong base to extend; no wastage, spoilage, batch or expiry |
| Product & Price Master | `catalog_products` with SKU, barcode, `selling_unit`, `current_selling_price`, `current_reference_cost`, `inventory_item_id` link; audited price, cost, tax and link events; preview tokens; idempotency keys | Item identity and links exist; cost audit hard-codes Owner authority |
| Ledger | `transactions` with `transaction_type IN ('sale','purchase')`, free-text `party_name`, `payment_method`, `transaction_date DATE`, `creator_id`; `transaction_correction_events` | No supplier identity, no item lines, no time of day |
| Import | catalog-import (CSV/XLSX parse, validate, idempotency); AWS parser Lambda with S3 transfer, Roles Anywhere and parser leases | SB-P-1.14 EIS14-MIG-03 generalizes this into UDI |
| Workspace | `dashboard.tsx` shows Owner daily sales and purchase totals from `transactions`; `inventory`, `catalog`, `transactions` routes; `super-admin` is a placeholder | No Manager-depth surface |
| Absent | Supplier, threshold, reorder, purchase request, standing rule, POS, counter signal, cash count, timezone, entitlement, reminder, notification, conversation and AI code | Matches FCTM `NI-*` codes |
| Tests and CI | PR CI runs 8 environment-independent test files (`vitest.fast.config.ts`); 20 Supabase-dependent files run only in `full-assurance` against `smart-business-test` on path triggers; no Ledger tests (SB-P-1.14 EIS) | No runtime evidence for this mission **[U]** |

**Feasibility conclusion.** Every approved capability is buildable on the existing foundations plus the locked SB-P-1.12 to SB-P-1.16 specifications. The binding constraints are:

- upstream implementation (`D12`, `D13`, `D14`, `DTX`, `D15`, `D16`);
- POS source evidence (`DPOS`, `DSEC`);
- a scheduler with a business timezone (`DSCH`).

None of these constraints requires a Product Truth change.

### 4. Foundation reuse and integration

| Foundation | Owner | State | Reuse boundary for SB-P-1.17 |
|---|---|---|---|
| Authority kernel, grants, confirmation bindings, delegated automation, participant identity | SB-P-1.12 | **[S]** EIS-KER-01 to -09, EIS-CNF-01/-02, EIS-AUT-01, EIS-ID-03, EIS-EXT-02 | Every SB-P-1.17 read and write calls the kernel; no new owner-resolver policies; Supplier is the EIS-ID-03 participant |
| Conversation, Human Language, Basic Voice, typed tools | SB-P-1.13 | **[S]** | Stock and reorder intents and confirmations use the kernel (`10-§13-6`, `12-§4-4`, `12-§7-7`, `24-§21-3`) |
| Business Memory, four-state Ledger, UDI, storage | SB-P-1.14 | **[S]** EIS14-MIG-03, EIS14-ADP-02 | Stock documents and POS export files add adapters on the UDI foundation, not a third import stack (`7-§6-5b`, `13-§4-10`); movements still go through `create_inventory_movement` |
| One governed transactions write path | `DTX` (PQ-2) | Cut-over undecided | Purchase → movement + expense and POS sale → stock + revenue use one business command (`BP-§6.2-1`) |
| Reminder Engine, scheduler, native notifications, Ask CFO, Daily Intelligence | SB-P-1.15 | **[S]**; `DSCH` UNVERIFIED | Follow-ups and standing-rule triggers use the shared engine; SB-P-1.17 exposes governed readers (`D17` rows) |
| One balance truth, supplier-side `owed_by_business` | SB-P-1.16 | **[S]**; FIN-01 PROVISIONAL | Supplier payment/credit relationship only where authorized (`7-§3-7`; `D16`) |
| Later missions | SB-P-1.18 (orders, staff), SB-P-1.19 (entitlement lifecycle), SB-P-1.20 (WhatsApp, system-sent supplier messages) | Not started | Interfaces only: stock and availability readers; purchase-request record for later dispatch |

### 5. Permissions, security and data-integrity risks

- **No delegated authority exists yet (B6-01).** Until the SB-P-1.12 kernel is implemented:
  - every Manager, Employee and Supplier capability is unbuildable without an unapproved interim model;
  - Owner-only paths remain.
- **Field-level cost protection (B6-02).** `17:FPDR-4` requires cost to be hidden from a Manager without Reference Cost permission, but the current protection is row-level. A Manager who can read a `catalog_products` row would also read `current_reference_cost`.
- **Execution-time authority.** Revocation must stop prepared reorders, standing-rule runs and queued imports (`21-§12-5`; EIS-KER-09; EIS-CNF-02). This needs the authority-epoch design, which is not implemented.
- **Supplier isolation.** The purchase-request message must contain no internal intelligence (`7-§3-9`, `24-§10-10`). Supplier replies are merchant-recorded only (`17:FPDR-3`).
- **Idempotency.** Movements are idempotent today **[R]**. New paths need source-scoped dedupe keys: POS events (`13-§6-*`, `13-§17-2`), purchase requests, standing-rule runs and import rows.
- **Event-link validation (B6-04).** `business_event_id` is deliberately not validated by `create_inventory_movement`, and validation is assigned to the owning domain **[R]**. SB-P-1.17 must validate every stock-to-Ledger and POS-to-stock reference it writes.
- **Default grants (B6-18).** New tables and functions must follow the repository's default-grant reconciliation: revoke `anon`, SECURITY INVOKER behind RLS, a fixed `search_path`. This is the SB-P-1.16 B6-08 precedent.
- **Neutral intelligence and privacy (B6-14).**
  - Counter signals are neutral, and operator detail is Owner-only.
  - Operator identifiers are personal data under the open U-11 staff-privacy and legal hold. Storage, retention and access need specialist review.

### 6. Founder Scenario A and B preservation

| Scenario | Preserved | Feasibility | Positive and negative paths |
|---|---|---|---|
| **A — confirmation-gated reorder** (`BP-§10.6-A1` to `A4`) | Yes. Owner path is the scenario; the Manager grant is not the scenario path (§15.1) | Feasible after threshold, suggestion and purchase-request objects exist, with the Owner confirmation on the SB-P-1.12 confirmation binding and item identity through the Product & Price Master link **[R]**. Depends on `D12`, `D13`, `D14`, `D15` (§15.5) | Positive: confirmed threshold → explained suggestion → Owner confirm → request linked to the same item. Negative: unconfirmed threshold raises no alert; a trigger without authority executes nothing; an expired or revoked rule falls back to a suggestion |
| **B — neutral POS review** (`BP-§10.6-B1`, `B2`) | Yes | **Blocked on evidence, not on design:** verification needs the first POS source evidenced to supply discount or void data (`17:FPDR-2`). No vendor is named or assumed (`DPOS`) **[U]** | Positive: an evidenced discount or void anomaly appears as a neutral review item. Negative: no accusation, no lock or punishment; an unsupported signal is shown as unavailable |

### 7. Dependency and unknown register

| ID | Item | Class | Owner | Effect |
|---|---|---|---|---|
| K-1 | SB-P-1.12 kernel and participant identity not implemented | Dependency `D12` | SB-P-1.12 | Blocks Manager, Employee, Supplier and standing rules |
| K-2 | Four-state Ledger and UDI not implemented; DTX cut-over undecided | `D14`, `DTX` | SB-P-1.14 | Blocks Ledger-linked stock writes, stock documents and POS export files |
| K-3 | Conversation, AI and voice kernel not implemented | `D13`, `DAI`, `DV` | SB-P-1.13 | Blocks conversational stock and reorder |
| K-4 | Reminder Engine, scheduler, business timezone | `D15`, `DSCH` | SB-P-1.15 | Blocks follow-ups, standing-rule triggers, closing periods |
| K-5 | Supplier-side credit, FIN-01 PROVISIONAL | `D16` | SB-P-1.16 | Conditional supplier payment relationship |
| K-6 | POS vendor, interface and field capability | `DPOS` **[U]** | Founder / MC for source selection | Blocks Scenario B verification and the API/webhook class |
| K-7 | Server-side secret home for POS credentials | `DSEC` | Engineering | Blocks any authenticated adapter |
| K-8 | Entitlement state (Smart Stock add-on path) | `DENT` | SB-P-1.12 / SB-P-1.19 | Blocks Ledger add-on gating; price `BP-§15-4` off critical path |
| K-9 | Closing cadence (day or shift; opening float) | U-03 | EIS (Stage 4/EIS definition) | Defines expected-cash period |
| K-10 | Staff-privacy and legal research for operator data | U-11 | Specialist / legal | Gates operator-attributed detail |
| K-11 | Merchant-facing grant interface | R15-11 / N-6 | SB-P-1.15 / SB-P-1.12 | Manager features unusable without a grant surface |
| K-12 | Runtime and test-environment evidence | Assurance **[U]** | Stage 7 / 17 | No runtime claim possible |

### 8. Findings for refinement or Stage 7 Engineering Review

No finding requires a change to Sections 1–19. Every finding is a Stage 7 engineering matter or a recorded dependency. Severity reflects build risk.

| ID | Finding | Blueprint / FCTM reference | Severity | Proposed treatment | Stage |
|---|---|---|---|---|---|
| SB17-B6-01 | No membership, role, capability or grant model; one owner per business; all RLS Owner-only through two resolver styles **[R]** | §6, §8.10, §12.1; `13-§13-2`, `7-§10-*`, `17-§13-*`, `17-§14-*`, `21-§4-2`; `D12` | HIGH | Treat the SB-P-1.12 kernel as a hard prerequisite; new SB-P-1.17 objects call `authz.authorize`, never the owner resolver; no interim Manager model; map each of the seven `17:FPDR-1` capabilities to registry capabilities | 7 |
| SB17-B6-02 | Reference Cost visibility is row-level and its audit hard-codes `authority_basis = 'owner_via_businesses.owner_id'`; supplier purchase prices are a new cost object **[R]** | §8.3, §8.10; `7-§3-5`, `7-§4-5`; `17:FPDR-4`, `12:FR-04`, `12:FR-09` | HIGH | Design field-level cost projection (permissioned read path) for supplier prices and catalog cost; coordinate the authority-basis change with SB-P-1.12; negative tests for a Manager without permission | 7 |
| SB17-B6-03 | No supplier identity or supplier–product relation; Ledger party is free text **[R]** | §8.3; `7-§3-1`, `7-§3-4`, `22-§5-6`; `17:FPDR-5` | HIGH | Supplier = EIS-ID-03 participant; supplier–product link to `catalog_products`; historical attribution as an audited link record that never edits the original transaction | 7 |
| SB17-B6-04 | Stock–Ledger linkage hooks exist but are intentionally unvalidated; no transaction item lines; one governed write path not implemented **[R]** | §8.1; `7-§8-1` to `-5`, `3-§15-10`, `3-§15-11`, `13-§6-6`; `DTX` | HIGH | Owning-domain validation of every event reference; atomic movement + Ledger command; sequence after the DTX cut-over decision | 7 |
| SB17-B6-05 | No POS bridge; vendor capability unknown; inbound integration principal, endpoint, source identity and mapping not designed **[R][U]** | §8.6; `13-§4-*`, `13-§5-6`, `13-§17-*`, `BP-§10.6-W7`; `17:FPDR-2`; `DPOS`, `DSEC` | HIGH (dependency) | Vendor-neutral bridge contract for both interface classes; integration principal on EIS-KER-02; per-source dedupe keys; capability declaration per source; no vendor named | 7 |
| SB17-B6-06 | Export-file class and stock documents must reuse the UDI foundation that SB-P-1.14 builds on the parser-lease and import code **[R][S]** | §8.5, §8.6; `7-§6-4b`, `7-§6-5b`, `5-§4-10`, `13-§4-10`, `13-§20-7`; `D14` | MEDIUM | Define SB-P-1.17 adapters analogous to EIS14-ADP-02; no third import stack | 7 |
| SB17-B6-07 | No wastage or spoilage movement type; no batch or expiry fields; the enum and type-direction CHECK are SB-P-1.10 invariants **[R]** | §8.1, §8.2; `7-§2-7`, `7-§2-9`, `7-§2-12` | MEDIUM | Additive extension with migration review and regression of the 17 inventory test files | 7 |
| SB17-B6-08 | Units are free text (`base_unit`, `selling_unit`); no conversion between supplier pack, stock unit and POS selling unit **[R]** | §8.1; `7-§2-12`; unit-mismatch failure rows `7-§13-*` | MEDIUM | Unit-conversion model at the EIS; mismatch blocks only the uncertain update | 7 |
| SB17-B6-09 | No threshold object; evidence sufficiency is open at the EIS | §8.2; `7-§2-6`, `7-§16-6`; `17:FPDR-6` | MEDIUM | EIS determines and justifies sufficiency; **T6 screening** if the policy materially affects suggestion availability (MC-320) | 7 (T6 watch) |
| SB17-B6-10 | No business timezone; Ledger dates have no time while movements and POS events are timestamps; closing cadence open **[R]** | §8.8; `13-§10-*`; U-03; DC-09; `DSCH` | HIGH | Define the closing period and timezone source with SB-P-1.15; expected cash computed only for periods whose inputs are time-resolvable; partial result otherwise | 7 |
| SB17-B6-11 | Manual Ledger cash sales and POS cash sales can both feed expected cash and the workspace totals | §8.6, §8.8, §8.9; DC-12; `13-§10-1` | MEDIUM | Source precedence and review-candidate handling without auto-merge; workspace labels which source a total uses | 7 |
| SB17-B6-12 | Standing reorder rules need EIS-AUT-01, a scheduler and fail-closed re-evaluation, none implemented | §8.4; `7-§5-2`, `7-§15-8`, `7-§13-12`, `21-§12-*` | MEDIUM | Rule object on the SB-P-1.12 automation model; every run re-authorized; expiry and revocation tests | 7 |
| SB17-B6-13 | Purchase request and merchant-sent message objects do not exist | §8.4; `7-§5-1`, `7-§13-8`; `17:FPDR-3`; `DNTF` | MEDIUM | Purchase-request record linked to item and supplier; share/print surface; no sent or accepted state without merchant entry; content check for internal data | 7 |
| SB17-B6-14 | Operator identifiers are personal data under the U-11 hold | §8.7; `13-§4-7`, `13-§13-2`; U-11 | MEDIUM | Storage, retention and Owner-only access design; specialist privacy/legal review before relying on operator detail | 7 + specialist |
| SB17-B6-15 | The workspace today is an Owner-only daily-totals page computing from `transactions` **[R]** | §8.9; `17-§7-8`, `17-§17-*`, `17-§19-*` | MEDIUM | Role-aware cards fed by feature services; no dashboard-only logic; batched readers (precedent `inventory_current_stock_batch`) | 7 |
| SB17-B6-16 | Ask CFO, Daily Intelligence and Reminder readers depend on unimplemented SB-P-1.15 | §8.10, §11.2; `2-§11-*`, `4-§*`, `11-§*` (`D17` rows) | MEDIUM | Governed read contracts for stock, supplier, POS and closing data, defined at the EIS | 7 |
| SB17-B6-17 | Conversation and voice stock intents depend on the SB-P-1.13 kernel | §8.10; `10-§13-6`, `12-§4-4`, `12-§7-7`, `24-§21-3` | MEDIUM | Typed tools with confirmation binding; execution through SB-P-1.17 services | 7 |
| SB17-B6-18 | New tables and functions must follow the repository's grant and SECURITY INVOKER pattern | §8.11; `BP-§6.3-*`; reconcile-default-grants migration **[R]** | MEDIUM | Grant checklist and privilege tests for every new object | 7 |
| SB17-B6-19 | Smart Stock add-on gating needs entitlement state | §8.1; `GPCV-R7`, `17-§14-5`; `DENT` | LOW | Gate on EIS-KER-05; price `BP-§15-4` stays off the critical path | 7 |
| SB17-B6-20 | Supplier payment and credit relationship rests on SB-P-1.16's provisional balance truth | §8.3; `7-§3-7`; `D16`; FIN-01 | LOW | Build only where authorized, after the SB-P-1.16 balance contract is implemented | 7 |
| SB17-B6-21 | No runtime, test-environment or POS harness evidence; PR CI runs only environment-independent tests **[R][U]** | §14, §15.5; `BP-§13-*` | HIGH (assurance) | Stage 7 verification plan: Supabase-backed tests in the required gate for this mission's paths; POS fixture harness; `FRV-A`/`FRV-B` need a runtime environment | 7 / 17 |

### 9. Source 18 T1–T8 screen

| Trigger | Result |
|---|---|
| T1 / T3 | None. No product question was answered here |
| T2 | No Product Truth conflict found |
| T4, T5 | None |
| T6 | **Watch** (B6-09): the future evidence-sufficiency policy, if it materially affects suggestion availability |
| T7 | None. No row, scenario or obligation is narrowed |
| T8 | **Watch, not established** (B6-05, K-6): Scenario B is verifiable only against an evidenced POS source |

No trigger fired. Nothing was resolved silently.

### 10. Recommendation

**PASS — Stage 6 Builder Review, with 21 findings for Stage 7 Engineering Review.**

Reasons:

1. Sections 1–19 are experientially coherent and preserve human decision ownership, merchant habits, the role boundaries and both Founder scenarios.
2. Every approved capability is feasible on the existing foundations plus locked upstream specifications. No finding requires a change to Sections 1–19, an FCTM row or a Founder decision.
3. The material risks are engineering and dependency matters for Stage 7:
   - delegated authority (B6-01);
   - field-level cost protection (B6-02);
   - supplier identity (B6-03);
   - the Ledger write path (B6-04);
   - the POS bridge (B6-05);
   - closing periods (B6-10);
   - runtime assurance (B6-21).
4. Two watch items (T6, T8) stay with Mission Control.

This review is not independent assurance. Stage 7 Engineering Review, Stage 8 Blueprint Lock, the EIS and implementation remain unauthorized.

**STOP FOR MISSION CONTROL STAGE 6 REVIEW AND DISPOSITION.**
