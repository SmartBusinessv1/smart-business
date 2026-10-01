# SMART BUSINESS MISSION CONTROL — MC-157

# SB-P-1.12 — Stage 10 Security EIS Refinement Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Stage:** 10 — EIS Review  
**Date:** 2026-09-30  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND MISSION CONTROL POST-MERGE VERIFICATION  
**Recipient:** Claude Code — existing EIS owner  
**Work package:** `SB-P-1.12-WP-STAGE10-SECURITY-EIS-REFINEMENT`  
**Live instruction:** `communication/live/instruction1.26.md`

## 1. Canonical basis

Mission Control has canonically accepted the independent Stage 10 Security review evidence from PR #690.

Canonical Security review:

`communication/missions/SB-P-1.12/specialists/04-stage10-independent-eis-security-review.md`

Blob:

`ddaa405f6d3145249fbcc6e29d88c9aaa229285b`

Canonical live handover:

`communication/live/report1.25.md`

Blob:

`49c4c582e978a25bd45fb1be8ec4237bdb71f6ab`

Canonical main after PR #690:

`7dba38dbd94341a4e167d3d422f69f1250396485`

Mission Control post-merge verification is recorded as MC-156 on PR #690.

## 2. Existing EIS candidate lineage

Continue the existing PR #687 lineage.

Expected current candidate before authorized refinement:

- PR: `#687`
- head: `a1beda8c006ab69b28f5354b686c941384cd1e86`
- EIS: `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`
- EIS blob: `0ebd7c2b4298a81b467021dfb8a52cf42b8c293d`
- locked Blueprint blob: `77d52096c020668311b039721a4de9248ddd460e`
- canonical FCTM blob: `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259`

PR #687 remains unmerged. This authorization does not approve or lock the EIS and does not authorize merging PR #687.

## 3. Mission Control disposition

The Stage 10 Security review requires finding-scoped refinement, not a Founder/Product Truth decision.

Claude Code is authorized to correct only:

- `SEC-EIS10-01`
- `SEC-EIS10-02`
- `SEC-EIS10-03`
- `SEC-EIS10-04`
- `SEC-EIS10-05`
- `SEC-EIS10-06`
- `SEC-EIS10-07`
- `SEC-EIS10-08`
- `SEC-EIS10-09`
- `SEC-EIS10-10`
- `SEC-EIS10-11`

Findings `SEC-EIS10-12` through `SEC-EIS10-14` are carried as implementation/evidence gates and are not design-correction scope except where `SEC-EIS10-10` directly requires governed-business-deletion/legal-hold test coverage.

No whole-EIS restart is authorized.

## 4. Required correction outcomes

### SEC-EIS10-01 — Verified-principal model

Define one verified-principal model across ordinary signed-in humans, support operators, participants and automation.

The corrected EIS must require:

- ordinary signed-in humans and support operators resolve from a unique live Auth-to-person binding;
- `persons.auth_user_id` is unique when non-null and link/unlink/relink are governed writes;
- participant access has an explicit verified-principal binding before it can exercise a capability; an optional person link is not sufficient as an authenticated authority path;
- automation/background execution is server-only trusted invocation derived from the stored automation rule and grantor authority, never from caller-supplied actor data and never from `service_role` itself;
- all verified principal types enter the same authorization kernel without creating a parallel permission engine.

Do not invent a new merchant-facing role or participant product experience.

### SEC-EIS10-02 — Multi-business first-run rule

Correct first-run wording so it prevents accidental first-business creation without prohibiting approved intentional additional-business ownership.

The EIS must state:

- invitations and existing memberships are surfaced before automatic first-business creation;
- an invited person is not silently made Owner of an empty new business;
- an already-known person may intentionally create an additional business where approved lifecycle rules permit;
- each additional business receives an independent Owner membership and explicit active-business context;
- authority never carries across businesses.

### SEC-EIS10-03 — Active Owner removal invariant

Make explicit that the active Owner cannot be ended, revoked or removed through generic membership removal.

Owner authority may cease only through:

- valid atomic ownership transfer; or
- separately governed business deletion.

Transfer must preserve exactly one active Owner through commit and update the `owner_id` mirror in the same authoritative operation.

Require negative tests proving generic membership APIs and non-Owner actors cannot remove the active Owner.

