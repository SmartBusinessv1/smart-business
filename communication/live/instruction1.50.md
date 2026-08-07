# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-LOV-BIND-1 — CONTROLLED LOVABLE BACKEND-BINDING REMEDIATION

**Mission ID:** SB-P-1.11-LOV-BIND-1  
**Mission Name:** Controlled Lovable Backend-Binding Remediation  
**Reporting Room:** Claude Engineering / Lovable Platform Operations  
**Mission Status:** AUTHORIZED AFTER HUMAN MERGE  
**Authorized By:** Mission Control  
**Required Completion Report:** `communication/live/report1.53.md`

---

# 1. Mission Objective

Resolve the recurring Lovable platform drift identified in `communication/live/report1.52.md` by establishing a durable Lovable runtime binding to the approved externally owned Smart Business Supabase backend, **only if the existing Lovable project can be switched safely and reversibly**.

The preferred outcome is:

> Existing Lovable project retained + approved external Supabase project connected + Lovable Cloud remains non-runtime and is not deleted.

The approved Smart Business runtime backend is:

`gysgzasfcjvtrgaigfyn`

The current Lovable Cloud backend is:

`wwgqnshcgbukqczqblsm`

The dedicated test project is:

`drravyyauixltoihzmwo`

The test project is test-only and must not become the Lovable runtime backend.

This mission is a **controlled remediation mission**, not a frontend implementation mission.

---

# 2. Authority and Evidence

Execute according to the approved Smart Business governance and the repository evidence chain, including:

- `communication/live/instruction1.49.md`
- `communication/live/report1.52.md`
- `communication/live/report1.51.md`
- `communication/live/report1.50.md`
- `communication/live/instruction1.45.md`
- the approved Smart Business governance foundation

`report1.52.md` established that the recurring `.env`, `package.json`, and `bun.lock` drift is caused by the current Lovable project being Cloud-enabled, while GitHub `main` remains canonical and clean.

The remediation must preserve GitHub as the source of truth.

---

# 3. Locked Architecture

The following architecture is locked for this mission:

1. **Canonical application/runtime backend:** `gysgzasfcjvtrgaigfyn`.
2. **Lovable Cloud `wwgqnshcgbukqczqblsm`:** non-authoritative and must not be used for Smart Business backend-readiness evidence.
3. **Dedicated test project `drravyyauixltoihzmwo`:** automated/test use only.
4. GitHub `main` remains the canonical code and configuration authority.
5. No new third backend may be created as a shortcut.
6. No schema copying between Lovable Cloud and the canonical backend is authorized.
7. No production database mutation is authorized by this mission.

---

# 4. Strict Preference Order

Use the following decision order.

## Option A — Preferred

Switch the **existing Lovable project** to the approved external Supabase backend using Lovable's supported external Supabase connector or equivalent supported project-binding mechanism, **only if all of the following are proven before execution**:

- the switch is supported for an already Cloud-enabled project;
- it does not require deleting Lovable Cloud;
- it does not destroy or migrate data;
- it does not create a new Supabase project;
- it does not change the approved production project itself;
- it is reversible without data loss;
- rollback to the pre-switch Lovable project state is documented and available;
- it does not silently rewrite canonical GitHub files into a new incompatible state.

If all conditions are satisfied, Option A may be executed under this mission.

## Option B — Fallback for Recommendation Only

If Option A cannot be proven safe and reversible, determine whether a **clean Lovable remix/new project** from canonical GitHub `main` can be configured from creation with the approved external Supabase backend.

Under this mission, Option B is **assessment only**.

Do not create the remix/new project unless separately authorized by Mission Control.

## Option C — Reject

Do not remove Lovable Cloud from the existing project under this mission.

Lovable Cloud removal is documented as permanent/irreversible and is therefore explicitly outside this mission's authority.

---

# 5. Phase 1 — Pre-Change Verification

Before any binding change, record:

1. Current canonical GitHub `main` SHA.
2. Current Lovable project ID and current Lovable tip SHA.
3. Current Lovable Cloud database status.
4. Current configured connectors/integrations.
5. Current runtime `.env` project reference inside Lovable.
6. Current `package.json` Lovable tooling version.
7. Current `bun.lock` relevant Lovable tooling resolution.
8. Current `supabase/config.toml` project reference.
9. Whether any Lovable internal drift is presently ahead of GitHub `main`.
10. Whether the existing project exposes a supported external-Supabase connection path.

Do not query production business data.

Read-only metadata inspection is permitted.

---

# 6. Phase 2 — Reversibility Gate

Before changing any Lovable backend binding, establish documentary or platform evidence for each item below.

## Required Proof

Confirm:

- exact action required to connect the external Supabase project;
- whether the action coexists with Lovable Cloud or replaces it;
- whether Lovable Cloud remains intact after connection;
- whether the action can be undone;
- exact rollback steps;
- whether disconnecting the external connector restores the prior state without data loss;
- whether the operation mutates, migrates, imports, copies, or deletes any database data;
- whether the operation changes GitHub-tracked files automatically;
- whether the operation changes project environment variables automatically;
- whether the operation changes Lovable-managed dependency versions automatically.

## Mandatory Stop Condition

If any of these points cannot be proven, or if the platform requires Cloud deletion/removal, **STOP**.

Return a recommendation for Option B instead.

Do not experiment with an irreversible action to discover its behavior.

---

# 7. Phase 3 — Authorized Existing-Project Switch

This phase is authorized **only if Phase 2 fully passes**.

Use Lovable's supported external Supabase connection mechanism to bind the existing project to:

`gysgzasfcjvtrgaigfyn`

Only the minimum platform configuration required for the binding may change.

