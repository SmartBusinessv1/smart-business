# SB-P-1.14 — Stage 10 EIS Storage / Provider Readiness Specialist Review

**Appointment:** S10-SP-4  
**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media  
**Stage:** 10 — EIS Review  
**Actor/session:** ChatGPT Infrastructure / Provider Operations room, current session  
**Review target:** PR #831 at head `254e40a723e4c74af69d425cb918bb03dc9817e2`  
**EIS blob reviewed:** `20fd97177348ad9b02bbb8d1be9e53f05ad18bde`  
**Instruction:** `communication/missions/SB-P-1.14/mission-control/25-stage10-eis-storage-specialist-instruction.md`  
**Mode:** Independent read-only specialist confirmation  
**Provider/runtime access:** None  
**EIS mutation:** None

## 1. Independence

This current actor/session did **not** author or materially contribute to the Stage 9 EIS under review.

This room did author the earlier **Stage 7 S7-SP-4 Storage / Provider Readiness specialist report** for SB-P-1.14, which the Stage 10 instruction explicitly permits. This room also previously contributed to SB-P-1.12 administrative-recovery/provider-continuity work.

### Correlated-assumption risk

Correlated-assumption risk is **moderate** because the same specialist domain was reviewed at Stage 7.

Mitigations used here:

- the Stage 9 EIS was reviewed independently against its exact PR head and blob;
- the specialist did not assume the Stage 7 recommendations were correctly implemented merely because the EIS cites them;
- live Cloudflare, R2, AWS, Supabase and production facts were not inferred from prior conversations;
- unavailable live facts remain exactly **UNVERIFIED — ACCESS REQUIRED**.

**Independence established: YES.**

---

## 2. Scope reviewed

The review covered the instruction-required storage/provider surfaces:

- provider-independent object identity;
- Smart Business/Supabase control-plane authority;
- two-phase ingest;
- metadata/object states;
- orphan reconciliation;
- R2 / `DR2` activation gate;
- provider credentials;
- CORS / presigned-upload assumptions;
- revocation-safe delivery;
- `FPDR-2` bounded discard;
- raw-voice non-retention;
- provider lifecycle capability;
- legal/retention-hold interaction;
- deletion-proof semantics;
- backup / restore;
- outage / rollback;
- provider/runtime unknowns;
- fidelity to Stage 7 S7-SP-4 findings;
- Mission Control preliminary finding **MC10-PRE-01**.

**MC10-PRE-02 is not a storage/provider-readiness finding and was not independently re-reviewed here.**

---

## 3. Executive conclusion

**Stage 10 storage/provider acceptance should be HELD pending three blocking EIS refinements and one provider-assumption refinement.**

The EIS faithfully carries much of the Stage 7 storage design:

- provider-independent internal object identity is preserved;
- provider keys/URLs are not authority;
- Smart Business remains the control plane;
- R2 activation remains gated;
- credentials are server-side only;
- two-phase ingest and orphan reconciliation are explicitly modeled;
- raw voice remains non-durable by default;
- backup/restore and outage handling are evidence-held;
- provider/runtime unknowns remain `UNVERIFIED — ACCESS REQUIRED`.

However, four material issues remain:

1. **EIS14-RTV-01** cannot presently guarantee zero post-revocation exposure through an ordinary bearer signed URL merely by rechecking issuance. The safe rule is present, but the signed-URL implementation option is still under-specified and provider capability is unverified.
2. **EIS14-RET-01** can conflict with legal/dispute hold and deletion-proof semantics because provider lifecycle deletion on a transient prefix does not inherently consult Smart Business hold state.
3. **EIS14-SEC-02** applies RLS language to tables, views and functions as though they share one hardening primitive. They do not. MC10-PRE-01 is valid and requires object-type-specific semantics.
4. **EIS14-STO-02** hard-codes presigned PUT binding to key, length and checksum before the target R2 CORS/SigV4/header behavior has been evidenced. The security outcome is appropriate; the exact provider mechanism must stay conditional until proven.

No Product Truth change is required to resolve these findings.

---

# 4. Findings

## S10-SP4-01 — Revocation-safe signed delivery is not yet an implementable guarantee

**Severity:** HIGH  
**Exact EIS requirement(s):** `EIS14-RTV-01`, supported by `EIS14-STO-04`, `EIS14-PRV-02`, `EIS14-ENV-01`  
**Blocks Stage 10 acceptance:** **YES**

### Affected FCTM rows

