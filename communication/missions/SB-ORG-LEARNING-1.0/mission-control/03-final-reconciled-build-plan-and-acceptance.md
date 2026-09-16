# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.0 — Final Reconciled Build Plan and Acceptance

**Mission ID:** `SB-ORG-LEARNING-1.0`  
**Mission name:** Smart Business Organizational Learning Engine  
**Document:** Final Reconciled Build Plan and Acceptance  
**Date:** 2026-09-16  
**Authority:** Smart Business Mission Control under Founder direction  
**Status:** `FINAL BUILD PLAN — ACCEPTED FOR FOUNDER MERGE`  
**Implementation authority:** `NONE`  
**Product Mission activation:** `NONE`; `SB-P-1.12` remains not activated  

---

## 1. Purpose of this record

This document reconciles:

1. the original Mission Control proposal;
2. Claude Code's engineering/repository review;
3. Mission Control's Stage 1 reconciliation;
4. Codex's independent assurance/adversarial review;
5. the Founder's stated objective that Smart Business continuously learns from completed missions in the background without turning learning into autonomous governance.

Where this document narrows, corrects, or supersedes the original proposal, this document controls the approved build-plan interpretation.

This acceptance approves the **plan** only. It does not authorize implementation.

---

## 2. Final Mission Control disposition

Codex's disposition `CHANGES REQUIRED BEFORE BUILD-PLAN ACCEPTANCE` is accepted as substantively correct.

The required design corrections are incorporated below.

Final disposition:

`BUILD PLAN ACCEPTED — FOUNDER MERGE READY — IMPLEMENTATION NOT AUTHORIZED`

PR `#583` may be merged by the Founder after the final proposal-head CI is green.

A later, separate implementation authorization is required before creating engine code, workflows, schemas, registries, provider integrations, or automated writers.

---

## 3. Constitutional boundary

The Organizational Learning Engine is an institutional learning capability, not an authority.

It may:

- collect approved evidence;
- preserve provenance;
- generate candidate lessons;
- identify recurring risks and patterns;
- prepare mission-learning reports;
- prepare relevant mission-start context packs;
- surface tool/resource/capability observations;
- track confidence, maturity, freshness, supersession, and unresolved conflict;
- recommend organizational improvements.

It may not automatically:

- change Product Truth;
- change governance;
- change roadmap order;
- reinterpret Founder decisions into new authority;
- approve or reject missions;
- mark implementation accepted;
- activate `SB-P-*` missions;
- self-promote learning into institutional authority;
- self-merge;
- deploy;
- alter production data, permissions, billing, authentication, RLS, IAM, legal policy, or customer state.

**Self-improving memory does not mean self-modifying governance.**

---

## 4. Final v1 architecture direction

The approved first implementation slice is repository-native and deliberately small.

Proposed root:

```text
organizational-learning/
├── README.md
├── schemas/
│   ├── learning-item.schema.ts
│   ├── mission-learning-report.schema.ts
│   ├── closure-envelope.schema.ts
│   └── receipt.schema.ts
├── sources/
│   └── allowlist.ts
├── registry/
│   ├── lessons/
│   └── risks/
├── reports/
│   └── missions/
├── receipts/
├── scripts/
│   ├── harvest.mjs
│   └── validate.mjs
└── tests/
```

Use Node.js ESM for deterministic scripts and Zod/runtime TypeScript schemas because these fit current repository conventions and avoid unnecessary new validation dependencies.

Dedicated registries for resources, skills, capabilities, tools, and decisions are **deferred**, not rejected. Their observations may be captured inside candidate lessons during the first slice and promoted to dedicated registries later only if usage proves that separation useful.

---

## 5. B1 correction — generated content and promotion authority

Generated candidate content and human-approved institutional state must use separate contracts.

### Candidate contract

AI-generated items must be structurally limited to:

- `maturity: CANDIDATE`;
- `authority_effect: NONE`;
- unreviewed state;
- no trusted `reviewed_by` value;
- no approval reference;
- no Founder-authority assertion;
- no accepted supersession edge;
- no risk-resolution status;
- no organization-wide approval claim.

Prohibited promotion fields must be rejected, not silently discarded.

### Promotion contract

Promotion must be a separate human-controlled write path.

