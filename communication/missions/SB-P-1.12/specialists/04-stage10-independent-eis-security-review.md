# SB-P-1.12 — Stage 10 Independent EIS Security Review

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Stage:** 10 — EIS Review  
**Reviewer:** Security & Permissions Architecture — existing MC-33-appointed specialist room  
**Authority:** MC-153 / communication/live/instruction1.25.md and communication/missions/SB-P-1.12/mission-control/29-stage10-independent-eis-security-review-authorization.md  
**Work package:** SB-P-1.12-WP-STAGE10-INDEPENDENT-EIS-SECURITY-REVIEW  
**Review type:** Independent complete-EIS documentary security review  
**Status:** SUBMITTED FOR MISSION CONTROL STAGE 10 DISPOSITION — EIS NOT ACCEPTED OR LOCKED

## 1. Exact review target

| Item | Exact identity reviewed |
|---|---|
| Canonical main used to hydrate and branch | ec0fc74dbc9685eff6162c326ececb2cde1c3c77 |
| PR | #687 — docs(SB-P-1.12): Stage 9 draft EIS (MC-148) |
| PR state at final pre-report check | OPEN / DRAFT / UNMERGED / MERGEABLE |
| Exact PR head | a1beda8c006ab69b28f5354b686c941384cd1e86 |
| Primary EIS | docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md |
| Exact EIS v0.2 blob | 0ebd7c2b4298a81b467021dfb8a52cf42b8c293d |
| Locked Blueprint blob | 77d52096c020668311b039721a4de9248ddd460e |
| Canonical FCTM blob | 1650ff95b2fbdd63e1b0f60d8135da14a7a9d259 |
| Founder Record 04 blob | 616b3bb768ab812bd44d668800d0ed6ec8a5cd2f |
| Founder Record 05 blob | f52b5ebd8a4040d114f2ca8629f1a56bcbb608c2 |
| Founder Record 06 blob | c3a32f9eee7a4795813b0b9db04244ac25b19b5a |
| Founder Record 07 blob | 327e7db10fb966b13306ce9576c404343c69affb |
| Founder Record 09 blob | 84d61d4d62cc33ae81ec372ac725059665ebc9d9 |
| Stage 7 Security report 01 blob | 36953c3332a255a2a2d4df1045d78492ab44daf2 |
| Stage 7 Security report 02 blob | 7f87c735e2c00655ce3773d9209db7998f85a4d9 |
| Stage 7 Security report 03 blob | e5fa2d6465cfb724459690c6e18e6ba0e0a38c19 |
| report1.19.md blob | 4665cb73472247a65433ac9e9da2594b60ea9700 |
| report1.21.md blob | dd829214cdca461e8e1935539da81d877d309e0c |
| MC-144 Stage 7 gate blob | 6b63f2d48127135806f625b4d0001ee60b4bfe2b |
| MC-146 Stage 8 lock blob | a57eadc56e8f7e76ea81f4be6c2f7204ffdd7925 |
| MC-150 disposition blob | 95a5c5df32a09dc3a49e0d0f6366e73331c2af72 |

PR #687 exact-head CI already recorded and independently re-read through the PR evidence:

- Team LIPS Markdown Quality Gate #2138 — SUCCESS.
- Team LIPS Application Build Assurance #522 — SUCCESS.

The candidate still contained 80 unique EIS requirements. I independently compared the Section 22 row-to-requirement table to the canonical FCTM and found 267 of 267 IN SCOPE rows represented exactly once in the row map, with no missing or extra FCTM row.

## 2. Independence and prior-contribution disclosure

This room authored the earlier Stage 7 Security reports and later targeted Security reports. Those reports were used as evidence and historical risk context only. I re-read the complete EIS v0.2, locked Blueprint, Founder records, Stage 10 Mission Control records and current repository architecture independently for this review.

I did not treat any Stage 7 acceptance or prior specialist wording as proof that an EIS mechanism is sufficient, implemented or safe.

No SQL was executed. No database, provider or production state was mutated or independently queried. Production remains G-6/T4 UNVERIFIED.

