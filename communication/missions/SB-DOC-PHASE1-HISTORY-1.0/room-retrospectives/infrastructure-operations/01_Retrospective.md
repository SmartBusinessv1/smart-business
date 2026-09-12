# SMART BUSINESS — INFRASTRUCTURE OPERATIONS INSTITUTIONAL RETROSPECTIVE

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`  
**Contributor:** Infrastructure Operations  
**Scope:** Documentation and institutional-memory capture only  
**Implementation authority:** None  
**Canonical repository reviewed:** `SmartBusinessv1/smart-business`  
**Canonical baseline:** `6ebd7dc54653fa5b5b507b0bd51b1d0022177300`  
**Date:** 2026-09-13

This retrospective preserves the operational judgement learned by Infrastructure Operations during Phase 1. It is not a new implementation authority, provider commitment, architecture amendment, Product Truth amendment, or permission to reactivate any closed or paused infrastructure workstream.

## 1. Lessons Learned

### 1.1 Environment identity must precede action

**CURRENT — STILL VALID**

The strongest recurring infrastructure lesson is simple: never mutate an environment that has not been positively identified. Before an infrastructure action, the operator must establish the repository, branch or immutable commit, provider account, project or service identity, region where applicable, production/non-production status, deployment target, and the relevant configuration boundary.

The dangerous forms of reasoning are operational shortcuts such as “this is probably production”, “this project must be test”, “this Lambda must be current”, “this Lovable workspace is the active one”, or “this branch is the delivery branch”. Phase 1 repeatedly showed that familiar names and healthy-looking dashboards are not sufficient identity proof.

**CORRECTION / LESSON**

A provider object, repository, project, domain, or runtime should be identified by stable evidence before mutation. Display names are useful but are not enough when stronger identifiers are available.

### 1.2 Canonical repository, delivery repository, builder, deployment and runtime are different truths

**CURRENT — STILL VALID**

Phase 1 required a durable distinction among:

- canonical implementation state in `SmartBusinessv1/smart-business`;
- production delivery history in `SmartBusinessv1/starter-supab-shell`;
- Lovable builder/project state;
- deployment/publication state;
- production runtime state at `smartbusiness.teamlips.com`.

The canonical repository remained the authoritative implementation/history source while the intended production Lovable delivery path used `starter-supab-shell`. This two-repository reality created operational drift risk and required explicit synchronization rather than assuming one repository represented the other.

The exact historical cause of every divergence is not fully evidenced in Infrastructure Operations and must not be invented. What is proven is that the divergence existed, was operationally significant, and was addressed through `SB-OPS-PROD-SYNC-1.0`.

Durable rule:

> Repository identity must be verified before deployment, patching, rollback, or runtime claims.

### 1.3 Merge proof is not deployment proof, and deployment proof is not runtime proof

**CURRENT — STILL VALID**

Infrastructure Operations learned to separate the following events:

1. a commit exists;
2. a PR is merged;
3. the delivery artifact/repository contains the intended state;
4. deployment or publication is triggered;
5. deployment completes;
6. the intended domain points to the intended runtime;
7. the runtime serves the expected build;
8. the runtime targets the intended backend/environment;
9. Founder/runtime verification confirms practical behavior.

A repository inspection can establish repository truth. It cannot, by itself, establish current production runtime truth.

The required proof chain is:

`canonical commit → deployment artifact → production environment → runtime behavior`

### 1.4 Production cutover requires positive end-to-end verification

**CAPABILITY PROVEN**

`SB-OPS-PROD-SYNC-1.0` moved Smart Business from a drift-prone delivery situation into an explicitly verified production path. The mission synchronized the approved runtime state into the intended delivery repository, preserved delivery-specific Lovable tooling where required, verified the intended production Supabase binding, completed publication/custom-domain cutover, and then verified practical runtime behavior before closure.

The final verified path was recorded as:

`SmartBusinessv1/smart-business` → `SmartBusinessv1/starter-supab-shell` → Lovable project `f3e992ec-06df-4d49-b157-b92ec064c078` → production Supabase `gysgzasfcjvtrgaigfyn` → `https://smartbusiness.teamlips.com`.

