# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-LOV-NEW-1 — LOVABLE NEW PROJECT BACKEND-CHOICE INSPECTION

**Mission ID:** SB-P-1.11-LOV-NEW-1

**Mission Name:** Lovable New Project Backend-Choice Inspection

**Reporting Room:** Mission Control / Founder-supervised Lovable inspection

**Mission Status:** PENDING HUMAN REVIEW AND MERGE

**Authorized By:** Mission Control after human merge of this instruction

---

# 1. Mission Objective

Determine, through a controlled human inspection of Lovable's interactive **New Project** flow, whether Lovable exposes a backend choice that allows a new Smart Business Lovable project to be created with the approved external Supabase project **before Lovable Cloud is provisioned**.

This is a **human UI inspection mission only**.

This mission does not authorize creation of a new project.

This mission does not authorize connection to Supabase.

This mission does not authorize Lovable Cloud provisioning.

This mission does not authorize frontend implementation.

The sole purpose is to resolve the remaining UI-level uncertainty identified by:

- `communication/live/report1.52.md`;
- `communication/live/report1.53.md`;
- `communication/live/report1.54.md`.

---

# 2. Locked Architecture and Authorities

Execute according to the approved Smart Business governance and architecture, including:

- Lighthouse Constitution;
- Smart Business Master System Manifesto;
- Supabase Architecture Framework;
- Lovable Build Framework;
- API / WhatsApp / OpenAI Framework;
- AI Behaviour and Model Training Framework;
- Product Truth Map;
- Product Execution and Release Framework;
- AI Operations Manual;
- approved SB-P-1.11 catalog architecture and prior mission evidence.

The following backend identities are locked:

## Approved runtime backend

`gysgzasfcjvtrgaigfyn`

This is the only approved Smart Business runtime Supabase project.

## Dedicated automated test backend

`drravyyauixltoihzmwo`

This is test-only and must never be selected as a Lovable runtime backend.

## Existing Lovable Cloud backend

`wwgqnshcgbukqczqblsm`

This is non-authoritative and must not become the Smart Business runtime backend.

---

# 3. Existing Lovable Project — Preserve Completely

Existing Lovable project:

- Project ID: `64c2b9b1-2461-4045-9acc-19e2658b8ca2`;
- historical project name: `governed-growth-path`;
- display name: Smart Business.

Under this mission, the existing project must remain completely untouched.

Do not:

- edit it;
- open a build prompt in it;
- change Cloud settings;
- connect or disconnect integrations;
- change GitHub sync;
- change environment variables;
- alter package versions;
- publish or deploy it;
- remove Lovable Cloud.

---

# 4. Evidence Background

Prior missions established:

1. GitHub `main` remains the canonical source of truth.
2. The existing Lovable project can temporarily reassert Lovable Cloud `.env` and platform dependency values during sandbox bootstrap.
3. Existing-project backend switching could not be proven fully safe and reversible.
4. A Cloud-project remix is explicitly unsafe for this architecture because Lovable documentation indicates it produces another Cloud project and can copy Cloud database structure.
5. Programmatic `create_project` does not expose a backend-selection parameter and defaults to Lovable's backend stack.
6. The one unresolved path is the **interactive human New Project wizard**, which is not exposed through MCP/API evidence strongly enough to determine whether it offers an external-Supabase-first option before Cloud creation.

This mission exists only to inspect that path.

---

# 5. Human Operator

Founder / Human Operator:

**Riyas PK**

The Founder shall perform the interactive Lovable inspection manually in the Lovable dashboard.

AI may guide the Founder through what to inspect and what evidence to capture, but AI must not click, submit, create, connect, or authorize anything on the Founder's behalf.

---

# 6. Strict Non-Mutation Boundary

This mission is observational.

The Founder may navigate through the New Project flow only as far as necessary to inspect the choices presented before any irreversible or mutating action.

The Founder must stop before any action that could:

- create a Lovable project;
- provision Lovable Cloud;
- create a new Supabase project;
- connect to an existing Supabase project;
- authorize OAuth;
- submit project creation;
- start an AI build;
- initialize code generation;
- create a database;
- modify an existing database;
- publish or deploy anything.

