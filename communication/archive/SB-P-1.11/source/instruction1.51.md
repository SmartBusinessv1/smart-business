# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-LOV-REMIX-1 — Controlled Lovable Clean-Remix Preparation & Execution

**Instruction ID:** `instruction1.51`

**Mission ID:** `SB-P-1.11-LOV-REMIX-1`

**Mission Name:** Controlled Lovable Clean-Remix Preparation & Execution

**Authorized By:** Mission Control

**Mission Status:** ACTIVE AFTER HUMAN MERGE

**Execution Environment:** Claude Code, using read-only GitHub inspection plus Lovable tools only as authorized below

**Required Completion Report:** `communication/live/report1.54.md`

---

# 1. Mission Objective

Create a new, clean Lovable project path for Smart Business that avoids the recurring backend-binding and dependency drift of the existing Cloud-enabled Lovable project.

The preferred outcome is a clean remix/new Lovable project that:

1. starts from the current canonical Smart Business source;
2. is configured from the beginning for the approved external Supabase backend;
3. does not use Lovable Cloud as the Smart Business runtime backend;
4. does not mutate, remove, disconnect, or otherwise alter the existing Lovable project;
5. does not modify the approved Supabase production schema or data;
6. preserves GitHub `main` as the canonical source of truth;
7. passes clean-environment verification before `SB-P-1.11-UI-1` is restarted.

This mission is a controlled environment-remediation mission.

It is **not** the Catalog Frontend Implementation mission.

---

# 2. Canonical Starting State

Execute from the latest merged `main`.

The current canonical basis at authorization time is:

`c2c509963d2de17d6dc6dff158f8db0dc4016830`

The executor must pull and verify latest `main` before beginning. If `main` has advanced, record the exact new starting SHA and confirm that the newer commits do not alter this mission's assumptions before proceeding.

Approved Smart Business runtime backend:

`gysgzasfcjvtrgaigfyn`

Dedicated isolated test backend:

`drravyyauixltoihzmwo`

Existing Lovable Cloud backend associated with the current project:

`wwgqnshcgbukqczqblsm`

The existing Lovable project is:

- project id: `64c2b9b1-2461-4045-9acc-19e2658b8ca2`;
- project name: `governed-growth-path`;
- display name: `Smart Business`.

The existing Lovable project must remain untouched by this mission except for read-only verification.

---

# 3. Governing Evidence

This mission shall execute according to the approved Smart Business governance and the following merged evidence chain:

- `communication/live/instruction1.49.md`;
- `communication/live/report1.52.md`;
- `communication/live/instruction1.50.md`;
- `communication/live/report1.53.md`;
- `communication/live/instruction1.48.md`;
- `communication/live/report1.51.md`.

Important locked conclusions from that evidence:

1. GitHub `main` remains canonical and has not been contaminated by Lovable platform drift.
2. The existing Lovable project is Cloud-enabled and has repeatedly reasserted platform-managed `.env`, dependency, and lockfile drift during sandbox/bootstrap cycles.
3. An in-place switch to external Supabase was not proven sufficiently safe and reversible.
4. Lovable Cloud removal is irreversible and remains prohibited.
5. A clean remix/new-project path is the preferred lower-risk fallback.
6. The canonical dependency graph is reproducible after the accepted `bun.lock` remediation.
7. Production catalog backend migration is complete and verified.

---

# 4. Mission Boundaries

## Authorized

This mission may:

- inspect the current GitHub `main` and existing Lovable project read-only;
- inspect current Lovable project/workspace capabilities and documented project-creation/remix options;
- create **one** new Lovable project/remix only after the Phase 1 gate passes;
- use the existing Lovable project as the source for a remix only if the remix is created from a verified canonical source state;
- alternatively create a fresh project from the canonical repository/source if remix cannot guarantee a clean canonical base;
- require the Founder to perform a human-only Supabase OAuth/organization/project-selection step;
- bind the new project to the approved external Supabase project `gysgzasfcjvtrgaigfyn` only after explicit human confirmation;
- perform read-only verification against the external backend where safe and necessary;
- verify project files, runtime environment, dependency state, backend identity, and GitHub alignment;
- create `communication/live/report1.54.md` and open a completion-report PR.

