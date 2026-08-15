# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-35 — CANONICAL TRANSFER CONFLICT RECONCILIATION

**Instruction ID:** instruction1.128  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Gate:** GC-35 — Canonical Transfer Conflict Reconciliation  
**Authorized By:** Founder / Mission Control  
**Executing Authority:** Mission Control  
**Mode:** READ-ONLY RECONCILIATION / TRANSFER-PLAN PREPARATION  
**Application-Code Write Authority:** NONE  
**Deployment / Publication Authority:** NONE

---

## 1. Mission Objective

Resolve the repository chronology conflict discovered after activation of the approved canonical-transfer authorization.

The existing transfer authorization required Mission Control to stop rather than overwrite newer canonical content when exact mechanical transfer from the verified Lovable derivative source could not be performed safely.

This mission authorizes a bounded, read-only reconciliation to determine exactly which portions of the verified Lovable Initial Phase 1 implementation are:

1. already present in canonical `main`;
2. superseded by later canonical work;
3. still missing and mechanically transferable without rollback; or
4. overlapping in a way that requires a separately authorized preservation merge.

This mission does not itself authorize any application-code modification.

---

## 2. Locked Repositories and Commits

### Canonical repository

`SmartBusinessv1/smart-business`

Canonical comparison base:

`4c8dc1dcf4f70105723e781e88b4b9a0486fb6ed`

### Verified Lovable derivative source

`SmartBusinessv1/starter-supab-shell`

Verified implementation evidence commit:

`fd7c29c11882a164799e00584701a9db46e06cca`

### Relevant later canonical provenance

Mission Control may inspect merged canonical commits and pull requests that changed any authorized transfer path after the Lovable source diverged, including the already identified controlled implementation merged through PR #185 / commit:

`8716d66af32d130052263cbaae793e84eb13c1a5`

Inspection is read-only.

---

## 3. Authorized File Scope

Reconcile only these previously authorized transfer paths:

- `src/integrations/supabase/catalog.ts`
- `src/routes/_authenticated/catalog.tsx`
- `src/routes/_authenticated/catalog.index.tsx`
- `src/routes/_authenticated/catalog.$productId.tsx`
- `src/components/authed-header.tsx`
- `src/routeTree.gen.ts`
- `docs/implementation/SB-P-1.11/lovable-build-completion-report.md`

No other application path may be proposed for transfer unless the reconciliation proves that one of the seven locked paths has a generated/runtime dependency that makes a safe transfer impossible without it. If that occurs, classify it as a blocker and return it for separate authorization; do not expand scope automatically.

---

## 4. Required Reconciliation Method

For each authorized path, compare:

1. the verified Lovable source at `fd7c29c11882a164799e00584701a9db46e06cca`;
2. canonical `main` at `4c8dc1dcf4f70105723e781e88b4b9a0486fb6ed`;
3. relevant canonical commit/PR provenance where the current canonical file differs.

Classify each file as exactly one of:

- `IDENTICAL — NO TRANSFER NEEDED`
- `LOVABLE DELTA ALREADY PRESENT — NO TRANSFER NEEDED`
- `CANONICAL SUPERSEDES LOVABLE — PRESERVE CANONICAL`
- `MISSING — SAFE MECHANICAL TRANSFER`
- `OVERLAP — PRESERVATION MERGE REQUIRED`
- `BLOCKED — SEPARATE AUTHORIZATION REQUIRED`

Do not infer equivalence only from blob hashes. For differing files, inspect the relevant semantic delta sufficiently to establish whether Lovable behavior is present, absent, superseded, or overlapping.

---

## 5. Locked Product and Governance Boundaries

The reconciliation must preserve:

- exactly 19 public Catalog commands and no twentieth;
- no direct Catalog-table write path;
- authentication and business isolation;
- Product Truth and the locked Stage 12 v1.2 implementation package;
- amended D-023 / D-024 SKU rules;
- D-047 and D-068 safeguards;
- Phase 1 Owner-only posture;
- existing later canonical work unless a separately authorized change explicitly supersedes it;
- the canonical repository as the sole repository authority.

The derivative Lovable repository remains a transfer source only.

---

## 6. Explicit Prohibitions

This mission does not authorize:

- writing or replacing application code;
- creating the implementation transfer branch;
- opening an application-code transfer PR;
- dependency changes;
- schema or migration changes;
- Product Truth or governance changes;
- redesign, refactor, modernization, formatting sweep, or feature expansion;
- production mutation;
- publish, deploy, domain change, or Supabase rebinding;
- treating the derivative repository as canonical;
- assigning the transfer to Claude Code, which remains reserved for the later independent verification gate.

---

## 7. Required Output

Create exactly one reconciliation report:

`communication/live/report1.138.md`

The report must include:

- canonical base SHA;
- verified Lovable source SHA;
- exact seven-file reconciliation matrix;
- source blob SHA and canonical blob SHA for each path where available;
- relevant canonical provenance for every differing file;
- semantic disposition for every differing file;
- explicit identification of any Lovable behavior still missing from canonical;
- explicit identification of any newer canonical behavior that would be lost by blind replacement;
- determination whether a safe transfer can proceed as:
  - no-op / report-only,
  - mechanical transfer of only missing files,
  - bounded preservation merge requiring separate authorization, or
  - blocked pending another governance decision;
- confirmation that no application code was changed and nothing was deployed or published.

---

## 8. Stop Conditions

STOP and report without improvisation if:

- the verified Lovable source commit cannot be resolved;
- the canonical base is no longer reachable or has materially changed before reconciliation begins;
- a differing file cannot be semantically reconciled with available repository evidence;
- safe reconciliation would require a path outside the seven-file scope;
- the 19-command boundary or no-direct-write boundary appears at risk;
- any proposed resolution would roll back later canonical work.

---

## 9. Decision Boundary

Human review and merge of this instruction PR activate only the read-only reconciliation authority above.

After the reconciliation report is reviewed, Mission Control will determine whether a separate preservation-transfer authorization is required.

`GC-35 CANONICAL TRANSFER CONFLICT RECONCILIATION — AUTHORIZED UPON HUMAN MERGE OF THIS INSTRUCTION`
