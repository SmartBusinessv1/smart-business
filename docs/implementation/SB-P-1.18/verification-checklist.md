# SB-P-1.18 — Verification Checklist

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
| Document | Verification Checklist |
| Lifecycle stage | Source 18 v1.3 Stage 12 — Initial Implementation Package |
| Status | `DRAFT — MISSION CONTROL REVIEW REQUIRED — NO IMPLEMENTATION AUTHORIZATION` |
| Package version | 0.1-D (draft; no lock before Stage 13) |
| Author | Claude Code (also the SB-P-1.18 Stage 2 to 9 author and the EIS author; not independent review) |
| Companion documents | `engineering-contract.md`, `lovable-build-prompt.md`, `verification-checklist.md` in `docs/implementation/SB-P-1.18/` |

## 2. How to Use This Checklist

Every `IN SCOPE` row has one row-keyed item (`VC18-###`, Section 9) with its planned evidence class, verifier and named checks. Named negative-path checks are in Section 4, experience scenarios in Section 5. **Every item is `PLANNED — NOT RUN`.** Nothing here has been executed, and absence of failure is never `PASS`. CI is a configured-checks signal only, never acceptance evidence; a row is accepted only on runtime evidence (B6-24). The locked EIS Section 16 is the source of the 44 named negative tests and the positive scenarios.

## 3. Evidence Classes and Verifiers

| Class | Meaning |
|---|---|
| `RT` | Functional runtime test (integration), plus human runtime evidence where user-visible (`EIS18-VER-02`) |
| `NEG` | Named negative or denial test (`EIS18-VER-03`) |
| `IDEM` | Duplicate, retry, concurrent-delivery and lost-response test (`EIS18-VER-05`) |
| `INSP` | Design inspection against the locked EIS (`EIS18-VER-04`) |
| `EXP` | Experience and language review in a named runtime scenario (`EIS18-VER-06`) |
| `FRV-A, FRV-B, FRV-C` | Founder-reserved Build Plan §10.7 scenarios (`EIS18-ACC-04`) |
| `GATE` | Completion accounting |
| `REG` | Regression or no-change check citing earlier evidence (used only for `ALREADY DEMONSTRATED` rows and existing regression suites) |

| Verifier | Role |
|---|---|
| `B` | Authorized builder: automated test at the named class, in the authorized test environment |
| `H` | Stage 17 human runtime verifier |
| `H-L` | Human language reviewer: neutral wording and English, Malayalam and Manglish review (`EIS18-VER-06`) |
| `F` | Founder (Founder-reserved scenario; Founder Runtime Verification) |
| `MC` | Mission Control design or document inspection |
| `S-01` | SA-01 / SB-P-1.12 security owner and Supabase specialist: RLS, grants, executors, effective privileges |
| `S-02` | SA-02 privacy specialist: location and staff data |
| `S-03` | SA-03 Finance & Payments / Stock Integrity specialist |
| `L` | Qualified India and Kerala legal or privacy reviewer (`DLEG`) |
| `I` | Stage 19 independent verifier (every row) |

## 4. Named Negative-Path Checks

### 4.1 The 44 EIS negative tests (preserved)

Identifiers, areas and row references are unchanged from the locked EIS Section 16.2. Rows column: the locked EIS reference.

| ID | Area | Rows (EIS) | Rows mapped here | Status |
|---|---|---|---:|---|
| `NT-FIN-01` | Owner finances | `1-§5-14`, `1-§25-6`, `6-§4-7`, `6-§9-10` | 8 | PLANNED — NOT RUN |
| `NT-ROLE-01` | Role | `kind:NEG`; B6-03 | 322 | PLANNED — NOT RUN |
| `NT-EMP-01` | Own record | `BP-§10.7-B3`, `6-§14-7`, `S11-L443-4`, `17-§9-7` | 10 | PLANNED — NOT RUN |
| `NT-RLS-01` | RLS | M18-1 to M18-8 | 456 | PLANNED — NOT RUN |
| `NT-RLS-02` | Default grants | M18-1 to M18-8 | 456 | PLANNED — NOT RUN |
| `NT-RLS-03` | Definers | M18-1 to M18-8 | 456 | PLANNED — NOT RUN |
| `NT-BIZ-01` | Cross-business | `1-§26-13`, `6-§14-10`, `16-§17-2` | 280 | PLANNED — NOT RUN |
| `NT-ASG-01` | Assignment | `1-§25-3`, `1-§24-6`, `1-§26-7`, `1-§26-8` | 28 | PLANNED — NOT RUN |
| `NT-ASG-02` | Assignment | `1-§12-*`, `1-§24-7` | 10 | PLANNED — NOT RUN |
| `NT-STK-01` | Stock replay | 13 B6-05 rows | 10 | PLANNED — NOT RUN |
| `NT-STK-02` | Return | `1-§24-8`, `1-§10-*` | 11 | PLANNED — NOT RUN |
| `NT-STK-03` | Override | `1-§10-9`, `1-§24-3` | 2 | PLANNED — NOT RUN |
| `NT-COD-01` | COD replay | `1-§16-5`, `1-§16-6`, `1-§26-14` | 15 | PLANNED — NOT RUN |
| `NT-PRV-01` | Coordinates | `DLOC` rows; EQ18-07 | 43 | PLANNED — NOT RUN |
| `NT-PRV-02` | Retention | `22-§16-6`, `1-§14-12`, `1-§22-11`; EQ18-06 | 6 | PLANNED — NOT RUN |
| `NT-PRV-03` | Surveillance | `1-§14-5` to `-7`, `22-§16-2` | 6 | PLANNED — NOT RUN |
| `NT-ATT-01` | Attendance | `6-§13-3`, `6-§9-7`, `6-§8-3` to `-5` | 9 | PLANNED — NOT RUN |
| `NT-PAY-01` | Payroll | `6-§8-*`, `17-§9-5` | 11 | PLANNED — NOT RUN |
| `NT-OVT-01` | Reviewer | `S11-L443-2` | 5 | PLANNED — NOT RUN |
| `NT-OVT-02` | Approval and association | `S11-L443-1` | 1 | PLANNED — NOT RUN |
| `NT-OVT-03` | Direction and content | `S11-L443-1` | 1 | PLANNED — NOT RUN |
| `NT-OVT-04` | Employee visibility | `S11-L443-4` | 5 | PLANNED — NOT RUN |
| `NT-OVT-05` | Enablement | `S11-L443-1`, `S11-L443-3` | 3 | PLANNED — NOT RUN |
| `NT-OVT-06` | Duplicates | `S11-L443-1`, `S11-L443-5` | 3 | PLANNED — NOT RUN |
| `NT-OVT-07` | Evidence change | `S11-L443-1`, `S11-L443-3`, `S11-L443-5` | 3 | PLANNED — NOT RUN |
| `NT-OVT-08` | Initiation authority | `S11-L443-1` | 1 | PLANNED — NOT RUN |
| `NT-OVT-10` | Internal derivation (D1) | `S11-L443-1`, `S11-L443-5` | 2 | PLANNED — NOT RUN |
| `NT-OVT-11` | Capture association (D2) | `S11-L443-1` | 1 | PLANNED — NOT RUN |
| `NT-OVT-12` | Owner opt-in (D3) | `S11-L443-1` | 3 | PLANNED — NOT RUN |
| `NT-OVT-09` | Flag read scope | `S11-L443-1`, `S11-L443-4` | 2 | PLANNED — NOT RUN |
| `NT-SET-01` | Membership set reads (A-1) | Section 9.1 readers | 28 | PLANNED — NOT RUN |
| `NT-HR-01` | Own staff record (A-6) | `6-§4-3` to `-7` | 10 | PLANNED — NOT RUN |
| `NT-CAB-01` | Compliance documents (A-3) | `16-§10-1` to `-4`, `16-§17-3` | 15 | PLANNED — NOT RUN |
| `NT-OVT-13` | Platform readiness and withdrawal (A-5) | `S11-L443-1` | 3 | PLANNED — NOT RUN |
| `NT-STK-04` | Non-Owner stock writes (A-7) | `EIS18-STK-04` rows | 12 | PLANNED — NOT RUN |
| `NT-CMP-01` | Compliance | `16-§15-*`, `16-§8-11`, `16-§20-5` | 33 | PLANNED — NOT RUN |
| `NT-NTF-01` | Notification | `1-§17-4`; SB-P-1.15 NN-06 to NN-08, NN-12, NN-16 | 10 | PLANNED — NOT RUN |
| `NT-FRL-01` | First run (consumed) | Consumed from SB-P-1.12 | 19 | PLANNED — NOT RUN |
| `NT-EXT-01` | First run | 19 `DI` rows | 24 | PLANNED — NOT RUN |
| `NT-EXT-02` | Assignment and capability | `1-§12-3`, `1-§24-5`, `1-§24-6`, `1-§26-7` | 24 | PLANNED — NOT RUN |
| `NT-EXT-03` | Authority path (F-OVL) | Five legs; `1-§5-21` | 24 | PLANNED — NOT RUN |
| `NT-EXT-04` | No enumeration, no Owner data | `1-§5-22`, `1-§25-3`, `1-§26-8`, `BP-§10.7-A6` | 23 | PLANNED — NOT RUN |
| `NT-EXT-05` | Invitation surfaces | 19 `DI` rows | 24 | PLANNED — NOT RUN |
| `NT-EXT-06` | Notification | `1-§17-4`; SB-P-1.15 NN-01 to NN-05, NN-09 to NN-11, NN-13 to NN-15 | 24 | PLANNED — NOT RUN |

### 4.2 Additional named negative-path checks

Checklist items for permission, isolation, revocation, denial, audit and rollback requirements that no EIS 16.2 test names directly. They add no requirement and are not new `NT-` identifiers.

