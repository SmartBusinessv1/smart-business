# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-40A — CLAUDE ENGINEERING EXECUTION INSTRUCTION

**Instruction ID:** `instruction1.190`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-40A — Production Migration-History Reconciliation`  
**Sender:** Mission Control  
**Recipient:** Claude Engineering  
**In Reply To:** `communication/live/instruction1.189.md`  
**Date:** 2026-08-29  
**Status:** EXECUTION AUTHORIZATION PENDING HUMAN MERGE

---

## 1. Purpose

Execute the bounded GC-40A corrective mission authorized by `instruction1.189.md` after GC-40 stopped following Migration 1 because Supabase recorded the successfully applied production migration under a generated version instead of the canonical repository version.

Observed production state to reconcile:

- Migration SQL effects are present for `20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`;
- production migration history currently records the same migration name under generated version `20260829085110`;
- canonical repository version `20260810120000` is not recorded;
- Migrations 2, 3, and 4 have not been applied;
- GC-40 remains stopped.

This instruction does not broaden `instruction1.189.md`. It translates that authorization into a Claude Engineering execution task.

---

## 2. Required Investigation — Read Only First

Before any production correction, Claude Engineering must determine the minimum-safe supported reconciliation method.

Review at minimum:

1. canonical repository migration file and version identity;
2. current production migration-history row for generated version `20260829085110`;
3. current absence of canonical version `20260810120000`;
4. current Migration 1 schema/RLS/grant state;
5. Supabase-supported migration-history reconciliation mechanisms available to the operator/tooling;
6. whether reconciliation can be performed without re-running Migration 1 DDL;
7. whether any proposed method changes only migration-history metadata and nothing in application data, schema, roles, policies, functions, or runtime configuration.

Do not make a production mutation until the supported reconciliation method has been identified and shown to satisfy this instruction.

---

## 3. Authorized Correction

Claude Engineering may perform exactly one minimum-safe migration-history reconciliation for Migration 1 if, and only if, the investigation establishes a supported method that:

- removes or marks superseded only the generated history identity `20260829085110` as necessary;
- records/reconciles the canonical history identity `20260810120000` for `sb_p_1_11_gc_1_catalog_import_support_schema`;
- does not execute the Migration 1 DDL body again;
- does not alter any Migration 1-created table, index, constraint, RLS policy, grant, or data;
- does not apply any later migration;
- leaves production history in a state compatible with normal repository/Supabase migration tooling.

If the supported method requires broader SQL mutation, schema repair, migration-file alteration, manual recreation, or any action beyond exact Migration 1 history reconciliation, STOP and report `BLOCKED` to Mission Control instead of improvising.

---

## 4. Mandatory Verification After Reconciliation

After the correction, verify all of the following before reporting completion:

1. canonical version `20260810120000` is recorded once with the expected migration identity;
2. generated version `20260829085110` no longer causes Migration 1 to appear as an additional or conflicting migration;
3. `catalog_import_batches` exists;
4. `catalog_import_rows` exists;
5. RLS remains enabled on both tables;
6. expected Migration 1 grants/policies remain intact;
7. no production application data was mutated;
8. the locked public Catalog command count remains exactly `19`;
9. Migrations `20260811090000`, `20260819120000`, and `20260826120000` remain unapplied;
10. no AWS, Cloudflare, Lovable, application deployment, bulk-import enablement, or Stage 21 action occurred.

Do not resume GC-40 Migration 2 under this instruction.

---

## 5. Required Completion Report

Return the result through the normal repository communication channel as:

`communication/live/report1.183.md`

The report must include:

- exact repository/main SHA used for execution;
- production project identity in non-secret form;
- read-only before-state evidence;
- the supported reconciliation method selected and why it is the minimum-safe method;
- exact production mutation performed, described precisely but without secrets;
- exact after-state migration-history evidence;
- exact schema/RLS/grant/19-command verification evidence;
- confirmation that Migration 1 DDL was not reapplied;
- confirmation that Migrations 2–4 remain unapplied;
- confirmation that no unrelated production mutation occurred;
- one final disposition exactly:
  - `GC-40A MIGRATION-HISTORY RECONCILIATION — PASS`
  - `GC-40A MIGRATION-HISTORY RECONCILIATION — BLOCKED`

Create `report1.183.md` through a normal report-only PR. Do not self-merge.

---

## 6. Explicitly Not Authorized

This instruction does not authorize:

- reapplying Migration 1 SQL;
- applying Migration 2, 3, or 4;
- changing any migration file;
- arbitrary edits to `supabase_migrations` beyond the exact supported Migration 1 reconciliation;
- production business/application data mutation;
- schema redesign or unrelated DDL;
- production deployment or publication;
- bulk-import production enablement;
- AWS/IAM/Roles Anywhere/Lambda/S3 changes;
- Cloudflare changes;
- Lovable changes;
- Stage 21 or later lifecycle progression.

If any ambiguity exists, STOP and return to Mission Control.

---

## 7. Mission Control Disposition

Upon human merge of this instruction:

**CLAUDE ENGINEERING IS AUTHORIZED TO EXECUTE GC-40A ONLY WITHIN THE BOUNDED MIGRATION-HISTORY RECONCILIATION SCOPE ABOVE, THEN RETURN `report1.183.md`. GC-40 REMAINS STOPPED UNTIL MISSION CONTROL REVIEWS THAT REPORT AND SEPARATELY AUTHORIZES RESUMPTION.**