- Mission Control may mark a lesson `CORROBORATED` or `VALIDATED` when evidence and scope justify it.
- `INSTITUTIONALISED` requires explicit human approval.
- For v1, organization-wide `INSTITUTIONALISED` status requires Founder approval.
- Every promotion must bind to the exact item revision, approving authority, decision artifact, approved scope, and evidence.
- Any material content change invalidates approval of the prior revision.
- A normal PR merge, actor-name string, model confidence score, or repository access does not create promotion authority.

If a proposed promotion conflicts with higher authority, it remains blocked pending reconciliation.

---

## 6. B2 correction — claim-level provenance and evidence reach

Provenance is not merely a file path.

Every reusable claim must carry enough information to answer: **what exact evidence supports this exact claim?**

Minimum claim-evidence reference:

```yaml
repository: SmartBusinessv1/smart-business
commit_sha: <pinned commit>
path: <repository path>
blob_sha: <git blob>
locator: <heading / line-span / stable excerpt reference>
actor_class: <founder | mission-control | builder | specialist | verifier | ci | operator | historical | synthesis>
observation_date: <date if known>
evidence_date: <date if known>
scope:
  mission_ids: []
  systems: []
  environments: []
relationship: SUPPORTS | CONTRADICTS | LIMITS
```

Rules:

- fabricated or unresolved evidence references fail validation;
- summaries citing the same underlying source do not count as independent corroboration;
- who reported a claim and who verified it remain separate;
- git authorship does not prove decision authority;
- evidence strength describes support for the individual claim, not the prestige of the file containing it;
- historical status and evidentiary strength remain different dimensions;
- a mission closure must not be generalized into deployment, production, security, or pilot claims unless those were actually proven.

---

## 7. B3 correction — source eligibility is not source authority

An allowlisted path means **eligible to inspect**, not automatically authoritative.

The initial harvester must operate from a mission-scoped, closure-linked manifest.

Preferred evidence order:

1. accepted closure/acceptance record;
2. evidence explicitly referenced by that closure;
3. durable mission decision and handover records required to understand the accepted state;
4. current governance loaded separately as authority context;
5. archived raw historical communication only when explicitly referenced and clearly classified as historical evidence.

Initial exclusions:

- `communication/live/**`;
- arbitrary remote URLs;
- arbitrary Markdown-link recursion;
- environment files;
- dirty worktree files;
- ignored local artifacts;
- symlinks;
- submodules;
- non-regular Git objects;
- path traversal / absolute / UNC / drive paths;
- ambiguous case aliases.

Read committed Git objects from a pinned commit.

Generated learning artifacts must not become primary evidence for proving their own claims.

---

## 8. B4 correction — freshness, contradiction, supersession, and retrieval

Mission-start context packs may not simply return every `ACTIVE` item matching a category.

An item is eligible for reusable guidance only when its state is appropriate for that view.

Retrieval must consider:

- maturity;
- reviewed/approved revision;
- scope match;
- current-authority compatibility;
- freshness / last-verified date;
- supersession state;
- unresolved contradiction state;
- known linked risks;
- source withdrawal, amendment, or mission reopening.

Candidate items may appear only in clearly labelled candidate/review views.

Known contradictions must be surfaced before ranking or truncation. If both sides cannot safely fit, emit an unresolved-conflict warning with references rather than silently dropping one side.

Supersession links must reject cycles and dangling references.

Tool/resource/capability observations must record, where available:

- exact identity/version;
- conditions under which observed;
- last verified date;
- evidence reference;
- known limitations;
- review/expiry trigger.

Tool intelligence remains advisory and never creates tool-adoption authority.

---

## 9. B5 correction — screening, isolation, and publication

All source content and generated output are untrusted until validated.

### Before extraction

The engine must:

- enumerate only approved source bytes;
- screen those bytes for secret/sensitive-data risk;
- enforce explicit customer/merchant/employee/private-data exclusions;
- quarantine ambiguous content without echoing raw values;
- fail closed if scanner execution is absent, fails, or returns unknown state.

A scanner failure is not a clean scan and not a `no material learning` result.

### Extraction isolation

The semantic extraction component must not hold:

- production credentials;
- cloud deployment identity;
- repository merge/approval authority;
- arbitrary command-execution authority;
- unrestricted network retrieval;
- direct governance-write authority.

