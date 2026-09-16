# SMART BUSINESS — CLAUDE CODE ENGINEERING REVIEW

# SB-ORG-LEARNING-1.0 — Organizational Learning Engine: Engineering Review and Suggestions

**Mission:** `SB-ORG-LEARNING-1.0`
**Reviewer:** Claude Code
**Role:** Engineering / repository reviewer
**Status:** `REVIEW COMPLETE — REVIEW AND SUGGESTIONS ONLY`
**Implementation performed:** None
**Date:** 2026-09-16
**Branch:** `mission/SB-ORG-LEARNING-1.0-proposal`
**Reviewed proposal:** `communication/missions/SB-ORG-LEARNING-1.0/mission-control/01-research-and-build-plan-proposal.md`

---

## 1. Executive disposition

The mission's direction — a repository-native, deterministic-first, human-gated Organizational Learning Engine that never becomes an authority — is sound and consistent with Lighthouse governance (`00_Lighthouse_Constitution.md`), the Founder/Mission Control authority chain, and `17_AI_Operations_Manual.md`. The decision log (D-001–D-010) correctly anticipates most of the hard problems (authority laundering, historical/current separation, human promotion gates).

However, the **v1 technical design in the proposal is overbuilt relative to what the actual repository supports today**. Concretely:

- The repository has **no existing machine-readable mission-closure signal, no JSON Schema tooling, and no AI-provider dependency**. The proposal assumes or implies all three.
- Every existing GitHub Actions workflow in this repo runs with `contents: read` only; none writes to the repository or opens a pull request. The proposal's automation architecture (Section 23) would be a first-of-kind write capability that needs its own explicit approval, not an assumed detail.
- A real secret has previously leaked into the exact communication layer (`communication/live/`) this engine is meant to harvest, and it was found only by an ad hoc `gitleaks` scan, not a CI gate. This materially sharpens the security requirements in Section 20 beyond what the proposal treats as boilerplate.
- The proposed Section 5 structure (7 schemas, 7 registries, receipts, sources, scripts, all created up front) is speculative architecture built before a single mission has been processed — the AI Operations Manual (B5) directly warns against this pattern.

**Recommendation:** Keep the mission's governance principles, learning object model, and lifecycle semantics (Sections 8, 13, 14) unchanged. Substantially simplify the v1 technical design (schema tooling, registry count, report size, retrieval logic, automation surface, and the AI-extraction boundary) before any implementation mission is authorized. Details and an exact file-level plan follow.

---

## 2. Repository findings

Evidence gathered by inspecting the actual branch state, not assumption:

1. **Mission closure is entirely human-attested prose today.** `communication/AI_Communication_and_Handover_Protocol.md` §26–27 defines closure as something that happens only "when the Founder or Mission Control explicitly declares the communication or mission complete," followed by manual README status edits (e.g. `COMPLETED — FORMALLY ACCEPTED`), decision-log/handover-log updates, and archival. There is no label, merge-event, or file-based signal anywhere in the repo that machine-marks a mission closed. `find`-level search of `communication/` and `docs/` for JSON/YAML status files found only unrelated AWS policy evidence files (`communication/evidence/**/*.json`, `docs/implementation/SB-P-1.11-GC-38R_DeployRole_Policy_v3.json`) — nothing resembling mission metadata.
2. **No JSON Schema infrastructure exists.** No `ajv`, no `.schema.json` validation pipeline anywhere in the repo. `package.json` *does* already depend on **`zod`** (used with `@hookform/resolvers` for form validation). Zod is the repo's actual schema-validation convention.
3. **No AI-provider SDK dependency exists.** `package.json` has no `openai`, `@anthropic-ai/sdk`, or equivalent. The proposal's Phase 3 "approved AI call boundary" (Section 11/24) would require adding a new dependency and a new API-key secret to CI — which is itself a Founder/Mission-Control-approval event under `17_AI_Operations_Manual.md` A6.3 ("Enabling new MCP servers or external integrations"), not an implementation detail this proposal can settle on its own.
4. **Every workflow in `.github/workflows/` uses `permissions: contents: read` only** (`build-assurance.yml`, `full-assurance.yml`, `markdown-quality-gate.yml`, all three `aws-*.yml` files). None writes to the repository or opens a PR. A learning-engine workflow that writes `organizational-learning/**` and opens a PR is a new capability class for this repository, not an incremental addition to an existing pattern.
5. **`full-assurance.yml` already demonstrates the correct pattern to imitate**: path-filtered triggers (only runs when relevant paths change), a dedicated GitHub Environment (`smart-business-test`) scoping secrets, and a `workflow_dispatch` fallback. Any learning-engine workflow should follow this exact template rather than invent a new one.
6. **The Markdown Quality Gate already covers any new Markdown the engine produces.** `.github/workflows/markdown-quality-gate.yml` + `tools/markdown/quality_gate.py` + `.markdown-gate.yml` validate every changed `.md`/`.markdown` file on push/PR. Mission Learning Reports and context packs need no new linter — they inherit this gate automatically once committed.
7. **A secret has already leaked into this exact evidence layer.** `gitleaks-report.json` (checked into the repo root) records a real JWT caught in `communication/live/report1.57.md` at commit `e6a3372ad0adaef1256b369658f6954b8c66f2c3`. This was found by a manual/ad hoc gitleaks run — there is no gitleaks (or equivalent) step wired into any CI workflow today. This is direct, concrete evidence — not a hypothetical — that the communication layer the engine is designed to harvest has carried real secrets, and that nothing currently stops that from happening again or from propagating into a newly-generated learning artifact.
8. **Almost every field the proposal wants in a Mission Learning Report (Section 10) already exists, scattered, in the durable mission record.** E.g. `communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/` has discrete `mission-control/0N-*.md` stage files for classification, authorization, independent review, acceptance, and post-merge closure, plus `decision-log.md` and `handover-log.md`. The highest-leverage v1 behavior is summarizing/indexing these existing files, not asking every future mission to additionally fill out a new 23-section template from scratch.
9. **Git blob SHA is already the repo's de facto content-hash mechanism.** The Archive Package Format (Protocol §26) explicitly indexes preserved files "with their Git blob SHAs and sizes." The proposal's "manifest hash"/"receipt hash" concept (Sections 8, 21) should reuse this existing, zero-dependency mechanism rather than invent a new hashing scheme.
10. **Deterministic-script convention is Node.js ESM.** `scripts/supabase-cli.mjs`, invoked via `npm run supabase:test` / `npm run supabase:production`, is the one existing precedent for a repository-native operational script. `package.json` declares `"type": "module"`. This is the runtime to match — not Python (used only narrowly, for the Markdown gate) and not a new language.
11. **Testing convention is a two-tier vitest split** (`vitest.fast.config.ts` for environment-independent tests, `vitest.full.config.ts` for Supabase-dependent tests, wired to `build-assurance.yml`/`full-assurance.yml` respectively). A learning-engine test suite with no database dependency belongs entirely in the fast tier.

---

## 3. Architecture findings