| ID | Class | Requirement | Required result | Rows mapped | Status |
|---|---|---|---|---:|---|
| `VN18-01` | Denial | `EIS18-ERR-01` | Every denial and outcome code is calm, non-leaking and non-accusing; a denied target is indistinguishable from a non-existent one; message text is never parsed as authority | 101 | PLANNED — NOT RUN |
| `VN18-02` | Audit | `EIS18-AUD-01` | Each consequential command and each security-relevant denial writes its audit and provenance in the same transaction; a rolled-back command leaves no audit claiming success; actor is never an executor or AI | 6 | PLANNED — NOT RUN |
| `VN18-03` | Revocation | `EIS18-SEC-01` | A grant, membership, binding or assignment revoked between preview and commit stops the commit (`EIS-CNF-02`); a stale confirmation binding is refused; access ends at the next evaluation | 280 | PLANNED — NOT RUN |
| `VN18-04` | Denial | `EIS18-ORD-04` | Confirmation is refused while a material ambiguity is open (`ORD_AMBIGUITY_OPEN`); no guessed or defaulted fact is confirmed | 8 | PLANNED — NOT RUN |
| `VN18-05` | Denial | `EIS18-AVL-02` | A change approval bound to a superseded order version is refused (`ORD_VERSION_STALE`); an unapproved material change cannot reach confirmation (`ORD_CHANGE_UNAPPROVED`) | 10 | PLANNED — NOT RUN |
| `VN18-06` | Permission | `EIS18-CUS-06` | No customer principal exists in Phase 1: a customer-originated message cannot confirm, approve or change an order except as a merchant-recorded event by an authorized user | 5 | PLANNED — NOT RUN |
| `VN18-07` | Denial | `EIS18-CUS-04` | A STOP state blocks the send guard for that purpose; recording consent sends nothing | 6 | PLANNED — NOT RUN |
| `VN18-08` | Denial | `EIS18-DLV-01` | An illegal order-state transition, or a transition on a stale version, is refused (`ORD_STATE_CONFLICT`) with no partial effect | 7 | PLANNED — NOT RUN |
| `VN18-09` | Denial | `EIS18-PRF-01` | Delivery completion without a configured positive proof is refused (`PROOF_INSUFFICIENT`); customer silence never fails or rolls back a delivery (`EIS18-PRF-04`) | 11 | PLANNED — NOT RUN |
| `VN18-10` | Denial | `EIS18-PRF-03` | No `photo`, `signature` or `otp` proof value, media reference or OTP send exists or can be recorded while R2 is not adopted | 1 | PLANNED — NOT RUN |
| `VN18-11` | Permission | `EIS18-OFD-03` | AI and typed tools cannot confirm, approve, assign, override, review or create authority; must-nots hold server-side whatever the prompt (`EIS18-OFD-03`, `-HAI-02`) | 9 | PLANNED — NOT RUN |
| `VN18-12` | Isolation | `EIS18-OFD-07` | Support reaches order, staff or compliance data only through `EIS-SUP-01`; no routine browsing; minimum-necessary projections only (`EIS18-OFD-07`, `-HPR-01`, `-CPR-01`) | 24 | PLANNED — NOT RUN |
| `VN18-13` | Audit | `EIS18-CTX-01` | An attendance correction, leave or absence never edits the original event; corrections keep provenance; an Employee requests only for their own linked record | 11 | PLANNED — NOT RUN |
| `VN18-14` | Permission | `EIS18-LOC-03` | Location results are visible only to the purpose-bound viewer; unrelated roles are denied; raw coordinates are never shown | 6 | PLANNED — NOT RUN |
| `VN18-15` | Permission | `EIS18-VW-01` | Workspace cards render only for the permitted role with the add-on entitled; without entitlement or capability, no card, count or data leaks (`EIS18-VW-01`, `-VW-02`, `DENT`) | 14 | PLANNED — NOT RUN |
| `VN18-16` | Rollback | `EIS18-MIG-03` | Each M18 class keeps its stated pre-data rollback boundary; after data, only forward-fix; no historical movement, transaction or document is reinterpreted (`EIS18-MIG-02`) | 303 | PLANNED — NOT RUN |
| `VN18-17` | Rollback | `EIS18-MIG-04` | No migration is written or executed without an explicit migration mission, a freshly verified test project and separate authorization (`docs/migration/README.md`) | 294 | PLANNED — NOT RUN |
| `VN18-18` | Denial | `EIS18-STK-02` | Combined cap and archived item: committed corrections plus confirmed returns plus the request above the original packed decrease is refused (`RET_EXCEEDS_PACKED`); a return into an archived item fails closed with a recorded denial and no effect, and replay returns that denial | 4 | PLANNED — NOT RUN |
| `VN18-19` | Isolation | `EIS18-STK-01` | Common Kernel-first lock order and provenance: no binding-last path; packing and return records carry immutable verified-person, decision, grant, epoch, binding, key and outcome provenance, never caller-supplied; no direct inventory DML and no second writer | 12 | PLANNED — NOT RUN |
| `VN18-20` | Permission | `EIS18-CMP-03` | A reminder is never created from an unconfirmed date (`CMP_DATE_UNCONFIRMED`); several plausible dates force clarification; a renewal is never completed by a due occurrence (`REN_NOT_CONFIRMED`) | 27 | PLANNED — NOT RUN |
| `VN18-21` | Denial | `EIS18-HEX-01` | Duplicate check-in or check-out is idempotent (`ATT_DUPLICATE`); an expired QR token is refused (`ATT_QR_EXPIRED`); a disputed event is a review item, never an accusation | 11 | PLANNED — NOT RUN |
| `VN18-23` | Rollback | `EIS18-IDM-01` | Same-key replay returns the one committed outcome without re-execution; the same key with a different payload is refused; an unknown commit outcome is looked up by key before any retry, never guessed; a transaction abort leaves no partial effect | 14 | PLANNED — NOT RUN |
| `VN18-22` | Isolation | `EIS18-ROS-01` | Roster import confirms per row under revocation; a row for another business or an ambiguous employee is never applied (`HR_AMBIGUOUS_EMPLOYEE`) | 6 | PLANNED — NOT RUN |

### 4.3 Requirement coverage by negative-path class

| Class | Requirement | Named checks |
|---|---|---|
| Permission | `EIS18-OAU-01` | `NT-ROLE-01` |
| Permission | `EIS18-OAU-02` | `NT-ROLE-01`, `NT-ASG-01` |
| Permission | `EIS18-CAP-01` | `NT-ROLE-01` |
| Permission | `EIS18-HR-02` | `NT-ROLE-01` |
| Permission | `EIS18-HR-03` | `NT-EMP-01`, `NT-HR-01` |
| Permission | `EIS18-CUS-06` | `VN18-06` |
| Permission | `EIS18-STK-03` | `NT-STK-03`, `NT-STK-04` |
| Permission | `EIS18-STK-04` | `NT-STK-04`, `VN18-19` |
| Permission | `EIS18-OVT-03` | `NT-OVT-01` |
| Permission | `EIS18-OVT-05` | `NT-OVT-04`, `NT-OVT-09` |
| Permission | `EIS18-CAU-01` | `NT-CAB-01` |
| Permission | `EIS18-LOC-03` | `VN18-14` |
| Permission | `EIS18-VW-01` | `VN18-15` |
| Permission | `EIS18-VW-02` | `VN18-15` |
| Permission | `EIS18-OFD-03` | `VN18-11` |
| Permission | `EIS18-HAI-02` | `VN18-11` |
| Permission | `EIS18-EXT-03` | `NT-EXT-02` |
| Permission | `EIS18-EXT-04` | `NT-EXT-02`, `NT-EXT-04` |
| Permission | `EIS18-EXT-07` | `NT-EXT-03` |
| Permission | `EIS18-CMP-03` | `VN18-20` |
| Isolation | `EIS18-SEC-01` | `NT-BIZ-01`, `VN18-03` |
| Isolation | `EIS18-SEC-02` | `NT-RLS-01`, `NT-RLS-02`, `NT-RLS-03` |
| Isolation | `EIS18-SEC-03` | `NT-FIN-01` |
| Isolation | `EIS18-RDR-01` | `NT-SET-01` |
| Isolation | `EIS18-NEG-01` | `NT-ROLE-01` |
| Isolation | `EIS18-OFD-07` | `VN18-12` |
| Isolation | `EIS18-HPR-01` | `VN18-12` |
| Isolation | `EIS18-CPR-01` | `VN18-12` |
| Isolation | `EIS18-HR-01` | `NT-HR-01` |
| Isolation | `EIS18-CAB-01` | `NT-CAB-01` |
| Isolation | `EIS18-CAB-02` | `NT-CAB-01` |
| Isolation | `EIS18-HLD-PQ14` | `NT-CAB-01`, `NT-SET-01` |
| Isolation | `EIS18-LOC-05` | `NT-PRV-01` |
| Isolation | `EIS18-STK-01` | `NT-STK-01`, `NT-STK-04`, `VN18-19` |
| Isolation | `EIS18-ROS-01` | `VN18-22` |
| Revocation | `EIS18-SEC-01` | `NT-BIZ-01`, `VN18-03` |
| Revocation | `EIS18-DLV-02` | `NT-ASG-02` |
| Revocation | `EIS18-DLV-03` | `NT-ASG-01` |
| Revocation | `EIS18-EXT-04` | `NT-EXT-02`, `NT-EXT-04` |
| Revocation | `EIS18-EXT-07` | `NT-EXT-03` |
| Revocation | `EIS18-OVT-04` | `NT-OVT-05`, `NT-OVT-06`, `NT-OVT-07`, `NT-OVT-12`, `NT-OVT-13` |
| Denial | `EIS18-ERR-01` | `VN18-01` |
| Denial | `EIS18-ORD-04` | `VN18-04` |
| Denial | `EIS18-AVL-02` | `VN18-05` |
| Denial | `EIS18-CUS-04` | `VN18-07` |
| Denial | `EIS18-DLV-01` | `VN18-08` |
| Denial | `EIS18-PRF-01` | `VN18-09` |
| Denial | `EIS18-PRF-03` | `VN18-10` |
| Denial | `EIS18-PRF-04` | `VN18-09` |
| Denial | `EIS18-STK-02` | `NT-STK-02`, `NT-STK-04`, `VN18-18`, `VN18-19` |
| Denial | `EIS18-LOC-02` | `NT-PRV-03` |
| Denial | `EIS18-LOC-04` | `NT-PRV-02` |
| Denial | `EIS18-ATT-02` | `NT-ATT-01` |
| Denial | `EIS18-ATT-03` | `NT-ATT-01` |
| Denial | `EIS18-PAY-01` | `NT-PAY-01` |
| Denial | `EIS18-PAY-02` | `NT-PAY-01` |
| Denial | `EIS18-PAY-03` | `NT-PAY-01` |
| Denial | `EIS18-OVT-02` | `NT-OVT-02`, `NT-OVT-03`, `NT-OVT-08`, `NT-OVT-09`, `NT-OVT-10`, `NT-OVT-11` |
| Denial | `EIS18-CLG-01` | `NT-CMP-01` |
| Denial | `EIS18-HEX-01` | `VN18-21` |
| Denial | `EIS18-EXT-08` | `NT-EXT-01`, `NT-EXT-05`, `NT-EXT-06` |
| Denial | `EIS18-OFD-01` | `NT-NTF-01` |
| Denial | `EIS18-NTF-01` | `NT-NTF-01`, `NT-EXT-06` |
| Audit | `EIS18-AUD-01` | `VN18-02` |
| Audit | `EIS18-CTX-01` | `VN18-13` |
| Audit | `EIS18-OVT-01` | `NT-OVT-01`, `NT-OVT-04` |
| Audit | `EIS18-RNW-01` | `NT-CMP-01`, `VN18-20` |
| Audit | `EIS18-REM-01` | `NT-CMP-01`, `VN18-20` |
| Audit | `EIS18-COD-01` | `NT-COD-01` |
| Audit | `EIS18-EXT-01` | `NT-FRL-01`, `NT-EXT-01` |
| Audit | `EIS18-EXT-05` | `NT-EXT-05` |
| Audit | `EIS18-EXT-06` | `NT-EXT-01`, `NT-FRL-01` |
| Audit | `EIS18-EXT-02` | `NT-EXT-03` |
| Rollback | `EIS18-MIG-01` | `NT-RLS-01`, `NT-RLS-02`, `NT-RLS-03` |
| Rollback | `EIS18-MIG-02` | `VN18-16` |
| Rollback | `EIS18-MIG-03` | `VN18-16` |
| Rollback | `EIS18-MIG-04` | `VN18-17` |
| Rollback | `EIS18-IDM-01` | `VN18-23` |
| Rollback | `EIS18-COD-02` | `NT-COD-01` |

## 5. Named Runtime Scenarios

### 5.1 Experience scenarios (one per experience row)

