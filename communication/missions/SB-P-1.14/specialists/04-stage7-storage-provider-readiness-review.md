# SB-P-1.14 — Stage 7 Storage / Provider Readiness Specialist Review

**Specialist:** S7-SP-4 — Storage / Provider Readiness  
**Actor/session:** ChatGPT Infrastructure / Provider Operations room, current session  
**Review mode:** Independent, read-only specialist review  
**Canonical review baseline:** `main@cdb94b21284ba18d3bee523009eb4dbe3e8d7b11`  
**Instruction:** `communication/missions/SB-P-1.14/mission-control/17-stage7-storage-provider-specialist-instruction.md`  
**Authorized output:** this report only  
**Provider/runtime mutation:** None

## 1. Independence statement

This room/session did **not** author or materially contribute to SB-P-1.14 Blueprint Sections 1–19 or to the SB-P-1.14 Stage 6 Builder Review.

Prior Smart Business contribution in this room/session was to **SB-P-1.12 administrative recovery / provider continuity work**, including Supabase, Lovable, Resend, VS Code, GitHub tooling, business-email/domain recovery, and related Track D evidence. It did not define SB-P-1.14 Product Truth, Blueprint Sections 1–19, FCTM dispositions, or the Stage 6 Builder Review.

### Correlated-assumption risk

There is a **moderate correlated-assumption risk** because this room has prior familiarity with Supabase/provider continuity and with the separation between provider identity and Smart Business authority. Mitigation applied in this review:

- conclusions are grounded only in the canonical SB-P-1.14 repository evidence at the stated baseline;
- no prior provider-session observation is used to establish R2/AWS/runtime facts;
- unknown provider/runtime facts remain exactly **UNVERIFIED — ACCESS REQUIRED**;
- no live provider login, configuration, purchase, activation or runtime inspection was performed.

**Independence established: YES.**

## 2. Scope and evidence reviewed

Read-only review covered the storage/provider readiness topics required by the instruction:

- provider-independent object identity;
- server-side credentials;
- control-plane/object-store separation;
- R2 activation gate;
- signed access and revocation window;
- two-phase ingest;
- orphan states;
- FPDR-2 lifecycle/discard;
- raw voice non-retention by default;
- provider lifecycle capability;
- rollback/outage handling;
- AWS S3 transient staging boundary;
- provider facts requiring access.

Primary evidence:

1. `docs/phase-1-mission-blueprint/active/SB-P-1.14.md`
   - storage design §8.5;
   - failure containment §8.7;
   - FPDR-2;
   - acceptance §15;
   - Section 11 boundaries.
2. `communication/missions/SB-P-1.14/claude-code/02-stage2-populated-fctm.md`
3. `communication/missions/SB-P-1.14/claude-code/08-stage6-builder-review.md`
   - B6-08;
   - B6-09;
   - B6-15;
   - B6-17;
   - E-09 / E-12.
4. `communication/missions/SB-P-1.14/mission-control/10-stage6-builder-review-gate-and-founder-handover.md`
5. `communication/missions/SB-P-1.14/founder/03-post-stage6-founder-product-decision-record.md`

### Baseline note

The specialist instruction file itself still names an older embedded canonical baseline, `feb0f522...`. The present Mission Control invocation names `cdb94b21284ba18d3bee523009eb4dbe3e8d7b11`, and that commit was verified and used for this review.

This is an **INFO scope-control observation only**. It does not alter Product Truth, Blueprint content or any FCTM disposition.

## 3. Overall specialist conclusion

**Storage/provider readiness is CONDITIONALLY READY FOR STAGE 7 ENGINEERING SPECIFICATION, but not ready for provider activation or implementation proof.**

The architecture direction is sound and internally consistent:

- Smart Business/Supabase remains the authoritative control plane;
- durable object bytes are separated from business authority;
- object identity is provider-independent;
- provider URLs/keys are not authority;
- R2 activation is correctly isolated behind `DR2`;
- raw voice is not durably retained by default;
- AWS S3 remains a transient-processing seam only;
- no existing repository implementation falsely claims R2 readiness.

