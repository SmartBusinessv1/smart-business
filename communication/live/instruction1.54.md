# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-LOV-NEW-2 — External-Supabase-First Lovable Project Creation & Immediate Verification

**Mission ID:** SB-P-1.11-LOV-NEW-2  
**Mission Name:** External-Supabase-First Lovable Project Creation & Immediate Verification  
**Reporting Room:** Claude Code / Founder-Supervised Lovable UI  
**Mission Status:** AUTHORIZED AFTER HUMAN MERGE  
**Authorized By:** Mission Control  

---

## 1. Mission Objective

Create exactly one new Lovable project using the already-linked external Supabase option that was proven in `communication/live/report1.55.md`, then immediately verify the resulting backend and project state before any frontend implementation begins.

This mission exists to answer the post-creation questions that remained deliberately unproven after `SB-P-1.11-LOV-NEW-1`:

1. Does the newly created Lovable project resolve to the approved external Supabase production project?
2. Does Lovable avoid provisioning Lovable Cloud for the new project?
3. What environment/backend identifiers are actually established after creation?
4. Does Lovable automatically rewrite dependency or tracked configuration state?
5. Does project creation cause any schema or data mutation in the approved Supabase project?
6. Can the new project become a safe candidate environment for a later canonical-source synchronization mission?

This mission does **not** authorize `SB-P-1.11-UI-1`.

---

## 2. Governing Evidence

Execute according to the approved Smart Business governance foundation and the following mission evidence chain:

- `communication/live/report1.52.md`
- `communication/live/report1.53.md`
- `communication/live/report1.54.md`
- `communication/live/instruction1.52.md`
- `communication/live/report1.55.md`

The current accepted finding is narrow but sufficient to authorize one controlled creation attempt:

> Lovable's interactive New Project composer allows an already-linked external Supabase project to be selected before any new Lovable project is actually created.

Do not broaden that finding into assumptions about post-creation behavior.

---

## 3. Locked Backend Architecture

The only approved production backend is:

```text
Supabase project ref: gysgzasfcjvtrgaigfyn
Project name: smart-business
Region: ap-south-1
```

The dedicated automated-test project remains:

```text
Supabase project ref: drravyyauixltoihzmwo
Project name: smart-business-test
Purpose: automated/non-production testing only
```

The legacy Lovable Cloud backend associated with the existing Lovable project remains:

```text
wwgqnshcgbukqczqblsm
```

It is non-authoritative and must not become runtime for the new project.

No third Supabase backend may be created.

---

## 4. Existing Lovable Project Preservation Rule

The existing Lovable project must remain fully untouched throughout this mission.

Do not:

- remove Lovable Cloud from it;
- reconnect or disconnect its backend;
- change its environment variables;
- modify its dependencies;
- edit its application source;
- publish it;
- deploy it;
- use it for this mission's creation attempt.

The new project must be a separate project.

---

## 5. Pre-Creation Gate

Before the Founder submits any new-project build/create action, verify and record:

1. GitHub `main` is at the latest authorized commit.
2. `communication/live/report1.55.md` exists on `main` and records Path A as passed.
3. No new Lovable project from this mission already exists.
4. The existing Smart Business Lovable project is unchanged.
5. The Founder is on the Lovable New Project composer.
6. The database selection chip visibly shows the existing external Supabase project labeled `smart-business`.
7. No Lovable Cloud option is selected instead.

### Mandatory stop

If the external Supabase selection is no longer visible or the composer no longer shows `smart-business` as selected, stop. Do not create anything.

---

## 6. Founder-Supervised Creation Step

Project creation is a human action.

Claude Code or other automation must not guess or simulate the final click.

The Founder may create exactly one new Lovable project from the verified New Project composer with the external Supabase selection already active.

### Initial prompt boundary

The initial Lovable prompt must be deliberately minimal and non-feature-bearing. It may establish a project shell only.

Use wording equivalent to:

> Create a minimal Smart Business project shell only. Do not implement product features, database migrations, schema changes, seed data, authentication changes, or business logic. Preserve the selected external Supabase connection. Stop after the project is created and the basic project workspace is available.

Do not ask Lovable to recreate the existing Smart Business product in this mission.