The historical Lovable project `64c2b9b1-2461-4045-9acc-19e2658b8ca2` was preserved for historical evidence but removed from production authority and unpublished.

**CORRECTION / LESSON**

A merge must never be described as “production updated” until the actual deployment and runtime chain has been verified.

### 1.5 Platform-specific state must be preserved deliberately

**CURRENT — STILL VALID**

Synchronization does not mean copying every canonical file blindly into a delivery repository. Phase 1 proved the need to distinguish runtime files, target-specific tooling/configuration, governance/history that does not belong in delivery, generated platform state, and secrets/local configuration that must never be copied.

The Lovable delivery repository required target-specific tooling compatibility. Preserving that compatibility was part of safe synchronization, not evidence that the delivery repository had become canonical.

### 1.6 Cloudflare capability must be classified precisely

**CAPABILITY PROVEN**

Infrastructure Operations proved Cloudflare account operation and a non-production Cloudflare Workers runtime. The official account `Team LIPS - Smart Business` was created with MFA, and the non-production Worker `smart-business-parser-nonprod` was created and verified by a direct `Hello World!` runtime response.

That evidence did **not** establish Cloudflare R2 as a current media-storage capability. During the onboarding mission, R2, KV, D1, Queues, Durable Objects, custom DNS routing, Git integration, and parser secrets were deliberately not provisioned.

**CURRENT — STILL VALID**

Cloudflare infrastructure capability and Cloudflare R2 product capability must not be collapsed into one claim. R2 remains an approved future durable-media/storage direction, especially for future `SB-P-1.14`, unless later direct evidence establishes implementation.

### 1.7 AWS/Lambda infrastructure does not equal completed parser or UDI integration

**CAPABILITY PROVEN**

Phase 1 established meaningful AWS infrastructure/security capability around the non-production parser workstream, including a bounded GitHub Actions OIDC deploy role, constrained IAM permissions, a runtime permissions boundary, GitHub Environment gating, provider-derived role-assumption evidence, IAM policy simulation, and narrow corrections to runtime/deploy-policy boundaries.

The non-production work also demonstrated an important principle: an existing AWS account, role, Lambda-related policy, or runtime target is only one layer of infrastructure readiness. It does not prove that parser logic is fully deployed, end-to-end tested, wired into the application, or that production UDI is complete.

Keep separate:

- infrastructure exists;
- function/runtime is provisioned;
- function/runtime is deployed;
- function/parser behavior is tested;
- application integration is complete;
- production UDI is complete.

No parser mission is reactivated by this retrospective.

### 1.8 Least privilege is operational, not theoretical

**CAPABILITY PROVEN**

The AWS GC-42/GC-43 work demonstrated that a deploy role should be unable to administer its own privilege boundary. When a narrowly authorized boundary correction was required, the role's inability to perform that administrative change was treated as a successful security property, not as a reason to weaken the role.

The correction used a one-time Founder administrative session protected by MFA, only for the approved action. No IAM user, static access key, or persistent alternate administrative path was created. The Founder exited the administrative session immediately afterward, and sanitized evidence returned to the repository workflow.

A later deploy-policy correction similarly added only the approved `rolesanywhere:TagResource` capability for the approved non-production Trust Anchor/Profile ARN classes with the six locked GC-38R request-tag constraints. This is the pattern to preserve: correct the smallest missing permission, not the whole role.

### 1.9 Founder-stage sole-operator exception can remain governed

**CURRENT — STILL VALID**

At the founder stage, Riyas PK may be the sole authorized infrastructure operator for account-owner/private actions. This is an operational exception, not a governance vacuum.

The safe pattern learned in Phase 1 is:

- identify why Founder action is genuinely required;
- keep the requested action narrow and exact;
- keep passwords, MFA codes, private keys, recovery codes and other private credentials with the authorized human;
- avoid creating persistent privilege merely to make an AI workflow easier;
- tell the Founder exactly when to stop/sign out;
- return non-secret provider evidence into the mission record;
- require the normal review/approval path afterward.

The exception is not blanket permission for unrestricted production changes.

