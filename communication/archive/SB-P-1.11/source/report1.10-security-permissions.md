# SMART BUSINESS MISSION CONTROL

# Report 1.10 — Security and Permissions Review

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Review Stage:** Source 18 Stage 10 — EIS Review

**From:** Security & Permissions Architecture

**To:** Mission Control

**Status:** REVIEW COMPLETE — REFINEMENT REQUIRED

**Date:** 2026-08-04

---

# Mission Identification

This report performs the Security and Permissions Review authorized by:

`communication/live/instruction1.10.md`

The review is limited to the draft Engineering Implementation Specification at:

`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`

This report records specialist findings only. It does not approve the complete EIS, apply EIS Lock, authorize implementation, modify Product Truth, or authorize any later lifecycle transition.

# Authority and Inputs Reviewed

Repository:

`SmartBusinessv1/smart-business`

Synchronized review base:

`b98fb214e9a0dd86fed5c80e737dd89ba48a9447`

Base commit message:

`Authorize SB-P-1.11 Stage 10 EIS Review (#46)`

Authoritative and evidentiary inputs reviewed:

- `communication/live/instruction1.10.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- `communication/live/report1.8.md`
- `communication/live/report1.9.md`
- `merge/active/00_Lighthouse_Constitution.md`
- `merge/active/01_Smart_Business_Master_System_Manifesto.md`
- `merge/active/02_Supabase_Architecture_Framework.md`
- `merge/active/04_API_WhatsApp_OpenAI_Framework.md`
- `merge/active/05_AI_Behaviour_and_Model_Training_Framework.md`
- `merge/active/11_Smart_Business_Product_Truth_Map.md`
- `merge/active/12_Product_Execution_and_Release_Framework.md`
- `merge/active/17_AI_Operations_Manual.md`
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
- `merge/active/P00_Operational_Profiles.md`
- `supabase/migrations/20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql`

The locked Product Blueprint, Founder Decisions D-001 through D-068, and approved engineering sequencing were treated as immutable.

# Scope Reviewed

The review covered:

- the shared permission-engine dependency;
- Owner, Manager, and Employee action boundaries;
- owner financial-intelligence protection;
- cost and margin read paths;
- row-level and field-level protection;
- authentication and command authorization;
- direct table access versus server-authoritative commands;
- RLS and cross-business isolation;
- service-role and `SECURITY DEFINER` boundaries;
- append-only history and audit integrity;
- idempotency, replay, concurrency, and stale-state handling;
- D-047 and D-068 protected relationship changes;
- file import and storage-reference security;
- scheduled-job security;
- WhatsApp and other non-interactive channel authority;
- temporary Owner-only sequencing.

# Security Architecture Assessment

The draft EIS correctly recognizes default-deny access, business-scoped records, command-layer validation, protected cost data, structured confirmation, audit history, idempotency, and temporary Owner-only sequencing.

The design is not yet safe to lock. Several control statements are internally contradictory or technically unenforceable as written. The most serious issues are:

- action-specific Manager permissions are collapsed into a broad management flag;
- authenticated clients can potentially bypass protected commands through direct table DML;
- the interactive `auth.uid()` command contract cannot safely serve WhatsApp or other server-originated channels;
- scheduled-price history is described as append-only while requiring mutation of prior events;
- the pending-price uniqueness design relies on a volatile-time partial-index predicate that PostgreSQL cannot enforce;
- idempotency replay is checked after stale-state validation;
- storage references are not structurally bound to the correct business;
- the D-047 linked-stock-history lock does not define an enforceable link-tenure relationship.

These are engineering refinements. They do not require a change to Product Truth.

# Permission Architecture Assessment

The Owner remains the default product authority. Manager and Employee access is intended to be permission-scoped. Employee denial of reference cost, margin, protected history, and management controls is preserved in principle.

The current permission-flag proposal does not faithfully preserve the locked action-specific Manager boundary. `catalog_manage` combines product creation, identity editing, lifecycle actions, deletion, and import. The locked Blueprint independently controls product creation/details and lifecycle. A Manager must not receive archive, reactivation, or deletion authority merely because product-detail maintenance was granted.

The temporary Owner-only sequence can be safe only when all raw authenticated table writes are denied and every protected mutation is forced through audited commands. The EIS does not yet establish that boundary.

# Business-Isolation Assessment

The proposed use of `business_id`, composite foreign keys, and business-scoped RLS is directionally correct.

Business isolation is incomplete for object references and server-originated execution:

- `catalog_products.image_ref` and `catalog_import_jobs.file_ref` are unconstrained text references rather than business-bound file metadata references;
- `SECURITY DEFINER`, cron, service-role, and conversational execution contracts do not yet state a non-bypassable rule that derives the business from authenticated or verified identity rather than trusting caller-supplied scope;
- the shared read function can bypass RLS and therefore needs explicit function ownership, execute grants, safe search path, and internal business-resolution rules.

# Sensitive-Data Visibility Assessment

Separating reference cost into `catalog_reference_cost_events` is a good field-level protection decision. Cost must remain absent from Employee responses and from any Manager response without explicit cost permission.

The EIS must refine the read contract so that:

- raw cost tables are not exposed through PostgREST to ordinary authenticated clients;
- the permission-aware read command is the only client-facing cost path;
- audit-history access follows the corresponding action permission rather than broad `catalog_view` access;
- cost values never appear in validation errors, import conflict responses, logs, metrics, search results, list totals, or conversational context without cost permission.

# Protected-Write Assessment

The draft correctly requires server-side validation, row locking, explicit confirmation, idempotency, atomicity, and rollback.

The protected-write design remains incomplete because:

- raw table grants may allow command bypass;
- retry lookup occurs after stale-state checks;
- immutable schedule-event rows are later updated;
- scheduled-job and conversational writes do not yet have a least-privilege execution identity;
- the D-047 history lock does not define a durable relationship between link tenure and stock events.

# Integration and Conversational-Channel Assessment

The EIS correctly defers the shared conversational engine and rejects a catalog-specific duplicate webhook pipeline.

The proposed command reuse is not yet implementable safely. Dashboard calls can use an authenticated user JWT and `auth.uid()`. WhatsApp webhook processing normally executes server-to-server and cannot safely impersonate a user merely by passing a resolved `business_id`, role, or permission object. Using the service role would bypass RLS and create excess authority.

The EIS must define a restricted internal channel contract that re-verifies sender identity, business membership, action permission, confirmation state, and command payload at the authoritative boundary. No client-supplied or AI-supplied business or permission claim may be trusted.

# Findings Register

## Finding SEC-PERM-001

**Severity:** `BLOCKING`

**Affected artifact and section:** EIS Section 7 — Catalog Permission Capabilities Required; Section 15 command authorization.

**Security or permission boundary:** Action-specific Manager authority.

**Approved source or Product Truth trace:** Founder Decisions D-033, D-034, D-048; locked Blueprint Section 8 — Permissions.

**Repository evidence:** The Blueprint independently controls catalog viewing, product creation/details, lifecycle, selling price, tax, reference cost, and inventory linking. The EIS defines `catalog_manage` as authority for creation, identity editing, archive, reactivation, deletion, and import.

**Description:** The proposed broad `catalog_manage` flag combines authority that Product Truth requires to remain independently owner-controlled. A Manager granted product-detail maintenance would also gain destructive lifecycle authority.

**Risk if unchanged:** Privilege escalation by role configuration; unintended archive, reactivation, or deletion authority; violation of the locked Manager boundary.

**Required disposition:** `REFINEMENT REQUIRED`

**Recommended correction:** Split at minimum:

- catalog view;
- product creation and identity/details maintenance;
- lifecycle archive/reactivate/delete;
- selling-price management;
- tax management;
- reference-cost management;
- inventory-link management.

Import may reuse the product-creation permission because D-058 explicitly ties import to product-creation authority. History reads must follow the corresponding action permission.

**Product Truth impact:** None. The correction restores the locked Product Truth.

**Verification requirement:** Permission-matrix tests proving every flag independently allows and denies its exact actions, including Manager detail-edit without lifecycle authority.

## Finding SEC-PERM-002

**Severity:** `BLOCKING`

**Affected artifact and section:** EIS Section 6 — RLS Policy Intent; Section 7 — Enforcement Locations; Section 15 — command contracts.

**Security or permission boundary:** Server-authoritative protected writes and direct API bypass.

**Approved source or Product Truth trace:** Blueprint Business Rule 24; D-054; Source 12 Permission Rules; Source 17 Permission Integrity.

**Repository evidence:** The EIS states that all mutations pass through commands, but its RLS table permits direct `INSERT/UPDATE` on mutable catalog tables. The current SB-P-1.10 migration precedent grants authenticated clients direct `SELECT, INSERT, UPDATE` on `inventory_items` and direct `INSERT` on `inventory_movements`, demonstrating that RLS alone does not force function use.

**Description:** An authenticated caller with table DML grants could bypass command validation, confirmation, idempotency, audit-event creation, stale-state checks, and protected-write contracts by calling the Supabase table API directly.

**Risk if unchanged:** Unlogged changes, D-068 bypass, duplicate writes, partial authority enforcement, audit gaps, and financial-integrity failure.

**Required disposition:** `REFINEMENT REQUIRED`

**Recommended correction:** Explicitly deny direct authenticated DML on all protected catalog and event tables. Expose only narrowly scoped command execution. Where `SECURITY DEFINER` is required, use a dedicated no-login owner, fully qualified objects, fixed safe `search_path`, explicit `REVOKE EXECUTE FROM PUBLIC`, minimal execute grants, internal `auth.uid()` or verified-channel identity resolution, and complete permission checks. Where `SECURITY INVOKER` remains possible, prove that table privileges and triggers still make command bypass impossible.

**Product Truth impact:** None.

**Verification requirement:** Direct PostgREST insert/update/delete attempts against every protected table must fail while the authorized command succeeds and produces complete audit evidence.

## Finding SEC-PERM-003

**Severity:** `BLOCKING`

**Affected artifact and section:** EIS Section 14 — Permission and Business-Context Resolution; Section 15 — shared `SECURITY INVOKER` command shape; Section 9 authentication step.

**Security or permission boundary:** WhatsApp and server-originated identity delegation.

**Approved source or Product Truth trace:** D-053, D-054; Source 04 identity routing and permission enforcement; Source 12 channel independence; Source 17 least privilege.

**Repository evidence:** The D-068 command rejects when `auth.uid()` is null, while the conversational design expects a webhook handler to call the same commands after passing an already-resolved `business_id` and permission context.

**Description:** A server-to-server webhook does not naturally possess the merchant's authenticated Supabase session. Calling under service role bypasses RLS; trusting an AI or handler-supplied business/permission object creates an authorization bypass; impersonating a user is not defined.

**Risk if unchanged:** Cross-business writes, service-role misuse, forged actor identity, permission bypass, or a future duplicate command surface.

**Required disposition:** `REFINEMENT REQUIRED`

**Recommended correction:** Define a shared internal channel-authority contract before EIS Lock. It must:

- verify the channel event and sender;
- map sender to one approved Smart Business identity and business membership;
- re-check the exact action permission at execution time;
- validate a short-lived confirmation token bound to business, actor, action, payload fingerprint, channel event, and expiry;
- invoke a narrowly privileged internal command not exposed to public clients;
- derive business and actor server-side;
- record actor, channel, request, and verification evidence;
- prevent the service role from becoming general merchant authority.

**Product Truth impact:** None.

**Verification requirement:** Tests for forged business IDs, stale permissions, replayed confirmations, duplicate webhooks, unknown senders, cross-business sender collisions, and revoked staff access.

## Finding SEC-PERM-004

**Severity:** `BLOCKING`

**Affected artifact and section:** EIS Sections 5.3, 10, and 11 — scheduled-price history and activation.

**Security or permission boundary:** Append-only financial history and enforceable uniqueness.

**Approved source or Product Truth trace:** D-011, D-013, D-043, D-044; Blueprint Selling-Price History and Scheduled Selling Price.

**Repository evidence:** The EIS declares selling-price events append-only with trigger-enforced rejection of updates, but cancellation, replacement, and activation set `superseded_by` on an existing event row. It also proposes a partial unique index containing `effective_at > now()`.

**Description:** The design requires mutation of an event table that is simultaneously declared immutable. PostgreSQL index predicates must use immutable expressions; a `now()`-dependent partial unique index cannot provide the proposed constraint.

**Risk if unchanged:** Migration failure, non-enforceable one-pending-price rule, mutable financial history, race conditions, and unreliable activation evidence.

**Required disposition:** `REFINEMENT REQUIRED`

**Recommended correction:** Use one coherent model:

- immutable transition events plus a separate current pending-schedule state row with a stable unique constraint; or
- a dedicated mutable schedule table and immutable price-history events when the schedule activates, changes, or cancels.

Do not mutate immutable history rows. Do not use volatile time expressions in index predicates. Preserve one pending schedule through stable state columns and transactionally enforced uniqueness.

**Product Truth impact:** None.

**Verification requirement:** Migration compilation, concurrent schedule/create/replace/cancel tests, immutable-history tests, and proof that at most one pending schedule exists under race conditions.

## Finding SEC-PERM-005

**Severity:** `HIGH`

**Affected artifact and section:** EIS Section 9 — D-068 command steps 2 through 8; Section 10 shared idempotency pattern.

**Security or permission boundary:** Retry safety and duplicate protected writes.

**Approved source or Product Truth trace:** D-068; Source 12 idempotency and safe failure; Source 17 auditability.

**Repository evidence:** The command performs stale-state, history-lock, target, confirmation, and unit-change checks before looking up the idempotency key.

**Description:** After a successful call changes the link and price, a legitimate retry with the same key and original preconditions reaches stale-state rejection before the stored idempotent result is checked. The operation therefore does not satisfy the promised replay contract.

**Risk if unchanged:** Retries may be reported as failures after success, causing merchant confusion, repeated corrective attempts, webhook retry loops, or duplicate follow-on actions.

**Required disposition:** `REFINEMENT REQUIRED`

**Recommended correction:** Resolve authenticated actor and business, lock or atomically register the idempotency scope, compare the payload fingerprint, and return the original result before mutable-state precondition checks for a known matching key. A conflicting payload must fail deterministically. Apply the corrected order to every protected command.

**Product Truth impact:** None.

**Verification requirement:** Successful-call replay after state change must return the original success; same key with altered payload must fail; concurrent first use of the same key must produce one result.

## Finding SEC-PERM-006

**Severity:** `HIGH`

**Affected artifact and section:** EIS Section 8 — History-Based Lock Condition.

**Security or permission boundary:** D-047 relationship mutability and stock-history integrity.

**Approved source or Product Truth trace:** D-047; Blueprint Product–Inventory Link; Business Rule 28 boundary.

**Repository evidence:** The EIS checks future sale or purchase business-event references but does not define a durable relationship between product-link tenure and inventory movements. Current `inventory_movements` rows are scoped to item and business, not catalog product.

**Description:** The design cannot reliably prove whether a stock event occurred while a product was linked to an inventory item. It may therefore allow removal or replacement after linked stock-event history exists.

**Risk if unchanged:** Historical product identity may be detached from the inventory identity used during its stock history, weakening future sales, purchase, correction, and audit evidence.

**Required disposition:** `REFINEMENT REQUIRED`

**Recommended correction:** Define an enforceable link-tenure boundary using immutable link events and a precise stock-event predicate. The contract must identify which movement event types count, how assignment time is compared with event and record times, how replacement is evaluated, and how future Sales/Purchase events bind product and inventory identity. Do not leave the lock condition as an always-unlocked placeholder.

**Product Truth impact:** None. If the engineering team cannot derive the exact predicate from D-047 without changing merchant-visible behavior, Mission Control must escalate the ambiguity rather than guess.

**Verification requirement:** Assignment, removal, and replacement tests before and after each qualifying stock-event class, including concurrent movement creation during a link-change attempt.

## Finding SEC-PERM-007

**Severity:** `HIGH`

**Affected artifact and section:** EIS Sections 5.1, 5.10, 13, and 18 — `image_ref` and `file_ref`.

**Security or permission boundary:** Cross-business file isolation and storage access.

**Approved source or Product Truth trace:** Blueprint Business Ownership and Isolation; P00 storage ownership and controlled access; Source 12 document security.

**Repository evidence:** Product images and import files are represented as unconstrained text references. The EIS refers to approved storage metadata but defines no business-scoped foreign key or mandatory ownership validation.

**Description:** A caller may provide or retain a reference to an object belonging to another business, a stale object, an unverified upload, or an arbitrary external URL unless the command contract explicitly prevents it.

**Risk if unchanged:** Cross-business document disclosure, unauthorized image reuse, malicious file processing, broken retention, and orphaned-object leakage.

**Required disposition:** `REFINEMENT REQUIRED`

**Recommended correction:** Reference an approved file-metadata record using a composite business-scoped relationship. Commands must verify owner business, upload status, content type, size, malware/safety state, retention state, and intended purpose before linking or parsing. Private objects require signed or controlled access; public URLs are rejected.

**Product Truth impact:** None.

**Verification requirement:** Cross-business object-reference attempts, stale/deleted objects, forged paths, MIME mismatch, and unsigned direct-access tests.

## Finding SEC-PERM-008

**Severity:** `HIGH`

**Affected artifact and section:** EIS Section 13 — CSV and Excel Import Architecture; Section 18 rate limiting.

**Security or permission boundary:** Malicious import content, resource exhaustion, privacy, and exported-error safety.

**Approved source or Product Truth trace:** D-055 through D-058; Source 12 document-intelligence security; P00 file lifecycle.

**Repository evidence:** The EIS states that spreadsheet formulas are not executed and proposes reviewable size limits, but does not address formula injection when raw cells or error reports are downloaded and opened in spreadsheet software. Retention and rate limits remain undefined.

**Description:** Treating a formula as text during parsing does not neutralize spreadsheet formula injection in a later CSV/XLSX error export. Large compressed workbooks, excessive worksheets, oversized cell content, repeated import creation, and indefinite raw-payload retention are also not bounded.

**Risk if unchanged:** Merchant-device command execution through exported spreadsheets, denial of service, excessive storage/compute cost, and unnecessary retention of sensitive business data.

**Required disposition:** `REFINEMENT REQUIRED`

**Recommended correction:** Before EIS Lock, make the following mandatory while leaving exact numeric values as engineering configuration:

- content and archive-structure inspection;
- compressed/uncompressed size, worksheet, row, column, and cell-length limits;
- per-business concurrent-job and rate limits;
- formula-leading cell neutralization in every downloadable CSV/XLSX or error report;
- raw-file and raw-payload retention/deletion rules;
- quarantined-file isolation;
- cancellation and cleanup behavior;
- no external links, macros, or formula execution.

**Product Truth impact:** None.

**Verification requirement:** Formula-injection payloads, zip-bomb style workbooks, MIME spoofing, excessive-cell tests, repeated-job abuse, retention expiry, and safe error-export tests.

## Finding SEC-PERM-009

**Severity:** `HIGH`

**Affected artifact and section:** EIS Sections 6, 11, 17, and 18 — scheduled activation service-role boundary.

**Security or permission boundary:** Privileged cross-business scheduled execution.

**Approved source or Product Truth trace:** D-043; Source 17 least privilege and environment governance; P00 service-role restriction and auditability.

**Repository evidence:** `activate_scheduled_catalog_prices` is assigned service-role or `SECURITY DEFINER` cross-business authority. The job model does not define execute grants, function ownership, row-lock strategy, per-product transaction isolation, race handling with cancel/archive, or system-actor audit fields.

**Description:** The broad service role is treated as the scheduled job identity. The price-event shape requires a non-null responsible user, but activation is system-executed. The EIS does not distinguish the user who scheduled the price from the system that activated it.

**Risk if unchanged:** Excess privilege, duplicate or conflicting activation under concurrency, inaccurate actor attribution, and an unauditable privileged path.

**Required disposition:** `REFINEMENT REQUIRED`

**Recommended correction:** Use a narrowly privileged scheduler function owned by a dedicated no-login role, revoke public execution, fully qualify objects, process due schedules with safe row locking such as `FOR UPDATE SKIP LOCKED`, and define transactional interaction with cancel/archive. Record both the authorizing user and system execution provenance, including job-run/request ID and outcome.

**Product Truth impact:** None.

**Verification requirement:** Concurrent activation/cancel/archive tests, duplicate scheduler invocation, least-privilege grant inspection, function-search-path inspection, missed-run recovery, and actor-provenance checks.

## Finding SEC-PERM-010

**Severity:** `HIGH`

**Affected artifact and section:** EIS Section 6 — permission-aware `SECURITY DEFINER` read; Section 15 read commands.

**Security or permission boundary:** Cost-field filtering and RLS bypass.

**Approved source or Product Truth trace:** D-014, D-016, D-035; Blueprint Permission Behaviour and Business Ownership and Isolation.

**Repository evidence:** The EIS relies on `catalog_product_read` to omit cost and margin for unauthorized callers, but does not define function owner, execute grants, safe search path, whether business scope is accepted as input, or how stale permissions are handled.

**Description:** A `SECURITY DEFINER` function bypasses caller RLS. Its explicit authorization logic becomes the only security boundary. Under-specified ownership or caller-controlled scope can expose another business's data or protected cost history.

**Risk if unchanged:** Cross-business reads, cost disclosure, search-path object substitution, and stale-permission access.

**Required disposition:** `REFINEMENT REQUIRED`

**Recommended correction:** The EIS must require:

- dedicated no-login function owner;
- `REVOKE EXECUTE FROM PUBLIC`;
- execute grants only to intended API roles;
- fully qualified objects and a fixed safe search path;
- server-derived actor and business membership;
- permission check on every call using current data;
- no caller-controlled authority or permission claims;
- fixed response types that physically omit unauthorized fields;
- no raw cost-table client grants.

**Product Truth impact:** None.

**Verification requirement:** Cross-business ID guessing, revoked permission, role downgrade during an active session, malicious search-path objects, and response-shape tests proving cost fields are absent rather than null-filled.

## Finding SEC-PERM-011

**Severity:** `MEDIUM`

**Affected artifact and section:** EIS Sections 5.3 through 5.7 and 17 — audit provenance.

**Security or permission boundary:** Complete accountability across channels and privileged execution.

**Approved source or Product Truth trace:** D-011, D-037, D-064; Source 12 auditability; Stage 10 instruction audit requirements.

**Repository evidence:** `catalog_audit_events` carries actor channel and request ID, but dedicated price, tax, cost, and link event definitions do not consistently include those fields. Section 17 nevertheless claims channel attribution on every audit-relevant write.

**Description:** Dedicated histories may identify a user but not the originating channel, request, permission authority, or system executor. This creates an internal contradiction and weakens incident reconstruction.

**Risk if unchanged:** Incomplete evidence for duplicated webhooks, imported changes, service-role actions, support investigations, and permission disputes.

**Required disposition:** `REFINEMENT REQUIRED`

**Recommended correction:** Standardize immutable provenance across all dedicated event tables: business, actor user where applicable, actor type, channel, request/correlation ID, authorizing permission/action, recorded time, effective time where applicable, and system job/run identity for automated execution. Failure evidence belongs in protected operational logs without exposing cost values.

**Product Truth impact:** None.

**Verification requirement:** Dashboard, import, WhatsApp, voice, photo, and scheduled-job tests proving complete and correctly permission-scoped audit provenance.

# Product Truth Impact

No finding requires Product Truth to change.

The report preserves:

- Founder ownership of Product Truth;
- Owner control of financial visibility and permissions;
- independent action-specific Manager authority;
- Employee default denial of owner financial intelligence;
- Ask CFO and AI as assistants rather than authorities;
- human confirmation for consequential actions;
- business isolation;
- catalog and inventory separation;
- D-047 and D-068 safeguards.

# Mandatory Open-Parameter Dispositions

| Open parameter | Security and Permissions disposition | Reason |
|---|---|---|
| Multilingual similarity algorithm and threshold | `ACCEPTED AS WRITTEN` | Security risk is proportionate because suggestions are business-scoped, explicitly uncertain, and cannot write or merge automatically. Final threshold remains an engineering-quality choice. |
| CSV/Excel row and file-size limits | `REFINEMENT REQUIRED` | Exact values may remain engineering parameters, but enforceable multi-dimensional resource limits, rate limits, retention, and formula-injection controls must be mandatory before EIS Lock. |
| Final index selection and query-plan validation | `REFINEMENT REQUIRED` | The current pending-price partial-index proposal is not enforceable because it depends on `now()`. Security-critical uniqueness, lock, RLS, and idempotency access paths must be corrected and identified for validation. |
| Scheduled-price activation polling interval | `ACCEPTED AS WRITTEN` | One minute is a reasonable engineering starting value. The privileged job contract, locking, and audit model require refinement independently of the interval. |
| Shared permission-engine sequencing and ownership | `REFINEMENT REQUIRED` | Phase 2a must not begin until a separately governed shared permission engine has an explicit owner, schema contract, migration authority, and integration gate. |
| Shared conversational-engine sequencing and ownership | `REFINEMENT REQUIRED` | Phase 3 must not begin until the shared engine supplies a verified non-interactive identity and authorization contract. |
| Inventory-link removal without D-068 price reconfirmation | `ACCEPTED AS WRITTEN` | Removal leaves the existing unit and price unchanged and therefore does not itself reinterpret a numeric price. Acceptance is conditional on correction of the D-047 linked-stock-history lock. |

# Required Refinements

Before EIS Lock, Mission Control should require an EIS refinement that:

1. restores independent Manager action permissions;
2. makes command-only writes technically non-bypassable;
3. defines secure dashboard and non-interactive channel identities;
4. hardens every `SECURITY DEFINER` and scheduler function;
5. redesigns scheduled-price state and immutable history coherently;
6. corrects idempotency replay ordering;
7. defines an enforceable D-047 linked-stock-history predicate;
8. business-binds product images and import files;
9. makes import abuse, formula, retention, and cleanup controls mandatory;
10. standardizes audit provenance across all event types.

# Deferred Items

The following remain correctly deferred by approved sequencing:

- Manager and Employee catalog access until the shared permission engine exists;
- WhatsApp, voice, and photo catalog mutations until the shared conversational engine exists;
- implementation values based on measured load, including final similarity threshold, polling interval, and operational rate-limit numbers.

Deferral does not permit placeholder security boundaries. The EIS must define the safe contract before lock even when implementation occurs later.

# Verification Requirements

The refined EIS must require evidence for:

- direct table-API bypass denial;
- cross-business RLS and object-storage isolation;
- independent Manager permission flags;
- Employee sale-use response filtering;
- cost response-shape omission;
- `SECURITY DEFINER` ownership, grants, and search-path inspection;
- service-role and scheduler least privilege;
- D-047 and D-068 concurrency and rollback;
- idempotent replay after successful state change;
- scheduled-price uniqueness and immutable history;
- import formula injection, MIME spoofing, resource exhaustion, retention, and cleanup;
- WhatsApp sender verification, stale permission, confirmation replay, and duplicate webhook delivery;
- complete actor, authority, channel, request, and system-execution audit evidence.

# Scope and Boundary Confirmation

- Product Blueprint modified: **NO**
- Founder Product Decision Record modified: **NO**
- Draft EIS modified: **NO**
- Product Truth changed: **NO**
- Founder decision created: **NO**
- EIS accepted or locked: **NO**
- Implementation package created: **NO**
- Application code or tests modified: **NO**
- SQL, migrations, RLS, RPCs, functions, or database state modified: **NO**
- Supabase, Lovable, infrastructure, deployment, or production modified: **NO**
- Governance source modified: **NO**
- Self-approval or self-merge performed: **NO**

Authorized changed path:

`communication/live/report1.10-security-permissions.md`

# Repository and Pull-Request Evidence

- Repository: `SmartBusinessv1/smart-business`
- Synchronized base commit: `b98fb214e9a0dd86fed5c80e737dd89ba48a9447`
- Branch: `mission/SB-P-1.11-security-permissions-review`
- Exact changed file: `communication/live/report1.10-security-permissions.md`
- Commit SHA: recorded by GitHub publication and PR evidence
- Pull-request number and state: recorded after PR creation
- Self-approval: not performed
- Self-merge: not performed

# Validation Status

- Exact changed-file scope: PASS — one authorized report path only.
- Secret and credential inspection: PASS — no credentials, tokens, or secret values added.
- Whitespace and Markdown structure: inspected before publication.
- Repository Markdown Quality Gate: to be confirmed by the pull-request workflow.
- Local pre-commit Markdown Quality Gate: not available through the connector-only write path; the pull-request workflow is the independent repository validation evidence.

# Final Specialist Disposition

```text
REFINEMENT REQUIRED
```

The draft EIS should not proceed to EIS Lock until the blocking and high-severity findings above are resolved and independently verified.