## 3. Executive security disposition

The EIS has strong security direction in several areas: explicit business context, one-kernel intent, deny-by-default posture, effective-access inventory, Reference Cost / margin correction, ESC-1 recognition, stable historical-person references, non-cascading direction, and clear separation of documentary design from implementation evidence.

However, the complete EIS is **not yet security-sufficient for Stage 10 acceptance**. The review identifies multiple EIS design defects that must be corrected before the EIS can be locked. None requires a new Founder Product Truth decision on the evidence reviewed.

The highest-impact defects are:

1. the kernel's principal derivation does not coherently cover unlinked participants, support actors and background automation;
2. first-run wording incorrectly turns membership presence into a global prohibition on creating another business, conflicting with approved multi-business ownership;
3. generic membership revocation does not explicitly prohibit removing the active Owner outside transfer or governed business deletion;
4. execution-time serialization locks only membership and explicit-grant rows even though the kernel depends on additional mutable authority facts;
5. confirmation binding is declared single-use without an atomic consume rule;
6. the privileged service-role contract protects later writes but does not equivalently constrain privileged reads;
7. denial-audit fallback depends on a server layer even though authenticated clients may call command functions directly;
8. ESC-1 business-deletion design does not yet reconcile retained child rows under RESTRICT with deletion of the business parent row;
9. the evidence list for ever proposing 22-§20-2 unblocking omits parts of the very governed-deletion and migration design mapped to that row;
10. the SB-P-1.13 early-consumption boundary is earlier than the relevant enforcement and audit workstreams.

The required Stage 10 outcome is therefore refinement, not a Founder decision.

---

## 4. Material findings

### SEC-EIS10-01 — Principal derivation is inconsistent across human, participant, support and automation paths

**Severity:** HIGH  
**Affected EIS:** §7.1–§7.4; EIS-ID-01; EIS-ID-03; EIS-AUT-01; EIS-SUP-01; §8.1; EIS-KER-01; EIS-KER-02; EIS-KER-06

**Exact evidence**

- EIS §8.1 says the actor is always authz.current_actor(), with the JWT subject resolved to an active person.
- The same kernel contract permits authorization through a participant identity, a live support grant or an enabled automation rule.
- EIS-ID-03 says Supplier, Customer and Delivery Staff participant identities are only optionally linked to a persons row.
- EIS-AUT-01 requires background automation to re-evaluate through the kernel, although a background job does not inherently have the merchant user's JWT subject.
- EIS-SUP-01 introduces a support operator identity without defining how that operator becomes the verified kernel principal.
- EIS-ID-01 creates persons.auth_user_id as a separate nullable Auth link, but §8.1 does not explicitly say current_actor resolves by that unique live Auth link rather than assuming persons.id always equals the current Auth subject.

**Security consequence**

The implementation cannot safely satisfy both "actor is always the verified JWT person" and "participant/support/automation may be the acting authority" without inventing an additional actor-input path. An implementer could accidentally accept a caller-supplied actor, trust service-role context as authority, or create a second authority resolver for background jobs and external participants.

The optional participant-to-person link is especially unsafe as an authorization foundation: an unlinked participant has no defined authenticated principal under the stated kernel contract.

**Classification:** EIS design correction.

**Precise correction required**

The EIS must define one verified-principal model for every allowed actor class before authorization:

1. ordinary signed-in humans and support operators must resolve from a unique live Auth-to-person binding;
2. participant access must have an explicit verified-principal binding before it can exercise a capability; "optionally linked" cannot be the authority path for an authenticated action;
3. automation/background execution must use a server-only trusted invocation that derives its subject from the stored automation rule and grantor authority, not from caller-supplied actor data and not from service_role itself;
4. authz.current_actor / authorize must define how those verified principal types enter the one kernel without introducing a parallel permission engine;
5. persons.auth_user_id must be unique when non-null, and link/unlink/relink must be governed writes.

No new merchant-facing role or Product Truth decision is needed.

---

