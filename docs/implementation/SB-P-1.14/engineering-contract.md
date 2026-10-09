# SB-P-1.14 — Engineering Contract

```text
STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED
PRODUCT BLUEPRINT: APPROVED — LOCKED (UNCHANGED)
EIS: APPROVED — LOCKED (UNCHANGED)
IMPLEMENTATION PACKAGE: DRAFT — STAGE 13 REVIEW REQUIRED
IMPLEMENTATION: NOT AUTHORIZED
SCHEMA / SQL / MIGRATIONS: NOT AUTHORIZED
AI PROVIDER / STORAGE PROVIDER SELECTION OR ACTIVATION: NOT AUTHORIZED
PRODUCTION MUTATION / DELIVERY: NOT AUTHORIZED
```

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.14 |
| Mission Name | Business Memory, Documents & Durable Media |
| Document | Engineering Contract (Source 18 Stage 12; package template Phase A) |
| Package set | `engineering-contract.md`, `lovable-build-prompt.md`, `verification-checklist.md`, authored and reviewed as one set |
| Version | 0.1 |
| Status | `DRAFT — MISSION CONTROL REVIEW REQUIRED` |
| Author | Claude Code — Source 18 Stage 12 initial implementation package owner |
| Authorizing record | SB-P-1.14-MC-21 (`mission-control/38-stage11-eis-lock-disposition.md`, blob `ce13f8a3`, §4), canonical through PR #844; Stage 12 activation by Mission Control against `main@fe24264fbe01fed7abe5f7032b6eff2fc2b5825d` |
| Canonical baseline | `main@fe24264fbe01fed7abe5f7032b6eff2fc2b5825d` |
| Date | 2026-10-09 |
| Next gate | Source 18 Stage 13 — Implementation Package Review by Mission Control; Implementation Authorization is a separate later disposition |

## 2. Purpose and Authority

This contract translates the locked SB-P-1.14 Product Blueprint and the locked EIS into builder-facing engineering obligations. It adds no Product Truth. Requirement text lives in the source contracts; the EIS fixes the engineering mechanisms; this contract states what must be built, in which workstream, under which hold and against which verification items.

Order of authority (package template Section 4): Lighthouse Constitution; Master System Manifesto; locked Product Blueprint with the Founder Product Decision Records it applies (`FPDR-1` to `FPDR-4`); locked EIS; approved architecture and security frameworks; this Engineering Contract once locked; the Build Prompt once locked; the Verification Checklist once locked; explicit Mission Control implementation and correction authorizations; builder interpretation. If any statement here could be read as new behaviour, the higher source prevails and this contract is in error.

**Package approval is not implementation authorization.** This draft authorizes nothing. It creates no code, schema, SQL, migration, provider or storage setting or production change, and it changes no FCTM disposition, build commitment, commercial classification or mission assignment. Describing a mechanism here is not evidence that it exists: SB-P-1.12 and SB-P-1.13 are specified and locked but not implemented (Implementation Authorization `WITHHELD` for both), and every dependent row stays held (Phase 1 operating pattern §6).

## 3. Locked References

| Reference | Path | Identity |
|---|---|---|
| Locked Product Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.14.md` | blob `256828d2c26fba7dab6f52975efb8b574b1563f1` (`APPROVED — LOCKED`) |
| Locked EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md` | blob `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3` (`APPROVED — LOCKED`, 83 requirements; accepted Stage 10 substance blob `261ca7ac`) |
| Canonical FCTM | `communication/missions/SB-P-1.14/claude-code/02-stage2-populated-fctm.md` | blob `01e9856aca0afdb1267230a1932fe34054449a4b` (766 rows; 563 `IN SCOPE`) |
| Founder decisions `FPDR-1` to `FPDR-3` | `communication/missions/SB-P-1.14/founder/02-stage3-founder-product-decision-record.md` | blob `9717b29dbe08b6d115f512a90450c528d5212773` |
| Founder decision `FPDR-4` | `communication/missions/SB-P-1.14/founder/03-post-stage6-founder-product-decision-record.md` | blob `3f36c06da8a7327766ada44248ce2953cd8e3a2c` |
| Founder Stage 8 approval | `communication/missions/SB-P-1.14/founder/04-stage8-blueprint-lock-approval.md` | blob `50a5e3a48d24791a3c8bc9608073e38cc5e81141` |
| Founder restorative T7 Security approval | `communication/missions/SB-P-1.14/founder/05-stage10-t7-security-refinement-approval.md` | blob `7e41d4835dc9fa5a8b62619049a52584eb2a364e` |
| Stage 10 acceptance (MC-20) | `communication/missions/SB-P-1.14/mission-control/37-stage10-final-completeness-traceability-review-and-acceptance.md` | blob `944b0fd2f6d3828ddf4da51d4d8c33c8905ad3e8` |
| Stage 11 lock and Stage 12 authority (MC-21) | `communication/missions/SB-P-1.14/mission-control/38-stage11-eis-lock-disposition.md` | blob `ce13f8a3bc3320eff233a669bb3a354ae70fe5f2` |
| SB-P-1.12 EIS (locked; consumed surfaces) | `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` | blob `c444f7509477d0e8b997af538440d93bf2ca4d72` |
| SB-P-1.13 EIS (locked; consumed surfaces) | `docs/phase-1-mission-blueprint/implementation/SB-P-1.13-EIS.md` | blob `9a1e723d4874011b6870a680f2a2080154537c30` |
| Source 18 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | blob `0945bda60a93c99909c3b7a247d5427ebe256011`; Stage 12 and Section 3.2 |
| Package template | `docs/implementation/templates/SB-P-Implementation-and-Evidence-Workflow-Template.md` | blob `d7209a380e5b171955f192d75a2a97b929828849`; Phases A to C |
| Phase 1 operating pattern | `mission-control/SB-P-Phase 1 operating pattern.md` | blob `39b1bc366d7a2e31c80dc22c63aab007a3f5afd6` |
| Migration governance | `docs/migration/README.md` | blob `810038e45703be92bcee3b31eaa3d4f9181db5da` |

## 4. Preserved Holds and Gates

Describing a mechanism does not satisfy a hold (EIS Section 27). Row-level holds are the Blueprint Section 20.6 remaining-hold codes, shown per row in Section 11.

| Hold or gate | Status carried by this package | Effect |
|---|---|---|
| `D12` / H-D12 | 225 rows; SPECIFICATION AVAILABLE, IMPLEMENTATION NOT COMPLETE, EVIDENCE NOT COMPLETE | `EC14-HOLD-01`: no obligation mapped to a `D12` row is built until the consumed SB-P-1.12 workstreams are implemented, verified and accepted for SB-P-1.14 (SB-P-1.12 EIS-DEP-01). No authority table, single-ownership lookup or temporary parallel authorization |
| `D13` / H-D13 | 92 rows; SPECIFICATION AVAILABLE, IMPLEMENTATION NOT COMPLETE, EVIDENCE NOT COMPLETE | `EC14-HOLD-02`: no obligation mapped to a `D13` row is built until the consumed SB-P-1.13 surfaces (Workspace, AI gateway, governed command, attachment handoff) are implemented, verified and accepted |
| `DTX` / H-DTX | 42 rows; held | `EC14-HOLD-03`: held until the coordinated SB-P-1.12 WS-A3 / SB-P-1.13 EIS13-CMD-02 transactions-family cut-over is complete and effective-access verification shows one protected write path. `EC14-CMD-01` to `-03` and `EC14-MIG-01` are delivered inside that cut-over family under a separately authorized migration mission |
| AI provider evidence / H-PROV (`DAI`) | 97 rows | `EC14-PRV-01`, `EC14-HOLD-09`: no merchant document reaches an AI provider until evidence is accepted for the versioned SB-P-1.13 configuration identity; a material change blocks merchant-document flow until re-verification. Provider selection, purchase and activation: NOT AUTHORIZED |
| Storage activation / H-STO (`DR2`) | 124 rows | `EC14-PRV-02`, `EC14-HOLD-08`: no merchant object is stored in R2 or any durable object store until a separately authorized `DR2` evidence pack is accepted. Selection, purchase, configuration and activation: NOT AUTHORIZED |
| Retention basis / H-LEG (`DLEG`, `DUF6`) | 11 rows | `EC14-RET-03`, `EC14-HOLD-10`: record classes reference the SB-P-1.12 registry; no duration is coded |
| Later missions / H-LATER (`D15`, `D17`, `D19`, `D20`) | 13 rows | `EC14-HOLD-04`, `EC14-HOLD-11`: only the SB-P-1.14 slice is built |
| Birth-safe objects / H-BIRTH | 60 rows | `EC14-SEC-02`: object-type-specific hardening in one migration boundary; effective-access inventory under `EC14-VER-01` |
| Revocation-safe retrieval and export / H-REVOKE | 35 rows | `EC14-RTV-01`: server-mediated delivery by default; any non-zero post-revocation window returns to Mission Control as a T3 candidate |
| Privileged-handler binding / H-PRIV | 26 rows | `EC14-STO-03`: `EIS-ISO-04` binding; maintenance purpose, server location, scheduled-job context or `service_role` is never authority |
| Financial integrity / H-FIN | 48 rows | `EC14-HOLD-05`: distinct measures, repayment-target revalidation, atomic correction, direct-mutation closure and opening-stock rules accepted only with evidence |
| Command idempotency / unknown outcome / H-IDEM | 17 rows | `EC14-IDM-01` to `-03` |
| `FPDR-3` material fingerprint / H-FPRINT | 8 rows | `EC14-CNF-03`, `EC14-HOLD-07` |
| UDI safety / H-UDI | 116 rows | `EC14-HOLD-06`: deterministic routing, instruction isolation, non-executing PDF, formula and minimization evidence |
| Layered failure and ingest states / H-STATE | 47 rows | `EC14-FAIL-01` |
| `FPDR-2` discard mechanism / H-DISCARD | 10 rows | `EC14-RET-01`: returns to Mission Control (conditional T8) if no compliant hold-aware mechanism exists |
| Migration package and rehearsal / H-MIG | 90 rows | `EC14-MIG-05`: rehearsal on the isolated test project before any production authorization |
| Runtime and acceptance evidence | 67 acceptance and experience rows | `EC14-VER-02`: Stage 17 and Stage 19 evidence; Experience Verification Matrix |
| `UNVERIFIED — ACCESS REQUIRED` register | 20 facts (EIS Section 28) | None is inferred from repository files or documentary wording; each needs separately authorized evidence |
| Migration execution | NOT AUTHORIZED | Each migration needs a separately authorized migration mission under `docs/migration/README.md`, rehearsed on the isolated test project |
| GitHub Actions | No runs since 2026-09-30 | A missing run or status is reported as missing, never as a pass |

## 5. Authorized Scope and Exclusions

### 5.1 In scope

All 563 `IN SCOPE` FCTM rows. Each maps to at least one obligation in Section 11. No row is omitted, deferred, narrowed or reclassified. Rows whose realization is blocked, held, evidence-gated or dependency-gated stay `IN SCOPE` and carry the reason.

### 5.2 Not authorized by this package

- application implementation or any code change;
- creating, editing or executing schema, SQL or migrations, including the transactions-family cut-over;
- Lovable implementation execution or publication;
- AI provider or storage provider (Cloudflare R2, AWS) selection, purchase, account creation, configuration or activation, and sending merchant data or documents to any provider;
- Supabase, R2 or AWS mutation, secrets, environment, production mutation and delivery;
- satisfying or waiving `D12`, `D13`, `DTX`, provider, storage, retention or any other hold;
- modifying the locked Blueprint, the locked EIS, the canonical FCTM or any Founder Product Decision Record.

### 5.3 Still committed, not in this mission

These FCTM rows keep their disposition; they are listed by row in Blueprint Section 11 and the FCTM. This contract does not restate them and builds none of them.

| Disposition | Receiving mission or reason | FCTM rows |
|---|---|---|
| `ASSIGNED TO LATER MISSION` | `SB-P-1.15` | 10 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.16` | 6 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.16 / SB-P-1.17 / SB-P-1.18` | 1 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.17` | 7 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.17 / SB-P-1.18` | 3 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.18` | 10 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.19` | 1 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.20` | 7 |
| `DELEGATED` | `SB-P-1.12` | 52 |
| `DELEGATED` | `SB-P-1.13` | 21 |
| `DELEGATED` | `SB-P-1.15` | 2 |
| `DELEGATED` | `SB-P-1.16` | 10 |
| `DELEGATED` | `SB-P-1.17` | 4 |
| `DELEGATED` | `SB-P-1.18` | 6 |
| `DELEGATED` | `SB-P-1.19` | 6 |
| `DELEGATED` | `SB-P-1.20` | 3 |
| `OUT OF BUILD SCOPE` | Build Plan rejections preserved verbatim; must-not-appear checks (Verification Checklist `VC-PT-06`) | 20 |
| `NOT APPLICABLE` | Narrative, principle, provenance or cross-reference sections (FCTM citations) | 32 |
| `UNRESOLVED FOUNDER DECISION` | SB-P-1.19 long-term retention duration; not on this mission's critical path (Blueprint Section 11.5) | 2 |
| **Total not `IN SCOPE`** | | **203** |

## 6. Obligation Types

Each obligation `EC14-<suffix>` realizes exactly one EIS requirement `EIS14-<suffix>` as the locked EIS specifies it, in the EIS section named. It carries one type.

| Type | Meaning |
|---|---|
| `BUILD` | Implement exactly as the locked EIS specifies, under a future Implementation Authorization and after the row's holds are satisfied. |
| `BUILD — EVIDENCE GATED` | Implement the mechanism; the row cannot be relied on or demonstrated until the named evidence exists (runtime fit, provider lifecycle and hold-exclusion capability, durability facts). |
| `BUILD — PROVIDER GATED` | Implement behind the SB-P-1.13 gateway or the storage provider adapter; no merchant data or object flows until `EC14-PRV-01` or `EC14-PRV-02` evidence is accepted and activation is separately authorized. |
| `BUILD — MIGRATION / CUT-OVER GATED` | Implement only inside a separately authorized migration mission and, for the transactions family, only as part of the coordinated SB-P-1.12 WS-A3 / SB-P-1.13 EIS13-CMD-02 cut-over. |
| `BUILD — DEPENDENCY GATED` | Build only the SB-P-1.14 slice; the dependent portion waits for the owning mission or validated policy. |
| `BUILD + EVIDENCE GATE` | Build the enforcement mechanism (configuration identity, refusal without accepted evidence, disable switch); the gate opens only on accepted, separately authorized evidence. |
| `MIGRATION-DESIGN` | Fixes expected objects, their access contract, ordering, rollback, forward-fix and rehearsal. Writing or executing any migration needs an explicit migration mission under `docs/migration/README.md`. |
| `VERIFICATION` | Defines verification architecture and acceptance evidence. Adds no product behaviour. |
| `GOVERNANCE` | Applies to every builder workstream; constrains how behaviour is built and adds none of its own. |
| `GATE` | Not a builder obligation: no builder builds anything for it. Mission Control enforces it through dependency evidence before dependent obligations are built or demonstrated. |

## 7. Engineering Obligations

Verification references point to the Verification Checklist: named negative-path checks `NP-*`, named runtime scenarios `RS-*` and the per-row items `VC-R-*`. Row lists are the EIS Section 29 requirement-to-row mapping, unchanged; obligations selected by a hold, dependency or Founder-decision rule show the count and rule. Phase labels order work and authorize none of it (Section 13, PQ-3).

### 7.1 Target Architecture Overview (EIS Section 6)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-ARC-01` | `EIS14-ARC-01` | Module boundaries behind `requireSupabaseAuth`; no module holds its own permission logic | `GOVERNANCE` | Cross-cutting | All | `UNIT`, `REPO`, `DOC` | Section 13.4 row items | `5-§7-1`, `5-§7-8`, `22-§4-1`, `22-§4-2`, `22-§4-3`, `22-§4-4`, `22-§9-1`, `22-§17-1`, `25-§6-1`, `25-§6-2`, `25-§7-1`, `25-§7-2`, `BP-§6.3-1`, `BP-§6.3-2`, `BP-§8.4-1`, `BP-§11-1` (16) |
| `EC14-ARC-02` | `EIS14-ARC-02` | One Business Memory read model | `BUILD` | WS-A | P1 | `INT`, `DB`, `REPO` | NP-01, NP-41, RS-18 | `3-§5-1`, `3-§5-10`, `3-§9-14`, `3-§12-2`, `3-§12-3`, `3-§12-4`, `3-§12-5`, `3-§14-2`, `3-§15-1`, `3-§15-2`, `3-§15-3`, `3-§15-4`, `3-§15-5`, `3-§19-13a`, `24-§27-5`, `9-§12-1`, `17-§12-2` (17) |

