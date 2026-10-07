# SB-P-1.13 — Engineering Contract

```text
STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED
PRODUCT BLUEPRINT: APPROVED — LOCKED (UNCHANGED)
EIS: APPROVED — LOCKED (UNCHANGED)
IMPLEMENTATION PACKAGE: STAGE 12 DRAFT — NOT APPROVED, NOT LOCKED
IMPLEMENTATION: NOT AUTHORIZED
SCHEMA / SQL / MIGRATIONS: NOT AUTHORIZED
PROVIDER SELECTION / ACTIVATION: NOT AUTHORIZED
PRODUCTION MUTATION / DELIVERY: NOT AUTHORIZED
```

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.13 |
| Mission Name | Native Conversation & AI Intelligence Foundation |
| Document | Engineering Contract (Source 18 Stage 12; package template Phase A) |
| Package set | `engineering-contract.md`, `lovable-build-prompt.md`, `verification-checklist.md`, authored and reviewed as one set |
| Version | 0.1 |
| Status | `DRAFT — MISSION CONTROL REVIEW REQUIRED` |
| Author | Claude Code — Source 18 Section 4.4 initial implementation package owner |
| Authorizing record | SB-P-1.13-MC-19 (`mission-control/32-post-793-verification-and-stage11-eis-lock-disposition.md`, blob `b55a5261`); activation instruction `mission-control/33-stage12-initial-package-activation-instruction.md` (blob `2a44f258`) |
| Canonical baseline | `main@654811df61fb59a0f0de35af7be2bc6614aae9ef` (Stage 11 EIS lock, PR #806) |
| Date | 2026-10-07 |
| Next gate | Stage 13 — Implementation Package Review by Mission Control |

## 2. Purpose and Authority

This contract translates the locked SB-P-1.13 Product Blueprint and the locked EIS into builder-facing engineering obligations. It adds no Product Truth. Requirement text lives in the source contracts; the EIS fixes the engineering mechanisms; this contract states what must be built, in which workstream, under which hold and against which verification items.

Order of authority (package template Section 4): Lighthouse Constitution; Master System Manifesto; locked Product Blueprint with the Founder Product Decision Records it applies (`FPDR-1` to `FPDR-5`); locked EIS; approved architecture and security frameworks; this Engineering Contract once locked; the Build Prompt once locked; the Verification Checklist once locked; explicit Mission Control implementation and correction authorizations; builder interpretation. If any statement here could be read as new behaviour, the higher source prevails and this contract is in error.

**Package approval is not implementation authorization.** This draft authorizes nothing. It creates no code, schema, SQL, migration, provider setting or production change, and it changes no FCTM disposition, build commitment, commercial classification or mission assignment.

## 3. Locked References

| Reference | Path | Identity |
|---|---|---|
| Locked Product Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.13.md` | blob `bbf65429e3c1f18b9dacdda62e1c175d9eb395a1` (`APPROVED — LOCKED`) |
| Locked EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.13-EIS.md` | blob `9a1e723d4874011b6870a680f2a2080154537c30` (`APPROVED — LOCKED`, 72 requirements) |
| Canonical FCTM | `communication/missions/SB-P-1.13/claude-code/02-stage2-populated-fctm.md` | blob `97ddc752dcbbdb6586110a782ef1e24405b6dd22` (974 rows; 651 `IN SCOPE`) |
| Founder decisions `FPDR-1` to `FPDR-4` | `communication/missions/SB-P-1.13/founder/02-stage3-founder-product-decision-record.md` | blob `78f9afdb64b152060381c2eee61f68ec5c6e1468` |
| Founder decision `FPDR-5` | `communication/missions/SB-P-1.13/founder/03-post-stage6-founder-product-decision-record.md` | blob `001de80594cd3b6d4e42d7d802b31dc813ef49c1` |
| Stage 11 lock and Stage 12 boundary (MC-19) | `communication/missions/SB-P-1.13/mission-control/32-post-793-verification-and-stage11-eis-lock-disposition.md` | blob `b55a5261b4c0590992dfa3622a5b1895ce7fb7ce` |
| Stage 12 activation instruction | `communication/missions/SB-P-1.13/mission-control/33-stage12-initial-package-activation-instruction.md` | blob `2a44f2588b1564a91b4c839534d51c2608ee8407` |
| SB-P-1.12 EIS (locked; consumed surfaces) | `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` | blob `c444f7509477d0e8b997af538440d93bf2ca4d72` |
| Source 18 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | blob `0945bda60a93c99909c3b7a247d5427ebe256011`; Stage 12 and Section 3.2 |
| Package template | `docs/implementation/templates/SB-P-Implementation-and-Evidence-Workflow-Template.md` | blob `d7209a380e5b171955f192d75a2a97b929828849`; Phases A to C |

## 4. Preserved Holds and Gates

Describing a mechanism does not satisfy a hold (EIS Section 27). Row-level holds are the Blueprint Section 20.6 remaining-hold codes, shown per row in Section 11.

| Hold or gate | Status carried by this package | Effect |
|---|---|---|
| `D12` / H-D12 | 252 rows; SPECIFICATION AVAILABLE, IMPLEMENTATION NOT COMPLETE, EVIDENCE NOT COMPLETE | `EC13-HOLD-01`: no obligation mapped to a `D12` row is built until the SB-P-1.12 workstreams it consumes are implemented, verified and accepted for SB-P-1.13 (SB-P-1.12 EIS §19.5). No authority table, single-ownership lookup or temporary parallel authorization |
| `DTX` / H-DTX | 17 rows; held | `EC13-HOLD-02`: satisfiable only after EIS Section 13 cut-over step 8. `EC13-CMD-02` is delivered with the SB-P-1.12 WS-A3 transactions-family package under a separate migration mission |
| Provider evidence / H-PROV | 367 rows (`DAI` or `DV`) | `EC13-PRV-01`: no merchant data reaches an AI or voice provider until an evidence pack is accepted for a versioned provider configuration identity. Provider selection, purchase and activation: NOT AUTHORIZED |
| Multilingual evaluation / H-LANG | 111 rows | `EC13-LANG-06`: governed suite results recorded against a configuration identity gate provider activation and acceptance |
| Transient-audio proof / H-AUDIO | 9 rows | `EC13-VOI-02`: per-layer evidence for all nine layers; provider retention separately governed |
| Confirmation and idempotency / H-CONF | 66 rows | `EC13-CNF-01`, `-02`, `EC13-IDM-01`, `-02`: binding, revalidation and replay evidence |
| `FPDR-4` context / H-FPDR4 | 5 rows | `EC13-SNS-01`: trustworthy-context evidence; no new sensing |
| Later-mission dependencies / H-LATER | 54 rows | `EC13-HOLD-03`: only the SB-P-1.13 slice is built; the dependent slice waits for the owning mission |
| Runtime and acceptance evidence / H-EVID | 61 rows | `EC13-VER-02`: Stage 17 and Stage 19 evidence |
| `FPDR-2` | Credit and repayment portions of `12-§4-1`, `12-§7-6`, `12-§21-1` | `EC13-VOI-07`: `PARTIALLY DEMONSTRATED` or dependency-blocked until SB-P-1.14; no complete claim |
| Attachment transient mechanism | `EIS13-ATT-01` | Intake stays held if a safe in-request transient mechanism cannot be shown for the runtime; no durable storage is added |
| Retention default (DC-12, `DUF6`) | Open policy dependency, off the critical path | Retention controls are built; no period is chosen in code |
| `UNVERIFIED — ACCESS REQUIRED` register | 17 facts (EIS Section 28) | None is inferred from repository files; each needs separately authorized evidence |
| Migration execution | NOT AUTHORIZED | Each migration needs a separately authorized migration mission under `docs/migration/README.md`, rehearsed on the isolated test project |
| GitHub Actions | Impaired since 2026-09-30 | A missing run or status is reported as missing, never as a pass |

## 5. Authorized Scope and Exclusions

### 5.1 In scope

All 651 `IN SCOPE` FCTM rows. Each maps to at least one obligation in Section 11. No row is omitted, deferred, narrowed or reclassified. Rows whose realization is blocked, held, evidence-gated or dependency-gated stay `IN SCOPE` and carry the reason.

### 5.2 Not authorized by this package

- application implementation or any code change;
- creating, editing or executing schema, SQL or migrations, including the transactions-family cut-over;
- Lovable implementation execution or publication;
- AI or voice provider selection, purchase, account creation, activation or configuration, and sending merchant data to any provider;
- secrets, environment, provider or production mutation, and delivery;
- satisfying or waiving `D12`, `DTX`, provider, transient-audio, `FPDR-4` or any other hold;
- modifying the locked Blueprint, the locked EIS, the canonical FCTM or any Founder Product Decision Record.

### 5.3 Still committed, not in this mission

These FCTM rows keep their disposition; they are listed by row in Blueprint Section 11 and the FCTM. This contract does not restate them and builds none of them.

| Disposition | Receiving mission or reason | FCTM rows |
|---|---|---|
| `ASSIGNED TO LATER MISSION` | `SB-P-1.14` | 24 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.15` | 33 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.16` | 4 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.17` | 7 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.18` | 7 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.19` | 35 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.20` | 16 |
| `DELEGATED` | `SB-P-1.12` | 99 |
| `DELEGATED` | `SB-P-1.13` | 1 |
| `DELEGATED` | `SB-P-1.14` | 10 |
| `DELEGATED` | `SB-P-1.15` | 5 |
| `DELEGATED` | `SB-P-1.19` | 3 |
| `DELEGATED` | `SB-P-1.20` | 3 |
| `OUT OF BUILD SCOPE` | `BUILD LATER`, `SEPARATE PRODUCT` or `REJECT` preserved verbatim; must-not-appear checks (Verification Checklist `VC-PT-06`) | 21 |
| `NOT APPLICABLE` | Narrative, principle, provenance or cross-reference sections (FCTM citations) | 52 |
| `UNRESOLVED FOUNDER DECISION` | Not on this mission's critical path (Blueprint Section 11.5) | 3 |
| **Total not `IN SCOPE`** | | **323** |

## 6. Obligation Types

Each obligation `EC13-<suffix>` realizes exactly one EIS requirement `EIS13-<suffix>` as the locked EIS specifies it, in the EIS section named. It carries one type.

| Type | Meaning |
|---|---|
| `BUILD` | Implement exactly as the locked EIS specifies, under a future Implementation Authorization and after the row's holds are satisfied. |
| `BUILD — EVIDENCE GATED` | Implement the mechanism; the row cannot be relied on or demonstrated until the named evidence exists (per-layer transient evidence, governed evaluation, transient attachment mechanism). |
| `BUILD — PROVIDER GATED` | Implement behind the provider adapter; no merchant data flows until `EC13-PRV-01` evidence is accepted and activation is separately authorized. |
| `BUILD — MIGRATION / CUT-OVER GATED` | Implement only as part of the coordinated transactions-family cut-over (EIS Section 13) under a separately authorized migration mission with SB-P-1.12 WS-A3. |
| `BUILD — DEPENDENCY GATED` | Build only the SB-P-1.13 slice; the dependent portion waits for the owning later mission. |
| `BUILD + EVIDENCE GATE` | Build the enforcement mechanism (configuration identity, refusal without accepted evidence); the gate opens only on accepted, separately authorized evidence. |
| `MIGRATION-DESIGN` | Fixes expected objects, their access contract and ordering. Writing or executing any migration needs an explicit migration mission under `docs/migration/README.md`. |
| `VERIFICATION` | Defines verification architecture and acceptance evidence. Adds no product behaviour. |
| `GOVERNANCE` | Applies to every builder workstream; constrains how behaviour is built and adds none of its own. |
| `GATE` | Not a builder obligation: no builder builds anything for it. Mission Control enforces it through dependency evidence before dependent obligations are built or demonstrated. |

## 7. Engineering Obligations

Verification references point to the Verification Checklist: named negative-path checks `NP-*`, named runtime scenarios `RS-*` and the per-row items `VC-R-*`. Row lists are the EIS Section 29 requirement-to-row mapping, unchanged; obligations selected by a dependency or Founder-decision code show the count and rule.

### 7.1 Target Architecture Overview (EIS Section 6)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-ARC-01` | `EIS13-ARC-01` | Module boundaries behind `requireSupabaseAuth` | `BUILD` | WS-C | P1 | `UNIT`, `REPO`, `DOC` | Section 13.4 row items | `24-§5-8`, `22-§7-1`, `22-§7-4`, `22-§7-9`, `22-§7-10`, `22-§17`, `BP-§6.4-1`, `BP-§6.4-2`, `BP-§6.4-3`, `BP-§6.4-4`, `BP-§6.4-5`, `BP-§6.4-6`, `BP-§6.4-7`, `BP-§6.4-8`, `BP-§6.4-9`, `BP-§6.4-10`, `BP-§6.6-1`, `BP-§11-1` |
| `EC13-ARC-02` | `EIS13-ARC-02` | One channel-neutral `NormalizedMessage` kernel entry | `BUILD` | WS-C | P1 | `UNIT`, `INT` | NP-01, RS-04 | `24-§5-1`, `24-§5-3`, `24-§5-7`, `24-§7-1`, `24-§7-5`, `24-§27-2`, `24-§27-6`, `24-§27-9`, `24-§27-11`, `24-§31-1`, `22-§29-1`, `22-§29-2`, `BP-§8.4-1`, `BP-§8.4-3` |
| `EC13-ARC-03` | `EIS13-ARC-03` | Business Memory stays the authoritative record | `BUILD` | WS-C | P2 | `INT`, `DB` | NP-12, RS-01 | `24-§9-3`, `24-§9-4`, `24-§27-8`, `24-§29-2`, `24-§29-3`, `24-§31-15`, `10-§7-6`, `22-§7-7`, `22-§24-1`, `17-§5-4` |

### 7.2 Conversation Workspace (EIS Section 7)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-WSP-01` | `EIS13-WSP-01` | Workspace route and desktop/mobile navigation | `BUILD` | WS-A | P2 | `UNIT`, `RT` | RS-05 | `10-§20-6`, `17-§5-1`, `17-§5-2`, `17-§22-8`, `20-§15-3`, `BP-§8.3-1`, `BP-§10.2-W1`, `BP-§10.2-E1`, `BP-§10.2-E4` |
| `EC13-WSP-02` | `EIS13-WSP-02` | Workspace input and output surfaces | `BUILD` | WS-A | P2 | `UNIT`, `RT` | RS-05 | `10-§4-1`, `10-§5-1`, `10-§5-3`, `10-§5-4`, `10-§5-6`, `10-§5-8`, `10-§5-9`, `10-§5-11` |
| `EC13-WSP-03` | `EIS13-WSP-03` | Shared foundations, no channel copies | `BUILD` | WS-A | P2 | `INV`, `REPO`, `DOC` | NP-13, RS-05 | `10-§6-1`, `10-§6-2`, `10-§6-3`, `10-§6-4`, `10-§6-5`, `10-§6-6`, `10-§6-7`, `10-§6-8`, `10-§6-9`, `10-§6-10`, `10-§6-11`, `10-§6-12`, `10-§6-13`, `22-§4-2`, `22-§7-2`, `22-§7-3`, `22-§7-5`, `22-§7-6`, `22-§7-8`, `17-§5-3`, `17-§5-5`, `17-§5-6`, `17-§5-8` |
| `EC13-WSP-04` | `EIS13-WSP-04` | Shared active-business context provider | `BUILD` | WS-A | P2 | `UNIT`, `DB`, `RT` | NP-01, RS-05 | `17-§22-4` |
| `EC13-WSP-05` | `EIS13-WSP-05` | Conversation store, segment provenance and retention separation | `BUILD` | WS-A | P2 | `DB`, `INV`, `RT` | NP-03, NP-05, RS-15 | `24-§25-4`, `24-§28-7`, `10-§16-1`, `10-§16-2`, `10-§16-3`, `10-§16-4`, `10-§16-5`, `10-§16-6`, `10-§16-7`, `10-§16-8`, `BP-§10.2-W3` |
| `EC13-WSP-06` | `EIS13-WSP-06` | Responsiveness and per-stage latency budgets | `BUILD` | WS-A | P2 | `PERF`, `RT` | RS-16 | `10-§20-1`, `10-§20-2`, `10-§20-3`, `10-§20-4`, `10-§20-5`, `22-§21` |

### 7.3 Active-Business Context and Server-Side Authority Propagation (EIS Section 8)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-AUTH-01` | `EIS13-AUTH-01` | Server-derived principal and business; privileged-handler boundary | `BUILD` | WS-C | P2 | `INT`, `DB`, `INV` | NP-01, NP-02, RS-01 | `10-§8-1`, `10-§8-2`, `10-§8-3`, `10-§8-4`, `10-§15-1`, `10-§15-2`, `10-§15-3`, `10-§15-4`, `10-§15-5`, `10-§15-6`, `10-§15-7`, `BP-§10.2-W7` |
| `EC13-AUTH-02` | `EIS13-AUTH-02` | Permission decided outside the model (`authz.authorize`) | `BUILD` | WS-C | P2 | `UNIT`, `INT`, `DB` | NP-06, NP-07, RS-02 | `24-§10-1`, `24-§10-2`, `24-§10-3`, `24-§10-4`, `24-§10-5`, `24-§10-6`, `24-§10-7`, `24-§10-8`, `24-§10-9`, `24-§10-10`, `24-§10-11`, `24-§27-7`, `24-§27-10`, `24-§31-3`, `9-§13-9`, `9-§13-10`, `9-§17-9`, `9-§19`, `22-§24-2`, `22-§24-3`, `BP-§10.2-E3` |
| `EC13-AUTH-03` | `EIS13-AUTH-03` | Employee denial of Owner-only intelligence | `BUILD` | WS-C | P2 | `INT`, `DB`, `RT`, `FRT` | NP-04, RS-02 | `24-§31-4`, `10-§23-5`, `7-§11-2`, `BP-§10.2-SA2` |
| `EC13-AUTH-04` | `EIS13-AUTH-04` | Isolation and privacy surfaces (actor and object scope) | `BUILD` | WS-C | P2 | `DB`, `INV` | NP-01, NP-03, RS-02 | `24-§25-1`, `24-§25-2`, `24-§25-3`, `24-§25-5`, `24-§25-6`, `24-§25-7`, `24-§25-8`, `24-§25-9`, `10-§19-1`, `10-§19-2`, `10-§19-3`, `10-§19-4`, `10-§19-5`, `10-§19-6`, `10-§19-7`, `10-§23-10`, `22-§23-2`, `22-§23-3`, `22-§23-5`, `22-§23-7`, `22-§29-3` |
| `EC13-AUTH-05` | `EIS13-AUTH-05` | AI business boundary | `BUILD` | WS-C | P1 | `UNIT`, `EVAL` | NP-08, RS-18 | `24-§22-1`, `24-§22-2`, `24-§22-3`, `24-§22-4`, `24-§22-5`, `24-§22-6`, `24-§22-7`, `24-§22-8` |

### 7.4 AI Gateway and Provider Abstraction (EIS Section 9)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-GW-01` | `EIS13-GW-01` | Server-side AI gateway | `BUILD` | WS-C | P1 | `UNIT`, `INT`, `REPO` | NP-15, RS-09 | `24-§4-1`, `24-§28-1`, `24-§28-9`, `BP-§10.2-W5` |
| `EC13-GW-02` | `EIS13-GW-02` | Provider abstraction and configuration identity on change | `BUILD` | WS-C | P1 | `UNIT`, `REPO` | NP-16, RS-19 | `24-§8-3`, `24-§19-1`, `24-§19-2`, `24-§19-3`, `24-§19-4`, `24-§28-3`, `24-§29-1`, `24-§29-4`, `24-§29-5`, `24-§29-6`, `24-§31-16` |
| `EC13-GW-03` | `EIS13-GW-03` | Intent-first routing | `BUILD` | WS-C | P1 | `UNIT`, `EVAL` | NP-09, RS-06 | `24-§6-1`, `24-§6-2` |
| `EC13-GW-04` | `EIS13-GW-04` | Versioned prompt and instruction governance | `BUILD` | WS-C | P1 | `UNIT`, `REPO` | Section 13.4 row items | `24-§28-2`, `24-§28-11` |
| `EC13-GW-05` | `EIS13-GW-05` | Cost and sustainability controls under current-authority caching | `BUILD` | WS-C | P1 | `UNIT`, `INT` | NP-05 | `24-§26-1`, `24-§26-2`, `24-§26-3`, `24-§26-4`, `24-§26-5`, `24-§26-6`, `24-§26-7`, `24-§26-8`, `24-§26-9`, `24-§26-10`, `24-§28-10` |

### 7.5 Instruction/Data Separation, Context Minimization and Retrieval Authorization (EIS Section 10)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-CTX-01` | `EIS13-CTX-01` | Instruction/data separation | `BUILD` | WS-C | P1 | `UNIT` | NP-10 | `24-§9-1`, `24-§28-6` |
| `EC13-CTX-02` | `EIS13-CTX-02` | Authorization before retrieval; minimization; authority-bound caches | `BUILD` | WS-C | P2 | `INT`, `DB` | NP-05, NP-02 | `24-§9-2` |
| `EC13-CTX-03` | `EIS13-CTX-03` | Conversation truth precedence and revocation-safe reuse | `BUILD` | WS-C | P2 | `INT`, `DB`, `CONC` | NP-05, RS-15 | `24-§23-9` |

### 7.6 Human Language Layer and Evaluation Architecture (EIS Section 11)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-LANG-01` | `EIS13-LANG-01` | Shared English/Malayalam/Manglish language layer | `BUILD` | WS-B | P1 | `UNIT`, `EVAL` | NP-11, RS-06 | `24-§8-1`, `24-§8-2`, `9-§3-1`, `9-§3-2`, `9-§3-3`, `9-§3-4`, `9-§3-5`, `9-§3-6`, `9-§3-7`, `9-§3-8`, `9-§3-9`, `9-§5-1`, `9-§5-2`, `9-§6-1`, `9-§6-2`, `9-§7-1`, `9-§7-2`, `9-§7-3`, `9-§11-1`, `9-§11-2`, `9-§11-3`, `9-§11-4`, `9-§11-5`, `9-§11-6`, `9-§12-4`, `9-§12-13`, `9-§13-1`, `9-§13-2`, `9-§13-3`, `9-§13-4`, `9-§13-5`, `9-§13-6`, `9-§13-7`, `9-§13-8`, `9-§13-11`, `10-§12-1`, `10-§12-2`, `22-§8-1`, `22-§8-2`, `22-§8-3`, `22-§8-4`, `22-§8-5`, `22-§8-6`, `22-§8-7`, `BP-§10.2-W2` |
| `EC13-LANG-02` | `EIS13-LANG-02` | Language preference | `BUILD` | WS-B | P2 | `UNIT`, `DB`, `RT` | RS-13 | `9-§4-1`, `9-§4-2`, `9-§4-3`, `9-§4-4`, `9-§4-5`, `9-§17-8`, `20-§14-1`, `20-§14-2`, `20-§14-3`, `20-§14-4` |
| `EC13-LANG-03` | `EIS13-LANG-03` | Clarification engine | `BUILD` | WS-B | P1 | `UNIT`, `EVAL`, `RT` | NP-12, RS-06 | `24-§6-3`, `24-§31-5`, `9-§9-1`, `9-§9-2`, `9-§9-3`, `9-§9-4`, `9-§9-5`, `9-§9-6`, `9-§9-7`, `9-§9-8`, `9-§11-7`, `9-§15-1`, `9-§15-2`, `9-§15-3`, `9-§15-4`, `9-§15-5`, `9-§17-10`, `10-§12-3`, `10-§17-1`, `10-§17-2`, `10-§17-3`, `10-§17-6`, `10-§17-7`, `BP-§10.2-E2` |
| `EC13-LANG-04` | `EIS13-LANG-04` | Party and item identity matching | `BUILD` | WS-B | P2 | `UNIT`, `DB` | NP-12, RS-06 | `9-§10-1`, `9-§10-2`, `9-§10-3`, `9-§17-3` |
| `EC13-LANG-05` | `EIS13-LANG-05` | Language failure recovery | `BUILD` | WS-B | P1 | `UNIT`, `RT` | NP-12, RS-06 | `9-§16-1`, `9-§16-2`, `9-§16-3`, `9-§16-4` |
| `EC13-LANG-06` | `EIS13-LANG-06` | Governed multilingual text and speech evaluation | `BUILD — EVIDENCE GATED` | WS-B | P1 | `EVAL` | RS-06 | `9-§8-1`, `9-§8-2`, `9-§8-4`, `9-§14-1`, `9-§14-2`, `9-§14-3`, `9-§14-4`, `9-§14-5`, `9-§14-6`, `9-§14-7`, `9-§14-8`, `9-§17-1`, `9-§17-2`, `9-§17-4` |

### 7.7 Typed Tools, Clarification, Preview and Frozen Confirmation (EIS Section 12)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-TOOL-01` | `EIS13-TOOL-01` | Typed tool registry and authority-field exclusion | `BUILD` | WS-C | P3 | `UNIT` | NP-17 | `24-§11-1`, `24-§11-2`, `24-§11-3`, `24-§11-4`, `24-§11-5`, `24-§11-6`, `24-§11-8`, `24-§11-9`, `24-§11-10`, `24-§28-5`, `BP-§10.2-W6` |
| `EC13-TOOL-02` | `EIS13-TOOL-02` | Structured output validation against server-derived authority | `BUILD` | WS-C | P3 | `UNIT`, `INT` | NP-17, NP-12, RS-01 | `24-§20-1`, `24-§20-2`, `24-§20-3`, `24-§20-4`, `24-§20-5`, `24-§20-6`, `24-§20-7`, `24-§20-8`, `24-§20-9`, `24-§20-10`, `24-§28-4`, `24-§31-6` |
| `EC13-CNF-01` | `EIS13-CNF-01` | Frozen confirmed proposal and confirmation binding | `BUILD` | WS-C | P3 | `UNIT`, `DB`, `CONC` | NP-18, RS-01 | `24-§11-7`, `24-§21-1`, `24-§21-8`, `24-§21-9`, `24-§31-7`, `10-§7-2`, `10-§7-3`, `10-§7-4`, `10-§7-5`, `10-§17-8`, `22-§29-7`, `BP-§10.2-W8` |
| `EC13-CNF-02` | `EIS13-CNF-02` | Execution-time revalidation | `BUILD` | WS-C | P3 | `DB`, `CONC` | NP-19, RS-01 | `24-§21-10`, `10-§17-9`, `10-§23-8` |
| `EC13-CNF-03` | `EIS13-CNF-03` | Human authority; confirmation never substituted | `BUILD` | WS-C | P3 | `UNIT`, `DB` | NP-20, RS-01 | `24-§13-2`, `24-§21-2`, `10-§9-3` |

### 7.8 Governed Command Path and Transaction-Command Convergence (EIS Section 13)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-CMD-01` | `EIS13-CMD-01` | Governed command path (command-only protected writes) | `BUILD` | WS-C | P3 | `DB`, `INV` | NP-21, RS-01 | `24-§28-8`, `10-§13-1`, `10-§13-2`, `10-§13-8`, `10-§13-9`, `10-§13-10`, `10-§13-11`, `10-§13-12`, `17-§5-7`, `BP-§6.2-1`, `BP-§6.2-2` |
| `EC13-CMD-02` | `EIS13-CMD-02` | `create_transaction_governed` and coordinated transactions-family cut-over | `BUILD — MIGRATION / CUT-OVER GATED` | WS-C | P3 | `DB`, `CONC`, `INV`, `AUDIT` | NP-21, NP-22, RS-01 | `24-§21-2`, `24-§31-13`, `9-§17-1`, `10-§11-2`, `10-§13-1`, `10-§13-2`, `10-§23-1`, `10-§23-9`, `12-§4-1`, `12-§21-1`, `12-§21-9`, `22-§29-8`, `17-§5-7`, `BP-§6.2-1`, `BP-§6.4-8`, `BP-§10.2-W9`, `BP-§10.2-SA1` |
| `EC13-CMD-03` | `EIS13-CMD-03` | `FPDR-5` credit-payment-method boundary | `BUILD` | WS-C | P3 | `UNIT`, `DB`, `RT` | NP-23, RS-14 | `9-§9-4`, `12-§4-1`, `12-§7-5`, `12-§7-6`, `12-§21-1` |

### 7.9 Idempotency and Unknown Outcome (EIS Section 14)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-IDM-01` | `EIS13-IDM-01` | Idempotency bound to business, actor, operation and fingerprint | `BUILD` | WS-C | P3 | `DB`, `CONC` | NP-24, RS-10 | `24-§23-18`, `24-§31-13`, `10-§18-7`, `10-§23-9`, `12-§17-8`, `12-§21-9`, `22-§29-8` |
| `EC13-IDM-02` | `EIS13-IDM-02` | First-class unknown outcome and outcome lookup | `BUILD` | WS-C | P3 | `INT`, `DB`, `RT` | NP-24, RS-10 | `24-§23-8`, `24-§23-12`, `24-§23-14`, `24-§31-11` |

### 7.10 Audit, Provenance and Telemetry (EIS Section 15)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-AUD-01` | `EIS13-AUD-01` | Provenance record linked to authority events | `BUILD` | WS-C | P3 | `DB`, `AUDIT` | RS-01 | `24-§24-1`, `24-§24-2`, `24-§24-3`, `24-§24-4`, `24-§24-5`, `24-§24-6`, `24-§24-7`, `24-§24-8`, `24-§24-9`, `24-§24-10`, `24-§28-12`, `24-§31-14`, `22-§29-12`, `BP-§10.2-W10` |
| `EC13-TEL-01` | `EIS13-TEL-01` | Privacy-minimized telemetry | `BUILD` | WS-G | P1 | `INV`, `TRANS`, `REPO` | NP-25 | `24-§26-9`, `24-§31-14` |
| `EC13-TEL-02` | `EIS13-TEL-02` | Success language only from the committed outcome | `BUILD` | WS-C | P3 | `UNIT`, `INT`, `RT` | NP-26, RS-01 | `8-§7-11` |

### 7.11 FAQ-Before-AI Support Foundation (EIS Section 16)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-FAQ-01` | `EIS13-FAQ-01` | FAQ knowledge store with provenance and versions | `BUILD` | WS-E | P1 | `DB`, `INV` | NP-27, RS-07 | `8-§4-1`, `8-§6-1`, `8-§6-2`, `8-§6-3`, `8-§12-5`, `BP-§10.2-W12`, `BP-§12-1`, `BP-§12-3` |
| `EC13-FAQ-02` | `EIS13-FAQ-02` | FAQ-first resolution | `BUILD` | WS-E | P1 | `UNIT`, `EVAL`, `RT` | RS-07 | `24-§17-1`, `24-§17-2`, `24-§17-4`, `9-§12-10`, `9-§17-7`, `8-§3-1`, `8-§3-2`, `8-§3-3`, `8-§3-4`, `8-§3-5`, `8-§3-8`, `8-§5-1`, `8-§5-2`, `8-§5-3`, `8-§7-1`, `8-§7-2`, `8-§7-3`, `8-§7-6`, `8-§12-1`, `8-§16-1`, `8-§16-2`, `8-§16-3`, `8-§16-4`, `8-§16-5` |
| `EC13-FAQ-03` | `EIS13-FAQ-03` | No-answer and escalation states | `BUILD` | WS-E | P1 | `UNIT`, `RT` | NP-27, RS-07 | `24-§17-5`, `8-§6-4`, `8-§6-5`, `8-§7-7`, `8-§7-8`, `8-§7-9`, `8-§7-10`, `8-§7-12`, `8-§13-1`, `8-§15-1`, `8-§15-2`, `8-§15-3`, `8-§15-4`, `8-§15-6`, `8-§15-7`, `8-§15-10`, `8-§15-11`, `8-§17-2`, `8-§17-3`, `8-§17-4`, `8-§17-6` |
| `EC13-FAQ-04` | `EIS13-FAQ-04` | Support isolation from business operation | `BUILD` | WS-E | P1 | `INT`, `RT` | NP-28, RS-07 | `8-§11-1`, `8-§11-2`, `8-§11-4`, `8-§11-5`, `8-§16-9` |

### 7.12 Basic Voice Pipeline (EIS Section 17)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-VOI-01` | `EIS13-VOI-01` | Voice modality convergence on the text path | `BUILD — PROVIDER GATED` | WS-D | P4 | `UNIT`, `INT`, `RT` | NP-29, RS-04 | `24-§5-5`, `24-§7-2`, `24-§15-1`, `24-§15-2`, `24-§15-3`, `24-§15-4`, `24-§15-8`, `10-§4-2`, `10-§11-1`, `10-§11-2`, `10-§11-3`, `10-§11-5`, `10-§11-6`, `10-§11-7`, `10-§11-8`, `12-§4-6`, `12-§4-7`, `12-§4-8`, `12-§4-9`, `12-§6-1`, `12-§6-2`, `12-§6-3`, `12-§6-4`, `12-§6-5`, `12-§6-6`, `12-§9-1`, `12-§9-2`, `12-§9-3`, `12-§11-1`, `12-§11-2`, `12-§11-3`, `12-§11-4`, `12-§11-5`, `12-§11-7`, `12-§11-8`, `12-§11-9`, `12-§13-3`, `BP-§10.2-W4` |
| `EC13-VOI-02` | `EIS13-VOI-02` | Transient raw-audio contract across nine layers | `BUILD — EVIDENCE GATED` | WS-D | P4 | `INV`, `TRANS`, `PROV` | NP-30, RS-04 | `12-§15-4`, `12-§16-8`, `12-§17-6` |
| `EC13-VOI-03` | `EIS13-VOI-03` | Non-executable partial transcripts | `BUILD` | WS-D | P4 | `UNIT`, `INT` | NP-31, RS-17 | `12-§17-1`, `12-§17-2`, `12-§17-3`, `12-§17-4` |
| `EC13-VOI-04` | `EIS13-VOI-04` | Armed spoken-confirmation capture bound to the proposal | `BUILD` | WS-D | P4 | `UNIT`, `DB`, `CONC`, `RT` | NP-31, NP-18, RS-17 | `24-§15-5`, `12-§16-1`, `12-§16-2`, `12-§16-3`, `12-§16-4`, `12-§16-5`, `12-§16-6`, `12-§16-7` |
| `EC13-VOI-05` | `EIS13-VOI-05` | Voice/text semantic parity | `BUILD` | WS-D | P5 | `INT`, `DB`, `RT`, `FRT` | NP-32, RS-04 | `24-§27-4`, `24-§31-2`, `10-§23-2`, `12-§14-1`, `12-§14-2`, `12-§14-3`, `12-§14-4`, `12-§21-2`, `12-§21-7`, `12-§21-8`, `12-§21-10` |
| `EC13-VOI-06` | `EIS13-VOI-06` | Voice output and voice-specific uncertainty | `BUILD` | WS-D | P4 | `UNIT`, `RT` | RS-04 | `24-§15-6`, `24-§15-7`, `10-§5-2`, `12-§3-1`, `12-§7-1`, `12-§7-2`, `12-§7-3`, `12-§7-4`, `12-§7-5`, `12-§7-8`, `12-§7-9`, `12-§7-10`, `12-§8-1`, `12-§8-2`, `12-§8-3`, `12-§8-5`, `12-§18-1`, `12-§18-2`, `12-§18-3` |
| `EC13-VOI-07` | `EIS13-VOI-07` | `FPDR-2` sequencing (credit and repayment wait for SB-P-1.14) | `BUILD — DEPENDENCY GATED` | WS-D | P4 | `RT`, `DOC` | NP-23, RS-14 | `12-§4-1`, `12-§7-6`, `12-§21-1` |
| `EC13-VOI-08` | `EIS13-VOI-08` | Voice failure behaviour | `BUILD` | WS-D | P4 | `INT`, `RT` | NP-33, RS-12 | `12-§17-5`, `12-§17-6`, `12-§17-7`, `12-§17-9`, `12-§17-10`, `12-§17-11`, `12-§17-12`, `12-§17-13`, `12-§17-14`, `12-§17-15` |
| `EC13-VOI-09` | `EIS13-VOI-09` | Basic Voice not gated behind Voice Plus; no voice authority | `BUILD` | WS-D | P4 | `UNIT`, `REPO`, `DOC` | NP-29, RS-04 | `12-§20-1`, `12-§20-2`, `12-§20-3`, `12-§20-4`, `12-§20-5`, `12-§20-6` |
| `EC13-VOI-10` | `EIS13-VOI-10` | Voice provider adapter carrying the configuration identity | `BUILD — PROVIDER GATED` | WS-D | P4 | `UNIT`, `REPO` | NP-16 | `BP-§5.4-1`, `BP-§10.2-I1` |

### 7.13 FPDR-4 Sensitive Output Without Surveillance (EIS Section 18)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-SNS-01` | `EIS13-SNS-01` | `FPDR-4` sensitive spoken-output fallback without surveillance | `BUILD` | WS-D | P4 | `UNIT`, `RT` | NP-34, RS-11 | `12-§15-1`, `12-§15-2`, `12-§15-3`, `12-§15-5`, `12-§21-12` |

### 7.14 Attachment Handoff Toward SB-P-1.14 UDI (EIS Section 19)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-ATT-01` | `EIS13-ATT-01` | Transient attachment intake and UDI handoff interface | `BUILD — EVIDENCE GATED` | WS-F | P5 | `UNIT`, `INT`, `TRANS`, `RT` | NP-35, NP-36, RS-08 | `10-§4-3`, `10-§4-4`, `10-§4-5`, `10-§4-6`, `10-§4-7`, `10-§4-8`, `10-§10-2`, `10-§10-6`, `10-§10-8`, `10-§23-3a`, `BP-§10.2-W11` |

### 7.15 Graceful Failure and WhatsApp-Independent Operation (EIS Section 20)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-FAIL-01` | `EIS13-FAIL-01` | AI and provider failure states | `BUILD` | WS-G | P1 | `UNIT`, `INT`, `RT` | NP-37, RS-09 | `24-§23-1`, `24-§23-2`, `24-§23-3`, `24-§23-4`, `24-§23-5`, `24-§23-7`, `24-§23-10`, `24-§23-11`, `24-§23-13`, `24-§23-15`, `24-§23-16`, `24-§23-17`, `24-§31-12`, `10-§18-5`, `10-§18-9`, `22-§29-10`, `22-§29-13`, `BP-§10.2-W13` |
| `EC13-FAIL-02` | `EIS13-FAIL-02` | Workspace error handling per operation | `BUILD` | WS-G | P2 | `UNIT`, `RT` | NP-37, RS-09 | `10-§18-2`, `10-§18-3`, `10-§18-4`, `10-§18-6`, `10-§18-8`, `10-§18-10`, `10-§18-12`, `10-§18-13`, `22-§19-1`, `22-§19-2`, `22-§19-3`, `22-§19-4`, `22-§19-5`, `22-§19-6`, `22-§19-7` |
| `EC13-FAIL-03` | `EIS13-FAIL-03` | WhatsApp independence (Scenario B) | `BUILD` | WS-G | P5 | `NET`, `RT`, `FRT` | NP-38, RS-03 | `10-§14-1`, `10-§18-1`, `10-§23-7`, `BP-§8.4-2`, `BP-§10.2-E5`, `BP-§10.2-SB` |

### 7.16 Provider Data-Control, Activation, Disable and Rollback Gates (EIS Section 21)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-PRV-01` | `EIS13-PRV-01` | Provider data-control and activation gate on a configuration identity | `BUILD + EVIDENCE GATE` | WS-G | P0 | `UNIT`, `PROV` | NP-16 | 367 rows: all `IN SCOPE` rows carrying `DAI` or `DV` (Section 11) |
| `EC13-PRV-02` | `EIS13-PRV-02` | Provider kill switch, disable and rollback | `BUILD` | WS-G | P1 | `INT`, `RT` | NP-39, RS-09 | 122 rows: all `IN SCOPE` rows carrying `DV` (Section 11) |

### 7.17 Environment, Secrets and Configuration (EIS Section 22)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-ENV-01` | `EIS13-ENV-01` | Server-only secrets and versioned configuration | `BUILD` | WS-C | P1 | `INV`, `REPO` | NP-15 | `24-§25-8` |

### 7.18 Migration Expectations and Rehearsal (Design Only) (EIS Section 23)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-MIG-01` | `EIS13-MIG-01` | Expected additive schema and new-object access contract | `MIGRATION-DESIGN` | Cross-cutting | P0 | `INV`, `DOC` | NP-14 | None — non-product reason recorded in the EIS; adds no product behaviour |
| `EC13-MIG-02` | `EIS13-MIG-02` | Migration ordering and rehearsal | `MIGRATION-DESIGN` | Cross-cutting | P0 | `REPO`, `DOC` | Section 13.4 row items | None — non-product reason recorded in the EIS; adds no product behaviour |

### 7.19 CI and Verification Architecture (EIS Section 24)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-VER-01` | `EIS13-VER-01` | CI tiers and verification architecture | `VERIFICATION` | Cross-cutting | All | `UNIT`, `DB`, `INV`, `REPO` | NP-14 | `22-§22-1`, `22-§22-2`, `22-§22-3`, `22-§22-4`, `22-§22-5`, `22-§22-6` |
| `EC13-VER-02` | `EIS13-VER-02` | Acceptance and experience verification | `VERIFICATION` | Cross-cutting | P5 | `RT`, `FRT`, `DOC` | RS-01, RS-02, RS-03, RS-04 | `BP-§13-1` |

### 7.20 Non-Goals and Must-Not Checks (EIS Section 25)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-NG-01` | `EIS13-NG-01` | Must-not checks | `GOVERNANCE` | Cross-cutting | All | `UNIT`, `REPO`, `DOC` | NP-40 | `24-§4-2`, `24-§4-3`, `24-§4-4`, `24-§4-5`, `24-§4-6`, `24-§4-7`, `24-§4-8`, `24-§30-1`, `24-§30-2`, `24-§30-3`, `24-§30-4`, `24-§30-5`, `24-§30-6`, `24-§30-7`, `24-§30-8`, `9-§18-1`, `9-§18-2`, `9-§18-3`, `9-§18-4`, `9-§18-5`, `9-§18-6`, `9-§18-7`, `10-§22-1`, `10-§22-2`, `10-§22-3`, `10-§22-4`, `10-§22-5`, `10-§22-6`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§28-7`, `22-§28-8`, `22-§28-9`, `22-§28-10` |

### 7.21 Dependency-Rule Disclosures (EIS Section 26)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-DOC-01` | `EIS13-DOC-01` | Dependency-rule disclosures | `GOVERNANCE` | Cross-cutting | All | `REPO`, `DOC` | RS-20 | `22-§27-1`, `22-§27-2`, `22-§27-3`, `22-§27-4`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§29-14` |

### 7.22 Holds and Dependency Gates (EIS Section 27)

| Obligation | Realizes | Title | Type | Workstream | Phase | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC13-HOLD-01` | `EIS13-HOLD-01` | `D12` SB-P-1.12 consumption gate | `GATE` | Gate | P0 | `PROV`, `DOC` | Section 13.4 row items | 252 rows: all `IN SCOPE` rows carrying `D12` (Section 11) |
| `EC13-HOLD-02` | `EIS13-HOLD-02` | `DTX` transactions-family gate | `GATE` | Gate | P3 | `DB`, `INV` | NP-22 | `24-§21-2`, `24-§31-13`, `9-§17-1`, `10-§11-2`, `10-§13-1`, `10-§13-2`, `10-§23-1`, `10-§23-9`, `12-§4-1`, `12-§21-1`, `12-§21-9`, `22-§29-8`, `17-§5-7`, `BP-§6.2-1`, `BP-§6.4-8`, `BP-§10.2-W9`, `BP-§10.2-SA1` |
| `EC13-HOLD-03` | `EIS13-HOLD-03` | Later-mission dependency gate | `GATE` | Gate | — | `DOC` | NP-09 | 54 rows: all `IN SCOPE` rows carrying a later-mission or policy code (Section 11) |

## 8. Cross-Cutting Engineering Rules

These rules restate engineering constraints already fixed by the locked EIS for the builder. Each serves the obligations it names and adds no behaviour.

| Rule | Area | Rule |
|---|---|---|
| X-01 | Authority outside the model | The model proposes; the SB-P-1.12 kernel decides; deterministic commands write (`EC13-AUTH-02`, `EC13-TOOL-01`, `EC13-CMD-01`). |
| X-02 | Single protected transaction-write path | AI and Voice never reach raw `transactions.insert`; Structured Transactions UI, Conversation and Voice converge on `create_transaction_governed` in one coordinated cut-over; never two live authority paths on one family (`EC13-CMD-02`, `EC13-HOLD-02`). |
| X-03 | Human decision ownership | A consequential action executes only through a confirmation binding on the exact frozen proposal; no role, capability or delegation substitutes for confirmation (`EC13-CNF-01`, `EC13-CNF-03`, `EC13-VOI-04`). |
| X-04 | Server-derived authority | Principal, business and authority context are derived server-side through the caller's RLS-bound client; never from the client, the model or tool payload; no `service_role` path (`EC13-AUTH-01`, `EC13-TOOL-01`, `EC13-CTX-02`). |
| X-05 | Instruction/data separation | Only the merchant's current request may lead to a proposal, and only among the tools available to that principal; retrieved or embedded content is data (`EC13-CTX-01`). |
| X-06 | Current authority on reuse | Every cache serve, history render, summary or re-injection re-checks current authority (`EC13-CTX-02`, `EC13-CTX-03`, `EC13-GW-05`, `EC13-WSP-05`). |
| X-07 | Data minimization | No raw audio at any layer; attachments staged in in-request memory only; telemetry stores identifiers and outcomes, not content archives (`EC13-VOI-02`, `EC13-ATT-01`, `EC13-TEL-01`). |
| X-08 | Provider replaceability and gates | Providers sit behind adapters with a versioned configuration identity; a material change requires re-verification; kill switch and text fallback always available (`EC13-GW-02`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-VOI-10`). |
| X-09 | Honest outcomes | Success language only from the committed outcome; unknown outcome is a state reconciled by lookup; no automatic re-execution (`EC13-TEL-02`, `EC13-IDM-02`). |
| X-10 | Migration governance | No migration file is created or executed under this package; each migration needs a separately authorized migration mission, rehearsed on the isolated test project (`EC13-MIG-01`, `EC13-MIG-02`). |
| X-11 | Evidence | Evidence follows package template Sections 12 and 13 under `docs/implementation/SB-P-1.13/evidence/`, created only when an authorized stage produces evidence. Evidence is never claimed from documentary review, CI success or feasibility labels. |
| X-12 | Completion | The builder records a status per assigned FCTM row in `lovable-build-completion-report.md`. A builder never verifies, approves or accepts its own work. `DEMONSTRATED` is reserved for rows with independent Stage 19 evidence. |

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