### 1.10 Tool access is not authority

**CURRENT — STILL VALID**

Infrastructure Operations had or encountered access paths involving GitHub, AWS, Cloudflare, Supabase, Lovable and deployment controls. None of those access paths independently authorized mutation.

Before changing infrastructure, an operator must verify:

- active mission authority;
- exact authorized scope;
- target environment;
- rollback/recovery expectation;
- evidence requirement;
- approval owner.

The correct response to ambiguous authority is to stop or escalate, not to use available tooling because it happens to be accessible.

### 1.11 Configuration presence does not prove correct targeting

**CURRENT — STILL VALID**

> Configuration presence does not prove correct environment targeting.

An environment variable, project ref, API URL, service credential, deployment setting or provider binding can be present and still target the wrong environment. Configuration must be verified against the intended environment identity, and secrets must not be copied between environments merely because names match.

### 1.12 Rollback must be concrete, not ceremonial

**CORRECTION / LESSON**

A rollback plan must identify the exact prior commit/artifact, environment, domain/routing state, database compatibility and relevant secrets/configuration dependencies. “We can roll back” is not a useful plan without those identities.

Infrastructure Operations developed stronger rollback/recovery thinking during Phase 1, but this retrospective does not claim that every provider-specific rollback mechanism was exercised. Where rollback was not directly exercised, it remains planning capability rather than proven recovery execution.

## 2. Capabilities Acquired

### Production operations capability

**CAPABILITY PROVEN**

- Production runtime synchronization from canonical implementation into the intended delivery path.
- Pre-publication and post-publication runtime verification.
- Custom-domain cutover verification for `smartbusiness.teamlips.com`.
- Distinguishing preview, published Lovable runtime and custom-domain production runtime.
- Preserving a historical workspace while removing it from production authority.
- Production change evidence that binds repository, delivery commit, project identity, backend identity and runtime checks.
- Recovery-oriented planning and known-good-state thinking, while avoiding claims that unexercised rollback procedures are proven.

### Cloud/infrastructure capability

**CAPABILITY PROVEN**

- AWS IAM/OIDC deployment-boundary design and provider-side verification for non-production parser infrastructure.
- GitHub Environment-mediated OIDC assumption with tightly scoped trust conditions.
- IAM policy simulation and provider-derived read-only evidence collection.
- Runtime permission-boundary correction without broadening unrelated permissions.
- One-time Founder administrative correction under MFA when the least-privileged deploy role correctly lacked administrative authority.
- Cloudflare account onboarding, MFA activation and non-production Worker creation/runtime verification.
- Environment/account/service identity verification before action.

### Repository/deployment capability

**CAPABILITY PROVEN**

- Canonical-versus-delivery repository reconciliation.
- Branch/commit/deployment traceability.
- Explicit synchronization maps before write operations.
- Protecting target-specific configuration rather than blind-copying canonical state.
- Separating repository proof from deployment/runtime proof.
- Human-reviewed PR workflow and no-self-merge discipline.

### Security-aware infrastructure capability

**CAPABILITY PROVEN**

- Least-privilege IAM boundary reasoning.
- Privileged session minimization.
- MFA-protected Founder account-owner operations.
- Avoiding persistent credentials/static-access-key shortcuts.
- Sanitized provider evidence collection.
- Secret-handling discipline and explicit non-secret evidence packages.
- Security handoff and re-verification after infrastructure/security corrections.

### Operational governance capability

**CAPABILITY PROVEN**

- Narrow Founder instructions for provider-only actions.
- Stopping at authority boundaries.
- Exact-gate resumption rather than reopening broader missions.
- Recording current state before mutation.
- Returning completion evidence through repository communication.
- No self-approval/self-merge for infrastructure-affecting work.

## 3. Tools We Have

### 3A. Tools / Infrastructure Actually Used or Proven by Infrastructure Operations

