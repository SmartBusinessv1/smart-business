# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-PROD-EXEC-1 — CONTROLLED PRODUCTION MIGRATION EXECUTION

**Mission ID:** SB-P-1.11-PROD-EXEC-1

**Mission Name:** Initial Phase 1 Catalog Production Migration Execution

**Mission Status:** AUTHORIZED AFTER HUMAN MERGE

**Authorized By:** Founder / Mission Control

**Repository:** `SmartBusinessv1/smart-business`

**Production Project Ref:** `gysgzasfcjvtrgaigfyn`

**Production Project Name:** `smart-business`

**Production Organization:** `zcqbcjmjpkpbkruacmrp` — Team LIPS

**Production Region:** `ap-south-1`

**Execution Basis Commit:** `93f3de452fe7789aef5e96111a712ae4fc3d3a9d`

---

## 1. Mission Objective

Apply the two already accepted SB-P-1.11 Initial Phase 1 catalog migrations to the approved production Supabase project under the exact controls, stop conditions, verification steps, and recovery procedures defined in the merged production runbook package.

This mission authorizes one controlled production migration execution only.

It does not authorize any unrelated production change, frontend publish, Lovable deployment, schema redesign, new migration, new function, new table, or behavioral test write in production.

---

## 2. Governing Artifacts

Execute strictly according to:

1. `communication/live/report1.47.md`
2. `docs/operations/SB-P-1.11-production-migration-runbook.md`
3. `docs/operations/SB-P-1.11-production-verification-checklist.md`
4. `docs/operations/SB-P-1.11-production-rollback-and-recovery.md`
5. `communication/live/report1.45.md`
6. `communication/live/report1.46.md`
7. `communication/live/report1.44.md`
8. the accepted migration source files named below

No step in this instruction overrides a stricter stop condition in those artifacts.

---

## 3. Exact Authorized Migration Files

Only these two migrations may be applied:

- `supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql`
- `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`

Expected SHA-256 hashes:

```text
640a11759d3fe6288d73778f91acba346eee49f24ae798b652f93588a0f6407f  supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql
c40a7f2231ee3454e7c12aa602503c3c68769b465d06569bd1651e479abfc56a  supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql
```

If either hash differs, stop. Do not execute.

---

## 4. Named Execution Roles

### Operator

**Claude Code**, operating only under live Founder supervision and only from a clean repository checkout containing this merged authorization.

The Operator runs the exact commands in the production migration runbook, captures complete output, and stops immediately on any deviation.

### Human Observer and Abort Authority

**Riyas PK — Founder**

The Founder independently verifies the production project identity and backup evidence, observes the execution and production metrics, and holds sole human authority to approve continuation past each mandatory checkpoint or invoke the abort/recovery procedure.

The Operator must not execute while the Founder is unavailable.

---

## 5. Authorized Execution Window

One execution attempt is authorized during:

**06 August 2026, 10:30 PM IST through 07 August 2026, 12:30 AM IST.**

This authorization expires at the end of that window.

If execution does not begin and complete within the window, stop and obtain a new repository-backed execution authorization.

If any merchant or business row exists by execution time, stop and obtain a separately approved maintenance-window decision before proceeding.

---

## 6. Founder-Verified Backup Evidence

The Founder manually verified the production Supabase Dashboard on 06 August 2026.

Confirmed evidence:

- project name: `smart-business`;
- production project ref: `gysgzasfcjvtrgaigfyn`;
- environment label: `PRODUCTION`;
- project status: Healthy;
- plan: Pro;
- scheduled physical backups: active;
- latest visible backup: `06 Aug 2026 01:24:08 UTC`;
- oldest visible backup: `30 Jul 2026 01:25:27 UTC`;
- visible retained backup points: 7;
- PITR: disabled and available only as an add-on;
- no restore action was performed;
- no backup setting was changed.

This evidence satisfies the runbook requirement to confirm current backup status and restore-point availability. PITR is not mandatory for this migration package because the accepted migrations do not modify pre-existing row data; the active scheduled-backup history is accepted for this one controlled execution.

Do not enable PITR, restore a backup, or change backup settings under this mission.

---

## 7. Mandatory Fresh Preflight

Immediately before any mutating command, the Operator and Founder must independently reconfirm:

- production ref is exactly `gysgzasfcjvtrgaigfyn`;
- name is `smart-business`;
- organization is `zcqbcjmjpkpbkruacmrp`;
- region is `ap-south-1`;
- status is `ACTIVE_HEALTHY`;
- migration inventory contains exactly the 12 pre-catalog migrations;
- neither authorized catalog migration is already applied;
- production still contains exactly the 6 expected pre-existing public tables;
- all 6 pre-existing tables still have zero rows;
- no `catalog_*` object, `business_tax_settings` table, catalog executor role, or accepted catalog function already exists;
- `pgcrypto` remains installed in schema `extensions`;
- security advisor baseline remains zero findings;
- no unexpected long-running transaction or ungranted lock exists;
- working tree is clean;
- the two migration hashes match Section 3.

If any item differs, stop before setting `CONFIRM_PRODUCTION`.

---

## 8. Authorized Command Sequence

Run only the exact sequence in `docs/operations/SB-P-1.11-production-migration-runbook.md` Section 6.

The production dry run must list exactly:

- `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql`
- `20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`

and nothing else.

Only after both Operator and Founder accept the dry-run output may the Operator run the one authorized mutating command:

```powershell
node scripts/supabase-cli.mjs production db push --yes
```

Immediately after it returns, unset `CONFIRM_PRODUCTION` exactly as required by the runbook.

Do not retry automatically after any error.

---

## 9. Stop Conditions

Stop immediately if any runbook stop condition occurs, including:

- identity mismatch;
- migration inventory drift;
- unexpected existing catalog object;
- migration hash mismatch;
- unexpected migration in dry-run output;
- non-zero pre-existing table row count;
- missing extension or table;
- RLS or policy drift;
- new unexplained security finding;
- ungranted lock or long-running transaction;
- Founder unavailable;
- output cannot be independently tied to the production ref;
- command runs beyond the documented timing envelope and returns an error;
- any material output differs from the runbook expectation.

On failure, capture evidence and follow `docs/operations/SB-P-1.11-production-rollback-and-recovery.md`. Do not issue a second push without new Mission Control authorization.

---

## 10. Mandatory Post-Migration Verification

After a successful apply, complete the full production verification checklist before declaring success.

Required evidence includes:

- exactly 11 new catalog tables;
- exactly 7 accepted NOLOGIN executor roles;
- exactly 19 accepted public command functions;
- exact function ownership;
- RLS enabled on all 11 catalog tables;
- exact grants and policies;
- `PUBLIC` and `anon` cannot execute any catalog RPC;
- `authenticated` can execute exactly the accepted 19 RPCs;
- reference-cost data remains protected;
- command 9 has only the narrow column-level UPDATE grant and matching RLS policy;
- no executor belongs to `service_role`;
- `catalog_internal` is not exposed through the Data API;
- migration inventory records both new migration versions;
- security advisor result remains acceptable against the recorded baseline;
- performance-advisor differences are documented and reviewed;
- no production write smoke test is performed.

The Founder must review the final verification evidence before accepting completion.

---

## 11. Required Completion Report

Create:

`communication/live/report1.49.md`

The report must include:

- exact repository commit used;
- Operator and Founder confirmation;
- execution start and end timestamps;
- fresh preflight results;
- migration hashes;
- exact dry-run output summary;
- exact apply result;
- migration inventory after execution;
- structural verification results;
- security verification results;
- advisor comparison;
- all warnings or anomalies;
- confirmation that no production behavioral write test occurred;
- confirmation that no Lovable publish or deployment occurred;
- final verdict: PASSED, FAILED, or STOPPED;
- recommended next step.

Create the report on a new mission branch and open a pull request. Do not self-merge.

---

## 12. Explicit Prohibitions

This mission does not authorize:

- any migration other than the exact two named files;
- modification of either migration file;
- a twelfth catalog table;
- a twentieth public command function;
- an eighth executor role;
- direct production data writes for smoke testing;
- creation of a production test business;
- destructive rollback without Founder decision;
- Supabase backup restore;
- PITR enablement or billing changes;
- Lovable frontend implementation;
- Lovable publish or deployment;
- changes to environment variables, dependencies, Vite configuration, or Supabase project binding;
- self-approval or self-merge.

---

## 13. Authorization State

```text
Production migration preparation: COMPLETE
Backup readiness evidence: ACCEPTED
PITR: DISABLED
Scheduled physical backups: VERIFIED
Production migration execution: AUTHORIZED AFTER HUMAN MERGE
Lovable frontend implementation: SEPARATE BLOCKED TRACK
Lovable publish/deploy: PROHIBITED
```

---

## 14. Next Logical Step

Human-review and merge this authorization PR.

After merge, give Claude Code this instruction:

> Pull the latest `main`, read `communication/live/instruction1.46.md`, and execute only `SB-P-1.11-PROD-EXEC-1` under live Founder supervision within the authorized window. Stop after creating `communication/live/report1.49.md` and opening the completion-report PR. Do not self-merge.