### SEC-EIS10-04 — Complete authority serialization

Replace the incomplete membership/grant-only lock model with one complete serialization protocol covering every mutable authority fact relied on by an allow decision.

It must include, as applicable:

- membership state and role defaults;
- explicit grants;
- entitlements/account-security state;
- participant state/object scope;
- support grants;
- automation rule and grantor authority;
- transfer-related authority state;
- non-membership actor paths.

The protocol may be a deterministic lock set or authority-version/epoch design, but every change capable of turning allow into deny must contend on the same boundary.

A protected operation must not commit after an authority fact it relied upon has been revoked.

`membership_version` may remain a change detector but not the sole serialization mechanism.

### SEC-EIS10-05 — Atomic confirmation consumption

Specify confirmation binding consumption as atomic and in the same transaction as the consequential outcome.

Require:

- exactly one unused → consumed transition;
- concurrent contenders receive a committed consumed/replay outcome and perform no protected write;
- reviewed-state fingerprint, current authority revalidation and idempotency outcome are handled under the same serialization;
- replay after committed completion returns the committed result without re-executing.

### SEC-EIS10-06 — Privileged service-role reads and writes

Extend the privileged binding contract to every service-role data access, not only writes.

Every privileged:

- read;
- write;
- claim;
- lease;
- bookkeeping query;
- follow-up operation

must be bound to verified principal, business, action and object scope.

Queries must include the bound business/object predicates even though `service_role` bypasses RLS.

No privileged query may derive business or actor authority from untrusted request values.

Protected/consequential reads must revalidate current authority under the complete serialization rule.

The source-complete handler inventory must prove no unbound admin-client path remains.

### SEC-EIS10-07 — Durable denial audit for direct RPC

Define denial durability for every permitted invocation path.

Require:

- expected authorization/validation denials inside command functions use non-throwing committed structured outcomes whenever safe;
- any security-relevant denial that can still abort must have an independently durable recording boundary that direct RPC callers cannot bypass, or that command family must prohibit direct invocation and require the audited server boundary;
- verification includes direct authenticated RPC denial paths, not only application-server paths.

Do not claim the prior denial-durability concern resolved until this boundary is explicit and independently tested.

### SEC-EIS10-08 — SECURITY DEFINER hardening

Add a cross-cutting invariant for every `SECURITY DEFINER` function:

- explicit hardened `search_path`;
- schema-qualified object references;
- immediate revocation of PUBLIC/anon execution unless a separately approved anonymous workflow requires otherwise;
- NOLOGIN/NOINHERIT owner/executor roles with only required object privileges;
- no user-controlled dynamic object name under definer authority;
- Full Assurance verifies owner, security mode, `search_path` and effective EXECUTE grants.

Preserve separately approved anonymous workflows; do not use a blanket anonymous revocation rule beyond the specific definer function boundary.

### SEC-EIS10-09 — Stable business identity after governed deletion

Resolve the contradiction between retained child records protected by `RESTRICT` and physical deletion of the parent `businesses` row.

Choose one coherent engineering mechanism within existing Product Truth, such as:

- retain the business row as a non-authorizing tombstoned identity while active operational state is removed; or
- migrate retained records to another stable governed business-identity record before physical removal of the active business row.

The selected mechanism must preserve:

- stable business attribution;
- business scoping;
- cross-business isolation;
- legal/dispute holds;
- retained history integrity;
- inability of a deleted/tombstoned business identity to regain active authority.

If the correction would change merchant-visible deletion meaning rather than only engineering representation, STOP and return to Mission Control for Product Truth review.

### SEC-EIS10-10 — Complete `22-§20-2` unblocking evidence

Keep `22-§20-2` BLOCKED / IN SCOPE.

Before any future proposal to unblock it, the EIS must require:

- implementation and independent verification of EIS-ESC-06 in addition to EIS-ESC-01 through EIS-ESC-05;
- completed/reconciled EIS-ESC-08 migration and backfill evidence for the target;
- post-migration source-complete FK/trigger/delete-guard inventory;
- governed business-deletion tests with mixed retained/deletable record classes;
- legal/dispute-hold tests proving held records and stable business attribution survive;
- transferred-business history and former-Owner identity-deletion tests;
- provider/production evidence only when making the corresponding production claim.