Do not ask Lovable to import or modify database schema.

Do not ask Lovable to generate catalog, dashboard, authentication, or transaction functionality.

### Project name

Use a clearly distinguishable project name so it cannot be confused with the existing project. Preferred display name:

```text
Smart Business External
```

If Lovable automatically assigns a slug, record it exactly. Do not spend time customizing branding or URLs during this mission.

---

## 7. Immediate Stop After Creation

As soon as the new Lovable project is created and its workspace becomes available:

**STOP all generation and implementation activity.**

Do not send a second build prompt.

Do not accept any proposed schema migration.

Do not publish or deploy.

Proceed directly to verification.

---

## 8. Verification A — New Lovable Project Identity

Record:

- Lovable workspace;
- new project ID;
- project display name;
- project slug;
- creation timestamp if available;
- initial Lovable project commit/tip SHA if exposed;
- whether the existing old Lovable project remains separately present and unchanged.

There must be exactly one project created by this mission.

---

## 9. Verification B — Exact Backend Identity

This is the most important gate.

Use available Lovable project metadata, configuration, environment inspection, connector information, and Supabase-side read-only metadata to establish the exact backend project reference.

The new project's runtime/backend identity must resolve to:

```text
gysgzasfcjvtrgaigfyn
```

Do not accept the visible label `smart-business` alone as sufficient evidence.

### Pass condition

At least one authoritative post-creation source must expose the exact Supabase ref `gysgzasfcjvtrgaigfyn`, and no runtime/backend source may point to another Supabase project.

### Mandatory stop

If the exact project ref cannot be proven, or any runtime/backend source points to:

```text
wwgqnshcgbukqczqblsm
```

or

```text
drravyyauixltoihzmwo
```

or any unknown third project, stop immediately.

Do not try to repair or switch the backend in this mission.

---

## 10. Verification C — Lovable Cloud Provisioning State

Determine whether the newly created Lovable project has a Lovable Cloud backend/database provisioned.

### Required desired state

```text
Lovable Cloud runtime backend: NOT provisioned / NOT active for the new project
External Supabase runtime: gysgzasfcjvtrgaigfyn
```

If Lovable exposes a Cloud status panel, database status, or equivalent metadata, record the exact result.

### Mandatory stop

If the new project has a newly provisioned Lovable Cloud backend or is actively bound to Lovable Cloud, classify the mission as failed and stop.

Do not delete or remove that Cloud instance under this mission. Any cleanup would require separate authorization.

---

## 11. Verification D — Production Schema/Data Integrity

Before creation, record a read-only production baseline sufficient to detect unintended mutation. After creation, compare the same indicators.

At minimum verify:

- migration inventory/count unchanged;
- public table inventory unchanged;
- catalog table inventory unchanged;
- public function inventory unchanged;
- no new business/test records created;
- no seed/sample data introduced;
- no unexpected schema, RLS, policy, function, trigger, storage, or edge-function creation attributable to the new Lovable project.

Do not perform synthetic production writes just to test the connection.

### Pass condition

Project creation produced no unauthorized production schema or business-data mutation.

---

## 12. Verification E — Environment and Dependency State

Inspect the new Lovable project's generated source/configuration without normalizing or repairing anything.

Record the post-creation state of, where present:

- `.env` / environment configuration;
- `package.json`;
- `bun.lock`;
- `package-lock.json`;
- `supabase/config.toml`;
- `vite.config.*`;
- Lovable-specific configuration files;
- `src/integrations/supabase/**`;
- any Lovable Cloud SDK/imports.

Determine whether Lovable automatically introduced:

- `@lovable.dev/cloud-auth-js`;
- a platform-managed `@lovable.dev/vite-tanstack-config` version;
- Cloud-specific environment variables;
- a backend ref other than `gysgzasfcjvtrgaigfyn`;
- generated source that assumes Lovable Cloud.

Do not modify these files in this mission.

This phase is inspection only.

---

## 13. Verification F — GitHub Status

Do not connect the new Lovable project to the canonical GitHub repository during this mission unless the platform has already done so automatically.

Determine and record:

- whether the new project is connected to any GitHub repository;
- whether any GitHub repository was automatically created;
- whether any commit was automatically pushed to `SmartBusinessv1/smart-business`;
- whether canonical `main` remains unchanged.

