# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.0 — Smart Business Organizational Learning Engine

**Document:** Research and Detailed Build Plan Proposal  
**Mission ID:** `SB-ORG-LEARNING-1.0`  
**Mission name:** Smart Business Organizational Learning Engine  
**Mission class:** Organizational / Institutional Capability  
**Status:** `RESEARCH & DESIGN — BUILD PLAN PROPOSAL — EXTERNAL REVIEW PENDING`  
**Authorized by:** Founder Riyas PK through Smart Business Mission Control  
**Repository:** `SmartBusinessv1/smart-business`  
**Implementation status:** `NOT AUTHORIZED`  
**Production impact:** None  
**Product Mission activation:** None — this proposal does **not** activate `SB-P-1.12` or any other `SB-P-*` mission.

---

## 1. Executive purpose

Smart Business has accumulated substantial organizational knowledge across product missions, operational missions, specialist reviews, Founder decisions, implementation corrections, security findings, CI evidence, historical reconstruction, and Mission Control retrospectives.

Today that knowledge is durable only when people and AI systems deliberately preserve it in repository artifacts, governance sources, decision logs, completion reports, handovers, institutional-memory documents, and current-state records.

The proposed **Smart Business Organizational Learning Engine** creates a governed, repository-native system that can continuously transform completed work into reusable institutional learning without turning AI into an authority, silently rewriting Product Truth, or confusing historical evidence with current operational truth.

The engine shall answer four recurring questions:

1. **What did we learn?**
2. **How strong is the evidence for that learning?**
3. **What should future missions know before repeating similar work?**
4. **What, if anything, should be promoted into stronger organizational practice or governance through the proper human-controlled process?**

The purpose is not to create an autonomous company brain.

The purpose is to reduce repeated mistakes, preserve judgement, improve mission quality, shorten rediscovery time, and strengthen continuity while keeping human authority intact.

---

## 2. Governing principles

This proposal inherits and must remain subordinate to the active Smart Business governance set, especially:

- `00_Lighthouse_Constitution.md`
- `01_Smart_Business_Master_System_Manifesto.md`
- `09_Master_Roadmap_Command.md`
- `11_Smart_Business_Product_Truth_Map.md`
- `12_Product_Execution_and_Release_Framework.md`
- `15_Governance_Mission_Control_Activation_Template.md`
- `16A_Smart_Business_Constitution_Design_Principles.md`
- `17_AI_Operations_Manual.md`
- `18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` where a future Product Mission is involved
- current repository communication protocols and mission records

The engine must preserve these Lighthouse principles:

- Humans serving humans.
- AI Assistant, Not AI Judge.
- Human decision ownership remains final.
- Capability does not equal authority.
- Access does not equal permission.
- Technology is a tool; human improvement is the purpose.
- Preserve simplicity, trust, dignity, sustainability, and continuity.
- Important project knowledge must outlive individual chats.
- Evidence must not be upgraded into stronger claims than it supports.

The engine may improve how Smart Business **remembers and reuses learning**.

It may not redefine what Smart Business **is**.

---

## 3. Problem statement

Smart Business already has strong durable records, but organizational learning is still fragmented.

Important knowledge can exist across:

- mission `README.md` files;
- decision logs;
- handover logs;
- Founder briefs;
- builder reports;
- specialist reports;
- independent verification reports;
- completion reports;
- evidence packages;
- pull requests and review threads;
- CI outcomes;
- runtime findings;
- incident/correction records;
- current-state Mission Control memory;
- historical institutional-memory material;
- governance sources;
- roadmap and Product Truth documents.

The organization therefore faces recurring costs:

1. the same failure mode may be rediscovered in several missions;
2. a useful lesson may remain trapped inside one completion report;
3. later AI systems may know the result but not the reasoning;
4. historical behaviour can be mistaken for current authority;
5. current operational state can be polluted by historical narrative;
6. a tool or architectural pattern can be reused without remembering the conditions under which it succeeded or failed;
7. Mission Control must repeatedly reconstruct context that could have been distilled into reusable learning;
8. a local mission can close successfully while a global organizational lesson remains unrecorded;
9. AI summaries can overstate evidence if provenance and maturity are not explicit;
10. repeated mission execution creates knowledge, but no standardized organizational-learning contract currently converts that knowledge into future context.

---

## 4. Institutional learning already established

The existing Mission Control institutional-memory work gives this proposal a strong seed corpus.

The mature operating lessons already include patterns such as:

