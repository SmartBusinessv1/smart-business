# SB-P-1.17 — Stage 10 SA-01 Documentary Security Review

**Mission:** SB-P-1.17 — Manager Operations  
**Stage:** Source 18 v1.2 Stage 10 — EIS Review  
**Review domain:** SA-01 — Security and Permissions Architecture  
**Reviewer:** Security & Permissions Architecture specialist room — ChatGPT / GPT-5.6 Sol  
**Mode:** READ-ONLY DOCUMENTARY SECURITY REVIEW  
**Status:** REVIEW COMPLETE — REFINEMENT REQUIRED — AWAITING MISSION CONTROL DISPOSITION  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. Reviewer qualification, independence and limitations

I am an AI technical reviewer, not a licensed human security auditor, penetration tester, lawyer, Indian privacy professional or POS practitioner.

I did not author the SB-P-1.17 Blueprint, FCTM, Founder decisions or Stage 9 EIS. I previously performed the Stage 7 SA-01 documentary security review and therefore have prior mission familiarity. That prior participation is disclosed: this is an independent non-author specialist review, but not a first-contact blind review.

I can assess authorization architecture, delegated capabilities, RLS and database privilege design, service-role boundaries, tenant isolation, confirmation binding, authority serialization, revocation, field-level financial protection, AI/tool authorization and negative-test completeness. I cannot attest deployed enforcement, legal compliance, POS-provider behavior or professional audit conformity.

No runtime tests, SQL, migrations, provider connections, production access, Supabase mutation, external POS access, secrets access or operator-data processing were performed.

## 2. Exact review target and source manifest

The review was performed against protected main at:

- main: 976806ffb1cbaad74fe3a9868d2c8f873bed5a47
- immutable EIS: docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md
- EIS blob: 8280967f2805cfed17778da3fc76c90b2f2f5ead

Authoritative and review inputs:

| Source | Blob / identity |
|---|---|
| Locked SB-P-1.17 Blueprint | bc4615f84959a79e6b242f622aae928901fbe959 |
| Canonical SB-P-1.17 FCTM | cb79088d3fa59f8b3226fd9d11ff9c9573666670 |
| Founder decisions 17:FPDR-1 to 17:FPDR-6 | 90b7ca1d43fd1d89fa5b8fd4cce30320fb7c00d4 |
| Founder decision 17:FPDR-7 | e9f2cacb87e9625cf349172704f6f3e74589d687 |
| Locked SB-P-1.12 EIS | c444f7509477d0e8b997af538440d93bf2ca4d72 |
| Locked SB-P-1.13 EIS | 9a1e723d4874011b6870a680f2a2080154537c30 |
| Source 18 v1.2 | 0945bda60a93c99909c3b7a247d5427ebe256011 |
| MC-410A reconciliation | efd5ead00d21f360882a1dab2ab50e4a0a0f2acf |
| MC-411B POS revenue interpretation | 94f005fc643fd14d79d836e023f081731662b317 |
| Stage 7 consolidated specialist assurance | ba6a091537a198278a4f4218b943b3fa07bf9b37 |
| MC-432 Stage 10 review contract | fad5a75a3f81009c563c9b47459be246fc610490 |
| MC-441A SA-01 authorization | 39a9c478bc335df90fa9bc1e92e77cfe63ba9a27 |
| SA-01 eligibility disclosure | fc00df7c54cebfecc4dcb5d1b287c7126613a5b0 |

The exact EIS blob requested by Mission Control was available and reviewed. No mutable substitute was used.

## 3. Executive security disposition

### REFINEMENT REQUIRED

The Stage 9 EIS preserves the major approved security boundaries correctly and materially improves the Stage 7 design. In particular:

- no fifth POS integration principal is invented;
- capability 5 remains Owner-reserved and non-delegable;
- standing-rule creation remains a separate Owner-only authority;
- Manager capabilities are separated and role alone creates no authority;
- Owner financial intelligence remains deny-by-default to Managers and Employees;
- Reference Cost and margin remain separate permissions;
- protected cost is intended to be excluded before unauthorized retrieval;
- supplier participants remain object-scoped and isolated;
- every protected read/command consumes the SB-P-1.12 kernel;
- consequential commits revalidate current authority;
- revocation invalidates prepared work;
- conversation/AI authorization occurs before retrieval;
- protected cached/history content is reauthorized;
- RLS/default grants are designed fail-closed;
- service_role possession is not treated as authority.

However, the EIS is not yet security-complete for Stage 11 lock. Four matters require Mission Control disposition, three of which require finding-scoped EIS refinement:

1. MC410-R01 remains an explicit HIGH blocker for authenticated API/webhook POS intake.
2. EQ17-01 leaves the exact Manager scope-constraint representation unresolved even though 17:FPDR-1 requires assigned item/supplier/counter scope.
3. EQ17-02 leaves the Manager Reference Cost path unresolved and explicitly blocks that approved delegated path.
4. EIS17-VER-02 references the 53-case SA-01 negative matrix only as a Stage 10 proposal; before EIS Lock the accepted negative contract must become normative and immutable.

No Source 18 T1–T8 trigger is established by this review. T8 remains a WATCH where already recorded. Any future change to the SB-P-1.12 principal taxonomy must be screened separately rather than inferred here.

## 4. Security coverage matrix

| Review area | EIS evidence | Disposition |
|---|---|---|
| One authorization authority | EIS17-ARC-01, AUTH-01; SB-P-1.12 EIS-KER-01 | SATISFIED DOCUMENTARILY |
| Server-derived principal | AUTH-01; SB-P-1.12 EIS-KER-02 | SATISFIED DOCUMENTARILY |
| Seven capability identities | AUTH-02; 17:FPDR-1 | SATISFIED, subject to scope finding SA01-S10-F02 |
| Capability 5 | AUTH-02, CTR-06 | SATISFIED; SA-01-F01 remains closed |
| Standing-rule authority | RO-05, AUTH-02 | SATISFIED DOCUMENTARILY |
| Manager default deny | AUTH-02, AUTH-04; EIS-KER-03/-04 | SATISFIED DOCUMENTARILY |
| Employee/staff financial isolation | AUTH-03, AUTH-04, CC-07, AI-04 | SATISFIED DOCUMENTARILY |
| Reference Cost / margin separation | AUTH-03, SUP-03 | SECURITY RULE SOUND; path still held by SA01-S10-F03 |
| Supplier isolation | SUP-01, SUP-07 | SATISFIED DOCUMENTARILY |
| Business tenant isolation | AUTH-08; EIS-ISO-07 | SATISFIED DOCUMENTARILY |
| Confirmation binding | RO-03, SUP-04; EIS-CNF-01/-02 | SATISFIED DOCUMENTARILY |
| Execution-time revocation | AUTH-06, TXN-11; EIS-KER-09/EIS-CNF-02 | SATISFIED DOCUMENTARILY |
| AI/tool authorization before retrieval | AI-01, AI-04, AI-05; EIS13-AUTH-02, CTX-02/-03 | SATISFIED DOCUMENTARILY |
| Cache/history revocation | AI-04, WS-06 | SATISFIED DOCUMENTARILY |
| RLS/default grants/effective privileges | SEC-01 to SEC-04 | SATISFIED AS DESIGN; runtime evidence absent |
| Privileged/service-role paths | POS-02 plus SB-P-1.12 EIS-ISO-04 | HELD for POS intake under MC410-R01 |
| POS API/webhook business binding | POS-02, HOLD-15 | BLOCKED / UNRESOLVED DEPENDENCY |
| Negative security tests | VER-02 | REFINEMENT REQUIRED before lock |
| U-11 operator data | CTR-06, PRIV-01/-02, HOLD-20 | HELD; professional legal/privacy validation open |

## 5. Finding SA01-S10-F01 — MC410-R01 POS intake authority remains unresolved

