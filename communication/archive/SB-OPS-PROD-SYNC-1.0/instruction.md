# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`

**Mission Name:** `Production Runtime Synchronization & Lovable Recovery`

**From:** Mission Control

**To:** `Claude Code / Repository Synchronization Operator`, with Lovable used only for the authorized production implementation workspace after repository synchronization

**Status:** `ACTIVE — FOUNDER PRIORITY EXECUTION`

**Date:** `2026-09-01`

---

## 1. Founder Priority

Before `SB-P-1.12`, restore the intended Smart Business production delivery path without reopening historical governance loops.

The immediate objective is to synchronize the approved production/runtime implementation through `SB-P-1.10` and `SB-P-1.11` into the repository and Lovable project that were intentionally created for production delivery.

This mission is execution-focused. Do not create new governance gates, redesign approved product decisions, or re-open already accepted historical debates unless a genuine technical contradiction prevents safe synchronization.

## 2. Authoritative Identities

### Canonical implementation source

Repository:

`SmartBusinessv1/smart-business`

Branch:

`main`

This repository remains the canonical implementation and historical truth source.

### Production Lovable delivery repository

Repository:

`SmartBusinessv1/starter-supab-shell`

This is the GitHub repository associated with the intended production Lovable implementation path.

### Production Lovable project

Project ID:

`f3e992ec-06df-4d49-b157-b92ec064c078`

Display name:

`Smart Business Implementation Workspace`

The fact that this workspace is stale does not make the historical Lovable project authoritative.

### Authoritative production Supabase

Project ID:

`gysgzasfcjvtrgaigfyn`

Production runtime synchronization must preserve this Supabase identity.

### Historical Lovable project — excluded

Project ID:

`64c2b9b1-2461-4045-9acc-19e2658b8ca2`

This project is historical only and must not be used as the production synchronization source, even if it is currently published or contains later experimental work.

Its Lovable Cloud backend binding is one of the reasons the production delivery path moved away from it.

## 3. Mission Objective

Bring `SmartBusinessv1/starter-supab-shell` to the current approved production/runtime application state represented in `SmartBusinessv1/smart-business/main`, through `SB-P-1.10` and `SB-P-1.11`, without copying unnecessary governance/history material or reintroducing Lovable Cloud drift.

The desired flow is:

`smart-business/main → starter-supab-shell → Lovable f3e992... → publish → smartbusiness.teamlips.com`

Domain cutover is a later step in this same recovery sequence and is not authorized by this repository synchronization instruction unless separately activated after runtime verification.

## 4. Required First Action — Read-Only Synchronization Map

Before modifying `starter-supab-shell`, compare it against canonical `smart-business/main` and produce an exact synchronization map.

Classify differences as:

1. **Production/runtime files to synchronize**
2. **Canonical-only governance/history/evidence files not required in the Lovable delivery repository**
3. **Target-repository-specific files that must be preserved**
4. **Environment or platform-generated drift that must not be copied**
5. **Unresolved genuine implementation gaps**

Do not infer authority from file recency alone.

## 5. Production Runtime Scope

Expected runtime scope includes, as applicable:

- `src/**`
- production application routes and components
- runtime Supabase client/config integration
- approved `package.json` dependency state
- approved lockfile state
- `supabase/config.toml`
- runtime helper code required by the application
- parser/import code required by approved Inventory or Catalog workflows
- other production application files proven necessary by repository comparison

Do not blindly copy the entire canonical repository.

## 6. Excluded From Blind Synchronization

Do not copy merely for parity:

- `communication/**`
- historical mission archives
- governance-only documentation
- evidence packages
- old test evidence
- historical Lovable workaround records
- secrets or local environment files
- generated platform drift

Copy a non-runtime file only when it is demonstrably required by the production build or repository operation.

## 7. Load-Bearing Runtime Boundary

After synchronization, the production Lovable path must use:

`gysgzasfcjvtrgaigfyn`

It must not use Lovable Cloud project:

`wwgqnshcgbukqczqblsm`

It must not use test project:

`drravyyauixltoihzmwo`

No production Supabase schema, RLS, grant, Auth, or migration change is authorized merely to achieve repository synchronization.

## 8. Product State Required Before Publication

The recovered production application must represent approved work through `SB-P-1.10` and `SB-P-1.11`.

Special practical attention is required for the two Founder-priority bulk workflows:

### Inventory / opening-stock bulk workflow

Determine the exact current implementation state in canonical `smart-business` and identify any genuine missing merchant-facing upload/import UI required before publication.

### Catalog bulk import

Preserve the approved CSV/XLSX import architecture and ensure the practical merchant experience includes, where already approved or implemented:

- file upload;
- preview before import;
- category selection/correction through dropdown/select behavior;
- selling-unit selection/correction through dropdown/select behavior;
- valid/invalid/conflict row visibility;
- explicit confirmation before live creation;
- no duplication of Inventory stock truth into Catalog.

Do not take implementation behavior from the historical Lovable workspace unless Mission Control later authorizes a narrowly identified UX reconstruction after comparing it with canonical decisions.

## 9. Git Safety

Repository synchronization work must use a mission branch and pull request.

No direct AI push to `main`.

No self-merge.

No force push or history rewrite.

No secrets may be committed.

Do not overwrite target-repository-specific configuration until its purpose is understood.

## 10. Stop Conditions

Stop and report only if one of these is true:

- the production Lovable workspace cannot be proven associated with `starter-supab-shell`;
- synchronization would require changing production Supabase schema/RLS/Auth/grants;
- the canonical source and intended production runtime contain an irreconcilable architectural conflict;
- a secret is encountered in tracked content;
- the target repository contains necessary production-only changes not present in canonical source and authority cannot be determined;
- synchronization would bind the application to Lovable Cloud or the test Supabase project.

Ordinary file divergence, stale code, missing UI, build errors, or fixable dependency differences are implementation work, not governance blockers.

## 11. First Report Required

Before making synchronization changes, report:

- canonical `smart-business/main` SHA;
- current `starter-supab-shell/main` SHA;
- exact production/runtime divergence;
- target-only files that should be preserved;
- files/directories that should be synchronized;
- files/directories deliberately excluded;
- verified Supabase binding state;
- verified Lovable project/repository relationship if observable;
- Inventory bulk-workflow implementation status;
- Catalog bulk-import implementation status;
- minimal proposed synchronization commit scope;
- any genuine blocker.

End the first report with exactly one:

`READY — PRODUCTION RUNTIME SYNCHRONIZATION MAPPED`

or

`BLOCKED — PRODUCTION RUNTIME SYNCHRONIZATION CANNOT SAFELY START`

---

**Mission Control boundary:** restore the intended production delivery path quickly, preserve canonical product truth, keep the historical Lovable project historical, and do not turn ordinary implementation work into governance delay.