| Tool / infrastructure | Actual use / proven capability | Limitation / authority boundary |
|---|---|---|
| GitHub / Git | Canonical repository inspection, mission branches, commits, PRs, immutable SHA evidence, delivery-repository synchronization and review workflow. | Access does not authorize direct `main` mutation, self-merge or deployment. Repository identity must be established first. |
| GitHub Actions / Environments | Non-production deployment gating and OIDC trust path; environment-scoped identity was used as part of AWS assumption control. | Workflow existence is not deployment proof. Environment protections and approved branch/ref conditions must remain intact unless separately authorized. |
| Markdown Quality Gate | Documentation/communication CI gate used repeatedly for mission records. | Proves Markdown quality gate status only, not correctness of infrastructure state. |
| Local Git / CLI / shell / PowerShell workflows | Used for repository synchronization, verification, local checks and provider-supporting workflows where available. | Local state can diverge from remote/provider state; local evidence must not be mistaken for runtime truth. |
| AWS IAM | Bounded OIDC deploy role, customer-managed deploy policy and runtime permissions boundary were operationally exercised/reviewed. | IAM access must remain least-privilege; deploy-role possession is not IAM administration authority. |
| AWS STS / GitHub OIDC | Provider-derived role assumption verified for the intended non-production environment path. | Successful assumption proves identity/authorization for that session, not correctness of every downstream resource. |
| AWS CloudTrail / IAM Policy Simulator | Read-only/security evidence and effective-permission checks were used to validate the assumed-role path and denials. | Simulation/evidence is not a substitute for runtime verification of the application. |
| AWS Lambda / related parser infrastructure | Non-production parser infrastructure work established deploy/runtime boundary capability and Lambda-related operational knowledge. | Infrastructure readiness does not mean parser integration or production UDI is complete. No parser work is authorized here. |
| IAM Roles Anywhere | Trust/profile/workload-role integration was part of the non-production parser security model and deploy-policy correction history. | Must retain narrow resource/tag conditions; not a general-purpose credential path. |
| Cloudflare Workers | Official account, MFA and exactly one non-production Worker runtime were created and directly runtime-verified. | At the bootstrap evidence point there were zero bindings, no parser secrets, no Git integration and no production Worker. |
| Cloudflare domain/custom-domain operations | Production custom-domain cutover for `smartbusiness.teamlips.com` was verified during production recovery. | Cloudflare infrastructure capability does not imply R2 is implemented. DNS/domain changes require explicit authority and prior-state capture. |
| Lovable | Publication/runtime continuity, project identity and production delivery path were operationally verified during production recovery. | Preview state is not production; the historical project is not production authority. Builder access does not authorize product redesign. |
| Supabase | Infrastructure-side environment identity and production binding were verified as part of runtime/cutover work; production project `gysgzasfcjvtrgaigfyn` is part of the verified production path. | Schema/RLS/database authority belongs to Supabase Backend Architecture or the specifically authorized mission. Infrastructure Operations must not invent topology or mutate by inference. |
| Browser/provider consoles | Founder-guided AWS/Cloudflare evidence capture and practical runtime checks. | Console visibility is not authority. Screenshots/dashboard health must be paired with identity and runtime evidence. |

### 3B. Approved / Planned Providers or Integrations

**CURRENT — STILL VALID** distinctions:

- Cloudflare account/infrastructure exists and Workers capability is proven.
- Cloudflare R2 is **not** established here as a current media-storage implementation; it remains a future approved direction.
- Meta WhatsApp Cloud API is part of approved product architecture but is not classified here as Infrastructure Operations' completed production integration.
- Future OpenAI runtime integration is an approved architectural/product direction, not a present infrastructure capability merely because OpenAI is part of Smart Business architecture.
- A durable separate staging/test topology must not be invented. Historical test-project evidence exists, but current topology must be proven at the time of action.
- Future observability, deployment automation and infrastructure-as-code are recommendations unless separately adopted.

## 4. Suggested Tools to Have

The following are operational-safety recommendations, not approved provider commitments or current capabilities.