**Severity:** HIGH  
**Classification:** unresolved dependency / hard security hold  
**Confidence:** HIGH  
**Requirements:** EIS17-POS-02, EIS17-HOLD-15, EIS17-ARC-03, EIS17-SEC-01 to SEC-03  
**Locked architecture:** SB-P-1.12 EIS-KER-02, EIS-KER-06, EIS-ID-05, EIS-ISO-04  
**Prior finding:** SA-01-F02 / MC410-R01

### Evidence

EIS17-POS-02 correctly states that:

- POS source authentication and merchant authorization are distinct;
- a source is bound to exactly one business;
- external provider references are EIS-ID-05 records, not principals;
- EIS-KER-02 contains no integration principal;
- integration is a channel under EIS-KER-06;
- service-role paths must follow EIS-ISO-04;
- no fifth principal is assumed;
- the authorization route for intake writes remains open.

EIS17-HOLD-15 correctly says this blocks approval of the API/webhook intake path.

### Security judgment

The EIS has correctly repaired the Stage 7 contradiction. There is no longer an unsafe invented integration principal.

The remaining issue is not a wording defect; it is an unresolved authorization dependency. The bridge cannot safely accept authenticated provider input into protected merchant state until a kernel-compatible acting-authority model exists.

Authentication of the POS/provider proves source identity only. It must not become Owner, Manager, participant or merchant authority by implication.

### Failure mode if the hold were bypassed

Possible failures include:

- service_role treated as merchant authority;
- source credential accepted as business authorization;
- request-supplied business ID selecting a merchant;
- source mapped to Business A mutating Business B;
- a parallel POS permission engine outside authz.authorize;
- an unversioned fifth principal class;
- revocation unable to serialize against intake writes.

### Minimum acceptable correction / resolution

Before Stage 11 lock of the API/webhook path, Mission Control must obtain one of these governed outcomes:

1. a safe design using an already-approved SB-P-1.12 authority primitive, with exact business/action/object binding and EIS-ISO-04 predicates; or
2. a separately governed upstream SB-P-1.12 amendment defining any genuinely new principal type, including its identity proof, business binding, capabilities, serialization epochs, revocation, audit and negative-test matrix.

The SA-01 reviewer does not choose either architecture.

The EIS must then specify the exact authorization route rather than leave it open.

### Correction owner

SB-P-1.12 authority owner with SB-P-1.17 EIS owner.

### Trigger screen

- T1: not established.
- T2: not established; the conflict is already represented as a dependency, not silently contradicted.
- T3–T7: not established.
- T8: WATCH only. If no safe route can be expressed within approved architecture, return to Mission Control for T8 disposition.

### Disposition

**OPEN — BLOCKS SECURITY ACCEPTANCE OF API/WEBHOOK POS INTAKE.**

## 6. Finding SA01-S10-F02 — Manager scope constraints are not yet an executable EIS contract

**Severity:** HIGH  
**Classification:** unsafe design / EIS under-specification  
**Confidence:** HIGH  
**Requirements:** EIS17-AUTH-02, EIS17-RO-03, EIS17-AUTH-08, EIS17-VER-02  
**Open item:** EQ17-01  
**Locked Product Truth:** 17:FPDR-1  
**Upstream architecture:** EIS-KER-01, EIS-KER-04, EIS-KER-08, EIS-KER-09, EIS-ISO-07

### Evidence

17:FPDR-1 requires capabilities 1, 2, 3, 4, 6 and 7 to be separately grantable and limited to assigned items, suppliers or counters. Capability 2 may also carry an Owner-set value ceiling.

EIS17-AUTH-02 repeats those constraints, but states that scope encoding remains EQ17-01.

The unresolved matrix also records EQ17-01 as open and routes it to the EIS with SB-P-1.12.

### Security judgment

The high-level boundary is correct, but the EIS does not yet define enough to prove it can be enforced consistently at every read and command.

A capability name without a canonical scope representation is insufficient for an EIS whose approved behavior depends on assignment-level restriction.

The missing design must prevent:

- a client choosing its own assignment;
- one grant widening another;
- an item-scoped capability becoming supplier-wide or business-wide;
- capability 2 confirmation bypassing its Owner-set value ceiling;
- Business A scope identifiers being replayed in Business B;
- cache/history reuse outside the current scope;
- revocation leaving stale scoped authorization active.

### Minimum correction

EIS17-AUTH-02 should be refined to define, at minimum:

- canonical scope-constraint types for item, supplier and counter;
- server-authoritative assignment/object membership;
- how multiple grants combine;
- exact action/object checks for capabilities 1–7;
- value-ceiling units and comparison point for capability 2;
- business binding on every scoped identifier;
- expiry and revocation behavior;
- authority-epoch impact when assignment or grant scope changes;
- denial behavior for out-of-scope objects;
- no client/model/provider field may create or widen scope.

The representation may reuse SB-P-1.12 capability-grant primitives; no parallel permission store is permitted.

### Correction owner

SB-P-1.17 EIS owner with SB-P-1.12 authority owner.

### Trigger screen

No T1–T8 trigger established. This is engineering completion of already-approved Product Truth, not a new product decision.

### Disposition

**FINDING-SCOPED EIS REFINEMENT REQUIRED BEFORE SECURITY ACCEPTANCE OF MANAGER DELEGATION.**

## 7. Finding SA01-S10-F03 — Manager Reference Cost path remains held and incomplete

**Severity:** HIGH for the delegated cost path; no impact on cost-denied users if the hold is respected  
**Classification:** unresolved dependency plus EIS under-specification  
**Confidence:** HIGH  
**Requirements:** EIS17-AUTH-03, EIS17-SUP-03, EIS17-AI-04, EIS17-SEC-01/-03  
**Open item:** EQ17-02  
**Locked Product Truth:** 17:FPDR-4, 12:FR-04, 12:FR-09  
**Upstream EIS:** SB-P-1.12 EIS-PPM-02, EIS-PPM-03, EIS-PPM-04

### Evidence

The EIS correctly states:

- supplier purchase prices are Reference Cost information;
- no Manager sees them without explicit permission;
- Reference Cost and margin are separate;
- unauthorized callers must not receive the protected column;
- the rule applies to dashboard, RPC, export, Ask CFO, conversation, background readers and caches.

The locked SB-P-1.12 EIS already defines catalog.cost.read and a field-level projection model for Reference Cost.

However EIS17-AUTH-03 still leaves the projection mechanism / authority_basis change path open under EQ17-02, and Section 28 states that this blocks Manager Reference Cost.

### Security judgment

The denial boundary is sound. The unresolved part is the positive delegated read path.

That is acceptable only while the capability stays held. It is not sufficient for Stage 11 lock of the Manager Reference Cost behavior because 17:FPDR-4 expressly permits that delegated behavior.

The EIS must not solve this by:

- granting direct SELECT on cost-bearing rows;
- relying on UI hiding;
- allowing a service-role reader to return full rows and redact afterward;
- widening cost-write authority merely to enable cost-read authority;
- inferring margin permission from Reference Cost.

### Minimum correction

The EIS must define the exact SB-P-1.17 cost reader/projection contract for supplier purchase-price history and its relationship to SB-P-1.12 catalog.cost.read.

At minimum:

- no protected cost field is selected or returned to an unauthorized caller;
- every direct, batch, search, export, AI, cache and privileged response uses the governed projection;
- object/business scope is enforced before cost leaves the data layer;
- cost-read and cost-write authority stay separate;
- existing Owner-only authority_basis constraints are not silently weakened;
- any required upstream schema/authority change is separately owned and held;
- effective privileges and exact function signatures are included in the security test inventory.

### Correction owner

SB-P-1.17 EIS owner with SB-P-1.12 Product & Price Master authority owner.

### Trigger screen

No T1–T8 trigger established if the correction only implements the already-approved Reference Cost permission. Any proposed new cost-write delegation or new margin output requires separate governance screening.

### Disposition

**FINDING-SCOPED EIS REFINEMENT / DEPENDENCY RESOLUTION REQUIRED BEFORE MANAGER REFERENCE COST CAN BE SECURITY-ACCEPTED.**

