# SB-P-1.18 — Lovable Build Prompt

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
| Document | Lovable Build Prompt |
| Lifecycle stage | Source 18 v1.3 Stage 12 — Initial Implementation Package |
| Status | `DRAFT — MISSION CONTROL REVIEW REQUIRED — NO IMPLEMENTATION AUTHORIZATION` |
| Package version | 0.1-D (draft; no lock before Stage 13) |
| Author | Claude Code (also the SB-P-1.18 Stage 2 to 9 author and the EIS author; not independent review) |
| Companion documents | `engineering-contract.md`, `lovable-build-prompt.md`, `verification-checklist.md` in `docs/implementation/SB-P-1.18/` |

## 2. What This Prompt Is

Implementation instructions for a **future, eligible and separately authorized** builder. It is not an instruction to build now. It appoints no builder, grants no branch, repository, Supabase or execution access, and authorizes nothing. The workstreams below are **proposals** for Mission Control to fix in the Stage 13 workstream register; until a Mission Control Implementation Authorization record exists at `communication/missions/SB-P-1.18/mission-control/implementation-authorization.md`, no implementation may begin.

## 3. Read Before Any Future Build

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

The locked EIS is the authoritative engineering text; the Engineering Contract maps it to obligations; the Verification Checklist names the evidence each row needs. If this prompt and the EIS differ, the EIS prevails and the builder stops and reports.

## 4. Building Rules (apply to every workstream)

1. **Build only the rows of your authorized workstream.** Behaviour outside the assigned FCTM rows is forbidden; a needed change outside them stops work and returns to Mission Control.
2. **No new Product Truth.** No new feature, screen promise, permission, role default, grant, error code, provider, worker behaviour or speculative service. Classification, commitment and assignment never change without a Founder decision.
3. **Respect existing product routes, merchant workflows and permission boundaries.** Reuse the existing routes and the SB-P-1.17 shell; do not rename or replace approved structures.
4. **Owner financial intelligence stays private by default.** No profit, Ask CFO, Reference Cost or margin reaches a Manager or Employee through any view, export, AI answer, count or error path without an explicit Owner grant (`EIS18-SEC-03`).
5. **Owner controls the decision; AI is never the judge.** AI and typed tools propose or read; they never confirm, approve, override, review, assign or grant (`EIS18-OFD-03`, `-HAI-02`).
6. **One stock authority; zero direct inventory DML.** Stock moves only through the SB-P-1.17 governed path. No second writer, no feature movement semantics, no direct `inventory_*` DML (`EIS18-STK-04`).
7. **Non-Owner stock legs are BLOCKED FOR IMPLEMENTATION.** Manager or Employee packing with a movement, non-Owner physical-return confirmation and delegated-Manager override return `STK_DEPENDENCY_HELD` with no effect until the Stock prerequisites are met and separately authorized. Do not build around the hold, simulate the protected child or claim the legs delivered.
8. **Standard POS bridge only.** This mission needs no POS source. Any POS-originated stock or sale effect stays with the SB-P-1.17 standard POS bridge; no custom POS modification inside the core platform.
9. **Kernel on every read and write.** `authz.authorize` with explicit active business; principal from the server; revalidation at commit; confirmation bindings where marked; `EIS-CNF-04` idempotency; audit in the same transaction.
10. **Birth-safe database objects.** RLS on, no direct client DML, narrow executors, no `PUBLIC` execute. Any SQL, migration, grant or RLS change needs its own explicit migration mission and authorization (`docs/migration/README.md`); this prompt authorizes none.
11. **Holds stay closed.** `DLEG`, R2, DC-14, `PQ-14`, `DTX`, `DNTF`, participant activation, the system-proposed overtime activation record, provider activation and every other Section 6 hold stay in force.
12. **Evidence honesty.** Report every row by status; never mark a row passed without the Verification Checklist evidence; CI is a signal, not acceptance.

## 5. Workstreams (proposals for the Stage 13 register)

Each row has one primary workstream (Section 7). "Contributing" rows are primary elsewhere but need this workstream's part. Row counts are in Section 8.

### 5.1 SB-P-1.18/WS18-A1 — Customers, Order Capture, Clarification and Availability

| Field | Value |
|---|---|
| Scope | Customer participant use, consent state and addresses; order capture from every channel into one engine; drafts, ambiguity and confirmation; availability through the SB-P-1.17 reader; versioned change approval; order capabilities. |
| Primary rows | 104 (Section 7) |
| Contributing rows | 18 |
| Obligations built | `EC18-PRN-01`, `EC18-ORD-01`, `EC18-ORD-03`, `EC18-ERR-01`, `EC18-NEG-01`, `EC18-OAU-01`, `EC18-OAU-02`, `EC18-ORD-04`, `EC18-CUS-02`, `EC18-CUS-01`, `EC18-CUS-06`, `EC18-CUS-04`, `EC18-SEC-03`, `EC18-CUS-05`, `EC18-CUS-03`, `EC18-ORD-02`, `EC18-RDR-01`, `EC18-ORD-05`, `EC18-LOC-05`, `EC18-IDM-01`, `EC18-AVL-01`; plus the cross-cutting `EC18-SEC-01`, `-SEC-02`, `-CAP-01`, `-OBJ-01`, `-CMD-01`, `-MIG-*` and `-VER-*` on their rows |
| Dependencies | SB-P-1.12 kernel and registry (`D12`); SB-P-1.13 typed tools and language (`D13`, `DAI`, `DV`); SB-P-1.14 UDI (`D14`); SB-P-1.16 shared customer identity; SB-P-1.17 availability reader `EIS17-RO-08` (`D17`) |
| Row gates present | `DNTF` 11 |
| Prohibited | An order-local customer; a second stock read; a guessed or defaulted fact; AI confirmation or approval; a customer principal; any out-of-app send |
| Done when | Every primary row has its Verification Checklist items evidenced at their named class and verifier, all applicable negative-path checks pass at runtime, and Mission Control accepts the Builder Completion Report. Not before |

### 5.2 SB-P-1.18/WS18-A2 — Packing, Physical Return and Stock Consumer Contract

| Field | Value |
|---|---|
| Scope | The packing, override packing and physical-return commands and records as the consumer of the one SB-P-1.17 stock authority, in the common Kernel-first lock order, with the combined compensation cap, archived-item fail-close and durable authorization provenance. |
| Primary rows | 12 (Section 7) |
| Contributing rows | 0 |
| Obligations built | `EC18-STK-04`, `EC18-AVL-02`, `EC18-STK-01`, `EC18-STK-02`, `EC18-ERR-01`, `EC18-AVL-01`, `EC18-STK-03`, `EC18-NEG-01`; plus the cross-cutting `EC18-SEC-01`, `-SEC-02`, `-CAP-01`, `-OBJ-01`, `-CMD-01`, `-MIG-*` and `-VER-*` on their rows |
| Dependencies | SB-P-1.17 stock authority (`D17`); corrected Stock EIS `790591a8` (documentary source only); SB-P-1.17 implementation package reconciliation; SA-01 and SA-03 confirmation; SB-P-1.12 kernel and confirmation |
| Row gates present | `STK-BLOCKED` 12 |
| Prohibited | **Every non-Owner leg** (Manager or Employee packing with a movement, non-Owner return confirmation, delegated-Manager override) beyond returning `STK_DEPENDENCY_HELD` with no effect; direct inventory DML; a second writer; feature movement semantics; Employee override; automatic restock on cancellation; refund, COD or Ledger effect from a return; restock into an archived item |
| Done when | Every primary row has its Verification Checklist items evidenced at their named class and verifier, all applicable negative-path checks pass at runtime, and Mission Control accepts the Builder Completion Report. Not before |

**Stock dependency block.** This workstream's non-Owner legs are **BLOCKED FOR IMPLEMENTATION**: build only the Owner leg (after `D17`) and the fail-closed `STK_DEPENDENCY_HELD` response for every non-Owner caller. Unblocking requires, in order: SB-P-1.17 implementation package reconciliation to the corrected Stock EIS; SA-01 / Supabase and SA-03 confirmation of the protected child; SB-P-1.17 source-owner confirmation; a separate Implementation Authorization naming these legs; and runtime proof (`NT-STK-04`, `VN18-18`, `VN18-19`). The Build Now commitments stay `IN SCOPE` and **NOT DELIVERED** until then.