### 7.2 Four-State Ledger Domain Model and Aggregation (EIS Section 7)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-LDG-01` | `EIS14-LDG-01` | Four-state type model by additive widening | `BUILD — MIGRATION / CUT-OVER GATED` | WS-A | P1 | `UNIT`, `DB`, `REH` | NP-09, RS-03 | `3-§3`, `3-§4-1`, `3-§4-2`, `3-§4-3`, `3-§4-4`, `3-§4-6`, `3-§19-1`, `3-§19-2`, `BP-§9-1`, `BP-§10.3-O`, `BP-§10.3-W1`, `BP-§10.3-W2`, `BP-§10.3-C1` (13) |
| `EC14-LDG-02` | `EIS14-LDG-02` | Explicit credit direction; positive amount | `BUILD` | WS-A | P1 | `UNIT`, `DB` | NP-12, RS-03 | `3-§4-3`, `3-§5-4`, `3-§6-8`, `3-§10-5` (4) |
| `EC14-LDG-03` | `EIS14-LDG-03` | Repayment-target link and commit-time revalidation (`FPDR-4`) | `BUILD` | WS-A | P1 | `UNIT`, `DB`, `CONC` | NP-11, NP-13, RS-02, RS-03 | `3-§4-3`, `3-§4-4`, `3-§5-4`, `3-§5-5`, `3-§6-8`, `3-§8-8`, `3-§9-7`, `3-§10-5`, `3-§19-2`, `BP-§10.3-W2`, `BP-§10.3-SA2`, `BP-§10.3-SB1`, `BP-§10.3-SB2` (13) |
| `EC14-LDG-04` | `EIS14-LDG-04` | No history rewrite; no duplicate credit | `BUILD — MIGRATION / CUT-OVER GATED` | WS-A | P1 | `DB`, `REH`, `REG` | NP-09, RS-04 | `3-§4-5`, `3-§8-16`, `3-§20-1`, `3-§20-2`, `3-§22-1`, `3-§22-2`, `BP-§10.3-W3`, `BP-§10.3-SB2` (8) |
| `EC14-LDG-05` | `EIS14-LDG-05` | Truthful readers and committed-row confirmation | `BUILD` | WS-A | P1 | `UNIT`, `INT`, `RT` | NP-10, RS-11, RS-14 | `3-§5-1`, `3-§5-2`, `3-§5-3`, `3-§5-4`, `3-§5-5`, `3-§5-6`, `3-§5-10`, `3-§6-1`, `3-§6-2`, `3-§6-3`, `3-§6-4`, `3-§6-5`, `3-§6-6`, `3-§6-7`, `3-§6-8`, `3-§6-9`, `3-§6-10`, `3-§19-1`, `3-§19-3` (19) |
| `EC14-LDG-06` | `EIS14-LDG-06` | Ledger role application through distinct kernel capabilities | `BUILD` | WS-A | P1 | `INT`, `DB`, `RT` | NP-03, NP-04, RS-21 | `3-§11-1`, `3-§11-2`, `3-§11-3`, `3-§11-4`, `3-§11-5`, `3-§11-7`, `3-§18-1`, `3-§18-2`, `3-§18-3`, `3-§18-5`, `3-§18-6`, `3-§19-10`, `3-§19-11` (13) |
| `EC14-TOT-01` | `EIS14-TOT-01` | One canonical classification with distinct sales, income, purchase and expense measures | `BUILD` | WS-A | P1 | `UNIT`, `DB`, `INV`, `REG` | NP-10, RS-03 | `3-§9-10`, `3-§9-11`, `3-§10-2`, `3-§10-3`, `3-§10-4`, `3-§10-5`, `3-§10-9`, `3-§19-12`, `BP-§10.3-SB1` (9) |

### 7.3 Governed Command Path (EIS Section 8)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-CMD-01` | `EIS14-CMD-01` | Four states added to the one governed create-transaction command | `BUILD — MIGRATION / CUT-OVER GATED` | WS-A | P1 | `DB`, `CONC`, `INV`, `AUDIT` | NP-07, NP-08, RS-03, RS-06 | 42 rows: listed in Section 29.2 (Section 11) |
| `EC14-CMD-02` | `EIS14-CMD-02` | Governed append-only correction command | `BUILD — MIGRATION / CUT-OVER GATED` | WS-A | P1 | `DB`, `CONC`, `AUDIT`, `RT` | NP-07, NP-27, RS-11 | `3-§8-1`, `3-§8-2`, `3-§8-3`, `3-§8-4`, `3-§8-5`, `3-§8-6`, `3-§8-7`, `3-§8-8`, `3-§8-9`, `3-§8-10`, `3-§8-11`, `3-§8-12`, `3-§8-13`, `3-§8-14`, `3-§8-15`, `3-§8-16`, `3-§17-6`, `3-§18-3`, `3-§19-7` (19) |
| `EC14-CMD-03` | `EIS14-CMD-03` | Complete direct-mutation closure on `transactions` and correction events | `BUILD — MIGRATION / CUT-OVER GATED` | WS-A | P1 | `INV`, `DB` | NP-07, RS-06 | `3-§22-1`, `3-§22-2`, `22-§28-9`, `24-§14-9`, `BP-§6.1-1`, `BP-§6.2-1` (6) |

### 7.4 Idempotency, Content Fingerprint and Unknown Outcome (EIS Section 9)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-IDM-01` | `EIS14-IDM-01` | Command idempotency through the SB-P-1.12 shared pattern | `BUILD` | WS-G | P2 | `DB`, `CONC` | NP-14, RS-13 | `3-§17-1`, `3-§17-2`, `3-§19-6`, `5-§11-1`, `5-§11-2`, `5-§11-3`, `5-§11-4`, `5-§11-5`, `5-§17-5`, `5-§17-10`, `5-§18-6`, `22-§29-8`, `25-§14-2`, `25-§14-3`, `25-§14-4`, `25-§14-5`, `25-§26-8` (17) |
| `EC14-IDM-02` | `EIS14-IDM-02` | Content fingerprint as duplicate evidence only | `BUILD` | WS-G | P2 | `UNIT`, `DB` | NP-14, RS-13 | `3-§7-8`, `3-§16-6`, `5-§9-7`, `5-§10-7`, `5-§11-1`, `5-§11-3`, `5-§11-4`, `5-§17-5`, `5-§18-6`, `25-§14-4`, `25-§26-8` (11) |
| `EC14-IDM-03` | `EIS14-IDM-03` | First-class unknown outcome reconciled by lookup | `BUILD` | WS-G | P2 | `INT`, `DB`, `RT` | NP-15, RS-13 | `3-§17-1`, `3-§17-2`, `3-§17-11`, `5-§17-10`, `25-§14-5`, `25-§20-10` (6) |

### 7.5 UDI Intake, Validation and Parsing (EIS Section 10)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-UDI-01` | `EIS14-UDI-01` | One intake pipeline generalizing the parser lease | `BUILD` | WS-B | P4 | `UNIT`, `INT`, `REPO` | NP-19, NP-41, RS-08 | `3-§5-8`, `3-§5-9`, `5-§3-1`, `5-§4-14`, `5-§8-2`, `5-§8-3`, `5-§8-4`, `5-§11-5`, `5-§19-2`, `22-§9-2`, `22-§9-3`, `22-§28-5`, `22-§29-5`, `24-§5-6`, `10-§10-1`, `BP-§10.3-W4`, `BP-§10.3-W12` (17) |
| `EC14-UDI-02` | `EIS14-UDI-02` | Intake validation before any parse or storage commit | `BUILD` | WS-B | P4 | `UNIT`, `INT` | NP-19, RS-08 | `5-§4-1`, `5-§4-2`, `5-§4-3`, `5-§4-4`, `5-§4-5`, `5-§4-6`, `5-§4-7`, `5-§4-8`, `5-§4-9`, `5-§4-14`, `5-§16-4`, `5-§16-5`, `5-§17-1`, `5-§17-2`, `5-§17-3`, `25-§8-4`, `25-§19-8` (17) |
| `EC14-UDI-03` | `EIS14-UDI-03` | Deterministic CSV/XLSX routing | `BUILD` | WS-B | P4 | `UNIT`, `INT` | NP-26, RS-07, RS-16 | `3-§5-8`, `5-§4-4`, `5-§4-5`, `5-§10-5`, `5-§18-4`, `24-§7-4` (6) |
| `EC14-UDI-04` | `EIS14-UDI-04` | Non-executing, non-fetching PDF and image path | `BUILD — EVIDENCE GATED` | WS-B | P4 | `UNIT`, `INT`, `NET`, `PROV` | NP-20, RS-08 | `3-§5-7`, `5-§4-1`, `5-§4-2`, `5-§4-3`, `5-§4-8`, `5-§14-1`, `5-§14-2`, `5-§14-3`, `5-§14-4`, `5-§14-5`, `5-§14-6`, `5-§14-7`, `5-§14-8`, `5-§18-3`, `24-§7-3` (15) |
| `EC14-UDI-05` | `EIS14-UDI-05` | Type-sensitive spreadsheet formula safety | `BUILD` | WS-B | P4 | `UNIT`, `INT`, `REG` | NP-21, RS-07, RS-10 | `3-§10-6`, `3-§10-7`, `3-§10-9`, `5-§4-4`, `5-§4-5` (5) |

### 7.6 Untrusted Content, Interpretation Validation and Context Minimization (EIS Section 11)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-UDI-06` | `EIS14-UDI-06` | Document content is untrusted data | `BUILD` | WS-B | P4 | `UNIT`, `EVAL` | NP-22, RS-17 | `3-§16-8`, `3-§16-9`, `3-§16-10`, `3-§16-11`, `3-§16-12`, `3-§16-13`, `3-§16-14`, `5-§2-2`, `5-§13-8`, `5-§13-9`, `5-§13-10`, `5-§13-11`, `5-§13-12`, `5-§16-7`, `25-§25-3`, `24-§14-1`, `24-§14-9` (17) |
| `EC14-UDI-07` | `EIS14-UDI-07` | Schema-validated interpretation; missing fields never invented | `BUILD — PROVIDER GATED` | WS-B | P4 | `UNIT`, `INT`, `EVAL` | NP-18, NP-23, RS-01, RS-16 | `3-§16-1`, `3-§16-2`, `3-§16-3`, `3-§16-4`, `3-§16-5`, `3-§16-6`, `3-§16-7`, `5-§3-2`, `5-§3-3`, `5-§5-1`, `5-§5-2`, `5-§5-3`, `5-§5-4`, `5-§5-5`, `5-§5-6`, `5-§5-7`, `5-§5-8`, `5-§5-9`, `5-§13-1`, `5-§13-2`, `5-§13-3`, `5-§13-4`, `5-§13-5`, `5-§13-6`, `5-§13-7`, `24-§14-2`, `24-§14-3`, `24-§14-4`, `24-§14-5`, `24-§14-6`, `24-§14-7` (31) |
| `EC14-UDI-08` | `EIS14-UDI-08` | Context minimization | `BUILD` | WS-B | P4 | `UNIT`, `INT` | NP-24, RS-17 | `5-§12-5`, `5-§13-11`, `5-§16-7` (3) |
| `EC14-UDI-09` | `EIS14-UDI-09` | AI gateway consumption only | `BUILD — PROVIDER GATED` | WS-B | P4 | `UNIT`, `INT`, `REPO` | NP-25, NP-26, RS-12 | `22-§29-13`, `24-§5-6`, `24-§7-3`, `24-§14-1`, `24-§14-2`, `24-§14-3`, `24-§14-4`, `24-§14-5`, `24-§14-6`, `24-§14-7`, `24-§14-8`, `24-§14-9`, `24-§23-6`, `24-§31-8` (14) |

### 7.7 Ambiguity, Preview, Confirmation and `FPDR-3` (EIS Section 12)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-CNF-01` | `EIS14-CNF-01` | Clarification and safe rejection | `BUILD` | WS-C | P5 | `UNIT`, `INT`, `RT` | NP-18, RS-16 | `3-§7-1`, `3-§7-2`, `3-§7-3`, `3-§7-4`, `3-§7-5`, `3-§7-6`, `3-§7-7`, `3-§7-8`, `3-§7-9`, `3-§17-4`, `3-§17-5`, `3-§19-5`, `5-§10-1`, `5-§10-2`, `5-§10-3`, `5-§10-4`, `5-§10-5`, `5-§10-6`, `5-§10-7`, `5-§10-8`, `5-§10-9`, `5-§10-10`, `5-§18-2`, `10-§17-4`, `12-§4-5` (25) |
| `EC14-CNF-02` | `EIS14-CNF-02` | Preview and review | `BUILD` | WS-C | P5 | `UNIT`, `RT` | NP-18, RS-01 | `5-§3-2`, `5-§9-1`, `5-§9-2`, `5-§9-3`, `5-§9-4`, `5-§9-5`, `5-§9-6`, `5-§9-7`, `5-§9-8`, `10-§10-3`, `10-§10-4` (11) |
| `EC14-CNF-03` | `EIS14-CNF-03` | Material fingerprint and confirmation binding (`FPDR-3`) | `BUILD` | WS-C | P5 | `UNIT`, `DB`, `CONC` | NP-16, RS-01, RS-02 | `3-§19-4`, `5-§9-9`, `5-§18-1`, `22-§29-7`, `24-§21-7`, `10-§10-5`, `10-§13-3`, `BP-§10.3-SA1`, `BP-§10.3-SA2` (9) |
| `EC14-CNF-04` | `EIS14-CNF-04` | Independent execution-time revalidation | `BUILD` | WS-C | P5 | `DB`, `CONC` | NP-17, RS-02 | `5-§10-9`, `5-§17-7`, `5-§17-8`, `22-§29-7`, `BP-§10.3-SA2` (5) |

### 7.8 Destination Adapters (EIS Section 13)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-ADP-01` | `EIS14-ADP-01` | Ledger destination adapter through the governed command | `BUILD` | WS-B | P4 | `INT`, `DB` | NP-08, RS-01 | `3-§5-7`, `3-§19-4`, `5-§7-2`, `5-§7-4`, `5-§18-1`, `24-§18-1a` (6) |
| `EC14-ADP-02` | `EIS14-ADP-02` | Opening-stock adapter through `create_inventory_movement` | `BUILD` | WS-B | P4 | `INT`, `DB`, `CONC` | NP-38, NP-39, RS-07 | `5-§4-9`, `5-§7-3`, `5-§18-5`, `7-§6-2`, `7-§6-4`, `7-§6-5`, `7-§15-2a`, `BP-§10.3-W13` (8) |

### 7.9 Receipt Cabinet, Versions and Provenance (EIS Section 14)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-CAB-01` | `EIS14-CAB-01` | Document memory model (`documents`, `document_versions`, `document_links`) | `BUILD` | WS-D | P6 | `DB`, `INV` | NP-01, RS-09 | `5-§6-1`, `5-§6-2`, `5-§15-1`, `5-§15-2`, `5-§15-3`, `5-§15-4`, `5-§15-5`, `5-§15-6`, `5-§15-7`, `5-§15-8`, `5-§15-9`, `5-§15-10`, `5-§15-11`, `22-§10-1`, `22-§10-2`, `22-§10-3`, `22-§10-4`, `22-§10-5`, `22-§10-6`, `22-§10-7`, `25-§10-1`, `25-§10-2`, `25-§10-3`, `25-§10-4`, `25-§10-5`, `25-§10-6`, `25-§10-7`, `25-§10-8`, `25-§10-9`, `25-§10-10`, `25-§10-11`, `25-§10-12`, `25-§11-1`, `25-§11-2`, `25-§11-3`, `25-§11-4` (36) |
| `EC14-CAB-02` | `EIS14-CAB-02` | Immutable originals and versioning | `BUILD` | WS-D | P6 | `UNIT`, `DB` | NP-27, RS-09 | `22-§29-12`, `25-§10-12`, `25-§23-7`, `BP-§10.3-W5` (4) |
| `EC14-CAB-03` | `EIS14-CAB-03` | Domain provenance separate from SB-P-1.12 authority audit | `BUILD` | WS-D | P6 | `DB`, `AUDIT` | NP-28, RS-05 | `5-§15-2`, `5-§15-3`, `5-§15-10`, `25-§23-1`, `25-§23-2`, `25-§23-3`, `25-§23-4`, `25-§23-5`, `25-§23-6`, `25-§23-7`, `25-§23-8`, `25-§23-9`, `25-§23-10`, `25-§23-11`, `25-§23-12` (15) |
| `EC14-CAB-04` | `EIS14-CAB-04` | Receipt Cabinet retrieval through the shared search layer | `BUILD` | WS-D | P6 | `INT`, `DB`, `RT` | NP-01, RS-05, RS-09, RS-18 | `3-§19-9`, `5-§6-3`, `5-§6-4`, `5-§6-5`, `5-§6-6`, `5-§6-7`, `5-§6-8`, `5-§6-9`, `5-§6-11`, `5-§6-13`, `5-§18-7`, `10-§5-10`, `10-§10-7`, `17-§12-1`, `17-§12-2`, `BP-§10.3-W8`, `BP-§10.3-X` (17) |