`3-§9-13`, `3-§10-1`, `3-§10-6`, `3-§10-7`, `3-§10-8`, `3-§10-9`, `3-§19-9`, `5-§6-3`, `5-§6-4`, `5-§6-5`, `5-§6-6`, `5-§6-7`, `5-§6-8`, `5-§6-9`, `5-§6-11`, `5-§18-7`, `25-§9-1`, `25-§9-2`, `25-§9-3`, `25-§9-4`, `25-§9-5`, `25-§9-6`, `25-§9-7`, `25-§9-8`, `25-§19-7`, `25-§20-7`, `25-§20-13`, `25-§26-2`, `25-§26-3`, `25-§26-11`, `10-§5-10`, `10-§10-7`, `17-§12-1`, `17-§12-2`, `BP-§10.3-X`.

### Evidence

`EIS14-RTV-01` correctly requires authorization at retrieval time and correctly says that a short expiry alone is not revocation.

It then permits either:

- a server proxy; or
- a provider-signed URL whose issuance is rechecked and whose validity cannot outlive revocation.

The requirement's security objective is correct. The problem is the second mechanism: rechecking authorization **when issuing** a bearer URL does not itself invalidate a URL already issued if authorization is revoked afterwards.

The EIS does not define any provider mechanism that can make an already-issued signed URL cease working immediately on Smart Business revocation.

The EIS itself also records provider signed-access behavior as unavailable live evidence and leaves the delivery mechanism as an open engineering question.

### Required refinement / evidence hold

Refine `EIS14-RTV-01` so that:

1. **server-mediated retrieval is the safe default** until a provider-specific zero-window revocation mechanism is proven; and
2. a direct signed URL may be used only if separately evidenced to be revocable or cryptographically/indirection-bound to a Smart Business authorization state that can be invalidated on revocation.

An ordinary time-limited bearer URL must not be treated as satisfying post-revocation safety merely because its issuance was authorized.

Provider capability remains:

**UNVERIFIED — ACCESS REQUIRED**

### T2/T3/T6/T7/T8 screen

- T2: **NOT TRIGGERED**
- T3: **NOT TRIGGERED now**; if Mission Control intentionally accepts a non-zero post-revocation access window, the EIS itself correctly identifies a T3 candidate.
- T6: **NOT TRIGGERED**
- T7: **NOT TRIGGERED**
- T8: **NOT TRIGGERED now**; conditional only if no compliant delivery mechanism can meet the approved revocation semantics.

---

## S10-SP4-02 — FPDR-2 lifecycle deletion is not sufficiently hold-aware and deletion-proof-aware

**Severity:** HIGH  
**Exact EIS requirement(s):** `EIS14-RET-01`, `EIS14-RET-03`, `EIS14-STO-05`, `EIS14-STO-07`, `EIS14-CAB-03`  
**Blocks Stage 10 acceptance:** **YES**

### Affected FCTM rows

Primary bounded-discard rows:

`5-§6-1`, `5-§16-3`, `22-§10-5`, `25-§12-1`, `25-§12-3`, `25-§14-6`, `25-§16-1`, `25-§16-2`, `25-§17-6`, `25-§26-12`.

Retention/legal-hold interaction rows:

`25-§4-8`, `25-§10-11`, `25-§16-2`, `25-§17-5`, `25-§17-6`, plus the overlapping rows above carried by `EIS14-RET-03`.

### Evidence

`FPDR-2` allows unconfirmed originals to be discarded after a bounded operational grace period **unless an approved legal/hold basis applies**.

`EIS14-RET-03` correctly references the SB-P-1.12 record-class registry and legal-hold mechanism.

However, `EIS14-RET-01` says unconfirmed uploads remain in a transient staging prefix and may be automatically expired by the object store's lifecycle capability.

A provider lifecycle rule on a prefix does not inherently know that Smart Business metadata has placed a specific object under legal/dispute hold.

Therefore, unless the EIS defines the interaction, the following race is possible:

1. an unconfirmed object is in an expiring transient prefix;
2. Smart Business applies a legal/dispute hold in metadata;
3. provider lifecycle still expires the underlying object;
4. metadata says held while the held evidence has been deleted.

The EIS also says metadata is marked `discarded` on next access or reconciliation, but it does not explicitly require a durable deletion/discard proof record for asynchronous provider lifecycle deletion.

SB-P-1.12 already defines:

- legal/dispute hold as suspending deletion/minimization; and
- bounded deletion proof independent of the deleted identity row.

The Stage 9 EIS must preserve those semantics for media objects.