Prompt instructions inside harvested evidence remain untrusted data.

### Before persistence/publication

Screen and validate:

- generated content;
- rendered Markdown;
- logs;
- filenames/metadata;
- complete proposed diff.

The publisher must reconstruct output using fixed contracts/templates, validate exact allowed output paths, recheck source revision, and reject unexpected changes.

Repository write capability, if later authorized, must be separately reviewed with least privilege and must never confer merge, approval, admin, bypass, deployment, or production authority.

### Historical gitleaks evidence

The final accepted wording is:

- historical scanner matches existed;
- merged repository-hygiene evidence classified the reviewed findings as non-credential-grade;
- the evidence does not establish a confirmed credential-grade secret leak;
- this does not prove the repository can never contain sensitive data;
- screening remains mandatory for durable, archived, and newly generated learning inputs/outputs.

---

## 10. B6 correction — authoritative closure envelope

The mature engine cannot infer authoritative mission closure from a merge, label, README phrase, or `PROCESSED` marker alone.

Before automatic background processing is enabled, define a small versioned **closure envelope**.

Minimum fields:

```yaml
schemaVersion: 1
mission_id: string
mission_class: string
closure_revision: string
final_disposition: string
accepted_scope: string
acceptance_refs: []
closure_refs: []
retained_followups: []
source_snapshot_ref: string
reopens: null | string
supersedes_closure: null | string
```

The containing canonical commit is resolved after merge and recorded in the processing receipt rather than requiring a file to predict its own final commit SHA.

Legacy missions use explicit reviewed mappings to existing closure/acceptance evidence; do not rewrite all historical missions automatically.

A mission reopening, amendment, or superseding closure must invalidate affected reusable guidance for reconciliation and create a new processing revision.

The closure envelope establishes **eligibility to learn**, not authority to change organizational practice.

---

## 11. B7 correction — processing identities, atomic publication, concurrency, and recovery

The implementation must distinguish at least these identities:

1. **source snapshot identity** — exact canonical source revision;
2. **processing-run identity** — one attempt to process that source revision;
3. **candidate artifact identity** — exact generated candidate revision;
4. **review/promotion identity** — exact human-approved revision;
5. **publication identity** — exact committed learning output.

A receipt must bind these identities without conflating them.

### Idempotency

The same authoritative source revision must not create duplicate candidate artifacts.

Use a deterministic source fingerprint based on sorted `path@blobSHA` pairs plus closure revision and schema version.

Unchanged input → deterministic no-op / already-processed result.

Changed authoritative closure revision → new processing revision.

### Concurrency

Initial proof stage may use simple single-process locking.

Later automation must enforce one active processing run per mission + closure revision and reject or safely supersede duplicate runs.

### Atomic publication

Do not partially publish:

- a report without its receipt;
- registry updates without the report that justified them;
- a promotion record against a different candidate revision;
- a context pack built from a mixed stale/new registry state.

Publication must either complete as one verified change set or fail without claiming success.

### Recovery

Persist enough non-sensitive state to distinguish:

- not started;
- harvested;
- screened;
- extraction attempted;
- validation failed;
- candidate ready;
- publication pending;
- published;
- superseded/reopened.

Retries must resume from verified durable state where safe rather than regenerate blindly.

A failed run must never be interpreted as `no material learning`.

---

## 12. Mission Learning Report — approved v1 contract

The v1 report is intentionally smaller than the original 23-section proposal.

Required sections:

1. mission identity and authoritative closure;
2. evidence/provenance manifest;
3. what worked and why;
4. what failed / near-misses / corrections;
5. candidate lessons and anti-patterns;
6. unresolved risks/follow-ups;
7. tool/resource/capability observations;
8. confidence, evidence strength, maturity, freshness, and explicit `no material reusable learning` statement when applicable.

The report may include Founder decisions only by reference and exact evidence reach; it must not reinterpret them into new authority.

---

## 13. Mission-start context pack — approved v1 contract

The first version uses deterministic filtering, not semantic ranking.

Inputs may include:

- mission class;
- systems touched;
- feature or architecture areas;
- environments;
- known integrations;
- tools involved;
- related mission IDs.

Output should contain only reusable items whose reviewed state and scope permit reuse, plus:

- unresolved risks;
- known contradictions;
- superseded anti-patterns worth avoiding;
- provenance links;
- freshness/last-verified dates;
- explicit statement: **context, not authority**.

---

## 14. Proof-stage build sequence

If implementation is later authorized, the first build should proceed in this order.

### Phase A — contracts and security boundaries

Build:

- candidate schema;
- promotion/review schema;
- closure-envelope schema;
- processing receipt schema;
- source allowlist;
- path-normalization and committed-object reader;
- claim-level provenance contract;
- screening/quarantine contract;
- tests for prohibited fields and unsafe paths.

No AI call and no background workflow yet.

### Phase B — deterministic local harvester

Build a Node.js ESM CLI that:

- accepts an explicitly approved closure envelope;
- verifies canonical/pinned source state;
- enumerates approved evidence;
- computes blob-based manifest identity;
- screens input;
- emits a deterministic evidence manifest/receipt skeleton;
- performs no registry promotion and no autonomous repository write.

Run first against one already-closed mission with strong evidence.

Recommended proof target: `SB-OPS-CI-ARCHITECTURE-1.0`.

### Phase C — supervised semantic extraction

Use an authorized AI mission session to draft candidate learning from the deterministic manifest.

Validate:

- candidate-only state;
- claim-level provenance;
- evidence reach;
- sensitive-data screening;
- schema validity;
- no governance/authority claims.

### Phase D — human review and promotion proof

Mission Control reviews candidate learning.

Founder approval is required before an item is marked organization-wide `INSTITUTIONALISED` in v1.

### Phase E — mission-start context-pack proof

Generate a deterministic context pack from reviewed learning and verify contradiction/freshness/supersession behavior.

Only after Phases A–E are accepted may automation wrappers be considered.

---

## 15. Background automation target

The Founder's long-term requirement remains mandatory:

**authoritative mission closure → automatic background candidate learning without repeated manual extraction.**

The approved migration path is:

```text
manual proof
  ↓
manual closure-envelope invocation
  ↓
automated deterministic harvesting
  ↓
isolated candidate extraction
  ↓
trusted validation/publication proposal
  ↓
human review/promotion
  ↓
background reconciliation for missed/reopened/superseded missions
```

Background automation must not depend on parsing arbitrary prose alone.

It begins only after the closure-envelope contract and proof-stage controls are accepted.

The mature system should support:

- automatic detection of newly eligible authoritative closures;
- automatic reconciliation of unprocessed closure revisions;
- deterministic harvesting;
- safe isolated candidate extraction;
- validated candidate-report generation;
- failure receipts and retries;
- no automatic promotion;
- no automatic merge;
- no governance rewrite.

---

## 16. Tool/resource/capability intelligence

The first slice captures these as candidate lesson categories.

Later, after demonstrated volume, Mission Control may authorize dedicated registries.

A curated tool-intelligence source registry may later track approved official sources for technologies used by Smart Business, such as GitHub/GitHub Actions, Supabase, Lovable, OpenAI-related tooling, Meta WhatsApp Cloud API, AWS, Cloudflare, and future approved systems.

Rules for later tool intelligence:

- official/primary sources preferred;
- bounded cadence;
- relevance to actual Smart Business systems required;
- no broad trend scraping;
- every observation records tool/version/date/source;
- proposed adoption remains advisory;
- new integration or credential enablement requires separate authority.

---

## 17. Build classification

### Build Now — first authorized implementation slice

- repository-native OLE root;
- Zod/runtime TypeScript contracts;
- candidate vs promotion separation;
- closure envelope;
- source allowlist;
- claim-level provenance;
- deterministic Node ESM harvester/validator;
- lessons + risks registries;
- simplified Mission Learning Report;
- processing receipts/idempotency;
- secret/sensitive-data screening boundary;
- freshness/supersession/known-contradiction rules;
- Fast Gate tests;
- one closed-mission proof;
- supervised candidate extraction proof;
- deterministic context-pack proof.

### Build Later

- automatic background closure detection/reconciliation;
- isolated automated model extraction;
- trusted publisher/PR creation path;
- dedicated tool/resource/skill/capability/decision registries;
- curated vendor/tool update monitoring;
- broader historical backfill;
- advanced contradiction detection;
- semantic retrieval/vector indexing only if scale proves deterministic filtering inadequate;
- longitudinal learning analytics.