### SEC-EIS10-02 — First-run creation rule incorrectly blocks approved multi-business ownership

**Severity:** HIGH  
**Affected EIS:** §13; EIS-FRL-02; EIS-ID-02; EIS-ID-06

**Exact evidence**

EIS-FRL-02 says:

> A person with any membership or invitation is routed to select or accept; only a person with neither may create a business.

Founder Record 05 ESC1-1 states that one person may own multiple independent businesses. The locked Blueprint §20.3 E7 says first-run business creation is offered only after checking for pending or active membership; it does not say membership permanently makes the person ineligible to create another business.

**Security consequence**

This wording narrows approved Product Truth and can force later builders either to violate the EIS to support second-business ownership or to create an unauthorized side path outside the kernel/onboarding contract. It also conflates "avoid accidental empty-business creation during first run" with "person can never intentionally create another business."

**Classification:** EIS design correction.

**Precise correction required**

Limit the restriction to automatic/first-run routing:

- pending invitations and existing memberships must be shown before any automatic first-business creation;
- a first-run flow must not silently make an invited person Owner of a new empty business;
- the foundation must not prohibit an already-known person from intentionally creating an additional business where the approved product lifecycle permits it;
- any additional-business creation must create a new independent Owner membership and explicit active-business context without carrying authority from another business.

No Founder decision is required; the approved multi-business rule already controls.

---

### SEC-EIS10-03 — Generic membership removal does not exclude the active Owner

**Severity:** HIGH  
**Affected EIS:** §7.2; EIS-ID-02; §13 Removal; EIS-FRL-03; EIS-FRL-04

**Exact evidence**

- EIS-ID-02 places owner, manager and employee in the same business_memberships status model.
- EIS §13 says "Revocation or ending of a membership" invalidates derived authority and keeps history.
- EIS-FRL-03 defines generic membership removal/revocation without an Owner exception.
- EIS-FRL-04 separately defines the valid ownership-transfer command.
- Founder Record 05 establishes that Owner replacement happens through transfer and that the business must not be left ownerless through ordinary identity/membership removal.

**Security consequence**

As written, a generic membership-revocation implementation could end the only active Owner membership, leave the business without authoritative ownership, desynchronize the owner_id mirror, corrupt identity-deletion eligibility and bypass transfer approval requirements.

**Classification:** EIS design correction.

**Precise correction required**

State and map the invariant explicitly:

- an active Owner membership cannot be revoked, ended or removed by the generic membership-removal command;
- it may cease to be active only within the atomic valid-transfer completion or the separately governed business-deletion lifecycle;
- transfer completion must preserve exactly one active Owner across the commit;
- the owner_id mirror must change in the same authoritative operation;
- negative tests must show Manager/staff/support actors and generic membership APIs cannot remove the active Owner.

This is reconciliation to existing Product Truth, not a new Founder decision.

---

### SEC-EIS10-04 — Execution-time authorization serialization does not cover the complete mutable authority state

**Severity:** HIGH  
**Affected EIS:** §8.1; EIS-KER-03 through EIS-KER-09; §10.2; EIS-CNF-02; EIS-AUT-01; EIS-SUP-01; EIS-FRL-04

**Exact evidence**

The kernel may authorize based on:

- membership state and role defaults;
- explicit capability grants;
- entitlements and account/security state;
- participant identity/object scope;
- support grant state;
- automation rule and grantor authority.

EIS-CNF-02 serializes a consequential command by taking FOR SHARE on the acting membership row and "on the grant row where one is used." Revocation takes FOR UPDATE on the same row.

That lock set does not cover every mutable fact the kernel can rely on. Some supported actor paths do not even have an acting membership row.

**Security consequence**

A capability can be valid when authorize() runs and become invalid before the protected write commits without contending on the same lock. Examples include entitlement withdrawal, support-grant revocation, automation-rule disablement, participant-state revocation, role-default/capability changes and transfer-related authority transitions.

This reintroduces the exact Stage 7 SEC-S7-05 failure class: authorization checked at execution start but not actually held through consequential commit.