- **RECOMMENDATION — NOT YET ADOPTED:** automated environment-identity verifier that reports repository/ref, deployment target, provider project/account and production/non-production classification before mutation.
- **RECOMMENDATION — NOT YET ADOPTED:** canonical commit → delivery artifact → deployment → runtime parity checker.
- **RECOMMENDATION — NOT YET ADOPTED:** immutable deployment manifest recording canonical SHA, delivery SHA/artifact, project/service identity, backend identity, domain and verification timestamp.
- **RECOMMENDATION — NOT YET ADOPTED:** formal release tags tied to production deployments.
- **RECOMMENDATION — NOT YET ADOPTED:** automated retention of known-good deployment artifacts and provider rollback references.
- **RECOMMENDATION — NOT YET ADOPTED:** infrastructure-as-code for stable cloud boundaries where it reduces manual drift without adding disproportionate founder-stage overhead.
- **RECOMMENDATION — NOT YET ADOPTED:** DNS/configuration drift detection.
- **RECOMMENDATION — NOT YET ADOPTED:** centralized secrets-management workflow with scoped access, rotation records and environment binding.
- **RECOMMENDATION — NOT YET ADOPTED:** one maintained environment matrix/dashboard covering GitHub, Lovable, Supabase, AWS, Cloudflare and public domains.
- **RECOMMENDATION — NOT YET ADOPTED:** structured production change log linked to PR, deployment and runtime evidence.
- **RECOMMENDATION — NOT YET ADOPTED:** health/uptime monitoring and deployment smoke tests for the public production path.
- **RECOMMENDATION — NOT YET ADOPTED:** automated TLS/certificate/domain-routing verification.
- **RECOMMENDATION — NOT YET ADOPTED:** separate staging/test environment where future mission needs justify its cost and ownership model.
- **RECOMMENDATION — NOT YET ADOPTED:** deployment approval/check gates that bind the intended immutable commit to the intended environment.

## 5. Suggestions to Improve This Project

1. Require positive environment identity before every provider mutation, including repository/ref, provider account/project/service and production classification.
2. Include immutable canonical and delivery commit SHAs in every deployment evidence package.
3. Maintain one current environment matrix instead of relying on chat memory or provider display names.
4. Document the canonical repository and any delivery repository/path explicitly in every production-affecting mission.
5. Establish release tags or immutable deployment manifests after the founder-stage workflow stabilizes.
6. Record DNS/custom-domain state before and after material routing changes.
7. Require a concrete rollback/recovery plan before production changes, including database/config compatibility.
8. Keep staging/test topology evidence-backed; do not create or assume environments merely for conceptual neatness.
9. Minimize Founder relay work by having specialist rooms prepare exact, narrow, verifiable provider actions and then consume the returned evidence directly.
10. Preserve provider account/project/service IDs in controlled infrastructure records so identity can be checked without exposing secrets.
11. Make production state verifiable from repository/provider evidence without requiring historical chat reconstruction.
12. Require infrastructure evidence packages for missions that affect production runtime, domain/DNS, cloud permissions or deployment paths.
13. Keep privileged Founder sessions exceptional, MFA-protected, task-specific and short-lived; never normalize root/account-owner access as the ordinary deployment path.
14. Treat permission corrections as minimal deltas. A missing action should not become a reason to broaden an entire role or create static credentials.

## 6. What Future Rooms Must Know Before Touching This Area