## Not Authorized

This mission must not:

- remove, disable, disconnect, migrate, delete, or alter Lovable Cloud on the existing project;
- mutate the existing Lovable project in any way;
- publish or deploy the new or existing Lovable project;
- begin `SB-P-1.11-UI-1` implementation;
- create or modify production database schema, migrations, data, RLS, grants, functions, policies, storage, users, businesses, transactions, catalog items, or test records;
- bind the new project to `drravyyauixltoihzmwo` as runtime;
- bind the new project to `wwgqnshcgbukqczqblsm`;
- create any third Supabase backend;
- copy the production schema into another backend;
- import or migrate Lovable Cloud data;
- modify GitHub canonical `.env`, `package.json`, `bun.lock`, `package-lock.json`, `supabase/config.toml`, `vite.config.ts`, `bunfig.toml`, or application source as part of environment setup;
- accept dependency upgrades merely because Lovable suggests them;
- push Lovable-generated environment or dependency drift into GitHub;
- self-approve or self-merge any PR.

---

# 5. Phase 1 — Pre-Creation Safety Gate

Before creating any new Lovable project, establish and record all of the following.

## A. Canonical Repository State

Confirm:

- exact current GitHub `main` SHA;
- `.env` points to `gysgzasfcjvtrgaigfyn`;
- `supabase/config.toml` points to `gysgzasfcjvtrgaigfyn`;
- `package.json` contains `@lovable.dev/vite-tanstack-config` at the current canonical value and does not contain `@lovable.dev/cloud-auth-js`;
- `bun.lock` is consistent with canonical `package.json`;
- no unreviewed Lovable drift exists in GitHub `main`.

## B. Existing Lovable Project Preservation

Record:

- existing project id;
- existing project tip SHA;
- existing Cloud status;
- existing runtime/environment state;
- confirmation that no mutation will be made to it.

## C. New-Project Creation Path

Determine the safest available path:

### Preferred Path A — Clean Remix

Use a remix only if all of the following can be proven before creation:

- source is the canonical Smart Business project/source at current `main`;
- no Lovable internal drift is carried into the remix;
- creation does not automatically enable Lovable Cloud before backend selection;
- the new project can be configured for external Supabase from the beginning;
- the original project remains unchanged.

### Fallback Path B — Fresh Lovable Project from Canonical Source

If remix cannot satisfy the above, do not improvise. Determine whether a fresh Lovable project can be created from the canonical source without Cloud binding and with external Supabase selected from the start.

### Mandatory Stop

If neither path can be proven to avoid automatic Lovable Cloud runtime binding before the Founder can select the approved external Supabase project, STOP.

Do not create a project merely to discover how the backend-selection flow behaves.

---

# 6. Phase 2 — Controlled New-Project Creation

Enter Phase 2 only if Phase 1 passes.

Create exactly one new Lovable project/remix.

Record immediately:

- new project id;
- new project name/display name;
- workspace id;
- creation method used: remix or fresh project;
- source commit/base SHA;
- whether chat history was copied;
- whether custom knowledge was copied;
- initial backend state;
- whether Lovable Cloud is enabled;
- whether any Supabase project is already bound;
- initial Git/project tip SHA.

## Naming

Use a clearly temporary/non-production name that distinguishes the remediation environment from the existing project, for example:

`Smart Business — External Supabase Clean`

Do not rename the existing Lovable project.

## Existing Project Preservation Check

Immediately after creation, re-check the existing project and confirm:

- project still exists;
- Cloud still exists;
- its project id is unchanged;
- no settings were altered;
- no code or environment change was introduced by creating the new project.

If any unexpected mutation is detected on the existing project, STOP.

---

# 7. Phase 3 — External Supabase Binding Gate

The target is only:

`gysgzasfcjvtrgaigfyn`

