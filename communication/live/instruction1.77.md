# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — BUILD LOCK / CONTROLLED IMPLEMENTATION AUTHORIZATION

**Instruction ID:** instruction1.77  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Executing Agent:** Claude Code in VS Code  
**Authorized By:** Mission Control  
**Mission Type:** Build Lock + controlled implementation  
**Status:** AWAITING HUMAN MERGE BEFORE EXECUTION

---

## 1. Mission Control Final Combined Gate Evaluation

Mission Control evaluated the full SB-P-1.11-GC-1 design gate against the latest merged `main` at:

`9e2b5ce6cbd22cd8d634abba7900e581dcf9aa44`

The required independent gates are both satisfied:

1. `communication/live/report1.80.md` — `SECURITY READY FOR BUILD LOCK`;
2. `communication/live/report1.83.md` — `SUPABASE ARCHITECTURE READY FOR BUILD LOCK`.

Mission Control also confirms that Revision 4.0 of:

`docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`

is the standalone implementation contract for this Build Now gap-closure mission.

No unresolved cross-gate inconsistency remains between Security, Supabase Backend Architecture, and Revision 4.0.

**Combined Gate Verdict:** `GC-1 BUILD LOCK APPROVED`

This instruction therefore authorizes controlled implementation, subject to every boundary below.

---

## 2. Canonical Authority for Execution

Execute according to the latest merged versions of:

1. `00_Lighthouse_Constitution.md` / canonical Source 00 in the repository;
2. Smart Business governance foundation and Product Truth sources;
3. `merge/active/02_Supabase_Architecture_Framework.md`;
4. `communication/live/report1.80.md`;
5. `communication/live/report1.83.md`;
6. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md` — Revision 4.0;
7. this instruction.

If any implementation detail appears to conflict with Revision 4.0 or either ready-for-Build-Lock review, stop that affected path and report the conflict rather than improvising a new product or security decision.

---

## 3. Build Now Scope Authorized

Implement only the approved SB-P-1.11-GC-1 Build Now scope defined by Revision 4.0:

### A. Bulk Catalog Import

Implement the governed CSV/XLSX bulk catalog import flow, including:

- upload and authoritative server-side parsing;
- parser hardening and bounded processing;
- preview and row classification;
- duplicate detection using the existing governed Catalog read surface and exact-match semantics;
- correction/quarantine behavior;
- explicit merchant confirmation;
- governed product creation through the existing Catalog command surface;
- row/batch idempotency and retry behavior;
- truthful outcomes;
- transient raw-file handling with no retained source upload;
- import-support audit/lifecycle persistence exactly as locked in Revision 4.0.

### B. Selling Unit Presets + Custom

Implement the approved selling-unit preset experience while preserving merchant-defined custom values and the one-selling-unit-per-product rule.

No unit conversion engine is authorized.

### C. Category Presets + Merchant-Owned Categories

Implement the approved category preset suggestion experience while preserving:

- merchant-defined business-owned categories;
- `Create New` / custom category behavior;
- `Uncategorized`;
- no global mutable taxonomy;
- no automatic categorization;
- no archived-category reactivation command.

### D. Inventory ↔ Catalog Workflow Clarity

Implement the approved workflow/UI clarity improvements only.

Do not merge Inventory and Catalog records or automatically create Inventory rows from Catalog records.

### E. Tax UX Clarity

Implement the approved tax-mode/rate clarity improvements while preserving the locked tax behavior. Tax mode and tax rate remain orthogonal.

---

## 4. Locked Catalog Boundary

The public Catalog command surface remains exactly nineteen commands.

Implementation must not:

- add a twentieth public Catalog/import command;
- add `reactivate_catalog_category`;
- change the signature or authority model of an existing Catalog command unless an explicit defect makes the locked implementation impossible and Mission Control authorizes a correction separately;
- use service role to mutate Catalog Product Truth;
- bypass command audit, expected-state, business isolation, or idempotency controls.

Catalog Product Truth mutations must continue through the existing governed caller-JWT-scoped command path.

---

## 5. Bulk Import Security Boundary

The implementation must preserve the Security-approved contract from Revision 4.0 and `report1.80.md`.

### Caller authority

- Authenticate first through the caller-JWT path.
- Re-derive current actor, business, and Owner authority server-side.
- Do not trust browser-supplied actor ID, business ID, role, permission, lifecycle state, Product ID, or timestamps as authority.

### Current permission posture

- Owner: import allowed.
- Manager: fail closed until approved runtime permission infrastructure exists.
- Employee: import denied.

Do not implement a temporary Manager role flag, JWT claim shortcut, or frontend-only permission substitute.

### Reference Cost

Reference Cost remains independently authorized and must not be disclosed or mutated for an actor without the existing cost-authorized boundary.

### Privileged bookkeeping client

The server-only privileged client may be used only for the fixed bookkeeping operations explicitly permitted on:

- `catalog_import_batches`;
- `catalog_import_rows`.

It must never:

- authorize the caller;
- mutate Catalog Product Truth;
- call or substitute for any of the nineteen Catalog commands;
- accept arbitrary table/column selection from request input;
- enter browser bundles;
- expose privileged credentials through logs, responses, telemetry, downloads, or client environment variables.

---

## 6. Supabase Persistence Contract Locked for Build

Create the import-support persistence exactly according to Revision 4.0 and `report1.83.md`.

### `catalog_import_batches`

Implement the exact locked physical contract, including:

- required identifiers and fields;
- closed file-kind/status vocabularies;
- non-negative row count;
- committed status/timestamp coherence;
- `UNIQUE (business_id, id)`;
- Owner history index;
- no destructive cascade behavior.

### `catalog_import_rows`

Implement the exact locked physical contract, including:

- composite tenant-binding batch FK;
- positive row number;
- stable source-row uniqueness;
- business-scoped row-idempotency uniqueness;
- same-business matched/resolved Product FKs;
- closed row status and correction reason vocabularies;
- status-coupled resolution evidence;
- required delivery/retry indexes;
- no broad `parsed_snapshot` index;
- no destructive cascade behavior.

### Grants / default ACL

Because the repository default ACL grants broad table privileges on newly created public tables, the migration must explicitly neutralize inherited access before applying the narrow model.

Required effective posture:

- `anon`: no table access;
- `authenticated`: SELECT only;
- authenticated INSERT/UPDATE/DELETE: denied;
- `service_role`: retained only for the server bookkeeping boundary.

### RLS

For both support tables:

- enable RLS;
- no `anon` policy;
- authenticated Owner-only SELECT policy using the Revision 4.0 businesses-based predicate;
- no authenticated INSERT/UPDATE/DELETE policy;
- no Manager/Employee policy in this mission.

Do not broaden `catalog_internal` exposure to `authenticated`.

---

## 7. Atomic Claim, Retry, and Idempotency

Implement the Revision 4.0 compare-and-set batch claim exactly.

The claim must be one conditional update scoped by:

- batch ID;
- server-derived business ID;
- predecessor state `previewed` or retryable `failed`.

At most one concurrent claimant may transition the batch to `committing`.

A losing claimant must exit before Catalog mutation and return a truthful scoped outcome.

Persist each row idempotency key at preview time and reuse that same key on every retry.

Batch lifecycle must obey the locked rule:

- any retryable row still `FAILED` → batch ends `failed`;
- zero retryable `FAILED` rows → batch may become `committed`;
- once `committed`, batch never reopens.

---

## 8. File Parsing and Transport

Use the parser choices and hardening rules locked in Revision 4.0.

Implementation must include the approved CSV/XLSX dependencies and no unrelated dependency expansion.

The parser boundary must enforce the specified limits and reject unsupported or unsafe workbook/file behavior rather than attempting to execute or interpret it.

Raw uploaded source files remain transient and unretained in Phase 1.

No Supabase Storage bucket or public/private raw-upload retention system is authorized for this mission.

---

## 9. Implementation Sequence

Execute in controlled stages. Do not skip verification gates.

### Stage 1 — Repository Baseline

- pull latest `main`;
- verify HEAD contains this merged instruction;
- create a fresh implementation branch from that exact merged `main`;
- inspect current Catalog/backend/frontend code before changing anything;
- confirm no newer merged instruction supersedes this Build Lock.

### Stage 2 — Dependencies and Test Architecture

- add only the approved parser dependencies;
- establish the committed server-function/import test architecture required by Revision 4.0;
- preserve existing dependency and bundling boundaries.

### Stage 3 — Test-Project Persistence

- create the migration implementing the two support tables, constraints, indexes, ACL neutralization, grants, and RLS exactly;
- apply only to the dedicated Smart Business test Supabase environment under this instruction;
- do not apply the migration to production;
- verify authoritative ACL/catalog evidence and behavioral RLS results before proceeding.

### Stage 4 — Server Import Orchestration

- implement authenticated TanStack server-side import orchestration;
- implement authoritative parsing/preview/classification;
- implement server-only bookkeeping writes;
- implement exact duplicate detection;
- implement governed caller-JWT Catalog mutations;
- implement atomic claim/retry/idempotency behavior;
- keep service-role usage within the locked bookkeeping boundary.

### Stage 5 — Product/UI Gap Closure

Implement the approved frontend/product changes for:

- bulk import experience;
- selling-unit presets + custom;
- category presets + business-owned category creation/select;
- Inventory/Catalog workflow clarity;
- tax UX clarity.

Do not use Lovable as an alternative source of truth or mutate a Lovable project under this instruction.

### Stage 6 — Verification

Run the full verification contract from Revision 4.0, including the Security negative-test set and Supabase architecture verification requirements.

At minimum produce evidence for:

- parser limits and hostile/malformed file rejection;
- CSV spreadsheet-formula safety;
- XLSX unsafe-feature handling;
- Owner allowed / Manager fail-closed / Employee denied;
- `anon` denied;
- authenticated direct support-table DML denied;
- Owner-only support-table reads;
- cross-business isolation;
- browser business/actor spoof attempts denied;
- Reference Cost non-disclosure and independent authorization;
- duplicate exact-match behavior;
- no automatic overwrite;
- row idempotency replay;
- concurrent batch claim at-most-one winner;
- losing concurrent request performs no duplicate Catalog mutation;
- partial failure and retry behavior;
- audit/lifecycle field integrity;
- no browser service-role credential exposure;
- exactly nineteen public Catalog commands after implementation;
- no unauthorized Product Truth change;
- existing Catalog and Inventory regression tests remain green.

### Stage 7 — Completion Evidence

Create:

`communication/live/report1.84.md`

The report must include:

- implementation branch and base SHA;
- exact files changed;
- dependency changes;
- migration filename;
- test-project migration evidence;
- actual ACL/RLS verification evidence;
- complete test/verification summary;
- command-count verification;
- Security-boundary regression statement;
- Supabase-boundary regression statement;
- unresolved defects or limitations;
- production migration status;
- Lovable/publish/deploy/domain-cutover status;
- final implementation verdict.

Open one completion PR and stop.

Do not self-merge.

---

## 10. Production and Release Boundary

This Build Lock does **not** authorize production release.

Specifically, this instruction does not authorize:

- applying the new import-support migration to production Supabase;
- production data mutation for verification;
- Lovable mutation or publish;
- deployment;
- binding/cutting over `smartbusiness.teamlips.com`;
- public release;
- closing SB-P-1.11.

Production migration authority must be issued separately after Mission Control reviews the Build Mode evidence and any required specialist verification.

---

## 11. Stop Conditions

Stop the affected implementation path and report rather than improvising if any of the following occurs:

- Revision 4.0 cannot be implemented without changing Product Truth;
- a twentieth public Catalog command appears necessary;
- Manager import cannot remain fail-closed;
- service-role Catalog mutation appears necessary;
- required RLS/ACL posture cannot be achieved;
- the test environment does not match the canonical project identity expected by repository configuration;
- a migration would need production execution to continue;
- parser behavior cannot satisfy the locked security limits;
- an existing Catalog command contract makes the approved import behavior impossible;
- a cross-business or credential-exposure defect is discovered.

Document the exact blocker in `report1.84.md` and stop.

---

## 12. Required Final Verdict

Return exactly one of:

- `IMPLEMENTATION READY FOR MISSION CONTROL REVIEW`
- `IMPLEMENTATION CHANGES REQUIRED`
- `IMPLEMENTATION STOPPED — BLOCKER`

A successful Build Mode implementation does not itself authorize production migration, publish, deploy, domain cutover, or mission closure.

---

## 13. Mission Control Gate Statement

Mission Control records that the final combined GC-1 design gate is satisfied:

- Security: READY FOR BUILD LOCK;
- Supabase Backend Architecture: READY FOR BUILD LOCK;
- Revision 4.0: standalone implementation contract;
- cross-gate inconsistency: NONE FOUND.

Therefore:

**`SB-P-1.11-GC-1 BUILD LOCK IS APPROVED FOR CONTROLLED IMPLEMENTATION AFTER THIS INSTRUCTION IS HUMAN-REVIEWED AND MERGED.`**

---

## 14. Next Logical Step

Human-review and merge this instruction PR.

After merge, Claude Code in VS Code may begin the controlled implementation exactly under this Build Lock.
