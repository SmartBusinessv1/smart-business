# SB-P-1.14 — Stage 10 Delta Storage / Provider Readiness Confirmation

**Appointment:** S10-D4  
**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media  
**Mode:** Read-only delta confirmation  
**Canonical authorization baseline:** `main@2a65d019f696eb941fbff490083ae2d98e124529`  
**Instruction:** `communication/missions/SB-P-1.14/mission-control/33-stage10-delta-storage-specialist-instruction.md`  
**Target PR:** #831  
**Target head:** `e858a18e00719aed6464822d684c6580fce1f9bf`  
**Target EIS blob:** `d97d23048f0dda76f3f60b0b03569a928d9e45d1`  
**Actor/session:** Independent Storage / Provider Readiness Delta Specialist

## 1. Scope and independence

This delta review is limited to:

- S10-SP4-01 / R10-STO-01;
- S10-SP4-02 / R10-STO-02;
- S10-SP4-03 / R10-STO-03 merged into R10-SEC-01;
- S10-SP4-04 / R10-STO-04.

No wider Stage 10 surface was reopened.

The current session did not author or materially contribute to the Stage 9 EIS. This session did author the earlier S7-SP-4 and S10-SP-4 storage/provider specialist reviews. That prior specialist contribution creates correlated-assumption risk, mitigated here by reviewing only the exact refined EIS blob and exact target head specified by Mission Control.

No live provider fact is inferred from prior knowledge or conversation. Provider facts requiring account/runtime access remain **UNVERIFIED — ACCESS REQUIRED**.

## 2. Delta conclusion

All four authorized storage/provider delta findings are **CLOSED** at the documentary EIS level.

The refined EIS now:

- makes server-mediated retrieval the safe default;
- does not treat ordinary signed URLs as immediately revocable without provider evidence;
- makes legal/dispute hold override lifecycle/deletion eligibility before deletion;
- requires durable Smart Business deletion/discard proof for asynchronous deletion without retaining deleted content;
- treats held metadata plus missing object as an integrity incident;
- uses object-type-specific birth-hardening for tables, views, functions/RPCs, sequences and default privileges;
- expresses secure-upload security outcomes without inventing unverified R2 presign/header mechanics;
- keeps the unresolved provider mechanics explicitly evidence-held under `DR2`.

No new Product Truth is introduced by these refinements.

---

## 3. Finding-by-finding disposition

### S10-SP4-01 / R10-STO-01 — Revocation-safe retrieval

**Disposition: CLOSED**

**Requirement reviewed:** `EIS14-RTV-01` with `EIS14-PRV-02`.

### Confirmation

The refined EIS now states:

- every retrieval is authorized by the kernel at request time;
- **server-mediated delivery is the default**;
- a direct bearer signed URL is allowed only when provider-specific `DR2` evidence proves an immediately revocable or authorization-indirection mechanism;
- short expiry alone is insufficient;
- authorization at issuance alone is insufficient;
- any intentional non-zero post-revocation access window returns to Mission Control as a T3 candidate.

This closes the original finding. The EIS no longer relies on an ordinary bearer signed URL as though it were immediately revocable.

### Evidence hold preserved

The EIS §28 register explicitly keeps:

**Any immediately revocable or authorization-indirection direct-delivery mechanism — UNVERIFIED — ACCESS REQUIRED**

### Affected FCTM rows

The existing 35 rows mapped to `EIS14-RTV-01` remain unchanged.

### Delta trigger screen

- T2: NOT TRIGGERED
- T3: NOT TRIGGERED; conditional only if a non-zero post-revocation window is later proposed
- T6: NOT TRIGGERED
- T7: NOT TRIGGERED
- T8: NOT TRIGGERED

---

### S10-SP4-02 / R10-STO-02 — Hold-safe lifecycle, deletion proof and integrity incident

**Disposition: CLOSED**

**Requirements reviewed:** `EIS14-RET-01`, `EIS14-STO-07`, `EIS14-PRV-02`.

### Confirmation

The refined EIS now requires that:

- legal/dispute hold is applied **before lifecycle eligibility**;
- held objects are excluded from expiring lifecycle treatment;
- hold release is an authorized and audited transition;
- provider lifecycle expiry is used only where evidence proves hold exclusion is possible;
- asynchronous provider deletion is reconciled to durable Smart Business discard/deletion proof;
- deletion/discard proof retains no deleted content;
- **held metadata with missing object is an integrity incident**;
- lifecycle and hold-exclusion capability remain provider-evidence-held;
- inability to produce a compliant mechanism returns to Mission Control as a conditional T8.

`EIS14-STO-07` additionally makes legal/dispute hold an overriding lifecycle flag that blocks deletion and lifecycle eligibility, and requires governed deletion to produce durable deletion proof.

This closes the original legal-hold/deletion-proof finding at the EIS level.

### Evidence hold preserved

EIS §28 explicitly records:

**R2 lifecycle-rule capability for transient staging, exclusion of held objects and asynchronous deletion behaviour — UNVERIFIED — ACCESS REQUIRED**

### Affected FCTM rows

The `EIS14-RET-01` 10-row set and `EIS14-STO-07` 10-row set remain unchanged.

### Delta trigger screen

- T2: NOT TRIGGERED
- T3: NOT TRIGGERED
- T6: NOT TRIGGERED
- T7: NOT TRIGGERED
- T8: NOT TRIGGERED; conditional if no compliant hold-aware bounded-discard mechanism can be established

---