- **Root location (`organizational-learning/`) — appropriate.** It sits alongside the repo's other top-level domain roots (`communication/`, `docs/`, `merge/`, `mission-control/`) and is genuinely cross-cutting, not owned by one mission. No better location was found. *(Answers required question 2.)*
- **The proposed internal structure (Section 5) is premature.** Seven registries, seven schemas, and five other top-level subfolders are created before any mission has been processed. `17_AI_Operations_Manual.md` B4/B5 requires implementation to begin from "actual repository state" and to "avoid speculative architecture detached from the codebase" — a folder tree sized for a mature system, built before the first real evidence run, violates that principle. Recommend starting with exactly two registries (`lessons/`, `risks/`) and one report type; add `resources/`, `skills/`, `capabilities/`, `tools/`, `decisions/` only once the lessons registry has been proven useful across at least a few real missions.
- **Runtime: Node.js ESM**, matching `scripts/supabase-cli.mjs`. *(Answers required question 5.)*
- **Schema tooling: Zod, not JSON Schema.** Zod is already a dependency; using it avoids adding a new validator library, gives compile-time types and runtime validation from one artifact, and matches the one schema-validation pattern that already exists in this codebase. Recommend `organizational-learning/schemas/*.ts` Zod modules instead of `schemas/*.schema.json`.
- **Mission Learning Report (Section 10) is oversized for v1.** Its 23 mandatory sections exceed the depth of any actual closure record in this repo (compare to the real, much leaner `mission-control/07-post-merge-verification-and-closure.md`-style files). Recommend a v1 report with roughly 8 sections: identity/status, what worked, what failed/near-misses, candidate lessons, unresolved risks, evidence/provenance table, confidence/maturity classification, and an explicit "no material learning" statement. Expand only with evidence that more sections are needed.
- **Context-pack retrieval (Section 12) should not be a ranking system in v1.** With a registry that will realistically hold a handful to a few dozen entries at first, a context pack can be "every `ACTIVE` lesson whose `scope.systems`/`category` intersects the new mission's declared systems" — a plain filter. Defer anything resembling relevance ranking or scoring until the registry is large enough that a full manual scan is actually impractical.
- **Maturity lifecycle and status/supersession lifecycle (Sections 13–14) are sound and should be kept as designed** — they correctly separate "how proven" from "still current," matching D-005 and D-007.
- **Schema evolution (required question 9):** use an explicit integer `schemaVersion` field on every record (already implied by the proposal's receipt fields) plus versioned Zod modules (e.g., `learning-item.v1.ts`). A small migration function per version bump is sufficient; no schema-registry service is warranted at this scale.

---

## 4. Security and permission findings

- **The proposal's `authority_effect: NONE` language does not yet connect to the AI Operations Manual's actual capability taxonomy.** `17_AI_Operations_Manual.md` Part A defines Read/Draft/Write/Execute/Communicate/Destructive capability classes and a matching approval ladder (A6.1–A6.4). Before implementation is authorized, every engine action (harvesting, candidate drafting, registry-file writing, PR opening, promotion to `INSTITUTIONALISED`) should be explicitly mapped onto that ladder. As scoped, "creating or updating repository files" and "opening pull requests" already sit in A6.2 ("Actions Requiring Explicit Mission Authorization"), which is compatible with a normal implementation mission — but registry *promotion* touching organizational practice arguably brushes A6.3's "broad access expansion," and Mission Control should make that classification explicitly rather than let it default from the proposal's own vocabulary.
- **No workflow in this repository currently holds write access.** A workflow that creates branches/PRs under `organizational-learning/**` is a new capability class here and needs its own least-privilege scoping: `permissions: contents: write` (or `pull-requests: write`) granted **only** to the specific job that opens the PR, never to the job that reads repository content, and never sufficient to push to `main` (AGENTS.md, Protocol §12/§22 — no self-merge, no direct-main push, human review required, unchanged for this engine).
- **Reject the CI-embedded AI-call architecture in Section 11/24 for v1.** Two independent reasons converge here: (a) it requires adding a new dependency and a new provider secret to CI, which is a Founder/Mission-Control-approval event this review-only mission cannot pre-approve; (b) it creates a materially larger prompt-injection surface than necessary — an unattended CI job feeding untrusted repository text to a hosted model is a bigger blast radius than the same extraction happening inside an already-governed, human-supervised AI mission session (exactly the kind of session producing this review, already bound by `AGENTS.md`/`CLAUDE.md`/`CHATGPT.md`). **Recommend Phase 3 be redefined as: an authorized AI mission session reads the deterministic evidence manifest and drafts the candidate Mission Learning Report as a normal, reviewed mission deliverable — not a GitHub Actions step that calls a model API.** This simultaneously resolves the dependency question, the secret question, and materially shrinks the injection surface, at zero new cost.
- **Protected-path design: allowlist, not denylist.** Least privilege (A5.1) means the harvester should read only an explicit, literal allowlist of path prefixes matching Section 15's source classes (`communication/missions/**`, `communication/archive/**`), and should explicitly **exclude `communication/live/**`** — the transient, pre-reconciliation layer that the one confirmed historical secret leak actually occurred in, and which by the Protocol's own definition (§26) is not yet durable/reconciled evidence. This resolves an ambiguity the proposal leaves open (Section 15 does not explicitly rule `communication/live/` in or out).
- **Secret screening: reuse `gitleaks`, don't reinvent one.** It is already present in this repository and has already caught a real leak. A bespoke pattern-matcher (Section 20) would duplicate a tool that's proven itself against this exact codebase's history.
- **Recommendation, not in scope for this mission:** the Founder/Mission Control should consider wiring `gitleaks` (or an equivalent) into CI generally, independent of this mission — its absence is a pre-existing gap this review surfaces as evidence, not something the learning engine should be asked to fix as a side effect.

---

## 5. Automation/eventing findings

- **Safest mission-close trigger (required questions 1 and 6): explicit `workflow_dispatch`, fired manually by Mission Control only after the human closure confirmation that Protocol §27 already requires** ("Closure-State Reconciliation" — closure happens only on explicit Founder/Mission Control declaration). This is option 1 in the proposal's own list (Section 23) and is the only option that doesn't require inventing a new automated signal on top of a process that is, today, entirely human-attested prose.
- **Reject merge-to-main or label/event-based triggers for v1.** The repo has no mission-status label taxonomy today, and the proposal itself already rules out "merely on every merge to main" (Section 23). Building closure-detection heuristics before the human process itself emits any structured signal solves the problem at the wrong layer.
- **Minimal machine-readable metadata to add (required question 4):** a single new line in the mission README convention, e.g. `**Learning-Engine status:** NOT PROCESSED | PROCESSED — <date>`, set by hand by Mission Control at the same moment it sets the mission's closure status. This is the smallest possible structured signal, requires no schema, and directly answers "what machine-readable mission metadata already exists or should be added minimally" — none exists today; this one field is the minimum viable addition.
- **GitHub Actions can safely orchestrate the deterministic steps only** (required question 6): evidence enumeration, git-blob-SHA hashing, allowlist enforcement, gitleaks scan, receipt write — all triggerable via `workflow_dispatch` with the same `contents: read` default every other workflow in this repo uses. Any write/PR-opening step should be a separate job with its own narrowly scoped permissions, and no job should hold both AI-call credentials and write credentials at once (moot in v1 once Section 11 is redefined per Section 4 above, since there is no AI-call job in CI at all).
- **Defer all three proposed workflow files (Section 23) until the underlying logic is proven as a manually-run local Node CLI command** (`node organizational-learning/scripts/harvest.mjs <MISSION-ID>`), exactly how `scripts/supabase-cli.mjs` is used today via `npm run supabase:test`. Wrapping unproven logic in a workflow before it has been run and reviewed by hand against real missions inverts the repo's existing "prove before automating" pattern.

---

## 6. Data/schema/provenance findings

- Reuse **git blob SHA + commit SHA** for all hashing/provenance needs (Section 2 repository findings, item 9) instead of introducing a new hash scheme.
- The provenance vocabulary (Section 9 of the proposal) is reasonable in substance but should be explicitly cross-mapped to `17_AI_Operations_Manual.md` Part A's evidence/auditability language (A11) rather than invented as a parallel vocabulary — Source 17 is already the binding authority for what counts as reliable evidence in this repository; the engine's provenance classes should cite it, not duplicate it independently.
- The evidence-strength/confidence/maturity/status separation (D-005, Section 8) is architecturally correct and should be **kept unchanged** — this is one of the proposal's strongest ideas and directly prevents the "AI overgeneralizes one mission into broad doctrine" risk the proposal itself names in Section 31.
- `supersedes`/`superseded_by` fields should be kept in the schema now (cheap, forward-compatible) even though the reconciliation *logic* that would populate them automatically is deferred (see Section 7 below and the classification table).

---

## 7. Idempotency/recovery findings

- The proposed idempotency model (hash the authoritative source state; no-op on an unchanged hash; require an explicit reason to reprocess) is sound and should be **kept**. Implement the "source manifest hash" as a sorted list of `path@blobSHA` pairs (trivially obtained via `git ls-tree`/`git rev-parse HEAD:<path>`) rather than a custom hashing library.
- **Concurrency:** since triggering is `workflow_dispatch`-only, fired manually and rarely, GitHub Actions' built-in `concurrency:` group keyed on mission ID is sufficient for v1. A custom lock/mutex system (implied by Section 21's "conflicting concurrent run → deterministic winner" test) is unnecessary complexity at this trigger volume; revisit only if the trigger model changes.
- **Missing failure mode to add:** "harvester finds zero authorized source files for a claimed-closed mission" must fail closed with an explicit error, not silently emit an empty report or a false "no material learning" statement — per `17_AI_Operations_Manual.md` A15 ("avoid inventing a resolution... escalate through Mission Control").