**Classification:** EIS design correction.

**Precise correction required**

The EIS must define one complete serialization boundary for authority changes and consequential commits. It may use a lock set or an authority-version/epoch mechanism, but it must cover every mutable authority dependency used by the decision, including non-membership actor paths.

The corrected EIS must state that:

- every mutable row or authoritative version that can turn an allow into a deny participates in the same serialization protocol;
- revocation/change operations contend on the same protocol;
- the ordering is deterministic where multiple rows are involved;
- transfer completion uses the same boundary;
- a decision cannot commit after any authority fact it relied on was revoked.

membership_version may remain a change detector, not the serialization mechanism.

---

### SEC-EIS10-05 — Single-use confirmation binding is not specified as an atomic consume

**Severity:** HIGH  
**Affected EIS:** §10.1; EIS-CNF-01; EIS-CNF-02; EIS-CNF-04

**Exact evidence**

The EIS says confirmation_bindings are single-use and that a commit fails if the binding was consumed. It does not define a row lock, atomic conditional consume, uniqueness rule or transaction ordering that prevents two concurrent commits from observing the same binding as unused.

**Security consequence**

Two simultaneous requests using one valid confirmation can race and both pass the precondition, causing duplicate or repeated consequential actions. Idempotency is a separate control and cannot be assumed to close this unless the binding and operation outcome are atomically tied.

**Classification:** EIS design correction.

**Precise correction required**

Specify that consumption of a confirmation binding is atomic and occurs inside the same transaction as the consequential outcome:

- exactly one transaction may transition the binding from unused to consumed;
- concurrent contenders receive a committed replay/consumed outcome and perform no protected write;
- the reviewed-state fingerprint, current authority revalidation and idempotency outcome are checked/recorded under that same serialization;
- replay after a committed outcome returns that outcome without re-executing the action.

---

### SEC-EIS10-06 — Privileged service-role contract constrains writes more strongly than reads

**Severity:** HIGH  
**Affected EIS:** §9.3; EIS-ISO-04; §18.1 Privileged paths; §19.1 WS-A3

**Exact evidence**

EIS-ISO-04 says the server function resolves the caller, obtains a short-lived decision binding, and "every later privileged write" re-verifies that binding.

Current repository handlers demonstrate that service-role code performs privileged reads as well as writes. catalog-import.ts uses supabaseAdmin to select batch/row/bookkeeping data; parser-lease.ts uses service-role RPCs and a direct lease read.

Because service_role bypasses ordinary tenant RLS, an incorrectly scoped privileged read is itself a cross-business disclosure even if no write occurs.

**Security consequence**

The EIS leaves an implementation gap where a service-role handler can make a broad or wrong-business SELECT after obtaining an initial decision. The service role could also continue reading after authority revocation if only later writes are revalidated.

**Classification:** EIS design correction.

**Precise correction required**

Extend EIS-ISO-04 to every privileged data access, not only writes:

- every service-role read, write, claim, lease, bookkeeping query and follow-up operation must be bound to the verified actor/principal, business, action and object set;
- query predicates must include the bound business/object scope even though service_role bypasses RLS;
- no service-role query may discover/select the business or actor from untrusted request values;
- consequential or protected reads must revalidate current authority under the complete serialization rule from SEC-EIS10-04;
- the source-complete handler inventory must prove no unbound admin-client path remains.

---

### SEC-EIS10-07 — Denial-audit durability fallback is not available to every direct RPC path

**Severity:** HIGH  
**Affected EIS:** §9.3 authenticated EXECUTE model; §11; EIS-AUD-01; EIS-AUD-02; EIS-UX-01

**Exact evidence**

EIS-AUD-02 correctly states that expected permission rejections should return as committed structured outcomes. It then says that a denial inside a transaction that aborts is recorded by "the server layer" through authz.record_denial in a separate short transaction.

But §9.3 allows authenticated callers to EXECUTE command and read functions directly. A direct PostgREST/RPC invocation has no guaranteed application-server callback after a database transaction aborts.

This was the exact durability concern raised as SEC-S7-07.