- **CURRENT — STILL VALID:** canonical implementation repository is `SmartBusinessv1/smart-business`.
- **CURRENT — STILL VALID:** the production delivery history/path established by `SB-OPS-PROD-SYNC-1.0` uses `SmartBusinessv1/starter-supab-shell`; do not assume canonical and delivery histories are interchangeable.
- **CURRENT — STILL VALID:** production Lovable authority at cutover was project `f3e992ec-06df-4d49-b157-b92ec064c078`, while `64c2b9b1-2461-4045-9acc-19e2658b8ca2` was historical and unpublished. Re-verify current provider state before any future mutation.
- **CURRENT — STILL VALID:** production Supabase identity in the verified cutover path is `gysgzasfcjvtrgaigfyn` in `ap-south-1`.
- **CURRENT OBSERVATION — NOT COMPLETE HISTORICAL PROOF:** the later topology observation supplied to this retrospective identified one visible healthy `smart-business` Supabase project, ref `gysgzasfcjvtrgaigfyn`, with no current dev branches observed. This must not be used to deny the existence of historical/separately-owned test environments.
- **HISTORICAL — SUPERSEDED:** historical mission evidence references an isolated `smart-business-test` project/ref `drravyyauixltoihzmwo` used for rehearsals during production synchronization. Its present status/topology is not established by this room; Supabase Backend Architecture owns reconciliation.
- **CURRENT — STILL VALID:** `smartbusiness.teamlips.com` is the production product domain. A merge or builder preview does not prove what it currently serves; verify the runtime.
- **CURRENT — STILL VALID:** Cloudflare Workers capability is proven; R2 is not to be treated as an implemented current storage capability without direct evidence.
- **CURRENT — STILL VALID:** AWS non-production parser IAM/OIDC/security boundaries were deliberately narrow. Do not weaken them or reactivate GC-38/GC-42/GC-43 without explicit Mission Control authority.
- **CURRENT — STILL VALID:** Founder account-owner actions may be legitimate under the sole-operator exception, but only when the specific action actually requires Founder privilege and the mission authorizes it.
- **CURRENT — STILL VALID:** never create an IAM user, static key or persistent admin path merely to avoid a one-time controlled Founder action unless separately approved by Security/Mission Control.
- **CURRENT — STILL VALID:** do not expose passwords, OTPs, recovery codes, private keys, certificate secrets, service-role keys or API tokens in Git, chat evidence or screenshots.
- **CURRENT — STILL VALID:** no provider dashboard, healthy status badge, merged PR or successful build alone proves end-to-end runtime correctness.

## 7. Do-Not-Repeat Register

- **MISTAKE / FAILURE MODE:** deploying from an unverified repository or branch.
- **MISTAKE / FAILURE MODE:** treating merged `main` as proof that production changed.
- **MISTAKE / FAILURE MODE:** treating `starter-supab-shell` as canonical merely because it is part of the delivery path.
- **MISTAKE / FAILURE MODE:** blindly synchronizing entire repositories and overwriting target-specific platform configuration.
- **MISTAKE / FAILURE MODE:** mutating DNS/domain routing without recording prior state and target identity.
- **MISTAKE / FAILURE MODE:** treating a Lovable preview as published production.
- **MISTAKE / FAILURE MODE:** using the historical Lovable project because it appears newer, more complete or still accessible.
- **MISTAKE / FAILURE MODE:** assuming the one currently visible Supabase project represents the complete historical topology.
- **MISTAKE / FAILURE MODE:** inventing a staging/test environment because architecture diagrams would be cleaner with one.
- **MISTAKE / FAILURE MODE:** treating Lambda/IAM infrastructure readiness as proof of completed parser application integration or UDI.
- **MISTAKE / FAILURE MODE:** exposing secrets in Git, chat, screenshots or evidence packages.
- **MISTAKE / FAILURE MODE:** creating persistent administrator credentials because a bounded deploy role correctly cannot administer its own boundary.
- **MISTAKE / FAILURE MODE:** broadening an IAM role when only one narrowly defined permission/action is missing.
- **MISTAKE / FAILURE MODE:** running provider mutations merely because tool access exists.
- **MISTAKE / FAILURE MODE:** skipping rollback/recovery planning before production-affecting changes.
- **MISTAKE / FAILURE MODE:** treating a healthy provider dashboard as full runtime verification.
- **MISTAKE / FAILURE MODE:** allowing configuration drift to remain undocumented.
- **MISTAKE / FAILURE MODE:** using the Founder as a manual AI-to-AI relay instead of giving a narrow provider action and consuming evidence directly.
- **MISTAKE / FAILURE MODE:** making broad production changes under a narrow infrastructure authorization.
- **MISTAKE / FAILURE MODE:** self-approving or self-merging infrastructure work.
- **MISTAKE / FAILURE MODE:** reopening a closed parser/GC-42/GC-43 stream because related evidence happens to be under review.
- **MISTAKE / FAILURE MODE:** claiming rollback capability was exercised where only a rollback plan was prepared.

## 8. Current Truth vs Historical Truth