### Mandatory rule

No new Lovable-generated source may be pushed into canonical `main` under this mission.

Canonical source synchronization will be a separate mission if this verification passes.

---

## 14. Verification G — Existing Project Preservation

After new-project creation, re-check the old Lovable project.

Confirm:

- its project ID is unchanged;
- Lovable Cloud remains unchanged;
- no settings were altered;
- no source changes occurred because of the new-project action;
- no project rename/replacement occurred;
- it remains independently accessible.

---

## 15. Final Verdict Classes

The completion report must choose exactly one final verdict.

### PASS — EXTERNAL-SUPABASE-FIRST PROJECT CREATED AND VERIFIED

Use only if all of the following are proven:

- exactly one new Lovable project was created;
- exact backend ref is `gysgzasfcjvtrgaigfyn`;
- no Lovable Cloud backend is active/provisioned for the new project;
- no unauthorized production schema/data mutation occurred;
- the existing Lovable project is untouched;
- canonical GitHub `main` is untouched;
- source/dependency state is fully recorded;
- no frontend implementation/publish/deploy occurred.

### STOPPED — HUMAN CREATION ACTION REQUIRED

Use only if a human confirmation is required before the creation action and the Founder has not yet completed it.

### FAIL — WRONG OR UNPROVEN BACKEND

Use if the exact backend ref cannot be proven or resolves to anything except `gysgzasfcjvtrgaigfyn`.

### FAIL — LOVABLE CLOUD PROVISIONED

Use if the new project is created with Lovable Cloud active/provisioned contrary to the mission goal.

### FAIL — UNAUTHORIZED MUTATION

Use if project creation causes unauthorized schema/data/GitHub/source mutation outside this instruction.

Do not self-remediate a failed state.

---

## 16. Explicitly Prohibited

This mission does not authorize:

- `SB-P-1.11-UI-1` implementation;
- catalog UI implementation;
- transaction UI implementation;
- dashboard redesign;
- authentication changes;
- production migration;
- schema creation/modification;
- data seeding;
- test data in production;
- moving data between Lovable Cloud and Supabase;
- deleting/removing Lovable Cloud;
- repurposing the automated-test project;
- creating another Supabase project;
- dependency repair/upgrade/downgrade;
- canonical-source synchronization;
- replacing the existing Lovable project;
- domain changes;
- publish;
- deploy.

---

## 17. Required Human Checkpoints

The Founder must be involved at the final new-project creation boundary.

If Lovable presents any unexpected confirmation concerning:

- enabling Lovable Cloud;
- creating a database;
- migrating schema/data;
- replacing the selected Supabase project;
- granting broader Supabase permissions than expected;
- creating a new Supabase project;
- publishing/deploying;

stop and capture the screen before proceeding.

Do not infer consent.

---

## 18. Completion Report

Create:

```text
communication/live/report1.56.md
```

The report must include:

1. starting GitHub `main` SHA;
2. pre-creation Lovable and production baseline;
3. exact Founder action taken;
4. new Lovable project identity;
5. exact post-creation Supabase project ref evidence;
6. Lovable Cloud provisioning state;
7. production schema/data integrity comparison;
8. environment/configuration findings;
9. dependency findings;
10. GitHub connection/status findings;
11. existing old-project preservation result;
12. prohibited-action confirmation;
13. warnings/anomalies;
14. final verdict;
15. recommended next mission.

Run the repository Markdown Quality Gate and pre-commit validation before opening the completion-report PR.

Do not self-merge.

---

## 19. Success Boundary

Even a PASS does not authorize frontend work.

A PASS means only:

> A separate Lovable project now exists whose post-creation state has been proven to use the approved external Supabase production backend without Lovable Cloud runtime provisioning or unauthorized side effects.

After a PASS, Mission Control must separately authorize canonical-source synchronization into the new project before `SB-P-1.11-UI-1` may restart.

---

## Next Logical Step

After human review and merge of this instruction, execute the mission under Claude Code supervision. Claude Code should perform the preflight, stop for the Founder at the final Lovable project-creation action if required, then immediately verify the new project's backend and integrity state and open the `report1.56.md` completion-report PR.