**Security consequence**

A security-relevant denied attempt that aborts inside a directly called database function can roll back its audit row and then disappear without the server-layer fallback ever running. The design therefore does not yet guarantee the durable-denial property it claims.

**Classification:** EIS design correction.

**Precise correction required**

Define a denial architecture that is valid for every permitted invocation path:

- expected authorization/validation denials inside command functions must be represented as non-throwing committed outcomes whenever safe;
- for any security-relevant denial that can still abort, the EIS must define an independently durable recording boundary that direct RPC callers cannot bypass, or else prohibit direct invocation for that command family and require the audited server boundary;
- Stage 18 tests must include direct authenticated RPC denial paths, not only server-function calls.

Do not claim SEC-S7-07 resolved until this boundary is explicit and independently tested.

---

### SEC-EIS10-08 — SECURITY DEFINER hardening requirements are incomplete

**Severity:** MEDIUM  
**Affected EIS:** §8.1 policy helpers; §9.3 executor roles; EIS-ISO-03; EIS-ISO-04; EIS-PPM-01

**Exact evidence**

The EIS creates or replaces SECURITY DEFINER helpers/commands and specifies owners, grants and role classes, but does not explicitly require hardened search_path and schema-qualified object access for the new functions.

The repository precedent it says it reuses is stricter: the accepted SB-P-1.11 catalog migrations consistently set search_path to an empty value on SECURITY DEFINER functions and explicitly revoke PUBLIC/anon/authenticated execution before narrow grants.

**Security consequence**

An implementation can satisfy the EIS's owner/grant wording while still creating a definer function vulnerable to object-resolution/search-path confusion or leaving implicit function execution exposure before the grant reconciliation step.

**Classification:** EIS design correction.

**Precise correction required**

Add a cross-cutting SECURITY DEFINER invariant:

- every definer function has an explicitly hardened search_path and schema-qualified references;
- PUBLIC/anon execution is revoked immediately in the object-creation migration unless an approved anonymous workflow explicitly requires otherwise;
- function-owner roles are NOLOGIN/NOINHERIT and receive only the object privileges their command group needs;
- no user-controllable dynamic object name is executed under definer authority;
- Full Assurance checks function owner, security mode, search_path and effective EXECUTE grants.

---

### SEC-EIS10-09 — Retained RESTRICT records are not reconciled with governed physical business-row deletion

**Severity:** HIGH  
**Affected EIS:** §14.3; EIS-ESC-04; EIS-ESC-06; §15; EIS-LEG-01; EIS-LEG-02

**Exact evidence**

- §14.3 says retained record classes change business_id foreign keys from CASCADE to RESTRICT.
- EIS-ESC-06 says governed business deletion remains possible and explicitly processes each retained class as retain, minimize or delete.
- Founder Record 05 ESC1-7 requires a permitted deletion to delete only what retention/privacy rules allow and to preserve records that must lawfully remain.

If any child record must be retained and still references businesses.id with RESTRICT, a physical DELETE of that business parent row cannot succeed.

**Security consequence**

The safe-design direction currently contains an unresolved referential-integrity contradiction. An implementer may weaken RESTRICT, detach retained history without a stable business identity, or silently redefine "business deletion" in implementation. Any of those can break history integrity, isolation, or the SB-P-1.19 evidence contract.

**Classification:** EIS design correction.

**Precise correction required**

The EIS must explicitly define the stable business identity after merchant-facing governed deletion whenever retained records survive.

It must state one coherent mechanism, for example:

- the business row remains as a non-authorizing/tombstoned identity while active operational state is deleted; or
- retained rows reference another stable governed business-identity record before the active business row is physically removed.

The selected mechanism must preserve business scoping, attribution, legal/dispute holds and cross-business isolation, and must ensure a deleted business cannot regain authority or active operation merely because its identity/tombstone remains.

This is an engineering design choice under existing Product Truth; no new Founder decision is required unless the correction would change merchant-visible lifecycle meaning.

---