| Area | Historical state / assumption | Current truth preserved by this retrospective | Capability to preserve | Assumption that must not return |
|---|---|---|---|---|
| Canonical vs delivery repository | Canonical and delivery states diverged; two repository contexts created operational ambiguity. | `smart-business` is canonical implementation/history; `starter-supab-shell` was the verified production delivery repository/path at cutover. | Explicit synchronization mapping and SHA traceability. | “The delivery repo is canonical” or “the repos are automatically identical.” |
| Production runtime | Repository/build state could be newer than the actively served runtime. | `SB-OPS-PROD-SYNC-1.0` closed with verified publication and custom-domain runtime health. | Canonical → delivery → project → backend → domain proof chain. | “Merged means deployed.” |
| Lovable | Historical project `64c2...` remained a source of ambiguity during recovery. | Active production authority at cutover was `f3e992...`; historical project was renamed/unpublished, not deleted. | Stable project-ID verification plus publish/runtime verification. | “Whichever Lovable project looks most complete is production.” |
| Supabase topology | Historical records include a separate `smart-business-test` project/ref used for rehearsals. | Current supplied observation later identified one visible healthy production project `gysg...` and no current dev branches; present test/staging topology is not fully established by Infrastructure Operations. | Positive ref/environment verification before action. | “No test project ever existed” or “a current test project definitely exists.” |
| AWS/Lambda parser | Non-production IAM/OIDC/runtime-boundary work and parser infrastructure capability were established. | Infrastructure/security readiness does not establish complete parser wiring or production UDI. | Layered state reporting: infra / deploy / test / integration / production. | “Lambda exists, therefore UDI/parser is done.” |
| Cloudflare | Cloudflare account/Workers work could be conflated with all Cloudflare products. | Account/MFA/non-production Worker capability is proven; R2 was explicitly not provisioned in the bootstrap evidence and remains future direction absent later proof. | Product-by-product capability classification. | “Cloudflare exists, therefore R2 storage exists.” |
| Privileged access | Founder/root account-owner access was sometimes the only legitimate path for protected one-time corrections. | Sole-operator exception remains governed: MFA, narrow action, no persistent credential, immediate exit, evidence handoff. | Least privilege plus controlled break-glass/account-owner execution. | “Founder access means unrestricted authority.” |
| Runtime verification | Dashboard/repository observations could be treated as sufficient. | Present-tense runtime claims require provider/runtime checks, not repository inspection alone. | Runtime smoke checks and public-domain verification. | “Healthy dashboard = application verified.” |
| Deployment knowledge | Important identities were sometimes carried through active mission/chat context. | Durable mission records now preserve cutover, IDs, SHAs and evidence. | Repository-backed environment/deployment record. | Reliance on chat memory as operational source of truth. |

## 9. Evidence Pointers

Prefer these merged durable paths when reconstructing infrastructure truth:

### Institutional-learning authorities

- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/00_Mission_Control_Institutional_Learning_Capture_Protocol.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/01_Mission_Control_Retrospective_Dispatch_Pack.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/founder-room/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/research-intelligence/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/claude-engineering/01_Retrospective.md`

### Production synchronization / cutover

- `communication/missions/SB-OPS-PROD-SYNC-1.0/mission-control/03-production-cutover-closure-report.md`
- `communication/archive/SB-OPS-PROD-SYNC-1.0/communication.md`
- `communication/archive/SB-OPS-PROD-SYNC-1.0/report.md`
- `communication/archive/SB-OPS-PROD-SYNC-1.0/report1.1.md` through `report1.9.md` for the preserved chronological execution record.
- `docs/migration/README.md` for production/test migration-history context and later integrity work performed during the production synchronization mission.

### Canonical implementation / completion baseline

- `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`
- `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md`
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`

### Cloudflare non-production runtime evidence

- `communication/evidence/SB-P-1.11-GC-38R-Cloudflare-C1/provider-runtime-evidence.md`
- Historical completion report: `communication/live/report1.167.md` (use as historical evidence only; it is not current mission authority).

### AWS / IAM / parser security evidence