### 5.3 SB-P-1.18/WS18-A3 — Delivery Lifecycle, Proof, COD and Order Foundations

| Field | Value |
|---|---|
| Scope | Order state machine, assignment checks, employee delivery tasks and actions, configured proof and completion, COD facts, native membership notifications, AI typed-tool assistance, order data model and named exceptions. |
| Primary rows | 100 (Section 7) |
| Contributing rows | 16 |
| Obligations built | `EC18-ERR-01`, `EC18-NEG-01`, `EC18-OFD-01`, `EC18-DLV-02`, `EC18-COD-02`, `EC18-DLV-01`, `EC18-PRF-01`, `EC18-OFD-02`, `EC18-OFD-07`, `EC18-COD-01`, `EC18-OFD-06`, `EC18-IDM-01`, `EC18-LOC-05`, `EC18-OFD-03`, `EC18-OFD-05`, `EC18-PRF-04`, `EC18-ORD-03`, `EC18-CUS-01`, `EC18-DLV-03`, `EC18-PRF-02`, `EC18-ORD-04`, `EC18-CUS-05`, `EC18-OFD-04`, `EC18-ORD-01`, `EC18-AUD-01`, `EC18-PRF-03`, `EC18-CUS-04`, `EC18-ORD-05`, `EC18-AVL-01`, `EC18-CUS-03`, `EC18-SEC-03`, `EC18-PRN-01`; plus the cross-cutting `EC18-SEC-01`, `-SEC-02`, `-CAP-01`, `-OBJ-01`, `-CMD-01`, `-MIG-*` and `-VER-*` on their rows |
| Dependencies | SB-P-1.12 kernel (`D12`); SB-P-1.14 storage (`D14`); SB-P-1.15 notifications and scheduler (`D15`, `DSCH`); SB-P-1.16 `EIS16-ORD-01` and `DTX` for any Ledger link (`D16`); `DMAP` none |
| Row gates present | `DNTF` 5, `DTX` 3, `R2` 1 |
| Prohibited | Ledger income from the order domain; a COD Ledger link before `DTX`; photo, signature or OTP proof; a map provider; out-of-app channels; customer silence as a failure |
| Done when | Every primary row has its Verification Checklist items evidenced at their named class and verifier, all applicable negative-path checks pass at runtime, and Mission Control accepts the Builder Completion Report. Not before |

### 5.4 SB-P-1.18/WS18-P — External Delivery Staff Consumer Path

| Field | Value |
|---|---|
| Scope | The external Delivery Staff participant consumer path: participant capability registration, object assignment and governed set read, merchant invitation surfaces, participant first-run rendering and one authority path per request. |
| Primary rows | 24 (Section 7) |
| Contributing rows | 0 |
| Obligations built | `EC18-EXT-08`, `EC18-EXT-04`, `EC18-EXT-07`, `EC18-EXT-03`, `EC18-EXT-01`, `EC18-EXT-05`, `EC18-EXT-06`, `EC18-DLV-03`, `EC18-EXT-02`, `EC18-ERR-01`, `EC18-DLV-04`, `EC18-LOC-05`, `EC18-DLV-02`, `EC18-ACC-01`, `EC18-SEC-03`, `EC18-NEG-01`, `EC18-PRF-01`, `EC18-OFD-01`, `EC18-NTF-01`, `EC18-OFD-05`, `EC18-OFD-07`; plus the cross-cutting `EC18-SEC-01`, `-SEC-02`, `-CAP-01`, `-OBJ-01`, `-CMD-01`, `-MIG-*` and `-VER-*` on their rows |
| Dependencies | SB-P-1.12 v0.5/v0.6 participant contract implemented and accepted; P-1 per-method identity evidence; PC-07 readiness and PC-10 activation; SB-P-1.15 participant notification |
| Row gates present | `ACT` 24 |
| Prohibited | Any usable participant route, issue or acceptance before the activation gate; participant access to unassigned orders, Owner data, customer lists or exports; return confirmation or override for a participant |
| Done when | Every primary row has its Verification Checklist items evidenced at their named class and verifier, all applicable negative-path checks pass at runtime, and Mission Control accepts the Builder Completion Report. Not before |

**Activation block.** Build against the consumed SB-P-1.12 participant contract only after its implementation is accepted; nothing is usable until `EIS18-EXT-08` is satisfied.

### 5.5 SB-P-1.18/WS18-B — Staff/HR, Attendance, Overtime and Payroll Support

| Field | Value |
|---|---|
| Scope | Staff records with an optional membership link, shifts and roster import, attendance with the selected non-location methods, leave and correction context, overtime records (three origins) and the default-OFF system-proposed flow, payroll-support view, staff AI and exceptions. |
| Primary rows | 100 (Section 7) |
| Contributing rows | 0 |
| Obligations built | `EC18-ERR-01`, `EC18-NEG-01`, `EC18-HFD-01`, `EC18-CTX-01`, `EC18-HEX-01`, `EC18-LOC-05`, `EC18-PAY-01`, `EC18-HPR-01`, `EC18-HR-03`, `EC18-HR-02`, `EC18-ROS-01`, `EC18-HAI-01`, `EC18-HAI-02`, `EC18-OVT-01`, `EC18-IDM-01`, `EC18-PRN-02`, `EC18-SEC-03`, `EC18-ATT-03`, `EC18-AUD-01`, `EC18-OVT-04`, `EC18-HR-01`, `EC18-ATT-01`, `EC18-PAY-03`, `EC18-OVT-05`, `EC18-HR-04`, `EC18-ATT-02`, `EC18-LOC-01`, `EC18-OVT-02`, `EC18-OVT-03`; plus the cross-cutting `EC18-SEC-01`, `-SEC-02`, `-CAP-01`, `-OBJ-01`, `-CMD-01`, `-MIG-*` and `-VER-*` on their rows |
| Dependencies | SB-P-1.12 memberships and kernel (`D12`); SB-P-1.13 (`D13`); SB-P-1.14 UDI (`D14`); SB-P-1.15 timezone; C-LOC for any enabled location method; `DLEG` |
| Row gates present | `DLEG` 5, `OFF` 5, `DTX` 1, `DC14` 1 |
| Prohibited | KYC or national-ID fields; staff inferred from Auth users; any payroll or overtime calculation, threshold, fine, deduction or legal rule; compelled GPS, surveillance or geofence-based discipline; an unreviewed manager overwrite; enabling the system-proposed flow |
| Done when | Every primary row has its Verification Checklist items evidenced at their named class and verifier, all applicable negative-path checks pass at runtime, and Mission Control accepts the Builder Completion Report. Not before |

### 5.6 SB-P-1.18/WS18-C — Compliance Shield

| Field | Value |
|---|---|
| Scope | Compliance records with typed fields and dates, UDI intake, confirmed-date reminders, renewal versions, Cabinet document links with the compliance class, channel parity and the legal-assist boundary. |
| Primary rows | 136 (Section 7) |
| Contributing rows | 0 |
| Obligations built | `EC18-ERR-01`, `EC18-PRN-03`, `EC18-NEG-01`, `EC18-CMP-01`, `EC18-REM-01`, `EC18-CLG-01`, `EC18-CEX-01`, `EC18-CMP-02`, `EC18-CCH-01`, `EC18-CFD-01`, `EC18-CPR-01`, `EC18-CMP-03`, `EC18-RNW-01`, `EC18-RDR-01`, `EC18-CNT-01`, `EC18-CAB-02`, `EC18-CAB-01`, `EC18-CAU-01`, `EC18-CCO-01`, `EC18-IDM-01`, `EC18-AUD-01`; plus the cross-cutting `EC18-SEC-01`, `-SEC-02`, `-CAP-01`, `-OBJ-01`, `-CMD-01`, `-MIG-*` and `-VER-*` on their rows |
| Dependencies | SB-P-1.14 UDI and Cabinet (`D14`); SB-P-1.15 Reminder Engine, notifications and timezone (`D15`, `DSCH`); SB-P-1.12 kernel; `PQ-14` package and runtime |
| Row gates present | `PQ14` 6 |
| Prohibited | A compliance-only OCR pipeline or store; reminders from unconfirmed dates; legal certification, fabricated law or penalties; history erasure; broad document browsing |
| Done when | Every primary row has its Verification Checklist items evidenced at their named class and verifier, all applicable negative-path checks pass at runtime, and Mission Control accepts the Builder Completion Report. Not before |