- prove before replacing;
- reconcile exact files and states before writing;
- bind readiness and PASS to the correct lifecycle stage;
- use proportionate governance rather than unnecessary ceremony;
- prove security designs against real runtime constraints;
- do not assume newer or connected means canonical;
- change only what evidence proves is missing;
- never let transfer authority roll back newer canonical truth;
- close only the exact workstream proven;
- resume only the failed checkpoint after transient failure;
- claim only what the evidence demonstrates;
- distinguish Founder-direct language from assistant synthesis;
- maintain global product completion while local mission scope stays narrow;
- block the unsafe dependency rather than unrelated work;
- preserve original historical behaviour, later correction, current truth, and uncertainty as separate layers.

The proposed engine should make preservation of lessons like these systematic rather than dependent on occasional manual reconstruction.

---

## 5. Core design decision

### Proposed v1 architecture: repository-native, reviewable, deterministic-first

The first version should live inside the canonical Smart Business repository.

Do **not** begin with:

- a new database service;
- a vector database;
- a separate SaaS product;
- autonomous AI agents with write authority;
- automatic governance rewriting;
- automatic prompt mutation;
- automatic external tool adoption;
- a new production dependency.

The repository is already the primary durable operational record.

Therefore v1 should add a structured organizational-learning layer on top of the existing repository evidence.

Proposed root:

```text
organizational-learning/
├── README.md
├── schemas/
│   ├── mission-evidence.schema.json
│   ├── learning-item.schema.json
│   ├── learning-report.schema.json
│   ├── source-registry.schema.json
│   ├── tool-registry.schema.json
│   ├── context-pack.schema.json
│   └── receipt.schema.json
├── registry/
│   ├── lessons/
│   ├── resources/
│   ├── skills/
│   ├── capabilities/
│   ├── tools/
│   ├── decisions/
│   └── risks/
├── reports/
│   └── missions/
├── context-packs/
├── receipts/
├── sources/
└── scripts/
```

This structure is a proposal only. Claude Code and Codex are explicitly required to challenge it before implementation authority is considered.

---

## 6. What the engine must learn

The engine should capture **reusable organizational learning**, not routine task completion.

A candidate learning item may belong to one or more categories:

### 6.1 Governance practice

Examples:

- a better mission handoff pattern;
- a recurring ambiguity in authority;
- a lifecycle gap;
- a useful stop condition;
- a proven review pattern.

### 6.2 Engineering pattern

Examples:

- an implementation approach that repeatedly succeeds;
- a failure caused by duplicated business logic;
- a safe migration pattern;
- a test-isolation technique;
- an infrastructure constraint that must be remembered.

### 6.3 Security and permission lesson

Examples:

- where frontend-only enforcement failed;
- a required RLS verification pattern;
- a credential/runtime incompatibility;
- a repeated least-privilege issue;
- evidence needed before a security PASS can be generalized.

### 6.4 Product delivery lesson

Examples:

- a confirmed feature dependency;
- a recurring product-definition ambiguity;
- an implementation simplification that would violate Product Truth;
- a pattern that improves merchant clarity without changing product identity.

### 6.5 Operational lesson

Examples:

- build/release bottlenecks;
- recurring CI failure modes;
- environment confusion;
- provider limitations;
- support escalation patterns.

### 6.6 Tool/resource intelligence

Examples:

- which tool was useful for what task;
- conditions under which a connector failed;
- a reusable script or workflow;
- a resource that improved mission execution;
- a capability that should be reused rather than recreated.

Tool/resource intelligence must never become automatic tool adoption authority.

### 6.7 Founder-decision memory

The engine may index and reference Founder decisions.

It must not reinterpret, weaken, expand, or silently supersede them.

### 6.8 Historical learning

Historical material must preserve provenance and temporal layers.

It must not be treated as current authority merely because it is important.

---

## 7. Explicit non-goals

The Organizational Learning Engine shall **not**:

- train or fine-tune model weights;
- create a self-modifying AI constitution;
- automatically change Product Truth;
- automatically change roadmap sequence;
- automatically approve or reject missions;
- automatically accept implementation;
- automatically merge pull requests;
- automatically deploy;
- automatically modify production data;
- automatically alter RLS, IAM, authentication, billing, or legal policy;
- turn lessons into Founder decisions;
- treat historical reconstruction as present operational state;
- replace mission-specific source loading;
- replace Mission Control;
- replace independent verification;
- infer authority from tool access;
- harvest merchant/customer production data for organizational learning;
- expose secrets, credentials, private business data, or personal data;
- create hidden scoring of employees, merchants, specialists, or AI systems.