### 7.10 Durable Object Storage Control Plane (EIS Section 15)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-STO-01` | `EIS14-STO-01` | Control plane and provider-independent object identity | `BUILD — PROVIDER GATED` | WS-E | P3 | `UNIT`, `DB`, `OBJ` | NP-29, RS-09 | `22-§17-7`, `25-§4-1`, `25-§4-2`, `25-§4-3`, `25-§4-4`, `25-§4-5`, `25-§4-6`, `25-§4-7`, `25-§4-8`, `25-§4-9`, `25-§4-10`, `25-§4-11`, `25-§4-12`, `25-§5-1`, `25-§5-2`, `25-§14-1`, `25-§14-7`, `25-§15-1`, `25-§15-2`, `25-§15-3`, `25-§15-4`, `25-§18-1`, `25-§18-2`, `25-§18-3`, `25-§25-1`, `25-§25-2`, `25-§25-3`, `25-§25-4`, `BP-§6.3-2`, `BP-§10.3-W9`, `BP-§10.3-W10` (31) |
| `EC14-STO-02` | `EIS14-STO-02` | Two-phase ingest with specified secure-upload outcomes | `BUILD — PROVIDER GATED` | WS-E | P3 | `INT`, `DB`, `OBJ` | NP-30, RS-15 | `25-§8-1`, `25-§8-2`, `25-§8-3`, `25-§8-4`, `25-§8-5`, `25-§8-6`, `25-§8-7`, `25-§8-8`, `25-§8-9`, `25-§8-10`, `25-§8-11`, `25-§26-1`, `25-§26-6`, `25-§26-7` (14) |
| `EC14-STO-03` | `EIS14-STO-03` | Privileged handler binding under `EIS-ISO-04` | `BUILD` | WS-E | P3 | `INV`, `REPO`, `DB` | NP-02 | `25-§8-1`, `25-§8-2`, `25-§8-3`, `25-§8-4`, `25-§8-5`, `25-§8-6`, `25-§8-7`, `25-§8-8`, `25-§8-9`, `25-§8-10`, `25-§8-11`, `25-§9-1`, `25-§9-2`, `25-§9-3`, `25-§9-4`, `25-§9-5`, `25-§9-6`, `25-§9-7`, `25-§9-8`, `25-§14-6`, `25-§17-3`, `25-§21-1`, `25-§21-2`, `25-§21-3`, `25-§21-4`, `25-§21-5` (26) |
| `EC14-STO-04` | `EIS14-STO-04` | Storage protections | `BUILD — PROVIDER GATED` | WS-E | P3 | `OBJ`, `INV` | NP-29 | `25-§4-12`, `25-§19-1`, `25-§19-2`, `25-§19-3`, `25-§19-4`, `25-§19-5`, `25-§19-6`, `25-§19-7`, `25-§19-8` (9) |
| `EC14-STO-05` | `EIS14-STO-05` | Orphan detection and reconciliation | `BUILD` | WS-E | P3 | `INT`, `DB`, `OBJ` | NP-31, RS-12 | `25-§14-6`, `25-§20-3`, `25-§20-4`, `25-§20-9`, `25-§20-12`, `25-§21-1`, `25-§21-2`, `25-§21-3`, `25-§21-4`, `25-§21-5` (10) |
| `EC14-STO-06` | `EIS14-STO-06` | Backup and durability runbook | `BUILD — EVIDENCE GATED` | WS-E | P3 | `DOC`, `PROV` | RS-22 | `25-§22-1`, `25-§22-2`, `25-§22-3`, `25-§22-4`, `25-§22-5`, `25-§22-6`, `25-§26-13` (7) |
| `EC14-STO-07` | `EIS14-STO-07` | Lifecycle states and governed deletion | `BUILD` | WS-E | P3 | `DB`, `AUDIT`, `OBJ` | NP-33, RS-15 | `25-§16-1`, `25-§16-2`, `25-§16-3`, `25-§17-2`, `25-§17-3`, `25-§17-4`, `25-§17-5`, `25-§17-6`, `25-§17-7`, `25-§26-12` (10) |
| `EC14-STO-08` | `EIS14-STO-08` | One storage foundation across channels | `BUILD` | WS-E | P3 | `INV`, `REPO` | NP-41, RS-09 | `25-§13-1a`, `25-§13-2`, `25-§13-3`, `25-§26-4a` (4) |
| `EC14-STO-09` | `EIS14-STO-09` | Aggregate storage metrics only | `BUILD` | WS-E | P3 | `INV`, `UNIT` | NP-28, RS-22 | `22-§23-7`, `25-§26-14` (2) |

### 7.11 Retention, `FPDR-2` and Raw Voice (EIS Section 16)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-RET-01` | `EIS14-RET-01` | `FPDR-2` bounded, hold-aware discard | `BUILD — EVIDENCE GATED` | WS-E | P3 | `DB`, `OBJ`, `PROV`, `RT` | NP-31, NP-32, RS-15 | `5-§6-1`, `5-§16-3`, `22-§10-5`, `25-§12-1`, `25-§12-3`, `25-§14-6`, `25-§16-1`, `25-§16-2`, `25-§17-6`, `25-§26-12` (10) |
| `EC14-RET-02` | `EIS14-RET-02` | Raw voice not durable by default | `BUILD` | WS-E | P3 | `INV`, `DB` | NP-32, RS-15 | `25-§12-1`, `25-§12-2`, `25-§12-3` (3) |
| `EC14-RET-03` | `EIS14-RET-03` | Record-class retention by reference; no coded duration | `BUILD — DEPENDENCY GATED` | WS-E | P3 | `DB`, `DOC` | NP-33 | `5-§6-1`, `5-§16-3`, `22-§10-5`, `25-§4-8`, `25-§10-11`, `25-§12-1`, `25-§12-3`, `25-§16-2`, `25-§17-5`, `25-§17-6`, `25-§26-12` (11) |

### 7.12 Retrieval, Search and Export (EIS Section 17)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-RTV-01` | `EIS14-RTV-01` | Revocation-safe, server-mediated retrieval | `BUILD` | WS-F | P7 | `INT`, `DB`, `CONC`, `OBJ` | NP-01, NP-05, RS-05 | `3-§9-13`, `3-§10-1`, `3-§10-6`, `3-§10-7`, `3-§10-8`, `3-§10-9`, `3-§19-9`, `5-§6-3`, `5-§6-4`, `5-§6-5`, `5-§6-6`, `5-§6-7`, `5-§6-8`, `5-§6-9`, `5-§6-11`, `5-§18-7`, `25-§9-1`, `25-§9-2`, `25-§9-3`, `25-§9-4`, `25-§9-5`, `25-§9-6`, `25-§9-7`, `25-§9-8`, `25-§19-7`, `25-§20-7`, `25-§20-13`, `25-§26-2`, `25-§26-3`, `25-§26-11`, `10-§5-10`, `10-§10-7`, `17-§12-1`, `17-§12-2`, `BP-§10.3-X` (35) |
| `EC14-SRC-01` | `EIS14-SRC-01` | Search keys and one query layer | `BUILD` | WS-F | P7 | `UNIT`, `DB`, `EVAL` | NP-01, NP-13, RS-18 | `3-§9-1`, `3-§9-2`, `3-§9-4`, `3-§9-5`, `3-§9-6`, `3-§9-7`, `3-§9-8`, `3-§9-9`, `3-§9-10`, `3-§9-11`, `3-§9-13`, `3-§9-14`, `3-§19-8`, `BP-§10.3-S1` (14) |
| `EC14-SRC-02` | `EIS14-SRC-02` | Kernel-checked exports with distinct measures | `BUILD` | WS-F | P7 | `UNIT`, `INT`, `DB` | NP-03, NP-05, NP-10, NP-21, RS-10 | `3-§10-1`, `3-§10-6`, `3-§10-7`, `3-§10-8`, `3-§10-9`, `3-§19-12` (6) |
| `EC14-SRC-03` | `EIS14-SRC-03` | No authoritative per-customer balance | `BUILD` | WS-F | P7 | `UNIT`, `DB`, `RT` | NP-13, RS-03 | `3-§9-2`, `3-§9-7`, `3-§10-5`, `3-§19-2` (4) |

### 7.13 Security, Isolation and Birth-Safe Objects (EIS Section 18)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-SEC-01` | `EIS14-SEC-01` | SB-P-1.12 kernel consumption only | `BUILD` | WS-G | P2 | `INT`, `DB`, `INV` | NP-01, NP-08, RS-06, RS-21 | `3-§11-7`, `3-§17-9`, `3-§17-10`, `3-§18-1`, `3-§18-2`, `3-§18-3`, `3-§18-5`, `3-§18-6`, `3-§19-14`, `5-§16-1`, `5-§16-2`, `5-§16-3`, `5-§16-6`, `5-§18-10`, `22-§23-2`, `22-§29-3` (16) |
| `EC14-SEC-02` | `EIS14-SEC-02` | Birth-safe protected objects by object type | `BUILD — MIGRATION / CUT-OVER GATED` | WS-G | P2 | `INV`, `DB`, `REH` | NP-06 | 60 rows: listed in Section 29.2 (Section 11) |
| `EC14-SEC-03` | `EIS14-SEC-03` | Action/object capability separation | `BUILD` | WS-G | P2 | `INT`, `DB` | NP-03, NP-04, RS-05, RS-21 | `3-§11-1`, `3-§11-2`, `3-§11-3`, `3-§11-4`, `3-§11-5`, `3-§11-7`, `5-§12-1`, `5-§12-2`, `5-§12-3`, `5-§12-4`, `5-§12-5`, `5-§12-6`, `5-§18-9`, `22-§23-5` (14) |
| `EC14-SEC-04` | `EIS14-SEC-04` | No routine platform or support access | `BUILD` | WS-G | P2 | `INV`, `DB`, `AUDIT` | NP-34, RS-21 | `3-§18-5`, `3-§18-6`, `5-§12-6`, `22-§23-3` (4) |

### 7.14 Failure and Recovery (EIS Section 19)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-FAIL-01` | `EIS14-FAIL-01` | Layered outcome states | `BUILD` | WS-G | P2 | `UNIT`, `INT`, `RT` | NP-35, RS-12 | 47 rows: listed in Section 29.2 (Section 11) |
| `EC14-FAIL-02` | `EIS14-FAIL-02` | Narrow failure | `BUILD` | WS-G | P2 | `UNIT`, `INT`, `RT` | NP-35, RS-12 | `3-§17-11`, `5-§10-10`, `5-§17-1`, `5-§17-2`, `5-§17-3`, `5-§17-4`, `5-§17-5`, `5-§17-6`, `5-§17-7`, `5-§17-8`, `5-§17-9`, `5-§17-10`, `5-§17-11`, `5-§18-11`, `22-§19-1`, `22-§19-2`, `22-§19-3`, `22-§19-4`, `22-§19-5`, `22-§19-6`, `22-§19-7`, `22-§29-10`, `25-§26-10` (23) |
| `EC14-FAIL-03` | `EIS14-FAIL-03` | Typed storage failure states | `BUILD` | WS-E | P3 | `INT`, `OBJ`, `RT` | NP-35, RS-12 | `25-§20-1`, `25-§20-2`, `25-§20-3`, `25-§20-4`, `25-§20-5`, `25-§20-6`, `25-§20-7`, `25-§20-8`, `25-§20-9`, `25-§20-10`, `25-§20-11`, `25-§20-12`, `25-§20-13`, `25-§20-14` (14) |

### 7.15 Provider Evidence, Activation, Disable and Rollback Gates (EIS Section 20)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-PRV-01` | `EIS14-PRV-01` | AI provider gate bound to the versioned configuration identity | `BUILD + EVIDENCE GATE` | WS-B | P4 | `UNIT`, `INT`, `PROV` | NP-25 | 97 rows: listed in Section 29.2 (Section 11) |
| `EC14-PRV-02` | `EIS14-PRV-02` | Storage activation, disable and rollback gate (`DR2`) | `BUILD + EVIDENCE GATE` | WS-E | P3 | `INT`, `OBJ`, `PROV` | NP-36 | 124 rows: listed in Section 29.2 (Section 11) |

### 7.16 Environment, Secrets and Credentials (EIS Section 21)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-ENV-01` | `EIS14-ENV-01` | Server-only secrets and per-environment configuration | `GOVERNANCE` | Cross-cutting | All | `INV`, `REPO` | NP-37 | `25-§19-4`, `25-§19-5`, `25-§19-6` (3) |

### 7.17 Migration Design (Design Only; Not Executed) (EIS Section 22)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-MIG-01` | `EIS14-MIG-01` | M14-1 four-state widening | `MIGRATION-DESIGN` | WS-A | P1 | `INV`, `REH`, `DOC` | NP-07, NP-09, RS-04 | `3-§4-1`, `3-§4-2`, `3-§4-3`, `3-§4-4`, `3-§4-5`, `3-§4-6`, `3-§5-2`, `3-§5-3`, `3-§5-4`, `3-§5-5`, `3-§5-6`, `3-§6-1`, `3-§6-2`, `3-§6-3`, `3-§6-4`, `3-§6-5`, `3-§6-6`, `3-§6-7`, `3-§6-8`, `3-§6-9`, `3-§8-1`, `3-§8-8`, `3-§19-1`, `3-§19-2`, `3-§19-3`, `3-§22-1`, `3-§22-2`, `BP-§6.2-1`, `BP-§10.3-W1`, `BP-§10.3-W2`, `BP-§10.3-W3`, `BP-§10.3-W7`, `BP-§10.3-C1`, `BP-§10.3-SA1`, `BP-§10.3-SA2`, `BP-§10.3-SB1`, `BP-§10.3-SB2` (37) |
| `EC14-MIG-02` | `EIS14-MIG-02` | M14-2 document/object schema, born hardened | `MIGRATION-DESIGN` | Cross-cutting | All | `INV`, `REH`, `DOC` | NP-06 | 64 rows: listed in Section 29.2 (Section 11) |
| `EC14-MIG-03` | `EIS14-MIG-03` | M14-3 UDI state and multi-row import | `MIGRATION-DESIGN` | WS-B | P4 | `DB`, `CONC`, `REH` | NP-39, RS-07 | `5-§7-2`, `5-§15-1`, `5-§15-2`, `5-§15-3`, `5-§15-4`, `5-§15-5`, `5-§15-6`, `5-§15-7`, `5-§15-8`, `5-§15-9`, `5-§15-10`, `5-§15-11`, `5-§17-6`, `5-§18-1`, `24-§18-1a`, `7-§6-2`, `7-§6-4`, `7-§15-2a` (18) |
| `EC14-MIG-04` | `EIS14-MIG-04` | M14-4 live-safe search keys and indexes | `MIGRATION-DESIGN` | WS-F | P7 | `REH`, `PERF`, `INV` | RS-19 | `3-§9-1`, `3-§9-2`, `3-§9-4`, `3-§9-5`, `3-§9-6`, `3-§9-7`, `3-§9-8`, `3-§9-9`, `3-§9-10`, `3-§9-11`, `3-§9-13`, `3-§9-14`, `BP-§10.3-S1` (13) |
| `EC14-MIG-05` | `EIS14-MIG-05` | Rollback, forward-fix and rehearsal | `MIGRATION-DESIGN` | Cross-cutting | All | `REH`, `INV`, `REG`, `PROV` | NP-06, NP-09 | 90 rows: listed in Section 29.2 (Section 11) |
| `EC14-MIG-06` | `EIS14-MIG-06` | Reproducible type synchronization and compatibility | `MIGRATION-DESIGN` | Cross-cutting | All | `REPO`, `REH`, `UNIT` | Section 13.4 row items | `3-§4-1`, `3-§4-2`, `3-§4-3`, `3-§4-4`, `3-§6-2`, `BP-§10.3-W3` (6) |

### 7.18 CI and Verification Architecture (EIS Section 23)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-VER-01` | `EIS14-VER-01` | CI tiers, suites and Full Assurance effective-access evidence | `VERIFICATION` | Cross-cutting | All | `UNIT`, `DB`, `INV`, `REPO`, `EVAL` | NP-06, NP-07 | `22-§22-1`, `22-§22-2`, `22-§22-3`, `22-§22-4`, `22-§22-5`, `22-§22-6`, `BP-§13-1` (7) |
| `EC14-VER-02` | `EIS14-VER-02` | Acceptance and experience evidence (Experience Verification Matrix) | `VERIFICATION` | Cross-cutting | All | `RT`, `FRT`, `DOC` | Section 13.4 row items | 67 rows: listed in Section 29.2 (Section 11) |

### 7.19 Performance and Merchant Presentation (EIS Section 24)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-PERF-01` | `EIS14-PERF-01` | Responsiveness without weakening authorization | `BUILD` | WS-F | P7 | `PERF`, `RT` | RS-19 | `22-§21`, `25-§24-1`, `25-§24-2`, `25-§24-3` (4) |
| `EC14-UX-01` | `EIS14-UX-01` | Merchant-language presentation of the four states | `BUILD` | WS-A | P1 | `UNIT`, `RT` | RS-14 | `3-§2-2`, `3-§3`, `3-§5-10`, `3-§6-1`, `3-§12-3`, `BP-§10.3-O` (6) |

### 7.20 Non-Goals and Must-Not Checks (EIS Section 25)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-NG-01` | `EIS14-NG-01` | Must-not checks | `GOVERNANCE` | Cross-cutting | All | `UNIT`, `REPO`, `DOC` | NP-40 | 96 rows: listed in Section 29.2 (Section 11) |

### 7.21 Dependency-Rule Disclosures (Contract 22 §27) (EIS Section 26)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-DOC-01` | `EIS14-DOC-01` | Dependency-rule disclosures and delivery accounting | `GOVERNANCE` | Cross-cutting | All | `REPO`, `DOC` | RS-20 | `22-§27-1`, `22-§27-2`, `22-§27-3`, `22-§27-4`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§27-8`, `22-§29-14`, `BP-§5.3-1`, `BP-§9-1`, `BP-§11-2`, `BP-§11-3` (13) |

