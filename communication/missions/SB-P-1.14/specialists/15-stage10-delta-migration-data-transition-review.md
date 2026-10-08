# SB-P-1.14 — Stage 10 Delta Confirmation  
## S10-D5 — Migration / Data-Transition Safety

**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media  
**Mode:** Read-only delta confirmation only  
**Canonical authorization baseline used:** `main@2a65d019f696eb941fbff490083ae2d98e124529`  
**Target PR:** #831  
**Exact reviewed PR head:** `e858a18e00719aed6464822d684c6580fce1f9bf`  
**Exact reviewed EIS blob:** `d97d23048f0dda76f3f60b0b03569a928d9e45d1`  
**Instruction:** `communication/missions/SB-P-1.14/mission-control/34-stage10-delta-migration-specialist-instruction.md`  
**Authority:** Delta confirmation only. No migration execution, Supabase mutation, implementation, Product Truth/FCTM change, PR edit, EIS edit, or Stage 10 approval.

## 1. Scope confirmation

Reviewed only the authorized migration deltas:

- `S10M-01 / R10-MIG-01`, merged into `R10-SEC-01`;
- `S10M-02 / R10-MIG-02`;
- `S10M-03 / R10-MIG-03`;
- `S10M-04 / R10-MIG-04`;
- `S10M-05 / R10-MIG-05`, merged into `R10-FI-01`.

No unchanged Stage 9 area was re-reviewed except directly coupled text necessary to determine whether each refinement actually closes the prior finding.

---

# 2. Delta findings

## S10M-01 / R10-MIG-01 → R10-SEC-01

**Disposition: CLOSED — refinement satisfies the finding**

### Refined requirement reviewed

`EIS14-SEC-02`

### Confirmation

The revised requirement now correctly distinguishes protected-object hardening by PostgreSQL object type rather than claiming that RLS is uniformly enabled on tables, views and functions.

It now explicitly specifies:

- **tables:** RLS enabled, deny-by-default kernel policies, `PUBLIC`/`anon` removal and narrow intended grants;
- **views:** no false claim that RLS is enabled on the view; explicit grants plus invoker-security semantics so underlying permissions/RLS remain effective; owner-rights views are not exposed to caller roles;
- **functions/RPCs:** explicit `SECURITY INVOKER` or constrained `SECURITY DEFINER`, fixed owner, pinned `search_path`, explicit `EXECUTE` ACLs and default `PUBLIC EXECUTE` revocation;
- **sequences:** included in effective-access/default-privilege reconciliation;
- **default privileges:** reconciled for every real creator role and relevant object class;
- **same-migration atomic birth:** creation/replacement, grants, revokes, RLS/policies, view/function security attributes and default ACL reconciliation complete before usability;
- effective-access verification follows.

This directly closes the prior MC10-PRE-01 / S10M-01 defect without weakening the locked “born hardened” requirement.

### Required confirmation

**Same-migration birth hardening explicit:** **YES**

### Residual evidence

Actual live creator roles, ACLs and default privileges remain runtime evidence for later authorized verification; that does not prevent documentary closure.

### Trigger delta

T2: NOT TRIGGERED  
T3: NOT TRIGGERED  
T6: NOT TRIGGERED  
T7: NOT TRIGGERED  
T8: NOT TRIGGERED

---

## S10M-02 / R10-MIG-02

**Disposition: CLOSED — refinement satisfies the finding**

### Refined requirement reviewed

`EIS14-MIG-03`

### Confirmation

The revised M14-3 requirement now explicitly consumes the locked SB-P-1.12 multi-row import contract and carries all migration-safety elements previously missing.

It requires:

- each row or bounded chunk to commit in its **own transaction**;
- **fresh EIS-CNF-02 authority revalidation** before each row/chunk commit;
- a **stable business-scoped row fingerprint**;
- recorded per-row/chunk outcome;
- already committed rows to remain committed if authority is later revoked;
- later rows to stop after revocation;
- exact completed/failed/remaining counts;
- resumption only as a **fresh authorized submission**;
- already committed rows skipped by fingerprint;
- no duplicate Ledger writes;
- no duplicate opening-stock writes;
- opening-stock writes still terminate through `create_inventory_movement`.