---

## 8. Learning object model

Every reusable learning item should be represented by a machine-readable record plus human-readable context.

Proposed minimum fields:

```yaml
id: OLE-LESSON-XXXX
canonical_title: string
summary: string
category:
  - governance
  - engineering
  - security
  - product-delivery
  - operations
  - tool-resource
  - founder-decision-reference
  - historical
scope:
  product: Smart Business
  mission_ids: []
  systems: []
  environments: []
source_refs: []
provenance:
  - source_path
  - commit_sha
  - pr_number
  - report_type
  - actor
  - date
evidence_strength: DIRECT | CORROBORATED | ATTESTED | HISTORICAL | INFERRED
confidence: LOW | MEDIUM | HIGH
maturity: CANDIDATE | CORROBORATED | VALIDATED | INSTITUTIONALISED
status: ACTIVE | SUPERSEDED | DEPRECATED | REJECTED
supersedes: []
superseded_by: []
conditions: []
anti_patterns: []
recommended_future_use: []
authority_effect: NONE
human_review:
  required: true
  reviewed_by: null
  reviewed_at: null
```

The exact schema is subject to engineering review.

### Mandatory principle

**Evidence strength, confidence, maturity, and status are separate dimensions.**

They must not be collapsed into one AI-generated score.

A lesson may be high-confidence but still only a candidate for institutional adoption.

A historically well-supported fact may still be superseded operationally.

A current operational decision may be active without being organization-wide doctrine.

---

## 9. Provenance model

Every learning item must be traceable back to durable evidence.

Where applicable, provenance should preserve distinctions such as:

- `FOUNDER_DIRECT`
- `FOUNDER_DECISION`
- `ASSISTANT_SYNTHESIS`
- `CURRENT_CANONICAL_ECHO`
- `HISTORICAL_CANDIDATE`
- `BUILDER_REPORT`
- `SPECIALIST_REVIEW`
- `INDEPENDENT_VERIFICATION`
- `MISSION_CONTROL_DISPOSITION`
- `CI_EVIDENCE`
- `RUNTIME_EVIDENCE`
- `OPERATOR_ATTESTATION`

A learning item without sufficient provenance should remain `CANDIDATE` or be rejected.

---

## 10. Mission Learning Report contract

Every eligible closed mission should eventually produce one standardized **Mission Learning Report**.

Proposed path:

```text
organizational-learning/reports/missions/<MISSION-ID>.md
```

and optionally a machine-readable sibling:

```text
organizational-learning/reports/missions/<MISSION-ID>.json
```

Minimum report sections:

1. Mission identity.
2. Mission type.
3. Final authoritative status.
4. Canonical completion/acceptance references.
5. What worked well.
6. What failed.
7. Near-misses.
8. Corrections made.
9. Why corrections were necessary.
10. Founder decisions referenced.
11. Specialist findings worth preserving.
12. Engineering patterns worth reusing.
13. Security/permission lessons.
14. Tool/resource observations.
15. Repeated lessons reinforced.
16. Existing lessons contradicted.
17. Candidate new lessons.
18. Candidate capability/skill/resource updates.
19. Known unresolved risks.
20. Evidence/provenance table.
21. Confidence and maturity classifications.
22. Candidate promotion actions.
23. Explicit statement when **no material reusable learning** exists.

The system must never manufacture learning merely because a mission closed.

---

## 11. Mission-close ingestion workflow

### Proposed workflow

```text
Authoritative mission closure
        ↓
Deterministic eligibility check
        ↓
Deterministic evidence inventory
        ↓
Content/provenance manifest + hashes
        ↓
Sensitive-data / secret screening
        ↓
AI candidate-learning extraction
        ↓
Schema validation
        ↓
Cross-reference against existing registry
        ↓
Candidate Learning Report
        ↓
Human / Mission Control review
        ↓
Approved registry changes or no-op
        ↓
Immutable processing receipt
```

### Important boundary

The AI extraction step is advisory.

The deterministic system should control:

- which mission is eligible;
- which files are authoritative inputs;
- exact source references;
- commit identities;
- hashing;
- schema validation;
- protected-path checks;
- idempotency;
- duplicate-run detection;
- receipt creation;
- whether an AI proposal attempts to modify prohibited paths.

AI should be used where semantic judgement is actually needed:

- candidate lesson extraction;
- identifying recurring patterns;
- classifying similarities/differences;
- proposing candidate supersession relationships;
- drafting a human-readable Mission Learning Report;
- ranking relevant learning for future context packs.

---

## 12. Mission-start retrieval workflow

The engine should help future missions by preparing a compact **Mission Learning Context Pack**.

Proposed path:

```text
organizational-learning/context-packs/<MISSION-ID>.md
```

A context pack should contain only learning relevant to the new mission's:

- mission class;
- systems touched;
- feature contracts;
- security boundaries;
- environments;
- integrations;
- tools;
- known risks;
- prior related missions.

It should not dump the entire organizational archive into every AI context.

Proposed sections:

1. Applicable institutional lessons.
2. Related prior missions.
3. Repeated failure modes to avoid.
4. Proven engineering patterns.
5. Security/permission cautions.
6. Relevant tool/resource notes.
7. Active unresolved risks.
8. Superseded historical patterns that must not be reused.
9. Provenance links.
10. Statement that the pack provides context, **not authority**.

Current governance, Product Truth, mission instructions, and live repository state remain authoritative.

---

## 13. Learning maturity lifecycle

Proposed maturity progression:

```text
CANDIDATE
   ↓
CORROBORATED
   ↓
VALIDATED
   ↓
INSTITUTIONALISED
```

### CANDIDATE

Observed once or extracted from one mission. Useful enough to preserve but not broadly trusted.

### CORROBORATED

Supported by more than one independent mission, evidence source, or verified recurrence.

### VALIDATED

Deliberately tested/reviewed and considered reusable within its stated scope.

### INSTITUTIONALISED

Human-approved as an enduring organizational practice, reusable standard, or governance-promotion result.

`INSTITUTIONALISED` does **not** automatically mean constitutional or governance authority.

Any governance modification still follows the existing Founder/Mission Control governance process.

---

## 14. Status and supersession lifecycle

Separate from maturity:

```text
ACTIVE
SUPERSEDED
DEPRECATED
REJECTED
```

The engine must support historical continuity.

When a lesson is superseded:

- do not delete it;
- record what replaced it;
- preserve why;
- preserve evidence and dates;
- ensure future retrieval prefers current active knowledge;
- permit historical reconstruction to retrieve the older state when intentionally requested.

---

## 15. Source registry

The system should maintain an explicit registry of source classes rather than crawling the repository indiscriminately.

Possible source classes:

- mission control acceptance records;
- completion reports;
- independent verification reports;
- specialist reviews;
- decision logs;
- handover logs;
- Founder briefs/decisions;
- evidence packages;
- CI/build assurance records;
- incident/correction reports;
- mission retrospectives;
- approved institutional-memory documents.

Protected governance and Product Truth sources may be **referenced** and used for interpretation but should not be treated as writable learning-registry targets.

---

## 16. Tool and resource registry

The engine may maintain a registry of tools/resources used by Team LIPS.

Candidate fields:

- tool/resource name;
- category;
- purpose;
- missions used in;
- evidence of usefulness;
- known limitations;
- security/privacy considerations;
- environment constraints;
- cost considerations where known;
- approved status;
- authority needed for use;
- superseded alternatives;
- last verified date.

Examples include:

- GitHub workflows;
- repository scripts;
- Claude Code;
- Codex;
- Lovable;
- Supabase;
- AWS Lambda;
- Cloudflare;
- test harnesses;
- local verification scripts;
- approved checklists;
- reusable communication templates.

The registry should inform future mission planning.

It must not grant operational authority.

---

## 17. Skill and capability registry

The engine may also capture organizational capabilities, for example:

- RLS verification;
- protected-main PR delivery;
- migration reconciliation;
- historical provenance reconstruction;
- CI split architecture;
- WhatsApp integration review;
- product-completion mapping;
- evidence-tier verification;
- narrow blocker recovery.

A capability record should state:

- what the organization can reliably do;
- evidence proving it;
- current limits;
- required tools;
- required human authority;
- related lessons;
- last demonstrated mission.

This provides a factual map of organizational capability without scoring people or AI systems.

---

## 18. Decision registry

The engine may index durable decisions for retrieval, but it must not become a parallel source of authority.

A decision record should reference the actual authoritative source and include:

- decision summary;
- authority;
- date;
- source path;
- source commit;
- affected missions/systems;
- superseded decision if any;
- current status.

The actual decision artifact remains authoritative.

The registry is an index, not a replacement.

---

## 19. Risk registry integration

Learning should preserve recurring or unresolved risks across mission boundaries.