## 8. Finding SA01-S10-F04 — negative security matrix is referenced but not yet normative

**Severity:** MEDIUM  
**Classification:** proposed technical control requiring Stage 10 acceptance and EIS binding  
**Confidence:** HIGH  
**Requirements:** EIS17-VER-02, EIS17-SEC-01 to SEC-03, EIS17-AUTH-01 to AUTH-08  
**Prior evidence:** Stage 7 SA-01 Section 10, 53-case negative matrix

### Evidence

EIS17-VER-02 says rows with a NEG seed receive named negative tests and includes the SA-01 Section 10 permission matrix “as a Stage 10 proposal.”

Section 29 likewise identifies that matrix as a proposal.

The matrix itself is durable in the Stage 7 specialist evidence and includes 53 cases covering capability isolation, capability 5, standing rules, cost/margin, supplier isolation, confirmation/revocation and POS/integration boundaries.

### Security judgment

The proposed matrix is materially adequate for the assigned SA-01 boundary, but a Stage 11-locked EIS should not depend on an external specialist proposal whose acceptance status remains ambiguous.

The accepted negative contract should become normative either by:

- incorporating the cases into the EIS; or
- referencing an immutable exact-source artifact and explicitly stating that the accepted matrix is mandatory verification evidence.

Equivalent or stronger tests are acceptable; silent weakening is not.

### Minimum mandatory negative coverage

Before EIS Lock, the security test contract must explicitly cover at least:

#### Capability and scope

- Manager with no grants cannot exercise capabilities 1–7.
- Each individual grant does not imply any other grant.
- Item, supplier and counter scopes deny out-of-scope objects.
- Business A grant cannot authorize Business B.
- value-ceiling bypass is denied.
- expired/revoked grant fails on next protected read and at commit.

#### Capability 5 / staff isolation

- Manager role alone cannot read operator-attributed detail.
- capability 4 does not imply capability 5.
- a direct attempt to grant capability 5 to a Manager fails.
- direct RPC/reader access to operator detail fails for Manager/Employee.
- Ask CFO / conversation cannot retrieve operator detail for unauthorized users.
- Employee cannot retrieve another staff member's anomaly analysis.
- Employee cannot retrieve Reference Cost, margin or Owner-level closing intelligence.

#### Reference Cost / margin

- no cost via dashboard, RPC, export, Ask CFO, conversation, background reader or cache without catalog.cost.read;
- cost grant is object/business scoped;
- cost grant does not imply margin;
- margin permission does not imply raw cost;
- revocation removes protected cached/history output.

#### Confirmation and revocation

- different actor/business/target fails;
- changed material proposal requires new confirmation;
- stale confirmation after grant revocation fails;
- concurrent confirmation commits once;
- stale conversational “yes” cannot execute;
- historical supplier attribution cannot replay against another transaction/supplier.

#### RLS and effective access

- PUBLIC, anon, authenticated, service_role, executor roles and real creator-role default privileges are inventoried;
- direct authenticated RPC cannot bypass authz.authorize;
- every function overload/signature has intended EXECUTE only;
- SECURITY DEFINER, if any, cannot widen business/object scope;
- service_role possession alone creates no merchant authority.

#### POS / provider boundary

- invalid source authentication fails before mutation;
- valid source credential plus forged business_id fails;
- source mapped to Business A cannot read/write Business B;
- provider payload cannot set actor, role, capability or authorization decision;
- unknown/unbound source creates no protected effect;
- duplicate event yields one outcome;
- any future new principal type receives its own cross-business/cross-scope matrix.

### Correction owner

SB-P-1.17 EIS owner / Stage 10 security reviewer disposition, with verification owner at later authorized implementation stages.

### Trigger screen

No T1–T8 trigger established. This makes the verification contract explicit; it does not alter Product Truth.

### Disposition

**FINDING-SCOPED DOCUMENTARY REFINEMENT REQUIRED BEFORE EIS LOCK.**

## 9. Authorization and capability assessment

