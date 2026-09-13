# SMART BUSINESS — LOVABLE LAB INSTITUTIONAL RETROSPECTIVE

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`  
**Contributor:** Lovable Lab room (`lovable-lab`)  
**Scope:** Documentation and institutional-memory capture only  
**Implementation authority:** None  
**Canonical repository reviewed:** `SmartBusinessv1/smart-business`  
**Canonical baseline reviewed:** `main @ 038913d7ce7e96d306d2ac33875a8919fe1bda60`  
**Date:** 2026-09-13

This retrospective preserves the experimental, recovery, verification, and handoff judgement learned in Lovable Lab across Phase 1. It is not Product Truth, not implementation authority, not approval to publish/unpublish, and not permission to revive any historical Lovable project, promote builder-only code, alter Supabase, change repository bindings, or start a later Product Mission.

> Lovable Lab may explore, test, compare, prototype, diagnose and recover. It does not define Product Truth and does not become canonical merely because an experiment works.

---

## 1. Lessons Learned

### 1.1 Experimental success, project state, repository state, deployment state, runtime state, and accepted implementation are different truths

**CURRENT — STILL VALID**

Lovable Lab repeatedly encountered five states that are easy to collapse into one:

1. an experiment works inside a Lovable editor or plan/build session;
2. the current Lovable project contains a particular file or behavior;
3. canonical `SmartBusinessv1/smart-business` contains an implementation;
4. a published runtime serves that implementation;
5. Mission Control has independently accepted it.

The Lab learned that these states must be named separately. A successful Plan/Discuss answer proves contextual understanding, not implementation. A successful builder preview proves only preview behavior. A committed repository file proves repository state, not deployment. A published route proves runtime reachability, not full business/security correctness. Acceptance remains a governance decision based on evidence.

**CORRECTION / LESSON**

Future reports must always say which truth is being reported: experimental builder state, active Lovable project state, canonical repository state, delivery repository state, published runtime, or Mission Control-accepted implementation.

### 1.2 Lovable Lab is useful precisely because it is allowed to learn without becoming authority

**CAPABILITY PROVEN**

The Lab was valuable when it could safely inspect Project Knowledge behavior, repository awareness, AI context hierarchy, Supabase/Lovable connection state, Build Mode output, publish behavior, security-review surfaces, and runtime behavior without treating every observation as a product decision.

The governance gain was not merely caution. It allowed the project to preserve useful failed or partial experiments without forcing premature promotion.

**CURRENT — STILL VALID**

> Experiment success cannot override current Product Truth.

An experiment can establish feasibility, expose a failure mode, or reveal an integrity requirement. It cannot redefine the product, architecture, permission model, or canonical implementation by itself.

### 1.3 Repository-first context materially reduced builder hallucination and scope drift

**CAPABILITY PROVEN**

Early Lovable calibration work showed that Workspace Knowledge, Project Knowledge, `README.md`, `AGENTS.md`, and mission documents could produce strong Plan Mode alignment before Build Mode. Lovable correctly articulated Smart Business as a governed, Kerala-merchant-focused AI Business Manager; respected the route boundary; refused out-of-scope ERP expansion; and identified explicit unknowns instead of inventing them.

The stronger pattern that emerged was:

- keep durable Product Truth and implementation contracts in GitHub;
- use concise execution wrappers in chat;
- make the approved build prompt the implementation authority;
- separate implementation prompts from later verification prompts;
- do not rely on a long conversational memory as the source of truth.

**CORRECTION / LESSON**

The Lab initially explored attaching multiple approved documents directly to Lovable. The better recurring pattern became: execute one approved implementation prompt that references supporting repository documents, then run verification as separately governed phases.

### 1.4 Plan/Discuss Mode is a powerful calibration and discovery surface, but it must remain non-mutating

**CAPABILITY PROVEN**

Before the first governed Build Mode execution, Lovable Plan Mode was used to verify:

- product identity;
- governance awareness;
- repository-document awareness;
- route awareness;
- brand/UX understanding;
- refusal of unauthorized full-ERP expansion;
- repository-first context hierarchy;
- Bootstrap implementation boundaries.

This gave Mission Control a Go/No-Go signal without generating code.

**CURRENT — STILL VALID**

Plan Mode should be used for context calibration, capability discovery, platform-behavior questions, and ambiguity surfacing. It must not be used to smuggle implementation architecture or scope changes around the approved mission process.

### 1.5 Preview success is not production proof

**MISTAKE / FAILURE MODE** → **CORRECTION / LESSON**

The Lab repeatedly had to distinguish:

- editor state;
- Lovable preview state;
- published Lovable state;
- custom-domain production state;
- backend binding;
- runtime behavior.

In early governed builds, the Founder could see changes in Lovable while `smartbusiness.teamlips.com` still served the previous published version. Runtime verification on the custom domain therefore required an explicit publish step. Later builder/runtime work reinforced the same lesson when a parser path succeeded in development and timed out in published runtime.

> Preview success is not production proof.

Any experiment or verification that ran only in preview must be labeled `PREVIEW ONLY` or equivalent.

### 1.6 Publish is an operational action, not an automatic consequence of implementation

**CURRENT — STILL VALID**

Phase 1 established a clean separation:

- implementation can complete without publication;
- publication may be required to make Founder/runtime verification possible;
- publication does not itself mean acceptance;
- Mission Control acceptance occurs after the relevant verification chain.

The Lab learned to phrase this clearly: publish for verification when authorized, but do not equate publication with final production approval or mission closure.

**CORRECTION / LESSON**

Earlier wording such as “do not publish” became ambiguous when Founder runtime verification depended on the production domain receiving the new build. The corrected discipline is to name the action precisely: `publish for verification`, `production cutover`, `accept mission`, and `close mission` are separate states.

### 1.7 Unpublish is not delete; retirement can preserve evidence without preserving authority

**CURRENT — STILL VALID**

The historical Lovable project `64c2b9b1-2461-4045-9acc-19e2658b8ca2` was preserved, renamed `Legacy Workspace-old`, and unpublished. It was not deleted. The current/production Lovable project `f3e992ec-06df-4d49-b157-b92ec064c078` became the production-authoritative Lovable project.

The durable lesson is:

> Unpublish is not delete. Delete is not required for retirement. Preservation can coexist with loss of authority.

The legacy project remains useful evidence. Its continued existence does not authorize use.

**CURRENT — STILL VALID**

Stable project ID outranks display-name drift. Future operators must verify project identity before any publish, rename, backend change, recovery action, or comparison.

### 1.8 The legacy/current project transition must be recorded without invented causation

**CURRENT — STILL VALID**

Evidence supports the following durable continuity:

- legacy project: `64c2b9b1-2461-4045-9acc-19e2658b8ca2`;
- current/production project: `f3e992ec-06df-4d49-b157-b92ec064c078`;
- legacy renamed `Legacy Workspace-old`;
- legacy unpublished;
- legacy preserved rather than deleted;
- current project became production-authoritative;
- current project ID governs over display-name drift.

**CORRECTION / LESSON**

Do not invent a deeper reason for why the old project ceased to be authoritative unless evidence explicitly proves it. What matters operationally is that authority moved, the old path was retired/unpublished, and the current project was verified in the production chain.

### 1.9 Lovable “Review Security” is useful as one platform signal, never as independent security acceptance

**CAPABILITY PROVEN**

The Lab used or inspected Lovable’s pre-publish `Review Security` surface. It is useful because it can surface platform-level concerns before publication.

**CURRENT — STILL VALID**

Its limits are equally important:

- it is not an independent Security & Permissions Architecture review;
- it does not replace RLS/grant/IAM inspection;
- it does not prove denied behavior;
- it does not prove runtime tenant isolation;
- it does not replace repository evidence or post-deployment verification;
- it must not be upgraded retrospectively into formal security acceptance.

Treat it as one signal in a larger evidence chain.

### 1.10 Lovable Cloud evidence must use the strongest evidence actually available, not fabricated dashboard screenshots

**CORRECTION / LESSON**

During SB-P-1.9 deployment verification, the desired evidence plan initially asked for Supabase-dashboard screenshots. The Lovable Cloud-managed project did not expose a Supabase dashboard to the Lab. Lovable correctly stopped rather than fabricating screenshots or pretending access.

The evidence standard was adapted to authoritative Lovable Cloud Data API / Postgres catalog outputs covering migrations, schema, `pg_proc`, RLS, policies, grants, constraints and indexes, while browser screenshots remained the evidence for public/runtime surfaces.

Durable rule:

> Use the highest-authority evidence the platform actually exposes. Never fabricate evidence to satisfy a preferred format.

This is an evidence-format adaptation, not a reduction in verification rigor.

### 1.11 Operational responsibility should follow observability

**CORRECTION / LESSON**

A recurring Lab mistake was asking Lovable to report evidence it could not reliably observe, especially Git branch/HEAD/sync metadata. The improved pattern separated responsibilities:

- Lovable reports build output and platform-observable behavior;
- Founder/GitHub collects repository commit/tree/branch evidence;
- browser testing collects published runtime evidence;
- Supabase/security specialists verify backend/security evidence where appropriate.

This reduced inferred claims and strengthened evidence integrity.

> Each participant should report only evidence it can directly observe.

### 1.12 Governed build execution is stronger when the build prompt stands alone

**CAPABILITY PROVEN**

The Lab converged on a repeatable implementation pattern:

1. Mission Control approves the repository documents;
2. one approved Lovable build prompt becomes the implementation specification;
3. Lovable receives a concise authorization wrapper plus that prompt/path;
4. implementation executes without extra hints;
5. verification is handled in separately governed phases;
6. Founder/runtime evidence is collected before mission acceptance.

This pattern reduced prompt drift and made it easier to determine whether an implementation matched the actual approved artifact.

### 1.13 Build completion summaries are claims until independently verified

**CORRECTION / LESSON**

Lovable build summaries were useful and often detailed, but the Lab learned not to treat them as evidence of acceptance. Examples included authentication foundation work, transaction correction, forgot-password behavior and database objects. The correct response was to inspect the repository, deployment/backend evidence, published runtime, and Founder-authenticated behavior separately.

A completion report itself also required scrutiny. SB-P-1.9 exposed administrative report errors such as premature `Mission Control` language, stale `HEAD` claims, inconsistent status fields, and missing required closing text. These were documentation defects, not implementation defects, but they demonstrated why reports must be verified against the repository rather than accepted from chat summaries.

### 1.14 Verification must be staged: deployment/backend first, anonymous runtime second, Founder-authenticated runtime last

**CAPABILITY PROVEN**

The strongest recurring Phase 1 verification shape became:

- repository/document verification;
- deployment/backend verification (Phase 3C-style evidence);
- anonymous/public runtime verification (Phase 4-style evidence);
- Founder-assisted authenticated verification (Phase 4A-style evidence);
- Mission Control acceptance.

The Lab used this pattern to verify authentication, protected routes, session persistence, transaction timestamps, transaction correction, confirmation-dialog behavior, and password recovery without collapsing all proof into one step.

**CORRECTION / LESSON**

A green typecheck or build is not runtime proof. An anonymous browser run is not owner-workflow proof. Founder-assisted testing is valuable but should be reserved for checks that actually require a real authenticated owner.

### 1.15 Founder-assisted runtime verification is high-value but should not become routine regression labor

**CAPABILITY PROVEN**

Founder-assisted testing closed gaps that automation could not, including authenticated route/session checks, owner transaction correction, confirmation/cancel behavior, session restoration and cross-business observations in other Phase 1 verification.

**RECOMMENDATION — NOT YET ADOPTED**

Create governed non-production verification identities and automation so the Founder is not repeatedly required to click through mechanical regression checks. Founder attention should remain focused on product judgement, merchant experience and high-consequence acceptance.

### 1.16 Missing requirements can be a documentation failure rather than an implementation failure

**CORRECTION / LESSON**

During SB-P-1.9 Founder verification, the Founder expected a correction confirmation dialog (“This correction will be reported to owner…”). The canonical scope, engineering contract and original build prompt did not contain that requirement, so Lovable had not violated the approved build specification. The omission was in requirements transfer.

The requirement was then formalized in an approved Phase 4A supplemental build prompt and implemented under the same SB-P-1.9 history.

Durable rule:

> Before calling a builder wrong, inspect the approved artifact. A missing behavior may indicate that an approved Founder decision never reached the canonical specification.

### 1.17 Small documentation inconsistencies can corrupt institutional truth if not corrected before closure

**MISTAKE / FAILURE MODE** → **CORRECTION / LESSON**

SB-P-1.9’s completion report required multiple administrative corrections: header status, creator/reviewer fields, premature acceptance language, stale commit/HEAD wording, closing text, and later stale `VERIFIED` values after Mission Control acceptance.

This did not invalidate the feature, but it demonstrated that historical records can become internally contradictory unless mission closure synchronizes every status-bearing section.

Future completion reports should use a machine-checkable status vocabulary and avoid volatile `HEAD` references unless generated automatically.

### 1.18 The Opening Stock / inventory-import experiment was useful engineering, not canonical completion

**CURRENT — STILL VALID**

The active Lovable project contains an Opening Stock bulk-import implementation that was intentionally preserved as engineering evidence. Formal canonical/Lovable reconciliation concluded:

`RECONCILED — DO NOT PROMOTE AS-IS`

The experiment contained useful patterns:

- upload → parse → preview/classify → merchant review/skip → explicit confirm → commit → per-row outcome;
- no writes during preview;
- reuse of `create_inventory_movement` for stock writes;
- live eligibility revalidation;
- caller-scoped Supabase access;
- deterministic idempotency concepts;
- per-row failure handling.

But it was not safe for wholesale promotion because of stale surrounding state, confirmation-binding weakness, mature UDI convergence requirements and later permission-model expectations.

**CORRECTION / LESSON**

Do not describe rejected direct promotion as wasted work. Preserve the capability and lessons; evolve the mechanism.

### 1.19 Confirmation binding and identity integrity are architectural lessons, not import-specific details

**CAPABILITY PROVEN**

The Opening Stock/import work exposed a deeper issue: revalidating eligibility at commit time is not enough if the commit can resolve to a different product than the merchant previewed.

Future consequential preview/confirm flows must bind confirmation to the exact actor, action, object and relevant state while still revalidating live authority/eligibility at execution.

This matters beyond imports. It applies to delegated actions, product linking, financial changes, inventory movements and any workflow where state may change between preview and commit.

### 1.20 Product identity, Inventory state and Transactions must not be collapsed into one model

**CORRECTION / LESSON**

Lab experiments and later reconciliation helped surface the distinction now preserved in current direction:

- Product & Price Master owns reusable product/commercial identity;
- Inventory owns quantity/state;
- Transactions are events.

A useful import flow can cross these domains, but should not turn one domain into the owner of the others.

### 1.21 UDI must be the shared import/document intelligence foundation

**CURRENT — STILL VALID**

The standalone historical inventory-import parser should not become a second permanent document/intelligence architecture.

Current direction is convergence through Universal Document Intelligence:

- Excel/CSV/PDF/photo/handwritten/voice/document inputs share interpretation foundations;
- domain workflows reuse preview → clarify/confirm → commit patterns;
- Opening Stock/Product import reuses shared intelligence rather than duplicating it.

> Preserve the useful capability; evolve the mechanism into the approved shared architecture.

No UDI implementation is authorized by this retrospective.

### 1.22 A useful experiment can still be unsafe to promote if its surrounding snapshot is stale

**MISTAKE / FAILURE MODE**

Lovable projects can preserve old routes, generated files, dependency versions, backend references, and files that no longer match canonical `main`. A visually successful feature may therefore sit on an obsolete substrate.

**CORRECTION / LESSON**

Future reuse must be a narrow rebase:

1. identify the useful capability;
2. compare against latest canonical;
3. extract only valid behavior/engineering;
4. rebase onto current architecture;
5. run current tests;
6. independently verify.

Reject whole-project reverse synchronization, whole-folder promotion, and “builder is newer, therefore canonical should be replaced.”

### 1.23 Generated-file and dependency drift are real builder-integrity risks

**CAPABILITY PROVEN**

Phase 1 evidence includes generated-file drift (`routeTree.gen.ts`), CRLF/byte-fidelity issues during transfer, and package operations that unexpectedly changed unrelated pinned versions.

The Lab lesson is broader than the specific incidents: platform-generated state and package managers are active mutation sources. After any builder/package/generated-file event, compare exact diffs rather than trusting intent.

### 1.24 Temporary diagnostics must have an explicit removal condition

**CAPABILITY PROVEN**

The project proved a safer diagnostic pattern: hidden/token-gated, synthetic, non-persistent runtime probes that answer a narrow question and are deleted once the question is answered.

**CURRENT — STILL VALID**

Every experimental route/probe should be born with:

- purpose;
- environment;
- access condition;
- data-write rule;
- removal condition;
- owner;
- expiry or closure event.

Temporary surfaces that outlive their experiment become unowned attack surface and drift.

### 1.25 Experiments become dangerous when lifecycle state is implicit

**CURRENT — STILL VALID**

Explicit labels materially reduce accidental promotion. Useful labels include:

- `EXPERIMENTAL`;
- `PREVIEW ONLY`;
- `BUILDER-SIDE ONLY`;
- `NOT CANONICAL`;
- `RECONCILED`;
- `DO NOT PROMOTE AS-IS`;
- `HISTORICAL`;
- `SUPERSEDED`;
- `CURRENT OBSERVATION ONLY`.

> Experiments become dangerous when their lifecycle status is implicit.

### 1.26 Lab-to-Builder and Lab-to-Mission-Control handoffs must be explicit

**CURRENT — STILL VALID**

A safe Lab-to-Builder handoff should identify:

- exact Lovable project ID;
- exact files;
- canonical base commit;
- experimental status;
- backend binding;
- preview/published state;
- known limitations;
- what can be reused;
- what must not be reused;
- recommendation: preserve / rebase / reject / investigate.

A safe Lab-to-Mission-Control handoff should report evidence, observed behavior, experiment status, unresolved risk and recommendation — without converting the recommendation into authority.

Mission Control decides whether an experiment becomes Build Now, Build Later, Add-on, Separate Product, Reject, or preserve-as-learning only.

---

## 2. Capabilities Acquired

### 2.1 Experimental diagnosis capability

**CAPABILITY PROVEN**

Lovable Lab can now distinguish and diagnose:

- Plan/Discuss context failure versus implementation failure;
- editor state versus preview state;
- preview versus published runtime;
- published Lovable runtime versus custom-domain production;
- repository state versus builder state;
- current versus legacy Lovable project;
- backend-binding mismatch;
- platform limitation versus product defect;
- documentation omission versus implementation defect;
- anonymous-runtime proof versus authenticated-owner proof.

### 2.2 Recovery capability

**CAPABILITY PROVEN**

Team LIPS has proven recovery practices for:

- identifying the production-authoritative Lovable project;
- preserving and unpublishing a legacy project without deleting evidence;
- verifying production after legacy retirement;
- separating canonical and delivery repository concerns;
- reconciling builder/canonical drift without wholesale reverse sync;
- recording stable implementation commits separately from volatile report/HEAD commits;
- correcting institutional records without rewriting implementation evidence.

### 2.3 Import/document experimentation capability

**CAPABILITY PROVEN — NON-CANONICAL / REUSABLE ENGINEERING EVIDENCE**

The Lab/Builder ecosystem has proven useful engineering around:

- CSV/XLSX Opening Stock intake;
- preview-before-write UX;
- row classification;
- eligibility revalidation;
- deterministic idempotency concepts;
- per-row outcome handling;
- confirmation-binding risk discovery;
- Product↔Inventory identity mismatch discovery;
- parser/isolation/runtime divergence discovery.

These are not current canonical Opening Stock completion.

### 2.4 Builder-integrity capability

**CAPABILITY PROVEN**

Team LIPS can now identify and reason about:

- stale snapshots;
- generated-file drift;
- dependency drift;
- line-ending/byte-fidelity drift;
- backend reference drift;
- project/repository mismatch;
- canonical↔builder divergence in both directions.

### 2.5 Governed verification capability

**CAPABILITY PROVEN**

The Lab helped establish a reusable evidence chain:

- Plan Mode calibration;
- governed Build Mode execution;
- build-output capture;
- repository verification;
- platform/backend deployment verification;
- public/anonymous runtime verification;
- Founder-assisted authenticated verification;
- completion-report reconciliation;
- Mission Control acceptance.

### 2.6 Governance-aware experimentation capability

**CAPABILITY PROVEN**

The Lab can safely report `DO NOT PROMOTE AS-IS`, preserve useful failures, distinguish recommendation from authority, and stop before publication/promotion when authority is absent.

**Not acquired:** mature UDI, Product & Price Master completion, WhatsApp integration, full role/permission maturity, or any other future capability merely because experiments or plans exist.

---

## 3. Tools We Have

### 3A. Tools / Systems Actually Used or Proven by Lovable Lab

| Tool / system | Actual use / capability proven | Limitation / authority boundary |
|---|---|---|
| Lovable Plan / Discuss Mode | AI-context calibration, repository-awareness checks, platform questions, pre-build scope verification | Must remain non-mutating; does not authorize architecture or implementation |
| Lovable Build Mode | Governed execution of approved build prompts | Build output is builder-attested until independently verified |
| Lovable Project Knowledge / Workspace Knowledge | Persistent organization/project context and behavior constraints | Must not replace canonical repository contracts or current Product Truth |
| Lovable project metadata / project identity | Distinguish legacy and current projects; verify authoritative project ID | Display names can drift; project ID is stronger identity evidence |
| Lovable preview | Fast UI/route inspection and implementation feedback | Preview success is not published/production proof |
| Lovable publish/unpublish controls | Publish for governed runtime verification; retire obsolete legacy project without deletion | Operational action requiring explicit authority |
| Lovable `Review Security` surface | Pre-publish platform signal | Not formal independent security acceptance; cannot replace RLS/IAM/runtime checks |
| Lovable Cloud backend/Data API evidence | Read-only backend verification where no Supabase dashboard is exposed | Evidence format differs from Supabase dashboard; must document platform constraint |
| GitHub canonical repository | Canonical implementation/history, approved prompts, completion reports, evidence | Repository state alone does not prove deployment/runtime |
| Delivery repository history (`starter-supab-shell`) | Production delivery continuity evidence | Not canonical authority; do not reverse-sync wholesale |
| Supabase/Postgres evidence | RLS/policy/function/schema verification through appropriate evidence path | Lab must not mutate schema without specific authority; current production topology belongs to Supabase Backend Architecture |
| Browser/manual runtime testing | Public route, auth redirect, custom-domain and Founder-assisted verification | Must label anonymous vs authenticated coverage; screenshots alone do not prove backend integrity |
| Headless/automated browser testing | Anonymous/public runtime sweep and regression evidence | Cannot prove owner-only flows without governed authenticated identity |
| Screenshots + evidence manifests | Durable visual/runtime evidence and Founder-assisted observations | Must include environment/context; screenshots can become stale |
| Repository diff/file inspection | Detect stale snapshots, generated-file drift and implementation/report inconsistencies | Diff does not establish runtime behavior |
| Dependency/package inspection | Detect unrequested version drift | Package-manager success does not imply approved dependency change |
| Temporary diagnostic routes/probes | Narrow runtime diagnosis where explicitly authorized | Must be non-persistent where possible and deleted at mission closure |

### 3B. Approved / Planned Providers or Integrations

Do not classify the following as current Lovable Lab capabilities merely because they are approved directions:

- Universal Document Intelligence — future shared import/document intelligence;
- Product & Price Master — current approved product direction, not completed by Lab;
- Meta WhatsApp Cloud API — future channel integration;
- OpenAI shared intelligence foundation — future governed integration;
- Cloudflare R2 durable media — future approved infrastructure direction;
- Voice — future shared conversation modality.

---

## 4. Suggested Tools to Have

### 4.1 Experiment manifest template

`BUILD/ADOPT NOW` — **RECOMMENDATION — NOT YET ADOPTED**

Every experiment should record project ID, canonical base commit, repo/delivery repo, backend ref, environment, publish state, date, purpose, owner, expiration/removal condition and final disposition.

**Problem solved:** floating experiments lose context and become accidental authority.  
**Risk:** low; documentation/process only.

### 4.2 Lovable project identity verifier

`BUILD/ADOPT NOW` — **RECOMMENDATION — NOT YET ADOPTED**

Read-only check that reports project ID, display name, repository binding, backend binding and publish/custom-domain state before any Lab action.

**Problem solved:** legacy/current project confusion and display-name drift.  
**Risk:** must never auto-switch or mutate projects.

### 4.3 Canonical-versus-builder drift scanner

`BUILD/ADOPT NOW` — **RECOMMENDATION — NOT YET ADOPTED**

Read-only file/diff scanner between current canonical `main` and builder state.

**Problem solved:** two-direction drift, stale generated files, missing canonical files, builder-only WIP.  
**Risk:** report only; never auto-sync.

### 4.4 Preview-vs-production verification checklist

`BUILD/ADOPT NOW` — **RECOMMENDATION — NOT YET ADOPTED**

Standard checklist covering editor, preview, published Lovable URL, custom domain, backend identity and observable runtime differences.

**Problem solved:** “works in preview” becoming false production proof.  
**Risk:** low.

### 4.5 Backend binding verifier

`BUILD/ADOPT NOW` — **RECOMMENDATION — NOT YET ADOPTED**

Read-only comparison of Lovable project configuration, delivery config and canonical expected backend identity.

**Problem solved:** stale backend references and environment mismatch.  
**Risk:** must avoid exposing secrets; verify identifiers only.

### 4.6 Dependency/generated-file drift detector

`BUILD/ADOPT NOW` — **RECOMMENDATION — NOT YET ADOPTED**

Automated report for unexpected package changes and generated-file diffs after builder/package operations.

**Problem solved:** hidden platform mutations.  
**Risk:** report only.

### 4.7 Experiment expiry/removal tracker

`BUILD/ADOPT LATER` — **RECOMMENDATION — NOT YET ADOPTED**

Tracks temporary routes/probes and blocks closure if removal evidence is missing.

**Problem solved:** orphaned diagnostic attack surface.  
**Risk:** governance/process integration required.

### 4.8 Governed non-production verification identities

`BUILD/ADOPT LATER` — **RECOMMENDATION — NOT YET ADOPTED**

Security-owned test identities for authenticated automated regression in non-production environments.

**Problem solved:** repeated Founder involvement in mechanical verification.  
**Risk:** real principals; must be narrowly scoped, revocable, separated from production data and independently reviewed.

### 4.9 Structured preserve / rebase / reject decision record

`BUILD/ADOPT NOW` — **RECOMMENDATION — NOT YET ADOPTED**

A small template for every concluded experiment.

**Problem solved:** “interesting WIP” remaining indefinitely ambiguous.  
**Risk:** low.

---

## 5. Suggestions to Improve This Project

1. **Require an experiment identity header before any Lab work.** Project ID, canonical base SHA, backend ref, environment, publish state and purpose should be mandatory.
2. **Require explicit disposition at experiment end.** Every experiment ends as `preserve`, `narrow rebase`, `reject`, `investigate`, or `historical only`.
3. **Never leave a builder experiment floating without owner/status.** Unowned experiments are future drift.
4. **Automate canonical↔builder drift reporting.** This is one of the highest-value low-risk tools Team LIPS can add now.
5. **Separate diagnosis from implementation in mission text.** A diagnostic mission should not contain implementation escape hatches.
6. **Use one approved build prompt as the implementation specification.** Keep verification prompts separate.
7. **Standardize deployment evidence equivalence.** When a managed platform lacks a preferred dashboard, define accepted authoritative substitutes instead of improvising per mission.
8. **Make publish state explicit in every completion report.** `not published`, `published for verification`, `production cutover`, and `accepted` should be different fields.
9. **Record current and historical project IDs in a durable continuity file.** Do not rely on screenshots or room memory.
10. **Use narrow rebase, never whole-project reverse sync.** Builder code may be newer in one area and stale in another.
11. **Preserve failed experiments with lessons and evidence.** Failure that changes architecture or verification discipline is institutional value.
12. **Prefer exact file/commit handoffs over screenshots alone.** Screenshots are evidence of state, not reusable engineering artifacts.
13. **Create machine-checkable completion-report status fields.** Reduce repeated manual correction of `PENDING REVIEW` / `VERIFIED` / `COMPLETED` inconsistencies.
14. **Reduce Founder involvement in mechanical regression.** Automate safe non-production verification while preserving Founder authority for judgement.
15. **Make retirement evidence durable.** A legacy project should carry a clear historical/retired marker and current authoritative successor reference.
16. **Keep UDI, permissions, Business Memory and domain rules shared.** Lab experiments must not create permanent parallel engines simply because the experiment is convenient.

---

## 6. What Future Rooms Must Know Before Touching This Area

Before touching Lovable/Lab state, verify all of the following:

- [ ] Canonical repository is `SmartBusinessv1/smart-business`.
- [ ] Read latest merged `main`, not an old chat or screenshot.
- [ ] Identify the exact Lovable project by project ID, not display name alone.
- [ ] Legacy project `64c2b9b1-2461-4045-9acc-19e2658b8ca2` is historical/preserved/unpublished and not current authority.
- [ ] Current production-authoritative project is `f3e992ec-06df-4d49-b157-b92ec064c078`, subject to re-verification at the time of action.
- [ ] Verify repository/delivery/backend binding before mutation.
- [ ] State whether you are in Plan/Discuss, Build, Preview, Published or custom-domain production context.
- [ ] Do not infer production from preview.
- [ ] Do not treat Lovable `Review Security` as formal security acceptance.
- [ ] If Supabase dashboard is unavailable in Lovable Cloud, use approved authoritative backend evidence rather than fabricated screenshots.
- [ ] Check canonical↔builder drift before reusing any builder code.
- [ ] Opening Stock/import builder code is `RECONCILED — DO NOT PROMOTE AS-IS`.
- [ ] Product & Price Master owns reusable product/commercial identity; Inventory owns quantity/state; Transactions are events.
- [ ] Future document/import intelligence converges through UDI.
- [ ] Confirmation must bind to the exact object/action/state the merchant approved and be revalidated at execution.
- [ ] Publishing/unpublishing/renaming/deleting projects requires explicit operational authority.
- [ ] Every experiment needs an explicit end-state/disposition.
- [ ] Mission Control, not Lovable Lab, decides promotion/acceptance.

---

## 7. Do-Not-Repeat Register

- **Do not use the legacy project because it still exists.** Existence is not authority.
- **Do not publish an experiment without explicit authority.**
- **Do not unpublish/rename/delete a project as part of ordinary diagnosis.**
- **Do not treat Lovable `Review Security` as formal security acceptance.**
- **Do not assume preview equals production.**
- **Do not claim repository merge equals deployment.**
- **Do not claim deployment equals runtime correctness.**
- **Do not ask Lovable to report Git metadata it cannot observe.**
- **Do not fabricate screenshots/evidence from unavailable managed-platform dashboards.**
- **Do not accept builder completion summaries as independent verification.**
- **Do not promote stale builder snapshots wholesale.**
- **Do not reverse-sync a whole Lovable project into canonical.**
- **Do not copy whole folders simply because one experiment worked.**
- **Do not preserve an obsolete mechanism merely because it once worked.** Preserve the capability, not the drift.
- **Do not discard useful failure evidence because the code was not shipped.**
- **Do not create a second UDI/import architecture.**
- **Do not trust historical backend refs without current verification.**
- **Do not ignore dependency drift after a package operation.**
- **Do not ignore generated-file drift.**
- **Do not leave temporary diagnostic routes deployed.**
- **Do not silently reinterpret a missing requirement as a builder defect before checking the approved artifact.**
- **Do not let stale `VERIFIED`, `PENDING REVIEW`, or `HEAD` text survive final mission closure.**
- **Do not let employee/staff access inherit Owner financial intelligence by convenience.**
- **Do not convert a Lab recommendation into mission authority.**
- **Do not self-approve experimental work.**

---

## 8. Current Truth vs Historical Truth

| Area | Historical state | Current truth | Useful capability to preserve | Assumption that must not return |
|---|---|---|---|---|
| Lovable project | Legacy project `64c2b9b1-2461-4045-9acc-19e2658b8ca2` was once the working project | Legacy renamed `Legacy Workspace-old`, unpublished and historical; current project `f3e992ec-06df-4d49-b157-b92ec064c078` is production-authoritative, subject to current re-verification | Historical evidence and lessons from old project | “It still exists, therefore it is active” |
| Publish state | Builder/preview changes could appear complete before publish | Published/custom-domain state must be explicitly verified | Fast preview feedback | “Preview success means production updated” |
| Security review | Lovable platform security check could look like a security gate | It is one platform signal only; independent security/RLS/IAM/runtime verification remains separate | Pre-publish issue signal | “Review Security = security acceptance” |
| Repository authority | Builder/delivery repository could appear freshest | Canonical `SmartBusinessv1/smart-business` remains implementation/history authority | Delivery compatibility and builder experimentation | “Builder is newer, so canonical should be replaced” |
| Opening Stock import | Builder implementation appeared feature-complete enough to be tempting to promote | `RECONCILED — DO NOT PROMOTE AS-IS`; canonical Opening Stock import not complete | Preview/confirm UX, eligibility revalidation, movement/idempotency concepts | “Working builder import = canonical completion” |
| Import architecture | Standalone inventory-import parser was reasonable in its original stage | Future import/document intelligence converges through UDI | Parser utilities where compatible | “Each domain needs its own permanent import brain” |
| Confirmation | Commit-time re-resolution/revalidation looked sufficient | Confirmation must remain bound to exact merchant-confirmed target/action/state while revalidating live authority | Revalidation + exact binding | “Any currently matching object may replace the previewed one” |
| Product/Inventory identity | Earlier builder work mixed product matching and inventory eligibility | Product & Price Master owns product/commercial identity; Inventory owns quantity/state; Transactions are events | Product→Inventory linkage lessons | “Inventory owns all product identity” |
| Evidence format | Preferred dashboard screenshot could be treated as required evidence | Use highest-authority evidence actually available; document substitutions | Data API/catalog evidence discipline | “No dashboard screenshot means no possible verification” |
| Verification | Build/typecheck or anonymous runtime could feel sufficient | Deployment/backend + anonymous runtime + authenticated Founder/independent verification are distinct gates | Layered verification | “Green build = feature accepted” |
| Completion reports | Chat summary/report text could be trusted after generation | Repository report must be reconciled with actual mission state and acceptance | Durable mission history | “Generated completion report is automatically canonical truth” |
| Whole-project sync | Reverse synchronization could look efficient | Narrow rebase onto latest canonical is the approved reuse pattern | Reusable isolated capability | “Copy the project/folder wholesale” |
| Backend refs | Historical refs remained in old evidence | Current environment identity must be verified from current configuration/provider evidence | Historical provenance | “Old ref is still current because it appears in a report” |

---

## 9. Evidence Pointers

Durable evidence and corroborating records reviewed or relevant to Lovable Lab continuity include:

- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/00_Mission_Control_Institutional_Learning_Capture_Protocol.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/01_Mission_Control_Retrospective_Dispatch_Pack.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/lovable-builder/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/infrastructure-operations/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/security-permissions/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/supabase-backend/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/claude-engineering/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/founder-room/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/final-reconciliation/06_Canonical_Lovable_Opening_Stock_Inventory_Import_Reconciliation.md`
- `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`
- `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md`
- `docs/implementation/SB-P-1.9/phase-3c-deployment-verification.md`
- `docs/implementation/SB-P-1.9/phase-4-runtime-verification.md`
- `docs/implementation/SB-P-1.9/completion-report.md`
- `docs/implementation/SB-P-1.9/lovable-build-prompt-phase-4a.md`
- production/cutover records under `communication/missions/` for `SB-OPS-PROD-SYNC-1.0` where retained;
- historical Lovable screenshots and Founder runtime observations preserved in mission evidence where durable.