A risk may include:

- description;
- affected systems;
- severity;
- evidence;
- first observed mission;
- most recent observation;
- current mitigation;
- owner;
- next review trigger;
- status.

The engine should help prevent a risk from disappearing simply because the mission that discovered it closed.

---

## 20. Security and trust model

This system itself becomes a sensitive institutional layer and must be treated accordingly.

### Required protections

- repository-only inputs in v1 unless separately authorized;
- no secret values in learning artifacts;
- no production merchant/customer data ingestion;
- no personal employee evaluation data;
- provenance required for every durable learning claim;
- fail closed when source authority is ambiguous;
- protected path allowlist/denylist;
- deterministic schema validation;
- deterministic idempotency;
- no automatic direct-main writes;
- PR review for promoted registry changes;
- no self-approval;
- no self-merge;
- clear distinction between AI proposal and human-approved state.

### Prompt-injection/content-poisoning risk

Repository content can contain arbitrary text.

Any AI processing step must treat source material as **data**, not executable instruction.

The implementation should explicitly protect against mission artifacts attempting to instruct the learning extractor to:

- ignore governance;
- reveal secrets;
- modify unrelated files;
- promote a lesson automatically;
- rewrite authority;
- execute commands;
- call external services without authorization.

Claude and Codex must specifically review this threat model.

---

## 21. Idempotency and receipts

Every processing run should create a receipt that records at minimum:

- mission ID;
- source commit/head;
- authoritative closure reference;
- source manifest hash;
- extractor version/prompt identifier;
- schema version;
- generated candidate report hash;
- review status;
- promoted registry changes if any;
- run timestamp;
- run identifier.

If an identical authoritative source state has already been processed, the workflow should no-op or explicitly require a reprocessing reason.

This avoids duplicate learning entries and silent drift.

---

## 22. Reconciliation and contradiction handling

The engine must expect that lessons can conflict.

When a new candidate contradicts existing learning, it should not silently overwrite the old entry.

Proposed process:

```text
Conflict detected
   ↓
Preserve both claims
   ↓
Compare provenance + scope + chronology
   ↓
Classify as:
  compatible by scope
  historical evolution
  genuine contradiction
  supersession candidate
  unresolved
   ↓
Human review where material
```

Unknown remains unresolved.

The engine should never manufacture certainty for the sake of producing a clean registry.

---

## 23. Automation architecture proposal

### Recommended orchestration

Use GitHub Actions only as the initial orchestration mechanism because the repository is already the durable evidence boundary.

Potential workflows:

```text
.github/workflows/org-learning-candidate.yml
.github/workflows/org-learning-reconcile.yml
.github/workflows/org-learning-context-pack.yml
```

Names are provisional.

### Candidate generation trigger

Do **not** trigger merely on every merge to `main`.

Preferred design should detect an explicit authoritative mission-close marker or approved closure artifact.

Claude and Codex must review the safest trigger.

Possible options to evaluate:

1. explicit workflow dispatch by Mission Control after closure;
2. merge of a closure artifact with a machine-readable mission status;
3. a dedicated closure manifest file;
4. a label/event mechanism if GitHub evidence is reliable enough;
5. hybrid approach.

V1 should prefer correctness and auditability over invisible automation.

---

## 24. Deterministic vs AI responsibilities

### Deterministic system owns

- mission eligibility;
- source path enumeration;
- Git commit identity;
- hashing;
- schema validation;
- secret scanning;
- protected-path enforcement;
- idempotency;
- receipt generation;
- file-writing boundaries;
- duplicate detection;
- failure/exit codes.

### AI owns only candidate semantic work

- summarize reusable learning;
- propose classifications;
- compare with existing lessons;
- identify recurring patterns;
- propose supersession links;
- draft Mission Learning Reports;
- rank relevant learning for a context pack;
- surface uncertainty.

### Humans / Mission Control own

- review;
- acceptance/rejection of candidate institutional learning;
- governance promotion;
- Founder decision interpretation;
- authority changes;
- mission activation;
- merge/acceptance decisions.

---

## 25. Proposed implementation phases

No implementation phase below is authorized by this proposal PR.

### Phase 0 — Design review and architecture lock

Owners:

- Claude Code engineering review;
- Codex independent assurance review;
- Mission Control reconciliation;
- Founder decision only where a material organizational-governance choice is unresolved.

Outputs:

- reviewed architecture;
- corrected scope;
- locked v1 boundaries;
- identified repository touchpoints;
- implementation authorization decision.