### Seven capability identities

The EIS correctly carries all seven identities from 17:FPDR-1.

Capabilities 1, 2, 3, 4, 6 and 7 are separately delegable. Capability 5 is Owner-reserved and non-delegable. No capability implies another.

This satisfies the prior SA-01-F01 correction. No regression found.

### Standing-rule authority

EIS17-RO-05 correctly treats standing-rule creation as Owner-only and separate from the seven Manager capabilities. Runtime authority derives from the stored rule and current grantor authority through EIS-AUT-01.

A trigger is expressly not permission.

**Disposition: no finding.**

### Confirmation binding

EIS17-RO-03 binds actor, business, item, supplier, quantity, value and suggestion version. Commit revalidates under EIS-CNF-02.

EIS17-SUP-04 uses an exact transaction/supplier confirmation binding for historical attribution.

These are consistent with SB-P-1.12 EIS-CNF-01/-02 and SB-P-1.13 EIS13-CNF-01/-02.

**Disposition: no finding.**

## 10. Staff and financial isolation

The locked Blueprint states that Employees perform permitted operational tasks only and receive no Owner intelligence. It also keeps operator-attributed detail Owner-only.

The EIS implements that boundary through:

- EIS17-AUTH-03 — protected Reference Cost and margin projections;
- EIS17-AUTH-04 — Owner intelligence deny-by-default for Employees;
- EIS17-CTR-06 — operator detail Owner-only and U-11 held;
- EIS17-CC-07 — no Owner-level closing intelligence for Employees;
- EIS17-AI-04 — Owner-only facts never enter unauthorized model context.

Staff/HR views themselves belong to SB-P-1.18 and are not built by SB-P-1.17. This review therefore does not invent salary/payroll authority here.

No EIS text grants Employee access to Owner profit, Reference Cost, margin, Ask CFO financial intelligence, other-staff anomaly analysis or Owner-level closing intelligence.

**Disposition: SATISFIED DOCUMENTARILY, subject to the normative negative-test refinement and U-11 legal/privacy hold.**

## 11. RLS, database grants and privileged paths

EIS17-SEC-01 to SEC-03 are aligned with the locked SB-P-1.12 security architecture:

- new objects start birth-safe;
- PUBLIC, anon and authenticated do not inherit accidental access;
- RLS is enabled before intended grants;
- function EXECUTE is neutralized before intended grants;
- fixed search_path is required;
- SECURITY INVOKER is the default;
- any definer path uses the narrow executor model;
- effective privileges are verified as database state, including creator defaults.

EIS17-AUTH-01 requires every read and command to call authz.authorize with a server-derived principal and prohibits a new owner_id policy model.

For privileged paths, the locked EIS-ISO-04 rule remains mandatory. service_role bypass of RLS is not authority.

The one unresolved privileged path is POS intake, already captured by SA01-S10-F01.

**Disposition: design sound; no runtime/effective-grant PASS claimed.**

## 12. Revocation and stale-authority assessment

EIS17-AUTH-06 and TXN-11 correctly consume EIS-KER-09 and EIS-CNF-02.

A revoked or changed grant before commit stops:

- prepared reorder confirmations;
- standing-rule runs;
- queued imports;
- pending confirmations.

Authority epochs serialize consequential commits so stale prepared state cannot commit after revocation.

AI/history reuse is also current-authority based through EIS17-AI-04 and EIS13-CTX-03.

**Disposition: SATISFIED DOCUMENTARILY.**

## 13. AI, prompt injection and retrieval boundary

The EIS correctly preserves SB-P-1.13 rather than creating a parallel AI authority model.

Relevant controls:

- typed tools and server-side validation: AI-01;
- Ask CFO read-only: AI-02;
- authorization before context retrieval: AI-04;
- cache/history reauthorization: AI-04;
- model output is untrusted data: ARC-03 / EIS13-CTX-01;
- must-not rules enforced below the model: AI-05.

A prompt cannot create a capability, widen scope, expose cost, expose operator detail or execute a write without the governed confirmation path.