Known project identities to preserve in future evidence:

- legacy Lovable project: `64c2b9b1-2461-4045-9acc-19e2658b8ca2` — historical/preserved/unpublished;
- current/production Lovable project: `f3e992ec-06df-4d49-b157-b92ec064c078` — current production-authoritative project at the time of this review, subject to re-verification before future mutation.

Current production-chain references should be read from the latest merged Infrastructure/Supabase records rather than copied from old Lab notes.

---

## 10. Open Questions / Residual Risks

### 10.1 Canonical↔builder drift remains a recurring operational risk

**UNRESOLVED / NEEDS MISSION CONTROL OR FUTURE TOOLING DECISION**  
**Owner:** Lovable Lab + Lovable Builder + Infrastructure Operations

There is no fully automated read-only drift alarm that continuously reports canonical-versus-builder divergence in both directions.

### 10.2 Legacy-project accidental revival remains possible if project identity is not checked

**CURRENT RISK**  
**Owner:** Lovable Lab + Infrastructure Operations

The legacy project is preserved, which is valuable for evidence, but preservation means it remains visible. Future operators must verify project ID and publish state before action.

### 10.3 Founder verification remains overused for mechanical authenticated checks

**UNRESOLVED / NEEDS SECURITY-OWNED TOOLING DECISION**  
**Owner:** Security & Permissions Architecture + Lovable Lab + Founder Accountability