### Phase 1 — Contracts and schemas

Potential work:

- create `organizational-learning/README.md`;
- define machine-readable schemas;
- define provenance vocabulary;
- define maturity/status semantics;
- define Mission Learning Report contract;
- define context-pack contract;
- define processing receipt contract;
- add schema-validation tests.

No AI provider integration required yet.

### Phase 2 — Deterministic evidence harvester

Potential work:

- read mission closure manifest;
- enumerate authoritative source paths;
- verify commit SHAs;
- build evidence manifest;
- hash inputs;
- enforce allowlist/denylist;
- detect secrets/sensitive content;
- write processing receipt skeleton;
- add idempotency tests.

### Phase 3 — Candidate-learning extraction

Potential work:

- introduce approved AI call boundary;
- structured-output generation into schema;
- source citations/provenance mandatory;
- no tool/command execution from source content;
- reject malformed/unsupported claims;
- store candidate report only.

### Phase 4 — Registry reconciliation

Potential work:

- compare candidates with existing lessons;
- deduplicate;
- detect contradictions;
- propose supersession;
- classify recurring evidence;
- human-review gate.

### Phase 5 — Mission-start context packs

Potential work:

- query registry by mission metadata;
- rank relevant learning;
- create bounded context pack;
- include active risks and superseded anti-patterns;
- include explicit non-authority statement.

### Phase 6 — Pilot on historical closed missions

Use a small, representative set rather than bulk backfill.

Suggested pilot classes:

- one documentation/governance mission;
- one CI/engineering-assurance mission;
- one security mission;
- one Product Mission with full lifecycle artifacts;
- one mission with a correction cycle;
- one mission with no material reusable learning.

Goal:

prove precision, provenance, no-op behavior, idempotency, and usefulness before wider backfill.

### Phase 7 — Controlled historical backfill

Only after pilot acceptance.

Backfill should prioritize high-value missions rather than all history at once.

### Phase 8 — Organization-level promotion review

If the capability proves reusable beyond Smart Business, Mission Control may recommend a separate Founder-approved Lighthouse/Team LIPS organizational capability mission.

Do not assume this promotion in advance.

---

## 26. Testing strategy

The implementation plan must include tests at several layers.

### Schema/contract tests

- valid learning item accepted;
- missing provenance rejected;
- invalid maturity/status rejected;
- authority-effect mutation rejected;
- unsupported source category rejected where required.

### Idempotency tests

- same closure/source hash twice → no duplicate;
- changed authoritative source → new receipt;
- partial failed run → safe retry;
- conflicting concurrent run → deterministic winner/lock behavior.

### Security tests

- secret-like source content is not copied into output;
- prompt injection in a report cannot modify workflow behavior;
- AI output cannot write protected governance paths;
- AI output cannot change mission status;
- AI output cannot activate another mission;
- untrusted content cannot execute commands;
- repository traversal/path injection blocked.

### Provenance tests

- every durable claim resolves to source references;
- stale SHA detection;
- missing source file handling;
- deleted/superseded source handling;
- historical vs current authority remains distinguishable.

### Retrieval tests

- relevant lessons returned;
- irrelevant high-similarity lessons excluded where possible;
- superseded lessons not presented as current advice;
- unresolved contradictions surfaced;
- bounded context size.

### Human-authority tests

- candidate extraction cannot mark itself `INSTITUTIONALISED`;
- AI cannot approve its own promotion;
- merge remains human/protected-main controlled;
- governance promotion requires explicit authorized path.

### Failure-mode tests

- AI unavailable;
- malformed structured output;
- partial repository evidence;
- inaccessible source;
- schema version mismatch;
- duplicate mission ID;
- contradictory closure records;
- workflow interrupted mid-run.

---

## 27. Observability and auditability

Every run should expose:

- run status;
- mission ID;
- source commit;
- extractor/schema version;
- files read;
- files proposed for creation/modification;
- candidate count;
- rejected candidate count;
- deduplication/supersession decisions;
- human-review state;
- receipt reference;
- failure reason.

Do not log secrets or raw sensitive content unnecessarily.

---

## 28. Cost and sustainability

The engine must remain lean.

V1 should optimize for:

- repository-native storage;
- deterministic preprocessing;
- bounded AI prompts;
- processing only closed/eligible missions;
- incremental reconciliation;
- no embeddings/vector infrastructure until evidence proves it is needed;
- no repeated full-repository ingestion;
- context packs instead of archive dumps.