---

## 8. Testing findings

- Add schema/idempotency/provenance/allowlist tests to **`vitest.fast.config.ts`** — the engine has no Supabase dependency in v1 and belongs entirely in the environment-independent "Fast Gate" tier (`build-assurance.yml`), not the Supabase-dependent `full-assurance.yml` tier.
- **Write the protected-path allowlist test before any harvester code exists.** It's a pure function (`isPathAllowed(path): boolean`) testable in isolation immediately, and `17_AI_Operations_Manual.md` B9 requires security to be "part of implementation, not a post-build task" — this is the one test in the proposal's Section 26 list that has zero dependency on any other part of the system and should be first, not concurrent.
- Add a **Markdown Quality Gate compliance check** for any generated Mission Learning Report or context pack: run `tools/markdown/quality_gate.py` against a generated fixture in CI/tests, since that gate already exists and a generated document must not silently violate it.
- The proposal's existing test categories (schema/contract, idempotency, security, provenance, retrieval, human-authority, failure-mode — Section 26) are the right shape and should be kept; scope them to the simplified v1 surface (two registries, one report type, filter-based retrieval, no CI-embedded AI call) rather than the full proposal surface.

---

## 9. Cost/maintainability findings

- Section 28's cost principles (repository-native storage, bounded prompts, no embeddings until proven necessary, no repeated full-repo ingestion) are correct and should be kept as-is.
- The dominant maintainability risk is **registry sprawl**: seven registries and seven schemas created before any of them has proven useful. This is addressed by the Section 3 recommendation to start with two.
- **Reversibility check:** confirm the final v1 scope remains trivially deletable — committed files plus, at most, one `workflow_dispatch`-triggered workflow, no external service, no database migration, no standing secret beyond what already exists. With the Section 4 recommendation (no CI-embedded AI call), this property holds; if Mission Control instead insists on the CI-embedded model-call architecture, that property no longer holds and the cost/reversibility tradeoff should be re-evaluated explicitly, not assumed away.