## Human Interaction

If Lovable requires OAuth, account selection, project selection, or another human-controlled confirmation screen, stop at that point and provide the Founder with the exact UI action required.

Do not choose an account or project by inference when the platform presents ambiguous options.

The Founder must explicitly select/confirm the approved production project.

---

# 8. Phase 4 — Post-Switch Verification

If the existing-project switch succeeds, verify all of the following before declaring success.

## Backend Identity

- Lovable runtime resolves to `gysgzasfcjvtrgaigfyn`.
- Runtime does not resolve to `wwgqnshcgbukqczqblsm`.
- Runtime does not resolve to `drravyyauixltoihzmwo`.
- Lovable Cloud still exists and has not been deleted or migrated.

## Repository Integrity

Compare Lovable's project state against canonical GitHub `main`.

The following must remain canonical unless a platform-managed difference is separately documented and proven harmless:

- `.env`
- `package.json`
- `bun.lock`
- `package-lock.json`
- `supabase/config.toml`
- `vite.config.ts`
- `bunfig.toml`
- `src/**`

No application source change is authorized.

## Dependency Integrity

Confirm:

- `@lovable.dev/vite-tanstack-config` remains at the canonical repository version;
- `@lovable.dev/cloud-auth-js` remains absent from `package.json`;
- the accepted `bun.lock` integrity correction remains intact;
- no unauthorized dependency/version movement occurs.

## Runtime Verification

Without performing production writes:

- confirm the application can initialize its Supabase client against the approved project;
- confirm authentication configuration resolves correctly;
- confirm no Lovable Cloud backend is used by the runtime;
- use only read-only backend checks if backend identity needs verification.

Do not create test businesses, transactions, catalog items, users, or other production records.

---

# 9. Phase 5 — Durability Verification

A one-time clean state is not enough.

After the switch, trigger or observe one normal Lovable sandbox/project refresh cycle that does **not** involve application implementation.

Then re-check:

- `.env` backend reference;
- `package.json` tooling version;
- `bun.lock` tooling resolution;
- `supabase/config.toml`;
- installed dependency state, where observable;
- Lovable internal commit/diff state versus GitHub `main`.

The remediation passes only if the platform does not automatically reassert `wwgqnshcgbukqczqblsm` or unauthorized dependency drift after the refresh.

If drift returns, declare the existing-project remediation unsuccessful and stop.

Do not repeatedly restore files as a workaround.

---

# 10. Explicitly Prohibited

This mission does not authorize:

- deleting/removing Lovable Cloud;
- migrating Lovable Cloud data;
- copying schemas or data between Supabase projects;
- creating a new Lovable project/remix;
- creating a new Supabase project;
- modifying production database schema or data;
- applying migrations;
- changing RLS, grants, functions, tables, or policies;
- changing `package.json` dependency versions manually;
- regenerating `bun.lock` for unrelated reasons;
- modifying application source;
- modifying Smart Business business logic;
- beginning `SB-P-1.11-UI-1`;
- publishing or deploying;
- changing the public domain;
- self-approving or self-merging any PR.

---

# 11. Stop Conditions

Stop immediately and report if:

1. external Supabase connection requires irreversible Lovable Cloud removal;
2. the existing project cannot connect to an external Supabase project;
3. the connection path is undocumented or materially ambiguous;
4. rollback cannot be established;
5. any data migration, deletion, or copying is required;
6. Lovable attempts to create a new backend;
7. the approved project identity cannot be unambiguously selected;
8. GitHub-tracked source/config files are unexpectedly rewritten;
9. dependency drift is reintroduced;
10. runtime continues to bind to `wwgqnshcgbukqczqblsm` after attempted remediation;
11. any production write would be required to prove success;
12. an action falls outside this instruction.

Do not broaden scope to solve a stop condition.

---

# 12. Required Completion Report

Create:

`communication/live/report1.53.md`

The report must contain:

1. starting GitHub `main` SHA;
2. Lovable project identity and starting tip;
3. pre-change environment/binding state;
4. connector/platform capability evidence;
5. reversibility findings;
6. exact remediation action taken, if any;
7. whether human confirmation was required and what was selected;
8. post-change backend identity;
9. GitHub/project diff integrity result;
10. dependency integrity result;
11. durability/refresh-cycle result;
12. Lovable Cloud preservation result;
13. production-write confirmation: NONE;
14. any warning or anomaly;
15. final verdict from exactly one of:

   - `PASSED — EXISTING LOVABLE PROJECT DURABLY BOUND TO APPROVED EXTERNAL SUPABASE`
   - `STOPPED — EXISTING-PROJECT SWITCH NOT PROVEN SAFE/REVERSIBLE; RECOMMEND SEPARATE CLEAN-REMIX AUTHORIZATION`
   - `FAILED — REMEDIATION ATTEMPT DID NOT PRODUCE A DURABLE APPROVED BINDING`

Run the repository Markdown Quality Gate before committing the report.

Open a completion-report PR for human review.

Do not self-merge.

---

# 13. Frontend Authorization Boundary

Even if this mission passes, it does not itself begin `SB-P-1.11-UI-1`.

After the completion report is reviewed and merged, Mission Control will decide whether the environment gate is sufficiently closed to restart the Catalog Frontend Implementation mission.

No Lovable publish/deploy is authorized by this instruction.

---

# 14. Next Logical Step

After this instruction is human-reviewed and merged, execute `SB-P-1.11-LOV-BIND-1` under the strict reversibility gate above.

If the existing project cannot be safely switched without irreversible Cloud removal, stop and request a separate clean-remix authorization rather than forcing the current project into compliance.