### Required confirmations

**Row/bounded-chunk imports use fresh authority:** **YES**

**Stable fingerprints:** **YES**

**Revocation preserves committed rows:** **YES**

**Revocation stops later rows:** **YES**

**Retries cannot duplicate Ledger writes:** **YES**

**Retries cannot duplicate opening-stock writes:** **YES**

This closes the missing revocation-safe resume/idempotency semantics identified in S10M-02.

### Trigger delta

T2: NOT TRIGGERED  
T3: NOT TRIGGERED  
T6: NOT TRIGGERED  
T7: NOT TRIGGERED  
T8: NOT TRIGGERED

---

## S10M-03 / R10-MIG-03

**Disposition: CLOSED — refinement satisfies the finding**

### Refined requirement reviewed

`EIS14-MIG-04`, coupled with `EIS14-MIG-05`

### Confirmation

The revised M14-4 requirement now makes index migration safety explicit.

It requires the index-build strategy to be selected from:

- actual table size;
- activity;
- acceptable lock window.

It explicitly requires:

- low-downtime/concurrent builds where appropriate;
- accounting for non-transactional DDL behaviour;
- detection of invalid or failed index artifacts;
- recovery of those artifacts;
- concurrent read/write rehearsal;
- query-plan evidence;
- index-validity evidence;
- no use of `IF NOT EXISTS` as proof that the existing index definition is correct.

`EIS14-MIG-05` additionally requires live-safe index builds as part of rehearsal.

### Required confirmations

**Live-safe index build specified:** **YES**

**Non-transactional/concurrent build behaviour recognized:** **YES**

**Invalid index artifacts detected:** **YES**

**Invalid/failed index artifacts recovered:** **YES**

**Concurrent read/write rehearsal required:** **YES**

The refinement provides the design-level safety contract required at EIS stage; exact DDL, timeout values and target-specific execution mechanics properly remain for the later migration package/rehearsal.

### Trigger delta

T2: NOT TRIGGERED  
T3: NOT TRIGGERED  
T6: NOT TRIGGERED  
T7: NOT TRIGGERED  
T8: NOT TRIGGERED

---

## S10M-04 / R10-MIG-04

**Disposition: CLOSED — refinement satisfies the finding**

### Refined requirement reviewed

`EIS14-MIG-06`, coupled with `EIS14-MIG-05`

### Confirmation

The revised requirement now makes generated-type provenance reproducible rather than merely requiring final type consistency.

It requires the generated Supabase types to be produced through a **recorded procedure** containing:

- generator/tool identity and version;
- source project/environment;
- migration/schema identity;
- comparison against previous generated output by diff or signature.

It also separately requires:

- hand-written `TransactionType` unions updated;
- callers updated;
- UI branches updated;
- all layers verified together.

Mixed-version compatibility is now explicit:

- **old app / new schema** must be proven wherever that state can exist;
- **new app / final schema** must be proven;
- a breaking RPC change cannot deploy before all required callers are ready.

### Required confirmations

**Generated-type provenance reproducible:** **YES**

**Generation source environment recorded:** **YES**

**Migration/schema identity recorded:** **YES**

**Generator/tool version recorded:** **YES**

**Generated output comparison required:** **YES**

**Mixed-version app/schema compatibility required:** **YES**

**Breaking RPC changes sequenced behind caller readiness:** **YES**

This fully closes S10M-04.

### Trigger delta

T2: NOT TRIGGERED  
T3: NOT TRIGGERED  
T6: NOT TRIGGERED  
T7: NOT TRIGGERED  
T8: NOT TRIGGERED

---

## S10M-05 / R10-MIG-05 → R10-FI-01