If uncertainty exists about whether a button is mutating, treat it as mutating and stop before clicking it.

---

# 7. Phase 1 — Repository Preflight

Before the human UI inspection begins, confirm and record:

1. latest GitHub `main` SHA;
2. working tree / repository state remains canonical;
3. `.env` on GitHub still references `gysgzasfcjvtrgaigfyn`;
4. `supabase/config.toml` still references `gysgzasfcjvtrgaigfyn`;
5. `package.json` remains canonical;
6. `bun.lock` remains canonical;
7. `@lovable.dev/cloud-auth-js` remains absent;
8. no new unauthorized Lovable / Supabase / frontend changes have been merged since the previous mission.

If repository preflight fails, stop the mission before entering the Lovable UI.

---

# 8. Phase 2 — Human Lovable New Project Wizard Inspection

Open the Lovable dashboard manually.

Do not use the existing Smart Business project editor for this inspection.

Locate the workflow used to begin a **new project**.

Proceed screen by screen, without completing project creation.

For every screen encountered before a mutating action, capture the following:

- screenshot;
- exact visible heading;
- exact relevant button or option labels;
- whether any backend choice is shown;
- whether Lovable Cloud is mentioned;
- whether Supabase is mentioned;
- whether an existing Supabase project can be selected;
- whether a backend choice is optional or mandatory;
- whether any Supabase selection occurs before project creation;
- whether there is an explicit "Cloud or Supabase" choice;
- whether a free-text project prompt appears before or after backend selection.

Do not infer behavior from wording alone. Record only what is visibly presented.

---

# 9. Mandatory Backend-Choice Questions

The Founder must answer each of the following from direct UI evidence.

## Question 1

Before creating the project, does Lovable display an explicit backend selection step?

Allowed evidence outcomes:

- YES;
- NO;
- NOT DETERMINABLE WITHOUT MUTATION.

## Question 2

If a backend selection exists, are the choices visibly equivalent to:

- Lovable Cloud;
- external / existing Supabase;
- another backend option?

Record exact wording.

## Question 3

Can the Founder select **an existing Supabase project** before project creation?

## Question 4

Can the exact approved project `gysgzasfcjvtrgaigfyn` be identified before project creation?

Do not connect it. Only determine whether the UI supports reaching a selection list or equivalent step safely.

## Question 5

Does Lovable appear to provision Cloud automatically before any external Supabase choice is offered?

## Question 6

Does the flow require project creation first, followed by later Supabase connection?

## Question 7

Is there any indication that choosing external Supabase still creates a Lovable Cloud database in parallel?

## Question 8

Is there a visible final confirmation step where project creation can be stopped after backend selection but before provisioning/build begins?

---

# 10. Mandatory Stop Conditions

Stop immediately if any of the following occurs:

- a button clearly says Create, Build, Generate, Start Building, Connect, Authorize, Continue with OAuth, Provision, Enable Cloud, or equivalent and its effect is not known to be non-mutating;
- the flow requires authorizing Supabase before backend architecture is visible;
- the flow requires creating a project before backend choice is visible;
- Lovable Cloud is automatically provisioned before external Supabase can be chosen;
- a new Supabase project would be created automatically;
- only Lovable Cloud is offered;
- external Supabase is offered only as a post-creation migration / reconnection path;
- the UI is ambiguous enough that continuing could create infrastructure;
- any attempt would modify the existing Lovable project.

Do not click through a stop condition just to discover what happens next.

---

# 11. Evidence Capture Requirements

Capture screenshots sufficient to prove the decision.

At minimum, where available, capture:

1. Lovable dashboard / New Project entry point;
2. first New Project screen;
3. any backend-selection screen;
4. any Cloud/Supabase choice screen;
5. any external Supabase organization/project selection screen reached without mutation;
6. final pre-creation screen, if safely reachable;
7. the exact screen where the mission stops.

Do not expose secret keys, access tokens, service-role credentials, OAuth tokens, or sensitive Supabase credentials in screenshots.

If a screenshot contains a secret, redact it before it becomes mission evidence.

---

# 12. Decision Classification