### 5.7 SB-P-1.18/WS18-D — Shared Location Foundation

| Field | Value |
|---|---|
| Scope | The Shared Location Foundation: per-purpose validation functions, disclosure, result-only visibility, the C3 temporary pin and its erasure, and coordinate redaction from every sink. |
| Primary rows | 27 (Section 7) |
| Contributing rows | 13 |
| Obligations built | `EC18-LOC-05`, `EC18-LOC-01`, `EC18-LOC-02`, `EC18-ERR-01`, `EC18-NEG-01`, `EC18-LOC-03`, `EC18-LOC-04`; plus the cross-cutting `EC18-SEC-01`, `-SEC-02`, `-CAP-01`, `-OBJ-01`, `-CMD-01`, `-MIG-*` and `-VER-*` on their rows |
| Dependencies | SA-02 privacy review; `DLOC` device capture; SB-P-1.15 scheduler for timed erasure (`DSCH`); DC-14 for any geofence |
| Row gates present | `DLEG` 1 |
| Prohibited | Continuous, background or periodic capture; movement traces or live views; any stored A2 or B2 coordinate; coordinates in URLs, logs, analytics or AI context; blanket holds |
| Done when | Every primary row has its Verification Checklist items evidenced at their named class and verifier, all applicable negative-path checks pass at runtime, and Mission Control accepts the Builder Completion Report. Not before |

### 5.8 SB-P-1.18/WS18-E — Order and Staff/HR Workspace Views

| Field | Value |
|---|---|
| Scope | Order and Staff/HR cards in the SB-P-1.17 Manager shell, fed by feature services and gated by role and add-on entitlement. |
| Primary rows | 15 (Section 7) |
| Contributing rows | 0 |
| Obligations built | `EC18-RDR-01`, `EC18-VW-01`, `EC18-VW-02`, `EC18-ERR-01`, `EC18-NEG-01`, `EC18-PAY-02`; plus the cross-cutting `EC18-SEC-01`, `-SEC-02`, `-CAP-01`, `-OBJ-01`, `-CMD-01`, `-MIG-*` and `-VER-*` on their rows |
| Dependencies | SB-P-1.17 shell (`D17`); entitlement (`DENT`); the feature services of WS18-A1, A3 and B |
| Row gates present | None beyond `DEP` |
| Prohibited | Marketplace behaviour; a view that reaches Owner financial intelligence; schema simulation of entitlement |
| Done when | Every primary row has its Verification Checklist items evidenced at their named class and verifier, all applicable negative-path checks pass at runtime, and Mission Control accepts the Builder Completion Report. Not before |

### 5.9 SB-P-1.18/WS18-V — Acceptance, Completion Accounting and Founder Runtime Verification

| Field | Value |
|---|---|
| Scope | Acceptance scenarios, completion gates, mission sequencing and evidence rules, and the Founder-reserved scenarios A, B and C; verification architecture only. |
| Primary rows | 74 (Section 7) |
| Contributing rows | 7 |
| Obligations built | `EC18-ACC-05`, `EC18-ACC-01`, `EC18-ACC-02`, `EC18-ACC-03`, `EC18-ACC-04`, `EC18-LOC-05`, `EC18-IDM-01`; plus the cross-cutting `EC18-SEC-01`, `-SEC-02`, `-CAP-01`, `-OBJ-01`, `-CMD-01`, `-MIG-*` and `-VER-*` on their rows |
| Dependencies | All other workstreams; Stage 17 human runtime verification; Stage 19 independent verification |
| Row gates present | `PQ14` 2, `DNTF` 1, `DTX` 1 |
| Prohibited | Representing any scenario as executed; Founder-reserved scenarios run by anyone other than the Founder process |
| Done when | Every primary row has its Verification Checklist items evidenced at their named class and verifier, all applicable negative-path checks pass at runtime, and Mission Control accepts the Builder Completion Report. Not before |

## 6. Holds the Builder Must Not Cross

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

## 7. Workstream-to-FCTM-Row Map (592 rows)

`Gate` uses the Engineering Contract Section 6 key. `Contributing` names other workstreams that build part of the row.