### SEC-EIS10-10 — 22-§20-2 unblocking evidence is incomplete relative to the EIS's own durability design

**Severity:** HIGH  
**Affected EIS:** EIS-ESC-06; EIS-ESC-07; EIS-ESC-08; §18.3; EIS-TST-03

**Exact evidence**

EIS-ESC-07 requires, before an unblocking proposal:

- EIS lock;
- implementation of EIS-ESC-01 through EIS-ESC-05;
- negative tests;
- source-complete cascade inventory;
- G-6 production verification before production reliance;
- independent Security review and Mission Control disposition.

But 22-§20-2 is also mapped to EIS-ESC-06, and the durable-history outcome depends on the migration/backfill sequence in EIS-ESC-08. Section 18.3 tests uncontrolled deletes and identity deletion, but does not test governed business deletion where some record classes are retained, some may be minimized/deleted and a legal/dispute hold is present.

**Security consequence**

Mission Control could be presented with an "unblock-ready" evidence set while the governed business-deletion path that can itself destroy or retain history has not been implemented and tested.

**Classification:** EIS design correction.

**Precise correction required**

EIS-ESC-07 must require, before any proposal to unblock 22-§20-2:

- implementation and independent verification of EIS-ESC-06 as well as EIS-ESC-01 through EIS-ESC-05;
- completed/reconciled EIS-ESC-08 migration and backfill evidence for the test target;
- source-complete FK/trigger/delete-guard inventory after migration;
- governed business-deletion tests covering a mixed retained/deletable record set;
- legal/dispute-hold tests proving held records and their stable business attribution survive;
- transferred-business history and former-Owner identity-deletion tests;
- provider/production evidence only when making the corresponding production claim.

22-§20-2 remains BLOCKED / IN SCOPE in this review.

---

### SEC-EIS10-11 — SB-P-1.13 early-consumption boundary precedes relevant enforcement and audit completion

**Severity:** HIGH  
**Affected EIS:** §19.1 workstreams; §19.2; §19.5; EIS-DEP-01

**Exact evidence**

Section 19.5 says SB-P-1.13 may depend on the kernel contract, capability registry, channel values, confirmation bindings, idempotency, authority_events, denial contract and active-business context once WS-A1, WS-A2 and WS-D are implemented, verified and accepted and the EIS is locked.

However:

- authority_events and denial durability are WS-E, which is not in that prerequisite list;
- actual per-table-family enforcement is WS-A3;
- before the relevant WS-A3 family is migrated, legacy Owner-only RLS/direct DML/service-role paths may remain authoritative for that family;
- the EIS itself warns that two authority paths during migration are a risk.

**Security consequence**

SB-P-1.13 could integrate against the abstract kernel while the data family it reads/writes is still enforced by a legacy or parallel authority path, or it could rely on audit/denial contracts not yet implemented. That creates exactly the "second authority system" / split-enforcement risk the consumption boundary is meant to prevent.

**Classification:** EIS design correction.

**Precise correction required**

Change the dependency contract so SB-P-1.13 may consume a capability only after:

- the EIS is locked;
- WS-A1 and WS-A2 are implemented and verified;
- WS-D is implemented and verified for confirmation/idempotency it consumes;
- WS-E is implemented and verified for authority_events/denial behavior it consumes;
- every data/table family SB-P-1.13 will touch has completed its relevant WS-A3 enforcement cut-over and isolation tests;
- Mission Control has explicitly accepted the dependency evidence appropriate to that consumer.

SB-P-1.13 must not infer production enforcement from repository design or create temporary parallel authorization.

---

### SEC-EIS10-12 — Founder Decision Record 09 correction is faithfully represented

**Severity:** INFO  
**Affected EIS:** §12.3; §12.4; EIS-PPM-03; EIS-PPM-04

**Exact evidence**

The corrected EIS:

- keeps Reference Cost and margin separately delegable and Owner-only by default;
- allows exact delegated Reference Cost alongside an otherwise-authorized selling price;
- does not classify a person's own arithmetic as Smart Business granting margin;
- denies Smart Business-provided margin or margin-derived output without catalog.margin.read;
- invents no margin formula;
- removes the unapproved aggregate-only margin behavior;
- does not infer that margin permission itself defines exact per-product margin semantics.