---

## 10. V1 scope classification table

| Proposal component | Classification | Note |
|---|---|---|
| Repository-native root `organizational-learning/` | **KEEP FOR V1** | Matches existing top-level domain convention |
| 7-registry structure (lessons/resources/skills/capabilities/tools/decisions/risks) | **SIMPLIFY FOR V1** | Start with `lessons/` + `risks/` only |
| `.schema.json` files + new JSON-Schema validator dependency | **REJECT** | Use Zod — already a dependency, matches repo convention |
| Learning object model (evidence-strength/confidence/maturity/status separation) | **KEEP FOR V1** | Core strength of the proposal (D-005) |
| Provenance vocabulary | **SIMPLIFY FOR V1** | Keep, but cross-map explicitly to Source 17's evidence/auditability language |
| Mission Learning Report (23-section template) | **SIMPLIFY FOR V1** | ~8 sections; expand only with evidence |
| Machine-readable `.json` report sibling | **DEFER** | No consumer needs it yet |
| Mission-close ingestion pipeline (full 10-step) | **SIMPLIFY FOR V1** | Automate only the deterministic steps |
| AI candidate-extraction as CI-embedded model call | **REJECT for v1** | New dependency + new secret + larger injection surface |
| AI candidate-extraction as authorized AI mission session | **KEEP FOR V1 (proposed alternative)** | No new dependency; already-governed pathway |
| GitHub Actions orchestration (3 workflows) | **DEFER** | Prove as local Node CLI first |
| Mission-start context packs | **SIMPLIFY FOR V1** | Plain category/system filter, not ranking |
| Maturity lifecycle | **KEEP FOR V1** | Sound as designed |
| Status/supersession lifecycle | **KEEP FOR V1** | Sound as designed |
| Source registry, implemented as an explicit allowlist | **KEEP FOR V1** | Security-critical; allowlist not denylist |
| Tool/resource registry | **DEFER** | Speculative until lessons registry proven |
| Skill/capability registry | **DEFER** | Speculative |
| Decision registry (cross-mission index) | **DEFER** | `decision-log.md` per mission already serves this |
| Risk registry | **SIMPLIFY FOR V1** | Flat list; no separate subsystem yet |
| Contradiction/reconciliation detection logic | **DEFER** | Keep schema fields (`supersedes`/`superseded_by`); build detection later |
| Idempotency + receipts | **KEEP FOR V1** | Essential; reuse git blob SHA for hashing |
| Mission-close trigger: `workflow_dispatch` after human closure confirmation | **KEEP FOR V1** | Matches existing human-attested closure process |
| Mission-close trigger: merge/label/event-based | **REJECT** | No existing signal to build on; wrong layer |
| New mission-README "Learning-Engine status" field | **KEEP FOR V1** | Smallest viable machine-readable signal |
| Historical backfill (Phases 6–7) | **DEFER** | Correctly deferred already by the proposal |
| Dashboard/notifications/visualization (Add-on) | **ADD-ON** | Agree with proposal |
| Organization-wide Lighthouse/Team LIPS promotion (Phase 8) | **NEEDS FOUNDER / MISSION CONTROL DECISION** | Not before v1 proves value |
| Self-modifying governance, auto Product Truth rewrite, auto mission activation, auto merge, auto production change | **REJECT** | Correctly rejected already by the proposal (Section 30) |