The target is better organizational memory without creating an expensive second platform.

---

## 29. Success measures

Success must be demonstrated, not assumed.

Possible metrics for the pilot:

### Precision and provenance

- percentage of durable learning items with valid source provenance;
- unsupported-claim rejection rate;
- duplicate learning rate;
- contradiction detection accuracy on seeded cases.

### Operational usefulness

- time required for an AI/human reviewer to reconstruct relevant prior lessons before a mission;
- number of repeated known mistakes avoided in later missions;
- percentage of context-pack items judged relevant by Mission Control;
- reduction in manual historical retrieval effort.

### Safety

- zero unauthorized governance/Product Truth mutations;
- zero direct-main writes by the learning engine;
- zero secret leakage in generated artifacts;
- zero self-promotion/self-approval actions;
- correct no-op behavior when no reusable learning exists.

### Continuity

- mission learning remains reconstructable from repository evidence after chat loss;
- supersession history is preserved;
- closed risks do not disappear without recorded resolution;
- unresolved risks remain visible across mission boundaries.

The pilot should define measurable acceptance thresholds before implementation acceptance.

---

## 30. Build classification

### BUILD NOW — proposed v1 scope

Subject to review and later explicit implementation authorization:

- repository-native learning root;
- learning schemas/contracts;
- mission-close evidence manifest;
- Mission Learning Report;
- provenance and source registry;
- evidence-strength/confidence/maturity/status separation;
- processing receipts;
- idempotency;
- human-review promotion boundary;
- initial lesson/risk/tool/capability registries;
- bounded mission-start context packs;
- contradiction/supersession handling;
- tests for authority, security, provenance, idempotency, and no-op behavior;
- pilot across a small representative mission set.

### BUILD LATER

- exhaustive historical backfill;
- advanced cross-mission analytics;
- vector/embedding search if repository scale proves keyword/structured retrieval insufficient;
- vendor/tool intelligence feeds;
- richer trend analysis;
- organization-wide Team LIPS/Lighthouse promotion;
- deeper automated risk clustering;
- dashboard analytics;
- integration with future generalized mission registry systems.

### ADD-ON

- visual organizational-learning dashboard;
- notification digest;
- optional knowledge visualizations;
- optional external research intelligence feed.

### SEPARATE PRODUCT

A generalized commercial Organizational Learning Engine for organizations outside Smart Business/Team LIPS would be a separate product decision and separate architecture.

### REJECT

- self-modifying governance;
- automatic Product Truth rewrite;
- autonomous Founder-decision interpretation;
- autonomous mission activation;
- direct-main AI writes;
- self-approval/self-merge;
- automatic production changes;
- automatic tool adoption;
- employee/merchant behavioural scoring;
- unrestricted external crawling;
- model-weight self-training from internal repository data;
- hidden prompt mutation that changes authority;
- customer/merchant production-data harvesting for learning;
- deletion of superseded learning history.

---

## 31. Risks and mitigations

| Risk | Impact | Proposed mitigation |
|---|---|---|
| AI overgeneralizes one mission into broad doctrine | High | Explicit evidence strength + maturity + scope; human review |
| Historical material becomes current authority | High | Temporal/provenance labels; active/superseded separation |
| Prompt injection from repository text | High | Untrusted-content handling; deterministic boundaries; no command execution |
| Duplicate lessons | Medium | Stable IDs, hashes, reconciliation, idempotent receipts |
| Context overload | Medium | Bounded mission-specific context packs |
| Learning registry becomes competing governance | High | Registry always references authoritative source; `authority_effect: NONE` |
| Secret/private data leakage | High | source allowlist, secret scanning, no production data ingestion |
| Too much ceremony | Medium | no-op accepted; only eligible mission closure triggers; deterministic automation |
| Expensive AI processing | Medium | incremental bounded extraction; no full-repo repeated ingestion |
| Stale tool/resource intelligence | Medium | last-verified date/status; no automatic adoption |
| False confidence from automated metrics | High | separate evidence, confidence, maturity, status; human acceptance |
| Learning engine blocks normal development | Medium | asynchronous candidate generation; narrow fail scope |
| Architecture bloat | High | repo-native v1; no vector DB/new service until proven needed |

---

## 32. Open design questions for Claude Code

Claude Code must independently inspect repository reality and answer at least:

1. What is the safest authoritative mission-close trigger based on the current communication/mission structure?
2. Is the proposed `organizational-learning/` root appropriate, or should durable learning live elsewhere?
3. Which existing repository files/scripts/workflows should be reused instead of duplicated?
4. What machine-readable mission metadata already exists and can be leveraged?
5. Which deterministic implementation language/runtime best fits the current repository?
6. Can GitHub Actions securely support candidate generation without creating excessive token/permission scope?
7. What is the correct protected-path design?
8. How should source manifests and receipts be hashed/versioned?
9. How should schema evolution be managed?
10. How should concurrency/idempotency be implemented?
11. How should source content be sanitized against prompt injection?
12. What parts of this proposal are overengineered for v1?
13. What tests are missing?
14. What implementation risks have not been identified?
15. What exact files would be created/modified in a minimal v1 implementation?
16. What should remain explicitly manual even after v1?
17. Does any proposed capability conflict with active repository/governance conventions?

Claude Code must produce findings and suggestions only. It is **not authorized to implement** this proposal under the review instruction.

---

## 33. Open assurance questions for Codex

Codex must independently challenge the proposal and answer at least:

1. Can any proposed workflow accidentally launder historical/advisory text into current authority?
2. Can an AI-generated candidate promote itself through maturity/status fields?
3. Are the provenance semantics strong enough to support auditability?
4. How should independent evidence be separated from builder/self-report evidence?
5. Can malicious repository content poison extraction or retrieval?
6. Can a compromised workflow write outside the intended learning paths?
7. Are no-self-approval and no-self-merge boundaries preserved?
8. Is a GitHub Actions trigger reliable enough to represent authoritative mission closure?
9. How can missed, duplicated, or reordered mission-close events be detected?
10. Are idempotency receipts sufficient for reproducibility?
11. Can superseded learning be mistakenly returned as active guidance?
12. Could retrieval create context bias by omitting contradictory evidence?
13. Are the proposed success metrics actually evidence of organizational improvement?
14. Does the architecture preserve the distinction between institutional memory, current state, governance, Product Truth, and mission authority?
15. Which parts should be rejected, deferred, or simplified?
16. What attack/failure cases should be added before build authorization?
17. Is this still a bounded Smart Business capability, or is any part drifting into a separate platform/product prematurely?

Codex must produce findings and suggestions only. It is **not authorized to implement** this proposal under the review instruction.

---

## 34. Review deliverables required before implementation authorization

Claude Code review:

```text
communication/missions/SB-ORG-LEARNING-1.0/claude-code/01-engineering-review-and-suggestions.md
```

Codex review:

```text
communication/missions/SB-ORG-LEARNING-1.0/codex/01-independent-review-and-suggestions.md
```

Both reviewers must also update:

```text
communication/live/report.md
```

with a concise review-status summary and exact durable review path.

They must **not overwrite each other's durable review**.

After both reviews are present, Mission Control will reconcile:

- agreements;
- conflicts;
- required corrections;
- deferred items;
- Founder decisions if any;
- final v1 scope;
- whether implementation should be authorized at all.

---

## 35. Acceptance gate for this proposal stage

This proposal stage is complete only when:

- the proposal exists in the repository on a dedicated branch;
- a PR is open against `main`;
- fresh mission communication exists;
- Claude Code review instruction exists;
- Codex review instruction exists;
- both reviewers have an explicit no-implementation boundary;
- `communication/live/report.md` is ready to receive their review summaries;
- CI/Markdown checks applicable to this documentation-only PR are visible;
- Mission Control verifies exact branch/PR state.

This does **not** authorize merge or implementation.

---

## 36. Mission Control disposition

`SB-ORG-LEARNING-1.0` is opened only as a **research/design proposal and external review mission**.

Current authority:

- Mission Control may publish this proposal and review instructions.
- Claude Code may perform engineering review and create its review artifact.
- Codex may perform independent assurance review and create its review artifact.
- Both may update the shared live report with concise status/progress under the review protocol.
- Neither may implement the learning engine.
- Neither may modify Product Truth, governance, roadmap, production, permissions, billing, authentication, RLS, external customer communication, or unrelated product code.
- Neither may self-approve, self-merge, or activate a future mission.

The next decision after reviews belongs to Smart Business Mission Control, with Founder authority where material product/governance decisions require it.

---

# Closing principle

The Organizational Learning Engine should make Smart Business better at remembering **why**, not merely storing **what**.

Its success is not measured by how much information it collects.

Its success is measured by whether future humans and AI systems make better, faster, safer decisions without losing Lighthouse principles, provenance, uncertainty, or human ownership.