However, four engineering details must remain explicit Stage 7 held items:

1. signed-access revocation window;
2. two-phase ingest + orphan/reconciliation state machine;
3. FPDR-2 discard timing before SB-P-1.15 Scheduler exists;
4. rollback/outage state handling.

And all live provider facts remain:

**UNVERIFIED — ACCESS REQUIRED**

This review does **not** authorize R2/AWS/Supabase/provider activation.

---

## 4. Findings summary

| ID | Finding | Severity | Stage 7 status | Trigger screen |
|---|---|---:|---|---|
| S7-SP4-01 | Provider-independent identity and control-plane/object-store separation are correctly specified | INFO / PASS | Carry into EIS unchanged | None |
| S7-SP4-02 | Signed retrieval must have an explicit revocation window | MEDIUM | **HELD for Stage 7/EIS** | None |
| S7-SP4-03 | Two-phase ingest and orphan/reconciliation states must be explicit | MEDIUM | **HELD for Stage 7/EIS** | None |
| S7-SP4-04 | FPDR-2 discard timing needs a compliant mechanism before shared Scheduler | MEDIUM | **HELD; potential T8 only if no compliant mechanism exists** | T8 conditional |
| S7-SP4-05 | Raw voice non-retention default is correctly preserved | INFO / PASS | Carry into EIS unchanged | None |
| S7-SP4-06 | R2/provider runtime facts remain unverified and activation-gated | INFO / GATE | **HELD at DR2** | None |
| S7-SP4-07 | Rollback/outage handling needs explicit end-to-end storage states | MEDIUM | **HELD for Stage 7/EIS** | None |
| S7-SP4-08 | Existing AWS S3 parser path remains a transient seam, not durable storage | INFO / NO FINDING | Preserve boundary | None |

---

## 5. Detailed findings

### S7-SP4-01 — Provider-independent identity and control-plane/object-store separation

**Severity:** INFO / PASS  
**Stage 7 effect:** No blocker; preserve exactly in engineering specification.

### Evidence

Blueprint §8.5 specifies:

- Cloudflare R2 as Founder-approved primary object store for eligible binary files;
- Supabase / Smart Business as authoritative for ownership, actor, permissions, metadata, linkage, lifecycle, retention state, retrieval authorization and audit;
- internal object identity as provider-independent;
- provider keys and URLs as infrastructure details, never authority;
- provider activation/credentials/failure/rollback/verification behind `DR2`.

Blueprint §11.3 also explicitly rejects provider URLs as permission authority/business identity and rejects uncontrolled binary-media concentration in Supabase.

### Affected FCTM rows

Primary:

- `25-§4-1` through `25-§4-12`
- `25-§5-1`, `25-§5-2`
- `25-§14-1` through `25-§14-7`
- `25-§15-1` through `25-§15-4`
- `BP-§5.4-1`
- `BP-§6.3-2`
- `BP-§10.3-W9`
- `BP-§10.3-W10`
- rejection row `BP-§16-15`

### Specialist assessment

The authority split is appropriate and materially reduces provider lock-in and authorization confusion.

No Product Truth conflict found.

### Trigger screen

**None.**

---

### S7-SP4-02 — Signed retrieval requires an explicit revocation window

**Severity:** MEDIUM  
**Stage 7 effect:** **HELD for Stage 7/EIS.**

### Evidence

Stage 6 B6-08 correctly identifies that a signed object URL remains usable until its expiry even when application permission is revoked.

Blueprint §8.7 requires current-permission retrieval and says revocation must be honored.

### Risk

A long-lived signed URL could outlive a permission revocation and temporarily bypass the intended current-permission check even though initial issuance was authorized.

### Required Stage 7 refinement

Engineering must choose one of the following or an equivalent controlled mechanism:

- short-lived signed URLs with a stated maximum validity window; or
- a server-side proxy/retrieval path that revalidates permission on each access; or
- another mechanism that demonstrates equivalent revocation behavior.

