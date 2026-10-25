# SB-P-1.18 — Stage 1 FCTM Opening and Source-Coverage Proposal

**Status:** `DRAFT — NOT AUTHORIZED — PROPOSAL FOR MISSION CONTROL TO OPEN THE FCTM (Source 18 §3.2 item 1)`
**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Prepared by:** Claude Code, proposed Definition / Intake Actor (not appointed)
**Intake baseline:** `main@06855599cd83862cc5a4bcaf25d4aeb8a159a852`
**Companion:** `01-stage1-intake-source-scope-and-actor-assessment.md`
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

**FCTM NOT OPENED, NOT POPULATED, NOT APPROVED.** This file proposes the scaffold, the source manifest and the obligation-inventory pointers. It contains **no row dispositions**. The "expected treatment" column records the Stage 1 reading for Stage 2 to test. It is not a disposition, and it neither changes a classification nor assigns a mission. Population is Stage 2 work under a separate authorization.

## 1. Proposed FCTM location and row schema

- Proposed path for the populated matrix (Stage 2): `communication/missions/SB-P-1.18/claude-code/NN-stage2-populated-fctm.md`.
- Row ID: `<contract number>-§<section>-<ordinal>`. Build Plan rows use `BP-§<section>-<ordinal>` and scenarios use `BP-§10.7-<A|B|C>S1`, following the predecessor convention.
- Columns, aligned with the canonical SB-P-1.15 to 1.17 matrices:

| Column | Content |
|---|---|
| Row ID | As above |
| Source | `C<n>@<blob8>` or `BP@9dfdd924` |
| Pointer | Section and bullet pointer only, with no requirement text (§3.2 item 7) |
| Kind | `OBL`, `SCN`, `RULE`, `NEG` (must-not-appear), `CONS` (consumer), `SEC` (whole-section) |
| Build commitment | Verbatim from source |
| Commercial | `ADD-ON` (Ledger + Manager) or the core class |
| Assigned mission | From an approved assignment source |
| Disposition | One Source 18 §3.2 item 3 value |
| Dependency | §4.3 codes of the companion file |
| Citation | Assignment or disposition source |
| Founder Decision ID | Required whenever a row differs from the approved source |
| Workstream | `WS-A`, `WS-B`, `WS-C`, `WS-D`, `WS-V` |

## 2. Source manifest at intake baseline

| Source | Path | Git blob | Bytes | SHA-256 |
|---|---|---|---|---|
| Contract 01 | `docs/phase-1-mission-blueprint/smart-business-features/01_Smart_Order_and_Delivery_Assistant.md` | `b392c8cb851683ea7bba1d6351c565a4c0c555ed` | 17861 | `b4904de018168970900eb67a7ebe6ce144801ebf993b7427222e770fd5dbc574` |
| Contract 06 | `…/06_Staff_and_HR_Assistant.md` | `ebacd1838ec709241c07d3ab911377b6284b90d2` | 6905 | `2846a87ae45a432a6eb2be919aab9b74d662b019a3d012b735dc6838f49c5d08` |
| Contract 16 | `…/16_Compliance_Shield.md` | `420269d8407485fc659072242fff03cd27f023e4` | 9801 | `44f01659b694ea370b9ddad1f77ea378b846d2ac27599a3f477abf02e0962505` |
| Contract 22 (§16, §29-9 and touched sections) | `…/22_Shared_Product_Foundations.md` | `61e1bb91970be410e9daf1d3b80875c35f29db04` | 22055 | `a03ef7a05cfc00a6b254748217599549c817c99f293010b83990348c894808b8` |
| Build Plan | `…/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` | 47777 | `418911d3387df869ede51e7cfede4031442dfe85e9eb81750afedc8c3dc76538` |
| GPCV | `…/00_Global_Product_Completion_View.md` | `ee76d920146008056781fced41be938675c4be0b` | 36281 | `cd9d2728a2b273e8c58194f59f15e0759d66614517f7c2cbac431865c17453dd` |

Touched delegate blobs (first 12 characters): C02 `53635557fb29`, C03 `d8c26c073b66`, C04 `ce940d258b03`, C05 `80ac648e6764`, C07 `65ad91b202de`, C08 `973977801142`, C09 `649c55f396e3`, C10 `5c145ed72677`, C11 `e802745a93c3`, C12 `6d48feff8f9f`, C15 `632f34026ee1`, C17 `7943f74a88c2`, C18 `6b96b10aee35`, C19 `94aa6f2422a3`, C21 `f4a05d5c3aa7`, C23 `2430e1c61919`, C24 `0c1dcbb21a3d`, C25 `406ce0892451`. The blobs cited inside the inherited predecessor rows match these values.

## 3. Obligation-inventory pointers (Source 18 §3.2 item 6)

This is a list of pointers taken from the source text and independent of the matrix. It restates no requirement. Stage 2 expands every in-scope or mixed section to obligation level.

### 3.1 Contract 01 — Smart Order & Delivery (31 numbered sections, 14 numbered acceptance scenarios)