This matches Founder Decision Record 09 and MC-150 / MC-152.

**Security consequence**

No new disclosure rule is invented at the EIS layer. Field/output projection remains the correct enforcement boundary.

**Classification:** Implementation verification requirement.

**Precise correction required**

No EIS correction for this finding. Later verification must prove every direct, batch, search, list, import preview, export, dashboard, aggregate, cache and SECURITY DEFINER response goes through the projection boundary, and current unconditional cost-return paths are removed.

---

### SEC-EIS10-13 — Effective grants/default privileges remain an evidence gate, not an EIS defect

**Severity:** MEDIUM  
**Affected EIS:** §9.1; §9.3; EIS-ISO-03; §17; WS-B

**Exact evidence**

The repository currently contains broad historical default-grant machinery, including GRANT ALL on listed tables and function EXECUTE grants to anon/authenticated/service_role plus postgres default privileges.

The EIS correctly requires:

- a source-complete effective-access inventory;
- explicit treatment of PUBLIC, anon, authenticated, service_role, executor roles and creator-role defaults;
- separately approved anonymous workflows rather than blanket anonymous revocation;
- WS-B dependence on live evidence;
- G-6/T4 UNVERIFIED until separately authorized evidence exists.

**Security consequence**

The design direction is acceptable, but repository files cannot prove the current effective production privilege graph.

**Classification:** Evidence-only gate.

**Precise correction required**

No design correction beyond SEC-EIS10-08. Before any WS-B or production-security claim is relied upon, collect the separately authorized live evidence named in §17 and compare it to the target effective-access inventory. G-6/T4 remains UNVERIFIED.

---

### SEC-EIS10-14 — ESC-1 provider, retention and legal-hold boundaries remain evidence and implementation gates

**Severity:** MEDIUM  
**Affected EIS:** §15; §16; §17; EIS-DEL-01 through EIS-DEL-07; EIS-LEG-01 through EIS-LEG-03

**Exact evidence**

The EIS correctly keeps:

- provider Auth deletion behavior against RESTRICT as an evidence item;
- backup/PITR treatment unresolved pending provider facts and legal rule;
- record-class retention as data, not a universal period;
- legal/dispute holds as blockers to deletion/minimization of held records;
- professional legal/privacy/retention validation deferred under Founder Record 06.

**Security consequence**

No safe runtime claim can be made until those facts and later implementation evidence exist. The EIS must not treat a successful local schema test as proof of provider deletion or backup erasure behavior.

**Classification:** Evidence-only gate.

**Precise correction required**

No Product Truth correction. Preserve the evidence gates and add the governed-business-deletion/legal-hold test coverage required by SEC-EIS10-10.

---

## 5. Areas reviewed with no additional material defect

The following EIS directions are security-sound at design level, subject to the corrections above and later evidence:

- explicit active-business context as requested context rather than authority;
- one-kernel / no parallel feature-specific authority principle;
- deny-by-default and command-boundary direction;
- separation of create permission from read-all/edit/export/analytics;
- source-complete authority-surface inventory before cut-over;
- separate handling of PUBLIC, anon, authenticated, service_role and executor roles;
- one-table-family-at-a-time enforcement migration;
- mid-import F-04(c) merchant outcome and idempotent row accounting;
- non-authorizing historical attribution through stable application identity;
- re-pointing businesses.owner_id and transactions.creator_id away from auth.users cascades;
- correction-history RESTRICT direction;
- direct authenticated business DELETE removal;
- transferred-business survival direction after former-Owner identity deletion;
- governed personal-identity deletion as a separate eligibility-checked process;
- provisional legal/privacy/retention boundary;
- R-2 CLOSED / SATISFIED status;
- no implementation/runtime/production claim.

## 6. ESC-1 disposition

ESC-1 remains **OPEN T8**.