Phase 1 proved Founder-assisted verification, but a governed non-production authenticated verification identity/tooling path is still needed to reduce Founder operational load.

### 10.4 Experiment manifests and expiry tracking are not yet standardized

**RECOMMENDATION — NOT YET ADOPTED**  
**Owner:** Lovable Lab + Mission Control

Without a standard manifest, future WIP can lose its base commit, backend identity, publish state, owner and disposition.

### 10.5 Temporary/probe cleanup remains partly procedural

**CURRENT RISK**  
**Owner:** Lovable Lab + Lovable Builder + Security & Permissions Architecture

The project has proven safe temporary-probe patterns, but no automated gate guarantees every experiment route is removed before closure.

### 10.6 Opening Stock reuse can regress architecture if UDI convergence is ignored

**CURRENT RISK**  
**Owner:** future authorized Product Mission + Claude Engineering + Lovable Builder

The builder code remains tempting because useful engineering already exists. Future work must use the reconciliation record and perform a narrow rebase onto current canonical/UDI/permission architecture.

### 10.7 Confirmation binding needs a reusable shared primitive

**UNRESOLVED / FUTURE ARCHITECTURAL WORK**  
**Owner:** future Product Mission + Security & Permissions Architecture + Claude Engineering

The Lab surfaced the requirement, but a universal server-verifiable confirmation-binding primitive for cross-domain preview/confirm flows is not yet claimed as mature current capability.

### 10.8 Evidence substitution rules should become explicit governance tooling

**RECOMMENDATION — NOT YET ADOPTED**  
**Owner:** Mission Control + Founder Accountability

The Lovable Cloud Data API substitution was correct, but future missions would benefit from a standard evidence-equivalence rule so platform constraints do not trigger ad-hoc negotiation.

### 10.9 Display-name inconsistency can still confuse human operators

**CURRENT RISK**  
**Owner:** Lovable Lab + Infrastructure Operations

Stable IDs should govern, but human interfaces still foreground display names. Durable handoff records should always pair name with project ID.

---

## Final Operating Principle

> Preserve useful engineering. Preserve useful failure. Preserve evidence. Do not preserve drift. A Lovable experiment earns reuse by surviving comparison with current canonical truth, current Product Truth, current environment identity, current security expectations, and independent verification — not merely because it once worked.