The EIS must state the actual revocation window and where current permission is revalidated.

### Affected FCTM rows

- `25-§19-1` through `25-§19-8`
- `25-§26-11`
- `21-§17` (delegated permission-change/revalidation boundary)
- `BP-§5.4-1`

### Trigger screen

**None.**

This is an engineering refinement, not a new Product Truth decision.

---

### S7-SP4-03 — Two-phase ingest and orphan/reconciliation states must be explicit

**Severity:** MEDIUM  
**Stage 7 effect:** **HELD for Stage 7/EIS.**

### Evidence

Blueprint §8.5 states ingest is not complete until authoritative metadata and linkage exist.

Stage 6 B6-08 and B6-17 identify the need to prevent an object/metadata mismatch from appearing as a successful completed document.

Existing parser lease evidence provides a useful state-machine precedent.

### Required Stage 7 refinement

The EIS must define explicit states for at least:

- upload authorized / lease issued;
- object uploaded;
- metadata pending;
- metadata created;
- interpretation pending;
- confirmed/linkage pending;
- complete;
- rejected;
- expired;
- failed;
- orphaned object;
- orphaned metadata;
- outcome unknown / reconciliation required.

The exact naming may differ, but engineering must prove:

- no "completed" document exists without both durable object and authoritative metadata/linkage;
- retry is idempotent;
- reconciliation can detect object-without-metadata and metadata-without-object;
- cleanup cannot delete confirmed evidence;
- audit survives retry/repair.

### Affected FCTM rows

- `25-§8-1` through `25-§8-11`
- `25-§9-1` through `25-§9-8`
- `25-§20-1` through `25-§20-14`
- `25-§21-1` through `25-§21-5`
- `25-§26-7`, `25-§26-8`, `25-§26-13`, `25-§26-14`
- `5-§17-*`
- `22-§19-*`

### Trigger screen

**None.**

---

### S7-SP4-04 — FPDR-2 discard timing before the shared Scheduler exists

**Severity:** MEDIUM  
**Stage 7 effect:** **HELD; conditional T8 trigger.**

### Evidence

FPDR-2 requires:

- rejected/abandoned/expired unconfirmed originals to remain only for a short bounded operational grace period;
- discard after that grace period unless an approved legal/hold basis applies;
- raw voice not to be durably retained by default.

The shared Scheduler belongs to SB-P-1.15, after this mission.

Stage 6 B6-09 correctly identifies possible compliant mechanisms that do not require a forbidden feature-specific scheduler, such as transient staging plus provider lifecycle expiry.

### Specialist assessment

No T8 is triggered now because a plausible compliant design path exists.

However, the actual provider lifecycle capability is unverified, so Stage 7 cannot claim that the mechanism is deployable on R2 today.

### Required Stage 7 refinement

The EIS must select and justify a mechanism that satisfies FPDR-2 without creating a feature-specific scheduler. Acceptable design categories include:

- object-store lifecycle expiry for transient unconfirmed objects;
- promotion to durable storage only after confirmation;
- bounded transient staging plus later reconciliation;
- another mechanism consistent with FPDR-2 and MC-Q4.

Metadata must preserve enough lifecycle state to distinguish:

- unconfirmed transient;
- confirmed durable;
- discarded;
- hold-protected;
- reconciliation-required.

### Affected FCTM rows

- `5-§6-1`
- `5-§16-3`
- `25-§12-1`
- `25-§12-3`
- `25-§14-6`
- `25-§17-6`
- `25-§21-1` through `25-§21-5`
- `25-§26-12`
- `22-§28-4`

### Trigger screen

**Conditional T8 only.**

Trigger T8 if Stage 7 engineering proves that no compliant bounded-discard mechanism can exist before SB-P-1.15 without:

- violating FPDR-2;
- building a feature-specific scheduler;
- or materially changing approved product behavior.

Until then: **NO T8.**

---

### S7-SP4-05 — Raw voice non-retention default is correctly preserved

**Severity:** INFO / PASS  
**Stage 7 effect:** Preserve in EIS and acceptance.