If the new project requires a human OAuth/organization/project-selection flow, STOP and return a precise human action request before the final selection/connection occurs.

The request must state exactly:

1. where to click in Lovable;
2. which Supabase organization/account must be selected;
3. which exact project ref must be selected: `gysgzasfcjvtrgaigfyn`;
4. what must **not** be selected;
5. the exact checkpoint after which the Founder should stop and return to Mission Control if the UI presents migration, schema creation, overwrite, import, Cloud removal, or destructive options.

The executor must never infer the project selection automatically when a human confirmation is required.

## Prohibited Binding Outcomes

STOP immediately if Lovable attempts to:

- create a new Supabase project;
- bind to `wwgqnshcgbukqczqblsm`;
- bind to `drravyyauixltoihzmwo`;
- provision Lovable Cloud as runtime;
- migrate or recreate schema;
- import or copy data;
- modify production schema;
- request destructive Cloud removal;
- request broad dependency or source changes as a prerequisite.

---

# 8. Phase 4 — Post-Binding Backend Identity Verification

After the external Supabase connection is completed, verify without production writes:

1. runtime Supabase URL/project ref resolves to `gysgzasfcjvtrgaigfyn`;
2. `supabase/config.toml` remains `gysgzasfcjvtrgaigfyn`;
3. no runtime path points to `wwgqnshcgbukqczqblsm`;
4. no runtime path points to `drravyyauixltoihzmwo`;
5. Lovable Cloud is not active as the new project's runtime backend;
6. the new project has not created another Supabase backend;
7. no production schema/data mutation occurred;
8. existing project remains untouched.

Read-only backend evidence may be used to confirm identity and presence of the already-approved catalog surface.

Do not perform behavioral write tests against production.

---

# 9. Phase 5 — Canonical Source and Dependency Integrity Verification

Compare the new Lovable project against the canonical GitHub source.

At minimum verify:

- `.env` backend identity;
- `package.json`;
- `bun.lock`;
- `package-lock.json`;
- `supabase/config.toml`;
- `vite.config.ts`;
- `bunfig.toml`;
- `src/**`;
- `.lovable/**`, if present;
- any new integration/config files introduced by Lovable.

Classify every difference as one of:

- expected project metadata only;
- required external-Supabase binding metadata;
- unauthorized drift;
- source divergence requiring Mission Control review.

## Dependency Rule

The new project must not silently advance `@lovable.dev/vite-tanstack-config`, Zod, TanStack, HMR tooling, or any unrelated package simply because the Lovable platform prefers a newer version.

If dependency/version drift occurs, STOP and report it. Do not normalize GitHub to the Lovable version under this mission.

---

# 10. Phase 6 — Clean Reproducibility Verification

Only if the canonical package/lock relationship remains intact, verify the new project environment as far as the platform permits without altering tracked dependency metadata.

Required evidence:

- frozen/immutable dependency install succeeds or an equivalent clean-environment check confirms exact lockfile reproducibility;
- development preview starts;
- production build succeeds;
- no Zod/`prefault` failure;
- no source-generation change is accidentally committed;
- runtime still targets `gysgzasfcjvtrgaigfyn`.

If Lovable itself automatically rewrites canonical dependency files during this check, classify as FAIL and stop.

---

# 11. Phase 7 — Durability Verification

The purpose of the clean remix is to eliminate recurring platform drift, not merely obtain a temporary clean moment.

Perform at least one safe refresh/reopen/bootstrap cycle of the **new** project, then verify again:

- backend still `gysgzasfcjvtrgaigfyn`;
- no `.env` rebind to Lovable Cloud;
- no `package.json` version drift;
- no `bun.lock` rewrite;
- no automatic Lovable Cloud provisioning;
- no source drift;
- existing project unchanged.

If any previously observed drift pattern reappears, final verdict must be FAIL.

---

# 12. GitHub Relationship

This mission does not authorize replacing GitHub `main` or making the new Lovable project a new source of truth.

GitHub `main` remains canonical.

The executor must determine and report how the new Lovable project relates to GitHub:

- connected repository status;
- branch/ref behavior;
- whether GitHub updates sync into the new project;
- whether Lovable internal commits remain isolated;
- whether any setup action would require repository reconnection or duplication.

Do not disconnect the existing project from GitHub under this mission.

Do not push any Lovable-generated drift into GitHub.

---

# 13. Acceptance Criteria

The mission may return:

## `PASS — CLEAN REMIX READY FOR SB-P-1.11-UI-1`

only if all of the following are true:

- exactly one new project/remix was created;
- existing Lovable project is untouched;
- new project starts from verified canonical source;
- external runtime backend is exactly `gysgzasfcjvtrgaigfyn`;
- Lovable Cloud is not the new project's runtime backend;
- no third backend exists;
- no production schema/data mutation occurred;
- no dependency drift occurred;
- clean install/build/dev verification passes;
- one refresh/bootstrap durability cycle passes;
- GitHub remains canonical;
- no publish/deploy occurred.

## `STOPPED — HUMAN BACKEND SELECTION REQUIRED`

Use this if all technical gates pass but the Founder must complete an OAuth/organization/project-selection step before the mission can continue.

The report must give exact UI instructions and stop before any uncertain/destructive option.

## `FAIL — CLEAN REMIX NOT SAFE/CANONICAL`

Use this if the new project cannot avoid Cloud runtime binding, dependency drift, source divergence, unsafe backend actions, or any other stop condition.

---

# 14. Required Completion Report

Create:

`communication/live/report1.54.md`

The report must include:

1. starting GitHub `main` SHA;
2. existing Lovable project preservation evidence;
3. Phase 1 creation-path decision;
4. whether a new project/remix was created;
5. new project identity and creation method;
6. source/base SHA;
7. external Supabase binding status;
8. any Founder action requested/performed;
9. post-binding runtime backend identity;
10. Lovable Cloud status on both old and new projects;
11. exact diff from canonical source;
12. dependency-integrity findings;
13. clean install/dev/build findings;
14. durability refresh-cycle findings;
15. GitHub relationship findings;
16. confirmation of zero production writes/schema changes;
17. confirmation of no publish/deploy;
18. warnings/anomalies;
19. final verdict;
20. Next Logical Step.

Run the repository Markdown Quality Gate and pre-commit hook before committing the report.

Open a PR containing the report and stop.

Do not self-merge.

---

# 15. Required Stop Conditions

STOP immediately if any of the following occurs:

- existing Lovable project is mutated;
- existing Lovable Cloud must be removed or disconnected;
- new project automatically provisions Cloud and cannot be safely changed before use;
- a third Supabase backend is created;
- production schema/data mutation is requested or observed;
- test project is proposed as runtime;
- source cannot be proven canonical;
- dependency versions drift;
- GitHub canonical files would need to be altered merely to satisfy Lovable platform preferences;
- external backend identity cannot be proven;
- project selection is ambiguous;
- human confirmation is required and has not yet been provided;
- any irreversible action is proposed merely to discover behavior;
- publish/deploy is requested or occurs.

---

# 16. Explicit Non-Authorization of Frontend Work

Even if this mission passes, do not implement Catalog UI under this instruction.

A PASS means only that Mission Control may separately decide to restart:

`SB-P-1.11-UI-1 — Initial Phase 1 Catalog Frontend Implementation`

The existing locked frontend mission scope remains unchanged.

---

# Next Logical Step

After human review and merge of this instruction, execute `SB-P-1.11-LOV-REMIX-1` through Claude Code.

If the mission returns `PASS — CLEAN REMIX READY FOR SB-P-1.11-UI-1`, Mission Control may issue a separate restart authorization for the Catalog Frontend Implementation mission.

If the mission returns `STOPPED — HUMAN BACKEND SELECTION REQUIRED`, the Founder should perform only the explicitly documented selection step and return evidence before execution resumes.

If the mission returns `FAIL — CLEAN REMIX NOT SAFE/CANONICAL`, do not resume frontend implementation until Mission Control selects another environment strategy.