Do not close ESC-1 and do not unblock `22-§20-2`.

### SEC-EIS10-11 — SB-P-1.13 consumption boundary

Correct the dependency contract so SB-P-1.13 may consume a capability only after:

- the EIS is locked;
- WS-A1 and WS-A2 are implemented and verified;
- WS-D is implemented and verified for confirmation/idempotency consumed;
- WS-E is implemented and verified for authority-events/denial behavior consumed;
- every data/table family SB-P-1.13 will touch has completed the relevant WS-A3 enforcement cut-over and isolation tests;
- Mission Control has explicitly accepted the dependency evidence appropriate to that consumer.

SB-P-1.13 must not infer production enforcement from repository design and must not introduce temporary parallel authorization.

## 5. Carried findings and holds

Preserve the favorable finding for Founder Decision Record 09. Do not reopen T8-EIS-1 unless materially new conflicting evidence appears.

Carry unchanged:

- Reference Cost and margin remain separately delegable;
- no margin formula is invented;
- no aggregate-only margin behavior is reintroduced;
- R-2 remains CLOSED / SATISFIED;
- ESC-1 remains OPEN T8;
- `22-§20-2` remains BLOCKED / IN SCOPE;
- G-6/T4 remains UNVERIFIED;
- professional legal/privacy/retention validation remains deferred;
- provider Auth deletion behavior, backup/PITR and legal-hold boundaries remain evidence gates;
- no runtime or production claim may be inferred.

## 6. Authorized writable paths

Edit only:

1. `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`
2. `communication/missions/SB-P-1.12/claude-code/36-stage9-eis-creation-report.md`
3. `communication/missions/SB-P-1.12/README.md`
4. `communication/missions/SB-P-1.12/decision-log.md`
5. `communication/missions/SB-P-1.12/handover-log.md`
6. `communication/live/report1.26.md`

Do not modify:

- locked Blueprint;
- FCTM;
- Founder records;
- specialist Security reports;
- Mission Control records;
- contracts;
- application code;
- schema;
- SQL;
- migrations;
- provider state;
- production state.

## 7. Traceability and completeness requirements

Before handoff, prove:

- canonical FCTM blob remains `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259`;
- all 267 IN SCOPE rows remain represented;
- no FCTM row is added, removed, reclassified or deferred;
- every product-behavior EIS requirement traces to an IN SCOPE FCTM row;
- any engineering-only requirement records its engineering-only reason;
- no product-behavior orphan exists;
- if requirement or link counts change because of these refinements, report exact before/after counts and why;
- Founder Decision Record 09 semantics remain intact;
- the 11 Security findings are each mapped to the exact corrected EIS section/requirement/test/workstream.

## 8. Validation and handoff

Before handoff:

- verify the six-path write scope;
- verify locked Blueprint unchanged;
- verify FCTM unchanged;
- run repository validation available to the branch;
- do not represent a missing GitHub Actions run as success;
- record exact branch head and exact EIS blob;
- provide a finding-by-finding closure table for `SEC-EIS10-01` through `SEC-EIS10-11`;
- identify any finding not fully corrected;
- preserve `SEC-EIS10-12` through `SEC-EIS10-14` as carried verification/evidence gates;
- return through `communication/live/report1.26.md`.

## 9. Stop conditions

STOP and return to Mission Control if:

- any correction requires changing locked Product Truth;
- merchant-visible deletion meaning must change;
- a new participant-authentication product experience is required;
- lifecycle ownership semantics must change;
- the FCTM must change;
- an unrelated EIS architecture must materially change;
- the existing PR #687 candidate lineage is unusable or materially drifted;
- implementation/schema/SQL/migration/provider/production action appears necessary.

## 10. Post-refinement route

After Claude Code returns the corrected exact head:

1. Mission Control performs exact-head, exact-blob and FCTM completeness review.
2. If the change remains limited to the authorized findings, Mission Control issues a separate authorization to the same Security specialist for a delta re-review of `SEC-EIS10-01` through `SEC-EIS10-11`.
3. Stage 10 acceptance remains separate.
4. Stage 11 EIS lock remains separate and is not authorized here.

**STOP FOR MISSION CONTROL STAGE 10 REVIEW.**
