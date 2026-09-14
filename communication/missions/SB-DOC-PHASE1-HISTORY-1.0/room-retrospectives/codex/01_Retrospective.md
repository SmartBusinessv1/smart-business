# Codex — Phase 1 Institutional Retrospective

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`

**Contributor:** `CODEX`

**Role recovered:** Independent repository review, technical counter-review, Product-definition support, evidence verification, and bounded administrative execution

**Authority:** Documentation only; no Product Truth, governance, implementation, acceptance, deployment, or production authority

This synthesis reconciles five provenance-labelled Codex evidence files against current merged governance and Product Truth at `main` SHA `1196ead6c07256a8bf7f9607b2059294b71ca78b`. It does not claim access to inaccessible raw Codex chats. Historical claims reconstructed from durable artifacts are labelled as artifact-attributed or back-referenced evidence. Work performed by Claude Code, Claude Engineering, Infrastructure Operations, Security, Lovable, Supabase, Mission Control, or the Founder remains attributed to those actors.

## 1. Lessons Learned

1. **CURRENT — STILL VALID:** Independent review must be willing to contradict a completion claim. SB-P-1.8 compiled and built, yet Codex found four acceptance blockers: manually edited generated types, a missing trigger, rounded paise, and undisclosed repository scope.
2. **CURRENT — STILL VALID:** Repository state beats expected state. Tracked/untracked files, branch/base SHA, migrations, generated artifacts, and merged history must be inspected directly.
3. **CURRENT — STILL VALID:** Generated evidence cannot override its source. Database types, schema snapshots, route trees, and other generated surfaces must be regenerated from authoritative inputs; hand edits are drift signals.
4. **CURRENT — STILL VALID:** Static analysis and CI are bounded evidence. Typecheck/build success does not prove RLS denial, database execution, browser behavior, production parity, accessibility, or acceptance.
5. **CURRENT — STILL VALID:** Implementation presence is not feature maturity. The current 25-contract completion frame separates foundation presence from complete merchant workflows and formal acceptance.
6. **CURRENT — STILL VALID:** Security requires negative paths. Cross-business select/insert denial, unauthenticated denial, revoked permission, malformed input, retries, and privileged-function behavior must be exercised—not assumed from a happy path.
7. **CURRENT — STILL VALID:** Financial precision is product integrity. Hiding paise or permitting destructive correction can change business meaning even when storage is technically valid.
8. **CURRENT — STILL VALID:** Consequential data repair preserves history. Corrections, link replacements, and financial changes need attribution, before/after meaning, confirmation, and atomic failure behavior.
9. **CURRENT — STILL VALID:** Idempotency is a business requirement, not only an API optimization. Pending-button protection does not cover retries, refresh, concurrent clients, or channel redelivery.
10. **CURRENT — STILL VALID:** Authorization is revalidated at execution time. Authentication, role labels, preview-time permission, service-role access, and client-round-tripped values do not independently authorize a mutation.
11. **CURRENT — STILL VALID:** Product questions return to Product Truth, Mission Control, or the Founder. A reviewer can expose ambiguity but cannot settle merchant behavior through technical preference.
12. **CURRENT — STILL VALID:** One reviewer must not inherit another actor's conclusion uncritically. Builder reports, Lovable output, Mission Control summaries, and earlier Codex findings remain evidence inputs.
13. **CURRENT — STILL VALID:** Unknown remains unknown. Repository history could not fully explain provider usage; inaccessible sessions and unverified runtime claims were not converted into facts.
14. **CURRENT — STILL VALID:** Findings should be reproducible and precisely classified as `PASS`, `FAIL`, `FOLLOW-UP`, `NOT APPLICABLE`, or `INSUFFICIENT EVIDENCE`.
15. **CURRENT — STILL VALID:** Tool capability does not equal authority. Codex may inspect, write, push, or query only within the active mission's actor, environment, path, branch, and lifecycle bounds.

## 2. Capabilities Acquired

| Capability | Evidence | Proven boundary |
|---|---|---|
| Repository-wide static analysis | SB-P-1.8 review; SB-AUDIT-1.0; governance inventories | Repository evidence, not runtime proof |
| Structured PR/contract review | SB-P-1.8 findings F-01–F-08 | Review and recommendation, not acceptance |
| TypeScript/React review | Service, route, dashboard, validation, formatting analysis | Static/local build evidence |
| SQL/Supabase/RLS analysis | Migration, grants, policies, trigger, types | Static review unless live tests are separately authorized |
| Financial-integrity review | Paise rounding, correction history, idempotency observations | Does not define Founder financial policy |
| Negative-path analysis | Cross-tenant denial, failure-state preservation, retry concerns | Requires runtime harness for proof |
| Generated-artifact drift detection | Manual Supabase-type finding | Fix source, regenerate, compare |
| Dependency and implementation-completeness audit | SB-P-1.11 readiness against SB-P-1.10 | Stage-specific readiness only |
| Architecture contradiction detection | Catalog/Inventory/Transaction separation; environment and authority conflicts | Escalates Product/governance questions |
| Evidence classification and historical reconstruction | Five evidence files; status/conflict/canonical inventories | No fabricated memory or attribution |
| Product discovery facilitation | SB-P-1.11 D-001–D-068 and Blueprint drafting | Founder owns decisions |
| Protected repository publication | Mission branches, exact staging, PRs, Markdown gates | No self-approval or merge |

**ATTRIBUTION UNRESOLVED:** No durable evidence supports treating all work historically called “Claude,” “Claude Engineering,” or generic AI work as Codex capability. It is excluded.

## 3. Tools We Have

| Capability | Demonstrated use | Limitation | Authority boundary |
|---|---|---|---|
| Git | Status, diff, history, merge topology, exact-file staging | Local/repository state only | Mission-scoped branches |
| GitHub and PR records | Protected publication, reviews, merge evidence | Merge is not acceptance | No self-merge |
| Repository search | Cross-file attribution, status, schema, evidence discovery | Text occurrence is not truth | Read-only unless authorized |
| TypeScript compiler | Static project validation | No runtime/database proof | Local checks |
| ESLint/build tooling | Targeted lint and production bundle | CI/build scope is bounded | No deployment |
| PostgreSQL/Supabase artifacts | SQL, RLS, grants, RPC/type comparison | File presence is not execution | No database mutation without explicit mission |
| Markdown mission system | Blueprints, decision records, audits, reports | Documentation cannot manufacture authority | Quality-gated PR workflow |
| Hash/file inventory tooling | Legacy-source integrity and deterministic scope | Byte integrity is not canonicality by itself | Evidence support |
| Lovable code/reports | Builder-output counter-review | Preview/provider state requires independent evidence | No Lovable mutation here |
| CI logs/checks | Bounded automated evidence | Green CI proves only configured checks | Mission Control accepts |

## 4. Suggested Tools to Have

Every item below is a **RECOMMENDATION — NOT YET ADOPTED**.

- Contract-to-code traceability scanner mapping Blueprint/EIS acceptance criteria to files, tests, runtime evidence, and unresolved gaps.
- Builder-report-versus-code verifier that flags claimed files, checks, routes, migrations, and omissions.
- Generated-file drift detector and schema-versus-generated-types comparator.
- Migration execution/currency register connecting each migration SHA to authorized environments and provider ledger state.
- RLS negative-path and cross-business fixture harness.
- Permission-matrix regression suite including revocation between preview and commit.
- Financial precision and destructive-edit static scanner.
- `SECURITY DEFINER`, privileged-grant, and service-role trust-boundary scanner.
- Idempotency/retry/concurrency harness for consequential mutations and channel redelivery.
- Runtime-evidence manifest validator binding environment, actor, commit, timestamp, scenario, and result.
- Canonical-versus-delivery repository drift detector.
- PR risk classifier and review-checklist generator derived from mission scope.
- Overclaim-language and stale-evidence detector for `verified`, `production`, `complete`, and `PASS` claims.

## 5. Suggestions to Improve This Project

- Begin independent review early enough to shape testability, while preserving a final review of the completed implementation.
- Derive the Codex review checklist mechanically from locked Blueprint/EIS acceptance criteria.
- Require success, denial, malformed-input, missing-data, duplicate/retry, stale-state, and dependency-failure scenarios for every sensitive feature.
- Require generated-type regeneration evidence whenever schema changes.
- Maintain a machine-readable migration environment ledger; never infer execution from files.
- Require idempotency semantics for every consequential mutation before adding additional channels.
- Require explicit trust-boundary reasoning for every privileged RPC, grant, service role, and `SECURITY DEFINER` function.
- Produce evidence before the completion report and identify exactly what was not verified.
- Bind production claims to production-specific evidence and the exact deployed commit.
- Map every mission's contribution to the 25 mature contracts and Global Product Completion Register.
- Keep visual implementation/runtime work in Lovable and repository reasoning/reporting in repository-native tools.
- Classify findings as blocking, non-blocking follow-up, residual risk, or insufficient evidence.
- Automate repetitive evidence capture to reduce Founder technical burden without transferring Founder decision authority.

## 6. What Future Rooms Must Know Before Touching This Area

- Read current Product Truth and canonical authority before reviewing code: Source 00, Source 01, Source 11, then the applicable Source 12/17/18 controls.
- Pull current `main`; record exact SHA, branch, repository, mission stage, actor, and environment.
- Verify whether canonical, delivery, test, preview, and production repositories/environments differ.
- Never assume Builder, Claude, prior Codex, or Mission Control summaries are correct without checking their evidence scope.
- Do not infer runtime from repository, production from test, or acceptance from CI/merge.
- Inspect server-side permission enforcement and denial paths.
- Check database truth and migration ledger, not generated types alone.
- Preserve financial history and paise precision; reject silent/destructive reinterpretation.
- Check idempotency, concurrency, and execution-time permission revalidation.
- Label missing evidence `INSUFFICIENT EVIDENCE` and stop at the exact boundary.
- Return Product decisions to Founder/Product authority; return lifecycle/acceptance decisions to Mission Control.
- Do not claim another actor's work. Identify the proving artifact or mark attribution unresolved.
- Provide reproducible file/line, command, test, environment, and result evidence.
- Separate blockers from follow-ups and prefer narrow findings over sweeping claims.
- Remember: tool capability is not authority.

Current architecture to preserve:

- Product Master/Catalog, Inventory, and Transactions remain separate truth domains.
- Product & Price Master is a shared foundation, not a standalone 26th feature.
- Native Conversation and shared AI/action services precede WhatsApp; WhatsApp is a channel adapter, not the brain.
- Shared Business Memory, permission system, deterministic action layer, UDI, and reminder/automation foundations must be reused across channels.
- AI is assistant, not judge; Ask CFO remains read-only/advisory.
- Employees are permission-scoped, and authority is checked at execution.
- Nine cumulative future Product Missions run from SB-P-1.12 through SB-P-1.20.
- Twenty-five mature contracts—not mission count or UI card count—form the product-completion frame.

## 7. Do-Not-Repeat Register

| Failure mode | Required correction |
|---|---|
| Rubber-stamp Builder output | Independently map claims to repository/runtime evidence |
| Treat green CI as acceptance | State exactly what CI checked and retain other gates |
| Treat generated types as database truth | Apply authoritative schema under authorization, regenerate, compare |
| Hand-edit generated artifacts to conceal drift | Fix the source of truth |
| Treat preview as production | Bind evidence to exact environment/deployed SHA |
| Infer production configuration from test | Verify production independently |
| Infer isolation from authorized happy path | Exercise unauthenticated and cross-tenant denial |
| Trust client-round-tripped values at mutation time | Re-read/revalidate authoritative state |
| Permit destructive financial editing | Use correction/audit history and explicit authority |
| Ignore paise/currency precision | Test and display meaningful decimals |
| Use `SECURITY DEFINER` casually | Minimize privilege and document caller/executor boundary |
| Let service role replace product authorization | Enforce domain permission inside governed server path |
| Equate a UI card with functionality | Verify workflow, persistence, errors, and merchant understanding |
| Expand review into Product authority | Escalate Product contradictions |
| Attribute work by role resemblance | Require byline/provenance or mark unresolved |
| Call unresolved evidence `PASS` | Use `INSUFFICIENT EVIDENCE` |
| Silently resolve contradictions | Record conflict and controlling authority |
| Mutate runtime in a documentation mission | Preserve non-mutation boundary |
| Re-run production for report wording | Correct evidence/report only |
| Redo work solely for ceremony | Reuse independently reviewable evidence with provenance |

## 8. Current Truth vs Historical Truth

| Topic | Historical understanding | Current truth | Codex lesson | What must not return |
|---|---|---|---|---|
| Codex identity/role | Reviewer, auditor, Product drafter, administrative executor varied by mission | Independent evidence/challenge and scoped drafting; no automatic authority | State role per mission | Generic “AI co-founder” authority blur |
| Product Truth authority | Distributed historical sources and conversations | Founder-approved current sources control | Reconcile history downward | Historical suggestion promoted automatically |
| Independent review | Sometimes followed implementation late | Separate reviewer must challenge claims and evidence | Independence is behavioral and procedural | Self-acceptance |
| Claude/Codex attribution | Names were sometimes used loosely | Artifact byline/provenance controls | Prove actor, do not infer | Role-resemblance attribution |
| Implementation vs verification | “Built” could imply “done” | Build, verify, accept, close are separate | Track stage/status explicitly | Completion overclaim |
| CI | Green checks felt comprehensive | CI is bounded evidence | Name checks and omissions | Green = accepted |
| Runtime/production | Repository or test evidence could be overread | Exact environment and deployed SHA required | Evidence layer matters | Test = production |
| Financial integrity | Formatting/correction treated as UI behavior | Precision, audit, idempotency, and non-destructive history are product integrity | Review monetary meaning | Whole-rupee hiding/destructive edits |
| RLS/security | Policy presence could imply isolation | Server enforcement plus negative-path proof | Authorized success is insufficient | Frontend trust/happy-path-only evidence |
| Generated types | Could be manually aligned with expected schema | Derived evidence must be regenerated | Fix source truth | Hand-edited generated proof |
| Migrations | Committed file could look deployable | Execution is separately authorized and environment-specific | Presence ≠ execution | Historical SQL re-execution |
| Canonical vs delivery repo | One repository could be assumed | Repository roles may differ and require reconciliation | Verify topology | Silent substitution |
| Lovable | Builder reports/preview could imply feature completion | Lovable is strong for visual build/runtime; output needs independent verification | Allocate by task | Builder confidence as acceptance |
| Product & Price Master | SB-P-1.11 presented Catalog/Pricing as a product surface | Shared foundation within 25-contract frame, not a 26th feature | Preserve engineering, contextualize surface | New standalone feature family |
| Opening Stock | Could appear as catalog/import convenience | Inventory movement/UDI convergence; no second stock truth | Preserve domain ownership | Catalog quantity mutation |
| Conversation/WhatsApp | WhatsApp-first could become WhatsApp-owned logic | Native Conversation/AI first; WhatsApp later as adapter | Channel independence | Separate WhatsApp brain/data |
| 25 contracts | Mission/module lists implied completion | Mature contract frame controls product completion | Map each mission globally | UI/mission count as maturity |
| Nine missions | Earlier roadmap stopped at 1.11 | SB-P-1.12–1.20 cumulative sequence | Verify current plan | Ad-hoc unauthorized sequence |
| Acceptance/completion | Reports sometimes carried conflicting status | Mission Control acceptance and closure are explicit gates | One authoritative status/evidence bundle | Ambiguous “complete” |

## 9. Evidence Pointers

Primary Codex evidence:

- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/codex/session-evidence/01_sb_p_1_8_independent_implementation_review.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/codex/session-evidence/02_repository_lovable_and_evidence_audit.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/codex/session-evidence/03_governance_communication_and_canonicalization.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/codex/session-evidence/04_migration_authority_and_repository_controls.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/codex/session-evidence/05_sb_p_1_11_readiness_product_definition_and_lock.md`
- `docs/implementation/SB-P-1.8_Codex_Implementation_Review.md`
- `docs/audits/SB-AUDIT-1.0-Codex-Lovable-Credit-Repository-Audit.md`
- Codex mission folders under `communication/missions/SB-GOV-*` and accepted Codex archives under `communication/archive/SB-GOV-*`.
- `communication/archive/SB-P-1.11-READINESS-1.0/communication.md`
- `communication/archive/SB-P-1.11/source/report1.3.md`, `report1.5.md`, and `report1.8.md`
- `docs/phase-1-mission-blueprint/completed/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/completed/SB-P-1.11-Founder-Product-Decision-Record.md`