**Disposition: SATISFIED DOCUMENTARILY.**

## 14. Supplier isolation

EIS17-SUP-01 and SUP-07 correctly reuse the SB-P-1.12 participant model and EIS-EXT-02 / EIS-ISO-07.

A supplier receives only its own request content and receives no dashboard capability, other-supplier records, merchant stock, cost, counter or closing data.

No merchant-wide supplier network or cross-business participant access is introduced.

**Disposition: SATISFIED DOCUMENTARILY.**

## 15. MC410-R01 explicit answer

MC410-R01 is **not resolved by the current EIS**.

That is the correct current status.

The current EIS does not repeat the Stage 7 error. It recognizes:

- four-principal SB-P-1.12 taxonomy;
- integration as channel only;
- provider/business records as identity references only;
- source authentication as different from authorization;
- service-role path requirements;
- no fifth principal assumption.

But it has no final kernel-compatible authority route for API/webhook intake.

Therefore:

**MC410-R01 remains OPEN and blocks approval of the API/webhook intake path.**

## 16. Trigger screen

| Trigger | SA-01 result |
|---|---|
| T1 | NOT ESTABLISHED |
| T2 | NOT ESTABLISHED |
| T3 | NOT ESTABLISHED |
| T4 | NOT ESTABLISHED |
| T5 | NOT ESTABLISHED |
| T6 | Existing WATCH preserved; SA-01 creates no new T6 condition |
| T7 | NOT ESTABLISHED |
| T8 | WATCH only. No impossibility proven; MC410-R01 and atomicity/source dependencies may escalate if later proven infeasible |

No Founder decision is made or requested by this report at present.

## 17. Open security questions and dependencies

1. **MC410-R01:** which approved principal/authority route legally and technically binds API/webhook POS intake?
2. **EQ17-01:** exact representation and evaluation of assigned item/supplier/counter scopes and capability-2 value ceiling.
3. **EQ17-02:** exact supplier-cost projection and required upstream authority_basis change, without widening cost-write authority.
4. **U-11:** professional India legal/privacy determination for identifiable operator processing.
5. **DPOS/DSEC:** real-source authentication and secret-home behavior remain provider-dependent and unverified.
6. **D12/D13:** upstream authorization and AI kernels remain specifications, not deployed evidence.
7. **Effective grants/RLS:** no live state has been inspected in this review.
8. **Negative test matrix:** accepted cases must become normative before EIS Lock.

## 18. Evidence limitations

This review establishes documentary architecture assurance only.

Not verified:

- deployed authz.authorize behavior;
- live RLS policies;
- actual database grants/default privileges;
- function owner / SECURITY DEFINER state;
- service-role handler inventory;
- cache invalidation runtime;
- authority-epoch concurrency;
- confirmation consumption under race;
- POS authentication implementation;
- provider credential rotation/revocation;
- external source mapping;
- production/test environment state;
- U-11 legal basis or retention;
- CI or runtime execution of the negative matrix.

Mechanical Section 30 traceability is not treated as semantic security proof.

## 19. Final SA-01 disposition

### REFINEMENT REQUIRED

The core security model is coherent with SB-P-1.12 and SB-P-1.13 and preserves the Founder-approved Manager/Owner boundaries.

Security Room does **not** approve the EIS for Stage 11 lock in its present form because:

- MC410-R01 still blocks the API/webhook POS intake authority path;
- EQ17-01 leaves the exact scoped Manager grant model unresolved;
- EQ17-02 leaves the approved Manager Reference Cost path unresolved;
- VER-02 must convert the accepted SA-01 negative matrix into a normative immutable verification contract.

These are finding-scoped Stage 10 corrections/dependency resolutions. They do not justify restarting Stage 9 wholesale and do not change Product Truth.

SA-01-F01 remains CLOSED with no regression.

No EIS approval, EIS Lock, Product Truth change, code, SQL, migration, deployment, runtime test, provider action or POS connection is authorized by this report.

**STOP FOR MISSION CONTROL SA-01 DISPOSITION.**