---

## 11. Exact recommended file-level implementation plan (smallest credible v1)

This is a recommendation only. No files listed below were created by this review.

```text
organizational-learning/
├── README.md                                  # purpose, explicit non-authority statement, links
├── schemas/
│   ├── learning-item.schema.ts                 # Zod schema + inferred TS type
│   ├── mission-learning-report.schema.ts       # Zod schema for the simplified ~8-section report
│   └── receipt.schema.ts                       # Zod schema for the processing receipt
├── sources/
│   └── allowlist.ts                            # explicit literal path-prefix allowlist (protected-path design)
├── registry/
│   ├── lessons/README.md                       # format description; empty registry initially
│   └── risks/README.md                         # format description; empty registry initially
├── reports/
│   └── missions/README.md                      # path convention description
├── receipts/
│   └── README.md                                # path convention description
└── scripts/
    ├── harvest.mjs                              # CLI: mission ID -> evidence manifest + blob-SHA hash
    │                                             #   + allowlist check + gitleaks scan + receipt skeleton
    │                                             #   No AI call. No registry writes.
    ├── validate.mjs                             # CLI + importable: validates a record against the Zod schemas
    └── __tests__/
        ├── allowlist.test.ts                    # written first, before harvest.mjs exists
        ├── schemas.test.ts
        └── harvest.test.ts
```