Current authority and corroboration:

- `merge/active/00_Lighthouse_Constitution.md`
- `merge/active/01_Smart_Business_Master_System_Manifesto.md`
- `merge/active/11_Smart_Business_Product_Truth_Map.md`
- `merge/active/12_Product_Execution_and_Release_Framework.md`
- `merge/active/17_AI_Operations_Manual.md`
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
- `mission-control/mission-control-1-12.md`
- `mission-control/mission-control-13-21.md`
- `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md`
- `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`
- Merged specialist retrospectives and the five Claude Code session-evidence files under `room-retrospectives/`.

No inaccessible raw chats are claimed as reviewed.

## 10. Open Questions / Residual Risks

- **UNRESOLVED:** Historical Codex sessions outside durable repository artifacts were inaccessible. `HISTORICAL EVIDENCE NOT RECOVERABLE WITH SUFFICIENT CONFIDENCE` applies to their undocumented actions and rationale.
- **ATTRIBUTION UNRESOLVED:** Some early “Claude,” “engineering,” generic AI, database-execution, and governance actions cannot safely be assigned to Codex.
- **UNRESOLVED:** Point-in-time implementation defects and follow-ups must be checked against current code/runtime before being described as open today.
- **UNRESOLVED:** Current schema/runtime/generated-type parity was not tested in this documentation mission.
- **UNRESOLVED:** CI coverage, negative-path automation, provider state, production deployment state, and canonical/delivery topology remain volatile and require mission-specific revalidation.
- **UNRESOLVED:** Repository evidence cannot fully reconstruct provider usage or uncommitted visual-builder work.
- **RECOMMENDATION — NOT YET ADOPTED:** Machine-indexed contract/evidence, migration-state, RLS-denial, permission, idempotency, and runtime-manifest tooling would materially reduce repeated manual review.
- **ADJACENT INSTITUTIONAL EVIDENCE — NOT CODEX CAPABILITY:** Current infrastructure/security/implementation conclusions from other retrospectives remain valuable but are not proof that Codex performed that work.

Codex historical recovery is complete to the maximum reasonably recoverable evidence boundary available in the repository and accessible session context. Additional searching had begun to repeat the same artifact families rather than yield materially new, attributable Codex knowledge.