### Add-on

- dashboards;
- visualizations;
- optional notifications/digests;
- organization-learning health metrics UI.

### Separate Product

Only if Team LIPS later chooses to commercialize a generalized learning-engine capability outside Smart Business.

### Reject

- self-modifying governance;
- automatic Product Truth or roadmap changes;
- automatic Founder-decision reinterpretation;
- automatic lesson promotion;
- self-approval;
- self-merge;
- automatic production/deployment changes;
- autonomous tool adoption;
- unrestricted web crawling;
- customer/merchant production-data harvesting;
- model-weight self-training;
- authority inferred from connector/tool access.

---

## 18. Mandatory adversarial test families

A later implementation mission must derive concrete tests for at least:

- candidate attempts to set trusted review/promotion fields;
- fabricated Founder/Mission-Control authority references;
- valid path but unsupported claim;
- duplicated evidence origin masquerading as corroboration;
- historical evidence presented as current authority;
- live/transient source ingestion attempt;
- traversal/absolute/UNC/case-confusion path attacks;
- symlink/submodule/non-regular object ingestion;
- prompt injection inside evidence;
- scanner unavailable/failure/unknown result;
- sensitive-data quarantine without raw-value echo;
- source revision changes between harvest and publish;
- duplicate/replayed processing runs;
- concurrent runs for same closure revision;
- partial report/receipt/registry publication;
- reopened mission after prior learning publication;
- supersession cycle/dangling edge;
- stale tool observation represented as current;
- unresolved contradiction hidden by context-size limit;
- generated learning used as primary evidence for itself;
- failed extraction misreported as `no material learning`;
- context pack including unreviewed candidate as established guidance;
- publisher attempting unauthorized path changes;
- automated writer holding merge/deploy/production authority.

---

## 19. Acceptance measures

The engine is successful only if evidence shows organizational improvement without authority drift.

Track at least:

- eligible mission coverage;
- learning-report generation coverage;
- provenance completeness;
- claim-reference validation failure rate;
- candidate acceptance/rejection rate;
- repeated-mistake recurrence;
- mission-start context usefulness;
- stale/superseded item detection rate;
- false-positive/noise rate;
- unresolved contradiction surfacing rate;
- processing retry/recovery success;
- average mission-close processing cost/time;
- time saved during mission context recovery;
- number of unauthorized promotion/authority attempts blocked.

Do not optimize acceptance rate by weakening review standards.

---

## 20. Founder decisions resolved by this plan

The current build plan does not require the Founder to choose between permanent manual processing and permanent CI-embedded AI processing.

Mission Control resolves that false binary as follows:

- supervised/manual processing is accepted for the proof stage;
- automatic background candidate learning remains a required mature-state capability;
- the exact automated provider/runtime/publisher implementation is deferred until the deterministic proof and security boundaries are verified;
- any new external AI integration, credential, or write-capable automation requires its own later authorization.

The Founder-approved institutional promotion boundary remains:

- candidate generation may be automatic;
- organization-wide `INSTITUTIONALISED` status requires explicit human approval, Founder approval for v1;
- governance change always follows separate governance authority.

---

## 21. Merge and implementation boundary

Founder merge of PR `#583` means:

- the research/review mission is accepted;
- this final reconciled build plan becomes the approved design baseline;
- Claude and Codex reviews remain preserved as evidence;
- no engine implementation starts automatically.

After merge, Mission Control must verify canonical `main` and perform proper communication closeout/reset.

Only after that may Mission Control decide whether to activate a separate implementation mission for the first slice.

`SB-P-1.12` remains not activated until separately authorized.

---

## 22. Final acceptance statement

The Smart Business Organizational Learning Engine is approved as a **governed organizational-memory and continuous-learning capability** whose purpose is to help Smart Business learn from its own work without transferring human authority to automation.

The final design deliberately combines:

- the Founder's requirement for continuous background learning;
- Claude Code's repository-grounded simplification;
- Codex's authority/provenance/security/recovery controls;
- Smart Business governance principles;
- repository-first evidence and protected-main discipline.

Final status:

**`SB-ORG-LEARNING-1.0 — BUILD PLAN ACCEPTED — READY FOR FOUNDER MERGE — IMPLEMENTATION NOT AUTHORIZED`**
