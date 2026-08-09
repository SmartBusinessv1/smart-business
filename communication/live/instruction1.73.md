# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — NARROW SECURITY CONFIRMATION

**Instruction ID:** instruction1.73  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Executing Room:** Security & Permissions Architecture  
**Authorized By:** Mission Control  
**Implementation Authority:** NONE  
**Build Authority:** NONE  
**Status:** ACTIVE AFTER MERGE

---

## 1. Mission Objective

Perform one narrow Security & Permissions Architecture confirmation of the Revision 3.0 corrections made under `communication/live/instruction1.72.md` and reported in `communication/live/report1.79.md`.

This confirmation is limited strictly to the three residual blockers previously identified in `communication/live/report1.78.md`:

- RSB-1 — import-support writes must be server-only;
- RSB-2 — batch commit concurrency primitive must be executable from the chosen TanStack/Supabase architecture;
- RSB-3 — batch audit evidence must be non-forgeable by the ordinary authenticated REST role.

Do not reopen SEC-1 through SEC-16 generally unless a Revision 3.0 change directly regresses one of those already-verified boundaries.

Do not redesign Product Truth.

Do not implement anything.

---

## 2. Canonical Inputs

Read from the latest merged `main` branch:

1. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md` — Revision 3.0;
2. `communication/live/report1.78.md` — focused Security re-review that defined RSB-1 through RSB-3;
3. `communication/live/instruction1.72.md` — Mission Control reconciliation authority;
4. `communication/live/report1.79.md` — Claude Code RSB Security Reconciliation report;
5. the current canonical repository and current production schema only where read-only inspection is necessary to verify an architectural claim.

The Revision 3.0 report states `READY FOR NARROW SECURITY CONFIRMATION`. That is evidence to review, not authority to approve itself.

---

## 3. Narrow Confirmation Scope

### RSB-1 — Server-only import-support writes

Confirm that Revision 3.0 now specifies all of the following without ambiguity:

- `authenticated` receives SELECT only on `catalog_import_batches` and `catalog_import_rows`;
- ordinary authenticated users cannot INSERT, UPDATE, or DELETE either support table through REST;
- caller JWT authentication and Owner/business re-derivation occur before any privileged bookkeeping write;
- the server-only privileged client is used only for these two support tables;
- the privileged client never authorizes the actor;
- the privileged client never mutates Catalog Product Truth;
- the privileged client never calls or replaces any of the nineteen Catalog commands;
- business ID, actor ID, lifecycle transitions, resolved Product IDs, and timestamps are server-derived or system-produced, not trusted from browser payloads;
- the credential remains server-only and cannot enter frontend bundles, client environment variables, logs, downloadable files, or responses.

Return RSB-1 as exactly one of:

- `VERIFIED RESOLVED`
- `CHANGE REQUIRED`
- `EVIDENCE GAP`

### RSB-2 — Executable batch commit concurrency

Confirm that Revision 3.0 replaces the prior server-layer `pg_advisory_xact_lock(...)` concept with an implementation boundary that is executable through the chosen architecture.

Verify specifically:

- batch acquisition is an atomic compare-and-set lifecycle transition;
- the update predicates on authoritative `batch_id`, server-derived `business_id`, and an allowed expected lifecycle state;
- exactly one concurrent commit request can acquire the transition to `committing`;
- a zero-row claim result is handled through a non-mutating re-read and truthful outcome such as `IN_PROGRESS`, `ALREADY_COMMITTED`, or equivalent;
- row-level existing Catalog idempotency keys remain stable across retries;
- retry cannot mint a new row operation identity for an already-attempted row;
- no session-held transaction lock across multiple HTTP/PostgREST requests is assumed;
- the privileged bookkeeping client is not used to bypass the caller-JWT Catalog mutation boundary.

Return RSB-2 as exactly one of:

- `VERIFIED RESOLVED`
- `CHANGE REQUIRED`
- `EVIDENCE GAP`

### RSB-3 — Non-forgeable batch audit evidence

Confirm that Revision 3.0 makes the import-support lifecycle/audit evidence non-forgeable by the ordinary authenticated REST role.

Verify specifically:

- `initiated_by` is server-derived from the authenticated actor;
- `resolved_by` is server-derived;
- `resolved_product_id` is written only from an actual governed Catalog command result;
- lifecycle status is server-produced;
- `created_at`, `resolved_at`, `committed_at`, and equivalent system timestamps are system-produced;
- ordinary authenticated REST writes cannot alter these values;
- cross-business isolation remains intact;
- Reference Cost confidentiality is not weakened by the revised bookkeeping client;
- batch/row records may now credibly serve as the intended import lifecycle/audit evidence under this write model.

Return RSB-3 as exactly one of:

- `VERIFIED RESOLVED`
- `CHANGE REQUIRED`
- `EVIDENCE GAP`

---

## 4. Mandatory Regression Check

Because Revision 3.0 introduces one narrow server-only privileged bookkeeping client, Security must verify that this correction does not regress the previously accepted boundaries:

- exactly nineteen public Catalog commands remain unchanged;
- no twentieth public Catalog command or generic privileged import command is introduced;
- caller JWT remains the authority source for the merchant actor;
- Catalog Product Truth mutations still occur only through the existing governed Catalog command surface using the caller-scoped authorization path;
- browser code receives no service-role credential;
- cross-business Product Truth and import-support isolation remain intact;
- Manager remains fail-closed until real approved permission infrastructure exists;
- Employee import remains denied;
- Reference Cost remains independently protected;
- raw spreadsheet files remain transient and unretained in Phase 1;
- no automatic duplicate overwrite, auto-Inventory creation, global mutable taxonomy, unit conversion, or category reactivation is introduced.

If any regression is found, identify it precisely and stop Build Lock.

---

## 5. Required Verification Matrix

Security must explicitly confirm the Revision 3.0 design is capable of supporting these negative tests in Build Mode:

1. authenticated browser REST INSERT to `catalog_import_batches` is denied;
2. authenticated browser REST UPDATE to `catalog_import_batches` is denied;
3. authenticated browser REST INSERT to `catalog_import_rows` is denied;
4. authenticated browser REST UPDATE to `catalog_import_rows` is denied;
5. cross-business SELECT remains denied;
6. browser-supplied business ID cannot redirect a privileged bookkeeping write;
7. browser-supplied actor ID cannot become `initiated_by` or `resolved_by`;
8. browser-supplied `resolved_product_id` cannot become authoritative audit evidence;
9. concurrent commit claims produce at most one successful `committing` acquisition;
10. the losing concurrent request performs no duplicate Catalog mutation;
11. retry reuses the persisted row idempotency key;
12. successful Catalog mutation remains attributable to the caller-JWT actor;
13. the server-only privileged client cannot be imported into or bundled for browser execution;
14. no privileged bookkeeping operation can target an arbitrary table or arbitrary column selected by client input;
15. no service-role credential appears in logs, responses, client environment variables, or downloadable artifacts;
16. ordinary authenticated users cannot forge terminal batch completion/audit state.

This is a design confirmation mission. Do not execute destructive or write tests against production.

---

## 6. Required Output

Create:

`communication/live/report1.80.md`

The report must contain:

1. the latest main commit reviewed;
2. exact Revision 3.0 EIS sections reviewed;
3. one row each for RSB-1, RSB-2, and RSB-3 with status;
4. regression-check results;
5. verification-matrix assessment;
6. any residual blocker or evidence gap;
7. explicit confirmation that no implementation occurred;
8. one final verdict from the allowed list below.

Open one completion PR and stop.

Do not self-merge.

---

## 7. Allowed Final Verdicts

Return exactly one:

`SECURITY READY FOR BUILD LOCK`

or

`SECURITY CHANGES REQUIRED BEFORE BUILD LOCK`

or

`SECURITY STOPPED — EVIDENCE GAP`

A positive verdict confirms the security design-lock gate only. It does not itself authorize Build Mode, implementation, migration, dependency installation, Supabase writes, Lovable changes, publish, deploy, or domain cutover.

---

## 8. Locked Authority Boundary

This mission does not authorize:

- application implementation;
- dependency installation;
- migration creation or application;
- schema/RLS/grant changes;
- production or test Supabase writes;
- creation or use of a privileged credential;
- Lovable mutation;
- publish/deploy/domain cutover;
- a twentieth Catalog command;
- Product Truth redesign;
- self-merge.

Read-only inspection is permitted where required for verification.

---

## Next Logical Step

If Security returns `SECURITY READY FOR BUILD LOCK` and the report is human-reviewed and merged, Mission Control may evaluate whether all SB-P-1.11-GC-1 design gates are satisfied and, if so, issue a separate canonical Build Lock / implementation authorization. Build Mode must not begin from this instruction alone.