### Evidence

Blueprint §8.5 and FPDR-2 state:

- raw voice audio is not durably retained by default;
- durable raw-audio retention requires a separately approved product purpose;
- cheap storage is not sufficient justification.

Stage 6 B6-09 also carries forward SB-P-1.13 transient voice behavior.

### Affected FCTM rows

- `12-§15` delegated boundary, particularly raw-audio retention behavior
- `5-§16-3`
- `25-§12-1`
- `25-§12-3`
- `25-§17-6`
- `25-§26-12`

### Specialist assessment

No storage design should create a default raw-voice durable object merely because R2 becomes available.

Any later durable voice retention requires a separate approved purpose and cannot be inferred from provider capability.

### Trigger screen

**None.**

---

### S7-SP4-06 — R2/provider/runtime facts remain unverified and activation-gated

**Severity:** INFO / GATE  
**Stage 7 effect:** **HELD at DR2.**

### Evidence

Stage 6 B6-15 records provider facts as:

**UNVERIFIED — ACCESS REQUIRED**

No R2 client, storage bucket, storage policy, signed-URL implementation or R2 credential exists in the repository evidence reviewed.

The Blueprint correctly says provider activation, credentials, failure behavior, rollback and verification are a separate environment gate.

### Facts that remain UNVERIFIED — ACCESS REQUIRED

Because this specialist review is explicitly read-only and prohibits provider access, the following remain unverified:

- Cloudflare account state;
- R2 availability on the intended account;
- R2 bucket existence;
- account/subscription prerequisites;
- region/location behavior applicable to the intended design;
- object lifecycle-rule capability in the intended account/configuration;
- credential creation and scope;
- effective provider-side access policy;
- live signed-access behavior;
- live rollback/restore procedure;
- live outage/failure behavior;
- any existing R2 runtime state.

No assertion should be made that any of these are ready.

### Affected FCTM rows

All rows carrying `DR2`, including especially:

- `BP-§5.4-1`
- `BP-§6.3-2`
- `BP-§10.3-W9`
- `BP-§10.3-W10`
- Contract 25 storage/acceptance rows in §4–§26.

### Specialist disposition

Stage 7 may specify the adapter/control-plane design, but provider activation and runtime acceptance must remain blocked by `DR2` until separately authorized access evidence exists.

### Trigger screen

**None.**

Provider uncertainty is a gate, not a Founder Product Truth conflict.

---

### S7-SP4-07 — Rollback and outage handling need explicit end-to-end states

**Severity:** MEDIUM  
**Stage 7 effect:** **HELD for Stage 7/EIS.**

### Evidence

Blueprint §8.7 requires storage/provider outage containment and prohibits claiming durable-storage success when object and metadata disagree.

Stage 6 B6-17 identifies unresolved states across:

- upload outage;
- AI/parser outage while preview exists;
- confirmed write with unknown outcome;
- durable-copy failure after confirmation.

### Required Stage 7 refinement

The EIS must specify recovery behavior for at least:

1. provider unavailable before upload;
2. upload succeeds but metadata write fails;
3. metadata exists but object upload fails;
4. interpretation fails after object storage;
5. confirmation succeeds but durable linkage result is unknown;
6. retrieval provider outage;
7. cleanup/lifecycle operation fails;
8. rollback after partial provider activation;
9. provider credential invalidation/rotation event.

Rules that must remain true:

- never delete a confirmed business record as compensation for a storage failure;
- never claim durable proof when storage state is uncertain;
- retries remain idempotent;
- audit history remains continuous;
- provider outage does not silently weaken permission checks.

### Affected FCTM rows

- `5-§17-1` through `5-§17-11`
- `25-§20-1` through `25-§20-14`
- `25-§21-1` through `25-§21-5`
- `22-§19-1` through `22-§19-7`
- `22-§29-10`
- `22-§29-13`
- `24-§23-6`

### Trigger screen

**None.**

---

### S7-SP4-08 — AWS S3 parser staging remains transient only