After inspection, classify the result into exactly one of these paths.

## PATH A — EXTERNAL-SUPABASE-FIRST FLOW PROVEN

Use only if direct UI evidence proves that:

- a new Lovable project can choose external Supabase before Cloud is provisioned;
- the choice occurs before final project creation;
- the existing approved Supabase project can be selected;
- no third backend is created;
- there is no evidence of mandatory parallel Lovable Cloud provisioning.

Result:

`PASS — EXTERNAL-SUPABASE-FIRST NEW PROJECT PATH PROVEN`

This does **not** authorize project creation. A separate execution mission is still required.

## PATH B — CLOUD-FIRST / POST-CREATION SUPABASE ONLY

Use if evidence shows Lovable Cloud is created first, or external Supabase is only connectable after project creation.

Result:

`FAIL — LOVABLE NEW PROJECT FLOW IS CLOUD-FIRST / POST-CREATION SUPABASE`

No new project shall be created.

Recommended next step: direct Lovable support inquiry or alternate frontend execution strategy.

## PATH C — UI BEHAVIOR REMAINS UNPROVEN

Use if the required decision cannot be reached without crossing a mutating boundary.

Result:

`STOPPED — BACKEND CHOICE CANNOT BE PROVEN WITHOUT MUTATION`

Recommended next step: direct Lovable support inquiry.

---

# 13. Explicitly Prohibited Actions

This mission does not authorize:

- creating a new Lovable project;
- remixing the existing project;
- creating a template;
- connecting Supabase;
- authenticating Supabase OAuth;
- selecting and confirming a Supabase project;
- creating another Supabase project;
- enabling Lovable Cloud;
- removing Lovable Cloud;
- migrating Cloud data;
- copying schemas;
- running Supabase migrations;
- running SQL;
- creating test rows in production;
- changing `.env`;
- changing `package.json`;
- changing `bun.lock`;
- changing `package-lock.json`;
- changing `supabase/config.toml`;
- changing application source;
- restarting SB-P-1.11-UI-1;
- publishing;
- deploying;
- replacing the existing Lovable project;
- deleting any Lovable project.

---

# 14. Required Completion Report

After the Founder completes the inspection, create:

`communication/live/report1.55.md`

The report must include:

1. Mission ID and verdict;
2. starting GitHub `main` SHA;
3. date/time of human inspection;
4. Lovable workspace used;
5. exact UI path inspected;
6. every relevant screen and its exact wording;
7. screenshots/evidence references;
8. answers to all eight Mandatory Backend-Choice Questions;
9. exact stop point;
10. whether any project was created — must be NO;
11. whether any backend was created or connected — must be NO;
12. whether existing Lovable Cloud changed — must be NO;
13. whether existing Smart Business Lovable project changed — must be NO;
14. whether production Supabase changed — must be NO;
15. final classification: Path A, Path B, or Path C;
16. recommended next mission;
17. confirmation that all prohibited actions were avoided;
18. `Next Logical Step`.

The report should pass the repository Markdown Quality Gate and pre-commit hook before PR creation.

---

# 15. Completion PR Rules

The completion PR may contain only:

- `communication/live/report1.55.md`;
- approved non-sensitive screenshot/evidence files if the repository evidence convention requires them.

Do not include application/configuration/dependency changes.

Human review and merge are required.

AI must not self-merge.

---

# 16. Current Product Status During This Mission

Until this mission is complete and reviewed:

- production SB-P-1.11 backend remains complete and verified;
- canonical GitHub remains authoritative;
- the existing Lovable project remains preserved;
- `SB-P-1.11-UI-1` remains on HOLD;
- no Lovable publish/deploy is authorized.

---

# 17. Next Logical Step

After this instruction is human-reviewed and merged:

1. perform the Founder-supervised Lovable New Project wizard inspection exactly as defined above;
2. stop before any mutating action;
3. capture screenshots;
4. bring the evidence back to Mission Control;
5. create `communication/live/report1.55.md` recording Path A, B, or C;
6. only after human review of that evidence may Mission Control authorize either a fresh external-Supabase-first Lovable project, a Lovable support inquiry, or an alternate frontend execution strategy.