- `communication/evidence/SB-P-1.11-GC-43A/`
- `communication/evidence/SB-P-1.11-GC-43C/`
- `communication/evidence/SB-P-1.11-GC-38R-TagResource-Correction/`
- Historical completion reports around GC-42/GC-43/GC-38R under `communication/live/` should be used only to reconstruct the closed historical sequence, never as present execution authority.

### Lifecycle authority

- `18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` in the approved Smart Business source set remains relevant to mission lifecycle/delivery interpretation outside the repository evidence listed above.

## 10. Open Questions / Residual Risks

### 10.1 Exact cause of canonical/delivery repository divergence

**UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION**  
**Owner:** Mission Control / Infrastructure Operations

The operational divergence and recovery are evidenced. Infrastructure Operations should not invent a single historical root cause where the record does not prove one. Future prevention matters more than speculative causation.

### 10.2 Canonical-to-runtime parity can drift again

**CURRENT — STILL VALID RISK**  
**Owner:** Infrastructure Operations

The production synchronization mission repaired the identified drift, but a two-stage canonical/delivery path inherently creates recurrence risk unless parity is checked continuously or the delivery model is simplified under future authority.

### 10.3 Lovable project/runtime continuity must be re-verified before future mutation

**CURRENT — STILL VALID RISK**  
**Owner:** Lovable Builder/Lab + Infrastructure Operations

The cutover record establishes the active/historical identities at closure. Future project state can change. Do not treat September 2026 closure evidence as perpetual provider truth.

### 10.4 Supabase historical test-project reconciliation

**UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION**  
**Owner:** Supabase Backend Architecture

Historical production-sync evidence proves an isolated test project/ref was used for rehearsals, while the later current observation supplied to this mission saw one visible healthy production project and no current dev branches. The exact lifecycle/ownership/current status of historical test references belongs to Supabase Backend Architecture, not Infrastructure Operations.

### 10.5 No current staging environment should be presumed

**CURRENT — STILL VALID RISK**  
**Owner:** Mission Control / Infrastructure Operations

A dedicated current staging topology has not been established by the evidence controlling this retrospective. Future work should create one only if justified and authorized, not by assumption.

### 10.6 Parser/Lambda integration state requires future explicit authorization

**CURRENT — STILL VALID RISK**  
**Owner:** Mission Control / future authorized Product Mission / Security & Permissions Architecture

AWS/Lambda security and infrastructure capability exists, but that does not authorize or prove complete application/parser/production UDI integration. Closed or paused parser/GC streams must not be reactivated implicitly.

### 10.7 Rollback automation maturity

**CURRENT — STILL VALID RISK**  
**Owner:** Infrastructure Operations

Rollback reasoning improved, but automated artifact retention, one-command rollback and parity verification are not established here as current capabilities.

### 10.8 Secrets-management maturity

**CURRENT — STILL VALID RISK**  
**Owner:** Security & Permissions Architecture + Infrastructure Operations

Phase 1 demonstrated disciplined avoidance of secret exposure and persistent-credential shortcuts. A centralized, consistently evidenced secrets lifecycle across providers is not established here as a mature current capability.

### 10.9 Configuration and DNS drift

**CURRENT — STILL VALID RISK**  
**Owner:** Infrastructure Operations

Manual provider state can drift after a correct deployment. Environment matrices, DNS state records and runtime verification should remain current rather than relying on old screenshots or chat memory.

### 10.10 Production observability

**RECOMMENDATION — NOT YET ADOPTED**  
**Owner:** Infrastructure Operations / future authorized Product Mission

The record shows practical runtime verification, but this retrospective does not establish comprehensive automated production observability, synthetic monitoring or alerting as a current capability.

### 10.11 Cloudflare R2 remains future work

**CURRENT — STILL VALID RISK / FUTURE DIRECTION**  
**Owner:** future authorized Product Mission

R2 must not be described as current storage capability until direct implementation and runtime evidence exists.

### 10.12 GC-42 / GC-43 boundaries must remain closed unless explicitly reopened

**CURRENT — STILL VALID**  
**Owner:** Mission Control + Security & Permissions Architecture

Historical IAM/OIDC corrections should remain evidence and learning, not an invitation to continue modifying the boundary. Any new change requires separate authorization and fresh current-state verification.