Additional non-file recommendations:

- Add the new test files to `vitest.fast.config.ts`'s include list (no Supabase dependency).
- Add one new line to the mission README template convention: `**Learning-Engine status:** NOT PROCESSED | PROCESSED — <date>`.
- No `.github/workflows/*.yml` file in this initial plan. Add a `workflow_dispatch`-triggered wrapper (`contents: read` for the harvest job; a separately scoped write/PR job only if needed) only after `node organizational-learning/scripts/harvest.mjs <MISSION-ID>` has been run manually and reviewed against at least one real already-closed mission (e.g. `SB-OPS-CI-ARCHITECTURE-1.0`, which already has a clean, complete stage-file record to harvest from).
- No AI-provider dependency, no AI-provider secret, in this initial plan.

---

## 12. Specific changes required to the proposal

1. Replace `.schema.json` + a new JSON-Schema validator with **Zod** schemas (already a dependency).
2. Redefine Phase 3 ("AI candidate-learning extraction") as **an authorized AI mission session** producing the candidate report as a normal reviewed deliverable — remove the implication that GitHub Actions needs an AI-provider secret and dependency in v1.
3. Collapse the 7 proposed registries to **2 for v1** (`lessons/`, `risks/`); explicitly defer `resources/`, `skills/`, `capabilities/`, `tools/`, `decisions/`.
4. Reuse **git blob SHA** for all manifest/receipt hashing instead of introducing a new hash scheme.
5. Reuse **gitleaks** for secret screening instead of specifying a bespoke detector.
6. Replace the open-ended trigger discussion (Section 23) with a firm decision: **`workflow_dispatch`, fired manually by Mission Control after human closure confirmation**, plus the one new mission-README status field.
7. Simplify the Mission Learning Report from 23 to **~8 sections** for v1.
8. Simplify context-pack retrieval to a **plain category/system filter**, not a ranking algorithm.
9. **Defer** contradiction/reconciliation *detection logic* to a later phase; keep the `supersedes`/`superseded_by` schema fields now.
10. Add an explicit mapping of every engine action (harvest, draft, write, promote) onto `17_AI_Operations_Manual.md`'s A3 capability classes and A6 approval tiers, before implementation authorization — the proposal's `authority_effect: NONE` language is not yet anchored to that binding taxonomy.
11. **Defer** all three GitHub Actions workflow files (Section 23) until the harvester is proven as a manually-run local Node CLI command against at least one real mission.
12. Explicitly resolve whether `communication/live/**` is in or out of the source allowlist — recommend **excluded**, given the confirmed historical secret leak at that exact layer.

---

## 13. Open questions / blockers

- **NEEDS FOUNDER / MISSION CONTROL DECISION:** Does Mission Control accept "AI extraction = authorized mission session" as the Phase 3 model, or does it actually want a standing CI-embedded model integration? This single decision changes Phase 3's dependency footprint, secret footprint, and injection-risk profile entirely, and should be settled explicitly rather than left implicit in a future implementation mission.
- **NEEDS DECISION:** Who is the specific named human reviewer/approver of record for candidate-lesson promotion to `INSTITUTIONALISED`? The proposal says "Mission Control review" in the abstract (Section 8/24) but does not name a role or process distinct from ordinary PR review — this should be made concrete before Phase 4 is authorized.
- **NEEDS DECISION:** Does the new mission-README "Learning-Engine status" field apply retroactively to already-closed missions, or only going forward? Retroactive application implies a one-time housekeeping pass across `communication/missions/**`, which is out of scope for a review-only mission to decide unilaterally.
- **BLOCKER (resolved by this review, needs Mission Control confirmation):** whether `communication/live/**` is harvester-eligible. This review recommends explicit exclusion given the confirmed historical leak at `communication/live/report1.57.md`; Mission Control should confirm this before any allowlist is finalized.

---

## 14. Suggested next gate