| Sections | Stage 1 expected treatment (to be tested) |
|---|---|
| §§1–3, 5 (Owner, Manager, Employee, Delivery Staff, Customer), 6, 8 (customer-, merchant- and document-initiated), 9, 10, 11, 12, 13, 15 (including the customer-silence rule), 16, 17, 19, 20, 21, 22, 23, 24, 25, 31 | `IN SCOPE` at obligation level (WS-A). §§5, 6, 21 and 25 consume `D12`. §§8–9 consume `D13`/`D14`. §16 consumes `D16`/`DTX`/`DPAY`. §17 consumes `D15`/`DNTF` (U-01) |
| §4 | `NEG` rows (marketplace must not appear) plus the `SEPARATE PRODUCT` / Founder-decision boundary |
| §7 | Mixed: native obligations versus the out-of-app channel (U-01) |
| §14 | Mixed: point-in-time and purpose-limited rows `IN SCOPE` (WS-A with WS-D); continuous default `NEG`; opt-in live tracking (U-02) |
| §18 | WhatsApp adapter rows: expected `ASSIGNED TO LATER MISSION` SB-P-1.20 (Build Plan §9, §10.9). The shared-truth rule stays `IN SCOPE` |
| §§26.1–26.14 | 14 `SCN` rows. Scenario 12 has a WhatsApp leg (SB-P-1.20) and a native leg |
| §27 | Dependency pointers (no obligations beyond the §4.3 codes) |
| §28 | Superseded behaviour as `NEG` rows |
| §29 | Provenance; one section-level row |
| §30 | Price: `UNRESOLVED FOUNDER DECISION` (BP §15 item 5, off critical path). Marketplace: BP §15 item 8 |

### 3.2 Contract 06 — Staff / HR (17 numbered sections, 10 acceptance scenarios)

The §14 scenarios are bulleted, not numbered. Each bullet is separately verifiable and needs its own `SCN` row (`6-§14-1` to `6-§14-10`).

| Sections | Stage 1 expected treatment |
|---|---|
| §§1–2, 4 (Owner, Manager, Employee), 6, 7, 8, 9, 10 (native leg), 11, 12, 13, 17 | `IN SCOPE` (WS-B), with §11 delegations |
| §3 | Mixed: capabilities `IN SCOPE`; KYC sentence → `UNRESOLVED FOUNDER DECISION` (BP §15 item 7, off critical path); "overtime" absent (U-05) |
| §5 | Attendance events `IN SCOPE`; location rule shared with WS-D; mechanism (U-04); continuous tracking `NEG` |
| §10 | WhatsApp leg expected SB-P-1.20 |
| §15 | `NEG` rows |
| §16 | Dependency pointers |

### 3.3 Contract 16 — Compliance Shield (23 numbered sections, 10 numbered acceptance scenarios)

| Sections | Stage 1 expected treatment |
|---|---|
| §§1–10 (Owner, Manager, Employee, Support/Platform), 12, 13, 14, 16, 17, 18, 23 | `IN SCOPE` (WS-C). §§5–6 consume `D14`/`D13`. §§7–8 and §14 consume `D15`/`DSCH`. §13 interfaces with SB-P-1.15. §10 Support/Platform consumes 21-§14 and SB-P-1.19 |
| §11 | Native Workspace `IN SCOPE`; WhatsApp leg expected SB-P-1.20 |
| §15 | Legal-boundary obligations plus `NEG` (no legal-authority claims) |
| §19, §21 | `NEG` and superseded rows |
| §§20.1–20.10 | 10 `SCN` rows. Scenario 7 has a WhatsApp leg (SB-P-1.20) |
| §22 | Provenance; one section-level row |

### 3.4 Contract 22 — Location Foundation (inherited)

§16 rows 22-§16-1 and 22-§16-3 to 22-§16-7 (`FPDR-2`, `FPDR-3`, attendance and delivery instances only), 22-§16-2 as `NEG` in SB-P-1.12, and 22-§29-9. These are reproduced from the SB-P-1.12 FCTM (`1650ff95`) and rebuilt against `C22@61e1bb91`.

### 3.5 Build Plan rows

| Pointer | Expected rows |
|---|---|
| §10.7 A | 11 outcome rows, 1 scenario row (`BP-§10.7-AS1`) |
| §10.7 B | 8 outcome rows, 1 scenario row (`BP-§10.7-BS1`) |
| §10.7 C | 5 outcome rows, 1 scenario row (`BP-§10.7-CS1`) |
| §10.7 exit principle | 1 experience row |
| §5.5 | Pilot gate (U-09) |
| §9 assignment lock; §11 cumulative dependency rule; §13 Experience Verification Matrix | Rule rows |
| §15 items 3, 5, 6, 7, 8 | `UNRESOLVED FOUNDER DECISION` rows with a critical-path determination |
| §16 | One `NEG` row per applicable rejection: marketplace in Order & Delivery; continuous staff GPS by default; automated wage punishment; AI accusation of employees or customers; customer silence invalidating delivery; duplicate channel memory or permissions; separate AI per feature or channel |
| BP-§10.3-S2 | Inherited (shared with SB-P-1.17) |

### 3.6 Inherited rows

All rows in the companion `01-…` §3.3 are imported by row ID, with the source FCTM path and blob cited and their final predecessor status preserved (Source 18 §3.2 item 9). None can be `ALREADY DEMONSTRATED`, because no predecessor is accepted.

## 4. Seed counts (not final row counts)

| Contract | Numbered sections | Acceptance scenarios |
|---|---|---|
| 01 | 31 | 14 |
| 06 | 17 | 10 (bulleted) |
| 16 | 23 | 10 |
| Build Plan §10.7 | — | 3 Founder runtime scenarios |

That gives **34 contract acceptance-scenario seeds plus 3 Founder scenarios**, before 33 unique inherited rows (1.12: 9; 1.13: 9; 1.14: 14; 1.17: 1 new; the 1.16 rows duplicate these) and the obligation-level expansion. Source 18 §3.2 item 12 requires the Stage 2 record to state the actual row count and effort per contract.

## 5. Completeness-test preparation

Checks (a) to (c) will run against §3 of this file, kept as the obligation inventory in the verification record. Mission Control tests it against source text at Stages 5 and 8. The Stage 19 verifier takes its own inventory.