### Required refinement / evidence hold

Refine `EIS14-RET-01` / `RET-03` to require:

- legal/dispute hold **atomically prevents lifecycle eligibility** before provider deletion can occur;
- a held transient object must be moved/copied/promoted, re-tagged, or otherwise excluded from the expiring lifecycle class before the lifecycle deadline;
- release of hold is an authorized transition before deletion becomes eligible again;
- provider lifecycle deletion is reconciled into a durable Smart Business deletion/discard proof containing at least object identity, rule/basis, time/outcome and audit reference without retaining the deleted content;
- reconciliation must detect "metadata says held but object missing" as an integrity incident, not normal discard.

The exact provider mechanism remains:

**UNVERIFIED — ACCESS REQUIRED**

### T2/T3/T6/T7/T8 screen

- T2: **NOT TRIGGERED**
- T3: **NOT TRIGGERED**
- T6: **NOT TRIGGERED** — this is a faithful engineering realization of already-approved hold/deletion semantics.
- T7: **NOT TRIGGERED**
- T8: **NOT TRIGGERED now**; conditional if provider lifecycle cannot be made hold-safe without violating FPDR-2 or another approved constraint.

---

## S10-SP4-03 — MC10-PRE-01 is valid: EIS14-SEC-02 uses one RLS formula for different PostgreSQL object types

**Severity:** HIGH  
**Exact EIS requirement(s):** `EIS14-SEC-02`  
**Mission Control preliminary item:** **MC10-PRE-01 — CONFIRMED**  
**Blocks Stage 10 acceptance:** **YES**

### Affected FCTM rows

The 60 `H-BIRTH` / `EIS14-SEC-02` rows:

`3-§9-8`;  
`5-§6-1`, `5-§6-2`;  
`5-§15-1` through `5-§15-11`;  
`22-§10-1` through `22-§10-7`;  
`25-§4-2` through `25-§4-11`;  
`25-§10-1` through `25-§10-12`;  
`25-§23-1` through `25-§23-12`;  
`25-§26-1`;  
`17-§12-1`;  
`BP-§10.3-W5`;  
`BP-§10.3-W8`;  
`BP-§10.3-W10`.

### Evidence

`EIS14-SEC-02` currently says:

> Every new table, view and function is created with RLS enabled...

That is not a valid uniform PostgreSQL hardening rule.

- RLS is a table policy mechanism.
- Views require their own ownership/security-invoker or equivalent access semantics and grants.
- Functions require EXECUTE-grant control, owner/search-path discipline and, where `SECURITY DEFINER` is used, explicit definer-safety constraints.

Treating all three object classes as "RLS enabled" creates an implementation ambiguity and risks a false sense of birth safety.

### Required refinement / evidence hold

Replace the one-size-fits-all wording with object-type-specific birth-safe requirements, while preserving the same approved security intent:

- **tables:** RLS enabled before exposure, policies/grants explicit, `PUBLIC`/`anon` revoked as required;
- **views:** explicit owner and grants, safe invoker/definer semantics appropriate to the view, no unintended bypass of underlying RLS;
- **functions:** `PUBLIC` EXECUTE revoked unless intentionally allowed, intended roles explicitly granted, safe owner/search_path, and `SECURITY DEFINER` only under the established privileged-function invariants;
- **all objects:** creator-role default privileges reconciled and effective access verified in the same migration boundary.

This is an engineering correction, not a Product Truth change.

### T2/T3/T6/T7/T8 screen

- T2: **NOT TRIGGERED**
- T3: **NOT TRIGGERED**
- T6: **NOT TRIGGERED**
- T7: **NOT TRIGGERED**
- T8: **NOT TRIGGERED** — the issue is readily refinable and does not prove infeasibility.

---

## S10-SP4-04 — Presigned PUT binding is specified more strongly than current provider evidence supports

**Severity:** MEDIUM  
**Exact EIS requirement(s):** `EIS14-STO-02`, `EIS14-PRV-02`, `EIS14-ENV-01`  
**Blocks Stage 10 acceptance:** **YES, as a specification precision issue**

### Affected FCTM rows

`25-§8-1`, `25-§8-2`, `25-§8-3`, `25-§8-4`, `25-§8-5`, `25-§8-6`, `25-§8-7`, `25-§8-8`, `25-§8-9`, `25-§8-10`, `25-§8-11`, `25-§26-1`, `25-§26-6`, `25-§26-7`.

### Evidence

`EIS14-STO-02` mandates that the object is uploaded by a presigned PUT "bound to key, length and checksum."