### S10-SP4-03 / R10-STO-03 merged into R10-SEC-01 — Object-specific birth hardening

**Disposition: CLOSED**

**Requirement reviewed:** `EIS14-SEC-02`.

### Confirmation

The refined EIS no longer applies one generic "RLS enabled" rule to all PostgreSQL object types.

It now distinguishes:

- **Tables:** RLS, deny-by-default kernel-based policies, explicit grants, removal of unintended `PUBLIC`/`anon` access.
- **Views:** explicit grants and invoker-security semantics; owner-rights views are not exposed to caller roles.
- **Functions/RPCs:** `SECURITY INVOKER` by default; `SECURITY DEFINER` only under the locked SB-P-1.12 invariant with fixed owner, pinned `search_path`, explicit `EXECUTE`, and default `PUBLIC EXECUTE` revoked.
- **Sequences:** explicit inclusion in effective-access and default-privilege reconciliation.
- **Default privileges:** reconciled for each real creator role and relevant object class.
- **Atomic birth:** object creation/replacement plus grants, revokes, policies/security attributes and default-ACL reconciliation complete before use, followed by effective-access verification.

This is the object-type-specific hardening refinement required by the original S10-SP4-03 / MC10-PRE-01 finding.

### Evidence hold preserved

Live effective grants, policies, view semantics, sequence privileges, function identities/overloads, owners, creator-role default ACLs and bypass-capable roles remain:

**UNVERIFIED — ACCESS REQUIRED**

### Affected FCTM rows

The existing 60 `EIS14-SEC-02` rows remain unchanged.

### Delta trigger screen

- T2: NOT TRIGGERED
- T3: NOT TRIGGERED
- T6: NOT TRIGGERED
- T7: NOT TRIGGERED by this delta; the broader restorative Security refinement remains the separately Founder-approved Stage 10 T7 restoration
- T8: NOT TRIGGERED

---

### S10-SP4-04 / R10-STO-04 — Secure-upload outcomes without invented R2 mechanics

**Disposition: CLOSED**

**Requirements reviewed:** `EIS14-STO-02`, `EIS14-PRV-02`, `EIS14-ENV-01`.

### Confirmation

The refined EIS now specifies the required **security outcomes**:

- upload only to a server-authorized object key;
- bounded size;
- expected checksum or equivalent integrity evidence;
- narrowly scoped and short-lived upload authority;
- server-side post-upload verification of key, size and integrity before state becomes `verified`;
- origin-limited CORS.

Crucially, it no longer asserts that R2 can necessarily enforce key, length and checksum at presign/header level.

Instead it states that:

- exact provider presign/header enforcement is conditional on `DR2` evidence; and
- if provider enforcement is unavailable, **server-side verification carries the guarantee**.

This closes the original provider-assumption finding without weakening the security outcome.

### Evidence hold preserved

EIS §28 explicitly records:

**R2 CORS / presigned-upload behaviour (key, length and checksum enforcement at presign or header level) and credential scoping — UNVERIFIED — ACCESS REQUIRED**

### Affected FCTM rows

The existing 14 `EIS14-STO-02` rows remain unchanged.

### Delta trigger screen

- T2: NOT TRIGGERED
- T3: NOT TRIGGERED
- T6: NOT TRIGGERED
- T7: NOT TRIGGERED
- T8: NOT TRIGGERED

---

## 4. Provider evidence gating confirmation

The refined EIS truthfully separates documentary requirements from live provider readiness.

The following remain **UNVERIFIED — ACCESS REQUIRED** and are not treated as closed by this delta review:

- Cloudflare account / R2 availability / region / pricing;
- R2 lifecycle-rule capability;
- hold exclusion in provider lifecycle behavior;
- asynchronous deletion behavior;
- CORS behavior;
- presigned-upload key/length/checksum enforcement;
- provider credential scoping;
- immediately revocable or authorization-indirection direct delivery;
- provider durability and restore behavior;
- live provider configuration identity.

Closing the four Stage 10 documentary findings does **not** activate or prove R2 runtime readiness.

## 5. Final delta screen

| Finding | Result |
|---|---|
| S10-SP4-01 / R10-STO-01 | **CLOSED** |
| S10-SP4-02 / R10-STO-02 | **CLOSED** |
| S10-SP4-03 / R10-STO-03 → R10-SEC-01 | **CLOSED** |
| S10-SP4-04 / R10-STO-04 | **CLOSED** |

| Trigger | Result |
|---|---|
| T2 | **NOT TRIGGERED** |
| T3 | **NOT TRIGGERED** — conditional reopener remains for any intentional non-zero post-revocation window |
| T6 | **NOT TRIGGERED** |
| T7 | **NOT TRIGGERED by these storage delta refinements**; broader Founder-approved restorative Security T7 remains separately governed |
| T8 | **NOT TRIGGERED** — conditional reopener remains if compliant hold-aware lifecycle or revocation-safe delivery later proves infeasible |

## 6. Authority-boundary attestation

This delta confirmation did not:

- edit PR #831;
- edit the EIS;
- activate R2;
- activate or configure AWS;
- access or mutate Supabase;
- inspect production;
- create buckets;
- alter CORS;
- alter lifecycle rules;
- create or rotate provider credentials;
- implement storage;
- alter Product Truth;
- alter the locked Blueprint;
- alter the FCTM;
- authorize implementation;
- approve Stage 10.

Only this separate specialist delta-confirmation report was created.

**STOP FOR MISSION CONTROL DISPOSITION.**
