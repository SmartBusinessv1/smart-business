# SB-P-1.18 — Engineering Contract

```text
STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED — NO IMPLEMENTATION AUTHORIZATION
PACKAGE: SB-P-1.18 STAGE 12 INITIAL IMPLEMENTATION PACKAGE, VERSION 0.1-D (THREE COORDINATED DOCUMENTS)
PRODUCT BLUEPRINT: APPROVED — LOCKED (blob f9bfd0a2)
EIS: APPROVED — LOCKED AS DOCUMENTARY CONTRACT WITH EXPLICIT DEPENDENCY HOLDS (blob c6677bd2; Stage 11 record 5d5f4ec7)
FCTM: CANONICAL (blob 36774b72; 769 rows, 592 IN SCOPE, 0 ALREADY DEMONSTRATED)
SB-P-1.17 STOCK EIS: LOCKED AS DOCUMENTARY SOURCE (blob 790591a8; re-lock record d2757b73); PROTECTED NON-OWNER WRITER UNBUILT
NON-OWNER STOCK WRITES: STK_DEPENDENCY_HELD — BLOCKED FOR IMPLEMENTATION — BUILD NOW NOT DELIVERED
STAGE 13 PACKAGE REVIEW: NOT PERFORMED; WORKSTREAM REGISTER NOT FIXED
IMPLEMENTATION AUTHORIZATION: WITHHELD — IMPLEMENTATION NOT AUTHORIZED
SCHEMA / SQL / MIGRATIONS / GRANTS / RLS: NOT AUTHORIZED
AI, VOICE, MESSAGING, MAP, LOCATION AND PAYMENT PROVIDER ACTIVATION: NOT AUTHORIZED
PRODUCTION MUTATION / DEPLOYMENT: NOT AUTHORIZED
TESTS: ALL PLANNED — NOT RUN
```

**DRAFT — MISSION CONTROL REVIEW REQUIRED — NO IMPLEMENTATION AUTHORIZATION**

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.18 — Controlled Business Add-ons |
| Document | Engineering Contract |
| Lifecycle stage | Source 18 v1.3 Stage 12 — Initial Implementation Package |
| Status | `DRAFT — MISSION CONTROL REVIEW REQUIRED — NO IMPLEMENTATION AUTHORIZATION` |
| Package version | 0.1-D (draft; no lock before Stage 13) |
| Author | Claude Code (also the SB-P-1.18 Stage 2 to 9 author and the EIS author; not independent review) |
| Companion documents | `engineering-contract.md`, `lovable-build-prompt.md`, `verification-checklist.md` in `docs/implementation/SB-P-1.18/` |

## 2. Purpose and Authority

This contract translates the locked SB-P-1.18 EIS into engineering obligations for a future, separately authorized build. Each obligation `EC18-X` realizes exactly the locked requirement `EIS18-X` and inherits its FCTM rows unchanged (EIS Sections 21.2 and 21.3). It restates no source-contract requirement text, adds no Product Truth, permission, role default or grant, changes no FCTM row, disposition, Founder decision, upstream contract or hold, and authorizes nothing. Where this contract and the locked EIS differ, the EIS prevails and the difference is a Stage 13 finding.

## 3. Locked References