**Disposition: CLOSED — refinement satisfies the finding**

### Refined requirements reviewed

- `EIS14-TOT-01`
- `EIS14-MIG-05`

### Confirmation

`EIS14-TOT-01` now defines distinct truthful canonical measures rather than collapsing sales with generic income or purchases with generic expenses.

It explicitly separates:

- **sales** → `sale`;
- **income** → `income`;
- **purchases** → `purchase`;
- **expenses** → `expense`.

Any broader combined measure must:

- be explicitly labelled as combined;
- never substitute for a distinct merchant total.

It also preserves the financial-history invariants:

- credit-method sale counts exactly once as a sale;
- standalone `credit` contributes to neither sales nor income;
- `repayment` contributes to neither sales nor income;
- generic income cannot be relabelled as sales;
- generic expense cannot be relabelled as purchases.

`EIS14-MIG-05` now additionally requires rehearsal to prove that **historical sale and purchase classifications and totals remain unchanged** under the new canonical classification.

### Required confirmations

**Historical sale classifications remain unchanged:** **YES**

**Historical purchase classifications remain unchanged:** **YES**

**Historical sale totals remain unchanged:** **YES**

**Historical purchase totals remain unchanged:** **YES**

**Generic income remains distinct from sales:** **YES**

**Generic expense remains distinct from purchases:** **YES**

**No double-counting of credit-method sales:** **YES**

This closes the migration component of MC10-PRE-02 / S10M-05.

### Trigger delta

T2: NOT TRIGGERED  
T3: NOT TRIGGERED  
T6: NOT TRIGGERED  
T7: NOT TRIGGERED  
T8: NOT TRIGGERED

---

# 3. Consolidated closure table

| Original finding | Refinement | Delta result |
|---|---|---|
| S10M-01 | R10-MIG-01 merged into R10-SEC-01 / `EIS14-SEC-02` | **CLOSED** |
| S10M-02 | R10-MIG-02 / `EIS14-MIG-03` | **CLOSED** |
| S10M-03 | R10-MIG-03 / `EIS14-MIG-04` + `MIG-05` | **CLOSED** |
| S10M-04 | R10-MIG-04 / `EIS14-MIG-06` + `MIG-05` | **CLOSED** |
| S10M-05 | R10-MIG-05 merged into R10-FI-01 / `EIS14-TOT-01` + `MIG-05` | **CLOSED** |

**Partially closed:** 0  
**Not closed:** 0  
**New migration-domain findings introduced by the refinement:** 0

---

# 4. T2 / T3 / T6 / T7 / T8 Delta Screen

| Trigger | Delta result |
|---|---|
| **T2 — approved-source conflict** | **NOT TRIGGERED** |
| **T3 — new product decision / merchant-visible behaviour** | **NOT TRIGGERED** |
| **T6 — material new derived constraint** | **NOT TRIGGERED**; refinements implement already accepted migration/security/integrity constraints |
| **T7 — omission, narrowing, deferral, reassignment, reclassification** | **NOT TRIGGERED** |
| **T8 — infeasibility or Product Truth/security/integrity conflict** | **NOT TRIGGERED** |

No refinement introduces a new trigger candidate.

---

# 5. Delta Specialist Conclusion

For the exact refined EIS at PR #831 head:

`e858a18e00719aed6464822d684c6580fce1f9bf`

and EIS blob:

`d97d23048f0dda76f3f60b0b03569a928d9e45d1`

all five previously blocking Migration / Data-Transition Safety findings reviewed under S10-D5 are:

**CLOSED — refinement satisfies the finding.**

This delta confirmation does **not** approve Stage 10, lock the EIS, authorize implementation, authorize migrations, or establish production/runtime evidence.

No PR, EIS, SQL, migration, Supabase, FCTM or Product Truth state was modified.

**S10-D5 DELTA CONFIRMATION COMPLETE.**

**STOP FOR MISSION CONTROL DISPOSITION.**