1. Mission Control reconciles this review against the Codex independent review per handover `H-003`.
2. Mission Control issues a corrected proposal scope (or a revision to Sections 5, 11, 23, and 30) reflecting the KEEP/SIMPLIFY/DEFER/REJECT calls in Section 10 above, resolving the open questions in Section 13.
3. Founder decision is obtained specifically on the Phase 3 AI-extraction model (Section 13, first bullet), since it materially changes cost, dependency, and security posture.
4. Mission Control authorizes a new, separate, narrowly-scoped implementation mission (e.g. `SB-ORG-LEARNING-1.1`) limited to the Section 11 file-level plan: Zod schemas, allowlist, `harvest.mjs` as a manual local CLI, and fast-tier tests — no GitHub Actions workflow, no AI-provider dependency — run once against one real already-closed mission as a proof of concept before any further phase is considered.

---

## Appendix — Answers to the 20 required review questions

| # | Question (short form) | Answer | See |
|---|---|---|---|
| 1 | Safest authoritative mission-close trigger | `workflow_dispatch`, fired manually by Mission Control only after existing human closure confirmation (Protocol §27) | §5 |
| 2 | Is `organizational-learning/` the correct root | Yes — matches existing top-level domain convention | §3 |
| 3 | Existing files/scripts/conventions to reuse | `scripts/supabase-cli.mjs` pattern, Zod, vitest fast tier, Markdown Quality Gate, gitleaks, git blob SHA | §2, §3, §6 |
| 4 | Machine-readable mission metadata to add | None exists; add one mission-README status line | §5 |
| 5 | Best deterministic runtime/language | Node.js ESM, matching existing repo convention | §3 |
| 6 | Can GitHub Actions safely orchestrate v1 | Yes, for deterministic steps only, via `workflow_dispatch` and `contents: read`; defer write/PR jobs and any AI-call job | §5 |
| 7 | Protected-path allowlist/denylist design | Explicit literal allowlist, excluding `communication/live/**` | §4 |
| 8 | How manifests/hashes/receipts should work | Reuse git blob SHA; explicit `schemaVersion` field | §6, §7 |
| 9 | Idempotency/concurrency control | Source-manifest hash no-op check; GitHub Actions `concurrency:` group keyed on mission ID | §7 |
| 10 | Treat source content as untrusted | Yes; sharpened by confirmed historical leak evidence; no CI-embedded model call reduces this surface further | §4 |
| 11 | Prevent secret/sensitive leakage | Reuse gitleaks; exclude `communication/live/**` from the allowlist | §4 |
| 12 | Unnecessary parts of the proposal for v1 | 5 of 7 registries, JSON Schema tooling, CI-embedded AI call, ranking-based retrieval, 23-section report | §10 |
| 13 | Missing tests | Allowlist test written first; Markdown Quality Gate compliance test for generated docs; zero-source fail-closed test | §7, §8 |
| 14 | Future phases to defer further | Tool/skill/capability/decision registries, contradiction-detection logic, all 3 workflows, historical backfill | §10 |
| 15 | Exact minimal v1 file footprint | See file tree | §11 |
| 16 | What stays manual after v1 | Mission-close confirmation, workflow_dispatch firing, candidate-report authorship (as a mission session), registry-promotion review/merge | §5, §10 |
| 17 | Conflicts with current conventions | JSON Schema vs. Zod convention; write-capable CI workflow vs. all-read-only current workflows; CI-embedded AI call vs. no existing AI-provider dependency | §2, §4 |
| 18 | Second source of truth risk | Mitigated by D-004/D-005/D-007 as designed; sharpened further by recommending the report/registry always cite, never duplicate, the durable mission record already in `communication/missions/**` | §6 |
| 19 | Avoiding stale/superseded context overload | Plain filter-based context packs at current registry scale; defer ranking | §3 |
| 20 | Build-order changes recommended | Schemas/allowlist/tests first → manual CLI harvest proven on one real mission → mission-session-authored candidate report → only then consider a workflow wrapper | §11, §14 |