**Severity:** INFO / NO FINDING  
**Stage 7 effect:** Preserve the boundary.

### Evidence

Stage 6 E-09 records an existing S3 presigned-upload parser path:

- object key bound;
- length/checksum bound;
- lease constrained to CSV/XLSX;
- Lambda deletes the object after parsing;
- path is unwired to UI.

Stage 6 Lens 15 found no defect and Blueprint §8.2 states the existing AWS S3 staging/Lambda parser may serve only as an optional transient-processing seam after engineering/provider review and never as the durable store.

### Affected FCTM rows

This is primarily a boundary affecting:

- UDI ingest rows in Contract 5;
- `BP-§10.3-W4`;
- Contract 25 durable-storage separation rules;
- `BP-§6.3-2`.

### Specialist assessment

No evidence supports treating the current S3 parser staging as durable Business Memory.

Do not broaden it to image/PDF durable storage by implication.

If Stage 7 reuses the seam, it must remain:

- transient;
- purpose-limited;
- lease-bound;
- cleanup-governed;
- separate from the durable R2 identity/control-plane design.

### Trigger screen

**None.**

---

## 6. Provider-readiness checklist disposition

| Review item | Specialist result |
|---|---|
| Provider-independent object identity | **PASS — design established** |
| Server-side credentials | **PASS as requirement; implementation/provider state unverified** |
| Control-plane/object-store separation | **PASS — design established** |
| R2 activation gate | **PASS — correctly gated by DR2** |
| Signed access/revocation window | **HELD — Stage 7/EIS must specify mechanism and maximum window** |
| Two-phase ingest | **HELD — explicit state machine required** |
| Orphan states | **HELD — explicit detection/reconciliation states required** |
| FPDR-2 lifecycle/discard | **HELD — mechanism required before shared Scheduler** |
| Raw voice non-retention | **PASS — preserve default non-retention** |
| Provider lifecycle capability | **UNVERIFIED — ACCESS REQUIRED** |
| Rollback/outage handling | **HELD — explicit state model required** |
| AWS S3 transient staging boundary | **PASS / NO FINDING — transient only** |
| Live provider facts | **UNVERIFIED — ACCESS REQUIRED** |

## 7. Stage 7 held findings

The following must remain held into Stage 7 engineering and may not be silently treated as resolved:

1. **S7-SP4-02 — signed-access revocation window**
2. **S7-SP4-03 — two-phase ingest + orphan/reconciliation states**
3. **S7-SP4-04 — FPDR-2 bounded discard mechanism**
4. **S7-SP4-06 — DR2 live provider facts**
5. **S7-SP4-07 — rollback/outage state handling**

### Potential Founder trigger

Only S7-SP4-04 has an identified conditional Founder trigger:

- **T8 only if** engineering finds no compliant mechanism for bounded discard before SB-P-1.15 without violating FPDR-2 or the no-feature-specific-scheduler rule.

No T8 is triggered by this review.

## 8. No-change / no-access attestation

This specialist review did **not**:

- log into Cloudflare;
- inspect or configure R2;
- purchase or activate a provider product;
- log into AWS;
- inspect or mutate S3;
- access Supabase provider/runtime state;
- inspect credentials;
- create or rotate keys;
- alter lifecycle rules;
- alter storage policies;
- access production;
- execute SQL or migrations;
- edit Product Truth;
- edit Blueprint Sections 1–19;
- edit FCTM rows;
- edit Founder decisions;
- edit code;
- edit migration files.

The only repository change proposed by this specialist is this Stage 7 review report at the authorized specialist-report path.

## 9. Mission Control disposition

**Specialist recommendation: PROCEED WITH STAGE 7 ENGINEERING SPECIFICATION, SUBJECT TO THE HELD ITEMS ABOVE.**

Do not activate R2 or rely on any live provider capability from this review.

All provider facts requiring live account/runtime inspection remain:

**UNVERIFIED — ACCESS REQUIRED**

**STOP FOR MISSION CONTROL DISPOSITION.**