This review finds the EIS direction capable of becoming a safe ESC-1 implementation design, but the defects in SEC-EIS10-09 and SEC-EIS10-10 mean the current v0.2 is not yet sufficient to support an EIS lock or any proposal to unblock 22-§20-2.

The repository evidence independently continues to show the critical current paths:

- Owner business DELETE grant/policy;
- businesses.owner_id → auth.users ON DELETE CASCADE;
- transactions.creator_id → auth.users ON DELETE CASCADE;
- transaction_correction_events.transaction_id → transactions ON DELETE CASCADE.

No runtime outcome is asserted.

No additional auth.users foreign-key cascade beyond businesses.owner_id and transactions.creator_id was identified in the repository migration search performed for this review.

## 7. Classification summary

| Finding | Severity | Primary classification | EIS correction before Stage 10 acceptance |
|---|---|---|---|
| SEC-EIS10-01 Principal model | HIGH | EIS design correction | YES |
| SEC-EIS10-02 Multi-business first run | HIGH | EIS design correction | YES |
| SEC-EIS10-03 Owner removal invariant | HIGH | EIS design correction | YES |
| SEC-EIS10-04 Complete authorization serialization | HIGH | EIS design correction | YES |
| SEC-EIS10-05 Atomic confirmation consume | HIGH | EIS design correction | YES |
| SEC-EIS10-06 Privileged reads/binding | HIGH | EIS design correction | YES |
| SEC-EIS10-07 Denial-audit durability | HIGH | EIS design correction | YES |
| SEC-EIS10-08 SECURITY DEFINER hardening | MEDIUM | EIS design correction | YES |
| SEC-EIS10-09 Retained business identity | HIGH | EIS design correction | YES |
| SEC-EIS10-10 22-§20-2 unblock evidence | HIGH | EIS design correction | YES |
| SEC-EIS10-11 SB-P-1.13 consumption | HIGH | EIS design correction | YES |
| SEC-EIS10-12 Reference Cost / margin | INFO | Implementation verification requirement | NO |
| SEC-EIS10-13 Effective access | MEDIUM | Evidence-only gate | NO |
| SEC-EIS10-14 Provider/legal boundaries | MEDIUM | Evidence-only gate | NO |

## 8. Product Truth / Founder-decision screen

No new Product Truth / Founder decision issue is established by this review.

The EIS defects above can be corrected within already-approved Product Truth:

- multi-business ownership is already approved;
- Owner replacement through transfer is already approved;
- authority must be current through consequential commit;
- one-kernel / isolation requirements are already approved;
- history durability and governed deletion requirements are already approved;
- Founder Decision Record 09 already resolves Reference Cost / margin semantics.

If a proposed correction would instead change merchant-visible deletion meaning, create a new participant authentication product experience, or redefine lifecycle ownership, Mission Control should route that specific change through the appropriate Product Truth gate. No such change is required by the corrections stated here.

## 9. Continuing holds and authority boundaries

Preserved exactly:

- R-2 — CLOSED / SATISFIED.
- ESC-1 — OPEN T8.
- 22-§20-2 — BLOCKED / IN SCOPE.
- G-6/T4 — UNVERIFIED.
- Professional legal/privacy/retention validation — deferred.
- EIS — DRAFT / NOT LOCKED.
- Implementation package — NOT AUTHORIZED.
- Implementation — NOT AUTHORIZED.
- Schema / SQL / migrations — NOT AUTHORIZED.
- Provider mutation — NOT AUTHORIZED.
- Production action — NOT AUTHORIZED.

This specialist report does not accept or lock the EIS, approve PR #687, authorize merge, select a migration, execute a deletion, close ESC-1 or unblock 22-§20-2.

## 10. Required Mission Control next action

Return EIS v0.2 for finding-scoped refinement of SEC-EIS10-01 through SEC-EIS10-11.

The refinement should preserve the accepted Founder Record 09 correction and all carried holds. A later Security delta re-review can be limited to those finding-scoped EIS changes if the exact source/EIS boundaries remain stable.

SECURITY REFINEMENT REQUIRED
