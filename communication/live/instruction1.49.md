# SMART BUSINESS — MISSION CONTROL INSTRUCTION

## SB-P-1.11-LOV-PLAT-1 — LOVABLE PLATFORM DRIFT RESOLUTION INVESTIGATION

**Instruction ID:** instruction1.49  
**Mission ID:** SB-P-1.11-LOV-PLAT-1  
**Mission Name:** Lovable Platform Drift Resolution Investigation  
**Authorized By:** Mission Control  
**Mission Status:** ACTIVE AFTER HUMAN MERGE  
**Execution Type:** Investigation only  
**Reporting Room:** Lovable / Frontend Platform Investigation  

---

## 1. Mission Objective

Determine why the Lovable project repeatedly reintroduces tracked repository drift after canonical GitHub corrections are merged, and identify a durable operating method that preserves GitHub as the canonical implementation source without allowing Lovable to silently rebind Smart Business to a non-authoritative backend or rewrite approved dependency pins.

This mission is investigation only.

It does not authorize application implementation, dependency remediation, environment rebinding, database migration, publish, deployment, or any production change.

---

## 2. Current Accepted Baseline

Canonical repository:

`SmartBusinessv1/smart-business`

Canonical GitHub `main` commit at mission creation:

`0ffae383320f436d4bba26905f1523cf3f9aff13`

This commit contains the accepted SB-P-1.11-DEP-2 remediation.

Approved Smart Business runtime backend:

`gysgzasfcjvtrgaigfyn`

Lovable Cloud Supabase project:

`wwgqnshcgbukqczqblsm`

Status of Lovable Cloud database:

**NON-AUTHORITATIVE.**

It must not be used as the Smart Business runtime backend, backend-readiness authority, or migration target under this mission.

Dedicated automated test project:

`drravyyauixltoihzmwo`

Status:

**TEST ONLY.**

It must not become the Lovable application runtime backend.

---

## 3. Confirmed Trigger for This Mission

A fresh Lovable clean-environment verification was performed after the canonical dependency remediation was merged.

The verification found that Lovable again introduced a platform-generated commit one step ahead of canonical GitHub `main` and changed exactly these tracked files:

- `.env`
- `package.json`
- `bun.lock`

Observed drift included:

- `.env` switching from approved runtime project `gysgzasfcjvtrgaigfyn` to Lovable Cloud project `wwgqnshcgbukqczqblsm`;
- `@lovable.dev/vite-tanstack-config` changing from canonical `2.7.7` to `2.9.1`;
- `bun.lock` being rewritten around the newer Lovable tooling state;
- installed `node_modules` matching the drifted Lovable tooling rather than canonical GitHub;
- `supabase/config.toml` remaining correctly pointed at `gysgzasfcjvtrgaigfyn`.

The prior SB-P-1.11-DEP-2 lockfile correction itself remained valid: `@lovable.dev/cloud-auth-js` stayed absent from `bun.lock`.

The resulting Lovable verification verdict was:

`FAIL — STOP`

This repeated recurrence demonstrates that another restore-only mission is not sufficient.

---

## 4. Core Investigation Questions

The investigator must establish, with evidence, answers to all of the following.

### A. Drift ownership and trigger

Determine what Lovable platform action or lifecycle event causes each of the following to be rewritten:

- `.env`;
- `package.json`;
- `bun.lock`;
- installed dependency tree.

Identify whether drift is triggered by any of these, or another mechanism:

- project startup;
- preview rebuild;
- Plan Mode;
- Build Mode;
- Lovable Cloud database enablement;
- GitHub synchronization;
- dependency bootstrap;
- platform runtime upgrade;
- environment reconciliation;
- project import or reconnect behavior.

Do not speculate where evidence can be collected.

### B. GitHub synchronization model

Determine how Lovable represents and synchronizes Git history for this project.

Specifically establish:

- whether Lovable maintains an internal branch or commit layer above GitHub `main`;
- whether platform-generated commits are automatically pushed to GitHub or remain internal;
- what Lovable means when its local `origin/main` differs from actual GitHub `main`;
- whether a clean GitHub commit can be selected as a durable Lovable project base;
- whether platform-generated configuration commits can be disabled, isolated, reverted, or prevented from becoming implementation ancestry.

