# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — PARSER RUNTIME PATH DECISION & EXTERNAL ISOLATION SELECTION

**Instruction ID:** instruction1.97  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** GC-1 — Catalog Import Parser / Runtime Gate  
**Executing Room:** Claude Code / Engineering Architecture  
**Authorized By:** Mission Control  
**Mode:** PLAN MODE — ARCHITECTURE SELECTION ONLY  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Lovable Publish Authority:** NONE  
**Production Mutation Authority:** NONE

---

## 1. Mission Control Decision

Mission Control has reviewed the current merged evidence chain for the Catalog import parser runtime gate, including:

- `communication/live/report1.90.md`
- `communication/live/report1.91.md`
- `communication/live/report1.92.md`
- `communication/live/report1.93.md`
- `communication/live/report1.94.md`
- `communication/live/report1.95.md`
- the completed Founder Workflow Supabase/Security review chain through `communication/live/report1.102.md`

Mission Control records the following decision:

### Decision PRD-1 — Lovable In-Process Bounded Parsing is not eligible for Phase 1 Build Lock under the current evidence state.

The architecture remains technically plausible, and EC-2 / EC-3 are retained as valid security requirements. However, the design depends on the Lovable/Cloudflare platform's involuntary per-request CPU termination as the genuine non-cooperative parser-execution boundary.

The repository evidence still does not establish an authoritative, project-specific effective CPU-time ceiling for the authorized Smart Business Lovable deployment.

Mission Control will not treat an unknown, undisclosed, inferred, or merely assumed platform CPU ceiling as sufficient evidence for Phase 1 Build Lock.

This is a risk-control decision. It does not claim the Lovable runtime is unsafe in general. It means the current Smart Business evidence standard is not satisfied for this parser workload.

### Decision PRD-2 — The approved path forward is external narrow parser isolation while keeping Lovable as the main Smart Business application environment.

The main application, Supabase authority model, Product Truth model, Catalog commands, Owner-only Phase 1 permissions, import support-table design, and Founder workflow architecture remain unchanged.

Only the expensive untrusted CSV/XLSX parsing boundary is to move to a separately bounded runtime.

### Decision PRD-3 — Full application hosting migration is rejected for this correction.

The parser problem does not justify moving the whole Smart Business application away from Lovable.

### Decision PRD-4 — R2 is not a parser isolation solution and remains excluded from this mission.

No object-storage architecture shall be introduced merely to solve parser compute containment.

---

## 2. Mission Objective

Select the smallest production-suitable external parser runtime architecture that satisfies the existing security contract without becoming a second application backend or Product Truth authority.

This mission must compare only these two final candidates:

1. **Vercel Node Function**
2. **AWS Lambda**

The mission shall recommend exactly one candidate for Phase 1 and produce a standalone architecture contract ready for Supabase and Security specialist review.

Do not implement the selected architecture in this mission.

---

## 3. Non-Negotiable Architecture Boundary

The selected external parser runtime shall be a **narrow transient parsing service only**.

It may:

- receive one authenticated/authorized import-preview parsing request from the Smart Business server boundary;
- receive the transient CSV/XLSX file for that request;
- enforce file/structure/decompression/compute limits;
- parse the file;
- normalize parser output into a closed allowlisted structure;
- return the sanitized structured parse result or a closed error code.

It shall not:

- become Catalog Product Truth authority;
- write Catalog products, prices, tax settings, Inventory truth, Opening Stock, or any merchant business record;
- hold service-role authority to mutate Smart Business Product Truth;
- classify merchant Catalog duplicates through privileged database access;
- make business decisions;
- become a second general Smart Business API/backend;
- retain raw uploaded merchant files after the request lifecycle;
- introduce a new public Catalog command;
- weaken the existing caller-JWT command authority model.

The existing Smart Business application remains responsible for authenticated business authority, business-scoped classification, support-table bookkeeping, preview/commit orchestration, and all governed Product Truth mutation.

---

## 4. Existing Security Contract That Must Survive

The selected architecture must inherit and preserve the accepted requirements from `report1.93.md` and `report1.94.md`.

At minimum:

1. caller authentication and authoritative Owner/business re-derivation occur before expensive parsing is authorized;
2. the per-business preview abuse guard remains required;
3. guard identity is server-derived `businessId`, never client-selected authority;
4. one expensive import preview in flight per business remains the preferred Phase 1 concurrency ceiling unless the selected architecture proves an equally restrictive equivalent;
5. bounded short-window attempt control remains required;
6. 5 MB compressed upload cap remains mandatory;
7. XLSX actual produced decompressed-byte cap remains 25 MB before workbook materialization;
8. 2,000-row / 40-column / 2,000-character cell limits remain mandatory downstream/data-shape limits;
9. plain `.xlsx` only; unsupported/macro/encrypted structures remain rejected;
10. CSV remains valid UTF-8/non-ZIP input;
11. raw file bytes remain transient only;
12. parser output is allowlisted before crossing back into the main application;
13. parse/validation succeeds before privileged import-support bookkeeping writes;
14. preview performs zero Product Truth mutation;
15. Catalog commit remains through the existing nineteen public Catalog commands using caller-JWT authority;
16. unexpected runtime/platform failures are opaque to merchants;
17. raw platform error bodies, stack traces, paths, environment values, credentials, SQL detail, JWTs, file contents, and hostile cells must not be surfaced to UI or unsafe logs;
18. runtime termination must not depend on application timers, `Promise.race`, or `AbortController` as the genuine non-cooperative boundary;
19. production-equivalent runtime verification remains mandatory before Build/Release closure;
20. final Security implementation re-verification remains mandatory before any production migration or release.

---

## 5. Required Candidate Comparison

Compare Vercel Node Function and AWS Lambda against the same evidence standard.

For each candidate provide repository-citable or primary-source-citable evidence for:

### 5.1 Runtime and hard containment

- supported Node.js runtime relevant to current parser dependencies;
- externally enforced maximum execution duration / compute boundary;
- whether that boundary is customer-visible and configurable;
- behavior when the boundary is exceeded;
- whether termination is independent of application cooperation;
- memory limits and relevant resource controls;
- request/body limits affecting a 5 MB upload;
- response-size limits affecting the maximum allowlisted parsed result.

### 5.2 Parser compatibility

Assess compatibility with the current parsing stack and intended bounded design, including:

- Papa Parse CSV path;
- ExcelJS XLSX path;
- ZIP structure/decompression verification;
- 25 MB produced-byte cap;
- current 2,000 × 40 maximum data shape;
- current TypeScript/Node implementation characteristics.

Do not assume browser-only or edge-only compatibility.

### 5.3 Security architecture

Define the narrow trust boundary:

- how the Smart Business server authenticates to the parser runtime;
- how replay/unauthorized direct invocation is prevented;
- how no browser-provided `businessId` becomes authority;
- whether business identity needs to be transmitted at all;
- how request authentication is rotated/revoked;
- how secrets are stored;
- how raw uploads and logs are prevented from persistent retention;
- how parsed output is schema-allowlisted;
- how timeout/runtime failures return only closed/sanitized errors;
- how the parser remains unable to mutate Supabase Product Truth.

Prefer the least privilege design. Avoid long-lived broad credentials where a narrower mechanism is available.

### 5.4 Availability and abuse containment

Assess:

- one-preview-per-business guard interaction;
- burst/rate protection;
- platform concurrency controls relevant to parser abuse;
- cold starts;
- retry behavior;
- duplicate execution risk;
- timeout and unknown-outcome behavior;
- denial-of-wallet exposure;
- safe behavior if the parser runtime terminates mid-request.

The architecture must keep parse-before-write semantics so parser termination cannot create partial Smart Business import state.

### 5.5 Merchant experience

Assess only material Phase 1 impact:

- expected extra network hop;
- India/Kerala latency considerations;
- likely cold-start impact;
- whether the merchant can still receive a simple status such as `Checking your file…` without exposing infrastructure detail;
- whether synchronous preview remains practical or an asynchronous job model becomes necessary.

Do not introduce an async queue/job system unless the selected runtime's hard constraints prove synchronous Phase 1 preview impractical.

### 5.6 Operations and founder burden

Compare:

- deployment complexity;
- secret/configuration burden;
- logs/observability;
- rollback;
- environment separation;
- cost at controlled Phase 1 merchant volume;
- maintenance burden for a solo founder/team;
- vendor lock-in and reversibility.

The smallest reliable architecture is preferred over the most feature-rich architecture.

---

## 6. Required Architecture Recommendation

The report must recommend exactly one:

- `SELECT VERCEL NODE FUNCTION`
- `SELECT AWS LAMBDA`
- `STOPPED — NEITHER CANDIDATE SATISFIES THE REQUIRED SECURITY CONTRACT`

Do not return an unresolved tie.

If one candidate is selected, provide the exact reasons it is materially preferable for Smart Business Phase 1.

A small operational convenience advantage is not sufficient to override a security/containment disadvantage.

---

## 7. Required Standalone Selected Architecture Contract

If a candidate is selected, define one implementation-ready architecture contract containing at least:

1. runtime/provider;
2. exact runtime type/version assumption to verify in Build Mode;
3. hard execution/time boundary and how it is enforced;
4. memory/resource boundary;
5. request/body boundary;
6. response boundary;
7. Smart Business → parser authentication design;
8. parser request schema;
9. whether `businessId` is omitted or included and why;
10. raw-file lifecycle;
11. CSV structural and parsing sequence;
12. XLSX structural/decompression/parsing sequence;
13. exact retained input limits;
14. parsed-result allowlist/schema;
15. closed error taxonomy;
16. logging/data-minimization rules;
17. retry/idempotency semantics;
18. interaction with the durable per-business pre-parse guard;
19. exact point where the main application may begin caller-JWT classification;
20. exact point where privileged support-table bookkeeping may begin;
21. confirmation that preview performs no Product Truth mutation;
22. production-equivalent verification requirements;
23. Security specialist re-review requirements;
24. rollback/failure containment;
25. explicit exclusions.

The architecture contract must be standalone enough that a later EIS/Build author does not have to invent security boundaries.

---

## 8. Required Migration / Supabase Impact Classification

State clearly whether the selected parser runtime itself requires:

- Supabase schema changes;
- Supabase RLS changes;
- Catalog command changes;
- Product Truth permission changes.

Expected default is **none for the parser runtime itself**.

Separately preserve the already identified EC-2 durable per-business preview-guard support primitive as a future authorized backend implementation item. Do not merge that guard with the external parser service and do not implement it here.

---

## 9. Build Now / Build Later / Add-on / Separate Product / Reject Classification

The report shall explicitly classify:

### Build Now

Expected scope includes:

- one narrow external parser runtime;
- retained 5 MB / 25 MB / 2,000 / 40 / 2,000 limits;
- authenticated server-to-parser invocation;
- transient raw-file handling;
- sanitized closed errors;
- parser result allowlisting;
- integration with the existing pre-parse guard and parse-before-write workflow.

### Build Later

Consider only optional operational refinements not required for Phase 1 correctness.

### Add-on

Do not classify core parser safety as an add-on.

### Separate Product

None expected.

### Reject

At minimum reject:

- Lovable in-process parser Build Lock under the current unknown CPU-ceiling evidence state;
- full Smart Business hosting migration merely for parser isolation;
- R2 as parser-compute workaround;
- VM/self-hosted parser for Phase 1;
- parser service with direct Product Truth mutation authority;
- parser service with broad Supabase service-role access;
- browser/client-side business-authority decisions;
- silent persistence of raw merchant upload files;
- queue/job architecture without demonstrated need;
- twentieth Catalog command.

---

## 10. Explicit Non-Authority

This mission does **not** authorize:

- code changes;
- dependency changes;
- SQL or migration creation;
- Supabase mutation;
- RLS or grant changes;
- service-role expansion;
- Vercel project creation;
- AWS account/resource creation;
- DNS/domain changes;
- Lovable changes;
- Lovable publish/deploy;
- parser implementation;
- guard implementation;
- R2;
- Product Truth changes;
- permission expansion;
- a twentieth Catalog command;
- Build Lock;
- Build Mode;
- production deployment;
- SB-P-1.11 acceptance.

Any required external-web research for current Vercel/AWS limits must use authoritative provider documentation only and must be cited in the report.

---

## 11. Required Output

Produce only:

`communication/live/report1.103.md`

The report must include:

- exact `main` SHA reviewed;
- exact evidence chain reviewed;
- Mission Control PRD-1 through PRD-4 acknowledgement;
- Vercel vs AWS evidence table;
- containment comparison;
- security/trust-boundary comparison;
- runtime/parser compatibility comparison;
- latency/merchant-experience comparison;
- cost/founder-operations comparison;
- one final selected candidate or STOPPED verdict;
- standalone selected architecture contract;
- Supabase/migration impact classification;
- Build Now / Build Later / Add-on / Separate Product / Reject classification;
- unresolved assumptions requiring later Build verification;
- explicit statement that no implementation occurred.

---

## 12. Completion Verdict

Use exactly one:

- `PARSER RUNTIME PATH — VERCEL NODE FUNCTION SELECTED FOR SPECIALIST REVIEW`
- `PARSER RUNTIME PATH — AWS LAMBDA SELECTED FOR SPECIALIST REVIEW`
- `PARSER RUNTIME PATH — STOPPED — NEITHER CANDIDATE SATISFIES SECURITY CONTRACT`

A selection authorizes only the next specialist architecture review. It does not authorize Build Lock or Build Mode.

---

## 13. Next Gate

After `report1.103.md` is human-reviewed and merged:

1. Mission Control reviews the selected architecture.
2. Supabase Backend Architecture reviews only integration/authority impact if required.
3. Security & Permissions Architecture performs a bounded parser-runtime architecture review.
4. Only after positive specialist review may Mission Control consider a separate Build authorization for the parser correction and EC-2 guard.

No Build authorization may be inferred from this instruction.
