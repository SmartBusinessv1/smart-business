# SB-P-1.12 — Engineering Contract

```text
STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED
PRODUCT BLUEPRINT: APPROVED — LOCKED (UNCHANGED)
EIS: APPROVED — LOCKED (UNCHANGED)
IMPLEMENTATION PACKAGE: STAGE 12 DRAFT — NOT APPROVED, NOT LOCKED
IMPLEMENTATION: NOT AUTHORIZED
SCHEMA / SQL / MIGRATIONS: NOT AUTHORIZED
PRODUCTION / PROVIDER MUTATION: NOT AUTHORIZED
```

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.12 |
| Mission Name | Authority, Identity & Product Surface Foundation |
| Document | Engineering Contract (Source 18 Stage 12; package template Phase A) |
| Package set | `engineering-contract.md`, `lovable-build-prompt.md`, `verification-checklist.md`, authored and reviewed as one set |
| Version | 0.2 |
| Status | `DRAFT — MISSION CONTROL REVIEW REQUIRED` |
| Author | Claude Code — Source 18 Section 4.4 initial implementation package owner |
| Authorizing record | MC-165 (`mission-control/37-stage11-eis-lock-and-stage12-package-authorization.md`); instruction `communication/live/instruction1.30.md`; work package `SB-P-1.12-WP-STAGE12-INITIAL-IMPLEMENTATION-PACKAGE` |
| Canonical baseline | `main@7d95143ef52f1ca1f72bbc4a76442f02a990d0c5` (PR #701 merge, MC-167); created at `main@0b69f50f`, published at `main@e6c6aac5` |
| Date | 2026-10-01 |
| Next gate | Stage 13 — Implementation Package Review by Mission Control |

## 2. Purpose and Authority

This contract translates the locked Product Blueprint and the locked EIS into builder-facing engineering obligations for SB-P-1.12. It adds no Product Truth. Requirement text lives in the source contracts; the EIS fixes the engineering mechanisms; this contract states what must be built, in which workstream, under which hold and against which verification items.

Order of authority (package template Section 4): Lighthouse Constitution; Master System Manifesto; locked Product Blueprint (with the Founder Product Decision Records it applies, including Founder Decision Record 09); locked EIS; approved architecture and security frameworks; this Engineering Contract once locked; the Build Prompt once locked; the Verification Checklist once locked; explicit Mission Control implementation and correction authorizations; builder interpretation. If any statement here could be read as new behaviour, the higher source prevails and this contract is in error.

**Package approval is not implementation authorization.** This draft authorizes nothing. It creates no code, schema, SQL, migration, provider setting or production change, and it changes no FCTM disposition, build commitment, commercial classification or mission assignment.

## 3. Locked References

| Reference | Path | Identity |
|---|---|---|
| Locked Product Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.12.md` | blob `77d52096c020668311b039721a4de9248ddd460e` (`APPROVED — LOCKED`) |
| Locked EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` | blob `c444f7509477d0e8b997af538440d93bf2ca4d72` (`APPROVED — LOCKED`, version 0.4 with MC-166 lock-metadata reconciliation 0.4-L1 and MC-167 formatting reconciliation 0.4-L2) |
| Canonical FCTM | `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md` | blob `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` (412 rows; 267 `IN SCOPE`) |
| Founder Decision Record 09 | `communication/missions/SB-P-1.12/founder/09-reference-cost-margin-permission-semantics.md` | blob `84d61d4d62cc33ae81ec372ac725059665ebc9d9` |
| Stage 10 acceptance (MC-164) | `communication/missions/SB-P-1.12/mission-control/36-stage10-eis-review-acceptance.md` | canonical on `main@7d95143e` |
| Stage 11 lock and Stage 12 authorization (MC-165) | `communication/missions/SB-P-1.12/mission-control/37-stage11-eis-lock-and-stage12-package-authorization.md` | canonical on `main@7d95143e` |
| Lock-metadata reconciliation and Stage 12 Git authorization (MC-166) | `communication/missions/SB-P-1.12/mission-control/38-stage11-lock-metadata-reconciliation-and-stage12-git-authorization.md` | canonical on `main@7d95143e` (PR #699) |
| Stage 13 review and refinement authorization (MC-167) | `communication/missions/SB-P-1.12/mission-control/39-stage13-package-review-and-refinement-authorization.md` | canonical on `main@7d95143e` (PR #701) |
| Stage 12 and 13 instructions | `communication/live/instruction1.30.md` (MC-165); `communication/live/instruction1.31.md` (MC-166 publication); `communication/live/instruction1.32.md` (MC-167 refinement) | canonical on `main@7d95143e` |
| Source 18 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | Stage 12 and Section 3.2 |
| Package template | `docs/implementation/templates/SB-P-Implementation-and-Evidence-Workflow-Template.md` | Phases A to C |

## 4. Preserved Holds and Gates

| Hold or gate | Status carried by this package | Effect on the package |
|---|---|---|
| R-2 source coverage | CLOSED / SATISFIED (MC-141, MC-142) | None; the 39 `22-§33-*` rows are mapped |
| ESC-1 | **OPEN T8** | Not closed or weakened. WS-F realizes the EIS safe-design direction only under a future Implementation Authorization; the hold stays until Mission Control disposes it |
| `22-§20-2` | **BLOCKED / IN SCOPE** | Mapped to obligations and checklist items; never treated as out of scope or unblocked. `EC-ESC-07` lists the evidence before unblocking may be proposed |
| G-6/T4 production state | **UNVERIFIED** | No production-security conclusion is drawn from repository files. WS-B relies only on separately authorized evidence (`EC-ENV-01`) |
| G-7 environment and provider topology | Evidence gate | Storage, provider Auth-deletion and backup facts need separately authorized evidence before reliance |
| Professional legal, privacy and retention validation | **Deferred** (Founder Record 06, MC-117) | No retention period, policy text or legal finality is created; rules stay data |
| Founder Decision Record 09 | APPROVED Product Truth | Reference Cost and margin semantics are applied exactly; no margin formula or margin output semantics are selected |
| Identity-deletion runtime | Not authorized (EIS Section 15) | An execution gate, not a scope deferral. `EC-DEL-*` and `EC-LEG-*` keep their build, verification or evidence obligations (MC-167 PQ-3); their rows stay `IN SCOPE` and `BUILD NOW`; execution waits for a separate runtime authorization |
| Security design findings SEC-EIS10-01 to SEC-EIS10-11 | Closed at design level (MC-164) | Realized through the obligations that implement the EIS sections named in EIS Section 20 |
| Security implementation and evidence gates SEC-EIS10-12 to SEC-EIS10-14 | Open as implementation and evidence gates | Carried as verification items: projection on every read path (12); live effective-access evidence (13); provider, backup, PITR and legal-hold evidence (14) |
| Implementation and runtime Security proof | Not yet established | Nothing in this package is runtime, implementation or production evidence |

## 5. Authorized Scope and Exclusions

### 5.1 In scope

All 267 `IN SCOPE` FCTM rows. Each maps to at least one obligation in Section 11. No row is omitted, deferred, narrowed or reclassified. Rows whose realization is blocked, conditional, evidence-gated or runtime-gated stay `IN SCOPE` and carry the reason.

### 5.2 Not authorized by this package

- application implementation or any code change;
- creating, editing or executing schema, SQL or migrations;
- Lovable implementation execution or publication;
- provider, environment or production mutation, and production deployment;
- identity-deletion runtime;
- unblocking `22-§20-2` or closing ESC-1;
- claiming G-6/T4 evidence or any production-security conclusion;
- SB-P-1.13 consumption of any surface before the EIS Section 19.5 conditions hold and Mission Control accepts the evidence;
- modifying the locked Blueprint, the locked EIS or the canonical FCTM.

### 5.3 Still committed, not in this mission

These FCTM rows stay `BUILD NOW` at their receiving mission or keep their preserved disposition. They are listed by row in Blueprint Section 11 and the FCTM; this contract does not restate them and builds none of them.

| Disposition | Receiving mission or reason | FCTM rows |
|---|---|---|
| `ASSIGNED TO LATER MISSION` | `SB-P-1.13` (including shared assignments with `SB-P-1.20`) | 11 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.14` | 5 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.15` | 14 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.17` (including shared assignments with `SB-P-1.13` and `SB-P-1.14`) | 42 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.18` (including the attendance and delivery instance) | 9 |
| `ASSIGNED TO LATER MISSION` | `SB-P-1.19` (including shared assignments with `SB-P-1.13` and `SB-P-1.15`) | 32 |
| `DELEGATED` | `22-§25` to `SB-P-1.13`; `22-§26` to `SB-P-1.20` | 2 |
| `NOT APPLICABLE` | Narrative, historical, provenance, cross-reference or synthesis sections (FCTM citations) | 30 |
| **Total not `IN SCOPE`** | | **145** |

## 6. Obligation Types

Each obligation `EC-<suffix>` realizes exactly one EIS requirement `EIS-<suffix>` as the locked EIS specifies it, in the EIS section named. It carries one type.

| Type | Meaning |
|---|---|
| `BUILD` | Implement exactly as the locked EIS specifies, under a future Implementation Authorization. |
| `BUILD-HARNESS` | Implement the authority boundary here. Where the consuming surface belongs to a later mission, prove the boundary with a clearly labelled harness (Blueprint Section 15, DC-3). Do not build the later mission's feature. |
| `BUILD-EVIDENCE-GATED` | Implement only after the named separately authorized evidence exists (G-6 or G-7). Repository files never substitute for that evidence. |
| `BUILD — RUNTIME / AUTHORIZATION GATED` | A `BUILD NOW` implementation obligation. Execution waits for a separate identity-deletion runtime authorization and, for schema, a migration mission. The gate is an execution gate, not a scope deferral; the row stays `IN SCOPE`. |
| `VERIFICATION — RUNTIME GATED` | A verification obligation whose tests run once the identity-deletion runtime is authorized, with labelled fixtures. The row stays `IN SCOPE`. |
| `BUILD — LEGAL / RUNTIME GATED` | A `BUILD NOW` implementation obligation whose rule entries stay provisional data until professional legal, privacy and retention validation exists, and whose runtime use waits for the runtime authorization. No period, category or legal conclusion is coded. |
| `BUILD — AUTHORIZATION GATED` | A `BUILD NOW` implementation obligation that starts only under an Implementation Authorization and, for schema, a migration mission. It is built as neutral technical state only. |
| `EVIDENCE-ONLY / PROVIDER-LEGAL GATED` | An evidence obligation: provider facts and the legal rule must both exist before any behaviour is assumed. It adds no behaviour. |
| `MIGRATION-DESIGN` | Fixes migration order and reconciliation. Writing or executing any migration needs an explicit migration mission under `docs/migration/README.md`. |
| `EVIDENCE` | An evidence obligation. It adds no product behaviour. It is satisfied only by the named evidence, collected under separate authorization where required. |
| `GOVERNANCE` | Applies to every builder workstream. It constrains how behaviour is built and adds no product behaviour of its own. |
| `CONSUMER GATE` | Cross-cutting Governance / Consumer Gate. **Not an implementation builder workstream obligation**: no builder builds anything for it. Mission Control enforces it through dependency evidence before a later mission consumes an authority surface. |

## 7. Engineering Obligations

Verification references point to the Verification Checklist: named negative-path checks `NP-*`, named runtime scenarios `RS-*` and the per-row items `VC-R-*`. Row lists are the EIS requirement-to-row mapping, unchanged.

### 7.1 Identity and Membership (database and backend)

Persons and memberships are the authority source. `businesses.owner_id` becomes a mirror maintained only by the create-business and transfer commands. Backfill is idempotent and ownership-preserving, and every step reconciles row counts. The `UNIQUE` constraint on `owner_id` is dropped only after no path infers the business from single ownership.

| Obligation | Realizes | Title | Type | Workstream | Migration class | EIS section | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC-ID-01` | `EIS-ID-01` | `persons` application identity and governed Auth binding | `BUILD` | WS-A1 | M1, M2 | 7.1, 7.4 | NP-06, NP-07, NP-08, NP-09, NP-36, RS-03 | `21-§5-1`, `22-§5-2`, `22-§5-3`, `22-§5-4`, `22-§33-2`, `22-§33-23`, `BP-§10.1-2` |
| `EC-ID-02` | `EIS-ID-02` | `business_memberships` and the single active Owner invariant | `BUILD` | WS-A1 | M1, M2 | 7.2, 7.4 | NP-36, RS-01, RS-03, RS-07, RS-08, RS-09 | `21-§4-1`, `21-§4-2`, `21-§4-3`, `21-§5-2`, `21-§5-3`, `22-§5-1`, `22-§5-2`, `22-§5-3`, `22-§5-4`, `20-§16-1`, `17-§13-1`, `17-§13-2`, `17-§13-3`, `7-§10-1`, `7-§10-2`, `7-§10-3`, `BP-§10.1-1`, `BP-§10.1-2` |
| `EC-ID-03` | `EIS-ID-03` | Business-scoped participant identities and governed principal binding | `BUILD-HARNESS` | WS-A1 | M1 | 7.2, 7.4 | NP-23, RS-14 | `21-§4-4`, `21-§4-5`, `21-§4-6`, `22-§5-5`, `22-§5-6`, `22-§5-7`, `22-§28-6`, `22-§29-6`, `17-§13-4`, `7-§10-4` |
| `EC-ID-04` | `EIS-ID-04` | Owner-membership backfill and non-authoritative `owner_id` mirror | `BUILD` | WS-A1 | M2, M6 | 7.2, 7.4, 14.4 | NP-09, NP-36, NP-37, NP-46, RS-07, RS-08, RS-09, RS-13 | `21-§4-1`, `22-§5-2`, `20-§16-1`, `BP-§10.1-13` |
| `EC-ID-05` | `EIS-ID-05` | Product and external-reference identity with composite keys | `BUILD` | WS-A1 | M1 | 7.4 | NP-03 | `21-§6-6`, `22-§5-8`, `22-§5-9` |
| `EC-ID-06` | `EIS-ID-06` | Explicit requested active-business context on every path | `BUILD` | WS-A1 | M3 | 7.4 | NP-06, RS-03 | `21-§6-7`, `21-§15-1`, `21-§15-3`, `BP-§10.1-6` |

### 7.2 Permission Kernel, Delegation, Support and Participants (permission)

One kernel decides. No feature, channel, job or later mission adds a parallel check. The principal is never a parameter. Role, capability, entitlement, support and automation state are read from the database at every execution. Kernel errors deny.

| Obligation | Realizes | Title | Type | Workstream | Migration class | EIS section | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC-KER-01` | `EIS-KER-01` | Single kernel decision function `authz.authorize` | `BUILD` | WS-A2 | M1, M3 | 8.1, 8.3 | NP-43, RS-01, RS-03, RS-04 | `21-§5-1`, `21-§5-2`, `21-§5-3`, `21-§5-4`, `21-§5-5`, `21-§5-6`, `21-§5-7`, `21-§5-8`, `21-§5-9`, `21-§5-10`, `21-§7`, `21-§22`, `22-§6-10`, `22-§28-2`, `17-§14-2`, `17-§14-3`, `17-§14-4`, `17-§14-5`, `17-§14-6`, `7-§12`, `BP-§10.1-3` |
| `EC-KER-02` | `EIS-KER-02` | Verified-principal model (four principal types) | `BUILD` | WS-A2 | M1, M3 | 8.1, 8.3 | NP-07, NP-08, RS-03 | `21-§8`, `21-§15-1`, `21-§15-2`, `21-§15-3`, `21-§15-4`, `21-§15-5`, `21-§23-5`, `22-§28-9` |
| `EC-KER-03` | `EIS-KER-03` | Versioned capability registry and role-default matrix | `BUILD` | WS-A2 | M1 | 8.3 | NP-09, RS-01, RS-04, RS-07, RS-09, RS-10, RS-11 | `21-§4-2`, `21-§4-3`, `21-§23-2`, `21-§23-3`, `20-§16-3`, `20-§23-11`, `17-§13-2`, `17-§13-3`, `17-§18-2`, `17-§21-4`, `BP-§10.1-3` |
| `EC-KER-04` | `EIS-KER-04` | Explicit delegated capability grants | `BUILD` | WS-A2 | M1 | 8.3 | NP-09, RS-01, RS-04, RS-09 | `21-§4-2`, `21-§5-4`, `20-§16-2`, `BP-§10.1-4` |
| `EC-KER-05` | `EIS-KER-05` | Entitlement primitive as a kernel input | `BUILD` | WS-A2 | M1 | 8.3 | NP-11, NP-41 | `21-§5-7`, `21-§5-10`, `21-§16-1`, `21-§16-2`, `21-§23-6`, `21-§24-9`, `22-§20-3`, `22-§28-8`, `BP-§10.1-10` |
| `EC-KER-06` | `EIS-KER-06` | Channel and context as an enumerated kernel input | `BUILD-HARNESS` | WS-A2 | M1 | 8.3 | NP-12, RS-11 | `21-§5-8`, `21-§8`, `21-§9`, `21-§24-6`, `22-§6-2`, `22-§6-3`, `22-§6-9`, `22-§29-3` |
| `EC-KER-07` | `EIS-KER-07` | Owner-intelligence capabilities, never inferred | `BUILD-HARNESS` | WS-A2 | M1 | 8.3 | NP-13, RS-04, RS-10, RS-11 | `21-§9`, `21-§10-6`, `21-§24-6`, `17-§18-2`, `17-§18-4`, `17-§21-4` |
| `EC-KER-08` | `EIS-KER-08` | Action type and object scope as kernel inputs | `BUILD` | WS-A2 | M1 | 8.3 | NP-10, RS-10 | `21-§5-5`, `21-§5-6`, `21-§11-2`, `21-§24-4` |
| `EC-KER-09` | `EIS-KER-09` | Revocation semantics under the serialization protocol | `BUILD` | WS-A2 | M1 | 8.3, 10.2 | NP-16, NP-38, RS-02, RS-05 | `21-§12-5`, `21-§17`, `21-§24-8`, `BP-§10.1-5` |
| `EC-AUT-01` | `EIS-AUT-01` | Delegated automation rules re-evaluated on every run | `BUILD-HARNESS` | WS-A2 | M1 | 7.3, 7.4 | NP-21, RS-01 | `21-§12-1`, `21-§12-2`, `21-§12-3`, `21-§12-4`, `21-§12-5`, `21-§19-8`, `21-§24-11`, `22-§6-6`, `22-§28-4`, `BP-§10.1-4` |
| `EC-SUP-01` | `EIS-SUP-01` | Temporary, consented, audited support access grants | `BUILD-HARNESS` | WS-A2 | M1 | 7.3, 7.4 | NP-22, RS-15 | `21-§14-1`, `21-§14-2`, `21-§14-3`, `21-§14-4`, `21-§14-5`, `21-§14-6`, `21-§14-7`, `21-§15-5`, `21-§19-7`, `21-§21-3`, `21-§23-4`, `21-§24-10`, `22-§23-3`, `22-§23-4` |
| `EC-EXT-01` | `EIS-EXT-01` | Employee self-service own-record predicates | `BUILD-HARNESS` | WS-A2 | M1 | 7.4 | NP-24, RS-10 | `21-§10-1`, `21-§10-2`, `21-§10-3`, `21-§10-4`, `21-§10-5`, `21-§10-6`, `21-§23-3`, `21-§24-5`, `17-§22-3` |
| `EC-EXT-02` | `EIS-EXT-02` | External participant object-scoped capabilities | `BUILD-HARNESS` | WS-A2 | M1 | 7.4 | NP-23, RS-14 | `21-§13-1`, `21-§13-2`, `21-§13-3`, `21-§24-7`, `17-§13-4` |

### 7.3 Data Isolation, RLS, Grants and Privileged Paths (RLS and backend)

The source-complete authority-surface inventory (EIS Section 9.1) is produced before any policy or function is replaced. Each table family moves in one migration, with role-matrix tests before and after, and two authority paths are never live on one family. Every `SECURITY DEFINER` function, new or replaced, follows `EC-ISO-10`.

| Obligation | Realizes | Title | Type | Workstream | Migration class | EIS section | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC-ISO-01` | `EIS-ISO-01` | Kernel-based RLS per table family, deny by default | `BUILD` | WS-A3 | M4 | 9.2, 9.4 | NP-01, NP-02, RS-03, RS-12 | `21-§6-1`, `21-§6-2`, `21-§21-4`, `21-§24-2`, `22-§6-5`, `22-§23-2`, `22-§29-3`, `17-§18-1`, `17-§22-9`, `7-§15-12`, `BP-§10.1-6`, `BP-§10.1-7` |
| `EC-ISO-02` | `EIS-ISO-02` | Commands as the only write boundary for protected tables | `BUILD` | WS-A3 | M3, M4 | 9.2, 9.4 | NP-02, NP-10, NP-15, RS-07, RS-10 | `21-§7`, `21-§11-1`, `21-§11-2`, `21-§23-1`, `21-§24-4`, `22-§6-4`, `17-§14-1`, `17-§14-7` |
| `EC-ISO-03` | `EIS-ISO-03` | Effective-access reconciliation (WS-B) | `BUILD-EVIDENCE-GATED` | WS-B | M5 | 9.3, 9.4 | NP-28 | `BP-§10.1-7`, `BP-§10.1-8` |
| `EC-ISO-04` | `EIS-ISO-04` | Privileged-operation contract for service-role paths | `BUILD` | WS-A3 | M3 | 9.1, 9.4 | NP-25 | `21-§6-6`, `21-§15-5`, `22-§6-4`, `22-§6-7` |
| `EC-ISO-05` | `EIS-ISO-05` | Business-scoped files, exports and object storage | `BUILD-EVIDENCE-GATED` | WS-A3 | M3, M4 | 9.4 | NP-04 | `21-§6-4`, `21-§6-5`, `22-§6-8` |
| `EC-ISO-06` | `EIS-ISO-06` | Conversation and AI context isolation contract | `BUILD-HARNESS` | WS-A3 | None | 9.4 | NP-05 | `21-§6-3`, `22-§6-3` |
| `EC-ISO-07` | `EIS-ISO-07` | Reference-level isolation with composite keys | `BUILD` | WS-A3 | M6 | 9.4 | NP-03, RS-03 | `21-§6-6`, `21-§6-7`, `22-§5-9` |
| `EC-ISO-08` | `EIS-ISO-08` | Kernel performance on list and search paths | `BUILD` | WS-A3 | M1 | 9.4 | per-row `VC-R` items | `22-§21` |
| `EC-ISO-09` | `EIS-ISO-09` | Data ownership and privacy boundary | `BUILD` | WS-A3 | None | 9.4 | NP-42 | `21-§21-4`, `22-§23-1`, `22-§23-5`, `22-§23-6`, `22-§23-7` |
| `EC-ISO-10` | `EIS-ISO-10` | `SECURITY DEFINER` hardening invariant | `BUILD` | WS-A3 | Every M3 | 9.3, 9.4 | NP-28 | `21-§7`, `BP-§10.1-7`, `BP-§10.1-8` |

### 7.4 Confirmation, Concurrency and Idempotency

Consequential commands run as preview then commit. The commit takes the serialization locks in the fixed order, locks and consumes the binding, re-evaluates the kernel, checks idempotency and writes, all in one transaction. Expected rejections are committed structured outcomes.

| Obligation | Realizes | Title | Type | Workstream | Migration class | EIS section | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC-CNF-01` | `EIS-CNF-01` | Generalized `confirmation_bindings` with atomic consumption | `BUILD` | WS-D | M1, M3 | 10.1, 10.4 | NP-17, NP-18, RS-02 | `21-§18-1`, `21-§18-2`, `21-§18-3`, `21-§18-4`, `21-§18-5`, `21-§18-6`, `22-§13-3`, `22-§13-5`, `22-§14-7` |
| `EC-CNF-02` | `EIS-CNF-02` | Complete authority serialization (three row types, fixed lock order) | `BUILD` | WS-D | M1, M3 | 10.2, 10.4 | NP-16, RS-02, RS-05 | `21-§17`, `21-§24-8`, `22-§13-4`, `22-§29-7`, `BP-§10.1-5` |
| `EC-CNF-03` | `EIS-CNF-03` | Clarify and preview before consequential writes | `BUILD` | WS-D | M3 | 10.4 | NP-17, RS-05 | `22-§13-1`, `22-§13-2` |
| `EC-CNF-04` | `EIS-CNF-04` | One shared idempotency pattern | `BUILD` | WS-D | M1, M3 | 10.4 | NP-20, RS-05 | `22-§15`, `22-§29-8` |
| `EC-CNF-05` | `EIS-CNF-05` | Multi-row import under revocation with an import ledger | `BUILD` | WS-D | M1, M3 | 10.3, 10.4 | NP-19, RS-02, RS-05 | `21-§17`, `22-§15`, `BP-§10.1-5` |
| `EC-CNF-06` | `EIS-CNF-06` | Narrow failure, never fail open | `BUILD` | WS-D | None | 10.4 | NP-44 | `22-§17`, `22-§19`, `22-§29-10` |

### 7.5 Audit, Observability and Denial Experience (observability and frontend)

Authority events are append-only and store codes and references, not payload values. A denial commits its audit row on every permitted invocation path. The client asks the kernel which capabilities apply; the UI is a usability layer only.

| Obligation | Realizes | Title | Type | Workstream | Migration class | EIS section | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC-AUD-01` | `EIS-AUD-01` | Append-only `authority_events` | `BUILD` | WS-E | M1 | 11 | NP-45 | `21-§19-1`, `21-§19-2`, `21-§19-3`, `21-§19-4`, `21-§19-5`, `21-§19-6`, `21-§19-7`, `21-§19-8` |
| `EC-AUD-02` | `EIS-AUD-02` | Durable denial audit on every invocation path | `BUILD` | WS-E | M1, M3 | 11 | NP-26, RS-06 | `21-§19-6`, `21-§20-5`, `21-§23-7` |
| `EC-AUD-03` | `EIS-AUD-03` | Catalog provenance widening (enumerated sets) | `BUILD` | WS-E | M6 | 11 | NP-21, NP-45 | `21-§19-8`, `22-§14-2`, `22-§14-3`, `22-§14-9` |
| `EC-AUD-04` | `EIS-AUD-04` | Evidence, interpretation, correction and context kept per event | `BUILD` | WS-E | M1 | 11 | NP-09, NP-32, NP-45 | `22-§14-1`, `22-§14-4`, `22-§14-5`, `22-§14-6`, `22-§14-8`, `22-§29-12` |
| `EC-AUD-05` | `EIS-AUD-05` | Minimization and dignity in audit and permissions | `BUILD` | WS-E | None | 11 | NP-42 | `21-§21-1`, `21-§21-2`, `21-§21-5`, `22-§16-2`, `22-§28-7` |
| `EC-UX-01` | `EIS-UX-01` | One denial contract | `BUILD` | WS-E | None | 11.1 | NP-27, RS-06 | `21-§20-1`, `21-§20-2`, `21-§20-3`, `21-§20-4`, `21-§20-5`, `21-§23-7`, `21-§24-12` |
| `EC-UX-02` | `EIS-UX-02` | Capability-driven UI as a usability layer | `BUILD` | WS-E | None | 11.1 | NP-15, RS-06, RS-07 | `21-§20-3`, `22-§6-1`, `17-§14-1`, `17-§14-7`, `17-§16-1`, `17-§22-10a` |

### 7.6 Product & Price Master

All 19 catalog functions keep their executor roles and gain kernel resolution of the requested business. One projection function shapes every response. Founder Decision Record 09 is applied exactly: no margin formula and no per-product or aggregate margin semantics are selected. Existing routes keep resolving and no data moves.

| Obligation | Realizes | Title | Type | Workstream | Migration class | EIS section | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC-PPM-01` | `EIS-PPM-01` | Catalog functions and server functions resolved through the kernel | `BUILD` | WS-C | M3 | 12.1, 12.6 | NP-03, NP-09, NP-42, RS-01, RS-13 | `22-§5-8`, `7-§12`, `BP-§10.1-11` |
| `EC-PPM-02` | `EIS-PPM-02` | Catalog capability set | `BUILD` | WS-C | M1 | 12.6 | NP-09, NP-14, NP-23, RS-01, RS-13 | `7-§10-1`, `7-§10-2`, `7-§10-3`, `7-§10-4`, `7-§15-10`, `BP-§10.1-11` |
| `EC-PPM-03` | `EIS-PPM-03` | Field-level projection on every read path | `BUILD` | WS-C | M3 | 12.3, 12.6 | NP-14, RS-01, RS-04 | `21-§4-2`, `21-§5-4`, `21-§24-3`, `17-§13-2`, `17-§22-2`, `7-§10-2`, `BP-§10.1-3` |
| `EC-PPM-04` | `EIS-PPM-04` | Margin and Reference Cost output boundary (Founder Decision Record 09) | `BUILD` | WS-C | M3 | 12.4, 12.6 | NP-14, RS-01, RS-04, RS-11 | `21-§5-4`, `21-§24-3`, `17-§18-2`, `17-§21-4`, `17-§22-2` |
| `EC-PPM-05` | `EIS-PPM-05` | Preservation of product, pricing, history and relationships | `BUILD` | WS-C | None | 12.5, 12.6 | NP-42, RS-13 | `7-§7`, `7-§9`, `BP-§10.1-13`, `BP-§7-1`, `BP-§7-2`, `BP-§7-3`, `BP-§7-4` |
| `EC-PPM-06` | `EIS-PPM-06` | Product & Price Master surface reclassification and route continuity | `BUILD` | WS-C | None | 12.5, 12.6 | RS-13 | `BP-§10.1-12`, `BP-§10.1-13`, `BP-§7-5` |

### 7.7 First Run, Invitations, Removal and Transfer Foundation

First run shows memberships and pending invitations before any automatic business creation. The generic removal command rejects the active Owner membership. Transfer completion is one command under the serialization protocol and keeps exactly one active Owner. Merchant-facing transfer, Pause, cancellation, Stop and Delete experiences stay with `SB-P-1.19`.

| Obligation | Realizes | Title | Type | Workstream | Migration class | EIS section | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC-FRL-01` | `EIS-FRL-01` | Invitations as pending memberships | `BUILD` | WS-G | M1, M3 | 13 | NP-09, NP-13, NP-36, NP-46, RS-08, RS-09, RS-11 | `20-§16-1`, `20-§16-2`, `20-§16-3`, `20-§16-4`, `20-§23-11` |
| `EC-FRL-02` | `EIS-FRL-02` | Authority-aware first run and `returnTo` allowlist | `BUILD` | WS-G | M3 | 13 | NP-46, RS-03, RS-08 | `21-§6-7`, `21-§15-1`, `20-§16-4` |
| `EC-FRL-03` | `EIS-FRL-03` | Non-Owner membership removal and revocation | `BUILD` | WS-G | M3 | 13 | NP-36, RS-02, RS-03, RS-05 | `21-§5-2`, `21-§17`, `22-§33-5` |
| `EC-FRL-04` | `EIS-FRL-04` | Ownership transfer foundation (state machine, atomic completion) | `BUILD-HARNESS` | WS-G | M1, M3 | 13, 10.2 | NP-37, NP-38, RS-07 | `21-§4-1`, `21-§18-1`, `21-§18-2`, `22-§33-4`, `22-§33-6`, `22-§33-18`, `22-§33-32`, `22-§33-34` |
| `EC-FRL-05` | `EIS-FRL-05` | Cross-mission evidence interface with SB-P-1.19 | `BUILD-HARNESS` | WS-G | M1 | 13 | NP-11, NP-37, NP-40, NP-43 | `21-§5-10`, `22-§33-4`, `22-§33-11`, `22-§33-32` |

### 7.8 History Integrity — ESC-1 (database and migration)

ESC-1 stays OPEN T8. These obligations realize the EIS safe-design direction only. No cascade from identity reaches history. Business deletion runs only through the governed lifecycle command and tombstones the row where retained records or holds survive. `22-§20-2` stays `BLOCKED` / `IN SCOPE` until Mission Control disposes the `EC-ESC-07` evidence.

| Obligation | Realizes | Title | Type | Workstream | Migration class | EIS section | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC-ESC-01` | `EIS-ESC-01` | Remove the Owner business API `DELETE` path | `BUILD` | WS-F | M6 | 14.1, 14.6 | NP-29, NP-30 | `21-§23-6`, `22-§20-2`, `22-§33-20`, `22-§33-22`, `22-§33-39` |
| `EC-ESC-02` | `EIS-ESC-02` | Re-point `businesses.owner_id` to `persons` with `RESTRICT` | `BUILD` | WS-F | M6 | 14.1, 14.6 | NP-33 | `22-§20-2`, `22-§33-18`, `22-§33-20`, `22-§33-22` |
| `EC-ESC-03` | `EIS-ESC-03` | Re-point historical actor columns to `persons` with `RESTRICT` | `BUILD` | WS-F | M6 | 14.1, 14.6 | NP-31, NP-33 | `21-§11-1`, `22-§20-2`, `22-§33-8`, `22-§33-17`, `22-§33-19` |
| `EC-ESC-04` | `EIS-ESC-04` | `RESTRICT` retained record classes and delete guards | `BUILD` | WS-F | M6 | 14.3, 14.6 | NP-32, NP-33 | `22-§14-5`, `22-§20-2`, `22-§33-17`, `22-§33-36` |
| `EC-ESC-05` | `EIS-ESC-05` | Containment of uncontrolled Auth deletion | `BUILD` | WS-F | M6 | 14.1, 14.6 | NP-31 | `22-§20-2`, `22-§33-22`, `22-§33-39` |
| `EC-ESC-06` | `EIS-ESC-06` | Governed business-deletion hook and tombstone state | `BUILD-HARNESS` | WS-F | M6 | 14.3, 14.6 | NP-34, NP-35 | `22-§20-1`, `22-§20-2`, `22-§33-4`, `22-§33-24` |
| `EC-ESC-07` | `EIS-ESC-07` | Evidence required before `22-§20-2` can be proposed for unblocking | `EVIDENCE` | WS-F | None | 14.6, 14.7 | NP-29, NP-30, NP-31, NP-32, NP-33, NP-34, NP-35, NP-41, NP-45 | `22-§20-2`, `22-§29-11`, `22-§29-12` |
| `EC-ESC-08` | `EIS-ESC-08` | ESC-1 migration and backfill order | `MIGRATION-DESIGN` | WS-F | M2, M6 | 14.4, 14.6 | NP-41, RS-13 | `22-§20-1`, `22-§20-4`, `BP-§10.1-13` |

### 7.9 Identity Deletion and Legal Boundary — Runtime, Authorization, Legal and Provider Gated

These are `BUILD NOW` obligations for `IN SCOPE` rows (MC-167 PQ-3). Identity-deletion runtime is not authorized, so their execution is gated; that is an execution gate, not a scope deferral, and no row is deferred. `EC-LEG-02` is a neutral technical record-level hold state built in WS-F (MC-167 PQ-2). No legal category, legal basis, retention period, release authority, policy text, or production or legal conclusion is created; those stay deferred to professional validation and evidence

| Obligation | Realizes | Title | Type | Workstream | Migration class | EIS section | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC-DEL-01` | `EIS-DEL-01` | Identity-deletion eligibility evaluator | `BUILD — RUNTIME / AUTHORIZATION GATED` | Identity deletion | Per separate migration mission | 15 | NP-40 | `22-§33-3`, `22-§33-4`, `22-§33-5`, `22-§33-6`, `22-§33-7`, `22-§33-8`, `22-§33-10`, `22-§33-11`, `22-§33-31`, `22-§33-33`, `22-§33-34` |
| `EC-DEL-02` | `EIS-DEL-02` | Governed identity-deletion command | `BUILD — RUNTIME / AUTHORIZATION GATED` | Identity deletion | Per separate migration mission | 15 | NP-29, NP-30, NP-31, NP-33 | `22-§33-1`, `22-§33-9`, `22-§33-22` |
| `EC-DEL-03` | `EIS-DEL-03` | De-identification separating identity from records | `BUILD — RUNTIME / AUTHORIZATION GATED` | Identity deletion | Per separate migration mission | 15 | NP-31, NP-40 | `22-§33-2`, `22-§33-12`, `22-§33-14`, `22-§33-19`, `22-§33-23` |
| `EC-DEL-04` | `EIS-DEL-04` | Non-authorizing attribution | `BUILD — RUNTIME / AUTHORIZATION GATED` | Identity deletion | Per separate migration mission | 15 | NP-39, NP-43 | `22-§33-15`, `22-§33-28`, `22-§33-37` |
| `EC-DEL-05` | `EIS-DEL-05` | Bounded deletion proof | `BUILD — RUNTIME / AUTHORIZATION GATED` | Identity deletion | Per separate migration mission | 15 | per-row `VC-R` items | `22-§33-21`, `22-§33-38` |
| `EC-DEL-06` | `EIS-DEL-06` | Obligation and hold register | `BUILD — RUNTIME / AUTHORIZATION GATED` | Identity deletion | Per separate migration mission | 15 | NP-35 | `22-§33-7`, `22-§33-13`, `22-§33-26`, `22-§33-35` |
| `EC-DEL-07` | `EIS-DEL-07` | Section 33.8 acceptance evidence plan | `VERIFICATION — RUNTIME GATED` | Identity deletion | Per separate migration mission | 15 | NP-29, NP-30, NP-31, NP-32, NP-33, NP-37, NP-39, NP-40 | `22-§33-31`, `22-§33-32`, `22-§33-33`, `22-§33-34`, `22-§33-35`, `22-§33-36`, `22-§33-37`, `22-§33-38`, `22-§33-39` |
| `EC-LEG-01` | `EIS-LEG-01` | Record-class registry with retention rules as data | `BUILD — LEGAL / RUNTIME GATED` | Identity deletion | Per separate migration mission | 16 | NP-34, NP-35, NP-39, NP-42 | `22-§33-16`, `22-§33-23`, `22-§33-24`, `22-§33-25`, `22-§33-27`, `22-§33-28`, `22-§33-29`, `22-§33-30` |
| `EC-LEG-02` | `EIS-LEG-02` | Neutral technical record-level hold state | `BUILD — AUTHORIZATION GATED` | WS-F | Per separate migration mission | 16 | NP-35 | `22-§33-26` |
| `EC-LEG-03` | `EIS-LEG-03` | Backup and PITR treatment as an evidence item | `EVIDENCE-ONLY / PROVIDER-LEGAL GATED` | Identity deletion | None | 16 | per-row `VC-R` items | `22-§33-30` |

### 7.10 Testing

The database isolation and security suite is mandatory for every workstream that changes authority, membership, RLS, grants, privileged functions or cross-business access. Fixtures create persons, businesses and memberships through product commands. Tests never set authority by writing tables directly, except in labelled fault-injection tests.

| Obligation | Realizes | Title | Type | Workstream | Migration class | EIS section | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC-TST-01` | `EIS-TST-01` | Database isolation and security suite is mandatory | `BUILD` | WS-H | None | 18.4 | per-row `VC-R` items | `22-§22`, `BP-§10.1-9` |
| `EC-TST-02` | `EIS-TST-02` | Executable acceptance scenarios | `BUILD` | WS-H | None | 18.4 | NP-01, NP-02, NP-03, NP-04, NP-05, NP-09, NP-10, NP-11, NP-12, NP-13, NP-14, NP-16, NP-17, NP-20, NP-21, NP-22, NP-23, NP-24, NP-27, NP-32, NP-41, NP-42, NP-44, NP-45, RS-01, RS-02, RS-04, RS-06, RS-07, RS-10, RS-11, RS-12, RS-13, RS-14, RS-15 | `21-§24-1`, `21-§24-2`, `21-§24-3`, `21-§24-4`, `21-§24-5`, `21-§24-6`, `21-§24-7`, `21-§24-8`, `21-§24-9`, `21-§24-10`, `21-§24-11`, `21-§24-12`, `22-§29-3`, `22-§29-6`, `22-§29-7`, `22-§29-8`, `22-§29-10`, `22-§29-11`, `22-§29-12`, `17-§22-2`, `17-§22-3`, `17-§22-9`, `17-§22-10a`, `7-§15-10`, `7-§15-12`, `BP-§10.1-1`, `BP-§10.1-5` |
| `EC-TST-03` | `EIS-TST-03` | ESC-1 negative paths and effective-access inventory test | `BUILD` | WS-H | None | 18.3, 18.4 | NP-28, NP-29, NP-30, NP-31, NP-32, NP-33, NP-34, NP-35 | `22-§20-2`, `22-§33-39`, `BP-§10.1-7`, `BP-§10.1-8` |
| `EC-TST-04` | `EIS-TST-04` | Existing suites stay green with non-Owner fixtures | `BUILD` | WS-H | None | 18.4 | RS-13 | `BP-§10.1-9`, `BP-§10.1-13` |

### 7.11 Governance and Cross-Mission Consumption

Later missions consume only the EIS Section 19.5 surfaces, and only after the dependency conditions there hold and Mission Control accepts the evidence. No workstream creates a duplicate engine, identity silo, scheduler, pipeline or client-specific fork, and no subscription or entitlement change touches schema.

| Obligation | Realizes | Title | Type | Workstream | Migration class | EIS section | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC-GOV-01` | `EIS-GOV-01` | Contract 22 section 27 disclosures | `GOVERNANCE` | Cross-cutting | None | 19.3, 19.4 | NP-42 | `21-§22`, `22-§27-1`, `22-§27-2`, `22-§27-3`, `22-§27-4`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§29-14` |
| `EC-GOV-02` | `EIS-GOV-02` | Non-duplication | `GOVERNANCE` | Cross-cutting | None | 19.3 | NP-42 | `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§28-7`, `22-§28-8`, `22-§28-9`, `22-§28-10` |
| `EC-GOV-03` | `EIS-GOV-03` | Schema stability | `GOVERNANCE` | Cross-cutting | None | 19.3 | NP-41 | `21-§16-2`, `22-§20-1`, `22-§20-3`, `22-§20-4`, `22-§29-11` |
| `EC-DEP-01` | `EIS-DEP-01` | Consumption contract for later missions | `CONSUMER GATE` | Consumer gate | None | 19.5 | NP-05, NP-08, NP-12, NP-42 | `21-§8`, `21-§22`, `22-§6-10`, `22-§28-2` |

### 7.12 Environment and Provider Evidence

Every item is separately authorized, read-only evidence. G-6/T4 stays `UNVERIFIED` until that evidence exists and Mission Control disposes it.

| Obligation | Realizes | Title | Type | Workstream | Migration class | EIS section | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC-ENV-01` | `EIS-ENV-01` | Separately authorized read-only environment evidence | `EVIDENCE` | WS-0 | None | 17 | NP-04, NP-28 | `21-§6-4`, `BP-§10.1-7`, `BP-§10.1-8` |
| `EC-ENV-02` | `EIS-ENV-02` | Access-token lifetime evidence item (EQ-6, informational) | `EVIDENCE` | WS-0 | None | 17 | per-row `VC-R` items | None — engineering-only evidence item (EIS Section 17, EQ-6); adds no product behaviour |

## 8. Cross-Cutting Engineering Rules

These rules restate engineering constraints already fixed by the EIS for the builder. Each realizes the obligations it names and adds no behaviour.

| Rule | Area | Rule |
|---|---|---|
| X-01 | Single authorized write path | Protected tables accept writes only through kernel-checked command functions (`EC-ISO-02`). Sensitive business events have one write path, and service-role bookkeeping is bound to a decision record (`EC-ISO-04`). |
| X-02 | Human decision ownership | A consequential action needs a confirmation bound to the authorized human actor (`EC-CNF-01`). AI or tool capability is never authority (`EC-KER-02`, `EC-GOV-02`). |
| X-03 | Validation | Business scope, actor and authority are derived server-side. A client-supplied `business_id`, actor or capability is never trusted alone (`EC-ID-06`, `EC-KER-02`). |
| X-04 | Migration governance | Migration classes M1 to M6 follow Blueprint Section 20.4.2 and EIS Section 19.1. No migration file is created or executed under this package. Migration execution requires a new, explicit mission meeting the default-deny rule of `docs/migration/README.md`. Steps stay reversible until old keys are dropped (EIS Section 14.4). |
| X-05 | Frontend | UI renders kernel-reported capabilities for the explicit active business, uses the denial contract, and adds stable test identifiers to the permission surface this mission adds. UI changes never widen backend access. |
| X-06 | Performance | Kernel helpers are `STABLE` with an indexed membership lookup and are timed in Full Assurance (`EC-ISO-08`). |
| X-07 | Observability | Every authority change and security-relevant denial produces an `authority_events` row with request ID, channel and reason code (`EC-AUD-01`, `EC-AUD-02`). Routine denials are recorded as routine. |
| X-08 | Evidence | Evidence follows the package template Sections 12 and 13 under `docs/implementation/SB-P-1.12/evidence/`, created only when an authorized stage produces evidence. Evidence is never claimed from documentary review, CI success or feasibility labels (SEC-S7-09). |
| X-09 | Completion | The builder records a status per assigned FCTM row in the Builder Completion Report (`lovable-build-completion-report.md`). A builder never verifies, approves or accepts its own work. `DEMONSTRATED` is reserved for rows with independent Stage 19 evidence. |

## 9. Process Obligations

Process obligations govern how the package and later work are conducted. They map to no FCTM row and add no product behaviour.

| ID | Obligation |
|---|---|
| P-01 | The locked Blueprint, locked EIS and canonical FCTM are not modified by any package or implementation step. |
| P-02 | No FCTM disposition, build commitment, commercial classification or mission assignment changes without a Founder decision recorded in a Founder Product Decision Record. |
| P-03 | Package approval (Stage 13) is not implementation authorization. Implementation starts only after a separately recorded Implementation Authorization naming the builder, workstreams, paths and Git authority. |
| P-04 | A Stage 3 trigger (T1 to T8), a Product Truth conflict, an infeasibility or a missing authority stops dependent work and goes to Mission Control. A lower actor never resolves a conflict by dropping behaviour. |
| P-05 | No self-approval, self-merge or self-verification. The independent verifier of a workstream did not build, correct or transfer it. |
| P-06 | A missing GitHub Actions run, missing status or skipped check is reported as missing, never as a pass. |
| P-07 | Every claim states its evidence class. Repository evidence is not runtime evidence, and runtime evidence in a test environment is not production evidence (G-6). |

## 10. Founder Decision Record 09 Boundary

`EC-PPM-03` and `EC-PPM-04` apply Founder Decision Record 09 exactly as EIS Sections 12.3 and 12.4 record it. Reference Cost and margin stay Owner-only by default and separately delegable; delegating one never delegates the other; a general product read or bounded Manager view grants neither. Exact delegated Reference Cost may appear beside a selling price the caller may otherwise see. Without `catalog.margin.read`, Smart Business never computes, labels, displays, returns, reports, aggregates or otherwise exposes margin or a margin-derived output. No margin formula, no per-product margin output and no aggregate margin semantics are selected; holding `catalog.margin.read` does not by itself approve any margin output. Verification: `NP-14`, `RS-04` and the SEC-EIS10-12 projection-path item in the Verification Checklist.

## 11. Row-to-Obligation Map

One line per `IN SCOPE` FCTM row, in FCTM order. Status combines the Blueprint Section 20.5 feasibility label (a documentary assessment, not evidence) with any runtime gate. Holds name the gates that constrain the row.

| # | FCTM row | Blueprint | Obligations | Workstreams | Status | Holds |
|---|---|---|---|---|---|---|
| 1 | `21-§4-1` | §8.1 | `EC-ID-02`, `EC-ID-04`, `EC-FRL-04` | WS-A1, WS-G | CONDITIONAL | — |
| 2 | `21-§4-2` | §8.1 | `EC-ID-02`, `EC-KER-03`, `EC-KER-04`, `EC-PPM-03` | WS-A1, WS-A2, WS-C | FEASIBLE | FDR-09, SEC-EIS10-12 |
| 3 | `21-§4-3` | §8.1 | `EC-ID-02`, `EC-KER-03` | WS-A1, WS-A2 | FEASIBLE | — |
| 4 | `21-§4-4` | §8.1 | `EC-ID-03` | WS-A1 | FEASIBLE | — |
| 5 | `21-§4-5` | §8.1 | `EC-ID-03` | WS-A1 | FEASIBLE | — |
| 6 | `21-§4-6` | §8.1 | `EC-ID-03` | WS-A1 | FEASIBLE | — |
| 7 | `21-§5-1` | §8.2 | `EC-ID-01`, `EC-KER-01` | WS-A1, WS-A2 | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 8 | `21-§5-2` | §8.2 | `EC-ID-02`, `EC-KER-01`, `EC-FRL-03` | WS-A1, WS-A2, WS-G | CONDITIONAL | — |
| 9 | `21-§5-3` | §8.2 | `EC-ID-02`, `EC-KER-01` | WS-A1, WS-A2 | FEASIBLE | — |
| 10 | `21-§5-4` | §8.2 | `EC-KER-01`, `EC-KER-04`, `EC-PPM-03`, `EC-PPM-04` | WS-A2, WS-C | CONDITIONAL | FDR-09, SEC-EIS10-12 |
| 11 | `21-§5-5` | §8.2 | `EC-KER-01`, `EC-KER-08` | WS-A2 | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 12 | `21-§5-6` | §8.2 | `EC-KER-01`, `EC-KER-08` | WS-A2 | FEASIBLE | — |
| 13 | `21-§5-7` | §8.2 | `EC-KER-01`, `EC-KER-05` | WS-A2 | FEASIBLE | — |
| 14 | `21-§5-8` | §8.2 | `EC-KER-01`, `EC-KER-06` | WS-A2 | FEASIBLE | — |
| 15 | `21-§5-9` | §8.2 | `EC-KER-01` | WS-A2 | FEASIBLE | — |
| 16 | `21-§5-10` | §8.2 | `EC-KER-01`, `EC-KER-05`, `EC-FRL-05` | WS-A2, WS-G | CONDITIONAL | — |
| 17 | `21-§6-1` | §8.3 | `EC-ISO-01` | WS-A3 | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| 18 | `21-§6-2` | §8.3 | `EC-ISO-01` | WS-A3 | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| 19 | `21-§6-3` | §8.3 | `EC-ISO-06` | WS-A3 | FEASIBLE | — |
| 20 | `21-§6-4` | §8.3 | `EC-ISO-05`, `EC-ENV-01` | WS-A3, WS-0 | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4, G-7, SEC-EIS10-13 |
| 21 | `21-§6-5` | §8.3 | `EC-ISO-05` | WS-A3 | FEASIBLE | G-7 |
| 22 | `21-§6-6` | §8.3 | `EC-ID-05`, `EC-ISO-04`, `EC-ISO-07` | WS-A1, WS-A3 | FEASIBLE | — |
| 23 | `21-§6-7` | §8.3 | `EC-ID-06`, `EC-ISO-07`, `EC-FRL-02` | WS-A1, WS-A3, WS-G | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 24 | `21-§7` | §8.4 | `EC-KER-01`, `EC-ISO-02`, `EC-ISO-10` | WS-A2, WS-A3 | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| 25 | `21-§8` | §8.5 | `EC-KER-02`, `EC-KER-06`, `EC-DEP-01` | WS-A2, Consumer gate | FEASIBLE | — |
| 26 | `21-§9` | §8.5 | `EC-KER-06`, `EC-KER-07` | WS-A2 | FEASIBLE | — |
| 27 | `21-§10-1` | §8.6 | `EC-EXT-01` | WS-A2 | FEASIBLE | — |
| 28 | `21-§10-2` | §8.6 | `EC-EXT-01` | WS-A2 | FEASIBLE | — |
| 29 | `21-§10-3` | §8.6 | `EC-EXT-01` | WS-A2 | FEASIBLE | — |
| 30 | `21-§10-4` | §8.6 | `EC-EXT-01` | WS-A2 | FEASIBLE | — |
| 31 | `21-§10-5` | §8.6 | `EC-EXT-01` | WS-A2 | FEASIBLE | — |
| 32 | `21-§10-6` | §8.6 | `EC-KER-07`, `EC-EXT-01` | WS-A2 | FEASIBLE | — |
| 33 | `21-§11-1` | §8.7 | `EC-ISO-02`, `EC-ESC-03` | WS-A3, WS-F | FEASIBLE | ESC-1 |
| 34 | `21-§11-2` | §8.7 | `EC-KER-08`, `EC-ISO-02` | WS-A2, WS-A3 | CONDITIONAL | — |
| 35 | `21-§12-1` | §8.8 | `EC-AUT-01` | WS-A2 | FEASIBLE | — |
| 36 | `21-§12-2` | §8.8 | `EC-AUT-01` | WS-A2 | FEASIBLE | — |
| 37 | `21-§12-3` | §8.8 | `EC-AUT-01` | WS-A2 | FEASIBLE | — |
| 38 | `21-§12-4` | §8.8 | `EC-AUT-01` | WS-A2 | FEASIBLE | — |
| 39 | `21-§12-5` | §8.8 | `EC-KER-09`, `EC-AUT-01` | WS-A2 | FEASIBLE | — |
| 40 | `21-§13-1` | §8.9 | `EC-EXT-02` | WS-A2 | FEASIBLE | — |
| 41 | `21-§13-2` | §8.9 | `EC-EXT-02` | WS-A2 | FEASIBLE | — |
| 42 | `21-§13-3` | §8.9 | `EC-EXT-02` | WS-A2 | FEASIBLE | — |
| 43 | `21-§14-1` | §8.10 | `EC-SUP-01` | WS-A2 | FEASIBLE | — |
| 44 | `21-§14-2` | §8.10 | `EC-SUP-01` | WS-A2 | FEASIBLE | — |
| 45 | `21-§14-3` | §8.10 | `EC-SUP-01` | WS-A2 | FEASIBLE | — |
| 46 | `21-§14-4` | §8.10 | `EC-SUP-01` | WS-A2 | FEASIBLE | — |
| 47 | `21-§14-5` | §8.10 | `EC-SUP-01` | WS-A2 | FEASIBLE | — |
| 48 | `21-§14-6` | §8.10 | `EC-SUP-01` | WS-A2 | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 49 | `21-§14-7` | §8.10 | `EC-SUP-01` | WS-A2 | FEASIBLE | — |
| 50 | `21-§15-1` | §8.11 | `EC-ID-06`, `EC-KER-02`, `EC-FRL-02` | WS-A1, WS-A2, WS-G | FEASIBLE | — |
| 51 | `21-§15-2` | §8.11 | `EC-KER-02` | WS-A2 | FEASIBLE | — |
| 52 | `21-§15-3` | §8.11 | `EC-ID-06`, `EC-KER-02` | WS-A1, WS-A2 | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| 53 | `21-§15-4` | §8.11 | `EC-KER-02` | WS-A2 | FEASIBLE | — |
| 54 | `21-§15-5` | §8.11 | `EC-KER-02`, `EC-SUP-01`, `EC-ISO-04` | WS-A2, WS-A3 | FEASIBLE | — |
| 55 | `21-§16-1` | §8.12 | `EC-KER-05` | WS-A2 | FEASIBLE | — |
| 56 | `21-§16-2` | §8.12 | `EC-KER-05`, `EC-GOV-03` | WS-A2, Cross-cutting | FEASIBLE | — |
| 57 | `21-§17` | §8.13 | `EC-KER-09`, `EC-CNF-02`, `EC-CNF-05`, `EC-FRL-03` | WS-A2, WS-D, WS-G | CONDITIONAL | — |
| 58 | `21-§18-1` | §8.14 | `EC-CNF-01`, `EC-FRL-04` | WS-D, WS-G | FEASIBLE | — |
| 59 | `21-§18-2` | §8.14 | `EC-CNF-01`, `EC-FRL-04` | WS-D, WS-G | FEASIBLE | — |
| 60 | `21-§18-3` | §8.14 | `EC-CNF-01` | WS-D | FEASIBLE | — |
| 61 | `21-§18-4` | §8.14 | `EC-CNF-01` | WS-D | FEASIBLE | — |
| 62 | `21-§18-5` | §8.14 | `EC-CNF-01` | WS-D | FEASIBLE | — |
| 63 | `21-§18-6` | §8.14 | `EC-CNF-01` | WS-D | FEASIBLE | — |
| 64 | `21-§19-1` | §8.15 | `EC-AUD-01` | WS-E | CONDITIONAL | ESC-1 |
| 65 | `21-§19-2` | §8.15 | `EC-AUD-01` | WS-E | CONDITIONAL | ESC-1 |
| 66 | `21-§19-3` | §8.15 | `EC-AUD-01` | WS-E | CONDITIONAL | ESC-1 |
| 67 | `21-§19-4` | §8.15 | `EC-AUD-01` | WS-E | CONDITIONAL | ESC-1 |
| 68 | `21-§19-5` | §8.15 | `EC-AUD-01` | WS-E | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | ESC-1 |
| 69 | `21-§19-6` | §8.15 | `EC-AUD-01`, `EC-AUD-02` | WS-E | CONDITIONAL | ESC-1 |
| 70 | `21-§19-7` | §8.15 | `EC-SUP-01`, `EC-AUD-01` | WS-A2, WS-E | CONDITIONAL | ESC-1 |
| 71 | `21-§19-8` | §8.15 | `EC-AUT-01`, `EC-AUD-01`, `EC-AUD-03` | WS-A2, WS-E | CONDITIONAL | ESC-1 |
| 72 | `21-§20-1` | §8.16 | `EC-UX-01` | WS-E | FEASIBLE | — |
| 73 | `21-§20-2` | §8.16 | `EC-UX-01` | WS-E | FEASIBLE | — |
| 74 | `21-§20-3` | §8.16 | `EC-UX-01`, `EC-UX-02` | WS-E | FEASIBLE | — |
| 75 | `21-§20-4` | §8.16 | `EC-UX-01` | WS-E | FEASIBLE | — |
| 76 | `21-§20-5` | §8.16 | `EC-AUD-02`, `EC-UX-01` | WS-E | FEASIBLE | — |
| 77 | `21-§21-1` | §8.17 | `EC-AUD-05` | WS-E | FEASIBLE | — |
| 78 | `21-§21-2` | §8.17 | `EC-AUD-05` | WS-E | FEASIBLE | — |
| 79 | `21-§21-3` | §8.17 | `EC-SUP-01` | WS-A2 | FEASIBLE | — |
| 80 | `21-§21-4` | §8.17 | `EC-ISO-01`, `EC-ISO-09` | WS-A3 | FEASIBLE | — |
| 81 | `21-§21-5` | §8.17 | `EC-AUD-05` | WS-E | FEASIBLE | — |
| 82 | `21-§22` | §8.18 | `EC-KER-01`, `EC-GOV-01`, `EC-DEP-01` | WS-A2, Cross-cutting, Consumer gate | CONDITIONAL | — |
| 83 | `21-§23-1` | §8.18 | `EC-ISO-02` | WS-A3 | FEASIBLE | — |
| 84 | `21-§23-2` | §8.18 | `EC-KER-03` | WS-A2 | FEASIBLE | — |
| 85 | `21-§23-3` | §8.18 | `EC-KER-03`, `EC-EXT-01` | WS-A2 | FEASIBLE | — |
| 86 | `21-§23-4` | §8.18 | `EC-SUP-01` | WS-A2 | FEASIBLE | — |
| 87 | `21-§23-5` | §8.18 | `EC-KER-02` | WS-A2 | FEASIBLE | — |
| 88 | `21-§23-6` | §8.18 | `EC-KER-05`, `EC-ESC-01` | WS-A2, WS-F | FEASIBLE | ESC-1 |
| 89 | `21-§23-7` | §8.18 | `EC-AUD-02`, `EC-UX-01` | WS-E | FEASIBLE | — |
| 90 | `21-§24-1` | §8.19 | `EC-TST-02` | WS-H | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| 91 | `21-§24-2` | §8.19 | `EC-ISO-01`, `EC-TST-02` | WS-A3, WS-H | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| 92 | `21-§24-3` | §8.19 | `EC-PPM-03`, `EC-PPM-04`, `EC-TST-02` | WS-C, WS-H | CONDITIONAL | FDR-09, SEC-EIS10-12 |
| 93 | `21-§24-4` | §8.19 | `EC-KER-08`, `EC-ISO-02`, `EC-TST-02` | WS-A2, WS-A3, WS-H | CONDITIONAL | — |
| 94 | `21-§24-5` | §8.19 | `EC-EXT-01`, `EC-TST-02` | WS-A2, WS-H | FEASIBLE | — |
| 95 | `21-§24-6` | §8.19 | `EC-KER-06`, `EC-KER-07`, `EC-TST-02` | WS-A2, WS-H | FEASIBLE | — |
| 96 | `21-§24-7` | §8.19 | `EC-EXT-02`, `EC-TST-02` | WS-A2, WS-H | FEASIBLE | — |
| 97 | `21-§24-8` | §8.19 | `EC-KER-09`, `EC-CNF-02`, `EC-TST-02` | WS-A2, WS-D, WS-H | CONDITIONAL | — |
| 98 | `21-§24-9` | §8.19 | `EC-KER-05`, `EC-TST-02` | WS-A2, WS-H | FEASIBLE | — |
| 99 | `21-§24-10` | §8.19 | `EC-SUP-01`, `EC-TST-02` | WS-A2, WS-H | FEASIBLE | — |
| 100 | `21-§24-11` | §8.19 | `EC-AUT-01`, `EC-TST-02` | WS-A2, WS-H | FEASIBLE | — |
| 101 | `21-§24-12` | §8.19 | `EC-UX-01`, `EC-TST-02` | WS-E, WS-H | FEASIBLE | — |
| 102 | `22-§5-1` | §8.20 | `EC-ID-02` | WS-A1 | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 103 | `22-§5-2` | §8.20 | `EC-ID-01`, `EC-ID-02`, `EC-ID-04` | WS-A1 | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | — |
| 104 | `22-§5-3` | §8.20 | `EC-ID-01`, `EC-ID-02` | WS-A1 | FEASIBLE | — |
| 105 | `22-§5-4` | §8.20 | `EC-ID-01`, `EC-ID-02` | WS-A1 | FEASIBLE | — |
| 106 | `22-§5-5` | §8.20 | `EC-ID-03` | WS-A1 | FEASIBLE | — |
| 107 | `22-§5-6` | §8.20 | `EC-ID-03` | WS-A1 | FEASIBLE | — |
| 108 | `22-§5-7` | §8.20 | `EC-ID-03` | WS-A1 | FEASIBLE | — |
| 109 | `22-§5-8` | §8.20 | `EC-ID-05`, `EC-PPM-01` | WS-A1, WS-C | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 110 | `22-§5-9` | §8.20 | `EC-ID-05`, `EC-ISO-07` | WS-A1, WS-A3 | FEASIBLE | — |
| 111 | `22-§6-1` | §8.21 | `EC-UX-02` | WS-E | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 112 | `22-§6-2` | §8.21 | `EC-KER-06` | WS-A2 | FEASIBLE | — |
| 113 | `22-§6-3` | §8.21 | `EC-KER-06`, `EC-ISO-06` | WS-A2, WS-A3 | FEASIBLE | — |
| 114 | `22-§6-4` | §8.21 | `EC-ISO-02`, `EC-ISO-04` | WS-A3 | FEASIBLE | — |
| 115 | `22-§6-5` | §8.21 | `EC-ISO-01` | WS-A3 | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| 116 | `22-§6-6` | §8.21 | `EC-AUT-01` | WS-A2 | FEASIBLE | — |
| 117 | `22-§6-7` | §8.21 | `EC-ISO-04` | WS-A3 | FEASIBLE | — |
| 118 | `22-§6-8` | §8.21 | `EC-ISO-05` | WS-A3 | CONDITIONAL | G-7 |
| 119 | `22-§6-9` | §8.21 | `EC-KER-06` | WS-A2 | FEASIBLE | — |
| 120 | `22-§6-10` | §8.21 | `EC-KER-01`, `EC-DEP-01` | WS-A2, Consumer gate | FEASIBLE | — |
| 121 | `22-§13-1` | §8.22 | `EC-CNF-03` | WS-D | FEASIBLE | — |
| 122 | `22-§13-2` | §8.22 | `EC-CNF-03` | WS-D | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 123 | `22-§13-3` | §8.22 | `EC-CNF-01` | WS-D | FEASIBLE | — |
| 124 | `22-§13-4` | §8.22 | `EC-CNF-02` | WS-D | FEASIBLE | — |
| 125 | `22-§13-5` | §8.22 | `EC-CNF-01` | WS-D | FEASIBLE | — |
| 126 | `22-§14-1` | §8.23 | `EC-AUD-04` | WS-E | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 127 | `22-§14-2` | §8.23 | `EC-AUD-03` | WS-E | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 128 | `22-§14-3` | §8.23 | `EC-AUD-03` | WS-E | FEASIBLE | — |
| 129 | `22-§14-4` | §8.23 | `EC-AUD-04` | WS-E | FEASIBLE | — |
| 130 | `22-§14-5` | §8.23 | `EC-AUD-04`, `EC-ESC-04` | WS-E, WS-F | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | ESC-1 |
| 131 | `22-§14-6` | §8.23 | `EC-AUD-04` | WS-E | FEASIBLE | — |
| 132 | `22-§14-7` | §8.23 | `EC-CNF-01` | WS-D | FEASIBLE | — |
| 133 | `22-§14-8` | §8.23 | `EC-AUD-04` | WS-E | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 134 | `22-§14-9` | §8.23 | `EC-AUD-03` | WS-E | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 135 | `22-§15` | §8.24 | `EC-CNF-04`, `EC-CNF-05` | WS-D | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 136 | `22-§16-2` | §8.17 | `EC-AUD-05` | WS-E | FEASIBLE | — |
| 137 | `22-§17` | §8.25 | `EC-CNF-06` | WS-D | FEASIBLE | — |
| 138 | `22-§19` | §8.25 | `EC-CNF-06` | WS-D | FEASIBLE | — |
| 139 | `22-§20-1` | §8.26 | `EC-ESC-06`, `EC-ESC-08`, `EC-GOV-03` | WS-F, Cross-cutting | FEASIBLE | ESC-1, SEC-EIS10-14 |
| 140 | `22-§20-2` | §8.26 | `EC-ESC-01`, `EC-ESC-02`, `EC-ESC-03`, `EC-ESC-04`, `EC-ESC-05`, `EC-ESC-06`, `EC-ESC-07`, `EC-TST-03` | WS-F, WS-H | BLOCKED (T8, ESC-1 OPEN); FCTM partial; regression `VC-TEST-15` | ESC-1, 22-§20-2, G-7, SEC-EIS10-14 |
| 141 | `22-§20-3` | §8.26 | `EC-KER-05`, `EC-GOV-03` | WS-A2, Cross-cutting | FEASIBLE | — |
| 142 | `22-§20-4` | §8.26 | `EC-ESC-08`, `EC-GOV-03` | WS-F, Cross-cutting | FEASIBLE; FCTM partial; regression `VC-TEST-15` | ESC-1 |
| 143 | `22-§21` | §8.27 | `EC-ISO-08` | WS-A3 | FEASIBLE | — |
| 144 | `22-§22` | §8.27 | `EC-TST-01` | WS-H | CONDITIONAL | — |
| 145 | `22-§23-1` | §8.28 | `EC-ISO-09` | WS-A3 | FEASIBLE | — |
| 146 | `22-§23-2` | §8.28 | `EC-ISO-01` | WS-A3 | CONDITIONAL | G-6/T4 |
| 147 | `22-§23-3` | §8.28 | `EC-SUP-01` | WS-A2 | FEASIBLE | — |
| 148 | `22-§23-4` | §8.28 | `EC-SUP-01` | WS-A2 | FEASIBLE | — |
| 149 | `22-§23-5` | §8.28 | `EC-ISO-09` | WS-A3 | FEASIBLE | — |
| 150 | `22-§23-6` | §8.28 | `EC-ISO-09` | WS-A3 | FEASIBLE | — |
| 151 | `22-§23-7` | §8.28 | `EC-ISO-09` | WS-A3 | FEASIBLE | — |
| 152 | `22-§27-1` | §8.29 | `EC-GOV-01` | Cross-cutting | FEASIBLE | — |
| 153 | `22-§27-2` | §8.29 | `EC-GOV-01` | Cross-cutting | FEASIBLE | — |
| 154 | `22-§27-3` | §8.29 | `EC-GOV-01` | Cross-cutting | FEASIBLE | — |
| 155 | `22-§27-4` | §8.29 | `EC-GOV-01` | Cross-cutting | FEASIBLE | — |
| 156 | `22-§27-5` | §8.29 | `EC-GOV-01` | Cross-cutting | FEASIBLE | — |
| 157 | `22-§27-6` | §8.29 | `EC-GOV-01` | Cross-cutting | FEASIBLE | — |
| 158 | `22-§27-7` | §8.29 | `EC-GOV-01` | Cross-cutting | FEASIBLE | — |
| 159 | `22-§28-1` | §8.30 | `EC-GOV-02` | Cross-cutting | FEASIBLE | — |
| 160 | `22-§28-2` | §8.30 | `EC-KER-01`, `EC-GOV-02`, `EC-DEP-01` | WS-A2, Cross-cutting, Consumer gate | FEASIBLE | — |
| 161 | `22-§28-3` | §8.30 | `EC-GOV-02` | Cross-cutting | FEASIBLE | — |
| 162 | `22-§28-4` | §8.30 | `EC-AUT-01`, `EC-GOV-02` | WS-A2, Cross-cutting | FEASIBLE | — |
| 163 | `22-§28-5` | §8.30 | `EC-GOV-02` | Cross-cutting | FEASIBLE | — |
| 164 | `22-§28-6` | §8.30 | `EC-ID-03`, `EC-GOV-02` | WS-A1, Cross-cutting | FEASIBLE | — |
| 165 | `22-§28-7` | §8.30 | `EC-AUD-05`, `EC-GOV-02` | WS-E, Cross-cutting | FEASIBLE | — |
| 166 | `22-§28-8` | §8.30 | `EC-KER-05`, `EC-GOV-02` | WS-A2, Cross-cutting | FEASIBLE | — |
| 167 | `22-§28-9` | §8.30 | `EC-KER-02`, `EC-GOV-02` | WS-A2, Cross-cutting | FEASIBLE | — |
| 168 | `22-§28-10` | §8.30 | `EC-GOV-02` | Cross-cutting | FEASIBLE | — |
| 169 | `22-§29-3` | §8.31 | `EC-KER-06`, `EC-ISO-01`, `EC-TST-02` | WS-A2, WS-A3, WS-H | CONDITIONAL | G-6/T4 |
| 170 | `22-§29-6` | §8.31 | `EC-ID-03`, `EC-TST-02` | WS-A1, WS-H | FEASIBLE | — |
| 171 | `22-§29-7` | §8.31 | `EC-CNF-02`, `EC-TST-02` | WS-D, WS-H | FEASIBLE | — |
| 172 | `22-§29-8` | §8.31 | `EC-CNF-04`, `EC-TST-02` | WS-D, WS-H | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 173 | `22-§29-10` | §8.31 | `EC-CNF-06`, `EC-TST-02` | WS-D, WS-H | FEASIBLE | — |
| 174 | `22-§29-11` | §8.31 | `EC-ESC-07`, `EC-GOV-03`, `EC-TST-02` | WS-F, Cross-cutting, WS-H | FEASIBLE | ESC-1, 22-§20-2 |
| 175 | `22-§29-12` | §8.31 | `EC-AUD-04`, `EC-ESC-07`, `EC-TST-02` | WS-E, WS-F, WS-H | CONDITIONAL | ESC-1, 22-§20-2 |
| 176 | `22-§29-14` | §8.31 | `EC-GOV-01` | Cross-cutting | FEASIBLE | — |
| 177 | `22-§33-1` | §8.37 | `EC-DEL-02` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| 178 | `22-§33-2` | §8.37 | `EC-ID-01`, `EC-DEL-03` | WS-A1, Identity deletion | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, LEGAL, SEC-EIS10-14 |
| 179 | `22-§33-3` | §8.37 | `EC-DEL-01` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, SEC-EIS10-14 |
| 180 | `22-§33-4` | §8.37 | `EC-FRL-04`, `EC-FRL-05`, `EC-ESC-06`, `EC-DEL-01` | WS-G, WS-F, Identity deletion | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| 181 | `22-§33-5` | §8.37 | `EC-FRL-03`, `EC-DEL-01` | WS-G, Identity deletion | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| 182 | `22-§33-6` | §8.37 | `EC-FRL-04`, `EC-DEL-01` | WS-G, Identity deletion | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| 183 | `22-§33-7` | §8.37 | `EC-DEL-01`, `EC-DEL-06` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| 184 | `22-§33-8` | §8.37 | `EC-ESC-03`, `EC-DEL-01` | WS-F, Identity deletion | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| 185 | `22-§33-9` | §8.37 | `EC-DEL-02` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, SEC-EIS10-14 |
| 186 | `22-§33-10` | §8.37 | `EC-DEL-01` | Identity deletion | FEASIBLE; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, SEC-EIS10-14 |
| 187 | `22-§33-11` | §8.37 | `EC-FRL-05`, `EC-DEL-01` | WS-G, Identity deletion | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| 188 | `22-§33-12` | §8.37 | `EC-DEL-03` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| 189 | `22-§33-13` | §8.37 | `EC-DEL-06` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | LEGAL, SEC-EIS10-14 |
| 190 | `22-§33-14` | §8.37 | `EC-DEL-03` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | LEGAL, SEC-EIS10-14 |
| 191 | `22-§33-15` | §8.37 | `EC-DEL-04` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, SEC-EIS10-14 |
| 192 | `22-§33-16` | §8.37 | `EC-LEG-01` | Identity deletion | FEASIBLE; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | LEGAL, SEC-EIS10-14 |
| 193 | `22-§33-17` | §8.37 | `EC-ESC-03`, `EC-ESC-04` | WS-F | CONDITIONAL | ESC-1 |
| 194 | `22-§33-18` | §8.37 | `EC-FRL-04`, `EC-ESC-02` | WS-G, WS-F | CONDITIONAL | ESC-1 |
| 195 | `22-§33-19` | §8.37 | `EC-ESC-03`, `EC-DEL-03` | WS-F, Identity deletion | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, LEGAL, SEC-EIS10-14 |
| 196 | `22-§33-20` | §8.37 | `EC-ESC-01`, `EC-ESC-02` | WS-F | CONDITIONAL | ESC-1 |
| 197 | `22-§33-21` | §8.37 | `EC-DEL-05` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| 198 | `22-§33-22` | §8.37 | `EC-ESC-01`, `EC-ESC-02`, `EC-ESC-05`, `EC-DEL-02` | WS-F, Identity deletion | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, G-6/T4, G-7, SEC-EIS10-14 |
| 199 | `22-§33-23` | §8.37 | `EC-ID-01`, `EC-DEL-03`, `EC-LEG-01` | WS-A1, Identity deletion | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, LEGAL, SEC-EIS10-14 |
| 200 | `22-§33-24` | §8.37 | `EC-ESC-06`, `EC-LEG-01` | WS-F, Identity deletion | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, LEGAL, SEC-EIS10-14 |
| 201 | `22-§33-25` | §8.37 | `EC-LEG-01` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | LEGAL, SEC-EIS10-14 |
| 202 | `22-§33-26` | §8.37 | `EC-DEL-06`, `EC-LEG-02` | Identity deletion, WS-F | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | LEGAL, SEC-EIS10-14 |
| 203 | `22-§33-27` | §8.37 | `EC-LEG-01` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | G-7, LEGAL, SEC-EIS10-14 |
| 204 | `22-§33-28` | §8.37 | `EC-DEL-04`, `EC-LEG-01` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| 205 | `22-§33-29` | §8.37 | `EC-LEG-01` | Identity deletion | FEASIBLE; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | LEGAL, SEC-EIS10-14 |
| 206 | `22-§33-30` | §8.37 | `EC-LEG-01`, `EC-LEG-03` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | G-7, LEGAL, SEC-EIS10-14 |
| 207 | `22-§33-31` | §8.37 | `EC-DEL-01`, `EC-DEL-07` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| 208 | `22-§33-32` | §8.37 | `EC-FRL-04`, `EC-FRL-05`, `EC-DEL-07` | WS-G, Identity deletion | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| 209 | `22-§33-33` | §8.37 | `EC-DEL-01`, `EC-DEL-07` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, SEC-EIS10-14 |
| 210 | `22-§33-34` | §8.37 | `EC-FRL-04`, `EC-DEL-01`, `EC-DEL-07` | WS-G, Identity deletion | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| 211 | `22-§33-35` | §8.37 | `EC-DEL-06`, `EC-DEL-07` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| 212 | `22-§33-36` | §8.37 | `EC-ESC-04`, `EC-DEL-07` | WS-F, Identity deletion | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, SEC-EIS10-14 |
| 213 | `22-§33-37` | §8.37 | `EC-DEL-04`, `EC-DEL-07` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, SEC-EIS10-14 |
| 214 | `22-§33-38` | §8.37 | `EC-DEL-05`, `EC-DEL-07` | Identity deletion | CONDITIONAL; EXECUTION GATED — RUNTIME NOT AUTHORIZED (identity deletion; IN SCOPE, not a scope deferral) | ESC-1, LEGAL, SEC-EIS10-14 |
| 215 | `22-§33-39` | §8.37 | `EC-ESC-01`, `EC-ESC-05`, `EC-DEL-07`, `EC-TST-03` | WS-F, Identity deletion, WS-H | CONDITIONAL; part execution-gated (identity deletion) | ESC-1, G-6/T4, G-7, SEC-EIS10-14 |
| 216 | `20-§16-1` | §8.32 | `EC-ID-02`, `EC-ID-04`, `EC-FRL-01` | WS-A1, WS-G | CONDITIONAL | — |
| 217 | `20-§16-2` | §8.32 | `EC-KER-04`, `EC-FRL-01` | WS-A2, WS-G | FEASIBLE | — |
| 218 | `20-§16-3` | §8.32 | `EC-KER-03`, `EC-FRL-01` | WS-A2, WS-G | FEASIBLE | — |
| 219 | `20-§16-4` | §8.32 | `EC-FRL-01`, `EC-FRL-02` | WS-G | FEASIBLE | — |
| 220 | `20-§23-11` | §8.32 | `EC-KER-03`, `EC-FRL-01` | WS-A2, WS-G | FEASIBLE | — |
| 221 | `17-§13-1` | §8.33 | `EC-ID-02` | WS-A1 | FEASIBLE | — |
| 222 | `17-§13-2` | §8.33 | `EC-ID-02`, `EC-KER-03`, `EC-PPM-03` | WS-A1, WS-A2, WS-C | CONDITIONAL | FDR-09, SEC-EIS10-12 |
| 223 | `17-§13-3` | §8.33 | `EC-ID-02`, `EC-KER-03` | WS-A1, WS-A2 | FEASIBLE | — |
| 224 | `17-§13-4` | §8.33 | `EC-ID-03`, `EC-EXT-02` | WS-A1, WS-A2 | FEASIBLE | — |
| 225 | `17-§14-1` | §8.33 | `EC-ISO-02`, `EC-UX-02` | WS-A3, WS-E | FEASIBLE | — |
| 226 | `17-§14-2` | §8.33 | `EC-KER-01` | WS-A2 | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 227 | `17-§14-3` | §8.33 | `EC-KER-01` | WS-A2 | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| 228 | `17-§14-4` | §8.33 | `EC-KER-01` | WS-A2 | FEASIBLE | — |
| 229 | `17-§14-5` | §8.33 | `EC-KER-01` | WS-A2 | FEASIBLE | — |
| 230 | `17-§14-6` | §8.33 | `EC-KER-01` | WS-A2 | FEASIBLE | — |
| 231 | `17-§14-7` | §8.33 | `EC-ISO-02`, `EC-UX-02` | WS-A3, WS-E | FEASIBLE | — |
| 232 | `17-§16-1` | §8.33 | `EC-UX-02` | WS-E | FEASIBLE | — |
| 233 | `17-§18-1` | §8.33 | `EC-ISO-01` | WS-A3 | CONDITIONAL | G-6/T4 |
| 234 | `17-§18-2` | §8.33 | `EC-KER-03`, `EC-KER-07`, `EC-PPM-04` | WS-A2, WS-C | CONDITIONAL | FDR-09, SEC-EIS10-12 |
| 235 | `17-§18-4` | §8.33 | `EC-KER-07` | WS-A2 | FEASIBLE | — |
| 236 | `17-§21-4` | §8.33 | `EC-KER-03`, `EC-KER-07`, `EC-PPM-04` | WS-A2, WS-C | CONDITIONAL | FDR-09, SEC-EIS10-12 |
| 237 | `17-§22-2` | §8.33 | `EC-PPM-03`, `EC-PPM-04`, `EC-TST-02` | WS-C, WS-H | CONDITIONAL | FDR-09, SEC-EIS10-12 |
| 238 | `17-§22-3` | §8.33 | `EC-EXT-01`, `EC-TST-02` | WS-A2, WS-H | FEASIBLE | — |
| 239 | `17-§22-9` | §8.33 | `EC-ISO-01`, `EC-TST-02` | WS-A3, WS-H | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| 240 | `17-§22-10a` | §8.33 | `EC-UX-02`, `EC-TST-02` | WS-E, WS-H | FEASIBLE | — |
| 241 | `7-§7` | §8.34 | `EC-PPM-05` | WS-C | FEASIBLE; FCTM partial; regression `VC-TEST-15` | — |
| 242 | `7-§9` | §8.34 | `EC-PPM-05` | WS-C | FEASIBLE | — |
| 243 | `7-§10-1` | §8.34 | `EC-ID-02`, `EC-PPM-02` | WS-A1, WS-C | FEASIBLE | — |
| 244 | `7-§10-2` | §8.34 | `EC-ID-02`, `EC-PPM-02`, `EC-PPM-03` | WS-A1, WS-C | CONDITIONAL | FDR-09, SEC-EIS10-12 |
| 245 | `7-§10-3` | §8.34 | `EC-ID-02`, `EC-PPM-02` | WS-A1, WS-C | FEASIBLE | — |
| 246 | `7-§10-4` | §8.34 | `EC-ID-03`, `EC-PPM-02` | WS-A1, WS-C | FEASIBLE | — |
| 247 | `7-§12` | §8.34 | `EC-KER-01`, `EC-PPM-01` | WS-A2, WS-C | FEASIBLE | — |
| 248 | `7-§15-10` | §8.34 | `EC-PPM-02`, `EC-TST-02` | WS-C, WS-H | FEASIBLE | — |
| 249 | `7-§15-12` | §8.34 | `EC-ISO-01`, `EC-TST-02` | WS-A3, WS-H | CONDITIONAL; FCTM partial; regression `VC-TEST-15` | G-6/T4 |
| 250 | `BP-§10.1-1` | §8.1 | `EC-ID-02`, `EC-TST-02` | WS-A1, WS-H | FEASIBLE | — |
| 251 | `BP-§10.1-2` | §8.2, §8.20 | `EC-ID-01`, `EC-ID-02` | WS-A1 | CONDITIONAL | — |
| 252 | `BP-§10.1-3` | §8.2 | `EC-KER-01`, `EC-KER-03`, `EC-PPM-03` | WS-A2, WS-C | FEASIBLE | FDR-09, SEC-EIS10-12 |
| 253 | `BP-§10.1-4` | §8.8 | `EC-KER-04`, `EC-AUT-01` | WS-A2 | FEASIBLE | — |
| 254 | `BP-§10.1-5` | §8.13 | `EC-KER-09`, `EC-CNF-02`, `EC-CNF-05`, `EC-TST-02` | WS-A2, WS-D, WS-H | CONDITIONAL | — |
| 255 | `BP-§10.1-6` | §8.3 | `EC-ID-06`, `EC-ISO-01` | WS-A1, WS-A3 | CONDITIONAL | G-6/T4 |
| 256 | `BP-§10.1-7` | §8.36 | `EC-ISO-01`, `EC-ISO-03`, `EC-ISO-10`, `EC-TST-03`, `EC-ENV-01` | WS-A3, WS-B, WS-H, WS-0 | CONDITIONAL | G-6/T4, SEC-EIS10-13 |
| 257 | `BP-§10.1-8` | §8.36, §13 | `EC-ISO-03`, `EC-ISO-10`, `EC-TST-03`, `EC-ENV-01` | WS-B, WS-A3, WS-H, WS-0 | CONDITIONAL | G-6/T4, SEC-EIS10-13 |
| 258 | `BP-§10.1-9` | §8.36 | `EC-TST-01`, `EC-TST-04` | WS-H | CONDITIONAL | — |
| 259 | `BP-§10.1-10` | §8.12 | `EC-KER-05` | WS-A2 | FEASIBLE | — |
| 260 | `BP-§10.1-11` | §8.35 | `EC-PPM-01`, `EC-PPM-02` | WS-C | FEASIBLE | — |
| 261 | `BP-§10.1-12` | §8.35 | `EC-PPM-06` | WS-C | FEASIBLE | — |
| 262 | `BP-§10.1-13` | §8.35 | `EC-ID-04`, `EC-PPM-05`, `EC-PPM-06`, `EC-ESC-08`, `EC-TST-04` | WS-A1, WS-C, WS-F, WS-H | CONDITIONAL | ESC-1, G-7 |
| 263 | `BP-§7-1` | §8.35 | `EC-PPM-05` | WS-C | CONDITIONAL | ESC-1 |
| 264 | `BP-§7-2` | §8.35 | `EC-PPM-05` | WS-C | FEASIBLE | — |
| 265 | `BP-§7-3` | §8.35 | `EC-PPM-05` | WS-C | FEASIBLE | — |
| 266 | `BP-§7-4` | §8.35 | `EC-PPM-05` | WS-C | FEASIBLE | — |
| 267 | `BP-§7-5` | §8.35 | `EC-PPM-06` | WS-C | FEASIBLE | — |

## 12. Coverage and Orphan Check

| Measure | Value |
|---|---|
| `IN SCOPE` FCTM rows | 267 |
| Rows mapped to at least one obligation | 267 of 267 |
| Rows missing an obligation | 0 |
| Obligations (one per EIS requirement) | 81 |
| Row-to-obligation links | 463 |
| Obligations with no FCTM row | 1: `EC-ENV-02`, an evidence item that adds no behaviour |
| Behaviour-adding orphan obligations | 0 |
| Cross-cutting rules (Section 8) and process obligations (Section 9) | 9 and 7; non-behavioural; each rule names the obligations it serves |
| Rows `BLOCKED` | 1 (`22-§20-2`) |
| Rows `CONDITIONAL` (Blueprint Section 20.5) | 87 |
| Rows execution-gated (`RUNTIME NOT AUTHORIZED`; `IN SCOPE`, not a scope deferral) | 22 |
| FCTM, Blueprint and EIS | Unchanged |

Method: the row set of Section 11 was compared by set difference with the FCTM `IN SCOPE` row set and with EIS Section 22.2. All three are identical. Each obligation's row list equals the EIS requirement-to-row mapping.

## 13. Package Observations and Dispositions

Observations raised at Stage 12 and their Mission Control dispositions (MC-166, MC-167). None changes a row, requirement or hold.

| ID | Topic | Observation |
|---|---|---|
| PQ-1 | Workstream placement — corrected (MC-167) | `EC-ISO-10` is assigned to WS-A3, with the authority and isolation enforcement cut-over. `EC-DEP-01` is Cross-cutting Governance / Consumer Gate: it is not an implementation builder workstream obligation, and Mission Control enforces it through dependency evidence before a later mission consumes a surface. No FCTM row changed; every row `EC-DEP-01` realizes also has a builder obligation in WS-A2. |
| PQ-2 | Technical hold state — corrected (MC-167) | `EC-LEG-02` is `BUILD — AUTHORIZATION GATED` and its neutral technical record-level hold state is allocated to WS-F. Schema work needs a separate migration mission. No legal category, legal basis, retention period, release authority, policy text, or production or legal conclusion is created. `NP-35` runs only in an authorized test or migration context with synthetic hold fixtures. |
| PQ-3 | Identity-deletion obligations — corrected (MC-167) | `EC-DEL-01` to `EC-DEL-06`: `BUILD — RUNTIME / AUTHORIZATION GATED`; `EC-DEL-07`: `VERIFICATION — RUNTIME GATED`; `EC-LEG-01`: `BUILD — LEGAL / RUNTIME GATED`; `EC-LEG-02`: `BUILD — AUTHORIZATION GATED`; `EC-LEG-03`: `EVIDENCE-ONLY / PROVIDER-LEGAL GATED`. All 22 affected rows stay `IN SCOPE` and `BUILD NOW`. `RUNTIME NOT AUTHORIZED` is an execution gate, not a scope deferral. |
| PQ-4 | Builder identity and migration authority — downstream prerequisites (MC-167) | Recorded as downstream prerequisites only: the Implementation Authorization must name builders per workstream (with paths, scope, tests, environment, rollback and evidence); schema-changing workstreams (WS-A1, WS-A2, WS-A3, WS-B, WS-C, WS-D, WS-E, WS-F, WS-G and the identity-deletion obligations) need a separate migration mission under `docs/migration/README.md`. Implementation remains withheld. |
| PQ-5 | Stale status paragraph in the locked EIS — resolved | Reported at package creation: EIS Section 23 read as a Stage 10 draft. Resolved by MC-166 (PR #699). No package change beyond identity references was needed. |
| PQ-6 | Carried formatting defect | EQ-S9-5 (a Metadata row before the H1 on line 1 of the locked Blueprint) remains open for Mission Control. It has no Product Truth effect. |
| PQ-7 | Literal line-break sequence in the EIS change log — resolved | Reported at publication. Resolved by MC-167 (PR #701): the EIS change-log formatting was corrected (0.4-L2), giving locked EIS blob `c444f7509477d0e8b997af538440d93bf2ca4d72`, which this package cites. |

## 14. Status

`DRAFT — MISSION CONTROL REVIEW REQUIRED`. Not approved, not locked, not an implementation authorization. ESC-1 stays OPEN T8; `22-§20-2` stays `BLOCKED` / `IN SCOPE`; G-6/T4 stays `UNVERIFIED`; professional legal, privacy and retention validation stays deferred; implementation, runtime and production Security proof is not established.

## 15. Change Log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-10-01 | Claude Code (MC-165, MC-166) | Initial Stage 12 draft. Before first publication, locked-EIS identity and baseline references updated to MC-166 and PQ-5 marked resolved; no row, obligation, check or count changed |
| 0.2 | 2026-10-01 | Claude Code (MC-167) | Stage 13 refinement: locked EIS blob `c444f750`; PQ-1 (`EC-ISO-10` to WS-A3, `EC-DEP-01` consumer gate), PQ-2 (`EC-LEG-02` to WS-F, authorization gated), PQ-3 (gated build classifications replace design-only), PQ-4 recorded as downstream prerequisites, PQ-7 resolved. No row, mapping, link or count changed |