## 10. Founder Decision Boundaries

| Decision | Obligations | Boundary |
|---|---|---|
| `FPDR-1` | `EC13-CMD-02`, `EC13-CNF-01`, `EC13-CNF-03` | One additive governed create-transaction command for transaction types available at implementation; the four-state Ledger is not part of this mission. |
| `FPDR-2` | `EC13-VOI-07` | Basic Voice is built for available transaction capabilities; credit and repayment portions of `12-§4-1`, `12-§7-6`, `12-§21-1` wait for SB-P-1.14 and are never claimed complete here. |
| `FPDR-3` | `EC13-VOI-02` | Raw audio is transient; no durable raw-audio store; provider retention separately governed. |
| `FPDR-4` | `EC13-SNS-01` | Sensitive authorized content falls back to authenticated text from existing trustworthy context only; no new sensing or privacy control; permission never changes with listening context. |
| `FPDR-5` | `EC13-CMD-03` | A sale with payment method credit is recordable; no customer-credit balance, owed state, repayment allocation or four-state Ledger state is created. |

## 11. Row-to-Obligation Map

One line per `IN SCOPE` FCTM row, in FCTM order. Finding is the Blueprint Section 20.6 Stage 7 finding (documentary assessment, not evidence). Holds are the Blueprint Section 20.6 remaining-hold codes.