An experience row is a row of kind `EXP` or with an `EXP` verification seed. Each scenario is a future human runtime walk-through of that row in the named component, with a neutral-language and English, Malayalam and Manglish review on merchant-facing surfaces. Verifiers `H`, `H-L` and `I`.

| Scenario | Row | Component | Status |
|---|---|---|---|
| `RS18-E01` | `1-§1-1` | C-CUS — Customer network, identity and consent | PLANNED — NOT RUN |
| `RS18-E02` | `1-§1-2` | C-CUS — Customer network, identity and consent | PLANNED — NOT RUN |
| `RS18-E03` | `1-§1-3` | C-CUS — Customer network, identity and consent | PLANNED — NOT RUN |
| `RS18-E04` | `1-§2-1` | C-CUS — Customer network, identity and consent | PLANNED — NOT RUN |
| `RS18-E05` | `1-§2-2` | C-CUS — Customer network, identity and consent | PLANNED — NOT RUN |
| `RS18-E06` | `1-§2-3` | C-CUS — Customer network, identity and consent | PLANNED — NOT RUN |
| `RS18-E07` | `1-§2-4` | C-CUS — Customer network, identity and consent | PLANNED — NOT RUN |
| `RS18-E08` | `1-§2-5` | C-CUS — Customer network, identity and consent | PLANNED — NOT RUN |
| `RS18-E09` | `1-§2-6` | C-CUS — Customer network, identity and consent | PLANNED — NOT RUN |
| `RS18-E10` | `1-§2-7` | C-CUS — Customer network, identity and consent | PLANNED — NOT RUN |
| `RS18-E11` | `1-§2-8` | C-CUS — Customer network, identity and consent | PLANNED — NOT RUN |
| `RS18-E12` | `1-§13-1` | C-DLV — Lifecycle, assignment and delivery actor | PLANNED — NOT RUN |
| `RS18-E13` | `1-§20-1` | C-ORD — Order intake, drafts and clarification | PLANNED — NOT RUN |
| `RS18-E14` | `1-§20-2` | C-ORD — Order intake, drafts and clarification | PLANNED — NOT RUN |
| `RS18-E15` | `6-§1-1` | C-HR — Staff records, roles and permissions | PLANNED — NOT RUN |
| `RS18-E16` | `6-§2-1` | C-HR — Staff records, roles and permissions | PLANNED — NOT RUN |
| `RS18-E17` | `6-§14-9` | C-ACC — Acceptance and completion accounting | PLANNED — NOT RUN |
| `RS18-E18` | `16-§1-1` | C-CMP — Compliance records, intake and dates | PLANNED — NOT RUN |
| `RS18-E19` | `16-§1-2` | C-CMP — Compliance records, intake and dates | PLANNED — NOT RUN |
| `RS18-E20` | `16-§2-1` | C-CMP — Compliance records, intake and dates | PLANNED — NOT RUN |
| `RS18-E21` | `16-§2-2` | C-CMP — Compliance records, intake and dates | PLANNED — NOT RUN |
| `RS18-E22` | `16-§2-3` | C-CMP — Compliance records, intake and dates | PLANNED — NOT RUN |
| `RS18-E23` | `16-§2-4` | C-CMP — Compliance records, intake and dates | PLANNED — NOT RUN |
| `RS18-E24` | `16-§2-5` | C-CMP — Compliance records, intake and dates | PLANNED — NOT RUN |
| `RS18-E25` | `16-§2-6` | C-CMP — Compliance records, intake and dates | PLANNED — NOT RUN |
| `RS18-E26` | `16-§12-1` | C-REN — Reminders, renewal, retrieval and channels | PLANNED — NOT RUN |
| `RS18-E27` | `16-§12-2` | C-REN — Reminders, renewal, retrieval and channels | PLANNED — NOT RUN |
| `RS18-E28` | `9-§12-7` | C-HRF — Staff AI, channels, foundations and exceptions | PLANNED — NOT RUN |
| `RS18-E29` | `9-§12-9` | C-ORD — Order intake, drafts and clarification | PLANNED — NOT RUN |
| `RS18-E30` | `9-§12-12` | C-REN — Reminders, renewal, retrieval and channels | PLANNED — NOT RUN |
| `RS18-E31` | `BP-§10.7-X` | C-ACC — Acceptance and completion accounting | PLANNED — NOT RUN |

### 5.2 Founder-reserved scenarios

| Scenario | Rows | Verifier | Status |
|---|---|---|---|
| `RS18-FRV-A` | `BP-§10.7-AS1` | `F`, `I` | PLANNED — NOT RUN; Founder process only |
| `RS18-FRV-B` | `10-§13-7`, `BP-§10.7-BS1` | `F`, `I` | PLANNED — NOT RUN; Founder process only |
| `RS18-FRV-C` | `BP-§10.7-CS1` | `F`, `I` | PLANNED — NOT RUN; Founder process only |

### 5.3 Positive integration scenarios (EIS 16.1, preserved)

| ID | Tier | Rows (EIS) | Status |
|---|---|---|---|
| `PT-ORD-01` | Integration; Founder A | `1-§9-1`, `1-§9-13`, `BP-§10.7-AS1` | PLANNED — NOT RUN |
| `PT-AVL-01` | Integration | `1-§10-2`, `1-§10-9` | PLANNED — NOT RUN |
| `PT-STK-01` | Integration | `1-§10-*`, `BP-§10.7-A3` | PLANNED — NOT RUN |
| `PT-DLV-01` | Integration; device | `1-§12-*`, `1-§13-1`, `1-§15-1` | PLANNED — NOT RUN |
| `PT-COD-01` | Integration | `1-§16-1` to `-3` | PLANNED — NOT RUN |
| `PT-HR-01` | Integration | `6-§3-1`, `6-§3-7` | PLANNED — NOT RUN |
| `PT-ATT-01` | Integration; Founder B | `6-§5-1`, `6-§7-6`, `BP-§10.7-BS1` | PLANNED — NOT RUN |
| `PT-OVT-01` | Integration | `S11-L443-2` to `-5`, part of `-1` | PLANNED — NOT RUN |
| `PT-OVT-02` | Integration | `S11-L443-1`, `-2`, `-5` | PLANNED — NOT RUN |
| `PT-OVT-03` | Integration | `S11-L443-4` | PLANNED — NOT RUN |
| `PT-CMP-01` | Integration; Founder C | `16-§20-1`, `16-§8-*`, `BP-§10.7-CS1` | PLANNED — NOT RUN |
| `PT-LOC-01` | Integration | `22-§16-*`, `1-§14-10` | PLANNED — NOT RUN |
| `PT-VW-01` | Integration | `17-§9-*`, `17-§10-*` | PLANNED — NOT RUN |

## 6. Already Demonstrated Rows and Regression

The canonical FCTM has **0** `ALREADY DEMONSTRATED` rows (769 rows: 592 `IN SCOPE`, 77 `DELEGATED`, 48 `OUT OF BUILD SCOPE`, 27 `NOT APPLICABLE`, 17 `ASSIGNED TO LATER MISSION`, 8 `UNRESOLVED FOUNDER DECISION`). No row is carried forward and none is assumed to pass.

**Regression (class `REG`, planned).** Before any WS18-A2 stock consumer change is accepted, the 17 existing `tests/inventory` files remain regression gates under `EIS17-VER-12` (locked Stock EIS `790591a8`), with only the expectations that clause names re-baselined; earlier evidence: SB-P-1.10 test summary, `docs/implementation/SB-P-1.10/evidence/tests/test-summary.md`. This is a planned regression check, not a carried-forward pass.

## 7. Preserved Holds

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

## 8. Stock-Dependent Rows (BLOCKED FOR IMPLEMENTATION)

Every row mapped to `EIS18-STK-01` to `-STK-04`. Each keeps its Build Now commitment and its items; the non-Owner legs are verified only as `STK_DEPENDENCY_HELD` with no effect until unblocked.

| Row | Item | Named checks |
|---|---|---|
| `1-§10-1` | `VC18-090` | `NT-BIZ-01`, `NT-RLS-01`, `NT-RLS-02`, `NT-RLS-03`, `NT-ROLE-01`, `NT-STK-01`, `NT-STK-02`, `NT-STK-04`, `VN18-03`, `VN18-05`, `VN18-18`, `VN18-19`, `PT-STK-01` |
| `1-§10-3` | `VC18-092` | `NT-RLS-01`, `NT-RLS-02`, `NT-RLS-03`, `NT-STK-01`, `NT-STK-02`, `NT-STK-04`, `VN18-05`, `VN18-16`, `VN18-17`, `VN18-19`, `PT-STK-01` |
| `1-§10-4` | `VC18-093` | `NT-RLS-01`, `NT-RLS-02`, `NT-RLS-03`, `NT-STK-01`, `NT-STK-02`, `NT-STK-04`, `VN18-05`, `VN18-16`, `VN18-17`, `VN18-19`, `PT-STK-01` |
| `1-§10-5` | `VC18-094` | `NT-RLS-01`, `NT-RLS-02`, `NT-RLS-03`, `NT-STK-01`, `NT-STK-02`, `NT-STK-04`, `VN18-05`, `VN18-16`, `VN18-17`, `VN18-19`, `PT-STK-01` |
| `1-§10-6` | `VC18-095` | `NT-RLS-01`, `NT-RLS-02`, `NT-RLS-03`, `NT-STK-01`, `NT-STK-02`, `NT-STK-04`, `VN18-05`, `VN18-16`, `VN18-17`, `VN18-19`, `PT-STK-01` |
| `1-§10-7` | `VC18-096` | `NT-STK-01`, `NT-STK-02`, `NT-STK-04`, `VN18-05`, `VN18-16`, `VN18-19`, `PT-STK-01` |
| `1-§10-8` | `VC18-097` | `NT-BIZ-01`, `NT-RLS-01`, `NT-RLS-02`, `NT-RLS-03`, `NT-ROLE-01`, `NT-STK-02`, `NT-STK-04`, `VN18-03`, `VN18-05`, `VN18-16`, `VN18-17`, `VN18-18`, `VN18-19`, `PT-STK-01` |
| `1-§10-9` | `VC18-098` | `NT-RLS-01`, `NT-RLS-02`, `NT-RLS-03`, `NT-ROLE-01`, `NT-STK-02`, `NT-STK-03`, `NT-STK-04`, `VN18-01`, `VN18-16`, `VN18-19`, `PT-AVL-01`, `PT-STK-01` |
| `1-§24-3` | `VC18-207` | `NT-BIZ-01`, `NT-RLS-01`, `NT-RLS-02`, `NT-RLS-03`, `NT-ROLE-01`, `NT-STK-01`, `NT-STK-02`, `NT-STK-03`, `NT-STK-04`, `VN18-01`, `VN18-03`, `VN18-05`, `VN18-16`, `VN18-17`, `VN18-18`, `VN18-19` |
| `1-§24-8` | `VC18-212` | `NT-BIZ-01`, `NT-RLS-01`, `NT-RLS-02`, `NT-RLS-03`, `NT-ROLE-01`, `NT-STK-01`, `NT-STK-02`, `NT-STK-04`, `VN18-01`, `VN18-03`, `VN18-05`, `VN18-16`, `VN18-17`, `VN18-18`, `VN18-19` |
| `BP-§10.7-A3` | `VC18-534` | `NT-STK-01`, `NT-STK-04`, `VN18-19`, `PT-STK-01` |
| `BP-§10.7-A4` | `VC18-535` | `NT-STK-01`, `NT-STK-04`, `VN18-05`, `VN18-19` |