The EIS separately acknowledges that:

- R2 CORS behavior;
- presigned-upload behavior; and
- credential scoping

are **UNVERIFIED — ACCESS REQUIRED**.

The existing AWS parser seam is useful precedent, but it is not evidence that the exact same browser/R2 signed-header mechanics are available in the intended deployment.

The desired security properties are sound:

- object key is pre-authorized;
- size is bounded;
- content integrity is verified;
- upload authority is narrow;
- metadata remains authoritative.

But the exact provider mechanism should not be asserted as already feasible before the provider gate.

### Required refinement / evidence hold

Express `EIS14-STO-02` in outcome terms and make the exact presign/header mechanism conditional:

- authorized object key;
- explicit maximum size;
- expected checksum recorded before or during upload;
- server-side verification after upload before `verified`;
- least-privilege upload credential or presigned grant;
- CORS limited to the actual application origins and required methods/headers.

Then require the `DR2` evidence pack to prove whether R2 can enforce the chosen key/size/checksum mechanism exactly as designed.

Until then:

**UNVERIFIED — ACCESS REQUIRED**

### T2/T3/T6/T7/T8 screen

- T2: **NOT TRIGGERED**
- T3: **NOT TRIGGERED**
- T6: **NOT TRIGGERED**
- T7: **NOT TRIGGERED**
- T8: **NOT TRIGGERED now**; conditional only if no compliant secure-upload mechanism exists.

---

## S10-SP4-05 — Stage 7 storage findings are otherwise faithfully carried

**Severity:** INFO / CONFIRMATION  
**Exact EIS requirement(s):** `EIS14-STO-01`, `STO-03`, `STO-05`, `STO-06`, `STO-07`, `RET-02`, `PRV-02`, `FAIL-01`, `FAIL-03`, `ENV-01`  
**Blocks Stage 10 acceptance:** **NO**, subject to the blocking refinements above.

### Evidence

The Stage 9 EIS correctly carries the Stage 7 storage/provider conclusions that:

- internal object identity is provider-independent;
- Smart Business metadata/authority is the control plane;
- provider keys and URLs are not business authority;
- privileged storage handlers require caller-derived authority;
- orphan comparison/reconciliation exists and cannot delete confirmed records;
- raw voice is not durably stored by default;
- R2 activation is a separate `DR2` evidence gate;
- credentials stay server-side;
- provider failure maps to explicit typed state;
- compensation cannot delete a confirmed record;
- backup/durability/restore assumptions remain evidence-held;
- AWS S3 remains an optional transient processing seam only.

### Required refinement / evidence hold

No new refinement beyond S10-SP4-01 through -04.

All live provider facts continue to remain evidence-held.

### T2/T3/T6/T7/T8 screen

No trigger is newly fired by this confirmation.

---

## S10-SP4-06 — Backup/restore and rollback are correctly held, not falsely asserted

**Severity:** INFO / EVIDENCE HOLD  
**Exact EIS requirement(s):** `EIS14-STO-06`, `EIS14-PRV-02`, `EIS14-FAIL-01`, `EIS14-FAIL-03`  
**Blocks Stage 10 acceptance:** **NO as an EIS defect; YES for later runtime/provider acceptance until evidence exists**

### Affected FCTM rows

`25-§22-1`, `25-§22-2`, `25-§22-3`, `25-§22-4`, `25-§22-5`, `25-§22-6`, `25-§26-13`, plus the storage-failure rows mapped to `EIS14-FAIL-01` / `FAIL-03`.

### Evidence

The EIS does not claim live backup, PITR, restore or provider durability readiness.

It explicitly marks:

- backup/PITR/restore readiness;
- storage provider durability and restore behavior;
- provider activation/rollback evidence

as unavailable until later access.

This is faithful to Stage 7.

### Required refinement / evidence hold

Retain:

**UNVERIFIED — ACCESS REQUIRED**

Runtime acceptance must later prove:

- coordinated metadata/object restoration;
- one-sided restore behavior;
- provider disable/rollback behavior;
- retrieval of already-verified objects during new-upload disable where intended.

### Trigger screen

No T2/T3/T6/T7/T8 trigger now.

---

# 5. UNVERIFIED — ACCESS REQUIRED register

This specialist did not log into or inspect Cloudflare, R2, AWS, Supabase or production.

The following remain unavailable and must not be inferred:

- Cloudflare account state;
- R2 product availability;
- R2 region/location behavior;
- pricing;
- bucket existence;
- environment separation;
- lifecycle-rule capability;
- lifecycle selectors/tag behavior needed for legal-hold exclusion;
- CORS behavior;
- presigned PUT/SigV4 behavior and supported signed headers;
- credential scope and rotation behavior;
- direct signed-delivery revocation capability;
- provider durability guarantees;
- backup/restore behavior;
- outage behavior;
- monitoring;
- disable-switch runtime behavior;
- live storage policies/grants;
- AWS parser account and S3 lifecycle;
- accepted provider configuration identity;
- production/test runtime state.

Every such fact remains:

**UNVERIFIED — ACCESS REQUIRED**

---

# 6. Stage 7 hold fidelity

| Stage 7 S7-SP-4 item | Stage 9 realization | Stage 10 result |
|---|---|---|
| Provider-independent identity/control plane | EIS14-STO-01 | **PASS** |
| Signed-access revocation window | EIS14-RTV-01 | **REFINEMENT REQUIRED — S10-SP4-01** |
| Two-phase ingest | EIS14-STO-02 | **PASS design; provider mechanism refinement required — S10-SP4-04** |
| Orphan/reconciliation | EIS14-STO-05 | **PASS** |
| FPDR-2 bounded discard | EIS14-RET-01 | **REFINEMENT REQUIRED — S10-SP4-02** |
| Raw voice non-retention | EIS14-RET-02 | **PASS** |
| DR2 provider evidence | EIS14-PRV-02 | **PASS as hold** |
| Rollback/outage state handling | EIS14-FAIL-01/-03, PRV-02 | **PASS as design/evidence hold** |
| AWS transient staging boundary | EIS14-UDI-04 + §28 hold | **PASS** |

The Stage 9 EIS does **not** silently change the Stage 7 product boundary, but the four refinements above are required before storage/provider specialist acceptance.

---

# 7. Mission Control preliminary findings

## MC10-PRE-01 — object-type-specific hardening semantics in EIS14-SEC-02

**Specialist disposition: CONFIRMED.**

Mission Control's preliminary concern is valid. The refinement should distinguish tables, views and functions rather than applying "RLS enabled" to all object types.

## MC10-PRE-02 — sales/income vs purchases/expenses in EIS14-TOT-01

**Specialist disposition: NOT APPLICABLE TO S10-SP-4 SCOPE.**

No storage/provider conclusion is offered on MC10-PRE-02.

---

# 8. Trigger screen

| Trigger | Specialist result |
|---|---|
| T2 — approved-source conflict | **NOT TRIGGERED** |
| T3 — new Product Truth / merchant-visible behavior | **NOT TRIGGERED now**; intentional non-zero post-revocation window remains a T3 candidate |
| T6 — material derived constraint | **NOT TRIGGERED**; findings refine engineering realization of existing approved constraints |
| T7 — omission/deferral/reclassification | **NOT TRIGGERED** |
| T8 — conflict/infeasibility/security-integrity conflict | **NOT TRIGGERED now**; conditional if provider capability cannot satisfy revocation or hold-safe discard without violating approved constraints |

---

# 9. Stage 10 acceptance disposition

**S10-SP-4 STORAGE / PROVIDER SPECIALIST RESULT: CHANGES REQUIRED BEFORE STAGE 10 ACCEPTANCE.**

Blocking refinements:

1. make revocation-safe delivery implementation-realistic and evidence-gated;
2. make FPDR-2 provider lifecycle explicitly legal-hold-safe and deletion-proof-aware;
3. correct EIS14-SEC-02 to object-type-specific birth-safe semantics;
4. make the exact presigned PUT key/length/checksum mechanism conditional on provider evidence while preserving the security outcomes.

These corrections do not require a Founder Product Truth decision.

After those EIS refinements, the storage/provider specialist can re-review the delta without reopening unrelated SB-P-1.14 surfaces.

---

# 10. No-mutation attestation

This review did **not**:

- edit PR #831;
- edit the Stage 9 EIS;
- edit the locked Blueprint;
- edit the FCTM;
- edit Founder records;
- edit code;
- edit SQL;
- edit migrations;
- log into Cloudflare/R2;
- log into AWS;
- log into Supabase;
- inspect production;
- create/configure buckets;
- create credentials;
- alter CORS;
- alter lifecycle rules;
- purchase or activate provider services;
- mutate any provider/runtime state.

Only this independent Stage 10 specialist report was created on a separate specialist-review branch.

**STOP FOR MISSION CONTROL DISPOSITION.**