### 7.22 Holds and Dependency Gates (EIS Section 27)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC14-HOLD-01` | `EIS14-HOLD-01` | `D12` SB-P-1.12 consumption gate | `GATE` | Gate | P0 | `PROV`, `DOC` | Section 13.4 row items | 225 rows: all `IN SCOPE` rows carrying `D12` (Section 11) |
| `EC14-HOLD-02` | `EIS14-HOLD-02` | `D13` SB-P-1.13 consumption gate | `GATE` | Gate | P0 | `PROV`, `DOC` | Section 13.4 row items | 92 rows: all `IN SCOPE` rows carrying `D13` (Section 11) |
| `EC14-HOLD-03` | `EIS14-HOLD-03` | `DTX` transactions-family gate | `GATE` | Gate | P0 | `DB`, `INV` | NP-07 | 42 rows: all `IN SCOPE` rows carrying `DTX` (Section 11) |
| `EC14-HOLD-04` | `EIS14-HOLD-04` | Later-mission dependency gate (`D15`, `D17`, `D19`, `D20`) | `GATE` | Gate | P0 | `DOC` | NP-42 | 13 rows: all `IN SCOPE` rows carrying `D15`, `D17`, `D19` or `D20` (Section 11) |
| `EC14-HOLD-05` | `EIS14-HOLD-05` | Financial-integrity design hold (`H-FIN`) | `GATE` | Gate | P0 | `DB`, `DOC` | Section 13.4 row items | 48 rows: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-FIN` (Section 11) |
| `EC14-HOLD-06` | `EIS14-HOLD-06` | UDI safety hold (`H-UDI`) | `GATE` | Gate | P0 | `EVAL`, `DOC` | Section 13.4 row items | 116 rows: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-UDI` (Section 11) |
| `EC14-HOLD-07` | `EIS14-HOLD-07` | Material-fingerprint hold (`H-FPRINT`) | `GATE` | Gate | P0 | `DB`, `DOC` | Section 13.4 row items | 8 rows: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-FPRINT` (Section 11) |
| `EC14-HOLD-08` | `EIS14-HOLD-08` | Storage activation hold (`H-STO`) | `GATE` | Gate | P0 | `PROV`, `DOC` | Section 13.4 row items | 124 rows: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-STO` (Section 11) |
| `EC14-HOLD-09` | `EIS14-HOLD-09` | AI provider hold (`H-PROV`) | `GATE` | Gate | P0 | `PROV`, `DOC` | Section 13.4 row items | 97 rows: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-PROV` (Section 11) |
| `EC14-HOLD-10` | `EIS14-HOLD-10` | Retention-basis hold (`H-LEG`) | `GATE` | Gate | P0 | `DOC` | Section 13.4 row items | 11 rows: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-LEG` (Section 11) |
| `EC14-HOLD-11` | `EIS14-HOLD-11` | Later-mission hold (`H-LATER`) | `GATE` | Gate | P0 | `DOC` | NP-42 | 13 rows: all `IN SCOPE` rows whose Stage 7 residual hold includes `H-LATER` (Section 11) |

## 8. Cross-Cutting Engineering Rules

These rules restate engineering constraints already fixed by the locked EIS for the builder. Each serves the obligations it names and adds no behaviour.

| Rule | Area | Rule |
|---|---|---|
| X-01 | Authority outside the mission | Every Ledger, document and object action starts from the SB-P-1.12 verified principal and explicit active business and is decided by `authz.authorize`; no client `business_id`, authority table, single-ownership lookup or temporary parallel permission path (`EC14-SEC-01`, `EC14-HOLD-01`). |
| X-02 | Single protected transaction-write path | Forms, conversation, voice, UDI and imports reach `transactions` only through the one governed create command and the governed correction command; no direct client DML and no dual-write window (`EC14-CMD-01` to `-03`, `EC14-HOLD-03`). |
| X-03 | History preservation | No migration, command, correction or job rewrites, converts or duplicates existing `sale`/`purchase` rows, including `sale + payment_method=credit`; zero duplicate-credit backfill (`EC14-LDG-04`, `EC14-MIG-01`). |
| X-04 | Distinct truthful measures | Every total comes from the one canonical classification with distinct sales, income, purchase and expense measures; standalone credit and repayment never count as sales or income (`EC14-TOT-01`). |
| X-05 | Human decision ownership | A document-derived write commits only through an SB-P-1.12 confirmation binding on the exact reviewed interpretation; a material target change re-prompts; authority is revalidated at commit regardless of the fingerprint (`EC14-CNF-03`, `EC14-CNF-04`, `EC14-LDG-03`). |
| X-06 | Document content is data | Document text, metadata, filenames and embedded objects never change intent, tools, destination or authority; nothing in a document is executed, fetched or evaluated (`EC14-UDI-04` to `-06`). |
| X-07 | Born hardened by object type | Every new or replaced protected object is created with its object-type-specific protections in one migration boundary and verified by the effective-access inventory (`EC14-SEC-02`, `EC14-VER-01`). |
| X-08 | Authorization at delivery | Retrieval and export are authorized when bytes are delivered; server-mediated delivery is the default; any non-zero post-revocation window returns to Mission Control (`EC14-RTV-01`, `EC14-SRC-02`). |
| X-09 | Privileged handlers are bound | No service-role, maintenance or background handler acts on merchant data without `EIS-ISO-04` binding (`EC14-STO-03`). |
| X-10 | Provider and storage gates | AI and storage providers sit behind adapters and evidence gates bound to a versioned configuration identity; deterministic paths stay available when AI is off; the storage disable switch keeps verified retrieval (`EC14-PRV-01`, `EC14-PRV-02`). |
| X-11 | Honest outcomes | Success is shown only from the authoritative destination or storage outcome; unknown outcome is a state reconciled by lookup; compensation never deletes a confirmed record (`EC14-FAIL-01`, `EC14-IDM-03`). |
| X-12 | Migration governance | No migration file is created or executed under this package; each migration needs a separately authorized migration mission, rehearsed on the isolated test project, with pre-new-data rollback and post-new-data forward-fix (`EC14-MIG-01` to `-06`). |
| X-13 | Evidence | Evidence follows package template Sections 12 and 13 under `docs/implementation/SB-P-1.14/evidence/`, created only when an authorized stage produces evidence. Evidence is never claimed from documentary review, CI success or feasibility labels. |
| X-14 | Completion | The builder records a status per assigned FCTM row in `lovable-build-completion-report.md`. A builder never verifies, approves or accepts its own work. `DEMONSTRATED` is reserved for rows with independent Stage 19 evidence. |

## 9. Process Obligations

Process obligations govern how the package and later work are conducted. They map to no FCTM row and add no product behaviour.

| ID | Obligation |
|---|---|
| P-01 | The locked Blueprint, locked EIS, canonical FCTM and Founder Product Decision Records are not modified by any package or implementation step. |
| P-02 | No FCTM disposition, build commitment, commercial classification or mission assignment changes without a Founder decision recorded in a Founder Product Decision Record. |
| P-03 | Package approval (Stage 13) is not implementation authorization. Implementation starts only after a separately recorded Implementation Authorization (`mission-control/implementation-authorization.md`) naming the builder, workstreams, paths, environments and Git authority. |
| P-04 | A Stage 3 trigger (T1 to T8), a Product Truth conflict, an infeasibility or a missing authority stops dependent work and goes to Mission Control. A lower actor never resolves a conflict by dropping behaviour. |
| P-05 | No self-approval, self-merge or self-verification. The independent verifier of a workstream did not build, correct or transfer it. |
| P-06 | A missing GitHub Actions run, missing status or skipped check is reported as missing, never as a pass. |
| P-07 | Every claim states its evidence class. Repository evidence is not runtime evidence; runtime evidence in a test environment is not production evidence; facts in the EIS Section 28 register stay `UNVERIFIED — ACCESS REQUIRED` until separately evidenced. |
| P-08 | A documented upstream dependency is not an implemented dependency: no SB-P-1.12 or SB-P-1.13 runtime behaviour is assumed to exist until it is implemented, verified and accepted. |

## 10. Founder Decision Boundaries

| Decision | Obligations | Boundary |
|---|---|---|
| `FPDR-1` | `EC14-LDG-01`, `EC14-LDG-04`, `EC14-TOT-01`, `EC14-SRC-03`, `EC14-MIG-01` | Four-state Ledger recorded and retrieved here; existing `sale + payment_method=credit` rows remain sales and are never reinterpreted; totals never double count; authoritative per-customer owed balance, ageing and reconciliation are SB-P-1.16 (`3-§9-12`). |
| `FPDR-2` | `EC14-RET-01`, `EC14-RET-02` | Unconfirmed uploads kept only for a configured bounded grace period, absent an approved hold; raw voice not durable by default; no duration chosen in code. |
| `FPDR-3` | `EC14-CNF-03`, `EC14-CNF-04` | Re-prompt only on a material target change; no forced re-confirmation for non-material internal change; authority and revocation revalidation always binding. |
| `FPDR-4` | `EC14-LDG-03`, `EC14-CMD-02`, `EC14-TOT-01` | A repayment targets one standalone credit entry or one credit-method sale in the same business; linkage never rewrites, converts or duplicates the sale; standalone credit and repayment never count as sales or income. |
| SB-P-1.16 boundary | `EC14-SRC-03`, `EC14-LDG-03` | No remaining-balance, overpayment, ageing, allocation or reconciliation rule and no customer/supplier identity table is built here. |

## 11. Row-to-Obligation Map

One line per `IN SCOPE` FCTM row, in FCTM order. Finding is the Blueprint Section 20.6 Stage 7 finding (documentary assessment, not evidence). Holds are the Blueprint Section 20.6 remaining-hold codes.