## 9. Row-Keyed Checklist Items (592 rows)

| Item | Row | Kind | Evidence class | Verifier | Named checks | Gate | Status |
|---|---|---|---|---|---|---|---|
| `VC18-001` | `1-§1-1` | EXP | EXP | H, H-L, I | RS18-E01 | DEP | PLANNED — NOT RUN |
| `VC18-002` | `1-§1-2` | EXP | EXP | H, H-L, I | RS18-E02 | DEP | PLANNED — NOT RUN |
| `VC18-003` | `1-§1-3` | EXP | EXP | H, H-L, I | RS18-E03 | DEP | PLANNED — NOT RUN |
| `VC18-004` | `1-§2-1` | NARR | EXP | H, H-L, I | RS18-E04 | DEP | PLANNED — NOT RUN |
| `VC18-005` | `1-§2-2` | NARR | EXP | H, H-L, I | RS18-E05 | DEP | PLANNED — NOT RUN |
| `VC18-006` | `1-§2-3` | NARR | EXP | H, H-L, I | RS18-E06 | DEP | PLANNED — NOT RUN |
| `VC18-007` | `1-§2-4` | NARR | EXP | H, H-L, I | RS18-E07 | DEP | PLANNED — NOT RUN |
| `VC18-008` | `1-§2-5` | NARR | EXP | H, H-L, I | RS18-E08 | DEP | PLANNED — NOT RUN |
| `VC18-009` | `1-§2-6` | NARR | EXP | H, H-L, I | RS18-E09 | DEP | PLANNED — NOT RUN |
| `VC18-010` | `1-§2-7` | NARR | EXP | H, H-L, I | RS18-E10 | DEP | PLANNED — NOT RUN |
| `VC18-011` | `1-§2-8` | NARR | EXP | H, H-L, I | RS18-E11 | DEP | PLANNED — NOT RUN |
| `VC18-012` | `1-§3-1` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-013` | `1-§3-2` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-014` | `1-§3-3` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-015` | `1-§3-4` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-016` | `1-§3-5` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-017` | `1-§3-6` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-018` | `1-§3-7` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-019` | `1-§3-8` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-020` | `1-§3-9` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-021` | `1-§3-10` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-022` | `1-§5-1` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-023` | `1-§5-2` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-024` | `1-§5-3` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-025` | `1-§5-4` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-026` | `1-§5-5` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-027` | `1-§5-6` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-028` | `1-§5-7` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-029` | `1-§5-8` | OBL | RT | B, H, I | NT-BIZ-01, NT-FIN-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-030` | `1-§5-9` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-031` | `1-§5-10` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-032` | `1-§5-11` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-033` | `1-§5-12` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-034` | `1-§5-13` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-035` | `1-§5-14` | NEG | NEG | B, S-01, I | NT-ASG-01, NT-BIZ-01, NT-FIN-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-036` | `1-§5-15` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-037` | `1-§5-16` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-038` | `1-§5-17` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-039` | `1-§5-18` | OBL | RT | B, H, S-02, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-040` | `1-§5-19` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-041` | `1-§5-20` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-042` | `1-§5-21` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-043` | `1-§5-22` | NEG | NEG | B, S-01, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FIN-01, NT-FRL-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-044` | `1-§5-23` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-045` | `1-§5-24` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-06, VN18-16, VN18-17 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-046` | `1-§5-25` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-06, VN18-16, VN18-17 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-047` | `1-§5-26` | OBL | RT | B, H, S-02, I | NT-BIZ-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-048` | `1-§5-27` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-06, VN18-16, VN18-17 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-049` | `1-§5-28` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-06, VN18-16, VN18-17 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-050` | `1-§5-29` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-07, VN18-16, VN18-17 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-051` | `1-§5-30` | NEG | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-06 | DEP | PLANNED — NOT RUN |
| `VC18-052` | `1-§6-1` | RULE | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-053` | `1-§6-2` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-054` | `1-§6-3` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-055` | `1-§6-4` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-056` | `1-§6-5` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-057` | `1-§6-6` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-058` | `1-§6-7` | OBL | IDEM | B, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, VN18-23 | DEP | PLANNED — NOT RUN |
| `VC18-059` | `1-§7-1` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-07, VN18-16, VN18-17 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-060` | `1-§7-2` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-07, VN18-16, VN18-17 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-061` | `1-§7-4` | NEG | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-07 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-062` | `1-§7-5` | NEG | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-07 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-063` | `1-§8-1` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-064` | `1-§8-6` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-065` | `1-§8-7` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-066` | `1-§8-8` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-067` | `1-§8-9` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-068` | `1-§8-10` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-069` | `1-§8-11` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-070` | `1-§8-12` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-071` | `1-§9-1` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, PT-ORD-01 | DEP | PLANNED — NOT RUN |
| `VC18-072` | `1-§9-2` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-073` | `1-§9-3` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-074` | `1-§9-4` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-075` | `1-§9-5` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-076` | `1-§9-6` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-077` | `1-§9-7` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-078` | `1-§9-8` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-079` | `1-§9-9` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-080` | `1-§9-10` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-081` | `1-§9-11` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-082` | `1-§9-12` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-083` | `1-§9-13` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-04, VN18-16, VN18-17, PT-ORD-01 | DEP | PLANNED — NOT RUN |
| `VC18-084` | `1-§9-14` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-04, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-085` | `1-§9-15` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-086` | `1-§9-16` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-087` | `1-§9-17` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-04, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-088` | `1-§9-18` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-04, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-089` | `1-§9-19` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-04 | DEP | PLANNED — NOT RUN |
| `VC18-090` | `1-§10-1` | RULE | RT | B, H, S-03, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-STK-01, NT-STK-02, NT-STK-04, VN18-03, VN18-05, VN18-18, VN18-19, PT-STK-01 | STK-BLOCKED, DEP | PLANNED — NOT RUN |
| `VC18-091` | `1-§10-2` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-STK-02, VN18-16, VN18-17, PT-AVL-01, PT-STK-01 | DEP | PLANNED — NOT RUN |
| `VC18-092` | `1-§10-3` | OBL | RT | B, H, S-03, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-STK-01, NT-STK-02, NT-STK-04, VN18-05, VN18-16, VN18-17, VN18-19, PT-STK-01 | STK-BLOCKED, DEP | PLANNED — NOT RUN |
| `VC18-093` | `1-§10-4` | OBL | RT | B, H, S-03, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-STK-01, NT-STK-02, NT-STK-04, VN18-05, VN18-16, VN18-17, VN18-19, PT-STK-01 | STK-BLOCKED, DEP | PLANNED — NOT RUN |
| `VC18-094` | `1-§10-5` | OBL | RT | B, H, S-03, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-STK-01, NT-STK-02, NT-STK-04, VN18-05, VN18-16, VN18-17, VN18-19, PT-STK-01 | STK-BLOCKED, DEP | PLANNED — NOT RUN |
| `VC18-095` | `1-§10-6` | OBL | RT | B, H, S-03, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-STK-01, NT-STK-02, NT-STK-04, VN18-05, VN18-16, VN18-17, VN18-19, PT-STK-01 | STK-BLOCKED, DEP | PLANNED — NOT RUN |
| `VC18-096` | `1-§10-7` | EX | RT | B, H, S-03, S-01, I | NT-STK-01, NT-STK-02, NT-STK-04, VN18-05, VN18-16, VN18-19, PT-STK-01 | STK-BLOCKED, DEP | PLANNED — NOT RUN |
| `VC18-097` | `1-§10-8` | OBL | RT | B, H, S-03, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-STK-02, NT-STK-04, VN18-03, VN18-05, VN18-16, VN18-17, VN18-18, VN18-19, PT-STK-01 | STK-BLOCKED, DEP | PLANNED — NOT RUN |
| `VC18-098` | `1-§10-9` | NEG | NEG | B, S-03, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-STK-02, NT-STK-03, NT-STK-04, VN18-01, VN18-16, VN18-19, PT-AVL-01, PT-STK-01 | STK-BLOCKED, DEP | PLANNED — NOT RUN |
| `VC18-099` | `1-§11-1` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-08, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-100` | `1-§11-2` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-08, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-101` | `1-§11-3` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-08, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-102` | `1-§11-4` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-08 | DEP | PLANNED — NOT RUN |
| `VC18-103` | `1-§12-1` | OBL | RT | B, H, I | NT-ASG-02, NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, PT-DLV-01 | DEP | PLANNED — NOT RUN |
| `VC18-104` | `1-§12-2` | OBL | RT | B, H, I | NT-ASG-02, NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, PT-DLV-01 | DEP | PLANNED — NOT RUN |
| `VC18-105` | `1-§12-3` | OBL | RT | B, H, I | NT-ASG-02, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, PT-DLV-01 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-106` | `1-§12-4` | OBL | RT | B, H, I | NT-ASG-02, NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, PT-DLV-01 | DEP | PLANNED — NOT RUN |
| `VC18-107` | `1-§12-5` | OBL | RT | B, H, I | NT-ASG-02, NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, PT-DLV-01 | DEP | PLANNED — NOT RUN |
| `VC18-108` | `1-§12-6` | OBL | IDEM | B, I | NT-ASG-02, NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, VN18-23, PT-DLV-01 | DEP | PLANNED — NOT RUN |
| `VC18-109` | `1-§12-7` | OBL | RT | B, H, I | NT-ASG-02, NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, PT-DLV-01 | DEP | PLANNED — NOT RUN |
| `VC18-110` | `1-§13-1` | RULE | EXP | H, H-L, I | NT-ASG-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, PT-DLV-01, RS18-E12 | DEP | PLANNED — NOT RUN |
| `VC18-111` | `1-§13-2` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-112` | `1-§13-3` | OBL | RT | B, H, I | NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-113` | `1-§13-4` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-114` | `1-§13-5` | OBL | RT | B, H, S-02, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-115` | `1-§13-6` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-116` | `1-§13-7` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-117` | `1-§13-8` | OBL | RT | B, H, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-118` | `1-§13-9` | RULE | INSP | MC, I | NT-ASG-01, NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-119` | `1-§14-1` | PRIN | INSP | MC, S-02, I | NT-BIZ-01, NT-PRV-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-120` | `1-§14-2` | OBL | RT | B, H, S-02, I | NT-BIZ-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-121` | `1-§14-3` | OBL | RT | B, H, S-02, I | NT-BIZ-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-122` | `1-§14-4` | OBL | RT | B, H, S-02, I | NT-BIZ-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-123` | `1-§14-5` | NEG | NEG, INSP | B, MC, S-01, S-02, I | NT-PRV-01, NT-PRV-03, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-124` | `1-§14-6` | NEG | NEG | B, S-01, S-02, I | NT-BIZ-01, NT-PRV-01, NT-PRV-03, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-125` | `1-§14-7` | NEG | NEG | B, S-01, S-02, I | NT-BIZ-01, NT-PRV-01, NT-PRV-03, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-126` | `1-§14-8` | OBL | RT | B, H, S-02, I | NT-BIZ-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-14, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-127` | `1-§14-9` | OBL | RT | B, H, S-02, I | NT-BIZ-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-14, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-128` | `1-§14-10` | OBL | RT | B, H, S-02, I | NT-BIZ-01, NT-PRV-01, NT-PRV-02, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, PT-LOC-01 | DEP | PLANNED — NOT RUN |
| `VC18-129` | `1-§14-11` | OBL | RT | B, H, S-02, I | NT-BIZ-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-14, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-130` | `1-§14-12` | RULE | INSP | MC, S-02, I | NT-BIZ-01, NT-PRV-01, NT-PRV-02, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-131` | `1-§14-13` | RULE | NEG | B, S-01, S-02, I | NT-PRV-02, NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-132` | `1-§15-1` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-09, VN18-16, VN18-17, PT-DLV-01 | DEP | PLANNED — NOT RUN |
| `VC18-133` | `1-§15-2` | EX | RT | B, H, I | NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-05, NT-EXT-06, NT-ROLE-01, VN18-03, VN18-09 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-134` | `1-§15-3` | EX | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-135` | `1-§15-4` | EX | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-10 | R2, DNTF, DEP | PLANNED — NOT RUN |
| `VC18-136` | `1-§15-5` | EX | RT | B, H, S-02, I | NT-BIZ-01, NT-PRV-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-137` | `1-§15-6` | EX | RT | B, H, I | NT-BIZ-01, NT-COD-01, NT-ROLE-01, VN18-03, VN18-16 | DEP | PLANNED — NOT RUN |
| `VC18-138` | `1-§15-7` | EX | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-09 | DEP | PLANNED — NOT RUN |
| `VC18-139` | `1-§15-8` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-09, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-140` | `1-§15-9` | NEG | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-09 | DEP | PLANNED — NOT RUN |
| `VC18-141` | `1-§15-10` | NEG | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-09 | DEP | PLANNED — NOT RUN |
| `VC18-142` | `1-§16-1` | OBL | RT | B, H, I | NT-COD-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, PT-COD-01 | DEP | PLANNED — NOT RUN |
| `VC18-143` | `1-§16-2` | OBL | RT | B, H, I | NT-COD-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, PT-COD-01 | DEP | PLANNED — NOT RUN |
| `VC18-144` | `1-§16-3` | OBL | RT | B, H, I | NT-COD-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, PT-COD-01 | DEP | PLANNED — NOT RUN |
| `VC18-145` | `1-§16-4` | RULE | INSP | MC, I | NT-COD-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16 | DEP | PLANNED — NOT RUN |
| `VC18-146` | `1-§16-5` | NEG | NEG | B, S-01, I | NT-COD-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-16 | DTX, DEP | PLANNED — NOT RUN |
| `VC18-147` | `1-§16-6` | OBL | IDEM | B, I | NT-COD-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-23 | DTX, DEP | PLANNED — NOT RUN |
| `VC18-148` | `1-§17-1` | RULE | INSP | MC, I | NT-NTF-01, NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-149` | `1-§17-2` | OBL | RT | B, H, I | NT-NTF-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-150` | `1-§17-3` | OBL | RT | B, H, I | NT-NTF-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-151` | `1-§17-4` | OBL | RT | B, H, I | NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-NTF-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-152` | `1-§17-5` | OBL | RT | B, H, I | NT-NTF-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-153` | `1-§17-6` | OBL | RT | B, H, I | NT-NTF-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-154` | `1-§17-7` | OBL | RT | B, H, I | NT-NTF-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-155` | `1-§17-8` | OBL | RT | B, H, I | NT-NTF-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-156` | `1-§17-9` | NEG | NEG | B, S-01, I | NT-NTF-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-157` | `1-§18-7` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-158` | `1-§19-1` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-159` | `1-§19-2` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-160` | `1-§19-3` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-161` | `1-§19-4` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-162` | `1-§19-5` | RULE | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-163` | `1-§20-1` | OBL | EXP | H, H-L, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, RS18-E13 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-164` | `1-§20-2` | OBL | EXP | H, H-L, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, RS18-E14 | DEP | PLANNED — NOT RUN |
| `VC18-165` | `1-§21-1` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-166` | `1-§21-2` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-167` | `1-§21-3` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-168` | `1-§21-4` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-169` | `1-§21-5` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-170` | `1-§21-6` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-171` | `1-§21-7` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-172` | `1-§21-8` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-04 | DEP | PLANNED — NOT RUN |
| `VC18-173` | `1-§21-9` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-11 | DEP | PLANNED — NOT RUN |
| `VC18-174` | `1-§21-10` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-09 | DEP | PLANNED — NOT RUN |
| `VC18-175` | `1-§21-11` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-11 | DEP | PLANNED — NOT RUN |
| `VC18-176` | `1-§21-12` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-11 | DEP | PLANNED — NOT RUN |
| `VC18-177` | `1-§21-13` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-11 | DEP | PLANNED — NOT RUN |
| `VC18-178` | `1-§22-1` | OBL | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-179` | `1-§22-2` | OBL | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-180` | `1-§22-3` | OBL | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-07, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-181` | `1-§22-4` | OBL | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-182` | `1-§22-5` | OBL | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-183` | `1-§22-6` | OBL | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-08, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-184` | `1-§22-7` | OBL | INSP | MC, I | NT-ASG-02, NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-185` | `1-§22-8` | OBL | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-08, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-186` | `1-§22-9` | OBL | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-09, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-187` | `1-§22-10` | OBL | INSP | MC, I | NT-BIZ-01, NT-COD-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-188` | `1-§22-11` | OBL | INSP | MC, S-02, I | NT-BIZ-01, NT-PRV-01, NT-PRV-02, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-189` | `1-§22-12` | OBL | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-190` | `1-§22-13` | OBL | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-191` | `1-§22-14` | OBL | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-02, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-192` | `1-§22-15` | NEG | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-193` | `1-§23-1` | RULE | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-194` | `1-§23-2` | RULE | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-195` | `1-§23-3` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-196` | `1-§23-4` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-197` | `1-§23-5a` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-198` | `1-§23-6` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-199` | `1-§23-7` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16 | DEP | PLANNED — NOT RUN |
| `VC18-200` | `1-§23-8` | RULE | INSP | MC, I | NT-NTF-01, NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-201` | `1-§23-9` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-202` | `1-§23-10` | RULE | INSP | MC, S-02, I | NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-203` | `1-§23-11` | RULE | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-02, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-204` | `1-§23-12` | RULE | INSP | MC, I | NT-COD-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16 | DEP | PLANNED — NOT RUN |
| `VC18-205` | `1-§24-1` | OBL | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-206` | `1-§24-2` | OBL | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-04, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-207` | `1-§24-3` | OBL | NEG | B, S-03, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-STK-01, NT-STK-02, NT-STK-03, NT-STK-04, VN18-01, VN18-03, VN18-05, VN18-16, VN18-17, VN18-18, VN18-19 | STK-BLOCKED, DEP | PLANNED — NOT RUN |
| `VC18-208` | `1-§24-4` | OBL | NEG | B, S-01, S-02, I | NT-BIZ-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-209` | `1-§24-5` | OBL | NEG | B, S-01, I | NT-ASG-02, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-210` | `1-§24-6` | OBL | NEG | B, S-01, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-211` | `1-§24-7` | OBL | IDEM | B, I | NT-ASG-02, NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17, VN18-23 | DEP | PLANNED — NOT RUN |
| `VC18-212` | `1-§24-8` | OBL | NEG | B, S-03, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-STK-01, NT-STK-02, NT-STK-04, VN18-01, VN18-03, VN18-05, VN18-16, VN18-17, VN18-18, VN18-19 | STK-BLOCKED, DEP | PLANNED — NOT RUN |
| `VC18-213` | `1-§24-9` | OBL | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-214` | `1-§24-10` | OBL | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-215` | `1-§24-11` | OBL | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-09, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-216` | `1-§24-12` | OBL | NEG | B, S-01, I | NT-BIZ-01, NT-COD-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-217` | `1-§24-13` | OBL | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-218` | `1-§24-14` | OBL | NEG | B, S-01, I | NT-BIZ-01, NT-COD-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-219` | `1-§24-15` | RULE | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-220` | `1-§25-1` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-221` | `1-§25-2` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-222` | `1-§25-3` | PRIN | NEG | B, S-01, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-ROLE-01, VN18-03, VN18-12 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-223` | `1-§25-4` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-224` | `1-§25-5` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-225` | `1-§25-6` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-FIN-01, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-226` | `1-§25-7` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-227` | `1-§25-8` | RULE | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-228` | `1-§26-1` | SCN | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DNTF, DEP | PLANNED — NOT RUN |
| `VC18-229` | `1-§26-2` | SCN | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-230` | `1-§26-3` | SCN | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-231` | `1-§26-4` | SCN | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-232` | `1-§26-5` | SCN | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-16 | DEP | PLANNED — NOT RUN |
| `VC18-233` | `1-§26-6` | SCN | RT | B, H, S-02, I | NT-BIZ-01, NT-PRV-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-234` | `1-§26-7` | SCN | NEG | B, S-01, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-ROLE-01, VN18-03 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-235` | `1-§26-8` | SCN | NEG | B, S-01, I | NT-ASG-01, NT-BIZ-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01, NT-ROLE-01, VN18-03 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-236` | `1-§26-9` | SCN | NEG | B, S-01, S-02, I | NT-BIZ-01, NT-PRV-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-237` | `1-§26-10` | SCN | RT, NEG | B, H, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-238` | `1-§26-11` | SCN | RT, IDEM | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-16, VN18-23 | DTX, DEP | PLANNED — NOT RUN |
| `VC18-239` | `1-§26-12a` | SCN | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-240` | `1-§26-13` | SCN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-241` | `1-§26-14` | SCN | IDEM | B, I | NT-BIZ-01, NT-COD-01, NT-ROLE-01, VN18-03, VN18-23 | DEP | PLANNED — NOT RUN |
| `VC18-242` | `1-§28-1` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-243` | `1-§31-1` | GATE | GATE | MC, I | VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-244` | `1-§31-2` | GATE | GATE | MC, I | VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-245` | `6-§1-1` | EXP | EXP | H, H-L, I | RS18-E15 | DEP | PLANNED — NOT RUN |
| `VC18-246` | `6-§2-1` | NARR | EXP | H, H-L, I | RS18-E16 | DEP | PLANNED — NOT RUN |
| `VC18-247` | `6-§3-1` | OBL | RT | B, H, I | NT-BIZ-01, NT-HR-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, PT-HR-01 | DEP | PLANNED — NOT RUN |
| `VC18-248` | `6-§3-2` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-249` | `6-§3-3` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-250` | `6-§3-4` | OBL | RT | B, H, S-02, I | NT-BIZ-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-251` | `6-§3-5` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-13, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-252` | `6-§3-6` | OBL | RT | B, H, L, I | NT-BIZ-01, NT-PAY-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DLEG, DEP | PLANNED — NOT RUN |
| `VC18-253` | `6-§3-7` | OBL | RT | B, H, I | NT-BIZ-01, NT-EMP-01, NT-HR-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, PT-HR-01 | DEP | PLANNED — NOT RUN |
| `VC18-254` | `6-§3-8` | OBL | RT | B, H, I | NT-BIZ-01, NT-HR-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-255` | `6-§3-9` | OBL | RT | B, H, I | NT-BIZ-01, NT-EMP-01, NT-HR-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-256` | `6-§4-1` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-257` | `6-§4-2` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-258` | `6-§4-3` | OBL | RT | B, H, I | NT-BIZ-01, NT-HR-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DTX, DEP | PLANNED — NOT RUN |
| `VC18-259` | `6-§4-4` | OBL | RT | B, H, I | NT-BIZ-01, NT-EMP-01, NT-HR-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-260` | `6-§4-5` | OBL | RT | B, H, I | NT-BIZ-01, NT-EMP-01, NT-HR-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-261` | `6-§4-6` | OBL | RT | B, H, I | NT-BIZ-01, NT-EMP-01, NT-HR-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-262` | `6-§4-7` | NEG | NEG | B, S-01, I | NT-BIZ-01, NT-EMP-01, NT-FIN-01, NT-HR-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-263` | `6-§5-1` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, PT-ATT-01 | DEP | PLANNED — NOT RUN |
| `VC18-264` | `6-§5-2` | EX | RT | B, H, S-02, I | NT-ATT-01, NT-BIZ-01, NT-PRV-01, NT-ROLE-01, VN18-03 | DC14, DEP | PLANNED — NOT RUN |
| `VC18-265` | `6-§5-3` | RULE | NEG | B, S-01, S-02, I | NT-ATT-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-266` | `6-§5-4` | NEG | NEG | B, S-01, S-02, I | NT-ATT-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-267` | `6-§5-5` | RULE | INSP | MC, S-02, I | NT-ATT-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-268` | `6-§6-1` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-22 | DEP | PLANNED — NOT RUN |
| `VC18-269` | `6-§6-2` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-22 | DEP | PLANNED — NOT RUN |
| `VC18-270` | `6-§6-3` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-22 | DEP | PLANNED — NOT RUN |
| `VC18-271` | `6-§7-1` | RULE | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-13 | DEP | PLANNED — NOT RUN |
| `VC18-272` | `6-§7-2` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-13, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-273` | `6-§7-3` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-13, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-274` | `6-§7-4` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-13, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-275` | `6-§7-5` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-13, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-276` | `6-§7-6` | OBL | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-13, VN18-16, VN18-17, PT-ATT-01 | DEP | PLANNED — NOT RUN |
| `VC18-277` | `6-§8-1` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-PAY-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-278` | `6-§8-2` | OBL | RT | B, H, L, I | NT-BIZ-01, NT-PAY-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DLEG, DEP | PLANNED — NOT RUN |
| `VC18-279` | `6-§8-3` | NEG | NEG | B, S-01, I | NT-ATT-01, NT-BIZ-01, NT-PAY-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-280` | `6-§8-4` | NEG | NEG | B, S-01, I | NT-ATT-01, NT-BIZ-01, NT-PAY-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-281` | `6-§8-5` | NEG | NEG | B, S-01, I | NT-ATT-01, NT-BIZ-01, NT-PAY-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-282` | `6-§8-6` | NEG | NEG | B, S-01, I | NT-BIZ-01, NT-PAY-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-283` | `6-§8-7` | OBL | RT, INSP | B, H, MC, I | NT-BIZ-01, NT-PAY-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-284` | `6-§9-1` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-285` | `6-§9-2` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-286` | `6-§9-3` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-287` | `6-§9-4` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-288` | `6-§9-5` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-289` | `6-§9-6` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-290` | `6-§9-7` | NEG | NEG | B, S-01, I | NT-ATT-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-11 | DEP | PLANNED — NOT RUN |
| `VC18-291` | `6-§9-8` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-11 | DEP | PLANNED — NOT RUN |
| `VC18-292` | `6-§9-9` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-11 | DEP | PLANNED — NOT RUN |
| `VC18-293` | `6-§9-10` | NEG | NEG | B, S-01, I | NT-FIN-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-11 | DEP | PLANNED — NOT RUN |
| `VC18-294` | `6-§9-11` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-11 | DEP | PLANNED — NOT RUN |
| `VC18-295` | `6-§10-1a` | RULE | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-296` | `6-§10-2` | NEG | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-297` | `6-§11-1` | RULE | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-298` | `6-§11-2` | RULE | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-299` | `6-§11-3` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-300` | `6-§11-4` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-301` | `6-§11-5` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-302` | `6-§11-6` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-303` | `6-§11-7` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-304` | `6-§11-8` | RULE | INSP | MC, S-02, I | NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-305` | `6-§11-9` | RULE | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-02, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-306` | `6-§12-1` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-307` | `6-§12-2` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-308` | `6-§12-3` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-309` | `6-§12-4` | PRIN | NEG | B, S-01, S-02, I | NT-BIZ-01, NT-PRV-01, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-310` | `6-§12-5` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-02, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-311` | `6-§12-6` | NEG | NEG | B, S-01, S-02, I | NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-312` | `6-§12-7` | NEG | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-313` | `6-§12-8` | RULE | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-314` | `6-§13-1` | OBL | IDEM | B, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17, VN18-21, VN18-23 | DEP | PLANNED — NOT RUN |
| `VC18-315` | `6-§13-2` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17, VN18-21 | DEP | PLANNED — NOT RUN |
| `VC18-316` | `6-§13-3` | OBL | RT | B, H, S-02, I | NT-ATT-01, NT-BIZ-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17, VN18-21 | DEP | PLANNED — NOT RUN |
| `VC18-317` | `6-§13-4` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17, VN18-21 | DEP | PLANNED — NOT RUN |
| `VC18-318` | `6-§13-5` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17, VN18-21 | DEP | PLANNED — NOT RUN |
| `VC18-319` | `6-§13-6` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17, VN18-21 | DEP | PLANNED — NOT RUN |
| `VC18-320` | `6-§13-7` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17, VN18-21 | DEP | PLANNED — NOT RUN |
| `VC18-321` | `6-§13-8` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17, VN18-21 | DEP | PLANNED — NOT RUN |
| `VC18-322` | `6-§13-9` | OBL | IDEM | B, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17, VN18-21, VN18-23 | DEP | PLANNED — NOT RUN |
| `VC18-323` | `6-§13-10` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17, VN18-21 | DEP | PLANNED — NOT RUN |
| `VC18-324` | `6-§13-11` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17, VN18-21 | DEP | PLANNED — NOT RUN |
| `VC18-325` | `6-§14-1` | SCN | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-326` | `6-§14-2` | SCN | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-327` | `6-§14-3` | SCN | RT, NEG | B, H, S-01, S-02, I | NT-BIZ-01, NT-PRV-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-328` | `6-§14-4` | SCN | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-329` | `6-§14-5` | SCN | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-330` | `6-§14-6` | SCN | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-331` | `6-§14-7` | SCN | NEG | B, S-01, I | NT-BIZ-01, NT-EMP-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-332` | `6-§14-8` | SCN | RT, INSP | B, H, MC, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-333` | `6-§14-9` | SCN | EXP | H, H-L, I | NT-BIZ-01, NT-ROLE-01, VN18-03, RS18-E17 | DEP | PLANNED — NOT RUN |
| `VC18-334` | `6-§14-10` | SCN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-335` | `6-§17-1` | GATE | GATE | MC, I | VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-336` | `S11-L443-1` | OBL | RT | B, H, S-02, L, I | NT-BIZ-01, NT-OVT-01, NT-OVT-02, NT-OVT-03, NT-OVT-04, NT-OVT-05, NT-OVT-06, NT-OVT-07, NT-OVT-08, NT-OVT-09, NT-OVT-10, NT-OVT-11, NT-OVT-12, NT-OVT-13, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, VN18-23, PT-OVT-02 | DLEG, OFF, DEP | PLANNED — NOT RUN |
| `VC18-337` | `S11-L443-2` | OBL | RT, NEG | B, H, S-01, I | NT-BIZ-01, NT-OVT-01, NT-OVT-04, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, PT-OVT-01 | OFF, DEP | PLANNED — NOT RUN |
| `VC18-338` | `S11-L443-3` | OBL | RT | B, H, L, I | NT-BIZ-01, NT-OVT-01, NT-OVT-04, NT-OVT-05, NT-OVT-06, NT-OVT-07, NT-OVT-12, NT-OVT-13, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, VN18-23, PT-OVT-01 | DLEG, OFF, DEP | PLANNED — NOT RUN |
| `VC18-339` | `S11-L443-4` | OBL | RT | B, H, L, I | NT-BIZ-01, NT-EMP-01, NT-OVT-01, NT-OVT-04, NT-OVT-09, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, PT-OVT-01, PT-OVT-03 | DLEG, OFF, DEP | PLANNED — NOT RUN |
| `VC18-340` | `S11-L443-5` | OBL | RT | B, H, I | NT-BIZ-01, NT-OVT-01, NT-OVT-04, NT-OVT-05, NT-OVT-06, NT-OVT-07, NT-OVT-10, NT-OVT-12, NT-OVT-13, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-02, VN18-03, VN18-16, VN18-17, PT-OVT-01 | OFF, DEP | PLANNED — NOT RUN |
| `VC18-341` | `16-§1-1` | EXP | EXP | H, H-L, I | RS18-E18 | DEP | PLANNED — NOT RUN |
| `VC18-342` | `16-§1-2` | EXP | EXP | H, H-L, I | RS18-E19 | DEP | PLANNED — NOT RUN |
| `VC18-343` | `16-§2-1` | NARR | EXP | H, H-L, I | RS18-E20 | DEP | PLANNED — NOT RUN |
| `VC18-344` | `16-§2-2` | NARR | EXP | H, H-L, I | RS18-E21 | DEP | PLANNED — NOT RUN |
| `VC18-345` | `16-§2-3` | NARR | EXP | H, H-L, I | RS18-E22 | DEP | PLANNED — NOT RUN |
| `VC18-346` | `16-§2-4` | NARR | EXP | H, H-L, I | RS18-E23 | DEP | PLANNED — NOT RUN |
| `VC18-347` | `16-§2-5` | NARR | EXP | H, H-L, I | RS18-E24 | DEP | PLANNED — NOT RUN |
| `VC18-348` | `16-§2-6` | NARR | EXP | H, H-L, I | RS18-E25 | DEP | PLANNED — NOT RUN |
| `VC18-349` | `16-§3-1` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-350` | `16-§3-2` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-351` | `16-§3-3` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-352` | `16-§3-4` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-353` | `16-§3-5` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-354` | `16-§3-6` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-355` | `16-§3-7` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-356` | `16-§4-1` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-357` | `16-§4-2` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-358` | `16-§4-3` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-359` | `16-§4-4` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-360` | `16-§4-5` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-361` | `16-§4-6` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-362` | `16-§4-7` | OBL | RT | B, H, I | NT-BIZ-01, NT-CAB-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-363` | `16-§4-8` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-364` | `16-§4-9` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-365` | `16-§4-10` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-366` | `16-§4-11` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-367` | `16-§4-12` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-368` | `16-§4-13` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-369` | `16-§4-14` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-370` | `16-§5-1` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-371` | `16-§5-2` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-372` | `16-§5-3` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-373` | `16-§5-4` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-374` | `16-§5-5a` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-375` | `16-§5-6` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-376` | `16-§5-7` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-377` | `16-§6-1` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-378` | `16-§6-2` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-379` | `16-§6-3` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-380` | `16-§6-4` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-381` | `16-§6-5` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-382` | `16-§6-6` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-383` | `16-§6-7` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-384` | `16-§7-1` | RULE | INSP | MC, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-385` | `16-§7-2` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-386` | `16-§7-3` | RULE | INSP | MC, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-387` | `16-§7-4` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-388` | `16-§7-5` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-389` | `16-§7-6` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-390` | `16-§7-7` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-391` | `16-§7-8` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-392` | `16-§8-1` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20, PT-CMP-01 | DEP | PLANNED — NOT RUN |
| `VC18-393` | `16-§8-2` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20, PT-CMP-01 | DEP | PLANNED — NOT RUN |
| `VC18-394` | `16-§8-3` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20, PT-CMP-01 | DEP | PLANNED — NOT RUN |
| `VC18-395` | `16-§8-4` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20, PT-CMP-01 | DEP | PLANNED — NOT RUN |
| `VC18-396` | `16-§8-5` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20, PT-CMP-01 | DEP | PLANNED — NOT RUN |
| `VC18-397` | `16-§8-6` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20, PT-CMP-01 | DEP | PLANNED — NOT RUN |
| `VC18-398` | `16-§8-7` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20, PT-CMP-01 | DEP | PLANNED — NOT RUN |
| `VC18-399` | `16-§8-8` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20, PT-CMP-01 | DEP | PLANNED — NOT RUN |
| `VC18-400` | `16-§8-9` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20, PT-CMP-01 | DEP | PLANNED — NOT RUN |
| `VC18-401` | `16-§8-10` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-20, PT-CMP-01 | DEP | PLANNED — NOT RUN |
| `VC18-402` | `16-§8-11` | NEG | NEG | B, S-01, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-20, PT-CMP-01 | DEP | PLANNED — NOT RUN |
| `VC18-403` | `16-§9-1` | RULE | INSP | MC, I | NT-CAB-01, NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-404` | `16-§9-2` | OBL | RT | B, H, I | NT-CAB-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-405` | `16-§10-1` | OBL | NEG | B, S-01, I | NT-BIZ-01, NT-CAB-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-406` | `16-§10-2` | OBL | NEG | B, S-01, I | NT-BIZ-01, NT-CAB-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-03, VN18-16, VN18-17 | PQ14, DEP | PLANNED — NOT RUN |
| `VC18-407` | `16-§10-3` | NEG | NEG | B, S-01, I | NT-BIZ-01, NT-CAB-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-01, VN18-03 | PQ14, DEP | PLANNED — NOT RUN |
| `VC18-408` | `16-§10-4` | NEG | NEG | B, S-01, I | NT-BIZ-01, NT-CAB-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-409` | `16-§11-1` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-410` | `16-§11-2` | OBL | RT | B, H, I | NT-CAB-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-SET-01, VN18-16, VN18-17 | PQ14, DEP | PLANNED — NOT RUN |
| `VC18-411` | `16-§11-3` | OBL | RT | B, H, I | NT-CAB-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-SET-01, VN18-16, VN18-17 | PQ14, DEP | PLANNED — NOT RUN |
| `VC18-412` | `16-§11-4` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-413` | `16-§11-5` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-414` | `16-§11-6a` | RULE | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-415` | `16-§11-7` | NEG | NEG, IDEM | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-23 | DEP | PLANNED — NOT RUN |
| `VC18-416` | `16-§12-1` | OBL | EXP | H, H-L, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, RS18-E26 | DEP | PLANNED — NOT RUN |
| `VC18-417` | `16-§12-2` | RULE | EXP | H, H-L, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, RS18-E27 | DEP | PLANNED — NOT RUN |
| `VC18-418` | `16-§13-1` | CONS | RT | B, H, I | NT-SET-01 | DEP | PLANNED — NOT RUN |
| `VC18-419` | `16-§13-2` | CONS | RT | B, H, I | NT-CAB-01, NT-SET-01 | PQ14, DEP | PLANNED — NOT RUN |
| `VC18-420` | `16-§13-3` | CONS | RT | B, H, I | NT-SET-01 | DEP | PLANNED — NOT RUN |
| `VC18-421` | `16-§13-4` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-422` | `16-§14-1` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-423` | `16-§14-2` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-424` | `16-§14-3` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-425` | `16-§14-4` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-426` | `16-§14-5` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-427` | `16-§14-6` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-428` | `16-§15-1` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-429` | `16-§15-2` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-430` | `16-§15-3` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-431` | `16-§15-4` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-432` | `16-§15-5` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-433` | `16-§15-6` | OBL | RT | B, H, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-434` | `16-§15-7` | NEG | NEG | B, S-01, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-435` | `16-§15-8` | NEG | NEG | B, S-01, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-436` | `16-§15-9` | NEG | NEG | B, S-01, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-437` | `16-§15-10` | NEG | NEG | B, S-01, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-438` | `16-§15-11` | NEG | NEG | B, S-01, I | NT-CMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-439` | `16-§16-1` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-440` | `16-§16-2` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-441` | `16-§16-3` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-442` | `16-§16-4` | OBL | IDEM | B, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17, VN18-23 | DEP | PLANNED — NOT RUN |
| `VC18-443` | `16-§16-5` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-444` | `16-§16-6` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-445` | `16-§16-7` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-446` | `16-§16-8` | OBL | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-447` | `16-§16-9` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-448` | `16-§16-10` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-449` | `16-§16-11` | RULE | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-450` | `16-§17-1` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-451` | `16-§17-2` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-452` | `16-§17-3` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-CAB-01, NT-ROLE-01, NT-SET-01, VN18-03, VN18-12 | PQ14, DEP | PLANNED — NOT RUN |
| `VC18-453` | `16-§17-4` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-454` | `16-§17-5` | PRIN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-455` | `16-§17-6` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-456` | `16-§17-7` | NEG | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-457` | `16-§18-1` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-458` | `16-§18-2` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-459` | `16-§18-3` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-460` | `16-§18-4` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-461` | `16-§18-5` | RULE | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-462` | `16-§18-6` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-463` | `16-§18-7` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-464` | `16-§18-8` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-465` | `16-§18-9` | RULE | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-02, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-466` | `16-§18-10` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-467` | `16-§20-1` | SCN | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03, PT-CMP-01 | DEP | PLANNED — NOT RUN |
| `VC18-468` | `16-§20-2` | SCN | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-469` | `16-§20-3` | SCN | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-470` | `16-§20-4` | SCN | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-471` | `16-§20-5` | SCN | NEG | B, S-01, I | NT-BIZ-01, NT-CMP-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-472` | `16-§20-6` | SCN | NEG | B, S-01, I | NT-BIZ-01, NT-CAB-01, NT-ROLE-01, NT-SET-01, VN18-03 | PQ14, DEP | PLANNED — NOT RUN |
| `VC18-473` | `16-§20-7a` | SCN | RT | B, H, I | NT-BIZ-01, NT-CAB-01, NT-ROLE-01, NT-SET-01, VN18-03 | PQ14, DEP | PLANNED — NOT RUN |
| `VC18-474` | `16-§20-8` | SCN | IDEM | B, I | NT-BIZ-01, NT-ROLE-01, VN18-03, VN18-23 | DEP | PLANNED — NOT RUN |
| `VC18-475` | `16-§20-9` | SCN | RT, NEG | B, H, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-476` | `16-§20-10` | SCN | NEG | B, S-01, I | NT-BIZ-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-477` | `16-§21-1` | PRIN | INSP | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-478` | `16-§23-1` | GATE | GATE | MC, I | VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-479` | `22-§16-1` | RULE | NEG, INSP | B, MC, S-01, S-02, I | NT-BIZ-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, PT-LOC-01 | DEP | PLANNED — NOT RUN |
| `VC18-480` | `22-§16-2` | NEG | NEG | B, S-01, S-02, I | NT-BIZ-01, NT-PRV-03, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-03, PT-LOC-01 | DEP | PLANNED — NOT RUN |
| `VC18-481` | `22-§16-3` | OBL | INSP | MC, S-02, I | NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-14, VN18-16, VN18-17, PT-LOC-01 | DEP | PLANNED — NOT RUN |
| `VC18-482` | `22-§16-4` | OBL | NEG | B, S-01, S-02, I | NT-BIZ-01, NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-14, VN18-16, VN18-17, PT-LOC-01 | DEP | PLANNED — NOT RUN |
| `VC18-483` | `22-§16-5` | OBL | RT | B, H, S-02, I | NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-14, VN18-16, VN18-17, PT-LOC-01 | DEP | PLANNED — NOT RUN |
| `VC18-484` | `22-§16-6` | OBL | INSP | MC, S-02, L, I | NT-PRV-01, NT-PRV-02, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, PT-LOC-01 | DLEG, DEP | PLANNED — NOT RUN |
| `VC18-485` | `22-§16-7` | OBL | NEG | B, S-01, S-02, I | NT-BIZ-01, NT-PRV-01, NT-PRV-02, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17, PT-LOC-01 | DEP | PLANNED — NOT RUN |
| `VC18-486` | `22-§16-8` | OBL | RT | B, H, S-02, I | NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, PT-LOC-01 | DEP | PLANNED — NOT RUN |
| `VC18-487` | `22-§16-9` | OBL | RT | B, H, S-02, I | NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, PT-LOC-01 | DEP | PLANNED — NOT RUN |
| `VC18-488` | `22-§16-10` | OBL | RT | B, H, S-02, I | NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, PT-LOC-01 | DEP | PLANNED — NOT RUN |
| `VC18-489` | `22-§16-11` | RULE | INSP | MC, S-02, I | NT-PRV-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, PT-LOC-01 | DEP | PLANNED — NOT RUN |
| `VC18-490` | `22-§29-9` | SCN | RT, NEG | B, H, S-01, S-02, I | NT-BIZ-01, NT-PRV-01, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-491` | `17-§4-15` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-03, VN18-15, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-492` | `17-§9-1` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-03, VN18-15, VN18-16, VN18-17, PT-VW-01 | DEP | PLANNED — NOT RUN |
| `VC18-493` | `17-§9-2` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-03, VN18-15, VN18-16, VN18-17, PT-VW-01 | DEP | PLANNED — NOT RUN |
| `VC18-494` | `17-§9-3` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-03, VN18-15, VN18-16, VN18-17, PT-VW-01 | DEP | PLANNED — NOT RUN |
| `VC18-495` | `17-§9-4` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-03, VN18-15, VN18-16, VN18-17, PT-VW-01 | DEP | PLANNED — NOT RUN |
| `VC18-496` | `17-§9-5` | OBL | RT | B, H, I | NT-BIZ-01, NT-PAY-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-03, VN18-16, VN18-17, PT-VW-01 | DEP | PLANNED — NOT RUN |
| `VC18-497` | `17-§9-6` | OBL | RT, NEG | B, H, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-03, VN18-15, VN18-16, VN18-17, PT-VW-01 | DEP | PLANNED — NOT RUN |
| `VC18-498` | `17-§9-7` | NEG | NEG | B, S-01, I | NT-BIZ-01, NT-EMP-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-01, VN18-03, VN18-15, VN18-16, PT-VW-01 | DEP | PLANNED — NOT RUN |
| `VC18-499` | `17-§10-1` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-03, VN18-15, VN18-16, VN18-17, PT-VW-01 | DEP | PLANNED — NOT RUN |
| `VC18-500` | `17-§10-2` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-03, VN18-15, VN18-16, VN18-17, PT-VW-01 | DEP | PLANNED — NOT RUN |
| `VC18-501` | `17-§10-3` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-03, VN18-15, VN18-16, VN18-17, PT-VW-01 | DEP | PLANNED — NOT RUN |
| `VC18-502` | `17-§10-4` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-03, VN18-15, VN18-16, VN18-17, PT-VW-01 | DEP | PLANNED — NOT RUN |
| `VC18-503` | `17-§10-5` | CONS | RT | B, H, I | NT-BIZ-01, NT-ROLE-01, NT-SET-01, VN18-03, VN18-15, VN18-16, PT-VW-01 | DEP | PLANNED — NOT RUN |
| `VC18-504` | `17-§10-6` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-03, VN18-15, VN18-16, VN18-17, PT-VW-01 | DEP | PLANNED — NOT RUN |
| `VC18-505` | `17-§10-7` | NEG | NEG | B, S-01, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, NT-SET-01, VN18-01, VN18-03, VN18-15, VN18-16, PT-VW-01 | DEP | PLANNED — NOT RUN |
| `VC18-506` | `24-§18-4` | SCN | RT | B, H, I | VN18-22 | DEP | PLANNED — NOT RUN |
| `VC18-507` | `24-§21-6` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-13, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-508` | `9-§12-7` | RULE | EXP | H, H-L, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, RS18-E28 | DEP | PLANNED — NOT RUN |
| `VC18-509` | `9-§12-9` | RULE | EXP | H, H-L, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, RS18-E29 | DEP | PLANNED — NOT RUN |
| `VC18-510` | `9-§12-12` | RULE | EXP | H, H-L, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, RS18-E30 | DEP | PLANNED — NOT RUN |
| `VC18-511` | `10-§13-5` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-512` | `10-§13-7` | OBL | RT, FRV-B | B, H, F, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-13, VN18-16, VN18-17, RS18-FRV-B | DEP | PLANNED — NOT RUN |
| `VC18-513` | `12-§4-4` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-514` | `12-§7-7` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-515` | `3-§9-3` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-516` | `3-§11-6` | OBL | NEG | B, S-01, I | NT-ASG-01, NT-BIZ-01, NT-FIN-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-517` | `3-§15-7` | RULE | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-518` | `3-§15-12` | RULE | IDEM, INSP | B, MC, I | NT-COD-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-23 | DTX, DEP | PLANNED — NOT RUN |
| `VC18-519` | `3-§15-13` | RULE | INSP | MC, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03 | DEP | PLANNED — NOT RUN |
| `VC18-520` | `5-§4-11` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17, VN18-22 | DEP | PLANNED — NOT RUN |
| `VC18-521` | `5-§4-12` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-522` | `5-§4-13` | OBL | RT | B, H, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-523` | `5-§6-10` | OBL | RT | B, H, I | NT-COD-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-524` | `5-§6-12` | OBL | RT | B, H, I | NT-CAB-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-525` | `5-§7-5` | SCN | RT | B, H, I | VN18-22 | DEP | PLANNED — NOT RUN |
| `VC18-526` | `5-§7-6` | SCN | RT | B, H, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-527` | `5-§7-7` | SCN | RT | B, H, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-528` | `BP-§10.3-S2` | OBL | RT | B, H, I | NT-BIZ-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-03, VN18-16, VN18-17 | DEP | PLANNED — NOT RUN |
| `VC18-529` | `BP-§5.5-p1` | RULE | GATE | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-530` | `BP-§5.5-p2` | RULE | GATE | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-531` | `BP-§10.7-W` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-532` | `BP-§10.7-A1` | WORK | RT | B, H, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-533` | `BP-§10.7-A2` | WORK | RT | B, H, I | VN18-04 | DEP | PLANNED — NOT RUN |
| `VC18-534` | `BP-§10.7-A3` | WORK | RT | B, H, S-03, S-01, I | NT-STK-01, NT-STK-04, VN18-19, PT-STK-01 | STK-BLOCKED, DEP | PLANNED — NOT RUN |
| `VC18-535` | `BP-§10.7-A4` | WORK | RT | B, H, S-03, S-01, I | NT-STK-01, NT-STK-04, VN18-05, VN18-19 | STK-BLOCKED, DEP | PLANNED — NOT RUN |
| `VC18-536` | `BP-§10.7-A5` | WORK | RT | B, H, I | VN18-08 | DEP | PLANNED — NOT RUN |
| `VC18-537` | `BP-§10.7-A6` | WORK | RT | B, H, I | NT-ASG-01, NT-EXT-01, NT-EXT-02, NT-EXT-03, NT-EXT-04, NT-EXT-05, NT-EXT-06, NT-FRL-01 | ACT, DEP | PLANNED — NOT RUN |
| `VC18-538` | `BP-§10.7-A7` | WORK | RT | B, H, I | VN18-09 | DEP | PLANNED — NOT RUN |
| `VC18-539` | `BP-§10.7-A8` | NEG | NEG | B, S-01, S-02, I | NT-PRV-03, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-540` | `BP-§10.7-A9` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01, VN18-09 | DEP | PLANNED — NOT RUN |
| `VC18-541` | `BP-§10.7-A10` | WORK | RT | B, H, I | NT-COD-01 | DEP | PLANNED — NOT RUN |
| `VC18-542` | `BP-§10.7-A11` | NEG | NEG | B, S-01, I | NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-543` | `BP-§10.7-AS1` | FRV | FRV-A | F, I | PT-ORD-01, RS18-FRV-A | DEP | PLANNED — NOT RUN |
| `VC18-544` | `BP-§10.7-B1` | WORK | RT | B, H, I | NT-ROLE-01 | DEP | PLANNED — NOT RUN |
| `VC18-545` | `BP-§10.7-B2` | WORK | RT | B, H, I | VN18-13 | DEP | PLANNED — NOT RUN |
| `VC18-546` | `BP-§10.7-B3` | WORK | RT | B, H, I | NT-EMP-01, NT-FIN-01, NT-HR-01 | DEP | PLANNED — NOT RUN |
| `VC18-547` | `BP-§10.7-B4` | NEG | NEG | B, S-01, S-02, I | NT-PRV-03, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-548` | `BP-§10.7-B5` | WORK | RT | B, H, I | VN18-13 | DEP | PLANNED — NOT RUN |
| `VC18-549` | `BP-§10.7-B6` | WORK | RT | B, H, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-550` | `BP-§10.7-B7` | NEG | NEG | B, S-01, I | NT-PAY-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-551` | `BP-§10.7-B8` | NEG | NEG | B, S-01, I | NT-PAY-01, NT-RLS-01, NT-RLS-02, NT-RLS-03, NT-ROLE-01, VN18-01 | DEP | PLANNED — NOT RUN |
| `VC18-552` | `BP-§10.7-BS1` | FRV | FRV-B | F, I | PT-ATT-01, RS18-FRV-B | DEP | PLANNED — NOT RUN |
| `VC18-553` | `BP-§10.7-C1` | WORK | RT | B, H, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-554` | `BP-§10.7-C2` | WORK | RT | B, H, I | NT-CMP-01, VN18-20 | DEP | PLANNED — NOT RUN |
| `VC18-555` | `BP-§10.7-C3` | WORK | RT | B, H, I | NT-CAB-01 | DEP | PLANNED — NOT RUN |
| `VC18-556` | `BP-§10.7-C4` | WORK | RT | B, H, I | NT-CMP-01 | DEP | PLANNED — NOT RUN |
| `VC18-557` | `BP-§10.7-C5` | WORK | RT | B, H, I | VN18-12 | DEP | PLANNED — NOT RUN |
| `VC18-558` | `BP-§10.7-CS1` | FRV | FRV-C | F, I | PT-CMP-01, RS18-FRV-C | DEP | PLANNED — NOT RUN |
| `VC18-559` | `BP-§10.7-X` | EXP | EXP | H, H-L, I | RS18-E31 | DEP | PLANNED — NOT RUN |
| `VC18-560` | `BP-§11-p1` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-561` | `BP-§11-b1` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-562` | `BP-§11-b2` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-563` | `BP-§11-b3` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-564` | `BP-§11-b4` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-565` | `BP-§11-b5` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-566` | `BP-§11-b6` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-567` | `BP-§11-b7` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-568` | `BP-§11-b9` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-569` | `BP-§11-p3` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-570` | `BP-§11-p4` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-571` | `BP-§11-p5` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-572` | `BP-§13-p1` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-573` | `BP-§13-T` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-574` | `BP-§13-b1` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-575` | `BP-§13-b2` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-576` | `BP-§13-b3` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-577` | `BP-§13-b4` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-578` | `BP-§13-b5` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-579` | `BP-§13-b6` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-580` | `BP-§13-b7` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-581` | `BP-§13-b8` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-582` | `BP-§13-b9` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-583` | `BP-§13-b10` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-584` | `BP-§15-p2` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-585` | `BP-§15-p3` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-586` | `BP-§16-p2` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-587` | `GPCV-R1` | CONS | GATE | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-588` | `GPCV-R6` | CONS | GATE | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-589` | `GPCV-R16` | CONS | GATE | MC, I | Row item only | DEP | PLANNED — NOT RUN |
| `VC18-590` | `GPCV-§8-3` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-591` | `GPCV-§8-4` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |
| `VC18-592` | `GPCV-§8-5` | RULE | INSP | MC, I | NT-RLS-01, NT-RLS-02, NT-RLS-03 | DEP | PLANNED — NOT RUN |

