# SB-DOC-PHASE1-HISTORY-1.0 — Security & Permissions Architecture Historical Extraction

## Document Status

- **Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`
- **Source batch:** Founder-supplied `security_permission_chat.txt`
- **Specialist room:** Security & Permissions Architecture
- **Document type:** Historical evidence extraction
- **Scope:** Historical continuity only
- **Governance impact:** None
- **Product Truth impact:** None
- **Runtime impact:** None
- **Completed-folder continuity records:** Not created by this batch

## Provenance Boundary

This extraction is based on the Founder-supplied Smart Business ChatGPT Project transcript `security_permission_chat.txt`.

The room is relatively late in the project chronology. The earliest supplied entry is dated 6 August 2026 and begins inside `SB-P-1.11 — Product Catalog & Pricing` specialist review. Accordingly, this source is strong for late Phase 1 security and permission history but provides no direct original-era evidence for the identities of `SB-P-1.0` through `SB-P-1.8`.

The source records Security & Permissions Architecture analysis, Mission Control instructions, repository-report creation, and some independent verification results. Where the room reports external provider state, that report remains specialist evidence; it is not silently elevated into broader historical truth beyond the exact scope supported.

## Executive Finding

The Security & Permissions Architecture room materially strengthens the late Phase 1 historical record, especially `SB-P-1.11`, by showing how Smart Business moved from product/database contract review into increasingly mature security-boundary verification across Supabase, AWS IAM, GitHub OIDC, IAM Roles Anywhere, Lambda Function URLs, evidence access, and release isolation.

The dominant maturity pattern is:

**define the intended authority boundary → identify over-broad or ambiguous authority → narrow the contract → independently re-verify the exact correction → preserve passing controls → avoid using a correction as authority for the next action.**

This room is one of the clearest historical sources demonstrating that Team LIPS security practice evolved beyond generic "least privilege" language into exact proof of who may do what, through which path, under which identity, against which resource, with which evidence, and with what non-authority boundaries.

---

# 1. Mission Register Impact

## SB-P-1.0

**Status after this batch: `UNRESOLVED`.**

No direct `SB-P-1.0` / `SB-P1.0` identity is present in this security transcript.

## SB-P-1.1 through SB-P-1.8

**No direct original-era mission-identity evidence added.**

The room is too late in the project chronology to safely reconstruct these mission identities from this source.

## SB-P-1.9

**No material original-era mission evidence added by this transcript.**

The room does not provide a direct security review history tied to the initial `SB-P-1.9` mission execution. Do not infer one from later release/security work.

## SB-P-1.10

**Later release-security context strengthened, not original mission identity.**

The transcript later contains `SB-REL-1.10-1.11 — Gate 2A Security & Isolation Evidence Closure`, which jointly evaluates release evidence affecting Inventory (`SB-P-1.10`) and Catalog/Pricing (`SB-P-1.11`). This is post-implementation release-security evidence, not evidence that redefines `SB-P-1.10` itself.

## SB-P-1.11 — Product Catalog & Pricing

**Status: materially strengthened.**

This transcript provides extensive direct specialist-room evidence across:

- security review of the executable engineering contract;
- Owner-only authority derivation;
- business-scoped uniqueness and tenant boundaries;
- reference-cost confidentiality;
- server-derived actor/business identity;
- D-068 preview/confirmation binding;
- idempotency concurrency;
- rejection-vocabulary design;
- `SECURITY DEFINER` exposure hardening;
- role/executor boundaries;
- RLS requirements;
- later AWS/GitHub execution-access review;
- IAM Roles Anywhere correction/re-verification;
- release-time Inventory anonymous-grant and cross-tenant evidence closure.

This batch confirms Security & Permissions Architecture was not simply a final audit function. It operated as a specialist design-review, correction, and independent-verification authority within Mission Control-assigned scope.

---

# 2. SB-P-1.11 — Lead Security Review Chronology

## 2.1 SR1 / SR2 specialist-review period

The transcript begins with Mission Control activating:

`SB-P-1.11-SR1 — Joint Security and Database Contract Review`

with:

- Security & Permissions Architecture as lead reviewer;
- Supabase Backend Architecture as supporting reviewer;
- no implementation authority;
- no Product Truth change authority;
- no deployment authority.

The room then produces a consolidated lead review under:

`SB-P-1.11-SR2 — FINAL SPECIALIST ACCEPTANCE`

with disposition:

`COMPLETE — CORRECTIONS REQUIRED`

and later:

`FINAL SPECIALIST ACCEPTANCE FAILED — CORRECTIONS STILL REQUIRED`.

This is important historical evidence that specialist review was permitted to reject an engineering contract without reopening Product Truth.

## 2.2 Security-sensitive contract findings

The room identified a set of concrete contract-level security problems.

### Reference-cost confidentiality

A fixed PostgreSQL composite could not physically omit `reference_cost` for unauthorized callers. Returning `NULL` would still expose the protected field name and generated API shape.

The required correction was to use a server-selected `jsonb` response with two closed shapes:

- base product-detail shape with no reference-cost key;
- cost-authorized shape available only after server re-derivation of current Owner authority.

Historical lesson:

**Confidentiality includes response shape and metadata exposure, not only value secrecy.**

### Confirmation binding / redundant identifiers

The proposed D-068 confirmation functions accepted client-supplied product and inventory identifiers in addition to a server-issued preview token.

Security required confirmation to derive product, target, business, initiating actor, requested action, expected-state data, and price-confirmation requirements only from the locked preview row and current server state.

Historical lesson:

**A confirmation must bind to the exact server-reviewed action; repeating client identifiers adds attack surface rather than authority.**

### Broad update mechanisms

A generic `p_clear_fields text[]` mechanism was rejected in favour of explicit full-replacement semantics and a static column list.

Historical lesson:

**Generic mutation surfaces should be narrowed when explicit fields can express the approved product behaviour.**

### Cursor and search-context binding

The search cursor needed to be bound not only to rank/name/id but also to the same business, query, archive filter, and category filter.

Historical lesson:

**A pagination token or cursor is data, not authority. The server must independently prove that its anchor remains valid in the current authorized search context.**

### Preview lifecycle / tenant-scoped integrity

The room required open-preview uniqueness to be explicitly business-scoped:

`UNIQUE (business_id, product_id) WHERE closed_at IS NULL`

and required product-row locking plus internal handling of concurrent uniqueness conflicts.

Historical lesson:

**Even when identifiers are globally unique, tenant scope should remain visible in integrity boundaries that protect tenant-owned state.**

### Authority provenance

The contract was corrected so initial Phase 1 authority provenance used current runtime truth:

`owner_via_businesses.owner_id`

rather than storing future permission-flag terminology that did not yet exist at runtime.

Historical lesson:

**Audit provenance must describe the authority that actually authorized the action, not a future permission system or intended architecture.**

### Idempotency concurrency

Security required one exact serialization model using the boundary:

`(business_id, operation, idempotency_key)`

with transaction-scoped serialization and only terminal `completed` or `rejected` outcomes exposed to clients.

Historical lesson:

**Idempotency is a concurrency and authority contract, not merely a duplicate-key convention.**

### Dormant file-reference infrastructure

`catalog_file_references` and `catalog_products.image_ref` were rejected from initial Phase 1 because no storage bucket, upload path, scan worker, signed-access model, or authorized source of scan truth existed.

Historical lesson:

**Do not create dormant security-sensitive scaffolding that implies guarantees or capabilities the system cannot yet enforce.**

### SECURITY DEFINER and executor hardening

The room required:

- designated `NOLOGIN` executor roles;
- `SECURITY DEFINER` functions;
- `SET search_path = ''`;
- fully schema-qualified references;
- no PUBLIC execution;
- internal helpers outside Data API-exposed schemas;
- no executor `BYPASSRLS`;
- no executor inheritance from service-role authority;
- no broad schema privileges;
- no `SET ROLE` path;
- RLS active on every created catalog table;
- explicit role-targeted policies;
- both `USING` and `WITH CHECK` for UPDATE policies.

Historical lesson:

**A privileged function is safe only when ownership, execution grants, search path, helper visibility, RLS behaviour, and role capabilities form one closed exposure contract.**

## 2.3 Specialist acceptance did not equal implementation authority

The transcript repeatedly preserves that review/correction work did not authorize:

- implementation;
- Build Mode;
- publishing;
- deployment;
- future scope.

This reinforces a recurring Phase 1 organizational lesson:

**security acceptance, implementation authorization, deployment authorization, and release authorization are separate states.**

---

# 3. AWS / GitHub / IAM Security Evolution

## 3.1 Independent execution-access review

By mid-August the Security room was reviewing the AWS execution-access design under Mission Control instructions without provisioning or modifying resources.

This shows the room had evolved from database/permission contract review into infrastructure identity and execution-path verification.

## 3.2 GC-38R TagResource correction

The room independently verified a narrow correction that added only:

`rolesanywhere:TagResource`

with exact resource and request-tag restrictions.

The verification explicitly checked that the correction did **not** introduce:

- `UntagResource`;
- wildcard Roles Anywhere authority;
- update/delete/enable/disable permissions;
- broader OIDC trust;
- broader runtime invocation authority.

The room also preserved passing controls including:

- exact GitHub OIDC trust restrictions;
- RuntimeBoundary Version 2;
- AWS_IAM Function-URL-only invocation ceiling;
- no IAM users;
- no account-owner access keys;
- MFA posture;
- closure of the temporary Founder administrative session;
- offline Founder custody of CA private-key material;
- no workflow access to that CA private key.

Disposition:

`GC-38R TAGRESOURCE CORRECTION INDEPENDENT SECURITY VERIFICATION — PASS — PHASE B RERUN DECISION ELIGIBLE`

Critically, the PASS explicitly did **not** authorize another Phase B run.

Historical lesson:

**A successful correction verification may make a later decision eligible; it does not automatically grant authority for that later action.**

## 3.3 First-time IAM Roles Anywhere service-linked-role bootstrap

A later failure showed:

`AccessDeniedException — no identity-based policy allows iam:CreateServiceLinkedRole`

Security compared two bounded options:

1. add a tightly conditioned deploy-role permission;
2. use a one-time Founder-controlled administrative creation while leaving the steady-state deploy role unchanged.

The room preferred the second option under least privilege because the requirement was a one-time bootstrap prerequisite, not a steady-state deployment capability.

Historical lesson:

**Do not permanently broaden a steady-state machine identity to solve a one-time bootstrap requirement when a narrower controlled administrative action can preserve the long-term boundary.**

The room preserved explicit non-mutation during this review: no AWS/IAM mutation, no privileged/root/admin session, no workflow rerun, no CA/private-key handling, and no production change.

---

# 4. Runtime and Invocation-Path Security

The transcript preserves repeated reference to `RuntimeBoundary Version 2`, which constrained invocation to the intended AWS IAM-authenticated Function URL path.

This security concept had already emerged in Infrastructure evidence, but the Security room independently treats it as a boundary that must remain unchanged during unrelated IAM corrections.

Institutional lesson:

**Least privilege includes the allowed invocation path, not only the allowed action and resource. A runtime identity should not gain a second path to invoke the same function merely because the resource is the same.**

---

# 5. Release Security — SB-REL-1.10-1.11 Gate 2A

The final supplied section moves beyond SB-P-1.11 implementation into joint release evidence for Inventory and Catalog/Pricing.

Mission:

`SB-REL-1.10-1.11 — Gate 2A Security & Isolation Evidence Closure`

Security was instructed to:

- perform an independent Inventory anonymous-grant disposition;
- perform a read-only `F23-01` live cross-tenant isolation probe;
- use a controlled branch and PR;
- make no production mutation;
- stop instead of fabricating test identities/data if suitable pre-existing test prerequisites did not exist.

## 5.1 Anonymous Inventory grants

Direct production evidence showed anonymous callers saw zero Inventory rows under RLS, and no anonymous policy, role-inheritance bypass, Inventory view bypass, or anon-executable privileged Inventory RPC was found.

However, the room found `anon` still held unnecessarily broad table privileges, including broad CRUD and maintenance-related privileges, and that public-schema default privileges could reproduce broad anonymous authority on future objects.

Disposition:

`HARDENING REQUIRED BEFORE RELEASE APPROVAL`

The room correctly did **not** claim an active Critical/High row-leak exploit because no anonymous row leak had been demonstrated.

Historical lesson:

**RLS successfully hiding rows does not make unnecessarily broad SQL grants acceptable. Effective exposure must be evaluated as the combination of grants, policies, role inheritance, privileged functions, and future default privileges.**

## 5.2 F23-01 cross-tenant isolation probe

The room could not find two clearly designated pre-existing production-safe test owners/businesses with suitable release-relevant data.

It therefore did not:

- repurpose real merchant identities;
- synthesize ownership claims;
- create test users/businesses;
- create Inventory/Catalog data.

Status:

`BLOCKED — PREREQUISITE REQUIRED`

Gate result:

`BLOCKED — EVIDENCE INSUFFICIENT`

Historical lesson:

**A missing safe test fixture is an evidence prerequisite, not permission to create production identities or mutate production simply to complete a verification checklist.**

---

# 6. Security Capability Evolution

The Security room demonstrates a mature capability progression:

1. **Contract review** — identify authority and disclosure defects before build.
2. **Permission architecture** — server-derived actor/business authority, Owner-only boundaries, RLS and executor design.
3. **Mutation integrity** — preview confirmation, state fingerprints, idempotency, concurrency, lifecycle constraints.
4. **Data disclosure architecture** — physical omission of confidential fields and history rather than null-value masking.
5. **Privileged function hardening** — `SECURITY DEFINER`, search-path closure, internal helper isolation, executor roles, no PUBLIC execution.
6. **Infrastructure IAM review** — OIDC trust, request-tag boundaries, Roles Anywhere, service-linked-role bootstrap.
7. **Runtime invocation boundaries** — preserve the authorized path, not just the resource/action pair.
8. **Independent correction verification** — re-check only the exact corrected boundary and preserve unrelated passing controls.
9. **Release evidence discipline** — distinguish hardening defects from proven exploits and stop when safe test prerequisites are missing.

This is strong evidence that Team LIPS security practice became increasingly evidence-driven and compositional: no single control—RLS, IAM policy, UUID, OIDC claim, Function URL, or review report—was treated as sufficient in isolation.

---

# 7. Tools / Platforms / Resources Registry Impact

## Supabase

Security role in this source:

- RLS enforcement review;
- direct-table grant minimization;
- role/executor design;
- `SECURITY DEFINER` hardening;
- internal schema/Data API exposure review;
- effective anonymous privilege analysis;
- release-time cross-tenant verification planning.

Boundary learned:

**RLS is necessary but not sufficient; effective authorization includes grants, role inheritance, function execution, schema exposure, and default privileges.**

## GitHub

Security use in this source:

- controlled report branches;
- human-reviewed PRs;
- OIDC workload identity restrictions;
- repository/environment/ref/subject constraints;
- no self-merge.

Boundary learned:

**GitHub OIDC is an execution identity whose trust policy must be exact; repository access alone is not deployment authority.**

## AWS IAM / IAM Roles Anywhere

Security use:

- deploy-role permissions;
- request-tag conditions;
- trust-anchor/profile resource scoping;
- service-linked-role bootstrap review;
- RuntimeBoundary preservation;
- one-time Founder administrative-session reasoning.

Boundary learned:

**bootstrap authority, deployment authority, and runtime authority are distinct permission classes.**

## Lambda Function URL

Security role:

- preserve `AWS_IAM` authentication;
- preserve Function-URL-only runtime invocation ceiling;
- prevent unrelated IAM corrections from broadening the invocation path.

## CA / certificate material

Security posture recorded:

- CA private-key custody remains Founder-controlled and offline;
- canonical workflow does not receive/store the CA private key;
- security reviews must not casually touch private-key material.

---

# 8. High-Value Lessons Learned Register

## Security truth is effective state, not intended configuration

A migration, policy document, or IAM design can look correct while effective grants or inherited behaviour remain broader than intended.

**Promotion candidate:** Organization-wide capability.

## Response shape can leak protected capability

Returning a protected field as `NULL` may still reveal sensitive schema/feature existence through generated types, telemetry, cache shapes, and application assumptions.

**Promotion candidate:** Smart Business security architecture / wider Team LIPS API design.

## Server-issued preview tokens should carry the confirmation authority context

Do not ask the client to repeat identifiers already bound in a server-issued preview state.

**Promotion candidate:** Reusable transactional-command design.

## Runtime provenance must record actual authority

Do not write future permission names into current events when current authority is Owner-via-business relationship.

**Promotion candidate:** Auditability standard.

## Idempotency must define concurrent behaviour

A key alone is not enough. The system must specify serialization, payload fingerprinting, terminal outcomes, replay behaviour, and foreign-business non-disclosure.

**Promotion candidate:** Engineering standard.

## Do not scaffold unsupported security promises

File-reference/scanning infrastructure was deferred rather than creating a schema that implied operational scanning guarantees without a scanner, storage path, or policy model.

**Promotion candidate:** Anti-bloat + security-by-design rule.

## Correct the narrow permission without disturbing passing controls

The TagResource verification checked the exact diff and separately confirmed unchanged OIDC trust, RuntimeBoundary, CA custody, and other controls.

**Promotion candidate:** Security correction protocol.

## One-time bootstrap needs should not automatically become permanent machine permissions

The Roles Anywhere service-linked-role case preferred a one-time controlled Founder administrative action over broadening steady-state deploy authority.

**Promotion candidate:** Infrastructure least-privilege doctrine.

## Missing verification fixtures are blockers, not excuses to mutate production

The Gate 2A cross-tenant probe stopped when safe pre-existing test identities were unavailable.

**Promotion candidate:** Production verification discipline.

## Do not overstate severity beyond evidence

Broad anon grants were classified as hardening-required, while the room explicitly declined to call them a proven Critical/High row leak because no row leak was demonstrated.

**Promotion candidate:** Security evidence-quality doctrine.

---

# 9. Mistakes / Corrections / Maturity Signals

This room is less a record of one catastrophic security failure than of repeated correction of potentially unsafe ambiguity before or around execution.

The important maturity signals are:

- blocking a contract that remained security-sensitive despite broad structural improvement;
- replacing ambiguous client-supplied authority inputs with server-derived state;
- removing dormant file/security scaffolding;
- narrowing role and helper exposure;
- preserving exact public error/rejection semantics to reduce identifier or ownership disclosure;
- independently verifying narrow IAM corrections;
- refusing to convert correction PASS into implicit rerun authority;
- preferring one-time bootstrap administration over permanent deploy-role broadening;
- stopping a live isolation test when safe fixtures did not exist;
- distinguishing broad privilege posture from a proven exploit.

These patterns materially support the wider Mission Control doctrine already visible elsewhere:

**prove the actual boundary, correct only what failed, preserve what passed, and claim only what the evidence demonstrates.**

This is institutional learning, not a new governance source.

---

# 10. Evidence & Open Questions Ledger Impact

## Confirmed from this source

- Security & Permissions Architecture is active by 6 August 2026 inside SB-P-1.11 specialist review.
- SB-P-1.11 specialist acceptance required multiple security-sensitive contract corrections before execution.
- Owner authority for initial Product Catalog/Pricing was intended to be server-derived from `businesses.owner_id = auth.uid()`.
- Reference-cost confidentiality required physical response-shape omission for unauthorized callers.
- D-068 confirmation was hardened toward preview-token-only authority context.
- Idempotency required exact concurrency/serialization behaviour.
- Executor and privileged-function exposure required explicit hardening.
- Later AWS execution-access review preserved exact OIDC and runtime boundaries.
- The GC-38R TagResource correction received an independent Security PASS without rerun authority.
- The Roles Anywhere service-linked-role issue was classified as a one-time bootstrap prerequisite, with one-time Founder-controlled creation preferred over permanent deploy-role broadening.
- Gate 2A found broad anonymous Inventory grants despite zero visible rows under RLS and required hardening before release approval.
- Gate 2A cross-tenant live verification stopped because safe pre-existing production test identities/data were unavailable.

## Not established by this source

- identity of `SB-P-1.0`;
- original mission identities for `SB-P-1.1` through `SB-P-1.8`;
- any claim that the Security room existed during those early missions;
- final closure state of every later security correction beyond the exact transcript entries;
- any broad claim that production was fully secure or release-ready merely because individual checks passed.

## Cross-questioning no longer required from Security for early mission numbering

This room is not an efficient source for resolving `SB-P-1.0` or early Phase 1 mission names. The remaining source priority should move to the Founder Room, which may preserve inception-era intent, first mission numbering, and the missing transition into the formal Product Mission sequence.

---

# 11. Current Reconstruction Matrix After Security Batch

| Mission | Historical confidence after this batch | Security-room contribution |
|---|---|---|
| SB-P-1.0 | UNRESOLVED | None |
| SB-P-1.1 | CONFIRMED elsewhere | None |
| SB-P-1.2 | CONFIRMED elsewhere | None |
| SB-P-1.3 | CONFIRMED elsewhere | None |
| SB-P-1.4 | CONFIRMED executed Bootstrap family elsewhere | None |
| SB-P-1.5 | CONFIRMED elsewhere | None |
| SB-P-1.6 | CONFIRMED elsewhere | None |
| SB-P-1.7 | CONFIRMED elsewhere | None |
| SB-P-1.8 | CONFIRMED / strongly evidenced elsewhere | None |
| SB-P-1.9 | CONFIRMED elsewhere | No meaningful original-era evidence |
| SB-P-1.10 | CONFIRMED elsewhere | Release-security evidence strengthened |
| SB-P-1.11 | CONFIRMED | Materially strengthened across contract, Supabase, IAM, OIDC, runtime-boundary, independent-verification, and release-security evidence |

---

# 12. Next Source Recommendation

The Security & Permissions specialist line is sufficiently extracted from the supplied transcript for this historical-reconstruction mission.

The next and final high-value room is the **Founder Room**.

Founder Room extraction should specifically search for:

1. inception chronology before Phase 1.1;
2. the exact identity or precursor of `SB-P-1.0`;
3. whether Supabase provisioning was ever explicitly numbered `SB-P-1.0`;
4. early transition from roadmap phases to formal Product Mission numbering;
5. Founder decisions that explain title/scope changes rather than only recording their later effects;
6. original product/architecture decisions that later became durable governance;
7. corrections where Founder intent overrode a mistaken room or roadmap interpretation;
8. the difference between original product intent and later formalized lifecycle/governance.

Do not create any `docs/phase-1-mission-blueprint/completed/SB-P-1.x.md` historical continuity file until the Founder Room extraction is complete and the cross-room evidence can be synthesized.

---

# Final Historical Assessment

The Security & Permissions Architecture transcript does not close the remaining early numbering gap, but it substantially completes the late Phase 1 security story.

Its most durable contribution is the evidence that Smart Business security matured from high-level principles into exact, independently verifiable authority boundaries across database, API response shape, confirmation state, privileged functions, deployment identity, bootstrap administration, runtime invocation path, and release evidence.

The strongest transferable lesson is:

> Security is not the presence of a control. Security is the proven effective boundary formed by identity, authority, resource, path, state, privilege, evidence, and correction discipline together.

That lesson should be preserved as institutional learning while remaining subordinate to current governance and verified repository/runtime state.