### C. Supabase binding model

Determine why `.env` is repeatedly rewritten to Lovable Cloud project `wwgqnshcgbukqczqblsm` even though canonical GitHub configuration points the Smart Business runtime to `gysgzasfcjvtrgaigfyn`.

Establish:

- whether Lovable Cloud database enablement automatically owns or rewrites Supabase environment variables;
- whether an externally managed Supabase project can remain the application runtime backend while Lovable Cloud database exists but is ignored;
- whether Lovable provides a supported project setting, connection mode, environment override, connector, or workflow for external Supabase runtime usage;
- whether Lovable Cloud database must be disabled, disconnected, isolated, or left enabled but non-runtime for this architecture;
- whether any such action would affect existing authentication, preview, build, or project functionality.

Do not disconnect or disable anything under this mission.

### D. Dependency management model

Determine why Lovable rewrites:

`@lovable.dev/vite-tanstack-config`

from the canonical pin:

`2.7.7`

to newer platform-managed versions such as:

`2.9.1`.

Establish:

- whether this package is platform-managed and force-pinned by Lovable;
- whether the project can safely retain the canonical `2.7.7` pin;
- whether Lovable requires a minimum/current version for its preview environment;
- whether the dependency can be excluded from canonical application manifests while Lovable injects tooling externally;
- whether accepting a newer platform-managed version would create a repository architecture change requiring separate Mission Control approval.

Do not update any dependency under this mission.

### E. Durable operating patterns

Evaluate at least these possible models:

**Model 1 — GitHub canonical with Lovable internal drift ignored**  
Lovable may maintain temporary internal/platform commits, but all implementation work must start from and return only approved application diffs against canonical GitHub.

**Model 2 — External Supabase + Lovable without Cloud DB runtime ownership**  
Lovable remains the frontend builder while Smart Business runtime environment is externally controlled.

**Model 3 — Separate clean Lovable project/remix from canonical GitHub**  
A new Lovable project or remix is created without the existing Cloud DB coupling, if supported and justified.

**Model 4 — Platform-managed tooling accepted through a governed compatibility layer**  
Only if evidence proves Lovable cannot operate without its own tooling versions, define a boundary that prevents those platform dependencies from changing application architecture or backend bindings.

**Model 5 — Stop using Lovable for implementation**  
If Lovable cannot preserve the locked Smart Business backend and repository boundaries without recurring unauthorized changes, explicitly evaluate whether continuing to use Lovable for SB-P-1.11 is operationally unacceptable.

Do not choose a model solely for convenience.

The recommended model must protect:

- GitHub as canonical source;
- approved external Supabase runtime;
- reproducible dependency state;
- human review and merge authority;
- no silent backend rebinding;
- no recurring cleanup cycle;
- minimal technical debt.

---

## 5. Investigation Methods Authorized

This mission authorizes read-only or non-mutating investigation using available Lovable and GitHub capabilities.

Permitted activities include:

- inspect Lovable project metadata;
- inspect Lovable edit history and message history;
- inspect current project files and commit ancestry;
- compare Lovable internal commits to GitHub commits;
- inspect workspace/project connector status;
- inspect Lovable database status without querying business data;
- inspect project/workspace knowledge where relevant;
- inspect GitHub history and current canonical files;
- review Lovable documentation or platform behavior where available;
- use Plan Mode for investigation if it does not modify application files.

If Lovable Plan Mode automatically writes `.lovable/plan.md`, record that as platform behavior. Do not treat that planning artifact as application implementation.

---

## 6. Explicitly Prohibited

Do NOT:

- modify `.env`;
- modify `package.json`;
- modify `bun.lock`;
- modify `package-lock.json`;
- modify `supabase/config.toml`;
- modify any file under `src/**`;
- modify any migration;
- install, upgrade, remove, or regenerate dependencies;
- change Supabase URLs, keys, refs, or bindings;
- enable, disable, disconnect, migrate, seed, or modify Lovable Cloud database;
- modify the dedicated test project;
- perform production database writes;
- create a production test business;
- begin SB-P-1.11-UI-1;
- publish;
- deploy;
- accept Lovable platform-generated drift as canonical without a separate Mission Control decision;
- push or merge a platform-generated configuration commit into GitHub `main`;
- self-approve or self-merge.

If investigation requires a mutating action to obtain decisive evidence, stop and report the exact proposed action for separate authorization.

---

## 7. Required Evidence

The report must include, at minimum:

1. exact current GitHub `main` SHA;
2. exact Lovable internal/project tip SHA;
3. commit ancestry showing where Lovable diverges from GitHub;
4. exact files and values rewritten by Lovable;
5. evidence identifying the platform action or lifecycle event associated with the rewrite, if determinable;
6. current Lovable Cloud database status;
7. current connector or integration state relevant to Supabase/GitHub;
8. evidence on whether external Supabase runtime is supported without Lovable Cloud environment takeover;
9. evidence on whether `@lovable.dev/vite-tanstack-config` is platform-managed or application-managed;
10. whether platform drift can be prevented, isolated, tolerated safely, or only corrected after each occurrence;
11. operational risks for each viable model;
12. recommended durable operating model.

Clearly distinguish:

- confirmed facts;
- strong inference;
- unknowns requiring Lovable support/documentation/human dashboard evidence.

---

## 8. Decision Framework

The final report must classify findings into:

### Build Now

Actions required immediately before SB-P-1.11-UI-1 can resume.

### Build Later

Useful platform or repository improvements that do not block current catalog implementation.

### Add-on

Optional platform improvements that can remain outside the core product.

### Separate Product / Platform Work

Infrastructure or developer-experience work that should not be mixed into Smart Business product scope.

### Reject

Any proposed approach that would:

- make Lovable Cloud the canonical Smart Business backend;
- weaken GitHub canonical authority;
- normalize silent environment rebinding;
- require recurring manual cleanup after every Lovable action;
- introduce unnecessary dependency churn;
- bypass human review or governance.

---

## 9. Required Completion Report

Create:

`communication/live/report1.52.md`

The report must contain:

- executive summary;
- confirmed root cause or best-supported root-cause model;
- GitHub/Lovable synchronization findings;
- Supabase binding findings;
- dependency management findings;
- platform lifecycle trigger findings;
- viable operating models;
- rejected models and reasons;
- recommended durable resolution;
- exact next action requiring authorization;
- final verdict.

Allowed final verdicts:

`RESOLVABLE — PROCEED WITH SEPARATE REMEDIATION AUTHORIZATION`

or

`NOT YET RESOLVABLE — ESCALATE / REQUIRE LOVABLE SUPPORT OR PLATFORM CHANGE`

or

`LOVABLE UNSUITABLE FOR CURRENT SB-P-1.11 IMPLEMENTATION BOUNDARY`

---

## 10. Completion Workflow

1. Execute investigation only.
2. Create `communication/live/report1.52.md`.
3. Run the repository Markdown Quality Gate.
4. Commit the report on a dedicated completion-report mission branch.
5. Open a pull request against `main`.
6. Stop.
7. Do not self-merge.

No remediation may be included in the completion PR.

---

## 11. Current Product Status During This Mission

Production catalog backend:

**LIVE AND VERIFIED**

Canonical dependency integrity:

**RESOLVED IN GITHUB**

Lovable environment alignment:

**FAILED — RECURRING PLATFORM DRIFT UNDER INVESTIGATION**

SB-P-1.11-UI-1:

**ON HOLD**

Lovable publish/deploy:

**NOT AUTHORIZED**

Further production database work:

**NOT AUTHORIZED**

---

## 12. Next Logical Step

After this instruction is human-reviewed and merged, execute `SB-P-1.11-LOV-PLAT-1` as an investigation-only mission and return `communication/live/report1.52.md` for Founder/Mission Control review before authorizing any further Lovable remediation or restarting `SB-P-1.11-UI-1`.