| # | FCTM row | Blueprint | Obligations | Workstreams | Finding | Holds |
|---|---|---|---|---|---|---|
| 1 | `3-§2-2` | §8.1 | `EC14-UX-01`, `EC14-NG-01` | WS-A, Cross-cutting | PASS | — |
| 2 | `3-§3` | §8.1 | `EC14-LDG-01`, `EC14-UX-01` | WS-A | PASS | — |
| 3 | `3-§4-1` | §8.1 | `EC14-LDG-01`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| 4 | `3-§4-2` | §8.1 | `EC14-LDG-01`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| 5 | `3-§4-3` | §8.1 | `EC14-LDG-01`, `EC14-LDG-02`, `EC14-LDG-03`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| 6 | `3-§4-4` | §8.1 | `EC14-LDG-01`, `EC14-LDG-03`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| 7 | `3-§4-5` | §8.1 | `EC14-LDG-04`, `EC14-MIG-01`, `EC14-NG-01`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | FOLLOW-UP | H-FIN |
| 8 | `3-§4-6` | §8.1 | `EC14-LDG-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | FOLLOW-UP | H-FIN, H-MIG |
| 9 | `3-§5-1` | §8.1 | `EC14-ARC-02`, `EC14-LDG-05`, `EC14-HOLD-02` | WS-A, Gate | BLOCKED | H-D13 |
| 10 | `3-§5-2` | §8.1 | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-D13, H-DTX, H-MIG |
| 11 | `3-§5-3` | §8.1 | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-D13, H-DTX, H-MIG |
| 12 | `3-§5-4` | §8.1 | `EC14-LDG-02`, `EC14-LDG-03`, `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-D13, H-DTX, H-FIN, H-MIG |
| 13 | `3-§5-5` | §8.1 | `EC14-LDG-03`, `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-D13, H-DTX, H-FIN, H-MIG |
| 14 | `3-§5-6` | §8.1 | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-02`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-D13, H-DTX, H-MIG |
| 15 | `3-§5-7` | §8.2 | `EC14-UDI-04`, `EC14-ADP-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-B, WS-E, Gate | BLOCKED | H-D12, H-D13, H-PROV, H-STO, H-UDI |
| 16 | `3-§5-8` | §8.2 | `EC14-UDI-01`, `EC14-UDI-03`, `EC14-PRV-01`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D12, H-PROV, H-UDI |
| 17 | `3-§5-9` | §8.2 | `EC14-UDI-01`, `EC14-NG-01` | WS-B, Cross-cutting | PASS | — |
| 18 | `3-§5-10` | §8.1 | `EC14-ARC-02`, `EC14-LDG-05`, `EC14-UX-01`, `EC14-HOLD-01` | WS-A, Gate | BLOCKED | H-D12 |
| 19 | `3-§6-1` | §8.1 | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-UX-01`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-DTX, H-MIG |
| 20 | `3-§6-2` | §8.1 | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-DTX, H-MIG |
| 21 | `3-§6-3` | §8.1 | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-DTX, H-MIG |
| 22 | `3-§6-4` | §8.1 | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-DTX, H-MIG |
| 23 | `3-§6-5` | §8.1 | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-DTX, H-MIG |
| 24 | `3-§6-6` | §8.1 | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-DTX, H-MIG |
| 25 | `3-§6-7` | §8.1 | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-DTX, H-MIG |
| 26 | `3-§6-8` | §8.1 | `EC14-LDG-02`, `EC14-LDG-03`, `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-DTX, H-FIN, H-MIG |
| 27 | `3-§6-9` | §8.1 | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-DTX, H-MIG |
| 28 | `3-§6-10` | §8.1 | `EC14-LDG-05`, `EC14-NG-01`, `EC14-HOLD-02` | WS-A, Cross-cutting, Gate | BLOCKED | H-D13 |
| 29 | `3-§7-1` | §8.3 | `EC14-CNF-01`, `EC14-HOLD-02` | WS-C, Gate | BLOCKED | H-D13 |
| 30 | `3-§7-2` | §8.3 | `EC14-CNF-01`, `EC14-HOLD-02` | WS-C, Gate | BLOCKED | H-D13 |
| 31 | `3-§7-3` | §8.3 | `EC14-CNF-01`, `EC14-HOLD-02` | WS-C, Gate | BLOCKED | H-D13 |
| 32 | `3-§7-4` | §8.3 | `EC14-CNF-01`, `EC14-HOLD-02` | WS-C, Gate | BLOCKED | H-D13 |
| 33 | `3-§7-5` | §8.3 | `EC14-CNF-01`, `EC14-HOLD-02` | WS-C, Gate | BLOCKED | H-D13 |
| 34 | `3-§7-6` | §8.3 | `EC14-CNF-01`, `EC14-HOLD-02` | WS-C, Gate | BLOCKED | H-D13 |
| 35 | `3-§7-7` | §8.3 | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 36 | `3-§7-8` | §8.3 | `EC14-IDM-02`, `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, WS-G, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 37 | `3-§7-9` | §8.3 | `EC14-CNF-01`, `EC14-NG-01` | WS-C, Cross-cutting | PASS | — |
| 38 | `3-§8-1` | §8.3 | `EC14-CMD-01`, `EC14-CMD-02`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-D13, H-DTX, H-FIN, H-MIG |
| 39 | `3-§8-2` | §8.3 | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 40 | `3-§8-3` | §8.3 | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 41 | `3-§8-4` | §8.3 | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 42 | `3-§8-5` | §8.3 | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 43 | `3-§8-6` | §8.3 | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 44 | `3-§8-7` | §8.3 | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 45 | `3-§8-8` | §8.3 | `EC14-LDG-03`, `EC14-CMD-01`, `EC14-CMD-02`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| 46 | `3-§8-9` | §8.3 | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 47 | `3-§8-10` | §8.3 | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 48 | `3-§8-11` | §8.3 | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 49 | `3-§8-12` | §8.3 | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 50 | `3-§8-13` | §8.3 | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 51 | `3-§8-14` | §8.3 | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 52 | `3-§8-15` | §8.3 | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 53 | `3-§8-16` | §8.3 | `EC14-LDG-04`, `EC14-CMD-02`, `EC14-NG-01`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | FOLLOW-UP | H-FIN |
| 54 | `3-§9-1` | §8.6 | `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-01` | WS-F, Gate | BLOCKED | H-D12 |
| 55 | `3-§9-2` | §8.6 | `EC14-SRC-01`, `EC14-SRC-03`, `EC14-MIG-04`, `EC14-HOLD-01` | WS-F, Gate | BLOCKED | H-D12 |
| 56 | `3-§9-4` | §8.6 | `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-01` | WS-F, Gate | BLOCKED | H-D12 |
| 57 | `3-§9-5` | §8.6 | `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-01` | WS-F, Gate | BLOCKED | H-D12 |
| 58 | `3-§9-6` | §8.6 | `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-01` | WS-F, Gate | BLOCKED | H-D12 |
| 59 | `3-§9-7` | §8.6 | `EC14-LDG-03`, `EC14-SRC-01`, `EC14-SRC-03`, `EC14-MIG-04`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, WS-F, Gate | BLOCKED | H-D12, H-FIN |
| 60 | `3-§9-8` | §8.6 | `EC14-SRC-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-MIG-04`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, WS-F, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-BIRTH |
| 61 | `3-§9-9` | §8.6 | `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-04`, `EC14-HOLD-11` | WS-F, Gate | FOLLOW-UP | H-LATER |
| 62 | `3-§9-10` | §8.6 | `EC14-TOT-01`, `EC14-SRC-01`, `EC14-MIG-04`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-02` | WS-A, WS-F, Cross-cutting, Gate | BLOCKED | H-D12, H-D13 |
| 63 | `3-§9-11` | §8.6 | `EC14-TOT-01`, `EC14-SRC-01`, `EC14-MIG-04`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-02` | WS-A, WS-F, Cross-cutting, Gate | BLOCKED | H-D12, H-D13 |
| 64 | `3-§9-13` | §8.6 | `EC14-RTV-01`, `EC14-SRC-01`, `EC14-PRV-02`, `EC14-MIG-04`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-08` | WS-E, WS-F, Cross-cutting, Gate | BLOCKED | H-D12, H-D13, H-STO, H-REVOKE |
| 65 | `3-§9-14` | §8.6 | `EC14-ARC-02`, `EC14-SRC-01`, `EC14-MIG-04`, `EC14-HOLD-02` | WS-A, WS-F, Gate | BLOCKED | H-D13 |
| 66 | `3-§10-1` | §8.6 | `EC14-RTV-01`, `EC14-SRC-02`, `EC14-HOLD-01` | WS-F, Gate | BLOCKED | H-D12, H-REVOKE |
| 67 | `3-§10-2` | §8.6 | `EC14-TOT-01`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 68 | `3-§10-3` | §8.6 | `EC14-TOT-01`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 69 | `3-§10-4` | §8.6 | `EC14-TOT-01`, `EC14-HOLD-01` | WS-A, Gate | BLOCKED | H-D12 |
| 70 | `3-§10-5` | §8.6 | `EC14-LDG-02`, `EC14-LDG-03`, `EC14-TOT-01`, `EC14-SRC-03`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, WS-F, Gate | BLOCKED | H-D12, H-FIN |
| 71 | `3-§10-6` | §8.6 | `EC14-UDI-05`, `EC14-RTV-01`, `EC14-SRC-02`, `EC14-HOLD-01`, `EC14-HOLD-06` | WS-B, WS-F, Gate | BLOCKED | H-D12, H-REVOKE, H-UDI |
| 72 | `3-§10-7` | §8.6 | `EC14-UDI-05`, `EC14-RTV-01`, `EC14-SRC-02`, `EC14-HOLD-01`, `EC14-HOLD-06` | WS-B, WS-F, Gate | BLOCKED | H-D12, H-REVOKE, H-UDI |
| 73 | `3-§10-8` | §8.6 | `EC14-RTV-01`, `EC14-SRC-02`, `EC14-HOLD-01` | WS-F, Gate | BLOCKED | H-D12, H-REVOKE |
| 74 | `3-§10-9` | §8.6 | `EC14-TOT-01`, `EC14-UDI-05`, `EC14-RTV-01`, `EC14-SRC-02`, `EC14-NG-01`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, WS-B, WS-F, Cross-cutting, Gate | BLOCKED | H-D12, H-REVOKE, H-FIN |
| 75 | `3-§11-1` | §8.1 | `EC14-LDG-06`, `EC14-SEC-03`, `EC14-HOLD-01` | WS-A, WS-G, Gate | BLOCKED | H-D12 |
| 76 | `3-§11-2` | §8.1 | `EC14-LDG-06`, `EC14-SEC-03`, `EC14-HOLD-01` | WS-A, WS-G, Gate | BLOCKED | H-D12 |
| 77 | `3-§11-3` | §8.1 | `EC14-LDG-06`, `EC14-SEC-03`, `EC14-HOLD-01` | WS-A, WS-G, Gate | BLOCKED | H-D12 |
| 78 | `3-§11-4` | §8.1 | `EC14-LDG-06`, `EC14-SEC-03`, `EC14-NG-01`, `EC14-HOLD-01` | WS-A, WS-G, Cross-cutting, Gate | BLOCKED | H-D12 |
| 79 | `3-§11-5` | §8.1 | `EC14-LDG-06`, `EC14-SEC-03`, `EC14-NG-01`, `EC14-HOLD-01` | WS-A, WS-G, Cross-cutting, Gate | BLOCKED | H-D12 |
| 80 | `3-§11-7` | §8.1 | `EC14-LDG-06`, `EC14-SEC-01`, `EC14-SEC-03`, `EC14-HOLD-01` | WS-A, WS-G, Gate | BLOCKED | H-D12 |
| 81 | `3-§12-2` | §8.1 | `EC14-ARC-02`, `EC14-HOLD-02` | WS-A, Gate | BLOCKED | H-D13 |
| 82 | `3-§12-3` | §8.1 | `EC14-ARC-02`, `EC14-UX-01`, `EC14-HOLD-01` | WS-A, Gate | BLOCKED | H-D12 |
| 83 | `3-§12-4` | §8.1 | `EC14-ARC-02`, `EC14-NG-01`, `EC14-HOLD-02` | WS-A, Cross-cutting, Gate | BLOCKED | H-D13 |
| 84 | `3-§12-5` | §8.1 | `EC14-ARC-02` | WS-A | PASS | — |
| 85 | `3-§14-2` | §8.1 | `EC14-ARC-02` | WS-A | PASS | — |
| 86 | `3-§15-1` | §8.1 | `EC14-ARC-02` | WS-A | PASS | — |
| 87 | `3-§15-2` | §8.1 | `EC14-ARC-02`, `EC14-HOLD-02` | WS-A, Gate | BLOCKED | H-D13 |
| 88 | `3-§15-3` | §8.1 | `EC14-ARC-02`, `EC14-HOLD-02` | WS-A, Gate | BLOCKED | H-D13 |
| 89 | `3-§15-4` | §8.1 | `EC14-ARC-02`, `EC14-HOLD-01` | WS-A, Gate | BLOCKED | H-D12 |
| 90 | `3-§15-5` | §8.1 | `EC14-ARC-02`, `EC14-HOLD-02` | WS-A, Gate | BLOCKED | H-D13 |
| 91 | `3-§16-1` | §8.3 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 92 | `3-§16-2` | §8.3 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 93 | `3-§16-3` | §8.3 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 94 | `3-§16-4` | §8.3 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 95 | `3-§16-5` | §8.3 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 96 | `3-§16-6` | §8.3 | `EC14-IDM-02`, `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-G, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 97 | `3-§16-7` | §8.3 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 98 | `3-§16-8` | §8.3 | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-UDI |
| 99 | `3-§16-9` | §8.3 | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-UDI |
| 100 | `3-§16-10` | §8.3 | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-UDI |
| 101 | `3-§16-11` | §8.3 | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-UDI |
| 102 | `3-§16-12` | §8.3 | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-UDI |
| 103 | `3-§16-13` | §8.3 | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-UDI |
| 104 | `3-§16-14` | §8.3 | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-UDI |
| 105 | `3-§17-1` | §8.7 | `EC14-IDM-01`, `EC14-IDM-03` | WS-G | FOLLOW-UP | H-IDEM |
| 106 | `3-§17-2` | §8.7 | `EC14-IDM-01`, `EC14-IDM-03`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12, H-IDEM |
| 107 | `3-§17-3` | §8.7 | `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 108 | `3-§17-4` | §8.7 | `EC14-CNF-01` | WS-C | PASS | — |
| 109 | `3-§17-5` | §8.7 | `EC14-CNF-01` | WS-C | PASS | — |
| 110 | `3-§17-6` | §8.7 | `EC14-CMD-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Gate | BLOCKED | H-D12, H-FIN |
| 111 | `3-§17-7` | §8.7 | `EC14-HOLD-04`, `EC14-HOLD-11` | Gate | FOLLOW-UP | H-LATER |
| 112 | `3-§17-8` | §8.7 | `EC14-HOLD-01` | Gate | BLOCKED | H-D12 |
| 113 | `3-§17-9` | §8.7 | `EC14-SEC-01`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12 |
| 114 | `3-§17-10` | §8.7 | `EC14-SEC-01`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12 |
| 115 | `3-§17-11` | §8.7 | `EC14-IDM-03`, `EC14-FAIL-01`, `EC14-FAIL-02` | WS-G | FOLLOW-UP | H-STATE |
| 116 | `3-§18-1` | §8.1 | `EC14-LDG-06`, `EC14-SEC-01`, `EC14-HOLD-01` | WS-A, WS-G, Gate | BLOCKED | H-D12 |
| 117 | `3-§18-2` | §8.1 | `EC14-LDG-06`, `EC14-SEC-01`, `EC14-HOLD-01` | WS-A, WS-G, Gate | BLOCKED | H-D12 |
| 118 | `3-§18-3` | §8.1 | `EC14-LDG-06`, `EC14-CMD-02`, `EC14-SEC-01`, `EC14-HOLD-01` | WS-A, WS-G, Gate | BLOCKED | H-D12 |
| 119 | `3-§18-5` | §8.1 | `EC14-LDG-06`, `EC14-SEC-01`, `EC14-SEC-04`, `EC14-NG-01`, `EC14-HOLD-01` | WS-A, WS-G, Cross-cutting, Gate | BLOCKED | H-D12 |
| 120 | `3-§18-6` | §8.1 | `EC14-LDG-06`, `EC14-SEC-01`, `EC14-SEC-04`, `EC14-NG-01` | WS-A, WS-G, Cross-cutting | PASS | — |
| 121 | `3-§19-1` | §8.1 | `EC14-LDG-01`, `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-D13, H-DTX, H-FIN, H-MIG |
| 122 | `3-§19-2` | §8.1 | `EC14-LDG-01`, `EC14-LDG-03`, `EC14-CMD-01`, `EC14-SRC-03`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, WS-F, Cross-cutting, Gate | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| 123 | `3-§19-3` | §8.1 | `EC14-LDG-05`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-D13, H-DTX, H-MIG |
| 124 | `3-§19-4` | §8.3 | `EC14-CNF-03`, `EC14-ADP-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-07`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-B, WS-C, WS-E, Cross-cutting, Gate | BLOCKED | H-D12, H-PROV, H-STO, H-FPRINT |
| 125 | `3-§19-5` | §8.3 | `EC14-CNF-01`, `EC14-VER-02`, `EC14-HOLD-02` | WS-C, Cross-cutting, Gate | BLOCKED | H-D13 |
| 126 | `3-§19-6` | §8.7 | `EC14-IDM-01`, `EC14-VER-02`, `EC14-HOLD-01` | WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-IDEM |
| 127 | `3-§19-7` | §8.3 | `EC14-CMD-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-D12, H-FIN |
| 128 | `3-§19-8` | §8.6 | `EC14-SRC-01`, `EC14-VER-02`, `EC14-HOLD-01` | WS-F, Cross-cutting, Gate | BLOCKED | H-D12 |
| 129 | `3-§19-9` | §8.4 | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-F, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-REVOKE |
| 130 | `3-§19-10` | §8.1 | `EC14-LDG-06`, `EC14-VER-02`, `EC14-HOLD-01` | WS-A, Cross-cutting, Gate | BLOCKED | H-D12 |
| 131 | `3-§19-11` | §8.1 | `EC14-LDG-06`, `EC14-VER-02`, `EC14-HOLD-01` | WS-A, Cross-cutting, Gate | BLOCKED | H-D12 |
| 132 | `3-§19-12` | §8.6 | `EC14-TOT-01`, `EC14-SRC-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-A, WS-F, Cross-cutting, Gate | BLOCKED | H-D12, H-FIN |
| 133 | `3-§19-13a` | §8.1 | `EC14-ARC-02`, `EC14-VER-02`, `EC14-HOLD-02` | WS-A, Cross-cutting, Gate | BLOCKED | H-D13 |
| 134 | `3-§19-14` | §8.7 | `EC14-SEC-01`, `EC14-VER-02`, `EC14-HOLD-01` | WS-G, Cross-cutting, Gate | BLOCKED | H-D12 |
| 135 | `3-§20-1` | §8.9 | `EC14-LDG-04`, `EC14-NG-01` | WS-A, Cross-cutting | PASS | — |
| 136 | `3-§20-2` | §8.9 | `EC14-LDG-04`, `EC14-NG-01` | WS-A, Cross-cutting | PASS | — |
| 137 | `3-§20-3` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 138 | `3-§20-4` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 139 | `3-§20-5` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 140 | `3-§20-6` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 141 | `3-§22-1` | §8.1 | `EC14-LDG-04`, `EC14-CMD-01`, `EC14-CMD-03`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-DTX, H-MIG |
| 142 | `3-§22-2` | §8.1 | `EC14-LDG-04`, `EC14-CMD-01`, `EC14-CMD-03`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-DTX, H-MIG |
| 143 | `5-§2-2` | §8.2 | `EC14-UDI-06`, `EC14-NG-01` | WS-B, Cross-cutting | PASS | — |
| 144 | `5-§3-1` | §8.2 | `EC14-UDI-01`, `EC14-PRV-01`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D12, H-PROV, H-UDI |
| 145 | `5-§3-2` | §8.2 | `EC14-UDI-07`, `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 146 | `5-§3-3` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 147 | `5-§4-1` | §8.2 | `EC14-UDI-02`, `EC14-UDI-04`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-B, WS-E, Gate | FOLLOW-UP | H-PROV, H-STO, H-UDI |
| 148 | `5-§4-2` | §8.2 | `EC14-UDI-02`, `EC14-UDI-04`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-B, WS-E, Gate | FOLLOW-UP | H-PROV, H-STO, H-UDI |
| 149 | `5-§4-3` | §8.2 | `EC14-UDI-02`, `EC14-UDI-04`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-B, WS-E, Gate | FOLLOW-UP | H-PROV, H-STO, H-UDI |
| 150 | `5-§4-4` | §8.2 | `EC14-UDI-02`, `EC14-UDI-03`, `EC14-UDI-05` | WS-B | PASS | — |
| 151 | `5-§4-5` | §8.2 | `EC14-UDI-02`, `EC14-UDI-03`, `EC14-UDI-05` | WS-B | PASS | — |
| 152 | `5-§4-6` | §8.2 | `EC14-UDI-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 153 | `5-§4-7` | §8.2 | `EC14-UDI-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 154 | `5-§4-8` | §8.2 | `EC14-UDI-02`, `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 155 | `5-§4-9` | §8.2 | `EC14-UDI-02`, `EC14-ADP-02`, `EC14-HOLD-05` | WS-B, Gate | FOLLOW-UP | H-FIN |
| 156 | `5-§4-14` | §8.2 | `EC14-UDI-01`, `EC14-UDI-02` | WS-B | PASS | — |
| 157 | `5-§5-1` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 158 | `5-§5-2` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 159 | `5-§5-3` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 160 | `5-§5-4` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 161 | `5-§5-5` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 162 | `5-§5-6` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 163 | `5-§5-7` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 164 | `5-§5-8` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 165 | `5-§5-9` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-NG-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Cross-cutting, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 166 | `5-§6-1` | §8.4 | `EC14-CAB-01`, `EC14-RET-01`, `EC14-RET-03`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-08`, `EC14-HOLD-10` | WS-D, WS-E, WS-G, Cross-cutting, Gate | FOLLOW-UP | H-STO, H-LEG, H-BIRTH, H-DISCARD |
| 167 | `5-§6-2` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-08` | WS-D, WS-E, WS-G, Cross-cutting, Gate | FOLLOW-UP | H-STO, H-BIRTH |
| 168 | `5-§6-3` | §8.4 | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-08` | WS-D, WS-E, WS-F, Gate | BLOCKED | H-D12, H-D13, H-STO, H-REVOKE |
| 169 | `5-§6-4` | §8.4 | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-F, Gate | BLOCKED | H-D12, H-STO, H-REVOKE |
| 170 | `5-§6-5` | §8.4 | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-F, Gate | BLOCKED | H-D12, H-STO, H-REVOKE |
| 171 | `5-§6-6` | §8.4 | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-F, Gate | BLOCKED | H-D12, H-STO, H-REVOKE |
| 172 | `5-§6-7` | §8.4 | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-F, Gate | BLOCKED | H-D12, H-STO, H-REVOKE |
| 173 | `5-§6-8` | §8.4 | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-F, Gate | BLOCKED | H-D12, H-STO, H-REVOKE |
| 174 | `5-§6-9` | §8.4 | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-F, Gate | BLOCKED | H-D12, H-STO, H-REVOKE |
| 175 | `5-§6-11` | §8.4 | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | WS-D, WS-E, WS-F, Gate | BLOCKED | H-D12, H-STO, H-LATER, H-REVOKE |
| 176 | `5-§6-13` | §8.4 | `EC14-CAB-04`, `EC14-NG-01` | WS-D, Cross-cutting | PASS | — |
| 177 | `5-§7-1` | §8.2 | `EC14-ARC-01` | Cross-cutting | PASS | — |
| 178 | `5-§7-2` | §8.2 | `EC14-CMD-01`, `EC14-ADP-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-A, WS-B, WS-E, Cross-cutting, Gate | BLOCKED | H-D12, H-PROV, H-DTX, H-STO, H-UDI, H-MIG |
| 179 | `5-§7-3` | §8.2 | `EC14-ADP-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-B, Cross-cutting, Gate | BLOCKED | H-D12, H-FIN |
| 180 | `5-§7-4` | §8.2 | `EC14-ADP-01`, `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-04`, `EC14-HOLD-06`, `EC14-HOLD-09`, `EC14-HOLD-11` | WS-B, Cross-cutting, Gate | BLOCKED | H-D12, H-PROV, H-LATER, H-UDI |
| 181 | `5-§7-8` | §8.2 | `EC14-ARC-01`, `EC14-HOLD-01` | Cross-cutting, Gate | BLOCKED | H-D12 |
| 182 | `5-§8-2` | §8.2 | `EC14-UDI-01`, `EC14-HOLD-02` | WS-B, Gate | BLOCKED | H-D13 |
| 183 | `5-§8-3` | §8.2 | `EC14-UDI-01`, `EC14-HOLD-01` | WS-B, Gate | BLOCKED | H-D12 |
| 184 | `5-§8-4` | §8.2 | `EC14-UDI-01`, `EC14-NG-01`, `EC14-HOLD-02` | WS-B, Cross-cutting, Gate | BLOCKED | H-D13 |
| 185 | `5-§9-1` | §8.3 | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 186 | `5-§9-2` | §8.3 | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 187 | `5-§9-3` | §8.3 | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 188 | `5-§9-4` | §8.3 | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 189 | `5-§9-5` | §8.3 | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 190 | `5-§9-6` | §8.3 | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 191 | `5-§9-7` | §8.3 | `EC14-IDM-02`, `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, WS-G, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 192 | `5-§9-8` | §8.3 | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 193 | `5-§9-9` | §8.3 | `EC14-CNF-03`, `EC14-HOLD-01`, `EC14-HOLD-07` | WS-C, Gate | BLOCKED | H-D12, H-FPRINT |
| 194 | `5-§10-1` | §8.3 | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 195 | `5-§10-2` | §8.3 | `EC14-CNF-01`, `EC14-HOLD-06` | WS-C, Gate | FOLLOW-UP | H-UDI |
| 196 | `5-§10-3` | §8.3 | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 197 | `5-§10-4` | §8.3 | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 198 | `5-§10-5` | §8.3 | `EC14-UDI-03`, `EC14-CNF-01`, `EC14-HOLD-06` | WS-B, WS-C, Gate | FOLLOW-UP | H-UDI |
| 199 | `5-§10-6` | §8.3 | `EC14-CNF-01`, `EC14-HOLD-06` | WS-C, Gate | FOLLOW-UP | H-UDI |
| 200 | `5-§10-7` | §8.3 | `EC14-IDM-02`, `EC14-CNF-01`, `EC14-HOLD-06` | WS-C, WS-G, Gate | FOLLOW-UP | H-UDI |
| 201 | `5-§10-8` | §8.3 | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 202 | `5-§10-9` | §8.3 | `EC14-CNF-01`, `EC14-CNF-04`, `EC14-HOLD-01`, `EC14-HOLD-06` | WS-C, Gate | BLOCKED | H-D12, H-UDI |
| 203 | `5-§10-10` | §8.3 | `EC14-CNF-01`, `EC14-FAIL-01`, `EC14-FAIL-02` | WS-C, WS-G | FOLLOW-UP | H-STATE |
| 204 | `5-§11-1` | §8.7 | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12, H-IDEM |
| 205 | `5-§11-2` | §8.7 | `EC14-IDM-01`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12, H-IDEM |
| 206 | `5-§11-3` | §8.7 | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12, H-IDEM |
| 207 | `5-§11-4` | §8.7 | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-04`, `EC14-HOLD-11` | WS-G, Gate | BLOCKED | H-D12, H-D13, H-LATER, H-IDEM |
| 208 | `5-§11-5` | §8.7 | `EC14-IDM-01`, `EC14-UDI-01` | WS-B, WS-G | FOLLOW-UP | H-IDEM |
| 209 | `5-§12-1` | §8.7 | `EC14-SEC-03`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12 |
| 210 | `5-§12-2` | §8.7 | `EC14-SEC-03`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12 |
| 211 | `5-§12-3` | §8.7 | `EC14-SEC-03`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12 |
| 212 | `5-§12-4` | §8.7 | `EC14-SEC-03`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12 |
| 213 | `5-§12-5` | §8.7 | `EC14-UDI-08`, `EC14-SEC-03`, `EC14-NG-01`, `EC14-HOLD-01` | WS-B, WS-G, Cross-cutting, Gate | BLOCKED | H-D12 |
| 214 | `5-§12-6` | §8.7 | `EC14-SEC-03`, `EC14-SEC-04`, `EC14-NG-01`, `EC14-HOLD-01` | WS-G, Cross-cutting, Gate | BLOCKED | H-D12 |
| 215 | `5-§13-1` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 216 | `5-§13-2` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 217 | `5-§13-3` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 218 | `5-§13-4` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 219 | `5-§13-5` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 220 | `5-§13-6` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 221 | `5-§13-7` | §8.2 | `EC14-UDI-07`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 222 | `5-§13-8` | §8.2 | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-UDI |
| 223 | `5-§13-9` | §8.2 | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-UDI |
| 224 | `5-§13-10` | §8.2 | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-UDI |
| 225 | `5-§13-11` | §8.2 | `EC14-UDI-06`, `EC14-UDI-08`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-UDI |
| 226 | `5-§13-12` | §8.2 | `EC14-UDI-06`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-UDI |
| 227 | `5-§14-1` | §8.2 | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 228 | `5-§14-2` | §8.2 | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 229 | `5-§14-3` | §8.2 | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 230 | `5-§14-4` | §8.2 | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 231 | `5-§14-5` | §8.2 | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 232 | `5-§14-6` | §8.2 | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 233 | `5-§14-7` | §8.2 | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 234 | `5-§14-8` | §8.2 | `EC14-UDI-04`, `EC14-NG-01`, `EC14-HOLD-06` | WS-B, Cross-cutting, Gate | FOLLOW-UP | H-UDI |
| 235 | `5-§15-1` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-B, WS-D, WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-BIRTH, H-MIG |
| 236 | `5-§15-2` | §8.4 | `EC14-CAB-01`, `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-B, WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 237 | `5-§15-3` | §8.4 | `EC14-CAB-01`, `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-B, WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 238 | `5-§15-4` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-B, WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 239 | `5-§15-5` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-B, WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 240 | `5-§15-6` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-B, WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 241 | `5-§15-7` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-B, WS-D, WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-BIRTH, H-MIG |
| 242 | `5-§15-8` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-B, WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 243 | `5-§15-9` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-B, WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 244 | `5-§15-10` | §8.4 | `EC14-CAB-01`, `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-B, WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 245 | `5-§15-11` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-03`, `EC14-MIG-05` | WS-B, WS-D, WS-G, Cross-cutting | FOLLOW-UP | H-BIRTH, H-MIG |
| 246 | `5-§16-1` | §8.7 | `EC14-SEC-01`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12 |
| 247 | `5-§16-2` | §8.5 | `EC14-SEC-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, WS-G, Gate | BLOCKED | H-D12, H-STO |
| 248 | `5-§16-3` | §8.5 | `EC14-RET-01`, `EC14-RET-03`, `EC14-SEC-01`, `EC14-HOLD-10` | WS-E, WS-G, Gate | FOLLOW-UP | H-LEG, H-DISCARD |
| 249 | `5-§16-4` | §8.2 | `EC14-UDI-02`, `EC14-HOLD-06` | WS-B, Gate | FOLLOW-UP | H-UDI |
| 250 | `5-§16-5` | §8.2 | `EC14-UDI-02`, `EC14-HOLD-06` | WS-B, Gate | FOLLOW-UP | H-UDI |
| 251 | `5-§16-6` | §8.7 | `EC14-SEC-01`, `EC14-NG-01`, `EC14-HOLD-01` | WS-G, Cross-cutting, Gate | BLOCKED | H-D12 |
| 252 | `5-§16-7` | §8.2 | `EC14-UDI-06`, `EC14-UDI-08`, `EC14-PRV-01`, `EC14-NG-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Cross-cutting, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 253 | `5-§17-1` | §8.7 | `EC14-UDI-02`, `EC14-FAIL-01`, `EC14-FAIL-02` | WS-B, WS-G | FOLLOW-UP | H-STATE |
| 254 | `5-§17-2` | §8.7 | `EC14-UDI-02`, `EC14-FAIL-01`, `EC14-FAIL-02` | WS-B, WS-G | FOLLOW-UP | H-STATE |
| 255 | `5-§17-3` | §8.7 | `EC14-UDI-02`, `EC14-FAIL-01`, `EC14-FAIL-02` | WS-B, WS-G | FOLLOW-UP | H-STATE |
| 256 | `5-§17-4` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-01`, `EC14-HOLD-09` | WS-B, WS-G, Gate | FOLLOW-UP | H-PROV, H-STATE |
| 257 | `5-§17-5` | §8.7 | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12, H-IDEM, H-STATE |
| 258 | `5-§17-6` | §8.7 | `EC14-CMD-01`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-HOLD-03` | WS-A, WS-B, WS-G, Cross-cutting, Gate | BLOCKED | H-DTX, H-STATE, H-MIG |
| 259 | `5-§17-7` | §8.7 | `EC14-CNF-04`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-STATE |
| 260 | `5-§17-8` | §8.7 | `EC14-CNF-04`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-STATE |
| 261 | `5-§17-9` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-STATE |
| 262 | `5-§17-10` | §8.7 | `EC14-IDM-01`, `EC14-IDM-03`, `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12, H-IDEM, H-STATE |
| 263 | `5-§17-11` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-NG-01` | WS-G, Cross-cutting | FOLLOW-UP | H-STATE |
| 264 | `5-§18-1` | §8.3 | `EC14-CMD-01`, `EC14-CNF-03`, `EC14-ADP-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-07`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-A, WS-B, WS-C, WS-E, Cross-cutting, Gate | BLOCKED | H-D12, H-PROV, H-DTX, H-STO, H-FPRINT, H-MIG |
| 265 | `5-§18-2` | §8.3 | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Cross-cutting, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 266 | `5-§18-3` | §8.2 | `EC14-UDI-04`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-B, WS-E, Cross-cutting, Gate | FOLLOW-UP | H-PROV, H-STO, H-UDI |
| 267 | `5-§18-4` | §8.2 | `EC14-UDI-03`, `EC14-VER-02`, `EC14-HOLD-01` | WS-B, Cross-cutting, Gate | BLOCKED | H-D12 |
| 268 | `5-§18-5` | §8.2 | `EC14-ADP-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-B, Cross-cutting, Gate | BLOCKED | H-D12, H-FIN |
| 269 | `5-§18-6` | §8.7 | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-VER-02`, `EC14-HOLD-01` | WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-IDEM |
| 270 | `5-§18-7` | §8.4 | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-F, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-REVOKE |
| 271 | `5-§18-8a` | §8.2 | `EC14-VER-02`, `EC14-HOLD-02` | Cross-cutting, Gate | BLOCKED | H-D13 |
| 272 | `5-§18-9` | §8.7 | `EC14-SEC-03`, `EC14-VER-02`, `EC14-HOLD-01` | WS-G, Cross-cutting, Gate | BLOCKED | H-D12 |
| 273 | `5-§18-10` | §8.7 | `EC14-SEC-01`, `EC14-VER-02`, `EC14-HOLD-01` | WS-G, Cross-cutting, Gate | BLOCKED | H-D12 |
| 274 | `5-§18-11` | §8.7 | `EC14-FAIL-02`, `EC14-VER-02` | WS-G, Cross-cutting | PASS | — |
| 275 | `5-§19-1` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 276 | `5-§19-2` | §8.9 | `EC14-UDI-01`, `EC14-NG-01` | WS-B, Cross-cutting | PASS | — |
| 277 | `5-§19-3` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 278 | `5-§19-4` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 279 | `5-§19-5` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 280 | `22-§4-1` | §8.1 | `EC14-ARC-01`, `EC14-HOLD-01` | Cross-cutting, Gate | BLOCKED | H-D12 |
| 281 | `22-§4-2` | §8.1 | `EC14-ARC-01`, `EC14-HOLD-01` | Cross-cutting, Gate | BLOCKED | H-D12 |
| 282 | `22-§4-3` | §8.1 | `EC14-ARC-01` | Cross-cutting | PASS | — |
| 283 | `22-§4-4` | §8.1 | `EC14-ARC-01`, `EC14-NG-01` | Cross-cutting | PASS | — |
| 284 | `22-§9-1` | §8.2 | `EC14-ARC-01`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Cross-cutting, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 285 | `22-§9-2` | §8.2 | `EC14-UDI-01`, `EC14-PRV-01`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D12, H-PROV, H-UDI |
| 286 | `22-§9-3` | §8.2 | `EC14-UDI-01`, `EC14-NG-01`, `EC14-HOLD-06` | WS-B, Cross-cutting, Gate | FOLLOW-UP | H-UDI |
| 287 | `22-§10-1` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-BIRTH |
| 288 | `22-§10-2` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-BIRTH |
| 289 | `22-§10-3` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-BIRTH |
| 290 | `22-§10-4` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-BIRTH |
| 291 | `22-§10-5` | §8.4 | `EC14-CAB-01`, `EC14-RET-01`, `EC14-RET-03`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08`, `EC14-HOLD-10` | WS-D, WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-LEG, H-BIRTH, H-DISCARD |
| 292 | `22-§10-6` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-BIRTH |
| 293 | `22-§10-7` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-NG-01` | WS-D, WS-G, Cross-cutting | FOLLOW-UP | H-BIRTH |
| 294 | `22-§17-1` | §8.5 | `EC14-ARC-01` | Cross-cutting | PASS | — |
| 295 | `22-§17-7` | §8.5 | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 296 | `22-§17-9` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 297 | `22-§19-1` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-02` | WS-G | FOLLOW-UP | H-STATE |
| 298 | `22-§19-2` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-STATE |
| 299 | `22-§19-3` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-02` | WS-G | FOLLOW-UP | H-STATE |
| 300 | `22-§19-4` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-02` | WS-G | FOLLOW-UP | H-STATE |
| 301 | `22-§19-5` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-02` | WS-G | FOLLOW-UP | H-STATE |
| 302 | `22-§19-6` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-STATE |
| 303 | `22-§19-7` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-B, WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-PROV, H-STATE |
| 304 | `22-§21` | §8.8 | `EC14-PRV-02`, `EC14-PERF-01`, `EC14-HOLD-08` | WS-E, WS-F, Gate | FOLLOW-UP | H-STO |
| 305 | `22-§22-1` | §8.8 | `EC14-VER-01` | Cross-cutting | PASS | — |
| 306 | `22-§22-2` | §8.8 | `EC14-VER-01` | Cross-cutting | PASS | — |
| 307 | `22-§22-3` | §8.8 | `EC14-VER-01` | Cross-cutting | PASS | — |
| 308 | `22-§22-4` | §8.8 | `EC14-VER-01` | Cross-cutting | PASS | — |
| 309 | `22-§22-5` | §8.8 | `EC14-VER-01` | Cross-cutting | PASS | — |
| 310 | `22-§22-6` | §8.8 | `EC14-VER-01`, `EC14-NG-01` | Cross-cutting | PASS | — |
| 311 | `22-§23-2` | §8.7 | `EC14-SEC-01`, `EC14-NG-01`, `EC14-HOLD-01` | WS-G, Cross-cutting, Gate | BLOCKED | H-D12 |
| 312 | `22-§23-3` | §8.7 | `EC14-SEC-04`, `EC14-NG-01`, `EC14-HOLD-01` | WS-G, Cross-cutting, Gate | BLOCKED | H-D12 |
| 313 | `22-§23-5` | §8.7 | `EC14-SEC-03`, `EC14-NG-01`, `EC14-HOLD-01` | WS-G, Cross-cutting, Gate | BLOCKED | H-D12 |
| 314 | `22-§23-7` | §8.7 | `EC14-STO-09`, `EC14-NG-01` | WS-E, Cross-cutting | PASS | — |
| 315 | `22-§27-1` | §8.8 | `EC14-DOC-01` | Cross-cutting | PASS | — |
| 316 | `22-§27-2` | §8.8 | `EC14-DOC-01` | Cross-cutting | PASS | — |
| 317 | `22-§27-3` | §8.8 | `EC14-DOC-01` | Cross-cutting | PASS | — |
| 318 | `22-§27-4` | §8.8 | `EC14-DOC-01` | Cross-cutting | PASS | — |
| 319 | `22-§27-5` | §8.8 | `EC14-DOC-01` | Cross-cutting | PASS | — |
| 320 | `22-§27-6` | §8.8 | `EC14-DOC-01` | Cross-cutting | PASS | — |
| 321 | `22-§27-7` | §8.8 | `EC14-DOC-01` | Cross-cutting | PASS | — |
| 322 | `22-§27-8` | §8.8 | `EC14-NG-01`, `EC14-DOC-01` | Cross-cutting | PASS | — |
| 323 | `22-§28-1` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 324 | `22-§28-2` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 325 | `22-§28-3` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 326 | `22-§28-4` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 327 | `22-§28-5` | §8.9 | `EC14-UDI-01`, `EC14-NG-01` | WS-B, Cross-cutting | PASS | — |
| 328 | `22-§28-6` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 329 | `22-§28-7` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 330 | `22-§28-8` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 331 | `22-§28-9` | §8.9 | `EC14-CMD-03`, `EC14-NG-01` | WS-A, Cross-cutting | PASS | — |
| 332 | `22-§28-10` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 333 | `22-§29-3` | §8.7 | `EC14-SEC-01`, `EC14-VER-02`, `EC14-HOLD-01` | WS-G, Cross-cutting, Gate | BLOCKED | H-D12 |
| 334 | `22-§29-5` | §8.2 | `EC14-UDI-01`, `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Cross-cutting, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 335 | `22-§29-7` | §8.3 | `EC14-CMD-01`, `EC14-CNF-03`, `EC14-CNF-04`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-07` | WS-A, WS-C, Cross-cutting, Gate | BLOCKED | H-D12, H-DTX, H-FPRINT, H-MIG |
| 336 | `22-§29-8` | §8.7 | `EC14-IDM-01`, `EC14-VER-02`, `EC14-HOLD-01` | WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-IDEM |
| 337 | `22-§29-10` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-B, WS-E, WS-G, Cross-cutting, Gate | FOLLOW-UP | H-STO, H-PROV, H-STATE |
| 338 | `22-§29-12` | §8.4 | `EC14-CAB-02`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, Cross-cutting, Gate | BLOCKED | H-D12, H-STO |
| 339 | `22-§29-13` | §8.7 | `EC14-UDI-09`, `EC14-FAIL-01`, `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-09` | WS-B, WS-G, Cross-cutting, Gate | FOLLOW-UP | H-PROV, H-STATE |
| 340 | `22-§29-14` | §8.8 | `EC14-VER-02`, `EC14-DOC-01` | Cross-cutting | PASS | — |
| 341 | `25-§4-1` | §8.5 | `EC14-STO-01`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-08` | WS-E, Cross-cutting, Gate | FOLLOW-UP | H-STO, H-MIG |
| 342 | `25-§4-2` | §8.5 | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 343 | `25-§4-3` | §8.5 | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 344 | `25-§4-4` | §8.5 | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 345 | `25-§4-5` | §8.5 | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 346 | `25-§4-6` | §8.5 | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 347 | `25-§4-7` | §8.5 | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 348 | `25-§4-8` | §8.5 | `EC14-STO-01`, `EC14-RET-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-10` | WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-LEG, H-BIRTH, H-MIG |
| 349 | `25-§4-9` | §8.5 | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 350 | `25-§4-10` | §8.5 | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 351 | `25-§4-11` | §8.5 | `EC14-STO-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 352 | `25-§4-12` | §8.5 | `EC14-STO-01`, `EC14-STO-04`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-NG-01`, `EC14-HOLD-01` | WS-E, Cross-cutting, Gate | BLOCKED | H-D12, H-MIG |
| 353 | `25-§5-1` | §8.5 | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 354 | `25-§5-2` | §8.5 | `EC14-STO-01` | WS-E | PASS | — |
| 355 | `25-§6-1` | §8.5 | `EC14-ARC-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Cross-cutting, Gate | FOLLOW-UP | H-STO |
| 356 | `25-§6-2` | §8.5 | `EC14-ARC-01` | Cross-cutting | PASS | — |
| 357 | `25-§7-1` | §8.5 | `EC14-ARC-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Cross-cutting, Gate | FOLLOW-UP | H-STO |
| 358 | `25-§7-2` | §8.5 | `EC14-ARC-01` | Cross-cutting | PASS | — |
| 359 | `25-§8-1` | §8.5 | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` | WS-E, Gate | BLOCKED | H-D12, H-PRIV |
| 360 | `25-§8-2` | §8.5 | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` | WS-E, Gate | BLOCKED | H-D12, H-PRIV |
| 361 | `25-§8-3` | §8.5 | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` | WS-E, Gate | BLOCKED | H-D12, H-PRIV |
| 362 | `25-§8-4` | §8.5 | `EC14-UDI-02`, `EC14-STO-02`, `EC14-STO-03` | WS-B, WS-E | FOLLOW-UP | H-PRIV |
| 363 | `25-§8-5` | §8.5 | `EC14-STO-02`, `EC14-STO-03`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO, H-PRIV |
| 364 | `25-§8-6` | §8.5 | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` | WS-E, Gate | BLOCKED | H-D12, H-PRIV |
| 365 | `25-§8-7` | §8.5 | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` | WS-E, Gate | BLOCKED | H-D12, H-PRIV |
| 366 | `25-§8-8` | §8.5 | `EC14-STO-02`, `EC14-STO-03`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-E, Gate | FOLLOW-UP | H-PROV, H-PRIV, H-UDI |
| 367 | `25-§8-9` | §8.5 | `EC14-CMD-01`, `EC14-STO-02`, `EC14-STO-03`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-03` | WS-A, WS-E, Cross-cutting, Gate | BLOCKED | H-D12, H-DTX, H-PRIV, H-MIG |
| 368 | `25-§8-10` | §8.5 | `EC14-STO-02`, `EC14-STO-03`, `EC14-HOLD-01` | WS-E, Gate | BLOCKED | H-D12, H-PRIV |
| 369 | `25-§8-11` | §8.5 | `EC14-STO-02`, `EC14-STO-03`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-08` | WS-E, WS-G, Cross-cutting, Gate | FOLLOW-UP | H-STO, H-PRIV, H-STATE |
| 370 | `25-§9-1` | §8.5 | `EC14-STO-03`, `EC14-RTV-01`, `EC14-HOLD-01` | WS-E, WS-F, Gate | BLOCKED | H-D12, H-REVOKE, H-PRIV |
| 371 | `25-§9-2` | §8.5 | `EC14-STO-03`, `EC14-RTV-01`, `EC14-HOLD-01` | WS-E, WS-F, Gate | BLOCKED | H-D12, H-REVOKE, H-PRIV |
| 372 | `25-§9-3` | §8.5 | `EC14-STO-03`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-F, Gate | FOLLOW-UP | H-STO, H-REVOKE, H-PRIV |
| 373 | `25-§9-4` | §8.5 | `EC14-STO-03`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, WS-F, Gate | BLOCKED | H-D12, H-STO, H-REVOKE, H-PRIV |
| 374 | `25-§9-5` | §8.5 | `EC14-STO-03`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-F, Gate | FOLLOW-UP | H-STO, H-REVOKE, H-PRIV |
| 375 | `25-§9-6` | §8.5 | `EC14-STO-03`, `EC14-RTV-01`, `EC14-HOLD-01` | WS-E, WS-F, Gate | BLOCKED | H-D12, H-REVOKE, H-PRIV |
| 376 | `25-§9-7` | §8.5 | `EC14-STO-03`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, WS-F, Gate | BLOCKED | H-D12, H-STO, H-REVOKE, H-PRIV |
| 377 | `25-§9-8` | §8.5 | `EC14-STO-03`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-F, Gate | FOLLOW-UP | H-STO, H-REVOKE, H-PRIV |
| 378 | `25-§10-1` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-NG-01` | WS-D, WS-G, Cross-cutting | FOLLOW-UP | H-BIRTH, H-MIG |
| 379 | `25-§10-2` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05` | WS-D, WS-G, Cross-cutting | FOLLOW-UP | H-BIRTH, H-MIG |
| 380 | `25-§10-3` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 381 | `25-§10-4` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 382 | `25-§10-5` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 383 | `25-§10-6` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 384 | `25-§10-7` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 385 | `25-§10-8` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 386 | `25-§10-9` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 387 | `25-§10-10` | §8.4 | `EC14-CAB-01`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 388 | `25-§10-11` | §8.4 | `EC14-CAB-01`, `EC14-RET-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-10` | WS-D, WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-LEG, H-BIRTH, H-MIG |
| 389 | `25-§10-12` | §8.4 | `EC14-CAB-01`, `EC14-CAB-02`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 390 | `25-§11-1` | §8.4 | `EC14-CAB-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-B, WS-D, WS-E, Gate | FOLLOW-UP | H-PROV, H-STO, H-UDI |
| 391 | `25-§11-2` | §8.4 | `EC14-CAB-01`, `EC14-NG-01` | WS-D, Cross-cutting | PASS | — |
| 392 | `25-§11-3` | §8.4 | `EC14-CAB-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-D, WS-E, Gate | FOLLOW-UP | H-STO |
| 393 | `25-§11-4` | §8.4 | `EC14-CAB-01`, `EC14-FAIL-01` | WS-D, WS-G | FOLLOW-UP | H-STATE |
| 394 | `25-§12-1` | §8.5 | `EC14-RET-01`, `EC14-RET-02`, `EC14-RET-03`, `EC14-PRV-02`, `EC14-HOLD-02`, `EC14-HOLD-08`, `EC14-HOLD-10` | WS-E, Gate | BLOCKED | H-D13, H-STO, H-LEG, H-DISCARD |
| 395 | `25-§12-2` | §8.5 | `EC14-RET-02`, `EC14-HOLD-02` | WS-E, Gate | BLOCKED | H-D13 |
| 396 | `25-§12-3` | §8.5 | `EC14-RET-01`, `EC14-RET-02`, `EC14-RET-03`, `EC14-NG-01`, `EC14-HOLD-10` | WS-E, Cross-cutting, Gate | FOLLOW-UP | H-LEG, H-DISCARD |
| 397 | `25-§13-1a` | §8.5 | `EC14-STO-08`, `EC14-PRV-02`, `EC14-HOLD-02`, `EC14-HOLD-08` | WS-E, Gate | BLOCKED | H-D13, H-STO |
| 398 | `25-§13-2` | §8.5 | `EC14-STO-08`, `EC14-NG-01` | WS-E, Cross-cutting | PASS | — |
| 399 | `25-§13-3` | §8.5 | `EC14-STO-08`, `EC14-HOLD-01` | WS-E, Gate | BLOCKED | H-D12 |
| 400 | `25-§14-1` | §8.5 | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 401 | `25-§14-2` | §8.5 | `EC14-IDM-01`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12, H-IDEM |
| 402 | `25-§14-3` | §8.5 | `EC14-IDM-01`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12, H-IDEM |
| 403 | `25-§14-4` | §8.5 | `EC14-IDM-01`, `EC14-IDM-02` | WS-G | FOLLOW-UP | H-IDEM |
| 404 | `25-§14-5` | §8.5 | `EC14-IDM-01`, `EC14-IDM-03`, `EC14-HOLD-01` | WS-G, Gate | BLOCKED | H-D12, H-IDEM |
| 405 | `25-§14-6` | §8.5 | `EC14-STO-03`, `EC14-STO-05`, `EC14-RET-01`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | WS-E, Gate | FOLLOW-UP | H-STO, H-LATER, H-PRIV, H-DISCARD |
| 406 | `25-§14-7` | §8.5 | `EC14-STO-01`, `EC14-NG-01` | WS-E, Cross-cutting | PASS | — |
| 407 | `25-§15-1` | §8.5 | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 408 | `25-§15-2` | §8.5 | `EC14-STO-01` | WS-E | PASS | — |
| 409 | `25-§15-3` | §8.5 | `EC14-STO-01`, `EC14-NG-01` | WS-E, Cross-cutting | PASS | — |
| 410 | `25-§15-4` | §8.5 | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 411 | `25-§16-1` | §8.5 | `EC14-STO-07`, `EC14-RET-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO, H-DISCARD |
| 412 | `25-§16-2` | §8.5 | `EC14-STO-07`, `EC14-RET-01`, `EC14-RET-03`, `EC14-HOLD-10` | WS-E, Gate | FOLLOW-UP | H-LEG, H-DISCARD |
| 413 | `25-§16-3` | §8.5 | `EC14-STO-07`, `EC14-NG-01` | WS-E, Cross-cutting | PASS | — |
| 414 | `25-§17-2` | §8.5 | `EC14-STO-07`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | WS-E, Gate | FOLLOW-UP | H-STO, H-LATER |
| 415 | `25-§17-3` | §8.5 | `EC14-STO-03`, `EC14-STO-07`, `EC14-HOLD-01` | WS-E, Gate | BLOCKED | H-D12, H-PRIV |
| 416 | `25-§17-4` | §8.5 | `EC14-STO-07`, `EC14-NG-01` | WS-E, Cross-cutting | PASS | — |
| 417 | `25-§17-5` | §8.5 | `EC14-STO-07`, `EC14-RET-03`, `EC14-HOLD-10` | WS-E, Gate | FOLLOW-UP | H-LEG |
| 418 | `25-§17-6` | §8.5 | `EC14-STO-07`, `EC14-RET-01`, `EC14-RET-03`, `EC14-HOLD-10` | WS-E, Gate | FOLLOW-UP | H-LEG, H-DISCARD |
| 419 | `25-§17-7` | §8.5 | `EC14-STO-07`, `EC14-NG-01` | WS-E, Cross-cutting | PASS | — |
| 420 | `25-§18-1` | §8.5 | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 421 | `25-§18-2` | §8.5 | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 422 | `25-§18-3` | §8.5 | `EC14-STO-01`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-08` | WS-E, Cross-cutting, Gate | FOLLOW-UP | H-STO |
| 423 | `25-§19-1` | §8.5 | `EC14-STO-04`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, Gate | BLOCKED | H-D12, H-STO |
| 424 | `25-§19-2` | §8.5 | `EC14-STO-04`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, Cross-cutting, Gate | BLOCKED | H-D12, H-STO |
| 425 | `25-§19-3` | §8.5 | `EC14-STO-04`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, Cross-cutting, Gate | BLOCKED | H-D12, H-STO |
| 426 | `25-§19-4` | §8.5 | `EC14-STO-04`, `EC14-PRV-02`, `EC14-ENV-01`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, Cross-cutting, Gate | BLOCKED | H-D12, H-STO |
| 427 | `25-§19-5` | §8.5 | `EC14-STO-04`, `EC14-PRV-02`, `EC14-ENV-01`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, Cross-cutting, Gate | BLOCKED | H-D12, H-STO |
| 428 | `25-§19-6` | §8.5 | `EC14-STO-04`, `EC14-ENV-01`, `EC14-NG-01` | WS-E, Cross-cutting | PASS | — |
| 429 | `25-§19-7` | §8.5 | `EC14-STO-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, WS-F, Gate | BLOCKED | H-D12, H-STO, H-REVOKE |
| 430 | `25-§19-8` | §8.5 | `EC14-UDI-02`, `EC14-STO-04`, `EC14-HOLD-06` | WS-B, WS-E, Gate | FOLLOW-UP | H-UDI |
| 431 | `25-§20-1` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-STATE |
| 432 | `25-§20-2` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-STATE |
| 433 | `25-§20-3` | §8.7 | `EC14-STO-05`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-STATE |
| 434 | `25-§20-4` | §8.7 | `EC14-STO-05`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-STATE |
| 435 | `25-§20-5` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-STATE |
| 436 | `25-§20-6` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-STATE |
| 437 | `25-§20-7` | §8.7 | `EC14-RTV-01`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-F, WS-G, Gate | FOLLOW-UP | H-STO, H-REVOKE, H-STATE |
| 438 | `25-§20-8` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-STATE |
| 439 | `25-§20-9` | §8.7 | `EC14-STO-05`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-STATE |
| 440 | `25-§20-10` | §8.7 | `EC14-IDM-03`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-STATE |
| 441 | `25-§20-11` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-STATE |
| 442 | `25-§20-12` | §8.7 | `EC14-STO-05`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-STATE |
| 443 | `25-§20-13` | §8.7 | `EC14-RTV-01`, `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, WS-F, WS-G, Gate | BLOCKED | H-STO, H-D12, H-REVOKE, H-STATE |
| 444 | `25-§20-14` | §8.7 | `EC14-FAIL-01`, `EC14-FAIL-03`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-08` | WS-E, WS-G, Cross-cutting, Gate | FOLLOW-UP | H-STO, H-STATE |
| 445 | `25-§21-1` | §8.5 | `EC14-STO-03`, `EC14-STO-05`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-LATER, H-PRIV, H-STATE |
| 446 | `25-§21-2` | §8.5 | `EC14-STO-03`, `EC14-STO-05`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-LATER, H-PRIV, H-STATE |
| 447 | `25-§21-3` | §8.5 | `EC14-STO-03`, `EC14-STO-05`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-LATER, H-PRIV, H-STATE |
| 448 | `25-§21-4` | §8.5 | `EC14-STO-03`, `EC14-STO-05`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | WS-E, WS-G, Gate | FOLLOW-UP | H-STO, H-LATER, H-PRIV, H-STATE |
| 449 | `25-§21-5` | §8.5 | `EC14-STO-03`, `EC14-STO-05`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-NG-01`, `EC14-HOLD-08` | WS-E, WS-G, Cross-cutting, Gate | FOLLOW-UP | H-STO, H-PRIV, H-STATE |
| 450 | `25-§22-1` | §8.5 | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 451 | `25-§22-2` | §8.5 | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 452 | `25-§22-3` | §8.5 | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 453 | `25-§22-4` | §8.5 | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 454 | `25-§22-5` | §8.5 | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 455 | `25-§22-6` | §8.5 | `EC14-STO-06`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 456 | `25-§23-1` | §8.4 | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 457 | `25-§23-2` | §8.4 | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 458 | `25-§23-3` | §8.4 | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 459 | `25-§23-4` | §8.4 | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 460 | `25-§23-5` | §8.4 | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 461 | `25-§23-6` | §8.4 | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 462 | `25-§23-7` | §8.4 | `EC14-CAB-02`, `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 463 | `25-§23-8` | §8.4 | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 464 | `25-§23-9` | §8.4 | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 465 | `25-§23-10` | §8.4 | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 466 | `25-§23-11` | §8.4 | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 467 | `25-§23-12` | §8.4 | `EC14-CAB-03`, `EC14-SEC-02`, `EC14-MIG-02`, `EC14-MIG-05`, `EC14-HOLD-01` | WS-D, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-BIRTH, H-MIG |
| 468 | `25-§24-1` | §8.5 | `EC14-PRV-02`, `EC14-PERF-01`, `EC14-HOLD-08` | WS-E, WS-F, Gate | FOLLOW-UP | H-STO |
| 469 | `25-§24-2` | §8.5 | `EC14-PRV-02`, `EC14-PERF-01`, `EC14-HOLD-08` | WS-E, WS-F, Gate | FOLLOW-UP | H-STO |
| 470 | `25-§24-3` | §8.5 | `EC14-PERF-01`, `EC14-NG-01`, `EC14-HOLD-01` | WS-F, Cross-cutting, Gate | BLOCKED | H-D12 |
| 471 | `25-§25-1` | §8.5 | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 472 | `25-§25-2` | §8.5 | `EC14-STO-01`, `EC14-HOLD-01` | WS-E, Gate | BLOCKED | H-D12 |
| 473 | `25-§25-3` | §8.5 | `EC14-UDI-06`, `EC14-STO-01`, `EC14-PRV-01`, `EC14-NG-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-E, Cross-cutting, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 474 | `25-§25-4` | §8.5 | `EC14-STO-01`, `EC14-NG-01`, `EC14-HOLD-02` | WS-E, Cross-cutting, Gate | BLOCKED | H-D13 |
| 475 | `25-§26-1` | §8.5 | `EC14-STO-02`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-08` | WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-D13, H-BIRTH |
| 476 | `25-§26-2` | §8.5 | `EC14-RTV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, WS-F, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-REVOKE |
| 477 | `25-§26-3` | §8.5 | `EC14-RTV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, WS-F, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-REVOKE |
| 478 | `25-§26-4a` | §8.5 | `EC14-STO-08`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-08` | WS-E, Cross-cutting, Gate | BLOCKED | H-D13, H-STO |
| 479 | `25-§26-5` | §8.5 | `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-B, WS-E, Cross-cutting, Gate | FOLLOW-UP | H-PROV, H-STO, H-UDI |
| 480 | `25-§26-6` | §8.5 | `EC14-STO-02`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08` | WS-E, WS-G, Cross-cutting, Gate | FOLLOW-UP | H-STO, H-STATE |
| 481 | `25-§26-7` | §8.5 | `EC14-STO-02`, `EC14-FAIL-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-04`, `EC14-HOLD-08`, `EC14-HOLD-11` | WS-E, WS-G, Cross-cutting, Gate | FOLLOW-UP | H-STO, H-LATER, H-STATE |
| 482 | `25-§26-8` | §8.5 | `EC14-IDM-01`, `EC14-IDM-02`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-IDEM |
| 483 | `25-§26-9` | §8.5 | `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08` | WS-E, Cross-cutting, Gate | FOLLOW-UP | H-STO |
| 484 | `25-§26-10` | §8.5 | `EC14-FAIL-01`, `EC14-FAIL-02`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08` | WS-E, WS-G, Cross-cutting, Gate | FOLLOW-UP | H-STO, H-STATE |
| 485 | `25-§26-11` | §8.5 | `EC14-RTV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, WS-F, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-REVOKE |
| 486 | `25-§26-12` | §8.5 | `EC14-STO-07`, `EC14-RET-01`, `EC14-RET-03`, `EC14-VER-02`, `EC14-HOLD-10` | WS-E, Cross-cutting, Gate | FOLLOW-UP | H-LEG, H-DISCARD |
| 487 | `25-§26-13` | §8.5 | `EC14-STO-06`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08` | WS-E, Cross-cutting, Gate | FOLLOW-UP | H-STO |
| 488 | `25-§26-14` | §8.5 | `EC14-STO-09`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-08` | WS-E, Cross-cutting, Gate | FOLLOW-UP | H-STO |
| 489 | `25-§27-1` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 490 | `25-§27-2` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 491 | `25-§27-3` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 492 | `25-§27-4` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 493 | `25-§27-5` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 494 | `25-§27-6` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 495 | `25-§27-7` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 496 | `25-§27-8` | §8.9 | `EC14-NG-01` | Cross-cutting | PASS | — |
| 497 | `24-§5-6` | §8.2 | `EC14-UDI-01`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 498 | `24-§7-3` | §8.2 | `EC14-UDI-04`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 499 | `24-§7-4` | §8.2 | `EC14-UDI-03`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 500 | `24-§14-1` | §8.2 | `EC14-UDI-06`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 501 | `24-§14-2` | §8.2 | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 502 | `24-§14-3` | §8.2 | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 503 | `24-§14-4` | §8.2 | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 504 | `24-§14-5` | §8.2 | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 505 | `24-§14-6` | §8.2 | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 506 | `24-§14-7` | §8.2 | `EC14-UDI-07`, `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 507 | `24-§14-8` | §8.2 | `EC14-UDI-09`, `EC14-PRV-01`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D12, H-PROV, H-UDI |
| 508 | `24-§14-9` | §8.2 | `EC14-CMD-03`, `EC14-UDI-06`, `EC14-UDI-09`, `EC14-NG-01`, `EC14-HOLD-02`, `EC14-HOLD-06` | WS-A, WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-UDI |
| 509 | `24-§18-1a` | §8.2 | `EC14-CMD-01`, `EC14-ADP-01`, `EC14-PRV-01`, `EC14-MIG-03`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-04`, `EC14-HOLD-06`, `EC14-HOLD-09`, `EC14-HOLD-11` | WS-A, WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-PROV, H-DTX, H-LATER, H-UDI, H-MIG |
| 510 | `24-§21-7` | §8.3 | `EC14-CNF-03`, `EC14-HOLD-01`, `EC14-HOLD-06` | WS-C, Gate | BLOCKED | H-D12, H-UDI |
| 511 | `24-§23-6` | §8.7 | `EC14-UDI-09`, `EC14-FAIL-01`, `EC14-PRV-01`, `EC14-HOLD-09` | WS-B, WS-G, Gate | FOLLOW-UP | H-PROV, H-STATE |
| 512 | `24-§27-5` | §8.2 | `EC14-ARC-02`, `EC14-HOLD-02`, `EC14-HOLD-06` | WS-A, Gate | BLOCKED | H-D13, H-UDI |
| 513 | `24-§31-8` | §8.2 | `EC14-UDI-09`, `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 514 | `9-§12-1` | §8.2 | `EC14-ARC-02`, `EC14-HOLD-02` | WS-A, Gate | BLOCKED | H-D13 |
| 515 | `10-§5-10` | §8.4 | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-08` | WS-D, WS-E, WS-F, Gate | BLOCKED | H-D12, H-D13, H-STO, H-REVOKE |
| 516 | `10-§10-1` | §8.2 | `EC14-UDI-01`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 517 | `10-§10-3` | §8.3 | `EC14-CNF-02`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 518 | `10-§10-4` | §8.3 | `EC14-CNF-02`, `EC14-HOLD-02` | WS-C, Gate | BLOCKED | H-D13 |
| 519 | `10-§10-5` | §8.3 | `EC14-CNF-03`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-07` | WS-C, Gate | BLOCKED | H-D12, H-D13, H-FPRINT |
| 520 | `10-§10-7` | §8.4 | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-08` | WS-D, WS-E, WS-F, Gate | BLOCKED | H-D12, H-D13, H-STO, H-REVOKE |
| 521 | `10-§13-3` | §8.3 | `EC14-CMD-01`, `EC14-CNF-03`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-07` | WS-A, WS-C, Cross-cutting, Gate | BLOCKED | H-D12, H-D13, H-DTX, H-FPRINT, H-MIG |
| 522 | `10-§17-4` | §8.3 | `EC14-CNF-01`, `EC14-PRV-01`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, WS-C, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 523 | `10-§23-3b` | §8.3 | `EC14-PRV-01`, `EC14-VER-02`, `EC14-HOLD-02`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Cross-cutting, Gate | BLOCKED | H-D13, H-PROV, H-UDI |
| 524 | `12-§4-5` | §8.3 | `EC14-CNF-01`, `EC14-HOLD-02` | WS-C, Gate | BLOCKED | H-D13 |
| 525 | `17-§12-1` | §8.4 | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-BIRTH, H-REVOKE |
| 526 | `17-§12-2` | §8.4 | `EC14-ARC-02`, `EC14-CAB-04`, `EC14-RTV-01`, `EC14-HOLD-01` | WS-A, WS-D, WS-F, Gate | BLOCKED | H-D12, H-REVOKE |
| 527 | `7-§6-2` | §8.2 | `EC14-ADP-02`, `EC14-MIG-03`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-B, Gate | BLOCKED | H-D12, H-FIN |
| 528 | `7-§6-4` | §8.2 | `EC14-ADP-02`, `EC14-MIG-03`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-B, Gate | BLOCKED | H-D12, H-FIN |
| 529 | `7-§6-5` | §8.2 | `EC14-ADP-02`, `EC14-NG-01`, `EC14-HOLD-05` | WS-B, Cross-cutting, Gate | FOLLOW-UP | H-FIN |
| 530 | `7-§15-2a` | §8.2 | `EC14-ADP-02`, `EC14-MIG-03`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-B, Cross-cutting, Gate | BLOCKED | H-D12, H-FIN |
| 531 | `BP-§5.3-1` | §8.8 | `EC14-DOC-01` | Cross-cutting | PASS | — |
| 532 | `BP-§5.4-1` | §8.5 | `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 533 | `BP-§6.1-1` | §8.3 | `EC14-CMD-03`, `EC14-NG-01`, `EC14-HOLD-01` | WS-A, Cross-cutting, Gate | BLOCKED | H-D12 |
| 534 | `BP-§6.2-1` | §8.3 | `EC14-CMD-01`, `EC14-CMD-03`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-D12, H-D13, H-DTX, H-MIG |
| 535 | `BP-§6.3-1` | §8.1 | `EC14-ARC-01` | Cross-cutting | PASS | — |
| 536 | `BP-§6.3-2` | §8.5 | `EC14-ARC-01`, `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Cross-cutting, Gate | FOLLOW-UP | H-STO |
| 537 | `BP-§8.4-1` | §8.2 | `EC14-ARC-01` | Cross-cutting | PASS | — |
| 538 | `BP-§9-1` | §8.1 | `EC14-LDG-01`, `EC14-DOC-01` | WS-A, Cross-cutting | PASS | — |
| 539 | `BP-§10.3-O` | §8.1 | `EC14-LDG-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-UX-01`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-A, WS-B, WS-E, Cross-cutting, Gate | BLOCKED | H-D12, H-PROV, H-STO, H-UDI |
| 540 | `BP-§10.3-W1` | §8.1 | `EC14-LDG-01`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| 541 | `BP-§10.3-W2` | §8.1 | `EC14-LDG-01`, `EC14-LDG-03`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| 542 | `BP-§10.3-W3` | §8.1 | `EC14-LDG-04`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-MIG-06`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-DTX, H-FIN, H-MIG |
| 543 | `BP-§10.3-W4` | §8.2 | `EC14-UDI-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-B, WS-E, Gate | BLOCKED | H-D12, H-PROV, H-STO, H-UDI |
| 544 | `BP-§10.3-W5` | §8.4 | `EC14-CAB-02`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-BIRTH |
| 545 | `BP-§10.3-W6` | §8.2 | `EC14-PRV-01`, `EC14-HOLD-06`, `EC14-HOLD-09` | WS-B, Gate | FOLLOW-UP | H-PROV, H-UDI |
| 546 | `BP-§10.3-W7` | §8.3 | `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-01`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-D12, H-DTX, H-MIG |
| 547 | `BP-§10.3-W8` | §8.4 | `EC14-CAB-04`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-D, WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-BIRTH |
| 548 | `BP-§10.3-W9` | §8.5 | `EC14-STO-01`, `EC14-PRV-02`, `EC14-HOLD-08` | WS-E, Gate | FOLLOW-UP | H-STO |
| 549 | `BP-§10.3-W10` | §8.5 | `EC14-STO-01`, `EC14-SEC-02`, `EC14-PRV-02`, `EC14-MIG-02`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, WS-G, Cross-cutting, Gate | BLOCKED | H-D12, H-STO, H-BIRTH |
| 550 | `BP-§10.3-W11` | §8.3 | `EC14-HOLD-01` | Gate | BLOCKED | H-D12 |
| 551 | `BP-§10.3-W12` | §8.2 | `EC14-UDI-01` | WS-B | PASS | — |
| 552 | `BP-§10.3-W13` | §8.2 | `EC14-ADP-02`, `EC14-HOLD-01`, `EC14-HOLD-05` | WS-B, Gate | BLOCKED | H-D12, H-FIN |
| 553 | `BP-§10.3-C1` | §8.1 | `EC14-LDG-01`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-HOLD-03` | WS-A, Cross-cutting, Gate | BLOCKED | H-DTX, H-MIG |
| 554 | `BP-§10.3-S1` | §8.6 | `EC14-SRC-01`, `EC14-PRV-02`, `EC14-MIG-04`, `EC14-HOLD-01`, `EC14-HOLD-08` | WS-E, WS-F, Gate | BLOCKED | H-D12, H-STO |
| 555 | `BP-§10.3-SA1` | §8.3 | `EC14-CMD-01`, `EC14-CNF-03`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-02`, `EC14-HOLD-03`, `EC14-HOLD-07`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-A, WS-B, WS-C, WS-E, Cross-cutting, Gate | BLOCKED | H-D12, H-D13, H-PROV, H-DTX, H-STO, H-FPRINT, H-MIG |
| 556 | `BP-§10.3-SA2` | §8.3 | `EC14-LDG-03`, `EC14-CMD-01`, `EC14-CNF-03`, `EC14-CNF-04`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-07` | WS-A, WS-C, Cross-cutting, Gate | BLOCKED | H-D12, H-DTX, H-FPRINT, H-MIG |
| 557 | `BP-§10.3-SB1` | §8.1 | `EC14-LDG-03`, `EC14-TOT-01`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-D12, H-DTX, H-FIN, H-MIG |
| 558 | `BP-§10.3-SB2` | §8.1 | `EC14-LDG-03`, `EC14-LDG-04`, `EC14-CMD-01`, `EC14-MIG-01`, `EC14-MIG-05`, `EC14-VER-02`, `EC14-HOLD-03`, `EC14-HOLD-05` | WS-A, Cross-cutting, Gate | BLOCKED | H-DTX, H-FIN, H-MIG |
| 559 | `BP-§10.3-X` | §8.4 | `EC14-CAB-04`, `EC14-RTV-01`, `EC14-PRV-01`, `EC14-PRV-02`, `EC14-VER-02`, `EC14-HOLD-01`, `EC14-HOLD-06`, `EC14-HOLD-08`, `EC14-HOLD-09` | WS-B, WS-D, WS-E, WS-F, Cross-cutting, Gate | BLOCKED | H-D12, H-PROV, H-STO, H-REVOKE, H-UDI |
| 560 | `BP-§11-1` | §8.2 | `EC14-ARC-01` | Cross-cutting | PASS | — |
| 561 | `BP-§11-2` | §8.8 | `EC14-DOC-01` | Cross-cutting | PASS | — |
| 562 | `BP-§11-3` | §8.8 | `EC14-DOC-01` | Cross-cutting | PASS | — |
| 563 | `BP-§13-1` | §8.8 | `EC14-VER-01` | Cross-cutting | PASS | — |