| Reference | Identity |
|---|---|
| Baseline | `main@47041e7526541ddc322fe0680c352fbe80fba717` |
| Locked Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.18.md`, blob `f9bfd0a2f6995f9956c76425fef3bff673cc7266` |
| Locked EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.18-EIS.md`, blob `c6677bd2eb6cc81aa07ca2cd53c6ce16655e9c2d` (140 requirements; 5,597 row links; 44 named negative tests) |
| Stage 11 EIS lock record | `communication/missions/SB-P-1.18/mission-control/11-stage11-eis-lock-record.md`, blob `5d5f4ec7ddad66e5b5ee8fc8974de66d78aa4e88` (PR #1133) |
| Canonical FCTM | `communication/missions/SB-P-1.18/claude-code/03-stage2-populated-fctm.md`, blob `36774b720d744dcc4bcae50784ccaf58449c275e` (769 rows; 592 `IN SCOPE`; 0 `ALREADY DEMONSTRATED`) |
| SB-P-1.17 Stock EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md`, blob `790591a89bfd1c0e8b13aa8706e4a63fe53f42a9`, locked as a documentary source |
| SB-P-1.17 Stage 11 re-lock record | `communication/missions/SB-P-1.17/mission-control/43-s17-f1-stage11-corrected-stock-eis-relock.md`, blob `d2757b7307a0fcb9568afe5c7d3a1bce0ab8f23e` (PR #1136) |
| Source 18 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `f3b01b608c4b64df186d4278ba6468ed0419630f` (v1.3; §3.2, §8 Stages 12 and 13) |
| Upstream locked EIS consumed | SB-P-1.12 Kernel v0.6 (blob `25c0fabcff6601877c49d698afb5249ad28bffc4`), SB-P-1.13, SB-P-1.14, SB-P-1.15, SB-P-1.16 and SB-P-1.17: specified, not implemented |
| Founder decisions | `18:FPDR-1` to `-7`, `18:FPDR-4-A`, `18:FPDR-8`, `18:FPDR-9`, as recorded in the locked EIS Section 1; none is changed here |
| Authority for this draft | MC41 single-use Stage 12 authoring instruction, [PR #1133 comment 7076884018](https://github.com/SmartBusinessv1/smart-business/pull/1133#issuecomment-7076884018): documentation only |

## 4. Preserved Holds and Gates

| Hold | Boundary |
|---|---|
| Non-Owner Stock writes (A-7) | The SB-P-1.17 Stock EIS `790591a8` is canonically locked as a documentary source, but its protected non-Owner writer child is **UNBUILT**, and the SB-P-1.17 implementation package is not re-locked. Manager or Employee packing with a stock movement, authorized non-Owner physical-return confirmation and delegated-Manager negative-stock override return **`STK_DEPENDENCY_HELD`** with no movement and no partial effect. Their positive Build Now obligations are mapped here and **BLOCKED FOR IMPLEMENTATION** until Stock package reconciliation, SA-01 and SA-03 confirmation, SB-P-1.17 source-owner confirmation, a separate Implementation Authorization and runtime proof. **BUILD NOW NOT DELIVERED.** No direct inventory DML, second writer, Employee override or AI authority |
| Stock status overlay | The locked SB-P-1.18 EIS names locked Stock `5d681b0c` and describes the corrected Stock EIS as a reviewed noncanonical candidate; that is its pre-crossing wording. The SB-P-1.17 Stage 11 re-lock record `d2757b73` is the later status overlay making `790591a8` a locked documentary source. The EIS hold condition (a canonical writer interface **and** its acceptance, grants and runtime verification) is still unmet, so the hold is unchanged and no EIS text is altered |
| Owner Stock leg | Follows the existing stock authority under its locked rules (`EIS17-STK-01`, `EIS17-SEC-02`), dependency gated on `D17`; no stock-side guarantee beyond what the built writer provides is claimed |
| `DLEG` | Payroll, overtime, legal, retention and consent: no calculation, legal rule or retention period is specified or stubbed (`EIS18-PAY-03`, `EIS18-HLD-DLEG`) |
| System-proposed overtime (A-5) | Default OFF for every business until the platform activation record is `ENABLED` through the release-control path; the record does not exist |
| R2 / SA-02 privacy | Photo, signature and OTP proof UNDISPOSITIONED / NOT ADOPTED; `SA02-18-F03` not adopted; no media reference or OTP send is built (`EIS18-PRF-03`) |
| DC-14 / DC-13 | QR plus point-in-time geofence CONDITIONAL and OFF; non-location methods (QR without location; attributed manager-recorded event) are the selected mechanisms (MC41 T3 NOT TRIGGERED); no compelled GPS or surveillance |
| `PQ-14` | Object-scoped Cabinet read: source condition met; package and runtime held (`EIS18-HLD-PQ14`) |
| Ledger / COD (`DTX`, `D16`) | No order-domain income; the COD Ledger link only through `EIS16-ORD-01` after `DTX` (`EIS18-COD-02`) |
| Customer and participant notifications (`DNTF`, `D20`) | Native only; no out-of-app channel before SB-P-1.20; participant notification activation-gated |
| POS source assurance | No POS source is needed or activated by this mission; any POS-originated effect stays with the SB-P-1.17 standard POS bridge and its `DPOS` dossier |
| P-1 identity method and external Delivery Staff (PC-07, PC-10) | Participant routes, invitation and acceptance are unusable until SB-P-1.12 implementation, P-1 per-method evidence and activation (`EIS18-EXT-08`) |
| Role registrations, `p_action`, RLS and grants | Capability registrations, role defaults, `p_action` values, RLS policies and effective grants are package-time and SA-01 / Supabase verified; none is created here |
| Concurrency, idempotency, compensation | Lock order, combined compensation cap, archived-item fail-close and replay are specified (EIS Section 11); runtime race proof is PLANNED — NOT RUN |
| Migration and environments | M18-1 to M18-8 are design only; no migration is written or executed without an explicit migration mission (`docs/migration/README.md`) |
| Providers | `DAI`, `DV`, `DMAP`, `DLOC`, `DPAY`, `DSCH` unverified; no activation |

No hold is closed, and no open question becomes approved, because it appears in this package.

## 5. System Boundaries and Exclusions

- **In scope:** the 592 `IN SCOPE` rows, through the 140 obligations below.
- **Out of scope here:** the 177 rows outside `IN SCOPE` (EIS Section 21.4), unchanged; none is specified or built.
- **Not authorized:** implementation, application code, SQL, migrations, grants, RLS changes, deployment, production change, provider activation, staff or location data processing, runtime testing, builder execution, hold closure and implementation authorization.
- **Ownership boundaries:** SB-P-1.12 owns authority, identity, confirmation, participants and delegated automation; SB-P-1.13 the gateway, typed tools and language; SB-P-1.14 the Ledger, governed commands, UDI, Cabinet and storage; SB-P-1.15 timezone, scheduler, reminders and notifications; SB-P-1.16 customer identity and COD finance linkage; SB-P-1.17 stock, availability, the standard POS bridge and the Manager shell. SB-P-1.18 consumes them and re-specifies none.

## 6. Obligation Types and Row Gates

| Type | Meaning |
|---|---|
| `BUILD — DEPENDENCY GATED` | Implement exactly as the locked EIS specifies, under a future Implementation Authorization, after the rows' upstream dependencies are implemented and accepted |
| `BUILD — OPEN, FAIL-CLOSED` | An open technical contract or hold; build only the fail-closed behaviour the EIS states until the hold is accepted |
| `BUILD — STOCK: OWNER LEG DEPENDENCY GATED; NON-OWNER LEGS BLOCKED FOR IMPLEMENTATION` | The Owner leg follows the existing stock authority; every non-Owner leg returns `STK_DEPENDENCY_HELD` with no effect and is not built until the Stock prerequisites in Section 4 are met |
| `BUILD — ACTIVATION GATED (PC-07, PC-10)` | External Delivery Staff path: build against the consumed SB-P-1.12 contract; unusable until the activation gate (`EIS18-EXT-08`) |
| `BUILD — DEFAULT OFF UNTIL ACTIVATED (A-5; DLEG)` | System-proposed overtime: build OFF; no effect until the platform activation record is `ENABLED` |
| `BUILD — CONDITIONAL (DC-14 …)` | Geofence OFF; the selected non-location attendance methods are dependency gated |
| `BUILD — ADOPTABLE (VERIFY IF ADOPTED)` | Adoptable typed record; verified only if adopted |
| `NOT ADOPTED (R2) — BUILD NOTHING` | Photo, signature and OTP proof stay `IN SCOPE` as adoptable but unadopted; nothing is built |
| `HELD (DLEG) — NEVER STUBBED` | No calculation, eligibility or legal rule is built or stubbed |
| `MIGRATION-DESIGN` | Fixes classes, ordering, rollback boundary and rehearsal; writing or executing a migration needs an explicit migration mission |
| `VERIFICATION` | Verification architecture and evidence; adds no behaviour |
| `VERIFICATION — FOUNDER-RESERVED` | Founder Runtime Verification; executed only by the Founder process |
| `GOVERNANCE` | Constrains every workstream; adds no behaviour |
| `GATE` | Not builder work; Mission Control enforces it through dependency evidence |

**Row gates** (Section 11 column `Gate`; every row also carries `DEP`):

| Gate | Meaning |
|---|---|
| `STK-BLOCKED` | Stock consumer row: Owner leg dependency gated; every non-Owner leg `STK_DEPENDENCY_HELD` and BLOCKED FOR IMPLEMENTATION |
| `ACT` | External Delivery Staff leg: activation gated (PC-07, PC-10; `EIS18-EXT-08`) |
| `R2` | Not adopted (photo, signature, OTP); build nothing |
| `DLEG` | Qualified legal or privacy validation outstanding; no calculation or legal rule |
| `OFF` | System-proposed overtime, default OFF until the platform activation record is `ENABLED` |
| `DC14` | Geofence conditional and OFF |
| `PQ14` | Object-scoped Cabinet read package and runtime held |
| `DTX` | Ledger single write path undecided; no COD Ledger link |
| `DNTF` | No out-of-app channel before SB-P-1.20 |
| `DEP` | Dependency gated: build only after the row's upstream dependencies are implemented and accepted, under a future Implementation Authorization |

## 7. Engineering Obligations

One obligation per locked EIS requirement, in EIS order. "Workstreams" are the proposed workstreams of the rows (Build Prompt Section 5). "Retained holds" are the FCTM dependency codes and hold requirements of those rows. "Verification" names the Verification Checklist negative-path checks; every row also has a row item (`VC18-###`). Row lists of 25 or fewer are shown; larger sets are exactly the rows citing the obligation in Section 11, and Section 12 gives every obligation's complete row set.

### 7.1 A. Order & Delivery, native and employee path (EIS Section 12)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC18-PRN-01` | `EIS18-PRN-01` | Order & Delivery purpose and principles bind every requirement in this workstream; no … | PR | `GOVERNANCE` | WS18-A1, WS18-A3 | — | Row items (VC18-*) | `1-§1-1`, `1-§1-2`, `1-§1-3`, `1-§2-1`, `1-§2-2`, `1-§2-3`, `1-§2-4`, `1-§2-5`, `1-§2-6`, `1-§2-7`, `1-§2-8`, `1-§3-1`, `1-§3-2`, `1-§3-3`, `1-§3-4`, `1-§3-5`, `1-§3-6`, `1-§3-7`, `1-§3-8`, `1-§3-9`, `1-§3-10`, `1-§28-1`, `BP-§10.7-A11`, `GPCV-§8-5` |
| `EC18-CUS-01` | `EIS18-CUS-01` | Customer is the shared business-scoped participant (`EIS-ID-03`; `16:FPDR-1` … | PR/AF | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A3 | D12, D14 | Row items (VC18-*) | `1-§5-23`, `1-§6-1`, `1-§22-2`, `1-§22-15`, `1-§23-2`, `3-§9-3`, `3-§15-7`, `BP-§10.3-S2` |
| `EC18-CUS-02` | `EIS18-CUS-02` | Customer capture: workspace entry, typed-tool quick-add (`EIS13-TOOL-01`), and sheets … | PR | `BUILD — DEPENDENCY GATED` | WS18-A1 | D12, D13, D14 | Row items (VC18-*) | `1-§5-1`, `1-§6-2`, `1-§6-3`, `1-§6-4`, `1-§6-5` |
| `EC18-CUS-03` | `EIS18-CUS-03` | Orderable-customer minimum check | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A3 | D12, D13 | Row items (VC18-*) | `1-§6-6`, `1-§6-7`, `1-§9-15`, `1-§24-1` |
| `EC18-CUS-04` | `EIS18-CUS-04` | Native consent state on the shared identity (purpose, welcome-once, STOP with time and … | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A3 | D12, D14, D20, DC13, DNTF | VN18-07 | `1-§5-29`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§22-3` |
| `EC18-CUS-05` | `EIS18-CUS-05` | Address classes `statutory_postal`, `saved_reusable`, `temporary_pin` (`18:FPDR-1` C1–C3) | TR | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A3 | D12, D13, D14, D20, DLOC, DNTF | Row items (VC18-*) | `1-§5-26`, `1-§9-8`, `1-§9-16`, `1-§22-11`, `1-§24-4` |
| `EC18-CUS-06` | `EIS18-CUS-06` | Customer has no native principal in Phase 1 | PR | `BUILD — DEPENDENCY GATED` | WS18-A1 | D12, D15, D20, DNTF | VN18-06 | `1-§5-24`, `1-§5-25`, `1-§5-27`, `1-§5-28`, `1-§5-30` |
| `EC18-OAU-01` | `EIS18-OAU-01` | Owner and Manager order capabilities as registry entries with object scope … | PR/AF | `BUILD — DEPENDENCY GATED` | WS18-A1 | D12, D16 | NT-ROLE-01 | `1-§5-2`, `1-§5-3`, `1-§5-4`, `1-§5-5`, `1-§5-6`, `1-§5-7`, `1-§5-8` |
| `EC18-OAU-02` | `EIS18-OAU-02` | Employee order capabilities are object-scoped; no unrestricted customer, export or … | PR | `BUILD — DEPENDENCY GATED` | WS18-A1 | D12, D14 | NT-ROLE-01, NT-ASG-01 | `1-§5-9`, `1-§5-10`, `1-§5-11`, `1-§5-12`, `1-§5-13`, `1-§5-14`, `3-§11-6` |
| `EC18-ORD-01` | `EIS18-ORD-01` | One order engine for every capture path | PR | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A3 | D12, D13, D14, DV | Row items (VC18-*) | `1-§8-1`, `1-§8-6`, `1-§8-7`, `1-§8-8`, `1-§8-9`, `1-§8-10`, `1-§18-7`, `1-§19-1`, `1-§19-2`, `1-§19-3`, `1-§19-4`, `1-§19-5`, `1-§22-13`, `1-§23-5a`, `9-§12-9`, `10-§13-5`, `12-§4-4`, `12-§7-7`, `5-§4-12`, `BP-§10.7-A1` |
| `EC18-ORD-02` | `EIS18-ORD-02` | Input → interpretation → preview → confirmation | PR/AF | `BUILD — DEPENDENCY GATED` | WS18-A1 | D14 | Row items (VC18-*) | `1-§8-11`, `1-§8-12`, `5-§7-6` |
| `EC18-ORD-03` | `EIS18-ORD-03` | Draft object holds the `1-§9-2` to `-12` facts with source channel and actor | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A3 | D12, D13, D14 | Row items (VC18-*) | `1-§9-1`, `1-§9-2`, `1-§9-3`, `1-§9-4`, `1-§9-5`, `1-§9-6`, `1-§9-7`, `1-§9-8`, `1-§9-9`, `1-§9-10`, `1-§9-11`, `1-§9-12`, `1-§22-1`, `1-§22-4`, `1-§22-5` |
| `EC18-ORD-04` | `EIS18-ORD-04` | Ambiguity list on the draft | PR | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A3 | D12, D13, DAI | VN18-04 | `1-§9-13`, `1-§9-14`, `1-§9-17`, `1-§9-18`, `1-§9-19`, `1-§21-8`, `1-§24-2`, `BP-§10.7-A2` |
| `EC18-ORD-05` | `EIS18-ORD-05` | Language through `EIS13-LANG-01`; no feature language stack | AF | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A3 | D13, D20, DNTF | Row items (VC18-*) | `1-§20-1`, `1-§20-2`, `1-§23-4` |
| `EC18-AVL-01` | `EIS18-AVL-01` | Availability is read only through `EIS17-RO-08` and shown as known, unknown or unavailable | PR/AF | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A2, WS18-A3 | D17 | Row items (VC18-*) | `1-§10-2`, `1-§10-9`, `1-§23-7`, `BP-§10.7-A3` |
| `EC18-AVL-02` | `EIS18-AVL-02` | Versioned change proposals, with approval by the customer (merchant-recorded) or an … | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-A2 | D12, D17 | VN18-05 | `1-§10-1`, `1-§10-3`, `1-§10-4`, `1-§10-5`, `1-§10-6`, `1-§10-7`, `1-§10-8`, `1-§24-3`, `1-§24-8`, `BP-§10.7-A4` |
| `EC18-STK-01` | `EIS18-STK-01` | Stock decreases per packed line through one governed, idempotent, order-linked event … | PR/TR | `BUILD — STOCK: OWNER LEG DEPENDENCY GATED; NON-OWNER LEGS BLOCKED FOR IMPLEMENTATION` | WS18-A2 | D12, D17 | NT-STK-01, NT-STK-04, VN18-19 | `1-§10-1`, `1-§10-3`, `1-§10-4`, `1-§10-5`, `1-§10-6`, `1-§10-7`, `1-§24-3`, `1-§24-8`, `BP-§10.7-A3`, `BP-§10.7-A4` |
| `EC18-STK-02` | `EIS18-STK-02` | Compensating increase only after a separately granted physical-return confirmation, and … | PR/TR | `BUILD — STOCK: OWNER LEG DEPENDENCY GATED; NON-OWNER LEGS BLOCKED FOR IMPLEMENTATION` | WS18-A2 | D12, D17 | NT-STK-02, NT-STK-04, VN18-18, VN18-19 | `1-§10-1`, `1-§10-8`, `1-§24-3`, `1-§24-8` |
| `EC18-STK-03` | `EIS18-STK-03` | Negative-stock override: Owner or explicitly delegated Manager, with confirmation and … | PR/UQ | `BUILD — STOCK: OWNER LEG DEPENDENCY GATED; NON-OWNER LEGS BLOCKED FOR IMPLEMENTATION` | WS18-A2 | D12, D17 | NT-STK-03, NT-STK-04 | `1-§10-9`, `1-§24-3` |
| `EC18-DLV-01` | `EIS18-DLV-01` | Audited, capability-scoped order state machine with exception and cancel states | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-A3 | D12, D14 | VN18-08 | `1-§11-1`, `1-§11-2`, `1-§11-3`, `1-§11-4`, `1-§22-6`, `1-§22-8`, `BP-§10.7-A5` |
| `EC18-DLV-02` | `EIS18-DLV-02` | Server-side checks of all `1-§12-*` conditions, with one idempotency key per assignment … | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-A3, WS18-P | D12, D13, D14 | NT-ASG-02 | `1-§12-1`, `1-§12-2`, `1-§12-3`, `1-§12-4`, `1-§12-5`, `1-§12-6`, `1-§12-7`, `1-§22-7`, `1-§24-5`, `1-§24-7` |
| `EC18-DLV-03` | `EIS18-DLV-03` | Assigned-delivery task projection and native actions, for an employee membership … | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-A3, WS18-P | D12, D13, D14, D16, DLOC | NT-ASG-01 | `1-§5-15`, `1-§5-16`, `1-§5-17`, `1-§5-18`, `1-§5-19`, `1-§5-20`, `1-§5-21`, `1-§5-22`, `1-§13-1`, `1-§13-2`, `1-§13-4`, `1-§13-5`, `1-§13-6`, `1-§13-7`, `1-§13-8`, `1-§13-9`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EC18-DLV-04` | `EIS18-DLV-04` | U-13 default: hand the text address to the device maps application | TR/PD | `BUILD — DEPENDENCY GATED` | WS18-P | D12, DLOC, DMAP | Row items (VC18-*) | `1-§5-18`, `1-§13-3` |
| `EC18-PRF-01` | `EIS18-PRF-01` | Completion needs at least one configured positive proof | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-A3, WS18-P | D12, D13, D14, DAI | VN18-09 | `1-§15-1`, `1-§15-2`, `1-§15-7`, `1-§15-8`, `1-§21-10`, `1-§22-9`, `1-§24-11`, `BP-§10.7-A7` |
| `EC18-PRF-02` | `EIS18-PRF-02` | Adoptable proof types are typed records, verified only if adopted: recipient … | TR | `BUILD — ADOPTABLE (VERIFY IF ADOPTED)` | WS18-A3 | D12, D14, DLOC | Row items (VC18-*) | `1-§15-3`, `1-§15-5` |
| `EC18-PRF-03` | `EIS18-PRF-03` | Conditional, not adopted (MC-734 R2) | UQ | `NOT ADOPTED (R2) — BUILD NOTHING` | WS18-A3 | D12, D14, DNTF | VN18-10 | `1-§15-4` |
| `EC18-PRF-04` | `EIS18-PRF-04` | Customer silence never fails or rolls back a delivery | PR | `BUILD — DEPENDENCY GATED` | WS18-A3 | D12, D14 | VN18-09 | `1-§15-9`, `1-§15-10`, `BP-§10.7-A9` |
| `EC18-COD-01` | `EIS18-COD-01` | Expected, collected (amount, collector, time) and discrepancy are separate facts | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-A3 | D12, D14, D16, DPAY | NT-COD-01 | `1-§15-6`, `1-§16-1`, `1-§16-2`, `1-§16-3`, `1-§22-10`, `1-§24-12` |
| `EC18-COD-02` | `EIS18-COD-02` | The order domain never writes Ledger income | PR/AF | `BUILD — DEPENDENCY GATED` | WS18-A3 | D12, D14, D16, DPAY, DTX | NT-COD-01 | `1-§16-4`, `1-§16-5`, `1-§16-6`, `1-§23-12`, `1-§24-14`, `3-§15-12`, `5-§6-10`, `BP-§10.7-A10` |
| `EC18-OFD-01` | `EIS18-OFD-01` | Order notifications are `EIS15-NTF-01` requests to membership recipients with a … | AF/TR | `BUILD — DEPENDENCY GATED` | WS18-A3, WS18-P | D15, D20, DNTF | NT-NTF-01 | `1-§17-1`, `1-§17-2`, `1-§17-3`, `1-§17-4`, `1-§17-5`, `1-§17-6`, `1-§17-7`, `1-§17-8`, `1-§17-9`, `1-§23-8` |
| `EC18-OFD-02` | `EIS18-OFD-02` | AI assists through SB-P-1.13 typed tools only (`EIS13-TOOL-01`) | PR | `BUILD — DEPENDENCY GATED` | WS18-A3 | D13, DAI | Row items (VC18-*) | `1-§21-1`, `1-§21-2`, `1-§21-3`, `1-§21-4`, `1-§21-5`, `1-§21-6`, `1-§21-7` |
| `EC18-OFD-03` | `EIS18-OFD-03` | AI must-nots are enforced server-side by capability checks and state guards, not prompt … | PR | `BUILD — DEPENDENCY GATED` | WS18-A3 | D13, DAI | VN18-11 | `1-§21-9`, `1-§21-11`, `1-§21-12`, `1-§21-13` |
| `EC18-OFD-04` | `EIS18-OFD-04` | Order data model carries the remaining `1-§22-*` entities, including confirmation and … | TR | `BUILD — DEPENDENCY GATED` | WS18-A3 | D12, D14 | Row items (VC18-*) | `1-§22-12`, `1-§22-14` |
| `EC18-OFD-05` | `EIS18-OFD-05` | Every `1-§24-*` exception is a named state or review item | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-A3, WS18-P | D12, D15, D20, DNTF | Row items (VC18-*) | `1-§24-6`, `1-§24-9`, `1-§24-10`, `1-§24-13`, `1-§24-15` |
| `EC18-OFD-06` | `EIS18-OFD-06` | Consumes the named shared foundations and builds no parallel version | AF | `GOVERNANCE` | WS18-A3 | D12, D14, D15, DLOC | Row items (VC18-*) | `1-§23-1`, `1-§23-3`, `1-§23-6`, `1-§23-9`, `1-§23-10`, `1-§23-11` |
| `EC18-OFD-07` | `EIS18-OFD-07` | Business-scoped, task-required data only | PR | `BUILD — DEPENDENCY GATED` | WS18-A3, WS18-P | D12, D19 | VN18-12 | `1-§25-1`, `1-§25-2`, `1-§25-3`, `1-§25-4`, `1-§25-5`, `1-§25-6`, `1-§25-7`, `1-§25-8` |
| `EC18-STK-04` | `EIS18-STK-04` | Consumer contract against locked SB-P-1.17 `5d681b0c` (A-7) | TR/UQ | `BUILD — STOCK: OWNER LEG DEPENDENCY GATED; NON-OWNER LEGS BLOCKED FOR IMPLEMENTATION` | WS18-A2 | D12, D17 | NT-STK-04, VN18-19 | `1-§10-1`, `1-§10-3`, `1-§10-4`, `1-§10-5`, `1-§10-6`, `1-§10-7`, `1-§10-9`, `1-§24-3`, `1-§24-8`, `BP-§10.7-A3`, `BP-§10.7-A4` |

### 7.2 B. Staff / HR (EIS Section 12)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC18-PRN-02` | `EIS18-PRN-02` | Staff purpose and principles bind this workstream | PR | `GOVERNANCE` | WS18-B | — | Row items (VC18-*) | `6-§1-1`, `6-§2-1`, `GPCV-§8-3` |
| `EC18-HR-01` | `EIS18-HR-01` | Business-scoped `staff_records`, independent of `persons`, with an optional link to an … | TR | `BUILD — DEPENDENCY GATED` | WS18-B | D12 | NT-HR-01 | `6-§3-1`, `6-§3-8` |
| `EC18-HR-02` | `EIS18-HR-02` | Staff capabilities in the registry; Manager only by explicit delegation (`EIS-KER-04`) | PR/AF | `BUILD — DEPENDENCY GATED` | WS18-B | D12, D14, DTX | NT-ROLE-01 | `6-§3-2`, `6-§4-1`, `6-§4-2`, `6-§4-3`, `3-§15-13`, `BP-§10.7-B1` |
| `EC18-HR-03` | `EIS18-HR-03` | Self-service requires a linked membership: own attendance, assigned shift and … | PR | `BUILD — DEPENDENCY GATED` | WS18-B | D12, D15 | NT-EMP-01, NT-HR-01 | `6-§3-7`, `6-§3-9`, `6-§4-4`, `6-§4-5`, `6-§4-6`, `6-§4-7`, `BP-§10.7-B3` |
| `EC18-HR-04` | `EIS18-HR-04` | Shift and roster records | TR | `BUILD — DEPENDENCY GATED` | WS18-B | D12, DSCH | Row items (VC18-*) | `6-§3-3` |
| `EC18-ATT-01` | `EIS18-ATT-01` | Attendance events are append-only, with mechanism, actor, time and result (`18:FPDR-1` … | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-B | D12, DLOC | Row items (VC18-*) | `6-§3-4`, `6-§5-1` |
| `EC18-ATT-02` | `EIS18-ATT-02` | MC-699 conditions (i)–(vi) apply | PR/TR | `BUILD — CONDITIONAL (DC-14 GEOFENCE OFF; NON-LOCATION PATH DEPENDENCY GATED)` | WS18-B | D12, DC14, DLOC | NT-ATT-01 | `6-§5-2` |
| `EC18-ATT-03` | `EIS18-ATT-03` | Location only at a staff-initiated event | PR/TR | `BUILD — CONDITIONAL (DC-14 GEOFENCE OFF; NON-LOCATION PATH DEPENDENCY GATED)` | WS18-B | DLOC | NT-ATT-01 | `6-§5-3`, `6-§5-4`, `6-§5-5` |
| `EC18-ROS-01` | `EIS18-ROS-01` | Roster through a UDI adapter: preview, clarify, confirm, validated update | PR/AF | `BUILD — DEPENDENCY GATED` | WS18-B | D13, D14, DAI | VN18-22 | `6-§6-1`, `6-§6-2`, `6-§6-3`, `24-§18-4`, `5-§4-11`, `5-§7-5` |
| `EC18-CTX-01` | `EIS18-CTX-01` | Leave, absence and correction are linked context records | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-B | D12, D13 | VN18-13 | `6-§3-5`, `6-§7-1`, `6-§7-2`, `6-§7-3`, `6-§7-4`, `6-§7-5`, `6-§7-6`, `24-§21-6`, `10-§13-7`, `BP-§10.7-B2`, `BP-§10.7-B5` |
| `EC18-PAY-01` | `EIS18-PAY-01` | Payroll is assistance: human-controlled consequence, no autonomous fine, deduction … | PR | `BUILD — DEPENDENCY GATED` | WS18-B | D12 | NT-PAY-01 | `6-§8-1`, `6-§8-3`, `6-§8-4`, `6-§8-5`, `6-§8-6`, `6-§8-7`, `BP-§10.7-B7`, `BP-§10.7-B8` |
| `EC18-PAY-02` | `EIS18-PAY-02` | Payroll-support view is the baseline | PR | `BUILD — DEPENDENCY GATED` | WS18-E | D12, D17, DENT | NT-PAY-01 | `17-§9-5` |
| `EC18-PAY-03` | `EIS18-PAY-03` | Held (MC-734 R1) | UQ | `HELD (DLEG) — NEVER STUBBED` | WS18-B | D12, DLEG | NT-PAY-01 | `6-§3-6`, `6-§8-2` |
| `EC18-OVT-01` | `EIS18-OVT-01` | Overtime record: origin, dispute flag, review with actor, correction chain, role-scoped … | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-B | D12, DLEG, DLOC, DSCH | NT-OVT-01, NT-OVT-04 | `S11-L443-1`, `S11-L443-2`, `S11-L443-3`, `S11-L443-4`, `S11-L443-5` |
| `EC18-OVT-02` | `EIS18-OVT-02` | System-proposed origin: neutral flag, human initiation, non-effective draft … | PR/TR | `BUILD — DEFAULT OFF UNTIL ACTIVATED (A-5; DLEG)` | WS18-B | D12, DLEG, DLOC, DSCH | NT-OVT-02, NT-OVT-03, NT-OVT-08, NT-OVT-09, NT-OVT-10, NT-OVT-11 | `S11-L443-1` |
| `EC18-OVT-03` | `EIS18-OVT-03` | Reviewer rule (`18:FPDR-8` A) | PR/TR | `BUILD — DEFAULT OFF UNTIL ACTIVATED (A-5; DLEG)` | WS18-B | D12 | NT-OVT-01 | `S11-L443-2` |
| `EC18-OVT-04` | `EIS18-OVT-04` | Enablement, duplicates and evidence change (`18:FPDR-8` F, G, I; R-b) | PR/TR | `BUILD — DEFAULT OFF UNTIL ACTIVATED (A-5; DLEG)` | WS18-B | D12, DLEG, DLOC, DSCH | NT-OVT-05, NT-OVT-06, NT-OVT-07, NT-OVT-12, NT-OVT-13 | `S11-L443-1`, `S11-L443-3`, `S11-L443-5` |
| `EC18-OVT-05` | `EIS18-OVT-05` | Visibility and channel parity (`18:FPDR-8` E; R-a; C6 §10; C21 §8) | PR/TR | `BUILD — DEFAULT OFF UNTIL ACTIVATED (A-5; DLEG)` | WS18-B | D12, DLEG, DLOC, DSCH | NT-OVT-04, NT-OVT-09 | `S11-L443-1`, `S11-L443-4` |
| `EC18-HAI-01` | `EIS18-HAI-01` | Staff AI assists through typed tools with neutral language | PR | `BUILD — DEPENDENCY GATED` | WS18-B | D13, DAI | Row items (VC18-*) | `6-§9-1`, `6-§9-2`, `6-§9-3`, `6-§9-4`, `6-§9-5`, `6-§9-6` |
| `EC18-HAI-02` | `EIS18-HAI-02` | Staff AI must-nots are enforced server-side | PR | `BUILD — DEPENDENCY GATED` | WS18-B | D13, DAI | VN18-11 | `6-§9-7`, `6-§9-8`, `6-§9-9`, `6-§9-10`, `6-§9-11` |
| `EC18-HFD-01` | `EIS18-HFD-01` | Same role boundary on every channel | AF | `GOVERNANCE` | WS18-B | D12, D13, D14, D15, DLOC | Row items (VC18-*) | `6-§10-1a`, `6-§10-2`, `6-§11-1`, `6-§11-2`, `6-§11-3`, `6-§11-4`, `6-§11-5`, `6-§11-6`, `6-§11-7`, `6-§11-8`, `6-§11-9`, `9-§12-7`, `BP-§10.7-B6` |
| `EC18-HPR-01` | `EIS18-HPR-01` | Minimum necessary data, isolation, role scope; support only through `EIS-SUP-01` | PR | `BUILD — DEPENDENCY GATED` | WS18-B | D12, D19, DLOC | VN18-12 | `6-§12-1`, `6-§12-2`, `6-§12-3`, `6-§12-4`, `6-§12-5`, `6-§12-6`, `6-§12-7`, `6-§12-8` |
| `EC18-HEX-01` | `EIS18-HEX-01` | Every `6-§13-*` exception is a named state or review item, with idempotent check-in and … | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-B | D12, DLOC | VN18-21 | `6-§13-1`, `6-§13-2`, `6-§13-3`, `6-§13-4`, `6-§13-5`, `6-§13-6`, `6-§13-7`, `6-§13-8`, `6-§13-9`, `6-§13-10`, `6-§13-11` |

### 7.3 C. Compliance Shield (EIS Section 12)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC18-PRN-03` | `EIS18-PRN-03` | Compliance purpose and principles bind this workstream: remind and organize, never … | PR | `GOVERNANCE` | WS18-C | — | Row items (VC18-*) | `16-§1-1`, `16-§1-2`, `16-§2-1`, `16-§2-2`, `16-§2-3`, `16-§2-4`, `16-§2-5`, `16-§2-6`, `16-§3-1`, `16-§3-2`, `16-§3-3`, `16-§3-4`, `16-§3-5`, `16-§3-6`, `16-§3-7`, `16-§21-1` |
| `EC18-CMP-01` | `EIS18-CMP-01` | Compliance record: typed fields per document type, status history and confirmation state | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-C | D12, D14 | Row items (VC18-*) | `16-§4-1`, `16-§4-2`, `16-§4-3`, `16-§4-4`, `16-§4-5`, `16-§4-6`, `16-§4-7`, `16-§4-8`, `16-§4-9`, `16-§4-10`, `16-§4-11`, `16-§4-12`, `16-§4-13`, `16-§4-14` |
| `EC18-CMP-02` | `EIS18-CMP-02` | Intake through UDI: upload, interpret, preview, clarify, confirm | PR/AF | `BUILD — DEPENDENCY GATED` | WS18-C | D13, D14, D15 | Row items (VC18-*) | `16-§5-1`, `16-§5-2`, `16-§5-3`, `16-§5-4`, `16-§5-5a`, `16-§5-6`, `16-§5-7`, `5-§4-13`, `5-§7-7`, `BP-§10.7-C1` |
| `EC18-CMP-03` | `EIS18-CMP-03` | Typed dates, each with a confirmation state | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-C | D13, D14, DAI | VN18-20 | `16-§6-1`, `16-§6-2`, `16-§6-3`, `16-§6-4`, `16-§6-5`, `16-§6-6`, `16-§6-7` |
| `EC18-REM-01` | `EIS18-REM-01` | Reminders only from a confirmed date, through `EIS15-REM-07` with a typed relation | PR/AF | `BUILD — DEPENDENCY GATED` | WS18-C | D14, D15, DSCH | NT-CMP-01, VN18-20 | `16-§7-1`, `16-§7-2`, `16-§7-3`, `16-§7-4`, `16-§7-5`, `16-§7-6`, `16-§7-7`, `16-§7-8`, `16-§8-1`, `16-§8-2`, `16-§8-3`, `16-§8-10`, `BP-§10.7-C2` |
| `EC18-RNW-01` | `EIS18-RNW-01` | Renewal appends a new document and record version; history is never erased | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-C | D14, D15 | NT-CMP-01, VN18-20 | `16-§8-4`, `16-§8-5`, `16-§8-6`, `16-§8-7`, `16-§8-8`, `16-§8-9`, `16-§8-11` |
| `EC18-CAB-01` | `EIS18-CAB-01` | Documents in the shared Cabinet (`EIS14-CAB-01`) with typed links and provenance | AF | `BUILD — DEPENDENCY GATED` | WS18-C | D13, D14 | NT-CAB-01 | `16-§9-1`, `16-§9-2`, `5-§6-12`, `BP-§10.7-C3` |
| `EC18-CCH-01` | `EIS18-CCH-01` | Channels act on one compliance truth; no duplicate reminder or document | PR/AF | `BUILD — DEPENDENCY GATED` | WS18-C | D13, D14, PQ14 | Row items (VC18-*) | `16-§11-1`, `16-§11-2`, `16-§11-3`, `16-§11-4`, `16-§11-5`, `16-§11-6a`, `16-§11-7`, `16-§12-1`, `16-§12-2`, `9-§12-12` |
| `EC18-CCO-01` | `EIS18-CCO-01` | Ask CFO and Daily Intelligence read stored renewal facts through governed readers and … | AF | `BUILD — DEPENDENCY GATED` | WS18-C | D15, PQ14 | Row items (VC18-*) | `16-§13-1`, `16-§13-2`, `16-§13-3`, `16-§13-4` |
| `EC18-CNT-01` | `EIS18-CNT-01` | Reminder notice content through `EIS15-NTF-*`: record, due date, next step, stated … | PR/AF | `BUILD — DEPENDENCY GATED` | WS18-C | D15 | Row items (VC18-*) | `16-§14-1`, `16-§14-2`, `16-§14-3`, `16-§14-4`, `16-§14-5`, `16-§14-6` |
| `EC18-CAU-01` | `EIS18-CAU-01` | Owner authority, delegated visibility and specific-task scope; support only through … | PR/AF | `BUILD — DEPENDENCY GATED` | WS18-C | D12, D19, PQ14 | NT-CAB-01 | `16-§10-1`, `16-§10-2`, `16-§10-3`, `16-§10-4` |
| `EC18-CLG-01` | `EIS18-CLG-01` | Assist only; no certification, fabricated law or filing | PR | `BUILD — DEPENDENCY GATED` | WS18-C | D13, DAI | NT-CMP-01 | `16-§15-1`, `16-§15-2`, `16-§15-3`, `16-§15-4`, `16-§15-5`, `16-§15-6`, `16-§15-7`, `16-§15-8`, `16-§15-9`, `16-§15-10`, `16-§15-11`, `BP-§10.7-C4` |
| `EC18-CEX-01` | `EIS18-CEX-01` | Every `16-§16-*` exception is a named state, with uncertainty narrowly contained | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-C | D12, D15 | Row items (VC18-*) | `16-§16-1`, `16-§16-2`, `16-§16-3`, `16-§16-4`, `16-§16-5`, `16-§16-6`, `16-§16-7`, `16-§16-8`, `16-§16-9`, `16-§16-10`, `16-§16-11` |
| `EC18-CPR-01` | `EIS18-CPR-01` | Isolation, permission-scoped retrieval and purpose limits | PR | `BUILD — DEPENDENCY GATED` | WS18-C | D12, D14, D19, PQ14 | VN18-12 | `16-§17-1`, `16-§17-2`, `16-§17-3`, `16-§17-4`, `16-§17-5`, `16-§17-6`, `16-§17-7`, `BP-§10.7-C5` |
| `EC18-CFD-01` | `EIS18-CFD-01` | Consumes the named shared foundations; no compliance-only OCR pipeline or store | AF | `GOVERNANCE` | WS18-C | D12, D13, D14, D15 | Row items (VC18-*) | `16-§18-1`, `16-§18-2`, `16-§18-3`, `16-§18-4`, `16-§18-5`, `16-§18-6`, `16-§18-7`, `16-§18-8`, `16-§18-9`, `16-§18-10` |
| `EC18-CAB-02` | `EIS18-CAB-02` | Compliance documents link through the feature-owned `compliance_document_links` … | TR/UQ | `BUILD — OPEN, FAIL-CLOSED` | WS18-C | D12, D13, D14 | NT-CAB-01 | `16-§4-7`, `16-§9-1`, `16-§9-2`, `5-§6-12` |

### 7.4 D. Shared Location Foundation (EIS Section 12)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC18-LOC-01` | `EIS18-LOC-01` | One server-side validation function per approved purpose | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-B, WS18-D | D12, DLOC | NT-PRV-01 | `1-§14-1`, `1-§14-2`, `1-§14-3`, `1-§14-4`, `6-§11-8`, `22-§16-1`, `22-§16-8`, `22-§16-9`, `22-§16-10`, `22-§16-11`, `22-§29-9` |
| `EC18-LOC-02` | `EIS18-LOC-02` | No continuous or background tracking; live tracking stays out (`18:FPDR-2`) | PR | `BUILD — DEPENDENCY GATED` | WS18-D | D12, DLOC | NT-PRV-03 | `1-§14-5`, `1-§14-6`, `1-§14-7`, `22-§16-2`, `BP-§10.7-A8`, `BP-§10.7-B4` |
| `EC18-LOC-03` | `EIS18-LOC-03` | Disclosure of why, who, when and access end at the purpose boundary; result-only … | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-D | D12, DLOC | VN18-14 | `1-§14-8`, `1-§14-9`, `1-§14-11`, `22-§16-3`, `22-§16-4`, `22-§16-5` |
| `EC18-LOC-04` | `EIS18-LOC-04` | No A2 or B2 raw coordinate stored | PR/TR | `BUILD — DEPENDENCY GATED` | WS18-D | D12, DLEG, DLOC | NT-PRV-02 | `1-§14-10`, `1-§14-12`, `1-§14-13`, `22-§16-6`, `22-§16-7` |
| `EC18-LOC-05` | `EIS18-LOC-05` | Coordinates are redacted from application error capture, server logs and analytics … | TR | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A3, WS18-P, WS18-B, WS18-D, WS18-V | D12, D14, D20, DC14, DLEG, DLOC, DNTF, DSCH | NT-PRV-01 | 42 rows (Section 11) |

### 7.5 E. Workspace views and acceptance accounting (EIS Section 12)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC18-VW-01` | `EIS18-VW-01` | Staff and HR cards in the SB-P-1.17 shell, fed by feature services and gated by role … | PR/AF | `BUILD — DEPENDENCY GATED` | WS18-E | D12, D17, DENT | VN18-15 | `17-§4-15`, `17-§9-1`, `17-§9-2`, `17-§9-3`, `17-§9-4`, `17-§9-6`, `17-§9-7` |
| `EC18-VW-02` | `EIS18-VW-02` | Order and delivery cards on the same rule; no marketplace behaviour | PR/AF | `BUILD — DEPENDENCY GATED` | WS18-E | D12, D14, D16, D17, DENT | VN18-15 | `17-§10-1`, `17-§10-2`, `17-§10-3`, `17-§10-4`, `17-§10-5`, `17-§10-6`, `17-§10-7` |
| `EC18-ACC-01` | `EIS18-ACC-01` | Order acceptance scenarios and completion gate, mapped to named tests | PR | `VERIFICATION` | WS18-P, WS18-V | D12, D13, D14, D16, D17, D20, DLOC, DNTF, DTX, DV | Row items (VC18-*) | `1-§26-1`, `1-§26-2`, `1-§26-3`, `1-§26-4`, `1-§26-5`, `1-§26-6`, `1-§26-7`, `1-§26-8`, `1-§26-9`, `1-§26-10`, `1-§26-11`, `1-§26-12a`, `1-§26-13`, `1-§26-14`, `1-§31-1`, `1-§31-2` |
| `EC18-ACC-02` | `EIS18-ACC-02` | Staff acceptance scenarios and completion gate | PR | `VERIFICATION` | WS18-V | D12, D13, D14, DLOC | Row items (VC18-*) | `6-§14-1`, `6-§14-2`, `6-§14-3`, `6-§14-4`, `6-§14-5`, `6-§14-6`, `6-§14-7`, `6-§14-8`, `6-§14-9`, `6-§14-10`, `6-§17-1` |
| `EC18-ACC-03` | `EIS18-ACC-03` | Compliance acceptance scenarios and completion gate | PR | `VERIFICATION` | WS18-V | D12, D13, D14, D15, D19, DSCH, PQ14 | Row items (VC18-*) | `16-§20-1`, `16-§20-2`, `16-§20-3`, `16-§20-4`, `16-§20-5`, `16-§20-6`, `16-§20-7a`, `16-§20-8`, `16-§20-9`, `16-§20-10`, `16-§23-1` |
| `EC18-ACC-04` | `EIS18-ACC-04` | Founder-reserved scenarios A, B and C are future plans; none is demonstrated | FC | `VERIFICATION — FOUNDER-RESERVED` | WS18-V | — | Row items (VC18-*) | `BP-§10.7-AS1`, `BP-§10.7-BS1`, `BP-§10.7-CS1`, `BP-§10.7-X` |
| `EC18-ACC-05` | `EIS18-ACC-05` | Mission sequencing, cumulative-mission, evidence-sufficiency and unresolved-decision … | PR | `VERIFICATION` | WS18-V | — | Row items (VC18-*) | 34 rows (Section 11) |

### 7.6 P. External Delivery Staff consumer path (SB-P-1.12 EIS v0.5; MC-809) (EIS Section 12)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC18-EXT-01` | `EIS18-EXT-01` | Consumed kernel contract, specified and locked, not implemented | AF | `BUILD — ACTIVATION GATED (PC-07, PC-10)` | WS18-P | D12, D13, D14, D15, D16, DLOC, DMAP | NT-FRL-01, NT-EXT-01 | `1-§5-15`, `1-§5-16`, `1-§5-17`, `1-§5-18`, `1-§5-19`, `1-§5-20`, `1-§5-21`, `1-§5-22`, `1-§13-2`, `1-§13-3`, `1-§13-4`, `1-§13-5`, `1-§13-6`, `1-§13-7`, `1-§13-8`, `1-§17-4`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EC18-EXT-02` | `EIS18-EXT-02` | The five overlapping `DH` external legs are specified | PR/TR | `BUILD — ACTIVATION GATED (PC-07, PC-10)` | WS18-P | D12, D14 | NT-EXT-03 | `1-§12-3`, `1-§15-2`, `1-§24-5`, `1-§24-6`, `1-§25-3` |
| `EC18-EXT-03` | `EIS18-EXT-03` | Participant capability registration (PC-05) | PR/TR | `BUILD — ACTIVATION GATED (PC-07, PC-10)` | WS18-P | D12, D13, D14, D15, D16, DLOC, DMAP | NT-EXT-02 | `1-§5-15`, `1-§5-16`, `1-§5-17`, `1-§5-18`, `1-§5-19`, `1-§5-20`, `1-§5-21`, `1-§5-22`, `1-§13-2`, `1-§13-3`, `1-§13-4`, `1-§13-5`, `1-§13-6`, `1-§13-7`, `1-§13-8`, `1-§15-2`, `1-§17-4`, `1-§25-3`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EC18-EXT-04` | `EIS18-EXT-04` | Object assignment and governed set read (PC-05) | PR/TR | `BUILD — ACTIVATION GATED (PC-07, PC-10)` | WS18-P | D12, D13, D14, D15, D16, DLOC, DMAP | NT-EXT-02, NT-EXT-04 | `1-§5-15`, `1-§5-16`, `1-§5-17`, `1-§5-18`, `1-§5-19`, `1-§5-20`, `1-§5-21`, `1-§5-22`, `1-§12-3`, `1-§13-2`, `1-§13-3`, `1-§13-4`, `1-§13-5`, `1-§13-6`, `1-§13-7`, `1-§13-8`, `1-§17-4`, `1-§24-5`, `1-§24-6`, `1-§25-3`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EC18-EXT-05` | `EIS18-EXT-05` | Merchant invitation surfaces | PR/TR | `BUILD — ACTIVATION GATED (PC-07, PC-10)` | WS18-P | D12, D13, D14, D15, D16, DLOC, DMAP | NT-EXT-05 | `1-§5-15`, `1-§5-16`, `1-§5-17`, `1-§5-18`, `1-§5-19`, `1-§5-20`, `1-§5-21`, `1-§5-22`, `1-§13-2`, `1-§13-3`, `1-§13-4`, `1-§13-5`, `1-§13-6`, `1-§13-7`, `1-§13-8`, `1-§17-4`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EC18-EXT-06` | `EIS18-EXT-06` | Participant first-run rendering | PR/TR | `BUILD — ACTIVATION GATED (PC-07, PC-10)` | WS18-P | D12, D13, D14, D15, D16, DLOC, DMAP | NT-EXT-01, NT-FRL-01 | `1-§5-15`, `1-§5-16`, `1-§5-17`, `1-§5-18`, `1-§5-19`, `1-§5-20`, `1-§5-21`, `1-§5-22`, `1-§13-2`, `1-§13-3`, `1-§13-4`, `1-§13-5`, `1-§13-6`, `1-§13-7`, `1-§13-8`, `1-§17-4`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EC18-EXT-07` | `EIS18-EXT-07` | One authority path per request (F-OVL Option B) | PR/TR | `BUILD — ACTIVATION GATED (PC-07, PC-10)` | WS18-P | D12, D13, D14, D15, D16, DLOC, DMAP | NT-EXT-03 | `1-§5-15`, `1-§5-16`, `1-§5-17`, `1-§5-18`, `1-§5-19`, `1-§5-20`, `1-§5-21`, `1-§5-22`, `1-§12-3`, `1-§13-2`, `1-§13-3`, `1-§13-4`, `1-§13-5`, `1-§13-6`, `1-§13-7`, `1-§13-8`, `1-§15-2`, `1-§17-4`, `1-§25-3`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EC18-EXT-08` | `EIS18-EXT-08` | Activation gate (PC-07, PC-10) | UQ | `BUILD — ACTIVATION GATED (PC-07, PC-10)` | WS18-P | D12, D13, D14, D15, D16, DLOC, DMAP | NT-EXT-01, NT-EXT-05, NT-EXT-06 | `1-§5-15`, `1-§5-16`, `1-§5-17`, `1-§5-18`, `1-§5-19`, `1-§5-20`, `1-§5-21`, `1-§5-22`, `1-§12-3`, `1-§13-2`, `1-§13-3`, `1-§13-4`, `1-§13-5`, `1-§13-6`, `1-§13-7`, `1-§13-8`, `1-§15-2`, `1-§17-4`, `1-§24-5`, `1-§24-6`, `1-§25-3`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |

### 7.7 X. Cross-cutting (selector-mapped) (EIS Section 12)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC18-SEC-01` | `EIS18-SEC-01` | Every read and write calls `authz.authorize` with explicit active business … | AF | `BUILD — DEPENDENCY GATED` | All | All row gates (Section 11) | NT-BIZ-01, VN18-03 | 280 rows (Section 11) |
| `EC18-SEC-02` | `EIS18-SEC-02` | Birth-safe objects: `EIS-ISO-02/03/10` | AF/TR | `BUILD — DEPENDENCY GATED` | All | All row gates (Section 11) | NT-RLS-01, NT-RLS-02, NT-RLS-03 | 456 rows (Section 11) |
| `EC18-SEC-03` | `EIS18-SEC-03` | No Owner financial intelligence, Ask CFO, Reference Cost or margin by role, view … | AF/PR | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A3, WS18-P, WS18-B | D12, D13, D14, DAI | NT-FIN-01 | `1-§5-8`, `1-§5-14`, `1-§5-22`, `1-§25-6`, `6-§4-7`, `6-§9-10`, `3-§11-6`, `BP-§10.7-B3` |
| `EC18-IDM-01` | `EIS18-IDM-01` | Source-scoped idempotency (`22-§15`) | AF/TR | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A3, WS18-B, WS18-C, WS18-V | D12, D13, D14, D16, DLEG, DLOC, DSCH, DTX | VN18-23 | `1-§6-7`, `1-§12-6`, `1-§16-6`, `1-§24-7`, `1-§26-11`, `1-§26-14`, `6-§13-1`, `6-§13-9`, `S11-L443-1`, `S11-L443-3`, `16-§11-7`, `16-§16-4`, `16-§20-8`, `3-§15-12` |
| `EC18-AUD-01` | `EIS18-AUD-01` | Audit and provenance through `EIS-AUD-01/02/03` and `EIS13-AUD-01` | AF | `BUILD — DEPENDENCY GATED` | WS18-A3, WS18-B, WS18-C | D12, D14 | VN18-02 | `1-§22-14`, `1-§23-11`, `6-§11-9`, `6-§12-5`, `S11-L443-5`, `16-§18-9` |
| `EC18-MIG-01` | `EIS18-MIG-01` | M18-1 to M18-8 design only, `DRAFT OR PROPOSAL — NON-EXECUTABLE` | TR | `MIGRATION-DESIGN` | WS18-A1, WS18-A2, WS18-A3, WS18-P, WS18-B, WS18-C, WS18-D, WS18-E | All row gates (Section 11) | NT-RLS-01, NT-RLS-02, NT-RLS-03 | 290 rows (Section 11) |
| `EC18-VER-01` | `EIS18-VER-01` | Each row gets a planned test and evidence class from its FCTM seed, unchanged | PR | `VERIFICATION` | All | All row gates (Section 11) | Row items (VC18-*) | 592 rows (Section 11) |
| `EC18-CAP-01` | `EIS18-CAP-01` | Capability catalogue (Section 7) as `EIS-KER-03` registry entries, with object scope as … | TR | `BUILD — DEPENDENCY GATED` | All | All row gates (Section 11) | NT-ROLE-01 | 280 rows (Section 11) |
| `EC18-OBJ-01` | `EIS18-OBJ-01` | Logical object model (Section 8) | TR | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A2, WS18-A3, WS18-P, WS18-B, WS18-C, WS18-D, WS18-E | All row gates (Section 11) | Row items (VC18-*) | 290 rows (Section 11) |
| `EC18-CMD-01` | `EIS18-CMD-01` | Command catalogue (Section 9) | TR | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A2, WS18-A3, WS18-P, WS18-B, WS18-C, WS18-D, WS18-E | All row gates (Section 11) | Row items (VC18-*) | 308 rows (Section 11) |
| `EC18-ERR-01` | `EIS18-ERR-01` | Feature outcome codes (Section 10) sit under the `EIS-UX-01` denial contract: calm … | TR | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A2, WS18-A3, WS18-P, WS18-B, WS18-C, WS18-D, WS18-E | All row gates (Section 11) | VN18-01 | 101 rows (Section 11) |
| `EC18-RDR-01` | `EIS18-RDR-01` | Governed readers (M18-8): kernel-scoped, batched, minimized, carrying source and freshness | TR | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-C, WS18-E | D12, D13, D14, D15, D16, D17, DENT, PQ14 | NT-SET-01 | `1-§5-5`, `1-§5-7`, `16-§11-2`, `16-§11-3`, `16-§13-1`, `16-§13-2`, `16-§13-3`, `16-§13-4`, `17-§4-15`, `17-§9-1`, `17-§9-2`, `17-§9-3`, `17-§9-4`, `17-§9-5`, `17-§9-6`, `17-§9-7`, `17-§10-1`, `17-§10-2`, `17-§10-3`, `17-§10-4`, `17-§10-5`, `17-§10-6`, `17-§10-7` |
| `EC18-NEG-01` | `EIS18-NEG-01` | Must-not rows are enforced below the UI by grant, command check or server validation … | PR | `BUILD — DEPENDENCY GATED` | WS18-A1, WS18-A2, WS18-A3, WS18-P, WS18-B, WS18-C, WS18-D, WS18-E | D12, D13, D14, D15, D16, D17, D19, D20, DAI, DC13, DLOC, DNTF, DTX, PQ14 | NT-ROLE-01 | 64 rows (Section 11) |
| `EC18-MIG-02` | `EIS18-MIG-02` | Additive and live-safe | TR | `MIGRATION-DESIGN` | WS18-A1, WS18-A2, WS18-A3, WS18-P, WS18-B, WS18-C, WS18-D, WS18-E | All row gates (Section 11) | VN18-16 | 290 rows (Section 11) |
| `EC18-MIG-03` | `EIS18-MIG-03` | Each class states its pre-data rollback boundary and the point after which only … | TR | `MIGRATION-DESIGN` | WS18-A1, WS18-A2, WS18-A3, WS18-P, WS18-B, WS18-E, WS18-V | D12, D14, D16, D17, DENT, DPAY, DTX | VN18-16 | 42 rows (Section 11) |
| `EC18-MIG-04` | `EIS18-MIG-04` | No execution | PR | `MIGRATION-DESIGN` | All | All row gates (Section 11) | VN18-17 | 294 rows (Section 11) |
| `EC18-VER-02` | `EIS18-VER-02` | Rows with an `RT` seed get named integration tests and, where user-visible, runtime … | PR | `VERIFICATION` | All | All row gates (Section 11) | Row items (VC18-*) | 306 rows (Section 11) |
| `EC18-VER-03` | `EIS18-VER-03` | Rows with a `NEG` seed get named negative tests (Section 16.2) | PR | `VERIFICATION` | All | All row gates (Section 11) | Row items (VC18-*) | 124 rows (Section 11) |
| `EC18-VER-04` | `EIS18-VER-04` | Rows with an `INSP` seed are verified by design inspection against the final EIS | PR | `VERIFICATION` | WS18-A1, WS18-A3, WS18-B, WS18-C, WS18-D, WS18-V | All row gates (Section 11) | Row items (VC18-*) | 123 rows (Section 11) |
| `EC18-VER-05` | `EIS18-VER-05` | Rows with an `IDEM` seed get replay, concurrent-delivery and lost-response tests | PR | `VERIFICATION` | WS18-A1, WS18-A3, WS18-B, WS18-C, WS18-V | D12, D13, D14, D16, DLEG, DLOC, DSCH, DTX | Row items (VC18-*) | `1-§6-7`, `1-§12-6`, `1-§16-6`, `1-§24-7`, `1-§26-11`, `1-§26-14`, `6-§13-1`, `6-§13-9`, `S11-L443-1`, `S11-L443-3`, `16-§11-7`, `16-§16-4`, `16-§20-8`, `3-§15-12` |
| `EC18-VER-06` | `EIS18-VER-06` | Rows with an `EXP` seed get an experience review, including neutral language and … | PR | `VERIFICATION` | WS18-A1, WS18-A3, WS18-B, WS18-C, WS18-V | D12, D13, D20, DNTF | Row items (VC18-*) | 31 rows (Section 11) |
| `EC18-VER-07` | `EIS18-VER-07` | Scenario and gate rows each become a named acceptance item | PR | `VERIFICATION` | WS18-A1, WS18-P, WS18-B, WS18-C, WS18-D, WS18-V | D12, D13, D14, D15, D16, D17, D19, D20, DAI, DLOC, DNTF, DSCH, DTX, DV, PQ14 | Row items (VC18-*) | 43 rows (Section 11) |

### 7.8 H. Hold requirements (one per dependency, as in `EIS17-HOLD-*`) (EIS Section 12)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC18-HLD-D12` | `EIS18-HLD-D12` | `D12` kernel gate | UQ | `GATE` | All | All row gates (Section 11) | Row items (VC18-*) | 280 rows (Section 11) |
| `EC18-HLD-D13` | `EIS18-HLD-D13` | `D13` conversation and tools gate | UQ | `GATE` | WS18-A1, WS18-A3, WS18-P, WS18-B, WS18-C, WS18-V | All row gates (Section 11) | Row items (VC18-*) | 116 rows (Section 11) |
| `EC18-HLD-D14` | `EIS18-HLD-D14` | `D14` Memory, UDI and storage gate | UQ | `GATE` | WS18-A1, WS18-A3, WS18-P, WS18-B, WS18-C, WS18-E, WS18-V | All row gates (Section 11) | Row items (VC18-*) | 119 rows (Section 11) |
| `EC18-HLD-D15` | `EIS18-HLD-D15` | `D15` Reminder and Notification gate | UQ | `GATE` | WS18-A1, WS18-A3, WS18-P, WS18-B, WS18-C, WS18-V | D12, D14, D15, D20, DNTF, DSCH, PQ14 | Row items (VC18-*) | 52 rows (Section 11) |
| `EC18-HLD-D16` | `EIS18-HLD-D16` | `D16` financial integrity gate | UQ | `GATE` | WS18-A1, WS18-A3, WS18-P, WS18-E, WS18-V | D12, D14, D16, D17, DENT, DPAY, DTX | Row items (VC18-*) | `1-§5-4`, `1-§5-20`, `1-§13-6`, `1-§15-6`, `1-§16-1`, `1-§16-2`, `1-§16-3`, `1-§16-4`, `1-§16-5`, `1-§16-6`, `1-§22-10`, `1-§23-12`, `1-§24-12`, `1-§24-14`, `1-§26-11`, `17-§10-5`, `3-§15-12` |
| `EC18-HLD-D17` | `EIS18-HLD-D17` | `D17` stock and shell gate | UQ | `GATE` | WS18-A1, WS18-A2, WS18-A3, WS18-E, WS18-V | D12, D14, D16, D17, DENT | Row items (VC18-*) | `1-§10-2`, `1-§10-3`, `1-§10-4`, `1-§10-5`, `1-§10-6`, `1-§10-7`, `1-§10-9`, `1-§23-7`, `1-§24-3`, `1-§26-5`, `17-§4-15`, `17-§9-1`, `17-§9-2`, `17-§9-3`, `17-§9-4`, `17-§9-5`, `17-§9-6`, `17-§9-7`, `17-§10-1`, `17-§10-2`, `17-§10-3`, `17-§10-4`, `17-§10-5`, `17-§10-6`, `17-§10-7` |
| `EC18-HLD-D19` | `EIS18-HLD-D19` | `D19` stewardship gate | UQ | `GATE` | WS18-A3, WS18-B, WS18-C, WS18-V | D12, D19 | Row items (VC18-*) | `1-§25-8`, `6-§12-8`, `16-§10-4`, `16-§17-5`, `16-§20-10` |
| `EC18-HLD-D20` | `EIS18-HLD-D20` | `D20` channel gate; native legs only | UQ | `GATE` | WS18-A1, WS18-A3, WS18-V | D12, D13, D15, D20, DC13, DLOC, DNTF | Row items (VC18-*) | `1-§5-24`, `1-§5-25`, `1-§5-26`, `1-§5-27`, `1-§5-28`, `1-§5-29`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§17-3`, `1-§17-5`, `1-§17-6`, `1-§20-1`, `1-§24-13`, `1-§26-1` |
| `EC18-HLD-DTX` | `EIS18-HLD-DTX` | `DTX` single write path (PQ-2 undecided) | UQ | `GATE` | WS18-A3, WS18-B, WS18-V | D12, D14, D16, DTX | Row items (VC18-*) | `1-§16-5`, `1-§16-6`, `1-§26-11`, `6-§4-3`, `3-§15-12` |
| `EC18-HLD-DSCH` | `EIS18-HLD-DSCH` | `DSCH` scheduler and timezone unverified | UQ/PD | `GATE` | WS18-B, WS18-C, WS18-V | D12, D15, DLEG, DLOC, DSCH | Row items (VC18-*) | `6-§3-3`, `S11-L443-1`, `16-§7-1`, `16-§7-2`, `16-§7-4`, `16-§7-5`, `16-§7-6`, `16-§7-7`, `16-§7-8`, `16-§20-3` |
| `EC18-HLD-DAI` | `EIS18-HLD-DAI` | `DAI` provider unverified | UQ/PD | `GATE` | WS18-A3, WS18-B, WS18-C | D13, D14, DAI | Row items (VC18-*) | 43 rows (Section 11) |
| `EC18-HLD-DV` | `EIS18-HLD-DV` | `DV` provider unverified | UQ/PD | `GATE` | WS18-A1, WS18-V | D12, D13, DV | Row items (VC18-*) | `1-§8-8`, `1-§19-2`, `1-§26-2`, `12-§4-4`, `12-§7-7` |
| `EC18-HLD-DNTF` | `EIS18-HLD-DNTF` | `DNTF`: no out-of-app channel before SB-P-1.20 | UQ | `GATE` | WS18-A1, WS18-A3, WS18-V | D12, D13, D14, D15, D20, DC13, DLOC, DNTF | Row items (VC18-*) | `1-§5-24`, `1-§5-25`, `1-§5-26`, `1-§5-27`, `1-§5-28`, `1-§5-29`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§15-4`, `1-§17-3`, `1-§17-5`, `1-§17-6`, `1-§20-1`, `1-§24-13`, `1-§26-1` |
| `EC18-HLD-DENT` | `EIS18-HLD-DENT` | `DENT`: no add-on acceptance; no schema simulation (DC-07) | UQ | `GATE` | WS18-E | D12, D14, D16, D17, DENT | Row items (VC18-*) | `17-§4-15`, `17-§9-1`, `17-§9-2`, `17-§9-3`, `17-§9-4`, `17-§9-5`, `17-§9-6`, `17-§10-1`, `17-§10-2`, `17-§10-3`, `17-§10-4`, `17-§10-5`, `17-§10-6` |
| `EC18-HLD-DPAY` | `EIS18-HLD-DPAY` | `DPAY`: no payment-evidence source selected | UQ/PD | `GATE` | WS18-A3 | D12, D16, DPAY | Row items (VC18-*) | `1-§15-6`, `1-§16-4` |
| `EC18-HLD-DLOC` | `EIS18-HLD-DLOC` | `DLOC`: nothing exists; device capture unverified | UQ | `GATE` | WS18-A1, WS18-A3, WS18-P, WS18-B, WS18-D, WS18-V | D12, D14, D20, DC14, DLEG, DLOC, DNTF, DSCH | Row items (VC18-*) | 42 rows (Section 11) |
| `EC18-HLD-DMAP` | `EIS18-HLD-DMAP` | `DMAP` / U-13: no provider | UQ/PD | `GATE` | WS18-P | D12, DMAP | Row items (VC18-*) | `1-§13-3` |
| `EC18-HLD-DLEG` | `EIS18-HLD-DLEG` | `DLEG`: no legal or calculation claim; recording only | UQ | `GATE` | WS18-B, WS18-D | D12, DLEG, DLOC, DSCH | Row items (VC18-*) | `6-§3-6`, `6-§8-2`, `S11-L443-1`, `S11-L443-3`, `S11-L443-4`, `22-§16-6` |
| `EC18-HLD-DC13` | `EIS18-HLD-DC13` | DC-13: conditional documentary T6 only (MC-701) | FC | `GATE` | WS18-A1 | D12, D20, DC13, DNTF | Row items (VC18-*) | `1-§5-29`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5` |
| `EC18-HLD-DC14` | `EIS18-HLD-DC14` | DC-14: conditional documentary T6 only (MC-699); PROVISIONAL — PROFESSIONAL VALIDATION … | FC | `GATE` | WS18-B | D12, DC14, DLOC | Row items (VC18-*) | `6-§5-2` |
| `EC18-NTF-01` | `EIS18-NTF-01` | Participant assignment notification (`EQ18-05` source resolved, MC-817; Section 14.3) | AF/TR | `BUILD — ACTIVATION GATED (PC-07, PC-10)` | WS18-P | D15 | NT-NTF-01, NT-EXT-06 | `1-§17-4` |
| `EC18-HLD-PQ14` | `EIS18-HLD-PQ14` | `PQ-14`: source condition met by locked Kernel v0.6 Section 8.1 A-2 and A-3 (Records … | UQ | `GATE` | WS18-C, WS18-V | D12, D13, D14, D15, PQ14 | NT-CAB-01, NT-SET-01 | `16-§10-2`, `16-§10-3`, `16-§11-2`, `16-§11-3`, `16-§13-2`, `16-§17-3`, `16-§20-6`, `16-§20-7a` |

## 8. Contract Depth: Responsibilities, Boundaries, Invariants and Failure Handling

These subsections state, at engineering-contract depth, how the obligations in Section 7 compose. They cite the locked EIS sections that hold the authoritative text and add nothing to them.

### 8.1 Command responsibilities (EIS Section 9)

Every command is a kernel-checked feature command (`EIS13-CMD-01`, `EIS-ISO-02`): it resolves the verified principal (`EIS-KER-02`), calls `authz.authorize` for the exact business, capability and target, revalidates authority at commit (`EIS-CNF-02`), consumes a confirmation binding where marked (`EIS-CNF-01`), takes its `EIS-CNF-04` key, writes audit in the same transaction and returns a committed outcome. Command and capability names are `TR`, final at package time with SB-P-1.12 registration.

| Command | Capability | Binding | Realizes | Build status |
|---|---|---|---|---|
| `customer.create` | `customer.create` | Yes | `EIS18-CUS-02`, `-CUS-03` | Dependency gated |
| `customer.record_consent` | `customer.consent_record` | Yes | `EIS18-CUS-04` | Dependency gated |
| `order.create_draft` | `order.draft.create` | No | `EIS18-ORD-01`, `-ORD-03` | Dependency gated |
| `order.update_draft` | `order.draft.update` | No | `EIS18-ORD-03` | Dependency gated |
| `order.resolve_ambiguity` | `order.clarify.resolve` | No | `EIS18-ORD-04` | Dependency gated |
| `order.confirm` | `order.confirm` | Yes | `EIS18-ORD-02`, `-ORD-04` | Dependency gated |
| `order.transition` | `order.state.transition` | By state | `EIS18-DLV-01` | Dependency gated |
| `order.cancel` | `order.cancel` | Yes | `EIS18-DLV-01`, `-STK-02` | Dependency gated |
| `order.propose_change` | `order.change.propose` | No | `EIS18-AVL-02` | Dependency gated |
| `order.approve_change` | `order.change.approve` | Yes | `EIS18-AVL-02` | Dependency gated |
| `order.pack_line` | `order.pack.line` | Yes | `EIS18-STK-01`, `-STK-04` | **Owner leg dependency gated; every non-Owner caller `STK_DEPENDENCY_HELD` — BLOCKED FOR IMPLEMENTATION** |
| `order.pack_line_override` | `order.stock.override_negative` | Yes | `EIS18-STK-03` | **Owner leg dependency gated; every non-Owner caller `STK_DEPENDENCY_HELD` — BLOCKED FOR IMPLEMENTATION** |
| `order.confirm_return` | `order.return.confirm` | Yes | `EIS18-STK-02` | **Owner leg dependency gated; every non-Owner caller `STK_DEPENDENCY_HELD` — BLOCKED FOR IMPLEMENTATION** |
| `delivery.assign` | `delivery.assign` | Yes | `EIS18-DLV-02`, `-EXT-04` | Dependency gated |
| `delivery.acknowledge`, `delivery.start`, `delivery.report_unable` | `delivery.task.act` | No | `EIS18-DLV-03` | Dependency gated |
| `delivery.complete` | `delivery.task.act` | No | `EIS18-DLV-03`, `-PRF-01` | Dependency gated |
| `delivery.record_proof` | `delivery.proof.record` | No | `EIS18-PRF-01`, `-PRF-02` | Dependency gated; R2 media types not adopted |
| `cod.set_expected` | `cod.expected.set` | Yes | `EIS18-COD-01` | Dependency gated |
| `cod.record_collected` | `cod.collected.record` | No | `EIS18-COD-01`, `-COD-02` | Dependency gated (`D16`); no Ledger effect before `DTX` |
| `cod.resolve_discrepancy` | `cod.discrepancy.resolve` | Yes | `EIS18-COD-01` | Dependency gated |
| `staff.create_record`, `staff.update_record`, `staff.link_membership` | `staff.record.manage` | Yes | `EIS18-HR-01`, `-HR-02` | Dependency gated |
| `attendance.check_in`, `attendance.check_out` | `attendance.event.record_own` | No | `EIS18-ATT-01`, `-ATT-02` | Dependency gated |
| `attendance.record_for_staff` | `attendance.event.record_for_staff` | Yes | `EIS18-ATT-02` | Dependency gated |
| `attendance.request_correction` | `attendance.correction.request_own` | No | `EIS18-CTX-01` | Dependency gated |
| `attendance.review_correction` | `attendance.correction.review` | Yes | `EIS18-CTX-01` | Dependency gated |
| `leave.request`, `leave.decide` | `leave.request_own`, `leave.review` | Decide only | `EIS18-CTX-01` | Dependency gated |
| `roster.confirm_import` | `staff.shift.manage` | Yes | `EIS18-ROS-01` | Dependency gated |
| `staff.shift.save_and_approve` | `staff.shift.manage` | Yes | `EIS18-HR-04`, `-OVT-02` | Dependency gated |
| `attendance.associate_shift` | `staff.shift.manage` and `attendance.read`, each a current decision for the same staff-record target | Yes | `EIS18-OVT-02` | Dependency gated |
| `overtime.set_feature_opt_in` | `overtime.feature.opt_in` under the Owner command predicate (Section 7, D3) | Yes | `EIS18-OVT-04` | Default OFF (A-5); dependency gated |
| `overtime.create_manual`, `overtime.create_for_staff` | `overtime.record.create_own`, `overtime.record.create` | No | `EIS18-OVT-01` | Dependency gated |
| `overtime.propose_system` | `overtime.system_proposal.initiate`, plus a current `overtime.flag.read` decision for the same target | Yes | `EIS18-OVT-02`, `-OVT-04`, `-OVT-05` | Default OFF (A-5); dependency gated |
| `overtime.review`, `overtime.correct` | `overtime.review`, `overtime.correct` | Yes | `EIS18-OVT-01`, `-OVT-03`, `-OVT-04` | Dependency gated |
| `payroll_support.confirm_draft` | `payroll_support.draft` | Yes | `EIS18-PAY-01`, `-PAY-03` | Dependency gated; calculation `PAY_CALC_HELD` (`DLEG`) |
| `compliance.create_from_preview` | `compliance.record.manage` | Yes | `EIS18-CMP-01`, `-CMP-02` | Dependency gated |
| `compliance.confirm_date` | `compliance.date.confirm` | Yes | `EIS18-CMP-03`, `-REM-01` | Dependency gated |
| `compliance.record_renewal` | `compliance.renewal.record` | Yes | `EIS18-RNW-01` | Dependency gated |
| `location.set_destination_pin` | `location.pin.set` | No | `EIS18-LOC-04` | Dependency gated (`DLOC`, SA-02) |
| `location.erase_for_order` | System, on delivery close | No | `EIS18-LOC-04` | Dependency gated (`DLOC`, SA-02) |

Governed readers (EIS Section 9.1) are kernel-scoped, batched and minimized and never widen ownership (`EC18-RDR-01`); typed tools (Section 9.2) are proposals or reads only and never authority (`EC18-OFD-02`, `-OFD-03`, `-HAI-01`, `-HAI-02`). Delivery Staff participant commands follow Section 7.1 and stay activation gated (`EC18-EXT-03` to `-EXT-08`).

### 8.2 Data boundaries (EIS Sections 8 and 17)

Every object is business-scoped with composite `(business_id, id)` references, born hardened with RLS enabled and no direct client DML (`EC18-OBJ-01`, `EC18-SEC-02`). Names and columns are `TR`.

| Class | Objects | Prerequisite | Rollback boundary | Held slice |
|---|---|---|---|---|
| M18-1 | `customer_messaging_state`, `customer_addresses`, `customer_duplicate_candidates` | SB-P-1.16 identity; `EIS-ID-03` | Pre-data drop; after data, forward-fix | — |
| M18-2 | `orders`, `order_lines`, `order_ambiguities`, `order_state_events`, `order_change_*`, `order_packing_events`, `order_return_confirmations` | Kernel; confirmation; SB-P-1.17 movement path | Pre-data drop; history never deleted after data | No stock effect until the movement path and per-line contract are accepted |
| M18-3 | `delivery_*`, `order_proof_policy`, `cod_*`, `order_ledger_links` | M18-2; `EIS16-ORD-01`; `DTX` decision; SB-P-1.12 interface verified for the participant slice | Same | **Participant slice designed; activates only after M18-7 (PC-07)**. No COD-to-finance before `DTX` |
| M18-4 | `staff_records`, `staff_shifts`, `attendance_*`, `leave_records`, `overtime_*`, `payroll_support_drafts` | Memberships; EQ18-02 | Same | `DLEG` fields absent |
| M18-5 | `compliance_*` | Cabinet; Reminder Engine | Same | — |
| M18-6 | Validation functions, `delivery_destination_pins`, `location_holds`, QR tokens | Specialist review; DC-14 for the geofence | Pre-data drop; erasure unaffected | Hold authority `TBD` |
| M18-7 | Capability and entitlement entries, including the Section 7.1 participant capabilities | Registry; `EIS-KER-05`; SB-P-1.12 participant capability source | Versioned registry | Override and return wait for EQ18-13 and EQ18-14 |
| M18-8 | Governed readers | Feature tables | Drop reader | Never widens ownership |

- No object stores an A2 or B2 raw coordinate; only the C3 temporary destination pin, erased at delivery close (`EC18-LOC-04`).
- `staff_records` holds no KYC or national-ID field; no staff is inferred from Auth users (`EC18-HR-01`).
- Overtime and payroll objects hold no hours-derived, pay or calculated field (`EC18-OVT-01`, `EC18-PAY-01`, `EC18-PAY-03`).
- `delivery_proof_records` holds no `photo`, `signature` or `otp` value and no media reference (`EC18-PRF-03`).
- Owner financial intelligence (profit, Ask CFO, Reference Cost, margin) is unreachable from every object, reader, export, AI context and error path for Manager and Employee by default (`EC18-SEC-03`).

### 8.3 Authorization invariants

1. One kernel decision per check: `authz.authorize` with an explicit active business; the principal comes from the server, never the request (`EC18-SEC-01`, `EIS-ID-06`, `EIS-KER-02`).
2. Capabilities are registry entries with object scope; a Manager acts only through an explicit grant or registered default, an Employee only on own or assigned targets (`EC18-CAP-01`, `-OAU-01`, `-OAU-02`, `-HR-02`, `-HR-03`).
3. `order.stock.override_negative` is Owner or explicitly delegated Manager only, never Employee, Delivery Staff, AI or an ungranted Manager; `order.return.confirm` confers no override (`EC18-STK-03`).
4. Authority is revalidated at commit under `EIS-CNF-02` serialization; a revoked grant, membership, binding or assignment stops the commit.
5. AI, typed tools, automation, support and `service_role` are never authority: no confirmation, approval, override, review or grant (`EC18-OFD-03`, `-HAI-02`).
6. Support only through `EIS-SUP-01`; no routine browsing (`EC18-OFD-07`, `-HPR-01`, `-CPR-01`).
7. A Delivery Staff participant enters only on one named authority path with a current binding, registered capability and assignment (`EC18-EXT-04`, `-EXT-07`).
8. No Owner financial intelligence by default to any staff role (`EC18-SEC-03`); the Owner controls every consequential decision.

No role default, grant or registration is created by this contract.

### 8.4 Transaction requirements (EIS Section 11)

- **Common stock lock order:** authority rows, confirmation binding, kernel re-evaluation, outer idempotency key and outcome, order line then packing event, original movement as the combined compensation target, item locks, under-lock checks, then one governed stock effect with provenance and audit. No binding-last order; no class acquired out of order. Exact lock primitives are package-time (`EC18-STK-01`, `-STK-02`, `-STK-04`).
- **Packing:** one transaction; one decrease per line and packing intent; override and non-override intents never collapse; unknown outcome looked up by key.
- **Physical return:** one serialized transaction per confirmation; combined cap (corrections plus confirmed returns plus request never exceed the original packed decrease; `RET_EXCEEDS_PACKED`); archived item fails closed with a recorded denial; no refund, COD or Ledger effect; cancellation alone never restocks.
- **Authorization provenance:** packing and return records carry immutable same-transaction verified-person, capability, decision, grant, epoch, binding, key and outcome provenance, never caller-supplied.
- **Idempotency:** source-scoped `EIS-CNF-04` keys for every command and intake; unknown commit outcome means lookup before retry, never guessed success (`EC18-IDM-01`).
- **Overtime system-proposed flow:** P0 readiness (platform state, entitlement, Owner opt-in, scoped permission) checked in the committing transaction at every step; derivation only inside the evidence command's transaction; withdrawal serializes against every protected commit (`EC18-OVT-02` to `-OVT-05`).
- **COD:** expected, collected and discrepancy are separate facts; no order-domain income; Ledger link only through `EIS16-ORD-01` after `DTX` (`EC18-COD-01`, `-COD-02`).
- **Atomicity:** each consequential effect, its links, key outcome and audit commit together or not at all.

### 8.5 Failure handling (EIS Section 10)

Outcome codes sit under the `EIS-UX-01` denial contract: calm, non-leaking, non-accusing and machine-readable; message text is never parsed as authority (`EC18-ERR-01`). Every `1-§24-*`, `6-§13-*` and `16-§16-*` exception is a named state or review item, and a narrow failure leaves unrelated operations working (`EC18-OFD-05`, `-HEX-01`, `-CEX-01`). `STK_DEPENDENCY_HELD` and `LEDGER_LINK_HELD` mean the upstream path is unavailable and **no effect occurred**. `PAY_CALC_HELD` refuses any calculation request. `OVT_PLATFORM_NOT_READY` refuses every system-proposed step while the flow is OFF.

### 8.6 Dependencies and build order (EIS Section 6)

| Module | Components | Consumes | Sequence |
|---|---|---|---|
| `features/staff` | C-HR, C-ATT, C-PAY, C-HRF | SB-P-1.12 memberships and kernel; UDI; C-LOC | First (C-HR); C-ATT and C-PAY after |
| `features/compliance` | C-CMP, C-REN, C-CMF | UDI, Cabinet, Reminder Engine, notifications, timezone | First |
| `features/customers` and registry | C-CUS, C-OAU | Shared customer identity (`EIS16-ID-*`); kernel | Second |
| `features/orders` | C-ORD, C-AVL, C-DLV, C-PRF, C-OFD | Typed tools, confirmation, UDI, `EIS17-RO-08`, `EIS17-STK-09`, `EIS17-TXN-04`, `EIS16-ORD-01`; participant path `EIS-ID-07` to `-09` | Second and third; Stock non-Owner legs BLOCKED |
| `features/location` | C-LOC | Kernel; scheduler | Last, behind its specialist gate |
| `features/workspace-views` | C-VIEW | SB-P-1.17 shell; entitlement | After its feature services |
| Records and tests | C-ACC | All | Throughout |

## 9. Founder Decisions and Rulings Realized

| Decision | Realized by | Boundary preserved |
|---|---|---|
| `18:FPDR-1` | `EC18-LOC-*`, `EC18-CUS-05`, `EC18-ATT-01` | Location classes A2, B2, C3; no raw coordinate store; justified individual holds only |
| `18:FPDR-2` | `EC18-LOC-02` | No live or background tracking |
| `18:FPDR-4`, `18:FPDR-4-A` | `EC18-ATT-02` | Other verified attendance methods adoptable |
| `18:FPDR-6` | `EC18-STK-01` to `-STK-04`, `EC18-AVL-01` | Decrease at packing; restock only after confirmed physical return; override Owner or delegated Manager only |
| `18:FPDR-7` | `EC18-PAY-02` | Payroll-support view baseline; export only if adopted |
| `18:FPDR-8` | `EC18-OVT-01` to `-OVT-05` | Three creation origins; neutral flag; human initiation; reviewer rule; default OFF |
| `18:FPDR-9` | — | Touched no `IN SCOPE` row |
| MC-734 R1, R2 | `EC18-PAY-03`, `EC18-PRF-03` | Calculation held; photo, signature and OTP not adopted |
| MC-699, MC-701 (DC-14, DC-13) | `EC18-HLD-DC14`, `EC18-HLD-DC13`, `EC18-ATT-02` | Conditional documentary T6 only |
| MC41 `EQ18-08` T3 NOT TRIGGERED | `EC18-ATT-02` | QR without location and attributed manager-recorded events as documentary method choices, not activated |

## 10. Integrity Checks

| Check | Result |
|---|---|
| `IN SCOPE` rows with at least one obligation | 592 / 592 |
| Obligations; obligations with no row (orphans) | 140; 0 |
| Obligation-to-row links (sum of Section 12 counts) | 5,597, equal to the locked EIS (Section 21.1) |
| Per-row obligation sets equal the locked EIS Section 21.2 sets (with `VER-01` on every row) | Yes, all 592 |
| Rows outside `IN SCOPE` given an obligation | 0 |
| `ALREADY DEMONSTRATED` rows | 0 in the canonical FCTM |
| Stock-dependent rows held (`STK-BLOCKED`) | 12, none omitted |
| New requirement, capability, role default, error code or Product Truth | None |

These are documentary set checks against the locked sources, not runtime evidence.

## 11. FCTM Row to Obligation (592 rows)

Prefix `EC18-` omitted; `VER-01` applies to every row and is listed first. `WS` is the proposed primary workstream (Build Prompt Section 7). `Gate` uses the Section 6 key.

| Row | Kind | WS | Gate | Obligations |
|---|---|---|---|---|
| `1-§1-1` | EXP | WS18-A1 | DEP | VER-01, PRN-01, VER-06 |
| `1-§1-2` | EXP | WS18-A1 | DEP | VER-01, PRN-01, VER-06 |
| `1-§1-3` | EXP | WS18-A1 | DEP | VER-01, PRN-01, VER-06 |
| `1-§2-1` | NARR | WS18-A1 | DEP | VER-01, PRN-01, VER-06 |
| `1-§2-2` | NARR | WS18-A1 | DEP | VER-01, PRN-01, VER-06 |
| `1-§2-3` | NARR | WS18-A1 | DEP | VER-01, PRN-01, VER-06 |
| `1-§2-4` | NARR | WS18-A1 | DEP | VER-01, PRN-01, VER-06 |
| `1-§2-5` | NARR | WS18-A1 | DEP | VER-01, PRN-01, VER-06 |
| `1-§2-6` | NARR | WS18-A1 | DEP | VER-01, PRN-01, VER-06 |
| `1-§2-7` | NARR | WS18-A1 | DEP | VER-01, PRN-01, VER-06 |
| `1-§2-8` | NARR | WS18-A1 | DEP | VER-01, PRN-01, VER-06 |
| `1-§3-1` | PRIN | WS18-A1 | DEP | VER-01, PRN-01, VER-04 |
| `1-§3-2` | PRIN | WS18-A1 | DEP | VER-01, PRN-01, VER-04 |
| `1-§3-3` | PRIN | WS18-A1 | DEP | VER-01, PRN-01, VER-04 |
| `1-§3-4` | NEG | WS18-A1 | DEP | VER-01, PRN-01, SEC-02, ERR-01, NEG-01, VER-03 |
| `1-§3-5` | PRIN | WS18-A1 | DEP | VER-01, PRN-01, VER-04 |
| `1-§3-6` | PRIN | WS18-A1 | DEP | VER-01, PRN-01, VER-04 |
| `1-§3-7` | PRIN | WS18-A1 | DEP | VER-01, PRN-01, VER-04 |
| `1-§3-8` | NEG | WS18-A1 | DEP | VER-01, PRN-01, SEC-02, ERR-01, NEG-01, VER-03 |
| `1-§3-9` | PRIN | WS18-A1 | DEP | VER-01, PRN-01, VER-04 |
| `1-§3-10` | PRIN | WS18-A1 | DEP | VER-01, PRN-01, VER-04 |
| `1-§5-1` | OBL | WS18-A1 | DEP | VER-01, CUS-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-2` | OBL | WS18-A1 | DEP | VER-01, OAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-3` | OBL | WS18-A1 | DEP | VER-01, OAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-4` | OBL | WS18-A1 | DEP | VER-01, OAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D16 |
| `1-§5-5` | OBL | WS18-A1 | DEP | VER-01, OAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-6` | OBL | WS18-A1 | DEP | VER-01, OAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-7` | OBL | WS18-A1 | DEP | VER-01, OAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-8` | OBL | WS18-A1 | DEP | VER-01, OAU-01, SEC-01, SEC-02, SEC-03, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-9` | OBL | WS18-A1 | DEP | VER-01, OAU-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-10` | OBL | WS18-A1 | DEP | VER-01, OAU-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-11` | OBL | WS18-A1 | DEP | VER-01, OAU-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-12` | OBL | WS18-A1 | DEP | VER-01, OAU-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-13` | OBL | WS18-A1 | DEP | VER-01, OAU-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-14` | NEG | WS18-A1 | DEP | VER-01, OAU-02, SEC-01, SEC-02, SEC-03, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `1-§5-15` | OBL | WS18-P | ACT, DEP | VER-01, DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-16` | OBL | WS18-P | ACT, DEP | VER-01, DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-17` | OBL | WS18-P | ACT, DEP | VER-01, DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-18` | OBL | WS18-P | ACT, DEP | VER-01, DLV-03, DLV-04, LOC-05, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§5-19` | OBL | WS18-P | ACT, DEP | VER-01, DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-20` | OBL | WS18-P | ACT, DEP | VER-01, DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D16 |
| `1-§5-21` | OBL | WS18-P | ACT, DEP | VER-01, DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-22` | NEG | WS18-P | ACT, DEP | VER-01, DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, SEC-03, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `1-§5-23` | OBL | WS18-A1 | DEP | VER-01, CUS-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-24` | OBL | WS18-A1 | DNTF, DEP | VER-01, CUS-06, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D20, HLD-DNTF |
| `1-§5-25` | OBL | WS18-A1 | DNTF, DEP | VER-01, CUS-06, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D20, HLD-DNTF |
| `1-§5-26` | OBL | WS18-A1 | DNTF, DEP | VER-01, CUS-05, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D20, HLD-DNTF, HLD-DLOC |
| `1-§5-27` | OBL | WS18-A1 | DNTF, DEP | VER-01, CUS-06, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D15, HLD-D20, HLD-DNTF |
| `1-§5-28` | OBL | WS18-A1 | DNTF, DEP | VER-01, CUS-06, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D20, HLD-DNTF |
| `1-§5-29` | OBL | WS18-A1 | DNTF, DEP | VER-01, CUS-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D20, HLD-DNTF, HLD-DC13 |
| `1-§5-30` | NEG | WS18-A1 | DEP | VER-01, CUS-06, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `1-§6-1` | RULE | WS18-A1 | DEP | VER-01, CUS-01, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12 |
| `1-§6-2` | OBL | WS18-A1 | DEP | VER-01, CUS-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§6-3` | OBL | WS18-A1 | DEP | VER-01, CUS-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D13 |
| `1-§6-4` | OBL | WS18-A1 | DEP | VER-01, CUS-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `1-§6-5` | OBL | WS18-A1 | DEP | VER-01, CUS-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `1-§6-6` | OBL | WS18-A1 | DEP | VER-01, CUS-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§6-7` | OBL | WS18-A1 | DEP | VER-01, CUS-03, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-05, HLD-D12 |
| `1-§7-1` | OBL | WS18-A1 | DNTF, DEP | VER-01, CUS-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D20, HLD-DNTF, HLD-DC13 |
| `1-§7-2` | OBL | WS18-A1 | DNTF, DEP | VER-01, CUS-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D20, HLD-DNTF, HLD-DC13 |
| `1-§7-4` | NEG | WS18-A1 | DNTF, DEP | VER-01, CUS-04, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-D20, HLD-DNTF, HLD-DC13 |
| `1-§7-5` | NEG | WS18-A1 | DNTF, DEP | VER-01, CUS-04, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-D20, HLD-DNTF, HLD-DC13 |
| `1-§8-1` | RULE | WS18-A1 | DEP | VER-01, ORD-01, SEC-02, VER-04, HLD-D13 |
| `1-§8-6` | OBL | WS18-A1 | DEP | VER-01, ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§8-7` | OBL | WS18-A1 | DEP | VER-01, ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§8-8` | OBL | WS18-A1 | DEP | VER-01, ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DV |
| `1-§8-9` | OBL | WS18-A1 | DEP | VER-01, ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `1-§8-10` | OBL | WS18-A1 | DEP | VER-01, ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `1-§8-11` | RULE | WS18-A1 | DEP | VER-01, ORD-02, SEC-02, VER-04, HLD-D14 |
| `1-§8-12` | NEG | WS18-A1 | DEP | VER-01, ORD-02, SEC-02, ERR-01, NEG-01, VER-03, HLD-D14 |
| `1-§9-1` | OBL | WS18-A1 | DEP | VER-01, ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-2` | OBL | WS18-A1 | DEP | VER-01, ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-3` | OBL | WS18-A1 | DEP | VER-01, ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-4` | OBL | WS18-A1 | DEP | VER-01, ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-5` | OBL | WS18-A1 | DEP | VER-01, ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-6` | OBL | WS18-A1 | DEP | VER-01, ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-7` | OBL | WS18-A1 | DEP | VER-01, ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-8` | OBL | WS18-A1 | DEP | VER-01, CUS-05, ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-9` | OBL | WS18-A1 | DEP | VER-01, ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-10` | OBL | WS18-A1 | DEP | VER-01, ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-11` | OBL | WS18-A1 | DEP | VER-01, ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-12` | OBL | WS18-A1 | DEP | VER-01, ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-13` | OBL | WS18-A1 | DEP | VER-01, ORD-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-14` | OBL | WS18-A1 | DEP | VER-01, ORD-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-15` | OBL | WS18-A1 | DEP | VER-01, CUS-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-16` | OBL | WS18-A1 | DEP | VER-01, CUS-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-17` | OBL | WS18-A1 | DEP | VER-01, ORD-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-18` | OBL | WS18-A1 | DEP | VER-01, ORD-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-19` | NEG | WS18-A1 | DEP | VER-01, ORD-04, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13 |
| `1-§10-1` | RULE | WS18-A2 | STK-BLOCKED, DEP | VER-01, AVL-02, STK-01, STK-02, STK-04, SEC-01, SEC-02, CAP-01, VER-02, HLD-D12 |
| `1-§10-2` | OBL | WS18-A1 | DEP | VER-01, AVL-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D17 |
| `1-§10-3` | OBL | WS18-A2 | STK-BLOCKED, DEP | VER-01, AVL-02, STK-01, STK-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D17 |
| `1-§10-4` | OBL | WS18-A2 | STK-BLOCKED, DEP | VER-01, AVL-02, STK-01, STK-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D17 |
| `1-§10-5` | OBL | WS18-A2 | STK-BLOCKED, DEP | VER-01, AVL-02, STK-01, STK-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D17 |
| `1-§10-6` | OBL | WS18-A2 | STK-BLOCKED, DEP | VER-01, AVL-02, STK-01, STK-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D17 |
| `1-§10-7` | EX | WS18-A2 | STK-BLOCKED, DEP | VER-01, AVL-02, STK-01, STK-04, MIG-03, VER-02, HLD-D17 |
| `1-§10-8` | OBL | WS18-A2 | STK-BLOCKED, DEP | VER-01, AVL-02, STK-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§10-9` | NEG | WS18-A2 | STK-BLOCKED, DEP | VER-01, AVL-01, STK-03, STK-04, SEC-02, ERR-01, NEG-01, MIG-03, VER-03, HLD-D17 |
| `1-§11-1` | OBL | WS18-A3 | DEP | VER-01, DLV-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§11-2` | OBL | WS18-A3 | DEP | VER-01, DLV-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§11-3` | OBL | WS18-A3 | DEP | VER-01, DLV-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§11-4` | RULE | WS18-A3 | DEP | VER-01, DLV-01, SEC-02, VER-04 |
| `1-§12-1` | OBL | WS18-A3 | DEP | VER-01, DLV-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§12-2` | OBL | WS18-A3 | DEP | VER-01, DLV-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§12-3` | OBL | WS18-P | ACT, DEP | VER-01, DLV-02, EXT-02, EXT-04, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§12-4` | OBL | WS18-A3 | DEP | VER-01, DLV-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§12-5` | OBL | WS18-A3 | DEP | VER-01, DLV-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§12-6` | OBL | WS18-A3 | DEP | VER-01, DLV-02, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-05, HLD-D12 |
| `1-§12-7` | OBL | WS18-A3 | DEP | VER-01, DLV-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D13 |
| `1-§13-1` | RULE | WS18-A3 | DEP | VER-01, DLV-03, SEC-02, VER-06 |
| `1-§13-2` | OBL | WS18-P | ACT, DEP | VER-01, DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§13-3` | OBL | WS18-P | ACT, DEP | VER-01, DLV-04, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DMAP |
| `1-§13-4` | OBL | WS18-P | ACT, DEP | VER-01, DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§13-5` | OBL | WS18-P | ACT, DEP | VER-01, DLV-03, LOC-05, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14, HLD-DLOC |
| `1-§13-6` | OBL | WS18-P | ACT, DEP | VER-01, DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D16 |
| `1-§13-7` | OBL | WS18-P | ACT, DEP | VER-01, DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§13-8` | OBL | WS18-P | ACT, DEP | VER-01, DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§13-9` | RULE | WS18-A3 | DEP | VER-01, DLV-03, SEC-02, VER-04 |
| `1-§14-1` | PRIN | WS18-D | DEP | VER-01, LOC-01, LOC-05, SEC-01, CAP-01, VER-04, HLD-D12, HLD-DLOC |
| `1-§14-2` | OBL | WS18-D | DEP | VER-01, LOC-01, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§14-3` | OBL | WS18-D | DEP | VER-01, LOC-01, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§14-4` | OBL | WS18-D | DEP | VER-01, LOC-01, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§14-5` | NEG | WS18-D | DEP | VER-01, LOC-02, LOC-05, SEC-02, ERR-01, NEG-01, VER-03, VER-04, HLD-DLOC |
| `1-§14-6` | NEG | WS18-D | DEP | VER-01, LOC-02, LOC-05, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-DLOC |
| `1-§14-7` | NEG | WS18-D | DEP | VER-01, LOC-02, LOC-05, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-DLOC |
| `1-§14-8` | OBL | WS18-D | DEP | VER-01, LOC-03, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§14-9` | OBL | WS18-D | DEP | VER-01, LOC-03, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§14-10` | OBL | WS18-D | DEP | VER-01, LOC-04, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§14-11` | OBL | WS18-D | DEP | VER-01, LOC-03, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§14-12` | RULE | WS18-D | DEP | VER-01, LOC-04, LOC-05, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12, HLD-DLOC |
| `1-§14-13` | RULE | WS18-D | DEP | VER-01, LOC-04, SEC-02, VER-03 |
| `1-§15-1` | OBL | WS18-A3 | DEP | VER-01, PRF-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `1-§15-2` | EX | WS18-P | ACT, DEP | VER-01, PRF-01, EXT-02, EXT-03, EXT-07, EXT-08, SEC-01, CAP-01, VER-02, HLD-D12, HLD-D14 |
| `1-§15-3` | EX | WS18-A3 | DEP | VER-01, PRF-02, SEC-01, CAP-01, VER-02, HLD-D12, HLD-D14 |
| `1-§15-4` | EX | WS18-A3 | R2, DNTF, DEP | VER-01, PRF-03, SEC-01, CAP-01, VER-02, HLD-D12, HLD-D14, HLD-DNTF |
| `1-§15-5` | EX | WS18-A3 | DEP | VER-01, PRF-02, LOC-05, SEC-01, CAP-01, VER-02, HLD-D12, HLD-DLOC |
| `1-§15-6` | EX | WS18-A3 | DEP | VER-01, COD-01, SEC-01, CAP-01, MIG-03, VER-02, HLD-D12, HLD-D16, HLD-DPAY |
| `1-§15-7` | EX | WS18-A3 | DEP | VER-01, PRF-01, SEC-01, CAP-01, VER-02, HLD-D12, HLD-D14 |
| `1-§15-8` | OBL | WS18-A3 | DEP | VER-01, PRF-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `1-§15-9` | NEG | WS18-A3 | DEP | VER-01, PRF-04, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-D14 |
| `1-§15-10` | NEG | WS18-A3 | DEP | VER-01, PRF-04, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-D14 |
| `1-§16-1` | OBL | WS18-A3 | DEP | VER-01, COD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D14, HLD-D16 |
| `1-§16-2` | OBL | WS18-A3 | DEP | VER-01, COD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D14, HLD-D16 |
| `1-§16-3` | OBL | WS18-A3 | DEP | VER-01, COD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D14, HLD-D16 |
| `1-§16-4` | RULE | WS18-A3 | DEP | VER-01, COD-02, SEC-02, MIG-03, VER-04, HLD-D16, HLD-DPAY |
| `1-§16-5` | NEG | WS18-A3 | DTX, DEP | VER-01, COD-02, SEC-02, ERR-01, NEG-01, MIG-03, VER-03, HLD-D14, HLD-D16, HLD-DTX |
| `1-§16-6` | OBL | WS18-A3 | DTX, DEP | VER-01, COD-02, SEC-02, IDM-01, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-05, HLD-D14, HLD-D16, HLD-DTX |
| `1-§17-1` | RULE | WS18-A3 | DEP | VER-01, OFD-01, SEC-02, VER-04, HLD-D15 |
| `1-§17-2` | OBL | WS18-A3 | DEP | VER-01, OFD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15 |
| `1-§17-3` | OBL | WS18-A3 | DNTF, DEP | VER-01, OFD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-D20, HLD-DNTF |
| `1-§17-4` | OBL | WS18-P | ACT, DEP | VER-01, OFD-01, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, NTF-01 |
| `1-§17-5` | OBL | WS18-A3 | DNTF, DEP | VER-01, OFD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-D20, HLD-DNTF |
| `1-§17-6` | OBL | WS18-A3 | DNTF, DEP | VER-01, OFD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-D20, HLD-DNTF |
| `1-§17-7` | OBL | WS18-A3 | DEP | VER-01, OFD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15 |
| `1-§17-8` | OBL | WS18-A3 | DEP | VER-01, OFD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15 |
| `1-§17-9` | NEG | WS18-A3 | DEP | VER-01, OFD-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D15 |
| `1-§18-7` | RULE | WS18-A1 | DEP | VER-01, ORD-01, SEC-02, VER-04 |
| `1-§19-1` | OBL | WS18-A1 | DEP | VER-01, ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§19-2` | OBL | WS18-A1 | DEP | VER-01, ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DV |
| `1-§19-3` | OBL | WS18-A1 | DEP | VER-01, ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `1-§19-4` | OBL | WS18-A1 | DEP | VER-01, ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `1-§19-5` | RULE | WS18-A1 | DEP | VER-01, ORD-01, SEC-01, SEC-02, CAP-01, VER-02, HLD-D12, HLD-D13 |
| `1-§20-1` | OBL | WS18-A1 | DNTF, DEP | VER-01, ORD-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-06, HLD-D13, HLD-D20, HLD-DNTF |
| `1-§20-2` | OBL | WS18-A1 | DEP | VER-01, ORD-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-06, HLD-D13 |
| `1-§21-1` | OBL | WS18-A3 | DEP | VER-01, OFD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `1-§21-2` | OBL | WS18-A3 | DEP | VER-01, OFD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `1-§21-3` | OBL | WS18-A3 | DEP | VER-01, OFD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `1-§21-4` | OBL | WS18-A3 | DEP | VER-01, OFD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `1-§21-5` | OBL | WS18-A3 | DEP | VER-01, OFD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `1-§21-6` | OBL | WS18-A3 | DEP | VER-01, OFD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `1-§21-7` | OBL | WS18-A3 | DEP | VER-01, OFD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `1-§21-8` | NEG | WS18-A3 | DEP | VER-01, ORD-04, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `1-§21-9` | NEG | WS18-A3 | DEP | VER-01, OFD-03, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `1-§21-10` | NEG | WS18-A3 | DEP | VER-01, PRF-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `1-§21-11` | NEG | WS18-A3 | DEP | VER-01, OFD-03, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `1-§21-12` | NEG | WS18-A3 | DEP | VER-01, OFD-03, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `1-§21-13` | NEG | WS18-A3 | DEP | VER-01, OFD-03, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `1-§22-1` | OBL | WS18-A3 | DEP | VER-01, ORD-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-2` | OBL | WS18-A3 | DEP | VER-01, CUS-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-3` | OBL | WS18-A3 | DEP | VER-01, CUS-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-4` | OBL | WS18-A3 | DEP | VER-01, ORD-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-5` | OBL | WS18-A3 | DEP | VER-01, ORD-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-6` | OBL | WS18-A3 | DEP | VER-01, DLV-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-7` | OBL | WS18-A3 | DEP | VER-01, DLV-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-8` | OBL | WS18-A3 | DEP | VER-01, DLV-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-9` | OBL | WS18-A3 | DEP | VER-01, PRF-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-10` | OBL | WS18-A3 | DEP | VER-01, COD-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-04, HLD-D12, HLD-D14, HLD-D16 |
| `1-§22-11` | OBL | WS18-A3 | DEP | VER-01, CUS-05, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14, HLD-DLOC |
| `1-§22-12` | OBL | WS18-A3 | DEP | VER-01, OFD-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-13` | OBL | WS18-A3 | DEP | VER-01, ORD-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-14` | OBL | WS18-A3 | DEP | VER-01, OFD-04, SEC-01, SEC-02, AUD-01, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-15` | NEG | WS18-A3 | DEP | VER-01, CUS-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-D14 |
| `1-§23-1` | RULE | WS18-A3 | DEP | VER-01, OFD-06, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12 |
| `1-§23-2` | RULE | WS18-A3 | DEP | VER-01, CUS-01, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12 |
| `1-§23-3` | RULE | WS18-A3 | DEP | VER-01, OFD-06, SEC-02, VER-04, HLD-D14 |
| `1-§23-4` | RULE | WS18-A3 | DEP | VER-01, ORD-05, SEC-02, VER-04, HLD-D13 |
| `1-§23-5a` | RULE | WS18-A3 | DEP | VER-01, ORD-01, SEC-02, VER-04, HLD-D13 |
| `1-§23-6` | RULE | WS18-A3 | DEP | VER-01, OFD-06, SEC-02, VER-04, HLD-D14 |
| `1-§23-7` | RULE | WS18-A3 | DEP | VER-01, AVL-01, SEC-02, MIG-03, VER-04, HLD-D17 |
| `1-§23-8` | RULE | WS18-A3 | DEP | VER-01, OFD-01, SEC-02, VER-04, HLD-D15 |
| `1-§23-9` | RULE | WS18-A3 | DEP | VER-01, OFD-06, SEC-02, VER-04, HLD-D15 |
| `1-§23-10` | RULE | WS18-A3 | DEP | VER-01, OFD-06, LOC-05, SEC-02, VER-04, HLD-DLOC |
| `1-§23-11` | RULE | WS18-A3 | DEP | VER-01, OFD-06, SEC-01, SEC-02, AUD-01, CAP-01, VER-04, HLD-D12 |
| `1-§23-12` | RULE | WS18-A3 | DEP | VER-01, COD-02, SEC-02, MIG-03, VER-04, HLD-D16 |
| `1-§24-1` | OBL | WS18-A3 | DEP | VER-01, CUS-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-2` | OBL | WS18-A3 | DEP | VER-01, ORD-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-3` | OBL | WS18-A2 | STK-BLOCKED, DEP | VER-01, AVL-02, STK-01, STK-02, STK-03, STK-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-03, MIG-04, VER-03, HLD-D12, HLD-D17 |
| `1-§24-4` | OBL | WS18-A3 | DEP | VER-01, CUS-05, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12, HLD-DLOC |
| `1-§24-5` | OBL | WS18-P | ACT, DEP | VER-01, DLV-02, EXT-02, EXT-04, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-6` | OBL | WS18-P | ACT, DEP | VER-01, OFD-05, EXT-02, EXT-04, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-7` | OBL | WS18-A3 | DEP | VER-01, DLV-02, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-05, HLD-D12 |
| `1-§24-8` | OBL | WS18-A2 | STK-BLOCKED, DEP | VER-01, AVL-02, STK-01, STK-02, STK-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-9` | OBL | WS18-A3 | DEP | VER-01, OFD-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-10` | OBL | WS18-A3 | DEP | VER-01, OFD-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-11` | OBL | WS18-A3 | DEP | VER-01, PRF-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-12` | OBL | WS18-A3 | DEP | VER-01, COD-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-03, MIG-04, VER-03, HLD-D12, HLD-D16 |
| `1-§24-13` | OBL | WS18-A3 | DNTF, DEP | VER-01, OFD-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12, HLD-D15, HLD-D20, HLD-DNTF |
| `1-§24-14` | OBL | WS18-A3 | DEP | VER-01, COD-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-03, MIG-04, VER-03, HLD-D12, HLD-D16 |
| `1-§24-15` | RULE | WS18-A3 | DEP | VER-01, OFD-05, SEC-01, SEC-02, CAP-01, ERR-01, VER-03, HLD-D12 |
| `1-§25-1` | PRIN | WS18-A3 | DEP | VER-01, OFD-07, SEC-01, CAP-01, VER-03, HLD-D12 |
| `1-§25-2` | PRIN | WS18-A3 | DEP | VER-01, OFD-07, SEC-01, CAP-01, VER-03, HLD-D12 |
| `1-§25-3` | PRIN | WS18-P | ACT, DEP | VER-01, OFD-07, EXT-02, EXT-03, EXT-04, EXT-07, EXT-08, SEC-01, CAP-01, VER-03, HLD-D12 |
| `1-§25-4` | PRIN | WS18-A3 | DEP | VER-01, OFD-07, SEC-01, CAP-01, VER-03, HLD-D12 |
| `1-§25-5` | PRIN | WS18-A3 | DEP | VER-01, OFD-07, SEC-01, CAP-01, VER-03, HLD-D12 |
| `1-§25-6` | PRIN | WS18-A3 | DEP | VER-01, OFD-07, SEC-01, SEC-03, CAP-01, VER-03, HLD-D12 |
| `1-§25-7` | PRIN | WS18-A3 | DEP | VER-01, OFD-07, SEC-01, CAP-01, VER-03, HLD-D12 |
| `1-§25-8` | RULE | WS18-A3 | DEP | VER-01, OFD-07, SEC-01, SEC-02, CAP-01, VER-03, HLD-D12, HLD-D19 |
| `1-§26-1` | SCN | WS18-V | DNTF, DEP | VER-01, ACC-01, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D13, HLD-D20, HLD-DNTF |
| `1-§26-2` | SCN | WS18-V | DEP | VER-01, ACC-01, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D13, HLD-DV |
| `1-§26-3` | SCN | WS18-V | DEP | VER-01, ACC-01, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D13, HLD-D14 |
| `1-§26-4` | SCN | WS18-V | DEP | VER-01, ACC-01, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D13 |
| `1-§26-5` | SCN | WS18-V | DEP | VER-01, ACC-01, SEC-01, CAP-01, MIG-03, VER-02, VER-07, HLD-D12, HLD-D17 |
| `1-§26-6` | SCN | WS18-V | DEP | VER-01, LOC-05, ACC-01, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-DLOC |
| `1-§26-7` | SCN | WS18-P | ACT, DEP | VER-01, DLV-03, ACC-01, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, CAP-01, VER-03, VER-07, HLD-D12, HLD-D13 |
| `1-§26-8` | SCN | WS18-P | ACT, DEP | VER-01, DLV-03, ACC-01, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, CAP-01, VER-03, VER-07, HLD-D12, HLD-D13 |
| `1-§26-9` | SCN | WS18-V | DEP | VER-01, LOC-05, ACC-01, SEC-01, CAP-01, VER-03, VER-07, HLD-D12, HLD-DLOC |
| `1-§26-10` | SCN | WS18-V | DEP | VER-01, ACC-01, SEC-01, CAP-01, VER-02, VER-03, VER-07, HLD-D12, HLD-D13 |
| `1-§26-11` | SCN | WS18-V | DTX, DEP | VER-01, ACC-01, SEC-01, IDM-01, CAP-01, MIG-03, VER-02, VER-05, VER-07, HLD-D12, HLD-D16, HLD-DTX |
| `1-§26-12a` | SCN | WS18-V | DEP | VER-01, ACC-01, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D13 |
| `1-§26-13` | SCN | WS18-V | DEP | VER-01, ACC-01, SEC-01, CAP-01, VER-03, VER-07, HLD-D12, HLD-D13 |
| `1-§26-14` | SCN | WS18-V | DEP | VER-01, ACC-01, SEC-01, IDM-01, CAP-01, VER-05, VER-07, HLD-D12, HLD-D13 |
| `1-§28-1` | PRIN | WS18-A3 | DEP | VER-01, PRN-01, VER-04 |
| `1-§31-1` | GATE | WS18-V | DEP | VER-01, ACC-01, MIG-04, VER-07 |
| `1-§31-2` | GATE | WS18-V | DEP | VER-01, ACC-01, MIG-04, VER-07 |
| `6-§1-1` | EXP | WS18-B | DEP | VER-01, PRN-02, VER-06 |
| `6-§2-1` | NARR | WS18-B | DEP | VER-01, PRN-02, VER-06 |
| `6-§3-1` | OBL | WS18-B | DEP | VER-01, HR-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§3-2` | OBL | WS18-B | DEP | VER-01, HR-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§3-3` | OBL | WS18-B | DEP | VER-01, HR-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DSCH |
| `6-§3-4` | OBL | WS18-B | DEP | VER-01, ATT-01, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `6-§3-5` | OBL | WS18-B | DEP | VER-01, CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§3-6` | OBL | WS18-B | DLEG, DEP | VER-01, PAY-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLEG |
| `6-§3-7` | OBL | WS18-B | DEP | VER-01, HR-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§3-8` | OBL | WS18-B | DEP | VER-01, HR-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§3-9` | OBL | WS18-B | DEP | VER-01, HR-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D15 |
| `6-§4-1` | OBL | WS18-B | DEP | VER-01, HR-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§4-2` | OBL | WS18-B | DEP | VER-01, HR-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§4-3` | OBL | WS18-B | DTX, DEP | VER-01, HR-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D14, HLD-DTX |
| `6-§4-4` | OBL | WS18-B | DEP | VER-01, HR-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§4-5` | OBL | WS18-B | DEP | VER-01, HR-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D15 |
| `6-§4-6` | OBL | WS18-B | DEP | VER-01, HR-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§4-7` | NEG | WS18-B | DEP | VER-01, HR-03, SEC-01, SEC-02, SEC-03, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `6-§5-1` | OBL | WS18-B | DEP | VER-01, ATT-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§5-2` | EX | WS18-B | DC14, DEP | VER-01, ATT-02, LOC-05, SEC-01, CAP-01, VER-02, HLD-D12, HLD-DLOC, HLD-DC14 |
| `6-§5-3` | RULE | WS18-B | DEP | VER-01, ATT-03, LOC-05, SEC-02, VER-03, HLD-DLOC |
| `6-§5-4` | NEG | WS18-B | DEP | VER-01, ATT-03, LOC-05, SEC-02, ERR-01, NEG-01, VER-03, HLD-DLOC |
| `6-§5-5` | RULE | WS18-B | DEP | VER-01, ATT-03, LOC-05, SEC-02, VER-04, HLD-DLOC |
| `6-§6-1` | OBL | WS18-B | DEP | VER-01, ROS-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `6-§6-2` | RULE | WS18-B | DEP | VER-01, ROS-01, SEC-02, VER-04, HLD-D14 |
| `6-§6-3` | NEG | WS18-B | DEP | VER-01, ROS-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D14 |
| `6-§7-1` | RULE | WS18-B | DEP | VER-01, CTX-01, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12 |
| `6-§7-2` | OBL | WS18-B | DEP | VER-01, CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§7-3` | OBL | WS18-B | DEP | VER-01, CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§7-4` | OBL | WS18-B | DEP | VER-01, CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§7-5` | OBL | WS18-B | DEP | VER-01, CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§7-6` | OBL | WS18-B | DEP | VER-01, CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12 |
| `6-§8-1` | PRIN | WS18-B | DEP | VER-01, PAY-01, SEC-01, CAP-01, VER-03, HLD-D12 |
| `6-§8-2` | OBL | WS18-B | DLEG, DEP | VER-01, PAY-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLEG |
| `6-§8-3` | NEG | WS18-B | DEP | VER-01, PAY-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `6-§8-4` | NEG | WS18-B | DEP | VER-01, PAY-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `6-§8-5` | NEG | WS18-B | DEP | VER-01, PAY-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `6-§8-6` | NEG | WS18-B | DEP | VER-01, PAY-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `6-§8-7` | OBL | WS18-B | DEP | VER-01, PAY-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, VER-04, HLD-D12 |
| `6-§9-1` | OBL | WS18-B | DEP | VER-01, HAI-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `6-§9-2` | OBL | WS18-B | DEP | VER-01, HAI-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `6-§9-3` | OBL | WS18-B | DEP | VER-01, HAI-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `6-§9-4` | OBL | WS18-B | DEP | VER-01, HAI-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `6-§9-5` | OBL | WS18-B | DEP | VER-01, HAI-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `6-§9-6` | OBL | WS18-B | DEP | VER-01, HAI-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `6-§9-7` | NEG | WS18-B | DEP | VER-01, HAI-02, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `6-§9-8` | NEG | WS18-B | DEP | VER-01, HAI-02, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `6-§9-9` | NEG | WS18-B | DEP | VER-01, HAI-02, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `6-§9-10` | NEG | WS18-B | DEP | VER-01, HAI-02, SEC-02, SEC-03, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `6-§9-11` | NEG | WS18-B | DEP | VER-01, HAI-02, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `6-§10-1a` | RULE | WS18-B | DEP | VER-01, HFD-01, SEC-01, SEC-02, CAP-01, VER-02, HLD-D12, HLD-D13 |
| `6-§10-2` | NEG | WS18-B | DEP | VER-01, HFD-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `6-§11-1` | RULE | WS18-B | DEP | VER-01, HFD-01, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12 |
| `6-§11-2` | RULE | WS18-B | DEP | VER-01, HFD-01, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12 |
| `6-§11-3` | RULE | WS18-B | DEP | VER-01, HFD-01, SEC-02, VER-04, HLD-D13 |
| `6-§11-4` | RULE | WS18-B | DEP | VER-01, HFD-01, SEC-02, VER-04, HLD-D13 |
| `6-§11-5` | RULE | WS18-B | DEP | VER-01, HFD-01, SEC-02, VER-04, HLD-D14 |
| `6-§11-6` | RULE | WS18-B | DEP | VER-01, HFD-01, SEC-02, VER-04, HLD-D15 |
| `6-§11-7` | RULE | WS18-B | DEP | VER-01, HFD-01, SEC-02, VER-04, HLD-D15 |
| `6-§11-8` | RULE | WS18-B | DEP | VER-01, HFD-01, LOC-01, LOC-05, SEC-02, VER-04, HLD-DLOC |
| `6-§11-9` | RULE | WS18-B | DEP | VER-01, HFD-01, SEC-01, SEC-02, AUD-01, CAP-01, VER-04, HLD-D12 |
| `6-§12-1` | PRIN | WS18-B | DEP | VER-01, HPR-01, SEC-01, CAP-01, VER-03, HLD-D12 |
| `6-§12-2` | PRIN | WS18-B | DEP | VER-01, HPR-01, SEC-01, CAP-01, VER-03, HLD-D12 |
| `6-§12-3` | PRIN | WS18-B | DEP | VER-01, HPR-01, SEC-01, CAP-01, VER-03, HLD-D12 |
| `6-§12-4` | PRIN | WS18-B | DEP | VER-01, HPR-01, LOC-05, SEC-01, CAP-01, VER-03, HLD-D12, HLD-DLOC |
| `6-§12-5` | PRIN | WS18-B | DEP | VER-01, HPR-01, SEC-01, AUD-01, CAP-01, VER-03, HLD-D12 |
| `6-§12-6` | NEG | WS18-B | DEP | VER-01, HPR-01, LOC-05, SEC-02, ERR-01, NEG-01, VER-03, HLD-DLOC |
| `6-§12-7` | NEG | WS18-B | DEP | VER-01, HPR-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `6-§12-8` | RULE | WS18-B | DEP | VER-01, HPR-01, SEC-01, SEC-02, CAP-01, VER-03, HLD-D12, HLD-D19 |
| `6-§13-1` | OBL | WS18-B | DEP | VER-01, HEX-01, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-05, HLD-D12 |
| `6-§13-2` | OBL | WS18-B | DEP | VER-01, HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§13-3` | OBL | WS18-B | DEP | VER-01, HEX-01, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `6-§13-4` | OBL | WS18-B | DEP | VER-01, HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§13-5` | OBL | WS18-B | DEP | VER-01, HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§13-6` | OBL | WS18-B | DEP | VER-01, HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§13-7` | OBL | WS18-B | DEP | VER-01, HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§13-8` | OBL | WS18-B | DEP | VER-01, HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§13-9` | OBL | WS18-B | DEP | VER-01, HEX-01, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-05, HLD-D12 |
| `6-§13-10` | OBL | WS18-B | DEP | VER-01, HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§13-11` | OBL | WS18-B | DEP | VER-01, HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§14-1` | SCN | WS18-V | DEP | VER-01, ACC-02, SEC-01, CAP-01, VER-02, VER-07, HLD-D12 |
| `6-§14-2` | SCN | WS18-V | DEP | VER-01, ACC-02, SEC-01, CAP-01, VER-02, VER-07, HLD-D12 |
| `6-§14-3` | SCN | WS18-V | DEP | VER-01, LOC-05, ACC-02, SEC-01, CAP-01, VER-02, VER-03, VER-07, HLD-D12, HLD-DLOC |
| `6-§14-4` | SCN | WS18-V | DEP | VER-01, ACC-02, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D14 |
| `6-§14-5` | SCN | WS18-V | DEP | VER-01, ACC-02, SEC-01, CAP-01, VER-02, VER-07, HLD-D12 |
| `6-§14-6` | SCN | WS18-V | DEP | VER-01, ACC-02, SEC-01, CAP-01, VER-02, VER-07, HLD-D12 |
| `6-§14-7` | SCN | WS18-V | DEP | VER-01, ACC-02, SEC-01, CAP-01, VER-03, VER-07, HLD-D12 |
| `6-§14-8` | SCN | WS18-V | DEP | VER-01, ACC-02, SEC-01, CAP-01, VER-02, VER-04, VER-07, HLD-D12 |
| `6-§14-9` | SCN | WS18-V | DEP | VER-01, ACC-02, SEC-01, CAP-01, VER-06, VER-07, HLD-D12, HLD-D13 |
| `6-§14-10` | SCN | WS18-V | DEP | VER-01, ACC-02, SEC-01, CAP-01, VER-03, VER-07, HLD-D12 |
| `6-§17-1` | GATE | WS18-V | DEP | VER-01, ACC-02, MIG-04, VER-07 |
| `S11-L443-1` | OBL | WS18-B | DLEG, OFF, DEP | VER-01, OVT-01, OVT-02, OVT-04, OVT-05, LOC-05, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, VER-05, HLD-D12, HLD-DSCH, HLD-DLOC, HLD-DLEG |
| `S11-L443-2` | OBL | WS18-B | OFF, DEP | VER-01, OVT-01, OVT-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, VER-03, HLD-D12 |
| `S11-L443-3` | OBL | WS18-B | DLEG, OFF, DEP | VER-01, OVT-01, OVT-04, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, VER-03, VER-05, HLD-D12, HLD-DLEG |
| `S11-L443-4` | OBL | WS18-B | DLEG, OFF, DEP | VER-01, OVT-01, OVT-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, VER-03, HLD-D12, HLD-DLEG |
| `S11-L443-5` | OBL | WS18-B | OFF, DEP | VER-01, OVT-01, OVT-04, SEC-01, SEC-02, AUD-01, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, VER-04, HLD-D12 |
| `16-§1-1` | EXP | WS18-C | DEP | VER-01, PRN-03, VER-06 |
| `16-§1-2` | EXP | WS18-C | DEP | VER-01, PRN-03, VER-06 |
| `16-§2-1` | NARR | WS18-C | DEP | VER-01, PRN-03, VER-06 |
| `16-§2-2` | NARR | WS18-C | DEP | VER-01, PRN-03, VER-06 |
| `16-§2-3` | NARR | WS18-C | DEP | VER-01, PRN-03, VER-06 |
| `16-§2-4` | NARR | WS18-C | DEP | VER-01, PRN-03, VER-06 |
| `16-§2-5` | NARR | WS18-C | DEP | VER-01, PRN-03, VER-06 |
| `16-§2-6` | NARR | WS18-C | DEP | VER-01, PRN-03, VER-06 |
| `16-§3-1` | PRIN | WS18-C | DEP | VER-01, PRN-03, VER-04 |
| `16-§3-2` | PRIN | WS18-C | DEP | VER-01, PRN-03, VER-04 |
| `16-§3-3` | PRIN | WS18-C | DEP | VER-01, PRN-03, VER-04 |
| `16-§3-4` | PRIN | WS18-C | DEP | VER-01, PRN-03, VER-04 |
| `16-§3-5` | PRIN | WS18-C | DEP | VER-01, PRN-03, VER-04 |
| `16-§3-6` | NEG | WS18-C | DEP | VER-01, PRN-03, SEC-02, ERR-01, NEG-01, VER-03 |
| `16-§3-7` | PRIN | WS18-C | DEP | VER-01, PRN-03, VER-04 |
| `16-§4-1` | OBL | WS18-C | DEP | VER-01, CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-2` | OBL | WS18-C | DEP | VER-01, CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-3` | OBL | WS18-C | DEP | VER-01, CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-4` | OBL | WS18-C | DEP | VER-01, CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-5` | OBL | WS18-C | DEP | VER-01, CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-6` | OBL | WS18-C | DEP | VER-01, CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-7` | OBL | WS18-C | DEP | VER-01, CMP-01, CAB-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-8` | OBL | WS18-C | DEP | VER-01, CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-9` | OBL | WS18-C | DEP | VER-01, CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-10` | OBL | WS18-C | DEP | VER-01, CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-11` | OBL | WS18-C | DEP | VER-01, CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-12` | OBL | WS18-C | DEP | VER-01, CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-13` | OBL | WS18-C | DEP | VER-01, CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-14` | RULE | WS18-C | DEP | VER-01, CMP-01, SEC-02, VER-04 |
| `16-§5-1` | OBL | WS18-C | DEP | VER-01, CMP-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `16-§5-2` | OBL | WS18-C | DEP | VER-01, CMP-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `16-§5-3` | OBL | WS18-C | DEP | VER-01, CMP-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `16-§5-4` | OBL | WS18-C | DEP | VER-01, CMP-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `16-§5-5a` | OBL | WS18-C | DEP | VER-01, CMP-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `16-§5-6` | RULE | WS18-C | DEP | VER-01, CMP-02, SEC-02, VER-04, HLD-D14 |
| `16-§5-7` | NEG | WS18-C | DEP | VER-01, CMP-02, SEC-02, ERR-01, NEG-01, VER-03, HLD-D14 |
| `16-§6-1` | OBL | WS18-C | DEP | VER-01, CMP-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-DAI |
| `16-§6-2` | OBL | WS18-C | DEP | VER-01, CMP-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-DAI |
| `16-§6-3` | OBL | WS18-C | DEP | VER-01, CMP-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-DAI |
| `16-§6-4` | OBL | WS18-C | DEP | VER-01, CMP-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-DAI |
| `16-§6-5` | OBL | WS18-C | DEP | VER-01, CMP-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-DAI |
| `16-§6-6` | OBL | WS18-C | DEP | VER-01, CMP-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-DAI |
| `16-§6-7` | NEG | WS18-C | DEP | VER-01, CMP-03, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-D14, HLD-DAI |
| `16-§7-1` | RULE | WS18-C | DEP | VER-01, REM-01, SEC-02, VER-04, HLD-D15, HLD-DSCH |
| `16-§7-2` | OBL | WS18-C | DEP | VER-01, REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-DSCH |
| `16-§7-3` | RULE | WS18-C | DEP | VER-01, REM-01, SEC-02, VER-04 |
| `16-§7-4` | OBL | WS18-C | DEP | VER-01, REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-DSCH |
| `16-§7-5` | OBL | WS18-C | DEP | VER-01, REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-DSCH |
| `16-§7-6` | OBL | WS18-C | DEP | VER-01, REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-DSCH |
| `16-§7-7` | OBL | WS18-C | DEP | VER-01, REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-DSCH |
| `16-§7-8` | OBL | WS18-C | DEP | VER-01, REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-DSCH |
| `16-§8-1` | OBL | WS18-C | DEP | VER-01, REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-2` | OBL | WS18-C | DEP | VER-01, REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-3` | OBL | WS18-C | DEP | VER-01, REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-4` | OBL | WS18-C | DEP | VER-01, RNW-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-5` | OBL | WS18-C | DEP | VER-01, RNW-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-6` | OBL | WS18-C | DEP | VER-01, RNW-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-7` | OBL | WS18-C | DEP | VER-01, RNW-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-8` | OBL | WS18-C | DEP | VER-01, RNW-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-9` | OBL | WS18-C | DEP | VER-01, RNW-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-10` | OBL | WS18-C | DEP | VER-01, REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-11` | NEG | WS18-C | DEP | VER-01, RNW-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D14, HLD-D15 |
| `16-§9-1` | RULE | WS18-C | DEP | VER-01, CAB-01, CAB-02, SEC-02, VER-04, HLD-D14 |
| `16-§9-2` | OBL | WS18-C | DEP | VER-01, CAB-01, CAB-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `16-§10-1` | OBL | WS18-C | DEP | VER-01, CAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `16-§10-2` | OBL | WS18-C | PQ14, DEP | VER-01, CAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-03, HLD-D12, HLD-PQ14 |
| `16-§10-3` | NEG | WS18-C | PQ14, DEP | VER-01, CAU-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-PQ14 |
| `16-§10-4` | NEG | WS18-C | DEP | VER-01, CAU-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-D19 |
| `16-§11-1` | OBL | WS18-C | DEP | VER-01, CCH-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `16-§11-2` | OBL | WS18-C | PQ14, DEP | VER-01, CCH-01, SEC-02, MIG-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-PQ14 |
| `16-§11-3` | OBL | WS18-C | PQ14, DEP | VER-01, CCH-01, SEC-02, MIG-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-PQ14 |
| `16-§11-4` | OBL | WS18-C | DEP | VER-01, CCH-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `16-§11-5` | OBL | WS18-C | DEP | VER-01, CCH-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `16-§11-6a` | RULE | WS18-C | DEP | VER-01, CCH-01, SEC-02, VER-02, HLD-D13, HLD-D14 |
| `16-§11-7` | NEG | WS18-C | DEP | VER-01, CCH-01, SEC-02, IDM-01, ERR-01, NEG-01, VER-03, VER-05, HLD-D13, HLD-D14 |
| `16-§12-1` | OBL | WS18-C | DEP | VER-01, CCH-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-06, HLD-D13 |
| `16-§12-2` | RULE | WS18-C | DEP | VER-01, CCH-01, SEC-02, VER-06, HLD-D13 |
| `16-§13-1` | CONS | WS18-C | DEP | VER-01, CCO-01, RDR-01, VER-02, HLD-D15 |
| `16-§13-2` | CONS | WS18-C | PQ14, DEP | VER-01, CCO-01, RDR-01, VER-02, HLD-D15, HLD-PQ14 |
| `16-§13-3` | CONS | WS18-C | DEP | VER-01, CCO-01, RDR-01, VER-02, HLD-D15 |
| `16-§13-4` | NEG | WS18-C | DEP | VER-01, CCO-01, SEC-02, ERR-01, RDR-01, NEG-01, VER-03, HLD-D15 |
| `16-§14-1` | RULE | WS18-C | DEP | VER-01, CNT-01, SEC-02, VER-04, HLD-D15 |
| `16-§14-2` | OBL | WS18-C | DEP | VER-01, CNT-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15 |
| `16-§14-3` | OBL | WS18-C | DEP | VER-01, CNT-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15 |
| `16-§14-4` | OBL | WS18-C | DEP | VER-01, CNT-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15 |
| `16-§14-5` | OBL | WS18-C | DEP | VER-01, CNT-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15 |
| `16-§14-6` | NEG | WS18-C | DEP | VER-01, CNT-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D15 |
| `16-§15-1` | OBL | WS18-C | DEP | VER-01, CLG-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `16-§15-2` | OBL | WS18-C | DEP | VER-01, CLG-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `16-§15-3` | OBL | WS18-C | DEP | VER-01, CLG-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `16-§15-4` | OBL | WS18-C | DEP | VER-01, CLG-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `16-§15-5` | OBL | WS18-C | DEP | VER-01, CLG-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `16-§15-6` | OBL | WS18-C | DEP | VER-01, CLG-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `16-§15-7` | NEG | WS18-C | DEP | VER-01, CLG-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `16-§15-8` | NEG | WS18-C | DEP | VER-01, CLG-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `16-§15-9` | NEG | WS18-C | DEP | VER-01, CLG-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `16-§15-10` | NEG | WS18-C | DEP | VER-01, CLG-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `16-§15-11` | NEG | WS18-C | DEP | VER-01, CLG-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `16-§16-1` | OBL | WS18-C | DEP | VER-01, CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `16-§16-2` | OBL | WS18-C | DEP | VER-01, CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `16-§16-3` | OBL | WS18-C | DEP | VER-01, CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `16-§16-4` | OBL | WS18-C | DEP | VER-01, CEX-01, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-05, HLD-D12 |
| `16-§16-5` | OBL | WS18-C | DEP | VER-01, CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `16-§16-6` | OBL | WS18-C | DEP | VER-01, CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D15 |
| `16-§16-7` | OBL | WS18-C | DEP | VER-01, CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `16-§16-8` | OBL | WS18-C | DEP | VER-01, CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `16-§16-9` | OBL | WS18-C | DEP | VER-01, CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `16-§16-10` | OBL | WS18-C | DEP | VER-01, CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `16-§16-11` | RULE | WS18-C | DEP | VER-01, CEX-01, SEC-01, SEC-02, CAP-01, ERR-01, VER-02, HLD-D12 |
| `16-§17-1` | PRIN | WS18-C | DEP | VER-01, CPR-01, SEC-01, CAP-01, VER-03, HLD-D12 |
| `16-§17-2` | PRIN | WS18-C | DEP | VER-01, CPR-01, SEC-01, CAP-01, VER-03, HLD-D12 |
| `16-§17-3` | PRIN | WS18-C | PQ14, DEP | VER-01, CPR-01, SEC-01, CAP-01, VER-03, HLD-D12, HLD-PQ14 |
| `16-§17-4` | PRIN | WS18-C | DEP | VER-01, CPR-01, SEC-01, CAP-01, VER-03, HLD-D12 |
| `16-§17-5` | PRIN | WS18-C | DEP | VER-01, CPR-01, SEC-01, CAP-01, VER-03, HLD-D12, HLD-D19 |
| `16-§17-6` | RULE | WS18-C | DEP | VER-01, CPR-01, SEC-02, VER-04, HLD-D14 |
| `16-§17-7` | NEG | WS18-C | DEP | VER-01, CPR-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `16-§18-1` | RULE | WS18-C | DEP | VER-01, CFD-01, SEC-02, VER-04, HLD-D14 |
| `16-§18-2` | RULE | WS18-C | DEP | VER-01, CFD-01, SEC-02, VER-04, HLD-D14 |
| `16-§18-3` | RULE | WS18-C | DEP | VER-01, CFD-01, SEC-02, VER-04, HLD-D15 |
| `16-§18-4` | RULE | WS18-C | DEP | VER-01, CFD-01, SEC-02, VER-04, HLD-D15 |
| `16-§18-5` | RULE | WS18-C | DEP | VER-01, CFD-01, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12 |
| `16-§18-6` | RULE | WS18-C | DEP | VER-01, CFD-01, SEC-02, VER-04, HLD-D14 |
| `16-§18-7` | RULE | WS18-C | DEP | VER-01, CFD-01, SEC-02, VER-04, HLD-D13 |
| `16-§18-8` | RULE | WS18-C | DEP | VER-01, CFD-01, SEC-02, VER-04, HLD-D13 |
| `16-§18-9` | RULE | WS18-C | DEP | VER-01, CFD-01, SEC-01, SEC-02, AUD-01, CAP-01, VER-04, HLD-D12 |
| `16-§18-10` | NEG | WS18-C | DEP | VER-01, CFD-01, SEC-02, ERR-01, NEG-01, VER-03 |
| `16-§20-1` | SCN | WS18-V | DEP | VER-01, ACC-03, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D14 |
| `16-§20-2` | SCN | WS18-V | DEP | VER-01, ACC-03, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D13, HLD-D14 |
| `16-§20-3` | SCN | WS18-V | DEP | VER-01, ACC-03, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D15, HLD-DSCH |
| `16-§20-4` | SCN | WS18-V | DEP | VER-01, ACC-03, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D14 |
| `16-§20-5` | SCN | WS18-V | DEP | VER-01, ACC-03, SEC-01, CAP-01, VER-03, VER-07, HLD-D12, HLD-D15 |
| `16-§20-6` | SCN | WS18-V | PQ14, DEP | VER-01, ACC-03, SEC-01, CAP-01, VER-03, VER-07, HLD-D12, HLD-D14, HLD-PQ14 |
| `16-§20-7a` | SCN | WS18-V | PQ14, DEP | VER-01, ACC-03, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D13, HLD-D14, HLD-PQ14 |
| `16-§20-8` | SCN | WS18-V | DEP | VER-01, ACC-03, SEC-01, IDM-01, CAP-01, VER-05, VER-07, HLD-D12, HLD-D14 |
| `16-§20-9` | SCN | WS18-V | DEP | VER-01, ACC-03, SEC-01, CAP-01, VER-02, VER-03, VER-07, HLD-D12, HLD-D15 |
| `16-§20-10` | SCN | WS18-V | DEP | VER-01, ACC-03, SEC-01, CAP-01, VER-03, VER-07, HLD-D12, HLD-D19 |
| `16-§21-1` | PRIN | WS18-C | DEP | VER-01, PRN-03, VER-04 |
| `16-§23-1` | GATE | WS18-V | DEP | VER-01, ACC-03, MIG-04, VER-07 |
| `22-§16-1` | RULE | WS18-D | DEP | VER-01, LOC-01, SEC-01, SEC-02, CAP-01, VER-03, VER-04, HLD-D12 |
| `22-§16-2` | NEG | WS18-D | DEP | VER-01, LOC-02, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `22-§16-3` | OBL | WS18-D | DEP | VER-01, LOC-03, LOC-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-DLOC |
| `22-§16-4` | OBL | WS18-D | DEP | VER-01, LOC-03, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-03, HLD-D12, HLD-DLOC |
| `22-§16-5` | OBL | WS18-D | DEP | VER-01, LOC-03, LOC-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-DLOC |
| `22-§16-6` | OBL | WS18-D | DLEG, DEP | VER-01, LOC-04, LOC-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-DLOC, HLD-DLEG |
| `22-§16-7` | OBL | WS18-D | DEP | VER-01, LOC-04, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-03, HLD-D12, HLD-DLOC |
| `22-§16-8` | OBL | WS18-D | DEP | VER-01, LOC-01, LOC-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-DLOC |
| `22-§16-9` | OBL | WS18-D | DEP | VER-01, LOC-01, LOC-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-DLOC |
| `22-§16-10` | OBL | WS18-D | DEP | VER-01, LOC-01, LOC-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-DLOC |
| `22-§16-11` | RULE | WS18-D | DEP | VER-01, LOC-01, LOC-05, SEC-02, VER-04, HLD-DLOC |
| `22-§29-9` | SCN | WS18-D | DEP | VER-01, LOC-01, LOC-05, SEC-01, CAP-01, VER-02, VER-03, VER-07, HLD-D12, HLD-DLOC |
| `17-§4-15` | OBL | WS18-E | DEP | VER-01, VW-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§9-1` | OBL | WS18-E | DEP | VER-01, VW-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§9-2` | OBL | WS18-E | DEP | VER-01, VW-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§9-3` | OBL | WS18-E | DEP | VER-01, VW-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§9-4` | OBL | WS18-E | DEP | VER-01, VW-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§9-5` | OBL | WS18-E | DEP | VER-01, PAY-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§9-6` | OBL | WS18-E | DEP | VER-01, VW-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, VER-03, HLD-D12, HLD-D17, HLD-DENT |
| `17-§9-7` | NEG | WS18-E | DEP | VER-01, VW-01, SEC-01, SEC-02, CAP-01, ERR-01, RDR-01, NEG-01, MIG-03, VER-03, HLD-D12, HLD-D17 |
| `17-§10-1` | OBL | WS18-E | DEP | VER-01, VW-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§10-2` | OBL | WS18-E | DEP | VER-01, VW-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§10-3` | OBL | WS18-E | DEP | VER-01, VW-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§10-4` | OBL | WS18-E | DEP | VER-01, VW-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§10-5` | CONS | WS18-E | DEP | VER-01, VW-02, SEC-01, CAP-01, RDR-01, MIG-03, VER-02, HLD-D12, HLD-D16, HLD-D17, HLD-DENT |
| `17-§10-6` | OBL | WS18-E | DEP | VER-01, VW-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D14, HLD-D17, HLD-DENT |
| `17-§10-7` | NEG | WS18-E | DEP | VER-01, VW-02, SEC-01, SEC-02, CAP-01, ERR-01, RDR-01, NEG-01, MIG-03, VER-03, HLD-D12, HLD-D17 |
| `24-§18-4` | SCN | WS18-B | DEP | VER-01, ROS-01, VER-02, VER-07, HLD-D13, HLD-D14, HLD-DAI |
| `24-§21-6` | OBL | WS18-B | DEP | VER-01, CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D13 |
| `9-§12-7` | RULE | WS18-B | DEP | VER-01, HFD-01, SEC-02, VER-06, HLD-D13 |
| `9-§12-9` | RULE | WS18-A1 | DEP | VER-01, ORD-01, SEC-02, VER-06, HLD-D13 |
| `9-§12-12` | RULE | WS18-C | DEP | VER-01, CCH-01, SEC-02, VER-06, HLD-D13 |
| `10-§13-5` | OBL | WS18-A1 | DEP | VER-01, ORD-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D13 |
| `10-§13-7` | OBL | WS18-B | DEP | VER-01, CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D13 |
| `12-§4-4` | OBL | WS18-A1 | DEP | VER-01, ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DV |
| `12-§7-7` | OBL | WS18-A1 | DEP | VER-01, ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DV |
| `3-§9-3` | OBL | WS18-A1 | DEP | VER-01, CUS-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `3-§11-6` | OBL | WS18-A1 | DEP | VER-01, OAU-02, SEC-01, SEC-02, SEC-03, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-03, HLD-D12, HLD-D14 |
| `3-§15-7` | RULE | WS18-A1 | DEP | VER-01, CUS-01, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12, HLD-D14 |
| `3-§15-12` | RULE | WS18-A3 | DTX, DEP | VER-01, COD-02, SEC-02, IDM-01, MIG-03, VER-04, VER-05, HLD-D14, HLD-D16, HLD-DTX |
| `3-§15-13` | RULE | WS18-B | DEP | VER-01, HR-02, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12, HLD-D14 |
| `5-§4-11` | OBL | WS18-B | DEP | VER-01, ROS-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `5-§4-12` | OBL | WS18-A1 | DEP | VER-01, ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `5-§4-13` | OBL | WS18-C | DEP | VER-01, CMP-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `5-§6-10` | OBL | WS18-A3 | DEP | VER-01, COD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `5-§6-12` | OBL | WS18-C | DEP | VER-01, CAB-01, CAB-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `5-§7-5` | SCN | WS18-B | DEP | VER-01, ROS-01, VER-02, VER-07, HLD-D14 |
| `5-§7-6` | SCN | WS18-A1 | DEP | VER-01, ORD-02, VER-02, VER-07, HLD-D14 |
| `5-§7-7` | SCN | WS18-C | DEP | VER-01, CMP-02, VER-02, VER-07, HLD-D14, HLD-D15 |
| `BP-§10.3-S2` | OBL | WS18-A1 | DEP | VER-01, CUS-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `BP-§5.5-p1` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02 |
| `BP-§5.5-p2` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02 |
| `BP-§10.7-W` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§10.7-A1` | WORK | WS18-A1 | DEP | VER-01, ORD-01, CMD-01, VER-02 |
| `BP-§10.7-A2` | WORK | WS18-A1 | DEP | VER-01, ORD-04, CMD-01, VER-02 |
| `BP-§10.7-A3` | WORK | WS18-A2 | STK-BLOCKED, DEP | VER-01, AVL-01, STK-01, STK-04, CMD-01, VER-02 |
| `BP-§10.7-A4` | WORK | WS18-A2 | STK-BLOCKED, DEP | VER-01, AVL-02, STK-01, STK-04, CMD-01, VER-02 |
| `BP-§10.7-A5` | WORK | WS18-A3 | DEP | VER-01, DLV-01, CMD-01, VER-02 |
| `BP-§10.7-A6` | WORK | WS18-P | ACT, DEP | VER-01, DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, CMD-01, VER-02 |
| `BP-§10.7-A7` | WORK | WS18-A3 | DEP | VER-01, PRF-01, CMD-01, VER-02 |
| `BP-§10.7-A8` | NEG | WS18-D | DEP | VER-01, LOC-02, SEC-02, ERR-01, NEG-01, VER-03 |
| `BP-§10.7-A9` | NEG | WS18-A3 | DEP | VER-01, PRF-04, SEC-02, ERR-01, NEG-01, VER-03 |
| `BP-§10.7-A10` | WORK | WS18-A3 | DEP | VER-01, COD-02, CMD-01, VER-02 |
| `BP-§10.7-A11` | NEG | WS18-A1 | DEP | VER-01, PRN-01, SEC-02, ERR-01, NEG-01, VER-03 |
| `BP-§10.7-AS1` | FRV | WS18-V | DEP | VER-01, ACC-04 |
| `BP-§10.7-B1` | WORK | WS18-B | DEP | VER-01, HR-02, CMD-01, VER-02 |
| `BP-§10.7-B2` | WORK | WS18-B | DEP | VER-01, CTX-01, CMD-01, VER-02 |
| `BP-§10.7-B3` | WORK | WS18-B | DEP | VER-01, HR-03, SEC-03, CMD-01, VER-02 |
| `BP-§10.7-B4` | NEG | WS18-D | DEP | VER-01, LOC-02, SEC-02, ERR-01, NEG-01, VER-03 |
| `BP-§10.7-B5` | WORK | WS18-B | DEP | VER-01, CTX-01, CMD-01, VER-02 |
| `BP-§10.7-B6` | WORK | WS18-B | DEP | VER-01, HFD-01, CMD-01, VER-02 |
| `BP-§10.7-B7` | NEG | WS18-B | DEP | VER-01, PAY-01, SEC-02, ERR-01, NEG-01, VER-03 |
| `BP-§10.7-B8` | NEG | WS18-B | DEP | VER-01, PAY-01, SEC-02, ERR-01, NEG-01, VER-03 |
| `BP-§10.7-BS1` | FRV | WS18-V | DEP | VER-01, ACC-04 |
| `BP-§10.7-C1` | WORK | WS18-C | DEP | VER-01, CMP-02, CMD-01, VER-02 |
| `BP-§10.7-C2` | WORK | WS18-C | DEP | VER-01, REM-01, CMD-01, VER-02 |
| `BP-§10.7-C3` | WORK | WS18-C | DEP | VER-01, CAB-01, CMD-01, VER-02 |
| `BP-§10.7-C4` | WORK | WS18-C | DEP | VER-01, CLG-01, CMD-01, VER-02 |
| `BP-§10.7-C5` | WORK | WS18-C | DEP | VER-01, CPR-01, CMD-01, VER-02 |
| `BP-§10.7-CS1` | FRV | WS18-V | DEP | VER-01, ACC-04 |
| `BP-§10.7-X` | EXP | WS18-V | DEP | VER-01, ACC-04, VER-06 |
| `BP-§11-p1` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§11-b1` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§11-b2` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§11-b3` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§11-b4` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§11-b5` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§11-b6` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§11-b7` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§11-b9` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§11-p3` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§11-p4` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§11-p5` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§13-p1` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§13-T` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§13-b1` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§13-b2` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§13-b3` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§13-b4` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§13-b5` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§13-b6` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§13-b7` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§13-b8` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§13-b9` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§13-b10` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§15-p2` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§15-p3` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `BP-§16-p2` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `GPCV-R1` | CONS | WS18-V | DEP | VER-01, ACC-05 |
| `GPCV-R6` | CONS | WS18-V | DEP | VER-01, ACC-05 |
| `GPCV-R16` | CONS | WS18-V | DEP | VER-01, ACC-05 |
| `GPCV-§8-3` | RULE | WS18-B | DEP | VER-01, PRN-02, SEC-02, VER-04 |
| `GPCV-§8-4` | RULE | WS18-V | DEP | VER-01, ACC-05, SEC-02, VER-04 |
| `GPCV-§8-5` | RULE | WS18-A1 | DEP | VER-01, PRN-01, SEC-02, VER-04 |

## 12. Obligation to FCTM Rows (140 obligations; 5,597 links)

The row pointer lists are the locked EIS Section 21.3 lists, unchanged, so traceability stays bidirectional.

| Obligation | Rows | FCTM rows |
|---|---:|---|
| `EC18-PRN-01` | 24 | `1-§1-1` to `-3`, `1-§2-1` to `-8`, `1-§3-1` to `-10`, `1-§28-1`, `BP-§10.7-A11`, `GPCV-§8-5` |
| `EC18-CUS-01` | 8 | `1-§5-23`, `1-§6-1`, `1-§22-2`, `1-§22-15`, `1-§23-2`, `3-§9-3`, `3-§15-7`, `BP-§10.3-S2` |
| `EC18-CUS-02` | 5 | `1-§5-1`, `1-§6-2` to `-5` |
| `EC18-CUS-03` | 4 | `1-§6-6`, `1-§6-7`, `1-§9-15`, `1-§24-1` |
| `EC18-CUS-04` | 6 | `1-§5-29`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§22-3` |
| `EC18-CUS-05` | 5 | `1-§5-26`, `1-§9-8`, `1-§9-16`, `1-§22-11`, `1-§24-4` |
| `EC18-CUS-06` | 5 | `1-§5-24`, `1-§5-25`, `1-§5-27`, `1-§5-28`, `1-§5-30` |
| `EC18-OAU-01` | 7 | `1-§5-2` to `-8` |
| `EC18-OAU-02` | 7 | `1-§5-9` to `-14`, `3-§11-6` |
| `EC18-ORD-01` | 20 | `1-§8-1`, `1-§8-6` to `-10`, `1-§18-7`, `1-§19-1` to `-5`, `1-§22-13`, `1-§23-5a`, `9-§12-9`, `10-§13-5`, `12-§4-4`, `12-§7-7`, `5-§4-12`, `BP-§10.7-A1` |
| `EC18-ORD-02` | 3 | `1-§8-11`, `1-§8-12`, `5-§7-6` |
| `EC18-ORD-03` | 15 | `1-§9-1` to `-12`, `1-§22-1`, `1-§22-4`, `1-§22-5` |
| `EC18-ORD-04` | 8 | `1-§9-13`, `1-§9-14`, `1-§9-17` to `-19`, `1-§21-8`, `1-§24-2`, `BP-§10.7-A2` |
| `EC18-ORD-05` | 3 | `1-§20-1`, `1-§20-2`, `1-§23-4` |
| `EC18-AVL-01` | 4 | `1-§10-2`, `1-§10-9`, `1-§23-7`, `BP-§10.7-A3` |
| `EC18-AVL-02` | 10 | `1-§10-1`, `1-§10-3` to `-8`, `1-§24-3`, `1-§24-8`, `BP-§10.7-A4` |
| `EC18-STK-01` | 10 | `1-§10-1`, `1-§10-3` to `-7`, `1-§24-3`, `1-§24-8`, `BP-§10.7-A3`, `BP-§10.7-A4` |
| `EC18-STK-02` | 4 | `1-§10-1`, `1-§10-8`, `1-§24-3`, `1-§24-8` |
| `EC18-STK-03` | 2 | `1-§10-9`, `1-§24-3` |
| `EC18-DLV-01` | 7 | `1-§11-1` to `-4`, `1-§22-6`, `1-§22-8`, `BP-§10.7-A5` |
| `EC18-DLV-02` | 10 | `1-§12-1` to `-7`, `1-§22-7`, `1-§24-5`, `1-§24-7` |
| `EC18-DLV-03` | 19 | `1-§5-15` to `-22`, `1-§13-1`, `1-§13-2`, `1-§13-4` to `-9`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EC18-DLV-04` | 2 | `1-§5-18`, `1-§13-3` |
| `EC18-PRF-01` | 8 | `1-§15-1`, `1-§15-2`, `1-§15-7`, `1-§15-8`, `1-§21-10`, `1-§22-9`, `1-§24-11`, `BP-§10.7-A7` |
| `EC18-PRF-02` | 2 | `1-§15-3`, `1-§15-5` |
| `EC18-PRF-03` | 1 | `1-§15-4` |
| `EC18-PRF-04` | 3 | `1-§15-9`, `1-§15-10`, `BP-§10.7-A9` |
| `EC18-COD-01` | 6 | `1-§15-6`, `1-§16-1` to `-3`, `1-§22-10`, `1-§24-12` |
| `EC18-COD-02` | 8 | `1-§16-4` to `-6`, `1-§23-12`, `1-§24-14`, `3-§15-12`, `5-§6-10`, `BP-§10.7-A10` |
| `EC18-OFD-01` | 10 | `1-§17-1` to `-9`, `1-§23-8` |
| `EC18-OFD-02` | 7 | `1-§21-1` to `-7` |
| `EC18-OFD-03` | 4 | `1-§21-9`, `1-§21-11` to `-13` |
| `EC18-OFD-04` | 2 | `1-§22-12`, `1-§22-14` |
| `EC18-OFD-05` | 5 | `1-§24-6`, `1-§24-9`, `1-§24-10`, `1-§24-13`, `1-§24-15` |
| `EC18-OFD-06` | 6 | `1-§23-1`, `1-§23-3`, `1-§23-6`, `1-§23-9` to `-11` |
| `EC18-OFD-07` | 8 | `1-§25-1` to `-8` |
| `EC18-STK-04` | 11 | `1-§10-1`, `1-§10-3` to `-7`, `1-§10-9`, `1-§24-3`, `1-§24-8`, `BP-§10.7-A3`, `BP-§10.7-A4` |
| `EC18-PRN-02` | 3 | `6-§1-1`, `6-§2-1`, `GPCV-§8-3` |
| `EC18-HR-01` | 2 | `6-§3-1`, `6-§3-8` |
| `EC18-HR-02` | 6 | `6-§3-2`, `6-§4-1` to `-3`, `3-§15-13`, `BP-§10.7-B1` |
| `EC18-HR-03` | 7 | `6-§3-7`, `6-§3-9`, `6-§4-4` to `-7`, `BP-§10.7-B3` |
| `EC18-HR-04` | 1 | `6-§3-3` |
| `EC18-ATT-01` | 2 | `6-§3-4`, `6-§5-1` |
| `EC18-ATT-02` | 1 | `6-§5-2` |
| `EC18-ATT-03` | 3 | `6-§5-3` to `-5` |
| `EC18-ROS-01` | 6 | `6-§6-1` to `-3`, `24-§18-4`, `5-§4-11`, `5-§7-5` |
| `EC18-CTX-01` | 11 | `6-§3-5`, `6-§7-1` to `-6`, `24-§21-6`, `10-§13-7`, `BP-§10.7-B2`, `BP-§10.7-B5` |
| `EC18-PAY-01` | 8 | `6-§8-1`, `6-§8-3` to `-7`, `BP-§10.7-B7`, `BP-§10.7-B8` |
| `EC18-PAY-02` | 1 | `17-§9-5` |
| `EC18-PAY-03` | 2 | `6-§3-6`, `6-§8-2` |
| `EC18-OVT-01` | 5 | `S11-L443-1` to `-5` |
| `EC18-OVT-02` | 1 | `S11-L443-1` |
| `EC18-OVT-03` | 1 | `S11-L443-2` |
| `EC18-OVT-04` | 3 | `S11-L443-1`, `S11-L443-3`, `S11-L443-5` |
| `EC18-OVT-05` | 2 | `S11-L443-1`, `S11-L443-4` |
| `EC18-HAI-01` | 6 | `6-§9-1` to `-6` |
| `EC18-HAI-02` | 5 | `6-§9-7` to `-11` |
| `EC18-HFD-01` | 13 | `6-§10-1a`, `6-§10-2`, `6-§11-1` to `-9`, `9-§12-7`, `BP-§10.7-B6` |
| `EC18-HPR-01` | 8 | `6-§12-1` to `-8` |
| `EC18-HEX-01` | 11 | `6-§13-1` to `-11` |
| `EC18-PRN-03` | 16 | `16-§1-1`, `16-§1-2`, `16-§2-1` to `-6`, `16-§3-1` to `-7`, `16-§21-1` |
| `EC18-CMP-01` | 14 | `16-§4-1` to `-14` |
| `EC18-CMP-02` | 10 | `16-§5-1` to `-4`, `16-§5-5a`, `16-§5-6`, `16-§5-7`, `5-§4-13`, `5-§7-7`, `BP-§10.7-C1` |
| `EC18-CMP-03` | 7 | `16-§6-1` to `-7` |
| `EC18-REM-01` | 13 | `16-§7-1` to `-8`, `16-§8-1` to `-3`, `16-§8-10`, `BP-§10.7-C2` |
| `EC18-RNW-01` | 7 | `16-§8-4` to `-9`, `16-§8-11` |
| `EC18-CAB-01` | 4 | `16-§9-1`, `16-§9-2`, `5-§6-12`, `BP-§10.7-C3` |
| `EC18-CCH-01` | 10 | `16-§11-1` to `-5`, `16-§11-6a`, `16-§11-7`, `16-§12-1`, `16-§12-2`, `9-§12-12` |
| `EC18-CCO-01` | 4 | `16-§13-1` to `-4` |
| `EC18-CNT-01` | 6 | `16-§14-1` to `-6` |
| `EC18-CAU-01` | 4 | `16-§10-1` to `-4` |
| `EC18-CLG-01` | 12 | `16-§15-1` to `-11`, `BP-§10.7-C4` |
| `EC18-CEX-01` | 11 | `16-§16-1` to `-11` |
| `EC18-CPR-01` | 8 | `16-§17-1` to `-7`, `BP-§10.7-C5` |
| `EC18-CFD-01` | 10 | `16-§18-1` to `-10` |
| `EC18-CAB-02` | 4 | `16-§4-7`, `16-§9-1`, `16-§9-2`, `5-§6-12` |
| `EC18-LOC-01` | 11 | `1-§14-1` to `-4`, `6-§11-8`, `22-§16-1`, `22-§16-8` to `-11`, `22-§29-9` |
| `EC18-LOC-02` | 6 | `1-§14-5` to `-7`, `22-§16-2`, `BP-§10.7-A8`, `BP-§10.7-B4` |
| `EC18-LOC-03` | 6 | `1-§14-8`, `1-§14-9`, `1-§14-11`, `22-§16-3` to `-5` |
| `EC18-LOC-04` | 5 | `1-§14-10`, `1-§14-12`, `1-§14-13`, `22-§16-6`, `22-§16-7` |
| `EC18-LOC-05` | 42 | `1-§5-18`, `1-§5-26`, `1-§13-5`, `1-§14-1` to `-12`, `1-§15-5`, `1-§22-11`, `1-§23-10`, `1-§24-4`, `1-§26-6`, `1-§26-9`, `6-§3-4`, `6-§5-2` to `-5`, `6-§11-8`, `6-§12-4`, `6-§12-6`, `6-§13-3`, `6-§14-3`, `S11-L443-1`, `22-§16-3` to `-11`, `22-§29-9` |
| `EC18-VW-01` | 7 | `17-§4-15`, `17-§9-1` to `-4`, `17-§9-6`, `17-§9-7` |
| `EC18-VW-02` | 7 | `17-§10-1` to `-7` |
| `EC18-ACC-01` | 16 | `1-§26-1` to `-11`, `1-§26-12a`, `1-§26-13`, `1-§26-14`, `1-§31-1`, `1-§31-2` |
| `EC18-ACC-02` | 11 | `6-§14-1` to `-10`, `6-§17-1` |
| `EC18-ACC-03` | 11 | `16-§20-1` to `-6`, `16-§20-7a`, `16-§20-8` to `-10`, `16-§23-1` |
| `EC18-ACC-04` | 4 | `BP-§10.7-AS1`, `BP-§10.7-BS1`, `BP-§10.7-CS1`, `BP-§10.7-X` |
| `EC18-ACC-05` | 34 | `BP-§5.5-p1`, `BP-§5.5-p2`, `BP-§10.7-W`, `BP-§11-p1`, `BP-§11-b1`, `BP-§11-b2`, `BP-§11-b3`, `BP-§11-b4`, `BP-§11-b5`, `BP-§11-b6`, `BP-§11-b7`, `BP-§11-b9`, `BP-§11-p3`, `BP-§11-p4`, `BP-§11-p5`, `BP-§13-p1`, `BP-§13-T`, `BP-§13-b1`, `BP-§13-b2`, `BP-§13-b3`, `BP-§13-b4`, `BP-§13-b5`, `BP-§13-b6`, `BP-§13-b7`, `BP-§13-b8`, `BP-§13-b9`, `BP-§13-b10`, `BP-§15-p2`, `BP-§15-p3`, `BP-§16-p2`, `GPCV-R1`, `GPCV-R6`, `GPCV-R16`, `GPCV-§8-4` |
| `EC18-EXT-01` | 19 | `1-§5-15` to `-22`, `1-§13-2` to `-8`, `1-§17-4`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EC18-EXT-02` | 5 | `1-§12-3`, `1-§15-2`, `1-§24-5`, `1-§24-6`, `1-§25-3` |
| `EC18-EXT-03` | 21 | `1-§5-15` to `-22`, `1-§13-2` to `-8`, `1-§15-2`, `1-§17-4`, `1-§25-3`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EC18-EXT-04` | 23 | `1-§5-15` to `-22`, `1-§12-3`, `1-§13-2` to `-8`, `1-§17-4`, `1-§24-5`, `1-§24-6`, `1-§25-3`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EC18-EXT-05` | 19 | `1-§5-15` to `-22`, `1-§13-2` to `-8`, `1-§17-4`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EC18-EXT-06` | 19 | `1-§5-15` to `-22`, `1-§13-2` to `-8`, `1-§17-4`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EC18-EXT-07` | 22 | `1-§5-15` to `-22`, `1-§12-3`, `1-§13-2` to `-8`, `1-§15-2`, `1-§17-4`, `1-§25-3`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EC18-EXT-08` | 24 | `1-§5-15` to `-22`, `1-§12-3`, `1-§13-2` to `-8`, `1-§15-2`, `1-§17-4`, `1-§24-5`, `1-§24-6`, `1-§25-3`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EC18-SEC-01` | 280 | `1-§5-1` to `-30`, `1-§6-1` to `-7`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§10-1`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-1` to `-4`, `1-§14-6` to `-12`, `1-§15-1` to `-10`, `1-§19-5`, `1-§22-1` to `-15`, `1-§23-1`, `1-§23-2`, `1-§23-11`, `1-§24-1` to `-15`, `1-§25-1` to `-8`, `1-§26-1` to `-11`, `1-§26-12a`, `1-§26-13`, `1-§26-14`, `6-§3-1` to `-9`, `6-§4-1` to `-7`, `6-§5-1`, `6-§5-2`, `6-§7-1` to `-6`, `6-§8-1` to `-7`, `6-§10-1a`, `6-§10-2`, `6-§11-1`, `6-§11-2`, `6-§11-9`, `6-§12-1` to `-5`, `6-§12-7`, `6-§12-8`, `6-§13-1` to `-11`, `6-§14-1` to `-10`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§10-1` to `-4`, `16-§16-1` to `-11`, `16-§17-1` to `-5`, `16-§17-7`, `16-§18-5`, `16-§18-9`, `16-§20-1` to `-6`, `16-§20-7a`, `16-§20-8` to `-10`, `22-§16-1`, `22-§16-2`, `22-§16-4`, `22-§16-7`, `22-§29-9`, `17-§4-15`, `17-§9-1` to `-7`, `17-§10-1` to `-7`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `3-§9-3`, `3-§11-6`, `3-§15-7`, `3-§15-13`, `BP-§10.3-S2` |
| `EC18-SEC-02` | 456 | `1-§3-4`, `1-§3-8`, `1-§5-1` to `-30`, `1-§6-1` to `-7`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§8-1`, `1-§8-6` to `-12`, `1-§9-1` to `-19`, `1-§10-1` to `-6`, `1-§10-8`, `1-§10-9`, `1-§11-1` to `-4`, `1-§12-1` to `-7`, `1-§13-1` to `-9`, `1-§14-2` to `-13`, `1-§15-1`, `1-§15-8` to `-10`, `1-§16-1` to `-6`, `1-§17-1` to `-9`, `1-§18-7`, `1-§19-1` to `-5`, `1-§20-1`, `1-§20-2`, `1-§21-1` to `-13`, `1-§22-1` to `-15`, `1-§23-1` to `-4`, `1-§23-5a`, `1-§23-6` to `-12`, `1-§24-1` to `-15`, `1-§25-8`, `6-§3-1` to `-9`, `6-§4-1` to `-7`, `6-§5-1`, `6-§5-3` to `-5`, `6-§6-1` to `-3`, `6-§7-1` to `-6`, `6-§8-2` to `-7`, `6-§9-1` to `-11`, `6-§10-1a`, `6-§10-2`, `6-§11-1` to `-9`, `6-§12-6` to `-8`, `6-§13-1` to `-11`, `S11-L443-1` to `-5`, `16-§3-6`, `16-§4-1` to `-14`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§5-6`, `16-§5-7`, `16-§6-1` to `-7`, `16-§7-1` to `-8`, `16-§8-1` to `-11`, `16-§9-1`, `16-§9-2`, `16-§10-1` to `-4`, `16-§11-1` to `-5`, `16-§11-6a`, `16-§11-7`, `16-§12-1`, `16-§12-2`, `16-§13-4`, `16-§14-1` to `-6`, `16-§15-1` to `-11`, `16-§16-1` to `-11`, `16-§17-6`, `16-§17-7`, `16-§18-1` to `-10`, `22-§16-1` to `-11`, `17-§4-15`, `17-§9-1` to `-7`, `17-§10-1` to `-4`, `17-§10-6`, `17-§10-7`, `24-§21-6`, `9-§12-7`, `9-§12-9`, `9-§12-12`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7`, `3-§9-3`, `3-§11-6`, `3-§15-7`, `3-§15-12`, `3-§15-13`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `BP-§10.3-S2`, `BP-§5.5-p1`, `BP-§5.5-p2`, `BP-§10.7-W`, `BP-§10.7-A8`, `BP-§10.7-A9`, `BP-§10.7-A11`, `BP-§10.7-B4`, `BP-§10.7-B7`, `BP-§10.7-B8`, `BP-§11-p1`, `BP-§11-b1`, `BP-§11-b2`, `BP-§11-b3`, `BP-§11-b4`, `BP-§11-b5`, `BP-§11-b6`, `BP-§11-b7`, `BP-§11-b9`, `BP-§11-p3`, `BP-§11-p4`, `BP-§11-p5`, `BP-§13-p1`, `BP-§13-T`, `BP-§13-b1`, `BP-§13-b2`, `BP-§13-b3`, `BP-§13-b4`, `BP-§13-b5`, `BP-§13-b6`, `BP-§13-b7`, `BP-§13-b8`, `BP-§13-b9`, `BP-§13-b10`, `BP-§15-p2`, `BP-§15-p3`, `BP-§16-p2`, `GPCV-§8-3` to `-5` |
| `EC18-SEC-03` | 8 | `1-§5-8`, `1-§5-14`, `1-§5-22`, `1-§25-6`, `6-§4-7`, `6-§9-10`, `3-§11-6`, `BP-§10.7-B3` |
| `EC18-IDM-01` | 14 | `1-§6-7`, `1-§12-6`, `1-§16-6`, `1-§24-7`, `1-§26-11`, `1-§26-14`, `6-§13-1`, `6-§13-9`, `S11-L443-1`, `S11-L443-3`, `16-§11-7`, `16-§16-4`, `16-§20-8`, `3-§15-12` |
| `EC18-AUD-01` | 6 | `1-§22-14`, `1-§23-11`, `6-§11-9`, `6-§12-5`, `S11-L443-5`, `16-§18-9` |
| `EC18-MIG-01` | 290 | `1-§5-1` to `-13`, `1-§5-15` to `-21`, `1-§5-23` to `-29`, `1-§6-2` to `-7`, `1-§7-1`, `1-§7-2`, `1-§8-6` to `-10`, `1-§9-1` to `-18`, `1-§10-2` to `-6`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-2` to `-4`, `1-§14-8` to `-11`, `1-§15-1`, `1-§15-8`, `1-§16-1` to `-3`, `1-§16-6`, `1-§17-2` to `-8`, `1-§19-1` to `-4`, `1-§20-1`, `1-§20-2`, `1-§21-1` to `-7`, `1-§22-1` to `-14`, `1-§24-1` to `-14`, `6-§3-1` to `-9`, `6-§4-1` to `-6`, `6-§5-1`, `6-§6-1`, `6-§7-2` to `-6`, `6-§8-2`, `6-§8-7`, `6-§9-1` to `-6`, `6-§13-1` to `-11`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§6-1` to `-6`, `16-§7-2`, `16-§7-4` to `-8`, `16-§8-1` to `-10`, `16-§9-2`, `16-§10-1`, `16-§10-2`, `16-§11-1` to `-5`, `16-§12-1`, `16-§14-2` to `-5`, `16-§15-1` to `-6`, `16-§16-1` to `-10`, `22-§16-3` to `-10`, `17-§4-15`, `17-§9-1` to `-6`, `17-§10-1` to `-4`, `17-§10-6`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7`, `3-§9-3`, `3-§11-6`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `BP-§10.3-S2` |
| `EC18-VER-01` | 592 | all 592 `IN SCOPE` rows |
| `EC18-CAP-01` | 280 | `1-§5-1` to `-30`, `1-§6-1` to `-7`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§10-1`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-1` to `-4`, `1-§14-6` to `-12`, `1-§15-1` to `-10`, `1-§19-5`, `1-§22-1` to `-15`, `1-§23-1`, `1-§23-2`, `1-§23-11`, `1-§24-1` to `-15`, `1-§25-1` to `-8`, `1-§26-1` to `-11`, `1-§26-12a`, `1-§26-13`, `1-§26-14`, `6-§3-1` to `-9`, `6-§4-1` to `-7`, `6-§5-1`, `6-§5-2`, `6-§7-1` to `-6`, `6-§8-1` to `-7`, `6-§10-1a`, `6-§10-2`, `6-§11-1`, `6-§11-2`, `6-§11-9`, `6-§12-1` to `-5`, `6-§12-7`, `6-§12-8`, `6-§13-1` to `-11`, `6-§14-1` to `-10`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§10-1` to `-4`, `16-§16-1` to `-11`, `16-§17-1` to `-5`, `16-§17-7`, `16-§18-5`, `16-§18-9`, `16-§20-1` to `-6`, `16-§20-7a`, `16-§20-8` to `-10`, `22-§16-1`, `22-§16-2`, `22-§16-4`, `22-§16-7`, `22-§29-9`, `17-§4-15`, `17-§9-1` to `-7`, `17-§10-1` to `-7`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `3-§9-3`, `3-§11-6`, `3-§15-7`, `3-§15-13`, `BP-§10.3-S2` |
| `EC18-OBJ-01` | 290 | `1-§5-1` to `-13`, `1-§5-15` to `-21`, `1-§5-23` to `-29`, `1-§6-2` to `-7`, `1-§7-1`, `1-§7-2`, `1-§8-6` to `-10`, `1-§9-1` to `-18`, `1-§10-2` to `-6`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-2` to `-4`, `1-§14-8` to `-11`, `1-§15-1`, `1-§15-8`, `1-§16-1` to `-3`, `1-§16-6`, `1-§17-2` to `-8`, `1-§19-1` to `-4`, `1-§20-1`, `1-§20-2`, `1-§21-1` to `-7`, `1-§22-1` to `-14`, `1-§24-1` to `-14`, `6-§3-1` to `-9`, `6-§4-1` to `-6`, `6-§5-1`, `6-§6-1`, `6-§7-2` to `-6`, `6-§8-2`, `6-§8-7`, `6-§9-1` to `-6`, `6-§13-1` to `-11`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§6-1` to `-6`, `16-§7-2`, `16-§7-4` to `-8`, `16-§8-1` to `-10`, `16-§9-2`, `16-§10-1`, `16-§10-2`, `16-§11-1` to `-5`, `16-§12-1`, `16-§14-2` to `-5`, `16-§15-1` to `-6`, `16-§16-1` to `-10`, `22-§16-3` to `-10`, `17-§4-15`, `17-§9-1` to `-6`, `17-§10-1` to `-4`, `17-§10-6`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7`, `3-§9-3`, `3-§11-6`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `BP-§10.3-S2` |
| `EC18-CMD-01` | 308 | `1-§5-1` to `-13`, `1-§5-15` to `-21`, `1-§5-23` to `-29`, `1-§6-2` to `-7`, `1-§7-1`, `1-§7-2`, `1-§8-6` to `-10`, `1-§9-1` to `-18`, `1-§10-2` to `-6`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-2` to `-4`, `1-§14-8` to `-11`, `1-§15-1`, `1-§15-8`, `1-§16-1` to `-3`, `1-§16-6`, `1-§17-2` to `-8`, `1-§19-1` to `-4`, `1-§20-1`, `1-§20-2`, `1-§21-1` to `-7`, `1-§22-1` to `-14`, `1-§24-1` to `-14`, `6-§3-1` to `-9`, `6-§4-1` to `-6`, `6-§5-1`, `6-§6-1`, `6-§7-2` to `-6`, `6-§8-2`, `6-§8-7`, `6-§9-1` to `-6`, `6-§13-1` to `-11`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§6-1` to `-6`, `16-§7-2`, `16-§7-4` to `-8`, `16-§8-1` to `-10`, `16-§9-2`, `16-§10-1`, `16-§10-2`, `16-§11-1` to `-5`, `16-§12-1`, `16-§14-2` to `-5`, `16-§15-1` to `-6`, `16-§16-1` to `-10`, `22-§16-3` to `-10`, `17-§4-15`, `17-§9-1` to `-6`, `17-§10-1` to `-4`, `17-§10-6`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7`, `3-§9-3`, `3-§11-6`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `BP-§10.3-S2`, `BP-§10.7-A1`, `BP-§10.7-A2`, `BP-§10.7-A3`, `BP-§10.7-A4`, `BP-§10.7-A5`, `BP-§10.7-A6`, `BP-§10.7-A7`, `BP-§10.7-A10`, `BP-§10.7-B1`, `BP-§10.7-B2`, `BP-§10.7-B3`, `BP-§10.7-B5`, `BP-§10.7-B6`, `BP-§10.7-C1`, `BP-§10.7-C2`, `BP-§10.7-C3`, `BP-§10.7-C4`, `BP-§10.7-C5` |
| `EC18-ERR-01` | 101 | `1-§3-4`, `1-§3-8`, `1-§5-14`, `1-§5-22`, `1-§5-30`, `1-§7-4`, `1-§7-5`, `1-§8-12`, `1-§9-19`, `1-§10-9`, `1-§14-5` to `-7`, `1-§15-9`, `1-§15-10`, `1-§16-5`, `1-§17-9`, `1-§21-8` to `-13`, `1-§22-15`, `1-§24-1` to `-15`, `6-§4-7`, `6-§5-4`, `6-§6-3`, `6-§8-3` to `-6`, `6-§9-7` to `-11`, `6-§10-2`, `6-§12-6`, `6-§12-7`, `6-§13-1` to `-11`, `16-§3-6`, `16-§5-7`, `16-§6-7`, `16-§8-11`, `16-§10-3`, `16-§10-4`, `16-§11-7`, `16-§13-4`, `16-§14-6`, `16-§15-7` to `-11`, `16-§16-1` to `-11`, `16-§17-7`, `16-§18-10`, `22-§16-2`, `17-§9-7`, `17-§10-7`, `BP-§10.7-A8`, `BP-§10.7-A9`, `BP-§10.7-A11`, `BP-§10.7-B4`, `BP-§10.7-B7`, `BP-§10.7-B8` |
| `EC18-RDR-01` | 23 | `1-§5-5`, `1-§5-7`, `16-§11-2`, `16-§11-3`, `16-§13-1` to `-4`, `17-§4-15`, `17-§9-1` to `-7`, `17-§10-1` to `-7` |
| `EC18-NEG-01` | 64 | `1-§3-4`, `1-§3-8`, `1-§5-14`, `1-§5-22`, `1-§5-30`, `1-§7-4`, `1-§7-5`, `1-§8-12`, `1-§9-19`, `1-§10-9`, `1-§14-5` to `-7`, `1-§15-9`, `1-§15-10`, `1-§16-5`, `1-§17-9`, `1-§21-8` to `-13`, `1-§22-15`, `6-§4-7`, `6-§5-4`, `6-§6-3`, `6-§8-3` to `-6`, `6-§9-7` to `-11`, `6-§10-2`, `6-§12-6`, `6-§12-7`, `16-§3-6`, `16-§5-7`, `16-§6-7`, `16-§8-11`, `16-§10-3`, `16-§10-4`, `16-§11-7`, `16-§13-4`, `16-§14-6`, `16-§15-7` to `-11`, `16-§17-7`, `16-§18-10`, `22-§16-2`, `17-§9-7`, `17-§10-7`, `BP-§10.7-A8`, `BP-§10.7-A9`, `BP-§10.7-A11`, `BP-§10.7-B4`, `BP-§10.7-B7`, `BP-§10.7-B8` |
| `EC18-MIG-02` | 290 | `1-§5-1` to `-13`, `1-§5-15` to `-21`, `1-§5-23` to `-29`, `1-§6-2` to `-7`, `1-§7-1`, `1-§7-2`, `1-§8-6` to `-10`, `1-§9-1` to `-18`, `1-§10-2` to `-6`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-2` to `-4`, `1-§14-8` to `-11`, `1-§15-1`, `1-§15-8`, `1-§16-1` to `-3`, `1-§16-6`, `1-§17-2` to `-8`, `1-§19-1` to `-4`, `1-§20-1`, `1-§20-2`, `1-§21-1` to `-7`, `1-§22-1` to `-14`, `1-§24-1` to `-14`, `6-§3-1` to `-9`, `6-§4-1` to `-6`, `6-§5-1`, `6-§6-1`, `6-§7-2` to `-6`, `6-§8-2`, `6-§8-7`, `6-§9-1` to `-6`, `6-§13-1` to `-11`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§6-1` to `-6`, `16-§7-2`, `16-§7-4` to `-8`, `16-§8-1` to `-10`, `16-§9-2`, `16-§10-1`, `16-§10-2`, `16-§11-1` to `-5`, `16-§12-1`, `16-§14-2` to `-5`, `16-§15-1` to `-6`, `16-§16-1` to `-10`, `22-§16-3` to `-10`, `17-§4-15`, `17-§9-1` to `-6`, `17-§10-1` to `-4`, `17-§10-6`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7`, `3-§9-3`, `3-§11-6`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `BP-§10.3-S2` |
| `EC18-MIG-03` | 42 | `1-§5-4`, `1-§5-20`, `1-§10-2` to `-7`, `1-§10-9`, `1-§13-6`, `1-§15-6`, `1-§16-1` to `-6`, `1-§22-10`, `1-§23-7`, `1-§23-12`, `1-§24-3`, `1-§24-12`, `1-§24-14`, `1-§26-5`, `1-§26-11`, `6-§4-3`, `17-§4-15`, `17-§9-1` to `-7`, `17-§10-1` to `-7`, `3-§15-12` |
| `EC18-MIG-04` | 294 | `1-§5-1` to `-13`, `1-§5-15` to `-21`, `1-§5-23` to `-29`, `1-§6-2` to `-7`, `1-§7-1`, `1-§7-2`, `1-§8-6` to `-10`, `1-§9-1` to `-18`, `1-§10-2` to `-6`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-2` to `-4`, `1-§14-8` to `-11`, `1-§15-1`, `1-§15-8`, `1-§16-1` to `-3`, `1-§16-6`, `1-§17-2` to `-8`, `1-§19-1` to `-4`, `1-§20-1`, `1-§20-2`, `1-§21-1` to `-7`, `1-§22-1` to `-14`, `1-§24-1` to `-14`, `1-§31-1`, `1-§31-2`, `6-§3-1` to `-9`, `6-§4-1` to `-6`, `6-§5-1`, `6-§6-1`, `6-§7-2` to `-6`, `6-§8-2`, `6-§8-7`, `6-§9-1` to `-6`, `6-§13-1` to `-11`, `6-§17-1`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§6-1` to `-6`, `16-§7-2`, `16-§7-4` to `-8`, `16-§8-1` to `-10`, `16-§9-2`, `16-§10-1`, `16-§10-2`, `16-§11-1` to `-5`, `16-§12-1`, `16-§14-2` to `-5`, `16-§15-1` to `-6`, `16-§16-1` to `-10`, `16-§23-1`, `22-§16-3` to `-10`, `17-§4-15`, `17-§9-1` to `-6`, `17-§10-1` to `-4`, `17-§10-6`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7`, `3-§9-3`, `3-§11-6`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `BP-§10.3-S2` |
| `EC18-VER-02` | 306 | `1-§5-1` to `-13`, `1-§5-15` to `-21`, `1-§5-23` to `-29`, `1-§6-2` to `-6`, `1-§7-1`, `1-§7-2`, `1-§8-6` to `-10`, `1-§9-1` to `-18`, `1-§10-1` to `-8`, `1-§11-1` to `-3`, `1-§12-1` to `-5`, `1-§12-7`, `1-§13-2` to `-8`, `1-§14-2` to `-4`, `1-§14-8` to `-11`, `1-§15-1` to `-8`, `1-§16-1` to `-3`, `1-§17-2` to `-8`, `1-§19-1` to `-5`, `1-§21-1` to `-7`, `1-§26-1` to `-6`, `1-§26-10`, `1-§26-11`, `1-§26-12a`, `6-§3-1` to `-9`, `6-§4-1` to `-6`, `6-§5-1`, `6-§5-2`, `6-§6-1`, `6-§7-2` to `-5`, `6-§8-2`, `6-§8-7`, `6-§9-1` to `-6`, `6-§10-1a`, `6-§13-2` to `-8`, `6-§13-10`, `6-§13-11`, `6-§14-1` to `-6`, `6-§14-8`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§6-1` to `-6`, `16-§7-2`, `16-§7-4` to `-8`, `16-§8-1` to `-10`, `16-§9-2`, `16-§11-1` to `-5`, `16-§11-6a`, `16-§13-1` to `-3`, `16-§14-2` to `-5`, `16-§15-1` to `-6`, `16-§16-1` to `-3`, `16-§16-5` to `-7`, `16-§16-9` to `-11`, `16-§20-1` to `-4`, `16-§20-7a`, `16-§20-9`, `22-§16-5`, `22-§16-8` to `-10`, `22-§29-9`, `17-§4-15`, `17-§9-1` to `-6`, `17-§10-1` to `-6`, `24-§18-4`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7`, `3-§9-3`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `5-§7-5` to `-7`, `BP-§10.3-S2`, `BP-§10.7-A1`, `BP-§10.7-A2`, `BP-§10.7-A3`, `BP-§10.7-A4`, `BP-§10.7-A5`, `BP-§10.7-A6`, `BP-§10.7-A7`, `BP-§10.7-A10`, `BP-§10.7-B1`, `BP-§10.7-B2`, `BP-§10.7-B3`, `BP-§10.7-B5`, `BP-§10.7-B6`, `BP-§10.7-C1`, `BP-§10.7-C2`, `BP-§10.7-C3`, `BP-§10.7-C4`, `BP-§10.7-C5` |
| `EC18-VER-03` | 124 | `1-§3-4`, `1-§3-8`, `1-§5-14`, `1-§5-22`, `1-§5-30`, `1-§7-4`, `1-§7-5`, `1-§8-12`, `1-§9-19`, `1-§10-9`, `1-§14-5` to `-7`, `1-§14-13`, `1-§15-9`, `1-§15-10`, `1-§16-5`, `1-§17-9`, `1-§21-8` to `-13`, `1-§22-15`, `1-§24-1` to `-6`, `1-§24-8` to `-15`, `1-§25-1` to `-8`, `1-§26-7` to `-10`, `1-§26-13`, `6-§4-7`, `6-§5-3`, `6-§5-4`, `6-§6-3`, `6-§8-1`, `6-§8-3` to `-6`, `6-§9-7` to `-11`, `6-§10-2`, `6-§12-1` to `-8`, `6-§14-3`, `6-§14-7`, `6-§14-10`, `S11-L443-2` to `-4`, `16-§3-6`, `16-§5-7`, `16-§6-7`, `16-§8-11`, `16-§10-1` to `-4`, `16-§11-7`, `16-§13-4`, `16-§14-6`, `16-§15-7` to `-11`, `16-§16-8`, `16-§17-1` to `-5`, `16-§17-7`, `16-§18-10`, `16-§20-5`, `16-§20-6`, `16-§20-9`, `16-§20-10`, `22-§16-1`, `22-§16-2`, `22-§16-4`, `22-§16-7`, `22-§29-9`, `17-§9-6`, `17-§9-7`, `17-§10-7`, `3-§11-6`, `BP-§10.7-A8`, `BP-§10.7-A9`, `BP-§10.7-A11`, `BP-§10.7-B4`, `BP-§10.7-B7`, `BP-§10.7-B8` |
| `EC18-VER-04` | 123 | `1-§3-1` to `-3`, `1-§3-5` to `-7`, `1-§3-9`, `1-§3-10`, `1-§6-1`, `1-§8-1`, `1-§8-11`, `1-§11-4`, `1-§13-9`, `1-§14-1`, `1-§14-5`, `1-§14-12`, `1-§16-4`, `1-§17-1`, `1-§18-7`, `1-§22-1` to `-14`, `1-§23-1` to `-4`, `1-§23-5a`, `1-§23-6` to `-12`, `1-§28-1`, `6-§5-5`, `6-§6-2`, `6-§7-1`, `6-§7-6`, `6-§8-7`, `6-§11-1` to `-9`, `6-§14-8`, `S11-L443-5`, `16-§3-1` to `-5`, `16-§3-7`, `16-§4-14`, `16-§5-6`, `16-§7-1`, `16-§7-3`, `16-§9-1`, `16-§14-1`, `16-§17-6`, `16-§18-1` to `-9`, `16-§21-1`, `22-§16-1`, `22-§16-3`, `22-§16-6`, `22-§16-11`, `3-§15-7`, `3-§15-12`, `3-§15-13`, `BP-§10.7-W`, `BP-§11-p1`, `BP-§11-b1`, `BP-§11-b2`, `BP-§11-b3`, `BP-§11-b4`, `BP-§11-b5`, `BP-§11-b6`, `BP-§11-b7`, `BP-§11-b9`, `BP-§11-p3`, `BP-§11-p4`, `BP-§11-p5`, `BP-§13-p1`, `BP-§13-T`, `BP-§13-b1`, `BP-§13-b2`, `BP-§13-b3`, `BP-§13-b4`, `BP-§13-b5`, `BP-§13-b6`, `BP-§13-b7`, `BP-§13-b8`, `BP-§13-b9`, `BP-§13-b10`, `BP-§15-p2`, `BP-§15-p3`, `BP-§16-p2`, `GPCV-§8-3` to `-5` |
| `EC18-VER-05` | 14 | `1-§6-7`, `1-§12-6`, `1-§16-6`, `1-§24-7`, `1-§26-11`, `1-§26-14`, `6-§13-1`, `6-§13-9`, `S11-L443-1`, `S11-L443-3`, `16-§11-7`, `16-§16-4`, `16-§20-8`, `3-§15-12` |
| `EC18-VER-06` | 31 | `1-§1-1` to `-3`, `1-§2-1` to `-8`, `1-§13-1`, `1-§20-1`, `1-§20-2`, `6-§1-1`, `6-§2-1`, `6-§14-9`, `16-§1-1`, `16-§1-2`, `16-§2-1` to `-6`, `16-§12-1`, `16-§12-2`, `9-§12-7`, `9-§12-9`, `9-§12-12`, `BP-§10.7-X` |
| `EC18-VER-07` | 43 | `1-§26-1` to `-11`, `1-§26-12a`, `1-§26-13`, `1-§26-14`, `1-§31-1`, `1-§31-2`, `6-§14-1` to `-10`, `6-§17-1`, `16-§20-1` to `-6`, `16-§20-7a`, `16-§20-8` to `-10`, `16-§23-1`, `22-§29-9`, `24-§18-4`, `5-§7-5` to `-7` |
| `EC18-HLD-D12` | 280 | `1-§5-1` to `-30`, `1-§6-1` to `-7`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§10-1`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-1` to `-4`, `1-§14-6` to `-12`, `1-§15-1` to `-10`, `1-§19-5`, `1-§22-1` to `-15`, `1-§23-1`, `1-§23-2`, `1-§23-11`, `1-§24-1` to `-15`, `1-§25-1` to `-8`, `1-§26-1` to `-11`, `1-§26-12a`, `1-§26-13`, `1-§26-14`, `6-§3-1` to `-9`, `6-§4-1` to `-7`, `6-§5-1`, `6-§5-2`, `6-§7-1` to `-6`, `6-§8-1` to `-7`, `6-§10-1a`, `6-§10-2`, `6-§11-1`, `6-§11-2`, `6-§11-9`, `6-§12-1` to `-5`, `6-§12-7`, `6-§12-8`, `6-§13-1` to `-11`, `6-§14-1` to `-10`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§10-1` to `-4`, `16-§16-1` to `-11`, `16-§17-1` to `-5`, `16-§17-7`, `16-§18-5`, `16-§18-9`, `16-§20-1` to `-6`, `16-§20-7a`, `16-§20-8` to `-10`, `22-§16-1`, `22-§16-2`, `22-§16-4`, `22-§16-7`, `22-§29-9`, `17-§4-15`, `17-§9-1` to `-7`, `17-§10-1` to `-7`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `3-§9-3`, `3-§11-6`, `3-§15-7`, `3-§15-13`, `BP-§10.3-S2` |
| `EC18-HLD-D13` | 116 | `1-§6-3`, `1-§8-1`, `1-§8-6` to `-10`, `1-§9-1` to `-19`, `1-§12-7`, `1-§19-1` to `-5`, `1-§20-1`, `1-§20-2`, `1-§21-1` to `-13`, `1-§23-4`, `1-§23-5a`, `1-§26-1` to `-4`, `1-§26-7`, `1-§26-8`, `1-§26-10`, `1-§26-12a`, `1-§26-13`, `1-§26-14`, `6-§9-1` to `-11`, `6-§10-1a`, `6-§11-3`, `6-§11-4`, `6-§14-9`, `16-§5-5a`, `16-§6-1` to `-7`, `16-§9-2`, `16-§11-1` to `-5`, `16-§11-6a`, `16-§11-7`, `16-§12-1`, `16-§12-2`, `16-§15-1` to `-11`, `16-§18-7`, `16-§18-8`, `16-§20-2`, `16-§20-7a`, `24-§18-4`, `24-§21-6`, `9-§12-7`, `9-§12-9`, `9-§12-12`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7` |
| `EC18-HLD-D14` | 119 | `1-§6-4`, `1-§6-5`, `1-§8-9` to `-12`, `1-§13-5`, `1-§15-1` to `-4`, `1-§15-7` to `-10`, `1-§16-1` to `-3`, `1-§16-5`, `1-§16-6`, `1-§19-3`, `1-§19-4`, `1-§22-1` to `-15`, `1-§23-3`, `1-§23-6`, `1-§26-3`, `6-§4-3`, `6-§6-1` to `-3`, `6-§11-5`, `6-§14-4`, `16-§4-1` to `-13`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§5-6`, `16-§5-7`, `16-§6-1` to `-7`, `16-§8-1` to `-11`, `16-§9-1`, `16-§9-2`, `16-§11-1` to `-5`, `16-§11-6a`, `16-§11-7`, `16-§17-6`, `16-§18-1`, `16-§18-2`, `16-§18-6`, `16-§20-1`, `16-§20-2`, `16-§20-4`, `16-§20-6`, `16-§20-7a`, `16-§20-8`, `17-§10-6`, `24-§18-4`, `3-§9-3`, `3-§11-6`, `3-§15-7`, `3-§15-12`, `3-§15-13`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `5-§7-5` to `-7`, `BP-§10.3-S2` |
| `EC18-HLD-D15` | 52 | `1-§5-27`, `1-§17-1` to `-9`, `1-§23-8`, `1-§23-9`, `1-§24-13`, `6-§3-9`, `6-§4-5`, `6-§11-6`, `6-§11-7`, `16-§7-1`, `16-§7-2`, `16-§7-4` to `-8`, `16-§8-1` to `-11`, `16-§13-1` to `-4`, `16-§14-1` to `-6`, `16-§16-6`, `16-§18-3`, `16-§18-4`, `16-§20-3`, `16-§20-5`, `16-§20-9`, `5-§7-7` |
| `EC18-HLD-D16` | 17 | `1-§5-4`, `1-§5-20`, `1-§13-6`, `1-§15-6`, `1-§16-1` to `-6`, `1-§22-10`, `1-§23-12`, `1-§24-12`, `1-§24-14`, `1-§26-11`, `17-§10-5`, `3-§15-12` |
| `EC18-HLD-D17` | 25 | `1-§10-2` to `-7`, `1-§10-9`, `1-§23-7`, `1-§24-3`, `1-§26-5`, `17-§4-15`, `17-§9-1` to `-7`, `17-§10-1` to `-7` |
| `EC18-HLD-D19` | 5 | `1-§25-8`, `6-§12-8`, `16-§10-4`, `16-§17-5`, `16-§20-10` |
| `EC18-HLD-D20` | 16 | `1-§5-24` to `-29`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§17-3`, `1-§17-5`, `1-§17-6`, `1-§20-1`, `1-§24-13`, `1-§26-1` |
| `EC18-HLD-DTX` | 5 | `1-§16-5`, `1-§16-6`, `1-§26-11`, `6-§4-3`, `3-§15-12` |
| `EC18-HLD-DSCH` | 10 | `6-§3-3`, `S11-L443-1`, `16-§7-1`, `16-§7-2`, `16-§7-4` to `-8`, `16-§20-3` |
| `EC18-HLD-DAI` | 43 | `1-§21-1` to `-13`, `6-§9-1` to `-11`, `16-§6-1` to `-7`, `16-§15-1` to `-11`, `24-§18-4` |
| `EC18-HLD-DV` | 5 | `1-§8-8`, `1-§19-2`, `1-§26-2`, `12-§4-4`, `12-§7-7` |
| `EC18-HLD-DNTF` | 17 | `1-§5-24` to `-29`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§15-4`, `1-§17-3`, `1-§17-5`, `1-§17-6`, `1-§20-1`, `1-§24-13`, `1-§26-1` |
| `EC18-HLD-DENT` | 13 | `17-§4-15`, `17-§9-1` to `-6`, `17-§10-1` to `-6` |
| `EC18-HLD-DPAY` | 2 | `1-§15-6`, `1-§16-4` |
| `EC18-HLD-DLOC` | 42 | `1-§5-18`, `1-§5-26`, `1-§13-5`, `1-§14-1` to `-12`, `1-§15-5`, `1-§22-11`, `1-§23-10`, `1-§24-4`, `1-§26-6`, `1-§26-9`, `6-§3-4`, `6-§5-2` to `-5`, `6-§11-8`, `6-§12-4`, `6-§12-6`, `6-§13-3`, `6-§14-3`, `S11-L443-1`, `22-§16-3` to `-11`, `22-§29-9` |
| `EC18-HLD-DMAP` | 1 | `1-§13-3` |
| `EC18-HLD-DLEG` | 6 | `6-§3-6`, `6-§8-2`, `S11-L443-1`, `S11-L443-3`, `S11-L443-4`, `22-§16-6` |
| `EC18-HLD-DC13` | 5 | `1-§5-29`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5` |
| `EC18-HLD-DC14` | 1 | `6-§5-2` |
| `EC18-NTF-01` | 1 | `1-§17-4` |
| `EC18-HLD-PQ14` | 8 | `16-§10-2`, `16-§10-3`, `16-§11-2`, `16-§11-3`, `16-§13-2`, `16-§17-3`, `16-§20-6`, `16-§20-7a` |

## 13. Status

`DRAFT — MISSION CONTROL REVIEW REQUIRED — NO IMPLEMENTATION AUTHORIZATION`. Stage 12 draft for MC41 Stage 13 review. No implementation, code, SQL, migration, grant, provider activation, deployment or test execution is authorized or has occurred. Stage 13 package lock and the Implementation Authorization are separate later decisions.