| # | FCTM row | Blueprint | Obligations | Workstreams | Finding | Holds |
|---|---|---|---|---|---|---|
| 1 | `24-§4-1` | §8.3 | `EC13-GW-01`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 2 | `24-§4-2` | §8.12 | `EC13-PRV-01`, `EC13-NG-01` | WS-G, Cross-cutting | FOLLOW-UP | H-PROV |
| 3 | `24-§4-3` | §8.12 | `EC13-PRV-01`, `EC13-NG-01` | WS-G, Cross-cutting | FOLLOW-UP | H-PROV |
| 4 | `24-§4-4` | §8.12 | `EC13-PRV-01`, `EC13-NG-01` | WS-G, Cross-cutting | FOLLOW-UP | H-PROV |
| 5 | `24-§4-5` | §8.12 | `EC13-PRV-01`, `EC13-NG-01` | WS-G, Cross-cutting | FOLLOW-UP | H-PROV |
| 6 | `24-§4-6` | §8.12 | `EC13-PRV-01`, `EC13-NG-01` | WS-G, Cross-cutting | FOLLOW-UP | H-PROV |
| 7 | `24-§4-7` | §8.12 | `EC13-PRV-01`, `EC13-NG-01` | WS-G, Cross-cutting | FOLLOW-UP | H-PROV |
| 8 | `24-§4-8` | §8.12 | `EC13-PRV-01`, `EC13-NG-01` | WS-G, Cross-cutting | FOLLOW-UP | H-PROV |
| 9 | `24-§5-1` | §8.3 | `EC13-ARC-02`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-CONF |
| 10 | `24-§5-3` | §8.3 | `EC13-ARC-02`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 11 | `24-§5-5` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 12 | `24-§5-7` | §8.3 | `EC13-ARC-02` | WS-C | PASS | — |
| 13 | `24-§5-8` | §8.3 | `EC13-ARC-01` | WS-C | PASS | — |
| 14 | `24-§6-1` | §8.3 | `EC13-GW-03`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 15 | `24-§6-2` | §8.3 | `EC13-GW-03`, `EC13-PRV-01`, `EC13-HOLD-03` | WS-C, WS-G, Gate | FOLLOW-UP | H-PROV, H-LATER |
| 16 | `24-§6-3` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 17 | `24-§7-1` | §8.3 | `EC13-ARC-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 18 | `24-§7-2` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV, H-AUDIO |
| 19 | `24-§7-5` | §8.3 | `EC13-ARC-02`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 20 | `24-§8-1` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 21 | `24-§8-2` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 22 | `24-§8-3` | §8.2 | `EC13-GW-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 23 | `24-§9-1` | §8.3 | `EC13-CTX-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 24 | `24-§9-2` | §8.3 | `EC13-CTX-02`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-C, Gate | BLOCKED | H-D12, H-LATER |
| 25 | `24-§9-3` | §8.3 | `EC13-ARC-03`, `EC13-HOLD-03` | WS-C, Gate | FOLLOW-UP | H-LATER |
| 26 | `24-§9-4` | §8.3 | `EC13-ARC-03` | WS-C | PASS | — |
| 27 | `24-§10-1` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 28 | `24-§10-2` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 29 | `24-§10-3` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 30 | `24-§10-4` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 31 | `24-§10-5` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 32 | `24-§10-6` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 33 | `24-§10-7` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 34 | `24-§10-8` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 35 | `24-§10-9` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 36 | `24-§10-10` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-C, Gate | BLOCKED | H-D12, H-LATER |
| 37 | `24-§10-11` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 38 | `24-§11-1` | §8.5 | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 39 | `24-§11-2` | §8.5 | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 40 | `24-§11-3` | §8.5 | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 41 | `24-§11-4` | §8.5 | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 42 | `24-§11-5` | §8.5 | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 43 | `24-§11-6` | §8.5 | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-CONF |
| 44 | `24-§11-7` | §8.5 | `EC13-CNF-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-CONF |
| 45 | `24-§11-8` | §8.5 | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 46 | `24-§11-9` | §8.5 | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 47 | `24-§11-10` | §8.5 | `EC13-TOOL-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 48 | `24-§13-2` | §8.5 | `EC13-CNF-03` | WS-C | PASS | — |
| 49 | `24-§15-1` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 50 | `24-§15-2` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV, H-AUDIO |
| 51 | `24-§15-3` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 52 | `24-§15-4` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 53 | `24-§15-5` | §8.7 | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-CONF |
| 54 | `24-§15-6` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 55 | `24-§15-7` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 56 | `24-§15-8` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 57 | `24-§17-1` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV |
| 58 | `24-§17-2` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV |
| 59 | `24-§17-4` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV |
| 60 | `24-§17-5` | §8.8 | `EC13-FAQ-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-E, Gate | BLOCKED | H-D12, H-LATER |
| 61 | `24-§19-1` | §8.3 | `EC13-GW-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 62 | `24-§19-2` | §8.3 | `EC13-GW-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 63 | `24-§19-3` | §8.3 | `EC13-GW-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 64 | `24-§19-4` | §8.3 | `EC13-GW-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 65 | `24-§20-1` | §8.5 | `EC13-TOOL-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 66 | `24-§20-2` | §8.5 | `EC13-TOOL-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 67 | `24-§20-3` | §8.5 | `EC13-TOOL-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 68 | `24-§20-4` | §8.5 | `EC13-TOOL-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 69 | `24-§20-5` | §8.5 | `EC13-TOOL-02`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 70 | `24-§20-6` | §8.5 | `EC13-TOOL-02`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 71 | `24-§20-7` | §8.5 | `EC13-TOOL-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 72 | `24-§20-8` | §8.5 | `EC13-TOOL-02`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 73 | `24-§20-9` | §8.5 | `EC13-TOOL-02`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-CONF |
| 74 | `24-§20-10` | §8.5 | `EC13-TOOL-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 75 | `24-§21-1` | §8.5 | `EC13-CNF-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 76 | `24-§21-2` | §8.5 | `EC13-CNF-03`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | WS-C, Gate | BLOCKED | H-D12, H-DTX, H-CONF |
| 77 | `24-§21-8` | §8.5 | `EC13-CNF-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 78 | `24-§21-9` | §8.5 | `EC13-CNF-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 79 | `24-§21-10` | §8.5 | `EC13-CNF-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 80 | `24-§22-1` | §8.4 | `EC13-AUTH-05`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 81 | `24-§22-2` | §8.4 | `EC13-AUTH-05`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 82 | `24-§22-3` | §8.4 | `EC13-AUTH-05`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 83 | `24-§22-4` | §8.4 | `EC13-AUTH-05`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 84 | `24-§22-5` | §8.4 | `EC13-AUTH-05`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 85 | `24-§22-6` | §8.4 | `EC13-AUTH-05`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 86 | `24-§22-7` | §8.4 | `EC13-AUTH-05`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 87 | `24-§22-8` | §8.4 | `EC13-AUTH-05`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 88 | `24-§23-1` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 89 | `24-§23-2` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 90 | `24-§23-3` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 91 | `24-§23-4` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 92 | `24-§23-5` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-G | FOLLOW-UP | H-PROV |
| 93 | `24-§23-7` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 94 | `24-§23-8` | §8.10 | `EC13-IDM-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 95 | `24-§23-9` | §8.10 | `EC13-CTX-03`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 96 | `24-§23-10` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 97 | `24-§23-11` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 98 | `24-§23-12` | §8.10 | `EC13-IDM-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 99 | `24-§23-13` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 100 | `24-§23-14` | §8.10 | `EC13-IDM-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV, H-CONF |
| 101 | `24-§23-15` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 102 | `24-§23-16` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 103 | `24-§23-17` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 104 | `24-§23-18` | §8.10 | `EC13-IDM-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-CONF |
| 105 | `24-§24-1` | §8.6 | `EC13-AUD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 106 | `24-§24-2` | §8.6 | `EC13-AUD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 107 | `24-§24-3` | §8.6 | `EC13-AUD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 108 | `24-§24-4` | §8.6 | `EC13-AUD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 109 | `24-§24-5` | §8.6 | `EC13-AUD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 110 | `24-§24-6` | §8.6 | `EC13-AUD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 111 | `24-§24-7` | §8.6 | `EC13-AUD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 112 | `24-§24-8` | §8.6 | `EC13-AUD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 113 | `24-§24-9` | §8.6 | `EC13-AUD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 114 | `24-§24-10` | §8.6 | `EC13-AUD-01`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 115 | `24-§25-1` | §8.4 | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 116 | `24-§25-2` | §8.4 | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 117 | `24-§25-3` | §8.4 | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 118 | `24-§25-4` | §8.4 | `EC13-WSP-05`, `EC13-PRV-01` | WS-A, WS-G | FOLLOW-UP | H-PROV |
| 119 | `24-§25-5` | §8.4 | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 120 | `24-§25-6` | §8.4 | `EC13-AUTH-04`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 121 | `24-§25-7` | §8.4 | `EC13-AUTH-04`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 122 | `24-§25-8` | §8.4 | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-ENV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 123 | `24-§25-9` | §8.4 | `EC13-AUTH-04` | WS-C | PASS | — |
| 124 | `24-§26-1` | §8.3 | `EC13-GW-05`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 125 | `24-§26-2` | §8.3 | `EC13-GW-05`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 126 | `24-§26-3` | §8.3 | `EC13-GW-05`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 127 | `24-§26-4` | §8.3 | `EC13-GW-05`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 128 | `24-§26-5` | §8.3 | `EC13-GW-05`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 129 | `24-§26-6` | §8.3 | `EC13-GW-05`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 130 | `24-§26-7` | §8.3 | `EC13-GW-05`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV, H-CONF |
| 131 | `24-§26-8` | §8.3 | `EC13-GW-05`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 132 | `24-§26-9` | §8.3 | `EC13-GW-05`, `EC13-TEL-01`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 133 | `24-§26-10` | §8.3 | `EC13-GW-05` | WS-C | PASS | — |
| 134 | `24-§27-2` | §8.3 | `EC13-ARC-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 135 | `24-§27-4` | §8.7 | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 136 | `24-§27-6` | §8.3 | `EC13-ARC-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 137 | `24-§27-7` | §8.3 | `EC13-AUTH-02`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 138 | `24-§27-8` | §8.3 | `EC13-ARC-03`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 139 | `24-§27-9` | §8.3 | `EC13-ARC-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 140 | `24-§27-10` | §8.3 | `EC13-AUTH-02`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 141 | `24-§27-11` | §8.3 | `EC13-ARC-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 142 | `24-§28-1` | §8.3 | `EC13-GW-01`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 143 | `24-§28-2` | §8.3 | `EC13-GW-04`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 144 | `24-§28-3` | §8.3 | `EC13-GW-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 145 | `24-§28-4` | §8.3 | `EC13-TOOL-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 146 | `24-§28-5` | §8.3 | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 147 | `24-§28-6` | §8.3 | `EC13-CTX-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 148 | `24-§28-7` | §8.3 | `EC13-WSP-05`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-A, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 149 | `24-§28-8` | §8.3 | `EC13-CMD-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 150 | `24-§28-9` | §8.3 | `EC13-GW-01`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV, H-CONF |
| 151 | `24-§28-10` | §8.3 | `EC13-GW-05`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 152 | `24-§28-11` | §8.3 | `EC13-GW-04`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 153 | `24-§28-12` | §8.3 | `EC13-AUD-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 154 | `24-§29-1` | §8.3 | `EC13-GW-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 155 | `24-§29-2` | §8.3 | `EC13-ARC-03`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 156 | `24-§29-3` | §8.3 | `EC13-ARC-03`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 157 | `24-§29-4` | §8.3 | `EC13-GW-02`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 158 | `24-§29-5` | §8.3 | `EC13-GW-02`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 159 | `24-§29-6` | §8.3 | `EC13-GW-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 160 | `24-§30-1` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 161 | `24-§30-2` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 162 | `24-§30-3` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 163 | `24-§30-4` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 164 | `24-§30-5` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 165 | `24-§30-6` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 166 | `24-§30-7` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 167 | `24-§30-8` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 168 | `24-§31-1` | §8.3 | `EC13-ARC-02`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LATER, H-EVID |
| 169 | `24-§31-2` | §8.7 | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-EVID |
| 170 | `24-§31-3` | §8.4 | `EC13-AUTH-02`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-EVID |
| 171 | `24-§31-4` | §8.4 | `EC13-AUTH-03`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-EVID |
| 172 | `24-§31-5` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG, H-EVID |
| 173 | `24-§31-6` | §8.3 | `EC13-TOOL-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV, H-EVID |
| 174 | `24-§31-7` | §8.5 | `EC13-CNF-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-CONF, H-EVID |
| 175 | `24-§31-11` | §8.10 | `EC13-IDM-02`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-CONF, H-EVID |
| 176 | `24-§31-12` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV, H-EVID |
| 177 | `24-§31-13` | §8.5 | `EC13-CMD-02`, `EC13-IDM-01`, `EC13-HOLD-01`, `EC13-HOLD-02` | WS-C, Gate | BLOCKED | H-D12, H-DTX, H-CONF, H-EVID |
| 178 | `24-§31-14` | §8.3 | `EC13-AUD-01`, `EC13-TEL-01`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV, H-EVID |
| 179 | `24-§31-15` | §8.3 | `EC13-ARC-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-C, Gate | BLOCKED | H-D12, H-LATER, H-EVID |
| 180 | `24-§31-16` | §8.3 | `EC13-GW-02`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV, H-EVID |
| 181 | `9-§3-1` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 182 | `9-§3-2` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 183 | `9-§3-3` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 184 | `9-§3-4` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 185 | `9-§3-5` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 186 | `9-§3-6` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 187 | `9-§3-7` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 188 | `9-§3-8` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 189 | `9-§3-9` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 190 | `9-§4-1` | §8.2 | `EC13-LANG-02`, `EC13-HOLD-01` | WS-B, Gate | BLOCKED | H-D12, H-LANG |
| 191 | `9-§4-2` | §8.2 | `EC13-LANG-02` | WS-B | PASS | H-LANG |
| 192 | `9-§4-3` | §8.2 | `EC13-LANG-02` | WS-B | PASS | H-LANG |
| 193 | `9-§4-4` | §8.2 | `EC13-LANG-02` | WS-B | PASS | H-LANG |
| 194 | `9-§4-5` | §8.2 | `EC13-LANG-02` | WS-B | PASS | H-LANG |
| 195 | `9-§5-1` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 196 | `9-§5-2` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 197 | `9-§6-1` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 198 | `9-§6-2` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 199 | `9-§7-1` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 200 | `9-§7-2` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 201 | `9-§7-3` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 202 | `9-§8-1` | §8.2 | `EC13-LANG-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 203 | `9-§8-2` | §8.2 | `EC13-LANG-06`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-B, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LANG, H-CONF |
| 204 | `9-§8-4` | §8.2 | `EC13-LANG-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 205 | `9-§9-1` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 206 | `9-§9-2` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-B, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LANG |
| 207 | `9-§9-3` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 208 | `9-§9-4` | §8.2 | `EC13-LANG-03`, `EC13-CMD-03`, `EC13-PRV-01` | WS-B, WS-C, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 209 | `9-§9-5` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-03` | WS-B, WS-G, Gate | FOLLOW-UP | H-PROV, H-LANG, H-LATER |
| 210 | `9-§9-6` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-B, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LANG |
| 211 | `9-§9-7` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 212 | `9-§9-8` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 213 | `9-§10-1` | §8.2 | `EC13-LANG-04`, `EC13-HOLD-01` | WS-B, Gate | BLOCKED | H-D12, H-LANG |
| 214 | `9-§10-2` | §8.2 | `EC13-LANG-04`, `EC13-HOLD-01` | WS-B, Gate | BLOCKED | H-D12, H-LANG |
| 215 | `9-§10-3` | §8.2 | `EC13-LANG-04`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-B, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LANG |
| 216 | `9-§11-1` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 217 | `9-§11-2` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 218 | `9-§11-3` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 219 | `9-§11-4` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 220 | `9-§11-5` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 221 | `9-§11-6` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 222 | `9-§11-7` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-B, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LANG, H-CONF |
| 223 | `9-§12-4` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 224 | `9-§12-10` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV |
| 225 | `9-§12-13` | §8.2 | `EC13-LANG-01` | WS-B | PASS | H-LANG |
| 226 | `9-§13-1` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 227 | `9-§13-2` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 228 | `9-§13-3` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 229 | `9-§13-4` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 230 | `9-§13-5` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 231 | `9-§13-6` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 232 | `9-§13-7` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 233 | `9-§13-8` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 234 | `9-§13-9` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 235 | `9-§13-10` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 236 | `9-§13-11` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 237 | `9-§14-1` | §8.2 | `EC13-LANG-06`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 238 | `9-§14-2` | §8.2 | `EC13-LANG-06`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 239 | `9-§14-3` | §8.2 | `EC13-LANG-06`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 240 | `9-§14-4` | §8.2 | `EC13-LANG-06`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 241 | `9-§14-5` | §8.2 | `EC13-LANG-06`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 242 | `9-§14-6` | §8.2 | `EC13-LANG-06`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 243 | `9-§14-7` | §8.2 | `EC13-LANG-06`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 244 | `9-§14-8` | §8.2 | `EC13-LANG-06`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 245 | `9-§15-1` | §8.2 | `EC13-LANG-03` | WS-B | PASS | H-LANG |
| 246 | `9-§15-2` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 247 | `9-§15-3` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 248 | `9-§15-4` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 249 | `9-§15-5` | §8.2 | `EC13-LANG-03` | WS-B | PASS | H-LANG |
| 250 | `9-§16-1` | §8.2 | `EC13-LANG-05`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 251 | `9-§16-2` | §8.2 | `EC13-LANG-05`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 252 | `9-§16-3` | §8.2 | `EC13-LANG-05`, `EC13-PRV-01`, `EC13-PRV-02` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 253 | `9-§16-4` | §8.2 | `EC13-LANG-05`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-B, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LANG |
| 254 | `9-§17-1` | §8.2 | `EC13-LANG-06`, `EC13-CMD-02`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-02` | WS-B, WS-C, WS-G, Gate | BLOCKED | H-D12, H-DTX, H-PROV, H-LANG, H-EVID |
| 255 | `9-§17-2` | §8.2 | `EC13-LANG-06`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG, H-EVID |
| 256 | `9-§17-3` | §8.2 | `EC13-LANG-04`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-B, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LANG, H-EVID |
| 257 | `9-§17-4` | §8.2 | `EC13-LANG-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG, H-EVID |
| 258 | `9-§17-7` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV, H-EVID |
| 259 | `9-§17-8` | §8.2 | `EC13-LANG-02`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG, H-EVID |
| 260 | `9-§17-9` | §8.2 | `EC13-AUTH-02`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-C, Gate | BLOCKED | H-D12, H-LANG, H-LATER, H-EVID |
| 261 | `9-§17-10` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-B, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LANG, H-EVID |
| 262 | `9-§18-1` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 263 | `9-§18-2` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 264 | `9-§18-3` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 265 | `9-§18-4` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 266 | `9-§18-5` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 267 | `9-§18-6` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 268 | `9-§18-7` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 269 | `9-§19` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 270 | `10-§4-1` | §8.1 | `EC13-WSP-02`, `EC13-PRV-01` | WS-A, WS-G | FOLLOW-UP | H-PROV |
| 271 | `10-§4-2` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV, H-AUDIO |
| 272 | `10-§4-3` | §8.9 | `EC13-ATT-01`, `EC13-HOLD-03` | WS-F, Gate | FOLLOW-UP | H-LATER |
| 273 | `10-§4-4` | §8.9 | `EC13-ATT-01`, `EC13-HOLD-03` | WS-F, Gate | FOLLOW-UP | H-LATER |
| 274 | `10-§4-5` | §8.9 | `EC13-ATT-01`, `EC13-HOLD-03` | WS-F, Gate | FOLLOW-UP | H-LATER |
| 275 | `10-§4-6` | §8.9 | `EC13-ATT-01`, `EC13-HOLD-03` | WS-F, Gate | FOLLOW-UP | H-LATER |
| 276 | `10-§4-7` | §8.9 | `EC13-ATT-01`, `EC13-HOLD-03` | WS-F, Gate | FOLLOW-UP | H-LATER |
| 277 | `10-§4-8` | §8.9 | `EC13-ATT-01`, `EC13-HOLD-03` | WS-F, Gate | FOLLOW-UP | H-LATER |
| 278 | `10-§5-1` | §8.1 | `EC13-WSP-02` | WS-A | PASS | — |
| 279 | `10-§5-2` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 280 | `10-§5-3` | §8.1 | `EC13-WSP-02` | WS-A | PASS | — |
| 281 | `10-§5-4` | §8.1 | `EC13-WSP-02` | WS-A | PASS | — |
| 282 | `10-§5-6` | §8.1 | `EC13-WSP-02` | WS-A | PASS | H-CONF |
| 283 | `10-§5-8` | §8.1 | `EC13-WSP-02`, `EC13-HOLD-01` | WS-A, Gate | BLOCKED | H-D12 |
| 284 | `10-§5-9` | §8.1 | `EC13-WSP-02`, `EC13-HOLD-01` | WS-A, Gate | BLOCKED | H-D12 |
| 285 | `10-§5-11` | §8.1 | `EC13-WSP-02`, `EC13-PRV-01`, `EC13-PRV-02` | WS-A, WS-G | FOLLOW-UP | H-PROV |
| 286 | `10-§6-1` | §8.1 | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-A, Gate | BLOCKED | H-D12, H-LATER |
| 287 | `10-§6-2` | §8.1 | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-A, Gate | BLOCKED | H-D12, H-LATER |
| 288 | `10-§6-3` | §8.1 | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-A, Gate | BLOCKED | H-D12, H-LATER |
| 289 | `10-§6-4` | §8.1 | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-A, Gate | BLOCKED | H-D12, H-LATER |
| 290 | `10-§6-5` | §8.1 | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-A, Gate | BLOCKED | H-D12, H-LATER |
| 291 | `10-§6-6` | §8.1 | `EC13-WSP-03`, `EC13-HOLD-03` | WS-A, Gate | FOLLOW-UP | H-LATER |
| 292 | `10-§6-7` | §8.1 | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-A, Gate | BLOCKED | H-D12, H-LATER |
| 293 | `10-§6-8` | §8.1 | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-A, Gate | BLOCKED | H-D12, H-LATER |
| 294 | `10-§6-9` | §8.1 | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-A, Gate | BLOCKED | H-D12, H-LATER |
| 295 | `10-§6-10` | §8.1 | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-A, Gate | BLOCKED | H-D12, H-LATER |
| 296 | `10-§6-11` | §8.1 | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-A, Gate | BLOCKED | H-D12, H-CONF, H-LATER |
| 297 | `10-§6-12` | §8.1 | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-A, Gate | BLOCKED | H-D12, H-CONF, H-LATER |
| 298 | `10-§6-13` | §8.1 | `EC13-WSP-03` | WS-A | PASS | — |
| 299 | `10-§7-2` | §8.5 | `EC13-CNF-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 300 | `10-§7-3` | §8.5 | `EC13-CNF-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 301 | `10-§7-4` | §8.5 | `EC13-CNF-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 302 | `10-§7-5` | §8.5 | `EC13-CNF-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 303 | `10-§7-6` | §8.1 | `EC13-ARC-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-C, Gate | BLOCKED | H-D12, H-LATER |
| 304 | `10-§8-1` | §8.4 | `EC13-AUTH-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 305 | `10-§8-2` | §8.4 | `EC13-AUTH-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 306 | `10-§8-3` | §8.4 | `EC13-AUTH-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 307 | `10-§8-4` | §8.4 | `EC13-AUTH-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 308 | `10-§9-3` | §8.5 | `EC13-CNF-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-C, Gate | BLOCKED | H-D12, H-LATER |
| 309 | `10-§10-2` | §8.9 | `EC13-ATT-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-F, Gate | BLOCKED | H-D12, H-LATER |
| 310 | `10-§10-6` | §8.9 | `EC13-ATT-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-F, Gate | BLOCKED | H-D12, H-LATER |
| 311 | `10-§10-8` | §8.9 | `EC13-ATT-01` | WS-F | PASS | — |
| 312 | `10-§11-1` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 313 | `10-§11-2` | §8.7 | `EC13-CMD-02`, `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | WS-C, WS-D, WS-G, Gate | BLOCKED | H-D12, H-DTX, H-PROV |
| 314 | `10-§11-3` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 315 | `10-§11-5` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 316 | `10-§11-6` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 317 | `10-§11-7` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 318 | `10-§11-8` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 319 | `10-§12-1` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 320 | `10-§12-2` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 321 | `10-§12-3` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 322 | `10-§13-1` | §8.5 | `EC13-CMD-01`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | WS-C, Gate | BLOCKED | H-D12, H-DTX |
| 323 | `10-§13-2` | §8.5 | `EC13-CMD-01`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | WS-C, Gate | BLOCKED | H-D12, H-DTX |
| 324 | `10-§13-8` | §8.5 | `EC13-CMD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 325 | `10-§13-9` | §8.5 | `EC13-CMD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 326 | `10-§13-10` | §8.5 | `EC13-CMD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 327 | `10-§13-11` | §8.5 | `EC13-CMD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 328 | `10-§13-12` | §8.5 | `EC13-CMD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 329 | `10-§14-1` | §8.10 | `EC13-FAIL-03`, `EC13-HOLD-01` | WS-G, Gate | BLOCKED | H-D12 |
| 330 | `10-§15-1` | §8.4 | `EC13-AUTH-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 331 | `10-§15-2` | §8.4 | `EC13-AUTH-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 332 | `10-§15-3` | §8.4 | `EC13-AUTH-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 333 | `10-§15-4` | §8.4 | `EC13-AUTH-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 334 | `10-§15-5` | §8.4 | `EC13-AUTH-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 335 | `10-§15-6` | §8.4 | `EC13-AUTH-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 336 | `10-§15-7` | §8.4 | `EC13-AUTH-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 337 | `10-§16-1` | §8.1 | `EC13-WSP-05` | WS-A | PASS | — |
| 338 | `10-§16-2` | §8.1 | `EC13-WSP-05`, `EC13-HOLD-03` | WS-A, Gate | FOLLOW-UP | H-LATER |
| 339 | `10-§16-3` | §8.1 | `EC13-WSP-05`, `EC13-HOLD-01` | WS-A, Gate | BLOCKED | H-D12 |
| 340 | `10-§16-4` | §8.1 | `EC13-WSP-05`, `EC13-HOLD-03` | WS-A, Gate | FOLLOW-UP | H-LATER |
| 341 | `10-§16-5` | §8.1 | `EC13-WSP-05`, `EC13-HOLD-03` | WS-A, Gate | FOLLOW-UP | H-LATER |
| 342 | `10-§16-6` | §8.1 | `EC13-WSP-05`, `EC13-HOLD-01` | WS-A, Gate | BLOCKED | H-D12 |
| 343 | `10-§16-7` | §8.1 | `EC13-WSP-05`, `EC13-HOLD-01` | WS-A, Gate | BLOCKED | H-D12, H-CONF |
| 344 | `10-§16-8` | §8.1 | `EC13-WSP-05` | WS-A | PASS | — |
| 345 | `10-§17-1` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 346 | `10-§17-2` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-B, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LANG |
| 347 | `10-§17-3` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 348 | `10-§17-6` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-B, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LANG |
| 349 | `10-§17-7` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-B, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LANG |
| 350 | `10-§17-8` | §8.5 | `EC13-CNF-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 351 | `10-§17-9` | §8.5 | `EC13-CNF-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 352 | `10-§18-1` | §8.10 | `EC13-FAIL-03`, `EC13-HOLD-01` | WS-G, Gate | BLOCKED | H-D12 |
| 353 | `10-§18-2` | §8.10 | `EC13-FAIL-02` | WS-G | PASS | — |
| 354 | `10-§18-3` | §8.10 | `EC13-FAIL-02` | WS-G | PASS | — |
| 355 | `10-§18-4` | §8.10 | `EC13-FAIL-02` | WS-G | PASS | — |
| 356 | `10-§18-5` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 357 | `10-§18-6` | §8.10 | `EC13-FAIL-02`, `EC13-HOLD-01` | WS-G, Gate | BLOCKED | H-D12 |
| 358 | `10-§18-7` | §8.10 | `EC13-IDM-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 359 | `10-§18-8` | §8.10 | `EC13-FAIL-02`, `EC13-HOLD-01` | WS-G, Gate | BLOCKED | H-D12, H-CONF |
| 360 | `10-§18-9` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 361 | `10-§18-10` | §8.10 | `EC13-FAIL-02` | WS-G | PASS | — |
| 362 | `10-§18-12` | §8.10 | `EC13-FAIL-02` | WS-G | PASS | — |
| 363 | `10-§18-13` | §8.10 | `EC13-FAIL-02` | WS-G | PASS | — |
| 364 | `10-§19-1` | §8.4 | `EC13-AUTH-04`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 365 | `10-§19-2` | §8.4 | `EC13-AUTH-04`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 366 | `10-§19-3` | §8.4 | `EC13-AUTH-04`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 367 | `10-§19-4` | §8.4 | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-FPDR4 |
| 368 | `10-§19-5` | §8.4 | `EC13-AUTH-04`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 369 | `10-§19-6` | §8.4 | `EC13-AUTH-04`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 370 | `10-§19-7` | §8.4 | `EC13-AUTH-04`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 371 | `10-§20-1` | §8.1 | `EC13-WSP-06`, `EC13-PRV-01` | WS-A, WS-G | FOLLOW-UP | H-PROV |
| 372 | `10-§20-2` | §8.1 | `EC13-WSP-06` | WS-A | PASS | — |
| 373 | `10-§20-3` | §8.1 | `EC13-WSP-06` | WS-A | PASS | H-CONF |
| 374 | `10-§20-4` | §8.1 | `EC13-WSP-06` | WS-A | PASS | H-CONF |
| 375 | `10-§20-5` | §8.1 | `EC13-WSP-06`, `EC13-HOLD-01` | WS-A, Gate | BLOCKED | H-D12, H-CONF |
| 376 | `10-§20-6` | §8.1 | `EC13-WSP-01` | WS-A | PASS | — |
| 377 | `10-§22-1` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 378 | `10-§22-2` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 379 | `10-§22-3` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 380 | `10-§22-4` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 381 | `10-§22-5` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 382 | `10-§22-6` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 383 | `10-§23-1` | §8.5 | `EC13-CMD-02`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-02` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-DTX, H-PROV, H-CONF, H-EVID |
| 384 | `10-§23-2` | §8.7 | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-EVID |
| 385 | `10-§23-3a` | §8.9 | `EC13-ATT-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-F, Gate | BLOCKED | H-D12, H-LATER, H-EVID |
| 386 | `10-§23-5` | §8.4 | `EC13-AUTH-03`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-EVID |
| 387 | `10-§23-7` | §8.10 | `EC13-FAIL-03`, `EC13-HOLD-01` | WS-G, Gate | BLOCKED | H-D12, H-EVID |
| 388 | `10-§23-8` | §8.5 | `EC13-CNF-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-EVID |
| 389 | `10-§23-9` | §8.5 | `EC13-CMD-02`, `EC13-IDM-01`, `EC13-HOLD-01`, `EC13-HOLD-02` | WS-C, Gate | BLOCKED | H-D12, H-DTX, H-CONF, H-EVID |
| 390 | `10-§23-10` | §8.4 | `EC13-AUTH-04`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-EVID |
| 391 | `12-§3-1` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 392 | `12-§4-1` | §8.7 | `EC13-CMD-02`, `EC13-CMD-03`, `EC13-VOI-07`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-02`, `EC13-HOLD-03` | WS-C, WS-D, WS-G, Gate | BLOCKED | H-D12, H-DTX, H-PROV, H-LATER |
| 393 | `12-§4-6` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV, H-CONF |
| 394 | `12-§4-7` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 395 | `12-§4-8` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 396 | `12-§4-9` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 397 | `12-§6-1` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-CONF |
| 398 | `12-§6-2` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 399 | `12-§6-3` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 400 | `12-§6-4` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 401 | `12-§6-5` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 402 | `12-§6-6` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 403 | `12-§7-1` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 404 | `12-§7-2` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 405 | `12-§7-3` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 406 | `12-§7-4` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 407 | `12-§7-5` | §8.7 | `EC13-CMD-03`, `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-C, WS-D, WS-G | FOLLOW-UP | H-PROV |
| 408 | `12-§7-6` | §8.7 | `EC13-CMD-03`, `EC13-VOI-07`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-03` | WS-C, WS-D, WS-G, Gate | FOLLOW-UP | H-PROV, H-LATER |
| 409 | `12-§7-8` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 410 | `12-§7-9` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 411 | `12-§7-10` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 412 | `12-§8-1` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 413 | `12-§8-2` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 414 | `12-§8-3` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 415 | `12-§8-5` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 416 | `12-§9-1` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 417 | `12-§9-2` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 418 | `12-§9-3` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 419 | `12-§11-1` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV, H-AUDIO |
| 420 | `12-§11-2` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 421 | `12-§11-3` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 422 | `12-§11-4` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 423 | `12-§11-5` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LATER |
| 424 | `12-§11-7` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-CONF |
| 425 | `12-§11-8` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 426 | `12-§11-9` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 427 | `12-§13-3` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 428 | `12-§14-1` | §8.7 | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 429 | `12-§14-2` | §8.7 | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 430 | `12-§14-3` | §8.7 | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 431 | `12-§14-4` | §8.7 | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 432 | `12-§15-1` | §8.7 | `EC13-SNS-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-FPDR4 |
| 433 | `12-§15-2` | §8.7 | `EC13-SNS-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-FPDR4 |
| 434 | `12-§15-3` | §8.7 | `EC13-SNS-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-FPDR4 |
| 435 | `12-§15-4` | §8.7 | `EC13-VOI-02`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-AUDIO, H-LATER |
| 436 | `12-§15-5` | §8.7 | `EC13-SNS-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 437 | `12-§16-1` | §8.7 | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 438 | `12-§16-2` | §8.7 | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 439 | `12-§16-3` | §8.7 | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 440 | `12-§16-4` | §8.7 | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 441 | `12-§16-5` | §8.7 | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-CONF |
| 442 | `12-§16-6` | §8.7 | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 443 | `12-§16-7` | §8.7 | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 444 | `12-§16-8` | §8.7 | `EC13-VOI-02`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-03` | WS-D, WS-G, Gate | FOLLOW-UP | H-PROV, H-AUDIO, H-LATER |
| 445 | `12-§17-1` | §8.7 | `EC13-VOI-03`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV, H-AUDIO |
| 446 | `12-§17-2` | §8.7 | `EC13-VOI-03`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV, H-AUDIO |
| 447 | `12-§17-3` | §8.7 | `EC13-VOI-03`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 448 | `12-§17-4` | §8.7 | `EC13-VOI-03`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 449 | `12-§17-5` | §8.7 | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 450 | `12-§17-6` | §8.7 | `EC13-VOI-02`, `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV, H-AUDIO |
| 451 | `12-§17-7` | §8.7 | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 452 | `12-§17-8` | §8.7 | `EC13-IDM-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-CONF |
| 453 | `12-§17-9` | §8.7 | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 454 | `12-§17-10` | §8.7 | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 455 | `12-§17-11` | §8.7 | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 456 | `12-§17-12` | §8.7 | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV, H-CONF |
| 457 | `12-§17-13` | §8.7 | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 458 | `12-§17-14` | §8.7 | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 459 | `12-§17-15` | §8.7 | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 460 | `12-§18-1` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 461 | `12-§18-2` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 462 | `12-§18-3` | §8.7 | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-CONF |
| 463 | `12-§20-1` | §8.7 | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 464 | `12-§20-2` | §8.7 | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 465 | `12-§20-3` | §8.7 | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 466 | `12-§20-4` | §8.7 | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 467 | `12-§20-5` | §8.7 | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 468 | `12-§20-6` | §8.7 | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 469 | `12-§21-1` | §8.7 | `EC13-CMD-02`, `EC13-CMD-03`, `EC13-VOI-07`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-02`, `EC13-HOLD-03` | WS-C, WS-D, WS-G, Gate | BLOCKED | H-D12, H-DTX, H-PROV, H-LATER, H-EVID |
| 470 | `12-§21-2` | §8.7 | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV, H-EVID |
| 471 | `12-§21-7` | §8.7 | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV, H-LANG, H-EVID |
| 472 | `12-§21-8` | §8.7 | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-EVID |
| 473 | `12-§21-9` | §8.7 | `EC13-CMD-02`, `EC13-IDM-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-DTX, H-PROV, H-CONF, H-EVID |
| 474 | `12-§21-10` | §8.7 | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV, H-CONF, H-EVID |
| 475 | `12-§21-12` | §8.7 | `EC13-SNS-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-FPDR4, H-EVID |
| 476 | `8-§3-1` | §8.8 | `EC13-FAQ-02` | WS-E | PASS | — |
| 477 | `8-§3-2` | §8.8 | `EC13-FAQ-02` | WS-E | PASS | — |
| 478 | `8-§3-3` | §8.8 | `EC13-FAQ-02` | WS-E | PASS | — |
| 479 | `8-§3-4` | §8.8 | `EC13-FAQ-02` | WS-E | PASS | — |
| 480 | `8-§3-5` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV |
| 481 | `8-§3-8` | §8.8 | `EC13-FAQ-02` | WS-E | PASS | — |
| 482 | `8-§4-1` | §8.8 | `EC13-FAQ-01` | WS-E | PASS | — |
| 483 | `8-§5-1` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 484 | `8-§5-2` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 485 | `8-§5-3` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 486 | `8-§6-1` | §8.8 | `EC13-FAQ-01` | WS-E | PASS | — |
| 487 | `8-§6-2` | §8.8 | `EC13-FAQ-01` | WS-E | PASS | — |
| 488 | `8-§6-3` | §8.8 | `EC13-FAQ-01` | WS-E | PASS | — |
| 489 | `8-§6-4` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 490 | `8-§6-5` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 491 | `8-§7-1` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV |
| 492 | `8-§7-2` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV |
| 493 | `8-§7-3` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV |
| 494 | `8-§7-6` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV |
| 495 | `8-§7-7` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 496 | `8-§7-8` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 497 | `8-§7-9` | §8.8 | `EC13-FAQ-03`, `EC13-HOLD-01` | WS-E, Gate | BLOCKED | H-D12 |
| 498 | `8-§7-10` | §8.8 | `EC13-FAQ-03`, `EC13-HOLD-01` | WS-E, Gate | BLOCKED | H-D12 |
| 499 | `8-§7-11` | §8.8 | `EC13-TEL-02` | WS-C | PASS | — |
| 500 | `8-§7-12` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 501 | `8-§11-1` | §8.8 | `EC13-FAQ-04` | WS-E | PASS | — |
| 502 | `8-§11-2` | §8.8 | `EC13-FAQ-04` | WS-E | PASS | — |
| 503 | `8-§11-4` | §8.8 | `EC13-FAQ-04` | WS-E | PASS | — |
| 504 | `8-§11-5` | §8.8 | `EC13-FAQ-04` | WS-E | PASS | — |
| 505 | `8-§12-1` | §8.8 | `EC13-FAQ-02` | WS-E | PASS | — |
| 506 | `8-§12-5` | §8.8 | `EC13-FAQ-01` | WS-E | PASS | — |
| 507 | `8-§13-1` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 508 | `8-§15-1` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 509 | `8-§15-2` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 510 | `8-§15-3` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 511 | `8-§15-4` | §8.8 | `EC13-FAQ-03`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV |
| 512 | `8-§15-6` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 513 | `8-§15-7` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 514 | `8-§15-10` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 515 | `8-§15-11` | §8.8 | `EC13-FAQ-03`, `EC13-HOLD-03` | WS-E, Gate | FOLLOW-UP | H-LATER |
| 516 | `8-§16-1` | §8.8 | `EC13-FAQ-02` | WS-E | PASS | H-EVID |
| 517 | `8-§16-2` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV, H-LANG, H-EVID |
| 518 | `8-§16-3` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV, H-EVID |
| 519 | `8-§16-4` | §8.8 | `EC13-FAQ-02` | WS-E | PASS | H-EVID |
| 520 | `8-§16-5` | §8.8 | `EC13-FAQ-02`, `EC13-PRV-01` | WS-E, WS-G | FOLLOW-UP | H-PROV, H-EVID |
| 521 | `8-§16-9` | §8.8 | `EC13-FAQ-04` | WS-E | PASS | H-EVID |
| 522 | `8-§17-2` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 523 | `8-§17-3` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 524 | `8-§17-4` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 525 | `8-§17-6` | §8.8 | `EC13-FAQ-03` | WS-E | PASS | — |
| 526 | `22-§4-2` | §8.1 | `EC13-WSP-03` | WS-A | PASS | — |
| 527 | `22-§7-1` | §8.3 | `EC13-ARC-01`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 528 | `22-§7-2` | §8.3 | `EC13-WSP-03`, `EC13-HOLD-01` | WS-A, Gate | BLOCKED | H-D12 |
| 529 | `22-§7-3` | §8.3 | `EC13-WSP-03`, `EC13-HOLD-01` | WS-A, Gate | BLOCKED | H-D12 |
| 530 | `22-§7-4` | §8.3 | `EC13-ARC-01`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 531 | `22-§7-5` | §8.3 | `EC13-WSP-03`, `EC13-HOLD-01` | WS-A, Gate | BLOCKED | H-D12, H-CONF |
| 532 | `22-§7-6` | §8.3 | `EC13-WSP-03`, `EC13-HOLD-01` | WS-A, Gate | BLOCKED | H-D12 |
| 533 | `22-§7-7` | §8.3 | `EC13-ARC-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-C, Gate | BLOCKED | H-D12, H-LATER |
| 534 | `22-§7-8` | §8.3 | `EC13-WSP-03`, `EC13-HOLD-01` | WS-A, Gate | BLOCKED | H-D12, H-CONF |
| 535 | `22-§7-9` | §8.3 | `EC13-ARC-01` | WS-C | PASS | — |
| 536 | `22-§7-10` | §8.3 | `EC13-ARC-01`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 537 | `22-§8-1` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 538 | `22-§8-2` | §8.2 | `EC13-LANG-01` | WS-B | PASS | H-LANG |
| 539 | `22-§8-3` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 540 | `22-§8-4` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 541 | `22-§8-5` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 542 | `22-§8-6` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 543 | `22-§8-7` | §8.2 | `EC13-LANG-01`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 544 | `22-§17` | §8.3 | `EC13-ARC-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 545 | `22-§19-1` | §8.10 | `EC13-FAIL-02`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 546 | `22-§19-2` | §8.10 | `EC13-FAIL-02`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV, H-CONF |
| 547 | `22-§19-3` | §8.10 | `EC13-FAIL-02`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 548 | `22-§19-4` | §8.10 | `EC13-FAIL-02`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 549 | `22-§19-5` | §8.10 | `EC13-FAIL-02`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 550 | `22-§19-6` | §8.10 | `EC13-FAIL-02`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 551 | `22-§19-7` | §8.10 | `EC13-FAIL-02`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 552 | `22-§21` | §8.11 | `EC13-WSP-06`, `EC13-PRV-01` | WS-A, WS-G | FOLLOW-UP | H-PROV, H-CONF |
| 553 | `22-§22-1` | §8.11 | `EC13-VER-01` | Cross-cutting | PASS | — |
| 554 | `22-§22-2` | §8.11 | `EC13-VER-01`, `EC13-HOLD-01` | Cross-cutting, Gate | BLOCKED | H-D12 |
| 555 | `22-§22-3` | §8.11 | `EC13-VER-01` | Cross-cutting | PASS | — |
| 556 | `22-§22-4` | §8.11 | `EC13-VER-01` | Cross-cutting | PASS | — |
| 557 | `22-§22-5` | §8.11 | `EC13-VER-01` | Cross-cutting | PASS | — |
| 558 | `22-§22-6` | §8.11 | `EC13-VER-01` | Cross-cutting | PASS | — |
| 559 | `22-§23-2` | §8.4 | `EC13-AUTH-04`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 560 | `22-§23-3` | §8.4 | `EC13-AUTH-04`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 561 | `22-§23-5` | §8.4 | `EC13-AUTH-04`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 562 | `22-§23-7` | §8.4 | `EC13-AUTH-04`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 563 | `22-§24-1` | §8.3 | `EC13-ARC-03`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LATER |
| 564 | `22-§24-2` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 565 | `22-§24-3` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 566 | `22-§27-1` | §8.11 | `EC13-DOC-01` | Cross-cutting | PASS | — |
| 567 | `22-§27-2` | §8.11 | `EC13-DOC-01` | Cross-cutting | PASS | — |
| 568 | `22-§27-3` | §8.11 | `EC13-DOC-01` | Cross-cutting | PASS | — |
| 569 | `22-§27-4` | §8.11 | `EC13-DOC-01` | Cross-cutting | PASS | H-CONF |
| 570 | `22-§27-5` | §8.11 | `EC13-DOC-01` | Cross-cutting | PASS | — |
| 571 | `22-§27-6` | §8.11 | `EC13-DOC-01` | Cross-cutting | PASS | — |
| 572 | `22-§27-7` | §8.11 | `EC13-DOC-01` | Cross-cutting | PASS | — |
| 573 | `22-§28-1` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | H-CONF |
| 574 | `22-§28-2` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | H-CONF |
| 575 | `22-§28-3` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | H-CONF |
| 576 | `22-§28-4` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | H-CONF |
| 577 | `22-§28-5` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | H-CONF |
| 578 | `22-§28-6` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | H-CONF |
| 579 | `22-§28-7` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 580 | `22-§28-8` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 581 | `22-§28-9` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 582 | `22-§28-10` | §8.12 | `EC13-NG-01` | Cross-cutting | PASS | — |
| 583 | `22-§29-1` | §8.3 | `EC13-ARC-02`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-C, Gate | BLOCKED | H-D12, H-LATER, H-EVID |
| 584 | `22-§29-2` | §8.3 | `EC13-ARC-02`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LATER, H-EVID |
| 585 | `22-§29-3` | §8.4 | `EC13-AUTH-04`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-EVID |
| 586 | `22-§29-7` | §8.5 | `EC13-CNF-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF, H-EVID |
| 587 | `22-§29-8` | §8.5 | `EC13-CMD-02`, `EC13-IDM-01`, `EC13-HOLD-01`, `EC13-HOLD-02` | WS-C, Gate | BLOCKED | H-D12, H-DTX, H-CONF, H-EVID |
| 588 | `22-§29-10` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01`, `EC13-PRV-02` | WS-G | FOLLOW-UP | H-PROV, H-EVID |
| 589 | `22-§29-12` | §8.6 | `EC13-AUD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-EVID |
| 590 | `22-§29-13` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-G, Gate | BLOCKED | H-D12, H-PROV, H-EVID |
| 591 | `22-§29-14` | §8.11 | `EC13-DOC-01` | Cross-cutting | PASS | H-EVID |
| 592 | `17-§5-1` | §8.1 | `EC13-WSP-01` | WS-A | PASS | — |
| 593 | `17-§5-2` | §8.1 | `EC13-WSP-01` | WS-A | PASS | — |
| 594 | `17-§5-3` | §8.1 | `EC13-WSP-03`, `EC13-HOLD-01` | WS-A, Gate | BLOCKED | H-D12 |
| 595 | `17-§5-4` | §8.1 | `EC13-ARC-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-C, Gate | BLOCKED | H-D12, H-LATER |
| 596 | `17-§5-5` | §8.1 | `EC13-WSP-03`, `EC13-HOLD-01` | WS-A, Gate | BLOCKED | H-D12 |
| 597 | `17-§5-6` | §8.1 | `EC13-WSP-03`, `EC13-PRV-01` | WS-A, WS-G | FOLLOW-UP | H-PROV |
| 598 | `17-§5-7` | §8.5 | `EC13-CMD-01`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | WS-C, Gate | BLOCKED | H-D12, H-DTX |
| 599 | `17-§5-8` | §8.1 | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-A, Gate | BLOCKED | H-D12, H-LATER |
| 600 | `17-§22-4` | §8.1 | `EC13-WSP-04`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-A, Gate | BLOCKED | H-D12, H-LATER, H-EVID |
| 601 | `17-§22-8` | §8.1 | `EC13-WSP-01` | WS-A | PASS | H-EVID |
| 602 | `20-§14-1` | §8.2 | `EC13-LANG-02`, `EC13-PRV-01`, `EC13-HOLD-03` | WS-B, WS-G, Gate | FOLLOW-UP | H-PROV, H-LANG, H-LATER |
| 603 | `20-§14-2` | §8.2 | `EC13-LANG-02`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 604 | `20-§14-3` | §8.2 | `EC13-LANG-02`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 605 | `20-§14-4` | §8.2 | `EC13-LANG-02`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG |
| 606 | `20-§15-3` | §8.1 | `EC13-WSP-01` | WS-A | PASS | — |
| 607 | `7-§11-2` | §8.4 | `EC13-AUTH-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-C, Gate | BLOCKED | H-D12, H-CONF, H-LATER |
| 608 | `BP-§5.4-1` | §8.7 | `EC13-VOI-10`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 609 | `BP-§6.2-1` | §8.5 | `EC13-CMD-01`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | WS-C, Gate | BLOCKED | H-D12, H-DTX, H-CONF |
| 610 | `BP-§6.2-2` | §8.5 | `EC13-CMD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 611 | `BP-§6.4-1` | §8.3 | `EC13-ARC-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-C, Gate | BLOCKED | H-D12, H-LATER |
| 612 | `BP-§6.4-2` | §8.3 | `EC13-ARC-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 613 | `BP-§6.4-3` | §8.3 | `EC13-ARC-01`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 614 | `BP-§6.4-4` | §8.3 | `EC13-ARC-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 615 | `BP-§6.4-5` | §8.3 | `EC13-ARC-01`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 616 | `BP-§6.4-6` | §8.3 | `EC13-ARC-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 617 | `BP-§6.4-7` | §8.3 | `EC13-ARC-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 618 | `BP-§6.4-8` | §8.3 | `EC13-ARC-01`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | WS-C, Gate | BLOCKED | H-D12, H-DTX |
| 619 | `BP-§6.4-9` | §8.3 | `EC13-ARC-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-LATER |
| 620 | `BP-§6.4-10` | §8.3 | `EC13-ARC-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 621 | `BP-§6.6-1` | §8.3 | `EC13-ARC-01` | WS-C | PASS | — |
| 622 | `BP-§8.3-1` | §8.1 | `EC13-WSP-01` | WS-A | PASS | — |
| 623 | `BP-§8.4-1` | §8.3 | `EC13-ARC-02` | WS-C | PASS | — |
| 624 | `BP-§8.4-2` | §8.10 | `EC13-FAIL-03`, `EC13-HOLD-01` | WS-G, Gate | BLOCKED | H-D12 |
| 625 | `BP-§8.4-3` | §8.3 | `EC13-ARC-02` | WS-C | PASS | — |
| 626 | `BP-§10.2-W1` | §8.1 | `EC13-WSP-01`, `EC13-HOLD-01` | WS-A, Gate | BLOCKED | H-D12 |
| 627 | `BP-§10.2-W2` | §8.2 | `EC13-LANG-01` | WS-B | PASS | H-LANG |
| 628 | `BP-§10.2-W3` | §8.1 | `EC13-WSP-05`, `EC13-HOLD-01` | WS-A, Gate | BLOCKED | H-D12 |
| 629 | `BP-§10.2-W4` | §8.7 | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | WS-D, WS-G, Gate | BLOCKED | H-D12, H-PROV |
| 630 | `BP-§10.2-W5` | §8.3 | `EC13-GW-01`, `EC13-PRV-01` | WS-C, WS-G | FOLLOW-UP | H-PROV |
| 631 | `BP-§10.2-W6` | §8.5 | `EC13-TOOL-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 632 | `BP-§10.2-W7` | §8.4 | `EC13-AUTH-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 633 | `BP-§10.2-W8` | §8.5 | `EC13-CNF-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-CONF |
| 634 | `BP-§10.2-W9` | §8.5 | `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | WS-C, Gate | BLOCKED | H-D12, H-DTX |
| 635 | `BP-§10.2-W10` | §8.6 | `EC13-AUD-01`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12 |
| 636 | `BP-§10.2-W11` | §8.9 | `EC13-ATT-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | WS-F, Gate | BLOCKED | H-D12, H-LATER |
| 637 | `BP-§10.2-W12` | §8.8 | `EC13-FAQ-01` | WS-E | PASS | — |
| 638 | `BP-§10.2-W13` | §8.10 | `EC13-FAIL-01`, `EC13-PRV-01` | WS-G | FOLLOW-UP | H-PROV |
| 639 | `BP-§10.2-I1` | §8.7 | `EC13-VOI-10`, `EC13-PRV-01`, `EC13-PRV-02` | WS-D, WS-G | FOLLOW-UP | H-PROV |
| 640 | `BP-§10.2-E1` | §8.1 | `EC13-WSP-01`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-A, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-EVID |
| 641 | `BP-§10.2-E2` | §8.2 | `EC13-LANG-03`, `EC13-PRV-01` | WS-B, WS-G | FOLLOW-UP | H-PROV, H-LANG, H-EVID |
| 642 | `BP-§10.2-E3` | §8.4 | `EC13-AUTH-02`, `EC13-HOLD-01` | WS-C, Gate | BLOCKED | H-D12, H-EVID |
| 643 | `BP-§10.2-E4` | §8.1 | `EC13-WSP-01` | WS-A | PASS | H-EVID |
| 644 | `BP-§10.2-E5` | §8.10 | `EC13-FAIL-03`, `EC13-HOLD-01` | WS-G, Gate | BLOCKED | H-D12, H-EVID |
| 645 | `BP-§10.2-SA1` | §8.5 | `EC13-CMD-02`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-02` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-DTX, H-PROV, H-CONF, H-EVID |
| 646 | `BP-§10.2-SA2` | §8.4 | `EC13-AUTH-03`, `EC13-PRV-01`, `EC13-HOLD-01` | WS-C, WS-G, Gate | BLOCKED | H-D12, H-PROV, H-EVID |
| 647 | `BP-§10.2-SB` | §8.10 | `EC13-FAIL-03`, `EC13-HOLD-01` | WS-G, Gate | BLOCKED | H-D12, H-EVID |
| 648 | `BP-§11-1` | §8.3 | `EC13-ARC-01` | WS-C | PASS | — |
| 649 | `BP-§12-1` | §8.8 | `EC13-FAQ-01` | WS-E | PASS | — |
| 650 | `BP-§12-3` | §8.8 | `EC13-FAQ-01` | WS-E | PASS | — |
| 651 | `BP-§13-1` | §8.11 | `EC13-VER-02` | Cross-cutting | PASS | — |

## 12. Coverage and Orphan Check

| Measure | Value |
|---|---|
| `IN SCOPE` FCTM rows | 651 |
| Rows mapped to at least one obligation | 651 of 651 |
| Rows missing an obligation | 0 |
| Obligations (one per locked EIS requirement) | 72 |
| Row-to-obligation links | 1486 |
| Obligations with no FCTM row | 2: `EC13-MIG-01`, `EC13-MIG-02` (non-product reasons recorded in the EIS) |
| Behaviour-adding orphan obligations | 0 |
| Cross-cutting rules (Section 8) and process obligations (Section 9) | 12 and 7; non-behavioural |
| Rows with Stage 7 finding `BLOCKED` (`D12`) | 252 |
| Rows `FOLLOW-UP` | 271 |
| Rows `PASS` | 128 |
| Rows carrying `DTX` | 17 |
| `ALREADY DEMONSTRATED` rows | 0 in the FCTM |
| FCTM, Blueprint, EIS and Founder decisions | Unchanged |

Method: the row set of Section 11 was compared by set difference with the FCTM `IN SCOPE` row set and with EIS Section 29.2; all three are identical. Each obligation's row list equals the EIS requirement-to-row mapping.

## 13. Package Observations

Observations raised at Stage 12 for Mission Control. None changes a row, requirement or hold.

| ID | Topic | Observation |
|---|---|---|
| PQ-1 | Workstream register | The Stage 1 draft register (WS-A to WS-G) is used unchanged. Each obligation has one workstream; `Cross-cutting` obligations apply to every builder workstream; `Gate` obligations (`EC13-HOLD-01` to `-03`) are Mission Control gates, not builder work. Mission Control fixes the register at Stage 13. |
| PQ-2 | Transactions-family cut-over ownership | `EC13-CMD-02` sits in WS-C, but EIS Section 13 delivers it only inside the SB-P-1.12 WS-A3 transactions-family package under a separate migration mission. The Implementation Authorization must name how the two missions' builders and the migration mission coordinate. |
| PQ-3 | Phase labels | Phase values P0 to P5 are the Blueprint Section 20.4.1 ordering. They order work and authorize none of it. |
| PQ-4 | Experience and negative-path classification | The rules are stated in Verification Checklist Section 13.1. They are mechanical and may classify more rows than strictly necessary; no row is classified less strictly than Source 18 requires. |
| PQ-5 | Builder identity | Not named. The Implementation Authorization names a builder per workstream; if a builder other than Lovable is named, the Build Prompt carries that builder's byline (Source 18 Section 4.5). |
| PQ-6 | Row counts inflated by gate selectors | `EC13-PRV-01` selects all 367 `DAI`/`DV` rows and `EC13-PRV-02` all 122 `DV` rows (EIS Section 29.1 rule), so WS-G lists far more rows than it builds features for. For those rows WS-G builds only the provider gate and kill switch; the feature behaviour is built by the row's other workstreams. The same applies to the `Gate` group (`D12`, `DTX`, later-mission selectors). |
| PQ-7 | Scenario RS-20 | `22-§29-14` is a documentary acceptance scenario with no runtime surface. RS-20 is a named documentary verification scenario (`DOC`), not a runtime claim. |

## 14. Status

`DRAFT — MISSION CONTROL REVIEW REQUIRED`. Not approved, not locked and not an implementation authorization. `D12`, `DTX`, provider, transient-audio, `FPDR-4`, later-mission and runtime-evidence holds remain open; every EIS Section 28 fact remains `UNVERIFIED — ACCESS REQUIRED`.

## 15. Change Log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-10-07 | Claude Code (MC-19) | Initial Stage 12 draft |