## 10. Stage 12 Completeness Gate (mechanical comparison)

| Check | Result |
|---|---|
| `IN SCOPE` rows with a row item | 592 / 592 |
| Items with an evidence class and a verifier | 592 / 592 |
| Items for rows outside `IN SCOPE` | 0 |
| EIS negative-test identifiers preserved | 44 / 44, each mapped to at least one row |
| Negative-seed or `NEG`-kind rows with a named negative-path check | 122 / 122 |
| Permission, isolation, revocation, denial, audit and rollback requirements with a named check | 76 / 76 |
| Experience rows with a named runtime scenario | 31 / 31 |
| Rows with a Founder-reserved (`FRV`) seed mapped to a Founder scenario | 4 / 4 |
| `ALREADY DEMONSTRATED` rows mapped to regression | 0 / 0 |
| Stock-dependent rows held, none omitted | 12 |
| Items executed or reported as passing | 0 |

Documentary set checks only; nothing was run.

## 11. Verification-Stage Ownership

| Stage | Owner | Uses |
|---|---|---|
| 15–16 | Authorized builder | Automated items (`B`); Builder Completion Report status per assigned row |
| 17 | Human runtime verifier | `H`, `H-L` items and runtime scenarios; Founder-reserved scenarios by the Founder |
| 18 | Mission Control | Runtime review |
| 19 | Independent verifier | Every row (`I`), reconstructing the inventory independently, including the five `S11-L443-*` facets |
| Specialists | SA-01, SA-02, SA-03, legal | `S-01`, `S-02`, `S-03`, `L` items |

## 12. Status

`DRAFT — MISSION CONTROL REVIEW REQUIRED — NO IMPLEMENTATION AUTHORIZATION`. Stage 12 draft for MC41 Stage 13 review. All items are PLANNED — NOT RUN. No implementation, code, SQL, migration, grant, provider activation, deployment or test execution is authorized or has occurred. Stage 13 package lock and the Implementation Authorization are separate later decisions.