## 12. Coverage and Orphan Check

| Measure | Value |
|---|---|
| `IN SCOPE` FCTM rows | 563 |
| Rows mapped to at least one obligation | 563 of 563 |
| Rows missing an obligation | 0 |
| Obligations (one per locked EIS requirement) | 83 |
| Row-to-obligation links | 2282 |
| Obligations with no FCTM row | 0 |
| Behaviour-adding orphan obligations | 0 |
| Cross-cutting rules (Section 8) and process obligations (Section 9) | 14 and 8; non-behavioural |
| Rows with Stage 7 finding `BLOCKED` / `FOLLOW-UP` / `PASS` | 319 / 157 / 87 |
| Rows carrying `D12` / `D13` / `DTX` | 225 / 92 / 42 |
| `ALREADY DEMONSTRATED` rows | 0 in the FCTM (FCTM Section 0.2) |
| FCTM, Blueprint, EIS and Founder decisions | Unchanged |

Method: the row set of Section 11 was compared by set difference with the FCTM `IN SCOPE` row set and with EIS Section 29.2; all three are identical. Each obligation's row list equals the EIS requirement-to-row mapping.

## 13. Package Observations

Observations raised at Stage 12 for Mission Control. None changes a row, requirement or hold.

| ID | Topic | Observation |
|---|---|---|
| PQ-1 | Workstream register | The Stage 1 register in Blueprint Section 7 (WS-A to WS-G) is used unchanged. Each obligation has one workstream; `Cross-cutting` obligations apply to every builder workstream; `Gate` obligations (`EC14-HOLD-01` to `-11`) are Mission Control gates, not builder work. Mission Control fixes the register at Stage 13. |
| PQ-2 | Transactions-family cut-over ownership | `EC14-CMD-01` to `-03`, `EC14-LDG-01`, `EC14-LDG-04` and `EC14-MIG-01` sit in WS-A, but they can be delivered only inside the SB-P-1.12 WS-A3 / SB-P-1.13 EIS13-CMD-02 transactions-family cut-over under a separate migration mission (EIS Section 8; EQ-4). The Implementation Authorization must name how the three missions' builders and the migration mission coordinate, without a second protected write path. |
| PQ-3 | Phase labels | P0 to P7 follow the Blueprint Section 20.4 activation order (P0 cross-mission prerequisites and gates; P1 WS-A; P2 WS-G; P3 WS-E after `DR2`; P4 WS-B; P5 WS-C; P6 WS-D; P7 WS-F). They order work and authorize none of it. |
| PQ-4 | Negative-path and experience classification | The rules are stated in Verification Checklist Section 13.1. They are mechanical and may classify more rows than strictly necessary; no row is classified less strictly than Source 18 requires. Over-classification never turns a documentary item into runtime evidence. |
| PQ-5 | Builder identity | Not named. The Implementation Authorization names a builder per workstream; if a builder other than Lovable is named, the Build Prompt carries that builder's byline (Source 18 Section 4.5). |
| PQ-6 | Row counts inflated by selectors | `EC14-PRV-01` selects all 97 `DAI` rows and `EC14-PRV-02` all 124 `DR2` rows; `EC14-SEC-02`, `EC14-MIG-05`, `EC14-NG-01`, `EC14-VER-02` and the `Gate` selectors are rule-based too. WS-B and WS-E therefore list more rows than they build features for; for those rows they build only the gate (Build Prompt Section 7). Completion reporting must keep that distinction. |
| PQ-7 | Scenario RS-20 | `22-§29-14` is a documentary acceptance scenario with no runtime surface. RS-20 is a documentary verification scenario (`DOC`), not runtime evidence, and cannot satisfy a runtime-verification requirement for another row. |
| PQ-8 | Storage-dependent workstreams | WS-E and every `BUILD — PROVIDER GATED` storage obligation cannot be exercised against a real object store until `DR2` activation is separately authorized; until then only interfaces, metadata and local tests are possible, and no storage row can be demonstrated. |
| PQ-9 | AI-dependent paths | WS-B AI interpretation (`EC14-UDI-07`, `-09`) depends on SB-P-1.13 gateway implementation and `DAI` evidence; the deterministic CSV/XLSX path (`EC14-UDI-03`) does not need AI but still needs `D12` and the governed command for Ledger writes. |
| PQ-10 | Rows realized only by gate obligations | In the locked EIS mapping, 4 rows map only to gate requirements (and, for one, `EIS14-VER-02`): `3-§17-7` (HOLD-04, HOLD-11), `3-§17-8` (HOLD-01), `5-§18-8a` (VER-02, HOLD-02), `BP-§10.3-W11` (HOLD-01). They have an obligation and a checklist item, so Source 18 coverage holds, but no builder workstream is assigned to build their SB-P-1.14 behaviour. This package preserves the locked mapping and does not add a builder assignment. Mission Control decides at Stage 13 whether the Implementation Authorization assigns their builder slice to a workstream or whether a governed EIS path is needed; until then no builder builds them. |

## 14. Status

`DRAFT — MISSION CONTROL REVIEW REQUIRED`. This draft is not a package lock and not an implementation authorization. `D12`, `D13`, `DTX`, provider, storage, retention, migration, later-mission and runtime-evidence holds remain open; every EIS Section 28 fact remains `UNVERIFIED — ACCESS REQUIRED`.

## 15. Change Log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-10-09 | Claude Code (SB-P-1.14-MC-21 §4) | Initial Stage 12 draft |