| Row | Kind | Primary workstream | Contributing | Gate |
|---|---|---|---|---|
| `1-§1-1` | EXP | WS18-A1 | — | DEP |
| `1-§1-2` | EXP | WS18-A1 | — | DEP |
| `1-§1-3` | EXP | WS18-A1 | — | DEP |
| `1-§2-1` | NARR | WS18-A1 | — | DEP |
| `1-§2-2` | NARR | WS18-A1 | — | DEP |
| `1-§2-3` | NARR | WS18-A1 | — | DEP |
| `1-§2-4` | NARR | WS18-A1 | — | DEP |
| `1-§2-5` | NARR | WS18-A1 | — | DEP |
| `1-§2-6` | NARR | WS18-A1 | — | DEP |
| `1-§2-7` | NARR | WS18-A1 | — | DEP |
| `1-§2-8` | NARR | WS18-A1 | — | DEP |
| `1-§3-1` | PRIN | WS18-A1 | — | DEP |
| `1-§3-2` | PRIN | WS18-A1 | — | DEP |
| `1-§3-3` | PRIN | WS18-A1 | — | DEP |
| `1-§3-4` | NEG | WS18-A1 | — | DEP |
| `1-§3-5` | PRIN | WS18-A1 | — | DEP |
| `1-§3-6` | PRIN | WS18-A1 | — | DEP |
| `1-§3-7` | PRIN | WS18-A1 | — | DEP |
| `1-§3-8` | NEG | WS18-A1 | — | DEP |
| `1-§3-9` | PRIN | WS18-A1 | — | DEP |
| `1-§3-10` | PRIN | WS18-A1 | — | DEP |
| `1-§5-1` | OBL | WS18-A1 | — | DEP |
| `1-§5-2` | OBL | WS18-A1 | — | DEP |
| `1-§5-3` | OBL | WS18-A1 | — | DEP |
| `1-§5-4` | OBL | WS18-A1 | — | DEP |
| `1-§5-5` | OBL | WS18-A1 | — | DEP |
| `1-§5-6` | OBL | WS18-A1 | — | DEP |
| `1-§5-7` | OBL | WS18-A1 | — | DEP |
| `1-§5-8` | OBL | WS18-A1 | — | DEP |
| `1-§5-9` | OBL | WS18-A1 | — | DEP |
| `1-§5-10` | OBL | WS18-A1 | — | DEP |
| `1-§5-11` | OBL | WS18-A1 | — | DEP |
| `1-§5-12` | OBL | WS18-A1 | — | DEP |
| `1-§5-13` | OBL | WS18-A1 | — | DEP |
| `1-§5-14` | NEG | WS18-A1 | — | DEP |
| `1-§5-15` | OBL | WS18-P | WS18-A1 | ACT, DEP |
| `1-§5-16` | OBL | WS18-P | WS18-A1 | ACT, DEP |
| `1-§5-17` | OBL | WS18-P | WS18-A1 | ACT, DEP |
| `1-§5-18` | OBL | WS18-P | WS18-A1 | ACT, DEP |
| `1-§5-19` | OBL | WS18-P | WS18-A1 | ACT, DEP |
| `1-§5-20` | OBL | WS18-P | WS18-A1 | ACT, DEP |
| `1-§5-21` | OBL | WS18-P | WS18-A1 | ACT, DEP |
| `1-§5-22` | NEG | WS18-P | WS18-A1 | ACT, DEP |
| `1-§5-23` | OBL | WS18-A1 | — | DEP |
| `1-§5-24` | OBL | WS18-A1 | — | DNTF, DEP |
| `1-§5-25` | OBL | WS18-A1 | — | DNTF, DEP |
| `1-§5-26` | OBL | WS18-A1 | — | DNTF, DEP |
| `1-§5-27` | OBL | WS18-A1 | — | DNTF, DEP |
| `1-§5-28` | OBL | WS18-A1 | — | DNTF, DEP |
| `1-§5-29` | OBL | WS18-A1 | — | DNTF, DEP |
| `1-§5-30` | NEG | WS18-A1 | — | DEP |
| `1-§6-1` | RULE | WS18-A1 | — | DEP |
| `1-§6-2` | OBL | WS18-A1 | — | DEP |
| `1-§6-3` | OBL | WS18-A1 | — | DEP |
| `1-§6-4` | OBL | WS18-A1 | — | DEP |
| `1-§6-5` | OBL | WS18-A1 | — | DEP |
| `1-§6-6` | OBL | WS18-A1 | — | DEP |
| `1-§6-7` | OBL | WS18-A1 | — | DEP |
| `1-§7-1` | OBL | WS18-A1 | — | DNTF, DEP |
| `1-§7-2` | OBL | WS18-A1 | — | DNTF, DEP |
| `1-§7-4` | NEG | WS18-A1 | — | DNTF, DEP |
| `1-§7-5` | NEG | WS18-A1 | — | DNTF, DEP |
| `1-§8-1` | RULE | WS18-A1 | — | DEP |
| `1-§8-6` | OBL | WS18-A1 | — | DEP |
| `1-§8-7` | OBL | WS18-A1 | — | DEP |
| `1-§8-8` | OBL | WS18-A1 | — | DEP |
| `1-§8-9` | OBL | WS18-A1 | — | DEP |
| `1-§8-10` | OBL | WS18-A1 | — | DEP |
| `1-§8-11` | RULE | WS18-A1 | — | DEP |
| `1-§8-12` | NEG | WS18-A1 | — | DEP |
| `1-§9-1` | OBL | WS18-A1 | — | DEP |
| `1-§9-2` | OBL | WS18-A1 | — | DEP |
| `1-§9-3` | OBL | WS18-A1 | — | DEP |
| `1-§9-4` | OBL | WS18-A1 | — | DEP |
| `1-§9-5` | OBL | WS18-A1 | — | DEP |
| `1-§9-6` | OBL | WS18-A1 | — | DEP |
| `1-§9-7` | OBL | WS18-A1 | — | DEP |
| `1-§9-8` | OBL | WS18-A1 | — | DEP |
| `1-§9-9` | OBL | WS18-A1 | — | DEP |
| `1-§9-10` | OBL | WS18-A1 | — | DEP |
| `1-§9-11` | OBL | WS18-A1 | — | DEP |
| `1-§9-12` | OBL | WS18-A1 | — | DEP |
| `1-§9-13` | OBL | WS18-A1 | — | DEP |
| `1-§9-14` | OBL | WS18-A1 | — | DEP |
| `1-§9-15` | OBL | WS18-A1 | — | DEP |
| `1-§9-16` | OBL | WS18-A1 | — | DEP |
| `1-§9-17` | OBL | WS18-A1 | — | DEP |
| `1-§9-18` | OBL | WS18-A1 | — | DEP |
| `1-§9-19` | NEG | WS18-A1 | — | DEP |
| `1-§10-1` | RULE | WS18-A2 | WS18-A1 | STK-BLOCKED, DEP |
| `1-§10-2` | OBL | WS18-A1 | — | DEP |
| `1-§10-3` | OBL | WS18-A2 | WS18-A1 | STK-BLOCKED, DEP |
| `1-§10-4` | OBL | WS18-A2 | WS18-A1 | STK-BLOCKED, DEP |
| `1-§10-5` | OBL | WS18-A2 | WS18-A1 | STK-BLOCKED, DEP |
| `1-§10-6` | OBL | WS18-A2 | WS18-A1 | STK-BLOCKED, DEP |
| `1-§10-7` | EX | WS18-A2 | WS18-A1 | STK-BLOCKED, DEP |
| `1-§10-8` | OBL | WS18-A2 | WS18-A1 | STK-BLOCKED, DEP |
| `1-§10-9` | NEG | WS18-A2 | WS18-A1 | STK-BLOCKED, DEP |
| `1-§11-1` | OBL | WS18-A3 | — | DEP |
| `1-§11-2` | OBL | WS18-A3 | — | DEP |
| `1-§11-3` | OBL | WS18-A3 | — | DEP |
| `1-§11-4` | RULE | WS18-A3 | — | DEP |
| `1-§12-1` | OBL | WS18-A3 | — | DEP |
| `1-§12-2` | OBL | WS18-A3 | — | DEP |
| `1-§12-3` | OBL | WS18-P | WS18-A3 | ACT, DEP |
| `1-§12-4` | OBL | WS18-A3 | — | DEP |
| `1-§12-5` | OBL | WS18-A3 | — | DEP |
| `1-§12-6` | OBL | WS18-A3 | — | DEP |
| `1-§12-7` | OBL | WS18-A3 | — | DEP |
| `1-§13-1` | RULE | WS18-A3 | — | DEP |
| `1-§13-2` | OBL | WS18-P | WS18-A3 | ACT, DEP |
| `1-§13-3` | OBL | WS18-P | WS18-A3 | ACT, DEP |
| `1-§13-4` | OBL | WS18-P | WS18-A3 | ACT, DEP |
| `1-§13-5` | OBL | WS18-P | WS18-A3 | ACT, DEP |
| `1-§13-6` | OBL | WS18-P | WS18-A3 | ACT, DEP |
| `1-§13-7` | OBL | WS18-P | WS18-A3 | ACT, DEP |
| `1-§13-8` | OBL | WS18-P | WS18-A3 | ACT, DEP |
| `1-§13-9` | RULE | WS18-A3 | — | DEP |
| `1-§14-1` | PRIN | WS18-D | — | DEP |
| `1-§14-2` | OBL | WS18-D | — | DEP |
| `1-§14-3` | OBL | WS18-D | — | DEP |
| `1-§14-4` | OBL | WS18-D | — | DEP |
| `1-§14-5` | NEG | WS18-D | — | DEP |
| `1-§14-6` | NEG | WS18-D | — | DEP |
| `1-§14-7` | NEG | WS18-D | — | DEP |
| `1-§14-8` | OBL | WS18-D | — | DEP |
| `1-§14-9` | OBL | WS18-D | — | DEP |
| `1-§14-10` | OBL | WS18-D | — | DEP |
| `1-§14-11` | OBL | WS18-D | — | DEP |
| `1-§14-12` | RULE | WS18-D | — | DEP |
| `1-§14-13` | RULE | WS18-D | — | DEP |
| `1-§15-1` | OBL | WS18-A3 | — | DEP |
| `1-§15-2` | EX | WS18-P | WS18-A3 | ACT, DEP |
| `1-§15-3` | EX | WS18-A3 | — | DEP |
| `1-§15-4` | EX | WS18-A3 | — | R2, DNTF, DEP |
| `1-§15-5` | EX | WS18-A3 | WS18-D | DEP |
| `1-§15-6` | EX | WS18-A3 | — | DEP |
| `1-§15-7` | EX | WS18-A3 | — | DEP |
| `1-§15-8` | OBL | WS18-A3 | — | DEP |
| `1-§15-9` | NEG | WS18-A3 | — | DEP |
| `1-§15-10` | NEG | WS18-A3 | — | DEP |
| `1-§16-1` | OBL | WS18-A3 | — | DEP |
| `1-§16-2` | OBL | WS18-A3 | — | DEP |
| `1-§16-3` | OBL | WS18-A3 | — | DEP |
| `1-§16-4` | RULE | WS18-A3 | — | DEP |
| `1-§16-5` | NEG | WS18-A3 | — | DTX, DEP |
| `1-§16-6` | OBL | WS18-A3 | — | DTX, DEP |
| `1-§17-1` | RULE | WS18-A3 | — | DEP |
| `1-§17-2` | OBL | WS18-A3 | — | DEP |
| `1-§17-3` | OBL | WS18-A3 | — | DNTF, DEP |
| `1-§17-4` | OBL | WS18-P | WS18-A3 | ACT, DEP |
| `1-§17-5` | OBL | WS18-A3 | — | DNTF, DEP |
| `1-§17-6` | OBL | WS18-A3 | — | DNTF, DEP |
| `1-§17-7` | OBL | WS18-A3 | — | DEP |
| `1-§17-8` | OBL | WS18-A3 | — | DEP |
| `1-§17-9` | NEG | WS18-A3 | — | DEP |
| `1-§18-7` | RULE | WS18-A1 | — | DEP |
| `1-§19-1` | OBL | WS18-A1 | — | DEP |
| `1-§19-2` | OBL | WS18-A1 | — | DEP |
| `1-§19-3` | OBL | WS18-A1 | — | DEP |
| `1-§19-4` | OBL | WS18-A1 | — | DEP |
| `1-§19-5` | RULE | WS18-A1 | — | DEP |
| `1-§20-1` | OBL | WS18-A1 | — | DNTF, DEP |
| `1-§20-2` | OBL | WS18-A1 | — | DEP |
| `1-§21-1` | OBL | WS18-A3 | — | DEP |
| `1-§21-2` | OBL | WS18-A3 | — | DEP |
| `1-§21-3` | OBL | WS18-A3 | — | DEP |
| `1-§21-4` | OBL | WS18-A3 | — | DEP |
| `1-§21-5` | OBL | WS18-A3 | — | DEP |
| `1-§21-6` | OBL | WS18-A3 | — | DEP |
| `1-§21-7` | OBL | WS18-A3 | — | DEP |
| `1-§21-8` | NEG | WS18-A3 | — | DEP |
| `1-§21-9` | NEG | WS18-A3 | — | DEP |
| `1-§21-10` | NEG | WS18-A3 | — | DEP |
| `1-§21-11` | NEG | WS18-A3 | — | DEP |
| `1-§21-12` | NEG | WS18-A3 | — | DEP |
| `1-§21-13` | NEG | WS18-A3 | — | DEP |
| `1-§22-1` | OBL | WS18-A3 | — | DEP |
| `1-§22-2` | OBL | WS18-A3 | — | DEP |
| `1-§22-3` | OBL | WS18-A3 | — | DEP |
| `1-§22-4` | OBL | WS18-A3 | — | DEP |
| `1-§22-5` | OBL | WS18-A3 | — | DEP |
| `1-§22-6` | OBL | WS18-A3 | — | DEP |
| `1-§22-7` | OBL | WS18-A3 | — | DEP |
| `1-§22-8` | OBL | WS18-A3 | — | DEP |
| `1-§22-9` | OBL | WS18-A3 | — | DEP |
| `1-§22-10` | OBL | WS18-A3 | — | DEP |
| `1-§22-11` | OBL | WS18-A3 | — | DEP |
| `1-§22-12` | OBL | WS18-A3 | — | DEP |
| `1-§22-13` | OBL | WS18-A3 | — | DEP |
| `1-§22-14` | OBL | WS18-A3 | — | DEP |
| `1-§22-15` | NEG | WS18-A3 | — | DEP |
| `1-§23-1` | RULE | WS18-A3 | — | DEP |
| `1-§23-2` | RULE | WS18-A3 | — | DEP |
| `1-§23-3` | RULE | WS18-A3 | — | DEP |
| `1-§23-4` | RULE | WS18-A3 | — | DEP |
| `1-§23-5a` | RULE | WS18-A3 | — | DEP |
| `1-§23-6` | RULE | WS18-A3 | — | DEP |
| `1-§23-7` | RULE | WS18-A3 | — | DEP |
| `1-§23-8` | RULE | WS18-A3 | — | DEP |
| `1-§23-9` | RULE | WS18-A3 | — | DEP |
| `1-§23-10` | RULE | WS18-A3 | WS18-D | DEP |
| `1-§23-11` | RULE | WS18-A3 | — | DEP |
| `1-§23-12` | RULE | WS18-A3 | — | DEP |
| `1-§24-1` | OBL | WS18-A3 | — | DEP |
| `1-§24-2` | OBL | WS18-A3 | — | DEP |
| `1-§24-3` | OBL | WS18-A2 | WS18-A3 | STK-BLOCKED, DEP |
| `1-§24-4` | OBL | WS18-A3 | — | DEP |
| `1-§24-5` | OBL | WS18-P | WS18-A3 | ACT, DEP |
| `1-§24-6` | OBL | WS18-P | WS18-A3 | ACT, DEP |
| `1-§24-7` | OBL | WS18-A3 | — | DEP |
| `1-§24-8` | OBL | WS18-A2 | WS18-A3 | STK-BLOCKED, DEP |
| `1-§24-9` | OBL | WS18-A3 | — | DEP |
| `1-§24-10` | OBL | WS18-A3 | — | DEP |
| `1-§24-11` | OBL | WS18-A3 | — | DEP |
| `1-§24-12` | OBL | WS18-A3 | — | DEP |
| `1-§24-13` | OBL | WS18-A3 | — | DNTF, DEP |
| `1-§24-14` | OBL | WS18-A3 | — | DEP |
| `1-§24-15` | RULE | WS18-A3 | — | DEP |
| `1-§25-1` | PRIN | WS18-A3 | — | DEP |
| `1-§25-2` | PRIN | WS18-A3 | — | DEP |
| `1-§25-3` | PRIN | WS18-P | WS18-A3 | ACT, DEP |
| `1-§25-4` | PRIN | WS18-A3 | — | DEP |
| `1-§25-5` | PRIN | WS18-A3 | — | DEP |
| `1-§25-6` | PRIN | WS18-A3 | — | DEP |
| `1-§25-7` | PRIN | WS18-A3 | — | DEP |
| `1-§25-8` | RULE | WS18-A3 | — | DEP |
| `1-§26-1` | SCN | WS18-V | — | DNTF, DEP |
| `1-§26-2` | SCN | WS18-V | — | DEP |
| `1-§26-3` | SCN | WS18-V | — | DEP |
| `1-§26-4` | SCN | WS18-V | — | DEP |
| `1-§26-5` | SCN | WS18-V | — | DEP |
| `1-§26-6` | SCN | WS18-V | — | DEP |
| `1-§26-7` | SCN | WS18-P | WS18-V | ACT, DEP |
| `1-§26-8` | SCN | WS18-P | WS18-V | ACT, DEP |
| `1-§26-9` | SCN | WS18-V | WS18-D | DEP |
| `1-§26-10` | SCN | WS18-V | — | DEP |
| `1-§26-11` | SCN | WS18-V | — | DTX, DEP |
| `1-§26-12a` | SCN | WS18-V | — | DEP |
| `1-§26-13` | SCN | WS18-V | — | DEP |
| `1-§26-14` | SCN | WS18-V | — | DEP |
| `1-§28-1` | PRIN | WS18-A3 | — | DEP |
| `1-§31-1` | GATE | WS18-V | — | DEP |
| `1-§31-2` | GATE | WS18-V | — | DEP |
| `6-§1-1` | EXP | WS18-B | — | DEP |
| `6-§2-1` | NARR | WS18-B | — | DEP |
| `6-§3-1` | OBL | WS18-B | — | DEP |
| `6-§3-2` | OBL | WS18-B | — | DEP |
| `6-§3-3` | OBL | WS18-B | — | DEP |
| `6-§3-4` | OBL | WS18-B | WS18-D | DEP |
| `6-§3-5` | OBL | WS18-B | — | DEP |
| `6-§3-6` | OBL | WS18-B | — | DLEG, DEP |
| `6-§3-7` | OBL | WS18-B | — | DEP |
| `6-§3-8` | OBL | WS18-B | — | DEP |
| `6-§3-9` | OBL | WS18-B | — | DEP |
| `6-§4-1` | OBL | WS18-B | — | DEP |
| `6-§4-2` | OBL | WS18-B | — | DEP |
| `6-§4-3` | OBL | WS18-B | — | DTX, DEP |
| `6-§4-4` | OBL | WS18-B | — | DEP |
| `6-§4-5` | OBL | WS18-B | — | DEP |
| `6-§4-6` | OBL | WS18-B | — | DEP |
| `6-§4-7` | NEG | WS18-B | — | DEP |
| `6-§5-1` | OBL | WS18-B | — | DEP |
| `6-§5-2` | EX | WS18-B | WS18-D | DC14, DEP |
| `6-§5-3` | RULE | WS18-B | WS18-D | DEP |
| `6-§5-4` | NEG | WS18-B | WS18-D | DEP |
| `6-§5-5` | RULE | WS18-B | WS18-D | DEP |
| `6-§6-1` | OBL | WS18-B | — | DEP |
| `6-§6-2` | RULE | WS18-B | — | DEP |
| `6-§6-3` | NEG | WS18-B | — | DEP |
| `6-§7-1` | RULE | WS18-B | — | DEP |
| `6-§7-2` | OBL | WS18-B | — | DEP |
| `6-§7-3` | OBL | WS18-B | — | DEP |
| `6-§7-4` | OBL | WS18-B | — | DEP |
| `6-§7-5` | OBL | WS18-B | — | DEP |
| `6-§7-6` | OBL | WS18-B | — | DEP |
| `6-§8-1` | PRIN | WS18-B | — | DEP |
| `6-§8-2` | OBL | WS18-B | — | DLEG, DEP |
| `6-§8-3` | NEG | WS18-B | — | DEP |
| `6-§8-4` | NEG | WS18-B | — | DEP |
| `6-§8-5` | NEG | WS18-B | — | DEP |
| `6-§8-6` | NEG | WS18-B | — | DEP |
| `6-§8-7` | OBL | WS18-B | — | DEP |
| `6-§9-1` | OBL | WS18-B | — | DEP |
| `6-§9-2` | OBL | WS18-B | — | DEP |
| `6-§9-3` | OBL | WS18-B | — | DEP |
| `6-§9-4` | OBL | WS18-B | — | DEP |
| `6-§9-5` | OBL | WS18-B | — | DEP |
| `6-§9-6` | OBL | WS18-B | — | DEP |
| `6-§9-7` | NEG | WS18-B | — | DEP |
| `6-§9-8` | NEG | WS18-B | — | DEP |
| `6-§9-9` | NEG | WS18-B | — | DEP |
| `6-§9-10` | NEG | WS18-B | — | DEP |
| `6-§9-11` | NEG | WS18-B | — | DEP |
| `6-§10-1a` | RULE | WS18-B | — | DEP |
| `6-§10-2` | NEG | WS18-B | — | DEP |
| `6-§11-1` | RULE | WS18-B | — | DEP |
| `6-§11-2` | RULE | WS18-B | — | DEP |
| `6-§11-3` | RULE | WS18-B | — | DEP |
| `6-§11-4` | RULE | WS18-B | — | DEP |
| `6-§11-5` | RULE | WS18-B | — | DEP |
| `6-§11-6` | RULE | WS18-B | — | DEP |
| `6-§11-7` | RULE | WS18-B | — | DEP |
| `6-§11-8` | RULE | WS18-B | WS18-D | DEP |
| `6-§11-9` | RULE | WS18-B | — | DEP |
| `6-§12-1` | PRIN | WS18-B | — | DEP |
| `6-§12-2` | PRIN | WS18-B | — | DEP |
| `6-§12-3` | PRIN | WS18-B | — | DEP |
| `6-§12-4` | PRIN | WS18-B | WS18-D | DEP |
| `6-§12-5` | PRIN | WS18-B | — | DEP |
| `6-§12-6` | NEG | WS18-B | WS18-D | DEP |
| `6-§12-7` | NEG | WS18-B | — | DEP |
| `6-§12-8` | RULE | WS18-B | — | DEP |
| `6-§13-1` | OBL | WS18-B | — | DEP |
| `6-§13-2` | OBL | WS18-B | — | DEP |
| `6-§13-3` | OBL | WS18-B | WS18-D | DEP |
| `6-§13-4` | OBL | WS18-B | — | DEP |
| `6-§13-5` | OBL | WS18-B | — | DEP |
| `6-§13-6` | OBL | WS18-B | — | DEP |
| `6-§13-7` | OBL | WS18-B | — | DEP |
| `6-§13-8` | OBL | WS18-B | — | DEP |
| `6-§13-9` | OBL | WS18-B | — | DEP |
| `6-§13-10` | OBL | WS18-B | — | DEP |
| `6-§13-11` | OBL | WS18-B | — | DEP |
| `6-§14-1` | SCN | WS18-V | — | DEP |
| `6-§14-2` | SCN | WS18-V | — | DEP |
| `6-§14-3` | SCN | WS18-V | WS18-D | DEP |
| `6-§14-4` | SCN | WS18-V | — | DEP |
| `6-§14-5` | SCN | WS18-V | — | DEP |
| `6-§14-6` | SCN | WS18-V | — | DEP |
| `6-§14-7` | SCN | WS18-V | — | DEP |
| `6-§14-8` | SCN | WS18-V | — | DEP |
| `6-§14-9` | SCN | WS18-V | — | DEP |
| `6-§14-10` | SCN | WS18-V | — | DEP |
| `6-§17-1` | GATE | WS18-V | — | DEP |
| `S11-L443-1` | OBL | WS18-B | — | DLEG, OFF, DEP |
| `S11-L443-2` | OBL | WS18-B | — | OFF, DEP |
| `S11-L443-3` | OBL | WS18-B | — | DLEG, OFF, DEP |
| `S11-L443-4` | OBL | WS18-B | — | DLEG, OFF, DEP |
| `S11-L443-5` | OBL | WS18-B | — | OFF, DEP |
| `16-§1-1` | EXP | WS18-C | — | DEP |
| `16-§1-2` | EXP | WS18-C | — | DEP |
| `16-§2-1` | NARR | WS18-C | — | DEP |
| `16-§2-2` | NARR | WS18-C | — | DEP |
| `16-§2-3` | NARR | WS18-C | — | DEP |
| `16-§2-4` | NARR | WS18-C | — | DEP |
| `16-§2-5` | NARR | WS18-C | — | DEP |
| `16-§2-6` | NARR | WS18-C | — | DEP |
| `16-§3-1` | PRIN | WS18-C | — | DEP |
| `16-§3-2` | PRIN | WS18-C | — | DEP |
| `16-§3-3` | PRIN | WS18-C | — | DEP |
| `16-§3-4` | PRIN | WS18-C | — | DEP |
| `16-§3-5` | PRIN | WS18-C | — | DEP |
| `16-§3-6` | NEG | WS18-C | — | DEP |
| `16-§3-7` | PRIN | WS18-C | — | DEP |
| `16-§4-1` | OBL | WS18-C | — | DEP |
| `16-§4-2` | OBL | WS18-C | — | DEP |
| `16-§4-3` | OBL | WS18-C | — | DEP |
| `16-§4-4` | OBL | WS18-C | — | DEP |
| `16-§4-5` | OBL | WS18-C | — | DEP |
| `16-§4-6` | OBL | WS18-C | — | DEP |
| `16-§4-7` | OBL | WS18-C | — | DEP |
| `16-§4-8` | OBL | WS18-C | — | DEP |
| `16-§4-9` | OBL | WS18-C | — | DEP |
| `16-§4-10` | OBL | WS18-C | — | DEP |
| `16-§4-11` | OBL | WS18-C | — | DEP |
| `16-§4-12` | OBL | WS18-C | — | DEP |
| `16-§4-13` | OBL | WS18-C | — | DEP |
| `16-§4-14` | RULE | WS18-C | — | DEP |
| `16-§5-1` | OBL | WS18-C | — | DEP |
| `16-§5-2` | OBL | WS18-C | — | DEP |
| `16-§5-3` | OBL | WS18-C | — | DEP |
| `16-§5-4` | OBL | WS18-C | — | DEP |
| `16-§5-5a` | OBL | WS18-C | — | DEP |
| `16-§5-6` | RULE | WS18-C | — | DEP |
| `16-§5-7` | NEG | WS18-C | — | DEP |
| `16-§6-1` | OBL | WS18-C | — | DEP |
| `16-§6-2` | OBL | WS18-C | — | DEP |
| `16-§6-3` | OBL | WS18-C | — | DEP |
| `16-§6-4` | OBL | WS18-C | — | DEP |
| `16-§6-5` | OBL | WS18-C | — | DEP |
| `16-§6-6` | OBL | WS18-C | — | DEP |
| `16-§6-7` | NEG | WS18-C | — | DEP |
| `16-§7-1` | RULE | WS18-C | — | DEP |
| `16-§7-2` | OBL | WS18-C | — | DEP |
| `16-§7-3` | RULE | WS18-C | — | DEP |
| `16-§7-4` | OBL | WS18-C | — | DEP |
| `16-§7-5` | OBL | WS18-C | — | DEP |
| `16-§7-6` | OBL | WS18-C | — | DEP |
| `16-§7-7` | OBL | WS18-C | — | DEP |
| `16-§7-8` | OBL | WS18-C | — | DEP |
| `16-§8-1` | OBL | WS18-C | — | DEP |
| `16-§8-2` | OBL | WS18-C | — | DEP |
| `16-§8-3` | OBL | WS18-C | — | DEP |
| `16-§8-4` | OBL | WS18-C | — | DEP |
| `16-§8-5` | OBL | WS18-C | — | DEP |
| `16-§8-6` | OBL | WS18-C | — | DEP |
| `16-§8-7` | OBL | WS18-C | — | DEP |
| `16-§8-8` | OBL | WS18-C | — | DEP |
| `16-§8-9` | OBL | WS18-C | — | DEP |
| `16-§8-10` | OBL | WS18-C | — | DEP |
| `16-§8-11` | NEG | WS18-C | — | DEP |
| `16-§9-1` | RULE | WS18-C | — | DEP |
| `16-§9-2` | OBL | WS18-C | — | DEP |
| `16-§10-1` | OBL | WS18-C | — | DEP |
| `16-§10-2` | OBL | WS18-C | — | PQ14, DEP |
| `16-§10-3` | NEG | WS18-C | — | PQ14, DEP |
| `16-§10-4` | NEG | WS18-C | — | DEP |
| `16-§11-1` | OBL | WS18-C | — | DEP |
| `16-§11-2` | OBL | WS18-C | — | PQ14, DEP |
| `16-§11-3` | OBL | WS18-C | — | PQ14, DEP |
| `16-§11-4` | OBL | WS18-C | — | DEP |
| `16-§11-5` | OBL | WS18-C | — | DEP |
| `16-§11-6a` | RULE | WS18-C | — | DEP |
| `16-§11-7` | NEG | WS18-C | — | DEP |
| `16-§12-1` | OBL | WS18-C | — | DEP |
| `16-§12-2` | RULE | WS18-C | — | DEP |
| `16-§13-1` | CONS | WS18-C | — | DEP |
| `16-§13-2` | CONS | WS18-C | — | PQ14, DEP |
| `16-§13-3` | CONS | WS18-C | — | DEP |
| `16-§13-4` | NEG | WS18-C | — | DEP |
| `16-§14-1` | RULE | WS18-C | — | DEP |
| `16-§14-2` | OBL | WS18-C | — | DEP |
| `16-§14-3` | OBL | WS18-C | — | DEP |
| `16-§14-4` | OBL | WS18-C | — | DEP |
| `16-§14-5` | OBL | WS18-C | — | DEP |
| `16-§14-6` | NEG | WS18-C | — | DEP |
| `16-§15-1` | OBL | WS18-C | — | DEP |
| `16-§15-2` | OBL | WS18-C | — | DEP |
| `16-§15-3` | OBL | WS18-C | — | DEP |
| `16-§15-4` | OBL | WS18-C | — | DEP |
| `16-§15-5` | OBL | WS18-C | — | DEP |
| `16-§15-6` | OBL | WS18-C | — | DEP |
| `16-§15-7` | NEG | WS18-C | — | DEP |
| `16-§15-8` | NEG | WS18-C | — | DEP |
| `16-§15-9` | NEG | WS18-C | — | DEP |
| `16-§15-10` | NEG | WS18-C | — | DEP |
| `16-§15-11` | NEG | WS18-C | — | DEP |
| `16-§16-1` | OBL | WS18-C | — | DEP |
| `16-§16-2` | OBL | WS18-C | — | DEP |
| `16-§16-3` | OBL | WS18-C | — | DEP |
| `16-§16-4` | OBL | WS18-C | — | DEP |
| `16-§16-5` | OBL | WS18-C | — | DEP |
| `16-§16-6` | OBL | WS18-C | — | DEP |
| `16-§16-7` | OBL | WS18-C | — | DEP |
| `16-§16-8` | OBL | WS18-C | — | DEP |
| `16-§16-9` | OBL | WS18-C | — | DEP |
| `16-§16-10` | OBL | WS18-C | — | DEP |
| `16-§16-11` | RULE | WS18-C | — | DEP |
| `16-§17-1` | PRIN | WS18-C | — | DEP |
| `16-§17-2` | PRIN | WS18-C | — | DEP |
| `16-§17-3` | PRIN | WS18-C | — | PQ14, DEP |
| `16-§17-4` | PRIN | WS18-C | — | DEP |
| `16-§17-5` | PRIN | WS18-C | — | DEP |
| `16-§17-6` | RULE | WS18-C | — | DEP |
| `16-§17-7` | NEG | WS18-C | — | DEP |
| `16-§18-1` | RULE | WS18-C | — | DEP |
| `16-§18-2` | RULE | WS18-C | — | DEP |
| `16-§18-3` | RULE | WS18-C | — | DEP |
| `16-§18-4` | RULE | WS18-C | — | DEP |
| `16-§18-5` | RULE | WS18-C | — | DEP |
| `16-§18-6` | RULE | WS18-C | — | DEP |
| `16-§18-7` | RULE | WS18-C | — | DEP |
| `16-§18-8` | RULE | WS18-C | — | DEP |
| `16-§18-9` | RULE | WS18-C | — | DEP |
| `16-§18-10` | NEG | WS18-C | — | DEP |
| `16-§20-1` | SCN | WS18-V | — | DEP |
| `16-§20-2` | SCN | WS18-V | — | DEP |
| `16-§20-3` | SCN | WS18-V | — | DEP |
| `16-§20-4` | SCN | WS18-V | — | DEP |
| `16-§20-5` | SCN | WS18-V | — | DEP |
| `16-§20-6` | SCN | WS18-V | — | PQ14, DEP |
| `16-§20-7a` | SCN | WS18-V | — | PQ14, DEP |
| `16-§20-8` | SCN | WS18-V | — | DEP |
| `16-§20-9` | SCN | WS18-V | — | DEP |
| `16-§20-10` | SCN | WS18-V | — | DEP |
| `16-§21-1` | PRIN | WS18-C | — | DEP |
| `16-§23-1` | GATE | WS18-V | — | DEP |
| `22-§16-1` | RULE | WS18-D | — | DEP |
| `22-§16-2` | NEG | WS18-D | — | DEP |
| `22-§16-3` | OBL | WS18-D | — | DEP |
| `22-§16-4` | OBL | WS18-D | — | DEP |
| `22-§16-5` | OBL | WS18-D | — | DEP |
| `22-§16-6` | OBL | WS18-D | — | DLEG, DEP |
| `22-§16-7` | OBL | WS18-D | — | DEP |
| `22-§16-8` | OBL | WS18-D | — | DEP |
| `22-§16-9` | OBL | WS18-D | — | DEP |
| `22-§16-10` | OBL | WS18-D | — | DEP |
| `22-§16-11` | RULE | WS18-D | — | DEP |
| `22-§29-9` | SCN | WS18-D | WS18-V | DEP |
| `17-§4-15` | OBL | WS18-E | — | DEP |
| `17-§9-1` | OBL | WS18-E | — | DEP |
| `17-§9-2` | OBL | WS18-E | — | DEP |
| `17-§9-3` | OBL | WS18-E | — | DEP |
| `17-§9-4` | OBL | WS18-E | — | DEP |
| `17-§9-5` | OBL | WS18-E | — | DEP |
| `17-§9-6` | OBL | WS18-E | — | DEP |
| `17-§9-7` | NEG | WS18-E | — | DEP |
| `17-§10-1` | OBL | WS18-E | — | DEP |
| `17-§10-2` | OBL | WS18-E | — | DEP |
| `17-§10-3` | OBL | WS18-E | — | DEP |
| `17-§10-4` | OBL | WS18-E | — | DEP |
| `17-§10-5` | CONS | WS18-E | — | DEP |
| `17-§10-6` | OBL | WS18-E | — | DEP |
| `17-§10-7` | NEG | WS18-E | — | DEP |
| `24-§18-4` | SCN | WS18-B | WS18-V | DEP |
| `24-§21-6` | OBL | WS18-B | — | DEP |
| `9-§12-7` | RULE | WS18-B | — | DEP |
| `9-§12-9` | RULE | WS18-A1 | — | DEP |
| `9-§12-12` | RULE | WS18-C | — | DEP |
| `10-§13-5` | OBL | WS18-A1 | — | DEP |
| `10-§13-7` | OBL | WS18-B | — | DEP |
| `12-§4-4` | OBL | WS18-A1 | — | DEP |
| `12-§7-7` | OBL | WS18-A1 | — | DEP |
| `3-§9-3` | OBL | WS18-A1 | — | DEP |
| `3-§11-6` | OBL | WS18-A1 | — | DEP |
| `3-§15-7` | RULE | WS18-A1 | — | DEP |
| `3-§15-12` | RULE | WS18-A3 | — | DTX, DEP |
| `3-§15-13` | RULE | WS18-B | — | DEP |
| `5-§4-11` | OBL | WS18-B | — | DEP |
| `5-§4-12` | OBL | WS18-A1 | — | DEP |
| `5-§4-13` | OBL | WS18-C | — | DEP |
| `5-§6-10` | OBL | WS18-A3 | — | DEP |
| `5-§6-12` | OBL | WS18-C | — | DEP |
| `5-§7-5` | SCN | WS18-B | WS18-V | DEP |
| `5-§7-6` | SCN | WS18-A1 | WS18-V | DEP |
| `5-§7-7` | SCN | WS18-C | WS18-V | DEP |
| `BP-§10.3-S2` | OBL | WS18-A1 | — | DEP |
| `BP-§5.5-p1` | RULE | WS18-V | — | DEP |
| `BP-§5.5-p2` | RULE | WS18-V | — | DEP |
| `BP-§10.7-W` | RULE | WS18-V | — | DEP |
| `BP-§10.7-A1` | WORK | WS18-A1 | — | DEP |
| `BP-§10.7-A2` | WORK | WS18-A1 | — | DEP |
| `BP-§10.7-A3` | WORK | WS18-A2 | WS18-A1 | STK-BLOCKED, DEP |
| `BP-§10.7-A4` | WORK | WS18-A2 | WS18-A1 | STK-BLOCKED, DEP |
| `BP-§10.7-A5` | WORK | WS18-A3 | — | DEP |
| `BP-§10.7-A6` | WORK | WS18-P | WS18-A3 | ACT, DEP |
| `BP-§10.7-A7` | WORK | WS18-A3 | — | DEP |
| `BP-§10.7-A8` | NEG | WS18-D | — | DEP |
| `BP-§10.7-A9` | NEG | WS18-A3 | — | DEP |
| `BP-§10.7-A10` | WORK | WS18-A3 | — | DEP |
| `BP-§10.7-A11` | NEG | WS18-A1 | — | DEP |
| `BP-§10.7-AS1` | FRV | WS18-V | — | DEP |
| `BP-§10.7-B1` | WORK | WS18-B | — | DEP |
| `BP-§10.7-B2` | WORK | WS18-B | — | DEP |
| `BP-§10.7-B3` | WORK | WS18-B | — | DEP |
| `BP-§10.7-B4` | NEG | WS18-D | — | DEP |
| `BP-§10.7-B5` | WORK | WS18-B | — | DEP |
| `BP-§10.7-B6` | WORK | WS18-B | — | DEP |
| `BP-§10.7-B7` | NEG | WS18-B | — | DEP |
| `BP-§10.7-B8` | NEG | WS18-B | — | DEP |
| `BP-§10.7-BS1` | FRV | WS18-V | — | DEP |
| `BP-§10.7-C1` | WORK | WS18-C | — | DEP |
| `BP-§10.7-C2` | WORK | WS18-C | — | DEP |
| `BP-§10.7-C3` | WORK | WS18-C | — | DEP |
| `BP-§10.7-C4` | WORK | WS18-C | — | DEP |
| `BP-§10.7-C5` | WORK | WS18-C | — | DEP |
| `BP-§10.7-CS1` | FRV | WS18-V | — | DEP |
| `BP-§10.7-X` | EXP | WS18-V | — | DEP |
| `BP-§11-p1` | RULE | WS18-V | — | DEP |
| `BP-§11-b1` | RULE | WS18-V | — | DEP |
| `BP-§11-b2` | RULE | WS18-V | — | DEP |
| `BP-§11-b3` | RULE | WS18-V | — | DEP |
| `BP-§11-b4` | RULE | WS18-V | — | DEP |
| `BP-§11-b5` | RULE | WS18-V | — | DEP |
| `BP-§11-b6` | RULE | WS18-V | — | DEP |
| `BP-§11-b7` | RULE | WS18-V | — | DEP |
| `BP-§11-b9` | RULE | WS18-V | — | DEP |
| `BP-§11-p3` | RULE | WS18-V | — | DEP |
| `BP-§11-p4` | RULE | WS18-V | — | DEP |
| `BP-§11-p5` | RULE | WS18-V | — | DEP |
| `BP-§13-p1` | RULE | WS18-V | — | DEP |
| `BP-§13-T` | RULE | WS18-V | — | DEP |
| `BP-§13-b1` | RULE | WS18-V | — | DEP |
| `BP-§13-b2` | RULE | WS18-V | — | DEP |
| `BP-§13-b3` | RULE | WS18-V | — | DEP |
| `BP-§13-b4` | RULE | WS18-V | — | DEP |
| `BP-§13-b5` | RULE | WS18-V | — | DEP |
| `BP-§13-b6` | RULE | WS18-V | — | DEP |
| `BP-§13-b7` | RULE | WS18-V | — | DEP |
| `BP-§13-b8` | RULE | WS18-V | — | DEP |
| `BP-§13-b9` | RULE | WS18-V | — | DEP |
| `BP-§13-b10` | RULE | WS18-V | — | DEP |
| `BP-§15-p2` | RULE | WS18-V | — | DEP |
| `BP-§15-p3` | RULE | WS18-V | — | DEP |
| `BP-§16-p2` | RULE | WS18-V | — | DEP |
| `GPCV-R1` | CONS | WS18-V | — | DEP |
| `GPCV-R6` | CONS | WS18-V | — | DEP |
| `GPCV-R16` | CONS | WS18-V | — | DEP |
| `GPCV-§8-3` | RULE | WS18-B | — | DEP |
| `GPCV-§8-4` | RULE | WS18-V | — | DEP |
| `GPCV-§8-5` | RULE | WS18-A1 | — | DEP |

## 8. Workstream Row Counts

| Workstream | Primary rows | Contributing rows |
|---|---:|---:|
| WS18-A1 | 104 | 18 |
| WS18-A2 | 12 | 0 |
| WS18-A3 | 100 | 16 |
| WS18-P | 24 | 0 |
| WS18-B | 100 | 0 |
| WS18-C | 136 | 0 |
| WS18-D | 27 | 13 |
| WS18-E | 15 | 0 |
| WS18-V | 74 | 7 |
| **Total primary** | **592** | — |

## 9. Status

`DRAFT — MISSION CONTROL REVIEW REQUIRED — NO IMPLEMENTATION AUTHORIZATION`. Stage 12 draft for MC41 Stage 13 review. Workstreams are proposals; no builder is appointed and no execution access is granted. No implementation, code, SQL, migration, grant, provider activation, deployment or test execution is authorized or has occurred. Stage 13 package lock and the Implementation Authorization are separate later decisions.
